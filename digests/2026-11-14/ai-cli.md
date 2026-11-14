# AI CLI 工具社区动态日报 2026-11-14

> 生成时间: 2026-11-14 05:47 UTC | 覆盖工具: 8 个

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

**分析日期：2026-11-14**

## 1. 生态全景

当前 AI CLI 正从“单会话代码生成器”加速演进为可编排的 Agent 工作台，**多 Agent、MCP、Skills、后台任务和跨会话生命周期**成为共同主线。与此同时，竞争焦点已由模型能力转向工程可靠性：执行安全、权限边界、状态一致性、长任务恢复和跨平台稳定性显著升温。  
各产品路线开始分化：Codex 强化桌面端、远程控制与多 Provider；Claude Code 聚焦 Desktop、自动化和多代理可观测性；Gemini CLI 强化子代理、安全策略与上下文效率；GitHub Copilot CLI 强调企业权限、MCP 与 Git 工作流；OpenCode、jcode 和 pi 则以开放模型、多端工作台及可扩展协议见长。  
整体来看，生态已进入“**功能扩张与基础设施补课并行**”阶段，但频繁的版本回归、会话损坏、进程泄漏和权限误判，仍是规模化生产使用的主要阻碍。

---

## 2. 各工具活跃度对比

> Issue/PR 数量按摘要披露口径统计；“未披露”表示日报未提供完整总量，不能据此判断为零。

| 工具 | 今日 Issues | 今日 PRs | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个热点条目 | 1 条更新 PR | **v2.1.325** | 高：安全修复与桌面、多代理、自动化需求集中 |
| **OpenAI Codex** | 10 个热点条目；另有补充 Issue | 10 条重要 PR | **rust-v0.169.0**；另有 3 个 alpha | 很高：产品面广，工程与跨平台反馈密集 |
| **Gemini CLI** | **50 条** | **43 条** | 无 | 很高：原始社区活动量领先，修复 PR 密度突出 |
| **GitHub Copilot CLI** | **41 条** | **2 条** | **v1.0.112、v1.0.112-0、v1.0.111** | 高：企业认证、权限与 Agent 稳定性是主线 |
| **Kimi Code CLI** | 未披露 | 未披露 | 无；过去 24 小时无活动 | 低：当日社区信号不足 |
| **OpenCode** | 10 个热点条目 | 10 条重要 PR | **v2.3.0** | 高：后台子代理推动讨论，迁移与资源问题突出 |
| **jcode** | 10 个热点条目 | 10 条重要 PR，另有更多补充 | 无 | 高：Swarm、ACP 与 Provider 兼容迭代密集 |
| **pi** | 10 个热点条目 | 10 条重要 PR，另有补充 | 无 | 高：多 Provider、流式请求和 TUI 稳定性是核心 |

### 活跃度解读

- **按原始社区吞吐量看**：Gemini CLI 和 GitHub Copilot CLI 最活跃，分别披露 50/43 和 41/2 个 Issue/PR。
- **按重点条目看**：多数工具均整理出 10 个热点 Issue 与 10 个重要 PR，横向可比性较高。
- **按版本推进看**：Claude Code、Codex、Copilot CLI 和 OpenCode 当日均有正式发布；Kimi Code CLI 则无活动。
- Codex 当日同时推进 Windows、macOS、Remote、MCP、Provider 和追踪能力，发布面最广；Gemini CLI 则更集中于子代理与安全修复。

---

## 3. 共同关注的功能方向

### 3.1 多 Agent 从“能调用”转向“能编排、能观察、能恢复”

多个工具都在补齐 Agent 生命周期：

- **Claude Code**：社区要求恢复或替代 `subagentStatusLine`，展示子代理的模型、effort、上下文、成本和状态；同时推动定时任务继承模型、权限与 profile。
- **OpenAI Codex**：增加线程级模型目录、任务搜索、多侧聊和工具调用 `Aborted` 状态；社区开始讨论云会话之间的受控协作。
- **Gemini CLI**：集中修复子代理达到 `MAX_TURNS` 后仍报告成功、无限挂起、配置不生效等问题。
- **GitHub Copilot CLI**：子 Agent 无法可靠使用 HTTP OAuth MCP，Autopilot 审批后可能进入循环。
- **OpenCode**：v2.3.0 将子 Agent 默认后台化，需求随即转向暂停/恢复、终止、`sessionID` 续接和后台权限处理。
- **jcode**：Swarm 关注阻塞等待、worker 状态推送、lane/phase 关联和 Harness API 暴露。
- **pi**：关注同一消息内工具调用的执行顺序、中止后的结果完整性。

**共性结论：** Agent 编排的竞争标准已从“支持多代理”提升为**状态透明、结果可信、任务可中断、上下文可续接、失败可归因**。

---

### 3.2 MCP 与插件成为核心集成面，但配置、授权和生命周期仍不统一

- **Codex**：增加插件/Skill 目录主动刷新、MCP 进程级工作目录、OAuth 凭据锁监控。
- **Copilot CLI**：子 Agent 的 OAuth MCP 401、Windows 令牌缓存、Entra 原生窗口无粘贴及无浏览器回退问题突出。
- **Gemini CLI**：工具数量过多可能触发 400；插件、Skills 与子代理共同增加工具注册规模。
- **Claude Code**：定时任务中的 MCP 工具缺少模型参数，且权限持久化、GitHub “Always allow”仍有缺口。
- **OpenCode**：MCP 权限 action 命名不统一、旧 MCP 进程未退出、权限请求阻塞后台标签页。
- **jcode**、**pi**：集中处理 MCP transport、环境变量插值和协议行为差异。

**共性结论：** MCP 的主要矛盾已从“能否连接”转向**授权能否继承、目录能否隔离、凭据能否持久化、工具能否按任务裁剪、进程能否可靠回收**。

---

### 3.3 权限与执行安全成为不可回避的产品底线

- **Claude Code**：Windows 下 `rm -rf` 可能作用于盘符根目录，是当日最高风险报告。
- **Gemini CLI**：近期 PR 开始识别 `-r -f`、`-Rf`、`-vrf` 等任意参数形式的递归强制删除，并阻止粘贴文本触发 `@` 文件引用而泄露密钥。
- **Copilot CLI**：Assisted Permissions 审批过频及 PRU 异常消耗影响成本信任。
- **Codex**：Auto-review 在跨任务审批时丢失可信上下文；Computer Use 权限未恢复。
- **jcode**：要求在存在安全替代方案时阻止破坏性 Git 或数据库操作。

**共性结论：** 用户期待的是**可解释、最小权限、可配置且低误报**的安全策略，而不是单纯增加确认弹窗。

---

### 3.4 长任务稳定性与资源治理

- **Copilot CLI**：长交互会话 OOM、崩溃后后台 Agent 丢失。
- **Claude Code**：macOS `fseventsd` CPU 失控、Wayland 文件描述符泄漏。
- **Codex**：大型图片会话冻结、侧边栏 watcher teardown 延迟。
- **OpenCode**：PTY 僵尸进程、配置重载后 MCP 进程泄漏。
- **Gemini CLI**：长模型请求被 body timeout 中止后重放，可能重复执行工具或修改文件。
- **pi**：Codex WebSocket 单轮思考触及 60 分钟连接上限；大型 diff 导致 TUI 崩溃。

**共性结论：** 长时间自主执行必须配套**超时、重试幂等、进程回收、内存治理、断点恢复和可观测状态**。

---

### 3.5 跨平台与长会话上下文管理

- **Codex**：Windows 更新、MSIX 占用、Chrome native host、WSL 启动路径是主要问题区。
- **Claude Code**：Windows/macOS/Linux 均有稳定性反馈，Desktop 与 CLI 体验存在差距。
- **Copilot CLI**：Windows、macOS 沙箱、PowerShell、WSL2、X11/tmux 行为不一致。
- **jcode**：Windows detached child、macOS 锁竞争、Unix 进程组回收存在差异。
- **Gemini CLI**：Wayland Browser Agent 失败、IME 丢字等边缘体验持续出现。
- **上下文方面**：Codex、Gemini CLI、OpenCode、jcode、pi 都在强化上下文压缩、工具数量控制或模型能力目录；Copilot CLI 则报告升级后固定上下文开销增加约 **20K tokens**。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争定位 |
|---|---|---|---|
| **Claude Code** | Terminal/IDE/Desktop 融合、Notebook、子代理、桌面定时任务、云会话 | 高阶开发者、Claude 生态用户、桌面化重度用户 | 强化 Claude 平台闭环；当前优势在 Claude 模型体验和桌面潜力，短板是生命周期 API、权限继承及跨平台稳定性 |
| **OpenAI Codex** | 多会话、Computer Use、Remote、插件/Skills、MCP、多 Provider | 广泛开发者、桌面与移动协同用户、企业用户 | 产品面最完整，兼顾 CLI、桌面、远程和云；内部重点是目录刷新、线程级模型路由、锁监控和调用追踪 |
| **Gemini CLI** | Agent/Subagent、Browser Agent、Skills、工具生态、安全策略 | Gemini 用户、Agent 开发者、工具扩展研究者 | 以快速修复和安全加固抢占 Agent 可靠性高地；工具规模与上下文治理问题较突出 |
| **GitHub Copilot CLI** | GitHub 工作流、企业权限、Shell 管理、MCP OAuth、Agent checkpoint | GitHub 企业用户、平台工程与安全团队 | 与 GitHub 身份、仓库和企业策略深度绑定；优势在生态和治理，风险在升级回归、OOM 与权限信任 |
| **OpenCode** | 多 Provider、后台子 Agent、GUI/TUI、Web、移动端、凭据管理 | 希望摆脱单一供应商锁定的高级用户 | 开源、多模型、多端方向明显；正从 CLI 转向 AI 开发工作台，但 v2 迁移、会话序列和资源回收仍需收敛 |
| **jcode** | Swarm、ACP、Provider 兼容、多模型和 TUI 效率 | 多 Agent 编排开发者、第三方客户端与网关集成者 | 以 ACP 和开放协议扩展生态；工程完成度提升明显，但 CI 隔离、跨平台进程语义和 Provider 差异仍多 |
| **pi** | 多 Provider、扩展机制、流式协议、TUI 性能、工具调用语义 | 模型实验者、Provider 适配开发者、终端重度用户 | 偏底层运行时和可扩展 Agent 引擎；优势是模型接入灵活，难点是协议兼容、网络恢复和大输出渲染 |
| **Kimi Code CLI** | 当前数据未披露新增方向 | Kimi 生态用户 | 当日无活动，暂无法从社区信号判断其竞争位置和迭代节奏 |

### 定位差异概括

- **最平台化**：Codex、Claude Code。
- **最贴近 GitHub 企业治理**：Copilot CLI。
- **最专注 Agent 可靠性修复**：Gemini CLI。
- **最强调开放模型与多端工作台**：OpenCode、pi。
- **最强调开放协议与 Swarm 编排**：jcode。
- **最明显的生态空档**：Kimi Code CLI，本次样本中缺乏可验证的社区活动。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：Gemini CLI、Codex**

- Gemini CLI 披露 **50 个 Issue、43 个 PR**，原始活动量最高。
- Codex 的重点议题覆盖 Windows、macOS、Remote、浏览器控制、Provider、MCP 和追踪，且单日整理出 **10 条重要 PR**，开发密度高。
- 两者共同特点是：议题广、修复快，但新功能与回归问题同时出现。

**第二梯队：Copilot CLI、Claude Code、OpenCode、jcode、pi**

- Copilot CLI 有 **41 个 Issue**，企业用户对 OAuth、权限、PRU 和内存问题敏感。
- Claude Code、OpenCode、jcode、pi 均形成围绕各自产品主线的 **10 个热点 + 10 个重点 PR**。
- OpenCode v2.3.0 和 jcode 的 ACP/Swarm 路线使讨论具有较强前瞻性。
- pi 的关注点更偏底层工程，Issue 数量不如 Gemini CLI，但模型适配问题密度高。

**低活跃样本：Kimi Code CLI**

- 过去 24 小时无活动，无法据此判断项目整体停滞，只能确认当日缺乏公开更新信号。

### 5.2 产品成熟度

| 成熟度层级 | 工具 | 判断 |
|---|---|---|
| **较成熟、平台化** | Codex、Claude Code、Copilot CLI | 功能完整度高、用户规模大；同时暴露出较多跨平台和生命周期缺口 |
| **成熟度快速提升** | Gemini CLI | 社区活跃、修复密集；子代理状态和安全策略仍处于快速收敛期 |
| **快速迭代期** | OpenCode | v2 功能扩张明显，但迁移、事件序列、后台权限和进程回收尚未完全稳定 |
| **工程整合期** | jcode | Swarm/ACP/Provider 方向清晰，功能推进快；CI 和跨平台可靠性仍是短板 |
| **底层能力完善期** | pi | 模型和协议适配灵活，但流式连接、工具顺序和 TUI 大输出能力仍需加强 |
| **当日信号不足** | Kimi Code CLI | 样本不足以判断成熟度 |

### 成熟度核心判断

当前工具的“功能数量”差距已不大，真正拉开差距的是：

1. **状态是否可信**：Agent 是否真的完成、是否超时、是否被中止；
2. **失败是否可恢复**：崩溃、限流、进程退出后能否继续；
3. **权限是否透明**：执行了什么、改了什么、为何被拦截；
4. **跨平台是否一致**；
5. **升级是否破坏数据或兼容性**。

---

## 6. 值得关注的趋势信号

### 信号一：AI CLI 正在成为“Agent 操作系统”，而不只是 CLI

任务搜索、多侧聊、后台子代理、云会话 API、ACP、Harness、Swarm 和生命周期管理表明，CLI 正在吸收调度器、工作队列与开发平台能力。

**参考价值：** 开发者选型不应只比较模型效果，还应比较是否具备**状态 API、任务 ID、暂停/恢复、事件流、取消、审计和成本查询**。

---

### 信号二：多 Agent 最大的瓶颈不是并行度，而是状态与归因

多个项目同时出现“实际失败却报告成功”“后台任务权限阻塞”“worker 状态不可见”“工具调用结果缺失”等问题。

**参考价值：** 企业落地应优先建设：

- 明确的终止状态：`success / timeout / aborted / max_turns / failed`；
- 每个 Agent 的模型、prompt、工具、成本和权限快照；
- 可重放的结构化事件日志；
- 幂等工具与幂等重试；
- 跨会话审批的证据继承机制。

---

### 信号三：MCP 已进入生产化阶段，授权与生命周期成为短板

MCP 登录缓存、子 Agent OAuth 401、启动目录、变量展开、锁等待、旧进程泄漏等问题说明，生态的主要矛盾已从协议接入转向**生产级治理**。

**参考价值：** 企业部署需统一管理：

- OAuth 凭据与轮换；
- 每个 MCP Server 的工作目录和环境变量；
- 最小权限规则；
- 工具按任务动态裁剪；
- 进程启动、取消和回收；
- 凭据与日志脱敏。

---

### 信号四：安全治理正从“模型判断”转向“确定性护栏”

`rm -rf` 根路径风险、破坏性 Git、粘贴密钥、PRU 消耗和跨任务审批都表明，仅依赖模型自觉或模糊风险评分不够。

**参考价值：** 高风险操作应采用**解析后的命令语义**进行判断，而非字符串黑名单；同时结合路径规范化、仓库根目录保护、命令等价形式识别和可审计确认。

---

### 信号五：版本发布频率提高，但升级回归成为新的体验瓶颈

多个工具均在升级后出现明确回归：

- Claude Code：zstd 解码安全问题；
- Copilot CLI：约 20K 固定上下文增长、OOM、OAuth 回归；
- OpenCode：v2.3.0 PTY 僵尸进程、事件序列冲突；
- Codex：Windows 更新和 native host 状态不一致；
- Gemini CLI：模型请求超时后重放。

**参考价值：** 团队应采用**版本固定、灰度升级、配置快照和回滚机制**，尤其不要在生产自动化中无条件跟随 latest。

---

### 信号六：多 Provider 已是标配，但“能力映射错误”成为新风险

Gemini、Copilot、Mistral、Vertex、Codex、Bedrock、自定义网关均出现 thinking 参数、工具声明、角色协议、token 统计或 header 不兼容问题。

**参考价值：** Provider 适配层应成为独立基础设施，至少统一维护：

- 模型能力与工具支持矩阵；
- reasoning effort 映射；
- token 分类；
- system/developer 角色兼容；
- 流式协议与重试语义；
- 连接和超时上限；
- 工具声明裁剪策略。

---

### 信号七：长上下文优化从“塞更多”转向“减少无效载荷”

Copilot CLI 固定上下文增加、Codex 工具过多、Gemini CLI 工具规模超限、OpenCode 与 jcode 的工具治理需求都指向同一问题。

**参考价值：** Agent 上下文应按任务动态生成，包括：

- 只加载必要工具；
- 限制 Skills/插件暴露范围；
- 大输出分页或落盘；
- 推理 token 与普通上下文分开统计；
- 在模型切换、工具集合变化时避免无意触发重新计费。

---

### 信号八：跨平台问题仍是桌面 Agent 普及的最大障碍

Windows 更新、Wayland、macOS 文件监听、终端协议、Linux 进程组、WSL 路径和 PowerShell 权限问题横跨多个项目。

**参考价值：** 选型时必须用真实环境验证，而不是只看 CLI 主路径：

- Windows/WSL 双环境；
- macOS 原生与沙箱；
- Wayland；
- IDE、tmux、CI 无头环境；
- 长时间运行与异常退出；
- 多代理并发时的资源上限。

---

## 决策建议

### 面向技术决策者

1. **优先选择具备正式任务生命周期和可观测 API 的产品**；
2. 将版本升级、MCP 权限、跨平台支持纳入与模型能力同等的评估权重；
3. 优先试点能提供明确状态、审计日志和恢复机制的 Agent，而非仅以 UI 演示效果决策；
4. 对 Windows、Remote、CI 和长任务场景进行专项 PoC；
5. 在组织内建立统一的 MCP 凭据、权限、目录和审计策略。

### 面向开发者

1. 不要只测试“模型能否回答”，还要测试工具调用、取消、超时、恢复和错误状态；
2. 对危险命令、文件系统写入和外部副作用建立确定性护栏；
3. 将 Agent 任务设计为幂等、可恢复、可观测；
4. 固定依赖和 CLI 版本，升级前验证会话迁移、权限配置与进程回收；
5. 使用工具数量预算、上下文预算和子代理预算，避免扩展能力反过来拖垮任务。

---

## 总结

2026-11-14 的核心结论是：**AI CLI 生态已经进入平台化竞争阶段，但生产可用性的主要瓶颈正从模型能力转向状态可信度、权限安全、任务恢复、MCP 治理和跨平台可靠性。**

Codex 与 Claude Code代表平台化方向，Gemini CLI 与 Copilot CLI聚焦安全及企业治理，OpenCode、jcode、pi则加速开放模型、协议和 Agent 编排。短期选型应避免追逐功能数量，而应优先验证四个问题：**Agent 是否如实报告状态、失败后能否恢复、权限是否透明、升级是否会破坏现有工作流。**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 2026-11-14。PR 列表未提供可用评论数与点赞数，因此以下 PR 排行主要依据汇总顺序、修复价值、生态影响和 Issue 关联度综合判断；状态以数据中标注为准。

## 1. 热门 Skills 排行

1. **mcp-builder** — 支持新版 MCP 客户端与自定义请求头  
   - **功能**：帮助 Claude Code 开发 MCP 服务；此次 PR 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名，并通过 `create_mcp_http_client` / `http_client` 配置自定义 HTTP Headers。  
   - **讨论热点**：MCP SDK 升级后的破坏性变更、客户端兼容性，以及认证与请求头传递。  
   - **状态**：Open  
   - **链接**：[PR #1742](https://github.com/anthropics/skills/pull/1742)｜[关联 Issue #1668](https://github.com/anthropics/skills/issues/1668)

2. **skill-creator** — 修复触发评测、跨平台执行和元数据解析  
   - **功能**：用于创建、评估和优化 Skills。当前相关 PR 集中解决 Windows 子进程失败、并行评测串扰、运行时错误被误判为“不触发”、直接运行打包脚本失败，以及 YAML frontmatter 解析不准确等问题。  
   - **讨论热点**：触发率准确度是生态最集中的技术问题之一；评测结果失真会直接误导 Skill 描述优化。  
   - **状态**：Open  
   - **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)｜[PR #1681](https://github.com/anthropics/skills/pull/1681)｜[PR #1997](https://github.com/anthropics/skills/pull/1997)｜[Issue #556](https://github.com/anthropics/skills/issues/556)｜[Issue #1352](https://github.com/anthropics/skills/issues/1352)

3. **webapp-testing** — 提升端到端测试安全性与元素识别准确性  
   - **功能**：启动 Web 应用并执行浏览器自动化测试。相关改动包括移除 `shell=True`、修复 textarea/select 的元素报告逻辑。  
   - **讨论热点**：命令注入风险、跨平台执行稳定性、DOM 元素识别和测试输出可信度。  
   - **状态**：Open  
   - **链接**：[PR #1980](https://github.com/anthropics/skills/pull/1980)｜[PR #1976](https://github.com/anthropics/skills/pull/1976)

4. **docx** — 强化修订接受结果与 XML 正确性  
   - **功能**：编辑和生成 Word 文档。PR 覆盖 LibreOffice 超时误报成功、修订标记残留检测，以及合并 run 时丢失命名空间声明的问题。  
   - **讨论热点**：“命令成功”不等于“文档正确”；社区要求输出经过结构化验证，而非仅依赖退出码。  
   - **状态**：Open  
   - **链接**：[PR #1792](https://github.com/anthropics/skills/pull/1792)｜[PR #1734](https://github.com/anthropics/skills/pull/1734)｜[Issue #2018](https://github.com/anthropics/skills/issues/2018)

5. **xlsx** — 增强 Excel 外部链接风险检测  
   - **功能**：分析、编辑和检查 Excel 工作簿。此次 PR 修复仅检查工作簿级 `defined_names` 导致的漏报，并补充工作表级定义名称和别名解析。  
   - **讨论热点**：复杂公式、间接外部引用和审计场景下，静态检查规则的覆盖面与误报率。  
   - **状态**：Open  
   - **链接**：[PR #2019](https://github.com/anthropics/skills/pull/2019)｜[关联 Issue #2013](https://github.com/anthropics/skills/issues/2013)

6. **claude-api** — 更新 SDK 行为说明和参考资料  
   - **功能**：提供 Claude API 与工具使用指导。相关 PR 更新了 Python SDK `pause_turn` 自动恢复机制，并修复 Academy 文档中的失效链接。  
   - **讨论热点**：Claude Code / SDK 版本变化快，Skill 内置知识容易过时；上下文体积也引发关注。  
   - **状态**：Open  
   - **链接**：[PR #1950](https://github.com/anthropics/skills/pull/1950)｜[PR #1730](https://github.com/anthropics/skills/pull/1730)｜[Issue #1487](https://github.com/anthropics/skills/issues/1487)

7. **pyxel** — Python 复古游戏开发与验证  
   - **功能**：指导开发者使用 Pyxel 创建和调试复古游戏，包括无头运行、输入驱动测试、逐帧检查及状态验证。  
   - **讨论热点**：不只是生成代码，还强调可执行验证、视觉证据和游戏状态断言。  
   - **状态**：Open  
   - **链接**：[PR #525](https://github.com/anthropics/skills/pull/525)

8. **document-typography** — AI 文档排版质量控制  
   - **功能**：检查并修复孤行、寡行、标题落底、编号错位等常见排版问题。  
   - **讨论热点**：社区希望文档 Skills 从“内容能生成”升级到“出版级排版质量”。  
   - **状态**：Open  
   - **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

---

## 2. 社区需求趋势

### 2.1 企业级组织共享与权限治理

社区期待提供组织级 Skill 库、共享链接及集中分发机制，减少通过 Slack/Teams 手工传递 `.skill` 文件。同时，社区 Skill 冒用官方 `anthropic/` 命名空间的问题表明，共享体系必须同步解决：

- 官方与社区来源的明确标识；
- 安装来源和权限提示；
- 组织审核、发布与撤回；
- 防止社区 Skill 冒充官方能力。

**相关链接：**  
- [Issue #228：Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)  
- [Issue #492：社区 Skill 使用 anthropic/ 命名空间造成信任边界问题](https://github.com/anthropics/skills/issues/492)

### 2.3 Agent 记忆与上下文压缩

`compact-memory` 提案希望用符号化表示替代冗长的散文式长期记忆，以降低 Agent 自身状态对上下文的占用。其价值不只在“摘要”，还在于让记忆具备紧凑、可检索、可组合的结构。

**相关链接：**[Issue #1329](https://github.com/anthropics/skills/issues/1329)

### 2.4 全流程质量门禁

社区期待建立覆盖交付全周期的 Reason Quality Gate：

1. 任务前校准需求与风险；
2. 对抗式审查；
3. 交付前验证产物和声明。

这表明用户希望 Skill 不只完成生成动作，还能充当流程治理层。

**相关链接：**[Issue #1385](https://github.com/anthropics/skills/issues/1385)

### 2.5 Agent 治理、安全与审计

已关闭的 `agent-governance` 提案覆盖策略执行、威胁检测、信任评分和审计轨迹。虽然提案已关闭，但相关需求仍反映社区对 Agent 安全治理能力的兴趣。

**相关链接：**[Issue #412](https://github.com/anthropics/skills/issues/412)

### 2.6 文档、演示与多媒体生成

热门方向集中在文档和内容生产自动化，包括：

- Notion 规格自动转换为可执行任务、验收标准及进度追踪；
- Markdown 到视频和语音内容；
- Word/Excel/PPT 的格式修复与质量检查；
- 面向 AI 生成文档的自动排版质检。

**相关链接：**
- [PR #1245：notion-spec-to-implementation / quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245)
- [PR #1703：md2video-audio](https://github.com/anthropics/skills/pull/1703)
- [PR #514：document-typography](https://github.com/anthropics/skills/pull/514)

### 2.7 垂直专业能力

社区开始提交面向特定行业或技术栈的 Skill，例如智能合约审计和 HPC 集群操作。这些方向显示生态正从通用生产力工具扩展到专业工程领域。

**相关链接：**
- [PR #1771：proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)
- [PR #1615：scnet-hpc](https://github.com/anthropics/skills/pull/1615)

---

## 3. 高潜力待合并 Skills

以下 PR 均为 **Open**，但解决的问题明确、用户影响较大，较可能进入近期合并或继续迭代：

| 优先级 | PR | 预期价值 |
|---|---|---|
| 高 | [skill-creator：隔离触发评测并处理 Windows/运行时失败 #1298](https://github.com/anthropics/skills/pull/1298) | 直接提升 Skill 触发评测的准确性和跨平台可靠性 |
| 高 | [skill-creator：修复并行 worker 交叉匹配 #1298](https://github.com/anthropics/skills/pull/1298) / [关联 Issue #1352](https://github.com/anthropics/skills/issues/1352) | 避免默认并行评测产生接近 0% 的系统性假阴性 |
| 高 | [webapp-testing：移除 shell=True #1980](https://github.com/anthropics/skills/pull/1980) | 降低命令注入风险，属于高价值安全修复 |
| 高 | [docx：LibreOffice 超时及修订残留验证 #1792](https://github.com/anthropics/skills/pull/1792) | 防止静默生成未接受修订的错误文档 |
| 中高 | [mcp-builder：适配 MCP 2.x #1742](https://github.com/anthropics/skills/pull/1742) | 避免 MCP SDK 升级后现有集成直接失效 |
| 中高 | [xlsx：解析工作表级名称和别名 #2019](https://github.com/anthropics/skills/pull/2019) | 提升外部链接风险扫描的覆盖率 |
| 中高 | [claude-api：更新 pause_turn 指南 #1950](https://github.com/anthropics/skills/pull/1950) | 保证 Skill 与当前 Python SDK 行为一致 |
| 中 | [skill-creator：正确解析 YAML frontmatter #1997](https://github.com/anthropics/skills/pull/1997) | 防止描述优化使用失真的元数据 |
| 中 | [skill-creator：支持 package_skill.py 直接执行 #1681](https://github.com/anthropics/skills/pull/1681) | 改善创建、验证和打包流程的可用性 |
| 中 | [document-skills 快照与同步关系说明 #2108](https://github.com/anthropics/skills/pull/2108) | 降低用户对本地 Skill 版本来源和同步行为的困惑 |

> “高潜力”表示需求明确、影响面广或涉及安全/正确性，并不等同于官方合并概率保证。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是把 Skills 从“能生成内容的提示词模板”升级为可分发、可治理、可评测、可验证且结果可信的 Agent 工作流基础设施。**

---

# Claude Code 社区动态日报｜2026-11-14

## 1. 今日速览

- 过去 24 小时发布 **v2.1.325**，重点修复 zstd 压缩响应解码安全问题，并优化 VS Code 等集成终端中的 Jupyter Notebook 操作提示。
- 社区讨论集中在 **桌面端体验、Windows/macOS 稳定性、子代理可观测性、自动化任务与权限安全**；其中 `subagentStatusLine` 被移除和未授权执行 `rm -rf` 的高危报告最受关注。
- 过去 24 小时仅检索到 **1 条更新 PR**，暂无足够重要且信息完整的 PR 可供列出 10 项。

---

## 2. 版本发布

### [v2.1.325](https://github.com/anthropics/claude-code/releases/tag/v2.1.325)

主要更新：

- **安全修复**：修复 zstd 压缩响应解码方式中的安全问题，建议用户尽快升级。
- **Jupyter 工作流优化**：在 VS Code 及其他集成终端中，Claude 读取或编辑 Notebook 后会显示一次提示，引导用户重新运行 Notebook 单元格。
- 发布记录还提及组织级错误提示的界面调整，但原始摘要不完整，细节有待确认。

**建议**：使用 Claude Code、Claude Desktop 或相关 IDE 集成的团队应优先升级至 v2.1.325，并重点回归压缩响应、代理请求及 Notebook 工作流。

---

## 3. 社区热点 Issues

> 以下按影响力、评论热度、安全性和新近程度筛选，共 10 项。

### 1. [Windows 上 `rm -rf` 可能误删约 600GB 数据](https://github.com/anthropics/claude-code/issues/95426)

- **重要性**：该报告涉及 Windows/Cygwin 路径替换后落到盘符根目录，且执行 reportedly 未获提示，属于最高优先级的数据安全风险。
- **社区反应**：12 条评论；即便已有一定关注，目前点赞仍为 0，说明潜在严重性尚未被充分放大。
- **建议**：审查 Bash 工具对 `rm -rf`、变量展开和 Windows 盘符根路径的防护，避免仅依赖模型判断或用户确认文案。

### 2. [v2.1.323 移除 `subagentStatusLine`，子代理状态信息不可见](https://github.com/anthropics/claude-code/issues/109446)

- **重要性**：移除后无法查看每个子代理的上下文、成本、模型及 effort，直接削弱多代理运行时的可观测性和成本治理。
- **社区反应**：8 条评论、28 个赞，是当天新增反馈中热度最高的问题之一。
- **建议**：提供兼容选项或替代配置，至少允许展示代理名称、模型、effort、状态和累计 token/成本。

### 3. [macOS 上 `fseventsd` 资源失控，启动可能长期阻塞](https://github.com/anthropics/claude-code/issues/98769)

- **重要性**：在重度代理使用场景中，`fseventsd` 可能持续占用 CPU 并阻塞 Claude Code 启动，且没有自动恢复机制。
- **社区反应**：18 条评论，反映该问题对高负载 macOS 开发环境的影响较大。
- **建议**：增加文件监听超时、进程隔离与 watchdog，并在 UI 中提供诊断及恢复选项。

### 4. [桌面端自定义主题与强调色](https://github.com/anthropics/claude-code/issues/79305)

- **重要性**：桌面应用仅支持亮色、暗色和高对比度，无法与 CLI 自定义主题体系对齐，也难以在多显示器环境中识别窗口。
- **社区反应**：33 条评论、100 个赞，是本日列表中最受社区支持的 UI 增强需求。
- **建议**：统一 CLI 与 Desktop 的主题配置，支持 accent color，并提供导入、导出及预览能力。

### 5. [桌面定时任务无法正确继承模型配置](https://github.com/anthropics/claude-code/issues/91884)

- **重要性**：问题覆盖模型选择器缺失、子进程忽略用户设置以及 MCP 工具缺少 model 参数，属于自动化链路的端到端故障。
- **社区反应**：9 条评论；反馈指出多 profile 环境下任务注册与模型配置也可能相互影响。
- **建议**：为定时任务显式持久化模型、权限和 profile，并让所有子进程及 MCP 调用共享同一配置。

### 6. [Windows 定时任务缺少 `start_session`，任务无法交接工作](https://github.com/anthropics/claude-code/issues/109767)

- **重要性**：定时任务启动的会话无法再启动其他会话，导致多阶段自动化在设计上无法完成工作交接。
- **社区反应**：该 Issue 于当天创建，尚处于早期阶段，但问题直接击中桌面自动化的核心能力。
- **建议**：明确区分交互式会话和定时任务会话的权限模型，并提供安全的受控委派机制。

### 7. [macOS 沙箱代理会截断响应并重置连接](https://github.com/anthropics/claude-code/issues/99650)

- **重要性**：启用 Bash 沙箱后，服务器以 `Connection: close` 关闭连接时，HTTPS 响应可能被截断并触发 `ECONNRESET`。
- **社区反应**：2 条评论、已有稳定复现；问题会直接影响代理请求、长响应和本地服务集成。
- **建议**：修正沙箱代理对半关闭 TCP 连接和 chunked/body length 的处理，并增加服务端主动断连测试。

### 8. [VS Code 扩展触及周使用上限后被强制重新登录](https://github.com/anthropics/claude-code/issues/108539)

- **重要性**：用量耗尽应只阻止新请求，而不应清除认证状态；当前行为会打断周期内的其他 IDE 使用。
- **社区反应**：1 条评论，但问题边界清晰，对团队用户和频繁触发限额的用户有直接影响。
- **建议**：将“配额耗尽”和“认证失效”解耦，保留登录状态并准确展示恢复时间。

### 9. [Linux/Wayland 下 `/dev/shm` 文件描述符泄漏导致窗口冻结](https://github.com/anthropics/claude-code/issues/98725)

- **重要性**：长时间使用后可能达到 1024 个描述符上限并冻结窗口，属于桌面端资源生命周期问题。
- **社区反应**：4 条评论；虽非当天新建，但持续更新说明影响仍在扩大。
- **建议**：追踪 renderer 内临时文件和共享内存句柄的关闭路径，限制长期存活的 descriptor 数量。

### 10. [桌面计划任务需要程序化云会话生命周期 API](https://github.com/anthropics/claude-code/issues/109758)

- **重要性**：用户希望查询云会话状态、等待完成并主动终止任务，以替代本地 `claude -p` 进程，适配协调器和工作队列架构。
- **社区反应**：当天新建、1 条评论，但代表 AI 编程工具从交互式 CLI 向可编排基础设施演进的明确需求。
- **建议**：提供 session create/status/stream/stop API，并配套幂等、取消、错误状态及成本查询机制。

---

## 4. 重要 PR 进展

过去 24 小时数据中仅检索到 **1 条更新 PR**，未达到 10 条。为避免将缺乏可验证信息的条目列为“重要进展”，本次不虚构补充。

### [PR #45553：resolve duplicate IPs](https://github.com/anthropics/claude-code/pull/45553)

- 标题表明该 PR 旨在处理重复 IP 地址问题。
- PR 于 2026-11-13 更新，目前仍为 **OPEN**，状态标注无评论、无点赞。
- 由于数据中没有提供修改文件、实现说明、测试结果或审查结论，暂无法判断其具体影响范围及合并风险。

---

## 5. 功能需求趋势

### 桌面端个性化与可扩展性

- [自定义主题与强调色](https://github.com/anthropics/claude-code/issues/79305)获得 100 个赞，是最强需求。
- [恢复桌面首页发光代码字符背景](https://github.com/anthropics/claude-code/issues/102952)体现社区对品牌视觉和沉浸式界面的偏好。
- [Desktop Mod 动画兼容性](https://github.com/anthropics/claude-code/issues/109770)表明插件生态正推动桌面端成为可扩展平台。

### 多代理可观测性与精细控制

- [`subagentStatusLine` 被移除](https://github.com/anthropics/claude-code/issues/109446)直接暴露了状态、模型、effort、上下文和成本不可见的问题。
- [`--agent` 忽略 frontmatter 中的 effort](https://github.com/anthropics/claude-code/issues/109779)表明代理配置需要更可靠的继承与优先级规则。
- 社区期待类似状态栏、代理视图和结构化运行数据，以支持调试多代理工作流。

### 自动化与任务编排

- [桌面定时任务模型配置失效](https://github.com/anthropics/claude-code/issues/91884)和[定时任务缺少 `start_session`](https://github.com/anthropics/claude-code/issues/109767)共同指向任务生命周期不完整。
- [云会话程序化生命周期 API](https://github.com/anthropics/claude-code/issues/109758)反映用户希望将 Claude Code 接入 CI/CD、队列和协调器。
- 跨会话消息的[重复安全提示](https://github.com/anthropics/claude-code/issues/94383)也说明自动化通信协议仍需统一和精简。

### IDE 与终端集成

- v2.1.325 新增 Notebook 单元格重跑提示，强化了 Claude 与 VS Code/Notebook 工作流的联动。
- [Agents 视图滚动异常](https://github.com/anthropics/claude-code/issues/95130)和[点击会话行无响应](https://github.com/anthropics/claude-code/issues/94565)表明多终端、多视图交互仍不够稳定。
- [`/terminal-setup` 修改错误配置文件](https://github.com/anthropics/claude-code/issues/16066)提示终端集成需要更严格遵循各平台约定。

### 跨平台支持与稳定性

- [Fedora/RHEL 及不可变发行版支持](https://github.com/anthropics/claude-code/issues/88843)显示 Linux 用户希望摆脱仅支持 Debian/Ubuntu 的限制。
- macOS 文件监听、Wayland 描述符泄漏、Windows computer use 窗口异常等问题，体现出 Linux/macOS/Windows 支持成熟度仍不一致。

### GitHub 与外部集成

- [GitHub 仓库授权缺少 “Always allow”](https://github.com/anthropics/claude-code/issues/109768)反映长期授权和持久化权限的强需求。
- [Gmail 链接被重写为过期重定向](https://github.com/anthropics/claude-code/issues/104853)表明用户非常关注连接器对原始数据语义的保真度。

### 模型适配与安全边界

- 多条反馈涉及合法安全研究或常规开发请求被模型拒绝，包括[合法防御性安全请求被拦截](https://github.com/anthropics/claude-code/issues/109783)、[应用防盗版任务被误判](https://github.com/anthropics/claude-code/issues/109785)和[普通请求被拒绝](https://github.com/anthropics/claude-code/issues/109784)。
- [文章研究触发 `reasoning_extraction` 防护标记](https://github.com/anthropics/claude-code/issues/109642)则显示误报原因仍不够透明。

---

## 6. 开发者关注点

1. **执行安全是首要担忧**  
   Windows 路径展开导致盘符根目录删除的报告[#95426](https://github.com/anthropics/claude-code/issues/95426)，让 Bash 工具的路径规范化、根目录保护和高风险命令确认成为焦点。

2. **多代理工作流正在普及，但缺少“驾驶舱”**  
   用户需要看到每个子代理的模型、effort、上下文、成本和运行状态。`subagentStatusLine` 的突然移除[#109446](https://github.com/anthropics/claude-code/issues/109446)尤其影响重度用户。

3. **自动化任务缺乏可靠、统一的能力传递**  
   定时任务中的模型选择、权限继承、跨会话委派均存在问题，开发者实际上需要一套正式的“任务运行 API”和完整配置快照。

4. **桌面端体验与 CLI 体验仍存在差距**  
   主题、视觉动画、Linux 发行版覆盖、窗口行为以及插件兼容性都不完整，说明 Desktop 仍处于快速演进阶段。

5. **长时运行的资源治理不足**  
   macOS 的 `fseventsd` 失控[#98769](https://github.com/anthropics/claude-code/issues/98769)、Linux/Wayland 描述符泄漏[#98725](https://github.com/anthropics/claude-code/issues/98725)，共同指向文件监听、renderer 和子进程生命周期管理问题。

6. **沙箱与代理链路影响真实网络兼容性**  
   macOS 沙箱代理对 `Connection: close` 的错误处理[#99650](https://github.com/anthropics/claude-code/issues/99650)提醒开发者，代理路径必须覆盖关闭、截断及异常断连场景。

7. **模型安全误报影响正常开发流程**  
   合法防御性安全、软件保护、文章研究和普通开发请求被拒绝的反馈频繁出现。用户期待更清晰的分类依据、人工申诉路径以及可复现的安全测试。

8. **权限持久化仍是集成体验的摩擦点**  
   VS Code 配额耗尽后被登出[#108539](https://github.com/anthropics/claude-code/issues/108539)与 GitHub 授权无法“始终允许”[#109768](https://github.com/anthropics/claude-code/issues/109768)，共同说明会话状态和长期授权处理仍有缺口。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-14**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

- **终端多会话体验继续增强**：`rust-v0.169.0` 为实验性终端工作区加入多侧聊标签页，并支持重启后恢复本地侧聊；任务中心也增强了历史任务搜索。
- **Windows 与远程控制仍是社区焦点**：高热度 Issue 主要集中在 Windows 更新失败、浏览器/Computer Use、Remote 配对，以及 macOS/Windows 桌面端性能和连接异常。
- **内部开发方向偏向可靠性与可观测性**：当天重点 PR 覆盖云插件目录刷新、线程查询、MCP 启动目录与 OAuth 锁监控、工具调用追踪，以及多提供商模型目录隔离。

---

## 2. 版本发布

### `rust-v0.169.0`

主要更新：

- 实验性终端工作区支持多个 **side-chat 标签页**：
  - 可通过键盘或鼠标切换；
  - Codex 重启后可重新打开已保存的本地侧聊。
- Agent 命令中心支持按以下信息搜索较旧任务：
  - 任务名称；
  - 提示词预览；
  - 工作目录。
- 同期还发布了 `0.171.0-alpha.2`、`0.171.0-alpha.4` 和 `0.171.0-alpha.5`，但公开摘要暂未提供更多功能细节。

**发布页面**：

- [rust-v0.169.0](https://github.com/openai/codex/releases/tag/rust-v0.169.0)
- [rust-v0.171.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.5)
- [rust-v0.171.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.4)
- [rust-v0.171.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.2)

---

## 3. 社区热点 Issues

### 1. Windows Computer Use 截图结束后权限与边框未恢复

[#57101](https://github.com/openai/codex/issues/57101)

截图型操作已经结束，但屏幕捕获权限和金色/黄色显示边框仍然保留。Issue 有 **28 条评论**，是当日讨论最活跃的问题之一，直接影响 Computer Use 的可信度与可连续使用性。

### 2. Windows Chrome 集成未创建原生 Host 文件，更新后遗留旧链接

[#42520](https://github.com/openai/codex/issues/42520)

Chrome 集成显示已安装，但 `chrome-native-hosts-v2.json` 未生成，且升级后仍引用旧的 latest junction。该问题已有 **24 条评论**，说明浏览器原生桥接和增量升级流程是 Windows 用户的长期痛点。

### 3. Microsoft Store 更新因旧 MSIX 包被占用而反复失败

[#25770](https://github.com/openai/codex/issues/25770)

Windows Store 已准备新包，但旧 MSIX 包仍被进程锁定，导致 Codex 无法完成更新。该问题获得 **24 条评论、5 个点赞**，涉及版本分发、进程生命周期和升级可靠性。

### 4. Auto-review 拒绝基于完整原始证据的跨任务审批

[#54685](https://github.com/openai/codex/issues/54685)

可信上下文遗漏导致 auto-review 拒绝本应允许的跨任务审批，即使当前任务仍保留完整证据。Issue 有 **23 条评论**，反映安全审批策略在上下文继承、证据复用和任务边界上的设计难题。

### 5. Android Codex Remote 无法通过二维码或手动码配对

[#56600](https://github.com/openai/codex/issues/56600)

Windows 主机与 Android 端配对同时失败，QR 和手动码均不可用。该问题获得 **18 条评论、5 个点赞**，直接影响 Remote 功能的可用性和信任度。

### 6. macOS Work 会话无法通过 Enter 或发送按钮提交消息

[#51636](https://github.com/openai/codex/issues/51636)

输入内容正常，但 Enter 和可见的发送按钮都无法提交，且没有明确错误提示；普通 Chat 模式则正常。已有 **15 条评论**，属于直接影响核心工作流可用性的交互故障。

### 7. Windows 应用更新成功后仍以 `0x800700E9` 失败

[#51588](https://github.com/openai/codex/issues/51588)

更新包已经成功 staging，但应用仍在运行导致安装阶段失败。该问题有 **13 条评论**，与旧 MSIX 被锁定的问题形成同类反馈，说明 Windows 自动更新链路可能存在共性根因。

### 8. macOS 切换大型图片密集会话时桌面应用冻结

[#33782](https://github.com/openai/codex/issues/33782)

从其他线程切入包含大量图片的长会话时，应用可能因 `ResizeObserver` 循环而卡死。该 Issue 有 **12 条评论**，突出图像密集型会话对渲染、虚拟化和布局稳定性的要求。

### 9. macOS 侧边栏交互触发 FSEvents 清理延迟，冻结 3–10 秒

[#34376](https://github.com/openai/codex/issues/34376)

悬停或点击侧边栏会触发递归 watcher teardown，导致界面冻结数秒。该问题获得 **11 条评论**，属于桌面端文件监听与 UI 生命周期耦合导致的性能问题。

### 10. 已发布的 Codex Cloud Start Skill 未进入新任务上下文

[#50879](https://github.com/openai/codex/issues/50879)

用户配置的 Start skill 在发布后没有出现在新任务上下文中。该问题有 **10 条评论、3 个点赞**，直接影响可复用工作流、技能发现以及云端任务的初始化一致性。

> 补充关注：[#60974](https://github.com/openai/codex/issues/60974) 报告 WSL 启动策略检查会跳过 CLI relocation，并执行不可执行的 WindowsApps 二进制，说明 Windows/WSL 的启动路径兼容仍是高优先级问题。

---

## 4. 重要 PR 进展

> 当日展示的 PR 均已关闭，可能已合并、关闭或由自动化流程完成处理；以下按技术影响排序。

### 1. 在轮次准入前显式刷新云插件和 Skill 目录

[#61449](https://github.com/openai/codex/pull/61449)

新增 `CodexThread::refresh_cloud_plugins()` 和独立于轮次的扩展回调，允许宿主在不启动任务、不等待 step preparation 的情况下刷新云插件及 skill 目录。

**价值**：减少缓存延迟，避免已安装插件或 skill 无法被下一轮推理发现。

### 2. 为 `thread/list` 增加线程 ID 包含过滤器

[#61446](https://github.com/openai/codex/pull/61446)

新增 `includedThreadIds`，最多支持 100 个 ID，并在分页过滤前应用。

**价值**：客户端可按已保存线程 ID 对账，尤其适合获取历史首页之外的会话摘要。

### 3. 为共享 MCP Server 增加进程级启动目录

[#61444](https://github.com/openai/codex/pull/61444)

新增隐藏 app-server 参数：

- `--plugin-mcp-launch-cwd`
- `--mcp-launch-cwd`

宿主可为本地 stdio MCP server 指定工作目录，而无需写入共享配置。

**价值**：改善不同宿主、插件和 MCP 进程之间的工作目录隔离。

### 4. 暴露 Codex 速率限制到状态栏状态

[#61417](https://github.com/openai/codex/pull/61417)

在 `statusline` 快照中增加 `account.rate_limits`，包含 Codex 限额名称、主/次使用比例、窗口长度和重置时间。

**价值**：让 CLI 和编辑器状态栏直接显示额度及重置窗口，降低突发限流风险。

### 5. 使用线程级模型目录解析模型

[#61421](https://github.com/openai/codex/pull/61421)

模型采样、预测及相关查找不再依赖启动时的全局目录，而是按线程解析模型元数据。

**价值**：避免切换默认 provider 或使用线程专属模型目录后，错误套用其他 provider 的能力和指令。

### 6. 在 TUI 中使用 Provider 默认 RPC

[#61438](https://github.com/openai/codex/pull/61438)

通过 `modelProvider/default/set` 保存默认 provider，并在提示中显示 provider 名称；缺少名称时回退到 provider ID。

**价值**：统一默认 provider 的配置入口和 UI 反馈，减少通用配置写入带来的歧义。

### 7. 默认启用 Amazon Bedrock 的增量工具

[#61426](https://github.com/openai/codex/pull/61426)

默认启用 `incremental_tools_legacy`，让两个 Amazon Bedrock provider 通过 `additional_tools` 发布工具声明，仍可通过配置关闭。

**价值**：改善非 OpenAI provider 下的工具调用兼容性，并降低模型上下文中的工具声明开销。

### 8. 监控 MCP OAuth 凭据存储锁

[#61430](https://github.com/openai/codex/pull/61430)

记录文件存储和 secrets store 锁的获取次数、等待时间和持有时间，并按 store、锁模式、操作和来源客户端打标签。

**价值**：为 MCP OAuth 凭据并发、锁竞争和潜在死锁提供可观测数据。

### 9. 将放弃的工具调用追踪标记为 Aborted

[#61434](https://github.com/openai/codex/pull/61434)

当轮次在工具等待审批时被中断，不再让 rollout trace 永久处于 running 状态，而是写入 `Aborted` 结束事件。

**价值**：提高任务追踪、审批状态和后续诊断的准确性。

### 10. 为 Transcript 增加键盘表格选择

[#61422](https://github.com/openai/codex/pull/61422)

新增可配置的 `pager.mark_markdown` 快捷键，支持方向键或 `hjkl` 选择矩形区域、`o` 交换角点、`y` 复制。

**价值**：强化终端内审阅结构化数据、表格和模型输出的效率。

---

## 5. 功能需求趋势

### Windows 原生体验与更新可靠性

社区最集中的诉求之一是修复 Windows 桌面端更新失败、MSIX 包锁定、Chrome native host、WSL CLI relocation 和 Computer Use 权限残留。这表明 Windows 不仅是主要使用平台之一，也是当前跨平台质量差距最明显的一端。

### 浏览器自动化与 Computer Use

浏览器发现成功但无法读取或控制页面、原生回退触发 URL 验证、Computer Use 无法控制已连接 VM，以及截图后权限未关闭，均指向同一核心需求：

> 浏览器和桌面控制必须具备稳定、可恢复、可解释的端到端链路。

相关 Issues：

- [#59872](https://github.com/openai/codex/issues/59872)
- [#61459](https://github.com/openai/codex/issues/61459)
- [#57101](https://github.com/openai/codex/issues/57101)

### Remote 与跨设备连续工作

Android 配对失败、iOS 重启后项目/任务列表为空、Remote 图片显示异常，反映用户希望把手机端作为桌面任务的可靠控制面，而非附属客户端。

相关 Issues：

- [#56600](https://github.com/openai/codex/issues/56600)
- [#60799](https://github.com/openai/codex/issues/60799)
- [#60438](https://github.com/openai/codex/issues/60438)

### 跨 Provider 与自定义模型支持

社区希望 Codex App 提供隔离的第三方 provider 路由，而不是拦截原生 OpenAI 流量。当天 PR 中对 Bedrock、线程级模型目录、GCP endpoint 和 TUI 默认 provider 的完善，也说明多提供商体验正在增强。

相关 Issue：

- [#36597](https://github.com/openai/codex/issues/36597)

### Skills、Plugins 与云端工作流可发现性

已发布 skill 未进入新任务上下文，以及云插件目录缓存问题，直接影响工作流复用。相关 PR 转向“轮次前显式刷新”和“step preparation 自动刷新”，说明重点正从单纯安装能力转向**安装后立即可用**。

相关 Issue：

- [#50879](https://github.com/openai/codex/issues/50879)

### 多 Agent 与云端会话协作

[#61455](https://github.com/openai/codex/issues/61455) 请求让获得授权的云端会话不仅能与其创建者或子会话通信，还能与其他现有会话协作。这是 Agent 编排从“树状父子关系”走向“受控会话网络”的明确趋势。

### 权限、审批与安全边界

Auto-review 的可信上下文、Dot 执行环境中的 DNS/进程检查限制，以及 Windows VM 的 `GetCursorPos` 权限拒绝，都表明用户希望系统明确说明：

- 哪些操作被允许；
- 权限缺失发生在哪一层；
- 如何申请最小范围的必要权限；
- 审批失败时究竟缺少什么上下文。

相关 Issues：

- [#54685](https://github.com/openai/codex/issues/54685)
- [#61450](https://github.com/openai/codex/issues/61450)
- [#61459](https://github.com/openai/codex/issues/61459)

### 桌面性能与大型会话承载能力

图片密集线程切换冻结、侧边栏 watcher teardown 延迟和 Windows 空闲时高内存占用，说明用户对长时间运行、大量媒体和持续驻留场景的稳定性要求正在提高。

相关 Issues：

- [#33782](https://github.com/openai/codex/issues/33782)
- [#34376](https://github.com/openai/codex/issues/34376)
- [#53146](https://github.com/openai/codex/issues/53146)

---

## 6. 开发者关注点

1. **升级链路必须可恢复**  
   Windows 用户反复遇到“包已下载但因旧进程未退出而无法安装”。理想方案应覆盖进程迁移、MSIX 句柄释放、失败回滚，以及更新后 native host 和 junction 的一致性。

2. **错误信息需要准确且可操作**  
   macOS Work 消息无法发送、Windows `/goal` 缺失、Free 套餐图像生成不可用等问题，用户通常得不到明确的功能限制或配置提示。社区希望减少无意义的重启、重登和版本排查。

3. **多 Agent 上下文必须可追踪**  
   审批、压缩、跨任务通信和云端 skill 注入都依赖上下文完整性。开发者关注的不只是“能否执行”，还包括证据是否完整、压缩后是否可恢复、工具轨迹是否正确结束。

4. **MCP 与插件生态需要更清晰的隔离模型**  
   进程级启动目录、OAuth 锁监控、云目录刷新表明 MCP/plugin 已成为核心集成面。开发者需要可预测的目录、凭据、缓存和生命周期行为。

5. **多 Provider 支持不能以牺牲模型路由准确性为代价**  
   Bedrock、GCP 和自定义 provider 的能力、模型目录与工具声明必须匹配当前线程和当前 provider，避免“能配置但实际调用错误模型或错误工具集”。

6. **Agent 终端需要面向开发者审查的高效交互**  
   任务搜索、多侧聊、键盘表格选择和状态栏速率限制，均体现了开发者对长时间、高并发任务的可管理性需求。

7. **可靠性可观测性正在成为基础设施能力**  
   MCP 锁等待、工具调用 Aborted 状态等改动虽然不直接增加用户功能，却能显著降低复杂 Agent 工作流中的隐式故障和排障成本。

---

**一句话结论：** 今日 Codex 社区的主线不是单一功能扩张，而是让多会话、多 Agent、MCP、远程控制和浏览器自动化在 **Windows、macOS、WSL、Remote** 等复杂环境中真正稳定运行；同时，通过目录刷新、线程级模型解析、锁监控和调用追踪等内部改进，提升系统的可发现性与可诊断性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-14**  
**数据范围：`google-gemini/gemini-cli` 过去 24 小时更新；Issues 50 条、PR 43 条，Issue/PR 均按评论数优先展示。**

## 1. 今日速览

- 今日无新版本发布；社区活动明显集中在 **Agent/Subagent 稳定性、安全策略和上下文效率** 三条主线。
- 最突出的功能风险是子代理错误报告成功、无限等待、配置失效及工具数量超限；安全侧则集中于危险命令识别、粘贴文本泄密和临时文件污染。
- 近期 PR 正加速补强这些基础能力，包括防止秘密附加、识别任意参数形式的递归删除、修复 IME 丢字，以及避免长模型请求被超时后重复执行。

## 3. 社区热点 Issues

### 1. 子代理达到 `MAX_TURNS` 后仍被报告为成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

- **重要性**：P1。子代理实际已中断，却被标记为 `success / GOAL`，会直接误导上层编排、评测和用户判断。
- **社区反应**：13 条评论、2 个赞，是今日讨论度最高的 Issue。

### 2. Generalist Agent 无限挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

- **重要性**：P1。创建文件夹等简单操作也可能等待一小时；禁用子代理后问题消失，说明故障集中在代理委派链路。
- **社区反应**：8 条评论、8 个赞，反馈鲜明。

### 3. 大量工具注册触发 400 错误
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

- **重要性**：工具扩展、插件及多代理生态越强，越容易撞上服务端工具数量限制；Issue 提到工具超过 400 个时出错，并期待 CLI 自动裁剪作用域。
- **社区反应**：3 条评论。标题写“>128 tools”，摘要写“超过 400 个工具”，具体阈值仍需项目侧确认。

### 4. Browser Agent 忽略 `settings.json`
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

- **重要性**：P2。Browser Agent 未正确应用 `maxTurns` 等全局或项目级配置，使配置层面对浏览器代理失效。
- **社区反应**：5 条评论，显示用户对“配置是否真正下沉到子代理”较敏感。

### 5. Browser Agent 在 Wayland 环境失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

- **重要性**：P1。Linux Wayland 用户可能无法使用浏览器子代理；同时问题仍以 `Termination Reason: GOAL` 呈现，进一步暴露终止状态不可靠。
- **社区反应**：4 条评论、1 个赞。

### 6. Agent 不够主动使用 Skills 和 Subagents
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

- **重要性**：涉及模型路由与委派策略。即使已提供 Gradle、Git 等技能，代理仍倾向直接执行，无法充分发挥扩展机制。
- **社区反应**：7 条评论、0 个赞；关注度高，但态度更偏经验反馈。

### 7. Agent 可能执行破坏性 Git 或数据库操作
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

- **重要性**：涉及 `git reset`、`--force` 及数据库修改等高风险行为。核心诉求是在存在安全替代方案时，应停止或劝阻破坏性命令。
- **社区反应**：3 条评论、1 个赞。

### 8. 模型在随机目录生成临时脚本
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

- **重要性**：临时文件分散会污染工作区、增加清理成本，并影响干净提交；也反映文件写入工具缺少统一临时目录约定。
- **社区反应**：3 条评论、0 个赞。

### 9. 输出 Hook 导致 CLI 崩溃
[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)

- **重要性**：P1。Hook 在输出接近完成时触发崩溃，直接影响定制工作流和任务收尾阶段的可靠性。
- **社区反应**：3 条评论、0 个赞。

### 10. 创建 Vite 应用时卡在交互式提示
[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

- **重要性**：自动化代理可能无法回答脚手架的交互式问题，导致任务停住。Issue 明确提出应补充行为评测并调整提示词。
- **社区反应**：2 条评论、0 个赞。

## 4. 重要 PR 进展

### 1. 防止危险 `rm` 写法绕过策略
[#30171](https://github.com/google-gemini/gemini-cli/pull/30171)

- 识别 `-r -f`、`-Rf`、`-vrf`、长选项以及参数位置变化后的递归强制删除。
- 属于 P1 安全修复，直接关联 Agent 的破坏性行为治理。

### 2. 防止粘贴内容和模糊 `@` 匹配附加秘密
[#30169](https://github.com/google-gemini/gemini-cli/pull/30169)

- 修复粘贴 shell 输出时 `@` 被解释为文件引用、进而将 SSH 私钥等秘密发送给模型的问题。
- 粘贴文本默认转为惰性文本，是高优先级安全加固。

### 3. 修复长模型请求因 body timeout 被杀死并重放
[#30174](https://github.com/google-gemini/gemini-cli/pull/30174)

- 流式请求长时间无数据时，可能因 undici 超时中止，随后最多重放数次。
- 修复可避免重复工具执行和额外 API 成本，尤其影响高思考或大文件写入任务。

### 4. 为本地子代理增加逐轮模型调用期限
[#30170](https://github.com/google-gemini/gemini-cli/pull/30170)

- 模型调用停滞时，不再让子代理耗尽整个 `maxTimeMinutes` 后才失败。
- 与 Generalist Agent 卡死及超时状态不透明问题直接相关。

### 5. 修复所有子代理模型的生成配置未生效
[#30175](https://github.com/google-gemini/gemini-cli/pull/30175)

- 确保 `temperature`、`topP`、`topK`、`thinkingConfig` 对 `auto`、别名和具体模型名称均生效。
- 提升不同子代理之间配置行为的一致性。

### 6. 修复工具调用 ID 在会话记录中重复
[#30172](https://github.com/google-gemini/gemini-cli/pull/30172)

- 每个 tool-call ID 只保留一个结果，修复保存会话、实时历史及模型请求中的重复结果。
- 对会话恢复、轨迹评测和工具调用一致性有直接影响。

### 7. 修复后台日志超长时丢失首行
[#30292](https://github.com/google-gemini/gemini-cli/pull/30292)

- `read_background_output` 不再无条件丢弃 64KB 读取窗口的第一行，并标记截断读取。
- 可避免超长单行日志完全不可见。

### 8. 修复创建 Vite 应用时的交互式卡死
[#28405](https://github.com/google-gemini/gemini-cli/pull/28405)  
**相关 Issue：**[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

- 防止用户向上滚动查看更新内容时，虚拟列表因自动滚动逻辑跳回顶部或底部。
- 这是 UI 滚动稳定性修复；并非直接修复 Vite 交互卡死，相关 Issue 仍在处理中。

### 9. 修复 IME 提交与 Enter 同时到达时丢失末字符
[#30178](https://github.com/google-gemini/gemini-cli/pull/30178)

- 解决韩文等 IME 输入中最后一个音节可能被吞掉的问题。
- 对非英语输入和快速提交场景具有较高实用价值。

### 10. 无交互模式中断时终止 Shell 并持久化工具调用
[#30051](https://github.com/google-gemini/gemini-cli/pull/30051)

- SIGINT、SIGTERM、SIGHUP 或 Ctrl+C 触发时，正确退出并清理活跃 shell，避免 detached shell 残留。
- 同时持久化工具调用状态，改善非交互任务的可恢复性。

## 5. 功能需求趋势

1. **Agent 与 Subagent 可靠性**
   - 准确区分成功、超时、最大轮次和异常终止。
   - 避免无限挂起、错误标记 `GOAL` 和配置不生效。
   - 社区正在推动更多回归评测与更清晰的子代理轨迹。

2. **安全执行与策略治理**
   - 加强递归删除、强制 Git、数据库修改等破坏性命令识别。
   - 防止粘贴文本触发 `@` 文件引用并泄露秘密。
   - 限制代理在复杂 Git 操作中的危险行为。

3. **上下文与 Token 效率**
   - AST 感知的文件读取、搜索和代码库映射受到持续关注。
   - “Tactful Extraction”目标是按需提取代码，而非整文件灌入上下文。
   - 工具过多导致 400，也推动按任务动态裁剪工具集合。

4. **工具与工作区卫生**
   - 临时脚本应集中、可预测地存放并自动清理。
   - 后台日志读取需正确支持超长单行和截断标识。
   - 任务跟踪倾向从纯上下文 `WriteToDo` 转向持久化文件 CRUD。

5. **Browser Agent 跨环境能力**
   - Wayland 兼容、浏览器会话接管、锁恢复和失败重试需求集中出现。
   - 浏览器配置需要真正继承全局及项目级 `settings.json`。

6. **可观测性与评测**
   - `/chat share` 应支持查看和分享子代理轨迹。
   - `/bug` 应包含子代理内部上下文。
   - 内部项目评测需要稳定、可追踪、可比较。

## 6. 开发者关注点

- **终止状态必须可信**：开发者最担心代理没有完成任务却被显示为成功，这会掩盖中断并污染自动化结果。
- **委派链路容易失灵**：Generalist Agent 挂起、Browser Agent 配置失效、Skills/Subagents 使用不足，说明“能调用代理”之外，可靠调度同样关键。
- **安全边界需要更严格**：危险命令识别必须覆盖等价参数组合；粘贴文本应默认不触发资源引用或秘密上传。
- **大任务可能重复执行**：长时间模型流式响应被超时中止后重放，既浪费时间，也可能重复修改文件或调用外部工具。
- **输入与国际化细节仍影响体验**：IME 同 tick 提交丢字、Wayland 浏览器失败等边缘问题，会直接影响真实开发环境。
- **工作区污染需要治理**：模型随意生成临时脚本、创建 Vite 应用卡在交互提示，均会增加人工清理和接管成本。
- **工具扩展存在规模上限**：插件、Skills 和多代理增强工具数量的同时增加，使“只启用当前任务所需工具”成为实际需求，而非单纯优化项。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-14**  
**数据范围：过去 24 小时更新的 Release、Issues 与 Pull Requests**

## 1. 今日速览

Copilot CLI 今日发布 **v1.0.112**，重点优化上下文窗口默认值、`/compact` 错误提示、粘贴输入保留和 `/chronicle` 成本建议，同时发布 v1.0.112-0 与 v1.0.111 的相关改进。社区讨论集中在 **MCP OAuth/Windows 认证、Agent 稳定性、权限与沙箱、长会话内存消耗** 等方向；过去一天共更新 41 个 Issue、2 个 PR。

## 2. 版本发布

### [v1.0.112](https://github.com/github/copilot-cli/releases)

- `/compact` 失败时直接显示模型提供商错误信息，移除内部 host-rethrow 前缀。
- CLI 尚未发送的提示词不会丢失：例如受管理账户策略仍处于加载状态时，粘贴文本会保留，再次按 Enter 可继续发送。
- 使用各模型推荐的上下文窗口作为默认值，同时保留用户显式指定的上下文配置。

### [v1.0.112-0](https://github.com/github/copilot-cli/releases)

- 改进 macOS Ventura 13.5 及更高版本上的启动稳定性，但不扩大官方支持的操作系统范围。
- 按模型推荐的上下文窗口设置默认行为。
- `/chronicle` 成本提示新增 Copilot App 会话，并推荐成本更低的模型。

### [v1.0.111](https://github.com/github/copilot-cli/releases)

- 企业管理的 Shell、Bash 和 PowerShell 权限规则支持正则表达式。
- 新增 `--host-allow-session-creation`，允许远程客户端在单次 CLI 启动期间创建会话，无需修改已保存设置。
- 刷新 `/usage` 高级请求用量显示，改进百分比信息。

## 3. 社区热点 Issues

### 1. [Agent 检查点引用持续写入仓库](https://github.com/github/copilot-cli/issues/5323) · OPEN

- **问题：** Agent 每轮任务都会在 `refs/agents/<session-id>/checkpoints/turn/N` 下创建提交，使用用户 Git 身份，并可能出现在各类引用展示工具中。
- **重要性：** 直接影响用户仓库整洁度、Git 身份使用和引用管理，是 Agent 工作流的重要可控性问题。
- **社区反应：** 6 条评论、2 个赞；社区希望提供禁用 Agent checkpoint refs 的配置项。

### 2. [长交互会话反复发生 OOM 崩溃](https://github.com/github/copilot-cli/issues/5435) · OPEN

- **问题：** v1.0.109 在长时间交互会话中再次出现内存耗尽，崩溃后需要恢复会话，且原后台 Agent 不再可用。
- **重要性：** 长时间自主任务是 Copilot CLI 的核心使用场景之一，内存问题会直接影响可靠性和任务连续性。
- **社区反应：** 暂无大量评论，但问题刚创建即获得关注，属于近期高优先级稳定性信号。

### 3. [上下文固定开销增加约 20K tokens](https://github.com/github/copilot-cli/issues/5450) · OPEN

- **问题：** 更新至 CLI v1.0.106 后，每次会话的固定上下文开销增加约 20K tokens；在 200K 上下文窗口下，可用空间明显缩小并更快触发自动压缩。
- **重要性：** 会直接影响长任务的可用上下文、费用、响应速度和压缩频率。
- **社区反应：** 新 issue 暂无评论；与 v1.0.112 调整模型推荐上下文窗口的发布方向直接相关，值得持续跟踪。

### 4. [委托子 Agent 无法可靠使用 HTTP OAuth MCP 服务](https://github.com/github/copilot-cli/issues/5437) · OPEN

- **问题：** `task` 子 Agent 访问 `<server>/*` OAuth MCP 工具时出现 401；显式引用只在部分模型、部分服务上可用。
- **重要性：** 这限制了多 Agent 编排与 MCP 工具组合，可能迫使子任务退回人工授权或仅使用显式授权。
- **社区反应：** 暂无评论；报告基于约 30 次委托运行，可复现性相对较强。

### 5. [Entra MCP OAuth 原生窗口阻止粘贴且无浏览器回退](https://github.com/github/copilot-cli/issues/5452) · OPEN

- **问题：** v1.0.109 之后，`/mcp auth azure-devops` 打开 OneAuth 原生窗口，该窗口无法复制粘贴密码，也没有浏览器认证回退。
- **重要性：** 对密码管理器、无障碍输入和部分企业工作流影响明显，可能直接阻断 Azure DevOps MCP 登录。
- **社区反应：** 暂无评论，但属于新版本认证体验的明显回归。

### 6. [Windows MCP 登录令牌缓存始终为空](https://github.com/github/copilot-cli/issues/5236) · CLOSED

- **问题：** Windows 上通过 Entra broker 为 HTTP MCP 服务登录后，缓存文件仍为 0 字节；同一进程 `/restart` 可复用登录，但每个新进程都会再次弹出账户选择器。
- **重要性：** 影响 Windows 企业用户使用 MCP 的连续性和登录体验。
- **社区反应：** 8 条评论、1 个赞，问题已关闭，表明社区高度关注且已获得维护处理。

### 7. [Autopilot 审批后进入无限循环](https://github.com/github/copilot-cli/issues/2374) · CLOSED

- **问题：** Autopilot 执行任务、生成计划并完成审批后仍可能反复进入相同流程。
- **重要性：** 无限循环会浪费模型额度并中断自动化任务，是 Agent 调度层的严重稳定性问题。
- **社区反应：** 8 条评论；问题已关闭，反映该问题曾长期困扰用户。

### 8. [Assisted Permissions 审批频率回归](https://github.com/github/copilot-cli/issues/5066) · OPEN

- **问题：** 用户认为启用 Assisted Permissions 后，原本低风险的 PowerShell 等命令也频繁要求审批。
- **重要性：** 权限策略过于激进会显著降低自动化效率，并阻碍用户采用 yolo 或辅助权限模式。
- **社区反应：** 4 条评论、1 个赞；与 PRU 异常消耗报告相互关联，用户信任度仍待恢复。

### 9. [启用 Assisted Permissions 后 PRU 配额疑似被异常耗尽](https://github.com/github/copilot-cli/issues/4802) · CLOSED

- **问题：** Copilot Pro 旧版按请求计费用户启用 Assisted Permissions 后，剩余 PRU 异常快速下降。
- **重要性：** 涉及高级请求额度、权限行为和用户成本，具有直接财务影响。
- **社区反应：** 11 条评论，为本次列表中评论最多的 Issue；问题已关闭，但足以反映社区对权限模式与配额关联的高度警惕。

### 10. [macOS 沙箱允许本地网络仍阻断 Gradle daemon](https://github.com/github/copilot-cli/issues/5390) · OPEN

- **问题：** 设置 `allowLocalNetwork: true` 后，代理模式仍生成 `hostLoopback: deny`，导致 Gradle 无法连接本机 daemon。
- **重要性：** 这会让常见 Java/Gradle 构建在 CLI 沙箱中失败，反映配置意图与实际策略不一致。
- **社区反应：** 暂无大量评论，但问题明确、影响范围集中，属于沙箱网络策略的重要缺陷。

## 4. 重要 PR 进展

> 过去 24 小时仅更新 2 个 PR，且均已关闭，因此以下列出全部可用进展，并补充两个直接关联版本发布的公开 Issue/PR 入口。

1. **[#5454：更新容器中的 Debian 基础镜像](https://github.com/github/copilot-cli/pull/5454)** · CLOSED  
   Dependabot 将容器使用的 Debian 镜像从 `f6b08b0` 更新至 `a72b443`，属于供应链维护和基础镜像刷新。

2. **[#5453：升级 docker/login-action 至 4.8.0](https://github.com/github/copilot-cli/pull/5453)** · CLOSED  
   更新 GitHub Actions 使用的 Docker 登录组件至 4.8.0，有助于同步上游改进与安全修复。

3. **[#4866：修复表单字段中 Ctrl-D 导致会话关闭](https://github.com/github/copilot-cli/issues/4866)** · CLOSED  
   在 `ask_user`/elicitation 表单中，Ctrl-D 不再直接触发会话关闭并丢弃输入；获得 3 个赞、3 条评论。

4. **[#5102：支持沙箱 Git 使用独立凭据](https://github.com/github/copilot-cli/issues/5102)** · CLOSED  
   解决沙箱强制使用 Copilot/gh 登录身份、无法提供独立 PAT 的问题；相关能力与 v1.0.111 的权限规则增强共同改善企业场景。

5. **[#5236：修复 Windows Entra broker MCP 令牌缓存](https://github.com/github/copilot-cli/issues/5236)** · CLOSED  
   聚焦 Windows 下 MCP 登录状态无法跨进程复用的问题，已在社区获得 8 条评论和 1 个赞。

6. **[#3039：改进无浏览器环境下的 MCP OAuth 流程](https://github.com/github/copilot-cli/issues/3039)** · CLOSED  
   聚焦 headless 环境中 MCP OAuth 等待浏览器超时的问题；虽然 issue 已关闭，但与今日 Entra MCP OAuth 回退问题高度相关。

7. **[#5437：跟踪子 Agent 的 MCP OAuth 授权缺陷](https://github.com/github/copilot-cli/issues/5437)** · OPEN  
   暴露委托子 Agent 使用 HTTP OAuth MCP 服务时的 401 授权问题，是后续 Agent/MCP 修复的重要候选。

8. **[#5436：保留结构化 OpenAI 兼容服务错误](https://github.com/github/copilot-cli/issues/5436)** · OPEN  
   针对自定义 provider 返回 HTTP 403 时，CLI 未展示 `error.message` 和 `error.code` 的问题，涉及错误诊断准确性。

9. **[#5450：跟踪上下文固定开销回归](https://github.com/github/copilot-cli/issues/5450)** · OPEN  
   聚焦 v1.0.106 后约 20K tokens 的额外上下文开销；与 v1.0.112 引入模型推荐上下文窗口直接相关。

10. **[#5452：跟踪 Entra 原生认证窗口无粘贴问题](https://github.com/github/copilot-cli/issues/5452)** · OPEN  
    聚焦新版 OneAuth 窗口禁用粘贴、缺少浏览器回退的回归，是今日认证体验方面最值得跟踪的新问题。

## 5. 功能需求趋势

### MCP 与企业认证

- **OAuth 登录流程需要更可靠的浏览器回退**，特别是 Entra、Azure DevOps 和无头服务器环境。
- **Windows MCP 登录状态应跨进程持久化**，避免每个新进程重复账户选择。
- 社区希望子 Agent 能稳定继承并使用 OAuth MCP 工具授权，而不只是父 Agent 可用。

### 权限与沙箱控制

- 企业权限规则需要支持更灵活的**正则表达式匹配**。
- 用户希望能够**关闭 Agent checkpoint refs**，减少对用户 Git 仓库的隐式修改。
- Assisted Permissions 需要降低误审批率，并确保不会异常消耗 PRU。
- 沙箱网络配置应真正兑现 `allowLocalNetwork`，允许 Gradle 等工具访问本机 daemon。

### Agent 稳定性与可观测性

- 长时间任务需要解决 OOM、崩溃恢复以及后台 Agent 丢失问题。
- Autopilot 需要避免审批后的无限循环。
- 自定义模型 provider 返回结构化 403 时，CLI 应保留并展示真实错误码与消息。

### 上下文与成本管理

- 社区持续关注**固定上下文开销、模型推荐上下文窗口和自动 compact 频率**。
- `/chronicle` 开始覆盖 Copilot App 会话并推荐低成本模型，显示成本治理正成为核心能力。
- 需要更精细的 usage/PRU 展示与权限模式消耗解释。

### 终端与配置体验

- 恢复或替代 `--no-alt-screen`，避免 alt-screen 成为不可退出的默认行为。
- 修复自定义 `statusLine.command` 配置未执行、未渲染的问题。
- 改进粘贴、Ctrl-D、tmux/X11 剪贴板以及非 UTF-8 文件编辑等底层终端交互。

## 6. 开发者关注点

1. **长会话的内存与上下文成本**  
   开发者最担心的是任务运行数小时后发生 OOM，或固定 token 开销突然增长。这不仅影响稳定性，也直接影响模型费用。

2. **MCP 授权在真实企业环境中的可用性**  
   Windows、Entra、无浏览器、远程 MCP、子 Agent 和 OAuth 重定向均暴露兼容性问题，说明 MCP 登录仍是高频痛点。

3. **权限系统必须兼顾安全与自动化效率**  
   一方面，企业需要正则规则、sandbox/yolo 策略和独立 Git 凭据；另一方面，审批过频和 PRU 异常消耗会削弱用户对权限模式的信任。

4. **Agent 对仓库和系统状态的副作用需要可配置、可追踪**  
   检查点 refs、凭据身份、后台 Agent 和恢复机制都受到关注。开发者希望明确知道 Agent 做了什么，并拥有禁用或恢复的能力。

5. **升级后的回归风险需要降低**  
   多起问题与特定版本升级相关，包括 v1.0.106 的上下文开销、v1.0.109 的 OOM/OAuth 回归，以及 Rust 重写后的 macOS 证书问题。发布说明之外，升级前后的兼容性验证和快速回滚能力十分重要。

6. **跨平台终端行为仍不稳定**  
   Windows PowerShell、WSL2、macOS 沙箱、Linux/X11/tmux 均有问题。开发者期待 CLI 在不同平台上的复制粘贴、进程生命周期、终端渲染和本地服务访问保持一致。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-14**

## 今日速览

OpenCode **v2.3.0** 发布，核心变化是子智能体默认转为后台执行：父会话可继续工作，子智能体在空闲后回传结果。与此同时，v2 升级后的会话迁移、事件序列、PTY 进程回收和 MCP 进程泄漏问题成为社区焦点。功能层面，模型可用时段、提示词历史作用域、会话暂停/恢复及原生凭据引用是讨论最集中的方向。

## 版本发布

### v2.3.0

- **子智能体默认后台运行**：子智能体立即返回并在后台继续执行；父会话无需等待，可在多个子智能体并发运行时继续工作，子智能体空闲后报告结果。
- 本次发布信息以 release notes 为准，详情见 [v2.3.0](https://github.com/anomalyco/opencode/releases/tag/v2.3.0)。

## 社区热点 Issues

1. **免费额度异常与重置失败仍是最大社区议题**  
   汇总 Issue 获得 **366 条评论、28 个点赞**，大量用户报告“免费额度耗尽”“重置时间失效”等问题。另一个重试等待约 17 小时的个案也已关闭，说明免费层策略及桌面端额度提示仍是信任问题的核心。  
   [#59387](https://github.com/anomalyco/opencode/issues/59387) · [#58906](https://github.com/anomalyco/opencode/issues/58906)

2. **`--auto` 无法批准后台标签页的权限请求**  
   V2 TUI 的自动批准只作用于当前选中的会话路由，后台标签页会停在权限确认界面。该问题直接削弱无人值守和多会话并行能力，属于高影响工作流缺陷。  
   [#44007](https://github.com/anomalyco/opencode/issues/44007)

3. **V1→V2 迁移完成后，新出现的 V1 会话不会被导入**  
   迁移状态被永久标记为完成后，后续新增的旧版会话停留在 legacy 表中，用户可能无法在新版中看到历史记录，直接影响升级后的数据完整性。  
   [#50130](https://github.com/anomalyco/opencode/issues/50130)

4. **GUI 缺少自定义 Provider 与模型列表管理能力**  
   用户希望能在界面中编辑 LM Studio、Jan AI 等自定义 Provider，而不必直接修改配置文件。Issue 有 **11 条评论、4 个点赞**，反映了桌面端易用性与多模型工作流的明显缺口。  
   [#33704](https://github.com/anomalyco/opencode/issues/33704)

5. **在 Plan 与 Build 模式间切换时模型被重置**  
   当前 Tab 切换会恢复各 Agent 上次使用的模型，但目标 Agent 没有专属配置时可能丢失当前模型。社区希望切换模式只改变工作策略，不改变底层模型选择。  
   [#54375](https://github.com/anomalyco/opencode/issues/54375)

6. **请求暂停/恢复 Agent 与子智能体执行**  
   用户希望可以真正挂起正在运行的 Agent 或子智能体，并在之后恢复，而不只中断当前 turn。该需求获得 **9 条评论、18 个点赞**，是今天最明确的高热度功能诉求之一。  
   [#27511](https://github.com/anomalyco/opencode/issues/27511)

7. **限流后应按已知重置时间自动暂停并恢复**  
   Provider 返回明确的重置时间后，OpenCode 可持久化会话、进入等待状态，并在限额恢复后继续执行。该需求减少人工轮询，对长任务和批处理代理尤其重要。  
   [#43126](https://github.com/anomalyco/opencode/issues/43126)

8. **子智能体使用 `sessionID` 续接失败**  
   无论传入何种会话 ID，工具最终都只收到 `"ses"`，导致无法继续已有子智能体会话。新建子智能体正常，但会话延续能力不可用，对多层代理编排影响明显。  
   [#59293](https://github.com/anomalyco/opencode/issues/59293)

9. **v2.3.0 在 Linux 上遗留 PTY 僵尸进程**  
   从 2.2.7 升级至 2.3.0 后，已结束的 shell 命令仍以 zombie 状态挂在 `opencode-pty daemon` 下。命令结果虽正常返回，但长期运行可能累积进程和资源占用。  
   [#63817](https://github.com/anomalyco/opencode/issues/63817)

10. **会话事件序列从 0 开始，引发唯一键冲突**  
    缺少 `event_sequence` 计数器记录的会话会从 0 分配序号，与已有 `session_message.seq` 冲突，导致后续消息写入失败。该问题会造成会话持久化损坏，且已有针对性修复 PR。  
    [#62523](https://github.com/anomalyco/opencode/issues/62523)

## 重要 PR 进展

1. **为模型增加基于时间的可用性与回退机制**  
   新增每模型的 `availability` 配置，可按时间窗口启用模型，并支持回退，直接适用于高峰时段价格或容量变化。  
   [#63728](https://github.com/anomalyco/opencode/pull/63728)

2. **修复重复 JSONC 配置键导致设置保存异常**  
   保存设置前移除被遮蔽的重复属性，避免编辑一个键时破坏其他配置。  
   [#63895](https://github.com/anomalyco/opencode/pull/63895)

3. **Linux TUI 支持主剪贴板缓冲区选择**  
   新增 `linux_clipboard_selection`，支持 primary/both 模式、主缓冲区读取，并处理 `wl-copy` MIME 问题。  
   [#32370](https://github.com/anomalyco/opencode/pull/32370)

4. **从已有事件与消息修复缺失的事件序列种子**  
   对缺少计数器的会话，根据已存储的事件和消息恢复正确起始序号，避免 `UNIQUE(session_id, seq)` 冲突。  
   [#63466](https://github.com/anomalyco/opencode/pull/63466)

5. **WebFetch 增加 XHTML 转换支持**  
   根据规范化 MIME 类型将 `application/xhtml+xml` 交给现有 HTML 转换器，避免网页内容无法正确提取。  
   [#63889](https://github.com/anomalyco/opencode/pull/63889)

6. **修复移动端标签抽屉的滑动冲突**  
   纵向拖动手势需长按 250ms 才启动，避免页面滚动时误将标签页重新排序。  
   [#61407](https://github.com/anomalyco/opencode/pull/61407)

7. **统一 MCP 权限动作命名**  
   规范化 MCP 权限 action，兼容带连字符的服务/工具名称与下划线规则，减少权限请求与规则匹配不一致。  
   [#63881](https://github.com/anomalyco/opencode/pull/63881)

8. **CLI 的 `session list` 新增 `--all`**  
   允许列出其他项目的会话，不再局限于当前目录对应的项目，改善跨项目会话检索。  
   [#60895](https://github.com/anomalyco/opencode/pull/60895)

9. **TUI 增加提示词历史作用域设置**  
   新增 `prompt.history_scope`，支持 `global` 和 `session`；默认保持全局行为，可选择只在当前会话内调用历史提示词。  
   [#55261](https://github.com/anomalyco/opencode/pull/55261)

10. **修复显式 `traceparent` 被 HTTP 客户端覆盖**  
    保留调用方主动设置的链路追踪头，避免自动生成上下文破坏分布式追踪。  
    [#61386](https://github.com/anomalyco/opencode/pull/61386)

## 功能需求趋势

- **后台与可中断的代理编排**：子智能体后台化后，暂停/恢复、终止、继续会话及更可靠的 `sessionID` 延续成为核心需求。社区关注的是“任务可恢复、可观察、可停止”，而非单纯增加代理数量。  
  [#27511](https://github.com/anomalyco/opencode/issues/27511) · [#63650](https://github.com/anomalyco/opencode/issues/63650) · [#59293](https://github.com/anomalyco/opencode/issues/59293)

- **模型选择与多 Provider 管理**：GUI 自定义 Provider、模型列表管理、跨 Agent 保持模型，以及按时段自动选择或回退模型，反映出用户正在把 OpenCode 作为统一的多模型工作台。  
  [#33704](https://github.com/anomalyco/opencode/issues/33704) · [#54375](https://github.com/anomalyco/opencode/issues/54375) · [#63728](https://github.com/anomalyco/opencode/pull/63728)

- **长任务的限流恢复**：自动等待限流重置、后台继续任务、持久化恢复与暂停/恢复形成同一类需求，目标是降低人工值守成本。  
  [#43126](https://github.com/anomalyco/opencode/issues/43126) · [#27511](https://github.com/anomalyco/opencode/issues/27511)

- **凭据与配置安全**：原生引用操作系统凭据库或 Secret Manager 的呼声上升；与此同时，重复配置键、MCP 进程泄漏等问题也说明配置生命周期管理仍不成熟。  
  [#63867](https://github.com/anomalyco/opencode/issues/63867) · [#63895](https://github.com/anomalyco/opencode/pull/63895) · [#63847](https://github.com/anomalyco/opencode/issues/63847)

- **IDE 与 Web UI 完善**：移动端删除确认、桌面文件树刷新、Web 通知、GUI Provider 配置等需求表明，OpenCode 正从终端工具向多端 AI 开发工作台扩展。  
  [#63845](https://github.com/anomalyco/opencode/issues/63845) · [#57099](https://github.com/anomalyco/opencode/issues/57099) · [#47479](https://github.com/anomalyco/opencode/issues/47479)

- **会话迁移与数据可靠性**：V1/V2 共存、事件序列冲突、全局会话归属等问题受到重视。升级安全已成为 v2 阶段的核心质量指标。  
  [#50130](https://github.com/anomalyco/opencode/issues/50130) · [#62523](https://github.com/anomalyco/opencode/issues/62523) · [#58846](https://github.com/anomalyco/opencode/pull/58846)

## 开发者关注点

- **无人值守必须真正可靠**：后台标签页权限阻塞、子智能体无法续接等问题使用户难以放心把任务交给 Agent；权限、恢复与停止语义需要保持一致。
- **升级不能造成数据丢失或状态不一致**：会话导入遗漏、事件序号冲突和 V1 全局会话归属问题，直接影响生产项目历史记录与持续运行。
- **长生命周期进程需要可靠回收**：PTY 僵尸进程和配置重载后 MCP 旧进程未退出的问题，会在长期运行中演变为资源泄漏，应通过守护进程生命周期和回收机制修复。
- **多模型工作流需要更稳定的模型状态**：切换 Plan/Build 不应意外更换模型；模型还需要支持时段、容量、价格变化及自动回退。
- **配置与凭据需要统一治理**：重复 JSONC 键、MCP 权限命名差异、Secret 引用缺失，表明配置解析、权限匹配和密钥管理仍缺少一致且可预测的模型。
- **新版本发布后的回归风险值得警惕**：v2.3.0 带来的 PTY 僵尸进程属于典型升级回归；建议发布时同步提供已知问题、迁移说明和明确的版本兼容范围。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-14

## 今日速览

过去 24 小时无新版本发布，但社区集中讨论 **Swarm 多代理协作、ACP 客户端集成与模型提供商兼容性**。同时，Windows/macOS/Linux 下的进程退出、锁竞争、CI 稳定性等工程问题仍较突出，显示项目正从功能扩张转向跨平台可靠性与测试治理阶段。

## 社区热点 Issues

1. **[Windows] Bash 在命令成功后因 detached child 返回 exit 120**  
   命令实际已完成、文件写入与状态更新均正常，但后台子进程导致 Bash 工具误报退出码 120。该问题直接影响自动化任务的成功判定。  
   [#2147](https://github.com/1jehuang/jcode/issues/2147)

2. **[Swarm] `await_members` 缺少阻塞模式，`bg wait` 不接受 Swarm 依赖 ID**  
   当前非阻塞监听虽可工作，但调用方无法用统一、可等待的接口等待所有成员，直接影响 Harness 和第三方客户端编排多代理任务。  
   [#2152](https://github.com/1jehuang/jcode/issues/2152)

3. **[Harness API] 未转发 `swarm_status`，客户端无法跟踪 worker**  
   嵌入 jcode 的客户端无法实时展示 worker 状态，也无法在聊天界面持续等待执行结果，是 Swarm 能力开放给外部客户端的关键缺口。  
   [#2158](https://github.com/1jehuang/jcode/issues/2158)

4. **[ACP] 客户端无法收到 PNG 的原生图片内容**  
   ACP 客户端只能看到状态与文本，不能直接显示图片；虽然模型能够描述图片，但客户端缺少可呈现的图像载荷。  
   [#2088](https://github.com/1jehuang/jcode/issues/2088)

5. **[ACP] daemon 重启后会话不重连，后续提示词全部失败**  
   daemon socket 关闭后，ACP bridge 未重新连接，表面仍显示健康，实际后续请求均不可用，属于影响集成稳定性的高优先级问题。  
   [#2116](https://github.com/1jehuang/jcode/issues/2116)

6. **[ACP] 推理强度显示失真，切换模型后修改不生效**  
   ACP `configOptions` 会报告并未实际配置的 `medium`，模型切换后 effort 变更也可能被忽略，使客户端无法准确控制和展示模型状态。  
   [#2127](https://github.com/1jehuang/jcode/issues/2127)

7. **[Providers] Anthropic-compatible 请求被 AWS Bedrock 以 400 拒绝**  
   jcode 统一发送 GA prompt-caching beta header，但 Bedrock 明确拒绝该 header，使兼容配置无法使用。  
   [#2102](https://github.com/1jehuang/jcode/issues/2102)

8. **[Providers] Fork 会丢失 `anthropic-compatible` profile**  
   会话分叉时模型切换请求没有完整保留 provider profile，导致复制后的会话无法继续使用原有凭据和路由。  
   [#2107](https://github.com/1jehuang/jcode/issues/2107)

9. **[Swarm] spawn 未指定 phase 时可能关联到重复 lane**  
   worker 可能被绑定到新建的同名 lane，而非真正的后续阶段 lane，导致完成事件无法送达协调器。  
   [#2111](https://github.com/1jehuang/jcode/issues/2111)

10. **[Agent] 简单调试任务中持续缓存、思考和规划，用户反馈存在“过度思考”**  
    问题体现智能体任务边界判断、推理预算与停止策略仍不够稳定；同时也引发配额消耗和错误修改风险方面的担忧。  
    [#2101](https://github.com/1jehuang/jcode/issues/2101)

### 其他值得关注的问题

- master 存在格式检查、代码体积预算及 Ubuntu 测试失败，说明 CI 门禁与主干质量仍有漂移：  
  [#2131](https://github.com/1jehuang/jcode/issues/2131)
- macOS 并发工作区发布测试约 40% 概率因共享 hydration lock 竞争失败：  
  [#2027](https://github.com/1jehuang/jcode/issues/2027)
- Unix 取消超时 Bash 任务时仅终止 shell，未终止整个进程组：  
  [#2100](https://github.com/1jehuang/jcode/issues/2100)
- Claude OAuth 下 `claude-fable-5-2` 模型选择或版本门控仍有问题：  
  [#2144](https://github.com/1jehuang/jcode/issues/2144) · [#2133](https://github.com/1jehuang/jcode/issues/2133)

## 重要 PR 进展

1. **支持通过可配置按键复制最后一条 assistant 回答**  
   复制内容保持模型原始 Markdown，不包含 reasoning 与工具输出，复用 OSC 52 剪贴板链路。  
   [#2164](https://github.com/1jehuang/jcode/pull/2164)

2. **TUI 增加带 frecency 排序的 `@file` 文件选择器**  
   用户可快速引用项目文件，优先展示常用及最近访问项目，降低大型代码库中的手动路径输入成本。  
   [#1889](https://github.com/1jehuang/jcode/pull/1889)

3. **自定义 OpenAI-compatible provider 支持 per-model 配置**  
   新增 `display_name`、reasoning override 和 effort 配置，使混合模型网关能展示友好名称并按模型控制推理强度。  
   [#1879](https://github.com/1jehuang/jcode/pull/1879)

4. **修复 macOS 并发创建 hydration lock 时的 ENOENT**  
   针对 `lock_private` 的并发创建竞争进行重试，直接关联 flaky 测试 #2027。  
   [#2170](https://github.com/1jehuang/jcode/pull/2170)

5. **新增 Cursor ACP provider**  
   接入 Cursor Agent Client Protocol，并补齐模型路由、reasoning effort、子进程回收及并行测试隔离。  
   [#1873](https://github.com/1jehuang/jcode/pull/1873)

6. **新增 `ask_user` 工具及 TUI 内联选择器**  
   智能体可在执行中请求结构化选择，支持数字快捷键、自由输入和超时自动选择，并回传用户实际选项。  
   [#1815](https://github.com/1jehuang/jcode/pull/1815)

7. **TUI 新增会话概览折叠组件与 memory effort 配置**  
   增加概览面板折叠能力，并允许统一配置 memory extraction sidecar 的推理强度，同时调整运行时模型信息行。  
   [#1709](https://github.com/1jehuang/jcode/pull/1709)

8. **`/resume` 优先显示当前目录会话**  
   当前工作目录匹配的会话被置顶，并按运行状态优先排序，减少在大量历史会话中查找成本。  
   [#1852](https://github.com/1jehuang/jcode/pull/1852)

9. **修复 Kitty 键盘协议分片上报导致输入污染**  
   兼容 iTerm2 将 kitty report 分多个 write 发送的情况，避免 ESC 和后续字节被错误插入输入框。  
   [#2143](https://github.com/1jehuang/jcode/pull/2143)

10. **增强文本模型的图片模态恢复能力**  
    当兼容端点实际为纯文本模型时，自动处理工具结果中的图片块，避免图片持续留在上下文中并破坏后续所有对话轮次。  
    [#1347](https://github.com/1jehuang/jcode/pull/1347)

### 其他重要 PR

- 测试环境隔离，减少 ambient `JCODE_*` 变量及并行测试竞态：  
  [#1880](https://github.com/1jehuang/jcode/pull/1880) · [#1955](https://github.com/1jehuang/jcode/pull/1955) · [#1882](https://github.com/1jehuang/jcode/pull/1882)
- 新增 `/theme` 命令及自定义主题色板：  
  [#1877](https://github.com/1jehuang/jcode/pull/1877)
- 新增 `/mcp` 命令及按服务器启停工具：  
  [#1874](https://github.com/1jehuang/jcode/pull/1874)
- 支持配置 memory model，并允许 Alt+M 仅对当前会话生效：  
  [#1875](https://github.com/1jehuang/jcode/pull/1875)
- Provider 支持配置 User-Agent 与额外请求头：  
  [#1872](https://github.com/1jehuang/jcode/pull/1872)

## 功能需求趋势

### 1. Swarm 多代理能力继续成为核心方向

社区关注点从“能否 spawn worker”扩展到完整编排体验：

- 阻塞等待与统一任务依赖；
- worker 状态实时推送；
- lane、phase 与完成事件可靠关联；
- Harness API 中展示多代理执行过程；
- coordinator todo 命名和任务归因更清晰。

相关 Issue：  
[#2152](https://github.com/1jehuang/jcode/issues/2152) · [#2158](https://github.com/1jehuang/jcode/issues/2158) · [#2111](https://github.com/1jehuang/jcode/issues/2111) · [#2151](https://github.com/1jehuang/jcode/issues/2151)

### 2. ACP 与第三方客户端集成成为生态重点

需求集中在：

- 原生图片、多模态上下文；
- daemon 重启后的自动重连；
- reasoning effort 的准确暴露和修改；
- 更有描述性的工具标题；
- 加入 ACP Registry，提升客户端可发现性。

相关 Issue：  
[#2088](https://github.com/1jehuang/jcode/issues/2088) · [#2116](https://github.com/1jehuang/jcode/issues/2116) · [#2127](https://github.com/1jehuang/jcode/issues/2127) · [#2093](https://github.com/1jehuang/jcode/issues/2093) · [#2096](https://github.com/1jehuang/jcode/issues/2096)

### 3. Provider 配置需要更细粒度、可组合

高频诉求包括：

- 按模型配置显示名称、reasoning 与 effort；
- 暴露每个 route 可接受的推理等级；
- provider profile 支持多个 API key，并在会话中固定 key；
- Anthropic-compatible、OpenAI-compatible 与 Bedrock 的差异化处理；
- WebSocket 压缩请求兼容性。

相关 Issue：  
[#2091](https://github.com/1jehuang/jcode/issues/2091) · [#2103](https://github.com/1jehuang/jcode/issues/2103) · [#2102](https://github.com/1jehuang/jcode/issues/2102) · [#2110](https://github.com/1jehuang/jcode/issues/2110)

### 4. TUI 效率与可发现性需求增强

用户希望减少输入、查找和视觉操作成本：

- `@file` 快速引用；
- 一键复制回答；
- 当前目录会话置顶；
- `/theme`、`/mcp` 等命令入口；
- 隐藏非必要 TPS 行；
- 改进图片、代码高亮与终端协议兼容性。

相关 Issue/PR：  
[#1889](https://github.com/1jehuang/jcode/pull/1889) · [#2164](https://github.com/1jehuang/jcode/pull/2164) · [#1852](https://github.com/1jehuang/jcode/pull/1852) · [#1874](https://github.com/1jehuang/jcode/pull/1874) · [#1877](https://github.com/1jehuang/jcode/pull/1877)

### 5. 模型与多模态支持持续扩展

包括 Cursor ACP、Claude 新模型、ACP 原生图片，以及文本模型遇到图片时的降级恢复。新增模型和 provider 的同时，版本门控与模型可见性也需要自动化维护。

相关 Issue/PR：  
[#2144](https://github.com/1jehuang/jcode/issues/2144) · [#2133](https://github.com/1jehuang/jcode/issues/2133) · [#1873](https://github.com/1jehuang/jcode/pull/1873) · [#1347](https://github.com/1jehuang/jcode/pull/1347)

## 开发者关注点

1. **执行结果必须可信**  
   成功命令被误报为 exit 120、取消任务后子进程继续运行、worker 完成事件投递给错误 lane，都会破坏自动化与多代理系统的正确性。

2. **跨平台行为不一致是主要痛点**  
   Windows detached child、macOS `openat`/锁竞争、Unix 进程组回收，以及不同 libc 和终端协议行为均引发问题。测试需要从“逻辑断言正确”扩展到真实操作系统行为验证。

3. **ACP 客户端体验仍不完整**  
   社区期待 jcode 不只是提供 ACP 命令，而是提供可复用的完整协议层，包括状态、图像、reasoning effort、工具标题和断线恢复。

4. **CI 与测试隔离成为高频工程议题**  
   环境变量污染、`JCODE_HOME` 竞态、共享锁、Ubuntu 断言漂移和代码体积预算均造成主干红灯。稳定、可复现的测试环境已成为高优先级基础设施工作。

5. **Provider 兼容性不能只靠统一协议假设**  
   Bedrock 拒绝特定 beta header、WebSocket 压缩请求报错、fork 丢失 profile，说明兼容层仍需针对不同网关、认证方式和协议扩展进行精细适配。

6. **智能体成本与行为边界受到更多关注**  
   用户报告简单任务中长时间思考、重复规划和大量子代理消耗配额。未来需要更明确的推理预算、任务复杂度判断、停止策略与配额保护机制。

7. **模型元数据必须与实际 provider 行为一致**  
   模型选择、OAuth 版本门槛、上下文窗口和 reasoning effort 的显示若不准确，会直接影响功能可用性；相关配置应尽量由运行时探测或单一元数据源驱动。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-14

## 今日速览

过去 24 小时没有新版本发布，但社区集中推动了三类改进：GitHub Copilot 推理参数与 token 统计、流式请求重试及超时处理、TUI 大型工具结果与视觉输入稳定性。与此同时，工具调用并发顺序、MCP 变量展开、Copilot 模型缓存等开放问题仍待解决，稳定性与多提供商兼容性是当前主线。

## 社区热点 Issues

1. **Copilot Gemini 始终不发送 `reasoning_effort`，且忽略推理 token**
   - Copilot 目录错误地将相关模型标记为不支持 reasoning effort，导致 `--thinking` 对 Gemini 4/3.8 Flash 实际无效；对应修复已进入 PR 阶段。
   - 讨论热度最高之一，共 10 条评论，说明模型能力映射准确性已成为明确需求。
   - [Issue #12019](https://github.com/earendil-works/pi/issues/12019)

2. **同一消息中的工具调用会并发执行，读取可能早于 Bash 完成**
   - 模型同时发出 `bash` 和 `read` 时，两者并发启动，可能读取尚未生成的日志或图片，造成陈旧内容或错误。
   - 该问题直接关系到代理工作流可靠性，并被标记为 P0。
   - [Issue #11950](https://github.com/earendil-works/pi/issues/11950)

3. **Mistral Large 4 使用工具时卡死**
   - 预期触发工具调用的请求可能持续等待数分钟而无响应，暴露了 Mistral 工具调用协议兼容问题。
   - 共 4 条评论，反映新模型接入中的“能聊天但不能稳定用工具”已成为突出痛点。
   - [Issue #12148](https://github.com/earendil-works/pi/issues/12148)

4. **运行中修改工具集合会改变系统提示词头部并重复计费**
   - 工具列表在每轮重新从实时集合推导；运行期间切换工具集合可能移动提示词头部，引发上下文重新计费。
   - 7 条评论、2 个赞，直接影响长会话成本和 token 预算可预测性。
   - [Issue #10024](https://github.com/earendil-works/pi/issues/10024)

5. **MCP 配置在环境变量展开前解析 transport**
   - `mcp.json` 中 `${MY_VAR}` 形式的 URL 无法正确解析 transport，而 headers 等字段采用不同逻辑，形成配置不一致。
   - 对容器化部署和企业环境变量管理影响较大。
   - [Issue #10654](https://github.com/earendil-works/pi/issues/10654)

6. **企业管理员启用的 Copilot 模型在重启后仍不可见**
   - OAuth 凭据中的 `availableModelIds` 被缓存，重启不一定刷新，导致企业新开放模型无法出现在模型选择器。
   - 共 4 条评论，聚焦 Copilot 企业模型目录的及时同步。
   - [Issue #11006](https://github.com/earendil-works/pi/issues/11006)

7. **Vertex AI 流缺少 `timeoutMs`，重置和超时不会触发重试**
   - Google Vertex 流可能无限挂起，或在 `ECONNRESET`、timeout 中断后未进入既有重试逻辑。
   - 问题包含明确复现条件，反映多轮编码代理评测对可靠流式传输的依赖。
   - [Issue #12070](https://github.com/earendil-works/pi/issues/12070)

8. **Codex WebSocket 在单轮思考过程中触及 60 分钟连接上限**
   - 即使没有工具调用，持续流式思考也可能在同一 WebSocket 连接内触发连接限制并中断。
   - 该问题对长时间自主推理任务影响明显。
   - [Issue #12124](https://github.com/earendil-works/pi/issues/12124)

9. **中止工具执行后，尾部工具调用在会话中无结果**
   - 中止批量工具调用时，已启动调用会得到结果，但后续调用直接消失且不展示错误，可能破坏消息配对与恢复流程。
   - 共 7 条评论，关注会话历史完整性。
   - [Issue #9986](https://github.com/earendil-works/pi/issues/9986)

10. **大型 diff 导致 TUI 崩溃，会话恢复时仍可复现**
    - `edit` 工具成功执行后，约 14.5 MB 的超长行 diff 在渲染阶段使交互式 TUI 崩溃。
    - 相关修复 PR 已合并，说明问题不仅影响大文件编辑，也影响大型 HTML 等生成物。
    - [Issue #8036](https://github.com/earendil-works/pi/issues/8036)

## 重要 PR 进展

1. **GitHub Copilot 正确发送 `reasoning_effort` 并读取推理 token**
   - 不再为所有 Copilot 模型硬编码 `supportsReasoningEffort: false`，改用 models.dev 能力数据，覆盖 Gemini、Kimi 等模型。
   - 已关闭，对应修复 #12019。
   - [PR #12110](https://github.com/earendil-works/pi/pull/12110)

2. **大型自渲染工具结果不再导致 TUI 崩溃**
   - 避免将超大 diff 的全部渲染行直接压入数组，针对内置 `edit` 等 `renderShell: "self"` 工具优化。
   - 已关闭，关联 #8036。
   - [PR #12145](https://github.com/earendil-works/pi/pull/12145)

3. **仅含 Node socket 错误码的 provider 错误纳入重试**
   - 识别 `ECONNRESET`、`EPIPE`、`ETIMEDOUT` 等裸错误码，避免短暂网络抖动直接终止整轮。
   - 已关闭，关联 #12128。
   - [PR #12136](https://github.com/earendil-works/pi/pull/12136)

4. **补充裸 socket 错误码重试逻辑**
   - 从另一实现路径完善 `isRetryableAssistantError()`，覆盖 `read ECONNRESET`、`write EPIPE`、`connect ETIMEDOUT` 等情况。
   - 已关闭，关联 #12128。
   - [PR #12127](https://github.com/earendil-works/pi/pull/12127)

5. **文本模型警告不再污染后续视觉模型请求**
   - 文本模型读取图片时附加的“不支持图片”警告不再进入模型上下文或持久化会话，切换到视觉模型后不会重复发送。
   - 已关闭，关联 #12131。
   - [PR #12139](https://github.com/earendil-works/pi/pull/12139)

6. **`/copy` 跳过没有最终回答的 assistant turn**
   - 修复中止工具调用或出现空 assistant 消息后，`/copy` 错误复制无内容轮次的问题。
   - 已关闭，涉及 #12119。
   - [PR #12121](https://github.com/earendil-works/pi/pull/12121)

7. **会话替换时重新输出运行时诊断信息**
   - 在 `/new`、`/resume`、`/fork`、导入、RPC 切换及扩展创建会话时重新生成并报告诊断信息。
   - 目前开放，适用于会话替换相关可观测性建设。
   - [PR #12115](https://github.com/earendil-works/pi/pull/12115)

8. **OpenAI Chat Completions 默认使用 `system` 指令角色**
   - 将默认 instruction role 从 `developer` 调整为 `system`，提高 Groq 等提供商的兼容性。
   - 目前开放，可能影响依赖既有角色映射的扩展或提供商。
   - [PR #12134](https://github.com/earendil-works/pi/pull/12134)

9. **符号链接路径共享同一份 `auth.json` 锁**
   - 通过真实路径统一锁文件，避免同一认证文件经多个符号链接访问时发生并发写入冲突。
   - 已关闭，关联 #11787。
   - [PR #11787](https://github.com/earendil-works/pi/pull/11787)

10. **新增 `Dockerfile.pi`**
    - 为仓库根目录增加容器化构建入口，方便统一部署 pi 环境。
    - 已关闭，反映社区对容器化使用和可复现环境的需求。
    - [PR #12143](https://github.com/earendil-works/pi/pull/12143)

> 补充：另有同步类 PR [PR #12151](https://github.com/earendil-works/pi/pull/12151)、临时会话保存提案 [PR #12142](https://github.com/earendil-works/pi/pull/12142) 和主分支同步 [PR #12144](https://github.com/earendil-works/pi/pull/12144)。

## 功能需求趋势

1. **多提供商模型能力兼容**
   - 社区持续关注新模型接入后的工具调用、思考参数、推理 token、角色协议和重试行为，尤其涉及 Gemini、Mistral、Copilot、Vertex AI 与 Codex。

2. **流式请求稳定性**
   - timeout、断线重置、SSE/WS 生命周期、非重试 HTTP 错误误重试，以及长时间单轮连接，是 provider 适配层的高频主题。

3. **工具调用语义与执行顺序**
   - 社区希望明确同一 assistant 消息中多个工具调用的依赖关系，避免 Bash、Read 等操作发生竞态，并确保中止后仍生成完整的工具结果链。

4. **MCP 与企业配置能力**
   - 环境变量插值、连接持久化、取消后的流恢复，以及企业管理员启用模型的同步，都是实际部署中的关键需求。

5. **TUI 对大型输出的承载能力**
   - 超大 diff、长行 HTML、自渲染工具结果以及流式 Markdown 的全量重渲染，持续造成崩溃、卡顿和显示滞后。

6. **会话生命周期与状态一致性**
   - 工具中止、会话恢复/替换、主题切换、终端 resize、交互退出和认证锁等场景暴露出较多状态清理问题。

7. **可观测性与扩展 API**
   - 社区希望获得运行时实例 ID、状态端点、诊断信息，以及会话绑定的原子 completion enqueue-and-wake 能力。

8. **部署和跨平台体验**
   - Docker、llama.cpp 持久连接、Wayland 剪贴板、Windows 终端输入模式等需求，体现出社区对生产部署和桌面环境适配的关注。

## 开发者关注点

- **上下文与成本可预测性**：工具集合变化可能改变提示词头部并触发重新计费；开发者希望 token 消耗稳定、过程透明。
- **失败不能静默化**：中止后工具调用消失、无错误提示、取消后 MCP 仍恢复数据流，都是会话一致性与可调试性痛点。
- **网络瞬断应尽量自愈**：裸 socket 错误、Vertex 流挂起和 Codex 连接上限问题表明，重试、超时、连接重建必须形成统一策略。
- **新模型“可用”不等于“可稳定使用”**：模型能返回文本并不足够，工具调用、thinking 参数、图片输入和协议角色都需正确适配。
- **大型工作负载下 TUI 仍需保持响应**：大 diff 和高频流式输出会拖垮渲染线程；开发者关注增量渲染、输出裁剪与恢复能力。
- **企业配置需要一致解析**：MCP 变量展开、Copilot 模型目录刷新和认证文件并发锁，体现出生产环境对一致配置管理的明显需求。
- **跨平台细节仍较脆弱**：Windows 终端、Wayland、终端 resize 和交互退出后的残留进程，均是高频反馈的稳定性问题。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
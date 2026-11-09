# AI CLI 工具社区动态日报 2026-11-09

> 生成时间: 2026-11-09 05:38 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-09**  
**统计范围：各项目过去 24 小时更新的 Issues、Pull Requests 与 Releases**  
> 注：不同项目对 Issue/PR 的口径、更新范围及数据抓取完整度存在差异，表格适合用于观察相对活跃度，不宜直接等同于代码质量或市场规模。

## 1. 生态全景

当前 AI CLI 生态正从“模型调用与代码生成”转向“可持续运行的 Agent 工作平台”，会话生命周期、后台任务、工具调用、缓存计费、MCP 动态接入和跨平台稳定性成为共同主线。各主流项目过去 24 小时均无新版本发布，但代码修复和需求讨论仍高度活跃：Claude Code、Codex、Gemini CLI 和 OpenCode 更聚焦桌面端、MCP、多代理及任务编排；jcode 和 pi 则明显强化多 Provider、企业网关、远程终端与成本控制。Windows 成为故障治理的共同重点，涉及沙箱、路径转义、Shell、Computer Use、文件过滤器和系统资源泄漏。总体而言，竞争焦点已从单纯的 CLI 交互体验，转向**执行的可验证性、状态一致性、扩展可控性和企业级可运维性**。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues 数 | 今日 PR 数 | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个重点热点 | **0** | 无 | 讨论热度最高，但当日无代码更新；重点集中于隐私、Windows 性能、MCP 热更新和插件可靠性 |
| **OpenAI Codex** | 10 个重点热点 | **10 个重点进展** | 无 | 当日代码推进最明显，围绕 Cloud/TUI 会话恢复、任务检索和 MCP 启动可靠性 |
| **Gemini CLI** | 10 个重点热点 | 20 个热门 PR（展示其中 10 个） | 无 | PR 数量领先，重点修复 Agent 配置、凭据隔离、模型发现和跨平台兼容 |
| **GitHub Copilot CLI** | 10 个重点热点 | **0** | 无 | 以会话稳定性、Windows Shell、企业 MCP 权限和子代理模型预算为主 |
| **Kimi Code CLI** | 0 | 0 | 无 | 当日无活动，缺少可供观察的社区信号 |
| **OpenCode** | 10 个重点热点 | 10 个重点进展 | 无 | 迭代速度快，集中于套餐透明度、Desktop 稳定性、ACP、MCP OAuth 和后台任务 |
| **jcode** | **22** | **48** | 无 | Issue/PR 总量最高，明显处于高强度快速迭代；重点在 Provider 兼容、ACP、Key 池化和 CI 稳定性 |
| **pi** | 10 个重点热点 | 5 个重点进展 | 无 | 活跃且聚焦，核心是上下文计费、Provider 能力透传、MCP、提示词缓存和多模态支持 |

### 活跃度结论

- **按明确更新总量看**：jcode 最活跃，48 个 PR、22 个 Issue；Gemini CLI 次之，展示出 20 个热门 PR。
- **按重点代码修复看**：Codex、Gemini CLI、OpenCode、pi 均保持较高迭代强度。
- **按热点问题可见度看**：Claude Code、Codex、OpenCode 的社区关注面较广；OpenCode 的 Free tier Issue 达 **333 条评论、25 个赞**，是当日单问题中最显著的声量之一。
- **当日发布均为空**：市场处于“先修可靠性、再发版本”的阶段性特征，尚未形成以 Release 为中心的发布节奏。

---

## 3. 共同关注的功能方向

### 3.1 会话生命周期与状态一致性

多个工具都暴露了“创建、切换、关闭、恢复”之间的状态不一致：

- **Codex**：Cloud thread 恢复出现重复助手消息、陈旧断线、绝对路径反序列化错误。
- **Copilot CLI**：`create_session` 后扩展延迟加载；`close_session` 后无法恢复曾切换过的会话；ACK 超时后事件投递永久失效。
- **OpenCode**：会话缺少树状分支、回滚与继续能力；Agent 切换后仍残留 Plan 模式状态。
- **jcode**：Fork 会话丢失 Anthropic-compatible Provider Profile。
- **Claude Code**：本地、Project 与 Remote Control 会话的可见性不统一。

**共同诉求**：会话必须具备可预测的状态机，支持可靠恢复、分叉、回滚和跨端迁移；任何失败、重试或中断都不能产生虚假成功、重复消息或陈旧状态。

### 3.2 MCP、插件与工具体系的动态管理

- **Claude Code**：已加载 MCP 工具的描述和 Schema 无法热更新；大型 `ToolSearch` 使整个会话缓存失效。
- **Codex**：可选 HTTP MCP 的 OAuth discovery 阻塞会话创建；共享 app server 时 MCP 启动状态跟踪错误。
- **Gemini CLI**：工具数量过多触发 HTTP 400；MCP 凭据暴露风险引发安全修复和回滚。
- **Copilot CLI**：GHEC 数据驻留环境中 MCP registry 失败导致用户服务被静默丢弃。
- **OpenCode**：远程 MCP OAuth Token 刷新、Git 插件生命周期脚本、私有 CA 信任成为重点。
- **pi**：OAuth 后认证头未透传；direct MCP 工具无法被 `tool_search` 发现。

**共同诉求**：MCP 工具注册、认证、搜索索引、Schema 更新和失败反馈必须形成一致的闭环；扩展失败不能静默，更不能只在首次切换会话后才生效。

### 3.3 Agent 编排可靠性与可观测性

- **Claude Code**：Code Review 插件未运行审查代理却报告“未发现问题”；嵌套子代理存在提前返回、结果发往错误会话等竞态。
- **Gemini CLI**：子代理达到 `MAX_TURNS` 后仍被标记成功；generalist agent 可能永久卡死。
- **Copilot CLI**：未知子代理模型 ID 被套用默认 128k 预算，导致主会话卡死。
- **OpenCode**：后台 Shell 已退出但 UI 仍显示 Running；Claude progress-update thinking block 不可见。
- **jcode**：简单任务过度思考，错误恢复和回滚消耗大量额度。
- **pi**：网络重试后上下文占用从约 42K 突增至 **330,081 token**。

**共同诉求**：失败状态不得被“成功”覆盖；子代理必须有超时、重试、预算上限和明确终止原因；主会话应能观察委派过程、工具进度和子代理内部轨迹。

### 3.4 Windows、Shell 与终端兼容性

| 工具 | 具体问题 |
|---|---|
| Claude Code | 桌面端每秒启动约 **17 个 Git 进程**，AppData junction 与 CoworkVMService 引发内核非分页池泄漏 |
| Codex | Computer Use 无法获取 URL、沙箱锁失败、网络权限未生效、项目消失、云会话恢复失败 |
| Gemini CLI | Windows 家目录路径、TortoiseGitPlink 识别和原生 YAML 检查存在兼容问题 |
| Copilot CLI | 社区明确要求原生 Git Bash；Linux ARM64 16KB 页环境下随附 `ripgrep` 崩溃 |
| OpenCode | Windows 盘符、反斜杠和冒号被破坏；旧 CPU 因缺少 SSE4.2 无法启动 Desktop |
| jcode | Provider Header、WebSocket 压缩、进程组取消和 SSH 剪贴板存在协议级差异 |
| pi | mintty 快捷键、短粘贴标记和终端输入边界问题 |

**共同诉求**：Shell 选择应可配置，路径必须进行端到端无损传递；桌面端必须管理子进程、文件访问和锁资源；平台兼容不能仅依赖主流 Linux/macOS/新硬件测试。

### 3.5 额度、缓存与成本透明度

- **OpenCode**：Free tier 重置异常；Go 套餐实际跨模型共享限额，与文档不符。
- **pi**：网络重试导致上下文统计严重失真；提示词缓存预热据报告可减少约 **26% 的 p2 支出**。
- **jcode**：一次纠偏和回滚在十分钟内消耗五小时额度的一半。
- **Codex**：容量错误需要区分全局容量、账户 rollout、模型配置和本地服务异常。

**共同诉求**：配额规则、模型能力、Token 使用、重试成本和缓存收益必须准确可见；不可恢复的限额错误不应持续重试。

---

## 4. 差异化定位分析

| 工具 | 功能与目标侧重 | 目标用户 | 技术路线与生态策略 |
|---|---|---|---|
| **Claude Code** | 强模型编码、MCP、插件、子代理和桌面协作；当前重点是隐私边界与扩展可靠性 | 高端开发者、Claude 生态用户、企业开发者 | 终端优先并向 Desktop 扩展；MCP/插件与多代理并行发展，安全策略偏严格 |
| **OpenAI Codex** | Computer Use、Windows Desktop、Cloud/TUI 会话、审批与沙箱 | 桌面重度用户、OpenAI 订阅用户、远程开发团队 | CLI、TUI、桌面端和云线程协同；强调沙箱、审批和云端连续性 |
| **Gemini CLI** | Agent/Subagent、Skills、Browser Agent、MCP 及 Google 模型生态 | Gemini 用户、自动化工程师、跨平台开发者 | 集中式 Agent 配置与模型发现；快速扩张工具生态，安全护栏仍处追赶阶段 |
| **GitHub Copilot CLI** | GitHub 工作流、企业会话、扩展、企业 MCP 与网络授权 | GitHub 企业用户、平台工程师 | 依托 GitHub 托管身份、策略与扩展体系；当前会话生命周期和企业策略衔接不足 |
| **Kimi Code CLI** | 当前缺少当日信号，暂无法判断最新侧重 | 中文及国内模型生态用户 | 需观察后续 Release、Issue 与 PR 活跃度 |
| **OpenCode** | 多模型、ACP、插件、Desktop、后台任务和额度控制 | 多 Provider 用户、桌面 Agent 用户、IDE/终端集成开发者 | 开放协议与多 Provider 路线，ACP 和插件扩展性突出；Desktop/Bun 兼容是短板 |
| **jcode** | 多 Provider、企业网关、ACP、远程 SSH、会话分叉和 Key 池化 | 多模型路由、共享基础设施、远程开发及成本控制用户 | 路由层和协议适配导向明显，同时强化 Harness API、CLI 和 ACP 元数据 |
| **pi** | 轻量扩展、Provider 能力透传、MCP、长任务、多模态和缓存成本 | 高级用户、脚本化工作流、Provider 适配与成本优化开发者 | 强调可编程扩展和 provider-neutral 能力；围绕上下文、缓存和原始错误语义精细化 |

### 定位差异归纳

- **Claude Code** 偏“模型能力 + 插件生态”，但当前主要风险集中在桌面端资源治理和扩展热更新。
- **Codex** 偏“云端任务连续性 + 桌面执行环境”，跨端恢复和 Computer Use 是关键差异化能力。
- **Gemini CLI** 偏“Agent 原生编排”，开发速度较快，但失败状态、危险命令和子代理卡死仍需强化。
- **Copilot CLI** 偏“GitHub 企业分发”，身份与托管生态是优势，会话和企业策略耦合是短板。
- **OpenCode** 偏“开放、多模型和桌面控制”，功能扩张明显，但套餐状态和运行时兼容性影响信任。
- **jcode** 偏“模型网关与会话基础设施”，PR 数量显示其处于高速工程化阶段。
- **pi** 偏“精细化 Token 与 Provider 适配”，在缓存、上下文统计和错误保真方面具有较强开发者敏感度。

---

## 5. 社区热度与成熟度

### 社区热度

1. **OpenCode：单点热度最高**  
   Free tier 主 Issue 获得 **333 条评论、25 个赞**，直接反映额度问题对大量用户的阻塞。

2. **Claude Code：议题广度和严重度突出**  
   隐私 Issue 达 **110 条评论、748 个赞**；Windows 高频 Git 进程和内核泄漏则体现出桌面端影响面。

3. **Codex：Windows 与 Computer Use 讨论最集中**  
   浏览器 URL 问题有 **78 条评论**，Android Remote 配对失败有 **59 条评论、28 个赞**。

4. **Gemini CLI：Agent 故障形成稳定热点**  
   子代理虚假成功、generalist agent 卡死和 Browser Agent 配置问题均被列为 P1/P2。

5. **jcode：开发活动最密集**  
   虽非所有 Issue 都拥有大量评论，但 **48 个 PR、22 个 Issue** 表明其处于高频迭代期。

### 成熟度判断

| 阶段 | 工具 | 依据 |
|---|---|---|
| **相对成熟、进入稳定性治理期** | Claude Code、Codex | 功能面广、社区规模大；热点已从基础能力转向隐私、桌面端资源、会话恢复和策略一致性 |
| **快速迭代、扩展面加速扩张** | Gemini CLI、OpenCode | PR 密集，MCP、Agent、Desktop、ACP 等方向同时推进；稳定性和状态机尚未完全跟上功能扩张 |
| **工程化快速建设期** | jcode | Provider、ACP、Key 池化、CI 隔离并行推进；测试基础设施和跨 Provider 兼容仍在快速补齐 |
| **成熟度受长会话与扩展断点制约** | Copilot CLI | 产品边界清晰，但会话、扩展初始化、Shell 和企业 MCP 问题集中 |
| **精细化但存在关键可靠性缺口** | pi | 已深入缓存、上下文和多模态，但上下文统计、MCP 发现和 Provider schema 适配影响长任务可信度 |
| **信号不足** | Kimi Code CLI | 当日无活动，无法据此评估成熟度或热度 |

---

## 6. 值得关注的趋势信号

### 信号一：Agent 可信度正在取代“能完成任务”成为首要指标

多个项目的核心缺陷都不是普通 UI 问题，而是**错误状态被包装为成功**：

- Claude Code 审查代理未运行，却报告“No issues found”；
- Gemini CLI 达到 `MAX_TURNS` 仍标记成功；
- OpenCode 后台进程退出后仍显示 Running。

这意味着下一阶段竞争将围绕可审计执行记录、明确终态和可验证的工具结果展开，而非仅比较模型基准。

### 信号二：Windows 已成为 Agent CLI 的共同质量洼地

高频 Git 子进程、内核池泄漏、沙箱锁失败、Windows 路径损坏、旧 CPU 指令集不兼容等问题同时出现。Windows 问题的根源通常不在模型层，而在：

- 子进程与锁生命周期管理；
- 文件系统过滤器和 junction 访问；
- Shell 与路径参数传递；
- Desktop 运行时及安装更新流程。

**决策建议**：企业选型时应把 Windows 长时间运行、升级回滚、休眠恢复、杀进程和资源回收纳入正式验收矩阵。

### 信号三：MCP 已从“能连接”进入“生命周期治理”阶段

MCP 的核心矛盾已从安装和调用，转向：

- OAuth Token 轮换；
- 企业私有 CA；
- Schema 热更新；
- 大工具集的搜索与缓存；
- 扩展加载失败；
- 凭据隔离与权限透传。

插件或 MCP 数量越多，目录、索引、认证和会话状态的一致性越难维护。企业部署应避免仅验证“服务列表可见”，而应测试**变更、失败、重启、恢复和权限降级**。

### 信号四：多 Provider 生态需要协议级兼容矩阵

jcode 的 Bedrock Header、WebSocket 压缩和 Provider Profile 问题，以及 pi 的 Kimi `anyOf`、OpenRouter finish reason 丢失，说明“OpenAI-compatible”或“Anthropic-compatible”已不足以保证兼容。关键差异包括：

- Header 与 beta capability；
- 工具 Schema；
- 流式结束原因；
- 推理档位；
- 缓存能力；
- 服务层级和错误语义。

**参考价值**：自建 Agent 平台应按真实服务商建立协议契约测试，而不能只依赖统一适配层。

### 信号五：Token 与配额透明度将直接影响采购和迁移决策

上下文统计失真、跨模型共享额度、错误重试消耗预算、缓存预热节省 26% 支出等案例说明，成本控制必须从请求日志上移到产品层。未来用户会要求：

- 实时显示上下文与缓存命中；
- 区分重试前后的真实消耗；
- 展示模型、Provider、服务层级和预算；
- 对不可恢复的限额错误快速停止；
- 为 Agent 和子代理设置独立预算上限。

### 信号六：会话将从线性日志升级为可分支的工程工作记录

OpenCode 的树状历史、jcode 的 Fork、Codex 的 Cloud thread 恢复，以及 Claude Code 的多会话统一，都指向同一方向：会话将成为可回滚、可分叉、可迁移、可审计的工程状态容器。团队应提前设计稳定的 Session ID、Provider Profile、工具版本和执行轨迹数据模型，避免将它们仅作为 UI 临时状态。

### 信号七：终端与桌面体验的竞争维度正在扩大

TUI 工具输出折叠、OSC 7501 Agent 状态、ANSI/Unicode 保留、mintty 快捷键、Git Bash、Windows 路径和旧 CPU 兼容，说明“CLI 效率”已不只是文本生成质量，也包括终端集成、后台任务、桌面应用和 IDE/ACP 接入能力。

---

## 技术决策建议

1. **短期试点优先选择会话与 Agent 状态最可信的工具**，不要只依据模型效果或单次任务成功率。
2. **对 MCP/插件密集型场景**，先验证热更新、OAuth 轮换、凭据隔离、失败提示和恢复能力。
3. **Windows 开发团队应优先做压力测试**，覆盖 Desktop 长时间运行、仓库扫描、休眠恢复、并发子代理和进程强制终止。
4. **多模型部署必须维护 Provider 契约测试**，至少覆盖工具 Schema、Header、流式终止原因、缓存和错误分类。
5. **建立成本护栏**：限制最大轮次、子代理并发数、重试次数与单任务预算，并确保异常或限额错误不会被重试或伪装成成功。
6. **企业场景优先选择可观测、可审计的工具**，对“无实际执行却报告成功”“失败后静默禁用扩展”等行为建立阻断性验收项。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截至：2026-11-09**

> 说明：所给 PR 数据中的评论数均为 `undefined`、点赞均为 0，因此无法严格按“评论数”衡量 PR 热度。以下排行综合 PR 持续时间、更新频率、Issue 关联度、功能影响和社区关注信号排序；所有列出的 PR 当前均为 **Open**。

## 1. 热门 Skills 排行

### 1. mcp-builder：适配 MCP 2.x 与 Streamable HTTP
- **PR**：[ #1742 — support mcp>=2 streamable_http_client and custom headers](https://github.com/anthropics/skills/pull/1742)
- **功能**：适配 MCP SDK 2.x 中客户端重命名与 HTTP Header 配置方式的变化。
- **讨论热点**：MCP SDK 升级兼容、Streamable HTTP、自定义请求头，以及对现有连接脚本的兼容性。
- **状态**：**Open**
- **判断**：这是列表中与真实兼容性故障关联最明确的 PR，社区影响面较大。

### 2. skill-creator：修复触发评测与并行执行问题
- **PR**：[ #1298 — isolate trigger evals and handle Windows and runtime failures](https://github.com/anthropics/skills/pull/1298)
- **功能**：隔离触发评测任务，修复 Windows 下 `select()`、并行任务相互干扰以及运行失败被误判为“非触发”等问题。
- **讨论热点**：触发率准确性、跨平台支持、负例判定和评测结果可信度。
- **状态**：**Open**
- **关联 Issue**：
  - [#556 — run_eval.py 触发率为 0%](https://github.com/anthropics/skills/issues/556)
  - [#1352 — 并行 worker 交叉匹配 UUID](https://github.com/anthropics/skills/issues/1352)

### 3. skill-creator：修复 YAML Frontmatter 解析
- **PR**：[ #1997 — parse YAML frontmatter scalars correctly](https://github.com/anthropics/skills/pull/1997)
- **功能**：正确处理 YAML 标量、引号和续行，避免评测及描述优化阶段读取到与原文件不同的元数据。
- **讨论热点**：Skill 描述是触发效果的核心变量，解析偏差会直接导致错误评测和错误优化。
- **状态**：**Open**
- **判断**：属于 Skill 开发基础设施的高优先级修复，影响所有依赖 `SKILL.md` 元数据的流程。

### 4. webapp-testing：强化服务器启动与元素发现
- **PR**：[ #1980 — avoid shell=True in with_server.py](https://github.com/anthropics/skills/pull/1980)
- **功能**：避免通过 `shell=True` 执行用户提供的启动命令，以降低命令注入风险。
- **讨论热点**：Web 应用自动化测试中的命令执行安全、服务器进程管理和输入边界。
- **状态**：**Open**
- **关联 PR**：[ #1976 — 正确报告 textarea 与 select 元素](https://github.com/anthropics/skills/pull/1976)

### 5. docx：可靠检测修订并防止超时误报
- **PR**：[ #1792 — report LibreOffice timeout as an error and verify the output](https://github.com/anthropics/skills/pull/1792)
- **功能**：LibreOffice 超时不再被当作成功；输出前检查 DOCX XML 是否仍包含修订标记。
- **讨论热点**：文档编辑是否真正生效、超时处理、输出验证和“假成功”问题。
- **状态**：**Open**
- **关联 PR**：[ #1734 — Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734)

### 6. xlsx：识别工作表级 Defined Names 与外部链接风险
- **PR**：[ #2019 — resolve worksheet-scoped defined names and aliases in external_links_at_risk](https://github.com/anthropics/skills/pull/2019)
- **功能**：扩展重算脚本对工作表级 Defined Names、别名及间接外部引用的检查，避免漏报风险。
- **讨论热点**：Excel 公式安全、外部链接审计、命名空间差异及误报/漏报平衡。
- **状态**：**Open**
- **关联 Issue**：[ #2013](https://github.com/anthropics/skills/issues/2013)

### 7. notion-spec-to-implementation + quantitative-resume-auditor
- **PR**：[ #1245 — Add notion-spec-to-implementation and quantitative-resume-auditor skills](https://github.com/anthropics/skills/pull/1245)
- **功能**：
  - 将 Notion 产品或技术规格拆解为可执行任务、验收标准及进度跟踪；
  - 对简历中的量化成果进行审计与验证。
- **讨论热点**：从规格到执行的自动化链路、Notion 工作流集成、量化简历真实性。
- **状态**：**Open**
- **判断**：代表社区从单点工具 Skill 向“端到端业务工作流 Skill”演进的趋势。

### 8. md2video-audio：Markdown 转视频与配音
- **PR**：[ #1703 — Add md2video-audio skill](https://github.com/anthropics/skills/pull/1703)
- **功能**：通过 Marp 等工具将 Markdown 转换为演示幻灯片，再生成 MP4 视频及类人语音旁白。
- **讨论热点**：低成本内容生产、自动演示、视频生成质量、语音自然度及工具链稳定性。
- **状态**：**Open**

---

## 2. 社区需求趋势

### 2.1 企业级共享与统一分发
社区希望 Skill 能像企业插件一样集中管理、跨成员共享，而不是通过 Slack/Teams 手工传 `.skill` 文件。

- [#228 — Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)
- [#62 — Skills 消失及安装错误](https://github.com/anthropics/skills/issues/62)
- [#189 — document-skills 与 example-skills 重复安装](https://github.com/anthropics/skills/issues/189)

**趋势判断**：需求已从“个人拥有 Skill”转向“组织级 Skill 目录、版本控制、安装状态和去重”。

### 2.2 代码审查、测试生成与交付质量门禁
最突出的方向是建立贯穿任务全周期的质量验证机制：

- 预执行校准；
- 对抗式审查；
- 交付前自动验证；
- 智能合约静态分析与审计证明；
- Web 应用自动化测试；
- 文档、表格和演示文件的输出校验。

相关提案：
- [#1385 — Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)
- [#1771 — proofcore-contract-auditor PR](https://github.com/anthropics/skills/pull/1771)
- [#1980 — webapp-testing 安全修复 PR](https://github.com/anthropics/skills/pull/1980)

**趋势判断**：社区期待的不再只是“生成结果”，而是“自动证明结果正确”。

### 2.3 Agent 记忆、治理与长期状态管理
社区希望引入紧凑、结构化的长期记忆，以及治理、威胁检测、信任评分和审计轨迹。

- [#1329 — compact-memory](https://github.com/anthropics/skills/issues/1329)
- [#412 — agent-governance](https://github.com/anthropics/skills/issues/412)

**趋势判断**：Skills 正从提示词模板向 Agent 的状态管理、策略执行和治理层扩展。

### 2.4 文档与办公产物质量控制
需求重点包括：

- 排版质量控制；
- DOCX 修订、批注和 XML 有效性；
- PDF 大小写路径兼容；
- PPTX 参数校验；
- XLSX 外部链接风险识别；
- Slack GIF 渐变生成准确性。

相关条目：
- [#514 — document-typography PR](https://github.com/anthropics/skills/pull/514)
- [#2018 — docx merge_runs 产生无效 XML](https://github.com/anthropics/skills/issues/2018)
- [#1868 — gradient bottom_color 计算错误](https://github.com/anthropics/skills/issues/1868)

**趋势判断**：用户对办公文档 Skill 的期待已从“能生成”升级为“输出必须可靠、可验证”。

### 2.5 上下文效率与 Skill 触发设计
`claude-api` Skill 被报告一次工具调用可能注入约 156K tokens；与此同时，`theme-factory` 被指出描述只说明“能做什么”，却没有充分说明“何时使用”。

- [#1487 — claude-api context exhaustion](https://github.com/anthropics/skills/issues/1487)
- [#2064 — theme-factory 缺少触发条件](https://github.com/anthropics/skills/issues/2064)
- [#202 — skill-creator 应升级为最佳实践](https://github.com/anthropics/skills/issues/202)

**趋势判断**：渐进式加载、精确触发描述和更少 token 消耗，正在成为 Skill 设计的核心指标。

### 2.6 安全、信任边界与官方身份
最高热度 Issue 聚焦社区 Skill 被放入 `anthropic/` 命名空间，可能使用户误以为是官方 Skill 并授予更高权限。

- [#492 — Community skills enable trust boundary abuse](https://github.com/anthropics/skills/issues/492)

**趋势判断**：Skill 的来源认证、命名空间隔离、权限声明和安装提示，将成为生态可信度的基础设施。

---

## 3. 高潜力待合并 Skills

| 优先级 | Skill / PR | 潜力依据 | 状态 |
|---|---|---|---|
| 高 | [mcp-builder #1742](https://github.com/anthropics/skills/pull/1742) | 解决 MCP 2.x 的破坏性 API 变化，直接影响 MCP Skill 的可用性 | Open |
| 高 | [skill-creator 触发评测修复 #1298](https://github.com/anthropics/skills/pull/1298) | 同时对应两个高热度 Issue，修复影响 Skill 开发与质量评估 | Open |
| 高 | [skill-creator YAML 解析 #1997](https://github.com/anthropics/skills/pull/1997) | 位于元数据解析基础路径，修复后可降低评测和描述优化误差 | Open |
| 高 | [webapp-testing 命令注入修复 #1980](https://github.com/anthropics/skills/pull/1980) | 安全价值明确，涉及 Agent 执行外部命令的典型攻击面 | Open |
| 中高 | [docx 输出验证 #1792](https://github.com/anthropics/skills/pull/1792) | 防止“超时仍报告成功”，强化办公文档 Skill 的可信度 | Open |
| 中高 | [xlsx 外部链接检查 #2019](https://github.com/anthropics/skills/pull/2019) | 修复实际漏报，适合企业财务、报表及安全审计场景 | Open |
| 中 | [notion-spec-to-implementation / quantitative-resume-auditor #1245](https://github.com/anthropics/skills/pull/1245) | 两个方向均体现强业务闭环，一个偏工程执行，一个偏可信内容审计 | Open |
| 中 | [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703) | 多模态内容生产需求明确，具备较强传播性和演示效果 | Open |
| 中 | [SCNet HPC #1615](https://github.com/anthropics/skills/pull/1615) | 面向科研计算场景，专业用户价值明确，但受众相对垂直 | Open |

补充观察：部分长期开放且影响面较大的 PR，如 [document-typography #514](https://github.com/anthropics/skills/pull/514)、[Pyxel #525](https://github.com/anthropics/skills/pull/525) 和 [PDF 路径修复 #538](https://github.com/anthropics/skills/pull/538)，也值得跟进；不过其时间跨度较长，可能需要重新确认维护意愿或收敛实现范围。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是让 Skills 从“能生成内容的提示词模板”升级为可共享、可验证、可治理且安全的端到端执行系统。**

具体表现为四条主线：

1. **组织级共享与统一管理**；
2. **代码、测试、文档等产物的自动质量门禁**；
3. **Skill 触发、上下文消耗和评测机制的工程化**；
4. **来源认证、权限隔离和命令执行安全**。

> **一句话概括**：社区当前不只是要求“更多 Skill”，而是在要求现有 Skill 更可靠、更易分发、更节省上下文，并具备生产级安全与审计能力。

---

# Claude Code 社区动态日报｜2026-11-09

## 今日速览

- 过去 24 小时没有新版本发布或 Pull Request 更新；今日讨论主要集中于既有问题的复现、隐私安全、Windows 桌面端性能，以及 MCP、插件和代理工作流稳定性。
- 最受关注的问题是 **User-Agent 泄露用户邮箱**：Issue 已积累 110 条评论和 748 个赞，显示隐私保护已成为社区首要诉求。
- Windows 桌面端出现高频 `git.exe` 进程、内核内存池持续增长等系统性性能问题；与此同时，MCP 工具热更新、嵌套子代理和插件审查失效也暴露出扩展生态的可靠性缺口。

---

## 社区热点 Issues

### 1. User-Agent 请求头泄露用户邮箱
- **Issue**：[ #107757 — Privacy violation in User-Agent header ](https://github.com/anthropics/claude-code/issues/107757)
- 用户称 Claude Code 在执行网络搜索时，将邮箱写入 `User-Agent` 并发送给第三方服务，可能导致垃圾邮件激增。
- 该问题要求彻底移除敏感信息，而不是提供 opt-in/opt-out 配置。
- **社区反应**：110 条评论、748 个赞，是今日讨论度和认可度最高的问题，直接涉及用户隐私与默认数据披露边界。

### 2. Windows 桌面端每秒持续启动约 17 个 Git 进程
- **Issue**：[ #94478 — Desktop app spawns ~17 git processes per second continuously ](https://github.com/anthropics/claude-code/issues/94478)
- 报告称桌面应用会持续启动 `git.exe` 和 `conhost.exe`，每天可能产生约 200 万个短生命周期进程，并放大 Windows 内核池泄漏。
- 这不仅是 CPU 和进程调度问题，也可能进一步导致系统资源每天增长约 6 GB。
- **社区反应**：已有 15 条评论，问题获得明确复现；建议重点检查桌面端 Git 状态轮询、仓库扫描与子进程回收机制。

### 3. Windows 进程访问 AppData junction 时泄漏内核非分页池
- **Issue**：[ #96870 — MSIX Desktop leaks kernel nonpaged pool through AppData junction paths ](https://github.com/anthropics/claude-code/issues/96870)
- 报告指出，每个访问 AppData 下 junction 路径的进程都可能触发 `bindflt.sys`/`NtFC` 相关的非分页池泄漏。
- 该问题与 MSIX Desktop 的文件访问方式相关，可能影响长时间运行的桌面会话。
- **社区反应**：12 条评论、4 个赞；与 Git 进程和 CoworkVMService 泄漏问题相互关联，暗示 Windows 桌面端可能存在共同的文件系统访问根因。

### 4. CoworkVMService 的非分页池内存持续泄漏
- **Issue**：[ #94198 — CoworkVMService non-paged pool leak ](https://github.com/anthropics/claude-code/issues/94198)
- `CoworkVMService` 在运行期间持续占用内核非分页池；重启可以暂时清除，但关机无法解决。
- 泄漏与 `NtFC`/`ntfs.sys` 有关，严重影响 Windows 桌面端长时间运行稳定性。
- **社区反应**：8 条评论、2 个赞。社区建议将其与 #96870 合并调查，以识别共同的文件系统过滤器触发路径。

### 5. 已加载 MCP 工具的描述和 Schema 无法热更新
- **Issue**：[ #97369 — Changed MCP tool description never reaches an existing session ](https://github.com/anthropics/claude-code/issues/97369)
- deferred MCP 工具首次加载后，即使修改其描述或输入 Schema，`/mcp reconnect`、禁用再启用、甚至恢复会话，模型仍可能使用旧定义。
- 原因是 `deferred_tools_record` 被回放，旧工具状态持续覆盖新配置。
- **社区反应**：8 条评论。该问题直接影响 MCP 驱动的动态工具开发与生产环境热更新，属于插件生态的关键阻塞点。

### 6. 大型 MCP ToolSearch 批次导致整个会话缓存失效
- **Issue**：[ #83756 — Large MCP ToolSearch batches invalidate the whole conversation cache ](https://github.com/anthropics/claude-code/issues/83756)
- 大批量调用 `ToolSearch` 会使整段对话缓存失效，与文档承诺的工具搜索缓存保证相冲突。
- 其影响包括额外 API 成本、更高延迟，以及多轮 agent 工作流的上下文效率下降。
- **社区反应**：5 条评论、3 个赞。社区关注点集中在缓存键粒度、工具索引更新策略和文档行为的一致性。

### 7. 安全分类器误拦截合法医疗文档工作
- **Issue**：[ #100212 — Safety classifier withholds responses during legitimate healthcare documentation ](https://github.com/anthropics/claude-code/issues/100212)
- 报告称 Claude 在合法的医疗记录整理场景中错误地拒绝响应。
- 此类误报不仅影响可用性，也会降低开发者对关键行业自动化的信任。
- **社区反应**：11 条评论、1 个赞。问题凸显安全策略需要更细粒度的上下文判断，以及针对专业工作流的误报处理机制。

### 8. Naver 域名被默认安全限制整体拦截
- **Issue**：[ #95539 — All naver.com domains blocked by default safety restrictions ](https://github.com/anthropics/claude-code/issues/95539)
- 默认安全分类规则将韩国主要门户 Naver 整体判定为不安全，而 Daum、Tistory 等站点未被拦截。
- 这说明域名或内容分类规则可能存在粒度过粗、误判范围过大的问题。
- **社区反应**：10 条评论、11 个赞。社区希望官方区分成人内容、盗版站点和普通信息门户，并提供可审查、可申诉的拦截机制。

### 9. Opus 5.5 的 `reasoning_extraction` 拒绝读取用户自己的笔记文件
- **Issue**：[ #108048 — Opus 5.5 reasoning_extraction refuses Read of user's notes file ](https://github.com/anthropics/claude-code/issues/108048)
- 在 Claude Code 2.1.316–2.1.319 上，Opus 5.5 会在读取特定本地 Markdown 文件时触发拒绝；问题可缩小到约 30 行代码块，并受用户级规则文件影响。
- 该问题同时涉及模型行为、权限规则和本地文件读取链路。
- **社区反应**：目前 4 条评论，但因复现版本清晰、影响范围明确，具备较高的诊断价值。

### 10. Code Review 插件跳过审查代理，却仍报告“未发现问题”
- **Issue**：[ #100401 — code-review plugin skips review agents but reports success ](https://github.com/anthropics/claude-code/issues/100401)
- 自 Claude Code 2.1.285 及 Sonnet 5.5 环境起，插件可能完全没有运行审查代理，却输出类似“No issues found”的成功提示。
- 这会造成严重的假阴性：开发者可能误以为代码已通过自动审查。
- **社区反应**：2 条评论。问题虽然讨论量不高，但涉及自动化结果可信度，优先级应高于一般 UI 缺陷。

---

## 重要 PR 进展

过去 24 小时内更新的 Pull Request 数量为 **0**，因此暂无重要 PR 进展可汇总。

---

## 功能需求趋势

### 1. 隐私与安全默认策略
- 禁止在 `User-Agent`、工具请求或其他元数据中携带邮箱等个人信息。
- 安全分类器需要减少合法业务和普通网站的误拦截。
- 用户期望能够审查、申诉并控制被阻止的域名或请求。

相关 Issue：
- [#107757](https://github.com/anthropics/claude-code/issues/107757)
- [#100212](https://github.com/anthropics/claude-code/issues/100212)
- [#95539](https://github.com/anthropics/claude-code/issues/95539)
- [#103567](https://github.com/anthropics/claude-code/issues/103567)

### 2. Windows 桌面端性能与稳定性
社区集中反馈了高频 Git 子进程、CPU 降频、内核非分页池泄漏、后台任务面板冻结、语音输入失效等问题。

相关 Issue：
- [#94478](https://github.com/anthropics/claude-code/issues/94478)
- [#96870](https://github.com/claude-code/issues/96870)
- [#94198](https://github.com/anthropics/claude-code/issues/94198)
- [#108418](https://github.com/anthropics/claude-code/issues/108418)
- [#104863](https://github.com/anthropics/claude-code/issues/104863)
- [#104003](https://github.com/nope)

> 链接更正：语音输入问题为 [#104003](https://github.com/anthropics/claude-code/issues/104003)。

### 3. MCP 工具动态更新与缓存效率
社区希望 MCP 工具描述、输入 Schema 和工具集合变更能够可靠地进入已存在的会话，同时避免大型 `ToolSearch` 破坏整体会话缓存。

相关 Issue：
- [#97369](https://github.com/anthropics/claude-code/issues/97369)
- [#83756](https://github.com/anthropics/claude-code/issues/83756)

### 4. 桌面端会话、通知和插件 UI
开发者希望统一 Project thread、本地会话与 Remote Control 会话的可见性，并获得更可靠的跨会话通知和进度展示。

相关 Issue：
- [#107080](https://github.com/anthropics/claude-code/issues/107080)
- [#108512](https://github.com/anthropics/claude-code/issues/108512)
- [#108516](https://github.com/anthropics/claude-code/issues/108516)
- [#91248](https://github.com/anthropics/claude-code/issues/91248)

### 5. 本地化、终端兼容与输入保真
需求包括斜杠命令菜单本地化、日语会话中的思考摘要语言稳定性、Windows Git Bash 长命令完整性，以及粘贴包含图片路径的终端输出时保持纯文本。

相关 Issue：
- [#102820](https://github.com/anthropics/claude-code/issues/102820)
- [#106525](https://github.com/anthropics/claude-code/issues/106525)
- [#93618](https://github.com/anthropics/claude-code/issues/93618)
- [#108517](https://github.com/anthropics/claude-code/issues/108517)
- [#108494](https://github.com/anthropics/claude-code/issues/108494)

### 6. Agent 与子代理工作流可靠性
嵌套代理的生命周期、后台 Bash 等待和结果回传路径仍存在竞态或归属错误，直接影响多代理自动化的可靠性。

相关 Issue：
- [#108513](https://github.com/anthropics/claude-code/issues/108513)
- [#108516](https://github.com/anthropics/claude-code/issues/108516)
- [#108265](https://github.com/anthropics/claude-code/issues/108265)

---

## 开发者关注点

1. **隐私不能依赖用户主动配置**  
   开发者倾向于要求敏感标识从请求中彻底移除，尤其不接受仅提供 opt-in/opt-out 的处理方式。

2. **桌面端资源治理是 Windows 用户当前最迫切的问题**  
   高频 Git 进程、内核池泄漏和 CPU 降频相互关联，团队应从子进程轮询频率、文件路径访问和长期运行资源回收三个层面联合排查。

3. **MCP 配置变更必须具备热更新语义**  
   工具描述、Schema 和连接状态变化后，已存在会话也必须获取最新定义，否则插件调试与生产变更都容易产生隐蔽错误。

4. **自动化工具不能产生虚假成功结果**  
   Code Review 插件未运行代理却报告“未发现问题”，比直接报错更危险。类似工具应提供可验证的执行状态和明确的 skipped/failed 区分。

5. **多代理系统需要清晰的生命周期和结果路由**  
   嵌套子代理提前返回、报告发往错误会话、后台工具长时间不返回，均说明任务等待与结果归属仍需更强的确定性。

6. **CLI 与桌面端在 Windows、macOS、Linux 上表现不一致**  
   长命令截断、tmux 图片为空、shell 参数被改写、语言输出串线等问题，表明跨平台输入输出链路仍需系统化测试。

7. **UI 改进重点是信息密度与可配置性**  
   宽屏聊天面板空白、通知缺少“应用已聚焦时也提醒”的选项，以及 Project thread 不出现在侧边栏，均指向桌面端会话管理体验尚未统一。

8. **希望减少 transcript 的冗余存储**  
   `api-request` 在每次请求中重复记录 auto mode classifier context，可能造成大量无效磁盘占用；开发者更关注去重、可复现性和存储成本之间的平衡。

相关 Issue：[ #103567 — Transcript api-request records repeat classifier context ](https://github.com/anthropics/claude-code/issues/103567)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报｜2026-11-09

## 今日速览

过去 24 小时没有新的版本发布。社区讨论主要集中在 **Windows 桌面端稳定性**、**Computer Use 与沙箱执行异常**、**模型容量报错**以及**云端会话恢复**，其中多条 Windows Computer Use 与审批策略问题的评论数较高。

代码侧集中推进 Cloud/TUI 会话可靠性、任务历史检索和 MCP 启动流程改进；其中多数 PR 已在当天关闭，显示相关修复正在快速合入或迭代。

---

## 社区热点 Issues

### 1. Windows Computer Use 无法获取浏览器 URL
- **Issue**：[#51524](https://github.com/openai/codex/issues/51524)
- Chrome、Edge 的窗口枚举正常，但 `sky.get_window_state()` 无法确定当前 URL，并在点击或输入前终止任务。
- 这是 Computer Use 在 Windows 上影响较大的核心回归之一；已有 **78 条评论、9 个赞**，是当日讨论最活跃的问题。

### 2. Codex Remote 在 Android 上配对失败
- **Issue**：[#48774](https://github.com/openai/codex/issues/48774)
- Windows 桌面端已启用连接权限，但手机扫描新二维码并完成授权后仍无法建立 Remote 连接。
- 问题横跨移动端、桌面端和认证流程，获得 **59 条评论、28 个赞**，社区关注度很高。

### 3. TUI 缺少隐藏工具调用和输出的方式
- **Issue**：[#18396](https://github.com/openai/codex/issues/18396)
- 用户希望折叠或隐藏工具调用、命令输出，减少长会话中的界面噪声。
- 该需求获得 **23 条评论、59 个赞**，是 TUI 可读性与上下文管理的典型高需求项。

### 4. Codex 更新后 Windows 项目消失
- **Issue**：[#58397](https://github.com/openai/codex/issues/58397)
- Windows 11 用户升级 Codex App 后，本地项目列表无法正常显示。
- 涉及版本升级后的数据可见性和工作区管理，已有 **22 条评论**，对桌面用户影响直接。

### 5. Windows 无法恢复云端托管聊天
- **Issue**：[#59855](https://github.com/openai/codex/issues/59855)
- 从侧边栏重新打开云端会话时出现 `AbsolutePathBuf deserialized without a base path`。
- 这与近期 PR 对 Cloud 会话恢复、重复消息和流断开处理的集中修复相呼应，已有 **15 条评论**。

### 6. Windows Desktop 已启用网络访问，但仍应用 `networkAccess=false`
- **Issue**：[#53278](https://github.com/openai/codex/issues/53278)
- 配置中的网络权限与实际沙箱行为不一致，导致依赖网络的命令无法正常运行。
- 属于权限配置语义和执行层行为不一致的问题，已有 **10 条评论、1 个赞**。

### 7. Windows 沙箱锁失败导致 Computer Use 超时
- **Issue**：[#60192](https://github.com/openai/codex/issues/60192)
- 在 Windows Desktop 26.1103.32239 中，Computer Use 超时，同时 shell 调用被 `helper_sandbox_lock_failed` 阻断。
- 问题同时涉及 Computer Use、辅助进程和沙箱锁，发布较新但已有 **6 条评论**，值得重点跟踪。

### 8. Windows 授权写入仍被策略拒绝
- **Issue**：[#60171](https://github.com/openai/codex/issues/60171)
- 已明确授权的本地应用状态准备命令，在进程创建前被 `blocked by policy` 拒绝。
- 拒绝信息没有给出可操作的策略原因或替代审查路径，已有 **5 条评论**。

### 9. Windows Desktop 升级后模型持续提示容量不足
- **Issue**：[#59347](https://github.com/openai/codex/issues/59347)
- Windows Desktop 与 CLI 均间歇性出现 `Selected model is at capacity`，甚至简单本地命令也会失败。
- 多条容量类报告的共同主题之一，已有 **5 条评论**，反映服务可用性与问题定位仍是用户痛点。

### 10. macOS Computer Use 遗留 ScreenCaptureKit 推流
- **Issue**：[#35659](https://github.com/openai/codex/issues/35659)
- 会话结束后仍维持约 55–56 FPS 的屏幕采集流，造成 WindowServer CPU 和 GPU 占用显著升高。
- 该问题直接涉及资源回收与长期运行性能，已有 **9 条评论**，对桌面端稳定性影响较大。

---

## 重要 PR 进展

### 1. 将目标描述视为不可信上下文
- **PR**：[#60342](https://github.com/openai/codex/pull/60342)
- 不再把目标描述直接嵌入续跑指令，而是通过独立的 `goal_objective` 上下文传递；缺失或截断时引导模型调用 `get_goal`。
- 有助于降低目标文本对控制指令的干扰，并改善续跑可靠性。

### 2. 避免恢复 Cloud 线程时重复显示助手消息
- **PR**：[#60335](https://github.com/openai/codex/pull/60335)
- 在 TUI 回放 Cloud 历史时，按 turn 和 item 跟踪已渲染的助手消息，避免通知再次展示相同文本。
- 直接改善云端会话恢复后的内容一致性。

### 3. 抑制重新打开线程后的陈旧流断开错误
- **PR**：[#60327](https://github.com/openai/codex/pull/60327)
- 将 Cloud 回复流丢失拆分为更明确的事件状态，避免旧连接断开事件覆盖成功重连后的状态。
- 可减少“会话已恢复但仍提示断线”的误报。

### 4. 在完整历史中纳入较早的无 item Cloud 失败
- **PR**：[#60320](https://github.com/openai/codex/pull/60320)
- 通过 `FullTranscript` hydration 加载剩余历史，补齐只有错误、没有消息 item 的旧 Cloud turn。
- 提升历史记录的完整性，便于用户回溯早期失败。

### 5. 改进 TUI 的 side-chat 发现与导航
- **PR**：[#60319](https://github.com/openai/codex/pull/60319)
- 在已保存的 side-chat 标题下展示最近用户提示预览，并加入加载、刷新状态及缓存会话保留机制。
- 让多任务、多分支工作流更易于发现和管理。

### 6. 预热选中项目时延后 executor 就绪
- **PR**：[#60309](https://github.com/openai/codex/pull/60309)
- 对带项目选择的 Cloud thread 预热请求设置 `deferred_environment=true`，默认线程预热则不添加该字段。
- 可避免项目环境准备过早阻塞主流程。

### 7. 从 Command Center 搜索任务历史
- **PR**：[#60286](https://github.com/openai/codex/pull/60286)
- 搜索不再局限于已经加载的任务，而会扫描活动后端中的历史任务名称和提示内容。
- 解决旧任务难以发现、需要反复加载更多记录的问题。

### 8. 修复连接共享 app server 时的 MCP 启动跟踪
- **PR**：[#60280](https://github.com/openai/codex/pull/60280)
- 共享 app server 场景下只跟踪本地配置服务器的启动状态，避免等待不存在的本地 MCP 配置。
- 可降低 TUI 卡在忙碌状态、遗漏启动通知的风险。

### 9. 将 MCP OAuth discovery 延后到启动失败时
- **PR**：[#31045](https://github.com/openai/codex/pull/31045)
- 把依赖网络的 MCP OAuth discovery 从 session 初始化阶段移出，仅在启动失败时触发。
- 目标是避免不可用的可选 HTTP MCP 服务拖慢 Codex Desktop 创建本地聊天；该 PR 仍为开放状态。

### 10. CLI 模型不在 ChatGPT 模型列表中时显示警告
- **PR**：[#60270](https://github.com/openai/codex/pull/60270)
- 当 OpenAI provider 下的 CLI 模型覆盖项未出现在 ChatGPT 模型列表中时，启动阶段给出提示。
- 帮助用户识别模型名称拼写错误或账户模式不匹配。

---

## 功能需求趋势

### 1. Computer Use 的跨平台可靠性
Windows 与 macOS 问题集中于浏览器状态读取、屏幕唤醒后的锁屏、采集流未释放和沙箱超时。社区期待的不只是临时绕过，而是跨版本稳定、可诊断且资源可回收的实现。

### 2. Windows 桌面端质量与权限模型
项目消失、云会话恢复失败、网络权限未生效、Full Access 仍被策略阻止、审批模式中途变化等问题，显示 Windows 版本的沙箱、审批和本地状态管理仍需系统性梳理。

### 3. 模型容量与账户可用性
多个 Issue 报告 `Selected model is at capacity`，且影响 Pro、Pro 20x、Plus 账户，以及 Desktop、CLI 和图像生成。用户希望错误信息能区分真实容量不足、账户 rollout 异常、模型配置错误和本地连接故障。

### 4. TUI 可读性与会话管理
隐藏工具调用、缩短已完成工具结果、side-chat 预览、历史搜索和 `/resume` 筛选状态，反映长会话、多任务并行时的信息噪声与导航成本已成为高频需求。

### 5. 云端与本地会话连续性
Cloud thread 恢复、重复助手消息、陈旧断线、错误历史遗漏，以及 Windows 路径反序列化错误，均指向同一需求：不同端之间恢复会话时，内容和状态必须保持一致。

### 6. MCP 启动韧性与扩展管理
可选 HTTP MCP server 的 OAuth discovery 不应阻塞会话创建；共享 app server 时必须正确识别本地 MCP 状态。社区需要更稳定的插件启动、认证降级和错误诊断机制。

### 7. 上下文成本控制
用户希望对已完成工具结果进行可选压缩，同时保留原始输出，避免长编码会话中的源码片段、构建日志和测试结果持续占用上下文。

### 8. 桌面端国际化
即使设置 `localeOverride=zh-CN` 并以 `--lang=zh-CN` 启动，界面仍显示英文，说明 Electron 渲染层及语言包加载尚未完全统一。

---

## 开发者关注点

- **Windows 成为问题集中区**：Computer Use、sandbox、审批、网络权限、项目列表和云会话恢复均有反馈，建议优先检查 Windows 26.x 版本链与不同运行时的配置传递。
- **沙箱行为需要可解释性**：多个问题不仅涉及命令被拒绝，还缺少明确策略原因与可用的复核路径。理想状态应能回答“哪条规则生效、为什么生效、如何授权”。
- **容量错误需要更精确的诊断**：应区分全局容量、账户级 rollout、模型覆盖配置、区域或后端实例，以及本地 app-server 状态异常。
- **Cloud 会话恢复应进行端到端测试**：重点覆盖“失败 turn 无 item、旧流断开与新流并存、助手消息重放、绝对路径反序列化”等组合场景。
- **Computer Use 必须提供资源生命周期保障**：除了功能正确，还要确保屏幕采集、锁屏状态、辅助进程和沙箱锁在完成、中断、超时后均能可靠释放。
- **CLI/TUI 用户期待更强的可观测性**：包括模型是否可用、实际生效的 provider 与模型、MCP 启动状态、审批策略来源，以及 app-server daemon 的环境版本。
- **长会话优化应避免破坏性压缩**：工具结果缩短更适合作为可选、回合边界后的机制，同时应保留完整记录和原始结果的可追溯性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-09**  
**数据范围：** `google-gemini/gemini-cli` 过去 24 小时更新的 Issues 与 Pull Requests

## 1. 今日速览

今日社区讨论几乎全部聚焦于 **Agent/Subagent 架构及其稳定性**：子代理错误报告成功、调用卡死、浏览器代理异常、配置未生效，以及工具数量膨胀等问题受到高度关注。与此同时，多个已关闭 PR 完成了从模型发现、会话隔离到 Windows 兼容性和凭据保护的系统性修复，但 Issue 列表中仍有较多问题等待回归测试或维护者进一步处理。

## 2. 版本发布

过去 24 小时内 **没有新的 Release**。

## 3. 社区热点 Issues

### 1. 子代理达到 `MAX_TURNS` 后仍被报告为成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

- **优先级：** P1
- **重要性：** 子代理实际上因达到最大轮次而中断，却被标记为 `status: "success"`、`Termination Reason: "GOAL"`，会掩盖失败并误导上层编排。
- **社区反应：** 13 条评论、2 个赞，是今日讨论度最高的 Issue。

### 2. 通用代理调用永久卡死
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

- **优先级：** P1
- **重要性：** 委派给 generalist agent 后，简单操作（如创建目录）也可能无限等待；禁用子代理后问题消失，直接影响 Agent 调度可靠性。
- **社区反应：** 8 条评论、8 个赞，关注度和认可度最高。

### 3. Browser Agent 无视 `settings.json` 配置
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

- **优先级：** P2
- **重要性：** 全局或项目级配置中的 `maxTurns` 等覆盖项未对浏览器代理生效，意味着用户无法可靠控制资源消耗和执行时长。
- **社区反应：** 5 条评论；与 Browser Agent 的其他稳定性问题共同形成热点。

### 4. 工具数量过多触发 HTTP 400
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

- **优先级：** P2
- **重要性：** 当环境暴露大量工具时，Gemini CLI 会返回 400；摘要中提到超过 128/400 个工具的场景，反映工具注册、筛选和扩展生态之间存在扩展性瓶颈。
- **社区反应：** 3 条评论。

### 5. 模型频繁在随机位置创建临时脚本
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

- **优先级：** P2
- **重要性：** 在限制原生文件写入后，模型转而通过 Shell 在多个目录生成编辑脚本，导致工作区污染和提交清理成本上升。
- **社区反应：** 3 条评论，反映出文件编辑策略与 Shell 灵活性之间的取舍问题。

### 6. Agent 可能执行破坏性 Git 或资源操作
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

- **优先级：** P2
- **重要性：** 复杂 Git 操作中可能出现 `git reset`、`--force` 等高风险命令；数据库等资源也存在误修改风险。
- **社区反应：** 3 条评论、1 个赞，诉求集中在安全护栏、危险命令拦截和更安全的默认策略。

### 7. Browser Agent 在 Wayland 环境下失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

- **优先级：** P1
- **重要性：** Linux Wayland 用户无法正常使用浏览器子代理，显示浏览器自动化仍高度依赖特定桌面环境和会话实现。
- **社区反应：** 4 条评论、1 个赞。

### 8. Agent 不会主动使用 Skills 和 Subagents
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

- **优先级：** P2
- **重要性：** 用户反馈 Gemini CLI 很少主动调用自定义技能或子代理，往往需要显式提示，削弱了 Agent 编排和可复用工作流的价值。
- **社区反应：** 7 条评论。

### 9. 生成 Vite 应用时卡在交互式提示
[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

- **优先级：** P2
- **重要性：** Agent 在创建项目时未正确处理交互式 CLI，可能无限等待；这也影响自动化任务和非交互式开发体验。
- **社区反应：** 2 条评论；Issue 已提出通过行为评测和提示调整进行修复。

### 10. `/bug` 报告缺少子代理上下文
[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

- **优先级：** P1
- **重要性：** 当前 Bug 报告主要包含主会话，无法反映子代理内部状态、工具调用和失败路径，降低问题复现及诊断效率。
- **社区反应：** 2 条评论，但直接关系到 Agent 生态的可维护性。

## 4. 重要 PR 进展

> 今日展示的 20 个热门 PR 均处于 **CLOSED** 状态，以下按潜在影响选取 10 项；列表未提供合并时间，因此不将其表述为今日已合并。

### 1. 支持在 `settings.json` 中配置 Agent
[#16433](https://github.com/google-gemini/gemini-cli/pull/16433)

- 为 Agent 增加集中配置能力，可配置模型参数、`maxTurns` 等运行参数。
- 与热点 Issues #22267、#18285 直接相关，但配置是否真正传递到各代理仍需一致验证。

### 2. 防止向 MCP Server 意外暴露凭据
[#17311](https://github.com/google-gemini/gemini-cli/pull/17311)

- 通过环境变量清理、用户警告和沙箱机制降低凭据泄露风险。
- 属于 P1 安全修复，后续由 [#18840](https://github.com/google-gemini/gemini-cli/pull/18840) 回滚，并由 [#18847](https://github.com/google-gemini/gemini-cli/pull/18847) 尝试向稳定分支修复。

### 3. 修复多轮函数调用缺少 thought signature
[#29828](https://github.com/google-gemini/gemini-cli/pull/29828)

- 修复历史工具调用后继续对话时出现 HTTP 400 的问题。
- 对长时间 Agent 会话及连续工具调用稳定性有直接影响。

### 4. 增加模型发现命令与 `--list-models`
[#29880](https://github.com/google-gemini/gemini-cli/pull/29880)

- 新增 `gemini models` 子命令和 `--list-models` 参数。
- 同时支持机器可读 JSON 和人类可读终端输出，方便脚本集成及新模型接入。

### 5. 隔离远程 Agent 会话
[#29946](https://github.com/google-gemini/gemini-cli/pull/29946)

- 按父会话与端点隔离远程对话标识，避免不同会话或同名 Agent 复用上下文。
- 可降低跨会话状态污染和敏感上下文串联风险。

### 6. 保留 `@file` 引用内容的空白
[#29935](https://github.com/google-gemini/gemini-cli/pull/29935)

- 修复引用文本文件时去除前后空白，导致 Python 缩进和结尾换行丢失的问题。
- 对代码生成、补丁应用和精确文件内容传递十分重要。

### 7. 扩展 Windows 下的家目录相对路径
[#29931](https://github.com/google-gemini/gemini-cli/pull/29931)

- 支持将 `~\policies\custom.toml` 等路径正确展开到用户主目录。
- 改善自定义策略和本地扩展注册表的 Windows 可用性；[#29923](https://github.com/google-gemini/gemini-cli/pull/29923) 实现了同类修复。

### 8. 正确识别 TortoiseGitPlink SSH 客户端
[#29922](https://github.com/google-gemini/gemini-cli/pull/29922)

- 修复将 TortoiseGitPlink 误判为 OpenSSH、进而附加错误 `BatchMode` 参数的问题。
- 可避免 Windows 环境下自动化 Git 操作失败；[#29921](https://github.com/google-gemini/gemini-cli/pull/29921) 也包含相关兼容处理。

### 9. 修正模型列表中的输出 Token 上限
[#29929](https://github.com/google-gemini/gemini-cli/pull/29929)

- 将 Gemini 2.5 Pro 和 Flash 的输出上限正确显示为 65,536。
- 对未知上限模型不再展示误导性的 8,192，提升模型能力信息的准确性。

### 10. 保留会话预览中的 Unicode
[#29924](https://github.com/google-gemini/gemini-cli/pull/29924)

- 修复中文、阿拉伯文等非 ASCII 提示在会话预览中消失或描述失真的问题。
- 同时继续过滤不安全终端控制序列。

## 5. 功能需求趋势

1. **Agent 与 Subagent 可靠性**
   - 正确传播轮次耗尽、异常退出等终止状态。
   - 避免委派后卡死，并支持浏览器代理的会话恢复、锁处理和桌面环境兼容。
   - 子代理上下文应进入 Bug 报告和可分享的 trajectory。

2. **Agent 配置与编排**
   - `settings.json` 配置需要覆盖所有代理类型。
   - 支持自动发现 Agent，并让模型更主动使用 Skills 与 Subagents。
   - 探索共享记忆、并行子代理与协作机制。

3. **工具与上下文效率**
   - 在工具数量过大时自动筛选或裁剪工具集合。
   - 引入 AST 感知的文件读取、搜索和代码库映射。
   - 通过精准提取、持久化任务列表等方式降低上下文膨胀。

4. **安全与执行护栏**
   - 使用 OS 级沙箱隔离 Bash 操作。
   - 对 `git reset`、强制覆盖和数据库修改等高风险行为增加保护。
   - 继续加强 MCP 凭据隔离及敏感环境变量清理。

5. **跨平台与自动化体验**
   - 改善 Windows、Wayland 和 TortoiseGit 环境下的兼容性。
   - 非交互任务应能自动处理 Vite 等 CLI 的交互提示。
   - 提供稳定、可机器读取的模型列表与结构化输出。

6. **可观察性与评测**
   - 子代理执行轨迹需要易于查看、分享和复盘。
   - 提升内部项目评测的稳定性，使质量趋势和回归结果更可信。

## 6. 开发者关注点

- **失败状态不能被“成功”掩盖：** `MAX_TURNS`、异常终止和空结果必须在主会话及编排层中准确呈现。
- **委派调用必须具备超时和故障恢复机制：** 当前 generalist 和 browser agent 的卡死、锁冲突及 Wayland 失败会显著拖慢开发流程。
- **配置必须真实生效：** 用户期待 `settings.json` 中的模型、轮次和运行参数能够覆盖所有代理实现。
- **高风险命令需要默认护栏：** Git 强制操作、数据库变更和临时脚本泛滥被认为是生产环境中的主要风险。
- **上下文与工具数量需要可扩展：** 大量工具导致 API 400，大文件读取导致 Token 膨胀，AST 工具和精准读取因此成为热门方向。
- **Agent 应更主动采用项目能力：** 自定义 Skills 和 Subagents 使用率偏低，社区希望模型能够根据任务自动选择合适工具。
- **跨平台细节仍需加强：** Windows 路径、TortoiseGitPlink、Wayland、原生 YAML 检查等兼容问题持续受到关注。
- **诊断与评测工具仍不足：** `/bug` 缺少子代理信息，trajectory 不易分享，项目评测稳定性也影响问题定位和质量判断。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-09**  
**数据范围：过去 24 小时更新的 Issues；暂无新版本发布或 PR 更新**

## 1. 今日速览

过去 24 小时没有新版本或 Pull Request 合并，社区讨论集中在会话稳定性、子代理模型与上下文预算、Windows Shell 兼容，以及扩展和 MCP 服务加载等方向。多个问题涉及 `create_session`、长时运行会话或 GHEC 数据驻留环境，暴露出 CLI 在会话生命周期、扩展初始化和远程策略配置上的可靠性短板。

## 2. 版本发布

过去 24 小时暂无新 Release。

## 3. 社区热点 Issues

### 1. 子代理使用未知模型后触发提示词预算错误，导致整个会话卡死
[#5219](https://github.com/github/copilot-cli/issues/5219) · **OPEN**

当主代理通过 `task` 调用子代理并指定未知模型 ID 时，系统错误地回退到 128k 默认上下文上限，最终以 `Request exceeds the model's prompt budget` 失败；主会话本身实际仍低于自身限制。该问题会破坏长时交互会话，直接影响代理编排和新模型接入。

**社区反应：** 4 条评论，暂时没有点赞；问题仍在开放状态。

### 2. 会话事件确认超时后，事件投递永久失效
[#5100](https://github.com/github/copilot-cli/issues/5100) · **OPEN**

会话首次遇到 `session host did not acknowledge ... within 120s` 超时后，后续 `session.send` 会持续失败，导致会话不可用，通常只能恢复或重新启动。问题暴露出事件投递缺少重试、降级或恢复机制。

**社区反应：** 3 条评论；目前热度较低，但故障影响范围较大。

### 3. Windows 用户希望原生支持 Git Bash
[#508](https://github.com/github/copilot-cli/issues/508) · **OPEN**

用户希望在 Windows 上将 Copilot CLI 的 Shell 从 PowerShell 切换为 Git Bash，以改善命令执行、脚本兼容性和开发体验。该需求也反映出 Bash 虽常被开发者使用，但目前缺少官方、清晰的 Windows Shell 选择机制。

**社区反应：** 4 条评论、7 个点赞；属于关注度较高的长期功能需求。

### 4. Cyber Program 的 “Trusted Access” 授权无法关联
[#4322](https://github.com/github/copilot-cli/issues/4322) · **OPEN**

在安全相关或可能被识别为网络安全风险的请求中，Copilot CLI 返回 422 拒绝；用户希望能关联 GitHub 的 “Trusted Access for Cyber program”，以获得适用授权。问题涉及身份授权、模型策略和安全审核之间的衔接，可能影响安全研究及合规场景。

**社区反应：** 3 条评论、5 个点赞；仍在等待产品或安全团队确认支持方式。

### 5. 16KB 内存页 ARM64 环境下，随附的 ripgrep 崩溃
[#4977](https://github.com/github/copilot-cli/issues/4977) · **CLOSED**

Copilot CLI 随附的 Linux ARM64 `ripgrep` 静态链接了按 4KB 页大小构建的 jemalloc，在 Asahi Linux 等采用 16KB 页大小的系统上会因 `Unsupported system page size` 立即退出。修复有助于提升 Linux-on-Apple-Silicon 和其他特殊页大小环境的兼容性。

**社区反应：** 3 条评论、1 个点赞；Issue 已关闭，当前数据中未提供对应修复 PR 或 Release 验证信息。

### 6. 支持 OSC 7501 代理状态上报
[#5320](https://github.com/github/copilot-cli/issues/5320) · **OPEN**

建议为终端集成加入 OSC 7501 Program Status Protocol，使 Herdr 等终端能够识别 Copilot 会话、展示运行状态并跟踪活动。当前 Copilot CLI 虽可在受管终端中运行，却无法向终端提供统一的会话状态。

**社区反应：** 3 条评论、11 个点赞，是本轮关注度最高的功能请求之一。

### 7. GHEC 数据驻留环境下 MCP 注册表获取 401/403，用户 MCP 服务被静默丢弃
[#4378](https://github.com/github/copilot-cli/issues/4378) · **OPEN**

在启用了数据驻留的 GitHub Enterprise Cloud 环境中，Copilot CLI 获取 MCP registry policy 时遭遇 401/403，导致所有用户自定义 MCP 服务被静默排除，仅平台默认服务可用。问题同时涉及权限、失败反馈和企业环境兼容性，可能造成用户误以为扩展已经启用。

**社区反应：** 2 条评论；关注人数不多，但对企业用户的实际影响较大。

### 8. `create_session` 创建的会话在首次切换前不会启动扩展
[#5380](https://github.com/github/copilot-cli/issues/5380) · **OPEN**

通过会话管理工具 `create_session` 创建新会话后，扩展进程不会立即启动，因此模型缺少扩展工具、技能和 Hook；只有用户首次切换到该会话时，扩展才开始加载。这会造成会话初始能力不完整及工具可用性不一致。

**社区反应：** 1 条评论；Issue 很新，尚处于早期讨论阶段。

### 9. `close_session` 后无法恢复曾切换过的会话
[#5386](https://github.com/github/copilot-cli/issues/5386) · **OPEN**

由 `create_session` 创建、且用户曾切换进入的会话，被另一会话通过 `close_session` 关闭后，在同一 CLI 进程内无法重新打开；`/resume` 会因本地会话关联失败而报错。这反映了会话关闭、切换、恢复之间的状态管理问题。

**社区反应：** 暂无评论；属于新近报告的会话生命周期缺陷。

### 10. 新建 Issue 内容为空
[#5385](https://github.com/github/copilot-cli/issues/5385) · **OPEN**

该 Issue 目前没有描述正文，暂时无法判断具体问题。由于缺少复现信息、环境和预期行为，其技术价值有限，建议提交者补充完整上下文。

**社区反应：** 暂无评论、1 个点赞；仍需进一步跟进。

## 4. 重要 PR 进展

过去 24 小时没有 Pull Request 更新，暂无可总结的重要 PR。

## 5. 功能需求趋势

### 会话管理与长时运行可靠性
- 事件确认超时后的自动恢复与重试。
- `create_session` 创建时即完整初始化扩展。
- `close_session`、`/resume` 与会话切换之间的状态一致性。
- 子代理未知模型 ID 的明确报错或模型能力校验。

相关 Issues：  
[#5219](https://github.com/github/copilot-cli/issues/5219) · [#5100](https://github.com/github/copilot-cli/issues/5100) · [#5380](https://github.com/github/copilot-cli/issues/5380) · [#5386](https://github.com/github/copilot-cli/issues/5386)

### Shell 与终端集成
- Windows 原生支持 Git Bash。
- 支持 OSC 7501 等终端代理状态协议，提升终端对 Copilot 会话及运行状态的感知。

相关 Issues：  
[#508](https://github.com/github/copilot-cli/issues/508) · [#5320](https://github.com/github/copilot-cli/issues/5320)

### 模型、代理与授权
- 未知或失效模型 ID 的容错处理。
- 子代理模型上下文预算和提示词限制管理。
- 对网络安全场景提供 Trusted Access 授权关联能力。

相关 Issues：  
[#5219](https://github.com/github/copilot-cli/issues/5219) · [#4322](https://github.com/github/copilot-cli/issues/4322)

### MCP 与企业环境兼容
- 改善 GHEC 数据驻留实例中的 MCP registry 权限处理。
- 避免策略获取失败时静默丢弃用户配置。
- 提升错误可见性，避免用户误判 MCP 服务状态。

相关 Issues：  
[#4378](https://github.com/github/copilot-cli/issues/4378)

### 跨平台安装与性能
- 修复 Linux ARM64 特殊内存页大小下的 ripgrep 兼容性。
- 改善对 Asahi Linux 等新兴 ARM64 平台的覆盖。

相关 Issues：  
[#4977](https://github.com/github/copilot-cli/issues/4977)

## 6. 开发者关注点

1. **会话不能“卡死”**  
   开发者希望长时运行任务具备超时重试、自动恢复和清晰错误提示，而不是因一次 Host ACK 超时导致整个会话永久不可用。

2. **子代理必须正确处理模型差异**  
   模型 ID 无效或不受支持时，CLI 不应静默套用 128k 默认预算，而应快速失败、明确提示，并避免拖垮主会话。

3. **新会话应具备完整能力**  
   `create_session` 创建后，扩展、工具、技能和 Hook 应立即可用；会话关闭和恢复也应保持一致，避免出现“首次切换才生效”或无法 `/resume` 的问题。

4. **企业环境中的失败不能静默发生**  
   GHEC 数据驻留环境下 MCP 服务被无提示丢弃尤其危险。CLI 应明确报告 registry policy 获取失败、权限不足及具体受影响的服务器。

5. **Windows 工作流需要更成熟的 Shell 支持**  
   Git Bash 支持拥有明确的用户需求，开发者期待 CLI 能提供可配置、可预测的命令执行环境。

6. **终端应能感知代理状态**  
   OSC 7501 等状态协议可改善终端中的会话可见性、活动跟踪和多代理协作体验。

7. **特殊平台兼容性仍是安装体验短板**  
   16KB 页大小 ARM64 Linux 上的 ripgrep 崩溃表明，跨平台发布流程仍需覆盖更广泛的硬件和系统配置。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-09

## 1. 今日速览

今日社区焦点集中在 **Free/Go 套餐限额状态异常**、**Desktop 崩溃与跨平台兼容性**，以及 **ACP、插件和后台任务生命周期**。代码侧同时推进多项修复：共享缓存刷新、MCP OAuth 刷新、虚拟时间线崩溃、Git 插件安装，以及 ACP 中途转向能力。

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

1. **Free tier 限额提示与重置异常仍是首要问题**  
   多个免费模型错误显示额度耗尽、额度不重置，且免费用户问题缺少稳定的集中反馈入口。该主 Issue 获得 **333 条评论和 25 个赞**，反映其已成为社区影响面最大的议题之一。  
   [查看 Issue #59387](https://github.com/anomalyco/opencode/issues/59387)

2. **TUI 切换 Agent 后仍反复要求进入 Plan 模式**  
   Agent 已切换后，Plan mode 提醒仍持续出现，阻碍实际实现工作；Issue 有 **13 条评论**，说明问题已被多个用户独立复现。  
   [查看 Issue #62797](https://github.com/anomalyco/opencode/issues/62797)

3. **会话历史缺乏树状分支、回滚与继续能力**  
   社区希望获得类似 Pi 的会话树：从任意消息创建分支、回滚后继续，并可视化导航分支。目前 OpenCode 的 fork/compact 仍较有限，需求获得 **7 条评论**。  
   [查看 Issue #41363](https://github.com/anomalyco/opencode/issues/41363)

4. **新版 Desktop 在旧 CPU 上启动即崩溃**  
   Bun 运行时依赖 SSE4.2 指令，不支持该指令集的旧处理器启动客户端时直接报 Error 134。该问题影响平台兼容性基础，已有 **7 条评论**。  
   [查看 Issue #59461](https://github.com/anomalyco/opencode/issues/59461)

5. **Windows 工具参数中的反斜杠路径偶发损坏**  
   `read`、`shell`、`edit` 等内置工具收到的 Windows 盘符路径可能出现盘符斜杠、冒号和反斜杠被剥离，直接影响文件读取、编辑和命令执行；已有 **6 条评论**。  
   [查看 Issue #62559](https://github.com/anomalyco/opencode/issues/62559)

6. **Go 用量限额实际为跨模型共享，与文档不符**  
   官方文档称限额按模型执行，但 5 小时、周度和月度额度实际上由所有付费模型共享，用尽一个模型会阻塞其他模型；该行为差异已获复现，并产生 **5 条评论**。  
   [查看 Issue #60311](https://github.com/anomalyco/opencode/issues/60311)

7. **Claude 的工具调用前进度更新始终不可见**  
   Claude 5.5、Fable 5+、Mythos 5.1+ 将工具调用间的说明发送为 progress-update thinking block，OpenCode 未将其展示给用户，影响代理执行过程的可观察性；已有 **5 条评论**。  
   [查看 Issue #55298](https://github.com/anomalyco/opencode/issues/55298)

8. **后台应用启动会抢占系统前台焦点**  
   OpenCode 在后台运行、测试或检查应用时，被启动的窗口可能强制获取键盘和鼠标焦点，打断用户正在进行的操作。该体验问题获得 **4 条评论及 1 个赞**。  
   [查看 Issue #57578](https://github.com/anomalyco/opencode/issues/57578)

9. **后台 Shell 进程退出后仍显示 Running**  
   daemon 未正确终结已死亡的后台 shell job，桌面端会持续显示任务运行中，终止操作无效且无法通过 API 清理；问题有 **4 条评论和 1 个赞**。  
   [查看 Issue #56804](https://github.com/anomalyco/opencode/issues/56804)

10. **Desktop 虚拟时间线行类型变化触发致命崩溃**  
    在撤销、压缩或消息列表更新期间，虚拟化行键消失或类型突变会触发 `Expected a user-message timeline row`，导致渲染器崩溃并必须重启客户端；已有 **3 条评论**。  
    [查看 Issue #62800](https://github.com/anomalyco/opencode/issues/62800)

---

## 4. 重要 PR 进展

1. **SharedCache 改为按数据源共享刷新定时器**  
   避免每个调用方在缓存过期时重复等待抓取，并减少重复轮询定时器，改善缓存刷新效率与请求竞争问题。  
   [查看 PR #62801](https://github.com/anomalyco/opencode/pull/62801)

2. **ACP 支持 `_session/steering` 中途转向**  
   ACP 客户端可向正在执行的回合发送新消息，补充了运行中干预能力；对应需求 Issue #53042 已关闭。  
   [查看 PR #54394](https://github.com/anomalyco/opencode/pull/54394)

3. **在共享凭据锁内刷新 MCP OAuth Token**  
   针对远程 MCP 服务频繁掉线的问题，跨进程协调 OAuth 刷新，避免刷新令牌轮换时重复使用旧令牌导致整个授权被撤销。  
   [查看 PR #62827](https://github.com/anomalyco/opencode/pull/62827)

4. **停止重试 ChatGPT 工作区用量限制错误**  
   识别 `subscription_sharing_workplace_individual_usage_limit_exceeded`，避免对不可通过重试恢复的套餐限额错误持续发送请求。  
   [查看 PR #62823](https://github.com/anomalyco/opencode/pull/62823)

5. **修复虚拟时间线行类型变化导致的致命错误**  
   针对 #62800，调整时间线渲染逻辑，避免虚拟列表更新时因行键消失或类型切换造成 renderer 崩溃。  
   [查看 PR #62824](https://github.com/anomalyco/opencode/pull/62824)

6. **Git 插件安装改用真实 npm/pacote 执行构建步骤**  
   修复带 `prepare`、`build` 等生命周期脚本或 workspace 的 Git 依赖无法安装、编译后二进制无法运行的问题，对应 #49704。  
   [查看 PR #62817](https://github.com/anomalyco/opencode/pull/62817)

7. **远程 MCP 服务器支持按服务配置 TLS 信任**  
   允许为特定 MCP 服务器配置自签名或私有 CA 证书，解决企业内网 MCP 连接中的证书信任问题。  
   [查看 PR #60039](https://github.com/anomalyco/opencode/pull/60039)

8. **插件实验性模型 HTTP Hooks**  
   将插件 HTTP 拦截能力扩展到文本、图像和决策等模型请求，使插件可以观察或修改更完整的 provider 请求链路。  
   [查看 PR #62820](https://github.com/anomalyco/opencode/pull/62820)

9. **中断会话时取消其后台 Shell Job**  
   扩展中断清理范围，除当前 session job 外，也处理关联后台任务，减少会话停止后仍有命令继续运行的资源泄漏。  
   [查看 PR #60119](https://github.com/anomalyco/opencode/pull/60119)

10. **修复 TUI 在 herdr panes 中默认启用动画**  
    在多路复用终端环境中默认关闭动画，降低 CPU/GPU 占用并缓解侧边栏开启时的卡顿问题。  
    [查看 PR #60111](https://github.com/anomalyco/opencode/pull/60111)

补充关注：另有 PR 明确 Go API **必须提供 session ID**，否则会返回 `MissingSessionID`，反映文档与实际接口约束仍需对齐。  
[查看 PR #62821](https://github.com/anomalyco/opencode/pull/62821)

---

## 5. 功能需求趋势

### 1. 会话历史与可控执行
社区最强烈的产品需求之一是 **树状会话历史、任意节点回滚、分支导航和回滚后继续**。这表明用户希望从线性聊天记录升级到可复盘、可分叉、可恢复的工程工作流。  
[查看 Issue #41363](https://github.com/anomalyco/opencode/issues/41363)

### 2. 运行中干预与 Agent 协作
ACP `_session/steering`、Agent 切换后的 Plan 状态管理，以及后台任务取消，体现出用户对 **执行过程可控、状态切换一致、任务生命周期清晰** 的需求。  
[查看 Issue #62797](https://github.com/anomalyco/opencode/issues/62797) · [查看 PR #54394](https://github.com/anomalyco/opencode/pull/54394)

### 3. Desktop 稳定性与跨平台兼容性
Windows 路径损坏、ACP 会话创建失败、旧 CPU 启动崩溃、虚拟列表致命错误、Windows 自更新产生无效 stub 等问题，显示 Desktop 与 Bun 运行时在 **Windows、macOS、旧硬件** 上的兼容性仍是核心矛盾。  
[查看 Issue #62559](https://github.com/anomalyco/opencode/issues/62559) · [查看 Issue #59461](https://github.com/anomalyco/opencode/issues/59461)

### 4. 插件与 MCP 扩展能力
需求集中于 **Git 插件可靠安装、私有 CA MCP、跨进程 OAuth 刷新，以及覆盖所有模型请求的插件 Hook**。社区希望扩展层不仅能安装和连接，还能深入控制模型传输链路。  
[查看 Issue #49704](https://github.com/anomalyco/opencode/issues/49704) · [查看 PR #62820](https://github.com/anomalyco/opencode/pull/62820)

### 5. 套餐、模型与额度透明度
Free tier 重置异常、Go 跨模型共享额度和 ChatGPT 工作区限额，都指向同一需求：**额度状态必须准确、可预测、可解释，且文档与实际行为一致**。  
[查看 Issue #59387](https://github.com/anomalyco/opencode/issues/59387) · [查看 Issue #60311](https://github.com/anomalyco/opencode/issues/60311)

### 6. IDE、终端与 LSP 集成
ACP 在 IntelliJ 等 IDE 中失败、TypeScript monorepo 中 LSP 未启用，以及 VS Code 终端文本选择异常，说明用户期待 OpenCode 在 **IDE Agent、终端复用器和语言服务集成**方面达到更稳定的一致性。  
[查看 Issue #62551](https://github.com/anomalyco/opencode/issues/62551) · [查看 Issue #16335](https://github.com/anomalyco/opencode/issues/16335)

---

## 6. 开发者关注点

- **额度与订阅状态不可信**：免费额度不重置、切换模型仍提示耗尽、付费模型额度被跨模型共享，是目前最集中且直接影响可用性的投诉。
- **Desktop 和 Bun 的平台兼容性**：Windows 路径转义、旧 CPU 指令集、macOS hardened runtime、更新器损坏安装文件等问题，需要建立更系统的兼容矩阵和降级策略。
- **后台任务生命周期不清晰**：进程已退出但 UI 仍显示 Running、中断后任务未完全取消、陈旧任务无法清理，开发者需要统一的 job 状态机和可靠回收机制。
- **代理状态切换存在竞态**：切换 Agent 后仍重复执行 Plan 提醒，反映提示、Agent 策略和当前执行模式之间缺少一致状态管理。
- **插件安装与凭据生命周期复杂**：Git 依赖的构建脚本、远程 MCP OAuth 令牌轮换、私有 CA 信任，都要求插件系统在安装、认证和跨进程运行方面更加可靠。
- **可观察性不足**：Claude progress update 不展示、后台任务状态失真，会让开发者误判 Agent 是否仍在工作；执行日志与 UI 状态需要保持一致。
- **扩展 API 覆盖范围有限**：现有插件 Hook 主要覆盖会话请求，而生成、图像和决策请求无法拦截；社区期待统一的模型请求拦截层。
- **文档与实际行为偏差**：Go 限额范围、Session ID 要求、ACP 行为等均出现文档或实现不一致，增加客户端集成成本。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-09

## 今日速览

过去 24 小时无新版本发布，但社区集中推进了多 Provider 兼容性、会话分叉、API Key 池化和 ACP 集成等问题。GitHub 数据显示，过去 24 小时共更新 **22 个 Issue**、**48 个 PR**，其中 **10 个 Issue 仍开放**，当前开发重点明显偏向多模型接入稳定性、远程会话体验、权限与剪贴板兼容，以及 Agent 成本和执行效率控制。

## 社区热点 Issues

### 1. [#2110 OpenAI WebSocket 压缩请求被拒绝](https://github.com/1jehuang/jcode/issues/2110)
**状态：OPEN｜新近反馈**

启用 WebSocket `permessage-deflate` 后，部分 ChatGPT/OpenAI Responses 请求会收到仅有“Invalid request”的裸错误。问题影响新连接上的压缩请求，属于近期网络协议变更带来的兼容性风险，值得优先排查。

### 2. [#2107 Fork 会话时丢失 Anthropic-compatible Provider](https://github.com/1jehuang/jcode/issues/2107)
**状态：OPEN**

会话分叉时，`fork_model_switch_request` 对 Anthropic-compatible 配置生成了不兼容的模型切换请求，可能导致新会话无法保留原有 Provider Profile。该问题直接影响 fork、上下文迁移和 Agent 协作流程。

### 3. [#2102 Bedrock 拒绝 GA Prompt Caching Beta Header](https://github.com/1jehuang/jcode/issues/2102)
**状态：OPEN**

面向 Anthropic-compatible 的直连配置会附加 GA 版本的 prompt-caching beta header，而 AWS Bedrock 会直接返回 HTTP 400。其影响范围是使用 Bedrock Anthropic Endpoint 的所有请求，属于 Provider 协议兼容性问题。

### 4. [#2104 `jcode transcript` 的 Slash Command 未走远程 Enter Handler](https://github.com/1jehuang/jcode/issues/2104)
**状态：OPEN**

通过 `jcode transcript --mode send` 发送 `/` 开头的命令时，会绕过远程 Enter 处理链，导致部分斜杠命令无法按正常远程会话逻辑执行。该问题与近期 PR [#2106](https://github.com/1jehuang/jcode/pull/2106) 直接对应。

### 5. [#2103 命名 Provider Profile 支持 API Key 池](https://github.com/1jehuang/jcode/issues/2103)
**状态：OPEN**

当前一个 Provider Profile 只读取单个 `api_key_env`，共享服务器上的所有会话会集中使用同一把密钥。社区希望支持多个密钥组成池，并在每个会话中固定一把，以分散预算和速率限制。

### 6. [#2100 Unix 取消超时 Bash 任务未终止进程组](https://github.com/1jehuang/jcode/issues/2100)
**状态：OPEN**

前台 Bash 超时并转为后台任务后，取消操作可能只终止 Shell，而不会终止整个进程组，残留进程仍会继续运行。这不仅是资源管理问题，也可能带来后台任务失控、数据写入或安全问题。

### 7. [#2091 向 Harness API 和 CLI 暴露每路由的 Reasoning Effort](https://github.com/1jehuang/jcode/issues/2091)
**状态：OPEN**

当前 API、SDK 及 `jcode model list --json` 客户端无法获知某个模型路由支持的 reasoning effort，而 TUI 内部却掌握这些信息。统一元数据接口有助于外部客户端构建模型选择器和能力探测逻辑。

### 8. [#2101 Agent 在简单任务上“过度思考”](https://github.com/1jehuang/jcode/issues/2101)
**状态：OPEN**

用户反馈调试等简单任务会持续进行缓存读取、规划和多步骤思考，甚至长时间停留在中间步骤。该问题反映当前默认 Agent 循环在任务收敛、停止条件和成本控制方面仍有不足。

### 9. [#2099 十分钟消耗五小时额度的一半](https://github.com/1jehuang/jcode/issues/2099)
**状态：OPEN｜1 个赞**

用户反馈一次任务误解指令并错误修改代码后，Agent 在纠偏和回滚过程中产生大量 Prompt 与子 Agent 调用，迅速消耗 GPT-6.1-sol 配额。事件凸显错误恢复路径、子 Agent 并发和额度预警机制的必要性。

### 10. [#2096 将 Jcode 加入 ACP Registry](https://github.com/1jehuang/jcode/issues/2096)
**状态：OPEN｜1 个赞**

Jcode 已能作为 ACP Agent 工作，但尚未进入 ACP Registry，因此 ACP 客户端无法自动发现它。登记后有望提升 Jcode 在 Zed 等编辑器及 Agent 客户端生态中的可发现性和接入率。

## 重要 PR 进展

### 1. [#2106 修复 Transcript Slash Command 的远程 Enter 路由](https://github.com/1jehuang/jcode/pull/2106)
将 `jcode transcript --mode send` 发送的斜杠命令路由到与交互式 Enter 相同的远程处理逻辑，解决 transcript 与真实远程会话行为不一致的问题。

### 2. [#2109 为命名 Provider Profile 增加 API Key 池](https://github.com/1jehuang/jcode/pull/2109)
允许一个 Profile 配置多个 API Key，并为每个会话固定其中一个 Key，从而分散预算、速率限制与故障域；对应 Issue [#2103](https://github.com/1jehuang/jcode/issues/2103)。

### 3. [#2108 修复 Fork 时丢失 Anthropic-compatible Profile](https://github.com/1jehuang/jcode/pull/2108)
调整 fork 路由与模型切换逻辑，确保 Anthropic-compatible 配置可以正确复制到分叉会话；对应 Issue [#2107](https://github.com/1jehuang/jcode/issues/2107)。

### 4. [#1961 隔离 TUI 测试中的历史与 Picker Catalog 状态](https://github.com/1jehuang/jcode/pull/1961)
通过隔离 flicker-history 和模型选择器目录状态，降低并行测试间的状态污染。该 PR 还包含对 CI 漂移修复分支的依赖，完成合并后应能改善 CI 稳定性。

### 5. [#1879 为自定义 OpenAI-compatible Provider 增加模型级配置](https://github.com/1jehuang/jcode/pull/1879)
支持每个模型配置 `display_name`、reasoning override 和 effort，改善混合模型网关中的模型展示，并允许针对不同模型层级设置不同推理能力。

### 6. [#1946 防止 Bedrock 默认旗舰模型被降级](https://github.com/1jehuang/jcode/pull/1946)
引入 Bedrock promoted-default 下限，仅当目录存在严格更新的 Claude 前沿版本时才切换默认模型，避免目录刷新后意外降级到旧模型。

### 7. [#1881 将 TUI 模型切换持久化到 `config.toml`](https://github.com/1jehuang/jcode/pull/1881)
模型选择不再只存在于当前会话，而是写入配置文件，使重启后仍保留选择；同时覆盖本地、远程和重新启动场景。

### 8. [#1880 隔离测试环境并稳定并行执行](https://github.com/1jehuang/jcode/pull/1880)
清理外部 `JCODE_*` 环境变量影响，为修改 `JCODE_HOME` 的测试增加锁，并使用独立临时目录，减少测试受开发机环境影响导致的随机失败。

### 9. [#1955 修复 `JCODE_HOME` 测试竞争问题](https://github.com/1jehuang/jcode/pull/1955)
针对 session-picker 测试中的 TOCTOU 竞争进行加锁和隔离，防止并行测试在执行中途切换运行环境。与 #1880、#1961 共同构成了本轮 CI 稳定性治理工作。

### 10. [#1889 增加 `@file` 文件提及选择器](https://github.com/1jehuang/jcode/pull/1889)
在 TUI 中通过 `@file` 快速引用项目文件，并按使用频率进行 frecency 排序，减少大型代码库中手动输入完整路径的成本。

## 功能需求趋势

### 1. 多 Provider 与企业网关兼容
社区高度关注 OpenAI-compatible、Anthropic-compatible、OpenRouter、AWS Bedrock、Copilot 等不同协议端点的兼容细节。热点集中在：

- Provider Profile 在 fork、会话恢复中的保留
- Bedrock header 差异
- WebSocket 压缩协议兼容
- 自定义 User-Agent、额外 Header
- 模型级 display name、reasoning effort 和默认模型选择

相关讨论：[ #2107 ](https://github.com/1jehuang/jcode/issues/2107)、[ #2102 ](https://github.com/1jehuang/jcode/issues/2102)、[ #2110 ](https://github.com/1jehuang/jcode/issues/2110)、[ #1879 ](https://github.com/1jehuang/jcode/pull/1879)

### 2. API 与 ACP 生态集成
ACP Registry 收录、ACP Slash Command 支持、终端限制与取消状态透传，以及向 Harness API/CLI 暴露模型能力，均指向同一趋势：让 Jcode 不仅适用于终端，也更顺畅地嵌入 IDE、Agent Harness 和第三方客户端。

相关讨论：[ #2096 ](https://github.com/1jehuang/jcode/issues/2096)、[ #851 ](https://github.com/1jehuang/jcode/issues/851)、[ #2094 ](https://github.com/1jehuang/jcode/issues/2094)、[ #2091 ](https://github.com/1jehuang/jcode/issues/2091)

### 3. 会话管理、恢复与跨环境迁移
会话复制、fork、resume、跨终端打开 Agent 以及 `JCODE_HOME` 运行时定位，都受到用户关注。核心需求是确保会话上下文、Provider 配置和运行环境在迁移后保持一致。

相关讨论：[ #2024 ](https://github.com/1jehuang/jcode/issues/2024)、[ #2107 ](https://github.com/1jehuang/jcode/issues/2107)、[ #2082 ](https://github.com/1jehuang/jcode/issues/2082)

### 4. 远程 SSH 体验
剪贴板、快捷键、终端主题变化和远程斜杠命令是远程使用的主要反馈点。现有问题包括 OSC 52 剪贴板未到达本地、快捷键错误采用服务端映射、主题不随终端切换动态更新。

相关讨论：[ #2077 ](https://github.com/1jehuang/jcode/issues/2077)、[ #1938 ](https://github.com/1jehuang/jcode/issues/1938)、[ #2044 ](https://github.com/1jehuang/jcode/issues/2044)、[ #2104 ](https://github.com/1jehuang/jcode/issues/2104)

### 5. Agent 成本、停止条件与任务安全
“过度思考”和短时间大量消耗额度的问题表明，用户希望 Agent：

- 根据任务复杂度动态控制思考深度
- 避免无效缓存读取和重复规划
- 限制子 Agent 数量及并发
- 在错误修改或回滚时设置成本上限
- 及时终止超时任务及其完整进程组

相关讨论：[ #2101 ](https://github.com/1jehuang/jcode/issues/2101)、[ #2099 ](https://github.com/1jehuang/jcode/issues/2099)、[ #2100 ](https://github.com/1jehuang/jcode/issues/2100)

### 6. TUI 可配置性与可观测性
主题、模型、内存模型、重试策略、Bash 风险门控、TPS 展示及 Agent 状态终端通知均趋向配置化。代表性 PR 包括：

- [`/theme` 与自定义主题](https://github.com/1jehuang/jcode/pull/1877)
- [可配置自动重试](https://github.com/1jehuang/jcode/pull/1878)
- [可配置内存模型](https://github.com/1jehuang/jcode/pull/1875)
- [Bash 风险门控设置](https://github.com/1jehuang/jcode/pull/1876)
- [OSC 9 Agent 状态通知](https://github.com/1jehuang/jcode/pull/1883)

## 开发者关注点

1. **协议兼容性不能只依赖“compatible”名称**  
   Anthropic/OpenAI 兼容端点在 Header、模型标识、缓存能力和 WebSocket 压缩方面仍存在细微差异，必须按实际服务商建立协议测试矩阵。

2. **会话状态需要端到端可靠传递**  
   Provider Profile、API Key、模型切换、`JCODE_HOME` 和 session ID 在 fork、resume、SSH、transcript、swarm 等路径中都可能丢失或不兼容。

3. **测试隔离和 CI 稳定性仍是合并阻塞点**  
   多个 PR 集中处理 `JCODE_HOME` 竞争、并行测试状态泄漏、格式与 Clippy 漂移，说明 CI 红灯更多来自测试基础设施，而非单一业务缺陷。

4. **流式响应必须按字节而非 transport chunk 解码 UTF-8**  
   Anthropic 与 Copilot 路径仍可能在多字节字符跨 chunk 时产生 `U+FFFD`。该问题已被关闭，但值得继续补充 CJK 边界用例，避免同类回归。

5. **Agent 的“完成”不能只依赖模型自述**  
   简单任务长时间思考、错误后持续回滚及大量子 Agent 调用，暴露出停止条件、预算上限、失败恢复和任务收敛机制仍需加强。

6. **远程终端功能需要同时考虑本地与远端环境**  
   剪贴板、快捷键和主题检测不能假设客户端与服务器一致，尤其在 Windows、macOS、SSH、tmux 组合下。

7. **外部客户端需要稳定、结构化的模型能力元数据**  
   Reasoning effort、路由限制、取消状态、拒绝状态及截断状态应通过统一 API/ACP 协议表达，避免 TUI 与外部客户端行为分裂。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-09

## 今日速览

过去 24 小时无新版本发布，但社区集中反馈了 **Pi 1.5.0 引入后的回归与新功能适配问题**，重点涉及 MCP OAuth、工具参数兼容、模型服务层级和上下文统计。  
已关闭 PR 显示，OpenRouter 服务层级、Gemini 音视频引用、mintty 快捷键及提示词缓存预热等能力正在快速推进。

## 社区热点 Issues

1. **[#10287] 网络重试后 `getContextUsage()` 严重高估上下文**
   - Pi 0.99.2 中，可重试网络错误曾使上下文占用从约 42K token 突增至 330,081 token，直接影响自动压缩和成本判断。
   - Issue 获 8 条评论、2 个赞，仍保持开放，是本轮最值得关注的稳定性问题。
   - 链接：https://github.com/earendil-works/pi/issues/10287

2. **[#11918] OAuth 登录后 MCP 会话未携带认证头**
   - Google Workspace 等远程 MCP 服务在 OAuth 登录后仍返回空结果，根因指向会话或认证头未正确传递。
   - 涉及 Calendar、Drive、Gmail 等高频服务，影响范围较大；当前已关闭。
   - 链接：https://github.com/earendil-works/pi/issues/11918

3. **[#11238] `-p` 模式下扩展调用 `sendUserMessage` 失败**
   - 扩展命令可以启动 turn，但结束时出现 `turn_end could not resolve the persisted assistant entry ID`，影响 print/非交互模式下的扩展自动化。
   - 仍有 3 条讨论，问题对脚本化工作流具有直接破坏性。
   - 链接：https://github.com/earendil-works/pi/issues/11238

4. **[#10162] 输入图片过多会中止 Agent 任务**
   - 长周期 Agent 在积累大量图片后无法继续运行，削弱了 Pi 在持续 QA、PR  babysitting 等场景中的可靠性。
   - 获得 8 条评论，社区关注度较高，目前仍开放。
   - 链接：https://github.com/earendil-works/pi/issues/10162

5. **[#11936] `kimi-coding` 拒绝根级 `anyOf` 工具参数**
   - 部分工具 schema 使用根 `anyOf` 时，Moonshot/Kimi 接口返回 HTTP 400，导致每次提示词执行都失败。
   - 补充根级 `type` 后仍会遇到兼容性限制，说明 provider 的工具 schema 校验需要更严格适配。
   - 链接：https://github.com/earendil-works/pi/issues/11936

6. **[#11921] `tool_search` 无法识别已声明的 direct MCP 工具**
   - direct MCP 工具虽随请求声明，但系统提示未包含对应名称，`tool_search` 因而错误返回 “No matching tools found”。
   - 暴露策略、工具注册和搜索索引之间存在不一致，影响大型 MCP 工具集的可发现性。
   - 链接：https://github.com/earendil-works/pi/issues/11921

7. **[#11926] 瞬态错误被当成永久错误处理**
   - HTTP 429 等临时状态被显示为红色硬错误，并永久写入 session；这与实际的重试和退避机制是两个不同层面的问题。
   - 错误语义会影响用户判断及后续日志分析。
   - 链接：https://github.com/earendil-works/pi/issues/11926

8. **[#11931] OpenRouter 的 `native_finish_reason` 在错误诊断中丢失**
   - Gemini 流以 `MALFORMED_FUNCTION_CALL` 结束时，Pi 仅保留通用 `Provider finish_reason: error`，掩盖了真正的失败原因。
   - 保留 provider 原始错误字段有助于调试模型、工具调用及流式响应。
   - 链接：https://github.com/earendil-works/pi/issues/11931

9. **[#11923] TUI 退格会破坏短粘贴标记**
   - 删除 `[paste #1]` 后，剩余的 `[paste #2]` 可能变为 `[paste #1undefined]`，导致 Enter 提交损坏标记。
   - 属于终端输入层边界条件，对短文本编辑和粘贴操作有实际影响。
   - 链接：https://github.com/earendil-works/pi/issues/11923

10. **[#11941] OpenRouter 模型服务层级未暴露给客户端**
   - OpenRouter 的 `flex`、`priority`、`ultrafast` 等 tier 尚未完整映射到 Pi 客户端，限制速度与成本策略选择。
   - 对应 PR 已关闭，说明实现已推进或问题已得到处理。
   - 链接：https://github.com/earendil-works/pi/issues/11941

## 重要 PR 进展

> 今日更新的 5 个 PR 均为已关闭状态，以下按影响范围与功能价值排序。

1. **[#11938] 支持通过文件引用向 Gemini 发送音频和视频**
   - 新增 `FileContent` 本地路径块：Pi 先上传至 Gemini Files API，等待处理完成后以 `fileData` 形式发送。
   - 实现了音视频附件能力，但包含最长五分钟的处理等待逻辑。
   - 链接：https://github.com/earendil-works/pi/pull/11938

2. **[#11857] 为 p2 增加提示词缓存预热**
   - Anthropic 5 分钟缓存超过约 305 秒未刷新时会产生完整提示词重写；PR 引入缓存预热以降低重复输入成本。
   - 报告称可减少约 26% 的 p2 支出，性能与成本收益显著。
   - 链接：https://github.com/earendil-works/pi/pull/11857

3. **[#11940] 将 OpenRouter 服务层级发布到模型目录**
   - 为目录模型增加 `serviceTiers`，包含 id、名称和描述，并按成本排序。
   - 客户端可据此提供 Standard、Priority、Ultrafast 等速度选择器。
   - 链接：https://github.com/earendil-works/pi/pull/11940

4. **[#11934] 在 mintty 中将 LF 识别为 Shift+Enter**
   - 修复 mintty 使用 LF 表示 Shift+Enter 时，全文搜索无法跳转到上一个匹配项的问题。
   - 同时处理 legacy keyboard mode 下的字节识别兼容。
   - 链接：https://github.com/earendil-works/pi/pull/11934

5. **[#11900] 修复 CONTRIBUTING.md 中的 RFC 链接**
   - 去除链接末尾多余斜杠，修复原链接返回 404 的文档问题。
   - 链接：https://github.com/earendil-works/pi/pull/11900

## 功能需求趋势

- **MCP 与多工具生态**：OAuth 会话透传、direct/deferred 工具发现、工具 schema 兼容，以及直接调用 MCP 工具，是本轮最集中的需求方向。
- **新模型与 Provider 能力**：OpenRouter 服务层级、Gemini 音视频、Kimi 工具参数兼容，以及模型切换时选择 thinking level，反映出模型适配正从“可用”转向“能力完整透传”。
- **Agent 稳定性与成本控制**：上下文统计失真、重试策略、瞬态错误分类、prompt cache 预热，直接关系到长任务可靠性和 Token 成本。
- **长会话与多模态支持**：大量输入图片导致任务中止，以及音频、视频附件需求，说明社区正在推动 Pi 覆盖更长周期、更丰富的 Agent 工作流。
- **TUI 与终端兼容**：粘贴标记、搜索快捷键、工具结果渲染和终端颜色处理等细节，仍是高频反馈来源。
- **扩展 API 能力**：社区希望扩展能够控制自动重试、感知 UI blocked 状态，并更可靠地驱动 print mode turn。
- **安装与配置体验**：包括 `pi install git:` 的 monorepo 子路径支持，以及 `/clear` 保留当前模型和 thinking level 的会话管理体验。

## 开发者关注点

1. **上下文与 Token 统计必须可信**
   - 网络故障后占用量从 42K 跳到 330K，说明重试路径和 token accounting 需要更严格的幂等与边界控制。

2. **Provider 错误不能被过度归一化**
   - `native_finish_reason` 等原始诊断字段对定位 malformed function call、schema 拒绝等问题非常关键。

3. **MCP 认证和工具发现仍存在集成断点**
   - OAuth 成功不等于会话可用；direct 工具被声明也不等于模型能发现。工具目录、提示注入和搜索索引需要统一。

4. **长任务的输入与附件管理需要更稳健**
   - 图片数量上限、上下文压缩、音频视频上传及文件处理等待，都会影响无人值守 Agent 的连续执行。

5. **缓存与重试应成为可观测、可控制的机制**
   - 社区既关注 prompt cache 的实际成本收益，也希望扩展能介入重试延迟、停止重试，并区分瞬态与永久错误。

6. **终端细节仍会影响生产可用性**
   - 粘贴标记损坏、mintty 快捷键差异及工具结果背景色溢出，暴露出 TUI 在不同终端和渲染器上的兼容压力。

7. **交互式功能偏好更精细的会话控制**
   - `/clear` 保留模型和 thinking level、选模时同时选择思考级别，均反映用户希望减少重复配置并保持工作上下文。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
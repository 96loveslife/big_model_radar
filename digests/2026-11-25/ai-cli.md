# AI CLI 工具社区动态日报 2026-11-25

> 生成时间: 2026-11-25 07:52 UTC | 覆盖工具: 8 个

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
**数据基准：2026-11-25，过去 24 小时**

## 1. 生态全景

1. **AI CLI 正从“模型入口”演进为可执行、可扩展、可治理的 Agent 平台**：MCP/Skills、插件、Subagents、ACP、BYOK 和多模型路由成为高频主题。  
2. **当前首要矛盾已从功能数量转向可靠性**：会话挂起、状态误报、升级后配置失效、资源泄漏、浏览器宿主故障和权限记忆失效，是各社区最集中的问题。  
3. **工具链正在快速分层**：Claude Code、Codex、Gemini CLI 偏向完整 Agent 工作台；Copilot CLI强调 IDE/ACP 与 GitHub 生态；OpenCode、Pi、jcode更突出模型中立、可嵌入和开发者可控性。  
4. **安全治理成为共同主线**：真实命令审批、Shell 策略绕过防护、MCP OAuth 校验、身份认证和沙箱拒绝语义，都在向企业级标准靠拢。  
5. **生态仍处于高频集成期**：24 小时内共发布 **13 个主要预发布版本**（Copilot CLI 6、Codex 4、OpenCode 3），但多款工具也暴露了明显的跨平台和升级回归。

---

## 2. 各工具活跃度对比

> 说明：Issue/PR 数按摘要中的“今日更新热点”统计，不等同于仓库全部新增活动；因此适合比较社区关注重点，而非精确提交量。

| 工具 | 今日 Issues | 今日 PR | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 | 0 | **v2.1.332**：MCP Skills、`PreSkillShellCommand` Hook | 高 |
| **OpenAI Codex** | 10 | 12+ | **4 个 Rust Alpha**：0.174.0-alpha.2～5 | **很高，快速迭代** |
| **Gemini CLI** | 10 | 10 | 无新 Release | **很高，修复密集** |
| **GitHub Copilot CLI** | 10 | 2 | **6 个预发布版**：v1.0.116-0～5 | **很高，预发布密集** |
| **Kimi Code CLI** | 0 | 0 | 无活动 | 低／静默期 |
| **OpenCode** | 10 | 10 | 无新 Release，但有 3 个版本相关 PR | 高 |
| **jcode** | 10 | 7 | 无新 Release | 中高 |
| **pi** | 10 | 10+ | 无新 Release | 高 |

### 活跃度解读

- **OpenAI Codex、Gemini CLI、Copilot CLI** 最为活跃：Release、PR 和热点 Issue 三条线同时活跃。
- **Claude Code** 的功能发布节奏不算密集，但热点问题集中在桌面端、后台任务和插件生态，用户影响面较大。
- **OpenCode、pi、jcode** 更偏向“问题驱动的小步快跑”，当天无正式 Release，但 PR 覆盖稳定性和协议兼容。
- **Kimi Code CLI** 过去 24 小时无活动，短期无法据此判断项目整体健康度。

---

## 3. 共同关注的功能方向

### 3.1 MCP、Skills 与插件生态

这是当前最明确的跨工具主线：

- **Claude Code**：v2.1.332 支持从 MCP 服务器加载 Skills，并增加 `PreSkillShellCommand` Hook。
- **Codex**：支持 HTTPS 网关自动发现 `/models` 模型目录；推进共享 MCP REPL、固定工作目录和插件市场 SSH 校验。
- **Gemini CLI**：支持 MCP 无状态 OAuth 流程、Origin 校验、服务账号令牌接收方限制；非交互模式可直接执行 `/skill-name`。
- **Copilot CLI**：改进 MCP 启动、认证时序及插件与独立 MCP Server 的同端点冲突处理。
- **Pi**：实现 MCP `2026-07-28` 无状态协议，并优化大型 SSE 事件处理。
- **OpenCode**：持续修复自定义 Provider 注册和后台服务配置加载。

**决策参考**：MCP 已从“连接器协议”升级为核心分发与治理机制。竞争焦点正转向 **技能发现、权限边界、OAuth、无状态协议、流式性能和插件生命周期**。

---

### 3.2 Agent 编排、Subagents 与任务生命周期

- **Claude Code**：实时多人协作、后台 worker 回收、Headless 后台任务终止、Swarm/子任务可观测性需求。
- **Codex**：App Server、MessagePort、快速重启、会话恢复和远程任务接管。
- **Gemini CLI**：Subagent 达到 `MAX_TURNS` 后仍被误报为成功、通用 Agent 永久挂起、Skills/Subagents 自主调度。
- **Copilot CLI**：异步 Shell 重复结束、会话永久卡死、子会话消息错投、Host 注册无限等待。
- **OpenCode**：恢复前台 Subagent 执行、后台服务重启后会话永久显示 `running`。
- **jcode**：未完成 Swarm lane 被提前标记完成，后台任务取消后 TUI 仍显示 Running。
- **Pi**：Durable 中止语义不能返回被撤回输入 ID，扩展生命周期边界不稳定。

**共同诉求**可归纳为四点：

1. 任务结束必须有准确状态；
2. 失败、轮次耗尽和人工取消不能被报告为成功；
3. 后台服务重启后应能恢复或回收任务；
4. 用户应能看到子 Agent 的状态、轨迹和失败原因。

这是当前 AI CLI **最值得技术团队持续跟踪的领域**。编排能力正在快速扩张，但状态机、超时和恢复语义尚未形成行业共识。

---

### 3.3 权限、安全沙箱与审批透明度

- **Claude Code**：新增 Shell 执行前 Hook，企业用户关注集中配置、Hooks 和调用审计。
- **Codex**：GitHub Connector 的 “Always allow” 未被遵守，Computer Use 反复请求跨应用权限。
- **Gemini CLI**：修复 Shell 包装器绕过策略、MCP OAuth Origin 校验及模拟令牌外发风险。
- **Copilot CLI**：ACP 审批只显示自然语言摘要而非真实 Shell 命令；被 `deniedPaths` 拒绝的文件仍可能被复制到备份目录。
- **OpenCode**：社区要求更细粒度命令、文件和网络权限及更易发现的沙箱入口。
- **Pi**：扩展注册工具可能恢复用户显式禁用的工具。

**行业信号**：安全机制正在从“是否弹窗”转向三个更严格的要求：

- 审批界面必须展示**实际命令和真实副作用**；
- “拒绝”必须发生在敏感文件读取或复制之前；
- “只允许一次”“始终允许”必须真正持久化并可撤销。

---

### 3.4 企业网关、身份认证与 BYOK

- **Codex**：HTTPS `/models` 自动发现、API workload identity 修复。
- **Copilot CLI**：Entra ID OAuth 回环回调不兼容、登录过期后无法重新认证、TLS 1.3 回归；希望支持多提供商 BYOK。
- **Gemini CLI**：强化 MCP OAuth Issuer、Origin 和 Token 接收方限制。
- **Pi**：修复 OAuth 刷新失败后每次工具调用都重复刷新的问题。
- **OpenCode、jcode**：自定义 Provider 启动注册、模型路由和新模型兼容问题。
- **Claude Code**：集中配置、连接器指令压缩恢复和跨环境配置一致性。

**结论**：企业接入的主要成本已从“调用 API”转向 **身份、代理、证书、OAuth、模型目录和配置迁移**。没有统一配置契约的工具，在规模化部署中会迅速形成运维负债。

---

### 3.5 跨平台一致性与升级迁移

| 平台问题 | 涉及工具 |
|---|---|
| Windows UI 卡顿、权限丢失、换行符污染 | Claude Code、Codex、Copilot CLI |
| macOS Computer Use、浏览器宿主、TLS、权限回归 | Claude Code、Codex、Copilot CLI |
| WSL 剪贴板、Git Bash 定位、终端状态残留 | OpenCode、Pi |
| Windows Named Pipe、Launcher 残留、Stamp 时间戳 | jcode |
| Wayland Browser Agent 失败 | Gemini CLI |

其中最值得警惕的是 **自动更新破坏旧配置**：Codex 的 MCP 路径、Claude Code 的 macOS TCC 权限、OpenCode 的 Provider 注册均属于典型案例。

---

### 3.6 可观测性与诊断能力

多个工具都暴露了“界面无反应”或“错误被包装”的问题：

- Codex：App Server、browser access host、executor 状态难区分。
- Gemini CLI：Subagent 轨迹、配置和失败上下文不足。
- Copilot CLI：Host 注册、超时、重试和 turn 生命周期缺少诊断。
- OpenCode：命令创建响应丢失后无法判断任务是否仍在运行。
- Pi：Provider 原始错误和 HTTP 状态在多层包装后丢失。
- jcode：状态文件、Session 与 TUI 显示不一致。

**开发建议**：统一事件日志、任务状态机、可导出诊断包、明确重试与超时原因，应成为选型和自研 CLI 的基础要求。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与竞争壁垒 |
|---|---|---|---|
| **Claude Code** | MCP/Skills、Hooks、插件/Mods、桌面端、多人协作 | 团队开发者、企业自动化、重度 Agent 用户 | 强治理与扩展性；优势在 Claude 模型协同、企业 Hook 和应用生态，短板在桌面端稳定性及后台生命周期 |
| **OpenAI Codex** | Rust CLI/runtime、App Server、浏览器自动化、TUI、模型网关 | 个人开发者、CI/CD、企业代理和自动化团队 | 高性能原生 CLI 与运行时；优势在 Rust、TUI 抽象、OpenAI 生态和网关接入，当前主要风险是升级回归及桌面通信链路 |
| **Gemini CLI** | 多 Agent、浏览器子 Agent、代码库理解、策略引擎 | 大型代码库用户、Google Cloud 生态、Agent 开发者 | 强调自主委派、AST 感知和沙箱化；安全策略进展快，但终止状态和配置传递仍不可靠 |
| **GitHub Copilot CLI** | ACP/IDE 集成、MCP、GitHub Connector、BYOK | GitHub 用户、VS Code/ACP 客户端开发者 | 借助 GitHub 身份、仓库和 IDE 分发；优势在开发者入口和 ACP 生态，短板是会话状态机、Entra/TLS 与 CLI/App 一致性 |
| **OpenCode** | Provider 中立、桌面端、后台服务、Subagents | 多模型用户、自托管部署者、桌面 Agent 用户 | 开放模型路由和常驻服务架构；优势是灵活，核心挑战是资源回收、状态恢复和配置迁移 |
| **Pi** | 扩展 SDK、MCP 协议、Provider 兼容、Durable/RPC | 扩展开发者、嵌入式 Agent、协议与模型适配者 | 强调可编程扩展和底层控制；优势在流式处理、协议适配和可观测性，短板在权限边界、缓存和跨平台细节 |
| **jcode** | Claude 多 Provider、Swarm、TUI、Windows/macOS 适配 | Claude 多模型用户、Swarm 工作流和本地部署用户 | 重点解决 signed thinking 回放、缓存和并行 Agent；Provider 适配深度高，但状态一致性仍需加强 |
| **Kimi Code CLI** | 暂无当日动态 | — | 本日信息不足以判断定位；应避免仅凭 24 小时静默作长期判断 |

### 定位差异的本质

- **Claude Code**：偏“企业可控的 Agent 应用平台”。
- **Codex**：偏“高性能原生运行时与 OpenAI 自动化入口”。
- **Gemini CLI**：偏“自主多 Agent 编排与代码库智能”。
- **Copilot CLI**：偏“GitHub/IDE 入口和 ACP 客户端生态”。
- **OpenCode**：偏“模型中立、桌面与常驻服务”。
- **Pi**：偏“开发者可编程的 Agent 内核”。
- **jcode**：偏“Claude 多 Provider 与本地 Swarm 编排”。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：Codex、Gemini CLI、Copilot CLI**

- Codex 同时具备大量 Issue、密集 Rust Alpha 发布和 TUI/MCP/网关 PR。
- Gemini CLI 无新版本但有 10 项重点修复，Agent 编排议题讨论密集。
- Copilot CLI 一天发布 6 个预发布版本，版本节奏和 ACP 反馈最活跃。

**第二梯队：Claude Code、OpenCode、Pi、jcode**

- Claude Code 的单个桌面回归和协作需求能形成较高讨论量。
- OpenCode、Pi 的 Issue 与 PR 数量稳定，技术反馈具体。
- jcode 社区规模相对有限，但 Provider、缓存和 Swarm 问题技术含量较高。

**当前静默：Kimi Code CLI**

- 无活动不代表项目停滞，但应结合更长周期判断。

### 5.2 成熟度

#### 相对成熟：Claude Code、Codex、Copilot CLI

- 已形成稳定 Release 或预发布节奏；
- 企业集成、扩展协议、桌面端和身份认证等完整产品面正在形成；
- 但成熟度高也意味着回归影响面大，升级迁移成为主要风险。

#### 中等、快速成长：Gemini CLI、OpenCode

- 核心功能覆盖广，Agent 调度与生态方向清晰；
- 状态语义、配置一致性和长期运行可靠性仍在快速补齐；
- 适合尝鲜，但生产使用需锁定版本并准备回滚方案。

#### 快速迭代、技术驱动：Pi、jcode

- 修复直接针对协议、缓存、流式性能和 Provider 语义；
- 架构灵活、开发者参与度高；
- 生命周期契约和平台一致性尚未完全稳定。

### 5.3 建议

- **生产/企业使用**：优先 Claude Code、Codex、Copilot CLI，但必须验证升级矩阵和回滚路径。
- **自托管与多模型**：优先评估 OpenCode、Pi。
- **大型仓库与多 Agent**：Gemini CLI 值得关注，但需重点测试终止状态和子 Agent 隔离。
- **新项目采用**：不要只看功能数量，应建立自己的状态机、权限和升级回归测试套件。

---

## 6. 值得关注的趋势信号

### 趋势一：MCP 正成为 AI CLI 的“操作系统级扩展接口”

Skills、服务器发现、OAuth、无状态协议、插件分发、Shell 安全 Hook 同时推进，说明 MCP 已不只是连接工具，而是承载能力发现、身份与治理的核心层。

**参考价值**：构建内部 Agent 平台时，应优先定义统一的 MCP 安全、认证和版本策略，而不是为每个 CLI 单独开发连接器。

---

### 趋势二：Agent 编排的核心瓶颈已从“能不能调用”转向“状态是否可信”

多个工具都出现：

- 轮次耗尽被报告为成功；
- 取消后仍显示运行；
- daemon 重启后永久卡住；
- 未完成依赖被提前释放；
- 异步工具造成重复 `end_turn`。

**参考价值**：自研 Agent 系统应把状态机、终态判定、幂等性、取消语义和恢复机制置于提示词与模型能力之前。

---

### 趋势三：升级回归正在成为比缺少功能更大的生产风险

典型表现：

- Codex 自动更新后 MCP 路径失效；
- Claude Code 更新后 macOS TCC 权限丢失；
- OpenCode 升级后自定义 Provider 消失；
- Copilot CLI 预发布后 TLS 1.3 回归。

**参考价值**：生产部署需要版本锁定、配置迁移校验、启动自检、权限恢复和自动回滚；仅依赖“用户重新配置”不可接受。

---

### 趋势四：安全控制必须实现“实际语义”，不能停留在 UI 标签

Copilot CLI 隐藏真实命令、Gemini CLI Shell 包装绕过、Copilot 沙箱拒绝后仍复制文件、Pi 扩展恢复已禁用工具，都说明“提示用户批准”不等于安全控制。

**参考价值**：审批必须绑定最终执行对象；策略引擎必须检查真实命令、真实文件路径和真实网络目标；拒绝动作应发生在敏感 I/O 之前。

---

### 趋势五：终端兼容正在从零散补丁转向统一能力层

Codex 集中处理图片、剪贴板、通知、双向文本和 tmux；Claude Code、OpenCode、Pi 也在推进 RTL、WSL、Git Bash、剪贴板和终端状态清理。

**参考价值**：CLI 产品不应只测试标准终端。至少应建立 Windows Terminal、WSL/tmux、Kitty、Ghostty、Wayland 和不同 shell 的自动化兼容矩阵。

---

### 趋势六：Provider 适配竞争进入“推理连续性”阶段

jcode 的 signed thinking 回放、Pi 的 `reasoning_opaque` 回放、Codex 的 workload identity 和模型目录发现，说明竞争焦点已不只是模型名称和价格，而是：

- 推理状态能否跨工具调用保留；
- 缓存前缀是否稳定；
- 账户权限是否准确；
- 原始错误是否可诊断。

**参考价值**：多 Provider 架构应把 **reasoning replay、cache identity、模型能力元数据、错误映射**作为独立接口设计，而非仅做 HTTP 适配。

---

### 趋势七：常驻 Agent 服务必须把资源生命周期当作一级功能

OpenCode 集中修复无界 SSE、Bus、Location 缓存和 WebSocket；Claude Code 出现 worker 泄漏；Pi 出现日志递归增长至 24.4 GiB；Gemini CLI 和 Codex 均有无限等待。

**参考价值**：后台服务需要统一提供 TTL、最大缓冲、队列上限、空闲连接回收、任务租约、心跳、熔断和磁盘配额。缺一项都可能演变为长期运行故障。

---

## 总体判断

当前 AI CLI 生态已经形成明显的共同范式：

> **模型为执行核心，MCP/ACP 为扩展接口，Skills/Subagents 为编排层，Hooks/沙箱/OAuth 为治理层，Daemon/App Server 为运行时。**

下一阶段的主要竞争点不再是“是否支持 Agent”，而是：

1. **能否准确、可恢复地完成长任务；**
2. **能否在升级后保持配置和权限连续性；**
3. **能否让审批与执行真正一致；**
4. **能否在常驻运行中控制资源消耗；**
5. **能否向企业和开发者提供可诊断、可审计的运行语义。**

对技术决策者而言，现阶段最稳妥的策略不是单押某一款工具，而是建立一层**统一评估与适配层**，重点测试 Agent 终态、升级迁移、权限持久化、MCP 身份认证、跨平台兼容和故障恢复。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：GitHub `anthropics/skills`，截至 **2026-11-25**。  
> 排序说明：PR 列表标注为“按评论数排序”，但所给字段中评论数均为 `undefined`、点赞数也未形成有效区分，因此以下主要依据 **Issues 热度、PR 的问题重要性、开放状态及近期活跃度**综合判断，无法可靠复原严格的前五名。

## 1. 热门 Skills 排行

### 1. Skill Creator：触发评测与打包可靠性

- **相关 PR：**
  - [#1298：隔离触发评测并处理 Windows 和运行时失败](https://github.com/anthropics/skills/pull/1298)
  - [#1681：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681)
  - [#1997：正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997)
- **功能：** 创建、打包、校验和评测 Skill；其中触发评测用于衡量描述能否让 Claude 正确调用 Skill。
- **社区热点：**
  - [#556：`run_eval.py` 触发率始终为 0](https://github.com/anthropics/skills/issues/556)
  - [#1352：并行 worker 串扰导致接近零的假阴性](https://github.com/anthropics/skills/issues/1352)
  - YAML、引号、Unicode 和多行描述解析不一致，可能导致实际触发条件与评测条件不同。
- **当前状态：** 三个修复 PR 均为 **Open**。这是当前最关键的基础设施型方向，因为触发评测直接影响所有新 Skill 的质量和可发现性。

### 2. Webapp Testing：安全启动与元素发现

- **相关 PR：**
  - [#1980：避免 `with_server.py` 使用 `shell=True`](https://github.com/anthropics/skills/pull/1980)
  - [#1976：正确报告 textarea 和 select](https://github.com/anthropics/skills/pull/1976)
- **功能：** 启动 Web 应用、自动发现页面元素，并辅助浏览器端测试。
- **社区热点：**
  - [#1980](https://github.com/anthropics/skills/pull/1980) 指出把用户或 Agent 提供的命令交给系统 Shell 会引入命令注入风险。
  - 元素发现结果不准确会让后续测试操作错误定位控件。
- **当前状态：** 两个 PR 均为 **Open**。安全修复优先级较高，特别是当 Skill 接收网页、仓库或外部输入时。

### 3. Document / DOCX Skills：输出验证与 XML 完整性

- **相关 PR：**
  - [#1792：LibreOffice 超时时报错并验证修订标记](https://github.com/anthropics/skills/pull/1792)
  - [#1734：检测 DOCX 孤立批注](https://github.com/anthropics/skills/pull/1734)
- **相关 Issue：**
  - [#2018：`merge_runs.py` 丢失命名空间并生成无效 XML](https://github.com/anthropics/skills/issues/2018)
- **功能：** 创建、编辑、合并和接受 DOCX 修订，并检查批注、修订标记和文档结构。
- **社区热点：** 焦点不只是“能否生成文件”，而是能否**证明生成成功**：超时不能被误报为成功，输出不能残留批注或修订，合并后 XML 必须合法。
- **当前状态：** 相关 PR 均为 **Open**。这反映出社区对文档 Skills 的期待已从格式生成升级到可验证的交付流水线。

### 4. Claude API Skill：上下文成本与文档时效性

- **相关 PR：**
  - [#1950：更新 Python `pause_turn` runner 指南](https://github.com/anthropics/skills/pull/1950)
  - [#1730：替换失效文档链接](https://github.com/anthropics/skills/pull/1730)
- **相关 Issue：**
  - [#1487：`claude-api` Skill 单次注入约 156k tokens](https://github.com/anthropics/skills/issues/1487)
- **功能：** 提供 Claude API、工具调用、SDK 行为和官方学习资料。
- **社区热点：**
  - 大规模上下文注入可能直接耗尽上下文窗口。
  - SDK 版本演进后，旧教程中的暂停恢复逻辑已经过时。
  - 死链会降低 Skill 的实际可用性和可信度。
- **当前状态：** PR 均为 **Open**；相关 Issue 仍开放。该 Skill 热度高，但核心矛盾是“内容必须全面”与“加载必须轻量”之间的冲突。

### 5. XLSX Skill：公式与外部链接风险分析

- **相关 PR：**
  - [#2019：解析工作表级定义名称和外部链接别名](https://github.com/anthropics/skills/pull/2019)
- **功能：** 处理 Excel 工作簿、公式重算及外部引用风险检测。
- **社区热点：** 旧实现只检查工作簿级定义名称，会漏掉通过工作表作用域、别名等间接引用外部工作簿的公式。
- **当前状态：** **Open**。它代表企业用户最关心的方向之一：不仅生成电子表格，还要发现隐蔽的数据依赖和交付风险。

### 6. Skill 信任边界与社区贡献安全

- **相关 Issue：**
  - [#492：社区 Skill 使用 `anthropic/` 命名空间造成信任边界滥用](https://github.com/anthropics/skills/issues/492)
- **相关 PR：**
  - [#1980：Webapp Testing 避免 Shell 注入](https://github.com/anthropics/skills/pull/1980)
- **功能：** 本项并非单一 Skill，而是社区 Skill 分发、命名和权限边界问题。
- **社区热点：** 社区最关注的 Issue（46 条评论）明确指出：如果社区贡献物伪装成官方 Skill，用户可能在不知情下授予更高权限或信任。
- **当前状态：** Issue **Open**；相关修复 PR **Open**。这是生态层面优先级最高的治理问题。

### 7. PPTX Skill：渲染参数预校验

- **相关 PR：**
  - [#1975：`thumbnail.py` 拒绝小于 1 的 `--cols`](https://github.com/anthropics/skills/pull/1975)
- **功能：** 生成缩略图，并通过 LibreOffice 渲染 PPTX 进行检查。
- **社区热点：** 参数错误若到渲染后才暴露，会产生无关异常并浪费执行时间；输入校验应前移。
- **当前状态：** **Open**。热度不及前述项目，但代表文档类 Skills 正在从“能运行”转向“快速失败、结果可靠”。

### 8. 算法艺术 Skill：边界行为修正

- **相关 PR：**
  - [#1977：让 `wrapAround()` 正确处理越界和负值](https://github.com/anthropics/skills/pull/1977)
- **功能：** 辅助生成算法艺术图案。
- **社区热点：** 原实现对负数返回最大值、对过大的值返回 0，不符合“始终映射到 `[0, max)`”的函数契约。
- **当前状态：** **Open**。它体现社区会主动审查边界条件和函数语义，而不仅关注视觉效果。

---

## 2. 社区需求趋势

### 2.1 工作流自动化：从单次执行转向端到端交付

社区期待 Skill 不只是生成单个文件，而是承担完整链路：

1. 读取规格或原始资料；
2. 拆解任务；
3. 调用外部服务；
4. 创建任务或工单；
5. 验证输出；
6. 跟踪状态与验收标准。

代表方向：

- [#1245：Notion Spec to Implementation + Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245)  
  把产品规格转换为可执行的 Notion 任务，并补充简历量化审计；PR 为 **Open**。
- [#1771：ProofCore Contract Auditor](https://github.com/anthropics/skills/pull/1777)  
  面向 Solidity/Rust 智能合约审计，并将审计证明锚定到区块链；PR 为 **Open**。

### 2.2 代码审查与安全审计

社区希望建立可重复、证据化的审查流程，而非只给出主观意见：

- [#1385：Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)  
  提议“任务前校准 → 对抗式复核 → 交付验证”三阶段质量门，Issue 仍有 8 条评论。
- [#1771：智能合约静态审计与证明锚定](https://github.com/anthropics/skills/pull/1771)
- [#1980：消除测试服务器启动命令注入](https://github.com/anthropics/skills/pull/1980)

共同诉求是：**结果需有测试、审计记录或可验证工件作为证据**。

### 2.3 测试生成与自动验证

测试类需求正在从“生成测试代码”转向“运行并证明测试有效”：

- [#1298：修复触发评测的并发、Windows 与运行时问题](https://github.com/anthropics/skills/pull/1298)
- [#1976：修正 Web 元素发现](https://github.com/anthropics/skills/pull/1976)
- [#1792：文档生成后验证修订是否真正接受](https://github.com/anthropics/skills/pull/1799)

社区尤其关注**假阴性、假成功和验证器自身不可靠**。

### 2.4 文档、排版和跨格式生成

文档需求仍是最稳定的大类之一：

- DOCX 批注检测与修订验证：[#1734](https://github.com/anthropics/skills/pull/1734)、[#1792](https://github.com/anthropics/skills/pull/1792)
- 文档排版质量控制：[#514](https://github.com/anthropics/skills/pull/514)
- Markdown 转视频和配音：[#1703](https://github.com/anthropics/skills/pull/1703)
- 文档 Skills 的快照与同步说明：[#2108](https://github.com/anthropics/skills/pull/2108)

趋势是用户不再满足于“生成一份可打开的文件”，而是要求排版、媒体、可访问性和输出验证均达到可交付水平。

### 2.5 Agent 记忆、上下文与状态管理

- [#1329：Compact Memory](https://github.com/anthropics/skills/issues/1329)  
  用紧凑符号表示长期 Agent 状态，减少记忆占用，获得 10 条评论。
- [#1487：Claude API Skill 上下文膨胀](https://github.com/anthropics/skills/issues/1487)
- [#202：Skill Creator 应转向可执行、节省 token 的操作说明](https://github.com/anthropics/skills/issues/202)

这表明社区开始把 Skill 视为**上下文基础设施**，而不只是提示词模板。

### 2.6 企业级共享、权限与可观测性

- [#228：支持组织级 Skill 共享](https://github.com/anthropics/skills/issues/228)
- [#492：修复社区 Skill 的官方身份伪装问题](https://github.com/anthropics/skills/issues/492)
- [#189：避免插件安装重复 Skill](https://github.com/anthropics/skills/issues/189)

需求集中于团队分发、权限隔离、来源识别、版本治理，以及避免重复加载浪费上下文。

---

## 3. 高潜力待合并 Skills

以下 PR 均为 **Open**，且问题明确、具备明确用户价值，具备较高落地潜力：

| PR | Skill / 方向 | 落地价值 | 状态 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | Skill Creator 触发评测修复 | 修复评测并发串扰、Windows 失败及运行时异常假阴性，直接改善 Skill 开发质量 | Open |
| [#1980](https://github.com/anthropics/skills/pull/1980) | Webapp Testing 命令注入修复 | 降低 Agent 执行外部命令时的供应链与本地安全风险 | Open |
| [#1792](https://github.com/anthropics/skills/pull/1792) | DOCX 修订验证 | 避免超时被误报成功，并确保输出确实接受修订 | Open |
| [#2019](https://github.com/anthropics/skills/pull/2019) | XLSX 外部链接分析 | 提高企业表格风险检测覆盖率，减少隐蔽外链漏报 | Open |
| [#1681](https://github.com/anthropics/skills/pull/1681) | Skill Creator 直接打包 | 修复脚本直接执行失败及过期用法路径 | Open |
| [#1997](https://github.com/anthropics/skills/pull/1997) | YAML frontmatter 解析 | 防止描述字段、引号和 Unicode 在评测阶段被错误解析 | Open |
| [#1950](https://github.com/anthropics/skills/pull/1950) | Claude API `pause_turn` 指南 | 对齐 Python SDK 1.1.0+ 的实际行为，减少错误外层重启逻辑 | Open |
| [#2108](https://github.com/anthropics/skills/pull/2108) | 文档 Skills 快照与同步说明 | 明确仓库版本、导出里程碑及本地同步副本之间的关系 | Open |
| [#1977](https://github.com/anthropics/skills/pull/1977) | 算法艺术边界修复 | 修正负值和越界值的确定性行为 | Open |

### 值得观察、但商业或安全门槛更高的新 Skill

- [#1245：Notion 规格转实现](https://github.com/anthropics/skills/pull/1245)  
  能连接“规格—拆解—任务—进度”的企业工作流，但需要关注 Notion 权限、API 稳定性和隐私边界。
- [#1703：Markdown 转视频与音频](https://github.com/anthropics/skills/pull/1703)  
  覆盖文档到多媒体的完整链路，传播潜力高；需验证 TTS、渲染依赖及生成质量。
- [#1771：智能合约审计与链上证明](https://github.com/anthropics/skills/pull/1771)  
  差异化明显，适合安全审计场景；应重点审查误报率、链上费用和“证明”是否真正代表审计完整性。
- [#525：Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)  
  提供无头运行、输入驱动和逐帧检查，工程化程度较高，适合游戏开发与测试工作流。
- [#1615：SCNet HPC](https://github.com/anthropics/skills/pull/1615)  
  面向科学计算集群的 SSH、Slurm 和资源发现，应用价值明确，但用户群相对垂直。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是让 Skills 从“能调用的提示词集合”升级为“安全、可验证、可分发且节省上下文的生产力工作流”，其中触发可靠性、输出验证和官方信任边界是最突出的三项痛点。**

---

# Claude Code 社区动态日报

**日期：2026-11-25**  
**数据范围：anthropics/claude-code 过去 24 小时更新**

## 今日速览

- 今日发布 **v2.1.332**，核心变化是支持从 MCP 服务器加载 Skills，并在加载技能或命令时通过新 Hook 拦截内联 Shell 命令，扩展了 Claude Code 的工具治理能力。
- 社区讨论集中在桌面端稳定性与跨平台体验：Windows UI 卡顿、macOS 权限与后台进程泄漏、MCP Desktop 通信失败，以及插件无法自动更新等问题获得较高关注。
- 功能诉求明显指向更强的协作、插件生态和可观测性，包括多人实时协作、Mods 持久化与通知、后台任务生命周期、标准终端编辑能力等；过去 24 小时无新增 PR。

---

## 版本发布

### [v2.1.332](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

主要更新：

- **MCP Skills（Beta）**
  - Claude Code 现可加载 MCP 服务器提供的 Skills。
  - 在 `/` 菜单中以 `server:skill` 形式展示，避免与本地或其他来源的 Skills 重名。
- **新增 `PreSkillShellCommand` Hook**
  - 技能或命令加载时，可以检查并拒绝其中的内联 Shell 命令。
  - 为基于 Skills 的自动化流程增加了一层命令执行控制与安全防护。
  - 官方提示：在 v2.1.331 及更早版本中，配置了该事件但未声明相关能力兼容性的设置文件，可能出现兼容问题。

---

## 社区热点 Issues

### 1. [Windows 桌面端严重 UI 卡顿和鼠标卡顿](https://github.com/anthropics/claude-code/issues/26302)

- **重要性**：Claude Desktop 1.1.3189 更新后出现明显性能回归，直接影响 Windows 用户的日常交互。
- **社区反应**：58 条评论、49 个赞，是今日评论热度最高的 Issue。
- **主要诉求**：确认回归范围、定位资源消耗来源，并提供可回滚或修复版本。

### 2. [为 Claude Desktop/Cowork 增加希伯来语和阿拉伯语 RTL 支持](https://github.com/anthropics/claude-code/issues/38005)

- **重要性**：反映国际化与可访问性仍是桌面端的重要缺口。
- **社区反应**：50 条评论、99 个赞，讨论热度最高。
- **主要诉求**：不仅支持 RTL 布局，还需覆盖文本编辑、快捷键、混排文本、输入法和辅助技术。

### 3. [支持单个 Claude Code 会话的实时多人协作](https://github.com/anthropics/claude-code/issues/60082)

- **重要性**：当前分享链接以只读为主，无法满足团队共同控制会话、查看状态和分配工作的需求。
- **社区反应**：22 条评论、43 个赞。
- **主要诉求**：共享光标或输入、权限划分、冲突处理、会话审计，以及类似 VS Code Live Share 的协作模式。

### 4. [Windows Cowork 远程会话文件上传失败](https://github.com/anthropics/claude-code/issues/110676)

- **重要性**：大文件上传失败后出现 HTTP 503，且后续小文件也可能失败，影响远程会话连续性。
- **社区反应**：15 条评论；问题新近出现，已获得一定关注。
- **主要诉求**：隔离上传与暂存服务故障、保留失败任务上下文，并提供更明确的错误码与重试机制。

### 5. [macOS Computer Use 点击被 Dock 命中测试层阻断](https://github.com/anthropics/claude-code/issues/50719)

- **重要性**：Computer Use 在 macOS 26.4/26.4.1 上出现平台回归，可能直接导致自动化任务无法点击目标应用。
- **社区反应**：14 条评论，并提供窗口签名、回归时间点及过滤规则等复现信息。
- **主要诉求**：针对 Dock 和系统级 overlay 建立可靠的命中测试例外，并补充跨 macOS 版本回归测试。

### 6. [后台 daemon 未回收过期 worker，反复重新认领导致进程与内存泄漏](https://github.com/anthropics/claude-code/issues/87891)

- **重要性**：报告称六周内累计约 64 个泄漏进程、占用约 7.1 GB，属于严重的长期运行稳定性与资源管理问题。
- **社区反应**：8 条评论、6 个赞，已有明确复现数据。
- **主要诉求**：区分活跃 worker、过期 worker 和未认领 spare，建立可靠的回收与 TTL 清理机制。

### 7. [Desktop Code 页 MCP App 调用出现 “IPC not available”](https://github.com/anthropics/claude-code/issues/106708)

- **重要性**：MCP App 工具无法在桌面端正常调用，说明 MCP 与桌面宿主之间的集成仍存在回归风险。
- **社区反应**：7 条评论。
- **主要诉求**：修复 IPC 生命周期与会话绑定，提供诊断日志，并在桌面端提供 MCP App 兼容性检查。

### 8. [Claude Code Web 的 PR 尾部错误附加归因信息](https://github.com/anthropics/claude-code/issues/107892)

- **重要性**：即使 `.claude/settings.json` 将 `attribution.pr` 配置为空字符串，Web 会话仍会添加 “Generated by Claude Code”，属于配置不生效。
- **社区反应**：5 条评论、6 个赞。
- **主要诉求**：确保所有环境统一尊重归因配置，避免自动化写入 PR 时出现非预期内容变更。

### 9. [macOS 自动更新后反复丢失 TCC 权限](https://github.com/anthropics/claude-code/issues/94878)

- **重要性**：版本化二进制路径变化可能触发 macOS 重新授权，影响后台会话访问 Documents 等目录。
- **社区反应**：5 条评论、3 个赞，已有复现。
- **主要诉求**：更新后保持稳定的可执行文件身份与权限声明，并支持自动恢复既有授权。

### 10. [Chrome 每次完整重启后 Claude 登录状态丢失](https://github.com/anthropics/claude-code/issues/97344)

- **重要性**：重新出现同意页会直接破坏无人值守浏览器自动化，是生产环境中的高优先级回归。
- **社区反应**：5 条评论、2 个赞。
- **主要诉求**：保持浏览器扩展的登录持久化，恢复用户授权，同时兼顾安全与隐私策略。

---

## 重要 PR 进展

过去 24 小时内，仓库**没有新增或更新的 Pull Request**，因此暂无 PR 功能与修复进展可报告。

---

## 功能需求趋势

### 1. 实时多人协作与团队会话

- [#60082：单个会话实时多人协作](https://github.com/anthropics/claude-code/issues/60082)
- 社区期待类似 Live Share 的共享会话、权限控制、状态同步和协作审计。
- 这是当前最具平台级影响的功能诉求之一。

### 2. 插件、Mods 与应用生态能力

- [#104901：Mods 作为应用，支持账户级数据、授权能力并覆盖所有 Claude 界面](https://github.com/anthropics/claude-code/issues/104901)
- [#104903：跨会话保持 Mod 面板打开](https://github.com/anthropics/claude-code/issues/104903)
- [#104902：自定义通知位置、类型及多设备投递](https://github.com/anthropics/claude-code/issues/104902)
- [#104915：为 Button 和 Input 提交按钮提供图标](https://github.com/anthropics/claude-code/issues/104915)
- [#105560：流式读取 HTTP 响应](https://github.com/anthropics/claude-code/issues/105560)
- [#99509：可配置 Toast 位置并显示剩余时间](https://github.com/anthropics/claude-code/issues/99509)
- [#101089：Mod Input 在桌面面板中支持全宽](https://github.com/anthropics/claude-code/issues/101089)

总体方向是把 Mods 从单机、局部 UI 扩展成具有持久化、权限、通知和跨设备能力的应用平台。

### 3. IDE 集成与编辑器体验

- [#111668：VS Code 扩展的 Tab 补全提示停止生成](https://github.com/anthropics/claude-code/issues/111668)
- [#97985：标准文本编辑模型](https://github.com/anthropics/claude-code/issues/97985)

社区不仅需要稳定的 VS Code 集成，也希望 TUI 补齐选区、复制剪切粘贴、按词移动等标准编辑能力。

### 4. 性能、后台任务与资源生命周期

- [#26302：Windows 桌面端 UI/鼠标卡顿](https://github.com/anthropics/claude-code/issues/26302)
- [#87891：后台 worker 泄漏与资源回收缺失](https://github.com/anthropics/claude-code/issues/87891)
- [#85129：Headless 模式在回合结束时终止后台 Bash/Agent](https://github.com/anthropics/claude-code/issues/85129)
- [#112133：Linux 交互会话被误判为后台任务](https://github.com/anthropics/claude-code/issues/112133)

开发者重点关注长任务可靠性、后台进程可恢复性、正确区分交互与后台上下文，以及避免资源持续泄漏。

### 5. MCP 与连接器生态

- [#106708：Desktop MCP App IPC 不可用](https://github.com/anthropics/claude-code/issues/106708)
- [#112121：Claude.ai connector instructions 在压缩后未重发且被截断](https://github.com/anthropics/claude-code/issues/112121)
- v2.1.332 新增 MCP Skills 与加载前 Shell Hook

MCP 已成为扩展 Claude Code 能力的核心机制，但连接器指令保真、压缩恢复、桌面 IPC 和安全控制仍是短板。

### 6. 自动化、Headless 与无人值守运行

- [#85129：`-p` 模式后台任务被意外终止](https://github.com/anthropics/claude-code/issues/85129)
- [#97344：Chrome 重启后登录状态丢失](https://github.com/anthropics/claude-code/issues/97344)
- [#107892：Web PR 归因配置未生效](https://github.com/anthropics/claude-code/issues/107892)

自动化用户需要更明确的生命周期、状态持久化和配置契约，以减少“静默失败”。

### 7. 国际化、可访问性与输入体验

- [#38005：RTL 支持](https://github.com/anthropics/claude-code/issues/38005)
- [#112134：语音输入支持自定义项目词汇](https://github.com/anthropics/claude-code/issues/112134)

需求从界面双向文本进一步扩展到语音识别与专有名词准确性。

### 8. 安全治理与 Hook 能力

- [#107408：多项目 Claude Code 配置治理经验](https://github.com/anthropics/claude-code/issues/107408)
- [#100057：用户 Hook 阻止 Agent brief/reply 上传](https://github.com/anthropics/claude-code/issues/100057)
- v2.1.332 新增 [`PreSkillShellCommand`](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

社区正在形成“集中配置、Hooks 防护、工具调用审计”的企业级使用模式，同时也需要更易理解的拒绝原因和配置管理体验。

---

## 开发者关注点

1. **桌面端回归是当前最突出风险**  
   Windows UI 卡顿、macOS Computer Use 点击失败、Chrome 登录丢失和 Desktop MCP IPC 故障，表明多个 Claude 表面仍需加强跨平台回归测试。

2. **后台任务生命周期缺乏稳定契约**  
   Headless 回合结束会终止后台任务，交互会话又可能在 Linux 上被误判为后台任务。对于 CI、Agent 编排和长时间自动化，这是高影响问题。

3. **长期运行存在资源泄漏风险**  
   worker 未回收、进程被反复认领和数 GB 内存占用，需要引入明确的进程所有权、TTL、健康检查和启动清理机制。

4. **权限与更新机制容易破坏自动化**  
   macOS TCC 权限因自动更新丢失、Windows 上传失败后持续 503，都会迫使用户在版本升级后重复配置或恢复任务。

5. **配置项必须跨环境一致生效**  
   `attribution.pr`、插件更新策略、Hook 行为和 connector instructions 在不同界面中存在不一致，开发者希望获得统一、可预测的配置语义。

6. **插件生态正从 UI 扩展转向应用平台**  
   社区下一步关注点包括持久化数据、权限声明、多设备通知、流式 I/O、跨会话状态以及真正的应用分发，而不仅是面板和控件。

7. **可观测性仍是自动化链路短板**  
   VS Code 补全停止时没有错误日志；部分后台任务被静默终止；Desktop 上传失败仅暴露笼统的 503。社区需要任务状态、失败原因、重试记录和诊断日志。

8. **团队协作和治理需求快速增长**  
   实时多人协作、跨项目统一配置、集中 Hook 策略和审计能力，正在从高级场景变成团队部署 Claude Code 的核心需求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-25**  
**数据范围：openai/codex 过去 24 小时更新**

## 今日速览

过去 24 小时集中发布了 **4 个 Rust alpha 版本（0.174.0-alpha.2～alpha.5）**，显示 CLI/runtime 仍在快速迭代。社区反馈则主要聚焦于**桌面端更新后的稳定性**：Windows/macOS 出现 Send 按钮失效、浏览器访问不可用、App Server 连接异常，以及自动更新后配置路径失效等回归问题。与此同时，PR 推进集中在 **TUI 终端能力整合、上下文处理、MCP、模型网关和工作负载身份认证**。

---

## 版本发布

### Rust v0.174.0 Alpha 系列

- [rust-v0.174.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.5)
- [rust-v0.174.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.4)
- [rust-v0.174.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.3)
- [rust-v0.174.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.2)

> 当前 Release 说明仅提供版本号，未披露详细变更清单。连续发布四个 alpha 版本，表明该分支正处于密集测试和修复阶段；建议开发者使用前查看对应提交记录，并避免在生产环境直接部署 alpha 构建。

---

## 社区热点 Issues

### 1. Windows/Brave 下 Codex CLI 浏览器访问失败

- [#57641 Terminal CLI @Browser fails with “The browser access host is unavailable”](https://github.com/openai/codex/issues/57641)
- **重要性**：桌面端更新后出现浏览器能力回归，可能直接阻断依赖 Browser 工具的自动化工作流。
- **社区反应**：60 条评论、48 个赞，是当日讨论度最高的 Issue。
- **关键信号**：问题同时涉及 Windows、Brave 与 Codex CLI 浏览器访问，说明浏览器宿主进程或版本兼容链路可能存在跨组件故障。

### 2. Plus 用户希望保留 ChatGPT High 与 Codex/Work 能力

- [#58530 December 2026 usage limits: preserve access to ChatGPT High and Codex/Work on Plus](https://github.com/openai/codex/issues/58530)
- **重要性**：涉及 Plus 订阅权益、2026 年 12 月用量限制以及产品定位，直接影响付费用户采用决策。
- **社区反应**：44 条评论、69 个赞，赞数在样本中最高。
- **关键信号**：社区关注点已从单纯模型配额延伸到高级推理、Codex Work 与 ChatGPT 权益如何组合。

### 3. Windows 新会话 Send 按钮间歇性禁用

- [#62393 Send button intermittently disabled despite non-empty input](https://github.com/openai/codex/issues/62393)
- **重要性**：输入内容存在但无法发送，属于阻断任务启动的核心交互缺陷。
- **社区反应**：31 条评论，争议较少但复现讨论活跃。
- **关键信号**：报告集中在 Windows 新版 App，可能涉及输入状态、Agent 状态或 Send 按钮启用条件之间的同步问题。

### 4. macOS 浏览器自动化不可用

- [#56928 Browser automation unavailable: “The browser access host is unavailable”](https://github.com/openai/codex/issues/56928)
- **重要性**：与 #57641 形成跨平台同类故障，浏览器自动化属于 Computer Use 和端到端 Agent 的基础能力。
- **社区反应**：22 条评论、23 个赞。
- **关键信号**：macOS 同样出现 browser access host 不可用，降低了“单一 Windows 特有故障”的可能性。

### 5. Windows 自动更新后 MCP 路径失效

- [#26011 config.toml MCP paths stale after auto-update — node_repl fails with “os error 3”](https://github.com/openai/codex/issues/26011)
- **重要性**：自动更新破坏 `config.toml` 中的旧安装路径，会令 MCP 服务在升级后静默失效。
- **社区反应**：17 条评论、10 个赞。
- **关键信号**：`node_repl` 启动失败与系统“找不到指定路径”高度相关，升级迁移逻辑需要校验可执行文件位置并自动修复路径。

### 6. macOS Send 禁用并出现 MessagePort 断连

- [#63217 macOS desktop: Send disabled and “Peer closed MessagePort connection”](https://github.com/openai/codex/issues/63217)
- **重要性**：既有会话无法打开、新会话无法发送，说明问题可能位于桌面端与本地 App Server 的通信层。
- **社区反应**：12 条评论。
- **关键信号**：涉及 App 版本 `26.1117.41037` 和内置 Codex CLI `0.171.0-alpha.13`，便于维护者按版本组合定位回归。

### 7. GitHub Connector 忽略 “Always allow”

- [#37184 GitHub connector ignores “Always allow” and repeatedly prompts for the same write action](https://github.com/openai/codex/issues/37184)
- **重要性**：权限记忆失效会显著破坏 Agent 工作流，并增加重复授权成本与用户挫败感。
- **社区反应**：10 条评论、3 个赞。
- **关键信号**：问题发生在 macOS Desktop 的 GitHub connector 写操作权限持久化或作用域匹配环节。

### 8. ChatGPT iOS 打开 Codex 页签即崩溃

- [#62899 ChatGPT iOS crashes opening Codex tab: SwiftUI metadata EXC_BAD_ACCESS](https://github.com/openai/codex/issues/62899)
- **重要性**：移动端核心入口完全不可用，且与 iOS 27.2 Beta 关联，对测试用户影响严重。
- **社区反应**：10 条评论、6 个赞。
- **关键信号**：崩溃发生在 SwiftUI 元数据访问阶段，桌面端正常，问题可能局限在 iOS 适配或 Beta SDK 兼容性。

### 9. Codex Cloud 环境长期离线且无法访问工作区

- [#54666 Codex Cloud environment stuck offline](https://github.com/openai/codex/issues/54666)
- **重要性**：离线状态导致命令无法执行，未提交工作区也存在不可访问风险，属于数据可用性问题。
- **社区反应**：4 条评论、8 个赞。
- **关键信号**：报告明确提到带未提交更改的工作区，用户对恢复路径和状态自愈机制需求较强。

### 10. Linux PipeWire 主声道增益被归零

- [#58704 Linux desktop voice: PipeWire master gain becomes zero](https://github.com/openai/codex/issues/58704)
- **重要性**：语音输出会变得几乎不可闻，且单声道音量正常，容易误判为模型或音频内容问题。
- **社区反应**：16 条评论、3 个赞。
- **关键信号**：问题可能是 Linux 桌面语音链路错误操作了设备级 master gain，而不是调整会话或声道增益。

---

## 重要 PR 进展

> 下列 PR 均为当日更新并已关闭；由于摘要未提供明确的合并结果，以下以“变更内容”而非“已合并”表述。

### 1. 支持从 HTTPS 网关自动发现模型目录

- [#63807 Discover model catalogs from HTTPS gateways](https://github.com/openai/codex/pull/63807)
- 自定义网关可直接通过 `/models` 提供模型目录，Codex 不再强制要求单独配置 `model_catalog_url`。
- **价值**：显著降低企业代理、LiteLLM 或自建网关的接入成本。

### 2. 修复 API workload identity 启动及刷新认证

- [#63808 Fix API workload identity authentication at startup and refresh](https://github.com/openai/codex/pull/63808)
- 处理凭据安装可能撤销既有网络策略、托管模型提供方身份预期不匹配等问题。
- **价值**：改善服务化、云端和企业工作负载身份认证的可靠性。

### 3. 将每项附加上下文上限提高至 10,000 tokens

- [#63843 Raise the per-value additional context limit to 10,000 tokens](https://github.com/openai/codex/pull/63843)
- 截断阈值由 1,000 提升至 10,000 tokens，并增加 `codex.additional_context.value_bytes` 的 40 KiB 指标桶。
- **价值**：可向模型传递更完整的单段附加上下文，减少关键信息过早丢失。

### 4. 集中管理 TUI 终端能力判断

- [#63790 Centralize TUI terminal capability decisions](https://github.com/openai/codex/pull/63790)
- 将终端特异检查从渲染和 scrollback 代码中抽离，供不同调用方共享。
- **价值**：降低终端兼容逻辑分散造成的重复探测与行为不一致。

### 5. 统一终端兼容性策略

- [#63793 Centralize terminal compatibility policy in the TUI](https://github.com/openai/codex/pull/63793)
- 统一 inline mode、Kitty graphics、鼠标捕获、session polling 与 pointer reset 等判断。
- **价值**：提升 Codex TUI 在不同终端和复用器中的可预测性。

### 6. 集中管理 TUI 剪贴板行为

- [#63797 Centralize TUI clipboard decisions in terminal capabilities](https://github.com/openai/codex/pull/63797)
- 根据终端能力决定快捷键转发与右键粘贴行为，不再由多个模块各自判断。
- **价值**：减少不同终端下复制粘贴行为不一致的问题。

### 7. 集中管理 TUI 图片能力检查

- [#63801 Centralize TUI image capability checks](https://github.com/openai/codex/pull/63801)
- 复用终端会话检测与 tmux passthrough 转义，并明确检查全屏虚拟放置和像素数据保留条件。
- **价值**：改善多模态输出在终端、tmux 和特殊协议下的兼容性。

### 8. 集中管理终端通知能力

- [#63802 Centralize terminal capability checks in the TUI](https://github.com/openai/codex/pull/63802)
- 统一通知协议选择、Ghostty 255 字节限制、聚焦窗口提示及 tmux OSC 通知转义。
- **价值**：减少通知丢失或错误发送，提高桌面提醒可靠性。

### 9. 完整屏记录支持双向文本

- [#63845 Render bidirectional text in full-screen transcripts](https://github.com/openai/codex/pull/63845)
- 使用终端双向布局能力，确保全屏 transcript 中阿拉伯语、希伯来语与 LTR 文本混合显示正确。
- **价值**：改善非英语开发者使用 CLI 的可读性。

### 10. 动态技能选择减少 n-gram 分配

- [#63834 Reduce n-gram allocations in dynamic skill selection](https://github.com/openai/codex/pull/63834)
- 对候选 n-gram 去重，并以借用 UTF-8 切片替代不必要的字符串分配。
- **价值**：降低技能选择阶段的内存分配和 GC 压力。

### 其他值得留意

- [#63821 共享 MCP REPL 支持固定启动目录](https://github.com/openai/codex/pull/63821)：将 `mcp_shared_repl_cwd` 稳定化并默认启用。
- [#63838 TUI 配额提示按当前线程 provider 隔离](https://github.com/openai/codex/pull/63838)：避免恢复线程切换 provider 后显示无关配额警告。
- [#63806 加固插件市场 SSH 主机校验](https://github.com/openai/codex/pull/63806)：降低 Git/SSH 与 allowlist URL 解析不一致导致的主机混淆风险。
- [#63811 将内置 ripgrep 更新至 16.0.0](https://github.com/openai/codex/pull/63811)：升级代码搜索依赖。

---

## 功能需求趋势

### 1. 桌面端稳定性和升级迁移

当日最突出的主题不是缺少新功能，而是**更新后回归**。Send 按钮失效、App Server 重连失败、浏览器宿主不可用、配置路径失效和内置浏览器数据丢失，均指向版本升级与运行时迁移链路需要加强。

相关 Issues：

- [#62393](https://github.com/openai/codex/issues/62393)
- [#63217](https://github.com/openai/codex/issues/63217)
- [#63805](https://github.com/openai/codex/issues/63805)
- [#63783](https://github.com/openai/codex/issues/63783)
- [#26011](https://github.com/openai/codex/issues/26011)

### 2. 浏览器自动化与 Computer Use 基础设施

Windows 和 macOS 均出现 browser access host unavailable，说明社区对**可复用的浏览器 Agent 环境、宿主进程健康检查和明确故障恢复机制**有强烈需求。

相关 Issues：

- [#57641](https://github.com/openai/codex/issues/57641)
- [#56928](https://github.com/openai/codex/issues/56928)
- [#62832](https://github.com/openai/codex/issues/62832)
- [#37378](https://github.com/openai/codex/issues/37378)

### 3. App Server、会话恢复与任务连续性

快速重启失败、MessagePort 断连、异步问题未结束、SSH 断线后无法安全接管会话，均指向同一类需求：**长任务和远程任务必须具备可靠的会话生命周期、恢复与接管机制**。

相关 Issues：

- [#62722](https://github.com/openai/codex/issues/62722)
- [#63217](https://github.com/openai/codex/issues/63217)
- [#44648](https://github.com/openai/codex/issues/44648)
- [#44063](https://github.com/openai/codex/issues/44063)

### 4. 权限记忆与工具调用可控性

GitHub Connector 不遵守 “Always allow”、Computer Use 反复申请跨应用访问，反映出用户希望 Agent 能做到：**授权一次、持续有效，并在危险边界内减少无意义重复确认**。

相关 Issues：

- [#37184](https://github.com/openai/codex/issues/37184)
- [#37378](https://github.com/openai/codex/issues/37378)

### 5. 企业网关、身份认证与本地部署

社区同时关注 API workload identity、HTTPS 模型网关、Windows 本地执行器 TCP connect、Linux keyring 挂起，说明**企业网络、身份与自托管兼容性**正成为独立需求方向。

相关 Issues：

- [#60449](https://github.com/openai/codex/issues/60449)
- [#41031](https://github.com/openai/codex/issues/41031)

### 6. Skills 与上下文能力

Skills 从 `/` 菜单消失以及附加上下文上限调整，表明开发者希望**更易发现、更稳定地调用技能，同时扩大单段上下文的可用容量**。

相关 Issues：

- [#63306](https://github.com/openai/codex/issues/63306)

相关 PR：

- [#63843](https://github.com/openai/codex/pull/63843)
- [#63834](https://github.com/openai/codex/pull/63834)
- [#63832](https://github.com/openai/codex/pull/63832)

### 7. 订阅权益与模型能力预期

Plus 用户对 High、Codex/Work 的保留诉求，以及 GPT-6.2 Astra/Sol 的行为回归报告，显示社区正在从“能否使用”转向关注**模型是否更可靠、权限是否足够、套餐是否匹配工作负载**。

相关 Issues：

- [#58530](https://github.com/openai/codex/issues/58530)
- [#63466](https://github.com/openai/codex/issues/63466)

---

## 开发者关注点

1. **升级不能破坏现有配置**  
   Windows 自动更新后 MCP 路径仍指向旧目录，是最明确的升级迁移缺陷之一。开发者需要启动时路径校验、迁移修复及可诊断日志。

2. **核心任务链路必须可恢复**  
   Send 按钮状态、App Server rendezvous、MessagePort 和快速重启之间存在关联。用户期望“输入—发送—执行—反馈”每一环都有明确状态，而不是静默失效。

3. **浏览器 Agent 需要可靠的环境生命周期**  
   浏览器宿主不可用已跨 Windows 与 macOS 出现。建议关注 browser access host 的启动、健康检查、版本兼容和故障自愈，而不仅是单个客户端的错误提示。

4. **权限系统必须真正记住授权**  
   “Always allow”失效会直接增加自动化成本。开发者更关注权限作用域、持久化、撤销机制和重复提示抑制。

5. **CLI 的终端兼容性仍是长期工程项**  
   当日多项 PR 集中处理剪贴板、图片、通知、双向文本、tmux 和 inline mode，说明 Codex TUI 正逐步形成统一的终端能力抽象层。

6. **企业接入需要更少的手工配置**  
   自动发现 `/models`、workload identity 修复、固定 MCP REPL 目录等改进，共同指向更低的部署与维护成本。

7. **社区需要更可预测的模型行为**  
   模型回归报告已不只是“回答质量下降”，而涉及执行失败和人工监督增加。开发者期待更稳定的任务完成率、工具调用纪律和错误恢复能力。

8. **遥测与诊断能力仍需加强**  
   多起问题涉及 app-server、executor、browser host 和 provider，单纯“按钮灰色”不足以定位原因。统一日志、状态事件和可导出的诊断信息将显著缩短排障周期。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-25**  
**数据范围：** 过去 24 小时内更新的 GitHub Issues 与 Pull Requests

## 1. 今日速览

过去 24 小时没有新的 Release，但社区讨论和开发活动高度集中在 **Agent/Subagent 稳定性** 上：MAX_TURNS 被误报为成功、通用 Agent 挂起、Browser Agent 在 Wayland 下失败等问题成为焦点。与此同时，安全与可靠性修复持续推进，包括 Web Search 超时、MCP OAuth 凭证保护、Shell 命令替换检测及 YOLO 模式策略一致性。

## 2. 版本发布

过去 24 小时内**无新版本发布**。

## 3. 社区热点 Issues

1. **[#22323] Subagent 达到 MAX_TURNS 后仍被报告为 GOAL success**
   - **重要性：** P1 缺陷。Agent 实际因轮次耗尽而中断，却被主流程误判为成功，可能掩盖未完成任务并影响上层编排。
   - **社区反应：** 14 条评论、2 个赞，是当日讨论最充分的 Issue。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist agent 永久挂起**
   - **重要性：** 简单操作（如创建目录）即可触发无限等待，严重影响 Agent 的可用性；禁用委派给子 Agent 可暂时绕过。
   - **社区反应：** 8 条评论、8 个赞，关注度和认可度最高。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#19873] 通过零依赖 OS 沙箱与执行后意图路由发挥 Bash 能力**
   - **重要性：** 提议让 Gemini 3 更自然地使用 POSIX 工具，同时通过沙箱和命令意图识别控制安全风险，属于 Agent 执行模型的重要演进方向。
   - **社区反应：** 9 条评论、1 个赞。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/19873

4. **[#22745] 评估 AST 感知的文件读取、搜索与代码库映射**
   - **重要性：** 目标是提高大型代码库导航精度、减少无效读取和 Token 消耗，直接关系 Agent 的效率与可扩展性。
   - **社区反应：** 7 条评论、1 个赞。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/22745

5. **[#21968] Gemini 未充分使用 Skills 与 Subagents**
   - **重要性：** 用户希望 Agent 根据任务描述自主选择技能和子 Agent，而非必须显式提示，反映当前 Agent 调度能力仍不足。
   - **社区反应：** 7 条评论。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/21968

6. **[#22267] Browser Agent 忽略 settings.json 中的 maxTurns 等覆盖配置**
   - **重要性：** P1 缺陷。全局或项目级配置未完整传递给 Browser Agent，可能导致运行失控、成本异常或行为不一致。
   - **社区反应：** 5 条评论。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/22267

7. **[#21983] Browser Subagent 在 Wayland 环境下失败**
   - **重要性：** P1 缺陷，影响 Linux Wayland 用户使用浏览器自动化，并显示终止原因可能存在误报。
   - **社区反应：** 4 条评论、1 个赞。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/21983

8. **[#24246] 工具数量过多时触发 400 错误**
   - **重要性：** 当环境中可用工具超过约 400 个时请求失败，暴露工具注册、筛选和上下文扩展能力不足。
   - **社区反应：** 3 条评论。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/24246

9. **[#23571] 模型经常在随机位置创建临时脚本**
   - **重要性：** 在限制文件工具、仅允许 Shell 执行时，Agent 会生成大量散落的编辑脚本，增加工作区清理和提交成本。
   - **社区反应：** 3 条评论。
   - **链接：** https://github.com/google-gemini/gemini-cli/issues/23571

10. **[#22465] 创建 Vite 应用时卡在交互式提示**
    - **重要性：** Agent 未能妥善处理脚手架工具的交互提示，说明自动化执行与非交互环境适配仍有缺口。
    - **社区反应：** 2 条评论。
    - **链接：** https://github.com/google-gemini/gemini-cli/issues/22465

## 4. 重要 PR 进展

1. **[#30467] 修复 Markdown 代码围栏的终端渲染**
   - 修复带语言标签或属性的代码围栏、表格与代码块相邻时的渲染问题。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30467

2. **[#30468] `read_many_files` 正确匹配所有工作区目录中的二进制资源**
   - 修复新增工作区目录或绝对路径下图片、PDF、音频资源被跳过的回归问题。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30468

3. **[#30268] YOLO 模式统一应用于污染检查与构建文件保护**
   - 确保交互式和 headless YOLO 运行不会被 taint/build-file 检查意外中断或硬拒绝。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30268

4. **[#30415] 为 Web Search 增加超时并在中止后停止重试**
   - 修复 `google_web_search` 在请求停滞或持续出现可重试错误时无限等待的问题。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30415

5. **[#30464] 新增 `/fork` 命令及 rewind 分支选项**
   - 支持非破坏性对话分支，通过共享的 `ChatRecordingService.forkAsync()` 管理历史。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30464

6. **[#30451] 加强 Shell 包装器中的命令替换与策略检查**
   - 扩展命令替换检测和包装器剥离逻辑，防止被包装的禁用命令绕过 PolicyEngine。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30451

7. **[#30454] 强化 MCP OAuth 流程的 Origin 一致性校验**
   - 按 RFC 8414 校验 issuer，并确保授权端点、Token 端点与预期 Origin 一致，同时改善来源展示。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30454

8. **[#29546] 非交互模式支持 `/skill-name` 激活技能**
   - 在非交互 slash-command 路径注册 `SkillCommandLoader`，并正确处理工具执行结果。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/29546

9. **[#30456] 限制 MCP 服务账号模拟令牌的接收方**
   - 通过 Host allowlist 和强制 scopes，防止生成的 ID Token 被发送到恶意 MCP URL。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30456

10. **[#30219] 修复 ACP 压缩会话重载后的 400 错误**
   - 改为将完成的工具调用记录到当前活动 Chat，避免附加到压缩过程中已移除的消息。
   - **链接：** https://github.com/google-gemini/gemini-cli/pull/30219

## 5. 功能需求趋势

### 1. Agent 编排与 Subagent 能力
社区最关注的是 Agent 是否能正确判断子任务完成、是否自主使用 Skills/Subagents，以及能否稳定处理挂起、轮次耗尽和并发协作。相关议题覆盖终止状态、Agent 自省、共享内存和并行协作。

### 2. 代码库理解与上下文效率
AST 感知的读取、搜索和代码库映射成为明确方向，目标是减少无效文件读取、控制 Token 消耗，并提升大型仓库中的定位精度。同时，社区也在探索文件化任务追踪，以缓解长会话中的“上下文腐化”。

### 3. 浏览器自动化可靠性
Browser Agent 的 settings 覆盖、Wayland 兼容性、持久化会话锁与自动接管，是当前浏览器子 Agent 的三个核心问题。

### 4. 安全执行与策略一致性
Shell 命令替换检测、MCP OAuth Origin 校验、服务账号 Token 接收方限制，以及 YOLO 模式与策略引擎的一致性，均显示安全控制正在从简单拦截转向更细粒度的执行上下文分析。

### 5. 可观测性与评测体系
社区希望 `/chat share` 能展示和分享 Subagent trajectory；`/bug` 应包含子 Agent 上下文。内部项目评测也需要提高稳定性和可追踪性，以支持质量趋势分析。

### 6. CLI 交互与扩展性
对话 fork、skill 自动激活、非交互命令、MCP 环境变量与工具过滤、扩展安装等需求，反映 CLI 正从单会话终端工具向可脚本化、可扩展的平台演进。

## 6. 开发者关注点

- **执行结果必须可信：** MAX_TURNS、异常中止或失败不能被报告为 GOAL success。
- **避免无限挂起：** Web Search、通用 Agent 和子 Agent 都需要明确超时、取消和可靠终止机制。
- **配置必须真正生效：** `settings.json` 中的 `maxTurns` 等参数应完整传递至 Browser Agent 等执行单元。
- **工具规模与上下文压力：** 工具过多可能触发 400，而大文件读取、任务追踪和代码库探索会显著增加 Token 消耗。
- **安全策略不能留缺口：** Shell 包装器、MCP OAuth、服务账号模拟和 YOLO 模式都需要一致、可解释的策略行为。
- **自动化流程应避免意外交互：** 创建 Vite 应用等任务不能停在交互式提示中。
- **工作区需要保持整洁：** Agent 不应在随机目录遗留临时脚本，减少清理和提交噪声。
- **诊断能力仍不足：** 用户需要看到子 Agent 的完整轨迹、配置与失败上下文，以便定位挂起、误报和平台兼容问题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-25**  
**数据范围：过去 24 小时**

## 1. 今日速览

过去 24 小时发布 **6 个预发布版本（v1.0.116-0 至 v1.0.116-5）**，重点集中在 **ACP 客户端兼容性、MCP 连接管理、权限审批与终端交互稳定性**。社区反馈则主要指向 **Windows 平台问题、会话状态异常、ACP 重复输出及 MCP 认证/网络兼容性**；新增问题中，ACP 异步 Shell 重复结束、MCP 注册表请求缺少 User-Agent，以及沙箱拒绝文件仍被复制等安全问题尤其值得警惕。

## 2. 版本发布

### v1.0.116-5

- 调整 `copilot help parallel-work` 文档：计划审批后不再提示可使用 `/fleet` 继续 Autopilot。
- ACP 客户端中的 Shell 审批提示现在展示实际待授权命令，而不再只展示描述。
- 修复已配置 HTTP hook 的相关行为。
  - [查看 Release](https://github.com/github/copilot-cli/releases)

### v1.0.116-4

- 为扩展 Manifest 增加构建时 JSON Schema，便于扩展开发阶段校验配置。
- 修复 PowerShell 参数名包含数字时的权限匹配问题，例如 `-n1`、`-ExpectedSha256` 无需再申请整段脚本审批。
- 修复文件夹信任提示中选择 “Yes” 后未立即关闭的问题。
  - [查看 Release](https://github.com/github/copilot-cli/releases)

### v1.0.116-3

- 全屏时间线新增 **“Jump to latest”**，可返回最新输出并恢复跟随。
- ACP 兼容编辑器可按会话选择上下文大小，同时不修改保存的默认配置。
- 支持为 Copilot 启动的每个进程设置环境变量，包括 Shell 命令。
  - [查看 Release](https://github.com/github/copilot-cli/releases)

### v1.0.116-2 / v1.0.116-1

- 检测插件与独立 MCP Server 指向同一端点的冲突，并提示如何在 `/mcp` 中禁用其中之一。
- 修复取消待处理提示后必须等待刷新，以及重连 Host 后空闲会话被误判为繁忙的问题。
- 修复 Unix 下取消前台进程时的相关异常。
  - [查看 Release](https://github.com/github/copilot-cli/releases)

### v1.0.116-0

- 优化组织托管 MCP Server 的启动提示，减少慢连接及登录警告；Connectors 除外。
- 在启动摘要中汇总需要处理的 MCP Server 状态。
- 执行 `/mcp auth <name>` 时等待认证完成后再打开浏览器，减少认证时序问题。
  - [查看 Release](https://github.com/github/copilot-cli/releases)

### v1.0.115

- ACP 编辑器支持结构化澄清问题表单。
- 默认启用 Windows 沙箱包查询，可通过 `sandbox.userPolicy.capabilities = []` 退出。
- macOS 沙箱允许执行特定 Mach 服务查询，并提供相应策略配置。
  - [查看 Release](https://github.com/github/copilot-cli/releases)

## 3. 社区热点 Issues

### 1. ACP 在附加 Shell 仍运行时重复输出最终答案

**Issue [#5569](https://github.com/github/copilot-cli/issues/5569)** · 新增

Copilot 会在异步 Shell 尚未结束时提前给出最终答案；Shell 退出后读取结果又输出一次最终答案，并为原始 `session/prompt` 再次返回 `end_turn`。问题可在 ACP 中通过 `sleep 45` 复现，可能导致客户端重复展示和错误的 turn 生命周期。

**关注价值：** 直接影响 ACP 客户端正确性、自动化工作流及结果去重。  
**社区反应：** 新问题暂无评论，但已有 1 个 👍，说明 ACP 用户已开始关注。

### 2. ACP 工具审批隐藏真实 Shell 命令

**Issue [#4335](https://github.com/github/copilot-cli/issues/4335)** · 更新

ACP 的 `toolCall.title` 当前提供自然语言摘要，而非可执行命令，导致审批弹窗无法展示实际 Shell 操作。安全上，用户可能在不了解真实副作用的情况下批准权限；产品上，也削弱了编辑器客户端的审批透明度。

**关注价值：** 涉及权限安全与可审计性，而不只是显示问题。  
**社区反应：** 1 条评论、4 个 👍，属于本次数据中较受认可的权限类问题。

### 3. Windows 下文件换行符被从 LF 改成 CRLF

**Issue [#1148](https://github.com/github/copilot-cli/issues/1148)** · 已关闭

Copilot CLI 修改 LF 文件时会将其转换为 CRLF。该问题自 1 月创建以来持续受到关注，共获得 8 条评论和 9 个 👍，是本次列表中讨论最充分的历史问题之一。

**关注价值：** 会制造无意义 Diff、污染跨平台仓库，并可能触发 CI 或 lint 检查失败。  
**社区反应：** 8 条评论、9 个 👍；目前已关闭，表明团队已介入处理。

### 4. Ubuntu Keychain 支持异常

**Issue [#2165](https://github.com/github/copilot-cli/issues/2165)** · 更新中

Ubuntu 上缺少 `secret-tool` 时，官方故障排查文档给出的安装流程存在问题，Keychain 访问仍可能失败。该问题直接影响 Linux CLI 用户的认证可用性。

**关注价值：** 登录凭据存储是 CLI 的基础能力，认证故障会阻断全部 AI 功能。  
**社区反应：** 7 条评论、23 个 👍，是本次列表中获赞最多的开放问题之一。

### 5. Agent checkpoint refs 无法关闭

**Issue [#5323](https://github.com/github/copilot-cli/issues/5323)** · 更新中

每个 Agent turn 都会在用户仓库创建 `refs/agents/<session-id>/checkpoints/turn/N`。这些引用会使用用户 Git 身份，并出现在展示全部 refs 的工具中。社区希望提供禁用开关。

**关注价值：** 涉及 Git 仓库污染、用户身份归属及企业环境中的可审计性问题。  
**社区反应：** 7 条评论、5 个 👍，需求明确且具备较强共识。

### 6. 会话可能永久卡死，队列无法排空

**Issue [#4755](https://github.com/github/copilot-cli/issues/4755)** · 更新中

当 queued-lane 消息恰好在 turn 结束时到达，空闲终止逻辑会被抑制，最终会话既不显示运行，也不接受新输入；排队消息静默失效，通常只能杀掉进程恢复。

**关注价值：** 会导致长任务、自动化 Agent 和多会话协作不可靠，属于核心运行时稳定性问题。  
**社区反应：** 3 条评论、0 个 👍；问题本身较严重，但公开讨论相对有限。

### 7. MCP OAuth 在 Entra ID 下无法使用回环回调

**Issue [#5040](https://github.com/github/copilot-cli/issues/5040)** · 更新中

远程 HTTP MCP Server 使用 Microsoft Entra ID 保护时，CLI 使用随机端口的 `127.0.0.1` 回调，Entra 返回 `AADSTS50011`。用户找不到可配置的 localhost 主机覆盖方式。

**关注价值：** 企业环境中 MCP 是核心扩展机制，OAuth 回调兼容性直接影响插件与内部服务接入。  
**社区反应：** 4 条评论、1 个 👍；已积累一定讨论。

### 8. macOS 1.0.93-0 预发布后 TLS 1.3 失效

**Issue [#5559](https://github.com/github/copilot-cli/issues/5559)** · 新增回归

用户反馈从 1.0.93-0 预发布版本开始，macOS 上连接 Jenkins MCP Server 等 TLS 1.3 端点失败，问题可能与近期网络层调整有关。

**关注价值：** 网络栈回归可能广泛影响 MCP、企业代理及远程服务，而不仅限于单一插件。  
**社区反应：** 2 条评论、0 个 👍；属于刚出现但值得持续观察的回归。

### 9. MCP Server 登录过期后无法重新认证

**Issue [#5175](https://github.com/github/copilot-cli/issues/5175)** · 更新中

Agent 建议执行 `/mcp auth FabricIQ`，但 Copilot App 没有可用的 `/mcp` 命令；设置中的 MCP 页面仍显示绿色状态，用户缺少重新登录入口。

**关注价值：** 暴露了 CLI 与 App 在命令能力、状态展示和恢复流程上的不一致。  
**社区反应：** 2 条评论、1 个 👍，问题具备明确的产品一致性诉求。

### 10. BYOK 仅支持单一外部模型提供商

**Issue [#4976](https://github.com/github/copilot-cli/issues/4976)** · 更新中

Copilot App 已支持配置多个外部模型或提供商，而 CLI 当前仅支持单套 BYOK 配置。社区希望扩展 `COPILOT_PROVIDER_*` 等配置，以实现多提供商切换。

**关注价值：** 关系到多模型工作流、成本控制、供应商容灾及企业自建模型接入。  
**社区反应：** 2 条评论、8 个 👍，是新增功能需求中认可度较高的一项。

## 4. 重要 PR 进展

> 过去 24 小时仅有 **2 条 PR 更新**，且均已关闭；没有足够数量的开放 PR 可供筛选。以下为全部重要进展。

### 1. 创建 `devcontainer.json`

**PR [#4316](https://github.com/github/copilot-cli/pull/4316)** · 已关闭

提交开发容器配置，目标是统一 Copilot CLI 本地开发环境、工具链和依赖，减少不同机器间的环境差异。

该 PR 最终关闭，可能表示方案被其他实现替代，或需要重新整理配置与评审。

### 2. 添加初始 Dev Container 配置

**PR [#4428](https://github.com/github/copilot-cli/pull/4428)** · 已关闭

补充初始 Dev Container 环境配置，并收到“LGTM”反馈。考虑到同期存在另一条同类 PR，它很可能是替代方案或合并前准备，但最终也未进入开放状态。

**整体观察：** 仓库正在加强开发环境标准化，但当前 PR 产出数量较少，功能迭代主要由发布版本和 Issue 反馈驱动。

## 5. 功能需求趋势

### ACP 与 IDE/编辑器集成成为首要方向

- 暴露会话级 `contextTier`，使其与交互模式 `/model` 选择器保持一致：  
  [#4275](https://github.com/github/copilot-cli/issues/4275)
- 审批界面必须展示真实 Shell 命令，而非高层摘要：  
  [#4335](https://github.com/github/copilot-cli/issues/4335)
- 避免异步 Shell 引发重复最终答案和错误的 `end_turn`：  
  [#5569](https://github.com/github/copilot-cli/issues/5569)
- 结构化提问、上下文选择及逐进程环境变量已开始进入发布版本。

### MCP 可靠性与身份认证

社区关注点覆盖：

- OAuth 回环回调与 Entra ID 兼容；
- 登录过期后的重新认证；
- TLS 1.3 回归；
- MCP 注册表请求缺少 `User-Agent`；
- 插件和独立 MCP Server 重复连接同一端点；
- 组织托管 Server 的启动摘要与认证时序。

代表 Issue：  
[#5040](https://github.com/github/copilot-cli/issues/5040) · [#5175](https://github.com/github/copilot-cli/issues/5175) · [#5559](https://github.com/github/copilot-cli/issues/5559) · [#5568](https://github.com/github/copilot-cli/issues/5568)

### 多模型与 BYOK 能力

- 支持多个外部模型及提供商：  
  [#4976](https://github.com/github/copilot-cli/issues/4976)
- Gemini 新模型在 `xhigh` 请求下的实际推理等级记录不一致：  
  [#5518](https://github.com/github/copilot-cli/issues/5518)
- ACP 会话级上下文窗口选择已进入新版。

### Agent、子会话与状态管理

- 禁止关闭 Agent checkpoint refs：  
  [#5323](https://github.com/github/copilot-cli/issues/5323)
- 支持配置默认 Agent：  
  [#5383](https://github.com/github/copilot-cli/issues/5383)
- 子会话应将消息发送到创建它的 Side Chat，而非主 Chat：  
  [#5570](https://github.com/github/copilot-cli/issues/5570)
- 子会话 Host 注册失败时，`create_session` 可能无限等待且无超时：  
  [#5565](https://github.com/github/copilot-cli/issues/5565)
- 在 turn 结束时到达的排队消息可能令会话永久卡死：  
  [#4755](https://github.com/github/copilot-cli/issues/4755)

### 沙箱与隐私安全

- 被 `deniedPaths` 拒绝的文件仍可能被读取并复制到 `COPILOT_HOME` 备份目录：  
  [#5564](https://github.com/github/copilot-cli/issues/5564)
- 该问题不仅是“拒绝编辑是否生效”，还涉及被拒绝文件内容是否已经落盘，属于潜在数据泄露风险。

### Windows、终端与无障碍支持

- Windows 文件换行符污染：  
  [#1148](https://github.com/github/copilot-cli/issues/1148)
- NumLock 关闭时数字键盘导航与 Delete 失效：  
  [#5171](https://github.com/github/copilot-cli/issues/5171)
- 长回复被截断或滚动后不可见：  
  [#3541](https://github.com/github/copilot-cli/issues/3541) · [#5563](https://github.com/github/copilot-cli/issues/5563)
- WSL2、tmux/screen 环境中剪贴板不可用：  
  [#4191](https://github.com/github/copilot-cli/issues/4191)
- 屏幕阅读器与 Markdown 表单渲染仍有障碍：  
  [#1573](https://github.com/github/copilot-cli/issues/1573) · [#5084](https://github.com/github/copilot-cli/issues/5084)

## 6. 开发者关注点

1. **权限提示必须透明且可审计**  
   ACP 审批标题应显示实际命令；PowerShell 精确参数授权恢复也是本轮版本重点。开发者不仅关心“是否批准”，还关心“究竟执行了什么”。

2. **会话生命周期必须稳定**  
   永久卡死、子会话消息错投主 Chat、异步 Shell 重复结束、Host 注册无超时，集中说明会话和 turn 状态机仍是高风险区域。

3. **MCP 的企业网络兼容性不足**  
   Entra OAuth、AWS WAF、TLS 1.3、过期认证和重复端点覆盖了 MCP 接入的主要障碍，尤其影响企业内部远程 Server。

4. **沙箱拒绝不能伴随数据落盘**  
   即使后续拒绝编辑，若文件已被读取并复制到会话备份，仍可能违反组织的数据保护策略。修复应关注“拒绝前是否发生敏感 I/O”。

5. **跨平台文件与终端行为需要一致性**  
   LF/CRLF、NumLock、剪贴板、文本截断等问题直接影响 Windows、WSL 和多终端用户，也是社区评论最集中的体验方向之一。

6. **多模型与可配置性需求持续增强**  
   BYOK 多提供商、默认 Agent、独立上下文大小和可关闭 checkpoint refs，表明用户希望从固定默认行为转向可组合、可治理的 Agent 工作流。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-25

## 今日速览

过去 24 小时没有新版本发布，但社区集中讨论 **OpenCode v2 的稳定性与桌面端体验**，涵盖后台服务重启、TUI 剪贴板、模型注册和 WebSocket 资源回收等问题。与此同时，核心修复 PR 密集涌现，重点解决 **WSL/Windows 兼容、服务状态恢复、长连接资源泄漏及 Ollama 输出失控**。

---

## 社区热点 Issues

### 1. 后台子代理执行恢复
[#64073：Restore Foreground Subagent Execution](https://github.com/anomalyco/opencode/issues/64073)

提出恢复前台子代理执行模式。该 Issue 获得 **28 条评论、12 个点赞**，是当日讨论最充分的议题，反映出用户对子代理执行可控性和交互可预测性的强烈关注。

### 2. 桌面端无法删除项目
[#28030：Add ability to delete projects in OpenCode Desktop](https://github.com/anomalyco/opencode/issues/28030)

桌面端支持创建、列出和更新项目，却无法删除项目，形成明显的功能闭环缺口。该 Issue 获得 **21 个点赞、20 条评论**，并已关闭，表明社区诉求明确。

### 3. 更完善的权限控制与沙箱机制
[#48411：Better execution permissions and sandboxing](https://github.com/anomalyco/opencode/issues/48411)

聚焦权限模式入口、执行控制和安全隔离能力，共收到 **16 条评论、7 个点赞**。随着 Agent 执行范围扩大，社区对细粒度授权和默认安全边界的需求明显增强。

### 4. 桌面端语音输入
[#33300：Voice/Speech Input Support for Desktop App](https://github.com/anomalyco/opencode/issues/33300)

建议为 Desktop App 增加语音输入，降低复杂提示词的输入成本。该需求获得 **16 条评论、15 个点赞**，热度较高，显示多模态交互正成为用户期待的新方向。

### 5. 自定义 Provider 消失或无法识别
[#59603：Custom provider?](https://github.com/anomalyco/opencode/issues/59603)

用户反馈升级到 2.2.0 后，自定义 Provider 不再出现在列表中。该问题与后续后台服务中的自定义 Provider 注册失败问题相互呼应，说明 Provider 配置链路仍有兼容性缺口。

### 6. 后台服务启动时不注册全局自定义 Provider
[#66166：Custom providers from global config not registered on service boot](https://github.com/anomalyco/opencode/issues/66166)

全局配置中的自定义 Provider 在后台服务启动时未注册，文件监听重载也无法修复，最终导致 `ModelUnavailableError`。问题已关闭，属于影响远程或常驻部署的关键配置缺陷。

### 7. v2.4.1 桌面端会话内无法搜索
[#65962：Ctrl+F does nothing in the conversation](https://github.com/anomalyco/opencode/issues/65962)

Windows 桌面端按 `Ctrl+F` 无响应，菜单和命令面板也缺少会话内查找入口。该问题在发布次日即被报告，反映 v2 桌面端的基础交互仍存在明显回归。

### 8. 服务重启后会话永久卡在 running
[#66289：Session stuck "running" forever after the daemon restarts mid-run](https://github.com/anomalyco/opencode/issues/66289)

后台服务在任务执行中重启后，会话状态没有被清理或恢复，随后任务可能静默挂起。问题影响后台运行的可靠性，也与命令创建响应丢失时的恢复机制相关。

### 9. 无界缓存和长连接造成资源持续占用
[#66280：Unbounded SSE, Bus, Location and Session WebSocket buffers retain resources](https://github.com/anomalyco/opencode/issues/66280)

指出 SSE、核心事件总线、Location 缓存和 Session WebSocket 缺少字节上限或空闲回收机制，可能导致长期运行的服务积累内存和套接字。该问题促使多个针对性 PR 当日落地。

### 10. 桌面端会话列表被限制为 64 条
[#64127：Session list and scoped search stop at 64 sessions per project](https://github.com/anomalyco/opencode/issues/64127)

每个项目超过 64 个会话后，列表和项目内搜索都会静默截断，导致旧会话难以访问。该问题体现了数据量增长后桌面端列表分页与检索能力不足。

---

## 重要 PR 进展

### 1. 保留显式 Traceparent
[#61386：Preserve explicit traceparent in HTTP requests](https://github.com/anomalyco/opencode/pull/61386)

避免 Effect HTTP 客户端覆盖调用方已有的 `traceparent`，避免污染分布式追踪上下文。对于接入网关、OpenTelemetry 或企业链路追踪的部署具有直接价值。

### 2. 修复 Core 自动换行配置下的快照恢复
[#66312：Keep CRLF bytes when restoring snapshots under core.autocrlf](https://github.com/anomalyco/opencode/pull/66312)

修复在 `core.autocrlf` 配置启用时，快照恢复可能把 CRLF 转换为 LF 或其他字节形式的问题。该修复有助于避免快照与工作区文件产生无意义差异。

### 3. 修复 WSL 下 TUI 文本复制
[#66310：Copy text on WSL through Windows interop](https://github.com/anomalyco/opencode/pull/66310)

针对 WSLg 与 Windows Terminal 环境下，TUI 显示“已复制”但 Windows 剪贴板内容未更新的问题，改用 Windows 互操作通道写入剪贴板。

### 4. 增加 GPT-6.2 系统提示词与路由
[#66297：Add gpt-6.2 system prompt and routing](https://github.com/anomalyco/opencode/pull/66297)

新增 GPT-6.2 系统提示词，并为 GPT-6.2 及未固定版本的 `gpt-*-latest` 配置模型路由。该 PR 已关闭，显示 OpenCode 正在快速跟进新模型发布。

### 5. 恢复创建响应丢失的 Daemon Shell 命令
[#66309：Recover a daemon shell command whose create reply was lost](https://github.com/anomalyco/opencode/pull/66309)

当 Daemon 已创建命令、但创建响应在网络中丢失时，不再直接报超时，而是从进程列表中识别并重新跟踪仍在运行的命令，改善后台执行的故障恢复能力。

### 6. 限制 Ollama 代理步骤与生成请求的输出
[#66276：Cap Ollama output on agent steps, titles and generate requests](https://github.com/anomalyco/opencode/pull/66276)

为 Ollama 的 Agent 步骤、标题生成和普通生成请求增加输出上限，避免循环模型无限输出直至资源耗尽，属于重要的稳定性与成本控制修复。

### 7. 修复切换标签后的消息导航状态
[#66307：Keep message navigation across tab switches](https://github.com/anomalyco/opencode/pull/66307)

在会话标签切换后保留当前消息焦点，而不仅是滚动位置，使 `home`、`end` 和上下消息导航从正确位置继续工作。

### 8. 限制核心事件总线队列并修补恢复路径
[#66291：Bound Bus queues and close recovery gaps](https://github.com/anomalyco/opencode/pull/66291)

为 Core Bus 订阅队列设置边界，并修复事件总线异常恢复路径中的缺口。这是解决长期服务内存占用问题的关键改动之一。

### 9. 关闭空闲 Session WebSocket
[#66293：Close idle Session WebSockets](https://github.com/anomalyco/opencode/pull/66293)

在流式会话结束或连接闲置后关闭 WebSocket，避免长期运行的服务保留无效套接字。与 SSE、Bus 缓存治理共同构成资源生命周期优化。

### 10. 限制 Location 缓存并淘汰闲置条目
[#66292：Cap Location cache and evict idle entries](https://github.com/anomalyco/opencode/pull/66292)

为 Location 缓存增加容量上限，并区分不同场景淘汰闲置条目。该 PR 与 Bus、SSE 和 WebSocket 修复共同针对常驻服务的内存与连接泄漏问题。

---

## 功能需求趋势

### 1. 权限控制与安全沙箱
[#48411](https://github.com/anomalyco/opencode/issues/48411) 代表了当前最受关注的方向之一：权限模式应更容易发现和切换，并允许用户更细粒度地控制命令、文件及网络访问。

### 2. 子代理执行模式与可观测性
[#64073](https://github.com/anomalyco/opencode/issues/64073)、[#60860](https://github.com/anomalyco/opencode/issues/60860) 以及 [#65762](https://github.com/anomalyco/opencode/pull/65762) 表明，社区希望明确前台/后台子代理模型、后台任务生命周期，并在 TUI 中看到子代理活动。

### 3. 桌面端基础体验完善
用户集中提出删除项目、会话内搜索、项目级搜索、自动化入口、远程模式、费用币种和文件树刷新等需求，说明 Desktop App 的使用体验正在从“可用”进入“精细打磨”阶段：

- [#28030](https://github.com/anomalyco/opencode/issues/28030)
- [#65962](https://github.com/anomalyco/opencode/issues/65962)
- [#64127](https://github.com/anomalyco/opencode/issues/64127)
- [#64298](https://github.com/anomalyco/opencode/issues/64298)
- [#66296](https://github.com/anomalyco/opencode/issues/66296)

### 4. Provider 与新模型兼容性
自定义 Provider 消失、Ollama 恢复失败以及 GPT-6.2 路由更新，集中反映了用户对 **快速支持新模型、稳定复用自定义后端** 的持续需求：

- [#59603](https://github.com/anomalyco/opencode/issues/59603)
- [#66166](https://github.com/anomalyco/opencode/issues/66166)
- [#62711](https://github.com/anomalyco/opencode/issues/62711)
- [#66303](https://github.com/anomalyco/opencode/issues/66303)

### 5. 多模态和语音交互
[#33300](https://github.com/anomalyco/opencode/issues/33300) 的语音输入，以及图像模型相关回归 [#66303](https://github.com/anomalyco/opencode/issues/66303)，说明 OpenCode 用户对输入输出模态完整性的期待正在提高。

### 6. 国际化与本地化展示
费用固定使用美元的问题 [#66087](https://github.com/anomalyco/opencode/issues/66087) 表明成本展示、货币和区域格式需要更完善的配置能力。

### 7. UI 个性化
当前标签页辨识度 [#66288](https://github.com/anomalyco/opencode/issues/66288) 与自定义标签颜色 [#54364](https://github.com/anomalyco/opencode/issues/54364) 显示，用户希望在多会话、多项目并行时获得更强视觉区分。

---

## 开发者关注点

### 1. 常驻服务的资源生命周期
社区最明显的技术诉求是避免后台服务长期运行时积累内存、套接字和缓存。SSE 字节量无上限、Bus 队列无界、Location 缓存不淘汰及 Session WebSocket 不关闭，是当天最集中的基础设施风险：

- [#66280](https://github.com/anomalyco/opencode/issues/66280)
- [#66291](https://github.com/anomalyco/opencode/pull/66291)
- [#66292](https://github.com/anomalyco/opencode/pull/66292)
- [#66293](https://github.com/anomalyco/opencode/pull/66293)

### 2. 崩溃、挂起与状态不一致
后台服务重启后任务卡死、Ollama 无限输出、插件重载后 Hook 停止触发，以及超长上下文下 `/goal` 卡住，反映出系统在高负载和生命周期切换场景下仍缺少可靠的状态恢复与超时保护：

- [#66289](https://github.com/anomalyco/opencode/issues/66289)
- [#66299](https://github.com/anomalyco/opencode/issues/66299)
- [#66287](https://github.com/anomalyco/opencode/issues/66287)
- [#66276](https://github.com/anomalyco/opencode/pull/66276)

### 3. Windows 与 WSL 兼容性
Windows Terminal 缩放崩溃、WSL 剪贴板失效、Windows 下会话查找失效、OpenAI 图像模型路由回归等问题，显示跨平台适配仍是 v2 版本的短板：

- [#66301](https://github.com/anomalyco/opencode/issues/66301)
- [#65913](https://github.com/anomalyco/opencode/issues/65913)
- [#65962](https://github.com/anomalyco/opencode/issues/65962)
- [#66310](https://github.com/anomalyco/opencode/pull/66310)

### 4. 配置可靠性
全局自定义 Provider 未注册、模型被标记弃用后路由消失，说明 Provider 和模型元数据在启动、重载及版本升级过程中的一致性仍需加强：

- [#66166](https://github.com/anomalyco/opencode/issues/66166)
- [#66303](https://github.com/anomalyco/opencode/issues/66303)

### 5. 可观测性与故障诊断
插件 Hook 静默失效、命令创建响应丢失、用户无法区分后台任务状态等问题，都指向同一需求：系统应提供明确的状态反馈、错误日志和可恢复机制，而不是仅表现为“界面无反应”。

- [#66299](https://github.com/anomalyco/opencode/issues/66299)
- [#66309](https://github.com/anomalyco/opencode/pull/66309)
- [#66290](https://github.com/anomalyco/opencode/pull/66290)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-25

## 1. 今日速览

今日无新版本发布，核心动态集中在 **Claude 扩展思考回放、Windows 构建与管道兼容、macOS 测试适配，以及 TUI/Swarm 状态一致性**。此外，OpenAI OAuth 的 KV 缓存未命中、本地模型陷入循环、ACP 认证声明等问题，分别进入排查或修复阶段。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

> 今日更新 Issue 恰好 10 条，以下按技术影响与社区参与度排序。

1. **[#2290] OpenAI OAuth 的 GPT-6.2-astra 工具调用频繁 KV Cache Miss**  
   `cached_tokens` 长期停留在约 8.8k–10.9k，而请求前缀约 30k，即使前缀未变化也持续无法命中缓存。该问题直接影响长上下文任务的延迟和成本，值得优先跟进。  
   https://github.com/1jehuang/jcode/issues/2290

2. **[#2289] 本地模型持续循环，疑似 Agent 陷入重复思考**  
   用户使用 Jcode 1.0.3、oMLX 0.8.2 和 M3 Max 36GB 环境时，模型会反复分析同一源码文件。问题涉及本地模型兼容性、工具循环终止策略与推理轨迹控制。  
   https://github.com/1jehuang/jcode/issues/2289

3. **[#2265] Claude 路由未回放 signed thinking，导致每轮重新推理**  
   默认 Claude/MultiProvider 路由被识别为 `"Claude"` 而非 `"anthropic"`，导致扩展思考块没有在后续工具循环中回传。模型因而重复规划并产生更长推理，对应修复 PR 已开放。  
   https://github.com/1jehuang/jcode/issues/2265

4. **[#2064] Windows 每次发布都遗留旧 Launcher 副本，单份约 139 MB**  
   `atomic_symlink_swap` 在替换正在运行的启动器时留下旧副本并持续累积，属于明确的构建资源泄漏问题。Issue 已关闭，说明修复已合入或完成处理。  
   https://github.com/1jehuang/jcode/issues/2064

5. **[#2286] Windows 空内容 Stamp 不更新 mtime，节流机制失效**  
   空 payload 仅执行截断而未触发 `WriteFile`，导致 mtime 不变，throttle 无法进入冷却状态、每轮重复执行。该问题已被关闭，Windows 行为兼容性继续得到集中修复。  
   https://github.com/1jehuang/jcode/issues/2286

6. **[#2270] `bg cancel` 后任务行仍显示 Running**  
   状态文件已经记录 `Failed / Cancelled by user`，但 TUI 状态栏直到客户端重启才移除任务行，反映后台任务状态与界面渲染之间存在同步问题。Issue 已关闭。  
   https://github.com/1jehuang/jcode/issues/2270

7. **[#2292] `jcode-base` 测试在 macOS 上失败**  
   测试套件依赖 Linux 特有的进程工具字段，并受到真实用户输入、其他 Jcode 进程及共享状态污染影响。修复 PR 同步推进，是提升跨平台 CI 稳定性的关键事项。  
   https://github.com/1jehuang/jcode/issues/2292

8. **[#2291] Swarm Worker 的 TUI 努力级别与会话记录不一致**  
   TUI 显示 `low`，会话中却记录 `swarm_effort medium`。这可能造成用户对模型成本、速度和质量产生误判，属于可复现的状态映射问题。  
   https://github.com/1jehuang/jcode/issues/2291

9. **[#2287] Jcode 无法工作的用户求助**  
   当前 Issue 仅提供截图，信息不足，仍处于 `needs-info` 状态。后续需要补充操作系统、Jcode 版本、启动方式及完整错误日志，才能进行有效定位。  
   https://github.com/1jehuang/jcode/issues/2287

10. **[#2288] 是否允许收录独立的新手教程站点**  
    社区提议在文档中链接 `learnjcode.org`，该站点提供安装、命令、MCP、Swarm 等入门内容。争议点主要在于外部链接的维护质量、非官方属性及社区审核标准。  
    https://github.com/1jehuang/jcode/issues/2288

### 社区反应概览

- 今日 Issues 共收到约 **7 条评论**，但多数没有 👍，说明多数反馈仍处于技术确认或问题补全阶段。  
- 社区提交者和维护者积极处理跨平台问题，Windows 与 macOS 相关议题占据较大比例。  
- Provider 质量问题比单纯界面问题更受关注，尤其是缓存效率、推理连续性和本地模型循环。

## 4. 重要 PR 进展

1. **[#2266] 修复 Claude MultiProvider 路由的 signed thinking 回放**  
   修正 Provider 名称判断导致的推理内容丢失，避免工具循环每一步都从头规划；对应关闭 #2265。  
   https://github.com/1jehuang/jcode/pull/2266

2. **[#1819] 汇总 Fork 贡献并整合上游评审修复**  
   将多个 Fork PR 合并为单个 rollup，并纳入上游 master 的评审调整，用于降低重复 PR 和合并成本。该 PR 历史较长、变更范围较大，合并前应重点检查冲突与回归覆盖。  
   https://github.com/1jehuang/jcode/pull/1819

3. **[#2240] 防止未完成的 Swarm lane 被自动标记完成**  
   修复关联 todo 仍为 `in_progress` 时 worker 提前结束、计划项却被转为 `done` 的问题，避免依赖任务被错误提前释放。该 PR 已关闭。  
   https://github.com/1jehuang/jcode/pull/2240

4. **[#2294] ACP 声明 terminal login 认证方式**  
   为 `jcode acp` 增加 `authMethods` 中的 terminal 类型，解决 ACP Registry 因认证列表为空而拒绝 Agent 的问题，提升 Jcode 的协议兼容性。  
   https://github.com/1jehuang/jcode/pull/2294

5. **[#2293] 修复 `jcode-base` 测试在 macOS 上失败**  
   调整 Linux-only `ps` 字段、真实用户输入、并行配置变更及 daemon 状态泄漏相关测试，目标是让 jcode-base 测试具备稳定的 macOS 跨平台支持。  
   https://github.com/1jehuang/jcode/pull/2293

6. **[#2264] Windows Named Pipe 按完整性级别拆分并在拒绝访问时回退**  
   修复 Windows 管道名称冲突导致的 `Access is denied`，通过隔离不同完整性级别的 pipe，并在访问被拒时采用 fallback 路径。  
   https://github.com/1jehuang/jcode/pull/2264

7. **[#2284] 仅在局部重绘可承载时启用 TUI 动画节奏**  
   优化 partial repaint 调度，避免在只能进行低成本动画刷新时仍按高频帧率唤醒运行循环，目标在于降低无效 CPU 消耗并改善“菜单卡住”现象。  
   https://github.com/1jehuang/jcode/pull/2284

> 今日共更新 7 个 PR；当前开放 PR 中，#2266、#2294、#2293、#2264 和 #2284 更直接关联近期 Issue。  
> PR 总览入口：https://github.com/1jehuang/jcode/pulls

## 5. 功能需求趋势

1. **Provider 与模型兼容性仍是核心需求**  
   社区集中反馈 Claude 推理回放、OpenAI OAuth 缓存命中、本地模型循环、模型 effort 显示不一致等问题。用户期待不同 Provider 之间具备一致、透明且可诊断的行为。

2. **长上下文与缓存效率**  
   GPT-6.2-astra 的 KV Cache 频繁失效会显著增加等待时间和调用成本。缓存诊断、前缀稳定性及缓存 token 统计是后续重点。

3. **跨平台可靠性**  
   Windows 构建、命名管道、Stamp 时间戳，以及 macOS 测试失败连续出现，表明跨平台稳定性仍是项目工程投入重点。

4. **TUI 与后台任务状态一致性**  
   取消任务后仍显示 Running、Swarm worker effort 显示不一致，反映状态文件、Session 记录和前端渲染之间需要更可靠的状态同步。

5. **Swarm 工作流正确性**  
   未完成 lane 被自动完成会破坏任务依赖关系。社区不仅关注单任务执行，更关注多 Agent 调度、任务完成判定和依赖释放时机。

6. **ACP 生态兼容与 Agent 接入**  
   ACP Registry 要求明确认证方式，说明 Jcode 正持续加强与 Agent 协议生态及外部客户端的互操作性。

7. **新手文档和独立教程生态**  
   外部教程站点获准链接的讨论，反映用户对系统化入门资料、命令参考、MCP 与 Swarm 使用指南的需求持续增长。

8. **TUI 动画与资源效率**  
   PR #2284 表明社区不仅关注视觉效果，也关注局部重绘、运行循环唤醒和 CPU 使用效率。

## 6. 开发者关注点

- **推理上下文必须跨工具调用保留**：Claude signed thinking 丢失会导致重复规划和额外 token 消耗，是 Provider 适配中的关键正确性问题。  
- **缓存命中需要可解释、可诊断**：前缀未变化却持续 Cache Miss，意味着缓存键构造、会话重放或 Provider 响应统计可能仍有偏差。  
- **本地模型需要可靠的循环终止机制**：重复分析同一文件说明 Agent 在工具调用、任务完成判定和重复输出检测方面仍需加强。  
- **跨平台语义必须一致**：Windows 与 macOS 的文件时间戳、进程测试、管道权限和发布行为曾明显偏离 Linux。  
- **后台状态应做到实时一致**：任务取消、Swarm effort 等信息需要在状态文件、Session 和 TUI 三者间保持同步。  
- **Agent 调度不能提前宣告完成**：关联任务仍在进行时必须保留 lane 状态，防止依赖链被错误释放。  
- **协议兼容需要满足外部校验器**：ACP 认证声明等细节会直接影响第三方 Registry 和客户端集成。  
- **高频反馈需要补充诊断信息**：对于 #2287 这类仅含截图的问题，后续应提供版本、系统环境、复现步骤和日志模板，以缩短问题定位周期。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-25

## 今日速览

过去 24 小时无新版本发布，但社区集中推进了流式传输性能、模型兼容性、Windows 工具链、错误观测与 MCP 协议等修复。讨论度最高的议题是 `cacheWarming: "idle"` 在扩展处理 `turn_end` 后失效，17 条评论显示其对缓存预热和长会话稳定性影响明显；与此同时，多项 PR 已合入或进入评审，另有多个关键问题仍保持开放。

---

## 社区热点 Issues

### 1. `cacheWarming: "idle"` 在扩展处理 `turn_end` 后静默失效
[#10956](https://github.com/earendil-works/pi/issues/10956)

- `cacheWarming: "idle"` 无法按预期触发，用户记录到 507 次决策事件全部停留在 `continuationProbability: 1`，没有出现预期的 0.15。
- `/session` 显示运行结束后立即变成 `Inactive (conversation context changed)`。
- 该问题导致缓存预热策略失效，影响长会话续接、模型响应延迟及 token 成本。
- 以 **17 条评论、5 个赞**成为今日最热门议题，表明其对扩展作者和缓存优化用户影响较大。

### 2. MCP OAuth 刷新失败后，每次工具调用都会重复刷新
[#12428](https://github.com/earendil-works/pi/issues/12428)

- MCP access token 过期且 refresh 失败后，Pi 会保留过期 token，并在每次工具调用时重试刷新。
- 这可能造成额外网络请求、延迟和日志噪声。
- 对依赖 OAuth 的远程 MCP 服务尤其重要；问题仍为开放状态，已有社区成员提交修复贡献。

### 3. 注册工具会意外恢复 `--tools` 中已禁用的工具
[#12399](https://github.com/earendil-works/pi/issues/12399)

- 用户通过 `--tools read,grep` 限定工具范围后，扩展注册一个无关工具会让 `grep` 重新出现在模型可用工具集中。
- 这属于工具权限边界泄漏，可能让模型调用用户明确禁用的能力。
- 修复 PR 被自动关闭后，社区正在请求维护者批准贡献者重新提交，参见 [#12521](https://github.com/earendil-works/pi/issues/12521)。

### 4. Windows 退出后残留鼠标与 Kitty 输入报告
[#12133](https://github.com/earendil-works/pi/issues/12133)

- Pi 退出后，Windows Terminal 仍可能启用 mouse/Kitty 报告，移动鼠标或按键时 PowerShell 会输出大量转义字符。
- 这是明显的终端状态清理问题，会污染用户 shell，并影响后续命令行操作。
- Issue 已关闭，说明相关清理逻辑已得到处理。

### 5. Git for Windows 位于非标准目录时无法识别
[#12408](https://github.com/earendil-works/pi/issues/12408)

- Pi 只探测 `%ProgramFiles%` 和 `%ProgramFiles(x86)%` 下的 Git Bash，随后可能错误选择 `System32\bash.exe`。
- 当 WSL 未启用时，Bash 工具调用会直接失败；即使 WSL 可用，也可能进入错误的执行环境。
- 对自定义工具链、企业安装目录和非标准 Windows 环境影响明显。

### 6. `gemini-4-neon` 经常在流式响应中途停止
[#12407](https://github.com/earendil-works/pi/issues/12407)

- 新模型 `gemini-4-neon` 的输出可能中途终止，且无法自动恢复。
- 报告指出 OpenRouter 会将 `MALFORMED_RESPONSE` 规范化为 OpenAI 风格错误，可能使 Pi 丢失原始错误语义。
- 该问题涉及新模型接入、流式错误映射和自动恢复机制。

### 7. Radius 的 `recursive/flint` 请求返回 402
[#12294](https://github.com/earendil-works/pi/issues/12294)

- `radius` provider 调用 `recursive/flint` 时返回 HTTP 402，并展示为 `Describe-file request failed`。
- 错误信息把付费或容量问题包装成文件描述失败，诊断体验较差。
- 社区重点关注 provider、模型描述机制和 HTTP 错误透传之间的兼容性。

### 8. RPC 模式下 `session_start` 扩展对话框无法响应
[#12147](https://github.com/earendil-works/pi/issues/12147)

- RPC 模式收到 `extension_ui_request` 后，没有读取客户端返回的 `extension_ui_response`。
- 进程约 20ms 后以状态码 0 退出，导致无人值守或程序化调用无法完成初始化。
- 该问题限制了 RPC 模式与交互式扩展的组合使用，目前仍为开放状态。

### 9. Durable 中止对话时未返回已撤回的输入 ID
[#12445](https://github.com/earendil-works/pi/issues/12445)

- `Conversation.abort(context)` 当前返回 `Promise<void>`，调用方无法直接获知哪些已排队输入被撤回。
- 调用方只能自行记录快照并检查状态，无法覆盖中止过程中并发进入的新输入。
- 对任务队列、审计、重试和用户提示而言，这是 Durable API 的一致性缺口。

### 10. Bash 命令日志可能递归匹配自身并耗尽临时目录
[#12516](https://github.com/earendil-works/pi/issues/12516)

- 当命令搜索 `/tmp/pi-bash-*.log` 时，日志器可能把自己的日志文件再次捕获，形成递归增长。
- 社区实例中日志增长到 **24.4 GiB**，最终在 32 GiB tmpfs 上触发 `ENOSPC` 并使 Pi 崩溃。
- 这是高影响资源耗尽问题，说明临时文件、日志重定向和命令输出捕获之间需要更严格的隔离。

---

## 重要 PR 进展

### 1. 大型流式行与事件改为线性时间读取
[#12451](https://github.com/earendil-works/pi/pull/12451)

- 修复 MCP SSE 大型不完整事件不断拼接并重复扫描的问题。
- 新实现避免每个 chunk 都复制或扫描整个缓冲区，适用于 MCP、AI provider 和 agent 流式处理。
- 对应修复 [#12224](https://github.com/earendil-works/pi/issues/12224)，是本期性能价值较高的 PR。

### 2. 支持 MCP 无状态协议 `2026-07-28`
[#12479](https://github.com/earendil-works/pi/pull/12479)

- 为 `pi-mcp` 和 Pi MCP 扩展加入 MCP `2026-07-28` 无状态协议支持。
- 新服务无需每次连接都执行 `initialize` 握手，也无需保持 HTTP session。
- 保留对旧协议的兼容，显示 Pi 正在跟进 MCP 协议演进。

### 3. 新增 Copilot `gpt-6-luna-decisions`，并按账户过滤分类模型
[#12495](https://github.com/earendil-works/pi/pull/12495)

- 加入 `gpt-6-luna-decisions` 模型支持。
- 根据 GitHub Copilot 账户目录中的 `billing.restricted_to` 过滤分类模型。
- 修复 Business 账户调用受限模型时反复收到 HTTP 400 的问题，对应 [#12395](https://github.com/earendil-works/pi/issues/12395)。

### 4. 修复 GitHub Copilot 新启用模型刷新后仍被隐藏
[#12325](https://github.com/earendil-works/pi/pull/12323)

- 修复 `pi update --models` 未同步 `availableModelIds` 的问题。
- 新发布或由管理员启用的 Copilot 模型，现在可在刷新模型目录后正常显示。
- 同时覆盖 token 过期导致的回归场景。

### 5. 在 `openai-completions` 中回放 Copilot `reasoning_opaque`
[#12505](https://github.com/earendil-works/pi/pull/12505)

- 处理 Copilot 在 `reasoning_text` 后发送单个 `reasoning_opaque` 增量的情况。
- Pi 现在保留并在后续请求中回放该值，避免 reasoning 状态丢失。
- 适用于通过 OpenAI Completions 接口接入的 Claude/Copilot 模型。

### 6. SDK 适配器向 `onResponse` 报告 HTTP 4xx/5xx
[#12502](https://github.com/earendil-works/pi/pull/12502)

- 修复 SDK 将 HTTP 错误直接抛为异常，导致 `onResponse` 与 `after_provider_response` 不触发的问题。
- 扩展现在可以统一观察成功响应、限流和服务端错误。
- 对应 [#12376](https://github.com/earendil-works/pi/issues/12376)，也有配套文档 PR [#12503](https://github.com/earendil-works/pi/pull/12503)。

### 7. 从 models.dev 目录识别 Claude 禁用 thinking 的能力
[#12489](https://github.com/earendil-works/pi/pull/12489)

- 不再仅依赖手写 provider 黑名单判断模型能否关闭 thinking。
- Claude Opus 5.5、Sonnet 5.5 等模型会发送兼容的 `between_tools` 配置。
- 修复 GitHub Copilot 上关闭 thinking 返回 HTTP 400 的问题，对应 [#12429](https://github.com/earendil-works/pi/issues/12429)。

### 8. Windows 从 PATH 查找 Git Bash
[#12494](https://github.com/earendil-works/pi/pull/12494)

- 在标准 Program Files 路径之外继续搜索 PATH 中的 Git for Windows 安装。
- 避免误用 `System32\bash.exe`，防止命令意外进入 WSL。
- 面向自定义 Git 安装路径和跨环境 Windows 工具链。

### 9. 启动对话框报告 OSC 7501 blocked 状态
[#12487](https://github.com/earendil-works/pi/pull/12487)

- 项目信任、首次设置等启动对话框会发送 `blocked` 状态报告。
- 终端集成可以据此识别 Pi 正等待用户授权或输入。
- 对应 [#12439](https://github.com/earendil-works/pi/issues/12439)；另有 PR 进一步细化 permission/question/auth 类型，见 [#12490](https://github.com/earendil-works/pi/pull/12490)。

### 10. 修复上下文溢出标识符的误匹配
[#12438](https://github.com/earendil-works/pi/pull/12438)

- `request_too_large` 现在必须作为完整标识符匹配。
- 避免将 `my_plugin_request_too_large_flag` 等普通错误误判为上下文溢出。
- 防止无关 HTTP 400 请求错误错误进入“压缩并重试”恢复流程。

---

## 功能需求趋势

### 模型与 Provider 兼容性

- 社区持续跟进新模型接入，包括 Ant Ling 3.x、Copilot 新模型、决策模型及 Gemini 新版本。
- 更关注模型能力元数据是否准确，例如 thinking 开关、账户权限和模型目录同步。
- 期待 Provider 错误码、原始响应和 malformed response 能完整透传。相关 PR：[#11800](https://github.com/earendil-works/pi/pull/11800)、[#12495](https://github.com/earendil-works/pi/pull/12495)、[#12325](https://github.com/earendil-works/pi/pull/12325)。

### MCP 协议、认证与稳定性

- MCP 无状态协议支持成为重点方向。
- OAuth token 刷新失败后的退避、熔断和错误缓存需求明显。
- 流式 MCP 的大事件处理性能受到关注。相关讨论：[#12479](https://github.com/earendil-works/pi/pull/12479)、[#12428](https://github.com/earendil-works/pi/issues/12428)、[#12451](https://github.com/earendil-works/pi/pull/12451)。

### 缓存、上下文压缩与长会话管理

- `cacheWarming: "idle"` 与自定义消息、压缩消息之间的交互是核心问题。
- 社区希望压缩后重新检查输出预算，避免超限或无提示失败。
- 还需修正不进入模型的 `!!` 输出被计入 token 估算的问题。相关 Issues：[#10956](https://github.com/earendil-works/pi/issues/10956)、[#12482](https://github.com/earendil-works/pi/issues/12482)、[#12513](https://github.com/earendil-works/pi/issues/12513)。

### 扩展、工具权限与 SDK 能力

- `--tools` 禁用规则必须稳定，不能因扩展注册其他工具而恢复。
- Durable 需要提供暂停分发、排空执行以及中止后返回撤回 ID 等控制能力。
- SDK 调用方希望独立配置 Provider session ID 与存储 session ID，以兼顾 fork 和 prompt cache。相关 Issues：[#12399](https://github.com/earendil-works/pi/issues/12399)、[#12512](https://github.com/earendil-works/pi/issues/12512)、[#12445](https://github.com/earendil-works/pi/issues/12445)、[#12307](https://github.com/earendil-works/pi/issues/12307)。

### Windows 与终端集成

- Windows 用户集中反馈 Git Bash 定位、鼠标报告残留、终端状态清理等问题。
- OSC 7501、OSC 52 等终端协议的可观测性和阻塞状态报告逐渐完善。
- 需求重点是跨终端兼容、异常退出后的状态恢复，以及非标准安装路径支持。

### Code Mode 与 Agent 可靠性

- Code Mode 需要更丰富的 schema 约束表达和可定位的脚本错误。
- 工具调用和会话中断提示需要更准确，避免模型盲目重试。
- Bash 日志、剪贴板和输出捕获需要增加超时、自排除与资源上限保护。

---

## 开发者关注点

1. **错误必须可观测、可诊断**  
   开发者希望统一看到 HTTP 状态码、Provider 原始响应、工具调用失败原因以及流式错误终止点，而不是经过多层包装后只剩模糊提示。

2. **长会话的缓存与压缩行为必须稳定**  
   扩展、custom message、compaction、idle cache warming 和工具批次之间的状态转换较复杂，容易产生“界面显示空闲但预热未触发”或 token 估算失真的问题。

3. **工具权限不能被间接恢复**  
   CLI 显式禁用的工具应保持禁用；扩展注册、模型刷新和内部状态重建都不应扩大工具权限。

4. **流式处理需要避免平方级复杂度**  
   MCP SSE、超长行和大型事件应采用增量缓冲，避免不断拼接、复制和重新扫描。

5. **Windows 非标准环境必须可用**  
   Git Bash 路径、WSL launcher 冲突、终端输入模式残留等问题对 Windows 企业和高级用户影响较大。

6. **资源保护需求上升**  
   Bash 自匹配日志可增长至数十 GiB，剪贴板 helper 可阻塞数秒，社区期待超时、自排除、文件描述符和磁盘使用上限。

7. **扩展作者需要明确的生命周期契约**  
   `session_start`、`turn_end`、RPC 模式、Durable shutdown 等边界场景中，扩展需要知道哪些回调会触发、响应由谁消费，以及关闭时如何排空任务。

8. **贡献流程本身成为摩擦点**  
   多个已经测试过的修复因 contributor approval gate 被自动关闭，说明社区修复意愿较强，但审核和重新开放 PR 的流程仍有优化空间。参见 [#12521](https://github.com/earendil-works/pi/issues/12521)。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
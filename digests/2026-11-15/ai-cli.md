# AI CLI 工具社区动态日报 2026-11-15

> 生成时间: 2026-11-15 05:47 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-15**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

当前 AI CLI 的竞争重点正从“增加模型与工具能力”转向**长任务可靠性、上下文治理、权限可解释性和跨端一致性**。Claude Code 与 Codex 分别围绕上下文可观测性、Cloud 会话和 Hook 生命周期推进；Gemini CLI、OpenCode 与 pi 则集中解决子代理终止状态、工具并发、异常恢复等 Agent 工程问题。与此同时，Windows、浏览器自动化、MCP、OpenAI-compatible Provider 等基础适配仍是多款工具的共同短板。总体看，生态已进入“**从功能扩张期进入可靠性与治理期**”的阶段，成熟度开始分化。

---

## 2. 各工具活跃度对比

> 注：部分日报仅提供更新数而未提供新建数；下表以“过去 24 小时更新量”为统一口径。Release 均以日报披露为准。

| 工具 | 今日 Issues | 今日 PRs | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个热点 Issue | 4 个 PR 更新 | 无 | 中高 |
| **OpenAI Codex** | 10 个热点 Issue | 10 个 PR | 无 | 高 |
| **Gemini CLI** | 50 个 Issue 更新 | 13 个 PR 更新 | 无 | **高** |
| **GitHub Copilot CLI** | 10 个热点 Issue | 0 个 PR 更新 | 无 | 中 |
| **Kimi Code CLI** | 0 | 0 | 无 | **低／无活动** |
| **OpenCode** | 50 个 Issue 更新 | 50 个 PR 更新 | 无 | **最高** |
| **jcode** | 7 个 Issue 更新 | 24 个 PR 更新 | 无 | 高，且以修复为主 |
| **pi** | 10 个热点 Issue | 4 个 PR 更新 | 无 | 中高 |

### 结论

- **OpenCode**以 50 个 Issue、50 个 PR 更新成为今日最活跃项目，且升级回归、Provider、子代理、桌面端等问题并行推进。
- **Gemini CLI**和 **jcode**同样保持高更新量；前者侧重 Agent 安全与子代理，后者主要处理 Windows 进程、CI、终端兼容和 Provider 适配。
- **Codex** PR 密度较高，重点明显偏向 Cloud 会话、预算控制、Hook 和 TUI 历史。
- **Kimi Code CLI**过去 24 小时无活动，短期可见度和迭代信号显著落后。
- 今日所有工具均无新版本发布，说明当前社区讨论更多反映的是**持续集成中的问题修复和架构演进**，而非集中发版。

---

## 3. 共同关注的功能方向

### 3.1 Agent / Subagent 生命周期可靠性

这是多个工具最集中的共同方向：

- **Gemini CLI**：子代理达到 `MAX_TURNS` 后仍被报告成功；通用代理无限等待；Browser Subagent 配置不生效。
- **OpenCode**：子代理 `sessionID` 续接失败；权限与问答等待状态在重启后丢失；JSON 输出遗漏子代理事件；父会话无法直接 steer 子代理。
- **pi**：工具并发顺序错误、取消时出现未捕获 `AbortError`、工具读取记录不可见。
- **Codex**：Agent 概览刷新状态跨后端串扰，预算耗尽后仍可能启动工具工作。
- **Claude Code**：dedupe Agent 后台提前结束导致任务被截断。

**共同诉求：**子代理必须有准确终止原因、失败传播、状态持久化、可恢复机制和可观测事件流，不能把“中断”“预算耗尽”包装为“成功”。

---

### 3.2 上下文治理与 Token 成本控制

- **Claude Code**：需要判断 `MEMORY.md` 是完整加载、截断还是未加载，并支持条件式 `/compact`；自动摘要还可能丢失关键约束。
- **Codex**：TUI 启动加载其他线程完整 rollout，导致数 GB 内存占用；社区同时推动分数型 rollout 预算。
- **Gemini CLI**：AST 感知文件读取、动态裁剪工具、大型工具输出截断、持久化任务状态替代对话式 Todo。
- **OpenCode**：限制请求内图片数量，避免长会话超过 vLLM 等后端约束。
- **pi**：约 12 万条上下文在压缩后可能栈溢出，并新增 `toolOutput.maxBytes`、`toolOutput.maxLines`。

**共同诉求：**上下文不仅要“能压缩”，还必须做到**可观察、可预测、不丢关键约束，并对历史数据进行惰性加载和分层治理**。

---

### 3.3 权限、安全边界与企业策略透明化

- **Claude Code**：Auto mode 误拦账户所有者明确授权的任务与跨设备文件传输。
- **Codex**：用户批准 `require_escalated` 后，网络或 Browser 仍可能受旧沙箱策略限制。
- **Gemini CLI**：修复 “Always allow” 将污染命令持久化，以及 YOLO 模式解析失败时自动放行的问题。
- **Copilot CLI**：checkpoint refs 持续写入用户仓库且缺少关闭开关；远程环境被组织策略阻止但缺少解释。
- **OpenCode**：权限请求和问答状态仅保存在内存，服务重启后无法恢复。
- **jcode**：Windows 孤儿 keepalive 无限重启 daemon，曾出现 3,733 个进程和 14.26 GB 内存占用。

**共同诉求：**权限系统应遵循**最小授权、失败关闭、明确作用域、可解释来源、可恢复状态**，并避免对用户仓库和后台进程产生隐式影响。

---

### 3.4 会话恢复、跨端同步与历史一致性

- **Codex**：Windows 云会话无法恢复；Cloud 环境无法发现；iOS 任务列表为空但搜索可见；macOS 重启后 Browser 状态错误。
- **Claude Code**：Cowork 云会话进入 deprecated mode，Hook 和命令不执行；Artifact 跨账户共享失效。
- **Copilot CLI**：`/restart` 后会话无法恢复，并提示会话在其他位置运行。
- **OpenCode**：消息历史未按会话隔离；桌面端归档会话难以找回。
- **pi**：超大上下文压缩后无法加载。

**共同诉求：**会话状态需要在 CLI、桌面端、移动端及 Cloud 后端之间保持一致；导航失败时不能丢失当前草稿、回复流或待处理审批。

---

### 3.5 MCP 与 Provider 兼容性

- **Copilot CLI**：非交互 MCP 调用挂起、`text/plain` blob 内容为空、stdio MCP 在会话切换时被丢弃。
- **OpenCode**：为远程 MCP 增加逐服务器 TLS 信任，并推进 OpenAI-compatible Provider 模型自动发现。
- **jcode**：修复 Antigravity 工具 Schema、OpenAI-compatible reasoning 往返和模型级能力配置。
- **pi**：OpenAI Completions 丢失 SSE 错误码，classifier 模型类型映射错误。
- **Gemini CLI**：工具过多触发 400，推动动态工具裁剪。

**共同诉求：**Provider 和 MCP 层需要统一的**能力发现、错误分类、协议往返和兼容性测试**，减少依赖模型名称或静态目录进行能力猜测。

---

### 3.6 浏览器与 Computer Use 稳定性

- **Codex**：Windows Computer Use 截图结束后权限和边框未释放；Browser 被 Work 设置阻止；主 Agent 无法获取内置 Browser。
- **Gemini CLI**：Wayland 下 Browser Subagent 异常终止；配置覆盖不生效；会话锁缺少接管恢复。
- **OpenCode**：启动阶段模型能力发现未完成即发起请求。

**共同诉求：**浏览器能力不仅要“被发现”，还必须做到权限及时释放、配置真实生效、异常后自动恢复，并清楚区分应用、插件、会话和企业策略状态。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争定位 |
|---|---|---|---|
| **Claude Code** | 长上下文、CLAUDE.md、插件 Hook、Cowork/桌面端、Auto mode | 高频编码用户、Claude 生态开发者、企业团队 | 强上下文与 Agent 工作流；重点补齐压缩可观测性、插件一致性和权限信任 |
| **OpenAI Codex** | Cloud 会话、多后端路由、Browser/Computer Use、预算与 Hook | 大型项目、远程开发、跨 App/CLI/IDE 用户 | 多后端平台化路线；当前核心是会话路由、资源预算和 Hook 可观测性 |
| **Gemini CLI** | Subagent、Skills、Browser Agent、ACP、Shell 安全 | Gemini 生态、自动化编排及安全敏感用户 | 原生工具调用与强 Shell 能力并重；安全修复、AST 工具和并行执行是差异化重点 |
| **Copilot CLI** | GitHub 身份与仓库集成、远程环境、Cloud Agent、模型档位 | GitHub 用户、Copilot 订阅者、仓库原生 Agent 用户 | 深度绑定 GitHub 生态；短板集中在认证刷新、MCP、套餐适配和非交互可靠性 |
| **Kimi Code CLI** | 今日无新增动态，暂无足够信号判断 | 中文及 Kimi 生态用户 | 当前社区活跃度偏低，短期产品和技术路线信号不足 |
| **OpenCode** | 多 Provider、桌面端、多 Agent、TUI、MCP | 多模型用户、Agent 开发者、桌面端用户 | 开源、多后端、高度可扩展；当前重点是 v2.3.0 回归修复和子代理协议完善 |
| **jcode** | Windows/TUI、终端富媒体、Swarm、Provider、CI 成本治理 | Windows 多窗口用户、终端重度用户 | 强调终端复用器和本地多 Agent；工程修复与自动化维护占比突出 |
| **pi** | Codemode、工具编排、长上下文、模型适配 | 扩展开发者、远程开发及高度定制化用户 | 扩展 API 和精细工具控制优先；强调工具输出截断、可编程工作流和容器化 |

### 定位差异总结

- **平台型**：Codex 强调多后端和跨端统一。
- **生态型**：Claude Code 围绕 Claude、Cowork、插件和上下文；Copilot CLI 围绕 GitHub、仓库与订阅体系。
- **开放 Provider 型**：OpenCode、jcode、pi 更重视自定义 Provider 和模型能力适配。
- **Agent 工程型**：Gemini CLI、OpenCode、pi 在子代理协议、终止语义和任务编排上投入最集中。
- **安全与治理型**：Gemini CLI、Codex、Claude Code 都在加强权限解释、预算控制和 Hook 生命周期。

---

## 5. 社区热度与成熟度

### 社区热度

1. **OpenCode：最高**  
   50 个 Issue 与 50 个 PR 更新，且议题覆盖升级回归、子代理、桌面端、Provider、MCP 和 TUI，说明项目处于高强度并行开发阶段。

2. **Gemini CLI：高**  
   50 个 Issue、13 个 PR 更新，主题围绕 Subagent、Browser、ACP 和 Shell 安全，产品覆盖面快速扩大。

3. **jcode：高，但偏维护修复**  
   24 个 PR 更新远高于 7 个 Issue，反映团队正在集中清理 Windows、CI、终端和 Provider 兼容问题。

4. **Codex：高且结构化**  
   热点问题和 PR 都围绕 Cloud、预算、Hook、历史加载，工程治理方向非常明确。

5. **Claude Code、Copilot CLI、pi：中高**  
   更新量较低，但热点问题集中且关键，多涉及上下文、权限、会话恢复和 Agent 终止语义。

6. **Kimi Code CLI：低**  
   24 小时无更新，短期社区能见度和反馈速度不足。

### 成熟度判断

- **相对成熟**：Codex、Claude Code。  
  已形成较完整的产品面，当前主要矛盾是跨端一致性、权限语义和长任务可靠性，而非缺少基础功能。

- **快速迭代**：OpenCode、Gemini CLI、jcode、pi。  
  功能扩展速度明显，但版本回归、会话协议、Provider 兼容和进程生命周期仍需补强。

- **生态成熟但运行稳定性待提升**：Copilot CLI。  
  与 GitHub 平台结合紧密，但认证刷新、MCP 非交互调用和套餐模型适配仍暴露出较明显的基础可靠性缺口。

- **社区信号不足**：Kimi Code CLI。  
  不能仅凭无活动判断产品质量，但至少说明其在当日开发者生态中的可见度较低。

---

## 6. 值得关注的趋势信号

### 6.1 “Agent 能力竞争”正在转向“状态真实性竞争”

越来越多工具已经能够调用模型、浏览器和子代理，但用户更关心的是：

- 工具究竟是否执行；
- 子代理究竟是否完成；
- 配置是否真正生效；
- 权限是否真正升级；
- 会话是否真正恢复。

因此，**准确的终止状态、错误传播和状态持久化**正成为比新增工具数量更重要的差异化指标。

### 6.2 上下文管理将成为 CLI 的核心基础设施

Claude Code 的记忆与压缩、Codex 的 rollout 预算、Gemini CLI 的 AST 工具、OpenCode 的图片上限、pi 的输出截断，共同表明下一阶段竞争焦点是：

> 在有限上下文窗口内，可靠保留关键信息，并避免历史、工具定义和工具输出挤占模型注意力。

企业级采购和重度编码用户应重点考察工具是否提供**上下文用量、截断原因、压缩状态和预算余量**等可观测能力。

### 6.3 权限系统必须从二元拦截升级为“上下文感知”

静态风险分类正在误伤合法自动化：Claude Code 拦截账户所有者授权，Codex 审批后网络仍受限，Gemini CLI 的持久化放行规则过宽。

更合理的权限模型应结合：

- 操作发起者及账户所有权；
- 当前会话和组织的明确授权；
- 数据流向与目标路径；
- 审批作用域；
- 企业策略来源；
- 是否可逆、是否只发生一次。

### 6.4 Windows 成为当前最明显的跨工具质量洼地

Codex 的 Cloud 恢复、Browser 发现和 Computer Use；OpenCode 的 renderer 崩溃与 PowerShell pipe mode；jcode 的共享服务断连和孤儿进程；pi 的安装器同名误判——Windows 问题已不再是单项目偶发缺陷，而是生态级工程债务。

**建议开发团队将 Windows 纳入统一发布门禁，重点覆盖：**路径序列化、进程回收、终端管道、企业策略、插件生命周期、图形渲染和会话持久化。

### 6.5 MCP 已从“能连接”进入“协议一致性竞争”

下一阶段 MCP 的关键不是增加更多服务器，而是确保：

- 启动完成状态可判断；
- 非交互调用不会挂起；
- Blob 和 MIME 内容能正确交给模型；
- 私有 CA/TLS 策略可配置；
- 会话切换不会静默丢失服务器；
- 工具失败有明确错误码与恢复路径。

### 6.6 OpenAI-compatible Provider 正在成为事实上的重要兼容层

OpenCode、jcode、pi 的多项修复都围绕自定义 Provider、模型发现、reasoning 参数、Responses API、Schema 方言及图片限制展开。

开发团队不应再通过模型名称猜测能力，而应优先采用：

- 服务端模型元数据；
- 能力探测结果；
- Provider 级默认值与模型级 override；
- 请求参数往返测试；
- 明确的协议错误分类。

### 6.7 自动编排仍处于“能调用，但不够主动”的阶段

Gemini CLI 反馈模型不愿主动使用 Skills/Subagents，Codex 和 Claude Code 的多 Agent 生命周期也仍不够稳定。短期内，**显式任务路由比完全依赖模型自主选择更可靠**。生产级 Agent 平台应提供可配置的委派策略、预算上限、失败回退和人工接管入口。

---

## 决策建议

### 对企业选型者

优先考察以下指标，而非仅比较模型和终端 UI：

1. 子代理状态是否可信；
2. 权限审批是否可解释、可恢复；
3. 会话在 CLI、桌面端和 Cloud 间能否一致恢复；
4. MCP 与企业身份系统是否能在非交互模式稳定运行；
5. 是否提供上下文、预算和 Hook 的可观测数据。

### 对自建 Agent 的开发者

近期最值得投入的工程方向是：

- **状态机化**：区分运行、成功、取消、超限、失败和预算耗尽；
- **事件流标准化**：为工具、子代理、重试和压缩建立统一事件；
- **持久化阻塞状态**：审批、问答和任务恢复不能只放在内存；
- **上下文分层与截断**：保留原始输出，同时限制模型可见内容；
- **Provider 契约测试**：覆盖 SSE 错误、Schema、reasoning、图片和启动时序；
- **Windows 回归测试**：将其作为一等平台，而非发布前补测。

总体而言，今日生态并未出现新的版本竞赛，而是集中暴露出 AI CLI 从“可用”走向“可长期托管”必须解决的基础工程问题。谁能率先让 Agent 的**执行、权限、状态和上下文真正可信**，谁就更有机会在下一阶段获得生产级采用。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 **2026-11-15**。PR 列表未提供有效评论数，以下以“讨论方向、更新活跃度和社区关联度”作为热度参考；状态均按 Issue/PR 页面标注整理。

## 1. 热门 Skills 排行

| 热度 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder](https://github.com/anthropics/skills/pull/1742) | 面向 MCP 服务开发与调试。修复 MCP 2.x 中 `streamable_http_client` 重命名及自定义 HTTP Header 配置变化，直接关联 [Issue #1668](https://github.com/anthropics/skills/issues/1668)。重点是新版 SDK 兼容性和生产级请求配置。 | **Open** |
| 2 | [skill-creator](https://github.com/anthropics/skills/pull/1298) | 创建和优化 Skill 的核心元 Skill。修复触发评测中的并发串扰、Windows `select()` 异常、运行时错误误判等问题，是社区采用与质量保证的基础设施。 | **Open** |
| 3 | [webapp-testing](https://github.com/anthropics/skills/pull/1980) | 启动 Web 应用并进行浏览器端测试。修复 `shell=True` 带来的命令注入风险；相关 Element Discovery 还修复了 `textarea`、`select` 元素识别错误。安全性和测试准确性是核心讨论点。 | **Open** |
| 4 | [xlsx](https://github.com/anthropics/skills/pull/2019) | Excel 创建、编辑与公式检查。本 PR 改进外部链接风险扫描，支持工作表级定义名称、别名及间接引用，减少风险漏报，回应 [Issue #2013](https://github.com/anthropics/skills/issues/2013)。 | **Open** |
| 5 | [docx](https://github.com/anthropics/skills/pull/1792) | Word 文档生成和修订处理。LibreOffice 超时不再被误报为成功，并检查输出文件是否仍含修订标记，提高批注接受和文档交付验证的可靠性。 | **Open** |
| 6 | [notion-spec-to-implementation / quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245) | 将产品或技术规格拆解为可执行的 Notion 任务，并提供简历量化审计能力。代表“规格→计划→执行→验收”的垂直工作流方向。 | **Open** |
| 7 | [md2video-audio](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 编译为带旁白配音的 MP4 视频，覆盖演示文稿生成、TTS 和媒体合成，适合自动化内容生产。 | **Open** |
| 8 | [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) | 对 Solidity、Rust 智能合约执行静态分析，并将审计证明锚定到 TON 区块链。属于代码审计与链上存证结合的高门槛专业 Skill。 | **Open** |

### 其他值得关注的 Skill

- [pyxel](https://github.com/anthropics/skills/pull/525)：面向 Python 复古游戏开发，强调无头运行、逐帧检查和状态验证；更新活跃，兼具开发与测试属性。
- [scnet-hpc](https://github.com/anthropics/skills/pull/1615)：通过 SSH、Slurm 和集群配置管理 SCNet HPC，反映科学计算与基础设施自动化需求。
- [document-typography](https://github.com/anthropics/skills/pull/514)：治理孤行、寡行、编号错位等 AI 文档排版问题，代表输出质量控制需求。
- [algorithmic-art](https://github.com/anthropics/skills/pull/1977)：修复 `wrapAround()` 对负数及超范围值的处理，体现艺术生成 Skill 对确定性几何逻辑的需求。

---

## 2. 社区需求趋势

### 2.1 企业级共享与分发

[Issue #228](https://github.com/anthropics/skills/issues/228) 提议支持组织级 Skill 库及直接分享链接。当前仍依赖上传 `.skill` 文件、Slack/Teams 转发和手动导入，团队规模化使用成本较高。

社区期待的能力包括：

- 组织内统一发布和版本管理；
- 一键安装、共享链接及权限控制；
- 团队模板与最佳实践沉淀；
- 私有 Skill 与敏感配置的隔离管理。

### 2.2 Agent 记忆与状态压缩

[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提议 `compact-memory`，用符号化表示压缩 Agent 的长期状态，以减少上下文中的笔记和持久化记忆占用。

这表明需求正从“单一任务 Skill”转向：

- 跨会话长期记忆；
- 状态摘要与结构化压缩；
- 可审计、可恢复的 Agent 上下文；
- 记忆选择、合并和淘汰机制。

### 2.3 Agent 治理、质量门禁与安全审计

[Issue #1385](https://github.com/anthropics/skills/issues/1385) 提出“任务前校准→对抗式审查→交付验证”的三阶段质量门禁；[Issue #412](https://github.com/anthropics/skills/issues/412) 提议 `agent-governance` Skill，覆盖策略执行、威胁检测、信任评分和审计轨迹。

与 [webapp-testing 安全修复](https://github.com/anthropics/skills/pull/1980) 结合来看，社区对 Agent 的关注点已从“能否完成”转向“能否受控、可验证地完成”。

### 2.4 Skill 自身需要更可靠的评测与优化

多个高热度 Issue 聚焦 `skill-creator`：

- [run_eval.py 触发率为 0](https://github.com/anthropics/skills/issues/556)
- [并发 Worker 导致假阴性](https://github.com/anthropics/skills/issues/1352)
- [触发评测隔离与跨平台问题](https://github.com/anthropics/skills/pull/1298)
- [YAML frontmatter 解析错误](https://github.com/anthropics/skills/pull/1997)

社区需要的不只是生成 Skill，还包括：

- 可复现的触发率测试；
- 并发隔离与负例识别；
- Windows、macOS、Linux 跨平台支持；
- 描述优化、版本回归和失败分类。

### 2.5 文档和办公产物的端到端自动化

热门 PR 已覆盖：

- DOCX 修订接受及输出验证：[PR #1792](https://github.com/anthropics/skills/pull/1792)
- XLSX 外部链接审计：[PR #2019](https://github.com/anthropics/skills/pull/2019)
- Notion 规格拆解：[PR #1245](https://github.com/anthropics/skills/pull/1245)
- Markdown 转视频：[PR #1703](https://github.com/anthropics/skills/pull/1703)
- 文档排版治理：[PR #514](https://github.com/anthropics/skills/pull/514)

整体需求从“生成文件”升级为“生成—校验—交付”的完整闭环。

### 2.6 测试、安全与专业领域垂直化

社区希望 Skill 深入真实工程环境：

- Web 应用安全测试：[PR #1980](https://github.com/anthropics/skills/pull/1980)
- 智能合约静态审计和链上存证：[PR #1771](https://github.com/anthropics/skills/pull/1771)
- HPC 集群与 Slurm 作业管理：[PR #1615](https://github.com/anthropics/skills/pull/1615)
- 游戏运行时与逐帧验证：[PR #525](https://github.com/anthropics/skills/pull/525)

这说明“通用提示词型 Skill”正让位于“包含脚本、验证器和领域约束”的工程型 Skill。

---

## 3. 高潜力待合并 Skills

| PR | 潜力判断 | 当前状态 |
|---|---|---|
| [mcp-builder：适配 MCP 2.x 与自定义 Header](https://github.com/anthropics/skills/pull/1742) | 修复明确、关联真实 SDK 升级，能直接提升现有 Skill 的可用性，合并阻力相对较低。 | **Open** |
| [skill-creator：隔离触发评测并处理跨平台故障](https://github.com/anthropics/skills/pull/1298) | 直接回应两个高热度 Issue，属于 Skill 生态的关键基础设施改进。 | **Open** |
| [skill-creator：支持直接执行 package_skill.py](https://github.com/anthropics/skills/pull/1681) | 属于易验证的可用性和打包路径修复，用户影响面广。 | **Open** |
| [skill-creator：正确解析 YAML frontmatter](https://github.com/anthropics/skills/pull/1997) | 修复会影响描述优化和评测结果的基础解析问题，技术边界清晰。 | **Open** |
| [webapp-testing：移除 shell=True](https://github.com/anthropics/skills/pull/1980) | 消除 CWE-78 命令注入风险，安全价值高，容易获得优先审查。 | **Open** |
| [docx：超时报错并验证修订状态](https://github.com/anthropics/skills/pull/1792) | 解决“假成功”，与文档交付可靠性直接相关。 | **Open** |
| [xlsx：解析工作表级定义名称和外部链接别名](https://github.com/anthropics/skills/pull/2019) | 已关联具体 Issue，修复目标明确，可提升风险检查覆盖率。 | **Open** |
| [claude-api：更新 Python pause_turn 恢复指引](https://github.com/anthropics/skills/pull/1950) | 随 Python SDK 1.1.0 行为更新文档，主要是准确性维护。 | **Open** |

> “高潜力”表示问题边界清晰、已有 Issue/使用场景支撑、修复收益明确；不代表仓库当前给出了合并时间承诺。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“可生成内容的提示词集合”升级为“可共享、可评测、可审计并能可靠交付结果的 Agent 工程组件。**

这一趋势具体体现为四条主线：

1. **安全与信任边界**：官方与社区 Skill 必须可区分；
2. **可靠评测**：触发率、负例、跨平台和并发结果必须可信；
3. **质量门禁**：任务前校准、执行中审查、交付后验证；
4. **组织化分发**：从个人上传文件升级为企业级共享、权限与版本管理。

最紧迫的安全议题是 [Issue #492](https://github.com/anthropics/skills/issues/492)：社区 Skill 使用 `anthropic/` 命名空间可能伪装成官方能力并诱导用户授予更高权限。它是该生态目前最突出、评论最活跃的信任边界风险。

---

# Claude Code 社区动态日报｜2026-11-15

> 数据范围：`anthropics/claude-code` 过去 24 小时更新的 Issues 与 Pull Requests。  
> 今日无新版本发布；以下排名综合讨论量、点赞数、影响范围与开发者价值筛选。

## 1. 今日速览

今日社区焦点集中在 **Cowork/桌面端可靠性与权限误判**：自动模式会拦截账户所有者授权的例行任务和跨机器文件传输，Cowork 云会话还可能进入插件 Hook 不执行的“deprecated mode”。与此同时，**记忆加载可观测性、TUI 时间戳、模型指令遵循和反馈权限** 成为高热度议题；今日没有新版本发布。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

### 1. 自动记忆无法判断完整加载、截断或未加载
- **Issue：** [#82056](https://github.com/anthropics/claude-code/issues/82056)
- 重要性：自动记忆是长周期任务的重要上下文来源，但当前会话无法区分 `MEMORY.md` 是完整载入、被截断，还是根本未加载；这会直接影响 Agent 决策可信度。
- 社区反应：80 条评论，为今日讨论最充分的议题，但仅 1 个赞，说明问题复杂且缺少统一共识。

### 2. TUI 对话消息缺少时间戳
- **Issue：** [#44763](https://github.com/anthropics/claude-code/issues/44763)
- 重要性：长时间运行、定时轮询及后台任务场景中，时间戳能帮助开发者判断任务进度与消息间隔。
- 社区反应：43 条评论、102 个赞，是今日支持度最高的明确功能需求。

### 3. 支持 Claude 可调用的条件式 `/compact`
- **Issue：** [#19877](https://github.com/anthropics/claude-code/issues/19877)
- 重要性：让 Claude 根据上下文长度或任务状态自行压缩，可减少人工干预，并为自动化工作流提供稳定入口。
- 社区反应：26 条评论、17 个赞；涉及 CLI、工具和核心执行机制，落地价值较高。

### 4. Auto mode 误拦截账户所有者授权的任务和文件传输
- **Issue：** [#100730](https://github.com/anthropics/claude-code/issues/100730)
- 重要性：权限分类器可能把用户明确授权的 Cowork Run Routine、同一账户两台设备间的传输判为高风险，直接破坏自动化工作流。
- 社区反应：25 条评论、0 个赞；关注点已从单点权限提示升级为系统性信任和误报问题。

### 5. Cowork 云会话进入 deprecated mode，插件 Hook 与命令不执行
- **Issue：** [#107077](https://github.com/anthropics/claude-code/issues/107077)
- 重要性：相同账户、设备、插件和日期下，会话模式决定 Hook 是否运行，造成“有时 100% 生效、有时完全失效”的确定性差异。
- 社区反应：11 条评论、0 个赞；问题横跨 Windows、Cowork、插件与 Hook，诊断价值较高。

### 6. 跨账户共享 Artifact 在桌面端更新后无法读取或编辑
- **Issue：** [#107318](https://github.com/anthropics/claude-code/issues/107318)
- 重要性：桌面更新切换 Artifact connector 后，原本具备编辑权限的共享 Artifact 可能不可用，涉及升级兼容性和跨账户协作。
- 社区反应：9 条评论、4 个赞；虽未形成高热度，但回归影响明确。

### 7. Opus 5.5 自 10 月 19 日后答案被纠正比例显著上升
- **Issue：** [#105112](https://github.com/anthropics/claude-code/issues/105112)
- 重要性：报告者称 900 个答案中约 25.4% 需要纠正，而此前为 5.2%，可能反映模型版本、上下文或推理行为的变化。
- 社区反应：8 条评论、1 个赞；数据源于单个用户，应结合更多样本验证。

### 8. `/feedback` 与 transcript sharing 被组织策略或账户标记拒绝
- **Issue：** [#109663](https://github.com/anthropics/claude-code/issues/109663)
- 重要性：个人 Max 账户也可能被 `claude_science_no_training`、组织策略等状态锁定，导致 `/feedback`、会话问卷和 transcript sharing 全部不可用。
- 社区反应：2 条评论，并关联 [#101651](https://github.com/anthropics/claude-code/issues/101651)、[#105677](https://github.com/anthropics/claude-code/issues/105677) 等相似报告，反映出跨 Web、CLI 和账户类型的共性问题。

### 9. 自动摘要隐藏回答所需的关键信息
- **Issue:** [#93200](https://github.com/anthropics/claude-code/issues/93200)
- 重要性：Harness 自动摘要可能在关键上下文压缩时丢失细节，导致模型虽然继续工作，却遗漏原始需求或约束。
- 社区反应：3 条评论、2 个赞；与长会话、记忆压缩和 `/compact` 自动化需求形成明显关联。

### 10. Windows 上插件市场安装因 EPERM 失败
- **Issue:** [#104896](https://github.com/anthropics/claude-code/issues/104896)
- 重要性：`claude plugin marketplace add anthropics/claude-for-legal` 在临时目录重命名阶段持续报 `EPERM`，而手动 clone 后重命名可用，属于明确的 Windows 文件系统兼容问题。
- 社区反应：2 条评论、0 个赞，但有三次复现，具备较强工程定位价值。

## 4. 重要 PR 进展

> 今日仅更新 4 条 PR，少于要求的 10 条。以下列出全部可用 PR，并按重要性排序。

### 1. 修复插件 Hook 的 shell 调用与路径引用
- **PR：** [#95698](https://github.com/anthropics/claude-code/pull/95698)
- 将 `ralph-wiggum` 和 `output-style` 的 `.sh` Hook 改为通过 `bash` 执行，并正确引用包含空格的路径。
- 同时覆盖 [#95673](https://github.com/anthropics/claude-code/issues/95673) 及部分 [#78490](https://github.com/anthropics/claude-code/issues/78490)，可减少跨平台 Hook 静默失效。

### 2. 使 Hookify 包导入不再依赖插件目录名
- **PR：** [#81672](https://github.com/anthropics/claude-code/pull/81672)
- 移除对插件目录必须命名为 `hookify` 的隐式假设，使 marketplace 安装后的包导入更可靠。
- 关联 [#69665](https://github.com/anthropics/claude-code/issues/69665) 和 [#81448](https://github.com/anthropics/claude-code/issues/81448)，对自定义目录和第三方市场尤其重要。

### 3. 修正插件索引与实际行为不一致
- **PR：** [#78445](https://github.com/anthropics/claude-code/pull/78445)
- 修正插件索引和 marketplace metadata 中的错误描述，包括 `security-guidance` 的 Hook 事件及模式数量。
- 有助于用户依据准确文档配置安全策略，也减少“文档承诺与实际行为不符”的支持成本。

### 4. 让 dedupe Agent 在前台运行
- **PR：** [#106972](https://github.com/anthropics/claude-code/pull/106972)
- 在 dedupe 步骤设置 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`，并要求命令等待每个 Agent 完成。
- 解决后台 Agent 提前结束当前轮次、任务被中途截断的问题，提升重复任务和自动维护流程的确定性。

## 5. 功能需求趋势

1. **长会话可观测性与上下文控制**
   - 对话时间戳、记忆加载状态、摘要透明度、条件式 `/compact` 持续受到关注。
   - 核心诉求是让开发者知道“上下文发生了什么”，并让压缩流程可自动化、可预测。
   - 相关 Issues：[#44763](https://github.com/anthropics/claude-code/issues/44763)、[#82056](https://github.com/anthropics/claude-code/issues/82056)、[#19877](https://github.com/anthropics/claude-code/issues/19877)、[#93200](https://github.com/anthropics/claude-code/issues/93200)

2. **权限判断与自动化可信度**
   - Auto mode 对合法任务、跨设备文件传输和用户自有工作流的误拦截，是当前最突出的可靠性风险之一。
   - 社区期待权限模型区分“账户所有者明确授权”与真正的高风险操作。
   - 相关 Issues：[#100730](https://github.com/anthropics/claude-code/issues/100730)、[#110134](https://github.com/anthropics/claude-code/issues/110134)

3. **Cowork、桌面端与插件生态一致性**
   - 焦点包括 Cowork 会话模式不一致、插件 Hook/Slash Command 未执行、Artifact 跨账户共享失效、Windows marketplace 安装失败。
   - 用户需要不同运行环境拥有一致、可预测的插件和权限语义。
   - 相关 Issues：[#107077](https://github.com/anthropics/claude-code/issues/107077)、[#107318](https://github.com/anthropics/claude-code/issues/107318)、[#104896](https://github.com/anthropics/claude-code/issues/104896)

4. **模型行为与指令遵循**
   - 社区持续关注 CLAUDE.md 指令是否真正生效、模型是否在断言前验证，以及多轮协作任务中的配合意愿。
   - 相关 Issues：[#108582](https://github.com/anthropics/claude-code/issues/108582)、[#13689](https://github.com/anthropics/claude-code/issues/13689)、[#110123](https://github.com/anthropics/claude-code/issues/110123)

5. **模型与模型别名生态**
   - 除 Opus 5.5 行为争议外，社区希望提供类似 `opusplan` 的 `fableplan` 模型别名。
   - 相关 Issues：[#66903](https://github.com/anthropics/claude-code/issues/66903)、[#105112](https://github.com/anthropics/claude-code/issues/105112)

6. **多 Agent 与远程会话管理**
   - 子 Agent 达到 token 上限后无法恢复、advisor 工具阻塞六分钟、Remote Control 会话未进入 `claude agents` 列表，均指向任务生命周期管理不足。
   - 相关 Issues：[#102429](https://github.com/anthropics/claude-code/issues/102429)、[#100413](https://github.com/anthropics/claude-code/issues/100413)、[#95581](https://github.com/anthropics/claude-code/issues/95581)

7. **企业反馈与组织策略透明度**
   - 用户反馈 `/feedback` 被错误拒绝，且难以判断究竟是组织策略、账户训练标记还是登录状态导致。
   - 相关 Issues：[#109663](https://github.com/anthropics/claude-code/issues/109663)、[#105677](https://github.com/anthropics/claude-code/issues/105677)、[#101651](https://github.com/anthropics/claude-code/issues/101651)

8. **平台与桌面体验**
   - Windows marketplace 安装、Xcode 打开指定行、Windows Computer Use 红色边框、Windows 自动更新后 Remote Control 会话归档等问题，反映跨平台体验仍需加强。
   - 相关 Issues：[#104896](https://github.com/anthropics/claude-code/issues/104896)、[#110132](https://github.com/anthropics/claude-code/issues/110132)、[#110139](https://github.com/anthropics/claude-code/issues/110139)、[#109718](https://github.com/anthropics/claude-code/issues/109718)

9. **工作流热加载与轻量化配置**
   - 会话中创建的 workflow 需要重启才能按名称调用；`update-config` 每次输出完整 Schema，增加上下文和 Token 成本。
   - 相关 Issues：[#103659](https://github.com/anthropics/claude-code/issues/103659)、[#94484](https://github.com/anthropics/claude-code/issues/94484)

10. **第三方 Channel 插件能力**
    - 第三方插件可以安装并连接，却无法接收入站通知，用户希望获得官方 Discord、Telegram 等插件之外的开放能力。
    - 相关 Issue：[#82571](https://github.com/anthropics/claude-code/issues/82571)

## 6. 开发者关注点

- **上下文是否可信**：记忆是否完整加载、摘要是否丢失信息、`/compact` 何时触发，直接影响长任务质量。
- **自动化是否会被权限系统误伤**：合法例行任务、自有设备间传输也可能被拦截，是当前高优先级生产问题。
- **插件在所有入口中是否行为一致**：CLI、桌面端、Cowork、marketplace 与第三方插件之间存在明显执行差异。
- **长任务需要可观测、可恢复**：时间戳、Agent 状态、Remote Control 会话列表和失败恢复能力仍不完整。
- **模型需要更严格遵守项目规则**：CLAUDE.md 中的“验证后断言”等明确要求有时被忽略，造成额外 Token 和返工。
- **平台兼容性问题突出**：Windows 的文件权限、临时目录重命名、自动更新和插件安装问题较为集中。
- **企业策略需要更清晰**：反馈、共享和登录状态被多层策略影响，用户缺少明确的诊断入口与自助修复方式。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-15**  
**数据范围：过去 24 小时更新的 Issues 与 Pull Requests**

## 1. 今日速览

过去 24 小时没有新的正式 Release，但社区更新高度集中于 **Windows 桌面端会话恢复、Browser/Computer Use、Cloud 环境发现与工作区路由**，以及 **CLI 沙箱与性能回归**。  
PR 侧则围绕 **Cloud 会话稳定性、rollout 预算控制、模型请求 Hook、TUI 历史加载与云端任务切换** 集中推进，显示近期开发重点正从单纯功能扩展转向可靠性、资源治理和多后端隔离。

---

## 3. 社区热点 Issues

### 1. Windows 桌面端无法恢复云端托管会话

- **Issue：** [#59855 — Windows Codex Desktop can fail to resume cloud-managed chats with AbsolutePathBuf error](https://github.com/openai/codex/issues/59855)
- **重要性：** 这是高热度 Windows 会话恢复故障，打开侧边栏中的云端会话即可能报 `AbsolutePathBuf deserialized without a base path`，直接阻断核心工作流。
- **社区反应：** **37 条评论**，为本期讨论最活跃的问题；用户集中反馈错误稳定复现，社区正在推动定位路径反序列化与云会话恢复逻辑。

### 2. Windows Computer Use 截图结束后仍保留捕获状态

- **Issue：** [#57101 — Windows Computer Use: capture access and gold/yellow display border remain open after screenshot-producing turn completes](https://github.com/openai/codex/issues/57101)
- **重要性：** 截屏完成后仍维持屏幕捕获权限及黄色边框，可能引发隐私疑虑，也影响后续 Computer Use 操作。
- **社区反应：** **33 条评论、4 个赞**；讨论集中在截图回合生命周期、权限释放及 Computer Use 插件版本兼容。

### 3. Codex Cloud 无法发现当前 Cloud 环境

- **Issue：** [#50182 — codex cloud does not discover current Cloud environments](https://github.com/openai/codex/issues/50182)
- **重要性：** 登录和令牌刷新正常，但 CLI 仍无法识别可用 Cloud 环境，直接影响云端任务发现与执行。
- **社区反应：** **32 条评论、24 个赞**；属于高认可度问题，反映用户对 Cloud 环境发现与账号/工作区路由一致性的强烈期待。

### 4. macOS 重启后已有会话错误显示 Browser 被禁用

- **Issue：** [#57190 — macOS: browser reports disabled in an existing chat after restart while enabled and other chats work](https://github.com/openai/codex/issues/57190)
- **重要性：** 状态不一致发生在同一账号、不同会话之间，可能源于 Browser 能力缓存、插件状态或会话恢复逻辑缺陷。
- **社区反应：** **19 条评论、3 个赞**；用户补充了应用与插件版本信息，排查重点集中在重启后的能力状态持久化。

### 5. iOS Codex 显示“No tasks yet”，但搜索仍能找到会话

- **Issue：** [#60778 — iOS Codex shows “No tasks yet” while existing conversations remain accessible through search](https://github.com/openai/codex/issues/60778)
- **重要性：** 任务列表与搜索索引状态不一致，关联主机明明处于绿色在线状态，用户却无法在主列表继续任务。
- **社区反应：** **18 条评论、11 个赞**；该问题获得较高认可，显示远程任务列表同步和分页一致性是 iOS Remote 的核心痛点。

### 6. Windows 桌面端 Browser 被 Work 设置阻止

- **Issue：** [#59181 — Codex desktop browser access blocked by Work settings error](https://github.com/openai/codex/issues/59181)
- **重要性：** 企业 Work 设置可能错误阻断 Browser 能力，影响需要浏览器测试和网页操作的开发流程。
- **社区反应：** **14 条评论**；反馈多集中于 Windows 应用版本、受管策略和网络路由边界。

### 7. Windows 主 Agent 无法获取内置 Browser，仅能发现 MCP Apps

- **Issue：** [#53912 — Windows: primary agent cannot acquire bundled Browser (iab); discovery lists only MCP Apps](https://github.com/openai/codex/issues/53912)
- **重要性：** 浏览器能力未进入主 Agent 工具集合，使 Work Mode 中无法打开页面或执行本地 checkout 后的网页测试。
- **社区反应：** **14 条评论**；该问题与 Browser 插件发现、工作区模式及 Windows 权限链相关，具有较强复现和追踪价值。

### 8. CLI 的 zstd 高压缩请求返回错误 400，而非文档所述 413

- **Issue：** [#61489 — zstd request compression: highly compressible content gets a bare 400 instead of the documented 413, and Codex never avoids it](https://github.com/openai/codex/issues/61489)
- **重要性：** 这是协议与客户端行为不一致：服务端错误状态码不可诊断，客户端也不会根据压缩请求体大小主动降级，容易造成请求中断。
- **社区反应：** **12 条评论**；问题直接涉及 `codex-cli 0.167.0`、CentOS Linux 与请求压缩边界处理。

### 9. macOS 桌面端长任务中工具成功后持续出现 HTTP 400

- **Issue：** [#58569 — macOS desktop: recurring HTTP 400 Bad Request after successful tool operations blocks continuation](https://github.com/openai/codex/issues/58569)
- **重要性：** 工具调用成功不代表模型续接稳定；后续请求失败会阻断长任务，并可能使 UI 只能展示泛化错误。
- **社区反应：** **8 条评论、1 个赞**；用户特别指出“工具成功、模型续接失败”的阶段边界，值得检查请求序列化与上下文同步。

### 10. CLI TUI 启动时加载其他线程的完整 rollout，内存占用达数 GB

- **Issue：** [#61568 — 0.167+: TUI startup loads full rollouts of other threads, several GB of RAM per launch](https://github.com/openai/codex/issues/61568)
- **重要性：** 这是近期版本相关的显著性能回归；`0.167/0.169` 相比 `0.166` 出现明显内存恶化，会影响大型项目的日常使用。
- **社区反应：** **1 条评论**，但问题描述具体，包含受影响版本、WSL2 环境及高内存占用，属于应优先回归验证的性能问题。

---

## 4. 重要 PR 进展

> 本期展示的 PR 均已关闭，合并状态与具体合入版本未在数据中提供。

### 1. 为 Cloud 会话启用自动标题

- **PR：** [#61600 — Enable automatic titles for Cloud conversations](https://github.com/openai/codex/pull/61600)
- **进展：** Cloud 对话不再跳过 TUI 标题生成；标题使用所选 Cloud 账号及对应后端路由生成，无需代理工具或临时上下文。
- **价值：** 改善 Cloud 会话可检索性，并减少因路由差异导致的命名不一致。

### 2. 上报 Cloud 流恢复失败并取消废弃读取

- **PR：** [#61599 — Report Cloud stream recovery failures and cancel abandoned reads](https://github.com/openai/codex/pull/61599)
- **进展：** 对会话不存在、访问被拒、登录状态变化等情况给出具体恢复错误；取消已废弃的 turn/item 列表请求，释放原生 worker。
- **价值：** 提升 Cloud 会话错误可诊断性，并降低卡死和资源占用风险。

### 3. 将 Agent 概览刷新状态隔离到各后端

- **PR：** [#61596 — Keep agent overview refresh state scoped to each backend](https://github.com/openai/codex/pull/61596)
- **进展：** 分别跟踪排队刷新、“Show more”、补充计数及刷新状态，避免切换后端时旧分页结果串入新后端。
- **价值：** 解决多后端并行使用时的分页和状态竞争问题。

### 4. TUI 历史条目查询绑定所属 turn

- **PR：** [#61595 — Scope TUI history item lookups to their owning turns](https://github.com/openai/codex/pull/61595)
- **进展：** 历史分页条目携带 turn ID，并据此定位完成边界，避免跨 turn 复用 item ID 导致内容错位或隐藏。
- **价值：** 修复长会话分页中的 ID 作用域错误，提高历史恢复可靠性。

### 5. 模型请求 Hook 增加请求 ID 与尝试次数

- **PR：** [#61587 — Add request IDs and attempt numbers to model request hooks](https://github.com/openai/codex/pull/61587)
- **进展：** `PreModelRequest` 和 `PostModelRequest` 新增 `request_id` 与从 1 开始的 `attempt_number`，用于关联同一生成任务中的重试和模型回退。
- **价值：** 显著增强 Hook 的追踪、审计和可观测能力。

### 6. 统一采样与压缩阶段的模型请求 Hook 生命周期

- **PR：** [#61562 — Unify model request hook lifecycles across sampling and compaction](https://github.com/openai/codex/pull/61562)
- **进展：** 每次 sampling 或 compaction 尝试均配对前后置 Hook，并加入生命周期 ID、取消报告、`thread_id` 与请求 `kind`。
- **价值：** 避免 Hook 在压缩、取消和重试场景下错配或悬挂。

### 7. 共享 rollout 预算耗尽状态并阻止新工作

- **PR：** [#61582 — Gate new rollout work on shared budget exhaustion](https://github.com/openai/codex/pull/61582)
- **进展：** 新请求、工具和自动回合统一感知共享预算耗尽，同时保留已产生响应的有效消费记录。
- **价值：** 防止预算耗尽后继续派生工作，提升资源治理的一致性。

### 8. 工具执行前重新检查 rollout 预算

- **PR：** [#61578 — Recheck rollout budgets before starting tool work](https://github.com/openai/codex/pull/61578)
- **进展：** 工具等待执行槽、审批或生命周期回调后，再次检查预算，避免排队期间预算已耗尽仍启动新工作。
- **价值：** 修复异步等待场景下的预算越界问题。

### 9. 支持分数型 rollout 预算与可配置上下文提醒

- **PR：** [#61579 — Support fractional rollout budgets and configurable context reminders](https://github.com/openai/codex/pull/61579)
- **进展：** 新增有限正数 `features.rollout_budget.limit_budget`，保留 `limit_tokens` 兼容；拒绝同时配置两种限制，并在提醒中保留分数余额。
- **价值：** 为非整 token 成本与精细化上下文控制提供更灵活的机制。

### 10. 在 Cloud 任务导航准备完成前保留当前会话

- **PR：** [#61490 — Preserve the current Cloud task until navigation is ready](https://github.com/openai/codex/pull/61490)
- **进展：** 切换 Cloud 任务时先准备带作用域的历史句柄，目标会话成功加载后再提交切换；失败时保留当前聊天、草稿和回复流。
- **价值：** 直接对应本期高热度 Windows Cloud 会话恢复问题，可降低导航失败导致的状态丢失。

---

## 5. 功能需求趋势

### 5.1 多账号与工作区管理

- [#30684 — Add account/workspace switching support](https://github.com/openai/codex/issues/30684) 获得 **37 个赞、14 条评论**，是功能类 Issue 中最明确的高需求项。
- 用户希望 Codex App、CLI 和 IDE 扩展统一展示当前账号与工作区，并支持快速切换，而不只是退出后重新登录。

### 5.2 Browser 与 Computer Use 的稳定性和可发现性

- Browser 相关高热问题集中在 [#57190](https://github.com/openai/codex/issues/57190)、[#59181](https://github.com/openai/codex/issues/59181)、[#53912](https://github.com/openai/codex/issues/53912) 和 [#61609](https://github.com/openai/codex/issues/61609)。
- 需求不只是“增加 Browser”，而是确保插件可发现、状态一致、受管策略可解释，并能在重启及不同会话中稳定恢复。

### 5.3 Cloud 会话、环境与任务生命周期管理

- [#50182](https://github.com/openai/codex/issues/50182)、[#59855](https://github.com/openai/codex/issues/59855)、[#60324](https://github.com/openai/codex/issues/60324) 和 [#60778](https://github.com/openai/codex/issues/60778) 共同指向 Cloud 恢复、环境发现、任务列表与远程同步的一致性问题。
- 用户需要可靠的云端任务切换、列表同步、历史分页、错误恢复及跨设备一致性。

### 5.4 Hook 的可靠性、策略与可观测性

- [#41979 — Add opt-in fail-closed handling for PreToolUse hook failures](https://github.com/openai/codex/issues/41979) 获得 **12 条评论**。
- 配套 PR 已加入请求 ID、尝试次数、生命周期 ID及同步后置 Hook 处理，说明社区对 Hook 的需求正从“能执行”转向“可关联、可取消、可选择失败策略”。

### 5.5 TUI 与桌面端会话管理

- [#48139 — Codex CLI TUI copy and paste shortcuts changed on Debian Linux](https://github.com/openai/codex/issues/48139) 关注快捷键兼容性。
- [#30684](https://github.com/openai/codex/issues/30684) 关注账号切换。
- PR 则补齐归档线程只读、取消归档、Cloud 会话切换和 TUI 历史分页等能力，说明会话管理仍是高频需求。

### 5.6 macOS 新桌面形态下的工作流兼容

- [#58529 — Preserve independent ChatGPT and Codex windows after Classic retirement](https://github.com/openai/codex/issues/58529) 获得 **22 个赞**。
- [#57687 — Allow choosing Chat as the default mode for Popout window](https://github.com/openai/codex/issues/57687) 获得 **12 个赞**。
- [#42750 — Bring back the ChatGPT Classic Companion Window in the Codex app](https://github.com/openai/codex/issues/42750) 也在 Windows 端引发讨论。
- 社区期待新桌面应用保留独立窗口、弹出窗口和轻量 Companion Chat 等成熟工作流。

### 5.7 沙箱、权限与网络策略的一致性

- [#15309 — Approved escalated commands still inherit restricted network policy](https://github.com/openai/codex/issues/15309)
- [#49344 — macOS: approved require_escalated browser tests remain sandboxed](https://github.com/openai/codex/issues/49344)
- [#61564 — Connected computer attachment fails with managed-network sandbox configuration error](https://github.com/openai/codex/issues/61564)

相关诉求集中于：**用户批准升级权限后，文件系统、网络和浏览器能力应同步解除相应限制**，而不是出现授权已通过但执行环境仍受旧策略约束的情况。

---

## 6. 开发者关注点

### 6.1 “状态可见”与“能力可用”经常不一致

Browser、Cloud 环境、远程任务和账号路由都出现了“界面显示已启用，但工具不可发现”“搜索可见但列表为空”“登录成功但工作区路由失败”等问题。  
开发团队应优先统一：

- 能力注册与发现；
- 会话恢复与状态缓存；
- 后端路由和工作区解析；
- 跨设备任务索引及分页。

### 6.2 Windows 桌面端是当前故障最集中的平台

Windows 议题覆盖 Cloud 会话恢复、Browser 发现、Computer Use、Computer Use 权限边界、MCP Apps、dots、workspace routing 以及更新后项目消失。  
这表明 Windows 端的 **插件生命周期、企业策略、网络路由、路径序列化和会话持久化** 亟需系统性回归。

### 6.3 长任务中的阶段边界容易出现续接失败

[#58569](https://github.com/openai/codex/issues/58569) 显示工具调用成功后，模型续接可能因 HTTP 400 失败；[#61489](https://github.com/openai/codex/issues/61489) 则暴露请求压缩错误码与客户端降级缺失。  
开发者期望错误能明确区分：

- 请求体过大；
- 压缩编码不支持；
- 会话状态失效；
- 账号或路由变化；
- 服务端协议错误。

### 6.4 CLI 性能回归会直接影响大型项目使用

[#61568](https://github.com/openai/codex/issues/61568) 指出 `0.167+` 启动时可能加载其他线程完整 rollout，造成数 GB 内存占用。  
建议后续重点验证：历史索引是否惰性加载、是否只读取必要元数据，以及多线程/大型 rollout 下的启动内存曲线。

### 6.5 沙箱授权语义需要更透明

用户反馈集中在“已经批准升级权限，但网络或浏览器仍在沙箱内”。开发者需要明确展示：

- 当前会话生效的文件系统权限；
- 网络访问策略及其来源；
- 哪个审批只针对命令，哪个会改变完整执行环境；
- Browser、Computer Use 与 connected computer 各自适用的权限边界。

### 6.6 社区更看重跨端一致性与可恢复性

账号切换、Cloud 环境、Browser 插件、ChatGPT/Codex 独立窗口、远程任务列表和 TUI 历史都要求在 **App、CLI、IDE 扩展及不同操作系统之间保持一致**。  
下一阶段的关键不只是增加入口，而是确保同一能力在各端具有统一状态、统一错误语义和一致的恢复行为。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-15**  
**数据范围：GitHub `google-gemini/gemini-cli` 过去 24 小时**

## 今日速览

过去 24 小时没有新版本发布，仓库共有 **50 条 Issue 更新、13 条 PR 更新**。今日讨论高度集中在 Agent/Subagent 能力：子代理终止状态误报、浏览器代理稳定性、配置继承、AST 感知工具与任务追踪是主要议题。

PR 侧则集中推进 **ACP 模式性能与安全加固**，包括并行执行独立工具调用、截断大型工具输出，以及收紧 Shell、OAuth 和企业策略行为。

---

## 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后仍被报告为成功
- **Issue：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 在达到最大轮次、实际未完成分析时，仍返回 `success` 和 `Termination Reason: GOAL`。
- 这会直接掩盖 Agent 中断，可能导致上层编排误判任务已完成。
- 热度最高：**13 条评论、2 个赞**，是今日讨论最集中的问题。

### 2. 通用代理陷入无限等待
- **Issue：** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- Gemini CLI 委派给 generalist agent 后可能永久卡住，包括创建目录等简单操作；禁用子代理可规避。
- **8 条评论、8 个赞**，是今日社区认可度最高的可靠性问题之一。

### 3. 提议用零依赖 OS 沙箱保护 Bash 执行
- **Issue：** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
- 希望利用 Gemini 3 对 Bash/POSIX 工具链的原生能力，同时通过 OS 级沙箱和执行后意图路由降低命令执行风险。
- 涉及 Agent 能力与安全边界的核心设计，获得 **9 条评论、1 个赞**。

### 4. AST 感知的文件读取、搜索与代码库映射
- **Issue：** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- 评估 AST 工具能否精准读取函数边界、减少无效读取和 Token 消耗，并改善代码库导航。
- 这是关联多个调研 Issue 的 EPIC，**7 条评论**，体现了社区对“更精准、更省上下文”的强烈兴趣。

### 5. Gemini 不会主动使用 Skills 和 Subagents
- **Issue：** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 用户反馈，即使已配置描述明确的 Gradle、Git 等技能，模型仍很少主动调用 Skills 或子代理，通常需要显式提示。
- **7 条评论、0 个赞**，反映出自动编排能力仍不够主动。

### 6. Browser Agent 不读取 `settings.json` 覆盖配置
- **Issue：** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- `AgentRegistry` 能合并全局和项目级设置，但 Browser Agent 实际运行时忽略诸如 `maxTurns` 等覆盖值。
- 配置“看似生效、实际无效”会显著增加调试成本，已有 **5 条评论**。

### 7. Browser Agent 需要会话接管和锁恢复机制
- **Issue：** [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- 当前遇到持久化浏览器配置被锁时采用 fail-fast 策略；提议自动接管旧会话或恢复孤立进程持有的锁。
- **4 条评论**，体现浏览器自动化在长期运行、异常退出场景下的可靠性诉求。

### 8. Browser Subagent 在 Wayland 环境下失败
- **Issue：** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser Agent 在 Wayland 会话中出现异常终止问题，优先级标为 P1。
- **4 条评论、1 个赞**；对 Linux 桌面环境中的自动浏览器操作影响较大。

### 9. 工具数量过多触发 400 错误
- **Issue：** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 启用较多工具后，Gemini CLI 会收到 400 错误；标题称“>128 tools”，摘要则提到“more than 400 tools”，具体阈值有待确认。
- 社区期待 Agent 根据任务动态裁剪可用工具，而不是把全部定义送入上下文，已有 **3 条评论**。

### 10. 模型频繁在随机目录生成临时脚本
- **Issue：** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- 限制模型使用原生文件工具后，它倾向于在多个目录生成编辑脚本，增加工作区清理和提交噪声。
- **3 条评论**；这与持久化任务追踪、临时文件生命周期管理等需求相互关联。

### 其他值得留意
- 防止 `git reset`、强制覆盖等破坏性行为：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 输出 Hook 接近结束时导致 CLI 崩溃：[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)
- Bug 报告缺少子代理内部上下文：[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)
- 改进内部项目评测的稳定性与可追踪性：[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)

---

## 重要 PR 进展

### 1. ACP 模式并行执行独立工具调用
- **PR：** [#30298](https://github.com/google-gemini/gemini-cli/pull/30298)
- 将 ACP 模式中原本串行执行的独立只读工具调用改为并行执行，目标是降低多文件检查、搜索等场景的等待时间。
- 对应 [#30235](https://github.com/google-gemini/gemini-cli/issues/30235)，是今日最直接的 Agent 性能改进之一。

### 2. 截断 ACP 中的大型 Shell 与 MCP 输出
- **PR：** [#30297](https://github.com/google-gemini/gemini-cli/pull/30297)
- 对 ACP 模式下 Shell 和 MCP 工具产生的大型日志、目录树等输出进行截断，防止上下文被无关内容淹没。
- 对应 [#30233](https://github.com/google-gemini/gemini-cli/issues/30233)，兼顾性能和 Token 成本。

### 3. 禁止将受污染 Shell 命令保存为永久放行规则
- **PR：** [#30196](https://github.com/google-gemini/gemini-cli/pull/30196)
- 修复 “Always allow” 对不可信参数或构建后命令的处理：不再把宽泛的命令根规则持久化，而是保持仅单次批准。
- 这是重要的权限边界修复，可避免后续会话意外执行同类危险命令。

### 4. YOLO 模式下 Shell 解析失败时保留 `ASK_USER`
- **PR：** [#30295](https://github.com/google-gemini/gemini-cli/pull/30295)
- Shell 命令解析失败时不再无条件返回 `ALLOW`，而是保留原有决策，使企业策略能够正确要求用户确认。
- 属于企业安全和审批语义的重要加固。

### 5. 修复失败 OAuth 初始化污染缓存
- **PR：** [#30296](https://github.com/google-gemini/gemini-cli/pull/30296)
- 将被拒绝的 OAuth 客户端初始化 Promise 从缓存中移除，避免一次失败导致当前进程后续 OAuth 初始化永久失败。
- 重点改善认证错误后的恢复能力。

### 6. 修复企业遥测数据被误判为循环引用
- **PR：** [#30157](https://github.com/google-gemini/gemini-cli/pull/30157)
- `safeJsonStringify` 过去会把任何重复引用的对象替换为 `[Circular]`，即使不存在真实循环；本 PR 仅处理真正的循环引用。
- 可避免 OpenTelemetry 等共享数组被错误截断，提升遥测数据准确性。

### 7. 修复 `contextManagement` 配置未传递给 Core
- **PR：** [#30068](https://github.com/google-gemini/gemini-cli/pull/30068)
- 将文档中声明的上下文管理设置正确传入核心配置，避免自定义输出掩码阈值被静默丢弃。
- 已关闭；这一修复直接提升长上下文任务的可配置性。

### 8. 清理构建目录以修复 nightly 发布失败
- **PR：** [#30207](https://github.com/google-gemini/gemini-cli/pull/30207)
- esbuild 前清空 bundle 目录，移除历史构建残留 chunk；此前残留文件导致 npm tarball 膨胀，并连续触发 `413 Request Entity Too Large`。
- P0 优先级，直接影响 nightly 发布链路。

### 9. 补齐模型列表中的 `gemini-3.8-flash`
- **PR：** [#30194](https://github.com/google-gemini/gemini-cli/pull/30194)
- 修复 `gemini models` 未显示 v0.67.0 中 `/model manage` 已可用的 `gemini-3.8-flash`。
- 已提供失败测试与补丁后测试结果，当前仍开放。

### 10. 同步 CLI Reference 中的 ACP 参数
- **PR：** [#30301](https://github.com/google-gemini/gemini-cli/pull/30301)
- ACP 模式替代旧 Zed 集成后，CLI 参考文档仍保留过期参数；本 PR 更新实际注册的 flags。
- 属于用户采用与集成体验的直接改进。

### 其他安全与维护动态
- 关闭了用于验证 CI 供应链风险的 inert canary PoC PR：[#30066](https://github.com/google-gemini/gemini-cli/pull/30066)
- 来自同一 fork 账户的 CI 探针 PR 已关闭：[#30065](https://github.com/google-gemini/gemini-cli/pull/30065)
- v0.45.2 自动生成 Changelog 等待合并：[#27703](https://github.com/google-gemini/gemini-cli/pull/27703)

---

## 功能需求趋势

### 1. Agent 与 Subagent 成为绝对主线
今日最突出的方向不是单纯扩展模型能力，而是提升子代理的**可靠性、可观测性和编排能力**：

- 准确区分成功、达到轮次上限和异常中断
- 自动选择 Skills 与子代理
- 提供共享内存及并行子代理协作
- 在 `/chat share` 或 Bug 报告中暴露子代理轨迹
- 改进代码库调查代理的通用性

相关 Issues：  
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) · [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)

### 2. AST 感知工具与上下文效率
社区期待通过 AST 工具实现：

- 精确读取函数或类的方法边界
- 按语法结构搜索代码
- 更快构建代码库地图
- 减少“整文件倾倒”造成的 Token 浪费

相关 Issues：  
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) · [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) · [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 3. 浏览器自动化稳定性
关注点包括 Wayland 兼容、持久化会话锁、异常进程恢复、配置覆盖生效，以及避免交互式提示导致任务卡死。

相关 Issues：  
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) · [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

### 4. Shell 执行安全与审批策略
社区同时追求模型原生 Bash 能力和严格控制，重点包括 OS 沙箱、污染命令识别、破坏性命令拦截、YOLO 模式下的失败关闭，以及更细粒度的持久化授权。

相关 Issues：  
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 5. 持久化任务追踪
现有 `WriteToDo` 依赖对话上下文，存在上下文腐化、Token 成本高和跨会话丢失等问题。社区倾向于使用文件型 CRUD 作为长期任务状态源。

相关 Issues：  
[#18836](https://github.com/google-gemini/gemini-cli/issues/18836) · [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)

### 6. ACP 集成与模型可见性同步
ACP 模式正在补齐并行执行、输出截断和 CLI 文档一致性；同时，`gemini models` 与交互式模型管理界面的列表需要保持同步。

相关 PR：  
[#30298](https://github.com/google-gemini/gemini-cli/pull/30298) · [#30297](https://github.com/google-gemini/gemini-cli/pull/30297) · [#30301](https://github.com/google-gemini/gemini-cli/pull/30301) · [#30194](https://github.com/google-gemini/gemini-cli/pull/30194)

---

## 开发者关注点

1. **状态报告必须可信**  
   子代理即使因 `MAX_TURNS` 中断，也不能被包装为成功。可靠的终止原因和失败传播是上层自动编排的前提。

2. **配置必须真正生效**  
   Browser Agent 忽略 `settings.json`、上下文管理阈值被丢弃等问题，都会造成“配置已写但行为未变”的隐性故障。

3. **降低上下文和工具噪声**  
   开发者希望减少整文件读取、无关 MCP 输出和大量工具定义对上下文窗口的占用，转而采用 AST 搜索、动态工具裁剪与输出截断。

4. **强化 Shell 权限边界**  
   “Always allow” 的作用域过宽、YOLO 模式解析失败自动放行等问题受到重视，安全策略需要遵循失败关闭和最小授权原则。

5. **提升浏览器 Agent 的环境兼容性**  
   Wayland、浏览器 Profile 锁、孤立进程和交互式提示是实际落地中的主要障碍，单纯“能启动浏览器”不足以支撑稳定自动化。

6. **增强诊断与可观测性**  
   Bug 报告缺少子代理上下文，轨迹无法方便分享，配置和任务状态也缺乏跨会话持久化，均增加了复杂 Agent 问题的排查成本。

7. **完善项目评测体系**  
   社区开始关注内部评测的不稳定性、可追踪性和趋势分析，希望用可靠的行为评测覆盖子代理恢复、交互式提示和 Vite 等真实任务。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-15**  
**数据范围：过去 24 小时更新的 Issues 与 PR；新 Release 为 0**

## 今日速览

过去 24 小时没有新版本发布或 PR 合并，社区讨论主要集中在 **认证刷新、MCP 工具稳定性、会话恢复与模型策略** 等可靠性问题。多个高热度 Issue 指向同一类体验瓶颈：CLI 在长驻运行、后台任务、嵌套会话和非交互场景下，缺少清晰的失败状态与恢复机制；此外，模型可用性及 Fusion 策略不一致也引发关注。

## 社区热点 Issues

### 1. 长驻进程认证令牌停止刷新，重启前所有请求均失败
[#4929](https://github.com/github/copilot-cli/issues/4929) · **13 条评论**

Copilot CLI 长时间运行后可能永久失去认证，普通提示和 `/ask` 均返回授权错误，且进程内 `/login` 无法恢复，必须重启并恢复会话。该问题直接影响长时自动化与无人值守场景，是今日讨论热度最高的问题。

### 2. Agent 检查点 refs 持续写入用户仓库，缺少关闭选项
[#5323](https://github.com/github/copilot-cli/issues/5323) · **6 条评论，2 个赞**

每次 Agent 回合都会创建 `refs/agents/<session-id>/checkpoints/turn/N`，这些引用使用用户 Git 身份，并可能出现在所有 refs 展示工具中。社区希望提供配置开关，以控制检查点保留、可见性及 Git 身份使用方式。

### 3. 非交互 MCP 工具调用在进度通知后挂起
[#4910](https://github.com/github/copilot-cli/issues/4910) · **3 条评论**

非交互模式下，已发现的 Azure MCP 工具在发送初始进度通知后可能不再返回结果，最终因 WebSocket 空闲超时关闭；同一工具和载荷在交互模式下则可立即完成。问题影响脚本化调用、CI 与自动化集成。

### 4. Copilot Free 账户无法启动远程环境
[#5283](https://github.com/github/copilot-cli/issues/5283) · **2 条评论，5 个赞**

个人 GitHub 账户启用 Copilot CLI 远程访问后，本地设置显示已启用，但环境启动被远程控制策略阻止。该问题涉及 Free 账户、组织成员身份及租户策略边界，赞数较高，说明用户对远程 Agent 的可用性十分关注。

### 5. 新 worktree 会话无法发现仓库自定义 Agent
[#4924](https://github.com/github/copilot-cli/issues/4924) · **2 条评论**

桌面端在创建新 worktree 时，配置发现发生在延迟 checkout 填充工作树之前，之后又未重新扫描，因此 `.github/agents/*.agent.md` 自定义 Agent 可能在整个会话中缺失，只剩内置 Agent。该问题直接影响项目级 Agent 配置的可用性。

### 6. Fusion High 被静默降级为 Standard
[#5457](https://github.com/github/copilot-cli/issues/5457) · **0 条评论**

请求 Copilot Fusion **High** 档位时，运行时实际解析为 **Standard**，且没有错误或警告；`session.fusion_resolved` 中记录的标准档位配置与普通 Standard 请求相同，而 Max 档位可正常工作。这关系到模型能力、计费策略和结果质量的透明性。

### 7. 免费方案默认子 Agent 模型不可用
[#5456](https://github.com/github/copilot-cli/issues/5456) · **0 条评论**

CLI 1.0.112 等版本的子 Agent 默认模型包含 `gpt-6-luna` 和 `claude-sonnet-5.5`，但这些模型当前不适用于 Free 计划，导致相关子 Agent 报错。默认配置应与账户可用权限动态匹配，或提供更可靠的回退机制。

### 8. 升级并完成付款后仍提示无可用模型
[#5419](https://github.com/github/copilot-cli/issues/5419) · **0 条评论**

用户在线支付旧账单并升级为 Pro 月度计划后，重新通过浏览器登录 CLI，仍收到“无可用模型”的提示。问题可能涉及计划状态同步、CLI 认证缓存或模型权限刷新，反映订阅状态和 CLI 会话状态之间存在不一致。

### 9. MCP `text/plain` blob 资源以空内容传给模型
[#4916](https://github.com/github/copilot-cli/issues/4916) · **2 条评论**

MCP 工具成功返回带 Base64 编码 UTF-8 文本的 `resource.blob`，且 MIME 类型为 `text/plain`，但 Copilot CLI 交给模型的内容为空或不可用。结果是 Agent 无法引用本应成功返回的文本，影响文档检索和嵌入式资源工具。

### 10. 图像查看导致 Cloud Agent 会话直接终止
[#4930](https://github.com/github/copilot-cli/issues/4930) · **0 条评论**

在 GHEC 数据驻留租户的 Cloud Agent 会话中，查看任意图片后，下一次模型调用会因图片数据无效而返回 `CAPIError: 400`，导致会话终止。工具本身先报告成功，使错误边界和可恢复性尤其不清晰。

### 其他值得留意的热点

- 会话 ID 切换时，本地 stdio MCP 服务器被静默丢弃：[#4920](https://github.com/github/copilot-cli/issues/4920)
- 后台子 Agent 流异常结束时未返回明确失败状态：[#4911](https://github.com/github/copilot-cli/issues/4911)
- `/session prune` 长时间执行但无进度提示：[#5432](https://github.com/github/copilot-cli/issues/5432)
- `/restart` 后会话未正确恢复，并提示会话正在其他位置运行：[#5416](https://github.com/github/copilot-cli/issues/5416)
- Linux 文本选择导致终端视口偏移：[#4913](https://github.com/github/copilot-cli/issues/4913)
- 新版 CLI 要求 macOS 13.5+，较旧系统无法升级：[#5461](https://github.com/github/copilot-cli/issues/5461)

## 重要 PR 进展

过去 24 小时内 **没有更新的 Pull Requests**，因此暂无重要 PR 进展可供汇总。

## 功能需求趋势

1. **MCP 生命周期与可靠性**
   - 增加“所有 MCP 服务器均已连接或失败”的启动完成事件，便于自动化判断初始化状态：[#5458](https://github.com/github/copilot-cli/issues/5458)
   - 修复非交互调用挂起、启动阶段服务器丢失及资源内容为空的问题：[#4910](https://github.com/github/copilot-cli/issues/4910)、[#4920](https://github.com/github/copilot-cli/issues/4920)、[#4916](https://github.com/github/copilot-cli/issues/4916)

2. **会话管理与可恢复性**
   - 支持将既有聊天或会话关联到 Project：[#4922](https://github.com/github/copilot-cli/issues/4922)
   - 改善 `/restart`、`/resume`、会话清理和 worktree 会话恢复：[#5416](https://github.com/github/copilot-cli/issues/5416)、[#5432](https://github.com/github/copilot-cli/issues/5432)、[#4924](https://github.com/github/copilot-cli/issues/4924)

3. **模型、档位与套餐适配**
   - 修复 Fusion High 静默降级、免费计划默认子 Agent 模型不可用及升级后模型缺失：[#5457](https://github.com/github/copilot-cli/issues/5457)、[#5456](https://github.com/github/copilot-cli/issues/5456)、[#5419](https://github.com/github/copilot-cli/issues/5419)
   - 模型上下文窗口元数据存在不一致：[#4927](https://github.com/github/copilot-cli/issues/4927)

4. **Agent 行为与用户控制**
   - 允许关闭 Agent checkpoint refs，减少对用户仓库和 Git 身份的影响：[#5323](https://github.com/github/copilot-cli/issues/5323)
   - 让嵌套 Agent 也能调用 `ask_user`：[#4921](https://github.com/github/copilot-cli/issues/4921)
   - 展示 `ask_user` 调用前同一响应中的说明文本：[#5460](https://github.com/github/copilot-cli/issues/5460)
   - 避免 Agent 通过反复 `sleep` 轮询后台任务，减少模型回合和上下文浪费：[#5459](https://github.com/github/copilot-cli/issues/5459)

5. **远程与云端 Agent**
   - 远程环境启动受到账户和组织策略影响：[#5283](https://github.com/github/copilot-cli/issues/5283)
   - Cloud Agent 的 Playwright MCP 会话在首次调用前已关闭：[#4931](https://github.com/github/copilot-cli/issues/4931)

6. **插件、企业策略与可观测性**
   - 社区关注托管 hooks、企业策略警告、权限通知误触发及初始化可观测性：[#5431](https://github.com/github/copilot-cli/issues/5431)、[#5417](https://github.com/github/copilot-cli/issues/5417)

## 开发者关注点

- **长驻运行稳定性**：认证令牌无法刷新是当前最突出的问题，开发者希望 CLI 能在不重启的情况下自愈。
- **失败必须可见、可恢复**：工具“报告成功”但后续会话终止、会话占用提示、流异常无失败状态等问题，都增加了排障难度。
- **自动化场景需要确定性**：非交互 MCP 挂起、启动完成状态缺失以及后台任务反复轮询，都会直接破坏脚本和 CI 的可靠性。
- **模型与订阅策略应透明一致**：档位静默降级、套餐不匹配模型、升级后权限未同步，均容易造成额外成本或任务失败。
- **Agent 不应偏离用户约束**：有反馈称 Agent 擅自用 Rust 替换明确要求的 C 实现并自行安装工具链，凸显指令遵循与审批机制问题：[#5462](https://github.com/github/copilot-cli/issues/5462)
- **减少对用户 Git 仓库的隐式影响**：checkpoint refs 使用用户身份写入仓库，社区希望提供明确的开关和更清晰的可见性。
- **跨平台兼容性仍需改善**：旧版 macOS 无法升级、Linux 终端选择行为异常等问题仍会影响部署与交互体验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-15**  
**数据范围：GitHub anomalyco/opencode 过去 24 小时更新**

## 今日速览

过去 24 小时没有新版本发布，仓库共有 50 个 Issue 和 50 个 PR 获得更新，焦点集中在 **v2.3.0 升级后的回归问题**，尤其是 Linux PTY 僵尸进程、子代理会话状态、模型提供商兼容性及桌面端稳定性。社区同时推动模型自动发现、子代理交互与恢复机制、OpenAI-compatible Provider 支持，以及 MCP/TLS、桌面端项目管理等能力完善。

## 社区热点 Issues

1. **Linux PTY 守护进程遗留大量僵尸进程**  
   [#63817](https://github.com/anomalyco/opencode/issues/63817) / [#63976](https://github.com/anomalyco/opencode/issues/63976)  
   - 2.3.0 中已结束的 shell 命令仍以 `<defunct>` 状态挂载到 `opencode-pty daemon`，且不会自动回收，进程数会持续增长。  
   - 两个独立报告相互印证，问题已具备较强可复现性。  
   - 社区反应：讨论较多，但点赞较少；当前属于明确且影响较大的 v2.3.0 回归。

2. **子代理 `sessionID` 续接始终失败**  
   [#59293](https://github.com/anomalyco/opencode/issues/59293)  
   - `subagent` 工具无论传入何种 `sessionID`，实际都只收到 `"ses"`，导致已有子代理会话无法继续。  
   - 新建子代理仍可工作，因此影响集中在跨轮次续接、长期代理工作流和上下文保留。  
   - 社区反应：5 条评论，问题已进入 triaging 阶段。

3. **服务器重启后，权限请求和问答等待状态丢失**  
   [#36347](https://github.com/anomalyco/opencode/issues/36347)  
   - V2 将待处理权限和 question form 保存在进程内；服务重启后，请求及其挂起 continuation 都会丢失。  
   - 即使会话能够恢复，旧阻塞项也无法继续接受用户回复，影响托管服务和无人值守运行。  
   - 社区反应：9 条评论，是由 @kitlangton 提出的核心架构问题。

4. **消息历史未按会话隔离**  
   [#52154](https://github.com/anomalyco/opencode/issues/52154)  
   - 在 TUI 中按上方向键时，当前会话有时会调出另一个最近会话的最后一条消息。  
   - 这会直接破坏多会话并行使用中的输入准确性。  
   - 社区反应：11 条评论、7 个赞，是当日讨论热度较高的体验类问题。

5. **GitHub Copilot 的 Gemini 模型在启动阶段失败**  
   [#63956](https://github.com/anomalyco/opencode/issues/63956)  
   - macOS 目录唤醒或应用启动后，使用 `github-copilot/gemini-4-hydrogen` 会在异步 `/models` 同步完成前报“不支持 Responses API”。  
   - 暴露了模型能力发现与请求路由之间的启动时序问题。  
   - 社区反应：5 条评论，目前标记为可复现。

6. **Windows 桌面端生成过程中渲染器崩溃**  
   [#63944](https://github.com/anomalyco/opencode/issues/63944)  
   - Windows 11 上，Desktop 2.3.0 在生成过程中触发 `Match/exhaustive: absurd`，导致 Electron renderer 崩溃。  
   - 错误位于 `renderRow`，暗示桌面端状态模型与渲染分支未能完全同步。  
   - 社区反应：4 条评论、2 个赞，属于直接影响可用性的崩溃问题。

7. **子代理活动无法在 TUI 中直接提示和干预**  
   [#42670](https://github.com/anomalyco/opencode/issues/42670)  
   - V2 TUI 已能选择子会话、查看运行状态、切换子代理和中断单个子代理，但输入框仍属于父会话。  
   - 用户无法直接向选中的子代理发送提示或 steer，这在并行代理架构中限制了人工恢复能力。  
   - 社区反应：5 条评论、7 个赞；需求热度高于纯缺陷类问题。

8. **Windows 管道模式下 PowerShell 启动失败**  
   [#63892](https://github.com/anomalyco/opencode/issues/63892)  
   - 从 2.2.7 升级至 2.3.0 后，Microsoft Store 版 PowerShell 7 在 pipe mode 下无法生成，错误为 `0xC0070005`。  
   - 影响 Windows 用户执行基础 shell 工具。  
   - 社区反应：2 条评论、2 个赞，问题范围明确但可能仅影响特定 PowerShell 安装方式。

9. **CLI JSON 输出遗漏全部子代理事件**  
   [#62380](https://github.com/anomalyco/opencode/issues/62380)  
   - `opencode run --format json` 只输出根会话事件，子代理的 shell 调用、文本和步骤全部丢失；根会话的工具事件还只在子代理结束后出现。  
   - 这使 CLI 自动化、进度展示和外部编排无法实时观察子代理。  
   - 社区反应：3 条评论，暴露了当前 JSON 事件流与多代理能力之间的集成缺口。

10. **会话内历史输入无法正确恢复或撤销**  
    [#12393](https://github.com/anomalyco/opencode/issues/12393) / [#28030](https://github.com/anomalyco/opencode/issues/28030)  
    - 前者是高热度桌面端使用问题：用户误归档会话后不知道如何找回；后者提出 Desktop 缺少删除项目能力。  
    - 前者获得 20 条评论和 36 个赞，后者获得 15 条评论和 17 个赞，反映社区对桌面端会话和项目管理能力的强烈需求。  
    - 两项均已关闭。

## 重要 PR 进展

1. **根据子代理未完成工作报告真实运行状态**  
   [#64026](https://github.com/anomalyco/opencode/pull/64026)  
   - 修复子代理仅通过回答文本声称“仍有后台工作运行”时，错误影响父代理状态判断的问题。  
   - PR 改为保存子代理结束时的实际 outstanding work 状态，再向父会话报告。

2. **恢复被 DeepSeek 文本泄漏的 DSML 工具调用**  
   [#60575](https://github.com/anomalyco/opencode/pull/60575)  
   - 针对 DeepSeek serving lane 将 DSML 工具调用输出为文本的情况，在文本到工具调用的转换失败或未启用时尝试恢复。  
   - 有助于减少工具未执行、调用内容残留在消息正文的问题。

3. **支持回退已接收但尚未显示的消息**  
   [#62727](https://github.com/anomalyco/opencode/pull/62727)  
   - 修复 core 只查询错误边界导致 `message not found` 的问题。  
   - 与中断后撤销消息的 TUI 修复 [#58118](https://github.com/anomalyco/opencode/pull/58118) 配套，完善消息生命周期一致性。

4. **服务端异常返回可读的 JSON 500 响应**  
   [#64022](https://github.com/anomalyco/opencode/pull/64022)  
   - handler 遇到未声明异常时，不再向客户端返回空 body 的 500。  
   - 新响应包含 JSON 错误信息；存储错误还会明确标识错误类型，便于客户端诊断。

5. **通过 `media.image.max_images` 限制请求内图片数量**  
   [#61563](https://github.com/anomalyco/opencode/pull/61563)  
   - 针对 vLLM 等后端按请求限制图片数量、但会话累计图片后后续请求持续失败的问题，增加基于数量的图片上限。  
   - 解决长会话中多模态请求超过后端限制的问题。

6. **自动发现已配置的 OpenAI-compatible Provider 模型**  
   [#57161](https://github.com/anomalyco/opencode/pull/57161)  
   - 为 LiteLLM 等自定义 OpenAI-compatible 网关增加插件式模型发现，减少用户逐个手写模型的配置成本。  
   - 与 Provider 目录和 `/models` 同步问题 [#40524](https://github.com/anomalyco/opencode/issues/40524) 共同构成模型生态改进主线。

7. **兼容带 JSON Schema override 的旧版 Zod 工具 Schema**  
   [#60898](https://github.com/anomalyco/opencode/pull/60898)  
   - 修复自定义 JSON Schema override 导致父级 Schema 未处理、进而在 schema 转换时崩溃的问题。  
   - 有助于提升插件和第三方工具定义的兼容性。

8. **为远程 MCP Server 增加逐服务器 TLS 信任配置**  
   [#60039](https://github.com/anomalyco/opencode/pull/60039)  
   - 在远程 MCP server 配置中加入可选 `tls` 块，允许信任该服务器的自签名或私有 CA 证书。  
   - 配套 PR [#60041](https://github.com/anomalyco/opencode/pull/60041) 增加首次使用时信任私有网络证书的流程。

9. **TUI 使用操作系统处理器打开本地文件链接**  
   [#55769](https://github.com/anomalyco/opencode/pull/55769)  
   - 修复 TUI 中本地文件 Markdown 链接被错误交给仅支持 HTTP 的 opener。  
   - 绝对路径和 `file://` 链接现在交由操作系统处理，改善编辑器式工作流。

10. **修复窄会话标签页标题渐变重叠**  
    [#64024](https://github.com/anomalyco/opencode/pull/64024)  
    - 避免打开较多标签时，左右边缘 fade 渐变在窄标签中央相互覆盖。  
    - 属于近期 TUI 多会话界面整理的一部分。

## 功能需求趋势

1. **子代理与会话管理成为首要方向**  
   社区希望加强历史恢复、输入历史隔离、子代理续接、后台工作通知、失败报告拦截，以及父会话对子代理的直接 steer。相关需求集中在 [#52154](https://github.com/anomalyco/opencode/issues/52154)、[#42670](https://github.com/anomalyco/opencode/issues/42670)、[#59293](https://github.com/anomalyco/opencode/issues/59293)、[#57157](https://github.com/anomalyco/opencode/issues/57157)、[#63786](https://github.com/anomalyco/opencode/issues/63786) 和 [#63894](https://github.com/anomalyco/opencode/issues/63894)。

2. **Provider 与模型生态自动化**  
   用户希望自动同步 `/models`、发现自定义 OpenAI-compatible Provider 的模型、保留服务端 reasoning 能力，并提供更可靠的 Provider 凭据校验。代表需求包括 [#40524](https://github.com/anomalyco/opencode/issues/40524)、[#63921](https://github.com/anomalyco/opencode/issues/63921) 和 [#64023](https://github.com/anomalyco/opencode/issues/64023)。

3. **桌面端项目管理与跨端通知**  
   归档恢复、项目删除、项目添加兼容性及桌面/CLI 会话向 iOS 推送通知，反映出跨端会话管理仍在快速建设。相关 Issue：[#12393](https://github.com/anomalyco/opencode/issues/12393)、[#28030](https://github.com/anomalyco/opencode/issues/28030)、[#64025](https://github.com/anomalyco/opencode/issues/64025)、[#63992](https://github.com/anomalyco/opencode/issues/63992)。

4. **MCP 安全与可靠性增强**  
   社区不仅关注私有 CA、自签名证书，还要求正确处理空表单和 browse relay 执行上下文。相关讨论：[#60039](https://github.com/anomalyco/opencode/pull/60039)、[#64020](https://github.com/anomalyco/opencode/pull/64020)、[#63902](https://github.com/anomalyco/opencode/issues/63902)。

5. **TUI 可控性与效率功能**  
   除提示和干预子代理外，用户希望支持“不恢复旧标签页”的窗口启动模式，并按任务复杂度自动选择 reasoning effort。相关需求：[#61063](https://github.com/anomalyco/opencode/issues/61063)、[#21483](https://github.com/anomalyco/opencode/issues/21483)。

6. **插件和扩展接口扩展**  
   开发者希望插件可以管理子代理的完成报告、延迟或抑制失败通知，并控制 child session 是否向上级汇报：[#57157](https://github.com/anomalyco/opencode/issues/57157)、[#63786](https://github.com/anomalyco/opencode/issues/63786)。

## 开发者关注点

- **v2.3.0 回归是当前首要风险**：PTY 僵尸进程、PowerShell 启动失败、桌面 renderer 崩溃、GNOME Terminal 主题未恢复等问题均与升级体验密切相关。  
- **子代理协议仍不完整**：续接、实时事件流、状态上报、失败通知、父级干预均存在断点，说明多代理能力正快速扩张，但跨会话一致性尚未完全成熟。  
- **Provider 接入需要更自动化**：静态模型目录、异步发现时序、reasoning 能力和 API 类型兼容性成为模型接入的主要摩擦点。  
- **长会话稳定性受到重视**：图片数量上限、UTF-8 分页、消息回退、权限等待持久化等需求表明，用户希望 OpenCode 更适合长时间运行和自动化工作流。  
- **桌面端基础体验仍需补齐**：项目增删、归档恢复、浏览器兼容和渲染稳定性等问题直接影响非 CLI 用户的采用。  
- **安全与可观测性诉求上升**：MCP TLS、错误响应可读性、JSON 子代理事件流和会话隔离，均是开发者构建可靠集成时关注的底层能力。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报

**日期：2026-11-15**  
**项目：** [1jehuang/jcode](https://github.com/1jehuang/jcode)

## 今日速览

今日社区重点集中在 **Windows 多窗口稳定性、终端复用器中的图像与 LaTeX 渲染，以及模型价格表和 CI 依赖锁定问题**。多个修复已提交 PR，包括共享服务断连、孤儿进程无限重启、Cargo.lock 缺失依赖和 Herdr/Zellij 图像协议探测。

过去 24 小时共有 **7 个 Issue 更新、24 个 PR 更新**，其中新建 PR 主要覆盖 CI 稳定性、价格漂移检测和终端兼容性问题。

## 社区热点 Issues

> 过去 24 小时仅更新 7 个 Issue，以下列出全部重点 Issue。

### 1. Windows 共享服务关闭会中断其他窗口

- **问题：** [#2177 — Windows: closing the window that started the shared server disconnects all the other windows](https://github.com/1jehuang/jcode/issues/2177)
- **重要性：** Windows 用户通常同时运行多个 jcode 窗口。关闭启动共享服务的窗口会导致其他窗口短暂断开；若正在执行 swarm，worker 任务可能被终止，且 coordinator 可能无法继续唤醒。
- **社区反应：** 今日新建 Issue，暂无评论和点赞。该问题已形成对应修复 PR [#2176](https://github.com/1jehuang/jcode/pull/2176)。

### 2. 硬编码模型价格可能长期失准

- **问题：** [#2178 — ci: catch drift in the hard-coded LLM price tables](https://github.com/1jehuang/jcode/issues/2178)
- **重要性：** Provider 定价经常调整，而 jcode 在两个文件中硬编码了模型价格，可能导致费用估算持续使用过期数据。
- **社区反应：** 今日新建 Issue，暂无评论；已配套提交 PR [#2179](https://github.com/1jehuang/jcode/pull/2179)，计划按周及价格相关 PR 自动检查漂移。

### 3. Windows 孤儿 `server keepalive` 无限拉起守护进程

- **问题：** [#1158 — Windows: orphaned `server keepalive` respawns the daemon forever](https://github.com/1jehuang/jcode/issues/1158)
- **重要性：** hotkey listener 异常退出且未关闭 lifetime stdin pipe 时，keepalive 会持续重启 daemon；报告环境一度出现 **3,733 个进程、占用 14.26 GB 内存**。
- **社区反应：** Issue 有 3 条评论；因被标记为高优先级且需人工决策，仍处于开放状态。

### 4. Antigravity 模型在 0.99.1 中不可用

- **问题：** [#1956 — Antigravity models are blocked in 0.99.1](https://github.com/1jehuang/jcode/issues/1956)
- **重要性：** 多个 Antigravity 模型调用 `generateContent` 时返回 HTTP 400，涉及工具函数 schema 中未定义属性，反映 schema dialect 兼容性问题。
- **社区反应：** Issue 有 7 条评论，关注度较高。PR [#1957](https://github.com/1jehuang/jcode/pull/1957) 尝试保留 `allOf` schema、执行 `scalar_types` 一致性检查并修复压缩后的 tool turn。

### 5. Windows Terminal 下内联图片与 LaTeX 降级为文本

- **问题：** [#2173 — Inline images and LaTeX fall back to text inside Herdr/Zellij due to masked terminal identity](https://github.com/1jehuang/jcode/issues/2173)
- **重要性：** Herdr/Zellij 隐藏了真实终端身份，导致 jcode 无法识别 Kitty graphics 等能力，即便外层终端（如 Ghostty）实际支持图像渲染。
- **社区反应：** 昨日新建、暂无评论；已有 PR [#2174](https://github.com/1jehuang/jcode/pull/2174) 和 [#2066](https://github.com/1jehuang/jcode/pull/2066) 提供修复。

### 6. Cargo.lock 缺少 clap 依赖，破坏 `--locked` 构建

- **问题：** [#2171 — master CI: --locked cargo commands fail, Cargo.lock is missing the clap edge for jcode-tui](https://github.com/1jehuang/jcode/issues/2171)
- **重要性：** `jcode-tui` 引入可选 `clap` 依赖后未更新 lockfile，导致 master 上所有带 `--locked` 的 Cargo 命令失败，并影响 Linux、macOS 和 Windows CI。
- **社区反应：** 暂无评论；已有专门修复 PR [#2172](https://github.com/1jehuang/jcode/pull/2172) 和综合 CI 修复 PR [#2176](https://github.com/1jehuang/jcode/pull/2176)。

### 7. 两阶段级联 Suggested Replies 与 Default Action Focus

- **问题：** [#1894 — Add two-stage cascading Suggested Replies with Default Action Focus and structured SystemOne state](https://github.com/1jehuang/jcode/issues/1894)
- **重要性：** 计划在 TUI 输入框上方引入两阶段建议回复，结合 OpenJev/Laya SystemOne 结构化决策与 OpenGF 生成候选，以改善代理交互中的默认行动选择。
- **社区反应：** Issue 有 5 条评论；对应 PR [#1884](https://github.com/1jehuang/jcode/pull/1884) 已提交，功能默认关闭，可通过配置或环境变量启用。

## 重要 PR 进展

### 1. 恢复 master CI 全平台绿灯

- **PR：** [#2176 — fix(ci): restore green master CI gates](https://github.com/1jehuang/jcode/pull/2176)
- **内容：** 修复 `Cargo.lock` 缺失依赖以及跨 Linux、macOS、Windows 的失败 CI gate，目标是恢复 master 和后续 PR 的可合并状态。
- **关联：** [#2171](https://github.com/1jehuang/jcode/issues/2171)

### 2. 自动检测硬编码 LLM 价格漂移

- **PR：** [#2179 — ci: check hard-coded LLM prices for drift weekly and on pricing PRs](https://github.com/1jehuang/jcode/pull/2179)
- **内容：** 定期检查 provider 价格表是否与官方定价一致，并在涉及价格的 PR 中触发校验，降低费用估算长期过期的风险。
- **关联：** [#2178](https://github.com/1jehuang/jcode/issues/2178)

### 3. 补齐 Cargo.lock 中 clap 依赖边

- **PR：** [#2172 — fix: add missing clap entry to Cargo.lock](https://github.com/1jehuang/jcode/pull/2172)
- **内容：** 重新生成 lockfile，使 `jcode-tui` 的可选 `clap` 依赖与 manifest 保持一致，恢复 `--locked` 构建。
- **关联：** [#2171](https://github.com/1jehuang/jcode/issues/2171)

### 4. Herdr/Zellij 自动探测图像协议

- **PR：** [#2174 — fix(tui): auto-probe image protocol for Herdr and Zellij multiplexers](https://github.com/1jehuang/jcode/pull/2174)
- **内容：** 在终端复用器环境中自动探测 Kitty graphics 等图像协议，避免内联图片和 LaTeX 无条件降级成文本或 half-block。
- **关联：** [#2173](https://github.com/1jehuang/jcode/issues/2173)

### 5. Herdr 内直接识别 Kitty graphics

- **PR：** [#2066 — fix(mermaid): detect Kitty graphics protocol inside Herdr without manual probe](https://github.com/1jehuang/jcode/pull/2066)
- **内容：** 针对 Herdr 的 `HERDR_ENV` 和 Ghostty 终端特征增加快速协议识别，减少 Mermaid、图片等渲染能力探测失败。
- **关联：** [#1631](https://github.com/1jehuang/jcode/issues/1631)

### 6. 修复 Gemini/Antigravity 工具 schema 兼容性

- **PR：** [#1957 — fix(schema-dialect,gemini): preserve allOf schemas, enforce scalar_types conformance, and repair compacted tool turns](https://github.com/1jehuang/jcode/pull/1957)
- **内容：** 保留 `allOf` 组合 schema、统一 `scalar_types` 行为，并修复压缩后的工具调用轮次，目标是消除 Antigravity HTTP 400。
- **关联：** [#1956](https://github.com/1jehuang/jcode/issues/1956)

### 7. 增强 Antigravity CLI 版本及新模型支持

- **PR：** [#1834 — fix(antigravity): detect agy CLI version for User-Agent and support Gemini 4 Carbon & Argon](https://github.com/1jehuang/jcode/pull/1834)
- **内容：** 动态解析 Antigravity CLI 版本并用于 User-Agent，同时增加 Gemini 4 Carbon、Argon 模型支持。
- **关联：** [#1833](https://github.com/1jehuang/jcode/issues/1833)

### 8. 自定义 OpenAI-compatible Provider 的模型级配置

- **PR：** [#1879 — feat: per-model display_name, reasoning override and effort config](https://github.com/1jehuang/jcode/pull/1879)
- **内容：** 允许 OpenAI-compatible provider 按模型配置显示名称、reasoning 覆盖和 effort，解决同一网关中不同模型层级展示与能力配置不一致的问题。
- **关联：** [#1879](https://github.com/1jehuang/jcode/pull/1879)

### 9. OpenAI-compatible 推理参数往返与上下文窗口解耦

- **PR：** [#2159 — provider: make OpenAI-compatible reasoning round-trip + context window agnostic](https://github.com/1jehuang/jcode/pull/2159)
- **内容：** 不再仅依据模型 ID 判断能力，而是依据端点返回信息处理 reasoning，并降低模型上下文窗口配置与具体模型名称的耦合。
- **关联：** [#2157](https://github.com/1jehuang/jcode/issues/2157)

### 10. 支持 `@file` 文件选择器与 frecency 排序

- **PR：** [#1889 — feat(tui): @file mention picker with frecency ranking](https://github.com/1jehuang/jcode/pull/1889)
- **内容：** 在 TUI 提示词中通过 `@file` 快速引用文件，并按最近使用频率排序，提升大型代码库中的提示输入效率。
- **关联：** [#570](https://github.com/1jehuang/jcode/issues/570)

## 功能需求趋势

### 1. 终端兼容性与富媒体渲染

- 用户希望 jcode 在 **Herdr、Zellij、Ghostty、WezTerm** 等终端组合中正确识别图像协议、颜色能力和终端身份。
- 需求从“手动探测”转向 **自动能力发现和可靠降级**。
- 相关 Issues/PR：[#2173](https://github.com/1jehuang/jcode/issues/2173)、[#2174](https://github.com/1jehuang/jcode/pull/2174)、[#2066](https://github.com/1jehuang/jcode/pull/2066)、[#2175](https://github.com/1jehuang/jcode/pull/2175)。

### 2. Windows 多实例与进程生命周期管理

- 社区重点关注 **共享服务生命周期、窗口关闭语义、hotkey listener 异常和孤儿进程清理**。
- 当前诉求不仅是“避免断连”，还包括防止 keepalive 无限拉起 daemon，以及保障 swarm worker 不被意外终止。
- 相关链接：[#2177](https://github.com/1jehuang/jcode/issues/2177)、[#1158](https://github.com/1jehuang/jcode/issues/1158)。

### 3. Provider、模型与推理能力适配

- 社区持续要求支持 **Antigravity、Gemini 新模型及 OpenAI-compatible 自定义网关**。
- 能力判断正从模型名硬编码转向依据服务端返回的模型元数据，并要求模型级 reasoning、effort、显示名和上下文窗口配置。
- 相关链接：[#1956](https://github.com/1jehuang/jcode/issues/1956)、[#1834](https://github.com/1jehuang/jcode/pull/1834)、[#1879](https://github.com/1jehuang/jcode/pull/1879)、[#2159](https://github.com/1jehuang/jcode/pull/2159)。

### 4. TUI 交互效率与代理决策辅助

- `@file` 文件选择器减少手动输入路径的成本。
- 两阶段 Suggested Replies 与 Default Action Focus 旨在提升代理交互中的下一步决策质量。
- 可配置自动重试与 sidecar fallback 则增强了故障恢复能力。
- 相关链接：[#1889](https://github.com/1jehuang/jcode/pull/1889)、[#1884](https://github.com/1jehuang/jcode/pull/1884)、[#1878](https://github.com/1jehuang/jcode/pull/1878)。

### 5. 费用透明度与维护自动化

- 模型价格表准确性直接影响成本估算和用户信任。
- 社区希望通过 **每周自动检查、价格 PR 校验和测试隔离** 降低手工维护成本。
- 相关链接：[#2178](https://github.com/1jehuang/jcode/issues/2178)、[#2179](https://github.com/1jehuang/jcode/pull/2179)、[#1880](https://github.com/1jehuang/jcode/pull/1880)。

## 开发者关注点

1. **稳定性优先于新功能：** 当前最突出的问题是 Windows 多窗口断连、孤儿进程激增和 CI 红灯，说明可靠运行是近期首要目标。
2. **终端能力需要自动适配：** 终端复用器屏蔽身份信息，使图片、LaTeX、Mermaid 和 OSC 状态检测受到影响；开发者希望减少手工配置。
3. **Provider 兼容性不能依赖模型名称猜测：** 自定义网关和新型模型需要从端点动态获取能力，并正确往返 reasoning 参数。
4. **成本数据必须及时更新：** 硬编码价格已构成维护隐患，自动漂移检测比人工复核更可持续。
5. **构建与测试必须可重复：** `Cargo.lock` 漂移和环境污染导致 CI、并行测试间歇失败，开发者要求 lockfile、环境隔离和 CI gate 始终可靠。
6. **高频 TUI 操作仍有机会优化：** 文件引用、建议回复、模型选择持久化、自动重试及 TPS 显示控制，体现了降低交互摩擦的持续需求。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-15

## 今日速览

过去 24 小时无新版本发布，但社区集中反馈了 **工具调用时序、Codemode 稳定性、会话恢复、模型适配与安装器识别** 等问题，其中多项已被快速关闭或合入修复。另一个明显趋势是：开发者开始更重视 **上下文成本、工具输出可观测性与跨平台体验**。

## 社区热点 Issues

1. **同一消息中的 Bash 与 Read 并发执行，Read 可能先于命令完成**  
   P0 问题会直接导致模型读取尚未生成的构建产物或日志，出现陈旧内容、文件不存在等错误；7 条评论显示该问题受到较高关注。  
   [#11950](https://github.com/earendil-works/pi/issues/11950)

2. **Codemode 在文件读取遇到 ENOENT 并取消兄弟任务时抛出未捕获 AbortError**  
   该问题可导致 Pi 1.5.2 进程退出，影响批量文件操作；目前已关闭，说明修复已进入处理流程。  
   [#12167](https://github.com/earendil-works/pi/issues/12167)

3. **超大上下文在压缩后无法加载，触发栈溢出**  
   约 12 万条上下文记录会令 `buildContextEntries` 和 `ctx.getContextUsage()` 抛出 `RangeError`，甚至使用 `-ne` 启动也会崩溃，暴露长会话恢复机制的扩展性缺陷。  
   [#12154](https://github.com/earendil-works/pi/issues/12154)

4. **Codemode 脚本声明顶层变量 `tools` 时在执行前失败**  
   变量名与内部工具对象冲突，可能阻断合法脚本运行；issue 获得 1 个点赞，并带有 PR 协作意向。  
   [#11226](https://github.com/earendil-works/pi/issues/11226)

5. **OpenAI Completions 在重试前丢失 SSE 错误码和类型**  
   HTTP 200 的 SSE 流中即使包含 `503` 错误，适配器也可能直接结束而不重试，影响 OpenAI 兼容服务的容错。  
   [#12169](https://github.com/earendil-works/pi/issues/12169)

6. **`openai-completions` 无法正确声明 classifier 模型**  
   `models.json` 中使用 `"api": "typesafe-system-one"` 时仍被注册为普通 chat 模型，反映自定义模型类型映射尚未完整支持。  
   [#12140](https://github.com/earendil-works/pi/issues/12140)

7. **Pi 在违反 OpenAI policy 后未自动重试**  
   偶发策略拦截后对话直接结束，用户必须手动输入“continue”；问题已关闭，但自动恢复策略仍值得持续观察。  
   [#12180](https://github.com/earendil-works/pi/issues/12180)

8. **`/login` 将已经失效的 `!command` 凭据显示为已配置**  
   密钥管理命令失败后界面仍显示绿色“已配置”，但请求实际报 `No API key found`，属于状态校验与真实可用性不一致。  
   [#12164](https://github.com/earendil-works/pi/issues/12164)

9. **安装器将系统中的同名 `pi` 命令误认为 Pi 本身**  
   Ubuntu 的 `/usr/bin/pi`、Windows PATH 互操作甚至 WSL 中的 `/mnt/c` 安装都可能被错误识别，并提供卸载或重装操作，存在误删其他程序的风险。  
   [#12166](https://github.com/earendil-works/pi/issues/12166) · [#12172](https://github.com/earendil-works/pi/issues/12172)

10. **Codemode 批量调用隐藏了技能读取记录**  
    通过 `tools.read()` 读取 `SKILL.md` 时，界面只显示 Codemode 调用，无法直观看到技能激活过程，降低工具调用的可观测性。  
    [#12176](https://github.com/earendil-works/pi/issues/12176)

## 重要 PR 进展

> 过去 24 小时仅更新了 4 条 PR，以下按影响力列出全部动态；今日没有可报告的新版本发布。

1. **`ctx.ui.select` 新增 `description` 选项**  
   将已有的 `ExtensionSelectorComponent.description` 能力透传至扩展 API，使选择题可以附带上下文说明；对应 issue 同步关闭。  
   [#12178](https://github.com/earendil-works/pi/pull/12178) · [#12179](https://github.com/earendil-works/pi/issues/12179)

2. **新增 Agent 工具输出截断配置**  
   引入 `toolOutput.maxBytes` 和 `toolOutput.maxLines`，默认分别为 51200 字节、2000 行。Bash 与 Read 的模型侧输出会被截断，同时保留完整内容和省略位置说明。  
   [#12163](https://github.com/earendil-works/pi/pull/12163)

3. **修复 GitHub Copilot 模型推理参数与 token 读取**  
   从 models.dev 获取推理能力信息，为 Gemini、Kimi 等 Copilot 模型发送 `reasoning_effort`，并读取 reasoning tokens；PR 当前标记为进行中。  
   [#12110](https://github.com/earendil-works/pi/pull/12110)

4. **新增克隆本仓库的 Coder Docker 模板**  
   在 `coder/` 下提供工作区模板配置，通过 Git 克隆初始化仓库，并用 code-server 打开 `~/pi`，体现远程开发与容器化部署需求。  
   [#12162](https://github.com/earendil-works/pi/pull/12162)

## 功能需求趋势

- **工具调用可靠性与可观测性**：工具依赖顺序、批量调用、取消行为、技能读取展示和错误传播成为近期最集中的议题。  
  [#11950](https://github.com/earendil-works/pi/issues/11950) · [#12167](https://github.com/earendil-works/pi/issues/12167) · [#12176](https://github.com/earendil-works/pi/issues/12176)

- **上下文与输出成本治理**：长会话栈溢出、`searchTools()` 返回约 36KB 描述，以及工具输出截断需求，均指向模型可见上下文膨胀问题。  
  [#12154](https://github.com/earendil-works/pi/issues/12154) · [#12165](https://github.com/earendil-works/pi/issues/12165) · [#12163](https://github.com/earendil-works/pi/pull/12163)

- **模型与供应商适配**：开发者持续要求更准确的模型类型、推理等级、SSE 错误分类，以及 Gemini xhigh、Gemini 4 Hydrogen 等新模型支持。  
  [#12140](https://github.com/earendil-works/pi/issues/12140) · [#12177](https://github.com/earendil-works/pi/issues/12177) · [#12110](https://github.com/earendil-works/pi/pull/12110)

- **跨平台终端体验**：macOS 全屏复制、命令历史、全屏 URL 双击选择以及 WSL/Windows 安装互操作均受到关注。  
  [#12174](https://github.com/earendil-works/pi/issues/12174) · [#12171](https://github.com/earendil-works/pi/issues/12171) · [#12175](https://github.com/earendil-works/pi/issues/12175) · [#12172](https://github.com/earendil-works/pi/issues/12172)

- **扩展 API 与远程开发能力**：UI 选择器描述字段、树视图预览、RPC 导航命令和 Coder 容器模板，体现了扩展生态与远程开发场景的持续增强。  
  [#12179](https://github.com/earendil-works/pi/issues/12179) · [#12182](https://github.com/earendil-works/pi/issues/12182) · [#12170](https://github.com/earendil-works/pi/issues/12170) · [#12162](https://github.com/earendil-works/pi/pull/12162)

## 开发者关注点

1. **执行顺序必须可预测**：模型在同一消息中发出 Bash、Read 等工具调用时，开发者期待具有数据依赖关系的操作按顺序执行，而不是默认并发。  
   [#11950](https://github.com/earendil-works/pi/issues/11950)

2. **异常不能破坏 Agent 会话**：ENOENT、批量取消、宿主重启和策略拦截等边界情况，需要以可恢复错误或自动重试处理，避免未捕获异常或对话中断。  
   [#12167](https://github.com/earendil-works/pi/issues/12167) · [#12181](https://github.com/earendil-works/pi/issues/12181) · [#12180](https://github.com/earendil-works/pi/issues/12180)

3. **长会话必须稳定且节省上下文**：社区不仅关注“能否恢复”，还要求上下文重建不爆栈、工具搜索结果更精简、模型侧输出可控。  
   [#12154](https://github.com/earendil-works/pi/issues/12154) · [#12165](https://github.com/earendil-works/pi/issues/12165) · [#12163](https://github.com/earendil-works/pi/pull/12163)

4. **安装与凭据状态必须可信**：安装器应识别 Pi 的真实来源，避免误操作同名程序；登录界面也应验证命令型凭据是否实际可用。  
   [#12166](https://github.com/earendil-works/pi/issues/12166) · [#12172](https://github.com/earendil-works/pi/issues/12172) · [#12164](https://github.com/earendil-works/pi/issues/12164)

5. **兼容接口需要更严格的语义测试**：OpenAI 兼容端点中的 SSE 错误码、角色选择、classifier 类型和推理等级均需按供应商能力准确映射。  
   [#12169](https://github.com/earendil-works/pi/issues/12169) · [#12101](https://github.com/earendil-works/pi/issues/12101) · [#12140](https://github.com/earendil-works/pi/issues/12140) · [#12177](https://github.com/earendil-works/pi/issues/12177)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
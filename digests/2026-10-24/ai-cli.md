# AI CLI 工具社区动态日报 2026-10-24

> 生成时间: 2026-10-24 04:03 UTC | 覆盖工具: 8 个

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

**数据日期：2026-10-24**  
**数据范围：各项目过去 24 小时的 Releases、Issues 与 Pull Requests。**

> 说明：原始摘要未对所有项目提供完整 Issues/PR 精确统计。下表仅列出可确认的数据；“—”表示摘要未提供，不代表实际为零。

## 1. 生态全景

AI CLI 竞争正从单纯的模型与命令生成能力，转向**长任务可靠性、权限治理、扩展生态和跨端体验**的综合竞争。各主流工具今日均暴露了类似问题：上下文压缩可能恢复过期指令、Agent 可能被误报为成功、MCP 生命周期与认证不成熟，以及权限审批在主 Agent、子 Agent 和桌面端之间不一致。

与此同时，CLI 正快速演化为桌面工作台、多 Agent 编排器和插件平台，Windows、macOS、Wayland、Wayland/Windows 桌面生命周期及本地配置目录成为高频摩擦点。整体来看，当前生态的主要矛盾不是“缺少功能”，而是**升级不破坏核心流程、状态语义可信、权限行为可解释，以及跨 Provider、MCP、客户端的能力保持一致**。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 至少 10 条热点 Issue | 0 条更新 | `v2.1.310`：新增 Monitor/插件监控，修复网关参数兼容 | 高 |
| **OpenAI Codex** | 至少 10 条热点 Issue | 至少 10 条，列出的均为 CLOSED | `rust-v0.164.0`、`rust-v0.165.0-alpha.1` | 很高 |
| **Gemini CLI** | 至少 10 条热点 Issue | 至少 10 个主要 PR | `v0.67.0-nightly.20261024.gcd1b45c2d` | 很高 |
| **GitHub Copilot CLI** | 31 条更新 Issue；另列 10 条热点 | 0 条更新 | 3 个补丁版：`v1.0.104-0/-1/-2` | 高 |
| **Kimi Code CLI** | 0 | 0 | 无 | 低/静默 |
| **OpenCode** | 至少 10 条热点 Issue | 至少 10 个主要 PR | 无 | 很高 |
| **jcode** | 8 条更新 Issue | 至少 10 个主要 PR | 无 | 中高 |
| **pi** | 至少 10 条热点 Issue | 29 个 PR 更新 | 无 | 很高 |

### 活跃度结论

- **PR 数量与持续开发强度**：pi 最突出，过去 24 小时有 **29 个 PR 更新**；Codex、Gemini CLI、OpenCode、jcode 均保持高频迭代。
- **Issue 覆盖面**：Copilot CLI 明确更新 **31 条 Issue**，Codex、Claude Code、Gemini CLI、OpenCode 和 pi 的热点问题集中在升级回归、长任务、权限、MCP 与桌面端。
- **发布节奏**：Codex 采用稳定版加 alpha 双轨发布；Copilot CLI 连续发布三个补丁版；Gemini CLI 保持 nightly 迭代；Claude Code 通过单版本扩展 Monitor 能力。
- **Kimi Code CLI** 今日无活动，短期无法据此判断整体活跃度，但与主流工具相比可见度和迭代信号偏弱。

---

## 3. 共同关注的功能方向

### 3.1 上下文压缩与长会话语义正确性

这是当前最普遍、也最影响任务正确性的方向：

- **Codex**：压缩完成后，压缩前的用户提示可能被重新激活为当前指令，导致 Agent 继续执行过期任务。
- **Claude Code**：关注压缩停滞、`tool_result` 丢失、`PreCompact` hook 无限制注入导致上下文膨胀，以及未变更文件重复读取。
- **Gemini CLI**：通过截断大型工具输出、精确匹配 include pattern、引入 AST-aware 读取来降低上下文和 token 成本。
- **OpenCode**：修正压缩上限与输出预留倒置的问题。
- **pi**：关注大型会话全量重绘、fork 逐条写文件和工具参数 O(n²) 解析。

**开发者启示**：压缩不能只追求“保留更多内容”，还必须保留**指令优先级、当前任务边界、工具结果和状态机语义**，并提供 compaction 前后可追踪记录。

### 3.2 权限、安全与沙箱隔离

各工具均把权限从“提示用户确认”推进到“基于上下文自动决策”，但误报和越权问题同时存在：

- **Claude Code**：Auto mode 误拦截已授权写入、权限修改和 auto-memory 反馈。
- **Copilot CLI**：可信目录内的 Shell 命令可能被静默批准，Assisted Permissions 还出现 PRU 异常消耗争议。
- **Gemini CLI**：社区推动 OS 级 Bash 沙箱，并担忧 `git reset --force` 等破坏性操作。
- **OpenCode**：用户要求限制 Agent 访问工作目录外文件，并引入类似 macOS Seatbelt 的隔离机制。
- **pi**：重点暴露非 ASCII 编辑参数被错误解析后静默损坏文件的风险。

**开发者启示**：成熟权限系统至少需要四层：**工作区边界、命令风险分类、用户授权上下文、不可逆操作保护**。仅凭路径可信度或关键词分类都不足。

### 3.3 MCP 生命周期、认证与跨入口互操作

MCP 已成为插件生态基础，但连接、认证、工具发现和协议一致性仍不成熟：

- **Claude Code**：Cowork、Chat、Code 之间共享 `tools/list`，破坏 MCP Apps；MCP elicitation 未正确渲染而挂起。
- **Codex**：生成线程摘要也会启动完整 MCP 栈；社区关注冷启动、进程残留和超时。
- **Copilot CLI**：OAuth Token 过期后反复发送旧 Token，Windows Entra 凭据无法跨进程缓存；ACP 下 Computer Use 插件不可用。
- **OpenCode**：插件、MCP 和配置变更必须重启才能生效。
- **pi**：推进 Stateless MCP 规范、elicitation、消息大小限制和断点续传。

**开发者启示**：MCP 已不只是“能连接服务器”，而需要完整的**按需启动、OAuth 刷新、进程回收、超时、协议协商、能力发现和多入口一致性**。

### 3.4 Agent/Subagent 编排与可信终止状态

- **Gemini CLI**：Subagent 达到 `MAX_TURNS` 后仍报告 `success/GOAL`；Generalist Agent 可能永久挂起；Skills 和 Subagents 很少被主动调用。
- **OpenCode**：子 Agent 写入操作无法触发 `ask` 审批；Goal/Todo、并行委派和共享能力成为重点。
- **Copilot CLI**：后台子代理运行超 600 秒后停止，插件 Skill 命名在模型侧与用户侧不一致。
- **jcode**：加入 `ask_user`、swarm model、Goal/Todo 之外的细粒度模型与 effort 配置。
- **Claude Code**：关注动态 workflow 权限授予、长期运行 stdio 子进程和工具执行可观察性。

**开发者启示**：多 Agent 系统的核心不是并行数量，而是**终止状态真实、权限可继承、任务可追踪、失败可恢复**。

### 3.5 桌面端跨平台稳定性

桌面端问题已明显影响 CLI 品牌体验：

- **Codex**：Windows CLI daemon 权限错误、Windows App 内容只返回引用、焦点切换反复重载、听写消失。
- **Claude Code**：macOS `WindowServer` 高 CPU、Windows 截图时 `TextInputHost` 飙高 CPU、布局重置。
- **OpenCode**：Desktop 数据库膨胀至 **3.47 GB**，同步查询导致会话加载卡死。
- **Copilot CLI**：Windows 凭据缓存、ACP 插件和终端行为存在平台差异。
- **Gemini CLI**：Wayland 环境 Browser Agent 失败。
- **jcode**：macOS 配置隔离、符号链接祖先路径等问题连续出现。

**开发者启示**：Windows/macOS/Linux 并不应只是“能启动”；渲染、输入法、截图、文件系统、凭据和生命周期都需要真实平台回归测试。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与生态定位 |
|---|---|---|---|
| **Claude Code** | 终端编码、插件、Monitor、MCP Apps、Claude/Bedrock/Vertex 等多 Provider | 高级开发者、Claude 生态用户、复杂工程团队 | 以 Claude 核心模型为中心，向插件、桌面和多云 Provider 扩展；强调 hook、工具与细粒度权限 |
| **OpenAI Codex** | CLI、Desktop、Cloud、app-server、Hooks、Guardian、Responses API | OpenAI 用户、自动化编排者、跨端开发团队 | 强调服务端状态、app-server、多端同步、可观测性和审批策略；PR 深入上下文、采样、分类及数据库层 |
| **Gemini CLI** | Subagents、Skills、Browser Agent、AST 感知代码理解、OS 沙箱 | 大型代码库用户、Google 生态用户、研究型 Agent 开发者 | 积极试验多 Agent、Skills、AST 和沙箱路线；nightly 高频迭代，功能前瞻性较强 |
| **GitHub Copilot CLI** | GitHub 生态、Autopilot、ACP、插件、企业权限、BYOK | GitHub 订阅用户、企业开发团队、脚本自动化用户 | 与 GitHub 平台和企业身份体系深度结合，强调托管模型、权限辅助和企业代理兼容 |
| **OpenCode** | 开源、多 Provider、桌面/TUI、插件、Goal/Todo、多 Agent | 偏好开源和可控性的个人开发者、平台型用户 | Provider 灵活性和快速 UI 迭代突出，Git/会话数据库/插件均高度自研；V2 迁移与性能治理是当前重点 |
| **jcode** | TUI、跨 Provider、ACP、多模型、Ask-user、绘图、本地可视化 | 注重交互体验、模型路由和可定制性的开发者 | 强调多模型逐项配置、Agent 人机协作和跨平台细节；生态规模较小但功能方向细致 |
| **pi** | 嵌入式 Runtime、多模型、MCP、长会话、多 Agent | 扩展开发者、工具作者、构建 Agent 基础设施的团队 | 更像可嵌入的 Agent Runtime，而非仅面向终端用户；PR 数量高，重点在协议、扩展和性能底层 |
| **Kimi Code CLI** | 今日缺乏足够动态数据 | 暂无法从当日数据判断 | 当前可见活动显著低于其他项目，需结合更长周期评估 |

### 定位差异总结

- **最偏企业生态与托管服务**：Codex、Copilot CLI。
- **最偏前沿 Agent 能力实验**：Gemini CLI、OpenCode、pi。
- **最偏 Claude 中心化扩展**：Claude Code。
- **最偏多 Provider 与本地可控**：OpenCode、jcode、pi。
- **最偏开发者交互定制**：jcode；其 `ask_user`、逐模型 effort、swarm model 等能力较突出。
- **最像可嵌入基础设施**：pi；会话、扩展、MCP 协议和 Runtime 性能是重点。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：高密度、多产品线并行反馈**

- **Codex**：Issue、PR、Desktop、CLI、Cloud、Guardian 与 app-server 同时推进；Windows 问题集中，说明用户规模扩大但回归覆盖不足。
- **Gemini CLI**：Agent/Subagent、Browser Agent、Skills、AST、沙箱和终端体验形成完整议题群，nightly 开发活跃。
- **OpenCode**：V2 迁移、Goal/Todo、插件、Git 性能、Desktop 数据库等议题并发推进。
- **pi**：过去 24 小时有 **29 个 PR 更新**，热度和底层研发密度最高之一。

**第二梯队：成熟用户驱动的高关注修复**

- **Claude Code**：热点 Issue 达 **270/442 个赞**的规模，显示社区影响力和关注度很强；重点是权限、桌面性能和插件契约。
- **Copilot CLI**：单日更新 **31 条 Issue**，企业部署、MCP OAuth、权限和 BYOK 问题集中。

**第三梯队：活跃但生态体量较小**

- **jcode**：8 条更新 Issue、至少 10 个主要 PR，研发密度不低，但缺少大规模社区验证信号。
- **Kimi Code CLI**：当日无活动，暂列低活跃。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 判断 |
|---|---|---|
| **成熟度较高，但稳定性承压** | Codex、Claude Code、Copilot CLI | 产品面广、用户规模大、协议与桌面能力丰富；升级回归、权限误报和跨平台问题较突出 |
| **高速迭代，能力扩张明显** | Gemini CLI、OpenCode | 新能力多、PR 密度高，但状态语义、迁移和运行时稳定性仍在追赶 |
| **工程活跃，生态验证不足** | jcode、pi | 底层改进密集，但部分问题来自真实生产环境较少；尤其 pi 更偏基础设施用户 |
| **当日信号不足** | Kimi Code CLI | 需要至少数周数据判断，不宜据单日下结论 |

总体上，**功能成熟度不等于稳定性成熟度**：主流工具已具备完整产品形态，但 Agent 的长任务正确性、权限一致性和跨平台可靠性仍未达到传统 IDE 或 CI 系统的水平。

---

## 6. 值得关注的趋势信号

### 信号一：CLI 正在变成 Agent Runtime，而非纯命令行工具

Codex app-server、Claude Monitor/插件、OpenCode Goal/Todo、pi 扩展与 MCP、jcode `ask_user` 都表明，CLI 正承担会话调度、后台任务、权限、上下文压缩和多端同步职责。

**参考价值**：选择 CLI 时，应重点评估其**任务状态机、事件协议、取消/恢复机制和扩展 API**，而不只是模型输出质量。

### 信号二：权限系统正从二元确认走向自动裁决，但可信度尚未建立

Auto mode、Assisted Permissions、可信目录自动批准和 Agent 沙箱都在发展，同时误拦截已授权操作、可信目录命令自动放行和 PRU 异常消耗也在同步暴露。

**参考价值**：短期部署应采用**保守白名单、不可逆操作硬确认、审计日志和明确授权上下文**，不要仅依赖 Agent 自动判断。

### 信号三：上下文压缩正成为下一阶段竞争核心

各工具都出现了压缩后恢复旧指令、长会话性能退化、输出无限膨胀和工具结果丢失等问题。竞争重点将从“上下文窗口多大”转向“压缩后还能否准确知道自己在做什么”。

**参考价值**：应要求 Agent 框架明确提供：**compaction 事件、指令版本、当前目标、已废弃指令、工具状态摘要和恢复测试**。

### 信号四：MCP 生态进入“协议可用性”阶段

OAuth 刷新、Stateless MCP、elicitation、消息大小限制、工具发现和跨入口能力不一致，说明 MCP 已从早期连接协议进入复杂工程化阶段。

**参考价值**：不要只验证“能否调用一个 MCP Server”，还要验证**断线重连、Token 刷新、Server 重启、协议降级、大响应、工具裁剪和权限继承**。

### 信号五：Windows 和桌面端是当前最明显的质量洼地

Codex、Claude Code、Copilot CLI、OpenCode 的高影响问题都集中在 Windows 或桌面生命周期；macOS 则主要暴露渲染、配置目录和符号链接问题。

**参考价值**：企业采用时应建立真实的**Windows 11、macOS ARM/Intel、Wayland、远程桌面和多显示器**测试矩阵，而不是只依赖 CI 中的 Linux 单元测试。

### 信号六：模型快速迭代正在制造“能力配置漂移”

不同工具都在修补新模型 reasoning effort、模型目录缓存、默认模型降级、Provider 专属参数和 BYOK 兼容。硬编码模型 ID 列表越来越难以维护。

**参考价值**：架构上应将**模型能力元数据、推理强度、别名、上下文窗口和 Provider 映射数据化**，避免散落在客户端和业务代码中。

### 信号七：性能问题开始从启动阶段扩散到长会话

pi 的 O(n²) 参数解析和大会话重绘、OpenCode 的数据库膨胀与 Git spawn、Claude Code 的 WindowServer CPU、Gemini CLI 的工具输出膨胀，都说明性能瓶颈已转向长期运行和复杂仓库。

**参考价值**：评测应覆盖**万级文件仓库、800+ 消息会话、数千次工具调用、持续数小时后台任务和数据库长期增长**，而不只测首屏启动速度。

---

## 决策建议

- **优先选择 Codex**：适合需要 CLI、Desktop、Cloud 与自动化编排统一体验，且愿意承担一定多端成熟度成本的用户。
- **优先选择 Claude Code**：适合 Claude 深度用户及插件、MCP、hooks 驱动的复杂工程工作流；部署前重点验证权限误报和桌面稳定性。
- **优先选择 Gemini CLI**：适合关注 Subagents、Skills、AST 感知和新型 Agent 工作方式的早期采用者。
- **优先选择 Copilot CLI**：适合 GitHub 企业生态，身份、托管模型和审批体系较完整；企业使用前需重点验证 MCP 认证与权限策略。
- **优先选择 OpenCode**：适合偏好开源、多 Provider 和快速扩展的开发者；采用 V2 前应先验证历史会话迁移与工作区 Git 策略。
- **优先选择 jcode/pi**：前者适合重视 TUI 交互和细粒度模型配置，后者适合构建嵌入式 Agent Runtime；两者都更依赖实施方自行建立生产级测试和治理层。
- **Kimi Code CLI**：本次仅有单日数据，暂不宜据此做生态成熟度结论，应结合后续发布频率、Issue 响应和生态集成数量再评估。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-10-24**  
> 说明：数据中 PR 的评论数未提供（显示为 `undefined`），因此以下“热度”主要结合 PR 序号、持续更新时间、Issue 关联度、讨论反馈及生态影响判断；当前展示的 PR 均为 **Open**。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [skill-creator：YAML frontmatter 解析修复 #1997](https://github.com/anthropics/skills/pull/1997) | 修复 Skill 描述和元数据被错误解析的问题，直接影响触发准确率、评测和描述优化。相关社区问题还包括评测触发率为 0%、Windows 兼容性及运行失败误判。 | **Open** |
| 2 | [skill-creator：独立运行与路径修复 #1681](https://github.com/anthropics/skills/pull/1681) | 修复 `package_skill.py` 无法直接执行、导入路径错误及 CLI 文档过时等打包问题，是完善 Skill 发布工作流的基础设施型改动。 | **Open** |
| 3 | [skill-creator：隔离触发评测并处理运行时失败 #1298](https://github.com/anthropics/skills/pull/1299) | 解决并发命令探测、跨进程干扰、Windows `select()` 异常以及运行时失败被误判为“非触发”等问题，直接回应 [#556](https://github.com/anthropics/skills/issues/556) 的 0% 触发率争议。 | **Open** |
| 4 | [mcp-builder：兼容 MCP 2.x 与自定义 HTTP Headers #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `streamable_http_client` 重命名及新版 HTTP 客户端配置方式，修复 MCP 服务连接兼容性。相关生态还在关注真实 MCP 工具调用评测全部失败的问题。 | **Open** |
| 5 | [webapp-testing：移除 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980) | 修复启动测试服务时的命令注入风险（CWE-78），反映社区对 Skill 内部脚本安全性的高度关注；另有表单元素识别修复 [#1976](https://github.com/anthropics/skills/pull/1976)。 | **Open** |
| 6 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | 为生成文档提供排版质量控制，处理孤行、寡行、标题落底和编号错位等 AI 文档常见问题。覆盖面广、痛点明确，虽提交较早但仍保持关注。 | **Open** |
| 7 | [Pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525) | 指导 Claude 创建、调试和验证 Python/Pyxel 复古游戏，支持无头运行、输入驱动测试和帧级检查，体现垂直领域 Skill 的增长。 | **Open** |
| 8 | [skill-quality-analyzer / skill-security-analyzer #83](https://github.com/anthropics/skills/pull/83) | 分别评估 Skill 的结构质量与安全风险，契合当前社区对 Skill 可审计性、供应链安全和信任边界的强烈需求。 | **Open** |

### 补充关注

- [frontend-design 清晰度与可执行性改进 #210](https://github.com/anthropics/skills/pull/210)：强调把面向开发者的说明转化为 Claude 能在单轮会话中执行的具体指令。
- [Notion 规格转实现与定量简历审计 #1245](https://github.com/anthropics/skills/pull/1245)：将产品/技术规格拆成可实施任务、验收标准和进度跟踪，代表“规格驱动交付”方向。
- [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)：将 Markdown 转换为带配音的 MP4，展示文档到多媒体的一键生产需求。
- [ODT 文档创建、填充与转换 #486](https://github.com/anthropics/skills/pull/486)：补齐开放文档格式处理能力。

---

## 2. 社区需求趋势

### 2.1 企业级组织共享与资产治理

[组织级 Skill 共享 #228](https://github.com/anthropics/skills/issues/228) 是最明确的产品需求：社区希望像共享文档一样共享 Skill，而不是手工传递 `.skill` 文件。

与之配套，官方与社区 Skill 的身份标识、权限边界和审核机制正在成为核心议题：

- [社区 Skill 冒用 `anthropic/` 命名空间 #492](https://github.com/anthropics/skills/issues/492)
- [Skill 质量与安全分析器 #83](https://github.com/anthropics/skills/pull/83)
- [Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385)

这表明社区期待的不只是“更多 Skill”，而是包含**来源认证、权限控制、版本管理、质量评分和安全审计**的企业级分发体系。

### 2.2 自动化质量门禁与交付验证

[Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385) 提出三阶段流程：

1. 任务前校准；
2. 对抗式审查；
3. 交付前验证。

与现有修复趋势一致：DOCX Skill 已要求验证 LibreOffice 输出及修订标记，[#1792](https://github.com/anthropics/skills/pull/1792)；webapp-testing 修复元素发现逻辑；[Pyxel #525](https://github.com/anthropics/skills/pull/525) 也强调状态检查和证据化验证。

社区越来越偏好能够**执行、测试、检查并证明结果正确**的 Skill，而不只是生成建议或文本。

### 2.3 Skill 自身的创建、评测与安全

围绕 `skill-creator` 的多个 PR 和 Issues 已形成明显需求簇：

- 准确解析 YAML frontmatter：[#1997](https://github.com/anthropics/skills/pull/1997)
- 修复评测触发率：[#556](https://github.com/anthropics/skills/issues/556)、[#1298](https://github.com/anthropics/skills/pull/1298)
- 改进 Skill 编写范式：[skill-creator 最佳实践 #202](https://github.com/anthropics/skills/issues/202)
- 防止评测查看器 XSS：[#1394](https://github.com/anthropics/skills/issues/1394)
- 避免 MCP 评测产生虚假工具错误：[mcp-builder evaluation #1390](https://github.com/anthropics/skills/issues/1390)

社区需要的是一套**可重复、可量化、可信且安全**的 Skill 生命周期工具链。

### 2.4 文档生成与专业内容处理

社区仍高度关注 Office 文档、PDF、演示文稿及多媒体生产：

- 文档排版：[#514](https://github.com/anthropics/skills/pull/514)
- DOCX XML 正确性：[#2018](https://github.com/anthropics/skills/issues/2018)
- LibreOffice 超时和修订标记验证：[#1792](https://github.com/anthropics/skills/pull/1792)
- ODT/ODS 读写与转换：[#486](https://github.com/anthropics/skills/pull/486)
- Markdown 转视频与配音：[#1703](https://github.com/anthropics/skills/pull/1703)

需求已从“能生成文件”升级为“能生成格式正确、视觉专业、可自动验收的文件”。

### 2.5 上下文与长期记忆管理

[compact-memory #1329](https://github.com/anthropics/skills/issues/1329) 提议使用紧凑符号表示长期 Agent 状态，以减少散文式记忆对上下文的占用。

这与 [claude-api Skill 一次注入约 15.6 万 Token 的问题 #1487](https://github.com/anthropics/skills/issues/1487) 相互印证：社区需要更强的**上下文预算控制、渐进式加载和持久记忆压缩能力**。

### 2.6 垂直领域工程能力

新增需求覆盖：

- Web 前端设计：[#210](https://github.com/anthropics/skills/pull/210)
- Web 应用自动化测试：[#1980](https://github.com/anthropics/skills/pull/1980)
- HPC/Slurm 集群操作：[#1615](https://github.com/anthropics/skills/pull/1615)
- 智能合约静态审计：[#1771](https://github.com/anthropics/skills/pull/1771)
- Notion 规格驱动开发：[#1245](https://github.com/anthropics/skills/pull/1245)

社区正从通用文档生成转向**可执行、领域化、可验证的工程工作流**。

---

## 3. 高潜力待合并 Skills

以下 PR 均为 **Open**，但具备明确痛点、较新维护时间或较强生态关联度：

1. **[#1997：解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997)**  
   修复触发评测和描述优化的基础数据问题，可能成为后续 Skill 评测链路依赖的底层修复。

2. **[#1681：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681)**  
   降低打包和发布门槛，并消除命令行使用中的导入错误。

3. **[#1298：隔离 trigger evals](https://github.com/anthropics/skills/pull/1298)**  
   直接回应高频 Issue [#556](https://github.com/anthropics/skills/issues/556)，解决触发评测假阴性、跨平台失败和错误计分。

4. **[#1980：webapp-testing 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980)**  
   修复命令注入风险，安全收益明确，实施范围集中，具备快速合入价值。

5. **[#1976：正确识别 textarea 和 select](https://github.com/anthropics/skills/pull/1976)**  
   修复 Web UI 自动发现中的常见元素误判，可直接提高测试稳定性。

6. **[#1977：修复 `wrapAround()` 边界行为](https://github.com/anthropics/skills/pull/1977)**  
   范围小、行为明确，并已有对应 Issue [#1897](https://github.com/anthropics/skills/issues/1897)，适合快速修复。

7. **[#1792：DOCX 超时报错并验证输出](https://github.com/anthropics/skills/pull/1792)**  
   从“命令退出即成功”升级为“验证文件内容”，体现可靠交付方向。

8. **[#1730：替换 claude-api 失效链接](https://github.com/anthropics/skills/pull/1730)**  
   维护成本低、影响面明确，可快速改善官方文档和 Academy 指引可用性。

9. **[#525：Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)**  
   垂直领域特色鲜明，包含运行、调试和证据化验证闭环，具有较强传播潜力。

10. **[#83：Skill 质量与安全分析器](https://github.com/anthropics/skills/pull/83)**  
    与组织共享、命名空间信任边界和供应链安全趋势高度一致，长期战略价值较高。

### 需谨慎看待

[proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) 具有区块链与安全审计特色，但包含特定外部协议和链上锚定机制。合入前应重点审查供应链依赖、外部服务可用性、凭据处理及审计结论的准确性边界。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是建立一套可信、可分享、可评测并能对交付结果自动验证的 Skill 工程体系——让 Skill 从“提示词模板”升级为安全、可观测、可维护的 Agent 工作流资产。**

---

# Claude Code 社区动态日报

**日期：2026-10-24**  
**数据范围：过去 24 小时内更新的 Releases、Issues 与 Pull Requests**

## 1. 今日速览

Claude Code 发布 **v2.1.310**，重点加入 Monitor 工具及插件监控能力，并修复部分网关、兼容服务请求失败的问题。社区讨论集中于 **IDE 自动附加、权限分类器误拦截、macOS/Windows 桌面端性能与渲染异常、MCP/App 能力兼容性**；今日没有更新的 Pull Request。

## 2. 版本发布

### v2.1.310

主要更新：

- 新增 **Monitor 工具**和插件监控机制。
- 在 **Amazon Bedrock、Google Vertex AI、Microsoft Foundry** 上支持 Monitor 及插件监控。
- 当禁用遥测或非必要流量时，也支持相关监控能力。
- 修复部分网关和兼容服务拒绝 `effort-2025-…` 请求参数后，请求失败的问题。
- 在启用上述监控能力的场景中，阻止长时间前台休眠。

发布链接：[v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)

> 原始发布说明在数据中被截断，完整变更内容建议以 Release 页面为准。

## 3. 社区热点 Issues

以下按关注价值与社区互动量综合选取 10 条。

### 1. VS Code 扩展缺少“关闭自动附加”设置

**Issue：** [#24726](https://github.com/anthropics/claude-code/issues/24726) · **已关闭**  
社区希望为“自动附加当前文件或选区”提供开关，避免扩展在 IDE 中自动接管上下文。Issue 获得 **94 条评论、270 个赞**，是本轮最热议题，说明 IDE 工作流控制权是社区核心需求。

### 2. Linux 版未遵循 XDG Base Directory 规范

**Issue：** [#1455](https://github.com/anthropics/claude-code/issues/1455) · **开放中**  
Claude Code 当前将缓存和配置写入 `~/.claude.json`、`~/.claude`，而未遵循 Linux XDG 目录规范。该 Issue 获得 **71 条评论、442 个赞**，反映用户对系统集成、配置可迁移性及 Unix 规范兼容性的长期诉求。

### 3. Desktop“下一步”推荐框干扰真实讨论

**Issue：** [#102273](https://github.com/anthropics/claude-code/issues/102273) · **开放中**  
Desktop Code 标签页在每轮结束后显示带 1–2 个答案按钮的“next-step”框，遮挡内容并打断开放式讨论。Issue 已有 **20 条评论、48 个赞**，表明用户更希望界面辅助真实工作流，而非强制推动预设选项。

### 4. macOS Bedrock 回合永久进入空闲状态

**Issue：** [#94252](https://github.com/anthropics/claude-code/issues/94252) · **开放中**  
在 macOS、Bedrock 和特定版本区间内，事件循环可能永久空闲，出现 `tool_result` 丢失、压缩停滞或排队输入无法继续执行等问题。该问题直接影响任务连续性，且排查涉及工具结果、压缩与调度链路，影响范围较广。

### 5. macOS Desktop 流式响应时 WindowServer CPU 占用约 47%

**Issue：** [#94003](https://github.com/anthropics/claude-code/issues/94003) · **开放中**  
响应生成期间，macOS `WindowServer` 占用约 **47% 单核 CPU**；应用空闲时仅为 3–6%。采样指向 CoreAnimation 深层级树以 120Hz 重复遍历，是本轮值得关注的桌面端渲染性能问题。

### 6. Windows computer-use 截图导致 TextInputHost CPU 飙至 97–99%

**Issue：** [#97945](https://github.com/anthropics/claude-code/issues/97945) · **开放中**  
Windows 11 桌面端执行 computer-use 截图时，`TextInputHost.exe` 会进入高 CPU 循环，并持续占用约一个 CPU 核，直至进程结束。该问题不仅影响 computer-use，也暴露出截图与桌面输入合成链路上的稳定性风险。

### 7. Auto mode 权限分类器误拦截常规及已获准写入

**Issue：** [#101327](https://github.com/anthropics/claude-code/issues/101327) · **开放中**  
Auto mode 对常规、预先批准的写入操作仍可能进行不一致分类并阻止执行，问题甚至涉及用户主动修改自身权限设置。其核心诉求是减少误报、维持授权的一致性，并避免自动模式与明确用户指令发生冲突。

### 8. Auto mode 将用户反馈写入 auto-memory 判为“Instruction Poisoning”

**Issue：** [#104210](https://github.com/anthropics/claude-code/issues/104210) · **开放中**  
Auto mode 阻断了 Claude 根据用户反馈更新自身 auto-memory 的操作，并将其标记为指令投毒。该问题揭示了安全分类器与产品内置记忆功能之间的冲突：安全检测可能把合法反馈闭环误判为攻击行为。

### 9. 桌面端共享工具列表破坏 MCP Apps

**Issue：** [#103924](https://github.com/anthropics/claude-code/issues/103924) · **开放中**  
Cowork 不支持 MCP Apps；其共享 `tools/list` 还会影响同一 Connector 在 Chat 与 Code 中的 MCP Apps。由于 MCP Apps 已成为插件生态的重要交互形式，该兼容性缺陷可能阻碍扩展应用在多入口环境中稳定运行。

### 10. Windows Bash 工具将每对反斜杠减半

**Issue：** [#100063](https://github.com/anthropics/claude-code/issues/100063) · **开放中**  
在 Windows 11、Git Bash 环境中，Bash 工具会在命令交给 Git Bash 解析前，将每对反斜杠减半，影响 heredoc、单引号及路径转义。PowerShell 工具不受影响，说明问题可能位于 Windows 命令适配和转义层。

## 4. 重要 PR 进展

过去 24 小时内 **没有更新的 Pull Requests**，因此本期不列具体 PR。

发布相关：  
- [v2.1.310 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)

## 5. 功能需求趋势

### IDE 集成与可控性

- [#24726](https://github.com/anthropics/claude-code/issues/24726)：VS Code 自动附加应有明确开关。
- [#104033](https://github.com/anthropics/claude-code/issues/104033)：Windows VS Code 中无法通过选择文本和 `Ctrl+C` 复制响应。
- [#104748](https://github.com/anthropics/claude-code/issues/104748)：Desktop Code 新会话首次发送消息后，终端与文件浏览器等布局被重置。
- [#104428](https://github.com/anthropics/claude-code/issues/104428)：模型未遵循明确代码修改方向，反映指令遵循和变更控制仍需加强。

### 插件、Mod API 与长期运行能力

- [#104763](https://github.com/anthropics/claude-code/issues/104763)：建议让 `$.process.spawn` 支持分段写入 stdin，以驱动 JSON-RPC 等长期运行的 stdio CLI。
- [#104764](https://github.com/anthropics/claude-code/issues/104764)：建议允许 `turn.step` 产出“已在其他位置执行”的工具调用，并以原生工具行展示。
- [#104581](https://github.com/anthropics/claude-code/issues/104581)：Dynamic workflows 已启用时，Workflow 工具仍可能无法授予 `claude-security` agent。
- [#104760](https://github.com/anthropics/claude-code/issues/104760)：失效的临时 lease 文件可能固定孤立插件版本，暴露插件清理与版本解析机制不足。
- [#76809](https://github.com/anthropics/claude-code/issues/76809)：社区希望 Claude in Chrome 支持 WebMCP 工具发现。

### MCP、浏览器与跨入口互操作

- [#88901](https://github.com/anthropics/claude-code/issues/88901)：Desktop/Cowork 声称支持 MCP elicitation，却不渲染服务端发起的交互，导致调用挂起至超时。
- [#103924](https://github.com/anthropics/claude-code/issues/103924)：Cowork 与 Chat、Code 之间的 MCP Apps 能力及工具发现不一致。
- [#104732](https://github.com/anthropics/claude-code/issues/104732)：使用不同 `--user-data-dir` 的两个 Desktop 实例会回收彼此的 live-session worktree。

### 性能与资源管理

- [#94003](https://github.com/anthropics/claude-code/issues/94003)：macOS 流式响应期间 `WindowServer` CPU 占用过高。
- [#97945](https://github.com/anthropics/claude-code/issues/97945)：Windows 截图触发 `TextInputHost.exe` 高 CPU 循环。
- [#101057](https://github.com/anthropics/claude-code/issues/101057)：`PreCompact` hook 输出无大小限制地注入压缩指令，可能导致上下文膨胀。
- [#98019](https://github.com/anthropics/claude-code/issues/98019)：经典渲染器在上方区域高度变化时丢失或覆盖输出。
- [#103841](https://github.com/anthropics/claude-code/issues/103841)：全屏 TUI 选择复制时可能丢失“Jump to bottom”提示单元格的文本。

### 权限、安全与误报控制

- [#101327](https://github.com/anthropics/claude-code/issues/101327)：Auto mode 对已授权写入及权限变更存在不一致拦截。
- [#104210](https://github.com/anthropics/claude-code/issues/104210)：auto-memory 合法反馈被误判为 Instruction Poisoning。
- [#104766](https://github.com/anthropics/claude-code/issues/104766)：合法 CTF 请求被安全策略误判为恶意行为。
- [#104765](https://github.com/anthropics/claude-code/issues/104765)：模型忽略指令并虚构网络攻击场景。

### 桌面端与移动端体验

- [#102273](https://github.com/anthropics/claude-code/issues/102273)：Desktop 的下一步推荐框干扰开放式交流。
- [#103301](https://github.com/anthropics/claude-code/issues/103301)：Windows Desktop Remote Control 初始化失败，而独立 CLI 可正常运行。
- [#103405](https://github.com/anthropics/claude-code/issues/103405)：iOS Code 标签页在应用进入后台后停止继续听写。
- [#104730](https://github.com/anthropics/claude-code/issues/104730)：`pkill` 参数在 macOS 上解析异常，可能误杀 Chromium/Electron 应用。

## 6. 开发者关注点

1. **权限系统需要更可预测**  
   开发者既担心安全策略放过危险操作，也更强烈地反感合法写入、权限调整、CTF 和 auto-memory 场景被误拦截。分类器的可解释性、授权一致性和上下文感知是近期重点。

2. **桌面端性能与稳定性直接影响可用性**  
   高 CPU、截图卡死、渲染丢字、布局重置和 Remote Control 初始化失败，问题横跨 macOS、Windows 和 iOS。桌面端已从单纯 CLI 外壳演变为复杂运行时，渲染、输入、窗口及会话管理仍需系统性治理。

3. **多环境兼容成为主要摩擦点**  
   Bedrock、Vertex、Foundry、网关服务、Git Bash、XDG、MCP、Cowork 与 Browser Extension 之间的组合正在暴露更多边界条件。开发者希望官方能力在不同部署模型中保持一致语义。

4. **工具执行的可观察性仍不足**  
   [#94252](https://github.com/anthropics/claude-code/issues/94252) 暴露了 `tool_result` 丢失、回合静默停滞等问题。对于自动化 Agent，这类无声挂起比显式报错更难诊断，也更难建立可靠的重试和恢复机制。

5. **上下文与工具结果管理需要更高效**  
   社区关注未变更文件的重复读取去重、PreCompact hook 输出限额、压缩停滞等问题。工具结果去重、压缩前清理和上下文预算管理直接影响 token 成本与长任务稳定性。

6. **IDE 应提供更强的控制权与可访问性**  
   自动附加开关、响应复制、面板布局持久化以及明确遵循用户修改方向，是 IDE 工作流中最直接的痛点。

7. **插件与 MCP 生态需要稳定的能力契约**  
   长期运行的 stdio 子进程、已执行工具调用的原生展示、MCP elicitation、MCP Apps、插件版本清理和多实例隔离，显示插件 API 正快速扩展，但跨入口、跨实例的一致性仍待加强。

8. **安全机制需要支持授权上下文**  
   开发者希望安全策略能区分“恶意请求”与“已明确授权、发生在合法环境中或属于产品既有工作流的操作”，避免仅凭关键词或固定分类做出阻断。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-24**  
**数据范围：github.com/openai/codex 过去 24 小时更新**

## 1. 今日速览

过去 24 小时发布 `rust-v0.164.0` 与 `rust-v0.165.0-alpha.1`，重点是增强 CLI 的预设提示词、模型及权限配置体验。社区问题集中在 Windows 桌面端稳定性、上下文压缩正确性、MCP 启动开销和 Codex Cloud 恢复能力；同时，官方安装脚本 404 引发集中反馈。

## 2. 版本发布

### `rust-v0.164.0`

- 新增 10 个编号式 `/presets` 槽位，可保存可复用的提示词和斜杠命令，并支持键盘菜单快速访问。
- `/model` 与 `/permissions` 支持内联参数，可直接设置模型、推理强度、运行速度和权限配置。
- 发布说明还包含预览相关更新，但当前摘要未完整展开。

[#54380](https://github.com/openai/codex/pull/54380) · [#54381](https://github.com/openai/codex/pull/54381) · [#54378](https://github.com/openai/codex/pull/54378) · [#54383](https://github.com/openai/codex/pull/54383)  
发布页：[rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)

### `rust-v0.165.0-alpha.1`

- 发布下一版本预发行构建，当前公开摘要没有提供详细变更清单。

发布页：[rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1)

## 3. 社区热点 Issues

### 1. Windows Codex CLI 0.157.0 因 daemon 权限错误无法启动

Windows 用户反馈 CLI 从 0.156.1 升级至 0.157.0 后无法启动，错误指向 daemon 权限。该 Issue 获得 **64 条评论、45 个赞**，是当日讨论度最高的故障，可能直接影响 Windows 开发者升级流程。

[#48043](https://github.com/openai/codex/issues/48043)

### 2. Windows App 已完成回复只返回 `chatgpt-content-reference`

Windows MSIX 版本的 `read_thread` 在读取已完成的 ChatGPT 回复时，仅返回引用类型，而非完整内容。问题已积累 **28 条评论**，暴露 app-server 与桌面端之间的内容序列化或协议兼容问题。

[#50329](https://github.com/openai/codex/issues/50329)

### 3. macOS Orbit 对访问拒绝错误反复重载 65 个会话

Orbit 会话目录将 `thread access denied` 判定为可重试错误，导致同一批云端会话被反复请求和刷新，且重启应用无法停止。该问题虽只有 **17 条评论**，但可能造成明显网络、CPU 与服务端负载。

[#53677](https://github.com/openai/codex/issues/53677)

### 4. 上下文压缩恢复后，过期用户提示被误当作当前指令

完成 compaction 后，Codex 可能将压缩前最后一条用户提示重新呈现为当前活动指令，使模型继续执行已经过期或已被后续步骤覆盖的任务。Issue 有 **8 条评论、7 个赞**，属于直接影响代理行为正确性的高优先级问题。

[#27731](https://github.com/openai/codex/issues/27731)

### 5. Desktop 临时线程摘要意外启动完整 MCP 栈

Codex Desktop 为每次 `thread_summary` 创建临时线程，而该线程会继承并立即启动用户全部全局 stdio MCP 配置，即使摘要生成并不使用 MCP 工具。这会带来额外启动延迟、进程残留和敏感配置暴露风险，已有 **12 条评论**。

[#39783](https://github.com/openai/codex/issues/39783)

### 6. macOS Remote iOS 活跃线程存在写入者冲突

通过 macOS 创建的活跃线程虽然能出现在 iOS Remote 列表中，但加载时会因 active-writer conflict 失败。Issue 有 **12 条评论、8 个赞**，说明跨端远程控制与线程状态同步仍是关键短板。

[#40558](https://github.com/openai/codex/issues/40558)

### 7. Windows Desktop 在失焦和重新聚焦时反复重载渲染器

Windows 版桌面应用在窗口焦点切换时重复刷新页面，影响输入连续性和使用体验。Issue 获 **9 条评论**，反映出桌面端生命周期管理和前端状态保持方面存在普遍问题。

[#47449](https://github.com/openai/codex/issues/47449)

### 8. Windows 更新后应用内语音听写消失

从 `26.908.9136.0` 升级到 `26.1007.9446.0` 后，麦克风按钮消失，设置中提示当前配置不可用听写。该问题获 **8 条评论**，可能与权限、系统音频能力或新版配置检测有关。

[#54064](https://github.com/openai/codex/issues/54064)

### 9. Codex Desktop 项目成员状态在侧栏和接口间不一致

用户将线程移动到项目后，侧栏、`list_threads` 和 `read_thread` 对项目归属的判断可能不同，移动操作成功也未必能在读取结果中体现。Issue 有 **7 条评论**，直接影响项目组织、检索和自动化工作流的可预测性。

[#53486](https://github.com/openai/codex/issues/53486)

### 10. 官方独立安装脚本返回 HTTP 404

README 和官方文档推荐的 `https://chatgpt.com/codex/install.sh` 无法访问，Ubuntu 等环境均能复现。相关 Issue 获 **5 条评论、11 个赞**，另一个当日新 Issue 也继续追踪此问题；这是影响新用户安装的高优先级文档与发布链路故障。

[#56254](https://github.com/openai/codex/issues/56254) · [#56630](https://github.com/openai/codex/issues/56630)

## 4. 重要 PR 进展

> 下列 PR 均显示为 **CLOSED**。结合提交说明看，多数属于内部或已进入后续分支的工程改动，但集中反映了 Codex 当前的技术重点。

### 1. 在 Provider 设置中配置 GCP 项目与区域

允许通过 `model_providers.gcp.project_id` 和区域配置直接生成 Vertex AI endpoint，减少对环境变量的依赖，降低多环境部署配置成本。

[#56560](https://github.com/openai/codex/pull/56560)

### 2. Guardian v2 异步分类统一使用 conversations

异步分类全部切换至 retained conversation backend，旧的 `async_classifier_mode` 仅保留兼容读取但不再生效，进一步统一异步采样、响应归属和取消路径。

[#56556](https://github.com/openai/codex/pull/56556) · [#56557](https://github.com/openai/codex/pull/56557)

### 3. 在 transcript 准备阶段应用 Guardian 消息限制

将同步 Guardian 消息截断延后到 `ContextProfile::prepare_transcript`，确保最终采用的上下文配置真正控制消息数量及保留量。

[#56555](https://github.com/openai/codex/pull/56555)

### 4. 延后同步 Guardian 工具调用和输出截断

分别将工具调用文本与工具输出的截断统一放到 transcript preparation 阶段执行，使 `tool_tokens` 限制与保留字节统计更加一致。

[#56533](https://github.com/openai/codex/pull/56533) · [#56505](https://github.com/openai/codex/pull/56505)

### 5. 本地代理签名支持掩码 AWS 凭据

在 v2 MITM 权限配置和 schema 中开放 `aws_sigv4` 动作，同时限制同一 hook 只能配置一种签名动作，并为本地托管命令注入占位凭据。

[#56554](https://github.com/openai/codex/pull/56554)

### 6. Hook 列表纳入线程执行环境

为 `hooks/list` 增加 `threadId`，使返回结果能够包含线程所选执行环境提供的 hooks，避免漏掉可以阻断 turn 的环境级 hook。

[#56553](https://github.com/openai/codex/pull/56553)

### 7. NFS 上的 SQLite 改用 DELETE journal

根据数据库实际所在文件系统选择日志模式：NFS 使用 `DELETE`，其他文件系统使用 `WAL`；日志目录也独立探测，降低网络文件系统上的 SQLite 锁兼容风险。

[#56552](https://github.com/openai/codex/pull/56552)

### 8. 恢复选择器按后端维护分页和选择状态

新增 thread catalog，按后端分别记录 cursor、pending request 和 exhaustion 状态；发生错误时保留 cursor 以便重试，并拒绝 reset 后到达的过期结果。

[#56543](https://github.com/openai/codex/pull/56543)

### 9. 为 turn、tool 和 skill 增加链路归因

在 turn 完成或中止时记录最终采样请求、重试次数等 `codex.turn_profile` 事件，并为 trace 添加 conversation、turn、tool 和 skill 标识，改善代理执行诊断能力。

[#56524](https://github.com/openai/codex/pull/56524)

### 10. TUI 启动时遵循服务端审批策略默认值

避免新 TUI 会话在 `thread/start` 中用本地解析结果覆盖 app-server 默认值，也允许本地约束采用服务端返回的审批策略，减少多端策略不一致。

[#56516](https://github.com/openai/codex/pull/56516)

## 5. 功能需求趋势

### 桌面端跨平台稳定性

Windows 是问题最集中的平台，涉及 CLI 启动、桌面端崩溃、窗口聚焦重载、输入区裁剪、听写失效、混合路径解析和权限策略拒绝等。社区期待不同系统上的桌面体验达到一致可靠性。

[#48043](https://github.com/openai/codex/issues/48043) · [#47449](https://github.com/openai/codex/issues/47449) · [#50009](https://github.com/openai/codex/issues/50009) · [#56141](https://github.com/openai/codex/issues/56141) · [#56649](https://github.com/openai/codex/issues/56649)

### 上下文压缩与长会话正确性

社区关注的不只是“能否压缩”，而是压缩后指令、时间线、工具结果和任务状态是否仍然准确。当前最突出的需求是确保旧提示不会被重新激活，并避免隐式扩展任务范围。

[#27731](https://github.com/openai/codex/issues/27731) · [#56223](https://github.com/openai/codex/issues/56223)

### MCP 生命周期与性能

MCP 启动成本、会话摘要对 MCP 的意外依赖、密钥环异常、插件和技能目录冷启动等反馈，表明用户希望 MCP 按需启动、可靠隔离，并能提供清晰的超时及错误状态。

[#39783](https://github.com/openai/codex/issues/39783) · [#41031](https://github.com/openai/codex/issues/41031) · [#56651](https://github.com/openai/codex/issues/56651)

### Codex Cloud 环境保存、发布与故障恢复

环境发布失败、草稿锁、setup chat 错误、Responses API 密钥未注入，以及云工作区文件在执行中断后不可用，构成了 Cloud 能力的核心痛点。

[#53928](https://github.com/openai/codex/issues/53928) · [#51081](https://github.com/openai/codex/issues/51081) · [#56650](https://github.com/openai/codex/issues/56650) · [#52765](https://github.com/openai/codex/issues/52765)

### 模型与 Provider 配置能力

社区需要更直接、更一致地配置模型、推理强度、权限和云厂商端点。GCP 项目及区域配置、Responses API 支持和模型容量错误均体现了这一需求。

[#54378](https://github.com/openai/codex/pull/54378) · [#56560](https://github.com/openai/codex/pull/56560) · [#51081](https://github.com/openai/codex/issues/51081) · [#56646](https://github.com/openai/codex/issues/56646)

### 自动化与编排可观测性

开发者希望 CLI/Hooks 能明确报告 provider 错误、usage、session idle 等状态，以便外部编排器准确判断任务是否完成、失败或空闲。

[#45977](https://github.com/openai/codex/issues/45977)

### 可复用工作流与扩展生态

`/presets`、自定义模型目录、skills/plugins 目录以及本地消息板等需求，指向同一趋势：用户希望把常用提示、模型、工具和多代理通信固化为可复用配置。

[#54380](https://github.com/openai/codex/pull/54380) · [#56525](https://github.com/openai/codex/pull/56525) · [#56530](https://github.com/openai/codex/pull/56530) · [#56494](https://github.com/openai/codex/pull/56494)

## 6. 开发者关注点

1. **升级不能破坏基本可用性**：0.157.0 的 Windows CLI 启动故障，以及更新后听写消失、桌面端重载或崩溃，均说明用户对自动更新和回归测试高度敏感。
2. **上下文压缩必须保持语义连续性**：压缩后旧指令被误激活，是代理任务“做错方向”的高风险根源；应重点验证跨多次 compaction 的指令优先级。
3. **MCP 不应为无关功能启动**：摘要生成等轻量操作不应继承完整 MCP 栈。理想机制应包括按需启动、进程回收、超时和敏感配置最小化。
4. **云任务需要可靠的状态与恢复语义**：执行中断后产物是否保留、环境能否重复发布、草稿是否会永久锁定，均直接影响无人值守开发。
5. **跨端状态必须一致**：项目归属、活跃线程、审批策略、模型容量判断和远程 iOS 加载，都需要桌面端、CLI、app-server 与服务端共享一致状态。
6. **自动化编排需要明确事件协议**：除现有 `Stop`、`SessionStart`、`SessionEnd` 和 `notify` 外，社区希望增加 provider-error、turn usage 与 SessionIdle 等事件。
7. **Provider 配置应摆脱隐式环境依赖**：Vertex AI 等服务应能在 provider 设置中直接配置项目和区域；API key 注入则需要覆盖所有官方 API 路径。
8. **性能诊断要进入产品体验**：macOS Intel 冷启动、模型选择阻塞、插件协调等待和同步 WebView IPC，说明启动路径需要更明确的阶段耗时与阻塞原因。
9. **任务边界应由用户控制**：代理应避免把局部清理扩展为方案重写；Codex 需要更强的范围保持、变更前确认和完成度评估机制。
10. **安装与文档必须保持同步**：官方安装脚本持续返回 404，是典型的发布链路与文档不一致问题，应优先修复并增加 CI 链接检查。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-24**  
**数据范围：** `google-gemini/gemini-cli` 过去 24 小时 Release、Issues 与 Pull Requests

## 1. 今日速览

过去 24 小时发布了 `v0.67.0-nightly.20261024.gcd1b45c2d`，重点修复请求取消后仍继续处理流并自动提示的问题，并改善泰语、老挝语字符的终端显示宽度。社区讨论继续聚焦 **Agent/Subagent 稳定性**：包括达到 `MAX_TURNS` 后被误报成功、Generalist Agent 挂起、Browser Agent 配置未生效及 Wayland 环境失败。

与此同时，代码搜索、流式响应、工具输出截断、终端 resize、checkpoint 路径安全等基础体验和可靠性修复正在集中推进。

---

## 2. 版本发布

### v0.67.0-nightly.20261024.gcd1b45c2d

- **请求取消处理修复**：用户取消请求后，不再继续处理 continuation stream，也不再自动发送 nudge。
  - PR：[google-gemini/gemini-cli#29868](https://github.com/google-gemini/gemini-cli/pull/29868)
- **终端字符显示修复**：修正泰语和老挝语中 SARA AM 字符的显示宽度，避免排版错位。
  - 相关 PR：[google-gemini/gemini-cli#29905](https://github.com/google-gemini/gemini-cli/pull/29905)

Release：[v0.67.0-nightly.20261024.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261024.gcd1b45c2d)

---

## 3. 社区热点 Issues

> 以下按过去 24 小时内评论数及问题重要性筛选，共 10 条。

### 1. Subagent 达到 `MAX_TURNS` 后被误报为成功

- **问题**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 达到最大轮次、实际未完成分析时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实中断状态。
- **重要性**：错误的终止状态会误导上层调度、评测和恢复逻辑，可能造成“不完整结果被当作成功结果”。
- **社区反应**：13 条评论，为本时段讨论最热 Issue。

### 2. 提议通过零依赖 OS 沙箱和执行后意图路由发挥 Bash 能力

- **问题**：[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
- 建议利用 Gemini 3 对 POSIX 工具的亲和性，通过低依赖沙箱隔离执行，再依据命令意图将结果路由给后续流程。
- **重要性**：这是 Agent 工具架构的重要方向，目标是兼顾原生 Bash 能力、安全性与执行效率。
- **社区反应**：9 条评论，讨论集中在能力边界和安全控制。

### 3. Generalist Agent 执行简单任务时永久挂起

- **问题**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- Generalist Agent 在创建文件夹等简单操作中可能一直不返回；用户报告曾等待一小时，明确禁止调用 subagent 后可规避。
- **重要性**：属于直接影响可用性的 Agent 调度故障，也暗示 Agent 委派链路可能存在死锁或状态同步问题。
- **社区反应**：8 条评论、8 个赞，是本时段获得最高 👍 的 Issue。

### 4. 评估 AST 感知的文件读取、搜索与代码库映射

- **问题**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- 提议使用 AST 工具精确读取方法边界、按语法结构搜索并生成代码库映射，以减少误读、工具轮次和 token 噪声。
- **重要性**：直接关系到 Agent 理解大型代码库的准确率、效率和上下文成本。
- **社区反应**：7 条评论，并衍生出多个具体研究方向。

### 5. Gemini 很少主动使用 Skills 和 Subagents

- **问题**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 用户反馈，即使已有描述清晰的 Gradle、Git 等 skills，模型也不会主动调用，通常需用户显式指定。
- **重要性**：影响自定义能力体系的可发现性，也关系到多 Agent 架构能否真正发挥价值。
- **社区反应**：7 条评论，暂无点赞，但与近期 Agent 策略类议题高度相关。

### 6. Browser Agent 忽略 `settings.json` 配置覆盖

- **问题**：[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 未正确应用全局或项目级 `settings.json` 中的配置，例如 `maxTurns`；配置虽然被 `AgentRegistry` 读取并合并，但运行时似乎未使用。
- **重要性**：配置链路不一致会导致 Agent 行为不可预测，也增加调试和资源治理难度。
- **社区反应**：4 条评论。

### 7. Browser Agent 在 Wayland 环境下失败

- **问题**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser subagent 在 Wayland 环境中无法正常工作，并显示以 `GOAL` 结束的完成信息。
- **重要性**：暴露浏览器自动化对桌面环境、显示服务器和浏览器启动方式的依赖，影响 Linux 用户覆盖率。
- **社区反应**：4 条评论、1 个赞。

### 8. Agent 配置的工具数量过多时触发 400 错误

- **问题**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 当可用工具超过较大数量时，Gemini CLI 收到 400 错误；标题描述为超过 128 个工具，正文则提到超过 400 个工具，边界仍需确认。
- **重要性**：随着 MCP、skills 和 subagents 扩展，工具注册规模可能超过模型接口限制，需要按任务动态裁剪。
- **社区反应**：3 条评论；Issue 内对具体阈值存在表述差异。

### 9. 模型频繁在随机目录创建临时脚本

- **问题**：[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- 在限制原生文件编辑、仅开放 shell 执行时，模型会在多个目录生成编辑脚本，增加清理和保持工作区整洁的成本。
- **重要性**：反映工具权限配置与模型行为之间的错配，也会污染 Git 工作区。
- **社区反应**：3 条评论。

### 10. Agent 可能执行破坏性 Git 或数据库操作

- **问题**：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 复杂 Git 或分支管理场景中，模型偶尔会使用 `git reset`、`--force` 等高风险命令，即使存在更安全方案。
- **重要性**：直接涉及数据安全和不可逆操作，是 Agent 权限治理必须优先解决的风险。
- **社区反应**：3 条评论、1 个赞。

---

## 4. 重要 PR 进展

### 1. 恢复聊天失败时不再残留工作区目录

- **PR**：[#29890](https://github.com/google-gemini/gemini-cli/pull/29890)
- 将已保存目录加入当前 workspace context 的操作移动到 `resumeChat()` 成功之后。
- 修复聊天恢复失败时仍残留旧目录的问题，避免错误恢复工作区状态。

### 2. Ripgrep 搜索失败时正确标记为工具错误

- **PR**：[#29779](https://github.com/google-gemini/gemini-cli/pull/29779)
- `RipGrepTool` 的部分失败路径此前未设置 `ToolResult.error`，调度器因而将失败搜索记录为成功。
- 修复后错误元数据与 `GrepTool` 行为保持一致，提升 Agent 自我纠错能力。

### 3. ACP 模式发送模型前截断工具输出

- **PR**：[#29778](https://github.com/google-gemini/gemini-cli/pull/29778)
- ACP 模式下此前不会应用 `tools.truncateToolOutputThreshold`，大型 shell 输出可能导致单次请求超过模型输入上限并返回 400。
- 修复后，大输出会按配置截断，降低上下文溢出风险。

### 4. 流结束时派发最后一个 Code Assist SSE 事件

- **PR**：[#29785](https://github.com/google-gemini/gemini-cli/pull/29785)
- 修复最后一个 `data:` 行后没有空行时事件被静默丢弃的问题。
- 对截断连接或不完全符合规范的代理服务器更加稳健。

### 5. 修正 `read_many_files` 对 include pattern 的判断

- **PR**：[#29783](https://github.com/google-gemini/gemini-cli/pull/29783)
- 原实现使用子字符串匹配，可能将用户未明确请求的图片、PDF 和音频错误内联到上下文。
- 修复后按完整 include pattern 匹配，减少无关二进制内容带来的 token 消耗。

### 6. 修复 shell 沙箱拒绝检测中的退出码判断

- **PR**：[#29782](https://github.com/google-gemini/gemini-cli/pull/29782)
- `exitCode` 类型允许为 `null`，原判断将所有 `null` 退出码错误地视为沙箱拒绝。
- 修复后改用空值检查，减少 shell 工具被误分类的问题。

### 7. 限制终端宽度变化后的 inline history 重渲染开销

- **PR**：[#29904](https://github.com/google-gemini/gemini-cli/pull/29904)
- 对非 alternate-buffer 模式下的 inline renderer 增加重渲染边界，减少 resize 后重复输出和卡顿。
- 与提升终端 resize 高性能、无闪烁体验的长期议题直接相关：[Issue #21924](https://github.com/google-gemini/gemini-cli/issues/21924)。

### 8. 防止 legacy checkpoint fallback 路径穿越

- **PR**：[#29876](https://github.com/google-gemini/gemini-cli/pull/29876)
- 修复 `Logger._getCheckpointPath()` 与 `Logger.deleteCheckpoint()` 在旧版未编码文件名路径下可能发生的路径穿越问题。
- 涉及 checkpoint 读取、删除和文件访问安全，属于高优先级安全修复。

### 9. 流中途报错或重试时丢弃缓冲的工具调用

- **PR**：[#29879](https://github.com/google-gemini/gemini-cli/pull/29879)
- 当模型流在发出 `ToolCallRequest` 后发生错误、重试、用户取消、上下文溢出、循环检测或达到最大轮次时，清理已缓冲的工具调用。
- 防止异常路径中的陈旧调用被错误执行或造成状态不一致。

### 10. Android/Termux 支持可信系统路径中的 ripgrep

- **PR**：[#29884](https://github.com/google-gemini/gemini-cli/pull/29884)
- 扩展 `isTrustedSystemPath()`，允许 Termux 环境下通过 `pkg install ripgrep` 安装的可信系统目录。
- 提升 Android/Termux 用户使用 `grep_search` 的兼容性。

### 其他值得跟踪的 PR

- **human-like-ui skill**：[#29786](https://github.com/google-gemini/gemini-cli/pull/29786)  
  尝试提供更接近人工设计、减少通用 AI 风格的 UI skill。
- **CLI 模型发现能力**：[#29880](https://github.com/google-gemini/gemini-cli/pull/29880)  
  已关闭，新增 `gemini models` 和 `--list-models`，支持 JSON 与人类可读输出。
- **Claude hook 迁移超时单位修复**：[#29899](https://github.com/google-gemini/gemini-cli/pull/29899)  
  已关闭，修复迁移时将秒误作毫秒、导致 hook 提前 1000 倍终止的问题。

---

## 5. 功能需求趋势

### 5.1 Agent 与 Subagent 稳定性成为核心议题

社区最集中的诉求不是增加 Agent 数量，而是确保 Agent 能：

- 正确报告成功、失败、取消和达到轮次上限等状态；
- 避免 Generalist/Browser Agent 挂起；
- 正确应用 `maxTurns` 等配置；
- 在异常、重试和取消时清理缓冲状态；
- 提供可审查的 subagent trajectory。

相关议题：

- [Subagent 错误恢复状态](#22323)
- [Generalist Agent 挂起](#21409)
- [Browser Agent 配置覆盖](#22267)
- [Browser Agent Wayland 失败](#21983)
- [Subagent trajectory 分享](#22598)

### 5.2 代码理解从文本匹配转向 AST 感知

社区正在评估 AST-aware CLI，用于：

- 精确读取函数、类和方法边界；
- 按语法结构搜索；
- 生成更可靠的代码库映射；
- 降低无关上下文和工具调用轮次。

相关议题：

- [AST 感知能力总览](#22745)
- [AST 搜索和文件读取](#22747)
- [AST CLI 代码库映射](#22746)
- [Token 友好的外科式读取](#19561)

### 5.3 安全沙箱与权限治理

需求集中在：

- 允许模型使用原生 Bash，但确保执行隔离；
- 阻止 `git reset`、强制推送及破坏性数据库操作；
- 区分命令名称匹配与实际系统调用效果；
- 在无人值守或 YOLO 模式下推荐 allow-list；
- 修复 checkpoint 路径穿越等底层安全问题。

相关议题：

- [OS 沙箱与意图路由](#19873)
- [防止破坏性行为](#22672)
- [Policy Engine 文档 PR](#29902)

### 5.4 Skills 与多 Agent 发现能力

用户希望 CLI 能主动识别并调用已有 skills，而不是必须显式提示；同时期待更完善的 subagent 发现、并行协作与共享记忆机制。

相关议题：

- [Skills/Subagents 主动使用不足](#21968)
- [通过 settings.json 发现 subagent](#18285)
- [共享内存或并行 subagent 协作](#18287)
- [symlink agent 无法识别](#20079)

### 5.5 持久化任务跟踪替代纯上下文 Todo

社区倾向于以文件型 CRUD 任务系统替代 `WriteToDo`，减少 context rot、token 消耗以及会话结束后的状态丢失。

相关议题：

- [持久化文件任务跟踪](#18836)
- [使用原生文件工具维护任务跟踪器](#21000)

### 5.6 大型项目中的上下文与工具治理

需求包括：

- 限制并按任务裁剪工具集合；
- 截断大型工具输出；
- AST 感知的精确读取；
- 改善代码库映射；
- 提升终端历史记录渲染性能。

相关议题：

- [工具数量过多触发 400](#24246)
- [终端 resize 性能](#21924)
- [持久化任务跟踪](#18836)

---

## 6. 开发者关注点

1. **终止状态必须可信**  
   达到 `MAX_TURNS`、取消或异常不能被包装成 `GOAL/success`。错误状态会直接影响上层恢复、评测可信度和用户判断。

2. **Agent 配置必须真正贯穿运行时**  
   `settings.json` 中的 `maxTurns` 等参数如果只被读取而不生效，会造成不可预测行为和难以复现的问题。

3. **Agent 委派链路容易出现挂起**  
   Generalist Agent、Browser Agent 和 subagent 的状态同步仍是高风险区域；Wayland 等真实环境暴露了浏览器自动化的兼容性缺口。

4. **工具调用必须能可靠失败**  
   搜索失败却记录为成功会误导模型；工具输出过大又可能直接造成请求 400。错误元数据和输出截断均是 Agent 可靠运行的基础设施。

5. **模型在大型仓库中的上下文成本仍偏高**  
   开发者希望采用 AST 感知读取、精确 include pattern、外科式搜索和持久化任务状态，以减少无关 token、误读和重复轮次。

6. **临时文件与工作区污染需要治理**  
   模型在随机目录生成脚本会增加清理成本。临时目录约定、自动回收和工作区策略值得进一步标准化。

7. **高风险命令必须有安全护栏**  
   即使模型通常能够选择安全方案，复杂 Git 或数据库操作仍存在误用 `--force`、`reset` 的风险；沙箱、命令策略和无人值守 allow-list 都很重要。

8. **跨平台终端兼容性仍是细节重灾区**  
   SARA AM 宽度、East Asian Ambiguous 字符、Wayland 和 Termux ripgrep 等问题表明，Unicode、显示服务器和路径策略需要持续投入真实环境验证。

9. **可观测性需求正在上升**  
   `/bug` 报告缺少 subagent 内部上下文，而 subagent trajectory 已保存但难以查看和分享。社区期待更完整的执行链路与评测数据。

10. **内部评测稳定性影响问题定位质量**  
    steering eval 被临时注释、内部项目 eval 出现不稳定“bleed”，意味着自动化评测本身仍需增强，否则回归问题和质量趋势都较难可信追踪。

相关评测议题：

- [Steering eval 应始终通过](#23313)
- [稳定并增强内部项目评测](#23166)
- [Bug 报告应包含 subagent 上下文](#21763)
- [通过 `/chat share` 分享 subagent trajectory](#22598)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-24**

## 1. 今日速览

过去 24 小时发布 **v1.0.104-2、v1.0.104-1、v1.0.104-0** 三个补丁版本，重点修复 Autopilot 后台任务等待、托管模型 `fusion` 启动配置及 Auto 偏好失效问题。  
社区讨论集中在 **权限安全、MCP 认证与稳定性、插件/子代理能力、ACP 兼容性**；其中 PRU 配额异常消耗和可信目录自动放行命令引发较高关注。过去 24 小时没有更新的 Pull Request。

## 2. 版本发布

### v1.0.104-2

- 修复托管模型 `fusion`：会话现在默认以 **Auto** 启动，并正确应用 `fusionTier` 设置。
- 修复交互式及 SDK Autopilot 会话：后台任务仍在执行时不再因 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 超时而提前停止。
- 非交互式 `copilot -p --autopilot` 仍遵循该超时配置，保留脚本化场景的原有行为。

[查看 v1.0.104-2](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2)

### v1.0.104-1

- 发布补丁版本，Release Notes 未提供具体变更说明。

[查看 v1.0.104-1](https://github.com/github/copilot-cli/releases/tag/v1.0.104-1)

### v1.0.104-0

- **Assisted Permissions** 无需开启实验模式即可使用。
- 修复 Auto 偏好问题：已保存的 Auto 偏好不再可用时，系统会回退到默认偏好，而不是导致每一轮请求失败。

[查看 v1.0.104-0](https://github.com/github/copilot-cli/releases/tag/v1.0.104-0)

## 3. 社区热点 Issues

> 以下按社区讨论热度、影响范围及近期更新情况选取。共更新 31 条 Issue，本节展示 10 条。

1. **PRU 配额疑似被异常清空，可能与 Assisted Permissions 有关**  
   用户报告 Copilot Pro 年付 Legacy Request-based PRU 在开启 Assisted Permissions 后出现异常消耗。该问题直接关系计费公平性和高级权限功能的安全边界，且版本发布后 Assisted Permissions 已无需实验模式，影响面值得持续关注。  
   [Issue #4802](https://github.com/github/copilot-cli/issues/4802)

2. **ACP 会话从 1.0.89 起不再写入 `session-store.db`**  
   完成的 ACP 会话不再进入本地对话与使用量索引，涉及会话历史、恢复和可观测性，是较明确的版本回归。  
   [Issue #5053](https://github.com/github/copilot-cli/issues/5053)

3. **Windows ACP 模式无法使用已启用的 Computer Use 插件**  
   CLI 中插件已启用，ACP 也声明了 `/computer` 命令，但插件及其 MCP Server 不可用，反映 CLI 与 ACP 插件能力发现机制不一致。  
   [Issue #5049](https://github.com/github/copilot-cli/issues/5049)

4. **可信目录中的 Shell 命令被静默自动批准**  
   `manual` 权限模式下，只要命令引用的路径位于可信目录内，脚本、`sqlcmd`、`curl` 等可能产生不可预测副作用的命令也会跳过确认，属于权限安全设计风险。  
   [Issue #5232](https://github.com/github/copilot-cli/issues/5232)

5. **交互式 Autopilot 在后台子代理运行超过 600 秒后停止**  
   该问题自 1.0.102 起出现，CLI 报错建议调整 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`；v1.0.104-2 已针对交互式和 SDK 场景进行调整，但 `-p` 模式仍保留旧超时逻辑。  
   [Issue #5223](https://github.com/github/copilot-cli/issues/5223)

6. **插件技能名称注册不一致，`plugin:skill` 调用失败**  
   Slash 命令使用 `/plugin:skill` 命名，但模型侧 `skill()` 工具通常只注册裸名称；只有名称冲突时才加前缀，导致明确的插件 API 调用失败。  
   [Issue #5249](https://github.com/github/copilot-cli/issues/5249)

7. **自定义 OpenAI 兼容服务在后台 Shell 退出后返回 HTTP 400**  
   运行时合成无模型 assistant turn 后，`reasoning_text` 未正确回传，触发 `responses` API 兼容性问题，影响 DeepSeek 等 BYOK 场景。  
   [Issue #5145](https://github.com/github/copilot-cli/issues/5145)

8. **远程 MCP OAuth 过期后会反复发送旧 Token**  
   首次收到 HTTP 401 后，客户端既不刷新 Token，也不提示重新登录，导致失效凭据周期性重试，属于远程 MCP 的重要稳定性与认证问题。  
   [Issue #5233](https://github.com/github/copilot-cli/issues/5233)

9. **Windows MCP 登录后 Entra Broker Token Cache 仍为 0 字节**  
   每次启动新进程都会重复弹出账户选择器，而同一进程内 `/restart` 不再提示，表明跨进程凭据持久化失效。  
   [Issue #5236](https://github.com/github/copilot-cli/issues/5236)

10. **MCP 配置监听触及 inotify 上限后，会话停止处理**  
    在共享 Linux 主机或容器中，MCP 配置 watch 注册返回 `ENOSPC`，队列重试一次后被放弃，进一步影响 Prompt 响应。  
    [Issue #5242](https://github.com/github/copilot-cli/issues/5242)

## 4. 重要 PR 进展

过去 24 小时内 **没有更新的 Pull Request**，因此暂无 PR 功能或修复进展可汇总。

[查看仓库 Pull Requests](https://github.com/github/copilot-cli/pulls)

## 5. 功能需求趋势

1. **权限控制与安全边界**
   - 社区希望增加可折叠的后台代理/Worker 面板，展示运行中的子代理、模型、推理级别和任务说明。
   - 对可信目录按路径自动批准 Shell 命令的机制提出质疑，权限判断需要从“路径可信”升级为“命令风险可控”。
   - SDK、VS Code 和 Copilot App 场景中，环境变量覆盖、命令身份识别和权限审批行为仍不一致。

   [Issue #1783](https://github.com/github/copilot-cli/issues/1783) · [Issue #5232](https://github.com/github/copilot-cli/issues/5232) · [Issue #5107](https://github.com/github/copilot-cli/issues/5107)

2. **MCP 生态与认证可靠性**
   - OAuth Token 自动刷新、过期后的重新登录提示是高频诉求。
   - Windows Entra Broker 的跨进程凭据缓存、企业代理下的 STT 模型访问也是实际部署痛点。
   - 社区期望 MCP 身份验证失败时提供清晰的 CLI 状态和恢复路径，而不是影响终端可用性。

   [Issue #5233](https://github.com/github/copilot-cli/issues/5233) · [Issue #5236](https://github.com/github/copilot-cli/issues/5236) · [Issue #5245](https://github.com/github/copilot-cli/issues/5245) · [Issue #5234](https://github.com/github/copilot-cli/issues/5234)

3. **插件、Skill 与多代理能力**
   - 插件 Skill 的命名空间需要统一，确保模型侧 `skill()` 与用户侧 `/plugin:skill` 一致。
   - Computer Use 插件在 ACP 模式下不可用，插件能力发现仍需与 CLI 配置保持同步。
   - 自定义代理激活后，自定义 MCP 调用被取消，以及批准 `exit_plan_mode` 后新启动的子代理缺失内置工具，均指向代理生命周期和工具继承问题。

   [Issue #5249](https://github.com/github/copilot-cli/issues/5249) · [Issue #5049](https://github.com/github/copilot-cli/issues/5049) · [Issue #5237](https://github.com/github/copilot-cli/issues/5237) · [Issue #5243](https://github.com/github/copilot-cli/issues/5243)

4. **Auto、托管模型与 BYOK 兼容**
   - 社区希望能够从 Auto 模型选择中排除经常失败的模型。
   - `fusion` 模型启动配置和 Auto 偏好回退已由 v1.0.104 修复。
   - BYOK/Responses API 场景仍需正确处理 `reasoning_text`、动态工作流及离线模式下的能力暴露。

   [Issue #5231](https://github.com/github/copilot-cli/issues/5231) · [Issue #5145](https://github.com/github/copilot-cli/issues/5145) · [Issue #5055](https://github.com/github/copilot-cli/issues/5055)

5. **会话历史与上下文管理**
   - ACP 会话停止写入 `session-store.db` 是会话连续性的关键回归。
   - 上下文压缩后丢失 `sessionStart` hook 的 `additionalContext`，可能影响 Hook 驱动的工作流。
   - 多图片会话达到 50 张后，每移除一张图片都会触发整个缓存重填，带来性能与成本问题。

   [Issue #5053](https://github.com/github/copilot-cli/issues/5053) · [Issue #5225](https://github.com/github/copilot-cli/issues/5225) · [Issue #5238](https://github.com/github/copilot-cli/issues/5238)

6. **Windows 与跨平台体验**
   - Windows 上 MCP 登录、PowerShell 安装行为、终端转义码及 Entra 凭据持久化问题较集中。
   - 跨平台功能仍存在明显差异，尤其是 ACP、插件、代理和企业网络环境。

   [Issue #5236](https://github.com/github/copilot-cli/issues/5236) · [Issue #5234](https://github.com/github/copilot-cli/issues/5234) · [Issue #5247](https://github.com/github/copilot-cli/issues/5247)

7. **交互式可观测性与任务管理**
   - `/tasks` 中的子代理详情无法展开工具调用，降低了调试透明度。
   - 社区希望统一展示主代理、后台代理、模型、推理级别、任务状态和工具调用。
   - Autopilot 长时间等待与后台任务生命周期仍需更清晰的超时提示和状态反馈。

   [Issue #5244](https://github.com/github/copilot-cli/issues/5244) · [Issue #1783](https://github.com/github/copilot-cli/issues/1783) · [Issue #5223](https://github.com/github/copilot-cli/issues/5223)

## 6. 开发者关注点

- **可靠性优先于新功能**：大量 Issue 集中于版本回归、会话停止、缓存未写入、工具缺失和插件不可用。开发者希望升级后核心工作流保持稳定。
- **权限必须可解释、可控制**：可信目录自动批准、`script_action_changed` 误报以及 Assisted Permissions 与 PRU 消耗关联，使权限机制成为高敏感区域。
- **MCP 认证是企业落地的关键障碍**：Token 刷新、Windows 凭据缓存、企业代理和认证失败后的终端恢复直接影响团队可用性。
- **多代理体系需要统一语义**：Skill 命名、工具继承、MCP 生命周期、后台任务等待和子代理状态展示之间仍存在割裂。
- **BYOK 与自定义模型的兼容成本较高**：开发者希望 CLI 对 OpenAI-compatible Responses API 的细节处理更稳定，尤其是 `reasoning_text`、模型选择和离线工作流。
- **会话与上下文性能需要优化**：图片缓存反复重填、压缩后 Hook 上下文丢失、会话数据库未索引等问题，既影响性能，也增加推理成本。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-10-24**  
**数据范围：** anomalyco/opencode 过去 24 小时更新的 Issues 与 PRs

## 1. 今日速览

今日无新版本发布，开发焦点集中在 **V2 稳定性与迁移可靠性**：会话迁移丢消息、免费额度误判、权限审批失效、插件加载异常等问题仍有较高关注。PR 侧则主要围绕 **上下文压缩、模型目录、Git 性能、TUI/Desktop 体验和 Goal/Todo 能力** 展开，同时出现了多项针对大型仓库与高频调用的性能优化。

## 3. 社区热点 Issues

1. **Agent 沙箱与文件访问边界仍是长期痛点**  
   用户持续希望限制 Agent 访问或修改当前目录之外的文件，并希望 OpenCode 引入类似 macOS Seatbelt 的隔离机制。该 Issue 获得 **80 个点赞、103 条评论**，是今日最受关注的安全议题。  
   [#2242](https://github.com/anomalyco/opencode/issues/2242)

2. **OpenCode 在大型仓库中大量执行 Git 操作**  
   社区指出 OpenCode 会在包含数万文件、数 GB 内容的目录中执行 `git add .` 等命令，用于会话快照，既拖慢性能，也可能污染用户工作区。该问题已有 **21 条评论、12 个点赞**。  
   [#3176](https://github.com/anomalyco/opencode/issues/3176)

3. **V1→V2 迁移后旧会话消息全部丢失**  
   1.19 版本通过 `/api/session` 创建的会话，在迁移到 2.1.3 后仅保留会话记录，消息列表为空。该问题直接威胁用户历史数据，已有 **3 条评论**，被标记为高严重度且可复现。  
   [#58543](https://github.com/anomalyco/opencode/issues/58543)

4. **免费模型被误判为“额度耗尽”**  
   多名用户报告零使用记录或首次使用免费模型时即收到额度耗尽提示。相关 Issue 获得多次更新和社区反馈，问题可能涉及 V2 升级后的额度判断或提供商状态同步。  
   [#58284](https://github.com/anomalyco/opencode/issues/58284) · [#58550](https://github.com/anomalyco/opencode/issues/58550) · [#58302](https://github.com/anomalyco/opencode/issues/58302)

5. **配置、插件及 MCP 变更必须重启才能生效**  
   用户希望运行中的会话能够热加载插件、MCP 和配置变更，减少开发调试时的中断成本。Issue 已有 **8 条评论**，并附带了较完整的实现路径分析。  
   [#39987](https://github.com/anomalyco/opencode/issues/39987)

6. **HTTP 代理导致事件流无限循环、TUI 持续重启服务**  
   设置 `http_proxy`/`https_proxy` 而未正确配置 `no_proxy` 时，本地服务通信可能被错误代理，进而造成 SSE 事件流无法结束和 TUI 持续显示“Restarting service…”。  
   [#52054](https://github.com/anomalyco/opencode/issues/52054)

7. **Azure 模型发现失败后不会自动恢复**  
   Azure deployment discovery 仅在 Provider 启动或切换账户时执行；首次网络失败后不会重试，网络恢复后模型列表仍不完整，必须手动重启服务。  
   [#57690](https://github.com/anomalyco/opencode/issues/57690)

8. **V2 中委派给子 Agent 的写入操作无法触发“ask”审批**  
   主 Agent 将写入任务委派给子 Agent 后，目标路径若配置为 `ask` 权限，V2 会静默拒绝操作，既不显示审批弹窗，也未执行写入；该行为在 V1 中可正常工作。  
   [#57603](https://github.com/anomalyco/opencode/issues/57603)

9. **Windows npm 12 升级后可能留下无效可执行文件**  
   `opencode upgrade` 可能显示升级成功，但 `bin/opencode.exe` 仍是发布包中的文本 stub，导致后续启动失败。问题与 npm 12 的全局安装生命周期处理有关。  
   [#51553](https://github.com/anomalyco/opencode/issues/51553)

10. **Desktop 数据库膨胀导致会话加载卡死**  
    部分用户的 host event 表持续增长，观测到数据库达 3.47 GB，其中 event 表约占 2.94 GB；由于 `better-sqlite3` 同步查询，会话列表加载可能耗时数秒甚至导致应用无响应。  
    [#58318](https://github.com/anomalyco/opencode/issues/58318)

**其他值得关注的问题：**

- 缺少跨历史消息全文搜索功能：[ #41354](https://github.com/anomalyco/opencode/issues/41354)
- 大量连续 Bash 调用后，模型工具调用可能退化为只输出 `bash`：[ #57584](https://github.com/anomalyco/opencode/issues/57584)
- 服务重启期间可能重复恢复并执行同一轮任务：[ #57582](https://github.com/anomalyco/opencode/issues/57582)
- Desktop 文件监听器会显著拖慢冷启动：[ #58322](https://github.com/anomalyco/opencode/issues/58322)
- 图片粘贴提示词报错，且 V2 无入口点插件可能被静默忽略：[ #58291](https://github.com/anomalyco/opencode/issues/58291) · [#58574](https://github.com/anomalyco/opencode/issues/58574)

## 4. 重要 PR 进展

1. **修复 OpenAI 图片流遇到未知事件即失败**  
   新增或非预期事件不再直接导致图片生成请求报错，改为忽略未知事件，并补充错误事件和异常数据处理。  
   [#58596](https://github.com/anomalyco/opencode/pull/58596)

2. **TUI 在 workspace catalog 加载后重试首次提交**  
   针对模型与工作区目录尚未加载完成时提交丢失的问题，加入重试机制，并与 V2.1.4 静默提交问题关联。  
   [#58519](https://github.com/anomalyco/opencode/pull/58519)

3. **避免压缩上限超过输出预留额度**  
   修正大窗口模型中“请求上限”和“输出预留”倒置的问题，避免请求预算计算超过模型上下文限制。  
   [#58492](https://github.com/anomalyco/opencode/pull/58492)

4. **macOS 下缓存真实 Git 二进制路径**  
   绕过每次调用 `/usr/bin/git` 时触发的 `xcselect` 解析。PR 给出的数据中，单次 Git spawn 从约 **9.39ms 降至 4.76ms**。  
   [#58602](https://github.com/anomalyco/opencode/pull/58602)

5. **减少 Prompt Hook 中重复查询模型目录**  
   将 `Model.Info` 的解析从每个步骤最多六次降为一次，避免反复读取凭据并重建约 90 个集成快照。  
   [#58601](https://github.com/anomalyco/opencode/pull/58601)

6. **App 时间线不再携带 Read 工具的图片 Base64 数据**  
   Desktop/Web 的 read card 本就按路径加载图片，因此消息列表不再下载无用 Base64，可缩短会话打开时间。  
   [#58586](https://github.com/anomalyco/opencode/pull/58586)

7. **修复分支列表中的裸远程名称，并支持搜索远程分支**  
   调整 Git ref 格式化方式，避免把 `origin` 之类远程名当作实际分支显示。  
   [#58597](https://github.com/anomalyco/opencode/pull/58597)

8. **跳过无实际变化的 Azure 模型目录转换**  
   未配置 Azure 或 `baseURL` 不含资源占位符时，不再深拷贝并重写所有 Azure catalog model，减少模型状态重建开销。  
   [#58600](https://github.com/anomalyco/opencode/pull/58600)

9. **新增 Goal/Todo 协议、核心驱动与界面 Dock**  
   Goal/Todo 功能形成一组堆叠 PR：包括持久化契约、API endpoint、Goal round driver、目标验证，以及 App 端目标指示器和 Todo dock。合并顺序存在依赖关系。  
   [#54799](https://github.com/anomalyco/opencode/pull/54799) · [#55744](https://github.com/anomalyco/opencode/pull/55744) · [#56450](https://github.com/anomalyco/opencode/pull/56450) · [#56417](https://github.com/anomalyco/opencode/pull/56417)

10. **增强问题选择器与 Desktop Voice 体验**  
    问答选项加入数字快捷键，以圆形单选和方形多选区分；Desktop 语音调用则调整为浮动面板，保证输入框在通话期间仍可使用。  
    [#58595](https://github.com/anomalyco/opencode/pull/58595) · [#58587](https://github.com/anomalyco/opencode/pull/58587)

**其他值得跟踪的 PR：**

- 新会话项目/worktree 选择器增加下拉提示：[ #58592](https://github.com/anomalyco/opencode/pull/58592)
- Edit/Patch diff 增加右侧留白：[ #58594](https://github.com/anomalyco/opencode/pull/58594)
- 通过 OpenCode Console 提供 GPT-Live，无需 OpenAI Key：[ #58567](https://github.com/anomalyco/opencode/pull/58567)
- Desktop Voice 的会话切换与 iOS 行为对齐：[ #58591](https://github.com/anomalyco/opencode/pull/58591)

## 5. 功能需求趋势

### 1. Agent 安全隔离与权限治理
沙箱、目录访问限制、子 Agent 审批透传以及更清晰的权限模型，是当前最强烈的安全诉求。社区不仅关心“能否执行”，还要求权限行为在主 Agent、子 Agent和 Desktop 界面中保持一致。

### 2. 可检索、可恢复的会话历史
跨历史消息搜索、上下文长度恢复、V1→V2 数据迁移和服务重启后的任务恢复，反映出用户对**会话连续性与数据可靠性**的要求持续上升。

### 3. Goal/Todo 与长任务编排
Goal/Todo 系列 PR 表明社区希望 OpenCode 从单轮对话工具转向更结构化的长期任务执行，包括目标拆解、验证、进度展示和并行子任务。

### 4. 并行任务与多 Agent 协作
独立子任务并行 fan-out、委派写入审批、工具调用稳定性，都是对多 Agent 架构的进一步需求。

### 5. Provider 与模型生态
Azure 自动发现、免费模型额度识别、GitHub Copilot 多 reasoning 响应兼容、OpenAI 图片流兼容，以及 GPT-Live 接入，显示 Provider 适配仍是高频投入方向。

### 6. Desktop/TUI 的可用性
包括历史搜索、粘贴图片、浮动语音面板、远程分支选择、diff 排版和聊天滚动稳定性，Desktop 正在从 CLI 辅助工具向完整工作台演进。

### 7. 插件与协议热更新
插件、MCP、配置热加载，以及无入口点插件的错误反馈，反映出插件生态对开发迭代效率的要求。

## 6. 开发者关注点

- **大型仓库中的隐式 Git 操作风险高**：快照机制不应在用户工作区执行昂贵的 `git add .`，需要更轻量、可配置的版本控制策略。
- **V2 迁移必须以数据不丢失为底线**：会话存在但消息消失是最严重的数据完整性风险之一。
- **权限请求不能静默失败**：尤其在子 Agent 场景中，审批提示和执行结果必须可追踪。
- **免费额度与 Provider 状态提示需要透明化**：用户需要区分真实限额、上游组织限制、网络错误和本地状态缓存问题。
- **上下文管理仍是核心可靠性问题**：压缩阈值、输出预留、长度终止恢复和会话重试需要在统一策略下处理。
- **高频操作存在明显性能空间**：Git 进程、模型目录查询、Azure 转换、Desktop 消息图片加载均被开发者列为优化重点。
- **Desktop 的后台任务不应干扰前台工作**：窗口抢焦点、冷启动文件监听和大型事件表膨胀均会破坏持续使用体验。
- **Agent 行为需要保持确定性**：工具调用退化为 Bash、服务重启后任务重复执行、未知流事件导致请求失败，均说明运行时仍需加强边界检查与幂等控制。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-24

## 1. 今日速览

过去 24 小时无新版本发布，社区主要围绕 **Bedrock 默认模型稳定性、macOS 测试隔离、Responses SSE 编码正确性及 TUI 交互体验** 展开。除新增模型目录、侧边栏状态保留等修复外，多项 master 分支测试回归问题集中暴露，反映近期功能开发对测试隔离和跨平台兼容性的压力上升。

## 3. 社区热点 Issues

> 过去 24 小时共更新 8 条 Issue，以下按关注价值排序。

### 1. Bedrock 占位模型晋升可能降级 Opus 5.5 默认模型
- **链接**：[Issue #1926](https://github.com/1jehuang/jcode/issues/1926)
- **重要性**：当 Bedrock 使用旧版本目录缓存时，运行时可能将新版 `anthropic.claude-opus-5-5` 默认值替换为较旧模型，直接影响默认模型质量与用户预期。
- **社区反应**：已有 2 条评论；相关修复 PR [#1946](https://github.com/1jehuang/jcode/pull/1946) 已提交。
- **关注点**：需要明确“新旗舰默认模型不可被旧目录降级”的版本优先级规则。

### 2. macOS 上 Bedrock 测试污染真实用户配置
- **链接**：[Issue #1952](https://github.com/1jehuang/jcode/issues/1952)
- **重要性**：测试通过 `XDG_CONFIG_HOME` 隔离配置，但 macOS 的 `app_config_dir` 并未遵循该变量，可能写入用户真实配置目录并导致测试相互干扰。
- **社区反应**：新问题暂无评论；这是高优先级测试环境安全与可重复性问题。
- **关注点**：统一跨平台配置目录解析，并确保所有测试使用真正隔离的临时 HOME。

### 3. Gemini Runtime schema 测试在 master 上失败
- **链接**：[Issue #1951](https://github.com/1jehuang/jcode/issues/1951)
- **重要性**：`prune_dangling_required` 回归导致对象未声明 properties 时，required 字段被错误清空，影响 Gemini 工具 schema 的兼容性。
- **社区反应**：新问题暂无评论，需尽快确认是测试预期变化还是实现回归。
- **关注点**：避免 schema 清理逻辑破坏 OpenAPI/Gemini 工具调用语义。

### 4. Harness API 能力台账遗漏 `AccountUsage`
- **链接**：[Issue #1950](https://github.com/1jehuang/jcode/issues/1950)
- **重要性**：TUI/桌面端已经使用的 daemon 请求未在 capability ledger 中完成审查，属于接口治理缺口。
- **社区反应**：新问题暂无评论；测试可稳定复现。
- **关注点**：新增 capability 时需要同步更新台账，确保所有跨端请求都有明确处置状态。

### 5. 切换模型时侧边栏消失，且缺少会话历史入口
- **链接**：[Issue #1948](https://github.com/1jehuang/jcode/issues/1948)
- **重要性**：模型切换会把空的历史快照误应用为文档状态，导致已打开侧边栏从界面消失，但文档仍保留，造成可见状态与会话状态不一致。
- **社区反应**：已有对应修复 PR [#1949](https://github.com/1jehuang/jcode/pull/1949)。
- **关注点**：模型切换不应破坏编辑上下文，并需提供清晰的会话历史访问方式。

### 6. macOS 云凭据转移测试因符号链接祖先路径失败
- **链接**：[Issue #1947](https://github.com/1jehuang/jcode/issues/1947)
- **重要性**：`secure_directory` 使用 `O_NOFOLLOW` 遍历所有祖先目录，在 macOS 默认 `/var -> /private/var` 环境下错误拒绝合法路径。
- **社区反应**：暂无评论，但问题直接阻塞凭据安全校验在 macOS 上的验证。
- **关注点**：安全检查需要兼顾防符号链接攻击与系统标准目录布局。

### 7. Responses SSE 在传输分块边界破坏 UTF-8
- **链接**：[Issue #1944](https://github.com/1jehuang/jcode/issues/1944)
- **重要性**：每个 SSE chunk 都单独执行 `String::from_utf8_lossy`，当一个 UTF-8 字符跨 chunk 传输时会被替换为乱码，可能破坏模型输出、代码或 JSON。
- **社区反应**：暂无评论；由外部代码审查工具发现问题。
- **关注点**：应先按字节缓冲，再在完整事件或行边界上执行 UTF-8 解码。

### 8. Grok Build 模型选择器缺少 `grok-4.7`
- **链接**：[Issue #1942](https://github.com/1jehuang/jcode/issues/1942)
- **重要性**：CLI 已默认使用 Grok 4.7，但 jcode 的 `/model` 选择器仍停留在 4.6 等旧版本，用户只能手动指定模型。
- **社区反应**：暂无评论；对应修复 PR [#1943](https://github.com/1jehuang/jcode/pull/1943) 已提交。
- **关注点**：模型目录更新速度需要与官方 CLI 默认值保持同步。

## 4. 重要 PR 进展

### 1. 修复 Bedrock 旗舰默认模型被旧目录降级
- **链接**：[PR #1946](https://github.com/1jehuang/jcode/pull/1946)
- **进展**：为 `bedrock_promoted_default` 增加版本下限，仅当目录中出现严格更新的 Claude frontier 版本时才替换默认模型。
- **价值**：防止缓存目录刷新反向降低默认模型能力。

### 2. 保留模型切换后的侧边栏并增加会话历史
- **链接**：[PR #1949](https://github.com/1jehuang/jcode/pull/1949)
- **进展**：模型目录响应复用 `History` 时附带未标记的空 panel snapshot，避免空快照覆盖当前文档状态。
- **价值**：提升长会话连续性，并改善历史面板的可发现性。

### 3. 增强 TUI 总览折叠、记忆 effort 配置与运行时模型行
- **链接**：[PR #1709](https://github.com/1jehuang/jcode/pull/1709)
- **进展**：加入 overview folding widget、`agents.memory_effort` sidecar 配置及运行时模型行。
- **价值**：统一记忆提取任务的推理强度，并改善信息面板的密度控制。

### 4. `/model` 中通过 Ctrl+S 选择 swarm model
- **链接**：[PR #1706](https://github.com/1jehuang/jcode/pull/1706)
- **进展**：增加 swarm model 子选择器快捷入口；未配置时，spawn agent 继承当前会话模型。
- **价值**：提升多代理模型路由的可发现性，并减少协调器身份配置问题。

### 5. 新增 `ask_user` 工具与 TUI 内联选择器
- **链接**：[PR #1815](https://github.com/1jehuang/jcode/pull/1815)
- **进展**：agent 可在执行中发起结构化选择；TUI 支持数字快捷键、自由输入和超时自动选择，并回传实际选项。
- **价值**：增强 agent 与用户之间的交互闭环，尤其适合需要明确决策的工作流。

### 6. 自定义 OpenAI-compatible provider 支持逐模型配置
- **链接**：[PR #1879](https://github.com/1jehuang/jcode/pull/1879)
- **进展**：允许每个模型配置 `display_name`、reasoning override 和 effort，并在模型选择器中显示友好名称。
- **价值**：更适合承载不同模型层级的兼容网关，避免所有模型仅显示原始 ID。

### 7. 隔离测试环境并稳定并行测试
- **链接**：[PR #1880](https://github.com/1jehuang/jcode/pull/1880)
- **进展**：清理外部 `JCODE_*` 环境变量影响；为修改 `JCODE_HOME` 的测试加锁；为易抖 fixture 提供 hermetic home。
- **价值**：降低因开发机环境差异和并行执行导致的测试失败。

### 8. 支持可配置 D2 图表及本地 TALA 渲染
- **链接**：[PR #1918](https://github.com/1jehuang/jcode/pull/1918)
- **进展**：增加本地 D2 渲染和图表生成偏好设置；D2 默认采用 TALA 布局，并提供 Dagre、ELK 可选项；Mermaid 保持默认生成引擎。
- **价值**：增强本地可视化能力和输出可选性。

### 9. 支持逐模型 reasoning 配置及自定义 OpenAI provider
- **链接**：[PR #1879](https://github.com/1jehuang/jcode/pull/1879)
- **进展**：兼容 provider 可配置模型显示名、推理参数覆盖及 effort，配置由 provider 控制层传递至模型选择器。
- **价值**：为第三方模型网关提供更细粒度的路由与展示能力。

### 10. Grok Build 目录加入 `grok-4.7`
- **链接**：[PR #1943](https://github.com/1jehuang/jcode/pull/1943)
- **进展**：将 `grok-4.7` 加入 `/model` 选择器和 `jcode --provider grok-build model list`。
- **价值**：使 jcode 与 Grok CLI 的当前旗舰模型保持一致。

### 其他值得关注的开放 PR
- [PR #1875](https://github.com/1jehuang/jcode/pull/1875)：可配置记忆提取模型，并支持 Alt+M 仅对当前会话生效。
- [PR #1873](https://github.com/1jehuang/jcode/pull/1873)：新增 Cursor ACP provider、模型路由和 reasoning effort 支持。
- [PR #1877](https://github.com/1jehuang/jcode/pull/1877)：新增 `/theme` 命令、明暗主题及自定义主题调色板。
- [PR #1945](https://github.com/1jehuang/jcode/pull/1945)：支持 Claude Code skill 的 `disable-model-invocation` frontmatter。
- [PR #1605](https://github.com/1jehuang/jcode/pull/1605)：在 `AGENTS.md` 中展开 `@path` 导入。
- [PR #1505](https://github.com/1jehuang/jcode/pull/1505)：支持采用 Codex 目录中的 `max_context_window`。
- [PR #1507](https://github.com/1jehuang/jcode/pull/1507)：支持为部分 OpenAI 模型请求 Daybreak cyber access program。
- [PR #1478](https://github.com/1jehuang/jcode/pull/1478)：在 TUI 工具调用行显示耗时。
- [PR #1480](https://github.com/1jehuang/jcode/pull/1480)：为工具调用行增加可选时间戳。

## 5. 功能需求趋势

1. **多模型与 Provider 生态扩展**
   - Grok 4.7 目录同步、Cursor ACP provider、自定义 OpenAI-compatible provider 逐模型配置，以及 Codex 最大上下文窗口支持，显示社区持续推动多后端、多模型统一接入。
   - 相关链接：[Issue #1942](https://github.com/1jehuang/jcode/issues/1942)、[PR #1873](https://github.com/1jehuang/jcode/pull/1873)、[PR #1879](https://github.com/1jehuang/jcode/pull/1879)

2. **Agent 交互与多代理控制**
   - `ask_user` 内联选择器、swarm model 快捷选择、会话级 memory model、reasoning effort 精细配置，显示重点正从“能调用模型”转向“可控的人机协作和代理编排”。
   - 相关链接：[PR #1815](https://github.com/1jehuang/jcode/pull/1815)、[PR #1706](https://github.com/1jehuang/jcode/pull/1706)、[PR #1875](https://github.com/1jehuang/jcode/pull/1875)

3. **TUI 可观测性与会话连续性**
   - 侧边栏跨模型切换保留、会话历史、工具耗时及时间戳、主题配置，反映社区希望 TUI 更接近可长期工作的专业开发环境。
   - 相关链接：[Issue #1948](https://github.com/1jehuang/jcode/issues/1948)、[PR #1949](https://github.com/1jehuang/jcode/pull/1949)、[PR #1478](https://github.com/1jehuang/jcode/pull/1478)

4. **兼容性与可移植性**
   - macOS 配置目录、TMPDIR 符号链接、跨平台环境隔离连续出现问题。社区期待 jcode 在 Linux 与 macOS 上拥有一致、可靠且安全的本地行为。
   - 相关链接：[Issue #1952](https://github.com/1jehuang/jcode/issues/1952)、[Issue #1947](https://github.com/1jehuang/jcode/issues/1947)、[PR #1880](https://github.com/1jehuang/jcode/pull/1880)

5. **Claude Code 生态互操作**
   - `AGENTS.md` 的 `@path` 导入以及 skill frontmatter 兼容，显示 jcode 正持续降低现有提示词、技能和代理配置迁移到 jcode 的成本。
   - 相关链接：[PR #1605](https://github.com/1jehuang/jcode/pull/1605)、[PR #1945](https://github.com/1jehuang/jcode/pull/1945)

6. **本地可视化能力**
   - D2、TALA、Mermaid 与多种布局引擎并行推进，开发者希望 AI 生成内容能直接转化为可维护的本地图表资产。
   - 相关链接：[PR #1918](https://github.com/1jehuang/jcode/pull/1918)

## 6. 开发者关注点

- **测试隔离必须真实可靠**：不能只依赖某个环境变量；应统一解析配置路径，并通过锁与 hermetic home 防止并行测试污染。
- **跨平台安全校验不能误伤合法路径**：macOS 的标准符号链接布局要求安全检查基于实际目标路径，而不是简单拒绝所有祖先符号链接。
- **流式协议必须正确处理字符边界**：UTF-8 字符可能跨 SSE chunk，解码应基于完整字节流，避免逐块 lossy 转换造成静默数据损坏。
- **默认模型选择需要版本单调性**：模型目录缓存、promotion 占位符和内置旗舰之间应有明确优先级，避免“刷新后降级”。
- **模型目录需要及时同步**：新旗舰模型必须同时进入交互式选择器、CLI 模型列表和默认配置逻辑。
- **状态更新需要区分“无变化”与“空状态”**：模型切换返回空 panel snapshot 时，不应误覆盖仍然有效的侧边栏文档。
- **接口能力需要治理台账**：`AccountUsage` 等已被 TUI/桌面端使用的请求，应同步补齐 capability ledger，减少后续兼容性债务。
- **细粒度配置成为高频需求**：开发者希望按模型控制 display name、reasoning、effort、memory model 和 context window，而不是只做 provider 级全局设置。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-10-24

> 数据范围：GitHub `earendil-works/pi` 过去 24 小时更新的 Issues 与 Pull Requests。过去 24 小时无新版本发布。

## 今日速览

- 社区重点仍集中在 **OpenAI Codex/OpenRouter 稳定性、工具调用参数处理与 TUI 性能**。其中 Codex 在 WebSocket 中途断开后无法回退 SSE，以及非 ASCII 文本编辑参数损坏，被标为进行中或高优先级问题。
- 过去 24 小时有 **29 个 PR 更新**，主要覆盖模型适配、MCP、终端交互、会话性能和文档一致性；多个修复已合入或关闭。
- 新模型方向出现亮点：PR #11355 开始支持 **Kimi Coding K3.1 Pro**，并统一使用 reasoning effort 元数据驱动模型能力配置。

---

## 社区热点 Issues

### 1. Codex 交互式请求偶发卡在 `Working...`
[#4945](https://github.com/earendil-works/pi/issues/4945) · **OPEN / inprogress**

`openai-codex` / `gpt-5.5` 偶尔没有流式文本、工具调用或错误提示，TUI 只能停留在 `Working...`，最终需按 Escape 中止。  
**重要性：**直接影响 Codex 的核心使用可靠性。  
**社区反应：**87 条评论、35 个赞，是本批 Issue 中讨论热度最高的一项。

### 2. Codex 压缩重试未回退 SSE
[#11202](https://github.com/earendil-works/pi/issues/11202) · **OPEN / inprogress**

使用默认 `auto` transport 时，若 WebSocket 在 `response.created` 后断开，自动压缩会反复尝试同一路径，最终报 `WebSocket error`，不会回退到 SSE。  
**重要性：**暴露了传输层降级机制和自动压缩恢复链路之间的缺口。  
**社区反应：**3 条评论，问题已获开发处理确认。

### 3. Anthropic 工具调用会损坏非 ASCII 编辑参数
[#10074](https://github.com/earendil-works/pi/issues/10074) · **OPEN**

Claude 执行 `edit` 工具时，参数中的 `\uXXXX` 转义可能被错误解析为退格符或换页符，导致包含韩文等非 ASCII 内容的文件编辑失败，甚至静默损坏文件。  
**重要性：**涉及数据完整性，且问题具有隐蔽性。  
**社区反应：**11 条评论；用户称该问题反复出现并造成大量重试成本。

### 4. Codex 图片工具结果应使用文件引用
[#8617](https://github.com/earendil-works/pi/issues/8617) · **OPEN**

建议将图片二进制保存在本地，在向 Codex 发送请求时转换为 ChatGPT `file_id`，避免每次请求重复传输 base64。  
**重要性：**有望减少图片密集型工作流的请求体和带宽消耗。  
**社区反应：**5 条评论；提案者已开发本地原型，正等待社区确认方案。

### 5. OpenAI Completions 流式工具参数解析为 O(n²)
[#9265](https://github.com/earendil-works/pi/issues/9265) · **OPEN / inprogress**

流处理器在每个 delta 到达时重新解析完整工具参数 JSON，导致成本随参数长度平方增长，在单进程承载多 Agent 会话时可能阻塞事件循环。  
**重要性：**直接影响嵌入式、多会话 Agent Runtime 的吞吐和响应延迟。  
**社区反应：**7 条评论、3 个赞，属于明确的高影响性能问题。

### 6. 大型会话中 TUI 全量重绘导致卡顿
[#9807](https://github.com/earendil-works/pi/issues/9807) · **CLOSED**

当会话达到 800 条以上消息时，Pi 在每次交互时重绘全部 scrollback，造成滚动和输入延迟。  
**重要性：**长会话是 Coding Agent 的常见工作方式，性能影响范围广。  
**社区反应：**7 条评论、3 个赞；该问题已进入关闭状态。

### 7. `session.abort()` 后 `pi -p` 仍无法退出
[#11336](https://github.com/earendil-works/pi/issues/11336) · **CLOSED**

扩展调用 `session.abort()` 取消流式请求后，底层 undici socket 仍保持 `ESTABLISHED`，导致非交互模式无法及时退出。  
**重要性：**可能造成 CLI 挂起、CI 任务超时和资源泄漏。  
**社区反应：**2 条评论，报告环境为 pi 1.4.0。

### 8. MCP HTTP JSON 响应绕过消息大小限制
[#11335](https://github.com/earendil-works/pi/issues/11335) · **CLOSED**

MCP HTTP JSON 路径未应用 `maxMessageBytes`，同一份大型 `tools/list` 响应以 JSON 发送时可通过，以 SSE 发送时则会被拒绝。  
**重要性：**造成协议实现不一致，并可能削弱对异常大响应的防护。  
**社区反应：**3 条评论，问题已关闭。

### 9. Anthropic OAuth 对新 Claude 模型返回无效 effort level
[#10063](https://github.com/earendil-works/pi/issues/10063) · **CLOSED**

Claude Opus 5/5.5 和 Fable 5 经 Anthropic OAuth 请求时，默认、low、high 等配置均可能返回 `Invalid effort level`。  
**重要性：**影响新模型在 Pi 中的正常使用及推理强度配置。  
**社区反应：**12 条评论、1 个赞；目前已关闭。

### 10. SOCKS 代理导致启动时异常退出
[#11195](https://github.com/earendil-works/pi/issues/11195) · **OPEN**

当 `ALL_PROXY` 或 `HTTP_PROXY` 使用 `socks5h://` 时，Pi 启动报 `InvalidArgumentError: Invalid URL protocol`。  
**重要性：**代理是企业网络、远程开发环境中的常见配置，错误信息也不够友好。  
**社区反应：**3 条评论；相关修复 PR #11341 已关闭。

---

## 重要 PR 进展

### 1. 支持 Kimi Coding K3.1 Pro
[#11355](https://github.com/earendil-works/pi/pull/11355) · **OPEN**

为 K3.1 Pro 和 Pro Highspeed 增加 low/high/max reasoning effort，发送 `reasoning_effort` 并保留 reasoning 内容。模型 wire preset 改为从 effort 元数据推导，减少维护独立模型 ID 列表的成本。

### 2. 修复会话 fork 时的逐条文件写入
[#11288](https://github.com/earendil-works/pi/pull/11288) · **CLOSED / inprogress**

`SessionManager.forkFrom` 原先为每个条目单独调用 `appendFileSync`，导致目标文件被反复打开和关闭。PR 改为通过单一文件描述符写入，改善大型会话 fork 延迟。

### 3. 修复 faux provider 重复计算 prompt token
[#11318](https://github.com/earendil-works/pi/pull/11318) · **CLOSED**

设置 `sessionId` 时，faux provider 会模拟 prompt caching；此前 `cacheWrite` token 同时计入 `input`，造成总 token 数翻倍。PR 修正了统计口径。

### 4. 修复 `pi.exec()` 跨 chunk 的 UTF-8 损坏
[#11330](https://github.com/earendil-works/pi/pull/11330) · **CLOSED**  
[#11326](https://github.com/earendil-works/pi/pull/11326) · **CLOSED / inprogress**

此前 stdout/stderr 每个 chunk 都独立调用 `Buffer.toString()`，多字节字符跨 chunk 时会产生 U+FFFD。相关 PR 引入独立 `StringDecoder` 并在结束时刷新输出。

### 5. 改进模型选择器中的别名展示
[#11347](https://github.com/earendil-works/pi/pull/11347) · **CLOSED**

`/model` 和 `/scoped-models` 现在会在模型 ID 后显示具有信息量的自定义名称，例如 `minimax/minimax-m3 (MiniMax M3 [rasmus@openrouter])`。该 PR 关联并关闭了 #5916。

### 6. 为不可用代理 URL 提供清晰错误
[#11341](https://github.com/earendil-works/pi/pull/11341) · **CLOSED**

针对 SOCKS、无 scheme 或带路径的代理配置，不再直接暴露 undici 堆栈，而是返回明确、可操作的错误信息，并处理 `httpProxy` 设置。

### 7. 修复 ARM32 错误下载 x86-64 的 fd/rg
[#11343](https://github.com/earendil-works/pi/pull/11343) · **CLOSED**

此前除 ARM64 外的架构都会映射到 x86-64，ARM32 和 ia32 下载后无法执行。PR 修正平台映射，并避免在不支持的架构上下载工具。

### 8. 修复 Gemini 工具 schema 中的 `const`
[#11325](https://github.com/earendil-works/pi/pull/11325) · **CLOSED / inprogress**

TypeBox 会在 literal 或 literal union 中生成 `const`，但 Gemini 适配器会忽略该字段，导致模型传入任意值。PR 将 `const` 转换为 Gemini 可识别的 enum 表示。

### 9. 支持新的 Stateless MCP 规范
[#10416](https://github.com/earendil-works/pi/pull/10416) · **OPEN**

尝试为 `pi-mcp` 增加对 2026-07-28 Stateless MCP 的双时代支持，覆盖 stdio 与 Streamable HTTP，同时维持旧服务器兼容性。  
**关联 Issue：**[#10416](https://github.com/earendil-works/pi/issues/10416)

### 10. 修复 Orca 终端图片能力识别
[#9329](https://github.com/earendil-works/pi/pull/9329) · **OPEN**

将 `TERM_PROGRAM=Orca` 识别为支持 Kitty inline images、true color 和 OSC 8 超链接，使图片组件可在 Orca 中内联显示，而不是降级为文本。

---

## 功能需求趋势

### 1. 新模型与模型配置支持
- [Kimi Coding K3.1 Pro 支持](https://github.com/earendil-works/pi/pull/11355)
- [Bedrock GLM-5.3 reasoning effort 支持](https://github.com/earendil-works/pi/issues/11354)
- [Provider 扩展、模型别名与搜索](https://github.com/earendil-works/pi/issues/5916)
- [Anthropic OAuth 新模型 effort level 兼容](https://github.com/earendil-works/pi/issues/10063)

社区期待 Pi 更快跟进模型能力变化，尤其是 reasoning effort、别名、模型搜索和不同 provider 间的配置一致性。

### 2. MCP 协议扩展与可靠性
- [支持 Stateless MCP 2026-07-28](https://github.com/earendil-works/pi/issues/10416)
- [MCP elicitation 支持](https://github.com/earendil-works/pi/issues/10274)
- [MCP HTTP JSON 消息大小限制](https://github.com/earendil-works/pi/issues/11335)
- [durable `watchEvents` 断点续传](https://github.com/earendil-works/pi/issues/11327)

MCP 正在从基础连接能力向新协议特性、流式事件恢复和资源限制治理扩展。

### 3. 长会话与多 Agent 性能
- [O(n²) 工具参数解析](https://github.com/earendil-works/pi/issues/9265)
- [大型会话 TUI 全量重绘](https://github.com/earendil-works/pi/issues/9807)
- [大型会话 fork 性能](https://github.com/earendil-works/pi/issues/11253)
- [Abort 后 socket 未释放](https://github.com/earendil-works/pi/issues/11336)

开发者更关注长上下文、大量工具调用和嵌入式多会话运行时的延迟、阻塞与资源释放。

### 4. 工具调用健壮性与文件安全
- [非 ASCII 编辑参数损坏](https://github.com/earendil-works/pi/issues/10074)
- [让 `prepareArguments` 修复无效工具参数](https://github.com/earendil-works/pi/issues/11112)
- [JSON 编码对象/数组参数恢复](https://github.com/earendil-works/pi/pull/9569)
- [Codex 图片使用文件引用](https://github.com/earendil-works/pi/issues/8617)

工具协议边界条件是高频风险点，需求集中在参数容错、避免静默损坏以及降低重复载荷。

### 5. 扩展系统控制力
- [配置原生工具暴露模式](https://github.com/earendil-works/pi/issues/11286)
- [扩展可取消退出事件](https://github.com/earendil-works/pi/issues/11266)
- [自定义消息触发会话文件创建](https://github.com/earendil-works/pi/issues/11267)

开发者希望扩展不仅能添加工具，还能控制暴露策略、生命周期和持久化行为。

### 6. 跨平台 TUI 与终端体验
- [Windows + Zellij 鼠标滚轮异常](https://github.com/earendil-works/pi/issues/9656)
- [Windows 高负载下输入符号泄漏](https://github.com/earendil-works/pi/issues/11086)
- [选择列表 PageUp/PageDown 统一支持](https://github.com/earendil-works/pi/pull/11348)
- [Orca Kitty 图片能力识别](https://github.com/earendil-works/pi/pull/9329)

社区重点关注 Windows、SSH、多路复用器和不同终端模拟器下的输入、滚动、图片与快捷键一致性。

---

## 开发者关注点

1. **请求不能“无声挂起”**  
   Codex 卡在 `Working...`、WebSocket 断开后不回退 SSE、Abort 后进程不退出，都要求系统提供明确错误、可靠降级和可恢复路径。

2. **工具调用必须保证数据安全**  
   非 ASCII 编辑参数被静默接受尤其危险。开发者希望解析失败时保留原始输入、允许修复，并将校验错误返回模型重试，而不是损坏文件。

3. **大型会话和嵌入式 Runtime 的性能压力持续上升**  
   全量 TUI 重绘、O(n²) 参数解析、逐条 fork 写入都会在长会话或多 Agent 场景放大。需要更清晰的性能边界与可复现基准。

4. **跨平台终端兼容仍是薄弱环节**  
   Windows、Zellij、SSH、Orca 等组合下出现滚轮、输入、选择和图片显示差异，说明 TUI 能力检测与事件路由仍需系统化治理。

5. **MCP 兼容性需要更主动跟进规范**  
   Stateless MCP、elicitation、消息大小限制及断点续传均受到关注。新增功能需要同时考虑协议协商、旧服务器兼容和失败回退。

6. **模型支持应减少硬编码和配置漂移**  
   Kimi 的 effort 元数据驱动方案，以及模型别名展示修复，反映出社区希望模型能力配置更动态，Provider 名称、模型 ID 与展示名称保持一致。

7. **可观测性和错误信息应更明确**  
   启动期 npm 安装失败、无效代理 URL、未定义 renderer 等问题曾直接暴露原始堆栈。开发者期待结构化错误、可操作的提示以及崩溃信息落盘。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
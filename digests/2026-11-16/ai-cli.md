# AI CLI 工具社区动态日报 2026-11-16

> 生成时间: 2026-11-16 05:47 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-16**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、jcode、pi；Kimi Code CLI 过去 24 小时无活动。**

---

## 1. 生态全景

当前 AI CLI 正从单纯的“终端代码生成器”快速演进为覆盖桌面端、远程执行、MCP、子代理、Browser Use、Skills 和自动化调度的综合 Agent 平台。与此同时，生态的主要矛盾已从“能力不足”转向**可靠性与一致性不足**：权限误判、状态丢失、升级回归、协议协商错误和长连接中断成为共同痛点。

模型、Provider 与认证信息的统一注册和动态同步正在成为基础设施核心，但多数工具仍存在静态模型目录、扩展 Provider 不可见、会话恢复后模型漂移等问题。可观测性需求明显上升，社区不再满足于工具“能调用”，而是要求明确显示阻断原因、真实运行状态、终止原因及恢复过程。

---

## 2. 各工具活跃度对比

> Issues/PR 数量按所给摘要中可明确统计的当日更新计算；不同项目对 Issue、PR 和 Release 的统计口径可能存在差异。

| 工具 | 今日 Issues | 今日 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个热点 Issue | 0 个更新 PR | 无 | 需求热度高，工程交付较安静 |
| **OpenAI Codex** | 10 个热点 Issue | 10 个重要 PR | 2 个 Rust Alpha | 今日交付最活跃，功能面扩张明显 |
| **Gemini CLI** | 10 个热点 Issue | 10 个重要 PR | 无 | PR 密集，集中修复 Agent 可靠性 |
| **GitHub Copilot CLI** | 10 个热点 Issue | 0 个更新 PR | 无 | Issue 驱动明显，MCP 与 Agent 阻塞突出 |
| **OpenCode** | 10 个热点 Issue | 10 个重要 PR | 无 | 快速迭代，但升级回归较多 |
| **jcode** | 5 个更新 Issue | 10 个重要 PR | 无 | 规模较小，但工程修复密度高 |
| **pi** | 10 个热点 Issue | 3 个更新 PR | 无 | 讨论集中，Provider 与上下文问题突出 |
| **Kimi Code CLI** | 0 | 0 | 无 | 过去 24 小时无活动 |

### 活跃度解读

- **OpenAI Codex、Gemini CLI、OpenCode** 是当日最明显的工程推进型项目：三者均约 10 个重要 PR，覆盖远程执行、Agent 状态、配置、跨平台兼容和扩展生态。
- **Claude Code、GitHub Copilot CLI** 当日没有 PR 更新，但社区需求集中，说明其当前更像是“需求积压型项目”。
- **jcode** 社区体量较小，但 5 个 Issue 配有约 10 个针对性 PR，问题修复密度较高。
- **pi** 的社区讨论量不低，但实际代码交付较少，主要矛盾在模型目录、Provider 注册、上下文压缩和长连接。
- **Kimi Code CLI** 当日无活动，暂不具备与其他工具同等的实时比较信号。

---

## 3. 共同关注的功能方向

### 3.1 权限与沙箱必须覆盖所有执行入口

这是多个项目共同面对的最高优先级问题：

- **Claude Code**：Auto Mode 误判合法安全任务和只读操作；Hook 拒绝原因未结构化暴露。
- **Codex**：“Always allow”下只读 Browser Use 仍被拦截；Windows 仅显示 `blocked by policy`。
- **Gemini CLI**：命令替换限制硬编码，破坏性 Git 操作缺少可靠护栏。
- **OpenCode**：文件工具遵守 `external_directory`，但 Shell 写入可绕过该规则。
- **Copilot CLI**：策略刷新会禁用 `/allow-all`，多会话并发还可能覆盖托管配置。

**共同结论：** 权限系统正在从单一开关转向细粒度策略引擎，但多数产品仍存在“界面显示已授权、底层执行仍拒绝”或“文件工具受控、Shell 工具绕过”的断层。

---

### 3.2 MCP 从协议兼容走向全链路可靠性

- **Codex**：Windows MCP HTTP 解码失败；MCP 工具发现后未必进入具体线程；远程 app-server 开始支持 CLI 非交互执行。
- **Copilot CLI**：发现成功却继续发送旧版 `initialize`；Atlassian OAuth 回调未注册；IDE 动态 MCP 重载失败。
- **OpenCode**：开始实验 MCP Skills，将 MCP 从“工具协议”扩展为“技能生态”。
- **Claude Code**：GitLab 仓库、MR 和移动端工作流集成成为高热度需求。

**共同结论：** MCP 的主要问题已不是“能否连接”，而是版本协商、OAuth、动态注册、线程绑定、工具发现与实际调用之间能否保持端到端一致。

---

### 3.3 子代理从“能调用”转向可控制、可观测

- **Codex**：为线程列表增加索引，并标记云端线程；社区关注远程线程和子代理状态。
- **Gemini CLI**：修复 `MAX_TURNS` 被误报为 `GOAL success`；generalist Agent 存在无限等待。
- **Copilot CLI**：审查—修复循环延迟高；后台子代理在无有效 turn 时仍可无限运行。
- **jcode**：Swarm 支持父任务 effort 传播、`model:inherit` 和 fallback 顺序控制。
- **Claude Code**：希望后台 Agent 和定时任务在额度重置、进程重启后恢复。

**共同结论：** 子代理的关键指标正在转向启动开销、终止条件、结果回收、模型继承、状态展示和跨重启恢复，而不仅是并发数量。

---

### 3.4 会话与项目状态必须在升级、重启和恢复后保持一致

- **Claude Code**：Windows 重启后远程会话未恢复；未满 30 天的交互记录仍可能被清理。
- **Codex**：Windows 更新后本地项目消失；macOS 反复卡在 Reconnecting。
- **Copilot CLI**：Desktop 凭据注册随会话失效；长会话恢复后滚动位置异常。
- **OpenCode**：CLI 依赖 `$PWD` 而非进程实际 cwd，导致会话归属错误。
- **pi**：恢复会话时模型 ID 被重写，可能静默切换到无关模型。

**共同结论：** 会话持久化、项目索引、认证状态、远程连接和模型路由需要共享同一套可恢复状态模型，不能由各模块独立维护。

---

### 3.5 模型与 Provider 注册必须实时且统一

- **pi**：扩展 Provider 无法被默认模型选择器、`pi auth check` 和会话恢复一致识别；GPT-6.1 Sol 仍显示旧的 272K 上下文。
- **OpenCode**：fallback 绕过模型允许列表，Plan/Build 切换可能改变实际模型。
- **jcode**：自定义 OpenAI-compatible Provider 在恢复会话后只显示静态模型；命名 Profile 的 headers 未真正发送。
- **Gemini CLI**：Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等覆盖项。
- **Claude Code / Codex**：CLI 与 Desktop、多会话和多模式之间存在默认模型或默认模式不一致。

**共同结论：** 社区正在推动“单一实时 Registry”：认证、模型目录、默认模型、fallback、会话持久化和恢复映射应共享同一份状态。

---

### 3.6 Skills、插件与扩展生态快速扩张

- **Copilot CLI**：Headless 模式中已发现的 Skill 可能无法调用；插件安装后仍记录为禁用。
- **OpenCode**：TUI 支持 `/` 引用 Skills，并实验 MCP Skills。
- **Gemini CLI**：用户希望模型主动调用 Gradle、Git 等 Skills 和专业子代理。
- **Claude Code**：插件/Mods 渲染、hook 原因传递和 `/reload-plugins` 成为焦点。

**共同结论：** 扩展能力快速增加，但“发现、启用、展示、调用、持久化”五个阶段仍未形成统一生命周期。

---

### 3.7 跨平台、终端协议和企业网络成为基础准入条件

- **Windows**：Codex、Claude Code、OpenCode、Copilot CLI、pi 均出现 Windows 特有问题。
- **终端协议**：jcode 重点处理 Kitty CSI-u、ConPTY、ESC 分片和输入污染。
- **代理网络**：Codex WebSocket 未遵循系统代理和 `HTTP_PROXY`，影响企业及零信任网络。
- **Wayland**：Gemini CLI Browser Agent 在 Wayland 下失败。
- **Unicode**：Codex 修复双向文本、组合字符和 Emoji 高亮问题。

**共同结论：** Windows、代理网络、Unicode 和终端键盘协议已不再是边缘兼容性，而是企业级可用性的核心测试维度。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术与生态路线 |
|---|---|---|---|
| **Claude Code** | 终端 Agent、Desktop、Hooks、远程控制、后台任务、插件生态 | 重视终端效率、安全治理和复杂自动化的开发者 | Claude 模型原生闭环；强调权限 Hook、工具链集成和 Desktop 扩展 |
| **OpenAI Codex** | CLI、桌面端、远程 app-server、MCP、Browser Use、多代理 | 大规模工程团队、平台型开发者、远程/CI 用户 | Rust Core + app-server 架构；强调共享服务端、线程索引和远程执行 |
| **Gemini CLI** | Agent/Subagent、Skills、代码库理解、Browser Agent | Google/Vertex 用户、Agent 编排和代码库分析用户 | 多 Provider 与 Agent Registry；强调本地工具链、AST 感知和子代理能力 |
| **GitHub Copilot CLI** | GitHub/MCP、IDE 集成、插件、BYOK、企业策略 | GitHub 生态用户、企业开发者和 IDE/CI 用户 | 与 GitHub 身份、MCP Server、IDE 和托管策略深度绑定 |
| **OpenCode** | 开源、多 Provider、Desktop/TUI、Skills、自动化 | 注重模型自由、开放扩展、自托管和定制体验的用户 | 开放 Provider 生态；Core/TUI/Desktop 多层架构，持续推进 MCP Skills 和 Automations |
| **jcode** | TUI、Swarm、多 Provider、sidecar fallback、自定义网关 | 注重终端交互、多代理路由和可配置运行时的用户 | Rust/TUI 路线；强调低延迟、精细路由和本地终端体验 |
| **pi** | 多 Provider、扩展注册、上下文压缩、Durable、多宿主集成 | 高度定制化用户、SDK/RPC 嵌入者和长任务开发者 | 轻量扩展与多宿主架构；强调 Provider Registry、上下文管理和持久化任务 |
| **Kimi Code CLI** | 暂无足够当日信号 | 需结合历史版本进一步判断 | 当日无活动，暂不判断 |

### 定位差异提炼

- **Codex** 正在走“统一 Agent Runtime”路线，远程 app-server 和线程索引是核心资产。
- **Gemini CLI** 更像“Agent 操作系统”，重点在子代理、浏览器代理、工具选择和技能路由。
- **Copilot CLI** 的差异化在 GitHub 企业生态，但当前最大瓶颈也是 MCP 和托管状态一致性。
- **OpenCode** 以开放性和多 Provider 吸引用户，但近期升级回归对信任影响较大。
- **Claude Code** 的社区需求最成熟，说明产品已进入平台化阶段；下一步关键不是再增加入口，而是完善 Desktop、多账号、插件、权限和恢复机制。
- **jcode** 和 **pi** 更适合重视 TUI、Provider 适配、会话持久化和可嵌入性的高级用户。

---

## 5. 社区热度与成熟度

### 社区热度最高的方向

1. **Claude Code**
   - Desktop 多账号 Issue 达 **245 条评论、1,054 个点赞**，是全部材料中最高热度。
   - GitLab 集成获得 **61 条评论、155 个点赞**。
   - 表明产品已拥有大规模用户基础，需求开始从单点命令扩展到企业账号、托管平台和完整 IDE 化。

2. **OpenCode**
   - 免费额度集中帖达 **371 条评论、28 个点赞**。
   - 恢复旧版侧栏需求获得 **47 个赞、45 条评论**。
   - 社区表达活跃，但高热度中包含明显升级不满和产品政策争议。

3. **Codex**
   - 两个 Alpha 版本、约 26 个当日 PR，并有多个高影响 Windows、MCP、Browser Use 和权限问题。
   - 属于典型的快速扩张期：功能增长快，工程回归也同步放大。

4. **Gemini CLI**
   - 10 个重要 PR 集中处理 Agent 状态、Windows、超时和安全。
   - 热点数量高，且修复与需求高度对齐，工程响应密度较强。

### 成熟度判断

| 阶段 | 工具 | 判断依据 |
|---|---|---|
| **平台化成熟阶段** | Claude Code、GitHub Copilot CLI | 大量长期需求、多端/企业/插件场景；用户开始关注完整生命周期 |
| **快速迭代扩张阶段** | Codex、Gemini CLI、OpenCode | 功能面快速扩大，PR 活跃，但升级、权限、状态问题密集 |
| **专业化快速打磨阶段** | jcode、pi | 用户规模信号较小，但集中在终端、多 Provider、Swarm、Durable 等高阶能力 |
| **信号不足阶段** | Kimi Code CLI | 当日无版本、Issue 或 PR 活动 |

**需要注意：** Issue 数量并不直接等同于产品成熟度。OpenCode 的高评论量中包含额度与迁移争议；Codex 的 PR 数量高也不能抵消 Windows 和 MCP 的可靠性风险。成熟度应结合版本节奏、回归控制、配置一致性和用户信任综合判断。

---

## 6. 值得关注的趋势信号

### 趋势一：Agent CLI 的竞争焦点从“模型能力”转向“运行时可靠性”

未来用户选择 CLI 时，关键指标将越来越包括：

- 权限命中原因是否明确；
- 状态是否与真实执行一致；
- 升级是否造成项目或会话丢失；
- 子代理能否超时、取消和回收；
- MCP 是否能从发现贯通到调用；
- 重启后能否恢复任务。

这类“基础工程能力”会比单次生成质量更直接影响企业采用。

### 趋势二：MCP 正成为统一扩展协议，但协议碎片化仍严重

多个工具同时推进 MCP Server、远程 app-server、MCP Skills 和 IDE 动态注册，说明 MCP 已成为事实上的 Agent 扩展标准。不过新旧协议协商、OAuth、HTTP 解码、代理支持、动态重载仍频繁失败。

**对开发者的参考：** 不要只测试“本地 stdio Server 能启动”，还应建立覆盖 OAuth、HTTP、系统代理、协议协商、线程绑定、重载和失败恢复的端到端测试矩阵。

### 趋势三：统一 Provider/Model Registry 将成为基础架构

扩展 Provider、BYOK、自定义网关、fallback、上下文窗口和会话恢复正在相互耦合。pi、OpenCode、jcode 的反馈尤其集中。

建议将以下内容统一建模：

- Provider 身份和认证方式；
- 实时模型目录；
- 默认模型与允许列表；
- 推理等级和上下文限制；
- fallback 顺序；
- 模型 ID 的持久化映射；
- 会话恢复时的模型重绑定规则。

### 趋势四：后台任务需要从“脚本”升级为“持久化工作流”

Claude Code 的后台 Agent 恢复、Codex 的远程执行、OpenCode 的 Automations、pi 的 Durable、jcode 的 Swarm 都指向同一方向。

未来后台任务至少需要具备：

- 明确状态机和终止原因；
- 超时、取消和幂等；
- checkpoint；
- 主机重启恢复；
- 费用和模型路由透明；
- 可审计执行轨迹。

### 趋势五：权限治理将走向细粒度、可配置、可审计

硬编码禁止无法满足真实开发工作流；完全放开又无法满足企业要求。社区正在推动的平衡点是：

- 按任务和工具类型动态授权；
- 只读、写入、Shell、Browser Use 分级；
- 工作区级策略；
- Hook/API 结构化暴露拒绝原因；
- 支持用户批准但不允许模型静默扩大作用域。

### 趋势六：跨平台质量将成为产品筛选门槛

当日几乎所有活跃项目都在处理 Windows、代理网络、Unicode、Wayland 或终端协议问题。企业用户会因此形成明确的技术选型标准：

1. Windows/WSL 与 IDE 终端可用；
2. 支持企业代理和零信任网络；
3. 跨项目、跨设备状态一致；
4. 升级和迁移无数据损失；
5. 中英文、RTL、Emoji 和组合字符正确渲染。

### 趋势七：Skills 与插件将从“显式调用”走向“主动路由”

社区已经不满足于要求用户输入 `/skill` 或指定子代理，而是希望 Agent 根据任务主动选择技能和专家代理。实现这一点的关键不只是提示词，还包括：

- 技能可发现性；
- 触发条件明确；
- 工具和子代理注册一致；
- Headless 与交互模式行为一致；
- 选择过程可解释、可评测。

---

## 决策建议

### 对团队选型者

- **优先看运行时质量，而非单次 Benchmark**：权限、会话恢复、MCP、升级回归和后台任务生命周期应纳入 PoC。
- **GitHub 深度用户**可优先评估 Copilot CLI，但需验证企业 OAuth、动态 MCP 和策略刷新。
- **需要远程与多代理基础设施**可重点评估 Codex。
- **需要开放 Provider 与扩展能力**可评估 OpenCode、pi，但应设置升级回归和权限旁路测试。
- **需要终端多代理精细控制**可评估 jcode，同时关注 Windows 输入兼容和主干 CI 质量。

### 对 AI CLI 开发者

建议优先投入以下五项：

1. **统一权限策略层**，确保文件、Shell、Browser、子代理共享同一判定和审计链路。
2. **建立持久化会话状态机**，避免升级、重启、额度重置和远程连接造成状态丢失。
3. **实现实时统一 Model/Provider Registry**，打通认证、选择、恢复和 fallback。
4. **补齐 MCP 端到端测试**，覆盖协议协商、OAuth、代理、重载和真实工具调用。
5. **为子代理和后台任务提供可靠终止与恢复机制**，准确暴露状态、终止原因、费用和 checkpoint。

**总体判断：** AI CLI 生态已经进入“Agent 平台竞争”阶段。下一阶段的赢家不一定拥有最多模型或最复杂界面，而更可能取决于其能否让权限、状态、连接、MCP 和后台任务在桌面、CLI、IDE、移动端及 CI 之间保持一致、可解释和可恢复。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 2026-11-16。PR 数据中的评论数均为 `undefined`，因此无法严格按评论量排名；以下优先结合 PR 热度、跨期更新、关联 Issue、修复覆盖面与潜在影响进行判断。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 社区关注点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder](https://github.com/anthropics/skills/pull/1742) | 适配 MCP 2.x：将 `streamablehttp_client` 迁移为 `streamable_http_client`，并通过 `create_mcp_http_client` / `http_client` 支持自定义 HTTP Headers。直接关联 [#1668](https://github.com/anthropics/skills/issues/1668)，体现社区对 MCP 兼容性、鉴权及企业代理接入的持续需求。 | **Open** |
| 2 | [skill-creator](https://github.com/anthropics/skills/pull/1298) | 修复触发评测中的并发串扰、Windows `select()` 兼容和运行时失败误判；同时涉及[并行 Worker 错配导致触发率接近零](https://github.com/anthropics/skills/issues/1352)及[`claude -p` 无法触发 Skill](https://github.com/anthropics/skills/issues/556)等核心问题，直接影响 Skill 的发现率和质量验证。 | **Open** |
| 3 | [skill-creator 打包修复](https://github.com/anthropics/skills/pull/1681) | 支持直接执行 `package_skill.py`，修复 `ModuleNotFoundError`，并更新过时用法。另一个相关修复是[正确解析 YAML frontmatter](https://github.com/anthropics/skills/pull/1997)，避免描述中的引号、转义字符和续行在评测阶段被错误处理。 | **Open** |
| 4 | [webapp-testing](https://github.com/anthropics/skills/pull/1980) | 移除 `with_server.py` 中的 `shell=True`，降低代理输入或用户命令进入 Shell 后的命令注入风险。配套还有[表单元素发现错误](https://github.com/anthropics/skills/pull/1976)，说明 Web 测试 Skill 正从“能运行”转向“安全与准确”。 | **Open** |
| 5 | [docx](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时不再被误报为成功，并在输出后检查 `w:ins`、`w:del` 等修订标记，确认修订确实生效。另有[孤立批注检测](https://github.com/anthropics/skills/pull/1734)与[XML 命名空间丢失修复](https://github.com/anthropics/skills/issues/2018)，反映文档 Skill 的质量验证需求很强。 | **Open** |
| 6 | [xlsx](https://github.com/anthropics/skills/pull/2019) | 修复工作表级 defined names、别名及外部引用的漏检，降低 `external_links_at_risk` 的误报与漏报，关联 [#2013](https://github.com/anthropics/skills/issues/2013)。重点是复杂公式和外部链接的安全审计。 | **Open** |
| 7 | [claude-api](https://github.com/anthropics/skills/pull/1950) | 更新 Python SDK 的 `pause_turn` 续跑指南，避免沿用“必须在外层重启”的旧方案；同时修复[死链](https://github.com/anthropics/skills/pull/1730)。但社区仍关注该 Skill[单次工具调用注入约 15.6 万 Token、挤占上下文](https://github.com/anthropics/skills/issues/1487)的问题。 | **Open** |
| 8 | [document-typography](https://github.com/anthropics/skills/pull/514) | 新增文档排版质量控制，覆盖孤行寡行、标题孤行、编号错位等 AI 文档常见问题。虽创建时间较长，但更新持续、需求普适，适合成为文档生成链中的独立质量门。 | **Open** |

### 补充关注的新方向

- [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)：面向 Solidity/Rust 智能合约静态分析，并将审计证明锚定到 TON 区块链。代表“专业领域 Skill + 可验证证明”的结合。
- [md2video-audio](https://github.com/anthropics/skills/pull/1703)：将 Markdown 转换为带配音的 MP4，代表低成本内容自动化需求。
- [Pyxel](https://github.com/anthropics/skills/pull/525)：支持 Python 复古游戏开发、无头执行和帧级验证，代表垂直开发及自动验收型 Skill。
- [SCNet HPC](https://github.com/anthropics/skills/pull/1615)：覆盖 SSH、Slurm、集群发现和计算节点操作，代表远程超算基础设施自动化。

## 2. 社区需求趋势

### 2.1 企业级分发、共享与治理

最突出的诉求是建立清晰的 Skill 分发与治理体系：

- [社区 Skill 在 `anthropic/` 命名空间分发造成信任边界滥用](https://github.com/anthropics/skills/issues/492)拥有最高讨论度，核心诉求是官方与社区来源必须可识别、可验证，避免用户将第三方 Skill 误认为官方能力。
- [Claude.ai 缺少组织级 Skill 共享](https://github.com/anthropics/skills/issues/228)：希望提供共享库、团队分发链接及权限管理，替代人工上传 `.skill` 文件。
- [document-skills 与 example-skills 插件内容重复](https://github.com/anthropics/skills/issues/189)：需要插件互斥、依赖声明或去重机制，避免重复 Skill 占用上下文。

**趋势判断：** 社区关注点已从“能不能写 Skill”转向“能不能安全地安装、发现、共享和规模化治理 Skill”。

### 2.2 可复用工作流与结果验证

[Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)提出三阶段质量门：

1. 任务前校准；
2. 对抗式复核；
3. 交付前验证。

其他高关注 PR 也体现相同方向：

- DOCX 修订必须检查 XML 输出，而不能只看进程退出码；
- XLSX 外部链接风险需要识别别名和工作表作用域；
- Web 测试需要安全启动服务并准确发现控件；
- 智能合约 Skill 开始强调“分析 + 密码学证明”。

**趋势判断：** 用户更希望 Skill 是一条可验收的端到端流水线，而不是单次提示词或单步脚本。

### 2.3 Skill 创建、评测与元数据质量

围绕 `skill-creator` 的需求最集中：

- [`run_eval.py` 并行评测会串扰 UUID，导致触发率接近零](https://github.com/anthropics/skills/issues/1352)；
- [`claude -p` 评测无法触发 Skills 或 Commands](https://github.com/anthropics/skills/issues/556)；
- [Skill 创建器需要从“开发文档”转向面向执行的操作型 Skill](https://github.com/anthropics/skills/issues/202)；
- [Skill 描述应明确“何时使用”，而不仅是“能做什么”](https://github.com/anthropics/skills/issues/2064)；
- [compact-memory：使用符号化表示压缩长期 Agent 状态](https://github.com/anthropics/skills/issues/1329)体现了上下文与持久记忆管理的独立需求。

**趋势判断：** 自动触发率、描述优化、评测可靠性和打包发布工具链，是下一阶段基础设施建设的重点。

### 2.4 文档、办公与多模态内容生产

热门 PR 集中于 DOCX、XLSX、PPTX、Web 测试和排版质量控制；另有 Markdown 转视频/音频需求。社区不再只要求“生成文件”，而是要求：

- 生成结果无修订残留；
- 外部链接和公式风险可审计；
- 字体、孤行、编号等视觉质量达标；
- 内容能直接转换为视频、网页或演示文稿。

### 2.5 垂直专业能力

热点正扩展到传统办公场景之外：

- 智能合约审计与链上证明；
- HPC/SSH/Slurm 集群操作；
- Python 游戏开发与自动验收；
- API 文档排版；
- 代理治理、威胁检测和审计轨迹（参见 [agent-governance 提案](https://github.com/anthropics/skills/issues/412)）。

## 3. 高潜力待合并 Skills

> 下列 PR 仍为 Open，且具备明确使用场景、较成熟实现或已暴露真实社区需求。

| PR / Skill | 潜力判断 | 主要理由 |
|---|---|---|
| [mcp-builder 兼容修复](https://github.com/anthropics/skills/pull/1742) | **很高** | MCP 2.x 已是生态关键接口；修复范围明确，且有对应 Issue，属于基础能力阻塞型问题。 |
| [skill-creator 评测隔离与跨平台修复](https://github.com/anthropics/skills/pull/1298) | **很高** | 同时处理并发串扰、Windows 兼容和运行时误判，直接影响所有 Skill 的触发评测可信度。 |
| [webapp-testing 去除 `shell=True`](https://github.com/anthropics/skills/pull/1980) | **很高** | 属于安全修复，避免命令注入；改动边界清晰，落地价值高。 |
| [docx 超时与修订验证](https://github.com/anthropics/skills/pull/1792) | **高** | 将“命令成功”升级为“产物已验证”，符合文档自动化的质量门趋势。 |
| [XLSX 外部引用风险检测修复](https://github.com/anthropics/skills/pull/2019) | **高** | 面向复杂工作簿的真实审计场景，修复工作表作用域和别名漏检，具有企业使用价值。 |
| [claude-api `pause_turn` 指南更新](https://github.com/anthropics/skills/pull/1950) | **高** | 紧跟 Python SDK 新行为，可避免用户采用已过时的重启方案；文档型 PR 易于维护。 |
| [Skill YAML frontmatter 正确解析](https://github.com/anthropics/skills/pull/1997) | **高** | 修复范围小、收益明确，可消除描述优化和评测中的元数据偏差。 |
| [document-typography](https://github.com/anthropics/skills/pull/514) | **中高** | 解决 AI 生成文档的通用质量问题，适合嵌入文档生成后的自动质检阶段。 |
| [md2video-audio](https://github.com/anthropics/skills/pull/1703) | **中高** | Markdown 到视频/音频的市场需求明确，但落地时还需重点验证依赖、配音质量、渲染稳定性和许可边界。 |
| [ProofCore 合约审计](https://github.com/anthropics/skills/pull/1771) | **中高** | 差异化明显，适合 Web3 垂直场景；合并前应重点审查外部服务依赖、链上成本、隐私和审计声明边界。 |
| [Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525) | **中高** | 提供开发、调试、帧检查和状态验证的完整闭环，垂直但可操作性强。 |
| [SCNet HPC](https://github.com/anthropics/skills/pull/1615) | **中** | 对科研集群用户价值明确，但需要验证环境差异、凭据处理和命令安全性。 |

### 合并优先级建议

- **P0：** 安全漏洞、评测失真、核心接口兼容——`webapp-testing`、`skill-creator`、`mcp-builder`。
- **P1：** 文档/表格产物验证和上下文管理——`docx`、`xlsx`、`claude-api`、YAML 解析。
- **P2：** 新垂直 Skill——`document-typography`、`md2video-audio`、`Pyxel`、`SCNet HPC`。
- **谨慎评估：** 涉及外部区块链或商业服务的 ProofCore，应先明确信任、费用、数据及可用性边界。

## 4. Skills 生态洞察

**当前社区最集中的诉求，是建立一条“来源可信、能够共享、可自动触发、结果可验证”的 Skill 生产与治理流水线。**

换言之，热点已从单纯增加 Skill 数量，转向四个核心问题：**可信分发、组织共享、评测准确、交付验收**；其中 `skill-creator`、MCP 兼容和文档类验证修复，是生态基础设施升级的主要抓手。

---

# Claude Code 社区动态日报

**日期：2026-11-16**

## 1. 今日速览

过去 24 小时没有新版本发布或 Pull Request 更新，动态主要集中在 Issue 反馈。社区关注点集中在 **Desktop 多账号与 GitLab 集成等长期功能诉求**，以及 **Auto Mode 权限误判、远程控制会话状态、插件/Mods 渲染和会话数据安全** 等可靠性问题。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **[功能] Claude Desktop 支持多账号及快速切换**
   - 希望能管理多个 Claude 账号，并方便地在不同个人或工作账号之间切换。
   - 是今日讨论最热烈的 Issue，获得 **245 条评论、1,054 个点赞**，体现出强烈的长期需求。
   - [Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

2. **[功能] 增加 GitLab 集成，包括仓库连接、MR 与移动端访问**
   - 希望补齐与 GitHub 类似的 GitLab 工作流支持。
   - 获得 **61 条评论、155 个点赞**，对使用 GitLab 和自托管基础设施的团队尤其重要。
   - [Issue #12346](https://github.com/anthropics/claude-code/issues/12346)

3. **[缺陷] Windows 重启后 Remote Control 未恢复，移动端会话被归档**
   - 应用静默更新或重启后，已有远程会话无法恢复连接，手机端会显示为已归档。
   - 直接影响桌面端与移动端协同的连续性，已有 **14 条评论**。
   - [Issue #100114](https://github.com/anthropics/claude-code/issues/100114)

4. **[缺陷] Auto Mode 将合法安全任务误判并限制执行**
   - 报告称会话级安全回退机制会误拦截正常的安全分析工作，并已能在 Opus 5 上复现。
   - 对安全研究、漏洞处理和自动化工作流影响较大。
   - [Issue #87938](https://github.com/anthropics/claude-code/issues/87938)

5. **[缺陷] Auto Mode 权限分类器对只读操作产生误报**
   - 用户反馈，在一次合理拦截后，后续无害的只读命令仍可能被持续判定为破坏性操作。
   - 这类误报会破坏自动化任务的稳定性，相关问题已获得 **4 条评论**。
   - [Issue #104811](https://github.com/anthropics/claude-code/issues/104811)

6. **[功能] 在 PermissionDenied Hook 中暴露 Auto Mode 拒绝原因**
   - 当前拒绝原因虽然会显示在界面和 `/permissions` 中，但 Hook payload 缺少结构化原因字段。
   - 对构建审计、自动化处置和自定义权限治理流程具有实际价值。
   - [Issue #72589](https://github.com/anthropics/claude-code/issues/72589)

7. **[缺陷] 未满 30 天的交互式会话记录被删除**
   - 用户报告，在未配置 `cleanupPeriodDays` 时，最近一至三周的 JSONL transcript 仍被清理，且无法再通过 `claude --resume` 恢复。
   - 涉及潜在数据丢失，是今日优先级较高的可靠性问题。
   - [Issue #109897](https://github.com/anthropics/claude-code/issues/109897)

8. **[功能] 用量额度重置或进程重启后恢复后台 Agent 与定时任务**
   - 希望主会话之外的后台 Agent 和 `CronCreate` 任务也能跨额度重置及重启恢复。
   - 对长周期、无人值守自动化任务尤其重要。
   - [Issue #110328](https://github.com/anthropics/claude-code/issues/110328)

9. **[缺陷] Hookify 阻断规则没有向模型说明原因**
   - `PreToolUse` 返回了 `deny`，但缺少 `permissionDecisionReason`，规则消息仅放入 `systemMessage`，模型无法获知具体阻断原因。
   - 这会降低模型自我纠错及自动化流程的可解释性。
   - [Issue #110314](https://github.com/anthropics/claude-code/issues/110314)

10. **[缺陷] macOS Desktop 的 Artifact 工具在更新后消失**
    - Code 标签页会话中仅剩 Claude Docs 工具，疑似升级引起的回归。
    - 影响桌面端代码生成、产物处理和后续预览能力。
    - [Issue #110334](https://github.com/anthropics/claude-code/issues/110334)

## 4. 重要 PR 进展

过去 24 小时内无更新的 Pull Request，暂无可总结的重要 PR 进展。

## 5. 功能需求趋势

- **Desktop 多账号与 Profile 管理**  
  社区希望支持多账号隔离、配置独立化以及快速切换，降低个人与工作场景之间的上下文冲突。  
  [#18435](https://github.com/anthropics/claude-code/issues/18435)

- **代码托管平台集成**  
  GitLab 仓库连接、Merge Request、移动端访问和 GitHub Channel 支持，是扩展 Agent 能力的重要方向。  
  [#12346](https://github.com/anthropics/claude-code/issues/12346) · [#110320](https://github.com/anthropics/claude-code/issues/110320)

- **权限系统可解释性与可控性**  
  社区不仅要求降低误报，还希望 Hook 和 API 能暴露拒绝原因、实际模式及决策链路，使权限治理更适合自动化。  
  [#72589](https://github.com/anthropics/claude-code/issues/72589) · [#104811](https://github.com/anthropics/claude-code/issues/104811) · [#97914](https://github.com/anthropics/claude-code/issues/97914)

- **后台任务的长生命周期与恢复能力**  
  用户希望后台 Agent、定时任务和主会话在额度重置、应用重启后自动恢复，而非被中断。  
  [#110328](https://github.com/anthropics/claude-code/issues/110328)

- **Desktop UI 与开发者工作流优化**  
  包括窗口焦点快捷键、项目标题层级区分、浏览器面板控制和 Agent 状态命名等，反映出 Desktop 正从“终端替代品”转向完整 IDE。  
  [#89910](https://github.com/anthropics/claude-code/issues/89910) · [#102631](https://github.com/anthropics/claude-code/issues/102631) · [#99214](https://github.com/anthropics/claude-code/issues/99214) · [#110320](https://github.com/anthropics/claude-code/issues/110320)

- **配置与插件管理体验**  
  用户希望减少项目目录中的 `.claude/` 配置污染，并让 `/reload-plugins` 正确重载 `--settings` 文件。  
  [#110307](https://github.com/anthropics/claude-code/issues/110307) · [#110335](https://github.com/anthropics/claude-code/issues/110335)

- **会话数据生命周期与安全**  
  除 transcript 清理策略外，开发者也关注密钥被频繁带入对话、模型安全过滤误判等数据保护问题。  
  [#109897](https://github.com/anthropics/claude-code/issues/109897) · [#105608](https://github.com/anthropics/claude-code/issues/105608) · [#103415](https://github.com/anthropics/claude-code/issues/103415)

## 6. 开发者关注点

- **权限误报是当前最突出的工程痛点**：无害只读命令被阻断，且一次拒绝可能污染后续整个任务的判断，增加自动化运行的不确定性。
- **远程控制的状态一致性需要加强**：Windows 重启后连接未恢复、移动端会话归档，以及 Project 的 `defaultMode` 被忽略，均说明远程会话生命周期仍不稳定。  
  [#100114](https://github.com/anthropics/claude-code/issues/100114) · [#102341](https://github.com/anthropics/claude-code/issues/102341) · [#93445](https://github.com/anthropics/claude-code/issues/93445)
- **Desktop 与插件生态进入快速迭代期**：Mods 背景不渲染、Spinner 被默认组件覆盖、动画内存增长后冻结等问题，反映出扩展机制与主渲染层的兼容压力。  
  [#109853](https://github.com/anthropics/claude-code/issues/109853) · [#110333](https://github.com/anthropics/claude-code/issues/110333) · [#110325](https://github.com/anthropics/claude-code/issues/110325)
- **工具调用还存在边缘解析问题**：包括 Bash stdin 重定向判断、非 ASCII 字符串转义及终端 DA1 查询等待，可能造成执行阻塞或历史记录不一致。  
  [#101127](https://github.com/anthropics/claude-code/issues/101127) · [#109775](https://github.com/anthropics/claude-code/issues/109775) · [#109546](https://github.com/anthropics/claude-code/issues/109546)
- **安全机制需要兼顾准确性与透明度**：合法安全分析、普通外语消息以及含入站邮件头字段的本地脚本都出现误拦截，社区期待更精细的上下文判断和可审计原因。
- **会话恢复与持久化不可靠**：用量限制、重启和 `/branch` 都可能影响后台任务或记录关联；数据清理问题则直接威胁可恢复性。  
  [#110328](https://github.com/anthropics/claude-code/issues/110328) · [#93445](https://github.com/anthropics/claude-code/issues/93445) · [#109897](https://github.com/anthropics/claude-code/issues/109897)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-16**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

过去 24 小时发布 **rust-v0.171.0-alpha.6 / alpha.7** 两个预发布版本，社区重点集中在 **Windows 桌面端稳定性、MCP/远程连接、权限与沙箱边界，以及会话和项目状态丢失**。  
当天更新的 26 个 PR 集中改善了 **远程 app-server、线程列表性能、TUI 稳定性、Windows 兼容性和 Unicode 渲染**；与此同时，多起安全检查误拦截和策略原因不透明问题成为高热度反馈。

---

## 2. 版本发布

### `rust-v0.171.0-alpha.7`
- 今日最新 Rust 预发布版本。
- 相比同日内发布的 alpha.6 更新更近，但公开 Release 信息未提供详细变更日志。
- 建议 CLI/App 开发者关注 alpha.6 至 alpha.7 之间的回归变化。

链接：[rust-v0.171.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.7)

### `rust-v0.171.0-alpha.6`
- 今日第二个 Rust 预发布版本，标记为 `0.171.0-alpha.6`。
- 尚无公开的逐项更新说明；结合当日 PR 方向，可能涉及 app-server、远程执行、线程索引及 TUI 修复。

链接：[rust-v0.171.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.6)

---

## 3. 社区热点 Issues

### 1. Windows MCP HTTP 响应无法解码，连接器整体不可用
- Windows 用户的 MCP HTTP 响应出现 `error decoding response body`，直接导致 App Connectors 无法工作。
- 涉及 CLI、桌面 App、MCP、网络连接多个核心环节，影响范围大。
- 15 条评论，为本时段讨论最充分的 Issue。

链接：[#48504](https://github.com/openai/codex/issues/48504)

### 2. Codex Pet 悬浮窗遮挡全部窗口且无法交互
- macOS Pet overlay 始终位于所有窗口上方，却忽略鼠标输入，也无法移动或隐藏。
- 这是明显的桌面端 UI 与窗口层级问题，直接破坏正常使用流程。
- 11 条评论，讨论热度较高。

链接：[#45397](https://github.com/openai/codex/issues/45397)

### 3. Pet 在运行、等待和审查状态下错误回落到 idle
- App 实际处于运行、等待审批或 review 状态时，Pet 动画仍显示 idle。
- 问题不只是视觉错误，也会削弱用户对任务状态的判断。
- 获 10 个点赞、10 条评论，是今日较受认可的体验类问题。

链接：[#28995](https://github.com/openai/codex/issues/28995)

### 4. 淘宝只读商品采集被安全策略提前拦截
- 即使已设置 “Always allow”，Browser Use 仍可能在审批前阻止淘宝只读搜索。
- 反映站点安全分类、用户授权与任务实际行为之间存在不一致。
- 8 条评论，开发者重点关注安全策略能否提供申诉和恢复路径。

链接：[#53349](https://github.com/openai/codex/issues/53349)

### 5. Windows 仅返回“blocked by policy”，没有可操作原因
- 本地隔离测试、诊断和清理请求均被策略阻止，但界面未说明具体规则。
- 缺乏可解释性使开发者无法判断应调整沙箱、权限还是命令写法。
- 6 条评论，属于高影响的权限与可诊断性问题。

链接：[#57623](https://github.com/openai/codex/issues/57623)

### 6. macOS 桌面端反复卡在 Reconnecting，并出现 ENOENT unlink
- Work 与 Codex Local 均出现重连失败，启动阶段伴随 `ENOENT unlink`。
- 影响本地任务和远程会话的可靠性。
- 6 条评论，可能与本地状态清理、锁文件或连接初始化逻辑相关。

链接：[#58293](https://github.com/openai/codex/issues/58293)

### 7. Windows 长连接 WebSocket 忽略系统代理与 HTTP_PROXY
- Desktop 的 long-lived host WebSocket 疑似使用硬编码 URL，且未遵循系统代理。
- 对代理、零信任网络及企业环境尤其不友好，也会放大重连问题。
- 6 条评论，属于远程连接基础设施的重要反馈。

链接：[#55557](https://github.com/openai/codex/issues/55557)

### 8. Windows Desktop 漏掉附加项目目录的可写根路径
- 主项目之外的 secondary project folders 没有被加入 writable roots。
- 结果是跨项目修改被沙箱限制，属于多项目工作流的核心权限问题。
- 5 条评论、1 个点赞。

链接：[#60812](https://github.com/openai/codex/issues/60812)

### 9. 更新后 Windows 本地项目消失，但已有聊天仍可访问
- Windows 26.1111 更新后，本地项目列表丢失，而历史会话仍能打开。
- 暗示本地项目索引、迁移或会话元数据存在不一致，可能有恢复风险。
- 5 条评论。

链接：[#61294](https://github.com/openai/codex/issues/61294)

### 10. macOS 内置浏览器控制超时，提示无 ChatGPT browser route
- 内置浏览器标签页控制失败，报 `No ChatGPT browser route`。
- 影响 Browser Use、网页操作及依赖内置浏览器的代理任务。
- 5 条评论。

链接：[#59663](https://github.com/openai/codex/issues/59663)

---

## 4. 重要 PR 进展

> 以下 PR 均在今日列表中显示为 **CLOSED**；公开数据未显示是否已合并，以下仅总结其改动意图与解决的问题。

### 1. 支持 `codex exec` 连接远程 app-server
- 新增 `codex exec --remote <ADDR>`，可复用远程 app-server 的配置和凭证执行非交互任务。
- 支持新建或按 UUID 恢复线程，并提供可读输出、JSON 输出和可选 Bearer Token。

链接：[#61707](https://github.com/openai/codex/pull/61707)

### 2. `exec` 重构为统一使用共享 app-server 客户端
- 将 `exec` 执行链路统一到 `AppServerClient`，并提取 `finish_turn`。
- 集中处理服务器断开、线程流断开、远程地址解析和认证令牌解析，降低执行路径分叉。

链接：[#61706](https://github.com/openai/codex/pull/61706)

### 3. 优化默认及附加线程列表查询
- 为默认线程列表和 attached-thread 列表增加针对性索引。
- 避免扫描 subagent 线程，并改善归档、父线程和 planner 统计条件下的查询效率。

链接：[#61727](https://github.com/openai/codex/pull/61727)

### 4. 修复线程列表迁移版本号冲突
- 修正 thread listing index migration 与 session model IDs migration 共用 `0063` 的问题。
- 同时补齐 sidebar query-plan 测试所需的 `included_thread_ids` 字段。

链接：[#61730](https://github.com/openai/codex/pull/61730)

### 5. 云端保留 agent 消息 phase
- 云端 agent 消息转换到 app-server thread item 时保留 phase。
- 消费者可区分 commentary、final answer 和 partial answer，解决消息类型信息丢失。

链接：[#61737](https://github.com/openai/codex/pull/61737)

### 6. TUI 为云端线程增加云图标
- 在恢复、fork、agents 概览、任务详情、侧边聊天、状态栏和终端标题中标记云端线程。
- 便于用户区分本地与云端会话，且不会把标记混入线程名称。

链接：[#61742](https://github.com/openai/codex/pull/61742)

### 7. 修复 TUI 双向文本标题在 shimmer 下不稳定
- 逐 grapheme 更新颜色可能破坏原生终端的双向文本渲染。
- 对包含强 RTL 字符或阿拉伯数字的内容改为静态、整体变暗渲染。

链接：[#61731](https://github.com/openai/codex/pull/61731)

### 8. 修复历史搜索与 mention 搜索中的 Unicode 高亮
- 历史搜索和 mention 搜索不再按 Unicode scalar 拆分匹配，而是保留完整 grapheme cluster。
- 可修复组合字符及多码位 Emoji 被截断或高亮错位的问题。

链接：[#61725](https://github.com/openai/codex/pull/61725)、[#61726](https://github.com/openai/codex/pull/61726)

### 9. Windows 桌面会话改用已注册 URL Handler
- 不再直接解析并启动打包后的可执行文件，而是通过 PowerShell `Start-Process` 打开桌面会话 URL。
- 同时限制包校验到受支持的 publisher ID，改进 Windows 应用跳转可靠性与安全性。

链接：[#61711](https://github.com/openai/codex/pull/61711)

### 10. 改进 shell 专属的 `exec_command` 登录说明
- 修正原文档将固定默认值和 Unix shell 行为泛化到所有 shell 的问题。
- 明确 PowerShell 禁用 login startup 会跳过 profile，进而影响 profile 中定义的命令。

链接：[#61744](https://github.com/openai/codex/pull/61744)

---

## 5. 功能需求趋势

### 1. MCP 与远程 Agent 基础设施
社区高度关注 MCP OAuth、HTTP 响应解码、工具注册到线程的传递，以及远程 app-server。相关诉求已从“能否连接”延伸到：

- OAuth challenge 元数据兼容
- MCP 工具稳定出现在具体线程中
- 代理和零信任网络支持
- 远程 app-server 可用于 CLI 非交互执行
- MCP/Agent 向既有桌面会话发送消息并返回类型化结果

代表需求：[#47756](https://github.com/openai/codex/issues/47756)、[#61723](https://github.com/openai/codex/issues/61723)、[#61734](https://github.com/openai/codex/issues/61734)

### 2. Windows 桌面端可靠性与状态一致性
Windows 是今日最集中的问题平台，涉及项目目录、认证、会话、代理、终端弹出、安全策略和 Computer Use。核心需求是：

- 更新后项目与会话索引不能丢失
- 附加目录应正确加入可写根路径
- 系统代理应被长连接采用
- 账户加载失败提供 CLI 或其他可操作恢复方式
- CLI 正常使用时不应反复弹出终端窗口

代表问题：[#60812](https://github.com/openai/codex/issues/60812)、[#61294](https://github.com/openai/codex/issues/61294)、[#60311](https://github.com/openai/codex/issues/60311)、[#61749](https://github.com/openai/codex/issues/61749)

### 3. 权限、沙箱与安全检查的可解释性
用户并不只是要求“放宽安全限制”，而是要求提供精确原因、窄范围授权和可恢复路径：

- “Always allow” 应与只读 Browser Use 工作流一致
- `blocked by policy` 应说明命中了哪项策略
- 定时任务应有受支持的窄权限配置
- Computer Use 完成后应清理捕获边框等系统状态

代表问题：[#53349](https://github.com/openai/codex/issues/53349)、[#57623](https://github.com/openai/codex/issues/57623)、[#58687](https://github.com/openai/codex/issues/58687)、[#61754](https://github.com/openai/codex/issues/61754)

### 4. Browser Use 与应用内浏览器
内置浏览器路由失败、后台聊天缺少 browser owner，以及远程会话 PDF 刷新问题，体现出浏览器控制生命周期仍不稳定。社区期待：

- 后台任务和恢复的 subagent 自动重建浏览器连接
- 更明确的 browser route 诊断信息
- Remote Control 与本地会话行为一致
- 预览内容自动刷新

代表问题：[#59663](https://github.com/openai/codex/issues/59663)、[#58535](https://github.com/openai/codex/issues/58535)、[#61586](https://github.com/openai/codex/issues/61586)

### 5. 会话管理、远程控制与跨端同步
社区持续要求改善 iOS/Windows 联动、会话解锁、云端标识与远程 PDF 预览。方向包括：

- iOS 关闭后正确释放桌面端远程会话锁
- 明确区分本地、云端、远程及附加线程
- 改善项目分组操作，如 “Collapse all”
- 支持远程线程恢复和更稳定的跨端状态同步

代表问题：[#51429](https://github.com/openai/codex/issues/51429)、[#34452](https://github.com/openai/codex/issues/34452)

### 6. 可观测性与隐私保护
用户希望获得更多问题定位信息，但又不希望泄露敏感参数。新需求提出对 `collaboration.spawn_agent` 参数提供隐私保护的 attestation，体现“可诊断但最小披露”的趋势。

代表需求：[#36494](https://github.com/openai/codex/issues/36494)

---

## 6. 开发者关注点

1. **错误信息必须可操作**：大量反馈并非只要求解除拦截，而是要求说明具体策略、失败阶段、依赖版本和修复路径。  
   代表：[#57623](https://github.com/openai/codex/issues/57623)

2. **升级不能造成项目或会话丢失**：Windows 更新后项目消失、附加目录失去写权限，说明数据库迁移和 writable-root 重建需要更严格的升级回归测试。  
   代表：[#61294](https://github.com/openai/codex/issues/61294)、[#60812](https://github.com/openai/codex/issues/60812)

3. **代理与远程网络必须是一等能力**：系统代理、`HTTP_PROXY`、OAuth 和长连接 WebSocket 的组合问题，是企业开发环境落地 Codex 的主要阻力。  
   代表：[#55557](https://github.com/openai/codex/issues/55557)、[#47756](https://github.com/openai/codex/issues/47756)

4. **MCP “已连接”不等于“工具可用”**：CLI 中能列出服务器，不代表 OAuth 工具一定能进入桌面线程；需要端到端验证发现、授权、注册和调用链路。  
   代表：[#61723](https://github.com/openai/codex/issues/61723)

5. **任务状态必须与真实执行一致**：Pet idle 状态、重连循环和会话锁定都降低了用户对自动化任务可靠性的判断。  
   代表：[#28995](https://github.com/openai/codex/issues/28995)、[#58293](https://github.com/openai/codex/issues/58293)、[#51429](https://github.com/openai/codex/issues/51429)

6. **线程列表与远程执行性能值得持续优化**：当天多项 PR 指向线程查询索引、旧 transcript 重放和共享 app-server 客户端，说明会话规模增长后的性能问题已成为开发重点。  
   代表：[#61727](https://github.com/openai/codex/pull/61727)、[#61709](https://github.com/openai/codex/pull/61709)、[#61707](https://github.com/openai/codex/pull/61707)

7. **Unicode 与国际终端支持仍是高频细节问题**：双向文本、组合字符、Emoji、宽字符截断连续出现修复，适合纳入 TUI 国际化测试矩阵。  
   代表：[#61731](https://github.com/openai/codex/pull/61731)、[#61725](https://github.com/openai/codex/pull/61725)、[#61692](https://github.com/openai/codex/pull/61692)

**总体判断：** 今日社区信号显示，Codex 的功能面继续向桌面端、Browser Use、MCP、子代理和远程执行扩展，但当前用户信任主要受 Windows 更新回归、权限不透明、连接生命周期及状态同步影响。对开发团队而言，最优先的改进应聚焦于**可诊断性、升级安全、远程连接可靠性和端到端 MCP 验证**。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-16**  
**项目：** [`google-gemini/gemini-cli`](https://github.com/google-gemini/gemini-cli)

## 1. 今日速览

- 过去 24 小时无新版本发布；社区讨论明显集中在 **Agent/Subagent 的可靠性、配置继承、安全执行与可观测性**，尤其是子代理达到 `MAX_TURNS` 后被误报为 `GOAL success` 的问题。
- PR 侧主要推进 **子代理终止状态修复、Windows 路径与 Shell 兼容、请求超时配置、CI 密钥隔离**，同时有多个依赖升级和 nightly 版本机器人 PR 仍待清理。

## 3. 社区热点 Issues

1. **命令替换限制应支持用户配置**  
   提议在 `settings.json` 增加 `allowCommandSubstitution`，允许用户关闭硬编码的命令替换拦截；YOLO 模式下则应默认启用或明确警告。该 Issue 获得本期最多讨论（32 条评论），反映用户对“安全策略可否配置”的强烈需求。  
   [#27393](https://github.com/google-gemini/gemini-cli/issues/27393)

2. **子代理达到 `MAX_TURNS` 后被误报为成功**  
   `codebase_investigator` 实际因轮次耗尽而中断，却被标记为 `status: success`、`Termination Reason: GOAL`，会掩盖真实失败状态。属于 P1，已有针对性修复 PR。  
   [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3. **Generalist Agent 陷入无限等待**  
   Gemini CLI 委派任务给 generalist agent 后可能长期挂起，包括创建文件夹等简单操作；显式禁止使用子代理后可规避。Issue 有 8 个点赞，是当前较受用户认可的稳定性痛点。  
   [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

4. **Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等覆盖项**  
   浏览器代理虽然初始化时由 `AgentRegistry` 读取并合并设置，但运行时仍可能忽略全局或项目级覆盖，导致配置与实际行为不一致。  
   [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

5. **Browser Agent 在 Wayland 环境下失败**  
   浏览器子代理在 Wayland 会话中报错并终止，直接影响桌面 Linux 环境下的自动化能力。当前仍标记为需要复测。  
   [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

6. **工具数量过多触发 API 400 错误**  
   当可用工具超过一定规模时，Gemini CLI 遭遇 400 错误。社区希望系统能按任务动态裁剪工具范围，而非将全部工具一次性暴露给模型。  
   [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

7. **模型频繁在随机目录创建临时脚本**  
   当部分 Shell 能力被禁用后，模型倾向于在多个目录生成编辑脚本，增加工作区清理和提交噪声。开发者希望临时产物集中、可追踪且自动回收。  
   [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

8. **Agent 缺少对破坏性操作的约束**  
   模型在复杂 Git 或资源维护任务中偶尔使用 `git reset --force` 等高风险命令，而更安全的替代方案本可使用。需要建立更明确的操作分级和安全护栏。  
   [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9. **AST 感知的文件读取、搜索与代码库映射**  
   该 EPIC 评估 AST 工具能否更精确地读取函数边界、减少无效轮次与 token 噪声，并探索用 `tilth`、`glyph` 等工具改善代码库理解。  
   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)

10. **自定义 Skills 与 Subagents 未被主动调用**  
    用户反馈，Gemini 即使面对明显相关的任务，也很少主动使用已配置的 Gradle、Git 等技能或子代理，除非用户明确提示，反映 Agent 路由与自主动态仍有不足。  
    [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

## 4. 重要 PR 进展

1. **保留子代理原始终止原因，避免误报 `GOAL success`**  
   修复 `LocalAgentExecutor` 在恢复流程中无条件覆盖 `terminateReason` 的问题，直接对应 #22323，防止轮次耗尽被隐藏。  
   [#29367](https://github.com/google-gemini/gemini-cli/pull/29367)

2. **Node 26 下正确应用请求超时配置**  
   将核心 Undici 升级至 7.30.2，使全局 dispatcher 能在 Node 26 内置 `fetch` 下正确发布，并补充 Node 26 与旧 dispatcher 符号的回归测试。  
   [#30281](https://github.com/google-gemini/gemini-cli/pull/30281)

3. **准确描述 Windows 实际选中的 Shell**  
   当选择 PowerShell 5.1 时，模型侧工具说明不再错误宣称固定使用 `powershell.exe -NoProfile -Command`，并补充原生参数的双引号行为说明。  
   [#30312](https://github.com/google-gemini/gemini-cli/pull/30312)

4. **新增 `model.requestTimeoutMs` 请求头超时配置**  
   将 API headers timeout 从实验性常量提升为正式设置，尤其解决 Vertex AI/API Key 认证下无法调整长思考请求超时的限制；该 PR 当前已关闭。  
   [#30082](https://github.com/google-gemini/gemini-cli/pull/30082)

5. **隔离 chained E2E 中的 `GEMINI_API_KEY`**  
   防止基仓 `workflow_run` 执行由 PR 控制的代码时暴露 API 密钥，并依据触发工作流状态对 artifact 与密钥进行门控；该 PR 当前已关闭。  
   [#30090](https://github.com/google-gemini/gemini-cli/pull/30090)

6. **Windows 正确展开 `~\` 家目录路径**  
   `resolvePath` 现可正确处理 Windows 的 `~\...` 形式，使 `policyPaths`、`adminPolicyPaths`、`includeDirectories` 和 `extensionRegistryURI` 指向用户主目录，而非字面量相对路径。  
   [#30308](https://github.com/google-gemini/gemini-cli/pull/30308)

7. **扫描时跳过被并发删除的子目录**  
   避免工作区扫描期间目录恰好消失而产生 `ENOENT` 警告，典型触发点是项目注册表锁文件。  
   [#30306](https://github.com/google-gemini/gemini-cli/pull/30306)

8. **后台进程被信号终止时不再显示空退出码**  
   `list_background_processes` 不再向模型展示 `(Exit Code: null)`，仅在确实存在退出码时输出，减少误导。  
   [#30307](https://github.com/google-gemini/gemini-cli/pull/30307)

9. **从 CLI 可执行文件路径识别本地 Git 安装**  
   修复从源码检出目录之外启动时，被误判为全局 npm 安装并意外触发后台 `npm install -g @google/gemini-cli@latest` 的问题。  
   [#30267](https://github.com/google-gemini/gemini-cli/pull/30267)

10. **修正扩展文档中无效的 `excludeTools` 示例**  
    当前文档推荐的形式无法匹配实际工具全名，因此文档所承诺的 `run_shell_command(rm -rf)` 限制实际上不生效；PR 正在调整相关建议。  
    [#30305](https://github.com/google-gemini/gemini-cli/pull/30305)

> 补充：依赖侧另有一次覆盖 70 个包的 npm 依赖组升级 [#30089](https://github.com/google-gemini/gemini-cli/pull/30089)，以及 `qs` 升级 [#29168](https://github.com/google-gemini/gemini-cli/pull/29168)；这些变更规模较大，合并前需关注回归测试与兼容性。

## 5. 功能需求趋势

### 1. Agent 与 Subagent 能力成为绝对主线

本期 30 个热门 Issue 中，绝大多数属于 `area/agent`。核心诉求包括：

- 正确呈现子代理的成功、失败、取消和轮次耗尽状态；
- 提升 generalist、browser、codebase investigator 等代理的稳定性；
- 让 Agent 主动选择 Skills、Subagents 和专用工作流；
- 支持共享内存与并行子代理协作；
- 让 `/chat share` 和 `/bug` 暴露子代理轨迹，便于评测与排障。

相关 Issues：  
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) · [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) · [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)

### 2. 工具选择与上下文效率

社区希望减少“工具全量暴露”和“大文件全文读取”：

- 根据任务动态筛选工具，避免 API 400；
- 引入 AST 感知读取和代码库映射；
- 采用分层、精确的代码发现策略，减少上下文膨胀；
- 使用持久化文件任务列表，替代完全依赖对话上下文的任务跟踪。

相关 Issues：  
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) · [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)

### 3. 安全执行与可控策略

需求从单纯“禁止危险操作”转向更细粒度的策略系统：

- 命令替换限制可配置；
- Shell 执行增加零依赖 OS 沙箱与执行后意图路由；
- 识别和阻止 `git reset`、强制覆盖等破坏性行为；
- 支持工作区级策略，而非仅依赖全局策略。

相关 Issues：  
[#27393](https://github.com/google-gemini/gemini-cli/issues/27393) · [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) · [#18397](https://github.com/google-gemini/gemini-cli/issues/18397)

### 4. 跨平台与配置一致性

Windows Shell、路径、浏览器环境以及各 Agent 对 `settings.json` 的继承差异，仍是高频问题。开发者希望全局、项目级和 Agent 级配置具有一致、可预测的语义。

相关 Issues/PR：  
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · [#30312](https://github.com/google-gemini/gemini-cli/pull/30312) · [#30308](https://github.com/google-gemini/gemini-cli/pull/30308)

### 5. 可评测性与可观测性

社区越来越关注“如何证明 Agent 做了正确的事”，包括子代理轨迹分享、bug 报告上下文、内部评测稳定化以及行为回归测试。

相关 Issues：  
[#22598](https://github.com/google-gemini/gemini-cli/issues/22598) · [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) · [#23166](https://github.com/google-gemini/gemini-cli/issues/23166) · [#23313](https://github.com/google-gemini/gemini-cli/issues/23313)

## 6. 开发者关注点

- **状态不能“看起来成功”**：Agent 即使中途失败，也必须向用户和模型准确呈现终止原因；`MAX_TURNS` 被掩盖是最受关注的实例。
- **子代理路由不够主动**：已有 Skills 和专业代理往往需要用户显式点名，模型没有形成稳定的自动委派策略。
- **工具太多、上下文太重**：大量工具会导致 API 请求失败，而大段文件读取和临时脚本会显著增加 token、轮次与清理成本。
- **安全策略应透明且可配置**：用户既需要沙箱与破坏性操作拦截，也不希望不可调整的硬编码限制阻碍正常工作流。
- **配置行为不一致**：`settings.json` 在不同 Agent、平台和路径形式下可能表现不同，尤其影响 `maxTurns`、超时、目录与扩展配置。
- **跨平台体验仍有缺口**：Windows Shell/路径和 Linux Wayland 浏览器代理问题均直接影响自动化脚本与真实项目使用。
- **评测与排障信息不足**：子代理轨迹、失败上下文和稳定的行为评测仍是判断 Agent 质量的主要障碍。
- **自动化流程可能误触**：创建 Vite 应用时卡在交互提示，以及本地源码安装被误判为全局安装，均说明非交互执行与安装识别仍需加强。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-16**

## 1. 今日速览

过去 24 小时无新版本发布，也无更新的 Pull Request；社区讨论主要集中在 **MCP 协议兼容与 OAuth、Agent/子代理执行可靠性、会话状态管理以及终端交互体验**。其中，多个 Issue 指向同一类可靠性问题：MCP 新旧协议协商、超时回退和客户端注册信息不一致，可能导致连接直接失败；此外，多会话并发写配置、后台 Agent 卡死和长会话恢复异常也值得优先关注。

## 2. 版本发布

过去 24 小时没有新 Release。现有 Issue 中涉及的主要版本包括 `1.0.83`、`1.0.84-5`、`1.0.85` 和 `1.0.86`，另有用户报告 `copilot --acp 1.0.112` 的模型元数据需求。

## 3. 社区热点 Issues

### 1. Desktop App 会话数分钟后失效，GitHub 凭据注册不可用导致 MCP 目录失效

- **Issue：** [#4905](https://github.com/github/copilot-cli/issues/4905)
- 涉及 Desktop App `1.1.22` 与内置 CLI `1.0.84-5`。
- 登录凭据仍被 `gh auth status` 判定有效，但 Copilot 会话随后失去 GitHub 凭据注册能力，继而导致 `github-mcp-server` 目录不可用。
- 这是 **7 条评论、4 个点赞**，是今日讨论最充分的 Issue。
- 重要性在于问题横跨认证、会话生命周期和 MCP，说明“认证有效”与“应用内注册状态有效”之间可能存在状态同步缺口。

### 2. 子代理工作流延迟高，审查—修复循环开销过大

- **Issue：** [#4849](https://github.com/github/copilot-cli/issues/4849)
- 社区认为 Agent 启动、任务交接以及反复审查/修复/再审查，可能让中小型代码修改也被拖慢到分钟级。
- 获得 **6 条评论**，是该 Issue 类别下最活跃的需求之一。
- 这直接关系到 CLI 作为自动化开发工具时的吞吐量和成本，是比单纯模型速度更上层的编排效率问题。

### 3. 自动托管策略刷新会破坏 IDE MCP 重载并禁用 `/allow-all`

- **Issue：** [#4847](https://github.com/github/copilot-cli/issues/4847)
- 长时间运行的 VS Code CLI 会话在托管策略刷新时，重载 IDE 动态提供的 MCP 服务失败。
- 后果不仅是 MCP 暂时不可用，还包括 `/allow-all` 等权限控制能力被禁用。
- 获得 **4 条评论和4 个点赞**，涉及企业策略、IDE 集成和权限安全边界。

### 4. Atlassian MCP OAuth 因回调地址未注册而失败

- **Issue：** [#4901](https://github.com/github/copilot-cli/issues/4901)
- Atlassian v2 OAuth 端点返回 `unauthorized_client: redirect_uri is not registered`。
- 问题在 `1.0.86` 中仍可观察，并被认为与历史 OAuth 问题有关。
- **3 条评论**表明 MCP 身份认证仍是社区高频阻力，尤其影响 Atlassian 等企业服务集成。

### 5. MCP 发现成功后仍发送旧版 `initialize`，导致协议被拒绝

- **Issue：** [#4888](https://github.com/github/copilot-cli/issues/4888)
- CLI 在同一 stdio 连接上先成功执行 `2026-07-28` 的 `server/discover`，随后又发送旧版 `2025-11-25` `initialize`。
- 支持双协议版本的 MCP 服务会锁定到现代协议，并拒绝后续旧请求。
- 获得 **3 条评论**；该问题说明客户端的协议协商与回退逻辑仍不够严格。

### 6. BYOK + DeepSeek 因自定义工具类型无法反序列化而失败

- **Issue：** [#4840](https://github.com/github/copilot-cli/issues/4840)
- 使用自定义 `COPILOT_PROVIDER_BASE_URL` 和 BYOK 时，DeepSeek 请求返回 `400`，原因是 `tools[4].type` 为 `custom`，而目标类型只接受 `function`。
- 获得 **3 条评论、1 个点赞**。
- 这是模型协议适配问题，会直接影响第三方模型、自定义工具调用和私有 Provider 的兼容性。

### 7. Headless 模式中 `skill` 工具间歇性不可用

- **Issue：** [#4838](https://github.com/github/copilot-cli/issues/4838)
- 在 `copilot -p` 模式下，同一次请求的 `<available_skills>` 已列出目标 Skill，但调用时却报错：`No model-invocable skills available`。
- 获得 **3 条评论**。
- 该问题影响自动化 CI、批处理及非交互式 Agent 工作流，间歇性特征也增加了排障难度。

### 8. 企业策略启用插件后仍记录为 `enabled: false`

- **Issue：** [#4837](https://github.com/github/copilot-cli/issues/4837)
- 策略或配置中的 `enabledPlugins` 会把插件安装到磁盘，但 `~/.copilot/config.json` 中仍保存 `"enabled": false`。
- 插件技能无法激活，后续启动也不会自动纠正。
- 获得 **3 条评论、2 个点赞**，表明企业部署与插件生命周期管理存在明显不一致。

### 9. Windows 上 `copilot.exe` 发生访问冲突并损坏终端状态

- **Issue：** [#4891](https://github.com/github/copilot-cli/issues/4891)
- Windows 正常操作中触发 `0xc0000005` 硬崩溃，清理流程未执行，造成当前回合丢失，并留下不完整的模型调用记录。
- 当日新增 **1 条评论**，但问题会导致会话数据与终端状态损坏，严重性较高。

### 10. 后台子代理在工具活动停止后仍可无限运行

- **Issue：** [#4850](https://github.com/github/copilot-cli/issues/4850)
- 后台审查子代理在完成 100 次工具调用、没有完成任何 turn 后，状态仍持续显示运行超过 15 分钟。
- 父会话收不到结果，也无法有效控制该进程。
- 获得 **2 条评论**；与 #4849 共同表明 Agent 生命周期管理是当前重点议题。

## 4. 重要 PR 进展

过去 24 小时内 **没有更新中的 Pull Request**，因此无 PR 功能或修复进展可汇总。

## 5. 功能需求趋势

### MCP 成为首要集成方向

相关 Issues 密集覆盖：

- 新旧 MCP 协议协商与超时回退：[#5464](https://github.com/github/copilot-cli/issues/5464)、[#4888](https://github.com/github/copilot-cli/issues/4888)
- OAuth 回调及动态客户端注册：[#4901](https://github.com/github/copilot-cli/issues/4901)、[#4906](https://github.com/github/copilot-cli/issues/4906)
- IDE MCP 动态重载：[#4847](https://github.com/github/copilot-cli/issues/4847)
- MCP 服务重复枚举与资源占用：[#4892](https://github.com/github/copilot-cli/issues/4892)
- 桌面端认证状态导致 MCP 目录失效：[#4905](https://github.com/github/copilot-cli/issues/4905)

社区核心诉求是：**协议兼容正确、OAuth 可预测、IDE 重载稳定、认证状态一致**。

### Agent 编排与执行效率

- 降低子代理启动、交接和审查循环的延迟：[#4849](https://github.com/github/copilot-cli/issues/4849)
- 为后台 Agent 增加超时、终止和结果回收机制：[#4850](https://github.com/github/copilot-cli/issues/4850)
- 改善子会话状态、标题和 transcript 的准确性：[#4904](https://github.com/github/copilot-cli/issues/4904)
- 修复自定义 Agent 的 Plan 面板空白：[#4841](https://github.com/github/copilot-cli/issues/4841)

总体方向是从“能调用 Agent”转向 **可观测、可中止、可并行且低延迟**。

### 会话管理与多项目工作流

- 支持跨文件夹查看、排序和分组活跃会话：[#5463](https://github.com/github/copilot-cli/issues/5463)
- 修复分支切换导致大量旧会话被顶到侧栏顶部：[#4903](https://github.com/github/copilot-cli/issues/4903)
- 修复长会话恢复时滚动位置异常：[#4894](https://github.com/github/copilot-cli/issues/4894)
- 支持移动端和 Web 端远程控制：[#5468](https://github.com/github/copilot-cli/issues/5468)

社区希望 CLI 更接近一个 **跨仓库、跨设备、可持续工作的会话控制台**。

### 插件与 Skills 可发现性

- `--plugin-dir` 加载的 Skill 未出现在 `/skills` 和 `/env`：[#4886](https://github.com/github/copilot-cli/issues/4886)
- Headless 模式无法稳定调用已发现的 Skill：[#4838](https://github.com/github/copilot-cli/issues/4838)
- 策略启用插件后状态仍为禁用：[#4837](https://github.com/github/copilot-cli/issues/4837)

核心需求是保证插件和 Skill 在 **发现、启用、展示、调用、持久化** 各阶段状态一致。

### 模型与上下文控制

- BYOK 兼容 DeepSeek 和自定义工具调用：[#4840](https://github.com/github/copilot-cli/issues/4840)
- 允许显式选择上下文窗口层级：[#4898](https://github.com/github/copilot-cli/issues/4898)
- ACP 模型配置暴露上下文限制和分层 token 价格：[#5466](https://github.com/github/copilot-cli/issues/5466)

用户希望获得更精细的 **模型选择、成本透明度和上下文容量控制**。

### 权限、策略与配置安全

- 并发会话退出时覆盖 `config.json`，导致 `trustedFolders` 等托管状态丢失：[#4900](https://github.com/github/copilot-cli/issues/4900)
- 托管设置刷新影响 MCP 和 `/allow-all`：[#4847](https://github.com/github/copilot-cli/issues/4847)
- 插件启用状态与企业策略不一致：[#4837](https://github.com/github/copilot-cli/issues/4837)

这是企业环境中尤其敏感的方向，核心要求是 **原子更新、状态合并和策略一致性**。

### 终端体验与可访问性

- 终端链接难以点击：[#4893](https://github.com/github/copilot-cli/issues/4893)
- 希望增加 Dracula、Nord、Solarized 等主题及高对比度主题：[#5465](https://github.com/github/copilot-cli/issues/5465)
- 希望隐藏 “Discover Copilot Fusion” 推广提示：[#5469](https://github.com/github/copilot-cli/issues/5469)

这些需求虽然不如 MCP 和 Agent 紧急，但直接影响高频交互体验。

## 6. 开发者关注点

1. **稳定性高于新功能**：会话崩溃、后台 Agent 卡死、配置覆盖、MCP 断连等问题直接影响自动化任务能否安全运行。
2. **MCP 兼容性仍是主要阻塞点**：协议版本混用、启动超时回退、OAuth 回调注册和客户端名称不一致，均可能造成连接级失败。
3. **多会话并发需要原子化配置管理**：多个 CLI 实例分别持有内存快照，并在退出时重写整个 `config.json`，容易造成信任目录和插件状态丢失。
4. **Agent 必须具备明确终止条件**：社区期待超时、最大工具调用数、取消机制和可靠结果回传，避免后台子代理无限运行。
5. **自动化模式应与交互模式保持一致**：Skills 已出现在可用列表却无法在 `-p` 模式调用，插件已加载却未显示或未启用，说明能力注册链仍不统一。
6. **第三方模型适配不能只覆盖文本接口**：BYOK/DeepSeek 的失败表明自定义 Provider 还需正确处理工具 schema 和不同厂商的协议差异。
7. **CLI 参数解析需要更严格**：以 `-` 开头的 `-p/--prompt` 被误判为参数，见 [#4902](https://github.com/github/copilot-cli/issues/4902)，属于容易通过测试拦截的回归。
8. **指令遵循应具备可验证性**：Agent 忽略指定实现语言并自行替换技术栈的问题引发了对约束遵循和补偿机制的讨论，见 [#5462](https://github.com/github/copilot-cli/issues/5462)。
9. **可观测状态必须可信**：会话状态、计划内容、远程控制和恢复后的滚动位置均出现与真实状态不一致的情况，影响用户对 CLI 的信任。
10. **企业部署需要统一状态来源**：认证、企业策略、插件启用、权限刷新和配置持久化应由一致的状态管理层协调，避免局部刷新破坏全局状态。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-16

## 今日速览

过去 24 小时无新版本发布，但社区更新活跃，重点集中在 **OpenCode 2.3.x 升级后的回归问题**：Windows/PowerShell 启动失败、模型选择与回退异常、权限机制被绕过、CLI 工作目录识别错误，以及后台进程泄漏。与此同时，Core/TUI/Desktop 方向的新 PR 持续推进，涵盖自动化、MCP Skills、升级入口、插件稳定性与界面修复。

---

## 社区热点 Issues

### 1. 免费额度问题集中反馈帖
- **Issue** [#59387](https://github.com/anomalyco/opencode/issues/59387)
- 免费额度耗尽、重置失效、Desktop 免费功能异常等问题被统一引导到该帖。
- 以 **371 条评论、28 个赞**成为当日讨论量最高的议题，也是当前免费层体验与计费机制问题的核心入口。

### 2. 恢复旧版常驻左侧栏 UI
- **Issue** [#48882](https://github.com/anomalyco/opencode/issues/48882)
- 社区希望将经典“双栏布局”作为可选方案，替代新版侧边栏重设计。
- 获得 **47 个赞、45 条评论**，是功能类 Issue 中支持度最高的需求之一，显示新版 UI 的迁移体验仍有明显争议。

### 3. DeepSeek V4 Flash 缺少 Global Privacy 设置
- **Issue** [#50155](https://github.com/anomalyco/opencode/issues/50155)
- OpenCode Go 订阅用户使用 `opencode-go/deepseek-v4-flash` 时，被要求启用 Global regions，但工作区没有对应 Privacy 设置入口。
- **26 条评论、17 个赞**，反映模型可用性、区域策略和订阅权益之间的信息透明度问题。

### 4. ACP 斜杠命令执行后不流式显示输出
- **Issue** [#54371](https://github.com/anomalyco/opencode/issues/54371)
- 在 JetBrains Rider 2026.2 的 ACP 集成中，`/init` 等命令能够执行，但输出不会出现在聊天界面；普通提示词则正常。
- 已标记为 **reproduced**，对 IDE 集成和命令式工作流影响较大，已有 **9 条评论、6 个赞**。

### 5. npm 升级命令下载全部平台依赖，约 2GB
- **Issue** [#63743](https://github.com/anomalyco/opencode/issues/63743)
- `opencode upgrade` 在 npm 安装环境中调用 `npm install --global ... --force`，导致下载所有平台 optional dependencies。
- **7 条评论**，直接关系到升级速度、磁盘占用和发布流程效率，是近期 CLI 发布链路的重要问题。

### 6. 默认 `external_directory: ask` 权限未弹出确认
- **Issue** [#54524](https://github.com/anomalyco/opencode/issues/54524)
- 使用默认权限时，向 session/worktree 外部路径写入不会触发授权提示；显式添加相同规则后反而正常。
- 已有 **9 条评论、9 个赞**。这是权限默认行为与实际执行不一致的高风险问题。

### 7. Shell 路径同样绕过 `external_directory` 权限
- **Issue** [#56288](https://github.com/anomalyco/opencode/issues/56288)
- 文件工具会遵循 `external_directory` 规则，但通过 shell 写入外部目录时可能直接执行。
- Issue 已标记为 **reproduced、severity: high**，与前一项共同暴露出文件权限体系尚未覆盖所有执行入口。

### 8. `opencode-pty` 守护进程持续累积僵尸进程
- **Issue** [#63976](https://github.com/anomalyco/opencode/issues/63976)
- OpenCode 2.3.0 后，已结束的 shell 命令以 `<defunct>` 状态保留为 `opencode-pty daemon` 子进程，且不会回收。
- 获得 **5 条评论、1 个赞**。长期运行场景下可能导致资源增长，属于 2.3.0 升级后的明显回归风险。

### 9. 模型回退绕过允许列表，并在 Plan/Build 切换时变更模型
- **Issue** [#63958](https://github.com/anomalyco/opencode/issues/63958)
- 用户移除某付费模型后，fallback 仍可能调用它；Plan 与 Build 模式切换时也可能改变实际模型。
- **5 条评论**。该问题同时涉及模型权限、费用控制和产品行为一致性，值得优先处理。

### 10. CLI 根据 `$PWD` 而非进程实际 cwd 解析工作区
- **Issue** [#56386](https://github.com/anomalyco/opencode/issues/56386)
- `opencode run` 在 systemd、`subprocess(cwd=...)` 等环境中可能将 session 创建到错误目录。
- 已标记为 **reproduced**，并有 **6 条评论**。同类问题还出现在 `opencode mini` 的 Issue [#64125](https://github.com/anomalyco/opencode/issues/64125)，说明工作目录解析需要统一修复。

---

## 重要 PR 进展

### 1. Windows 打包版 PowerShell 启动失败重试
- **PR** [#64137](https://github.com/anomalyco/opencode/pull/64137)
- 针对 Microsoft Store 版 PowerShell 7 在管道模式下的 access denied 错误增加重试。
- 关联 Issue [#63892](https://github.com/anomalyco/opencode/issues/63892)，是 Windows 2.3.0 回归修复的重要进展。

### 2. 独立 TUI 在子服务退出后自动恢复
- **PR** [#64161](https://github.com/anomalyco/opencode/pull/64161)
- standalone TUI 的私有 child server 意外退出后，不再永久失去连接，而是尝试恢复服务。
- 关联 Issue [#64114](https://github.com/anomalyco/opencode/issues/64114)，提升 CLI/TUI 的故障自愈能力。

### 3. 将实验性 Schedules 升级为 Automations
- **PR** [#64160](https://github.com/anomalyco/opencode/pull/64160)
- Automation 由 trigger 与 action 构成，action 可执行 prompt，或运行无需模型的 Code Mode 程序。
- 当前仍属实验功能，并通过 feature flag 控制发布范围。

### 4. 新会话草稿页显示 Review 面板
- **PR** [#62862](https://github.com/anomalyco/opencode/pull/62862)
- 修复新会话 draft 路由未挂载 session screen/side region，导致 Review 面板及会话级面板无法访问的问题。
- 关联 Issue [#60883](https://github.com/anomalyco/opencode/issues/60883)，直接改善 Desktop 新会话体验。

### 5. TUI 支持在提示词中通过 `/` 引用 Skills
- **PR** [#63562](https://github.com/anomalyco/opencode/pull/63562)
- Skills 不再只能通过 `@` 引用，用户可在提示词任意位置使用 `/` 斜杠命令引用。
- 提升了技能发现与组合使用的效率。

### 6. 增加实验性 MCP Skills 支持
- **PR** [#64157](https://github.com/anomalyco/opencode/pull/64157)
- Core 开始接入 MCP Skills 扩展规范，使 MCP 服务中的技能可被 OpenCode 发现和使用。
- 虽处于实验阶段，但可能扩展 MCP 从“工具协议”向“技能生态”的演进。

### 7. Desktop 提供 OpenCode 2 升级入口
- **PR** [#64153](https://github.com/anomalyco/opencode/pull/64153)
- OpenCode 1 Desktop 增加升级到 OpenCode 2.0 的入口，弥补此前只有 TUI 支持升级的缺口。
- 对双版本用户和迁移工作具有直接价值。

### 8. 修复插件返回非 Effect 导致激活卡死
- **PR** [#64115](https://github.com/anomalyco/opencode/pull/64115)
- 对插件 `effect` 返回 Promise、返回旧版 hook map 等错误形态进行校验，避免插件加载或激活阶段挂起。
- 关联 Issue [#63816](https://github.com/anomalyco/opencode/issues/63816)，提升插件 API 的错误反馈和兼容性。

### 9. 让 retry hook 处理 content-filter 结束
- **PR** [#60836](https://github.com/anomalyco/opencode/pull/60836)
- 当模型步骤以 `finish: "content-filter"` 结束时，允许 retry hook 接管并触发重试逻辑。
- 关联 Issue [#60822](https://github.com/anomalyco/opencode/issues/60822)，完善内容过滤场景下的恢复机制。

### 10. 支持配置编辑工具选择
- **PR** [#63982](https://github.com/anomalyco/opencode/pull/63982)
- 替代原先基于 model ID 的硬编码启发式规则，允许用户明确选择 `patch`、`edit` 或 `write`。
- 关联 Issue [#63981](https://github.com/anomalyco/opencode/issues/63981)，提升不同模型与工作流下的编辑行为可控性。

---

## 功能需求趋势

### 1. IDE 与 Agent 协议集成
- ACP 斜杠命令输出、后台 shell 完成通知、子代理活跃状态等问题持续受到关注。
- 用户期待 OpenCode 在 JetBrains 等 IDE 中具备更可靠、可观察、与原生会话等价的执行体验。

### 2. 权限控制与安全沙箱
- `external_directory` 在默认规则和 shell 路径下失效，是当前最突出的安全类反馈之一。
- 社区同时要求更易访问的权限模式、更加完善的执行隔离，以及 Plan 模式对文件写入的可靠约束。

### 3. 模型选择、路由与回退可控
- 模型回退绕过允许列表、Plan/Build 切换导致模型变化、新会话使用目录最新模型等问题受到集中关注。
- 社区希望模型选择具有可预测性，并能明确控制默认模型、允许列表、回退顺序和订阅权益。

### 4. 免费额度与 Go 订阅透明度
- 免费额度重置、每日消息限制、共享 allowance、区域隐私设置等问题构成当前服务层讨论主线。
- 用户期待用量展示、限制规则、模型适用范围和订阅权益更加明确。

### 5. Desktop 与 TUI 交互能力
- 旧版常驻侧栏、Review 面板、任务栏角标、折叠状态标识、顶部 sticky prompt 等需求持续出现。
- 核心诉求是保留经典工作流，同时增强会话状态、后台任务和草稿会话的可见性。

### 6. Skills、自动化与扩展生态
- MCP Skills、斜杠引用 Skills、实验性 Automations、Code Mode 调用内置工具等方向快速升温。
- 社区正从单纯调用模型，转向构建可复用技能、定时任务和复杂 Agent 编排能力。

### 7. 本地模型与多提供商兼容性
- Ollama、PowerShell、本地 OpenAI-compatible endpoint、DeepSeek V4 Flash、Mistral 等问题覆盖不同平台和提供商。
- 本地运行兼容性仍是 Windows 用户和离线开发场景的重要需求。

### 8. 多媒体输出与工具结果展示
- 工具返回图片时希望在聊天 UI 中直接显示，ACP 错误输出、流式消息和后台任务通知也要求统一呈现。
- 这反映出 UI 需要从“文本日志式展示”升级为完整的多模态 Agent 事件视图。

---

## 开发者关注点

- **升级回归是当前首要风险**：OpenCode 2.3.0 后集中出现 Windows shell、后台进程、模型路由、Desktop 卡住和远程隧道等问题。
- **权限规则必须覆盖所有工具入口**：文件工具与 shell 的策略不一致，会直接削弱沙箱与 Plan 模式的安全保证。
- **工作目录与会话归属需要统一**：多处依赖环境变量 `$PWD`，在 systemd、IDE 和程序化启动场景中容易产生错误 session。
- **模型行为必须可预测**：回退策略、模式切换、新会话默认模型和 DeepSeek 区域限制，都需要更透明、稳定的路由规则。
- **插件与扩展 API 仍需强化**：非 Effect 返回值、HTTP RPC 不可用、tools/list_changed 不生效等问题说明扩展协议的一致性仍在演进。
- **长期运行资源管理受到关注**：PTY 僵尸进程持续累积，提醒开发者在 daemon 生命周期、进程回收和后台任务恢复方面加强测试。
- **跨平台质量仍是短板**：Windows PowerShell、Store 应用打包路径、Windows/Android 远程隧道及 CJK 控制台字体兼容问题持续出现。
- **CLI 发布效率受到质疑**：npm 升级下载全部平台依赖造成约 2GB 开销，应在后续发布工具链中优先优化。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报

**日期：2026-11-16**  
**数据来源：** [1jehuang/jcode](https://github.com/1jehuang/jcode)

## 今日速览

过去 24 小时没有新版本发布，但社区提交明显聚焦于 **Windows/终端键盘协议兼容性、CI 质量门禁和 provider 配置正确性**。其中，Windows/VS Code 下 Kitty CSI-u 字符泄漏问题仍被确认在 v0.81.4 复现，同时多个修复 PR 已进入审查或关闭阶段。

---

## 社区热点 Issues

> 过去 24 小时仅有 5 条 Issue 更新，以下全部列出。

### 1. [#1064：Windows/VS Code 恢复焦点后启用 Kitty CSI-u，导致按键内容泄漏](https://github.com/1jehuang/jcode/issues/1064)

- **重要性：** 这是 v0.80.1 引入的回归问题，影响 Windows + VS Code/ConPTY 环境的日常输入。焦点恢复后，`crossterm` 无法正确解码 Kitty 协议，残余序列会以 `[97;1;3u` 等形式进入输入框。
- **当前进展：** 社区在 v0.81.4 上再次确认问题仍可复现；报告将回归定位到提交 `2eaadca31`，而 v0.80.0 不受影响。
- **社区反应：** Issue 有 3 条评论、尚无点赞，讨论集中在键盘协议协商必须与实际 decoder 保持一致。

### 2. [#2131：master 分支无法通过自身 CI 门禁](https://github.com/1jehuang/jcode/issues/2131)

- **重要性：** master 当前存在格式检查漂移、代码体积预算增长以及 Ubuntu 测试失败，说明主干分支的质量门禁已经失守。
- **涉及内容：**
  - `cargo fmt --all -- --check` 检出 11 处差异；
  - 代码体积预算检查失败，约有 30 个跟踪文件受到影响；
  - 两个 Ubuntu 测试失败；
  - 另存在 7 个 Clippy dead-code 错误。
- **社区反应：** Issue 有 3 条评论；目前多数问题已有针对性 PR，但代码体积预算仍需要维护者决策。

### 3. [#2171：`--locked` Cargo 命令失败，锁文件缺少 jcode-tui 的 clap 依赖](https://github.com/1jehuang/jcode/issues/2171)

- **重要性：** 自提交 `b9f6617d3` 后，带 `--locked` 的 Cargo 命令会因 `Cargo.lock` 与 manifest 不一致而失败，影响可复现构建和 CI。
- **原因：** 可选 `clap` 依赖被移动到 `crates/jcode-tui/Cargo.toml`，但锁文件没有同步更新。
- **社区反应：** Issue 已有 1 条评论，现已关闭，属于影响明确、修复路径直接的依赖管理回归。

### 4. [#2182：Ubuntu 上 3 个 jcode-tui 应用测试持续失败](https://github.com/1jehuang/jcode/issues/2182)

- **重要性：** master 自 11 月 14—15 日的 image-draft/failover 系列变更后，每次 push 均出现 3 个失败测试，影响 CI 稳定性。
- **关键判断：** 测试可在干净的 macOS 环境中稳定复现，因此并非 provider 环境波动；三项失败被判断为测试断言未同步新的预期行为。
- **社区反应：** 尚无评论，但已有专门 PR 更新相关测试，体现该问题更偏向测试维护而非产品功能缺陷。

### 5. [#2180：恢复会话时，自定义 OpenAI-compatible provider 显示静态模型而非实时目录](https://github.com/1jehuang/jcode/issues/2180)

- **重要性：** 新建会话能够正确获取 `/v1/models`，但恢复旧会话时模型选择器仅显示 `config.toml` 中的静态模型，影响 LiteLLM 等自定义网关的模型选择体验。
- **原因：** attach 阶段的模型预取按 provider 做了 debounce；近期刷新发生后，恢复会话时可能不会重新水合路由和模型目录。
- **社区反应：** Issue 尚无评论；对应修复 PR [#2185](https://github.com/1jehuang/jcode/pull/2185) 已关闭，问题已获得直接处理。

---

## 重要 PR 进展

### 1. [PR #2186：统一 Windows 键盘协议写入与 decoder，并在视口变化后重绘](https://github.com/1jehuang/jcode/pull/2186)

针对 Windows + Herdr/ConPTY 环境下键盘协议与实际解码器不匹配的问题，修复输入框出现 Kitty CSI-u 碎片的问题，并处理 composer row 在视口偏移后未正确重绘的缺陷。属于 [#1064](https://github.com/1jehuang/jcode/issues/1064) 的关键修复候选。

### 2. [PR #2143：吞掉不完整实现产生的 ESC 分片 Kitty 报告](https://github.com/1jehuang/jcode/pull/2143)

处理 iTerm2 等终端分段发送 Kitty keyboard report 的情况：单次读取可能刚好落在 ESC 字节之后，导致 crossterm 将尾部字节逐个插入编辑器。PR 通过识别并吞掉残缺报告，避免 `[98;1:3u` 一类内容污染用户输入。

### 3. [PR #2185：attach 时若路由未水合则恢复实时模型目录](https://github.com/1jehuang/jcode/pull/2185)

修复恢复旧会话时模型选择器只展示静态模型的问题。PR 在路由尚未水合时重新获取 provider 的实时模型目录，已关闭并直接对应 [#2180](https://github.com/1jehuang/jcode/issues/2180)。

### 4. [PR #2187：命名 OpenAI-compatible profile 正确发送自定义 headers](https://github.com/1jehuang/jcode/pull/2187)

让命名 profile 中配置的 `headers` 真正作用于聊天请求和模型目录请求。此前 gateway metadata header、自定义 `User-Agent` 等配置虽可写入，却不会发送，降低了企业网关和自定义服务的兼容性。

### 5. [PR #2154：Swarm 将根任务 effort 传递给 worker，并支持 `model:inherit`](https://github.com/1jehuang/jcode/pull/2154)

包含三项 Swarm 修复：将根任务 effort 传播给 worker、允许 `model:inherit` 继承父任务模型，以及相关路由行为修正。目标是减少多代理执行时模型和推理强度配置不一致的问题。

### 6. [PR #2183：更新 failover 与 lazy history 测试以匹配预期行为](https://github.com/1jehuang/jcode/pull/2183)

修正 3 个因近期行为调整而过期的测试，包括取消 image-only failover 后恢复附件、failover 路径以及 lazy history 行为。该 PR 是恢复 [#2182](https://github.com/1jehuang/jcode/issues/2182) CI 绿灯的重要一步。

### 7. [PR #2184：清理 Clippy dead-code 与过期桌面 profile 测试](https://github.com/1jehuang/jcode/pull/2184)

处理 `jcode-tui-markdown` 中 7 个 dead-code 错误，并更新过期的 desktop profile 测试。代码体积预算问题未在该 PR 中处理，仍需单独决策。

### 8. [PR #2181：恢复 master 的 rustfmt 清洁状态](https://github.com/1jehuang/jcode/pull/2181)

执行纯格式化修改，修复 `jcode-message-types/src/lib.rs` 和 `jcode-provider-anthropic-runtime/src/usage_recording.rs` 与 rustfmt 输出不一致的问题，不改变运行行为。

### 9. [PR #1878：支持可配置自动重试与 Alt+S sidecar 快捷切换](https://github.com/1jehuang/jcode/pull/1878)

允许配置重试次数、退避策略和 sidecar fallback 顺序；模型选择器中的 Alt+S 可临时切换当前会话的 sidecar fallback，并反转尝试顺序，以优先使用主 provider。

### 10. [PR #1889：实现 `@file` 文件提及选择器与 frecency 排序](https://github.com/1jehuang/jcode/pull/1889)

允许用户通过 `@` 快速引用文件，并使用 frecency 对候选文件排序，解决大型代码库中手工输入长路径效率低的问题，对应 [#570](https://github.com/1jehuang/jcode/issues/570)。

---

## 功能需求趋势

### 1. 终端与 IDE 输入兼容性

Windows/VS Code、ConPTY、iTerm2 和 Kitty keyboard protocol 是当前最突出的问题域。社区核心诉求是：

- Kitty 协议协商与解码器实现严格一致；
- 正确处理 ESC 分片和跨 write 边界的数据；
- 避免 CSI-u 文本碎片污染用户输入；
- 在焦点恢复、视口变化后保持正确渲染。

相关讨论集中在 [#1064](https://github.com/1jehuang/jcode/issues/1064)、[PR #2143](https://github.com/1jehuang/jcode/pull/2143) 和 [PR #2186](https://github.com/1jehuang/jcode/pull/2186)。

### 2. Provider 与自定义网关兼容

社区不仅关注“是否支持某个模型”，也越来越关注自定义 endpoint 的完整行为：

- 实时获取 `/v1/models`；
- 恢复会话后仍能展示实时模型；
- 正确发送自定义 headers 和 User-Agent；
- 支持 LiteLLM 等 OpenAI-compatible 服务；
- 改善不同 provider 之间的模型路由和 reasoning effort 传递。

主要相关项包括 [#2180](https://github.com/1jehuang/jcode/issues/2180)、[PR #2187](https://github.com/1jehuang/jcode/pull/2187) 和 [PR #2154](https://github.com/1jehuang/jcode/pull/2154)。

### 3. Agent 与 Swarm 的精细化控制

Swarm 和多代理功能正从“能够运行”转向“资源、模型和执行策略可控”：

- 父任务 effort 向 worker 传播；
- `model:inherit` 继承模型；
- sidecar fallback 顺序可配置；
- 临时会话级设置无需改写全局配置；
- 图片、附件和 failover 行为更加稳定。

相关项包括 [PR #2154](https://github.com/1jehuang/jcode/pull/2154)、[PR #1878](https://github.com/1jehuang/jcode/pull/1878) 和 [PR #1875](https://github.com/1jehuang/jcode/pull/1875)。

### 4. TUI 可发现性与交互效率

持续受到关注的 TUI 能力包括：

- `/mcp` 管理服务器和逐工具开关；
- `/theme` 切换亮暗主题及自定义 palette；
- `/settings` 暴露 bash 风险门禁；
- `@file` 快速引用文件；
- `ask_user` 在对话中提供结构化选择；
- overview 折叠、memory effort 和 runtime model 行展示。

这表明社区希望减少手工配置和命令记忆成本，同时提高 TUI 的可见性、可控性与可扩展性。

### 5. CI 与可复现构建

[ #2131](https://github.com/1jehuang/jcode/issues/2131)、[#2171](https://github.com/1jehuang/jcode/issues/2171) 和 [#2182](https://github.com/1jehuang/jcode/issues/2182) 共同反映出社区对以下事项的要求：

- master 必须持续通过格式、Clippy、测试和体积预算门禁；
- Cargo.lock 必须与 manifest 保持一致；
- `--locked` 构建必须可复现；
- 行为变更应同步更新测试断言。

### 6. 模型适配与运行时容错

[PR #1347](https://github.com/1jehuang/jcode/pull/1347) 聚焦纯文本模型处理图片工具结果时的恢复能力：避免图片块污染后续所有轮次。这体现了开发者对“非理想模型能力声明”和 provider 兼容性问题日益关注。

---

## 开发者关注点

1. **输入正确性高于新功能优先级**  
   键盘协议碎片会直接破坏用户输入，当前被视为高优先级回归。Windows/VS Code 用户受影响尤其明显。

2. **配置项必须在运行时真正生效**  
   自定义 headers、实时模型目录和 sidecar 设置都出现了“配置存在但行为未应用”的落差，说明 provider 层的配置传递与状态水合仍较脆弱。

3. **会话恢复存在隐式状态问题**  
   新会话正常、恢复会话异常，反映 provider 路由、模型目录和预取 debounce 等状态没有在 attach 阶段可靠重建。

4. **主干分支质量门禁需要恢复可信度**  
   格式漂移、Clippy 错误、锁文件不一致和过期测试同时出现，容易降低贡献者对 CI 的信任，也增加后续功能开发的合并成本。

5. **测试应跟随新语义，而不是机械保留旧断言**  
   [#2182](https://github.com/1jehuang/jcode/issues/2182) 的案例说明，近期 failover、附件和 lazy history 行为已经有意改变，测试应明确记录这些产品决策。

6. **精细化控制是下一阶段重点**  
   开发者希望能够按会话配置模型、推理 effort、重试和 fallback，而不是只能依赖全局配置。这有助于支持复杂代理编排及不同 provider 的成本约束。

7. **TUI 的高频操作仍依赖手动输入**  
   文件引用、工具开关、主题设置和风险门禁都有明显自动化空间。`@file`、`/mcp`、`/theme`、`/settings` 等 PR 反映出降低操作成本是稳定需求。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-16

## 今日速览

过去 24 小时没有新版本发布，pi 社区主要围绕 **OpenAI/Codex 接入稳定性、会话与上下文压缩、扩展提供方识别、Windows 进程管理** 等问题展开讨论。  
值得注意的是，当天有 33 个 Issue 更新，并出现 3 个新 Issue 集中报告 `subagent({ workflow: true })` 工作流代码块兼容性问题，显示出多宿主集成仍是当前痛点。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues

### 1. ChatGPT/OpenAI OAuth 返回 403

用户使用 ChatGPT Plus 订阅登录时遇到 `403 subscription_sharing_user_not_eligible`。该问题获得 **14 条评论**，是当天讨论热度最高的 Issue 之一，直接影响 ChatGPT 登录链路的可用性。

社区关注点包括订阅共享资格限制、OAuth 账号状态，以及重新登录后错误是否仍然存在。  
[查看 Issue #10605](https://github.com/earendil-works/pi/issues/10605)

### 2. ChatGPT 登录下 GPT-6.1 Sol 仍显示 272K 上下文

Pi 1.3.0 通过 ChatGPT 登录后，将 `gpt-6.1-sol` 上下文窗口报告为 272K，而账户模型目录提供的是 500K。该问题累计 **14 条评论、8 个赞**，直接影响上下文预算与压缩策略。

开发者希望 Pi 在认证后同步服务端模型目录，而不是沿用较旧的静态容量信息。  
[查看 Issue #11021](https://github.com/earendil-works/pi/issues/11021)

### 3. 扩展注册的默认 Provider/Model 偶发失效

新建会话时，Pi 偶尔不采用 `settings.json` 中的 `defaultProvider` 和 `defaultModel`，而是回退到其他 Provider 的默认模型。该 Issue 有 **11 条评论、5 个赞**，对依赖扩展注册模型的自动化工作流影响较大。

它也暴露了核心配置系统与扩展生命周期之间可能存在初始化时序或配置合并问题。  
[查看 Issue #8810](https://github.com/earendil-works/pi/issues/8810)

### 4. Bedrock 每次请求都创建新的 RuntimeClient

`bedrock-converse-stream.ts` 在每次模型调用中执行 `new BedrockRuntimeClient(config)`，导致重新创建凭证提供器和 HTTP/2 会话。Issue 获得 **6 条评论**。

在 SSO profile 场景下，每次调用都可能额外触发 `GetRoleCredentials` 请求，增加延迟、凭证流量和连接开销，是明确的性能优化点。  
[查看 Issue #11527](https://github.com/earendil-works/pi/issues/11527)

### 5. `pi auth check` 无法识别扩展注册的 Provider

命令行认证检查无法发现由扩展注册的 Provider，并可能将缺失模型误报为 `invalid_state`。该问题有 **5 条评论**，对 CI、非交互式审核和自动化脚本影响明显。

社区期待认证能力查询与模型选择使用同一套 Provider 注册表。  
[查看 Issue #9448](https://github.com/earendil-works/pi/issues/9448)

### 6. Codex WebSocket 在单轮长任务中触发 60 分钟连接限制

长时间连续推理期间，Codex WebSocket 会达到 60 分钟连接上限，即使已有相关修复，问题仍然出现。该 Issue 有 **3 条评论**，并于当天继续更新。

它表明连接生命周期管理仍需加强，尤其是超长单轮、无工具调用但持续流式生成的场景。  
[查看 Issue #12124](https://github.com/earendil-works/pi/issues/12124)

### 7. Compaction 工具循环静默终止，压缩失败后丢失有效上下文

Pi 1.5.2 在接近上下文上限时反复尝试压缩，并可能直接结束工具循环，而不是成功压缩。该问题有 **3 条评论**，同时当天另有关闭的 Issue 提议拒绝失败摘要，避免覆盖有效会话上下文。

这组反馈说明压缩流程不仅需要“失败重试”，还需要可靠的事务性：只有成功生成并验证摘要后，才能替换原有上下文。  
[查看 Issue #12076](https://github.com/earendil-works/pi/issues/12076)  
[查看 Issue #12204](https://github.com/earendil-works/pi/issues/12204)

### 8. Durable 写入覆盖期间暴露空文件或部分文件

Pi Durable 覆盖文件时，文件系统监听器可能先观察到空文件或部分写入内容，导致 Vite 缓存错误模块并丢失样式。该 Issue 获得 **2 条评论后关闭**，但暴露了实际开发体验风险。

更安全的写入策略应采用临时文件写入、原子重命名，并确保监听者只观察到完整版本。  
[查看 Issue #12203](https://github.com/earendil-works/pi/issues/12203)

### 9. Durable 取消处理需要支持等待信号和截止时间

社区希望 Durable 的取消处理器能够保存进度、等待外部信号或 deadline，并支持主机关闭后恢复同一取消流程。该需求获得 **4 条评论**。

它面向的是长时间运行的远程任务、作业取消确认和崩溃恢复，目标是让取消操作具备可持久化、可恢复的语义。  
[查看 Issue #12090](https://github.com/earendil-works/pi/issues/12090)

### 10. 多个模型目录与 Provider 兼容性问题集中出现

当天多个 Issue 集中于模型元数据和适配层，包括：

- Gemini 4 Hydrogen 的 `xhigh` 思考等级被 Google 适配器拒绝；
- OpenAI 模型目录仍展示已弃用模型；
- Ant Ling 需要升级至 Ling 3.x 并采用 DeepSeek-compatible reasoning；
- Provider key 重命名后，模型选择器可能使会话无法恢复；
- 会话恢复时模型 ID 被重写，可能静默切换到无关模型。

这些反馈共同表明，模型目录的实时性、ID 映射和持久化会话恢复仍是高频问题。  
[Gemini xhigh](https://github.com/earendil-works/pi/issues/12184) · [OpenAI 目录](https://github.com/earendil-works/pi/issues/12202) · [Ant Ling 更新](https://github.com/earendil-works/pi/issues/12201) · [Provider key 重命名](https://github.com/earendil-works/pi/issues/12193) · [会话恢复切换模型](https://github.com/earendil-works/pi/issues/12187)

---

## 重要 PR 进展

> 本期仅有 3 个 PR 在过去 24 小时内更新，未达到 10 个；以下列出全部重要 PR。

### 1. Windows 上终止 Bash 命令的完整进程树

PR 改进了 Windows 命令终止逻辑，解决 `taskkill /T` 无法找到“父进程已经退出”的孙进程的问题。旧 Bash、PowerShell 或子进程可能在 Pi 结束后继续运行，带来残留进程、端口占用和任务失控风险。

该 PR 仍处于开放状态，是本期最值得关注的长期修复之一。  
[查看 PR #11854](https://github.com/earendil-works/pi/pull/11854)

### 2. `undici` 升级至 8.12.4

PR 将 `pi-coding-agent` 的精确依赖版本从 `undici` 8.12.3 更新至 8.12.4，并刷新锁文件，不涉及应用逻辑或测试代码变更。

对应 Issue 显示该升级包含多项安全修复。由于贡献者审批机制导致 PR 被关闭，社区已请求维护者提供必要的 `lgtm` 授权以便重新开启。  
[查看 PR #12198](https://github.com/earendil-works/pi/pull/12198) · [查看 Issue #12200](https://github.com/earendil-works/pi/issues/12200)

### 3. 更新 Ant Ling 模型并统一 DeepSeek 兼容格式

PR 将内置 Ant Ling 模型从 Ling 2.6 / Ring 2.6 更新至 Ling 3.0、Ling 3.0 Flash VL 和 Ling 3.1 Flash，并移除旧式 Provider 专用 thinking format，统一使用现有的 DeepSeek-compatible reasoning 格式。

该 PR 已关闭，但其对应的模型更新需求仍值得模型 Provider 维护者关注。  
[查看 PR #11800](https://github.com/earendil-works/pi/pull/11800) · [查看 Issue #12201](https://github.com/earendil-works/pi/issues/12201)

---

## 功能需求趋势

### 1. Provider、模型目录与认证状态统一

社区高频要求扩展注册的 Provider 能同时被：

- 新会话默认模型选择；
- `/model` 模型目录；
- `pi auth check`；
- 会话恢复和模型 ID 映射

正确识别。核心诉求是建立单一、实时且一致的 Provider/Model Registry。

相关 Issues：  
[#8810](https://github.com/earendil-works/pi/issues/8810) · [#9448](https://github.com/earendil-works/pi/issues/9448) · [#11021](https://github.com/earendil-works/pi/issues/11021) · [#12187](https://github.com/earendil-works/pi/issues/12187) · [#12193](https://github.com/earendil-works/pi/issues/12193)

### 2. 上下文压缩可靠性与持久化

社区关注的不只是“能否压缩”，而是压缩失败、重试循环、摘要校验、上下文替换以及 checkpoint 的一致性。Durable 场景还要求取消流程、保存进度、等待信号和恢复执行。

相关 Issues：  
[#12076](https://github.com/earendil-works/pi/issues/12076) · [#12204](https://github.com/earendil-works/pi/issues/12204) · [#12090](https://github.com/earendil-works/pi/issues/12090)

### 3. 长时间连接与流式任务稳定性

Codex WebSocket 的 60 分钟限制、Cloudflare Workers AI 间歇性 400，以及 Bedrock 每次重建客户端，都指向长连接生命周期、重试、连接复用和错误可观测性不足。

相关 Issues：  
[#12124](https://github.com/earendil-works/pi/issues/12124) · [#12194](https://github.com/earendil-works/pi/issues/12194) · [#11527](https://github.com/earendil-works/pi/issues/11527)

### 4. 新模型与 Provider 快速适配

Ant Ling、Gemini 4 Hydrogen、GPT-6.1 Sol 的问题表明，模型能力元数据更新速度已成为实际使用瓶颈。社区希望减少硬编码模型列表，并更及时地消费模型目录中的上下文长度、推理等级和废弃状态。

相关 Issues：  
[#12201](https://github.com/earendil-works/pi/issues/12201) · [#12184](https://github.com/earendil-works/pi/issues/12184) · [#12202](https://github.com/earendil-works/pi/issues/12202) · [#11021](https://github.com/earendil-works/pi/issues/11021)

### 5. Durable 文件写入与任务生命周期

文件覆盖的原子性、子进程树终止、取消检查点和主机重启恢复，共同指向 Durable 模式向“可靠任务运行时”演进。

相关 Issues：  
[#12203](https://github.com/earendil-works/pi/issues/12203) · [#12090](https://github.com/earendil-works/pi/issues/12090)  
相关 PR：  
[#11854](https://github.com/earendil-works/pi/pull/11854)

### 6. 多宿主与 SDK/RPC 兼容性

`subagent({ workflow: true })` 在部分宿主中会丢失 `js workflow` 代码块，同日出现多个近似 Issue；另有 RPC 模式下 deferred prompt 在 bootstrap settlement 触发压缩时无响应的问题。

这类反馈表明，Pi 的工具协议不能过度依赖同一回复中代码块和 tool call 的共同存在，需要提供稳定的脚本回退机制。  
[#12195](https://github.com/earendil-works/pi/issues/12195) · [#12197](https://github.com/earendil-works/pi/issues/12197) · [#12199](https://github.com/earendil-works/pi/issues/12199) · [#12196](https://github.com/earendil-works/pi/issues/12196)

---

## 开发者关注点

### 上下文管理是最突出的开发者痛点

开发者不只关注最大上下文窗口数字，还关注 Pi 实际采用的压缩预算、压缩失败后的行为，以及失败摘要是否会污染长期会话。近期反馈显示，**上下文容量展示、压缩重试和 checkpoint 原子性需要一起解决**。

### 扩展注册模型后的“可发现性”仍不稳定

扩展能够注册 Provider，但默认模型选择、认证检查、模型选择器和会话恢复可能无法一致识别它。这会导致自动化脚本误判认证状态、任务落到错误模型，甚至在恢复会话时静默切换模型。

### 长连接错误需要更好的可观测性和降级策略

Codex 的 WebSocket 失败可能被后续 HTTP fallback 错误覆盖，使真实根因不可见；Bedrock 每次请求重建客户端又放大了延迟和凭证开销。社区期待：

- 保留并展示原始连接错误；
- 客户端与连接池复用；
- 明确的超时、重连和 fallback 顺序；
- 长任务期间的连接生命周期管理。

### Windows 可靠性问题受到关注

Windows 上的终端输入泄漏和 Bash 子进程残留虽然已有部分 Issue 关闭，但说明 Pi 在 Windows 上仍需加强终端状态恢复、进程树清理及运行时更新兼容性。

相关 Issues：  
[#12183](https://github.com/earendil-works/pi/issues/12183) · [#11854](https://github.com/earendil-works/pi/pull/11854)

### 工具协议需要为不同宿主提供降级路径

`subagent` 工作流依赖特定语言标记的代码块，而部分宿主可能在转发工具调用时丢弃该代码块。社区建议将已存在但未充分记录的 `options.script` 回退方式写入工具 schema，使模型在代码块丢失时仍能稳定执行工作流。

[查看 Issue #12199](https://github.com/earendil-works/pi/issues/12199)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-11-27

> 生成时间: 2026-11-27 07:42 UTC | 覆盖工具: 8 个

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

**分析日期：2026-11-27**  
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、jcode、pi；Kimi Code CLI 当日无活动。

> 说明：Issue/PR 数量按题述“今日重点条目”统计，并非仓库全部未关闭数量；Release 以过去 24 小时为准。

---

## 1. 生态全景

当前 AI CLI 已从“能调用模型、完成编码任务”进入“能否可靠融入真实工程环境”的竞争阶段，核心矛盾从模型能力转向**沙箱一致性、权限边界、长任务恢复和可观测性**。各工具共同暴露出一组生产级问题：执行环境与普通 Shell 行为不一致、权限请求阻塞无人值守流程、工具调用或上下文超限后缺少可靠恢复。

与此同时，CLI 正快速扩展为桌面端、IDE、ACP、插件、MCP 和多代理一体化工作台，TUI 的 Diff、图片、行号跳转、主题与文件选择等体验持续成熟。行业分化也开始显现：Codex 和 Claude Code 强调平台级工程与多入口生态，Gemini CLI 偏重子代理及 ACP 自动化，Copilot CLI 聚焦 GitHub 企业生态，OpenCode、jcode 和 pi 更强调可编程、多模型与可嵌入能力。

---

## 2. 各工具活跃度对比

| 工具 | 今日重点 Issues | 今日重点 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 | 4 | 无 | **高**：问题集中于 Desktop 权限、账号、插件同步和计费；3/4 PR 已关闭，1 个开放 |
| **OpenAI Codex** | 10 | 10 | `rust-v0.174.0-alpha.8` | **很高**：Windows、沙箱和 TUI 同时发力，PR 密度最高 |
| **Gemini CLI** | 10 | 10 | 无 | **很高**：集中修复 ACP、工具超时、Web Search 和 Agent 状态语义 |
| **GitHub Copilot CLI** | 10 | 0 | `v1.0.117-3/-4/-5` | **高**：无 PR，但连续发布 3 个修复版本，直接交付节奏强 |
| **OpenCode** | 10 | 10 | 无 | **很高**：V2、插件、MCP、自动化和 Desktop 均有活跃改动 |
| **jcode** | 10 | 10 | 无 | **很高**：CI 红灯、附件生命周期、模型路由和 TUI 配置并行推进 |
| **pi** | 10 | 10 | 无 | **很高**：重点转向 Durable 生命周期、Provider 兼容与资源释放 |
| **Kimi Code CLI** | 0 | 0 | 无 | **低/静默**：当日无社区活动，需关注是维护节奏还是活跃度下降 |

### 数据解读

- 本次纳入的 7 个活跃工具均整理出约 **10 个热点 Issue**，但热度结构不同。
- **Codex、OpenCode、jcode、pi** 的重点 PR 数量均达到 10 个，说明迭代集中在代码层，且大量修复与新能力并行。
- **Copilot CLI** 当天没有 PR，但连续发布三个补丁版本，体现“小步快发、直接修复”的维护风格。
- **Claude Code** 当天无版本发布，PR 中 3 个关闭、1 个开放，短期交付兑现率相对有限。
- Kimi Code CLI 缺少当日信号，不宜直接据此判断项目停滞，但应列入持续观察名单。

---

## 3. 共同关注的功能方向

### 3.1 沙箱必须接近真实开发环境

这是跨工具最一致的生产级诉求。

- **Codex**：Windows 原生沙箱内 Git HTTPS 失败，内置 `rg` 出现 Access Denied。
- **Copilot CLI**：沙箱阻止 `git submodule update`，macOS 沙箱导致 Cypress SIGSEGV。
- **Gemini CLI**：Shell 工具说明与 Windows 实际行为不一致，危险 Git/数据库命令缺少足够护栏。
- **Claude Code**：不同界面下的文件目录权限、审批和索引行为不一致。
- **OpenCode**：快照机制错误收录大型 Git 忽略文件。

**结论：** “支持沙箱”已不足够，沙箱必须正确继承 PATH、凭据、网络、Git、子进程和测试工具链语义。

### 3.2 无人值守任务必须可终止、可诊断、无需人工交互

- **OpenCode**：插件权限确认会阻塞无人值守运行；开放 stdin 会导致 CLI 卡住；服务端失败时 stderr 为空。
- **Gemini CLI**：Generalist Agent、Web Search 和 Browser Agent 存在永久挂起或锁冲突。
- **Copilot CLI**：远程 AHP 刷新无限重试且没有退避；退出码无法区分 SIGTERM 与正常排空。
- **Claude Code**：WSL 长时间冻结、VS Code 扩展进程累积。
- **Codex**：桌面端缺少运行命令显示，长任务中断后的恢复仍受关注。

**结论：** CI 和服务端 Agent 需要统一的结构化生命周期：开始、排队、运行、取消、超时、重试、完成、终止原因。

### 3.3 权限、授权与资源隔离需要边界清晰

- **Copilot CLI** 的 `v1.0.117-3` 已修复 MCP 授权连带批准内置 shell 的问题，是当日最直接的权限隔离改进。
- **Claude Code** 的文件访问边界在 Desktop、TUI、`--add-dir`、Remote Control 之间不一致。
- **Codex** 的权限模式、执行位置选择器在 Windows 更新后消失。
- **Gemini CLI** 社区要求保护 `git reset --force` 等破坏性操作。
- **jcode** 希望 Bash 风险门控可配置，而非硬编码启用。

**结论：** 权限系统正在从单一“允许/拒绝”升级为按工具、进程、目录、账号和运行模式划分的细粒度授权模型。

### 3.4 模型路由、额度与缓存必须可解释

- **Claude Code**：5 小时额度重置后异常跳至 100%。
- **Codex**：GPT-6.1 Sol 消耗加速、新模型行为回退。
- **pi**：扩展注册的 Provider 偶尔忽略默认模型；工具顺序变化破坏 Prompt Cache。
- **jcode**：Swarm 未继承当前会话模型，Gemini 默认模型可能被静默重定向。
- **OpenCode**：reasoning effort 切换造成缓存失效。

**结论：** 用户需要看到“实际使用的模型、路由原因、token 消耗、重试消耗及缓存失效原因”，而不仅是模型名称和总额度。

### 3.5 MCP、插件和 Skills 从“能加载”走向“可管理、可发现、可恢复”

- **OpenCode**：MCP 偶发漏注册；实验性 MCP Skills 丢失服务指令；插件 API 继续向 Workspace Driver 和统一工具调用扩展。
- **Copilot CLI**：ACP、SDK、大型会话和多会话审批受到关注。
- **Gemini CLI**：ACP 握手、关闭、审批错误和 token 元数据成为 PR 核心。
- **pi**：`mcp.json` Schema、Provider 注册稳定性和统一图片协议受到关注。
- **Claude Code**：插件市场 push 不触发同步、个人仓库无法创建 Webhook。

**结论：** 下一阶段竞争点不是“支持 MCP”本身，而是插件发现、授权范围、生命周期、错误诊断、协议兼容和供应链可靠性。

### 3.6 长上下文、大载荷与长会话成为共同瓶颈

- **Gemini CLI**：大量工具定义触发 HTTP 400，搜索输出膨胀。
- **Copilot CLI**：25–30 KB 以上工具调用超时；808 MB 会话导致 stdio 崩溃。
- **OpenCode**：子代理上下文压缩失败，快照磁盘占用失控。
- **Claude Code**：1M 上下文仍发生频繁压缩。
- **pi**：工具排序导致 Anthropic Prompt Cache 失效。
- **jcode**：大文件、图片附件和会话队列的生命周期复杂。

**结论：** 长上下文能力不能只看模型标称窗口，还要同时解决压缩质量、缓存稳定、附件传输、历史存储和重放一致性。

### 3.7 TUI/桌面端从“能运行”转向“高效审阅”

- **Codex**：Diff 并排、图片预览、行范围跳转、side chat、Unicode 选择。
- **Claude Code**：Desktop 侧边栏筛选、文件链接与目录访问。
- **OpenCode**：长会话回滚、transcript outline、逐提交差异、远程文件下载。
- **jcode**：`/mcp`、`/theme`、frecency 文件补全、可编辑选择区。
- **pi**：Kitty 图片、scrollback 保留、footer 和 prose 宽度。

**结论：** CLI 的竞争壁垒越来越取决于上下文切换成本，而不仅是模型生成质量。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与竞争特征 |
|---|---|---|---|
| **Claude Code** | Desktop、终端、IDE、GitHub、插件、远程控制、账号与计费 | Anthropic 生态用户、Claude Pro/Max/API 用户、团队开发者 | 平台化程度高，能力广；但跨入口权限一致性和插件交付链路仍有明显缺口 |
| **OpenAI Codex** | Windows 桌面端、原生沙箱、TUI、Remote Control、浏览器控制、多模型路由 | OpenAI/ChatGPT Work 用户、跨平台开发者、企业 Windows 用户 | 兼具 Rust 核心、TUI 和桌面端，产品化速度快；当前短板是平台回归和沙箱成熟度 |
| **Gemini CLI** | 子代理、Browser Agent、ACP、Web Search、检索与工具治理 | 多代理开发者、自动化与研究型用户、Google Cloud 生态用户 | 强调 Agent 编排和 ACP 协议；正在系统修复超时、状态传播和配置契约 |
| **Copilot CLI** | GitHub 仓库、Agent/MCP、企业代理、沙箱、ACP/SDK | GitHub Copilot 用户、Enterprise 客户、CI/远程环境用户 | GitHub 原生生态和企业策略导向明显；版本交付快，但大型会话、凭据及跨平台沙箱问题突出 |
| **OpenCode** | 插件、Skills、MCP、多模型、桌面端、自动化、远程工作区 | 高度可定制的个人开发者、开源用户、平台嵌入者 | V2 平台化路线明显，扩展能力激进；当前核心挑战是初始化确定性、无人值守和长上下文可靠性 |
| **jcode** | TUI、Swarm、Memory sidecar、附件、Provider 兼容、主题/MCP 管理 | 重视交互、模型可控性和本地多模型的个人开发者 | Rust 实现、配置驱动、功能迭代快；但工程基础薄弱，CI 红灯及测试债务影响交付可信度 |
| **pi** | Durable 后台任务、Provider/扩展 SDK、MCP、多模态、嵌入式会话 | 构建长期运行 Agent 平台的开发者、SDK 集成方 | 偏底层 Agent Runtime，强调可嵌入、可扩展和生命周期语义；模型协议细节和资源释放是其主要专业壁垒 |
| **Kimi Code CLI** | 当日无足够公开信号 | 暂无法可靠判断 | 当前主要风险是社区可见度和产品反馈信号不足，需要更多连续数据后再评估 |

### 定位结论

- **最平台化**：Claude Code、Codex、Copilot CLI。
- **最偏多代理/自动化协议**：Gemini CLI。
- **最偏可编程扩展与开放模型**：OpenCode、pi。
- **最重 TUI 与本地交互定制**：jcode。
- **最需要先验证工程稳定性**：jcode；最需要验证跨平台一致性：Codex 与 Copilot CLI。

---

## 5. 社区热度与成熟度

### 社区热度

#### 第一梯队：OpenCode、Codex

- OpenCode 免费额度汇总 Issue 达 **413 条评论**，并同时存在 **10 个重点 PR**，是当日最强社区动员信号。
- Codex 热点集中在 Windows、沙箱和 TUI，**10 个热点 Issue + 10 个重点 PR**，兼具用户影响面和开发吞吐。

#### 第二梯队：Claude Code、Gemini CLI、Copilot CLI、pi

- Claude Code 的多账号需求 Issue 有 **259 条评论、1114 个赞**，是所有条目中最高热度；说明身份管理与团队场景诉求非常集中。
- Gemini CLI 热点不仅关注缺陷，也形成围绕 ACP、Agent 超时和工具治理的系统性修复，开发者参与深度较高。
- Copilot CLI 热点 Issue 多为新问题、评论较少，但连续三个版本快速修复，表明维护团队发布节奏紧凑。
- pi 的热点评论量不算最高，但 PR 数量多、技术密度高，属于工程师驱动型社区。

#### 观察期：jcode

- 热点数量和 PR 数量都很高，但大量讨论围绕自身 CI、格式、Clippy、安全告警和测试失败。
- 说明社区反馈活跃，但项目质量门禁尚未稳定，活跃度不能直接等同于成熟度。

#### 低活跃/静默：Kimi Code CLI

- 当日无 Issue、PR、Release 信号。
- 单日不足以判断长期健康度，但相较其他工具，公开社区可见度明显偏低。

### 成熟度判断

| 成熟度层级 | 工具 | 判断 |
|---|---|---|
| **平台能力较成熟，但稳定性承压** | Codex、Claude Code、Copilot CLI | 功能面、用户量和集成深度领先；主要风险集中在更新回归、沙箱和企业环境一致性 |
| **快速迭代、工程体系追赶中** | Gemini CLI | ACP 与 Agent 能力方向清晰，修复活跃；状态语义、配置契约和跨环境稳定性仍需收敛 |
| **高扩展性但工程债务明显** | OpenCode | 创新速度最快，生态野心强；MCP 初始化、快照、缓存、无人值守等基础问题尚未完全稳定 |
| **功能快速增长，质量门禁不稳** | jcode | TUI 功能有特色，但 CI、测试隔离和锁顺序问题使其暂时不适合被视为成熟生产工具 |
| **专业化 Runtime 方向，生态尚在形成** | pi | Durable、SDK、协议抽象有潜力；Provider 路由、重放、内存释放和 MCP 生态仍需时间验证 |
| **信号不足** | Kimi Code CLI | 需连续观察发布频率、Issue 响应与生态活跃度 |

---

## 6. 值得关注的趋势信号

### 信号一：沙箱兼容性成为下一阶段主战场

多个项目同时暴露 Git、Cypress、`rg`、凭据、PATH 和子进程问题。这意味着竞争将从“有没有审批和隔离”转向：

- 沙箱内能否运行真实项目构建；
- 凭据如何安全继承；
- 网络和私有仓库如何访问；
- 沙箱失败时能否提供明确诊断和降级路径。

**对开发者的建议：** 选型测试不要只验证读写文件，应至少覆盖 Git HTTPS、子模块、测试框架、语言服务器、浏览器测试及私有包源。

### 信号二：Agent 可观测性从日志升级为结构化状态

命令不可见、通知丢失、退出原因模糊、stderr 为空、终止状态误报为成功——这些问题共同表明，Agent 平台需要机器可判定的状态模型。

**建议：** 工具应统一暴露 task、tool call、notification、approval、retry、usage、termination reason 等结构化事件，CI 和第三方客户端不应依赖解析终端文本。

### 信号三：模型能力正在被“工程语义”重新定价

模型路由错误、参数不兼容、重放字段丢失、缓存失效、额度统计异常，都会让更强模型在实际工作流中表现为不稳定或昂贵。

**建议：** 评估模型时同时测量长任务完成率、恢复能力、缓存命中率、工具参数兼容性及重试成本，而不仅是首 token 延迟和基准分数。

### 信号四：MCP 生态进入“基础设施化”阶段

授权隔离、服务注册、OAuth、JSON Schema、instructions 保留、并发审批和生命周期清理，正在取代“是否支持 MCP”成为主要议题。

**建议：** 企业接入应把 MCP 服务视为分布式依赖管理问题，纳入凭据轮换、权限最小化、版本锁定、健康检查和审计。

### 信号五：多代理系统需要统一的任务状态机

多个工具都暴露了子代理误报成功、挂起、锁冲突、上下文压缩失败和后台任务清理问题。

**建议：** 编排层应强制区分 `SUCCESS`、`MAX_TURNS`、`TIMEOUT`、`CANCELLED`、`BLOCKED` 和 `FAILED`，并要求子代理传递完整轨迹、截断标记及终止原因。

### 信号六：CLI 正在成为多端 Agent 工作台

Codex、Claude Code 和 OpenCode 都在强化桌面端；Codex/OpenCode/jcode/pi 同时提升 TUI 导航、Diff、图片、主题和文件跳转。这表明 CLI 已不再是单一终端程序，而是跨终端、桌面、Web、IDE 和远程控制的产品入口。

**建议：** 评估工具时应分别考察 TUI、桌面端、IDE 和自动化接口，避免只依据其中一种终端体验做结论。

### 信号七：安全策略需要兼顾误报率与可配置性

Claude Code 的推理保护误伤、Gemini CLI 的破坏性命令风险、jcode 的硬编码风险门控、Copilot CLI 的权限范围扩大，体现出安全系统正在从“默认拦截一切”转向可解释、可配置、按上下文判断。

**建议：** 高风险行为应采用分层策略：只读提示、用户确认、组织策略禁止，并为误报提供可审计的覆盖机制。

---

## 决策建议

- **追求成熟平台与多入口体验**：优先评估 Codex、Claude Code，但需针对 Windows、沙箱和权限模型做专项验证。
- **深度使用 GitHub 企业生态**：选择 Copilot CLI，同时验证大型会话、Cypress、Git 子模块、凭据管理及企业代理兼容性。
- **构建多代理或 ACP 自动化**：Gemini CLI 值得重点跟踪；当前应避免依赖不完整的成功状态，并建立外层超时和任务监控。
- **需要高度可定制的多模型客户端**：OpenCode 的创新和扩展性突出，但应避免将其直接作为关键 CI 的唯一依赖，需锁定版本并建立回归测试。
- **构建嵌入式、后台 Durable Agent Runtime**：pi 的方向最具平台潜力，值得早期参与，但要关注 Provider 路由、缓存重放和会话删除语义。
- **偏好纯 TUI 与细粒度本地配置**：jcode 功能体验有吸引力，但应等待 CI 与测试债务明显收敛后再用于关键生产流程。
- **Kimi Code CLI**：当前数据不足，建议继续观察其发布节奏、Issue 响应和第三方集成活跃度。

**总体结论：** AI CLI 的下一轮竞争不会主要围绕“谁接入了更多模型”，而会围绕**谁能让 Agent 在真实权限、真实沙箱、真实长任务和真实企业网络中，以可解释、可恢复、可自动化的方式稳定完成工作**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-11-27**  
**说明：** 当前 PR 列表中的“评论数”均显示为 `undefined`，无法直接按讨论热度排序。以下排行结合 PR 热度信号、修复/提案涉及的基础 Skill 覆盖面及近期活跃度综合判断。Issue 排名则依据评论数。

---

## 1. 热门 Skills 排行

### 1. `skill-creator`
- **相关 PR：**
  - [#1298：隔离触发评估并处理 Windows 与运行时失败](https://github.com/anthropics/skills/pull/1298)
  - [#1681：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681)
  - [#1997：正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997)
- **功能：** 创建、评估、优化和打包 Skill 的元工具。
- **社区热点：**
  - 触发评估存在漏判、串扰和错误评分问题。
  - Windows 子进程兼容性不足。
  - YAML 描述、引号和转义解析与真实 frontmatter 不一致。
  - 打包脚本不能稳定地独立执行。
- **关注依据：** 多个相关 Issue 位于社区热榜，包括 [run_eval 触发率为 0](https://github.com/anthropics/skills/issues/556)、[并行 Worker 导致系统性误判](https://github.com/anthropics/skills/issues/1352)。
- **当前状态：** 3 个相关 PR 均为 **Open**。

### 2. `webapp-testing`
- **相关 PR：**
  - [#1980：移除 `with_server.py` 中的 `shell=True`](https://github.com/anthropics/skills/pull/1980)
  - [#1976：修正 textarea 与 select 的元素报告](https://github.com/anthropics/skills/pull/1976)
- **功能：** 启动本地 Web 应用、自动操作页面、执行交互测试并收集界面证据。
- **社区热点：**
  - Shell 命令拼接带来命令注入风险。
  - 元素发现对 `textarea`、`select` 等控件识别不准确。
  - 测试结果的可信度和安全性受到关注。
- **当前状态：** 2 个相关 PR 均为 **Open**。

### 3. `docx`
- **相关 PR：**
  - [#1792：LibreOffice 超时改为错误并验证输出](https://github.com/anthropics/skills/pull/1792)
  - [#1734：检测孤立的 DOCX 批注](https://github.com/anthropics/skills/pull/1734)
- **相关 Issue：**
  - [#2018：`merge_runs.py` 丢失命名空间并生成无效 XML](https://github.com/anthropics/skills/issues/2018)
- **功能：** 创建、编辑、校验和跟踪 Microsoft Word 文档，包括修订模式与批注处理。
- **社区热点：**
  - 工具曾把超时或无效结果误报为成功。
  - 修订标记、孤立批注和 XML 命名空间完整性成为核心验收点。
  - 社区希望 Skill 不仅“生成文档”，还要提供可靠的后置验证。
- **当前状态：** 相关 PR 均为 **Open**；[#2018](https://github.com/anthropics/skills/issues/2018) 也仍开放。

### 4. `xlsx`
- **相关 PR：**
  - [#2019：修复工作表级 defined names 与外部链接别名检测](https://github.com/anthropics/skills/pull/2019)
- **功能：** 表格生成、公式计算、风险检查和外部链接审计。
- **社区热点：**
  - 外部链接可能通过工作表作用域名称或别名间接引用。
  - 旧实现容易漏报 `external_links_at_risk`。
  - 重点不只是公式正确性，还包括财务模型中的隐藏外部依赖审计。
- **当前状态：** **Open**。

### 5. `claude-api`
- **相关 PR：**
  - [#1730：替换失效文档链接](https://github.com/anthropics/skills/pull/1730)
  - [#1950：更新 Python `pause_turn` 恢复运行指南](https://github.com/anthropics/skills/pull/1950)
- **相关 Issue：**
  - [#1487：单次工具调用注入约 156K tokens，耗尽上下文](https://github.com/anthropics/skills/issues/1487)
- **功能：** 提供 Claude API、工具使用、流式处理和 SDK 运行指导。
- **社区热点：**
  - SDK 版本变化造成示例和文档过时。
  - `pause_turn` 恢复机制与旧版运行方式不一致。
  - Skill 内容过大、全量注入导致上下文压力，是高优先级体验问题。
- **当前状态：** 两个 PR 均为 **Open**；上下文问题 Issue 仍开放。

### 6. `document-typography`
- **相关 PR：**
  - [#514：新增文档排版质量控制 Skill](https://github.com/anthropics/skills/pull/514)
- **功能：** 检查 AI 生成文档中的孤行、寡行、标题悬挂和编号错位等排版问题。
- **社区讨论热点：**
  - 这是跨文档类型的通用质量层，而非单一格式转换工具。
  - 价值在于将“视觉上不专业”转化为可自动检测、可验证的规则。
  - 与 `docx`、`pptx` 等生成类 Skill 有明显的互补关系。
- **当前状态：** **Open**；自 2026-03 创建后仍有较强长期提案价值，但近期社区讨论度相对有限。

### 7. `md2video-audio`
- **相关 PR：**
  - [#1703：新增 Markdown 转视频与配音 Skill](https://github.com/anthropics/skills/pull/1703)
- **功能：** 将 Markdown 转换为演示幻灯片、语音旁白及 MP4 视频，主打零额外 API 成本。
- **社区讨论热点：**
  - 属于“文档 → 多媒体内容”的工作流自动化方向。
  - 本地 TTS、幻灯片渲染和视频合成的可重复性是落地关键。
  - 同一 Markdown 能否稳定生成专业级旁白和成片，是主要质量门槛。
- **当前状态：** **Open**。

### 8. `notion-spec-to-implementation` / `quantitative-resume-auditor`
- **相关 PR：**
  - [#1245：新增规格转实现与量化简历审计 Skills](https://github.com/anthropics/skills/pull/1245)
- **功能：**
  - 将产品或技术规格拆解为 Notion 任务、验收标准和进度跟踪。
  - 量化分析简历内容并提供审计结果。
- **社区讨论热点：**
  - 反映社区对“规格驱动执行”和垂直行业审计 Skill 的需求。
  - 具备较强业务场景吸引力，但缺乏对应的热 Issue 佐证，实际采用反馈尚不充分。
- **当前状态：** **Open**。

---

## 2. 社区需求趋势

### 2.1 企业级共享、分发与生命周期管理
- [#228：支持 Claude.ai 组织级 Skill 共享](https://github.com/anthropics/skills/issues/228) 是社区高热度需求之一。
- 当前主要痛点仍是下载 `.skill` 文件、通过 Slack/Teams 转发并手动上传。
- 社区期待：
  - 组织级 Skill 库；
  - 分享链接与权限控制；
  - 版本更新和撤回机制；
  - 团队统一维护能力。

### 2.2 Skill 的可信来源与安全边界
- [#492：社区 Skill 使用 `anthropic/` 命名空间造成信任边界滥用](https://github.com/anthropics/skills/issues/492) 位列 Issue 热榜第一。
- 社区期待官方建立清晰的发布者身份、签名、来源和权限标识，避免第三方 Skill 冒充官方能力。
- 这与 `webapp-testing` 的命令注入修复共同表明，**Skill 供应链安全**正成为生态级核心议题。

### 2.3 代码审查、验证与交付质量门禁
- [#1385：提出“校准 → 对抗式审查 → 交付验证”三阶段质量门禁](https://github.com/anthropics/skills/issues/1385) 获得较高关注。
- 社区希望 Skill 不只是生成代码，而是形成完整验证闭环：
  - 执行前明确任务和验收标准；
  - 交付前进行独立或对抗式审查；
  - 对测试、构建和产物进行最终验证。
- 这与近期大量修复 PR 的共同趋势一致：从“能运行”升级为“结果可信”。

### 2.4 测试生成、自动化验证与测试基础设施
- `webapp-testing`、`skill-creator` 和 `docx` 的热门修复都集中在验证能力：
  - 浏览器交互测试；
  - Skill 触发率评估；
  - 文档修订与输出检查。
- 社区期待更多面向具体技术栈的测试生成、回归执行、失败诊断和证据收集 Skill。

### 2.5 文档、表格与演示内容的自动化生产链
- `docx`、`xlsx`、`document-typography` 和 `md2video-audio` 共同构成明显的文档自动化方向。
- 需求已从“生成一份文档”扩展到：
  - 内容结构化；
  - 格式与排版质检；
  - 外部链接和公式风险审计；
  - 多媒体再加工；
  - 输出文件的后置验证。

### 2.6 长期运行 Agent 的记忆与状态压缩
- [#1329：提出 `compact-memory`，用符号化表示压缩 Agent 状态](https://github.com/anthropics/skills/issues/1329) 获得较高讨论度。
- 社区关注点包括：
  - 减少持久化笔记造成的上下文消耗；
  - 用结构化、紧凑格式保存任务状态；
  - 在长会话中维持可检索、可更新的记忆。

### 2.7 Skill 描述触发机制与评估基础设施
- [#556：`run_eval.py` 对所有查询均出现 0% 触发率](https://github.com/anthropics/skills/issues/556)
- [#1352：并行 Worker 交叉匹配 UUID，产生系统性假阴性](https://github.com/anthropics/skills/issues/1352)
- [#2064：`theme-factory` 描述没有说明何时使用](https://github.com/anthropics/skills/issues/2064)
- 社区正在从“写 description”转向更系统的触发工程：可复现评估、并行隔离、负例设计、跨平台兼容和描述语义优化。

### 2.8 垂直领域与专业审计 Skill
- `quantitative-resume-auditor`、智能合约审计、SCNet HPC 等提案表明，社区希望获得更垂直的专家 Skill：
  - Web3 合约静态分析和证明；
  - 简历与职业数据量化审计；
  - HPC 集群、Slurm 和远程计算运维。
- 需求方向明确，但落地关键在于外部工具链、权限和结果可复现性。

---

## 3. 高潜力待合并 Skills

### 第一梯队：基础能力或安全修复
1. **[#1980：`webapp-testing` 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980)**  
   直接修复命令注入风险，安全影响明确，合并优先级高。

2. **[#1792：`docx` 超时报告与修订验证](https://github.com/anthropics/skills/pull/1792)**  
   防止无效 DOCX 被误报为成功，直接提高生成工具可信度。

3. **[#1997：正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997)**  
   修复评估与优化流程读取错误元数据的基础问题。

4. **[#2019：修复 XLSX 外部链接风险漏报](https://github.com/anthropics/skills/pull/2019)**  
   对财务和数据分析场景尤其重要，修复目标明确。

5. **[#1681：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681)**  
   提升 Skill 打包工具链的可用性，变更范围较小。

### 第二梯队：触发评估与工作流增强
6. **[#1298：隔离 Skill 触发评估并处理 Windows/运行时失败](https://github.com/anthropics/skills/pull/1298)**  
   对应社区高热度问题 [#556](https://github.com/anthropics/skills/issues/556) 和 [#1352](https://github.com/anthropics/skills/issues/1352)，落地价值高，但需重点验证并发隔离和兼容性。

7. **[#1975：提前拒绝无效 PPTX 缩略图列数](https://github.com/anthropics/skills/pull/1975)**  
   属于低成本、低风险体验修复。

8. **[#1976：修正 textarea/select 元素发现](https://github.com/anthropics/skills/pull/1976)**  
   提升浏览器测试结果准确性，适合快速合并。

9. **[#1950：更新 Python `pause_turn` 运行指南](https://github.com/anthropics/skills/pull/1950)**  
   能减少用户按过时方式实现外层重启循环。

### 较具增长潜力、但需更多验证
10. **[#1245：Notion 规格转实现及量化简历审计](https://github.com/anthropics/skills/pull/1245)**  
    场景明确，但应拆分评估两个 Skill 的边界、依赖及测试质量。

11. **[#1703：Markdown 转视频与音频](https://github.com/anthropics/skills/pull/1703)**  
    多模态自动化潜力大，但需验证 TTS 质量、跨平台依赖和成片一致性。

12. **[#1615：SCNet HPC Skill](https://github.com/anthropics/skills/pull/1615)**  
    专业场景价值突出，但依赖真实集群和 Slurm 环境，较难在通用 CI 中完整验证。

13. **[#1771：智能合约审计 Skill](https://github.com/anthropics/skills/pull/1771)**  
    Web3 场景差异化明显，但涉及外部协议、链上写入和较高信任风险，需要更严格审查。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求，是把 Skills 从“能生成内容的提示词模板”升级为可共享、可验证、可度量并具有可信安全边界的生产级 Agent 工作流。**

具体表现为四条主线：**企业分发与版本治理、官方/社区来源可信度、安全与结果验证、触发评估与交付质量门禁**。与此同时，文档、表格、测试、多媒体和垂直行业 Skill 仍在快速扩张。

---

# Claude Code 社区动态日报｜2026-11-27

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在 **Claude Desktop 权限与文件访问、多账号管理、插件自动同步、Windows/WSL 稳定性以及用量计费透明度**。GitHub 集成、定时任务和云端会话连续性也出现多项新反馈；维护侧则推进了避免误将可复现或高影响 Issue 标记为 stale 的治理改进。

## 社区热点 Issues

### 1. Claude Desktop 缺少多账号与快捷切换能力
[#18435](https://github.com/anthropics/claude-code/issues/18435)｜**增强请求｜Open｜259 评论｜1114 👍**

社区呼声最高的功能诉求之一。用户希望在 Desktop 中集中管理多个 Claude 账号，并快速切换个人、工作或不同订阅身份。评论数和点赞数均居今日首位，反映出账号并行使用已成为高频工作流，当前能力与需求之间存在明显缺口。

### 2. WSL 环境下 Claude Code 长时间卡死或冻结
[#26224](https://github.com/anthropics/claude-code/issues/26224)｜**Bug｜Open｜135 评论｜152 👍**

报告称 Claude Code 在 WSL 中可能对大量提示卡住 5–20 分钟甚至更久。该问题直接影响交互连续性和开发效率，评论量位列第二。由于症状与具体触发条件可能涉及终端、权限、模型或网络链路，排查成本较高。

### 3. Desktop 无法打开 `additionalDirectories` 下的文件链接
[#94446](https://github.com/anthropics/claude-code/issues/94446)｜**Bug｜已有复现｜8 评论｜6 👍**

助手输出中的 Markdown 文件链接虽然可点击，但文件查看器仅能打开会话主工作目录内的文件；通过 `--add-dir` 或 `additionalDirectories` 添加的目录会被拒绝。这暴露出 Desktop 的文件访问模型与终端权限配置之间存在不一致。

### 4. 推理保护机制误伤正常开发请求
[#111336](https://github.com/anthropics/claude-code/issues/111336)｜**Bug｜疑似重复｜7 评论｜1 👍**

用户报告 `reasoning_extraction` safeguard 在普通软件开发任务中产生误报，并称多个模型在约一周内累计阻断 78 次请求。问题虽被标为 duplicate，但反映出安全拦截若缺少上下文识别，可能明显破坏日常编码效率，应关注官方去重与修复状态。

### 5. Desktop 打开工作目录外文件的回归问题
[#73338](https://github.com/anthropics/claude-code/issues/73338)｜**回归 Bug｜已有复现｜7 评论｜13 👍**

更新后，Desktop 不再直接打开仓库外文件，而是提示“文件位于工作目录之外”并要求转到 Finder。该问题与此前的 `additionalDirectories` 文件访问故障形成互补，说明工作目录边界是 Desktop 文件查看器当前的高频痛点。

### 6. 插件市场“自动同步”不会在仓库 push 后触发
[#93825](https://github.com/anthropics/claude-code/issues/93825)｜**Bug｜已有复现｜6 评论｜6 👍**

账户级插件市场开启自动同步后，GitHub 仓库 push 并不会推动已同步提交前进，只有手动执行“检查更新”才生效。问题直接影响私有插件和技能包的持续交付，也使开关状态与实际同步行为不一致。

### 7. 个人 GitHub 仓库无法创建自动同步 Webhook
[#95456](https://github.com/anthropics/claude-code/issues/95456)｜**Bug｜已有复现｜5 评论｜4 👍**

尽管 GitHub App 权限配置正确，个人仓库市场开启“Sync automatically”后仍不会创建 Webhook，而组织仓库可能不受影响。该问题可能是上一条自动同步故障的重要底层原因，尤其值得团队插件维护者关注。

### 8. 5 小时用量额度重置后立即跳至 100%
[#112477](https://github.com/anthropics/claude-code/issues/112477)｜**回归 Bug｜4 评论｜0 👍**

v2.1.332 用户称 5 小时额度在重置后或仅发送一个提示后，便从 0% 跳到 100%。该回归会直接影响用户对剩余额度、任务连续性及成本控制的判断，建议关注维护者是否已确认与版本更新相关。

### 9. Desktop 文件索引无法完整检索 `~/Documents` 下的深层文件
[#104302](https://github.com/anthropics/claude-code/issues/104302)｜**Bug｜已有复现｜2 评论｜1 👍**

macOS 下，Desktop 的 `@` 文件选择器可能遗漏位于 `~/Documents` 仓库中的深层文件；其 Git 索引流程被 macOS 隐私权限拒绝。该问题限制了 Desktop 对大型本地代码库的发现能力，与文件查看器权限问题共同构成桌面端文件访问障碍。

### 10. VS Code 扩展在重启后遗留大量 Claude 进程
[#112666](https://github.com/anthropics/claude-code/issues/112666)｜**Bug｜已有复现｜0 评论｜0 👍**

macOS 本地 VS Code 扩展在 VS Code 重启或会话恢复后，未退出的 `claude` 原生进程会被 `launchd` 接管并持续累积。报告者观察到 82 个进程占用约 16.6 GB 内存，最终触发系统内存回收机制，属于潜在的资源和稳定性风险。

## 重要 PR 进展

> 过去 24 小时仅更新 4 条 PR，以下完整列出；其中 3 条已关闭，1 条仍开放。

1. **避免将可复现或高影响 Issue 标记为 stale**  
   [#112436](https://github.com/anthropics/claude-code/pull/112436)｜**Open**  
   新的 Issue 清理流程会跳过带有 `has repro`、`reproduced`、`data-loss` 或 `high-priority` 标签的条目，避免仍有复现步骤或潜在数据损失的问题被自动关闭。  
   **重要性：** 提升 Issue 生命周期管理的可靠性，尤其适合需要官方优先处理的回归、数据安全和稳定性问题。

2. **PowerShell 默认 Shell 插件**  
   [#35761](https://github.com/anthropics/claude-code/pull/35761)｜**Closed**  
   通过 `powershell-default` 插件将 Bash 工具默认 Shell 替换为 PowerShell 7+ Preview，并通过 `SessionStart` Hook 注入 PowerShell 语法规则，支持多平台。  
   **重要性：** 探索了不修改核心代码即可替换默认 Shell 的插件化路径。PR 已关闭，暂不宜视为已合入能力。

3. **Chrome 扩展 Bridge 连接修复插件**  
   [#35684](https://github.com/anthropics/claude-code/pull/35684)｜**Closed**  
   针对启用相关实验功能后，Max 订阅用户出现 Chrome 扩展 Bridge 连接失败的问题，提供自动安装、卸载脚本，并替代此前的修复方案。  
   **重要性：** 反映浏览器远程控制链路仍是高关注集成点；当前 PR 已关闭，合入状态需等待后续信息。

4. **终端滚动到顶部回归修复插件**  
   [#35683](https://github.com/anthropics/claude-code/pull/35683)｜**Closed**  
   在同步输出块中限制累计向上移动量，使光标保持在可视区域，并提供 `Ctrl+6` 手动冻结开关。  
   **重要性：** 针对跨终端、跨平台的输出渲染回归提供插件式绕行方案，但 PR 已关闭，尚未形成官方修复。

## 功能需求趋势

### 1. 账号、身份与团队场景管理
- Desktop 多账号管理及快速切换：[#18435](https://github.com/anthropics/claude-code/issues/18435)
- Gateway 支持公网 IP：[#73415](https://github.com/anthropics/claude-code/issues/73415)
- 明确会话历史是“设备绑定”而非“账号绑定”：[#110228](https://github.com/anthropics/claude-code/issues/110228)

社区希望 Claude Code 不仅能登录多个账号，还应提供清晰、可预测的会话迁移、身份隔离与远程访问策略。

### 2. Desktop 文件访问与工程可用性
- `additionalDirectories` 文件无法直接打开：[#94446](https://github.com/anthropics/claude-code/issues/94446)
- 工作目录外文件打开能力发生回归：[#73338](https://github.com/claude-code/issues/73338)
- `@` 文件选择器遗漏深层文件：[#104302](https://github.com/anthropics/claude-code/issues/104302)

需求已经从“能否访问目录”进一步细化到文件链接、文件查看器、索引和跨目录引用能否保持一致。

### 3. 插件、脚本与工具扩展机制
- 将本地脚本和 CLI 声明为一级工具，无需 MCP：[#97219](https://github.com/anthropics/claude-code/issues/97219)
- 插件市场自动同步失效：[#93825](https://github.com/anthropics/claude-code/issues/93825)
- 个人仓库无法创建同步 Webhook：[#95456](https://github.com/anthropics/claude-code/issues/95456)
- Telegram 插件启动第二会话会终止首个 poller：[#81571](https://github.com/anthropics/claude-code/issues/81571)

社区期待插件生态具备更原生、更稳定的工具注册、发布和后台生命周期管理。

### 4. IDE、远程控制与状态可观测性
- Remote Control 状态未暴露给 `statusLine`：[#94299](https://github.com/anthropics/claude-code/issues/94299)
- Remote Control 会话的权限模式记录为空，导致本应自动批准的连接器调用仍弹出审批：[#105267](https://github.com/anthropics/claude-code/issues/105267)
- Desktop 侧边栏增加“仅显示运行中会话”筛选：[#110782](https://github.com/anthropics/claude-code/issues/110782)

开发者希望在 IDE、终端和远程控制场景中获得一致、可见、可脚本化的运行状态。

### 5. GitHub 集成与云端自动化
- 定时任务不再获得 `add_repo` 工具：[#112665](https://github.com/anthropics/claude-code/issues/112665)
- GitHub 集成已连接但 Claude Chat 无仓库访问权限：[#111601](https://github.com/anthropics/claude-code/issues/111601)
- 云端会话无法读取拥有者此前的会话：[#112644](https://github.com/anthropics/claude-code/issues/112644)

社区希望仓库授权、计划任务、会话继承和云端执行形成稳定闭环，而不是仅在界面中显示“已连接”。

### 6. 模型支持与工作流控制
- 普通开发任务被 `reasoning_extraction` 误拦截：[#111336](https://github.com/anthropics/claude-code/issues/111336)
- 发现目标外问题时，建议记录为后续事项而非继续扩大当前任务：[#112120](https://github.com/anthropics/claude-code/issues/112120)
- 1M 上下文下约 20 条用户消息内发生两次压缩：[#112664](https://github.com/anthropics/claude-code/issues/112664)

新模型接入不仅要求“能调用”，还要求安全策略准确、上下文利用高效，并支持更清晰的任务边界管理。

## 开发者关注点

1. **额度与成本必须可解释**  
   多个 Issue 指向 5 小时额度显示跳变、消耗异常和缺少成本提醒：  
   [#112477](https://github.com/anthropics/claude-code/issues/112477)、[#112557](https://github.com/anthropics/claude-code/issues/112557)、[#110655](https://github.com/anthropics/claude-code/issues/110655)。开发者希望获得按模型、时段和会话拆分的消耗数据，而不只是总用量提示。

2. **文件权限边界需要一致、可预测**  
   Desktop、TUI、Remote Control 和 `--add-dir` 之间的行为存在差异。文件能否打开、是否触发审批、是否会进入索引，应由统一的权限模型解释，而不是由所在界面决定。

3. **长时间卡死和资源泄漏直接影响生产力**  
   WSL 卡死：[#26224](https://github.com/anthropics/claude-code/issues/26224)；VS Code 进程累积：[#112666](https://github.com/anthropics/claude-code/issues/112666)。开发者尤其关注终端阻塞、后台进程回收、内存占用和失败后的自动恢复。

4. **插件自动同步的交付链路需要可信**  
   Webhook、push 触发、手动检查更新和组织/个人仓库差异，构成了插件生态的基础设施问题。若同步状态不可靠，团队难以安全依赖插件仓库进行持续发布。

5. **云端会话与 GitHub 授权需要减少“静默失效”**  
   定时任务缺少仓库工具、普通 Chat 无仓库访问、历史会话无法继承等问题，都可能只在执行阶段才暴露。开发者希望授权失败提供明确诊断，并支持可恢复操作。

6. **安全机制应避免误伤正常编码流程**  
   推理保护误拦截表明，安全策略需要区分真正的模型输出提取风险与普通开发任务，减少无提示阻断。

7. **交互细节也受到高度关注**  
   Linux TUI 中 `Ctrl+Z` 直接退出应用：[#112651](https://github.com/anthropics/claude-code/issues/112651)；全屏 TUI 在问答关闭后出现布局残留：[#112244](https://github.com/anthropics/claude-code/issues/112244)。这些问题虽不如模型和权限问题宏观，却会高频打断使用流程。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报｜2026-11-27

## 1. 今日速览

过去 24 小时社区焦点高度集中在 **Windows 桌面端稳定性与沙箱能力**：会话发送失败、权限与执行位置选择器回归、Git HTTPS 凭据异常、Remote Control TLS 故障以及应用崩溃等问题受到集中关注。与此同时，Codex 团队明显加快了 **TUI 体验完善**，围绕侧边栏、Diff、Markdown 图片、文件跳转、Unicode 搜索和终端渲染提交了一批改进。

---

## 2. 版本发布

### `rust-v0.174.0-alpha.8`

今日发布新的 Rust Alpha 版本，但 Release 信息仅标注版本号，未提供完整变更日志。建议关注后续更新，确认其与近期 TUI、桌面端及沙箱问题修复的关联。

- Release：[rust-v0.174.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.8)

---

## 3. 社区热点 Issues

### 1. Windows 更新后新会话丢失权限及执行位置选择器

11 月 21 日更新后，新建 ChatGPT Work 会话不再显示权限和执行位置选择器，Max reasoning effort 也从界面消失。该问题直接涉及核心配置入口，可能影响用户对沙箱模式、运行位置和推理强度的判断，是今日影响范围最广的回归之一。

- Issue：[#62943](https://github.com/openai/codex/issues/62943)
- 社区反应：40 条评论、20 个赞

### 2. Windows 集成 PowerShell 无法执行内置 `rg`

Codex Desktop 的 `rg` 能从 PATH 正确解析到应用包目录，但实际调用会报 `Access Denied`。这表明应用打包目录的执行权限、PowerShell 集成环境与路径解析之间存在冲突，会影响代码搜索及依赖 `rg` 的代理工作流。

- Issue：[#13542](https://github.com/openai/codex/issues/13542)
- 社区反应：38 条评论、28 个赞

### 3. Windows 新建 Work 会话无法发送消息

新建线程中的发送按钮持续禁用，用户无法开始任务。该问题直接影响 Codex Desktop 的基本可用性，且与近期 Windows 新会话回归问题具有较强关联。

- Issue：[#54564](https://github.com/openai/codex/issues/54564)
- 社区反应：34 条评论

### 4. Windows 原生沙箱中的 Git HTTPS 远程操作失败

普通 PowerShell 中 Git HTTPS 操作正常，但在 Codex 原生 Windows 沙箱内失败或崩溃；本地 `status`、`diff`、`add`、`commit` 等命令则可正常工作。问题指向沙箱下的网络、凭据或进程环境差异，是远程仓库开发链路的关键阻塞点。

- Issue：[#31073](https://github.com/openai/codex/issues/31073)
- 社区反应：32 条评论

### 5. GPT-6.1 Sol 用量消耗速度显著加快

用户报告 GPT-6.1 Sol 的五小时额度消耗速度远高于此前。由于问题直接关联模型计费与额度信任，社区需要更透明的消耗说明，以及区分模型调用、token 消耗和重试行为的可观测数据。

- Issue：[#60530](https://github.com/openai/codex/issues/60530)
- 社区反应：21 条评论

### 6. ChatGPT Dot 可读取 Codex 对话，却无法转发消息

ChatGPT Dot 能够读取 Codex 项目聊天，却无法向已有会话或桌面端新建会话发送消息。这表明跨端集成可能只完成了读取链路，消息发送、权限确认和会话恢复仍存在协议或状态同步缺口。

- Issue：[#61670](https://github.com/openai/codex/issues/61670)
- 社区反应：19 条评论、3 个赞

### 7. 桌面端不再显示正在运行的命令

用户无法看到 Agent 实际执行的命令，削弱了对执行过程的可见性与审计能力。对于涉及代码修改、文件访问或命令执行的自动化代理而言，透明展示运行命令属于重要的信任与安全基础。

- Issue：[#37213](https://github.com/openai/codex/issues/37213)
- 社区反应：14 条评论、45 个赞

### 8. GPT-6.2 Astra 与 Sol 出现执行可靠性回退

用户称新模型在多个原本正常的应用中表现变差，包括执行不稳定、任务中断和需要更多人工监督。该问题使“支持新模型”不仅是模型能力升级，也涉及行为一致性、长任务完成率和回退策略。

- Issue：[#63466](https://github.com/openai/codex/issues/63466)
- 社区反应：12 条评论、6 个赞

### 9. Windows Remote Control 的 WebSocket TLS 验证失败

设备注册成功后，Remote Control 仍因 `UNABLE_TO_VERIFY_LEAF_SIGNATURE` 无法建立 WebSocket 连接。可能涉及证书链、代理环境或 TLS 拦截场景，阻碍远程控制和跨设备代理使用。

- Issue：[#44091](https://github.com/openai/codex/issues/44091)
- 社区反应：11 条评论

### 10. Codex CLI 在 macOS 无法连接 Chrome

Codex CLI 0.172.0 在 macOS 上反复提示 browser access host 不可用，导致浏览器自动化不可用。该问题破坏了 CLI 的 computer-use 和 browser 工作流，也提示浏览器访问组件的启动、握手或版本兼容仍不稳定。

- Issue：[#63724](https://github.com/openai/codex/issues/63724)
- 社区反应：9 条评论、3 个赞

---

## 4. 重要 PR 进展

> 下列 PR 均显示为 `CLOSED`，合并状态在所给数据中无法确认；以下按内容影响整理。

### 1. 后台解析 Command Center worktree 分组

先按会话保存的工作目录立即分组，再在后台执行 Git 查询，避免慢速或无响应的文件系统挂载阻塞 Command Center。该改动直接改善大型仓库、挂载盘和多 worktree 场景下的响应速度。

- PR：[#64259](https://github.com/openai/codex/pull/64259)

### 2. 在 TUI 侧边栏中打开 `/diff`

当侧边栏可用时，以只读 Diff 标签打开差异视图，使工作区变更可与会话并排查看；无侧边栏时回退到全屏分页器。这提升了代码审查流程的上下文连续性。

- PR：[#64258](https://github.com/openai/codex/pull/64258)

### 3. 关闭动画后保持 TUI 状态计时器更新

修复禁用动画时标准耗时计时器不主动请求重绘的问题，避免时间显示停滞到下一次事件触发。该修复兼顾可访问性、低资源环境与状态准确性。

- PR：[#64256](https://github.com/openai/codex/pull/64256)

### 4. 在 TUI 回复中内联渲染本地 Markdown 图片

助手回复中的 Markdown 图片此前只显示替代文本；新改动将在受支持终端中直接显示预览，减少打开文件查看图片的额外步骤。

- PR：[#64254](https://github.com/openai/codex/pull/64254)

### 5. 使用 workspace 快捷键恢复隐藏侧边栏

修复侧边栏隐藏后再次按下快捷键无法恢复的问题。改动让默认快捷键能够恢复原侧边栏内容并显示恢复提示。

- PR：[#64253](https://github.com/openai/codex/pull/64253)

### 6. TUI 恢复时清理陈旧的 turn 与 review 状态

持久化历史可能把已停止任务继续显示为进行中，崩溃中断的 review 也可能因缺少退出事件而残留。新逻辑在恢复会话时重新校正这些状态。

- PR：[#64236](https://github.com/openai/codex/pull/64236)

### 7. 修复 TUI 中 `fd` 搜索摘要

`fd -Hd 1 . path` 等命令中的深度参数可能被误认为搜索词或目录，导致探索摘要失真。修复后支持跳过相关选项值，摘要更准确。

- PR：[#64235](https://github.com/openai/codex/pull/64235)

### 8. TUI 文件链接支持行范围跳转

新增对 `src/search.ts:42-44` 和 `src/search.ts#L42-L44` 的识别，可从 Markdown 链接或普通文本打开并高亮指定代码范围，提升大型文件中的导航效率。

- PR：[#64211](https://github.com/openai/codex/pull/64211)

### 9. TUI scrollback 模式支持保存和切换 side chat

此前 scrollback 模式可以切换到实时 side chat，却不能保存或在恢复父会话后重新打开。改动补齐了 side chat 的保存与循环切换流程。

- PR：[#64207](https://github.com/openai/codex/pull/64207)

### 10. 支持 Wayland 会话的 PRIMARY 选择

此前检测到 `WAYLAND_DISPLAY` 后会禁用 PRIMARY，导致 Wayland 用户无法发布或通过中键粘贴 PRIMARY 选择内容。改动通过后台探测支持情况，恢复标准选择行为。

- PR：[#64192](https://github.com/openai/codex/pull/64192)

---

## 5. 功能需求趋势

### Windows 与沙箱可靠性

Windows 相关反馈在热点 Issues 中占比最高，核心需求包括：

- 权限、执行位置和模型推理强度选择器稳定可见；
- 原生沙箱内完整支持 Git HTTPS、私有仓库和凭据继承；
- 内置工具可从集成 PowerShell 正常执行；
- Windows 桌面端避免 React/Electron 路由崩溃；
- 明确区分普通沙箱与提权沙箱的凭据能力。

代表 Issues：[#62943](https://github.com/openai/codex/issues/62943)、[#31073](https://github.com/openai/codex/issues/31073)、[#13542](https://github.com/openai/codex/issues/13542)、[#42621](https://github.com/openai/codex/issues/42621)

### 模型支持与行为一致性

GPT-6.1 Sol、GPT-6.2 Astra 与 Sol 的反馈集中于：

- 长任务能否持续完成，而不是在中途无故终止；
- 新旧版本行为是否一致；
- 额度消耗是否可解释；
- 新模型是否正确出现在使用量统计中；
- Work/Chat 等模式之间是否采用一致的容量和路由策略。

代表 Issues：[#63466](https://github.com/openai/codex/issues/63466)、[#49390](https://github.com/openai/codex/issues/49390)、[#60530](https://github.com/openai/codex/issues/60530)、[#62442](https://github.com/openai/codex/issues/62442)

### TUI 可读性与代码导航

TUI PR 呈现清晰的体验完善方向：

- Diff 与对话并排查看；
- Markdown 图片直接预览；
- 文件及行范围快速跳转；
- side chat 保存与恢复；
- Unicode 文件名高亮；
- 更准确的命令、计时器和历史状态显示。

代表 PR：[#64258](https://github.com/openai/codex/pull/64258)、[#64254](https://github.com/openai/codex/pull/64254)、[#64211](https://github.com/openai/codex/pull/64211)

### 浏览器与跨端控制

社区持续关注 CLI 浏览器自动化、Remote Control 和 ChatGPT Dot 消息桥接，需求集中在：

- browser access host 稳定启动；
- Chrome 连接在版本更新后保持兼容；
- 跨设备 TLS 和代理环境兼容；
- Dot 不仅能读取 Codex 会话，还能可靠发送消息。

代表 Issues：[#63724](https://github.com/openai/codex/issues/63724)、[#44091](https://github.com/openai/codex/issues/44091)、[#61670](https://github.com/openai/codex/issues/61670)

### IDE 与扩展集成

VS Code 扩展反馈端权限校验失败，说明桌面端、Web 和 IDE 扩展之间仍存在认证与权限实现差异。后续应关注扩展侧认证流程的一致性及错误降级。

- Issue：[#56318](https://github.com/openai/codex/issues/56318)

### 可扩展远程执行

社区希望把现有的 `app-server`、exec-server、EnvironmentManager 和历史恢复 API 组合成可扩展的远程执行架构，统一任务生命周期、事件流和错误协议。

- Issue：[#23854](https://github.com/openai/codex/issues/23854)

---

## 6. 开发者关注点

1. **执行可见性不足**  
   用户希望持续看到实际运行的命令、工具调用、输出和中间状态。目前显示缺失或状态停留会降低对代理行为的信任。

2. **长任务完成率与中断恢复**  
   多步骤实现任务经常在中间步骤后终止；开发者期待更可靠的继续执行、明确的终止原因，以及从崩溃或重启后恢复上下文。

3. **沙箱不能等同普通本地环境**  
   Git HTTPS、私有仓库凭据和 `rg` 等工具在沙箱内失败，是最具生产影响的问题之一。沙箱需要更接近真实开发环境的网络、PATH、凭据和进程语义。

4. **Windows 桌面端回归频繁**  
   新会话控件消失、发送按钮禁用、路由崩溃和性能下降集中在 Windows 平台，Windows 应成为桌面端发布验证的重点环境。

5. **模型选择与用量透明度不足**  
   用户关注新模型是否可用、容量路由是否一致、使用量统计是否准确，以及额度为何快速消耗。社区期待更细粒度的 usage breakdown 和行为变更说明。

6. **TUI 已从“可执行”转向“可高效工作”**  
   当前需求不再只是增加命令或模型，而是降低上下文切换成本：Diff、图片、行号跳转、side chat、历史恢复和终端选择支持都在改善工作流连续性。

7. **远程与跨端能力需要统一协议层**  
   Remote Control、Dot、浏览器控制和远程执行分别暴露连接及状态同步问题。统一会话状态、认证、事件流和错误恢复机制将是下一阶段重点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-27**  
**数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

## 今日速览

今日没有新版本发布，开发者关注主要集中在 **Agent 稳定性与可控性**：子代理错误终止、挂起、配置未生效，以及危险命令和临时文件残留等问题成为讨论焦点。与此同时，ACP 非交互模式、工具超时、检索输出限流及 Web Search 卡死等修复正在推进，显示社区正集中完善 CLI 在自动化和长时间任务中的可靠性。

## 社区热点 Issues

1. **子代理达到 `MAX_TURNS` 后仍被报告为成功**  
   `codebase_investigator` 在达到最大轮次、尚未完成分析时仍返回 `success / GOAL`，可能让上层代理误判任务已经完成。该问题直接影响子代理编排和自动化工作流的可信度，共有 14 条评论。  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **Generalist Agent 执行简单任务时永久挂起**  
   即使只是创建目录，Generalist Agent 也可能一直不返回；禁用子代理后问题消失。该 P1 问题获得 8 个点赞和 8 条评论，是今日关注度最高的实际可用性故障之一。  
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等覆盖项**  
   Agent 注册阶段虽然合并了设置，但 Browser Agent 实际运行时没有应用这些配置，导致用户无法可靠限制轮次或调整行为。  
   [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

4. **Browser Agent 在 Wayland 环境下失败**  
   Browser 子代理在 Wayland 会话中无法正常工作，但最终仍显示“GOAL”终止，形成误导性成功状态，进一步暴露浏览器代理的兼容性和错误传播问题。  
   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

5. **Browser Agent 遇到浏览器配置锁时缺少恢复能力**  
   当前采用 fail-fast 策略：持久化会话被已有实例或孤儿进程占用时直接失败。社区希望增加会话接管、锁检测和自动恢复，降低自动化浏览器任务的中断率。  
   [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

6. **工具数量过多时触发 HTTP 400**  
   当环境中可用工具超过一定规模后，Gemini CLI 会因请求过大或工具定义过多而失败。Issue 标题写明“超过 128 个工具”，摘要则提到“超过 400 个工具”，具体触发边界仍待确认，但已暴露工具注册和动态裁剪机制的不足。  
   [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

7. **Agent 经常在随机目录创建临时脚本**  
   在限制原生文件工具、仅允许 Shell 执行时，模型会通过生成脚本完成编辑，造成工作区污染和后续清理成本。该问题反映工具限制会改变模型行为，却缺少稳定的临时文件约定。  
   [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

8. **Agent 可能执行破坏性 Git 或数据库操作**  
   在复杂 Git 操作和资源维护场景中，Agent 可能选择 `git reset`、`--force` 等高风险命令，而没有优先采用更安全方案。社区诉求集中于增加破坏性行为识别、提示和策略护栏。  
   [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9. **`/bug` 报告缺少子代理上下文**  
   报告只包含主会话信息，没有子代理的提示、工具调用和中间状态，显著增加线上问题复现与定位成本。  
   [Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)

10. **自定义 Agent 的符号链接无法被识别**  
    `~/.gemini/agents/filename.md` 是符号链接时，不会被加载为 Agent。普通文件可用而软链接失效，给使用集中式配置和开发者环境的用户带来兼容性问题。  
    [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

## 重要 PR 进展

1. **为工具调用增加可配置超时**  
   新增 `tools.callTimeout`，超时后触发工具的 `AbortSignal`，并以可恢复的 `TOOL_CALL_TIMEOUT` 错误结束调用，让模型有机会调整策略，避免单个工具无限阻塞。  
   [PR #30212](https://github.com/google-gemini/gemini-cli/pull/30212)

2. **限制 `grep_search` 输出规模并引导模型缩小搜索范围**  
   宽泛搜索可能返回数十万字符内容；该 PR 增加专门输出上限，并提示模型采用更精确的查询，降低上下文膨胀和无效 token 消耗。  
   [PR #30109](https://github.com/google-gemini/gemini-cli/pull/30109)

3. **为 Web Search 增加时间限制，并在中止后停止重试**  
   修复 `google_web_search` 请求卡住或持续重试导致 Agent 长时间无响应的问题；超时与取消语义也得到明确处理。  
   [PR #30415](https://github.com/google-gemini/gemini-cli/pull/30415)

4. **修复 ACP 模式下的启动握手卡死**  
   在启用 Sandbox 时，CLI 沙箱切换前读取 stdin 会阻碍 ACP 客户端发送 `initialize` 请求。PR 调整 ACP 模式的输入处理顺序，使客户端能够正常完成初始化。  
   [PR #30400](https://github.com/google-gemini/gemini-cli/pull/30400)

5. **ACP 支持关闭会话并释放资源**  
   实现 `session/close` 能力，在客户端退出前主动移除会话、释放资源，避免残留活动会话。  
   [PR #30368](https://github.com/google-gemini/gemini-cli/pull/30368)

6. **修复 ACP 审批模式更新的未处理 Promise 拒绝**  
   审批模式变更通过 fire-and-forget 方式发送更新；连接关闭或客户端异常时，Promise 拒绝可能终止进程。该 PR 补充了错误处理。  
   [PR #30487](https://github.com/google-gemini/gemini-cli/pull/30487)

7. **标准化 ACP Token 用量和配额元数据**  
   修复取消回合时丢失 `usage` 和 `_meta` 的问题，并统一 ACP 模式下的 token 统计及配额信息，便于客户端正确展示用量。  
   [PR #30353](https://github.com/google-gemini/gemini-cli/pull/30353)

8. **修复 Git 扩展安装与更新失败**  
   从 0.70.0 起，Git 扩展操作可能因 `GIT_CONFIG_SYSTEM` 安全限制而失败。PR 调整 simple-git 的安全配置范围，恢复 Git URL 扩展的安装和更新流程。  
   [PR #30459](https://github.com/google-gemini/gemini-cli/pull/30459)

9. **在 Hook 输入中加入 `tool_call_id`**  
   BeforeTool 和 AfterTool Hook 现在可获得与模型 functionCall/functionResponse 一致的调用 ID，使客户端无需依赖工具名称、参数和到达顺序即可准确配对事件。  
   [PR #30491](https://github.com/google-gemini/gemini-cli/pull/30491)

10. **修复 Windows Shell 描述与真实行为不一致**  
    模型侧工具说明此前始终宣称使用 `powershell.exe -NoProfile -Command`，但实际可能选择不同 Shell。PR 会准确展示 Windows 上实际选中的 Shell，并说明 PowerShell 5.1 的参数与双引号行为。  
    [PR #30312](https://github.com/google-gemini/gemini-cli/pull/30312)

## 功能需求趋势

- **Agent 可靠性与状态正确性**：终止原因必须准确反映最大轮次、异常和中止，避免将失败或中断误报为 `GOAL / success`。  
  [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

- **子代理配置与生命周期管理**：社区持续关注 `settings.json` 覆盖、软链接加载、后台运行、会话接管和并行协作。  
  [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267) · [Issue #22741](https://github.com/google-gemini/gemini-cli/issues/22741) · [Issue #18287](https://github.com/google-gemini/gemini-cli/issues/18287)

- **浏览器 Agent 能力与兼容性**：Wayland 支持、持久化配置锁、异常恢复和 Web 自动化稳定性是主要诉求。  
  [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983) · [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

- **代码库理解效率**：AST 感知的文件读取、搜索和映射受到关注，目标是减少无效读取、token 消耗和上下文污染。  
  [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [Issue #22747](https://github.com/google-gemini/gemini-cli/issues/22747)

- **任务追踪持久化**：社区希望以文件化 CRUD 替代仅存在于对话上下文中的 `WriteToDo`，降低长会话“上下文腐化”并支持跨会话恢复。  
  [Issue #18836](https://github.com/google-gemini/gemini-cli/issues/18836) · [Issue #21000](https://github.com/google-gemini/gemini-cli/issues/21000)

- **安全执行与 Bash 沙箱**：零依赖 OS 沙箱、执行后意图路由、破坏性命令防护及临时文件治理是 Agent 安全的核心方向。  
  [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873) · [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

- **非交互与 ACP 集成**：ACP 会话关闭、握手、审批错误传播、Hook 拒绝原因和 token 统计成为近期集中完善的方向。  
  [PR #30368](https://github.com/google-gemini/gemini-cli/pull/30368) · [PR #30353](https://github.com/google-gemini/gemini-cli/pull/30353) · [PR #30339](https://github.com/google-gemini/gemini-cli/pull/30339)

- **工具发现与按需加载**：工具数量过多会触发请求错误，社区希望通过动态裁剪、作用域控制及更合理的发现机制降低请求规模。  
  [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246) · [Issue #18285](https://github.com/google-gemini/gemini-cli/issues/18285)

## 开发者关注点

- **长任务不能无限等待**：Web Search、Generalist Agent 和子代理均存在挂起风险；工具级超时、Web Search 超时和明确中止语义是高优先级需求。  
- **成功状态必须可信**：达到 `MAX_TURNS`、被阻断或发生中断时，不应显示成功；终止原因和失败传播直接影响自动化编排。  
- **上下文与输出成本需要控制**：`grep_search` 的大输出、大文件读取、AST 检索和持久化任务追踪都指向同一目标——减少 token 浪费与“上下文腐化”。  
- **工具扩展后需要安全边界**：工具数量过多可能导致 API 400，同时 Shell 权限过宽又可能带来破坏性命令和临时文件污染；权限、限流、审计与恢复机制需要协同完善。  
- **配置必须真正生效**：Browser Agent 忽略 `settings.json`、符号链接 Agent 不被加载、扩展文档推荐无效的 `excludeTools` 写法，都反映出配置契约和实际行为不一致。  
- **自动化可观测性仍不足**：`/bug` 需要包含子代理轨迹，ACP 需要可靠传播 Hook 停止原因，Hook 还需要稳定的 `tool_call_id` 以便事件关联和评测。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-27**  
**数据范围：过去 24 小时更新的 Release、Issue 与 PR**

## 1. 今日速览

过去 24 小时发布 **v1.0.117-3、v1.0.117-4、v1.0.117-5**，重点改善 MCP 工具授权隔离、进程权限确认体验，并支持通过 TLS 拦截代理配置自定义 CA 证书。  
社区反馈集中在**沙箱兼容性与权限策略、Windows 凭据管理、远程连接稳定性、超大工具调用失败、会话恢复性能及配置热加载**；其中不少问题影响自动化、ACP 集成和企业环境部署。

---

## 2. 版本发布

### v1.0.117-5

- 支持在用户级或托管设置中配置 `sandbox.userPolicy.network.extraCaCertificates`，使沙箱命令能够信任由 TLS 拦截代理使用的自定义 CA 证书。  
  适合企业代理、零信任网络及内部服务访问场景。  
  https://github.com/github/copilot-cli/releases/tag/v1.0.117-5

### v1.0.117-4

- 修复在启用标签页的 10 行终端中，Page Down 可能卡在固定提示符的问题。  
  https://github.com/github/copilot-cli/releases/tag/v1.0.117-4

### v1.0.117-3

- 改进辅助权限判断：当 Copilot 在同一会话中按进程 ID 停止自己启动的进程时，可避免不必要的确认提示。
- 修复 MCP 工具授权范围过宽的问题：批准某个 MCP 服务器的工具时，不再连带批准 Copilot 内置请求，例如 shell 请求。  
  这是一项重要的权限隔离修复，可降低误授权风险。  
  https://github.com/github/copilot-cli/releases/tag/v1.0.117-3

---

## 3. 社区热点 Issues

### 1. Windows 凭据管理器被大量 MCP/OAuth 条目占满

**Issue #5591**

Copilot CLI 在 Windows Credential Manager 中持续累积 `copilot-mcp-oauth` 和 `copilot-keychain-chunk` 条目，最终导致凭据库无法写入，其他应用也出现 `CredWrite error 8`。这不仅是 Copilot CLI 自身问题，也会影响 Azure DevOps、`cmdkey` 等同机工具。

**关注价值：** 高，涉及凭据泄漏、存储膨胀及跨应用故障。  
**社区反应：** 新 Issue，尚无评论，但问题描述具体且附有环境信息。

https://github.com/github/copilot-cli/issues/5591

### 2. Gemini 4 Neon 的大型缓冲工具调用稳定超时

**Issue #5590**

使用 `gemini-4-neon` 时，超过约 25–30 KB 的单次工具调用可能因 `/chat/completions` 空闲超时而失败，并出现 `Incomplete response` 或意外 EOF。大型文件创建等常见 Agent 工作流可能无法稳定完成。

**关注价值：** 高，直接影响新模型支持和长工具载荷场景。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5590

### 3. 大型会话调用 `getMessages/get_events` 导致 stdio 传输崩溃

**Issue #5592**

通过 Python SDK 和 stdio 驱动 CLI 时，约 808 MB 的 `events.jsonl` 会话在恢复并调用 `session.get_events()` 后触发 `write EINVAL`，CLI 随后挂起。该问题暴露了会话历史、截图等数据在 SDK/ACP 自动化链路中的扩展性风险。

**关注价值：** 高，可能影响长期会话、自动化 Agent 和第三方客户端集成。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5592

### 4. 本地沙箱阻止 `git submodule update`

**Issue #5593**

开启本地沙箱后，即使子模块已处于记录的提交版本，`git submodule update` 仍被阻止，导致依赖该命令的安装或构建脚本失败。这是从 v1.0.99-2 起的明显回归。

**关注价值：** 高，涉及复杂仓库构建、CI 和开发环境兼容性。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5593

### 5. macOS 沙箱中 Cypress 发生 SIGSEGV

**Issue #5588**

组件测试在 Copilot CLI macOS 沙箱内运行时，Cypress 会直接以 SIGSEGV 崩溃；同一命令在沙箱外运行正常。即使额外授权 Cypress 缓存目录，也未解决问题。

**关注价值：** 高，前端开发、测试自动化是 Copilot CLI 的核心使用场景。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5588

### 6. 远程 AHP 连接刷新无限重试且缺少退避

**Issue #5594**

当远程 AHP 环境对应的计算主机已经不存在时，`ahp.connections.refresh` 会持续以 30 秒超时无限重试，没有退避或熔断机制。问题在 Snap 与 Windows 独立安装环境中均被观察到。

**关注价值：** 高，涉及远程开发环境稳定性、后台资源消耗和故障恢复。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5594

### 7. 设置与 Hooks 变更需要完整重启 CLI

**Issue #5595**

运行中的 CLI 不会重新加载 `settings.json` 中新增的 Hooks 配置，也没有明确的热重载信号。例如新增 Notification Hook 后，当前会话不会触发该 Hook。

**关注价值：** 高，反映运行时配置、插件生态和长驻会话的集成缺口。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5595

### 8. 通知和后台任务缺少可观测状态

**Issue #5596**

后台任务完成通知缺少 queued、surfaced、dropped 及原因等状态信息。长期运行会话依赖通知唤醒空闲 Agent，因此通知是否丢失、为何未展示，直接关系到自动化任务的可靠性。

**关注价值：** 高，适合与 Hooks、日志和远程会话体系结合建设可观测性。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5596

### 9. 退出状态无法区分 SIGTERM 与正常排空完成

**Issue #5597**

当包装进程被终止但孙进程仍可能运行时，Agent 只收到“退出码 143”的通用完成通知，无法判断进程是被杀死、正常排空，还是仍有 detached helper 在运行。这会给自动化任务的状态判定带来歧义。

**关注价值：** 高，影响后台进程生命周期、清理逻辑和任务编排正确性。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5597

### 10. 组织级自定义 Agent 忽略 `model` 配置

**Issue #5585**

组织级 `.github-private/agents/*.md` 中的 `model` frontmatter 被忽略，而仓库级 `.github/agents/` 中的相同配置有效。API 已返回正确模型，说明问题位于客户端解析或过滤环节。

**关注价值：** 高，涉及企业自定义 Agent、模型路由和多级配置继承。  
**社区反应：** 新 Issue，尚无评论。

https://github.com/github/copilot-cli/issues/5585

### 同期值得留意

- **自定义 CA 证书需求：** 新版本虽已提供配置入口，但企业代理场景仍值得持续关注部署和文档完善。  
  https://github.com/github/copilot-cli/releases/tag/v1.0.117-5
- **Checkpoint refs 开关：** 社区希望禁用自动生成的 `refs/agents/*`，避免检查点污染用户 Git refs；Issue 已有 **7 个点赞、8 条评论**。  
  https://github.com/github/copilot-cli/issues/5323
- **免费账户远程访问被策略拦截：** 个人 Copilot Free 用户即使本地允许入站连接，仍可能无法启动远程环境；已有 **9 个点赞、4 条评论**。  
  https://github.com/github/copilot-cli/issues/5283
- **ACP 配额读取：** 社区希望 ACP 客户端无需发起模型调用即可读取账户额度，目前限制主要在部分平台。  
  https://github.com/github/copilot-cli/issues/5587
- **BYOK 非交互模式 OTel 回归：** v1.0.115 起，未登录 GitHub 的 `copilot -p` BYOK 运行可能不生成 OTel 文件。  
  https://github.com/github/copilot-cli/issues/5583

---

## 4. 重要 PR 进展

过去 24 小时内，GitHub Copilot CLI 仓库**没有更新的 Pull Request**。

因此本期不虚构 PR 内容；当天主要变更通过 **v1.0.117-3 至 v1.0.117-5** 三个版本发布交付。

Release 列表：  
https://github.com/github/copilot-cli/releases

---

## 5. 功能需求趋势

### 5.1 企业权限与沙箱治理

社区需求集中于更细粒度的权限控制：

- 允许关闭 `refs/agents/*` 检查点引用。
- 将 MCP 工具授权与 Copilot 内置工具彻底隔离。
- 改进本地沙箱对 Git 子模块、UNC 路径和 Cypress 的兼容性。
- 支持企业自定义 CA 证书，以适配 TLS 拦截代理。

相关链接：

- https://github.com/github/copilot-cli/issues/5323
- https://github.com/github/copilot-cli/issues/5593
- https://github.com/github/copilot-cli/issues/5588
- https://github.com/github/copilot-cli/issues/5586
- https://github.com/github/copilot-cli/releases/tag/v1.0.117-5

### 5.2 ACP、SDK 与第三方客户端集成

ACP 客户端正在成为重要使用场景，需求包括：

- 在 ACP 模式暴露辅助审批安全判断。
- 不消耗模型调用即可读取账户配额。
- 提升大型会话通过 stdio 传输时的稳定性。
- 避免多会话并行时工具审批被相互覆盖。

相关链接：

- https://github.com/github/copilot-cli/issues/5047
- https://github.com/github/copilot-cli/issues/5587
- https://github.com/github/copilot-cli/issues/5592
- https://github.com/github/copilot-cli/issues/3563

### 5.3 运行时配置与插件生态

Hooks 和插件配置目前缺少热加载机制，开发者希望运行中的 CLI 能自动识别变更。同时，通知、后台任务和进程退出需要更完整的结构化状态，以支持可靠的任务编排。

相关链接：

- https://github.com/github/copilot-cli/issues/5595
- https://github.com/github/copilot-cli/issues/5596
- https://github.com/github/copilot-cli/issues/5597

### 5.4 新模型与大载荷工具调用

`gemini-4-neon` 在大型单次工具调用上的超时问题说明，模型兼容性不能只验证短对话，还需要覆盖：

- 大文件创建或修改。
- 25–30 KB 以上工具参数。
- `/chat/completions` 缓冲响应。
- 长时间无增量数据的请求。

相关链接：

- https://github.com/github/copilot-cli/issues/5590

### 5.5 远程环境与企业可用性

远程 AHP 连接刷新需要退避和熔断；Copilot Free 账户的远程访问策略需要更清晰的账号资格说明和错误提示。

相关链接：

- https://github.com/github/copilot-cli/issues/5594
- https://github.com/github/copilot-cli/issues/5283

### 5.6 可观测性与遥测

开发者持续关注：

- OTel 文件导出的稳定性。
- 多进程指标通过 `service.instance.id` 隔离。
- BYOK、非交互模式下的遥测覆盖。
- 任务完成、通知投递和进程终止的结构化原因。

相关链接：

- https://github.com/github/copilot-cli/issues/5583
- https://github.com/github/copilot-cli/issues/5005
- https://github.com/github/copilot-cli/issues/5596
- https://github.com/github/copilot-cli/issues/5597

---

## 6. 开发者关注点

1. **沙箱不能破坏现有开发工具链**  
   Git 子模块、Cypress、Windows UNC 路径等在沙箱外可用、沙箱内失败的问题，会直接影响 Agent 执行真实项目构建和测试的能力。

2. **权限授权必须边界清晰**  
   社区既希望减少重复确认，也担心 MCP 授权意外扩展到 shell 等内置能力。v1.0.117-3 对此进行了修复，后续还需关注并行会话审批覆盖问题。

3. **远程功能需要明确、可诊断且具备容错**  
   无限刷新重试、免费账户策略阻断、凭据管理器污染等问题，都会显著降低远程开发环境的可信度。

4. **长会话与大型载荷是自动化落地的瓶颈**  
   808 MB 会话导致 stdio 写入失败，以及大工具调用触发模型接口超时，都会影响 SDK、ACP 和无人值守任务。

5. **配置和插件需要动态生效**  
   修改 Hooks 后必须重启整个 CLI，对长驻会话和实验性插件开发尤其低效；开发者期待热加载或至少提供清晰提示。

6. **任务生命周期需要可观测、可判定**  
   “进程退出”“通知已投递”“Agent 已唤醒”不能只依赖退出码或日志文本，应提供结构化 disposition 和失败原因。

7. **企业代理配置需求已进入核心场景**  
   自定义 CA 证书支持是重要进展，但还需验证与托管策略、用户策略及不同代理产品的兼容性。

8. **跨平台一致性仍是主要质量目标**  
   Windows、macOS、Linux 在凭据管理、路径语义、沙箱和后台进程上的差异，正在成为实际生产使用中的突出摩擦点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-27

## 今日速览

过去 24 小时没有新版本发布，社区重点集中在 **V2 稳定性与自动化可靠性**：MCP 偶发未注册、CLI 错误信息丢失、无人值守任务被交互式权限请求阻塞，以及快照误收录大型忽略文件等高影响问题。与此同时，插件、Skills、MCP 扩展能力和桌面端交互体验仍是功能开发的主要方向。

## 社区热点 Issues

1. **免费额度异常集中反馈入口**  
   [#59387](https://github.com/anomalyco/opencode/issues/59387)  
   汇总免费额度耗尽、每日消息额度未重置及桌面端无响应等常见问题。评论达 413 条，为当日最活跃议题，说明免费层的额度展示、重置机制和错误提示仍是用户流失风险点。

2. **桌面端快速上滚被强制拉回底部**  
   [#56285](https://github.com/anomalyco/opencode/issues/56285)  
   长会话中从底部快速上滚时视口会突然回弹，且历史记录只逐块加载，影响长对话审阅。问题已稳定复现，获得 12 条评论和 7 个赞，属于明显的桌面端可用性痛点。

3. **Standalone CLI 偶发未注册 MCP 服务**  
   [#65932](https://github.com/anomalyco/opencode/issues/65932)  
   约 10% 的 `opencode run --standalone` 会话未将本地 stdio MCP 服务注册到工具池，导致整个会话无法调用相关工具。该问题直接影响自动化任务稳定性，已有 11 条评论。

4. **子代理在上下文压缩时持续失败**  
   [#56862](https://github.com/anomalyco/opencode/issues/56862)  
   子代理读取较大文件后，context compaction 可能反复失败，即使上下文限制信息已知仍无法稳定恢复。问题获得 9 条评论和 3 个赞，反映长上下文与多代理协作是关键可靠性瓶颈。

5. **CLI 服务端失败时 stderr 为空**  
   [#66699](https://github.com/anomalyco/opencode/issues/66699)  
   `opencode run` 遇到 provider 配额超限等服务端错误时仅返回退出码 1，不输出可诊断的错误内容。该 PR 已在当天关闭，对 CI、脚本化调用和可观测性影响明显。

6. **快照错误收录大型 Git 忽略文件**  
   [#65127](https://github.com/anomalyco/opencode/issues/65127)  
   `/undo` 文件快照会索引 Git 已忽略且超过 2 MiB 的文件，示例中打包体积达到 90 GB。问题同时涉及磁盘占用、快照性能和存储策略，已有 5 条评论。

7. **MCP 开启 Skills 后丢失服务指令**  
   [#66706](https://github.com/anomalyco/opencode/issues/66706)  
   启用 `experimental.mcp_skills` 后，只要 MCP 服务提供一个 skill，其完整 `instructions` 就会丢失。该问题会降低模型对服务能力和调用规则的理解，属于新实验能力中的兼容性问题。

8. **插件工具在无人值守运行中触发交互式授权**  
   [#66698](https://github.com/anomalyco/opencode/issues/66698)  
   Promise 风格插件调用 `ctx.permission.assert()` 时，无人值守代码自动化仍会打开交互式询问，导致无人响应后任务失败。该问题直接影响无人值守工作流和 CI 集成。

9. **CLI 在 stdin 为开放管道时卡住**  
   [#65887](https://github.com/anomalyco/opencode/issues/65887)  
   即使已经通过参数传入消息，只要 stdin 保持为开放管道，`opencode run` 仍可能持续等待。这对容器、Shell 管道和自动化平台中的进程管理非常常见，因此具备较强普适影响。

10. **新增会话标题时将完整首条消息发送给模型**  
    [#66708](https://github.com/anomalyco/opencode/issues/66708)  
    `SessionTitle.generate` 未限制首条用户消息长度，而标题回退路径会截断至 2,000 字符。长提示可能造成不必要的 token、费用和隐私暴露，相关讨论已有 3 条评论。

## 重要 PR 进展

1. **Code Mode 合并同一文件的多次修改为单个 Diff**  
   [#66751](https://github.com/anomalyco/opencode/pull/66751)  
   `execute` 对同一文件连续修改时，现在仅展示一次文件卡片和一份从首次修改前到最后一次修改后的合并 Diff，减少桌面端与 Web 端重复卡片。

2. **一次性提示不再进入缓存前缀**  
   [#63498](https://github.com/anomalyco/opencode/pull/63498)  
   修复仅单次请求使用的文本被后续请求重复发送、污染会话尾部缓存的问题，有利于提示缓存命中率和请求成本控制。

3. **关闭自动化后不再争抢调度器 Lease**  
   [#66747](https://github.com/anomalyco/opencode/pull/66747)  
   当 `automations: false` 时，服务不再申请和续租 SQLite 调度器 Lease，避免在共享数据库中阻塞真正负责自动化执行的实例。

4. **恢复 Inbox 侧栏“Recent”标题**  
   [#66494](https://github.com/anomalyco/opencode/pull/66494)  
   修复 Inbox 侧栏中“Recent”分组标题意外消失的问题，恢复信息层级与可扫描性。

5. **清理队列消息中的失效附件引用**  
   [#66746](https://github.com/anomalyco/opencode/pull/66746)  
   编辑已排队的消息时，会移除文件卡片对应的 `Attached file:` 残留文本，避免模型收到已经删除的附件引用。

6. **不再要求用户手动配置 loopback `NO_PROXY`**  
   [#66748](https://github.com/anomalyco/opencode/pull/66748)  
   CLI 已自动将 `127.0.0.1`、`localhost` 和 `::1` 加入 `NO_PROXY/no_proxy`，文档同步移除过时配置要求，减少代理环境下的接入摩擦。

7. **增加 QVeris 托管 MCP 服务的 OAuth 接入文档**  
   [#66744](https://github.com/anomalyco/opencode/pull/66744)  
   补充 V2 MCP OAuth 配置示例，包括添加服务端点、浏览器授权及连接验证流程。

8. **桌面端退出时提示后台服务仍在运行**  
   [#66499](https://github.com/anomalyco/opencode/pull/66499)  
   在首次退出 Desktop 时明确提示后台服务、终端和 MCP 服务仍会运行，并提供退出时停止服务的选项。该 PR 当天已关闭。

9. **缓存编译后的通配符模式**  
   [#66543](https://github.com/anomalyco/opencode/pull/66543)  
   避免 `Wildcard.match` 每次调用都重新构造 `RegExp`。该模式在工具快照和权限策略中被高频调用，缓存后可降低重复 CPU 开销。

10. **保留失败工具调用的已解码输入**  
    [#66541](https://github.com/anomalyco/opencode/pull/66541)  
    工具调用失败且输入仍处于流式 JSON 字符串阶段时，保留已解码的调用参数，便于错误展示、诊断及后续重试。

> 补充：当天还有多项模型协议与编辑安全修复值得关注，包括复用工具调用 ID 的歧义处理（[#66544](https://github.com/anomalyco/opencode/pull/66544)）、Mistral 工具 ID 标准化（[#66741](https://github.com/anomalyco/opencode/pull/66741)）以及拒绝单次编辑中的重叠匹配（[#66737](https://github.com/anomalyco/opencode/pull/66737)）。

## 功能需求趋势

### 1. 插件与 MCP 的深度集成

社区希望插件不再局限于静态配置，而是能够：

- 注册自定义 Workspace Driver，支持 Fly.io Sprites 等远程工作区  
  [#45612](https://github.com/anomalyco/opencode/issues/45612)
- 调用 Engine 已建立的 MCP 连接，直接使用工具与资源  
  [#53514](https://github.com/anomalyco/opencode/issues/53514)
- 通过统一命令安装第三方 Skills  
  [#66702](https://github.com/anomalyco/opencode/issues/66702)

这表明 OpenCode 正从“客户端 + 工具调用器”向可编程 Agent 平台演进，插件 API 的可组合性是核心诉求。

### 2. Skills 可发现性与管理体验

需求集中在统一排序、可靠加载和错误反馈：

- TUI、`@` 自动完成和 `/api/skill` 按字母排序  
  [#66596](https://github.com/anomalyco/opencode/issues/66596)
- Skills 解析失败不能只写 debug 日志，应明确警告  
  [#66716](https://github.com/anomalyco/opencode/issues/66716)
- MCP Skills 模式不能丢失服务级 instructions  
  [#66706](https://github.com/anomalyco/opencode/issues/66706)

总体诉求是让用户能准确知道“哪些技能已加载、为何未加载，以及在哪里发现它们”。

### 3. 无人值守自动化与 CI 可用性

开发者希望自动化任务具备确定性：

- 权限请求遵守无人值守规则，而不是打开交互式弹窗  
  [#66698](https://github.com/anomalyco/opencode/issues/66698)
- CLI 明确报告 provider 配额和服务端错误  
  [#66699](https://github.com/anomalyco/opencode/issues/66699)
- stdin 为开放管道时仍能正常执行  
  [#65887](https://github.com/anomalyco/opencode/issues/65887)

核心要求是：错误可见、进程可终止、无需人工干预，并能安全接入 CI。

### 4. 桌面端会话管理与审阅体验

桌面端需求继续向大型工作流延伸：

- 长会话提供 transcript outline，可跳转到任意消息  
  [#64367](https://github.com/anomalyco/opencode/issues/64367)
- Branch Changes 正确展示提交、合并后的差异及逐提交视图  
  [#66601](https://github.com/anomalyco/opencode/issues/66601)
- 远程服务器文件树支持下载  
  [#63485](https://github.com/anomalyco/opencode/issues/63485)
- 代理运行时保持电脑唤醒，并支持完成后休眠或关机  
  [#58858](https://github.com/anomalyco/opencode/issues/58858)

社区希望 Desktop 从“聊天壳”进一步发展为可审阅、可回滚、可远程操作的 Agent 工作台。

### 5. 新模型与提供商支持

- 为符合条件的 ChatGPT Pro 账户显示 GPT-6.2 Ultrafast  
  [#64968](https://github.com/anomalyco/opencode/issues/64968)
- 修复 Copilot GPT-6 在 reasoning effort 切换时的提示缓存失效  
  [#59868](https://github.com/anomalyco/opencode/issues/59868)

模型支持不只是“能调用”，还包括账户权限识别、参数切换正确性及缓存稳定性。

### 6. 跨平台与移动端分发

- 修复 Linux 桌面端鼠标滚轮不流畅  
  [#66549](https://github.com/anomalyco/opencode/issues/66549)
- 增加 iOS TestFlight 名额或提供 unsigned IPA  
  [#64603](https://github.com/anomalyco/opencode/issues/64603)
- 修复 DOCX Web 预览中的中文字体方块  
  [#54985](https://github.com/anomalyco/opencode/issues/54985)

跨平台体验仍是高频反馈来源，尤其是桌面端滚动、文档预览和移动端安装渠道。

## 开发者关注点

1. **自动化必须可诊断**  
   CLI 空错误输出、插件权限交互和 stdin 卡死看似是不同问题，实质上都指向同一要求：脚本执行失败时应明确报错、正常退出且不依赖人工响应。

2. **MCP 注册与生命周期需要确定性**  
   偶发漏注册服务，以及 `/api/vcs` 为读取 Git 状态而启动整个 Location 并加载全部 MCP 服务，显示 MCP 初始化和项目扫描路径仍有性能及一致性问题。

3. **长上下文与子代理稳定性不足**  
   上下文压缩失败、大文件读取压力和快照意外收录大型文件，都可能造成 token、内存和磁盘成本失控。

4. **插件生态需要可靠、可观察的失败机制**  
   无效 Skill frontmatter 被静默跳过、失效附件引用残留，都会让模型在用户不知情的情况下缺少关键上下文。插件和扩展加载应默认具备清晰告警。

5. **缓存与协议兼容性是模型支持的基础**  
   一次性提示污染缓存、reasoning effort 切换破坏缓存、复用 tool call ID 导致历史回放失败，表明 OpenAI-compatible、Mistral 与 Copilot 等协议路径需要更严格的一致性处理。

6. **大型会话和远程工作区体验仍有明显缺口**  
   历史滚动、逐提交审阅、远程文件下载、长会话导航等需求表明，Desktop 正在快速扩展，但复杂工作流中的状态一致性和可发现性仍需加强。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-27

## 今日速览

过去 24 小时无新版本发布，但社区讨论高度集中在 **TUI 输入与附件可靠性、模型选择、测试/CI 稳定性** 三类问题。与此同时，多项修复已提交 PR，包括 Kitty 键盘协议兼容、图片附件生命周期、可编辑选择、订阅额度恢复，以及 Rust 工具链升级造成的 CI 红灯。

当前最突出的工程风险是：**master 已无法稳定通过自身质量门禁**，涉及 rustfmt、clippy、依赖安全告警、代码体积预算和过期测试断言。

## 社区热点 Issues

1. **master 质量门禁持续失败，PR 合并检查全面变红**  
   格式漂移、Clippy 新规则、`cookie` 安全告警、预算棘轮和过期测试共同阻塞 CI。问题源于 master 推送不运行 CI，缺陷直到 PR 才暴露。  
   社区反应：Issue 获 3 条评论，是当日唯一新建且更新至 11 月 27 日的重要问题。  
   [#2420](https://github.com/1jehuang/jcode/issues/2420)

2. **建议新增 `/mcp` 命令，交互启停 MCP 服务**  
   用户可在 TUI 中切换 MCP Server，并将状态持久化至 `~/.jcode/mcp.json`，同时即时刷新管理器和界面配置。  
   社区反应：14 条评论，为当日热度最高 Issue。  
   [#835](https://github.com/1jehuang/jcode/issues/835)

3. **建议新增 `/theme` 命令和自定义主题色板**  
   支持内置主题切换，以及从 `~/.jcode/themes/<name>.toml` 加载自定义主题，改善当前主题选择能力不足的问题。  
   社区反应：13 条评论，关注度仅次于 MCP。  
   [#836](https://github.com/1jehuang/jcode/issues/836)

4. **为 `@file` 补全增加 frecency 排序**  
   在输入 `@` 后提供文件选择器，结合 Git 跟踪文件和惰性扫描忽略目录，并按访问频率排序，减少大型仓库中的路径输入成本。  
   社区反应：11 条评论、1 个赞；已有对应 PR 推进。  
   [#837](https://github.com/1jehuang/jcode/issues/837)

5. **Swarm Agent 未继承当前会话模型**  
   未显式固定 `agents.swarm_model` 时，Swarm 可能回退到硬编码或看似随机的模型，导致实际模型与用户当前选择不一致。  
   社区反应：10 条评论，反映模型路由一致性问题受到高度关注。  
   [#981](https://github.com/1jehuang/jcode/issues/981)

6. **master 存在 5 个环境变量隔离导致的既有测试失败**  
   Provider profile 和 OpenRouter 环境变量会污染测试，出现失败主要源于测试隔离与过期断言，而非应用逻辑本身。  
   社区反应：11 条评论，进一步印证 master 测试债务已影响日常开发。  
   [#978](https://github.com/1jehuang/jcode/issues/978)

7. **Bash 破坏性命令风险门控应可配置**  
   当前风险检测过于硬编码，用户无法关闭误报，也不能在关闭后重新启用。建议通过 `/settings` 暴露开关，并持久化至 `config.toml`。  
   社区反应：10 条评论，安全机制与可用性的平衡是讨论重点。  
   [#897](https://github.com/1jehuang/jcode/issues/897)

8. **TUI 测试存在 ABBA 死锁**  
   部分测试先获取渲染锁再获取环境锁，另一些测试则反向获取，在并行执行时形成死锁。  
   社区反应：6 条评论；问题已被标注为稳定复现的测试基础设施缺陷。  
   [#1828](https://github.com/1jehuang/jcode/issues/1828)

9. **Provider 请求缺少可配置的 User-Agent 和全局 Header**  
   企业网关、代理或租户环境可能依赖自定义 UA、租户 ID 或内部认证 Header，但 jcode 当前固定 UA，部署时容易遭拦截或错误归因。  
   社区反应：6 条评论，是企业集成场景的重要诉求。  
   [#1520](https://github.com/1jehuang/jcode/issues/1520)

10. **Gemini API 默认模型将在 2026-12-01 被 Google 重定向**  
    `gemini-api` profile 默认使用 `gemini-2.5-flash`；届时请求可能被静默路由至 `gemini-3.5-flash-lite`，造成行为变化但不会报错。  
    社区反应：新 Issue 已有 1 条评论，问题新颖且具有明确时间窗口。  
    [#2422](https://github.com/1jehuang/jcode/issues/2422)

## 重要 PR 进展

1. **升级 `cookie` 至 0.18.3，修复 RUSTSEC-2026-0594**  
   `cookie 0.18.2` 在 fork 后可能重复私钥 nonce，0.18.3 是最小安全修复版本。  
   [#2427](https://github.com/1jehuang/jcode/pull/2427)

2. **适配 Rust 1.100 新增 Clippy 规则**  
   修复 `needless_bool`、`needless_return` 等新 lint，避免所有基于当前 master 的 PR 被 `-D warnings` 阻塞。  
   [#2425](https://github.com/1jehuang/jcode/pull/2425)

3. **按 rustfmt 1.11 重新格式化代码**  
   GitHub Stable 工具链升级后，master 出现 24 处格式差异；该 PR 对 15 个文件执行纯格式化变更。  
   [#2426](https://github.com/1jehuang/jcode/pull/2426)

4. **修复 iTerm2 下 ESC 分片 Kitty 报告泄漏到输入框**  
   针对 iTerm2 分段写入 CSI-u 响应的问题，吞掉不完整的 ESC 序列，避免 `[98;1;3u` 等碎片出现在用户输入中。  
   [#2143](https://github.com/1jehuang/jcode/pull/2143)

5. **重构 Composer 附件所有权，覆盖草稿生命周期**  
   不再通过 `[image N]` 文本猜测附件归属，而是显式跟踪标记区间，并在撤销、stash 等操作间保留正确的 payload 与所有权。  
   [#2397](https://github.com/1jehuang/jcode/pull/2397)

6. **确保排队中的纯图片 Prompt 在重载和发送失败后不丢失**  
   文本、图片及交错内容将随队列 turn 保存；断线、忙碌拒绝或写失败后可恢复，且不会混入较新的草稿。  
   [#2409](https://github.com/1jehuang/jcode/pull/2409)

7. **统一退出时的附件草稿清理行为**  
   Ctrl+C 在连接和断开客户端中均执行一致的“清理或退出”流程，同时保留撤销所需的完整草稿。  
   [#2398](https://github.com/1jehuang/jcode/pull/2398)

8. **Composer 选择区域现在可编辑**  
   新增双击选词、三击选逻辑行，以及 Shift+组合键扩展选择；输入、粘贴、删除和剪切均可直接替换或移除选区。  
   [#2403](https://github.com/1jehuang/jcode/pull/2403)

9. **提前恢复订阅额度后继续执行被暂停的 Turn**  
   Codex 或原生 Claude 订阅若提前重置额度，现有轮询会更新账户状态，却不会唤醒挂起任务；该 PR 修复此行为。  
   [#2419](https://github.com/1jehuang/jcode/pull/2419)

10. **增加 Runtime 模型信息及 `agents.memory_effort` 配置**  
    Runtime 面板展示当前模型、effort 和 Agent 模型覆盖项；Memory sidecar 可通过 `agents.memory_effort` 或 `JCODE_MEMORY_EFFORT` 固定推理强度。  
    [#1709](https://github.com/1jehuang/jcode/pull/1709)

## 功能需求趋势

### 1. TUI 交互与可配置能力
- MCP 服务动态启停与持久化：[#835](https://github.com/1jehuang/jcode/issues/835)
- 自定义主题：[#836](https://github.com/1jehuang/jcode/issues/836)
- `@file` 智能补全：[#837](https://github.com/1jehuang/jcode/issues/837)
- 命令行直接打开预过滤会话选择器：[#1232](https://github.com/1jehuang/jcode/issues/1232)
- 当前目录会话置顶：[#1633](https://github.com/1jehuang/jcode/issues/1633)
- Runtime 模型与 Agent 覆盖信息：[#1634](https://github.com/1jehuang/jcode/issues/1634)
- 隐藏 TPS 显示：[#1782](https://github.com/1jehuang/jcode/issues/1782)

### 2. 模型路由、配置与多模型能力
- Swarm 继承会话模型：[#981](https://github.com/1jehuang/jcode/issues/981)
- Memory sidecar 推理强度可配置：[#1639](https://github.com/1jehuang/jcode/issues/1639)
- Bedrock 默认模型被旧目录降级：[#1926](https://github.com/1jehuang/jcode/issues/1926)
- 文本模型收到图片内容后的运行时降级：[#1302](https://github.com/1jehuang/jcode/issues/1302)
- Gemini 默认模型升级窗口：[#2422](https://github.com/1jehuang/jcode/issues/2422)

### 3. Provider、企业代理与模型兼容性
- 自定义 UA 与全局请求头：[#1520](https://github.com/1jehuang/jcode/issues/1520)
- Bedrock 模型选择逻辑：[#1926](https://github.com/1jehuang/jcode/issues/1926)
- OpenAI-compatible 文本模型的图片容错：[#1302](https://github.com/1jehuang/jcode/issues/1302)
- Gemini Runtime schema 回归：[#1951](https://github.com/1jehuang/jcode/issues/1951)

### 4. 安全、可观测性与资源治理
- Bash 风险门控开关：[#897](https://github.com/1jehuang/jcode/issues/897)
- Runtime 内存日志增加字节数与时间上限：[#2079](https://github.com/1jehuang/jcode/issues/2079)
- 安装清单 `stable` 字段更新：[#1413](https://github.com/1jehuang/jcode/issues/1413)
- macOS 凭据传输路径校验：[#1947](https://github.com/1jehuang/jcode/issues/1947)

### 5. Agent 工作流与多代理体验
- Swarm 模型继承：[#981](https://github.com/1jehuang/jcode/issues/981)
- `ask_user` 能力协商与 TUI 选择器：[#1600](https://github.com/1jehuang/jcode/issues/1600)
- Memory sidecar 推理配置：[#1639](https://github.com/1jehuang/jcode/issues/1639)

## 开发者关注点

1. **CI 与测试债务成为首要阻塞点**  
   多个 Issue 指向同一根因：master 缺少持续 CI，格式、Clippy、安全审计、预算检查及过期断言不断累积，最终让所有 PR 继承红灯。

2. **测试存在隔离、锁顺序和并行竞态问题**  
   环境变量污染、全局状态泄漏、ABBA 锁死和缓存竞态表明，测试套件需要更严格的隔离机制，而不只是逐项更新断言。

3. **图片附件生命周期复杂且容易丢数据**  
   开发者集中反馈纯图片 Prompt、重载、断线、发送失败、撤销和退出等情况下的附件丢失及归属混淆。当天多个 PR 集中修复该领域。

4. **模型选择必须可预测、可解释**  
   社区希望 Swarm、Memory sidecar 和普通会话明确继承当前模型，同时 Runtime 面板能展示真实模型、effort 和覆盖配置。

5. **Provider 集成需要适应企业部署和快速变化的上游服务**  
   自定义 Header/UA、兼容端点的模态能力恢复、Bedrock 降级问题和 Gemini 静默重定向，均要求 jcode 提供更稳健的模型探测与配置机制。

6. **安全机制需要兼顾误报率**  
   破坏性 Bash 检测受到认可，但硬编码行为限制较大；用户希望风险门控可配置，同时保留对真正危险命令的保护。

7. **跨平台终端兼容仍是高频问题**  
   macOS/iTerm2 的 Kitty 键盘协议、herdr-webui 的 Mermaid/Math 渲染、macOS 私有内存快照及 `/var` 符号链接路径，都要求更精细的平台适配。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-27

## 今日速览

过去 24 小时没有新版本发布，但社区集中讨论了 **Provider 默认模型选择不稳定、工具调用重放、会话资源释放与终端渲染** 等可靠性问题。多个已关闭 Issue 已有对应修复或明确处置；当前仍开放的重点需求包括 **pi-durable 优雅停机、mcp.json Schema、图片生成协议与会话彻底删除**。

## 社区热点 Issues

1. **[OPEN] 扩展注册的 Provider 偶尔忽略默认模型配置**  
   扩展通过 `pi.registerProvider()` 注册 Provider 后，新会话可能不采用 `defaultProvider/defaultModel`，而是落到其他 Provider 的默认模型，直接影响模型路由与成本。Issue 有 12 条评论和 5 个赞，是本期讨论最热烈的问题。  
   [GitHub #8810](https://github.com/earendil-works/pi/issues/8810)

2. **[CLOSED] 已释放的会话仍被闭包引用，无法被 GC**  
   `AgentSession.dispose()` 与 `ExtensionRunner.invalidate()` 未彻底切断强引用，长期使用 SDK 托管多会话时可能持续累积堆内存直至 OOM。对长期运行、Server 化或多 Agent 宿主尤其重要。  
   [GitHub #12546](https://github.com/earendil-works/pi/issues/12546)

3. **[CLOSED] Kitty 图片显示导致终端滚动历史被清空**  
   多张图片连续输出时，普通模式和全屏模式均可能丢图；兼容渲染还会整屏重绘并清空 Konsole scrollback。问题已通过拆分图片 ID 与增量追加修复。  
   [GitHub #12548](https://github.com/earendil-works/pi/issues/12548)

4. **[OPEN] `/reload` 或恢复会话时工具顺序变化，破坏 Prompt Cache**  
   工具延迟注册后，工具列表顺序可能改变，导致下一次 Anthropic 请求缓存失效、thinking block 丢失并触发 `prefix_binding_mismatch`。该问题被标记为 P0，直接影响延迟和 Token 成本。  
   [GitHub #12547](https://github.com/earendil-works/pi/issues/12547)

5. **[CLOSED] Copilot 的 `reasoning_opaque` 在重放时丢失**  
   `openai-completions` 只保留 `reasoning_text`、遗漏 `reasoning_opaque`，使后续请求上下文不完整；该问题获得 2 个赞，并有专门 PR 修复。  
   [GitHub #12418](https://github.com/earendil-works/pi/issues/12418)

6. **[OPEN] pi-durable 缺少“停止派发、等待在途任务收尾”的停机机制**  
   社区希望 `Harness` 支持 `pause()` 或 `drain()`：停止领取新任务，但允许当前模型或工具步骤完成并提交后再 `close()`。这是 Durable 任务系统实现可靠优雅停机的关键能力。  
   [GitHub #12512](https://github.com/earendil-works/pi/issues/12512)

7. **[CLOSED] Codemode 丢弃工具输出的截断提示**  
   工具返回超长内容时，普通调用会告知模型内容被截断，但 codemode 路径没有携带该通知，模型可能误以为拿到了完整结果，进而基于残缺数据继续执行。  
   [GitHub #12594](https://github.com/earendil-works/pi/issues/12594)

8. **[OPEN] Codemode 解析错误缺少源码上下文**  
   当前错误通常只有 `codemode.js:line:col`，模型无法快速定位 shell-heavy 脚本中的具体错误，只能盲目重试。增加源码摘录和上下文可显著改善模型自修复能力。  
   [GitHub #12510](https://github.com/earendil-works/pi/issues/12510)

9. **[CLOSED] Windows 上 Pi 异常退出后终端进入不可用状态**  
   Pi 在运行中被杀后，Kitty 键盘上报仍保持开启，PowerShell 提示符可能无法正常响应。该问题已关闭，并补充了终端状态恢复文档。  
   [GitHub #12564](https://github.com/earendil-works/pi/issues/12564)

10. **[CLOSED] `mcp.json` 缺少公开 JSON Schema**  
    `settings`、`models`、`keybindings` 和 `theme` 已有 Schema，但 MCP 配置仍缺少编辑器校验和自动补全支持。对应工作已进入 `coding-agent` 目录，Issue 目前标记为进行中。  
    [GitHub #12563](https://github.com/earendil-works/pi/issues/12563)

## 重要 PR 进展

1. **[OPEN] 导出 HTML 时保留 `$` 字符**  
   修复使用字符串作为 `String.replace()` 替换值时，`$$`、`$&` 被错误展开的问题，避免导出的成本信息等脚本内容损坏。  
   [GitHub PR #12609](https://github.com/earendil-works/pi/pull/12609)

2. **[OPEN] 引入统一 `pi-image` 图片生成 API**  
   提供类似 `pi-messages`、`pi-decision` 的通用图片生成协议，覆盖 Provider 能力协商与结果表示；当前仍在评审中，是本期较重要的生态扩展方向。  
   [GitHub PR #12535](https://github.com/earendil-works/pi/pull/12535)

3. **[OPEN] Durable 支持彻底删除会话**  
   新增 `Harness.deleteConversations(ids, context)`：停止会话继续接收任务、取消前后台工作，并删除会话及其 fork 和相关任务，是 Durable 数据生命周期管理的重要能力。  
   [GitHub PR #12562](https://github.com/earendil-works/pi/pull/12562)

4. **[OPEN] Chord StoreStorage 支持删除会话**  
   在 Durable/Chord 的存储层增加 `document.purge`，用于清除会话文档及关联命名空间数据，与上层会话删除能力配套。  
   [GitHub PR #12582](https://github.com/earendil-works/pi/pull/12582)

5. **[OPEN] 修复 Bedrock “Too many tokens” 限流未重试**  
   Bedrock 对 429 提供两类提示；现有分类器只重试 “Too many requests”，遗漏 “Too many tokens”。该修复扩展了限流识别范围，提高云模型调用稳定性。  
   [GitHub PR #12574](https://github.com/earendil-works/pi/pull/12574)

6. **[OPEN] 修复 `/tree` 中选择“Summarize”后未真正总结目标消息**  
   树导航生成的新叶子与待总结消息范围不一致，导致目标提示词离开上下文却未被总结。修复将树导航和摘要范围重新对齐。  
   [GitHub PR #12577](https://github.com/earendil-works/pi/pull/12577)

7. **[OPEN] MCP 配置文件发布 JSON Schema**  
   为 `mcp.json` 增加公开 Schema，并在 MCP 文档中引导编辑器启用校验与补全，改善 MCP 配置体验。  
   [GitHub PR #12563](https://github.com/earendil-works/pi/issues/12563)

8. **[CLOSED] Copilot `reasoning_opaque` 的捕获与重放**  
   在 `openai-completions` 路径中同时保存和回放 `reasoning_text` 与 `reasoning_opaque`，覆盖普通、工具调用和仅推理消息，修复 Copilot 上下文重放不完整。  
   [GitHub PR #12505](https://github.com/earendil-works/pi/pull/12505)

9. **[CLOSED] Kitty 图片改为增量追加，避免清空 scrollback**  
   不再为图片位置进行整屏重绘，改为直接追加 Kitty 图形数据，从而保留终端历史记录；该 PR 与图片 ID 修复配套。  
   [GitHub PR #12597](https://github.com/earendil-works/pi/pull/12597)

10. **[CLOSED] 修复 Copilot mai-code 模型不支持 temperature**  
    GitHub Copilot 通过 `/responses` 接入 mai-code 模型时不应发送 `temperature`；PR 移除了不兼容参数，避免模型请求被拒绝。  
    [GitHub PR #12604](https://github.com/earendil-works/pi/pull/12604)

## 功能需求趋势

- **任务生命周期与可靠停机**：社区集中希望 Durable 支持暂停派发、等待在途任务完成，以及彻底删除会话，目标是构建可预测、可恢复的后台 Agent 基础设施。  
  [#12512](https://github.com/earendil-works/pi/issues/12512) · [#12562](https://github.com/earendil-works/pi/pull/12562)

- **MCP 与扩展生态完善**：MCP 文件传输公共 Hook、`mcp.json` Schema、扩展注册 Provider 的稳定性，都是扩展作者和宿主集成方的高频诉求。  
  [#12600](https://github.com/earendil-works/pi/issues/12600) · [#12563](https://github.com/earendil-works/pi/issues/12563) · [#8810](https://github.com/earendil-works/pi/issues/8810)

- **多模型与 Provider 兼容性**：社区持续推进 ModelScope 内置支持、新 Provider 接入、Copilot 特殊推理字段以及不同模型的参数和重试差异。  
  [#8393](https://github.com/earendil-works/pi/issues/8393) · [#12418](https://github.com/earendil-works/pi/issues/12418) · [#12574](https://github.com/earendil-works/pi/pull/12574)

- **图片生成与多模态协议**：`pi-image` 提案显示社区希望建立统一图片生成抽象，而非让每个 Provider 或宿主分别实现。  
  [GitHub PR #12535](https://github.com/earendil-works/pi/pull/12535)

- **Agent 可观测性与错误恢复**：重试分类、工具输出截断、Codemode 源码上下文和 Bash 默认超时，均指向同一需求——让模型能识别失败并可靠恢复。  
  [#12605](https://github.com/earendil-works/pi/issues/12605) · [#12594](https://github.com/earendil-works/pi/issues/12594) · [#12510](https://github.com/earendil-works/pi/issues/12510) · [#12561](https://github.com/earendil-works/pi/issues/12561)

- **会话上下文与历史管理**：社区希望保留压缩前消息、支持树导航摘要，并改善自动重载后的工具顺序稳定性，以兼顾可读性、上下文连续性和缓存命中率。  
  [#12565](https://github.com/earendil-works/pi/issues/12565) · [#12577](https://github.com/earendil-works/pi/pull/12577) · [#12547](https://github.com/earendil-works/pi/issues/12547)

- **终端与交互体验**：Kitty 图片、滚动历史、Windows 终端恢复、自定义 footer 和 assistant prose 宽度，显示社区仍在持续打磨 TUI 细节。  
  [#12548](https://github.com/earendil-works/pi/issues/12548) · [#12564](https://github.com/earendil-works/pi/issues/12564) · [#12560](https://github.com/earendil-works/pi/issues/12560) · [#12607](https://github.com/earendil-works/pi/issues/12607)

## 开发者关注点

- **上下文必须准确且可恢复**：截断提示、推理字段、压缩历史和 Codemode 错误不能只“执行成功”，还必须让模型明确知道哪些内容缺失、为何失败以及如何恢复。
- **长会话不能持续泄漏资源**：SDK 使用者关注 `dispose()`、`invalidate()` 后能否真正释放对象，以及 Durable 关闭时能否等待任务完成，避免 OOM、丢任务或脏写。
- **缓存命中率和请求稳定性直接影响成本**：工具顺序变化、重试分类遗漏、Provider 默认模型漂移和超大本地请求，都会造成额外延迟与 Token 消耗。
- **扩展接口需要稳定且可发现**：公开 MCP Hook、JSON Schema、可靠的 Provider 注册，以及统一的图片能力协议，是第三方扩展进入生产环境的基础。
- **后台 Agent 必须具备明确的数据与任务语义**：删除会话、取消后台工作、fork 清理和优雅停机，需要保证不会留下孤儿任务或不可恢复的状态。
- **终端兼容不能以破坏历史为代价**：Kitty 图像、scrollback、Windows 键盘模式和退出恢复等问题表明，Agent CLI 的可靠性不仅取决于 API，也取决于对终端协议细节的正确处理。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
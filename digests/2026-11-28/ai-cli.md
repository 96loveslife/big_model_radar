# AI CLI 工具社区动态日报 2026-11-28

> 生成时间: 2026-11-28 07:11 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-28**

## 1. 生态全景

当前主流 AI CLI 正从单纯的“代码生成器”快速演化为具备**多代理协作、工具调用、MCP 扩展、浏览器自动化和沙箱执行能力**的研发代理平台。社区关注点已明显从功能扩张转向工程化成熟度，核心集中在**权限一致性、上下文压缩、跨平台兼容、子代理生命周期和故障可诊断性**。Claude Code、Gemini CLI、OpenCode 与 pi 的动态表明，工具数量膨胀、后台任务和会话持久化正在成为新的可靠性瓶颈。与此同时，Codex 与 Copilot CLI 在桌面端、ACP 协议和企业认证方面的投入，显示竞争已延伸至完整开发生命周期。

---

## 2. 各工具活跃度对比

> Issue、PR 数量按所给日报中明确列出的“今日更新条目”统计，未列出的完整仓库数量不视为全量统计。

| 工具 | 今日 Issues | 今日 PRs | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 15 | 4 | 无新版本 | 高：长期稳定性、Desktop 回归和权限问题集中爆发 |
| **OpenAI Codex** | 10 | 10 | `rust-v0.174.0-alpha.9` | 高：沙箱与 TUI 修复密集，仍处 Alpha 快速迭代期 |
| **Gemini CLI** | 10 | 10 | 无新版本 | 高：Subagent、MCP、沙箱与错误处理同步推进 |
| **GitHub Copilot CLI** | 15 | 0 | `v1.0.118-0/-1/-2` | 高：连续发布修复，但 PR 暂无更新，ACP 问题突出 |
| **Kimi Code CLI** | 0 | 0 | 无 | 低：过去 24 小时无活动 |
| **OpenCode** | 10 | 10 | 无新版本 | 高：v2.4.x 回归、权限安全与并行代理问题密集 |
| **jcode** | 2 | 13 | `v1.1.6` | 高：以小型社区高频迭代为主，PR 产出突出 |
| **pi** | 10 | 10 | `v1.7.0` | 高：压缩、持久化、多模态与 MCP 协议同步演进 |

### 活跃度观察

- **GitHub Copilot CLI 的发布节奏最快**：24 小时内连续发布三个修订版本，集中处理 MCP 并发、Ctrl+R 和沙箱 CA 展示。
- **jcode 的开发吞吐突出**：仅 2 个 Issue，却有 13 个 PR 更新，体现“小团队、高频开发”模式。
- **Claude Code 与 Copilot CLI 的社区问题面最广**：两者均列出 15 个热点 Issue，问题覆盖权限、插件、平台、认证和会话数据。
- **Kimi Code CLI 是唯一完全静默项目**，无法从本期数据判断其产品路线或维护节奏。

---

## 3. 共同关注的功能方向

### 3.1 权限与沙箱一致性

这是六个活跃项目共同面对的第一优先级问题。

- **Claude Code**：Bash 引号误报、Skill `allowed-tools` 不生效、MCP/Agent 权限配置不一致。
- **Codex**：连续修复 Windows/Linux 沙箱、符号链接绕过、挂载顺序、只读限制及 TUI 权限展示。
- **Gemini CLI**：YOLO 模式需要正确贯穿污点检查和 PolicyEngine，沙箱拒绝错误需准确识别。
- **Copilot CLI**：明确授权 skills 目录写入仍触发绕过审批，ACP 需公布真实模型及层级状态。
- **OpenCode**：`ask` 权限被静默放行，浏览器权限可经 `execute` 绕过，Windows Shell 扫描漏判危险命令。
- **pi**：涉及工具 Schema、reasoning signature 和 MCP 能力 hook 的规范化。

**共同诉求**：权限系统必须基于真实执行路径和服务端确认状态，不能只依赖本地配置或不同工具入口各自判断。

### 3.2 上下文压缩与 Token 预算

多个工具已把压缩机制视为生产可用性的关键路径。

- **pi**：自动压缩失败后无限重试；压缩后不重新计算输出预算；CJK token 低估导致永久压缩失败。
- **Copilot CLI**：推理 token 被过度计入，导致窗口仅使用约 30%–40% 就提前压缩。
- **Claude Code**：请求按 Agent 设置独立 auto-compact 边界。
- **Gemini CLI**：AST 感知读取和代码库映射被用于减少整文件加载与重复探索。
- **OpenCode**：Code Mode 和插件工具缺少超时，也可能间接造成会话阻塞。

**共同诉求**：压缩必须具备**失败熔断、准确 token 估算、压缩后预算重算、Agent 级独立预算和可观测状态**。

### 3.3 子代理与多代理协作

- **Claude Code**：Explore Agent 因 MCP 工具过多而无法启动；社区要求按 Agent 裁剪工具和上下文。
- **Codex**：审批取消、线程权限和任务生命周期持续修复。
- **Gemini CLI**：Subagent 达到最大轮次却误报成功、Generalist Agent 挂起，后台任务和轨迹共享是重点。
- **OpenCode**：子代理强制后台执行导致父代理频繁唤醒；需求覆盖命名通信、多模型协作和 Agent Teams。
- **jcode**：自动推进未完成目标、合并或精确控制子代理取消范围，并清理临时资源。
- **pi**：`pi-durable` 推进跨设备迁移和低内存上下文迭代。

**共同诉求**：子代理需要**可信终止状态、可中断、可恢复、可观察，并能在有限上下文内运行**。

### 3.4 MCP 扩展生态成熟化

- **Claude Code**：OAuth Token 静默过期、过多 MCP Server 导致上下文膨胀、插件自动补全缺失。
- **Codex**：加强远程 MCP 审批 fixture 与协议测试覆盖。
- **Gemini CLI**：转发 MCP 协议版本和 Session ID，并修复有状态 HTTP 服务端兼容性。
- **Copilot CLI**：并发修改 MCP 配置会互相覆盖；企业 MCP 登录凭据无法缓存。
- **OpenCode**：MCP 初始化超时后回退 Legacy 协议，OAuth 元数据解码时序修复。
- **pi**：支持无状态 MCP 协议及宿主托管文件传输。

**共同诉求**：MCP 支持正在从“能连接”转向**协议一致、认证可靠、初始化可恢复、工具注册可治理**。

### 3.5 跨平台与桌面端可靠性

- **Windows**：Codex Work 的 Local/Cloud 选择器消失；Copilot Unicode 路径失败；OpenCode PowerShell 并行调用失败；Claude Code 与 npm/原生安装差异。
- **macOS**：Codex 虚拟显示器崩溃和 `CODEX_CLI_PATH`；Copilot Keychain 缓存失败；OpenCode 本地网络权限失效；Claude Code Desktop 升级后数据丢失。
- **Linux/Wayland**：Gemini Browser Agent 异常；Codex 沙箱符号链接问题；jcode ARM64/glibc 兼容；pi WSL 检测。

**共同诉求**：CLI 与桌面端之间需要共享稳定的路径、进程、凭据、权限和升级迁移契约。

### 3.6 可观测性与明确错误反馈

- **Claude Code**：避免静默清理 Issue，并保护高影响反馈不被标记 stale。
- **Codex**：TUI 显示服务端确认的实际线程权限。
- **Gemini CLI**：统一退出码，区分网络传输失败与 HTTP 503。
- **Copilot CLI**：ACP 内容过滤不能静默返回空白回合。
- **OpenCode**：工具执行需有超时，后台任务需可查看和等待。
- **pi**：导出、压缩、codemode 截断和锁文件状态需要可靠反馈。

**共同诉求**：工具需要区分“成功、未完成、被拒绝、超时、过滤、资源不足”等状态，避免假成功和空白结果。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与差异化 |
|---|---|---|---|
| **Claude Code** | Skills、MCP、Desktop 会话、计划任务、远程控制 | 高度依赖 Anthropic 模型、桌面端和多代理工作流的团队 | 强调权限声明、Agent 上下文隔离和生态扩展；当前短板集中在长期稳定性、Desktop 升级安全和上下文膨胀 |
| **OpenAI Codex** | 沙箱执行、Work 本地/云端、Computer Use、TUI | 需要本地代码执行、审批和企业控制的开发者 | Rust CLI 与 app-server 深度结合，强调服务端权限事实来源；技术壁垒在跨平台沙箱和桌面自动化 |
| **Gemini CLI** | Subagents、Browser Agent、Skills、AST、MCP | Google 生态用户及多模态、浏览器自动化开发者 | 围绕 Gemini API 与开放扩展生态构建；优势是多模态和浏览器方向清晰，短板是子代理生命周期和工具规模治理 |
| **GitHub Copilot CLI** | GitHub/PR 工作流、ACP、插件、沙箱、企业认证 | GitHub 用户、企业研发团队和第三方 ACP 客户端 | 与 GitHub 平台、App 和扩展生态结合紧密；优势是交付与 PR 流程，短板是 ACP 模型能力披露和扩展规则一致性 |
| **OpenCode** | 多模型、Code Mode、插件、MCP、多代理 | 追求开放 Provider、自托管和高度可定制能力的个人或团队 | Provider 自由度和插件化强，Code Mode 统一工具执行；当前 v2.4.x 回归与权限绕过问题较突出 |
| **jcode** | 自动推进、Swarm、多模型路由、TUI | 偏好自动持续执行、任务交付和多代理编排的用户 | 小团队快速迭代，突出未完成目标自动推进和 TUI；规模较小，发布与平台兼容性仍需加固 |
| **pi** | 编程代理基础运行时、durable 持久化、多模态、扩展 API | 重视可嵌入性、长期会话和底层扩展控制的开发者 | 更接近可编程代理运行时；`pi-durable`、扩展 hooks 和统一图像 API 构成差异化方向 |
| **Kimi Code CLI** | 本期信息不足 | 本期无法判断 | 24 小时无活动，暂不宜基于日报判断产品成熟度或战略方向 |

### 定位差异总结

- **平台型优势**：Copilot CLI 与 GitHub 工作流天然结合；Codex 与 OpenAI/Codex Work 生态结合。
- **扩展型优势**：Claude Code 的 Skills、MCP 和 Marketplace 体系更成熟；Gemini CLI 的 Subagent、Browser 与 AST 方向更鲜明。
- **开放型优势**：OpenCode 的 Provider 自由度和插件机制明显；pi 更偏底层运行时和可嵌入架构。
- **快速试验型优势**：jcode 以小团队高频 PR 推进自动交付和 Swarm，但生态规模与稳定性尚未达到成熟项目水平。

---

## 5. 社区热度与成熟度

### 社区热度

1. **OpenCode**  
   热点 Issue 最高评论数为 **417**，免费额度问题形成规模化支持入口；同时权限回归、会话数据丢失和并行 Shell 故障影响广泛。

2. **Claude Code**  
   多个长期 Issue 累积到 **149、40、39 条评论**，长期使用用户参与度高，问题已从单点故障演变为系统稳定性反馈。

3. **Copilot CLI**  
   ACP/Fusion 问题成为主要集中点，插件规则、PR 会话、企业认证和跨平台路径问题迅速形成多个新 Issue。

4. **Gemini CLI**  
   讨论量整体低于前三者，但 Subagent 终止状态、Browser Agent 和 AST 工具方向明确，技术密度较高。

5. **Codex**  
   社区问题数量较多，且沙箱修复 PR 密度高；其热度更多来自安全敏感型开发者和桌面端用户。

6. **pi 与 jcode**  
   规模较小但开发密度高。jcode 出现 **13 个 PR**，pi 则围绕 durable、压缩和多模态形成较完整路线。

### 成熟度判断

- **相对成熟**：GitHub Copilot CLI、Claude Code、OpenAI Codex  
  已有稳定发布渠道、桌面端、协议层和企业场景，但复杂生态带来大量跨模块回归。
- **快速成熟**：Gemini CLI、OpenCode  
  功能扩张快，但 Subagent、权限和版本回归仍明显。
- **早期快速迭代**：jcode、pi  
  jcode 的产品闭环逐步形成，但自动更新和平台兼容性仍处于补课阶段；pi 的底层架构方向清晰，压缩与持久化仍需验证。
- **信息不足**：Kimi Code CLI  
  24 小时无活动不能直接等同于项目停滞，需要更多时间窗口判断。

---

## 6. 值得关注的趋势信号

### 6.1 “工具越多越强”正在转为“工具治理能力”竞争

Claude Code、Gemini CLI 和 OpenCode 都出现 MCP/工具定义挤占上下文的问题。未来差异化不会只是支持多少 MCP Server，而在于：

- 是否能按任务和 Agent 动态筛选工具；
- 是否支持按需加载、分组注册和独立上下文预算；
- 是否能在减少工具数量后保持任务成功率。

### 6.2 权限模型必须从“入口校验”升级为“端到端策略”

Codex 以服务端确认权限替代本地配置展示，OpenCode 则暴露 `execute` 绕过浏览器权限，Copilot 和 Claude 也存在声明权限与执行结果不一致。可信架构应统一覆盖：

**工具声明 → 代理继承 → 实际执行器 → 沙箱 → UI 展示 → 审计日志**

### 6.3 假成功与静默失败成为 Agent 产品的核心风险

Gemini 的 Subagent 达到上限仍报告成功、Copilot ACP 内容过滤后空白结束、Claude Code OAuth 静默失效，都可能让上层编排系统基于错误状态继续执行。未来 Agent API 应提供结构化终止原因，并区分完成、取消、超时、预算耗尽、策略拒绝和内部错误。

### 6.4 会话数据安全将超越模型能力成为采购指标

Claude Code Desktop 升级后计划任务和会话消失、OpenCode 双击 Esc 删除大量历史、pi 压缩失败后无限重试，均说明长会话持久化仍不成熟。生产采用应重点评估：

- 升级前后自动备份与回滚；
- 压缩和中断操作的原子性；
- 会话索引与正文的一致性；
- 多账户和多设备迁移能力。

### 6.5 MCP 正进入“协议与运维成熟期”

各工具的 MCP 修复已不再局限于连接失败，而是集中在协议版本、Session ID、OAuth 刷新、无状态协议、并发配置和文件传输。评估 MCP 生态时，应同时检查**协议合规、认证、并发、故障恢复和扩展生命周期**。

### 6.6 ACP 成为第三方代理集成的关键竞争层

Codex 的 Work 模式、Copilot 的 Fusion 路由以及 pi 的 Cursor ACP 接入都表明，CLI 能力正向外部编辑器与代理平台开放。ACP 客户端能否获得真实模型、推理等级、停止原因和权限状态，将直接影响第三方集成质量。

### 6.7 跨平台一致性仍是商业化瓶颈

Windows Shell、macOS Keychain 和本地网络权限、Wayland、Linux ARM64、WSL 与 Git worktree 都在不同项目中重复出现。对团队而言，应建立覆盖以下矩阵的自动化测试：

**安装方式 × Shell × 文件系统 × 凭据存储 × 沙箱 × Desktop 升级**

### 6.8 多代理的下一阶段是调度经济性，而非单纯增加 Agent 数量

OpenCode 合并子代理完成唤醒、Claude Code 请求 Agent 级压缩窗口、jcode 自动推进未完成目标、pi 降低持久化内存占用，说明优化重点正在转向：

- 减少重复模型调用；
- 精确控制唤醒时机；
- 合并完成信号；
- 限制任务树取消范围；
- 降低子代理上下文占用。

---

## 技术决策建议

### 优先选择标准

1. **需要与 GitHub/PR 流程深度整合**：优先评估 Copilot CLI，但需验证 ACP 路由和插件规则完整性。
2. **需要本地执行、强沙箱与审批**：重点评估 Codex，优先跟踪稳定版，避免直接依赖 Alpha。
3. **需要多模型、插件和 Code Mode**：OpenCode 灵活性高，但 v2.4.x 生产使用前应重点测试权限和会话恢复。
4. **需要 Anthropic Skills/MCP/Desktop 协同**：Claude Code 生态成熟，但应规避或等待 Desktop 迁移问题收敛。
5. **需要 Google 多模态、浏览器与 AST 探索**：Gemini CLI 方向突出，但应验证 Subagent 终止与恢复机制。
6. **需要可嵌入、长会话和自定义扩展**：pi 具备潜力，但压缩与 durable 仍属高风险区域。
7. **需要轻量自动持续执行**：jcode 更新快，但应先验证自动更新、ARM64 和取消作用域。

### 共同建议

- **暂缓无人值守使用**存在权限静默放行、假成功或数据丢失风险的版本。
- 建立统一的**升级前会话备份、压缩失败检测、审批状态核对和工具超时**监控。
- 对 MCP、ACP、Skills 和插件建立**真实能力清单**，不要仅依据“已加载”判断功能可用。
- 在团队试点中优先覆盖 **Windows、macOS、Linux ARM64、Wayland、WSL 和多账户**等高差异环境。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-11-28  
> 说明：给定 PR 列表的评论字段均为 `undefined`，因此以下“关注度”主要依据 PR 热度排序、Issue 评论数、👍 数及更新活跃度综合判断，不代表可靠的 PR 评论总量。

## 1. 热门 Skills 排行

### 1. `mcp-builder`：适配新版 MCP SDK，并支持自定义 HTTP Header

- **PR**：[ #1742 — support mcp>=2 streamable_http_client import and custom headers](https://github.com/anthropics/skills/pull/1742)
- **功能**：指导 Claude 构建 MCP Server，并处理连接、传输和认证配置。
- **讨论热点**：
  - MCP 2.x 将 `streamablehttp_client` 更名为 `streamable_http_client`。
  - 自定义 HTTP Header 应通过 `create_mcp_http_client` / `http_client` 配置。
  - 反映生态已从“写 Demo”转向“兼容真实 SDK 版本和生产环境连接配置”。
- **当前状态**：**Open**
- **判断**：这是当前最值得优先关注的基础设施型修复，直接影响现有 MCP Skill 的可用性。

### 2. `skill-creator`：提升触发评测的可靠性

- **PR**：[ #1298 — isolate trigger evals and handle Windows and runtime failures](https://github.com/anthropics/skills/pull/1298)
- **关联 Issue**：
  - [#556 — run_eval.py 触发率为 0%](https://github.com/anthropics/skills/issues/556)
  - [#1352 — 并行 worker 串扰导致假阴性](https://github.com/anthropics/skills/issues/1352)
- **功能**：创建、评估和优化 Skill，尤其用于测试描述能否被 Claude 正确触发。
- **讨论热点**：
  - 并行 worker 竞争、UUID 串扰造成系统性假阴性。
  - Windows 下 `select()` 处理管道失败。
  - Runtime 错误被误判为“未触发”，进而污染负例评分。
- **当前状态**：**Open**
- **判断**：属于 Skills 生态的“元基础设施”。触发评测不可靠，会直接影响 Skill 发布、调试和自动化优化流程。

### 3. `skill-creator`：支持直接运行打包脚本

- **PR**：[ #1681 — support direct execution of package_skill.py](https://github.com/anthropics/skills/pull/1681)
- **功能**：校验并打包可分发 Skill。
- **讨论热点**：
  - 直接执行 `package_skill.py` 会出现 `ModuleNotFoundError`。
  - CLI 帮助和文档中的调用路径过时。
  - 社区期待更顺畅的本地打包、验证与发布流程。
- **当前状态**：**Open**
- **判断**：单点功能不如触发评测重要，但直接改善贡献者和日常用户的发布体验。

### 4. `skill-creator`：正确解析 YAML Frontmatter

- **PR**：[ #1997 — parse YAML frontmatter scalars correctly](https://github.com/anthropics/skills/pull/1997)
- **功能**：确保 Skill 描述、名称等元数据在评测和优化时与原始 `SKILL.md` 一致。
- **讨论热点**：
  - 手工去引号、拼接续行的方式无法正确处理 YAML。
  - 引号、反斜杠和转义字符可能损坏，导致 Skill 描述失真。
  - 核心诉求是避免“源文件正确、评测时却使用了另一份元数据”。
- **当前状态**：**Open**
- **判断**：影响触发评测和描述优化，应与 #1298、#1352 联动看待。

### 5. `webapp-testing`：增强浏览器测试安全性与元素识别

- **PRs**：
  - [#1980 — avoid shell=True in with_server.py](https://github.com/anthropics/skills/pull/1980)
  - [#1976 — report textarea and select correctly](https://github.com/anthropics/skills/pull/1976)
- **功能**：启动 Web 应用、执行浏览器测试、检查页面元素和交互行为。
- **讨论热点**：
  - `shell=True` 带来命令注入风险（CWE-78）。
  - `textarea`、`select` 被错误报告为普通 `text`。
  - 社区同时关注安全性和测试断言准确性。
- **当前状态**：均 **Open**
- **判断**：Web 测试是高需求场景；该 Skill 正从“能跑”向“安全、可验证”演进。

### 6. `docx`：增强修订接受操作的结果验证

- **PR**：[ #1792 — report LibreOffice timeout as an error and verify the output](https://github.com/anthropics/skills/pull/1792)
- **关联 Issue**：[ #1734 — Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734)
- **功能**：处理 DOCX 修订、批注、格式转换及文档生成。
- **讨论热点**：
  - LibreOffice 超时不能被误报为成功。
  - 成功标准应包括检查 `w:ins`、`w:del` 等修订标记是否真正清除。
  - 社区希望“操作完成”与“结果正确”建立可验证的闭环。
- **当前状态**：#1792 **Open**；#1734 **Open**
- **判断**：文档 Skills 用户多、反馈密度高，可靠性修复通常具有广泛影响。

### 7. `xlsx`：增强外部链接风险检测

- **PR**：[ #2019 — resolve worksheet-scoped defined names and aliases in external_links_at_risk](https://github.com/anthropics/skills/pull/2019)
- **关联 Issue**：[ #2013](https://github.com/anthropics/skills/issues/2013)
- **功能**：分析 Excel 公式、外部链接、定义名称及潜在风险。
- **讨论热点**：
  - 工作表级 `defined_names`、别名和间接引用会造成漏报。
  - 重点不是简单生成表格，而是发现财务和业务数据中的隐蔽外部依赖。
- **当前状态**：**Open**
- **判断**：体现 XLSX Skill 正向企业级审计、公式溯源和安全检查方向发展。

### 8. `claude-api`：更新 API 与 Claude Code 集成知识

- **PRs**：
  - [#1730 — replace dead URLs in academy-guide and tool-use-concepts](https://github.com/anthropics/skills/pull/1730)
  - [#1950 — update Python pause_turn runner guidance](https://github.com/anthropics/skills/pull/1950)
- **关联 Issue**：[ #1487 — `claude-api` 单次注入约 156k tokens](https://github.com/anthropics/skills/issues/1487)
- **功能**：提供 Claude API、工具调用、Agent Loop 等开发指导。
- **讨论热点**：
  - 文档链接失效以及 SDK 行为升级。
  - Python SDK 1.1.0 已支持自动恢复 `pause_turn`，旧的外层重启方案过时。
  - 大体积 Skill 一次性注入可能耗尽上下文窗口。
- **当前状态**：均 **Open**
- **判断**：官方核心 Skill 的维护价值很高，但“内容新鲜度”和“渐进式加载”需要同步治理。

---

## 2. 社区需求趋势

### 2.1 组织级共享与 Skill 分发

- **Issue**：[ #228 — Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)
- 用户仍依赖 `.skill` 文件下载和 Slack/Teams 转发。
- 社区期待：
  - 企业组织共享库；
  - 可控的团队发布与版本管理；
  - 更直接的安装、订阅和更新链接。
- **热度**：17 条评论、8 个 👍，是 Issues 中最明确的产品化需求之一。

### 2.2 可信来源、命名空间与供应链安全

- **Issue**：[ #492 — Community skills distributed under anthropic/ namespace enable trust boundary abuse](https://github.com/anthropics/skills/issues/492)
- 社区 Skill 若使用官方命名空间，容易让用户误以为其经过 Anthropic 审核。
- 社区期待：
  - 明确区分官方、认证与个人 Skill；
  - 建立发布者身份和签名机制；
  - 对权限、脚本和供应链风险提供可见提示。
- **热度**：46 条评论，为所列 Issues 中最高。

### 2.3 通用 Agent 质量门禁与交付验证

- **Issue**：[ #1385 — Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)
- 社区提出三阶段流程：
  1. 任务前校准；
  2. 对抗式审查；
  3. 交付前验证。
- 体现了从“生成答案”向“可审计工作流”演进的趋势，尤其适合代码、文档和复杂研究任务。

### 2.4 Agent 治理、安全与审计

- **Issue**：[ #412 — Skill proposal: agent-governance](https://github.com/anthropics/skills/issues/412)
- 关注点包括策略执行、威胁识别、信任评分和审计轨迹。
- 与 #492 的供应链安全问题相互印证：社区不只关注 Skill 能否工作，也关注其权限边界和责任归属。

### 2.5 紧凑记忆与长上下文管理

- **Issue**：[ #1329 — compact-memory](https://github.com/anthropics/skills/issues/1329)
- 社区希望以符号化、结构化方式压缩 Agent 状态，减少长任务中的上下文占用。
- 这与 [#1487](https://github.com/anthropics/skills/issues/1487) 暴露的上下文膨胀问题相呼应。

### 2.6 Skill 描述与触发机制优化

- **Issues**：
  - [#556 — run_eval.py 触发率为 0%](https://github.com/anthropics/skills/issues/556)
  - [#1352 — 并行 worker 导致假阴性](https://github.com/anthropics/skills/issues/1352)
  - [#2064 — description 未说明何时使用](https://github.com/anthropics/skills/issues/2064)
- 社区期待的是可量化、可重复的触发评测，而不是仅凭感觉修改描述。
- 描述既要说清“能做什么”，也要明确“何时应调用、何时不应调用”。

### 2.7 新增垂直场景 Skill

热门 PR 还显示出明确的垂直需求：

- **智能合约审计**：[`proofcore-contract-auditor`，PR #1771](https://github.com/anthropics/skills/pull/1771)
- **HPC / Slurm 集群操作**：[`scnet-hpc`，PR #1615](https://github.com/anthropics/skills/pull/1615)
- **Notion 规格转实施任务**：[PR #1245](https://github.com/anthropics/skills/pull/1245)
- **Markdown 转视频/音频**：[`md2video-audio`，PR #1703](https://github.com/anthropics/skills/pull/1703)
- **复古游戏开发**：[`pyxel`，PR #525](https://github.com/anthropics/skills/pull/525)

这表明社区已从通用文档类 Skill 扩展到研发基础设施、安全审计和专业内容生产。

---

## 3. 高潜力待合并 Skills

| 优先级 | PR / Skill | 潜力判断 |
|---|---|---|
| 高 | [#1298 `skill-creator` 触发评测修复](https://github.com/anthropics/skills/pull/1298) | 直接修复多个高热度 Issue，影响 Skill 创建、评测和发布全链路。 |
| 高 | [#1681 `skill-creator` 打包脚本直接执行](https://github.com/anthropics/skills/pull/1681) | 改动清晰、用户痛点明确，可显著降低贡献和发布门槛。 |
| 高 | [#1997 YAML Frontmatter 解析修复](https://github.com/anthropics/skills/pull/1997) | 与触发评测高度相关，属于小改动、高收益型修复。 |
| 高 | [#1980 `webapp-testing` 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980) | 修复命令注入风险，安全价值高，适合快速合入。 |
| 中高 | [#1792 `docx` 超时及修订验证](https://github.com/anthropics/skills/pull/1792) | 覆盖广泛文档场景，可避免“假成功”。 |
| 中高 | [#2019 `xlsx` 外部链接检测](https://github.com/anthropics/skills/pull/2019) | 扩展企业级公式风险检查，实用价值明确。 |
| 中高 | [#1742 `mcp-builder` MCP 2.x 兼容](https://github.com/anthropics/skills/pull/1742) | 修复版本升级导致的直接故障，对 MCP 用户影响较大。 |
| 中 | [#1730 `claude-api` 失效链接修复](https://github.com/anthropics/skills/pull/1730) | 范围小、风险低，可快速改善官方文档可信度。 |
| 中 | [#1950 `claude-api` `pause_turn` 指南更新](https://github.com/anthropics/skills/pull/1950) | 避免继续推荐已经过时的 SDK 处理方式。 |
| 中 | [#1976 `webapp-testing` 元素识别修复](https://github.com/anthropics/skills/pull/1976) | 修复边界明确，有助于提升浏览器测试结果准确性。 |

> 所谓“高潜力”并不等同于已得到大量 PR 评论支持；由于数据中 PR 评论数缺失，此处按影响范围、关联 Issue 热度、修复确定性和更新时间排序。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“能调用的提示词集合”升级为“可分发、可验证、可审计、可信赖的 Agent 工作流组件”——尤其需要解决来源信任、组织共享、触发评测、上下文成本和结果验证问题。**

---

# Claude Code 社区动态日报

**日期：2026-11-28**  
**数据范围：** `anthropics/claude-code` 过去 24 小时更新的 Issues 与 PRs；过去 24 小时无新版本发布。

## 今日速览

- 今日社区讨论高度集中在**稳定性与回归问题**：长期反馈汇总、图片超限后上下文污染、MCP/Agent 启动失败、Desktop 更新导致计划任务丢失等问题受到广泛关注。
- 维护端开始系统性清理长期未处理 Issue：新的 PR 会在标记 stale 时留言，并避免将可复现、高影响及潜在数据丢失的问题误判为过期。
- 权限与自动化体验仍是核心诉求，包括 Skill 权限、Bash 警告误报、Plan/Auto Mode 兼容，以及按 Agent 独立配置上下文压缩窗口。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

### 1. 长期使用中的重复错误被系统化汇总
[#69044](https://github.com/anthropics/claude-code/issues/69044) · **149 条评论，OPEN**

用户提交了数月日常使用中持续出现的错误、失败模式与结构化反馈。这不是单一故障，而是对长期稳定性问题的集中曝光，具有较高产品诊断价值；评论数位列本次更新首位。

### 2. 图片超限后污染上下文，后续请求持续失败
[#2939](https://github.com/anthropics/claude-code/issues/2939) · **40 条评论，63 👍，CLOSED**

上传超大图片后，超限图片仍可能残留在消息上下文中，导致后续 API 请求持续返回 400。该问题揭示了错误输入清理和会话容错机制的不足，兼具 API 稳定性与用户体验影响。

### 3. Bedrock 下 `max_tokens` 与思考预算冲突
[#8756](https://github.com/anthropics/claude-code/issues/8756) · **39 条评论，34 👍，CLOSED**

当 `max_tokens` 不大于 `thinking.budget_tokens` 时，请求无法通过校验。问题涉及扩展思考参数配置与 Bedrock 兼容性，对企业用户和复杂推理任务影响明显。

### 4. Bash 参数引号触发多余权限警告
[#27957](https://github.com/anthropics/claude-code/issues/27957) · **27 条评论，74 👍，CLOSED**

`git commit -m "message"` 等常规命令会触发 “Command contains quoted characters in flag names” 确认框。社区希望提供关闭或调整该警告的选项，👍 数高于评论数，说明改善交互摩擦具有广泛共识。

### 5. Desktop 多账户场景无法恢复其他账户的本地会话
[#74662](https://github.com/anthropics/claude-code/issues/74662) · **20 条评论，13 👍，OPEN**

个人与工作账户共用一个 Claude Desktop 安装时，服务端侧边栏按账户隔离，另一账户创建的本地会话无法显示或恢复。多账户是常见企业使用方式，当前能力仍显不足。

### 6. Desktop 更新后计划任务与本地会话列表消失
[#94628](https://github.com/anthropics/claude-code/issues/94628) · **7 条评论，1 👍，OPEN**

macOS Desktop 更新后，本地计划任务和会话列表被清空，但 claude.ai 网页端仍显示数据完整。该问题被标记为 `data-loss`，涉及用户资产持久化和升级迁移安全，是当前优先级较高的问题。

### 7. Desktop 计划任务不再自动启用 Remote Control
[#92276](https://github.com/anthropics/claude-code/issues/92276) · **18 条评论，14 👍，OPEN**

用户报告 Desktop `1.40609.0` 到 `1.44121.4` 之间出现回归，计划任务会话不再自动启用 Remote Control，新版本仍未恢复。它直接影响无人值守任务和远程控制工作流。

### 8. Skill 的 `allowed-tools` 未正确授予 Bash 权限
[#14956](https://github.com/anthropics/claude-code/issues/14956) · **19 条评论，33 👍，CLOSED**

Skill frontmatter 中声明的 `allowed-tools` 虽然显示为生效，但匹配到的 Bash 命令仍被拒绝。配置状态与实际执行权限不一致，容易导致自动化中断，也影响权限模型的可预测性。

### 9. MCP OAuth Token 缺少过期字段时静默失效
[#26281](https://github.com/anthropics/claude-code/issues/26281) · **17 条评论，33 👍，CLOSED**

当 OAuth 响应不包含 `expires_in` 和 `refresh_token` 时，客户端没有明确报错，Token 却会静默过期。对于大量依赖 MCP 集成的开发流程，这类故障难以排查。

### 10. 大量连接 MCP 工具时 Explore Agent 无法启动
[#38928](https://github.com/anthropics/claude-code/issues/38928) · **8 条评论，15 👍，CLOSED**

父会话连接较多 MCP Server 后，Explore 子 Agent 会在执行任何工具前直接报 “Prompt is too long”。问题表明工具定义可能过度占用 Agent 启动上下文，也暴露出缺少按 Agent 裁剪工具集或上下文的机制。

### 其他值得关注

- [`#38183`](https://github.com/anthropics/claude-code/issues/38183)：移除 resume 参数后，`SendMessage` 工具仍被引用，导致 Agent continuation 中断；25 条评论、32 👍。
- [`#16299`](https://github.com/anthropics/claude-code/issues/16299)：`.claude/rules/` 中带路径作用域的规则被全局注入，削弱项目级上下文隔离；16 条评论。
- [`#16905](https://github.com/anthropics/claude-code/issues/16905)：存在排队消息或后台任务时，Esc 中断提示出现但按键无效；8 条评论。

## 重要 PR 进展

> 本期仅更新了 4 个 PR，以下按相关程度列出全部 4 个。

### 1. stale 标记时在 Issue 中自动留言
[#112684](https://github.com/anthropics/claude-code/pull/112684) · **OPEN**

在自动 sweep 标记 Issue 为 stale 时同步发布通知，并限制每次最多处理 100 个 Issue。此举可减少无解释关闭或归档带来的信息断层，也使维护策略对社区更透明。

### 2. 不再将可复现或高影响 Issue 标记为 stale
[#112436](https://github.com/anthropics/claude-code/pull/112436) · **CLOSED**

若 Issue 带有 `has repro`、`reproduced`、`data-loss` 或 `high-priority` 标签，清理任务不再将其标记或关闭为过期。该策略直接保护了证据充分、影响较高的反馈，特别是本期关注的数据丢失问题。

### 3. 去重 Agent 改为前台运行
[#106972](https://github.com/anthropics/claude-code/pull/106972) · **CLOSED**

去重任务此前可能在后台 Agent 尚未完成时提前结束。该 PR 通过 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` 并显式要求命令等待每个 Agent，提高维护流程的确定性与可靠性。

### 4. 补齐插件开发 Manifest 并校验内置 Marketplace
[#53529](https://github.com/anthropics/claude-code/pull/53529) · **CLOSED**

增加缺失的 `plugin-dev` Manifest，并为本地 Marketplace 条目加入 CI 校验，使无效插件引用能够在合并前被发现。此举有助于提升插件开发、打包和发布流程的稳定性。

## 功能需求趋势

### 1. 会话与 Agent 的上下文控制
- 请求按 Agent 角色设置独立的 auto-compact 边界，避免协调者与子 Agent 共用同一压缩窗口：[#90347](https://github.com/anthropics/claude-code/issues/90347)。
- 大量 MCP 工具导致 Agent Prompt 膨胀，需求延伸至工具按需加载、过滤和分批注册。
- 路径作用域规则被全局加载，社区期待 `.claude/rules/` 真正按文件路径生效：[#16299](https://github.com/anthropics/claude-code/issues/16299)。

### 2. 权限与审批体验
- 减少对正常 Bash 引号参数的误报警：[#27957](https://github.com/anthropics/claude-code/issues/27957)。
- 修复 Skill 声明工具权限与运行时授权不一致：[#14956](https://github.com/anthropics/claude-code/issues/14956)。
- 兼容 Plan Mode、Bypass Permissions 与 Auto Mode，组合行为需要更加一致。

### 3. Desktop 会话、Routines 与远程控制
- 支持多账户下本地会话的发现、打开与恢复：[#74662](https://github.com/anthropics/claude-code/issues/74662)。
- 避免升级后丢失计划任务和会话索引：[#94628](https://github.com/anthropics/claude-code/issues/94628)。
- 恢复计划任务自动启用 Remote Control 的行为：[#92276](https://github.com/anthropics/claude-code/issues/92276)。

### 4. Skills、插件与 MCP 生态
- Marketplace 插件中的 Skills 未出现在 `/` 自动补全中：[#18949](https://github.com/anthropics/claude-code/issues/18949)。
- `/skills` 在 Skill 已加载时仍显示 “No skills found”：[#14577](https://github.com/anthropics/claude-code/issues/14577)。
- MCP OAuth Token 的过期与刷新语义需要明确支持：[#26281](https://github.com/anthropics/claude-code/issues/26281)。

### 5. 输入容错与 API 稳定性
- 图片超限后应清理无效消息，避免污染整个上下文：[#2939](https://github.com/anthropics/claude-code/issues/2939)。
- 校验 `max_tokens` 与 thinking budget 的组合，并提供更清晰的错误信息：[#8756](https://github.com/anthropics/claude-code/issues/8756)。
- 新安装忽略 `settings.json` 的问题已获修复：[#13827](https://github.com/anthropics/claude-code/issues/13827)。

### 6. 跨平台与安装方式兼容
社区持续关注 Windows、macOS、Linux，以及原生安装、npm 安装和插件安装之间的行为差异，例如：

- 原生安装下 LSP 插件无法工作：[#20050](https://github.com/anthropics/claude-code/issues/20050)。
- `~/.claude` 与 `/tmp` 跨文件系统时插件安装报 `EXDEV`：[#18115](https://github.com/anthropics/claude-code/pull/18115)。
- Git worktree 中 sandbox 因 `.git` 文件结构失效：[#17374](https://github.com/anthropics/claude-code/issues/17374)。

## 开发者关注点

1. **升级不能造成数据丢失**  
   Desktop 更新后本地计划任务和会话列表消失，是本日最严重的风险点。开发者不仅关注功能恢复，也要求升级过程具备可靠备份、迁移和回滚机制。

2. **权限提示必须准确且低打扰**  
   正常 Bash 命令因引号触发警告、Skill 权限声明不生效、鼠标聚焦被误判为选择，均指向同一诉求：权限系统应做到“默认放行安全操作、敏感操作准确拦截”，避免误报造成自动化中断。

3. **Agent 上下文规模成为 MCP 扩展瓶颈**  
   MCP Server 数量增加后，工具定义直接挤占子 Agent 上下文。未来需要更完善的工具裁剪、按需加载、上下文预算和独立 compact 策略。

4. **错误需要可恢复，而非持续污染会话**  
   超限图片等无效输入应从请求或会话中安全移除；OAuth 失效、配置未生效等问题也应在发生时明确报错，而不是进入静默失败状态。

5. **跨环境一致性仍不足**  
   原生安装与 npm 安装、macOS 与 Windows、普通仓库与 Git worktree、单账户与多账户之间存在明显差异。插件、LSP、sandbox 和会话迁移都需要统一行为契约。

6. **社区治理开始走向可解释化**  
   自动 stale sweep 主动留言，并保护可复现、高优先级和数据丢失 Issue，表明维护策略正从“静默清理”转向“透明、可审计、低误伤”。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-28**  
**项目：** [openai/codex](https://github.com/openai/codex)

## 1. 今日速览

今日社区焦点集中在 **Codex Desktop/Work 的 Windows 与 macOS 稳定性**：本地/云端运行选择器消失、浏览器工具不可用、桌面端崩溃及模型容量错误仍是高热问题。开发侧同时推进了一批 **Linux/Windows 沙箱权限修复、TUI 状态展示与审批流程可靠性改进**，并发布了 `rust-v0.174.0-alpha.9` Alpha 版本。

## 2. 版本发布

### `rust-v0.174.0-alpha.9`

- Release： [rust-v0.174.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.9)
- 今日新增的 Rust Alpha 版本。
- 官方 Release 说明目前仅标注版本号，未提供更详细的变更清单；结合当天活跃 PR，重点方向包括：
  - 跨平台沙箱权限与文件系统策略修复；
  - TUI 权限状态、Markdown 和终端状态展示优化；
  - 命令审批、取消和会话关闭流程可靠性改进。

> 注意：Alpha 版本可能存在不稳定性，生产环境建议继续使用稳定版并关注后续 changelog。

## 3. 社区热点 Issues

### 1. TUI 在系统明暗主题切换后可能无法读取输入

- Issue：[ #45163](https://github.com/openai/codex/issues/45163)
- **为什么重要：** 调色板只在启动时缓存，系统主题切换后 TUI 可能保留不适配的颜色，导致输入内容不可见。这是直接影响日常 CLI 可用性的终端渲染问题。
- **社区反应：** 39 条评论、46 个赞，为今日讨论最充分的 Issue。

### 2. Windows Work 权限选择器在发送首条消息后消失

- Issue：[ #62975](https://github.com/openai/codex/issues/62975)
- **为什么重要：** 用户无法再选择 Local，且会话仍受到限制；这直接造成运行位置不可控和工作流阻塞。
- **社区反应：** 33 条评论、13 个赞。

### 3. GPT-6.1 Sol 使用额度消耗速度异常加快

- Issue：[ #60530](https://github.com/openai/codex/issues/60530)
- **为什么重要：** 用户反馈五小时额度消耗速度显著上升，涉及计费可信度、套餐容量和模型路由透明度。
- **社区反应：** 22 条评论；点赞较少，说明讨论可能更多集中在排查和数据核验。

### 4. ChatGPT 桌面端加载主页后反复出现 “ChatGPT hit a snag”

- Issue：[ #63869](https://github.com/openai/codex/issues/63869)
- **为什么重要：** 桌面应用主界面无法稳定进入，影响 ChatGPT 与 Codex 桌面端的整体可用性；问题在无配置变更的情况下自行消失又复现。
- **社区反应：** 19 条评论、7 个赞。

### 5. Windows 在线时 Local/Cloud 选择器消失，恢复离线后重现

- Issue：[ #63042](https://github.com/openai/codex/issues/63042)
- **为什么重要：** 与 #62975、#63093 构成同一问题簇，可能与在线状态、Work 初始化流程或 UI 条件渲染有关。
- **社区反应：** 19 条评论、13 个赞。多个相似 Issue 集中出现，侧面印证其影响范围较广。

### 6. macOS 在虚拟显示器变化时于 `CFUUIDCreateString` 附近崩溃

- Issue：[ #63249](https://github.com/openai/codex/issues/63249)
- **为什么重要：** 涉及显示器热插拔、虚拟显示设备和系统 API 生命周期，可能导致 macOS 桌面应用直接崩溃。
- **社区反应：** 16 条评论、4 个赞。

### 7. Windows Work 设置导致桌面浏览器访问被阻止

- Issue：[ #59181](https://github.com/openai/codex/issues/59181)
- **为什么重要：** 浏览器访问能力是 Work/Computer Use 的核心组成，设置错误或策略冲突会显著削弱代理执行能力。
- **社区反馈：** 18 条评论；暂无点赞，关注度主要来自受影响用户的反复反馈。

### 8. macOS Work Browser 在重装后仍出现 `CODEX_CLI_PATH` 错误

- Issue：[ #63315](https://github.com/openai/codex/issues/63315)
- **为什么重要：** 浏览器页面无法被读取，且重装桌面应用未能解决，指向 CLI 路径发现、进程启动或环境继承问题。
- **社区反应：** 14 条评论；尚无点赞，表明缺少官方结论或修复指引。

### 9. macOS 新建 Work 会话缺少本地/云端选择器

- Issue：[ #63093](https://github.com/openai/codex/issues/63093)
- **为什么重要：** 同样是关键运行位置控制入口消失，用户无法明确任务将在本地还是云端执行。
- **社区反应：** 14 条评论、8 个赞。该问题与 Windows 对应报告高度相似，可能需要跨平台统一排查。

### 10. ChatGPT Pro 200 账户出现账户级 “Selected model is at capacity”

- Issue：[ #63577](https://github.com/openai/codex/issues/63577)
- **为什么重要：** 同网络下其他账户不受影响，提示问题可能与账户路由、订阅资格或区域资源池有关，而非普通网络故障。
- **社区反应：** 13 条评论、2 个赞。

## 4. 重要 PR 进展

### 1. Windows 沙箱遵循声明的文件系统权限

- PR：[ #64416](https://github.com/openai/codex/pull/64416)
- 修复 MXC volume expansion 生成子授权后覆盖目录限制，以及 restricted-token 后端错误拒绝有效工作区策略的问题。
- **价值：** 防止沙箱权限被挂载或兼容检查意外扩大。

### 2. Linux 沙箱在可写符号链接别名下保留限制

- PR：[ #64415](https://github.com/openai/codex/pull/64415)
- 调整可写 bind mount 顺序，避免父挂载覆盖子路径上的 deny mask 和只读挂载。
- **价值：** 防止符号链接成为绕过沙箱文件权限的路径。

### 3. 探测 Bubblewrap 前先解析文件系统策略

- PR：[ #64422](https://github.com/openai/codex/pull/64422)
- 在候选 Bubblewrap 路径探测阶段即应用文件系统策略。
- **价值：** 避免在正式沙箱隔离生效前暴露受保护路径或策略元数据。

### 4. 远程测试保留本地 MCP Guardian elicitation fixtures

- PR：[ #64425](https://github.com/openai/codex/pull/64425)
- 当执行环境为 remote 时，让 Python MCP fixtures 仍能访问本地测试资源。
- **价值：** 提高远程环境下 MCP 审批/ elicitation 场景的测试覆盖与稳定性。

### 5. TUI 状态栏显示服务端确认的线程权限

- PR：[ #64396](https://github.com/openai/codex/pull/64396)
- 不再仅依据本地配置展示权限，而是显示线程实际确认的权限和审批状态。
- **价值：** 避免本地 profile 与 app-server 沙箱策略不一致造成误导。

### 6. 跟踪服务端确认的线程权限

- PR：[ #64393](https://github.com/openai/codex/pull/64393)
- 捕获并维护服务端返回的沙箱权限快照，为 TUI 状态展示提供可靠数据源。
- **价值：** 是权限显示、审批和诊断一致性的基础设施改进。

### 7. 修复 TUI 中行内代码前的 Markdown 换行

- PR：[ #64400](https://github.com/openai/codex/pull/64400)
- 修复列表项标题之后紧跟 inline code 时，代码被错误追加到标题行的问题。
- **价值：** 改善 CLI 输出可读性及 Markdown 渲染一致性。

### 8. Linux 沙箱在 shell snapshot replay 前绑定路径

- PR：[ #64388](https://github.com/openai/codex/pull/64388)
- 在 shell 环境快照重放前解析 `:tmpdir` 和 home-relative deny glob，并保持权限语义。
- **价值：** 防止环境变量变化后沙箱策略指向不同路径或失效。

### 9. 取消审批时及时中断运行中的命令

- PR：[ #64368](https://github.com/openai/codex/pull/64368)
- 避免记录被拒绝命令或历史写入阻塞取消流程，减少已取消命令继续运行和结果记录延迟。
- **价值：** 改善审批取消、会话响应速度及资源回收。

### 10. 命令审批在初次执行与重试间共享逻辑

- PR：[ #64355](https://github.com/openai/codex/pull/64355)
- 统一构建 `ApprovalContext` 和提交审批请求的路径；重试请求会携带重试原因及网络审批上下文。
- **价值：** 减少初次执行与重试行为不一致，提升审批状态机可靠性。

## 5. 功能需求趋势

### 沙箱与权限控制

- 社区高度关注 **Linux/Windows 沙箱边界、符号链接、挂载路径和只读限制**。
- 需求从“能否启动沙箱”转向“权限状态是否准确、限制是否可验证、UI 是否如实展示”。
- PR 连续涉及 Windows volume expansion、Bubblewrap 探测、remote plugin approval 等，说明权限正确性是近期开发重点。

### Work 本地/云端执行模式

- 多个 Issue 集中报告 Local/Cloud 选择器消失。
- 用户需要：
  - 明确任务将在本地还是云端运行；
  - 避免模式被静默改变；
  - 在 UI 中持续显示当前执行环境；
  - 获得“这是故障还是产品调整”的明确说明。

### 浏览器与 Computer Use 能力

- macOS `CODEX_CLI_PATH`、Windows Work 设置阻断浏览器访问，以及 Work 会话未挂载 Computer Use 工具，反映浏览器自动化仍是高价值但不稳定的能力。
- 用户关注工具是否实际附加到会话、权限为何被阻断，以及重装或切换网络能否恢复。

### 模型、额度与路由透明度

- 社区关注 GPT-6.1 Sol 的额度消耗速度、账户级容量错误，以及特定账户无法使用已选模型。
- 典型需求包括：
  - 清楚解释额度和速率限制；
  - 显示请求被路由到哪个资源池；
  - 区分账户资格、区域容量与本地网络故障；
  - 对异常消耗提供可查询数据。

### CLI/TUI 可观测性与扩展能力

- TUI 权限展示、Markdown 渲染、tmux OSC 8 超链接和任务完成 Hook 均受到关注。
- 社区希望 TUI 更准确反映服务端状态，并在不依赖文本解析的情况下感知完整任务生命周期。

### 桌面应用跨平台稳定性

- Windows 和 macOS 分别出现崩溃、页面加载失败、虚拟显示器异常、焦点与多屏布局问题。
- 用户期待桌面端在系统主题、显示器、浏览器桥接和离线/在线切换等真实环境变化下保持稳定。

## 6. 开发者关注点

1. **沙箱权限必须与 UI 展示一致**  
   开发者不仅关心命令是否被允许，也关心状态栏是否显示真实的线程权限。服务端确认权限正在替代本地配置成为事实来源。

2. **符号链接与挂载顺序是 Linux 隔离漏洞高发点**  
   多个 PR 同时处理 symlink alias、父/子挂载覆盖和只读挂载，说明沙箱边界测试需要覆盖复杂路径拓扑，而非仅验证普通目录。

3. **Windows 沙箱授权模型仍需加强**  
   MXC volume expansion 和 restricted-token 兼容检查可能破坏声明式权限，需要更多组合测试覆盖目录别名、子卷和当前工作目录。

4. **审批与取消流程存在时序一致性问题**  
   社区关注“命令实际是否停止”“历史是否完整”“重试是否继承审批上下文”。近期 PR 集中修复写入阻塞、事件丢失和重试逻辑分叉。

5. **Work 模式选择器消失可能是高优先级回归**  
   Windows 与 macOS 均出现同类报告，且涉及多个版本和在线状态，建议作为跨平台 Work 初始化与 UI 状态同步问题统一排查。

6. **模型容量和额度异常需要可解释性**  
   开发者希望区分模型容量、账户路由、订阅限制和客户端计数问题。单纯重试或切换网络往往不能解决账户级错误。

7. **桌面自动化依赖多个平台桥接组件**  
   `CODEX_CLI_PATH`、浏览器 native bridge、虚拟显示 API 和 DeviceCheck token 生成均出现故障，说明浏览器/Computer Use 的部署与诊断链仍较脆弱。

8. **功能扩展需求趋向“可集成”**  
   TaskCompleted Hook、项目 Skills 斜杠菜单、tmux 超链接支持等需求，体现出用户希望 Codex 更易嵌入现有终端、IDE 和自动化工作流。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-11-28

## 今日速览

过去 24 小时没有新版本发布，社区讨论高度集中在 **Subagent 稳定性与可观测性**：包括达到最大轮次却误报成功、Generalist Agent 卡死、配置未透传、Wayland 环境异常等。与此同时，MCP 协议版本转发、后台任务中止、权限与沙箱处理成为近期 PR 的修复重点。

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后仍被报告为成功
- **问题**：`codebase_investigator` 达到最大轮次、实际未完成分析，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真正的中断。
- **重要性**：错误的终止状态会误导上层 Agent、评测系统及用户，可能让未完成的代码分析被当作可靠结果继续使用。
- **社区反应**：14 条评论、2 个赞，是今日讨论热度最高的 Issue。
- [查看 Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. Generalist Agent 在简单任务中无限挂起
- **问题**：Generalist Agent 被调用后可能永久无响应，例如创建目录即可触发；显式禁止使用子 Agent 可暂时绕过。
- **重要性**：基础任务阻塞会直接破坏 CLI 的可用性，且问题可能与 Subagent 调度或通信机制有关。
- **社区反应**：8 条评论、8 个赞，关注度较高。
- [查看 Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. 评估 AST 感知的文件读取、搜索与代码库映射
- **问题**：社区正在评估 AST 工具能否更精确地读取方法边界、搜索语法节点并建立代码库结构图。
- **重要性**：这类能力有望减少无效上下文、降低 Token 消耗并缩短大型代码库的探索轮次，是 Agent 工具设计的关键方向。
- **社区反应**：7 条评论，并拆分为多个配套调查项。
- [查看 Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 4. Gemini 不会主动使用 Skills 和 Subagents
- **问题**：即使项目中已配置与任务高度相关的 Skills 和 Subagents，模型仍可能不主动调用，除非用户明确指定。
- **重要性**：暴露了 Agent 路由与自我决策机制不足，导致已有能力无法发挥，也增加主 Agent 的执行负担。
- **社区反应**：7 条评论；用户提供了具体 Skills 配置案例。
- [查看 Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 5. Browser Agent 应支持会话接管与锁恢复
- **问题**：持久化浏览器配置遇到已有实例或孤儿进程时，当前 BrowserManager 采用 fail-fast 策略，无法自动恢复。
- **重要性**：浏览器 Agent 在真实开发环境中常遭遇锁残留；自动接管可显著提高长任务、调试和无人值守运行的连续性。
- **社区反应**：6 条评论，聚焦持久化会话的可靠性。
- [查看 Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

### 6. Browser Agent 忽略 `settings.json` 中的配置覆盖
- **问题**：Browser Agent 未应用全局或项目级 `settings.json` 覆盖，例如 `maxTurns`，导致用户配置形同虚设。
- **重要性**：配置系统不一致会造成行为不可预测，也使测试、超时和资源限制难以按工作区生效。
- **社区反应**：5 条评论。
- [查看 Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 7. Browser Subagent 在 Wayland 环境下失败
- **问题**：Browser Subagent 在 Wayland 桌面环境中异常退出，即使最终显示 `Termination Reason: GOAL`。
- **重要性**：Linux 新桌面环境使用率上升，浏览器自动化是 Gemini CLI 扩展能力的重要组成，环境兼容问题值得优先处理。
- **社区反应**：4 条评论、1 个赞。
- [查看 Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 8. Agent 大量工具触发 API 400
- **问题**：当可用工具超过一定规模时，Gemini CLI 会收到 400 错误；Issue 摘要提到“超过 400 个工具”，标题则写“> 128 tools”，具体阈值仍需进一步确认。
- **重要性**：随着 MCP、Skills 和 Subagents 扩展，工具数量会快速增加；缺乏动态筛选或分组机制可能成为规模化使用障碍。
- **社区反应**：3 条评论；社区建议 Agent 自动限制当前作用域内的工具。
- [查看 Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 9. 限制 Shell 后，模型在随机位置创建临时脚本
- **问题**：禁用常规文件编辑能力后，模型倾向于通过 Shell 在多个目录生成编辑脚本，造成工作区污染和清理成本。
- **重要性**：体现工具权限调整后的行为迁移问题，也暴露出临时文件管理、路径约束和写入沙箱仍不完善。
- **社区反应**：3 条评论。
- [查看 Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 10. Agent 应阻止或劝阻破坏性操作
- **问题**：模型在复杂 Git 或数据库任务中偶尔使用 `git reset`、`--force` 等高风险命令，即使存在更安全的替代方案。
- **重要性**：安全治理不能只依赖最终审批，还需在命令规划阶段识别风险并主动选择保守策略。
- **社区反应**：3 条评论、1 个赞。
- [查看 Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## 重要 PR 进展

### 1. MCP 转发协议版本和 Session ID
- **变更**：`McpComplianceTransport` 现在向底层 `StreamableHTTPClientTransport` 转发 `setProtocolVersion` 和 `sessionId`，避免后续请求缺少 `MCP-Protocol-Version`。
- **影响**：修复 MCP 初始化后协议状态丢失，尤其影响有状态或无状态 Streamable HTTP 服务端。
- [查看 PR #30504](https://github.com/google-gemini/gemini-cli/pull/30504)

### 2. YOLO 模式正确应用于污点检查与构建文件保护
- **变更**：可信的 `--approval-mode=yolo` / `-y` 模式现在会被 Shell 污点检查、构建文件风险检查及 `PolicyEngine` 正确识别。
- **影响**：避免无人值守或交互式 YOLO 运行被多余确认提示或 `POLICY_VIOLATION` 中断。
- **状态**：已关闭。
- [查看 PR #30268](https://github.com/google-gemini/gemini-cli/pull/30268)

### 3. 改善沙箱权限拒绝识别及不支持环境的处理
- **变更**：修复 POSIX 沙箱权限拒绝未被正确识别的问题，并增强容器化、受限执行环境下的兼容性。
- **影响**：减少权限错误被误报为普通失败，提升沙箱错误提示和自动化执行稳定性。
- **状态**：已关闭。
- [查看 PR #30277](https://github.com/google-gemini/gemini-cli/pull/30277)

### 4. 统一 CLI 退出码与致命错误层级
- **变更**：将此前散落在 `errors.ts` 中的致命错误数字统一映射到 `ExitCodes`。
- **影响**：脚本和 CI 可以更可靠地区分沙箱失败、轮次耗尽及工具过多等终止原因。
- **状态**：已关闭。
- [查看 PR #30273](https://github.com/google-gemini/gemini-cli/pull/30273)

### 5. Node 26 下遵循自定义 Fetch 超时
- **变更**：升级核心 Undici 至 7.30.2，并适配 Node 26 内置 Fetch 使用的 dispatcher symbol。
- **影响**：恢复用户配置的网络超时行为，避免请求在 Node 26 环境中无限等待。
- **状态**：已关闭；相关聚焦测试报告 31 项通过。
- [查看 PR #30281](https://github.com/google-gemini/gemini-cli/pull/30281)

### 6. 从 CLI 可执行文件路径识别源码检出安装
- **变更**：不再只依据当前工作目录判断安装来源，改为结合 CLI executable path 识别本地 Git clone。
- **影响**：避免从源码目录外运行时误判为 npm 全局安装，并意外触发后台 `npm install -g`。
- **状态**：已关闭。
- [查看 PR #30267](https://github.com/google-gemini/gemini-cli/pull/30267)

### 7. 修复函数调用名称空白导致的 400 错误
- **变更**：历史记录中保留模型返回的函数调用名称原始格式，避免仅修剪分发名称却破坏名称匹配。
- **影响**：解决模型生成带前后空白的函数名时出现 `400 INVALID_ARGUMENT` 的问题。
- **状态**：已关闭。
- [查看 PR #30279](https://github.com/google-gemini/gemini-cli/pull/30279)

### 8. 为 Gemini API 网络请求失败增加解释
- **变更**：在尚未收到 HTTP 响应时提供网络排障提示，并将传输层失败与 503 等 HTTP 响应明确区分。
- **影响**：改善用户对网络、DNS、TLS 和连接问题的诊断体验。
- **状态**：已关闭；相关核心测试报告 78 项通过。
- [查看 PR #30278](https://github.com/google-gemini/gemini-cli/pull/30278)

### 9. 后台输出读取响应 AbortSignal
- **变更**：`ReadBackgroundOutputInvocation` 在信号已中止时立即抛出 `AbortError`，等待延迟期间也可及时取消。
- **影响**：防止任务取消后后台日志读取继续挂起，提高 Agent 生命周期管理可靠性。
- **状态**：开放。
- [查看 PR #30498](https://github.com/google-gemini/gemini-cli/pull/30498)

### 10. 修正 `write_file` 的 CRLF Diff 统计
- **变更**：计算确认 Diff、执行结果 Diff 和 `getDiffStat` 前统一 CRLF 为 LF，同时保留原始内容供行尾检测。
- **影响**：减少 Windows 文件在预览和变更统计中的伪差异，避免确认界面出现噪声。
- **状态**：开放。
- [查看 PR #30489](https://github.com/google-gemini/gemini-cli/pull/30489)

---

## 功能需求趋势

### 1. Subagent 可靠性与生命周期管理
社区最关注的方向包括：
- 正确识别最大轮次、失败和真正完成；
- 避免 Generalist Agent 卡死；
- 支持取消、后台运行及及时中止；
- 持久化浏览器会话与锁恢复；
- 将子 Agent 上下文纳入 `/bug` 报告及 `/chat share`。

相关入口：
- [Subagent 错误成功状态 #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- [Generalist Agent 挂起 #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- [后台运行本地 Agent #22741](https://github.com/google-gemini/gemini-cli/issues/22741)
- [共享子 Agent 轨迹 #22598](https://github.com/google-gemini/gemini-cli/issues/22598)

### 2. Skills 与 Subagent 的自动路由
用户希望 Gemini CLI 根据任务描述主动发现并调用适用的 Skills、Subagents，而不是依赖显式指令。同时，社区期待通过 `settings.json` 管理 Agent，并完善共享内存和并行协作能力。

相关入口：
- [主动使用 Skills 和 Subagents #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- [通过 settings.json 发现 Subagent #18285](https://github.com/google-gemini/gemini-cli/issues/18285)
- [共享内存与并行协作 #18287](https://github.com/google-gemini/gemini-cli/issues/18287)

### 3. AST 感知的代码库理解工具
社区正评估 AST grep、glyph、tilth 等工具，用于：
- 精确读取函数或方法边界；
- 按语法结构搜索；
- 生成代码库映射；
- 降低上下文 Token 消耗和探索轮次。

相关入口：
- [AST 能力总览 #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- [AST 代码库映射 #22746](https://github.com/google-gemini/gemini-cli/issues/22746)
- [AST 搜索与文件读取 #22747](https://github.com/google-gemini/gemini-cli/issues/22747)

### 4. 工具治理与上下文效率
当工具数量大幅增长时，社区希望系统自动按任务筛选、分组或限制工具范围，同时发展更节省 Token 的“精确读取”机制，以减少上下文污染。

相关入口：
- [大量工具触发 400 #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- [Tactful Extraction #19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 5. 持久化任务追踪
现有 `WriteToDo` 将任务列表保存在模型上下文中，容易造成 Context Rot，并会跨会话丢失。社区希望改用文件型 CRUD 任务追踪，或利用原生文件工具维护任务状态。

相关入口：
- [文件型持久化任务追踪 #18836](https://github.com/google-gemini/gemini-cli/issues/18836)
- [使用原生文件工具维护任务追踪 #21000](https://github.com/google-gemini/gemini-cli/issues/21000)

### 6. 安全执行与工作区治理
包括 YOLO 模式与策略引擎的一致性、沙箱权限识别、破坏性 Git/数据库命令规避、临时文件集中管理，以及按工作区配置安全策略。

相关入口：
- [阻止破坏性行为 #22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- [临时脚本污染工作区 #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- [按工作区管理策略 #18397](https://github.com/google-gemini/gemini-cli/issues/18397)

### 7. Agent 可观测性与可评估性
用户希望直接查看、分享和评估 Subagent 轨迹，并让 Bug 报告包含子 Agent 的上下文，而不是只保留主会话信息。

相关入口：
- [通过 `/chat share` 分享 Subagent 轨迹 #22598](https://github.com/google-gemini/gemini-cli/issues/22598)
- [Bug 报告缺少 Subagent 上下文 #21763](https://github.com/google-gemini/gemini-cli/issues/21763)

### 8. 浏览器 Agent 的跨环境稳定性
重点覆盖 Wayland、持久化会话、配置透传、锁恢复和会话关闭，目标是让浏览器自动化在开发、调试和无人值守场景中更可靠。

相关入口：
- [Wayland 兼容 #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- [浏览器会话接管 #22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- [ACP 会话关闭 PR #30368](https://github.com/google-gemini/gemini-cli/pull/30368)

---

## 开发者关注点

1. **终止状态必须可信**  
   最大轮次、强制中断和异常退出不能被包装成成功；这是 Subagent 可靠性和上层自动决策的基础。

2. **配置必须全链路生效**  
   `settings.json`、`maxTurns`、项目级覆盖和权限模式需要一致地传递到 Browser Agent、后台任务及 PolicyEngine。

3. **工具数量增长不能拖垮上下文和 API**  
   MCP、Skills 与 Subagents 扩展后，动态工具筛选、按需加载和 AST 级检索将成为刚需。

4. **Subagent 需要透明、可中断、可恢复**  
   开发者希望查看轨迹、分享记录、携带上下文进入 Bug 报告，并支持后台执行、取消和浏览器会话恢复。

5. **无人值守模式需要稳定且可诊断**  
   沙箱权限、YOLO、网络超时、退出码和 API 传输错误必须有明确、可测试的行为，而不是仅在交互环境中“看起来可用”。

6. **Agent 应主动但安全地使用现有能力**  
   自动调用 Skills 和 Subagents 能减少用户操作，但同时必须阻止强制重置、随机写入和高风险命令，避免“更主动”转化为“更难控制”。

7. **大型代码库需要更精准的上下文读取**  
   社区期待 AST 感知的搜索、读取和映射，以减少整文件灌入、Token 膨胀及重复探索。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-28**

## 今日速览

过去 24 小时内，Copilot CLI 连续发布 `v1.0.118-0`、`v1.0.118-1` 和 `v1.0.118-2`，重点修复了 MCP 并发配置丢失、沙箱 CA 证书展示及 Ctrl+R 历史导航等问题。社区焦点集中在 ACP/Fusion 模型路由不一致、会话上下文异常压缩、插件与扩展兼容性、Windows/macOS 平台问题，以及企业认证和 MCP 登录稳定性；过去 24 小时没有新的 PR 更新。

## 版本发布

### v1.0.118-2

- 修复 Ctrl+R 搜索匹配后使用 Up/Down 时，会意外应用隐藏提示建议的问题。
- 提升提示历史浏览的稳定性，避免导航过程中误触发隐藏建议。  
  [Release v1.0.118-2](https://github.com/github/copilot-cli/releases/tag/v1.0.118-2)

### v1.0.118-1

- 修复同时执行 `copilot mcp enable` 和 `copilot mcp disable` 时，不同 MCP 服务器配置变更可能相互覆盖的问题。
- 提升并发 MCP 配置操作的可靠性。  
  [Release v1.0.118-1](https://github.com/github/copilot-cli/releases/tag/v1.0.118-1)

### v1.0.118-0

- `/sandbox policy` 现在会显示沙箱信任的附加 CA 证书路径，包括来自托管设置的证书。
- 子代理启动更多子代理时，`/tasks` 页脚会显示 reasoning effort 和 context tier。
- 详细转录中补充了匹配计数信息，改善任务和搜索过程的可见性。  
  [Release v1.0.118-0](https://github.com/github/copilot-cli/releases/tag/v1.0.118-0)

### v1.0.117

- 新增 `sandbox.userPolicy.network.extraCaCertificates`，支持在用户或托管设置中配置自定义 CA 证书。
- 沙箱命令经过 TLS 拦截代理时，可使用自定义 CA 证书建立连接。
- 增加显式工具暴露机制，允许自定义代理主动选择可使用的工具。
- 修复在固定提示位置使用 Page Down 时可能卡住的问题。
- 改进自定义代理、子代理及沙箱配置能力。  
  [Release v1.0.117](https://github.com/github/copilot-cli/releases/tag/v1.0.117)

## 社区热点 Issues

> 以下按技术影响、问题覆盖面和社区反馈筛选。Issue 状态及数据截至 2026-11-28。

### 1. ACP 模式未正确应用 Fusion High 路由

- **问题**：`copilot -p` 设置 `fusionTier=high` 时会走 HydraFusion，但相同请求通过 `copilot --acp` 时被路由到 `auto_v2`，导致交互式与非交互式行为不一致。
- **重要性**：直接影响 ACP 客户端中的模型选择、计费路径和输出质量，也是今日最集中的模型路由问题之一。
- **社区反应**：与另一个 Fusion/ACP 配置缺失问题形成同类反馈，显示 ACP 对新模型能力的支持仍不完整。  
  [#5604](https://github.com/github/copilot-cli/issues/5604)

### 2. ACP 未向客户端公布 Copilot Fusion 及层级配置

- **问题**：ACP 将路由模型公布为 `Auto`，未暴露 Fusion/Auto-tier 配置；T3 Code 等客户端因此无法显示 Fusion 或提供层级选择器。
- **重要性**：属于 ACP 协议能力发现与客户端集成问题，可能影响所有依赖 ACP 的第三方编辑器或代理工具。
- **社区反应**：获得 **12 个赞、4 条评论**，是本期热度最高的 Issue。  
  [#5354](https://github.com/github/copilot-cli/issues/5354)

### 3. 推理模型上下文被过早压缩

- **问题**：BYOK 推理模型的旧 reasoning tokens 被持续计入上下文估算，导致在窗口使用约 30%–40% 时就触发压缩；用户报告 107 分钟内发生 19 次压缩。
- **重要性**：会明显增加延迟和成本，并破坏长时间、工具密集型任务的连续性。
- **社区反应**：Issue 刚创建即有较高关注，目前暂无评论，属于当日新出现的严重性能问题。  
  [#5607](https://github.com/github/copilot-cli/issues/5607)

### 4. Agent Plugins 1.0 的规则与指令文件被忽略

- **问题**：插件中的 `.instructions.md` 以及 `com.github.copilot/rules/` 下的 `applyTo` frontmatter 被静默忽略。
- **重要性**：插件虽能加载 skills、MCP、agents 和 hooks，但核心指令规则无法生效，可能造成代理行为不符合预期。
- **社区反应**：已有 3 条评论和 1 个赞；由于问题“静默失败”，排障成本较高。  
  [#5440](https://github.com/github/copilot-cli/issues/5440)

### 5. 关联 Pull Request 的会话不加载用户扩展

- **问题**：GitHub Copilot App 中，一旦会话关联了 PR，无论 PR 是会话创建还是已有 PR，用户扩展都不会启动，扩展工具和 hooks 也不可用。
- **重要性**：影响扩展生态在 PR 工作流中的可用性，且与普通会话表现不一致。
- **社区反应**：问题刚创建，暂无评论，但属于高影响的平台集成缺陷。  
  [#5606](https://github.com/github/copilot-cli/issues/5606)

### 6. macOS Entra broker MCP 登录无法缓存

- **问题**：Azure DevOps Remote MCP 的 Entra 登录虽成功，但 MSAL 以 `-34018` 错误无法写入 Keychain，导致每个会话都重新弹出账户选择器。
- **重要性**：影响 macOS 企业环境中 MCP 的免交互使用，涉及身份、凭据存储与日常开发效率。
- **社区反应**：为当日新 Issue，暂无评论，但平台和身份认证叠加使其具有较高优先级。  
  [#5600](https://github.com/github/copilot-cli/issues/5600)

### 7. GHE.com 企业账号更新失败

- **问题**：在 GitHub Enterprise Cloud 的 `*.ghe.com` 环境中，更新程序无法取得令牌，报错“GitHub credential owner did not provide a token”。
- **重要性**：可能直接阻止企业用户安装或升级 CLI，影响团队统一发布和漏洞修复。
- **社区反应**：已有 2 条评论，报告问题可跨多个 1.0.115 修订版复现。  
  [#5571](https://github.com/github/copilot-cli/issues/5571)

### 8. Windows Browser Use 在 Unicode 路径下激活失败

- **问题**：Windows 用户配置目录包含非 ASCII 字符且控制台代码页为 850 时，`/browser-use:activate` 会误报注册冲突，并生成无法正常工作的原生启动器。
- **重要性**：浏览器自动化是代理工具的重要能力，Unicode 路径又是常见本地化环境，问题具有普遍性。
- **社区反应**：为当日新 Issue，暂无评论；报告明确区分注册读取编码与启动器路径编码两个根因。  
  [#5603](https://github.com/github/copilot-cli/issues/5603)

### 9. ACP 内容过滤后返回空白回合

- **问题**：模型响应被内容过滤器拦截时，ACP 不发送 `session/update`，并以 `stopReason: "end_turn"` 结束回合；客户端只看到空白结果且无解释。
- **重要性**：错误语义不准确，可能让客户端误判为正常完成，也无法向用户提供可操作的提示。
- **社区反应**：当日新建，暂无评论；涉及 ACP 协议兼容性和安全提示设计。  
  [#5602](https://github.com/github/copilot-cli/issues/5602)

### 10. 沙箱权限未正确应用 skills 目录写入授权

- **问题**：即使 `sandbox.userPolicy.files` 明确授予 skills 目录读写权限，编辑 skill 时仍会请求绕过沙箱审批。
- **重要性**：权限提示与实际策略不一致，既打断工作流，也可能迫使用户放宽沙箱权限。
- **社区反应**：已有 1 个赞，问题针对 v1.0.117，说明新沙箱策略仍存在边界情况。  
  [#5601](https://github.com/github/copilot-cli/issues/5601)

### 其他值得关注

- 扩展启动失败后，CLI 仍暴露其自定义工具，可能造成调用悬挂；Issue 已关闭，但暴露了扩展生命周期与工具注册同步问题。  
  [#4670](https://github.com/github/copilot-cli/issues/4670)
- MCP 工具结果中的图片内容块没有传递给模型，影响视觉型 MCP 工具；目前已关闭。  
  [#4536](https://github.com/github/copilot-cli/issues/4536)
- Windows 语音服务在 PID 文件被清理但进程仍存活时可能永久死锁；目前已关闭。  
  [#4740](https://github.com/github/copilot-cli/issues/4740)
- 代理反复忽略“禁止添加 Co-authored-by”及检查规则的明确指令，反映规则优先级和上下文记忆仍不稳定。  
  [#5589](https://github.com/github/copilot-cli/issues/5589)
- 扩展调用 `session.metadata.setWorkingDirectory` 被拒绝，可能影响扩展控制工作目录的行为。  
  [#5599](https://github.com/github/copilot-cli/issues/5599)
- Copilot App 从 fork 创建 PR 时，`maintainer_can_modify` 被静默忽略，影响协作权限。  
  [#5605](https://github.com/github/copilot-cli/issues/5605)

## 重要 PR 进展

过去 24 小时内，**没有新的 Pull Request 更新**，因此暂无 PR 功能或修复进展可汇总。

## 功能需求趋势

1. **ACP 与新型模型能力同步**
   - Fusion、Auto tier 和 `fusionTier` 需要在 ACP 中被正确公布、选择和路由。
   - 重点关注 ACP 客户端能否获得真实模型状态、停止原因及错误反馈。  
   [#5354](https://github.com/github/copilot-cli/issues/5354) · [#5604](https://github.com/github/copilot-cli/issues/5604) · [#5602](https://github.com/github/copilot-cli/issues/5602)

2. **上下文、压缩与记忆准确性**
   - 推理 token 应更准确地计入或排除上下文估算。
   - 用户规则、拒绝操作和提醒应被稳定记住，避免重复违反明确指令。  
   [#5607](https://github.com/github/copilot-cli/issues/5607) · [#5589](https://github.com/github/copilot-cli/issues/5589)

3. **插件与扩展生态成熟度**
   - Agent Plugins 1.0 需要完整支持 `.instructions.md`、规则作用域及工具暴露。
   - PR 会话、扩展启动失败、扩展 RPC 权限和工作目录控制等生命周期问题需要统一解决。  
   [#5440](https://github.com/github/copilot-cli/issues/5440) · [#5606](https://github.com/github/copilot-cli/issues/5606) · [#5599](https://github.com/github/copilot-cli/issues/5599)

4. **企业认证与 MCP 连接可靠性**
   - GHE.com 更新器需要正确使用 GitHub 凭据。
   - macOS Entra/MSAL 需要可靠写入 Keychain，避免每次会话重复登录。
   - MCP 配置更新还需要支持安全并发操作。  
   [#5571](https://github.com/github/copilot-cli/issues/5571) · [#5600](https://github.com/github/copilot-cli/issues/5600) · [v1.0.118-1](https://github.com/github/copilot-cli/releases/tag/v1.0.118-1)

5. **沙箱与权限策略一致性**
   - 自定义 CA 证书支持已扩展至用户策略和托管策略。
   - 后续重点是确保显式文件授权不产生多余审批，并让策略展示与实际执行完全一致。  
   [#5601](https://github.com/github/copilot-cli/issues/5601) · [v1.0.117](https://github.com/github/copilot-cli/releases/tag/v1.0.117)

6. **跨平台可靠性**
   - Windows Unicode 路径、Windows 通知徽章、macOS Keychain 等问题表明，企业桌面环境仍是高频故障区。
   - Browser Use、语音服务和插件启动均需要更稳健的路径编码与进程生命周期处理。  
   [#5603](https://github.com/github/copilot-cli/issues/5603) · [#4381](https://github.com/github/copilot-cli/issues/4381) · [#4740](https://github.com/github/copilot-cli/issues/4740)

7. **GitHub/PR 工作流集成**
   - Copilot App 需要在 PR 会话中加载用户扩展，并正确创建允许维护者编辑的 fork PR。
   - 这表明社区正在把 Copilot 从“代码生成器”进一步推向端到端研发代理。  
   [#5606](https://github.com/github/copilot-cli/issues/5606) · [#5605](https://github.com/github/copilot-cli/issues/5605)

## 开发者关注点

- **路由一致性**：交互式 CLI、`-p` 和 ACP 模式应使用一致的模型与 Fusion tier 配置，避免同一提示得到不同执行路径。
- **上下文利用率**：推理模型过早压缩是当前最实际的性能和成本问题之一，需要准确区分可见上下文与历史推理 token。
- **扩展“可用且可预测”**：插件规则被忽略、PR 会话不加载扩展、失败扩展残留工具，说明扩展生命周期仍未形成一致契约。
- **权限提示不能制造噪音**：明确授予目录写权限后仍请求沙箱绕过，会降低用户对权限系统的信任。
- **企业环境免登录能力**：GHE 更新和 macOS MCP 凭据缓存直接影响部署、自动化和日常使用。
- **跨平台路径与编码**：Windows Unicode 用户路径等问题会阻断浏览器自动化等核心能力。
- **失败必须有明确反馈**：ACP 内容过滤后静默结束、扩展启动异常或工具注册冲突，都需要可诊断的错误信息，而不应表现为空白结果或悬空调用。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-28

## 今日速览

今日社区重点集中在 **OpenCode v2.4.x 回归与稳定性问题**：Windows Shell 权限/并发执行、TUI 权限绕过、会话中断数据丢失，以及 macOS 本地网络权限失效等问题受到广泛关注。  
与此同时，子代理并行协作、Code Mode、MCP 稳定性、原生密钥管理和多模型 Agent Teams 仍是主要功能方向；过去 24 小时没有新版本发布。

## 社区热点 Issues

1. **免费额度问题持续形成高热度支持入口**  
   免费额度耗尽、限额不重置以及 Desktop 版本提示异常被集中到一个主 Issue，说明免费用户遇到的接入与额度问题仍是社区最显著的痛点之一。该 Issue 获得 **417 条评论、31 个赞**，是最活跃的讨论入口。  
   [查看 Issue #59387](https://github.com/anomalyco/opencode/issues/59387)

2. **v2 关键回归：前台子代理执行被移除**  
   子代理被强制转入后台后，引发父代理频繁唤醒、上下文污染以及任务完成信号延迟等问题，直接影响复杂任务的执行效率与稳定性。该问题被明确标记为回归而非功能需求。  
   [查看 Issue #66555](https://github.com/anomalyco/opencode/issues/66555)

3. **Windows Shell 权限扫描可能误放危险命令**  
   嵌套 Shell 的引号处理可能使权限扫描器漏判，`cmd /c` 包装的递归删除命令甚至可能作用于错误路径。该问题兼具安全影响与 Windows 兼容性风险，值得优先关注。  
   [查看 Issue #66771](https://github.com/anomalyco/opencode/issues/66771)

4. **Code Mode 与插件工具调用缺少超时**  
   `execute` 和插件工具调用没有超时机制，一个慢调用可长期阻塞会话；现有 MCP 超时默认值甚至可能达到 12 小时。该问题直接影响自动化任务的稳定性和可预测性。  
   [查看 Issue #54220](https://github.com/anomalyco/opencode/issues/54220)

5. **TUI “ask” 权限在 v2.4.x 被静默放行**  
   配置为 `ask` 的 `shell` 和 `webfetch` 工具在没有确认提示的情况下直接执行，被用户视为高严重度权限回归。该问题在 2.3.2 中尚可正常触发确认。  
   [查看 Issue #66861](https://github.com/anomalyco/opencode/issues/66861)

6. **按下 Esc 中断会话可能删除大量历史消息**  
   v2.4.2 引入自动 `revert.stage` 与 `revert.commit` 后，双击 Esc 可能不仅删除当前 Prompt，还破坏此前大量消息，造成会话不可恢复。该问题直接威胁用户数据完整性。  
   [查看 Issue #66824](https://github.com/anomalyco/opencode/issues/66824)

7. **Agent 禁止浏览器权限可被 `execute` 绕过**  
   子代理即使在 frontmatter 中明确拒绝浏览器权限，只要同时拥有 `execute`，仍可能获得完整浏览器工具命名空间。这暴露出工具权限在 Code Mode 路径下缺少一致约束。  
   [查看 Issue #54044](https://github.com/anomalyco/opencode/issues/54044)

8. **原生 Secret 引用成为高关注功能需求**  
   用户希望 Provider 与 MCP 凭据能够直接引用 macOS Keychain、Windows Credential Manager、1Password 等系统凭据源，减少明文配置。该需求已获得 **5 条评论、2 个赞**，相关旧提案此前曾因长期无活动被关闭。  
   [查看 Issue #63867](https://github.com/anomalyco/opencode/issues/63867)

9. **macOS 本地网络权限未被强制执行**  
   即使系统设置中关闭 OpenCode 的“本地网络”权限，桌面端、CLI 后端和代理启动的 Shell 命令仍可访问局域网主机，并可跨完整重启持续。该问题涉及操作系统隐私边界，优先级较高。  
   [查看 Issue #66443](https://github.com/anomalyco/opencode/issues/66443)

10. **Windows Store PowerShell 7 并行调用失败**  
    同一轮中的两个 Shell 调用会固定有一个在启动前失败，错误为 `os error 5 / 0xC0070005`；顺序执行则不受影响。该问题可能影响依赖并行工具调用的 Agent 工作流。  
    [查看 Issue #66940](https://github.com/anomalyco/opencode/issues/66940)

## 重要 PR 进展

1. **修复快照对无提交嵌套仓库的处理**  
   对尚未产生提交的嵌套 Git 仓库进行快照时跳过该仓库，避免将无效 HEAD 记录为 gitlink，修复相关快照失败。  
   [查看 PR #63897](https://github.com/anomalyco/opencode/pull/63897)

2. **修复尚未启动 Prompt 无法通过 Esc 取消**  
   在冷启动 Location 中，Prompt 已入队但执行尚未开始时，`session.interrupt` 此前不可用；该 PR 扩展了可中断状态。  
   [查看 PR #66941](https://github.com/anomalyco/opencode/pull/66941)

3. **为 macOS 主可执行文件设置独立 LC_UUID**  
   Electron 默认主程序与其他应用共享 UUID，可能导致 macOS 本地网络权限无法准确识别 OpenCode；此改动为应用生成独立 UUID。  
   [查看 PR #66546](https://github.com/anomalyco/opencode/pull/66546)

4. **合并嵌套子代理完成后的父代理唤醒**  
   多个并行子代理完成时，不再逐个触发父代理 LLM Turn，而是合并完成信号，减少重复上下文读取与模型调用。  
   [查看 PR #66936](https://github.com/anomalyco/opencode/pull/66936)

5. **MCP 初始化超时后回退至 Legacy 协议**  
   本地 stdio MCP 服务未及时响应 `server/discover` 时，可回退到 Legacy 初始化流程，降低慢 MCP 服务导致连接失败的概率。  
   [查看 PR #66595](https://github.com/anomalyco/opencode/pull/66595)

6. **Code Mode `execute` 改为插件注册工具**  
   将 `execute` 从特殊内置路径迁移到普通工具注册机制，并基于统一的 `context.tool.call` 实现，为后续权限控制和超时治理提供基础。  
   [查看 PR #66928](https://github.com/anomalyco/opencode/pull/66928)

7. **修复 `read` 截断标记写回文件的问题**  
   `read` 现在返回完整行，并改善长行中的 grep 匹配展示，避免“line truncated to 2000 chars”标记被模型写回文件、破坏合法 JSON。  
   [查看 PR #66927](https://github.com/anomalyco/opencode/pull/66927)

8. **桌面端恢复临时历史读取失败**  
   历史消息下载失败后，即使服务端恢复，聊天界面仍可能停留在错误页；该 PR 增加针对瞬态客户端错误的重试。  
   [查看 PR #66704](https://github.com/anomalyco/opencode/pull/66704)

9. **MCP OAuth 元数据解码与登录时序修复**  
   存储的 MCP OAuth 元数据改为在正确边界统一解码，并让登录流程继续使用 effect clock，减少配置解析和认证状态不一致。  
   [查看 PR #66932](https://github.com/anomalyco/opencode/pull/66932)

10. **Rust CLI/TUI 引入会话内查找及多项 TUI 修复**  
    为 Rust 客户端移植实验性的 `/find`、`session.find` 和快捷键能力，同时合入近期 TUI 修复，推动新客户端继续追平 TypeScript 版本。  
    [查看 PR #66875](https://github.com/anomalyco/opencode/pull/66875)

## 功能需求趋势

- **多代理协作与并行调度**：社区希望 Agent Teams 支持命名消息传递、多模型协作和 TUI 集成；嵌套子代理完成事件合并也表明并行代理基础设施正在加速完善。  
  [Agent Teams Issue](https://github.com/anomalyco/opencode/issues/12711) · [子代理唤醒合并 PR](https://github.com/anomalyco/opencode/pull/66936)

- **原生凭据与 Secret 管理**：Provider、MCP OAuth 和系统密钥链集成是高频安全需求，用户期待减少 API Key 的明文存储与复制。  
  [Secret 引用需求](https://github.com/anomalyco/opencode/issues/63867)

- **Code Mode 工具治理**：超时、权限继承、工具列表稳定性及插件化注册成为核心诉求，重点不是单纯增加工具，而是建立可控、可观测的执行层。  
  [超时问题](https://github.com/anomalyco/opencode/issues/54220) · [浏览器权限绕过](https://github.com/anomalyco/opencode/issues/54044) · [工具列表误报](https://github.com/anomalyco/opencode/issues/66934)

- **后台任务生命周期管理**：社区希望 `opencode run` 能限制、跳过或显式等待后台作业，避免 CLI 永久挂起。  
  [后台作业等待需求](https://github.com/anomalyco/opencode/issues/66885)

- **模型与 Provider 可靠性**：模型选择缺失、Inkling 2 mini 无法调用 `edit`、Provider 初始化时 503 导致模型列表为空，以及 DeepSeek 的 reasoning/text 分类异常，均指向模型适配层的稳定性需求。  
  [新会话无模型选择](https://github.com/anomalyco/opencode/issues/66891) · [Inkling 2 mini](https://github.com/anomalyco/opencode/issues/66840) · [Provider 初始化失败](https://github.com/anomalyco/opencode/issues/65556)

- **跨平台 Shell 一致性**：Windows Git Bash、PowerShell 7、嵌套 `cmd /c` 的参数转义和权限扫描差异，是当前自动化执行中反复出现的问题。  
  [Git Bash 命令变形](https://github.com/anomalyco/opencode/issues/57278) · [PowerShell 并行失败](https://github.com/anomalyco/opencode/issues/66940)

- **会话与项目数据管理**：用户开始关注删除已关闭项目、会话固定项恢复、Esc 中断数据安全以及历史读取重试，说明基础数据生命周期管理仍需加强。  
  [项目删除需求](https://github.com/anomalyco/opencode/issues/51197) · [TUI 固定会话回归](https://github.com/anomalyco/opencode/issues/66534) · [历史读取恢复 PR](https://github.com/anomalyco/opencode/pull/66704)

## 开发者关注点

- **权限模型必须跨执行路径保持一致**：`ask` 被静默放行、浏览器权限可经 `execute` 绕过、Windows Shell 扫描漏判，是开发者最担忧的安全问题。
- **v2.4.x 回归影响生产使用**：TUI 消息丢失、Windows 并行 Shell 失败、Provider 初始化空列表等问题，集中出现在近期版本，升级前应谨慎验证。
- **后台代理需要可控而非不可见**：减少父代理唤醒是明确改进方向，但社区仍期待可限制等待时间、查看后台任务并避免 CLI 无限挂起。
- **Code Mode 必须具备生产级超时与权限边界**：慢工具不能无限阻塞，工具 schema 变化也不应仅因 JSON 成员顺序不同而触发误报。
- **跨平台行为一致性仍不足**：Windows Shell、macOS 权限、WSL/TUI 渲染和不同 Shell 的转义规则持续制造复现差异。
- **模型适配不能只依赖通用提示词**：部分模型会无限回避 `edit` 或错误分类 reasoning/text，社区期待 Provider 层提供更稳定的工具选择和消息类型映射。
- **插件与扩展生态持续扩大**：AutoSkill、Multiplayer 等插件已进入生态目录，但本地插件热重载在符号链接场景下仍受 Bun 模块缓存影响。  
  [本地插件热重载问题](https://github.com/anomalyco/opencode/issues/52240)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-28

## 今日速览

今日发布 **v1.1.6**，重点优化了跨轮次待办自动推进和空闲状态展示，并修复旧版客户端无法自动更新的发布流程问题。社区同时围绕配额可观测性、模型与推理配置、终端交互体验及 Linux ARM 兼容性展开讨论，当前已有 **2 个 Issue**、**13 个 PR** 在过去 24 小时内更新。

## 版本发布

### v1.1.6

- **跨轮次保留未完成目标**：当新待办事项完成时，继续自动推进仍处于 `partially_delivered` 或未交付状态的目标；若没有新的待办进展，则停止自动 poke，避免无效循环。
- **增强空闲状态信息**：在 TUI 空闲状态中显示最后一次响应距今多久，方便用户判断会话是否仍在活动。

版本链接：  
https://github.com/1jehuang/jcode/releases/tag/v1.1.6

### 近期发布回顾

- **v1.1.5**
  - 改进 TUI 流式输出与结束状态标签。
  - 完成时立即刷新分批输出，减少尾部内容延迟。
  - 去重远程模型及推理模式切换通知。
  - 在 `/login` 快捷入口中加入 OpenAI 等常用服务商。
  - 版本链接：https://github.com/1jehuang/jcode/releases/tag/v1.1.5

- **v1.1.4**
  - TUI 空闲超过一分钟后显示“上次响应于 X 分钟前”。
  - 改进 TUI 与后台任务的中断、重新加载交付流程。
  - 版本链接：https://github.com/1jehuang/jcode/releases/tag/v1.1.4

- **v1.1.3**
  - 在固定的待办卡片中区分交付结果与验证证据，并使用彩色状态标识和压缩阶段点。
  - 根据未交付目标结果驱动后续自动 poke。
  - 版本链接：https://github.com/1jehuang/jcode/releases/tag/v1.1.3

## 社区热点 Issues

> 过去 24 小时仅更新了 2 个 Issue，以下完整列出，并结合相关 PR 补充其影响。

### 1. [BUG] macOS、Windows 与 ARM Linux 客户端停留在旧版本，无法自动更新

- **编号**：#2430
- **重要性**：影响所有 v1.0.1 及更早版本客户端，覆盖 macOS、Windows、Linux aarch64 和 FreeBSD。
- **现象**：`jcode update` 提示 `Already up to date`，但实际最新版本已是 v1.1.2。
- **根因**：v1.1.1、v1.1.2 的发布脚本仅发布 Linux 构建，却将其标记为 GitHub 全局 Latest；旧客户端恢复运行后又不会继续检查新版。
- **社区反应**：Issue 由维护者创建，目前有 1 条评论；对应修复 PR #2431 已开启。
- **链接**：https://github.com/1jehuang/jcode/issues/2430

### 2. [FEAT] 增加“已用时间窗口”配额展示模式

- **编号**：#2429
- **重要性**：现有配额提示只显示剩余额度、已用额度与重置倒计时，用户必须手动计算五小时或周窗口的使用进度。
- **建议能力**：增加 `elapsed` 模式，将已用配额与窗口已用百分比并列显示，例如 `43% used / 91% elapsed`，便于及时发现超额消耗。
- **社区反应**：Issue 暂无评论；对应实现 PR #1780 已在当天关闭，需求已进入实现阶段。
- **链接**：https://github.com/1jehuang/jcode/issues/2429

## 重要 PR 进展

### 1. #2431：修复旧客户端无法自动更新的问题

- 修复 Linux-only Release 被错误标记为 GitHub Latest 的问题。
- 调整发布流程，让仅适用于 Linux 的版本不再覆盖其他平台的最新版本。
- 恢复客户端持续检查新版本的能力，并解决恢复运行后不再检查更新的行为。
- 直接关联 Issue #2430，是今日影响面最大的发布链路修复。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/2431

### 2. #2260：将 Esc 中断限定在当前父级任务

- 修复 Esc 与硬停止共用 `Request::Cancel` 的问题。
- 取消当前父级 turn 时，不再无条件遍历 swarm 生成树并中断全部子任务。
- 有助于保留仍需运行的子代理，同时避免取消范围被意外扩大。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/2260

### 3. #2412：任务结束前清理代理产生的临时资源

- 在系统提示和共享最终交付流程中加入清理要求。
- 代理结束任务前，应移除自己创建的临时 clone、缓存和测试资源。
- 同时保护用户及会话数据、未提交或未推送的工作、活动资源，以及其他代理拥有的文件。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/2412

### 4. #1879：自定义 OpenAI 兼容服务商支持逐模型配置

- 为每个模型增加 `display_name`、reasoning override 和 effort 配置。
- 混合模型档位的网关不再统一显示原始模型 ID。
- provider 控制层会转发逐模型字段，模型选择器则展示易读名称。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/1879

### 5. #2428：改进 Linux aarch64 发布产物的兼容性

- 目标是在 glibc 2.35 环境构建 Linux ARM64 版本。
- 引入模拟 TLS 和静态 OpenSSL，降低对 glibc 2.39 环境的依赖。
- 可改善 Ubuntu 22.04、Debian 12 等系统以及部分 Termux 环境中的兼容性。
- 该 PR 接替并取代旧方案 #1922。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/2428

### 6. #1780：新增 elapsed 配额展示模式

- 新增 `usage_display = "elapsed"` 配置。
- 用窗口已用百分比替代单纯的剩余重置倒计时。
- 将“已消耗配额”和“已使用时间”并排显示，更直观地判断消耗速度。
- 状态：CLOSED
- 链接：https://github.com/1jehuang/jcode/pull/1780

### 7. #2425：适配 rustc 1.100.0 新增的 Clippy 检查

- 修复 Rust 工具链升级后触发的 `needless_bool` 等新 Clippy 告警。
- 目标是恢复 `clippy -D warnings` CI 门禁，避免当前 master 上的 PR 因工具链变化集中失败。
- 属于近期维护 CI 稳定性的基础工作。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/2425

### 8. #2349：Swarm 工作进程正确展示配置的推理强度

- 修复 worker 已记录 `agents.swarm_effort = "medium"`，但模型选择器和状态栏却显示 `low` 的问题。
- 调整 worker attach 后的恢复流程，使配置值与 UI 展示保持一致。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/2349

### 9. #1873：加入 Cursor ACP 服务商及模型路由能力

- 通过 Cursor Agent Client Protocol 接入 Cursor。
- 完善模型路由与 reasoning effort 的传递。
- 子进程在对象销毁或服务关闭时会被回收，避免残留僵尸进程。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/1873

### 10. #1889：TUI 增加带 frecency 排序的 `@file` 文件选择器

- 用户可在输入提示词时通过 `@` 快速选择文件，无需手动输入完整路径。
- 使用 frecency 排序，将常用及近期访问文件优先展示。
- 面向大型代码库，可减少检索与输入成本。
- 状态：OPEN
- 链接：https://github.com/1jehuang/jcode/pull/1889

## 功能需求趋势

1. **配额与成本可观测性**
   - 社区希望同时展示额度消耗、重置倒计时和窗口已用时间。
   - 核心诉求是快速识别“是否消耗过快”，而不是只显示剩余额度。

2. **跨平台发布与自动更新可靠性**
   - Linux-only 构建不能覆盖 GitHub 的全局 Latest 版本。
   - macOS、Windows、Linux ARM64 与 FreeBSD 客户端都需要稳定、持续的升级检查。
   - 发布产物还需兼容较旧的 glibc 环境。

3. **模型与推理配置精细化**
   - 自定义 OpenAI 兼容网关需要逐模型设置显示名称、推理覆盖和 effort。
   - Swarm worker 的实际推理强度必须在模型目录与状态栏中准确呈现。
   - 新服务商和新协议方面，Cursor ACP 是近期明确方向。

4. **TUI 工作流效率**
   - `@file` 文件选择与 frecency 排序可直接改善大代码库中的提示词输入效率。
   - 空闲状态显示最后响应时间，有助于识别后台是否仍在工作。

5. **多代理任务生命周期管理**
   - Esc 的取消范围需要更精确，避免误伤仍在执行的子代理。
   - 代理完成工作后应主动清理临时资源，同时不能删除用户数据或未提交成果。

6. **工程质量与兼容性**
   - 新 Rust 工具链带来的 Clippy 规则变化正在影响 CI。
   - Kitty 键盘协议的不完整实现可能造成 ESC 分片误输入，相关修复 PR #2143 仍在推进：  
     https://github.com/1jehuang/jcode/pull/2143

## 开发者关注点

- **自动更新“假最新”是当前最高优先级问题**：旧客户端可能长期停留在 v1.0.1，即使执行更新命令也会被错误告知已是最新版本。
- **配额信息必须直观且可比较**：用户不满足于单一百分比或倒计时，更希望直接看到额度消耗与时间窗口的相对进度。
- **配置值必须与 UI 展示一致**：Swarm effort、自定义模型名称及 reasoning 配置若无法准确回显，会显著降低用户对代理行为的信任。
- **取消操作需要明确作用域**：用户期待 Esc 只停止当前任务层级，而不是终止整棵代理任务树。
- **代理不仅要完成代码，也要维护工作区卫生**：临时 clone、缓存及测试资源应由任务所有者清理，但需严格保护未提交成果和其他代理资源。
- **Linux ARM64 的运行兼容性仍受构建环境限制**：glibc 版本过高会直接导致二进制无法启动，发布流水线需要覆盖更广泛的发行版与终端环境。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-28

> 数据范围：过去 24 小时更新的 Releases、Issues 与 Pull Requests。

## 今日速览

- **v1.7.0 发布**，核心亮点是兼容终端重启后可通过 `program resume` 恢复原有 pi 会话，包括配置、工具限制和指令。
- 社区讨论集中在**上下文压缩可靠性、持久化存储与多模态能力**：压缩失败或无限重试仍是高优先级风险，同时 `pi-durable` 正在向跨设备迁移、流式上下文和 MCP 文件传输扩展。
- 工程侧近期合入了 **HTML 导出、WSL 检测、codemode 内存占用及 macOS/BSD 锁文件**等修复，并开始引入无状态 MCP 协议与统一图像生成 API。

---

## 版本发布

### v1.7.0

- 新增 **Terminal session resume**：兼容终端在进程重启后，可恢复当前 pi 会话，并保留原始 profile、工具限制与 instructions。
- Release notes：[v1.7.0](https://github.com/earendil-works/pi/releases/tag/v1.7.0)
- 会话恢复文档：[Terminal session resume](https://github.com/earendil-works/pi/blob/v1.7.0/packages/coding-agent/docs/terminal-setup.md#program-resume)

---

## 社区热点 Issues

### 1. 自动压缩失败后会无限恢复并重试

- **重要性**：这是标记为 **P0** 的可靠性问题。自动压缩失败后，pi 会继续工作并立即再次触发压缩，可能形成无限循环且只能手动终止。
- **社区反应**：获得 3 条评论、0 个赞，属于当天最需要优先处理的风险之一。
- 建议关注：是否增加失败熔断、重试次数上限，以及恢复后的上下文安全检查。
- [#12483 Failed auto-compaction resumes work and retries indefinitely](https://github.com/earendil-works/pi/issues/12483)

### 2. 中途压缩后未重新检查输出预算

- **重要性**：工具批次执行后若发生压缩，剩余输出窗口可能不足，但当前流程仍可能按原预算发送请求，导致截断、无效输出或额外失败。
- **社区反应**：4 条评论、0 个赞；讨论聚焦于应复用设置 `max_tokens` 时的估算逻辑，并在下一次请求前重新计算。
- [#12482 Recheck the output budget after mid-turn compaction](https://github.com/earendil-works/pi/issues/12482)

### 3. 字符级 token 估算偏低导致永久压缩失败

- **重要性**：在超大 `maxTokens` 与 CJK 对话组合下，字符数估算可能明显低估 token 使用量，使模型在摘要阶段已超过上下文上限，导致自动压缩永久失效。
- **社区反应**：2 条评论、0 个赞；该问题与 #12482、#12483 共同构成本轮压缩机制的主要风险点。
- [#12572 Compaction fails permanently when the char-based token estimate undercounts](https://github.com/earendil-works/pi/issues/12572)

### 4. `pi-durable` 支持在不保留消息正文的情况下迭代已提交上下文

- **重要性**：新增 `Conversation.contextMessages()` 异步迭代器，可降低长会话和持久化存储的内存占用，同时保留与 `context()` 一致的消息顺序。
- **社区反应**：2 条评论、0 个赞；被标记为 durable，说明社区正在把 pi 推向更长期、更低开销的会话基础设施。
- [#12616 Proposal: iterate committed model context without retaining message bodies](https://github.com/earendil-works/pi/issues/12616)

### 5. 空闲会话可在不同存储或设备间导出并恢复

- **重要性**：用户希望单个会话在完成当前 turn、无待处理请求后导出到另一台电脑，并在已有存储中继续，完整保留工具调用上下文。
- **社区反应**：2 条评论、0 个赞；与 v1.7.0 的终端会话恢复形成互补，前者侧重本地终端重启，后者侧重跨环境迁移。
- [#12568 pi-durable: export one idle conversation and resume it in another store](https://github.com/earendil-works/pi/issues/12568)

### 6. `prompt` RPC 命令需要支持视频和音频内容

- **重要性**：当前 `prompt` 仅支持图片，无法向 Gemma、GPT-4o 等多模态模型传递视频或音频，是扩展 RPC 多模态能力的关键需求。
- **社区反应**：13 条评论、8 个赞，是当天热度最高的 Issue；说明多模态输入是社区最明确的功能诉求之一。
- [#3200 Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200)

### 7. OpenAI 兼容 Provider 的可选对象工具 Schema 未规范化

- **重要性**：部分 OpenAI-compatible 服务要求对象 Schema 正确携带 `required` 数组；当前适配器直接转发 JSON Schema，可能造成工具调用被拒绝或行为不一致。
- **社区反应**：9 条评论、1 个赞，属于兼容性基础设施层面的高关注问题。
- [#7010 Normalize optional object tool schemas for OpenAI-compatible providers](https://github.com/earendil-works/pi/issues/7010)

### 8. 粘贴 ANSI 内容会污染提示词，未闭合 bracketed paste 可卡死编辑器

- **重要性**：终端输出中的 ANSI 转义体会以字面文本进入 prompt；未结束的 bracketed paste 还会让编辑器无法继续输入，连 Ctrl+C 也失效，属于 TUI 稳定性与安全问题。
- **社区反应**：6 条评论、1 个赞；问题可直接影响日常编码代理使用。
- [#11383 Pasted ANSI leaves escape-sequence corpses in the prompt](https://github.com/earendil-works/pi/issues/11383)

### 9. MCP 扩展需要公开文件传输能力钩子

- **重要性**：社区希望 `pi-mcp` 暴露请求能力与扩展结果的公共 hook，以支持由宿主管理文件传输的 MCP Files 扩展。
- **社区反应**：2 条评论、0 个赞；目前 PR 已进入进行中，说明需求正从提案走向实现。
- [#12600 Expose public MCP extension hooks for host-managed file transfers](https://github.com/earendil-works/pi/issues/12600)

### 10. `/login` 需要允许扩展指定凭据保存的 Provider ID

- **重要性**：扩展目前缺少在登录流程开始前修改 provider 存储位置的 hook，难以复用已有 provider 凭据或兼容自定义认证后端。
- **社区反应**：1 条评论、0 个赞；属于新提出但设计明确的扩展 API 需求。
- [#12639 Extension hook to choose which provider id a /login is stored under](https://github.com/earendil-works/pi/issues/12639)

### 其他值得留意的已关闭问题

- OpenRouter 丢弃 Claude 的 signature-only reasoning chunks，已关闭：  
  [#9534](https://github.com/earendil-works/pi/issues/9534)
- Gemini 兼容服务返回 URL-safe base64 `thoughtSignature` 时回放报错，已关闭：  
  [#12637](https://github.com/earendil-works/pi/issues/12637)
- codemode 工具输出过长时丢失 truncation notice，已关闭：  
  [#12594](https://github.com/earendil-works/pi/issues/12594)

---

## 重要 PR 进展

### 1. 修复 macOS 与 BSD 上的进程锁残留

- 将 socket 文件从“锁持有者身份”改为独立内核锁；持锁进程被信号终止后，不再留下导致后续操作持续 fail-closed 的陈旧文件。
- 影响 app kit、p2、p3 等多个使用进程锁的组件。
- [#12635 fix(chord,p3): process locks on macOS and the BSDs are kernel locks](https://github.com/earendil-works/pi/pull/12635)

### 2. 支持 MCP `2026-07-28` 无状态协议

- 为 `pi-mcp` 及 pi 的 MCP 扩展加入 stateless protocol，同时保持旧版本服务端兼容。
- 有望降低 HTTP MCP 服务端维护 session 状态的复杂度。
- [#12479 feat(mcp,coding-agent): support the stateless MCP protocol 2026-07-28](https://github.com/earendil-works/pi/pull/12479)

### 3. 新增通用图像生成 API `pi-image`

- 建立类似 `pi-messages`、`pi-decision` 的统一图像生成协议，覆盖生成、编辑及不同 Provider 能力差异。
- 为 OpenRouter Images、OpenAI Images、Gemini 等实现统一抽象创造条件。
- [#12535 feat(ai): add pi-image API](https://github.com/earendil-works/pi/pull/12535)

### 4. 修复 HTML 导出会话成本丢失美元符号

- 原因是 `String.prototype.replace` 的替换字符串会解释 `$$`，导致模板中的 `$${cost}` 被错误展开。
- 修复后 `/export`、`/share` 和 `pi --export` 的成本显示保持一致。
- [#12609 fix(coding-agent): keep $ in exported HTML](https://github.com/earendil-works/pi/pull/12609)

### 5. 修复 codemode 嵌套调用行数无上限导致 V8 OOM

- codemode 会为每个嵌套调用保留进度行，并在每次调用开始时复制全部行；大量嵌套调用最终可能耗尽约 4 GB V8 堆。
- 修复对嵌套调用行数进行封顶，降低 RPC 重试场景下的崩溃风险。
- [#12623 fix(coding-agent): cap codemode's nested call rows to bound progress](https://github.com/earendil-works/pi/pull/12623)

### 6. 改进 WSL 检测

- 统一此前分散且不一致的 WSL 判断逻辑，不再完全依赖 `WSL_DISTRO_NAME`、`WSLENV` 或 `WSL_INTEROP` 环境变量。
- 可改善部分 WSL 环境下的剪贴板、按键绑定及平台行为识别。
- [#12634 fix(coding-agent): detect WSL without the WSL environment variables](https://github.com/earendil-works/pi/pull/12634)

### 7. 支持 `AGENTS.local.md`

- 在每个目录中按 `AGENTS.override.md`、`AGENTS.local.md`、`AGENTS.md` 的顺序检查项目级指令文件。
- 便于团队或开发者放置不应提交到仓库的本地代理指令。
- [#12543 support AGENTS.local.md in the coding agent](https://github.com/earendil-works/pi/pull/12543)

### 8. 增加 CTYUN Token Plan 内置 Provider

- 添加 CTYUN Token Plan Provider 及 7 个 OpenAI-compatible 模型。
- 使用 `CTYUN_TOKEN_PLAN_API_KEY` 进行认证。
- [#12611 Add CTYUN Token Plan provider with OpenAI-compatible models](https://github.com/earendil-works/pi/pull/12611)

### 9. Google AI plan

- 与 Google AI 计划集成相关的开放 PR，当前摘要信息有限。
- 合并前仍需关注其具体范围、认证方式及对现有 Provider 行为的兼容性。
- [#12614 Google AI plan](https://github.com/earendil-works/pi/pull/12614)

### 10. 补充 p3 参考资料文档

- 为 `apps/p3/docs/README.md` 增加“Reference artifacts”章节，链接组织内共享的产品定义、概念、组件规范及工作方法材料。
- 主要改善内部开发文档的可发现性。
- [#12628 docs(p3): link reference artifacts](https://github.com/earendil-works/pi/pull/12628)

---

## 功能需求趋势

### 1. 上下文与压缩稳定性

社区最强烈关注点已从“是否支持压缩”转向“压缩失败后如何安全恢复”：

- 失败后停止无限重试；
- 每次压缩后重新计算输出预算；
- 提高 CJK、超大窗口场景下的 token 估算准确度；
- 区分模型上下文与交互记录中的压缩摘要。

代表议题：  
[#12483](https://github.com/earendil-works/pi/issues/12483) · [#12482](https://github.com/earendil-works/pi/issues/12482) · [#12572](https://github.com/earendil-works/pi/issues/12572)

### 2. 持久化、迁移与流式上下文

`pi-durable` 正在形成较清晰的能力路线：

- 不缓存全部消息正文；
- 异步迭代模型上下文；
- 导出空闲会话并跨设备恢复；
- 面向 Codex SSE 的有界流式请求路径。

代表议题：  
[#12616](https://github.com/earendil-works/pi/issues/12616) · [#12568](https://github.com/earendil-works/pi/issues/12568) · [#12617](https://github.com/earendil-works/pi/issues/12617)

### 3. 多模态输入与统一生成 API

需求从“prompt 能传图片”扩展到：

- RPC 命令支持视频、音频；
- 统一图像生成与编辑协议；
- 不同 Provider 使用同一套生成 API。

代表议题及 PR：  
[#3200](https://github.com/earendil-works/pi/issues/3200) · [#12535](https://github.com/earendil-works/pi/pull/12535)

### 4. MCP 协议现代化

社区关注点包括：

- stateless MCP；
- 宿主托管文件传输；
- extension-defined result；
- 公开的 capability 和文件传输 hooks。

代表议题及 PR：  
[#12479](https://github.com/earendil-works/pi/pull/12479) · [#12600](https://github.com/earendil-works/pi/issues/12600)

### 5. Provider 与模型兼容性

主要方向包括：

- 规范化 OpenAI-compatible 工具 Schema；
- 支持 Gemini 3+ 的 thought signature；
- 保留 Claude/OpenRouter reasoning signature；
- 引入 CTYUN 等新 Provider；
- 改善 Copilot Fusion、llama.cpp 子代理等模型发现兼容性。

代表议题及 PR：  
[#7010](https://github.com/earendil-works/pi/issues/7010) · [#9534](https://github.com/earendil-works/pi/issues/9534) · [#12637](https://github.com/earendil-works/pi/issues/12637) · [#12611](https://github.com/earendil-works/pi/pull/12611)

### 6. 性能、内存与大规模工作区

- codemode 嵌套调用进度行需要封顶，避免 V8 OOM；
- `pi-durable` 减少消息正文驻留；
- 文件监听器不能按目录无限创建 `fs.watch`；
- 大型项目需要更可靠且有上限的资源管理。

代表议题及 PR：  
[#12623](https://github.com/earendil-works/pi/pull/12623) · [#12616](https://github.com/earendil-works/pi/issues/12616) · [#12580](https://github.com/earendil-works/pi/issues/12580)

### 7. TUI 可读性与编辑体验

高频需求包括：

- ANSI 粘贴内容必须清理；
- bracketed paste 必须可恢复；
- URL 在换行后仍应指向正确目标；
- 行首字符匹配时，Ctrl+A 应继续查找上一行；
- 可选的助手正文宽度控制；
- 消息时间戳。

代表议题：  
[#11383](https://github.com/earendil-works/pi/issues/11383) · [#12638](https://github.com/earendil-works/pi/issues/12638) · [#12636](https://github.com/earendil-works/pi/issues/12636) · [#12607](https://github.com/earendil-works/pi/issues/12607)

### 8. 本地化配置与扩展 API

- 支持 `AGENTS.local.md`；
- 允许扩展控制 `/login` 的凭据归属；
- 为 MCP 文件传输提供公共扩展钩子；
- 子代理应能继承或正确发现父会话 Provider。

代表议题及 PR：  
[#12543](https://github.com/earendil-works/pi/pull/12543) · [#12639](https://github.com/earendil-works/pi/issues/12639) · [#12600](https://github.com/earendil-works/pi/issues/12600)

---

## 开发者关注点

### 优先解决“压缩失败后的失控循环”

自动压缩失败不能只显示错误后继续工作。开发者需要一个明确的终止或降级策略，包括：

- 最大重试次数；
- 压缩失败后的安全停止；
- 保留最近上下文并缩减工具输出；
- 每次请求前重新计算输出预算；
- 更准确的 CJK token 估算。

### 长会话不能只靠“全量缓存 + 事后压缩”

社区正在从全量保存消息转向：

- 异步提交和流式读取；
- 按需保留正文；
- 可迁移的会话存储；
- 对模型上下文与 UI 展示历史进行解耦。

### 工具调用协议需要更严格的规范化

不同 Provider 对 `required`、reasoning signature、thought signature 的要求不一致。适配层应承担标准化职责，避免扩展和用户脚本为每个 Provider 单独修补。

### 性能问题越来越常表现为资源无上限

高风险点包括 codemode 嵌套调用行、workspace watcher 数量、持久层消息正文驻留，以及失败重试。后续需要更多硬上限、增量发布和可回收状态设计。

### TUI 输入必须具备容错能力

终端粘贴内容不可信。ANSI 转义和未闭合 bracketed paste 都可能破坏 prompt，甚至锁死编辑器。相关修复应继续覆盖粘贴、恢复、快捷键和链接渲染的完整链路。

### Provider 数量增长不能牺牲兼容性

新增 Provider 是社区需求，但工具 Schema、认证存储、模型发现、子代理继承和推理块回放都需要统一契约，而不只是添加模型名称。

### 扩展系统需要更明确的公开 API

登录 Provider 重定向、MCP 文件传输、会话迁移等需求都指向同一问题：现有扩展机制在身份管理、文件 I/O 和持久化方面公开接口不足。公开且稳定的 hooks 将直接影响第三方集成质量。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
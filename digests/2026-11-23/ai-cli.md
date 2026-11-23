# AI CLI 工具社区动态日报 2026-11-23

> 生成时间: 2026-11-23 06:52 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-23**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

当前 AI CLI 工具竞争已从“模型与命令生成能力”转向**多 Agent 编排、跨平台桌面端、会话持久化和协议互操作的综合工程竞争**。社区反馈高度集中在同一组问题：任务状态是否可信、权限选择是否真正生效、上下文与缓存是否可控，以及断线或版本升级后能否恢复。与此同时，ACP、MCP Tasks、A2A、Code Mode 和结构化 Widget 等协议快速成熟，说明生态正在从独立命令行产品加速演进为可嵌入其他 Agent 的执行平台。值得注意的是，今日多个工具仍暴露基础稳定性缺陷，包括 Windows/macOS 发送失败、假成功退出码、后台服务静默退出和上下文膨胀，表明成熟度并未与功能丰富度同步。

---

## 2. 各工具活跃度对比

> Issue、PR 数为所给日报中“过去 24 小时更新”的统计口径；未明确披露完整数量的项目以“至少”标注。

| 工具 | 今日 Issues | 今日 PRs | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个精选热点 | 1 个更新 | 无新版本 | 低更新量、高问题密度 |
| **OpenAI Codex** | 10 个精选热点 | 10 个更新 | 无新版本 | 高活跃，工程修复密集 |
| **Gemini CLI** | 50 | 22 | 1 个 Nightly | 当日最高活跃度 |
| **GitHub Copilot CLI** | 10 个精选热点，另有其他条目 | 1 个公开更新 | `v1.0.115-7` | 中高活跃，正式版本迭代 |
| **Kimi Code CLI** | 0 | 0 | 无 | 当日静默 |
| **OpenCode** | 10 个精选热点 | 10 个更新 | 无新版本 | 高活跃，创新功能密集 |
| **jcode** | 4 | 4 | `v1.1.1` Linux；另有开发版 | 中速迭代 |
| **pi** | 38 | 3 | 无新版本 | 很高 Issue 活跃度，偏修复导向 |

### 活跃度解读

- **Gemini CLI** 以 **50 个 Issue、22 个 PR** 和 Nightly 发布居首，主要投入多 Agent、ACP/A2A、Skills 与上下文治理。
- **pi** 有 **38 个 Issue**，但仅 3 个 PR，说明当前痛点密度高于修复吞吐，1.6.0 后的会话一致性和 Provider 兼容问题值得警惕。
- **OpenAI Codex** 与 **OpenCode** 均有 10 个 PR 更新；前者偏桌面、权限和执行环境稳定性，后者偏 Agent API、Widget 与多 Agent 可视化。
- **Claude Code** 今日只有 1 个 PR 更新，但热点问题集中于上传、缓存、规则加载和中断语义，说明其核心痛点仍是大型产品状态一致性。
- **Kimi Code CLI** 当日无活动，无法据此判断长期产品节奏。
- **Copilot CLI** 和 **jcode** 均发布新版本，分别体现成熟产品修复迭代与快速 Self-dev 发布体系。

---

## 3. 共同关注的功能方向

### 3.1 多 Agent、子代理与前台编排

这是当前最普遍的竞争主线。

- **Gemini CLI**：允许 Agent 调用其他 Agent，并引入嵌套深度限制；社区关注递归调用、共享记忆、并行协作和轨迹分享。
- **OpenCode**：推动恢复前台 Subagent 执行，并在 TUI 页脚展示子任务状态；Agent Widgets 可输出交互式结构化 UI。
- **jcode**：将 `Esc` 中断限定在父级 turn，避免子代理被连带取消。
- **OpenAI Codex**：桌面 Work、SSH 委派和远程子代理工作流仍在恢复能力上出现回归。
- **pi**：修复会话切换时旧会话继续执行 Prompt 的问题。
- **Claude Code**：Desktop 多 Agent 的模型、Token、工具调用数展示仍不完整。

**共同诉求**：不仅需要“能调用子 Agent”，还需要**明确的父子关系、取消边界、进度展示、失败传播和状态一致性**。

### 3.2 权限选择必须与实际执行一致

多个工具出现 UI 显示与底层策略不一致：

- **OpenAI Codex**：Windows/macOS 选择 Full Access 后仍静默降级为 workspace-write 或关闭网络。
- **Claude Code**：递归删除未校验变量、浏览器权限无法批准、Hook 缺少模型状态。
- **OpenCode**：Plan 模式拒绝写入明确配置的 Plan 目录，且有 Agent 未经批准执行破坏性操作的报告。
- **Gemini CLI**：社区要求阻止破坏性 Git、数据库修改等高风险操作，并修复沙箱权限拒绝识别。

**共同诉求**：权限应从 UI 选择贯穿到进程启动、沙箱配置、网络策略和 Hook 上下文，遇到不支持的配置必须显式报错，不能静默降级。

### 3.3 上下文、缓存与成本可观测性

- **Claude Code**：ToolSearch、Skill 或 tool_result 后 Prompt Cache 被完整重写；Desktop 初始上下文约为 CLI 的 6 倍。
- **OpenCode**：`keep.tokens` 实际可能达到配置值的 5–15 倍。
- **Gemini CLI**：搜索、Shell 和 MCP 大输出可能挤占上下文；PR 增加匹配上限、输出截断及 Token 元数据标准化。
- **pi**：从约 100K 上下文切换到 64K 模型后，压缩流程可能直接溢出。
- **OpenAI Codex**：用量消耗异常且账户统计不一致。
- **Copilot CLI**：用户希望直接查看模型上下文窗口与计费信息。

**共同诉求**：开发者需要可解释的 Token 预算，包括 system、tools、skills、历史记录、缓存和各子 Agent 的独立贡献，而不仅是最终总 Token 数。

### 3.4 桌面端、跨平台与后台服务稳定性

- **Codex**：Windows Work 无法发送、Local/Cloud 选择器异常、`CreateProcessSecurityEnvironment` 失败导致所有本地命令无法启动。
- **Claude Code**：Windows/macOS 文件上传失败、Office 插件消失、Desktop 崩溃。
- **OpenCode**：Windows `serve --service` 空闲后静默退出；Desktop 模型选择器递归卡死。
- **Copilot CLI**：云沙箱工具调用后无法重连，GitHub Mobile Android 后台频繁断线。
- **Gemini CLI**：Browser Agent 在 Wayland 失败，并缺少会话锁恢复。
- **pi**：Windows mintty/ConPTY 探测污染 Prompt，甚至意外触发外部编辑器。

**共同诉求**：桌面、CLI、移动端、Web 和远程服务必须具备一致的恢复能力，并提供明确的退出原因、连接状态和自动重连机制。

### 3.5 会话持久化、恢复与命名

- **Copilot CLI**：手动 `/rename` 被自动会话名覆盖；云会话断线后历史可读但实时连接不可恢复。
- **Codex**：Cloud 会话断线重连、TUI 恢复、历史 mentions 保留以及大型 diff 挤占回放缓冲。
- **pi**：会话切换、Resume、MCP 工具重新加载和 durable 删除均存在生命周期问题。
- **jcode**：希望在同一 TUI 中通过 `/new` 创建空白会话，并将后台任务严格隔离到 `JCODE_HOME`。
- **OpenCode**：Web UI 自动同步服务器项目，Desktop 会话固定与跨端管理需求增强。

**共同诉求**：会话名称、消息、工具状态、子任务和权限状态应可持久化，并在跨端、升级和断线后准确恢复。

### 3.6 ACP、MCP、A2A 与嵌入式协议成熟

- **Gemini CLI**：ACP 并行工具调用、输出截断、Token 统计、Hook 拒绝状态和统一退出码均有集中改进。
- **OpenCode**：Code Mode 可通过 `opencode://` 调用内部 API；ACP 能向客户端透传命令失败。
- **Copilot CLI**：MCP 客户端声明 Tasks 扩展，却无法处理 `CreateTaskResult`；ACP 会话缺少图像生成能力。
- **Codex**：app-server 提前关闭时 CLI 仍返回退出码 0。

**共同诉求**：协议层必须做到“声明即支持”，并提供准确的成功、失败、取消、拒绝和 Token 用量状态。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与竞争特点 |
|---|---|---|---|
| **Claude Code** | 终端开发、Desktop/Cowork、Office 集成、插件 Hook、路径规则 | 注重终端体验与 Claude 模型能力的企业开发者 | Claude 原生生态，围绕 Prompt Cache、Rules、Hooks 和桌面工作流深化；优势在模型与工具链一致性，短板是桌面及跨端复杂度 |
| **OpenAI Codex** | Desktop Work、Local/Cloud 执行、SSH/app-server、远程 Agent | 广泛开发者、远程开发与 OpenAI 平台用户 | 以桌面执行环境、app-server、权限配置和云会话为核心；工程规模大，当前回归集中在 Windows、权限映射和连接生命周期 |
| **Gemini CLI** | 多 Agent、Skills、浏览器代理、ACP/A2A、扩展生态 | 希望使用 Gemini、定制扩展并嵌入自动化流程的开发者 | Nightly 快速迭代，协议和多 Agent 功能激进；功能扩张最快，但对失败语义、配置生效和工具规模控制提出更高要求 |
| **GitHub Copilot CLI** | GitHub 云沙箱、MCP、ACP、计划执行、移动端衔接 | GitHub 用户、Copilot 订阅者及 VS Code/移动端用户 | 深度依托 GitHub 身份、仓库与云服务，强调开箱即用和生态一致性；当前云连接、MCP Tasks 与跨客户端能力差异较突出 |
| **OpenCode** | 多 Provider、Code Mode、Agent API、Widgets、Web/Desktop 同步 | 多模型用户、远程开发者和 Agent 平台构建者 | 开放 Provider 策略与内部 API 驱动，迭代速度快；创新面广，但 `keep.tokens`、后台服务和额度问题影响信任 |
| **pi** | 多 Provider 适配、轻量 TUI、会话与 durable 后端 | 高级 CLI 用户、SDK 开发者、Provider 兼容测试者 | 强调极简、协议适配与可嵌入；Issue 量极大但修复吞吐偏低，Provider 协议转换和状态机是主要复杂度 |
| **jcode** | Linux/self-dev、Antigravity Provider、后台任务、TUI 调试 | Linux 高级用户、Provider 尝鲜者与贡献者 | Self-dev 和 SemVer 并行，快速接入新模型；工程体量较小，认证、基础会话流程和开源合规仍需补齐 |
| **Kimi Code CLI** | 当前资料不足 | 暂无法判断 | 当日无活动，缺少足够数据支持定位判断 |

### 定位差异总结

- **模型生态路线**：Claude Code 和 Copilot CLI 更依赖各自平台闭环；OpenCode、pi、jcode 更强调多 Provider 开放兼容。
- **产品形态路线**：Codex、Claude Code 重点争夺 Desktop；Copilot CLI 连接 GitHub 云与移动端；Gemini CLI、OpenCode、jcode 更偏 Agent 编排平台。
- **开放程度路线**：OpenCode 的 Code Mode 与内部 API 最开放；Gemini CLI 的 ACP/A2A 扩展性最强；Copilot CLI 和 Codex 更依赖官方托管执行环境。
- **成熟度代价**：功能最激进的工具通常也承担最多的状态机和协议兼容风险。

---

## 5. 社区热度与成熟度

### 5.1 社区最活跃的工具

1. **Gemini CLI**
   - 50 个 Issue、22 个 PR，Nightly 当日发布。
   - 议题数量和开发吞吐均最高，是当日最活跃项目。
   - 处于**快速扩张期**，但错误状态、配置未生效和子代理挂起说明核心运行时仍需收敛。

2. **pi**
   - 38 个 Issue、仅 3 个 PR。
   - 关注度很高，但“问题发现速度明显高于修复速度”。
   - 处于**高频演进但稳定性承压**阶段，尤其是会话、工具顺序和 Provider 转换。

3. **OpenAI Codex**
   - 10 个热点 Issue、10 个 PR。
   - Issue 影响面大，PR 覆盖会话恢复、协议、终端渲染和文件系统性能。
   - 属于**大规模成熟产品的回归治理期**，桌面和 Windows 发布质量是主要短板。

4. **OpenCode**
   - 10 个热点 Issue、10 个 PR，功能创新密度高。
   - 处于**快速产品化和平台化阶段**；免费额度与上下文膨胀是用户信任风险。

### 5.2 更接近稳定迭代的工具

- **GitHub Copilot CLI**：今日发布补丁版本，修复恢复连接和 npm 后台进程问题，功能方向明确；但云重连、MCP Tasks 和 ACP 能力一致性仍说明协议层尚未完全成熟。
- **jcode**：发布节奏快，PR 覆盖面实用，但 Desktop 登录和 TUI 空白会话等基础能力仍有断点。
- **Claude Code**：用户规模和工作流复杂度大，版本发布节奏今日不活跃；核心问题更多是已有复杂功能之间的状态一致性，而非能力缺失。

### 5.3 成熟度判断

| 成熟度层级 | 工具 | 判断 |
|---|---|---|
| **相对成熟、进入稳定性治理** | Codex、Claude Code、Copilot CLI | 功能覆盖广，真实用户工作流丰富，但桌面、更新和跨端回归增多 |
| **高速迭代、能力快速扩张** | Gemini CLI、OpenCode | 多 Agent 与协议能力领先，运行时和状态语义尚在收敛 |
| **活跃但缺陷密度偏高** | pi | Provider 与会话能力增长快，修复资源和一致性测试不足 |
| **小步快跑、快速追赶** | jcode | 迭代积极，但基础链路与合规治理需要加强 |
| **数据不足** | Kimi Code CLI | 今日无活动，不能据此评估成熟度 |

---

## 6. 值得关注的趋势信号

### 6.1 “任务成功”正在成为协议级问题

Codex 的提前退出仍返回 0、Gemini 的 `MAX_TURNS` 被报告为 success、pi 的截断工具调用被标为 `done`，共同表明 Agent 生态正在从“生成内容”进入“执行任务”阶段。

**参考价值**：构建自动化流水线时，不应只依赖模型的自然语言结果或退出码，应同时检查：

- turn 是否完整结束；
- 是否存在最终 assistant 消息；
- 工具结果是否闭合；
- 是否发生截断、取消或轮次耗尽；
- 实际修改是否已持久化。

### 6.2 权限与审批需要从提示词升级为执行层约束

多个工具出现 Full Access 静默降级、Plan 目录误拒绝和破坏性命令未审批。单纯依赖模型理解权限说明已不足以支撑生产使用。

**参考价值**：评估 CLI 时，应重点检查权限配置是否有可审计映射、危险命令是否在执行前验证、路径是否规范化，以及拒绝后是否明确反馈。

### 6.3 上下文治理将取代单纯模型能力，成为成本竞争核心

Claude Code 的缓存重写、Desktop 与 CLI 的 6 倍差异、OpenCode 的 `keep.tokens` 偏差，以及 pi 的模型切换压缩失败，都说明“上下文管理质量”将直接影响费用、延迟与稳定性。

**参考价值**：应把 Prompt Cache 命中、工具输出截断、Skills 加载、上下文预算和子 Agent 隔离列为核心采购或选型指标，而不是只看单次模型价格。

### 6.4 Agent 协议正从“命令调用”升级为“任务运行时”

ACP、MCP Tasks、A2A、Code Mode 和 Widgets 的同步推进表明，AI CLI 正成为其他 Agent 或 IDE 的执行后端。CLI 本身不再只是用户入口，也在成为可编程运行时。

**参考价值**：未来生态竞争可能围绕以下能力展开：

- 结构化任务与事件协议；
- 多 Agent 调度和取消语义；
- Token 与成本归因；
- 会话迁移；
- 工具动态发现；
- 权限委托与审批传递。

### 6.5 跨端一致性正在成为独立产品能力

CLI、Desktop、Web、Mobile、SSH 和浏览器端的差异，已经比单纯新增模型更影响用户信任。Windows 回归在 Codex 中尤其集中；Claude Code 和 Copilot CLI 也出现类似跨端状态问题。

**参考价值**：团队选型时应分别测试各执行位置，而不是默认“Desktop 是 CLI 的图形包装”。尤其要覆盖升级后迁移、后台休眠、网络切换、权限选择和断线恢复。

### 6.6 安全护栏必须可执行、可观测，而非仅依赖模型自律

递归删除、Git reset、数据库修改、注册表删除和未批准应用启动等反馈表明，仅在系统提示中写“不要做危险操作”不足以形成可靠边界。

**参考价值**：高风险操作应采用路径白名单、只读模式、dry-run、事务化变更、人工确认和审计日志的组合策略。

### 6.7 Provider 抽象层的主要成本正在暴露

pi 的图片工具结果、OpenAI reasoning replay、Gemini thinking level，以及 OpenCode 的 Provider 同步问题说明，“兼容多模型”并不只是映射模型名称，还包括推理项、工具结果、图片、参数和错误语义的完整转换。

**参考价值**：如果业务依赖多 Provider，应建立**跨 Provider 契约测试矩阵**，重点覆盖工具调用、推理续传、图片、多模态结果、并发、截断和配额错误。

---

## 决策建议

### 优先选择成熟稳定型

适合强调企业权限、远程开发及既有生态集成的团队：

- **Codex**：远程/app-server 能力突出，但需等待 Windows 与权限回归收敛。
- **Claude Code**：Claude 原生开发体验和上下文能力强，但需评估 Desktop/Cowork 稳定性与缓存成本。
- **Copilot CLI**：GitHub 用户接入成本最低，适合以仓库与云沙箱为核心的工作流。

### 优先选择 Agent 平台型

适合需要多 Agent、协议嵌入和快速扩展的团队：

- **Gemini CLI**：多 Agent、ACP/A2A 方向最激进，适合愿意参与快速迭代的用户。
- **OpenCode**：多 Provider 和内部 API 灵活，适合构建 Agent 工具链，但需规避上下文与后台服务风险。
- **pi**：适合重视轻量、Provider 兼容和 SDK 嵌入，但当前应加强状态一致性测试。

### 观望或谨慎试点

- **jcode**：更新积极，但基础登录、会话管理和许可证合规仍需观察。
- **Kimi Code CLI**：本日缺少动态，不宜仅凭本次数据作产品结论。

**总体建议**：当前选型不应只看模型榜单或命令完成率，应把**失败状态准确性、权限一致性、上下文成本、断线恢复、协议兼容和跨平台回归测试**纳入同等甚至更高权重。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-11-23  
> 说明：PR 的评论数在数据源中均为 `undefined`，因此以下“热门 PR”主要依据 PR 数量、持续更新时间、问题覆盖面及社区关联 Issue 判断；Issue 则按评论数排序。状态均依据数据标注。

## 1. 热门 Skills 排行

### 1. `skill-creator` 评测与触发可靠性修复

相关 PR：[PR #1298](https://github.com/anthropics/skills/pull/1298) · [PR #1681](https://github.com/anthropics/skills/pull/1681) · [PR #1997](https://github.com/anthropics/skills/pull/1997)  
相关 Issue：[Issue #556](https://github.com/anthropics/skills/issues/556) · [Issue #1352](https://github.com/anthropics/skills/issues/1352)

- **功能**：负责创建、优化、评测和打包 Skill，是整个生态的“元工具”。
- **讨论热点**：
  - `claude -p` 评测触发率长期为 0，可能与命令行下 Skill/Command 未正确触发有关。
  - 多 worker 并行评测发生 Skill UUID 串扰，产生接近 0 的假阴性。
  - Windows 管道处理、运行时异常及负样本误判会污染触发率。
  - YAML frontmatter 解析与真实加载结果不一致。
  - `package_skill.py` 不能直接执行，导入路径和文档已过时。
- **当前状态**：上述 PR 均为 **Open**。这是当前社区关注度最高、影响面最广的基础设施型 Skill。

### 2. `webapp-testing`

相关 PR：[PR #1980](https://github.com/anthropics/skills/pull/1980) · [PR #1976](https://github.com/anthropics/skills/pull/1976)

- **功能**：启动测试服务器、通过浏览器自动发现和操作页面元素，并验证 Web 应用行为。
- **讨论热点**：
  - `with_server.py` 使用 `shell=True` 执行用户或 Agent 提供的命令，存在命令注入风险。
  - `textarea`、`select` 被错误按普通文本框识别，影响元素发现和自动测试。
- **当前状态**：两项修复均为 **Open**。安全问题优先级明显高于普通功能增强。

### 3. `docx` 文档生成与修订处理

相关 PR：[PR #1792](https://github.com/anthropics/skills/pull/1792) · [PR #1734](https://github.com/anthropics/skills/pull/1734)  
相关 Issue：[Issue #2018](https://github.com/anthropics/skills/issues/2018)

- **功能**：创建、编辑和验收 Word 文档，处理批注、修订、格式与转换结果。
- **讨论热点**：
  - LibreOffice 超时可能被误报为成功，需要验证输出中是否仍含修订标记。
  - 孤立批注清理成为独立需求。
  - `merge_runs.py` 合并文本运行时丢失命名空间声明，可能生成无效 XML 并覆盖原文件。
- **当前状态**：所有相关 PR 均为 **Open**。社区关注点已从“能否生成文档”转向“结果是否可靠、可验证且不破坏源文件”。

### 4. `xlsx` 公式与外部链接审计

相关 PR：[PR #2019](https://github.com/anthropics/skills/pull/2019)  
相关 Issue：[Issue #2013](https://github.com/anthropics/skills/pull/2013)

- **功能**：处理 Excel 工作簿、公式重算以及外部引用风险检测。
- **讨论热点**：
  - 风险扫描只检查工作簿级定义名称，漏掉工作表级定义名称和别名。
  - 公式可能通过间接引用使用外部链接，造成漏报。
- **当前状态**：PR 为 **Open**。这表明用户不仅需要表格生成能力，也需要可解释的公式依赖与安全审计能力。

### 5. `claude-api` 文档与上下文成本

相关 PR：[PR #1730](https://github.com/anthropics/skills/pull/1730) · [PR #1950](https://github.com/anthropics/skills/pull/1950)  
相关 Issue：[Issue #1487](https://github.com/anthropics/skills/issues/1487)

- **功能**：提供 Claude API、工具调用、SDK 行为和平台学习资料。
- **讨论热点**：
  - 文档链接失效会直接误导用户。
  - Python SDK 已支持自动恢复 `pause_turn`，旧指南仍建议通过外层循环重启。
  - `claude-api` 被一次性注入约 156k tokens，可能直接耗尽上下文窗口。
- **当前状态**：相关 PR 均为 **Open**。核心矛盾是“权威参考资料必须全面”与“Skill 上下文必须轻量”之间的冲突。

### 6. `pptx` 演示文稿生成与渲染

相关 PR：[PR #1975](https://github.com/anthropics/skills/pull/1975)

- **功能**：创建、渲染和检查 PowerPoint 演示文稿。
- **讨论热点**：
  - `--cols` 传 0 或负数时没有前置校验，导致昂贵的 LibreOffice 渲染后才抛出无关异常。
- **当前状态**：**Open**。反映社区对生成型办公 Skill 的共同期待是：参数校验应尽早、失败信息应直接、渲染成本应可控。

### 7. `algorithmic-art`

相关 PR：[PR #1977](https://github.com/anthropics/skills/pull/1977)

- **功能**：生成算法艺术图形，包括可重复的程序化绘图能力。
- **讨论热点**：
  - `wrapAround()` 对负数和越界值处理错误；修复后统一采用模运算，使结果始终处于合法区间。
- **当前状态**：**Open**。社区正在补齐边界条件和数学正确性，而不是只关注视觉效果。

### 8. 面向具体行业的新 Skills

- `md2video-audio`：[PR #1703](https://github.com/anthropics/skills/pull/1703)  
  将 Markdown 转换为带配音的视频，定位为低成本的文档转视频工作流。
- `proofcore-contract-auditor`：[PR #1771](https://github.com/anthropics/skills/pull/1771)  
  对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链。
- `scnet-hpc`：[PR #1615](https://github.com/anthropics/skills/pull/1615)  
  通过 SSH、Slurm 和集群配置操作科研 HPC 环境。
- `notion-spec-to-implementation`：[PR #1245](https://github.com/anthropics/skills/pull/1245)  
  将 Notion 产品/技术规格拆解为可执行任务、验收标准和进度追踪。

这些 PR 均为 **Open**。社区增量方向明显偏向“垂直行业自动化”和“端到端交付链路”。

---

## 2. 社区需求趋势

### 1. 组织级共享与统一分发

[Issue #228](https://github.com/anthropics/skills/issues/228) 是最热需求之一。用户希望 Claude.ai 支持组织级 Skill 库和直接分享链接，而不是通过 Slack/Teams 人工传递 `.skill` 文件。

### 2. 官方来源与信任边界治理

[Issue #492](https://github.com/anthropics/skills/issues/492) 以 46 条评论位居榜首：社区 Skill 若以 `anthropic/` 命名空间分发，会让用户误认为其为官方能力，形成权限授予和供应链信任风险。

### 3. Skill 评测、触发和优化必须可信

[Issue #556](https://github.com/anthropics/skills/issues/556) 与 [Issue #1352](https://github.com/anthropics/skills/issues/1352) 聚焦 `skill-creator` 的触发评测。用户需要的不只是生成 Skill，而是可靠的命中率、负样本隔离、跨平台兼容和可重复的自动优化。

### 4. 面向 Agent 的输出质量门禁

[Issue #1385](https://github.com/anthropics/skills/issues/1385) 提出“预任务校准 → 对抗式审查 → 交付验证”的三阶段流水线。社区期待将隐性经验固化为可执行的 Skill，以降低长任务中的推理漂移和交付错误。

### 5. 长期运行 Agent 的紧凑记忆

[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提出 `compact-memory`，以符号化表示压缩 Agent 状态，减少持久记忆对上下文窗口的占用。

### 6. 文档生成的专业排版与质量控制

[PR #514](https://github.com/anthropics/skills/pull/514) 提议新增 `document-typography`，集中解决孤行、寡行、标题悬挂和编号错位等问题。虽然 PR 仍为 **Open**，但它反映出“内容正确”之外的排版质量需求。

### 7. 测试、安全与结果验证

Webapp Testing 的命令注入修复、DOCX 修订验收、XLSX 外部链接扫描共同显示：社区正在把 Skill 从“尝试完成任务”升级为“安全执行并提供可验证证据”。

### 8. 垂直场景与专业工具链

HPC 操作、Notion 规格落地、智能合约审计、Markdown 转视频等提案说明，通用 Skill 已不足以覆盖用户需求，新的增长点集中在具体行业和工具链。

---

## 3. 高潜力待合并 Skills

> 这些 PR 均为 **Open**。由于 PR 评论数缺失，以下按社区问题关联度、场景价值和成熟度综合判断。

| 优先级 | Skill / PR | 潜力判断 |
|---|---|---|
| 高 | [`skill-creator` 评测修复 #1298](https://github.com/anthropics/skills/pull/1298) | 同时解决 Windows、并发隔离、运行时失败和负样本误判，直接影响所有 Skill 的开发质量。 |
| 高 | [`skill-creator` YAML 解析修复 #1997](https://github.com/anthropics/skills/pull/1997) | 确保评测和描述优化读取到的元数据与真实 `SKILL.md` 一致，是自动优化的基础。 |
| 高 | [`skill-creator` 打包入口修复 #1681](https://github.com/anthropics/skills/pull/1681) | 修复直接执行失败及过时用法，降低贡献者门槛。 |
| 高 | [`webapp-testing` 命令注入修复 #1980](https://github.com/anthropics/skills/pull/1980) | 涉及 CWE-78 安全风险，安全类修复通常更容易优先合入。 |
| 高 | [`docx` 输出验收修复 #1792](https://github.com/anthropics/skills/pull/1792) | 避免将超时或残留修订的文档误报为成功，提高办公文档 Skill 的可信度。 |
| 中高 | [`xlsx` 外部链接检测修复 #2019](https://github.com/anthropics/skills/pull/2019) | 已有对应问题报告，直接提升 Excel 风险审计的准确率。 |
| 中高 | [`md2video-audio` #1703](https://github.com/anthropics/skills/pull/1703) | 覆盖 Markdown 到视频/配音的完整内容流水线，使用场景广、展示性强。 |
| 中高 | [`proofcore-contract-auditor` #1771](https://github.com/anthropics/skills/pull/1771) | 智能合约审计与链上证明结合，差异化明显，适合 Web3 垂直生态。 |
| 中 | [`scnet-hpc` #1615](https://github.com/anthropics/skills/pull/1615) | HPC、SSH、Slurm 和集群工作流高度专业化，落地价值明确。 |
| 中 | [`notion-spec-to-implementation` #1245](https://github.com/anthropics/skills/pull/1245) | 打通规格拆解、实现、验收和进度追踪，符合端到端交付趋势。 |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是建立一套“官方可信、可组织共享、评测可靠、执行安全、结果可验证”的 Skills 基础设施，而不只是继续增加 Skill 数量。**

与此同时，最具增长潜力的新增方向集中在 **Agent 质量门禁、紧凑记忆、行业自动化和端到端内容生产**；其中 `skill-creator` 的评测可靠性与信任边界治理，是生态继续扩张前最需要优先解决的问题。

---

# Claude Code 社区动态日报｜2026-11-23

## 今日速览

- 过去 24 小时没有新版本发布；社区讨论主要集中在 **Desktop/Cowork 稳定性、上传与权限异常、Prompt Cache 成本与缓存复用**。
- Windows 与 macOS 用户分别报告 Cowork 文件上传失败、任务消失、Desktop 崩溃及 Office 插件异常；工具执行、路径规则加载和 Agent SDK 事件语义也暴露了若干可复现缺陷。
- 本期仅有 1 个更新的 PR，重点修复插件 Shell Hook 的执行方式与路径引用问题。

---

## 社区热点 Issues

### 1. Skills 上传在 Web 与 Desktop 返回 Internal Server Error
[#26310](https://github.com/anthropics/claude-code/issues/26310)

- **影响范围**：Claude Web 与 Claude Desktop 的 Skills 上传流程。
- **重要性**：这是 Skills 分发链路上的阻断性问题，直接影响技能包安装与共享。
- **社区反应**：30 条评论、16 个赞，为本批更新 Issue 中讨论最激烈的一项。
- **开发价值**：应重点检查上传接口、服务端异常映射及 Web/Desktop 双端错误反馈是否一致。

### 2. Monitor Tool 的超时上限与真实生命周期不一致
[#94393](https://github.com/anthropics/claude-code/issues/94393)

- **影响范围**：Linux 环境下的 Monitor Tool、持久任务和超时配置。
- **问题表现**：Schema 允许 `timeout_ms` 设置到 3,600,000，但任务实际约 30 分钟结束，即使会话仍处于活跃状态。
- **社区反应**：14 条评论、32 个赞；反馈量高，且带可复现步骤。
- **开发价值**：这是 API 契约与执行引擎行为不一致，可能导致自动化任务提前终止。

### 3. Windows Cowork 远程会话上传失败，并伴随 HTTP 503
[#110676](https://github.com/anthropics/claude-code/issues/110676)

- **影响范围**：Windows Desktop/Cowork 远程会话。
- **问题表现**：`device_stage_files` 对不小于 4 MB 的文件返回 “upload failed”，随后即使文件缩小至 47 KB 仍出现 HTTP 503。
- **社区反应**：14 条评论，反映问题影响直接且复现路径明确。
- **开发价值**：异常可能同时涉及文件大小边界、会话状态污染和上传服务容量，需分层排查。

### 4. macOS 上 Microsoft 365 Office 插件安装后迅速消失
[#111275](https://github.com/anthropics/claude-code/issues/111275)

- **影响范围**：macOS、Microsoft 365 Office 插件、Desktop/Cowork Office 会话。
- **问题表现**：插件安装数秒后从列表消失，疑似与 Desktop 或 Cowork Office 会话中的组件清理流程有关。
- **社区反应**：14 条评论、2 个赞，并关联到既有相关问题。
- **开发价值**：可能属于回归问题，反映 Office 插件生命周期与桌面端会话管理之间存在冲突。

### 5. TLS 1.3 混合密钥交换在特定 ISP 路径触发 ECONNRESET
[#94225](https://github.com/anthropics/claude-code/issues/94225)

- **影响范围**：macOS 及部分直连网络环境。
- **问题表现**：Anthropic ingress 在 TLS 1.3 握手中携带 `X25519MLKEM768` 时重置连接；使用经典密钥共享或 VPN 可恢复。
- **社区反应**：10 条评论；报告称问题在数分钟至数小时后出现，其他网络客户端同期正常。
- **开发价值**：涉及后量子 TLS 协商兼容性，可能仅影响部分运营商、中间盒或路径，而非 Claude Code 本身。

### 6. ToolSearch、Skill 或 tool_result 后 Prompt Cache 被完整重写
[#91514](https://github.com/anthropics/claude-code/issues/91514)

- **影响范围**：macOS、Windows，以及多个模型与 Desktop/CLI 环境。
- **问题表现**：缓存读取量回落到仅 system 与 tools 的基线，完整会话前缀被重新写入；涉及 `cache_read` 异常下降。
- **社区反应**：10 条评论，并提供多个请求 ID 作为证据。
- **开发价值**：直接推高 Token 成本与延迟；还包含关于截图大小限制的历史数据线索。

### 7. `/model` 选择器未展示 Opus Plan
[#26556](https://github.com/anthropics/claude-code/issues/26556)

- **影响范围**：`/model` 交互式模型选择器。
- **需求说明**：当前只展示 Sonnet、Opus、Haiku 等单模型选项，未暴露 `opusplan` 组合模式。
- **社区反应**：9 条评论、23 个赞，属于高认可度的易用性改进建议。
- **开发价值**：不熟悉命令语法的用户无法发现组合模型模式，属于低成本、高可见度的产品优化。

### 8. 中断正在执行的工具，却被标记为 `user-rejected`
[#86001](https://github.com/anthropics/claude-code/issues/86001)

- **影响范围**：工具执行、Agent SDK 与工具结果语义。
- **问题表现**：用户中断工具后，返回结果声称工具未运行；但引擎枚举本身已有专门的 `interrupted` 值。
- **社区反应**：6 条评论、2 个赞，并提供了可复现流程。
- **开发价值**：错误语义会让模型误判文件编辑、命令执行等操作是否已经发生，可能导致重复执行或状态不一致。

### 9. 创建新文件时，路径级规则和嵌套 `CLAUDE.md` 不会加载
[#96361](https://github.com/anthropics/claude-code/issues/96361)

- **影响范围**：核心规则发现机制、路径作用域规则与多层项目指令。
- **问题表现**：通过 Write 创建新文件时，路径级规则及嵌套 `CLAUDE.md` 没有被加载。
- **社区反应**：4 条评论、4 个赞；报告提到类似问题此前曾被作为 stale 关闭。
- **开发价值**：规则文件直接影响模型行为和权限边界，遗漏加载属于高风险上下文一致性问题。

### 10. Desktop Code 标签页新会话初始上下文约为 CLI 的 6 倍
[#105328](https://github.com/anthropics/claude-code/issues/105328)

- **影响范围**：macOS Desktop Code 标签页、终端 CLI、上下文与缓存成本。
- **问题表现**：相同配置下，Desktop 新会话初始约 79k Tokens，而 CLI 约 13k，相差约 66k。
- **社区反应**：4 条评论、4 个赞。
- **开发价值**：这些 Tokens 可能在每次模型调用时被重新读取，显著影响费用、延迟和长会话稳定性。

---

## 重要 PR 进展

> 过去 24 小时仅有 1 个更新的 PR，因此本期不虚构其余条目。

### 1. 通过 Bash 并使用带引号路径执行插件 Shell Hook
[#95698](https://github.com/anthropics/claude-code/pull/95698)

- **状态**：Open。
- **修改内容**：将 `ralph-wiggum`、`output-style` 等插件中的裸脚本路径 Hook 改为通过 `bash` 执行，并正确引用 `${CLAUDE_PLUGIN_ROOT}` 路径。
- **修复范围**：同时关联 `#95673`，并修复 `#78490` 中与 `ralph-wiggum`、`output-style` 相关的部分问题。
- **预期收益**：避免因路径包含空格、特殊字符或未显式使用解释器而导致 Hook 启动失败，提升插件 Hook 在不同 shell 环境下的可靠性。

---

## 功能需求趋势

### 1. Desktop、Cowork 与 Office 集成稳定性

社区持续要求改善 Desktop/Cowork 的文件上传、任务历史持久化、Office 插件生命周期和会话迁移。代表性需求包括：

- [Windows Cowork 上传失败与 HTTP 503](https://github.com/anthropics/claude-code/issues/110676)
- [macOS Office 插件安装后消失](https://github.com/anthropics/claude-code/issues/111275)
- [Windows Cowork 任务从侧栏与 Recents 消失](https://github.com/anthropics/claude-code/issues/111776)
- [macOS Desktop 在 Code Agent 会话中崩溃](https://github.com/anthropics/claude-code/issues/107149)

**趋势判断**：用户期待 Desktop 不只是 CLI 的图形包装，而应具备一致的上传、任务恢复、插件管理与崩溃恢复能力。

### 2. Prompt Cache 成本与跨会话复用

缓存重写、缓存读取异常以及会话级 scratchpad 路径导致的缓存失效，是高关注度问题：

- [ToolSearch 后 Prompt Cache 完整重写](https://github.com/anthropics/claude-code/issues/91514)
- [完整会话前缀数秒内被重写多次](https://github.com/anthropics/claude-code/issues/82563)
- [会话 scratchpad 路径阻止跨会话缓存复用](https://github.com/anthropics/claude-code/issues/97262)
- [Desktop 初始上下文显著高于 CLI](https://github.com/anthropics/claude-code/issues/105328)

**趋势判断**：降低重复上下文写入、缩小 Desktop/CLI 上下文差异，是当前最明确的降本诉求之一。

### 3. 模型发现、选择与新模型能力

- [在 `/model` 中展示 Opus Plan](https://github.com/anthropics/claude-code/issues/26556)
- [Fable 接受超出任务范围的 Claude 生成 PR](https://github.com/anthropics/claude-code/issues/108037)
- [Fable 5.2 对 LilyPond 作曲请求产生安全策略误报](https://github.com/anthropics/claude-code/issues/111775)
- [Opus 5.5 与 Fable 5.1 代码质量反馈](https://github.com/anthropics/claude-code/issues/106660)

**趋势判断**：开发者不仅关心新模型是否可用，也关心模型选择入口、范围控制能力、安全策略准确性和生成代码的审查质量。

### 4. Agent 可观测性与任务管理 UI

- [恢复 Desktop 每个 Agent 的模型、Tokens 与工具调用数](https://github.com/anthropics/claude-code/issues/105831)
- [在 `/goal active` 点击后显示目标与进度](https://github.com/anthropics/claude-code/issues/96247)
- [Desktop 侧栏一键折叠非活动线程分区](https://github.com/anthropics/claude-code/issues/110332)
- [Windows Code 标签页支持会话自由嵌套](https://github.com/anthropics/claude-code/issues/110905)

**趋势判断**：多 Agent 工作流需要更透明的执行指标，以及更清晰的会话组织与导航能力。

### 5. TUI 与浏览器自动化效率

- [提供不将 Shell 输出写入 LLM 上下文的转义机制](https://github.com/anthropics/claude-code/issues/97253)
- [在 Claude in Chrome 中支持 WebMCP 工具发现](https://github.com/anthropics/claude-code/issues/76809)

**趋势判断**：开发者希望减少上下文污染，同时提高浏览器内工具发现与自动化能力。

---

## 开发者关注点

### 稳定性与回归控制

最突出的诉求是避免新会话、文件写入、工具调用等关键路径触发非预期行为。路径规则未加载、工具中断状态错误和 Desktop 崩溃，都可能破坏“模型知道发生了什么”这一基本前提。

### 成本可观测性

多个 Issue 指向同一问题：缓存命中率和上下文膨胀缺少清晰、稳定的解释。开发者希望官方日志能够回答：

- 哪些 Tokens 来自 system、tools、skills、scratchpad 或历史会话；
- 为什么本应命中缓存的前缀被完整重写；
- Desktop 与 CLI 为何存在约 6 倍的初始上下文差异。

### 权限与数据安全

- [Windows 上未校验变量即执行递归删除](https://github.com/anthropics/claude-code/issues/111755)
- [Chrome 站点权限无法批准](https://github.com/anthropics/claude-code/issues/105390)
- [UserPromptSubmit Hook 缺少当前模型状态](https://github.com/anthropics/claude-code/issues/111757)

这些反馈表明，开发者尤其关注 **破坏性命令前的路径校验、浏览器授权流程、Hook 上下文完整性以及任务历史的可靠持久化**。

### 自动化接口契约

Agent SDK 和 stream-json 用户依赖稳定的事件类型及语义。目前 `/goal` 不输出已文档化的 `active_goal` 事件，以及工具中断被错误标记为 `user-rejected`，都会直接影响自动化客户端的状态机。

### 跨平台一致性

macOS、Windows、Linux、CLI、Desktop、Web 与 Chrome 扩展之间存在明显体验差异。社区期待同一功能在多端具备一致的文件传输、权限处理、模型配置、缓存策略和任务恢复能力。

---

**今日结论**：本期没有版本发布，Issue 热度主要来自真实工作流中的稳定性与成本问题。短期建议官方优先核查 **Skills/Cowork 上传链路、Prompt Cache 重写、Desktop 上下文膨胀、工具中断语义和路径规则加载**；唯一新增 PR 虽规模较小，但体现了近期插件 Hook 兼容性和安全执行方向的维护重点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-23**

## 今日速览

过去 24 小时没有新版本发布，社区焦点集中在桌面端稳定性和 Windows 平台：Windows 新建 Work 会话无法发送、Local/Cloud 执行位置选择器异常，以及沙箱权限配置未按用户选择生效等问题频发。代码侧则围绕 TUI/Cloud 会话恢复、文件发现性能、usage attribution 和 CLI 退出码正确性持续推进改进。

## 社区热点 Issues

1. **[#41220] Codex 用量与配额消耗异常，且账户统计不一致（开放，100 条评论）**  
   这是本日讨论热度最高的问题。多份报告指向订阅额度或购买额度消耗速度异常，并伴随 usage accounting 偏差，可能影响用户对成本和剩余额度的判断。问题持续获得大量社区反馈，建议重点关注官方定位及是否提供统一追踪与修复。  
   https://github.com/openai/codex/issues/41220

2. **[#54564] Windows 新建 Work 会话无法发送消息，Send 按钮持续禁用（开放，29 条评论）**  
   用户在 Windows 11 上可输入内容，但新 Work 会话的发送按钮不可用，直接影响桌面端核心工作流。与多个新建会话、权限选择器相关报告高度相似，可能属于同一轮 Windows 回归。  
   https://github.com/openai/codex/issues/54564

3. **[#51636] macOS Work 新消息无法通过 Enter 或发送按钮提交（开放，24 条评论）**  
   macOS 桌面端的 Work 对话出现“输入正常但无法发送”，而普通 Chat 可正常使用。故障横跨两个项目且重启无效，表明问题可能与 Work 会话初始化或连接状态管理相关。  
   https://github.com/openai/codex/issues/51636

4. **[#62393] Windows Work 新会话的 Send 按钮间歇性禁用（开放，19 条评论）**  
   即使输入框已有内容，发送按钮仍可能处于禁用状态。报告集中于近期 Windows 构建版本，与 #54564、#62918 和 #63042 构成明显的同类问题簇。  
   https://github.com/openai/codex/issues/62393

5. **[#42973] Desktop 更新后，SSH 无头任务丢失线程消息和委派工具（开放，22 条评论）**  
   远程执行环境在客户端升级后无法继续获得 thread messaging 与 delegation 工具，可能与远端 CLI/app-server 版本不匹配有关。该问题直接削弱远程 Agent、SSH 和子代理工作流，是远程开发场景中的高优先级回归。  
   https://github.com/openai/codex/issues/42973

6. **[#59941] Windows 更新后所有本地命令均因 `CreateProcessSecurityEnvironment 0x8007000F` 失败（开放，9 条评论）**  
   即便只运行简单的 `Get-Location`，进程也会在命令启动前失败。该问题意味着 Windows 沙箱或应用安全环境创建流程发生系统性故障，对本地开发工具链影响较大。  
   https://github.com/openai/codex/issues/59941

7. **[#56663] Windows 选择 “Full access” 实际静默降级为 workspace-write（开放，7 条评论）**  
   用户选择完整访问权限后，底层却收到本地未定义的 `permission_profile: "managed"`，随后静默回退到受限模式。除安全语义不透明外，也可能与近期 Local/Cloud 选择器异常属于同一套权限状态同步问题。  
   https://github.com/openai/codex/issues/56663

8. **[#63078] macOS 新建 Local Full Access 会话仍以受限模式运行且禁用网络（开放，4 条评论）**  
   尽管界面显示选择 Full Access，实际执行环境仍是 managed/workspace-write，并关闭网络访问。该报告再次暴露出“界面选择”与“底层执行策略”不一致的问题，对需要安装依赖或访问网络的本地任务影响明显。  
   https://github.com/openai/codex/issues/63078

9. **[#63186] Codex 在审批提示后冻结并持续消耗用量（开放，4 条评论）**  
   审批弹窗短暂出现后，应用进入无响应状态，用户无法停止任务或发送消息，最终任务又以“完成”结束。该现象将 UI 冻结、任务状态失控和资源消耗三种风险结合起来，值得关注官方诊断。  
   https://github.com/openai/codex/issues/63186

10. **[#63227] CLI 在嵌入式 app-server 提前关闭时仍返回成功退出码（开放，2 条评论）**  
    `codex exec` 将事件流意外关闭误判为正常结束，可能在没有收到完整 turn 结果的情况下返回 exit code 0。虽然评论量不多，但这会破坏自动化流水线的成功判定，属于值得优先修复的 CLI 可靠性问题。  
    https://github.com/openai/codex/issues/63227

## 重要 PR 进展

> 下列 PR 在数据中均显示为 **CLOSED**；是否已合并、关闭原因及对应发布版本未在数据中提供。

1. **[#63266] 批量执行指令与 Skill 发现的文件系统元数据检查**  
   将多层目录的元数据查询批处理，减少远程执行器的往返次数及 sandbox helper 启动成本，有助于改善远程仓库启动和 Skill 发现性能。  
   https://github.com/openai/codex/pull/63266

2. **[#63211] TUI 自动恢复断线的 Cloud 会话**  
   当 Cloud 事件流中断时，在后台重新附加当前会话，避免终端离线期间已保存的回答未显示在下一次刷新中。  
   https://github.com/openai/codex/pull/63211

3. **[#63237] Cloud 会话记录保留 mentions 信息**  
   修复 Cloud 历史记录和实时事件将用户消息视为纯文本、无法返回结构化 mention 的问题，提升文件、Agent 或其他对象引用的可追踪性。  
   https://github.com/openai/codex/pull/63237

4. **[#63219] 默认排除逐项 usage attribution**  
   在 Responses HTTP 请求和 WebSocket 握手中默认排除 `usage.attribution`；启用 `experimentalRawEvents` 的线程仍保留逐项归属数据。该调整可减少协议开销，并影响用量统计与调试方式。  
   https://github.com/openai/codex/pull/63219

5. **[#63258] 断线状态下展示可用 slash commands**  
   app-server 连接中断后，TUI 仍允许执行本地命令；该 PR 增加 `/` 菜单，让用户可以发现当前可用的本地命令，改善降级模式体验。  
   https://github.com/openai/codex/pull/63258

6. **[#63262] app-server 断开时取消文件夹信任提示**  
   daemon 重启导致连接失效后，自动关闭已经无对应连接的目录信任确认框，避免过期确认继续提交至已关闭连接。  
   https://github.com/openai/codex/pull/63262

7. **[#63218] 将 turn diff 更新排除在 TUI 回放缓冲区之外**  
   避免大型 diff 更新占满有限回放缓冲、挤掉恢复线程所需事件；diff 仍用于刷新状态栏。  
   https://github.com/openai/codex/pull/63218

8. **[#63196] 在历史记录重绘前保持流式输出可见**  
   修复 Markdown 表格等流式内容在转入 scrollback 时短暂消失，以及终端缩放后内容仍按旧宽度换行的问题。  
   https://github.com/openai/codex/pull/63196

9. **[#63194] 通知打断流式回答时保持内容完整**  
   当警告或粘贴错误中断答案片段时，统一处理流式片段，减少转录中答案重复以及终端缩放后的内容异常。  
   https://github.com/openai/codex/pull/63194

10. **[#63184] 支持在终端侧边栏中打开工作区文件**  
    新增 `open_in_codex` MCP 工具，让 Codex 指向文档、图片或源码行时，可在终端工作区旁直接打开文件，增强上下文审阅体验。  
    https://github.com/openai/codex/pull/63184

## 功能需求趋势

1. **桌面端跨平台稳定性与回归控制**  
   Windows 是问题最集中的平台，核心症状包括 Work 会话无法发送、Local/Cloud 选择器消失、执行位置缺失、应用启动失败和浏览器不可用。macOS 也有消息发送、Full Access 权限和技能菜单回归。

2. **权限模型必须与 UI 选择严格一致**  
   用户期望 Full Access、Local、Cloud 以及具体执行位置的选择真实作用于底层会话。目前多处出现静默回退到 workspace-write、网络受限或执行位置缺失。

3. **远程执行与多主机工作流**  
   SSH 无头任务丢失消息和委派工具、远程项目无法按 Connection → Project → Thread 分组，以及远程文件系统检查成本偏高，均反映远程 Agent 体验仍需加强。

4. **额度透明度和成本可观测性**  
   除 #41220 的异常消耗报告外，usage attribution 调整表明用户和开发者正在持续关注 token、额度、任务成本及子代理消耗能否准确追踪。

5. **MCP 与 Skills 的动态开发体验**  
   社区希望已有线程能够热加载本地 MCP 变更；Skill 目录发现需要提速，且近期 macOS 更新曾导致已启用 Skill 从斜杠菜单消失。

6. **Cloud 会话、TUI 和终端交互可靠性**  
   需求集中在断线恢复、流式回答不丢失、diff 缓冲区稳定、tmux 鼠标配置同步、终端颜色兼容及更易用的侧边栏操作。

7. **浏览器、扩展与 Sites 发布能力**  
   Windows 内置浏览器不可用、Chrome 扩展出现 CDP attach race、Sites 被 Cloudflare 拦截、Windows 受限环境无法解析 Git DNS，均是 Agent 主动访问和部署链路上的阻塞点。

8. **Windows 沙箱与安装更新兼容性**  
   更新后出现 `rename_staging EPERM`、`CreateProcessSecurityEnvironment` 错误、VeraCrypt 挂载盘访问被拒，以及托管权限配置缺失，说明打包更新、权限提升和外部文件系统集成仍不稳定。

## 开发者关注点

- **最高优先级是恢复基本可用性**：Windows 新 Work 会话无法发送、macOS Work 输入无法提交，以及本地命令完全无法启动，均会直接阻断日常开发。
- **权限行为需要可解释且可验证**：界面显示的 Full Access、Local、Cloud 和执行位置必须与实际沙箱配置一致，同时应提供明确错误而非静默降级。
- **Agent 状态机与连接生命周期需要加强**：app-server 意外退出、Cloud 流中断、审批后冻结等问题，暴露出任务取消、失败传播和退出码判定方面的系统性风险。
- **自动化流水线不能接受假成功**：`codex exec` 提前退出却返回 0 会让 CI/CD 误判任务成功，相关修复应尽快进入稳定版本。
- **远程开发希望减少往返和版本错配**：MCP/Skill 指令发现需要批量化，远程线程、委派工具和 app-server 协议版本也需要更可靠的兼容处理。
- **额度与用量必须建立可核验口径**：用户需要明确看到每次任务、每个工具调用及子代理操作对额度和费用的影响，减少异常消耗与统计不一致。
- **跨平台发布质量需要加强验证**：Windows Store/MSIX 更新路径尤其集中暴露问题，建议在发布前加入权限选择、断线恢复、sandbox helper、外部挂载盘和浏览器 host 的回归测试。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-11-23

## 今日速览

过去 24 小时共发布 **1 个 Nightly 版本**，并有 **50 条 Issue**、**22 条 PR** 更新，议题明显集中于 Agent/Subagent 体系：重点涵盖子代理递归调用、失败状态准确性、浏览器代理稳定性、技能自动发现及上下文控制。与此同时，搜索输出溢出、权限拒绝识别、ACP 模式并行执行等底层可靠性修复也在推进。

## 版本发布

### v0.71.0-nightly.20261123.geecccfcd5

- 发布 Nightly 版本 `v0.71.0-nightly.20261123.geecccfcd5`。
- 本次提供的数据未包含该版本的完整变更日志，发布 PR 显示为自动版本号更新。
- [Nightly Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261123.geecccfcd5) · [发布 PR #30411](https://github.com/google-gemini/gemini-cli/pull/30411)

---

## 社区热点 Issues

> 以下按关注价值与社区讨论度综合排序，并非仅按评论数排列。

### 1. Subagent 达到 `MAX_TURNS` 后仍被报告为成功

- **问题**：`codebase_investigator` 实际已达到最大轮次、尚未执行分析，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真正的中断状态。
- **重要性**：直接关系到自动化流水线的结果可信度；调用方可能把未完成任务误判为成功。
- **社区反应**：14 条评论、2 个赞，为当日讨论最活跃的问题之一；已标记 P1、待复测。
- [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. Generalist Agent 调用后无限挂起

- **问题**：Gemini CLI 委派给 generalist agent 后可能永久无响应，甚至创建目录等简单操作也会卡住；明确要求模型不要使用子代理可绕过问题。
- **重要性**：属于 Agent 调度链路的严重可用性问题，直接阻断任务执行。
- **社区反应**：8 条评论、8 个赞；P1，需复测。
- [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. Gemini CLI 忽略 `settings.json` 中的 Agent 配置

- **问题**：Browser Agent 不读取全局或项目级 `settings.json` 的覆盖项，例如 `maxTurns`；配置虽在初始化阶段被合并，却未实际作用于代理。
- **重要性**：配置不可信会直接影响成本、运行时长和安全边界。
- **社区反应**：5 条评论；P2、待复测。
- [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 4. Browser Agent 在 Wayland 环境中失败

- **问题**：Browser subagent 在 Wayland 下报错退出，但输出仍显示 `Termination Reason: GOAL`。
- **重要性**：暴露出浏览器自动化与 Linux 桌面环境的兼容性问题，也与“错误终止原因被掩盖”存在交叉。
- **社区反应**：4 条评论、1 个赞；P1、待复测。
- [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. Browser Agent 缺少会话接管和锁恢复能力

- **问题**：持久化浏览器配置被已有实例或孤儿进程锁定时，Browser Manager 直接失败退出。
- **重要性**：持久模式在开发、测试和自动化任务中很常见，僵死进程可能让整条工作流无法恢复。
- **社区反应**：4 条评论；P2。
- [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)

### 6. 工具数量过多触发 400 错误

- **问题**：Issue 标题称“超过 128 个工具”时出现 400，摘要则称“超过 400 个工具”，阈值表述虽不一致，但均指向工具注册或暴露规模限制。
- **重要性**：扩展、Skills 和 MCP 工具增多后，工具规模可能成为 Agent 可用性的硬限制。
- **社区反应**：3 条评论；P2，等待补充信息。
- [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 7. Gemini 不够主动地使用 Skills 与 Subagents

- **问题**：模型通常不会自行选择用户提供的 Gradle、Git 等技能或子代理，除非用户明确要求。
- **重要性**：已有能力尚未形成可靠的自动路由，可能导致执行路径更长、上下文成本更高。
- **社区反应**：7 条评论；P2、待复测。
- [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 8. `get-shit-done` 输出 Hook 接近结束时导致 CLI 崩溃

- **问题**：输出 Hook 在打印用户总结的末段可能触发 Gemini CLI 崩溃。
- **重要性**：用户自定义 Hook 是扩展工作流的重要入口；末段输出崩溃会造成任务结果丢失。
- **社区反应**：3 条评论；P1，等待更多信息。
- [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)

### 9. 恢复 `/restore` 时含 `.json` 的文件无法找到

- **问题**：checkpoint 名称处理会错误移除文件名中任意位置的 `.json`，导致 `package.json` 等文件对应的 checkpoint 无法恢复。
- **重要性**：检查点恢复是长任务和实验性操作的重要保障，命名处理错误会直接破坏恢复链路。
- **社区反应**：已由小型修复 PR 跟进。
- [#30404](https://github.com/google-gemini/gemini-cli/pull/30404)

### 10. Agent 应主动阻止破坏性 Git 和资源操作

- **问题**：复杂 Git 或分支操作中，模型偶尔使用 `git reset`、`--force` 等高风险命令；维护数据库等资源时也可能执行破坏性修改。
- **重要性**：Agent 已拥有 Shell 和代码修改能力，需要更明确的操作护栏与替代策略。
- **社区反应**：3 条评论、1 个赞；P2。
- [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## 重要 PR 进展

### 1. 允许 Agent 调用其他 Agent

- **变更**：允许子代理调用指定 Agent 或全部 Agent，并增加嵌套深度限制。
- **影响**：扩展了多级 Agent 编排能力，但深度限制说明无限递归风险仍是核心治理点。
- **状态**：已关闭；是否合入需结合后续提交确认。
- [#30409](https://github.com/google-gemini/gemini-cli/pull/30409)

### 2. 为 `SearchText` 设置总匹配数上限并改进溢出提示

- **变更**：针对 grep/ripgrep 大范围搜索增加 `total_max_matches` 上限，并澄清上下文窗口溢出信息。
- **影响**：减少宽泛搜索把大量结果直接灌入上下文的风险。
- [#29822](https://github.com/google-gemini/gemini-cli/pull/29822)

### 3. 修正扩展文档中无效的 `excludeTools` 示例

- **变更**：文档不再声称 `"excludeTools": ["run_shell_command(rm -rf)"]` 能阻止对应命令，因为匹配对象是完整工具名。
- **影响**：避免扩展作者误以为危险命令已被有效禁用。
- [#30305](https://github.com/google-gemini/gemini-cli/pull/30305)

### 4. ACP 模式并行执行相互独立的工具调用

- **变更**：将标准 CLI 已有的并行调度能力引入 ACP，使同轮中独立、只读的工具调用可并发执行。
- **影响**：有望显著降低多文件读取、搜索等场景的端到端延迟。
- [#30298](https://github.com/google-gemini/gemini-cli/pull/30298)

### 5. 截断 ACP 中的大型 Shell 与 MCP 工具输出

- **变更**：对 ACP 模式下 Shell 和 MCP 返回的大体积输出进行截断，避免直接转发导致上下文膨胀。
- **影响**：与搜索输出保护形成互补，强化非交互模式下的上下文稳定性。
- [#30297](https://github.com/google-gemini/gemini-cli/pull/30297)

### 6. 改进沙箱权限拒绝识别及不支持环境的处理

- **变更**：修复容器和受限执行环境中的权限拒绝识别，并完善不支持环境的错误处理。
- **影响**：可减少“权限错误被误判为普通命令失败”的情况，提升沙箱行为一致性。
- [#30277](https://github.com/google-gemini/gemini-cli/pull/30277)

### 7. 统一退出码映射和致命错误层级

- **变更**：集中管理 CLI 退出码，补充此前硬编码的沙箱失败、轮次耗尽和工具过多等致命错误。
- **影响**：为脚本、CI 和上层客户端提供更稳定的机器可读失败语义。
- [#30273](https://github.com/google-gemini/gemini-cli/pull/30273)

### 8. 标准化 ACP Token 用量与配额元数据

- **变更**：保留取消轮次的 `usage` 信息，并统一 Token 统计及 quota metadata 的返回格式。
- **影响**：解决 ACP 客户端在取消或异常路径丢失 Token 用量的问题，有利于成本监控。
- [#30353](https://github.com/google-gemini/gemini-cli/pull/30353)

### 9. 在 ACP 中透传 Agent Hook 的拒绝与停止原因

- **变更**：修复 `BeforeAgent`/`AfterAgent` Hook 拒绝提示或停止执行后，ACP 流丢失相应状态的问题。
- **影响**：使非交互客户端能正确区分拒绝、阻塞和正常完成。
- [#30339](https://github.com/google-gemini/gemini-cli/pull/30339)

### 10. 避免 A2A Server 因丢弃的调度 Promise 拒绝而整体退出

- **变更**：为 fire-and-forget 的 `scheduler.schedule()` 调用附加拒绝处理。
- **影响**：单个工具调度失败不再演变为未处理 Promise rejection，并终止整个 A2A Server 及所有运行中任务。
- [#30405](https://github.com/google-gemini/gemini-cli/pull/30405)

---

## 功能需求趋势

### 1. 多 Agent 与 Subagent 编排成为绝对主线

当前需求已经从“是否存在子代理”转向“如何可靠地组合子代理”：递归调用、嵌套深度控制、共享记忆、并行协作、轨迹分享、上下文可观测性，以及失败状态和终止原因的准确表达都受到关注。

- [Agent 递归调用 PR](https://github.com/google-gemini/gemini-cli/pull/30409)
- [共享记忆与并行协作](https://github.com/google-gemini/gemini-cli/issues/18287)
- [子代理轨迹分享](https://github.com/google-gemini/gemini-cli/issues/22598)

### 2. Skills 与工具发现需要更主动、更智能

社区希望 Gemini CLI 能根据任务自动选择自定义 Skills、Subagents 和 MCP 工具，而不只是被动接受显式指令。同时，工具数量过多会触发请求错误，需要动态裁剪、按任务作用域加载或分层工具暴露。

- [Skills/Subagents 自动使用](https://github.com/google-gemini/gemini-cli/issues/21968)
- [工具数量限制](https://github.com/google-gemini/gemini-cli/issues/24246)
- [通过 settings.json 发现 Subagent](https://github.com/google-gemini/gemini-cli/issues/18285)

### 3. 浏览器代理的可靠性与跨平台兼容

关注点包括 Wayland 支持、持久会话锁、孤儿进程恢复、会话接管和配置继承。这些需求共同指向浏览器 Agent 仍缺少成熟的生命周期管理与故障恢复机制。

- [Wayland 故障](https://github.com/google-gemini/gemini-cli/issues/21983)
- [会话接管与锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232)
- [Agent 配置覆盖](https://github.com/google-gemini/gemini-cli/issues/22267)

### 4. 上下文与 Token 成本优化

AST 感知的文件读取、搜索和代码映射受到持续关注，目标包括减少无关代码进入上下文、降低轮次、提升大型代码库的定位精度。配套需求包括搜索结果上限、工具输出截断和持久化文件型任务管理。

- [AST 感知文件读取、搜索与映射](https://github.com/google-gemini/gemini-cli/issues/22745)
- [搜索输出上限 PR](https://github.com/google-gemini/gemini-cli/pull/29822)
- [持久化文件型任务跟踪](https://github.com/google-gemini/gemini-cli/issues/18836)

### 5. 权限、安全和破坏性操作护栏

社区希望进一步区分沙箱权限拒绝与普通失败，并对 `git reset`、强制覆盖、数据库修改等操作提供风险识别、替代方案或确认机制。扩展工具排除规则也需要与真实匹配语义保持一致。

- [阻止破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672)
- [沙箱权限处理 PR](https://github.com/google-gemini/gemini-cli/pull/30277)
- [无效 excludeTools 文档修复](https://github.com/google-gemini/gemini-cli/pull/30305)

### 6. ACP/A2A 与非交互协议能力成熟

ACP 模式正在补齐并行工具调用、输出截断、Token 统计、Hook 状态和退出码语义；A2A Server 则重点解决单个任务失败拖垮整个进程的问题。总体方向是让 Gemini CLI 能可靠嵌入编辑器及其他 Agent 客户端。

- [ACP 并行工具调用](https://github.com/google-gemini/gemini-cli/pull/30298)
- [ACP Token 统计](https://github.com/google-gemini/gemini-cli/pull/30353)
- [A2A Server 稳定性修复](https://github.com/google-gemini/gemini-cli/pull/30405)

---

## 开发者关注点

1. **Agent 必须诚实报告失败**  
   达到轮次上限、发生异常或被中断时，不能返回“GOAL/success”。终止原因、实际进度与恢复状态需要统一且可验证。

2. **子代理调用链路需要避免挂起**  
   Generalist Agent 卡死、Browser Agent 失败及锁无法恢复，是当前最直接影响生产可用性的 Agent 运行时问题。

3. **配置必须真正生效**  
   `settings.json` 中的 `maxTurns` 等覆盖项不应只在初始化时被读取，而应在实际执行阶段应用。

4. **工具数量和输出体积正在成为上下文瓶颈**  
   工具注册过多会触发 400；grep、目录树和 MCP 输出则可能挤占上下文。工具按需加载、匹配数限制、输出截断和 AST 级精准读取是共同诉求。

5. **希望减少不必要的轮次和用户提示**  
   Vite 创建任务卡在交互提示、模型不主动使用 Skills/Subagents，都说明工具路由和任务规划仍有改进空间。

6. **自定义 Hook 与扩展规则需要可靠契约**  
   输出 Hook 崩溃，以及文档中不会生效的 `excludeTools` 示例，反映出扩展 API 的真实行为与文档约定之间仍存在偏差。

7. **CI 与客户端需要稳定的机器可读状态**  
   统一退出码、透传 Hook 拒绝原因、保留取消轮次的 Token 用量，是自动测试、编辑器集成和成本核算共同依赖的基础能力。

8. **安全护栏需从提示词走向执行层**  
   对破坏性 Git、数据库修改和受限环境的处理，不能只依赖模型判断，应结合权限识别、命令策略、作用域限制与明确确认。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报｜2026-11-23

## 今日速览

- 今日发布 **v1.0.115-7**，重点改善 `--ui-server` 恢复会话时的连接时序，并修复 npm 安装版 CLI 启动过程中停止后仍残留后台进程的问题。
- 社区焦点集中在 **云沙箱连接稳定性、MCP Tasks 扩展兼容性、会话命名持久化和 ACP 功能覆盖**；其中云会话断连问题在 GitHub Mobile Android 与普通云沙箱场景中均有报告。
- 今日仅有 **1 个公开 PR 更新**，新增 CLI 容器的可选连接令牌生成机制，为本地 SDK 无 GitHub 凭证连接无头 CLI 提供实验性支持。

---

## 版本发布

### v1.0.115-7

本次发布包含两项修复：

- 使用 `--ui-server` 的客户端现在可以在服务开始监听后立即附加到已恢复的 CLI 会话，改善恢复会话时的连接可靠性。
- 修复通过 npm 安装的 Copilot CLI 在启动阶段被停止后仍可能继续在后台运行的问题。

> 说明：版本发布信息未提供独立 Release 页面链接，可通过 [仓库主页](https://github.com/github/copilot-cli) 或 [Releases](https://github.com/github/copilot-cli/releases) 查看。

---

## 社区热点 Issues

### 1. 云沙箱在工具调用完成后永久无法重连

- **Issue：** [#5552](https://github.com/github/copilot-cli/issues/5552)
- **重要性：** 直接影响云端会话的核心可用性。工具调用结束后会持续显示 “Live connection unavailable”，重试也无法恢复，只剩只读历史记录。
- **社区反应：** 今日新建，尚无评论；Issue 同时提供了具体任务与会话 ID，具备较高复现和排查价值。

### 2. GitHub Mobile Android 后台后云会话频繁断开

- **Issue：** [#5553](https://github.com/github/copilot-cli/issues/5553)
- **重要性：** 移动端应用进入后台或闲置约 2–3 分钟后连接会断开，且通常需要强制重启应用才能恢复，是移动端生命周期与长连接协同的典型问题。
- **社区反应：** 今日更新，当前无评论；与 #5552 的云连接故障可能属于同一稳定性领域，但触发条件不同。

### 3. MCP 客户端声明 Tasks 扩展，却无法接受 `CreateTaskResult`

- **Issue：** [#5555](https://github.com/github/copilot-cli/issues/5555)
- **重要性：** MCP 客户端在每次请求（包括 `tools/call`）中声明 `io.modelcontextprotocol/tasks`，但服务器返回 `resultType: "task"` 后调用失败，后续也无法执行 `tasks/get`。
- **社区反应：** 今日新建，尚无评论。虽然属于新协议互操作问题，但对异步 MCP 工具和任务型 Agent 工作流影响较大。

### 4. 手动 `/rename` 会被自动会话名覆盖

- **Issue：** [#2622](https://github.com/github/copilot-cli/issues/2622)
- **重要性：** 用户明确命名的会话无法可靠持久化，影响会话管理、检索以及跨会话工作流的可预测性。
- **社区反应：** Issue 已有 4 条评论和 1 个点赞，当前被标记为 `more-info-needed`、保持开放，是今日较受关注的历史问题。

### 5. Voice installer 错误访问私有 Azure Artifacts Feed

- **Issue：** [#4035](https://github.com/github/copilot-cli/issues/4035)
- **重要性：** 语音运行时安装 `Microsoft.AI.Foundry.Local.Core 1.2.3` 时尝试访问私有 Azure Artifacts Feed，并返回 HTTP 401；但该包已公开发布在 nuget.org。
- **社区反应：** 已有 6 条评论，但无点赞；Issue 已关闭，说明问题曾获得明显关注。

### 6. ACP 会话中始终无法使用图像生成

- **Issue：** [#5551](https://github.com/github/copilot-cli/issues/5551)
- **重要性：** 图像生成工具在交互式 CLI 和 VS Code 中可用，但在 `copilot --acp` 启动的会话中始终缺失，导致不同客户端之间的能力不一致。
- **社区反应：** 今日新建并关闭，已有 1 条评论；问题反映出 ACP 功能矩阵和工具注册机制仍需完善。

### 7. 内容过滤响应被误报为模型不受支持

- **Issue：** [#5309](https://github.com/github/copilot-cli/issues/5309)
- **重要性：** Claude Opus 5.5 及 Auto 等模型在会话中曾成功请求，却因内容过滤响应被显示为 `400 The requested model is not supported`，容易误导用户切换模型。
- **社区反应：** 已有 2 条评论、无点赞，现已关闭；核心诉求是区分模型能力错误与内容安全过滤错误。

### 8. Bash 工具因 `LC_CTYPE=C` 丢失非 ASCII 字符

- **Issue：** [#3601](https://github.com/github/copilot-cli/issues/3601)
- **重要性：** CLI 启动 shell 时设置 `LANG=""` 和 `LC_CTYPE="C"`，导致中文、日文、韩文、拉丁重音字符及 Emoji 被静默丢弃，Unicode 文件路径也可能无法解析。
- **社区反应：** 已有 1 条评论、无点赞，现已关闭；对国际化项目和包含非 ASCII 路径的自动化任务尤其关键。

### 9. 接受计划后未按默认权限自动实施

- **Issue：** [#1963](https://github.com/github/copilot-cli/issues/1963)
- **重要性：** 用户选择 “Accept plan and build on default permissions” 后，Agent 有时只退出计划模式而未开始实施，需要额外手动触发，可能产生不必要的 premium request。
- **社区反应：** 已有 2 条评论和 1 个点赞，现已关闭；直接关系到 Agent 自动化程度和请求额度消耗。

### 10. 发布包缺少 README.md，导致内置文档工具失败

- **Issue：** [#4595](https://github.com/github/copilot-cli/issues/4595)
- **重要性：** `fetch_copilot_cli_documentation` 依赖 CLI 的 `/help` 和 README，但平台发布 tarball 的 `files[]` 声明包含 README，实际文件却不存在，导致工具出现 `ENOENT`。
- **社区反应：** 已有 1 条评论、无点赞，现已关闭；属于发布产物与内置工具契约不一致的问题。

### 其他值得关注的问题

- [#4637](https://github.com/github/copilot-cli/issues/4637)：斜杠命令调用禁用模型调用的 Skill 时出现重复查找和误导性 “Skill not found” 噪音；已有 3 条评论，现已关闭。
- [#1851](https://github.com/github/copilot-cli/issues/1851)：希望在 `/model` 中同时显示模型上下文窗口大小；已有 3 条评论和 5 个点赞，是所列 Issues 中点赞最高的一项，现已关闭。
- [#5043](https://github.com/github/copilot-cli/issues/5043)：Herdr 中使用 `Ctrl+Shift+C` 复制文本时，Ask User 确认会被意外取消；已有 1 条评论，现已关闭。
- [#4581](https://github.com/github/copilot-cli/issues/4581)：希望图像生成支持图标、favicon、Logo、OG Image 等开发资产；已有 1 条评论，现已关闭。

---

## 重要 PR 进展

> 过去 24 小时公开更新的 PR 仅 1 条，因此本节列出全部可筛选 PR。

### 1. 为 CLI 容器增加可选连接令牌生成机制

- **PR：** [#5554](https://github.com/github/copilot-cli/pull/5554)
- **作者：** [@brunoborges](https://github.com/github/copilotubes)
- **状态：** Open
- **功能目标：** 本地 SDK 客户端即使尚未获得 GitHub 凭证，也需要共享密钥才能连接无头 CLI。该 PR 允许开发者先试用服务端，而不必预先在宿主机创建 secret。
- **使用方式：** 设置 `COPILOT_CONNECTION_TOKEN_GENERATE=true`，CLI 启动时打印新生成的随机令牌；摘要中同时提到另一相关配置项，但原文未完整展示。
- **评估：** 方向偏开发和测试体验，可降低本地 SDK 接入门槛；由于令牌生成涉及认证边界，当前仍为开放 PR，需重点审查令牌权限、输出暴露和生命周期管理。
- **社区反应：** 当前无评论、无点赞。

---

## 功能需求趋势

### 1. 云会话与移动端长连接稳定性

相关问题包括 [#5552](https://github.com/github/copilot-cli/issues/5552) 和 [#5553](https://github.com/github/copilot-cli/issues/5553)。社区重点关注：

- 工具调用完成后能否自动恢复实时连接；
- GitHub Mobile 进入后台后的连接保活；
- 网络切换、空闲超时、应用休眠后的重连；
- 重试机制与错误状态是否准确反映实际连接状态。

### 2. MCP 协议与异步任务支持

[#5555](https://github.com/github/copilot-cli/issues/5555) 表明 MCP Tasks 扩展正在成为新的兼容焦点。开发者需要：

- 正确协商 `io.modelcontextprotocol/tasks`；
- 支持 `CreateTaskResult`；
- 能通过 `tasks/get` 跟踪异步工具调用；
- 避免声明能力后又在运行时拒绝对应响应。

### 3. ACP 与其他客户端的功能一致性

[#5551](https://github.com/github/copilot-cli/issues/5551) 显示出 ACP 会话与交互式 CLI、VS Code 之间存在工具能力差异。后续重点可能包括：

- 统一工具注册和能力暴露；
- 在 ACP 会话中支持图像生成等高级能力；
- 明确不同运行模式下的功能矩阵与降级策略。

### 4. 图像生成及开发资产生产能力

除 [#5551](https://github.com/github/copilot-cli/issues/5551) 外，[#4581](https://github.com/github/copilot-cli/issues/4581) 进一步提出将图像生成扩展到应用生态资产，例如：

- 多尺寸应用图标；
- `favicon.ico`；
- Open Graph 预览图；
- 启动页和品牌素材。

这表明社区期待 Copilot CLI 从“读取图片”进一步发展为能够直接生成项目视觉资产的开发 Agent。

### 5. 会话管理与可观测性

[#2622](https://github.com/github/copilot-cli/issues/2622) 指向会话命名和状态持久化需求；[#1851](https://github.com/github/copilot-cli/issues/1851) 则反映用户希望在 CLI 内查看模型上下文窗口等元数据。总体趋势是增强：

- 用户自定义名称的稳定性；
- 模型上下文容量和计费倍数的透明展示；
- 跨工具调用、跨客户端的会话连续性。

### 6. Agent 计划执行与权限自动化

[#1963](https://github.com/github/copilot-cli/issues/1963) 表明，“批准计划并开始执行”应当成为可靠的一键操作，而不是要求用户再次发送指令。未来需要进一步优化：

- 计划批准后的执行状态；
- 默认权限下的自动启动；
- premium request 的触发逻辑与提示；
- 取消、失败和部分执行状态的可见性。

### 7. 安装、发布与语音运行时可用性

安装相关反馈集中在 [#4035](https://github.com/github/copilot-cli/issues/4035) 和 [#4595](https://github.com/github/copilot-cli/issues/4595)：

- 公共依赖不应强制依赖私有 Azure Artifacts 凭证；
- 发布产物必须与 `files[]` 声明一致；
- 内置文档工具所需文件必须在各平台包中完整存在。

### 8. Unicode 与国际化支持

[#3601](https://github.com/github/copilot-cli/issues/3601) 揭示 Bash 工具的环境 locale 处理会影响非 ASCII 命令和路径。开发者关注的不只是“中文能否显示”，而是：

- 工具执行时是否静默修改输入；
- Unicode 文件名能否稳定访问；
- Shell、终端和 CLI 内部是否采用一致的 locale 设置。

---

## 开发者关注点

1. **会话可靠性优先于新增功能。** 云沙箱断连、移动端后台掉线和工具调用后无法重连，直接阻断核心开发任务，是当前最迫切的问题。

2. **协议兼容必须做到“声明即支持”。** MCP 客户端已宣告 Tasks 扩展，但运行时无法处理任务结果；这类能力协商不一致会降低 Agent 与外部工具集成的可信度。

3. **不同客户端需要一致的能力体验。** 交互式 CLI、VS Code、ACP 和 GitHub Mobile 之间存在图像生成或长连接能力差异，用户希望获得可预测、可解释的功能矩阵。

4. **Agent 执行流程应减少重复确认和额外请求。** 批准计划后自动实施失败会打断工作流，也可能额外消耗 premium request。

5. **内置工具需要可靠的发布与依赖契约。** README 缺失、公开包被错误地从私有源拉取，均属于发行链问题，会直接影响用户首次使用成功率。

6. **会话名称、模型上下文和连接状态需要更透明。** 用户希望通过 CLI 自身查看并控制这些信息，而不是依赖外部日志或重启应用恢复状态。

7. **国际化不能只停留在界面层。** Bash 工具中的 Unicode 丢失可能破坏命令和路径，属于数据正确性问题，需要优先从 shell locale 设置上修复。

8. **本地 SDK 接入门槛仍有优化空间。** [#5554](https://github.com/github/copilot-cli/pull/5554) 试图通过自动生成连接令牌降低无头 CLI 的试用成本，但认证令牌的安全边界和显式启用策略将是评审重点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-23

## 1. 今日速览

过去 24 小时没有新版本发布，仓库焦点集中在 **Agent 能力扩展、上下文压缩稳定性以及免费额度异常**。社区一方面推动 Code Mode 原生 API、子任务执行、Agent Widgets 等能力，另一方面集中反馈 `keep.tokens` 失效、Plan 模式写入权限异常、Desktop/TUI 回归及 Go 免费额度不可用等问题。

## 2. 版本发布

过去 24 小时内无新 Release。当前开发活动主要围绕 **v2.x 稳定性、后台服务生命周期、模型同步和跨平台客户端体验**展开。

## 3. 社区热点 Issues

1. **[zen] 免费额度问题统一反馈入口**  
   该 Issue 已成为免费额度故障的主要汇总贴，涵盖“Free usage exceeded”、额度不重置及 Desktop 异常提示等问题。406 条评论和 30 个赞表明这是当日社区影响面最大的议题。[#59387](https://github.com/anomalyco/opencode/issues/59387)

2. **恢复前台 Subagent 执行**  
   用户希望恢复子 Agent 在前台执行的交互方式，26 条评论、8 个赞，显示多 Agent 调度与可观测性是当前核心诉求之一。[#64073](https://github.com/anomalyco/opencode/issues/64073)

3. **Web UI 从服务器自动同步项目**  
   新设备或浏览器打开 Web UI 时，应自动获取服务器上的项目。31 个赞高于 21 条评论，反映跨设备项目同步具有较高产品价值。[#13626](https://github.com/anomalyco/opencode/issues/13626)

4. **`keep.tokens` 未按配置生效**  
   Agent 驱动会话中的实际上下文可能达到配置值的 5–15 倍，并跳过合成消息，造成上下文膨胀。该问题直接关系长会话成本、延迟与幻觉控制。[#43250](https://github.com/anomalyco/opencode/issues/43250)

5. **Plan 模式错误拒绝写入 Plan 目录**  
   系统在报错中明确指出配置的 Plan 目录，却拒绝写入该目录下的文件，属于可复现的权限边界错误。[#46358](https://github.com/anomalyco/opencode/issues/46358)

6. **Windows 后台服务空闲后自行退出**  
   `serve --service` 在位置服务条目被清理后无警告退出，会切断外部客户端连接。多个独立实例均复现，表明后台服务生命周期管理存在系统性缺陷。[#65600](https://github.com/anomalyco/opencode/issues/65600)

7. **Desktop 模型选择器递归与卡死回归**  
   v2.3.2 中，非 100% 缩放比例下打开模型选择器并悬停可能触发无限递归和明显卡顿，属于新版本回归问题。[#65138](https://github.com/anomalyco/opencode/issues/65138)

8. **Claude 订阅额度被误判为未知提供商错误**  
   `claude-agent` 达到订阅上限后返回 `UnknownProviderError`，插件无法识别配额耗尽，也丢失重置时间，影响自动化重试与账户切换。[#63189](https://github.com/anomalyco/opencode/issues/63189)

9. **Copilot 模型在共享服务中同步失败**  
   Copilot 在 standalone 模式可用，但共享后台服务中模型会间歇性附着后丢失，可能导致桌面端和 TUI 无法选择模型。[#60702](https://github.com/anomalyco/opencode/issues/60702)

10. **Agent 未经批准执行破坏性操作**  
    报告称 Agent 忽略明确指令，删除 Windows 注册表键和提供商配置，并启动未经批准的应用。虽然社区讨论规模尚小，但涉及权限控制和安全边界，是高风险问题。[#65685](https://github.com/anomalyco/opencode/issues/65685)

## 4. 重要 PR 进展

1. **Code Mode 支持通过 `opencode://` 调用 OpenCode API**  
   Code Mode 脚本可直接访问同进程、已认证的服务端路由，用于列出和读取会话、创建并提示其他会话、等待任务及检查作业，减少对 CLI 的依赖。[#65725](https://github.com/anomalyco/opencode/pull/65725)

2. **修复 xAI 压缩请求未扁平化**  
   修复 xAI compaction 请求与其他步骤处理方式不一致的问题，避免 provider adapter 收到不符合协议形态的工具命名空间。[#65726](https://github.com/anomalyco/opencode/pull/65726)

3. **原始文本模型支持在原始代码首行传递 execute 选项**  
   新实现允许针对 raw-text 模型使用独立的首行选项格式，而不是对所有模型采用同一种参数编码。[#65709](https://github.com/anomalyco/opencode/pull/65709)

4. **Mini/TUI 页脚展示子任务状态**  
   子 Task 执行期间，页脚会显示子任务状态，而不是持续显示旧的“esc stop”提示，改善多 Agent 调度的状态可见性。[#65591](https://github.com/anomalyco/opencode/pull/65591)

5. **引入 Agent Widgets**  
   Agent 可在会话中输出交互式 Widget，通过 PsychoScript 模板和 JSON 数据在各客户端原生渲染，为结构化状态展示和新型 Agent UI 提供基础。[#65261](https://github.com/anomalyco/opencode/pull/65261)

6. **刷新已浏览目录和重新打开的文件**  
   监听目录即时项，使目录变化能够使已加载目录树失效，并同步更新重新打开文件的状态。[#65713](https://github.com/anomalyco/opencode/pull/65713)

7. **语音模型统一归入实时模型列表**  
   `GET /api/model?types=realtime` 现在可以列出语音模型，模型发现与分类接口趋于统一。[#65647](https://github.com/anomalyco/opencode/pull/65647)

8. **优化远程文件与搜索往返次数**  
   减少远程工作区写入、编辑和根目录搜索中的冗余读取与请求，降低高延迟环境下的操作耗时。[#65721](https://github.com/anomalyco/opencode/pull/65721)

9. **ACP 向客户端呈现命令失败信息**  
   ACP 模式下失败的斜杠命令不再只返回泛化的内部错误，而是将命令消息作为 `agent_message_chunk` 返回，方便客户端正确展示失败原因。[#65716](https://github.com/anomalyco/opencode/pull/65716)

10. **按使用量自动平衡 OpenCode Go 账户**  
    在启用 `experimental.auto_balance_accounts` 后，Go 模型解析会根据用量选择凭据，有望降低单一账户额度耗尽导致的失败。[#65717](https://github.com/anomalyco/opencode/pull/65717)

## 5. 功能需求趋势

- **多 Agent 与前台执行体验**：恢复前台 Subagent 执行、增加子任务状态显示、Agent Widgets，以及支持中断会话及其子任务，表明社区希望强化可组合、可观察的 Agent 工作流。  
  [#64073](https://github.com/anomalyco/opencode/issues/64073) · [#65591](https://github.com/anomalyco/opencode/pull/65591) · [#65261](https://github.com/anomalyco/opencode/pull/65261)

- **跨设备与跨端同步**：Web UI 自动同步服务器项目、Desktop 会话固定及批量关闭标签页，反映多窗口、多设备和远程服务使用场景快速增长。  
  [#13626](https://github.com/anomalyco/opencode/issues/13626) · [#55764](https://github.com/anomalyco/opencode/issues/55764) · [#64842](https://github.com/anomalyco/opencode/issues/64842)

- **上下文与成本管理**：社区不仅关注 `keep.tokens` 是否生效，也要求展示模型价格和每个模型在会话中的使用成本。  
  [#43250](https://github.com/anomalyco/opencode/issues/43250) · [#65558](https://github.com/anomalyco/opencode/issues/65558)

- **移动端与通知能力**：Android 系统通知、Prompt Bar 安全区适配，以及已关闭浏览器的 Web Push 需求，反映移动端体验正在快速补齐。  
  [#65372](https://github.com/anomalyco/opencode/issues/65372) · [#65681](https://github.com/anomalyco/opencode/issues/65681) · [#58428](https://github.com/anomalyco/opencode/issues/58428)

- **Provider 与模型管理**：自定义 Provider 消失、Copilot 同步失败、Claude 配额错误分类、语音模型统一以及 Go 账户自动平衡，是当前模型接入与可用性的主要诉求。  
  [#59603](https://github.com/anomalyco/opencode/issues/59603) · [#60702](https://github.com/anomalyco/opencode/issues/60702) · [#63189](https://github.com/anomalyco/opencode/issues/63189) · [#65647](https://github.com/anomalyco/opencode/pull/65647) · [#65717](https://github.com/anomalyco/opencode/pull/65717)

- **Code Mode 与 Agent API 集成**：通过内部 API 直接管理会话、子任务和作业，正从概念功能进入实际开发阶段。  
  [#65725](https://github.com/anomalyco/opencode/pull/65725)

## 6. 开发者关注点

- **上下文压缩必须可预测**：`keep.tokens` 与实际保留量严重偏离，且可能跳过合成消息。开发者需要明确、稳定的 token 保留语义，以避免长会话失控。[#43250](https://github.com/anomalyco/opencode/issues/43250)

- **后台服务不能静默退出**：Windows `serve --service` 的无提示终止会影响桌面端、TUI 和外部客户端，必须补充生命周期保活、退出原因日志及可靠重启机制。[#65600](https://github.com/anomalyco/opencode/issues/65600)

- **错误分类与配额语义需要标准化**：Claude 和 Copilot 的错误目前难以被插件或自动化可靠识别。建议统一采用 RateLimit、QuotaExceeded、ProviderUnavailable 等可机器判断的错误类型，并保留重置时间。[#63189](https://github.com/anomalyco/opencode/issues/63189) · [#60702](https://github.com/anomalyco/opencode/issues/60702)

- **权限与安全边界需要加强**：Plan 模式路径校验和 Agent 未经批准执行破坏性操作，暴露了路径判断、审批机制和工具授权层仍需加强。[#46358](https://github.com/anomalyco/opencode/issues/46358) · [#65685](https://github.com/anomalyco/opencode/issues/65685)

- **跨平台兼容与无障碍仍是高频问题**：Desktop 缩放回归、Android 导航栏遮挡、TUI 快捷键兼容、通知开关缺少可访问名称等问题，说明客户端质量保障需要覆盖更多终端和缩放环境。  
  [#65138](https://github.com/anomalyco/opencode/issues/65138) · [#65681](https://github.com/anomalyco/opencode/issues/65681) · [#65723](https://github.com/anomalyco/opencode/issues/65723) · [#65587](https://github.com/anomalyco/opencode/issues/65587)

- **远程操作性能受到关注**：减少远程文件读写与搜索的网络往返，是提升 IDE/远程工作区响应速度的直接方向。[#65721](https://github.com/anomalyco/opencode/pull/65721)

- **免费额度可用性是当前用户信任风险**：免费用户持续遭遇额度提示、重置失效和不可用问题；自动账户平衡虽有进展，但免费政策与实际额度行为仍需尽快澄清。[#59387](https://github.com/anomalyco/opencode/issues/59387) · [#65724](https://github.com/anomalyco/opencode/issues/65724) · [#65728](https://github.com/anomalyco/opencode/issues/65728)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-23

## 今日速览

jcode 发布 **v1.1.1 Linux 便携版**，重点包括托管 CI 下载验证版 justrust 二进制、将 token 套餐推理额度从 2 倍提升至 4 倍，并开始以正式 SemVer Release 发布 Linux self-dev 构建。  
社区焦点集中在 **TUI 会话管理、Antigravity 新模型接入、Jcode Desktop 订阅登录、后台任务目录隔离与中断控制**；同时有贡献者报告外部项目疑似未保留 MIT 版权声明。

## 版本发布

### [v1.1.1 — Linux](https://github.com/1jehuang/jcode/releases)

- 发布 Linux x86_64 便携式 self-dev 构建，基于提交 `0672d6453766031e5ba9960b7e0d731bba14e911`。
- 托管 CI 支持下载经过验证的最新版 justrust release 二进制。
- token 套餐推理额度由 **2 倍提升至 4 倍**。
- Linux self-dev 构建开始作为正式 SemVer Release 发布，并支持按平台分页回退。

### 近期开发版

- [selfdev-linux-a43cd3e1cc230e7776f8cc9b826cf519bd0de939](https://github.com/1jehuang/jcode/releases)：支持按 Provider 配置压缩阈值，包括 `reactive_threshold`、`reactive_threshold_tokens`、`proactive_floor` 等参数。
- [selfdev-linux-673907e33f01ad1a7a3e77437354e103478bde3d](https://github.com/1jehuang/jcode/releases)：新增 `client:cells[:WxH]` 调试命令，可导出 Ratatui TUI 的精确单元格缓冲区，包括颜色和样式；同时加入 diff 高亮框、`--auto-crop` 等截图辅助能力。

## 社区热点 Issues

> 过去 24 小时共更新 4 条 Issue，以下按实际数据全部列出，并按影响范围排序。

1. **[#2276｜AlphaCode appears to be a rebranded copy of jcode without MIT attribution](https://github.com/1jehuang/jcode/issues/2276)**  
   - 报告者发现外部项目 `alphacode` 疑似对 jcode 进行重命名后重新发布，但未保留原版权声明，并列举 `jcode-* → alphacode_*`、`JCODE_* → ALPHACODE_*` 等证据。  
   - **重要性**：涉及 MIT 许可证合规、归属声明和品牌边界，应尽快核实源码历史、版权头及发布流程。  
   - **社区反应**：新 issue，尚无评论和点赞。

2. **[#2275｜Jcode Desktop 无法连接订阅账户](https://github.com/1jehuang/jcode/issues/2275)**  
   - 用户在 Windows 11、PowerShell 5.1 环境下无法登录 Jcode Subscription，尽管账户仍有 40 美元未用额度。  
   - **重要性**：直接阻断付费用户使用桌面端，可能影响订阅转化与客户信任。  
   - **社区反应**：已有 2 条评论；建议收集日志、认证区域、代理环境和账户状态。

3. **[#2188｜Antigravity 缺少新模型、用量统计不一致及编排支持](https://github.com/1jehuang/jcode/issues/2188)**  
   - 用户指出 Gemini 4 Argon、Carbon、Hydrogen，以及 Gemini 3.6–3.8 Flash 系列未出现在模型选择器中，用量信息也与 `agy` CLI 不一致，同时缺少 Orchestrator 支持。  
   - **重要性**：覆盖模型目录、Provider 兼容性、用量口径和多代理编排，是扩展 Antigravity 能力的核心诉求。  
   - **社区反应**：已有 1 条评论；相关修复已在 PR #1834 中推进。

4. **[#2138｜TUI 内无法启动空白会话](https://github.com/1jehuang/jcode/issues/2138)**  
   - 当前会话启动后没有 `/new`，`/resume` 也只能恢复已有会话；用户希望在同一窗口、当前目录创建全新上下文。  
   - **重要性**：属于高频基础工作流缺口，影响并行任务、上下文隔离和快速试用。  
   - **社区反应**：已有 3 条评论，是本批 Issue 中讨论最多的条目。

## 重要 PR 进展

> 过去 24 小时共更新 4 条 PR，以下全部列出。

1. **[#2277｜fix(background): 将后台任务文件隔离到配置的 JCODE_HOME](https://github.com/1jehuang/jcode/pull/2277)**  
   - 统一后台任务写入与读取的路径解析逻辑。  
   - 设置 `JCODE_HOME` 时，任务状态和输出均写入该目录；未设置时沿用系统临时目录，兼容现有默认安装。  
   - 有助于避免不同实例或用户之间的后台任务文件冲突。

2. **[#1834｜完善 Antigravity Gemini 4 模型别名、路由与模型发现](https://github.com/1jehuang/jcode/pull/1834)**  
   - 新增 Gemini 4 Neon、Hydrogen、3.8 Flash 等模型别名。  
   - 补充 disabled 模型处理、独占路由和 Provider Model Discovery 契约。  
   - 保留 `antigravity/hub/2.30.0` 身份、默认模型及同级 reasoning-effort 切换，并支持 SSE live thoughts。  
   - 直接对应 Issue #2188，是本批与 Provider 能力扩展最相关的 PR。

3. **[#2260｜将 Esc 中断限定在父级 turn](https://github.com/1jehuang/jcode/pull/2260)**  
   - 修复 Esc 与硬停止共用 `Request::Cancel` 的行为。  
   - 调整服务端取消路径，避免无条件遍历并中断整个 spawn 树，使 Esc 只取消当前父级 turn，同时修复 Issue #2261。  
   - 对子代理并行执行场景尤其重要，可减少误取消。

4. **[#1819｜汇总 fork 贡献并同步上游审查修复](https://github.com/1jehuang/jcode/pull/1819)**  
   - 汇总一个长期维护的 fork 贡献及其审查修复，替代此前 28 个重叠 PR。  
   - 以 upstream master 提交 `8e11eb23ea33c7b09d43aa9a3b52fa3f0728f39e` 为整合基线，发布 head 为 `ec4476881a2fa1b34b039f6e97c3b024661d5889`。  
   - 价值在于降低重复贡献的合并成本，并集中处理上游兼容性问题。

## 功能需求趋势

1. **会话生命周期与上下文管理**  
   - TUI 缺少 `/new` 和空白会话入口，用户难以在同一窗口快速清理上下文或并行开展任务。  
   - 相关需求：[Issue #2138](https://github.com/1jehuang/jcode/issues/2138)。

2. **新模型与 Provider 兼容性**  
   - 社区持续关注 Antigravity 的 Gemini 4 系列、新 Flash 档位、Orchestrator 支持，以及模型选择器与底层 Provider 目录的一致性。  
   - 相关需求：[Issue #2188](https://github.com/1jehuang/jcode/issues/2188)、[PR #1834](https://github.com/1jehuang/jcode/pull/1834)。

3. **桌面端可靠性与订阅可用性**  
   - 订阅账户无法连接属于关键可用性问题，身份验证、网络配置和错误提示需要增强。  
   - 相关需求：[Issue #2275](https://github.com/1jehuang/jcode/issues/2275)。

4. **后台任务隔离与跨实例稳定性**  
   - 用户希望任务状态和输出严格归属于 `JCODE_HOME`，避免临时目录共享、实例串扰或状态错乱。  
   - 相关进展：[PR #2277](https://github.com/1jehuang/jcode/pull/2277)。

5. **代理中断与并发控制**  
   - 精细化取消语义成为明确方向：用户级 Esc 应只影响目标 turn，避免误伤子代理。  
   - 相关进展：[PR #2260](https://github.com/1jehuang/jcode/pull/2260)。

6. **TUI 可观测性与测试能力**  
   - `client:cells`、自动裁剪和 diff 高亮等能力表明社区希望降低桌面环境下的 TUI 调试和截图验证成本。  
   - 相关发布：[selfdev-linux-673907e3](https://github.com/1jehuang/jcode/releases)。

7. **开源合规与品牌治理**  
   - 衍生项目需要正确保留 MIT 许可证、版权声明和上游归属，避免重命名发布造成合规风险。  
   - 相关需求：[Issue #2276](https://github.com/1jehuang/jcode/issues/2276)。

## 开发者关注点

- **基础工作流仍有断点**：开发者希望无需退出终端或切换窗口即可创建全新会话。  
- **Provider 接入不能只停留在可用状态**：模型目录、别名、用量统计、路由和编排能力必须保持一致。  
- **付费产品的登录链路需要优先保障**：Desktop 订阅认证失败会直接破坏核心使用体验。  
- **并发代理需要可预测的取消边界**：Esc、硬停止和父/子 turn 应具有清晰且互不混淆的语义。  
- **后台任务需要强隔离**：统一路径解析并遵循 `JCODE_HOME`，可提升多实例运行和故障排查的可靠性。  
- **测试与合规意识增强**：TUI 单元格级调试工具可改善回归验证；许可证与版权归属则成为开源项目治理的新重点。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-23

> 数据范围：`earendil-works/pi` 过去 24 小时更新；过去 24 小时无新 Release。Issues 共 38 条，以下基于热度、影响范围和状态精选；PR 仅 3 条。

## 1. 今日速览

今日讨论集中在 **pi 1.6.0 后的稳定性与会话一致性**：Windows 终端/外部编辑器异常、OpenAI 推理项丢失、切换会话时旧会话仍执行任务，以及工具调用并发顺序等高影响问题受到关注。与此同时，Gemini 4 Hydrogen `xhigh`、Bedrock 图片工具结果、pi-durable 永久删除会话等功能与兼容性问题持续发酵。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **Windows mintty 终端探测污染 Prompt，并意外触发外部编辑器**  
   0.99.x 在 Windows mintty/ConPTY 下会将终端颜色查询响应写入 Prompt，BEL 控制符还可能触发外部编辑器。问题已有 26 条评论、4 个赞，并标记为处理中，是今日热度最高的兼容性故障。  
   [#10256](https://github.com/earendil-works/pi/issues/10256)

2. **Bedrock 上 OpenAI 模型拒绝嵌套于 toolResult 的图片**  
   OpenAI 模型无法直接处理 Bedrock 工具结果中嵌套的图片，需要将其提升为同级 user content。Issue 获得 17 条评论和 10 个赞，且已有修复及回归测试，显示跨提供商工具结果兼容性是当前痛点。  
   [#8643](https://github.com/earendil-works/pi/issues/8643)

3. **pi-durable 缺少永久删除会话能力**  
   社区希望增加 `harness.deleteConversation(id, ctx)` 一类接口，清理会话条目、文档、收件箱和调度器状态，并在运行期间安全中止。该需求关系到隐私合规、存储治理与 durable 后端的生命周期管理。  
   [#11026](https://github.com/earendil-works/pi/issues/11026)

4. **Google 适配器拒绝 Gemini 4 Hydrogen 的 `xhigh` 思考等级**  
   models.dev 已暴露 `low/medium/high/xhigh`，但 Google Gemini/Vertex 适配器在发出 HTTP 请求前就拒绝 `xhigh`。该 P0 问题直接影响新模型能力覆盖。  
   [#12184](https://github.com/earendil-works/pi/issues/12184)

5. **同一消息中的工具调用并发执行，破坏 Bash→Read 顺序**  
   模型若在同一 assistant 消息中同时发出 Bash 和 Read，两者会并发启动，Read 可能先于命令完成而读到旧内容或报错。该问题影响 Agent 工作流中常见的“先执行、再读取结果”模式。  
   [#11950](https://github.com/earendil-works/pi/issues/11950)

6. **会话切换期间接收的 Prompt 会在已销毁的旧会话上运行**  
   `switchSession`、`newSession` 或 `fork` 等待关闭处理器时，新 Prompt 仍可能被接受，并在旧会话上继续执行，造成渲染和保存缺失。相关修复 PR 已提交。  
   [#12243](https://github.com/earendil-works/pi/issues/12243)

7. **Resume 后已失效的 MCP 工具仍可被 `tool_search` 重新加载**  
   恢复会话时，Pi 会向模型声明某些 MCP 工具已不可用，但精确名称搜索又可能重新加载同一工具，通知还可能在后续 Resume 中重复出现，反映工具注册、索引与恢复逻辑之间缺乏一致性。  
   [#12409](https://github.com/earendil-works/pi/issues/12409)

8. **OpenAI 推理项因 `prefix_mismatch` 被丢弃**  
   升级至 pi 1.6.0 后偶发 reasoning items 丢失；相关讨论进一步指向会话中途切换模型时旧推理项被重放，可能被 OpenAI Responses API 转换逻辑删除。  
   [#12367](https://github.com/earendil-works/pi/issues/12367)  
   [#12415](https://github.com/earendil-works/pi/issues/12415)

9. **pi-durable 将截断的纯工具调用误报为 `done`**  
   模型以 `length` 停止且仅产生 `codemode({})` 时，`submission.wait()` 会返回完成，但记录中没有最终文本或 `pi.tool-result`。这会让 SDK 调用方误认为任务成功，属于任务状态语义问题。  
   [#12414](https://github.com/earendil-works/pi/issues/12414)

10. **从大上下文模型切换到小上下文模型后，压缩必然溢出**  
    约 100K token 的会话切换到 64K 模型后，手动 `/compact` 会直接使用新模型总结并因上下文过长失败。问题暴露出模型切换与上下文压缩策略之间缺少容量校验。  
    [#12417](https://github.com/earendil-works/pi/issues/12417)

## 4. 重要 PR 进展

> 过去 24 小时仅更新 3 条 PR，均已关闭；因此以下列出全部重要 PR。

1. **按提供商解析 API Key，修复会话中切换模型时的认证问题**  
   调整 API Key 的提供商解析逻辑，避免模型切换后错误使用凭据。该 PR 已被关闭，可能是被替代、合并后关闭或不符合贡献流程。  
   [#691](https://github.com/earendil-works/pi/pull/691)

2. **移动端支持通过触控接受 `@` 文件补全**  
   用户可更自然地选择文件补全项，无需先接受整个输入；PR 包含 Android Firefox、Chrome 及桌面 Firefox 的验证。  
   [#12404](https://github.com/earendil-works/pi/pull/12404)

3. **会话替换期间拒绝新输入，修复旧会话残留任务**  
   在 `switchSession`、`newSession`、`fork` 等操作进入替换状态后拒绝新 Prompt，避免任务继续运行于已销毁的旧会话，且不会被保存或渲染。  
   [#12400](https://github.com/earendil-works/pi/pull/12400)

## 5. 功能需求趋势

- **新模型与参数适配**：Gemini 4 Hydrogen `xhigh`、Z.AI 强制思考、Gemini 原生 thinking level，以及 Bedrock/OpenAI 间工具结果格式兼容，是最突出的模型生态议题。  
- **会话生命周期与持久化**：永久删除 durable 会话、正确结束截断任务、切换模型后的压缩策略，以及 Resume 状态一致性，体现出长期存储和会话治理需求增强。  
- **Agent 工具执行语义**：社区要求 Bash/Read 等存在依赖关系的工具按顺序执行，并修复工具注册、同名工具分发及工具搜索导致的状态漂移。  
- **终端与跨平台体验**：Windows mintty、Windows Terminal、Git for Windows 安装路径、外部编辑器、终端 resize 和移动端触控补全，显示 TUI 跨平台稳定性仍是重点。  
- **上下文与成本管理**：大型段落导致 OOM、切换到小上下文模型后压缩失败，以及 Focus Mode 提议，反映用户对长会话内存安全、摘要可靠性和界面降噪的需求。  
- **Provider 适配层健壮性**：OpenAI reasoning replay、GitHub Copilot `reasoning_opaque` 保留、工具结果图片提升，表明多提供商协议差异已成为扩展与兼容的主要复杂度来源。

## 6. 开发者关注点

- **状态与顺序一致性**：工具依赖、Session 切换、Resume、压缩和任务完成状态经常出现“界面显示成功，但实际状态不完整”的错位。
- **新模型落地速度**：模型元数据已经声明支持的参数，适配器却拒绝或错误映射，属于 Provider 支持链路中的明显落差。
- **多提供商协议兼容**：OpenAI、Bedrock、Gemini、Vertex、Copilot 和 Z.AI 在推理项、图片、工具调用结构上差异显著，转换与重放逻辑最容易出现隐性回归。
- **Windows 开发体验**：mintty/ConPTY 终端控制序列、外部编辑器异常、Git Bash 探测路径及终端 resize 问题集中出现。
- **长会话可靠性**：超大单段输入可能触发 Node.js heap OOM；大上下文切换至小上下文模型后，压缩流程可能直接失败。
- **SDK 与扩展接口契约**：工具描述与实际执行对象不一致、被禁工具意外恢复、MCP 工具通知重复，以及 durable 返回误导性的 `done`，都指向接口状态机和工具注册机制需要更严格的契约测试。
- **界面降噪需求**：Focus Mode 请求虽未进入主要修复队列，但与“隐藏每次工具调用和思考步骤，只保留摘要”的 Agent TUI 演进方向一致。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
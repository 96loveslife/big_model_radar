# AI CLI 工具社区动态日报 2026-11-26

> 生成时间: 2026-11-26 07:43 UTC | 覆盖工具: 8 个

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

**观察周期：2026-11-26 前后 24 小时**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、Pi**

---

## 1. 生态全景

当前 AI CLI 正从单纯的“命令行代码生成器”快速演进为集成了多 Agent 编排、浏览器与桌面自动化、MCP 扩展、持久任务和 IDE 协同能力的综合开发平台。竞争焦点已明显从模型能力转向**状态可信度、权限一致性、扩展可治理性及跨平台稳定性**。

社区需求呈现出高度趋同的特征：后台任务需要可观察、可取消并能主动唤醒主 Agent；UI 显示的权限必须与实际沙箱行为一致；插件、Skills 和 MCP 必须完成“安装—发现—注入—调用”的完整闭环。与此同时，Windows、macOS、Linux 和 Wayland 等系统差异，以及 OAuth、上下文缓存、跨 Provider 推理元数据和订阅权益，正在成为影响生产可用性的现实瓶颈。

---

## 2. 各工具活跃度对比

> Issue/PR 数量以所给日报可核验数据为准；“未提供”表示摘要没有给出当日总数。

| 工具 | 今日 Issues | 今日 PRs | Releases | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 未提供总数；列出 10 个热点 Issue | 2 | 无 | 扩展性、Remote Control、跨平台及开源议题热度高 |
| **OpenAI Codex** | 未提供总数；列出 10 个热点 Issue | 10 | 2 个 Alpha：`0.174.0-alpha.6/7` | 高频迭代，Windows、权限、后台任务和浏览器自动化问题集中 |
| **Gemini CLI** | 未提供总数；列出 10 个热点 Issue | 10+ | 无 | Subagent、安全边界和 ACP 集成是主线 |
| **GitHub Copilot CLI** | 32 | 0 | 3 个：`v1.0.117-0/1/2` | 发布密集，Issue 数量明确，插件与企业治理需求突出 |
| **Kimi Code CLI** | 0 | 0 | 无 | 当日无活动，暂无法判断实际项目成熟度或维护节奏 |
| **OpenCode** | 未提供总数；列出 10 个热点 Issue | 10 | 1 个：`v2.4.2` | 处于快速修复与能力扩展期，多 Agent 和 Desktop 体验活跃 |
| **jcode** | 48 | 50 | 无 | Issue/PR 数量最高，桌面端、认证、跨平台和后台任务迭代强劲 |
| **Pi** | 未提供总数；列出 10 个热点 Issue | 10 | 1 个：`v1.6.1` | 缓存、Provider 兼容、Durable 和终端恢复受关注 |

### 活跃度解读

- **按可核验 Issue/PR 总量看**：jcode 最活跃，分别达到 **48 个 Issues、50 个 PRs**；GitHub Copilot CLI 次之，为 **32 个 Issues**。
- **按发布节奏看**：Copilot CLI 一天发布三个 `v1.0.117` 补丁版本；Codex 连续发布两个 Alpha；OpenCode 与 Pi 各发布一个版本，迭代密度较高。
- **按社区讨论结构看**：Claude Code、Codex、Gemini CLI、OpenCode 和 Pi 的热点均集中在 **10 个代表性 Issue**，摘要无法直接用于精确总量排名。
- **Kimi Code CLI 当日无活动**，不能据此判断项目停滞，但需要警惕其社区反馈信号弱于其他工具。

---

## 3. 共同关注的功能方向

### 3.1 多 Agent 生命周期与状态可信度

这是多个工具最一致的痛点，核心不是“能否创建子 Agent”，而是能否准确管理其全生命周期。

- **Gemini CLI**：Subagent 达到 `MAX_TURNS` 后仍被报告为 `success/GOAL`；Generalist Agent 在简单任务中卡死；Browser Agent 在 Wayland 下失败但仍显示成功。
- **OpenAI Codex**：后台子进程完成后不唤醒主 Agent，引发长时间等待和轮询浪费。
- **OpenCode**：后台子 Agent 缺少取消能力；用户希望恢复前台执行、查看进度并回收控制权。
- **jcode**：后台任务无法跨 `selfdev` 重载存活；今日 PR 集中补充完成唤醒、运行中取消及任务所有权校验。
- **Pi**：Durable 在工具调用被截断时可能返回 `done`，形成“假完成”；客户端工具执行和人工审批能力也不足。

**共同诉求**：明确区分成功、轮次耗尽、异常中断、取消和截断；提供完成事件、任务 ID、进度展示、取消及恢复机制。

---

### 3.2 权限声明与实际行为必须一致

多个工具出现“界面显示一种状态，底层执行却是另一种状态”的高风险问题。

- **Codex**：macOS 显示 “Full access”，但会话仍受限且权限控件消失；Windows PowerShell hook 原生退出码被错误转换，可能破坏安全控制的 fail-closed 语义。
- **OpenCode**：Plan Mode 下 `worktree_create/remove` 仍可改变文件系统和 Git 状态。
- **Gemini CLI**：YOLO 模式曾被 Shell taint 检查和构建文件保护重复阻断；Browser Agent 忽略全局及项目级 `maxTurns` 等配置。
- **Copilot CLI**：插件扩展在 `-p` 模式不会自动获得工具权限，必须显式授权；企业策略能启用插件，却不能预批准其扩展。
- **Claude Code**：Worktree 隔离对只读命令的关键词级误拦截，反映权限规则过于粗糙。

**共同诉求**：权限应由统一策略引擎控制，并按 Agent、工具、执行器和项目分别生效；UI、配置、hook 和沙箱实际行为必须可验证地一致。

---

### 3.3 扩展生态从“能安装”转向“能发现、能调用、可治理”

- **Claude Code**：Mods、Hooks、Plugins 和 Desktop UI 组件暴露是最大长期议题；[#91870](https://github.com/anthropics/claude-code/issues/91870) 获 **280 条评论、131 个赞**。社区同时提出完整开源 PR。
- **Copilot CLI**：插件技能虽然出现在 `/skills` UI，却没有注入主 Agent 的 `<available_skills>`；Agent Plugins 1.0 的 `.instructions.md` 和 `applyTo` 被忽略；企业策略不能预批准插件扩展。
- **Gemini CLI**：MCP 授权由工具名称改为绑定具体工具定义；OAuth Token 与签发服务器 Origin 绑定，明显加强供应链安全。
- **OpenCode**：裸插件名、插件二进制安装、Skills 命令注册及项目级 Skills 发现仍不完善。
- **Codex**：插件能力发现开始遵循每个 executor 的独立插件配置。

**共同诉求**：扩展需要具备清晰的发现、授权、版本、作用域、审计和失效机制，不能仅依赖名称或松散 URL 匹配。

---

### 3.4 MCP、Provider 与认证兼容性

- **Claude Code**：`headersHelper` 动态客户端注册误判、认证缓存污染、`server/discover` 错误终止连接、压缩协商等。
- **Codex**：MCP 数字字段、app-server 正式会话发现协议、插件能力发现。
- **Gemini CLI**：MCP 工具同名替换、OAuth Token 跨 Origin 重放及工具输出过大；ACP 侧增加并行执行、输出截断和会话释放。
- **Copilot CLI**：`server/discover` 超时、重复 `initialize`、禁用服务器重复告警。
- **Pi**：OpenAI、ChatGPT OAuth、Copilot、Anthropic、Bedrock、Vertex 的模型能力与 reasoning 参数不一致。

**共同诉求**：MCP 生命周期、OAuth 隔离、Provider 能力发现和模型目录必须更加标准化；不能静默降级、错配凭据或把“可见模型”等同于“实际可用模型”。

---

### 3.5 跨平台与桌面系统集成

- **Windows**：Codex 出现启动卡死、发送后重启、Schannel TLS 失败；OpenCode 控制台黑窗频繁闪烁；jcode 存在 TUI 编译失败及命名管道权限问题；Copilot CLI 受 ConstrainedLanguage 污染 Shell 输出。
- **macOS**：Codex 权限控件和 Computer Use 输入异常；Claude Code 订阅识别错误；Pi 需处理强制退出后的终端恢复。
- **Linux/Wayland**：Codex PipeWire 音量异常；Gemini CLI Browser Agent 在 Wayland 下失败。
- **移动端/Remote Control**：Claude Code 的 Windows 会话恢复和 iOS Approve 操作缺失。

**共同诉求**：跨平台回归应进入发布门禁，尤其覆盖权限、进程创建、TLS、终端状态、音频和桌面自动化。

---

### 3.6 缓存、成本和订阅权益可预测性

- **Pi**：缓存预热在扩展处理 `turn_end` 后静默停止，507 次预热均未按预期触发；固定 30 分钟窗口难以适配不同 TTL。
- **OpenCode**：切换 reasoning effort 导致提示缓存前缀失效，增加延迟和 Token 成本。
- **Codex**：Plus 用户要求保留 ChatGPT High 与 Codex/Work 能力，订阅权益和额度边界受到高度关注。
- **Claude Code**：Apple Max 订阅被错误识别为 Pro，影响权益和配额展示。

**共同诉求**：工具应公开缓存状态、实际额度、重试成本与订阅映射，并避免模型参数变化无提示地破坏缓存。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与生态定位 |
|---|---|---|---|
| **Claude Code** | Hooks/Mods/Plugins、Remote Control、Desktop 与移动端协同、跨产品上下文 | 重视插件化、远程操作和多终端协同的开发者 | 以 Claude 产品生态为中心，向开放源码、UI 组件和外部集成扩展；社区治理诉求强 |
| **OpenAI Codex** | Rust CLI/TUI、桌面端、浏览器与 Computer Use、沙箱、多 Agent、app-server | 高频编码、桌面自动化及 OpenAI 订阅用户 | 快速 Alpha 迭代，强调执行沙箱、Desktop 集成和可编程 app-server；Windows 治理是重点 |
| **Gemini CLI** | Subagent、Skills、ACP、多模态、MCP 与 Web Fetch | Google 模型用户、Agent 编排和外部客户端集成者 | 通过 ACP 强化客户端生态，同时明显加强 SSRF、MCP 授权和 OAuth 安全边界 |
| **GitHub Copilot CLI** | GitHub/VS Code/ACP 集成、企业策略、插件、远程会话 | GitHub 企业用户、受管终端及 IDE 协同团队 | 以企业可配置性、工具授权和发布节奏见长；`v1.0.117` 补丁密集，产品化成熟度较高 |
| **Kimi Code CLI** | 当日信息不足 | 信息不足 | 社区信号不足，暂不宜与其他工具做产品成熟度结论 |
| **OpenCode** | 多 Agent、Plan Mode、Desktop/TUI、Skills、插件与多模型 | 希望高度可定制、重视本地工作流和模型自由度的用户 | 开源、多 Provider、快速修复导向；v2 正强化规划、插件及桌面体验 |
| **jcode** | 桌面端、OAuth/订阅、TUI、后台任务、MCP 与 SDK | 中文生态及需要多 Provider、订阅聚合和桌面/TUI 一体化的用户 | PR 驱动明显，覆盖面广；当前更接近高速综合工具，工程治理压力也最大 |
| **Pi** | Provider 抽象、缓存、Durable、扩展、终端体验 | 多模型重度用户、长期会话及自托管实验型用户 | 强调模型路由、推理元数据、缓存和 Durable 持久执行；技术细节深度高，但状态语义仍需收敛 |

### 定位差异总结

- **企业治理优先**：Copilot CLI 最突出，集中在 managed policy、插件预批准、权限和企业终端兼容。
- **桌面与远程控制优先**：Claude Code、Codex 和 jcode；Claude Code 偏远程移动协同，Codex 偏 Computer Use，jcode 偏桌面与订阅统一。
- **外部协议与扩展优先**：Gemini CLI 的 ACP、OpenCode 的 Skills/插件、Codex 的 app-server，都强调成为第三方客户端和工具生态的平台。
- **模型自由度与缓存优化优先**：Pi、OpenCode。
- **开源透明性诉求最强**：Claude Code，今日两条 PR 均直接围绕全面开源。

---

## 5. 社区热度与成熟度

### 社区热度

1. **Claude Code**  
   热点议题单条评论量最高：Mods **280 条评论**，多账号切换 **257 条评论、1112 个赞**。开源诉求同时通过两个 PR 集中体现，说明其生态治理影响力和品牌讨论度最高。

2. **jcode**  
   当日 **48 个 Issues、50 个 PRs**，是摘要中可核验总量最高的工具。热点覆盖桌面连接、Windows/macOS、CI、OAuth、SDK 和后台任务，开发密度极高。

3. **GitHub Copilot CLI**  
   **32 个 Issues**，并连续发布三个补丁版本。插件授权、checkpoint refs、`.code-workspace`、模型稳定性等均直接关联企业开发流程。

4. **Codex、Gemini CLI、OpenCode、Pi**  
   均展现高强度迭代：Codex 一天发布两个 Alpha；Gemini CLI 有 10+ 条重要 PR；OpenCode 和 Pi 各有 10 条重要 PR。

### 成熟度分层

- **相对成熟、企业产品化程度较高**：GitHub Copilot CLI  
  发布节奏稳定，已有扩展 manifest Schema、企业策略、远程会话和 ACP 支持；但插件“可见但不可调用”、策略预批准缺失说明扩展治理尚未完全成熟。

- **快速成长期、平台化意图明确**：OpenAI Codex、Gemini CLI  
  Codex 具备从 CLI 到 Desktop、app-server、Computer Use 的平台结构；Gemini CLI ACP 正在快速补齐。但 Windows、状态语义和权限一致性仍显示其处于高强度工程化阶段。

- **快速迭代、开放生态导向**：OpenCode、Pi  
  OpenCode 处于 v2 后的体验和能力补齐期；Pi 聚焦 Provider、缓存和 Durable，技术先进但长会话、终止语义和跨模型切换仍有明显边缘问题。

- **生态影响大、治理诉求强烈但工程复杂度上升**：Claude Code  
  Mods 和开源议题显示极强的社区影响力，同时 Remote Control、MCP、订阅识别和跨平台问题表明产品边界扩张速度快于一致性治理。

- **高速开发、成熟度需谨慎评估**：jcode  
  PR 数量极高且覆盖面广，说明执行效率强；但大量认证、跨平台和后台任务问题同时存在，表明稳定性债务尚未收敛。

- **信号不足**：Kimi Code CLI  
  24 小时无活动，无法据此评价社区活跃度、发布质量或用户采用率。

---

## 6. 值得关注的趋势信号

### 6.1 “Agent 编排”正从功能展示转向运行时工程

用户真正关心的不再是能否委派任务，而是：

- 子 Agent 是否真实完成；
- 失败、取消、超时和截断如何表达；
- 完成后是否主动通知；
- 能否恢复前台控制；
- 能否跨进程或重载继续运行。

**参考价值**：评估 CLI 时，应将任务状态机、事件通知、取消语义和持久化能力列为一级指标，而不是只比较模型基准。

### 6.2 权限安全将成为企业采购的硬门槛

当前风险不再只是“Agent 能否越权”，还包括 hook 退出码被错误转换、Plan Mode 实际可写、同名 MCP 工具替换授权、OAuth Token 跨 Origin 重放等。

**参考价值**：优先选择能够提供统一策略引擎、显式权限清单、审批记录和 fail-closed 行为的工具；插件和 MCP 应按最小权限、来源绑定和版本锁定管理。

### 6.3 插件生态的关键瓶颈已从安装转向运行时注入

插件“出现在列表中”并不代表能被 Agent 使用。Claude Code 的 Mods、Copilot 的 `<available_skills>`、OpenCode 的 Skills 命令、Codex 的 executor 级配置都指向同一问题。

**参考价值**：评估扩展生态时，应完整测试：

1. 文件格式解析；
2. 市场和项目级发现；
3. 上下文注入；
4. 权限绑定；
5. 工具调用；
6. 更新与失效；
7. 审计与回滚。

### 6.4 跨平台一致性将决定桌面 CLI 的真实市场份额

Windows 崩溃、启动挂起、TLS 凭据失败、黑窗闪烁，macOS 权限和输入异常，Linux PipeWire 与 Wayland 故障，显示桌面 Agent 的瓶颈已从 Web 技术迁移到操作系统集成。

**参考价值**：团队选型时应要求候选工具提供真实平台矩阵与回归记录，尤其是 Windows 企业环境、macOS 权限、Wayland 和多显示器环境。

### 6.5 缓存与上下文成本将成为长会话产品的核心指标

Pi 的预热失效、OpenCode 的 reasoning effort 缓存破坏、Codex 的订阅额度争议、Claude Code 的上下文持续增长，说明用户已经将成本视为产品能力的一部分。

**参考价值**：评估工具时应实测：

- 缓存命中率；
- 工具输出截断；
- compaction 行为；
- reasoning 元数据重放；
- 长会话 Token 增长；
- 失败重试是否重复计费。

### 6.6 Provider 抽象正在从“统一调用接口”走向“能力一致性治理”

Pi 的 OpenAI API Key 与 ChatGPT OAuth 能力差异、Gemini 的跨 Provider 推理字段不兼容、Codex 的模型权限与额度问题，表明统一的聊天接口并不等于统一的模型能力。

**参考价值**：模型路由层应动态暴露真实可用模型、reasoning 参数、上下文窗口、工具能力和认证状态，不能只维护一份静态模型目录。

### 6.7 终端协议与桌面 IPC 将成为容易被低估的基础设施

Pi 的鼠标与 Kitty 键盘残留、OpenCode 的 Windows 子进程黑窗、Codex 的 MessagePort 崩溃、jcode 的命名管道权限问题，均具有低层基础设施特征。

**参考价值**：这是“最后一公里”的成熟度分水岭。成熟工具应提供异常退出恢复、进程创建控制、终端状态清理以及跨权限 IPC 的稳定行为。

### 6.8 开源与可审计性继续升温

Claude Code 的两个开源 PR 表明，社区诉求已从“希望增加功能”扩展到“希望验证安全机制并自主维护”。

**参考价值**：对开发者和企业而言，可审计性正在成为与模型能力同等重要的选型维度，尤其适用于需要解释权限决策、验证数据流或长期维护 CLI 嵌入的组织。

---

## 结论

总体上，AI CLI 生态正进入**平台化与工程化并行的第二阶段**：一方面，桌面端、MCP、ACP、插件、Skills、浏览器和多 Agent 使 CLI 获得了过去 IDE 工具才有的能力；另一方面，状态语义、权限一致性、跨平台稳定性、缓存成本和扩展治理成为新的主要债务。

短期选型可优先关注三条主线：

1. **Copilot CLI**：企业治理与 GitHub/IDE 协同更成熟；
2. **Codex / Gemini CLI**：平台化野心突出，但需重点验证 Windows、权限和子 Agent 生命周期；
3. **OpenCode / Pi**：适合重视多 Provider、开放扩展和深度定制的团队，但需自行承担更多状态管理和兼容性验证成本。

对于 Claude Code，则应重点评估其 Mods 与 Remote Control 路线是否能把社区热度转化为稳定、可审计且跨平台一致的生产体验。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截至 2026-11-26**  
> 说明：给定热门 PR 数据中的评论数和点赞数均为 `undefined/0`，因此以下 PR 排行以**列表热度、问题修复重要性、跨平台影响和持续更新活跃度**为辅助判断依据；社区讨论热度则直接参考 Issues 的评论数与点赞数。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与价值 | 社区热点 | 状态 |
|---|---|---|---|---|
| 1 | [mcp-builder #1742](https://github.com/anthropics/skills/pull/1742) | 修复 MCP 2.x 兼容性：支持新的 `streamable_http_client` 导入，以及通过专用 HTTP client 配置自定义请求头。 | 直击 MCP SDK 升级造成的兼容性问题；影响所有需要连接远程 MCP 服务的 Skill，属于基础设施型修复。 | **Open** |
| 2 | [skill-creator #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger eval，改善 Windows 子进程处理，并区分“未触发”与“运行失败”。 | 修复并行评测互相干扰、负例被误判为通过、评分失真等核心问题，直接关系到 Skill 是否能稳定触发和自动优化。 | **Open** |
| 3 | [skill-creator #1681](https://github.com/anthropics/skills/pull/1681) | 支持直接执行 `package_skill.py`，修复模块导入错误并更新使用路径。 | 降低 Skill 打包门槛；修复命令行使用体验，属于 Skill 开发者高频接触的基础工作流。 | **Open** |
| 4 | [skill-creator #1997](https://github.com/anthropics/skills/pull/1997) | 正确解析 YAML frontmatter 标量，修复引号、转义及描述优化时元数据失真。 | 与 trigger evaluation 高度相关；元数据解析错误可能导致 Skill 无法触发、评测结果不可信。 | **Open** |
| 5 | [webapp-testing #1980](https://github.com/anthropics/skills/pull/1980) | 移除 `with_server.py` 中 `shell=True`，降低测试服务器启动命令的注入风险。 | 社区关注重点从“能测试”转向“安全地测试”；该修复影响所有通过命令启动本地服务的自动化流程。 | **Open** |
| 6 | [webapp-testing #1976](https://github.com/anthropics/skills/pull/1976) | 修正 textarea、select 等元素在发现阶段的类型报告，避免统一误报为 text。 | 提升浏览器元素识别准确性和后续自动化操作可靠性；属于可观测性与测试质量修复。 | **Open** |
| 7 | [docx #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时时正确报错，并验证输出 DOCX 中不再包含修订标记。 | 社区关注“成功声明必须可验证”；避免带修订痕迹的文档被误认为已完成。 | **Open** |
| 8 | [xlsx #2019](https://github.com/anthropics/skills/pull/2019) | 修复工作表级 defined names 和别名导致的外部链接风险漏检。 | 提升公式安全审计覆盖率，尤其关注隐藏外链、别名引用和工作表作用域等容易漏报的路径。 | **Open** |

### 热度解读

前三席均围绕 **`skill-creator` 与 MCP 基础设施**：触发评测、YAML 元数据解析、打包脚本和 MCP SDK 兼容性。这表明社区当前最迫切的需求不是单纯增加 Skill 数量，而是提高现有 Skill 的：

- 触发准确率与评测可信度；
- 跨平台、跨 SDK 版本稳定性；
- 打包、安装和运行可靠性。

---

## 2. 社区需求趋势

### 2.1 工作流自动化与组织级共享

[组织级 Skill 共享 #228](https://github.com/anthropics/skills/issues/228) 是需求类 Issue 中关注度最高的一项。社区希望能够：

- 在企业组织内共享 Skill；
- 通过统一库或分享链接分发；
- 取代 `.skill` 文件下载、Slack/Teams 转发和手动上传的流程。

这表明 Skill 正从个人插件进一步走向**团队级基础设施和治理能力**。

### 2.2 Agent 质量门禁与结果验证

[Reasoning Quality Gate Pipeline #1385](https://github.com/anthropics/skills/issues/1385) 提议建立覆盖完整任务周期的三阶段门禁：

1. 任务前校准；
2. 对抗式审查；
3. 交付前验证。

与相关的 PR 也体现同一趋势，例如 [docx #1792](https://github.com/anthropics/skills/pull/1792) 不再仅检查命令退出码，而是验证最终产物；[xlsx #2019](https://github.com/anthropics/skills/pull/2019) 则加强隐藏外部链接风险检测。

社区期待的共同能力是：**自动检查结果是否真实正确，而不只确认流程是否执行完成。**

### 2.3 安全治理与信任边界

社区对安全问题的关注正在成为独立热点：

- [社区 Skill 冒用 Anthropic 命名空间 #492](https://github.com/anthropics/skills/issues/492)
- [Agent Governance Skill #412](https://github.com/anthropics/skills/issues/412)
- [webapp-testing 命令注入修复 #1980](https://github.com/anthropics/skills/pull/1980)
- [Skill 同步状态说明 #2108](https://github.com/anthropics/skills/pull/2108)

核心诉求包括：

- 官方与社区 Skill 的清晰区分；
- 来源、签名和权限边界；
- 防止命令注入、恶意脚本和供应链滥用；
- 策略执行、审计轨迹和可信度评分。

### 2.4 Agent 记忆与状态压缩

[compact-memory #1329](https://github.com/anthropics/skills/issues/1329) 提议用紧凑符号表示持久化 Agent 状态，减少长会话中自然语言笔记占用上下文。

这反映出社区希望获得一种：

- 可长期保存；
- 低 token 成本；
- 结构化；
- 便于 Agent 检索和更新；

的外部记忆机制。相关方向可能与上下文压缩、长期任务连续性和多 Agent 协作结合。

### 2.5 Skill 评测、触发与调试工具

围绕 [`run_eval.py` 触发率为 0 #556](https://github.com/anthropics/skills/issues/556) 和 [并行 worker UUID 串扰 #1352](https://github.com/anthropics/skills/issues/1352)，社区集中反馈：

- Skill 描述不总能被模型识别；
- 评测脚本可能产生系统性假阴性；
- 并行执行存在状态隔离问题；
- 运行时失败可能被错误统计为“未触发”。

因此，**可解释、可复现的评测与诊断工具**是最明确的基础设施需求之一。

### 2.6 文档与专业生产力增强

社区希望继续扩展文档方向的专业化能力：

- [文档排版质量控制 #514](https://github.com/anthropics/skills/pull/514)：处理孤行、寡行、编号错位等问题；
- [Notion 规格到实现 #1245](https://github.com/anthropics/skills/pull/1245)：把产品或技术规格拆解为可执行任务、验收条件和进度跟踪；
- [DOCX 批注检测 #1734](https://github.com/anthropics/skills/pull/1734)：发现遗留批注；
- [XLSX 外链风险识别 #2019](https://github.com/anthropics/skills/pull/2019)：增强工作簿安全审计。

这说明文档类需求正从“生成文件”升级为“**生成、审校、验证、治理**”的一体化链路。

### 2.7 垂直领域能力扩展

热门 PR 中还出现多个垂直方向：

- [Notion 规格到实现 #1245](https://github.com/anthropics/skills/pull/1245)：产品交付管理；
- [ProofCore 智能合约审计 #1771](https://github.com/anthropics/skills/pull/1771)：Solidity/Rust 静态分析与审计证明；
- [Markdown 转视频与音频 #1703](https://github.com/anthropics/skills/pull/1703)：低成本的演示内容生成；
- [Pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525)：以可验证截图和状态检查辅助游戏开发；
- [SCNet HPC #1615](https://github.com/anthropics/skills/pull/1615)：SSH、Slurm 和科学计算集群操作。

需求正明显从通用办公自动化扩展到**研发、游戏、科研、音视频和 Web3**等垂直专业领域。

---

## 3. 高潜力待合并 Skills

以下 PR 尚未合并，且具备较强通用性，近期落地价值较高：

1. **[skill-creator #1298](https://github.com/anthropics/skills/pull/1742)**  
   准确修复 trigger evaluation 的并行隔离、Windows 兼容和错误分类。它会提高所有 Skill 的触发优化质量，是生态级基础修复。

2. **[skill-creator #1997](https://github.com/anthropics/skills/pull/1997)**  
   修复 YAML frontmatter 的标准解析，避免描述、引号和转义信息在评测过程中失真。与 Skill 触发准确率直接相关。

3. **[skill-creator #1681](https://github.com/anthropics/skills/pull/1681)**  
   恢复 `package_skill.py` 的直接执行能力，改善开发者打包体验，实施和维护成本相对较低。

4. **[mcp-builder #1742](https://github.com/anthropics/skills/pull/1742)**  
   跟进 MCP 2.x API 变更，解除新版 SDK 下的连接和自定义 Header 配置障碍，实用范围广。

5. **[webapp-testing #1980](https://github.com/anthropics/skills/pull/1980)**  
   消除 `shell=True` 带来的命令注入风险；属于安全敏感修复，优先级较高。

6. **[docx #1792](https://github.com/anthropics/skills/pull/1792)**  
   将 DOCX 成功判定从“进程正常退出”提升为“产物经过验证”，可显著减少文档交付中的假成功。

7. **[xlsx #2019](https://github.com/anthropics/skills/pull/2019)**  
   补齐工作表级名称和别名路径，提升外部链接风险扫描覆盖率，适合安全审计场景。

8. **[document-skills 同步说明 #2108](https://github.com/anthropics/skills/pull/2108)**  
   明确快照、同步目录与重复内容之间的关系，有助于用户理解安装行为并减少同步后的问题。

> 数据中未提供 PR 评论数，无法严格按“评论活跃度”筛选；上述列表依据影响范围、Issue 关联度、持续更新情况和落地价值综合判断。

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求，是建立一套“可信、可发现、可评测、可验证、可治理”的企业级 Agent 能力基础设施——让 Skill 不仅能被创建和安装，还能被准确触发、安全执行、客观验收并放心地在团队中共享。**

---

# Claude Code 社区动态日报

**日期：2026-11-26**  
**数据范围：过去 24 小时更新的 Issues 与 Pull Requests**

## 1. 今日速览

今日没有新的 Claude Code Release。社区讨论主要围绕**桌面端 Remote Control、多账号与订阅识别、MCP/HTTP 稳定性、插件与 Mods 扩展能力**展开；其中“Mods 提升扩展性”和“Desktop 多账号切换”是最受关注的功能议题。

开发者仍集中反馈跨平台体验问题：Windows 桌面端会话恢复、iOS 权限通知、macOS 认证误判，以及 MCP 初始化、长连接和认证缓存等集成问题。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

---

## 3. 社区热点 Issues

### 1. Mods：让 Claude Code 获得更强大的扩展能力
- **Issue：** [#91870](https://github.com/anthropics/claude-code/issues/91870)
- **重要性：** 这是社区长期关注的插件化与扩展生态核心议题，涉及 Hooks、Plugins 和 Mods 的能力边界。
- **社区反应：** 280 条评论、131 个 👍，为当日最活跃的扩展性讨论。
- **重点方向：** 官方持续推进 Mods 落地，并根据社区反馈快速迭代；相关讨论还延伸到 Desktop UI 组件暴露，例如 [#101312](https://github.com/anthropics/claude-code/issues/101312)。

### 2. Claude Desktop 支持多个账号并快速切换
- **Issue：** [#18435](https://github.com/anthropics/claude-code/issues/18435)
- **重要性：** 多账号是个人开发者和重度用户的基础需求，尤其适合同时管理个人版、团队版及不同工作区。
- **社区反应：** 257 条评论、1112 个 👍，是今日最受支持的 Issue。
- **重点方向：** 需要提供 Profile 管理、账号切换及更清晰的登录状态展示。

### 3. macOS 上 Apple Max 20x 订阅仍被识别为 Pro
- **Issue：** [#98134](https://github.com/anthropics/claude-code/issues/98134)
- **重要性：** 订阅识别错误可能影响功能授权、配额展示、计费解释及客户支持流程。
- **社区反应：** 37 条评论，说明问题已从个体案例演变为具有代表性的 macOS 认证问题。
- **重点方向：** 更新客户端订阅元数据解析，并统一 Apple 订阅档位到产品权益的映射。

### 4. Claude Code 无法访问 Claude App 聊天历史
- **Issue：** [#15542](https://github.com/anthropics/claude-code/issues/15542)
- **重要性：** 跨产品上下文连续性是提升用户留存和日常使用效率的重要能力。
- **社区反应：** 22 条评论、108 个 👍。
- **重点方向：** 允许 Code 读取 Claude App 中的相关对话历史，并支持有选择地导入上下文。

### 5. Windows 桌面端重启后 Remote Control 未恢复
- **Issue：** [#100114](https://github.com/anthropics/claude-code/issues/100114)
- **重要性：** Remote Control 的会话恢复直接影响远程开发、手机端控制和无人值守工作流。
- **社区反应：** 18 条评论、11 个 👍。
- **故障表现：** 桌面端重启或静默更新后，已有会话无法恢复；移动端还会将原本连接的会话错误归档。

### 6. Windows 默认安全限制误封韩国 Naver 域名
- **Issue：** [#95539](https://github.com/anthropics/claude-code/issues/95539)
- **重要性：** 域名分类误判会阻断正常网络访问，也暴露出安全策略缺少地区化和域名层级校准。
- **社区反应：** 14 条评论、16 个 👍。
- **重点方向：** 细化域名匹配逻辑，避免将同一主域名下的全部子域一并误判。

### 7. `headersHelper` 回归：HTTP transport 仍误判动态客户端注册
- **Issue：** [#78534](https://github.com/anthropics/claude-code/issues/78534)
- **重要性：** 这是 MCP 认证链路中的明确回归，会影响依赖自定义请求头的 HTTP MCP 服务。
- **社区反应：** 5 条评论；问题带有 `regression` 和 `reproduced` 标签。
- **重点方向：** 修复认证能力探测，使未配置 OAuth 的 `headersHelper` 服务不再被错误归类。

### 8. Agent Teams 队友被权限或信任提示永久阻塞
- **Issue：** [#104356](https://github.com/anthropics/claude-code/issues/104356)
- **重要性：** 多 Agent 协作中，一个成员等待确认就可能让整个任务链条停摆，且主 Agent 看不到阻塞原因。
- **社区反应：** 2 条评论，但问题直接影响 Agent Teams 的可靠性。
- **重点方向：** 将阻塞状态提升到主会话或远程用户界面，并支持统一批准、拒绝或重新分派。

### 9. iOS Remote Control 权限通知不再提供“Approve”
- **Issue：** [#106486](https://github.com/anthropics/claude-code/issues/106486)
- **重要性：** 移动端只能拒绝而不能批准，会破坏 Remote Control 的核心使用链路。
- **社区反应：** 2 条评论、7 个 👍。
- **重点方向：** 恢复 Approve 操作，或明确该行为变化是有意设计，并覆盖所有权限请求类型。

### 10. Worktree 隔离误拦截包含特定 shell 词的只读命令
- **Issue：** [#95611](https://github.com/anthropics/claude-code/issues/95611)
- **重要性：** 当前检查似乎只关注参数位置和关键词命中，未判断命令是否真正涉及 Git，容易造成误拦截。
- **社区反应：** 2 条评论、1 个 👍。
- **重点方向：** 将保护逻辑限定到实际 Git 写操作和敏感路径，而不是对 argv 中任意位置进行静态匹配。

---

## 4. 重要 PR 进展

> 过去 24 小时仅更新了 2 条 PR，未达到 10 条。以下列出全部可用 PR，并明确指出数量不足。

### 1. Fully Open Source Claude Code
- **PR：** [#41518](https://github.com/anthropics/claude-code/pull/41518)
- **内容：** 从 `@anthropic-ai/claude-code` npm 包中的 `cli.js.map` 提取约 1906 个 TypeScript 源文件，并加入基于 Bun 的构建配置、宏定义及缺失模块桩。
- **状态：** 已能构建并运行 `--version`、`--help` 等基础命令。
- **意义：** 为 Claude Code 的可审计性、代码级二次开发和社区修复提供了基础，但完整构建、依赖闭包和长期维护仍是关键。

### 2. feat: open source claude code
- **PR：** [#41447](https://github.com/anthropics/claude-code/pull/41447)
- **内容：** 提议开放 Claude Code 源码，并关联多个既有的开源需求 Issue。
- **状态：** OPEN；摘要未提供可核验的具体实现细节。
- **意义：** 与 #41518 共同反映出社区对透明性、可维护性和自主托管能力的强烈期待。

---

## 5. 功能需求趋势

### 1. 插件、Hooks 与 Mods 扩展生态
社区希望 Claude Code 从固定工作流转向可编程扩展平台，重点包括：

- 暴露更多 Desktop UI 渲染能力  
  [#101312](https://github.com/anthropics/claude-code/issues/101312)
- 通过 Hooks 在任务阻塞或完成时主动通知开发者  
  [#108145](https://github.com/anthropics/claude-code/issues/108145)
- 统一多项目、多环境下的 Hook 与配置管理  
  [#107408](https://github.com/anthropics/claude-code/issues/107408)

### 2. Desktop 与移动端协同
Remote Control 正在成为重要使用场景，但会话恢复、权限批准和通知仍是主要缺口：

- Windows 重启后会话恢复失败  
  [#100114](https://github.com/anthropics/claude-code/issues/100114)
- iOS 权限通知缺少 Approve  
  [#106486](https://github.com/anthropics/claude-code/issues/106486)
- Windows Desktop 增加“开始听写并发送 Prompt”的快捷键  
  [#109756](https://github.com/anthropics/claude-code/issues/109756)

### 3. 账号、订阅与跨产品上下文
- Desktop 多账号 Profile 管理  
  [#18435](https://github.com/anthropics/claude-code/issues/18435)
- Apple Max 订阅档位识别  
  [#98134](https://github.com/anthropics/claude-code/issues/98134)
- 读取 Claude App 聊天历史  
  [#15542](https://github.com/anthropics/claude-code/issues/15542)
- 同步更新 claude.ai 上的 Skills  
  [#112409](https://github.com/anthropics/claude-code/issues/112409)

### 4. MCP 与企业认证集成
MCP 相关反馈已从“能否连接”深入到协议兼容、认证生命周期和连接稳定性：

- `headersHelper` 动态客户端注册误判  
  [#78534](https://github.com/anthropics/claude-code/issues/78534)
- `subscriptions/listen` 导致首轮阻塞  
  [#91414](https://github.com/anthropics/claude-code/issues/91414)
- 失败的 `headersHelper` 污染机器级认证缓存  
  [#103343](https://github.com/anthropics/claude-code/issues/103343)
- `server/discover` 探测错误导致连接终止  
  [#100504](https://github.com/anthropics/claude-code/issues/100504)
- HTTP MCP 压缩协商  
  [#104313](https://github.com/anthropics/claude-code/issues/104313)

### 5. Agent Teams 与多 Agent 可靠性
社区需求集中在“可见、可控、可恢复”：

- 队友等待权限或信任提示时必须向主 Agent 暴露状态  
  [#104356](https://github.com/anthropics/claude-code/issues/104356)
- Fork/side session 中的后台 Agent 与浏览器状态不准确  
  [#111219](https://github.com/anthropics/claude-code/issues/111219)
- 用户自定义 Slash Command 工作流可能漏执行强制步骤  
  [#112404](https://github.com/anthropics/claude-code/issues/112404)

### 6. 上下文与资源管理
- Desktop Context 卡片需要解释“Since last update”的统计口径  
  [#111875](https://github.com/anthropics/claude-code/issues/111875)
- Linux 上可能在未接近上限时出现“Context limit reached”  
  [#112184](https://github.com/anthropics/claude-code/issues/112184)

### 7. 文档、UI 质量与区域化
- Markdown 中单个 `~` 被错误解释为删除线，严重影响韩文和中文文本  
  [#112417](https://github.com/anthropics/claude-code/issues/112417)
- Naver 等韩国主流域名被安全策略误封  
  [#95539](https://github.com/anthropics/claude-code/issues/95539)

---

## 6. 开发者关注点

### 远程控制仍缺乏“全链路可靠性”
社区反馈显示，Remote Control 的问题不只是通知是否送达，而是涉及：

- 桌面端重启后的会话恢复
- 移动端会话状态同步
- 权限请求的 Approve/Deny 完整性
- 后台 Agent 状态能否被准确展示

这表明移动审批与会话生命周期管理需要统一设计，而不能只修复单个客户端入口。

### MCP 兼容性问题碎片化但影响较大
开发者集中报告了初始化顺序、订阅长连接、动态客户端注册、认证缓存污染及压缩协商等问题。共同诉求是：

- 严格遵循 Streamable HTTP 生命周期
- 区分 `headersHelper` 与 OAuth 服务
- 认证失败应尽量限定在当前会话
- 错误响应不应无条件关闭整个连接
- 为长连接提供可配置超时和清晰日志

### 扩展性是长期核心诉求
“Mods”相关 Issue 继续保持最高评论热度，开发者希望扩展机制覆盖：

- Hooks 生命周期
- Desktop UI 组件
- 插件市场更新
- 跨项目配置复用
- 主动通知与外部集成

与此同时，Marketplace 更新重新克隆完整仓库的问题也受到关注：  
[#112407](https://github.com/anthropics/claude-code/issues/112407)。

### 状态准确性和可解释性不足
多个问题共同指向“系统展示的状态与真实执行状态不一致”，包括 Agent、浏览器面板、会话归档、Context 分类和权限等待。开发者希望 UI 和主 Agent 都能提供准确状态、阻塞原因和可执行的下一步。

### 开源诉求依然强烈
两条更新中的 PR 都围绕 Claude Code 全面开源，反映社区不仅关注功能扩展，也关注：

- 源码可审计性
- 安全机制可验证
- 自主构建和修改能力
- 降低对闭源发布节奏的依赖

### 跨平台与本地化仍需加强
macOS 订阅识别、Windows 会话恢复与安装、iOS 审批、Android 通知、Linux 上下文错误，以及韩文 Markdown 和韩国域名误封，共同显示平台差异与地区化适配仍是高频问题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-26**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

- 今日集中发布了 **Rust `0.174.0-alpha.6` 与 `0.174.0-alpha.7` 两个预发布版本**，显示 Codex 正进入密集迭代期。
- 社区讨论主要围绕 **Windows 桌面端稳定性、沙箱与权限机制、浏览器/Computer Use 集成，以及订阅额度与模型可用性**；其中多个高热度 Issue 已累计超过 30–50 条评论。
- PR 侧则集中完善 **TUI 交互、后台任务与子代理状态、MCP 交互、Windows hooks、插件能力发现及会话恢复**。

---

## 2. 版本发布

### `rust-v0.174.0-alpha.7`

- 这是 Rust 实现的最新 Alpha 版本。
- 与前一个 Alpha 版本在 24 小时内连续发布，表明 CLI/TUI 和底层执行能力正处于快速验证阶段。
- 今日 PR 中涉及的 TUI 输入路由、后台命令、子代理等待、MCP 数字字段、插件能力发现和 Windows hook 修复，预计是这一阶段的主要迭代方向。

发布链接：

- [rust-v0.174.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.7)

### `rust-v0.174.0-alpha.6`

- 紧邻 `alpha.7` 发布，属于同一轮 Rust/Codex 核心更新。
- 由于公开 Release 摘要未列出详细变更，建议开发者结合对应时间段的 PR 与 issue 进行回归验证，尤其关注 **Windows 启动、后台任务、浏览器连接和 app-server 会话恢复**。

发布链接：

- [rust-v0.174.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6)

---

## 3. 社区热点 Issues

### 1. 12 月额度调整应保留 Plus 用户的 ChatGPT High 与 Codex/Work 能力

- **链接**：[Issue #58530](https://github.com/openai/codex/issues/58530)
- **热度**：51 条评论、76 个赞，为今日最受关注议题。
- **重要性**：用户希望明确未来计费与权益边界，避免 December 2026 usage limits 调整导致 Plus 订阅失去高级模型或 Codex/Work 能力。
- **社区反应**：支持票数显著，且评论持续增长，反映订阅权益稳定性和高额度用户成本预期是核心诉求。

### 2. macOS Desktop 权限控件消失，但会话仍处于受限模式

- **链接**：[Issue #58677](https://github.com/openai/codex/issues/58677)
- **热度**：35 条评论、7 个赞。
- **重要性**：用户界面显示“Full access”，但创建聊天后整个权限控制消失，实际执行会话依然受限。这是明显的**权限状态与 UI 表达不一致**，可能直接导致任务无法完成。
- **社区反应**：评论量高，说明该问题对桌面端核心工作流影响较大。

### 3. 后台子进程完成后没有唤醒调用代理

- **链接**：[Issue #15723](https://github.com/openai/codex/issues/15723)
- **热度**：34 条评论、15 个赞。
- **重要性**：后台子进程或 subagent 完成时无法主动通知主代理，可能导致 Codex 长时间等待、结果遗漏或轮询浪费。
- **社区反应**：问题自 2026 年 3 月起持续发酵，是长期存在且影响自动化可靠性的核心痛点。

### 4. Windows 桌面端发送消息时闪退并自动重启

- **链接**：[Issue #62901](https://github.com/openai/codex/issues/62901)
- **热度**：20 条评论。
- **重要性**：主进程出现 `Peer closed MessagePort connection`，应用随后退出并重新启动；新旧会话均受影响，属于 Windows 桌面端高优先级稳定性问题。
- **社区反应**：已有较多复现反馈，但赞数较少，表明更多是稳定性投诉而非功能需求。

### 5. app-server 缺少发现并连接活跃 Codex Desktop 会话的正式接口

- **链接**：[Issue #25914](https://github.com/openai/codex/issues/25914)
- **热度**：18 条评论、3 个赞。
- **重要性**：外部本地客户端无法通过受支持、文档化的方式识别并附加到当前 Desktop thread/turn，限制了 IDE、编辑器插件和第三方工具集成。
- **社区反应**：讨论集中在“是否为 app-server 提供稳定协议”，是外部集成生态的重要基础设施需求。

### 6. Windows Desktop 更新后每次启动都会卡死

- **链接**：[Issue #62731](https://github.com/openai/codex/issues/62731)
- **热度**：18 条评论、2 个赞。
- **重要性**：Microsoft Store 自动更新至 `26.1117.3838.0` 后应用每次启动均冻结，并可在空 `CODEX_HOME` 下复现，意味着问题可能不依赖用户配置。
- **社区反应**：反馈强调升级后的稳定回归，属于阻止 Windows 用户继续使用的阻断性缺陷。

### 7. Linux 桌面版语音音量异常，PipeWire master gain 被降至零

- **链接**：[Issue #58704](https://github.com/openai/codex/issues/58704)
- **热度**：17 条评论、3 个赞。
- **重要性**：应用将 PipeWire 主输出增益降为零，而各声道增益仍为正常值，导致语音几乎无声；手动修正 master gain 可暂时恢复。
- **社区反应**：问题涉及 Linux 音频集成和桌面语音功能，影响范围虽小于 Windows 崩溃，但仍具有明确复现条件。

### 8. Windows 内置浏览器可见，但 CUA 报告浏览器不可用

- **链接**：[Issue #56755](https://github.com/openai/codex/issues/56755)
- **热度**：17 条评论。
- **重要性**：IAB 页面实际成功渲染，Codex 却无法通过 CUA API 连接。这不是单纯的浏览器加载失败，而是**页面显示状态与自动化控制接口脱节**。
- **社区反应**：新旧聊天均可复现，直接影响浏览器自动化与 Computer Use 工作流。

### 9. Windows 沙箱内 Schannel HTTPS 请求失败

- **链接**：[Issue #17459](https://github.com/openai/codex/issues/17459)
- **热度**：15 条评论、16 个赞。
- **重要性**：PowerShell/.NET 和 Schannel 版 `curl.exe` 在沙箱中均可能报 `SEC_E_NO_CREDENTIALS`，说明 Windows 原生 TLS 凭据链与沙箱环境存在兼容性问题。
- **社区反应**：该问题获得较高赞数，影响 Windows 沙箱内包下载、依赖安装和联网构建等基础任务。

### 10. macOS Computer Use 导致后台应用的物理按键被重复输入

- **链接**：[Issue #53861](https://github.com/openai/codex/issues/53861)
- **热度**：12 条评论、3 个赞。
- **重要性**：Computer Use 驱动后台应用时，系统级按键被重复发送，可能造成文本重复、误操作甚至数据破坏。
- **社区反应**：反馈聚焦输入注入层与焦点控制机制，是浏览器/桌面自动化安全性和可靠性的关键问题。

---

## 4. 重要 PR 进展

> 以下 PR 均显示为 **CLOSED**；由于摘要未提供合并状态，“关闭”不等同于已经合并。

### 1. 修复 TUI 图片附件相对路径解析

- **链接**：[PR #64071](https://github.com/openai/codex/pull/64071)
- **内容**：通过 `@` 补全选择图片时，使用文件搜索根目录解析相对路径，不再依赖进程当前工作目录。
- **价值**：避免工作目录与文件搜索根不一致时图片附件无法打开。

### 2. 修复 tmux 下 Kitty 宠物动画闪烁

- **链接**：[PR #64069](https://github.com/openai/codex/pull/64069)
- **内容**：交替使用 Kitty passthrough 图像占位，减少 tmux 外部终端删除与内部重绘之间的竞争。
- **价值**：改善 TUI 在 Kitty Graphics 与 tmux 组合下的视觉稳定性。

### 3. 修复 TUI 流式预览中的代码围栏跟踪

- **链接**：[PR #64067](https://github.com/openai/codex/pull/64067)
- **内容**：避免引用块中的围栏标记被误判为代码块结束，同时清理流式解析器残留状态。
- **价值**：提升 Markdown 渲染、代码高亮和表格识别在流式输出中的准确性。

### 4. 修复 Unicode 模糊匹配与斜杠命令弹窗异常激活

- **链接**：[PR #64058](https://github.com/openai/codex/pull/64058)
- **内容**：统一候选词和查询的 Unicode 小写处理，改善希腊 sigma 等变体匹配，并防止不可见的 slash-command 候选错误弹出。
- **价值**：增强 TUI 搜索、补全和命令选择的国际化和输入正确性。

### 5. 增加鼠标隐藏与恢复 TUI 侧边栏

- **链接**：[PR #64055](https://github.com/openai/codex/pull/64055)
- **内容**：新增侧边栏折叠箭头，支持鼠标隐藏侧边栏并恢复焦点到主对话。
- **价值**：补齐此前只能通过键盘操作侧边栏的交互缺口。

### 6. 重构 TUI 侧边栏选择器输入处理

- **链接**：[PR #64054](https://github.com/openai/codex/pull/64054)
- **内容**：将选择器输入从 `side_focus.rs` 拆至独立模块，明确事件消费、未处理和动作分发路径，并增加可见行及过期事件保护。
- **价值**：降低侧边栏输入竞争和状态错乱风险，为后续扩展提供更清晰结构。

### 7. 抽离 TUI 侧边栏输入路由

- **链接**：[PR #64053](https://github.com/openai/codex/pull/64053)
- **内容**：将命中测试与鼠标按下跟踪迁移至 `sidebar_input`，优先处理指针事件后再分发给文档、子代理面板或选择器。
- **价值**：强化多面板环境下的鼠标事件路由和焦点确定性。

### 8. 能力发现遵循每个 executor 的插件设置

- **链接**：[PR #64052](https://github.com/openai/codex/pull/64052)
- **内容**：同一个插件在不同 executor 环境中独立启用或禁用，同时保留线程级全局排除规则。
- **价值**：避免一个环境中的插件设置错误影响其他执行环境，提升插件发现逻辑的可预测性。

### 9. 在 TUI 中正确展示无目标的子代理等待状态

- **链接**：[PR #64026](https://github.com/openai/codex/pull/64026)
- **内容**：无接收线程或代理状态时显示 `Waiting`；等待失败或被中断时显示对应状态，而不再统一显示 “Waiting for agents”。
- **价值**：让多代理工作流的状态反馈更准确，减少误导。

### 10. 保留 Windows PowerShell hooks 的原生退出码

- **链接**：[PR #64013](https://github.com/openai/codex/pull/64013)
- **内容**：修复 PowerShell `-Command` 将原生退出码 `2` 错误报告为 `1` 的问题，确保 `PreToolUse` hook 失败时仍能正确阻断工具调用。
- **价值**：修复安全控制链中的潜在绕过风险，对企业 hook 和自动化治理尤其重要。

---

## 5. 功能需求趋势

### 1. 稳定的会话发现与外部集成协议

- app-server 客户端需要发现并附加当前 Desktop thread。
- 外部工具需要访问项目、线程和当前 turn 状态。
- 社区期待的不只是临时接口，而是**受支持、可发现、有文档且向后兼容的协议**。

代表 Issue：

- [#25914](https://github.com/openai/codex/issues/25914)
- [#54650](https://github.com/openai/codex/issues/54650)

### 2. 更完整的浏览器与 Computer Use 能力

热点集中在浏览器页面可见但自动化接口不可用、浏览器属于其他任务、Chrome 连接宿主不可用，以及系统级输入重复。
- 需要统一 IAB、Chrome、Computer Use 的连接与归属模型。
- 需要更可靠的页面任务绑定、焦点管理和输入注入。

代表 Issue：

- [#56755](https://github.com/openai/codex/issues/56755)
- [#63724](https://github.com/openai/codex/issues/63724)
- [#61631](https://github.com/openai/codex/issues/61631)
- [#53861](https://github.com/openai/codex/issues/53861)

### 3. 跨平台桌面稳定性与系统集成

- Windows 启动卡死、发送即重启、快捷重连失败。
- macOS 权限控件消失、云归档会话异常、Computer Use 输入异常。
- Linux PipeWire 音量、full-access 会话继承 `NoNewPrivs`。
- 中文界面设置不生效。

代表 Issue：

- [#62901](https://github.com/openai/codex/issues/62901)
- [#62731](https://github.com/openai/codex/issues/62731)
- [#62722](https://github.com/openai/codex/issues/62722)
- [#58704](https://github.com/openai/codex/issues/58704)
- [#44680](https://github.com/openai/codex/issues/44680)
- [#47774](https://github.com/openai/codex/issues/47774)

### 4. 沙箱权限与执行可靠性

- Windows Schannel HTTPS 凭据失败。
- 注册 Core 身份在子进程执行后丢失。
- PowerShell hook 退出码语义不稳定。
- 新增 Source 文件夹后，既有任务的工作区权限未更新。

代表 Issue：

- [#17459](https://github.com/openai/codex/issues/17459)
- [#60633](https://github.com/openai/codex/issues/60633)
- [#35634](https://github.com/openai/codex/issues/35634)

### 5. 后台任务、子代理与长任务编排

- 子代理完成后不唤醒主代理。
- 模型在长时间修复循环中丢失对原始目标的聚焦。
- CLI 在本地编译器维护等操作中频繁触发 cyber policy 中断。
- 用户希望后台任务、模型调用和子代理具备更可预测的生命周期。

代表 Issue：

- [#15723](https://github.com/openai/codex/issues/15723)
- [#50267](https://github.com/openai/codex/issues/50267)
- [#63092](https://github.com/openai/codex/issues/63092)

### 6. 会话同步、移动端历史与标题质量

- 移动端会话历史漏消息，之后又以错误顺序追加。
- 桌面端看不到 Web 或移动端可见的近期会话。
- 自动生成标题出现乱码或无关 Unicode 字符。

代表 Issue：

- [#61565](https://github.com/openai/codex/issues/61565)
- [#56916](https://github.com/openai/codex/issues/56916)
- [#52634](https://github.com/openai/codex/issues/52634)

### 7. 订阅额度、模型支持与成本可预测性

- Plus 用户要求保留 ChatGPT High 和 Codex/Work。
- 高阶模型在长任务中的目标保持能力受到质疑。
- 社区关注的不只是“模型是否可用”，还包括**额度边界、价格透明度和复杂任务的完成率**。

代表 Issue：

- [#58530](https://github.com/openai/codex/issues/58530)
- [#50267](https://github.com/openai/codex/issues/50267)

---

## 6. 开发者关注点

1. **权限状态必须真实、可解释**  
   开发者尤其关注 UI 显示的 Full access、沙箱状态和实际执行权限是否一致。权限控制消失、旧任务未继承新工作区权限等问题会直接中断自动化任务。

2. **Windows 是当前质量治理重点**  
   启动挂起、发送后重启、Schannel TLS 失败、注册 Core 身份丢失、浏览器不可用等问题同时出现，说明 Windows 桌面端、沙箱和系统集成仍需系统性回归。

3. **后台任务与子代理必须有可靠的生命周期协议**  
   “完成后不唤醒主代理”是社区长期痛点。开发者需要明确的任务 ID、状态事件、完成通知、失败与中断语义，以及跨轮次保留结果的能力。

4. **浏览器自动化需要统一的任务与页面归属模型**  
   页面可见不等于控制可用；“browser belongs to another task”和“browser access host unavailable”表明会话、任务、浏览器实例之间缺少稳定绑定。

5. **MCP 与插件能力需要可预测的发现和交互**  
   社区希望 app-server 提供正式会话接入能力；MCP 表单需支持数字字段；插件在不同 executor 中应遵循各自配置。这反映出扩展生态正从“能调用”进入“要稳定、可治理”的阶段。

6. **跨端会话一致性仍不足**  
   会话遗漏、归档会话无法恢复、标题乱码以及移动端消息顺序变化，会破坏长任务连续性。对开发者和重度用户而言，这是比单次执行失败更严重的体验问题。

7. **TUI 可用性持续快速完善**  
   今日 PR 集中解决图片路径、Unicode 匹配、代码块解析、侧边栏鼠标操作、快捷键提示和子代理等待状态，显示 TUI 正从功能可用阶段向成熟交互体验推进。

8. **安全控制链必须保持 fail-closed**  
   Windows PowerShell hook 退出码被错误转换可能使本应阻止的工具调用继续执行。此类问题应优先于普通体验问题处理，并增加覆盖原生退出码的专门测试。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-26**  
**数据范围：过去 24 小时内更新的 Issues 与 Pull Requests**

## 1. 今日速览

- 过去 24 小时没有新的 Release，但社区讨论高度集中在 **Subagent 的可靠性、配置继承、执行安全与可观测性**：多个高优先级问题涉及 Subagent 卡死、错误报告为成功、`settings.json` 覆盖失效及交互式任务阻塞。
- PR 端则重点完善 **ACP 模式、二进制文件处理、模型选择、安全策略与 MCP 凭据安全**；其中 Web Fetch SSRF 防护、MCP 工具授权与 OAuth Token 绑定问题受到安全关注。
- 新模型支持方面，内置模型配置开始加入 **`gemini-2.5-flash-image`（Nano Banana）**，可通过 `--model` 和 `/model` 选择。

## 2. 版本发布

过去 24 小时内**没有新版本发布**。

## 3. 社区热点 Issues

> 筛选标准综合考虑优先级、评论热度、点赞、问题覆盖面与工程影响，并非简单按评论数排序。

### 1. Subagent 达到 MAX_TURNS 后仍被报告为成功

- **Issue：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- Subagent 实际因达到最大轮数而中断，却被报告为 `status: "success"`、`Termination Reason: "GOAL"`。
- **重要性：** 错误的成功状态会误导上层 Agent、评测系统和用户，可能让未完成任务被当作已完成。
- **社区反应：** 14 条评论，为本日讨论热度最高的 Issue；已有 2 个赞。

### 2. Generalist Agent 在简单任务中永久卡住

- **Issue：** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- 委派给 Generalist Agent 后，连创建文件夹等简单操作都可能等待一小时以上；禁用 Subagent 后可规避。
- **重要性：** 直接影响多 Agent 架构的可用性，说明委派、轮次控制或子进程同步机制可能存在缺陷。
- **社区反应：** 8 条评论、8 个赞，是当日点赞最高的问题之一。

### 3. Browser Agent 忽略 `settings.json` 覆盖项

- **Issue：** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 没有应用全局或项目级 `settings.json` 中的覆盖配置，例如 `maxTurns`。
- **重要性：** 用户无法可靠控制子 Agent 的资源消耗和执行边界，也可能导致行为与主 Agent 不一致。
- **社区反应：** 5 条评论；问题已被自动化分诊，状态为需要重新测试。

### 4. 工具数量过多时触发 400 错误

- **Issue：** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 报告称可用工具超过阈值后会出现 400；摘要中的具体数量与标题“> 128 tools”存在表述差异，需要进一步核实。
- **重要性：** 工具数量越多，模型选择准确率、请求体大小和上下文成本越高，是扩展生态扩大后的核心可扩展性问题。
- **社区反应：** 3 条评论，目前仍在收集信息。

### 5. Browser Agent 在 Wayland 环境下失败

- **Issue：** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser Subagent 在 Wayland 桌面环境中无法正常运行，但输出中仍显示 `Termination Reason: GOAL`。
- **重要性：** 涉及 Linux 桌面兼容性，也再次暴露“失败却报告成功”的状态语义问题。
- **社区反应：** 4 条评论、1 个赞；属于 P1 且需要复测。

### 6. Subagent 达到轮次上限后恢复行为异常

- **Issue：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 之外的相邻议题集中在 Agent 恢复路径与终止状态的一致性。
- **重要性：** 对需要长时间运行、失败恢复和自动重试的工作流而言，准确的 `success/failure` 状态是基础能力。
- **社区关注：** 多个相关 Issue 都被归入 Agent workstream，显示社区正在集中推动终止语义和恢复流程的标准化。

### 7. 子 Agent 配置与加载机制不一致

- **Issue：** [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)
- `~/.gemini/agents/filename.md` 如果是符号链接，不会被识别为 Agent。
- **重要性：** 用户常通过符号链接统一管理多个项目的 Agent 定义；不支持会破坏可移植配置与工作区复用。
- **社区反应：** 4 条评论；属于需要补充信息的 P2 Bug。

### 8. Gemini 不会主动使用 Skills 和 Subagents

- **Issue：** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 即使存在与任务高度匹配的 `gradle`、`git` 等 Skill，模型仍倾向不主动调用，需要用户显式要求。
- **重要性：** 这不是单纯的“模型不听话”，而是触发、路由和决策机制可能未充分利用已经配置的能力。
- **社区反应：** 7 条评论，反映用户对自动化程度和 Agent 编排能力的不满。

### 9. 创建 Vite 应用时卡在交互式提示

- **Issue：** [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)
- Agent 执行项目脚手架时停在交互式提示，无法继续完成创建。
- **重要性：** 非交互式提示处理不当是 CLI Agent 的常见故障点，也会妨碍无人值守运行和评测复现。
- **社区反应：** 2 条评论；维护者建议增加行为评测并调整 Prompt。

### 10. `/bug` 报告缺少 Subagent 上下文

- **Issue：** [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)
- Bug 报告主要包含主会话信息，缺少 Subagent 内部轨迹，难以判断委派后发生了什么。
- **重要性：** 可观测性不足会显著增加多 Agent 故障的定位成本，也阻碍评测体系建立。
- **社区反应：** 2 条评论；属于 P1，目前需要重新测试。

## 4. 重要 PR 进展

### 1. 为 Web Fetch 增加 DNS 与重定向 SSRF 防护

- **PR：** [#30477](https://github.com/google-gemini/gemini-cli/pull/30477)
- 防止通过 DNS 主机名、重定向或代理跳转到回环、链路本地及私网地址。
- **影响：** 修复代理重定向可能绕过初始私网 IP 检查的问题，是重要的网络边界安全修复。

### 2. 将 MCP 工具批准绑定到具体工具定义

- **PR：** [#30478](https://github.com/google-gemini/gemini-cli/pull/30478)
- `ProceedAlwaysServer` / `ProceedAlwaysTool` 不再只按名称记忆授权，而是绑定到实际工具定义。
- **影响：** 防止服务器通过 `tools/list_changed` 替换同名工具后继承旧授权，降低供应链攻击风险。

### 3. 将 MCP OAuth Token 绑定到签发它的服务器 URL

- **PR：** [#30475](https://github.com/google-gemini/gemini-cli/pull/30475)
- 当 MCP 服务器 URL 指向不同 Origin 时，不再静默复用旧 Token，而是要求重新认证。
- **影响：** 防止凭据被错误或恶意地跨服务器重放。

### 4. 修复 Web Fetch 重定向中的 SSRF 漏洞

- **PR：** [#30477](https://github.com/google-gemini/gemini-cli/pull/30477)
- 除初始 URL 检查外，进一步覆盖直接重定向及代理转发路径。
- **影响：** 与前述 SSRF PR 属于同一安全方向，适合作为重点跟踪项。

### 5. 防止可信工作区重定向遥测导出

- **PR：** [#30476](https://github.com/google-gemini/gemini-cli/pull/30476)
- 修复工作区 `.gemini/settings.json` 可覆盖用户级遥测 OTLP Endpoint 和输出文件的问题。
- **影响：** 避免克隆的仓库在获得工作区信任后改变遥测目的地，保护本地数据和企业监控配置。

### 6. 加入 `gemini-2.5-flash-image` 内置模型配置

- **PR：** [#30470](https://github.com/google-gemini/gemini-cli/pull/30470)
- 新增 Nano Banana 图像生成模型别名，支持 `--model` 和 `/model` 选择，并设置 `TEXT`、`IMAGE` 响应模态。
- **影响：** Gemini CLI 的原生图像生成和多模态能力进一步产品化。

### 7. YOLO 模式正确作用于 Shell 风险检查和构建文件保护

- **PR：** [#30268](https://github.com/google-gemini/gemini-cli/pull/30268)
- 在 `--approval-mode=yolo` / `-y` 下，Shell taint 检查、构建文件保护及 `PolicyEngine` 不再产生多余确认或硬拒绝。
- **影响：** 修复无人值守和 Headless 模式被安全策略意外中断的问题。

### 8. 统一 ACP Token 用量追踪和配额元数据

- **PR：** [#30353](https://github.com/google-gemini/gemini-cli/pull/30353)
- 修复取消回合时丢失 `PromptResponse.usage` 和 `_meta` 的问题，并统一 ACP 模式的 Token 统计与配额元数据。
- **影响：** 提升 ACP 客户端的成本统计、预算控制和可观测性准确性。

### 9. 避免 ACP 模式发送超大工具输出

- **PR：** [#30234](https://github.com/google-gemini/gemini-cli/pull/30234)
- ACP 的 `Session.runTool` 现在像 CLI 调度器一样截断大型 Shell 或 MCP 输出。
- **影响：** 避免单次工具调用产生巨量输入 Token；摘要中提到某个场景曾消耗约 36.9 万输入 Token。

### 10. ACP 并行执行可并行的工具调用

- **PR：** [#30236](https://github.com/google-gemini/gemini-cli/pull/30236)
- 同一回合中的独立搜索、Fetch 或 Shell 调用不再逐个串行等待，而是并行运行。
- **影响：** 显著缩短 ACP 客户端多工具工作流的执行时间。

### 补充关注：ACP 会话释放与媒体处理

- [#30232](https://github.com/google-gemini/gemini-cli/pull/30232)：为 ACP 实现 `session/close`，允许客户端释放配置、聊天和 MCP 资源。
- [#30230](https://github.com/google-gemini/gemini-cli/pull/30230)：保留合成二进制 ACK，避免注入音频或视频时出现 Gemini 3 的 400 错误。
- [#30241](https://github.com/google-gemini/gemini-cli/pull/30241)：避免截断工具响应时破坏注入的 Base64 二进制数据。

## 5. 功能需求趋势

### 5.1 Subagent 可靠性与生命周期管理

这是当日最集中的方向：

- 准确区分成功、达到轮次上限、异常中断与真正完成；
- 修复 Generalist Agent 卡死；
- 恢复 Browser Agent 在 Wayland 下的兼容性；
- 支持持久浏览器会话接管和锁恢复；
- 支持后台运行本地 Agent；
- 允许并行 Subagent 与共享内存协作。

代表议题：

- [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- [#22741](https://github.com/google-gemini/gemini-cli/issues/22741)
- [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)

### 5.2 Agent 配置、发现与触发机制

社区希望：

- `settings.json` 对 Browser Agent 等子 Agent 生效；
- 支持通过 `settings.json` 发现 Subagent；
- 修复符号链接形式的 Agent 定义；
- 让模型主动匹配并调用 Skills、Subagents；
- 改善 Agent 对 CLI 参数、快捷键和自身能力的理解。

代表议题：

- [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- [#18285](https://github.com/google-gemini/gemini-cli/issues/18285)
- [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)

### 5.3 代码库理解与上下文效率

- 评估 AST 感知的文件读取、搜索和代码库映射；
- 引入“外科式读取”，减少整文件注入造成的上下文膨胀；
- 改进 `codebase_investigator`；
- 用原生文件工具替代仅存在于对话上下文中的 Todo 状态。

代表议题：

- [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)
- [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)
- [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 5.4 安全与执行策略

- 阻止 Agent 执行 `git reset --force` 等破坏性命令；
- 引入零依赖 OS 沙箱及执行后意图路由；
- 修复 Web Fetch SSRF；
- 强化 MCP 工具授权、OAuth Token 隔离和工作区遥测配置边界。

代表议题：

- [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### 5.5 多模态、IDE 与协议集成

- 新增 `gemini-2.5-flash-image` 图像模型；
- 完善 ACP 的并行执行、输出截断、会话关闭、Token 统计；
- 修复 Windows `/ide install` 路径包含空格时的失败；
- 改善音频、视频等二进制内容在 Gemini 3 下的处理。

代表议题：

- [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- [#30470](https://github.com/google-gemini/gemini-cli/pull/30470)

## 6. 开发者关注点

1. **状态必须可信**  
   Subagent 因 MAX_TURNS、Wayland 或内部错误失败时，不应显示 `GOAL` 或成功。开发者需要明确、机器可判定的终止状态。

2. **多 Agent 不应降低基础任务可靠性**  
   Generalist Agent 连创建目录都可能卡住，说明委派链路、超时、重试和取消机制仍不够稳健。

3. **配置应一致地作用于所有 Agent**  
   `settings.json` 被 Browser Agent 忽略，以及 `maxTurns` 等限制未生效，会直接破坏用户对资源消耗的预期。

4. **上下文与工具规模成为扩展瓶颈**  
   工具过多触发 400、大型输出导致数十万 Token 输入、整文件读取造成上下文膨胀，均指向需要更智能的工具选择和分层读取。

5. **模型主动性仍显不足**  
   已配置的 Skill 和 Subagent 往往需要用户显式点名才能使用，说明自动触发与任务路由还有较大改进空间。

6. **非交互式执行必须可靠**  
   Vite 创建流程卡在交互提示、临时脚本散落各处，会污染工作区并破坏无人值守、自动化评测及 CI 场景。

7. **扩展与 MCP 权限边界受到重视**  
   工具同名替换、服务器 Origin 变化、OAuth Token 重放等问题表明，权限不能再仅按名称或 URL 松散绑定。

8. **调试与评测需要完整轨迹**  
   `/bug` 报告和 `/chat share` 无法充分展示 Subagent 内部行为，阻碍问题定位、行为评估与回归测试。

9. **开发者期待更安全的自动化默认值**  
   YOLO 模式应避免重复确认，但涉及私网访问、凭据重放、遥测重定向和破坏性 Git 操作时仍需明确、细粒度的安全边界。

10. **ACP 客户端体验正在快速补齐**  
    社区重点关注并行执行、超大输出截断、资源释放、Token 统计和停止原因，反映 ACP 正在成为 Gemini CLI 集成外部客户端的重要接口。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-26**  
**数据范围：过去 24 小时更新的 Releases、Issues 与 Pull Requests**

## 1. 今日速览

过去 24 小时 Copilot CLI 连续发布 `v1.0.117-0`、`v1.0.117-1`、`v1.0.117-2` 三个版本，重点改进自定义 Agent 工具暴露、模型选择提示、扩展启动授权，以及内置搜索的稳定性。社区讨论主要围绕 Agent checkpoint refs、多工作区支持、插件/MCP 扩展机制和会话稳定性展开，共更新 32 个 Issues；过去 24 小时没有新的 PR 更新。

## 2. 版本发布

### v1.0.117-2

- 修正 `copilot help extensions` 的说明：扩展不会自动获得 `-p` 模式下的工具权限，只有通过 `--allow-all-tools`、`--yolo` 或此前保存的授权明确批准后才会启动。
- 修复 Copilot 传递类似行号等 flags 时导致内置搜索失败的问题。

[查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.117-2)

### v1.0.117-1

- `/model` 选择器现在展示服务通知，并标记即将退役的模型，方便用户在选择前查看警告。
- 仓库指定模型对应的 provider 不可用时，不再静默切换 provider，而是直接显示错误。
- 改进会话 checkpoint 通知行为，避免在不适当时机宣告新 checkpoint。

[查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.117-1)

### v1.0.117-0

- 新增显式工具暴露机制，允许自定义 Agent 按需启用工具。
- 恢复会话时，如果 GitHub 登录仍在完成，加载已连接的 Copilot Connectors。
- 后台 Agent 在 CLI 重启并恢复会话后，可以继续之前的对话。

[查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.117-0)

### v1.0.116

- 为扩展 manifest 增加构建期 JSON Schema。
- 全屏时间线支持 “Jump to latest”，可回到最新输出并继续跟随。
- ACP 兼容编辑器可为支持的模型单独选择上下文大小，而不改变保存的默认配置。
- `v1.0.116-5` 还修正了 Autopilot 计划审批提示、ACP Shell 审批展示内容，以及 HTTP hooks 执行问题。

[查看 v1.0.116](https://github.com/github/copilot-cli/releases/tag/v1.0.116) · [查看 v1.0.116-5](https://github.com/github/copilot-cli/releases/tag/v1.0.116-5)

## 3. 社区热点 Issues

### 1. Agent checkpoint refs 持续写入用户仓库

[#5323](https://github.com/github/copilot-cli/issues/5323) 提议增加关闭 `refs/agents/*` checkpoint refs 的设置。该功能会为每个 Agent turn 创建 Git ref，并使用用户 Git 身份提交，可能污染仓库引用视图。Issue 有 **8 条评论、6 个赞**，是本期讨论最充分的议题之一。

**重要性：** 涉及仓库整洁性、权限边界、默认隐私行为和企业可配置性。

### 2. 多根工作区与 `.code-workspace` 支持缺失

[#1826](https://github.com/github/copilot-cli/issues/1826) 请求通过 VS Code `.code-workspace` 文件发现额外工作区目录，并加载其中的 `AGENTS.md` 等指令文件。该 Issue 获得 **22 个赞、6 条评论**，是热度最高的功能请求之一。

**重要性：** 直接影响 IDE 与 CLI 上下文同步，以及 monorepo、多项目工作流。

### 3. 模型请求频繁出现 transient API error

[#2073](https://github.com/github/copilot-cli/issues/2073) 报告模型请求持续进入 transient error/retry 流程。该问题有 **13 个赞、6 条评论**，反映模型服务稳定性仍是用户高频感知因素。

**重要性：** 重试机制可能增加延迟和费用，并导致自动化任务不稳定。

### 4. 会话在 turn 结束时可能永久卡死

[#4755](https://github.com/github/copilot-cli/issues/4755) 描述 queued-lane 消息在 turn 结束时抑制 idle finalization，最终使会话不再运行或接受输入，只能终止进程。该问题有 **5 条评论**。

**重要性：** 属于会话核心状态机缺陷，可能影响后台任务、Agent 编排和长时间自动化运行。

### 5. 插件技能未注入主 Agent 的 `available_skills`

[#2753](https://github.com/github/copilot-cli/issues/2753) 指出市场安装的插件技能虽然能在 `/skills` UI 中看到，却没有进入主 Agent 系统提示的 `<available_skills>`，最终无法被调用。该 Issue 有 **5 条评论、1 个赞**。

**重要性：** 插件“已安装但不可用”，直接影响插件生态的可用性。

### 6. ACP 未公开 Copilot Fusion 与 tier 配置

[#5354](https://github.com/github/copilot-cli/issues/5354) 指出交互式 CLI 已提供 Fusion，但 ACP 客户端只展示 `Auto`，无法选择 Fusion/Auto tier。该问题获得 **11 个赞、3 条评论**。

**重要性：** 影响 ACP 编辑器、T3 Code 等第三方客户端中的模型选择和功能对等性。

### 7. `--add-dir` 导致远程会话自动发布失败

[#5355](https://github.com/github/copilot-cli/issues/5355) 报告配置远程会话自动发布后，以 `--add-dir <path>` 启动会触发 `session publication failed`。该问题有 **2 条评论、1 个赞**。

**重要性：** 涉及远程会话发布与本地目录扩展之间的组合场景，可能阻断协作流程。

### 8. Agent Plugins 1.0 的 `.instructions.md` 与 `applyTo` 被忽略

[#5440](https://github.com/github/copilot-cli/issues/5440) 指出加载 Agent Plugins 1.0.0 时，skills、MCP servers、自定义 Agent 和 hooks 可见，但 `.instructions.md` 及 `com.github.copilot/rules/` 中的 `applyTo` frontmatter 被静默忽略。该 Issue 有 **2 条评论、1 个赞**。

**重要性：** 插件格式兼容性问题可能导致企业规则或上下文指令没有实际生效。

### 9. Windows ConstrainedLanguage 模式污染 Shell 输出

[#4683](https://github.com/github/copilot-cli/issues/4683) 报告在 AppLocker/WDAC 管理的 Windows 环境中，每次 Shell 命令都会因 `$host.SetShouldExit()` 被禁止而产生虚假错误。该问题有 **4 条评论、1 个赞**。

**重要性：** 企业受管终端中几乎所有命令都会出现错误块，严重影响可读性和自动化日志解析。

### 10. 企业策略要求插件，但无法预批准其扩展

[#5575](https://github.com/github/copilot-cli/issues/5575) 请求让 managed policy 能预批准并强制加载受管插件中的扩展，尤其用于需要阻断 prompt 的 SDK hooks。当前 managed settings 可启用插件，却无法保证插件内扩展在无用户交互时运行。

**重要性：** 这是插件、权限和 prompt policy 之间的关键缺口，阻碍企业把 Copilot CLI 作为受控执行环境使用。

## 4. 重要 PR 进展

过去 24 小时内，GitHub Copilot CLI 仓库 **没有更新的 Pull Requests**，因此暂无可供汇总的 PR 功能或修复进展。

[查看 Pull Requests](https://github.com/github/copilot-cli/pulls)

## 5. 功能需求趋势

### IDE 与多工作区集成

- 支持 `.code-workspace` 多根目录及其中的 `AGENTS.md`、规则文件。
- 提升 CLI 与 VS Code/ACP 编辑器之间的上下文、模型和工具能力一致性。
- 插件中的 `.instructions.md` 与 `applyTo` 规则需要获得完整支持。

相关 Issues：  
[#1826](https://github.com/github/copilot-cli/issues/1826) · [#5440](https://github.com/github/copilot-cli/issues/5440) · [#5354](https://github.com/github/copilot-cli/issues/5354)

### 模型与 Provider 控制

- 希望明确指定模型及 provider，并避免不可用 provider 被静默替换。
- ACP 客户端需要获得 Fusion、Auto tier 等模型配置。
- 社区希望 Copilot Fusion 能路由到 `providers.json` 中配置的本地 OpenAI-compatible 服务。

相关 Issues：  
[#5354](https://github.com/github/copilot-cli/issues/5354) · [#5581](https://github.com/github/copilot-cli/issues/5581) · [#2073](https://github.com/github/copilot-cli/issues/2073)

### 插件、技能与扩展体系

- 插件技能需要正确注入 Agent，并支持带参数的 slash command。
- 市场源或单个插件格式异常时，应跳过无效条目并给出 warning，而非整体安装失败。
- 企业 managed policy 应支持预批准、强制启用插件及其扩展。
- 自定义 Agent 需要更明确的工具暴露与授权模型。

相关 Issues：  
[#2753](https://github.com/github/copilot-cli/issues/2753) · [#5578](https://github.com/github/copilot-cli/issues/5578) · [#5582](https://github.com/github/copilot-cli/issues/5582) · [#5575](https://github.com/github/copilot-cli/issues/5575)

### 会话、后台 Agent 与远程协作

- 修复会话 turn 结束时可能永久卡死的问题。
- CLI 重启并恢复会话后，后台 Agent 应继续对话。
- `--add-dir` 与远程自动发布需要兼容。
- 远程 CLI 会话切换出现挂起、内存增长和认证日志风暴，需要重点排查。

相关 Issues：  
[#4755](https://github.com/github/copilot-cli/issues/4755) · [#5355](https://github.com/github/copilot-cli/issues/5355) · [#5577](https://github.com/github/copilot-cli/issues/5577)

### 权限、企业策略与可配置性

- 社区希望关闭 Agent checkpoint refs，减少对用户仓库 Git 元数据的影响。
- 组织级策略需要更完整地控制插件扩展、工具授权和 prompt blocking。
- MCP 被明确禁用后，不应在启动时重复显示“被策略阻止”的警告。

相关 Issues：  
[#5323](https://github.com/github/copilot-cli/issues/5323) · [#5575](https://github.com/github/copilot-cli/issues/5575) · [#5222](https://github.com/github/copilot-cli/issues/5222)

## 6. 开发者关注点

1. **自动化可靠性**  
   `-p` 模式在 Agent 已完成任务但没有输出结论时仍以错误码退出，直接破坏 CI/CD 集成。  
   [#5574](https://github.com/github/copilot-cli/issues/5574)

2. **扩展机制的实际可用性**  
   插件技能无法进入 Agent 上下文、带参数时 slash command 报错、Agent Plugins 1.0 指令被忽略，说明“能安装”尚未完全等同于“能运行”。  
   [#2753](https://github.com/github/copilot-cli/issues/2753) · [#5578](https://github.com/github/copilot-cli/issues/5578) · [#5440](https://github.com/github/copilot-cli/issues/5440)

3. **受管企业环境兼容性**  
   Windows ConstrainedLanguage、Windows Sandbox 网络 allowlist、GHE.com 更新认证、Perforce depot wildcard 误判等问题，集中体现出企业环境下权限与路径处理的复杂性。  
   [#4683](https://github.com/github/copilot-cli/issues/4683) · [#5580](https://github.com/github/copilot-cli/issues/5580) · [#5571](https://github.com/github/copilot-cli/issues/5571) · [#5521](https://github.com/github/copilot-cli/issues/5521)

4. **MCP 协议兼容与启动可靠性**  
   MCP `server/discover` 超时后的 legacy fallback、重复 `initialize` 以及禁用服务器的重复策略警告，仍是扩展生态的重要兼容性问题。  
   [#4888](https://github.com/github/copilot-cli/issues/4888) · [#5464](https://github.com/github/copilot-cli/issues/5464) · [#5222](https://github.com/github/copilot-cli/issues/5222)

5. **市场安装效率与容错**  
   添加大型 marketplace 时会克隆整个仓库，耗时较长且取消处理不可靠；单个无效插件也可能导致整个市场安装失败。  
   [#5491](https://github.com/github/copilot-cli/issues/5491) · [#5582](https://github.com/github/copilot-cli/issues/5582)

6. **交互效率与可访问性**  
   社区希望限制历史提示词导航范围、持久化 Autopilot 次数限制，并在澄清对话框中支持语音输入。  
   [#5576](https://github.com/github/copilot-cli/issues/5576) · [#4454](https://github.com/github/copilot-cli/issues/4454) · [#5573](https://github.com/github/copilot-cli/issues/5573)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-26**

## 1. 今日速览

- OpenCode 发布 **v2.4.2**，重点更新 GPT-6.2 系统提示词，并修复连接 OpenCode Go 后模型选择器的引导体验。
- 社区议题集中在 **子智能体生命周期与可观测性、Plan Mode 权限一致性、Desktop/TUI 交互、Skills 管理及模型缓存**；其中多个高关注问题已关闭，表明部分需求已进入实现或评估阶段。
- 当日 PR 重点集中在 **工具调用稳定性、历史消息一致性、性能优化、插件安装和桌面端兼容性**，整体以修复类工作为主。

## 2. 版本发布

### v2.4.2

- 为 **GPT-6.2 Sol、Astra** 及 `gpt-latest` 别名加入专门编写的 GPT-6.2 系统提示词。
- 修复连接 OpenCode 后，模型选择器中 **OpenCode Go 模型未被正确列出或排序**的引导问题。
- Release：[v2.4.2](https://github.com/anomalyco/opencode/releases/tag/v2.4.2)
- 相关 PR：[GPT-6.2 System Prompt #66297](https://github.com/anomalyco/opencode/pull/66297)

## 3. 社区热点 Issues

1. **恢复前台执行子智能体的能力**  
   子智能体被切换到后台后，用户更关注能否恢复前台执行和控制权。该议题获得 **33 条评论、13 个赞**，是当日讨论热度最高的功能请求，反映出多智能体任务需要更清晰的执行模式和交互反馈。  
   [Issue #64073](https://github.com/anomalyco/opencode/issues/64073)

2. **后台子智能体缺少取消能力**  
   v2 虽能返回并恢复子智能体会话 ID，但运行中的后台子智能体无法取消，容易产生不可控任务。**19 条评论、10 个赞**表明这是多智能体工作流中的核心缺口。  
   [Issue #36423](https://github.com/anomalyco/opencode/issues/36423)

3. **Windows 控制台进程持续闪烁黑窗**  
   OpenCode 启动的每个控制台子进程可能短暂弹出窗口，典型场景下 `git.exe` 可达约每秒一次。该问题已被确认是未传递 `CREATE_NO_WINDOW` 所致，并关联多个旧 Issue。  
   [Issue #52266](https://github.com/anomalyco/opencode/issues/52266)

4. **Copilot GPT-6 切换 reasoning effort 后丢失提示缓存**  
   OpenCode 2.2.0 将新的 effort 作为顶层 Responses 参数发送，破坏缓存前缀；正确方式应使用 `configuration_update`。该问题直接影响缓存命中率、延迟和 token 成本。  
   [Issue #59868](https://github.com/anomalyco/opencode/issues/59868)

5. **问答弹窗遮挡聊天内容**  
   当字体较大时，底部问答弹窗会覆盖大部分对话，用户难以阅读 Agent 先前的问题说明；相关可调整高度、折叠位置的诉求获得 **7 条评论、3 个赞**。  
   [Issue #37173](https://github.com/anomalyco/opencode/issues/37173)

6. **恢复 v1 的持久化 Plan 文件工作流**  
   用户希望 v2 恢复 `.opencode/plan` 等持久化计划文件机制，以便跨会话保留规划结果。该需求获得 **7 条评论**，体现出复杂任务中“计划与执行分离”的重要性。  
   [Issue #49879](https://github.com/anomalyco/opencode/issues/49879)

7. **会话标签与跨项目组织能力**  
   当前会话主要按项目目录分组，用户希望通过标签整理同一任务在不同项目中的会话。该功能有助于研究、迁移和长期任务追踪。  
   [Issue #50585](https://github.com/anomalyco/opencode/issues/50585)

8. **每次加载位置都会重复订阅文件监听器**  
   服务端加载项目或 worktree 时，会重复订阅文件系统根目录、用户主目录祖先和全局配置目录，可能造成重复事件、资源占用及性能问题。  
   [Issue #64674](https://github.com/anomalyco/opencode/issues/64674)

9. **Desktop 无法识别 VSCodium，且错误提示 VS Code 未安装**  
   当系统仅安装 `/usr/bin/codium` 时，Desktop 的“打开方式”仍只查找 `code`，导致 `Desktop IPC handler failed`。Issue 同时提出 VSCodium 支持。  
   [Issue #63194](https://github.com/anomalyco/opencode/issues/63194)

10. **Plan Mode 下 worktree 工具仍可修改文件系统与 Git 状态**  
    `worktree_create` 和 `worktree_remove` 在只读 Plan Mode 中仍能执行，暴露出模式权限约束与实际工具能力不一致的问题。  
    [Issue #64162](https://github.com/anomalyco/opencode/issues/64162)

> 此外，新 issue 指出 `opencode run` 无法可靠区分用户输入、工具输出和模型自身文本，可能让 Agent 执行用户从未要求或已拒绝的操作，值得持续关注：  
> [Issue #66526](https://github.com/anomalyco/opencode/issues/66526)

## 4. 重要 PR 进展

1. **修复 Chat 与 Responses 中重复工具调用 ID**  
   模型跨步骤复用 tool call ID 时，严格后端可能拒绝重放历史并导致会话中断；PR 将对重复 ID 进行消歧。  
   [PR #66544](https://github.com/anomalyco/opencode/pull/66544)

2. **失败的工具调用保留已解码输入**  
   工具输入仍处于原始流式 JSON 字符串时若调用失败，旧投影会丢失可读输入；修复后错误信息与调试上下文更完整。  
   [PR #66541](https://github.com/anomalyco/opencode/pull/66541)

3. **缓存通配符编译结果**  
   `Wildcard.match` 原先每次调用都会创建新的 `RegExp`；PR 引入编译缓存，减少权限策略及工具快照路径中的重复开销。  
   [PR #66543](https://github.com/anomalyco/opencode/pull/66543)

4. **客户端丢弃过期历史分页**  
   延迟到达的历史页可能覆盖已删除或已淘汰的 transcript，并错误重置新请求的游标及加载状态；PR 增加过期页淘汰逻辑。  
   [PR #61341](https://github.com/anomalyco/opencode/pull/61341)

5. **中断后撤销已接纳消息**  
   修复 `/undo` 或消息对话框 Revert 操作试图撤销服务器尚未物化消息的问题，减少中断流程中的状态不一致。  
   [PR #65831](https://github.com/anomalyco/opencode/pull/65831)

6. **为 macOS 主可执行文件设置独立 LC_UUID**  
   Electron 应用共享相同 UUID 会影响 macOS Local Network 隐私识别；PR 为 OpenCode 主程序生成独立 UUID。  
   [PR #66546](https://github.com/anomalyco/opencode/pull/66546)

7. **插件二进制安装改为原子替换**  
   CLI postinstall 原先先删除目标再复制，失败时可能留下不完整安装；PR 改为先暂存，再原子重命名到目标位置。  
   [PR #66539](https://github.com/anomalyco/opencode/pull/66539)

8. **裸插件名固定解析到 registry 最新版本**  
   仅填写插件名称时可能出现 `ERESOLVE`，PR 将裸名称映射到 registry 的明确 latest release，改善依赖解析稳定性。  
   [PR #62912](https://github.com/anomalyco/opencode/pull/62912)

9. **Desktop Inbox 在聚焦会话切换时保持列表位置**  
   修复 Inbox 侧栏因会话切换而跳到底部、遮挡新未读结果的问题。  
   [PR #66547](https://github.com/anomalyco/opencode/pull/66547)

10. **Ctrl+J 快捷键切换终端面板**  
    为 `terminal.toggle` 增加 `Ctrl+J` 别名，可快速聚焦或隐藏集成终端；同时保留与 `input.newline` 重叠绑定的兼容性处理。  
    [PR #66517](https://github.com/anomalyco/opencode/pull/66517)

## 5. 功能需求趋势

### 多智能体控制与可观测性

- 子智能体前台/后台模式切换与取消能力。
- 展示正在运行的子智能体数量、进度及完成状态。
- 在父会话中直接观察子任务活动。
- 插件创建的子会话可选择是否自动回报完成状态。

代表 Issue：[ #64073 ](https://github.com/anomalyco/opencode/issues/64073)、[ #36423 ](https://github.com/anomalyco/opencode/issues/36423)、[ #62629 ](https://github.com/anomalyco/opencode/issues/62629)

### Plan Mode 与工作流管理

- 恢复持久化 Plan 文件和规划阶段工作流。
- 向客户端明确暴露当前模式，而不是依赖缺少 reminder 来推断。
- 严格限制 Plan Mode 下的 worktree、文件写入和 Git 操作。
- 支持跨会话保留计划与上下文。

代表 Issue：[ #49879 ](https://github.com/anomalyco/opencode/issues/49879)、[ #64189 ](https://github.com/anomalyco/opencode/issues/64189)、[ #64162 ](https://github.com/anomalyco/opencode/issues/64162)

### Desktop、TUI 与编辑器集成

- 恢复或优化 Projects 侧栏布局。
- 支持 VSCodium，并准确检测编辑器安装状态。
- 添加原生 Android、iOS Simulator 工作区。
- 通过快捷键快速打开终端。
- 改善问答弹窗、消息导航和上下文用量提示。

代表 Issue：[ #63194 ](https://github.com/anomalyco/opencode/issues/63194)、[ #65480 ](https://github.com/anomalyco/opencode/issues/65480)、[ #66353 ](https://github.com/anomalyco/opencode/issues/66353)、[ #66484 ](https://github.com/anomalyco/opencode/issues/66484)

### Skills 与命令生态

- 自动注册 Claude Code 兼容 Skills 提供的 `/` 命令。
- Desktop 的 slash command 列表展示 Skills。
- Settings → Extensions → Skills 展示项目级 Skills。
- 推动 V1 插件生态和第三方 Skills 的发现与接入。

代表 Issue：[ #35341 ](https://github.com/anomalyco/opencode/issues/35341)、[ #50638 ](https://github.com/anomalyco/opencode/issues/50638)、[ #53716 ](https://github.com/anomalyco/opencode/issues/53716)

### 会话组织与可访问性

- 会话标签、跨项目分组及任务追踪。
- 会话引用可点击打开。
- 消息颜色配置、左侧消息导航和上下文阈值提醒。
- 改善大字体、窄窗口下的阅读与问答体验。

代表 Issue：[ #50585 ](https://github.com/anomalyco/opencode/issues/50585)、[ #56419 ](https://github.com/anomalyco/opencode/issues/56419)、[ #63732 ](https://github.com/anomalyco/opencode/issues/63732)

### 新模型与成本优化

- GPT-6.2 系列模型专用系统提示词。
- Copilot GPT-6 reasoning effort 切换时维持 prompt cache。
- 精确统计新模型用户，降低重复计数偏差。

代表 Issue：[ #59868 ](https://github.com/anomalyco/opencode/issues/59868)、[PR #66536](https://github.com/anomalyco/opencode/pull/66536)

## 6. 开发者关注点

- **任务可控性是首要诉求**：开发者希望明确知道 Agent 正在做什么、哪些子任务仍在运行，并可随时取消、恢复或观察后台任务。
- **权限边界必须与 UI 状态一致**：Plan Mode 应可靠限制文件、worktree 和 Git 状态变更；当前“界面显示只读、底层工具仍可修改”的不一致风险较高。
- **上下文成本和缓存命中率受到重视**：reasoning effort 切换导致缓存失效、长会话成本增长，以及会话组织能力，都是高频实际痛点。
- **Desktop 的跨平台细节仍需加强**：Windows 黑窗闪烁、macOS Local Network、VSCodium 检测和移动端工作区都反映了桌面端适配成本。
- **Skills 与插件生态需要更顺畅的发现和调用**：项目级 Skills、slash 命令、插件版本解析及父会话中的子智能体展示，是扩展生态继续增长的关键。
- **状态一致性比单纯增加功能更受重视**：历史分页、撤销、中断、工具失败和重复 tool call ID 等 PR 集中修复异步状态竞争和消息生命周期问题。
- **模块加载与运行性能仍有优化空间**：通配符正则缓存、监听器重复订阅和过大的 Session API skill 文档，表明大型会话及长期运行场景的性能治理仍将继续。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-26

## 今日速览

过去 24 小时无新版本发布，仓库共有 48 条 Issue 更新、50 条 PR 更新。社区讨论集中在桌面端账号连接、Windows/macOS 兼容性与 CI 稳定性，同时认证、TUI 交互、后台任务和模型提供商适配成为今日开发主线。

## 社区热点 Issues

1. **桌面端无法连接订阅账号**  
   付费用户反馈 Jcode Desktop 持续无法连接订阅账户，且存在额度未使用的问题；Issue 获 7 条评论，是今日讨论最热条目。  
   [查看 Issue #2275](https://github.com/1jehuang/jcode/issues/2275)

2. **桌面端整体无法使用**  
   用户报告 Jcode 无法启动或连接，附有界面截图；被标记为桌面端区域的重复问题，已获 3 条评论。  
   [查看 Issue #2287](https://github.com/1jehuang/jcode/issues/2287)

3. **无法识别标准化上下文溢出错误**  
   兼容后端可能返回 `context_length_exceeded`、`prompt_too_large` 或“chat context is too large”等形式，现有分类器未覆盖，导致自动上下文恢复流程被跳过。  
   [查看 Issue #2375](https://github.com/1jehuang/jcode/issues/2375)

4. **Windows 下 TUI 测试无法编译**  
   `jcode-tui` 测试使用 Unix 专属的 Stream 方法及 `parse_niri`，在 Windows 上产生 14 个编译错误，影响跨平台测试与质量门禁。  
   [查看 Issue #2256](https://github.com/1jehuang/jcode/issues/2256)

5. **AlphaCode 被指为缺少 MIT 署名的 jcode 副本**  
   报告称外部项目对 jcode 进行重命名和品牌替换，但未保留原始版权声明，涉及项目授权与开源合规。  
   [查看 Issue #2276](https://github.com/1jehuang/jcode/issues/2276)

6. **DeepSeek 视觉模型被模型选择器隐藏**  
   当前判断逻辑会过滤包含独立 `vision` 标记、但缺少 `chat`、`instruct` 或 `vl` 的模型 ID，导致 `deepseek-v4-flash-vision-exp` 等视觉对话模型无法选择。  
   [查看 Issue #2300](https://github.com/1jehuang/jcode/issues/2300)

7. **Windows 命名管道跨权限级别绑定失败**  
   在管理员权限的 Windows Terminal 中，jcode 绑定命名管道时出现 `Access is denied (os error 5)`，重试也无法恢复，属于高影响平台兼容问题。  
   [查看 Issue #2263](https://github.com/1jehuang/jcode/issues/2263)

8. **Anthropic 临时 403 会锁死已绑定会话**  
   一次瞬时 403 会触发五分钟冷却，并可能持续到守护进程重启；后续请求在本地直接失败，无法重新访问 API。  
   [查看 Issue #2268](https://github.com/1jehuang/jcode/issues/2268)

9. **后台任务无法跨 selfdev 重载存活**  
   `selfdev build-reload` 会杀死正在运行的后台子进程，迫使用户重新执行构建、测试等耗时任务。  
   [查看 Issue #2280](https://github.com/1jehuang/jcode/issues/2280)

10. **TypeScript SDK 可能损坏跨分块 UTF-8 字符**  
    SDK 对每个 Socket `Buffer` 独立执行 UTF-8 解码；若多字节字符恰好被分块切断，会被替换为无效字符，JSON 仍可能解析，从而造成静默数据损坏。  
    [查看 Issue #2417](https://github.com/1jehuang/jcode/issues/2417)

## 重要 PR 进展

1. **提前恢复订阅额度后唤醒挂起任务**  
   Codex 或原生 Claude 订阅在额度提前恢复后，挂起的 turn 仍可能等待原定重置时间；PR 改为根据新的账户探测结果恢复请求。  
   [查看 PR #2419](https://github.com/1jehuang/jcode/pull/2419)

2. **保存 OAuth 账号身份并强化订阅失效处理**  
   防止删除、重命名账号或 fork 后错误切换登录身份；绑定的订阅不可用时将 fail closed，避免意外消耗平台 API Key。  
   [查看 PR #2407](https://github.com/1jehuang/jcode/pull/2407)

3. **新增 Claude Code CLI 登录**  
   命令行和 `/login` 支持通过 Claude Code CLI 登录，同时保留浏览器 OAuth、显式 `--claude-code`、命名账号及非交互模式。  
   [查看 PR #2388](https://github.com/1jehuang/jcode/pull/2388)

4. **聚合会话附件之间的响应能力**  
   避免不支持响应工具的 TUI 附件禁用 Desktop responder 的能力；改为按各传输通道聚合支持状态，并刷新断连或过期状态。  
   [查看 PR #2369](https://github.com/1jehuang/jcode/pull/2369)

5. **统一清理草稿并退出 TUI**  
   修复 Ctrl+C、纯图片草稿及普通清理路径行为不一致的问题，并统一实现“再次按 Ctrl+C 退出”的交互约定。  
   [查看 PR #2398](https://github.com/1jehuang/jcode/pull/2398)

6. **编辑器支持可选文本**  
   双击可选单词、三击可选逻辑行，Shift 与方向键可扩展选区；输入、粘贴、删除和剪切均可直接替换或移除选区。  
   [查看 PR #2403](https://github.com/1jehuang/jcode/pull/2403)

7. **后台任务完成后默认唤醒模型**  
   `notify` 或 `wake` 未显式设置时默认启用，减少模型轮询后台任务的需要；`notify=false` 和 `wake=false` 仍保持原行为。  
   [查看 PR #2363](https://github.com/1jehuang/jcode/pull/2363)

8. **运行中的 turn 可取消所属后台任务**  
   在获取 Agent 互斥锁之前加入后台取消操作，并验证任务 ID 与会话所有权，解决活动 turn 阻塞后台任务取消的问题。  
   [查看 PR #2359](https://github.com/1jehuang/jcode/pull/2359)

9. **防止图片提示在重载或发送失败时丢失**  
   纯图片提示、图文交错草稿在重载、断连、忙碌拒绝及写入失败后仍会保留附件，并避免附件被错误带入新草稿。  
   [查看 PR #2409](https://github.com/1jehuang/jcode/pull/2409)

10. **记忆提取去重并减少重载副作用调用**  
    相同会话和项目在历史未变化时共享最近一次成功检查点；进程内并发请求也会合并为一次 sidecar 调用。  
    [查看 PR #2402](https://github.com/1jehuang/jcode/pull/2402)

## 功能需求趋势

- **认证与订阅管理**：账号连接失败、OAuth 身份保持、Claude Code CLI 登录、额度提前恢复及订阅失效后的安全降级成为核心需求。  
  [#2275](https://github.com/1jehuang/jcode/issues/2275) · [#2407](https://github.com/1jehuang/jcode/pull/2407) · [#2388](https://github.com/1jehuang/jcode/pull/2388)

- **TUI 编辑与交互体验**：可编辑选区、模型与推理级别分步选择、todo 卡片样式、附件草稿生命周期及退出行为均被集中优化。  
  [#2403](https://github.com/1jehuang/jcode/pull/2403) · [#2415](https://github.com/1jehuang/jcode/pull/2415) · [#2397](https://github.com/1jehuang/jcode/pull/2397)

- **后台任务可靠性**：任务需支持跨服务重载、完成事件主动通知模型、运行中取消、等待结果不重复投递，以及避免误删临时状态文件。  
  [#2280](https://github.com/1jehuang/jcode/issues/2280) · [#2363](https://github.com/1jehuang/jcode/pull/2363) · [#2359](https://github.com/1jehuang/jcode/pull/2359)

- **跨平台稳定性**：Windows TUI 编译、命名管道权限、macOS 测试和清理脚本、含空格路径安装及 macOS 键盘修饰键状态均受到关注。  
  [#2256](https://github.com/1jehuang/jcode/issues/2256) · [#2263](https://github.com/1jehuang/jcode/issues/2263) · [#2295](https://github.com/1jehuang/jcode/issues/2295)

- **模型与 Provider 适配**：DeepSeek 视觉模型识别、上下文溢出分类、缓存路由稳定性、流式请求超时、仅生成模型拦截等需求突出。  
  [#2300](https://github.com/1jehuang/jcode/issues/2300) · [#2375](https://github.com/1jehuang/jcode/issues/2375) · [#2301](https://github.com/1jehuang/jcode/issues/2301)

- **工具与外部服务集成**：Google Calendar 分页和事件移动、MCP 连接池超时、OAuth 客户端替换，以及 MCP 配置优先级都需要增强。  
  [#2307](https://github.com/1jehuang/jcode/issues/2307) · [#2332](https://github.com/1jehuang/jcode/issues/2332) · [#2328](https://github.com/1jehuang/jcode/issues/2328)

- **SDK 与数据完整性**：TypeScript SDK 的 NDJSON 流式解码需要支持跨 chunk UTF-8，避免静默字符损坏。  
  [#2417](https://github.com/1jehuang/jcode/issues/2417)

## 开发者关注点

1. **“能连接账号”并不等于“能稳定完成请求”**：订阅额度、OAuth 身份、Provider 403、超时和上下文恢复之间存在明显的链路故障，需要统一状态机和一致降级策略。  
2. **跨平台测试必须进入常规门禁**：Windows 与 macOS 上的测试、Shell 工具、安装脚本和进程模型差异，已从边缘兼容问题上升为发布稳定性风险。  
3. **后台任务需要事件驱动而非轮询驱动**：社区同时提出完成唤醒、即时取消和跨重载存活，反映出长任务执行体验仍有明显短板。  
4. **模型选择不能仅依赖字符串规则**：兼容 Provider 的模型 ID 越发多样，当前逻辑容易误过滤视觉模型、放行仅生成模型，或遗漏未来模型的上下文限制。  
5. **配置与身份数据必须原子化、可追踪**：OAuth、MCP 和全局 agent 配置存在并发写入、覆盖优先级及客户端与 token 配对失真的风险。  
6. **SDK 流式协议必须正确处理字符边界**：NDJSON 按网络 chunk 解码而非按完整行解码，是容易造成静默数据损坏的基础设施问题。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报

**日期：2026-11-26**  
**项目：** [earendil-works/pi](https://github.com/earendil-works/pi)

## 今日速览

Pi 发布 **v1.6.1**，核心变化是为 codemode 增加决策模型支持，包括 GitHub Copilot 的 `gpt-6-luna-decisions` 和 Radius decision models，并返回 provider 的 `responseId`。  
社区讨论主要集中在三类问题：**缓存预热失效与策略配置、OpenAI/Anthropic/Gemini 多 Provider 兼容性、Windows 终端状态恢复**；同时 Durable、扩展生态与遥测隐私正在成为新的功能焦点。

---

## 版本发布

### [v1.6.1](https://github.com/earendil-works/pi/releases/tag/v1.6.1)

主要更新：

- **Codemode 支持决策模型**
  - GitHub Copilot 的 `gpt-6-luna-decisions`
  - Radius decision models
- 决策模型现在可通过 `models.classify()` 调用。
- 分类结果包含 Provider 返回的 `responseId`，便于请求追踪、审计及结果关联。

---

## 社区热点 Issues

### 1. [cacheWarming: "idle" 在扩展处理 turn_end 后静默停止](https://github.com/earendil-works/pi/issues/10956)

**状态：Open｜19 评论｜5 👍**

当扩展处理 `turn_end`，且上下文包含自定义消息或 compaction message 时，idle cache warming 会静默失效。报告者观察到 507 次预热决策全部基于 `continuationProbability: 1`，预期的低概率预热从未触发。该问题直接影响提示词缓存命中率、费用与响应延迟，是今日讨论热度最高的问题。

### 2. [Anthropic SSE 解析器无法处理跨网络分块的 CRLF](https://github.com/earendil-works/pi/issues/10390)

**状态：Closed｜11 评论**

`\r` 与 `\n` 被拆分到两个网络 chunk 时，`iterateSseMessages` 会错误刷新事件，随后因空 `data:` 触发 JSON 解析失败并中断整轮对话。问题直接影响流式响应的稳定性，且属于容易被网络抖动放大的边界条件。

### 3. [OpenAI Responses API：GPT-6 仍发送 medium effort，工具轮次丢失 reasoning](https://github.com/earendil-works/pi/issues/12464)

**状态：Closed｜10 评论｜P0**

直接使用 API key 的 `openai` Responses provider 仍会把 `max` effort 钳制为 `medium`，并在启用 `additional_tools` 时抑制工具调用轮次的 reasoning。此前的修复仅覆盖 `openai-codex`，导致不同 OpenAI 接入方式行为不一致。

### 4. [Windows 退出后残留鼠标与 Kitty 键盘输入报告](https://github.com/earendil-works/pi/issues/12133)

**状态：Closed｜11 评论**

Pi 退出后，PowerShell 会把鼠标移动或按键产生的转义序列回显到终端，导致命令行被垃圾字符污染。相关问题在 [#12564](https://github.com/earendil-works/pi/issues/12564) 中继续出现，说明异常退出场景仍未完全解决。

### 5. [在 AssistantMessage 中保留结构化 Provider 失败元数据](https://github.com/earendil-works/pi/issues/11071)

**状态：Open｜8 评论**

社区希望统一暴露 HTTP 状态码、Provider 错误码及可重试性等元数据，并通过 `AssistantMessage` 稳定传递。当前诊断信息在终端可见，但 SDK 消费方难以可靠判断错误类型，这限制了移动端、队列及自动化客户端的重试策略。

### 6. [允许配置 idle cache-warming 的时间窗口](https://github.com/earendil-works/pi/issues/11127)

**状态：Open｜6 评论｜1 👍**

当前默认窗口为 30 分钟，但提示词缓存 TTL 也可能为 30 分钟，导致预热时机难以覆盖实际过期点。社区希望支持 60 或 120 分钟等配置，以适配不同模型、缓存策略和长会话工作负载。

### 7. [Pi Durable 需要支持客户端工具执行与审批](https://github.com/earendil-works/pi/issues/10852)

**状态：Open｜4 评论**

Durable 目前的工具执行与人工审批能力不足，无法完整承载需要用户确认的工作流。对于后台 Agent、持久化任务及多 Agent 编排，这是影响实际生产部署的重要能力缺口。

### 8. [OpenAI ChatGPT 登录展示不支持的模型及错误上下文窗口](https://github.com/earendil-works/pi/issues/12466)

**状态：Open｜3 评论**

`openai` provider 对 API key 与 ChatGPT OAuth 共用同一模型目录，但 ChatGPT 账号实际可用模型取决于 Codex 权限。报告称目录中的 47 个模型有 36 个首次请求即失败，模型发现与真实能力脱节。

### 9. [Durable 对被截断的工具调用错误返回 done](https://github.com/earendil-works/pi/issues/12414)

**状态：Open｜3 评论**

当模型因 `length` 停止，且唯一内容为 `codemode({})` 时，`submission.wait()` 会返回 `done`，但 transcript 中既无工具结果也无最终文本。调用方可能误判任务成功，形成静默的数据或执行缺失。

### 10. [切换至 Gemini 4 Vertex 时出现 thought_signature 缺失](https://github.com/earendil-works/pi/issues/12420)

**状态：Open｜3 评论**

在同一会话中从 Claude 切换到 Google Vertex 上的 Gemini 4，工具调用会因缺少 `thought_signature` 被 Vertex 拒绝。问题反映跨 Provider 会话迁移时，隐藏推理元数据没有被正确保留或转换。

---

## 重要 PR 进展

### 1. [feat(durable)!: 为会话提供彻底删除能力](https://github.com/earendil-works/pi/pull/12562)

新增 `Harness.deleteConversations(ids, context)`：先中止会话及其后台工作，再永久删除会话和其拥有的子 Agent 会话。该 PR 涉及破坏性 API 变更，补齐了 Durable 的数据生命周期管理能力。

### 2. [fix(ai): 在 openai-completions 中重放 GitHub Copilot reasoning_opaque](https://github.com/earendil-works/pi/pull/12505)

修复 Copilot 流返回 `reasoning_text` 后再返回单个 `reasoning_opaque` 时，后者被丢弃的问题。保留 opaque 值可确保后续请求完整重放推理上下文，减少跨轮 reasoning 不一致。

### 3. [feat(coding-agent): 安装遥测和归因遵循 DO_NOT_TRACK](https://github.com/earendil-works/pi/pull/12556)

计划在安装遥测及来源归因中尊重 `DO_NOT_TRACK=1`。这是直接回应社区隐私审计的改进，使 Pi 与通用隐私约定保持一致；PR 当前仍为开放草案。

### 4. [feat(ai): GitHub Copilot 在 effort 和工具变化时保留 prompt cache](https://github.com/earendil-works/pi/pull/12539)

修复 Claude 在调整 thinking level 或工具集时重建请求、导致 Copilot 提示词缓存失效的问题。缓存保持能力直接影响长会话成本与首 token 延迟。

### 5. [fix(ai): 停止向 Bedrock Kimi K3 模型发送历史 reasoning](https://github.com/earendil-works/pi/pull/12555)

依据 AWS 对 Kimi K3/K3.1 的限制，移除请求中不适用的历史 reasoning 内容，避免 Converse API 拒绝请求。该修复提升了 Bedrock 新模型兼容性。

### 6. [support AGENTS.local.md](https://github.com/earendil-works/pi/pull/12543)

Coding Agent 现在可在每个目录中于 `AGENTS.override.md` 之后、`AGENTS.md` 之前加载 `AGENTS.local.md`。这为个人或团队本地的 Agent 指令提供了独立覆盖层，同时避免修改共享配置。

### 7. [docs: 补充 Pi 被强制终止后的终端恢复方法](https://github.com/earendil-works/pi/pull/12554)

在终端配置文档中增加 `kill -9`、任务管理器终止及 OOM 等场景的恢复说明，帮助用户清理 alternate screen、鼠标、焦点及扩展键盘协议残留。

### 8. [fix(ai): 为 Bedrock flat reasoning_effort 模型发送 models.dev 配置](https://github.com/earendil-works/pi/pull/12551)

为 Bedrock Kimi K3.1 等 flat `reasoning_effort` 模型补充正确映射，使 `--thinking max` 能传递到 Converse API，而不再被钳制为 `high`。

### 9. [fix(coding-agent,tui): 在快捷键提示中显示实际配置的按键](https://github.com/earendil-works/pi/pull/12541)

修正提示中引用错误 action 或硬编码按键的问题。UI 将根据用户实际配置展示 interrupt、cancel 等操作对应的按键，减少提示与真实行为不一致。

### 10. [fix(tui): 慢速搜索时保持 @ 文件补全响应](https://github.com/earendil-works/pi/pull/12538)

当递归文件搜索耗时较长时，先显示直接匹配结果；接受建议时替换完整 `@token`，避免残留旧前缀或输入片段。这是高频交互体验的直接优化。

---

## 功能需求趋势

### 1. 缓存效率与成本控制

社区高度关注 idle cache warming 的可靠性、可配置时间窗口，以及在调整 effort、工具集和推理内容后保留 prompt cache。目标一致：**减少重复计费、降低延迟并避免缓存失效**。

### 2. 多 Provider 一致性

OpenAI API key、ChatGPT OAuth、Copilot、Anthropic、Bedrock 和 Vertex 之间的模型目录、认证能力、reasoning 参数及缓存行为仍不统一。开发者希望模型能力能够被**准确发现并动态映射到实际账号权限**。

### 3. Durable 与长期任务能力

Durable 成为近期增长明显的方向，需求集中在：

- 客户端工具执行及人工审批
- 子 Agent 任务的永久删除
- 跨机器导入、导出及恢复会话
- 正确报告截断、失败和完成状态
- 对独立工具调用进行批处理

### 4. 扩展、包与项目级配置

社区关注 skills、prompt template 的命名空间，以及 `AGENTS.local.md` 等目录级配置覆盖机制。核心诉求是让 Pi 更适合**团队规范与个人定制并存**的工程环境。

### 5. 新模型与决策型 Agent 能力

v1.6.1 引入决策模型，GitHub Copilot classifier 模型也受到关注。新增模型不再只是“能够调用”，还需要正确的权限过滤、上下文窗口、reasoning effort 和兼容标记。

### 6. 终端兼容性与可恢复性

Windows 鼠标、Kitty 键盘、alternate screen、强制终止后的终端恢复，以及 OSC 7577 会话恢复协议，构成了近期终端生态工作的主线。

### 7. 隐私与可观测性

`DO_NOT_TRACK`、Provider 错误元数据、模型目录错误报告等需求表明开发者希望同时获得：

- 更明确的隐私控制
- 可供程序消费的结构化错误
- 在 JSON、RPC、print 等模式下可靠暴露配置问题

---

## 开发者关注点

- **上下文压缩可能形成无限重试循环**  
  自动压缩达到输出上限后继续执行，再次触发压缩；开发者希望系统在重复失败时停止并给出明确状态。参见 [#12483](https://github.com/earendil-works/pi/issues/12483)。

- **工具调用截断与“假完成”风险**  
  Durable 可能在没有最终文本或工具结果时返回 `done`，自动化调用方需要更严格的状态语义。

- **跨模型切换不安全**  
  Claude、Gemini 等模型在同一会话中切换时，隐藏推理字段可能不兼容，工具调用因此失败。

- **模型列表不等于实际可用模型**  
  ChatGPT OAuth、API key、Copilot 和 Bedrock 的模型权限差异明显，用户在首次调用时才发现模型不可用。

- **缓存策略难适配真实 TTL**  
  固定 30 分钟窗口无法覆盖不同 Provider 的缓存寿命，且扩展或 compaction 消息还会意外阻止预热。

- **扩展行为容易改变核心生命周期**  
  `turn_end` 扩展与上下文消息组合可令 cache warming 无声停止，扩展作者需要更明确的事件及状态契约。

- **Windows 异常退出后的终端污染仍未彻底解决**  
  正常退出和异常终止需要分别处理鼠标、焦点、Kitty 键盘及 alternate screen 状态恢复。

- **配置错误需要跨运行模式可见**  
  `models.json` 格式错误目前可能只在部分交互模式提示，JSON、RPC 和 print 模式也应输出可靠诊断。

- **安装依赖脚本控制仍不统一**  
  npm 12 对 Git 来源包缺少便利的 `allowScripts` 声明方式，影响依赖安全和自动化安装。参见 [#12219](https://github.com/earendil-works/pi/issues/12219)。

- **SDK UI 上下文不应依赖展开运算符**  
  `wrapUIPromptContext` 通过 spread 复制对象会丢失类实例的原型方法，说明 SDK API 需要更稳健的对象包装方式。参见 [#8829](https://github.com/earendil-works/pi/issues/8829)。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
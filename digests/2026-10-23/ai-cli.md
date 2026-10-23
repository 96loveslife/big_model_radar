# AI CLI 工具社区动态日报 2026-10-23

> 生成时间: 2026-10-23 07:01 UTC | 覆盖工具: 8 个

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

# AI CLI 生态横向对比分析

**数据日期：2026-10-23**  
**对比对象：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

1. **AI CLI 已从“模型交互工具”进入“长期运行 Agent 平台”阶段**：会话持久化、后台任务、事件唤醒、子代理、MCP、插件和 Computer Use 成为核心能力。
2. **当前共同瓶颈是可靠性，而非单纯的模型能力**：Windows/WSL 兼容、沙箱边界、OAuth/token 生命周期、资源回收、状态恢复和结果可信度问题最集中。
3. **安全控制正在从单次审批转向统一策略层**：组织策略、Hooks、插件权限、子代理和后台任务需要一致的 deny/ask/allow 机制。
4. **工程化竞争明显加剧**：PR 重点从 UI 功能转向 rollout trace、评测、模型路由、协议兼容、可观测性和长会话性能。
5. **生态仍处于快速迭代期**：多个项目同时存在迁移回归、模型目录滞后、Provider 协议差异和桌面端/CLI 能力不一致问题。

---

## 2. 各工具活跃度对比

| 工具 | Issues 数 | PR 数 | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 未给出总 Issue 数；至少 20 个重点更新 | 7 | `v2.1.309`，重点修复沙箱隔离 | 高，Desktop、Remote Control、安全与插件生态活跃 |
| **OpenAI Codex** | 至少 10 个重点更新 | 至少 10 个重点 PR | `rust-v0.164.0`，新增 `/presets`、模型/权限内联配置 | 很高，功能与底层可靠性同时推进 |
| **Gemini CLI** | 50 | 34 | `v0.67.0-nightly...`，A2A Token 与 thought signature 修复 | 很高，Issue/PR 数量均为本组最高 |
| **GitHub Copilot CLI** | 30 | 0 | `v1.0.103`，复制代码块、沙箱继承、重连完整性 | 高，但当日主要表现为 Issue 驱动 |
| **OpenCode** | 至少 10 个重点更新 | 至少 10 个重点 PR | `v1.19.4`，Bun Runtime 安全升级 | 高，v2 迁移和 Provider 修复密集 |
| **jcode** | 10 | 35 | `v0.99.1`，OpenAI 工具调用、稳定性、Muse、Venice | 极高，PR 数量显著高于 Issue |
| **pi** | 至少 10 个重点更新 | 至少 10 个重点 PR | 无新版本 | 高，集中在性能、扩展 API 和长会话 |

> 注：Issue/PR 统计口径并不完全一致；Claude Code、Codex、OpenCode、pi 等项目部分数据为“重点更新”而非全量统计，适合用于趋势比较，不宜直接作为精确排名。

### 活跃度观察

- **Gemini CLI**：全量社区活动最高，Issue 50、PR 34，且集中在 Agent 生命周期、Browser Agent、安全与评测。
- **jcode**：PR 驱动特征最明显，35 个 PR 对应 10 个 Issue，偏向快速修复、功能扩展和 Provider 适配。
- **Codex 与 OpenCode**：版本与底层 PR 并行推进，表明正在强化生产级 Agent 基础设施。
- **Copilot CLI**：当日无 PR 更新，但 30 个 Issue 集中于 MCP、权限、会话和企业网络，说明反馈压力较大。
- **Claude Code**：Issue 讨论热度高，尤其集中在 Windows Desktop、Remote Control、模型可信度和插件权限契约。

---

## 3. 共同关注的功能方向

### 3.1 会话持久化、恢复与历史一致性

多个工具都出现了会话丢失、恢复失败或历史不可见问题：

- **Claude Code**：Windows/macOS 自动更新或重启后 Remote Control 会话被归档。
- **Codex**：`read_thread` 返回不完整，更新后线程无法恢复，部分已完成回答消失。
- **Copilot CLI**：`copilot --resume` 无会话 ID 时进入错误的新会话。
- **OpenCode**：v1 到 v2 后，Global 项目中的非 Git 会话在 TUI 中不可见。
- **jcode**：会话搜索、恢复和模型切换持久化持续改进。
- **pi**：大型会话 fork、HTML 导出和滚动性能成为重点。

**共性诉求**：会话是可恢复、可迁移、可审计的长期状态，而不应只是当前进程内的临时 UI 列表。

---

### 3.2 MCP 鉴权、OAuth 与远程连接

MCP 相关问题在各项目中高度集中：

- **Copilot CLI**：access token 过期不刷新、ACP 不使用 refresh token、Windows Entra 令牌缓存为空。
- **OpenCode**：远程环境 loopback OAuth 失败、scope 缺失导致不保存 refresh token。
- **pi**：OAuth 成功后持续显示 Connecting，且无法取消。
- **Codex**：BYOK 与本地浏览器/Computer Use 组合时无法提交消息。
- **Gemini CLI**：MCP `tools/list` 可能继承过长超时，导致发现阶段阻塞。
- **OpenCode/其他工具**：还涉及 MCP server 重复启动、关闭慢和会话注册失败。

**共性诉求**：MCP 需要完整的企业级生命周期：登录、刷新、缓存、重新授权、取消、超时、降级和错误诊断。

---

### 3.3 统一权限、安全边界与插件治理

- **Claude Code**：组织级策略限制用户插件，用户插件只能收紧、不能放宽权限。
- **Copilot CLI**：Trusted folders 可能在 manual 模式下静默批准 Shell；后台 Agent 未触发 Hooks。
- **OpenCode**：外部插件工具可能绕过 permission action。
- **Codex**：Always allow、GitHub 写操作和工具权限组合存在不一致反馈。
- **Gemini CLI**：Always Approve 跨终端不保留，权限与 Agent 配置传播存在不一致。

**共性诉求**：权限必须覆盖 CLI、Desktop、IDE、插件、MCP、后台 Agent 和 Code Mode；目录信任不能等同于 Shell 执行授权。

---

### 3.4 Windows、WSL、SSH 与跨平台一致性

Windows 是最明显的共性短板：

- **Claude Code**：Git Bash 反斜杠被静默减半、桌面进程锁、窗口置顶。
- **Codex**：Computer Use `FrameArrived` 死锁、缺失 `SYSTEMROOT`、沙箱 EPERM、线程恢复失败。
- **Copilot CLI**：WSL2 Voice Runtime 段错误、Windows 登录和终端显示问题。
- **OpenCode**：embedded watcher 段错误导致所有会话中断。
- **jcode**：Windows Swarm 内存超过 10GB，SSH 快捷键按远端环境解释。
- **pi**：Windows 高负载下终端符号串入输入框。

**共性诉求**：跨平台不能只做功能兼容，还要覆盖终端编码、环境变量、原生模块、进程回收、文件路径和远程键盘协议。

---

### 3.5 后台任务、子代理与事件驱动 Agent

- **Codex**：社区提出 `monitor` 工具，希望由日志、构建、CI 和文件事件主动唤醒 Agent。
- **OpenCode**：后台 subagent 缺少取消；Location 回收会终止运行中的 shell；完成通知丢失。
- **Gemini CLI**：子代理达到 `MAX_TURNS` 后误报成功，Generalist Agent 调用子代理可能永久卡死。
- **Copilot CLI**：后台代理未触发 Hooks。
- **jcode**：Swarm 模型选择和 Agent 状态输出持续完善。

**共性诉求**：后台 Agent 必须具备明确的任务 ID、状态机、超时、取消、重试、恢复和完成通知，而不是依赖宿主对象生命周期。

---

### 3.6 模型能力、路由与成本透明度

- **Claude Code**：模型误报测试通过，工具调用用量归因不完整。
- **Codex**：模型目录不一致、容量不足、模型选择和 Provider 可用性问题。
- **OpenCode**：reasoning 能力全部显示为“不支持”，agent 模型配置被忽略。
- **Copilot CLI**：自定义 Agent 的 model/reasoning-effort 未生效。
- **jcode**：默认模型失效、故障切换静默改变模型、Provider 模型目录滞后。
- **pi**：辅助 Token 调用缺少 provider/model 归属。

**共性诉求**：模型选择、账户轮换、故障转移和能力展示必须保持确定性，并能够按模型、工具和请求解释成本。

---

### 3.7 可观测性、评测与长会话性能

- **Codex**：rollout trace、accepted history、fork、采样和认证并发。
- **Gemini CLI**：子代理轨迹、`/bug` 上下文和 Agent 评测。
- **pi**：TUI 大型会话卡顿、HTML 导出栈溢出、fork I/O 优化。
- **OpenCode**：会话压缩、checkpoint、MCP 生命周期和 Provider 协议追踪。
- **Claude Code**：工具结果可信度、用量透明和权限审计。

**共性诉求**：Agent 的行为需要可回放、可定位、可评测，而不仅是最终生成一段代码或文本。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与特点 |
|---|---|---|---|
| **Claude Code** | 沙箱执行、Desktop/CLI、Remote Control、插件与组织级权限 | 开发者、企业团队、远程协作用户 | 强安全边界和插件治理；Desktop 能力持续扩张，但平台一致性和会话可靠性仍是挑战 |
| **OpenAI Codex** | Agent 执行、Computer Use、线程/fork、托管配置、异步任务 | 个人开发者、企业自动化、复杂任务编排用户 | 产品、模型、运行时一体化；持续强化线程、追踪、托管配置和事件驱动能力 |
| **Gemini CLI** | 多 Agent、Browser Agent、A2A、Skills、IDE/工作区集成 | Google/多模型用户、需要浏览器和多 Agent 协作的开发者 | 社区迭代速度最快；Agent 生命周期、可观测性和安全修复非常密集 |
| **GitHub Copilot CLI** | GitHub/MCP/插件/Agent 组合、企业身份与开发工作流 | GitHub 用户、企业开发者和自动化团队 | 强依赖 MCP、Hooks、Entra 和 GitHub 生态；当前 OAuth、权限和恢复问题较集中 |
| **OpenCode** | 多 Provider、多模型、插件、桌面端、开放 Agent 编排 | 多模型用户、远程开发者和高度可配置用户 | Provider 兼容性和开放性突出；但 v2 迁移、后台任务、插件权限和长时稳定性压力较大 |
| **jcode** | 多 Provider、Swarm、远程连接、TUI 效率、模型切换 | 关注性能和灵活 Provider 的个人开发者 | PR 驱动、快速适配新模型；资源治理、路由确定性和 Windows 长时运行是关键风险 |
| **pi** | 轻量 TUI、扩展 API、长会话、fork、导出和终端交互 | 高级用户、扩展开发者和定制化工作流用户 | 偏底层和可编程；性能、扩展契约、终端解析和多模型兼容是主要投入方向 |

### 定位差异概括

- **Claude Code**：安全与组织治理优先。
- **Codex**：模型、运行时、线程和自动化平台的一体化。
- **Gemini CLI**：多 Agent 与 Browser Agent 的快速实验和迭代。
- **Copilot CLI**：GitHub 企业生态、MCP 和身份权限集成。
- **OpenCode/jcode**：多 Provider 和模型路由灵活性。
- **pi**：TUI、扩展和会话基础设施的可定制性。

---

## 5. 社区热度与成熟度

### 社区热度

**第一梯队：Gemini CLI、Codex、OpenCode**

- Gemini CLI 的 Issue/PR 总量最高，功能反馈和工程修复同时密集。
- Codex 的版本、PR 和问题覆盖运行时、模型、线程、桌面端和 Computer Use，议题广度最大。
- OpenCode 围绕 v2 迁移、Provider、插件和后台任务的讨论集中，版本风险较突出。

**第二梯队：Claude Code、Copilot CLI、jcode**

- Claude Code 的单个高热 Issue 互动量高，尤其是 Windows Desktop 和 Remote Control。
- Copilot CLI 以 Issue 为主，MCP、权限、企业网络和会话问题突出。
- jcode PR 数量很高，体现快速修复和 Provider 适配能力，但性能回归反馈也较集中。

**第三梯队：pi**

- 无当日新版本，但社区议题质量较高，主要围绕性能、扩展 API 和大型会话。
- 社区规模相对小，但贡献更偏向基础设施和长期技术债务。

### 成熟度判断

| 项目 | 当前成熟度信号 | 主要风险 |
|---|---|---|
| **Codex** | 功能覆盖广，底层可观测性和线程能力持续加强 | Windows、Computer Use、容量和会话一致性 |
| **Claude Code** | 沙箱和组织级权限设计成熟 | Desktop/CLI/Remote Control 跨平台状态管理 |
| **Gemini CLI** | 社区规模大、迭代快、Agent 方向明确 | 子代理可靠性、Browser Agent 和配置一致性 |
| **Copilot CLI** | GitHub 生态集成价值高 | OAuth、Hooks、权限和企业网络兼容 |
| **OpenCode** | Provider 和插件开放性高 | v2 迁移回归、后台任务和权限安全 |
| **jcode** | 功能扩展速度快、PR 活跃 | 性能、资源消耗和模型路由确定性 |
| **pi** | 适合高级定制和扩展开发 | TUI 性能、终端边界和 Provider 差异 |

总体上，**尚未有一个工具在所有维度达到统一成熟**。成熟的部分集中在权限、运行时和可观测性；不成熟的部分集中在跨平台、后台 Agent、会话恢复和 Provider 协议兼容。

---

## 6. 值得关注的趋势信号

### 趋势一：从“对话式 CLI”转向“可恢复的后台 Agent”

`monitor`、后台 subagent、Shell 生命周期、定时任务、CI/文件事件唤醒等需求表明，AI CLI 的下一阶段不是单轮问答，而是能够持续运行、接受事件驱动并可恢复的 Agent。

**参考价值**：评估 CLI 时，应重点测试任务取消、超时、重启恢复、事件唤醒和完成通知，而不仅是首次响应速度。

---

### 趋势二：权限系统正在成为生态竞争核心

各项目都在修复“可信目录、插件、后台代理、子代理、Code Mode 可能绕过审批”的问题。安全模型将从简单的命令确认，演进为：

- 组织策略；
- 用户策略；
- 插件声明；
- Agent 能力；
- MCP 工具权限；
- Hooks；
- 运行时沙箱。

**参考价值**：企业部署应把“所有执行路径是否继承同一策略”作为验收条件，而不是只测试主 CLI 路径。

---

### 趋势三：MCP 已成为事实上的工具协议，但生命周期管理尚未成熟

MCP 登录、token 刷新、远程回调、服务发现超时、server 重复启动和连接状态显示等问题反复出现。

**参考价值**：MCP 集成应具备完整的认证状态机、网络降级、超时、取消、重连和服务健康检查，不能只验证“首次连接成功”。

---

### 趋势四：Provider 碎片化正在成为隐性维护成本

OpenCode、jcode、pi 和 Codex 都暴露了类似问题：

- tool call ID 冲突；
- reasoning 能力展示不一致；
- WebSocket response chain 不兼容；
- NUL 字节或图片块污染历史；
- 模型目录与 Provider 实际能力不同步；
- 模型切换和故障转移改变用户选择。

**参考价值**：技术选型时，应同时评估 Provider 兼容矩阵、协议回归测试、模型能力元数据和故障切换语义。

---

### 趋势五：可观测性从“日志”升级为“Agent 运行基础设施”

rollout trace、accepted conversation history、子代理轨迹、Token 归属、工具状态树和 `/bug` 上下文，都在解决同一个问题：无法准确回答“Agent 做了什么、为什么这样做、结果是否可信”。

**参考价值**：生产环境应把会话轨迹、工具调用、模型路由、权限决策和安全拦截统一记录，并支持可回放评测。

---

### 趋势六：性能问题开始影响生产可用性

jcode 的 Windows Swarm 内存问题、pi 的长会话 TUI 卡顿、Codex 的遗留进程、OpenCode 的后台 shell 回收，说明 Agent 工具的性能瓶颈已经不只是启动速度，而是：

- 长会话渲染；
- 子进程回收；
- 大目录扫描；
- 历史数据复制；
- 多代理并发；
- 资源隔离和限流。

**参考价值**：应建立启动、首 token、长会话、工具调用、并发 Agent 和异常退出后的资源基准，而不能只测试短会话。

---

### 趋势七：跨平台兼容性仍是采用落地的主要阻力

Windows、WSL、Wayland、SSH、企业代理和 Linux 原生模块问题横跨多个项目。其根因通常包括：

- shell 编码和路径转换差异；
- 环境变量裁剪；
- 原生 watcher/语音模块崩溃；
- 快捷键和终端转义序列处理；
- 远程客户端与远端 TUI 的状态边界不一致。

**参考价值**：跨平台支持应作为发布门禁，至少覆盖 Windows Terminal、WSL2、PowerShell、Git Bash、SSH、Wayland 和企业代理环境。

---

## 结论与决策建议

对于技术决策者，建议按以下维度评估：

1. **安全优先**：选择具备统一沙箱、组织策略、Hooks 和插件权限收敛能力的工具，重点审查 Claude Code、Codex、Copilot CLI。
2. **长期任务优先**：重点考察后台任务状态机、取消、重试、事件唤醒和会话恢复，Codex、Gemini CLI 和 OpenCode 的方向较明确。
3. **多模型和多 Provider 优先**：重点验证路由确定性、能力元数据、协议兼容和故障切换，OpenCode、jcode、pi 更值得测试。
4. **企业 MCP 集成优先**：不要只看 MCP 是否能调用，还应验证 OAuth 刷新、跨进程缓存、远程回调、失败降级和审计。
5. **Windows/远程开发环境**：建议先做小规模真实环境回归，尤其关注长会话、Shell、子进程、原生 watcher、快捷键和代理网络。

总体判断：**2026 年 AI CLI 的竞争重点正在从“谁的模型回答更好”转向“谁能让 Agent 更安全、更稳定、更可恢复、更容易接入真实工程系统”。**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：截至 2026-10-23。  
> 注意：PR 列表中的评论数未提供具体数值，且部分条目显示为 `undefined`，因此以下“热度”主要依据社区关注、问题关联、更新活跃度和近期讨论判断，不能等同于严格的评论数排名。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 热点与价值 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder：兼容 MCP 2.x 与自定义请求头](https://github.com/anthropics/skills/pull/1742) | 修复 `mcp>=2.0` 中客户端重命名、HTTP Header 配置方式变化等兼容性问题，直接影响 MCP 服务器连接和真实工具调用。相关 issue [#1668](https://github.com/anthropics/skills/issues/1668) 仍说明评测链路存在较大可靠性风险。 | Open |
| 2 | [skill-creator：触发评测隔离、Windows 与运行时异常修复](https://github.com/anthropics/skills/pull/1298) | 解决触发率误判、Windows 子进程兼容、并发探测互相干扰，以及运行时错误被误判为“非触发”等核心问题，是完善 Skill 自动评测体系的关键修复。 | Open |
| 3 | [skill-creator：正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997) | 修复引号、转义字符和续行导致的元数据解析偏差，确保评测和描述优化读取到与 `SKILL.md` 一致的真实描述。近期更新活跃，直接关系到 Skill 触发质量。 | Open |
| 4 | [docx：LibreOffice 超时检测与输出验证](https://github.com/anthropics/skills/pull/1792) | 不再把 LibreOffice 超时误报为成功，并检查输出 DOCX 是否仍含修订标记，提升文档自动化流程的可验证性和可靠性。 | Open |
| 5 | [webapp-testing：修复元素发现逻辑](https://github.com/anthropics/skills/pull/1976) | 修正 textarea 和 select 被错误显示为普通 `text` 的问题，体现社区对前端测试中真实页面语义和稳定断言的关注。 | Open |
| 6 | [webapp-testing：移除 `shell=True` 命令注入风险](https://github.com/anthropics/skills/pull/1980) | 修复测试服务器启动脚本的 CWE-78 命令注入风险，属于安全性较高的基础设施修复；也是近期最值得关注的安全类 PR 之一。 | Open |
| 7 | [document-typography：生成文档排版质量控制](https://github.com/anthropics/skills/pull/514) | 针对孤行、寡行、标题落底、编号错位等 AI 文档常见问题，强调输出后的排版质量检查，而不是仅关注内容生成。 | Open |
| 8 | [skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | 为 Skills 提供质量评分和安全分析，是“元 Skill”方向的重要尝试，覆盖结构、文档、可执行性、安全性等方面。 | Open |

### 热门特征

- **Skill 本身与 Skill 基础设施并重**：热门内容不只是新增领域能力，也包括评测、触发、解析、打包和安全修复。
- **可靠性诉求明显增强**：多个 PR 关注超时检测、失败可见性、兼容性、Windows 行为和输出验证。
- **文档类 Skill 持续受到关注**：DOCX、PDF、ODT、排版质量和文档生成验证均有活跃 PR 或 Issue。
- **MCP 生态是重要增长点**：MCP 客户端兼容性、真实服务器评测和工具调用错误处理直接影响 Claude Code 的扩展能力。

---

## 2. 社区需求趋势

### 2.1 Skill 评测与触发质量

这是目前最集中的基础设施需求之一。

- [run_eval.py 触发率为 0% 的问题](https://github.com/anthropics/skills/issues/556)：用户反馈通过 `claude -p` 批量验证时，Skill 或 command 无法稳定触发。
- [skill-creator 触发评测异常汇总](https://github.com/anthropics/skills/issues/1383)：涉及目录布局、基准比较、Delta 方向、Windows 兼容和 Skill shadowing。
- [触发评测隔离与异常处理 PR](https://github.com/anthropics/skills/pull/1298)
- [YAML frontmatter 解析修复 PR](https://github.com/anthropics/skills/pull/1997)

**社区期待**：评测工具应准确反映真实 Claude 行为，避免将“未触发”“运行失败”和“工具报错”混为一谈，并支持跨平台、并发和异常场景。

### 2.2 Skill 质量、安全与治理

- [社区 Skill 使用 `anthropic/` 命名空间造成信任边界问题](https://github.com/anthropics/skills/issues/492)
- [Skill 安全分析器与质量分析器 PR](https://github.com/anthropics/skills/pull/83)
- [Agent Governance Skill 提案](https://github.com/anthropics/skills/issues/412)
- [Reasoning Quality Gate Pipeline 提案](https://github.com/anthropics/skills/issues/1385)
- [skill-creator eval-viewer 的 XSS 风险](https://github.com/anthropics/skills/issues/1394)
- [webapp-testing 命令注入风险](https://github.com/anthropics/skills/pull/1980)

**社区期待**：从“Skill 能否运行”扩展到“Skill 是否可信、是否安全、是否适合企业部署”，包括权限控制、来源认证、静态审计、运行审计和供应链治理。

### 2.3 企业级组织共享与管理

- [支持组织范围内共享 Skill](https://github.com/anthropics/skills/issues/228)
- [所有用户 Skill 消失的故障反馈](https://github.com/anthropics/skills/issues/62)
- [document-skills 与 example-skills 内容重复](https://github.com/anthropics/skills/issues/189)

**社区期待**：建立统一的 Skill 注册表、组织级库、权限管理和版本分发机制，避免手动传递 `.skill` 文件、重复安装和技能意外丢失。

### 2.4 文档、演示和多媒体生成

- [Markdown 转视频与音频 Skill](https://github.com/anthropics/skills/pull/1703)
- [文档排版质量控制](https://github.com/anthropics/skills/pull/514)
- [ODT 创建、模板填充与 HTML 转换](https://github.com/anthropics/skills/pull/486)
- [DOCX 修订处理与输出验证](https://github.com/anthropics/skills/pull/1792)
- [DOCX XML 合并问题](https://github.com/anthropics/skills/issues/2018)

**社区期待**：文档能力要从“生成内容”扩展到“生成可交付文件”，覆盖版式、模板、修订、格式转换、音视频旁白和最终质量检查。

### 2.5 专业领域与垂直行业 Skill

- [Notion 规格到实现计划](https://github.com/anthropics/skills/pull/1245)
- [智能合约审计与链上证明](https://github.com/anthropics/skills/pull/1771)
- [SCNet HPC 与 Slurm 工作流](https://github.com/anthropics/skills/pull/1615)
- [Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)

**社区期待**：出现更多具备领域知识、工具调用闭环和可验证结果的 Skill，而不只是通用提示词包装。

---

## 3. 高潜力待合并 Skills

以下 PR 尚未合并，且覆盖近期需求明显、落地价值较高：

1. **[#1245 Notion Spec to Implementation / Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245)**  
   将产品规格转换为可执行任务、验收标准和进度跟踪，具备较强的工作流自动化价值。

2. **[#1703 md2video-audio](https://github.com/anthropics/skills/pull/1703)**  
   将 Markdown 转换为带语音旁白的视频，连接文档、知识传播和多媒体生成需求，应用场景广。

3. **[#1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)**  
   面向 Solidity/Rust 智能合约的静态分析与链上审计证明，体现 Web3 垂直 Skill 的增长。

4. **[#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615)**  
   面向真实 HPC 集群的 SSH、Slurm、资源发现和任务提交，专业性和可操作性较强。

5. **[#83 Skill Quality Analyzer / Security Analyzer](https://github.com/anthropics/skills/pull/83)**  
   具备较强的平台级价值，可用于 Skill 发布前审查、 Marketplace 治理和安全评估。

6. **[#514 document-typography](https://github.com/anthropics/skills/pull/514)**  
   解决 AI 文档常见排版缺陷，适合纳入通用文档生成流水线。

7. **[#525 Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)**  
   覆盖开发、调试、无头运行、帧检查和状态验证，体现了“Skill + 测试证据”的发展方向。

8. **[#1792 DOCX 输出验证修复](https://github.com/anthropics/skills/pull/1792)**  
   虽不是新 Skill，但直接增强现有文档 Skill 的可靠性，适合优先合入。

### 合并优先级判断

- **最高优先级**：[#1298](https://github.com/anthropics/skills/pull/1298)、[#1997](https://github.com/anthropics/skills/pull/1997)、[#1980](https://github.com/anthropics/skills/pull/1980)、[#1792](https://github.com/anthropics/skills/pull/1792)  
  这些修复会直接影响评测、安全和现有 Skill 的可用性。

- **高应用潜力**：[#1245](https://github.com/anthropics/skills/pull/1245)、[#1703](https://github.com/anthropics/skills/pull/1703)、[#1615](https://github.com/anthropics/skills/pull/1615)  
  能显著拓展工作流、媒体生成和 HPC 等使用场景。

- **生态基础设施潜力**：[#83](https://github.com/anthropics/skills/pull/83)  
  一旦成熟，可成为 Skill 发布、审核和安全治理的公共基础设施。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是让 Claude Code Skills 从“能生成结果的提示词集合”，升级为可发现、可评测、可验证、可审计、可治理且能安全组织化分发的软件生态。**

具体表现为四条主线：

1. **提高触发和评测准确性**；
2. **建立质量、安全与供应链治理**；
3. **补齐企业共享、版本管理和分发能力**；
4. **在文档、MCP、HPC、Web3 等专业场景中提供端到端闭环。**

此外，Issues 中最值得关注的长期风险是 [社区 Skill 冒用官方 `anthropic/` 命名空间的问题](https://github.com/anthropics/skills/issues/492)。随着第三方 Skill 数量增长，来源认证、命名空间隔离和安装前安全审查将比单纯增加 Skill 数量更加重要。

---

# Claude Code 社区动态日报

**日期：2026-10-23**  
**数据范围：GitHub `anthropics/claude-code` 过去 24 小时更新**

## 1. 今日速览

- **v2.1.309 发布**，重点修复 macOS/Linux 沙箱 Bash 命令在执行前错误加载 Shell 启动文件，以及 macOS 沙箱通过符号链接访问路径时 `denyWrite` 规则失效等安全问题。
- 社区讨论集中在 **Desktop 稳定性、Windows Bash 兼容性、Remote Control 会话恢复、模型行为可信度与用量透明度**。
- 过去 24 小时更新的 Issue 中，Windows 桌面窗口问题、移动端定时任务、桌面端分支选择、TUI 可定制性等需求较集中。

---

## 2. 版本发布

### v2.1.309

本次版本主要围绕沙箱执行边界进行修复：

- 修复 macOS 和 Linux 上沙箱 Bash 命令在每次执行前加载 Shell 启动文件的问题，降低启动文件绕过沙箱隔离的风险。
- 修复 macOS 沙箱中 `denyWrite` glob 模式通过符号链接访问目录时，未在真实路径生效的问题。
- Release 信息还包含其他沙箱相关修复，完整内容应以该版本发布说明为准。

**版本链接：**  
https://github.com/anthropics/claude-code/releases/tag/v2.1.309

---

## 3. 社区热点 Issues

> 以下综合评论数、点赞数、问题影响范围及当前状态筛选。已关闭 Issue 仍可能反映近期用户关注点。

### 1. Windows 桌面端无法重新启动：遗留进程文件锁

- **Issue：** [#42776](https://github.com/anthropics/claude-code/issues/42776)
- **状态：** CLOSED
- **重点：** Windows Desktop 重启时可能因遗留进程或文件锁导致无法重新启动。
- **社区反应：** 208 条评论、98 个点赞，说明该问题对 Windows 桌面端使用和自动更新流程影响明显。
- **关注价值：** 桌面端进程生命周期、崩溃恢复和更新机制是生产级使用的基础能力。

### 2. Windows 11 桌面端窗口始终置顶且无法关闭

- **Issue：** [#85891](https://github.com/anthropics/claude-code/issues/85891)
- **状态：** CLOSED
- **重点：** Claude Desktop 在 Windows 11 上始终位于其他窗口之上，应用内没有关闭置顶行为的设置。
- **社区反应：** 123 条评论、291 个点赞，是本批 Issue 中热度最高的问题之一。
- **关注价值：** 涉及窗口行为、跨平台一致性和桌面端可配置性。

### 3. Windows Git Bash 反斜杠被静默减半

- **Issue：** [#85856](https://github.com/anthropics/claude-code/issues/85856)
- **状态：** OPEN
- **重点：** Windows 下 Bash 工具可能因 MSVCRT 与 MSYS2 命令行编码差异，将反斜杠数量静默削减，导致路径、正则和转义命令执行异常。
- **社区反应：** 15 条评论、11 个点赞。
- **关注价值：** Windows 开发者跨终端运行时最容易遭遇此类问题，可能造成命令未报错但执行目标错误。

### 4. Desktop Code 标签页的 next-step 框可能提前结束对话

- **Issue：** [#102132](https://github.com/anthropics/claude-code/issues/102132)
- **状态：** OPEN
- **重点：** 当模型调用 `wrap_up` 并带有 `ask` 和 `actions` 时，Desktop Code 标签页的 next-step 框可能在回复写入前就结束当前 turn。
- **社区反应：** 20 条评论、27 个点赞。
- **关注价值：** 涉及模型工具调用、桌面端状态机和用户确认流程的协调，可能导致交互式工作流中断。

### 5. Windows 桌面端 Remote Control 重启后会话被归档

- **Issue：** [#100114](https://github.com/anthropics/claude-code/issues/100114)
- **状态：** OPEN
- **重点：** Windows 桌面端更新或重启后，已有 Remote Control 会话无法自动恢复，手机端会将这些会话标记为已归档。
- **社区反应：** 6 条评论、3 个点赞。
- **关注价值：** 远程移动办公、后台任务持续运行和会话恢复是 Desktop 与 Mobile 协同的关键体验。

### 6. macOS 自动更新重启同样会归档 Remote Control 会话

- **Issue：** [#103005](https://github.com/anthropics/claude-code/issues/103005)
- **状态：** OPEN
- **重点：** macOS 自动更新触发应用重启时，正在使用的 Remote Control Code 会话被归档，重启后不会自动重新附加。
- **社区反应：** 3 条评论、2 个点赞。
- **关注价值：** 与 Windows 版本形成跨平台共性问题，说明自动更新和会话持久化仍缺乏一致性。

### 7. Desktop Code 标签页的 next-step 回答按钮在新 turn 开始后仍可点击

- **Issue：** [#102342](https://github.com/anthropics/claude-code/issues/102342)
- **状态：** OPEN
- **重点：** 新 turn 已开始后，旧 next-step 框的答案按钮仍可点击，点击后消息只会进入队列，且可能无法送达 Claude。
- **社区反应：** 2 条评论。
- **关注价值：** 反映桌面端 UI 状态、队列机制和请求生命周期之间的同步问题。

### 8. Desktop Projects/Remote Control 的 `/` 自动补全缺少用户技能和插件命令

- **Issue：** [#97936](https://github.com/anthropics/claude-code/issues/97936)
- **状态：** OPEN
- **重点：** `~/.claude/skills` 中的用户技能及插件命令可以手动完整输入并执行，但不会出现在 `/` 自动补全中。
- **社区反应：** 3 条评论；相关类似问题曾被关闭或标记为 stale。
- **关注价值：** 直接影响技能、插件和可复用工作流的发现效率，也是 CLI 与 Desktop 能力一致性的体现。

### 9. 模型误报“Tests pass”：可能使用过期或管道化运行结果

- **Issue：** [#104504](https://github.com/anthropics/claude-code/issues/104504)
- **状态：** OPEN
- **重点：** Issue 报告称，模型在部分会话中可能依据过期或管道化执行结果报告测试通过；报告者称该现象在 150 个会话中进行了测量。
- **社区反应：** 新近创建，暂无评论。
- **关注价值：** 涉及模型对工具结果的验证、测试状态判断和工程可信度，是比单纯 UI 问题更关键的模型行为风险。

### 10. Windows Desktop 会话无输出后被安全分类器停止

- **Issue：** [#104463](https://github.com/anthropics/claude-code/issues/104463)
- **状态：** OPEN
- **重点：** 使用 Remote Control 的 Windows Desktop 会话中，多条消息长时间无输出，最终响应被安全分类器停止。
- **社区反应：** 1 条评论。
- **关注价值：** 远程会话、模型安全策略和无响应问题叠加后，用户难以判断阻塞发生在连接、模型还是安全系统。

### 其他值得留意的问题

- [Desktop Projects 技能与插件命令补全缺失](https://github.com/anthropics/claude-code/issues/97936)
- [VS Code diff 视图图标显示为 tofu 方框](https://github.com/anthropics/claude-code/issues/73069)
- [macOS 登录失败并提示无法验证浏览器](https://github.com/anthropics/claude-code/issues/103788)
- [Desktop Code 内置 ccd_turn 工具计入套餐限制但未出现在 /usage 归因中](https://github.com/anthropics/claude-code/issues/103018)

---

## 4. 重要 PR 进展

过去 24 小时更新的 PR 共 7 条，且均已关闭。以下 PR 主要围绕**插件系统声明、默认安全策略、UI 渲染和插件隔离**展开。

### 1. 为 `process.run` 和 `fs.list` 补充声明字段

- **PR：** [#97293](https://github.com/anthropics/claude-code/pull/97293)
- **内容：** 在 npm CLI 实际提供字段后，为 `process.run` 增加标准输出/错误截断标记，并为 `fs.list` 增加 `mtimeMs`。
- **意义：** 提升插件声明与真实运行时能力之间的准确性，避免类型声明先于实际实现。

### 2. 让会话记录跨用户层级继续写入

- **PR：** [#97334](https://github.com/anthropics/claude-code/pull/97334)
- **内容：** 调整安全默认策略，使对话保留的记录不因用户层级而被提前截断。
- **意义：** 解决插件或安全层在不同权限层级下丢失上下文的问题。

### 3. 让 collector 记录跨用户层级继续写入

- **PR：** [#97688](https://github.com/anthropics/claude-code/pull/97688)
- **内容：** 使安全策略收集器记录持续写入，覆盖用户层级的默认限制。
- **意义：** 强化组织级安全策略的连续性，避免策略执行记录被提前截断。

### 4. `/diff` 面板打开时显示 Toast

- **PR：** [#99118](https://github.com/anthropics/claude-code/pull/99118)
- **内容：** 调整 `/diff` 面板的 Toast 持有策略，使其他插件的通知在面板打开期间也能显示。
- **意义：** 改善插件通知的可见性和交互一致性。

### 5. 安全默认策略只能收紧、不能放宽上层规则

- **PR：** [#99137](https://github.com/anthropics/claude-code/pull/99137)
- **内容：** 用户插件不能取消 deny/ask 规则，也不能修改组织策略固定变量，只能进一步收紧权限。
- **意义：** 防止用户级插件绕过组织级安全限制，体现权限策略的单向收敛设计。

### 6. 无可绘制内容时保留 `/diff` 面板

- **PR：** [#99141](https://github.com/anthropics/claude-code/pull/99141)
- **内容：** 即使当前没有组件可以绘制内容，`/diff` 仍保留面板；一旦有可绘制组件，面板即可显示。
- **意义：** 减少插件加载顺序或能力检测导致的 UI 状态不稳定。

### 7. 组织级工具权限上限覆盖用户插件

- **PR：** [#99540](https://github.com/anthropics/claude-code/pull/99540)
- **内容：** 组织策略对工具施加的限制在用户安装插件后继续生效，并补充异常处理。
- **意义：** 确保连接器或插件无法绕过组织要求的审批、拒绝或权限上限。

---

## 5. 功能需求趋势

### 5.1 Desktop 与 CLI 能力对齐

社区持续要求 Desktop 具备或完善 CLI 已有能力，包括：

- 自定义主题和强调色
- 用户技能、插件命令的发现与自动补全
- 隐藏或调整桌面端信息面板
- 更好的会话管理和侧边栏显示控制

相关 Issue：

- [Desktop 自定义主题](https://github.com/anthropics/claude-code/issues/79305)
- [Desktop `/` 补全缺失技能与插件命令](https://github.com/anthropics/claude-code/issues/97936)
- [Environment 面板无法隐藏](https://github.com/anthropics/claude-code/issues/102233)
- [侧边栏每组显示数量设置](https://github.com/anthropics/claude-code/issues/104506)

### 5.2 Remote Control 会话可靠性

多个平台出现同一类问题：应用更新、重启或异常退出后，Remote Control 会话被归档或无法恢复。

重点需求包括：

- 自动恢复已有远程会话
- 避免移动端将桌面会话错误归档
- 保持跨桌面端与移动端的状态一致

相关 Issue：

- [Windows Remote Control 重启后归档](https://github.com/anthropics/claude-code/issues/100114)
- [macOS 自动更新后 Remote Control 会话归档](https://github.com/anthropics/claude-code/issues/103005)

### 5.3 Windows 跨平台兼容性

Windows 相关问题覆盖：

- Bash/MSYS2 编码转换
- 桌面端窗口置顶
- 进程锁和重启
- Remote Control
- 新 UI 交互状态

这表明 Windows 仍是最明显的跨平台体验短板之一。

### 5.4 移动端任务调度

社区希望 iOS 和 Android 支持与桌面端类似的定时会话或 routines，以便：

- 定期运行 Claude Code 任务
- 管理周期性自动化任务
- 在移动端查看和启动计划任务

相关 Issue：  
[Mobile scheduled sessions](https://github.com/anthropics/claude-code/issues/104507)

### 5.5 模型与模型行为的可验证性

社区关注的不只是模型能否完成任务，还包括：

- 能否避免误报测试通过
- 安全分类器是否会误伤正常的 reasoning 或开发讨论
- 无输出时是否能够诊断
- 用量是否准确归因到具体工具和请求

相关 Issue：

- [模型报告过期测试结果](https://github.com/anthropics/claude-code/issues/104504)
- [安全分类器误报正常推理内容](https://github.com/anthropics/claude-code/issues/104490)
- [无响应会话最终被安全分类器停止](https://github.com/anthropics/claude-code/issues/104463)
- [Desktop ccd_turn 用量归因不完整](https://github.com/anthropics/claude-code/issues/103018)

### 5.6 TUI 和插件扩展能力

TUI 社区希望进一步增强：

- 回合结束语的自定义
- `/btw` 回答写入会话记录
- Mod 对 `Thought for Ns` 行进行隐藏、替换或渲染

相关 Issue：

- [自定义回合完成提示语](https://github.com/anthropics/claude-code/issues/52420)
- [持久化 `/btw` 回答](https://github.com/anthropics/claude-code/issues/104505)
- [Mod 无法处理 Thought 行](https://github.com/anthropics/claude-code/issues/104503)

---

## 6. 开发者关注点

### 6.1 沙箱隔离必须覆盖 Shell 启动路径

v2.1.309 的修复表明，开发者特别关注：

- Shell 初始化文件是否在沙箱外执行
- 符号链接是否绕过写入限制
- 沙箱规则是否作用于真实路径而非仅作用于访问路径

对依赖 Bash 工具处理私有代码、凭据和敏感文件的团队，这类修复优先级很高。

### 6.2 Windows Bash 命令需要避免“静默错误”

反斜杠被减半的问题尤其危险，因为命令可能：

- 没有显式报错
- 产生错误路径
- 破坏正则表达式
- 造成文件删除、写入或执行目标偏差

建议开发者在 Windows 环境优先验证 Git Bash、MSYS2、PowerShell 和原生终端中的路径与转义行为。

### 6.3 会话持久化和自动更新不能破坏工作流

Remote Control 会话归档问题反映出，桌面端更新、进程重启和移动端同步之间仍缺少可靠的状态持久化设计。对于长时间运行的任务，这是比界面功能更优先的稳定性问题。

### 6.4 模型报告需要“可验证而非自信”

社区对模型误报测试通过和分类器误报的反馈，体现出开发者希望 Claude Code：

- 明确区分当前运行结果与历史结果
- 对管道化、缓存或异步测试结果进行核验
- 在安全拦截时提供更具体、可操作的诊断
- 避免把不确定状态包装成确定成功

### 6.5 用量与限制需要透明可解释

Desktop 内置工具计入套餐限制但无法在 `/usage` 中完整归因，会降低用户对配额系统的信任。未来应区分：

- 实际模型调用成本
- 桌面端辅助工具调用
- 任务列表、next-step 等内部控制调用
- 连接器和插件产生的额外请求

### 6.6 插件生态需要更稳定的兼容契约

PR 中多次围绕“声明字段何时可用”“策略如何跨层级继承”“UI 组件何时可绘制”进行条件化处理，说明插件扩展点仍处于快速演进阶段。插件开发者需要关注：

- 以已发布的 CLI 能力为准，而非仅依赖类型声明
- 组织级安全策略不可被用户插件放宽
- UI 插件之间的加载顺序和 Toast 行为
- 插件权限与组织策略的叠加规则

**总体来看，今日社区的主线是：Desktop 基础体验继续完善，但 Windows 兼容性、自动更新后的会话恢复、模型结果可验证性和插件权限契约，仍是影响 Claude Code 规模化使用的关键问题。**

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-23**

## 今日速览

- 今日发布稳定版 `rust-v0.164.0`，重点加入 `/presets` 快捷提示词与斜杠命令，以及更直接的内联模型和权限配置能力。
- 社区讨论高度集中在 Windows Desktop 的 Computer Use、沙箱、线程恢复与模型容量错误；同时，桌面端会话丢失、模型选择器和云端代理连通性等问题持续受到关注。
- PR 侧主要围绕托管配置、环境钩子、线程采样与 fork、认证并发及追踪一致性推进底层可靠性建设。

---

## 版本发布

### rust-v0.164.0

- 新增 `/presets`：支持在 10 个编号槽位中保存可复用的提示词和斜杠命令，并通过键盘菜单快速访问。  
  [Release / PR #54380](https://github.com/openai/codex/pull/54380) · [PR #54381](https://github.com/openai/codex/pull/54381)
- 支持通过内联 `/model` 和 `/permissions` 参数直接设置模型、推理强度、速度及权限配置。  
  [PR #54378](https://github.com/openai/codex/pull/54378) · [PR #54383](https://github.com/openai/codex/pull/54383)
- Release notes 还包含预览能力更新，完整细节以发布页为准。
- 同期出现 `0.164.0-alpha.11.1` 与 `0.164.0-alpha.12` 预发布版本，供测试和反馈使用。  
  [rust-v0.164.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.12) · [rust-v0.164.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11.1)

---

## 社区热点 Issues

### 1. Chrome 插件、浏览器与 Computer Use 拒绝操作部分网站

该问题影响浏览器自动化和电脑操作的基础可用性，可能导致 Agent 在特定站点上无法加载、点击或完成任务。Issue 持续更新，评论数达到 54，获得 19 个赞，说明用户对“安全检查”与实际兼容性之间的冲突较为关注。  
[Issue #29343](https://github.com/openai/codex/issues/29343)

### 2. Windows 10 Computer Use 在 `FrameArrived` 等待 Bitmap 转换时死锁

问题直接关系到桌面控制的核心链路：截图采集可能阻塞，导致自动化任务无法继续。50 条评论显示该问题具有较高复现率和影响力，但点赞较少，可能反映其影响集中在特定 Windows 环境。  
[Issue #35446](https://github.com/openai/codex/issues/35446)

### 3. BYOK 模式下 Work mode 无法提交消息

当用户使用自定义模型或 API Key，并启用本地浏览器/Computer Use 工具时，消息提交可能被阻断。该问题将 BYOK、工作模式和本地工具链联系起来，对企业及自定义模型用户影响明显；38 条评论、27 个赞。  
[Issue #54841](https://github.com/openai/codex/issues/54841)

### 4. Windows App 的 `read_thread` 仅返回 ChatGPT 内容引用

已完成回复在读取线程时只返回 `chatgpt-content-reference`，导致客户端无法稳定获取完整答案正文。这属于应用协议或内容存储层问题，可能影响历史记录、上下文恢复和第三方界面集成。  
[Issue #50329](https://github.com/openai/codex/issues/50329)

### 5. 提议增加 Agent 可调用的后台 `monitor` 工具

用户希望 Codex 能被日志、文件、构建和 CI 等后台事件主动唤醒，而不是持续轮询或等待下一轮对话。该需求直接对应 Agent 的异步自动化能力，21 条评论、8 个赞，体现社区对事件驱动式 Agent 的兴趣。  
[Issue #29922](https://github.com/openai/codex/issues/29922)

### 6. macOS 统一 ChatGPT/Codex 应用后，Option+Space Quick Chat 消失

桌面应用整合导致原有快捷键和工作流回退，影响 macOS 用户的日常交互效率。18 条评论、42 个赞，表明这是用户感知明显、但修复边界可能涉及系统快捷键注册与跨应用集成的问题。  
[Issue #31925](https://github.com/openai/codex/issues/31925)

### 7. Windows Desktop 遗留 Node/MCP 辅助进程，导致内存持续增长

长期运行的 Agent、子任务或 MCP 工具可能留下 Node、MCP 和辅助进程，逐步造成内存压力和系统无响应。该问题与稳定性、资源回收和后台进程生命周期管理直接相关。  
[Issue #29079](https://github.com/openai/codex/issues/29079)

### 8. Windows 桌面端 Cloudflare 403，项目和已有聊天无法加载

浏览器可用但桌面端无法访问项目或聊天，问题可能涉及本地注册、Cloudflare 信任边界、网络路径或桌面端认证。已有用户补充了本地注册阻塞线索，但 Cloudflare 相关故障仍未完全解决。  
[Issue #53515](https://github.com/openai/codex/issues/53515)

### 9. Windows 更新后线程无法恢复：MXC `process.env` 缺少 `SYSTEMROOT`

升级后，现有本地聊天在加载 `AGENTS.md` 前即失败，疑似沙箱辅助进程使用过度裁剪的环境变量。该问题会导致旧会话不可恢复，并可能影响依赖系统环境变量的 Windows 工具链。  
[Issue #56264](https://github.com/openai/codex/issues/56264)

### 10. “所有模型容量已满”错误持续超过两天

多名用户报告 ChatGPT、Work 和 Codex 请求均出现 `Selected model is at capacity`，而 API provider 或账户其他路径仍可能可用。相关 Issue 获得了集中更新，但目前评论热度相对有限，反映容量/路由问题可能正在快速扩散。  
[Issue #56324](https://github.com/openai/codex/issues/56324)

---

## 重要 PR 进展

### 1. Guardian 审查超时可配置

新增 `auto_review.timeout_ms`，用于控制 Guardian 总体审查预算，并覆盖初始化与重试阶段；默认仍为 90 秒，设置为 `0` 可关闭审查超时，同时保留取消和重试能力。  
[PR #56371](https://github.com/openai/codex/pull/56371)

### 2. `thread/sample` 支持指定线程来源

为采样请求增加可选 `threadSource`，并将其应用到临时 fork；未指定时继续使用 `thread_sample`，有助于测试、调试和更精细的采样归因。  
[PR #56364](https://github.com/openai/codex/pull/56364)

### 3. 实验性 attached thread fork

`thread/fork` 增加 `attachToSource`，可创建附着于源线程的 fork，而无需发送 `thread/started`。该功能要求本地存储，不支持 `ephemeral` 或 `deferGoalContinuation`，并默认从普通列表中隐藏。  
[PR #56351](https://github.com/openai/codex/pull/56351)

### 4. 环境钩子由其所属 executor 执行

环境级钩子将使用各自所有者的 shell、工作目录、shell 环境策略和托管网络策略执行，避免不同环境之间配置串用。  
[PR #56343](https://github.com/openai/codex/pull/56343)

### 5. rollout trace 中跨请求快照匹配图片内容

通过对非文本内容进行规范化哈希，解决重复图片在不同请求载荷中使用相同 call ID 时可能触发的回放错误，降低追踪重放失败风险。  
[PR #56342](https://github.com/openai/codex/pull/56342)

### 6. Agent 消息唤醒遵循中断与 Plan mode

当用户中断任务或切换到 Plan mode 后，待处理的 Agent 消息唤醒会重新校验状态，避免旧唤醒继续消费队列消息。  
[PR #56330](https://github.com/openai/codex/pull/56330)

### 7. 串行化托管 ChatGPT Token 刷新

针对多个 Codex 进程共享同一 `CODEX_HOME` 的场景，串行执行托管 ChatGPT refresh-token 兑换，并让等待进程复用已刷新并持久化的凭据，降低并发刷新导致的凭据竞争。  
[PR #24663](https://github.com/openai/codex/pull/24663)

### 8. 自定义配置服务器支持托管配置加载器

当配置了 `config_server` 时，使用自定义配置源；否则沿用 ChatGPT bundle source。自定义 bundle 从 `<base_url>/codex/config/bundle` 获取，并禁止重定向和请求日志。  
[PR #56314](https://github.com/openai/codex/pull/56314)

### 9. 模型目录覆盖历史、Notes 与上下文工具

从模型目录读取 `history`、`notes`、`new_context` 和 `get_context_remaining` 的工具描述及参数 schema，使工具能力可以随模型目录变化。  
[PR #56313](https://github.com/openai/codex/pull/56313)

### 10. 在 rollout trace 中记录已接受的对话历史

区分模型生成的候选输出与真正进入对话历史的条目，避免把被丢弃的尝试误记为有效历史，同时补足轮次结束时最终输出的追踪。  
[PR #56312](https://github.com/openai/codex/pull/56312)

---

## 功能需求趋势

### 1. Windows 桌面端稳定性与 Computer Use

Windows 10/11 下的截图超时、`FrameArrived` 死锁、沙箱 EPERM、环境变量缺失和线程恢复失败形成集中反馈，表明 Windows 仍是当前最明显的体验短板。  
[Issue #35446](https://github.com/openai/codex/issues/35446) · [Issue #56264](https://github.com/openai/codex/issues/56264) · [Issue #52754](https://github.com/openai/codex/issues/52754)

### 2. 浏览器与本地电脑操作可靠性

用户关注站点兼容、安全检查误判、Computer Use 无法操作特定页面，以及 BYOK 与本地浏览器工具组合时的消息提交阻断。  
[Issue #29343](https://github.com/openai/codex/issues/29343) · [Issue #54841](https://github.com/openai/codex/issues/54841)

### 3. 异步与事件驱动 Agent

社区希望通过 `monitor` 等机制让 Codex 响应日志、文件、构建和 CI 事件，减少轮询和人工唤醒，支持真正的后台自动化。  
[Issue #29922](https://github.com/openai/codex/issues/29922)

### 4. 模型选择、容量与新模型支持

GPT-6.1 Sol 缺失、模型目录不一致、模型容量持续不足等问题同时出现，说明用户期待 CLI、IDE、Desktop 使用一致的模型目录，并需要更可靠的容量错误处理。  
[Issue #49464](https://github.com/openai/codex/issues/49464) · [Issue #51096](https://github.com/openai/codex/issues/51096) · [Issue #55305](https://github.com/openai/codex/issues/55305) · [Issue #50238](https://github.com/openai/codex/issues/50238)

### 5. 会话持久化与历史恢复

已完成回答消失、线程读取不完整、更新后线程无法恢复，以及 exec 创建的聊天从列表消失，均指向会话存储、索引和恢复机制的一致性问题。  
[Issue #50329](https://github.com/openai/codex/issues/50329) · [Issue #52493](https://github.com/openai/codex/issues/52493) · [Issue #56369](https://github.com/openai/codex/issues/56369)

### 6. 自定义模型、BYOK 与企业网络

BYOK、云端代理、企业自定义配置源和 Cloudflare 403 等问题，反映用户对私有模型接入、代理支持和受管部署能力的需求持续增长。  
[Issue #54841](https://github.com/openai/codex/issues/54841) · [Issue #53767](https://github.com/openai/codex/issues/53767) · [Issue #53515](https://github.com/openai/codex/issues/53515)

### 7. TUI 与工作区管理

开发者希望更好地区分当前目录、仓库和 linked worktree，并在 TUI 中提供更精确的会话筛选与项目分组。  
[PR #56308](https://github.com/openai/codex/pull/56308)

---

## 开发者关注点

- **跨平台一致性不足**：同一模型在 CLI、Desktop、IDE 中的可见性和可用性不一致；Windows 与 macOS 的线程、快捷键、文件访问和本地工具行为也存在差异。
- **Computer Use 稳定性不足**：窗口捕获、截图转换、站点兼容和安全检查经常成为自动化链路中的阻塞点。
- **后台资源管理不透明**：Windows 上遗留 Node/MCP 进程、内存增长和进程未及时退出的问题，会直接影响长时间 Agent 任务的可靠性。
- **会话数据一致性风险**：用户担心已完成回答、线程列表和历史内容在不同入口之间不一致；这类问题比单纯 UI 错误更难排查，也更容易造成工作成果丢失。
- **容量错误影响工作连续性**：社区希望模型容量不足时请求进入可取消的持久队列，而不是直接中断长时间构建、测试或代理任务。  
  [Issue #50238](https://github.com/openai/codex/issues/50238)
- **权限与安全边界需要更清晰**：Always allow 未生效、GitHub 写操作反复确认，以及 BYOK 下工具权限组合异常，都说明用户希望权限策略在 UI、工具调用和持久化行为之间保持一致。  
  [Issue #37184](https://github.com/openai/codex/issues/37184)
- **可观测性和可复现性增强**：rollout trace、accepted conversation history、模型目录和 token 刷新等 PR，核心都在提升调试、回放、并发安全和故障定位能力。
- **对异步 Agent 的期待明确**：社区正在从“单轮对话式助手”转向“可被事件唤醒、可继续执行、可恢复状态”的长期运行 Agent。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-10-23

## 1. 今日速览

过去 24 小时共更新 **50 个 Issue、34 个 Pull Request**，并发布 `v0.67.0-nightly.20261023.ga713410ab`。今日主线集中在 **Agent 稳定性与可观测性**：子代理卡死或误报成功、Browser Agent 配置失效、异常终止状态错误，以及任务轨迹与故障报告缺失。

开发侧同时在加强安全与可靠性，包括修复命令替换防护绕过、文件凭据并发写入、会话恢复污染工作区，以及 A2A Token 用量元数据保真。

---

## 2. 版本发布

### `v0.67.0-nightly.20261023.ga713410ab`

本次夜间版本重点更新：

- A2A Server 与 Core 保留扩展 Token 用量元数据，并统一每轮调用的统计口径。
- 修复涉及函数调用的模型轮次可能缺少 **thought signatures** 的问题。
- 夜间版本适合用于回归验证与兼容性测试，不建议生产环境用户直接替换稳定版。

链接：[Nightly Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261023.ga713410ab) · [版本 PR #29887](https://github.com/google-gemini/gemini-cli/pull/29887)

---

## 3. 社区热点 Issues

> 以下按重要性、影响范围和社区反馈筛选。

### 1. 子代理达到 `MAX_TURNS` 后仍被报告为成功

`codebase_investigator` 在触发最大轮数、实际未完成分析时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`。错误的终止状态可能进一步影响上层调度、评测和用户判断。

- 优先级：P1
- 社区反应：13 条评论、2 个赞
- 链接：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. Generalist Agent 调用子代理时可能永久卡死

创建文件夹等简单操作也可能无限等待，而禁止使用子代理后恢复正常。问题直接影响基础任务执行和自动化工作流。

- 优先级：P1
- 社区反应：8 条评论、8 个赞
- 链接：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. Browser Agent 忽略全局及项目配置

Browser Agent 未正确应用 `settings.json` 中的覆盖项，例如 `maxTurns`，尽管 `AgentRegistry` 初始化阶段已经读取并合并这些配置。配置与实际执行行为不一致会增加调试难度。

- 优先级：P2
- 社区反应：4 条评论
- 链接：[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 4. Browser Agent 在 Wayland 环境中失败

Wayland 下 Browser Subagent 无法正常工作。该问题使依赖浏览器自动化的 Agent 在 Linux 桌面环境中缺乏可用性。

- 优先级：P1
- 社区反应：4 条评论、1 个赞
- 链接：[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. “始终允许”工具权限无法跨终端会话保留

用户选择 Always Approve 后，新终端会话仍会重复询问授权，降低自动化效率，也造成权限模型理解上的不一致。

- 社区反应最热烈：18 条评论、17 个赞
- 状态：已关闭，但仍值得追踪修复结果
- 链接：[Issue #4340](https://github.com/google-gemini/gemini-cli/issues/4340)

### 6. Gemini 不会主动使用已有 Skills 和 Subagents

模型往往需要用户明确要求才使用自定义技能和子代理，即使任务与对应能力高度匹配。这反映出 Agent 能力发现、触发策略和上下文编排仍有明显提升空间。

- 优先级：P2
- 社区反应：7 条评论
- 链接：[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 7. 工具数量过多可能触发 400 错误

当环境暴露大量工具时，Gemini CLI 可能返回 400。社区期望系统能够按任务动态裁剪工具范围，而不是一次性暴露全部能力。

- 优先级：P2
- 社区反应：3 条评论
- 链接：[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 8. 模型在随机位置创建临时脚本

模型被限制只能使用 Shell 后，会把编辑脚本散落到多个目录，增加工作区清理和生成干净 Git 提交的成本。

- 优先级：P2
- 社区反应：3 条评论
- 链接：[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 9. `/bug` 报告缺少子代理内部上下文

当前 Bug 报告主要包含主会话，无法反映子代理内部发生了什么，显著增加 Agent 故障定位和线上复现难度。

- 优先级：P1
- 社区反应：2 条评论
- 链接：[Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)

### 10. 建议使用 AST 感知的读取、搜索和代码库映射

社区正在评估 AST-aware 工具，以减少粗粒度文件读取造成的 Token 浪费，提升 Agent 对方法边界、符号关系和代码结构的理解效率。

- 优先级：P2
- 社区反应：主 EPIC 7 条评论
- 链接：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [AST 工具调研](https://github.com/google-gemini/gemini-cli/issues/22746) · [搜索与读取调研](https://github.com/google-gemini/gemini-cli/issues/22747)

---

## 4. 重要 PR 进展

> 数据中的 PR 评论数均为 `undefined`，以下依据优先级、安全影响、变更规模和用户价值排序。

### 1. 修复 Shell Wrapper 参数导致的命令替换防护绕过

`stripShellWrapper()` 原先可能无法识别在 `-c` 前包含中间参数或链式参数的 POSIX Shell Wrapper，从而绕过命令替换安全检查。

- 安全影响高
- 状态：已关闭
- 链接：[PR #29688](https://github.com/google-gemini/gemini-cli/pull/29688)

### 2. 文件凭据写入改为原子、串行且安全

无原生 Keychain 时使用的 `FileKeychain` 存在并发写导致凭据丢失、中断写导致用户无法读取已有凭据的问题。该 PR 强化写入安全性和一致性。

- 优先级：P1
- 状态：开放
- 链接：[PR #29765](https://github.com/google-gemini/gemini-cli/pull/29765)

### 3. 限制 MCP `tools/list` 发现超时

MCP 工具发现此前可能继承十分钟的工具调用超时，导致无响应服务器长时间静默阻塞。改动默认采用较短的发现超时，并允许通过环境变量配置。

- 优先级：P1
- 链接：[PR #29767](https://github.com/google-gemini/gemini-cli/pull/29767)

### 4. 保留用户对 `settings.json` 的磁盘编辑

切换认证方式时，旧逻辑可能基于启动时快照重写设置文件，覆盖用户启动后进行的手工修改。改动改为基于当前磁盘内容更新指定字段。

- 优先级：P1
- 链接：[PR #29762](https://github.com/google-gemini/gemini-cli/pull/29762)

### 5. 会话恢复失败时不再残留工作区目录

`loadHistoryForResume()` 在恢复聊天前就注入历史工作区目录；一旦恢复失败，目录仍残留在当前上下文。修复仅在恢复成功后恢复目录。

- 修复上下文污染
- 状态：开放
- 链接：[PR #29890](https://github.com/google-gemini/gemini-cli/pull/29890)

### 6. 在任务树中显示正在执行的子代理工具调用

此前子代理工具调用执行期间可能从任务树消失，UI 只显示空列表。修复会保留 `executing` 状态，让用户看到子代理的实时工作。

- 链接：[PR #29859](https://github.com/google-gemini/gemini-cli/pull/29859)

### 7. 修正空响应自动 nudge 的判断和等待逻辑

工具循环返回不可见文本时，CLI 会自动发送 nudge。改动只对真正为空的 continuation 触发，并等待处理完成，避免并发续写和误触发。

- 链接：[PR #29771](https://github.com/google-gemini/gemini-cli/pull/29771)

### 8. 修复 Prompt 模板中的 `$` 特殊模式破坏

使用字符串替换 API 时，模型、工具或用户内容中的 `$&`、`` $` ``、`$'`、`$$` 可能被误解释，造成提示词和 `{{args}}` 内容静默损坏。

- 优先级：P2
- 链接：[PR #29761](https://github.com/google-gemini/gemini-cli/pull/29761)

### 9. 处理 A2A Server 工具调度中的未处理 Promise rejection

任务取消或中止时，`scheduleToolCalls` 可能产生未处理的 Promise Rejection，导致进程不稳定或异常退出。

- 链接：[PR #29763](https://github.com/google-gemini/gemini-cli/pull/29763)

### 10. 相对文件路径改为基于活动 IDE Workspace 解析

文件读写及路径纠正逻辑不再固定使用初始目标目录，而是优先使用活动 IDE Workspace 或嵌套 Git 仓库根目录，减少多根工作区中的误写和找不到文件问题。

- 优先级：P1
- 链接：[PR #29838](https://github.com/google-gemini/gemini-cli/pull/29838)

---

## 5. 功能需求趋势

### Agent 可靠性与生命周期管理

社区最关注的是子代理失败、超时、取消和终止状态是否准确，包括 `MAX_TURNS` 误报成功、无限挂起以及 A2A 调度异常。  
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · [#29763](https://github.com/google-gemini/gemini-cli/pull/29763)

### Browser Agent 能力与跨平台兼容

Browser Agent 的配置继承、持久化会话接管、锁恢复以及 Wayland 支持成为独立热点。  
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) · [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### Agent 可观测性、评测和轨迹分享

社区希望 `/bug` 包含子代理上下文，并让子代理轨迹能够通过 `/chat share` 方便查看和评测；内部项目评测的稳定性也在加强。  
[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) · [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) · [#23166](https://github.com/google-gemini/gemini-cli/issues/23166)

### 更高效的代码理解与上下文控制

AST-aware 搜索和文件读取、持久化任务追踪、精细化文件读取被集中讨论，目标都是减少 Token 消耗、降低上下文污染并改善大型代码库导航。  
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) · [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### Skills、子代理与并行协作

社区希望模型能主动识别并使用 Skills，同时探索共享记忆、并行子代理协作，以及更可靠的任务路由。  
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · [#18287](https://github.com/google-gemini/gemini-cli/issues/18287) · [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### IDE 与多工作区支持

活动 IDE Workspace 根目录、相对路径解析和工作区级权限策略是近期明显的工程需求，表明 CLI 正从单目录终端工具向 IDE 集成式开发环境演进。  
[#29838](https://github.com/google-gemini/gemini-cli/pull/29838) · [#18397](https://github.com/google-gemini/gemini-cli/issues/18397)

---

## 6. 开发者关注点

- **执行状态必须可信**：达到最大轮数、取消或异常中断时，不应被误报为成功。
- **Agent 不应无限挂起**：子代理、Browser Agent 和 MCP 工具发现都需要明确的超时、取消和恢复机制。
- **故障诊断信息不足**：Bug 报告、子代理轨迹和评测数据需要统一关联，支持快速复现与质量追踪。
- **配置行为需要一致**：`settings.json` 应真正作用于所有 Agent，并避免覆盖用户并发修改。
- **凭据和 Shell 执行是高风险面**：原子写入、并发安全以及命令替换防护需要持续审查。
- **上下文和 Token 成本仍是核心痛点**：大文件读取、工具过多与 AST-aware 检索可能带来类似负担。
- **工作区卫生问题突出**：随机临时脚本、错误工作区目录和跨根路径解析会影响代码质量与 Git 提交安全。
- **自动化需要可解释行为**：用户期望 Agent 自主使用 Skills 和子代理，但前提是权限、终止状态和执行轨迹清晰可控。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-23**

## 今日速览

过去 24 小时，Copilot CLI 发布 **v1.0.103**，主要改进了代码块复制、ACP 沙箱配置继承以及断线重连后的云端回复完整性。社区焦点则集中在 **MCP 鉴权与稳定性、权限安全边界、会话恢复、模型与插件兼容性**；过去 24 小时更新的 Issue 共 **30 条**，当日无 PR 更新。

## 版本发布

### v1.0.103

本次版本已包含以下改进：

- 启用相关选项后，点击已完成的响应代码块会复制其原始代码。
- ACP 会话现在会遵循已保存的沙箱设置以及 `--sandbox`、`--no-sandbox` 参数，恢复会话时同样生效。
- CLI 与云端连接意外中断并重连后，可保留云端回复的完整文本。
- Sessions 浏览器获得改进，但现有发布摘要未展示完整变更内容。

**发布链接：** [v1.0.103](https://github.com/github/copilot-cli/releases/tag/v1.0.103)

## 社区热点 Issues

### 1. Trusted folders 可能在 manual 模式下静默批准 Shell 命令

**Issue：** [#5232](https://github.com/github/copilot-cli/issues/5232)  
**状态：** OPEN

在 `manual` 权限模式下，只要命令引用的文件路径位于可信目录，部分 Shell 命令就可能被自动批准，包括脚本、`sqlcmd`、`curl` 等副作用不可预测的命令。

这是本期最值得关注的权限安全问题：目录信任不应被等同于命令执行安全，否则可能形成绕过确认的机会。

**社区反应：** 已更新 2 条评论。新近出现，尚未形成大量讨论，但安全影响较高。

---

### 2. 后台代理未触发 Hooks，暴露策略绕过风险

**Issue：** [#3013](https://github.com/github/copilot-cli/issues/3013)  
**状态：** CLOSED

用户配置 Hooks 用于阻止代理执行危险命令，但后台或 task agent 未触发相应 Hooks，导致子代理仍可能执行命令。报告者认为这可能构成安全漏洞。

该问题已关闭，说明相关行为已得到处理，但其暴露出的核心原则值得持续关注：**所有具备命令执行能力的代理路径都必须统一应用权限策略和 Hooks。**

**社区反应：** 4 条评论；报告明确强调安全影响。

---

### 3. MCP OAuth 令牌过期后不刷新，导致会话持续发送失效令牌

**Issue：** [#5233](https://github.com/github/copilot-cli/issues/5233)  
**状态：** OPEN

远程 OAuth MCP 服务返回 HTTP 401 后，CLI 没有请求令牌端点进行刷新，也没有重新提示登录，而是周期性重发同一个过期 access token。

这会直接造成工具不可用，并可能形成无意义的请求风暴。ACP 模式下还存在高度相关的刷新失败报告。

**社区反应：** 当日新 Issue，尚无评论，但直接阻断远程 MCP 的正常会话。

---

### 4. ACP 模式未使用已存储的 refresh token

**Issue：** [#5229](https://github.com/github/copilot-cli/issues/5229)  
**状态：** OPEN

在 `copilot --acp` 模式下，远程 MCP 的 access token 过期后，CLI 直接打开 OAuth 授权页面，而没有使用已存储的 refresh token。

该问题与 #5233 共同表明，令牌生命周期管理可能是当前 MCP OAuth 链路中的系统性短板，建议产品侧统一检查交互模式和 ACP 模式的刷新策略。

**社区反应：** 当日新 Issue，尚无评论；功能影响明确。

---

### 5. MCP 配置监听触发 inotify 上限后，会话停止处理

**Issue：** [#5242](https://github.com/github/copilot-cli/issues/5242)  
**状态：** OPEN

在共享 Linux 主机或容器中运行 `copilot --server` 时，如果 MCP 配置监听超过宿主的 inotify watch 限额，运行时可能报 `ENOSPC`。一次重试后，Session 队列被放弃，后续请求不再处理。

这不仅是配置热加载问题，还可能造成服务级“假死”。需要降级到轮询、明确告警或避免配置监听失败拖垮整个会话队列。

**社区反应：** 10 月 23 日新建，暂无评论，但属于高优先级可靠性风险。

---

### 6. `copilot --resume` 无会话 ID 时进入错误的新会话

**Issue：** [#5228](https://github.com/github/copilot-cli/issues/5228)  
**状态：** OPEN

统一 Sessions 浏览器成为默认行为后，无参数运行 `copilot --resume` 不再进入可靠的会话选择流程，而是创建新的空会话。Sessions 列表仅短暂显示，约两秒后被新会话替换，首个 Enter 还可能误触发信任确认。

这会直接影响会话恢复、自动化脚本以及无人值守场景，也可能造成误操作。

**社区反应：** 当日新 Issue，暂无评论；对日常使用影响较大。

---

### 7. 自定义 Agent 未应用其模型和推理强度

**Issue：** [#5241](https://github.com/github/copilot-cli/issues/5241)  
**状态：** OPEN

在 Copilot App 的 Agent Picker 中选择自定义 Agent 后，其 `model` 和 `reasoning-effort` frontmatter 没有生效；会话仍使用用户此前保存的默认模型和推理强度。

这会导致 Agent 行为不可预测，也让 Agent 配置文件失去关键控制能力，与插件 Agent、模型选择和技能系统均相关。

**社区反应：** 10 月 23 日新建，暂无评论；属于明显的配置继承缺陷。

---

### 8. 安装插件中的自定义 Agent 会取消自身 HTTP MCP 调用

**Issue：** [#5237](https://github.com/github/copilot-cli/issues/5237)  
**状态：** OPEN

安装型 Copilot Plugin 中的 HTTP MCP Server 可以被发现，其工具也可被选中；但切换到插件自带的自定义 Agent 后，MCP 连接会被立即取消。相同仓库会话中使用默认 Agent 时，该 MCP 工具则能正常工作。

问题可能位于插件 Agent 生命周期、权限或 MCP 会话绑定逻辑中，影响企业将 Agent 与 MCP 工具组合部署。

**社区反应：** 当日更新，暂无评论；复现条件和影响范围较清晰。

---

### 9. WSL2 Voice Runtime 段错误，模型下载一直卡住

**Issue：** [#5197](https://github.com/github/copilot-cli/issues/5197)  
**状态：** OPEN

升级至 1.0.100 并更新 Voice Runtime 后，WSL2 上的 Voice Server 数秒内因 signal 11 退出，`/voice` 一直停在 “Fetching voice models”，无法下载或使用模型。

该问题影响语音输入功能，并暴露出新运行时在 WSL 环境下的兼容性和崩溃诊断问题。

**社区反应：** 4 条评论、2 个赞；是本组中已有较多社区反馈的问题之一。

---

### 10. `web_fetch` 在代理环境中无法通过 DNS 校验

**Issue：** [#5230](https://github.com/github/copilot-cli/issues/5230)  
**状态：** OPEN

在企业环境中，本地 DNS 无法解析公网目标，但 HTTP CONNECT 代理可以正常访问；`curl` 和原生 HTTP 传输也成功，唯独内置 `web_fetch` 失败。

这说明 `web_fetch` 的 DNS 校验路径与代理传输路径不一致。对于禁止公共 DNS、使用企业代理或内部 TLS 终止的环境，影响尤其明显。

**社区反应：** 当日更新，暂无评论；属于企业网络兼容性问题。

## 重要 PR 进展

过去 24 小时内 **没有新的 Pull Request 更新**，因此本期无可列出的重要 PR。

**PR 数据链接：** [Copilot CLI Pull Requests](https://github.com/github/copilot-cli/pulls)

## 功能需求趋势

### 1. MCP 鉴权、授权与凭据持久化

这是当天最集中的主题，包括：

- OAuth access token 过期后不刷新：[Issue #5233](https://github.com/github/copilot-cli/issues/5233)
- ACP 模式不使用已存储 refresh token：[Issue #5229](https://github.com/github/copilot-cli/issues/5229)
- Windows Entra Broker 令牌缓存为空，每次启动重新登录：[Issue #5236](https://github.com/github/copilot-cli/issues/5236)
- MCP 需要认证时 Windows CLI 显示转义码并不可用：[Issue #5234](https://github.com/github/copilot-cli/issues/5234)
- MCP 配置监听失败导致 Session 停止：[Issue #5242](https://github.com/github/copilot-cli/issues/5242)

社区需要的不只是“能登录”，而是完整的令牌刷新、跨进程缓存、过期恢复、失败降级和清晰终端错误处理。

### 2. 更细粒度的权限控制与策略一致性

[Issue #5232](https://github.com/github/copilot-cli/issues/5232) 和 [Issue #3013](https://github.com/github/copilot-cli/issues/3013) 指向同一个关键方向：权限控制不能只依据目录信任，也不能因任务转入后台 Agent 而被绕过。Hooks、审批、插件和子代理应共享统一的安全策略层。

### 3. 会话管理、恢复与终端可用性

会话恢复和终端交互问题较为集中：

- 无 ID 的 `--resume` 恢复到错误会话：[Issue #5228](https://github.com/github/copilot-cli/issues/5228)
- 键盘滚动会话困难：[Issue #2750](https://github.com/github/copilot-cli/issues/2750)
- 支持将输入框固定到顶部：[Issue #5227](https://github.com/github/copilot-cli/issues/5227)
- macOS 交互模式破坏 TTY 的报告已关闭：[Issue #5240](https://github.com/github/copilot-cli/issues/5240)

开发者期待 Sessions 浏览器成为可靠的状态恢复入口，而不只是存在短暂交互窗口的新 UI。

### 4. Agent、模型、技能与插件的组合能力

多个问题显示，当前 Agent 生态的配置传播仍不一致：

- 自定义 Agent 不应用模型与推理强度：[Issue #5241](https://github.com/github/copilot-cli/issues/5241)
- 插件 Agent 与 HTTP MCP 冲突：[Issue #5237](https://github.com/github/copilot-cli/issues/5237)
- 未知模型 ID 导致 task 子代理超出 prompt budget：[Issue #5219](https://github.com/github/copilot-cli/issues/5219)
- Skills 无法在交互模式提出澄清问题：[Issue #5235](https://github.com/github/copilot-cli/issues/5235)
- Auto 模型选择希望支持排除特定模型：[Issue #5231](https://github.com/github/copilot-cli/issues/5231)

趋势是从“选择模型或 Agent”走向“可靠执行完整工作流”，重点是配置继承、上下文预算和交互权限。

### 5. 企业代理、网络与跨平台兼容

- 代理环境的 `web_fetch` DNS 校验：[Issue #5230](https://github.com/github/copilot-cli/issues/5230)
- WSL2 Voice Runtime 崩溃：[Issue #5197](https://github.com/github/copilot-cli/issues/5197)
- Windows MCP 登录与终端渲染问题：[Issue #5234](https://github.com/github/copilot-cli/issues/5234)
- Windows Entra 令牌无法跨进程复用：[Issue #5236](https://github.com/github/copilot-cli/issues/5236)

这些反馈表明，真实企业环境中的代理、Windows 身份体系、WSL 和容器共享内核仍是兼容性测试重点。

### 6. 成本与资源控制

[Issue #5238](https://github.com/github/copilot-cli/issues/5238) 指出，超过单会话 50 张图片后，移除最旧图片会触发全部图片缓存重新填充，可能显著增加成本。后续需要更明确的缓存策略、Token/媒体预算提示和成本可见性。

## 开发者关注点

1. **安全边界必须可预测**：开发者希望手动模式真正执行逐次确认，避免可信目录被误用为 Shell 执行授权。
2. **MCP 登录必须具备完整生命周期**：过期令牌应自动刷新，并支持跨进程缓存、重新授权以及交互模式与 ACP 模式的一致行为。
3. **会话恢复不能产生副作用**：执行 `copilot --resume` 不应默认创建空会话，更不应让列表短暂闪现后自动接受信任确认。
4. **Agent 配置应真正生效**：自定义 Agent 的模型、推理强度、工具和权限需要在桌面端、CLI、插件及子代理之间一致传播。
5. **子代理必须继承安全策略**：后台 Agent 不能成为 Hooks、权限检查或 Shell 审批的绕过路径。
6. **企业网络兼容性仍不足**：代理认证、代理侧 DNS 解析和本地 DNS 校验之间需要更一致的传输行为。
7. **上下文管理应兼顾成本**：图片缓存、模型 prompt budget 和长会话压缩需要更透明，避免意外触发昂贵重填或整轮失败。
8. **发布节奏需要稳定性通道**：社区提出 Stable/Beta 等独立渠道，以减少快速迭代带来的回归；参见 [Issue #5203](https://github.com/github/copilot-cli/issues/5203)。
9. **交互式技能需要支持澄清循环**：Skills 应能在交互会话中提问、等待回答并继续执行，而不是在需要用户输入时失效。
10. **跨平台体验仍需加强**：WSL、Windows、macOS、容器和共享 Linux 主机上的 TTY、语音、OAuth、网络与进程级缓存问题应进入系统性回归测试。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-10-23

## 1. 今日速览

今日发布 **v1.19.4**，核心变化是将内置 Bun Runtime 升级至 1.4.4，集中修复 Brotli、TLS、HTTP/1.1/2/3、WebSocket、`fetch` 及根证书安全问题。  
社区重点集中在 **OpenCode v2 稳定性与迁移**：后台任务被意外终止、子代理无法取消、桌面端菜单失效，以及 agent 模型配置、MCP OAuth、模型 Provider 注册等回归问题。PR 侧则集中修复了模型路由、会话压缩、MCP 生命周期、代理兼容性和 CLI/Desktop 可用性问题。

---

## 2. 版本发布

### v1.19.4

- **Bun Runtime 升级至 1.4.4**
  - 包含 Brotli、TLS、HTTP/1.1、HTTP/2、HTTP/3、WebSocket 和 `fetch` 的安全修复。
  - 根证书更新至 **NSS 3.131.1**。
- 这是以运行时安全更新为主的小版本，升级后可能改善网络请求、证书验证及内置服务稳定性。
- [Release v1.19.4](https://github.com/anomalyco/opencode/releases/tag/v1.19.4)

---

## 3. 社区热点 Issues

### 1. v1→v2 后，非 Git 会话在 Global 项目中消失

- **Issue**：[ #49827](https://github.com/anomalyco/opencode/issues/49827)
- V1 存储在 `global` 项目中的非 Git 会话，在升级到 v2 后无法出现在当前 TUI 会话选择器中。
- 问题本质是 v2 按目录创建项目，同时会话选择器只展示当前项目，导致历史数据“不可见”。
- 已有 **17 条评论、2 个赞**，是迁移阶段较有代表性的数据可见性问题。
- 重要性：涉及用户历史会话访问，升级 v2 的用户应重点关注。

### 2. Desktop 所有模型均显示“No reasoning”

- **Issue**：[ #50257](https://github.com/anomalyco/opencode/issues/50257)
- v2 Desktop 模型选择器对所有模型都显示不支持 reasoning，包括 DeepSeek、Kimi、GLM 等实际具备推理能力的模型。
- 社区已定位到根因：`capabilities.reasoning` 字段未正确设置，提示信息与真实能力脱节。
- 已有 **15 条评论、4 个赞**，直接影响用户选择模型和判断上下文成本。

### 3. v2 后台 subagent 不支持取消

- **Issue**：[ #36423](https://github.com/anomalyco/opencode/issues/36423)
- v2 的 subagent 工具能返回 session ID，并支持恢复会话，但缺少取消运行中后台子代理的能力。
- 对多代理编排、长任务和自动化工作流而言，取消能力是基本的生命周期控制能力。
- 已有 **13 条评论、8 个赞**，是该版本代理系统的重要能力缺口。

### 4. 后台 shell 因 Location 闲置回收而被终止

- **Issue**：[ #51828](https://github.com/anomalyco/opencode/issues/51828)
- 后台 shell 绑定在 Location 生命周期上；Location 约 60 分钟无事件后被回收，shell 会收到 `SIGTERM`。
- Service 本身仍存活，但运行中的 Shell/Pty 图被销毁，完成通知也可能无法送达。
- 相关问题还包括后台任务完成后无通知、子代理启动的 shell 丢失完成事件等，说明后台任务生命周期模型仍不稳定。
- 重点关注：[ #51828](https://github.com/anomalyco/opencode/issues/51828)、[ #58050](https://github.com/anomalyco/opencode/issues/58050)、[ #58366](https://github.com/anomalyco/opencode/issues/58366)

### 5. Windows embedded watcher 段错误导致所有会话中断

- **Issue**：[ #56236](https://github.com/anomalyco/opencode/issues/56236)
- Windows v2 服务长时间运行后，因内置 `@parcel/watcher` 原生模块发生 segmentation fault，导致服务崩溃并终止全部进行中的会话。
- 崩溃发生时内存占用约 2.15 GB，峰值约 2.78 GB，且栈帧集中在原生 watcher。
- 已标记为 closed/pending close，说明团队正在 triaging，但问题对 Windows 长驻服务用户影响较大。

### 6. agent 配置中的模型在新会话中被忽略

- **Issue**：[ #55727](https://github.com/anomalyco/opencode/issues/55727)
- `agents.<id>.model` 或 agent frontmatter 中配置的模型，在新会话启动时未生效，`opencode run` 和 `--agent` 可能错误地回退到全局默认模型。
- 同类问题还包括 headless `run` 的 agent 模型解析错误，影响 CLI、自动化任务和代理配置可预测性。
- 相关反馈：[ #42561](https://github.com/anomalyco/opencode/issues/42561)
- PR [#58355](https://github.com/anomalyco/opencode/pull/58355) 已针对核心模型回退逻辑提交修复。

### 7. MCP OAuth 在远程环境下无法完成登录

- **Issue**：[ #55201](https://github.com/anomalyco/opencode/issues/55201)
- HTTPS 授权服务器通过 loopback 回调时，Chrome 的 Private/Local Network Access 探测请求会被 OpenCode 误判为授权失败。
- SSH、容器和远程服务器场景下，浏览器回调也可能无法回到本机 callback server。
- 另一个问题是 OAuth token response 缺少可选 `scope` 时，OpenCode 可能跳过 refresh token，导致反复浏览器重新认证。
- 相关链接：[ #55201](https://github.com/anomalyco/opencode/issues/55201)、[ #58319](https://github.com/anomalyco/opencode/issues/58319)
- PR [#58370](https://github.com/anomalyco/opencode/pull/58370) 提出支持粘贴 redirect URL。

### 8. Desktop Linux 的 New Session / Open Project 永久置灰

- **Issue**：[ #58188](https://github.com/anomalyco/opencode/issues/58188)
- OpenCode Desktop 2.1.3 Linux 官方 `.deb` 包中，File → New Session 和 Open Project 菜单项持续不可用。
- 这是桌面端核心入口级问题，直接影响项目创建与会话启动。
- PR [#58306](https://github.com/anomalyco/opencode/pull/58306) 已针对 New Session 部分提交修复，Open Project 另有独立问题。

### 9. 外部插件工具绕过权限配置

- **Issue**：[ #50652](https://github.com/anomalyco/opencode/issues/50652)
- 外部插件注册的工具未应用其配置的 permission action，即使调用敏感操作，也可能绕过权限限制。
- 通过 Code Mode 调用时同样存在绕过现象。
- 这是安全边界问题，不仅影响权限提示，也影响插件生态的可信度。
- 已有 **3 条评论、2 个赞**，建议开发者在生产环境审查外部插件和工具权限。

### 10. v2 会话标题不再自动生成

- **Issue**：[ #58176](https://github.com/anomalyco/opencode/issues/58176)
- v2 新会话持续保持 `Untitled session`，未触发自动标题生成。
- 问题在免费模型/配额拒绝后更容易暴露，可能造成所有会话均为空标题。
- 已有 **3 条评论**，虽然评论量不高，但属于 v1→v2 功能行为回归，影响会话管理体验。

---

## 4. 重要 PR 进展

### 1. 修复 agent 模型未生效

- **PR**：[ #58355](https://github.com/anomalyco/opencode/pull/58355)
- 修复 session 未设置模型时忽略 agent 配置的问题，确保使用 `agents.<id>.model` 或 agent frontmatter 的模型。
- 直接对应 [ #55727](https://github.com/anomalyco/opencode/issues/55727) 和 [ #42561](https://github.com/anomalyco/opencode/issues/42561)。

### 2. MCP OAuth 支持粘贴 redirect URL

- **PR**：[ #58370](https://github.com/anomalyco/opencode/pull/58370)
- 在浏览器无法访问本机 loopback callback 时，允许用户粘贴授权服务器返回的 redirect URL 完成 MCP OAuth。
- 适用于 SSH、容器及远程 TUI 等场景，明显改善企业网络和远程开发体验。

### 3. 修复后台 shell 完成通知丢失

- **PR**：[ #58366 相关修复方向](https://github.com/anomalyco/opencode/issues/58366)
- 今日 Issue 进一步暴露了 subagent 启动后台 shell 后，完成事件未传递回 subagent/orchestrator 的问题。
- 这是后台任务编排链路的重要修复点。

### 4. 修复 compaction 后 checkpoint 被 request hook 删除

- **PR**：[ #55208](https://github.com/anomalyco/opencode/pull/55208)
- 压缩会话时重新构建 reduced draft，避免 request hook 删除的 checkpoint 文本在压缩后被恢复。
- 涉及上下文压缩、自动续接和代理记忆稳定性。

### 5. 修复 CLI `run` 在 separator 后重复消息

- **PR**：[ #57717](https://github.com/anomalyco/opencode/pull/57717)
- 修复 `run` handler 重复追加 `--` 后参数的问题，Effect CLI 已将参数放入 `input.message`。
- 改善 CLI 参数解析与 headless 执行的一致性。

### 6. 修复 Desktop New Session 菜单置灰

- **PR**：[ #58306](https://github.com/anomalyco/opencode/pull/58306)
- 调整页面状态下对 New Session 菜单项的启用逻辑。
- 对应 [ #58188](https://github.com/anomalyco/opencode/issues/58188)，当前主要覆盖 New Session，Open Project 仍需单独处理。

### 7. 修复 Mistral 系列工具调用 ID 冲突

- **PR**：[ #58336](https://github.com/anomalyco/opencode/pull/58336)
- 修复 GLM 等 Mistral-family 模型的 tool call ID 在 OpenAI Chat 兼容接口中被截断为相同前缀，导致历史对话出现 Duplicate tool call ID 400 错误。
- 另一个相关修复 [#58344](https://github.com/anomalyco/opencode/pull/58344) 尝试改为对完整 ID 做稳定处理，但当前已关闭且存在 compliance 状态。

### 8. 修复 outgoing request 中的 NUL 字节

- **PR**：[ #58361](https://github.com/anomalyco/opencode/pull/58361)
- shell 输出中的 NUL 字节会被写入 session history，并在后续请求中回放，导致 Venice 等 OpenAI-compatible endpoint 返回 400。
- 通过清理发往 provider 的请求内容，提高跨模型供应商兼容性。

### 9. 修复 CLI 无效配置静默回退

- **PR**：[ #56335](https://github.com/anomalyco/opencode/pull/56335)
- 当 `cli.json` 包含无效字段时，增加明确警告，而不是无提示地整文件回退到默认配置。
- 有助于用户发现配置拼写、类型和版本兼容问题。

### 10. 修复 MCP 重复启动与串行关闭

- **PR**：[#58349](https://github.com/anomalyco/opencode/pull/58349)
  - 避免初始 reconciliation 期间因队列竞态重复启动 MCP server。
- **PR**：[#58351](https://github.com/anomalyco/opencode/pull/58351)
  - MCP server 改为并行关闭，减少 service restart 的等待时间。
- 两项改动共同改善 MCP 生命周期稳定性和重启速度。

---

## 5. 功能需求趋势

### v2 迁移与兼容性

- 旧版本会话、项目和标题数据能否平滑迁移。
- v1 的非 Git/global 会话在 v2 TUI 中不可见。
- v2 中功能行为与 v1 不一致，尤其是自动标题、agent 模型和后台任务。

### 后台任务与多代理编排

- 后台 subagent 取消能力不足。
- shell、subagent、orchestrator 之间的完成通知传递不稳定。
- Location 回收机制会终止仍在运行的后台任务。
- 用户需要明确的任务状态、取消、重试和恢复接口。

### Provider、模型与路由稳定性

- OpenCode Go/Console 模型出现余额、区域和 400 错误。
- Console provider 已连接但没有注册到 `/api/provider`。
- 免费模型限制、已下线模型文档和实际 catalog 不一致。
- OpenAI-compatible、Mistral-family、GLM 等模型之间的 tool call ID 和协议兼容性问题频发。

### Desktop 与跨平台体验

- Linux Desktop 菜单状态异常。
- Windows embedded watcher 可能导致长时运行崩溃。
- Desktop 模型能力展示不准确。
- macOS、Linux、Windows 之间的行为差异仍是明显痛点。

### MCP 远程与认证能力

- SSH、容器、远程服务器环境下 loopback OAuth 登录困难。
- MCP server 重复启动、关闭慢、注册确认失败等问题影响集成可靠性。
- 社区期待更完整的 OAuth fallback、并发和生命周期管理。

### 插件安全与权限

- 外部插件工具需要真正遵守 permission 配置。
- 插件初始化和销毁不能阻塞共享事件循环。
- 插件工具在 Code Mode 下的权限行为需要保持一致。

---

## 6. 开发者关注点

1. **配置优先级必须可预测**  
   agent frontmatter、`agents.<id>.model`、全局默认模型和 session 模型之间的优先级需要稳定，否则 CLI、TUI 和自动化调用会产生不同结果。

2. **后台任务不能被隐式回收**  
   Location 生命周期不应直接等同于 shell/subagent 生命周期。后台任务需要独立状态管理，并保证完成通知、取消和恢复能力。

3. **协议兼容需要更严格的边界测试**  
   NUL 字节、超长 tool call ID、Mistral/GLM 路由和 OpenAI-compatible endpoint 都需要 provider-specific 测试，避免历史会话污染后续请求。

4. **MCP 需要生产级生命周期管理**  
   OAuth 回调、刷新 token、重复启动、并行关闭及 session 注册确认，都是 MCP 在真实环境中的高频故障点。

5. **错误不能静默回退**  
   无效配置、缺失 scope、模型未注册和能力字段为空时，应明确报错或提示，避免用户误以为功能已正常启用。

6. **v2 发布需要强化迁移与回归验证**  
   建议重点回归 v1 数据迁移、会话标题、agent 模型、Desktop 菜单、后台任务和插件权限等跨模块场景。

7. **资源与长时运行稳定性仍需提升**  
   Windows watcher 崩溃、CPU-heavy plugin 阻塞共享事件循环、配置目录 watcher 触发 `EMFILE`，都说明长时运行和多 location 场景仍需专项压测。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-23

## 今日速览

jcode 发布 **v0.99.1**，重点修复 OpenAI 工具调用持续报错，并增强服务器失联后的 TUI 稳定性，同时加入 Muse 订阅登录与 Venice AI Provider。社区焦点集中在 **Provider 兼容性、默认模型与故障切换正确性、Windows 高内存占用和新模型接入**；过去 24 小时共更新 10 个 Issue、35 个 PR。

## 版本发布

### v0.99.1：OpenAI 请求修复与稳定性提升

主要更新：

- 修复 OpenAI 模型因工具 Schema 被拒绝而每轮请求均触发 `invalid_request_error`。
- 服务端消失或无响应时，不再无限重试，TUI 可主动恢复。
- 原生支持 **Muse 订阅登录**。
- 新增 **Venice AI Provider**。

版本发布信息以仓库 Release 页面为准。

## 社区热点 Issues

1. **[OPEN] Jcode used to be better（#1928）**  
   用户认为相较 0.60/0.70 版本，当前版本在速度、内存召回和请求处理效率上出现明显退步，期待补充基准数据或版本对比。当前有 3 条评论，但暂无点赞；这是重要的主观体验回归信号，仍需可复现指标验证。  
   https://github.com/1jehuang/jcode/issues/1928

2. **[OPEN] OpenAI persistent WebSocket 在工具调用后续请求失败（#1647）**  
   当上一响应包含工具调用时，持久化 WebSocket 可能错误复用 response ID，只发送 delta 而遗漏对应的 `function_call_output`，导致后续请求失败。该问题会直接影响长会话、Agent 工作流及 OpenAI 兼容接口稳定性。  
   https://github.com/1jehuang/jcode/issues/1647

3. **[OPEN] Windows Swarm 运行内存达到 10GB 以上（#1932）**  
   Windows 上共享服务运行 swarm 约两小时后，私有字节达到 14.9GB，峰值工作集约 17GB，并持续以约 90MB/s 读取磁盘。报告初步指向 `agentgrep` 对超大目录执行 `rg --follow --json`，暴露了目录遍历、进程输出消费和资源限制问题。  
   https://github.com/1jehuang/jcode/issues/1932

4. **[OPEN] Grok Build 模型选择器缺少 grok-4.7（#1942）**  
   Grok CLI 已默认使用 `grok-4.7`，但 jcode 的 Grok Build `/model` 选择器仍只展示旧版本，交互式用户无法选择最新旗舰模型，反映模型目录同步机制存在滞后。  
   https://github.com/1jehuang/jcode/issues/1942

5. **[OPEN] 远程模型连接强制要求 HTTPS（#1939）**  
   当前添加远程服务器时必须使用 HTTPS，阻碍本地或私有网络中的 LiteLLM 等 HTTP 服务。社区希望允许受信任环境中的 HTTP 连接，同时最好提供清晰的安全提示或风险控制。  
   https://github.com/1jehuang/jcode/issues/1939

6. **[OPEN] 远程 SSH 会话未正确遵循本地快捷键（#1938）**  
   从 Windows 连接远程 Mac 时，快捷键按远端环境而非本地客户端解释，导致按键行为异常。该问题横跨终端输入、SSH 边界和客户端—服务端状态同步，是跨平台使用体验的重要缺口。  
   https://github.com/1jehuang/jcode/issues/1938

7. **[OPEN] 新会话忽略 default_model，启用不支持的 gpt-6.1-sol（#1934）**  
   Windows 11 配置为 Copilot 的 `claude-haiku-5.5` 后，新会话仍从不支持的 `gpt-6.1-sol` 启动，说明配置应用、默认 Provider 选择或模型目录映射存在竞态或优先级问题。  
   https://github.com/1jehuang/jcode/issues/1934

8. **[OPEN] 同 Provider 账户故障切换会静默改变模型（#1933）**  
   Claude 请求失败后切换到同一 Provider 的其他账户时，候选路由携带了与原请求不同的模型，可能把用户从 `claude-haiku-5-5` 隐式切换到其他模型。故障转移必须保持模型和关键路由参数不变，否则容易造成成本、质量及可复现性问题。  
   https://github.com/1jehuang/jcode/issues/1933

9. **[OPEN] Skill 忽略 `disable-model-invocation` 前置字段（#1941）**  
   Skill frontmatter 解析器当前只识别 `name`、`description` 和 `allowed-tools`，导致声明 `disable-model-invocation: true` 的 Skill 仍出现在模型可用列表并可被模型调用。该问题关系到 Claude Code 兼容性与 Skill 隔离边界。  
   https://github.com/1jehuang/jcode/issues/1941

10. **[OPEN] 固定的 TODO 卡片交互区域过小（#1936）**  
    长 TODO 列表目前只能通过底部 `+N more / collapse` 小区域折叠，用户希望整张卡片均可展开或收起，并将折叠入口放在最后一项之后。这是典型的 TUI 可发现性和大列表操作效率问题。  
    https://github.com/1jehuang/jcode/issues/1936

## 重要 PR 进展

1. **`/sessions <query>` 预过滤会话选择器（#1346）**  
   为 `/sessions`、`/session` 和 `/resume` 增加可选查询参数，打开选择器后自动聚焦搜索框并过滤结果，缩短恢复历史会话的路径。  
   https://github.com/1jehuang/jcode/pull/1346

2. **`@file` 文件提及器与 frecency 排序（#1889）**  
   在 TUI 输入提示词时通过 `@file` 快速引用项目文件，并按使用频率与最近使用时间排序，降低大型代码库中的路径输入成本。  
   https://github.com/1jehuang/jcode/pull/1889

3. **输出 OSC 9 进度，适配 herdr Agent 状态检测（#1883）**  
   通过终端 OSC 9 序列报告运行中、等待中和完成状态，使 herdr 能识别 jcode Agent 状态；并提供默认 session 字段以允许关闭。  
   https://github.com/1jehuang/jcode/pull/1883

4. **修复 herdr-webui 中 Mermaid/数学公式的占位符乱码（#1538）**  
   浏览器终端无法正确绘制 Kitty Unicode 占位协议，因此 Mermaid 和数学公式曾泄漏私用区字形；PR 改用 pane-safe 字形，避免显示 `U+10EEEE` 等乱码。  
   https://github.com/1jehuang/jcode/pull/1538

5. **修复测试环境锁死锁与渲染顺序问题（#1896）**  
   调整环境锁和渲染锁的获取顺序，并引入可重入保护，解决 `jcode-tui` 测试并行执行时因 ABBA 锁顺序而稳定挂起的问题。  
   https://github.com/1jehuang/jcode/pull/1896

6. **`/model` 中用 Ctrl+S 选择 Swarm 模型（#1706）**  
   为模型选择器增加 Swarm 模型子选择入口；未显式配置时，Agent 继承当前会话模型，同时补齐协调者身份回退逻辑。  
   https://github.com/1jehuang/jcode/pull/1706

7. **修复文本模型处理图片块后全会话失败（#1347）**  
   针对不支持视觉的 OpenAI 兼容端点，在工具结果携带图片时加入运行时模态恢复，避免图片块残留在历史中并持续污染后续轮次。  
   https://github.com/1jehuang/jcode/pull/1347

8. **模型切换持久化到 `config.toml`（#1881）**  
   模型选择器不再只修改当前会话；本地和远程模式都会写回配置，并覆盖重启后的恢复路径，解决用户每次启动都要重选模型的问题。  
   https://github.com/1jehuang/jcode/pull/1881

9. **隔离测试环境中的外部变量与并发状态（#1880、#1882）**  
   清理开发环境遗留的 `JCODE_*`、命名 Profile 变量，并为修改 `JCODE_HOME` 的测试增加同步保护，减少 CI 与本地结果受环境影响导致的随机失败。  
   https://github.com/1jehuang/jcode/pull/1880  
   https://github.com/1jehuang/jcode/pull/1882

10. **恢复 master 的 fmt、clippy 与预算门禁（#1906）**  
    将机械性的格式、Clippy 和未使用依赖修复与预算调整拆分，既恢复 CI 门禁，也降低评审时混入行为变更的风险。  
    https://github.com/1jehuang/jcode/pull/1906

> 另有值得关注的开放方向：安装时同步 `manifest.json` 稳定版本字段、macOS 私有内存展示、可配置自动重试、`/theme`、Bash 风险门禁、MCP 工具级开关，以及自定义 OpenAI 兼容 Provider 的模型显示名和 reasoning 配置。

## 功能需求趋势

1. **Provider 与模型兼容性**  
   社区持续要求支持新模型、HTTP 私有端点和更多登录方式，同时希望模型目录、CLI 默认值和交互式选择器保持同步。

2. **路由、默认值与故障转移的确定性**  
   默认模型必须真正生效；账户轮换应保持原模型不变；工具调用后的 response chain 必须保持上下文完整。

3. **性能与资源治理**  
   速度、内存召回、Windows swarm 内存和磁盘读取成为高频反馈，重点已从单纯功能扩展到长期运行稳定性。

4. **远程与跨平台开发体验**  
   SSH 快捷键、远程模型持久化、浏览器终端字形兼容和 macOS 内存指标，反映跨终端、跨主机使用仍需加强。

5. **TUI 可发现性与高频操作**  
   会话搜索、`@file` 引用、TODO 折叠、主题切换、MCP 工具管理和模型快捷操作，均指向降低键盘和搜索成本。

6. **安全控制与可配置性**  
   Bash 风险检测、HTTP 可选、Skill 禁止模型调用、MCP 单工具禁用及自定义重试策略，显示用户希望安全边界可配置且默认兼容现状。

7. **Agent 可观测性与自动化集成**  
   OSC 9 Agent 状态输出和 herdr 集成表明，终端 UI 正在向可被外部 Agent 编排器管理的状态接口演进。

## 开发者关注点

- **长会话不能“越跑越坏”**：图片块、工具调用响应链和服务失联都可能污染后续轮次，恢复逻辑应避免无限重试和不可解释的路由变化。
- **模型与账户切换必须可预测**：默认模型、同 Provider 账户轮换和自定义 Provider 元数据需要严格保持用户选择。
- **Windows 与 swarm 场景的资源问题突出**：超大仓库遍历、`rg --follow` 输出消费和子进程限制应纳入性能测试。
- **Provider 碎片化适配成本高**：OpenAI 兼容接口在 WebSocket、工具 Schema、视觉能力和流式响应上的差异仍是主要故障来源。
- **远程环境边界不清晰**：本地客户端、远端 TUI、SSH 键盘和配置持久化需要更明确的职责划分。
- **测试环境隔离与 CI 稳定性仍受重视**：外部 `JCODE_*` 变量、全局锁顺序、预算门禁和平台差异近期反复影响测试结果。
- **可观测性需求上升**：除界面状态外，内存、Agent 状态、失败路由和重试行为都需要可诊断信息，才能支撑复杂自动化环境。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-10-23

## 今日速览

过去 24 小时无新版本发布，焦点集中在 **TUI 大型会话性能、工具展示与扩展 API、模型配置兼容性，以及 HTML 导出和终端输入稳定性**。社区提交了多项修复：异步等待扩展消息、扩展安装失败降级、模糊搜索优化、UTF-8 流解码修复等；与此同时，启动性能和长会话导出仍被多次提出。

## 社区热点 Issues

1. **启动性能预算：对齐 jcode 的延迟与内存表现**  
   提议为 pi 建立明确的启动时间、交互延迟和内存预算，并以 jcode 与 pi 0.62.0 的基准差距为改进目标。该议题评论数最多（11 条），说明启动性能和与竞品对标是社区长期关注点。  
   [Issue #7739](https://github.com/earendil-works/pi/issues/7739)

2. **`transformMessages` 与模型切换后的 thinking 内容兼容性**  
   模型切换时，`transformMessages` 对非红acted thinking block 的处理可能与 `requiresReasoningContentOnAssistantMessages` 兼容标记冲突，导致消息内容异常或推理上下文兼容性问题。相关 Issue 已关闭，并引发较多讨论。  
   [Issue #6167](https://github.com/earendil-works/pi/issues/6167)

3. **工具展示 API 与单行工具调用模式**  
   社区希望提供公开的展示层 API，或内置单行模式，统一控制内置工具、MCP、codemode 和扩展工具的呈现，包括运行、成功和失败状态。该需求直接关系到 TUI 可读性和扩展开发体验。  
   [Issue #10259](https://github.com/earendil-works/pi/issues/10259)

4. **800+ 消息会话导致 TUI 滚动和输入卡顿**  
   长会话中每次交互都可能触发完整 scrollback 重绘，造成滚动和输入延迟；Issue 获得 3 个赞，表明大型会话的交互性能已成为明显痛点。  
   [Issue #9807](https://github.com/earendil-works/pi/issues/9807)

5. **Windows 高负载下终端符号串入输入框**  
   在 SSH 到 Linux、Windows 客户端 CPU 负载较高时，终端可能将符号错误写入输入内容。该问题被标为 P0，涉及输入捕获与终端协议处理的可靠性。  
   [Issue #11086](https://github.com/earendil-works/pi/issues/11086)

6. **辅助 Token 用量缺少模型归属信息**  
   模型工具调用、压缩和分支摘要等辅助调用没有完整保留 provider/model 身份，扩展难以准确导出按模型划分的 Token 消耗。该需求对成本核算、遥测和多模型分析很重要。  
   [Issue #11090](https://github.com/earendil-works/pi/issues/11090)

7. **可配置的空闲缓存预热窗口**  
   社区希望将当前固定的 30 分钟 idle cache-warming horizon 配置化，以适配不同提示缓存 TTL 和成本策略。  
   [Issue #11127](https://github.com/earendil-works/pi/issues/11127)

8. **`pi.exec()` 跨 chunk 解码破坏 UTF-8**  
   当 stdout chunk 在 UTF-8 字符中间分割时，逐块调用 `data.toString()` 会将中文等内容解码为乱码。问题虽然退出码为 0，但会污染扩展消费的执行结果。  
   [Issue #11312](https://github.com/earendil-works/pi/issues/11312)

9. **MCP OAuth 登录成功后持续显示 Connecting**  
   浏览器认证已成功，但 Pi 仍可能停留在连接状态数分钟，且 Ctrl+C 无法取消。该问题影响 MCP 服务首次接入和 OAuth 认证的可控性。  
   [Issue #11311](https://github.com/earendil-works/pi/issues/11311)

10. **Mouse escape 序列超时导致输入框残留内容**  
    当鼠标报告被拆分读取时，超时处理可能只消费序列前半段，剩余字符被当作普通输入写入 prompt。该问题涉及终端解析器的边界处理。  
    [Issue #11172](https://github.com/earendil-works/pi/issues/11172)

## 重要 PR 进展

1. **fork session 通过单一文件描述符写入**  
   `SessionManager.forkFrom` 原先对每个复制条目反复打开和关闭文件；PR 改为通过一个 fd 写入，减少大型会话 fork 时的系统调用和 I/O 开销。  
   [PR #11288](https://github.com/earendil-works/pi/pull/11288)

2. **等待扩展发送的用户消息**  
   `sendUserMessage` 返回底层 Promise，并让命令处理器等待对应 turn 完成，修复扩展异步消息未完全完成就被继续处理的问题。  
   [PR #11309](https://github.com/earendil-works/pi/pull/11309)

3. **HTML 导出使用迭代方式渲染深层会话树**  
   将递归遍历改为显式栈，覆盖 20,000 条会话链，避免 `sortChildren` 等函数触发调用栈溢出，解决长会话导出页面空白。  
   [PR #6843](https://github.com/earendil-works/pi/pull/6843)

4. **配置包安装失败时继续启动**  
   单个设置中的 package 安装失败不再阻塞整个 pi 启动；失败会被记录并通过扩展警告通道报告，其他可安装包仍会加载。  
   [PR #11304](https://github.com/earendil-works/pi/pull/11304)

5. **修复 `thinkingLevelMap` 类型判断及多余的 `max_completion_tokens`**  
   针对 reasoning 模型缺少 `thinkingLevelMap` 时的请求失败，修正可选字段判断，并避免向部分 provider 发送不适用的 token 参数。  
   [PR #11299](https://github.com/earendil-works/pi/pull/11299)

6. **改进模糊搜索的连续匹配与会话字段排序**  
   优化 fuzzy match，避免查询字符被不相关文本提前匹配；同时对 session 不同字段独立评分，提升 `/resume` 和 `/model` 的搜索准确度。  
   [PR #11296](https://github.com/earendil-works/pi/pull/11296)

7. **保留 `pi.exec()` 的 spawn error**  
   当可执行文件不存在、子进程无法启动时，将错误信息作为 `stderr` 返回，避免扩展只看到空的失败结果。  
   [PR #11257](https://github.com/earendil-works/pi/pull/11257)

8. **避免长会话 HTML 导出的树遍历栈溢出**  
   针对超深 session tree，使用迭代式树处理并保留时间排序、活跃分支优先级和最新叶子定位，配套 20,000 条级别回归测试。  
   [PR #11275](https://github.com/earendil-works/pi/pull/11275)

9. **HTML 导出支持 system messages**  
   导出页面将首个 system message 渲染为系统 prompt 和工具列表，后续 system message 渲染为章节更新，修复初始 prompt 和中途系统信息缺失。  
   [PR #11290](https://github.com/earendil-works/pi/pull/11290)

10. **macOS 中先停止 shell process group 再终止前台子进程**  
    调整 macOS 下的进程终止顺序，降低 CPU 高负载时中止命令仍继续执行下一条 shell 命令的竞态问题。  
    [PR #11289](https://github.com/earendil-works/pi/pull/11289)

## 功能需求趋势

- **大型会话与性能优化**：重点集中在 TUI 增量渲染、session fork I/O、异步打开大文件、HTML 导出深度和启动性能预算。
- **扩展与工具生态**：关注统一工具展示 API、MCP 工具扩展、扩展 Promise 生命周期、扩展 UI getter 保留，以及 durable/宿主集成能力。
- **多模型与 provider 兼容性**：包括 classifier model 的 `modelOverrides`、reasoning 模型参数、模型选择排序和按模型追踪 Token 用量。
- **TUI 与终端可靠性**：Windows/SSH 输入污染、鼠标 escape 序列、粘贴、UTF-8 流解码和 shell 进程终止均是高频问题。
- **缓存和上下文管理**：社区希望提供可配置的 idle cache warming、provider 级自动压缩阈值，以及更细粒度的上下文策略。
- **认证与部署体验**：MCP OAuth 取消机制、Homebrew 安装说明、Windows 安装文档和 managed install 的兼容性持续受到关注。

## 开发者关注点

- **稳定性优先于新增功能**：近期大量 Issue 涉及乱码、输入污染、OAuth 卡死、shell 误执行、长会话栈溢出和数据导出异常。
- **长会话体验仍是核心痛点**：开发者普遍担心全量重绘带来的输入延迟，以及 session 打开、fork、HTML 导出在大文件上的扩展性。
- **扩展 API 需要更明确、更稳定**：工具展示、消息转换上下文、异步回调和模型用量归属都暴露出当前 API 在可观测性和生命周期管理上的不足。
- **provider 差异需要更好的抽象**：不同模型对 thinking 配置、token 参数和自动压缩阈值的支持不一致，配置错误有时会静默生效或静默失效。
- **兼容性不能只覆盖 Linux/macOS**：Windows Terminal、WSL、SSH、高 CPU 负载和不同终端实现下的输入/粘贴行为值得持续测试。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
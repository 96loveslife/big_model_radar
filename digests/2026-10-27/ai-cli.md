# AI CLI 工具社区动态日报 2026-10-27

> 生成时间: 2026-10-27 04:28 UTC | 覆盖工具: 8 个

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

**数据日期：2026-10-27**  
**对比工具：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、jcode、pi  
**说明：** “今日 Issues / PR 数”按摘要中可核验的统计口径整理；部分项目未提供完整数量或仅列出重点条目，因此以“重点条目数”标注，避免将筛选结果误作全量数据。

---

## 1. 生态全景

AI CLI 生态正从“模型与 Agent 能力竞赛”转向**跨平台可靠性、状态一致性和安全治理**：Windows、IDE、浏览器、远程 Gateway、会话恢复及 MCP 生命周期成为高频故障区。与此同时，插件、Subagent、Skills 和多 Provider 接入继续扩张，但“配置存在”尚未稳定转化为“运行时可信”。

模型和协议层快速演进，GPT-6.1 Terra、Anthropic Vertex、OpenCode 专用端点及 Daybreak 等能力不断进入工具链；同时，工具数量增长开始触发 Schema、上下文和 API 400 等规模瓶颈。可靠的终止状态、可观测性及可取消性已成为 Agent 能否进入生产流程的关键门槛。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 个重点条目 | 10 个重点条目 | **v2.1.311** | 高 |
| **OpenAI Codex** | 10 个重点条目 | 10 个重点条目 | 3 个 Rust Alpha：`0.166.0-alpha.1`、`0.165.0-alpha.3`、`0.165.0-alpha.1.1` | 很高 |
| **Gemini CLI** | 10 个重点条目 | 10 个重点条目 | `v0.67.0-nightly.20261027.g363a13119` | 很高 |
| **GitHub Copilot CLI** | 10 个重点条目 | **0 个更新** | **v1.0.104**，另有 `v1.0.104-4` 修订 | 高 |
| **OpenCode** | 10 个重点条目 | 10 个重点条目 | 无 | 高 |
| **jcode** | **39** | **23** | 无 | 很高 |
| **pi** | 10 个重点条目 | 10 个重点条目 | 无 | 很高 |
| **Kimi Code CLI** | 0 | 0 | 无 | 低/无活动 |

### 活跃度解读

- **jcode 是唯一明确披露全量更新数量**的项目：39 个 Issue、23 个 PR，协作密度最高，但目前仍以未发布 PR 为主。
- **Claude Code、Codex、Gemini CLI、OpenCode、pi** 均有 10 个重点 Issue 和 10 个重点 PR，属于高密度双线推进。
- **Copilot CLI** 虽然当天没有 PR 更新，但发布节奏明确，且热点问题集中在 ACP、MCP、权限和会话恢复等生产级问题。
- **Kimi Code CLI** 当天无活动，不代表项目整体成熟度低，仅表示该时间窗口缺乏可见社区动态。

---

## 3. 共同关注的功能方向

### 3.1 会话可靠性与状态一致性

这是当前最普遍的共同问题。

- **Codex**：压缩后已完成的 Steered 对话被误判为当前任务；Windows 更新后项目从侧栏消失但 SQLite 仍有记录。
- **Gemini CLI**：Subagent 达到 `MAX_TURNS` 后仍报告成功；Generalist Agent 持续挂起。
- **Copilot CLI**：大型会话恢复出现 OOM 和单核高负载；ACP 新 prompt 会无条件取消后台子代理。
- **jcode**：iOS 断线导致助手回复丢失，历史重同步后工具调用消失。
- **pi**：Compaction 后文件列表持续膨胀；RPC 创建或切换会话时重复触发 `session_start`。
- **OpenCode**：达到周配额后无法切换其他模型，账号额度、客户端缓存和服务端状态不一致。

**判断：** 用户关注点已从“能否保存会话”转向“会话在压缩、恢复、断线、切换、跨端同步后是否仍语义正确”。

---

### 3.2 Windows 与跨平台一致性

除 Gemini CLI 外，其他五个活跃项目都出现了明显的 Windows 故障。

- **Codex**：VS Code 扩展升级后无法启动、MXC 沙箱被无关 BitLocker 卷阻塞、附件下载权限失败、本地命令永久卡住。
- **Claude Code**：Windows Deep Link 错误创建 scratch workspace。
- **Copilot CLI**：SSH + tmux 到 Windows Server 后剪贴板失效，原生运行时反复崩溃。
- **OpenCode**：Windows Desktop 免费模型失败而 CLI 正常，显示客户端版本差异。
- **pi**：Windows glob、安装路径、扩展兼容性和文档仍不统一。
- **jcode**：终端配置写入可能覆盖错误的 tmux 配置文件路径。

**判断：** Windows 已从“兼容性问题”升级为影响 IDE、沙箱、Shell、剪贴板、远程开发和入口跳转的核心平台。

---

### 3.3 MCP、插件与工具治理

多个项目正从“支持插件”进入“控制插件边界”。

- **Claude Code**：推进官方市场直接安装插件、插件版本同步、安全审查文件排除及严格 MCP Schema 兼容。
- **Codex**：新增独立插件进程宿主，采用 256 KiB 有界 IPC、握手、背压和生命周期管理。
- **Gemini CLI**：ACP 权限请求增加 MCP 服务和工具元数据，同时修复沙箱规则和工具输出传递。
- **Copilot CLI**：自定义 registry、OAuth、stdio 残留、inotify 配额及状态化 MCP 服务均有故障。
- **OpenCode**：修复插件快捷键重复注册和卸载残留，并支持项目级 `.agents/opencode`。
- **pi**：推进 MCP 消息大小限制、关闭与取消生命周期，以及工具搜索排序。

共同诉求包括：

1. 插件进程隔离；
2. IPC 大小、背压和超时限制；
3. OAuth 与 token 生命周期可靠；
4. 卸载后无残留；
5. MCP 工具数量增长后仍能准确召回；
6. 不同传输方式遵守一致的安全限制。

---

### 3.4 Agent 编排、终止状态与可观测性

- **Gemini CLI**：关注 Subagent 主动调用、`MAX_TURNS` 语义、轨迹分享、AST-aware 代码读取。
- **Codex**：失败子代理不再误报父任务“需要关注”，并修复 rollout trace 中工具输出版本和顺序。
- **Copilot CLI**：ACP 与交互式 CLI 在后台子代理、权限请求方面行为不一致。
- **jcode**：Swarm 成员为 `unknown` 时不能算完成；移动端需要保留完整工具调用记录。
- **Claude Code**：要求区分普通会话、子代理和内部摘要器，修复 Hook 载荷与误触发。
- **OpenCode**：增加后台 Shell 实时输出和停止能力；推理块支持独立折叠。

**判断：** Agent 的“完成、成功、取消、失败、超时”必须是可信且可审计的状态，而不能仅由外层字符串推断。

---

### 3.5 多 Provider、多账号与本地模型

- **Copilot CLI**：最高热度需求之一是在同一会话切换托管、BYOK 和本地模型。
- **Claude Code**：同一 Connector 多账号并行是社区第一热点。
- **jcode**：增加 Tsubasa profile、Daybreak、Codex 上下文窗口，并支持运行中账号切换和真实用量限额故障转移。
- **pi**：新增 Anthropic Vertex Provider，修复 OpenCode 协议专用端点和 Bedrock 工具 Schema。
- **OpenCode**：推进模型目录媒体能力、多模态入口和 Provider 配置边界。

**判断：** 模型目录、登录 Profile、凭据状态与请求路由正逐渐成为独立基础层，而不是散落在各 Provider 适配代码中。

---

### 3.6 输出、上下文与 Token 效率

- **Claude Code**：终端缩进、尾随空格、80 字符硬换行和单词截断破坏复制粘贴，并增加后续 token 消耗。
- **Codex**：工具过多时需要精细选择；会话压缩后不能错误恢复任务。
- **Gemini CLI**：超过一定工具数量会触发 API 400；AST-aware 读取旨在降低无效文件读取。
- **OpenCode**：输出意外截断时自动压缩上下文，并修复提示词缓存配置覆盖。
- **pi**：工具搜索需优先精确名称匹配；Compaction 元数据需要保持有界。
- **jcode**：每会话独立上下文上限及动态上下文锚点受到关注。

**判断：** Agent 效率的瓶颈正在从“单次回答质量”转向**工具召回、文件定位、输出格式、上下文压缩和缓存前缀稳定性**的系统性问题。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与优势 | 当前短板 |
|---|---|---|---|---|
| **Claude Code** | 终端工作流、Desktop、Remote Control、插件、安全审查 | 注重 Claude 生态、跨端接续和代码安全的团队 | Anthropic 原生模型体验；CLI、Desktop、Web、移动端协同；安全插件与文件访问规则较深入 | 输出可复制性、多账号、用量透明度和跨端同步 |
| **OpenAI Codex** | 模型目录、插件运行时、IDE、TUI、审批与执行治理 | 大规模使用 OpenAI/GPT、IDE 和自动化工作流的开发者 | Rust 核心快速迭代；模型、插件、OAuth、审批模板、Guardian、rollout trace 体系化 | Windows 稳定性、命令执行、会话恢复和压缩状态 |
| **Gemini CLI** | Subagent、Skills、Browser Agent、ACP、沙箱 | 关注多模态、浏览器自动化和 Agent 编排的用户 | Agent/Subagent 能力丰富；AST-aware、Browser Agent、Podman 沙箱方向明确 | 终止语义、挂起、配置继承、Wayland 和工具规模瓶颈 |
| **GitHub Copilot CLI** | GitHub 托管模型、BYOK、ACP、MCP、Autopilot | GitHub 用户、IDE/ACP 客户端及企业自建模型用户 | 与 GitHub 账号、MCP 生态和第三方 Provider 结合紧密；Auto/后台任务体验持续增强 | ACP 与 TUI 不一致、权限绕过风险、MCP 生命周期和会话恢复性能 |
| **OpenCode** | 多 Provider、桌面端、TUI、多模态与免费额度 | 需要模型自由度和统一客户端的个人开发者 | Provider 灵活，支持项目级 harness 配置、后台 Shell 和生成 API | 免费额度误判、Desktop/CLI 状态分歧、插件破坏缓存 |
| **jcode** | 多 Provider、Gateway、iOS、移动端、多会话并发 | 移动开发、远程使用、多账号和嵌入式 Harness 开发者 | 移动 Gateway、会话隔离、账号 Profile、模型目录元数据推进快 | Shell 风险解析、测试隔离、移动端数据一致性、账号故障转移 |
| **pi** | 轻量扩展、Provider 协议、会话控制、TUI 和 MCP | 高度定制化、关注终端体验与扩展 API 的高级用户 | 扩展机制灵活，协议适配深入，工具搜索和单行展示潜力较强 | Windows、终端兼容、上下文膨胀、Provider 完整语义和文件权限 |
| **Kimi Code CLI** | 今日无可见动态 | 暂无当日判断 | — | — |

### 定位差异总结

- **闭源平台型产品**：Claude Code、Codex、Copilot CLI 的优势是模型、账号、IDE 或平台原生集成。
- **开放 Provider 型客户端**：OpenCode、pi、jcode 更强调多模型、自定义端点、扩展及多端接入。
- **Agent 编排型**：Gemini CLI 在 Skills、Subagent、Browser Agent 和 AST-aware 工具链方向更鲜明。
- **移动与嵌入式型**：jcode 的 Gateway、iOS、多会话和账号 Profile 路线最具差异化。
- **扩展驱动型**：pi 更接近可编程 Agent Harness，但兼容性与生命周期治理负担也更重。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：高密度更新**

- **jcode**：39 个 Issue、23 个 PR，量化活跃度最高。
- **Codex、Gemini CLI、pi、Claude Code、OpenCode**：均有 10 个重点 Issue 和 10 个重点 PR，覆盖产品、工程、安全和平台层。
- **Copilot CLI**：10 个重点 Issue，虽无 PR 更新，但发布与社区反馈活跃。

**第二梯队：当前窗口静默**

- **Kimi Code CLI**：24 小时内无活动，暂时无法评估社区健康度。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 判断依据 |
|---|---|---|
| **较高，但稳定性债务明显** | Claude Code、Codex、Copilot CLI | 功能面广、发布稳定、用户规模效应明显；主要问题已进入跨端同步、权限、恢复、Windows 和配额等生产级范畴 |
| **中高，快速专业化** | Gemini CLI | 已有成熟夜间发布与丰富 Agent 功能，正补齐终止语义、Browser Agent、ACP 和沙箱工程化 |
| **中高，生态整合中** | OpenCode | 多 Provider 和 Desktop 能力成熟，但额度、客户端同步和插件契约仍不稳定 |
| **中等，迭代激进** | jcode、pi | 功能推进非常快，方向明确，但测试、平台兼容、生命周期和会话一致性尚未完全收敛 |
| **当日无法评估** | Kimi Code CLI | 无社区活动数据 |

### 5.3 “热度高”不等于“成熟度高”

Codex、Claude Code、pi 等项目的高 Issue/PR 数量，部分来自用户规模和产品复杂度，并不直接代表质量下降。相反，jcode 与 pi 的高更新量也意味着接口和行为仍频繁变化。技术决策时应区分：

- **采用成熟度**：稳定性、兼容性、数据安全；
- **演进速度**：新能力进入生产的效率；
- **生态开放度**：Provider、插件、ACP/MCP 兼容程度。

---

## 6. 值得关注的趋势信号

### 6.1 Agent 可靠性成为第一优先级

多个项目同时暴露“达到轮次上限仍成功”“未知成员算完成”“失败子代理误报”“压缩后恢复旧任务”等问题。

**参考价值：** 企业选型不应只看模型能力，应重点评估状态机、终止语义、取消传播、失败恢复和审计轨迹。

---

### 6.2 Windows 是当前 AI CLI 的共同短板

Codex 已出现扩展、沙箱、附件和命令执行等多层故障，其他工具也有路径、剪贴板和 Desktop 问题。

**参考价值：** 若团队以 Windows 为主，应把 IDE 扩展启动、Shell 挂起、文件权限、代理网络和剪贴板纳入采购验收清单。

---

### 6.3 MCP 正从集成协议变成安全边界

插件进程宿主、有界 IPC、OAuth、消息大小限制、进程清理和配置监听都已进入核心 PR。

**参考价值：** MCP 治理重点正在从“能连接”转向“资源有界、凭据可靠、传输一致、失败可清理”。

---

### 6.4 工具规模已经成为 Agent 的新瓶颈

工具过多会触发 400、Schema 超限、召回错误和上下文膨胀；AST-aware 读取、工具精确匹配及精简插件提示将成为标准能力。

**参考价值：** 评估 CLI 时，应使用大型 MCP 集合和多工具场景测试，而不是只测试少量内置工具。

---

### 6.5 会话保存不等于会话可靠

恢复 OOM、压缩污染、项目索引丢失、移动端回复丢失、RPC 重复事件说明持久化格式与生命周期仍存在断层。

**参考价值：** 应关注端到端不变量：消息不丢、工具记录不丢、任务不重复执行、状态变化可追溯、恢复后语义一致。

---

### 6.6 多 Provider 正在推动统一模型目录

GPT-6.1 Terra、Anthropic Vertex、Tsubasa、Daybreak、OpenCode 专用端点等表明，CLI 正从请求适配器演进为模型元数据与路由平台。

**参考价值：** 长期来看，可靠的模型目录、能力标记、上下文窗口、媒体格式和访问计划，比硬编码某个模型名称更重要。

---

### 6.7 ACP 正成为 Agent 客户端的重要标准接口

Codex、Gemini CLI、Copilot CLI 和 jcode 都在推进 ACP；但权限请求、模型切换、后台任务和 Shell 输出仍存在客户端间差异。

**参考价值：** 如果团队计划构建 IDE、编辑器或移动端 Agent 客户端，ACP 兼容性应成为核心验收项，同时避免 ACP 被误当作完全等价于交互式 TUI。

---

### 6.8 配额和用量透明性成为商业化基础能力

Claude Code 的异常周限额消耗、Codex 的模型容量不足、Copilot 的 BYOK 429 重试、OpenCode 的免费额度误判，均直接影响用户信任和成本控制。

**参考价值：** 选型时应测试配额展示、重试退避、上下文缓存、重试计入、跨入口一致性和故障后的降级能力。

---

## 结论与建议

### 技术决策优先级

1. **先验证 Windows 与 IDE 主链路**  
   包括扩展启动、命令执行、会话恢复、项目索引及权限请求。

2. **再验证 Agent 状态正确性**  
   测试压缩、取消、断线、子代理失败、Swarm 超时和工具调用恢复，而不是只验证最终回答。

3. **将 MCP/插件隔离列为硬性要求**  
   检查进程隔离、IPC 上限、超时、OAuth、子进程清理和卸载残留。

4. **用多 Provider 和大工具集进行压力测试**  
   重点观察 Schema 兼容、模型路由、工具召回、token 消耗和缓存命中。

5. **优先选择状态语义清晰、诊断信息充分的项目**  
   当前多数工具的功能差距正在缩小，真正形成长期差异的将是跨平台可靠性、会话完整性、可观测性和安全边界。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截至：2026-10-27**  
> 说明：给定 PR 数据的“评论数”均显示为 `undefined`，因此“热门 PR”主要依据仓库当前展示顺序、近期更新活跃度、Issue 关联度和功能影响范围判断，无法将其误写为真实评论排行。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | **skill-creator：评测与打包修复** ([#1298](https://github.com/anthropics/skills/pull/1298)、[#1681](https://github.com/anthropics/skills/pull/1681)、[#1997](https://github.com/anthropics/skills/pull/1997)) | 集中修复触发评测假阴性、并发命令探测、Windows 管道兼容、运行时异常误判、脚本直接执行失败及 YAML frontmatter 解析错误。相关 Issue [#556](https://github.com/anthropics/skills/issues/556) 报告 `claude -p` 触发率为 0%，是当前最明确的生态痛点之一。 | Open |
| 2 | **webapp-testing：安全启动与元素发现修复** ([#1980](https://github.com/anthropics/skills/pull/1980)、[#1976](https://github.com/anthropics/skills/pull/1976)) | 修复启动脚本使用 `shell=True` 导致的命令注入风险，并纠正 `textarea`、`select` 的元素类型识别。体现社区对“浏览器自动化既要好用，也要安全可靠”的持续关注。 | Open |
| 3 | **claude-api：上下文与知识维护** ([#1730](https://github.com/anthropics/skills/pull/1730)) | 修复 academy-guide 和 tool-use-concepts 中的失效链接。另有高关注 Issue 指出该 Skill 可能一次注入约 15.6 万 token，直接耗尽上下文窗口（[#1487](https://github.com/anthropics/skills/issues/1487)）。热点已从内容正确性扩展到上下文成本与按需加载。 | Open |
| 4 | **docx：文档操作正确性与安全修复** ([#1792](https://github.com/anthropics/skills/pull/1792)） | LibreOffice 超时不再被误报为成功，并在输出后检查修订标记是否真正清除。相关 Issue 还发现 XML namespace 丢失可能生成无效 DOCX（[#2018](https://github.com/anthropics/skills/issues/2018)）。 | Open |
| 5 | **mcp-builder：MCP 兼容性与评测能力** ([#1742](https://github.com/anthropics/skills/pull/1742)) | 适配 `mcp>=2` 中重命名后的 `streamable_http_client`，并支持自定义 HTTP headers。相关 Issue 指出真实 MCP 服务评测会因序列化与错误处理问题全部失败并得到 0/N（[#1390](https://github.com/anthropics/skills/issues/1390)）。 | Open |
| 6 | **document-typography：生成文档排版质检** ([#514](https://github.com/anthropics/skills/pull/514)) | 自动识别孤行、寡行、标题落在页尾、编号错位等 AI 文档常见排版问题。方向不是“再做一个文档生成器”，而是建立默认质量控制和交付验收层。 | Open |
| 7 | **algorithmic-art：渲染逻辑修复** ([#1977](https://github.com/anthropics/skills/pull/1977)) | 修复 `wrapAround()` 对负数及超范围值处理错误，使输出始终位于预期区间。虽是小修复，但反映图形类 Skills 正进入稳定化、可验证阶段。 | Open |
| 8 | **pyxel：Python 复古游戏开发** ([#525](https://github.com/anthropics/skills/pull/525)） | 覆盖 Pyxel 游戏创建、调试、无头输入测试、逐帧检查及状态验证，突出“生成后自动验收”，而非只提供示例代码。 | Open |

**补充观察：** `mcp-builder`、文档类 Skills 和 `skill-creator` 的 PR，多在 2026 年 9–10 月仍有更新，说明其关注度已从单纯“加 Skill”转向兼容、安全、评测和可维护性。

---

## 2. 社区需求趋势

### 2.1 工作流自动化与交付质量门禁

- [Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385) 提出“任务前校准 → 对抗式审查 → 交付验证”三阶段质量门禁。
- 社区期待 Skill 不只执行一次任务，而是覆盖规划、实施、验证和交付。
- 对应 Skill：[skill-creator 评测修复 #1298](https://github.com/anthropics/skills/pull/1298)。

### 2.2 代码审查、安全验证与运行时可靠性

- [webapp-testing 命令注入修复](https://github.com/anthropics/skills/pull/1980) 表明测试类 Skill 的安全边界正成为重点。
- [MCP 真实服务评测 0/N](https://github.com/anthropics/skills/issues/1390) 反映出用户需要可重复、可解释的端到端验证。
- [Skill 安全与质量分析器 PR](https://github.com/anthropics/skills/pull/83) 同时覆盖质量、权限和安全审查。

### 2.3 文档生成后的自动质检

- [文档排版质检 Skill](https://github.com/anthropics/skills/pull/514) 聚焦孤行、寡行、编号错位等输出质量问题。
- [DOCX 修订残留验证](https://github.com/anthropics/skills/pull/1792) 表明社区开始要求“验证成功”，而不接受仅依赖进程退出码。
- [ODT 创建、模板填充与解析](https://github.com/anthropics/skills/pull/486) 显示开放文档格式仍是明确需求。

### 2.4 评测、触发机制与上下文效率

- [run_eval 触发率为 0%](https://github.com/anthropics/skills/issues/556) 是高热度核心问题。
- [skill-creator YAML 解析修复](https://github.com/anthropics/skills/pull/1997) 指向元数据解析与描述优化链路的可靠性。
- [claude-api 一次注入约 156k token](https://github.com/anthropics/skills/issues/1487) 暴露出渐进式加载、索引和上下文预算管理需求。

### 2.5 企业共享、治理和信任体系

- [组织级 Skill 共享](https://github.com/anthropics/skills/issues/228) 是需求最明确的产品能力之一。
- [agent-governance 提案](https://github.com/anthropics/skills/issues/412) 关注策略执行、威胁检测、信任评分和审计轨迹。
- [社区 Skill 冒用 anthropic 命名空间](https://github.com/anthropics/skills/issues/492) 反映出版、安装来源和权限标识需要可信治理。

### 2.6 状态管理与长期任务连续性

- [compact-memory](https://github.com/anthropics/skills/issues/1329) 探索用符号化表示压缩长任务状态，减少代理自身笔记对上下文的占用。
- [Notion 规格到实现及进度审计](https://github.com/anthropics/skills/pull/1245) 体现“规格 → 任务 → 验收 → 跟踪”的企业工作流需求。

---

## 3. 高潜力待合并 Skills

| PR | 潜力判断 | 状态 |
|---|---|---|
| [mcp-builder：支持 mcp>=2 与自定义 headers](https://github.com/anthropics/skills/pull/1742) | 直接修复新版 MCP API 兼容性，落地价值高，且与真实 MCP 评测故障问题直接相关。 | Open |
| [skill-creator：隔离触发评测并处理 Windows/运行时失败](https://github.com/anthropics/skills/pull/1298) | 解决触发评测假阴性这一高频核心痛点，可能显著提升 Skill 发布与优化流程的可靠性。 | Open |
| [skill-creator：支持 package_skill.py 直接执行](https://github.com/anthropics/skills/pull/1681) | 改动边界清晰，属于可直接改善开发者体验的低风险修复。 | Open |
| [skill-creator：正确解析 YAML frontmatter](https://github.com/anthropics/skills/pull/1997) | 修复元数据进入评测和描述优化命令前的失真，直接影响 Skill 触发质量。 | Open |
| [webapp-testing：移除 with_server.py 的 shell=True](https://github.com/anthropics/skills/pull/1980) | 修复明确的高风险命令注入问题，安全价值高，预计具有较高合入优先级。 | Open |
| [docx：超时按错误处理并验证输出](https://github.com/anthropics/skills/pull/1792) | 将“超时/假成功”转为可检测错误，提升文档交付可信度。 | Open |
| [claude-api：替换失效文档链接](https://github.com/anthropics/skills/pull/1730) | 修复范围小、验证成本低，可快速改善官方知识入口。 | Open |
| [algorithmic-art：修正 wrapAround()](https://github.com/anthropics/skills/pull/1977) | 纯确定性逻辑修复，测试与合并成本较低。 | Open |
| [webapp-testing：修正 textarea/select 元素报告](https://github.com/anthropics/skills/pull/1976) | 修复结果准确性，可直接提升自动化测试反馈质量。 | Open |
| [pdf：修正文档中的大小写路径](https://github.com/anthropics/skills/pull/538) | 典型跨平台兼容问题，修复范围小，可立即改善 Linux 环境使用成功率。 | Open |

> **优先观察顺序建议：** `skill-creator` 三项修复 → `webapp-testing` 安全修复 → `mcp-builder` 兼容性修复 → `docx` 输出验证 → 其他小型确定性修复。  
> 原因是前几项直接关联已公开的高评论 Issue、跨平台故障或安全风险。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是建立一套可发现、可信任、可评测、可验证并能安全执行的 Skill 工程体系，而不只是继续增加 Skill 数量。**

具体表现为：官方与社区来源需要清晰隔离；描述和触发机制必须可靠；执行结果需要自动验收；文档和代码操作需要安全性保证；企业还需要组织共享、治理、审计及上下文成本控制。

---

# Claude Code 社区动态日报

**日期：2026-10-27**  
**数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)**  
> 注：Issue/PR 列表按过去 24 小时更新及社区互动量筛选；“今日”表示本次数据窗口内仍有更新的历史议题。

## 1. 今日速览

Claude Code 发布 **v2.1.311**，重点增强自托管 runner 的空闲会话保活，并尝试修复启动及长对话阶段可能出现的卡顿。社区讨论仍集中在三个方向：**终端输出可复制性、模型可靠性与用量异常，以及 Desktop/Remote Control 集成稳定性**；其中多 Connector 账号支持和复制粘贴问题热度最高。

## 2. 版本发布

### v2.1.311

- `self-hosted-runner` 新增 `--hold-idle-file` 与 `--max-hold-min`，允许宿主发现 runner 遗留进程后继续保持空闲会话。
- Explanatory 输出样式新增提示：当用户要求 Claude 提供解释时，会显示相关使用提示。
- 修复启动阶段及部分长阶段运行中的卡顿问题。
- [Release / GitHub 仓库](https://github.com/anthropics/claude-code)

## 3. 社区热点 Issues

1. **支持在同一 Connector 下配置多个账号**  
   请求 Claude 网页版和 Claude Code 支持同一 Connector、不同 Anthropic 账号并行使用。该功能涉及认证、会话路由和权限隔离，直接影响多账号团队与个人用户，评论和点赞均居社区首位。  
   [Issue #27302](https://github.com/anthropics/claude-code/issues/27302)

2. **终端复制内容带有缩进和尾随空格**  
   从 Claude Code 终端复制段落或代码时，会带入提示符对应的前导缩进及行尾空格，影响粘贴到编辑器、Issue 和聊天工具。  
   [Issue #18170](https://github.com/anthropics/claude-code/issues/18170)

3. **CLI 输出格式破坏复制粘贴并浪费 token**  
   问题不仅包括统一的两空格缩进，还包括约 80 字符硬换行，甚至可能从单词中间截断。用户清理格式会额外消耗时间与 token，是高影响的基础体验问题。  
   [Issue #15199](https://github.com/anthropics/claude-code/issues/15199)

4. **Desktop 提示建议自 2.1.229 起静默消失**  
   macOS Claude Code Desktop 的 prompt suggestions 被标记为回归问题，说明新版稳定性仍需持续跟踪。对于依赖建议入口快速启动任务的用户，回归会直接降低操作效率。  
   [Issue #88391](https://github.com/anthropics/claude-code/issues/88391)

5. **Windows 下 `claude://code/new?folder=` 错误创建临时工作区**  
   当链接中的文件夹与当前选中文件夹相同时，Desktop 会启动 scratch workspace。Deep link 场景中的参数归一化问题影响自动化入口和固定目录工作流。  
   [Issue #92210](https://github.com/anthropics/claude-code/issues/92210)

6. **相同 token 消耗下，周限额使用速度异常上升**  
   用户报告一周内从 0% 增至 54% 仅用 22 小时，而此前达到 60% 需要 4.4 天。该问题直接影响成本预算，也可能涉及重试、上下文膨胀或计量口径变化。  
   [Issue #103376](https://github.com/anthropics/claude-code/issues/103376)

7. **子代理压缩与内部摘要调用产生不完整 Hook 载荷**  
   `PreCompact`、`PostCompact`、`SessionStart(compact)` 在子代理压缩时缺少 agent 字段，`SubagentStop` 还可能触发于从未创建代理的内部摘要器，导致自动化 Hook 误判。  
   [Issue #91910](https://github.com/anthropics/claude-code/issues/91910)

8. **严格 MCP Schema 中可空参数无法使用**  
   当参数通过 `anyOf: [X, null]` 声明、且 `null` 表示“显式省略”时，Claude Code 实际从不发送 JSON `null`，导致兼容 strict-tool-input-schema 的 MCP 服务不可用。  
   [Issue #105223](https://github.com/anthropics/claude-code/issues/105223)

9. **Remote Control 会话重命名未同步至 Mac 和 Web**  
   在一个客户端重命名会话后，Mac Remote Control 客户端或网页端仍显示旧名称，反映 Desktop、移动端和 Web 之间的状态同步存在断点。  
   [Issue #93018](https://github.com/anthropics/claude-code/issues/93018)

10. **Fork 会话无法进入 Remote Control，移动端 Code 标签页不可见**  
    从现有会话 fork 出来的会话没有被 Remote Control bridge 注册，因此不会出现在移动端。该问题直接影响跨设备接续和 fork 后远程操作。  
    [Issue #94396](https://github.com/anthropics/claude-code/issues/94396)

## 4. 重要 PR 进展

1. **从官方市场安装插件**  
   让 `claude-code-plugins` marketplace 可直接安装 `claude-plugins-official` 中的插件；PR 明确要求等待上游 `code-review` 移植和插件版本更新后再合并，以避免旧版本或无效更新。  
   [PR #105303](https://github.com/anthropics/claude-code/pull/105303)

2. **修正 security-guidance 插件文档描述**  
   文档此前声称插件包含单一 `PreToolUse` Hook 和 9 条规则，但实际分别包含三个触发器与 25 条模式；此次同步为真实实现。  
   [PR #81576](https://github.com/anthropics/claude-code/pull/81576)

3. **同步 marketplace 与插件元数据**  
   将 `security-guidance` 的 marketplace 版本从 1.0.0 更新至 2.0.0，并修正描述，消除安装与展示信息不一致。  
   [PR #66577](https://github.com/anthropics/claude-code/pull/66577)

4. **安全审查排除受限文件和密钥文件**  
   Commit reviewer 不再读取被 `Read` deny/ask 规则覆盖的文件及 `.env`、密钥、凭据存储等常见敏感文件，同时保留环境变量退出机制。  
   [PR #96434](https://github.com/anthropics/claude-code/pull/96434)

5. **修复 `**` glob 无法匹配零层路径**  
   原先基于 `fnmatch` 的匹配逻辑会漏掉顶层文件；修复后 `**/*.ts` 可按文档语义匹配任意深度。  
   [PR #87079](https://github.com/anthropics/claude-code/pull/87079)

6. **保留 Python 解释器探测错误**  
   不再将探测过程的 stderr 全部重定向至 `/dev/null`，当所有 Python 候选均失败时会显示具体诊断信息，降低环境问题排查难度。  
   [PR #86746](https://github.com/anthropics/claude-code/pull/86746)

7. **文档文件跳过 XSS 告警**  
   将 XSS 类字符串规则接入已有文档路径过滤，减少文档和示例代码中的误报，同时保留可执行源码的检测。  
   [PR #85806](https://github.com/anthropics/claude-code/pull/85806)

8. **更新 security-guidance 默认模型引用**  
   将硬编码的 Opus 4.7、Sonnet 4.6 更新为当前 Opus 5、Sonnet 5，使插件默认审查模型与官方模型代际保持一致。  
   [PR #85409](https://github.com/anthropics/claude-code/pull/85409)

9. **支持 Windows venv 布局**  
   修复 Windows 下 agentic reviewer 因缺少 `claude_agent_sdk` 而跳过启动的问题，并适配 Windows 虚拟环境目录结构。  
   [PR #81426](https://github.com/anthropics/claude-code/pull/81426)

10. **macOS 系统证书与 `NO_PROXY` 处理修复**  
    在使用 Bun runtime 时加载 macOS 系统证书，并处理 `NO_PROXY` 黑名单问题，避免 Claude Cowork 因自签名证书或代理配置错误而无法连接 API。  
    [PR #76640](https://github.com/anthropics/claude-code/pull/76640)

## 5. 功能需求趋势

### 身份认证与多账号管理

- 多 Connector、多账号并行使用仍是最高热度需求。
- 社区期待认证状态、账号切换及会话归属在 CLI、Desktop 和 Web 间保持一致。
- 代表议题：[Issue #27302](https://github.com/anthropics/claude-code/issues/27302)

### 输出质量与 Token 效率

- 用户希望终端输出默认更简洁，减少解释性文字和重复总结。
- 格式硬换行、缩进和尾随空格既损害复制体验，也会增加后续 token 消耗。
- 代表议题：[Issue #15199](https://github.com/anthropics/claude-code/issues/15199)、[Issue #96645](https://github.com/anthropics/claude-code/issues/96645)

### Desktop、Remote Control 与移动端协同

- 会话重命名、fork 可见性、PR 合并后自动归档等跨端状态问题受到关注。
- 用户期待 Desktop、CLI、Web 和移动端具备一致的生命周期管理与同步能力。
- 代表议题：[Issue #94396](https://github.com/anthropics/claude-code/issues/94396)、[Issue #93018](https://github.com/anthropics/claude-code/issues/93018)

### MCP 与插件生态

- 严格 JSON Schema、MCP 可空参数及插件安装体验成为新的兼容性重点。
- 官方市场直接安装插件可减少手工配置成本，但版本同步和升级行为必须可靠。
- 代表议题：[Issue #105223](https://github.com/anthropics/claude-code/issues/105223)、[PR #105303](https://github.com/anthropics/claude-code/pull/105303)

### 安全边界与文件访问控制

- `.agentsignore` 提案希望提供类似 `.gitignore` 的机制，明确 Agent 永不访问的路径。
- 与 deny/ask 规则、密钥排除和 reviewer 隔离结合后，有望形成更易维护的安全策略层。
- 代表议题：[Issue #92816](https://github.com/anthropics/claude-code/issues/92816)

### Windows 与 macOS 平台体验

- Windows 的控制台抢焦点、Deep link、Desktop 会话归档仍需改善。
- macOS 侧则集中在 Desktop 回归、sandbox 网络、证书和会话恢复。
- 代表议题：[Issue #91264](https://github.com/anthropics/claude-code/issues/91264)、[Issue #99650](https://github.com/anthropics/claude-code/issues/99650)

## 6. 开发者关注点

- **可复制、可解析的输出**：终端格式不应混入视觉缩进或破坏单词的硬换行；CLI 输出也应尽量支持“一键复制为原始文本”。
- **用量可预测性**：社区希望解释限额消耗速度的异常变化，并提供更透明的 token、重试、上下文缓存与周限额统计。
- **模型不能将未经验证的信息当作事实**：测试通过、代码已执行、结果完整等声明应可核验；截断日志不能被表述为完整测试结论。相关反馈见 [Issue #103500](https://github.com/anthropics/claude-code/issues/103500) 和 [Issue #94168](https://github.com/anthropics/claude-code/issues/94168)。
- **Agent 操作必须遵守文件所有权和权限约束**：包括不得擅自修改认证/MFA、删除用户测试夹具或覆盖生产配置；相关案例见 [Issue #95345](https://github.com/anthropics/claude-code/issues/95345) 和 [Issue #101924](https://github.com/anthropics/claude-code/issues/101924)。
- **Hook 语义需要明确且稳定**：子代理、内部摘要器和普通会话必须能被可靠区分，避免 Hook 因载荷缺失而误触发。
- **网络与代理兼容性**：社区持续关注 `ECONNRESET`、macOS sandbox 截断响应、NO_PROXY、系统证书以及代理网关配置。代表议题：[Issue #99650](https://github.com/anthropics/claude-code/issues/99650)、[Issue #96070](https://github.com/anthropics/claude-code/issues/96070)。
- **CLI、Desktop、VS Code、移动端体验趋同**：用户希望会话命名、fork、归档、deep link 和 Remote Control 状态在所有客户端中一致。
- **安全插件需要兼顾覆盖率和误报**：安全审查不仅要覆盖更多注入与敏感信息模式，还应避免文档误报、路径越界和密钥文件误读。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-27**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 今日速览

过去 24 小时，Codex 社区集中反馈 Windows 兼容性、IDE 扩展启动异常、命令执行卡死以及项目与会话状态丢失等生产环境问题，其中多起故障与近期应用或扩展更新相关。与此同时，Rust 预发布版本持续推进，GPT-6.1 Terra、插件系统、OAuth、审批策略与 TUI 会话恢复成为主要开发方向。

---

## 版本发布

过去 24 小时发布 3 个 Rust 预发布版本：

- [**rust-v0.166.0-alpha.1**](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.1)：0.166.0-alpha.1。
- [**rust-v0.165.0-alpha.3**](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.3)：0.165.0-alpha.3。
- [**rust-v0.165.0-alpha.1.1**](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1.1)：0.165.0-alpha.1.1。

> Release 页面未提供更详细变更说明；结合 PR 动态，当前分支主要涉及模型目录、插件运行时、TUI 会话恢复、OAuth、审批策略和上下文管理。

---

## 社区热点 Issues

### 1. VS Code 聊天应按当前工作区或项目隔离
- [**#25319 — Scope Codex VS Code chats to the current workspace/project**](https://github.com/openai/codex/issues/25319)
- **重要性：** 多项目开发者目前难以避免不同仓库之间会话和历史记录混杂，属于 IDE 集成的基础体验与上下文安全问题。
- **社区反应：** 56 条评论、125 个赞，是本期关注度最高的需求。
- **诉求：** 在 Codex VS Code 扩展中按工作区或项目组织、筛选聊天及线程历史。

### 2. Windows 版 VS Code 扩展升级后无法启动 UI
- [**#56655 — UI doesn't start in VS Code extension 26.51021.22027**](https://github.com/openai/codex/issues/56655)
- **重要性：** 涉及 IDE 扩展完全不可用，且与 Windows 平台相关，可能直接影响升级后的开发工作流。
- **社区反应：** 24 条评论、28 个赞，讨论集中在版本兼容、启动失败和可复现条件。
- **关键信息：** 报告环境为 Windows 10.0.26300、VS Code、Pro 订阅，升级至 `26.51021.22027` 后出现异常。

### 3. Windows MXC 沙箱因无关 BitLocker 卷锁定而无法启动命令
- [**#50915 — MXC fails before command launch when an unrelated BitLocker volume is locked**](https://github.com/openai/codex/issues/50915)
- **重要性：** 沙箱在命令启动前即失败，意味着即使工作区与锁定卷无关，外部存储状态仍可能阻断 Codex 的全部本地执行。
- **社区反应：** 22 条评论、8 个赞。
- **开发价值：** 需要明确卷枚举、挂载探测与沙箱初始化之间的边界，避免扩大失败范围。

### 4. Windows computer-use 无法可靠识别 Chrome URL
- [**#53053 — Windows computer-use cannot determine Chrome URL**](https://github.com/openai/codex/issues/53053)
- **重要性：** 浏览器自动化依赖当前 URL 实施策略校验；无法识别地址会让已登录页面和后台标签页难以受控使用。
- **社区反应：** 9 条评论、1 个赞。
- **症状：** Windows 上可以列出 Chrome 窗口，但 `get_window_state` 无法以足够置信度判断当前浏览器 URL。

### 5. Windows 附件下载因目录创建权限失败
- [**#50179 — Attachment download fails on Windows: cannot create attachment directory (os error 5)**](https://github.com/openai/codex/issues/50179)
- **重要性：** 影响 Codex Work 模式下载 PNG、DOCX 等附件进行检查，是典型的端到端文件处理故障。
- **社区反应：** 8 条评论、4 个赞。
- **排查线索：** 无痕模式、重启和更换文件格式均未解决，错误为“访问被拒绝（os error 5）”。

### 6. 活跃 Goal 存在时，已完成的 Steered 对话被误判为当前任务
- [**#30859 — Codex App incorrectly treats completed Steered conversation prompts as current tasks after compaction**](https://github.com/openai/codex/issues/30859)
- **重要性：** 涉及压缩后上下文重建与任务状态一致性，可能造成重复执行、错误续接或状态污染。
- **社区反应：** 8 条评论。
- **关键场景：** 已完成的 Steered prompt 在 compaction 后重新出现，同时系统中存在活跃 goal。

### 7. Windows 更新后项目从侧栏消失，但数据仍留在 SQLite
- [**#55869 — Codex Windows: Projects disappear after update while records remain in local SQLite database**](https://github.com/openai/codex/issues/55869)
- **重要性：** 暗示应用层项目索引、迁移或加载逻辑异常；数据库记录仍在，为数据恢复和根因定位提供线索。
- **社区反应：** 7 条评论。
- **风险：** 用户升级后可能误以为项目被删除，实际属于展示层或索引层故障。

### 8. macOS 误判 Chrome 扩展未安装
- [**#38530 — Chrome extension shown as not installed after bundled plugin uninstall; detection fails with TCC/EPERM**](https://github.com/openai/codex/issues/38530)
- **重要性：** macOS TCC/EPERM 权限错误可能破坏扩展状态探测，并与浏览器插件卸载后的检测逻辑相关。
- **社区反应：** 7 条评论、1 个赞。
- **症状：** 扩展已安装、已启用且侧栏可打开，但应用仍提示未安装，并要求安装 ChatGPT App。

### 9. Codex 所有模型持续提示容量已满
- [**#56324 — “Selected model is at capacity” on ALL models for 2+ days**](https://github.com/openai/codex/issues/56324)
- **重要性：** Pro 用户反馈 ChatGPT、Work、Codex 跨入口均受影响，故障范围可能超出单一客户端。
- **社区反应：** 5 条评论；用户称支持渠道已确认并非公开故障。
- **关键信息：** 报告环境为 Windows 11、Codex App `26.1016.61520`，持续时间超过两天。

### 10. Windows 本地命令执行器永久卡住
- [**#53605 — Codex for Windows: Local command runner hangs indefinitely**](https://github.com/openai/codex/issues/53605)
- **重要性：** 即使简单的 `cmd /c echo CODEX_TEST_1` 也只返回 session ID，不产生输出或退出码，直接阻断自动化任务。
- **社区反应：** 3 条评论；重装和重启 sandbox service 均未解决。
- **开发价值：** 建议重点检查子进程启动、管道通信、shell 生命周期管理和超时处理。

---

## 重要 PR 进展

### 1. 将 TUI 会话恢复拆分为“准备”和“激活”
- [**#57342 — Separate TUI session resume preparation from activation**](https://github.com/openai/codex/pull/57342)
- 恢复已保存线程时，先解析配置并连接目标线程，再替换当前显示会话，降低恢复过程中界面与后端状态错位的可能性。

### 2. 将 GPT-6.1 Terra 回移到 0.165.0-alpha 发布线
- [**#57337 — Backport GPT-6.1 Terra to the model catalogs**](https://github.com/openai/codex/pull/57337)
- 为 `0.165.0-alpha.1.2` 准备 GPT-6.1 Terra 模型目录，并针对 Vertex 请求测试处理回移冲突。

### 3. 为模型目录增加细粒度审批模板字段
- [**#57325 — Add model catalog fields for granular approval templates**](https://github.com/openai/codex/pull/57325)
- 新增可选的 `approvals.granular` 字段，用于配置策略引入以及允许、拒绝类别的提示文本，为更细粒度的工具审批提供基础。

### 4. 为显式选择的插件提供精简提示
- [**#57317 — Add opt-in concise hints for explicitly selected plugins**](https://github.com/openai/codex/pull/57317)
- 新增默认关闭的 `features.simplified_selection_hints`，用简短开发者提示替代冗长插件能力说明，减少上下文占用。

### 5. 失败的子代理不再自动将父任务标记为“需要关注”
- [**#57315 — Keep failed subagents from marking tasks as needing attention**](https://github.com/openai/codex/pull/57315)
- 修正 agent command center 的任务状态归类，避免子代理正常失败却把父任务错误提升至“Needs you”。

### 6. Gateway OAuth 默认使用 Authorization Bearer Token
- [**#57313 — Default gateway OAuth delivery to Authorization bearer tokens**](https://github.com/openai/codex/pull/57313)
- 未显式配置 `gateway_oauth.delivery` 时，默认发送 `Authorization: Bearer …`；同时保留自定义 header、cookie，并拒绝冲突的 provider 凭证配置。

### 7. 集中化 Guardian 根上下文准备流程
- [**#57312 — Centralize Guardian root context preparation**](https://github.com/openai/codex/pull/57312)
- 将根消息准备和 handoff 上下文选择移入 `codex-guardian-context`，统一文本上限、完整记录接纳及上下文边界处理。

### 8. 在 rollout trace 中保留工具输出版本和历史顺序
- [**#57311 — Preserve tool output versions and history order in rollout traces**](https://github.com/openai/codex/pull/57311)
- 修复同一工具调用产生多个输出、压缩后保留相同调用或条目 ID 时被误判为内容冲突的问题，并保护后置工具与 code-cell 事件顺序。

### 9. 正确暴露工作区路由中的 refresh-token 拒绝错误
- [**#57304 — Surface refresh-token rejection errors during workspace routing**](https://github.com/openai/codex/pull/57304)
- 当 token 刷新被永久拒绝时，不再只显示泛化的 discovery error，而是提示用户重新登录，改善工作区发现失败的诊断体验。

### 10. 为插件增加独立进程宿主及有界 IPC
- [**#57290 — Add a plugin process host with bounded IPC and lifecycle management**](https://github.com/openai/codex/pull/57290)
- 新增 `codex-plugin-host`，以清理后的环境启动辅助进程，通过 readiness handshake 验证就绪，并提供带 256 KiB 帧限制、写入背压及生命周期管理的 stdin/stdout 通道。

---

## 功能需求趋势

### 1. IDE 与工作区级会话管理
- VS Code 扩展需要按项目或工作区隔离聊天与线程历史。
- 社区还在处理扩展启动失败、Open VSX Windows 包缺失，以及 VS Code Cloud 环境不可用等问题。
- 代表议题：[**#25319**](https://github.com/openai/codex/issues/25319)、[**#39476**](https://github.com/openai/codex/issues/39476)、[**#56655**](https://github.com/openai/codex/issues/56655)、[**#56855**](https://github.com/openai/codex/issues/56855)。

### 2. Windows 成为稳定性治理重点
高频问题覆盖扩展启动、MXC 沙箱、附件下载、项目索引、本地命令执行、审批请求失效和聊天读取异常。
代表议题：[**#50915**](https://github.com/openai/codex/issues/50915)、[**#50179**](https://github.com/openai/codex/issues/50179)、[**#53605**](https://github.com/openai/codex/issues/53605)、[**#57345**](https://github.com/openai/codex/issues/57345)。

### 3. 浏览器与 computer-use 能力增强
- 需要稳定识别 Chrome 当前 URL，以支持策略执行。
- Windows 本地 `file://` 网站验证仍受阻。
- CUA 结束后，iframe 的 Document 响应可能长期停留在暂停状态。
- 代表议题：[**#53053**](https://github.com/openai/codex/issues/53053)、[**#55659**](https://github.com/openai/codex/issues/55659)、[**#57339**](https://github.com/openai/codex/issues/57339)。

### 4. 新模型与模型目录管理
GPT-6.1 Terra 被加入 OpenAI、GCP Vertex、Amazon Bedrock 目录，并成为 GCP 首选 memory consolidation 模型；同期增加模型级细粒度审批配置。
相关 PR：[**#57293**](https://github.com/openai/codex/pull/57293)、[**#57337**](https://github.com/openai/codex/pull/57337)、[**#57325**](https://github.com/openai/codex/pull/57325)。

### 5. 插件系统走向工程化
新增插件进程宿主、有界 IPC、生命周期管理，以及面向显式插件选择的精简提示，体现插件能力正从配置声明转向独立运行和上下文成本控制。
相关 PR：[**#57290**](https://github.com/openai/codex/pull/57290)、[**#57317**](https://github.com/openai/codex/pull/57317)、[**#57294**](https://github.com/openai/codex/pull/57294)。

### 6. 配额、容量与使用窗口管理
除模型容量异常外，社区希望周配额可扩展现有 5 小时使用窗口，并修复 Codex / Work 分析页按本地 OS 时间显示重置时间的问题。
代表议题：[**#41691**](https://github.com/openai/codex/issues/41691)、[**#47788**](https://github.com/openai/codex/issues/47788)、[**#56324**](https://github.com/openai/codex/issues/56324)。

### 7. 远程计算机与多设备管理
Dots 侧栏中的计算机命名不一致且无法重命名；已有 Local-task 的继续与恢复行为也与文档存在冲突。
代表议题：[**#53016**](https://github.com/openai/codex/issues/53016)、[**#51722**](https://github.com/openai/codex/issues/51722)。

---

## 开发者关注点

1. **升级后的兼容性风险需要更快定位**  
   VS Code 扩展无法启动、Windows 更新后项目消失、Windows 命令执行卡死等问题，体现出用户希望明确区分应用、扩展、sandbox 和数据库层的责任边界，并获得可复现的回归测试信息。

2. **长任务状态必须可靠**  
   压缩后任务被错误恢复、失败子代理误报“需要关注”、长期任务重复修复和验证，说明开发者尤其关注上下文压缩、任务生命周期、父子代理状态及交接承诺的一致性。相关反馈见 [**#30859**](https://github.com/openai/codex/issues/30859)、[**#55749**](https://github.com/openai/codex/issues/55749)、[**#57315**](https://github.com/openai/codex/pull/57315)。

3. **工具执行必须可观测、可终止**  
   命令无输出、无退出码以及 app-server 卡死，暴露出超时、进程清理、会话状态和诊断日志仍需加强。相关反馈见 [**#53605**](https://github.com/openai/codex/issues/53605)、[**#56998**](https://github.com/openai/codex/issues/56998)、[**#15801**](https://github.com/openai/codex/issues/15801)。

4. **安全审批需要更准确、更少误报**  
   已授权的漏洞赏金、本地集成审查和只读浏览器访问仍可能被 safety check 拦截；恢复 Chrome 后还可能被识别为绕过拒绝。开发者需要基于用户授权上下文、目标范围和操作类型进行更精确的策略判断。相关反馈见 [**#54998**](https://github.com/openai/codex/issues/54998)、[**#50576**](https://github.com/openai/codex/issues/50576)、[**#56034**](https://github.com/openai/codex/issues/56034)。

5. **插件与工具集成需要隔离和边界控制**  
   插件进程宿主、帧大小限制、背压、清理环境等 PR 表明社区希望插件运行具备强隔离、资源上限、可靠握手和明确生命周期，避免影响主进程稳定性。

6. **CLI/TUI 的可读性和网络故障诊断受到关注**  
   TUI 异步问答现已支持 Markdown、展开问题可交还终端处理链接；与此同时仍有 macOS 持续显示“Reconnecting… waiting for network”、远程压缩路由失败等问题。相关议题见 [**#53825**](https://github.com/openai/codex/issues/53825)、[**#56997**](https://github.com/openai/codex/issues/56997)，相关 PR 见 [**#57292**](https://github.com/openai/codex/pull/57292)、[**#57285**](https://github.com/openai/codex/pull/57285)。

> **整体判断：** Codex 当前的主线不是单一功能扩张，而是从模型与插件能力扩展转向跨平台可靠性：尤其是 Windows 应用与 VS Code 扩展、会话恢复、命令执行、浏览器安全和审批策略，值得优先跟踪。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-27**  
**数据范围：GitHub `google-gemini/gemini-cli` 过去 24 小时更新**

## 1. 今日速览

- 今日发布 `v0.67.0-nightly.20261027.g363a13119`，重点修复项目级消费上限错误分类，并在 ACP 权限请求中补充 MCP 服务与工具元数据。
- 社区讨论高度集中在 **Agent/Subagent 可靠性**：包括达到最大轮次后被误报成功、Generalist Agent 挂起、Browser Agent 配置失效及 Wayland 兼容问题。
- 工程侧集中推进 **权限与执行安全**：取消操作后禁止继续写文件、Podman 沙箱 UID 映射、沙箱权限规则识别，以及 VS Code 扩展资源释放等修复。

---

## 2. 版本发布

### `v0.67.0-nightly.20261027.g363a13119`

本次 nightly 版本主要包含以下更新：

- **修复项目消费上限错误分类**：将项目 spending cap 相关错误识别为终止型配额错误，避免继续执行无效请求。
- **增强 ACP 权限请求信息**：在权限请求中携带 MCP server 和 tool 元数据，便于客户端识别具体服务及工具。
- **自动化版本更新**：对应版本升级 PR 已合并。

链接：

- [Nightly Release v0.67.0.20261027](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261027.g363a13119)
- [版本升级 PR #29972](https://github.com/google-gemini/gemini-cli/pull/29972)
- [消费上限错误修复 PR #29961](https://github.com/google-gemini/gemini-cli/pull/29961)
- [ACP 权限元数据 PR #29910](https://github.com/google-gemini/gemini-cli/pull/29910)

---

## 3. 社区热点 Issues

### 1. Subagent 达到 `MAX_TURNS` 后仍被报告为成功

- **Issue**：[ #22323 ](https://github.com/google-gemini/gemini-cli/issues/22323)
- **优先级**：P1
- **重要性**：Agent 在实际未完成分析的情况下返回 `status: "success"` 和 `Termination Reason: "GOAL"`，会掩盖真实中断，可能导致上层 Agent 错误地继续执行或错误汇报结果。
- **社区反应**：13 条评论、2 个赞，评论数位居今日首位，说明该问题对自动化工作流和评估可靠性影响较大。

### 2. Generalist Agent 持续挂起

- **Issue**：[ #21409 ](https://github.com/google-gemini/gemini-cli/issues/21409)
- **优先级**：P1
- **重要性**：调用 Generalist Agent 执行创建文件夹等简单操作时可能无限等待，用户需要手动取消；禁用 Subagent 后可规避。
- **社区反应**：8 条评论、8 个赞，赞数与评论热度均较高，表明这是高感知度的可用性问题。

### 3. 评估 AST-aware 文件读取、搜索与代码库映射

- **Issue**：[ #22745 ](https://github.com/google-gemini/gemini-cli/issues/22745)
- **优先级**：P2
- **重要性**：目标是评估基于 AST 的精确代码读取和映射能否减少无效文件读取、降低 token 消耗并提高 Agent 效率。
- **社区反应**：7 条评论、1 个赞，属于近期 Agent 工具链演进的重要方向性议题。
- **相关讨论**：
  - [AST-aware CLI 映射 #22746](https://github.com/google-gemini/gemini-cli/issues/22746)
  - [AST-aware 搜索与读取 #22747](https://github.com/google-gemini/gemini-cli/issues/22747)

### 4. 引入零依赖操作系统沙箱及执行后意图路由

- **Issue**：[ #19873 ](https://github.com/google-gemini/gemini-cli/issues/19873)
- **优先级**：P2
- **重要性**：旨在利用 Gemini 对 Bash 和 POSIX 工具链的亲和力，同时通过沙箱隔离、执行后意图判断等机制控制安全风险。
- **社区反应**：9 条评论、1 个赞，讨论热度较高，体现了“模型原生 Shell 能力”与“用户安全边界”之间的核心张力。

### 5. Gemini 不够主动使用 Skills 和 Subagents

- **Issue**：[ #21968 ](https://github.com/google-gemini/gemini-cli/issues/21968)
- **优先级**：P2
- **重要性**：用户反馈 Gemini CLI 往往需要显式提示才会调用自定义 Skill 或 Subagent，降低了 Agent 编排能力的自动化程度。
- **社区反应**：7 条评论，反映出“能力存在但调度策略不积极”是当前重要体验缺口。

### 6. Browser Agent 忽略 `settings.json` 覆盖配置

- **Issue**：[ #22267 ](https://github.com/google-gemini/gemini-cli/issues/22267)
- **优先级**：P2
- **重要性**：Browser Agent 不正确应用全局或项目级 `settings.json`，包括 `maxTurns` 等配置，意味着用户无法可靠控制浏览器 Agent 的运行边界。
- **社区反应**：4 条评论，属于 Agent 配置一致性与可控性问题。

### 7. Browser Agent 缺少会话接管与锁恢复机制

- **Issue**：[ #22232 ](https://github.com/google-gemini/gemini-cli/issues/22232)
- **优先级**：P2
- **重要性**：当持久化浏览器配置被已有实例或孤儿进程锁定时，Browser Agent 会快速失败；社区希望支持自动接管和安全恢复。
- **社区反应**：4 条评论，代表了 Browser Agent 在真实桌面环境中的稳定性诉求。

### 8. 工具数量过多时触发 400 错误

- **Issue**：[ #24246 ](https://github.com/google-gemini/gemini-cli/issues/24246)
- **优先级**：P2
- **重要性**：当可用工具过多时，Gemini CLI 可能收到 400 错误，说明工具注册、筛选和上下文裁剪机制仍存在规模瓶颈。
- **社区反应**：3 条评论、0 个赞，但问题直接关系到扩展大量 MCP 工具或自定义工具时的可用性。

### 9. 模型频繁在随机位置创建临时脚本

- **Issue**：[ #23571 ](https://github.com/google-gemini/gemini-cli/issues/23571)
- **优先级**：P2
- **重要性**：限制模型使用内置 Shell 工具后，模型倾向于在工作区各处生成编辑脚本，增加清理成本并污染 Git 状态。
- **社区反应**：3 条评论，反映出工具限制后模型行为可能发生迁移，而非真正减少副作用。

### 10. Subagent 轨迹无法方便地通过 `/chat share` 查看

- **Issue**：[ #22598 ](https://github.com/google-gemini/gemini-cli/issues/22598)
- **优先级**：P3
- **重要性**：Subagent 轨迹虽然已由聊天记录服务保存，但缺少易访问、易分享的查看入口，不利于行为审查和评估。
- **社区反应**：2 条评论、1 个赞，是 Agent 可观测性与评测体验的重要改进方向。

---

## 4. 重要 PR 进展

### 1. 取消后跳过文件写入

- **PR**：[ #29973 ](https://github.com/google-gemini/gemini-cli/pull/29973)
- 在内容准备完成后、实际写入前再次检查取消状态，避免 `replace` 或 `write_file` 在用户取消后仍覆盖目标文件或创建新文件。
- 这是直接改善 Agent 安全性和用户预期的修复。

### 2. ACP 客户端接收 Shell 输出

- **PR**：[ #29958 ](https://github.com/google-gemini/gemini-cli/pull/29958)
- 修复 ACP 客户端收到空 `tool_call_update` 的问题。
- 原因是 Shell 工具优先返回 PTY `AnsiOutput`，但转换逻辑此前未正确转发该类型。

### 3. 修复自定义模型别名的 `generateContentConfig` 丢失

- **PR**：[ #29810 ](https://github.com/google-gemini/gemini-cli/pull/29810)
- 当自定义别名指向 `flash`、`pro` 或 `auto` 等 tier 时，首次请求会丢失别名配置中的 `temperature`、`thinkingLevel` 和 `maxOutputTokens`。
- 修复后模型 tier 解析不会意外覆盖用户显式设置。

### 4. Android/Termux 支持原生 ripgrep

- **PR**：[ #29884 ](https://github.com/google-gemini/gemini-cli/pull/29884)
- 允许 Termux 信任系统路径中的 ripgrep 二进制，使 `grep_search` 可正常使用通过 `pkg install ripgrep` 安装的工具。
- 对 Android 开发和受限路径环境尤其有价值。

### 5. 修复 VS Code 扩展泄漏的 disposable

- **PR**：[ #29953 ](https://github.com/google-gemini/gemini-cli/pull/29953)
- 修正 `activate()` 中多余括号导致的逗号表达式问题，使 `gemini.diff.accept` 和工作区变更监听器正确进入 `context.subscriptions`。
- 可避免扩展重复激活或卸载后资源未释放。

### 6. 修复 ripgrep 超时被误报为“无匹配”或部分结果

- **PR**：[ #29831 ](https://github.com/google-gemini/gemini-cli/pull/29831)
- ripgrep 搜索超时后应明确返回错误，而不是将少量匹配当作正常结果或无匹配结果。
- 这能避免 Agent 基于不完整信息继续决策。

### 7. Podman rootless 沙箱增加 UID 映射

- **PR**：[ #29718 ](https://github.com/google-gemini/gemini-cli/pull/29718)
- 对 rootless Podman 沙箱追加 `--userns=keep-id`，解决容器内用户 UID 无效导致的 `EACCES`。
- 已关闭并进入后续整合流程。

### 8. 沙箱规则不再错误识别命令为 `trap`

- **PR**：[ #29726 ](https://github.com/google-gemini/gemini-cli/pull/29726)
- POSIX 下包装后台进程时，命令名可能被错误识别为 `trap`，导致 `sandbox.toml` 和会话级权限批准规则无法生效。
- 修复直接关系到沙箱权限执行的正确性。

### 9. 目录列表显式报告被省略的条目

- **PR**：[ #29727 ](https://github.com/google-gemini/gemini-cli/pull/29727)
- `list_directory` 不再因路径验证拒绝部分现有文件而直接显示零条目。
- 被拒绝的条目现在会明确出现在模型结果和用户摘要中，避免信息静默丢失。

### 10. 保留超长后台日志的可用尾部

- **PR**：[ #29947 ](https://github.com/google-gemini/gemini-cli/pull/29947)
- 当后台日志存在超过 64 KB 的单行时，保留可用的尾部片段，而不是只返回 `Full Log Output:` 并丢弃全部内容。
- 对长行 JSON、堆栈信息及机器生成日志尤其重要。

### 其他值得关注的 PR

- [后台输出读取支持取消 #29948](https://github.com/google-gemini/gemini-cli/pull/29948)：避免用户取消后仍等待并读取完整日志。
- [VS Code 集成测试重试临时下载失败 #29951](https://github.com/google-gemini/gemini-cli/pull/29951)：P0，针对 nightly 流程中 VS Code 下载超时导致的非业务性失败。
- [构建文件安全确认状态重置与去重 #29719](https://github.com/google-gemini/gemini-cli/pull/29719)：减少重复安全警告并修复构建文件列表重复问题。

---

## 5. 功能需求趋势

### 5.1 Agent 与 Subagent 编排能力

社区希望 Gemini CLI 更主动、更准确地调用 Skills、Subagents 和浏览器 Agent，同时减少不必要的任务委派。当前的主要矛盾不是“缺少能力”，而是**何时调用、调用谁、如何终止以及如何汇报结果**。

代表议题：

- [Skills/Subagents 主动调用不足 #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- [Local Subagent Sprint 1 #20195](https://github.com/google-gemini/gemini-cli/issues/20195)
- [共享内存与并行 Subagent #18287](https://github.com/google-gemini/gemini-cli/issues/18287)
- [通过 settings.json 发现 Subagent #18285](https://github.com/google-gemini/gemini-cli/issues/18285)

### 5.2 Agent 生命周期、终止语义与可观测性

准确区分“完成”“达到最大轮次”“被取消”“挂起”和“失败”是社区高频诉求。未来需要统一 Subagent 状态模型，并提供更完整的上下文、轨迹和错误报告。

代表议题：

- [MAX_TURNS 被误报为成功 #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- [Generalist Agent 挂起 #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- [Bug 报告缺少 Subagent 上下文 #21763](https://github.com/google-gemini/gemini-cli/issues/21763)
- [Subagent 轨迹分享 #22598](https://github.com/google-gemini/gemini-cli/issues/22598)

### 5.3 AST-aware 代码理解与精确读取

社区正在评估 AST-aware 搜索、读取和代码库映射，以减少整文件读取带来的 token 消耗，并提高方法级定位精度。这可能成为下一阶段提升代码 Agent 效率的重要路线。

代表议题：

- [AST-aware 工具总体评估 #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- [AST-aware 代码库映射 #22746](https://github.com/google-gemini/gemini-cli/issues/22746)
- [AST-aware 搜索与读取 #22747](https://github.com/google-gemini/gemini-cli/issues/22747)
- [Tactful Extraction 精确读取 #19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 5.4 Browser Agent 的稳定性与桌面环境兼容性

Browser Agent 的核心需求集中在配置继承、持久化会话恢复、锁处理以及 Linux Wayland 支持，说明浏览器能力正从实验功能向稳定工程能力演进。

代表议题：

- [Browser Agent 忽略 settings.json #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- [Browser Agent 会话接管与锁恢复 #22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- [Browser Agent 在 Wayland 下失败 #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5.5 工具治理与上下文效率

工具过多可能造成 API 400 错误、上下文膨胀和 token 消耗上升。社区期待更智能的工具选择、作用域控制、持久化任务追踪和结构化上下文管理。

代表议题：

- [超过 128 个工具时触发 400 #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- [使用原生文件工具维护任务追踪 #21000](https://github.com/google-gemini/gemini-cli/issues/21000)
- [以文件型持久任务追踪替代 WriteToDo #18836](https://github.com/google-gemini/gemini-cli/issues/18836)

### 5.6 IDE 与自动化集成质量

VS Code Companion 修复、ACP 输出传递及 MCP 权限元数据表明，Gemini CLI 正持续加强不同客户端和 IDE 集成之间的兼容性与可审计性。

代表议题：

- [VS Code disposable 泄漏修复 #29953](https://github.com/google-gemini/gemini-cli/pull/29953)
- [ACP Shell 输出修复 #29958](https://github.com/google-gemini/gemini-cli/pull/29958)
- [ACP 权限请求 MCP 元数据 #29910](https://github.com/google-gemini/gemini-cli/pull/29910)

---

## 6. 开发者关注点

1. **终止状态必须可信**  
   Subagent 达到最大轮次或实际未完成任务时，不应返回成功。该问题直接影响自动化编排、错误传播和质量评估。

2. **Agent 卡死与无限等待需要统一治理**  
   Generalist Agent、交互式 CLI 命令和输出 Hook 都出现了挂起或崩溃案例。开发者希望加入明确的超时、取消传播和可恢复机制。

3. **配置继承必须一致**  
   Browser Agent 忽略 `settings.json` 的 `maxTurns` 等配置，会让用户失去对 Agent 行为边界的控制。全局、项目级和 Agent 级配置应采用统一合并规则。

4. **取消操作需要真正阻止副作用**  
   社区不仅关注“停止生成”，还关注取消后是否继续写文件、读取日志或执行其他副作用。异步流程必须在每个关键阶段检查取消状态。

5. **沙箱和权限规则需要在真实环境中可靠生效**  
   Podman UID 映射、POSIX 包装命令识别、MCP 权限信息等修复显示，安全机制的正确性正从“原则设计”转向多平台落地验证。

6. **工具和上下文规模成为瓶颈**  
   大量工具会引发 400 错误，大文件读取和临时脚本则造成 token 消耗与工作区污染。开发者期待按需工具选择、AST 精确读取和持久化任务状态。

7. **可观测性和评估仍是短板**  
   Subagent 内部轨迹难以查看，`/bug` 缺少子 Agent 上下文，部分内部评测结果不稳定。社区希望建立更完整、可复现、可分享的 Agent 行为观测链路。

8. **浏览器 Agent 的真实环境兼容性需要加强**  
   Wayland、浏览器 profile 锁、遗留进程和持久化会话都是常见障碍。后续重点应放在跨桌面环境稳定性和会话恢复，而不只是增加浏览器功能。

---

**总体判断**：今日 Gemini CLI 的开发重点明显从“扩展 Agent 能力”转向“让 Agent 在真实环境中可靠、可控、可审计地运行”。短期最值得跟踪的是 Subagent 终止语义、Generalist Agent 挂起、Browser Agent 配置继承，以及取消与沙箱权限相关修复的落地情况。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-27**  
**数据范围：** 过去 24 小时内更新的 Releases、Issues 与 Pull Requests

---

## 1. 今日速览

今日发布 **v1.0.104**，重点改进托管模型 `fusion` 与 Auto 会话行为，并调整后台任务等待机制。社区讨论则集中在**模型与会话控制、ACP 能力对齐、MCP/OAuth 稳定性、Windows 兼容性及会话恢复性能**等方面，其中多个高关注度问题仍未解决。过去 24 小时没有新的 PR 更新。

---

## 2. 版本发布

### v1.0.104

本次版本的主要变化包括：

- 托管模型 **“fusion”** 现在默认以 **Auto** 模式启动，并应用 `fusionTier` 配置。
- **交互式 Autopilot 与 SDK Autopilot 会话**会持续等待已关联的后台任务，不再在达到 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 后提前停止。
- 非交互模式 `-p --autopilot` 仍遵循原有的任务等待超时配置。
- 修复了部分与已保存的 Auto 偏好设置有关的问题；发布说明中的相关内容存在截断。
- 同期发布了修订版本 **v1.0.104-4**，包含额外修复与调整。

**发布页面：**  
https://github.com/github/copilot-cli/releases/tag/v1.0.104

> 注：数据中未提供精确的修订版标签链接，可从仓库 Releases 页面查看。  
> https://github.com/github/copilot-cli/releases

---

## 3. 社区热点 Issues

以下按讨论热度、影响范围和开发者普遍关联度选出 10 个值得关注的 Issue。

### 1. Voice 模式所有内置 ASR 模型静默失败

**Issue：** [#4024](https://github.com/github/copilot-cli/issues/4024)

`/voice` 能正常采集音频，但所有内置 ASR 模型均返回空转写结果。问题指向 Foundry Local Core 中针对 `nemotron_speech`（RNNT）的 `MultiModalProcessor` 路由错误。该问题已有 **14 条评论**，是当日讨论最充分的 Issue 之一。

**重要性：** 语音能力目前属于“能录音、不能识别”的核心功能故障，影响所有内置模型，而非单一模型配置问题。

---

### 2. `/model` 无法在同一会话切换 BYOK 与本地模型

**Issue：** [#3709](https://github.com/github/copilot-cli/issues/3709)

当前 BYOK 模式通过 `COPILOT_MODEL` 将会话绑定到单个模型，而 `/model` 选择器只显示 GitHub 托管模型，无法列出本地或自定义 Provider 提供的模型。该需求获得 **34 个赞、12 条评论**，是列表中社区支持度最高的功能请求之一。

**重要性：** 它限制了开发者在同一会话中比较 GitHub 托管模型、本地模型和自定义端点的能力。

---

### 3. SSH + tmux 环境下 Windows 远程剪贴板失效

**Issue：** [#3260](https://github.com/github/copilot-cli/issues/3260)

从 macOS/Linux 的 tmux 会话 SSH 到 Windows Server 2025 后，Copilot CLI 的复制和粘贴不可用。该问题自 v1.0.47 起出现，已有 **8 条评论**。

**重要性：** 这是明确的跨平台终端交互回归，影响远程开发和混合运维环境中的日常使用。

---

### 4. 429 限流重试策略问题已关闭

**Issue：** [#2760](https://github.com/github/copilot-cli/issues/2760)

Copilot CLI 收到 HTTP 429 后会立即断开并快速重试，可能在短时间内触发 20 次以上请求，形成重试风暴。该 Issue 已关闭，并获得 **8 条评论**。

**重要性：** 合理的退避机制对于共享额度、企业代理及自定义 Provider 至关重要。该问题关闭也意味着社区正在从“发现限流问题”转向验证实际修复效果。

---

### 5. Desktop App 会话因 GitHub 凭据注册失效而终止

**Issue：** [#4905](https://github.com/github/copilot-cli/issues/4905)

Desktop App 启动会话数分钟后出现“GitHub credential registration is no longer available for this session”，导致 MCP server catalog 过期或直接致命。该问题涉及 macOS arm64、Desktop App 1.1.22 与内置 CLI 1.0.84-5，已有 **7 条评论**。

**重要性：** 凭据生命周期与 MCP 服务发现绑定，一旦失效可能同时中断模型请求和扩展工具调用。

---

### 6. ACP 缺少 `contextTier` 会话配置能力

**Issue：** [#4275](https://github.com/github/copilot-cli/issues/4275)

交互式 CLI 可通过 `/model` 在会话中切换上下文窗口层级，但 ACP server 未将 `contextTier` 暴露为 session config。ACP 客户端目前只能在创建会话时设置，无法中途切换。Issue 获得 **6 条评论、4 个赞**。

**重要性：** 该问题反映 ACP 与交互式 CLI 在功能对齐上的持续缺口，直接限制第三方编辑器或代理客户端的集成能力。

---

### 7. 大型会话恢复出现内存激增与单核长时间占用

**Issue：** [#4251](https://github.com/github/copilot-cli/issues/4251)

从 v1.0.73 升级至 v1.0.74 后，恢复大型长期会话会出现 OOM 或单核持续高负载约 70 分钟的情况；报告称内存占用增加约 3–4 倍。该问题已有 **5 条评论**。

**重要性：** 会话恢复是 CLI 高频路径。如果大型项目中的长期会话无法稳定恢复，将直接影响上下文延续和开发效率。

---

### 8. ACP 的 `session/prompt` 会无条件取消后台子代理

**Issue：** [#4555](https://github.com/github/copilot-cli/issues/4555)

在 ACP 模式下，`session/prompt` 处理器的第一步就是无条件调用 `session.abort()`，导致正在运行的后台 sub-agent 被取消；交互式 TUI 不存在这一行为。Issue 有 **2 条评论**。

**重要性：** 这是交互式 CLI 与 ACP 行为不一致的典型案例，可能破坏并行代理工作流和长任务编排。

---

### 9. ACP 模式绕过工具权限确认

**Issue：** [#4537](https://github.com/github/copilot-cli/issues/4537)

报告指出，自 v1.0.81-1 起，ACP 模式不再发送 `session/request_permission`，导致 shell 命令、文件编辑和删除操作自动执行。该问题已有 **2 条评论、2 个赞**。

**重要性：** 权限绕过直接影响自动化客户端的安全边界，也与交互式 CLI 的安全行为明显不一致。

---

### 10. BYOK Azure OpenAI 的 429 重试几乎瞬间耗尽

**Issue：** [#3679](https://github.com/github/copilot-cli/issues/3679)

使用 Azure OpenAI BYOK Provider 时，临时 429 限流会使 CLI 在约 0.15 秒内耗尽全部 5 次重试并立即失败，没有有效退避；重试次数和等待时间也不可配置。Issue 在今日仍有更新，目前有 **1 条评论、1 个赞**。

**重要性：** 这与已关闭的通用 429 重试问题 #2760 相互印证，说明退避策略在 Azure、自建网关等真实企业环境中仍可能表现不佳。

---

## 4. 重要 PR 进展

**过去 24 小时内没有更新的 Pull Requests，因此无 PR 进展可列。**

PR 列表：  
https://github.com/github/copilot-cli/pulls

---

## 5. 功能需求趋势

### 5.1 模型选择与多 Provider 管理

相关需求最为集中：

- 在同一会话中切换 GitHub 托管模型、BYOK 模型和本地模型。
- 自定义 Agent 按 Agent 单独绑定 Provider，而不是共享进程级 `COPILOT_PROVIDER_BASE_URL`。
- 支持 Auto、Claude Opus 等模型的可配置 reasoning effort。
- 改善自定义端点模型名称前缀处理，保证会话恢复兼容。

代表 Issues：

- [#3709：会话内切换 BYOK 与本地模型](https://github.com/github/copilot-cli/issues/3709)
- [#4703：每个自定义 Agent 独立选择 Provider](https://github.com/github/copilot-cli/issues/4703)
- [#4560：Auto 模型无法配置 reasoning effort](https://github.com/github/copilot-cli/issues/4560)
- [#4282：恢复会话时模型名称前缀不一致](https://github.com/github/copilot-cli/issues/4282)

### 5.2 ACP 能力对齐与第三方集成

ACP 正在成为集中补齐能力的关键接口：

- 暴露 `contextTier` 和模型列表。
- 恢复工具权限请求。
- 避免新 prompt 无条件中止后台子代理。
- 使 ACP 与交互式 CLI 在模型、权限和任务生命周期上保持一致。

代表 Issues：

- [#4275：ACP 暴露 contextTier](https://github.com/github/copilot-cli/issues/4275)
- [#4880：ACP 暴露可用模型列表](https://github.com/github/copilot-cli/issues/4880)
- [#4537：ACP 自动批准工具调用](https://github.com/github/copilot-cli/issues/4537)
- [#4555：ACP prompt 取消后台子代理](https://github.com/github/copilot-cli/issues/4555)

### 5.3 MCP 生态与认证稳定性

社区持续关注 MCP 注册表访问、OAuth 登录、进程生命周期和容器环境兼容性：

- 自定义 MCP registry 无法在 CLI 中使用。
- Desktop App 中非第一方 HTTP MCP 的 OAuth 浏览器流程无法启动。
- 已保存有效 token 时，Atlassian 等有状态 MCP 服务仍返回 HTTP 400。
- 启动时重建 MCP client 会遗留 stdio 子进程。
- Linux inotify 配额耗尽后，MCP 配置监听注册失败并导致会话停止处理。

代表 Issues：

- [#4949：无法读取自定义 MCP registry](https://github.com/github/copilot-cli/issues/4949)
- [#4017：Desktop MCP OAuth 流程无弹窗且无错误](https://github.com/github/copilot-cli/issues/4017)
- [#5014：Atlassian MCP OAuth probe 返回 400](https://github.com/github/copilot-cli/issues/5014)
- [#4392：MCP client 重建遗留 stdio 进程](https://github.com/github/copilot-cli/issues/4392)
- [#5242：inotify 限制导致会话停止处理](https://github.com/github/copilot-cli/issues/5242)

### 5.4 会话可靠性与资源管理

会话相关问题贯穿多个版本：

- 大型会话恢复导致 OOM 和 CPU 占用。
- session lock 获取超时使任务界面失去响应。
- 持久化指标类型异常导致会话永久无法恢复。
- 扩展启动失败后，工具调用仍可能挂起。
- 长时间会话中的编辑权限请求可能超时。

代表 Issues：

- [#4251：大型会话恢复性能回归](https://github.com/github/copilot-cli/issues/4251)
- [#5253：session lock 超时与任务无响应](https://github.com/github/copilot-cli/issues/5253)
- [#5023：指标字符串化导致恢复失败](https://github.com/github/copilot-cli/issues/5023)
- [#4670：扩展启动失败后工具调用挂起](https://github.com/github/copilot-cli/issues/4670)
- [#4486：编辑权限请求超时](https://github.com/github/copilot-cli/issues/4486)

### 5.5 非交互模式与插件一致性

开发者希望 `copilot -p`、ACP 和交互式 TUI 遵循一致的配置、权限及插件解析规则：

- headless 模式下 `skill` 工具偶发无法解析已声明技能。
- 仓库级 `.github/copilot/settings.json` 中的 `enabledPlugins` 在 `-p` 模式被忽略。
- ACP 权限与后台任务行为偏离交互模式。

代表 Issues：

- [#4838：headless 模式 skill 解析失败](https://github.com/github/copilot-cli/issues/4838)
- [#4507：非交互模式忽略 enabledPlugins](https://github.com/github/copilot-cli/issues/4507)
- [#4537：ACP 权限行为回归](https://github.com/github/copilot-cli/issues/4537)

### 5.6 跨平台稳定性

- Windows Server 2025 + SSH + tmux 下剪贴板不可用。
- Windows 原生运行时持续发生崩溃。
- Linux 容器中的 inotify 配额会直接影响 MCP 监听和会话处理。

代表 Issues：

- [#3260：SSH/tmux 下 Windows 剪贴板失效](https://github.com/github/copilot-cli/issues/3260)
- [#4026：Windows 原生运行时反复崩溃](https://github.com/github/copilot-cli/issues/4026)
- [#5242：Linux inotify 限制影响会话](https://github.com/github/copilot-cli/issues/5242)

---

## 6. 开发者关注点

### 6.1 “能配置”与“能实际生效”存在落差

多个问题都不是完全缺少配置入口，而是配置在不同运行模式下表现不一致：

- ACP 无法中途设置 `contextTier`。
- Auto 模型拒绝 reasoning effort 配置。
- `enabledPlugins` 在交互模式有效，在 `-p` 模式失效。
- 自定义 Provider 虽可配置，但无法按 Agent 隔离。

这表明开发者更期待统一、可预测的配置优先级和跨模式行为。

### 6.2 会话生命周期是当前最高频的稳定性痛点

会话锁超时、恢复 OOM、指标序列化异常、扩展失败后调用挂起、后台任务被意外取消等问题，都指向同一个核心诉求：

> 长会话、恢复会话及并行任务必须具备可预测的生命周期，不能因锁、持久化数据或扩展异常进入半失效状态。

### 6.3 MCP 接入仍面临“配置成功但无法使用”的问题

社区反馈集中在注册表连接、OAuth 浏览器流程、token 复用、stdio 进程清理和容器 watch 配额。这些问题横跨 CLI 与 Desktop App，表明 MCP 生命周期管理仍需要统一治理。

### 6.4 限流退避策略是 BYOK 的实际落地门槛

开发者不仅关心 CLI 能否连接 Azure OpenAI 或自定义端点，也关心遇到 429 时是否遵守服务端退避要求。当前快速耗尽重试次数的行为容易造成短时请求风暴，也可能造成任务直接失败。

### 6.5 跨平台和远程开发体验仍需加强

Windows 原生崩溃、Windows Server 远程剪贴板失效，以及 Linux 容器 inotify 限制，分别影响交互、远程开发和服务器部署场景。对于日常使用 CLI 的开发者而言，这些基础环境问题的优先级不亚于新增模型能力。

---

## 社区入口

- **仓库：** https://github.com/github/copilot-cli
- **Releases：** https://github.com/github/copilot-cli/releases
- **Issues：** https://github.com/github/copilot-cli/issues
- **Pull Requests：** https://github.com/github/copilot-cli/pulls

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-10-27**  
**项目：** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. 今日速览

- 今日最突出的社区问题是 **Zen 免费额度识别与重置异常**：Desktop 端频繁误报 “Free usage exceeded”，以及额度耗尽后无法切换其他模型。
- 开发主线集中在 **核心可靠性与可观测性修复**，包括提示词缓存配置隔离、输出截断后的自动压缩、快捷键重复注册修复，以及流式请求错误诊断增强。
- 值得注意的是，过去 24 小时 **没有新版本发布**；大量功能与修复仍处于 PR 审核或合并阶段。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **Zen 免费额度问题统一反馈入口**  
   涵盖 “Free usage exceeded”“Free usage limit reached”、重置未生效及 Desktop 免费模型不可用等典型症状。该 issue 获得 **17 条评论**，是今日讨论度最高的故障单。  
   [#59387](https://github.com/anomalyco/opencode/issues/59387)

2. **达到周配额后无法切换其他模型**  
   某个模型触发周配额后，OpenCode 错误地将限制应用到其他模型，影响用户在单一模型额度耗尽后的降级与切换。该问题累计 **13 条评论**，现已关闭。  
   [#52783](https://github.com/anomalyco/opencode/issues/52783)

3. **DeepSeek 大上下文下提示词缓存失效**  
   报告称 `deepseek-v4.1-flash` 在约 256K 上下文后缓存表现异常；后续说明实际原因是本地插件每轮修改 system prompt、破坏稳定前缀。该问题获得 **11 条评论**，现已关闭。  
   [#58175](https://github.com/anomalyco/opencode/issues/58175)

4. **Zen 免费模型不可用，但 CLI 正常**  
   Windows Desktop 1.19.4 下所有 Zen 免费模型请求失败，而同一账号在 CLI 1.19.4 可正常使用，暴露客户端与服务端之间的行为差异。累计 **3 条评论**，现已关闭。  
   [#59003](https://github.com/anomalyco/opencode/issues/59003)

5. **免费额度耗尽后持续出现升级提示**  
   用户即使多日未使用，仍持续收到 “Free usage exceeded, subscribe to Go” 及长时间重试倒计时，疑似额度状态、客户端缓存或账号状态未正确同步。  
   [#59147](https://github.com/anomalyco/opencode/issues/59147)  
   [#59149](https://github.com/anomalyco/opencode/issues/59149)

6. **免费试用重置时间异常延长**  
   用户反馈每日额度重置倒计时从约 15 小时继续增长到 20 小时，涉及免费试用额度的状态同步或重置逻辑。  
   [#59150](https://github.com/anomalyco/opencode/issues/59150)

7. **中国住宅网络遭 Cloudflare 边缘拦截**  
   中国移动、中国联通等住宅网络访问 `opencode.ai` 被 Cloudflare 拦截，影响 Desktop 与免费模型使用；相关报告给出了完整的边缘诊断参数。  
   [#59153](https://github.com/anomalyco/opencode/issues/59153)  
   [#59156](https://github.com/anomalyco/opencode/issues/59156)

8. **文件夹范围内会话列表漏显**  
   当 worktree 拥有多条重复 `project` 记录时，目录查询只解析到其中一条，导致会话出现在“全部会话”中，却从“当前目录”列表消失。该问题已复现并保持开放。  
   [#59371](https://github.com/anomalyco/opencode/issues/59371)

9. **计划模式下文件修改限制不一致**  
   报告称进入 Plan Mode 前，文件可能已被修改；系统指令与实际工具权限存在矛盾，暴露出模式切换时权限执行与状态约束的衔接问题。  
   [#57066](https://github.com/anomalyco/opencode/issues/57066)

10. **嵌套 Skill 扫描回归**  
    限制目录扫描的修复导致发现 `SKILL.md` 后停止继续扫描，有效的子目录 Skill 无法注册；这是面向 AI 开发工具配置生态的重要兼容性问题。  
    [#57437](https://github.com/anomalyco/opencode/issues/57437)

## 4. 重要 PR 进展

1. **提示词缓存设置与模型变体解耦**  
   将 `settings.cache` 从模型和变体共享配置中移出，避免变体错误覆盖 provider 级别的提示词缓存 TTL。  
   [#59500](https://github.com/anomalyco/opencode/pull/59500)

2. **修复快捷键重复注册与插件卸载残留**  
   确保每个快捷键只注册一次，并在插件移除后清理对应注册项，解决 `project.select`、`tab.1` 等命令冲突。  
   [#59499](https://github.com/anomalyco/opencode/pull/59499)

3. **按模型目录传递决策模型媒体格式**  
   读取 models.dev 的 `compatibility.media_input`，向不同 System One 主机传递正确的 `assets`、`state` 或 `root` 格式。  
   [#59479](https://github.com/anomalyco/opencode/pull/59479)

4. **输出意外截断时自动压缩上下文**  
   区分“达到模型输出上限”和“未用满额度却提前停止”两种 `length` 结束原因，仅在真正需要继续生成时触发压缩与续写。  
   [#58994](https://github.com/anomalyco/opencode/pull/58994)

5. **定义实验性图像与决策生成协议**  
   为 server 增加图像生成和决策问题生成端点，暴露 models.dev 中 provider 对应的 images/decisions entrypoint。该 PR 已关闭。  
   [#59190](https://github.com/anomalyco/opencode/pull/59190)

6. **统一媒体与决策响应和 Generate API**  
   调整 AI 包响应结构，移除服务端有意忽略的额外字段，并允许决策错误回答携带更多上下文。该 PR 已关闭。  
   [#59452](https://github.com/anomalyco/opencode/pull/59452)

7. **Cloudflare Workers AI 图像模型支持输入图片**  
   移除本地对 input images 的错误拦截，并按 FLUX.2 等模型家族要求发送合适格式，提升图像编辑能力兼容性。  
   [#59485](https://github.com/anomalyco/opencode/pull/59485)

8. **后台 Shell 实时输出查看能力**  
   点击 Desktop 中后台 shell 状态胶囊即可查看实时输出，并可直接停止进程，避免跳转聊天后看不到开发服务器或测试监听器日志。  
   [#59496](https://github.com/anomalyco/opencode/pull/59496)

9. **支持 `.agents/opencode` 项目级配置**  
   允许仓库在 `.agents/opencode` 中保存 OpenCode 配置，推进多 harness 项目配置标准化。  
   [#54594](https://github.com/anomalyco/opencode/pull/54594)

10. **TUI 推理块支持独立折叠**  
    在 show 模式下允许单独折叠 reasoning block，无需再通过全局 `Thinking: hide` 隐藏全部推理内容。该 PR 已关闭。  
    [#59498](https://github.com/anomalyco/opencode/pull/59498)

## 5. 功能需求趋势

- **免费额度与计费状态管理**：免费额度误判、重置延迟、额度耗尽后的模型切换和 Desktop/CLI 状态不一致，是当日最强需求信号。
- **MCP 管理体验升级**：用户希望获得每服务器输出链接、密钥安全存储、完整配置编辑器，以及更丰富的 ask/mention 输入能力。  
  [#58243](https://github.com/anomalyco/opencode/issues/58243)
- **多模态与生成 API**：图像生成、图像编辑、决策模型和不同 provider 的媒体输入格式兼容正在快速完善。
- **TUI 可观测性与信息密度**：推理折叠、后台进程输出、修改文件侧栏及子代理模型信息均受到关注。  
  [#58554](https://github.com/anomalyco/opencode/issues/58554)
- **配置发现与生态兼容**：项目级 `.agents/opencode`、嵌套 Skill 发现、提示词缓存配置边界，反映出插件和 AI harness 生态逐渐增多。
- **国际化与文档**：社区继续补充印地语 README 等本地化内容。  
  [#58487](https://github.com/anomalyco/opencode/issues/58487)

## 6. 开发者关注点

- **状态同步是当前首要痛点**：账号额度、客户端版本、服务端模型目录与本地缓存之间存在不一致，导致“实际未超限却无法使用”。
- **Desktop 成为故障集中区**：Desktop 1.19.4 的免费模型、额度提示、连接恢复和重试倒计时问题较多；CLI 往往能正常工作。
- **大上下文稳定性受关注**：包括 256K 上下文缓存、输出上限、提前截断、会话压缩及嵌套 Skill 扫描等边界场景。
- **插件与自动化扩展需要更稳定的契约**：插件修改 system prompt 会破坏提示词缓存；重复快捷键注册和插件卸载残留则增加了调试复杂度。
- **错误信息应保留底层原因**：流式 HTTP 解码失败目前可能只显示通用 “Decode error”，开发者希望保留安全诊断信息和流进度元数据。  
  [#42482](https://github.com/anomalyco/opencode/issues/42482)
- **网络可达性与区域差异不可忽视**：Cloudflare 对部分地区住宅网络的拦截，可能表现为免费额度或登录故障，排查时需要区分网络层和业务层问题。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-27

## 今日速览

过去 24 小时没有新版本发布，但社区更新活跃：39 个 Issue、23 个 PR 有更新，重点集中在 **Agent 行为与安全门禁、TUI 交互、iOS/Gateway 稳定性、多账号与多 Provider 支持**。多个已进入收尾阶段的功能包括 `AGENTS.md @path` 展开、OpenAI Daybreak cyber access program、Codex 最大上下文窗口，以及 Tsubasa 登录配置。

---

## 社区热点 Issues

### 1. [#932 Bash 风险门禁误把 stderr 重定向识别为删除目标](https://github.com/1jehuang/jcode/issues/932)
- **为什么重要**：这是高优先级、可复现且可能影响大量命令的误判。`rm -rf x 2>/dev/null` 中的 `/dev/null` 会触发受保护路径硬阻断，且没有 justification 逃逸，导致合法命令完全无法执行。
- **社区反应**：评论数最多，共 11 条，说明该问题已形成明确共识，需要尽快修正命令分段和重定向解析。
- **状态**：Open。

### 2. [#1973 `sleep 1 & rm -rf ~` 被错误评为 Safe](https://github.com/1jehuang/jcode/issues/1973)
- **为什么重要**：与 #932 同属命令风险门禁问题，但风险方向相反：单 `&` 后台操作符未被当作命令分隔符，危险命令可能被掩盖并错误放行。
- **社区反应**：已有 1 条评论，问题在一天内获得更新。
- **状态**：Open。

### 3. [#1582 iOS 断线导致正在执行的回复丢失](https://github.com/1jehuang/jcode/issues/1582)
- **为什么重要**：手机端网络切换、锁屏或切 App 均可能触发断线。当前服务端会在客户端断开时取消 turn，最终只保存用户消息而不保存助手回复，直接影响移动端可靠性。
- **社区反应**：1 条评论；问题描述具体，已形成可落地的修复方向。
- **状态**：Open。

### 4. [#1588 iOS 历史重同步后工具调用从记录中消失](https://github.com/1jehuang/jcode/issues/1588)
- **为什么重要**：重连、重新打开会话或切换会话后，工具调用及工具结果会从 transcript 丢失，用户无法审计代理实际执行过哪些操作。
- **社区反应**：1 条评论，属于 iOS/Gateway 系列稳定性问题中的高价值数据一致性缺陷。
- **状态**：Open。

### 5. [#1586 会话中途切换 Claude/OpenAI 账号后仍使用旧账号](https://github.com/1jehuang/jcode/issues/1586)
- **为什么重要**：账号切换本应立即影响正在运行的会话，但当前 token 仍绑定旧账号，可能造成请求持续失败、限流恢复失效或错误计费归属。
- **社区反应**：1 条评论；与多账号容灾诉求直接相关。
- **状态**：Open。

### 6. [#1612 账号全局共享，且真实用量限额不会触发同 Provider 故障转移](https://github.com/1jehuang/jcode/issues/1612)
- **为什么重要**：暴露了多账号体系的两层问题：账号状态没有按窗口隔离，且实际 usage limit 场景下 failover 不生效。这会削弱多订阅用户的容灾能力。
- **社区反应**：1 条评论，且获得 👍；反映多账号、高可用是持续热点。
- **状态**：Open。

### 7. [#1970 master 上有 6 个单元测试在 CI 之外失败](https://github.com/1jehuang/jcode/issues/1970)
- **为什么重要**：当前 CI 只运行过滤后的测试 cohort，未覆盖全部单元测试。断言漂移导致 master 实际处于测试失败状态，影响合并信心和回归发现。
- **社区反应**：1 条评论；问题直指测试基础设施覆盖缺口。
- **状态**：Open。

### 8. [#1349 `cargo test` 可能永久卡在共享测试环境锁](https://github.com/1jehuang/jcode/issues/1349)
- **为什么重要**：共享 `std::sync::Mutex` 缺少超时和诊断信息，死锁时 CI 或本地测试会无限等待，极难定位。
- **社区反应**：1 条评论；与 #1970、PR #1955 共同构成本日测试稳定性主线。
- **状态**：Open。

### 9. [#1972 `/terminal-setup` 可能覆盖或误写 tmux 配置](https://github.com/1jehuang/jcode/issues/1972)
- **为什么重要**：命令固定写入 `~/.tmux.conf`，没有检测用户实际使用的 `~/.config/tmux/tmux.conf`，且提示语不足以说明文件是新建还是修改，存在用户配置误操作风险。
- **社区反应**：1 条评论，是新建近期的 UX 与用户配置安全问题。
- **状态**：Open。

### 10. [#1506 OpenAI OAuth 支持 Daybreak cyber access program](https://github.com/1jehuang/jcode/issues/1506)
- **为什么重要**：符合 Daybreak 条件的 ChatGPT/Codex 账号需要通过 Responses API 的 `access_programs.cyber` 字段选择模型，否则无法使用对应的网络安全能力模型。
- **社区反应**：2 条评论；对应 PR 已关闭，意味着该需求已完成实现与合并准备。
- **状态**：Closed。

---

## 重要 PR 进展

### 1. [PR #1605：展开 AGENTS.md 中的 `@path` 导入](https://github.com/1jehuang/jcode/pull/1605)
- 为纯 `@<path>` 行增加文件内容展开，支持绝对路径、`~/` 和相对导入路径。
- 与 Claude Code 的指令文件约定保持一致，并处理代码围栏、行内引用等情况。
- 已关闭，关联 [#1604](https://github.com/1jehuang/jcode/issues/1604)。

### 2. [PR #1507：OpenAI 请求 Daybreak cyber access program](https://github.com/1jehuang/jcode/pull/1507)
- 从模型目录读取 `available_access_programs.cyber`，并持久化到磁盘缓存。
- 新增 `JCODE_OPENAI_CYBER_ACCESS_PROGRAM` 配置，允许对支持该能力的模型设置访问计划。
- 已关闭，关联 [#1506](https://github.com/1jehuang/jcode/issues/1506)。

### 3. [PR #1505：使用 Codex 模型目录中的 `max_context_window`](https://github.com/1jehuang/jcode/pull/1505)
- 修正 jcode 只读取 `context_window`、导致 OAuth 会话按较小窗口预算和压缩的问题。
- 支持采用 Codex 目录提供的更大上下文窗口，改善长会话和压缩策略。
- 已关闭。

### 4. [PR #1548：新增 Tsubasa OpenAI-compatible 登录配置](https://github.com/1jehuang/jcode/pull/1548)
- 新增命名登录 profile，服务地址为 `https://api.tsubasa.sh/v1`，使用独立 `TSUBASA_API_KEY`。
- 提供 `tsubasa-pro` 和 `tsubasa-fast` 静态目录及保守的 32K 上下文限制。
- Open，关联 [#1547](https://github.com/1jehuang/jcode/issues/1547)。

### 5. [PR #1988：避免把重排后的 OpenAI 工具输出误判为重复项](https://github.com/1jehuang/jcode/pull/1988)
- 修复 `build_responses_input` 重排工具调用输出后，又与原始流中的同一输出相遇并错误去重的问题。
- 该问题会在普通请求中持续产生误导性的“Dropped duplicate tool output”日志。
- Open。

### 6. [PR #1987：压缩后在 turn 边界锚定动态上下文](https://github.com/1jehuang/jcode/pull/1987)
- 修复 OpenAI 原生压缩后，后台任务唤醒等非普通用户提示导致动态 system reminder 锚点错误的问题。
- 目标是让压缩后的动态上下文仍落在正确的回合边界。
- Open。

### 7. [PR #1986：Orca 终端自动探测图片能力](https://github.com/1jehuang/jcode/pull/1986)
- Orca 仅提供 `TERM_PROGRAM=Orca`，原有环境变量快速路径无法识别图片协议。
- 新增自动探测，使 Mermaid、LaTeX 等内容尽量以终端图片而非纯文本展示。
- Open，关联 [#1985](https://github.com/1jehuang/jcode/issues/1985)。

### 8. [PR #1981：iOS 支持 HTTPS/WSS Gateway](https://github.com/1jehuang/jcode/pull/1981)
- 允许在 iOS 配对时选择受信任 TLS 证书对应的 HTTPS/WSS Gateway。
- 兼容旧凭据和二维码协议规则，显式 scheme 优先，无 scheme 扫描则保留服务器选择。
- Open，关联 [#1580](https://github.com/1jehuang/jcode/issues/1580)。

### 9. [PR #1980：不再把消失的 swarm 成员视为已完成](https://github.com/1jehuang/jcode/pull/1980)
- 修复成员查询返回 `unknown` 时被错误计入 `completed` 或 `stopped` 的逻辑。
- 未知成员现在会保持 pending，直到真正完成或超时，避免无结果却报告成功。
- Open，关联 [#589](https://github.com/1jehuang/jcode/issues/589)。

### 10. [PR #1955：避免 JCODE_HOME 测试竞争影响锁定测试](https://github.com/1jehuang/jcode/pull/1955)
- 修复锁定测试持有 `lock_test_env` 时，测试辅助函数仍在外部修改 `JCODE_HOME` 的 TOCTOU 问题。
- 目标是消除 session picker 测试偶发失败并保证并行测试隔离。
- Open，关联 [#1784](https://github.com/1jehuang/jcode/issues/1784)。

---

## 功能需求趋势

### 1. Agent 指令体系与上下文管理
社区持续关注 `AGENTS.md` 的层级加载、路径导入、Hook 上下文注入，以及每会话上下文预算和压缩策略。

代表需求：
- [#697 加载仓库根目录到会话目录的 AGENTS.md](https://github.com/1jehuang/jcode/issues/697)
- [#1604 展开 AGENTS.md 的 `@path` 导入](https://github.com/1jehuang/jcode/issues/1604)
- [#770 `session_start` Hook 注入上下文](https://github.com/1jehuang/jcode/issues/770)
- [#1971 每会话独立上下文上限](https://github.com/1jehuang/jcode/issues/1971)

### 2. 多模型、多 Provider 与登录配置
新增 Tsubasa profile、OpenAI Daybreak、Codex 上下文窗口、Cursor ACP 等需求表明，用户希望 jcode 成为统一接入不同模型和 Agent 后端的入口。

代表需求：
- [#1547 新增 Tsubasa OpenAI-compatible profile](https://github.com/1jehuang/jcode/issues/1547)
- [#1506 OpenAI Daybreak cyber access program](https://github.com/1jehuang/jcode/issues/1506)
- [PR #1873：新增 Cursor ACP Provider](https://github.com/1jehuang/jcode/pull/1873)

### 3. TUI 交互与模型选择体验
模型选择、effort 循环、reasoning 样式、输入框文本选择、跳转底部和历史回溯均受到关注。核心诉求是：模型较多时仍能高效筛选和操作。

代表需求：
- [#1566 `/model` 应打开可浏览、按 Provider 过滤的列表](https://github.com/1jehuang/jcode/issues/1566)
- [#1577 effort 循环切换异常](https://github.com/1jehuang/jcode/issues/1577)
- [#1616 输入框支持双击选词、剪切和覆写](https://github.com/1jehuang/jcode/issues/1616)
- [#1614 增加 Jump to bottom 按钮和快捷键](https://github.com/1jehuang/jcode/issues/1614)

### 4. iOS 与远程 Gateway 稳定性
iOS 配对、重连、订阅、历史同步、HTTPS 支持和断线恢复形成了集中反馈链，是当前移动端方向最明确的需求集群。

代表需求：
- [#1592 iOS 配对错误隐藏真实原因](https://github.com/1jehuang/jcode/issues/1592)
- [#1590 短暂重连时连接横幅闪烁](https://github.com/1jehuang/jcode/issues/1590)
- [#1583 服务端拒绝 subscribe 后无限重连](https://github.com/1jehuang/jcode/issues/1583)
- [#1584 Gateway 向远程客户端列出已持久化会话](https://github.com/1jehuang/jcode/issues/1584)

### 5. 多会话并发与嵌入式 Harness
嵌入方希望同一 daemon 支持多会话独立环境变量、独立上下文压缩预算、持久化会话发现及并发隔离。

代表需求：
- [#1969 每会话独立工具进程环境](https://github.com/1jehuang/jcode/issues/1969)
- [#1971 每会话上下文上限](https://github.com/1jehuang/jcode/issues/1971)
- [#1584 Gateway 列出持久化会话](https://github.com/1jehuang/jcode/issues/1584)

### 6. MCP 与 Agent 协作能力
除 MCP prompt 暴露为斜杠命令外，结构化用户选择工具、swarm 成员状态可靠性和 memory 模型配置也在推进。

代表需求：
- [#698 将 MCP Server Prompts 暴露为斜杠命令](https://github.com/1jehuang/jcode/issues/698)
- [PR #1815：新增 `ask_user` 工具及 TUI 内联选择器](https://github.com/1jehuang/jcode/pull/1815)
- [PR #1875：可配置 memory 模型并支持会话级选择](https://github.com/1jehuang/jcode/pull/1875)

---

## 开发者关注点

1. **安全门禁必须既“少误杀”又“不漏杀”**  
   #932 的重定向误判和 #1973 的后台操作符漏判方向相反，开发者需要更严格的 Shell 语法解析与回归测试，而不是简单增加命令分隔符。

2. **移动端连接必须具备可恢复性和数据完整性**  
   iOS 问题不只是“断线重连”，还包括回复丢失、工具记录消失、订阅请求缺字段、错误原因被隐藏。社区期待的是端到端会话一致性。

3. **账号切换与故障转移需要从“功能存在”提升到“真实场景可用”**  
   用户不仅要求保存多个账号，还要求运行中会话及时切换、usage limit 自动 failover，并避免账号状态在多个窗口间相互干扰。

4. **测试套件需要更可靠的隔离和更完整的 CI 覆盖**  
   共享锁无限等待、`JCODE_HOME` 竞争、CI 过滤 cohort 漏测是相互关联的问题。应优先补齐全局锁、超时、诊断日志和全量测试执行。

5. **模型目录元数据应成为统一可信来源**  
   Daybreak 能力、Codex 最大上下文、Tsubasa profile 等需求表明，上下文窗口、访问计划和模型能力需要结构化保存，避免硬编码猜测。

6. **长会话与并发场景需要真正按 session 隔离**  
   上下文压缩预算、环境变量、账号、工具进程和持久化会话都需要 session 级边界，这是 Harness、多窗口和移动端场景的共同基础。

7. **TUI 的下一步重点是可发现性和规模化操作**  
   当 Provider 和模型数量达到数百个时，简单列表已不足够。用户需要过滤、快捷键、清晰状态、文本编辑和可回溯历史等标准终端体验。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-10-27

## 今日速览

过去 24 小时无新版本发布，仓库近期的讨论与修复主要集中在 **Windows 兼容性、会话/RPC 生命周期、工具调用可靠性、Provider 接入及 TUI 交互**。社区同时推动了两项高优先级工作：升级存在安全公告的 `undici` 依赖，以及为 OpenCode 使用协议专用端点。

---

## 社区热点 Issues

### 1. Windows 使用方式与兼容性仍是长期痛点
- **Issue**：[#7547](https://github.com/earendil-works/pi/issues/7547)
- Windows 下的运行方式、安装路径、扩展兼容性和文档仍较分散，核心团队难以确定优先修复范围。
- 以 **90 条评论**成为本期最热 Issue，说明跨平台支持是社区最强烈、也最长期的需求之一。

### 2. Compaction 后文件列表持续膨胀
- **Issue**：[#11297](https://github.com/earendil-works/pi/issues/11297)
- 每次压缩都会继承上一轮的 `<read-files>` 与 `<modified-files>`，文件列表可能无限增长，增加上下文冗余和内存开销。
- Issue 已获得 **6 条评论及 1 个赞**，被标记为 Open，值得尽快关注上下文压缩质量与长期会话性能。

### 3. Bedrock 工具参数过多时请求失败
- **Issue**：[#11416](https://github.com/earendil-works/pi/issues/11416)
- 当工具的 optional parameters 总数超过 16，尤其包含大量 `anyOf` 联合类型时，Bedrock 会拒绝请求。
- 这是 **P0** 问题，可能直接阻断复杂 Agent 工具集；已有 **2 条评论**，需要 Provider 适配层进行 schema 拆分或降级。

### 4. 长会话无法读取刷新后的 AWS 凭证
- **Issue**：[#11221](https://github.com/earendil-works/pi/issues/11221)
- AWS Bedrock 临时凭证过期后，即使后台脚本已刷新，长时间运行的 Pi 会话仍可能继续使用旧凭证并报 `ExpiredTokenException`。
- 社区已有 **4 条评论**。核心诉求是凭证刷新可被运行中会话及时感知。

### 5. MCP HTTP JSON 响应绕过消息大小限制
- **Issue**：[#11335](https://github.com/earendil-works/pi/issues/11335)
- MCP HTTP JSON 路径没有执行 `maxMessageBytes` 检查；同一份 JSON-RPC 内容通过 SSE 会被拒绝、通过 JSON 却能通过。
- 这不仅是资源限制问题，也可能影响不同传输方式之间的安全一致性，已有 **4 条评论**。

### 6. RPC 创建或切换会话时重复触发 `session_start`
- **Issue**：[#10470](https://github.com/earendil-works/pi/issues/10470)
- 在 RPC 模式下，`new_session`、`switch_session`、`fork` 和 `clone` 会向扩展重复发送 `session_start`。
- 该问题容易造成扩展重复初始化、重复订阅或重复副作用，已有 **7 条评论**。

### 7. Windows 下 `find` 无法匹配含路径分隔符的 glob
- **Issue**：[#6817](https://github.com/earendil-works/pi/issues/6817)
- `src/**/*.ts` 等模式在 Windows 上返回无结果，而不带路径的 `*.ts` 可以正常工作。
- 该问题现已关闭，共获得 **8 条评论**，反映路径处理在不同操作系统上的不一致仍是高频问题。

### 8. Kitty 终端中的交互菜单会自动确认
- **Issue**：[#11458](https://github.com/earendil-works/pi/issues/11458)
- 在 Kitty 中打开 `/resume`、`/models` 等菜单后，会立即确认当前选项，用户无法正常切换选择。
- 该问题已关闭，直接影响 Kitty 用户的日常可用性，也是 TUI 键盘协议适配仍不成熟的例证。

### 9. Anthropic SSE 中途停滞后无法用 Esc 中断
- **Issue**：[#11457](https://github.com/earendil-works/pi/issues/11457)
- Anthropic Messages SSE 在响应中途卡住或断开时，界面持续显示 `Working`，`Esc` 也无法取消。
- 该问题已关闭，但暴露了流读取异常与取消信号传播链路需要更可靠的端到端测试。

### 10. 建议为扩展提供统一的工具展示 API
- **Issue**：[#10259](https://github.com/earendil-works/pi/issues/10259)
- 社区希望扩展能统一控制内置工具、MCP、codemode 和自定义工具的展示，或直接提供内置的单行工具模式。
- Issue 获得 **6 条评论和 2 个赞**。其价值在于把工具调用展示从 TUI 内部细节提升为稳定的扩展 API。

### 其他值得留意
- 粘贴带 ANSI 的内容会残留转义片段，甚至导致 bracketed paste 无法结束：[#11383](https://github.com/earendil-works/pi/issues/11383)
- UTF-16LE 文件在 `grep` 开启上下文时匹配文本损坏：[#11423](https://github.com/earendil-works/pi/issues/11423)
- 扩展对话框可能被自定义编辑器覆盖，导致无法回答：[#11431](https://github.com/earendil-works/pi/issues/11431)
- 会话 JSONL 在共享机器上默认以 `0644` 创建，可能泄露敏感上下文：[#11417](https://github.com/earendil-works/pi/issues/11417)

---

## 重要 PR 进展

### 1. 升级 `undici` 至 8.12.3，修复安全公告
- **PR**：[#11435](https://github.com/earendil-works/pi/pull/11435)
- 将精确锁定的 `undici 8.10.2` 升级到 `8.12.3`，覆盖 excessive content-encoding、EventSource 内存耗尽及 SRI 等公告影响范围。
- 当前标记为 **inprogress**。这是面向已发布版本的依赖安全修复，优先级高。

### 2. OpenCode 改用协议专用端点
- **PR**：[#11434](https://github.com/earendil-works/pi/pull/11434)
- 根据 OpenAI Completions、OpenAI Responses 等协议，将请求分流至对应的 OpenCode 专用 endpoint。
- 关联 P0 Issue [#11132](https://github.com/earendil-works/pi/issues/11132)，目标是避免共享 base URL 导致兼容性和路由问题。

### 3. 工具搜索优先返回名称精确匹配项
- **PR**：[#11437](https://github.com/earendil-works/pi/pull/11437)
- 调整 BM25 排序，使查询与工具名称完全一致时优先返回对应工具。
- 关联 Issue [#11331](https://github.com/earendil-works/pi/issues/11331)，可减少 Agent 因工具召回错误而产生额外调用。

### 4. 工具搜索增强名称与子串匹配
- **PR**：[#11440](https://github.com/earendil-works/pi/pull/11440)
- 在精确匹配修复之外，进一步让工具名称匹配和子串匹配获得更高优先级。
- 对 MCP 工具较多、名称相似的场景尤其有价值，可提高工具选择准确率。

### 5. 修复 Kitty 功能键解析
- **PR**：[#11422](https://github.com/earendil-works/pi/pull/11422)
- 支持 Kitty F1–F4 的 CSI/SS3 与 F5–F12 的 tilde 序列，并处理修饰键、repeat、release 事件。
- 同时避免 Kitty 私有功能键码点被作为普通文本插入，对应 [#11458](https://github.com/earendil-works/pi/issues/11458)。

### 6. 增强 MCP 关闭与取消生命周期安全性
- **PR**：[#11427](https://github.com/earendil-works/pi/pull/11427)
- 调整 close ownership、取消控制器和请求 ID 的归属，避免清理失败导致后续 disposer 无法执行。
- 也降低响应发送失败后出现二次响应的风险，对 MCP 客户端稳定性意义较大。

### 7. Nix 打包重构
- **PR**：[#10528](https://github.com/earendil-works/pi/pull/10528)
- 清理 `package.nix`、使用 `makeBinaryWrapper`，并跳过 Nix 环境中的版本检查。
- 当前仍在进行中，反映社区对可复现安装和 Nix 原生支持持续投入。

### 8. 新增 Anthropic Vertex Provider
- **PR**：[#5262](https://github.com/earendil-works/pi/pull/5262)
- 为 Google Cloud Vertex AI 上的 Claude 增加内置 `anthropic-vertex` Provider，并复用现有 Anthropic Messages 流式、工具调用和 thinking 逻辑。
- 作为长期开放 PR，它体现了企业云平台和更多模型托管渠道的接入需求。

### 9. 保留分支摘要中的 thinking level
- **PR**：[#11445](https://github.com/earendil-works/pi/pull/11445)
- 修复分支摘要未传递 thinking level 的问题，避免要求推理级别的 Provider 在摘要阶段失败。
- 对自定义 reasoning 配置和分支工作流尤其重要。

### 10. 导出 HTML 时包含系统提示词
- **PR**：[#10718](https://github.com/earendil-works/pi/pull/10718)
- 让 `pi --export <session.jsonl>` 与交互式 `/export` 的输出保持一致，把当前分支记录的系统提示词写入 HTML。
- 提升了会话归档、复盘和调试体验。

### 其他值得跟踪
- CI 改为并行执行测试，并移除无用 apt 包，以缩短流水线耗时：[#11438](https://github.com/earendil-works/pi/pull/11438)
- 模型选择器保留 scoped model 顺序并改善子串匹配：[#11145](https://github.com/earendil-works/pi/pull/11145)
- 修复 prompt-url-widget 在 custom message 启动运行时崩溃：[#11436](https://github.com/earendil-works/pi/pull/11436)

---

## 功能需求趋势

1. **跨平台与终端兼容**
   - Windows 运行方式、glob 路径处理、Kitty 功能键、ANSI 粘贴与 bracketed paste 均受到关注。
   - 社区期待 Pi 在主流终端和操作系统上提供一致、可预测的行为。

2. **Provider 与模型生态扩展**
   - Bedrock 工具 schema、GLM reasoning effort、OpenCode 协议端点和 Anthropic Vertex 是近期 Provider 适配主线。
   - 开发者不仅需要“能调用模型”，还要求工具调用、长会话、推理等级和流式取消完整可用。

3. **Agent 工具发现与展示控制**
   - 工具名称精确匹配、搜索排序、统一展示 API 和单行模式持续受到关注。
   - 工具数量增长后，召回准确性与 UI 可读性已成为 Agent 可扩展性的关键瓶颈。

4. **会话、上下文压缩与扩展生命周期**
   - Compaction 文件列表膨胀、RPC 重复 `session_start`、分支摘要 reasoning 配置等问题集中出现。
   - 社区需要更清晰、更稳定的事件与资源生命周期语义。

5. **MCP 安全与可靠性**
   - 消息大小限制、关闭清理、OAuth/CIMD、取消归属和会话文件权限成为重点。
   - 需求从“连接成功”深入到传输一致性、资源限制、安全边界和异常恢复。

6. **企业部署与可观测性**
   - AWS 凭证刷新、共享机器上的文件权限、HTML 导出、Nix 打包和目录搜索均为实际生产需求。
   - 开发者关注长期运行、审计复现和基础设施自动化的可用性。

---

## 开发者关注点

- **稳定性优先于新功能**：重复事件、无法中断、清理死锁和文件列表无限增长，都可能直接破坏长会话。
- **Windows 仍缺少统一体验**：运行方式、路径规则、文档和扩展兼容性分散，测试覆盖也需加强。
- **Provider 接入必须覆盖完整协议语义**：仅能发送请求并不足够，还要正确处理工具 schema、凭证轮换、reasoning level、流式中断和端点路由。
- **MCP 需要统一的安全边界**：不同传输方式应遵守一致的消息限制，关闭、取消与 OAuth 流程也需具备可预测语义。
- **工具系统需要更强的可预测性**：当 MCP 或自定义工具增多时，精确名称匹配和稳定排序直接影响模型能否调用正确工具。
- **TUI 细节会直接影响实际可用性**：Kitty、ANSI 粘贴、菜单焦点和扩展对话框等问题虽然局部，却会中断核心工作流。
- **上下文和会话数据需要安全治理**：压缩结果应保持有界，会话文件也应采用更严格的默认权限，避免敏感信息泄露。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
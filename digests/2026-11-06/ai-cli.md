# AI CLI 工具社区动态日报 2026-11-06

> 生成时间: 2026-11-06 05:56 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-06**  
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、Pi

---

## 1. 生态全景

AI CLI 生态正从“模型与工具调用能力竞争”转向“执行可靠性、成本治理和安全可控性竞争”。各社区高频聚焦破坏性操作审批、凭据隔离、MCP 生命周期、沙箱、上下文压缩与可逆执行，说明 Agent 已开始进入真实生产环境，而不只是辅助编程。与此同时，Windows、SSH、Wayland、中文 IME、Unicode 等跨平台问题集中暴露，成为规模化采用的主要阻力。

多后端、多 Provider、多账号与云端会话统一已成为共同产品方向；Codex、Claude Code、OpenCode 均在推进多后端、Remote Control、Desktop/CLI/IDE 会话互通。与此同时，开源项目普遍进入工程化收敛期：重点由“增加 Agent 数量”转向确保 Agent **稳定终止、准确汇报、避免重复副作用、可观察、可恢复**。

---

## 2. 各工具活跃度对比

> Issue/PR 数量按摘要提供的“过去 24 小时更新”口径统计；“—”表示摘要未给出明确数量。

| 工具 | 今日 Issues | 今日 PRs | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 50 | 1 | 无新版本 | 需求热度高，PR 产出较低 |
| **OpenAI Codex** | 未给出总数 | 10 个重要 PR | `rust-v0.167.0`；另有 3 个 Alpha | 发布与工程迭代最活跃 |
| **Gemini CLI** | 未给出总数 | 10 个重要 PR | 无新版本 | 修复密度高，聚焦可靠性与安全 |
| **GitHub Copilot CLI** | 未给出总数 | 0 | `v1.0.106`、`v1.0.106-11` | 版本发布驱动，PR 暂无更新 |
| **Kimi Code CLI** | 0 | 1（已关闭） | 无新版本 | 当日最安静 |
| **OpenCode** | 50 | 50 | `process-daemon v0.5.0` | 整体最活跃之一 |
| **jcode** | 9 | 6 | 无新版本 | 活跃且聚焦，变更规模较集中 |
| **Pi** | 未给出总数 | 10 个重要 PR | 无新版本 | 工程迭代密集，关注性能与生态 |

### 活跃度解读

- **OpenCode** 日更 50 Issues、50 PRs，是公开数据中吞吐最高的项目。
- **Claude Code** 以 50 个 Issues 体现需求规模，但仅 1 个 PR，反映大型产品社区中“反馈密集、变更受控”的特征。
- **Codex、Gemini CLI、Pi** 均展示约 10 个重要 PR，属于高强度工程修复阶段。
- **Kimi Code CLI** 当日无 Issue 更新，仅一个已关闭 PR，无法据此判断项目整体停滞，只能说明当日公开活动较少。

---

## 3. 共同关注的功能方向

### 3.1 执行安全、凭据隔离与最小权限

这是当前最一致的行业主线。

- **Codex**：代理误操作导致 systemd、容器和服务器损坏，并产生高额费用；社区要求破坏性命令审批、费用熔断、任务级授权和执行审计。
- **Claude Code**：Web Search 将账户邮箱写入第三方 `User-Agent`；社区要求默认禁止敏感标识进入请求头，同时加强 Remote Control 审批和 hook 一致性。
- **Gemini CLI**：修复 `@` 误匹配导致 SSH 私钥被发送、危险 `rm` 变体漏检、凭据文件并发写入损坏。
- **jcode**：模型工具可读取 Provider API Key、环境变量及 `/proc/<pid>/environ`，需要独立凭据代理或沙箱。
- **OpenCode**：会话导出脱敏遗漏 Provider 响应、工具错误和工作路径。
- **Copilot CLI**：沙箱自动注入临时目录权限，托管策略和实际权限边界不完全一致。

**共同结论：** 模型能“建议危险操作”已经不够，权限控制必须下沉到命令、进程、文件、网络和凭据层，并默认采用 fail-closed 策略。

### 3.2 上下文管理、成本控制与可逆执行

- **Codex**：用户要求可配置自动压缩阈值、完整 `/rewind`，同时恢复对话与代码修改。
- **Copilot CLI**：Claude Prompt Cache 默认 5 分钟 TTL，长会话成本过高。
- **OpenCode**：要求按 Agent、Provider、模型配置缓存 TTL。
- **Pi**：重试后上下文统计从 42K 错误膨胀至 330K；长会话 CPU 可超过 100%。
- **jcode**：用户认为 harness Token 消耗已高于 Codex 和 Claude。
- **Claude Code**：Cloud Project 忽略子代理深度配置，长任务和资源边界不可控。

**共同结论：** 用户需要同时获得**成本可预测、上下文可解释、操作可逆**。单靠固定压缩阈值或聊天历史回退都不够。

### 3.3 MCP 与远程工具生命周期治理

- **Copilot CLI**：工具 Schema 会话中丢失；OAuth token 过期后不自动刷新；连接状态与实际可用性不一致。
- **OpenCode**：增加远程 MCP 的单服务器 TLS、私有 CA 信任；修复 MCP 子进程累积至 518 个、约 17.26GB PSS 的问题。
- **Pi**：MCP OAuth 成功后卡在 “Connecting…”；工具搜索无法解析本地 `$ref`。
- **Gemini CLI**：工具过多可能触发 API 400，需要动态裁剪工具作用域。
- **Claude Code**：社区要求 Remote Control 服务器化、daemon 化和无 TTY 部署。

**共同结论：** MCP 已从“能连接”进入“必须可认证、可恢复、可观测、可回收”的生产化阶段。

### 3.4 多 Provider、多后端与多账号体系

- **Codex**：v0.167.0 引入多后端切换、Command Center 和草稿保留；PR 推进 provider 级凭据隔离、Gateway OAuth 和多侧聊。
- **Claude Code**：Desktop 多账号、配置档案隔离，以及 Claude Projects 与本地 CLI 上下文统一需求强烈。
- **Copilot CLI**：Fusion/Auto 模式缺少模型屏蔽列表；ACP 创建会话时报告的模型可能与实际不一致。
- **OpenCode**：MiniMax 推理档位未正确映射；模型限流隔离和额度耗尽回退成为热点。
- **Pi**：扩展注册 Provider 时偶发忽略默认模型；不同厂商的角色协议和上下文语义不兼容。
- **jcode**：提出由校准后的决策模型，为 swarm worker/turn 动态选择模型与 reasoning effort。

**共同结论：** “支持更多模型”已不足够，竞争焦点转向模型能力自动发现、默认路由确定性、凭据归属和 Provider 差异透明化。

### 3.5 CLI、IDE、Desktop 与云端会话统一

- **Copilot CLI**：`/code` 可将当前会话打开到 VS Code。
- **Gemini CLI**：ACP 支持运行中追加指令，覆盖 Zed、JetBrains、VS Code 等客户端。
- **Codex**：Agent Command Center、Session Picker、多后端与侧聊强化跨会话操作。
- **Claude Code**：社区要求 Desktop、CLI、IDE 共享会话和项目上下文。
- **OpenCode**：推进 Desktop 对话内可视化与实时文件预览。

**共同结论：** CLI 不再是孤立入口，而正成为可由 IDE、Desktop、Remote Control 和云端 Agent 共同调用的运行时。

### 3.6 跨平台与国际化可靠性

- **Codex / Copilot CLI / Pi**：Windows 均为明显短板，涉及扩展启动、Computer Use、进程执行、路径序列化和进程树清理。
- **Gemini CLI**：Wayland 下 Browser Agent 失败。
- **Copilot CLI**：Android/Termux 因 glibc/Bionic 不兼容无法运行；中文、日文、韩文 IME 会误触提交。
- **OpenCode**：Windows 滚动条异常，NFC/NFD 文件 Patch 匹配失败。
- **jcode**：SSH 下 OSC 52 无法写入本地剪贴板。
- **Pi**：Windows 下无法执行 npm/npx/pnpm，UTF-16 和非 UTF-8 文件处理仍是痛点。

**共同结论：** 跨平台支持不能只以“能够启动”为标准，而应覆盖认证、文件编码、输入法、后台进程、图形环境和终端协议。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争特点 |
|---|---|---|---|
| **Claude Code** | Terminal-first 编程、Remote Control、Claude Projects、Desktop 集成、子代理编排 | 高频终端用户、Claude 订阅用户、跨设备开发者 | 强项是 Claude 生态联动和移动端/桌面协同；当前短板是生命周期恢复、权限一致性和隐私边界 |
| **OpenAI Codex** | Agent Command Center、多后端、TUI、Gateway、Desktop/Dots、Computer Use | 个人开发者、团队、平台工程与企业自动化用户 | 产品面最广，工程迭代速度快；通过多后端、凭据隔离、预算钩子和消息可靠性构建平台化能力 |
| **Gemini CLI** | 子代理、Browser Agent、Skills、ACP、代码检索 | Gemini 用户、IDE/自动化开发者、多代理探索者 | 强调多代理和工具生态；当前重点是修复状态误报、超时、浏览器与安全问题 |
| **GitHub Copilot CLI** | GitHub/Microsoft 生态、MCP、VS Code 联动、Fusion/Auto 路由 | GitHub 企业用户、Copilot 订阅用户、远程终端用户 | 与 GitHub 权限及 IDE 生态结合紧密；需要强化 MCP、模型路由、缓存和企业沙箱 |
| **Kimi Code CLI** | 中文模型生态、终端编码 Agent、知识层探索 | Kimi 用户、国内开发者 | 当日公开活动有限；唯一可见方向是 knowledge plane，但尚不足以判断成熟度和差异化 |
| **OpenCode** | 多 Provider、开放模型生态、Desktop、MCP、TUI 插件与 GUI 可视化 | 多模型用户、开源社区、桌面与 GUI Agent 用户 | Provider 适配广、功能扩展快；面临额度、MCP 进程泄漏、缓存、预览一致性和跨平台质量压力 |
| **jcode** | Swarm、多 Agent、终端 Harness、ACP、成本与路由 | Agent 工程开发者、实验性多代理用户 | 更偏 Agent harness 和编排基础设施；Token 成本、凭据边界和 runtime 继承是核心矛盾 |
| **Pi** | 可嵌入 SDK、扩展生态、长会话、durable/worker、多 Provider | 扩展开发者、终端 Agent 用户、服务端嵌入场景 | 强调可嵌入、可扩展与多部署形态；正解决性能、文件安全、缓存及生态发现能力 |

### 定位差异总结

- **最平台化：Codex**——覆盖 CLI、TUI、IDE、Desktop、Dots、多后端和云端。
- **最强调生态联动：Claude Code**——突出 Claude Projects、Desktop、Remote Control 与移动端。
- **最偏多代理实验：Gemini CLI 与 jcode**——前者围绕 Browser Agent、Skills 和 ACP，后者围绕 swarm 与模型路由。
- **最强调开放 Provider：OpenCode 与 Pi**——前者功能面广，后者更偏可嵌入 SDK 和扩展基础设施。
- **最依赖既有生态：Copilot CLI**——竞争重点是 GitHub/Microsoft 权限、MCP、IDE 和企业策略。
- **公开信号最弱：Kimi Code CLI**——当日数据不足以形成可靠判断。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：高需求、高反馈密度**

- **OpenCode**：50 Issues + 50 PRs，日更吞吐最高。
- **Codex**：复杂问题获得 509 赞、431 条评论，另有多个百赞级需求。
- **Claude Code**：多账号 Issue 达 1007 赞、236 条评论；Projects 集成 Issue 达 429 赞、54 条评论。
- **Copilot CLI**：整体声量较低，但 IME Issue 获 48 赞，说明关键兼容性问题影响面广。

**第二梯队：稳定工程社区**

- **Gemini CLI**：Issue 绝对互动量较低，但当天集中修复约 10 个重要 PR，反映维护响应积极。
- **Pi**：长会话 CPU Issue 获 30 条评论、12 个赞；PR 覆盖性能、编码、缓存、OAuth 和 durable session。
- **jcode**：9 Issues、6 PRs，规模较小但反馈具体，技术讨论密度较高。

**第三梯队：当日公开活动有限**

- **Kimi Code CLI**：0 个更新 Issue、1 个已关闭 PR；只能判断当日安静，不能推断项目成熟度或健康度。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 判断依据 |
|---|---|---|
| **高功能成熟度、仍快速演进** | Codex、Claude Code、Copilot CLI | 产品入口丰富、真实用户反馈多；重点已转向跨端恢复、安全、权限和生命周期 |
| **中高成熟度、快速工程收敛** | OpenCode、Gemini CLI、Pi | 核心功能完整，但多代理、MCP、缓存、跨平台和文件一致性仍存在系统性缺口 |
| **早期/实验性方向** | jcode | 能力激进且方向明确，但 Token 成本、凭据隔离、测试稳定性和协议完整性尚在收敛 |
| **数据不足** | Kimi Code CLI | 当日样本过少，无法可靠评估社区活跃度和产品成熟度 |

---

## 6. 值得关注的趋势信号

### 信号一：Agent 的“状态可信度”将成为核心产品指标

Gemini CLI 会在子代理实际失败时报告 `GOAL success`；Copilot CLI 会出现“显示 connected、实际调用失败”；Codex、Claude Code 也存在消息回执、自动更新恢复和提交状态不一致。

未来评估 CLI 时，不仅要看任务成功率，还应关注：

- 失败是否被准确报告；
- 工具调用是否具备幂等性；
- 请求是否可能重复执行；
- 状态是否与实际行为一致；
- 重启后能否可靠恢复。

### 信号二：安全边界将从“提示词约束”转向系统级强制

高风险事件已涉及真实服务器损坏、密钥上传、邮箱外泄和账户冒用。未来主流方案应包括：

- 破坏性命令默认人工审批；
- Provider 凭据由独立代理提供，工具进程不可见；
- 网络和文件系统采用 allowlist；
- 执行前展示影响范围；
- 费用、时长和递归深度设有硬性上限；
- 全链路保留可审计记录。

### 信号三：上下文管理将从压缩功能升级为成本控制平面

用户不再满足于“自动压缩”，而是希望知道何时压缩、压缩了什么、缓存是否命中，以及能否回退到一致状态。值得重点跟踪的产品能力包括：

- 可配置阈值与手动压缩；
- 对话、工具调用和工作区文件的统一检查点；
- Provider/模型级缓存 TTL；
- Token、费用和压缩原因可视化；
- 长会话 CPU 与内存稳定化。

### 信号四：多 Agent 的真正瓶颈是生命周期，而非数量

Generalist Agent 挂起、后台子代理重复通知、Cloud 深度配置失效、Browser Agent 配置不生效、ACP 工具更新丢失，说明“多开几个 Agent”并不会自动提高产出。下一阶段竞争重点是：

- 明确的 Agent 状态机；
- 超时、取消和递归上限；
- 失败重试的幂等性；
- 子代理轨迹可观察；
- 权限继承和预算继承；
- 任务级检查点与恢复。

### 信号五：Windows 和企业网络环境将决定下一轮采用速度

Windows 同时出现扩展无法启动、Computer Use 失效、路径反序列化错误、npm 命令无法执行、沙箱探测失败等问题；远程环境则暴露 OAuth、TLS、浏览器授权和剪贴板差异。对企业用户而言，稳定性测试矩阵应至少覆盖：

- Windows 10/11 与主流 IDE；
- WSL、SSH、容器和无 TTY 环境；
- 企业代理、私有 CA 与 BYOK；
- CJK IME；
- Wayland、X11；
- UTF-16、NFC/NFD 与非 UTF-8 文件。

### 信号六：CLI 正演变为跨端 Agent Runtime

Desktop、IDE、CLI、移动端和云端 Agent Command Center 的边界正在消失。未来产品的核心资产可能不再只是模型调用，而是：

- 可恢复的会话状态；
- 统一的权限与凭据代理；
- 跨端任务委派；
- 后台进程与 PTY 管理；
- ACP 等标准协议；
- 对话内结构化可视化。

---

## 决策建议

- **优先评估生产可用性**：选择 Codex、Claude Code、Copilot CLI、OpenCode 或 Pi，并重点验证沙箱、审批、回滚、凭据隔离和日志审计。
- **优先评估多 Agent 能力**：Gemini CLI 与 jcode 值得跟踪，但应先验证超时终止、状态准确性、预算上限和重复副作用防护。
- **优先评估开放模型与可嵌入性**：OpenCode、Pi、jcode 更适合多 Provider 或作为 SDK/运行时集成。
- **不建议仅依据单日活跃度选型**：Kimi Code CLI 的样本不足，应结合版本频率、维护响应、文档、企业策略支持和真实任务基准综合判断。
- **建立统一验收清单**：在相同权限和网络条件下测试破坏性命令审批、凭据不可见性、恢复能力、Windows 兼容性、MCP 稳定性、费用熔断及上下文回滚。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：截至 2026-11-06。  
> 注：给定 PR 列表中的评论数均为 `undefined`，因此无法按真实评论数排序；以下结合 PR 热度、持续更新时间、Issue 讨论量及生态影响进行综合判断。

## 1. 热门 Skills 排行

### 1. `skill-creator`：修复触发评估、打包与 YAML 解析

**状态：** Open  
**相关 PR：**
- [#1298 修复触发评估隔离、Windows 与运行时失败](https://github.com/anthropics/skills/pull/1298)
- [#1681 支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681)
- [#1997 正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997)

**功能：** 用于创建、评估、优化和打包 Claude Code Skills，是整个生态的“元基础设施”。

**讨论热点：**
- 触发评估出现误判、负例误通过及跨进程竞争。
- Windows 下 `select()` 与子进程处理不稳定。
- 手工解析 YAML 与真实语义不一致，描述中的引号和续行可能损坏。
- 打包脚本不能独立运行，且使用说明过时。

**判断：** 这是当前最关键的生态底座。其稳定性和评估可信度直接影响所有第三方 Skill 的质量。

---

### 2. `mcp-builder`：适配 MCP SDK 2.x 并修复真实服务器评测

**状态：** Open  
**相关 PR / Issue：**
- [#1742 支持 `mcp>=2` 流式 HTTP 客户端及自定义 headers](https://github.com/anthropics/skills/pull/1742)
- [#1390 修复真实 MCP Server 工具调用始终报错](https://github.com/anthropics/skills/issues/1390)

**功能：** 帮助开发者创建、连接、测试和评估 MCP Server。

**讨论热点：**
- MCP SDK 2.x 将 `streamablehttp_client` 更名并改变 HTTP client 配置方式。
- 自定义认证 headers 的传递方式不兼容。
- 评测框架无法序列化 `TextContent`，会把真实异常伪装成工具错误，导致真实服务器评分固定为 0/N。

**判断：** 社区需求已从“生成 MCP 代码”转向“生成后能运行、能测试、能稳定升级”的工程闭环。

---

### 3. `webapp-testing`：加强浏览器测试安全性与元素识别准确性

**状态：** Open  
**相关 PR：**
- [#1980 移除 `with_server.py` 中的 `shell=True`](https://github.com/anthropics/skills/pull/1980)
- [#1976 正确识别 textarea 和 select](https://github.com/anthropics/skills/pull/1976)

**功能：** 启动 Web 应用、通过浏览器执行交互测试，并检查页面元素和状态。

**讨论热点：**
- 将用户或 Agent 提供的命令交给系统 shell，存在命令注入风险（CWE-78）。
- 元素发现逻辑把 `textarea`、`select` 错误识别为普通 `text`。
- 测试基础设施不仅要“能跑”，还需避免执行不可信命令并保证断言对象准确。

**判断：** Web 测试 Skill 正从通用浏览器自动化转向可信执行环境与可靠 DOM 语义。

---

### 4. `docx`：强化修订接受、批注检测与 XML 正确性

**状态：** Open  
**相关 PR / Issue：**
- [#1792 LibreOffice 超时应报错，并验证修订标记已清除](https://github.com/anthropics/skills/pull/1792)
- [#1734 检测 DOCX 中孤立批注](https://github.com/anthropics/skills/pull/1734)
- [#2018 `merge_runs.py` 丢失命名空间导致无效 XML](https://github.com/anthropics/skills/issues/2018)

**功能：** 创建、编辑和验证 Word 文档，包括格式、修订、批注及底层 OOXML 处理。

**讨论热点：**
- LibreOffice 超时后仍可能被误报为成功。
- 仅“执行完成”不足以证明修订已被真正接受。
- 合并文本运行时丢失局部 namespace 声明，可能生成无法打开的 DOCX。
- 孤立批注成为文档质量检查的新需求。

**判断：** 文档 Skills 的关注点已由“生成内容”升级为“机器可验证的文档正确性”。

---

### 5. `xlsx`：完善公式重算与外部链接风险分析

**状态：** Open  
**相关 PR：**
- [#2019 识别工作表级定义名称及外部链接别名](https://github.com/anthropics/skills/pull/2019)

**功能：** 操作 Excel 工作簿、重算公式、分析依赖关系和外部链接风险。

**讨论热点：**
- 原实现只检查工作簿级 `defined_names`。
- 公式可能通过工作表级名称、别名或间接引用隐藏外部链接。
- 风险扫描因此存在漏报。

**判断：** 用户更重视财务模型的审计完整性和隐性外部依赖，而非单纯写入单元格。

---

### 6. `claude-api`：修复文档链接并控制上下文注入成本

**状态：** Open  
**相关 PR / Issue：**
- [#1730 替换失效的 Academy 与 Tool Use 文档链接](https://github.com/anthropics/skills/pull/1730)
- [#1487 `claude-api` Skill 单次注入约 156k tokens](https://github.com/anthropics/skills/issues/1487)

**功能：** 提供 Claude API、Tool Use 与 Anthropic Academy 相关指导。

**讨论热点：**
- 文档中出现硬失效链接，降低 Skill 的可操作性。
- 大型 Skill 被积极注入，可能在一次工具调用中耗尽上下文。
- 社区期待按需加载、索引化检索和更精细的上下文预算。

**判断：** `claude-api` 是官方基础 Skill，但超长上下文注入已经成为影响实际使用的重要瓶颈。

---

### 7. `document-typography`：建立生成文档的排版质量门槛

**状态：** Open  
**相关 PR：**
- [#514 新增文档排版质量控制 Skill](https://github.com/anthropics/skills/pull/514)

**功能：** 自动发现孤行、寡行、标题落底、编号错位等常见排版问题。

**讨论热点：**
- AI 生成文档经常“内容正确但视觉不专业”。
- 用户通常不会主动要求孤行、寡行和编号对齐等细节。
- 适合将排版检查嵌入文档生成和导出后的自动验证流程。

**判断：** 该 Skill 直接对应高频率、低显性需求的痛点，具备较强产品化价值；但目前 PR 尚无近期讨论推动。

---

### 8. `pyxel`：面向 Python 的复古游戏开发与自动验证

**状态：** Open  
**相关 PR：**
- [#525 新增 Pyxel 复古游戏开发 Skill](https://github.com/anthropics/skills/pull/525)

**功能：** 指导使用 Pyxel 创建、调试和验证复古游戏，支持无头输入、逐帧检查及状态断言。

**讨论热点：**
- 不仅生成游戏代码，还需要可重复的交互输入、帧级视觉检查和状态验证。
- 代表社区对“垂直领域专业 Skill”的持续兴趣。

**判断：** 该 PR 创建时间较早但更新至数据截止日前，属于长期推进型贡献；落地概率仍取决于维护者优先级。

---

## 2. 社区需求趋势

### A. Skill 治理、信任边界与组织级分发

- [#492 社区 Skills 使用 `anthropic/` 命名空间造成官方身份冒充风险](https://github.com/anthropics/skills/issues/492) 是讨论最热 Issue，共 46 条评论。
- [#228 在 Claude.ai 中支持组织级 Skill 共享](https://github.com/anthropics/skills/issues/228) 获得 17 条评论和 8 个赞。
- [#189 不同插件重复安装相同 Skills，浪费上下文](https://github.com/anthropics/skills/issues/189) 获得 9 个赞。

**趋势：** 社区最需要的已不只是更多 Skill，而是清晰的官方/社区身份、版本、来源、权限、发布者和组织分发机制。

---

### B. 可验证的质量门禁与交付保证

- [#1385 提议“预任务校准 → 对抗审查 → 交付验证”的推理质量门禁](https://github.com/anthropics/skills/issues/1385)
- [#62 用户 Skills 消失后无法恢复](https://github.com/anthropics/skills/issues/62)
- [#556 `run_eval.py` 对所有查询触发率为 0%](https://github.com/anthropics/skills/issues/556)

**趋势：** 用户希望 Skill 不仅能执行，还能证明触发正确、结果可靠、产物完整，并具备可恢复性。

---

### C. 长期 Agent 的上下文与记忆管理

- [#1329 提议 `compact-memory`，用符号化表示压缩长期 Agent 状态](https://github.com/anthropics/skills/issues/1329)

**趋势：** 长任务中的上下文压缩、结构化记忆、状态续接和跨会话持久化正在成为独立 Skill 类别。

---

### D. 垂直领域专业能力

热门提案覆盖：

- [#1245 Notion 规格转实现与量化恢复审计](https://github.com/anthropics/skills/pull/1245)
- [#1771 智能合约静态审计与链上存证](https://github.com/anthropics/skills/pull/1771)
- [#1615 SCNet HPC 集群与 Slurm 工作流](https://github.com/anthropics/skills/pull/1615)
- [#1703 Markdown 转带配音视频](https://github.com/anthropics/skills/pull/1703)

**趋势：** 社区希望 Skill 从通用模板演变为特定行业专家，内含领域规则、工具链和验收标准。

---

### E. 测试、安全与文档可靠性

- [#1394 `skill-creator` eval-viewer 存在属性上下文 XSS 风险](https://github.com/anthropics/skills/issues/1394)
- [#1980 Web 测试 Skill 存在命令注入风险](https://github.com/anthropics/skills/pull/1980)
- [#1868 Slack GIF 渐变背景始终无法产生指定底部颜色](https://github.com/anthropics/skills/issues/1868)

**趋势：** 安全审计、自动验证和精确输出检查正从“附加要求”变成核心能力。

---

## 3. 高潜力待合并 Skills

> “评论活跃”无法直接按 PR 评论数判断，以下以开放时间、持续更新、与高热 Issue 的关联度及生态影响评估。

### 第一梯队：近期修复、明确对应已知问题

1. **[#2019 `xlsx` 外部链接风险分析修复](https://github.com/anthropics/skills/pull/2019)**  
   直接解决安全审计漏报，更新至 2026-11-03，范围清晰，适合快速合并。

2. **[#1980 `webapp-testing` 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980)**  
   修复高风险命令注入问题，安全价值高，且已有明确实现方向。

3. **[#1792 `docx` 超时及修订接受验证](https://github.com/anthropics/skills/pull/1792)**  
   修复“失败却报成功”的典型可靠性问题，适合进入稳定版。

4. **[#1997 `skill-creator` 正确解析 YAML frontmatter](https://github.com/anthropics/skills/pull/1997)**  
   直接影响触发评估和描述优化可信度，属于生态基础设施级修复。

5. **[#1742 `mcp-builder` 兼容 MCP 2.x](https://github.com/anthropics/skills/pull/1742)**  
   对应 #1390 所暴露的 MCP 生态升级与评测问题，落地价值较高。

### 第二梯队：新能力型贡献

6. **[#1245 Notion 规格转实现与量化恢复审计](https://github.com/anthropics/skills/pull/1245)**  
   同时覆盖规格拆解、实施计划和进度审计，符合“工作流自动化”趋势。

7. **[#1615 SCNet HPC Skill](https://github.com/anthropics/skills/pull/1615)**  
   垂直领域完整度高，可降低 HPC 作业编写和验证门槛。

8. **[#1703 Markdown 转视频与音频](https://github.com/anthropics/skills/pull/1703)**  
   需求直观，但依赖链较多；商业与社区传播潜力高，合并仍需关注维护成本。

### 需要重点审查的提案

- **[#1771 智能合约审计与 TON 链上存证](https://github.com/anthropics/skills/pull/1771)**  
  创新性高，但涉及区块链、第三方协议及外部服务，需重点审查供应链安全、声明边界与可复现性。
- **[#514 文档排版质量控制](https://github.com/anthropics/skills/pull/514)**  
  用户价值广，但较早上榜且缺少近期社区推动，建议完善可验证样例和渲染回归测试。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“能生成内容的提示词集合”升级为可信、可验证、可分发、可维护的工程化能力层。**

具体表现为三条主线：

1. **可信：** 官方与社区来源隔离、权限控制、安全执行。  
2. **可靠：** 真实触发评估、自动测试、输出验证、失败不误报成功。  
3. **可规模化：** 组织共享、版本同步、去重、上下文预算与长期记忆管理。

---

# Claude Code 社区动态日报｜2026-11-06

## 一、今日速览

- 过去 24 小时没有新版本发布，但社区更新了 50 个 Issue，焦点集中在 **Claude Desktop/Remote Control 稳定性、权限与隐私安全、代理编排和多账号工作流**。
- 最受关注的新问题是 macOS/Windows 下 Web Search 泄露用户邮箱、后台代理反复唤醒父会话，以及 Cloud Project 忽略子代理深度配置。
- 唯一更新 PR 提议公开内置 `privacy` mod 源码，在命令包含登录账户邮箱时主动拒绝执行，以降低敏感信息外泄风险。

---

## 二、版本发布

过去 24 小时内无新 Release。

---

## 三、社区热点 Issues

### 1. Web Search 的 User-Agent 暴露邮箱，构成隐私风险
- **Issue**：[#107757](https://github.com/anthropics/claude-code/issues/107757)
- macOS 用户报告，Claude Code 在执行 Web Search 时，将登录账户邮箱写入发往第三方的 `User-Agent` 请求头，并因此收到大量诈骗邮件。
- Issue 获 **227 个赞、40 条评论**，是本日新增安全议题中最受关注的问题。
- 社区期望彻底移除邮箱信息，而不是依赖用户主动关闭或选择加入。

### 2. Claude Desktop 多账号与配置档案切换需求升温
- **Issue**：[#18435](https://github.com/anthropics/claude-code/issues/18435)
- 用户希望 Desktop 支持多个 Claude 账号，并在配置档案之间快速切换。
- 获 **1007 个赞、236 条评论**，显示账号并行使用已是高热度工作流需求，尤其适用于个人、工作和客户项目隔离。

### 3. Claude Code 与 Claude Projects 知识库集成仍是核心诉求
- **Issue**：[#2511](https://github.com/anthropics/claude-code/issues/2511)
- 社区希望 Claude Code 直接使用 Claude.ai Projects 中的规格、文档和参考资料。
- 获 **429 个赞、54 条评论**；该需求长期保持高关注，体现“CLI/IDE 与云端项目上下文统一”的重要性。

### 4. Remote Control 的自动更新恢复机制不完整
- **Issue**：[#103005](https://github.com/anthropics/claude-code/issues/103005)
- Desktop 自动更新重启后，正在使用的 Remote Control 会话被归档，却没有恢复或重新连接，手机端可能直接看不到会话。
- 相关问题 [#95491](https://github.com/anthropics/claude-code/issues/95491) 也获得 **8 条评论**，说明“更新后恢复远程会话”是跨版本、跨平台的系统性问题。

### 5. Remote Control 对手机端人工消息的状态判断错误
- **Issue**：[#102828](https://github.com/anthropics/claude-code/issues/102828)
- `start_session` 会拒绝来自手机端人工消息的 `user_asked` 状态，破坏移动端驱动 Claude 的正常流程。
- 获 **12 条评论、8 个赞**。核心影响不是单次命令失败，而是削弱 Remote Control 作为移动端代理入口的可靠性。

### 6. 后台子代理因等待自身后台任务而反复唤醒父会话
- **Issue**：[#105928](https://github.com/anthropics/claude-code/issues/105928)
- 子代理启动自己的后台 shell 或 Monitor 后进入等待状态，却会持续向父会话发送相同的 “Waiting” 通知。
- 该问题可能造成通知噪声、上下文污染和不必要的父代理活动，是多代理编排中的关键可靠性问题。

### 7. Cloud Project 忽略子代理最大生成深度配置
- **Issue**：[#107845](https://github.com/anthropics/claude-code/issues/107845)
- 仓库 `.claude/settings.json` 中配置的 `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` 在 Project thread 中被忽略。
- Issue 于今日创建，标记为回归问题，直接影响云端会话对资源消耗和递归代理深度的控制。

### 8. Windows 上达到使用限额后自动继续未触发
- **Issue**：[#103591](https://github.com/anthropics/claude-code/issues/103591)
- 即使配置中启用 “Continue automatically at usage limit”，Windows 客户端仍未自动继续。
- 这会打断长任务执行，对依赖订阅额度的自动化工作流影响较大。

### 9. Desktop 内置浏览器无法使用 Passkey/WebAuthn 登录
- **Issue**：[#77473](https://github.com/anthropics/claude-code/issues/77473)
- macOS 内置浏览器无法完成平台认证器或 Touch ID Passkey 登录，导致 GitHub 等站点的登录流程被阻断。
- Issue 标有可复现标签，进一步说明浏览器能力与企业开发认证流程仍有明显缺口。

### 10. Claude Desktop 在 macOS 空闲时持续占用较高 CPU/GPU
- **Issue**：[#107076](https://github.com/anthropics/claude-code/issues/107076)
- 即使窗口内容没有变化，WindowServer 仍持续占用约 **31%–38% 单核**，GPU 进程约占 **10%–15%**。
- 隐藏窗口后负载明显下降，并可让本地 ML 工作负载提速约 24%，对同时运行 IDE、模型和桌面的开发者影响较大。

---

## 四、重要 PR 进展

> 过去 24 小时仅更新 1 个 PR，未达到 10 个；以下列出本次全部重要进展。

### 1. 公开内置 `privacy` mod 源码
- **PR**：[#107768](https://github.com/anthropics/claude-code/pull/107768)
- 作者：`@poteat`
- 状态：**已关闭**
- PR 将 Claude Code 内置 `privacy` mod 的 hooks 模块、manifest 和 README 发布到 `mods/privacy`。
- 该 mod 会在 shell 命令包含登录账户邮箱、且请求涉及 User-Agent 时拒绝执行，重点防止账户邮箱被带入第三方请求。
- PR 明确说明其目标是**公开既有行为、引入新行为**，但目前已关闭，是否合入尚不明确。

---

## 五、功能需求趋势

### 1. 多账号与配置档案管理
- Desktop 多账号切换与隔离需求最突出。
- 用户希望账号、工作区、客户项目和权限策略彼此独立，同时可快速切换。
- 相关 Issue：[#18435](https://github.com/anthropics/claude-code/issues/18435)

### 2. Claude Code 与 Claude.ai/Cloud Projects 深度集成
- 社区持续要求打通 Claude.ai Projects 知识库、项目线程与本地开发环境。
- 重点不只是同步文档，还包括模型、effort、权限和上下文的一致性。
- 相关 Issue：[#2511](https://github.com/anthropics/claude-code/issues/2511)、[#106126](https://github.com/anthropics/claude-code/issues/106126)

### 3. Remote Control 面向服务器的部署能力
- `claude remote-control --headless` 被提议用于无 TTY 的常驻服务器，并支持 daemon 化部署。
- 需求目标是让远程 Claude Code 实例可在服务器上稳定运行，无需终端复用器。
- 相关 Issue：[#30447](https://github.com/anthropics/claude-code/issues/30447)

### 4. Agent SDK 与非交互模式扩展
- 开发者希望 Agent SDK 和 `-p` 会话能够使用内置 computer use，扩展 T3 Code 等 SDK 宿主中的桌面自动化能力。
- 相关 Issue：[#106877](https://github.com/anthropics/claude-code/issues/106877)

### 5. IDE、CLI 与 Desktop 会话统一
- 社区希望 Desktop 侧边栏显示或导入 VS Code 扩展及 CLI 创建的会话，减少不同入口之间的上下文割裂。
- 相关 Issue：[#106553](https://github.com/anthropics/claude-code/issues/106553)

### 6. 更精细的权限与安全控制
- 高频需求包括 Remote Control 的可验证人工审批、凭证在用户自有系统间安全迁移，以及 Web Search 不泄露账户标识。
- 相关 Issue：[#101792](https://github.com/anthropics/claude-code/issues/101792)、[#107345](https://github.com/anthropics/claude-code/issues/107345)、[#107757](https://github.com/anthropics/claude-code/issues/107757)

### 7. 本地化 Web Search
- Web Search 工具希望支持传入 `user_location`，让美国以外地区的问题获得本地化结果。
- 相关 Issue：[#104830](https://github.com/anthropics/claude-code/issues/104830)

### 8. TUI 审查与可点击链接体验
- 开发者希望在审批界面直接针对计划或 diff 添加行级评论，并在 Rex 等终端中保留 OSC 8 超链接。
- 相关 Issue：[#96081](https://github.com/anthropics/claude-code/issues/96081)、[#106261](https://github.com/anthropics/claude-code/issues/106261)

---

## 六、开发者关注点

- **隐私信息外泄**：邮箱进入第三方请求头是最突出的新风险。社区倾向认为敏感账户标识应默认禁止进入 User-Agent，而不应只靠开关控制。
- **Remote Control 生命周期管理**：自动更新、会话归档、手机消息和 Computer Use 审批均存在断链，说明远程控制仍缺少稳定的状态恢复与跨端一致性。
- **多代理系统稳定性**：后台子代理重复通知、Cloud 环境忽略深度配置、权限 hook 执行顺序不一致，均反映代理编排的状态管理仍需加强。
- **长任务与额度控制**：使用限额后自动继续失效会直接打断自动化任务；用户同时关注 WSL 下额度消耗异常增长的问题：[#105240](https://github.com/anthropics/claude-code/issues/105240)。
- **权限交互的一致性**：主会话与后台子代理的 `PermissionRequest` hook 行为不同，可能导致 hook 预期与真实授权流程脱节：[#82150](https://github.com/anthropics/claude-code/issues/82150)。
- **桌面性能与认证兼容性**：空闲 CPU/GPU 占用、内置浏览器 Passkey 不兼容，分别影响本地开发性能和认证自动化。
- **大型目录性能**：递归监听大型 NFS 目录时，watchPaths 注册可能阻塞主线程，说明文件索引和 hooks 在网络文件系统上的性能仍有短板：[#91634](https://github.com/anthropics/claude-code/issues/91634)。
- **代码审查与安全校验**：社区希望强化 workflow hardening 检查，避免运行时生成且引用旧模型的 settings 文件让安全检查“假绿”：[#106455](https://github.com/anthropics/claude-code/issues/106455)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-06**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

- **Rust CLI 发布 v0.167.0**，重点加入 Agent Command Center、多后端切换及草稿保留能力，并同步发布 v0.168.0-alpha 系列。
- 今日 Issue 讨论高度集中在**执行安全、上下文管理、Windows/IDE 稳定性、Computer Use 与 Dots 协作**；其中“代理误操作导致服务器及容器损坏并造成高额损失”的报告获得 **509 个点赞、431 条评论**。
- PR 侧则集中完善 **TUI、多后端/Gateway OAuth、凭据隔离、消息可靠性、沙箱网络路由和 Linux musl 发布构建**。

---

## 2. 版本发布

### `rust-v0.167.0`

主要更新：

- 新增 `codex agents --no-daemon`，可直接打开 Agent Command Center。
- Command Center 与 Session Picker 支持标记未读结果。
- 可在终端 Session Picker 中切换已连接后端。
- 切换后端时保留用户草稿，降低跨后端操作时的上下文丢失风险。

发布链接：[rust-v0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0)

### 预览版本

- `rust-v0.168.0-alpha.7`
- `rust-v0.168.0-alpha.6`
- `rust-v0.167.0-alpha.3.2`

这表明 **0.168 系列已进入密集 Alpha 验证阶段**，后续值得继续关注 TUI、多后端和网关认证相关能力是否进入稳定版。

链接：

- [rust-v0.168.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7)
- [rust-v0.168.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.6)
- [rust-v0.167.0-alpha.3.2](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3.2)

---

## 3. 社区热点 Issues

### 1. 代理执行破坏服务器、容器并造成高额损失

- **Issue：** [#59060](https://github.com/openai/codex/issues/59060)
- 用户要求重启服务器时，代理执行了破坏 systemd、删除容器及运行非预期脚本等操作，并报告高达 **10,000 美元以上**的成本。
- 涉及 `gpt-6-sol medium`、Linux、Codex CLI v0.166.0。
- 获得 **509 个点赞、431 条评论**，是今日最受关注的安全议题。
- **重要性：** 暴露当前代理在高权限环境中可能缺少命令级安全边界、破坏性操作确认、费用熔断或审计机制。建议生产环境默认启用更严格的沙箱与人工审批。

### 2. 建议增加 `/rewind`，同时恢复对话和代码修改

- **Issue：** [#11626](https://github.com/openai/codex/issues/11626)
- 当前 `Esc` rewind 主要回退对话上下文，不能同步恢复 Codex 已应用到工作区的代码。
- 希望提供统一检查点，从同一节点恢复聊天状态和文件变更。
- 获得 **230 个点赞、56 条评论**。
- **重要性：** 对反复试错、代理式重构和需要精确审计的开发流程价值很高，也是当前 CLI 能力的重要缺口。

### 3. Windows 上 VS Code 1.143.1 无法启动 Codex UI

- **Issue：** [#56691](https://github.com/openai/codex/issues/56691)
- Codex 扩展版本 `26.1021.22027` 在 Windows + VS Code 1.143.1 环境下无法正常启动 UI。
- 获得 **51 个点赞、49 条评论**。
- **重要性：** 表明扩展与 IDE 新版本之间可能存在兼容性问题，可能直接影响大量使用 VS Code 的开发者。

### 4. 建议允许用户控制自动上下文压缩参数

- **Issue：** [#4106](https://github.com/openai/codex/issues/4106)
- 社区希望调整约 **220K token** 的自动压缩阈值，并支持完全关闭自动压缩。
- 获得 **129 个点赞、30 条评论**。
- **重要性：** 固定压缩策略难以适配不同模型、后端和代码规模；可控阈值、压缩策略及手动压缩能力已成为长会话开发的核心需求。

### 5. macOS Dots 会话出现严重输入延迟

- **Issue：** [#59301](https://github.com/openai/codex/issues/59301)
- 同一 Dot 在 Codex App 中输入明显卡顿，但通过 Chrome 访问时表现正常；重建 Dot 后问题仍会复现。
- 获得 **5 个点赞、18 条评论**。
- **重要性：** 这更像是桌面端 Dots 渲染、状态同步或本地会话实现问题，而非模型本身响应缓慢。

### 6. macOS 更新后全局 UI 字体变细且模糊

- **Issue：** [#40782](https://github.com/openai/codex/issues/40782)
- ChatGPT/Codex 桌面应用更新后，简体中文浅色主题下的文字出现明显变细和模糊。
- 获得 **4 个点赞、17 条评论**。
- **重要性：** 属于高频发布后的跨平台视觉回归，可能与系统字体缩放、渲染后端或主题样式变化有关。

### 7. 桌面应用缺少消息编辑能力

- **Issue：** [#11086](https://github.com/openai/codex/issues/11086)
- 用户希望修改已发送消息，并同步撤销后续已经执行的操作，类似 Cursor 的编辑与回退体验。
- 获得 **69 个点赞、17 条评论**。
- **重要性：** 消息编辑与操作回滚是代理式开发的核心交互能力，若能结合 `/rewind` 和文件快照，将显著改善可控性。

### 8. Windows 桌面端无法回复 Dot 创建的本地任务

- **Issue：** [#50697](https://github.com/openai/codex/issues/50697)
- Dot 任务本身执行成功，但 Windows 客户端提交回复时出现 `AbsolutePathBuf deserialized without a base path`。
- 获得 **8 个点赞、13 条评论**。
- **重要性：** 反映 Windows 路径序列化在 App Server 与 Dot 任务通信之间存在兼容问题，也影响跨设备任务回传。

### 9. Windows Computer Use 无法枚举应用

- **Issue：** [#48660](https://github.com/openai/codex/issues/48660)
- Computer Use 在 Windows 环境中无法枚举桌面应用。
- 另有多个关联问题涉及浏览器 URL、截图、工具注入与 Dot 委派。
- **重要性：** Computer Use 的稳定性目前明显落后于 macOS，是 Windows 端 Agent 自动化的主要阻碍。

### 10. 社区要求支持多账号及账号切换

- **Issue：** [#31778](https://github.com/openai/codex/issues/31778)
- 工作与个人项目往往使用不同 ChatGPT 账号，目前切换必须退出并重新登录。
- 获得 **17 个点赞、7 条评论**。
- **重要性：** 多账号切换会影响个人与团队开发并行，也是桌面端和 IDE 扩展共有的高频工作流需求。

---

## 4. 重要 PR 进展

> 今日展示的 PR 均显示为 **CLOSED**；以下依据变更内容判断其重要性，不代表已确认合并状态。

### 1. 为 TUI 增加受控开放的 Cloud 后端

- **PR：** [#59828](https://github.com/openai/codex/pull/59828)
- 在 `TuiMultiBackend` 开关下，为 macOS/Linux 注册额外 Cloud 连接。
- 使用当前 ChatGPT 账号及本地网络策略，并保留后端设置和 Cloud 标识。
- **价值：** 延续 v0.167.0 的多后端方向，推动本地与云端会话统一管理。

### 2. 排队提交时保留客户端元数据

- **PR：** [#59826](https://github.com/openai/codex/pull/59826)
- 排队输入现在会保留 Responses API 的客户端元数据，如 `client_type`。
- **价值：** 避免任务延迟执行后丢失来源身份，改善请求追踪、遥测和多客户端归因。

### 3. 支持调整侧边栏选择器宽度

- **PR：** [#59824](https://github.com/openai/codex/pull/59824)
- 增加键盘调整、宽度预设及分隔条拖动。
- **价值：** 改善 TUI 多会话、侧聊和后端选择器的可用性。

### 4. 将运行时认证绑定到所选凭据来源

- **PR：** [#59823](https://github.com/openai/codex/pull/59823)
- 显式 API Key 与命令凭据由不同 provider 独立管理，防止缓存连接或执行中的任务跨凭据来源。
- **价值：** 直接针对多 provider 场景中的凭据串用风险，属于重要安全隔离改进。

### 5. 为 Gateway OAuth 增加设备码授权

- **PR：** [#59822](https://github.com/openai/codex/pull/59822)
- 支持通过设备码 URL 和用户码完成无浏览器终端的 OAuth 登录。
- **价值：** 提升 SSH、容器、远程终端等无法打开浏览器的环境可用性。

### 6. Gateway OAuth 读取与登录支持指定 provider

- **PR：** [#59819](https://github.com/openai/codex/pull/59819)
- OAuth 读取和登录新增可选 `modelProvider` 参数，无需切换默认 provider 即可授权其他配置。
- **价值：** 支撑企业环境中多 provider、多凭据的精细化管理。

### 7. 处理 TUI 消息提交回执并保留不确定草稿

- **PR：** [#59817](https://github.com/openai/codex/pull/59817)
- 解决云端消息提交后活动 turn 缓存过期，以及回执丢失时自动重发可能造成重复提交的问题。
- **价值：** 提高消息投递的可靠性，避免重复执行命令或重复提交请求。

### 8. Gateway 遇到未授权响应后重试凭据导出

- **PR：** [#59816](https://github.com/openai/codex/pull/59816)
- 当推理 HTTP 返回 `401` 或 WebSocket 升级被拒时，清除缓存的 `credential_export` token 并重试。
- **价值：** 降低凭据过期导致的连接中断，增强长会话和后台任务的恢复能力。

### 9. 在模型请求前检查扩展预算

- **PR：** [#59794](https://github.com/openai/codex/pull/59794)
- 新增 `budget_exhausted` 检查钩子，在发起 HTTP 或 WebSocket 请求前阻止超预算生成。
- **价值：** 将成本控制前移到请求之前，是避免“代理任务持续消耗但用户不知情”的重要机制。

### 10. 在 TUI 侧边栏支持多个侧聊

- **PR：** [#59784](https://github.com/openai/codex/pull/59784)
- 可从主会话创建或重新打开多个侧聊，并提供编号标签、点击和键盘导航。
- **价值：** 与多后端、多会话功能形成组合，增强并行调查和任务拆分体验。

---

## 5. 功能需求趋势

### 1. 上下文控制与可逆操作

社区最强烈的新增需求是：

- 可配置的自动压缩阈值；
- 支持模型最大上下文窗口；
- 同时恢复对话和代码变更的 `/rewind`；
- 消息编辑及后续操作撤销；
- 更可靠的草稿保留与消息提交回执。

相关 Issues：

- [#4106](https://github.com/openai/codex/issues/4106)
- [#11626](https://github.com/openai/codex/issues/11626)
- [#49973](https://github.com/openai/codex/issues/49973)
- [#11086](https://github.com/openai/codex/issues/11086)

### 2. Agent 执行安全与成本治理

高关注点包括破坏性命令审批、权限边界、任务级授权保持、费用上限和执行审计。#59060 已把“代理误操作造成真实损失”推到社区中心。

相关 Issues：

- [#59060](https://github.com/openai/codex/issues/59060)
- [#58257](https://github.com/openai/codex/issues/58257)

### 3. Windows 与 IDE 扩展稳定性

Windows 桌面端、VS Code 扩展、Computer Use、Browser Control 和更新流程均出现集中反馈。

相关 Issues：

- [#56691](https://github.com/openai/codex/issues/56691)
- [#57759](https://github.com/openai/codex/issues/57759)
- [#59574](https://github.com/openai/codex/issues/59574)
- [#59380](https://github.com/openai/codex/issues/59380)
- [#56789](https://github.com/openai/codex/issues/56789)

### 4. Dots、委派与多设备任务协作

Dots 的授权、任务范围、工具注入、跨平台路径及本地任务回复存在系统性问题。

相关 Issues：

- [#50887](https://github.com/openai/codex/issues/50887)
- [#58257](https://github.com/openai/codex/issues/58257)
- [#50697](https://github.com/openai/codex/issues/50697)
- [#49588](https://github.com/openai/codex/issues/49588)

### 5. 多后端、多 Provider 与账号体系

v0.167.0 的多后端切换正与社区诉求汇合，包括 provider 选择、凭据隔离、Gateway OAuth 和多账号切换。

相关 Issues：

- [#31778](https://github.com/openai/codex/issues/31778)
- [#49973](https://github.com/openai/codex/issues/49973)

### 6. 桌面端性能与跨平台一致性

macOS Dots 卡顿、Windows 首次更新启动极慢、UI 字体渲染回归和文件上传卡住，反映桌面端仍是问题密集区。

相关 Issues：

- [#59301](https://github.com/openai/codex/issues/59301)
- [#59596](https://github.com/openai/codex/issues/59596)
- [#46338](https://github.com/openai/codex/issues/46338)
- [#40782](https://github.com/openai/codex/issues/40782)
- [#59362](https://github.com/openai/codex/issues/59362)

---

## 6. 开发者关注点

1. **代理必须可限制，而不只是可提示。**  
   用户希望危险操作先展示命令、影响范围和成本，再由人工确认；系统级变更应默认进入更严格沙箱。

2. **代码与对话需要统一时间线。**  
   单独恢复聊天或单独撤销文件都不够理想，检查点应同时覆盖上下文、工具调用和工作区变更。

3. **长会话的压缩策略必须透明、可控。**  
   固定阈值容易打断长代码任务；开发者希望知道何时压缩、压缩了什么，并可调整或关闭。

4. **Windows 是当前主要短板。**  
   VS Code 扩展启动失败、Browser/Computer Use 不可用、路径反序列化错误、升级后启动缓慢等问题相互叠加。

5. **Dots 的委派授权必须可靠继承。**  
   已授权任务不应反复请求批准，委派后也不应丢失任务上下文、授权范围或 Computer Use 工具入口。

6. **消息投递必须做到“恰好一次”。**  
   在网络断流、回执丢失或云端提交时，既不能丢消息，也不能盲目重发造成重复执行。

7. **多 Provider 场景要求凭据严格隔离。**  
   API Key、命令凭据和 OAuth 应与指定 provider 绑定，避免缓存连接或后台任务使用错误身份。

8. **模型容量与限额透明度仍不足。**  
   用户希望明确知道模型不可用、配额耗尽和自动压缩发生的时间及原因，以减少任务中断。

9. **跨设备工作流仍受 Windows 路径和工具发现影响。**  
   Dot 创建的任务即使在远端成功执行，也可能因 Windows 客户端路径解析或 Browser discovery 失败而无法回传或继续操作。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-06**  
**数据范围：过去 24 小时内更新的 Issues 与 Pull Requests**

## 今日速览

过去 24 小时没有新的版本发布，但集中出现了多批 Agent 稳定性、安全性与执行可靠性修复：重点涵盖子代理超时与配置失效、长请求被错误中止、危险命令识别、工具调用结果重复以及粘贴文本意外附带敏感文件等。

社区讨论主要集中在 **Subagent 可靠性、Browser Agent、代码检索与上下文效率、安全执行边界和可观测性**。这些动态表明 Gemini CLI 的重点正在从单纯扩展模型能力，转向完善多代理执行框架和安全治理。

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后仍被报告为成功

- **Issue**：[Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 达到最大轮次、实际未执行分析时，最终状态却显示 `success / GOAL`。
- 错误状态可能向主代理和用户传递虚假完成信号，尤其影响自动恢复和后续任务编排。
- 该 Issue 有 **13 条评论、2 个赞**，是当天讨论最活跃的问题之一。

### 2. Generalist Agent 永久挂起

- **Issue**：[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)
- 当 Gemini CLI 将任务委派给 generalist agent 后，常见操作可能卡住一小时以上；显式要求不使用子代理后可规避。
- 这是直接影响可用性的 P1 问题，并获得了 **8 个赞**。
- 与子代理超时、恢复和状态报告相关的问题形成集中反馈，说明多代理生命周期管理仍是核心短板。

### 3. 长工具调用触发 300 秒超时并被重复执行

- **Issue**：[Body timeout is fixed at 300 s for API-key auth](https://github.com/google-gemini/gemini-cli/issues/29747)
- API Key 认证下，模型长时间生成大型 `write_file` 参数时，流式请求可能长时间无输出，随后被底层 body timeout 中止并重放。
- 重放可能造成重复调用、额外费用和非确定性结果。
- 对应修复 PR [#30174](https://github.com/google-gemini/gemini-cli/pull/30174) 已进入进展列表，显示问题正在被直接处理。

### 4. Browser Agent 忽略 `settings.json`

- **Issue**：[Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 初始化时虽然合并了全局和项目级配置，但执行阶段没有正确应用 `maxTurns` 等覆盖项。
- 用户无法通过标准配置可靠控制子代理行为，增加了长任务、卡死和资源消耗风险。
- 已有 **5 条评论**，且与 Browser Agent 的锁恢复、Wayland 兼容问题一起受到关注。

### 5. Browser Agent 在 Wayland 环境下失败

- **Issue**：[browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser subagent 在 Wayland 环境中失败，但仍以 `GOAL` 终止理由展示结果，容易掩盖真实异常。
- 这是 P1 问题，涉及 Linux 桌面环境下的浏览器自动化可用性。
- 社区反馈集中在 **4 条评论、1 个赞**；除兼容性外，也再次暴露了错误终止状态不准确的问题。

### 6. Browser Agent 遇到浏览器 Profile 锁时缺乏恢复能力

- **Issue**：[Enhance browser_agent resilience](https://github.com/google-gemini/gemini-cli/issues/22232)
- 持久化浏览器 Profile 被已有实例或遗留进程锁定时，当前策略偏向立即失败。
- 社区希望引入自动接管、锁恢复以及更稳健的会话生命周期管理。
- 这是提升长期运行代理可靠性的关键需求，已有 **4 条评论**。

### 7. 工具过多时 API 返回 400

- **Issue**：[Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)
- 当环境中可用工具超过阈值时，Gemini CLI 可能因请求规模过大而收到 400 错误。
- 标题称“> 128 tools”，摘要则提到“> 400 tools”，具体限制值得进一步核实。
- 需求本质是实现工具作用域控制与动态裁剪，避免把所有已启用工具都发送给模型。

### 8. 凭据文件并发写入可能损坏并永久锁定

- **Issue**：[File-based credential store races concurrent writers](https://github.com/google-gemini/gemini-cli/issues/29054)
- 文件凭据存储采用整体“读取—修改—写入”，没有锁和原子写机制；并发写入可能导致截断或凭据丢失。
- 该问题影响 OAuth 与 API Key 登录状态，严重时可能造成持续无法登录。
- 属于安全与核心可靠性问题，已有 **3 条评论**。

### 9. 错误使用 `rm` 变体可能绕过危险命令检测

- **Issue**：[Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
- 社区报告模型在复杂 Git 或资源管理任务中可能执行 `git reset`、`--force` 等破坏性操作。
- 现有启发式检测还可能漏掉 `rm -r -f`、`rm -Rf`、`rm x -rf` 等等价形式。
- 对应 PR [#30171](https://github.com/google-gemini/gemini-cli/pull/30171) 已提交修复。

### 10. 自定义 Skills 和 Subagents 缺乏自动使用

- **Issue**：[Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
- 用户反馈 Gemini 很少主动采用已安装的 Skills 或 Subagents，通常必须显式提示才会启用。
- 这降低了高级能力的实际利用率，也削弱了针对不同工作流进行专门化和组合的能力。
- 该 Issue 有 **7 条评论、0 个赞**，反映问题明确，但社区直接认同度有限。

---

## 重要 PR 进展

### 1. 防止粘贴文本和模糊 `@` 匹配意外附带敏感文件

- **PR**：[Keep pasted @ text and fuzzy @ matches from attaching secrets](https://github.com/google-gemini/gemini-cli/pull/30169)
- 修复粘贴 Shell 记录后，`@` 被错误解析为文件引用、进而将 SSH 私钥发送给模型的问题。
- 粘贴文本默认不再激活 `@` 符号解析，同时收紧模糊匹配行为。
- 属于 P1 安全修复，影响模型请求的数据暴露边界。

### 2. 阻止子代理在模型调用停滞时耗尽全部截止时间

- **PR**：[Stop local subagents from waiting out their deadline on a stalled model call](https://github.com/google-gemini/gemini-cli/pull/30170)
- 为本地子代理增加单轮模型响应时限，避免单次调用挂起后仍等待完整的 `maxTimeMinutes` 并额外执行恢复轮次。
- 直接改善子代理超时反馈和资源占用，对应社区的 generalist agent 挂起问题。

### 3. 修复长模型请求被 Body Timeout 中止并重放

- **PR**：[Stop body timeouts from killing and replaying long model turns](https://github.com/google-gemini/gemini-cli/pull/30174)
- 调整流式请求的 body timeout 行为，避免高思考级别、大工具参数生成期间因 5 分钟无数据而中止。
- 防止同一轮请求被重复发送，降低重复工具调用和额外费用风险。

### 4. 统一识别递归、强制删除命令

- **PR**：[Flag recursive and forced rm regardless of flag position](https://github.com/google-gemini/gemini-cli/pull/30171)
- 扩展危险命令检测，不再仅检查 `args[1]`。
- 可识别 `rm -r -f`、`rm -Rf`、`rm -vrf`、`rm --recursive --force` 和 `rm x -rf` 等形式。
- 有助于安全策略引擎稳定拦截破坏性命令。

### 5. 修复会话中工具调用结果重复

- **PR**：[Keep one result per tool call ID in session records and live history](https://github.com/google-gemini/gemini-cli/pull/30172)
- 确保每个工具调用 ID 在保存的会话、实时历史和发给模型的请求中只对应一个结果。
- 解决 `--resume` 后结果重复、历史污染以及模型看到矛盾工具响应的问题。

### 6. 确保本地子代理的生成配置应用于所有模型

- **PR**：[Apply local subagents' generateContentConfig for every model](https://github.com/google-gemini/gemini-cli/pull/30175)
- 修复 `modelConfig.generateContentConfig` 仅对 `auto` 生效、别名和具体模型名失效的问题。
- `temperature`、`topP`、`topK` 和 `thinkingConfig` 等配置现在可覆盖 `auto`、`flash`、`pro` 及具体模型。

### 7. 在认证重启后保留已选择的 Worktree

- **PR**：[Preserve selected worktree across authentication restarts](https://github.com/google-gemini/gemini-cli/pull/30176)
- 当认证流程触发 CLI 重启时，继续保留用户通过 `--worktree` 选择的工作区。
- 同时覆盖 bootstrap supervisor 与旧版 child-process supervisor，改善多工作区开发体验。

### 8. 修复 GitHub Actions 中的模板注入告警

- **PR**：[Fix zizmor template-injection findings in eval-pr workflow](https://github.com/google-gemini/gemini-cli/pull/30162)
- 调整 `eval-pr.yml` 对 GitHub Actions 表达式的使用方式，避免直接注入 Bash 脚本。
- 降低 CI 工作流供应链安全风险，并处理 zizmor 的强制检查项。

### 9. 允许 ACP 客户端在运行中干预当前轮次

- **PR**：[Let clients steer a running turn with session/steering](https://github.com/google-gemini/gemini-cli/pull/29901)
- 为 Zed、JetBrains、VS Code 扩展等 ACP 客户端加入运行中转向能力。
- 用户可在不取消 `session/prompt` 的情况下追加消息，类似终端中的 `experimental.modelSteering`。
- 这是重要的 IDE 与编辑器集成方向。

### 10. 丢弃失败重试尝试产生的缓冲工具调用

- **PR**：[Discard buffered tool calls on mid-stream error or retry](https://github.com/google-gemini/gemini-cli/pull/30020)
- 当模型流在输出工具调用后发生中途错误或重试时，前端会同时收集失败尝试和成功尝试中的调用。
- PR 确保失败尝试的工具调用被丢弃，防止同一副作用命令被执行两次。
- 配套 PR [#29879](https://github.com/google-gemini/gemini-cli/pull/29879) 也覆盖了异常终止场景下的同类处理。

---

## 功能需求趋势

### 1. Subagent 生命周期与恢复能力

社区最关注的方向是子代理的**超时、终止状态、错误恢复和配置传递**。典型诉求包括：

- 达到 `MAX_TURNS` 后返回真实失败状态；
- 模型调用停滞时快速中止；
- 修复 Browser Agent 对 `maxTurns` 等配置的忽略；
- 在 `/bug` 报告和 `/chat share` 中暴露子代理轨迹；
- 支持共享记忆与并行子代理。

相关 Issues：[22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[22598](https://github.com/google-gemini/gemini-cli/issues/22598)。

### 2. Browser Agent 的跨环境稳定性

Browser Agent 的讨论集中在 Wayland 兼容、持久化 Profile 锁、自动会话接管和残留进程恢复。这表明浏览器代理正在从实验功能走向更成熟的日常自动化场景。

相关 Issues：[22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[21983](https://github.com/google-gemini/gemini-cli/issues/21983)。

### 3. 更高效的代码检索与上下文管理

社区希望减少全文件读取带来的 Token 浪费，并引入更精准的代码理解能力：

- AST 感知的文件读取、搜索和代码库映射；
- “Tactful Extraction” 式外科式检索；
- 基于原生文件工具的任务跟踪；
- 将任务状态持久化到文件，减少上下文腐化和跨会话丢失。

相关 Issues：[22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[19561](https://github.com/google-gemini/gemini-cli/issues/19561)、[18836](https://github.com/google-gemini/gemini-cli/issues/18836)。

### 4. 安全执行与权限治理

安全是本次动态中的高频主题，包括：

- 防止 `@` 引用机制意外上传 SSH 私钥；
- 准确识别危险删除命令；
- 限制 `git reset --force` 等破坏性行为；
- 避免凭据文件并发写入损坏；
- 在不可信目录中限制 `.env` 读取，同时恢复受控的用户级配置；
- 为不同工作区提供独立策略。

相关 Issues：[22672](https://github.com/google-gemini/gemini-cli/issues/22672)、[29054](https://github.com/google-gemini/gemini-cli/issues/29054)、[18397](https://github.com/google-gemini/gemini-cli/issues/18397)。

### 5. IDE、ACP 与非交互式集成

ACP 运行中转向能力是近期明确的发展方向。社区希望 Gemini CLI 不仅适用于终端，还能在 Zed、JetBrains、VS Code 等客户端中稳定运行，并支持对执行中的任务实时追加指令。

相关 PR：[29901](https://github.com/google-gemini/gemini-cli/pull/29901)。

### 6. 模型与工具生态的精细化管理

社区希望减少无效 Token 和工具调用：

- 根据任务动态裁剪可用工具；
- 正确应用子代理的模型生成参数；
- 支持更多模型名称与别名；
- 让 Agent 准确理解 CLI 参数、快捷键和自身运行方式。

相关 Issues：[24246](https://github.com/google-gemini/gemini-cli/issues/24246)、[21432](https://github.com/google-gemini/gemini-cli/issues/21432)。

---

## 开发者关注点

1. **执行状态必须可信**  
   达到轮次上限、发生超时或初始化失败的子代理，不应被报告为 `GOAL success`。准确的状态语义直接影响自动化编排、评测和用户判断。

2. **长任务容易因基础设施超时而中断或重复执行**  
   高思考模式、大型工具参数和长流式响应之间的组合，正在暴露 Body Timeout 与重试策略问题。开发者希望系统能够区分“模型仍在工作”和“请求真正失活”。

3. **子代理是当前体验中最不稳定的环节**  
   Generalist Agent 挂起、Browser Agent 配置失效、Wayland 兼容、锁恢复、轨迹不可见等问题共同出现，说明多代理系统仍缺少成熟的会话生命周期管理。

4. **安全边界需要覆盖非典型输入和命令写法**  
   粘贴文本中的 `@`、Shell 命令中不同顺序的参数组合、并发凭据写入等，都可能绕过原有保护。安全策略需要从字符串匹配升级为更语义化、可组合的规则。

5. **上下文成本和工具噪声是高频痛点**  
   AST 感知的代码检索、精准读取、持久化任务清单和动态工具裁剪，反映开发者希望降低 Token 消耗，并避免模型在工具调用过程中产生大量无效或重复操作。

6. **可观测性需求明显增强**  
   开发者不仅需要主会话日志，还希望看到子代理轨迹、实际模型配置、每个工具调用的唯一结果，以及失败尝试与成功尝试之间的差异。

7. **Skills 与 Subagents 的“自动发现与主动使用”仍未成熟**  
   用户已经安装大量定制能力，但模型往往不会主动选择它们。后续重点不仅是增加能力数量，还包括能力路由、触发条件说明和组合编排。

---

**总体判断：** 2026-11-06 的社区信号高度一致：Gemini CLI 当前最迫切的需求不是继续扩展 Agent 数量，而是让现有 Agent **稳定终止、准确汇报、可安全执行、可被观察，并能在 IDE 中实时干预**。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-06**  
**数据范围：过去 24 小时更新的 Releases、Issues 与 Pull Requests**

## 1. 今日速览

- **v1.0.106 已发布**：新增 `/code` 打开当前会话至 VS Code、引入 Fusion tier 配置，并统一 `/settings` 仪表盘；预发布版还修复了图片误发送和特殊换行粘贴问题。
- 社区焦点集中在**模型与路由控制、会话/MCP 稳定性、跨平台兼容及沙箱策略**：Fusion 模型屏蔽、Claude 缓存 TTL、Azure OpenAI 限流、MCP OAuth 刷新和 MCP 工具丢失等问题值得优先关注。
- 过去 24 小时**无更新的 PR**；今日功能迭代主要由 v1.0.106 发布和 Issue 反馈驱动。

---

## 2. 版本发布

### v1.0.106

**发布时间：2026-11-05**  
**Release 链接：** [github.com/github/copilot-cli/releases/tag/v1.0.106](https://github.com/github/copilot-cli/releases/tag/v1.0.106)

主要更新：

- **Rex 终端内联图片**：通过 Kitty direct placement 渲染图片，改善终端中的视觉内容展示。
- **IDE 集成**：新增 `/code` 命令，可在 VS Code 中打开当前 Copilot CLI 会话。
- **Fusion 配置**：在 `copilot config` 中新增 Fusion tier 设置。
- **统一设置界面**：所有用户均可通过 `/settings` 打开统一仪表盘，并支持跨设置项和本地资源的全局搜索。

### v1.0.106-11

**发布时间：2026-11-05**  
**Release 链接：** [github.com/github/copilot-cli/releases/tag/v1.0.106-11](https://github.com/github/copilot-cli/releases/tag/v1.0.106-11)

主要修复：

- 使用 `Ctrl+U`、`Ctrl+K` 或 `Ctrl+W` 移除提示词中的图片，或通过历史记录替换内容后，图片不再被意外随消息发送；`Ctrl+S` 之后也可正常暂存提示词。
- 修复粘贴包含 **NEL、Unicode 行分隔符或段落分隔符**时的解析问题，使这些内容正确填充为独立提示词行。

---

## 3. 社区热点 Issues

### 1. Azure OpenAI 429 限流退避机制失效

[#3679：BYOK Azure OpenAI 的 429 限流会瞬间耗尽全部重试](https://github.com/github/copilot-cli/issues/3679)

- **重要性**：BYOK Azure OpenAI 遭遇短暂 429 时，CLI 几乎瞬间完成 5 次重试并直接失败，没有有效的指数退避；对自托管、隔离网络或共享 Azure 配额场景影响明显。
- **社区反应**：3 条评论、1 个 👍；Issue 仍开放。
- **开发者诉求**：应提供合理退避策略，并允许配置重试次数和等待时间。

### 2. IME 输入会意外提交提示词

[#1972：允许配置提交键，例如 Ctrl+Enter](https://github.com/github/copilot-cli/issues/1972)

- **重要性**：中日韩输入法使用 Enter 完成候选词转换时，CLI 可能同时提交提示词，是 CJK 用户的高频交互障碍。
- **社区反应**：48 个 👍、4 条评论，是本轮最受认可的 Issue 之一。
- **开发者诉求**：支持自定义提交键，或在 IME 组合输入期间避免误提交。

### 3. Fusion/Auto 模式缺少模型屏蔽列表

[#5369：允许在 Copilot Fusion 或 Auto 模式中配置模型黑名单](https://github.com/github/copilot-cli/issues/5369)

- **重要性**：自动路由无法阻止特定模型被选中，不利于成本控制、合规要求或对特定模型质量的主动管理。
- **社区反应**：今日新建，尚无评论和点赞。
- **开发者诉求**：为 Fusion/Auto 增加模型 block list，最好支持按模型名称或模型系列配置。

### 4. Claude 提示缓存仅持续 5 分钟

[#5220：为 Claude 模型提供 1 小时 Prompt Cache TTL](https://github.com/github/copilot-cli/issues/5220)

- **重要性**：Claude 默认 5 分钟缓存会在用户阅读、思考和编写下一轮提示时过期，导致完整上下文重新计费或重复处理，增加延迟与成本。
- **社区反应**：9 个 👍、2 条评论，讨论热度较高。
- **开发者诉求**：支持更长缓存 TTL，至少提供 1 小时选项，并考虑暴露缓存状态。

### 5. MCP 工具 Schema 在会话中反复丢失

[#5367：Agent 经常丢失 MCP 工具 schemas](https://github.com/github/copilot-cli/issues/5367)

- **重要性**：工具定义丢失会直接限制 Agent 能力；当前用户需手动执行 `/compact` 才能恢复，对长期 MCP 工作流影响显著。
- **社区反应**：今日更新，暂无评论和点赞。
- **开发者诉求**：让工具 schema 在 idle、恢复会话及上下文压缩后保持稳定，并提供自动重连或重载机制。

### 6. 远程 MCP OAuth 令牌过期后无法自动恢复

[#5366：Entra OAuth 访问令牌过期后调用失败，只有重启服务可恢复](https://github.com/github/copilot-cli/issues/5366)

- **重要性**：`mcp.list` 仍显示 connected，但实际调用在令牌过期后失败，状态与可用性不一致；Microsoft Teams、Outlook 等关键 MCP 集成会因此中断。
- **社区反应**：今日更新，暂无评论和点赞。
- **开发者诉求**：自动使用 refresh token 刷新，并在刷新成功后重试原调用；连接状态也应反映认证失效。

### 7. ACP 新会话报告的模型与实际模型不一致

[#5363：`session/new` 报告的 `model` 并非会话实际使用的模型](https://github.com/github/copilot-cli/issues/5363)

- **重要性**：ACP 客户端可能依据响应中的模型元数据做出错误展示或路由决策；只有显式调用 `session/set_config_option` 后才真正生效。
- **社区反应**：今日更新，暂无评论和点赞。
- **开发者诉求**：让会话创建响应与实际运行模型严格一致，或明确区分“默认配置值”与“当前生效值”。

### 8. Windows 托管设置下沙箱探测失败

[#5368：Windows 上 `failIfUnavailable: true` 时沙箱探测报 CreateProcessW error 2](https://github.com/github/copilot-cli/issues/5368)

- **重要性**：托管策略要求沙箱不可用时必须失败，但 Windows 环境中的可执行文件解析或权限差异导致探测错误，影响企业安全策略的正常执行。
- **社区反应**：今日更新，暂无评论和点赞。
- **开发者诉求**：修正 Windows 路径解析、进程启动和托管策略探测逻辑，并提供明确诊断信息。

### 9. 沙箱策略额外注入临时目录读写权限

[#5365：在 sandbox.decision 中报告临时存储读写规则，并允许退出](https://github.com/github/copilot-cli/issues/5365)

- **重要性**：只配置一个读写路径时，解析后的策略却包含第二条未明确命名的临时存储授权；企业安全审计和最小权限预期可能因此不一致。
- **社区反应**：今日更新，暂无评论和点赞。
- **开发者诉求**：显式报告 `$TMPDIR` 授权规则，并提供关闭或覆盖该附加权限的选项。

### 10. Android/Termux 仍因 glibc 依赖无法运行

[#3333：v1.0.48+ 的 runtime.node 依赖 glibc，Android/Termux 支持损坏](https://github.com/github/copilot-cli/issues/3333)

- **重要性**：原生 Rust addon 面向 glibc 编译，而 Android 使用 Bionic libc，导致自 v1.0.48 起关键平台无法运行，属于明确的兼容性回归。
- **社区反应**：6 条评论、5 个 👍；Issue 自 2026 年 5 月起持续更新，反映修复周期较长。
- **开发者诉求**：提供 Bionic 兼容构建、分离可选 native addon，或提供无需 `runtime.node` 的降级路径。

---

## 4. 重要 PR 进展

过去 24 小时内，GitHub Copilot CLI **没有更新的 Pull Requests**，因此暂无重要 PR 可列示。

- **PR 数据入口：** [github.com/github/copilot-cli/pulls](https://github.com/github/copilot-cli/pulls)

---

## 5. 功能需求趋势

### 1. 模型选择、路由与成本控制

社区希望从“自动选择模型”走向“可解释、可约束的自动路由”：

- Fusion/Auto 模式支持模型黑名单。
- Claude Prompt Cache 提供更长 TTL。
- ACP 会话准确报告当前生效模型。
- Azure OpenAI 限流支持可配置退避和重试。

相关 Issues：  
[#5369](https://github.com/github/copilot-cli/issues/5369) · [#5220](https://github.com/github/copilot-cli/issues/5220) · [#5363](https://github.com/github/copilot-cli/issues/5363) · [#3679](https://github.com/github/copilot-cli/issues/3679)

### 2. IDE 与终端集成持续增强

- v1.0.106 新增 `/code`，可直接在 VS Code 中打开当前会话。
- 社区希望终端集成能获知**当前前台会话**变化，而不仅是最后一个提交提示词的会话。
- Herdr 等终端应用希望获得标准 agent 状态协议。

相关 Issues：  
[#5279](https://github.com/github/copilot-cli/issues/5279) · [#5320](https://github.com/github/copilot-cli/issues/5320)

### 3. MCP 生命周期与认证可靠性

MCP 相关问题集中于：

- 工具 schema 丢失。
- OAuth access token 过期后不自动刷新。
- 连接状态与实际可用性不一致。
- ACP 模式下授权恢复路径需要统一。

相关 Issues：  
[#5367](https://github.com/github/copilot-cli/issues/5367) · [#5366](https://github.com/github/copilot-cli/issues/5366) · [#5229](https://github.com/github/copilot-cli/issues/5229)

### 4. 上下文管理与长期会话质量

- 提议允许模型将无意义的工具输出替换为单行摘要，在首次付费后持续保持上下文清洁。
- 长时间会话中的模型可用性、缓存命中率和工具 schema 稳定性成为共同诉求。

相关 Issues：  
[#5362](https://github.com/github/copilot-cli/issues/5362) · [#5367](https://github.com/github/copilot-cli/issues/5367) · [#5361](https://github.com/github/copilot-cli/issues/5361)

### 5. 企业沙箱与权限可观测性

开发者希望：

- 沙箱决策完整暴露实际生效规则。
- 临时目录授权可被审计、配置或关闭。
- Windows 托管策略下的沙箱探测稳定可靠。
- 不因策略更新竞争导致非交互命令直接失败。

相关 Issues：  
[#5365](https://github.com/github/copilot-cli/issues/5365) · [#5368](https://github.com/github/copilot-cli/issues/5368) · [#5360](https://github.com/github/copilot-cli/issues/5360)

### 6. 跨平台与国际化输入支持

- Termux/Android 的 libc 兼容仍是长期阻塞问题。
- CJK IME 场景需要自定义提交键，减少误提交。

相关 Issues：  
[#3333](https://github.com/github/copilot-cli/issues/3333) · [#1972](https://github.com/github/copilot-cli/issues/1972)

---

## 6. 开发者关注点

### 高频痛点

1. **状态与实际行为不一致**  
   `mcp.list` 显示 connected、ACP 报告的模型与实际模型不符、CLI 与终端的前台会话信息不完整，都增加了集成方的判断成本。

2. **失败后缺少自动恢复机制**  
   MCP OAuth 刷新、MCP schema 重载、Azure 429 退避、托管沙箱策略更新重试，均需要更稳健的自动恢复，而不只是要求用户重启或手动执行 `/compact`。

3. **成本和缓存可见性不足**  
   Claude 5 分钟缓存过期会直接推高长会话成本；用户希望获得更长 TTL，并了解缓存何时命中或失效。

4. **企业策略需要透明且可配置**  
   沙箱自动附加的临时目录权限、未明确暴露的规则，以及 Windows 平台差异，都可能影响企业安全审计。

5. **兼容性和交互细节仍影响实际可用性**  
   Android/Termux 无法运行属于平台级阻塞；IME Enter 键误提交则直接影响日常中文、日文和韩文使用体验。

### 值得产品侧优先评估的方向

- 为 Fusion/Auto 增加模型黑名单及路由可解释性。
- 提升 MCP OAuth、schema 和连接状态的自动恢复能力。
- 支持 Claude 长缓存 TTL，并展示缓存命中信息。
- 修正 ACP 会话模型元数据与实际配置的一致性。
- 提供可配置的提示词提交键，兼容 CJK IME。
- 完整报告并允许控制沙箱临时存储权限。
- 为 Windows 和 Termux 建立稳定的发布与兼容性测试矩阵。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-11-06**

## 今日速览

过去 24 小时内，Kimi Code CLI 社区无新版本发布，也没有新增或更新的 Issue。当前仅有 1 个已关闭的 Pull Request：#2606「Dev/knowledge plane」，其讨论重点涉及知识层/知识平面相关开发，但具体实现内容在现有摘要中未完整展示。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues

过去 24 小时内没有更新 Issue，因此本期无社区热点 Issue 可列。

## 重要 PR 进展

### #2606 — Dev/knowledge plane

- **状态**：已关闭（CLOSED）
- **作者**：[@SoMiReMiReDo](https://github.com/SoMiReMiReDo)
- **更新时间**：2026-11-05
- **链接**：[MoonshotAI/kimi-cli#2606](https://github.com/MoonshotAI/kimi-cli/pull/2606)

该 PR 从名称判断聚焦于知识层（knowledge plane）相关开发，可能涉及知识管理、上下文组织或知识能力扩展。PR 已关闭，但摘要仅包含贡献模板文本，未提供具体代码变更、测试结果或维护者反馈，暂无法确认其最终影响及后续是否由其他 PR 接续。

## 功能需求趋势

由于过去 24 小时内没有更新的 Issue，无法基于当日 Issue 可靠提炼社区需求趋势。仅从已关闭的 #2606 可见，“知识平面/知识层能力”是近期开发活动中的一个方向，但不足以判断其社区热度或优先级。

## 开发者关注点

当日没有新的 Issue 评论或 PR 评审信息可用于归纳开发者痛点。现有数据仅表明：

- 知识层与知识管理可能是近期探索中的能力方向。
- #2606 已被关闭，但其关闭原因、是否合入替代实现以及后续规划尚不明确。
- 缺少公开的 Issue 与 PR 讨论细节，暂时无法判断社区对新模型支持、IDE 集成、性能优化或上下文管理等方面的具体反馈。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-06

## 今日速览

- 今日新增 `process-daemon v0.5.0`，升级 `opencode-pty` 至 protocol 8，核心变化集中在后台进程与 PTY 管理能力。
- 社区讨论主要围绕免费额度重置异常、模型推理档位缺失、桌面端实时刷新及 MCP 稳定性展开；同时，远程 MCP TLS、GUI 可视化插件与站点性能优化持续推进。
- 数据源显示过去 24 小时共更新 **50 个 Issues、50 个 Pull Requests**。

---

## 版本发布

### process-daemon v0.5.0

- `opencode-pty` 升级至 **0.5.0 / protocol 8**。
- 对应 npm 包：`@opencode/pty@0.5.0`。
- 这是本日唯一发布版本，主要面向 OpenCode 的进程守护和终端会话基础设施。

[查看 Release](https://github.com/anomalyco/opencode/releases)

---

## 社区热点 Issues

### 1. 免费额度异常集中反馈入口

[#59387](https://github.com/anomalyco/opencode/issues/59387) 是免费额度问题的统一追踪入口，涵盖额度超限、提示重置但实际未重置、桌面端额度提示异常等。该帖评论达到 **304 条**，远高于其他 Issue，是今日社区参与度最高的问题。

### 2. 单个模型触发限流后，其他模型也被错误阻断

[#49014](https://github.com/anomalyco/opencode/issues/49014) 报告 OpenCode Go 中某个模型达到自身 5 小时限额后，其他尚未使用的模型也统一返回限流错误。该问题可能导致模型回退策略失效，影响自动化工作流；相关 Issue 已关闭，但值得继续核查限流状态是否按模型隔离。

### 3. Prompt Cache TTL 无法按 Agent、Provider 或模型配置

[#51109](https://github.com/anomalyco/opencode/issues/51109) 提出为 `opencode.jsonc` 增加可配置的 Prompt Cache TTL。对于包含子 Agent、长时间工具调用或跨分钟任务的会话，固定采用 Anthropic 默认的 5 分钟 TTL 会削弱缓存收益并增加成本；Issue 获得 **11 条评论**。

### 4. 桌面端文件树和预览面板未及时刷新

[#52941](https://github.com/anomalyco/opencode/issues/52941) 指出 Agent 修改文件后，桌面端文件树不显示新增文件，已打开的预览标签仍展示旧内容，关闭后重新打开也可能继续读取缓存。该问题直接破坏“编辑—审查”闭环，目前已有可复现标记和 **10 条评论**。

### 5. TUI `--auto` 无法批准后台标签中的权限请求

[#44007](https://github.com/anomalyco/opencode/issues/44007) 指出 V2 TUI 的自动批准能力只对当前选中的 Session Route 生效，后台标签会停在权限请求，直到用户手动切换过去。该问题会削弱多会话并行自动化能力，已有 **10 条评论**和 **4 个赞**。

### 6. MiniMax M3.1 Flash 未暴露推理强度档位

[#54801](https://github.com/anomalyco/opencode/issues/54801) 指出 models.dev 已声明 MiniMax M3.1 Flash Preview 的五级 reasoning effort，但 OpenCode 在 TUI 中解析不到任何可选档位，用户必须手写 `variants` 配置。这是模型能力映射链路的问题，获得 **7 条评论**。

同类新问题 [#62264](https://github.com/anomalyco/opencode/issues/62264) 进一步指出 `minimax.io` API 和 Token Plan Provider 均未暴露 MiniMax M3.1 Flash 的 reasoning variants，显示该问题并非单一 Provider 配置失误。

### 7. 数据库 CLI 连接失败，需手动重启服务

[#62232](https://github.com/anomalyco/opencode/issues/62232) 报告 OpenCode 2.0 调用 `mysql`、`mongosh` 等命令时无法连接服务器，执行 `opencode service restart` 后恢复。问题可能在工具执行环境、网络上下文或服务复用机制中出现，已有 **6 条评论**。

### 8. `session export --sanitize` 未完整清理敏感数据

[#62031](https://github.com/anomalyco/opencode/issues/62031) 显示，Sanitize 模式只处理普通消息文本，仍可能在 Assistant native data、Provider 响应体、工具错误及失败压缩错误中保留敏感内容，历史目录切换消息也可能暴露工作路径。该功能目前不适合直接用于不可信环境的数据导出。

### 9. 桌面内置浏览器约每 60 秒自动重载

[#62234](https://github.com/anomalyco/opencode/issues/62234) 报告 Review Pane 的页面会在 60–80 秒后断开并重载，发送 Prompt 时也会立即触发。初步分析指出，重新附加浏览器连接时会销毁现有 tunnel，导致页面中的 Socket 全部中断；Issue 获得 **3 条评论**。

### 10. `apply_patch` 无法匹配 NFC/NFD 文本差异

[#62247](https://github.com/anomalyco/opencode/issues/62247) 复现了视觉相同但 Unicode 规范形式不同的上下文匹配失败：文件使用 NFD 的 `é`，Patch 使用 NFC 时会报 `Failed to find expected lines`。该问题影响跨平台文件编辑，对包含重音字符、国际化文本或 macOS 文件尤其明显。

### 其他值得关注

- [#62031](https://github.com/anomalyco/opencode/issues/62031)：会话导出脱敏不完整，存在敏感信息泄露风险。
- [#62286](https://github.com/anomalyco/opencode/issues/62286)：Windows 10 桌面应用滚动条无法正常向上拖动。
- [#62255](https://github.com/anomalyco/opencode/issues/62255)：希望模型额度耗尽时直接展示可切换的已配置模型。
- [#62258](https://github.com/anomalyco/opencode/issues/62258)：希望在对话中直接展示生成式图表等视觉内容。
- [#61910](https://github.com/anomalyco/opencode/issues/61910)：共享服务下 MCP 子进程不断累积，观察到 **518 个进程、约 17.26 GB PSS**，已关闭。

---

## 重要 PR 进展

### 1. 远程 MCP 支持单服务器 TLS 信任配置

[#60039](https://github.com/anomalyco/opencode/pull/60039) 为远程 MCP Server 配置新增可选 `tls` 块，使单个服务器可以使用自签名证书或私有 CA。该改动为复杂企业网络中的远程 MCP 接入提供了更细粒度的安全控制。

### 2. MCP 私有网络证书首次使用时可选择信任

[#60041](https://github.com/anomalyco/opencode/pull/60041) 建立在单服务器 TLS 配置之上，补充首次连接的证书信任流程。它与 #60039 组成堆叠 PR，目标是降低私有网络 MCP 证书的部署门槛，同时避免全局放宽 TLS 校验。

### 3. 新增 Inline Visual Plot 渲染能力

[#62287](https://github.com/anomalyco/opencode/pull/62287) 在 GUI 插件中引入 `visual` fenced block：模型输出小型 JSON 规范，由类型化 Registry 解析，并使用宿主主题变量渲染首批 Plot。该 PR 是对话内可视化能力的重要基础设施。

### 4. Desktop 对话支持类型化工程可视化

[#62268](https://github.com/anomalyco/opencode/pull/62268) 尝试为 Desktop 增加内建 Visual Layer，让助手通过 `visual` 代码块生成结构化内容，并在对话区或 Session Side Panel 中渲染。该方向与 [#62258](https://github.com/anomalyco/opencode/issues/62258) 对应，可改善架构图、数据曲线和流程说明的呈现。

### 5. MiniMax Messages effort ladder 映射修复

[#62265](https://github.com/anomalyco/opencode/pull/62265) 修复 MiniMax Messages 路由上的推理档位映射，将目录中声明的 effort ladder 正确转换为 Provider 请求参数。该 PR 已关闭，并关联 [#62264](https://github.com/anomalyco/opencode/issues/62264) 与 [#54801](https://github.com/anomalyco/opencode/issues/54801)。

### 6. 保留 MiniMax 已声明的推理等级

[#56510](https://github.com/anomalyco/opencode/pull/56510) 将 models.dev 声明的 MiniMax Messages effort levels 映射至 `body.output_config.effort`，同时保留 M3 的切换逻辑与 M2 的保护条件。该 PR 仍在开放状态，与 #62265 共同处理该问题。

### 7. CLI 安装方式探测不再污染项目目录

[#62273](https://github.com/anomalyco/opencode/pull/62273) 修复 `Updater.method()`：过去为检测 npm、pnpm、Bun、Yarn、vp 等安装方式，会在项目目录执行多次全局包管理器查询。现在这些探测被移出项目目录，可减少无关文件变更、命令副作用及潜在权限问题。

### 8. 展示 Claude 在工具调用间写入的进度信息

[#55299](https://github.com/anomalyco/opencode/pull/55299) 修复 Claude 模型在工具调用之间写给用户的进度更新未显示的问题。该改动改善长任务执行过程中的可观察性，让用户能够更及时了解 Agent 当前进度。

### 9. 编译后的插件复用宿主 TUI Runtime

[#56900](https://github.com/anomalyco/opencode/pull/56900) 修复 npm 场景下编译插件无法正确共享 OpenTUI/Solid 宿主 Runtime 的问题，并保留无扩展名依赖及本地 Wrapper 的兼容性。该 PR 与 Server-only 修复 #56644 配套，可降低插件在打包和发布后的运行差异。

### 10. 站点按页面、按语言拆分资源

[#62278](https://github.com/anomalyco/opencode/pull/62278) 将每个页面所需的字符串独立拆分，并只加载当前语言资源，避免整站共享资源进入所有页面。相关性能 PR [#62272](https://github.com/anomalyco/opencode/pull/62272) 进一步将页面 JavaScript 体积降低约 **40%**，目前两者均已关闭。

### 其他值得跟踪

- [#62285](https://github.com/anomalyco/opencode/pull/62285)：同步站点最新改动并修复生产环境颜色表现。
- [#62281](https://github.com/anomalyco/opencode/pull/62281)：让区域限制策略链接按模型配置，避免非 Meta 模型错误指向 Meta 政策。
- [#62274](https://github.com/anomalyco/opencode/pull/62274) 与 [#62284](https://github.com/anomalyco/opencode/pull/62284)：推进移除 Cloudflare US-only Regional Hostname，改善全球访问路由；中间部署因权限问题一度回滚。
- [#62288](https://github.com/anomalyco/opencode/pull/62288)：将 `@hona/strobe` 从 0.11.0 升级至 0.13.0，更新基准测试能力。
- [#60957](https://github.com/anomalyco/opencode/pull/60957)：更新 Nix `node_modules` 哈希。

---

## 功能需求趋势

### 1. 模型能力自动发现与准确映射

社区持续要求 OpenCode 自动读取模型目录中的 reasoning effort、thinking depth、variant 等能力信息，并在不同 Provider 间正确映射。重点包括：

- MiniMax M3/M3.1 Flash 推理档位；
- Provider 特有 API 参数；
- 模型切换后的能力保持；
- 避免要求用户手写完整 `variants` 配置。

相关 Issues：[#54801](https://github.com/anomalyco/opencode/issues/54801)、[#62264](https://github.com/anomalyco/opencode/issues/62264)、[#51109](https://github.com/anomalyco/opencode/issues/51109)

### 2. 额度耗尽后的模型回退与容错

用户希望某个模型达到配额上限时，OpenCode 能自动列出其他已配置模型供选择或自动回退，避免工作流完全阻塞。同时，免费额度重置、跨模型隔离和错误提示准确性成为高频反馈点。

相关 Issues：[#49014](https://github.com/anomalyco/opencode/issues/49014)、[#62255](https://github.com/anomalyco/opencode/issues/62255)、[#59387](https://github.com/anomalyco/opencode/issues/59387)

### 3. 对话内原生可视化

社区希望模型可以直接在对话中输出图表、流程图、架构图和数据可视化，而非仅返回文本或外部链接。当前已有 `visual` Block、类型化 Registry 和 Plot Renderer 等实现探索。

相关 Issues：[#62258](https://github.com/anomalyco/opencode/issues/62258)

### 4. Desktop 与 IDE 的实时一致性

桌面端文件树、预览标签、浏览器面板和更新状态都需要更可靠的实时刷新机制。现有问题集中在 Agent 修改文件后预览陈旧、浏览器频繁重载以及更新下载期间菜单无反馈。

相关 Issues：[#52941](https://github.com/anomalyco/opencode/issues/52941)、[#62234](https://github.com/anomalyco/opencode/issues/62234)、[#62238](https://github.com/anomalyco/opencode/issues/62238)

### 5. 远程 MCP 的企业级连接能力

远程 MCP 的私有 CA、自签名证书、Header 环境变量解析，以及 MCP 子进程生命周期管理成为主要工程需求。社区期待更细粒度的 TLS 配置、更稳定的进程回收和更低资源占用。

相关 Issues：[#61319](https://github.com/anomalyco/opencode/issues/61319)、[#61910](https://github.com/anomalyco/opencode/issues/61910)

### 6. 缓存与成本控制

社区不仅关注 Prompt Cache 是否开启，还要求按 Agent、Provider 和模型配置 TTL，并将 Session Warming 限定在真正受益的场景，避免 OpenAI、Gemini 等 Provider 上出现额外成本。

相关 Issues：[#51109](https://github.com/anomalyco/opencode/issues/51109)、[#61775](https://github.com/anomalyco/opencode/issues/61775)、[#58163](https://github.com/anomalyco/opencode/issues/58163)

### 7. 跨平台稳定性与 Unicode 兼容

Windows 安装升级路径、滚动条、COSMIC Terminal 渲染、Shell 参数解析，以及 NFC/NFD 文件匹配问题表明，跨平台质量仍是高频主题。

相关 Issues：[#17044](https://github.com/anomalyco/opencode/issues/17044)、[#62286](https://github.com/anomalyco/opencode/issues/62286)、[#61336](https://github.com/anomalyco/opencode/issues/61336)、[#62247](https://github.com/anomalyco/opencode/issues/62247)

---

## 开发者关注点

- **可靠性优先于新增模型数量**：额度重置、按模型限流、数据库连接、Tunnel 生命周期及 MCP 进程泄漏，会直接中断自动化任务。
- **文件与预览必须实时一致**：Agent 已修改文件但 Desktop 仍展示旧内容，是高影响且容易被用户直接感知的缺陷。
- **模型元数据需要“声明即可用”**：目录中已有的 reasoning effort 不应要求用户重复配置；Provider 差异应由适配层消化。
- **多会话与后台执行需要真正无人值守**：`--auto` 只覆盖当前标签、权限请求阻塞后台 Session，都限制了并行 Agent 的实用性。
- **脱敏功能需要可审计**：Sanitize 导出目前存在遗漏，不能只依据“已启用 Sanitize”判断数据已经安全。
- **Unicode 文件修改必须可靠**：Patch 匹配应进行 NFC/NFD 归一化或提供明确错误，避免视觉相同文本无法编辑。
- **成本控制开始深入到缓存策略**：用户期待按 Agent、Provider 和模型精细调节 TTL，并让 Warming 只在有实际收益时运行。
- **桌面端交互仍需补齐细节**：包括更新进度反馈、浏览器稳定连接、Windows 滚动行为和文件预览同步。
- **远程 MCP 的安全与治理并行推进**：私有 CA 信任、Header 注入、服务级 TLS 和进程回收将共同决定企业环境中的可用性。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-06

## 今日速览

过去 24 小时无新版本发布，但社区集中讨论 **Agent 工具的 Token 消耗与凭据隔离**：用户认可当前 harness 的能力，同时担忧其成本已高于 Codex/Claude，并指出模型工具可接触 Provider 凭据的问题。  
工程侧则重点推进 swarm agent 运行时上下文、SSH 剪贴板、ACP 工具更新和 reasoning effort 兼容性修复，同时 CI 测试隔离问题仍在持续收敛。

## 社区热点 Issues

> 数据中过去 24 小时更新的 Issue 共 9 条，以下全部列出。

1. **[OPEN] Agent harness 的 Token 消耗过高**  
   用户高度认可当前 harness，但认为其在所有模型上的 Token 使用量甚至超过 Codex 和 Claude，已形成显著成本压力。Issue 有 3 条评论，是本期最直接的效率反馈。  
   链接：[Issue #2081](https://github.com/1jehuang/jcode/issues/2081)

2. **[OPEN] swarm agent 打开时丢失当前 runtime**  
   从 swarm 面板在新终端打开 agent 时，新进程无法继承请求端的 `JCODE_HOME`、`JCODE_RUNTIME_DIR`、socket 等运行时信息，因而查找了错误的 session。该问题已有对应修复 PR。  
   链接：[Issue #2082](https://github.com/1jehuang/jcode/issues/2082)

3. **[OPEN] Provider 凭据必须与模型工具隔离**  
   当前 jcode 工具与持有 Provider 凭据的进程、用户和环境共享访问边界，模型可能通过环境变量、配置文件或 `/proc/<pid>/environ` 读取密钥。该议题直接关系到自主执行环境的安全边界，已有 2 条评论。  
   链接：[Issue #2052](https://github.com/1jehuang/jcode/issues/2052)

4. **[OPEN] SSH 下复制内容无法写入用户本地剪贴板**  
   jcode 通过 SSH 使用时，OSC 52 在 macOS/Windows 客户端路径被短路，复制内容仅进入服务端剪贴板，无法在浏览器或本地编辑器中粘贴。该问题已有针对性修复 PR。  
   链接：[Issue #2077](https://github.com/1jehuang/jcode/issues/2077)

5. **[OPEN] ACP 流式工具更新仅包含 ID，且可能丢失 rawInput**  
   `jcode acp` 在工具参数分片更新时发送只有 `toolCallId` 的空更新，重叠工具调用还可能丢失或错配 `rawInput`。问题会影响 ACP 客户端对调用状态的准确渲染与追踪。  
   链接：[Issue #2075](https://github.com/1jehuang/jcode/issues/2075)

6. **[OPEN] 运行时内存日志缺少字节数和保留期上限**  
   server/client memory log 目前只限制为 90 个文件，单个每日 JSONL 在活跃机器上可达 10–15 MB，持续增长可能造成磁盘占用与日志维护问题。  
   链接：[Issue #2079](https://github.com/1jehuang/jcode/issues/2079)

7. **[OPEN] jcode-tui 测试未清理命名 Provider 环境变量**  
   `with_temp_jcode_home` 清理了多项环境变量，却遗漏 `JCODE_NAMED_PROVIDER_PROFILE`；从 jcode 会话内部运行测试时，该变量会被继承并导致 6 个测试失败。这是典型的测试隔离与环境污染问题。  
   链接：[Issue #2076](https://github.com/1jehuang/jcode/issues/2076)

8. **[OPEN] 提议为 swarm spawn 增加可选 Jev 路由策略**  
   该提案希望由校准后的决策模型，为每个 swarm worker 或 turn 自动选择模型与 reasoning effort，并建议先以默认关闭的 shadow mode 实施。它代表了从手工选模型向统一、智能路由演进的方向。  
   链接：[Issue #2055](https://github.com/1jehuang/jcode/issues/2055)

9. **[OPEN] master 分支仍有 7 个 jcode-tui 测试失败**  
   该技术债 Issue 汇总了 `jcode-tui` 测试中剩余的 7 个独立失败案例；此前报告的 11 个失败中，3 个归入 #1340、1 个归入 #1339。目前仍需逐项定位共同根因。  
   链接：[Issue #1342](https://github.com/1jehuang/jcode/issues/1342)

## 重要 PR 进展

> 数据中过去 24 小时更新的 PR 共 6 条，以下全部列出。

1. **修复 swarm agent 的运行时上下文继承**  
   在新终端启动 swarm agent 时保留请求客户端的 `JCODE_HOME`、runtime 目录及 socket 等环境信息，避免 `jcode --resume` 连接到错误 runtime。该 PR 直接对应 #2082。  
   链接：[PR #2080](https://github.com/1jehuang/jcode/pull/2080)

2. **修复 SSH 会话中的 OSC 52 剪贴板顺序**  
   SSH 环境下先发送 OSC 52，再调用原生剪贴板逻辑，使复制内容能够到达客户端，而不是仅落在服务端；对应修复 #2077。  
   链接：[PR #2078](https://github.com/1jehuang/jcode/pull/2078)

3. **显式发送 `reasoning_effort: "none"`**  
   OpenAI 兼容及 DeepSeek 风格网关在字段缺失时可能默认开启 thinking；该修复显式传递 `"none"`，确保 `/effort none` 在 LiteLLM 等网关中真正关闭推理。  
   链接：[PR #2021](https://github.com/1jehuang/jcode/pull/2021)

4. **TUI 信息面板与 memory effort 配置增强**  
   合并 overview folding widget、`agents.memory_effort` sidecar 配置和 runtime model rows，并支持通过 `JCODE_MEMORY_EFFORT` 为不同后端固定 memory extraction sidecar 的 reasoning effort。  
   链接：[PR #1709](https://github.com/1jehuang/jcode/pull/1709)

5. **防止 `/improve` 因元数据持久化失败而终止会话**  
   session metadata 文件缺失或写入失败时不再通过未处理的 `?` 直接结束整个会话，从而避免用户被退回 shell 并丢失已附加的对话。  
   链接：[PR #1483](https://github.com/1jehuang/jcode/pull/1483)

6. **整合 fork 贡献及上游评审修复**  
   该汇总 PR 将此前多个重叠贡献合并到指定 upstream 基线，包含相关问题的集中修复，重点在于统一补丁集并降低多 PR 分散带来的评审与维护成本。  
   链接：[PR #1819](https://github.com/1jehuang/jcode/pull/1819)

## 功能需求趋势

1. **Agent 成本与资源效率优化**  
   社区期待 harness 在保持执行能力的同时减少 Token 消耗，尤其是上下文、工具输出及多轮调用中的冗余信息。

2. **自主工具的安全隔离**  
   Provider API key、配置文件及进程环境不应暴露给模型可调用的 bash 或其他工具；沙箱化、最小权限和凭据代理是核心方向。

3. **多 Agent 与 swarm 编排**  
   关注运行时上下文继承、session 准确恢复，以及按 worker/turn 动态选择模型和 reasoning effort 的智能路由能力。

4. **跨终端、跨平台剪贴板兼容性**  
   SSH、macOS、Windows 和终端复用器的组合场景暴露出 OSC 52 与原生剪贴板路径不一致的问题。

5. **ACP 协议与多工具调用兼容性**  
   客户端需要完整、可追踪的工具调用参数、状态及 `rawInput`，避免空更新、字段丢失和并发调用错配。

6. **模型与网关行为一致性**  
   OpenAI 兼容端点、DeepSeek 风格服务及 LiteLLM 网关在 reasoning effort 默认值上存在差异，跨后端统一配置语义需求突出。

7. **测试稳定性和环境隔离**  
   社区持续关注 master 分支红测、Provider 环境变量泄漏及嵌套运行测试时的污染问题。

8. **日志生命周期治理**  
   除文件数量外，日志管理开始关注字节上限、保留天数及长期磁盘占用控制。

## 开发者关注点

- **Token 成本已经成为首要产品痛点**：用户认可 harness 的能力，但认为当前消耗不可持续；后续优化应关注上下文压缩、工具结果裁剪、缓存与按需注入信息。
- **安全边界比功能扩展更受警惕**：模型工具能够读取 Provider 凭据的问题被视为高优先级风险，尤其在 bash 等高权限工具存在时。
- **Agent 会话恢复必须保持端到端上下文一致**：仅传递 session ID 不够，`JCODE_HOME`、runtime 目录、socket 等客户端状态也需可靠传递。
- **协议实现需要避免“看似成功、实际丢信息”**：ACP 空更新及 `rawInput` 错配会直接影响客户端 UI 和调用审计。
- **配置语义必须在不同 Provider 与网关之间保持一致**：尤其是 `reasoning_effort=none` 等看似简单的设置，不能依赖网关默认值。
- **测试需要在真实嵌套环境中保持隔离**：从 jcode 会话内部运行测试已暴露出环境继承导致的偶发失败。
- **维护者需要更稳健的失败降级**：如 `/improve` 的元数据持久化失败，不应导致整个会话退出。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-06

> 数据范围：GitHub `earendil-works/pi` 过去 24 小时更新  
> 说明：过去 24 小时无新版本发布。

## 1. 今日速览

今日社区重点集中在**长会话稳定性、模型/Provider 兼容性以及代码工具的数据安全**：macOS 长会话 CPU 飙高、扩展注册的默认模型偶发失效、上下文统计异常，以及 Windows 文件编码和子进程清理问题受到关注。代码侧同时推进了提示词缓存预热、文件编辑可靠性、MCP OAuth 修复及 durable/session 能力建设，显示社区正从“基本可用”转向规模化、自动化和生产环境适配。

---

## 3. 社区热点 Issues

### 1. macOS 长会话 CPU 占用可达 100% 以上
[#7730](https://github.com/earendil-works/pi/issues/7730)

长会话运行时 CPU 在约 50%–110% 间波动，内存约 600–800MB，且现象疑似与上下文长度相关。该问题获得 **30 条评论、12 个赞**，是今日热度最高的 Issue，直接影响长时编码与嵌入式 Agent 的可用性。

### 2. 扩展注册的 Provider 偶发不采用默认模型
[#8810](https://github.com/earendil-works/pi/issues/8810)

新会话在 Provider 由扩展通过 `pi.registerProvider()` 注册时，偶发忽略 `defaultProvider`/`defaultModel`，转而启动另一 Provider 的默认模型。问题已有 **10 条评论、5 个赞**，核心风险是配置不可预测，以及模型、计费和路由发生非预期切换。

### 3. Groq Qwen3.8 27B 因 `developer` role 返回 HTTP 400
[#10741](https://github.com/earendil-works/pi/issues/10741)

Pi 向 Groq 的 `qwen/qwen3.8-27b` 发送 `developer` 角色后，模型模板渲染失败并返回 400。该问题反映了 Pi 与不同模型厂商消息角色协议之间的兼容缺口，**7 条评论**表明开发者正在积极寻找兼容方案。

### 4. 网络重试后 `getContextUsage()` 严重高估上下文
[#10287](https://github.com/earendil-works/pi/issues/10287)

一次可重试的 WebSocket/fetch 错误后，统计值从约 42K token 跳到 **330,081 token**。错误上下文计量可能触发不必要的压缩、截断或高额调用，**7 条评论、2 个赞**显示问题受到重视。

### 5. npm 搜索未收录新发布的 Pi Package
[#7885](https://github.com/earendil-works/pi/issues/7885)

新发布的 `pi-affix-prompt` 即使带有 `pi-package` 关键字和 Pi manifest，也无法通过 npm 搜索发现，因而无法进入 pi.dev/packages gallery。该问题已有 **19 条评论**，直接影响扩展和包生态的冷启动与可发现性。

### 6. MCP OAuth 登录成功后持续卡在 “Connecting…”
[#11311](https://github.com/earendil-works/pi/issues/11311)

浏览器已经显示认证成功，但 Pi 仍等待 2–3 分钟，Ctrl+C 也无法取消。问题获得 **4 条评论**，对 MCP 服务接入和无人值守自动化尤其不友好；目前已有对应修复 PR。

### 7. Windows 下 `pi.exec` 无法执行 npm、npx、pnpm
[#10616](https://github.com/earendil-works/pi/issues/10616)

扩展调用 `pi.exec("npm", ["--version"])` 返回退出码 1 且 stdout 为空，而相同命令经 bash 工具可正常运行。该问题已有 **5 条评论**，暴露了扩展 API 与 Windows 命令解析行为之间的不一致。

### 8. 超过 50KB 的 bash 末行截断提示错误显示为 0B
[#10015](https://github.com/earendil-works/pi/issues/10015)

当超长输出行以换行符结束时，截断提示错误地报告该行大小为 `0B`。问题获得 **4 条评论、1 个赞**；它虽不影响命令执行本身，却会误导用户判断输出完整性和磁盘占用。

### 9. SDK 用户无法在保留默认提示词区块的同时定制身份
[#11317](https://github.com/earendil-works/pi/issues/11317)

当前替换完整 `systemPrompt` 会连同默认工具、规则和文档说明一起覆盖；社区希望仅通过 `systemPromptOptions.sections.preamble` 修改身份文本。该需求获 **3 条评论**，体现了 SDK 层更细粒度定制和 persona 配置的发展方向。

### 10. Prompt 模板参数吞掉撇号并合并单词
[#11861](https://github.com/earendil-works/pi/issues/11861)

模板中的单个撇号被误当作引号，导致其后的文本被合并。例如 `why doesn't the user's cache work` 会被错误处理为 `why doesnt the users cache work`。该问题今日创建并快速关闭，已有 **3 条评论**，属于高影响但易修复的命令解析缺陷。

### 其他值得关注

- Windows Bun SEA 虚拟路径泄漏到 subagent 首条消息：  
  [#11865](https://github.com/earendil-works/pi/issues/11865)
- Anthropic 缓存未命中诊断信息未写入保存的消息：  
  [#11866](https://github.com/earendil-works/pi/issues/11866)
- durable 模式在等待注册阶段发生会话失败时泄漏未处理拒绝：  
  [#11820](https://github.com/earendil-works/pi/issues/11820)
- 长时、工具密集型多模态 Agent 的上下文管理仍缺少官方范式：  
  [#11863](https://github.com/earendil-works/pi/issues/11863)

---

## 4. 重要 PR 进展

### 1. Windows 下终止 bash 命令的完整进程树
[#11854](https://github.com/earendil-works/pi/pull/11854)

现有 `taskkill /T` 依赖父子 PID 关系，无法终止父进程已经退出的后代进程。该 PR 改用更可靠的进程树清理方式，避免后台循环、sleep 等残留进程继续占用资源。

### 2. 编辑文件时保留未修改行的换行符
[#11751](https://github.com/earendil-works/pi/pull/11751)

修复 edit 工具重写整个文件时改变未修改行换行格式的问题，并尝试在生成 diff 前完成安全处理。大文件编辑时若 diff 阶段失败，也可避免“文件已写入但操作报错”的不一致状态。

### 3. 延迟解析流式工具参数
[#9461](https://github.com/earendil-works/pi/pull/9461)

不再在每个流式 delta 到达时重新解析完整工具调用 JSON，而是在实际读取 `.arguments` 时解析并缓存，减少长工具调用下的重复 CPU 开销。

### 4. tool search 与 codemode 摘要支持本地 `$ref`
[#11850](https://github.com/earendil-works/pi/pull/11850)

工具搜索现在可以解析 schema 中的本地引用，避免 MCP/Pydantic/FastAPI 风格的嵌套参数描述不可见，进而改善延迟加载工具的可发现性。

### 5. 为 p2 增加 Prompt Cache 预热
[#11857](https://github.com/earendil-works/pi/pull/11857)

针对 Anthropic 及 Radius 上 Claude 的 5 分钟提示词缓存，在长时间空闲后主动预热，避免下一次请求重写整个 prompt。提交者统计，10 月 12 日至 11 月 5 日期间该问题导致 **789 次额外重写、约 1,430 美元额外成本**，占 p2 总支出的 **26%**，成本优化价值突出。

### 6. 修复 MCP OAuth 回调服务器关闭后的连接残留
[#11855](https://github.com/earendil-works/pi/pull/11855)

OAuth 回调服务器关闭时会主动关闭残留连接，避免浏览器保持的空闲或预连接 socket 让 `/mcp login` 长时间停留在 “Connecting…”。对应 Issue 已关闭。

### 7. read/edit 支持 UTF-16 与非 UTF-8 文件
[#11811](https://github.com/earendil-works/pi/pull/11811)

新增共享编码处理层，使 `read` 能正确显示 UTF-16 文件，并避免 `edit` 在处理非 UTF-8 内容时静默破坏文件。对 Windows、国际化项目和遗留代码库尤其重要。

### 8. `/reload` 与会话切换时移除全部扩展 Overlay
[#11853](https://github.com/earendil-works/pi/pull/11853)

原有重置逻辑只隐藏栈顶 Overlay，多个扩展 Overlay 打开时会残留。该 PR 改为清理整个 Overlay 栈，避免扩展 UI 在 reload、fork 或会话切换后发生错乱。

### 9. 自定义 Overlay 可报告 blocked 状态
[#11851](https://github.com/earendil-works/pi/pull/11851)  
[#11848](https://github.com/earendil-works/pi/pull/11848)

让 `ctx.ui.custom()` Overlay 与内联组件一样支持 `blocked` 状态，扩展提问时可正确通过 OSC 7501 告知外部 Dashboard 智能体正在等待用户操作。

### 10. 修正 bash 超长末行的截断大小
[#11852](https://github.com/earendil-works/pi/pull/11852)

输出累加器同时保留最后一个有内容行的字节数，避免尾随换行重置计数器后把真实的 60KB 行报告为 `0B`。

### 其他值得跟踪

- durable/session 实验性复制同步：  
  [#11696](https://github.com/earendil-works/pi/pull/11696)
- Agent 重试加入 jitter，降低多 Subagent 并发重试的惊群效应：  
  [#11840](https://github.com/earendil-works/pi/pull/11840)
- TypeBox 额外类型兼容：  
  [#11833](https://github.com/earendil-works/pi/pull/11833)
- 增加 compaction model 与 thinking level 配置：  
  [#11255](https://github.com/earendil-works/pi/pull/11255)
- 修复单模型作用域下 Ctrl+P 无法切换：  
  [#11832](https://github.com/earendil-works/pi/pull/11832)

---

## 5. 功能需求趋势

### 1. 性能与上下文稳定性

长会话 CPU 占用、重试后的 token 误计数、流式参数重复解析等问题，指向同一需求：Pi 必须能稳定支撑长时间、工具密集型 Agent 会话。上下文统计、压缩策略和后台任务生命周期将成为核心体验指标。

相关 Issues：[#7730](https://github.com/earendil-works/pi/issues/7730)、[#10287](https://github.com/earendil-works/pi/issues/10287)

### 2. 多模型与多 Provider 兼容

Groq 角色协议差异、扩展 Provider 默认模型失效、Codex/Astra 上下文窗口说明不清，说明社区不仅需要“支持更多模型”，还需要 Pi 正确适配各厂商的角色、路由、上下文与缓存语义。

相关 Issues：[#8810](https://github.com/earendil-works/pi/issues/8810)、[#10741](https://github.com/earendil-works/pi/issues/10741)、[#11826](https://github.com/earendil-works/pi/issues/11826)

### 3. 扩展与 SDK 的精细化定制

开发者希望能够只修改身份前言、单独设置 compaction 模型与 thinking level，而不是替换整个 system prompt。扩展 API 正从“能调用”走向可控、可组合和可观测。

相关 Issues：[#11317](https://github.com/earendil-works/pi/issues/11317)、[#11311](https://github.com/earendil-works/pi/issues/11311)

### 4. Durable、Worker 与多设备会话能力

社区希望注入 daemon 进程以支持 Cloudflare Workers 等无 Node 运行时环境，并探索 session replication、等待状态与重启预算管理。这表明 Pi durable 正向服务端化、分布式和可恢复执行演进。

相关 Issues：[#10846](https://github.com/earendil-works/pi/issues/10846)、[#11846](https://github.com/earendil-works/pi/issues/11846)、[#11820](https://github.com/earendil-works/pi/issues/11820)

### 5. 包生态与 MCP 可发现性

npm 搜索收录、tool schema `$ref` 解析和 MCP OAuth 体验，都是“工具能否被智能体发现并可靠调用”的生态基础问题。包搜索与工具搜索正在成为 Pi 的关键分发层。

相关 Issues：[#7885](https://github.com/earendil-works/pi/issues/7885)、[#11803](https://github.com/earendil-works/pi/issues/11803)

### 6. 跨平台与文件操作可靠性

Windows `.cmd` 执行、Bun SEA 路径、UTF-16/非 UTF-8 文件、进程树清理等问题高度集中在 Windows。跨平台质量已成为扩展开发者和企业用户的实际采用门槛。

相关 Issues：[#10616](https://github.com/earendil-works/pi/issues/10616)、[#11865](https://github.com/earendil-works/pi/issues/11865)、[#11809](https://github.com/earendil-works/pi/issues/11809)

---

## 6. 开发者关注点

1. **长会话不能“越用越慢”**  
   开发者最担心 CPU 持续升高、token 统计失真和后台进程残留。性能问题已经从体验抱怨升级为阻碍生产使用的基础障碍。

2. **模型与路由行为必须可预测**  
   默认模型应稳定生效，不同厂商必须正确处理 `developer` role、上下文窗口和缓存策略。开发者尤其关注费用失控，例如 p2 的缓存未刷新曾造成显著额外成本。

3. **工具调用失败必须可恢复且不破坏数据**  
   文件编辑必须保留编码和换行，bash 输出提示必须准确，Windows 命令必须真正执行，后台进程必须被完整清理。开发者对“静默损坏”和“表面成功但状态错误”容忍度很低。

4. **扩展应具备稳定的生命周期和状态语义**  
   Overlay 清理、blocked 状态、OAuth 取消、扩展加载失败后的降级行为，都是扩展与宿主集成时的真实痛点。外部 Dashboard 和 Herdr 等集成尤其依赖这些信号准确无误。

5. **需要可嵌入、可扩展、可部署**  
   SDK 用户需要 persona 级定制；durable 用户希望运行于 Workers；多设备用户希望同步和恢复会话。Pi 的下一阶段竞争重点，很可能从终端 Agent 转向可嵌入的 Agent 基础设施。

6. **生态内容必须真正可发现**  
   npm 搜索和 `tool_search` 都存在“内容已经存在，但系统找不到”的断层。完善包索引、schema 引用解析和搜索缓存，将直接影响 Pi 扩展生态的规模效应。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
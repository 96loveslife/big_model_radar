# AI CLI 工具社区动态日报 2026-11-20

> 生成时间: 2026-11-20 06:39 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-20**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、jcode、pi；Kimi Code CLI 过去 24 小时无活动。**

> 说明：Issues、PR 数量按日报披露口径统计；部分工具仅提供“更新的 Issue/PR 数”，不代表仓库累计规模。未明确披露的 Release 记为“无新增版本”。

---

## 1. 生态全景

AI CLI 生态正在从“模型与工具能力竞赛”转向“工程可靠性与跨端一致性竞赛”：远程控制、权限审批、MCP 生命周期、会话恢复、额度计费及 Token 缓存成为共同主战场。与此同时，Windows、Wayland、WSL 和 Microsoft Store/MSIX 等非 Linux 环境成为问题最集中的平台，Desktop、CLI、移动端和 SDK 之间也频繁出现行为漂移。

模型迭代仍然激进，GPT-6.2、Gemini 4、Claude、Gemini 4 Hydrogen 等新能力快速进入产品，但模型目录、OAuth 权限、工具 schema、thinking 参数和缓存前缀之间的适配经常滞后。下一阶段的竞争焦点不再只是“谁接入的模型更多”，而是**谁能让 Agent 长时间运行、可恢复、可审计，并提供可信的成本数据**。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 10 条热点 Issue | 1 条更新 PR | **v2.1.329** | 中高；Remote Control、权限及跨平台问题集中 |
| **OpenAI Codex** | 10 条热点 Issue | 10 条重点 PR | **4 个版本**：v0.171.0、v0.172.0-alpha.2、v0.173.0-alpha.1、v0.171.0-alpha.13.1 | **高**；新模型与桌面端并发更新明显 |
| **Gemini CLI** | 10 条热点 Issue | 10 条重点 PR | **3 个版本**：v0.70.0、v0.71.0-preview.0、nightly | **高**；功能与可靠性同步推进 |
| **GitHub Copilot CLI** | **40 个更新 Issue** | 1 条更新 PR | v1.0.115-1、v1.0.115-0 | **高**；Issue 面广，但 PR 披露较少 |
| **OpenCode** | 10 条热点 Issue | 10 条重点 PR | 无新版本 | **高**；无发布日仍保持密集开发 |
| **jcode** | **16 个更新 Issue** | **20 个更新 PR** | Linux 预发布版 | **很高**；多代理编排与 provider 调度迭代最快 |
| **pi** | 10 条热点 Issue | 10 条重点 PR | 无新版本 | **高**；跨平台、缓存和 Provider 适配修复密集 |
| **Kimi Code CLI** | 0 | 0 | 无 | **低/静默**；当日无法判断其产品方向 |

### 活跃度解读

- **jcode** 的 Issue/PR 比最积极，且多数 Issue 当日已有对应 PR，体现出较强的闭环修复能力。
- **OpenAI Codex、Gemini CLI、OpenCode、pi** 均形成“10 条热点 Issue + 10 条重点 PR”的高密度迭代节奏。
- **GitHub Copilot CLI** 披露了 40 个更新 Issue，是当日 Issue 活动面最广的工具之一，但日报只列出一个 PR，需谨慎区分“问题发现量”与“公开修复量”。
- **Claude Code** 发布节奏稳定，但近期更新更偏 Remote Control、会话恢复、Hooks 和权限一致性。
- **Kimi Code CLI** 当日无活动，暂不足以判断是维护放缓、数据覆盖不足还是短期静默。

---

## 3. 共同关注的功能方向

### 3.1 远程控制与跨端会话连续性

几乎所有具备多端能力的工具都在强化远程执行：

- **Claude Code**：Remote Control 会话持久化、应用重启后恢复、移动端状态同步、远程审批提示。
- **OpenAI Codex**：Relay 已连接但手机和 Windows 客户端不可访问；Windows 云端会话恢复失败。
- **GitHub Copilot CLI**：Copilot Free 远程访问被账户策略阻止。
- **OpenCode**：Noise 加密握手、机器密钥、服务器地址及跨机器代理连接。
- **jcode**：服务重启后的 headless swarm worker 恢复。

**共同诉求**：远程控制不能只是“连接成功”，还必须做到会话可恢复、状态同步、权限可见，以及执行环境判断准确。

### 3.2 MCP、工具与扩展生命周期管理

MCP 已从协议接入问题进入生产级生命周期阶段：

- **Claude Code**：Desktop 未按配置延迟加载 MCP 工具，造成上下文和 Token 浪费。
- **OpenAI Codex**：Windows MCP 进程堆积；PR 持续优化 Executor 发现、缓存和工具清单复用。
- **Gemini CLI**：工具过多触发 HTTP 400；MCP 服务级信任会静默信任未来新增工具。
- **GitHub Copilot CLI**：MCP OAuth 静默刷新、非第一方服务登录、Windows worker 残留。
- **OpenCode**：插件工具缺少超时，Git 插件生命周期脚本执行失败。
- **jcode**：陈旧 MCP server 与子进程回收问题。

**共同诉求**：工具应按需加载、具备超时和可回收进程树、认证可静默刷新，并将授权粒度从“服务级”下沉到“工具级”。

### 3.3 权限、审批与安全边界

- **Claude Code**：Fork PR 不应自动触发 `@claude`；Code Mode 暴露了无权限写工具；远程浏览器审批不可见。
- **OpenAI Codex**：Windows 选择 “Ask for approval” 后运行时仍禁止发起审批。
- **Gemini CLI**：推进 OS 沙箱、风险路由、限制破坏性 Git 命令，并修复 YOLO 模式被风险检查意外打断。
- **GitHub Copilot CLI**：单次请求反复授权造成“授权疲劳”。
- **OpenCode**：Windows PowerShell 路径跳过权限确认。

**共同诉求**：审批既不能绕过，也不能通过多次弹窗或不可见提示拖死流程；安全策略必须在 CLI、Desktop、Remote 和 SDK 中保持一致。

### 3.4 计费、额度与 Token 成本透明化

- **OpenAI Codex**：额度消耗异常和统计不一致的汇总 Issue 达 **94 条评论**，另有 Astra 未完整进入用量拆分的问题。
- **OpenCode**：免费额度异常统一 Issue 达 **393 条评论**，为全部材料中最高。
- **Claude Code**：MCP schema 过早加载、仓库重复读取造成 cache-read token 激增。
- **GitHub Copilot CLI**：PDF 被按编码大小估算为约 **620k token**，实际输入约 **31k token**，导致过早压缩。
- **pi**：GPT-6.2 缓存复用下降，每轮多消耗约 **8.8k** 未缓存输入 token；缓存用量统计也存在归零问题。

**共同诉求**：用户需要看到模型、任务、Token、缓存命中和额度扣减之间的可核对映射，而不是笼统的“额度已用尽”或“上下文已压缩”。

### 3.5 会话、上下文与子 Agent 状态管理

- **Claude Code**：Code Mode 权限元数据与工具暴露不同步；Agent SDK 事件类型异常。
- **OpenAI Codex**：Pin 内容、线程保留、子 Agent 继承和历史可见性需要独立策略。
- **Gemini CLI**：子 Agent 达到 `MAX_TURNS` 仍报告成功，Generalist Agent 经常挂起。
- **OpenCode**：Claude Agent 丢失 system 消息，Prompt Cache 命中率下降。
- **jcode**：Swarm worker 停止输出但任务未完成时，仍被自动标记为 done。
- **pi**：恢复会话时 npm 扩展工具没有被恢复。

**共同诉求**：“已结束”“已成功”“已恢复”必须是可信的运行状态，不能仅依据进程退出、输出停止或 UI 状态推断。

### 3.6 Windows 与跨平台一致性

- **Claude Code**：Windows 文件上传、OAuth、MCP 加载及潜在 BSOD 风险。
- **OpenAI Codex**：安装器破坏 AppData ACL、沙箱、MCP、云会话和浏览器接入问题集中。
- **Gemini CLI**：Windows 路径展开、PowerShell 异步解析；Wayland 下 Browser Agent 失败。
- **GitHub Copilot CLI**：Windows worker 残留、WSL 浏览器登录及 State mismatch。
- **OpenCode**：PowerShell Store/MSIX、权限流程及 Snap 安装器问题。
- **jcode**：Windows Cargo 构建被 POSIX wrapper 阻断。
- **pi**：Windows Git Bash 长 RPC 命令静默截断，并出现错误的成功退出码。

**共同诉求**：Windows 已成为事实上的首要兼容性战场，CLI、桌面端和扩展不能再依赖 Unix 假设。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与生态定位 |
|---|---|---|---|
| **Claude Code** | 终端编码、Desktop、Remote Control、Hooks、MCP、Agent SDK | Anthropic 生态用户、远程开发及插件扩展者 | 以 Claude 模型和 Claude Desktop 为中心，强调本地/远程协同、Hooks 可审计性与企业扩展接入 |
| **OpenAI Codex** | GPT-6.2、TUI 工作区、浏览器/计算机控制、云会话、远程执行 | 大规模 OpenAI 订阅用户、桌面端重度用户、远程/Windows 用户 | 桌面、CLI、云端和执行器一体化；Executor Discovery、App 协议及分析接口显示其平台化倾向 |
| **Gemini CLI** | 多模型 Agent、Skills、子代理、Browser Agent、OS 沙箱 | Gemini 开发者、Agent 编程与自动化实验用户 | 强调可配置策略、Skills/子代理生态、零依赖沙箱与 AST 感知上下文优化 |
| **GitHub Copilot CLI** | MCP、扩展市场、IDE/Harness、远程访问、GitHub 工作流 | GitHub 生态开发者及 Copilot 订阅用户 | 深度依赖 GitHub 账户、IDE 与托管扩展体系，重点解决认证、渐进加载和权限体验 |
| **OpenCode** | 多 Provider、Desktop 浏览器、插件、会话检索、远程服务器 | 希望摆脱单一模型锁定、需要多 Provider 的用户 | 开放 Provider 路线突出；浏览器工作台、SQLite FTS、插件生态和 Noise 协议构成差异化 |
| **jcode** | Swarm 多代理、Provider 账户池、后台任务、语音输入 | 重度终端用户、Agent 编排实验者、Provider 路由需求用户 | 更偏底层编排基础设施：事件驱动 Swarm、账户解析、整轮超时、后台 worker 恢复 |
| **pi** | 轻量终端、多 Provider、扩展 API、缓存与模型控制 | 注重模型可切换性、扩展机制和成本控制的个人开发者 | 强调 provider 适配、提示缓存、工具 schema 和终端原生体验，技术颗粒度较细 |
| **Kimi Code CLI** | 当日信息不足 | 暂无法判断 | 缺乏当日社区与发布信号，暂不宜与其他工具做成熟度定论 |

### 定位差异总结

- **平台化最强**：OpenAI Codex，Desktop、云会话、执行器与远程控制均被纳入统一产品路线。
- **远程与扩展生态最突出**：Claude Code，重点解决 Remote Control、Hooks、SDK 和多入口权限一致性。
- **开放模型与插件路线最明显**：OpenCode，多 Provider 与浏览器工作台是主要差异点。
- **多代理编排最激进**：jcode，Swarm 已有完成事件、验收、恢复和账户池等工程化设计。
- **成本与扩展控制最细**：pi，重点围绕缓存前缀、模型目录、strict schema 和扩展事务语义。
- **安全策略实验最活跃**：Gemini CLI，OS 沙箱、YOLO 语义和工具级信任均处于快速推进阶段。
- **GitHub 工作流绑定最深**：GitHub Copilot CLI，其成败很大程度取决于 Copilot 账户策略、MCP 和扩展市场成熟度。

---

## 5. 社区热度与成熟度

### 第一梯队：高热度、高工程密度

1. **OpenCode**
   - 免费额度统一 Issue 达 **393 条评论**，为材料中最高。
   - 无版本发布日仍有 10 条重点 PR，说明开发并未依赖发布节奏。
   - 但额度透明度、Windows 兼容性和会话归属问题表明其仍处于快速扩张期。

2. **OpenAI Codex**
   - 额度追踪 Issue 达 **94 条评论**；Windows Computer Use 问题达 **70 条评论**。
   - 一天发布 4 个版本、披露 10 条重点 PR，产品与工程迭代都处于高位。
   - 新模型能力快速，但 Desktop、Windows、Browser Use 和计量系统存在明显集成债务。

3. **GitHub Copilot CLI**
   - 过去 24 小时更新 **40 个 Issue**，覆盖面从 OAuth 到扩展加载、模型状态和附件计量。
   - 发布持续，但 PR 披露少；更像一个功能面快速扩张、正系统性补工程债的成熟产品。

### 第二梯队：稳定演进或快速收敛

4. **Claude Code**
   - 固定版本节奏稳定，热点围绕 Remote Control、Desktop、Hooks 和权限。
   - 产品成熟度较高，但多端状态一致性和 Windows 体验尚未完全收敛。

5. **Gemini CLI**
   - 一天 3 个版本、10 条重点 PR，功能推进快。
   - Agent 终止语义、Browser Agent 兼容性和工具规模治理说明其正处于“能力上线后补可靠性”的阶段。

6. **pi**
   - 多数核心问题已有对应 PR，响应和收敛速度较好。
   - 仍受 Windows、Provider 能力漂移和缓存统计影响，成熟度中等偏上。

7. **jcode**
   - **16 个 Issue、20 个 PR**，Issue 与修复高度配对。
   - 迭代非常快，但大量功能仍偏实验性，例如账户池、Noise 握手和 swarm 验收机制。

### 静默或数据不足

- **Kimi Code CLI**：过去 24 小时无活动，无法据此判断整体社区规模、成熟度或战略变化。

---

## 6. 值得关注的趋势信号

### 趋势一：Agent 工具链正从“功能可用”进入“生命周期治理”

多个工具同时补齐超时、重试上限、进程回收、认证刷新、缓存失效和后台恢复。这表明 AI CLI 的核心竞争力将越来越取决于：

- 卡住后能否恢复；
- 子进程能否回收；
- 凭据能否自动续期；
- 失败是否准确上报；
- 重试是否受控，避免重复计费。

### 趋势二：上下文成本将成为产品级指标，而不只是内部优化

工具 schema 延迟加载、AST 精准读取、Pin 内容、Prompt Cache 前缀、PDF Token 估算和 cache-read 统计被同时强调。未来竞争不仅看模型单价，还要看：

> 每个成功任务实际消耗多少 Token、缓存了多少上下文、触发了多少额外模型调用。

这会推动 CLI 提供更细粒度的任务级成本面板和缓存诊断。

### 趋势三：多端产品化暴露“状态一致性债务”

Desktop、CLI、移动端、Remote、SDK 和 IDE Host 共享同一套能力时，最困难的不是增加入口，而是保证：

- 当前模型一致；
- 权限请求可见；
- 会话可恢复；
- 草稿与历史不丢失；
- 本地和远程环境标识准确。

这一趋势会推动统一会话协议、统一审批通道和可观测的设备状态模型。

### 趋势四：MCP 安全边界需要从“服务信任”升级为“工具与参数治理”

Gemini CLI 暴露了服务级信任自动覆盖未来新增工具的问题；Claude Code 暴露了 Code Mode 暴露越权工具的问题。后续重点将是：

- 工具级授权；
- 参数级策略；
- 工具来源和 Hooks 声明可审计；
- 新增工具重新确认；
- 远程环境继承最小权限。

### 趋势五：Windows 正成为独立产品战场

Windows 问题不再只是“小兼容 Bug”，而涉及安装器 ACL、PowerShell/MSIX、审批语义、MCP 进程、浏览器扩展、终端协议和云会话恢复。开发团队应建立至少四层 Windows 回归矩阵：

1. 安装与卸载；
2. Shell 与审批；
3. MCP/扩展生命周期；
4. Desktop/Remote 会话恢复。

### 趋势六：Swarm 从并发调用升级为事务式任务编排

jcode 的验收检查、todo 状态、完成事件和 worker 恢复最清晰地体现了下一阶段要求：

> 子 Agent 停止输出不等于任务完成；真正完成应由结构化状态、产物和验收条件共同证明。

未来多代理产品需要类似数据库事务的完成语义和补偿机制，以避免错误下游提前执行。

### 趋势七：新模型发布将持续制造“可见但不可用”的能力漂移

GPT-6.2、Gemini 4 等模型加入目录后，缓存前缀、thinking 参数、OAuth scope、工具 schema 和用量分类却未必同步更新。Provider 适配层需要从静态映射转向：

- 能力探测；
- 版本化模型元数据；
- 自动契约测试；
- 缓存与参数兼容检查；
- 发布后的端到端验证。

---

## 决策建议

### 对企业技术决策者

优先选择具备**明确权限边界、可审计工具来源、可验证额度统计和稳定恢复机制**的方案，而不是仅按模型数量决策。建议在 PoC 中强制测试：

- 凭据刷新与轮换；
- 远程审批可见性；
- 会话恢复完整性；
- 工具超时和进程回收；
- Windows 与非 Linux 环境；
- 实际 Token、缓存及模型费用拆分。

### 对开发者与平台团队

近期最值得跟踪的工程方向是：

1. MCP 工具按需加载与工具级授权；
2. Provider 整轮超时、重试上限及进程树清理；
3. 子 Agent 的真实完成语义；
4. Prompt Cache 保留与上下文计量；
5. Desktop/CLI/Remote 的统一状态协议；
6. Windows Shell、浏览器及安装器回归。

**总体判断：** 当前 AI CLI 已进入“可靠性密集工程期”。领先项目不再主要依靠新模型或新入口拉开差距，而是依靠**执行可恢复、状态可信、权限一致、成本透明和跨平台确定性**建立长期优势。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：截至 2026-11-20。  
> 注意：PR 列表中的 `评论: undefined` 表示抓取结果未提供评论数，因此以下“热度”主要依据 PR 状态、关联 Issue 的讨论量、问题覆盖面与更新时间综合判断，而非直接评论数排名。

## 1. 热门 Skills 排行

### 1. `mcp-builder`
**功能**：帮助 Claude Code 构建 MCP 服务，包括连接配置、HTTP 客户端与自定义请求头。  
**社区热点**：
- 修复 MCP Python SDK 2.x 的破坏性变更：`streamablehttp_client` 更名为 `streamable_http_client`。
- 兼容通过 `create_mcp_http_client` / `http_client` 传递自定义 HTTP headers。
- 直接关联高热度 Issue [#1668](https://github.com/anthropics/skills/issues/1668)。
- 体现 MCP 生态升级中“文档过时、依赖 API 漂移”所带来的实际落地问题。

**当前状态**：Open  
**PR**：[anthropics/skills#1742](https://github.com/anthropics/skills/pull/1742)

---

### 2. `skill-creator`
**功能**：创建、评估、优化和打包 Claude Code Skills。  
**社区热点**：
- Trigger evaluation 出现系统性误判，`claude -p` 下触发率甚至可能为 0%。
- 多 worker 并行时发生 UUID 串扰，导致假阴性。
- Windows 管道处理、子进程探测和运行时错误识别存在问题。
- YAML frontmatter 解析不完全符合标准语义。
- 脚本直接执行时导入路径失败，使用文档也与实际命令不一致。

**当前状态**：多个修复 PR 仍 Open  
**PR**：
- [#1298](https://github.com/anthropics/skills/pull/1298)：隔离 trigger evals，修复 Windows 和运行时失败
- [#1352 对应 Issue](https://github.com/anthropics/skills/issues/1352)：多 worker 串扰
- [#556 对应 Issue](https://github.com/anthropics/skills/issues/556)：触发率为 0%
- [#1681](https://github.com/anthropics/skills/pull/1681)：修复直接执行和路径说明
- [#1997](https://github.com/anthropics/skills/pull/1997)：修复 YAML frontmatter 解析

---

### 3. `webapp-testing`
**功能**：启动 Web 应用，并通过浏览器自动化、元素发现和交互操作完成端到端测试。  
**社区热点**：
- `with_server.py` 使用 `shell=True` 执行服务命令，存在命令注入风险。
- `textarea`、`select` 等元素被错误识别为文本输入。
- 同一批 PR 中还涉及算法图形边界处理和 PPTX 参数校验，显示 Web 测试 Skill 正进入稳定化和安全加固阶段。

**当前状态**：Open  
**PR**：
- [#1980](https://github.com/anthropics/skills/pull/1980)：移除 `shell=True`
- [#1976](https://github.com/anthropics/skills/pull/1976)：修复 textarea 和 select 的元素报告

---

### 4. `docx`
**功能**：创建、编辑、接受修订及检查 Word 文档。  
**社区热点**：
- LibreOffice 超时曾被误报为成功，修复后必须检查输出文件是否仍含修订标记。
- 检测孤立批注等文档质量问题。
- `merge_runs.py` 合并 run 时可能丢失命名空间声明并生成无效 XML。
- 社区期待从“能生成文档”升级到“可验证、可交付文档”。

**当前状态**：Open  
**PR**：
- [#1792](https://github.com/anthropics/skills/pull/1792)：超时报错并验证修订是否真正接受
- [#1734](https://github.com/anthropics/skills/pull/1734)：检测孤立 docx 批注

---

### 5. `xlsx`
**功能**：处理 Excel 工作簿、公式、外部引用及重算风险。  
**社区热点**：
- 修复 `external_links_at_risk` 漏检 worksheet-scoped defined names 和别名的问题。
- 原实现只检查 workbook 级名称且采用直接正则匹配，容易产生假阴性。
- 重点不只是生成表格，而是识别潜在外部数据依赖和审计风险。

**当前状态**：Open  
**PR**：[anthropics/skills#2019](https://github.com/anthropics/skills/pull/2019)  
**关联 Issue**：[anthropics/skills#2013](https://github.com/anthropics/skills/issues/2013)

---

### 6. `claude-api`
**功能**：提供 Claude API、Tool Use、Agent SDK 和模型使用指导。  
**社区热点**：
- Python SDK 1.1.0 已支持自动恢复 `pause_turn`，旧文档仍建议通过外层循环重启 runner。
- 修复 academy guide 和 Tool Use 文档中的失效链接。
- 被反馈一次工具调用可能主动注入约 156k tokens，存在耗尽上下文的风险。
- 需求集中于版本同步、按需加载和文档可靠性。

**当前状态**：Open  
**PR**：
- [#1950](https://github.com/anthropics/skills/pull/1950)：更新 `pause_turn` 指南
- [#1730](https://github.com/anthropics/skills/pull/1730)：替换失效链接

**关联 Issue**：[anthropics/skills#1487](https://github.com/anthropics/skills/issues/1487)

---

### 7. `notion-spec-to-implementation` / `quantitative-resume-auditor`
**功能**：
- 将 Notion 产品或技术规格拆解为可执行任务、验收标准和进度跟踪。
- 对量化简历进行审计和优化。

**社区热点**：
- 反映出社区开始从单点生成型 Skill，转向“输入规格 → 任务拆解 → 实现 → 验收”的闭环工作流。
- 同时也出现垂直行业审计 Skill 的贡献模式。

**当前状态**：Open  
**PR**：[anthropics/skills#1245](https://github.com/anthropics/skills/pull/1245)

---

### 8. `document-typography`
**功能**：检查 AI 生成文档中的孤行、寡行、标题孤置和编号错位等排版问题。  
**社区热点**：
- 关注的是文档“生成后质量控制”，而非单纯排版美化。
- 针对所有文档类 Skill 共有的低频但高可见度缺陷。
- 与 `docx`、`pptx` 的验证型修复共同构成文档 Skills 的质量保障方向。

**当前状态**：Open  
**PR**：[anthropics/skills#514](https://github.com/anthropics/skills/pull/514)

---

## 2. 社区需求趋势

### 1. 企业级共享与统一分发
社区希望 Skills 能像组织级资产一样共享，而不是通过 Slack 发送 `.skill` 文件并手工上传。

**代表 Issue**：[anthropics/skills#228](https://github.com/anthropics/skills/issues/228)  
**建议方向**：组织级 Skill Library、权限控制、版本管理、分享链接及审计日志。

---

### 2. Agent 记忆与长期上下文管理
`compact-memory` 提议使用紧凑符号系统保存长期 Agent 状态，以减少散文式 memory 对上下文的消耗。

**代表 Issue**：[anthropics/skills#1329](https://github.com/anthropics/skills/issues/1329)  
**建议方向**：结构化记忆、上下文压缩、记忆检索与过期策略。

---

### 3. 推理质量门禁与交付验证
社区期待在任务开始、产出审查和最终交付三个阶段设置质量闸门，覆盖校准、对抗式复核及结果验证。

**代表 Issue**：[anthropics/skills#1385](https://github.com/anthropics/skills/issues/1385)  
**建议方向**：任务前校准、中期对抗审查、交付前自动验收。

---

### 4. Agent 治理、安全与信任边界
相关提案涵盖策略执行、威胁检测、信任评分和审计轨迹。同时，冒充 `anthropic/` 命名空间的社区 Skill 构成明显的信任边界风险。

**代表 Issue**：
- [anthropics/skills#492](https://github.com/anthropics/skills/issues/492)
- [anthropics/skills#412](https://github.com/anthropics/skills/issues/412)

**建议方向**：官方来源认证、命名空间隔离、安装前扫描、权限声明、签名和审计记录。

---

### 5. 自动测试与端到端验证
`webapp-testing` 的修复表明，测试类 Skill 的重点正在转向：
- 避免命令注入；
- 准确识别页面元素；
- 验证测试环境真的启动成功；
- 用可观察状态而非仅看进程退出码判断结果。

**代表 PR**：[anthropics/skills#1980](https://github.com/anthropics/skills/pull/1980)

---

### 6. 文档生成后的专业质检
社区需求从 DOCX/XLSX/PPTX“生成”扩展到：
- 修订是否真正接受；
- XML 是否有效；
- 外部公式链接是否遗漏；
- 排版是否存在孤行、寡行和编号错位；
- 输出文件是否经过独立验证。

**代表 Issue/PR**：
- [anthropics/skills#2018](https://github.com/anthropics/skills/issues/2018)
- [anthropics/skills#1868](https://github.com/anthropics/skills/issues/1868)
- [anthropics/skills#1792](https://github.com/anthropics/skills/pull/1792)

---

### 7. 垂直领域与专业工作流
社区贡献正扩展至智能合约、Notion 规格管理、量化简历、HPC 和多媒体生成等场景。

**代表 PR**：
- [proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771)
- [Notion/简历审计 #1245](https://github.com/anthropics/skills/pull/1245)
- [scnet-hpc #1615](https://github.com/anthropics/skills/pull/1615)
- [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)

---

## 3. 高潜力待合并 Skills

| Skill / PR | 潜力判断 |
|---|---|
| [`mcp-builder` #1742](https://github.com/anthropics/skills/pull/1742) | 直接修复 MCP SDK 2.x 升级造成的兼容问题，关联已有 Issue，实用性和落地确定性较高。 |
| [`skill-creator` 评估修复 #1298](https://github.com/anthropics/skills/pull/1298) | 修复影响 Trigger 指标可信度的基础设施问题，同时覆盖 Windows、并发和运行时错误，社区影响面大。 |
| [`skill-creator` YAML 修复 #1997](https://github.com/anthropics/skills/pull/1997) | 修复元数据解析与标准 YAML 语义不一致的问题，是 Skill 触发和评估可靠性的基础修复。 |
| [`skill-creator` 打包脚本 #1681](https://github.com/anthropics/skills/pull/1681) | 解决直接执行失败及文档路径过时，改动明确、易测试，适合快速合入。 |
| [`webapp-testing` 安全修复 #1980](https://github.com/anthropics/skills/pull/1980) | 消除 `shell=True` 带来的命令注入风险，安全价值高且修改范围集中。 |
| [`docx` 验收修复 #1792](https://github.com/anthropics/skills/pull/1792) | 将“超时”从假成功改为明确错误，并验证修订标记，显著提高文档任务结果可信度。 |
| [`xlsx` 外部链接修复 #2019](https://github.com/anthropics/skills/pull/2019) | 补齐 worksheet-scope names 和别名导致的漏检，解决真实审计场景中的假阴性。 |
| [`claude-api` 文档同步 #1950](https://github.com/anthropics/skills/pull/1950) | 与当前 Python SDK 行为对齐，避免用户继续采用已经过时的 runner 重启模式。 |

> 由于 PR 评论数未被抓取，以上是按“问题明确度、关联 Issue 热度、影响范围、安全收益和落地难度”评估的潜力排序，并非官方合并概率。

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Skills 从“单次提示词工作流”升级为可发现、可共享、可触发、可验证且具有明确信任边界的企业级 Agent 能力。**

这一诉求具体表现为四条主线：

1. **组织级分发与权限管理**；
2. **可靠的触发评估与版本同步**；
3. **测试、文档及交付结果的可验证性**；
4. **官方来源识别、安装安全与长期上下文管理**。

换言之，社区已经不满足于“Claude 能调用这个 Skill”，而更关心“这个 Skill 能否稳定触发、产生正确结果，并能在团队和企业环境中安全复用”。

---

# Claude Code 社区动态日报｜2026-11-20

## 今日速览

- **v2.1.329 发布**：新增 Hooks 来源提示和托管设置加载失败警告，并扩展了会话任务、`/loop` 唤醒、目标等能力的支持范围。
- **社区焦点集中在 Desktop 与 Remote Control**：远程会话文件上传、会话持久化、权限提示、移动端状态同步等问题持续获得讨论。
- **工程可靠性仍是主要诉求**：OAuth 刷新、Code Mode、MCP 延迟加载、Agent SDK 事件输出以及 Windows/macOS 平台差异构成当天主要问题池。

---

## 版本发布

### v2.1.329

主要变化：

- 新增信任对话框，提示文件夹的 Hooks 声明位置。
- 在 Claude Desktop 及其他非交互式宿主中，当托管设置里的 Hooks 加载失败时，会在会话中显示警告。
- 扩展对本会话计划任务、`/loop` 唤醒、目标及相关会话能力的支持。

[Release v2.1.329](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

---

## 社区热点 Issues

> 以下按技术影响、讨论热度及可复现性选取 10 条。

### 1. Windows Cowork 远程会话无法上传大文件

**#110676｜12 条评论**

Windows Cowork 的 `device_stage_files` 在上传约 4 MB 以上文件时返回“upload failed”，随后即便上传 47 KB 文件也会出现 HTTP 503。该问题直接影响远程开发环境中的文件传输，是当天评论最多的线程。

[查看 Issue #110676](https://github.com/anthropics/claude-code/issues/110676)

### 2. Advisor 工具触发 `server_tool_use` API 错误

**#64158｜12 条评论、16 个赞**

调用 advisor tool 时，Claude Code 可能崩溃或停止，并报告 `Unsupported content type: server_tool_use`。该问题同时影响 CLI、VS Code 与相关核心流程，对插件和 Agent SDK 使用者尤其重要。

[查看 Issue #64158](https://github.com/anthropics/claude-code/issues/64158)

### 3. macOS 26 每次启动都重复请求应用数据访问权限

**#83841｜8 条评论、12 个赞**

Claude Desktop 在 macOS 26 上每次启动 Claude Code 都会重新弹出“访问其他应用数据”的授权提示，且授权状态无法正常清除。这会显著干扰自动化和频繁启动场景。

[查看 Issue #83841](https://github.com/anthropics/claude-code/issues/83841)

### 4. Windows 下 `claude.exe` 上下文可复现蓝屏

**#92779｜8 条评论**

报告称 `bindflt.sys` 中的 `STOP 0x50` 蓝屏可复现，并且总发生在 `claude.exe` 上下文中。虽然 Issue 标记为 invalid，但潜在的系统级影响值得持续关注，尤其需要排除文件过滤驱动与 Claude Code 安装组件之间的冲突。

[查看 Issue #92779](https://github.com/anthropics/claude-code/issues/92779)

### 5. 短生命周期子命令可能在 OAuth 刷新过程中丢失新令牌

**#102265｜7 条评论**

`claude plugin validate` 等短生命周期命令可能在 OAuth refresh 中途退出，导致轮换后的 refresh token 未被保存；下一次启动随即出现 `invalid_grant`，用户登录状态被清空。其影响范围不限于插件校验，也适用于任何刷新期间退出的 CLI 命令。

[查看 Issue #102265](https://github.com/anthropics/claude-code/issues/102265)

### 6. Remote Control 错误注入云端容器系统提示

**#100759｜4 条评论、4 个赞**

在本机执行的 Remote Control 会话被错误地附加“隔离、临时容器”系统提示。这可能导致模型误解执行环境，影响本地文件、网络和工具权限判断，属于远程功能中的上下文隔离问题。

[查看 Issue #100759](https://github.com/anthropics/claude-code/issues/100759)

### 7. Remote Control 无法跨应用重启或会话驱逐存活

**#98504｜3 条评论、3 个赞**

macOS Desktop 中开启 Remote Control 后，本地会话可能因应用重启、会话驱逐或自动更新而消失，用户无法从移动端恢复原会话。它反映了 Remote Control 当前在桌面端持久化与恢复机制上的不足。

[查看 Issue #98504](https://github.com/anthropics/claude-code/issues/98504)

### 8. Desktop App 未按配置延迟加载 MCP 工具

**#111283｜2 条评论**

Windows Desktop App 即使配置 `ENABLE_TOOL_SEARCH=true`，仍会在会话启动时载入全部 MCP 工具 schema；CLI 则能按需加载。该差异会额外占用上下文并增加 Token 成本，也让两端的工具行为表现不一致。

[查看 Issue #111283](https://github.com/anthropics/claude-code/issues/111283)

### 9. Code Mode 拒绝向无写权限子代理暴露写工具

**#110715｜1 条评论**

Code Mode 生成的 REPL 脚本 API 仍会向未授予 `Write`、`Edit` 权限的子代理提供 `write()` 和 `edit()`，调用时才抛出错误。这暴露了权限元数据与脚本 API 能力暴露之间缺乏同步。

[查看 Issue #110715](https://github.com/anthropics/claude-code/issues/110715)

### 10. Desktop 在 Remote Control 下无法完成浏览器权限确认

**#111306｜0 条评论**

浏览器工具启动开发服务器后等待授权，但权限提示只显示在 macOS Desktop 本地界面，不会同步到 Remote Control 会话，导致远程操作持续挂起。该问题直接暴露了本地审批界面与远程控制通道之间的设计缺口。

[查看 Issue #111306](https://github.com/anthropics/claude-code/issues/111306)

---

## 重要 PR 进展

过去24小时仅检测到 **1 条更新的 Pull Request**，因此无法列出10条独立的重要 PR。

### 1. 禁止在 Fork PR 中执行 `@claude` 提及

**#111198｜OPEN**

该 PR 旨在避免在来自 Fork 的 Pull Request 中自动运行 `@claude` 提及处理。其安全意义在于：Fork PR 通常来自不受信任的外部贡献者，不应自动触发 Agent、评论回复或自动化工作流。修改直接关联 Claude Code GitHub 集成中的供应链与权限边界。

[查看 PR #111198](https://github.com/anthropics/claude-code/pull/111198)

---

## 功能需求趋势

### 1. Remote Control 的稳定性与会话连续性

社区最关注 Remote Control 在以下场景中的行为：

- Desktop 应用重启后恢复会话；
- 自动更新或会话驱逐后保留状态；
- 移动端与桌面端保持标题、归档状态一致；
- 远程会话继承完整历史，而非仅保留最近片段；
- 正确区分本地执行环境与云端容器环境。

相关 Issues：[#98504](https://github.com/anthropics/claude-code/issues/98504)、[#105087](https://github.com/anthropics/claude-code/issues/105087)、[#107891](https://github.com/anthropics/claude-code/issues/107891)、[#110477](https://github.com/anthropics/claude-code/issues/110477)、[#100759](https://github.com/anthropics/claude-code/issues/100759)

### 2. 远程权限审批与本地/远程 UI 一致性

远程会话中的浏览器启动、系统文件操作或敏感命令可能等待本地审批，但提示没有同步到远程设备。社区需要：

- 审批请求可靠转发到所有控制端；
- 本地与远程端采用一致的安全策略；
- 明确显示请求来源、命令内容和风险范围。

相关 Issues：[#111306](https://github.com/anthropics/claude-code/issues/111306)、[#105507](https://github.com/anthropics/claude-code/issues/105507)

### 3. Code Mode 的权限控制与开发体验

Code Mode 近期问题集中在：

- 工具暴露应严格遵循 Agent 权限；
- REPL 脚本失败后的变量作用域和错误状态应一致；
- 后台 Agent 返回值应减少不必要的大对象与完整 prompt；
- `claude plugin eval` 应支持逐用例启用或禁用 advisor，以支持 A/B 测试。

相关 Issues：[#110715](https://github.com/anthropics/claude-code/issues/110715)、[#110716](https://github.com/anthropics/claude-code/issues/110716)、[#110718](https://github.com/anthropics/claude-code/issues/110718)、[#111304](https://github.com/anthropics/claude-code/issues/111304)

### 4. MCP 工具按需加载与 Token 成本控制

社区期待 Desktop 与 CLI 在 MCP 工具搜索、schema 延迟加载方面保持一致，以降低上下文占用。同时，有用户报告 Opus 5 在重复读取已有仓库内容时消耗大量 cache-read token，反映出模型上下文复用与缓存效率仍受关注。

相关 Issues：[#111283](https://github.com/anthropics/claude-code/issues/111283)、[#107338](https://github.com/anthropics/claude-code/issues/107338)

### 5. 桌面会话管理与工作流增强

桌面端用户提出了：

- 会话切换时保留未发送草稿；
- 按日期“搁置”会话并在指定时间恢复；
- 禁止子会话在回合结束时自动唤醒父会话；
- 避免退出 Desktop 时意外归档云端 Remote Control 会话。

相关 Issues：[#97917](https://github.com/anthropics/claude-code/issues/97917)、[#96122](https://github.com/anthropics/claude-code/issues/96122)、[#104683](https://github.com/anthropics/claude-code/issues/104683)、[#107891](https://github.com/anthropics/claude-code/issues/107891)

### 6. 粘贴内容保护应可配置

社区希望提供关闭 `<pasted_content>` 包装或提示保护的选项，以减少用户主动粘贴指令、代码和笔记时模型产生的犹豫或额外确认。

相关 Issue：[#99052](https://github.com/anthropics/claude-code/issues/99052)

### 7. GitHub 集成可用性与安全边界

GitHub connector 已安装但无法连接仓库，以及 Fork PR 不应自动触发 `@claude`，共同说明仓库连接、授权范围和不可信 PR 的自动化边界仍是集成落地的关键问题。

相关 Issues：[#111292](https://github.com/anthropics/claude-code/issues/111292)、[#111303](https://github.com/anthropics/claude-code/issues/111303)；[PR #111198](https://github.com/anthropics/claude-code/pull/111198)

---

## 开发者关注点

1. **远程开发必须可靠且可恢复**  
   用户不仅关注 Remote Control 能否连接，更在意应用更新、进程退出或会话驱逐后能否继续工作，以及历史、标题和归档状态是否一致。

2. **权限提示不能成为流程死锁**  
   本地出现、远程看不到的审批提示会直接挂起任务。权限系统需要覆盖本地 CLI、Desktop、移动端和远程控制等全部入口。

3. **CLI、Desktop 与 SDK 行为需要统一**  
   MCP 按需加载、Code Mode 工具权限、Agent SDK 消息类型等差异，正在增加开发、调试和跨环境迁移成本。

4. **Token 与缓存成本需要可预测**  
   工具 schema 过早加载、重复读取仓库内容以及 advisor 的额外调用，都会直接影响上下文窗口和账单。社区期待更清晰的按需加载机制与成本可见性。

5. **认证与凭据持久化需要事务性保障**  
   OAuth refresh token 轮换后必须可靠落盘，不能因短命令退出或并发会话而丢失，否则会直接导致用户登录失效。

6. **Hooks 和工具来源需要更透明**  
   v2.1.329 增加 Hooks 声明位置提示及加载失败警告，反映出社区对插件、托管设置与本地配置的执行来源及可审计性要求上升。

7. **平台一致性仍是主要摩擦点**  
   Windows 的上传、BSOD、MCP 加载和认证问题，以及 macOS 的权限弹窗、Remote Control 和草稿丢失，说明同一功能跨平台的表现仍有明显差异。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报｜2026-11-20

## 1. 今日速览

GPT-6.2 正式进入 Codex 模型目录，`Sol` 成为默认目录选项，同时 TUI 工作区默认开启，文档、图片预览与子智能体记录被整合进主对话。社区反馈则集中在 Windows 桌面端、浏览器控制、远程执行和额度计量等稳定性问题，其中额度异常与使用量统计不一致的汇总 Issue 已累计 94 条评论，成为今日最受关注的问题。

## 2. 版本发布

过去 24 小时发布 4 个版本：

- [rust-v0.171.0](https://github.com/openai/codex/releases/tag/rust-v0.171.0)
  - 模型目录新增 **GPT-6.2 Sol** 与 **GPT-6.2 Astra**，并将 Sol 设为默认目录选项。
  - TUI 工作区默认启用。
  - TUI 支持可搜索的文档预览、图片预览，以及与主对话并列展示的子智能体记录。
- [rust-v0.173.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1)
  - 0.173 系列首个 Alpha 版本；提供版本号信息，暂未披露详细变更。
- [rust-v0.172.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2)
  - 0.172 系列 Alpha 迭代；暂未披露详细变更。
- [rust-v0.171.0-alpha.13.1](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.1)
  - 0.171 系列 Alpha 修订版；暂未披露详细变更。

## 3. 社区热点 Issues

1. **额度异常消耗及用量核算不一致**  
   [#41220](https://github.com/openai/codex/issues/41220)｜94 评论 / 21 赞  
   多个用户报告订阅额度或购买额度消耗显著快于预期，且与本地记录、Token 用量证据不一致。该 Issue 已被作为同类问题的跨报告追踪器，讨论热度为今日最高，直接影响用户对 Codex 成本和计费透明度的信任。

2. **Windows Computer Use 截图结束后捕获权限与黄色边框未释放**  
   [#57101](https://github.com/openai/codex/issues/57101)｜70 评论 / 13 赞  
   截图型任务完成后，Windows 端仍保留捕获状态和醒目的金黄色边框。问题影响后续交互可信度，也暴露出 Computer Use 生命周期管理与视觉反馈没有正确收尾。

3. **Windows 桌面端无法恢复云端会话**  
   [#59855](https://github.com/openai/codex/issues/59855)｜45 评论 / 0 赞  
   打开受云端管理的聊天时出现 `AbsolutePathBuf deserialized without a base path`，而本地存储内容仍可读取。该问题直接影响跨设备会话连续性，也是当天新增 Windows 桌面故障中的代表。

4. **Browser Use 无法发现 Chrome 和内置浏览器标签页**  
   [#47270](https://github.com/openai/codex/issues/47270)｜32 评论 / 2 赞  
   在没有 ChatGPT Browser Route 的情况下，Codex Desktop 无法发现或控制任何浏览器标签页。该问题横跨浏览器插件、桌面宿主与 ChatGPT 路由，显示 Browser Use 的部署依赖和跨环境兼容性仍是核心痛点。

5. **Windows 安装 Codex 沙箱会破坏 AppData ACL**  
   [#15777](https://github.com/openai/codex/issues/15777)｜32 评论 / 2 赞  
   沙箱安装流程会修改 AppData 权限并导致访问异常。该问题不只影响 Codex 本身，还可能波及其他应用和用户数据，属于需要优先核查安装器权限策略的高风险问题。

6. **桌面端升级后 Composer Predictions 消失**  
   [#55219](https://github.com/openai/codex/issues/55219)｜19 评论 / 0 赞  
   macOS 用户在桌面端更新后发现 Composer Predictions 完全不再出现。问题与版本升级高度相关，说明新模型能力在桌面端的集成或开关状态仍可能发生回归。

7. **Windows MCP 进程批量堆积且未完整清理**  
   [#40579](https://github.com/openai/codex/issues/40579)｜16 评论 / 2 赞  
   使用 5 个 MCP 服务时，桌面端会反复启动完整进程批次，旧进程未正确回收。该问题同时涉及资源泄漏、MCP 生命周期和长期运行稳定性，对开发工具链影响较大。

8. **Remote Control 主机已连接，但手机和 Windows 客户端无法访问**  
   [#62334](https://github.com/openai/codex/issues/62334)｜7 评论 / 5 赞  
   macOS 主机显示已连接 Relay，但自 11 月 18 日起 iPhone、Windows 等客户端均无法接入。Issue 创建时间较短但认可度较高，反映远程开发是活跃场景，同时连接状态提示与实际可达性不一致。

9. **Windows 请求沙箱审批时，运行时直接禁用审批请求**  
   [#50738](https://github.com/openai/codex/issues/50738)｜7 评论 / 0 赞  
   即使界面选择“Ask for approval”，Windows 运行时仍不允许发起审批请求。该问题涉及安全控制语义是否一致，可能导致用户误判命令执行边界。

10. **删除的会话仍留在侧边栏，并返回 `conversation_deleted` 404**  
    [#44343](https://github.com/openai/codex/issues/44343)｜12 评论 / 1 赞  
    已删除会话仍显示在侧边栏，且无法移除或归档。问题体现客户端缓存、服务端删除状态与 UI 同步之间的不一致，对会话管理可信度影响明显。

> 补充热点：[#62234](https://github.com/openai/codex/issues/62234) 报告 macOS 更新后底部面板设置消失、终端被强制移至右侧（6 评论 / 5 赞）；[#62650](https://github.com/openai/codex/issues/62650) 报告 Codex App 26.1117.31558 在动态壁纸环境下启动崩溃（5 评论 / 3 赞）。

## 4. 重要 PR 进展

> 今日 PR 数据中多数条目已关闭或合并；以下按功能影响和工程价值排序。

1. **允许宿主路由指定分析事件**  
   [#62684](https://github.com/openai/codex/pull/62684)  
   新增可由嵌入 Codex 的宿主接管部分分析事件的接口，其余事件继续通过 HTTP 批量发送，为企业级遥测、隐私控制和自定义分析后端提供扩展点。

2. **Executor Discovery V2 失败后指数退避重试**  
   [#62679](https://github.com/openai/codex/pull/62679)  
   避免服务异常时持续重试并长期缓存错误；通过退避机制提高执行器恢复后的发现成功率，减少无效请求。

3. **显式固定的历史内容不计入 Carryover Token 预算**  
   [#62677](https://github.com/openai/codex/pull/62677)  
   保留用户显式 Pin 的内容，防止本地压缩时将其丢弃，也避免大型 Pin 挤占普通消息的上下文空间。

4. **V2 缓存失效后强制重新扫描 Executor 能力**  
   [#62675](https://github.com/openai/codex/pull/62675)  
   为能力发现增加 `forceReload`，避免文件监听尚未生效时继续返回过期工具清单。

5. **远程启动期间预热 Executor 能力发现**  
   [#62674](https://github.com/openai/codex/pull/62674)  
   在远程环境初始化时提前获取执行器清单，降低首个真正需要远程工具的步骤因发现延迟而等待的概率。

6. **为注入项增加线程与子智能体独立保留策略**  
   [#62654](https://github.com/openai/codex/pull/62654)  
   将 `alwaysInThread` 与子智能体继承行为解耦，使调用方可以分别控制跨上下文窗口保留和向派生 Agent 传递内容的方式。

7. **`fs/getMetadata` 返回文件大小**  
   [#62653](https://github.com/openai/codex/pull/62653)  
   元数据响应新增 `sizeBytes`；符号链接指向普通文件时返回目标大小，目录则为 `null`，方便客户端展示和判断文件资源。

8. **新增 App/Installed Runtime Snapshot API**  
   [#31487](https://github.com/openai/codex/pull/31487)  
   提供 feature-gated 的 v2 `app/installed` API，并在读取时解析全局、工作区、本地、托管、MCP Tool 与 App Tool 的有效策略；该 PR 仍在开放状态。

9. **跨 Turn 复用 Executor Discovery V2 清单**  
   [#62640](https://github.com/openai/codex/pull/62640)  
   避免每轮开始都清空发现缓存并重建 MCP 清单，同时保持当前 Turn 所捕获的工具清单一致，降低重复发现开销。

10. **优化线程列表的 Rollout 扫描性能**  
    [#62636](https://github.com/openai/codex/pull/62636)  
    使用带缓冲的 Rollout Reader，只提取线程摘要所需的首个会话元数据和预览事件，减少逐行异步读取及无关记录解析。

> 其他值得关注的工程优化包括：后台重试 Guardian 模型发现（[#62627](https://github.com/openai/codex/pull/62627)）、使用 `libdeflate` 缩小 npm 发布包（[#62643](https://github.com/openai/codex/pull/62643)）、修复 macOS 安装器在 GNU Coreutils 环境下的版本清理问题（[#62648](https://github.com/openai/codex/pull/62648)）、继承历史可见性传递（[#62644](https://github.com/openai/codex/pull/62644)）、释放活跃 Turn 中已持久化的 MCP 结果内存（[#62641](https://github.com/openai/codex/pull/62641)），以及 TUI 状态行支持居中和右对齐（[#62637](https://github.com/openai/codex/pull/62637)）。

## 5. 功能需求趋势

### 新模型与模型行为
- **GPT-6.2 集成成为主线**：Sol、Astra 已进入模型目录，但桌面用量拆分未完整覆盖 Astra（[#62442](https://github.com/openai/codex/issues/62442)）。
- **模型指令遵循受到质疑**：有用户报告 GPT-6.2 忽略 `AGENTS.md` 并擅自缩小编码任务范围（[#62676](https://github.com/openai/codex/issues/62676)）。
- **模型稳定性差异明显**：长线程在 Astra 下停滞、切换 Sol 后恢复（[#55626](https://github.com/openai/codex/issues/55626)）。
- **自定义子智能体模型诉求增强**：社区希望直接选择模型目录中已有的模型作为子智能体覆盖项（[#58224](https://github.com/openai/codex/issues/58224)）。

### Browser Use 与 Computer Use
- 浏览器标签发现、Chrome 扩展连接、内置浏览器网络策略仍是高频故障区：  
  [#47270](https://github.com/openai/codex/issues/47270)、[#59592](https://github.com/openai/codex/issues/59592)、[#61279](https://github.com/openai/codex/issues/61279)。
- Computer Use 需要更可靠的权限释放、状态反馈和跨平台一致性：  
  [#57101](https://github.com/openai/codex/issues/57101)、[#61459](https://github.com/openai/codex/issues/61459)。

### 远程执行与多端协同
- Remote Control、Windows VM 控制、手机远程任务持续受到关注：  
  [#62334](https://github.com/openai/codex/issues/62334)、[#61459](https://github.com/openai/codex/issues/61459)、[#42675](https://github.com/openai/codex/issues/42675)。
- 社区期待桌面端、CLI、远程客户端在能力发现、浏览器接入和会话恢复上保持一致。

### 会话、上下文与子智能体
- 用户希望固定历史内容在 Token 压缩后仍完整保留。
- 子智能体记录、注入项继承、历史可见性需要更细粒度控制。
- CLI 独享会话也被要求提供明确的活动状态，而不应依赖用户先使用桌面端：  
  [#61721](https://github.com/openai/codex/issues/61721)。

### 性能与资源治理
- MCP 进程残留、Rollout 扫描开销、长期运行后的渲染器性能是主要工程诉求：  
  [#40579](https://github.com/openai/codex/issues/40579)、[#59860](https://github.com/openai/codex/issues/59860)。
- App 协议需要更直接的文件元数据和运行时快照能力。

### 跨平台与桌面 UI
- Windows 仍是问题最集中的平台，涉及沙箱、ACL、审批、MCP、会话和浏览器。
- macOS 的主要反馈集中在更新后布局回归、动态壁纸崩溃和终端位置变化：  
  [#62234](https://github.com/openai/codex/issues/62234)、[#62650](https://github.com/openai/codex/issues/62650)。

## 6. 开发者关注点

1. **额度与用量必须可解释、可核对**  
   社区最迫切的问题是“消耗速度异常”和“统计口径不一致”。除跨报告追踪器外，GPT-6.2 Astra 未出现在桌面用量拆分中（[#62442](https://github.com/openai/codex/issues/62442)），说明用户不仅关心额度本身，也需要模型、任务和 Token 消耗之间的清晰映射。

2. **Browser/Computer Use 的跨环境可靠性不足**  
   Desktop 可用不代表 CLI、Chrome 扩展、Windows VM 或 macOS Work 环境同样可用。路由缺失、扩展宿主不可达、网络策略未下发、权限未释放等问题，本质上反映功能可用性仍高度依赖宿主环境。

3. **Windows 桌面端需要系统性的回归治理**  
   高频问题横跨安装 ACL、沙箱审批、MCP 进程、浏览器、云会话及渲染性能。建议按“安装器权限—运行时审批—工具生命周期—会话恢复”建立统一回归矩阵，而不只是逐项修补。

4. **新模型能力不能以牺牲指令遵循为代价**  
   `AGENTS.md` 被忽略、任务范围被静默缩小、长线程停止推进等反馈表明，社区正在重点评估 GPT-6.2 的自主执行边界、稳定性以及是否符合项目级指令。

5. **上下文管理需要“显式意图优先”**  
   用户希望 Pin 内容、继承历史和子智能体资料拥有稳定的保留规则。相关 PR 已开始将线程保留、子智能体继承和 Carryover Token 预算拆分，体现可控上下文将成为重要产品能力。

6. **长时间、多工具运行下的资源效率**  
   MCP 进程堆积、持久化工具结果占用内存、重复发现 Executor 能力、Rollout 扫描开销等问题集中出现。开发者需要的是可长期驻留、可预测、不会随 Turn 数和 MCP 数量线性恶化的运行环境。

7. **桌面、CLI 与远程客户端的能力一致性**  
   同一个浏览器或会话在 Desktop、CLI、Remote、Windows VM 中表现不同，是当前反馈最明显的体验断层。统一能力发现、路由、状态提示和错误语义，比单独增加功能更影响日常开发效率。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-20**  
**项目：google-gemini/gemini-cli**

## 1. 今日速览

过去 24 小时，Gemini CLI 发布了 `v0.70.0`、`v0.71.0-preview.0` 和最新 nightly，版本主线已推进至 0.71。社区讨论高度集中在 **Agent 稳定性与可观测性**，包括子代理错误报告成功、通用代理卡死、浏览器代理异常以及工具调用超时；与此同时，YOLO 模式、工具级超时和 `/stats` 用量热图成为近期工程重点。

---

## 2. 版本发布

### v0.71.0-nightly.20261120.gd4cb1713f

本版本主要包含两项面向开发体验的改进：

- 修复模板占位符替换过程中错误吞掉字面量 `$` 字符的问题，避免命令、Shell 片段或模板内容被意外插值。
- 新增 `/stats heatmap` 子命令，以热图形式展示每日 Token 使用情况，便于发现用量峰值和高消耗工作流。

相关发布：  
https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261120.gd4cb1713f

### v0.71.0-preview.0

- 0.71 系列的首个预览版本。
- 主要内容为版本整理、Changelog 更新与 nightly 版本推进，完整变更清单仍以最终版本日志为准。

发布链接：  
https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-preview.0

### v0.70.0

- 0.70 稳定版本已发布。
- 发布说明包含此前预览版本 Changelog、版本号推进及稳定分支整理；本次数据未展示完整功能明细。

发布链接：  
https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0

> 建议开发团队优先验证 `/stats heatmap` 的 Token 统计口径，以及模板替换修复是否覆盖 Shell、Hooks、MCP 模板等常见路径。

---

## 3. 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后仍被报告为成功

`codebase_investigator` 在实际达到最大轮次、尚未完成分析时，仍返回 `status: success` 和 `Termination Reason: GOAL`。这会直接掩盖中断，使上层 Agent 误以为调查已经完成。

**重要性：** 涉及状态正确性、任务可靠性和自动化评测结果，可能是高优先级缺陷。  
**社区反应：** 13 条评论、2 个赞，为当日讨论最充分的 Issue。

https://github.com/google-gemini/gemini-cli/issues/22323

### 2. Generalist Agent 经常无限挂起

简单操作如创建目录也可能长时间卡死；禁用子代理后问题消失。Issue 获得了 **8 个赞和 8 条评论**，表明问题影响范围较广。

**重要性：** 主代理执行链一旦停滞，会影响交互会话和无头自动化。  
**社区反应：** 高赞、高评论，且已有 bot 分类和复测状态。

https://github.com/google-gemini/gemini-cli/issues/21409

### 3. 建议引入零依赖 OS 沙箱及执行后意图路由

该提案希望利用 Gemini 3 对 Bash 和 POSIX 工具链的强能力，同时通过无额外依赖的沙箱、命令风险分析及执行后意图路由控制风险。

**重要性：** 代表 Agent 执行安全的新方向，可能影响 Shell 工具、策略引擎和审批流程的整体架构。  
**社区反应：** 9 条评论、1 个赞，属于获得较多讨论的长期增强需求。

https://github.com/google-gemini/gemini-cli/issues/19873

### 4. 评估 AST 感知的文件读取、搜索和代码库映射

通过 AST 边界读取，可减少无效文件内容进入上下文，降低 Token 消耗和工具调用轮数；相关议题还包括使用 AST CLI 工具建立代码库映射。

**重要性：** 直接关联编码 Agent 的上下文效率与长期 token 成本。  
**社区反应：** 主 Epic 有 7 条评论，并已拆分出具体工具选型议题。

https://github.com/google-gemini/gemini-cli/issues/22745  
https://github.com/google-gemini/gemini-cli/issues/22746

### 5. Gemini 不会主动使用 Skills 和子代理

用户反馈，即使已配置与任务高度相关的 `gradle`、`git` 等 Skills，模型仍可能不主动调用，除非在提示词中明确指定。

**重要性：** 暴露了自动能力发现和调度策略不足，导致已配置能力闲置。  
**社区反应：** 7 条评论；虽无赞，但直接关系到用户对 Agent 主动性的预期。

https://github.com/google-gemini/gemini-cli/issues/21968

### 6. Browser Agent 忽略 `settings.json` 覆盖项

Browser Agent 会忽略全局或项目级 `settings.json` 中的 `maxTurns` 等配置，导致 AgentRegistry 虽已加载配置，实际执行时却没有采用。

**重要性：** 配置“看似生效、实际无效”会显著增加调试难度，并可能导致浏览器任务失控。  
**社区反应：** 5 条评论，已被标记为需要复测。

https://github.com/google-gemini/gemini-cli/issues/22267

### 7. MCP 服务级信任会静默批准未来新增工具

用户一旦信任某个 MCP Server，该服务之后新增的工具也会免于首次确认。这扩大了既有信任授权的权限范围。

**重要性：** 属于安全边界问题；若 MCP Server 后续新增高风险工具，现有授权模型可能无法及时提示用户。  
**社区反应：** 4 条评论；Issue 刚创建，仍在待分类阶段。

https://github.com/google-gemini/gemini-cli/issues/30369

### 8. Browser Agent 在 Wayland 环境下失败

浏览器子代理在 Wayland 环境中无法正常运行，却仍以完成状态结束。与 MAX_TURNS 误报问题结合后，可能进一步掩盖真实失败。

**重要性：** 表明浏览器自动化在 Linux 桌面上的兼容性和错误语义均需加强。  
**社区反应：** 4 条评论、1 个赞，标记为 P1 和需要复测。

https://github.com/google-gemini/gemini-cli/issues/21983

### 9. 可用工具过多时出现 HTTP 400

Issue 标题提到超过 128 个工具，实际摘要则描述“超过 400 个工具”时触发 400，请求上下文与工具规模可能存在明显限制。

**重要性：** MCP、扩展和 Skills 数量增加后，工具定义会迅速膨胀，可能成为规模化部署瓶颈。  
**社区反应：** 3 条评论；社区期待按任务动态裁剪工具范围。

https://github.com/google-gemini/gemini-cli/issues/24246

### 10. 模型频繁在随机位置创建临时脚本

当 Shell 被设为唯一执行方式时，模型会在多个目录生成编辑脚本，增加工作区清理成本，并使提交内容更容易被污染。

**重要性：** 这是 Agent 工作区卫生、临时文件治理及提交安全的重要问题。  
**社区反应：** 3 条评论，另有“限制破坏性行为”议题形成关联讨论。

https://github.com/google-gemini/gemini-cli/issues/23571  
https://github.com/google-gemini/gemini-cli/issues/22672

---

## 4. 重要 PR 进展

### 1. YOLO 模式下尊重 Shell 风险与构建文件检查

修复活跃、已信任的 `--approval-mode=yolo` / `-y` 模式仍被 Shell taint 和 build-file 风险检查打断的问题，避免交互式及无头自主运行出现多余确认或 `POLICY_VIOLATION`。

https://github.com/google-gemini/gemini-cli/pull/30268

### 2. 增加可配置的逐工具调用超时

新增 `tools.callTimeout`，单位为秒，默认 `0` 表示禁用。超时后通过 `AbortSignal` 终止单次调用，并返回可恢复的 `TOOL_CALL_TIMEOUT` 错误，让模型切换策略而不是卡死。

https://github.com/google-gemini/gemini-cli/pull/30212

### 3. `/skills link` 后刷新斜杠命令

技能链接成功后重新发现 Skills，并刷新斜杠命令列表，避免用户已链接技能却无法立即通过 `/<skill-name>` 使用。

https://github.com/google-gemini/gemini-cli/pull/30104

### 4. 修复 `safeJsonStringify` 误判循环引用

旧逻辑将任何第二次出现的对象替换为 `[Circular]`，即使对象之间不存在真实循环。该修复会影响遥测导出、OpenTelemetry 数据及共享数组的处理。

https://github.com/google-gemini/gemini-cli/pull/30157

### 5. 修复 eval-pr 工作流中的模板注入

处理 GitHub Actions 表达式直接注入 Bash 脚本所触发的 zizmor 模板注入告警，覆盖 `github.base_ref`、`github.actor`、`github.repository` 等值。

https://github.com/google-gemini/gemini-cli/pull/30162

### 6. PR 评估时不再抓取 Tags

将 `git fetch` 调整为 `--no-tags`，在保留 PR head 引用和变更检测的同时减少不必要的网络与仓库数据开销。

https://github.com/google-gemini/gemini-cli/pull/30161

### 7. OpenTelemetry SDK 就绪前缓存聊天压缩事件

修复聊天压缩事件早于 OTel SDK 初始化时丢失的问题，改为通过统一遥测缓冲区保存事件。

https://github.com/google-gemini/gemini-cli/pull/30156

### 8. 进入 ACP 模式前刷新缓冲的 stdio

在 ACP 模式运行期间，标准错误输出可能滞留在事件缓冲区；进程崩溃或被 SIGKILL 时会丢失 Hook 警告。现在会在进入 ACP 前主动 flush。

https://github.com/google-gemini/gemini-cli/pull/30154

### 9. 修复嵌套 `.gitignore` 在 `dir/**` 下的否定规则

正确处理目录通配规则与嵌套 `.gitignore` 重新包含文件之间的优先级，避免本应被重新纳入的文件被错误忽略。

https://github.com/google-gemini/gemini-cli/pull/30370

### 10. Windows 下展开使用反斜杠的 home-relative 路径

修复 `~\...` 形式未被正确展开的问题。此前这类路径会保留字面量 `~`，进而导致策略路径、扩展注册表和 include 目录指向错误位置。

https://github.com/google-gemini/gemini-cli/pull/30376

### 其他值得跟进

- 异步解析 PowerShell 命令，修复 Windows 上 Thinking spinner 停止刷新的 UI 冻结：  
  https://github.com/google-gemini/gemini-cli/pull/30334
- 修复文档中的失效内部链接：  
  https://github.com/google-gemini/gemini-cli/pull/30375
- 0.71.0 nightly 版本提交：  
  https://github.com/google-gemini/gemini-cli/pull/30382

---

## 5. 功能需求趋势

### 1. Agent 可靠性与终止语义

社区最强烈的诉求是避免“假成功”：达到 `MAX_TURNS`、发生中断、浏览器环境失败或命令卡死时，都应返回明确、可恢复且可验证的终止状态。

代表议题：  
https://github.com/google-gemini/gemini-cli/issues/22323  
https://github.com/google-gemini/gemini-cli/issues/21409  
https://github.com/google-gemini/gemini-cli/issues/21983

### 2. 子代理调度、发现与可观测性

需求覆盖自动发现子代理、通过 `settings.json` 加载、主动调用 Skills、并行协作、共享内存，以及通过 `/chat share` 查看子代理轨迹。

代表议题：  
https://github.com/google-gemini/gemini-cli/issues/18285  
https://github.com/google-gemini/gemini-cli/issues/18287  
https://github.com/google-gemini/gemini-cli/issues/22598

### 3. 上下文与 Token 成本优化

AST 感知的精准读取、代码库映射、分层搜索以及持久化任务跟踪，都是为了减少大文件“倾倒”、上下文腐化和不必要的 Agent 轮次。

代表议题：  
https://github.com/google-gemini/gemini-cli/issues/22745  
https://github.com/google-gemini/gemini-cli/issues/19561  
https://github.com/google-gemini/gemini-cli/issues/18836

### 4. 安全策略与权限粒度

热点包括 OS 级沙箱、执行后风险路由、限制 `git reset --force` 等破坏性行为，以及 MCP 工具级信任而非服务级无限授权。

代表议题：  
https://github.com/google-gemini/gemini-cli/issues/19873  
https://github.com/google-gemini/gemini-cli/issues/22672  
https://github.com/google-gemini/gemini-cli/issues/30369

### 5. 浏览器 Agent 的跨平台稳定性

Wayland 兼容、持久化会话锁恢复、配置继承和失败恢复是浏览器 Agent 当前的主要方向。

代表议题：  
https://github.com/google-gemini/gemini-cli/issues/21983  
https://github.com/google-gemini/gemini-cli/issues/22232  
https://github.com/google-gemini/gemini-cli/issues/22267

### 6. 工具规模治理与动态裁剪

当 MCP、Skills 和扩展带来大量工具时，需要按任务动态选择工具，而不是将全部定义发送给模型，以降低请求大小和 400 错误概率。

https://github.com/google-gemini/gemini-cli/issues/24246

### 7. 评测体系稳定性

社区不仅关注单次任务成功率，也关注内部评测能否持续通过、结果是否可重复，以及是否能够追踪质量趋势。

代表议题：  
https://github.com/google-gemini/gemini-cli/issues/23166  
https://github.com/google-gemini/gemini-cli/issues/23313

---

## 6. 开发者关注点

- **执行不能“无声失败”：** 终止原因必须准确反映任务是否真正完成，不能以 `GOAL` 或成功状态掩盖轮次耗尽、环境异常和内部崩溃。
- **卡死问题需要系统性治理：** 工具级超时、浏览器会话恢复和子代理超时应在同一套可恢复机制下处理。
- **配置必须可预测：** `settings.json` 中的 `maxTurns`、超时和 Agent 参数应确实贯穿初始化与执行全过程。
- **上下文成本已成为核心指标：** 用户期待通过 AST、精准读取、工具裁剪和持久化任务管理降低 Token 消耗。
- **自主执行需要安全而不烦人：** YOLO 模式应减少无意义确认，但 Shell、构建文件、Git 和 MCP 工具仍需具备可审计、细粒度的风险控制。
- **工作区需要保持整洁：** 临时脚本、随机编辑文件及破坏性 Git 命令会干扰提交，应提供集中临时目录、清理策略和安全替代方案。
- **浏览器 Agent 仍是高风险区：** Wayland、持久化配置、用户数据目录和会话锁都属于实际落地时的关键兼容点。
- **Agent 应更主动使用已有能力：** Skills 与子代理已经配置但不被自动发现或调用，说明调度机制和触发描述仍需改进。
- **错误报告需要包含子代理上下文：** 当前 `/bug` 主要覆盖主会话，缺少子代理轨迹，显著增加了线上问题定位成本。

**总体判断：** Gemini CLI 当前社区需求已经从单纯增加工具能力，转向“**可靠执行、可控权限、低成本上下文和可追踪状态**”。近期值得重点验证的 PR 是 YOLO 策略一致性、逐工具超时、Skills 刷新，以及遥测与 ACP 输出稳定性。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-20**  
**数据范围：过去 24 小时**

## 1. 今日速览

过去 24 小时发布 **v1.0.115-1**，重点修复 MCP OAuth 刷新令牌授权缺失导致登录无法继续的问题，并调整直接执行工作流时的扩展注册等待逻辑。社区讨论仍集中在 **MCP 身份认证与生命周期管理、权限授权体验、会话/模型稳定性、上下文估算**等方面；过去 24 小时共更新 40 个 Issue。

## 2. 版本发布

### [v1.0.115-1](https://github.com/github/copilot-cli/releases/tag/v1.0.115-1)

主要更新：

- **修复 MCP 登录流程**：当 OAuth 服务端授予所需 scopes、但未自动授予刷新令牌 scope 时，MCP sign-in 现在可以继续。
- **修复工作流直接执行竞态**：直接运行 workflow 时，会等待项目扩展中的 workflow 完成注册，避免扩展工作流尚未就绪便开始执行。

### [v1.0.115-0](https://github.com/github/copilot-cli/releases/tag/v1.0.115-0)

- 本日也发布了常规修复与变更版本；具体变更以该版本 Release Notes 为准。

## 3. 社区热点 Issues

### 1. [Remote MCP 过期 access token 未尝试静默刷新](https://github.com/github/copilot-cli/issues/4203)

当缓存的 access token 已过期、但 refresh token 仍有效时，CLI 会直接要求用户重新进行交互式 OAuth 登录，而不是依据 RFC 6749 §6 使用刷新令牌，导致 MCP 工具暂时不可用。该问题获得 **5 条评论和 5 个赞**，是今日热度最高的开放问题之一，也与本轮发布的 MCP OAuth 修复直接相关。

### 2. [单次请求中反复请求授权，导致“授权疲劳”](https://github.com/github/copilot-cli/issues/1168)

一次高层级请求可能触发十余次授权提示，严重打断工作流。问题已有 **5 条评论、3 个赞**，表明权限系统不仅要保证安全，还需要在同一请求内合并、缓存或延后不必要的授权。

### 3. [远程 MCP 非第一方 HTTP 服务无法完成登录](https://github.com/github/copilot-cli/issues/4017)

Copilot Desktop 中配置 Atlassian、incident.io 等非第一方 HTTP MCP 服务时，服务会取消 host-token 流程，却未真正启动其延迟的 runtime browser flow，最终表现为无认证、无错误、无弹窗。该 Issue 已关闭并获得 **8 条评论、3 个赞**，是今日社区讨论最充分的 MCP OAuth 问题。

### 4. [Windows 下 MCP worker 在 CLI 退出后仍存活](https://github.com/github/copilot-cli/issues/4972)

通过 wrapper 启动 MCP 时，CLI 主会话退出后，其子 worker 仍继续运行，可能造成残留进程、端口占用或资源泄漏。Issue 已有 **5 条评论**，反映出进程树清理在 Windows 和 wrapper 场景下仍是可靠性难点。

### 5. [WSL/Entra MCP 浏览器登录静默卡住](https://github.com/github/copilot-cli/issues/5510)

在 WSL2 Ubuntu 环境中，如果缺少 `xdg-open`，Entra MCP 浏览器登录可能无提示地停住；`/mcp` 提供的认证 URL 还可能触发 “State mismatch”。问题已有 **1 条评论**，其症状与 #4017、#5350 共同构成了跨平台 MCP OAuth 故障链。

### 6. [启动阶段加载 MCP 和插件，阻塞终端工作](https://github.com/github/copilot-cli/issues/5090)

社区希望 MCP、插件等扩展异步加载，使用户能在扩展初始化期间立即输入命令，而不必等待整个启动流程完成。Issue 获得 **3 条评论**，反映了大型仓库和扩展较多场景下对**启动性能、渐进可用性**的强烈需求。

### 7. [Copilot Free 个人账户无法启用远程访问](https://github.com/github/copilot-cli/issues/5283)

即使本地已启用 incoming connection，Copilot Free 个人账户仍可能因 remote-control policy 被阻止托管远程环境。该问题已有 **3 条评论、6 个赞**，是今日点赞数最高的 Issue，说明远程访问能力与免费账户策略之间的产品透明度亟待改善。

### 8. [切换模型后未保留自定义 effortLevel](https://github.com/github/copilot-cli/issues/2823)

`~/.copilot/config.json` 中的 `effortLevel` 在新会话中有效，但通过 `/model` 切换模型后会重置为 `medium`。问题已有 **3 条评论**，反映出用户对模型切换后推理强度、上下文参数保持一致性的需求。

### 9. [粘贴 PDF 被按编码大小估算，过早触发上下文压缩](https://github.com/github/copilot-cli/issues/5517)

一个约 1.9 MB 的 PDF 被估算为约 620k token，而实际模型输入约 31k token，导致不必要的自动 compaction。该新问题已有 **1 条评论**，显示附件上下文计量准确性会直接影响长会话成本和可用性。

### 10. [长会话中模型与上下文窗口变更可能不生效](https://github.com/github/copilot-cli/issues/5535)

在 VS Code agent host 的 harness 模式下，显式切换模型可能被静默忽略；客户端显示的新模型与实际会话模型不一致，报告者观察到会话在 `auto` 状态停留约 12 分钟。该 Issue 于今日创建，代表了**模型状态同步、实际执行模型可观测性**方面的最新反馈。

### 其他值得留意

- [Windows Vim 编辑器退格键输入异常](https://github.com/github/copilot-cli/issues/3374)：涉及 Vim、PowerShell 与终端按键编码兼容。
- [`/fork` 无法在新终端直接启动](https://github.com/github/copilot-cli/issues/4580)：用户希望以 `copilot --fork` 启动并行会话。
- [用户级 memory scope 不可用但仍暴露入口](https://github.com/github/copilot-cli/issues/5516)：界面提供 `user` scope，实际写入却返回 404。
- [模型缺少能力信息时回退到 128K token 预算](https://github.com/github/copilot-cli/issues/4310)：可能对百万 token 模型造成不必要的上下文压缩。
- [执行设备登录时，代理无限等待](https://github.com/github/copilot-cli/issues/5530)及[关键提示被折叠](https://github.com/github/copilot-cli/issues/5529)：两者均会导致 autopilot/长任务卡住。

## 4. 重要 PR 进展

过去 24 小时仅有 **1 个 PR** 更新，没有足够条目凑满 10 个。

### [PR #2957：修复 `launchExtension()` 的扩展 bootstrap 路径不一致](https://github.com/github/copilot-cli/pull/2957)

- **状态**：已关闭。
- **问题**：在 macOS 和 Windows 上，fork 子进程的安全检查预期 bootstrap 文件位于 `dirname(process.execPath)` 下的 SEA 二进制目录，但 `app.js` 实际传入的是 pkg 缓存目录中的路径，导致扩展无法加载。
- **价值**：统一启动器与子进程之间的路径契约，直接影响跨平台扩展加载和启动稳定性。
- **进展**：该 PR 已在当日关闭；结合 v1.0.115-1 对工作流扩展注册等待的调整，扩展初始化仍是近期迭代重点。

## 5. 功能需求趋势

### MCP 身份认证与连接可靠性

MCP 是本期最集中的主题，涉及 OAuth 静默刷新、浏览器回调、刷新令牌 scope、元数据重定向、Windows/WSL 浏览器调用、子进程清理等。社区诉求不只是“能够登录”，而是要求**认证可恢复、状态可见、跨平台行为一致**。

### 启动性能与扩展异步加载

大型仓库中的 MCP、插件和市场扩展加载耗时直接影响首轮响应时间。社区希望扩展加载异步化、渐进可用，并避免启动阶段阻塞终端输入。

### 权限与授权体验

“授权疲劳”说明当前授权粒度或确认机制可能偏细。开发者期待在保持最小权限原则的同时，减少同一任务内的重复授权，并为不同工具配置更精细的沙箱白名单。

### 模型控制与状态可观测性

模型切换后 effort level 重置、长会话模型变更不生效，以及客户端显示模型与实际模型不一致，均指向同一需求：**模型选择、上下文窗口和推理强度必须一致、可预测且可验证**。

### 长上下文、记忆与会话恢复

PDF 估算过大、模型能力缺失时回退到 128K、5 MB 请求限制下 `/compact` 无法恢复，以及 memory scope 404，反映出长会话在**附件计量、上下文预算、压缩恢复和记忆作用域**方面仍不成熟。

### IDE、Harness 与并行会话集成

VS Code agent host 中的模型同步问题，以及 `/fork`、新终端启动需求，表明社区正在把 Copilot CLI 从纯终端助手扩展为可嵌入、可并行、可由 IDE 托管的代理运行环境。

### 终端交互与可读性

近期新增问题集中于：

- 输出到达时滚动位置被强制拉回底部；
- reasoning 块完成后不自动折叠；
- `/diff` 缺少多行注释操作；
- 大型 diff 遮挡先前解释；
- 用户必须采取的登录操作被隐藏在折叠工具输出中。

这反映出社区对**长输出阅读、推理过程管理、关键提示可见性**的要求正在提高。

## 6. 开发者关注点

开发者反馈呈现出一致的核心诉求：

1. **MCP 登录必须可靠且可恢复**：有效 refresh token 应优先触发静默刷新；浏览器回调失败、URL 不匹配、缺少 opener 等情况必须明确报错，不能静默等待。
2. **减少重复授权**：一次复杂任务不应反复弹出授权提示，同时仍需避免扩大权限范围。
3. **扩展加载不能阻塞主流程**：MCP、插件及市场初始化应异步执行，并允许用户提前开始工作。
4. **模型状态必须一致**：切换模型后，effort level、context window、客户端显示和实际执行模型应同步更新。
5. **上下文估算要贴近真实 token 消耗**：PDF、图像等附件不应按原始编码体积计算，以免过早压缩并浪费费用。
6. **异常与生命周期管理要完善**：包括 Windows/WSL 兼容、MCP worker 退出清理、设备登录提示外显，以及关键操作不再埋藏在折叠输出中。
7. **提升工作流可并行性**：用户希望通过 `/fork` 或启动参数快速创建独立终端会话，同时保留原会话状态。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-20**

## 1. 今日速览

过去 24 小时没有新版本发布，但社区问题与修复明显集中在 **Windows/PowerShell 兼容性、免费额度异常、Claude Agent 与 Gemini 4 集成、SQLite 会话存储** 等方向。与此同时，浏览器工作流、会话全文检索和跨机器加密连接正在成为新的功能重点。

---

## 3. 社区热点 Issues

### 1. 免费额度异常与重置失败集中反馈
[#59387](https://github.com/anomalyco/opencode/issues/59387)  
作为免费层问题的统一入口，该 Issue 已积累 **393 条评论**，是今日热度最高的问题。反馈包括“免费额度已用尽”、额度重置失效，以及用户实际使用量与显示消耗不一致。免费模型额度是 OpenCode 当前最显著的用户信任问题之一。

### 2. Git 插件依赖无法正确执行构建脚本
[#49704](https://github.com/anomalyco/opencode/issues/49704)  
带有 `build`、`prepare`、`install`、`postinstall` 或 `workspaces` 的 Git npm 依赖会安装失败，且编译后的二进制无法运行自身的 `npm-cli.js`。该问题影响插件生态扩展，是面向插件开发者的重要阻塞项。

### 3. Code Mode 与插件工具调用缺少超时
[#54220](https://github.com/anomalyco/opencode/issues/54220)  
Code Mode 的 `execute` 和 plugin tool 调用没有超时限制，慢速工具会持续占用会话，只能由用户手动中断。虽然 MCP 调用存在超时，但默认长达 12 小时，实用性有限。可靠的工具超时机制是自动化和无人值守场景的基础设施。

### 4. Windows PowerShell 解析与权限流程异常
[#65008](https://github.com/anomalyco/opencode/issues/65008)  
OpenCode 2.3.0 在 Windows 上执行 PowerShell 脚本时跳过了预期的权限确认。问题虽已关闭，但反映出 Windows shell 执行路径存在权限策略不一致的风险，尤其值得安全相关用户关注。

### 5. Microsoft Store 版 PowerShell 导致 Shell 启动失败
[#63892](https://github.com/anomalyco/opencode/issues/63892)  
从 2.2.7 升级至 2.3.0 后，Windows Pipe 模式调用 Microsoft Store 安装的 PowerShell 7 会以 `0xC0070005` 失败。该问题获得 **3 个点赞**，反映出部分 Windows 用户依赖 Store/MSIX 安装环境。

### 6. macOS 27 下完整证书链仍报发行方证书错误
[#64835](https://github.com/anomalyco/opencode/issues/64835)  
macOS 27 环境中，模型端点使用 WoTrus/Sectigo R46 完整公开信任链时仍出现 `UNABLE_TO_GET_ISSUER_CERT`。问题涉及 Bun 编译客户端与证书信任行为，可能直接影响 macOS 用户访问部分模型服务。

### 7. Desktop 将无关目录会话合并到全局项目
[#55133](https://github.com/anomalyco/opencode/issues/55133)  
当目录不是 Git 仓库，或仓库尚无提交、HEAD 未建立时，Desktop 会将不同目录的会话归入同一个共享项目。问题可能造成会话列表污染、项目归属混乱及隐私风险。

### 8. Claude Agent 丢失历史中的系统消息
[#62916](https://github.com/anomalyco/opencode/issues/62916)  
`claude-agent` Provider 未将历史中的 `system` 消息发送给 Claude，导致通过 `ctx.session.instructions.entry.put/remove` 更新会话指令时，后续更新无法生效。问题直接影响插件动态修改系统指令的能力。

### 9. Claude Agent Catch-up 丢失 Prompt Cache
[#63871](https://github.com/anomalyco/opencode/issues/63871)  
切换模型或重启后，Claude Agent 的历史追赶过程按消息部件发送内容块，而不是合并为可缓存的内容块，导致 Prompt Cache 命中率下降。该问题会增加恢复会话后的延迟和模型调用成本。

### 10. Code Mode、插件工具及免费模型仍有多项体验问题
[#55346](https://github.com/anomalyco/opencode/issues/55346) · [#65027](https://github.com/anomalyco/opencode/issues/65027) · [#65040](https://github.com/anomalyco/opencode/issues/65040) · [#65044](https://github.com/anomalyco/opencode/issues/65044)  
这些代表性反馈分别涉及：

- `math` 围栏中的 `\ ` 导致 LaTeX 退化为原始源码；
- Beam Free 在简单任务上的指令遵循和视觉能力不足；
- 免费额度被异常提前耗尽；
- Snap 版 `curl` 无法访问 `/tmp` 安装暂存目录，安装器却错误提示磁盘空间不足。

这些议题共同反映出当前社区对 **渲染正确性、免费模型质量、额度透明度以及安装环境兼容性** 的强烈需求。

---

## 4. 重要 PR 进展

### 1. SQLite FTS 驱动会话搜索与读取工具
[#65076](https://github.com/anomalyco/opencode/pull/65076)  
在 `sqlite_fts` 功能标记后提供 `session_search` 和 `session_read` 工具，并延续此前 PR 的实验性全文索引方向。该能力有望改善大规模历史会话的检索效率。

### 2. ACP 改用 Node HTTP，避免 SSE 请求饥饿
[#64984](https://github.com/anomalyco/opencode/pull/64984)  
将 ACP 客户端从 Bun HTTP 切换到 `node:http`，防止长期 SSE 连接占满 Bun 的 fetch 资源，导致并发 HTTP 请求无法获得响应。该修复改善了 CLI 在流式连接与并发请求下的稳定性。

### 3. 限制响应中途断连后的重试次数
[#65062](https://github.com/anomalyco/opencode/pull/65062)  
当连接在模型响应过程中断开时，核心层不再无限或不确定地重试，而是设置重试上限。该改动可降低重复请求、异常循环和额外 API 费用风险。

### 4. 为跨机器加密连接加入 Noise 握手
[#65074](https://github.com/anomalyco/opencode/pull/65074)  
实现 Noise Protocol Framework 的 `XX` 模式，采用 `Noise_XX_25519_AESGCM_SHA256`，用于服务器与远程 Worker 之间的加密机器连接。目前只是协议基础，尚未接入实际网络流程。

### 5. Gemini 4 使用受支持的 Thinking 设置
[#65072](https://github.com/anomalyco/opencode/pull/65072)  
修复 Gemini 4 拒绝旧式 token budget 和 `MINIMAL` thinking 设置的问题，调整为兼容的 thinking 配置。这对 Gemini 4 Neon 等新模型的正常使用和稳定性至关重要。

### 6. 修复 Gemini 4 Neon 切换 Interactions API 后空回复
[#65068](https://github.com/anomalyco/opencode/pull/65068)  
当 `recommended_api` 将 Gemini 4 Neon 会话迁移至 Interactions API 后，可能出现消息被接受但模型不返回内容的问题。该 PR 修复了新 API 与现有会话状态之间的兼容问题。

### 7. 浏览器恢复保存标签页
[#65067](https://github.com/anomalyco/opencode/pull/65067)  
应用重新打开后立即展示已保存的浏览器标签页，并在页面加载期间保持标签占位，避免标签条在桌面端连接会话服务器之前完全消失，改善会话恢复体验。

### 8. 导入其他浏览器历史并补全地址栏
[#65073](https://github.com/anomalyco/opencode/pull/65073)  
支持从 Chromium、Firefox、Safari 导入浏览历史及登录状态，并使用历史记录和 OpenCode 已打开页面为地址栏提供补全建议。该功能让内置浏览器更接近完整浏览器工作流。

### 9. 自动更新 `@latest`、版本范围和 Git 分支插件
[#65052](https://github.com/anomalyco/opencode/pull/65052)  
插件安装器可识别 `name@latest`、版本范围及 Git 分支等来源，并自动执行更新。这减少了固定版本插件长期过期的维护成本。

### 10. Desktop 支持在浏览器面板打开临时目录中的 HTML
[#65066](https://github.com/anomalyco/opencode/pull/65066)  
修复从聊天内容打开 OpenCode 临时目录内本地 HTML 文件时无法正常显示的问题。该改动让 agent 生成的本地报告、交互页面和可视化成果可直接在 Desktop 浏览器中预览。

---

## 5. 功能需求趋势

### 浏览器成为独立工作台
社区正在推动浏览器 API 标签页关闭、缓存清理、页面刷新、浏览历史导入、地址栏补全和登录状态迁移等能力（[#59787](https://github.com/anomalyco/opencode/issues/59787)、[#60152](https://github.com/anomalyco/opencode/issues/60152)、[#65073](https://github.com/anomalyco/opencode/pull/65073)）。OpenCode Desktop 正从“带浏览器的 IDE”向完整代理工作环境演进。

### 增强会话检索、历史管理与可移植性
SQLite FTS5、实验性 `session_search`/`session_read`、模型工具保留同系列同日模型，以及复制数据库读取问题，显示出社区对大型历史会话的搜索、迁移和长期管理需求持续上升（[#65076](https://github.com/anomalyco/opencode/pull/65076)、[#65021](https://github.com/anomalyco/opencode/issues/65021)）。

### 插件 API 需要更精细的控制和生命周期管理
热门需求包括：

- 调整权限拒绝消息的 `permission.reply` Hook；
- 插件 Git 依赖支持生命周期脚本；
- 为慢速插件调用设置超时；
- 支持插件私有仓库认证；
- 自动更新不同版本的插件。

这表明插件 API 正从“能安装、能调用”转向可控、可诊断和可维护。

### 新模型与 Provider 集成持续深化
社区关注 Gemini 4、Claude Agent、OpenCode Zen/Go、Beam Free，以及 Claude Code WebSearch、账户轮换和自定义登录目录。核心诉求已不只是“接入模型”，还包括缓存效率、Thinking 配置、图像能力和系统指令可靠性。

### 跨设备、远程与服务器部署能力增强
Noise 握手、机器密钥、一次性加入字符串，以及带路径前缀的配对链接和服务器地址，显示 OpenCode 正在构建更完整的远程服务器与跨机器代理能力（[#65074](https://github.com/anomalyco/opencode/pull/65074)、[#64781](https://github.com/anomalyco/opencode/pull/64781)）。

### 改进模型选择与快捷操作
用户希望 `/btw` 可以使用独立模型，而不是始终沿用当前会话模型（[#65060](https://github.com/anomalyco/opencode/issues/65060)）。模型工具也应更清晰地展示同系列模型的最新可用版本。

---

## 6. 开发者关注点

1. **免费额度必须透明、可预测**  
   额度异常耗尽和重置失效已形成高热度反馈，开发者期待看到真实用量、额度重置时间和异常检测，而不只是笼统的“已达上限”。

2. **Windows 是当前兼容性重灾区**  
   PowerShell Store/MSIX 安装、App Execution Alias、脚本权限绕过、插件私有仓库认证后台卡死等问题，集中在 Windows 2.3.x 用户群体。

3. **插件生态需要稳定的安装与执行语义**  
   Git 依赖生命周期脚本、认证交互、超时控制、失败诊断和自动更新共同构成插件系统的关键工程问题。

4. **流式响应和并发请求必须避免相互阻塞**  
   ACP SSE 饥饿、响应中途断连重试、后台任务随服务器重启取消等问题，暴露出长连接、后台任务和重试策略之间仍需更清晰的边界。

5. **Provider 兼容性不能只停留在 API 可调用层面**  
   系统消息传递、Prompt Cache、Thinking 参数、空回复及证书信任，都会直接影响实际质量和费用。

6. **历史数据可靠性成为核心体验指标**  
   SQLite 并发写入、复制数据库损坏、桌面会话错误合并等问题，直接关系到用户数据完整性，应优先保证错误信息清晰、数据不丢失及迁移安全。

7. **长任务需要可控的超时、恢复和生命周期策略**  
   社区希望插件工具具备合理超时，后台 Shell 能在服务器重启后继续运行，同时跨机器连接应有明确的加密握手和失败恢复机制。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报

**日期：2026-11-20**  
**项目：** [1jehuang/jcode](https://github.com/1jehuang/jcode)

## 今日速览

今日社区重点集中在 **swarm 多代理稳定性、provider 调度与账户池、Windows/macOS 兼容性，以及 TUI 交互正确性**。过去 24 小时共更新 **16 个 Issue、20 个 PR**，其中多项已有对应修复提交，显示问题响应较集中。

昨日关闭的 UTF-8 SSE 解码缺陷也值得关注：流式响应按传输块解码时可能破坏跨块字符，说明 AI 编程工具正从“能调用模型”转向更重视长连接、长时间运行与多代理编排的可靠性。

---

## 版本发布

### Linux 预发布版

- **版本：** `selfdev-linux-18b502ca3c3f3fd10bb21866191d396758e0293c`
- **标签：** jcode Linux prerelease · `18b502ca3`
- **主要更新：**
  - 语音输入过程中实时展示 Heard caption，无需等待整段听写结束。
  - Linux 笔记本没有可用 Fn 键时，可通过 `jarvis_key = "rightshift"` 将 Right Shift 映射给 Jarvis。
  - 提供便携式 Linux x86_64 构建，便于试用而不替换稳定安装。
- **链接：** [GitHub Release](https://github.com/1jehuang/jcode/releases)

> 当前提供的是 Linux 预发布版本，生产环境使用者宜等待稳定版验证。

---

## 社区热点 Issues

### 1. Provider 请求缺少“整轮”超时上限

- **Issue：** [#2252 Unbounded thinking state when provider turns never terminate](https://github.com/1jehuang/jcode/issues/2252)
- **重要性：** 现有保护主要限制流式静默时间；keepalive 和 Anthropic ping 会重置计时器，导致连接一直存活时整轮推理永不结束。网络重试也可能形成无界循环。
- **社区反应：** 今日新建，尚无评论，但已有 PR 直接跟进。
- **对应 PR：** [#2251](https://github.com/1jehuang/jcode/pull/2251)

### 2. Swarm 后台任务采用轮询而非完成事件唤醒

- **Issue：** [#2254 Background waits poll on a 1s timer instead of waking on completion](https://github.com/1jehuang/jcode/issues/2254)
- **重要性：** 固定 1 秒轮询会带来额外延迟和无效唤醒，也使任务完成与调度之间的同步更脆弱。
- **社区反应：** Issue 与修复 PR 同日出现，说明目前等待机制是明确的效率与可靠性痛点。
- **对应 PR：** [#2253](https://github.com/1jehuang/jcode/pull/2253)

### 3. kcode 账户池缺少明确的 API Key 安全录入流程

- **Issue：** [#2249 Document the kcode account pool and add safe API-key enrolment](https://github.com/1jehuang/jcode/issues/2249)
- **重要性：** 账户池涉及 OAuth、API Key、多 Key、故障切换及 429 限流轮换；错误配置可能导致泄密、路由错误或限流恢复不及时。
- **社区反应：** 需求对安全边界提出具体要求：不得打印 Key 值，并拒绝把凭据写入仓库内部。
- **对应 PR：** [#2250](https://github.com/1jehuang/jcode/pull/2250)

### 4. Provider 账户解析逻辑需要独立、可测试的纯函数

- **Issue：** [#2247 Add pure account resolver for kcode provider pools](https://github.com/1jehuang/jcode/issues/2247)
- **重要性：** 账户选择涉及 tier 排序、不可用账户跳过、429 标记、多 Key 支持及显式录入资格，逻辑复杂且容易产生隐式路由问题。
- **社区反应：** 需求强调“可纯化、可单测”，也表明 provider 调度正成为核心基础设施。
- **对应 PR：** [#2248](https://github.com/1jehuang/jcode/pull/2248)

### 5. `KCODE_HOME` 错误污染 jcode 的状态目录

- **Issue：** [#2245 Decouple state-dir selection from KCODE_HOME by invoked program](https://github.com/1jehuang/jcode/issues/2245)
- **重要性：** jcode 与 kcode 共用二进制时，环境变量可能导致程序读取错误的状态目录，影响会话、配置和凭据隔离。
- **社区反应：** 社区倾向于依据“实际被调用的程序名”确定状态目录，并要求同时覆盖 jcode、kcode 两种场景的测试。
- **对应 PR：** [#2246](https://github.com/1jehuang/jcode/pull/2246)

### 6. Windows 普通 `cargo build` 被 POSIX rustc wrapper 阻断

- **Issue：** [#2244 Plain cargo build fails on Windows because tracked Cargo config forces POSIX rustc wrapper](https://github.com/1jehuang/jcode/issues/2244)
- **重要性：** 仓库级 `.cargo/config.toml` 强制使用 shell 脚本，使 Windows 开发者无法直接构建，这是影响贡献者和 CI 可复现性的基础性问题。
- **社区反应：** 已有明确修复方案：保留并行编译能力，但不再对所有平台强制应用 POSIX wrapper。
- **对应 PR：** [#2243](https://github.com/1jehuang/jcode/pull/2243)

### 7. Subagent 错误继承 coordinator 专属指令

- **Issue：** [#2241 Subagent sessions inherit coordinator-only AGENTS.md delegation rule](https://github.com/1jehuang/jcode/issues/2241)
- **重要性：** “Delegate, never work inline”适用于协调器，却被注入所有子代理，可能让 worker 无法直接执行任务、错误委派或只返回状态信息。
- **社区反应：** 与 [#2235](https://github.com/1jehuang/jcode/issues/2235) 高度重复；社区已提出为 spawned worker 注入显式角色指导的方案。
- **对应 PR：** [#2237](https://github.com/1jehuang/jcode/pull/2237)

### 8. macOS 重载后遗留子进程无法回收

- **Issue：** [#2233 macOS: the shared server never reaps children inherited across a reload](https://github.com/1jehuang/jcode/issues/2233)
- **重要性：** `inherited_children` 仅有 Linux 实现，macOS 下为空操作；旧进程遗留的子进程会持续成为 zombie，陈旧 MCP server 也可能无法清理。
- **社区反应：** 报告附带了长期运行实例的僵尸进程证据，问题边界清晰，已有平台化修复 PR。
- **对应 PR：** [#2234](https://github.com/1jehuang/jcode/pull/2234)

### 9. TUI 的 Go 注释着色会溢出到后续行，并丢失 Tab 缩进

- **Issue：** [#2095 TUI code highlighting leaks Go line comments into subsequent lines and loses tab indentation](https://github.com/1jehuang/jcode/issues/2095)
- **重要性：** 代码块渲染错误会直接影响 diff、源码阅读和审查体验；该报告提供了确定性复现及已验证诊断。
- **社区反应：** 已有 3 条评论；社区提交了基于下游修复的 PR，计划同时处理注释颜色泄漏和 Tab 展开，并关联相关问题 #2074。
- **对应 PR：** [#2238](https://github.com/1jehuang/jcode/pull/2238)

### 10. Swarm worker 可能在任务未完成时提前结束工作项

- **Issue：** [#2239 Discuss acceptance checks and handoffs for swarm workers](https://github.com/1jehuang/jcode/issues/2239)
- **重要性：** 当前“完成”只表示 worker 停止输出，不等于任务通过验收；未完成的 todo 可能被标记为 done，并过早释放依赖任务。
- **社区反应：** 社区提出由 worker 检查 lane todos、执行验收检查后再交接的完成策略，已有回归测试与修复 PR。
- **对应 PR：** [#2240](https://github.com/1jehuang/jcode/pull/2240)

### 其他值得跟踪

- [#1944 Responses SSE decoding corrupts UTF-8 split across transport chunks](https://github.com/1jehuang/jcode/issues/1944)已关闭：修复流式响应中跨传输块的 UTF-8 解码问题。
- [#2229 swarm spawn cannot use claude-opus-5.5 via GitHub Copilot](https://github.com/1jehuang/jcode/issues/2229)已关闭：涉及 swarm 无法为模型显式选择 GitHub Copilot 路由。
- [#2231 Quality gates fail on clean master because baselines are stale](https://github.com/1jehuang/jcode/issues/2231)：干净 master 即无法通过质量门禁，暴露基线维护问题。
- [#2230 Master CI red: unused live assignment exceeds warning budget](https://github.com/1jehuang/jcode/issues/2230)：一个无效赋值触发 warning budget 门禁。

---

## 重要 PR 进展

### 1. Swarm 等待改为完成后唤醒

- **PR：** [#2253 fix(swarm): wait on completion instead of sleeping](https://github.com/1jehuang/jcode/pull/2253)
- **进展：** 替代固定 1 秒轮询，关闭 [#2254](https://github.com/1jehuang/jcode/issues/2254)。
- **价值：** 降低后台 swarm 的延迟和无效唤醒，提升任务完成感知的及时性。

### 2. 为 provider 整轮执行增加总时限

- **PR：** [#2251 fix(provider): bound a whole turn, not just stream silence](https://github.com/1jehuang/jcode/pull/2251)
- **进展：** 从“限制流式静默”升级为“限制整个 turn”，同时考虑 keepalive、ping、网络重试和请求尚未开始的情形。
- **价值：** 防止 provider 永久挂起及无界重试，关闭 [#2252](https://github.com/1jehuang/jcode/issues/2252)。

### 3. 增加 kcode 账户池文档与安全 API Key 录入

- **PR：** [#2250 Document the kcode account pool and add safe API-key enrolment](https://github.com/1jehuang/jcode/pull/2250)
- **进展：** 覆盖 OAuth 自动录入、API Key 显式 opt-in、故障切换和 429 轮换；录入工具不输出 Key，并拒绝仓库内输出路径。
- **价值：** 为多 provider、多账户调度建立安全且可操作的配置流程。

### 4. 引入纯账户解析器

- **PR：** [#2248 Add pure account resolver for kcode provider pools](https://github.com/1jehuang/jcode/pull/2248)
- **进展：** 按 tier 顺序解析账户，跳过不可用账户，支持 `mark_unavailable`、显式 API Key 资格和多 Key。
- **价值：** 将复杂路由逻辑从 I/O 中解耦，便于覆盖边界条件的单元测试。

### 5. 按被调用程序隔离状态目录

- **PR：** [#2246 Decouple state-dir selection from KCODE_HOME by invoked program](https://github.com/1jehuang/jcode/pull/2246)
- **进展：** 只有实际调用名为 kcode 时才读取 `KCODE_HOME`；jcode 使用 `JCODE_HOME` 或默认目录。
- **价值：** 避免同一安装中的两个产品共享错误状态或污染配置。

### 6. 修复 Windows 构建被 POSIX wrapper 阻断

- **PR：** [#2243 fix(build): stop forcing a POSIX rustc wrapper on every platform](https://github.com/1jehuang/jcode/pull/2243)
- **进展：** 调整仓库级 Cargo 配置，使并行 rustc 前端不再无条件依赖 POSIX shell 脚本。
- **价值：** 恢复 Windows 开发者直接执行 `cargo build` 的能力，降低跨平台贡献门槛。

### 7. 重启后恢复持久化 idle headless swarm worker

- **PR：** [#2242 Revive durable idle headless swarm workers after restart](https://github.com/1jehuang/jcode/pull/2242)
- **进展：** 处理 server 重启或传输连接丢失后，headless swarm child 仍处于 stopped 状态的问题。
- **价值：** 提升长任务、后台代理和 daemon 场景的容错能力。

### 8. 为 spawned worker 注入独立角色指导

- **PR：** [#2237 Inject explicit subagent guidance for spawned workers](https://github.com/1jehuang/jcode/pull/2237)
- **进展：** 在提示词组装阶段区分 coordinator 与 worker，避免全局 `AGENTS.md` 中协调器专属规则污染子代理。
- **价值：** 修复多代理委派语义混乱，关闭 [#2235](https://github.com/1jehuang/jcode/issues/2235)，并与 [#2241](https://github.com/1jehuang/jcode/issues/2241) 对应。

### 9. 修复 TUI 注释颜色泄漏与 Tab 缩进

- **PR：** [#2238 fix(tui): stop comment color bleed and expand tabs in code blocks](https://github.com/1jehuang/jcode/pull/2238)
- **进展：** 调整语法高亮输入的换行处理，并恢复代码块中的 Tab 展开。
- **价值：** 改善代码阅读、diff 展示和审查体验，关闭 [#2095](https://github.com/1jehuang/jcode/issues/2095)，预计同时解决 #2074。

### 10. 阻止未完成的 swarm lane 被自动标记完成

- **PR：** [#2240 Prevent automatic completion of unfinished swarm lanes](https://github.com/1jehuang/jcode/pull/2240)
- **进展：** 基于 lane todo 状态约束完成转换，并增加复现过早完成的回归测试。
- **价值：** 确保任务只有在实际完成后才解除依赖，提升多代理编排的正确性。

### 其他重要 PR

- [#2227 fix(voice): read live sender and close #2230](https://github.com/1jehuang/jcode/pull/2227)：清理 voice 模块无效赋值，恢复 warning budget。
- [#2232 Recalibrate stale Quality Guardrails baselines](https://github.com/1jehuang/jcode/pull/2232)：更新过期的代码体积和吞错质量基线。
- [#2234 inherited_children: reap inherited children on macOS too](https://github.com/1jehuang/jcode/pull/2234)：为 macOS 增加跨 reload 子进程回收。
- [#2186 fix(tui): match keyboard-protocol writes to the Windows decoder and repaint after a viewport shift](https://github.com/1jehuang/jcode/pull/2186)：修复 Windows ConPTY 下键盘协议碎片和视口变化后的重绘问题。
- [#2193 fix(tui): stop a pasted block from submitting once per line on Windows](https://github.com/1jehuang/jcode/pull/2193)：修复 Windows 多行粘贴被逐行提交。
- [#2202 feat(tui): show multi-line pastes as numbered blocks and record expanded history](https://github.com/1jehuang/jcode/pull/2202)：将多行粘贴显示为编号块并记录展开后的历史。
- [#2204 fix(tui): open links only on Ctrl+Click](https://github.com/1jehuang/jcode/pull/2204)：避免普通点击误开浏览器。
- [#2213 fix(storage): a throttle stamp must write a non-empty payload so its mtime advances](https://github.com/1jehuang/jcode/pull/2213)：修复限流标记 mtime 未推进的问题。

---

## 功能需求趋势

### 1. Swarm 多代理编排成为第一优先级

今日高频需求集中于：

- 后台任务完成事件驱动，而非定时轮询。
- coordinator 与 subagent 指令隔离。
- worker 验收检查与可靠交接。
- 未完成任务不得被自动标记为 done。
- server 重启或连接丢失后恢复 idle worker。

这表明社区关注点已从“能否创建 agent”转向 **任务是否真正完成、状态是否一致、故障后能否恢复**。

### 2. Provider 路由和账户治理走向产品化

需求不再局限于增加模型名称，而是覆盖：

- 多 provider 账户池。
- tier 排序和可用账户解析。
- OAuth 与 API Key 混合管理。
- 429 后账户轮换。
- 请求超时、重试边界和整轮终止条件。
- swarm 模型与认证路由的显式选择。

模型接入正逐步演变为 **provider 调度、限流治理和容错机制**。

### 3. 跨平台可靠性仍是基础短板

Windows 构建、macOS 子进程回收、Windows 粘贴与键盘协议等问题显示，jcode 的跨平台体验尚未完全统一。开发者需要的是“克隆后可直接构建、运行”和“后台进程不泄漏”的基础确定性。

### 4. TUI 交互向终端原生习惯靠拢

社区持续推动：

- Ctrl+Click 才打开链接。
- 多行粘贴按整体提交并编号展示。
- 正确处理 ConPTY 键盘协议。
- 修复代码高亮、缩进和视口重绘。

这些改进直接面向重度 CLI 用户，强调 **行为可预测、文本选择安全、代码展示准确**。

### 5. 质量门禁需要与代码库同步演进

当前质量基线已落后于 master，且一个警告即可使 CI 失败。社区需要的不只是放宽门槛，而是建立 **基线持续更新、债务可见、避免积压** 的治理机制。

---

## 开发者关注点

1. **长任务不能无限挂起**  
   开发者希望同时拥有流式静默超时和整轮总超时。keepalive、ping、无限重试以及“请求尚未开始”的场景都必须纳入边界。

2. **多代理“完成”必须可信**  
   worker 停止输出不等于任务完成；社区期待明确的验收检查、todo 状态约束、角色隔离和可恢复的交接机制。

3. **凭据管理必须安全且可审计**  
   API Key 应显式录入、默认不输出，并避免写入仓库；账户池需清晰定义优先级、不可用状态及 429 后的恢复策略。

4. **跨平台构建和进程生命周期需要统一**  
   Windows 开发者希望无需手工修改 Cargo 配置即可构建；macOS 长期运行服务应能回收旧进程和僵尸进程。

5. **TUI 输入与展示应遵循终端惯例**  
   多行粘贴不能逐行误提交，链接不能抢占文本选择，代码高亮与 Tab 渲染不能误导用户。

6. **CI 质量门禁需要兼顾严格性与可维护性**  
   社区希望门禁持续阻止真实回归，同时避免 stale baseline 或历史债务让干净 master 直接失败。

7. **流式协议正确性影响实际可用性**  
   已关闭的 UTF-8 SSE 缺陷表明，跨 chunk 文本解码、Unicode 完整性和长连接稳定性是开发者在真实 provider 环境中频繁遇到的问题。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-20

## 今日速览

过去 24 小时没有新版本发布，但社区集中讨论了 **Windows 兼容性、终端状态恢复、模型缓存与工具调用正确性**。大量 Issue 已被对应 PR 快速修复，显示项目当前迭代重点是提升跨平台稳定性与多模型适配；仍有 Copilot 模型刷新、提示词缓存保留等关键需求待处理。

---

## 社区热点 Issues

### 1. Windows 使用体验与兼容性问题征集
- **热度**：100 条评论，为本期讨论最活跃议题。
- **重点**：Pi 在 Windows 上存在多种运行方式，Shell、终端、路径及 RPC 行为差异显著，社区希望明确官方支持范围，并将非核心适配方案交给扩展处理。
- **意义**：这是影响 Windows 用户采用率的关键议题，也可能成为下一阶段平台策略的核心。
- [Issue #7547](https://github.com/earendil-works/pi/issues/7547)

### 2. 空闲缓存预热时间不可配置
- **热度**：4 条评论。
- **重点**：当前 `cacheWarming: "idle"` 使用硬编码的 30 分钟窗口，与提示缓存 TTL 的刷新节奏不匹配；社区希望支持 60、120 分钟等自定义 horizon。
- **意义**：直接影响长会话中的缓存命中率、延迟及额外 token 成本。
- [Issue #11127](https://github.com/earendil-works/pi/issues/11127)

### 3. Copilot 企业管理员启用模型后，重启仍不可见
- **热度**：5 条评论。
- **重点**：`availableModelIds` 会被 OAuth 凭据缓存，重启不一定触发刷新，新启用或新上架的模型无法出现在模型选择器中。
- **意义**：影响 Copilot 企业用户的模型可用性和升级后的即时可见性，已有专门 PR 处理。
- [Issue #11006](https://github.com/earendil-works/pi/issues/11006)

### 4. GPT-6.2 Sol 的系统提示词缓存复用率低于 6.1
- **热度**：6 条评论。
- **重点**：同一工作负载下，6.2 报告缓存 token 明显少于 6.1，导致每轮增加约 8.8k 未缓存输入 token。
- **意义**：暴露了 `openai-codex` 适配层中系统提示词位置与缓存前缀设计的问题，可能直接影响费用和延迟。
- [Issue #12273](https://github.com/earendil-works/pi/issues/12273)

### 5. 恢复会话时，npm 扩展工具未被恢复
- **热度**：3 条评论。
- **重点**：文件扩展注册的工具可在新进程恢复会话时重新加载，但 npm 包扩展中的工具不能；`/reload` 也无法解决。
- **意义**：这是扩展生态一致性和会话可移植性的重要缺陷，意味着用户可能需要重复安装或手动恢复工具。
- [Issue #12323](https://github.com/earendil-works/pi/issues/12323)

### 6. Windows Git Bash 静默截断长 RPC Bash 命令
- **热度**：2 条评论。
- **重点**：约 8,336 字符的 RPC 命令仅输出 `START`，尾部命令未执行，却返回 `exitCode: 0` 和 `truncated: false`；通过 `bash.exe -s` 可正常运行。
- **意义**：静默截断且错误状态不正确，可能导致自动化任务产生错误结果。
- [Issue #12340](https://github.com/earendil-works/pi/issues/12340)

### 7. Anthropic Claude Team/Enterprise 席位登录失败
- **热度**：3 条评论。
- **重点**：`/login` 在授权阶段因 `Unknown scope` 被拒绝，Team/Enterprise 席位无法完成 OAuth。
- **意义**：影响企业用户接入 Anthropic 模型，也是多提供方登录兼容性中的显著缺口。
- [Issue #12318](https://github.com/earendil-works/pi/issues/12318)

### 8. OpenAI Decisions GA 丢失缓存用量并显示零缓存率
- **热度**：3 条评论。
- **重点**：`parseClassifierUsage()` 将缓存读写计数清零，导致 `usage.cost` 和缓存统计不准确。
- **意义**：会造成成本观测与实际账单脱节，对使用决策分类器进行高频调用的用户尤其重要。
- [Issue #12264](https://github.com/earendil-works/pi/issues/12264)

### 9. 切换 thinking level 会破坏 OpenAI Codex 提示缓存
- **热度**：2 条评论。
- **重点**：会话中途切换思考级别会改变前缀，导致已有提示缓存失效；用户希望在保持语义正确的前提下保留缓存。
- **意义**：该能力与交互式模型控制、响应质量和缓存成本之间存在直接权衡。
- [Issue #12269](https://github.com/earendil-works/pi/issues/12269)

### 10. Anthropic Team/Enterprise 登录之外的 Gemini thinking level 适配缺口
- **重点**：Gemini 4 Hydrogen 已声明支持 `xhigh`，但 Google 适配器拒绝该级别，错误发生在 HTTP 请求发送之前。
- **意义**：说明模型目录与各 provider 能力映射可能不同步；新模型发布后，Pi 容易出现“可见但不可用”的情况。
- [Issue #12184](https://github.com/earendil-works/pi/issues/12184)

---

## 重要 PR 进展

### 1. 修复 OpenAI Codex 系统提示词不可缓存
- 将系统提示词调整到可缓存输入前缀中，针对 GPT-6.2 缓存复用下降问题。
- 对降低 token 成本和提升长会话响应速度具有直接价值。
- [PR #12319](https://github.com/earendil-works/pi/pull/12319)

### 2. 保持 GitHub Copilot 可用模型列表最新
- 修复 `availableModelIds` 未随模型刷新更新的问题，覆盖新上架模型及企业管理员启用的模型。
- 对应 #11006，当前仍为 Open 状态。
- [PR #12325](https://github.com/earendil-works/pi/pull/12325)

### 3. 交互式 reload 时刷新受限模型
- `/reload` 将重新获取 scoped models，使 `enabledModels` 变化立即生效，无需重启；命令行 `--models` 仍保持最高优先级。
- 对应 #12277，当前仍为 Open 状态。
- [PR #12278](https://github.com/earendil-works/pi/pull/12278)

### 4. 修复 GitHub Copilot Responses 工具缺少 strict 模式
- 为 Copilot 的 Responses 模型工具调用发送 `strict` 字段，避免可选参数被自动填充为空字符串等值。
- 对应 #12286。
- [PR #12329](https://github.com/earendil-works/pi/pull/12329)

### 5. GitHub Copilot 上的 Claude 工具也启用 strict 模式
- 让 Pi 内置 `read`、`edit`、`write`、`bash` 等工具在 Copilot Claude 模型上继续使用严格 JSON Schema 约束。
- 对应 #12286 的补充修复。
- [PR #12332](https://github.com/earendil-works/pi/pull/12332)

### 6. 正确处理外部 SIGTSTP 信号
- 外部 `SIGTSTP` 现在与 Ctrl+Z 进入一致处理路径，避免挂起时未恢复终端。
- 修复鼠标追踪和 Kitty 键盘协议残留问题。
- [PR #12283](https://github.com/earendil-works/pi/pull/12283)

### 7. SIGTSTP 监听器严格绑定终端所有权
- 修正首次启动、停止及恢复阶段监听器注册边界，避免 TUI 已不再拥有终端时仍处理信号。
- 属于 SIGTSTP 修复的完善版本。
- [PR #12339](https://github.com/earendil-works/pi/pull/12339)

### 8. 停止 TUI 后退出前刷新 stdout
- 修复 `process.exit()` 丢弃尚未完成的 stdout 写入，防止关闭鼠标追踪、焦点事件、Kitty 键盘协议和 bracketed paste 的终端序列丢失。
- 直接解决 Windows 终端出现乱码回显的问题。
- [PR #12336](https://github.com/earendil-works/pi/pull/12336)

### 9. llama.cpp 决策分类器支持图片输入
- 根据 `architecture.input_modalities` 动态保留图像能力，不再将支持视觉的模型硬编码为纯文本。
- 对应 #12282。
- [PR #12335](https://github.com/earendil-works/pi/pull/12335)

### 10. 修复 `/login` 和 `/logout` 搜索后的选中项
- 搜索过滤后高亮应跳转到最佳匹配项，避免 Enter 打开错误 provider。
- 同时修复方向键、Home/End 移动文本光标时选中项被重置的问题。
- [PR #12246](https://github.com/earendil-works/pi/pull/12246) / [PR #12334](https://github.com/earendil-works/pi/pull/12334)

---

## 功能需求趋势

### 1. 跨平台与终端兼容性
Windows 是当前最明显的社区痛点，需求集中在：

- 明确 Windows 原生、WSL、Git Bash、PowerShell 的支持边界；
- 修复长 RPC 命令截断；
- 完善终端 raw mode、鼠标追踪、Kitty 键盘协议的状态恢复；
- 提升 Shell、路径和剪贴板行为的一致性。

相关讨论：[Issue #7547](https://github.com/earendil-works/pi/issues/7547)、[Issue #12340](https://github.com/earendil-works/pi/issues/12340)、[Issue #12133](https://github.com/earendil-works/pi/issues/12133)

### 2. 提示缓存、费用统计与性能
社区持续关注缓存复用率、服务等级定价和模型目录性能，希望：

- 提高 GPT/Codex 系统提示词缓存复用；
- 支持可配置的缓存预热窗口；
- 在切换 thinking level 时尽量保留缓存；
- 准确统计缓存 token 与实际服务等级价格；
- 避免模型目录重复合并造成二次复杂度。

相关讨论：[Issue #12273](https://github.com/earendil-works/pi/issues/12273)、[Issue #11127](https://github.com/earendil-works/pi/issues/11127)、[Issue #12264](https://github.com/earendil-works/pi/issues/12264)、[Issue #12269](https://github.com/earendil-works/pi/issues/12269)

### 3. 新模型与 Provider 快速适配
社区期待 Pi 能更快支持模型能力变化，包括：

- Gemini `xhigh` 思考级别；
- Qwen `qwen4-max` / `qwen4-max-preview`；
- Copilot 新模型与企业授权变更；
- Anthropic Team/Enterprise OAuth；
- llama.cpp 视觉分类器。

相关讨论：[Issue #12184](https://github.com/earendil-works/pi/issues/12184)、[Issue #12259](https://github.com/earendil-works/pi/issues/12259)、[Issue #11006](https://github.com/earendil-works/pi/issues/11006)、[Issue #12318](https://github.com/earendil-works/pi/issues/12318)、[Issue #12282](https://github.com/earendil-works/pi/issues/12282)

### 4. 扩展生态与开发接口
需求包括：

- 恢复会话时一致恢复 npm 扩展工具；
- 暴露每次消息提交的唯一 admission receipt；
- 为用户消息提供仅显示的 gutter；
- 扩展 API 应能感知消息是否真正进入运行流程。

相关讨论：[Issue #12323](https://github.com/earendil-works/pi/issues/12323)、[Issue #12333](https://github.com/earendil-works/pi/issues/12333)、[Issue #12326](https://github.com/earendil-works/pi/issues/12326)

### 5. IDE 与协议集成
ACP Durable 支持请求虽然标记为 no-action，但仍反映出社区希望通过标准协议将 Pi Durable 接入 JetBrains 等 IDE。

相关讨论：[Issue #10389](https://github.com/earendil-works/pi/issues/10389)

### 6. TUI 可观测性与诊断能力
开发者希望加强：

- 工具执行结束事件携带退出码；
- 长工具错误压缩时保留尾部诊断信息；
- Mermaid 渲染失败时明确说明原因；
- reload 时报告 `settings.json` 解析错误。

相关讨论：[Issue #12288](https://github.com/earendil-works/pi/issues/12288)、[Issue #12341](https://github.com/earendil-works/pi/issues/12341)、[Issue #12324](https://github.com/earendil-works/pi/issues/12324)、[PR #12337](https://github.com/earendil-works/pi/pull/12337)

---

## 开发者关注点

- **稳定性优先于新功能**：今日大量修复集中在终端退出、信号挂起、模型目录、工具 schema 和会话恢复等基础路径。
- **Windows 是首要兼容目标**：Windows 用户希望获得更明确的官方运行指南、更可靠的 Shell/RPC 行为，以及统一的终端清理机制。
- **缓存直接关联实际成本**：用户不仅在意响应速度，更关注缓存命中统计、thinking level 切换后的缓存断裂，以及服务等级定价是否准确。
- **多 Provider 适配容易出现能力漂移**：模型目录、provider 映射、OAuth 权限和工具 schema 能力可能不同步，导致新模型“可见但不可用”。
- **扩展 API 需要更强的事务语义**：工具恢复、消息提交确认和显示定制都要求扩展能够明确区分“提出请求”与“请求被运行时接受”。
- **错误信息必须可诊断**：退出码丢失、压缩后诊断被截断、渲染失败无提示等问题，会显著增加自动化环境中的排障成本。
- **核心修复响应较快**：本期多个高价值问题已有 PR 对应，部分已关闭；尚待合并或继续推进的重点包括 Codex 缓存、Copilot 模型刷新、scoped models reload 与 settings reload 诊断。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
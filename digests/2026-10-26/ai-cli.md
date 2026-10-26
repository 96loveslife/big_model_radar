# AI CLI 工具社区动态日报 2026-10-26

> 生成时间: 2026-10-26 04:09 UTC | 覆盖工具: 8 个

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
**数据日期：2026-10-26｜观察窗口：过去 24 小时**

> 说明：原始日报对 Issues / PR 采用了不同的“更新量”和“展示量”口径。下表统一采用日报中可核实的**当日展示口径**；“—”表示日报未提供准确汇总值，不代表零活动。

## 1. 生态全景

当前 AI CLI 的竞争重心已从“能否生成代码”转向**长任务、权限安全、会话持久化和跨平台可靠性**，主流工具普遍暴露了更新回归、上下文压缩失效、认证链路脆弱及子进程生命周期问题。与此同时，**Agent 编排正成为主战场**，Claude Code、Gemini CLI、Codex 和 Copilot CLI 均围绕 Skills、Subagents、远程任务与 ACP/IDE 集成持续投入，但“终止状态误报成功”和“实际权限与界面不一致”削弱了自动化可信度。

各产品生态已形成清晰分工：Claude Code 偏重自主执行与危险操作治理，Codex 偏重桌面工程入口及模型可靠性，Gemini CLI 聚焦多代理编排，Copilot CLI 强调 ACP 与 GitHub 企业生态，OpenCode 聚焦开放模型与桌面体验，Pi 和 jcode 则更重视底层会话、Provider 兼容和可嵌入性。今日整体没有集中发布新版本，说明社区主要处于**修复上一轮快速迭代所暴露的生产级问题**阶段。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | Release | 当日活跃度与主要方向 |
|---|---:|---:|---|---|
| **Claude Code** | 至少 10 条热点 | 1 条更新 | 无 | 认证/OAuth、Shell 兼容、危险操作与进程终止 |
| **OpenAI Codex** | 50 条更新，展示 30 条 | 0 | 无 | Windows 更新链路、会话恢复、长任务可靠性、权限一致性 |
| **Gemini CLI** | 至少 10 条热点 | 至少 10 条重要 PR | 无 | Subagent 状态语义、配置继承、取消、跨平台修复 |
| **GitHub Copilot CLI** | 至少 10 条热点 | 0 | 无 | 1.0.103 内存与锁回归、ACP、企业认证与配额 |
| **OpenCode** | 至少 11 条免费额度相关 Issue，另有数据库/OAuth 等 | 至少 10 条重要 PR | 无 | 免费额度异常、桌面端稳定性、内存治理、数据库并发 |
| **jcode** | 5 条更新 | 至少 10 条重要 PR | 无 | Shell 安全检测、多会话隔离、tmux、测试覆盖 |
| **Pi** | 至少 10 条热点 | 9 条 PR 更新 | 无 | 上下文压缩、MCP 安全、Provider 兼容、会话权限 |
| **Kimi Code CLI** | 0 | 0 | 无 | 过去 24 小时无活动 |

### 活跃度解读

- **Codex** 的可见 Issue 更新量最高，达到 50 条，但主要集中于 Windows 桌面端升级回归，并非全面功能扩张。
- **Gemini CLI、OpenCode、jcode** 的 PR 密度最高，体现较强的持续修复和工程化迭代。
- **Claude Code** 与 **Copilot CLI** 的热点数量相近，但前者偏向自主执行安全，后者偏向长会话稳定性、企业身份和协议一致性。
- 八个工具均无新版本，说明当日主要工作发生在问题定位、补丁准备和社区需求收敛阶段。

---

## 3. 共同关注的功能方向

### 3.1 Agent 必须提供可信的完成状态

- **Gemini CLI**：Subagent 达到 `MAX_TURNS` 后仍报告 `status: success` / `GOAL`；Generalist Agent 可能无限挂起。
- **Codex**：长任务在没有产物或验证结果时仍可能宣告完成，并缺少重复失败的熔断机制。
- **OpenCode**：子代理执行成功后，导出的消息和 `outcome` 却为空。
- **Claude Code**：停止后子进程继续运行，甚至破坏性命令持续执行。
- **jcode**：危险的 `sleep 1 & rm -rf ~` 被风险检测误判为 Safe。

**共同诉求：** 工具需要区分成功、达到轮次上限、取消、挂起、异常退出和策略拦截；完成前应验证目标产物，危险命令则应按真实 Shell 语义阻断。

### 3.2 权限界面必须与实际执行环境一致

- **Claude Code**：停止操作未覆盖完整进程树，出现项目误删报告。
- **Codex**：选择 Full access 后仍可能以 workspace-write 沙箱启动；Windows 沙箱进程缺失 `SYSTEMROOT`。
- **Copilot CLI**：Windows 管理员会话创建锁文件后，普通权限会话无法启动 MCP Server。
- **jcode**：单 daemon 多会话时，工具子进程继承共享环境变量，可能泄漏凭据。
- **Pi**：会话 JSONL 默认以 `0644` 创建，可能暴露提示词、源码和工具输出。

**共同诉求：** 权限需要从“界面选择”贯通到沙箱、环境变量、子进程、文件系统及跨会话边界，并对危险操作实施可验证的确认和撤销机制。

### 3.3 上下文压缩与长会话资源管理

- **Claude Code**：Cloud 会话压缩后仅数次调用便再次耗尽上下文。
- **Codex**：本地线程升级后无法恢复，dot 与 CLI 的会话格式兼容性不足。
- **Gemini CLI**：工具过多可能触发 API 400，宽泛读取导致上下文膨胀。
- **Copilot CLI**：长会话物理内存增长至 **37.3 GiB**，伴随 **1.33 亿次分配**和 session lock 超时。
- **OpenCode**：重复加载完整 transcript，heap snapshot 残留 **117 MB** 消息历史及 Base64 截图。
- **Pi**：上下文溢出未被识别，压缩摘要中的文件列表无界增长。
- **jcode**：请求支持按会话独立设置上下文上限。

**共同诉求：** 压缩需要可观测、可恢复且按会话隔离；工具应动态裁剪、历史只加载一次，并防止图片、摘要和失败重试长期驻留内存。

### 3.4 身份认证、OAuth 与企业策略稳定性

- **Claude Code**：OAuth `state` 丢失、CAPTCHA 后失败、Magic Link 权限错误、浏览器验证失败。
- **Codex**：Windows Store 更新与运行时迁移失败，旧 MSIX 资源锁定。
- **Copilot CLI**：Entra Broker 并发登录冲突、令牌缓存为空、企业策略刷新失败。
- **OpenCode**：Service Worker 拦截 OAuth 回调，认证过期后形成重试循环。

**共同诉求：** 登录流程应具备明确的回调状态机、超时、取消、令牌持久化和并发控制，并保证 CLI、Desktop、Web 对相同账户状态给出一致结果。

### 3.5 IDE、桌面端与远程任务环境

- **Codex**：VS Code UI 初始化、Remote-SSH webview、无头 Linux 接入。
- **Gemini CLI**：Wayland Browser Agent、VS Code Disposable 泄漏、Windows 路径。
- **Copilot CLI**：ACP 中途 steering、用量更新、会话重命名。
- **Claude Code**：Remote Control 无人值守、VS Code Webview 内存溢出、Desktop 任务计划遮挡。
- **OpenCode**：桌面版与 CLI 行为不一致、Windows 安装包内 CLI 不可发现。

**共同诉求：** 主流入口正从纯终端扩展到 IDE、Desktop、Web、远程服务器和无头设备；用户要求这些入口共享一致的能力、状态和权限模型。

### 3.6 可观测性、成本与配额透明化

- **Codex**：需要分层诊断推理、网络、上下文构建、权限检查及重试延迟。
- **Copilot CLI**：ACP 不发送 `usage_update`，并关注约 **40k token** 固定上下文和 PRU 异常消耗。
- **OpenCode**：免费额度耗尽、重置窗口不透明，桌面端和 CLI 显示不一致。
- **Gemini CLI**：`/bug` 缺少 Subagent 轨迹。
- **Pi**：MCP HTTP JSON 与 SSE 的大小限制行为不一致。

**共同诉求：** 代理需要公开上下文预算、token/额度消耗、终止原因、子代理轨迹和错误分类，才能进入可审计的 CI 或企业工作流。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 主要目标用户 | 技术路线与竞争壁垒 |
|---|---|---|---|
| **Claude Code** | 自主编码、Shell 执行、Remote Control、危险操作治理 | 高权限工程代理用户、复杂代码库任务 | 模型驱动的自主执行能力强；当前短板集中在 OAuth、Shell 一致性及安全边界 |
| **OpenAI Codex** | CLI、Windows Desktop、VS Code、远程任务、Computer Use | 桌面开发、IDE 和长任务工程用户 | 桌面端与多入口布局完整，模型生态强；Windows 更新、会话恢复和完成可信度是主要风险 |
| **Gemini CLI** | Subagents、Skills、Browser Agent、AST/代码库探索 | 多代理实验、代码库理解和 Google 生态用户 | 多代理和工具工程投入最密集；核心挑战是状态语义、配置继承和可观测性 |
| **GitHub Copilot CLI** | ACP、GitHub/Entra/MCP、企业身份与配额 | GitHub 企业用户、Zed 等 ACP 客户端、自动化团队 | GitHub 生态与 ACP 是差异化入口；当前受长会话资源问题和企业认证拖累 |
| **OpenCode** | 开放模型、Desktop/Web/CLI、免费额度、本地数据库 | 注重模型自由度和桌面交互的个人开发者 | 开放、多端、本地优先；免费额度服务端异常和多端一致性是主要摩擦 |
| **jcode** | Shell 风险检测、tmux/TUI、Harness、多会话 | 终端重度用户、Agent 嵌入开发者 | 对终端与 Shell 细节控制深入，安全修复速度快；生态和规模相对较小 |
| **Pi** | 可嵌入运行时、Provider 适配、扩展、MCP、上下文生命周期 | 喜欢自建 Agent 栈的开发者、研究者 | Provider 兼容与可编程性突出；安全默认值、长会话和协议边界仍需加固 |
| **Kimi Code CLI** | 今日无可见活动 | — | 当前缺乏社区活动信号，难以判断其产品节奏和生态成熟度 |

### 定位差异总结

- **最强自主执行品牌**：Claude Code，但安全护栏和认证稳定性必须同步提升。
- **最完整的桌面工程入口布局**：Codex，但 Windows 升级质量控制明显落后于功能扩张。
- **最积极的多代理建设**：Gemini CLI；PR 数量与 Subagent 议题密度均领先。
- **最强企业协议与生态延伸**：Copilot CLI，ACP 是核心差异点，但企业身份和资源管理尚未稳定。
- **最开放和本地优先**：OpenCode，服务端免费额度成为其当前最大单点故障。
- **最贴近终端与嵌入式场景**：jcode 和 Pi；前者偏终端工程，后者偏可编程 Agent Runtime。

---

## 5. 社区热度与成熟度

### 社区热度

1. **Codex**：50 条 Issue 更新、30 条热点展示，原始互动量最高；[#28969](https://github.com/openai/codex/issues/28969) 获 **217 赞、98 评论**。
2. **Claude Code**：至少 10 条高相关热点；Shell 继承 Issue 达 **131 赞、40 评论**，认证问题又覆盖 OAuth、CAPTCHA、Magic Link 多条链路。
3. **Copilot CLI**：至少 10 条热点；1.0.103 的 **37.3 GiB** 内存问题使发布回归成为焦点。
4. **Gemini CLI**：至少 10 条热点及高密度 PR；虽无单条极高互动，但产品讨论面广、工程响应积极。
5. **OpenCode**：至少 11 条免费额度相关 Issue，另有多条数据库、OAuth、导出问题；服务端故障形成聚集效应。
6. **Pi**：至少 10 条热点、9 条 PR；XDG 配置 Issue 获 **69 赞、25 评论**，安全与 Provider 兼容讨论较成熟。
7. **jcode**：仅 5 条 Issue，但围绕具体问题快速形成多项 PR，属于小而集中的社区。
8. **Kimi Code CLI**：无活动，当前社区信号最弱。

### 成熟度判断

- **成熟度较高但稳定性承压**：Codex、Claude Code、Copilot CLI。功能面广、企业用户多，但升级回归、认证和长会话问题暴露出生产化仍不充分。
- **快速工程化迭代中**：Gemini CLI、OpenCode。PR 活跃、方向清晰，但多个跨模块一致性问题尚在暴露。
- **底层能力趋于专业化**：Pi、jcode。规模较小，但对 Shell、Provider、MCP、会话隔离等底层问题关注深入。
- **社区可见度不足**：Kimi Code CLI。

---

## 6. 值得关注的趋势信号

### 6.1 Agent CLI 正从“模型客户端”演变为“运行时操作系统”

工具需要管理的已不只是对话，而是：

- 完整进程树及后台任务；
- 文件系统权限和临时工作区；
- Shell、PATH、重定向及平台语义；
- MCP Server、OAuth 与企业身份；
- 会话状态、压缩、缓存和跨版本迁移。

这意味着下一阶段的差异化不只是模型能力，而是**运行时治理能力**。

### 6.2 “状态一致”正在取代“功能是否存在”

典型表现包括：按钮显示 Full access 但沙箱未生效、`/rename` 返回成功但未执行、子代理显示 GOAL 但实际未完成、桌面端与 CLI 额度状态不同。决策者和采购方应将以下项目纳入验收：

- 操作结果可验证；
- 状态码与真实执行一致；
- 客户端、服务端和协议端同步；
- 失败可取消、可恢复、可诊断。

### 6.3 自动化的主要瓶颈已从推理成本转向上下文与状态成本

37.3 GiB 内存膨胀、重复加载 transcript、压缩后摘要再次膨胀、工具 schema 触发 API 400、固定上下文占用大量 token，说明长任务的瓶颈越来越常来自**上下文管理、工具定义和会话存储**，而非模型本身。

评估产品时应重点测试：长会话内存斜率、压缩成功率、恢复能力、历史读取复杂度及多进程一致性。

### 6.4 安全护栏必须按真实系统语义实现

`&` 后台执行漏判、停止后子进程继续运行、权限继承跨会话泄漏、会话文件 `0644`、MCP 大小限制在 HTTP JSON 路径失效，说明仅依赖模型判断或字符串级命令拆分已经不足。下一代安全机制需要结合：

- Shell AST 或等价解析；
- 进程组/作业树管理；
- 文件权限和路径归一化；
- 协议层输入限制；
- 会话级凭证与环境隔离。

### 6.5 Windows 已成为桌面 Agent 的共同短板

Codex 出现 MSIX 锁定、运行时迁移、环境变量缺失和任务栏回归；Copilot CLI 出现权限级锁文件和 Entra 令牌问题；Gemini CLI 与 Claude Code 也存在 Windows 路径和转义缺陷。跨平台 Agent 产品不能只把 Windows 当作 CI 平台，而应建立独立发布通道、升级回滚矩阵和真实桌面回归测试。

### 6.6 协议化入口将加速，但协议一致性仍是瓶颈

ACP、Remote Control、VS Code、Web 和 Desktop 都在成为 Agent 的标准入口。随着入口增多，“同名命令行为不同”“交互模式有状态而 headless 模式没有”“重命名成功但未生效”会越来越普遍。建议构建**跨入口共享契约测试**，覆盖权限、取消、完成状态、用量、错误结构、会话命名和恢复。

### 6.7 快速发布正在积累信任成本

Copilot CLI 的 1.0.103 回归、Codex 的升级后启动失败，以及社区提出 Stable 发布渠道，表明仅依赖最新版快速迭代已难以满足企业生产环境。较合理的发展方向是：

- Stable / Beta / Nightly 分层；
- 自动更新前执行迁移与回滚检查；
- 长会话、跨权限和跨版本回归测试；
- 明确区分“已合入、已打包、已发布、已修复”。

---

## 结论

2026-10-26 的生态信号非常一致：AI CLI 已进入**生产可靠性竞争阶段**。短期最有价值的能力不是再增加一个命令，而是确保代理在长任务、权限、认证、上下文压缩和跨端迁移时仍然**可控、可停止、可验证、可恢复**。

对技术决策者而言，建议优先考察四项指标：

1. **停止与取消是否覆盖完整进程树；**
2. **权限选择是否真实贯通到沙箱和文件系统；**
3. **长会话是否保持稳定的内存、上下文和成本曲线；**
4. **升级后能否恢复既有会话并保持跨客户端行为一致。**

从当日工程响应看，**Gemini CLI 和 OpenCode 的修复密度最高，Codex 与 Claude Code 的社区规模最大，Copilot CLI 的企业协议价值最突出，而 Pi 与 jcode 在底层运行时能力上最值得关注**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-10-26**  
> 说明：所给 PR 列表未提供实际评论数，且多数条目标记为“评论: undefined、点赞: 0”。因此，下文以 **Issue 评论热度、PR 持续更新时间和功能代表性** 衡量关注度，不将“按评论数排序”误解为 PR 的真实讨论量。

## 1. 热门 Skills 排行

### 1. `mcp-builder`
**功能：** 构建、连接和评估 MCP 服务，包括 HTTP 传输客户端与自定义请求头。  
**社区热点：**
- MCP SDK 2.x 将 `streamablehttp_client` 更名为 `streamable_http_client`，现有示例和调用方式失效。
- 自定义 HTTP Header 的配置接口发生变化。
- 评测脚本对真实 MCP 服务的 `TextContent` 处理错误，可能把正常响应伪装成工具错误，导致 **0/N**。
- 相关问题横跨“能否调用”“能否评测”和“能否稳定复现”，说明 MCP Builder 正从脚手架工具走向完整工程链路。

**当前状态：** Open  
- [修复 MCP 2.x Streamable HTTP 客户端兼容性 #1742](https://github.com/anthropics/skills/pull/1742)
- [修复真实 MCP 服务评测为 0/N #1390](https://github.com/anthropics/skills/issues/1390)

### 2. `skill-creator`
**功能：** 创建、验证、打包和评估 Skills，是整个生态的元基础设施。  
**社区热点：**
- 触发词评测出现 **0% trigger rate**，直接影响 Skill 是否能被 Claude 正确调用。
- Windows 环境下子进程管道选择失败，并存在运行时异常被误判为“非触发”的问题。
- YAML frontmatter 手工解析不完整，含引号、续行或转义字符时，评测元数据会偏离真实配置。
- 打包脚本不能独立执行，文档路径也已过时。
- 评估查看器存在属性上下文 XSS 和 HTML 转义不一致问题。

**当前状态：** 多个修复 PR Open，核心 Issue 仍开放  
- [隔离触发评测并处理 Windows/运行时异常 #1298](https://github.com/anthropics/skills/pull/1298)
- [修复 frontmatter YAML 标量解析 #1997](https://github.com/anthropics/skills/pull/1997)
- [支持直接执行 package_skill.py #1681](https://github.com/anthropics/skills/pull/1681)
- [修复 0% 触发率 #556](https://github.com/anthropics/skills/issues/556)
- [修复评估器 XSS #1394](https://github.com/anthropics/skills/issues/1394)

### 3. `webapp-testing`
**功能：** 启动本地 Web 服务、发现页面元素并执行浏览器自动化测试。  
**社区热点：**
- `with_server.py` 使用 `shell=True` 启动服务，存在命令注入风险。
- 元素发现逻辑把 `<textarea>` 和 `<select>` 错误识别为普通文本输入框，导致测试选择器和交互结果失真。
- 社区诉求不只是“自动截图”，而是向安全、可验证的端到端测试代理演进。

**当前状态：** Open  
- [移除 with_server.py 中的 shell=True #1980](https://github.com/anthropics/skills/pull/1980)
- [正确报告 textarea 与 select 元素 #1976](https://github.com/anthropics/skills/pull/1976)

### 4. `docx`
**功能：** 创建、修改、合并和验收 Word 文档。  
**社区热点：**
- LibreOffice 超时会被误报为成功。
- 合并 run 时删除局部命名空间声明，可能生成 XML 前缀未绑定的无效 DOCX。
- 修订标记是否真正清除、输出文件是否可打开，正成为比“脚本未报错”更严格的验收标准。

**当前状态：** Open  
- [超时按错误处理并验证修订标记 #1792](https://github.com/anthropics/skills/pull/1792)
- [修复 merge_runs.py 产生无效 XML #2018](https://github.com/anthropics/skills/issues/2018)

### 5. `claude-api`
**功能：** 提供 Claude API、工具调用和平台使用指导。  
**社区热点：**
- 该 Skill 可能一次注入约 **156K tokens**，挤占甚至耗尽上下文窗口。
- 文档中存在失效链接，需要建立内容版本化和链接巡检机制。
- 社区期待它从“大而全参考手册”转向“按任务渐进加载”的上下文友好型 Skill。

**当前状态：** Open  
- [修复 Academy 与工具调用文档中的失效链接 #1730](https://github.com/anthropics/skills/pull/1730)
- [修复 Skill 一次注入约 156K tokens #1487](https://github.com/anthropics/skills/issues/1487)

### 6. `document-typography`
**功能：** 检查 AI 生成文档中的孤行、寡行、标题悬挂和编号错位等问题。  
**社区热点：**
- 用户通常不会主动要求“排版质检”，但几乎所有生成文档都可能出现此类问题。
- 价值点在于把低频但普遍的视觉质量问题转化为自动、可重复的验收规则。
- 需求从“生成文档”进一步延伸到“生成后自动质量控制”。

**当前状态：** Open  
- [新增文档排版质量控制 Skill #514](https://github.com/anthropics/skills/pull/514)

### 7. `mcp-builder` 之外的 `skill-quality-analyzer` / `skill-security-analyzer`
**功能：** 从结构、文档、测试、描述质量及安全风险等维度审查 Skill。  
**社区热点：**
- 社区正在从“如何创建 Skill”转向“如何验证、评分和安全审计 Skill”。
- 与 Issue #492 的官方命名空间信任边界问题相呼应：质量分析、安全分析和来源认证应成为发布流程的一部分。

**当前状态：** Open  
- [新增 Skill 质量与安全分析器 #83](https://github.com/anthropics/skills/pull/83)
- [社区 Skill 冒用 anthropic 命名空间的问题 #492](https://github.com/anthropics/skills/issues/492)

### 8. `frontend-design`
**功能：** 指导 Claude 生成更清晰、具体、可执行的前端设计结果。  
**社区热点：**
- 社区关注点从“提供设计原则”转向“每个指令能否在单次会话中可靠执行”。
- 体现 Skill 内容工程原则：少讲概念，多给可验证步骤、检查点和输出约束。

**当前状态：** Open  
- [提升 frontend-design 的清晰度与可执行性 #210](https://github.com/anthropics/skills/pull/210)

---

## 2. 社区需求趋势

### 2.1 企业级组织共享与治理
用户希望支持组织级 Skill 库、权限控制、审计记录和统一分发，而不是通过 Slack/Teams 发送 `.skill` 文件再手工上传。

- [Enable org-wide skill sharing in Claude.ai #228](https://github.com/anthropics/skills/issues/228)
- [Agent Governance Skill 提案 #412](https://github.com/anthropics/skills/issues/412)

### 2.2 来源认证、命名空间与安全边界
社区最强烈的安全诉求是防止社区贡献伪装成官方 `anthropic/` Skill，并要求发布前具备自动安全扫描能力。

- [社区 Skill 冒用官方命名空间 #492](https://github.com/anthropics/skills/issues/492)
- [Skill 质量与安全分析器 #83](https://github.com/anthropics/skills/pull/83)

### 2.3 面向完整任务生命周期的质量门禁
热门提案采用“执行前校准 → 对抗式审查 → 交付前验证”的三阶段流程，覆盖 Agent 产出质量的多个失效点。

- [Reasoning Quality Gate Pipeline 提案 #1385](https://github.com/anthropics/skills/issues/1385)

### 2.4 可测试、可验证的 Skill 工具链
社区需要的不只是 Skill 内容，还包括：
- 稳定、跨平台的触发评测；
- 可重复的测试环境；
- 明确的成功/失败判定；
- 安全启动外部服务；
- 对 XML、文件格式、渲染结果进行产物级验收。

相关方向集中在 `skill-creator`、`webapp-testing` 和 `docx` 的修复中。

### 2.5 上下文压缩与长期记忆
`compact-memory` 提案希望用符号化、结构化表示替代冗长自然语言笔记，降低长期运行 Agent 的上下文消耗。

- [提出 compact-memory Skill #1329](https://github.com/anthropics/skills/issues/1329)
- [claude-api 上下文膨胀问题 #1487](https://github.com/anthropics/skills/issues/1487)

### 2.6 专业领域自动化
热点方向包括：
- Notion 规格到实现计划及任务拆分；
- HPC 集群与 Slurm 作业操作；
- 智能合约静态分析及审计证明；
- Markdown 到视频、语音与演示文稿的自动转换；
- 文档排版、ODT、PDF 和 DOCX 等专业格式处理。

相关 PR：
- [Notion 规格转实现与定量履约审计 #1245](https://github.com/anthropics/skills/pull/1245)
- [SCNet HPC Skill #1615](https://github.com/anthropics/skills/pull/1615)
- [ProofCore 智能合约审计 Skill #1771](https://github.com/anthropics/skills/pull/1771)
- [Markdown 转视频与音频 Skill #1703](https://github.com/anthropics/skills/pull/1703)

---

## 3. 高潜力待合并 Skills

> 由于 PR 实际评论数缺失，这里以功能覆盖面、Issue 关联、持续维护活跃度及近期更新判断近期落地潜力。

| 优先级 | Skill / PR | 潜力判断 | 当前状态 |
|---|---|---|---|
| 高 | [mcp-builder：MCP 2.x 兼容修复 #1742](https://github.com/anthropics/skills/pull/1742) | 直接解决新版 SDK 破坏性变更，影响现有 MCP 工作流的可用性 | Open |
| 高 | [skill-creator：触发评测隔离及跨平台修复 #1298](https://github.com/anthropics/skills/pull/1298) | 直接关联高热度 0% 触发率 Issue，影响 Skill 开发与评测链路 | Open |
| 高 | [skill-creator：YAML frontmatter 解析修复 #1997](https://github.com/anthropics/skills/pull/1997) | 修复元数据失真，规模小、收益明确，适合快速合入 | Open |
| 高 | [webapp-testing：移除 shell=True #1980](https://github.com/anthropics/skills/pull/1980) | 关闭命令注入风险，安全类修复通常具有较高合入优先级 | Open |
| 高 | [docx：超时与修订标记验收 #1792](https://github.com/anthropics/skills/pull/1792) | 将“执行成功”升级为“产物验证成功”，实用性强 | Open |
| 中 | [webapp-testing：正确识别 textarea/select #1976](https://github.com/anthropics/skills/pull/1976) | 范围明确，可快速改善浏览器测试准确性 | Open |
| 中 | [package_skill.py 直接执行与路径更新 #1681](https://github.com/anthropics/skills/pull/1681) | 改善最常用的打包工作流，降低使用门槛 | Open |
| 中 | [claude-api：失效链接修复 #1730](https://github.com/anthropics/skills/pull/1730) | 内容维护成本低，可快速提升文档可靠性 | Open |
| 中 | [algorithmic-art：修复负数 wrapAround #1977](https://github.com/anthropics/skills/pull/1977) | 已关联明确 Issue，边界清晰，适合快速合入 | Open |
| 中 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | 适用面广，能系统性改善生成文档质量 | Open |
| 中 | [Notion 规格转实现 #1245](https://github.com/anthropics/skills/pull/1245) | 与项目管理、规格执行和企业协作场景高度相关 | Open |
| 中 | [SCNet HPC #1615](https://github.com/anthropics/skills/pull/1615) | 填补科研计算集群操作空白，专业用户价值明确 | Open |

**补充观察：** `pyxel`、`ODT`、`ProofCore` 等垂直领域 Skill 同样具有明确用户群，但相较之下，市场覆盖面和社区紧迫性暂低于 Skill 核心工具链、安全治理与 MCP 兼容性修复。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是建设一套可发现、可信、可共享、可评测且能产出可验证结果的标准 Skill 生态。**

换言之，热点已从“增加更多 Skill”转向三个更高层的问题：

1. **信任与治理：** 官方身份、命名空间、安全扫描和组织分发必须统一。  
2. **可靠性工程：** 触发、评测、跨平台执行和产物验收需要稳定可靠。  
3. **生产级工作流：** 用户期待 Skill 能覆盖从规格、执行、审查到交付验收的完整闭环，而不是仅提供一次性提示词。

### 相关核心链接

- [热门 Issue：官方命名空间信任边界滥用 #492](https://github.com/anthropics/skills/issues/492)
- [热门 Issue：组织级 Skill 共享 #228](https://github.com/anthropics/skills/issues/228)
- [热门 Issue：评测触发率为 0% #556](https://github.com/anthropics/skills/issues/556)
- [热门 PR：MCP Builder 兼容性修复 #1742](https://github.com/anthropics/skills/pull/1742)
- [热门 PR：Skill Creator 跨平台评测修复 #1298](https://github.com/anthropics/skills/pull/1298)
- [热门 PR：Webapp Testing 安全修复 #1980](https://github.com/anthropics/skills/pull/1980)

---

# Claude Code 社区动态日报

**日期：2026-10-26**  
**数据范围：anthropics/claude-code 过去 24 小时更新**

## 今日速览

过去 24 小时没有新版本发布，开发者讨论主要集中在**登录与 OAuth 稳定性**、**危险操作与进程终止安全**、以及**模型降级/误拦截**三个方向。Windows 与 macOS 用户的跨平台问题较集中，同时社区继续推动 Shell 配置、Remote Control 无人值守和任务计划 UI 等能力改进。

## 社区热点 Issues

### 1. Bash 工具支持自定义或继承 Shell
[#7490](https://github.com/anthropics/claude-code/issues/7490)

- **内容**：允许用户配置 Bash 工具所使用的 Shell，或继承初始 Shell。
- **重要性**：直接影响 Claude Code 与不同终端环境、登录 Shell、PATH 及配置继承的兼容性。
- **社区反应**：**40 条评论、131 个赞**，是本轮最热 Issue。

### 2. Linux/IntelliJ OAuth 登录循环，state 参数在重定向后丢失
[#77966](https://github.com/anthropics/claude-code/issues/77966)

- **内容**：用户重新登录后，OAuth 流程因 `state` 参数丢失而反复跳转。
- **重要性**：OAuth 状态校验属于安全边界，异常可能导致登录不可用或会话校验失效。
- **社区反应**：**30 条评论、16 个赞**，属于高热度存量问题。

### 3. macOS CAPTCHA 后登录失败
[#103056](https://github.com/anthropics/claude-code/issues/103056)

- **内容**：CLI 与 Desktop `/login` 在 CAPTCHA 后提示 “Couldn't complete sign-in”，且没有生成重定向或授权码。
- **重要性**：与当日多个浏览器验证、OAuth 回调失败报告相互印证，可能属于系统性认证问题。
- **社区反应**：**8 条评论、2 个赞**。

### 4. Gmail Connector 改写正文中的 URL
[#94247](https://github.com/anthropics/claude-code/issues/94247)

- **内容**：通过 Gmail Connector 创建或更新草稿时，正文中的 URL 和裸域名会被转换为 `google.com/url` 重定向链接。
- **重要性**：可能破坏邮件签名、链接追踪、格式和内容可读性，属于集成层的意外数据改写。
- **社区反应**：**8 条评论、7 个赞**。

### 5. macOS/Linux `verify_magic_link` 权限错误
[#103625](https://github.com/anthropics/claude-code/issues/103625)

- **内容**：Magic link 验证阶段返回 `permission_error` / `sign_in_not_permitted`。
- **重要性**：邮件登录链路是 CLI、Desktop 和远程工作流的重要入口，跨 macOS/Linux 出现说明问题不限于单一平台。
- **社区反应**：**6 条评论**。

### 6. Desktop 浏览器验证失败，Google 与邮件路径均受影响
[#103788](https://github.com/anthropics/claude-code/issues/103788)

- **内容**：macOS Desktop 登录提示 “We couldn't verify your browser”；Google 路径持续失败，邮件路径在出口 IP 变化后曾短暂通过。
- **重要性**：出口 IP 影响表现指向风控、代理或浏览器环境识别问题，可能与前述 OAuth 故障同源。
- **社区反应**：**6 条评论、2 个赞**。

### 7. `TaskStop` 未终止完整进程树
[#85200](https://github.com/anthropics/claude-code/issues/85200)

- **内容**：停止 Claude Code 后，子进程仍继续运行；报告中的 `rm -rf` 在停止后仍持续约 20 分钟并造成数据损失。
- **重要性**：这是本轮最严重的安全主题之一。Claude Code 的“停止”语义若不能覆盖进程树，后台命令可能绕过用户中止意图。
- **社区反应**：**6 条评论**；关注度虽不算最高，但风险等级突出。

### 8. Claude Code 意外删除整个项目
[#104848](https://github.com/anthropics/claude-code/issues/104848)

- **内容**：用户报告项目被不可恢复地删除，并称外部线上应用也受到影响。
- **重要性**：涉及数据丢失、生产影响及支持流程，是高风险行为报告，也提高了对权限确认和破坏性操作防护的关注。
- **社区反应**：Issue 为高优先级、数据丢失标签，但目前仅 **1 条评论**。

### 9. Windows Bash 工具吞掉反斜杠对
[#100063](https://github.com/anthropics/claude-code/issues/100063)

- **内容**：Windows 下由 Git Bash 执行命令时，成对反斜杠在进入 Bash 前被减半；heredoc 和单引号内容同样受影响。
- **重要性**：会改变路径、正则和转义语义，可能造成命令执行结果与用户预期不一致。
- **社区反应**：**4 条评论、2 个赞**，已有可复现步骤。

### 10. Cloud 会话自动压缩后迅速再次耗尽上下文
[#105086](https://github.com/anthropics/claude-code/issues/105086)

- **内容**：Claude Code Cloud 在约 15 次工具调用后开始压缩，但仅隔 3–4 次调用就再次报告上下文已满。
- **重要性**：直接影响大型代码库任务的可执行性，可能造成云端会话循环失败。
- **社区反应**：新近报告，当前 **1 条评论**。

## 重要 PR 进展

过去 24 小时仅更新了 **1 个 PR**，没有足够的新 PR 可列出 10 项。

### `plugin-dev` 文档：澄清 Skill 命名规则
[#29757](https://github.com/anthropics/claude-code/pull/29757)

- **内容**：将 Skill 开发指南中的 frontmatter 示例改为小写、连字符命名，并说明 Skill 名称应与 kebab-case 目录标识一致。
- **状态**：已关闭。
- **价值**：通过示例和审查清单减少 Skill 名称与目录不一致的问题，属于文档规范强化。

## 功能需求趋势

1. **认证与会话可靠性**
   - OAuth `state` 丢失、浏览器验证失败、CAPTCHA 后失败、Magic Link 权限错误成为当日最集中的问题。
   - 社区期待更清晰的错误定位、跨浏览器及代理/IP 环境的兼容，以及可恢复的登录流程。

2. **Shell 与执行环境控制**
   - [#7490](https://github.com/anthropics/claude-code/issues/7490) 强调自定义或继承 Shell 的重要性。
   - Windows Bash 转义问题则表明执行命令在不同 Shell 和平台间仍缺乏一致语义。

3. **无人值守与远程控制**
   - [Remote Control 无人值守认证](https://github.com/anthropics/claude-code/issues/92127) 面向服务器、容器和常驻 Agent 场景。
   - [Remote Control 下仍应用问题超时](https://github.com/anthropics/claude-code/issues/104566) 反映用户希望长时间任务不被交互式提问长期阻塞。

4. **危险操作防护与进程生命周期**
   - [完整进程树终止](https://github.com/anthropics/claude-code/issues/85200)、[批量破坏性操作](https://github.com/anthropics/claude-code/issues/105046) 和 [项目误删](https://github.com/anthropics/claude-code/issues/104848) 表明开发者高度关注权限边界、确认机制和“停止”操作的强保证。

5. **IDE、Desktop 与 Web 体验**
   - VS Code Webview 内存溢出：[ #97044](https://github.com/anthropics/claude-code/issues/97044)
   - Desktop 任务计划块固定遮挡对话：[ #104283](https://github.com/anthropics/claude-code/issues/104283)
   - Cloud 侧边栏手动分组排序：[ #105118](https://github.com/anthropics/claude-code/issues/105118)
   - Windows 客户端 Alt+Tab 失效：[ #94291](https://github.com/anthropics/claude-code/issues/94291)

6. **模型质量与安全机制可解释性**
   - 社区报告 Opus 5.5 被静默降级至 Opus 5，以及安全机制误报普通消息。
   - 需求重点是减少假阳性，并提供更明确的模型切换、拦截原因和恢复方式。

## 开发者关注点

- **登录链路是最突出的日常阻塞点**：多个 Issue 显示，普通 Chrome 配置失败但无痕窗口可用，或 CAPTCHA、Magic Link、OAuth 回调在不同环节失败。
- **“停止”必须真正停止所有子进程**：开发者开始系统审视进程树、后台任务和破坏性命令，而不只关注模型是否停止输出。
- **权限确认需要覆盖批量与延迟执行**：一次确认应严格限定操作范围，不能自然扩展为批量删除或跨会话生效。
- **Windows 兼容性仍是薄弱环节**：涉及 Bash 转义、ANSI 鼠标序列、VS Code Webview 崩溃、Desktop 快捷键和快速模式继承。
- **长上下文与云端会话稳定性有待改善**：自动压缩过早失效会明显拖慢大型代码库分析，并增加模型调用成本。
- **MCP 参数序列化需要更严格**：空字符串被生成为非法 JSON 值 token 的问题 [#104954](https://github.com/anthropics/claude-code/issues/104954)，说明工具协议边界仍需加强验证。
- **沙箱排除规则可能未覆盖参数路径**：`git clone` 在绝对路径或父目录逃逸路径下仍进入沙箱 [#105119](https://github.com/anthropics/claude-code/issues/105119)，开发者需要更可预测的路径归一化与命令匹配机制。
- **成本与模型选择需要更透明**：用量消耗回归、快速模式跨会话继承，以及静默模型降级，均增加了预算和结果一致性的不确定性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-26**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新；共 50 条 Issue 更新，展示其中评论数最多的 30 条**

## 今日速览

- 过去 24 小时没有新版本发布或 Pull Request 提交，动态主要集中在 Windows 桌面端更新链路、VS Code 扩展初始化以及会话恢复失败等问题。
- 模型与任务可靠性成为另一条主线：社区集中反馈 GPT-6.1 的提示误判、目标理解偏差、长任务延迟，以及在缺少验证和熔断机制时过早宣告完成。
- 高热度需求主要集中在交互控制、远程任务环境、权限可靠性与长任务稳定性，其中“取消问题 60 秒后自动处理”的配置需求获得 **217 个点赞、98 条评论**。

## 社区热点 Issues

### 1. 支持关闭问题在 60 秒后的自动处理

- **Issue**：[#28969 — Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)
- Codex CLI 0.141.0 用户希望配置问题未在 60 秒内响应时不要自动选择默认答案。
- 该问题获得 **217 个点赞、98 条评论**，是当日社区互动最密集的议题。
- **重要性：** 直接影响无人值守任务的行为可控性；默认自动决策可能掩盖真实失败或导致错误操作继续执行。

### 2. dot 无法读取用户创建的 Codex 会话

- **Issue**：[#52873 — dot cannot read user-created Codex threads](https://github.com/openai/codex/issues/52873)
- Windows 桌面端可发现本地 Codex 项目，但读取由用户直接创建的线程时出现 `unsupported placement format version` 或 `unsupported placement region`。
- 累计 **27 条评论、9 个点赞**。
- **重要性：** 暴露 dot 会话发现与存储格式兼容性问题，也可能意味着升级后本地历史数据无法被后续工具链正常读取。

### 3. Windows Store 自动更新因旧 MSIX 包被占用而失败

- **Issue**：[#25770 — Windows Store Codex repeatedly fails to update](https://github.com/openai/codex/issues/25770)
- 旧版 `OpenAI.Codex` MSIX 包仍被进程锁定，导致 Store 无法完成新版本替换。
- 累计 **21 条评论、5 个点赞**。
- **重要性：** 更新失败会直接扩大 Windows 客户端新旧版本混用问题，并与启动、运行时迁移故障形成连锁反应。

### 4. Windows 升级后最大化 Codex 会导致自动隐藏任务栏无法出现

- **Issue**：[#52877 — Auto-hidden taskbar stops appearing when Codex is maximized](https://github.com/openai/codex/issues/52877)
- 报告环境为 Windows 11 25H2 与 Codex 26.1007.2314.0；升级后，应用最大化时任务栏行为异常。
- 累计 **18 条评论、2 个点赞**。
- **重要性：** 属于升级回归，影响桌面端窗口与系统 shell 的集成体验。

### 5. Windows 更新后无法恢复已有会话：MXC 缺少 `SYSTEMROOT`

- **Issue**：[#56264 — Thread resume fails after update because MXC process.env lacks SYSTEMROOT](https://github.com/openai/codex/issues/56264)
- 文件系统沙箱辅助程序以裁剪后的环境变量启动 MXC，缺少 `SYSTEMROOT`，导致已有本地聊天在加载 `AGENTS.md` 前即失败。
- 累计 **17 条评论、3 个点赞**。
- **重要性：** 这是影响明确的更新后会话恢复回归，根因指向进程环境变量传递和 Windows 沙箱启动链路。

### 6. macOS 后台权限拒绝重试伴随渲染进程高 CPU

- **Issue**：[#53178 — Persistent access-denied background hydration retries alongside high renderer CPU](https://github.com/openai/codex/issues/53178)
- macOS Apple Silicon 环境持续出现 access-denied 后台 hydration 重试，并伴随渲染进程高 CPU，重启无法解决。
- 累计 **14 条评论、1 个点赞**。
- **重要性：** 同时影响持久化、后台恢复和系统资源占用，可能是数据访问、权限与重试机制共同导致的问题。

### 7. Windows 自动更新后因 `cua_node` 运行时迁移而无法启动

- **Issue**：[#42412 — Desktop repeatedly fails to start on Windows after auto-update](https://github.com/openai/codex/issues/42412)
- 新旧 MSIX 包之间存在 `cua_node` 运行时路径迁移问题，导致 Codex Desktop 重复启动失败。
- 累计 **13 条评论、3 个点赞**。
- **重要性：** 反映打包、资源定位与自动更新原子性之间的潜在缺陷，对企业批量部署尤其敏感。

### 8. 长任务可靠性不足：缺少证据校验与熔断机制

- **Issue**：[#42080 — Completion claims without target evidence and missing circuit breakers](https://github.com/openai/codex/issues/42080)
- 报告指出，长任务和工具密集型任务中，Codex 可能在没有目标产物或验证结果时宣告完成；同时缺少对重复失败和无效执行的熔断。
- 累计 **11 条评论**。
- **重要性：** 这是从“功能可用性”上升到“工程可信度”的关键问题，直接影响自动化流水线的可靠性。

### 9. 建议让 dot 直接连接无头 Linux 服务器

- **Issue**：[#49491 — Let a dot connect directly to a headless Linux server](https://github.com/openai/codex/issues/49491)
- 用户希望通过 CLI 或设备码流程登录，并明确授权 dot 将无头 Linux 服务器作为可选任务环境。
- 累计 **11 条评论、17 个点赞**。
- **重要性：** 体现社区对远程开发、服务器端自动化及非图形化部署的明确需求。

### 10. 桌面端模型请求存在显著长尾延迟

- **Issue**：[#56861 — Codex Desktop long-tail response latency](https://github.com/openai/codex/issues/56861)
- 496 条请求的平均耗时为 **41.8 秒**，P95 为 **143.6 秒**，最慢达到 **636.8 秒**；重置后和重试期间也出现极慢响应。
- 累计 **4 条评论**。
- **重要性：** 数据显示问题不只是偶发慢响应，而是首响应、重试和恢复路径上的系统性长尾延迟；不过报告也明确说明，重置相关症状尚未完成独立复现。

## 功能需求趋势

1. **交互过程可控**
   - 用户希望关闭自动应答、延长时间限制或明确终止条件，避免代理替用户作出高影响决策。
   - 代表需求：[问题 60 秒自动处理配置](https://github.com/openai/codex/issues/28969)。

2. **远程与无头任务环境**
   - dot 需要直接连接无头 Linux、远程服务器及非桌面设备，并通过显式授权管理任务环境。
   - 代表需求：[dot 直连无头 Linux 服务器](https://github.com/openai/codex/issues/49491)。

3. **IDE 与远程开发集成稳定性**
   - VS Code 扩展在 Windows 和 Linux 上无法初始化 UI；Remote-SSH 场景下，新扩展版本出现 webview 超时。
   - 相关问题：[Windows VS Code 扩展 UI 初始化失败](https://github.com/openai/codex/issues/56682)、[Linux VS Code 扩展无法启动](https://github.com/openai/codex/issues/56992)、[Remote-SSH webview 超时](https://github.com/openai/codex/issues/56736)。

4. **新模型可靠性与兼容性**
   - 社区关注 GPT-6.1 的正常提示误判、目标理解偏差和无法自我纠正，以及 GPT-6 系列与既有模型行为不一致。
   - 相关问题：[GPT-6.1 误报 invalid_prompt](https://github.com/openai/codex/issues/52450)、[GPT-6.1 Sol High 可靠性回归](https://github.com/openai/codex/issues/54001)。

5. **权限与沙箱一致性**
   - “Full access”仍可能以 workspace-write 沙箱启动；浏览器允许规则与站点安全策略冲突；Windows 环境变量缺失也会导致沙箱辅助进程失败。
   - 相关问题：[Full access 未按预期生效](https://github.com/openai/codex/issues/29503)、[淘宝站点被安全策略拦截](https://github.com/openai/codex/issues/44943)、[MXC 缺少 SYSTEMROOT](https://github.com/openai/codex/issues/56264)。

6. **长任务可靠性与性能**
   - 社区希望代理在完成前提供可验证证据，并通过熔断机制停止重复失败或无限延长任务。
   - 相关问题：[长任务完成证据与熔断](https://github.com/openai/codex/issues/42080)、[桌面端请求长尾延迟](https://github.com/openai/codex/issues/56861)。

7. **本地历史与跨版本数据兼容**
   - dot 无法读取用户创建的线程，提示本地会话存在格式或区域兼容性问题。
   - 代表问题：[dot 无法读取用户创建的 Codex 线程](https://github.com/openai/codex/issues/52873)。

8. **输入与界面能力增强**
   - TUI 语音转录、Windows 本地浏览器使用、macOS 窗口捕获，以及更完整的主题系统持续受到关注。
   - 相关问题：[TUI 语音转录](https://github.com/openai/codex/issues/14630)、[Work 设置中本地浏览器被禁用](https://github.com/openai/codex/issues/56645)、[Computer Use 窗口捕获超时](https://github.com/openai/codex/issues/56540)、[三层主题系统](https://github.com/openai/codex/issues/33497)。

## 开发者关注点

- **Windows 更新可靠性是当前最集中的客户端痛点。** MSIX 包锁定、运行时迁移、`SYSTEMROOT` 缺失以及最大化后任务栏异常，均指向更新后的资源定位、进程环境和桌面集成问题。
- **会话持久化不能只验证“能否创建”，还必须覆盖升级、跨版本读取和后台恢复。** dot 的格式兼容问题和 macOS hydration 重试说明本地状态生命周期仍较脆弱。
- **代理需要更严格的完成判定。** 开发者希望在任务结束前运行验证、核对目标产物，并在重复失败、上下文压缩或异常恢复时及时停止，而不是仅依赖模型的自然语言声明。
- **性能问题需要可复现的指标与分层诊断。** 除首 token 延迟外，还应区分模型推理、网络、上下文构建、权限检查、重试以及本地渲染开销。
- **权限界面必须与实际执行环境一致。** 用户选择 Full access、Always allow 或 Work 模式后，底层沙箱、浏览器策略和环境变量传递仍需保持一致。
- **远程开发和 IDE 场景是高频使用路径。** VS Code UI 初始化、Remote-SSH webview、无头 Linux 接入等需求，显示出社区正在把 Codex 从单机终端工具扩展为远程工程代理。
- **新模型上线需要配套回归测试。** 正常提示被策略误杀、长任务目标漂移、失败后不能自我纠正，均可能来自模型行为切换而非传统代码崩溃。
- **资源使用需要更透明。** macOS 高 CPU、24 小时上传 10.89 GiB、长会话图片历史膨胀等反馈，促使用户关注上下文缓存、媒体处理和后台同步的成本。
- **TUI 资源清理仍需持续改进。** [`/clear` 遗留旧线程 stdio MCP 服务的 Issue 已关闭](https://github.com/openai/codex/issues/56802)，说明社区正密切关注长期会话中的子进程和资源泄漏问题。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-26**  
**数据范围：github.com/google-gemini/gemini-cli 过去 24 小时活跃 Issues 与 PR**

## 1. 今日速览

今日没有新版本发布，仓库开发重点明显集中在 **Subagent/Agent 的稳定性与可观测性**：包括子代理达到最大轮次后被误报为成功、远程代理会话串线、取消操作无法及时生效，以及 Browser Agent 配置与 Wayland 兼容性问题。与此同时，CLI 基础体验也在持续修复，涵盖 `@file` 空白保留、Windows 路径解析、模型别名参数继承和 VS Code 扩展资源释放。

---

## 2. 版本发布

过去 24 小时无最新 Release。

---

## 3. 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后被误报为成功

[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

`codebase_investigator` 在达到最大轮次、实际未完成分析时，仍报告 `status: success` 和 `Termination Reason: GOAL`。这会掩盖代理中断，影响自动化工作流和结果可信度。该 Issue 有 **13 条评论**，是今日讨论最活跃的问题之一。

### 2. Generalist Agent 无限挂起

[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

调用 generalist agent 时，即使只是创建文件夹等简单操作也可能永久挂起；显式禁止使用 subagent 后可暂时规避。问题获得 **8 个点赞、8 条评论**，表明其影响面和可复现性都较突出。

### 3. Browser Agent 忽略 settings.json 配置

[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

Browser Agent 没有正确应用全局或项目级 `settings.json` 覆盖项，包括 `maxTurns` 等关键参数。虽然 `AgentRegistry` 初始化时会合并配置，但子代理实际执行时未完整继承，属于代理配置链路不一致问题。

### 4. 工具数量过多触发 Gemini API 400 错误

[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

当可用工具数量较大时，Gemini CLI 会收到 HTTP 400。标题称“超过 128 个工具”，摘要中则提到“超过 400 个工具”，具体阈值需要进一步确认。核心诉求是按任务动态裁剪工具集合，避免工具 schema 挤占上下文并触发接口限制。

### 5. Browser Agent 在 Wayland 环境下失败

[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

Browser subagent 在 Wayland 环境中无法正常运行，但界面仍以 `Termination Reason: GOAL` 结束，错误上下文不足。该问题对 Linux 桌面用户影响较大，也暴露出代理结束状态与真实执行结果不一致的问题。

### 6. Gemini CLI 在创建 Vite 应用时卡在交互提示

[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

当代理被要求创建新的 Vite 应用时，会停在命令行交互式提示，无法继续推进。计划是增加行为评估并调整提示词，以减少 CLI 工具需要人工补充参数的情况。

### 7. `/bug` 报告缺少 Subagent 上下文

[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

现有 `/bug` 报告主要包含主会话信息，缺少子代理内部执行轨迹，难以判断故障发生在哪个代理、哪个工具调用或哪个终止条件。该问题直接影响问题复现、调试和社区支持效率。

### 8. 模型在随机位置生成临时脚本

[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

当原生文件编辑工具受限时，模型倾向于通过 shell 在多个目录生成编辑脚本，造成工作区污染，并增加清理和提交成本。社区期待更受控的临时文件位置、写入策略或统一补丁机制。

### 9. Gemini 很少主动使用 Skills 和 Subagents

[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

用户反馈，即使已配置与当前任务高度相关的技能，模型仍很少主动调用 Skills 或 Subagents，通常需要显式指令才会使用。这说明自动编排能力尚未充分释放，也影响多代理体系的实际收益。

### 10. AST 感知的文件读取、搜索与代码库映射

[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
相关：[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)

社区正在评估 AST-aware 工具是否能减少无效文件读取、降低 token 消耗并提高代码库导航效率。讨论重点包括 AST grep、代码库映射和 `codebase_investigator` 改造，属于提升 Agent 精度与效率的中长期方向。

---

## 4. 重要 PR 进展

### 1. 修复 VS Code 扩展 activate() 中 Disposable 泄漏

[#29953](https://github.com/google-gemini/gemini-cli/pull/29953)

修复 `activate()` 中多余括号将 Disposable 注册变成逗号表达式的问题，确保 `gemini.diff.accept` 和工作区文件夹监听器真正进入 `context.subscriptions`，避免扩展停用后残留资源。

### 2. 手动激活 Skill 时处理缺失参数

[#29952](https://github.com/google-gemini/gemini-cli/pull/29952)

用户未提供 Skill 参数时，不再出现 undefined 或无意义的提示，而是回退到明确要求 Agent 使用所选 Skill 的指令，提升手动触发 Skill 的可靠性。

### 3. 集成测试重试 VS Code 瞬时下载失败

[#29951](https://github.com/google-gemini/gemini-cli/pull/29951)  
重复提交：[#29950](https://github.com/google-gemini/gemini-cli/pull/29950)

为 VS Code 下载阶段增加瞬时网络错误重试，减少因更新服务超时导致的非功能性 Nightly CI 失败。

### 4. 后台输出读取支持及时取消

[#29948](https://github.com/google-gemini/gemini-cli/pull/29948)

取消延迟执行的工具调用后，不再等待完整延迟结束并继续读取日志，而是通过已有的 abort-aware delay 立即中止后台读取。这是降低 Agent 卡住概率的重要修复。

### 5. 按父会话和端点隔离远程 Agent 会话

[#29946](https://github.com/google-gemini/gemini-cli/pull/29946)

修复同一进程内不同父会话之间复用远程 conversation ID，以及不同端点下同名 Agent 复用标识符的问题。会话标识现在由父会话和端点共同限定，避免上下文串线。

### 6. 保留超长单行后台日志的尾部内容

[#29947](https://github.com/google-gemini/gemini-cli/pull/29947)

此前单行日志超过 64 KB 时，返回结果中可能只剩 `Full Log Output:`，有效尾部被静默丢弃。新 PR 在不存在完整尾部行时保留部分内容，提升调试信息完整性。

### 7. 完整扫描计划文件并报告读取失败

[#29942](https://github.com/google-gemini/gemini-cli/pull/29942)

计划文件不再只检查开头 1 KB；即使有效内容前存在大量空白也能正确识别。同时无法读取的计划会明确报告为读取失败，而不是误判为空文件。

### 8. 保留 `@file` 引用内容中的空白

[#29935](https://github.com/google-gemini/gemini-cli/pull/29935)

移除对文本文件内容的额外 `.trim()`，防止前导缩进和末尾换行在通过 `@file` 传给模型时被删除。这对 Python、YAML 等依赖缩进或精确文本的文件尤其重要。

### 9. 扩展 Windows `~\` 路径解析

[#29931](https://github.com/google-gemini/gemini-cli/pull/29931)

CLI 路径解析器现在支持 Windows 下的 `~\policies\custom.toml` 等主目录相对路径。自定义策略文件和本地扩展注册路径将正确解析到用户主目录，而不是保留字面量 `~`。

### 10. 模型 Tier 别名保留 generateContentConfig

[#29810](https://github.com/google-gemini/gemini-cli/pull/29810)

当 `customAliases` 指向 `flash-lite`、`flash`、`pro` 或 `auto` 等 Tier 时，首次请求会丢失自定义 `generateContentConfig`。修复后，Tier 解析到自身首选模型时仍保留 temperature、thinking level 和最大输出 token 等配置。

---

## 5. 功能需求趋势

### Agent 稳定性与终止语义

- 正确区分“达到目标”“达到最大轮次”“被取消”和“异常退出”。
- 避免 Agent 无限挂起、任务状态误报及中断恢复。
- 改进循环检测恢复时对未发送请求的处理，相关 PR：[#29871](https://github.com/google-gemini/gemini-cli/pull/29871)。

### Subagent 能力与可观测性

- 提升 Skills、Subagents 的自动发现和主动调用率。
- 支持通过 `/chat share` 查看子代理轨迹：[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)。
- 在 `/bug` 报告中包含子代理上下文：[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)。
- 推进本地 Subagent、共享记忆和并行协作：[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)、[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)。

### Browser Agent

- 修复 Wayland 兼容性：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)。
- 自动接管会话并恢复浏览器锁：[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)。
- 正确继承 `settings.json`：[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)。

### 工具与上下文效率

- 动态裁剪工具集合，解决大规模工具列表导致的 API 400：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)。
- 引入 AST 感知读取与搜索：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)。
- 实施“Tactful Extraction”，减少大文件读取带来的 token 膨胀：[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)。
- 以持久化文件任务列表替代纯上下文 WriteToDo：[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)。

### 安全与执行控制

- 提议通过零依赖 OS 沙箱和执行后意图路由降低 shell 风险：[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)。
- 抑制 `git reset`、`--force` 等破坏性行为：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)。
- 支持工作区级策略，而非仅使用全局策略：[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)。

### IDE 与跨平台体验

- 修复 VS Code 扩展 Disposable 注册。
- 提升集成测试网络稳定性。
- 改善 Windows 路径和 YAML lint 兼容性，相关 PR：[#29940](https://github.com/google-gemini/gemini-cli/pull/29940)。
- 改善终端 resize 时的性能与闪烁：[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)。

### 内部评测质量

- 稳定项目级 Eval，减少结果波动并建立质量趋势追踪：[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)。
- 修复 Steering Eval 测试失败：[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)。

---

## 6. 开发者关注点

1. **结果可信度不足**  
   Agent 可能在没有真正完成任务时报告 `GOAL` 或成功状态。开发者需要可靠区分成功、最大轮次、取消、挂起与异常，直接影响自动化脚本和 CI 集成。

2. **子代理上下文不可见**  
   `/bug` 和 `/chat share` 尚不能充分呈现子代理执行轨迹，排查跨代理故障成本较高。

3. **上下文和工具数量膨胀**  
   大量工具、宽泛文件读取和低效代码库探索都会造成 token 浪费，甚至触发 API 400。动态工具裁剪、AST 搜索和外科式读取成为共同诉求。

4. **自动编排不够积极**  
   Skills 和 Subagents 往往需要用户显式指定，模型尚未充分判断何时委派任务，削弱了多代理架构的效率优势。

5. **执行安全与工作区污染**  
   社区同时关注破坏性 Git 命令、shell 沙箱、随机临时脚本和持久任务文件，期望 Agent 在效率与可逆性之间取得更好平衡。

6. **跨平台稳定性仍是痛点**  
   Wayland、Windows 路径解析、Windows YAML lint 和终端 resize 等问题表明，桌面环境兼容仍是 CLI 走向成熟的重要工作项。

7. **功能请求开始转向工程化细节**  
   热点已不只是“增加某个命令”，而是转向会话隔离、取消语义、配置继承、日志保留、评测稳定性等生产级可靠性建设。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-26**  
**数据范围：过去 24 小时更新的 Issues**

## 今日速览

过去 24 小时无新版本发布，也没有更新的 Pull Request，社区动态主要集中在 **1.0.103 版本引发的稳定性问题**：长会话内存膨胀至 37 GiB、会话锁超时，以及 Windows/MCP 权限问题引发集中反馈。  
与此同时，ACP 非交互模式、会话管理、Entra 身份认证与上下文成本成为长期热点，开发者普遍希望提升自动化可靠性并降低固定上下文开销。

## 社区热点 Issues

1. **[triage] 1.0.103：长时间并行 Agent 会话主进程增长至 37 GiB**  
   [#5254](https://github.com/github/copilot-cli/issues/5254)  
   报告指出，CLI 在约 6 小时 19 分钟后物理内存占用达到 **37.3 GiB**，并产生约 1.33 亿次分配和 10.7 GiB 碎片化。该问题直接关系到长时 Agent 任务能否稳定运行，也是本期最值得优先排查的性能问题。

2. **[triage] CLI 1.0.103：持续会话锁超时及任务无响应**  
   [#5253](https://github.com/github/copilot-cli/issues/5253)  
   用户报告 `is_session_generation_current` 获取 session lock 超时，导致任务刷新失败、UI 近乎无响应，但进程和部分嵌套工具仍继续运行。它与 [#5254](https://github.com/github/copilot-cli/issues/5254) 同时出现，可能指向 1.0.103 在长时间或恢复会话场景下的资源管理回归。

3. **Windows：以管理员权限启动后，普通会话无法启动 MCP Server**  
   [#5255](https://github.com/github/copilot-cli/issues/5255)  
   提权会话先创建 `.mcp-writer.lock` 和 `.mcp-writer.binding` 后，普通权限会话因 `os_error=5` 无法打开锁文件。该问题影响同一 Windows 用户下混合权限运行 MCP，且为 10 月 26 日新报告，建议关注修复及版本回归验证。

4. **PRU 配额疑似被 Assisted Permissions 清空**  
   [#4802](https://github.com/github/copilot-cli/issues/4802)  
   用户认为开启 Assisted Permissions 后，原本剩余的请求配额被异常消耗，事件发生期间额度从 234 PRU 快速下降。该问题直接影响付费用户成本与信任，且已有 7 条评论，是本期讨论最充分的热点之一。

5. **ACP 模式未发送 `usage_update`**  
   [#4233](https://github.com/github/copilot-cli/issues/4233)  
   `copilot --acp` 不会向 ACP 客户端发送上下文窗口和 AI credits 用量更新，而交互模式已经能够计算这些数据。问题获 4 个点赞，表明集成 Zed 等 ACP 客户端的开发者高度关注非交互模式的信息透明度。

6. **ACP 模式无法在执行中途插入 steering 指令**  
   [#5198](https://github.com/github/copilot-cli/issues/5198)  
   ACP 客户端目前不能像交互式 CLI 和 SDK 的 `immediate` 模式一样，在 Agent 执行过程中追加指导。该限制削弱了 ACP 作为自动化和远程控制入口的能力，也是 ACP 功能对齐中的重要缺口。

7. **ACP `/rename` 报告成功但没有真正重命名会话**  
   [#5115](https://github.com/github/copilot-cli/issues/5115)  
   在 `copilot --acp --stdio` 中，客户端可以发现并发送 `/rename` 命令，但命令几乎立即返回成功，却没有修改会话名称。这是典型的“协议响应与实际状态不一致”，可能影响依赖会话名称进行追踪和编排的自动化系统。

8. **macOS：Entra Broker 保护的两个远程 MCP Server 启动失败**  
   [#5250](https://github.com/github/copilot-cli/issues/5250)  
   macOS 上多个 Entra 保护的远程 MCP Server 并发登录时会出现 `sign-in is already in progress`，且被拒绝的缓存令牌无法恢复。该问题涉及认证并发控制、令牌缓存和 MCP 启动编排，尤其影响 Azure DevOps 等企业 MCP 集成。

9. **Windows：Entra Broker 令牌缓存保持为空，每次启动都重新提示登录**  
   [#5236](https://github.com/github/copilot-cli/issues/5236)  
   MCP 登录后，账户元数据文件虽已写入，但令牌缓存仍为 0 字节，导致每个新进程都重新弹出账户选择器。该问题削弱了企业身份认证体验，并与 macOS 的令牌恢复问题共同构成本期 Entra/MCP 认证热点。

10. **企业环境下持续出现 “Managed account policy” 错误**  
    [#5130](https://github.com/github/copilot-cli/issues/5130)  
    从 1.0.94 起，用户反馈 CLI 持续显示托管账户策略刷新失败，影响正常交互和可用性。该问题已有 1 个点赞；相关的 [#5109](https://github.com/github/copilot-cli/issues/5109) 则进一步指出策略无法完整确定，导致 CLI 实际不可用。

## 功能需求趋势

- **ACP 能力对齐**：集中于用量更新、中途 steering、会话重命名及错误结构，目标是让 `--acp` 具备与交互模式、SDK 模式相近的能力。相关讨论包括 [#4233](https://github.com/github/copilot-cli/issues/4233)、[#5198](https://github.com/github/copilot-cli/issues/5198)、[#5115](https://github.com/github/copilot-cli/issues/5115)。
- **Agent 控制与生命周期管理**：社区希望增加 `/pause` 或 `/stop`，以温和中断正在推理的 Agent，而不是强制取消。详见 [#3265](https://github.com/github/copilot-cli/issues/3265)。
- **上下文与配额成本优化**：多个议题关注固定注入上下文、工具定义膨胀、提示词预算超限及 PRU 消耗，代表 [#5251](https://github.com/github/copilot-cli/issues/5251)、[#5201](https://github.com/github/copilot-cli/issues/5201) 和 [#4802](https://github.com/github/copilot-cli/issues/4802)。
- **稳定发布渠道**：快速发布频繁引入回归，开发者建议提供类似 Stable、Beta 等渠道，以降低日常使用风险，见 [#5203](https://github.com/github/copilot-cli/issues/5203)。
- **身份认证与 MCP 稳定性**：Entra Broker 的并发登录、缓存令牌、企业策略刷新和跨权限会话锁是当前企业用户的集中痛点，见 [#5250](https://github.com/github/copilot-cli/issues/5250)、[#5236](https://github.com/github/copilot-cli/issues/5236)、[#5255](https://github.com/github/copilot-cli/issues/5255)。
- **跨平台与可访问性**：Linux ARM64 16KB 页内核、Windows 路径与权限、企业策略、语音识别语言配置等问题，显示社区仍要求提升跨平台一致性。

## 开发者关注点

1. **长会话的资源安全**：37 GiB 内存占用、碎片化、session lock 超时和 UI 无响应，是 1.0.103 当前最严重的风险，尤其影响并行 Agent、恢复会话和长时间运行场景。参见 [#5254](https://github.com/github/copilot-cli/issues/5254)、[#5253](https://github.com/github/copilot-cli/issues/5253)。

2. **自动化接口必须可靠**：ACP 模式缺少状态更新和 mid-turn steering，`/rename` 还存在“成功但未执行”，说明外部客户端的一致性与可验证性仍需加强。

3. **企业身份认证不能反复打断工作流**：托管策略刷新失败、Entra 令牌未持久化、并发登录冲突以及权限级别导致的锁文件问题，可能直接阻断 MCP Server 使用。

4. **额度与上下文需要透明、可控**：用户既关注 PRU 被异常消耗，也关注约 40k token 的固定上下文开销，以及 headless 模式下错误缺少可机器识别的 `errorCode` 和修复建议。参见 [#5251](https://github.com/github/copilot-cli/issues/5251)、[#5201](https://github.com/github/copilot-cli/issues/5201)。

5. **快速发布与稳定性的矛盾**： [#5203](https://github.com/github/copilot-cli/issues/5203) 提出的 Stable 发布渠道，反映社区对当前快速迭代节奏的明显担忧。

6. **修复不应局限于单一系统**：Windows 权限、macOS 令牌、Linux ARM64 页大小、Windows 技能发现等报告显示，CLI 的平台兼容矩阵和升级回归测试仍有较大提升空间。参见 [#4977](https://github.com/github/copilot-cli/issues/4977)、[#4401](https://github.com/github/copilot-cli/issues/4401)、[#3815](https://github.com/github/copilot-cli/issues/3815)。

## 重要 PR 进展

过去 24 小时内没有更新的 Pull Request，暂无 PR 进展可汇总。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-10-26

## 1. 今日速览

过去 24 小时没有新版本发布，社区焦点高度集中在**免费额度异常**：大量用户报告免费模型提前耗尽、倒计时持续增长、跨日不重置，以及桌面端与 CLI 表现不一致。与此同时，桌面端稳定性、会话数据正确性、Web 登录和长会话性能成为开发重点，PR 也在集中修复 UI 回归、内存占用及插件事件隔离问题。

---

## 3. 社区热点 Issues

### 1. 免费额度耗尽与重置机制疑似异常
多个独立报告指向同一问题：免费模型在没有明显使用量的情况下被判定为超额，且倒计时结束后无法恢复或继续增加。

- [#58205：免费计划在无当日使用量时仍触发 `FreeUsageLimitError`](https://github.com/anomalyco/opencode/issues/58205)  
  **重要性：** 明确指出限制由服务端执行，但 CLI/API 未暴露重置窗口，用户难以判断额度状态。  
  **社区反应：** 9 条评论，仍开放；与当日多条同类问题相互印证。

- [#58859：免费额度重置后倒计时再次变成约 74000 秒](https://github.com/anomalyco/opencode/issues/58859)  
  **重要性：** 呈现了典型的“到期后重新计时”故障链。  
  **社区反应：** 4 条评论，已关闭并标记待进一步分类。

- [#58874：所有免费模型不可用，长倒计时在 macOS 和 Windows 上出现](https://github.com/anomalyco/opencode/issues/58874)  
  **重要性：** 跨平台出现，说明问题可能位于共享服务端额度逻辑，而非单一桌面客户端。  
  **社区反应：** 3 条评论，仍开放待处理。

- [#59123：每日免费额度没有更新](https://github.com/anomalyco/opencode/issues/59123)  
  **重要性：** 中文用户当日新建的简洁报告，聚焦跨日重置失败这一核心症状。  
  **社区反应：** 3 条评论，仍开放。

- [#59140：Desktop 1.19.4 所有免费模型均提示额度耗尽](https://github.com/anomalyco/opencode/issues/59140)  
  **重要性：** 表明桌面端用户直接受到此次额度故障影响；倒计时结束后仍会重新开始。  
  **社区反应：** 2 条评论并获得 1 个赞，仍开放。

### 2. 桌面端、CLI 与服务端行为不一致
- [#59130：桌面端限额状态异常，但控制台版本正常](https://github.com/anomalyco/opencode/issues/59130)  
  **重要性：** 这是定位问题层级的关键线索：可能涉及桌面端缓存、状态同步或不同后端账户状态。  
  **社区反应：** 3 条评论，仍开放。

### 3. 多进程共享数据库会破坏会话写入
- [#53146：两个服务进程共享 `opencode.db`，独立分配 `session_message.seq` 导致唯一键冲突](https://github.com/anomalyco/opencode/issues/53146)  
  **重要性：** 可能造成会话写入失败、历史不完整或数据库锁冲突，影响长时间运行的服务与多个客户端协同。  
  **社区反应：** 7 条评论，仍开放；属于高影响的数据一致性缺陷。

### 4. Web 端 OAuth 回调与登录过期处理失效
- [#50481：Service Worker 拦截 OAuth 回调，认证过期后进入静默重试循环](https://github.com/anomalyco/opencode/issues/50481)  
  **重要性：** 在 OAuth2 Proxy、Keycloak OIDC 等认证网关部署中，客户端可能既无法重新登录，又持续请求形成 1 秒重试风暴。  
  **社区反应：** 5 条评论、1 个赞，仍开放。

### 5. 子代理会话导出为空
- [#59136：成功的子代理会话导出后为 0 条消息且 `outcome` 为空](https://github.com/anomalyco/opencode/issues/59136)  
  **重要性：** 子代理虽可能实际执行成功，但审计、调试、结果归档和自动化流水线无法获得输出。  
  **社区反应：** 2 条评论，仍开放并已复现。

> 值得补充：免费额度相关报告还包括 [#59116](https://github.com/anomalyco/opencode/issues/59116)、[#59118](https://github.com/anomalyco/opencode/issues/59118)、[#58860](https://github.com/anomalyco/opencode/issues/58860) 和 [#58842](https://github.com/anomalyco/opencode/issues/58842)。这些报告进一步指向累计等待时间超过 61 小时、计数持续增长及跨日不重置，说明这并非单一用户的偶发现象。

---

## 4. 重要 PR 进展

### 1. 性能与内存治理

- [#59091：每个步骤只加载一次历史](https://github.com/anomalyco/opencode/pull/59091)  
  避免长会话每一步重复解码完整 transcript 和估算 token，降低图片与消息历史带来的 CPU、内存开销。

- [#58568：修补 Effect.fn 栈帧导致的调用参数滞留](https://github.com/anomalyco/opencode/pull/58568)  
  针对 heap snapshot 中残留 117 MB 消息历史和 47 张 Base64 截图的问题，避免 Effect fiber 长期持有调用参数。

- [#58967：Bun 写出空 heap snapshot 时主动失败](https://github.com/anomalyco/opencode/pull/58967)  
  检测 0 字节快照并删除文件、返回错误，避免日志误报“heap snapshot written”但实际没有有效数据。

- [#58316：新增桌面端 heap snapshot 差异分析工具](https://github.com/anomalyco/opencode/pull/58316)  
  支持比较构造器数量、自身体积及脱离 DOM 的对象数量，为桌面端内存回归定位提供工具。

### 2. 桌面端与 Web UI 修复

- [#58894：窄桌面窗口保持桌面布局](https://github.com/anomalyco/opencode/pull/58894)  
  宽度低于 768px 时不再自动切换成手机布局，移动布局改为仅面向触摸设备。

- [#59064：新增可排序 UI 原语并迁移队列面板](https://github.com/anomalyco/opencode/pull/59064)  
  支持拖拽及键盘调整提示队列顺序，并逐步摆脱需要补丁的 `@dnd-kit`。

- [#59071：修正编辑器菜单高度并恢复表头可选](https://github.com/anomalyco/opencode/pull/59071)  
  修复历史选择器顶部残留半行、菜单高度不一致以及表头无法选择等回归问题。

- [#59151：复制 Markdown 时去除主题颜色](https://github.com/anomalyco/opencode/pull/59151)  
  避免 Chromium 将计算后的深色主题样式一并写入剪贴板，使复制结果保持干净的 Markdown。

- [#59148：重命名会话时显示焦点环](https://github.com/anomalyco/opencode/pull/59148)  
  修复输入框选中文字后光标和编辑状态不明显的问题，并恢复浏览器焦点反馈。

### 3. 桌面功能与开发体验

- [#59152：桌面版更新说明改名为 “What’s new”](https://github.com/anomalyco/opencode/pull/59152)  
  桌面应用迁移至 `dev` 渠道后，更新设置页与升级弹窗同步采用新的产品化标题。

- [#58230：开发服务器登录状态跨刷新保存](https://github.com/anomalyco/opencode/pull/58230)  
  按服务器地址将 `auth_token` 保存在 `localStorage`，避免刷新评审链接后重新进入“Connect to a server”。

---

## 5. 功能需求趋势

1. **免费额度与用量可观测性**
   - 社区最迫切的需求是明确展示：额度窗口、剩余额度、准确重置时间、重置失败原因，以及桌面端与 CLI 的状态一致性。
   - 代表 Issues：[#58205](https://github.com/anomalyco/opencode/issues/58205)、[#59130](https://github.com/anomalyco/opencode/issues/59130)、[#59123](https://github.com/anomalyco/opencode/issues/59123)

2. **更完整的 Web 搜索提供商生态**
   - [#58406：增加内置 SearXNG Web Search Provider](https://github.com/anomalyco/opencode/issues/58406)  
     社区希望获得不依赖第三方商业搜索 API、可自托管的搜索能力。

3. **Windows 桌面端 CLI 使用能力**
   - [#55772：Windows 桌面版包含 CLI，但用户无法直接运行](https://github.com/anomalyco/opencode/issues/55772)  
     反映用户希望桌面安装包与 CLI 形成统一、可发现的发行体验。

4. **会话历史、子代理和分支能力**
   - 用户持续关注完整会话分叉、子代理结果导出及消息时间线顺序，说明“任务可追溯性”正在成为独立需求。
   - 代表 Issues：[#59136](https://github.com/anomalyco/opencode/issues/59136)、[#45242](https://github.com/anomalyco/opencode/issues/45242)

5. **桌面端工程质量**
   - 窄屏布局、Diff 展示、OAuth 登录、堆快照和长会话性能持续获得投入，表明桌面版正在从“可用”走向稳定、可诊断和可持续使用。

---

## 6. 开发者关注点

- **额度错误缺少透明信息：** 开发者不只是要求“恢复免费额度”，还希望 CLI/API 能暴露重置窗口和失败状态，便于自动化客户端判断是否重试。
- **客户端状态不一致：** 桌面端、Web 端与 CLI 对限额、登录和模型目录的表现存在差异，状态同步与缓存失效机制需要统一。
- **长会话性能和内存泄漏：** 重复遍历 transcript、图片 Base64 化以及 Effect fiber 持有参数，是当前性能治理的核心。
- **数据库并发安全：** 多个服务进程共享同一 SQLite 数据库时，内存计数器不能作为唯一序列来源；需要数据库级原子分配或跨进程协调。
- **OAuth 与 PWA 集成边界：** Service Worker 不应破坏认证回调导航；会话过期需要显式提示和有限重试，而非每秒无限重连。
- **子代理结果必须可验证：** 执行成功不能等同于导出成功，消息、工具调用和最终 outcome 应形成一致、可审计的记录。
- **桌面回归测试覆盖不足：** 窄屏布局、菜单高度、表头选择、Diff 空白和更新提示等问题集中出现，说明桌面 UI 的端到端测试仍需加强。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-10-26

## 今日速览

过去 24 小时无新版本发布，但社区集中暴露了 **命令安全检测、tmux 配置处理、并发会话隔离和测试覆盖** 四类问题。围绕这些 Issue 迅速出现了修复 PR，其中单 `&` 运算符漏判、`cd` 后相对路径解析、tmux 配置路径选择以及陈旧单元测试是当前最明确的修复主线。

---

## 社区热点 Issues

> 过去 24 小时共更新 5 个 Issue；以下按技术影响与关联修复热度排序。

1. **命令风险检测将 `sleep 1 & rm -rf ~` 误判为 Safe**
   - 风险分析没有把单个 `&` 视为命令分隔符，导致后台执行的破坏性命令可能绕过安全检测。
   - 这是典型的安全假阴性，且已有对应修复 PR，预计将成为近期合入重点。
   - 社区反应：Issue 暂无评论和点赞，但修复 PR 已在次日提交。
   - [#1973](https://github.com/1jehuang/jcode/issues/1973)

2. **`/terminal-setup` 无条件写入 `~/.tmux.conf`**
   - 对使用 XDG 路径 `~/.config/tmux/tmux.conf` 的用户，命令可能创建 tmux 实际不会读取的新文件，同时让原有配置看似被更新。
   - 影响终端快捷键、Shift+Enter 配置及用户已有 tmux 设置，属于易造成状态混淆的 TUI 配置问题。
   - 社区反应：暂无直接评论，但出现了两个不同修复方案，PR #1975 与 #1976 均已开放。
   - [#1972](https://github.com/1jehuang/jcode/issues/1972)

3. **Harness API 缺少按会话设置上下文上限的能力**
   - 当前单一 daemon 并发承载多个会话时，compaction 预算主要依赖全局配置，难以为不同会话配置独立上下文容量。
   - 对多会话、长上下文和不同模型窗口大小的嵌入场景尤其重要，属于 SDK 核心能力缺口。
   - 社区反应：暂无评论或点赞，需求由 SDK 嵌入方提出。
   - [#1971](https://github.com/1jehuang/jcode/issues/1971)

4. **master 分支有 6 个陈旧单元测试在 CI 之外持续失败**
   - 失败源于近期已发布行为变更后测试断言未同步，而非 CI 覆盖的测试集全部正常。
   - 这反映出 CI cohort 过滤过窄导致主分支回归难以及时暴露，可能影响后续合并和发布质量。
   - 社区反应：Issue 无评论；PR #1977 已准备同步其中部分断言，PR #1978、#1955、#1880 也涉及测试稳定性。
   - [#1970](https://github.com/1jehuang/jcode/issues/1970)

5. **工具启动进程需要按会话隔离环境变量**
   - 单 daemon、多会话场景下，所有工具子进程目前继承 daemon 进程环境，容易导致凭据、模型配置或临时状态跨会话泄漏。
   - 需求还要求覆盖超出当前 turn 仍存活的后台任务，说明隔离必须绑定会话而非单次工具调用。
   - 社区反应：暂无直接评论；这是同一提交者提出的 Harness 多会话能力系列需求之一。
   - [#1969](https://github.com/1jehuang/jcode/issues/1969)

---

## 重要 PR 进展

1. **修复命令风险检测中的后台运算符 `&`**
   - 在命令分段时支持单个 `&`，同时处理 `|&` 被错误拆分为 `|` 与孤立 `&` 的情况。
   - 直接修复危险命令被评估为 Safe 的安全漏洞，是本期最高优先级改动。
   - [#1974](https://github.com/1jehuang/jcode/pull/1974)

2. **修复 `cd` 后相对路径解析及重定向误作操作数**
   - 相对目标应在执行 `cd` 后的目录中解析，而不能始终基于工具调用时的 cwd。
   - 同时避免把标准输入输出重定向目标当作普通命令操作数，减少路径风险分析错误。
   - [#1978](https://github.com/1jehuang/jcode/pull/1978)

3. **同步已发布契约对应的陈旧测试断言**
   - 针对 #1970 中部分失败测试，将断言更新为当前正式发布的行为契约，而不是修改生产代码迎合旧断言。
   - 有助于恢复 master 分支测试可信度，但仍需配合更广的 CI 覆盖。
   - [#1977](https://github.com/1jehuang/jcode/pull/1977)

4. **将 Shift+Enter 设置写入 tmux 实际读取的配置文件**
   - 修正 `/terminal-setup` 对 `~/.tmux.conf` 的硬编码写入，转而识别 tmux 实际使用的配置路径。
   - 目标包括 XDG 配置目录，避免创建无效的第二份配置。
   - [#1976](https://github.com/1jehuang/jcode/pull/1976)

5. **更新既有 tmux 配置而非创建孤立配置**
   - 检测当前生效的 tmux 配置文件，在原有文件上更新，并正确报告路径和 reload 命令。
   - 对读取失败增加停止处理，避免静默覆盖或错误提示。
   - [#1975](https://github.com/1jehuang/jcode/pull/1975)

6. **macOS 增加 Kitty 终端检测与启动支持**
   - 通过 `TERM`、`KITTY_WINDOW_ID` 等信号识别 Kitty，解决 Cmd+; 和应用内会话误启动 Apple Terminal 的问题。
   - 改善 macOS 多终端环境下的 TUI 集成和会话可见性。
   - [#1783](https://github.com/1jehuang/jcode/pull/1783)

7. **可配置记忆提取模型，并支持 Alt+M 会话级选择**
   - 允许在配置中指定 memory extraction model，并可在模型选择器中仅为当前会话临时覆盖。
   - 会话级标记不会改写持久配置，适合临时切换记忆提取策略。
   - [#1875](https://github.com/1jehuang/jcode/pull/1875)

8. **TUI 概览折叠、记忆 effort 与运行时模型行**
   - 汇总多项界面能力，包括概览折叠控件、`agents.memory_effort` sidecar 配置以及运行时模型展示。
   - 目标是提升多代理状态、记忆处理强度和当前模型信息的可见性。
   - [#1709](https://github.com/1jehuang/jcode/pull/1709)

9. **新增 `ask_user` 工具与 TUI 内联选择器**
   - 代理可在执行过程中请求结构化选择，TUI 提供数字快捷选项、自由输入和超时自动选择。
   - 工具结果会记录用户实际选择的标签与值，便于后续推理使用。
   - [#1815](https://github.com/1jehuang/jcode/pull/1815)

10. **修复测试环境竞态与开发环境污染**
   - 通过环境锁协调 `JCODE_HOME` 变更，隔离外部 `JCODE_*` 变量，并为并行测试提供独立临时目录。
   - 直接关联陈旧测试和并发不稳定问题，可提升本地与 CI 结果的一致性。
   - [#1880](https://github.com/1jehuang/jcode/pull/1880)

---

## 功能需求趋势

### 1. 命令执行安全与路径语义

近期最强烈的需求是提高风险门禁对真实 shell 语义的覆盖，尤其是：

- 后台执行符 `&`、`|&`；
- `cd` 后的相对路径；
- 重定向目标；
- 管道及复合命令中的目标解析。

这类问题直接影响自动化代理执行 shell 命令时的安全边界。相关 Issue：[ #1973](https://github.com/1jehuang/jcode/issues/1973)、[ #1978](https://github.com/1jehuang/jcode/pull/1978)。

### 2. 多会话与并发服务能力

Harness API 正在从“单会话可用”向“一个 daemon 服务多个并发会话”演进，需求集中在：

- 每个会话独立设置上下文和 compaction 预算；
- 每个会话隔离工具子进程的环境变量；
- 支持后台任务在 turn 结束后继续保留正确的会话环境。

相关 Issue：[ #1971](https://github.com/1jehuang/jcode/issues/1971)、[ #1969](https://github.com/1jehuang/jcode/issues/1969)。

### 3. 终端与 TUI 配置可靠性

社区希望 TUI 能力与真实终端环境一致，包括：

- 正确发现并修改 tmux 实际加载的配置；
- 正确识别 macOS Kitty 等终端；
- 提供清晰的配置写入、重载和错误提示；
- 修复快捷键在部分终端中不生效的问题。

相关 Issue：[ #1972](https://github.com/1jehuang/jcode/issues/1972)、[ #1783](https://github.com/1jehuang/jcode/pull/1783)。

### 4. 模型、记忆与推理策略可配置化

相关 PR 集中体现了细粒度配置趋势：

- 记忆提取模型和 memory effort；
- OpenAI-compatible provider 的显示名、reasoning override 与 effort；
- auto-retry 次数、退避和 sidecar fallback 顺序；
- 模型选择持久化及会话级临时选择。

相关 PR：[ #1875](https://github.com/1jehuang/jcode/pull/1875)、[ #1879](https://github.com/1jehuang/jcode/pull/1879)、[ #1878](https://github.com/1jehuang/jcode/pull/1878)。

### 5. 代理交互与会话管理体验

TUI 正在补齐“代理主动向用户确认”和“会话快速定位”的能力：

- `ask_user` 结构化选择器；
- `/resume` 固定当前目录会话；
- 当前目录置顶并按运行状态排序；
- 模型选择器支持 swarm model 和 coordinator fallback。

相关 PR：[ #1815](https://github.com/1jehuang/jcode/pull/1815)、[ #1852](https://github.com/1jehuang/jcode/pull/1852)、[ #1706](https://github.com/1jehuang/jcode/pull/1706)。

### 6. 测试隔离与 CI 覆盖率

开发者不只关注单个测试失败，也关注测试环境是否可信。当前诉求包括：

- 避免 `JCODE_HOME` 在并行测试间相互覆盖；
- 隔离开发机上的 `JCODE_*` 环境变量；
- 扩大 CI 对单元测试 cohort 的覆盖；
- 区分“实现回归”与“断言陈旧”。

相关 Issue：[ #1970](https://github.com/1jehuang/jcode/issues/1970)、[ #1955](https://github.com/1jehuang/jcode/pull/1955)、[ #1880](https://github.com/1jehuang/jcode/pull/1880)。

---

## 开发者关注点

- **安全检测不能只做字符串级拆分**：需要贴近真实 shell 的分隔符、重定向、cwd 变化和路径解析语义。当前最严重的问题是危险后台命令被判定为安全。
- **多会话并发必须提供真正的隔离边界**：上下文预算、进程环境、后台任务和 SDK session 都应按会话管理，避免共享 daemon 导致状态串扰。
- **配置操作必须符合用户现有环境**：工具不应假定 `~/.tmux.conf`，而应识别实际生效路径、保留原配置，并明确告知创建、修改或失败。
- **测试失败需要可解释且可复现**：社区既反对断言长期陈旧，也反对 CI 通过过滤测试集掩盖 master 分支失败；测试隔离和覆盖范围同样重要。
- **模型配置需要更细粒度、可临时覆盖且可持久化**：记忆模型、reasoning effort、retry、sidecar 和自定义 provider 均需要兼顾全局配置与会话级操作。
- **TUI 信息密度和交互能力持续增强**：开发者期望更清晰的状态展示、更结构化的用户确认、更便捷的会话恢复，同时保持快捷键在真实终端环境中可靠生效。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-10-26

## 今日速览

- 今日无新版本发布，Issue 与 PR 讨论继续集中在**上下文压缩、模型兼容性、MCP/HTTP 稳定性及终端安全**。
- 高优先级风险包括 Anthropic 工具引用失效、MCP 大小限制绕过、会话文件默认以 `0644` 创建，以及 `undici` 仍固定在存在安全修复需求的旧版本。
- 社区已推动多项基础修复，包括 provider ID 含 `/`、Windows 路径分隔符、UTF-8 分块解码和 npm symlink 路径处理。

---

## 社区热点 Issues

### 1. Anthropic 会话中删除工具后，后续请求全部失败
- **Issue**：[#11376](https://github.com/earendil-works/pi/issues/11376) · **P0**
- 扩展在会话中途重载并取消注册部分工具后，后续请求 Anthropic 模型会持续返回 `tool_reference_unresolved`。
- 这是会话级连锁故障：一次工具列表变化可能让整个历史上下文失效，直接影响扩展热重载和动态工具管理。
- 热度较高，已有 3 条评论；截至日报数据仍为 Open。

### 2. MCP HTTP JSON 响应绕过 `maxMessageBytes`
- **Issue**：[#11335](https://github.com/earendil-works/pi/issues/11335)
- 设置 512 字节限制后，2,048 字节的 JSON 工具描述仍可通过，而同样内容经 SSE 会正确拒绝。
- 表明 HTTP JSON 与 SSE 的消息大小校验路径不一致，存在内存消耗、恶意 MCP 服务及资源限制失效风险。
- 已有 4 条评论，Open 状态。

### 3. MCP OAuth 登录成功后仍长时间卡在 Connecting
- **Issue**：[#11311](https://github.com/earendil-works/pi/issues/11311)
- 浏览器显示认证成功后，Pi 仍可能停留 2–3 分钟；此时 Ctrl+C 和关闭浏览器标签均无法取消。
- 问题涉及 OAuth 回调完成后的连接握手、超时和取消传播，影响 MCP 服务的首次接入体验。
- 已有 3 条评论，Open 状态。

### 4. 上下文溢出未被识别，自动压缩不触发
- **Issue**：[#10885](https://github.com/earendil-works/pi/issues/10885)
- 对接 llama.cpp 时，服务端 KV pool 满并返回 `Context size has been exceeded.`，Pi 未将其识别为上下文溢出，因此自动压缩无法启动。
- 这会让长会话在自托管模型上直接中断，尤其影响大上下文、持续编码类任务。
- 5 条评论、1 个赞；Open 状态。

### 5. `cacheWarming: "idle"` 在扩展处理 turn 后静默失效
- **Issue**：[#10956](https://github.com/earendil-works/pi/issues/10956)
- 扩展处理 `turn_end` 并带有自定义或压缩消息时，Pi 会将上下文标记为已变化，使 idle 缓存预热不再触发。
- 报告者观察到 507 次 `cache_warming_decision` 均未进入低概率预热路径，显示问题具有稳定复现特征。
- 已有 10 条评论，是本批高互动 Issue 之一；Open 状态。

### 6. 压缩后的文件操作列表持续无界增长
- **Issue**：[#11297](https://github.com/earendil-works/pi/issues/11297)
- 每次压缩都会把 `<read-files>` 和 `<modified-files>` 追加到摘要，下一轮压缩又从旧列表继承并继续累加。
- 长期会话可能造成摘要膨胀、token 浪费和压缩质量下降，属于上下文生命周期管理问题。
- 3 条评论；Open 状态。

### 7. `undici` 固定版本仍未包含安全修复
- **Issue**：[#11413](https://github.com/earendil-works/pi/issues/11413) · 关联 [#11208](https://github.com/earendil-works/pi/issues/11208)
- 报告称已发布至 1.4.0 的版本仍固定使用 `undici 8.10.2`，低于建议的 8.12.2；相关依赖锁文件、CLI bundle 和补丁版本均需更新。
- 社区已有明确修复目标，但当前 Issue 已关闭，是否完成发布仍需以版本产物为准。
- 两个相关 Issue 共获得 6 条评论。

### 8. 会话 JSONL 文件默认以 `0644` 创建
- **Issue**：[#11417](https://github.com/earendil-works/pi/issues/11417)
- 会话文件未显式指定权限，在常见 `umask 022` 下会被其他本地用户读取；会话目录默认也可能成为 `0755`。
- 会话中可能包含提示词、源码片段、工具输出和敏感上下文，默认权限过宽属于本地数据泄露风险。
- 今日新建并关闭，已有 1 条评论。

### 9. `stripAnsi` 残留私有 CSI 参数
- **Issue**：[#11377](https://github.com/earendil-works/pi/issues/11377)
- 当前实现允许 `<`、`=`、`>` 作为 CSI 结束字节，但仅剥离部分序列，导致鼠标报告和设备回复的参数残留为普通文本。
- 工具输出中混入控制协议内容，可能污染上下文、模型输入和日志展示。
- 4 条评论；Open 状态。

### 10. XDG 配置目录规范落地
- **Issue**：[#2870](https://github.com/earendil-works/pi/issues/2870)
- Pi 在 Linux 上仍可能把配置和状态散落在 home 目录，Issue 建议按 XDG Base Directory 规范使用 `$XDG_CONFIG_HOME`，默认回退到 `$HOME/.config`。
- 这项长期讨论获得了本批最高社区关注度：25 条评论、69 个赞。
- Issue 已关闭，是今日最热度的技术议题。

---

## 重要 PR 进展

> 今日共 9 个 PR 更新，以下按影响范围与合并状态选取 10 项对应议题；部分 Issue 与 PR 属于同一修复链路。

### 1. 修复 provider ID 含 `/` 时模型引用无法解析
- **PR**：[#11397](https://github.com/earendil-works/pi/pull/11397) · 关联 [#11394](https://github.com/earendil-works/pi/issues/11394)
- 调整 provider/model 引用拆分逻辑，正确处理 URL 派生的 provider ID，例如 `llama-server=http://host:10800`。
- 修复 `--model "<provider>/<model-id>"` 被错误拆分并报告模型不存在的问题。
- PR 已关闭；相关 Issue 标注已有可用修复。

### 2. 另一路 provider/model 引用解析修复
- **PR**：[#11393](https://github.com/earendil-works/pi/pull/11393)
- 针对同一类 provider ID 含斜杠的问题提供修复方案，确保模型标识只在正确边界拆分。
- 有助于提升自定义 OpenAI/Anthropic 兼容端点及扩展 provider 的可用性。
- PR 已关闭。

### 3. Windows 下入口图检查的路径分隔符修复
- **PR**：[#11399](https://github.com/earendil-works/pi/pull/11399)
- `path.relative()` 在 Windows 返回 `\` 分隔符，而 allow/forbid 规则使用 `/`，导致允许项匹配和禁止项检测异常。
- 修复跨平台导出入口约束检查，减少 Windows CI 或发布流程漏检。
- PR 已关闭。

### 4. `pi.exec()` 保留跨 chunk 的 UTF-8 字符
- **PR**：[#11330](https://github.com/earendil-works/pi/pull/11330)
- 原实现逐块调用 `Buffer.toString()`，UTF-8 多字节字符若跨 stdout/stderr chunk 边界会被替换成乱码。
- 改用独立的 `StringDecoder` 并在结束时刷新，修复中文、Emoji 等字符被破坏的问题。
- PR 已关闭，关联 [#11312](https://github.com/earendil-works/pi/issues/11312)。

### 5. symlink 场景下向 npm 传递真实 agent 路径
- **PR**：[#11396](https://github.com/earendil-works/pi/pull/11396)
- 当 `~/.pi` 是指向 dotfiles 仓库的符号链接时，Pi 原先会把 symlink 路径作为 npm prefix。
- 修复后 npm 锁文件不再写入 `../../../dotfiles/...` 一类异常相对路径，降低扩展安装和卸载时的锁文件污染。
- PR 已关闭。

### 6. 全屏模式保留 iTerm2 内联图片能力
- **PR**：[#11411](https://github.com/earendil-works/pi/pull/11411)
- 原先进入 alternate screen 时会关闭 iTerm2 图片协议，导致工具结果中的图片退化为 `[Image: ...]` 文本。
- 修复后全屏 TUI 仍能直接显示内联图片，改善终端多模态输出体验。
- PR 已关闭。

### 7. HTML 导出补齐系统提示词
- **PR**：[#10718](https://github.com/earendil-works/pi/pull/10718)
- 修复 `pi --export <session.jsonl>` 缺少系统提示词的问题，使其与交互式 `/export` 行为保持一致。
- 导出内容从当前分支读取已记录的系统提示词；旧会话若未记录则不会凭空补全。
- PR 仍为 Open，是本批少数尚未关闭的重要改动。

### 8. `pi-test.sh --no-env` 补全 provider 环境变量清理
- **PR**：[#11395](https://github.com/earendil-works/pi/pull/11395)
- 扩充硬编码的 `unset` 列表，覆盖 `DEEPSEEK_API_KEY`、`MOONSHOT_API_KEY`、`ANTHROPIC_AUTH_TOKEN` 等新支持凭据。
- 避免无环境测试意外读取真实密钥，提升测试隔离性和 CI 安全性。
- PR 已关闭。

### 9. Bedrock 工具参数过多导致请求失败
- **关联 Issue**：[#11416](https://github.com/earendil-works/pi/issues/11416)
- Amazon Bedrock 对包含大量 optional/union 参数的工具 schema 有校验限制，报告中的 20 个 union 参数触发验证失败。
- 目前未提供对应 PR；后续需要 schema 归一化、参数裁剪或更清晰的兼容性错误提示。
- Issue 今日新建并关闭，但底层兼容性需求仍值得关注。

### 10. Kimi Coding 兼容端点错误使用 `developer` role
- **关联 Issue**：[#11365](https://github.com/earendil-works/pi/issues/11365)
- `kimi-coding` 的 Anthropic-compatible 端点拒绝 `developer` 角色，而当前 provider 识别逻辑将其归入错误分支。
- 该问题会直接造成模型请求 400；Issue 标记为 no-action，意味着可能由配置或上游识别逻辑另行处理。
- 尚无明确 PR 进展。

---

## 功能需求趋势

### 1. 上下文与压缩管理
社区最关注长会话的稳定性，包括：

- 正确识别模型服务端的上下文溢出并自动压缩；
- 避免压缩摘要中的文件列表无限累积；
- 保证 cache warming 在扩展、自定义消息和压缩流程中正常触发；
- 隔离 agent loop 调用方的 `context.messages`，避免隐式修改。  
  参考：[#10885](https://github.com/earendil-works/pi/issues/10885)、[#11297](https://github.com/earendil-works/pi/issues/11297)、[#10956](https://github.com/earendil-works/pi/issues/10956)、[#11364](https://github.com/earendil-works/pi/issues/11364)

### 2. MCP 生态成熟度
需求从“能够连接”转向连接后的可靠性与安全性：

- OAuth 登录后的取消、超时和连接状态；
- HTTP JSON 与 SSE 统一执行消息大小限制；
- MCP elicitation 支持；
- 原生 stdio server 支持 `inheritEnv: false`，实现环境变量隔离。  
  参考：[#11311](https://github.com/earendil-works/pi/issues/11311)、[#11335](https://github.com/earendil-works/pi/issues/11335)、[#10274](https://github.com/earendil-works/pi/issues/10274)、[#11361](https://github.com/earendil-works/pi/issues/11361)

### 3. 新模型与 provider 兼容性
高频场景集中在 OpenRouter、OpenAI-compatible、Bedrock、Kimi 和 llama.cpp：

- OpenRouter 下保留 Claude 的 signature-only reasoning chunks；
- Bedrock 支持 GLM-5.3 reasoning effort；
- 正确识别 Kimi Coding 的 role 规范；
- provider ID 含 `/` 时正确解析模型；
- llama.cpp 上下文溢出应触发压缩。  
  参考：[#9534](https://github.com/earendil-works/pi/issues/9534)、[#11354](https://github.com/earendil-works/pi/issues/11354)、[#11365](https://github.com/earendil-works/pi/issues/11365)、[#11394](https://github.com/earendil-works/pi/issues/11394)、[#10885](https://github.com/earendil-works/pi/issues/10885)

### 4. 扩展系统与动态工具
开发者希望扩展能安全地参与完整会话生命周期：

- 工具被动态移除后，历史请求不能全部失效；
- 增加 `user_bash_complete` 一类事件；
- 为自定义消息、扩展 prompt 和索引代码检索提供稳定的启动/偏好机制；
- `tool_search` 应在查询词精确等于工具名时稳定返回该工具。  
  参考：[#11376](https://github.com/earendil-works/pi/issues/11376)、[#8530](https://github.com/earendil-works/pi/issues/8530)、[#11410](https://github.com/earendil-works/pi/issues/11410)、[#11331](https://github.com/earendil-works/pi/issues/11331)

### 5. 终端交互与导出能力
- 全屏 TUI 的 iTerm2 内联图片；
- tmux 环境下正确转发 OSC 52 复制；
- CLI HTML 导出包含系统提示词；
- OSC 133 与 OSC 7501 的终端状态标记兼容。  
  参考：[#11411](https://github.com/earendil-works/pi/pull/11411)、[#10628](https://github.com/earendil-works/pi/issues/10628)、[#10718](https://github.com/earendil-works/pi/pull/10718)、[#11017](https://github.com/earendil-works/pi/issues/11017)

### 6. 包管理与扩展更新
- `pi -e npm:<package>` 应能检查并获取更新，而不是永久复用首次下载缓存；
- 临时 npm 扩展的版本解析及缓存失效策略需要更明确。  
  参考：[#11375](https://github.com/earendil-works/pi/issues/11375)

---

## 开发者关注点

1. **会话可靠性高于新增功能**  
   多个高优先级问题都指向同一根因：Pi 对异常状态、动态工具变化和压缩生命周期的处理不够健壮。一次局部变化可能污染整个长会话。

2. **兼容层的抽象需要更严格**  
   OpenRouter、Bedrock、Kimi、llama.cpp 等 provider 的协议差异频繁暴露在适配层。社区希望统一处理模型标识、role、reasoning signature、上下文错误和工具 schema。

3. **MCP 正在从功能集成进入安全治理阶段**  
   OAuth 取消、消息大小限制、环境隔离、elicitation 和会话工具动态卸载，均表明扩展边界与不可信输入成为重点。

4. **本地数据默认权限需要更保守**  
   会话 JSONL 的 `0644` 权限受到关注。开发者期待 Pi 默认采用仅当前用户可读写的权限，而不是依赖用户自行配置 `umask`。

5. **跨平台与二进制文本边界值得持续测试**  
   Windows 路径分隔符、symlink 下的 npm prefix、跨 chunk UTF-8，以及单独 CR 文件的 grep 上下文，说明边缘环境仍是近期回归高发区。

6. **依赖安全修复必须同步到已发布产物**  
   `undici` 议题不仅关注源码 pin，还要求刷新 lock/shrinkwrap、重建 CLI bundle 并发布补丁版本，反映社区对“源码已改但用户仍安装到旧包”的敏感度。

7. **安全修复与功能改进的交付节奏偏快，但状态沟通仍可加强**  
   今日多数 PR 已关闭、多个 Issue 标注 no-action 或 fix-available。维护者需要更明确地区分“已合入”“已发布”“计划不处理”和“由其他 PR 修复”，以降低社区重复追踪成本。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
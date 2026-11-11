# AI CLI 工具社区动态日报 2026-11-11

> 生成时间: 2026-11-11 05:35 UTC | 覆盖工具: 8 个

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

**观察日期：2026-11-11**  
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、jcode、Pi

> 注：各仓库“过去 24 小时更新”的统计口径并不完全一致；部分日报未披露完整 Issue/PR 数量。下表对缺失数据标注为“未披露”，不对其作精确排名。

---

## 1. 生态全景

AI CLI 已从“单模型命令行助手”快速演进为集代码执行、浏览器操作、远程控制、MCP 扩展和多 Agent 编排于一体的执行平台。当前社区的主要矛盾不再是功能能否接入，而是**升级后状态是否可靠、权限是否透明、跨端任务能否连续，以及失败和计费是否可解释**。

Claude Code、Codex、Gemini CLI 和 OpenCode 都明显加码子 Agent、跨会话协作与工具生命周期管理，但技术侧重点不同：Claude Code 聚焦远程控制和多 Agent 协议，Codex 强化 Windows、Computer Use 与云端协同，Gemini CLI 改善编排状态和代码检索，OpenCode 则突出多 Agent 队列、MCP Events 与权限可解释性。

与此同时，MCP、插件和 Provider 已成为生态扩张的主轴，但“配置成功”并不等于“工具真正可用”：工具暴露、协议版本、OAuth 回调、事件流、参数保真和进程回收仍是高频故障点。随着上下文窗口和多工具并行规模增长，**上下文预算控制、动态工具裁剪、可靠的终止语义和状态可观测性**正在成为下一阶段的核心竞争点。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 2 个 PR 更新；Issues 汇总 10 个热点，完整数量未披露 | 2 | 无新版本 | 讨论热、代码发布低；重点在 Remote Control、认证与 Agent 协作 |
| **OpenAI Codex** | 10 个热点，完整数量未披露 | 45 | `rust-v0.167.1`；`v0.169.0-alpha.9/.10` 测试中 | **高活跃、高交付**，Windows 与 App Server 改动密集 |
| **Gemini CLI** | 10 个热点，完整数量未披露 | 10 | `v0.69.0-preview.0`、`v0.68.0` | **高活跃**，Agent 子系统、发布流水线和浏览器能力并行推进 |
| **GitHub Copilot CLI** | 27 | 1 | `v1.0.110-1`，近期连续发布 `1.0.109` 系列 | Issue 驱动明显；版本迭代稳定，生态协议问题较集中 |
| **Kimi Code CLI** | 0 | 0 | 无 | **当日静默**，缺少可见迭代信号 |
| **OpenCode** | 10 个热点，完整数量未披露 | 10 | `v2.2.7` | **高活跃**，多 Agent、MCP 和权限改造并行推进 |
| **jcode** | 7 | 36 | `v1.0.0-preview.394` | **工程改动极高**，但预览版与 CI 门禁暴露稳定性风险 |
| **Pi** | 10 个热点，完整数量未披露 | 10 | `v1.5.2` | **稳定活跃**，围绕扩展、Provider、同步与性能持续迭代 |

### 活跃度结论

- **按可确认 PR 数量看**：jcode（36）领先，Codex（45）实际最高；Gemini CLI、OpenCode、Pi 均约 10 个。
- **按完整 Issue 更新量看**：Copilot CLI 披露为 27 个，当前最透明；其他工具多仅列热点，无法严格比较。
- **按版本节奏看**：Codex、Gemini CLI、Copilot CLI、OpenCode 和 Pi 均有明确发布；Claude Code 当日无版本发布，Kimi Code CLI 完全静默。
- **不能仅以 PR 数量判断成熟度**：jcode PR 数量高，但 master 存在格式、体积预算和 Ubuntu 测试失败；Codex 则同时具备稳定版、alpha 测试线和大量工程改动。

---

## 3. 共同关注的功能方向

### 3.1 多 Agent、跨会话与跨机器协作

这是多个工具共同出现的最强趋势。

| 工具 | 具体诉求 |
|---|---|
| **Claude Code** | 提出跨机器 Agent-to-Agent 协议、跨用户消息通道、多仓库共享记忆；关注状态同步、任务交接和故障恢复 |
| **Codex** | 关注 ChatGPT–Codex 任务交接、移动端远程配对、共享项目上下文、App Server 运行环境更新 |
| **Gemini CLI** | 需要子 Agent 自动发现和路由、共享记忆、并行协作，并要求父 Agent 能看到子 Agent 状态 |
| **OpenCode** | 子 Agent 每次进入 idle 即向父 Agent 汇报；支持编辑排队提示词，解决后台标签页授权阻塞 |
| **Pi** | 将子代理、共享记录迁移到统一存储层，为备份、同步和协调奠定基础 |
| **jcode** | 通过 Cursor ACP Provider 接入外部 Agent，强调模型路由、effort 配置与子进程回收 |

**共同信号：** 用户正在从“单会话、单 Agent”转向“多个长期运行 Agent 的协同操作系统”。真正有价值的能力不再是能否启动子 Agent，而是**状态可见、任务可交接、权限可继承、失败可恢复**。

---

### 3.2 权限一致性、文件系统沙箱与安全边界

- **Claude Code**：路径校验 Hooks、插件默认 SSH 克隆触发密钥授权、破坏性操作边界。
- **Codex**：统一权限配置解析、修复 Windows Home/Junction 沙箱路径，并出现“Full access”界面与实际权限不一致。
- **Gemini CLI**：关注 `git reset --force`、随机临时脚本、Shell 执行副作用和取消后仍写文件。
- **OpenCode**：沙箱是长期高热需求；符号链接可绕过 deny 规则是典型边界漏洞。
- **Copilot CLI**：权限功能可能异常消耗 PRU，Token 在遮蔽前被丢弃。
- **Pi**：修复损坏工具参数可能实际写坏文件的问题。

**共同信号：** 权限系统必须从“提示词约束”升级为**真实路径解析、命令风险分级、写前确认、目标文件校验和可审计拒绝原因**。只显示“已阻止”但不给命中规则，也无法形成可靠工作流。

---

### 3.3 状态持久化、任务恢复与跨端连续性

- **Claude Code**：Remote Control 在更新、重启、空闲和进程中断后无法恢复；自动更新终止长任务。
- **Codex**：更新或切换账户后本地项目消失；Android 配对失败；任务达到限额后停止，需人工“继续”。
- **Copilot CLI**：`v1.0.110-1` 修复恢复会话并发写入，说明会话所有权成为基础能力。
- **OpenCode**：后台标签页权限阻塞、会话恢复、缓存前缀和 effort 状态不一致。
- **Pi**：Fork 已删除目录的历史会话，并将会话目录迁移至统一 Chord Store。
- **jcode**：OAuth/API Key 切换污染其他会话的 Provider 状态。

**共同信号：** “会话恢复”已不只是重启后能继续聊天，而是要求保留**任务状态、文件上下文、权限、模型参数、Agent 关系和远程连接状态**。

---

### 3.4 MCP 与插件生态的协议可靠性

- **Claude Code**：跨会话消息协议、插件 SSH 供应链行为。
- **Codex**：MCP 产品归因隔离，避免客户端元数据被转发到无关服务。
- **Gemini CLI**：MCP SDK 大版本升级、工具过多触发 API 400，需要动态裁剪。
- **Copilot CLI**：MCP 工具未暴露、旧版 initialize 混用、OAuth 固定回调、进程与容器生命周期。
- **OpenCode**：加入 MCP Events 声明、列举与流式传输，并推进 OAuth 主动刷新。
- **Pi**：扩展钩子、工具参数修复、虚拟模型与缓存预热兼容。

**共同信号：** MCP 已进入“生产级协议竞争期”。下一阶段重点不是再增加 Server 数量，而是统一**能力发现、版本协商、事件流、OAuth 生命周期、参数保真、进程回收和上下文预算**。

---

### 3.5 Computer Use 与浏览器自动化

- **Codex**：Windows 截图转换死锁、Chrome 标签页发现失败、原生应用输入副作用。
- **Gemini CLI**：Wayland 下 Browser Subagent 失败，Browser Agent 忽略 `maxTurns` 配置。
- **Copilot CLI**：截图工具显示成功，却未将图像像素真正返回模型。
- **OpenCode**：浏览器代理改为二进制 WebSocket，6 MiB 图片场景约从 70 秒降至 4 秒。

**共同信号：** Computer Use 的评价标准已从“能够点击”转向三项硬指标：**输入不污染宿主机、视觉结果确实进入模型、长操作可恢复且可观测**。

---

### 3.6 上下文效率与大型仓库检索

- **Claude Code**：低频工具 schema 延迟加载，单次约可减少 **16K tokens** 的固定开销。
- **Gemini CLI**：提出 AST 感知的文件读取、符号搜索和代码映射，减少整文件倾倒。
- **Codex**：关注富媒体请求、64,000 字节工具调用限制和约 16 MiB WebSocket 消息限制。
- **jcode**：统一纯文本 `run` 输出，减少 reasoning chunk 碎片化。

**共同信号：** 模型上下文不再被视为无限资源。工具 schema、代码片段、截图和推理输出都需要**按需加载、分层检索、预算化传输和稳定协议封装**。

---

### 3.7 配额、认证和企业可部署性

- **Copilot CLI**：PRU 异常消耗、内容过滤失败仍扣 credits、账号与远程环境策略不透明。
- **OpenCode**：免费额度不重置、ChatGPT 套餐余量与 CLI 提示不一致。
- **Codex**：OAuth 图像模型能力不完整，Headless Device Code 登录正在补齐。
- **Claude Code**：OAuth `invalid_grant` 强制登出，并提出 Passkey/WebAuthn 需求。
- **Pi**：新增 Azure Entra ID 认证。
- **jcode**：Provider 认证方式切换导致跨会话状态污染。
- **Gemini CLI**：长登录 URL 在窄终端被换行后触发授权失败。

**共同信号：** 身份、套餐和网关状态必须统一展示，并具备**主动恢复、重试、精确解释和跨设备一致性**。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争特点 |
|---|---|---|---|
| **Claude Code** | 终端开发、Desktop Remote Control、多 Agent 协作、插件与工作流 | 希望在桌面/移动端远程操控编码 Agent 的个人与团队用户 | 强项是 Claude 模型深度整合及 Remote 场景；当前短板是更新后恢复、OAuth 稳定性和跨机器协议尚未成熟 |
| **OpenAI Codex** | IDE、桌面、CLI、Cloud、Remote、Computer Use | 大规模采用 ChatGPT/OpenAI 生态、需要端云协同的开发者 | 覆盖入口最广，工程规模最大；Windows、App Server、Cloud 环境和 Computer Use 同步建设，但平台复杂度带来状态一致性问题 |
| **Gemini CLI** | Agent 子系统、Skills、Browser Agent、代码检索 | 使用 Gemini/Google 生态、关注多代理自动化和大型代码库的用户 | 以子 Agent 和工具系统为核心，技术探索激进；终止状态、配置继承、自动路由和 AST 检索仍处早期 |
| **GitHub Copilot CLI** | GitHub 身份、企业代理、MCP、插件、沙箱 | 企业开发者、GitHub 用户及远程/受限网络环境 | 强项是 GitHub 生态与部署合规；MCP 生命周期、企业 NTLM、OAuth 固定端口等细节决定生产可用性 |
| **OpenCode** | 多模型、多 Provider、多 Agent、MCP、Desktop/TUI | 希望统一多个模型和网关、重视可控编排的开发者 | 开源、Provider 灵活，编排功能激进；优势是灵活性和多 Agent 队列，风险是状态复杂、权限绕过及额度透明度不足 |
| **jcode** | 多 Provider、统一网关、本地记忆、脚本化 CLI | 需要 Claude/Command Code/Cursor ACP 等多入口统一的高级用户 | 迭代极快、Provider 扩展激进；目前仍处于预览阶段，Provider 并行实现和 CI 质量门禁尚未收敛 |
| **Pi** | 扩展开发、会话同步、Provider 适配、本地模型 | 重视可编程性、扩展机制、模型兼容和本地部署的开发者 | SDK/扩展导向强，Provider 差异适配深入；正在以 Chord Store/Radius 重建会话存储层，架构成熟度较高但变化很快 |
| **Kimi Code CLI** | 暂无足够当日信号 | 暂无法从本次数据判断 | 过去 24 小时无活动，无法确认其发布节奏、技术路线或社区响应 |

### 定位差异的本质

- **Codex** 胜在平台覆盖和 OpenAI 服务闭环；
- **Claude Code** 胜在 Agent 工作流整合与远程控制愿景；
- **Gemini CLI** 更像开放 Agent 实验场；
- **Copilot CLI** 更强调 GitHub 企业落地；
- **OpenCode** 更强调开放模型与多 Agent 编排；
- **jcode** 更强调统一 Provider 网关；
- **Pi** 更强调扩展、协议适配和可同步的会话基础设施。

---

## 5. 社区热度与成熟度

### 社区热度

**第一梯队：Codex、Gemini CLI、OpenCode**

- Codex：45 个 PR 更新，且同时发布稳定版和 alpha 版，工程迭代规模最大。
- Gemini CLI：发布两个版本，PR 与热点 Issue 同时覆盖 Agent、发布、认证、安全和浏览器。
- OpenCode：版本发布后立即围绕权限、MCP Events、队列编辑和子 Agent 状态推进。

**第二梯队：Copilot CLI、Claude Code、Pi、jcode**

- Copilot CLI：27 个 Issue 更新，扩展协议、企业网络和计费问题集中；仅 1 个 PR 更新，说明当日更多是在吸收反馈。
- Claude Code：热点议题质量高，Remote Control、认证和跨机器协作受到高度关注，但当日发布活动有限。
- Pi：版本与 PR 节奏稳定，问题多集中在扩展生命周期、模型目录和 Provider 兼容性。
- jcode：36 个 PR 显示开发速度极高，但 master CI 门禁失败，且仍为 preview 版本。

**低可见度：Kimi Code CLI**

过去 24 小时无 Issue、PR 或 Release 更新。缺少社区活动不等同于产品能力不足，但确实无法从当日信号判断其活跃度和维护节奏。

### 成熟度判断

| 成熟度层级 | 工具 | 依据 |
|---|---|---|
| **相对成熟、平台化推进** | Codex、Copilot CLI | 多入口、稳定版节奏、认证与企业部署体系较完整；但平台复杂度带来 Windows 和跨端状态问题 |
| **成熟基础上的架构升级** | Claude Code、Pi | 核心工作流成熟，但正重构远程控制、认证、会话存储与扩展生命周期 |
| **快速迭代、体系尚未收敛** | Gemini CLI、OpenCode、jcode | 功能扩张明显，但终止状态、Provider 架构、权限边界或 CI 质量仍有较多待收敛问题 |

### 热度的结构差异

- **Codex** 的热度来自真实安装规模与平台复杂度，问题多发生在 Windows、更新、账户切换和 Computer Use。
- **OpenCode** 的热度集中在免费额度与沙箱，说明其用户对“成本透明”和“边界安全”非常敏感。
- **Claude Code** 的热度更偏前瞻性，跨用户/跨机器 Agent 协议和 Passkey 代表生态方向，而非单纯缺陷修复。
- **Gemini CLI** 的热度集中于 Agent 内部正确性，社区开始要求可信终止状态和子 Agent 可观测性。
- **Copilot CLI** 的热度偏向企业兼容性和插件/MCP 生产细节。

---

## 6. 值得关注的趋势信号

### 趋势一：Agent CLI 的竞争单位正从“模型”转向“运行时”

模型选择已逐渐商品化，真正形成差异化的是：

- 任务生命周期和恢复能力；
- 权限与沙箱；
- 工具注册、裁剪和协议兼容性；
- 子 Agent 编排；
- 远程与跨端一致性；
- 失败、费用和状态的可解释性。

**对开发者的价值：** 选型时不应只比较基准测试，而应重点验证“升级、重启、限流、取消、权限拒绝、后台任务”这些异常路径。

---

### 趋势二：状态持久化将成为下一代 CLI 的核心基础设施

Claude Code 的 Remote Control、Codex 的项目丢失、OpenCode 的后台阻塞、Pi 的 Chord Store 和 jcode 的 Provider 污染，都指向同一问题：**状态正在从单进程内存迁往跨设备、跨会话持久层**。

**值得关注的架构模式：**

- 会话目录和 Agent 关系进入统一存储；
- 更新、迁移和备份采用 outbox 或事件同步；
- 恢复时同时恢复模型、工具、权限和任务状态；
- 桌面、移动端、CLI 和 IDE 共享同一会话真源。

---

### 趋势三：多 Agent 协作进入“协议化”阶段

Claude Code 的跨机器协议、OpenCode 的 idle 回报与队列编辑、Gemini CLI 的自动路由、Pi 的共享记录迁移，说明“启动一个子 Agent”已不稀缺。

下一阶段的核心能力包括：

1. 标准化消息和任务交接；
2. Agent 身份、权限和信任边界；
3. 父代理对子代理进度的持续可见性；
4. 空闲、失败、取消和恢复的明确状态；
5. 跨机器上下文同步及凭据隔离。

**对开发者的价值：** 构建多 Agent 产品时，应先定义状态机和消息协议，而不是把子 Agent 当作简单的后台提示词调用。

---

### 趋势四：MCP 的瓶颈从“连接”转向“语义正确”

工具成功连接但未暴露、命令执行成功却报告失败、截图成功但模型拿不到像素、OAuth 回调不匹配、旧版初始化与新版协议混用，这些都不是简单的连接失败，而是**语义层不一致**。

建议在 MCP 集成中建立以下验证标准：

- 工具发现与最终暴露列表一致；
- 初始化协商结果可观测；
- 参数 schema 与实际载荷保真；
- 取消、超时和进程回收有明确语义；
- OAuth 回调与重定向地址可配置；
- 多模态结果以模型可消费格式返回；
- 扩展事件支持顺序、重放和去重。

---

### 趋势五：上下文预算将成为类似内存管理的系统级问题

Claude Code 的 16K schema 固定开销、Gemini CLI 的 AST 检索诉求、Codex 的消息大小限制、OpenCode 的图像传输优化共同表明，Agent CLI 需要类似操作系统虚拟内存的上下文调度机制。

值得采用的策略：

- 按任务动态选择工具，而非暴露全部工具；
- 对低频工具 schema 延迟加载；
- 按符号、函数和调用关系读取代码；
- 大图、附件和历史记录外置；
- 压缩过程与业务运行串行化；
- 对 reasoning、工具事件和最终答案定义稳定输出协议。

---

### 趋势六：安全边界必须基于真实资源和真实目标

符号链接绕过、权限 UI 与实际权限不一致、取消后仍写文件、SSH 克隆触发密钥授权、损坏参数可能写坏文件，说明仅依赖提示词或声明路径无法构成可靠安全模型。

**建议最低防护基线：**

- 文件权限判断解析真实路径、canonical path 和 junction；
- 写操作在提交前再次检查取消、范围和内容；
- 强制覆盖、Git 重置、数据库变更需分级确认；
- 工具权限提示展示实际命中的规则；
- 插件与公开仓库默认使用 HTTPS；
- 多会话和子 Agent 继承最小权限及独立凭据。

---

### 趋势七：Windows 和无头/远程环境仍是高频断层

Codex 的 Windows 问题最集中，Claude Code 存在 Windows 更新终止进程，Copilot CLI 有 NumLock 与旧版 macOS runtime，Gemini CLI 有 Wayland 和 SSH 客户端差异，Pi 和 jcode 均涉及企业或本地 Provider 兼容。

这意味着跨平台成熟度不能只看主流 macOS/Linux 路径。关键测试矩阵至少应包括：

- Windows 自动更新与长时间后台任务；
- Wayland、Kitty、tmux 和窄终端；
- SSH、无浏览器和 Device Code 登录；
- 企业 NTLM/Kerberos 代理；
- macOS 旧版本及不同架构；
- Android/iOS 配对与局域网权限。

---

### 趋势八：商业透明度将影响工具采用

Copilot CLI 的 PRU/credits 消耗、OpenCode 的免费额度与 ChatGPT 套餐显示不一致、Codex 的限额后停止，都表明用户已将额度准确性视为产品核心功能。

理想实现应包括：

- 精确区分速率限制、订阅上限、功能策略和内容过滤；
- 展示每类错误的剩余额度及重置时间；
- 限流后支持可恢复 Goal 或后台任务续跑；
- 模型路由、fallback 和折扣明确展示；
- 自动重试不得造成用户不可感知的重复计费。

---

## 决策建议

### 面向技术决策者

- **追求平台完整性和云端协同**：优先评估 Codex，但必须验证 Windows 更新、账户切换和 Remote 恢复。
- **追求终端 Agent 深度工作流和远程控制潜力**：重点评估 Claude Code，但应将 Remote Control 更新恢复、OAuth 稳定性和多机器协议成熟度纳入采购或上线门槛。
- **追求开放模型、多 Provider 和可控编排**：优先评估 OpenCode，同时重点审查符号链接权限、配额同步和多 Agent 状态机。
- **企业 GitHub 环境**：优先评估 Copilot CLI，重点验证 MCP、OAuth、企业代理、远程环境和费用计量。
- **需要高度可编程扩展与 Provider 适配**：Pi 更值得长期跟踪；其会话同步和扩展架构方向清晰，但升级兼容风险需持续观察。
- **需要多网关统一入口**：jcode 发展速度突出，但当前应继续使用 stable channel，并等待 CI 门禁和 Command Code/Cursor ACP 实现收敛。

### 面向开发者

建议在工具选型或自研 CLI 时，将以下项目纳入强制验收：

1. 更新、重启和限流后的任务恢复；
2. 真实文件路径下的权限隔离；
3. 子 Agent 的状态、失败和取消语义；
4. MCP 工具是否真正暴露并向模型传递完整结果；
5. 多模态截图是否真正进入模型上下文；
6. 工具 schema 和大型仓库检索的 token 成本；
7. 配额、重试、fallback 与计费透明度；
8. Windows、Wayland、SSH 和企业代理兼容性。

**总体判断：** 当前 AI CLI 生态已进入“能力扩张后的可靠性收敛期”。下一阶段赢家不一定是工具最多者，而是能够以**可信状态、真实权限、稳定协议、透明成本和跨端连续性**支撑无人值守生产工作流的工具。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 **2026-11-11**。  
> 说明：所给热门 PR 的“评论数”字段均为 `undefined`、点赞数也为 0，因此无法严格按讨论热度排序。以下综合 PR 的社区关注度、影响范围、持续更新时间及关联 Issue 进行筛选；状态均依据题面数据。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与价值 | 社区讨论热点 | 当前状态 |
|---|---|---|---|---|
| 1 | [mcp-builder 兼容 MCP 2.x 与自定义 Header 修复（#1742）](https://github.com/anthropics/skills/pull/1742) | 适配 MCP 2.0 后重命名的 `streamable_http_client`，并支持通过专用 HTTP client 注入自定义请求头。 | 依赖升级后的 API 兼容性是直接影响 MCP 开发的核心问题；同时涉及企业代理、鉴权和定制 Header 场景。 | **Open**；关联 [#1668](https://github.com/anthropics/skills/issues/1668) |
| 2 | [skill-creator：隔离触发评测并处理 Windows/运行时失败（#1298）](https://github.com/anthropics/skills/pull/1298) | 修复触发评测中的并发竞争、Windows `select()` 异常及子进程失败误判，使 Skill 是否被正确触发的评估更可靠。 | Skill 是否“应该触发”已成为质量体系核心；社区重点关注假阴性、跨平台稳定性和负样本误通过。 | **Open** |
| 3 | [skill-creator：YAML frontmatter 正确解析（#1997）](https://github.com/anthropics/skills/pull/1997) | 修复手工解析 YAML 导致引号、转义和续行信息丢失，使评测与描述优化读取到真实元数据。 | 触发描述的准确性直接决定 Skill 被发现和调用的概率；元数据解析偏差可能令评测结果失真。 | **Open** |
| 4 | [skill-creator：支持直接运行 `package_skill.py`（#1681）](https://github.com/anthropics/skills/pull/1681) | 修复脚本独立执行时的模块导入错误，并同步更新 CLI 用法与文档路径。 | 反映出 Skill 开发工具在安装方式、运行入口和示例一致性上仍存在明显摩擦。 | **Open** |
| 5 | [webapp-testing：移除 `shell=True`（#1980）](https://github.com/anthropics/skills/pull/1980) | 重构测试服务器启动逻辑，避免将用户或 Agent 提供的命令直接交给系统 Shell，降低命令注入风险。 | 安全问题受到明显关注：测试 Skill 通常执行外部命令，如何安全地支持 `cd && command` 等复合命令是核心争议。 | **Open** |
| 6 | [docx：LibreOffice 超时改为错误并验证修订痕迹（#1792）](https://github.com/anthropics/skills/pull/1792) | 不再把转换超时误报为成功；转换后检查 DOCX XML，确认修订标记确实被接受。 | 社区关注“生成成功”是否经过语义验证，而非仅依赖进程退出状态；涉及可靠性、可审计性和真实交付质量。 | **Open** |
| 7 | [xlsx：修复工作表级定义名称与外部链接检查（#2019）](https://github.com/anthropics/skills/pull/2019) | 改进 `external_links_at_risk`，覆盖工作表级 `defined_names`、别名及间接外部引用，降低漏报。 | 表格 Skill 的难点已从“生成文件”转向复杂 Excel 语义和风险识别；社区关注隐藏依赖及错误公式。 | **Open**；关联 [#2013](https://github.com/anthropics/skills/issues/2013) |
| 8 | [document-typography：文档排版质量控制（#514）](https://github.com/anthropics/skills/pull/514) | 自动检查孤行、寡行、标题孤置及编号错位等 AI 文档常见排版问题。 | 虽创建较早，但代表稳定的高价值方向：不只生成内容，还需保证输出达到可交付的排版质量。 | **Open** |

### 其他值得关注的 PR

- [webapp-testing：正确区分 textarea、select 与 input（#1976）](https://github.com/anthropics/skills/pull/1976)：提升元素发现语义准确性。
- [pptx：提前拒绝非法 `--cols` 参数（#1975）](https://github.com/anthropics/skills/pull/1975)：改善 CLI 报错时机和可理解性。
- [algorithmic-art：修复环绕函数负数与上界行为（#1977）](https://github.com/anthropics/skills/pull/1977)：修复核心算法边界条件。
- [Notion Spec → Implementation + Resume Auditor（#1245）](https://github.com/anthropics/skills/pull/1245)：把规格拆成可执行任务，并量化恢复工作状态。
- [SCNet HPC Skill（#1615）](https://github.com/anthropics/skills/pull/1615)：覆盖 SSH、Slurm、集群发现及 GPU/加速器任务。
- [md2video-audio（#1703）](https://github.com/anthropics/skills/pull/1703)：将 Markdown 转换为带配音的视频。

---

## 2. 社区需求趋势

### 2.1 工作流自动化与“规格到执行”

社区希望 Skill 不再只是回答问题，而是承担完整闭环：

- 读取产品或技术规格；
- 拆解任务、生成验收标准；
- 创建并更新 Notion 等项目管理记录；
- 跟踪进度；
- 在中断后恢复执行；
- 对最终结果进行审计。

代表提案：

- [Notion Spec to Implementation / quantitative-resume-auditor（PR #1245）](https://github.com/anthropics/skills/pull/1245)
- [compact-memory：用符号化表示压缩 Agent 状态（Issue #1329）](https://github.com/anthropics/skills/issues/1329)
- [Reasoning Quality Gate Pipeline（Issue #1385）](https://github.com/anthropics/skills/issues/1385)

### 2.2 质量门禁、代码审查与交付验证

社区期待把可靠性检查做成标准化流水线：

- 执行前校准；
- 对抗式复核；
- 交付前自动验证；
- 外部链接、公式、修订标记等专项审计；
- 生成可追溯的审计证据。

相关讨论：

- [Reasoning Quality Gate Pipeline（Issue #1385）](https://github.com/anthropics/skills/issues/1385)
- [ProofCore 智能合约审计 Skill（PR #1771）](https://github.com/anthropics/skills/pull/1771)
- [DOCX 修订痕迹验证修复（PR #1792）](https://github.com/anthropics/skills/pull/1792)
- [XLSX 外部链接风险审计修复（PR #2019）](https://github.com/anthropics/skills/pull/2019)

### 2.3 文档生成从“内容正确”升级为“成品可交付”

需求集中在：

- 排版与视觉质量；
- 复杂 Office 格式保真；
- 修改、转换后的结果验证；
- 多格式内容生成，如 Markdown、视频和语音。

代表提案：

- [document-typography（PR #514）](https://github.com/anthropics/skills/pull/514)
- [md2video-audio（PR #1703）](https://github.com/anthropics/skills/pull/1703)
- [DOCX 批注孤项检测（PR #1734）](https://github.com/anthropics/skills/pull/1734)

### 2.4 企业级共享、治理与权限控制

组织需要：

- 在团队或企业范围内共享 Skill；
- 统一发布和版本同步；
- 明确官方与社区 Skill 的信任边界；
- 对高权限 Agent Skill 进行来源识别和治理。

代表讨论：

- [Claude.ai 组织级 Skill 共享（Issue #228）](https://github.com/anthropics/skills/issues/228)
- [社区 Skill 冒用 `anthropic/` 命名空间（Issue #492）](https://github.com/anthropics/skills/issues/492)
- [agent-governance Skill 提案（Issue #412）](https://github.com/anthropics/skills/issues/412)

### 2.5 Skill 自身需要更可靠、更节省上下文

当前社区已经不只是“需要更多 Skill”，而是要求现有 Skill：

- 触发更准确；
- 评测结果可信；
- 上下文占用更低；
- 安装、同步和重复加载行为更透明；
- 在 Windows 等环境中稳定运行。

代表讨论：

- [`claude-api` 单次注入约 156k tokens（Issue #1487）](https://github.com/anthropics/skills/issues/1487)
- [`run_eval.py` 触发率为 0（Issue #556）](https://github.com/anthropics/skills/issues/556)
- [多 worker 评测串扰 UUID、产生假阴性（Issue #1352）](https://github.com/anthropics/skills/issues/1352)
- [插件安装导致重复 Skills（Issue #189）](https://github.com/anthropics/skills/issues/189)

---

## 3. 高潜力待合并 Skills

以下 PR 均为 **Open**，但具有明确价值、较强现实需求或较高落地概率。

| 优先级 | PR | 落地潜力判断 |
|---|---|---|
| 1 | [skill-creator：隔离触发评测并处理 Windows/运行时失败（#1298）](https://github.com/anthropics/skills/pull/1298) | 直接影响所有 Skill 的质量评估可信度，且与 [#556](https://github.com/anthropics/skills/issues/556)、[#1352](https://github.com/anthropics/skills/issues/1352) 等高讨论 Issue 强关联。 |
| 2 | [skill-creator：正确解析 YAML frontmatter（#1997）](https://github.com/anthropics/skills/pull/1997) | 修复范围小但位于触发评测和描述优化的基础路径，回归风险可控、收益直接。 |
| 3 | [webapp-testing：移除 `shell=True`（#1980）](https://github.com/anthropics/skills/pull/1980) | 属于明确的安全加固，容易获得维护者重视；需兼顾复合命令兼容性。 |
| 4 | [mcp-builder：兼容 MCP 2.x 与自定义 Header（#1742）](https://github.com/anthropics/skills/pull/1742) | 解决生态升级造成的直接破坏，且关联明确 Issue，落地动机强。 |
| 5 | [docx：超时错误化并验证修订痕迹（#1792）](https://github.com/anthropics/skills/pull/1792) | 提升交付可信度，符合“生成后验证”的社区主线需求。 |
| 6 | [xlsx：修复工作表级定义名称及外部链接检查（#2019）](https://github.com/anthropics/skills/pull/2019) | 针对真实业务中的隐藏外部依赖与漏报，实用价值高。 |
| 7 | [Notion Spec to Implementation + Resume Auditor（#1245）](https://github.com/anthropics/skills/pull/1245) | 覆盖“规格拆解—任务执行—进度恢复—量化审计”完整链路，代表企业工作流方向。 |
| 8 | [document-typography（#514）](https://github.com/anthropics/skills/pull/514) | 能显著改善所有生成文档的最终观感，具备跨文档场景的普适价值。 |

### 建议优先关注但尚不确定

- [SCNet HPC（#1615）](https://github.com/anthropics/skills/pull/1615)：专业场景明确，但用户面相对垂直。
- [md2video-audio（#1703）](https://github.com/anthropics/skills/pull/1703)：传播性强，但依赖链与输出质量仍需验证。
- [ProofCore Contract Auditor（#1771）](https://github.com/anthropics/skills/pull/1771)：创新性高，但涉及外部区块链与第三方协议，需重点审查信任边界。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是让 Skills 从“能生成内容的工具包”升级为“可信、可验证、可协作、可持续运行的端到端工作流”。**

具体表现为三条主线：

1. **可信触发与可靠执行**：解决触发评测失真、运行时误判和跨平台问题；
2. **可验证交付**：对文档、表格、代码和测试结果进行自动验收，而非只生成文件；
3. **企业与团队治理**：解决共享、命名空间信任、权限、安全和上下文膨胀问题。

---

# Claude Code 社区动态日报

**日期：2026-11-11**  
**数据范围：anthropics/claude-code 过去 24 小时更新**

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在 **Desktop Remote Control 的稳定性、跨会话/跨机器 Agent 协作，以及身份认证能力扩展**。Windows 自动更新导致 Remote Control 状态丢失、长任务进程被终止，以及桌面端 OAuth 异常登出，是当前最突出的可靠性问题。

> 注：过去 24 小时仅有 2 个 PR 更新，无法从中可靠挑选 10 个重要 PR；下文如实列出全部，并补充近期仍具代表性的相关 Issue 作为背景。

---

## 社区热点 Issues

### 1. 跨机器 Multi-agent 协作协议
[#28300](https://github.com/anthropics/claude-code/issues/28300)

提出通过 Agent-to-Agent 协议，让不同机器上的 Claude Code 代理协同工作。它是今日评论最多的议题，**59 条评论**反映了社区对分布式 Agent、跨主机任务交接和统一编排能力的强烈兴趣。

### 2. Passkey/WebAuthn 登录 Claude 账户
[#84862](https://github.com/anthropics/claude-code/issues/84862)

希望在所有 Claude 使用入口支持 Passkey 登录。该需求获得 **176 个点赞**，是本次数据中最受支持的功能建议之一，体现用户对无密码认证、跨端一致登录体验和安全性的重视。

### 3. 日语指令在长会话中失效
[#96326](https://github.com/anthropics/claude-code/issues/96326)

用户通过 `CLAUDE.md` 和会话设置要求始终使用日语，但模型读取英文工具输出后仍会切换成英文回复，且纠正难以保持。问题对本地化、提示词稳定性和长期 Agent 会话具有普遍影响，已积累 **22 条评论、38 个点赞**。

### 4. Windows 自动更新后 Remote Control 丢失
[#100114](https://github.com/anthropics/claude-code/issues/100114)

Windows Desktop 静默更新或重启后，Remote Control 不会自动恢复，手机端会将已有会话显示为归档。该问题直接影响“离开电脑后继续远程控制”的核心使用场景。

### 5. 跨平台自动更新导致 Remote Control 丢失
[#95491](https://github.com/anthropics/claude-code/issues/95491)

Windows 和 macOS 均出现静默自动更新终止会话后，Remote Control 未恢复的问题。与多个相关 Issue 合并观察后可见，这已形成明显的跨平台产品缺陷集群。

### 6. Desktop OAuth 刷新失败并强制登出
[#93014](https://github.com/anthropics/claude-code/issues/93014)

macOS Desktop 的 OAuth token 刷新出现 `invalid_grant`，重新授权又被服务端拒绝，最终使活跃会话被强制登出。这不仅是登录体验问题，也可能中断正在运行的 Agent 任务。

### 7. Desktop Remote Control 在空闲后会断开
[#102534](https://github.com/anthropics/claude-code/issues/102534)

Remote Control 仅在会话进程活跃时保持连接；空闲后会断开，且必须从 Mac 端发送消息才能重新启用。对于长期后台任务，这是影响远程监看和控制的重要缺陷。

### 8. 插件市场通过 SSH 克隆触发密钥访问提示
[#14485](https://github.com/anthropics/claude-code/issues/14485)

官方插件仓库是公开资源，却使用 SSH 地址克隆，导致 1Password 等 SSH Agent 弹出额外密钥访问确认。该 Issue 获得 **50 个点赞、11 条评论**，兼具安全直觉、易用性和供应链信任问题。

### 9. 跨用户、跨会话消息通道
[#87954](https://github.com/anthropics/claude-code/issues/87954)

希望两个不同用户的 Claude Code 会话可以直接通信，用于任务交接、咨询和协作。该需求与跨机器 Agent 协议相互呼应，说明社区期待从“单用户多代理”进一步走向“多方协作网络”。

### 10. `DISABLE_TELEMETRY` 同时禁用功能标志
[#108726](https://github.com/anthropics/claude-code/issues/108726)

设置 `DISABLE_TELEMETRY=1` 后，Claude Code 不仅关闭遥测，还会忽略功能标志缓存，使模型选择器中的 Fable 5.2 等功能消失。Issue 于 11 月 10 日创建、当天更新，已有 **12 个点赞、5 条评论**，属于新近且具有明确复现条件的问题。

---

## 重要 PR 进展

过去 24 小时更新的 PR 只有以下两项，且状态均为 **Closed**：

### 1. 路径校验 Hooks
[#26230](https://github.com/anthropics/claude-code/pull/26230)

该 PR 尝试阻止 Agent 工具调用中的相对路径，为更安全的沙箱执行提供基础。当前 PR 已关闭；其思路仍与近期社区对 Agent 权限控制、路径隔离和供应链安全的需求相关。

### 2. `/commit-push-pr` 支持 Conventional Branch
[#74722](https://github.com/anthropics/claude-code/pull/74722)

为 `/commit-push-pr` 增加可选的 `conventional` 参数，可根据 diff 推断 `feature`、`bugfix`、`hotfix`、`release`、`chore`、`docs`、`test` 等分支类型，并按 Conventional Branch 规范生成 `<type>/<description>`。该 PR 当前已关闭。

---

## 功能需求趋势

### 1. 跨会话、跨机器、跨用户的 Agent 协作
相关需求包括：

- [跨机器 Multi-agent 协议 #28300](https://github.com/anthropics/claude-code/issues/28300)
- [跨用户会话消息通道 #87954](https://github.com/anthropics/claude-code/issues/87954)
- [云会话间 SendMessage #92540](https://github.com/anthropics/claude-code/issues/92540)
- [多仓库通信与持久化记忆 #90025](https://github.com/anthropics/claude-code/issues/90025)

社区关注点正在从“单个 Claude Code 能调用多少工具”，转向“多个 Agent 如何分工、共享上下文、恢复状态并安全通信”。

### 2. Remote Control 的会话持久化
相关 Issue 集中在 [#100114](https://github.com/anthropics/claude-code/issues/100114)、[#95491](https://github.com/anthropics/claude-code/issues/95491)、[#77252](https://github.com/anthropics/claude-code/issues/77252)、[#104206](https://github.com/anthropics/claude-code/issues/104206)、[#108519](https://github.com/anthropics/claude-code/issues/108519)。

用户期待远程控制能够跨更新、重启、空闲和进程中断可靠恢复，并让手机端状态与桌面端保持一致。

### 3. 更现代、更安全的认证
[Passkey/WebAuthn #84862](https://github.com/anthropics/claude-code/issues/84862) 获得高关注；与此同时，[OAuth 强制登出 #93014](https://github.com/anthropics/claude-code/issues/93014) 暴露出令牌刷新可靠性不足。认证需求已经不只是“增加登录方式”，还包括会话连续性和跨端一致性。

### 4. 工具 schema 延迟加载与上下文成本优化
[延迟加载 Artifact、Workflow、ScheduleWakeup、ReportFindings schema #102032](https://github.com/anthropics/claude-code/issues/102032) 指出，这些内置工具每次请求都会内联完整 schema，单次约占 **16K tokens**。社区希望进一步降低固定上下文开销，提高长会话效率和模型响应速度。

### 5. Desktop Code Tab 的会话级控制
[#104151](https://github.com/anthropics/claude-code/issues/104151) 请求允许为 Claude 新建或建议的子会话选择 effort，并支持高于父会话的 effort。这表明用户希望精细控制子 Agent 的推理成本、速度和任务深度。

### 6. TUI 交互效率和可访问性
相关需求包括：

- [Inline quote-reply 立即发送 #95733](https://github.com/anthropics/claude-code/issues/95733)
- [插件 TUI 焦点移动问题 #102882](https://github.com/anthropics/claude-code/issues/102882)

开发者希望减少“累积引用后再发送”的操作步骤，同时改善键盘焦点可见性和辅助技术播报。

### 7. 跨平台与时区可靠性
[British Columbia 定时任务延迟一小时 #108646](https://github.com/anthropics/claude-code/issues/108646) 暴露出调度器可能硬编码旧 UTC 偏移的问题。社区期待调度、时区和夏令时处理更加标准化。

---

## 开发者关注点

1. **Remote Control 是当前最大质量痛点**  
   自动更新、应用重启、空闲超时和移动端显示“Connected”但消息丢失等问题反复出现，直接破坏远程、无人值守和长任务工作流。

2. **自动更新缺少进程与状态保护**  
   Windows 更新会终止由 Agent 启动的长期进程，相关报告包括 [#108960](https://github.com/anthropics/claude-code/issues/108960) 和 [#94205](https://github.com/anthropics/claude-code/issues/94205)。开发者需要更新前告警、宽限期、任务迁移或安全恢复机制。

3. **跨 Agent 协作仍缺少一等公民协议**  
   社区期待统一的消息传递、状态同步、任务交接、身份确认和故障恢复能力，而不是依赖临时文件或人工复制上下文。

4. **语言与指令遵循需要更稳定**  
   长会话中的语言漂移说明，仅靠 `CLAUDE.md` 不能完全保证输出约束；工具输出、系统提示和会话状态之间仍可能发生优先级混淆。

5. **Windows 专属缺陷较集中**  
   除 Remote Control 外，还包括 PowerShell/Bash 调用弹出并抢占焦点的 [可见控制台窗口问题 #91264](https://github.com/anthropics/claude-code/issues/91264)，以及超过约 8 KB 时 Bash 输出静默丢失的 [session-env hook 问题 #103861](https://github.com/anthropics/claude-code/issues/103861)。

6. **插件和供应链信任需要更保守的默认行为**  
   公开仓库应默认使用 HTTPS；插件安装、克隆和启动过程还应避免触发不必要的 SSH 密钥访问。

7. **安全沙箱与路径约束受到重视**  
   路径校验 Hooks 虽未合入，但与用户对 Agent 工具权限、目录逃逸防护和可审计执行环境的长期需求一致。

8. **长会话成本优化诉求上升**  
   将低频工具 schema 延迟到需要时加载，可减少固定 token 开销，尤其适合多代理、长上下文及高频工具调用场景。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-11**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

过去 24 小时发布稳定版 **`rust-v0.167.1`**，同时推进 `v0.169.0` 的 alpha 测试；由于公开 Changelog 未提供具体变更明细，本次无法确认该补丁版包含哪些功能或修复。社区讨论高度集中在 **Windows 桌面端稳定性、扩展启动与项目丢失、Remote/SSH 配对、Computer Use**，以及 **限流后自动恢复、跨端任务交接和新模型选择能力**。过去 24 小时更新的 45 个 PR 则集中在 **权限与沙箱、运行稳定性、认证、macOS 签名、TUI 体验和 App Server API** 等工程链路。

---

## 2. 版本发布

### `rust-v0.167.1`

- **版本类型：** 稳定版
- **主要内容：** 当前提供的 Release/Changelog 未披露具体变更，需以[版本对比](https://github.com/openai/codex/compare/rust-v0.167.0...rust-v0.167.1)为准。
- **同期预发布版本：**
  - [`rust-v0.169.0-alpha.9`](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.9)
  - [`rust-v0.169.0-alpha.10`](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.10)
  - [`rust-v0.167.0-alpha.4.2`](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4.2)

> 版本号表明 Codex 正同时推进稳定分支维护与 `0.169` 系列迭代，但仅凭现有数据不能判断 alpha 版的实际功能变化。

---

## 3. 社区热点 Issues

以下按技术影响、更新热度及社区参与度挑选：

1. **VS Code 扩展升级后 UI 无法启动**
   - **重要性：** 属于阻断级 IDE 集成故障，直接影响 Windows 用户升级后的使用。
   - **社区反应：** **78 条评论、85 个赞**，为当日最受关注问题之一。
   - [Issue #56655](https://github.com/openai/codex/issues/56655)

2. **Codex 更新并切换个人账户后，本地项目消失**
   - **重要性：** 涉及会话数据、账户切换和项目持久化，可能造成用户工作上下文丢失。
   - **社区反应：** **55 条评论、19 个赞**，反映迁移和多账户场景下的高风险。
   - [Issue #59895](https://github.com/openai/codex/issues/59895)

3. **Android 端 Codex Remote 配对失败**
   - **重要性：** 影响移动端与桌面端协同，是 Remote 能力可用性的核心链路。
   - **社区反应：** **62 条评论、32 个赞**，关注度显著高于同类 Remote 问题。
   - [Issue #48774](https://github.com/openai/codex/issues/48774)

4. **Windows 10 Computer Use 在帧转换时死锁**
   - **重要性：** 涉及系统级截图、窗口捕获和 Computer Use 执行可靠性，可能导致任务长期卡住。
   - **社区反应：** **64 条评论**，但点赞较低，表明问题专业性强、影响范围可能较窄。
   - [Issue #35446](https://github.com/openai/codex/issues/35446)

5. **Codex 未完成任务便停止，需要用户反复发送“继续”**
   - **重要性：** 属于核心模型行为与任务连续性问题，会显著增加交互成本并降低自动化可靠性。
   - **社区反应：** **23 条评论、21 个赞**，说明并非孤立案例。
   - [Issue #50771](https://github.com/openai/codex/issues/50771)

6. **Desktop Browser Use 无法发现 Chrome 和内置浏览器标签页**
   - **重要性：** 直接限制桌面端代理操作浏览器的能力，是 Computer Use 的关键场景。
   - **社区反应：** **26 条评论、2 个赞**，更多反映 macOS 桌面端的实际使用阻塞。
   - [Issue #47270](https://github.com/openai/codex/issues/47270)

7. **达到 5 小时限额后，希望 Codex 自动恢复 Goal**
   - **重要性：** 属于高价值产品需求，直接影响长任务、无人值守运行与周限额的可用性。
   - **社区反应：** **17 条评论、83 个赞**，是本次 Issues 中赞数最高的功能诉求之一。
   - [Issue #28931](https://github.com/openai/codex/issues/28931)

8. **Windows 版 Code Review 因插件复制与 errno 检查问题不可用**
   - **重要性：** 影响内置 Code Review、Skills 和加密回退路径，定位信息表明修复可能涉及错误码处理逻辑。
   - **社区反应：** **12 条评论**，技术细节较具体，关注度高于一般 Windows 桌面端问题。
   - [Issue #51218](https://github.com/openai/codex/issues/51218)

9. **“Full access”选择后消失，实际网络仍受限并阻止 SSH**
   - **重要性：** 涉及权限 UI 与真实执行权限不一致，可能造成用户预期偏差和安全语义混乱。
   - **社区反应：** **8 条评论、1 个赞**，虽非最高热度，但安全影响较高。
   - [Issue #60058](https://github.com/openai/codex/issues/60058)

10. **Windows 更新后产生大量 Git for Windows 进程并持续占用 CPU**
   - **重要性：** 属于明显性能和资源消耗问题，可能拖累整台开发机器。
   - **社区反应：** **20 条评论、28 个赞**；该 Issue 已关闭，说明相关排查或修复已有进展。
   - [Issue #22085](https://github.com/openai/codex/issues/22085)

---

## 4. 重要 PR 进展

> 以下 PR 均在当日列表中显示为 **CLOSED**；仅依据摘要无法确认它们最终是已合并、被关闭还是以其他方式结束。

1. **Windows 沙箱 Home 路径规范化及 Junction 路径迁移**
   - 统一沙箱配置、桌面注册请求中的 Home 路径，并在恢复沙箱所有者时解析已保存的 Junction 路径。
   - 有助于减少 Windows 更新、路径别名及目录联接导致的沙箱初始化异常。
   - [PR #60708](https://github.com/openai/codex/pull/60708)

2. **集中管理权限配置选择与旧配置转换**
   - 在 `codex-config` 中引入共享 `PermissionConfig`，统一旧沙箱设置和命名权限配置的解析优先级。
   - 目标是减少权限配置在不同入口间不一致的问题。
   - [PR #60702](https://github.com/openai/codex/pull/60702)

3. **正确结束被中止的 Turn，并忽略无关的延迟中止事件**
   - 修复中止后 Turn 仍保持活动，以及未知 Turn 的迟到中止可能误伤其他显式 ID Turn 的问题。
   - 对会话生命周期和并发任务稳定性有直接影响。
   - [PR #60700](https://github.com/openai/codex/pull/60700)

4. **限制 MCP 产品归因仅用于已配置的 REPL 调用**
   - 防止客户端传入的 `product_sku` 被转发到无关 MCP Server 或连接器。
   - 属于元数据隔离和跨服务安全边界改进。
   - [PR #60697](https://github.com/openai/codex/pull/60697)

5. **为 macOS 公证增加 Signer Service 后端**
   - 支持通过 `grpcurl` 和 GitHub OIDC 生成 Apple 公证 JWT，并验证签名密钥、算法及脱敏错误。
   - 改善 macOS 发布流水线的身份认证与签名可追溯性。
   - [PR #60695](https://github.com/openai/codex/pull/60695)

6. **TUI 状态栏与 Composer Footer 布局重构**
   - 将自定义状态内容与 Composer 提示区域分离，按可用宽度和行数进行换行、截断及优先级分配。
   - 组合了多项布局修复，涉及 [#60683](https://github.com/openai/codex/pull/60683)、[#60682](https://github.com/openai/codex/pull/60682)、[#60681](https://github.com/openai/codex/pull/60681)、[#60680](https://github.com/openai/codex/pull/60680)。

7. **避免切换 Side Chat 时重复读取与清屏**
   - Side Chat 获得焦点后，父线程仍持续接收生命周期通知；返回时无需再次执行存活检查。
   - 可减少冗余 I/O 和终端闪烁，改善多会话切换体验。
   - [PR #60675](https://github.com/openai/codex/pull/60675)

8. **在 Rollout Trace 中保留 Agent 消息投递记录**
   - 即使接收 Agent 后没有继续发起请求，也保留消息投递及交互边。
   - 有助于避免后续推理请求或压缩快照中丢失已接收的 Agent 消息。
   - [PR #60673](https://github.com/openai/codex/pull/60673)

9. **Headless TUI 支持 Gateway Device Code 登录**
   - 在 SSH、无浏览器或无头 Linux 环境中优先使用设备码认证完成 Gateway 登录。
   - 改善服务器端和远程开发环境中的认证可用性。
   - [PR #60662](https://github.com/openai/codex/pull/60662)

10. **App Server 设置 API 支持更新运行环境**
    - 为 `turn/settings/update` 和 `thread/settings/update` 增加实验性 `environments` 字段。
    - Turn 更新作用于当前运行的后续步骤，Thread 更新作用于未来 Turn，为运行时环境切换提供接口基础。
    - [PR #60655](https://github.com/openai/codex/pull/60655)

---

## 5. 功能需求趋势

### 1. 跨端任务连续性与多端协同

- Android 配对失败、SSH 项目消失、共享项目上下文及双向任务交接等问题受到高度关注。
- 用户期待 ChatGPT 移动端与 Codex 桌面端之间能够无缝创建、继续和切换任务。
- 代表 Issue：[Remote Android 配对](https://github.com/openai/codex/issues/48774)、[项目消失](https://github.com/openai/codex/issues/59895)、[ChatGPT–Codex 任务交接](https://github.com/openai/codex/issues/32519)。

### 2. Windows 桌面端可靠性与生命周期管理

高频问题覆盖扩展启动、账户切换、应用更新、权限状态、运行时所有权、Code Review 和远程项目持久化。
- Windows 已成为当日最集中的故障平台。
- 代表 Issue：[扩展无法启动](https://github.com/openai/codex/issues/56655)、[项目消失](https://github.com/openai/codex/issues/59895)、[权限状态不一致](https://github.com/openai/codex/issues/60058)。

### 3. Computer Use 与浏览器自动化

- 用户高度关注截图转换死锁、标签页发现、原生应用无障碍树读取、按键重复以及超时行为。
- 这表明需求已从“能够点击”扩展到稳定、可预测且不会影响宿主机输入的桌面自动化。
- 代表 Issue：[Windows 死锁](https://github.com/openai/codex/issues/35446)、[浏览器发现失败](https://github.com/openai/codex/issues/47270)、[macOS 按键重复](https://github.com/openai/codex/issues/53861)。

### 4. 长任务、限流恢复与无人值守运行

- “达到 5 小时限制后自动恢复 Goal”是高赞功能需求。
- 社区同时关注周额度在订阅续期后的重置语义，需求核心是提升长任务可预期性和自动化连续性。
- 代表 Issue：[限流后自动恢复](https://github.com/openai/codex/issues/28931)、[周额度重置](https://github.com/openai/codex/issues/45619)。

### 5. 模型选择与新模型能力开放

- Cloud 会话需要支持模型发现、切换模型及推理强度设置。
- OAuth 图像用户还希望访问 Images 2.6 专属模型、复杂度和 SVG 等新参数。
- 代表 PR：[Cloud 模型与推理强度选择](https://github.com/openai/codex/pull/60651)；代表 Issue：[Images 2.6 OAuth 能力缺失](https://github.com/openai/codex/issues/59890)。

### 6. IDE、CLI 与移动端入口覆盖

- VS Code 扩展是当前最突出的 IDE 集成阻塞点。
- CLI 用户关注网络安全误拦截、图片请求压缩失败和新模型支持。
- 移动端用户希望直接创建并发布基于 GitHub 仓库的 Codex Cloud 环境。
- 代表 Issue：[VS Code 扩展](https://github.com/openai/codex/issues/56655)、[移动端创建 Cloud 环境](https://github.com/openai/codex/issues/53001)。

---

## 6. 开发者关注点

- **升级不能破坏已有状态：** 应用更新、账户切换或重新登录后，项目、SSH 配置、运行时所有权和权限状态必须可靠保留。
- **权限必须“所见即所得”：** UI 中显示的 Full access、命名配置和实际沙箱/网络权限应保持一致，避免安全能力与用户预期脱节。
- **长任务需要可靠的终止与恢复语义：** Turn 中止、限流、额度重置和自动恢复都需要明确状态，不能依赖用户反复发送“继续”。
- **Computer Use 必须避免宿主机副作用：** 截图死锁、输入重复、无障碍节点缺失和标签页无法发现，会让桌面代理失去实际可用性。
- **远程与无头环境需要自洽的认证流程：** Device Code 登录、SSH 主机持久化、Android 配对和跨系统工作目录是远程开发的关键链路。
- **协议与元数据边界需要更严格：** MCP 元数据隔离、权限配置统一解析、沙箱准备责任迁移，均体现对安全边界和跨平台行为的重视。
- **大型会话和富媒体请求存在工程瓶颈：** 包括 64,000 字节工具调用限制、约 16 MiB WebSocket 消息限制、图片压缩触发 HTTP 400，以及图像密集会话的重试与心跳饥饿。
- **模型能力应可发现且参数一致：** 新模型发布后，CLI、OAuth、Cloud 和内置工具之间仍存在模型选择、输出类型及高级参数不同步的问题。

**总体判断：** Codex 当前社区矛盾已从单纯“功能是否具备”转向 **Windows 更新后的状态可靠性、权限一致性、跨端连续性，以及 Computer Use 的稳定与可控性**。与此同时，Cloud 模型选择、限流恢复、移动端入口和 Headless 认证表明，平台化与远程化仍处于快速建设阶段。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-11-11

## 1. 今日速览

今日 Gemini CLI 发布 `v0.69.0-preview.0` 与 `v0.68.0`，主要带来模板替换稳定性修复和 `/stats` 每日 Token 用量热力图。社区讨论高度集中在 Agent 子系统：终止状态误报、Generalist Agent 挂起、Browser Agent 配置失效，以及工具数量膨胀、代码检索效率等问题。

值得注意的是，一个优先级为 P0 的构建修复指出，残留构建产物导致 npm 发布包异常膨胀，并自 11 月 5 日起持续影响 nightly 发布。

---

## 2. 版本发布

### `v0.69.0-preview.0`

- **修复模板占位符替换行为**：自定义命令参数及系统提示词模板中的字面量 `$` 不再被误解释为 JavaScript replacement pattern，避免 `$$`、`$&`、`$1` 等内容被意外展开或破坏。
- **新增 `/stats heatmap`**：以热力图形式展示每日 Token 使用情况，便于识别使用高峰和消耗趋势。
- 相关链接：
  - [v0.69.0-preview.0 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0-preview.0)
  - [模板 `$` 字符修复 PR #30136](https://github.com/google-gemini/gemini-cli/pull/30136)
  - [模板替换修复 PR #30115](https://github.com/google-gemini/gemini-cli/pull/30115)
  - [v0.69.0-preview.0 Changelog PR #30222](https://github.com/google-gemini/gemini-cli/pull/30222)

### `v0.68.0`

- 包含此前 preview 版本的 Changelog 汇总。
- README 进一步澄清 Gemini CLI 的适用范围、限制和工具能力边界。
- 相关链接：
  - [v0.68.0 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0)
  - [v0.68.0 Changelog PR #30224](https://github.com/google-gemini/gemini-cli/pull/30224)

---

## 3. 社区热点 Issues

### 1. 子 Agent 达到 `MAX_TURNS` 后仍被报告为成功

`codebase_investigator` 在达到最大轮次、实际未完成分析时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`。错误状态会直接掩盖任务中断，对自动化编排和评测可信度影响较大。该问题获得 **13 条评论、2 个赞**，是今日讨论最充分的 Issue。

[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. Generalist Agent 调用后无限挂起

Generalist Agent 在创建文件夹等简单任务中也会无限等待，用户只能手动取消；显式要求模型“不使用子 Agent”则可绕过。该 P1 问题已有 **8 条评论和 8 个赞**，直接影响日常自动化可用性。

[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. Browser Agent 忽略 `settings.json` 配置

Browser Agent 未正确应用全局或项目级 `settings.json` 中的 `maxTurns` 等覆盖项，意味着已经配置的限制可能完全不起作用。问题已有 **5 条评论**，并被标记为需要重新测试。

[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 4. 工具数量过多时触发 400 错误

当环境暴露过多工具时，Gemini CLI 可能收到 API 400 错误。用户期待 Agent 能自动按任务筛选工具，而不是将所有可用工具一并发送。该问题暴露了工具注册、裁剪和上下文预算之间的矛盾，已有 **3 条评论**。

[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 5. Wayland 环境下 Browser Subagent 失败

Browser Subagent 在 Wayland 环境中无法正常运行，并显示以 `GOAL` 结束的终止信息。由于终止状态本身可能存在误报，用户难以判断是浏览器自动化失败还是环境兼容性问题。该 P1 Issue 有 **4 条评论、1 个赞**。

[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 6. Agent 不会主动使用 Skills 和 Subagents

用户反馈，即使自定义 Skill 的描述与任务高度匹配，Gemini 也往往不会主动调用 Skills 或子 Agent，必须在提示词中明确要求。问题反映了 Agent 调度能力不足，以及能力发现和自动路由机制尚不成熟，已有 **7 条评论**。

[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 7. 评估 AST 感知的文件读取、搜索与代码映射

该 Epic 探讨利用 AST 工具更精确地读取函数边界、检索语法结构并构建代码地图，从而减少无效文件读取和 Token 噪声。社区已围绕 AST grep、tilth、glyph 等候选方案展开讨论，拥有 **7 条评论、1 个赞**。

[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 8. 应限制 Agent 的破坏性 Git 和资源操作

社区希望 Agent 在存在更安全方案时，不要主动使用 `git reset`、`--force` 等高风险命令；涉及数据库等资源时，也应增加额外确认或安全策略。该诉求体现用户对 Agent 自主操作边界的担忧，已有 **3 条评论、1 个赞**。

[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 9. Agent 在随机位置创建临时脚本

在限制原生文件工具、仅允许 Shell 执行后，模型会在多个目录中生成编辑脚本，增加工作区清理和提交噪声。该问题说明“强制使用 Shell”并不必然提升可控性，已有 **3 条评论**。

[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 10. `/bug` 报告缺少子 Agent 上下文

主会话生成的 Bug 报告不包含子 Agent 内部轨迹，难以判断失败发生在哪个阶段、由什么工具触发。该问题已有 **2 条评论**，也反映出当前 Agent 可观测性不足。

[Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)

---

## 4. 重要 PR 进展

### 1. 修复 nightly 发布包体积异常（P0）

构建前清理 `bundle/`，移除旧构建残留的 chunk。残留文件约占包内 JavaScript 内容的 70%，导致 tarball 膨胀至约 25.2 MB，并自 11 月 5 日起触发 npm `413 Request Entity Too Large`。这是当前优先级最高、直接阻塞发布流程的修复。

[PR #30207](https://github.com/google-gemini/gemini-cli/pull/30207)

### 2. 登录 URL 在终端换行后仍可点击

窄终端中的 Google 登录 URL 会被换行，终端 URL 检测仅捕获可见片段，导致 `response_type` 等参数丢失并触发 400 授权错误。该 P1 安全/登录体验修复确保长认证链接能被正确识别。

[PR #30107](https://github.com/google-gemini/gemini-cli/pull/30107)

### 3. 认证重启后保留用户选择的 Git worktree

此前认证重启可能丢失 `--worktree` 选择；该 PR 同时覆盖 bootstrap supervisor 和旧版 child-process supervisor，确保登录或重新授权后继续在原 worktree 中工作。

[PR #30176](https://github.com/google-gemini/gemini-cli/pull/30176)

### 4. 修复自定义命令和系统提示词中的 `$` 模式展开

防止 `{{args}}`、`${AgentSkills}`、`${SubAgents}`、`${AvailableTools}` 等替换值中的 `$` 被解释为 JavaScript replacement pattern。该修复直接进入 `v0.69.0-preview.0`，对包含 `$`、正则表达式或 Shell 片段的参数尤其重要。

[PR #30115](https://github.com/google-gemini/gemini-cli/pull/30115)

### 5. 会话预览保留 Unicode 并正确清除 ANSI 片段

此前会话预览和搜索的清洗逻辑可能误删非 ASCII 文本。该 PR 保留国际文字、重音字符和 Emoji，并正确移除 ANSI 转义序列，提升跨语言会话检索的准确性。

[PR #30220](https://github.com/google-gemini/gemini-cli/pull/30220)

### 6. 取消后不再执行文件写入

`replace` 或 `write_file` 在读取文件过程中被取消时，仍可能覆盖目标或创建文件。修复会在内容准备后、真正写入前再次检查取消状态，降低用户取消操作后文件仍被修改的风险。

[PR #29973](https://github.com/google-gemini/gemini-cli/pull/29973)

### 7. 使用 `isWithinRoot` 校验主题文件路径

替换简单的字符串 `startsWith` 判断，防止 `/home/user-sibling` 等共享前缀的兄弟目录被误判为位于用户主目录内，同时统一根目录边界校验逻辑。

[PR #29976](https://github.com/google-gemini/gemini-cli/pull/29976)

### 8. VS Code Companion 正确释放所有 Disposable

修复 `context.subscriptions.push()` 的括号错误，此前每组注册中只有最后一个 Disposable 被加入订阅列表，可能导致扩展停用后仍有监听器或资源残留。该 PR 已关闭。

[PR #29988](https://github.com/google-gemini/gemini-cli/pull/29988)

### 9. 将 TortoiseGitPlink 识别为 PuTTY 家族 SSH 客户端

`getSafeGitEnv()` 现在会为 `TortoiseGitPlink.exe` 使用 Plink 的 `-batch` 参数，而非 OpenSSH 的 `-o BatchMode=yes`，避免 Git SSH 命令进入交互式提示并卡住。

[PR #30214](https://github.com/google-gemini/gemini-cli/pull/30214)

### 10. 批量升级 70 个 npm 依赖

Dependabot 提交了单目录下的依赖组升级，包括 `@modelcontextprotocol/sdk` 从 `1.23.0` 升至 `1.32.2`、`@octokit/rest` 从 `22.0.0` 升至 `22.0.1` 等。依赖跨度较大，合并前需要重点关注 MCP SDK 的兼容性变化。

[PR #30089](https://github.com/google-gemini/gemini-cli/pull/30089)

---

## 5. 功能需求趋势

### 5.1 Agent 编排与自动路由

社区希望 Gemini 能根据任务特征自动选择 Skills、Subagents 和专用工具，而不是依赖用户显式提示。当前能力发现和自动调度机制不足，是 Agent 体系下一阶段的核心方向。

相关 Issues：

- [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
- [Consider subagent discovery via settings.json](https://github.com/google-gemini/gemini-cli/issues/18285)
- [Shared Memory or parallel subagent collaboration](https://github.com/google-gemini/gemini-cli/issues/18287)

### 5.2 代码检索与上下文效率

AST 感知的读取、搜索和代码映射受到重点关注，目标是减少“整文件倾倒”、降低每轮 Token 消耗并提升大型仓库中的定位精度。相关提案还涉及“Tactful Extraction”和持久化文件任务追踪。

相关 Issues：

- [Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
- [Use AST-aware CLI tools to map codebase](https://github.com/google-gemini/gemini-cli/issues/22746)
- [Investigate AST-aware search and file reads](https://github.com/google-gemini/gemini-cli/issues/22747)
- [Implement Tactful Extraction](https://github.com/google-gemini/gemini-cli/issues/19561)
- [Replace WriteToDo with persistent file-based task tracking](https://github.com/google-gemini/gemini-cli/issues/18836)

### 5.3 Browser Agent 的稳定性与兼容性

Browser Agent 当前的热点集中在 Wayland 兼容、`settings.json` 配置继承、浏览器 Profile 锁和孤儿进程恢复，以及持久会话的自动接管。用户期待它从“遇到问题即失败”演进为可恢复、可观察的长生命周期执行器。

相关 Issues：

- [Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
- [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
- [Automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)

### 5.4 安全沙箱与命令执行策略

社区希望更充分地利用模型对 Bash、grep、sed、awk 等 POSIX 工具的擅长能力，同时引入零依赖 OS 沙箱和执行后意图路由，以兼顾效率与安全。此外，降低 `git reset`、强制覆盖和数据库修改等破坏性行为也是高频诉求。

相关 Issues：

- [Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)
- [Agent should stop/discourages destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
- [Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)

### 5.5 Agent 可观测性与评测体系

社区希望 `/chat share` 能展示子 Agent 轨迹，`/bug` 能收集子 Agent 上下文，并建立更稳定、可追踪的内部评测体系。当前终止状态误报和评测波动，会直接影响问题定位与质量回归判断。

相关 Issues：

- [Expose subagent trajectory via `/chat share`](https://github.com/google-gemini/gemini-cli/issues/22598)
- [Bugreport doesn't provide subagent context](https://github.com/google-gemini/gemini-cli/issues/21763)
- [Stabilize and Enhance Internal Project Evaluations](https://github.com/google-gemini/gemini-cli/issues/23166)
- [Change steering eval test to always pass](https://github.com/google-gemini/gemini-cli/issues/23313)

### 5.6 IDE 与扩展生态

VS Code Companion 的资源释放修复，以及研究模式示例扩展的加入，显示官方正继续完善 IDE 伴生组件和扩展分发体验。相关 PR：

- [VS Code Companion Disposable 修复](https://github.com/google-gemini/gemini-cli/pull/29988)
- [Research-mode 示例扩展](https://github.com/google-gemini/gemini-cli/pull/29983)

---

## 6. 开发者关注点

1. **终止状态必须可信**  
   达到 `MAX_TURNS`、工具失败或环境不兼容时，Agent 不应报告 `GOAL`/`success`。状态准确性是自动化工作流和评测体系可信度的前提。

2. **子 Agent 不能随机挂起**  
   Generalist Agent 的无限等待是严重生产力问题。社区期待明确的超时、错误传播、取消机制和失败恢复，而不仅是要求用户绕过子 Agent。

3. **配置继承必须可靠**  
   Browser Agent 忽略 `settings.json` 表明配置合并或下发链路存在缺口。用户需要确信 `maxTurns` 等限制真正生效。

4. **工具暴露需要按任务裁剪**  
   数百个工具同时暴露不仅可能触发 API 400，也会扩大上下文和误调用风险。期待平台提供动态工具选择、分层工具空间和更完善的预算控制。

5. **代码读取应精确而非倾倒**  
   AST 感知工具、按符号/函数边界读取、渐进式代码映射和更节俭的上下文提取，是提升大型仓库效率与准确性的重点方向。

6. **自主操作需要安全护栏**  
   用户集中反馈破坏性 Git 命令、随机临时脚本、强制写入以及 Shell 模式下的副作用。安全策略应涵盖命令风险分级、路径约束、写操作确认和沙箱隔离。

7. **Agent 内部过程需要可观察**  
   子 Agent 轨迹、失败上下文和工具调用链应进入 `/bug` 与 `/chat share`，否则复杂 Agent 问题很难复现和诊断。

8. **发布流水线稳定性直接影响迭代速度**  
   P0 构建残留问题已连续多晚阻塞 nightly 发布，说明构建产物清理和包体积检查需要成为更可靠的发布门禁。

9. **跨平台浏览器支持仍不成熟**  
   Wayland、持久 Profile、浏览器锁和 SSH 客户端识别等问题表明，Gemini CLI 的执行环境适配仍处于快速补齐阶段。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-11**  
**项目：** [github/copilot-cli](https://github.com/github/copilot-cli)

## 1. 今日速览

过去 24 小时发布 **v1.0.110-1**，重点修复 `copilot --resume` 会话并发写入风险，并改进状态栏缩进与控制字符显示。社区讨论则集中在 **MCP 协议兼容与生命周期管理、插件扩展、权限与配额、Windows 输入兼容、企业网络及多模态工具** 等方向；过去 24 小时共更新 27 个 Issues，但仅有一个 PR 得到更新。

## 2. 版本发布

### [v1.0.110-1](https://github.com/github/copilot-cli/releases)

- **修复恢复会话的并发写入**
  - 通过 `copilot --resume` 重新打开的会话会立即标记为占用。
  - `copilot -p --resume` 或第二个终端窗口不再同时写入处于空闲状态的同一会话。
- **改进自定义状态栏**
  - 保留第一行的缩进，使多行状态信息保持对齐。
- **改进控制字符显示**
  - 更直观地展示不可见或特殊字符。

### [v1.0.110-0](https://github.com/github/copilot-cli/releases)

- **实验性密码提示处理**
  - 支持在遮蔽对话框中响应 Agent 命令触发的 Git、SSH 和 `sudo` 密码提示。
  - 可通过 `/experimental` 开启。
- **改进账号切换**
  - `/user switch` 遇到不可用账号时，显示恢复指引和重试操作。
- **改进推理区交互**
  - 点击已展开的推理内容可将其折叠。

### [v1.0.109 / v1.0.109-1](https://github.com/github/copilot-cli/releases)

- 支持在沙箱主机允许和拒绝规则中使用 **IPv4/IPv6 CIDR**。
- 模型选择器新增 **Claude Fable 5.2**。
- 沙箱路径设置支持环境变量，并在设置文件和编辑器中保留用户原始表达式。
- 明确 shell 输入行为：在输入行首按 `Backspace` 可退出 shell 模式，并保留已输入文本。

## 3. 社区热点 Issues

### 1. MCP 工具未暴露给 AI 助手

- [#191 — MCP servers configured but tools not exposed to AI assistant](https://github.com/github/copilot-cli/issues/191)
- **为何重要**：直接决定 MCP 配置能否真正被 Agent 使用，是 CLI 扩展生态的基础可用性问题。
- **社区反应**：已有 15 条评论和 15 个点赞；问题已关闭，但标记为 `more-info-needed`，显示问题已获得较高关注且仍可能需要更多环境信息才能彻底定位。

### 2. PRU 配额可能被 Assisted Permissions 消耗

- [#4802 — PRU Quota Wiped Out, likely related to enabling Assisted Permissions](https://github.com/github/copilot-cli/issues/4802)
- **为何重要**：涉及订阅额度、配额计量和权限功能之间的可信度，直接影响付费用户成本。
- **社区反应**：9 条评论；问题仍开放且处于 triage 阶段，尚无明确结论。

### 3. Windows NumLock 关闭后数字键盘失效

- [#5171 — NumLock-off numpad navigation and Delete are ignored](https://github.com/github/copilot-cli/issues/5171)
- **为何重要**：属于明确的 Windows 输入回归，影响数字键盘光标导航和删除操作。
- **社区反应**：5 条评论、1 个点赞；问题仍开放。

### 4. MCP 成功发现后仍发送旧版初始化请求

- [#4888 — MCP client sends legacy initialize after successful server/discover](https://github.com/github/copilot-cli/issues/4888)
- **为何重要**：涉及新旧 MCP 协议混用，可能导致已启用现代协议的服务器拒绝后续请求，是连接稳定性的核心问题。
- **社区反应**：3 条评论；问题仍开放，当前关注度较为集中于技术细节验证。

### 5. Copilot Free 无法启用远程环境托管

- [#5283 — Remote environment hosting blocked by remote-control policy](https://github.com/github/copilot-cli/issues/5283)
- **为何重要**：涉及产品套餐、组织策略和远程控制权限边界，影响 Free 用户能否使用远程开发能力。
- **社区反应**：2 条评论、5 个点赞；开放问题中获得较高认可。

### 6. 插件斜杠命令实际执行但仍报告失败

- [#5412 — Every extension slash command reports “No client found for command”](https://github.com/github/copilot-cli/issues/5412)
- **为何重要**：扩展命令能够执行，却同时向用户显示错误，容易造成误判、破坏自动化流程并降低插件可信度。
- **社区反应**：今日新 Issue，尚无评论；属于 1.0.109 插件生态的高优先级回归信号。

### 7. macOS Monterey 无法启动新版 CLI

- [#5411 — Failed to start on macOS Monterey](https://github.com/github/copilot-cli/issues/5411)
- **为何重要**：缺少 `darwin-x64` runtime 原生组件会直接阻断旧版 macOS 用户升级，影响版本覆盖范围。
- **社区反应**：今日新 Issue，尚无评论。

### 8. 插件无法配置 MCP OAuth 固定回调端口

- [#5410 — Let Agent Plugins-format plugins set MCP OAuth options](https://github.com/github/copilot-cli/issues/5410)
- **为何重要**：预注册 OAuth 客户端通常要求精确回调 URI，插件无法配置 `oauthClientId` 和 `auth.redirectPort` 会限制远程 MCP 的实际部署。
- **社区反应**：今日更新，尚无评论，但与近期固定 OAuth 回调端口问题形成连续需求。

### 9. 浏览器工具没有向模型返回图像像素

- [#5405 — view and Playwright browser_take_screenshot don't return image pixels](https://github.com/github/copilot-cli/issues/5405)
- **为何重要**：虽然工具报告成功，模型却无法真正看到截图，直接削弱视觉理解、UI 验证和浏览器自动化能力。
- **社区反应**：今日新 Issue，尚无评论；这是多模态 Agent 工具链的关键缺口。

### 10. 企业代理缺少 NTLM 回退支持

- [#5407 — Support NTLM fallback for Negotiate-authenticated corporate proxies](https://github.com/github/copilot-cli/issues/5407)
- **为何重要**：部分企业环境只协商到 NTLM 而非 Kerberos；不支持回退会导致 CLI 无法通过代理访问目标服务。
- **社区反应**：今日新 Issue，尚无评论，但企业网络兼容性价值较高。

> 补充热点还包括：[#5388 沙箱下 GHE Token 在遮蔽前被丢弃](https://github.com/github/copilot-cli/issues/5388)、[#5389 browser-use 插件及浏览器扩展缺少企业安全审查文档](https://github.com/github/copilot-cli/issues/5389)、[#5406 Linear 委派任务未传递上下文](https://github.com/github/copilot-cli/issues/5406) 和 [#5408 内容过滤失败仍消耗大量 AI credits](https://github.com/github/copilot-cli/issues/5408)。

## 4. 重要 PR 进展

过去 24 小时仅检测到 **1 个更新的 Pull Request**，因此无法列出 10 个重要 PR。

- [#4770 — Document the WebSocket responses opt-out](https://github.com/github/copilot-cli/pull/4770) **[OPEN]**
  - **用途**：记录如何禁用模型默认使用的 WebSocket Responses 端点。
  - **背景**：部分网络环境会阻断 WebSocket；某些会话还会出现 `400 input item ID does not belong to this connection`，而 HTTP 等替代传输仍可能正常工作。
  - **意义**：为受限网络及 WebSocket 兼容问题提供可操作的逃生方案。
  - **进展**：PR 仍开放，本次数据中未提供评论或点赞信息。

## 5. 功能需求趋势

### MCP 成为最集中的能力扩展方向

社区需求正在从“能否配置 MCP”扩展到完整生产可用性：

- 协议版本兼容与正确初始化：[#4888](https://github.com/github/copilot-cli/issues/4888)
- 工具发现与参数保真：[#191](https://github.com/github/copilot-cli/issues/191)、[#2636](https://github.com/github/copilot-cli/issues/2636)
- 进程清理与容器生命周期：[#4392](https://github.com/github/copilot-cli/issues/4392)、[#4461](https://github.com/github/copilot-cli/issues/4461)
- 自定义注册表访问：[#4949](https://github.com/github/copilot-cli/issues/4949)
- OAuth 回调配置：[#5391](https://github.com/github/copilot-cli/issues/5391)、[#5410](https://github.com/github/copilot-cli/issues/5410)
- Linux 文件监控容量与代理网络兼容：[#5242](https://github.com/github/copilot-cli/issues/5242)、[#5407](https://github.com/github/copilot-cli/issues/5407)

### 插件与扩展生态需要更稳定的协议

- 插件斜杠命令错误报告：[#5412](https://github.com/github/copilot-cli/issues/5412)
- 浏览器扩展和企业安全审查：[#5389](https://github.com/github/copilot-cli/issues/5389)
- 插件承载远程 MCP OAuth 配置：[#5410](https://github.com/github/copilot-cli/issues/5410)

### 权限、身份与配额透明度受到更多关注

- Assisted Permissions 与 PRU 消耗：[#4802](https://github.com/github/copilot-cli/issues/4802)
- 沙箱环境中的 Token 遮蔽：[#5388](https://github.com/github/copilot-cli/issues/5388)
- Free 账号远程环境策略：[#5283](https://github.com/github/copilot-cli/issues/5283)
- 内容过滤失败后的 credits 消耗：[#5408](https://github.com/github/copilot-cli/issues/5408)

### 多模态和浏览器自动化仍有关键缺口

- 截图和磁盘图像未以像素形式进入模型：[#5405](https://github.com/github/copilot-cli/issues/5405)
- `view` 工具仅报告成功，未提供模型可理解的图像内容，直接影响视觉调试和 UI 自动化。

### 模型路由与定制能力继续扩展

- Fusion/Auto 模式希望支持模型黑名单：[#5369](https://github.com/github/copilot-cli/issues/5369)
- 新模型支持已落地 Claude Fable 5.2。
- 自定义 `providers.json` 导致状态栏隐藏 GitHub 托管模型配额信息：[#5403](https://github.com/github/copilot-cli/issues/5403)

## 6. 开发者关注点

1. **MCP 必须可靠且可预测**  
   开发者关注的不只是连接成功，还包括协议协商、工具暴露、参数完整传递、进程回收、OAuth 回调、注册表访问和代理支持。

2. **失败与消耗必须透明**  
   PRU 异常耗尽、内容过滤失败后的 credits 消耗、不可用账号及远程环境策略，均反映用户对权限、计费和错误说明的需求。

3. **插件执行结果需要一致**  
   命令已经运行却显示失败会直接破坏自动化信任。插件也需要更完善的 OAuth 和 MCP 配置能力。

4. **跨平台兼容性仍是高频痛点**  
   Windows 数字键盘输入、macOS Monterey runtime、企业 NTLM 代理，以及 Linux inotify 限制分别覆盖输入、安装和网络运行环境。

5. **视觉工具必须把内容真正交给模型**  
   “工具调用成功”不等于“模型获得可用上下文”。截图、图像读取和浏览器自动化需要以模型可消费的像素或多模态数据为准。

6. **企业部署需要可审计与可配置**  
   Token 遮蔽、浏览器扩展验证、OAuth 固定回调、模型路由限制及远程访问策略，都是企业采用 Copilot CLI 时的重要评估项。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-11**  
**项目：** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 今日速览

v2.2.7 发布，为 GitHub Copilot 用户新增 **Auto 模型路由**，并提供默认聊天模型回退机制。今日社区重点集中在免费额度异常、Agent 沙箱与符号链接权限绕过、Desktop/TUI 稳定性，以及 MCP、子代理和队列编辑等核心能力改进。

## 版本发布

### [v2.2.7](https://github.com/anomalyco/opencode/releases/tag/v2.2.7)

- **GitHub Copilot Auto**
  - Copilot 账户拥有 Auto pool 时，可在模型选择器中选择 **Auto**。
  - Copilot 路由器会按会话自动选择模型，并应用 Auto 折扣。
  - 路由失败时，OpenCode 会回退到账户的默认聊天模型。
- 相关讨论：[PR #62997](https://github.com/anomalyco/opencode/pull/62997)

## 社区热点 Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387)｜免费额度错误集中反馈**
   - 汇总“免费消息用尽”“每日额度不重置”等典型故障。
   - 以 **347 条评论、27 个赞**成为今日最活跃议题，说明额度展示、计数与重置机制是用户当前最直接的产品痛点。

2. **[#2242](https://github.com/anomalyco/opencode/issues/2242)｜Agent 是否支持沙箱隔离**
   - 用户希望限制 Agent 访问或修改当前工作目录之外的终端命令和文件。
   - 获得 **108 条评论、84 个赞**，是长期高热度需求，体现生产环境对文件系统边界和命令执行隔离的强烈诉求。

3. **[#8689](https://github.com/anomalyco/opencode/issues/8689)｜支持从 AI 消息撤销或分叉**
   - 当前主要只能从用户消息创建回复或分叉，无法直接从 AI 消息回退。
   - **15 条评论、23 个赞**，反映长会话中修正模型输出、探索替代答案的操作需求较强。

4. **[#44007](https://github.com/anomalyco/opencode/issues/44007)｜TUI `--auto` 卡住后台标签页**
   - V2 TUI 的自动授权只作用于当前选中路由，后台标签页可能长期阻塞在权限请求。
   - 已有稳定复现，影响并行 Agent 任务，是多会话自动化场景的重要缺陷。

5. **[#56285](https://github.com/anomalyco/opencode/issues/56285)｜Desktop 长会话快速滚动失效**
   - 从底部快速向上滚动时会回弹到底部，历史记录又仅按单块懒加载。
   - 社区已标记为 reproduced，直接影响长对话审阅效率。

6. **[#58638](https://github.com/anomalyco/opencode/issues/58638)｜符号链接绕过文件读取权限**
   - 权限系统按声明路径而非真实目标文件判断，符号链接可能绕过 deny 规则及外部目录检查。
   - 这是安全边界问题，可能让 Agent 读取本应禁止访问的文件。

7. **[#59291](https://github.com/anomalyco/opencode/issues/59291)｜频繁出现 `ECONNRESET`**
   - 用户报告网络连接良好，但 Socket 仍会异常关闭。
   - 评论数较少但问题范围可能覆盖桌面端、服务端和远程连接，建议关注日志及重试策略。

8. **[#54371](https://github.com/anomalyco/opencode/issues/54371)｜ACP 斜杠命令不流式输出**
   - 在 JetBrains Rider 2026.2 中，`/init` 等命令可以执行，但输出不会显示；普通提示词正常。
   - 表明 ACP 与 IDE 集成仍存在命令通道兼容性问题。

9. **[#62529](https://github.com/anomalyco/opencode/issues/62529)｜ChatGPT 套餐余量充足却提示使用上限**
   - OpenCode 2.2.5 报 `subscription_sharing_usage_limit_exceeded`，但 ChatGPT Usage 页面仍显示大量余量。
   - 可能涉及订阅共享、配额同步或网关侧限制判断，直接影响付费用户可信度。

10. **[#62555](https://github.com/anomalyco/opencode/issues/62555)｜Claude effort 切换可能错误改写缓存会话**
    - effort 变体切换标记与实际请求参数偶尔不一致，可能改写缓存前缀或发送错误 effort。
    - 已标记 reproduced，关系到模型成本、缓存命中率和响应稳定性。

## 重要 PR 进展

1. **[#63251](https://github.com/anomalyco/opencode/pull/63251)｜支持原地编辑排队中的提示词**
   - 修复 Agent A 执行期间编辑 Agent B 时，B 与编辑后的 B2 可能连续发送给模型的问题。
   - 同时扩展 inbox edit API，对多 Agent 队列编排有直接价值。

2. **[#63254](https://github.com/anomalyco/opencode/pull/63254)｜MCP Client 支持 MCP Events**
   - 为客户端增加事件声明、列举和流式传输能力，对应 SEP-3415 / `io.modelcontextprotocol/events` 扩展。
   - 是 OpenCode 跟进 MCP 事件生态的重要基础能力。

3. **[#63209](https://github.com/anomalyco/opencode/pull/63209)｜子代理每次进入 idle 时向父代理报告**
   - 将结果通知从“子任务结束”扩展到每次 idle。
   - 有助于父 Agent 感知子会话的新进展，支持更可靠的后台协作。

4. **[#63230](https://github.com/anomalyco/opencode/pull/63230)｜用配置指引替代 Worktree 工具**
   - 移除或替换 `worktree_create/list/remove` 工具，改为依据配置指导模型使用 worktree。
   - 数据显示本地会话中 92% 的 worktree 创建仍通过 Shell 完成，该 PR 试图降低工具与实际行为之间的偏差。

5. **[#63259](https://github.com/anomalyco/opencode/pull/63259)｜按需获取 Console instructions 与 skills**
   - 仅在配置声明工作区包含相关内容时请求相关接口。
   - 可减少不必要的网络请求和启动开销。

6. **[#63256](https://github.com/anomalyco/opencode/pull/63256)｜启动提示前等待默认 Agent 就绪**
   - 启动时先等待 Location 插件清单完成，再提交 home-screen `--prompt` 并刷新 Agent。
   - 修复默认 Agent 尚未加载导致启动提示行为不稳定的问题。

7. **[#62167](https://github.com/anomalyco/opencode/pull/62167)｜串行化提示词结算流程**
   - 在发布 Form 或 Permission 结算事件前先认领请求。
   - 防止并发回复、取消和权限级联之间的竞态条件。

8. **[#55528](https://github.com/anomalyco/opencode/pull/55528)｜Browser 代理改用二进制 WebSocket**
   - 重构浏览器代理流量传输方式。
   - 在约 140ms RTT 测试中，6 MiB 图片场景由约 70 秒降至约 4 秒，提升约 **18 倍**。

9. **[#59816](https://github.com/anomalyco/opencode/pull/59818)｜让已耗尽的请求限流保持可重试**
   - 从配额匹配逻辑中排除“rate limit exhausted”，使临时性 429 能重试。
   - 真正的配额耗尽错误保持原行为；该 PR 已关闭。

10. **[#62408](https://github.com/anomalyco/opencode/pull/62408)｜权限错误中显示匹配的 deny 规则**
    - 在权限失败提示中加入实际命中的拒绝模式。
    - 有助于用户理解命令为何被阻止并修正权限配置。

## 功能需求趋势

### 1. Agent 权限与沙箱
- 限制 Agent 对工作目录外文件的访问和修改。
- 修复符号链接绕过权限规则的问题。
- 提供更清晰、可解释的权限拒绝信息。

相关讨论：[ #2242](https://github.com/anomalyco/opencode/issues/2242)、[ #58638](https://github.com/anomalyco/opencode/issues/58638)、[PR #62408](https://github.com/anomalyco/opencode/pull/62408)

### 2. 多 Agent 与任务编排
- 自动授权应覆盖后台标签页。
- 子代理应在每次 idle 时反馈状态。
- 支持编辑已排队但尚未执行的提示词。
- 提升会话恢复及后台任务连续性。

相关讨论：[ #44007](https://github.com/anomalyco/opencode/issues/44007)、[PR #63209](https://github.com/anomalyco/opencode/pull/63209)、[PR #63251](https://github.com/anomalyco/opencode/pull/63251)

### 3. IDE 与远程连接集成
- ACP 斜杠命令需要正确流式输出。
- Android 17 需要显式申请局域网权限。
- SSH 会话应支持桌面通知。
- iOS Safari 的 Basic Auth 弹窗不应阻塞设备配对。

相关讨论：[ #54371](https://github.com/anomalyco/opencode/issues/54371)、[ #62934](https://github.com/anomalyco/opencode/issues/62934)、[PR #63242](https://github.com/anomalyco/opencode/pull/63242)

### 4. 模型、额度与网关能力
- Copilot Auto 模型路由。
- ChatGPT 订阅余量与 OpenCode 提示不一致。
- 免费额度重置与订阅共享限制。
- Claude effort 切换、缓存前缀及 reasoning 展示稳定性。

相关讨论：[ #59387](https://github.com/anomalyco/opencode/issues/59387)、[ #62529](https://github.com/anomalyco/opencode/issues/62529)、[ #62555](https://github.com/anomalyco/opencode/issues/62555)、[ #63057](https://github.com/anomalyco/opencode/issues/63057)

### 5. 会话管理与可观测性
- 从 AI 消息直接撤销、回退或分叉。
- 在 TUI transcript 中显示消息时间戳。
- 暴露会话 suspended 状态及可靠的恢复连续性。
- TUI 消息中的 Session ID 可直接打开对应会话。

相关讨论：[ #8689](https://github.com/anomalyco/opencode/issues/8689)、[ #63016](https://github.com/anomalyco/opencode/issues/63016)、[PR #63244](https://github.com/anomalyco/opencode/pull/63244)、[PR #63224](https://github.com/anomalyco/opencode/pull/63224)

### 6. MCP 与插件生态
- MCP Events 的声明、列举与流式消费。
- MCP OAuth Token 在过期前主动刷新。
- 符号链接插件内容变更后应正确热重载。
- Context hook 需要保留并传递消息 metadata。

相关讨论：[PR #63254](https://github.com/anomalyco/opencode/pull/63254)、[PR #63028](https://github.com/anomalyco/opencode/pull/63028)、[ #63009](https://github.com/anomalyco/opencode/issues/63009)、[ #63252](https://github.com/anomalyco/opencode/issues/63252)

## 开发者关注点

- **额度与计费透明度是当前最高频痛点。** 免费层重置、订阅共享上限和 ChatGPT 实际余量之间存在明显认知偏差，社区情绪较集中。
- **安全边界仍需加强。** 用户不仅要求沙箱，还关注符号链接等实际绕过路径；权限判断应基于真实文件目标，而不仅是输入路径。
- **Desktop 稳定性直接影响日常可用性。** 长会话滚动、后台浏览器 attach、菜单重叠、链接打开方式、窗口关闭后进程残留等问题均有明确复现。
- **TUI 的精细交互仍有缺口。** 鼠标拖选冻结、后台权限阻塞、OAuth 长 URL 遮挡、时间戳缺失等问题均影响长时间或远程使用。
- **多 Agent 协作正在成为核心使用模式。** 用户关注的不只是启动子代理，而是状态回报、队列编辑、自动授权、恢复连续性等完整编排能力。
- **MCP 生态进入事件驱动阶段。** 除工具调用外，事件流、OAuth 生命周期及元数据传递正在成为插件开发者的新关注点。
- **性能热点逐渐转向远程和重型会话。** Browser 代理传输、Desktop 大数据库冷启动、移动端 LAN 访问，以及长会话懒加载均体现网络与状态管理上的短板。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-11

## 1. 今日速览

过去 24 小时共更新 **7 个 Issue、36 个 Pull Request**，并发布 `v1.0.0-preview.394`。社区焦点集中在 **Command Code 原生 Provider 集成、Claude OAuth/多 Provider 稳定性、Agent 行为效率及 CLI 可脚本化输出**；与此同时，master 分支已出现格式检查、代码体积预算和 Ubuntu 测试失败，发布质量需重点关注。

## 2. 版本发布

### v1.0.0-preview.394

- 基于 master 提交 `eb867111fffac2efeedd95a7ac9f7d6168260e6f` 构建。
- 相比 `v1.0.0-preview.199` 包含 212 个提交，但发布说明未提供更细的功能清单。
- 该版本属于 **实验性预览**，不是稳定版本；Windows 预览二进制未签名，生产环境应继续使用 stable channel。
- Release：[v1.0.0-preview.394](https://github.com/1jehuang/jcode/releases/tag/v1.0.0-preview.394)

## 3. 社区热点 Issues

> 今日仅有 7 个 Issue 更新，以下按影响范围与紧迫性排序。

1. **master 分支未通过自身 CI 质量门禁**  
   [#2131](https://github.com/1jehuang/jcode/issues/2131) 指出 master 存在 11 处 rustfmt 差异、代码体积预算增长以及两项 Ubuntu 测试失败。该问题直接削弱主干分支的可信度，并可能阻塞后续合并和发布；目前有 1 条评论、尚无点赞。  
   **重要性：** 高｜**社区反应：** 关注度有限，但属于明确的工程阻塞项。

2. **Claude OAuth 与 API Key 切换造成 Provider 状态跨会话泄漏**  
   [#1116](https://github.com/1jehuang/jcode/issues/1116) 报告 `/model` 中切换认证方式会修改进程级 `JCODE_RUNTIME_PROVIDER`，导致同一服务进程中的其他会话错误标记 Provider，并破坏恢复逻辑。问题被标记为高优先级且可复现。  
   **重要性：** 很高，涉及多会话隔离与配置安全；目前 1 条评论。

3. **Claude OAuth 对 CLI 版本的硬编码检查拒绝新模型**  
   [#2133](https://github.com/1jehuang/jcode/issues/2133) 显示，Claude Code 已安装 `2.1.322`，但 jcode 仍按硬编码的 `2.1.280` 校验，导致 `claude-fable-5-2` 请求返回 HTTP 400。  
   **重要性：** 高，直接阻断新模型使用；目前暂无评论，属于刚发现且待处理的问题。

4. **需要真正本地运行的 Memory Recall Provider**  
   [#2069](https://github.com/1jehuang/jcode/issues/2069) 指出当前 recall 路径主要依赖远程决策服务，用户希望增加完全在本机运行、可作为进程或插件集成的 recall provider，同时保留 Laya 作为替代方案。  
   **重要性：** 高，代表隐私、离线能力与可扩展性的需求；已有 3 条评论。

5. **Command Code 应成为 jcode 内置的一等 Provider**  
   [#741](https://github.com/1jehuang/jcode/issues/741) 要求在 `/login` 中提供由维护者构建维护的 Command Code Provider，替代仅存在于用户 fork 且无法正常工作的集成。该需求已有对应 PR 推进。  
   **重要性：** 高，涉及 Provider 生态扩展；4 条评论、1 个点赞，是今日反馈较充分的 Issue。

6. **Agent 在简单调试任务中过度思考和规划**  
   [#2101](https://github.com/1jehuang/jcode/issues/2101) 描述了 Agent 对简单任务持续读取缓存、反复思考，耗时数小时仍未完成，反映出自主执行策略、进度控制和停止条件不够理想。  
   **重要性：** 中高，直接影响日常开发效率与用户信任；已有 1 条评论。

7. **`jcode run` 的流式 reasoning 被逐块逐行输出**  
   [#2134](https://github.com/1jehuang/jcode/issues/2134) 指出纯文本运行模式每个 reasoning chunk 都单独输出一行，更像调试日志，不利于脚本解析。修复 PR 已同步提交。  
   **重要性：** 中，影响 CLI 可用性和自动化集成；当前暂无评论。

## 4. 重要 PR 进展

1. **修复 CLI reasoning 逐行碎片化输出**  
   [#2135](https://github.com/1jehuang/jcode/pull/2135) 将 `jcode run` 和 line REPL 的 reasoning delta 合并为符合终端宽度的单行，并关闭 #2134。  
   **价值：** 提升纯文本输出的可读性与可解析性。

2. **新增 Command Code 原生 Provider**  
   [#1271](https://github.com/1jehuang/jcode/pull/1271) 实现 Provider 注册、认证、模型发现、原生 NDJSON 流式响应、配额诊断、冷却切换及 provider-doctor 集成。  
   **价值：** 将 Command Code 从 fork 集成提升为正式 Provider 候选。

3. **基于公开 API 集成 Command Code，并强化账户隔离**  
   [#2132](https://github.com/1jehuang/jcode/pull/2132) 引入登录、模型选择、流式编码 Agent 回合、工具结果续接和会话安全账户处理。  
   **价值：** 与 #1271 形成两条原生 Provider 实现路径，也带来后续方案收敛与评审压力。

4. **macOS 正确识别 Kitty 终端**  
   [#1783](https://github.com/1jehuang/jcode/pull/1783) 通过 `TERM`、`KITTY_WINDOW_ID` 等信号识别 Kitty，使 Cmd+; 能在 Kitty 中打开，并支持可见会话。  
   **价值：** 改善 macOS 多终端环境下的启动与集成体验。

5. **修复测试中的 `JCODE_HOME` 并发竞态**  
   [#1955](https://github.com/1jehuang/jcode/pull/1955) 解决锁内测试与辅助函数修改 `JCODE_HOME` 的 TOCTOU 问题，避免会话选择器测试被其他测试翻转。  
   **价值：** 提升 CI 稳定性，与今日 CI 失败问题直接相关。

6. **安装流程同步 `builds/manifest.json` 的 stable 字段**  
   [#1392](https://github.com/1jehuang/jcode/pull/1392) 在 install.sh 等三条安装路径中补充 stable manifest 同步，避免稳定版本字段陈旧并指向已清理版本。  
   **价值：** 降低升级、发布及版本分发故障风险。

7. **支持可配置 Memory Model 与会话级临时选择**  
   [#1875](https://github.com/1jehuang/jcode/pull/1875) 允许按配置选择记忆提取模型，并可通过 Alt+M 在模型选择器中仅对当前会话临时指定，不改写全局配置。  
   **价值：** 增强记忆能力的可配置性，并与本地记忆诉求形成互补。

8. **为 TUI 增加 `@file` 文件提及选择器**  
   [#1889](https://github.com/1jehuang/jcode/pull/1889) 通过 frecency 排名帮助用户快速引用项目文件，避免手动输入完整路径。  
   **价值：** 改善大型代码库中的上下文输入效率。

9. **修复文本模型遇到图像块后会话持续失效**  
   [#1347](https://github.com/1jehuang/jcode/pull/1347) 在运行时增加模态恢复：文本模型收到像素工具结果时不再硬失败，并避免污染后续所有回合。  
   **价值：** 提升 OpenAI-compatible 网关及混合模态模型的兼容性。

10. **新增 Cursor ACP Provider**  
    [#1873](https://github.com/1jehuang/jcode/pull/1873) 接入 Cursor Agent Client Protocol，支持模型路由、reasoning effort 配置，并处理子进程回收。  
    **价值：** 扩展 Provider 生态，同时改善 ACP 集成生命周期管理。

## 5. 功能需求趋势

1. **Provider 生态持续扩张**  
   Command Code、Cursor ACP、自定义 OpenAI-compatible Provider，以及可配置的 User-Agent/额外请求头，说明用户正推动 jcode 成为多模型、多网关的统一客户端。  
   相关链接：[Command Code](https://github.com/1jehuang/jcode/issues/741)｜[Cursor ACP](https://github.com/1jehuang/jcode/pull/1873)｜[请求头配置](https://github.com/1jehuang/jcode/pull/1872)

2. **本地化、隐私与离线记忆成为明确方向**  
   用户不满足于远程 recall 决策服务，希望提供真正本地运行、可插拔的 Memory Recall Provider；同时记忆模型也趋向可配置。  
   相关链接：[本地 Recall](https://github.com/1jehuang/jcode/issues/2069)｜[Memory Model](https://github.com/1jehuang/jcode/pull/1875)

3. **Agent 执行效率和可控性需求升温**  
   “简单任务长时间只思考不执行”暴露了 Agent 在自主程度、规划成本和完成边界上的痛点；社区同时关注自动重试、侧车回退和结构化用户确认。  
   相关链接：[Agent 过度思考](https://github.com/1jehuang/jcode/issues/2101)｜[Auto Retry](https://github.com/1jehuang/jcode/pull/1878)｜[ask_user 工具](https://github.com/1jehuang/jcode/pull/1815)

4. **CLI 自动化与可解析输出需求增强**  
   `jcode run` 的输出目前仍偏调试日志，用户期待更稳定的纯文本协议，以替代完整 TUI 用于脚本和 CI。  
   相关链接：[Issue #2134](https://github.com/1jehuang/jcode/issues/2134)｜[PR #2135](https://github.com/1jehuang/jcode/pull/2135)

5. **TUI 上下文操作持续完善**  
   `@file` 快速提及、会话级模型选择、当前目录会话置顶、Agent 状态通知等需求，表明社区希望降低高频操作成本并改善会话恢复体验。  
   相关链接：[文件提及](https://github.com/1jehuang/jcode/pull/1889)｜[会话置顶](https://github.com/1jehuang/jcode/pull/1852)｜[OSC 9 状态](https://github.com/1jehuang/jcode/pull/1883)

6. **新模型兼容不能依赖静态版本门槛**  
   Claude OAuth 模型因固定 CLI 版本校验而不可用，说明 Provider 需要更动态的版本能力协商与错误处理。  
   相关链接：[Issue #2133](https://github.com/1jehuang/jcode/issues/2133)

## 6. 开发者关注点

- **可靠性高于功能数量**：master 未通过 fmt、体积预算和 Ubuntu 测试门禁；测试环境变量隔离、`JCODE_HOME` 竞态及安装 manifest 漂移都受到关注。
- **多 Provider 并发隔离是安全底线**：Claude 认证切换污染进程级环境变量，可能导致其他会话 Provider 错标与恢复失败。
- **版本兼容策略需要升级**：硬编码 Claude CLI 最低版本会快速失效，应加强能力探测、兼容范围维护和清晰降级提示。
- **Agent 应缩短反馈闭环**：用户期待简单调试任务快速执行、少做重复规划，并具备明确进度、超时、重试和人工确认机制。
- **纯文本 CLI 必须具备稳定输出契约**：reasoning、工具事件和最终答案应按明确边界输出，避免逐 chunk 打印导致脚本难以消费。
- **本地优先与隐私能力仍不完整**：记忆提取与 recall 需要更多本机执行路径，以减少敏感上下文外发并支持离线工作流。
- **Provider 竞争性实现需要尽快收敛**：Command Code 同时出现 #1271 和 #2132 两个大型 PR，后续应明确认证、流式协议、账户安全和配额诊断的统一设计。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-11

## 今日速览

过去 24 小时共发布 **pi v1.5.2**，重点改进了会话迁移后的 Fork 体验；社区同时集中讨论 **上下文压缩、缓存预热、模型目录同步与 Provider 兼容性**。  
代码侧已完成 AbortError 崩溃、Harness 资源泄漏和 Azure Entra ID 认证等修复，并正在推进压缩期间消息排队、llama.cpp 默认端口统一及会话同步架构。

---

## 版本发布

### v1.5.2

- **支持 Fork 已丢失目录的会话**：原会话目录被移动或删除后，现在可以将该会话 Fork 到当前目录，而不再只能继续旧会话，从而减少恢复会话时的重复提示。
- Release：[v1.5.2](https://github.com/earendil-works/pi/releases/tag/v1.5.2)
- 会话恢复文档：[Continue or switch sessions](https://github.com/earendil-works/pi/blob/v1.5.2/docs/sessions.md)

---

## 社区热点 Issues

### 1. 为压缩过程提供独立的思考级别与模型

[#7553](https://github.com/earendil-works/pi/issues/7553) · **13 条评论 / 3 个赞**

自动和手动压缩目前无条件复用当前会话的 thinking level，无法独立控制摘要过程的思考预算。该问题直接影响推理模型的成本、延迟和压缩质量，是高热度架构讨论。

### 2. 扩展处理 `turn_end` 后，缓存预热会静默停止

[#10956](https://github.com/earendil-works/pi/issues/10956) · **13 条评论 / 3 个赞**

在 `cacheWarming: "idle"` 下，只要扩展拦截 `turn_end`，且上下文包含自定义消息或压缩消息，空闲预热就可能不再触发。报告者称自 9 月以来记录了 507 次预热决策，但没有一次满足预期的 0.15 触发条件。

### 3. GPT-6.1 Sol 的 ChatGPT 登录上下文窗口仍显示为 272K

[#11021](https://github.com/earendil-works/pi/issues/11021) · **11 条评论 / 8 个赞**

通过 ChatGPT 登录时，Pi 仍为 GPT-6.1 Sol 报告 272K 上下文，而账户实时目录显示为 500K。这会人为压缩可用上下文并提前触发压缩，是本次数据中赞数最高的 Issue。

### 4. OpenAI Completions 无法处理数组内容和缺失的 `finish_reason`

[#7062](https://github.com/earendil-works/pi/issues/7062) · **9 条评论 / 3 个赞**

部分 Databricks 模型在工具调用时返回数组形式的 `delta.content`，并可能省略 `finish_reason`。这会导致内容被渲染成 `[object Object]`，影响 Qwen、gpt-oss 等推理模型的兼容性。

### 5. 已保存的默认模型失效后会静默切换到其他模型

[#10812](https://github.com/earendil-works/pi/issues/10812) · **7 条评论**

当 `settings.json` 中指定的模型已从供应商目录移除时，新会话不会明确报错，而是静默回退到另一模型，例如 DeepSeek 模型改名后意外切换到 `deepseek-v4-pro`。这种行为容易造成成本和输出质量突变。

### 6. 手动压缩期间触发新一轮运行，引发上下文竞争

[#10982](https://github.com/earendil-works/pi/issues/10982) · **4 条评论 / 1 个赞**

扩展调用 `pi.sendMessage(msg, { triggerTurn: true })` 时，不会像交互界面一样等待压缩完成。新运行会读取未压缩的上下文并与压缩流程并发执行，造成消息排序和会话状态不一致。

### 7. `registerVirtualModel` 会让缓存预热立即停止

[#10536](https://github.com/earendil-works/pi/issues/10536) · **4 条评论 / 1 个赞**

扩展注册虚拟模型后，即使设置 `cacheWarming: "idle"`，缓存也不会刷新。问题表明当前预热机制与扩展提供的虚拟模型路由之间缺少兼容路径。

### 8. Anthropic 工具调用中的非 ASCII 编辑参数可能被静默破坏

[#10074](https://github.com/earendil-works/pi/issues/10074) · **12 条评论 / 已关闭**

Claude 在编辑包含韩文等非 ASCII 内容的文件时，可能生成损坏的 `\uXXXX` 转义，且 Pi 曾静默接受结果。问题不仅造成编辑失败，还可能实际写坏文件，现已关闭。

### 9. 工具调用参数解析失败后，扩展无法修复原始参数

[#11112](https://github.com/earendil-works/pi/issues/11112) · **6 条评论 / 已关闭**

Claude 偶尔生成 `"oldText">` 而非 `"oldText":` 等无效 JSON，Pi 将其转换为空参数并附加 `argumentsError`。扩展原本希望在 `prepareArguments` 中修复问题，但看不到原始参数；该 Issue 已关闭。

### 10. Pi 1.5.0 的 `StringEnum` 破坏工具参数类型推导

[#11869](https://github.com/earendil-works/pi/issues/11869) · **2 条评论 / 3 个赞 / P0**

`@earendil-works/pi-ai` 1.5.0 中 `StringEnum` 不再基于 TypeBox，导致 `registerTool` 推导出的参数字段退化为 `unknown`。这会破坏 TypeScript 编译期检查，是升级到 1.5.x 后直接影响扩展开发者的回归。

---

## 重要 PR 进展

### 1. 修复取消文件读取时的未捕获 `AbortError`

[#12025](https://github.com/earendil-works/pi/pull/12025) · **已关闭**

修复文件流在取消期间被销毁、但未安装 `error` 监听器而导致 Pi 退出的问题。相关回归来自 [#11956](https://github.com/earendil-works/pi/issues/11956)。

### 2. 压缩完成后再执行 `sendMessage` 的 `triggerTurn`

[#12028](https://github.com/earendil-works/pi/pull/12028) · **开放中**

让扩展触发的消息在手动压缩结束后再启动新一轮运行，避免读取未压缩分支并与压缩流程并发。该 PR 对应 [#10982](https://github.com/earendil-works/pi/issues/10982)。

### 3. Azure OpenAI 增加 Microsoft Entra ID 认证

[#12016](https://github.com/earendil-works/pi/pull/12016) · **已关闭**

通过 `DefaultAzureCredential` 支持 Azure OpenAI 的 Entra ID 登录，用户无需强制使用 API Key，可直接接入 Microsoft Foundry；需要 Azure CLI 已安装并完成身份登录。

### 4. 会话目录迁移到服务端 Chord Store

[#12002](https://github.com/earendil-works/pi/pull/12002) · **已关闭**

将会话标题、位置、模型与思考级别、置顶、归档及 `/tree` 分支等目录数据迁移为 Chord Store 中的 host-keyed 行。此前这些信息单独保存在 `catalog.sqlite`，导出、导入或备份时容易遗漏。

### 5. 子代理与共享记录迁移到 Chord Store

[#12011](https://github.com/earendil-works/pi/pull/12011) · **已关闭**

继续将会话目录之外的两个 SQLite 表——`shares` 和 `subagents`——迁移到 Chord Store，为后续统一 outbox、备份和同步机制奠定基础。

### 6. Harness 关闭时释放 Provider 会话资源

[#11961](https://github.com/earendil-works/pi/pull/11961) · **已关闭**

`Harness.close()` 现在会在活动任务结束后释放与 provider session ID 关联的 pi-ai 资源，避免 WebSocket 和空闲定时器残留，修复 [#11676](https://github.com/earendil-works/pi/issues/11676)。

### 7. 修正环境执行器退出后的静默判定

[#12033](https://github.com/earendil-works/pi/pull/12033) · **开放中**

`exec`、`pty` 和 `process` 在程序退出后，若 100 毫秒内没有输出就会停止读取。超过 4 MiB 的管道数据因等待发送空间而暂时无输出，也可能被误判为静默；该 PR 修复慢链路下的数据丢失，对应 [#12032](https://github.com/earendil-works/pi/issues/12032)。

### 8. 将 llama.cpp 默认端口统一为 9931

[#12001](https://github.com/earendil-works/pi/pull/12001) · **开放中**

更新 Pi 的 llama.cpp provider 默认端口及文档示例，与新版 llama.cpp 服务端默认行为保持一致。作者称检查命令及全部 31 个 llama.cpp 测试均已通过。

### 9. 增加 Ling 3.x Flash 模型

[#11998](https://github.com/earendil-works/pi/pull/11998) · **已关闭**

在 `ant-ling` provider 中加入 Ling 3.2、3.1 和 3.0 Flash，移除已弃用的 Ling 2.6 / Ring 2.6。Ling 3.2 Flash 支持图片输入，三个模型均提供 `thinking.type` 开关。

### 10. Radius 会话同步适配器原型

[#11990](https://github.com/earendil-works/pi/pull/11990) · **开发中**

为 P2 增加可选择的后端边界，支持禁用、文件系统和 Radius 三种会话存储模式，并为未来的会话备份、恢复及协调逻辑提供独立适配层。

---

## 功能需求趋势

1. **上下文与压缩控制**
   - 为压缩单独配置模型和 thinking level；
   - 压缩期间正确排队、串行化扩展触发的新运行；
   - 准确读取账户级上下文窗口，避免不必要压缩。

2. **缓存预热与性能稳定性**
   - 修复扩展拦截 `turn_end`、自定义消息及虚拟模型下缓存预热失效；
   - 避免 Provider 会话资源、空闲定时器和 WebSocket 泄漏；
   - 改善高输出量工具执行时的管道可靠性。

3. **Provider 与模型目录同步**
   - ChatGPT 登录后使用账户可用模型，而不是静态目录；
   - 模型改名或移除时显式提示，避免静默回退；
   - 补齐 Cloudflare AI Gateway 的 DeepSeek、xAI、Qwen、Moonshot 等模型。

4. **新模型与认证方式支持**
   - 支持 Ling 3.x Flash、新 Fable 系列等模型；
   - 增加 Azure OpenAI Entra ID 认证；
   - 社区希望原生支持 Modal 等托管推理平台。

5. **工具调用与多模态稳定性**
   - 修复 Anthropic 非 ASCII 编辑参数、非法 JSON 和孤立 UTF-16 代理项；
   - 兼容 OpenAI Completions 的数组内容及非标准结束标记；
   - 正确处理扩展路由中的 Anthropic message threads。

6. **扩展生态与 SDK 类型**
   - 修复 `StringEnum` 导致的工具参数类型退化；
   - 允许扩展在参数解析失败后修复原始工具调用；
   - 改善扩展对 `package.json` `main`/`exports` 和 Shiki 依赖的解析。

7. **会话管理与同步**
   - Fork 已迁移或删除目录中的历史会话；
   - 将会话目录、子代理和共享数据统一迁移到 Chord Store；
   - 推动 Radius 后端、session index 与 outbox 架构。

8. **本地模型与 TUI 体验**
   - 统一 llama.cpp 的 `llama serve` 启动方式和默认端口；
   - 改善窄终端下模型信息被截断的问题；
   - 增强移动端及 tmux 环境的可用性。

---

## 开发者关注点

- **静默降级比显式失败更危险**：模型目录、默认模型、工具参数和缓存状态都存在“系统继续运行，但行为已改变”的情况，是当前反馈最强烈的体验问题。
- **扩展钩子必须与核心生命周期隔离**：缓存预热、压缩和 `triggerTurn` 均因扩展介入而出现状态不一致，社区期待扩展 API 提供更明确的等待、取消和恢复语义。
- **Provider 差异仍是适配成本来源**：流式响应结构、模型目录、账户上下文、thinking 格式和工具调用格式都需要 pi-ai 提供更强的规范化层。
- **数据安全要求提高**：工具参数损坏可导致真实文件被写坏；工具调用中的孤立代理项还可能破坏后续全部请求，因此开发者希望加入参数校验、拒绝危险写入并提供可恢复机制。
- **版本升级需关注类型和打包回归**：`StringEnum` 类型退化、standalone 安装无法解析 Shiki，均说明扩展开发者需要更严格的升级说明与兼容性测试。
- **会话数据需要统一、可备份的存储层**：Chord Store 和 Radius 适配器体现了社区对跨设备同步、备份恢复及会话目录一致性的持续投入。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
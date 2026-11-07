# AI CLI 工具社区动态日报 2026-11-07

> 生成时间: 2026-11-07 05:27 UTC | 覆盖工具: 8 个

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

**日期：2026-11-07**

## 1. 生态全景

AI CLI 生态正从“模型能力竞争”转向**可靠性、安全边界、跨端一致性与企业可运维性**的竞争：Windows/macOS 稳定性、MCP 生命周期、权限绕过、Agent 进程回收和长会话状态成为高频问题。与此同时，Claude Code、Codex、Gemini CLI 和 OpenCode 均在加强子代理、MCP、浏览器/桌面自动化及 IDE 集成，工具形态正由单终端助手向多 Agent 工作台演进。  
工具之间也开始明显分层：Claude Code 强在生态与跨产品上下文，Codex 强在桌面端和 Computer Use，Gemini CLI 强在 Agent 编排与安全策略，Copilot CLI 强在 GitHub 企业生态，OpenCode 强在多 Provider 与扩展性，jcode 和 Pi 则更偏向可编程、轻量与高实验性。整体来看，**“功能能否运行”已不再是唯一评价标准，状态是否可信、权限是否可解释、失败是否可恢复**成为更重要的采购与工程决策指标。

---

## 2. 各工具活跃度对比

> 注：原始材料未对所有项目提供统一口径的 Issue/PR 总数；下表以明确披露的数据为准，“至少”表示仅统计被材料列出的条目。

| 工具 | 今日 Issues | 今日 PR | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 至少 10 个重点 Issue | 0 个更新 PR | **v2.1.319** | 社区讨论热度最高，安全、隐私、MCP 与跨端需求集中 |
| **OpenAI Codex** | 至少 10 个重点 Issue | 10 个重要 PR | `rust-v0.169.0-alpha.2`，无详细日志 | 代码迭代非常密集，重点押注 Windows、Computer Use、MCP 与鉴权 |
| **Gemini CLI** | 至少 10 个重点 Issue | 10 个重要 PR | 无 | 高频工程化迭代，聚焦 Agent 状态、重试副作用与 Shell 安全 |
| **GitHub Copilot CLI** | 22 个更新 Issue | 1 个更新 PR | **v1.0.108-1**，另有 `v1.0.108-0`、`v1.0.107` | Issue 活跃、PR 更新较少；近期发布节奏较快 |
| **Kimi Code CLI** | 0 | 0 | 无 | 过去 24 小时无活动，暂无法判断持续趋势 |
| **OpenCode** | 至少 10 个重点 Issue | 至少 10 个重要 PR | **v2.2.6** | 高频发布与修复，权限模型和 Windows 回归是主要风险 |
| **jcode** | 22 | 10 | **v1.0.0-preview.199** | 活跃度高且更新密集，Preview 阶段迭代明显 |
| **Pi** | 至少 10 个重点 Issue | 10 个重要 PR | 无 | 围绕 1.5.0 连续修稳定性、SDK、Provider 兼容与文件安全 |

### 活跃度结论

- **讨论热度最高：Claude Code、OpenCode**  
  Claude Code 的 User-Agent 邮箱泄露 Issue 达 **99 条评论、699 个赞**；OpenCode 免费额度重置异常达 **317 条评论**。
- **代码工程强度最高：Codex、Gemini CLI、OpenCode、jcode、Pi**  
  这些项目在单日均出现约 10 个重要 PR。
- **发布活跃度最高：Copilot CLI、OpenCode、jcode**  
  Copilot CLI 近期连续发布 `v1.0.107`、`v1.0.108-0`、`v1.0.108-1`；OpenCode 发布 `v2.2.6`；jcode 发布 `preview.199`。
- **Kimi Code CLI** 数据为空，不能等同于项目整体停滞，但当日缺乏可用于判断的社区信号。

---

## 3. 共同关注的功能方向

### 3.1 MCP 从“能连接”走向“生命周期可控”

| 工具 | 具体诉求 |
|---|---|
| Claude Code | 修复共享连接池版本协商失败、桌面端不展示 MCP elicitation、Remote Control shell mode 支持 |
| Codex | 延迟启动 stdio MCP、保留共享发现能力、统一网络策略并持久化拒绝记录、暴露具体启动错误 |
| Gemini CLI | 工具过多导致请求返回 400，希望按任务动态筛选工具 |
| Copilot CLI | 修复 Entra token 缓存、多个 MCP 服务并发登录、Windows 沙箱路径授权 |
| OpenCode | 相同配置的 MCP Server 跨项目共享连接，减少重复启动 |

**判断**：MCP 已从插件协议升级为核心运行时基础设施。当前的竞争点不再是 Server 数量，而是**按需启动、身份缓存、版本协商、人工授权、权限继承和故障诊断**。

### 3.2 权限模型必须“真实生效”，而非仅显示提示

| 工具 | 具体诉求 |
|---|---|
| Claude Code | User-Agent 泄露邮箱；AWS 权限被删除且未遵守 `CLAUDE.md`；macOS 签名、公证与 Gatekeeper 问题 |
| Codex | 非交互式运行要求显式信任项目；MCP 网络拒绝记录持久化；Windows 沙箱配置统一 |
| Gemini CLI | 抑制 `git reset`、`--force` 等破坏性命令；无人值守模式使用 allow list；Policy Engine 明确匹配语义 |
| Copilot CLI | 修复带空格命令的权限规则；支持仅允许枚举目录；Windows 沙箱探测 |
| OpenCode | Shell deny 规则可被 `time`、`env`、`bash -c` 绕过；插件工具绕过权限；“Always allow”覆盖未来 Ask 规则 |
| jcode | 项目级 hooks、MCP 命令门禁和共享项目信任存储 |

**判断**：权限绕过已成为跨工具共性风险。团队不应仅依赖提示框或 CLI 配置，而应关注**命令最终语义、插件工具、子代理、跨会话持久化和非交互模式是否一致执行同一策略**。

### 3.3 子代理和多 Agent 编排进入可靠性阶段

- **Claude Code**：缺少 Agent 进程树的资源上限、退出顺序和可靠回收。
- **Codex**：子代理模型目录继承、远程工具能力保留；社区要求 Agent 间通信和共享项目空间。
- **Gemini CLI**：子代理达到 `MAX_TURNS` 仍误报成功、generalist agent 永久挂起、配置未生效、子代理轨迹不可见。
- **OpenCode**：子代理继承权限问题、会话 ID 无法显示、自动压缩可能丢失工具结果。
- **jcode**：Swarm 子 Agent 未继承 `JCODE_HOME`；请求按任务动态选择模型与推理强度。

**判断**：社区关注点已从“能否创建子代理”转向**状态正确性、预算控制、上下文继承、权限继承、轨迹可观测和故障恢复**。

### 3.4 跨设备、跨产品上下文连续性

- **Claude Code**：连接 Claude Projects、跨设备项目记忆、Remote Control 随时恢复会话。
- **Codex**：会话迁移、长会话恢复、远程项目重连、云端与本地附件一致性。
- **Copilot CLI**：`/code` 打开当前 VS Code 会话；后续关注 CLI 与 IDE 上下文同步。
- **jcode**：ACP 客户端集成、SSH 剪贴板、Swarm 环境继承。
- **Pi**：长期会话上下文管理、SDK Harness 生命周期。

**判断**：未来 AI CLI 的竞争单元不再只是单次终端会话，而是**CLI、IDE、桌面端、移动端、远程主机和多 Agent 共同组成的连续工作上下文**。

### 3.5 Windows 与 macOS 生命周期成为可靠性瓶颈

- **Codex**：Windows 项目列表消失、长会话输入卡顿、Computer Use URL 读取失败、授权配置不兼容。
- **Copilot CLI**：Entra 登录、Windows 沙箱、ACP 可观测性。
- **OpenCode**：Windows 后台服务无法启动、v2.2.6 Shell 空输出、插件重载弹出控制台。
- **jcode**：凭据写入递归重设 ACL、发布残留旧 Launcher、Preview 二进制未签名。
- **Claude Code**：`fseventsd` 资源失控、macOS 自动更新与 TCC 权限、CLI 未 notarization。
- **Pi**：Windows 控制台关闭后进程残留、临时文件异常导致崩溃。

**判断**：跨平台问题已成为实际采用的一级障碍，尤其影响 CI、共享开发机、IDE 插件和长驻 Agent。

### 3.6 可观测性与可解释性需求同步上升

- **Gemini CLI**：子代理终止原因、执行轨迹和错误信息需准确。
- **Copilot CLI**：ACP 模式缺少 OpenTelemetry traces/metrics。
- **Codex**：网络重试静默等待 300 秒、模型容量提示不准确。
- **Claude Code**：Auto Mode 拒绝后的恢复路径、长会话自动压缩缺少通知。
- **Pi**：`Harness.close()` 未释放 provider session、AbortError 导致进程退出。

**判断**：企业采用要求的不再只是日志数量，而是可建立因果链的**结构化事件、终止原因、资源指标、权限审计和会话状态追踪**。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与竞争壁垒 |
|---|---|---|---|
| **Claude Code** | Auto Mode、MCP、跨设备记忆、Claude Projects、桌面端与 Remote Control | Anthropic 生态用户、重视安全与跨端连续性的高级开发者 | 以服务端安全判定和 Claude 产品生态为核心，优势是上下文/账户打通；挑战是隐私争议、误伤和跨产品一致性 |
| **OpenAI Codex** | Windows 桌面端、Computer Use、Cloud、MCP、非交互式 CLI | OpenAI 用户、桌面自动化和远程开发团队 | 以桌面—CLI—Cloud—多代理协同构建完整执行栈，安全侧强调显式项目信任与运行时重鉴权 |
| **Gemini CLI** | 多 Agent、Skills、AST 检索、Policy Engine、Shell 沙箱 | 重视代码检索、Agent 编排和执行治理的开发者 | 开源 CLI + 多 Agent/工具生态，通过 AST 感知检索和执行策略降低上下文及安全成本 |
| **GitHub Copilot CLI** | GitHub 工作流、企业认证、VS Code 联动、MCP 与沙箱 | GitHub 企业客户、Entra/自托管模型用户 | 背靠 GitHub 与 Copilot 生态，突出企业认证、Windows 沙箱、索引和 IDE 工作流 |
| **OpenCode** | 多 Provider、多账户、插件、桌面端、MCP 共享连接 | 希望摆脱单一厂商、重视扩展和成本切换的用户 | Provider/插件开放路线最强，但 V2 迁移和权限模型暴露出的兼容、安全债务较重 |
| **jcode** | Harness、Swarm、记忆、ACP、OpenAI-compatible Provider | 活跃实验型用户、Agent 编排和本地化开发者 | Preview 阶段快速整合多种协议与记忆能力，功能扩张快，但稳定性、Token 成本和 Windows 工程成熟度仍是短板 |
| **Pi** | 轻量 SDK、Provider 兼容、文件工具、Codemode | 嵌入型 Agent 开发者、CLI 工具构建者 | 以可编程 SDK 和精细工具语义为核心，强调文件安全及 Provider 兼容；不像大厂产品那样强调桌面生态 |
| **Kimi Code CLI** | 当日缺少有效动态 | 暂无足够判断 | 需要更多发布、Issue 与 PR 数据后再评估定位和成熟度 |

### 定位差异的关键结论

1. **大厂闭源产品强调生态统一**：Claude Code 和 Codex 的竞争重点是桌面端、Remote Control、Cloud、账户和项目上下文。
2. **开源工具强调可编程与可治理**：Gemini CLI、OpenCode、jcode、Pi 更重视策略引擎、插件、Provider、SDK 和协议边界。
3. **Copilot CLI 的企业优势最明确**：GitHub、VS Code、Entra、Windows 沙箱和 OTel 构成较完整的落地链路，但部分模式能力仍不一致。
4. **OpenCode 与 jcode 处于快速试错期**：功能面扩张显著，但版本回归、协议边界和发布质量的代价较高。
5. **Pi 更像 Agent 基础设施组件**：它不主打完整桌面工作台，而强调 SDK、工具调用和 Provider 兼容，适合被嵌入其他产品。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：高热度、高影响**

- **Claude Code**：User-Agent 泄露 Issue 获 **699 赞、99 评论**；Projects 集成获 **430 赞、56 评论**。社区关注度最高，且需求已从单个功能扩展到企业隐私边界。
- **OpenCode**：免费额度重置异常 Issue 达 **317 评论**；权限绕过、V2 参数回归、Shell 空输出同时影响真实使用。
- **Codex**：Windows 项目消失和 Computer Use URL 读取失败分别获 **80、73 条评论**，热点高度集中于真实桌面场景。

**第二梯队：高频工程反馈**

- **Gemini CLI**：子代理成功误报、generalist agent 挂起等直接破坏编排逻辑；社区给出的 P1/P2 优先级较为明确。
- **Copilot CLI**：当日更新 **22 个 Issue**，但只有 **1 个 PR**，呈现“问题输入多、代码修复输出少”的特征。
- **jcode**：当日 **22 Issues + 10 PR + 1 Preview Release**，兼具高反馈和高产出。
- **Pi**：围绕 1.5.0 的 SDK、Provider、文件编辑和资源释放问题形成连续修复链。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 判断 |
|---|---|---|
| **相对成熟，但存在高影响回归** | Claude Code、Codex | 功能广、生态强、企业需求明确；但权限、隐私、Windows/macOS 和状态一致性仍需谨慎 |
| **工程成熟度提升中** | Gemini CLI、Copilot CLI | 工具链较完整，正补齐 Agent 状态、企业认证、OTel、策略和协议能力 |
| **快速迭代、风险较高** | OpenCode、jcode | 发布和 PR 活跃，但功能扩张速度快于兼容性与安全治理速度 |
| **专业化早期阶段** | Pi | SDK/工具链方向清晰，模型及 Provider 兼容变化快，仍在补齐长期运行和扩展稳定性 |
| **数据不足** | Kimi Code CLI | 当日无活动，无法据此评价整体成熟度 |

**生产采用建议**：

- **Claude Code/Codex**：可进入试点，但需针对 Auto Mode、Computer Use、项目权限和桌面端回归建立验收清单。
- **Gemini CLI/Copilot CLI**：适合需要可控 Agent、企业集成和 IDE 协作的团队，重点验证权限与可观测性。
- **OpenCode/jcode/Pi**：更适合开发、实验和内部工具场景；生产使用前应固定版本并避免无保护自动升级。

---

## 6. 值得关注的趋势信号

### 信号一：安全焦点已从“是否弹窗”转向“策略是否不可绕过”

多个工具同时暴露 Shell 包装绕过、插件工具绕过、子代理继承差异及持久化授权覆盖未来规则等问题。这意味着未来评估 Agent 安全不能只看“支持审批”，而要验证：

- 命令是否按最终可执行语义匹配；
- 插件工具是否经过同一权限层；
- 子代理是否继承父会话策略；
- 持久化授权是否会被未来更严格规则重新裁决；
- 无人值守模式是否默认采用 allow list 和项目信任门禁。

### 信号二：MCP 正在成为 Agent 时代的“系统调用层”

MCP 已同时涉及工具发现、身份认证、网络访问、人工 elicitation、共享连接和子代理能力。生态下一步的竞争焦点可能是：

- MCP 目录和版本协商标准化；
- 延迟启动与连接复用；
- 凭据缓存和并发登录；
- 权限策略在 MCP Server 与宿主之间保持一致；
- 工具过多时按任务动态裁剪，避免请求膨胀。

### 信号三：Computer Use 正成为新可靠性测试场

Codex 的浏览器 URL 读取、截图权限残留、Windows 授权和 localhost 网络问题说明，Computer Use 已不只是 UI 功能，而是涉及**状态识别、权限生命周期、网络边界和任务恢复**的系统工程。短期不宜把无人值守桌面自动化作为唯一生产路径。

### 信号四：长会话和自动压缩开始成为核心可靠性瓶颈

Claude Code 的上下文压缩、Codex 的对话分页截断、OpenCode 的压缩后工具结果丢失、Pi 的上下文容量误识别、jcode 的自动记忆未触发，均指向同一问题：

> 会话状态不能只靠模型上下文承载，必须具备独立、持久化且可校验的状态存储。

未来会话层可能演化为类似数据库 checkpoint 的机制：显式记录工具结果、压缩事件、权限变更、子代理轨迹和恢复位置。

### 信号五：Token 成本正从“实现细节”升级为产品指标

jcode 直接反馈 Harness Token 消耗高于 Codex 和 Claude；Gemini CLI 通过 AST 检索、动态工具筛选和文件型任务追踪降低成本；OpenCode 的 MCP 连接共享也兼具性能收益。开发者应将**输入 token、重复工具调用、压缩频率、跨 Agent 上下文复制和失败重试成本**纳入 Agent 工具选型基准。

### 信号六：失败重试必须具备幂等性

Gemini CLI 修复“重试重复执行工具调用”，Codex 增加 WebSocket 重鉴权，Claude Code 调整 Auto Mode 判定，OpenCode 修复压缩与工具调用顺序问题。这些改动共同说明：

- 网络重试不能重复产生外部副作用；
- 权限恢复不能复用过期会话；
- 工具结果与上下文压缩必须事务化；
- 终止状态必须区分成功、失败、超时、轮次耗尽和人工中断。

### 信号七：企业采用将越来越依赖“全模式一致性”

Copilot CLI 的 ACP 缺少 OTel、server 模式忽略自定义 Provider；Codex 的桌面端与 CLI 授权配置不兼容；Claude Code 的 CLI/Desktop elicitation 能力不一致；OpenCode 的 V2 移除根命令参数。成熟的企业工具必须保证：

> 交互式 TUI、非交互式 CLI、ACP、IDE、服务器和桌面端共享同一套配置、权限、Provider 能力及遥测语义。

---

## 决策建议

### 选型时可采用以下框架

1. **优先看失败语义，而非 Demo 能力**  
   验证超时、取消、断网、模型拒答、压缩和子代理失败时，工具是否提供准确状态和恢复路径。

2. **用真实仓库做权限穿透测试**  
   覆盖包装命令、插件工具、MCP、子代理、`/undo`、会话恢复、后台服务和项目切换。

3. **把可观测性作为上线门槛**  
   至少需要终止原因、工具调用记录、权限决策、子代理轨迹、Token 消耗和长任务进度。

4. **固定版本，谨慎自动升级**  
   Claude Code 的 Auto Mode、Codex 的 Windows Desktop、OpenCode V2、jcode Preview 和 Pi 1.5.0 都存在明显回归面。

5. **根据生态绑定选择，而非只看模型质量**  
   - GitHub/Entra/VS Code：Copilot CLI  
   - Claude 跨产品上下文：Claude Code  
   - OpenAI 桌面与 Computer Use：Codex  
   - 多 Agent 编排与 AST 检索：Gemini CLI  
   - 多 Provider、插件和多账户：OpenCode  
   - 快速实验、本地记忆与 Swarm：jcode  
   - 嵌入式 SDK 与轻量工具链：Pi  

**总体判断：** 2026-11-07 的 AI CLI 生态已跨过“功能可用”的早期阶段，进入**可靠性、安全性和状态一致性决定生产采用**的阶段。未来胜出的工具不仅要让 Agent 能做事，还要让开发者能够证明它为什么这样做、做成了什么、是否越权，以及失败后如何安全恢复。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-11-07  
> 说明：所给 PR 数据的“评论数”为 `undefined`，因此无法严格按评论量排序。以下结合 PR 数量、Issue 关联度、近期活跃度、功能影响范围及社区反馈进行综合排序；所有列出的 PR 当前均为 **Open**。

## 1. 热门 Skills 排行

### 1. `skill-creator`：Skill 开发、评测与发布工具链

- **定位**：用于创建、验证、优化和打包 Claude Code Skills。
- **社区热点**：
  - 触发评测在不同进程、异常和 Windows 环境下出现误判。
  - YAML frontmatter 解析不准确，可能丢失引号、转义字符和描述语义。
  - `package_skill.py` 无法可靠地直接执行。
  - Eval Viewer 存在 HTML 属性转义不一致所导致的展示路径 XSS 风险。
- **当前状态**：**Open**；相关修复分散在多个 PR 中，说明这是当前生态的核心基础设施。
- [PR #1298：隔离触发评测并处理 Windows/运行时失败](https://github.com/anthropics/skills/pull/1298)
- [PR #1997：正确解析 YAML frontmatter 标量](https://github.com/anthropics/skills/pull/1997)
- [PR #1681：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681)
- [Issue #556：`run_eval.py` 触发率为 0%](https://github.com/anthropics/skills/issues/556)
- [Issue #1394：Eval Viewer 属性安全与 XSS](https://github.com/anthropics/skills/issues/1394)

### 2. `mcp-builder`：MCP 服务开发、连接与评测

- **定位**：帮助 Claude Code 构建、连接并评测 MCP Server。
- **社区热点**：
  - MCP 2.x 将 `streamablehttp_client` 更名为 `streamable_http_client`，旧写法失效。
  - 自定义 HTTP Header 的配置接口发生变化。
  - 评测脚本把真实 MCP 返回的 `TextContent` 当作不可序列化错误，导致所有调用被记为 0/N。
- **当前状态**：**Open**；连接兼容性和评测可靠性均有待修复。
- [PR #1742：支持 MCP 2.x 客户端与自定义 Header](https://github.com/anthropics/skills/pull/1742)
- [Issue #1390：真实 MCP Server 评测恒为 0/N](https://github.com/anthropics/skills/issues/1390)

### 3. `webapp-testing`：Web 应用自动化测试

- **定位**：启动本地 Web 服务，并通过浏览器交互、元素发现和状态检查验证应用。
- **社区热点**：
  - 使用 `shell=True` 拼接用户或代理提供的命令，存在命令注入风险。
  - `textarea`、`select` 等元素被发现后被错误报告为普通文本。
  - 社区同时关注安全性与元素识别准确性。
- **当前状态**：**Open**；安全修复 PR 近期仍有更新，落地优先级较高。
- [PR #1980：移除 `with_server.py` 中的 `shell=True`](https://github.com/anthropics/skills/pull/1988)
- [PR #1976：修复 textarea/select 元素报告](https://github.com/anthropics/skills/pull/1976)

### 4. `docx`：Word 文档生成、修订处理与质量检查

- **定位**：创建、编辑、检查和验证 DOCX 文档。
- **社区热点**：
  - LibreOffice 超时后脚本仍可能误报成功。
  - 输出文件若残留修订标记，必须视为失败。
  - 合并文本 run 时丢失局部 namespace，可能生成无效 XML。
  - 孤立批注及文档排版质量也是明显需求。
- **当前状态**：**Open**；相关修复覆盖超时验证、XML 正确性和批注检查。
- [PR #1792：LibreOffice 超时报错并验证修订痕迹](https://github.com/anthropics/skills/pull/1792)
- [PR #1734：检测 DOCX 孤立批注](https://github.com/anthropics/skills/pull/1734)
- [Issue #2018：合并 run 导致无效 XML](https://github.com/anthropics/skills/issues/2018)

### 5. `xlsx`：Excel 公式、链接与风险分析

- **定位**：处理工作簿、公式重算、外部链接检查以及风险识别。
- **社区热点**：
  - 外部链接可能通过工作表级 defined name 或别名间接引用。
  - 原实现只检查工作簿级名称并直接匹配正则，导致漏报。
  - 社区需求不是单纯“生成表格”，而是更可靠的公式审计与风险检测。
- **当前状态**：**Open**；已有针对性修复等待合并。
- [PR #2019：解析工作表级 defined names 与别名](https://github.com/anthropics/skills/pull/2019)
- [Issue #2013：对应外部链接漏报问题](https://github.com/anthropics/skills/issues/2013)

### 6. `claude-api`：Claude API 开发参考

- **定位**：提供 Claude API、工具调用和 Claude Academy 等开发指导。
- **社区热点**：
  - 文档包含失效链接，降低入门可用性。
  - Skill 可能一次性注入约 15.6 万 tokens，在单次工具调用中耗尽上下文。
  - 社区希望参考资料按需加载，而不是全量注入。
- **当前状态**：**Open**；链接修复已提交，渐进式加载/上下文治理仍待解决。
- [PR #1730：替换 Academy 与 Tool Use 文档中的失效 URL](https://github.com/anthropics/skills/pull/1730)
- [Issue #1487：Skill 一次性注入约 156k tokens](https://github.com/anthropics/skills/issues/1487)

### 7. `document-typography`：生成文档的排版质量控制

- **定位**：检查 AI 生成文档中的孤行、寡行、标题悬挂、编号错位等排版问题。
- **社区热点**：
  - 用户通常只要求“生成文档”，不会主动要求排版质检。
  - 该 Skill 试图把常见排版缺陷从生成结果后置检查变为自动化质量门禁。
  - 需求具有普遍性，但 PR 自 3 月后长期保持 Open。
- **当前状态**：**Open**；关注度高但合并进展偏慢。
- [PR #514：新增文档排版质量控制 Skill](https://github.com/anthropics/skills/pull/514)

### 8. `algorithmic-art` / `pptx`：创作工具的边界与可靠性

- **定位**：前者生成算法艺术，后者生成和渲染 PowerPoint。
- **社区热点**：
  - 算法艺术对负数输入的环绕行为不符合预期。
  - PPTX 缩略图工具允许非法 `--cols`，错误发生得太晚且信息失真。
  - 用户更看重输出正确性和快速失败，而不只是“能生成”。
- **当前状态**：**Open**；均为小而明确、可快速落地的修复。
- [PR #1977：修复 `wrapAround()` 负数处理](https://github.com/anthropics/skills/pull/1977)
- [PR #1975：拒绝低于 1 的 `--cols`](https://github.com/anthropics/skills/pull/1975)

---

## 2. 社区需求趋势

### 1. 企业级 Skill 共享与治理

社区希望支持组织内共享 Skill 库、权限控制、版本同步和成员统一安装，避免通过 Slack 手工传递 `.skill` 文件。

- [Issue #228：Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)
- [Issue #492：社区 Skill 冒用 `anthropic/` 命名空间造成信任边界问题](https://github.com/anthropics/skills/issues/492)

### 2. Agent 推理质量门禁与交付验证

需求从“能执行任务”转向“能证明结果可靠”，包括：

- 执行前校准；
- 对抗式复核；
- 交付前验证；
- 安全策略、信任评分和审计轨迹。

这表明社区希望将成熟的质量工程方法沉淀为可复用 Skill。

- [Issue #1385：Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)
- [Issue #412：Agent Governance Skill](https://github.com/anthropics/skills/issues/412)

### 3. 长任务的紧凑、持久化记忆

`compact-memory` 提议用符号化表示压缩 Agent 状态，以减少长会话中笔记和记忆占用的上下文，同时保留可恢复性。

- [Issue #1329：Proposing `compact-memory`](https://github.com/anthropics/skills/issues/1329)

### 4. 文档生成后的自动质检

社区不仅需要 DOCX、PDF、PPTX、表格生成能力，还要求自动检查：

- 排版、孤行和编号；
- 修订残留与孤立批注；
- XML 有效性；
- 输出是否真实生成且可打开；
- 公式、外部链接与安全风险。

- [PR #514：Document Typography](https://github.com/anthropics/skills/pull/514)
- [PR #1792：DOCX 修订痕迹验证](https://github.com/anthropics/skills/pull/1792)
- [PR #2019：XLSX 外部链接风险分析](https://github.com/anthropics/skills/pull/2019)

### 5. 多媒体内容生产流水线

社区开始关注从 Markdown 一次生成演示、MP4 视频和配音，而不仅是单文件生成。这反映出 Skills 正从“辅助步骤”向“端到端内容流水线”发展。

- [PR #1703：新增 `md2video-audio`](https://github.com/anthropics/skills/pull/1703)

### 6. 专业领域与高复杂度工程支持

新增提案已覆盖：

- 规范到 Notion 实施任务及验收标准；
- 智能合约静态审计与链上存证；
- HPC 集群、SSH、Slurm 和加速器工作流；
- Python 复古游戏开发、调试和无头验证。

- [PR #1245：Notion Spec-to-Implementation 与 Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245)
- [PR #1771：ProofCore Contract Auditor](https://github.com/anthropics/skills/pull/1771)
- [PR #1615：SCNet HPC](https://github.com/anthropics/skills/pull/1615)
- [PR #525：Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)

---

## 3. 高潜力待合并 Skills

> “高潜力”表示功能新、需求明确或修复影响较大，不代表仓库已给出合并时间表。

### 第一梯队：基础设施修复，近期落地价值高

1. **MCP 2.x 兼容修复**  
   避免开发者在 MCP Server 连接和自定义 Header 上持续踩坑。  
   [PR #1742](https://github.com/anthropics/skills/pull/1742)

2. **`skill-creator` 触发评测修复**  
   直接影响 Skill 是否能被正确触发和客观评测，是扩展生态的关键路径。  
   [PR #1298](https://github.com/anthropics/skills/pull/1298)

3. **Web 测试命令注入修复**  
   消除 `shell=True` 带来的高风险执行路径。  
   [PR #1980](https://github.com/anthropics/skills/pull/1980)

4. **XLSX 外部链接漏报修复**  
   增强公式审计和安全风险识别能力。  
   [PR #2019](https://github.com/anthropics/skills/pull/2019)

### 第二梯队：新增专业 Skill，扩展性较强

5. **Notion 规范转实施计划**  
   打通“产品规范—开发任务—验收标准—进度跟踪”，适合项目管理和研发协作场景。  
   [PR #1245](https://github.com/anthropics/skills/pull/1245)

6. **Markdown 转视频与音频**  
   覆盖从文档到演示、配音和视频的端到端内容生产链。  
   [PR #1703](https://github.com/anthropics/skills/pull/1703)

7. **智能合约审计与存证**  
   结合 Solidity/Rust 静态分析和链上证明，面向 Web3 安全场景，但涉及外部服务与信任模型。  
   [PR #1771](https://github.com/anthropics/skills/pull/1771)

8. **SCNet HPC 操作 Skill**  
   将集群连接、Slurm 作业、模块和加速器使用规范沉淀为领域工作流。  
   [PR #1615](https://github.com/anthropics/skills/pull/1615)

9. **Pyxel 复古游戏开发**  
   强调无头运行、输入驱动测试、帧检查和状态验证，具备明确的验证闭环。  
   [PR #525](https://github.com/anthropics/skills/pull/525)

### 值得持续跟踪

- **文档排版 QC**：用户价值广，但需要明确触发描述并降低与现有文档 Skill 的重叠。  
  [PR #514](https://github.com/anthropics/skills/pull/514)
- **Claude API 文档链接修复**：变更小、风险低。  
  [PR #1730](https://github.com/anthropics/skills/pull/1730)

---

## 4. Skills 生态洞察

**当前社区最集中的诉求，是把 Claude Code Skills 从“单点提示词与脚本集合”升级为安全、可评测、可验证、可组织共享且能按需加载的可靠软件工作流。**

具体表现为四条主线：

1. **可靠评测与触发机制**；
2. **输出正确性和交付验证**；
3. **企业共享、权限与信任边界**；
4. **从通用文档能力走向专业领域端到端自动化**。

---

# Claude Code 社区动态日报

**日期：2026-11-07**  
**数据范围：GitHub `anthropics/claude-code` 过去 24 小时更新**

## 1. 今日速览

- 今日发布 **v2.1.319**，主要调整 Auto Mode 的服务端判定逻辑：在遥测、Feature Flag 或 LLM Gateway 场景下，不再回退到内置分类器。
- 社区讨论高度集中在**隐私、安全与权限控制**：User-Agent 泄露用户邮箱、Opus 5.5 安全分类器误伤、AWS 权限被直接删除等问题成为焦点。
- 产品体验方面，用户集中反馈 **MCP、Remote Control、桌面端、macOS 文件监控及自动更新**的稳定性问题；过去 24 小时没有更新的 PR。

---

## 2. 版本发布

### [v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

**Auto Mode 判定逻辑调整：**

- 当遥测或 Feature Flag 被关闭时，包括通过 LLM Gateway 接入的场景，Auto Mode 会直接请求服务端确认：
  - 服务端能够验证的操作由服务端判断；
  - 服务端无法检查的操作会被询问或拒绝；
  - 不再回退到内置分类器。
- 如需继续使用内置分类器，可设置：

```bash
CLAUDE_CODE_AUTO_MODE_SERVER=0
```

- 官方说明提到，Bedrock、Vertex AI 和 Foundry 等平台的变更不完整或不受影响，升级前建议核对对应平台文档。

---

## 3. 社区热点 Issues

### 1. [User-Agent 请求头泄露邮箱，涉嫌隐私侵犯](https://github.com/anthropics/claude-code/issues/107757)
**标签：** bug / macOS / tools / security  
社区反应：**99 条评论、699 个赞**，是今日最受关注的问题。  
用户称 Claude Code 在未经明确许可的情况下执行网页搜索时，将个人邮箱放入 User-Agent 请求头发送给第三方，进而收到大量垃圾邮件。报告者认为这不应只是可开关设置，而应从请求中彻底移除。该 Issue 对代理、搜索服务及企业用户的数据边界具有明显影响。

### 2. [Claude Code 无法连接 Claude Projects 知识库](https://github.com/anthropics/claude-code/issues/2511)
**标签：** enhancement / core  
社区反应：**56 条评论、430 个赞**。  
用户希望 Claude Code 能直接访问 Claude.ai Projects 中的项目文档、规格和参考资料，避免在 CLI 与 Claude.ai 之间反复复制内容。这是社区长期关注的高频集成需求，也是本次列表中最成熟、最受认可的功能请求之一。

### 3. [macOS 多设备间无法携带项目记忆](https://github.com/anthropics/claude-code/issues/25739)
**标签：** enhancement / macOS  
社区反应：**30 条评论、27 个赞**。  
用户希望在不同机器之间同步项目记忆和上下文，以便在桌面端、远程环境与移动设备间连续工作。它直接对应远程办公、跨终端开发和会话连续性的需求。

### 4. [桌面端项目筛选器被移除，但文档仍然保留](https://github.com/anthropics/claude-code/issues/78857)
**标签：** bug / macOS / UI / desktop  
社区反应：**24 条评论、33 个赞**。  
Claude Code Desktop 1.22209.0 的侧边栏不再提供按项目筛选会话的选项，但官方文档仍未更新。该问题反映近期桌面端迭代中存在的功能回归与文档不同步。

### 5. [macOS fseventsd 失控导致高 CPU、内存膨胀及启动阻塞](https://github.com/anthropics/claude-code/issues/98769)
**标签：** bug / macOS / core / memory  
社区反应：**15 条评论**。  
在高强度 Agent 使用场景下，`fseventsd` 被报告达到远高于预期的资源占用，CPU 核心持续被占用且无法自行恢复；Claude Code 启动也可能因此阻塞。该问题对长时间、多 Agent 并发用户影响较大，并与自动压缩和文件监控机制存在潜在关联。

### 6. [缺少 Agent 进程树的资源治理与可靠回收机制](https://github.com/anthropics/claude-code/issues/91081)
**标签：** enhancement / macOS / core / memory / Bash / agents  
社区反应：**12 条评论**。  
Issue 指出 Claude Code 可创建 Bash、后台任务和子 Agent 进程树，但缺少内存上限、系统压力反馈以及会话结束时确保进程树退出的保障。对于共享开发机、CI 和长期运行的 Agent 工作流，这是重要的可运维性问题。

### 7. [MCP 在 Cowork/Code 共享池中出现版本协商失败](https://github.com/anthropics/claude-code/issues/94466)
**标签：** bug / regression / MCP / desktop  
社区反应：**5 条评论**。  
Desktop Commander MCP 在 Cowork/Code 会话中因共享连接池出现“Version negotiation failed”。这表明 MCP 在多产品形态与共享会话池中的兼容性仍不稳定，会直接影响外部工具集成。

### 8. [桌面端不展示 MCP elicitation 请求，却声明支持该能力](https://github.com/anthropics/claude-code/issues/105334)
**标签：** bug / macOS / MCP / desktop  
社区反应：**5 条评论、3 个赞**。  
当 MCP 服务通过 `elicitation/create` 请求用户填写表单或确认时，Claude Code Desktop 不会显示界面，导致请求被拒绝或中断。CLI 与桌面端能力不一致，对依赖人工授权流的 MCP Server 影响明显。

### 9. [Opus 5.5 安全分类器多次误伤日常编码回复](https://github.com/anthropics/claude-code/issues/104652)
**标签：** bug / macOS / model  
社区反应：**3 条评论**。  
用户报告普通编码任务在单日内被安全分类器中断 20 余次，错误包括 `reasoning_extraction` 和 safeguards 标记。另有独立 Issue 指出，读取用户自己的笔记文件也可能触发同类阻断，表明问题可能不只局限于安全审计场景。

### 10. [macOS 原生 CLI 未经过 notarization，并绕过 Gatekeeper](https://github.com/anthropics/claude-code/issues/106686)
**标签：** bug / security / packaging / installation  
社区反应：**1 条评论**。  
报告称 macOS 原生安装器中的 CLI 虽已签名，但未经过 Apple notarization，同时缺少 quarantine 属性，使 Gatekeeper 无法正常评估。安装过程还可能留下逐版本 TCC 记录、旧 wrapper 和自行重建的 URL handler，对企业安全合规较敏感。

---

## 4. 重要 PR 进展

**过去 24 小时内没有更新的 Pull Request，因此暂无重要 PR 进展可报告。**

---

## 5. 功能需求趋势

### 1. 跨设备、跨产品的上下文连续性
社区希望项目记忆、Claude Projects 知识库和会话状态能够在 macOS、Linux、桌面端、CLI、Remote Control 与移动端之间同步和复用。相关需求集中于：

- [多设备项目记忆](https://github.com/anthropics/claude-code/issues/25739)
- [连接 Claude Projects](https://github.com/anthropics/claude-code/issues/2511)
- [Remote Control 随时访问会话](https://github.com/anthropics/claude-code/issues/106996)

### 2. MCP 的可靠交互与跨端一致性
MCP 已成为社区扩展 Claude Code 的核心机制，但当前问题集中在版本协商、共享连接池、elicitation UI 和 Remote Control shell mode：

- [Desktop Commander MCP 版本协商失败](https://github.com/anthropics/claude-code/issues/94466)
- [桌面端未展示 MCP elicitation](https://github.com/anthropics/claude-code/issues/105334)
- [Remote Control 客户端支持 `!` shell mode](https://github.com/anthropics/claude-code/issues/107569)

### 3. 权限与安全边界需要“可解释、可控制”
除权限提示外，用户更关注 Agent 是否真正遵守 `CLAUDE.md`、哪些请求会暴露身份信息，以及自动模式被拒绝后能否恢复：

- [AWS Identity Center 权限删除未遵守 CLAUDE.md](https://github.com/anthropics/claude-code/issues/107823)
- [移动端无法解除 Auto Mode 分类器拒绝](https://github.com/anthropics/claude-code/issues/105016)
- [User-Agent 泄露邮箱](https://github.com/anthropics/claude-code/issues/107757)

### 4. Agent 进程与资源治理
社区期待 Claude Code 对子 Agent、后台进程和文件监控施加明确约束，包括内存上限、压力反馈、退出顺序和异常检测：

- [Agent 进程树资源治理](https://github.com/anthropics/claude-code/issues/91081)
- [macOS fseventsd 失控](https://github.com/anthropics/claude-code/issues/98769)

### 5. 浏览器与 IDE 集成稳定性
浏览器工具需要兼容 Chrome、Vivaldi、Claude Code Web 和桌面端会话；IDE 侧则关注 Edit/Write 后的固定等待：

- [Vivaldi 标签组消失导致工具调用失败](https://github.com/anthropics/claude-code/issues/107896)
- [Web 新项目线程无法加载浏览器工具](https://github.com/anthropics/claude-code/issues/101870)
- [VS Code 扩展每次 Edit/Write 后固定等待 1 秒](https://github.com/anthropics/claude-code/issues/102413)

### 6. UI 可访问性与个性化
包括自动色盲主题、自定义浅色/深色主题自动切换，以及针对回复局部发起追问的交互方式：

- [自动色盲主题](https://github.com/anthropics/claude-code/issues/92299)
- [自动切换自定义明暗主题](https://github.com/anthropics/claude-code/issues/93034)
- [固定内联线程，针对回复局部提问](https://github.com/anthropics/claude-code/issues/94714)

---

## 6. 开发者关注点

### 隐私与供应链安全
- **请求头泄露身份信息**是今日最高优先级问题之一：[#107757](https://github.com/anthropics/claude-code/issues/107757)。
- macOS CLI 的签名、公证、Gatekeeper 和安装残留问题受到企业用户关注：[#106686](https://github.com/anthropics/claude-code/issues/106686)。
- 自动更新在运行中替换或删除二进制文件，可能导致当前会话失去 macOS TCC 权限：[#105824](https://github.com/anthropics/claude-code/issues/105824)。

### 权限提示不能替代真实约束
用户希望 Agent 即使在已有权限提示机制下，也必须可靠遵守 `CLAUDE.md` 中的禁止修改、必须先展示命令等规则。AWS Identity Center 权限被直接删除的报告强化了这一诉求：[#107823](https://github.com/anthropics/claude-code/issues/107823)。

### 新模型误报影响可用性
Opus 5.5 的安全分类器在日常编码和授权防御测试中出现误报，导致回答被截断。相关反馈包括：

- [日常编码回复被误伤](https://github.com/anthropics/claude-code/issues/104652)
- [读取用户自己的笔记被拒绝](https://github.com/anthropics/claude-code/issues/108048)
- [授权防御安全审计被误伤](https://github.com/anthropics/claude-code/issues/107166)

### 自动模式拒绝后的恢复路径不足
v2.1.319 调整了 Auto Mode 的服务端判定路径，但社区仍关心分类器误判后的替代操作。移动端无法切换模式、批准操作或执行 shell 命令，会让远程工作流直接停滞：[#105016](https://github.com/anthropics/claude-code/issues/105016)。

### 长会话状态变化应更透明
Idle compaction 会在用户长时间静默后自动压缩上下文，但目前缺少明确通知；用户希望首次发生时询问，或在发生时显示状态：[#106714](https://github.com/anthropics/claude-code/issues/106714)。

### 工具调用应避免额外延迟和状态丢失
VS Code 扩展在每次 Edit/Write 后固定等待 1 秒，影响大型任务效率：[#102413](https://github.com/anthropics/claude-code/issues/102413)。与此同时，Vivaldi 中标签组状态可能在工具调用间隙丢失：[#107896](https://github.com/anthropics/claude-code/issues/107896)。

### macOS 文件监控与后台进程稳定性
`fseventsd` 资源失控、Agent 进程树缺少回收机制等反馈，说明长时间运行、多 Agent 并发场景仍需要更完善的资源管理和可观测性。

---

**今日结论：** Claude Code 社区的主线已从单纯的功能扩展转向“**安全可控、跨端一致、资源可治理**”。近期升级时应重点验证 Auto Mode、Opus 5.5、MCP、macOS 文件监控及自动更新对现有工作流的影响。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-07**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

今日社区重点集中在 **Windows 桌面端的稳定性与 Computer Use 回归**：项目列表消失、浏览器状态读取失败、输入卡顿、配置持久化异常等问题持续获得大量讨论。代码侧则明显转向 **运行时鉴权、MCP 启动与权限治理、CLI 安全边界及 TUI 渲染重构**，显示 Codex 正从“功能扩张”进入强化可靠性和安全性的阶段。

## 2. 版本发布

### `rust-v0.169.0-alpha.2`

- **版本类型：** Alpha 预发布版
- **发布说明：** 当前 Release 信息仅提供版本号，未披露详细变更日志。
- **关注方向：** 建议关注该版本后续合入内容，尤其是今日 PR 涉及的 **WebSocket 重鉴权、MCP 延迟启动、Windows 沙箱覆盖、非交互式项目信任和子代理模型目录继承**等改进。

## 3. 社区热点 Issues

> 以下按评论数与问题影响范围筛选。

1. **Windows 更新后本地项目从侧边栏消失**
   - 更新 Codex/ChatGPT Windows 桌面端后，Projects 显示为空，但磁盘目录及近期聊天仍然存在，属于项目入口与会话数据展示层的重要回归。
   - **社区反应：** 80 条评论，为今日最热 Issue。
   - [#42739](https://github.com/openai/codex/issues/42739)

2. **Windows Computer Use 无法识别 Chrome/Edge 当前 URL**
   - 窗口枚举成功，但 `sky.get_window_state` 在获取浏览器状态时直接终止任务，影响点击、输入和网页自动化。
   - **社区反应：** 73 条评论、8 个点赞，说明 Computer Use 回归影响面较大。
   - [#51524](https://github.com/openai/codex/issues/51524)

3. **`read_thread` 仅返回 5 条对话且错误判断历史结束**
   - ChatGPT 对话此前可分页获取完整记录，现只返回 5 条并报告无更多历史，影响上下文恢复、续聊和审计能力。
   - **社区反应：** 11 条评论、2 个点赞，属于会话数据完整性问题。
   - [#50509](https://github.com/openai/codex/issues/50509)

4. **Windows 桌面端保存的 Computer Use 授权被识别为未知配置**
   - 桌面端持久化的应用授权同时被内置后端和官方 CLI 拒绝；删除配置可消除警告，但会丢失已保存授权。
   - **社区反应：** 11 条评论；核心矛盾是桌面端与 CLI 的配置兼容性。
   - [#49484](https://github.com/openai/codex/issues/49484)

5. **Windows 长会话输入严重卡顿**
   - 历史较长的 Dots 会话出现明显输入延迟和断续，而 Web 端及新会话仍然流畅，指向本地长会话渲染或状态同步性能问题。
   - **社区反应：** 10 条评论；开发者对比测试较完整，性能问题可信度较高。
   - [#58337](https://github.com/openai/codex/issues/58337)

6. **Computer Use 截图任务结束后仍保持捕获状态和黄色边框**
   - 截图回合已结束，但捕获访问权限和视觉边框没有及时解除，可能影响后续桌面操作和用户隐私感知。
   - **社区反应：** 8 条评论；问题与 Computer Use 状态清理和权限生命周期相关。
   - [#57101](https://github.com/openai/codex/issues/57101)

7. **Responses WebSocket 每次重试静默等待 300 秒**
   - WebSocket 在回合中途停止响应，关闭选项被移除，且 HTTPS 回退需要多次失败后才启用，影响长任务连续性。
   - **社区反应：** 7 条评论、2 个点赞；涉及网络传输层恢复机制。
   - [#38638](https://github.com/openai/codex/issues/38638)

8. **Windows 多模型同时提示“Selected model is at capacity”**
   - ChatGPT Plus 额度充足时，多款模型仍统一返回容量不足，可能是容量路由、客户端提示或账号侧容量判断异常。
   - **社区反应：** 7 条评论；用户明确反馈 GPT-6.1 Sol、Luna 等均受影响。
   - [#58858](https://github.com/openai/codex/issues/58858)

9. **macOS Work 云端无法读取已上传 PDF**
   - 同一 PDF 在“On the computer”模式可读取，但“Run on the cloud”无法获取，暴露本地附件与云端任务的数据同步问题。
   - **社区反应：** 5 条评论、1 个点赞。
   - [#50690](https://github.com/openai/codex/issues/50690)

10. **macOS 多次提问后输入框失效，必须重启应用**
    - 输入区在若干轮对话后变为不可用，属于持续运行状态下的编辑器生命周期问题。
    - **社区反应：** 4 条评论、1 个点赞。
    - [#30263](https://github.com/openai/codex/issues/30263)

## 4. 重要 PR 进展

> 今日展示的 PR 均已关闭；“CLOSED”不等同于未合并，实际状态需结合提交记录确认。

1. **Cloud 支持图片消息与可编辑草稿交接**
   - Cloud 提交从纯文本扩展为有序的文本和图片内容，并允许在切换到 Cloud 时继续处理编辑器中的草稿。
   - [#60061](https://github.com/openai/codex/pull/60061)

2. **复用 WebSocket 前重新验证运行时鉴权**
   - 对运行时鉴权请求执行新的握手，避免暂停后的旧 WebSocket 仍被复用而继续提交任务。
   - [#60055](https://github.com/openai/codex/pull/60055)

3. **启动子代理时保留模型目录**
   - 防止子代理因本地目录过期或未初始化而丢失 `tool_search` 等远程模型能力。
   - [#60049](https://github.com/openai/codex/pull/60049)

4. **插件默认提示词上限提升至 512 字符**
   - 将每条 `interface.defaultPrompt` 限制从 128 提升至 512，同时更新协议、Schema 与绑定。
   - [#60048](https://github.com/openai/codex/pull/60048)

5. **统一 MCP 网络策略并保留拒绝记录**
   - 修复陈旧授权、错误规则和规则写入失败导致的有效网络拒绝丢失或内存策略与原生执行不一致。
   - [#60046](https://github.com/openai/codex/pull/60046)

6. **集中管理 Windows 沙箱文件系统覆盖配置**
   - 统一 elevated 与 restricted-token 两种解析器，并将子进程环境传递给 elevated resolver。
   - [#60042](https://github.com/openai/codex/pull/60042)

7. **非交互式执行要求显式信任项目**
   - 即使使用 `--sandbox workspace-write`，未信任项目的配置和 MCP 服务仍保持禁用；为 `codex exec`、`codex review` 增加 `--trust`。
   - [#60041](https://github.com/openai/codex/pull/60041)

8. **缓存的 stdio MCP 服务支持按需启动**
   - 常规聊天可复用缓存工具目录，将未使用的 stdio MCP 服务延迟至首次调用时再启动。
   - [#60039](https://github.com/openai/codex/pull/60039)

9. **暴露缓存 MCP 工具的启动错误**
   - 当服务器启动失败时，不再只向模型返回笼统的“工具不可用”，而是传递具体准备阶段错误。
   - [#60038](https://github.com/openai/codex/pull/60038)

10. **延迟 MCP 启动时保留共享发现能力**
    - 子代理使用缓存 MCP 工具时不再被迫降级到旧协议，首次调用仍可协商连接共享。
    - [#60037](https://github.com/openai/codex/pull/60037)

## 5. 功能需求趋势

1. **多代理协作与共享会话**
   - 社区希望独立 Agent 能直接通信、交换需求并调用彼此的能力。
   - 同时出现“论坛式项目线程”和“连接电脑参与者共享项目”的需求，指向跨设备、跨代理的协作空间。
   - [#59636](https://github.com/openai/codex/issues/59636) · [#56801](https://github.com/openai/codex/issues/56801)

2. **Computer Use 与浏览器自动化稳定性**
   - 当前 URL 获取、截图权限回收、localhost 授权、Windows 沙箱网络访问均存在问题，是当前最集中的功能反馈区。
   - [#51524](https://github.com/openai/codex/issues/51524) · [#57101](https://github.com/openai/codex/issues/57101) · [#59248](https://github.com/openai/codex/issues/59248) · [#57671](https://github.com/openai/codex/issues/57671)

3. **远程开发与 SSH 工作流**
   - 远程项目启动后无法重连、远程截图粘贴失败、Windows Work 的 SSH/HTTPS 被拒绝，体现出远程链路仍是高优先级场景。
   - [#60047](https://github.com/openai/codex/issues/60047) · [#59798](https://github.com/openai/codex/issues/59798) · [#57671](https://github.com/openai/codex/issues/57671)

4. **桌面端状态与会话管理**
   - 用户关注项目入口消失、模式识别混乱、会话迁移困难、输入框冻结和长会话卡顿，说明状态模型与 UI 一致性仍需加强。
   - [#42739](https://github.com/openai/codex/issues/42739) · [#55948](https://github.com/openai/codex/issues/55948) · [#40078](https://github.com/openai/codex/issues/40078) · [#58337](https://github.com/openai/codex/issues/58337)

5. **MCP 与插件生态扩展**
   - 今日 PR 集中于 MCP 延迟启动、共享发现、网络策略、插件提示词长度和子代理能力继承，生态基础设施正快速成熟。
   - [#60039](https://github.com/openai/codex/pull/60039) · [#60046](https://github.com/openai/codex/pull/60046) · [#60048](https://github.com/openai/codex/pull/60048) · [#60049](https://github.com/openai/codex/pull/60049)

6. **云端与本地执行一致性**
   - PDF 访问、Work 模式切换、模型能力继承和本地附件处理存在差异，用户期待云端与本地拥有更一致的数据和工具语义。
   - [#50690](https://github.com/openai/codex/issues/50690) · [#40078](https://github.com/openai/codex/issues/40078) · [#60049](https://github.com/openai/codex/pull/60049)

7. **CLI/TUI 可靠性与可观测性**
   - 终端鼠标复制、剪贴板粘贴、大图处理和长连接恢复受到关注；同时出现大图重复解码导致 OOM 的报告。
   - [#59608](https://github.com/openai/codex/issues/59608) · [#59798](https://github.com/openai/codex/issues/59798) · [#59695](https://github.com/openai/codex/issues/59695) · [#38638](https://github.com/openai/codex/issues/38638)

## 6. 开发者关注点

- **Windows 桌面端是当前最大风险区：** 项目列表、输入性能、Computer Use、授权持久化、启动数据库、Workspace 路由和沙箱网络均出现独立问题，用户强烈建议按版本建立统一兼容性清单。
- **Computer Use 必须补齐权限生命周期：** 不仅要正确识别浏览器状态，还要确保截图捕获、视觉边框、授权记录和 localhost 放行在任务结束后及时恢复与持久化。
- **长会话性能和状态恢复不可靠：** 长 Dots 会话输入卡顿、对话分页截断、窗口冻结及输入框失效，可能直接影响生产环境中的持续开发任务。
- **远程开发仍是高频场景：** SSH、tmux、跨系统截图粘贴、远程项目重连和 Work 网络权限，均要求更稳定的端到端连接及错误提示。
- **安全边界正在收紧：** 非交互式运行默认不信任项目配置、MCP 网络拒绝记录持久化、进程 trace 日志隐藏敏感参数，显示 CLI 在自动化场景中的隔离和审计需求持续上升。
- **工具目录与 MCP 生命周期需要更可预测：** 社区希望子代理完整继承模型能力，同时 MCP 服务能够延迟启动、共享连接，并在失败时提供明确诊断。
- **模型可用性提示需要更准确：** “模型容量不足”即使跨模型、跨平台出现，也会直接中断工作流；建议 CLI/桌面端区分真实容量限制、鉴权失败与本地路由异常。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-07**  
**数据范围：**过去 24 小时内更新的 Issues 与 Pull Requests；无新版本发布。

## 1. 今日速览

- 今日讨论高度集中在 **Agent / Subagent 稳定性**：包括子代理达到 `MAX_TURNS` 后被误报成功、generalist agent 永久挂起，以及 Browser Agent 忽略配置、Wayland 失败等。
- 代码侧重点转向 **重试副作用与无头模式可靠性**：避免失败重试重复执行工具调用，并在中断时正确终止 Shell、持久化工具调用。
- 社区同时推动 **AST 感知代码检索、持久化任务追踪、OS 级命令沙箱及更安全的执行策略**，目标是在降低上下文成本的同时提升代码理解能力和执行安全性。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

### 1. Subagent 达到 `MAX_TURNS` 后被误报为成功
- **Issue：**[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 实际达到最大轮次、尚未完成分析，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`。
- 这会直接破坏上层编排、评测和错误恢复逻辑；该 Issue 评论数居今日首位，说明社区高度关注。
- **优先级：P1**

### 2. Generalist Agent 调用后永久挂起
- **Issue：**[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- 简单任务（如创建目录）在委派给 generalist agent 后可能无限等待，禁用子代理后问题消失。
- 该问题获得 **8 个点赞**，是今日社区认可度最高的稳定性问题之一。
- **优先级：P1**

### 3. Browser Agent 忽略 `settings.json` 配置
- **Issue：**[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 未应用 `maxTurns` 等全局或项目级配置覆盖。
- 配置系统与 Agent 实际执行行为不一致，会导致超时策略失效、行为不可预测。
- **优先级：P2**

### 4. Browser Agent 在 Wayland 环境下失败
- **Issue：**[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser subagent 在 Wayland 桌面环境中无法正常运行，却可能显示 `GOAL` 终止原因。
- 该问题同时暴露了浏览器自动化兼容性缺口及终止状态可能不准确的问题。
- **优先级：P1**

### 5. 工具过多时触发 400 错误
- **Issue：**[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 当环境暴露大量工具时，Gemini CLI 可能因请求规模或工具定义限制返回 400。
- 社区期望 Agent 能按任务动态筛选工具，而不是把当前作用域内工具全部发送给模型。
- **优先级：P2**

### 6. Agent 不愿主动使用 Skills 和 Subagents
- **Issue：**[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- 用户反馈 Gemini 往往需要显式提示，才会调用自定义 skills 或子代理。
- 这与子代理采用率、任务拆分质量和复杂任务执行效率直接相关。
- **优先级：P2**

### 7. AST 感知文件读取、搜索与代码库映射
- **Issue：**[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- 社区正在评估 AST 工具是否能减少无效文件读取、降低 token 消耗，并提高代码边界定位精度。
- 配套研究还涉及 AST-aware 代码库映射、搜索和文件读取。
- **优先级：P2**

### 8. Agent 缺少持久化任务追踪
- **Issue：**[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)
- 现有 `WriteToDo` 依赖对话上下文，容易产生 context rot，并无法跨会话保留任务状态。
- 社区建议使用文件型 CRUD 任务系统，以便恢复进度、减少上下文负担。
- **优先级：P3**

### 9. Agent 可能执行破坏性 Git 或数据库操作
- **Issue：**[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 在复杂 Git 分支管理、数据库维护等场景中，Agent 可能选择 `git reset`、`--force` 等高风险命令。
- 社区希望引入明确的破坏性操作抑制机制，以及更安全的替代流程。
- **优先级：P2**

### 10. 子代理上下文与执行轨迹不可见
- **Issue：**[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)  
  **Issue：**[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)
- `/bug` 报告主要记录主会话，缺少子代理内部上下文；子代理轨迹也缺少便捷查看和分享入口。
- 可观测性不足会显著增加线上问题复现、行为评估和跨 Agent 调试的难度。
- **优先级：P1 / P3**

## 4. 重要 PR 进展

### 1. 重试时丢弃失败尝试产生的工具调用
- **PR：**[#30020](https://github.com/google-gemini/gemini-cli/pull/30020)
- 修复流式重试期间失败尝试的工具调用仍被前端收集并执行的问题。
- 可避免带副作用的命令重复执行，是当前最关键的 Agent 可靠性修复之一。

### 2. 无头模式中断时终止 Shell 并持久化工具调用
- **PR：**[#30051](https://github.com/google-gemini/gemini-cli/pull/30051)
- 处理 SIGINT、SIGTERM、SIGHUP 或 Ctrl+C 中断 `run_shell_command` 的场景。
- 目标是避免后台 Shell 残留、错误返回退出码，并保留中断前工具调用记录。

### 3. ACP 客户端支持运行中 Steering
- **PR：**[#29901](https://github.com/google-gemini/gemini-cli/pull/29901) **（已关闭）**
- 允许 Zed、JetBrains、VS Code 扩展等 ACP 客户端向正在运行的 turn 注入用户消息，无需取消当前任务。
- 虽已关闭，但反映了 IDE/编辑器与 CLI 双向交互能力的发展方向。

### 4. 恢复会话成功后再恢复工作区目录
- **PR：**[#29890](https://github.com/google-gemini/gemini-cli/pull/29890) **（已关闭）**
- 修复恢复聊天失败时，已保存目录仍被提前加入工作区上下文的问题。
- 防止失败会话污染后续工作区状态。

### 5. 无头模式保留结构化 API 错误
- **PR：**[#29895](https://github.com/google-gemini/gemini-cli/pull/29895) **（已关闭）**
- 将非 `Error` 类型的 `GeminiEventType.Error` 转换为真实 `Error`。
- 避免 API 错误显示为 `[object Object]`，同时保留原始错误信息和元数据。

### 6. Policy Engine 文档明确 `commandPrefix` 匹配语义
- **PR：**[#29902](https://github.com/google-gemini/gemini-cli/pull/29902) **（已关闭）**
- 澄清 deny rule 匹配命令名称，而非命令最终效果或系统调用。
- 推荐无人值守或 YOLO 模式优先使用 allow list，降低误放行和误拦截风险。

### 7. 修复嵌套 `.gitignore` 的否定规则
- **PR：**[#30052](https://github.com/google-gemini/gemini-cli/pull/30052)
- 修复父级 `dir/**` 模式导致嵌套 `.gitignore` 的重新包含规则被忽略的问题。
- 对文件过滤、工具输出范围和工作区行为一致性具有直接影响。

### 8. 修复后台 PID 解析产生 `NaN`
- **PR：**[#30053](https://github.com/google-gemini/gemini-cli/pull/30053)
- PID 文件包含无法识别的非数字行时，Shell 工具不再显示 `Background PIDs: NaN`。
- 提升后台任务诊断信息的可靠性。

### 9. 修复环境变量展开被内部键覆盖
- **PR：**[#30056](https://github.com/google-gemini/gemini-cli/pull/30056)
- `expandEnvVars` 不再误用调用方环境中的 `__GCLI_EXPAND_TARGET__`。
- 避免展开结果被内部实现细节意外替换。

### 10. 将 Claude `SubagentStop` Hook 正确迁移为 `AfterAgent`
- **PR：**[#30055](https://github.com/google-gemini/gemini-cli/pull/30055)
- 修复 Hook 迁移时事件名称大小写不一致，导致子代理停止事件无法映射的问题。
- 有利于 Claude Code 工作流迁移和跨 Agent Hook 生态兼容。

## 5. 功能需求趋势

### Agent 可靠性与状态管理
- 终止原因必须准确区分：正常完成、达到轮次上限、中断、失败和超时。
- 修复 generalist agent 挂起、Browser Agent 失败及配置覆盖失效。
- 需要对子代理挂起、重试和失败恢复建立统一机制。

### 子代理编排与可观测性
- 提升模型对 Skills、Subagents 的自主发现和调用能力。
- 增强任务拆分、并行执行、共享记忆及跨 Agent 协作。
- 子代理轨迹应进入 `/bug` 和 `/chat share`，便于复现、评估和调试。

### 更高效的代码库理解
- AST-aware 文件读取、符号级搜索和代码库映射成为明确方向。
- 社区关注减少整文件读取和无效 token 消耗，提升定位精度。
- “Tactful Extraction” 类渐进式检索机制也是高频讨论点。

### Shell 安全与执行治理
- 引入零依赖 OS 级沙箱，并结合执行后意图路由和风险控制。
- 对 `git reset`、`--force`、数据库修改等破坏性操作增加抑制或二次确认。
- 在非交互模式下强化 allow list，减少无人值守执行风险。

### 任务状态持久化
- 从会话内 `WriteToDo` 转向文件型 CRUD 任务系统。
- 目标是跨会话恢复进度、降低上下文污染，并支持更可靠的长任务执行。

### IDE 与协议集成
- ACP Steering、VS Code、JetBrains、Zed 等客户端集成是明确关注点。
- 社区期待运行中干预、并行工作区策略和更稳定的 IDE 生命周期管理。

## 6. 开发者关注点

1. **失败重试不能重复产生副作用**  
   工具调用、命令执行与前端状态必须以最终成功的模型 turn 为准，避免重复写入、重复提交或重复触发外部操作。

2. **终止状态必须可信**  
   `GOAL`、`MAX_TURNS`、挂起和异常不能混为一谈；尤其是子代理未完成任务却报告成功，会显著增加调试难度。

3. **配置需要在所有 Agent 路径中一致生效**  
   `settings.json` 中的 `maxTurns` 等参数应在 Browser Agent、generalist agent 和其他子代理中统一应用。

4. **Shell 进程必须可中断、可清理**  
   无头模式、Ctrl+C 和信号退出后，不应留下孤儿 Shell、PTY 文件描述符或后台进程。

5. **错误信息需要结构化且可诊断**  
   API 错误、子代理上下文、终止原因、后台 PID 和工具调用记录都应足够清晰，减少人工复现成本。

6. **控制上下文成本**  
   AST 感知读取、符号级搜索、持久化任务追踪和更精确的工具筛选，均指向降低 token 消耗及“整文件倾倒”问题。

7. **默认执行策略应偏安全**  
   开发者希望 Agent 在存在安全替代方案时避免破坏性命令，并在无人值守或 YOLO 模式下依赖明确 allow list。

8. **子代理采用率和调用质量仍有提升空间**  
   模型需要更好地理解何时应调用自定义 skill、专用 Agent 或并行工作流，而不只是机械执行用户显式指定的工具。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-07**  
**项目：** [github/copilot-cli](https://github.com/github/copilot-cli)

## 1. 今日速览

- 过去 24 小时发布 **v1.0.108-1**，重点修复 Grok 4.6/4.7 的 PDF 附件处理，以及切换目录后本地 MCP 服务未重新应用沙箱权限的问题。
- 社区焦点集中于 **交互体验、企业认证与 MCP、Windows 沙箱、后台任务输出和可观测性**；过去 24 小时共更新 22 个 Issue。
- 今日仅有一个 PR 更新：提交 **简体中文 README 翻译**，进一步改善 Copilot CLI 的中文开发者接入体验。

---

## 2. 版本发布

### [v1.0.108-1](https://github.com/github/copilot-cli/releases/tag/v1.0.108-1)

**修复**

- 使用 Grok 4.7 或 Grok 4.6 时，如果无法直接处理 PDF 附件，将回退为文件引用，不再导致整个请求失败。
- 开启沙箱后，执行 `/cd` 会重启正在运行的本地 MCP 服务，使其重新应用新工作目录对应的拒绝路径，而不是沿用旧目录权限。

### [v1.0.108-0](https://github.com/github/copilot-cli/releases/tag/v1.0.108-0)

**新增**

- 新增 `sandbox.userPolicy.filesystem.enumeratePaths` 设置，用于在 Windows 上配置“仅允许枚举”的目录授权。
- 新增 `/index` 命令，并对符合条件的仓库默认启用托管式共享 tgrep 索引。

**改进**

- 增强内置构建对 Copilot CLI 行为的问答能力。

### [v1.0.107](https://github.com/github/copilot-cli/releases/tag/v1.0.107)

- Rex 终端支持通过 Kitty direct placement 内联显示图片。
- 新增 `/code`，可在 VS Code 中打开当前会话。
- `copilot config` 新增 Fusion tier 配置。
- `/settings` 统一为所有用户打开统一控制面板，并支持跨设置及本地资源的全局搜索。

---

## 3. 社区热点 Issues

1. **Shift+Enter 仍会直接提交提示词，无法插入换行**  
   [#2776](https://github.com/github/copilot-cli/issues/2776)｜[#3768](https://github.com/github/copilot-cli/issues/3768)  
   两个相关 Issue 合计获得 **10 个赞、11 条评论**，是本轮最受关注的基础交互问题之一。该行为直接影响提示词编写体验，也是多行终端用户的高频反馈点。

2. **Fusion/Auto 模式下，后台长命令期间 Agent 输出停止显示**  
   [#5370](https://github.com/github/copilot-cli/issues/5370)  
   用户会误以为 Agent 卡死，直到发送下一条消息后，延迟输出才集中出现。该问题刚创建即获得项目方回复，反映出后台任务实时反馈的重要性。

3. **ACP 模式未产生任何 OpenTelemetry traces 或 metrics**  
   [#5376](https://github.com/github/copilot-cli/issues/5376)  
   即使启用 OTel 并由服务端策略强制开启，`copilot --acp` 仍不创建会话级 tracker。对企业监控、故障定位和成本分析影响较大。

4. **Windows Entra broker 的 MCP token 缓存始终为 0 字节**  
   [#5236](https://github.com/github/copilot-cli/issues/5236)  
   Issue 已有 **6 条评论**。由于缓存无法持久化，每次启动新进程都会重复弹出账号选择器，直接削弱 MCP 身份认证的可用性。

5. **macOS 上多个 Entra MCP 服务启动时拒绝并发登录**  
   [#5250](https://github.com/github/copilot-cli/issues/5250)  
   两个受 Entra 保护的远程 MCP 服务可能同时触发登录，引发“sign-in is already in progress”，且已拒绝的缓存令牌无法恢复。问题涉及并发协调和凭据恢复机制。

6. **Windows 沙箱探测因 `CreateProcessW error 2` 失败**  
   [#5368](https://github.com/github/copilot-cli/issues/5368)  
   在 `failIfUnavailable: true` 的托管设置下，沙箱强制执行探测可能直接失败。该 Issue 已关闭，但其修复结果将影响企业环境对本地沙箱可用性的判断。

7. **`permissions-config.json` 中带空格的命令标识仍触发审批**  
   [#4150](https://github.com/github/copilot-cli/issues/4150)  
   例如配置 `"make fix"` 后仍然反复询问授权。该问题已有 **3 个赞**，说明权限规则与真实命令参数之间的匹配准确性直接关系到自动化效率。

8. **会话长期停留在“In use”状态**  
   [#4845](https://github.com/github/copilot-cli/issues/4845)  
   已关闭的会话没有自动从“使用中”状态恢复，用户只能通过 `/resume` 手动找回，并反复看到“其他位置正在使用”的错误警告。

9. **希望支持仅面向用户显示、面向模型脱敏的 assistant hook**  
   [#5099](https://github.com/github/copilot-cli/issues/5099)  
   当前 `postToolUse` 可以修改模型看到的工具结果，但缺少只改变用户可见文本的能力。该需求对插件生态、敏感信息展示和审计信息传递具有较高价值。

10. **请求自托管模型提供商在 host/server 模式下被忽略**  
    [#5371](https://github.com/github/copilot-cli/issues/5371)  
    `COPILOT_PROVIDERS_CONFIG` 和 `COPILOT_PROVIDER_*` 在交互式 TUI 与 `-p` 模式下有效，但在 `--host-environment` 和 `--server` 模式下失效，直接影响企业 BYOK 和自定义模型接入。

11. **ACP 模式与自定义模型配置不一致**  
    [#5371](https://github.com/github/copilot-cli/issues/5371)  
    该问题也体现了非交互式、服务器及实验模式之间的能力对齐不足，是本期企业集成方向的重要新增反馈。

12. **希望禁用内置斜杠命令**  
    [#5375](https://github.com/github/copilot-cli/issues/5375)  
    企业或团队已有 `/review` 等自定义 skill，却容易与内置命令冲突。需求集中于“同名覆盖、选择性和作用域控制”，反映插件治理正在成为新关注点。

---

## 4. 重要 PR 进展

过去 24 小时仅检测到 **1 个更新的 PR**，暂无足够信息形成 10 个重要 PR 清单。

- **新增简体中文 Copilot CLI README**  
  [#5373](https://github.com/github/copilot-cli/pull/5373)  
  作者为 `@zgd2007`，当前处于 Open 状态。该 PR 添加简体中文 README，并在中英文 README 之间加入互相导航入口，同时保留命令、配置键、产品名称和上游文档链接。PR 已完成 `git diff --check` 验证。

> 本期没有其他符合“过去 24 小时内更新”条件的 PR，因此未额外列出。

---

## 5. 功能需求趋势

### 终端与编辑器交互

- **多行输入**：Shift+Enter 换行仍是最明确的交互痛点之一。  
  [#2776](https://github.com/github/copilot-cli/issues/2776)｜[#3768](https://github.com/github/copilot-cli/issues/3768)
- **完整键盘导航**：希望聊天时间线与提示编辑器均支持键盘操作，而不仅是输入区。  
  [#5378](https://github.com/github/copilot-cli/issues/5378)
- **长会话整理**：高亮请求和最终回答，并折叠中间过程，降低历史记录检索成本。  
  [#4995](https://github.com/github/copilot-cli/issues/4995)
- **插件式 UI 展示**：允许 hook 输出仅对用户可见、同时对模型隐藏或脱敏。  
  [#5099](https://github.com/github/copilot-cli/issues/5099)｜[#5374](https://github.com/github/copilot-cli/issues/5374)

### IDE 与工作流集成

- `/code` 已将当前会话带入 VS Code；后续社区预计会继续关注编辑器和 CLI 间的上下文同步、文件定位及会话接管能力。  
  [v1.0.107](https://github.com/github/copilot-cli/releases/tag/v1.0.107)

### 企业认证、MCP 与权限治理

- Entra broker 在 Windows 和 macOS 上的 token 持久化、并发登录及恢复机制。  
  [#5236](https://github.com/github/copilot-cli/issues/5236)｜[#5250](https://github.com/github/copilot-cli/issues/5250)
- Windows 沙箱探测和目录授权粒度持续增强。  
  [#5368](https://github.com/github/copilot-cli/issues/5368)
- 带参数命令的权限规则需要更可靠的匹配。  
  [#4150](https://github.com/github/copilot-cli/issues/4150)
- 企业策略下本地沙箱的配置与部署文档仍不完整。  
  [#3884](https://github.com/github/copilot-cli/issues/3884)

### 非交互模式与自定义模型

- ACP、host environment、server 模式的可观测性及配置一致性正在成为企业采用重点。  
  [#5376](https://github.com/github/copilot-cli/issues/5376)｜[#5371](https://github.com/github/copilot-cli/issues/5371)
- BYOK 用户希望所有运行模式都支持自定义 provider，而不只是 TUI 和 `-p`。  
  [#5371](https://github.com/github/copilot-cli/issues/5371)

### 检索、索引与模型能力

- `/index` 和托管式共享 tgrep 索引降低大型仓库的检索成本。  
  [v1.0.108-0](https://github.com/github/copilot-cli/releases/tag/v1.0.108-0)
- PDF 附件处理逐步覆盖不同模型，反映出多模态能力兼容性的重要性。  
  [v1.0.108-1](https://github.com/github/copilot-cli/releases/tag/v1.0.108-1)

### 插件与命令治理

- 用户希望能够覆盖、禁用或按作用域管理内置斜杠命令，避免与团队 skill 冲突。  
  [#5375](https://github.com/github/copilot-cli/issues/5375)

---

## 6. 开发者关注点

1. **交互一致性不足**  
   Shift+Enter、Esc、表单取消、会话恢复和聊天导航等问题共同指向同一诉求：CLI 应遵循一致、可预测的快捷键和状态管理逻辑。

2. **长任务缺少实时反馈**  
   后台 shell 命令期间输出停顿，会让用户误判 Agent 卡死。开发者需要明确的任务状态、实时输出通道及完成通知。  
   [#5370](https://github.com/github/copilot-cli/issues/5370)

3. **企业认证与凭据生命周期仍是高风险区域**  
   Entra token 缓存、并发登录和缓存恢复问题横跨 Windows、macOS 与 HTTP MCP 场景，可能直接造成重复登录和 CI/开发流程中断。  
   [#5236](https://github.com/github/copilot-cli/issues/5236)｜[#5250](https://github.com/github/copilot-cli/issues/5250)

4. **沙箱和权限策略需要“可执行”而非仅“已配置”**  
   社区既关心 Windows 沙箱探测是否可靠，也关心带空格命令和目录枚举权限能否真正匹配预期。  
   [#5368](https://github.com/github/copilot-cli/issues/5368)｜[#4150](https://github.com/github/copilot-cli/issues/4150)

5. **非交互式与企业模式的能力落后于交互式模式**  
   ACP 没有 OTel 信号、server/host 环境忽略自定义 provider，说明各运行模式之间的配置和遥测能力仍需统一。  
   [#5376](https://github.com/github/copilot-cli/issues/5376)｜[#5371](https://github.com/github/copilot-cli/issues/5371)

6. **插件生态需要更细粒度的控制权**  
   用户希望区分“模型可见内容”和“用户可见内容”，并覆盖或禁用内置命令。这表明插件机制正从简单扩展转向企业级策略治理。  
   [#5099](https://github.com/github/copilot-cli/issues/5099)｜[#5375](https://github.com/github/copilot-cli/issues/5375)

7. **中文本地化需求开始进入上游流程**  
   简体中文 README PR 表明 Copilot CLI 的中文开发者触达和文档本地化正在改善，但目前更新量仍有限。  
   [#5373](https://github.com/github/copilot-cli/pull/5373)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-07

## 1. 今日速览

- **v2.2.6 发布**：重点引入 MCP 连接共享、GUI 插件主题与插槽，并继续完善 Desktop 会话媒体、Claude 配置及安装检测等能力。
- **社区讨论集中在稳定性与权限模型**：免费额度重置、Windows 后台服务、Shell 输出、插件权限绕过和会话生命周期问题成为高频议题。
- **V2 回归风险受到关注**：部分 Windows 用户升级后出现 Shell 输出为空、后台服务无法启动等问题；多个修复 PR 已提交或合入。

---

## 2. 版本发布

### [v2.2.6](https://github.com/anomalyco/opencode/releases/tag/v2.2.6)

主要更新：

- **MCP 连接共享**：相同配置的 MCP Server 可跨项目复用连接，减少进程数量并缩短启动时间（[#61185](https://github.com/anomalyco/opencode/pull/61185)）。
- **GUI 插件主题与新插槽**：增强桌面端插件界面的定制能力。
- 同期社区还围绕 Desktop 媒体面板、Claude Agent 多配置目录、后台服务恢复及安装来源探测提交了多项改进。

---

## 3. 社区热点 Issues

### 1. 免费额度持续不恢复，Reset 时间反复顺延
[#59387](https://github.com/anomalyco/opencode/issues/59387)  
集中收集“免费消息额度已用完”“重置时间到达后仍无法使用”等问题，评论数达 **317**，是当日讨论热度最高的问题。相关独立报告还包括 [#62233](https://github.com/anomalyco/opencode/issues/62233) 与 [#62275](https://github.com/anomalyco/opencode/issues/62275)。核心矛盾是额度提示看似已重置，但实际配额并未恢复。

### 2. V2 根命令不再接受 `-m / --model`
[#56218](https://github.com/anomalyco/opencode/issues/56218)  
V1 支持通过 `opencode -m provider/model` 直接指定模型启动，V2 将该参数移除并报 `Unrecognized flag`。这是明显的 CLI 兼容性回归，会破坏脚本、快捷命令和既有工作流。

### 3. Shell 权限规则可被包装命令绕过
[#58775](https://github.com/anomalyco/opencode/issues/58775)  
`shell` 拒绝规则仅匹配原始命令文本；通过 `time`、`env`、`bash -c` 等包装执行时可能绕过 deny 规则。相关跟进 [#62513](https://github.com/anomalyco/opencode/issues/62513) 也指出 V2 对裸命令与完整命令的匹配语义不一致。该问题直接关系命令执行安全。

### 4. 外部插件工具绕过已配置权限
[#50652](https://github.com/anomalyco/opencode/issues/50652)  
插件注册的工具在执行时没有应用其 `permission` 配置，直接调用以及经 Code Mode 调用均可能绕过限制。由于插件工具通常具备较强副作用，这一问题具有较高安全优先级。

### 5. V2 “Always allow”会覆盖未来的 Ask 规则
[#48456](https://github.com/anomalyco/opencode/issues/48456)  
选择“Always allow”后，权限会持久化到项目级 SQLite，并在后续会话及子代理中优先于显式 `ask` 配置。用户预期与实际权限层级不一致，可能导致过度授权。

### 6. 自动压缩会丢失工具调用结果
[#62481](https://github.com/anomalyco/opencode/issues/62481)  
当模型步骤以工具调用结束、紧接着触发自动压缩时，下一次请求可能缺少对应 tool result，OpenAI 随后报 `No tool output found for function call`。问题会直接中断工具链，且重试仍可能复现。

### 7. Windows 升级后后台服务无法启动
[#62326](https://github.com/anomalyco/opencode/issues/62326)  
Windows 用户更新至 v2.2.5 后出现 `Background service failed to start`，执行 `opencode service stop` 后才能恢复。对应修复 PR [#62520](https://github.com/anomalyco/opencode/pull/62520) 已关闭，指向失败的服务注册残留问题。

### 8. v2.2.6 在 Windows 上 Shell 返回空输出
[#62512](https://github.com/anomalyco/opencode/issues/62512)  
用户升级到 v2.2.6 后，Shell 工具对所有命令均报告退出码 0，但 `output.size=0`。报告指出问题可能与 PowerShell 7 的 App Execution Alias 解析路径有关，属于新版本的高影响回归。

### 9. `/goal` 在 `/undo` 后永久排队
[#62138](https://github.com/anomalyco/opencode/issues/62138)  
执行 `/undo` 后再运行 `/goal` 或 `/goal resume`，目标保持 active，但任务始终留在 session inbox 中，无法启动或计时。修复 PR [#62504](https://github.com/anomalyco/opencode/pull/62504) 尝试在执行 session command 前提交暂存的 revert。

### 10. MiniMax M3.1 Flash 未暴露 Reasoning Effort 档位
[#62264](https://github.com/anomalyco/opencode/issues/62264)  
models.dev 已声明五档 reasoning effort，但 OpenCode 中 `MiniMax-M3.1-Flash` 在官方及 Token Plan Provider 下均显示零档位；同时 API 默认行为可能与目录声明不一致。这会限制用户对模型推理强度和成本的控制。

---

## 4. 重要 PR 进展

### 1. MCP Server 跨项目共享连接
[#61185](https://github.com/anomalyco/opencode/pull/61185)  
已进入 v2.2.6。可对同一 MCP Server 启用连接池，在配置相同的项目间复用进程，减少重复启动成本。

### 2. Claude Agent 支持多配置目录与账户切换
[#62514](https://github.com/anomalyco/opencode/pull/62514)  
新增 `claude-agent.settings.configDir`，支持配置目录数组；某个账户达到使用限制时，可切换到下一个账户。相关重复提交还包括 [#62510](https://github.com/anomalyco/opencode/pull/62510) 与 [#62508](https://github.com/anomalyco/opencode/pull/62508)。

### 3. 修复失败服务阻塞后续启动
[#62520](https://github.com/anomalyco/opencode/pull/62520)  
修复 `ensure()` 将已注册但 `/api/info` 返回 500 的服务视为致命错误的问题。启动失败后残留的进程不再持续阻塞后续启动，对应 [#62326](https://github.com/anomalyco/opencode/issues/62326)。

### 4. 全局包管理器探测移出项目目录
[#62273](https://github.com/anomalyco/opencode/pull/62273)  
更新器为识别安装来源会在当前项目目录运行 npm、pnpm、bun、yarn、vp 等全局探测命令。该 PR 将其移出项目目录，避免探测命令在用户仓库中产生副作用或写入 Corepack 文件。

### 5. 禁用全局探测期间的 Corepack 自动 Pin
[#62509](https://github.com/anomalyco/opencode/pull/62509)  
修复 Corepack shim 在自动 Pin 开启时，可能因 OpenCode 的包管理器探测而修改项目配置的问题。

### 6. Desktop Review 使用已解析的 Branch Base
[#62511](https://github.com/anomalyco/opencode/pull/62511)  
在请求 Branch Changes 前解析服务端提供的分支基线，修复本地 main 或 stacked parent 分支提交未被正确纳入 Desktop Review 的问题。

### 7. Console 指令与 Skills 改用独立端点加载
[#62507](https://github.com/anomalyco/opencode/pull/62507)  
重构 Console 工作区 instructions 和 skills 的加载路径，避免依赖旧聚合端点，为后续独立演进提供更清晰边界。

### 8. 修复子代理 Session ID 无法在 Open 菜单显示
[#62262](https://github.com/anomalyco/opencode/pull/62262)  
此前在 Open 菜单中准确输入子代理 Session ID，虽然能查询到目标，却会被 `parentID` 过滤逻辑排除。该修复允许直接跳转到子代理会话，对应 [#52069](https://github.com/anomalyco/opencode/issues/52069)。

### 9. 会话标题排除模型 Commentary
[#62267](https://github.com/anomalyco/opencode/pull/62267)  
Responses 风格模型可能先输出 commentary，再输出正式标题；旧逻辑会将两者拼接。该 PR 仅保留最终标题内容，修复类似 `We need title only...` 的异常标题，对应 [#51997](https://github.com/anomalyco/opencode/issues/51997)。同类修复另见 [#62259](https://github.com/anomalyco/opencode/pull/62259)。

### 10. 插件安装失败时显示 Git 原始错误
[#62261](https://github.com/anomalyco/opencode/pull/62261)  
当 `github:` 插件源不存在或无权限时，不再只显示笼统的 `An unknown git error occurred`，而是展示 Git/GitHub 的实际错误，对应 [#54483](https://github.com/anomalyco/opencode/issues/54483)。

---

## 5. 功能需求趋势

1. **权限控制与安全边界**  
   社区高度关注 Shell deny 规则、插件工具权限、Always allow 持久化和子代理继承权限。需求不只是“能否执行”，而是规则是否跨包装器、跨会话、跨插件一致生效。  
   代表：[#50652](https://github.com/anomalyco/opencode/issues/50652)、[#58775](https://github.com/anomalyco/opencode/issues/58775)、[#48456](https://github.com/anomalyco/opencode/issues/48456)

2. **免费额度、套餐与用量透明度**  
   免费层额度重置异常影响最广，用户期待可靠的用量显示、明确的 Reset 行为，以及 Desktop 中可切换的 Plan/Build。  
   代表：[#59387](https://github.com/anomalyco/opencode/issues/59387)、[#62060](https://github.com/anomalyco/opencode/issues/62060)

3. **Windows 稳定性和后台进程体验**  
   后台服务启动失败、插件重载时弹出控制台窗口、PowerShell 输出为空，均集中指向 Windows 进程启动与生命周期管理。  
   代表：[#62326](https://github.com/anomalyco/opencode/issues/62326)、[#62496](https://github.com/anomalyco/opencode/issues/62496)、[#62512](https://github.com/anomalyco/opencode/issues/62512)

4. **多模型与多账户管理**  
   MiniMax reasoning 档位、Claude 多配置目录和账户自动切换，反映用户希望在同一客户端管理多个模型来源、账户及配额。

5. **会话状态与可观测性**  
   后台 Shell、TUI 会话列表、Session 标签页都缺少准确的活动指示；用户需要明确知道任务是否仍在运行、是否已暂停或被错误“认领”。

6. **桌面端媒体与会话资产管理**  
   新增会话 Media 面板，集中展示图片、视频和链接，说明 Desktop 正从“聊天客户端”向完整会话工作台演进。  
   代表：[#62217](https://github.com/anomalyco/opencode/pull/62217)

7. **原生 Computer Use**  
   社区提出原生计算机操作支持诉求，显示 OpenCode 正尝试从终端代理扩展到 GUI 代理。  
   代表：[#61558](https://github.com/anomalyco/opencode/issues/61558)

---

## 6. 开发者关注点

- **升级兼容性是首要风险**：V2 移除了根命令 `-m`，Windows v2.2.6 又出现 Shell 空输出，升级前需要重点验证 CLI 参数、PowerShell 路径和后台服务。
- **权限规则必须按“可执行语义”而非字符串匹配**：当前包装命令、插件工具、Code Mode 和子代理场景存在不一致，容易造成误放行或误拒绝。
- **会话生命周期存在状态机缺口**：`/undo` 后 Goal 排队、问题弹窗被忽略后 Session 仍被认领、后台 Shell 无活动提示，都指向 run claim、暂停与恢复状态未可靠同步。
- **工具调用上下文不能因压缩而丢失**：自动压缩与工具调用的先后顺序需要事务化处理，否则会生成无法通过模型 API 校验的历史。
- **错误信息必须可操作**：插件源 404、免费额度未恢复、模型 reasoning 档位缺失等问题，目前分别存在笼统报错、状态异常或元数据不一致。
- **Windows 进程管理需要系统化治理**：隐藏子进程控制台、正确解析 App Execution Alias、清理失败服务注册，应作为统一发布检查项。
- **多 Provider 体验仍需加强**：模型能力目录、Provider 默认值、OpenCode 暴露的档位需要保持一致，避免模型已支持但客户端无法选择。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-07

## 今日速览

过去 24 小时共更新 **22 个 Issue、10 个 PR**，并发布 **v1.0.0-preview.199**。社区焦点集中在 **Token 成本优化、ACP 兼容性、跨平台体验与安全性、Windows 构建稳定性**，同时多个需求指向 **本地记忆、模型路由策略和新 Provider 集成**。

---

## 版本发布

### [v1.0.0-preview.199](https://github.com/1jehuang/jcode/releases/tag/v1.0.0-preview.199)

- 基于 `master` 提交 `7fd42339c907de223021bd63e5bb5df778c43a01` 构建。
- 相较 `v1.0.0-preview.136`，包含 **73 个提交**。
- 这是实验性 Preview 版本，并非稳定版；Windows Preview 二进制未签名，不建议用于生产环境。
- Preview 编号可能存在跳号。

---

## 社区热点 Issues

### 1. [Harness 的 Token 消耗过高](https://github.com/1jehuang/jcode/issues/2081)

社区认可 jcode Harness 的能力，但反馈其多模型 Token 消耗甚至高于 Codex 和 Claude。对 Agent 工具而言，调用上下文和执行轨迹直接决定运行成本，这可能显著限制高频及多 Agent 场景的采用，是当前最具产品影响力的反馈之一。

### 2. [SSH 下复制内容无法写入用户本地剪贴板](https://github.com/1jehuang/jcode/issues/2077)

macOS、Windows 客户端通过 SSH 使用 jcode 时，OSC 52 被短路，复制内容只进入服务器端剪贴板，无法粘贴到本地 Notepad 或浏览器。会话内复制粘贴虽可工作，但跨终端边界的基础体验明显缺失。

### 3. [自动记忆召回在用户新回合中从未触发](https://github.com/1jehuang/jcode/issues/2068)

在 v0.99.1 中，自动记忆召回没有向 Jev 发出任何请求，`delta_memory_injections=0`，而显式 Jev 召回可正常调用。问题直接影响长期上下文与个性化体验，需要进一步确认触发链路、回合识别和服务端调用条件。

### 4. [ACP 无法向客户端传递原生图片内容](https://github.com/1jehuang/jcode/issues/2088)

ACP 客户端要求 jcode 读取本地 PNG 时，只收到工具状态和文本，没有可展示的原生图片 payload；尽管 Agent 本身能够描述图片。这限制了 ACP 在图像理解、编辑器预览及多模态工作流中的集成能力。

### 5. [Anthropic 与 Copilot SSE 流在字符边界处损坏 UTF-8](https://github.com/1jehuang/jcode/issues/2087)

两个 Provider 仍按传输 chunk 独立调用 `String::from_utf8_lossy`。当多字节字符恰好被切断时，中文等文本会出现 `U+FFFD`；类似问题此前已在 OpenAI、OpenRouter 等路径修复，因此该问题具有明确的回归修复方向。

### 6. [Windows 每次密钥写入都会递归重设整个 Jcode Home 权限](https://github.com/1jehuang/jcode/issues/2061)

Windows 上保存 OAuth 凭据或刷新 Token 时，会同步遍历并重新设置整个 Home 目录的 ACL，造成明显卡顿。该问题同时涉及安全权限维护与交互性能，修复时还需避免破坏目录权限继承语义。

### 7. [浏览器 handoff 忽略指定的 Edge](https://github.com/1jehuang/jcode/issues/2071)

调用方明确指定 `browser="edge"`，但 scoped 输入丢失 browser 字段，最终操作落入自动检测的默认浏览器。该问题会破坏浏览器自动化隔离和可预测性，相关修复 PR 已进入关闭状态。

### 8. [命名 OpenAI-compatible Provider 不显示推理强度选项](https://github.com/1jehuang/jcode/issues/1688)

声明 `supports_reasoning_effort = true` 的命名 Provider 在运行时接受推理强度，但 TUI 的状态栏和 `/model` 选择器依赖名称推断，导致选项不显示。Provider 配置与 TUI 能力发现不一致，会阻碍自定义模型接入。

### 9. [Swarm 子 Agent 未继承正确的 `JCODE_HOME`](https://github.com/1jehuang/jcode/issues/2082)

从 Swarm 面板打开 Agent 时，新终端或复用终端没有继承请求客户端的 `JCODE_HOME` 等运行环境，因而查找了错误的 runtime/session。该问题会影响跨终端恢复会话、配置隔离及多实例部署。

### 10. [Windows 发布过程不断遗留旧 Launcher 副本](https://github.com/1jehuang/jcode/issues/2064)

每次 Windows 发布都会留下上一版 Launcher 可执行文件，单份约 139 MB，并持续累积。其根因涉及运行中程序的原子替换策略，除磁盘占用外，也会增加发布目录混乱和清理成本。

> 其他值得关注的问题包括：[本地原生记忆召回 Provider](https://github.com/1jehuang/jcode/issues/2069)、[Swarm 模型与推理强度路由策略](https://github.com/1jehuang/jcode/issues/2055)、[支持加载 CLAUDE.md](https://github.com/1jehuang/jcode/issues/2070) 及 [运行时记忆日志缺少字节/时间上限](https://github.com/1jehuang/jcode/issues/2079)。

---

## 重要 PR 进展

### 1. [PR #1709：TUI 概览折叠、memory effort 配置及运行时模型行](https://github.com/1jehuang/jcode/pull/1709)

新增 `agents.memory_effort` 与 `JCODE_MEMORY_EFFORT`，用于固定记忆提取 sidecar 的推理强度；同时改进 TUI 概览折叠和运行时模型展示。该 PR 将模型配置、记忆能力与界面呈现进一步整合。

### 2. [PR #1819：合并 Fork 贡献及上游评审修复](https://github.com/1jehuang/jcode/pull/1819)

将原先分散的 28 个重叠 PR 汇总为单一变更集，基于上游 `7fd42339` 推进，并整合评审修复。该工作有助于减少重复维护成本，加快上游集成与冲突处理。

### 3. [PR #1906：恢复 master 上的 fmt、clippy 与预算门禁](https://github.com/1jehuang/jcode/pull/1906)

针对当前 master 仍存在的质量门禁失败提供集中修复，包括 e2e 编译、断开连接契约、dead code、持久化分支及云错误处理等。目标是恢复代码格式、静态检查和仓库预算检查的持续集成稳定性。

### 4. [PR #2041：将 Agent 定义中的模型、effort 与工具作为操作者策略](https://github.com/1jehuang/jcode/pull/2041)

允许操作者通过 Agent 定义指定模型、推理强度和工具策略，并引入 `force_swarm_defaults`。它把 Agent 能力约束提升为可配置治理机制，但依赖 #2040 与 #2038。

### 5. [PR #2039：支持项目级 `.jcode/config.toml` Hooks](https://github.com/1jehuang/jcode/pull/2039)

在信任范围控制下读取项目级 hooks，扩展 Hooks 的项目配置能力，同时降低未经确认执行项目命令的安全风险。依赖 #2038 的共享信任机制。

### 6. [PR #2038：共享项目信任存储、MCP 命令门禁及 trust CLI](https://github.com/1jehuang/jcode/pull/2038)

引入按 scope 管理的项目信任摘要、MCP 命令执行门禁及 `jcode trust` 命令，为 hooks、MCP 和其他潜在项目级能力建立统一安全基础。该 PR 是多个 Agent 与 hooks 功能 PR 的关键依赖。

### 7. [PR #2085：新增 LLMTR OpenAI-compatible Provider](https://github.com/1jehuang/jcode/pull/2085)

内置 LLMTR Provider，使用 `LLMTR_API_KEY`，登录别名为 `llmtr.com`，默认模型提示为 `qwen/qwen3.8-27b-free`。请求继续走 Chat Completions，并保留 `llmtr/...` 命名空间模型 ID。

### 8. [PR #2033：调整 `.jcode/skills` 的加载优先级](https://github.com/1jehuang/jcode/pull/2033)

让同一 scope 内的 `.jcode/skills` 优先于 `.agents/skills` 和 `.claude/skills`，避免其他生态目录静默覆盖 jcode 专属技能。该 PR 已关闭，对应 Issue #2030 的修复方向得到明确。

### 9. [PR #2072：在 scoped browser handoff 中保留指定浏览器](https://github.com/1jehuang/jcode/pull/2072)

修复 scoped 输入复制时遗漏 `browser` 字段的问题，确保 handoff 的 observe、eval 和后续 action 始终作用于调用方指定的浏览器。该 PR 已关闭并对应 Issue #2071。

### 10. [PR #2060：格式化测试文件并刷新过期的预算 JSON](https://github.com/1jehuang/jcode/pull/2060)

修复 `commands_cloud_tests.rs` 的格式问题，并重新生成 code size、panic、swallowed error、test size 等预算文件，使门禁数据与当前源码一致。该 PR 已关闭，对应 Issue #2059 已解决。

---

## 功能需求趋势

### 1. 成本与效率优化

- [#2081](https://github.com/1jehuang/jcode/issues/2081) 明确指出 Harness 的 Token 消耗过高。
- 社区期待减少冗余上下文、无效工具调用和重复模型请求。
- 对多 Agent 与 Swarm 场景而言，Token 路由和执行预算将比单纯提升模型能力更重要。

### 2. ACP 协议与第三方客户端兼容

- [#2088](https://github.com/1jehuang/jcode/issues/2088) 涉及原生图片内容缺失。
- [#2075](https://github.com/1jehuang/jcode/issues/2075) 涉及工具更新碎片化及 `rawInput` 丢失。
- ACP 正在从文本消息兼容，转向工具调用、原生多模态和稳定状态协议等完整交互兼容。

### 3. 记忆系统与本地化

- [#2068](https://github.com/1jehuang/jcode/issues/2068) 聚焦自动记忆召回失效。
- [#2069](https://github.com/1jehuang/jcode/issues/2069) 要求完全本地、无远程决策服务的 recall provider。
- [#2079](https://github.com/1jehuang/jcode/issues/2079) 关注记忆日志的存储上限。
- 社区希望记忆能力既可靠、可扩展，也能满足隐私和成本控制需求。

### 4. 模型路由与推理强度控制

- [#2055](https://github.com/1jehuang/jcode/issues/2055) 提出由决策模型为 Swarm Worker 动态选择模型及推理强度。
- [#1688](https://github.com/1jehuang/jcode/issues/1688) 暴露自定义 Provider 的推理能力无法正确呈现在 TUI。
- 路由策略正从固定模型配置，转向按任务、Agent 和执行阶段动态决策。

### 5. Provider 扩展与开放模型接入

- [#2084](https://github.com/1jehuang/jcode/issues/2084) 请求将 LLMTR 做成内置 Provider。
- 自定义 OpenAI-compatible Provider 的配置、TUI 能力发现和登录流程仍需进一步标准化。

### 6. 项目指令、Hooks 与信任机制

- [#2070](https://github.com/1jehuang/jcode/issues/2070) 希望在没有 `AGENTS.md` 时加载 `CLAUDE.md`。
- PR [#2038](https://github.com/1jehuang/jcode/pull/2038)、[#2039](https://github.com/1jehuang/jcode/pull/2039) 集中建设项目级 hooks 与信任边界。
- 需求重点是兼容现有 AI 编程生态，同时确保项目代码不会未经确认被执行。

### 7. 跨平台与终端集成

- [#2077](https://github.com/1jehuang/jcode/issues/2077) 涉及 SSH 剪贴板。
- [#2064](https://github.com/1jehuang/jcode/issues/2064) 涉及 Windows 发布残留。
- [#2057](https://github.com/1jehuang/jcode/issues/2057) 提议通过 OSC 7501 上报 Agent 状态。
- Windows、SSH、多路复用器和外部终端应用仍是高频兼容场景。

---

## 开发者关注点

1. **Harness 的实际使用成本必须可控**  
   社区不只关注模型输出质量，也开始系统衡量上下文长度、工具调用频率及多模型协作带来的 Token 成本。

2. **协议实现需要避免“表面可用、细节失真”**  
   ACP 图片内容、`rawInput`、SSE UTF-8 解码和浏览器 scope 等问题表明，边界条件与协议完整性已成为高优先级。

3. **自动化行为必须建立在明确的信任边界上**  
   MCP、项目 hooks、Agent 工具策略和项目配置都在向更深层自动化发展，配套的授权、摘要和 CLI 管理因而更加重要。

4. **记忆能力需要更可靠、隐私友好且可观测**  
   用户不仅要求自动召回真正触发，还提出完全本地 recall、推理强度固定、日志限额等具体诉求。

5. **Windows 体验与发布流程仍需加固**  
   凭据写入阻塞、Launcher 文件累积等问题，直接影响 OAuth 登录、构建效率和磁盘管理。

6. **CI 质量门禁需要保持可信**  
   格式、预算 JSON、e2e 编译和断连契约的连续问题表明，测试辅助代码和协议变更后的契约同步需要进一步加强。

7. **生态兼容不能只停留在读取配置**  
   CLAUDE.md、Claude skills、浏览器 handoff 和第三方 Provider 都需要端到端验证，确保配置被正确识别、呈现并实际生效。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-07

## 今日速览

过去 24 小时无新版本发布，Pi 社区主要围绕 1.5.0 版本的稳定性与兼容性展开：集中修复流式输出、工具调用、图片渲染、编辑工具和 Windows 生命周期等问题。模型目录与 SDK 扩展能力仍是高频需求，包括 GPT-6.1 Sol 上下文窗口识别、模型供应商接入、身份提示词定制及长期会话上下文管理。

## 社区热点 Issues

1. **ChatGPT 登录下 GPT-6.1 Sol 上下文窗口仍显示 272K，而非账户目录中的 500K**  
   上下文窗口识别错误会直接压缩可用上下文和自动压缩预算，影响长会话质量与成本。该问题获得 **7 个点赞、8 条评论**，是今日最受关注且仍开放的 Issue。  
   [#11021](https://github.com/earendil-works/pi/issues/11021)

2. **屏幕阅读器兼容性与高频重绘**  
   流式响应期间，工作状态和上下文状态栏频繁刷新，可能干扰屏幕阅读器用户。Issue 已关闭，但反映无障碍支持仍是 Pi TUI 的重要质量指标。  
   [#1188](https://github.com/earendil-works/pi/issues/1188)

3. **强制系统提示词与工具集合变更顺序冲突**  
   `before_agent_start` 强制设置系统提示词时，被其他处理器通过 `setActiveTools()` 移除的工具仍可能暴露给模型，造成提示词与实际工具能力不一致。  
   [#9932](https://github.com/earendil-works/pi/issues/9932)

4. **SDK 用户希望仅定制身份前缀，不替换默认提示词段落**  
   当前 `customPrompt` 会连同默认工具、规则和文档一起移除，SDK 用户不得不自行重建完整提示词。社区提出了按 section 定制 preamble 的明确需求。  
   [#11317](https://github.com/earendil-works/pi/issues/11317)

5. **Codemode 的 `allSettled` 丢失嵌套 Error 信息**  
   工具调用失败在 VM 中保留为 Error，但序列化时丢失非枚举的 `name` 和 `message`，最终只显示 `reason: {}`，降低错误诊断效率。  
   [#10650](https://github.com/earendil-works/pi/issues/10650)

6. **临时文件流写入异常导致整个 Pi 进程崩溃**  
   `/tmp` 空间耗尽或权限不足时，bash 临时文件流会抛出未捕获异常，任务记录和当前运行都可能丢失。该问题仍未解决。  
   [#10585](https://github.com/earendil-works/pi/issues/10585)

7. **`Harness.close()` 未释放 provider session 资源**  
   SDK Harness 关闭后，pi-ai 的 WebSocket 和空闲定时器仍可能存活，导致独立 Node 进程无法退出。Issue 已标记处理中，体现资源生命周期管理的重要性。  
   [#11676](https://github.com/earendil-works/pi/issues/11676)

8. **Pi 1.5.0 的 `StringEnum` 破坏工具参数编译期类型**  
   `registerTool` 的参数类型依赖旧版 TypeBox 模式，新版 `StringEnum` 改动后，字段静态类型退化为 `unknown`，可能影响扩展开发者的类型检查。  
   [#11869](https://github.com/earendil-works/pi/issues/11869)

9. **长时运行的嵌入式 Agent 缺少上下文管理指南**  
   社区希望获得面向多模态、工具密集型长会话的官方扩展模式和示例。该 Issue 已关闭但标记为 no-action，说明需求尚未被正式覆盖。  
   [#11863](https://github.com/earendil-works/pi/issues/11863)

10. **模型目录与供应商能力更新频繁**  
    社区持续请求补充 Wally、DeepSeek V4.1 Flash、Kimi K3.1、GLM-5.3 FlashX，以及 Kimi 视频输入支持。相关 Issue 多被标记为 no-action，反映“快速接入新模型”仍是高频诉求。  
    [#11903](https://github.com/earendil-works/pi/issues/11903) · [#11877](https://github.com/earendil-works/pi/issues/11877) · [#11883](https://github.com/earendil-works/pi/issues/11883) · [#11884](https://github.com/earendil-works/pi/issues/11884)

## 重要 PR 进展

1. **防止本地文件或会话读取中止时出现未捕获 `AbortError`**  
   对 `read` 工具打开、stat 文件期间的取消操作进行兜底，避免 Codemode 未等待调用导致 Pi 直接退出。  
   [#11906](https://github.com/earendil-works/pi/pull/11906)

2. **支持定制系统提示词 preamble，同时保留默认段落**  
   SDK 用户可替换身份或人格描述，不必移除 Pi 默认的工具说明、规则与文档内容。  
   [#11904](https://github.com/earendil-works/pi/pull/11904)

3. **修复 grep glob 相对于 `path` 匹配**  
   原先 glob 固定相对于进程 cwd；修复后，`path` 与 glob 路径可正确组合，适用于子目录和仓库级搜索。  
   [#11895](https://github.com/earendil-works/pi/pull/11895)

4. **图片缩放 Worker 退出竞态修复**  
   等待图像 resize worker 完全终止，避免连续读取图片时 macOS arm64 / Node 24 下发生进程中止。  
   [#11896](https://github.com/earendil-works/pi/pull/11896)

5. **编辑工具保留未修改行的换行符**  
   修复混合 CRLF/LF 文件中只改一行却重写整文件换行格式的问题，降低无意义 diff 和意外变更风险。  
   [#11751](https://github.com/earendil-works/pi/pull/11751)

6. **拒绝编辑非 UTF-8 文件**  
   防止 UTF-16、Windows-1252、GBK 等文件在 UTF-8 解码后产生替换字符并被静默覆盖。当前 PR 仍开放。  
   [#11894](https://github.com/earendil-works/pi/pull/11894)

7. **通过 `thinkingLevelMap` 转换 `reasoning_effort`**  
   修复配置中的推理强度绕过模型映射、直接发送给上游的问题，避免使用服务不支持的档位。  
   [#11893](https://github.com/earendil-works/pi/pull/11893)

8. **OpenAI Completions 兼容层不再发送空 `tools` 数组**  
   避免 LiteLLM/vLLM 对 `tools: []` 返回 400，兼容“历史中存在工具调用，但当前没有可用工具”的请求。  
   [#11891](https://github.com/earendil-works/pi/pull/11891)

9. **修复 OpenAI 兼容流中重复 tool-call index 的参数串接**  
   当服务端错误复用 stream index 时，依据 tool-call ID 拆分调用块，避免两段 JSON 参数被静默拼接。  
   [#11882](https://github.com/earendil-works/pi/pull/11882)

10. **Windows 控制台关闭时执行 Pi 清理逻辑**  
    补齐 Windows 生命周期处理，避免控制台关闭后进程残留或会话资源未释放。当前 PR 仍开放。  
    [#11889](https://github.com/earendil-works/pi/pull/11889)

## 功能需求趋势

- **模型与供应商覆盖**：社区希望快速支持 GPT-6.1 Sol 正确上下文识别，以及 Wally、Kimi、QwenCloud、Z.AI 等最新模型和供应商。
- **SDK 可编程性**：需求集中在定制身份提示词、局部替换系统提示词、长期会话管理，以及更清晰的 Agent Harness API。
- **TUI 与多终端兼容**：关注屏幕阅读器、全屏图片、Orca/WezTerm 渲染、流式期间工具输出展开，以及 stderr 对界面的破坏。
- **Provider 协议健壮性**：OpenAI 兼容接口的 tool-call 流、空工具数组、重复 index、推理强度映射和断流重试是重点。
- **文件工具安全性**：关注编码保护、混合换行符保留、grep 路径语义，以及避免 Shell 命令绕过 read/edit 工具。
- **资源与稳定性**：包括 Worker 生命周期、provider session 释放、临时文件异常、Windows 退出清理和 AbortError 防护。
- **Codemode 安全性与可观测性**：关注重复工具调用防护、Error 信息保留、数值序列化，以及本地变量和工具名称冲突。

## 开发者关注点

- **长会话不能浪费上下文**：上下文窗口识别错误会压缩有效预算，开发者期待 Pi 动态采用服务端账户目录中的真实容量。
- **扩展开发必须保持类型安全**：`StringEnum` 改动导致工具参数类型退化，SDK 升级需要避免破坏现有 TypeScript 扩展。
- **编辑工具不能造成静默数据损坏**：混合换行符和非 UTF-8 文件是近期高频问题，社区希望工具在无法安全保真时明确拒绝操作。
- **Provider 差异必须被兼容层吸收**：LiteLLM、vLLM、Magpie 等网关存在参数和流式协议差异，Pi 需要更稳健地归一化请求并识别可重试错误。
- **长时嵌入式 Agent 必须可预测地退出**：Harness、provider session、WebSocket、Worker 和临时文件都应纳入统一的清理与错误处理机制。
- **TUI 需要兼顾可访问性与终端差异**：高频刷新、Kitty 图片和流式输出布局在屏幕阅读器及不同终端上的兼容性仍需持续完善。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
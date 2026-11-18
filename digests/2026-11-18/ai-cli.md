# AI CLI 工具社区动态日报 2026-11-18

> 生成时间: 2026-11-18 06:49 UTC | 覆盖工具: 8 个

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
**数据日期：2026-11-18**

> 说明：原始摘要未提供所有仓库统一的 Issues/PR 总数，因此下表优先采用摘要中明确披露的量化指标；未披露项以“未汇总”标注，避免将精选热点数量误作全量数据。

---

## 1. 生态全景

AI CLI 正从“命令行对话工具”加速演进为覆盖 **本地开发、桌面端、远程执行、MCP 扩展、多 Agent 编排和会话治理**的完整 Agent 平台。当前社区主线不是单纯增加模型能力，而是提升 **跨平台一致性、权限可预测性、长任务可靠性和状态可观测性**。MCP 已成为共同基础设施，但各工具在 Prompts、插件生命周期、身份隔离、工具发现和协议兼容性上仍存在明显差异。与此同时，Windows、PowerShell、沙箱、数据库和会话恢复等工程性问题，已经成为影响实际生产可用性的主要阻碍。Claude Code、Codex、OpenCode 和 Copilot CLI 今日均有版本发布，Gemini CLI、jcode 和 pi 则更多处于密集修复与能力收敛阶段。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 未汇总；精选热点 **10 项**，其中多账号 Issue **313 评论/481 赞** | **0 个更新** | **v2.1.327**：GitHub App 确认、MCP JSON 经 stdin 导入、会话恢复提示 | 热度很高，但当日主要是 Issue 反馈与版本发布 |
| **OpenAI Codex** | 未汇总；精选热点 **10+ 项**，最高 **57 评论** | 至少 **10 项重要 PR**，均标记 CLOSED，是否合并不确定 | **rust-v0.170.0**；另有 alpha/维护版 | 修复密度高，围绕沙箱、会话、Work/Cloud、Computer Use 快速迭代 |
| **Gemini CLI** | 未汇总；精选热点 **10 项** | 至少 **10 项重要 PR** | **无新版本** | 活跃度较高，主要通过密集 PR 修复 Agent、配置、Windows 与 MCP 问题 |
| **GitHub Copilot CLI** | **33 个更新 Issue**；精选热点 **10 项** | **0 个更新** | **v1.0.114**，仅标注 “Fixes and changes” | Issue 活跃度高，但插件升级回归形成集中风险 |
| **Kimi Code CLI** | 未汇总 | 未汇总 | **无活动** | 本期最弱，缺少可观察的社区与发布信号 |
| **OpenCode** | 未汇总；精选热点 **10 项**，最高 **390 评论/29 赞** | 至少 **10 项重要 PR** | **v2.3.2**、**v2.3.1**、Desktop **v1.19.6** | 发布和开发都很活跃，V1→V2 迁移与数据库问题突出 |
| **jcode** | 未汇总；精选热点 **10 项** | 至少 **10 项重要 PR** | **无新版本** | 高频开发状态，但存在 `master` 无法编译等治理问题 |
| **pi** | 未汇总；精选热点 **10 项**，Windows 征集帖达 **97 评论** | **8 个更新 PR** | **无新版本** | 社区讨论稳定，集中在 Windows、会话一致性和 Provider 生态 |

### 活跃度分层

- **第一梯队：Codex、OpenCode**  
  版本、PR、Issue 三线并行，功能推进和工程修复同时展开。
- **第二梯队：Gemini CLI、jcode、pi**  
  社区与开发活跃，但今日没有正式发布；更偏“修复密集型迭代”。
- **问题暴露型活跃：Claude Code、Copilot CLI**  
  用户需求和缺陷反馈显著，尤其集中在账号管理、插件兼容和跨端体验。
- **低可观测活跃：Kimi Code CLI**  
  今日无活动，无法判断是项目平静、节奏放缓还是信息不足。

---

## 3. 共同关注的功能方向

### 3.1 会话可靠性与恢复一致性

这是跨工具最集中的共同需求。

- **Codex**
  - 修复恢复 `codex exec` 时沙箱权限被默认配置覆盖。
  - 处理恢复会话自动压缩异常、重复加载上下文以及额度消耗过高。
  - 通过 checkpoint、turn/response checkpoint 和 rollout budget 控制长任务成本。
- **Claude Code**
  - 约 20 万 Token 以上请求出现 `ECONNRESET`，`/compact` 也可能挂起。
  - Resume 需要保留系统消息，避免破坏 Prompt Cache。
- **Gemini CLI**
  - 修复 ACP 压缩会话重载后引用已移除模型消息导致的 400 错误。
  - 社区要求持久化任务系统，以支持跨会话恢复。
- **Copilot CLI**
  - 恢复会话时未重新应用自定义 Agent 的 MCP 配置和工具白名单。
  - Fusion 在上下文切换和 Judge 验证中误判任务状态。
- **OpenCode**
  - Desktop 冷重启后会话标签页丢失。
  - V1→V2 升级过程中的会话、项目和设置迁移异常频繁。
- **pi**
  - 截断会话恢复后内置工具全部消失。
  - 多实例同时打开会话会产生错误分支。
  - 压缩期间继续发送消息可能基于旧分支运行。
- **jcode**
  - 会话导出、会话来源识别以及 Provider/协议路由准确性受到关注。

**共同诉求：** 恢复后必须保持 **上下文、工具、权限、插件、模型路由和任务状态完全一致**，不能只恢复聊天文本。

---

### 3.2 MCP 从“能接入”走向“完整治理”

所有活跃工具都在扩展 MCP，但关注点不同。

- **Codex**
  - 长期请求支持 MCP Prompts，Issue **#5059 获 56 赞**。
  - 实验支持不同环境使用同名 MCP Server。
  - 插件 `mcp.json` 因 `extensions` 字段被拒，导致服务未注册。
- **Copilot CLI**
  - 重复发现 MCP namespace 时错误显示 “Found 0 tools”，可能让 Agent 跳过必要工具。
  - 要求稳定 turn ID、OAuth 回调覆盖和非交互 Sampling 权限策略。
- **Claude Code**
  - v2.1.327 支持从 stdin 添加 MCP Server，降低令牌暴露风险。
  - Gmail MCP URL 跟踪参数引发隐私和第三方数据治理争议。
- **Gemini CLI**
  - 修复环境变量中 `=` 和空值解析错误。
  - 跟进新版 MCP 协议中的发现、`_meta` 等机制。
- **jcode**
  - 现有客户端无法连接采用 **2026-07-28 新规范**的 MCP Server。
- **OpenCode**
  - 重点转向插件安装、缓存生命周期和 Code Mode 扩展。
- **pi**
  - 侧重扩展 API、压缩生命周期、工具不存在时明确返回错误。

**共同诉求：** MCP 生态下一阶段的核心不是“再接一个 Server”，而是解决 **身份隔离、Prompt/Tool 完整性、重复发现、权限边界、配置兼容和可观测性**。

---

### 3.3 多 Agent、子 Agent 与执行过程可视化

- **Codex**
  - 支持从活动链接直接打开 Subagent transcript。
  - 修复委派任务未继承用户显式授权的问题。
  - Agent Command Center 增加按任务组导航。
- **Gemini CLI**
  - Subagent 达到 `MAX_TURNS` 后仍被报告为 `success/GOAL`。
  - Generalist Agent 偶发无限挂起。
  - Subagent 轨迹难以通过 `/chat share` 查看。
- **OpenCode**
  - 社区要求恢复前台 Subagent 执行。
  - Work Steps 支持折叠、可见性策略和状态持久化。
- **pi**
  - 压缩、并发写入和会话分支问题直接影响扩展与多进程 Agent 协作。
- **Copilot CLI**
  - Fusion Judge 对已完成操作仍可能拒绝，任务证据链不可靠。
- **Claude Code**
  - 插件 UI、Remote Control 和跨端审批尚未形成一致契约。

**共同诉求：** Agent 必须具备 **可信的完成状态、完整 transcript、权限继承、任务分组和可恢复执行**，否则多 Agent 只会放大排障难度和成本。

---

### 3.4 Windows 与跨平台一致性

Windows 是今日最集中的兼容性痛点。

- **Codex**
  - Computer Use 截图结束后仍保留捕获权限与黄色边框。
  - Windows Work 无法发送消息、无法找到本地会话。
  - 多行 PowerShell 粘贴顺序颠倒。
- **Copilot CLI**
  - Cortex XDR 因 `parent_process_spoofing` 检测终止 Git 父进程。
  - Windows Computer Use、作用域指令、无盘符卷均存在问题。
- **Gemini CLI**
  - PowerShell AST 解析阻塞 UI；已有 PR 将解析移出主线程。
  - Browser Agent 在 Wayland 下失败。
- **OpenCode**
  - Windows Store PowerShell 在 Pipe 模式下无法启动。
  - cmd/PowerShell 引号和 argv 传递错误。
- **jcode**
  - Windows 西里尔键盘布局下 Ctrl 快捷键全部失效。
  - 多行粘贴逐行提交、kitty 键盘协议不匹配。
- **pi**
  - Windows 使用体验征集帖获 **97 条评论**。
  - 终端恢复、npm 安装、路径和 Shell 差异集中暴露。
- **Claude Code**
  - Windows Desktop 自动更新强制重启。
  - NTFS 内存泄漏报告称可能以约 **230 MB/分钟**消耗不可分页池。

**共同诉求：** 开发者需要的是可预测的 **进程模型、Shell 参数传递、终端输入解码、更新策略和权限状态**，而不是仅保证“功能在某平台可用”。

---

### 3.5 权限、安全与人工审批

- **Codex** 修复恢复执行时 `:read-only` 被覆盖为 `:workspace` 写权限。
- **Gemini CLI** 要求对 `git reset`、强制覆盖和数据库操作采取更保守默认值。
- **Claude Code** 强调敏感 MCP 配置不应出现在命令行历史中。
- **Copilot CLI** 关注恢复会话后工具白名单丢失、企业沙箱策略和 Computer Use 策略。
- **pi** 修复自定义 Agent 未继承人工授权、未知工具静默挂起等问题。

**共同诉求：** 权限必须绑定到 **会话、Agent、工具、目录和恢复操作**，并可被审计；不能只依赖当前进程默认值。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与差异化 |
|---|---|---|---|
| **Claude Code** | 终端 Agent、GitHub 工作流、插件、Remote Control、跨端会话 | Anthropic 生态用户、开发者及团队 | 强调插件 API、MCP 安全、跨端 Remote Control 和多账号；当前短板是身份管理与桌面端稳定性 |
| **OpenAI Codex** | 本地/Cloud/Work Agent、沙箱、长任务、多 Agent、Computer Use | 复杂工程任务、OpenAI 生态、远程与桌面用户 | Rust 核心、多执行环境、细粒度沙箱和 checkpoint；能力完整度最高，但环境路由与跨平台一致性压力大 |
| **Gemini CLI** | Agent/Subagent、代码库理解、Shell、Browser Agent、IDE Companion | Gemini 用户、代码库分析、自动化开发者 | 强调 Skills、Subagents、浏览器代理和 IDE 集成；当前重点是运行状态可信度与配置传递 |
| **GitHub Copilot CLI** | GitHub 仓库协作、插件/Marketplace、作用域指令、Agent 与 Fusion | GitHub/企业开发团队 | 深绑 GitHub 工作流、AGENTS.md 与企业策略；插件生态和会话恢复兼容性是近期主要风险 |
| **OpenCode** | 多 Provider、桌面/TUI/Web、插件、Code Mode、多 Agent | 多模型用户、重视 Provider 自由和自托管的开发者 | Provider 兼容和开放扩展较强，Code Mode 逐步支持 Rust 嵌入；短板是 V2 迁移和数据库稳定性 |
| **jcode** | TUI 交互、Provider 适配、桌面代理集成、会话导出 | 重度 TUI 用户、多 Provider 用户 | Rust 终端体验、Herdr 状态协议、OpenAI-compatible 配置；处于高频开发但收敛治理不足的阶段 |
| **pi** | 轻量 Agent 核心、Provider 扩展、扩展 API、Code Mode | 嵌入式开发者、扩展作者、自托管用户 | 小型 Agent 核心与高扩展性，强调 skills、compaction、Provider 接入；Windows 和会话并发仍较脆弱 |
| **Kimi Code CLI** | 当前公开信号不足 | 暂难判断 | 今日无活动，需结合后续版本、Issue 与发布节奏重新评估 |

### 定位差异总结

- **最重视企业工程闭环：Codex、Copilot CLI**
  - Codex 偏执行环境、沙箱和长任务生命周期。
  - Copilot CLI 偏 GitHub 仓库规则、插件和企业策略。
- **最重视多 Provider 与开放扩展：OpenCode、pi、jcode**
  - OpenCode 生态面最广，但迁移与数据库负担较重。
  - pi 更轻量、适合嵌入，但并发和终端稳定性仍需加强。
  - jcode 的 TUI 体验突出，但当前 PR 积压与 CI 基线风险较高。
- **最重视插件与跨端生态：Claude Code、Copilot CLI**
  - Claude Code 的差异化在 Remote Control、插件 UI 与 MCP 安全。
  - Copilot CLI 的差异化在 GitHub 规则、Marketplace 和企业治理。
- **最重视代码库智能与浏览器代理：Gemini CLI**
  - Skills、Subagents、Browser Agent 和 IDE Companion 构成差异化组合。
  - 但 Agent 状态和配置继承仍需加强。

---

## 5. 社区热度与成熟度

### 社区热度

1. **Claude Code**
   - 多账号 Issue **313 评论/481 赞**，是全部材料中最突出的单一议题。
   - 表明账号切换已是高频真实工作流阻塞点。
2. **OpenCode**
   - 免费额度统一反馈 Issue **390 评论/29 赞**。
   - 插件兼容、前台 Subagent、数据库与 Desktop 迁移同步升温。
3. **Copilot CLI**
   - 明确披露 **33 个 Issue 更新**。
   - 多个新插件回归 Issue 虽评论较少，但技术影响集中。
4. **Gemini CLI**
   - Subagent 成功状态失真、无限挂起和 Browser Agent 问题获得明确关注。
5. **jcode**
   - 同一 Windows 快捷键问题出现多个重复 Issue，说明兼容缺口稳定且广泛。
6. **pi**
   - Windows 征集帖 **97 评论**，会话一致性问题中已有多项关闭并进入修复。
7. **Codex**
   - 热度不主要来自评论数，而来自问题覆盖面和 PR 密度，反映其已进入系统性工程治理阶段。
8. **Kimi Code CLI**
   - 今日无可用活跃度信号。

### 成熟度判断

- **成熟度最高：Codex**
  - 已具备沙箱、Cloud/Work、Computer Use、Subagent、checkpoint、预算策略等完整体系。
  - 风险主要来自系统复杂度和跨平台一致性，而不是能力缺失。
- **较成熟但生态迁移承压：Claude Code、Copilot CLI**
  - 两者都有丰富扩展，但升级兼容、插件生命周期和会话恢复仍是信任风险。
- **快速迭代期：OpenCode**
  - 发布频繁、功能扩张快，但 V1→V2 迁移和 SQLite 稳定性表明核心架构仍在收敛。
- **快速修复与重构期：Gemini CLI、jcode、pi**
  - Gemini CLI 功能面扩张快，但 Agent 状态语义尚未稳定。
  - jcode PR 密度很高，但 `master` 构建失败和重复 Issue 说明治理滞后于开发速度。
  - pi 核心架构相对轻量，但会话并发、Windows 和扩展 API 仍处成熟度爬坡期。
- **信号不足：Kimi Code CLI**
  - 单日无活动不足以判断整体成熟度，但相较其他工具明显缺少可见度。

---

## 6. 值得关注的趋势信号

### 趋势一：AI CLI 的竞争焦点转向“执行可靠性”，而非模型数量

Codex 的沙箱恢复、Claude Code 的长上下文断连、OpenCode 的数据库膨胀、Gemini 的 Agent 假成功、pi 的会话分支错误，都指向同一事实：

> 模型能调用工具已不再是主要门槛，稳定完成长任务才是下一阶段产品差距。

**开发者参考价值：** 选型时应重点考察 checkpoint、恢复语义、预算控制、权限继承和失败可解释性，而不仅是模型列表与基准成绩。

---

### 趋势二：会话将成为 Agent 系统的核心状态容器

会话不再只是聊天记录，而是同时承载：

- 上下文与 Prompt Cache；
- 工具和 MCP 配置；
- 沙箱与人工审批状态；
- Subagent 任务树；
- Agent 与 Provider 路由；
- 工作步骤与完成状态。

**开发者参考价值：** 评估 CLI 时应进行“异常中断—重启—恢复—继续执行”测试，而不只测试正常对话。恢复后权限扩大、工具丢失或分支错乱，属于安全与正确性双重缺陷。

---

### 趋势三：MCP 已进入“规范兼容与生命周期治理”阶段

多个工具同时出现 MCP Prompts、同名 Server 隔离、重复发现、插件 `mcp.json`、新版规范和环境变量解析问题。

**开发者参考价值：**

- 不要只做工具调用冒烟测试；
- 需覆盖 Server 重发现、重复加载、热重载、OAuth、非交互模式和同名隔离；
- 第三方 MCP Server 的 URL 改写、跟踪参数和数据外传也应进入供应商审查清单。

---

### 趋势四：Windows 是当前 AI CLI 的共同质量洼地

PowerShell、Windows 商店版、ConPTY、kitty 协议、Cortex XDR、Computer Use、文件监控和自动更新等问题反复出现。

**开发者参考价值：**

- 企业落地不能只测试 macOS/Linux；
- Windows 回归矩阵至少应包含 PowerShell 5/7、CMD、ConPTY、商店版安装、非拉丁键盘布局、MDM 和企业 EDR；
- Shell 与 Desktop 功能需要统一的进程生命周期设计。

---

### 趋势五：多 Agent 的真正难点是“控制面”，不是并行执行

主流工具都在增加 Subagent，但状态失真、授权丢失、transcript 不可见、Judge 误判和后台任务不可控说明，多 Agent 需要类似 IDE 控制台的能力：

- 任务树与分组；
- 子 Agent transcript；
- 审批与权限继承；
- checkpoint 和预算；
- 取消、重试与恢复；
- 成功/失败可信判定。

**开发者参考价值：** 生产级多 Agent 系统应把 Agent 运行记录当作一等数据，而不是临时日志。

---

### 趋势六：插件生态的兼容性问题可能比核心功能更伤用户

Claude Code 关注插件 UI 跨端不一致，Copilot CLI 出现 SDK 重命名、热重载失败和重复启动，OpenCode 出现 npm/Git 插件安装与缓存问题，Gemini CLI 出现 Skills 已配置却不被调用。

**开发者参考价值：**

- 插件 API 需要稳定版本号、弃用周期和兼容别名；
- 发布说明必须包含破坏性迁移指南；
- 插件安装、热重载和升级应纳入产品发布的强制测试矩阵。

---

### 趋势七：缓存与上下文计量正成为成本治理的一部分

OpenCode 修复 GPT-6.2 Responses API 缓存，Codex 引入 rollout budget，pi 修复缓存统计归零，Claude Code 关注 Resume 后缓存保留，jcode 修复 Bedrock 缓存计量。

**开发者参考价值：**

- 仅报告总 Token 已不足以评估成本；
- 应区分未缓存输入、缓存写入、缓存读取、推理 Token 和压缩 Token；
- 修改 thinking level、Provider、系统提示词位置或请求协议，都可能破坏缓存前缀。

---

### 趋势八：可诊断性正在成为功能本身

Codex 区分 sandbox timeout 与 pipe closure，jcode 透传 `response.failed` 错误，Claude Code 增加会话恢复提示，Copilot CLI 暴露策略错误，pi 关注退出码与错误事件一致性。

**开发者参考价值：** CI 和自动化集成应使用结构化错误码、可区分的退出状态和上游原始错误上下文，而不是统一映射为模糊失败。

---

## 技术决策建议

### 若优先考虑企业工程与复杂 Agent 执行
- **首选观察：OpenAI Codex**
- 重点验证 Windows 沙箱、Cloud/Work 路由、长任务续跑和 Subagent 权限继承。

### 若优先考虑 GitHub 仓库协作与企业策略
- **首选观察：GitHub Copilot CLI**
- 但应等待插件 SDK 重命名、热重载和作用域指令问题完成回归验证。

### 若优先考虑多 Provider、开放扩展和自托管
- **首选观察：OpenCode**
- 重点验证 V1→V2 迁移、数据库维护策略、插件安装和 Desktop 会话恢复。

### 若优先考虑终端交互和多 Provider 轻量体验
- **关注：pi、jcode**
- pi 适合更轻量的嵌入和扩展实验；jcode 功能丰富，但应等待 master/CI 基线和 PR 收敛改善。

### 若优先考虑 Anthropic 生态、插件与跨端体验
- **关注：Claude Code**
- 账号体系、Remote Control 和桌面端权限稳定性将决定其大规模团队采用速度。

### 若优先考虑代码库智能、Skills 和 Browser Agent
- **关注：Gemini CLI**
- 重点等待 Agent 状态语义、配置继承和跨平台 Browser Agent 稳定后再进入关键生产流程。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 **2026-11-18**。  
> 说明：榜单依据提供的 PR 排序与讨论信号整理；PR 条目未提供有效评论数，因此以下 PR 均标注为 **Open**，并结合功能覆盖面、Issue 关联度及维护活跃度判断潜力。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区热点 | 当前状态 |
|---|---|---|---|
| 1 | [mcp-builder](https://github.com/anthropics/skills/pull/1742) | 为 MCP 项目生成、调试和连接 MCP 服务。本 PR 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名，并支持自定义 HTTP Headers，修复新版 SDK 兼容问题。直接对应 [Issue #1668](https://github.com/anthropics/skills/issues/1668)，反映 MCP 集成是高频真实需求。 | **Open** |
| 2 | [skill-creator](https://github.com/anthropics/skills/pull/1298) | 创建和维护自定义 Skill 的核心工具。本 PR 修复并行触发评测相互干扰、Windows `select()` 失败及运行异常被误判为“非触发”等问题；另有[打包脚本修复](https://github.com/anthropics/skills/pull/1681)和[YAML frontmatter 解析修复](https://github.com/anthropics/skills/pull/1997)。社区关注点集中在评测可靠性和 Skill 打包体验。 | **Open** |
| 3 | [webapp-testing](https://github.com/anthropics/skills/pull/1980) | 自动启动 Web 应用并执行浏览器端测试。本 PR 移除 `with_server.py` 中未经清洗的 `shell=True` 命令执行，降低命令注入风险。相关修复还包括[正确识别 textarea/select](https://github.com/anthropics/skills/pull/1976)。安全、真实浏览器验证和跨平台可靠性是主要热点。 | **Open** |
| 4 | [docx](https://github.com/anthropics/skills/pull/1792) | 创建、编辑和验证 Word 文档。本 PR 将 LibreOffice 超时从“成功”改为错误，并在成功前验证 DOCX 中是否仍有修订标记。另有[孤立批注检测](https://github.com/anthropics/skills/pull/1734)和[合并 run 后命名空间丢失](https://github.com/anthropics/skills/pull/2018)修复。社区尤其关注输出验证，而非仅“文件已生成”。 | **Open** |
| 5 | [xlsx](https://github.com/anthropics/skills/pull/2019) | 创建、分析和重算 Excel 工作簿。本 PR 修复外部链接风险检测漏掉工作表级 defined names、别名及间接引用的问题，对应 [Issue #2013](https://github.com/anthropics/skills/issues/2013)。热度来自财务模型、公式审计和供应链风险检测场景。 | **Open** |
| 6 | [claude-api](https://github.com/anthropics/skills/pull/1730) | 提供 Claude API、工具调用和 Claude Academy 使用指导。本 PR 替换失效文档链接；另有[更新 Python `pause_turn` 续跑指南](https://github.com/anthropics/skills/pull/1950)。但社区同时暴露该 Skill 上下文注入过大的[问题 #1487](https://github.com/anthropics/skills/issues/1487)，其上下文成本是重要争议点。 | **Open** |
| 7 | [Notion Spec to Implementation + Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245) | 前者把产品或技术规格拆解为可执行的 Notion 任务、验收标准和进度追踪；后者对量化简历进行事实与证据审计。代表“规格落地”和“专业文档审核”两个高价值垂直方向。 | **Open** |
| 8 | [md2video-audio](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 转换为带演示幻灯片和逼真人声旁白的 MP4，强调零额外费用。体现社区对低成本内容再包装、视频生成和知识产品自动化的强烈兴趣。 | **Open** |

补充关注的新增方向包括：

- [Pyxel：Python 复古游戏开发](https://github.com/anthropics/skills/pull/525)，覆盖无头运行、输入驱动测试与逐帧验证。
- [SCNet HPC：高性能计算集群操作](https://github.com/anthropics/skills/pull/1615)，面向 SSH、Slurm、GPU 作业和集群运维。
- [ProofCore Contract Auditor：智能合约审计与存证](https://github.com/anthropics/skills/pull/1771)，面向 Solidity/Rust 审计及 TON 链上证明。

## 2. 社区需求趋势

### 1. 企业级 Skill 分发与组织协作

[Issue #228](https://github.com/anthropics/skills/issues/228) 请求在 Claude.ai 中支持组织级共享、共享链接和企业 Skill 库。目前仍需通过 Slack/Teams 传 `.skill` 文件并手工导入，明显不满足团队规模化使用。

相关问题还包括：

- 社区 Skill 冒用官方命名空间导致的信任边界风险：[Issue #492](https://github.com/anthropics/skills/issues/492)
- 重复安装不同插件导致相同 Skill 重复占用上下文：[Issue #189](https://github.com/anthropics/skills/issues/189)
- Skill 同步、快照和本地副本关系不清晰：[PR #2108](https://github.com/anthropics/skills/pull/2108)

**趋势判断：**社区期待从“个人安装 Skill”升级到“可发现、可验证、可审计的企业分发体系”。

### 2. Skill 质量评测与可观测性

[Issue #556](https://github.com/anthropics/skills/issues/556) 指出 `run_eval.py` 触发率长期为 0%；[Issue #1352](https://github.com/anthropics/skills/issues/1352) 进一步发现并行 worker 会串扰 UUID，制造系统性假阴性。

这说明社区不仅需要“生成 Skill”，还需要：

- 可靠的正负样本触发评测；
- 并行与跨平台隔离；
- 真实运行结果与负例的区分；
- 可复现的优化指标。

[PR #1298](https://github.com/anthropics/skills/pull/1298)、[PR #1997](https://github.com/anthropics/skills/pull/1997) 正是在补齐这一层。

### 3. 代理质量门禁与治理

[Issue #1385](https://github.com/anthropics/skills/issues/1385) 提出“任务前校准 → 对抗式审查 → 交付前验证”的三阶段质量门禁；[Issue #412](https://github.com/anthropics/skills/issues/412) 提议 `agent-governance` Skill，覆盖策略执行、威胁检测、信任评分和审计轨迹。

**趋势判断：**社区希望把“智能体自检”产品化，而不是只依赖提示词中的“请仔细检查”。

### 4. 文档与办公自动化的端到端交付

文档类需求依然旺盛：

- [文档排版质量控制](https://github.com/anthropics/skills/pull/514)：处理孤行、寡行和编号错位；
- [规格到实现任务](https://github.com/anthropics/skills/pull/1245)：把需求自动转成实施计划；
- [量化简历审计](https://github.com/anthropics/skills/pull/1245)：对简历进行事实、证据和一致性审核。

社区关注点正在从“生成文档”转向“生成后自动验证”。

### 5. 长上下文与记忆管理

[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提出 `compact-memory`，用符号化表示压缩长期 Agent 状态，降低上下文占用；[Issue #1487](https://github.com/anthropics/skills/issues/1487) 则指出 `claude-api` Skill 一次可能注入约 156k tokens。

**趋势判断：**上下文预算已成为 Skill 设计的一等约束，未来热门 Skill 会更强调按需加载、渐进式披露和状态压缩。

### 6. 高度垂直的行业工作流

新增 PR 正快速扩展到：

- Web3 智能合约审计与链上存证；
- HPC 集群、Slurm 与 GPU 调度；
- 复古游戏开发与自动验证；
- Markdown 到视频/音频内容生产。

**趋势判断：**通用 Skill 已较成熟，社区增量需求明显转向“领域知识 + 工具调用 + 可验证产物”的垂直 Skill。

## 3. 高潜力待合并 Skills

以下 PR 均为 **Open**，且具有明确痛点、较广使用价值或已有 Issue 关联，近期落地概率较高：

| PR | 潜力判断 |
|---|---|
| [mcp-builder：支持新版 MCP 客户端与自定义 Headers](https://github.com/anthropics/skills/pull/1742) | **高**：直接修复新版 MCP SDK 集成障碍，MCP 又是 Claude Code 外部工具连接的核心入口。 |
| [skill-creator：隔离触发评测并处理 Windows/运行异常](https://github.com/anthropics/skills/pull/1298) | **高**：修复评测假阴性、假阳性和跨平台失败，直接提升 Skill 创建生态的可信度。 |
| [webapp-testing：移除 `shell=True`](https://github.com/anthropics/skills/pull/1980) | **高**：安全修复，范围明确，且能显著降低测试服务器命令注入风险。 |
| [docx：超时报错并验证修订标记](https://github.com/anthropics/skills/pull/1792) | **高**：修正“实际失败却报告成功”的严重可靠性问题，验收标准明确。 |
| [xlsx：解析工作表级 defined names 与别名](https://github.com/anthropics/skills/pull/2019) | **高**：修复外部链接审计漏报，有明确 Issue 和财务/数据安全使用价值。 |
| [skill-creator：YAML frontmatter 正确解析](https://github.com/anthropics/skills/pull/1997) | **中高**：影响描述优化和评测输入的真实性，属于小改动、高收益修复。 |
| [skill-creator：支持直接执行 `package_skill.py`](https://github.com/anthropics/skills/pull/1681) | **中高**：改善安装和打包入口，降低首次使用失败率。 |
| [claude-api：更新 `pause_turn` Python 指南](https://github.com/anthropics/skills/pull/1950) | **中高**：跟进 Python SDK 新能力，避免用户使用已过时的重启计数方案。 |
| [md2video-audio](https://github.com/anthropics/skills/pull/1703) | **中**：功能传播性较强，可形成 Markdown 到视频/音频的完整内容流水线，但仍需重点审查外部依赖、生成质量和媒体安全。 |
| [Notion Spec to Implementation + Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245) | **中**：两个 Skill 同时覆盖需求执行和专业文档审计，场景明确，但需要明确外部服务权限与数据处理边界。 |

## 4. Skills 生态洞察

> **社区最集中的诉求，是把 Skills 从“提示词脚本集合”升级为可分发、可评测、可验证且能安全接入外部工具的可靠工作流组件。**

具体表现为四条主线：**企业组织级共享、自动化质量门禁、真实环境测试与产物验证、上下文成本控制**；与此同时，垂直行业 Skill 正快速成为下一阶段增长点。

---

# Claude Code 社区动态日报｜2026-11-18

## 1. 今日速览

- **Claude Code v2.1.327 发布**：新增 GitHub App 仓库变更确认，并支持通过标准输入添加 MCP Server，降低凭据暴露在命令历史中的风险。
- 今日社区讨论集中在**多账号与身份管理**、**桌面端更新与稳定性**、**远程会话兼容性**及**插件 API 一致性**；其中多 Connector 账号需求以 313 条评论成为最热议题。
- 过去 24 小时没有更新的 Pull Request；今日重点主要来自 Issue 反馈与新版本发布。

## 2. 版本发布

### v2.1.327

本次版本主要改进安全性和配置体验：

- `/install-github-app` 修改仓库前增加确认步骤，降低误操作风险。
- 新增 `claude mcp add-json <name> -`，可从 **stdin** 读取 MCP Server JSON，令令牌等敏感信息不必出现在命令行参数中。
  - 注意：该命令目前**不能在 Claude Code 会话内部执行**。
- 恢复会话时新增提示行，进一步改善会话恢复过程的可观察性。

发布链接：[v2.1.327](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)

## 3. 社区热点 Issues

### 1. 支持同一 Connector 下的多个账号

[#27302](https://github.com/anthropics/claude-code/issues/27302) · **313 条评论 / 481 个赞**

- **重要性**：这是今日讨论热度最高的功能请求，直接影响个人与团队账户并存、权限隔离和跨工作场景切换。
- **社区反应**：大量用户参与讨论，说明“同一 Connector 多账号”已是高频现实需求。
- **关注点**：需要明确账号选择、凭据隔离以及 Claude 与 Claude Code Web 之间的行为一致性。

### 2. macOS 每次更新都重新触发 TCC 权限提示

[#63671](https://github.com/anthropics/claude-code/issues/63671) · **16 条评论 / 31 个赞**

- **重要性**：Claude Code 按版本路径安装原始可执行文件，macOS 会将其视为新的未打包应用，更新后可能重新请求屏幕录制、辅助功能等权限。
- **影响**：破坏企业 MDM PPPC 配置，也可能影响 CoWork 定时任务。
- **社区反应**：问题获得较多赞，说明企业管理员和重度 macOS 用户对稳定权限状态有明确诉求。

### 3. Windows Desktop 自动更新会在工作时段强制重启

[#104422](https://github.com/anthropics/claude-code/issues/104422) · **8 条评论 / 6 个赞**

- **重要性**：自动更新策略会中断正在运行的任务，且当前行为不完全遵循机器的空闲状态判断。
- **社区诉求**：允许用户选择安装时机，同时继续提供更新通知，而不是强制立即重启。
- **产品意义**：这是典型的高频摩擦点，涉及可靠性、可控性与企业运维体验。

### 4. Windows/MSIX 内置引擎可能导致 NTFS 内存持续泄漏

[#95489](https://github.com/anthropics/claude-code/issues/95489) · **7 条评论 / 1 个赞**

- **重要性**：报告称失败的 `fswatch-probe open` 可能被高频重试，并以约 **230 MB/分钟** 的速度消耗 `ntfs.sys` 的不可分页池，直至重启。
- **影响**：属于严重资源泄漏问题，长时间运行的 Desktop 用户风险较高。
- **临时方案**：报告提到可通过 `CLAUDE_CODE_TMPDIR` 规避。
- **社区反应**：评论不多，但问题具备清晰复现条件和技术分析，值得高优先级跟进。

### 5. Remote Control 会话在桌面端和 iOS 端无法渲染插件 UI

[#99217](https://github.com/anthropics/claude-code/issues/99217) · **12 条评论 / 12 个赞**

- **重要性**：插件通过 `ui.render` 输出的 `AbovePrompt`、`Pane` 和按钮在终端可见，但在 Desktop/iOS Remote Control 中不显示。
- **影响**：插件 UI 跨端体验不一致，`AskUserQuestion` 可显示并不代表完整 UI 能力可用。
- **社区反应**：赞评论数一致，问题获得明确关注。

### 6. 约 20 万 Token 以上请求出现 `ECONNRESET`

[#109170](https://github.com/anthropics/claude-code/issues/109170) · **1 条评论 / 0 个赞**

- **重要性**：长上下文请求失败会直接阻断会话，而 `/compact` 也可能挂起，导致用户难以恢复工作。
- **风险点**：报告称问题自 2026-11-11 起持续出现，可能涉及连接基础设施、长请求策略或客户端超时。
- **社区状态**：评论量较低，但影响严重，且与可用性、上下文管理和缓存恢复直接相关。

### 7. Gmail MCP 被重写为带 Google 跟踪参数的 URL

[#66010](https://github.com/anthropics/claude-code/issues/66010) · **26 条评论 / 15 个赞**

- **重要性**：涉及隐私泄露。MCP 工具处理 Gmail 链接时若加入跟踪参数，可能暴露用户打开邮件、阅读行为或会话关联信息。
- **社区反应**：评论数较高，表明用户主要担忧第三方 MCP Server 的链接改写行为及权限边界。
- **治理诉求**：社区期待更透明的 URL 变换记录、明确的隐私说明和安全控制机制。

### 8. Naver 域名被默认安全策略整体误拦截

[#95539](https://github.com/anthropics/claude-code/issues/95539) · **13 条评论 / 12 个赞**

- **重要性**：韩国主要门户 `naver.com` 出现默认误封，而 `daum.net`、`tistory.com` 未被拦截，表明分类规则可能过于宽泛。
- **影响**：不仅影响网页访问，也可能影响依赖 Naver 的认证、搜索和自动化流程。
- **社区诉求**：需要提升安全分类精度，并提供组织级例外或域名级解封机制。

### 9. 多账号切换缺少一等公民支持

[#89993](https://github.com/anthropics/claude-code/issues/89993) · **4 条评论 / 4 个赞**

- **重要性**：用户往往同时拥有个人、工作或多个 Max 席位，但当前 `/login` 流程、路径相关凭据和额度可见性都较难管理。
- **核心需求**：
  - 非交互式账号切换；
  - 与当前工作目录解耦的凭据；
  - 程序化查看各账号使用量和额度。
- **与 #27302 的关系**：两者共同构成本日最明显的身份与多租户能力缺口。

### 10. Windows Cowork 远程会话文件上传失败

[#110676](https://github.com/anthropics/claude-code/issues/110676) · **5 条评论 / 0 个赞**

- **重要性**：大于等于 4 MB 的文件会触发“upload failed”，随后即使 47 KB 文件也可能返回 HTTP 503，显示问题可能同时涉及上传链路和服务状态。
- **影响**：阻碍 Windows 用户通过 Cowork 向远程会话传输文档、附件和项目文件。
- **社区状态**：Issue 刚创建不久，评论不多，但复现路径清晰，属于近期需要观察的新问题。

## 4. 重要 PR 进展

过去 24 小时内，**没有更新的 Pull Request**，因此暂无 PR 进展可列。

PR 查询入口：[anthropics/claude-code Pull Requests](https://github.com/anthropics/claude-code/pulls)

## 5. 功能需求趋势

### 身份、账号与多租户管理

最显著的需求是多账号体系：

- 同一 Connector 配置多个账号；
- 个人、工作和团队席位快速切换；
- 凭据与项目路径解耦；
- 跨 Claude、Claude Code 与 Web 保持账号状态一致；
- 提供程序化额度及使用量接口。

相关 Issues：[#27302](https://github.com/anthropics/claude-code/issues/27302)、[#89993](https://github.com/anthropics/claude-code/issues/89993)

### 桌面端更新、稳定性与运维可控性

社区期待：

- 自动更新不再强制中断工作；
- 由用户决定安装时间；
- 修复 Windows 文件监控重试导致的内存泄漏；
- 保持 macOS TCC 权限在版本升级后稳定。

相关 Issues：[#104422](https://github.com/anthropics/claude-code/issues/104422)、[#95489](https://github.com/anthropics/claude-code/issues/95489)、[#63671](https://github.com/anthropics/claude-code/issues/63671)

### Remote Control 与跨端会话一致性

当前主要缺口包括：

- Remote Control 会话在 Desktop、iOS、VS Code 之间不可见或无法恢复；
- 插件 UI 在终端、桌面和移动端表现不一致；
- 需要统一跨端会话发现、恢复、审批和插件渲染能力。

相关 Issues：[#99217](https://github.com/anthropics/claude-code/issues/99217)、[#109336](https://github.com/anthropics/claude-code/issues/109336)、[#106389](https://github.com/anthropics/claude-code/issues/106389)

### 插件 API 完整性与可观测性

需求集中在：

- `ui.render` 完整跨端支持；
- `session.usage()` 暴露与 `/usage` 一致的按模型周额度；
- 插件依赖安装正确处理 `overrides` 和可选 `peerDependencies`；
- 插件界面能力应具备稳定、可测试的兼容契约。

相关 Issues：[#101847](https://github.com/anthropics/claude-code/issues/101847)、[#103960](https://github.com/anthropics/claude-code/issues/103960)、[#110856](https://github.com/anthropics/claude-code/issues/110856)

### 长上下文、会话恢复与缓存效率

开发者关注：

- 超过约 200K Token 的请求稳定性；
- `/compact` 在异常连接状态下的恢复能力；
- Resume 后保留 `# Environment` 系统消息，避免破坏 Prompt Cache；
- 降低超长会话的无效成本和延迟。

相关 Issues：[#109170](https://github.com/anthropics/claude-code/issues/109170)、[#110867](https://github.com/anthropics/claude-code/issues/110867)

### 模型与 Agent SDK 行为一致性

社区希望工具启用时仍严格遵守 `thinking: {"type": "disabled"}`，并减少生物医学、癌症研究等正常任务触发的安全分类误判。

相关 Issues：[#104985](https://github.com/anthropics/claude-code/issues/104985)、[#110853](https://github.com/anthropics/claude-code/issues/110853)

### 项目、记忆与团队协作

- 跨会话、跨仓库迁移规则、记忆和产物；
- 团队共享 Claude Code 项目；
- 在多会话视图中统一展示等待状态；
- Agent 与子 Agent 的执行可靠性。

相关 Issues：[#110525](https://github.com/anthropics/claude-code/issues/110525)、[#110627](https://github.com/anthropics/claude-code/issues/110627)、[#110200](https://github.com/anthropics/claude-code/issues/110200)、[#100413](https://github.com/anthropics/claude-code/issues/100413)

## 6. 开发者关注点

1. **账号切换仍是首要工作流阻塞点**  
   用户需要频繁处理个人与工作账号，但现有登录、凭据存储和额度查询方式不够统一。

2. **桌面端自动更新的时机需要可控**  
   强制重启会中断长任务。开发者更希望“后台下载、通知用户、择机安装”。

3. **跨端 Remote Control 尚未形成一致体验**  
   会话发现、历史恢复、插件渲染和审批入口在不同客户端表现不一致，增加调试复杂度。

4. **长上下文稳定性影响会话恢复**  
   大于约 200K Token 的请求失败，以及 `/compact` 挂起，可能导致昂贵会话无法继续。

5. **资源泄漏和系统权限是桌面端高风险问题**  
   Windows NTFS 池泄漏和 macOS TCC 重授权分别影响系统资源与企业权限管理。

6. **插件 API 的“可调用”不等于“完整可用”**  
   部分 UI 和用量字段在终端存在，但跨端或 API 层缺失，插件开发者难以建立稳定预期。

7. **MCP 与网络策略需要更透明**  
   Gmail URL 跟踪改写和 Naver 误封说明，开发者对第三方数据处理、域名分类和安全策略可解释性有较高要求。

8. **模型行为需与显式配置保持一致**  
   禁用 thinking、安全分类误判等问题表明，工具调用条件下的模型行为仍需更严格地遵循 SDK 参数和产品语义。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-18**  
**数据范围：GitHub `openai/codex` 过去 24 小时**

## 1. 今日速览

过去 24 小时发布 **Codex Rust `v0.170.0`**，重点加入 TUI 实时语音的 WebRTC 协商、OpenTelemetry HTTP 导出器认证头自动刷新，以及跨环境使用同名 MCP 服务器的实验支持。  
社区问题集中在 **Windows 桌面端稳定性、Work/Cloud 执行环境、Computer Use、沙箱与权限继承**；同时，一批 PR 开始集中修复会话恢复、任务调度、沙箱启动和 TUI 交互问题。

---

## 2. 版本发布

### [`rust-v0.170.0`](https://github.com/openai/codex/releases/tag/rust-v0.170.0)

**新增功能**

- 为 TUI 实时语音通话加入 **WebRTC 协商**。
- 为 **OpenTelemetry HTTP Exporter** 增加自动刷新的认证请求头。
- 实验性支持在不同环境中配置**同名 MCP Server**。

### 其他版本

- [`rust-v0.171.0-alpha.13`](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13)：0.171 预发布版本，暂无详细变更说明。
- [`rust-v0.171.0-alpha.12`](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.12)：0.171 预发布版本。
- [`rust-v0.170.0-alpha.4.2`](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4.2)：0.170 预发布维护版本。
- [`rust-v0.169.1`](https://github.com/openai/codex/releases/tag/rust-v0.169.1)：维护版本；官方未提供可验证的发布亮点。

---

## 3. 社区热点 Issues

> 以下按评论热度、影响范围及对开发工作的实际影响综合筛选。

1. **Windows Computer Use 截图结束后仍保留捕获权限和黄色边框**  
   [#57101](https://github.com/openai/codex/issues/57101)  
   - 57 条评论，为本期热度最高的问题。  
   - 截图任务结束后，捕获状态与视觉边框未及时清理，会直接影响后续桌面操作和用户信任。  
   - 社区反馈高度集中，属于 Windows Computer Use 的高优先级体验与资源释放问题。

2. **Windows 缺少读取或继续已有本地 Codex 会话的原生命令**  
   [#49862](https://github.com/openai/codex/issues/49862)  
   - 24 条评论、3 个点赞。  
   - 反映 CLI、桌面端和 App Server 在会话发现、读取与消息投递上的能力不一致。  
   - 对自动化、远程控制和跨端工作流影响较大。

3. **Windows 新建 Work 会话时发送按钮持续禁用**  
   [#54564](https://github.com/openai/codex/issues/54564)  
   - 20 条评论。  
   - 问题直接阻断核心“提交任务”路径，并集中于 Windows App，可能与近期桌面端执行环境或前端状态同步改动有关。  
   - 多个相似报告使该问题具备明显的版本关联排查价值。

4. **macOS Work 中 Enter 和发送按钮均无法提交消息**  
   [#51636](https://github.com/openai/codex/issues/51636)  
   - 17 条评论。  
   - 与 Windows 的发送失效问题形成跨平台对照，说明 Work 会话提交链路可能存在共享缺陷。  
   - 普通 Chat 可用、仅 Work 受影响，是定位前端模式分流或会话状态问题的关键线索。

5. **ChatGPT Work / Sites 出现 “No usable execution environment”**  
   [#55654](https://github.com/openai/codex/issues/55654)  
   - 15 条评论、4 个点赞。  
   - 同时影响移动端、桌面端和浏览器，意味着问题更可能位于共享的执行环境选择、租户配置或服务层，而非单一客户端。  
   - 对跨端 Work 场景影响范围广。

6. **社区长期请求支持 MCP Prompts**  
   [#5059](https://github.com/openai/codex/issues/5059)  
   - 11 条评论、56 个点赞，是本期点赞数最高的功能提案。  
   - 当前 Codex 主要消费 MCP Tools，而大量 MCP Server 已提供预置 Prompts；原生支持可通过 `/` 调用，可减少手工复制提示词。  
   - 这是 MCP 能力补全的重要方向，热度虽以老 Issue 为主，但长期需求非常明确。

7. **Windows 桌面端过早终止仍在推进的长时自主任务**  
   [#59094](https://github.com/openai/codex/issues/59094)  
   - 9 条评论、5 个点赞。  
   - 用户认为任务尚有明确可执行步骤却被提前终止，直接影响长时 Agent 的可用性与结果完整性。  
   - 与任务生命周期、错误分类及恢复策略密切相关。

8. **Windows Computer Use 报告错误的焦点元素**  
   [#58482](https://github.com/openai/codex/issues/58482)  
   - 8 条评论。  
   - Calculator 的索引操作会随窗口生命周期变化，错误焦点识别可能导致工具点击到非预期控件。  
   - 这是 Computer Use 可靠性的核心问题，也会放大自动化脚本的副作用风险。

9. **委派任务未遵守用户显式授权**  
   [#35072](https://github.com/openai/codex/issues/35072)  
   - 7 条评论。  
   - 报告指出仅限本地的迁移操作仍请求额外审批，暴露主会话与 Subagent 之间审批语义不一致的问题。  
   - 若属实，可能导致任务停滞或过度授权，因此涉及安全边界与执行正确性。

10. **插件 `mcp.json` 因 `extensions` 字段被拒，导致 MCP Server 被丢弃**  
    [#53658](https://github.com/openai/codex/issues/53658)  
    - 7 条评论、7 个点赞。  
    - Agent Plugins 格式的 MCP 配置与当前解析器不兼容，插件虽然安装成功，服务却没有注册。  
    - 涉及插件生态、配置兼容和扩展发现链路，对插件开发者尤其重要。

**其他值得跟踪：**  
- Windows/Android Remote 重连后项目列表不刷新：[#44582](https://github.com/openai/codex/issues/44582)  
- Windows 多行 PowerShell 命令粘贴后顺序颠倒：[#60610](https://github.com/openai/codex/issues/60610)  
- 恢复会话时自动压缩策略异常：[#29426](https://github.com/openai/codex/issues/29426)（已关闭）  
- 恢复的 Codex turn 消耗约 23% 五小时额度：[#62197](https://github.com/openai/codex/issues/62197)  
- npm `latest` 早于 Linux 二进制发布约 12 分钟：[#51745](https://github.com/openai/codex/issues/51745)

---

## 4. 重要 PR 进展

> 本期展示的 PR 均标记为 **CLOSED**；“关闭”不等同于已合并，具体是否进入目标分支仍需结合合并状态确认。

1. **避免初始上下文在并发注入竞态中重复写入**  
   [#62206](https://github.com/openai/codex/pull/62206)  
   首个用户 turn 与原始响应项注入可能同时判断会话没有参考上下文，进而重复追加初始 Prompt 和世界状态快照。该修复针对会话初始化一致性及额外上下文开销。

2. **让沙箱准备结果随命令保留至实际启动阶段**  
   [#62205](https://github.com/openai/codex/pull/62205)  
   在 Core 中保留准备好的 `SandboxExecRequest`，由 `command/exec` 借用已准备的命令进行流式执行；Windows restricted-token 命令继续走专用启动器，降低准备状态丢失和权限上下文偏差风险。

3. **`/status` 不再显示未知服务器版本**  
   [#62202](https://github.com/openai/codex/pull/62202)  
   云端或远程服务器未上报版本时，不再附加 `(unknown)`，而是直接显示云端标签或远程地址，改善状态信息的可读性。

4. **Agent Command Center 支持按任务组导航**  
   [#62200](https://github.com/openai/codex/pull/62200)  
   新增 `Shift+Down`/`Shift+J` 跳到下一任务组首个任务，以及 `Shift+Up`/`Shift+K` 返回上一任务组，改善多 Agent 任务密集场景下的导航效率。

5. **恢复 `codex exec` 时保留已保存的沙箱权限**  
   [#62194](https://github.com/openai/codex/pull/62194)  
   修复恢复命令把当前进程默认沙箱配置作为覆盖值发送的问题，避免原本以 `:read-only` 启动的会话在恢复后意外获得 `:workspace` 写权限。该修复直接关系到安全边界。

6. **区分 Windows 沙箱配置超时与管道关闭**  
   [#62192](https://github.com/openai/codex/pull/62192)  
   对注册 Core 的 provisioning 请求超时和管道提前关闭分别处理，使安装阶段能够报告更准确的错误，并改善相关监控指标的可诊断性。

7. **将 turn 与 response checkpoint 纳入 rollout budget 策略**  
   [#62190](https://github.com/openai/codex/pull/62190)  
   通过 `RolloutWorkGate` 管理工作准入，并将压缩延迟纳入 `ThreadBudgetPolicy`；同时利用 `TurnWork` 检查采样响应预算，控制长任务中的上下文与资源消耗。

8. **将 HTTP/2 隧道数据刷新至本地 TCP Writer**  
   [#62186](https://github.com/openai/codex/pull/62186)  
   每收到一段 HTTP/2 数据即刷新本地 TCP writer，再释放接收流控容量，避免交互式隧道因缓冲区数据未及时写出而卡住。

9. **在启动准备阶段选择进程沙箱**  
   [#62183](https://github.com/openai/codex/pull/62183)  
   将沙箱选择提前到启动准备阶段，使工作区相对权限规则能针对执行主机的 workspace roots 解析，并提前检查受限执行环境是否真正可用。

10. **从 TUI 活动链接直接打开 Subagent 对话记录**  
    [#62159](https://github.com/openai/codex/pull/62159)  
    在存在侧边栏时，将活动记录中的 Subagent 标签改为可点击，直接打开对应子 Agent transcript；同时配套的 [#62157](https://github.com/openai/codex/pull/62157) 允许在侧边栏中以独立标签页查看子 Agent，且保持父会话可见。

**其他值得关注：**

- App Server v2 暴露专用 `bioPolicy` 错误码：[#62176](https://github.com/openai/codex/pull/62176)  
- 修复 TUI 立即重绘时使用旧终端尺寸：[#62175](https://github.com/openai/codex/pull/62175)  
- 输入时保持 TUI Composer 光标位置稳定：[#62174](https://github.com/openai/codex/pull/62174)  
- 将 App Server socket relay 迁入 Codex CLI：[#62163](https://github.com/openai/codex/pull/62163)

---

## 5. 功能需求趋势

1. **MCP 能力补全**
   - 原生支持 MCP Prompts 的长期需求仍然突出：[Issue #5059](https://github.com/openai/codex/issues/5059)。
   - 社区同时需要同名 MCP Server 的跨环境隔离、插件 `mcp.json` 兼容，以及更稳定的 MCP 服务发现。
   - 方向已经从“接入 MCP Tools”扩展到 **Prompts、配置、身份与生命周期管理**。

2. **Windows 桌面端成为改进重点**
   - Computer Use、会话提交、Remote、沙箱、PowerShell 执行及 Work Cloud 均出现集中反馈。
   - 用户期待 Windows 与 macOS 在核心任务生命周期上达到一致，而不只是功能可用。

3. **Work / Cloud 执行环境稳定性**
   - “无可用执行环境”、网络被限制、IAB 不可用、Work 无法启动等问题反复出现。
   - 社区希望本地、远程、Cloud、Browser 等执行目标具有**明确、可预测、可诊断**的路由行为。

4. **长时自主任务与上下文成本**
   - 任务过早终止、恢复时重复加载上下文、额度消耗过高、自动压缩异常等问题受到关注。
   - 开发者需要更精细的 **任务续跑、checkpoint、上下文复用和预算策略**。

5. **Subagent 可观测性与人工审批**
   - 用户希望直接查看子 Agent transcript，并确保委派任务继承正确的授权状态。
   - 需求重点是 **可审计、可追踪、权限不丢失**。

6. **发布与包分发可靠性**
   - npm 元数据与平台二进制发布不同步会影响自动升级：[Issue #51745](https://github.com/openai/codex/issues/51745)。
   - 开发团队对原子化发布、预发布通道及构建产物可追溯性的要求上升。

---

## 6. 开发者关注点

- **上下文与额度效率**：恢复会话是否重复读取历史、自动压缩是否准确、上下文重建为何消耗大量五小时额度，是近期直接关联使用成本的问题。
- **沙箱权限必须可预测**：开发者尤其关注恢复执行后权限被默认值覆盖、委派任务丢失人工授权，以及网络限制与 UI 设置不一致。
- **跨平台一致性**：Windows 与 macOS 分别出现消息无法提交、Computer Use 焦点错误和 Remote 状态陈旧等问题，说明桌面端功能成熟度仍需统一。
- **Work 执行路由不透明**：本地与 Cloud 环境选择错误、网络和浏览器能力不可用、远程项目列表不刷新，都会迫使用户反复重启或重新配对。
- **Agent 可追踪性不足**：Subagent transcript、任务分组导航、checkpoint 与 rollout budget 等改进表明，长任务越来越需要类似“控制台”的可观测能力。
- **测试稳定性与发布原子性**：PR 中大量工作涉及消除固定等待、竞态、测试依赖外部 Python、HTTP/2 缓冲以及 npm/二进制发布时序，反映工程质量治理正进一步前置。
- **错误信息需要可诊断**：区分沙箱 provisioning timeout 与 pipe closure、暴露具体策略错误、避免 `/status` 显示模糊的 `(unknown)`，都比笼统报错更受开发者欢迎。

**总体判断：** 今天的社区主线不是缺少新能力，而是 **让 Agent 在不同平台、Work/Cloud 环境和长任务生命周期中可靠地执行**。近期应重点跟踪 `v0.170.0` 的实际兼容性，以及 Windows 沙箱、会话恢复和 Work 执行链路相关 PR 的最终合并与发布情况。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报｜2026-11-18

## 今日速览

过去 24 小时没有新版本发布，仓库社区活动主要集中在 **Agent/Subagent 的可靠性、配置继承与任务跟踪**。代码修复方面，Windows PowerShell 解析导致 UI 卡死、SSH 配置被空字符串覆盖、MCP 环境变量解析损坏等问题已出现对应 PR；同时，依赖升级和内部评测稳定性也是近期开发重点。

---

## 社区热点 Issues

1. **Subagent 达到 `MAX_TURNS` 后仍被报告为成功**  
   `codebase_investigator` 在达到最大轮次、实际未完成分析时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，可能掩盖真实中断。  
   [查看 Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **Generalist Agent 偶发无限挂起**  
   Agent 在委派给 generalist subagent 后可能长时间不返回，即使只是创建目录等简单操作也会卡住；社区关注度较高，获得 8 个赞。  
   [查看 Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等覆盖配置**  
   AgentRegistry 初始化阶段读取了配置，但 Browser Agent 实际执行时没有应用对应覆盖值，反映出配置合并与运行时传递之间的不一致。  
   [查看 Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

4. **Browser Agent 在 Wayland 环境下失败**  
   Browser subagent 在 Wayland 环境无法正常运行，属于 P1 级问题，也暴露出浏览器自动化对不同 Linux 显示服务器的兼容性仍不足。  
   [查看 Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

5. **工具数量过多时触发 400 错误**  
   当环境中可用工具超过限制后，Gemini CLI 会收到 400 错误。社区希望 Agent 能根据任务动态筛选工具，而不是一次性暴露过多工具定义。  
   [查看 Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

6. **Gemini 未主动使用自定义 Skills 和 Subagents**  
   用户反馈，即使已经配置了与任务高度相关的 skills，模型通常仍不会自动调用，必须在提示词中显式指定。  
   [查看 Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **模型频繁在随机目录创建临时脚本**  
   当文件工具被限制后，模型倾向通过 shell 生成多个编辑脚本，造成工作区污染和清理成本上升。  
   [查看 Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

8. **Agent 可能执行破坏性 Git 或数据库操作**  
   社区希望 Agent 在存在安全替代方案时避免 `git reset`、强制覆盖等高风险操作，并在数据库维护等场景中默认采取更保守策略。  
   [查看 Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9. **Subagent 软链接无法被识别**  
   `~/.gemini/agents/filename.md` 如果是符号链接，不会被加载为 subagent，降低了自定义 Agent 管理的灵活性。  
   [查看 Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

10. **Subagent 轨迹难以查看和评估**  
   Subagent 轨迹虽然会被聊天记录服务保存，但无法方便地通过 `/chat share` 访问，不利于开发者复盘行为、定位问题和评估质量。  
    [查看 Issue #22598](https://github.com/google-gemini/gemini-cli/issues/22598)

---

## 重要 PR 进展

1. **异步解析 PowerShell，避免 Windows CLI 界面冻结**  
   PowerShell AST 解析被移出 UI 主流程，修复 Thinking spinner 和计时器停止刷新、Shell 面板延迟出现的问题。  
   [查看 PR #30334](https://github.com/google-gemini/gemini-cli/pull/30334)

2. **不再用空字符串覆盖 `core.sshCommand`**  
   修复 Git 在真正调用 SSH 前因空命令配置而失败的问题，适用于 clone、fetch、push 等需要 SSH 的操作。  
   [查看 PR #30335](https://github.com/google-gemini/gemini-cli/pull/30335)

3. **正确保留 MCP 环境变量中的 `=` 和空值**  
   `gemini mcp add -e KEY=value` 不再丢弃第二个 `=` 后的内容，也不会静默忽略空值环境变量。  
   [查看 PR #30331](https://github.com/google-gemini/gemini-cli/pull/30331)

4. **修复 ACP 压缩会话重载后的 400 错误**  
   工具调用改为记录到当前活跃 chat，而不是压缩前的初始 chat，避免重新加载会话时引用已移除的模型消息。  
   [查看 PR #30219](https://github.com/google-gemini/gemini-cli/pull/30219)

5. **为 API 与结构化错误类型守卫补充单元测试**  
   新增 `isApiError`、`isStructuredError` 的测试覆盖，提升配额和 API 错误分类逻辑的可靠性。  
   [查看 PR #30216](https://github.com/google-gemini/gemini-cli/pull/30216)

6. **修复自定义命令和 Prompt 替换中的 `$` 模式展开**  
   避免 `$$`、`$&`、`$1` 等 JavaScript replacement pattern 污染 `{{args}}`、`${AgentSkills}`、`${SubAgents}` 和 `${AvailableTools}`。  
   [查看 PR #30115](https://github.com/google-gemini/gemini-cli/pull/30115)

7. **认证 URL 在终端换行后仍可点击**  
   修复窄终端中登录链接被截断，导致 Google 登录端返回 400 / Access blocked 的问题。  
   [查看 PR #30107](https://github.com/google-gemini/gemini-cli/pull/30107)

8. **保留存在未解析展开的 Shell 命令确认流程**  
   当 bash 在执行前会改写命令参数时，继续维持 `ASK_USER` 决策，避免基于未展开文本错误地将命令自动放行。  
   [查看 PR #30338](https://github.com/google-gemini/gemini-cli/pull/30338)

9. **从 CLI 路径而非当前目录判断本地 Git 源码安装**  
   修复从源码仓库子目录、其他 Git 仓库或 `npm link` 环境运行时，自动更新错误地将本地安装识别为 npm 全局安装的问题。  
   [查看 PR #30315](https://github.com/google-gemini/gemini-cli/pull/30315)

10. **IDE Companion 发现文件强化隔离与原子写入**  
    POSIX 环境下改用按用户隔离的临时目录和 `0700` 权限，并通过独占临时文件加重命名原子更新端口文件。  
    [查看 PR #30340](https://github.com/google-gemini/gemini-cli/pull/30340)

---

## 功能需求趋势

### 1. Agent 与 Subagent 能力建设
- 支持本地 Subagent、通用化 Agent 命名，以及仓库内置的测试、构建、文档等专用 Agent。  
  [#20195](https://github.com/google-gemini/gemini-cli/issues/20195) · [#18283](https://github.com/google-gemini/gemini-cli/issues/18283) · [#18282](https://github.com/google-gemini/gemini-cli/issues/18282)

- 改善 Subagent 的自动发现、软链接加载、配置继承和上下文报告。  
  [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) · [#18285](https://github.com/google-gemini/gemini-cli/issues/18285) · [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

- 探索共享内存、并行 Subagent 协作及 Subagent 轨迹分享。  
  [#18287](https://github.com/google-gemini/gemini-cli/issues/18287) · [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)

### 2. 代码库理解与上下文效率
- AST 感知的文件读取、搜索和代码库映射，以减少无效读取和 token 消耗。  
  [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)

- “Tactful Extraction” 分层读取，以及更精准、节省 token 的代码检索。  
  [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 3. 任务跟踪与持久化记忆
社区倾向于用持久化文件任务系统替代仅存在于对话上下文中的 `WriteToDo`，以减少 context rot，并支持跨会话恢复。  
[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) · [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)

### 4. Shell、浏览器与执行安全
- 引入零依赖 OS 沙箱和执行后意图路由，以充分利用模型的 Bash 能力，同时保持安全。  
  [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)

- Browser Agent 增强会话接管、锁恢复及跨平台稳定性。  
  [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) · [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. IDE 集成与本地安全策略
IDE Companion 的发现、端口文件和安全隔离持续受到关注；同时，开发者希望支持按工作区配置策略，而非仅使用全局策略。  
[#30340](https://github.com/google-gemini/gemini-cli/pull/30340) · [#18397](https://github.com/google-gemini/gemini-cli/issues/18397)

### 6. 评测与质量体系
社区希望通过更稳定、可追踪的内部项目评测持续衡量 Agent 质量，并推动 steering eval 成为稳定的回归保障。  
[#23166](https://github.com/google-gemini/gemini-cli/issues/23166) · [#23313](https://github.com/google-gemini/gemini-cli/issues/23313)

---

## 开发者关注点

- **Agent 状态必须可信**：达到轮次上限、异常退出或被中断时，应明确报告失败或中断，不能以 `GOAL/success` 掩盖失败。
- **Subagent 的配置应真正生效**：`settings.json` 中的 `maxTurns` 等覆盖值需要在运行时可靠传递。
- **上下文和工具数量需要精细控制**：过多工具定义会触发 API 400，而大文件读取和临时脚本则显著增加 token 与工作区噪声。
- **Shell 操作需要更保守的安全默认值**：涉及变量展开、Git 重置、数据库修改时，应优先保留人工确认或提供安全替代方案。
- **浏览器自动化需要稳定的跨平台支持**：Wayland、持久化浏览器 Profile、锁文件和会话恢复是当前主要痛点。
- **可观测性仍不足**：开发者希望更容易查看 Subagent 轨迹、真实执行上下文和内部评测结果。
- **自定义扩展生态需要更平滑**：Skills、Subagents 和 `settings.json` 的发现及调用仍不够主动，导致“已配置但未使用”。
- **账号与登录体验值得持续关注**：除服务停用申诉外，终端换行导致认证链接损坏也是近期高优先级修复点。  
  [#29759](https://github.com/google-gemini/gemini-cli/issues/29759) · [#30107](https://github.com/google-gemini/gemini-cli/pull/30107)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-18**  
**仓库：[github/github/copilot-cli](https://github.com/github/copilot-cli)**

## 今日速览

过去 24 小时发布 **v1.0.114**，并有 33 个 Issue 更新。社区焦点集中在 **v1.0.113 引入的插件扩展回归**，尤其是 SDK 包重命名、扩展重复启动、热重载失败，以及 Marketplace 全量克隆等问题；同时，Windows、作用域指令和 Fusion 模型的稳定性也受到集中关注。

## 版本发布

### [v1.0.114](https://github.com/github/copilot-cli/releases/tag/v1.0.114)

- **发布日期：** 2026-11-18
- **发布说明：** Release 页面当前仅列出 “Fixes and changes”，未提供更详细的变更清单。
- **关联预发布版本：**
  - [v1.0.114-0](https://github.com/github/copilot-cli/releases/tag/v1.0.114-0)
  - 同样仅标注 “Fixes and changes”，具体内容需查看对应提交或构建记录。

> 注：过去 24 小时没有 Pull Request 更新，因此暂无社区 PR 进展可汇总。

## 社区热点 Issues

### 1. [v1.0.113 插件 SDK 重命名导致现有扩展无法加载](https://github.com/github/copilot-cli/issues/5492)

- **标签：** plugins、models
- SDK 从 `@github/copilot-sdk` 改为 `@microsoft/copilot-sdk`，但没有为旧包名提供别名，也没有在 Release Notes 中说明。
- 现有扩展会直接报 `ERR_MODULE_NOT_FOUND`，属于破坏性兼容性问题。
- **重要性：** 高。插件作者需要立即迁移包名，CLI 官方则应补充迁移说明或兼容别名。
- **社区反应：** 新 issue，尚无评论。

### 2. [插件扩展在交互会话启动后被意外停止并重启](https://github.com/github/copilot-cli/issues/5492)

实际链接：[v1.0.113 中插件扩展启动数秒后被停止并重新启动](https://github.com/github/copilot-cli/issues/5498)

- **标签：** plugins
- 扩展启动代码会执行两次，可能造成重复注册、重复初始化和状态不一致。
- **重要性：** 高。直接影响插件生命周期以及外部工具注册。
- **社区反应：** 新 issue，尚无评论；与 SDK 重命名问题共同构成 v1.0.113 插件生态的集中回归。

### 3. [`extensions_reload` 后扩展永久失败](https://github.com/github/copilot-cli/issues/5490)

- **标签：** plugins
- 热重载后，新进程无法恢复旧的外部工具注册，提示工具名冲突。
- **重要性：** 高。破坏开发调试和运行时重载能力，通常只能重启 CLI 或会话恢复。
- **社区反应：** 新 issue，尚无评论。

### 4. [Marketplace 添加过程全量克隆仓库且缺少进度与取消机制](https://github.com/github/copilot-cli/issues/5491)

- **标签：** non-interactive、plugins
- 添加 Marketplace 会克隆完整仓库，而实际只需要读取其中的 `marketplace.json`。
- 大型仓库可能耗时数分钟；用户无法取消，进程退出后还可能留下孤立 `git` 进程和临时目录。
- **重要性：** 高。直接影响安装体验、资源消耗和可靠性。
- **社区反应：** 新 issue，尚无评论。

### 5. [Windows 下 Cortex XDR 终止 Copilot CLI 启动的 Git 父进程](https://github.com/github/copilot-cli/issues/5478)

- **标签：** platform-windows、tools
- Copilot CLI 在 Git 仓库中调用 `git` 时，Cortex XDR 的 `parent_process_spoofing` 检测会终止 `cmd`/PowerShell，最终导致 CLI 崩溃。
- **重要性：** 高。属于企业安全软件与 CLI 子进程模型之间的兼容性风险，可能影响大量受管终端。
- **社区反应：** **6 条评论、1 个赞**，是过去 24 小时讨论最活跃的 issue。

### 6. [MCP 重复发现时错误报告已加载命名空间为 “Found 0 tools”](https://github.com/github/copilot-cli/issues/4773)

- **标签：** mcp、tools
- 已经加载的 MCP namespace 在重复发现时显示零工具，Agent 可能因此误判集成不可用并跳过必要步骤。
- **重要性：** 高。错误状态会直接影响工具选择和工作流执行。
- **社区反应：** **3 条评论、1 个赞**，问题已有一定复现和讨论。

### 7. [恢复会话时未恢复自定义 Agent 的 MCP 配置和工具白名单](https://github.com/github/copilot-cli/issues/4674)

- **标签：** sessions、agents
- 恢复会话后，自定义 Agent 的 `mcp-servers` 与 `tools` allow-list 没有重新应用，表现为静默回退。
- **重要性：** 高。会话恢复可能改变权限边界和可用工具，属于潜在的安全与行为一致性问题。
- **社区反应：** **4 条评论**；该 issue 已关闭。

### 8. [Fusion 在 `new_context` 请求续跑时误判空结果](https://github.com/github/copilot-cli/issues/5493)

- **标签：** context-memory、models
- Fusion 会话中，`new_context` 没有按预期继续未完成的 solver 阶段，Judge 随后把空结果判为失败并触发 repair。
- **重要性：** 高。长任务在上下文切换时可能被打断并产生不必要的重试。
- **社区反应：** 新 issue，尚无评论。

### 9. [Fusion Judge 因找不到证据拒绝已完成操作](https://github.com/github/copilot-cli/issues/5494)

- **标签：** agents
- 即使发送方和接收方日志记录了 release、确认及后续消息，Judge 仍可能拒绝已经完成的跨会话操作。
- **重要性：** 高。说明 Fusion 的操作验证与实际证据记录之间可能存在不一致。
- **社区反应：** 新 issue，尚无评论。

### 10. [作用域指令仅在执行 `view` 后才被发现](https://github.com/github/copilot-cli/issues/5497)

- **标签：** context-memory
- 启用 `enableOnDemandInstructionDiscovery` 后，嵌套 `AGENTS.md` 和带 `applyTo` 的指令，只有在成功 `view` 文件后才加载。
- Agent 若直接编辑、新建文件或执行 shell 命令，可能跳过适用规则且没有警告。
- **重要性：** 高。仓库级和目录级约束可能未及时进入上下文，影响行为规范与安全。
- **社区反应：** 新 issue，尚无评论。

## 重要 PR 进展

过去 24 小时内该仓库 **没有更新的 Pull Request**，因此本期不列具体 PR。

可从已关闭的 Issue 观察到的近期修复方向包括：

- [恢复自定义 Agent 时重新应用配置](https://github.com/github/copilot-cli/issues/4674)
- [任务子 Agent 继承 `includeCoAuthoredBy: false`](https://github.com/github/copilot-cli/issues/4576)
- [支持任务工具热加载新增 Agent](https://github.com/github/copilot-cli/issues/3106)
- [修复 grep 输出压缩造成的文件名和行号损坏](https://github.com/github/copilot-cli/issues/5318)
- [修复非交互模式中 MCP Sampling 始终被拒绝](https://github.com/github/copilot-cli/issues/2882)
- [修复插件 `userPromptSubmitted` 上下文被最后一个插件覆盖](https://github.com/github/copilot-cli/issues/5122)
- [修复本地沙箱 `Authenticate gh` 使用错误凭据](https://github.com/github/copilot-cli/issues/4804)

## 功能需求趋势

### 1. 插件与扩展生态

这是当前最强烈的需求和回归集中区：

- 稳定的运行时 turn ID，供插件关联用户操作：[Issue #5487](https://github.com/github/copilot-cli/issues/5487)
- SDK 包重命名兼容及迁移文档：[Issue #5492](https://github.com/github/copilot-cli/issues/5492)
- 扩展生命周期、热重载和工具注册稳定性：[Issue #5490](https://github.com/github/copilot-cli/issues/5490)、[Issue #5498](https://github.com/github/copilot-cli/issues/5498)
- Marketplace 使用稀疏检出，减少磁盘与下载开销：[Issue #2463](https://github.com/github/copilot-cli/issues/2463)

### 2. MCP 可观测性与身份关联

社区希望 MCP 调用具备稳定、可追踪的 turn 身份：

- 暴露稳定的运行时 turn ID：[Issue #5487](https://github.com/github/copilot-cli/issues/5487)
- 修复 MCP 重复发现返回错误工具数量：[Issue #4773](https://github.com/github/copilot-cli/issues/4773)
- 支持 MCP OAuth 的 localhost 回调地址覆盖：[Issue #5040](https://github.com/github/copilot-cli/issues/5040)
- 非交互模式下 MCP Sampling 应有明确、可配置的权限行为：[Issue #2882](https://github.com/github/copilot-cli/issues/2882)

### 3. 会话管理与上下文生命周期

- 支持从导出的 Markdown 文件恢复会话：[Issue #3630](https://github.com/github/copilot-cli/issues/3630)
- 清理异常退出后遗留的进程、锁文件、Worker 和 MCP Server：[Issue #1790](https://github.com/github/copilot-cli/issues/1790)
- 优先使用模型原生 Responses API 压缩机制：[Issue #2558](https://github.com/github/copilot-cli/issues/2558)
- 修复 Fusion 在上下文切换和 Judge 验证中的误判：[Issue #5493](https://github.com/github/copilot-cli/issues/5493)、[Issue #5494](https://github.com/github/copilot-cli/issues/5494)

### 4. 作用域规则与仓库上下文

- 嵌套 `AGENTS.md` 和 `applyTo` 指令应在操作前被发现：[Issue #5497](https://github.com/github/copilot-cli/issues/5497)
- Windows 无盘符挂载卷上的仓库指令加载仍不可靠：[Issue #5496](https://github.com/github/copilot-cli/issues/5496)

### 5. 企业策略与安全管理

- 企业管理员希望统一启用并强制沙箱策略：[Issue #4446](https://github.com/github/copilot-cli/issues/4446)
- 内置 Browser Use 已可通过 `features.browserUse` 托管策略关闭，包括运行中的会话。
- 企业安全软件的进程检测兼容成为新的部署障碍：[Issue #5478](https://github.com/github/copilot-cli/issues/5478)

### 6. Computer Use 与浏览器能力

- Windows Computer Use 对 ChatGPT 桌面应用执行只读操作也被安全策略拒绝：[Issue #5495](https://github.com/github/copilot-cli/issues/5495)
- Browser Use 需要稳定 turn ID，以精确关联并返回当前 turn 所打开的标签页：[Issue #5487](https://github.com/github/copilot-cli/issues/5487)

## 开发者关注点

- **插件升级兼容性：** SDK 包名变更没有别名或发布说明，是当前最直接的扩展作者风险。
- **扩展生命周期一致性：** 重复启动、热重载后工具名冲突会造成初始化重复和状态丢失。
- **MCP 工具发现准确性：** “Found 0 tools” 这类误导性状态可能直接导致 Agent 跳过工作流。
- **会话恢复语义：** 恢复后必须完整恢复 Agent、MCP、工具白名单及权限配置，避免静默行为漂移。
- **作用域指令及时生效：** 规则发现不能依赖文件已被查看，否则直接编辑和 shell 操作可能违反仓库约束。
- **企业环境兼容性：** Cortex XDR、Entra OAuth 回调、Windows 无盘符卷和 macOS Fake-IP 均暴露跨平台部署问题。
- **Marketplace 安装效率：** 全量克隆、缺少进度、无法取消和残留进程共同影响大型插件目录的可用性。
- **文档与发布透明度：** SDK 重命名、CLI 参数变化和新托管策略需要更完整的 Release Notes 与迁移指南；[贡献文档也已过期](https://github.com/github/copilot-cli/issues/5489)。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-18**  
**项目：anomalyco/opencode**

## 今日速览

OpenCode 今日发布 **v2.3.2**，重点修复 GPT-6.2 在 Responses API 下无法命中系统提示词缓存的问题；紧随其后的 **v2.3.1** 则调整了 Shell 超时行为，超时命令将转入后台继续执行。社区讨论主要集中在 **V2 升级迁移、数据库稳定性、模型兼容性、TUI/插件能力** 等方向，其中免费额度问题仍是关注度最高的议题。

---

## 版本发布

### v2.3.2：GPT-6.2 Prompt Caching

- 修复 GPT-6.2 在 Responses API 中将顶层 `instructions` 排除在提示词缓存之外的问题。
- OpenCode 现在会将系统提示词作为 Responses 请求中的**前导 developer message**发送。
- 调整覆盖 OpenAI API Key、ChatGPT 登录以及相关 Responses 路由，可减少重复计费的未缓存输入。
- 对应讨论：[Issue #64550](https://github.com/anomalyco/opencode/issues/64550)

### v2.3.1：超时 Shell 命令转入后台

- Shell 命令达到超时时间后不再立即终止，而是转入后台继续运行。
- 长构建和测试任务可以在超时后继续完成并回传结果。
- 前台 `timeout: 0` 现在明确表示使用默认的 **120 秒**超时。
- 相关背景：[Issue #64073](https://github.com/anomalyco/opencode/issues/64073)

### v1.19.6：Desktop 向 OpenCode 2 升级

- OpenCode Desktop 1.x 提供升级到 OpenCode 2.0 的入口。
- 新版本支持后台下载，并可选择“Restart to upgrade”“Upgrade on quit”或“Later”。
- 升级过程保留会话、项目和设置。
- 面向 OpenCode 1 的插件需要更新以适配 OpenCode 2。

---

## 社区热点 Issues

### 1. 免费额度异常问题统一反馈入口

[#59387](https://github.com/anomalyco/opencode/issues/59387)

涵盖“免费使用次数超限”“重置未生效”以及 Desktop 版本不可用等典型问题。该 Issue 获得 **390 条评论、29 个点赞**，是当日热度最高的问题之一，说明免费层配额、重置机制与错误提示仍是社区最迫切的服务体验痛点。

### 2. 向插件开放 V2 TUI Composer

[#51209](https://github.com/anomalyco/opencode/issues/51209)

V1 插件可通过 `client.tui.appendPrompt` 向编辑器追加文本，而 V2 尚无对应能力。该需求累计 **14 条评论、8 个点赞**，反映了插件生态对稳定编辑器 API 的强烈依赖，也是 OpenCode 2 保持向后兼容的重要议题。

### 3. 仅包含 reasoning 的 assistant 回合会静默结束

[#55378](https://github.com/anomalyco/opencode/issues/55378)

当模型仅返回 reasoning、没有正文或工具调用，并以 `stop` 结束时，代理会直接停止且不展示最终回复。问题可在 OpenCode 2 中复现，已有 **13 条评论、3 个点赞**。它直接关系到模型输出兼容性、代理完成判定以及回答可见性。

### 4. 恢复前台 Subagent 执行

[#64073](https://github.com/anomalyco/opencode/issues/64073)

社区希望恢复前台子代理执行方式，获得 **12 条评论、4 个点赞**。这反映出多代理并行已具备较高关注度，但用户对执行过程可观察、同步等待以及主会话交互连续性的需求仍然强烈。

### 5. 英文界面下中文会话标题字形错误

[#64543](https://github.com/anomalyco/opencode/issues/64543)

英文 UI 中，标签页和面包屑里的中文会话标题会显示错误字形，但复制内容仍然正确，说明问题集中在渲染层。该报告已有 **10 条评论**，凸显了 CJK、Unicode 字形宽度与字体回退机制在 Desktop 中的质量问题。

### 6. 模型目录缓存不刷新，新模型无法及时出现

[#64489](https://github.com/anomalyco/opencode/issues/64489)

模型目录使用缓存 Registry，报告中的缓存已陈旧约 **154.9 小时（6.5 天）**；在重启后台服务前，新发布模型不会出现在 `opencode models` 或 Desktop 模型列表中。该问题已有 **7 条评论**，直接影响新模型接入与模型发现效率。

### 7. 新数据库并发首次启动可能报 `database is locked`

[#53879](https://github.com/anomalyco/opencode/issues/53879)

两个进程同时创建新的 `opencode.db` 时，现有锁仅在进程内生效，无法进行跨进程串行化，可能导致启动失败或 `CREATE TABLE` 错误。该问题已有 **5 条评论**，暴露了 V2 数据库初始化和桌面多进程启动模型中的并发隐患。

### 8. Windows 商店版 PowerShell 在 Pipe 模式下无法启动

[#63892](https://github.com/anomalyco/opencode/issues/63892)

升级到 OpenCode 2.3.0 后，Windows Store 安装的 PowerShell 7 在 Shell 工具调用阶段即以 `0xC0070005` 失败。该问题获得 **4 条评论、3 个点赞**，反映 Shell 兼容性仍是高频回归来源。

### 9. `opencode.db` 三周膨胀至 12.7 GB，并出现大量磁盘 I/O 错误

[#64588](https://github.com/anomalyco/opencode/issues/64588)

有用户报告数据库在约三周内增长到 **12.7 GB**，并在 12 分钟内出现 **474 次 SQLite disk I/O error**，涉及会话、项目和配置查询。该 Issue 获得 **3 条评论**，但其数据规模、写入压力与 I/O 稳定性风险值得关注。

### 10. Desktop 冷重启后会话标签页丢失

[#64591](https://github.com/anomalyco/opencode/issues/64591)

Windows 冷重启后，Desktop 的会话标签栏为空，但实际会话仍保存在侧栏和数据库中。问题疑似与内置服务器注册前的标签状态清理有关，已有 **2 条评论**，显示 Desktop 的启动时序和状态恢复仍有竞态。

---

## 重要 PR 进展

### 1. Web 应用支持部署在 Base Path 下

[#64597](https://github.com/anomalyco/opencode/pull/64597)

允许 Web App 构建到指定路径前缀，例如部署在反向代理的 `https://host/opencode/` 下，提升自托管和企业代理环境下的部署灵活性。

### 2. 为 Code Mode 增加可嵌入的 Rust 实现

[#64437](https://github.com/anomalyco/opencode/pull/64437)

新增 `packages/codemode-rust`（crate：`psychoscript`），让 Rust 程序无需 Bun 或 Node 即可嵌入 Code Mode，是 Code Mode 运行时扩展的重要一步。

### 3. Rust Code Mode 按程序复杂度调度

[#64559](https://github.com/anomalyco/opencode/pull/64559)

在 Rust Code Mode 基础上，根据程序复杂度选择执行方式，不新增公开 API，主要优化执行路径和运行开销。

### 4. 插件使用期间固定 npm 缓存代际

[#62146](https://github.com/anomalyco/opencode/pull/62146)

修复 `Npm.update` 在安装后清理缓存时可能移除插件仍在使用的缓存代际的问题，减少运行中的 Git/npm 插件因缓存被回收而失效。

### 5. 让 npm 正确处理带构建步骤的 Git 插件

[#62817](https://github.com/anomalyco/opencode/pull/62817)

将真实的 npm 交给 pacote 处理 Git 依赖，使带有 `prepare` 或 `build` 生命周期脚本的插件能够正常安装，修复 `git dep preparation failed`。

### 6. Session UI 增加 Work Steps 策略

[#64596](https://github.com/anomalyco/opencode/pull/64596)

定义代理工作区何时展开或折叠，以及哪些回复保持可见，并持久化相关状态。这是 Work Steps 独立折叠功能的后续工作之一。

### 7. 修复 CLI-Rust 中 session mention 的字符边界问题

[#64390](https://github.com/anomalyco/opencode/pull/64390)

此前按字节偏移检查 `@session:` 前缀，可能落入多字节字符内部；修复后改为按字符边界处理，避免渲染异常。

### 8. 修复运行中切换 Agent 的生效时机

[#59290](https://github.com/anomalyco/opencode/pull/59290)

将 Agent 选择应用到消息实际投递边界，避免在当前回合运行中提交 Prompt 时过早切换 Agent，确保选择行为符合队列和轮次语义。

### 9. 新增 Hostlinku Provider 插件

[#64436](https://github.com/anomalyco/opencode/pull/64436)

新增内置 Hostlinku Provider 插件并完成 Provider Plugin 注册，为 OpenCode 接入该模型服务提供官方插件路径。

### 10. Windows 下原样传递 cmd 与 PowerShell 命令

[#64574](https://github.com/anomalyco/opencode/pull/64574)

修复 Windows Shell 将整条命令作为单个 argv 传递、导致引号被错误转义的问题，使 `cmd` 和 PowerShell 的实际命令文本保持原样。

---

## 功能需求趋势

1. **插件生态与开放能力**  
   社区持续要求开放 TUI Composer、编辑器追加文本等 V2 插件接口，同时关注 Git/npm 插件的安装与缓存稳定性。[#51209](https://github.com/anomalyco/opencode/issues/51209) [#62817](https://github.com/anomalyco/opencode/pull/62817) [#62146](https://github.com/anomalyco/opencode/pull/62146)

2. **多代理与前台任务控制**  
   Subagent 的前台执行、完成通知、并发调度和结果可见性是 V2 的高热度需求。[#64073](https://github.com/anomalyco/opencode/issues/64073) [#64558](https://github.com/anomalyco/opencode/issues/64558) [#59290](https://github.com/anomalyco/opencode/pull/59290)

3. **新模型与 Provider 支持**  
   GPT-6.2 缓存、OVHcloud Qwen3.8-27B、模型目录刷新以及 Hostlinku Provider，分别覆盖模型兼容性、缓存计费、模型发现和新 Provider 接入。[#64550](https://github.com/anomalyco/opencode/issues/64550) [#64416](https://github.com/anomalyco/opencode/issues/64416) [#64489](https://github.com/anomalyco/opencode/issues/64489) [#64436](https://github.com/anomalyco/opencode/pull/64436)

4. **Desktop、Web 与 TUI 一致性**  
   用户关注升级后项目/会话迁移、重启恢复、网页更新检查、Worktree 会话、CJK 文本渲染以及 TUI 快捷键冲突。[#64569](https://github.com/anomalyco/opencode/issues/64569) [#64591](https://github.com/anomalyco/opencode/issues/64591) [#64519](https://github.com/anomalyco/opencode/issues/64519) [#64543](https://github.com/anomalyco/opencode/issues/64543)

5. **部署和企业场景适配**  
   Web Base Path、自托管 Provider、内置浏览器登录态以及浏览器扩展能力，反映出团队对代理部署和 Agent 浏览器能力的需求。[#64597](https://github.com/anomalyco/opencode/pull/64597) [#63002](https://github.com/anomalyco/opencode/pull/63002)

6. **Code Mode 的运行时扩展**  
   Rust 实现和复杂度调度表明 Code Mode 正从单一脚本环境向可嵌入、多运行时的 Agent 工具平台发展。[#64437](https://github.com/anomalyco/opencode/pull/64437) [#64559](https://github.com/anomalyco/opencode/pull/64559)

---

## 开发者关注点

- **升级兼容性风险高**：历史项目、会话、标签页和迁移后的项目目录出现异常，V1→V2 数据迁移是集中痛点。[#64569](https://github.com/anomalyco/opencode/issues/64569) [#64494](https://github.com/anomalyco/opencode/issues/64494) [#64591](https://github.com/anomalyco/opencode/issues/64591)

- **数据库成为核心稳定性瓶颈**：并发初始化锁、数据库异常膨胀和大量 SQLite I/O 错误，都可能直接影响会话与项目可靠性。[#53879](https://github.com/anomalyco/opencode/issues/53879) [#64588](https://github.com/anomalyco/opencode/issues/64588)

- **模型输出协议差异需要更稳健的适配层**：reasoning-only 响应、缺少 `finish_reason`、Responses API 缓存语义变化，均要求 Provider 层进行更严格的状态归一化。[#55378](https://github.com/anomalyco/opencode/issues/55378) [#64416](https://github.com/anomalyco/opencode/issues/64416) [#64550](https://github.com/anomalyco/opencode/issues/64550)

- **Windows Shell 回归频发**：PowerShell 启动、命令参数传递和终端快捷键绑定均出现问题，跨平台测试覆盖仍需加强。[#63892](https://github.com/anomalyco/opencode/issues/63892) [#64574](https://github.com/anomalyco/opencode/pull/64574) [#64529](https://github.com/anomalyco/opencode/issues/64529)

- **长任务不应因前台超时被杀死**：v2.3.1 的后台化调整回应了构建、测试等任务对可靠执行的明确需求。[#64073](https://github.com/anomalyco/opencode/issues/64073)

- **UI 文本与国际化仍不成熟**：中文乱码、CJK 宽度计算、英文界面字形问题，以及 TUI 国际化重构，说明 Desktop/TUI 的多语言基础能力仍在建设期。[#64543](https://github.com/anomalyco/opencode/issues/64543) [#64538](https://github.com/anomalyco/opencode/issues/64538) [#64400](https://github.com/anomalyco/opencode/pull/64400)

- **用户希望“过程可见、状态可控”**：前台 Subagent、Work Steps 折叠、完成通知和上下文占用准确性，集中体现了用户对执行过程透明度的要求。[#64073](https://github.com/anomalyco/opencode/issues/64073) [#64596](https://github.com/anomalyco/opencode/pull/64596) [#64558](https://github.com/anomalyco/opencode/issues/64558) [#64488](https://github.com/anomalyco/opencode/issues/64488)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报

**日期：2026-11-18**

## 今日速览

过去 24 小时无新版本发布，jcode 社区重点集中在 **TUI 交互、Windows 输入兼容、Provider/API 适配及构建稳定性**。其中 `master` 分支因残留的已回退函数调用而无法编译，同时社区新增了 Responses API 错误透传、OpenAI-compatible Profiles 支持、Ctrl+Click 打开链接和多行粘贴展示等改进。

---

## 社区热点 Issues

### 1. `master` 无法编译：仍调用已回退的 `todos_updated`
[#2196](https://github.com/1jehuang/jcode/issues/2196)

`origin/master` 在 `e8c92f145` 构建失败：`jcode-app-core/src/server.rs` 仍引用已被回退的 `agents_status::todos_updated`。这是影响所有开发者和 CI 的高优先级阻断问题，修复 PR #2195 已同步提交。

### 2. Responses 流错误丢失 `response.failed` 的失败原因
[#2216](https://github.com/1jehuang/jcode/issues/2216)

Responses API 在 `response.failed` 事件中通过 `response.error.code` 和 `response.error.message` 提供错误原因，但解析器忽略了该路径，导致用户只能看到固定兜底文案。该问题影响错误诊断和 Provider 兼容性，修复 PR #2217 已提交。

### 3. 命名 OpenAI-compatible Profiles 无法使用 Responses API
[#2215](https://github.com/1jehuang/jcode/issues/2215)

部分 OpenAI-compatible 网关仅允许通过 `/v1/responses` 发起工具调用，而命名 Profile 始终请求 `/chat/completions`，导致携带工具的请求被拒绝。配置中虽然已有 `api = "responses"` 字段，但运行时没有真正应用，暴露出 Provider 配置与实际路由不一致的问题。

### 4. macOS 无法识别 kitty 终端
[#1125](https://github.com/1jehuang/jcode/issues/1125)

`MacTerminalKind` 缺少 kitty 类型，导致 kitty 会话被归类为 `Unknown`。结果是 Cmd+; 快捷启动及应用内创建的会话错误地打开 Apple Terminal，而不是用户当前使用的终端。这是持续时间较长的 macOS 终端识别问题，已有 2 条评论。

### 5. Windows 西里尔键盘布局下 Ctrl 快捷键全部失效
[#2214](https://github.com/1jehuang/jcode/issues/2214)

Windows 使用俄文等非拉丁键盘布局时，Ctrl+C、Ctrl+S、Ctrl+F、Ctrl+R 等基于字符匹配的快捷键无法触发，尤其会影响流式生成过程中的中断操作。该问题直接破坏 TUI 的核心交互能力。

### 6. Windows 西里尔键盘布局下快捷键失效的重复反馈
[#2212](https://github.com/1jehuang/jcode/issues/2212)

该 Issue 与 #2214 描述了相同的 Windows/Cyrillic 输入问题，进一步说明非拉丁键盘布局是稳定且影响较大的兼容性缺口。社区同时提交了相关 TUI 修复 PR #2186，表明团队正在调整键盘协议写入与解码器的匹配逻辑。

### 7. 链接在普通点击时直接打开，文本选择会误触浏览器
[#2211](https://github.com/1jehuang/jcode/issues/2211)

TUI 当前在左键普通释放时立即打开 URL，违背终端用户“普通点击用于选择文本”的习惯，选择包含链接的文本会意外启动浏览器。社区提出仅允许 Ctrl+Click 打开链接，对应修复 PR #2204。

### 8. MCP 客户端无法连接采用 2026-07-28 新规范的服务器
[#2192](https://github.com/1jehuang/jcode/issues/2192)（已关闭）

jcode 的 MCP 客户端仍主要支持旧版 `initialize` 握手和有限协议版本，缺少现代规范所需的 server/discover 探测、逐请求 `_meta` 与 MRTR 等能力。该问题已关闭，但反映出 MCP 协议演进速度较快，长期兼容性维护成本较高。

### 9. Todo/Intent 头部缺少完整、极简和隐藏三种显示模式
[#2210](https://github.com/1jehuang/jcode/issues/2210)

固定在输入框上方的 Todo/Intent 头部会在长会话中持续占用 transcript 高度。社区希望增加可持久化的 full、单行 minimal 和 hidden 三种模式，降低界面信息密度，对应实现 PR #2203。

### 10. 多行粘贴应折叠展示，并提供快捷键展开
[#2209](https://github.com/1jehuang/jcode/issues/2209)

多行粘贴在长会话中容易淹没对话内容，社区希望将其显示为带编号的折叠块，并保留展开历史及快捷键操作。相关 PR #2202 建立在 #2193 的 Windows 粘贴提交修复之上，属于用户体验改善系列需求。

---

## 重要 PR 进展

### 1. 修复 `master` 构建失败
[#2195](https://github.com/1jehuang/jcode/pull/2195)

删除对已回退 todo-plan tracker 的残留调用，直接解决 #2196。该 PR 是恢复 `master` 可编译状态的关键补丁，应优先合并。

### 2. 透传 Responses API `response.failed` 错误
[#2217](https://github.com/1jehuang/jcode/pull/2217)

从 `response.error.{message,code}` 中提取失败原因，避免所有错误都被替换为固定提示。对应 #2216，有助于提升 Provider 错误信息的可诊断性。

### 3. 修复 Windows 键盘协议写入与解码器不匹配
[#2186](https://github.com/1jehuang/jcode/pull/2186)

统一 Windows/Herdr ConPTY 下键盘协议协商与实际输入解码器，解决 kitty CSI-u 片段直接泄漏到输入框、视口变化后未正确重绘等问题，也覆盖 #2214/#2212 所描述的非拉丁布局快捷键问题。

### 4. 让命名 OpenAI-compatible Profiles 实际发送自定义 Headers
[#2187](https://github.com/1jehuang/jcode/pull/2187)

将配置中的 `headers` 应用于聊天请求和模型目录请求，解决 metadata header、自定义 User-Agent 等配置不生效的问题。

### 5. Ctrl+Click 才打开链接
[#2204](https://github.com/1jehuang/jcode/pull/2204)

将链接打开操作改为 Ctrl+Click，普通点击保留终端文本选择语义，避免选择 URL 附近文字时误启动浏览器。

### 6. 增加 Todo 头部三种显示模式
[#2203](https://github.com/1jehuang/jcode/pull/2203)

新增 full、minimal 和 hidden 三种持久化显示模式，回应长会话中 transcript 高度被持续占用的问题。

### 7. 多行粘贴以编号折叠块展示
[#2202](https://github.com/1jehuang/jcode/pull/2202)

将多行粘贴呈现为可展开的编号块，并记录展开状态历史。该 PR 是 #2193 的后续，且包含相关 Windows 构建与测试修复，合并依赖需要关注。

### 8. 接入 Herdr Desktop 的 OSC 7501 状态协议
[#2206](https://github.com/1jehuang/jcode/pull/2206)

新增 `herdr_core` 集成，使 jcode 能向 Herdr Desktop 报告 idle、working、blocked 等代理状态。修复前 Herdr Desktop 会将 jcode 窗口识别为普通终端。

### 9. 修复 Windows 多行粘贴逐行提交
[#2193](https://github.com/1jehuang/jcode/pull/2193)

针对 Windows 将粘贴内容逐字符发送、换行被编码为带 Control 修饰的 Enter 的行为，阻止一次粘贴触发多次提交。是 #2202 多行粘贴展示功能的重要前置修复。

### 10. 正确计算 Bedrock Converse 缓存上下文
[#2200](https://github.com/1jehuang/jcode/pull/2200)

统一处理 Bedrock 的未缓存输入、缓存读取和缓存写入计数，避免大上下文命中缓存时仍只报告部分 token。对应 #2198，可改善上下文窗口使用和配额判断的准确性。

### 其他值得关注的 PR

- [#2213](https://github.com/1jehuang/jcode/pull/2213)：确保 throttle marker 写入非空 payload，使 mtime 能正常推进。
- [#1945](https://github.com/1jehuang/jcode/pull/1945)：支持 Claude Code skill 的 `disable-model-invocation` frontmatter，使禁模型调用的技能不再暴露给模型。
- [#2159](https://github.com/1jehuang/jcode/pull/2159)：改进 OpenAI-compatible Profile 的 reasoning 往返，并使能力判断不依赖模型 ID。
- [#2164](https://github.com/1jehuang/jcode/pull/2164)：增加可配置的“复制最近一条 assistant 回答”快捷键。
- [#2166](https://github.com/1jehuang/jcode/pull/2166)：新增 `jcode session export`，将会话中的用户与助手对话导出为 Markdown。
- [#2199](https://github.com/1jehuang/jcode/pull/2199)：恢复 rustfmt 清洁状态，使 Format CI gate 可通过。

---

## 功能需求趋势

### 1. TUI 信息密度与交互效率

社区持续关注长会话中的界面占用和操作效率，主要需求包括：

- Todo/Intent 头部支持完整、单行和隐藏模式；
- 多行粘贴折叠展示并支持展开；
- 链接遵循 Ctrl+Click 等终端惯例；
- 可配置快捷键复制最近一条 assistant 回答。

相关链接：[#2210](https://github.com/1jehuang/jcode/issues/2210)、[#2209](https://github.com/1jehuang/jcode/issues/2209)、[#2211](https://github.com/1jehuang/jcode/issues/2211)、[#2164](https://github.com/1jehuang/jcode/pull/2164)

### 2. Provider、模型与协议兼容

Provider 适配仍是社区高频方向：

- 命名 OpenAI-compatible Profiles 支持 Responses API；
- 正确处理 Responses API 的失败事件；
- 自定义 Headers 真正生效；
- OpenAI-compatible reasoning 信息可往返；
- Alibaba 模型刷新后 Qwen4 缺失，并区分 Coding Plan 与 Token Plan；
- MCP 跟进 2026-07-28 新规范。

相关链接：[#2215](https://github.com/1jehuang/jcode/issues/2215)、[#2216](https://github.com/1jehuang/jcode/issues/2216)、[#2201](https://github.com/1jehuang/jcode/issues/2201)、[#2192](https://github.com/1jehuang/jcode/issues/2192)

### 3. Windows 与多语言键盘兼容性

Windows 下的终端输入行为是当前最明显的用户体验阻断点之一，包括：

- 西里尔等非拉丁布局下 Ctrl+快捷键失效；
- 粘贴内容被逐行提交；
- kitty 键盘协议与解码器不匹配；
- 输入框出现原始 CSI-u 字符。

相关链接：[#2214](https://github.com/1jehuang/jcode/issues/2214)、[#2212](https://github.com/1jehuang/jcode/issues/2212)、[#2186](https://github.com/1jehuang/jcode/pull/2186)、[#2193](https://github.com/1jehuang/jcode/pull/2193)

### 4. IDE/桌面代理集成与状态可见性

Herdr Desktop 的 OSC 7501 集成说明社区希望 jcode 能像 Claude Code、Codex 一样被桌面代理环境识别，并准确报告工作状态。同时，Session Picker 中 jcode、kcode 与 OpenCode 的标识混淆，也反映了多 harness 环境下的来源识别需求。

相关链接：[#2205](https://github.com/1jehuang/jcode/issues/2205)、[#2206](https://github.com/1jehuang/jcode/pull/2206)、[#2207](https://github.com/1jehuang/jcode/issues/2207)

### 5. 会话管理与可移植性

社区希望加强会话管理，包括明确区分 jcode、kcode 和 OpenCode 会话，以及将会话中的用户和助手轮次导出为 Markdown。这反映出 jcode 正逐步形成更完整的会话生命周期和跨工具工作流。

相关链接：[#2207](https://github.com/1jehuang/jcode/issues/2207)、[#2166](https://github.com/1jehuang/jcode/pull/2166)

### 6. 上下文与缓存计量准确性

Bedrock 缓存命中未计入上下文的问题受到关注。开发者不只在意 token 总量，也希望界面、配额和上下文窗口判断能够准确区分未缓存输入、缓存读取与缓存写入。

相关链接：[#2198](https://github.com/1jehuang/jcode/issues/2198)、[#2200](https://github.com/1jehuang/jcode/pull/2200)

### 7. 仓库治理与贡献流程

在分支和 PR 数量显著增长后，社区提出冻结新 lane、规范 PR drain 顺序、定义行为验证标准并评估 churn。该方向表明项目下一阶段的瓶颈已不仅是功能开发，也包括合并效率和协作治理。

相关链接：[#2208](https://github.com/1jehuang/jcode/issues/2208)、[#2197](https://github.com/1jehuang/jcode/pull/2197)

---

## 开发者关注点

1. **构建基线必须稳定。** `master` 无法编译会直接阻断所有 PR 验证，说明回退清理和 CI 保护需要加强。
2. **错误信息必须可诊断。** Provider 只显示通用兜底错误会掩盖真实故障；社区期待保留上游返回的 code、message 和协议差异。
3. **配置项应真正影响运行时。** `api`、`headers` 等字段存在于配置模型但被忽略，容易造成用户误判和网关兼容问题。
4. **跨平台终端输入不能只按 ASCII 假设设计。** Windows 非拉丁布局、ConPTY、粘贴编码和 kitty 键盘协议之间存在复杂组合，需要专门测试覆盖。
5. **TUI 应遵循终端既有习惯。** 普通点击用于文本选择、链接使用修饰键打开，是影响专业用户体验的重要细节。
6. **长会话应控制界面噪声。** Todo 头部和大型粘贴块需要可折叠、可隐藏，避免压缩实际对话空间。
7. **上下文统计必须覆盖缓存语义。** 仅统计未缓存输入会低估真实上下文占用，影响模型调用窗口和成本判断。
8. **多 Provider/MCP 环境需要明确标识。** 会话来源、harness 类型及协议版本不能混用，否则会导致错误路由和状态展示。
9. **仓库需要从“功能并行”转向“可控收敛”。** 大量未合并分支、堆叠 PR 和重复 Issue 增加了审查与验证成本，应优先合并阻断性修复，再处理 UX 功能。
10. **用户需要可导出的工作成果。** Markdown 会话导出和快捷复制回答等需求，表明 jcode 正在加强与日常开发、记录和知识沉淀工作流的衔接。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-18

## 1. 今日速览

过去 24 小时无新版本发布，社区主要围绕 **Windows 兼容性、会话可靠性、模型提供方接入与缓存统计** 展开。多个高关注问题已关闭或进入修复阶段，包括 codemode 取消读取导致进程崩溃、恢复会话丢失内置工具、会话分支错乱，以及终端恢复和输入光标闪烁等 TUI 问题。

---

## 3. 社区热点 Issues

> 以下按技术影响、讨论热度与近期修复进展精选 10 条。

### 1. Windows 使用体验与兼容性问题征集

- **Issue**：[#7547 — How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)
- **重要性**：Windows 是当前最集中的平台兼容讨论区，涉及启动方式、路径、终端行为、npm 安装和外部工具集成等基础体验。
- **社区反应**：以 97 条评论成为本周期讨论最热 Issue；多数反馈集中在不同 Windows 环境下行为不一致，以及核心功能与扩展支持边界不清。
- **趋势**：社区希望明确 Pi 官方支持的 Windows 运行路径，并将 shell、路径和终端差异从核心代码中解耦。

### 2. ChatGPT 登录后 GPT-6.1 Sol 上下文窗口仍显示 272K

- **Issue**：[#11021 — ChatGPT sign-in still uses 272K for GPT-6.1 Sol despite 500K account catalog](https://github.com/earendil-works/pi/issues/11021)
- **重要性**：模型目录宣称 500K，但 Pi 实际只按 272K 预算运行，直接影响可用上下文、压缩频率和长会话成本。
- **社区反应**：15 条评论、8 个赞，问题获得较高认可。
- **影响**：认证方式与模型能力元数据之间可能存在同步或映射缺口，尤其影响 ChatGPT Sign-in 路径。

### 3. 恢复截断会话后所有内置工具消失

- **Issue**：[#11460 — Resume drops all built-in tools when the session branch is truncated](https://github.com/earendil-works/pi/issues/11460)
- **重要性**：磁盘写入触发 ENOSPC 并形成孤立 `parentId` 后，恢复会话可能无法继续调用内置工具，属于会话恢复的 P0 级数据一致性故障。
- **社区反应**：6 条评论；Issue 已关闭，标签显示已有可用修复。
- **影响范围**：Windows、扩展会话以及包含多个自定义 `defaultTools` 的配置尤其容易暴露问题。

### 4. 同一会话被多个 Pi 实例打开时产生错误分支

- **Issue**：[#12266 — An idle second Pi instance appends with a stale leaf](https://github.com/earendil-works/pi/issues/12266)
- **重要性**：两个进程加载同一会话后，空闲实例仍保留旧 `leafId`；后续写入会从陈旧节点分叉，导致恢复时进入错误或空分支。
- **社区反应**：5 条评论，问题已关闭。
- **影响范围**：多代理并行、编辑器重复打开会话、多个终端同时操作同一项目均可能触发。

### 5. codemode 取消并发读取时 Pi 因未处理 AbortError 崩溃

- **Issue**：[#12271 — Pi crashes when a codemode script fails while a read is pending](https://github.com/earendil-works/pi/issues/12271)
- **重要性**：并发 `tools.read()` 中任一路径失败时，其他读取被取消，未处理的 `AbortError` 可直接终止整个进程。
- **社区反应**：短时间内出现多个独立复现，包括 [#12253](https://github.com/earendil-works/pi/issues/12253)；相关历史问题 [#11956](https://github.com/earendil-works/pi/issues/11956) 也已关闭。
- **影响范围**：并行文件读取、批量代码修改及任何使用 `Promise.all` 的 codemode 脚本。

### 6. llama.cpp 登录连接配置无法跨会话持久化

- **Issue**：[#12096 — /login llama.cpp connection store doesn't persist across sessions](https://github.com/earendil-works/pi/issues/12096)
- **重要性**：当前只保存连接、不持久化模型和选择状态，用户每次启动都需要重新加载并选择模型，削弱本地模型工作流。
- **社区反应**：5 条评论，问题仍开放。
- **影响范围**：本地或自托管 llama.cpp 用户的日常使用成本较高。

### 7. Vertex 流式请求缺少超时配置，且部分中断未被判定为可重试

- **Issue**：[#12070 — Wire stream timeoutMs on google-vertex and classify mid-stream ECONNRESET/timeout aborts as retryable](https://github.com/earendil-works/pi/issues/12070)
- **重要性**：请求可能无限挂起，或在 `ECONNRESET`、超时后直接失败而不进入重试机制，影响长时代理任务的稳定性。
- **社区反应**：4 条评论，问题仍开放。
- **影响范围**：Vertex AI 流式响应、多轮编码代理评估及不稳定网络环境。

### 8. SDK 使用自定义 `agentDir` 时登录状态仍显示全局凭据路径

- **Issue**：[#9537 — /login status line reports the global auth.json path when a custom agentDir is in use](https://github.com/earendil-works/pi/issues/9537)
- **重要性**：实际凭据写入自定义目录，但状态栏展示全局路径，容易误导用户并造成凭据管理或排障判断错误。
- **社区反应**：4 条评论，问题仍开放。
- **影响范围**：嵌入式 SDK、多代理隔离部署及自定义工作目录场景。

### 9. OpenAI Decisions GA 缓存用量统计被归零

- **Issue**：[#12264 — OpenAI Decisions drops GA cache usage and uses zero cache rates](https://github.com/earendil-works/pi/issues/12264)
- **重要性**：`parseClassifierUsage()` 将缓存读写计数置零，导致成本估算、缓存命中率和会话统计失真。
- **社区反应**：3 条评论，问题已关闭。
- **影响范围**：所有使用 OpenAI Decisions GA 的会话，可能低估缓存收益并高估实际成本。

### 10. npm 新发布的 pi-package 无法被搜索索引

- **Issue**：[#7885 — npm search not indexing newly published pi-packages](https://github.com/earendil-works/pi/issues/7885)
- **重要性**：新包即使已发布且带有正确关键词，也无法通过 npm 搜索进入 pi.dev 包画廊，影响扩展发现和分发。
- **社区反应**：17 条评论、1 个赞，问题已关闭。
- **影响范围**：所有依赖 pi.dev 包目录发现新扩展的用户与包作者。

---

## 4. 重要 PR 进展

> 当前共 8 个 PR 在过去 24 小时内更新，以下选取其中较有代表性的 10 项说明；其中部分已关闭，但反映了近期集中开发方向。

### 1. 交互式 `/reload` 刷新作用域模型

- **PR**：[#12278 — Refresh scoped models on interactive reload](https://github.com/earendil-works/pi/pull/12278)
- **进展**：开放中，修复 #12277。
- **内容**：调整 `enabledModels` 后执行 `/reload` 即可刷新作用域模型，无需重启 Pi；启动时传入的 `--models` 仍保持更高优先级。

### 2. 新增多家云端与自托管模型提供方

- **PR**：[#11370 — Add DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun providers](https://github.com/earendil-works/pi/pull/11370)
- **进展**：开放中，为堆叠 PR。
- **内容**：扩展 `pi-ai` 与 coding-agent 支持，新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow 和 StepFun 等提供方，继续扩大模型后端覆盖。

### 3. 压缩期间延迟发送消息，避免基于未压缩分支运行

- **PR**：[#12028 — Defer sendMessage triggerTurn until compaction ends](https://github.com/earendil-works/pi/pull/12028)
- **进展**：开放中，关联 #10982。
- **内容**：当 `pi.sendMessage(..., { triggerTurn: true })` 遇到手动压缩进行中时，不再立即启动代理运行，而是等待压缩结束，防止使用旧分支。

### 4. 边界草稿触发压缩时发出 `session_compact`

- **PR**：[#12262 — Emit session_compact for boundary-draft compactions](https://github.com/earendil-works/pi/pull/12262)
- **进展**：已关闭。
- **内容**：扩展在 `turn_end` 或 `agent_before_settle` 阶段提交 compaction entry 后，除 `entry_appended` 外同步触发 `session_compact`，使扩展能正确感知压缩事件。

### 5. 修复作用域 Skill 冲突诊断

- **PR**：[#12256 — Fix scoped skill collision diagnostics](https://github.com/earendil-works/pi/pull/12256)
- **进展**：已关闭。
- **内容**：当资源优先级已能确定唯一胜者时，不再发出 Skill 冲突警告；仅保留真正同级、结果不确定的冲突诊断，减少预期覆盖造成的警告噪声。

### 6. 停止 TUI 因可变工具行反复重绘滚动历史

- **PR**：[#12275 — Stop repeated scrollback redraws from mutable tool rows](https://github.com/earendil-works/pi/pull/12275)
- **进展**：已关闭。
- **内容**：优化长回复或工具结果滚动出视口后的渲染策略，减少不必要的全屏 scrollback 重绘，降低终端闪烁与渲染开销。

### 7. 避免流式输出期间输入光标闪烁

- **PR**：[#12274 — Avoid input cursor flicker during streaming](https://github.com/earendil-works/pi/pull/12274)
- **进展**：已关闭。
- **内容**：减少流式响应和 footer 更新时的高频光标可见性切换，缓解输入光标“频闪”及流式输出期间的打字体验问题。

### 8. 为 Pi Agent 源码添加学习注释

- **PR**：[#12276 — Annotate Pi agent source code for learning](https://github.com/earendil-works/pi/pull/12276)
- **进展**：已关闭。
- **内容**：作者说明该 PR 误开，相关注释仅用于个人学习分支，不代表上游正式变更。

---

## 5. 功能需求趋势

### 模型与提供方扩展

- 增加 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun 等提供方支持。
- 社区持续请求 Sarvam AI Token Factory 等新模型渠道，并要求正确展示模型列表、访问权限和默认模型。
- Qwen 模型目录需要及时同步，例如 `qwen4-max` 与 `qwen4-max-preview` 缺失问题（[#12259](https://github.com/earendil-works/pi/issues/12259)）。
- 需支持更完整的 thinking effort 层级，包括 `xhigh`、`max` 和部分网关提供的 `ultra`（[#12267](https://github.com/earendil-works/pi/issues/12267)）。

### 成本、缓存与上下文管理

- 修复 OpenAI、OpenAI Codex、Google Gemini 等提供方的缓存计数和上下文窗口识别。
- 社区希望提供可固定 compaction 模型的配置，以使用更便宜的模型完成历史压缩（[#12260](https://github.com/earendil-works/pi/issues/12260)）。
- 路由或虚拟模型场景下，需要正确应用 `compaction.modelOverrides`（[#12265](https://github.com/earendil-works/pi/issues/12265)）。
- 更改 thinking level 会破坏 prompt cache 连续性，开发者希望保留缓存收益（[#12269](https://github.com/earendil-works/pi/issues/12269)）。

### Windows、终端与跨平台体验

- Windows 仍是最高频反馈来源，核心诉求包括统一运行方式、路径处理、终端恢复、npm 安装和 shell 集成。
- SIGTSTP 后未恢复终端状态、鼠标转义序列泄漏到 shell、外部编辑器假死等问题受到关注。
- Windows mintty 环境下颜色查询响应可能被误当作用户输入，并触发不可见编辑器（[#12254](https://github.com/earendil-works/pi/issues/12254)）。

### 会话、压缩与扩展 API

- 多进程共享会话时需要并发控制、文件锁或基于最新文件尾部的安全追加机制。
- 扩展提交压缩事件时需要完整、统一的生命周期通知。
- 未注册工具调用不应静默挂起代理轮次，应返回明确的“工具不存在”结果（[#12261](https://github.com/earendil-works/pi/issues/12261)）。
- Skill 冲突诊断应遵循明确的优先级规则，减少可预期覆盖产生的噪声。

### 包管理与扩展发现

- 项目共享的 `.pi/npm` 前缀缺少安装锁，并发 `npm install` 可能发生竞争（[#10798](https://github.com/earendil-works/pi/issues/10798)）。
- pi.dev 包画廊依赖 npm 搜索，新包索引延迟会直接影响扩展曝光和分发。

---

## 6. 开发者关注点

1. **会话可靠性是当前最高优先级**  
   开发者在关注断电、ENOSPC、压缩、并发进程和恢复流程下，会话树是否保持一致。相关故障不仅会丢失上下文，还可能导致内置工具失效或恢复到错误分支。

2. **异步取消必须被安全吸收**  
   codemode 并发读取异常反复演变为进程级崩溃。开发者期待工具取消、网络中断和超时只终止对应请求，并进入可恢复的重试或错误路径。

3. **模型元数据必须与实际后端保持同步**  
   上下文窗口、缓存计数、thinking level、模型列表和登录能力存在明显偏差，影响代理行为与成本判断，不能仅依赖静态目录。

4. **缓存与压缩直接影响长会话成本**  
   社区不仅关注上下文长度，也关注缓存命中率、压缩模型选择、压缩期间消息排队，以及切换推理档位是否破坏缓存前缀。

5. **Windows 与终端状态管理仍是易碎点**  
   TUI 在 SIGTSTP、流式输出、颜色查询、鼠标跟踪和外部编辑器等场景下暴露出终端恢复与输入隔离问题。

6. **扩展生态需要更稳定的安装与发现机制**  
   并发 npm 安装缺少锁，npm 搜索又无法及时索引新包，分别影响本地稳定性和公开展示。

7. **SDK 与自定义目录的边界需要更清晰**  
   自定义 `agentDir` 下登录提示仍指向全局路径，说明凭据路径、状态输出和实际配置之间尚未完全统一。

8. **错误处理需要一致、可自动化判断**  
   JSON 模式在代理报错后仍返回退出码 0 的问题受到关注（[#12208](https://github.com/earendil-works/pi/issues/12208)）。对于脚本和 CI 调用者而言，退出码与错误事件应保持一致。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
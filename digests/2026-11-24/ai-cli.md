# AI CLI 工具社区动态日报 2026-11-24

> 生成时间: 2026-11-24 09:19 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-24**  
**覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、jcode、pi**

---

## 1. 生态全景

当前 AI CLI 正从“模型与命令调用工具”快速演进为具备**会话管理、多代理编排、浏览器自动化、MCP 扩展、沙箱权限和企业治理能力的 Agent 工作平台**。今日最突出的信号不是功能数量增长，而是**升级回归、会话恢复、权限状态可信度、Provider 协议兼容和自动化超时**成为共同痛点。与此同时，Claude Code 与 OpenAI Codex 扩展企业云平台覆盖，Gemini CLI 补齐 A2A 安全认证，OpenCode 加固桌面浏览器，pi 推进长上下文治理，说明生态已进入“规模化工程落地”阶段。Kimi Code CLI 过去 24 小时无活动，jcode 则仍处于较早期的工程打磨期。

---

## 2. 各工具活跃度对比

> 说明：Issue、PR 数量以各日报披露的过去 24 小时更新量为依据；Kimi Code CLI 无活动。

| 工具 | 今日 Issues | 今日 PR | Release 情况 | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 50 | 2 | `v2.1.331` | 高 |
| **OpenAI Codex** | 10 | 10+ | `rust-v0.172.0`，另有多个 Alpha | 高 |
| **Gemini CLI** | 10 | 10+ | `v0.71.1`、`v0.72.0-preview.0`、Nightly | 高 |
| **GitHub Copilot CLI** | 26 | 1 | `v1.0.115-8` | 高 |
| **OpenCode** | 10 | 10+ | `v2.4.0`、`v2.4.1` | 高 |
| **jcode** | 4 | 10+ | 无 | 中低 |
| **pi** | 10 | 10+ | 无 | 高 |
| **Kimi Code CLI** | 0 | 0 | 无 | 低/静默 |

### 数据解读

- **Claude Code** 今日 Issue 更新最多，但有效 PR 信息仅 2 条，说明反馈量显著领先于公开工程产出可见度。
- **Codex、Gemini CLI、OpenCode、pi、jcode** 均披露至少 10 条 PR，工程迭代密度较高，但其中不少 PR 为关闭状态，需区分“已合并”“已关闭”和“未合并”。
- **Copilot CLI** 有 26 条 Issue、仅 1 条 PR，呈现明显的“存量问题集中暴露、修复尚未充分跟上”特征。
- **OpenCode** 同日发布两个版本，发布频繁，但 v2.4.1 发布当天即出现 Ubuntu 升级失败，显示快速迭代伴随较高回归风险。

---

## 3. 共同关注的功能方向

### 3.1 MCP 成为最集中的生态集成层

多个工具的故障已从“能否连接 MCP”升级为协议一致性、身份管理和生命周期治理：

| 工具 | 核心诉求 |
|---|---|
| **Claude Code** | Code Mode 扩展到 Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 AWS Claude Platform；企业关注 OIDC 组映射及组织级治理 |
| **Codex** | MCP 文本结果去重、逐请求认证、短期令牌刷新、Code Mode Host 生命周期管理 |
| **Gemini CLI** | OAuth Discovery 请求超时、工具数量超过阈值触发 HTTP 400、扩展安装授权覆盖 Hooks 与 Context Files |
| **Copilot CLI** | OAuth 静默刷新、MCP Tasks 声明与实际行为不一致、stdio MCP 丢失、Windows MCP 锁冲突 |
| **OpenCode** | Standalone 模式随机不注册 stdio MCP、OAuth RFC 8707 `resource` 参数兼容、插件 Automation 创建死锁 |
| **jcode** | MCP、Skill、Hook 与 Agent 定义标准化，扩展项目级配置和策略治理 |

**判断：** MCP 已成为 AI CLI 的事实标准插件层，但当前瓶颈集中在 OAuth、协议协商、工具裁剪、跨进程锁和服务生命周期，而不是基础连通性。

---

### 3.2 会话恢复、压缩与上下文生命周期

- **Claude Code**：转录 JSONL 缺字、`/clear` 未重置会话名、Idle compaction 失效、恢复后的子代理回复路由错误。
- **Codex**：TUI 模型选择器按当前线程 Provider 展示、工作区类型上报、恢复会话模型目录准确性。
- **Gemini CLI**：压缩摘要膨胀、超时、上下文溢出提示、搜索结果总量限制。
- **Copilot CLI**：崩溃残留的 `inuse.<pid>.lock` 阻止会话恢复。
- **OpenCode**：会话目录恢复、TUI 排队消息残留、桌面历史重读导致阅读位置跳动。
- **pi**：Codex WebSocket 续传破坏上下文、压缩摘要从 17k 膨胀至 164k、恢复会话后工具不可用。

**判断：** 长会话能力正在成为生产级 AI CLI 的核心分水岭。竞争重点已从单轮回答质量转向：**不丢状态、不丢上下文、不丢路由、可审计、可恢复**。

---

### 3.3 权限、沙箱与企业安全治理

| 工具 | 重点问题 |
|---|---|
| **Claude Code** | User-Agent 默认携带邮箱引发隐私争议；企业要求组织级 OTLP 内容采集策略 |
| **Codex** | macOS “Full access”显示与实际权限不一致；沙箱事件持久化、Guardian 审查与插件签名验证 |
| **Gemini CLI** | A2A Server 强制 Bearer Token；扩展更新需重新确认 Hooks/Context Files 变化 |
| **Copilot CLI** | 扩展工具权限请求永久等待；Windows 提权与普通会话混用导致 MCP 全面启动失败 |
| **OpenCode** | Worktree 默认策略、插件能力和会话工具权限仍在演进 |
| **jcode** | Agent 模型、effort 和工具权限由 Operator Policy 强制应用 |

**共同方向：** 权限配置必须在**界面、执行运行时、扩展与审计记录**之间保持一致；企业采用门槛正从“能否限制”转向“能否集中下发、验证和追责”。

---

### 3.4 多代理与并发工作区协作

- **Claude Code**：恢复后的嵌套子代理向错误会话发送回复。
- **Codex**：社区要求跨聊天、跨代理并发写入时自动使用 worktree、文件锁和变更协调。
- **Gemini CLI**：自定义 Subagents 主动发现不足，依赖文件型任务清单降低上下文压力。
- **OpenCode**：插件可在 setup 阶段创建 Automation，并计划增加会话级工具调用。
- **jcode**：Agent definition files、Swarm Spawn 指定 Agent、Hook 生命周期和 Worker 身份。
- **pi**：虚拟模型上下文窗口误判、恢复会话后工具状态不一致。

**判断：** 多代理已从“能创建角色”进入“能隔离状态、调度资源、恢复任务和协调文件写入”的阶段。**共享工作区中的并发写入冲突**是下一阶段最关键的基础设施问题。

---

### 3.5 浏览器与 Computer Use 可靠性

- **Codex**：Windows 升级后 `@Browser` 宿主不可用；macOS 内置浏览器升级后丢失密码、Cookie 和扩展。
- **Gemini CLI**：Browser Agent 忽略 `settings.json`、Wayland 失败、Profile 锁无法接管。
- **OpenCode**：桌面端加入内置浏览器，并尝试导入各主流浏览器的登录状态与历史。
- **Claude Code**：MCP 工具在压缩后消失、Computer Use 相关会话路由问题。

**判断：** 浏览器 Agent 的主要竞争维度正在变成**登录状态迁移、Profile 生命周期、跨平台支持和失败恢复**，而不是单纯的网页操作能力。

---

### 3.6 Provider 协议兼容、限流与重试

- **Codex**：模型目录通过 WebSocket ETag 同步；扩展逐请求认证。
- **OpenCode**：Gemini 429 按服务端延迟重试；ChatGPT/Codex 共享限额误判；Copilot Response ID 重放修复。
- **pi**：Gemini `xhigh` 推理等级、Codex 续传、流式 `finish_reason: error`、OpenAI 429 `slow_down` 重试。
- **jcode**：非配额 Provider 冷却后无法恢复重试、API Key 池和 Session 级固定。
- **Gemini CLI**：Provider 无关性尚未完全建立，大量适配仍由各项目分别维护。

**判断：** 多 Provider 抽象层正在暴露关键难点：统一的错误分类、服务端限流语义、模型能力目录、OAuth 生命周期和上下文续传标识。若这些语义不统一，Provider 越多，Agent 的可靠性反而越差。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术与生态路线 |
|---|---|---|---|
| **Claude Code** | 终端 Agent、Code Mode、企业身份接入、长上下文与多代理 | 大型工程团队、企业开发环境 | Anthropic 官方模型优先，同时扩大 Bedrock、Google Cloud、Microsoft Foundry、AWS 承载；强调 OIDC、企业遥测及细粒度治理 |
| **OpenAI Codex** | Rust CLI/TUI、桌面端、浏览器、MCP、插件和自动化 | OpenAI 生态用户、桌面及服务端开发者 | Rust 核心、TUI/Desktop 双入口；近期重点是 MCP 身份、插件供应链、沙箱审计、Guardian 审批和 Provider 路由 |
| **Gemini CLI** | 多代理、浏览器 Agent、扩展体系、A2A 和 Eval | Gemini 用户、Agent 开发者、研究型团队 | 强依赖 Google 模型与生态，同时发展 A2A、Skills、Subagents、AST 工具和扩展安全机制；工程重点是任务终止语义和超时治理 |
| **Copilot CLI** | GitHub 工作流、MCP、ACP、自定义 Agent 和企业集成 | GitHub 开发者、团队自动化用户 | 与 GitHub 账户、扩展和企业策略深度绑定；当前重点是 MCP 协议一致性、非交互模式和会话恢复，而非模型能力扩张 |
| **OpenCode** | Provider 无关、桌面 IDE 化、浏览器、多插件与 Automation | 多模型用户、希望掌控 Provider 的个人开发者 | 快速版本迭代和广 Provider 接入；桌面端向 IDE 演进，插件可扩展会话与 Automation |
| **jcode** | Agent、Skill、Hook、Swarm、Operator Policy 和 API Key 池 | 平台型开发者、自建 Agent 基础设施团队 | 采用集中式策略和可扩展 Agent 定义；仍偏工程化建设期，强调 Provider 隔离、后台任务生命周期和 Hook 架构拆分 |
| **pi** | 嵌入式 Agent、扩展系统、RPC、多模型与长会话控制 | SDK 开发者、工具作者、复杂 Agent 实验者 | 强调轻量扩展、结构化错误、会话持久化和多 Provider 兼容；近期集中解决流式处理、上下文压缩和恢复一致性 |
| **Kimi Code CLI** | 今日无足够数据 | 暂无法判断 | 过去 24 小时无活动，暂不能据此判断路线变化或项目健康度 |

### 定位差异总结

- **最强企业平台化方向：** Claude Code、Codex。
- **最明显的 Google/多代理实验方向：** Gemini CLI。
- **最强 GitHub 工作流绑定：** Copilot CLI。
- **最强调 Provider 自由与桌面 IDE 化：** OpenCode。
- **最偏底层 Agent 基础设施和可控扩展：** pi、jcode。
- **最需要先解决发布质量与基础稳定性：** Copilot CLI、OpenCode；Gemini CLI、Codex 也存在明显桌面端升级回归。

---

## 5. 社区热度与成熟度

### 5.1 社区热度

**第一梯队：Claude Code、Codex**

- Claude Code 今日更新 50 条 Issue，User-Agent 隐私 Issue 达 **811 个赞、124 条评论**，是全部工具中最高热度。
- Codex 每个重点 Issue 普遍达到 **24–59 条评论**，并持续输出 10 条以上重要 PR，工程节奏强。
- 两者都具备大规模平台化开发流量。

**第二梯队：OpenCode、Gemini CLI、Copilot CLI**

- OpenCode 的 AI 消息回退/分支需求评论与点赞均居当日首位；同期连续发布两个版本。
- Gemini CLI 出现高密度安全 PR 和 P1 可靠性修复，并开始建立 Agent 评估与子代理可观测性体系。
- Copilot CLI 单日 26 条 Issue，MCP 和会话故障集中，说明已进入企业试用但基础契约仍需收敛。

**第三梯队：pi、jcode**

- pi 的 Issue 数量和 PR 数量均较高，尤其长会话、Provider 兼容与压缩问题受到深入技术讨论。
- jcode 今日仅 4 条 Issue 且暂无互动，但 PR 数量较多，呈现“维护者集中修复、内部工程化推进”的特征。

**静默期：Kimi Code CLI**

- 无活动不等同于项目停滞，但本日无法评估其活跃度、版本节奏或社区响应。

### 5.2 成熟度判断

| 成熟度层级 | 工具 | 原因 |
|---|---|---|
| **较高，但回归风险显著** | Claude Code、Codex | 功能广、企业接入深、工程节奏强；同时会话、权限、跨平台问题复杂 |
| **中高，仍在快速收敛** | Gemini CLI、OpenCode | 扩展与多代理能力强，安全和协议治理进步明显，但新版本回归较多 |
| **中高，工程基础待补齐** | Copilot CLI | GitHub 生态优势明显，但 MCP、权限、ACP、会话恢复存在系统性缺口 |
| **中等，快速迭代** | pi | 底层设计灵活，协议适配丰富；长上下文和 Provider 兼容仍在快速修补 |
| **中早期** | jcode | 架构扩展方向清晰，但社区规模、反馈和发布活动较弱 |
| **数据不足** | Kimi Code CLI | 当日无活动，无法评估 |

> 这里的“成熟度”主要依据公开工程活动和问题暴露类型推断，不等同于产品质量评级。

---

## 6. 值得关注的趋势信号

### 趋势一：竞争中心从“模型能力”转向“Agent 运行时可靠性”

几乎所有活跃工具都在处理超时、锁、重试、恢复、状态持久化和路由错误。对技术决策者而言，评估 AI CLI 时应重点加入：

- 崩溃后能否恢复会话；
- 工具调用是否有明确超时；
- 限额或 Provider 故障后能否继续任务；
- 子代理状态是否可追踪；
- 失败是否会被错误报告为成功。

### 趋势二：MCP 生态进入“身份与治理”阶段

OAuth 静默刷新、逐请求认证、组织级策略和插件签名验证正在成为标配。仅验证“能否连接 MCP”已不足以评估工具，至少应覆盖：

- Token 过期自动续期；
- 无效 schema 容错；
- MCP Tasks 参数协商；
- Windows/多进程锁；
- 短期凭据动态注入；
- 插件和扩展供应链签名。

### 趋势三：长会话治理将直接决定单位任务成本

Claude Code 的 Idle compaction 失效、pi 的压缩摘要膨胀、Codex 的上下文及模型目录同步问题表明，长会话不仅是“上下文窗口”问题，还包括：

- 压缩是否及时；
- 摘要是否膨胀；
- 缓存是否命中；
- 恢复后工具和推理参数是否一致；
- 限额后上下文能否导出。

未来工具选型应使用**单位任务总 Token、压缩耗时、缓存命中率和恢复成功率**，而不是只比较模型榜单。

### 趋势四：浏览器 Agent 的最大壁垒是状态迁移与恢复

内置浏览器、登录状态导入、Profile 锁、Wayland 和扩展兼容问题表明，浏览器自动化的难点已从“点击网页”转向：

- 凭据和 Cookie 是否跨版本保留；
- Profile 被锁后能否接管；
- 升级后自动化是否继续工作；
- 浏览器宿主与 CLI/桌面端是否稳定联动。

### 趋势五：多代理的下一战场是共享文件系统治理

Claude Code、Codex 和 jcode 都指向同一问题：多个代理并行修改代码时，需要 worktree、锁、分支协调、恢复路由和变更合并。没有这些机制，多代理只会放大冲突和审计难度。

### 趋势六：权限界面必须与实际执行状态一致

Codex 的 Full access 状态不一致、Claude Code 的隐私默认值争议、Copilot CLI 的权限请求永久等待说明，用户信任正在下降。企业部署应要求：

- UI、配置、运行时和审计日志使用同一权限状态源；
- 外部请求默认不携带个人身份信息；
- 自动化权限请求必须允许、拒绝或超时，不能无限等待；
- 扩展权限变更需披露 Hooks、Context Files 等全部行为。

### 趋势七：Provider 抽象层必须升级为“语义适配层”

不同 Provider 在限流、重试、模型窗口、推理等级和续传标识上的差异，已经成为多模型 CLI 的主要故障源。未来的统一适配层应标准化：

- 可重试错误与不可重试错误；
- 429 的等待时间；
- 模型推理等级；
- 上下文窗口；
- 会话续传标识；
- OAuth 与短期凭据；
- 模型目录刷新。

### 趋势八：快速发布必须与升级回归门禁同步

OpenCode v2.4.1 发布当天出现 Ubuntu 升级失败，Codex 和 Copilot CLI 也集中出现桌面端或协议回归。建议团队在自建 AI CLI 工具链中采用：

- 稳定版至少覆盖 Windows、macOS、Linux 和 WSL；
- 发布前验证升级路径，而不只验证全新安装；
- 对 MCP、OAuth、桌面端、浏览器和会话恢复建立专项回归集；
- 对 Provider 429、5xx、流式中断和锁残留进行故障注入测试。

---

## 结论与选型建议

- **大型企业工程团队**：优先评估 Claude Code 与 Codex，重点验证企业身份、遥测、沙箱和桌面端稳定性。
- **GitHub 深度用户与自动化团队**：Copilot CLI 生态契合度高，但当前应先验证 MCP、Prompt 模式和异常恢复。
- **多模型及桌面 IDE 用户**：OpenCode 功能覆盖广、迭代快，但需准备升级回退和 MCP 稳定性预案。
- **多代理与 Agent 扩展实验者**：Gemini CLI 和 pi 更值得跟踪；Gemini CLI 的安全治理方向清晰，pi 的嵌入式和扩展能力更灵活。
- **自建 Agent 平台团队**：可重点借鉴 jcode 的 Operator Policy、Agent/Skill/Hook 分层，以及 pi 的结构化错误和流式处理设计。

总体而言，AI CLI 生态已从**功能竞赛**进入**可靠性与治理竞赛**。短期最值得投入的并非更多命令或更多模型，而是确保 Agent 在跨平台、长会话、多代理、MCP、浏览器和 Provider 故障条件下，依然能够**正确执行、可恢复、可观测且可治理**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截至 **2026-11-24**。  
> 说明：所给 PR 排序字段为“评论数”，但数据中 `评论` 均显示为 `undefined`，因此以下排行综合 **PR 可见度、对应 Issue 的评论热度、修复影响范围与更新活跃度**，不等同于真实评论数排名。

## 1. 热门 Skills 排行

### 1. `mcp-builder`：修复新版 MCP 客户端兼容与自定义请求头

- **功能**：帮助 Claude Code 构建、调试和部署 MCP Server。
- **社区热点**：
  - MCP 2.x 将 `streamablehttp_client` 更名为 `streamable_http_client`。
  - 自定义 HTTP Header 的配置方式发生变化，旧实现无法直接兼容。
  - 相关问题在 Issue #1668 中引发持续修复需求。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#1742](https://github.com/anthropics/skills/pull/1742)

### 2. `skill-creator`：修复触发率评测失真与跨平台执行问题

- **功能**：用于创建、优化、评测和打包自定义 Skill。
- **社区热点**：
  - `run_eval.py` 在多 worker 模式下可能串扰 Skill UUID，产生接近零的错误触发率。
  - `claude -p` 被反馈“从不触发 Skills/commands”，暴露评测路径与真实调用方式不一致。
  - Windows 下的进程管道处理、运行时失败被误判为非触发等问题受到关注。
- **当前状态**：相关修复 PR **Open**
- **PR**：[anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)
- **关联 Issue**：[anthropics/skills#556](https://github.com/anthropics/skills/issues/556)、[anthropics/skills#1352](https://github.com/anthropics/skills/issues/1352)

### 3. `webapp-testing`：强化 Web 应用自动化测试的安全性

- **功能**：启动测试服务器、驱动浏览器并执行端到端 Web 测试。
- **社区热点**：
  - `with_server.py` 使用 `shell=True` 启动外部命令，存在命令注入风险。
  - 元素发现逻辑错误地给 `textarea` 和 `select` 返回文本值，影响断言可靠性。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#1980](https://github.com/anthropics/skills/pull/1980)、[anthropics/skills#1976](https://github.com/anthropics/skills/pull/1976)

### 4. `docx`：完善 Word 文档处理的结果校验与 XML 完整性

- **功能**：创建、编辑、检查和验证 DOCX 文档。
- **社区热点**：
  - LibreOffice 超时曾被错误报告为成功；新方案要求超时直接报错。
  - 成功验收需要检查输出文档中是否仍残留修订标记。
  - 合并文本 run 时可能删除命名空间声明，生成无效 XML。
  - 孤立批注的识别与清理也是明确需求。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#1792](https://github.com/anthropics/skills/pull/1792)、[anthropics/skills#1734](https://github.com/anthropics/skills/pull/1734)
- **关联 Issue**：[anthropics/skills#2018](https://github.com/anthropics/skills/issues/2018)

### 5. `xlsx`：修复 Excel 外部链接风险检测的漏报

- **功能**：处理 Excel 工作簿、公式、重算及外部引用风险。
- **社区热点**：
  - 原实现只检查工作簿级定义名称，导致通过工作表级名称或别名间接引用外部链接时出现漏报。
  - 该问题直接关联 #2013，属于高影响准确性修复。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#2019](https://github.com/anthropics/skills/pull/2019)

### 6. `claude-api`：更新 API 指南并控制上下文体积

- **功能**：提供 Claude API、Tool Use、Academy 文档及 SDK 使用指导。
- **社区热点**：
  - 文档存在失效链接，需要替换为可访问的规范地址。
  - Python SDK 新版本已支持自动恢复 `pause_turn`，旧版“外层循环重启”指南已过时。
  - 有用户反馈该 Skill 一次性注入约 **156K tokens**，可能在单次工具调用中耗尽上下文窗口。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#1730](https://github.com/anthropics/skills/pull/1730)、[anthropics/skills#1950](https://github.com/anthropics/skills/pull/1950)
- **关联 Issue**：[anthropics/skills#1487](https://github.com/anthropics/skills/issues/1487)

### 7. `pyxel`：面向 Python 的复古游戏开发与验证

- **功能**：指导 Claude 使用 Pyxel 创建、调试和验证复古游戏。
- **社区热点**：
  - 强调无头执行、输入驱动测试、逐帧检查和任务特定状态断言。
  - 将“生成代码”延伸到可重复运行和可验证的完整开发闭环。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#525](https://github.com/anthropics/skills/pull/525)

### 8. `document-typography`：生成文档的排版质量控制

- **功能**：检查并修复孤行、寡行、标题悬挂、编号错位等排版问题。
- **社区热点**：
  - 针对 AI 生成文档中的高频、低层但明显影响专业度的问题。
  - 强调预防式排版检查，而不是仅依赖人工通读。
- **当前状态**：**Open**
- **PR**：[anthropics/skills#514](https://github.com/anthropics/skills/pull/514)

---

## 2. 社区需求趋势

### ① 工作流自动化与交付闭环

社区最明显希望 Skill 不只“生成内容”，而是完成从需求到执行、验证和交付的完整链路：

- Notion 规格自动拆解为实现任务、验收条件和进度追踪。
- Markdown 自动转换为带配音的视频和演示文稿。
- SCNet HPC 集群的 SSH、Slurm、作业提交与结果检查自动化。

相关提案：

- [notion-spec-to-implementation / quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245)
- [md2video-audio](https://github.com/anthropics/skills/pull/1703)
- [scnet-hpc](https://github.com/anthropics/skills/pull/1615)

### ② 记忆压缩与长期 Agent 状态管理

`compact-memory` 提议以符号化表示压缩 Agent 的长期状态，减少冗长笔记对上下文的占用。这反映出社区需求正从“单次任务辅助”转向：

- 跨会话记忆；
- 状态压缩；
- 可持续运行的 Agent；
- 上下文成本优化。

相关提案：

- [compact-memory](https://github.com/anthropics/skills/issues/1329)

### ③ 代码审查、安全审计与推理质量门禁

社区期待更系统的质量控制 Skill：

- 智能合约静态分析及审计证明；
- Agent 治理、威胁检测、信任评分和审计轨迹；
- “预任务校准 → 对抗式复核 → 交付验证”的三阶段质量门禁。

相关提案：

- [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)
- [agent-governance](https://github.com/anthropics/skills/issues/412)
- [Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)

### ④ 测试生成、调试与可验证执行

Web 应用测试、复古游戏测试等需求共同指向一个方向：Skill 应主动运行程序、观察输出并用断言验证结果，而不是只生成测试代码。

相关提案：

- [webapp-testing 安全修复](https://github.com/anthropics/skills/pull/1980)
- [pyxel](https://github.com/anthropics/skills/pull/525)

### ⑤ 文档生成、排版与格式转换

文档类需求继续细化：

- DOCX 修订和批注的正确处理；
- PPTX 渲染前参数校验；
- 文档排版质量控制；
- Markdown 到视频/音频的内容再加工。

相关提案：

- [docx 验收修复](https://github.com/anthropics/skills/pull/1792)
- [pptx 参数校验](https://github.com/anthropics/skills/pull/1975)
- [document-typography](https://github.com/anthropics/skills/pull/514)
- [md2video-audio](https://github.com/anthropics/skills/pull/1703)

### ⑥ 企业共享与治理能力

企业用户不只关心 Skill 数量，也关心分发和治理：

- 组织级共享 Skill 库及直接分享链接；
- 明确官方与社区 Skill 的信任边界；
- 避免插件重复安装导致同一 Skill 重复占用上下文。

相关 Issue：

- [Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228)
- [社区 Skill 冒用 Anthropic 命名空间](https://github.com/anthropics/skills/issues/492)
- [插件包含重复 Skills](https://github.com/anthropics/skills/issues/189)

---

## 3. 高潜力待合并 Skills

> 以下 PR 均为 **Open**，但兼具明确场景、技术实现或较强社区需求。

### 第一梯队：近期落地概率较高

1. **`mcp-builder` MCP 2.x 兼容修复**
   - 修复明确、依赖已发生 API 变更，直接影响现有 MCP Server 开发。
   - [PR #1742](https://github.com/anthropics/skills/pull/1742)

2. **`skill-creator` 触发评测稳定性修复**
   - 解决跨 worker 串扰、Windows 兼容和失败误判，属于评测基础设施级修复。
   - [PR #1298](https://github.com/anthropics/skills/pull/1298)

3. **`docx` 超时与修订标记验收**
   - 避免“实际失败却报告成功”，直接提高生成文档可信度。
   - [PR #1792](https://github.com/anthropics/skills/pull/1792)

4. **`xlsx` 外部链接检测修复**
   - 聚焦实际漏报场景，且修复边界较清晰。
   - [PR #2019](https://github.com/anthropics/skills/pull/2019)

5. **`skill-creator` 打包脚本与 YAML 解析修复**
   - 解决独立执行失败和 frontmatter 元数据失真，落地成本较低。
   - [PR #1681](https://github.com/anthropics/skills/pull/1681)
   - [PR #1997](https://github.com/anthropics/skills/pull/1997)

### 第二梯队：潜力较大，但仍需验证

6. **`notion-spec-to-implementation` 与 `quantitative-resume-auditor`**
   - 将规格拆解、任务追踪、简历量化审计组合为强业务工作流。
   - [PR #1245](https://github.com/anthropics/skills/pull/1245)

7. **`md2video-audio`**
   - 覆盖 Markdown 到视频、语音和演示文稿的完整转换链，市场辨识度高。
   - [PR #1703](https://github.com/anthropics/skills/pull/1703)

8. **`proofcore-contract-auditor`**
   - 对智能合约审计有明确差异化，但涉及外部区块链服务及信任模型，合规审核成本较高。
   - [PR #1771](https://github.com/anthropics/skills/pull/1771)

9. **`scnet-hpc`**
   - 面向真实 HPC 集群操作，专业价值较高；仍需更多环境验证和维护者反馈。
   - [PR #1615](https://github.com/anthropics/skills/pull/1615)

10. **`pyxel` 与 `document-typography`**
    - 使用场景明确、实现方向清晰，但分别偏垂直和轻量，可能需要更多示例与验证数据。
    - [PR #525](https://github.com/anthropics/skills/pull/525)
    - [PR #514](https://github.com/anthropics/skills/pull/514)

---

## 4. Skills 生态洞察

**社区当前最集中的诉求，是让 Skills 从“生成助手”升级为可信、可复用、可治理的端到端工作流：既能完成真实任务，也能执行验证、修复可靠性问题，并明确官方与社区来源的安全边界。**

---

# Claude Code 社区动态日报｜2026-11-24

## 1. 今日速览

- **v2.1.331 发布**：Code Mode 现可运行于 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 AWS 上的 Claude Platform，同时 Claude Apps Gateway 新增 `oidc.groups_jsonpath`。
- **隐私与可靠性成为社区焦点**：User-Agent 泄露邮箱、macOS 权限反复失效、Windows Hook 挂起和会话转录缺失等问题引发大量讨论。
- 本期统计中有 **50 条 Issue 更新、2 条 PR 更新**；不过仅提供 **2 条 PR**，均已关闭，无法形成 10 项有效 PR 进展清单。

---

## 2. 版本发布

### v2.1.331

本次版本主要更新：

- 为终端会话中的 **Code Mode** 增加对以下平台的支持：
  - Amazon Bedrock
  - Google Cloud Agent Platform
  - Microsoft Foundry
  - Claude Platform on AWS
- Claude Apps Gateway 新增 `oidc.groups_jsonpath`，可从对象列表的匹配项中读取组信息。

**开发者意义**：企业用户接入 Code Mode 的平台选择进一步扩大；OIDC 组映射能力则有助于企业实现更细粒度的身份与访问控制。

发布链接：[v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

---

## 3. 社区热点 Issues

### 1. User-Agent 请求头泄露邮箱，涉嫌隐私违规

- **重要性**：网络搜索过程中，用户邮箱可能随 User-Agent 暴露给第三方，已有用户收到大量诈骗邮件。问题同时涉及隐私、安全和默认配置原则。
- **社区反应**：**124 条评论、811 个赞**，为本期热度最高的问题。
- **关注点**：是否应彻底移除邮箱信息，而不是仅提供 opt-in/opt-out 设置；第三方请求头还应披露哪些遥测或身份字段。

链接：[Issue #107757](https://github.com/anthropics/claude-code/issues/107757)

### 2. Windows isolation-worktree 安全检查误拒绝有效工作树

- **重要性**：安全检查因盘符大小写比较错误而拒绝合法 worktree，属于可能直接阻断自动化开发流程的回归问题。
- **社区反应**：**13 条评论、3 个赞**，已有复现环境。
- **关注点**：路径规范化必须兼容 Windows 大小写不敏感文件系统，同时不能削弱 worktree 隔离保护。

链接：[Issue #91618](https://github.com/anthropics/claude-code/issues/91618)

### 3. Windows Hook 进程被挂起，导致会话卡死 30–60 分钟以上

- **重要性**：Hook 是权限检查、格式化和自动化工作流的重要入口；进程停在 SUSPENDED 状态会让整个 agent turn 长时间无响应。
- **社区反应**：**8 条评论、1 个赞**，涉及 Windows 11、Git Bash、PowerShell 和 Python Hook。
- **关注点**：Windows 进程启动、状态轮询与超时处理需要更稳健的失败恢复机制。

链接：[Issue #77078](https://github.com/anthropics/claude-code/issues/77078)

### 4. 会话转录 JSONL 丢失工具调用前的助手文本

- **重要性**：终端中可见的内容没有完整写入 JSONL，会破坏审计、回放、调试以及基于转录构建的代理工具。
- **社区反应**：**5 条评论**，报告称问题自 2.1.270 回归；`thinking` 和 `tool_use` 记录仍存在。
- **关注点**：会话持久化格式需要回归测试，确保文本、思考与工具调用按正确顺序完整落盘。

链接：[Issue #94251](https://github.com/anthropics/claude-code/issues/94251)

### 5. 达到用量限制后，会话被 429 硬锁定

- **重要性**：Max 计划使用 1M 上下文模型时，中途触发限制会导致会话无法保存上下文、导出关键信息或继续工作。
- **社区反应**：**18 条评论、3 个赞**。
- **关注点**：用户期待限制触发前检查、剩余上下文导出、恢复机制，以及更清晰的限额提示。

链接：[Issue #56978](https://github.com/anthropics/claude-code/issues/56978)

### 6. Remote Control 模式下自动续跑无法启用

- **重要性**：即使开启“达到用量限制后自动继续”，连接 Remote Control 的会话仍不会启动自动续跑，配置表现与界面承诺不一致。
- **社区反应**：**5 条评论、8 个赞**，已有复现。
- **关注点**：限额恢复逻辑需要覆盖 Remote Control、桌面端和 CLI 等不同运行入口。

链接：[Issue #100650](https://github.com/anthropics/claude-code/issues/100650)

### 7. macOS 每次升级都重新注册应用权限

- **重要性**：版本化安装路径会触发 macOS “隐私与安全性”重复授权，用户需要反复确认，降低升级流畅度。
- **社区反应**：**22 条评论、48 个赞**。
- **关注点**：应通过稳定安装路径、签名身份一致性或权限迁移机制避免重复注册。

链接：[Issue #49282](https://github.com/anthropics/claude-code/issues/49282)

### 8. `/clear` 未重置会话名，生成重复命名会话

- **重要性**：新会话继承旧名称会使 `/resume` 中出现多个同名条目，降低会话管理可辨识性，并可能误导恢复操作。
- **社区反应**：**18 条评论、35 个赞**，已有稳定复现。
- **关注点**：会话生命周期应明确区分“清空上下文”和“创建新会话”，并同步重置名称及相关状态。

链接：[Issue #61172](https://github.com/anthropics/claude-code/issues/61172)

### 9. 长暂停期间 Idle compaction 大量失效

- **重要性**：报告称 615 次长暂停中仅 104 次触发压缩，83% 的场景重新发送完整上下文，可能显著增加延迟和 token 消耗。
- **社区反应**：**11 条评论**，提供了跨 7 天的本地转录统计。
- **关注点**：长上下文任务需要更可靠的空闲压缩、缓存治理和“接近上限”时的提前压缩策略。

链接：[Issue #108789](https://github.com/anthropics/claude-code/issues/108789)

### 10. 嵌套子代理恢复后，回复被发送到错误会话

- **重要性**：违反“恢复后的代理应向恢复它的代理报告，而非主会话”的既定行为，可能导致结果错投和自动化流程串线。
- **社区反应**：**2 条评论**，已有明确复现步骤。
- **关注点**：多代理系统需要维护可靠的父子关系、恢复上下文和消息路由状态。

链接：[Issue #111841](https://github.com/anthropics/claude-code/issues/111841)

---

## 4. 重要 PR 进展

> 本期数据中仅列出 **2 条 PR**，且均为关闭状态。原始数据未提供其余 8 条 PR，因此不虚构内容，也不以 Issues 补足 PR 数量。

### 1. resolve duplicate IPs

- **内容**：标题表明其目标是解决重复 IP 问题。
- **状态**：已关闭。
- **判断**：可能与网络请求、代理或连接去重有关，但公开摘要为空，无法确认具体实现及是否已合并。

链接：[PR #45553](https://github.com/anthropics/claude-code/pull/45553)

### 2. feat: Add developer-utilities plugin

- **内容**：新增 `developer-utilities` 插件，提供五个社区请求但原生未提供的命令。原 PR 中的会话管理命令（如 `/list-sessions`、`/label-session`、`claude-resume`）和 `/init-skills` 已被移除。
- **状态**：已关闭。
- **判断**：体现了社区通过插件扩展 CLI 工作流的路线，但最终功能范围和合入状态需要以仓库记录为准。

链接：[PR #11713](https://github.com/anthropics/claude-code/pull/11713)

---

## 5. 功能需求趋势

### 会话连续性与生命周期管理

- 社区持续要求跨终端、跨代理、跨应用恢复会话，并维护清晰的父子代理关系。
- `/clear`、恢复、压缩、重命名和会话注册表之间缺少统一状态管理。
- 重点 Issue：[Session Handoff #11455](https://github.com/anthropics/claude-code/issues/11455)、[`/clear` 命名问题 #61172](https://github.com/anthropics/claude-code/issues/61172)、[项目目录移动后跟踪 #96323](https://github.com/anthropics/claude-code/issues/96323)

### 用量限制、成本与长上下文稳定性

- 用户需要达到限额时保存上下文、导出任务、自动续跑以及更平滑的恢复体验。
- 1M 上下文与长会话的压缩效率成为成本关注重点。
- 重点 Issue：[限额硬锁定 #56978](https://github.com/anthropics/claude-code/issues/56978)、[自动续跑失效 #100650](https://github.com/anthropics/claude-code/issues/100650)、[Idle compaction 失效 #108789](https://github.com/anthropics/claude-code/issues/108789)

### IDE、桌面端与远程控制体验

- VS Code Webview 对新内容块类型支持不完整；桌面端在 Windows、WSL 和 macOS 上存在会话路由、MCP 工具消失及自动更新断连等问题。
- 重点 Issue：[VS Code `advisor_tool_result` #90471](https://github.com/anthropics/claude-code/issues/90471)、[Desktop WSL MCP #92051](https://github.com/anthropics/claude-code/issues/92051)、[压缩后 MCP 消失 #108086](https://github.com/anthropics/claude-code/issues/108086)

### 隐私、安全与企业治理

- 邮箱泄露是本期最强烈的社区诉求；企业侧还要求 Cowork 的 OpenTelemetry 内容采集具备组织级策略，而非仅依赖设备 MDM。
- 重点 Issue：[User-Agent 隐私 #107757](https://github.com/anthropics/claude-code/issues/107757)、[Cowork OTLP 组织策略 #100240](https://github.com/anthropics/claude-code/issues/100240)

### 语音与自然交互

- 社区希望 Claude Code 支持类似 Claude App 的免手语音会话，并能在远程任务执行期间通过语音纠偏或审批。
- 重点 Issue：[Hands-free voice conversation #111520](https://github.com/anthropics/claude-code/issues/111520)

### 可观测性、主题与审查体验

- 用户期待更完整的组织级遥测、Markdown 主题令牌，以及聊天回复中的内联可折叠评论。
- 重点 Issue：[Markdown theme tokens #93535](https://github.com/anthropics/claude-code/issues/93535)、[内联评论 #111402](https://github.com/anthropics/claude-code/issues/111402)

---

## 6. 开发者关注点

1. **隐私默认值必须最小化**  
   外部请求头不应携带邮箱等身份信息；社区对“默认安全，而非默认收集”的期待非常明确。

2. **跨平台行为必须一致**  
   Windows 的 worktree 检查、Hook 进程、剪贴板图片和 Remote Control 故障频发；macOS 的升级授权与会话压缩也表现不稳定。

3. **会话和代理状态必须可恢复、可追踪**  
   转录缺字、错误路由、同名会话、注册表不同步以及 MCP 工具在压缩后消失，暴露出会话生命周期设计仍不够统一。

4. **长上下文与限额处理直接影响成本和可用性**  
   用户不仅关注 token 价格，也关注压缩是否及时、限额后能否保存工作，以及自动恢复是否可靠。

5. **IDE 与桌面端属于高频生产入口**  
   VS Code、Cursor、Desktop、Windows WSL 和 Remote Control 的兼容性问题，会比纯 CLI 功能更直接地阻断开发流程。

6. **企业需要集中治理，而非只提供本地开关**  
   OTLP 内容导出、OIDC 组映射、组织级策略及权限管理，是企业采用 Claude Code 时的重要门槛。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-24**

## 今日速览

- 过去 24 小时发布 **Codex Rust CLI 0.172.0 稳定版**及多个 alpha 版本，重点增强终端中的会话导航、斜杠命令补全和任务切换。
- 社区讨论集中在 **Windows/macOS 桌面端稳定性、权限与沙箱异常、浏览器集成及模型行为回归**；其中多个 Windows 26.1117 版本问题已形成高关注故障串。
- 工程侧近期合入/关闭的 PR 主要围绕 **MCP 扩展能力、插件安全验证、模型目录同步、审批策略与 TUI 恢复可靠性**展开。

---

## 版本发布

### `rust-v0.172.0`（稳定版）

[GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.172.0)

主要更新：

- 可从搜索结果和对话记录中的线程链接直接打开已保存会话及嵌套代理。
- 支持在部分斜杠命令中按 `Tab` 补全参数，例如 `/mcp lo` 可补全为 `/mcp login`。
- 增强任务组之间的快速跳转能力。
- 同日还发布了 `0.171.0-alpha.13.2`、`0.172.0-alpha.2.1`、`0.173.0-alpha.5` 和 `0.174.0-alpha.1`。

---

## 社区热点 Issues

### 1. Windows 桌面端升级后 `@Browser` 无法使用

[#57641](https://github.com/openai/codex/issues/57641)

- Windows 11、Brave 环境下，桌面应用更新至 `26.1023.6123.0` 后，Terminal CLI 的 `@Browser` 报错 “The browser access host is unavailable”。
- 涉及浏览器访问宿主、桌面应用和 CLI 的集成链路，可能直接影响浏览器自动化能力。
- **59 条评论、47 个赞**，是本批数据中热度最高的 Issue，显示该问题已形成广泛共鸣。

### 2. macOS 新建会话后“完全访问”权限控制消失

[#58677](https://github.com/openai/codex/issues/58677)

- macOS Desktop `26.1027.51404` 中，新建聊天时显示已选择 Full access，但进入已有会话后权限控件消失，实际会话仍受限。
- 涉及权限 UI 与运行时权限状态不一致，对安全边界和用户预期都有直接影响。
- 累计 **32 条评论**，属于持续发酵的高影响权限问题。

### 3. Windows 新建 Work 会话无法发送消息

[#54564](https://github.com/openai/codex/issues/54564)

- Windows 10/11 上，新创建的 Work 线程中发送按钮持续禁用，用户无法提交消息。
- 这是核心工作流阻断问题，且与近期多个 Windows 版本中出现的发送按钮、MessagePort 和代理连接故障相互呼应。
- 已有 **31 条评论**，表明问题并非孤例。

### 4. 内置自动化限制与 Scheduled Tasks 文档冲突

[#59546](https://github.com/openai/codex/issues/59546)

- macOS 桌面版阻止自动化任务访问外部 Web 系统，与 Scheduled Tasks 文档所描述的能力不一致。
- 反映当前自动化能力在产品承诺、权限模型和实际执行限制之间存在落差。
- 获得 **29 条评论、28 个赞**，社区高度认同其重要性。

### 5. Codex Sites 公共站点被 Cloudflare 拦截

[#42950](https://github.com/openai/codex/issues/42950)

- 外部访客访问由 Codex Sites 创建的公共站点时，被 Cloudflare 阻止。
- 这会直接影响 Sites 的发布、预览和对外交付能力，属于产品可用性问题。
- 已有 **24 条评论**，说明社区持续关注部署链路中的第三方防护兼容性。

### 6. CJK 标点边界上的 Markdown 粗体被原样显示

[#37531](https://github.com/openai/codex/issues/37531)

- Codex App 在 CJK 标点附近生成粗体 Markdown 时，会直接显示原始 `**`，影响中文内容的可读性。
- 对中文、日文和韩文开发者尤其常见，属于生成质量与前端渲染双重问题。
- 累计 **16 条评论、4 个赞**，是中文社区值得优先反馈的问题。

### 7. 建议支持配置 Windows 默认会话 Shell

[#16579](https://github.com/openai/codex/issues/16579)

- 提议新增 Windows 配置项，使 Codex 默认使用 Git Bash 或其他已支持 Shell，而非固定采用 PowerShell。
- 提案已包含具体配置设计，直接改善跨 Shell 工作流和脚本兼容性。
- 获得 **66 个赞、15 条评论**，是列表中社区支持度最高的增强需求。

### 8. macOS 26.1117 升级后内置浏览器丢失密码和 Cookie

[#62832](https://github.com/openai/codex/issues/62832)

- macOS 应用从 `26.1111.71704` 升级至 `26.1117.31558` 后，内置浏览器切换至 v11，原有站点登录状态、密码及已解压扩展均不可用。
- 涉及浏览器配置迁移和用户数据保留，影响自动化任务连续性。
- 已有 **5 条评论**；问题较新，但潜在影响范围较大。

### 9. GPT-6.2 SOL 被指相较 GPT-6.1 SOL 出现行为回归

[#62195](https://github.com/openai/codex/issues/62195)

- 用户反馈 GPT-6.2 SOL 在指令遵循、主动性以及端到端任务完成度上弱于 GPT-6.1 SOL。
- 报告覆盖代码评估和 Computer Use 等场景，反映新模型上线后“能力是否稳定”成为核心议题。
- **7 条评论、9 个赞**，属于值得持续跟踪的模型质量信号。

### 10. macOS 新建 Work 聊天时本地/云端运行选择器消失

[#63093](https://github.com/openai/codex/issues/63093)

- macOS `26.1117.41037` 新建 Work 会话时不再显示“本地/云端”选择器，用户无法明确控制执行位置。
- 这是核心入口缺失，且报告明确指出应用内助手仍引导用户点击不存在的按钮，进一步放大困惑。
- 已有 **5 条评论、3 个赞**，可能与同版本的其他桌面回归有关。

---

## 重要 PR 进展

> 下列 PR 均显示为已关闭；“关闭”表示相关工作已合并、关闭或完成处理，具体状态仍以链接页面为准。

### 1. 持久化沙箱安全事件

[#22866](https://github.com/openai/codex/pull/22866)

- 为规范化沙箱事件保留 thread、turn 和 tool-call 上下文，并通过稳定遥测路径传出本地进程。
- 使用本地 SQLite 支持近期审计查询，同时避免演变为无限增长的合规账本。
- 对安全可观测性和代理审计链路价值较高。

### 2. 优化提示词图片缓冲区释放

[#63563](https://github.com/openai/codex/pull/63563)

- 当调用方释放图片缓冲区时，缓存不再长期保留原始图片字节。
- 后续请求若已提供相同数据，只需保留“已成功解码”的状态，可降低内存占用。
- 适合多模态、长会话及高并发场景。

### 3. TUI 模型选择器使用当前线程的 Provider

[#63553](https://github.com/openai/codex/pull/63553)

- 恢复的线程可能使用不同于应用服务默认值的模型 Provider，旧逻辑可能在 `/model` 中展示错误目录。
- 新实现按 Provider 获取并缓存模型列表，降低选错模型或模型不可见的概率。
- 直接改善多 Provider、恢复会话场景下的 TUI 可用性。

### 4. 旧版增量工具能力回移

[#60456](https://github.com/openai/codex/pull/60456)

- 将相关增量工具声明能力回移到 `0.167.0-alpha.3.2` 分支。
- 目标是让桌面端及 Mantle、Bedrock Runtime 会话可在普通 Responses 请求中使用原生增量工具声明。
- 功能默认关闭，并与 Responses Lite 的 `incremental_tools` 开关保持独立。

### 5. 在 TUI 提交轮次中上报 Workspace 类型

[#63545](https://github.com/openai/codex/pull/63545)

- TUI composer 过去没有提供 `workspace_kind`，应用服务只能间接判断。
- 新逻辑在会话保存前使用暂存的项目分配，保存后读取持久化分配。
- 有助于统一本地、云端及不同工作区类型下的上下文路由。

### 6. 避免无头 Linux 触发 Keyring 解锁提示

[#63544](https://github.com/openai/codex/pull/63544)

- 当 `DISPLAY` 和 `WAYLAND_DISPLAY` 均未设置时，避免读取 Secret Service 凭据时弹出图形解锁窗口。
- 改善无图形环境、容器和 CI 中 Codex CLI 的无人值守运行体验。
- 与近期登录密钥环卡死类问题高度相关。

### 7. Code Mode 中去重 MCP 文本回退结果

[#63540](https://github.com/openai/codex/pull/63540)

- MCP 工具可能同时返回结构化数据和 JSON 文本回退，旧输出会重复展示同一内容。
- 新增 `features.code_mode_mcp_result_dedup` 特性以合并重复结果。
- 可减少上下文噪声和 Token 浪费，提升 MCP 工具输出可读性。

### 8. 空闲五秒后回收本地 Code Mode Host

[#63537](https://github.com/openai/codex/pull/63537)

- 最后一个会话关闭后，本地 Code Mode Host 可能继续驻留。
- 新逻辑保留短暂复用窗口，并在持续空闲五秒后回收进程。
- 在开发机资源占用与连续会话启动速度之间取得平衡。

### 9. 从 Responses WebSocket 握手刷新模型目录

[#63533](https://github.com/openai/codex/pull/63533)

- 服务端可能只在 WebSocket 握手中公布新的 `x-models-etag`，导致客户端模型目录长期陈旧。
- 新逻辑保存握手 ETag，并在连接建立时发出 `ResponseEvent::ModelsEtag`。
- 有助于新模型上线后更快同步到 Codex 客户端。

### 10. 允许扩展为 MCP Server 提供逐请求认证

[#63532](https://github.com/openai/codex/pull/63532)

- 新增 `McpServerContribution::SetWithAuthProvider` 一类的逐请求认证贡献方式。
- 扩展可在不重启 MCP 会话的情况下刷新自管理凭据，同时保持会话与原始身份绑定。
- 对 OAuth、短期令牌和企业身份系统尤其重要。

### 补充关注：插件与审批安全

- [#63528](https://github.com/openai/codex/pull/63528)：修复评测插件归档验证器未使用 `eval_keys` 查钥的问题，支持范围化签名密钥。
- [#63513](https://github.com/openai/codex/pull/63513)：要求 Guardian 在首次裁决前读取用户指令，避免脱离上下文审查低风险操作。
- [#63514](https://github.com/openai/codex/pull/63514)：预热 Guardian v3 根审查器，降低首次自动审批请求的额外延迟。
- [#63515](https://github.com/openai/codex/pull/63515)：让 `codex exec` 遵循配置及已保存的审批策略，不再强制覆盖为 `never`。

---

## 功能需求趋势

### 1. 桌面应用稳定性与跨版本回归

Windows `26.1117` 和 macOS `26.1117` 系列集中出现发送按钮禁用、应用崩溃重开、MessagePort 错误、技能菜单消失、运行选择器缺失等问题。社区当前最迫切的需求不是新增功能，而是**升级后核心工作流必须保持连续可用**。

### 2. 权限、沙箱与自动化边界透明化

“Full access”显示与实际权限不一致、自动化访问外部系统受限、Daybreak 状态不同步等反馈表明，用户希望：

- 权限状态在所有会话中一致显示；
- 明确区分本地、云端和远程执行边界；
- 对自动化限制提供清晰、可预测的规则；
- 避免安全策略误伤普通开发任务。

### 3. 多代理与并发工作区隔离

[#37226](https://github.com/openai/codex/issues/37226) 提出自动隔离并协调跨聊天、跨代理的并发文件写入。当前不同聊天或子代理可能共享同一 checkout，开发者期待更强的 **worktree、文件锁和变更协调机制**。

### 4. Windows Shell 与沙箱兼容性

Windows 用户持续要求可配置默认 Shell，并反馈 MXC 沙箱中 PowerShell 初始化失败、`py.exe` 无法识别 Python 等问题。需求重点是：

- Git Bash/PowerShell 等 Shell 可配置；
- Windows 沙箱环境初始化稳定；
- Python、Node、Git 等常用工具链可可靠发现。

### 5. 浏览器、Computer Use 与站点发布能力

`@Browser` 宿主不可用、内置浏览器升级后丢失凭据、Codex Sites 被 Cloudflare 拦截等问题共同指向浏览器自动化链路的可靠性要求：升级后应保留会话状态，并提高外部网站兼容与故障诊断能力。

### 6. 新模型支持与行为可解释性

GPT-6.2 SOL 的指令遵循和任务完成度受到质疑，模型目录同步机制也在持续改进。社区不仅关注“是否支持新模型”，也关注 **模型路由、版本差异、行为回归和稳定标识**。

### 7. MCP 与扩展生态成熟化

逐请求认证、Code Mode 输出去重、Code Mode Host 生命周期管理，以及插件归档签名验证等 PR，显示 MCP/插件正从基础调用向 **身份管理、安全供应链、输出质量和资源治理**阶段演进。

### 8. TUI 会话恢复与导航体验

稳定版新增线程链接跳转和斜杠命令补全；相关 PR 还处理终端所有权、恢复诊断写入失败、已接受提示词丢失等问题。开发者对 TUI 的核心期待是 **可靠恢复、不丢上下文、可快速导航**。

---

## 开发者关注点

- **升级回归是当前最大痛点**：多个高版本桌面应用问题直接阻断消息发送、会话创建或浏览器登录。
- **Windows 体验仍有明显短板**：应用部署错误、AppX Runtime、沙箱 Shell、Python 检测、代理连接和发送按钮故障集中出现。
- **权限状态必须可信**：界面显示的 Full access、Daybreak 开关或本地/云端模式若与实际执行状态不一致，会显著降低用户信任。
- **多代理需要可靠的文件系统协调**：共享本地项目中的并发写入隔离、锁和变更合并是高价值增强方向。
- **MCP 身份与生命周期管理成为集成重点**：短期凭据刷新、认证绑定、空闲进程回收及重复输出清理直接影响生产可用性。
- **新模型上线不能只看可用性**：社区开始系统比较模型在指令遵循、主动性、Computer Use 和长任务完成度上的差异。
- **中文渲染仍需专项治理**：CJK 标点附近的 Markdown 异常虽非核心阻断问题，但会直接影响本地化内容质量。
- **审计与安全上下文需要同步完善**：沙箱事件、Guardian 用户指令以及插件签名密钥的改进，显示社区正从“功能可用”转向“可验证、可追踪、可治理”。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-24**  
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

## 今日速览

- 今日重点集中在 **v0.71.x 安全补丁与 v0.72.0-preview.0 发布**：A2A Server 已补齐 Bearer Token 认证与请求输入校验，v0.71.1 将相关修复回移至稳定分支。
- 社区讨论高度聚焦 **Agent 稳定性与可观测性**：包括子代理错误地报告成功、任务卡死、Browser Agent 配置失效，以及缺少子代理上下文和轨迹。
- 工程侧正在集中治理 **超时、上下文溢出、扩展授权和依赖安全**，多份 P1 PR 涉及 Web Search、OAuth 发现请求及依赖升级。

---

## 版本发布

### v0.71.1 — 稳定版安全补丁

该版本将 A2A Server 的安全修复回移到 `v0.71.0` 分支，主要包括：

- 强制使用 Bearer Token 进行认证；
- 在 HTTP 请求层、任务创建及 `restore` 命令中统一执行输入校验；
- 修复此前占位式认证检查带来的安全风险。

**Release：** [v0.71.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.1)  
**修复 PR：** [#30420](https://github.com/google-gemini/gemini-cli/pull/30420)  
**补丁发布 PR：** [#30429](https://github.com/google-gemini/gemini-cli/pull/30429)

### v0.71.0

v0.71.0 已发布，并包含 v0.70.0-preview.0 的更新日志、版本升级及近期功能修复。其相关安全补丁随后通过 v0.71.1 单独回移。

**Release：** [v0.71.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0)  
**Changelog PR：** [#30426](https://github.com/google-gemini/gemini-cli/pull/30426)

### v0.72.0-preview.0 — 预览版

预览版本引入或修复了：

- 正确处理 `dir/**` 模式下的嵌套 `.gitignore` 取反规则；
- 改进 Windows 相关 CLI 行为；
- 包含 v0.70.0 的变更汇总。

**Release：** [v0.72.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.72.0-preview.0)  
**Changelog PR：** [#30424](https://github.com/google-gemini/gemini-cli/pull/30424)

### Nightly

当日还发布了 `v0.71.0-nightly.20261124.gaafdfdfb5`，核心变化为 A2A Server 认证和输入校验修复。

**Release：** [v0.71.0-nightly.20261124.gaafdfdfb5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261124.gaafdfdfb5)

---

## 社区热点 Issues

### 1. 子代理达到 `MAX_TURNS` 后仍被报告为成功

子代理实际已达到最大轮次、未完成分析，却被上层报告为 `status: "success"` 和 `Termination Reason: "GOAL"`。这会直接误导自动化流程和评估结果，是当前优先级较高的 Agent 可靠性问题。

该 Issue 获得 **14 条评论、2 个点赞**，是今日讨论最充分的热点。

[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. 通用 Agent 在简单操作中永久卡死

当 Gemini CLI 转交给 Generalist Agent 后，创建文件夹等简单任务也可能无限挂起；禁用子代理后则可规避。该问题影响核心任务执行链路，已有 **8 条评论和 8 个点赞**。

[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. Browser Agent 忽略 `settings.json` 配置

Browser Agent 未正确应用全局或项目级 `settings.json` 中的覆盖项，例如 `maxTurns`。这意味着用户难以通过标准配置控制浏览器代理，可能引发资源消耗失控或任务无法结束。

目前有 **5 条评论**，问题被标记为 P1。

[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 4. Browser Agent 在 Wayland 环境下失败

Browser 子代理在 Wayland 环境下无法正常完成操作，但最终仍显示 `Termination Reason: GOAL`。该问题同时涉及 Linux 桌面兼容性和错误状态上报，已有 **4 条评论、1 个点赞**。

[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. AST 感知的文件读取、搜索和代码库映射

该 EPIC 评估 AST 工具能否更精确地读取函数边界、定位语法元素并减少无效轮次和 Token 消耗。相关议题进一步指向 AST grep、tilth、glyph 等候选工具，是 Agent 效率优化的代表性方向。

主 Issue 有 **7 条评论、1 个点赞**，相关拆分议题也在持续更新。

[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)  
[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)

### 6. Gemini 不会主动使用自定义 Skills 和 Subagents

用户反馈，即便已配置 `gradle`、`git` 等高度相关的 Skill，模型在执行相关任务时仍很少主动调用，通常需要明确提示才会使用。这反映了 Agent 在能力发现和任务路由方面仍不够主动。

已有 **7 条评论**。

[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 7. 浏览器 Agent 缺乏会话接管和锁恢复能力

Browser Manager 当前采用 fail-fast 策略：持久化 Profile 被其他进程或遗留实例锁定时，Agent 会直接失败。社区希望加入自动会话接管、陈旧锁检测和恢复能力，提高连续自动化任务的可靠性。

已有 **4 条评论**。

[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)

### 8. 工具数量过多时出现 HTTP 400

当可用工具数量显著增加时，Gemini CLI 可能触发 400 错误。Issue 标题写明“超过 128 个工具”，摘要则提到“超过 400 个工具可用”，具体阈值需进一步确认。无论实际阈值如何，工具裁剪和按需启用都已成为实际扩展场景下的瓶颈。

已有 **3 条评论**，标记为 P2。

[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 9. 模型频繁在随机位置创建临时脚本

当模型被限制只能通过 Shell 执行时，往往会在多个目录生成编辑脚本，导致工作区污染和提交前清理成本增加。社区期待更受控的临时文件生命周期或统一的脚本执行机制。

已有 **3 条评论**。

[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 10. `/bug` 报告不包含子代理上下文

当前 Bug Report 主要收集主会话信息，无法反映子代理内部发生了什么，导致错误复现和诊断困难。社区还提出通过 `/chat share` 暴露子代理轨迹，以便更方便地审查和评估 Agent 行为。

相关主 Issue 有 **2 条评论**；轨迹分享建议另有 **2 条评论、1 个点赞**。

[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)  
[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)

---

## 重要 PR 进展

### 1. Web Search 增加请求超时并在中止后停止重试

针对 Web Search 请求可能永久挂起或持续重试的问题，为模型请求加入时间限制；请求被取消或中止后，不再继续发起重试。该 PR 为 P1，直接改善 Agent 卡死风险。

[#30415](https://github.com/google-gemini/gemini-cli/pull/30415)

### 2. MCP OAuth 元数据发现请求增加单请求超时

为 OAuth 授权服务器发现、受保护资源元数据发现及 `WWW-Authenticate` HEAD 探测加入 `AbortSignal`。此前恶意或异常主机可能让每个 URL 阻塞最长 60 秒，导致 OAuth 流程长期无响应。

[#30443](https://github.com/google-gemini/gemini-cli/pull/30443)

### 3. A2A Server 强制 Bearer Token 认证与输入校验

统一配置 A2A Server 认证，并在 HTTP 层、任务创建和 `restore` 命令中执行一致的输入验证。该修复已进入 v0.71.1，并同时出现在 nightly 版本中。

[#30420](https://github.com/google-gemini/gemini-cli/pull/30420)

### 4. 扩展安装与更新确认覆盖全部扩展内容

扩展安装和更新授权不再只描述 Manifest 字段，而是覆盖扩展增加的所有内容；更新时会比较已安装目录和新目录，并在 Hooks、Context Files 等发生变化时重新请求确认。

[#30441](https://github.com/google-gemini/gemini-cli/pull/30441)

### 5. 限制搜索总匹配数并改进上下文溢出提示

针对宽泛的 `grep`/`ripgrep` 查询可能撑爆上下文的问题，进一步限制 `total_max_matches`，并优化 context overflow 错误信息。该 PR 同时整合已有的单行截断、工具输出上限和客户端硬拦截机制。

[#29822](https://github.com/google-gemini/gemini-cli/pull/29822)

### 6. npm 依赖批量升级，共更新 69 项

批量更新 `simple-git`、`@octokit/rest`、`vitest` 等依赖。该变更规模较大，合并前应重点检查 API 兼容性及测试回归。

[#30423](https://github.com/google-gemini/gemini-cli/pull/30423)

### 7. `body-parser` 从 2.2.2 升至 2.4.0

依赖升级涉及安全修复，发布说明明确标注为重要安全更新。由于 `body-parser` 与 HTTP 请求解析相关，应结合安全回归测试验证。

[#30435](https://github.com/google-gemini/gemini-cli/pull/30435)

### 8. `zod` 升级至 4.6.6

主依赖和 MCP Server 示例依赖均升级至 Zod 4.6.6。该版本属于较大版本跨越，可能影响 Schema 声明、解析行为和错误格式。

[#30433](https://github.com/google-gemini/gemini-cli/pull/30433)  
[#30431](https://github.com/google-gemini/gemini-cli/pull/30431)

### 9. MCP TypeScript SDK 升级至 1.32.0

将扩展示例 MCP Server 使用的 `@modelcontextprotocol/sdk` 从 1.23.0 升级到 1.32.0，涉及多项 SDK 能力及行为变化，需验证 MCP 工具注册与通信流程。

[#30430](https://github.com/google-gemini/gemini-cli/pull/30430)

### 10. Vite 升级至 7.3.8

将 Vite 从 7.3.2 升级到 7.3.8，属于构建工具链更新。该变更可能影响本地开发服务器、构建输出及扩展开发环境。

[#30438](https://github.com/google-gemini/gemini-cli/pull/30438)

---

## 功能需求趋势

### 1. Agent 可靠性与任务终止语义

社区最核心的需求是确保 Agent 能准确报告任务状态：

- 达到 `MAX_TURNS` 时不得报告成功；
- 避免通用 Agent、Browser Agent 和 Web Search 无限挂起；
- 中止请求后停止重试；
- 明确区分模型失败、工具失败、用户取消和正常完成。

[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
[#30415](https://github.com/google-gemini/gemini-cli/pull/30415)

### 2. 子代理可观测性、评估与调试

开发者希望 `/bug` 和 `/chat share` 包含子代理的：

- 完整上下文；
- 工具调用轨迹；
- 终止原因；
- Token 与轮次消耗；
- 配置来源和覆盖结果。

这直接关系到 Agent 行为评估、故障复现和持续优化。

[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)  
[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)

### 3. AST 感知的代码检索与代码库理解

AST 工具是社区关注度较高的效率方向，目标是：

- 精确读取方法、类或函数边界；
- 按语法结构搜索，而非纯文本匹配；
- 减少无关代码进入上下文；
- 降低多轮探索成本和 Token 消耗；
- 改善代码库映射与导航。

[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)  
[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)

### 4. Skills 与 Subagents 的自动发现和路由

模型目前无法充分利用已配置的自定义 Skill 和子代理。社区期待 CLI 能：

- 自动理解 Skill 的适用场景；
- 根据任务主动选择子代理；
- 支持通过 `settings.json` 发现 Agent；
- 改进 Agent 命名与职责边界。

[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
[#18285](https://github.com/google-gemini/gemini-cli/issues/18285)  
[#18282](https://github.com/google-gemini/gemini-cli/issues/18282)

### 5. 浏览器自动化韧性

Browser Agent 的需求集中在跨平台稳定性和长任务恢复：

- Wayland 环境兼容；
- 持久化 Profile 锁检测；
- 自动会话接管；
- 遗留进程和孤儿会话恢复；
- 正确应用 `maxTurns` 等设置。

[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)  
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 6. 上下文和工具规模治理

随着 MCP、扩展和自定义 Agent 增加，工具数量及输出规模迅速膨胀。社区需求包括：

- 按任务裁剪可用工具；
- 限制搜索总匹配数；
- 精确读取大文件；
- 持久化文件型任务清单，避免依赖对话上下文；
- 降低每轮基础上下文开销。

[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)  
[#29822](https://github.com/google-gemini/gemini-cli/pull/29822)  
[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)  
[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)

### 7. 沙箱、安全边界与破坏性操作防护

社区希望在不牺牲模型 Shell 能力的前提下增强安全：

- 零依赖 OS 沙箱；
- 执行前意图识别和风险路由；
- 对 `git reset --force` 等破坏性操作进行阻止或二次确认；
- 扩展安装和更新时完整披露其行为；
- A2A、MCP OAuth 等外部接口必须默认启用认证。

[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)  
[#30441](https://github.com/google-gemini/gemini-cli/pull/30441)

### 8. 评估体系稳定性

内部项目 Eval 存在结果波动、测试被注释以及结果难以追踪的问题。社区希望构建更稳定、可重复、能体现质量趋势的项目级评估体系。

[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)  
[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)

---

## 开发者关注点

- **任务失败不能被伪装成成功**：终止原因和最终状态必须与实际执行结果一致，这是当前最高优先级的 Agent 信任问题。
- **任何工具调用都必须有超时边界**：Web Search、OAuth Discovery、Browser Agent 等外部链路都可能因网络或锁状态无限阻塞。
- **子代理需要“开箱即用”的可观测性**：仅提供主会话日志已不足以诊断复杂任务，完整轨迹和上下文应成为标准能力。
- **扩展正在增加工具数量与上下文压力**：MCP、Skills、Subagents 和扩展叠加后，工具选择、上下文裁剪及结果匹配上限将直接影响稳定性。
- **配置必须真正生效**：Browser Agent 忽略 `settings.json` 的问题表明，配置合并、注册初始化和子代理实例化之间仍存在断层。
- **安全设计需要覆盖完整内容与外部接口**：扩展授权应覆盖 Hooks 和 Context Files；A2A、OAuth 和破坏性 Shell 操作需要默认安全边界。
- **代码探索应从纯文本匹配升级到结构感知**：AST 搜索、函数级读取和更精准的代码库映射有望同时减少轮次、Token 与误读。
- **评估结果必须稳定且可复现**：仅依赖偶发成功的小型 Eval 无法支撑 Agent 质量追踪，需要长期指标和稳定的回归测试。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-24**  
**数据范围：过去 24 小时更新的 Release、Issues 与 Pull Requests**

## 1. 今日速览

过去 24 小时社区更新 **26 条 Issue** 和 **1 条 PR**，讨论焦点高度集中在 **MCP 集成与会话稳定性**：包括 OAuth 静默刷新、会话恢复锁、stdio MCP 丢失、Windows 权限锁及 MCP Tasks 能力不一致等问题。  
与此同时，**v1.0.115-8** 已发布，改进了子代理用量统计与 Assisted Permissions 的容错机制；另有多项 Windows、Linux 和交互模式崩溃问题需要开发者关注。

## 2. 版本发布

### v1.0.115-8

本次版本主要围绕可观测性和权限处理体验进行改进：

- `--usage-output-file` 现在按用户配置的子代理名称聚合用量，不再使用调用 ID，并报告每个子代理的启动次数。
- Assisted Permissions 在首选审查模型停滞或失败时，可自动尝试其他模型，减少不必要的审批等待和额外授权提示。

> 该版本号带有预发布后缀 `-8`，部署前建议先在目标环境验证。  
> [查看 Release / Issue #1446 关联信息](https://github.com/github/copilot-cli/releases)

## 3. 社区热点 Issues

### 1. 远程 MCP 的 OAuth access token 过期后未尝试静默刷新

**Issue #4203 · 仍开放 · 6 个赞**  
当远程 MCP 的 access token 过期时，CLI 没有使用缓存的 refresh token 执行 RFC 6749 §6 静默刷新，而是要求用户重新交互登录，并直接丢弃服务器工具。这是影响企业 OAuth MCP 连续使用的关键认证缺陷。

[查看 Issue #4203](https://github.com/github/copilot-cli/issues/4203)

### 2. Worktree 建议默认禁用

**Issue #2243 · 仍开放 · 21 个赞**  
用户认为自动使用 worktree 会产生大量难以合并回主工作树的代码，应改为默认关闭并由用户显式启用。该 Issue 是本轮社区中点赞数最高的议题，反映出自动化代理与 Git 工作流安全之间的矛盾。

[查看 Issue #2243](https://github.com/github/copilot-cli/issues/2243)

### 3. 崩溃残留的会话锁导致会话无法恢复

**Issue #4805 · 仍开放**  
CLI 进程异常退出后留下的 `inuse.<pid>.lock` 不会在重新打开会话时被回收。即使 `events.jsonl` 可以正常回放、引擎也成功恢复，会话仍被生命周期锁阻断，属于数据未损坏但会话不可用的典型可靠性问题。

[查看 Issue #4805](https://github.com/github/copilot-cli/issues/4805)

### 4. MCP Tasks 声明能力与实际调用行为不一致

**Issue #5540 · 仍开放**  
CLI 在初始化时声明支持 MCP Tasks，但调用标记为 `taskSupport: "required"` 的工具时，并未附加任务增强参数，导致服务端拒绝请求且无法启动任务。这一问题反映了协议能力协商与真实工具调用路径之间的落差。

[查看 Issue #5540](https://github.com/github/copilot-cli/issues/5540)

### 5. macOS 自 1.0.93-0 起出现 TLS 1.3 连接异常

**Issue #5559 · 仍开放 · 11 月 23 日新报告**  
用户反馈远程 Streamable HTTP MCP 服务在近期版本后无法继续连接，症状与 TLS 1.3 协商失败相关。由于问题直接影响远程 MCP、CI 环境和企业服务接入，值得尽快进行版本回归测试。

[查看 Issue #5559](https://github.com/github/copilot-cli/issues/5559)

### 6. 交互模式因无效 MCP output schema 完全阻塞

**Issue #5557 · 仍开放 · 11 月 23 日新报告**  
只要本地 MCP 工具声明了不被支持的 `outputSchema.anyOf: null`，交互模式就可能在回答前失败，而且错误信息只显示工具索引，无法定位具体服务器或工具；非交互模式却能成功运行。异常 schema 不应拖垮整个会话，是重要的兼容性和容错问题。

[查看 Issue #5557](https://github.com/github/copilot-cli/issues/5557)

### 7. Prompt 模式下扩展工具权限请求永久等待

**Issue #5381 · 仍开放**  
在 `copilot -p` 模式中，扩展注册的 `custom-tool` 发起权限请求后，没有处理程序应答，任务会一直等待直到被终止；同时 `--allow-tool` 也无法直接按名称授权扩展工具。这会直接破坏自动化脚本的可预测性和完成能力。

[查看 Issue #5381](https://github.com/github/copilot-cli/issues/5381)

### 8. Windows 提权会话创建的 MCP 锁阻止普通会话启动

**Issue #5255 · 仍开放**  
管理员权限会话优先创建 `.mcp-writer.lock` 和 `.mcp-writer.binding` 后，后续非提权会话因 `os_error=5` 无法打开锁文件，所有 MCP 服务启动失败。该问题对 Windows 开发者、管理员账户及混合权限环境尤其不友好。

[查看 Issue #5255](https://github.com/github/copilot-cli/issues/5255)

### 9. ACP 模式停止输出推理摘要

**Issue #5556 · 仍开放 · 11 月 23 日新报告**  
从 **1.0.110** 开始，`copilot --acp` 不再发送 `session/update` 的 `agent_thought_chunk`，导致依赖 ACP 的客户端无法展示实时“思考”摘要。相较 1.0.109 属于明显的流式事件兼容性回归。

[查看 Issue #5556](https://github.com/github/copilot-cli/issues/5556)

### 10. Linux x86_64 长会话触发原生模块 SIGABRT

**Issue #5561 · 仍开放 · 11 月 24 日新报告**  
Arch Linux 上的 GitHub Copilot CLI 1.0.114 在长时间交互会话中由内置 `cli-native.node` 调用 `abort()` 并产生 `SIGABRT`。崩溃发生在原生模块而非 JavaScript 层，意味着问题定位和跨发行版验证更为复杂。

[查看 Issue #5561](https://github.com/github/copilot-cli/issues/5561)

## 4. 重要 PR 进展

过去 24 小时仅检测到 **1 条更新的 PR**，因此无法列出 10 个重要 PR。

### PR #5554：CLI 容器支持按需生成连接令牌

**状态：已关闭**  
该 PR 允许无头 CLI 容器在启动时生成随机连接令牌，供本地 SDK 客户端在尚未配置 GitHub 凭据时建立连接：

- 通过 `COPILOT_CONNECTION_TOKEN_GENERATE=true` 启用。
- 启动时打印新生成的随机令牌。
- 目标是降低本地 SDK 与 headless CLI 联调的门槛。

该 PR 未合并，当前仍不能依赖该能力。

[查看 PR #5554](https://github.com/github/copilot-cli/pull/5554)

## 5. 功能需求趋势

### MCP 成为社区首要议题

本轮 Issue 涉及 OAuth 静默刷新、MCP Tasks、动态请求头、stdio MCP 生命周期、output schema 兼容、Windows 共享锁、Guest Tenant 认证以及 GitHub MCP 工具发现等。需求重点从“能够连接 MCP”进一步转向：

- OAuth token 自动续期；
- Windows 和多进程环境下的可靠启动；
- 对扩展协议特性的准确协商；
- 无效工具定义下的会话容错；
- 短期凭证所需的动态 header 生成；
- MCP 工具与自定义 Agent 的统一可见性。

相关链接：  
[#4203](https://github.com/github/copilot-cli/issues/4203) · [#5255](https://github.com/github/copilot-cli/issues/5255) · [#5540](https://github.com/github/copilot-cli/issues/5540) · [#5524](https://github.com/github/copilot-cli/issues/5524) · [#5557](https://github.com/github/copilot-cli/issues/5557)

### 会话恢复与跨平台可靠性

社区高度关注异常退出后的会话恢复、陈旧 PID 锁回收、事件确认超时以及原生模块崩溃。开发者期待 CLI 能从“进程级可用”提升到“故障后可恢复”。

相关链接：  
[#4805](https://github.com/github/copilot-cli/issues/4805) · [#5100](https://github.com/github/copilot-cli/issues/5100) · [#5561](https://github.com/github/copilot-cli/issues/5561)

### 非交互模式与自动化可靠性

`copilot -p` 下的权限请求无限等待、`task_complete` 缺失造成结果丢失，以及 ACP 推理事件消失，都说明自动化接口仍需更严格的行为契约。

相关链接：  
[#5381](https://github.com/github/copilot-cli/issues/5381) · [#2482](https://github.com/github/copilot-cli/issues/2482) · [#5556](https://github.com/github/copilot-cli/issues/5556)

### Agent、扩展与 Git 工作流控制

社区希望自定义 Agent 可以稳定使用内置 GitHub MCP 工具，同时对 worktree、权限审批和工具自动执行采取更保守的默认策略。

相关链接：  
[#5550](https://github.com/github/copilot-cli/issues/5550) · [#2243](https://github.com/github/copilot-cli/issues/2243)

### 企业策略与配置能力

企业用户继续关注 CLI 的统一启用策略、sandbox 强制策略以及远程 MCP 的动态认证配置。这些需求说明 CLI 正从个人开发工具进一步进入受治理的团队和自动化环境。

相关链接：  
[#4446](https://github.com/github/copilot-cli/issues/4446) · [#5524](https://github.com/github/copilot-cli/issues/5524) · [#5525](https://github.com/github/copilot-cli/issues/5525)

## 6. 开发者关注点

1. **会话不能因边缘故障永久失效**：陈旧锁、一次 120 秒确认超时或 session ID 切换，都不应让已保存会话不可恢复。
2. **MCP 兼容性必须覆盖完整协议栈**：仅声明支持 Tasks 并不够，还需正确发送增强参数、解析任务结果，并兼容不同服务器的非标准 schema。
3. **自动化不能无限等待**：Prompt 模式必须对权限请求设置明确的拒绝、允许或超时策略，同时支持精确授权扩展工具。
4. **跨平台文件权限是首要阻塞点**：Windows 提权/普通会话混用产生的锁问题，会让整个 MCP 工具链无法启动。
5. **OAuth 登录应尽量无感**：缓存 refresh token 有效时，应优先静默续期，避免在服务器工具已经加载后突然要求人工登录。
6. **Agent 输出需要可观察、可恢复**：ACP 推理事件、任务完成标记和子代理用量统计，直接影响调试、计费与自动化集成。
7. **默认行为应偏向保守可控**：Worktree、工具审批和权限策略需要显式授权，避免 Agent 自动修改大量代码后难以整合。
8. **错误信息应具备定位能力**：MCP schema 错误目前只给工具索引，应明确指出服务器、工具和不受支持的字段。
9. **原生模块稳定性需要跨发行版验证**：Linux/Arch 上的 `cli-native.node` 崩溃是原生层问题，发布前应覆盖长会话与不同 libc 环境。
10. **配置兼容性需要更友好**：例如 `.mcp.json` 不支持注释会直接跳过全部服务器，远程 MCP header 也缺少动态生成能力。

**总体判断：** 今日社区信号表明，Copilot CLI 的短期重点已从单纯扩充模型和代理能力，转向 **MCP 协议一致性、会话生命周期管理、跨平台可靠性以及非交互模式的可自动化性**。这些基础体验问题会直接影响企业落地和无人值守运行。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-11-24

## 1. 今日速览

- OpenCode 24 小时内连续发布 **v2.4.0** 与 **v2.4.1**：桌面端加入内置浏览器，v2.4.1 进一步修复 macOS 12 无法保存助手消息的问题，并完善仅配置式 Provider 的模型展示。
- 今日社区重点集中在 **桌面端体验、会话与滚动稳定性、MCP/OAuth、安装升级、AI Provider 限额及插件自动化**。多个新 Issue 暴露出 v2.4.x 发布后的回归或功能缺口。
- PR 端正同步修复 TUI 队列残留、缺失会话目录恢复、Gemini 429 重试、Copilot 响应 ID 重放、插件 setup 死锁及桌面滚动/历史加载等问题。

---

## 2. 版本发布

### v2.4.1

- 修复 macOS 12 内置旧版 SQLite 时无法保存助手消息的问题。
- 仅在配置文件中声明的 Provider（如 Ollama 等）现在能够正确展示其模型。
- 关联 PR：[opencode#65771](https://github.com/anomalyco/opencode/pull/65771)

### v2.4.0

- 桌面端加入内置浏览器，可从 Chrome、Edge、Firefox、Safari 导入登录状态和浏览历史。
- 支持从 Chromium 浏览器以及 Chrome、Edge 应用商店安装扩展。
- 所有浏览数据集中保存在持久化桌面配置中；聊天中的链接可直接复用已登录状态，标签页也可在重启后保留。

---

## 3. 社区热点 Issues

1. **支持从 AI 消息直接回退或创建分支**  
   当前只能针对用户消息执行响应或 fork，限制了对模型答案进行重试、对比和分支探索的效率。该需求评论数与点赞数均居今日首位，是最受社区支持的功能增强之一。  
   [opencode#8689](https://github.com/anomalyco/opencode/issues/8689)

2. **ChatGPT 订阅额度充足，但仍被判定为共享额度超限**  
   用户在 macOS 使用 OpenCode 2.2.5 时，即使 ChatGPT 5 小时及周额度均有剩余，仍收到 `subscription_sharing_usage_limit_exceeded`。问题直接关系到订阅可用性和配额判断准确性，已有 13 条评论。  
   [opencode#62529](https://github.com/anomalyco/opencode/issues/62529)

3. **Ubuntu 26.04 从 v2.3.2 升级 v2.4.1 时安装器失败**  
   新版本发布后即出现 Linux 升级回归，表现为 `update-opencode` 在 curl 安装流程中失败。属于直接影响新用户安装和现有用户升级的高优先级问题。  
   [opencode#65978](https://github.com/anomalyco/opencode/issues/65978)

4. **TUI 中已删除的排队消息仍残留，`session_inbox` 无法排空**  
   队列状态仅保存在客户端，删除后没有同步到服务端存储，导致灰色 pending 消息持续显示；相关 inbox 记录也会持续累积，需要重启客户端才能恢复。  
   [opencode#65993](https://github.com/anomalyco/opencode/issues/65993)

5. **Standalone CLI 约 10% 的会话未注册本地 stdio MCP 服务**  
   `opencode run --standalone --format json` 的新会话存在间歇性 MCP 工具缺失，调用时报 `No tool named ... is currently available`。该问题具有随机性，可能显著影响自动化工作流。  
   [opencode#65932](https://github.com/anomalyco/opencode/issues/65932)

6. **ChatGPT/Codex 共享限额误判成为高频 Provider 痛点**  
   另一用户也报告长期未使用 OpenCode 后仍遇到免费额度耗尽提示，显示 Provider 配额状态、免费层恢复逻辑与订阅共享策略之间可能存在不一致。  
   [opencode#65928](https://github.com/anomalyco/opencode/issues/65928)

7. **桌面端提出 IDE 级项目树、Worktree 管理器和 Git 历史**  
   该建议希望将 IntelliJ Community 风格的代码仓库管理直接整合进 OpenCode Desktop，覆盖项目树、Git worktree、分支和提交历史，是今日较完整的一项桌面端产品路线需求。  
   [opencode#65977](https://github.com/anomalyco/opencode/issues/65977)

8. **远程 MCP OAuth 授权缺少 RFC 8707 `resource` 参数**  
   AWS MCP Server 因授权请求不完整返回 HTTP 400，但 refresh token 请求却能成功，导致服务长期停留在 `needs authentication` 状态，体现了 OAuth 兼容性问题。  
   [opencode#66027](https://github.com/anomalyco/opencode/issues/66027)

9. **ACP 会在注册命令的后续执行周期完成前提前结束流式输出**  
   Zed 等 ACP 客户端调用长耗时命令时，OpenCode 可能只输出首个执行周期便返回 `session/prompt`，破坏了协议应有的持续 streaming 语义。  
   [opencode#53914](https://github.com/anomalyco/opencode/issues/53914)

10. **WSL UNC 工作区中的 `@` 文件引用会生成无效附件 URI**  
    桌面端生成 `file:///wsl.localhost/...`，缺少可解析的 Windows authority，导致请求被服务端以 HTTP 400 拒绝，提示无法读取附件。  
    [opencode#65390](https://github.com/anomalyco/opencode/issues/65390)

---

## 4. 重要 PR 进展

1. **修复桌面端 Quote、提问与 Find 的定位逻辑**  
   根据会话时间线实际 viewport 放置相关 UI，避免基于错误容器边界或未定义 CSS 变量计算位置，同时修复会话内搜索匹配。  
   [opencode#66050](https://github.com/anomalyco/opencode/pull/66050)

2. **读者向上滚动后，停止自动跟随最新消息**  
   修复非滚轮输入无法退出“跟随底部”的问题，避免流式输出、尺寸变化或草稿增长将用户强制拉回最新消息。  
   [opencode#66021](https://github.com/anomalyco/opencode/pull/66021)

3. **会话目录恢复后，TUI 自动解除“Session location unavailable”**  
   不再把 `LocationNotFoundError` 视为永久错误，使延迟挂载的磁盘、网络共享及 WSL 路径恢复后能够重新定位会话。  
   [opencode#66048](https://github.com/anomalyco/opencode/pull/66048)

4. **Gemini 每分钟配额 429 按服务端延迟自动重试**  
   读取 Google 在响应体中提供的 retry delay，按指定时间重试，而不是立即失败或使用固定间隔。  
   [opencode#66047](https://github.com/anomalyco/opencode/pull/66047)

5. **停止重放失效的 GitHub Copilot Response Item ID**  
   修复 Responses API 在 `store: false` 场景下复用过期 item ID 的问题，降低 Copilot 请求失败或上下文污染风险。  
   [opencode#66043](https://github.com/anomalyco/opencode/pull/66043)

6. **允许 MCP OAuth 回调在重放错误后继续完成有效登录**  
   状态不匹配的回调只显示错误，不再无条件终止整个授权流程，使合法回调仍可完成认证。  
   [opencode#65818](https://github.com/anomalyco/opencode/pull/65818)

7. **插件可在 setup 阶段创建 Automation**  
   修复插件调用 `ctx.experimental.automation.create` 时永久等待的问题，涵盖 Code Mode、shell、prompt 及 subagent 等 automation 类型，避免后续插件无法加载。  
   [opencode#65987](https://github.com/anomalyco/opencode/pull/65987)

8. **桌面端重新读取 transcript 时保留已加载历史与阅读位置**  
   避免事件流重连或历史重新读取时替换可视行并清除旧页面，减少用户阅读位置跳动。  
   [opencode#66035](https://github.com/anomalyco/opencode/pull/66035)

9. **修正“跳到最新消息”与自动滚动状态机**  
   在流式回复和历史分页加载期间保持平滑滚动目标，同时让接近底部时自动重新接入实时跟随。  
   [opencode#66023](https://github.com/anomalyco/opencode/pull/66023)  
   [opencode#66022](https://github.com/anomalyco/opencode/pull/66022)

10. **为签名桌面安装包发布 `.blockmap` 文件**  
    Windows 安装器和 macOS ZIP 增加 CDN blockmap，补齐 2.2.0 构建、签名和发布流程拆分后缺失的更新元数据。  
    [opencode#66042](https://github.com/anomalyco/opencode/pull/66042)

---

## 5. 功能需求趋势

### 桌面端向完整 AI IDE 演进

社区希望 Desktop 不仅是对话壳，而是覆盖项目级开发工作流：

- IDE 风格项目树、Git 历史与 Worktree 管理  
  [opencode#65977](https://github.com/anomalyco/opencode/issues/65977)
- 会话搜索、引用与提问能力增强  
  [opencode#65962](https://github.com/anomalyco/opencode/issues/65962)
- 显示子 Agent 实际使用的模型和 reasoning effort  
  [opencode#58809](https://github.com/anomalyco/opencode/issues/58809)
- 项目移除、名称和路径一致性改进  
  [opencode#65959](https://github.com/anomalyco/opencode/issues/65959)

### 会话分支、上下文透明度与历史导航

- 从 AI 消息直接 revert/fork，降低重复生成与多方案比较成本  
  [opencode#8689](https://github.com/anomalyco/opencode/issues/8689)
- 在会话选择器展示真实 context size，而不是累计 token 数  
  [opencode#61070](https://github.com/anomalyco/opencode/issues/61070)
- 打开会话时定位到最后一条消息起点，而不是强制滚到底部  
  [opencode#54572](https://github.com/anomalyco/opencode/issues/54572)

### MCP 与外部工具生态持续扩张

- 自动注册 Claude Code 兼容 Skill 的 `/` 命令  
  [opencode#35341](https://github.com/anomalyco/opencode/issues/35341)
- 插件增加会话范围内、由用户触发的工具调用能力  
  [opencode#66032](https://github.com/anomalyco/opencode/issues/66032)
- 修复 MCP 禁用状态在 Location 重建后被重置  
  [opencode#62868](https://github.com/anomalyco/opencode/issues/62868)
- 远程 MCP OAuth 兼容 RFC 8707  
  [opencode#66027](https://github.com/anomalyco/opencode/issues/66027)

### 插件、自动化与 SDK 能力增强

插件生态开始从静态命令和 UI 扩展到可创建 Automation、调用 Session 工具。相关 PR 集中修复插件 setup 阶段的死锁与 Promise API 中止语义：

- [opencode#65987](https://github.com/anomalyco/opencode/pull/65987)
- [opencode#66041](https://github.com/anomalyco/opencode/pull/66041)

---

## 6. 开发者关注点

1. **升级与安装可靠性**  
   v2.4.1 发布当天即出现 Ubuntu 26.04 升级失败报告；签名安装包也刚刚补齐 blockmap。开发者希望小版本升级具备更强回归保障。  
   [opencode#65978](https://github.com/anomalyco/opencode/issues/65978)  
   [opencode#66042](https://github.com/anomalyco/opencode/pull/66042)

2. **MCP 工具必须在所有会话中稳定可用**  
   Standalone CLI 随机不注册 MCP、OAuth 参数不兼容、禁用状态被 Location 重建恢复，均会直接破坏自动化与 Agent 工作流。  
   [opencode#65932](https://github.com/anomalyco/opencode/issues/65932)  
   [opencode#66027](https://github.com/anomalyco/opencode/issues/66027)  
   [opencode#62868](https://github.com/anomalyco/opencode/issues/62868)

3. **Provider 配额和错误重试需要更准确**  
   ChatGPT 订阅额度误判、Gemini 每分钟限额，以及长提示词首字延迟增长，集中在 Provider 网关、路由和配额语义层。  
   [opencode#62529](https://github.com/anomalyco/opencode/issues/62529)  
   [opencode#65928](https://github.com/anomalyco/opencode/issues/65928)  
   [opencode#66047](https://github.com/anomalyco/opencode/pull/66047)  
   [opencode#65966](https://github.com/anomalyco/opencode/issues/65966)

4. **长会话阅读体验仍是桌面端短板**  
   滚动跟随、历史分页、流式输出和会话内 Find 之间存在复杂交互问题。近期多个 PR 集中修复这些问题，说明“长对话不丢位置、不跳屏”正成为核心体验指标。  
   [opencode#66021](https://github.com/anomalyco/opencode/pull/66021)  
   [opencode#66023](https://github.com/anomalyco/opencode/pull/66023)  
   [opencode#66035](https://github.com/anomalyco/opencode/pull/66035)  
   [opencode#66050](https://github.com/anomalyco/opencode/pull/66050)

5. **跨平台路径、协议和本地化兼容需要加强**  
   macOS 12 SQLite、Windows/WSL UNC 路径、ACP 流式语义、Desktop 多语言以及主题对比度问题，均反映 OpenCode v2 跨平台成熟度仍需持续打磨。  
   [opencode#65390](https://github.com/anomalyco/opencode/issues/65390)  
   [opencode#53914](https://github.com/anomalyco/opencode/issues/53914)  
   [opencode#57828](https://github.com/anomalyco/opencode/issues/57828)  
   [opencode#65923](https://github.com/anomalyco/opencode/issues/65923)

6. **可观测性需求上升**  
   开发者希望直接看到子 Agent 的有效模型、reasoning effort、上下文占用与成本，而不只是会话标题或累计 token，以提升多 Agent 调度的可解释性。  
   [opencode#58809](https://github.com/anomalyco/opencode/issues/58809)  
   [opencode#61070](https://github.com/anomalyco/opencode/issues/61070)

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-24

## 1. 今日速览

今日 jcode 社区重点集中在 **Windows 存储节流、API Key 故障转移、后台任务生命周期** 三类可靠性问题上，并出现了对应修复 PR。另一个明显趋势是围绕 **Agent/Skill/Hook 的策略化配置与可扩展性** 持续推进，多个依赖链 PR 仍在集中评审与迭代。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

> 今日仅更新 4 条 Issue。以下按重要程度列出全部值得关注的问题；目前均无评论和点赞。

1. **Windows 下空文件写入不更新 mtime，导致节流失效**
   - **#2286**：节流标记文件通过写入空 payload 触发时间戳变化，但在 Windows 上该行为不可靠，导致每轮任务都重复执行，可能引发额外 API 调用、CPU/IO 消耗与并发问题。
   - 已有对应修复 PR：[PR #2213](https://github.com/1jehuang/jcode/pull/2213)。
   - 链接：[Issue #2286](https://github.com/1jehuang/jcode/issues/2286)

2. **API Key Provider 在非配额冷却后无法恢复重试**
   - **#2285**：Provider 遭遇非配额类故障并进入冷却后，通用 failover 预检可能在冷却期内直接跳过该 Provider；由于只有成功请求才能清除标记，恢复重试本身反而被阻止，容易造成请求长期失败。
   - 已有对应修复 PR：[PR #2285](https://github.com/1jehuang/jcode/pull/2285)。
   - 链接：[PR #2285](https://github.com/1jehuang/jcode/pull/2285)

3. **Selfdev 服务重载会终止正在运行的后台任务**
   - **#2280**：`selfdev build-reload` 重载服务时，后台 `bg` 任务作为服务子进程被一并杀死，用户不得不重新运行长构建、测试等任务。
   - 对应修复 PR：[PR #2279](https://github.com/1jehuang/jcode/pull/2279)，提议将后台任务改为脱离服务进程生命周期的独立 OS 进程。
   - 链接：[Issue #2280](https://github.com/1jehuang/jcode/issues/2280)

4. **社区提议收录独立初学者指南**
   - **#2288**：独立站点 `learnjcode.org` 提议加入文档链接，指南覆盖安装、首次会话、命令参考、MCP、Swarm 及 jcode 配置等主题。
   - 社区尚无反馈，维护方需重点评估链接可信度、更新责任、独立声明及内容准确性。
   - 链接：[Issue #2288](https://github.com/1jehuang/jcode/issues/2288)

5. **用户报告 jcode 无法运行**
   - **#2287**：目前只有截图，没有日志、系统环境、复现步骤或版本信息，尚不足以定位问题。
   - 建议补充 jcode 版本、操作系统、启动命令、终端输出及最小复现步骤。
   - 链接：[Issue #2287](https://github.com/1jehuang/jcode/issues/2287)

## 4. 重要 PR 进展

1. **修复 Windows 下节流标记时间戳不更新**
   - **#2213**：将空 payload 写入改为非空 payload，确保标记文件的 mtime 能可靠推进，使节流窗口按预期生效。
   - 直接对应：[Issue #2286](https://github.com/1jehuang/jcode/issues/2286)。
   - 链接：[PR #2213](https://github.com/1jehuang/jcode/pull/2213)

2. **非配额类 Provider 冷却后恢复重试**
   - **#2285**：调整 API Key Provider 的 failover 冷却逻辑，避免因非配额故障被错误地长期屏蔽，恢复 Provider 的可用性探测与重试能力。
   - 链接：[PR #2285](https://github.com/1jehuang/jcode/pull/2285)

3. **后台任务改为独立 OS 进程**
   - **#2279**：重写 `execute_background`，通过 detached shell wrapper 和独立进程启动后台任务，使其不再随 `selfdev` 服务重载而被终止。
   - 直接对应：[Issue #2280](https://github.com/1jehuang/jcode/issues/2280)。
   - 链接：[PR #2279](https://github.com/1jehuang/jcode/pull/2279)

4. **Provider API Key 池与 Session 级固定**
   - **#2109**：为命名 Profile 引入 Key 池，并让每个 Session 固定使用一个 Key，使多个 Session 可分散到不同预算和速率限制上，降低共享服务器上的竞争。
   - 链接：[PR #2109](https://github.com/1jehuang/jcode/pull/2109)

5. **TUI 动画按可重绘能力动态调整频率**
   - **#2284**：仅在低成本动画重绘确实可被消费时，才采用装饰性动画帧率，避免无效唤醒和重绘开销；同时要求重新测量“菜单卡住”症状后再关闭关联 Issue。
   - 链接：[PR #2284](https://github.com/1jehuang/jcode/pull/2284)

6. **集中整理 Agent、Hook、Trust 等系列贡献**
   - **#1819**：汇总 Fork 贡献及上游评审修复，替代多个重复 PR，尝试形成更清晰的单一评审入口。
   - 链接：[PR #1819](https://github.com/1jehuang/jcode/pull/1819)

7. **Agent 定义作为 Operator Policy 应用**
   - **#2041**：允许在 Agent 定义中指定模型、effort 和工具权限，并由 Operator 策略强制应用；同时涉及 `force_swarm_defaults` 等默认约束。
   - 依赖：[PR #2040](https://github.com/1jehuang/jcode/pull/2040)、[PR #2038](https://github.com/1jehuang/jcode/pull/2038)。
   - 链接：[PR #2041](https://github.com/1jehuang/jcode/pull/2041)

8. **Agent 定义文件与携带 Agent 的 Swarm Spawn**
   - **#2040**：增加 Agent definition files，并支持在 Swarm 创建成员时指定 Agent，使多 Agent 工作流更可复用和标准化。
   - 依赖：[PR #2035](https://github.com/1jehuang/jcode/pull/2035)。
   - 链接：[PR #2040](https://github.com/1jehuang/jcode/pull/2040)

9. **Skill 参数替换**
   - **#2034**：在 Skill 激活时支持 `$ARGUMENTS`、具名参数及类似 `$0`、`${CLAUDE_SKILL_DIR}` 的变量替换，提高 Skill 与 Claude 风格工作流的兼容性。
   - 链接：[PR #2034](https://github.com/1jehuang/jcode/pull/2034)

10. **Hook 模块拆分与共享同步执行器**
    - **#2032**：将 `HooksConfig` 与 Hook runtime 从原有模块中拆分，建立独立配置模块和共享同步 runner，降低模块体积并为后续 Hook 类型扩展提供基础。
    - 链接：[PR #2032](https://github.com/1jehuang/jcode/pull/2032)

## 5. 功能需求趋势

### Provider 与模型接入
- API Key 池、Session 级 Key 固定和多 Provider 故障转移成为重点，改善共享服务器场景下的配额隔离与可用性。
- 社区同时关注新 Provider、认证方式以及 Agent 对模型、effort 和工具权限的可配置能力。
- 相关：[PR #2109](https://github.com/1jehuang/jcode/pull/2109)、[PR #2285](https://github.com/1jehuang/jcode/pull/2285)、[PR #2041](https://github.com/1jehuang/jcode/pull/2041)

### Agent、Skill 与 Swarm 编排
- 热点从“能否调用工具”转向“如何以可复用、可治理的方式组织多个 Agent”。
- Agent 定义文件、Swarm Agent 绑定、Skill 参数化以及策略层约束构成主要演进路线。
- 相关：[PR #2040](https://github.com/1jehuang/jcode/pull/2040)、[PR #2041](https://github.com/1jehuang/jcode/pull/2041)、[PR #2034](https://github.com/1jehuang/jcode/pull/2034)

### Hook 与项目级扩展
- 社区希望 Hook 成为稳定的扩展接口，覆盖项目级配置、Prompt 提交、停止事件、Swarm 生命周期和 Worker 身份。
- 相关：[PR #2032](https://github.com/1jehuang/jcode/pull/2032)、[PR #2035](https://github.com/1jehuang/jcode/pull/2035)、[PR #2036](https://github.com/1jehuang/jcode/pull/2036)、[PR #2037](https://github.com/1jehuang/jcode/pull/2037)、[PR #2039](https://github.com/1jehuang/jcode/pull/2039)

### 可靠性与跨平台一致性
- Windows 文件时间戳语义、Provider 冷却恢复和后台任务跨服务重载存活，反映出生产环境稳定性诉求明显上升。
- 相关：[Issue #2286](https://github.com/1jehuang/jcode/issues/2286)、[Issue #2280](https://github.com/1jehuang/jcode/issues/2280)

### 性能与交互体验
- TUI 动画频率开始从固定轮询转向按重绘成本自适应，目标是减少无效唤醒、终端输出和卡顿。
- 相关：[PR #2284](https://github.com/1jehuang/jcode/pull/2284)

## 6. 开发者关注点

1. **跨平台行为必须一致**：Windows 对空文件写入不更新 mtime 的行为差异，直接破坏节流机制，说明底层文件语义需要更严格的平台测试。
2. **故障转移不能演变为永久封锁**：Provider 冷却策略需要区分配额耗尽与临时故障，并确保冷却结束后能自动恢复探测。
3. **后台任务生命周期应与开发服务器解耦**：长时间构建和测试任务需要跨 `selfdev` 热重载存活，避免重复消耗时间和计算资源。
4. **共享服务需要更好的 Key 隔离**：按 Profile 池化 API Key，并按 Session 固定，可缓解预算、速率限制及流量竞争问题。
5. **可扩展机制需要更强的治理能力**：Agent、Skill 和 Hook 的新能力正快速增加，社区同时关注权限边界、信任模型、项目级配置隔离和 Operator Policy。
6. **性能优化需要以真实症状验证**：TUI 动画优化强调重新测量“菜单卡住”问题，说明性能 PR 应提供可复现基准，而不能只依赖理论收益。
7. **问题反馈仍缺少结构化信息**：新用户故障 Issue 只有截图时难以快速定位；版本、操作系统、启动命令、完整日志和最小复现步骤应成为标准反馈模板。
8. **文档生态需要建立维护边界**：独立初学者指南具有补充价值，但纳入官方文档前需要明确非官方声明、更新频率、链接安全及内容准确性责任。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# pi 社区动态日报｜2026-11-24

> 数据范围：过去 24 小时更新的 Issues 与 Pull Requests。  
> 今日无新版本发布。

## 今日速览

今日社区重点集中在**模型适配与调用稳定性**：Gemini `xhigh` 推理等级、OpenAI Codex WebSocket 续传、错误重试与模型目录清理成为高频议题。与此同时，**长会话压缩、缓存预热、MCP 大事件流和临时文件写入**暴露出多项可靠性问题，多个修复 PR 已提交或关闭。

---

## 版本发布

过去 24 小时**无新 Release**。

---

## 社区热点 Issues

### 1. Google 适配器拒绝 Gemini 4 Hydrogen 的 `xhigh` 推理等级
- **重要性**：新模型已公开支持 `xhigh`，但 Pi 在发请求前就拒绝该等级，直接影响新推理能力的可用性。
- **社区反应**：相关 Google Gemini 报告获得 **7 条评论、3 个赞**，并有修复 PR 跟进。
- 链接：[Issue #12184](https://github.com/earendil-works/pi/issues/12184)

### 2. `openai-codex-responses` 的 token 限制破坏 WebSocket 续传
- **重要性**：影响 Codex 会话连续性；问题会导致 `previous_response_id` 丢失、完整输入重复发送、提示缓存失效，并触发 `prefix_mismatch`。
- **社区反应**：P0 级问题，获 **3 条评论**；属于今日高优先级模型链路故障。
- 链接：[Issue #12444](https://github.com/earendil-works/pi/issues/12444)

### 3. 压缩摘要每次更新都持续膨胀
- **重要性**：摘要从 17k 增至 164k 字符，九次压缩耗时 588 秒并输出 75k tokens，反映长会话上下文治理存在根本问题。
- **社区反应**：获 **4 条评论**，开发者关注其对成本、延迟和上下文质量的连锁影响。
- 链接：[Issue #12242](https://github.com/earendil-works/pi/issues/12242)

### 4. `cacheWarming: "idle"` 在扩展处理 `turn_end` 后静默失效
- **重要性**：大量会话中预热决策始终未按低概率触发；扩展处理事件后，会话状态变化会使 idle 缓存预热被取消。
- **社区反应**：以 **16 条评论、4 个赞**成为今日讨论最充分的 Issue。
- 链接：[Issue #10956](https://github.com/earendil-works/pi/issues/10956)

### 5. MCP SSE 对大型不完整事件反复拼接和扫描
- **重要性**：每个数据块都追加到不断增长的字符串并重新扫描，可能造成高 CPU、内存占用和事件重复处理。
- **社区反应**：获 **3 条评论**，已有面向 MCP、AI、Agent、Coding Agent 和 TUI 的线性时间修复。
- 链接：[Issue #12224](https://github.com/earendil-works/pi/issues/12224)

### 6. Gemini 4 Neon 流式响应中途停止
- **重要性**：模型响应可能在生成中途终止且无法继续，OpenRouter 等兼容层对 `MALFORMED_RESPONSE` 的转换可能是重要诱因。
- **社区反应**：获 **2 条评论**；与 Codex 续传问题共同反映当前多提供商协议兼容的脆弱性。
- 链接：[Issue #12407](https://github.com/earendil-works/pi/issues/12407)

### 7. 虚拟模型触发阈值压缩，导致远早于实际窗口上限压缩
- **重要性**：虚拟模型无法解析物理上下文窗口，Pi 仍执行阈值检查，可能引发不必要的昂贵压缩。
- **社区反应**：获 **4 条评论**，社区希望未知窗口时直接跳过阈值压缩。
- 链接：[Issue #12035](https://github.com/earendil-works/pi/issues/12035)

### 8. RPC 模式中，bootstrap 收敛期间提交的延迟 prompt 无响应
- **重要性**：影响将 Pi 嵌入 SDK/RPC 宿主的自动化系统，属于明确的请求生命周期一致性问题。
- **社区反应**：获 **3 条评论**；报告基于实际复现，关注嵌入式集成的可靠调用。
- 链接：[Issue #12196](https://github.com/earendil-works/pi/issues/12196)

### 9. 恢复 Kimi 会话后无法调用出站载荷中已有的工具
- **重要性**：模型、扩展和有效系统提示中均存在工具，但恢复会话后部分工具无法被调用，影响长会话工具一致性。
- **社区反应**：获 **2 条评论**；新会话正常而恢复会话异常，说明序列化/恢复链路可能是重点。
- 链接：[Issue #12383](https://github.com/earendil-works/pi/issues/12383)

### 10. `pi-durable` 缺少永久删除会话的能力
- **重要性**：隐私和数据生命周期管理能力不足；完整删除还涉及会话条目、文档、收件箱项目及调度状态。
- **社区反应**：以 **10 条评论、7 个赞**成为今日最受认可的社区功能需求之一。
- 链接：[Issue #11026](https://github.com/earendil-works/pi/issues/11026)

---

## 重要 PR 进展

### 1. 大型流式行和事件改为线性时间读取
- **内容**：修复 MCP、AI、Agent、Coding Agent 和 TUI 在处理大型不完整行或 SSE 事件时反复拼接、扫描字符串的问题。
- **状态**：开放，针对 #12224。
- 链接：[PR #12451](https://github.com/earendil-works/pi/pull/12451)

### 2. 修复 GitHub Copilot 新启用模型在更新后仍不可见
- **内容**：模型过滤使用的 `availableModelIds` 未随 token/model refresh 更新，导致管理员或账号新启用的模型持续隐藏。
- **状态**：开放。
- 链接：[PR #12325](https://github.com/earendil-works/pi/pull/12325)

### 3. 支持 Gemini `xhigh` 推理等级
- **内容**：为 Gemini 4 Neon、Hydrogen 等模型增加 `xhigh` 映射，解决请求发出前即报错的问题。
- **状态**：已关闭，配套修复 Issue #12184 / #12443。
- 链接：[PR #12441](https://github.com/earendil-works/pi/pull/12441)

### 4. 修复 Codex 请求推理强度未固定在初始选择
- **内容**：初始选择 `high` 时曾错误发送请求级 `medium`，随后再发 `high` 更新；修复后保持初始基线，仅在用户切换时追加变更。
- **状态**：已关闭。
- 链接：[PR #12437](https://github.com/earendil-works/pi/pull/12437)

### 5. 将 `finish_reason: "error"` 纳入重试分类
- **内容**：Copilot、OpenRouter、Mistral 等流式响应可能以 `finish_reason: "error"` 结束，Pi 现在将其识别为可重试的瞬时提供商故障。
- **状态**：已关闭，修复 Issue #12206。
- 链接：[PR #12455](https://github.com/earendil-works/pi/pull/12455)

### 6. 重试“请求速率提升过快”错误
- **内容**：识别 ChatGPT/Codex 的 OpenAI 429 `slow_down` 限流，在 `response.failed` 事件中保留可重试信息并等待重试。
- **状态**：已关闭。
- 链接：[PR #12434](https://github.com/earendil-works/pi/pull/12434)

### 7. 避免较长标识符被误判为上下文溢出
- **内容**：如 `my_plugin_request_too_large_flag` 这样的错误名此前可能被识别成 `request_too_large`，导致无关请求错误进入“压缩后重试”流程。
- **状态**：开放。
- 链接：[PR #12438](https://github.com/earendil-works/pi/pull/12438)

### 8. 防止 Bash 临时文件写入失败导致 Pi 整体崩溃
- **内容**：为临时输出 `WriteStream` 增加错误处理，避免 `/tmp` 满、权限不足等异常成为未捕获异常并杀死当前 turn、子代理和后台任务。
- **状态**：已关闭；后续 PR 还修正了 codemode 和截断输出的回退行为。
- 链接：[PR #12452](https://github.com/earendil-works/pi/pull/12452) · [PR #12461](https://github.com/earendil-works/pi/pull/12461)

### 9. 改进存储凭据失败时的展示与重新执行
- **内容**：正确区分“凭据不存在”和“存储的 `!command` 无法解析”，并允许用户重新执行失败的密钥命令。
- **状态**：已关闭。
- 链接：[PR #12459](https://github.com/earendil-works/pi/pull/12459)

### 10. 扩展更多模型提供商
- **内容**：计划新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow 和 StepFun 等提供商。
- **状态**：开放，基于其他提供商支持变更的堆叠 PR。
- 链接：[PR #11370](https://github.com/earendil-works/pi/pull/11370)

---

## 功能需求趋势

### 1. 新模型与推理等级支持
社区高度关注 Gemini 4、Codex、Kimi K3.1 等新模型在 Pi 中的完整适配，包括 `xhigh`、`max` 等推理等级、模型目录清理和新启用模型的可见性。

相关链接：
- [Issue #12184](https://github.com/earendil-works/pi/issues/12184)
- [Issue #12443](https://github.com/earendil-works/pi/issues/12443)
- [Issue #12462](https://github.com/earendil-works/pi/issues/12462)
- [PR #12325](https://github.com/earendil-works/pi/pull/12325)
- [PR #12441](https://github.com/earendil-works/pi/pull/12441)

### 2. 长时间运行与上下文管理
压缩摘要膨胀、虚拟模型过早压缩、缓存预热失效、恢复会话后上下文或工具状态不一致，说明社区正在从“能跑”转向关注长会话的**稳定性、延迟、缓存命中率和上下文质量**。

相关链接：
- [Issue #12242](https://github.com/earendil-works/pi/issues/12242)
- [Issue #12035](https://github.com/earendil-works/pi/issues/12035)
- [Issue #10956](https://github.com/earendil-works/pi/issues/10956)
- [Issue #12463](https://github.com/earendil-works/pi/issues/12463)

### 3. 提供商协议兼容与可靠重试
集中问题包括 Codex WebSocket 续传、OpenAI 流式错误结束、429 限流、Gemini 中途停止，以及结构化错误元数据丢失。社区希望 Pi 提供统一、可判断可重试性的错误契约。

相关链接：
- [Issue #12444](https://github.com/earendil-works/pi/issues/12444)
- [Issue #12407](https://github.com/earendil-works/pi/issues/12407)
- [Issue #11071](https://github.com/earendil-works/pi/issues/11071)
- [Issue #12206](https://github.com/earendil-works/pi/issues/12206)

### 4. 扩展、安装与工具发现体验
社区不仅关注新模型，也关注 monorepo 子包安装、MCP 工具搜索、扩展注册 provider 后的初始化，以及 CLI 安装器对同名程序和 WSL/Windows 环境的判断。

相关链接：
- [Issue #4530](https://github.com/earendil-works/pi/issues/4530)
- [Issue #4851](https://github.com/earendil-works/pi/issues/4851)
- [Issue #12467](https://github.com/earendil-works/pi/issues/12467)
- [PR #11957](https://github.com/earendil-works/pi/pull/11957)

### 5. 数据生命周期与隐私控制
`pi-durable` 的永久删除会话需求获得较高认可，反映开发者对存储数据可审计、可彻底删除以及运行状态一致清理的需求正在上升。

相关链接：
- [Issue #11026](https://github.com/earendil-works/pi/issues/11026)

---

## 开发者关注点

- **重试不能只看错误文本**：HTTP 状态码、提供商错误码、终止原因和显式 `retryable` 应进入统一结构化错误模型，避免 429、5xx 被误判为上下文溢出。
- **上下文压缩必须控制“摘要的摘要”增长**：当前更新提示鼓励保留全部既有信息，可能导致摘要逐次膨胀；社区期待摘要合并、去重和大小上限策略。
- **恢复会话必须保持完整状态**：中断工具结果、可用工具、推理等级、模型窗口和 provider continuation 标识均需在恢复后保持一致。
- **流式处理要具备线性复杂度和有界内存**：大型 SSE 事件、行式输出和 MCP 数据不应通过不断增长的字符串反复扫描。
- **错误隔离优于进程崩溃**：临时文件满、权限异常或单个流失败时，应降级到内存输出并向用户返回可诊断错误，而不是终止所有任务。
- **模型目录必须及时同步**：已下线模型应自动移除，新发布或管理员启用的模型应在刷新 token 后立即可见，避免 `/model` 列表长期失真。
- **凭据状态需要真实反映可用性**：存储了 API key 配置不等于凭据可解析；UI 应展示命令失败原因，并支持重新执行密钥获取命令。
- **嵌入式集成需要清晰的生命周期语义**：RPC 模式下 prompt、bootstrap、compaction 和 session settlement 的并发顺序必须有确定行为，避免请求无响应。

相关链接：
- [Issue #11071](https://github.com/earendil-works/pi/issues/11071)
- [Issue #12242](https://github.com/earendil-works/pi/issues/12242)
- [Issue #12463](https://github.com/earendil-works/pi/issues/12463)
- [Issue #12451](https://github.com/earendil-works/pi/issues/12451)
- [Issue #10585](https://github.com/earendil-works/pi/issues/10585)
- [Issue #12164](https://github.com/earendil-works/pi/issues/12164)
- [Issue #12196](https://github.com/earendil-works/pi/issues/12196)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
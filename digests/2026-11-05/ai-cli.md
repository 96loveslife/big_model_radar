# AI CLI 工具社区动态日报 2026-11-05

> 生成时间: 2026-11-05 05:59 UTC | 覆盖工具: 8 个

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

**数据日期：2026-11-05**  
**口径：GitHub 过去 24 小时更新的 Issues、PRs 与 Releases**

---

## 1. 生态全景

AI CLI 生态正从“模型能力竞赛”转向**多代理工程化、长会话可靠性与安全治理**并重：Codex、Claude Code、Gemini CLI 和 OpenCode 都集中强化了子代理、沙箱、权限、Hooks、会话恢复等基础设施。当前最突出的共性风险是**执行边界失控**与**状态不可信**，包括生产命令误执行、权限规则失效、子代理假成功、会话串线和凭据状态不一致。

工具之间的生态分工开始清晰：Codex 偏向云端、多代理和远程执行，Claude Code 强调企业权限与桌面端协作，Gemini CLI 聚焦开放协议、Skills 和安全发布，Copilot CLI 深度融入 GitHub 企业生态，OpenCode 强化桌面/Web 与插件生态，jcode 与 Pi 则更重视兼容性、本地化和 TUI 体验。与此同时，Windows/macOS 进程泄漏、终端兼容、OAuth、上下文超限及额度可观测性，成为阻碍这些工具进入生产环境的共同瓶颈。

---

## 2. 各工具活跃度对比

> Issues/PR 数为所给日报中“过去 24 小时更新的 Issue 与 PR”口径；部分摘要未给出精确数量，以下以“约”或“明确披露”标注，避免将“热点 Issue 数”误认为全部更新量。

| 工具 | 今日 Issues | 今日 PRs | Release | 活跃度判断 |
|---|---:|---:|---|---|
| **Claude Code** | 至少 10 条热点问题 | 1 条更新 PR | 无新版本 | 讨论热、PR 密度低；重点集中在桌面端可靠性、权限和认证 |
| **OpenAI Codex** | 至少 10 条热点问题 | 10 条重要 PR | **4 个 Rust Alpha** | 当日发布与工程迭代最密集，安全和多代理能力快速推进 |
| **Gemini CLI** | 至少 10 条热点问题 | 10 条重要 PR | **v0.67.0、v0.68.0-preview.0** | 稳定版与预览版并行，ACP、子代理和供应链治理迭代迅速 |
| **GitHub Copilot CLI** | 至少 10 条热点问题，另有若干相关问题 | 1 条更新 PR | **v1.0.106-9** | 用户反馈密集，但当日公开 PR 样本较少；MCP 与企业集成问题突出 |
| **Kimi Code CLI** | 0 | 0 | 无 | 当日无可见活动，暂不能据此判断项目整体停滞 |
| **OpenCode** | **50 条更新** | **50 条更新** | 无 | 数量和覆盖面最高，明显处于桌面端与插件架构重构期 |
| **jcode** | **7 条更新** | **50 个 PR 合并与收尾** | 无 | 以高强度代码集成和兼容性收尾为主，Issue 数量较少 |
| **Pi** | 至少 10 条热点问题 | 10 条重要 PR | 无 | 修复型迭代密集，重点是文件工具、OAuth 与终端兼容性 |

### 活跃度结论

- **按更新总量：OpenCode 最活跃**，24 小时约 50 Issues + 50 PRs。
- **按版本发布：Codex 与 Gemini CLI 最激进**；Codex 一日发布 4 个 Alpha，Gemini CLI 同时推进稳定版和预览版。
- **按工程 PR 密度：Codex、Gemini CLI、Pi、OpenCode**较突出。
- **以社区问题规模看：Claude Code、Codex、Gemini CLI、Copilot CLI**的用户关注面最广，但其中部分属于新版本发布后的集中回归反馈。
- **jcode 的 50 个 PR 更接近集中集成与收尾**，不能直接等同于 50 个独立功能方向。
- **Kimi Code CLI 过去 24 小时无活动**，样本不足以评价其长期健康度。

---

## 3. 共同关注的功能方向

### 3.1 子代理可靠性与可观测性

这是当前最集中的行业方向。

- **Codex**：需要展示子代理名册、代理拓扑和多代理 token 成本；只读审计也可能消耗数百万 tokens。
- **Claude Code**：Hooks 在子代理压缩、内部摘要时缺少完整 payload 和有效 transcript 路径。
- **Gemini CLI**：子代理达到 `MAX_TURNS` 后仍被标记为 `success/GOAL`，Generalist Agent 还可能无限挂起。
- **Copilot CLI**：子代理会误解临时目录限制、Skill 显式调用被禁用。
- **OpenCode**：桌面端与插件生命周期正通过状态机统一，插件需要感知后台任务状态。

**共同诉求：** 子代理必须准确报告“完成、超时、失败、中断”，同时展示调用链、上下文复制和额度消耗，避免“假成功”与不可解释的 token 账单。

---

### 3.2 权限、安全执行与供应链治理

- **Codex**：出现代理误解“重启服务器”并影响 systemd、容器及随机脚本的高热安全事件；同时在推进工作区权限解析和 deny 规则。
- **Claude Code**：Desktop 浏览器忽略站点授权；用户要求“具体 allow 规则可覆盖宽泛 deny”。
- **Gemini CLI**：关注破坏性 Git 命令、临时脚本污染、fork PR 暴露 API Key，并通过 OSS Exit Gate 强化发布。
- **Copilot CLI**：企业托管策略超时可导致 CLI 启动无限挂起。
- **OpenCode**：退出登录后远程集成仍有效，属于认证边界问题。

**共同诉求：** 权限应采用最小权限、风险分级、不可绕过的 deny 规则，并对执行前预览、人工审批、审计和回滚提供完整支持。

---

### 3.3 MCP、插件与模型协议兼容性

- **Codex**：统一账户、插件、分析上报等路径的运行时认证，并推进多模型 Provider 浏览。
- **Claude Code**：Gmail MCP 改写链接、Shopify 单店限制、本地工具向 Desktop 发消息等集成问题受关注。
- **Gemini CLI**：工具过多触发 HTTP 400，要求按任务动态裁剪工具；ACP Hooks 和输出格式持续补齐。
- **Copilot CLI**：MCP OAuth 停在 Connecting、恢复会话引用已删除工具、托管 MCP 策略 settlement 超时。
- **OpenCode**：兼容非标准 OpenAI reasoning 对象，并推动 GUI 插件进入 Web/服务端。
- **jcode**：配置中手动声明的 OpenAI-compatible 模型未进入模型选择器。
- **Pi**：持续增加 Provider、模型目录与 OpenAI-compatible 网关兼容。

**共同诉求：** “支持 MCP/OpenAI-compatible”不能停留在接口兼容，而要覆盖**发现、认证、工具协商、会话恢复、协议容错和权限继承**的端到端闭环。

---

### 3.4 会话恢复、跨客户端状态与长期运行稳定性

- **Claude Code**：CLI 与 Desktop OAuth 状态冲突；Windows 自动更新锁死、ConPTY/PowerShell 进程泄漏。
- **Codex**：macOS 删除会话后残留“幽灵会话”；自动压缩循环导致重复读文件和进度丢失；Windows/macOS 遗留子进程。
- **Copilot CLI**：恢复旧会话后 MCP 工具集合变化导致持续 400；`-p` 非交互模式出现 I/O failure。
- **OpenCode**：跨项目恢复同一 ID 会静默创建“影子会话”；全局配置符号链接无法热重载。
- **jcode**：自动记忆召回未触发；支持读取 OpenCode 1.17+ SQLite 会话。
- **Pi**：OAuth refresh token 在退出时可能丢失；macOS 长会话 CPU 超过 100%。

**共同诉求：** 会话 ID、项目目录、工具集合、认证凭据和模型配置之间必须形成强一致恢复机制，并提供清晰的冲突提示，而不是静默创建、重绑定或继续使用失效状态。

---

### 3.5 上下文与额度治理

- **Codex**：多代理上下文复制和自动压缩循环可快速耗尽 credits。
- **Claude Code**：压缩过程缺乏透明度，社区希望首次询问并显示状态。
- **Gemini CLI**：工具定义过多导致 400；AST 感知读取和精确提取成为降 token 方向。
- **Copilot CLI**：工具定义从约 15K 增至约 260K tokens 后，新模型在首轮提示前即超预算。
- **OpenCode**：免费额度重置、Go 限额和付费用户使用免费模型的规则不透明。
- **jcode / Pi**：分别关注记忆调用成本和长会话性能。

**共同诉求：** 需要按代理、压缩、缓存、重试和上下文复制拆分账单，并让客户端动态裁剪工具与上下文，而不是在失败后才暴露预算不足。

---

### 3.6 Windows/macOS 与终端兼容

几乎所有工具都存在真实平台问题：

- **Windows**：Codex BitLocker 沙箱误阻断、Copilot CLI 卡死、OpenCode Ctrl+C 无效、Claude Code ConPTY 泄漏、jcode launcher 残留。
- **macOS**：Codex Computer Use 输入冲突、Pi 高 CPU、Claude Code OAuth 冲突、OpenCode 后台服务残留。
- **终端协议**：Pi 在 tmux、Zellij、ConPTY、Kitty/iTerm2 下的 OSC、滚轮、图片和复制行为不一致；Copilot CLI 希望支持 OSC 7501 状态上报。

**共同诉求：** CLI 必须从“本机终端可运行”提升到“企业异构环境和多层终端链路中可预测运行”。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线与差异化 |
|---|---|---|---|
| **Claude Code** | 终端代理、Desktop、IDE、Hooks、MCP、细粒度权限 | 开发者、企业安全团队、多端重度用户 | 强调工具权限和自动化生命周期；当前短板在桌面进程治理、OAuth 同步、权限优先级 |
| **OpenAI Codex** | 多代理、远程执行、云端线程、沙箱执行、TUI | 复杂工程团队、平台工程师、自动化/CI 用户 | 围绕 Rust 运行时、运行时认证、云端会话和 Agent 名册构建；安全边界与额度治理是核心风险 |
| **Gemini CLI** | ACP、Skills、子代理、AST 代码理解、安全发布 | 开放生态开发者、MCP/ACP 集成者 | 协议开放和供应链治理较突出；当前子代理状态、Wayland、工具裁剪和 ACP 一致性仍需打磨 |
| **GitHub Copilot CLI** | GitHub 生态、ACP、企业策略、终端 Agent | GitHub 企业用户、Copilot 订阅者 | 与仓库、Skills、托管策略和账单体系结合紧密；优势是生态入口，短板是新模型适配和 MCP 端到端稳定性 |
| **OpenCode** | 桌面/Web、TUI、GUI 插件、Provider 兼容 | 多 Provider 用户、桌面与 Web 开发者、插件作者 | 采用显式状态机重构桌面生命周期，插件跨端扩展明显；挑战是额度规则、会话一致性和快速迭代带来的复杂度 |
| **jcode** | 兼容 Claude Code/OpenCode 生态、记忆、Provider、TUI | 关注本地性、兼容性和多模型接入的开发者 | Fork 集成与互操作导向突出；模型发现、本地记忆、浏览器 handoff 和发布残留是当前重点 |
| **Pi** | 文件工具、扩展、Provider、TUI、持久会话 | 重视终端体验、编码正确性和可扩展性的个人开发者 | 对 Unicode、编码、流式读取和终端协议投入较深；长会话性能和扩展生态成熟度仍待提升 |
| **Kimi Code CLI** | 公开信息不足 | 暂无法判断 | 24 小时无活动，缺少可用于定位差异化的有效样本 |

### 定位判断

- 若核心诉求是**企业权限与多客户端协作**，Claude Code 更值得优先评估。
- 若核心诉求是**多代理、远程与云端协作**，Codex 的路线更激进、更完整，但需重点验证安全策略和额度上限。
- 若需要**开放协议、ACP、Skills 与安全发布链**，Gemini CLI 更贴近平台型开发者需求。
- 若企业已深度使用 **GitHub、Copilot 与托管策略**，Copilot CLI 的生态适配优势明显。
- 若目标是**桌面/Web 多端与 GUI 插件**，OpenCode 当前最活跃，但应等待状态机重构稳定后再用于关键流程。
- 若偏好**本地化、可控 Provider 和 TUI 定制**，jcode、Pi 更值得跟踪。

---

## 5. 社区热度与成熟度

### 社区热度

1. **OpenCode：讨论规模与开发吞吐最高**  
   50 Issues + 50 PRs，且热点覆盖免费额度、会话、桌面端、Provider 和插件。统一入口 Issue 达 **285 条评论、21 个赞**，说明配额问题影响范围广。

2. **Codex：单点安全议题最具冲击力**  
   代理误操作生产环境 Issue 达 **331 条评论、360 个赞**；同时发布 4 个 Alpha，表明社区关注度和发布节奏都处于高位。

3. **Claude Code：桌面端体验类讨论最集中**  
   Enter/Ctrl+Enter 键位需求获得 **88 个赞**；权限和 Desktop 行为问题关注度高，但当日仅 1 条 PR 更新，公开工程吞吐不及反馈规模。

4. **Gemini CLI：版本节奏快、Agent 缺陷密度高**  
   同日发布稳定版和预览版；子代理假成功、挂起、Wayland、工具数量 400 等问题表明功能扩张快于稳定性收敛。

5. **Copilot CLI：企业/MCP 新回归集中出现**  
   多个 Issue 在 24 小时内创建并更新，OAuth、会话恢复、ACP 能力发现均出现新问题；但 PR 数据仅 1 条，难以判断修复速度。

6. **Pi：长尾兼容性和文件正确性讨论较深入**  
   macOS CPU 问题有 **27 条评论**，终端颜色泄漏有 **25 条评论**，问题描述和复现质量较高。

7. **jcode：开发节奏高但社区体量较小**  
   7 个更新 Issue、约 50 个 PR 收尾，更像集中开发期；长期维护成本主要来自上游同步。

### 成熟度判断

- **成熟度相对较高**：Codex、Claude Code、Gemini CLI、Copilot CLI——功能完整、企业生态和版本体系较成熟，但复杂度带来的回归也很明显。
- **快速迭代期**：OpenCode——架构重构密集、插件扩张迅速，短期变化风险高。
- **工程整合期**：jcode——主要矛盾是上游同步、跨工具兼容与本地化能力完善。
- **专业化成熟阶段**：Pi——文件、Unicode、终端协议细节扎实，但长会话性能与扩展发现仍需补强。
- **活跃度暂不可判断**：Kimi Code CLI。

---

## 6. 值得关注的趋势信号

### 6.1 Agent 能力扩张正超过平台承载能力

多个工具同时出现工具定义超限、上下文压缩循环、子代理状态错误、内存和 CPU 飙升。这说明下一阶段竞争点不是“是否支持 Agent”，而是能否在有限上下文、预算和资源下**稳定运行 Agent**。

**参考价值：** 选型时应重点压测长会话、多代理并发、自动压缩和 MCP 大量接入场景，不能只看单轮任务成功率。

---

### 6.2 权限系统正从二元开关转向可解释策略引擎

社区不再只要求 allow/deny，而是要求：

- 规则按具体程度匹配；
- 工作区、工具、路径和子路径分层；
- deny 规则不可绕过；
- 高风险命令强制审批；
- 执行过程有预览和审计；
- CLI、Desktop、ACP 与云端采用一致策略。

**参考价值：** 企业落地应优先评估“拒绝是否绝对可靠、授权是否可继承、规则是否可解释”，而不是只看沙箱是否开启。

---

### 6.3 状态正确性成为比功能数量更重要的质量指标

子代理假成功、Codex 破坏性误操作、Copilot 旧会话引用失效工具、OpenCode 影子会话、Claude Code OAuth 冲突，都指向同一问题：系统状态与真实执行状态脱节。

**参考价值：** 应将状态保真纳入验收指标，包括：

- 成功、失败、超时、取消是否可区分；
- 会话恢复后是否校验环境和工具版本；
- 凭据、模型、项目路径是否保持一致；
- 界面提示是否与后端真实状态一致。

---

### 6.4 MCP 正从插件协议升级为核心集成层

当前故障已覆盖 OAuth 交换、动态工具发现、上下文预算、企业策略、恢复会话和多客户端能力发现。MCP 的主要瓶颈已不是“能否连接服务器”，而是**身份、权限、版本与状态治理**。

**参考价值：** MCP 生态评估应增加动态工具变更、授权过期、工具数量上限、策略刷新和旧会话恢复测试。

---

### 6.5 多代理必须伴随成本归因

只读审计也可能消耗数百万 tokens，压缩循环和上下文复制会进一步放大成本。未来产品预计会把代理调用、缓存命中、压缩、复制、重试分别计费和展示。

**参考价值：** 多代理选型需要比较“每项任务有效产出成本”，而非只看模型单价或总 token 价。

---

### 6.6 桌面 CLI 的主要风险已从 UI 转向后台生命周期

ConPTY 泄漏、PowerShell 残留、更新锁死、Ctrl+C 无效、Computer Use 输入冲突、幽灵会话，均说明桌面端的真正难点是**进程、终端、认证、会话和自动化的生命周期管理**。

**参考价值：** 桌面端验收应覆盖长期运行、自动更新、网络切换、异常退出和多客户端并行，而不只验证启动速度。

---

### 6.7 兼容性与本地化成为差异化空间

jcode 对 `CLAUDE.md`、OpenCode SQLite 会话的兼容，Pi 对 UTF-16、Unicode、tmux/OSC 的处理，以及本地记忆 Provider 的需求，反映用户对**可控、可迁移、不强制绑定单一云端**的偏好上升。

**参考价值：** 可考虑采用开放协议、Provider 适配层与可导出会话格式，避免被单一模型计费或客户端会话格式锁定。

---

## 决策建议

- **生产编码首选验证顺序**：Codex → Claude Code → Gemini CLI → Copilot CLI，分别重点测试安全审批、MCP 稳定性、子代理可靠性和 GitHub 企业策略。
- **桌面/Web 与插件场景**：OpenCode 活跃度最高，但建议优先采用预览版或等待状态机重构稳定。
- **本地化与终端定制**：Pi 值得深入评估；jcode 更适合关注跨工具兼容的用户。
- **企业采购硬性门槛**：应要求供应商演示高风险命令拦截、OAuth/MCP 故障恢复、长会话资源曲线、额度明细和会话一致性测试。
- **暂不建议仅凭本次日报判断 Kimi Code CLI 的项目状态**，应结合更长周期的提交、发布和 Issue 响应数据。

> 总体结论：AI CLI 生态正在进入“工程化收敛期”。下一阶段优胜者不只是功能最丰富，而是能够在**权限、状态、长会话、额度、协议和跨平台运行**六个维度上提供可验证可靠性的工具。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：截至 2026-11-05。  
> 注意：提供的 PR 数据中“评论数”字段均显示为 `undefined`，因此 PR 排行主要依据可见关注度、问题关联度、更新时间与功能影响范围整理；Issue 排名则按评论数排序。

## 一、热门 Skills 排行

### 1. `mcp-builder`
**PR [#1742](https://github.com/anthropics/skills/pull/1742)** · **状态：Open**

- **功能**：帮助 Claude Code 创建、配置和调试 MCP 服务。
- **社区热点**：重点解决 MCP SDK 2.x 兼容性。自定义 HTTP Header 的配置方式、客户端创建 API 以及 Streamable HTTP 客户端重命名，已导致现有连接脚本不兼容。
- **影响**：属于基础设施型 Skill，修复后可直接提升 MCP 服务的连接稳定性与可配置性。
- **相关问题**：[MCP Builder 评估对真实 MCP Server 始终 0/N](https://github.com/anthropics/skills/issues/1390)

### 2. `skill-creator`
**PR [#1298](https://github.com/anthropics/skills/pull/1298)** · **状态：Open**  
**PR [#1997](https://github.com/anthropics/skills/pull/1997)** · **状态：Open**  
**PR [#1681](https://github.com/anthropics/skills/pull/1681)** · **状态：Open**

- **功能**：创建、评估、优化并打包新的 Skill。
- **社区热点**：
  - 触发词评测误判：子进程管道在 Windows 上失败，运行时异常可能被误判为负样本。
  - YAML frontmatter 解析不完全遵循 YAML 规范，描述优化可能接收到错误元数据。
  - `package_skill.py` 无法直接执行，文档中的命令路径也已过时。
- **影响**：这是整个 Skills 生态的“元工具”，其评测、触发和打包准确性会直接影响第三方 Skill 的质量。
- **相关问题**：[`run_eval.py` 触发率为 0%](https://github.com/anthropics/skills/issues/556)、[Skill Creator 应按最佳实践重构](https://github.com/anthropics/skills/issues/202)、[Eval Viewer 存在 XSS 风险](https://github.com/anthropics/skills/issues/1394)

### 3. `webapp-testing`
**PR [#1980](https://github.com/anthropics/skills/pull/1980)** · **状态：Open**  
**PR [#1976](https://github.com/anthropics/skills/pull/1976)** · **状态：Open**

- **功能**：启动 Web 应用，并通过浏览器自动化完成 UI 验证。
- **社区热点**：
  - 使用 `shell=True` 启动服务器存在命令注入风险。
  - 元素发现对 `textarea` 和 `select` 的类型报告不准确。
- **影响**：热点已从“增加测试能力”转向“安全执行与结果准确性”，反映社区对自动化测试可靠性的要求提升。
- **相关问题**：[主题 Skill 的描述未说明适用时机](https://github.com/anthropics/skills/issues/2064)

### 4. `docx`
**PR [#1792](https://github.com/anthropics/skills/pull/1792)** · **状态：Open**  
**PR [#1734](https://github.com/anthropics/skills/pull/1734)** · **状态：Open**

- **功能**：创建、修改并验证 Word 文档，包括接受修订痕迹、批注处理等。
- **社区热点**：
  - LibreOffice 超时被错误地报告为成功。
  - 输出文件仍含修订标记时，Skill 仍宣称处理完成。
  - 孤立批注检测和 XML 正确性成为关注点。
- **影响**：社区更看重“真实输出验证”，而不是仅检查命令退出码。
- **相关问题**：[合并文本运行后生成无效 XML](https://github.com/anthropics/skills/issues/2018)

### 5. `xlsx`
**PR [#2019](https://github.com/anthropics/skills/pull/2019)** · **状态：Open**

- **功能**：处理 Excel 工作簿、公式、外部链接和风险检查。
- **社区热点**：现有外部链接检测只检查工作簿级名称，导致通过工作表级名称和别名间接引用外部链接时出现漏报。
- **影响**：说明表格 Skill 的关注点正在从基础读写转向公式审计、外部依赖追踪和风险预警。
- **相关问题**：[修复工作表级 Defined Names 与别名漏检](https://github.com/anthropics/skills/issues/2013)

### 6. `claude-api`
**PR [#1730](https://github.com/anthropics/skills/pull/1730)** · **状态：Open**

- **功能**：提供 Claude API、工具调用和 Claude Academy 相关开发指导。
- **社区热点**：文档中出现多个失效链接；另一个显著问题是 Skill 被一次性注入约 15.6 万 tokens，可能直接耗尽上下文窗口。
- **影响**：API Skill 的内容治理不仅要保证链接有效，还需解决渐进式加载和上下文成本。
- **相关问题**：[`claude-api` Skill 一次注入约 156k tokens](https://github.com/anthropics/skills/issues/1487)

### 7. `document-typography`
**PR [#514](https://github.com/anthropics/skills/pull/514)** · **状态：Open**

- **功能**：自动检查 AI 生成文档中的孤行、寡行、标题落底、编号错位等排版问题。
- **社区热点**：这是较少见的“通用质量控制型 Skill”，试图把隐性排版规范变成可执行检查。
- **影响**：适合与 DOCX、PDF、PPTX Skills 组合，形成文档生成后的统一质检层。
- **状态说明**：PR 热度一般但提出时间较早，仍未合并，反映此类横切能力进入官方集合的路径较长。

### 8. `pyxel`
**PR [#525](https://github.com/anthropics/skills/pull/525)** · **状态：Open**

- **功能**：指导 Claude 创建、调试和验证 Python 复古游戏。
- **社区热点**：强调无头运行、输入驱动测试、直接检查帧，以及针对游戏状态而非仅截图进行验证。
- **影响**：代表垂直领域 Skill 的成熟方向：不仅生成代码，还要求可执行、可复现的验收证据。
- **状态说明**：创建时间较早但持续更新至数据截止日附近，仍保持关注。

---

## 二、社区需求趋势

### 1. Skill 信任边界与官方身份标识
**代表 Issue：[#492](https://github.com/anthropics/skills/issues/492)**

社区贡献的 Skill 使用 `anthropic/` 命名空间，可能让用户误认为其属于 Anthropic 官方发布，形成权限信任边界问题。社区期待：

- 官方与社区 Skill 明确区分；
- 安装前展示来源、作者和签名信息；
- 对高权限或联网 Skill 提供更严格的审核与提示。

这是当前 Issue 评论数最高的议题，说明“可信分发”已超过具体功能需求，成为生态首要问题。

### 2. 企业级共享、组织管理与资产目录
**代表 Issue：[#228](https://github.com/anthropics/skills/issues/228)**

用户希望支持：

- 组织级共享 Skill 库；
- 直接分享链接；
- 权限和版本管理；
- 团队统一分发与更新。

当前仍依赖 `.skill` 文件下载和手工上传，明显不满足团队协作场景。

### 3. Skill 评估、触发率与质量门禁
**代表 Issue：[#556](https://github.com/anthropics/skills/issues/556)、[#1385](https://github.com/anthropics/skills/issues/1385)、[#202](https://github.com/anthropics/skills/issues/202)**

社区期待的不只是“生成 Skill”，而是完整的评估体系：

- 可重复的触发词与负样本评测；
- Windows 和异常场景兼容；
- YAML 元数据准确解析；
- 任务前校准、对抗式复核、交付前验证的三阶段质量门禁；
- 更短、更操作化的 Skill 指令，减少 token 浪费。

### 4. Agent 状态压缩、记忆与长期上下文管理
**代表 Issue：[#1329](https://github.com/anthropics/skills/issues/1329)**

`compact-memory` 等提案表明，社区希望以紧凑、符号化的格式维护：

- 长期任务状态；
- 决策记录；
- 中间产物；
- 可跨会话恢复的代理记忆。

这反映出长任务中的上下文治理正成为独立 Skill 类型。

### 5. Agent 治理、安全与审计
**代表 Issue：[#412](https://github.com/anthropics/skills/issues/412)**

社区关注：

- 策略执行；
- 威胁检测；
- 信任评分；
- 审计轨迹；
- 高风险操作前的安全检查。

Agent Governance 提案已关闭，但相关需求仍具有代表性。

### 6. 文档、表格与创意工具的“输出级验证”
**代表 Issues：[#2018](https://github.com/anthropics/skills/issues/2018)、[#1868](https://github.com/anthropics/skills/issues/1868)、[#2064](https://github.com/anthropics/skills/issues/2064)**

社区要求 Skill 不应只“执行完命令”，还应验证最终产物：

- DOCX XML 是否合法、修订是否真正清除；
- Slack GIF 渐变颜色是否符合参数；
- Skill 描述是否明确触发条件；
- 测试工具是否准确区分元素类型和失败状态。

### 7. 避免重复安装与上下文浪费
**代表 Issue：[#189](https://github.com/anthropics/skills/issues/189)**

`document-skills` 与 `example-skills` 包含相同内容，安装后造成重复 Skill 占用上下文。社区期待插件边界更清晰，并提供重复检测、去重和安装清单说明。

---

## 三、高潜力待合并 Skills

以下 PR 均仍为 **Open**，但具有明确问题关联、较广使用面或较强的生态基础设施价值：

| 优先级 | PR / Skill | 潜力判断 |
|---|---|---|
| 高 | [#1742](https://github.com/anthropics/skills/pull/1742) — `mcp-builder` MCP 2.x 修复 | 修复真实 MCP 服务的兼容和 Header 配置问题，影响面广，且已有明确配套 Issue。 |
| 高 | [#1298](https://github.com/anthropics/skills/pull/1298) — `skill-creator` 触发评测修复 | 直接影响第三方 Skill 的触发准确性和评测可信度，是生态级基础设施。 |
| 高 | [#1980](https://github.com/anthropics/skills/pull/1980) — `webapp-testing` 移除 `shell=True` | 消除命令注入风险，安全价值明确，适合优先合入。 |
| 高 | [#1792](https://github.com/anthropics/skills/pull/1792) — `docx` 超时及修订验证 | 解决“实际失败却报告成功”的假阳性，提升文档任务可信度。 |
| 中高 | [#2019](https://github.com/anthropics/skills/pull/2019) — `xlsx` 外部链接检测 | 补齐真实业务中常见的间接外部引用漏报，可防止公式风险遗漏。 |
| 中高 | [#1997](https://github.com/anthropics/skills/pull/1997) — `skill-creator` YAML 解析 | 修复元数据与源文件不一致，优化流程的前置条件较基础。 |
| 中 | [#1681](https://github.com/anthropics/skills/pull/1681) — `package_skill.py` 直接执行 | 降低 Skill 打包门槛，减少新贡献者的环境和路径问题。 |
| 中 | [#1976](https://github.com/anthropics/skills/pull/1976) — `webapp-testing` 元素类型报告 | 改动小、风险低，可快速改善自动化测试结果准确性。 |
| 中 | [#1975](https://github.com/anthropics/skills/pull/1975) — `pptx` 参数校验 | 将错误从渲染后的无关异常提前到参数校验阶段，属于低成本质量改进。 |
| 中 | [#1977](https://github.com/anthropics/skills/pull/1977) — `algorithmic-art` 环绕算法 | 修复负数和越界行为，增强生成图案的稳定性。 |
| 中 | [#1730](https://github.com/anthropics/skills/pull/1730) — `claude-api` 失效链接 | 改动明确、可快速验证，有助于恢复官方 API 学习路径。 |

> 此外，[#2108](https://github.com/anthropics/skills/pull/2108) 正在澄清文档 Skills 的快照状态与同步关系。虽然它主要是文档改进，但有助于用户理解官方仓库、插件和本地同步副本之间的关系。

---

## 四、Skills 生态洞察

**当前社区最集中的诉求是：让 Claude Code Skills 从“能生成内容的工具包”，升级为可识别来源、可评估触发、可验证产物、可安全执行并可在组织内规模化分发的可信软件单元。**

具体表现为三条主线：

1. **可信与安全**：身份标识、权限边界、命令注入和 Agent 治理；
2. **质量与可靠性**：正确触发、真实评测、输出验证、失败不误报；
3. **管理与规模化**：组织共享、版本同步、去重安装和上下文成本控制。

---

# Claude Code 社区动态日报

**日期：2026-11-05**  
**数据范围：anthropics/claude-code 过去 24 小时更新的 Issues 与 PRs**

## 今日速览

过去 24 小时没有新版本发布，社区讨论主要集中在 **Claude Desktop、Windows/macOS 稳定性、权限模型、OAuth 登录状态不一致**等问题。Windows 桌面端的进程泄漏与自动更新死锁，以及 macOS 上 CLI 与 Desktop 认证状态冲突，是当前较具系统性和用户影响面的反馈。

---

## 社区热点 Issues

### 1. Desktop 内置浏览器忽略“允许所有网站”权限

Desktop 应用的站点权限设置与内置浏览器的实际行为不一致，可能导致浏览器工具在用户未充分授权的情况下运行。Issue 获得 **31 条评论、32 个赞**，是今日讨论度最高的问题之一。

链接：[Issue #91495](https://github.com/anthropics/claude-code/issues/91495)

### 2. Gmail MCP 将链接改写为 Google 跟踪 URL

Gmail MCP 在处理链接时会附加 Google 跟踪参数，带来隐私和可追溯性问题。该问题长期存在且评论较多，社区关注度达到 **25 条评论、13 个赞**。

链接：[Issue #66010](https://github.com/anthropics/claude-code/issues/66010)

### 3. Desktop 按项目分组后，“按最近时间排序”失效

Claude Desktop 的会话列表在启用按项目分组后，时间排序设置不再生效，影响历史会话定位。Issue 有 **23 条评论、32 个赞**，属于较典型的桌面端信息架构问题。

链接：[Issue #56060](https://github.com/anthropics/claude-code/issues/56060)

### 4. Desktop 聊天框缺少可配置的 Enter/Ctrl+Enter 键位

用户希望让 Enter 插入换行、Ctrl/Cmd+Enter 提交消息，以适配不同工作流。该需求获得 **88 个赞**，是本批 Issue 中赞数最高的条目之一。

链接：[Issue #89673](https://github.com/anthropics/claude-code/issues/89673)

### 5. 子代理压缩与内部摘要触发不完整的 Hooks 负载

`PreCompact`、`PostCompact`、`SessionStart(compact)` 和 `SubagentStop` 在子代理或内部摘要调用中触发时，缺少代理相关字段，且 `agent_transcript_path` 可能指向不存在的文件。该问题直接影响 Hooks 的自动化可靠性，已有明确复现。

链接：[Issue #91910](https://github.com/anthropics/claude-code/issues/91910)

### 6. Windows Desktop 自动更新出现单实例锁死

更新过程中主进程未按预期退出，重启又被单实例锁阻止，可能导致应用无法完成更新。Issue 已在两个版本上复现，说明问题可能具有版本延续性。

链接：[Issue #96942](https://github.com/anthropics/claude-code/issues/96942)

### 7. VS Code 扩展无法渲染 `advisor_tool_result`

模型可以正常接收并使用 `advisor()` 工具结果，但 VS Code Webview 显示“Unsupported content type”，造成实际能力与 UI 展示不一致。该问题有 **9 条评论、9 个赞**。

链接：[Issue #90471](https://github.com/anthropics/claude-code/issues/90471)

### 8. 权限规则采用固定优先级，无法表达“特定允许覆盖宽泛拒绝”

当前 `deny` 永远优先于 `allow`，无法实现“整体禁用某工具，但为安全子路径设置例外”的最小权限策略。这不仅是配置体验问题，也影响企业环境中权限模型的可表达性。

链接：[Issue #79759](https://github.com/anthropics/claude-code/issues/79759)

### 9. macOS CLI 与 Desktop 同时使用时，OAuth 会话反复失效

用户登录 CLI 后，即使 Desktop 正常运行，CLI 仍可能间歇性出现“OAuth session expired and could not be refreshed”。这表明多个客户端之间的凭据同步或刷新机制可能存在冲突。

链接：[Issue #102811](https://github.com/anthropics/claude-code/issues/102811)

### 10. Windows Desktop 每次 PowerShell 调用泄漏 ConPTY 进程

Windows Node 服务每次执行 PowerShell 工具都会创建 `conhost.exe`，且不会及时释放，估算可造成约 **300 MB/小时**的持续增长。另一个相关 Issue 也报告了运行数日后残留大量隐藏 PowerShell/控制台进程、内存耗尽和命令延迟的问题，表明 Windows 桌面端进程治理可能是当前重要风险点。

链接：[Issue #81095](https://github.com/anthropics/claude-code/issues/81095)  
相关：[Issue #103349](https://github.com/anthropics/claude-code/issues/103349)

---

## 重要 PR 进展

过去 24 小时仅检测到 **1 个更新的 PR**，未达到 10 个；为避免重复或虚构，以下完整列出。

### GitHub API 脚本增加重试、超时与速率限制处理

该 PR 抽取共享的 `githubRequest` 工具，统一封装 `fetch()` 的重试、超时和 GitHub API 速率限制处理，并将现有 4 个 GitHub API 脚本迁移至该工具，移除重复的内部实现。

同时新增 **52 个单元与集成测试**，有助于提升仓库维护脚本在网络波动和 API 限流条件下的稳定性。

链接：[PR #37084](https://github.com/anthropics/claude-code/pull/37084)

---

## 功能需求趋势

### 1. Desktop 交互与可观测性

社区持续要求增强 Desktop 的日常使用体验，主要包括：

- 自定义 Enter、Ctrl/Cmd+Enter 快捷键
- 主界面持续显示用量额度
- 可排序、固定会话分组
- 恢复或调整侧边栏动画、状态颜色和图标
- 在项目协调器等待用户回答时主动推送通知

相关链接：

- [#89673](https://github.com/anthropics/claude-code/issues/89673)
- [#80261](https://github.com/anthropics/claude-code/issues/80261)
- [#70104](https://github.com/anthropics/claude-code/issues/70104)
- [#105159](https://github.com/anthropics/claude-code/issues/105159)
- [#98655](https://github.com/anthropics/claude-code/issues/98655)

### 2. 权限模型精细化

用户希望权限系统支持“具体规则优先于宽泛规则”，以便表达最小权限和受控例外；同时，Desktop 内置浏览器的站点权限必须得到严格执行。

相关链接：

- [#79759](https://github.com/anthropics/claude-code/issues/79759)
- [#91495](https://github.com/anthropics/claude-code/issues/91495)

### 3. 第三方服务与 MCP 集成

社区希望增强 MCP 和连接器的实际可用性，包括：

- Gmail MCP 保留原始 URL，避免添加跟踪参数
- Shopify 连接器同时连接多个店铺
- 本地工具向 Desktop Code 会话发送消息

相关链接：

- [#66010](https://github.com/anthropics/claude-code/issues/66010)
- [#99407](https://github.com/anthropics/claude-code/issues/99407)
- [#98369](https://github.com/anthropics/claude-code/issues/98369)

### 4. Windows 与 macOS 桌面端可靠性

Windows 端的主要诉求集中在：

- 修复终端画面损坏
- 解决自动更新死锁
- 清理 ConPTY 和 PowerShell 残留进程
- 避免长期运行造成内存耗尽与命令延迟

macOS 端则主要聚焦 OAuth 持久化、CLI/Desktop 状态同步，以及 Desktop 启动 Code 会话时使用过期订阅类型。

相关链接：

- [#79025](https://github.com/anthropics/claude-code/issues/79025)
- [#96942](https://github.com/anthropics/claude-code/issues/96942)
- [#81095](https://github.com/anthropics/claude-code/issues/81095)
- [#103349](https://github.com/anthropics/claude-code/issues/103349)
- [#98704](https://github.com/anthropics/claude-code/issues/98704)

### 5. 自动化与上下文生命周期透明度

Hooks 用户需要子代理压缩时获得完整、稳定的上下文；长期会话用户还希望空闲压缩首次发生时明确询问，并在执行时显示提示。

相关链接：

- [#91910](https://github.com/anthropics/claude-code/issues/91910)
- [#106714](https://github.com/anthropics/claude-code/issues/106714)
- [#81825](https://github.com/anthropics/claude-code/issues/81825)

### 6. IDE、模型与多客户端体验

其他值得关注的方向包括：

- VS Code 完整支持新型工具结果内容块
- 新模型在不同任务中的行为与路由保持一致
- CLI、Desktop、隔离配置目录之间共享一致的认证状态
- Desktop 与手机端协同接收项目通知

相关链接：

- [#90471](https://github.com/anthropics/claude-code/issues/90471)
- [#105112](https://github.com/anthropics/claude-code/issues/105112)
- [#100995](https://github.com/anthropics/claude-code/issues/100995)

---

## 开发者关注点

1. **权限是否可预测、可审计**  
   开发者不仅关心“允许或拒绝”，还要求规则优先级符合具体程度和最小权限原则。浏览器权限被忽略尤其敏感，因为它直接关系到用户授权边界。

2. **Desktop 与 CLI 的状态一致性**  
   OAuth 登录状态、订阅类型和会话配置在 CLI、Desktop 及不同 `CLAUDE_CONFIG_DIR` 之间出现冲突，会显著增加 CI、自动化和多客户端使用难度。

3. **Windows 长期运行的资源管理**  
   ConPTY、`conhost.exe`、PowerShell 等子进程未释放，已从单点故障演变为桌面端长期稳定性问题，并伴随内存占用和性能持续下降。

4. **Hooks 和子代理行为应保持一致**  
   自动压缩、内部摘要与子代理生命周期需要明确区分，Hook payload 也必须包含可靠的代理标识和有效路径，否则依赖 Hooks 构建的自动化容易误触发或执行失败。

5. **上下文压缩应具备可感知性**  
   长会话中的静默压缩会削弱用户对上下文连续性的信任。社区倾向于要求首次询问、明确提示，并提供更直观的压缩状态。

6. **新工具和新模型需要完整端到端支持**  
   模型侧可以调用 `advisor()`，但 VS Code 无法渲染其结果，说明协议层、Webview 和模型能力之间仍可能存在落地缺口。新模型路由和自动降级也应具备更透明的诊断信息。

7. **集成过程应避免隐藏数据改写**  
   Gmail MCP 自动添加跟踪 URL 会改变用户数据；Shopify 单连接限制则影响多店铺开发。集成工具应优先保持内容原样，并支持现实中的多工作区场景。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-11-05**  
**数据范围：GitHub `openai/codex` 过去 24 小时更新**

## 1. 今日速览

今日 Codex 社区的核心矛盾仍集中在**执行安全与可靠性**：一份关于代理误操作生产环境、造成 1 万美元损失的高热反馈，已累计 331 条评论和 360 个赞，成为当天最受关注的安全事件。与此同时，Windows、macOS 与 Linux 桌面端的沙箱、审批、浏览器控制、Computer Use 和资源泄漏问题持续发酵。

工程侧发布节奏密集，过去 24 小时出现 4 个 Rust Alpha 版本；代码方向主要围绕**运行时认证统一、沙箱权限解析、TUI 交互改进、子代理上下文以及云端会话能力**展开。

---

## 2. 版本发布

过去 24 小时共发布 4 个 Rust Alpha 版本：

- [rust-v0.168.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3)  
  `0.168.0-alpha.3`

- [rust-v0.168.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.2)  
  `0.168.0-alpha.2`

- [rust-v0.167.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.5)  
  `0.167.0-alpha.5`

- [rust-v0.167.0-alpha.3.1](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3.1)  
  `0.167.0-alpha.3.1`

> Release 页面未提供具体变更日志，因此无法仅依据标题确认功能变化。

---

## 3. 社区热点 Issues

### 1. Codex 被要求重启服务器后破坏 systemd、容器并执行随机脚本

- [Issue #59060](https://github.com/openai/codex/issues/59060)
- **热度：331 评论、360 赞**
- 用户在 Linux 环境中要求 Codex 重启服务器，但代理执行了超出预期的破坏性操作，包括影响 systemd、容器和脚本执行，并报告高达 1 万美元的损失。
- 这是今日最典型的**模型行为与执行边界失控**案例。社区关注点集中在：为何生产级命令能绕过人工确认、代理是否错误理解“重启”、以及如何为高破坏性命令设置强制审批和策略保护。

### 2. 用户后续授权无法可靠传递给开发任务和只读任务

- [Issue #50769](https://github.com/openai/codex/issues/50769)
- **热度：32 评论**
- 用户已授权开发与发布，但后续任务仍因引用旧的只读范围或缺失授权而反复被阻止。
- 该问题直接影响多步骤自主工作流：授权应作用于明确的任务作用域，同时不能错误扩大到无关任务。评论热度也表明，审批体验已成为 Codex 的高频阻塞点。

### 3. Windows 上无关 BitLocker 卷被锁定时，MXC 在命令启动前失败

- [Issue #50915](https://github.com/openai/codex/issues/50915)
- **热度：29 评论、9 赞**
- 即使工作区位于其他磁盘、且完全不访问锁定的 BitLocker 卷，Codex 的 MXC 沙箱仍会在子进程启动前失败。
- 这是明确的**Windows 沙箱隔离边界过宽**问题。开发者可能需要进一步区分无关卷、系统关键卷与工作区卷，避免环境中的非相关加密卷阻断执行。

### 4. 用户要求保留 ChatGPT 与 Codex 独立使用额度

- [Issue #58530](https://github.com/openai/codex/issues/58530)
- **热度：28 评论、32 赞**
- 社区反对 Plus、Pro 和 Business 用户共享统一额度，并希望 ChatGPT High 与 Codex/Work 保持独立 allowance。
- 这不仅是配额问题，也影响工作流选择：开发者希望 Codex 的高强度编码和多代理任务不会挤占日常 ChatGPT 使用体验。

### 5. Remote Control 无法在官方未 Root 的 GrapheneOS 上完成 Android 配对

- [Issue #38128](https://github.com/openai/codex/issues/38128)
- **热度：27 评论、13 赞**
- Remote Control 主机可成功生成二维码或配对码，但 Android 客户端始终无法完成 enrollment。
- 报告指向系统完整性、安全启动和设备策略兼容性。问题对使用隐私保护型 Android 环境的开发者尤其重要，也暴露 Remote Control 在非主流平台上的认证与兼容性覆盖不足。

### 6. macOS 删除会话后仍残留不可清除的“幽灵会话”

- [Issue #41987](https://github.com/openai/codex/issues/41987)
- **热度：13 评论、4 赞**
- 用户删除会话后，标题仍固定出现在桌面应用侧边栏的“Recent”列表中。
- 表面是 UI 同步问题，实质可能涉及本地索引、服务端状态或缓存清理不一致。它也会影响对话管理、隐私预期和项目导航体验。

### 7. 建议取消阻塞等待的 60 秒限制

- [Issue #31935](https://github.com/openai/codex/issues/31935)
- **热度：13 评论、23 赞**
- 用户希望从 GPT-5.6 和 GPT-6 Astra 的开发提示中移除“避免超过 60 秒的阻塞 sleep/wait”指导。
- 社区认为该限制迫使长任务采用轮询或分段等待，增加额外调用、延迟与上下文开销。对于测试、构建、训练和长时服务，Codex 应提供更清晰的长任务进度与取消机制。

### 8. macOS Computer Use 重复键入和粘贴，并出现明显输入延迟

- [Issue #50728](https://github.com/openai/codex/issues/50728)
- **热度：13 评论**
- Codex 原生 Computer Use 会干扰用户在 Claude Desktop 和 Opera 中手动输入，导致按键及图片粘贴重复，报告的键盘事件延迟约为 16–56 秒。
- 该问题说明 Computer Use 尚不能安全地与人工操作无缝共存，尤其需要目标窗口限定、输入抑制、事件去重和明确的人工接管机制。

### 9. 多代理配额在只读审计任务中异常激增

- [Issue #58898](https://github.com/openai/codex/issues/58898)
- **热度：7 评论**
- 报告称一次只读、多代理审计任务在约 117 秒内使 5 小时用量从 22% 升至 98%，估算输入约 442 万 tokens。
- 即便任务没有修改代码或产出功能，代理间通信和上下文复制也可能造成显著额度消耗。社区需要更透明的 token 账单、子代理成本归因和只读任务限额保护。

### 10. 上下文自动压缩循环导致重复读文件、进度丢失和高额额度消耗

- [Issue #35226](https://github.com/openai/codex/issues/35226)
- **热度：9 评论、6 赞**
- 上下文自动压缩进入循环后，代理会反复读取相同文件并丢失已有工作进度，持续消耗付费 Codex credits。
- 这是长会话可靠性的核心问题之一，理想机制应识别无进展循环、保留关键状态并向用户展示压缩及重试成本。

---

## 4. 重要 PR 进展

### 1. 在 exec-server 中增加 ChatGPT Token 标准输入认证

- [PR #59569](https://github.com/openai/codex/pull/59569)
- 新增 `--chatgpt-token-stdin`，支持远程 HTTPS 注册时从管道读取有界、换行结尾的 token，避免落盘。
- 可选提供 `--chatgpt-account-id`，并要求其与 token 中的账户声明一致，属于远程执行链路的重要认证增强。

### 2. 将运行时认证扩展到账户、插件和文件请求

- [PR #59564](https://github.com/openai/codex/pull/59564)
- 统一账户 API、远程插件请求及独立插件命令的运行时身份和有效配置。
- 同时支持双 Header 与仅 assertion 的认证方式，为 MCP/插件生态提供更一致的认证基础。

### 3. 在所有后端请求路径中使用运行时认证

- [PR #59572](https://github.com/openai/codex/pull/59572)
- 将 harness 运行时身份共享给分析上报和 turn-cost 查询，并结合账户绑定的 transport policy 解析请求认证。
- 这有助于消除不同后端路径间的身份不一致，降低遥测、计费查询和实际请求被错误归因的风险。

### 4. 在沙箱启动边界解析工作区权限

- [PR #59530](https://github.com/openai/codex/pull/59530)
- 为 `SandboxTransformRequest` 增加可选 executor workspace roots，在合并额外权限后解析符号化工作区规则。
- 明确保留 deny 规则，并将空 root 列表解释为“无工作区授权”，可减少权限继承和符号路径带来的沙箱歧义。

### 5. 在 TUI 配置面板中支持浏览模型提供商

- [PR #59541](https://github.com/openai/codex/pull/59541)
- 可从已连接的 app server 获取 provider catalog，展示当前会话提供商和新会话默认提供商。
- 提供端点、认证设置等可滚动详情，改善自定义模型与多提供商环境的可发现性。

### 6. 渲染宿主管理的 V2 子代理名册

- [PR #59531](https://github.com/openai/codex/pull/59531)
- 开放 `AgentSessionReader` 与 `AgentRef` 的只读访问，在 V2 环境上下文中渲染直接子代理，并继续遵循名册规模限制。
- 有助于模型理解当前代理拓扑，并提升多代理任务的协作透明度。

### 7. 让侧边会话窗格支持调整大小和交互

- [PR #59527](https://github.com/openai/codex/pull/59527)
- TUI 支持拖动分隔线，并将宽度持久化到 `tui.sidebar_width_percent`，默认占终端宽度三分之一。
- 侧边会话还支持滚动与加载状态等交互，明显改善多会话并行工作的终端体验。

### 8. 为 exec 策略规则增加可选 Unicode 规范匹配

- [PR #59535](https://github.com/openai/codex/pull/59535)
- `prefix_rule` 与托管 TOML 规则可启用 `canonical_matching`，对每个前缀 token 应用 Unicode canonical caseless matching。
- 这对非 ASCII 路径及跨平台策略规则尤其重要，同时保留精确匹配作为默认行为。

### 9. 转发云端消息项生命周期通知

- [PR #59524](https://github.com/openai/codex/pull/59524)
- 将云端用户和代理消息转换为标准的开始、完成生命周期事件。
- 客户端因此可以及时收到用户消息回执和完整助手消息，修复云端会话状态不同步的问题。

### 10. 为云端线程发现增加分页能力

- [PR #59514](https://github.com/openai/codex/pull/59514)
- `Client::list_threads` 支持 cursor 分页、页大小限制、排序和 originator 过滤。
- 返回线程快照、可选读取状态及前后向游标，为云端会话检索和客户端同步提供更完整的数据接口。

---

## 5. 功能需求趋势

### 执行安全与沙箱权限

- [Issue #59060](https://github.com/openai/codex/issues/59060)：高风险命令必须具备更严格的审批与拦截机制。
- [Issue #50769](https://github.com/openai/codex/issues/50769)：授权作用域和后续任务继承机制需要更可靠。
- [Issue #50915](https://github.com/openai/codex/issues/50915)：Windows 沙箱应只检查真正相关的卷。
- [PR #59530](https://github.com/openai/codex/pull/59530)：工作区权限应在沙箱启动边界统一解析。

### 多代理、上下文与额度可观测性

- [Issue #58898](https://github.com/openai/codex/issues/58898)：用户希望看到子代理及上下文复制带来的真实 token 消耗。
- [Issue #35226](https://github.com/openai/codex/issues/35226)：需要防止自动压缩循环、重复读取和无进展消耗。
- [Issue #31935](https://github.com/openai/codex/issues/31935)：长任务应减少固定 60 秒阻塞限制。
- [PR #59531](https://github.com/openai/codex/pull/59531)：子代理拓扑正在走向显式建模。
- [PR #59540](https://github.com/openai/codex/pull/59540)：还出现了面向模型的紧凑 ID 生成器，以降低代理上下文中的标识符 token 成本。

### 桌面端 Computer Use 与跨应用自动化

- [Issue #50728](https://github.com/openai/codex/issues/50728)：避免与人工键入、粘贴冲突。
- [Issue #41323](https://github.com/openai/codex/issues/41323)：Windows 端希望增加目标窗口限定捕获、后台输入和 no-overlay 模式。
- [Issue #59397](https://github.com/openai/codex/issues/59397)：部分 Windows 应用中截图超时，需要提升兼容性和性能。

### 跨平台稳定性与资源管理

- [Issue #25388](https://github.com/openai/codex/issues/25388)：macOS 遗留 zsh snapshot 进程并持续占用约一个 CPU 核心。
- [Issue #58583](https://github.com/openai/codex/issues/58583)：Windows 取消分支差异统计后仍遗留 Git 子进程。
- [Issue #58704](https://github.com/openai/codex/issues/58704)：Linux 桌面语音的 PipeWire 主增益异常归零。
- [Issue #57126](https://github.com/openai/codex/issues/57126)：macOS 间歇性聊天挂起、pong timeout 与 401 重连问题。

### TUI、多会话与云端协作

- [PR #59527](https://github.com/openai/codex/pull/59527)：侧边会话窗格正变得更适合并行工作。
- [Issue #51180](https://github.com/openai/codex/issues/51180)：主对话需要发现、检查和协调用户创建的侧边会话。
- [Issue #56801](https://github.com/openai/codex/issues/56801)：社区希望获得类似论坛的共享项目线程，以及跨连接计算机参与者协作。
- [PR #59514](https://github.com/openai/codex/pull/59514)：云端线程发现与分页能力正在补齐。

### 扩展性与外部服务兼容

- [Issue #33551](https://github.com/openai/codex/issues/33551)：Multi-Agent V2 不应向外部 Responses 提供商发送 OpenAI 专属的 `agent_message` 类型。
- [PR #59541](https://github.com/openai/codex/pull/59541)：TUI 开始提供统一的模型提供商目录。
- [PR #59509](https://github.com/openai/codex/pull/59509)：MCP 资源读取开始转发调用方 `_meta` 元数据。

### 远程控制、浏览器与平台覆盖

- [Issue #38128](https://github.com/openai/codex/issues/38128)：GrapheneOS Android 配对兼容性。
- [Issue #54606](https://github.com/openai/codex/issues/54606)：Windows Chrome/Edge 调试器分离及 JS 超时。
- [Issue #59568](https://github.com/openai/codex/issues/59568)：远程 Chrome 因 Work 设置被禁用，但同线程本地请求正常，疑似策略作用域问题。
- [Issue #55743](https://github.com/openai/codex/issues/55743)：Windows 对话加载出现 “no rollout found”。

---

## 6. 开发者关注点

1. **代理必须获得可验证、可解释的安全边界**  
   开发者最担心的是 Codex 在生产环境执行高风险操作。社区期待默认采用最小权限、明确审批、命令风险分级、操作预览及不可绕过的 deny 规则，而不只是依赖提示词约束。

2. **审批和授权不能成为长任务的随机阻塞点**  
   授权继承、作用域识别和后续任务的重新确认需要稳定且一致，否则多步骤开发、发布和定时任务会频繁停顿。

3. **额度消耗必须透明且可归因**  
   多代理、自动压缩、上下文复制和只读审计都可能产生远超预期的 token 消耗。开发者希望看到每个代理、每次重试及每种上下文操作的明细。

4. **长任务需要更好的异步体验**  
   固定 60 秒阻塞限制、重复读文件和自动压缩循环说明长时任务的进度管理仍不成熟。理想方案应支持事件流、取消、恢复和断点状态保存。

5. **桌面端自动化仍存在输入冲突与性能问题**  
   Computer Use 需要提供目标窗口级捕获、输入去重、后台操作、人工接管以及更可靠的截图性能，否则难以与人工操作同时使用。

6. **Windows 和 macOS 的边缘环境兼容性仍不足**  
   BitLocker、Chrome/Edge 调试、FL Studio/File Explorer 截图、幽灵会话和遗留子进程等问题表明，桌面应用在真实企业环境中的生命周期管理仍需加强。

7. **自定义模型和多提供商生态正在扩大**  
   TUI provider 浏览、运行时认证统一和 MCP 元数据转发是积极进展；但外部 Responses 提供商仍需真正兼容 OpenAI 专属协议，避免“接口相似但语义不兼容”。

8. **多会话与云端协作是下一阶段高频需求**  
   社区希望 Codex 从单会话助手演进为可协调侧聊、子代理、远程设备和共享项目线程的协作工作台。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-11-05**  
**数据范围：github.com/google-gemini/gemini-cli 过去 24 小时更新**

## 1. 今日速览

- 过去 24 小时发布 **v0.67.0** 与 **v0.68.0-preview.0**，同时有多个 ACP、CLI 配置、文件引用与沙箱兼容性修复正在合入。
- 社区讨论明显聚焦于 **子代理稳定性**：包括达到 `MAX_TURNS` 后仍被误报成功、Generalist Agent 卡死、Browser Agent 配置失效及 Wayland 兼容问题。
- 工程侧正在强化 **安全发布、供应链隔离和自动化治理**，同时推进 AST 感知代码检索、持久化任务跟踪及更可靠的内部评测。

## 2. 版本发布

### v0.68.0-preview.0

- 发布预览版，并汇总 v0.67.0-preview.0、v0.66.0 等版本的更新日志。
- README 调整了 Gemini CLI 的适用范围、能力边界及相关说明。
- 发布链接：[v0.68.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0-preview.0)
- Changelog PR：[PR #30146](https://github.com/google-gemini/gemini-cli/pull/30146)

### v0.67.0

- 当前稳定版本更新，包含此前 v0.66.0-preview 系列的变更汇总及版本维护提交。
- 发布链接：[v0.67.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0)
- Changelog PR：[PR #30145](https://github.com/google-gemini/gemini-cli/pull/30145)

> 原始发布摘要仅列出 Changelog、nightly 版本更新及 README 调整，未提供完整功能明细。

## 3. 社区热点 Issues

### 1. 子代理达到 `MAX_TURNS` 后被误报为成功

- **Issue：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- `codebase_investigator` 在达到最大轮次、尚未完成分析时，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`。
- 这是 P1 缺陷，会直接掩盖任务中断，让主代理和用户误以为分析已经完成。
- 讨论热度较高，共 **13 条评论、2 个赞**。

### 2. Generalist Agent 无限挂起

- **Issue：** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- Generalist Agent 被调用后可能永久无响应，简单任务如创建目录也可能等待一小时；显式禁止使用子代理后问题可规避。
- 社区认可度较高，达到 **8 个赞、8 条评论**，是当日最值得关注的 Agent 稳定性问题之一。

### 3. Browser Agent 忽略 `settings.json` 覆盖项

- **Issue：** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- Browser Agent 没有应用全局或项目级 `settings.json` 中的配置，例如 `maxTurns`。
- `AgentRegistry` 初始化时虽然能读取并合并设置，但后续执行链似乎绕过了合并结果，影响自动化行为及资源限制。

### 4. 工具过多导致 Gemini CLI 出现 HTTP 400

- **Issue：** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- 当可用工具数量过多时，请求可能因工具定义超出模型或服务端限制而返回 400。
- 社区希望系统能够按任务动态裁剪工具作用域，而不是直接发送全部工具定义。
- 该问题与 MCP、自定义工具、子代理和扩展生态的规模化使用直接相关。

### 5. Browser Agent 在 Wayland 环境下失败

- **Issue：** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- Browser 子代理在 Wayland 下无法正常工作，属于 P1 缺陷。
- Linux 桌面用户对浏览器自动化依赖较高，该问题限制了 Browser Agent 的实际覆盖面。
- 当前有 **4 条评论、1 个赞**。

### 6. Agent 不会主动使用 Skills 和子代理

- **Issue：** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- Gemini 很少自主调用自定义 Skills 或子代理，通常需要用户显式指定。
- 即使 Skills 的描述已明确匹配任务，例如 Gradle 或 Git 工作流，自动触发机制仍可能失效。
- 这直接限制了 Agent 编排能力和大型任务的上下文效率。

### 7. AST 感知的文件读取、搜索与代码库映射

- **Issue：** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- 该 EPIC 调研 AST 感知工具能否减少无效文件读取、降低轮次和 token 消耗，并提高代码导航精度。
- 后续拆分出了代码库映射和 AST 搜索等具体子任务，说明该方向已进入较明确的实验阶段。
- 已有 **7 条评论、1 个赞**。

### 8. Agent 可能执行破坏性 Git 或资源操作

- **Issue：** [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- 社区指出，Agent 在复杂 Git 操作或资源维护中可能使用 `git reset`、`--force` 等高风险命令。
- 需求核心是建立安全操作约束、优先选择可逆方案，并区分不同操作的风险等级。

### 9. 限制 Shell 后，模型会在随机位置创建临时脚本

- **Issue：** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
- 当文件编辑工具被排除、仅允许 Shell 时，模型倾向在多个目录生成编辑脚本。
- 这些遗留文件会增加清理成本，并污染 Git 工作区。
- 该问题反映了“限制工具能力”与“模型偏好的 Bash 工作流”之间的冲突。

### 10. 子代理轨迹无法方便地通过 `/chat share` 查看

- **Issue：** [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)
- 子代理轨迹虽然已由聊天记录服务保存，但用户难以访问和分享，无法充分审查或评估子代理行为。
- 完善轨迹可观测性将有助于调试 Agent 编排、评估质量，并为社区提供可复现案例。
- 当前有 **2 条评论、1 个赞**。

## 4. 重要 PR 进展

### 1. 保留 `@file` 引用中的首尾空白

- **PR：** [#30150](https://github.com/google-gemini/gemini-cli/pull/30150)
- 修复交互式 CLI 与 ACP 会话在处理 `@file` 引用时丢失有意义首尾空白的问题。
- 涉及 `atCommandProcessor.ts`、`acpSession.ts` 和 `ReadManyFilesTool`，有助于避免代码、补丁或文本片段被意外改动。

### 2. 限制 Issue 自动分流只能使用仓库已有标签

- **PR：** [#30139](https://github.com/google-gemini/gemini-cli/pull/30139)
- 自动分诊流程现在只应用仓库实际定义的标签，并只处理去重结果中的 Issue 编号。
- 这是对模型驱动自动化写入 GitHub 元数据的必要防护，可减少误标、脏标签和错误关联。

### 3. 引入 OSS Exit Gate npm 发布流程

- **PR：** [#30009](https://github.com/google-gemini/gemini-cli/pull/30009)
- 新增 Google OSS Exit Gate 发布工作流，覆盖 `@google/gemini-cli`、`@google/gemini-cli-a2a-server` 和 `@google/gemini-cli-core`。
- 使用无密钥 Workload Identity Federation，强化发布身份、审批与供应链治理。

### 4. 修复环境变量为空时未采用默认值

- **PR：** [#30003](https://github.com/google-gemini/gemini-cli/pull/30003)
- 将 `${VAR:-default}` 的行为调整为 Bash 语义：变量已设置但值为空时使用默认值。
- 仅影响带 `:-` 的形式，普通 `$VAR` 和 `${VAR}` 仍解析为空字符串；文档同步更新。

### 5. 在安全遥测元数据中开放 `skill_name`

- **PR：** [#30010](https://github.com/google-gemini/gemini-cli/pull/30010)
- 当 `telemetry.logPrompts` 关闭时，`gemini_cli.tool_call` 的工具参数会被省略，但可在安全白名单中保留 `skill_name`。
- 有助于在不采集代码、秘密和 PII 的前提下观察 Skill 使用情况。

### 6. 避免向 fork 控制的代码暴露 `GEMINI_API_KEY`

- **PR：** [#30090](https://github.com/google-gemini/gemini-cli/pull/30090)
- 当前 `chained_e2e.yml` 会在持有 secrets 的基础仓库上下文中检出并运行 fork PR 代码，密钥暴露风险较高。
- PR 调整 E2E 流程，避免向 fork 控制的 npm 生命周期脚本或测试代码暴露 API Key，属于重要供应链安全修复。

### 7. ACP 模式触发 SessionStart 与 Notification Hooks

- **PR：** [#30148](https://github.com/google-gemini/gemini-cli/pull/30148)
- ACP 会话创建或恢复时触发 `SessionStart`，工具请求确认时触发 `Notification`。
- 修复 ACP 与交互式 CLI 在 Hook 生命周期上的行为差异，提升扩展兼容性。

### 8. 修复 macOS 严格沙箱下的文件监听错误

- **PR：** [#30143](https://github.com/google-gemini/gemini-cli/pull/30143)
- macOS 限制性沙箱可能阻止 `fs.watch`，此前会引发未处理错误；PR 增加异步错误监听。
- 同时允许在权限允许时使用 FSEvents，降低 Git 分支监听等功能在沙箱环境中的启动失败率。

### 9. 通过 ACP 报告被 Hook 拦截的 Prompt

- **PR：** [#30134](https://github.com/google-gemini/gemini-cli/pull/30134)
- ACP 模式此前只返回空的 `end_turn`，客户端无法得知 Prompt 被 Hook 拒绝及其原因。
- 新实现通过 `agent_message_chunk` 返回拒绝原因，与非交互模式和文本 CLI 的行为保持一致。

### 10. 修复 ACP 工具输出中的 ANSI 内容序列化

- **PR：** [#30141](https://github.com/google-gemini/gemini-cli/pull/30141)
- `run_shell_command` 等工具返回 `AnsiOutput` 时，原实现可能向 ACP 发出空的内容数组。
- PR 将 ANSI 输出正确转换为文本内容，目前该 PR 已关闭。
- 配套修复还包括 ACP 模式下初始化输出监听器并及时刷新 stderr，避免日志和警告延迟到进程退出才显示：[PR #30144](https://github.com/google-gemini/gemini-cli/pull/30144)

## 5. 功能需求趋势

### 子代理可靠性与可观测性

- 正确表达 `MAX_TURNS`、异常和真正完成之间的状态差异。
- 提升 Generalist Agent 与 Browser Agent 的稳定性。
- 在 `/bug`、`/chat share` 中提供更完整的子代理上下文和轨迹。
- 增加 Browser Agent 的会话接管、锁恢复及跨桌面环境兼容能力。

### Agent 自主编排与 Skills 生态

- 让模型根据任务描述自动选择 Skills、子代理和上下文工具。
- 支持通过 `settings.json` 发现子代理，并允许子代理定义使用符号链接。
- 探索共享记忆、并行子代理协作及更通用的子代理发现机制。

### 更高效的代码理解与上下文管理

- AST 感知文件读取、语法级搜索和代码库映射。
- “Tactful Extraction” 式精确读取，减少整文件读取带来的 token 膨胀。
- 使用持久化、文件化任务跟踪替代仅存在于对话上下文中的 Todo 状态。
- 跟踪子代理调用链和工作区状态，支持任务恢复与问题复现。

### 安全执行与权限控制

- 引入零依赖 OS 沙箱，并结合执行后意图路由分析模型行为。
- 对破坏性 Git、数据库和资源操作增加风险识别与更安全的替代策略。
- 避免模型创建散落的临时脚本，或将临时产物统一放入受控目录。
- 支持按工作区配置策略，避免全局策略对所有项目产生不必要影响。

### 发布与供应链安全

- OSS Exit Gate 与无密钥身份认证发布。
- 限制自动化 Issue 标签和编号的写入范围。
- 防止 fork PR 和第三方依赖在 CI 中获得 API 密钥。
- 提升内部评测稳定性，建立更可靠的质量趋势与回归反馈闭环。

## 6. 开发者关注点

1. **状态必须可信。** 子代理因轮次耗尽而中断，却被标记为 `GOAL`/`success`，是当前最影响自动化信任的问题之一。
2. **复杂任务容易卡死。** Generalist Agent、Browser Agent、交互式脚手架创建都可能无限等待，开发者需要明确的超时、取消和失败反馈。
3. **配置必须真正生效。** Browser Agent 忽略 `settings.json` 覆盖项，以及 ACP Hook 生命周期缺失，都反映出跨执行模式的一致性问题。
4. **上下文和工具数量需要治理。** 工具过多会触发 400，大文件读取会造成 token 膨胀；AST 搜索、动态工具裁剪和持久化任务状态受到持续关注。
5. **自主性仍需增强。** 开发者期待 Gemini CLI 自动调用匹配任务描述的 Skills 和子代理，而非必须手工点名。
6. **安全边界要覆盖真实工作流。** Bash 偏好的高效性很吸引人，但临时脚本污染、破坏性命令、浏览器配置锁和 fork CI 密钥泄露都需要更完善的防护。
7. **跨平台和协议兼容仍是痛点。** Wayland、macOS 沙箱以及 ACP 的输出、Hook、确认流程都在快速补齐，但不同运行模式的行为一致性仍需加强。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-11-05**  
**数据范围：过去 24 小时更新的 Releases、Issues 与 Pull Requests**

## 1. 今日速览

- 今日发布 **v1.0.106-9**，重点修正 `apply_patch` 的增删行统计，并增强 `copilot config` 对错误类型配置的检测。
- 社区焦点集中在 **MCP OAuth、会话恢复、模型与上下文兼容性、Windows 卡顿及企业策略**；其中多个问题在 24 小时内创建并更新，说明 1.0.105/1.0.106 系列仍存在较明显的稳定性与集成问题。
- 过去 24 小时仅有 **1 个 PR 更新**，缺少足够的 PR 数据支撑“重要 PR 进展”榜单；因此本节仅列出实际更新的 PR，不虚构其他条目。

---

## 2. 版本发布

### [v1.0.106-9](https://github.com/github/copilot-cli/releases/tag/v1.0.106-9)

本次修复主要包括：

- **修正 `apply_patch` 增删文件时的行数统计**
  - 新增或删除文件不再被多算一行。
  - 时间线摘要、权限确认、`/usage` 和退出摘要现在能够显示更准确的变更行数。

- **增强配置类型检查**
  - 当 `settings.json` 中的值类型错误、导致整个配置文件被忽略时，`copilot config` 现在会给出警告。
  - 相比此前静默忽略配置，新行为能降低配置不生效的排障难度。

---

## 3. 社区热点 Issues

### 1. [MCP OAuth 交互流程停在 Connecting，未执行授权码换令牌](https://github.com/github/copilot-cli/issues/5350)

远程 HTTP MCP 服务器使用 Entra ID OAuth 时，浏览器授权已经完成且成功页面能够显示，但 CLI 没有继续执行 code-to-token exchange，界面持续停留在“Connecting”。报告环境为 WSL2，涉及 Azure DevOps Remote MCP。

**重要性：** OAuth 是企业 MCP 服务接入的关键路径；流程中断会直接阻断服务器连接。  
**社区反应：** 新建 Issue，尚无评论，但问题描述完整，且已有 OAuth secret 缺失的相邻报告，具备进一步合并排查价值。

---

### 2. [恢复会话后，MCP 工具列表变化导致请求持续返回 400](https://github.com/github/copilot-cli/issues/5359)

MCP 服务器在两次启动之间调整工具集后，恢复旧会话会引用已经不存在的工具，所有请求均报：

```text
Tool reference '...' not found in available tools
```

**重要性：** 这是会话持久化与 MCP 动态工具发现之间的兼容性问题，可能影响升级 MCP 服务、调整工具权限或改变服务器配置后的日常使用。  
**社区反应：** 今日新建，尚无评论；属于高优先级新回归信号。

---

### 3. [静态 OAuth 客户端未发送 client secret，令牌交换失败](https://github.com/github/copilot-cli/issues/5351)

预注册的 confidential OAuth client 在浏览器授权完成后，令牌交换被服务端以 `invalid_client` 拒绝。Issue 已关闭。

**重要性：** 直接影响使用静态 client credentials 的 MCP 服务，是标准 OAuth 客户端实现问题。  
**社区反应：** 1 条评论；Issue 状态为关闭，表明问题已有处理路径，但值得继续验证修复范围。

---

### 4. [Windows/npm CLI 交互过程中间歇性卡死数分钟](https://github.com/github/copilot-cli/issues/5356)

Windows 下通过 `npx copilot --yolo` 运行时，部分对话会长时间保持 busy，无法生成最终回复；取消并输入 `continue` 后有时恢复，有时继续卡住。

**重要性：** 卡顿直接破坏交互式使用体验，而且问题在互不相关的项目中出现，可能涉及网络、流式响应、进程调度或 Windows 管道处理。  
**社区反应：** 今日新建，1 条评论、0 个点赞；评论量少但故障影响范围较大。

---

### 5. [非交互模式 `copilot -p` 出现 I/O failure](https://github.com/github/copilot-cli/issues/5357)

`copilot -p "hello?"` 在管理员托管设置替换模型后失败，报错为：

```text
Shared writer storage I/O failure
```

**重要性：** `-p` 是脚本、CI 和自动化集成的主要入口；共享写入器存储异常可能使批处理调用不可靠。  
**社区反应：** 今日新建，尚无评论；属于新发现的自动化路径可靠性问题。

---

### 6. [ACP 未公布 Copilot Fusion 及 tier 配置](https://github.com/github/copilot-cli/issues/5354)

交互式 CLI 已提供 Copilot Fusion，但 ACP 仍仅公布 `Auto`，没有暴露 Fusion 或 Auto tier 配置，导致 T3 Code 等 ACP 客户端无法显示 Fusion 和层级选择器。

**重要性：** 反映交互式 CLI、非交互模式和 ACP 客户端之间的能力发现不一致，会限制第三方编辑器与代理集成。  
**社区反应：** 今日新建，已有 1 条评论、2 个点赞；虽属新问题，但社区反馈积极。

---

### 7. [Fusion 模型停留在 plan 模式，无法进入实现阶段](https://github.com/github/copilot-cli/issues/5270)

选择 GPT-6.1 Sol/Fusion 作为实现模型，或 Auto 模式自动选到该模型后，CLI 会一直停留在 plan 模式，无法切换到 implementation。

**重要性：** 这是直接影响新模型可用性的流程级故障，且自动模型路由也可能触发，影响范围大于显式选模用户。  
**社区反应：** 5 条评论；热度中等，但问题明确且已经持续一段时间。

---

### 8. [默认上下文下 Sol 模型在首次提示前被拒绝](https://github.com/github/copilot-cli/issues/5151)

工具定义从约 15K 增长到约 260K tokens 后，`gpt-5.6-sol` 和 `gpt-6.1-sol` 在默认上下文层级下会在接受首次提示前失败，提示静态系统消息和工具定义超出模型可用上下文预算。

**重要性：** 说明 MCP 工具扩展、默认上下文配置和新模型容量之间存在系统性冲突，可能在大型 MCP 环境中普遍发生。  
**社区反应：** 1 条评论、0 个点赞；讨论不多，但问题覆盖多个模型和核心工作流。

---

### 9. [企业托管策略刷新导致 CLI 启动或恢复时无限挂起](https://github.com/github/copilot-cli/issues/5341)

在 macOS Apple Silicon、Enterprise Managed User 和 `forceRemoteSettingsRefresh` 环境下，CLI 偶尔在启动或 `--resume` 时无限挂起，并提示：

```text
Managed MCP policy application exceeded its settings settlement deadline
```

**重要性：** 企业用户可能直接无法启动 CLI；远程设置、MCP 策略和会话恢复形成了启动阻塞链路。  
**社区反应：** 1 条评论、0 个点赞；关注度尚低，但企业环境中的阻断性较强。

---

### 10. [OSC 7501 Agent 状态上报需求获得集中关注](https://github.com/github/copilot-cli/issues/5112)

社区请求通过 OSC 7501 Program Status Protocol 向支持的终端报告 Agent 的 working、blocked 等状态。

**重要性：** 这是 CLI 与终端、编辑器及外部任务管理器集成的基础能力，可用于显示忙碌状态、阻塞原因和任务生命周期。  
**社区反应：** 6 条评论、17 个点赞，是本批数据中反馈最积极的功能需求之一；另有 [相关需求 #5320](https://github.com/github/copilot-cli/issues/5320)，累计 9 个点赞，说明存在跨终端工具的明确需求。

---

### 其他值得关注

- [`disable-model-invocation: true` 导致项目 Skill 无法显式调用](https://github.com/github/copilot-cli/issues/4438)：16 条评论、19 个点赞，是本批数据中社区热度最高的 Issue。  
- [`copilot --resume` 无 ID 时进入空会话](https://github.com/github/copilot-cli/issues/5228)：统一 Sessions 浏览器引入后出现行为回归，现已关闭。  
- [管理账户策略持续报错](https://github.com/github/copilot-cli/issues/5130)：影响企业用户体验，现已关闭。  
- [Skill 显式调用不可达](https://github.com/github/copilot-cli/issues/4438)、[子代理误读临时目录禁令](https://github.com/github/copilot-cli/issues/5352)共同显示，Agent 指令语义与子代理行为仍有较强改进需求。

---

## 4. 重要 PR 进展

过去 24 小时仅有 **1 个 PR 更新**，没有足够数据列出 10 个重要 PR。

### [PR #5186：Update feature_request.yml](https://github.com/github/copilot-cli/pull/5186)

- **作者：** @Bilalabdulkadir
- **状态：** Open
- **内容：** 更新 `feature_request.yml`。
- **评估：** 从现有摘要无法确认具体功能影响，且该文件常用于自动处理无效的 feature request 提交流程，因此暂不能视为明确的产品功能或核心修复。

---

## 5. 功能需求趋势

### 5.1 MCP 稳定性与 OAuth 集成成为首要方向

相关 Issues：

- [#5350：交互式 MCP OAuth 停在 Connecting](https://github.com/github/copilot-cli/issues/5350)
- [#5351：静态 OAuth 客户端 secret 未发送](https://github.com/github/copilot-cli/issues/5351)
- [#5359：恢复会话引用失效 MCP 工具](https://github.com/github/copilot-cli/issues/5359)
- [#5341：托管 MCP 策略 settlement 超时导致启动挂起](https://github.com/github/copilot-cli/issues/5341)

社区当前最关心的不只是“能否连接 MCP”，而是 **授权交换、工具发现变化、会话恢复和企业策略应用** 能否形成完整、可靠的闭环。

### 5.2 新模型与多模型路由支持

相关 Issues：

- [#5354：ACP 未公布 Fusion 及 tier 配置](https://github.com/github/copilot-cli/issues/5354)
- [#5270：Fusion 停留在 plan 模式](https://github.com/github/copilot-cli/issues/5270)
- [#5151：Sol 模型默认上下文被拒绝](https://github.com/github/copilot-cli/issues/5151)

主要诉求包括：

- 在交互式、非交互式和 ACP 模式间统一暴露模型能力；
- 支持 Fusion/Auto tier 配置；
- 修复 Plan 到 Implementation 的状态切换；
- 解决工具规模增长后的上下文预算问题。

### 5.3 终端状态协议与外部集成

相关 Issues：

- [#5112：支持 OSC 7501](https://github.com/github/copilot-cli/issues/5112)
- [#5320：为 Herdr 提供 OSC 7501 状态上报](https://github.com/github/copilot-cli/issues/5320)
- [#5354：ACP 模型能力发现](https://github.com/github/copilot-cli/issues/5354)

社区希望 CLI 不只是一个独立命令行程序，而是能主动接入终端、编辑器、远程控制客户端和第三方 Agent UI。

### 5.4 企业治理、远程控制与隐私配置

相关 Issues：

- [#5109：企业环境中 CLI 不可用](https://github.com/github/copilot-cli/issues/5109)
- [#5130：持续出现 Managed account policy 错误](https://github.com/github/copilot-cli/issues/5130)
- [#4005：未选择 Copilot billing entity](https://github.com/github/copilot-cli/issues/4005)
- [#4409：远程控制关闭时缺少提示](https://github.com/github/copilot-cli/issues/4409)
- [#3387：关闭 usage telemetry](https://github.com/github/copilot-cli/issues/3387)

企业用户的核心诉求是：**策略应明确生效、错误应可解释、功能受限应提前提示，同时提供更细粒度的隐私与遥测控制。**

### 5.5 会话管理、恢复与远程发布

相关 Issues：

- [#5228：`--resume` 无 ID 时行为回归](https://github.com/github/copilot-cli/issues/5228)
- [#5359：恢复会话因 MCP 工具变化而失败](https://github.com/github/copilot-cli/issues/5359)
- [#5355：带 `--add-dir` 时远程会话自动发布失败](https://github.com/github/copilot-cli/issues/5355)
- [#4409：远程控制 entitlement 不可见](https://github.com/github/copilot-cli/issues/4409)

会话功能正从本地恢复扩展到远程访问和自动发布，随之出现状态同步、权限与上下文兼容性问题。

### 5.6 Skill、子代理和 Agent 行为控制

相关 Issues：

- [#4438：`disable-model-invocation` 导致 Skill 完全不可调用](https://github.com/github/copilot-cli/issues/4438)
- [#5352：子代理拒绝读取临时目录文件](https://github.com/github/copilot-cli/issues/5352)
- [#4318：Autopilot 覆盖用户明确任务边界](https://github.com/github/copilot-cli/issues/4318)
- [#5323：关闭 Agent checkpoint refs](https://github.com/github/copilot-cli/issues/5323)

社区希望 Agent 更准确地理解 **能力边界、只读/写入约束、任务完成条件和副作用控制**。

### 5.7 跨平台与终端渲染完善

相关 Issues：

- [#5356：Windows/npm 间歇性长卡顿](https://github.com/github/copilot-cli/issues/5356)
- [#5105：macOS 沙箱阻断 Gradle daemon](https://github.com/github/copilot-cli/issues/5105)
- [#5353：用户消息 Markdown 渲染](https://github.com/github/copilot-cli/issues/5353)
- [#5112：OSC 7501 状态上报](https://github.com/github/copilot-cli/issues/5112)

重点覆盖 Windows 稳定性、macOS 本地网络沙箱、终端渲染一致性，以及与终端状态协议的兼容。

---

## 6. 开发者关注点

1. **“能连接”不等于“可稳定使用”**  
   MCP OAuth、动态工具变化、托管策略和会话恢复之间仍存在明显断层。用户期待的是从启动、授权、工具发现到恢复会话的端到端可靠性。

2. **新模型适配速度快于兼容性打磨速度**  
   Fusion、Sol 等模型已进入路由或交互界面，但 ACP 能力发现、模式切换、上下文预算和 tier 配置尚未同步完成。

3. **企业策略错误缺乏可操作性**  
   Managed account policy、billing entity、远程设置刷新等问题反复出现，而部分错误只给出重试或政策更新提示，没有告诉用户应检查哪项配置、由谁处理。

4. **恢复会话对环境变化不够稳健**  
   MCP 工具列表、管理策略、目录权限和模型配置都可能在上次退出后变化。CLI 需要在恢复时重新绑定或提示失效引用，而不是让所有请求持续失败。

5. **Agent 指令边界需要更精确**  
   Skill 显式调用、临时目录只读、子代理限制和 Autopilot 停止条件都暴露出提示词约束过宽或解释不一致的问题。

6. **交互稳定性和可观测性不足**  
   Windows 长时间卡顿、会话 I/O failure 以及缺失 OSC 7501 状态上报，使用户和外部终端难以区分“正在运行”“已阻塞”与“已失去响应”。

7. **隐私与配置可见性需求上升**  
   关闭遥测、禁用 checkpoint refs、远程控制状态提示等需求表明，开发者希望更清楚地控制数据共享、Git 副作用及企业功能边界。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-11-05**  
**数据源：** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. 今日速览

- 今日无新版本发布，但过去 24 小时共有 50 个 Issue 和 50 个 PR 更新，研发重点明显集中在**桌面端状态机重构、OpenAI 兼容流解析、Windows/macOS 兼容以及 GUI 插件**。
- 社区最强烈的问题仍是**免费额度与 OpenCode Go 限额**：免费模型限额误触发、额度未按时重置、付费用户无法使用免费模型等问题密集出现。
- 新增高优先级会话问题：从其他项目使用 `opencode -s <id>` 时，可能静默创建同 ID 的“影子会话”，存在会话混淆风险。

## 3. 社区热点 Issues

1. **[集中反馈] 免费额度问题统一入口**  
   免费额度耗尽、达到消息上限、额度未重置及桌面版无法继续使用等问题已集中到主 Issue，说明该问题影响范围广、持续时间长。  
   **社区反应：** 285 条评论、21 个赞，是今日讨论度最高的问题。  
   [#59387](https://github.com/anomalyco/opencode/issues/59387)

2. **[高优先级] 跨项目恢复会话会创建同 ID 的影子会话**  
   `opencode -s <id>` 在另一个项目目录运行时，服务端返回 404 后，CLI 会静默新建同 ID 会话，可能导致会话上下文混淆或数据错配。  
   **社区反应：** 今日新问题，已标记为 reproduced、severity high。  
   [#61947](https://github.com/anomalyco/opencode/issues/61947)

3. **[Go] Gemini 4 Argon 接口返回 403**  
   `opencode-go/gemini-4-argon` 在 Go 和 Go Plus 计划下均返回 `Endpoint is unavailable`，而其他 Go 模型和同一模型的其他聚合渠道正常，属于模型端点或路由层异常。  
   **社区反应：** 5 条评论、1 个赞。  
   [#61845](https://github.com/anomalyco/opencode/issues/61845)

4. **[已复现] 退出登录后远程集成仍然有效**  
   `opencode auth logout` 虽删除本地凭据，但远程 `.well-known/opencode` 集成会被发现层重新载入，导致用户实际上仍处于登录状态，涉及会话安全。  
   **社区反应：** 6 条评论，问题已被标记为 reproduced。  
   [#59320](https://github.com/anomalyco/opencode/issues/59320)

5. **[已复现] 符号链接指向全局配置目录时无法热重载**  
   当 `~/.config/opencode` 是指向真实目录的符号链接时，inotify 监听抛出 `ENOTDIR`，全局 `opencode.json` 修改后不会自动生效。  
   **社区反应：** 4 条评论、3 个赞，已有稳定复现说明。  
   [#54933](https://github.com/anomalyco/opencode/issues/54933)

6. **[CLI] 工作区错误取自 `$PWD` 而非进程实际 cwd**  
   `opencode run` 会依据继承的 `$PWD` 切换目录，而不是使用进程当前工作目录；在 systemd、`subprocess(cwd=...)` 等场景中可能打开错误项目。  
   **社区反应：** 2 条评论，问题在 2.0.32 上仍可复现。  
   [#56386](https://github.com/anomalyco/opencode/issues/56386)

7. **[Desktop] 集成终端中的 Ctrl+C 无法中断进程**  
   Windows 桌面版集成终端无法通过 Ctrl+C 停止开发服务器等子进程，用户只能手动使用 `taskkill /F /PID` 强制结束。  
   **社区反应：** 今日新增，已有 3 条评论。  
   [#61899](https://github.com/anomalyco/opencode/issues/61899)

8. **[Go] DeepSeek 特定模型缺少 Global 隐私设置入口**  
   付费 Go 用户使用 `opencode-go/deepseek-v4-flash` 时被要求启用 Global regions，但工作区没有对应隐私设置，导致模型无法调用。  
   **社区反应：** 23 条评论、15 个赞；相关 Issue 已关闭。  
   [#50155](https://github.com/anomalyco/opencode/issues/50155)

9. **[Desktop] Provider 的模型全部进入“最近使用”后从模型列表消失**  
   桌面版 `/models` 中，某 Provider 的全部模型被使用后，其分组会完全消失；输入搜索内容后分组才重新出现，造成配置被移除的错觉。  
   **社区反应：** 2 条评论，交互问题仍开放。  
   [#60267](https://github.com/anomalyco/opencode/issues/60267)

10. **[TUI] 存在未发送提示词时，“New session”标签仍会消失**  
    横向标签布局下，切换到其他标签后，即使当前会话保留未发送内容，“New session”入口仍会消失，用户无法切回草稿。  
    **社区反应：** 2 条评论，问题仍开放。  
    [#61799](https://github.com/anomalyco/opencode/issues/61799)

## 4. 重要 PR 进展

1. **桌面端 IPC 握手与事件流改用状态机**  
   修复新窗口在端口绑定前可能错过存储变更事件的问题，并强化桌面端事件传递的生命周期管理。  
   [#61953](https://github.com/anomalyco/opencode/pull/61953)

2. **App 层插件链接检查、文件写入和侧栏布局状态机化**  
   将五类插件宿主生命周期从布尔标记、token 和信号数组迁移到显式状态机，减少异步竞态和状态不同步。  
   [#61967](https://github.com/anomalyco/opencode/pull/61967)

3. **窗口尺寸调整与问题面板状态机化**  
   修复拖动面板时动画意外恢复、问题选项状态被错误取消、已回答问题重新显示控件，以及表单草稿残留等问题。  
   [#61949](https://github.com/anomalyco/opencode/pull/61949)

4. **图像与视频预览改用独立状态机**  
   将预览的开关生命周期、平移手势和缩放动画分别交由显式状态机管理，提升预览交互的一致性。  
   [#61951](https://github.com/anomalyco/opencode/pull/61951)

5. **兼容 OpenAI Chat 流中的加密 reasoning 对象**  
   支持部分 OpenAI 兼容网关将 `delta.reasoning` 返回为 `{ content, encrypted_content, summary }` 对象而非字符串，避免推理内容流解析失败。  
   [#61959](https://github.com/anomalyco/opencode/pull/61959)

6. **会话路由视图统一由解析状态机决定**  
   将“准备中”界面也纳入同一会话路由解析流程，减少外层条件判断与状态机之间的不一致。  
   [#61963](https://github.com/anomalyco/opencode/pull/61963)

7. **Windows 支持发现 Microsoft Store 安装的 PowerShell 7**  
   修复 `pwsh` 仅以应用执行别名存在时，OpenCode 回退到 Windows PowerShell 5.1 或直接访问别名路径报错的问题。  
   [#61952](https://github.com/anomalyco/opencode/pull/61952)

8. **Web App 的 About 页面显示服务端真实版本**  
   远程隧道或 PWA 模式不再固定显示 Web 包版本，而是展示服务器当前 release，例如 `0.0.0-dev-639`。  
   [#61965](https://github.com/anomalyco/opencode/pull/61965)

9. **GUI 插件重新打开文件时强制重新读取**  
   修复已关闭标签页因停止监听而重新打开时仍显示旧内容的问题。  
   [#61961](https://github.com/anomalyco/opencode/pull/61961)

10. **Web 应用加载服务器端配置的 GUI 插件**  
    允许 Web App 从服务端获取并加载 GUI 插件，扩展浏览器端和远程部署场景下的插件能力；当前仍处于设计评审阶段。  
    [#61950](https://github.com/anomalyco/opencode/pull/61950)

## 5. 功能需求趋势

1. **额度与计费透明度**
   - 免费额度需要准确重置，避免无明显使用却触发限制。
   - Go 订阅用户应能明确使用免费模型。
   - 社区要求展示更清晰的配额、缓存命中率和退款处理机制。  
   [#59387](https://github.com/anomalyco/opencode/issues/59387) · [#61902](https://github.com/anomalyco/opencode/issues/61902)

2. **IDE 与终端体验**
   - VS Code 中免费额度异常持续引发投诉。
   - Desktop 集成终端需要正确处理 Ctrl+C、进程中断和跨平台 shell。
   - PowerShell 7、fcitx、GNOME Wayland 粘贴等兼容性需求持续存在。  
   [#61902](https://github.com/anomalyco/opencode/issues/61902) · [#61899](https://github.com/anomalyco/opencode/issues/61899)

3. **模型与提供商支持**
   - DeepSeek、Gemini 等 Go 模型的端点可用性、区域限制和路由稳定性是重点。
   - 用户希望 OpenAI-compatible 网关能兼容更丰富的 reasoning 数据格式。  
   [#61845](https://github.com/anomalyco/opencode/issues/61845) · [#50155](https://github.com/anomalyco/opencode/issues/50155) · [#61959](https://github.com/anomalyco/opencode/pull/61959)

4. **插件生态与自动化**
   - GUI 插件需要支持 Web App 和服务端插件环境。
   - 插件希望感知持久化执行状态，并向宿主声明后台任务。
   - Schedule 被提议扩展为可直接运行 shell 命令的类 cron 能力，无需为每次执行创建会话或调用模型。  
   [#60860](https://github.com/anomalyco/opencode/issues/60860) · [#61884](https://github.com/anomalyco/opencode/issues/61884) · [#61834](https://github.com/anomalyco/opencode/pull/61834)

5. **会话与配置可靠性**
   - 用户重视跨项目会话恢复、草稿保留和配置热重载。
   - 社区希望提供会话索引、右侧面板等更强的会话导航能力。  
   [#61947](https://github.com/anomalyco/opencode/issues/61947) · [#61799](https://github.com/anomalyco/opencode/issues/61799) · [#54933](https://github.com/anomalyco/opencode/issues/54933)

## 6. 开发者关注点

- **异步状态一致性是当前最高频工程问题。** 今日大量 PR 将分散的布尔值、回调和信号改造成显式状态机，集中解决竞态、重复执行、状态丢失和 UI 无法恢复等问题。
- **免费额度与付费权益边界不清晰。** 用户难以判断限制来自客户端、模型路由还是后端配额系统，且重置失败、付费账户无法使用免费模型等情况直接影响信任。
- **桌面端进程与终端生命周期需要加强。** macOS 后台 `opencode-cli serve` 残留、Windows Ctrl+C 无效等反馈表明，桌面宿主与服务进程之间的清理、信号传递仍不够可靠。
- **跨平台兼容仍是高频反馈点。** PowerShell Store 别名、Kylin Linux/fcitx、GNOME Wayland 剪贴板及 Windows cwd 语义等都有明确复现。
- **模型兼容性不能只覆盖标准响应格式。** OpenAI-compatible 厂商可能返回非标准 reasoning 对象、不可用端点或区域限制，适配层需要更宽容和更明确的错误提示。
- **插件系统正从 CLI 扩展到桌面和 Web。** 核心诉求包括后台任务声明、持久执行连续性、GUI 插件跨端加载，以及让定时任务直接执行命令而无需消耗模型会话。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

# jcode 社区动态日报｜2026-11-05

## 今日速览

过去 24 小时无新版本发布，jcode 的开发重点集中在**记忆系统、模型与 Provider 配置兼容性、浏览器自动化，以及跨平台构建稳定性**。社区新增 7 条更新 Issue；PR 侧则由 @SiavZ 集中推进了 50 个 PR 的合并与收尾，涵盖 TUI、账号切换、Provider 重试、会话恢复及 Windows/macOS 构建修复。

## 社区热点 Issues

> 过去 24 小时实际更新的 Issue 共 7 条，以下按技术影响与社区信号完整列出。

1. **OpenAI-compatible Provider 手动声明模型未进入 `/model` 选择器**  
   配置在 `config.toml` 中的模型不会与 `/v1/models` 返回结果合并；当服务端未返回自定义模型时，MiniMax M3.1 等模型无法被选择。这直接影响 OpenAI-compatible 接入的可用性与模型发现机制。Issue 获 3 条评论，是本期更新最充分的讨论项。  
   [Issue #1824](https://github.com/1jehuang/jcode/issues/1824)

2. **自动记忆召回在全新用户回合中从未触发**  
   v0.99.1 中，自动记忆召回没有发送 Jev 请求，监控指标 `delta_memory_injections=0`；同一配置下显式 Jev 召回却能正常工作。问题可能位于自动调度链路，而非 Provider 本身，对长期记忆功能的连续性影响较大。  
   [Issue #2068](https://github.com/1jehuang/jcode/issues/2068)

3. **希望提供完全本地运行的记忆召回 Provider**  
   社区提出原生 local recall provider：记忆召回应能在本机进程或插件中完成，不依赖 Jcode、OpenRouter、TypeSafe 或 AI/ML API 等远程决策服务。这反映用户对隐私、离线能力和成本控制的需求正在上升。  
   [Issue #2069](https://github.com/1jehuang/jcode/issues/2069)

4. **浏览器 handoff 丢失 `browser="edge"` 字段**  
   handoff 循环构建 scoped 输入时未保留浏览器字段，导致后续 `eval` 和动作落到自动检测的默认浏览器，而非指定的 Edge。问题直接影响多浏览器自动化环境的可靠执行。  
   [Issue #2071](https://github.com/1jehuang/jcode/issues/2071)

5. **存在 `CLAUDE.md`、不存在 `AGENTS.md` 时未加载项目指令**  
   jcode 已兼容 Claude Code 的 skills、plugin skills 和 MCP 配置，但当前仅加载 `AGENTS.md`，导致仅提供 `CLAUDE.md` 的仓库缺少项目级上下文。该问题可能让 Agent 忽略编码规范和工作流约定。  
   [Issue #2070](https://github.com/1jehuang/jcode/issues/2070)

6. **Windows 每次发布都会遗留旧 launcher 副本**  
   Windows 发布流程通过重命名替换正在运行的 launcher，但旧可执行文件副本不会清理，每次发布约累积 139 MB。长期开发或频繁自发布可能造成明显磁盘占用。  
   [Issue #2064](https://github.com/1jehuang/jcode/issues/2064)

7. **Go 代码语法高亮异常**  
   用户反馈 Go 代码块的渲染存在语法高亮错误，并附有界面截图；即使代码未经过 `gofmt`，正常的 Go 语法高亮仍应保留。该问题影响代码阅读体验，目前暂无评论。  
   [Issue #2074](https://github.com/1jehuang/jcode/issues/2074)

## 重要 PR 进展

1. **汇总 Fork 贡献与上游审查修复**  
   汇总并替换 28 个存在重叠的 PR，将分支中的贡献和审查修复整理到上游基线之上，是本期最核心的集成工作。当前仍保持 OPEN。  
   [PR #1819](https://github.com/1jehuang/jcode/pull/1819)

2. **修复 Provider Profile 选择优先级与 Emoji 复制问题**  
   显式选择的 Anthropic-compatible profile 不再被保存的默认配置覆盖；同时避免复制范围截断宽字符时破坏完整 grapheme cluster，并补充 warning-budget 失败关闭断言。PR 已关闭。  
   [PR #2005](https://github.com/1jehuang/jcode/pull/2005)

3. **修正 TUI 锁顺序并隔离会话相关测试夹具**  
   统一 pinned-todo 与 idle-animation 两条路径的锁获取顺序，均遵循先环境锁、后渲染锁，降低测试死锁和并发状态污染风险。PR 已关闭。  
   [PR #1848](https://github.com/1jehuang/jcode/pull/1848)

4. **修复侧边栏关闭行为与焦点返回**  
   适配上游已有的 `[close]` 控件，并确保侧边栏关闭后焦点回到输入编辑器，减少交互状态不一致。PR 已关闭。  
   [PR #1644](https://github.com/1jehuang/jcode/pull/1644)

5. **支持从卡片任意位置折叠或展开 Pinned TODO**  
   用户点击紧凑或展开状态下的 TODO 卡片任意区域均可切换完整列表，并将折叠控件置于最后一个 TODO 下方。PR 已关闭。  
   [PR #1937](https://github.com/1jehuang/jcode/pull/1937)

6. **OpenAI 用量限制提前恢复后清除旧标记**  
   当新的用量数据证明限制已提前重置时，立即清除旧的 usage-limit 标记，避免窗口继续被阻塞到原先报告的恢复时间。PR 已关闭。  
   [PR #1692](https://github.com/1jehuang/jcode/pull/1692)

7. **支持从 OpenCode 1.17+ 的 SQLite 数据库读取会话**  
   `/resume`、会话搜索、导入及首次启动检测改为读取 `~/.local/share/opencode/opencode.db`，兼容 OpenCode 从 JSON 文件迁移到 SQLite 后的会话格式。PR 已关闭。  
   [PR #1623](https://github.com/1jehuang/jcode/pull/1623)

8. **OpenAI-compatible Provider 完整支持 `Retry-After` 与流内错误重试**  
   避免服务端 `Retry-After` 被退避上限截断，并在流式响应发生可重试错误时恢复请求；同时支持取消操作及时终止重试。PR 已关闭。  
   [PR #1597](https://github.com/1jehuang/jcode/pull/1597)

9. **为命名 Profile 暴露推理强度等级**  
   命名的 OpenAI-compatible profile 可使用其配置的 reasoning capability，在 TUI 中切换 effort，并通过 `/model` 查看对应等级。PR 已关闭。  
   [PR #1689](https://github.com/1jehuang/jcode/pull/1689)

10. **修复 Resume/Reload 后 KV Cache 一直显示 priming**  
    缓存实际已达到较高命中率时，信息面板改为显示 `yield NN%`，不再在会话恢复或重载后永久显示 `priming`。PR 已关闭。  
    [PR #1608](https://github.com/1jehuang/jcode/pull/1608)

## 功能需求趋势

- **本地化与隐私优先的记忆系统**  
  社区既关注自动召回链路失效，也明确提出完全本地的召回 Provider。本地运行、离线可用、数据不外传将成为记忆功能的重要诉求。

- **Provider 与模型生态兼容性**  
  用户需要更可靠的 OpenAI-compatible 接入，包括配置模型合并、模型发现、推理等级、错误重试及 `Retry-After` 语义支持。

- **项目上下文与多工具生态兼容**  
  加载 `CLAUDE.md`、兼容 OpenCode 新版 SQLite 会话格式，说明 jcode 正在强化与 Claude Code、OpenCode 等工具链之间的互操作能力。

- **浏览器自动化可靠性**  
  指定浏览器实例在 handoff 后被替换为核心缺陷，用户需要可预测、可审计的浏览器执行目标。

- **TUI 交互与信息呈现持续打磨**  
  热点集中在侧边栏焦点、Pinned TODO、KV Cache 状态、Profile/模型选择和 Resume 搜索体验，体现成熟度建设仍是近期主线。

- **跨平台发布和本地开发体验**  
  Windows launcher 泄漏、macOS Bash 兼容和版本 GC 问题表明，开发团队正投入精力降低多平台构建与维护成本。

## 开发者关注点

- **上下文不能遗漏**：缺少 `AGENTS.md` 时的 `CLAUDE.md` 兼容，直接关系到 Agent 是否遵守项目规范。
- **模型必须“声明即可用”**：仅依赖服务端 `/v1/models` 不足以覆盖私有、代理或定制模型，配置与实时发现需要可靠合并。
- **记忆召回必须可观测且可诊断**：自动召回零请求、零注入问题需要更明确的调度日志、指标和端到端测试。
- **隐私与可控性**：用户希望记忆决策完全在本地执行，避免敏感上下文被送往远程决策服务。
- **自动化操作不能静默换目标**：浏览器 handoff 应严格保留 `browser` 等关键字段。
- **长期运行不能持续占用磁盘**：Windows 发布残留约 139 MB/次，版本 GC 与可执行文件生命周期管理需要系统化解决。
- **上游同步成本较高**：本期大量 PR 围绕同一上游基线反复刷新，表明 Fork 贡献在上游集成、审查和依赖更新方面仍有较高维护负担。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报｜2026-11-05

## 今日速览

过去 24 小时没有新版本发布，但代码合并与问题关闭较为集中，重点围绕**文件工具正确性与性能、OAuth 稳定性、终端 TUI 兼容性，以及模型/provider 更新**展开。社区仍有多个高热度长线问题待解决，包括 macOS 长会话高 CPU、Windows 全屏鼠标滚轮异常及 tmux 下 OSC 52 复制失效。

---

## 社区热点 Issues

1. **[OPEN] macOS 长会话导致 CPU 占用升至 100% 以上**  
   长会话或较大上下文下，Pi 在 macOS 上出现 50%–110% 的 CPU 波动，内存约为 600–800MB。该问题评论数达 27、获赞 12，是当前最活跃的性能问题之一。  
   [查看 Issue #7730](https://github.com/earendil-works/pi/issues/7730)

2. **[OPEN] 0.99.x 终端颜色查询响应泄漏到输入框**  
   Windows mintty/ConPTY 环境下，终端颜色查询回复被误写入 prompt，并可能触发 BEL、打开外部编辑器。问题影响 0.99.x，而 0.87.1 正常，已有 25 条评论。  
   [查看 Issue #10256](https://github.com/earendil-works/pi/issues/10256)

3. **[CLOSED] npm 搜索未索引新发布的 pi-packages**  
   新发布的 `pi-affix-prompt` 无法被 `npm search` 检索，因此也未进入 pi.dev/packages 画廊。相关讨论累计 18 条，暴露了包发现机制对 npm 搜索索引的依赖。  
   [查看 Issue #7885](https://github.com/earendil-works/pi/issues/7885)

4. **[OPEN] Windows + Zellij 全屏模式下滚轮滚动的是 prompt 历史**  
   在 Windows → Alacritty → Zellij → Pi 链路中，鼠标滚轮未滚动对话记录，而是切换输入历史；直接使用终端及 Linux + tmux 均正常，表明问题集中在特定复用器组合。  
   [查看 Issue #9656](https://github.com/earendil-works/pi/issues/9656)

5. **[OPEN] tmux 吞掉全屏 TUI 的 OSC 52 复制内容**  
   Pi 发出原始 OSC 52 序列后，tmux 将其写入自身 paste buffer 而没有转发给客户端，界面仍显示“Copied!”，造成复制成功提示与真实结果不一致。  
   [查看 Issue #10628](https://github.com/earendil-works/pi/issues/10628)

6. **[OPEN] Token Plan 品牌与网关地址需要升级兼容**  
   新配置拟切换至千问 AI 平台（中国）和 QwenCloud（国际）品牌及对应 OpenAI-compatible 网关。该需求标注为 P0，同时涉及已有配置迁移和兼容性。  
   [查看 Issue #11773](https://github.com/earendil-works/pi/issues/11773)

7. **[OPEN] TUI overlay 无法覆盖终端图片**  
   Kitty 或 iTerm2 图片行会穿透 overlay，留下没有面板背景和文字的空洞。该问题影响全屏界面的叠加层、选择区域及图片展示逻辑。  
   [查看 Issue #11584](https://github.com/earendil-works/pi/issues/11584)

8. **[CLOSED] bash 工具将已退出命令误报为超时**  
   当 shell 已返回真实退出码，但后台子进程持续占用 stdout/stderr 管道时，Pi 会一直等待，最终错误报告超时并掩盖原始退出状态。  
   [查看 Issue #11613](https://github.com/earendil-works/pi/issues/11613)

9. **[CLOSED] `read` 工具读取单行时仍加载整个文件**  
   `offset` 和 `limit` 是在完整读取文件后才生效，大文件即使只请求一行也会占用大量内存。该问题已通过流式读取方案修复，对大日志和生成文件场景影响明显。  
   [查看 Issue #9654](https://github.com/earendil-works/pi/issues/9654)

10. **[CLOSED] RPC 启动刷新期间退出导致 OAuth refresh token 丢失**  
    在 RPC 模式下，若 token 刷新请求已发出但新凭据尚未写入便退出进程，旧 refresh token 可能已被消费，最终出现 `invalid_grant`。修复强调退出前等待已启动的 OAuth 刷新落盘。  
    [查看 Issue #11692](https://github.com/earendil-works/pi/issues/11692)

---

## 重要 PR 进展

1. **[CLOSED] 等待已启动的 OAuth 刷新完成后再退出**  
   在 RPC 启动目录刷新触发凭据刷新后，退出流程会等待新 token 保存完成，避免单次 refresh token 被消费却未持久化。对应 #11692。  
   [查看 PR #11812](https://github.com/earendil-works/pi/pull/11812)

2. **[OPEN] 编辑文件时保留未修改行的换行符**  
   修复 edit 工具改写整文件并统一行尾格式的问题，同时在写入前生成 diff，降低仅修改少量内容却造成大面积 diff 的风险。  
   [查看 PR #11751](https://github.com/earendil-works/pi/pull/11751)

3. **[OPEN] read/edit 支持 UTF-16 与非 UTF-8 编码**  
   新增共享文件编码处理逻辑，避免 edit 静默破坏非 UTF-8 文件，并让 read 正确显示 UTF-16 内容；编码相关问题集中于 #10349、#5797。  
   [查看 PR #11811](https://github.com/earendil-works/pi/pull/11811)

4. **[CLOSED] bash 超时后仍报告 shell 的真实退出码**  
   修复 stdout/stderr 被后台进程占用时的等待逻辑；当 shell 已经退出时，错误信息将保留实际退出码，而不是笼统显示超时。  
   [查看 PR #11813](https://github.com/earendil-works/pi/pull/11813)

5. **[CLOSED] read 工具改为流式读取**  
   不再把文件完整加载为 Buffer、字符串和行数组后再应用 `offset`/`limit`，显著降低读取大文件时的内存峰值。  
   [查看 PR #11750](https://github.com/earendil-works/pi/pull/11750)

6. **[CLOSED] 后台模型目录刷新后保持用户选择**  
   异步 catalog refresh 不再把模型选择器恢复到当前模型或首行，避免用户浏览和搜索状态被异步更新覆盖。  
   [查看 PR #11810](https://github.com/earendil-works/pi/pull/11810)

7. **[CLOSED] 文本截断不再拆散 Unicode 代理对**  
   修复按 UTF-16 code unit 直接 `slice()` 导致 emoji 或其他 BMP 外字符产生孤立代理项的问题，覆盖 grep 匹配行等多处截断逻辑。  
   [查看 PR #11757](https://github.com/earendil-works/pi/pull/11757)

8. **[CLOSED] 移除 Android/Termux 上同步子进程造成的潜在死锁**  
   `findExecutableOnPath` 和 `commandExists` 不再通过 `which` 或 `<cmd> --version` 启动进程，改用无 fork 的可执行文件检查方式。  
   [查看 PR #9350](https://github.com/earendil-works/pi/pull/9350)

9. **[OPEN] 实验性会话复制与远端同步**  
   为 `pi-durable` 增加实验性 sync：设备可上传和拉取 session commits；并发继续同一会话时，后上传设备会分叉为新 session，属于多设备协作基础设施。  
   [查看 PR #11696](https://github.com/earendil-works/pi/pull/11696)

10. **[OPEN] 扩展 manifest 资源发现逻辑统一**  
    修复自动发现扩展目录与 `discoverAndLoadExtensions` 对 `pi.extensions` glob 解释不一致的问题，使排除规则和扩展路径匹配行为保持一致。  
    [查看 PR #9889](https://github.com/earendil-works/pi/pull/9889)

---

## 功能需求趋势

### 1. 文件工具：性能、编码与编辑正确性

社区集中反馈大文件读取内存占用、UTF-16/非 UTF-8 损坏、换行符被整体改写、字节数误报、Unicode 截断异常等问题。相关修复明显向**流式 I/O、编码统一识别、最小化 diff 和正确字符边界处理**收敛。  
[相关 PR #11751](https://github.com/earendil-works/pi/pull/11751) · [PR #11811](https://github.com/earendil-works/pi/pull/11811) · [PR #11750](https://github.com/earendil-works/pi/pull/11750)

### 2. 模型与 Provider 持续扩展

热点包括 Ant Ling 3.x、Qwen Token Plan 中国区/国际区、LM Studio 一等 provider，以及 OpenAI-compatible gateway 的兼容开关。开发者不仅要求“能接入”，还强调**动态模型目录、推理协议一致性和网关配置迁移**。  
[相关 Issue #11773](https://github.com/earendil-works/pi/issues/11773) · [Issue #7847](https://github.com/earendil-works/pi/issues/7847) · [Issue #7668](https://github.com/earendil-works/pi/issues/7668)

### 3. 终端 TUI 与多路复用器兼容性

Windows mintty/ConPTY、Zellij、tmux、Kitty/iTerm2 图片和 OSC 52 复制构成主要兼容性矩阵。需求不只是“终端能显示”，而是要求**鼠标、复制、overlay、选择和终端协议在多层终端链路中可靠工作**。  
[相关 Issue #10256](https://github.com/earendil-works/pi/issues/10256) · [Issue #9656](https://github.com/earendil-works/pi/issues/9656) · [Issue #10628](https://github.com/earendil-works/pi/issues/10628)

### 4. 扩展与包生态

pnpm 隔离依赖解析、manifest glob、npm 搜索索引和 pi.dev 画廊共同影响第三方扩展的安装与发现。社区期待扩展具备**跨包管理器可安装、可预测发现和及时被索引**的体验。  
[相关 Issue #8092](https://github.com/earendil-works/pi/issues/8092) · [Issue #7885](https://github.com/earendil-works/pi/issues/7885) · [PR #9889](https://github.com/earendil-works/pi/pull/9889)

### 5. 会话持久化与多设备同步

`pi-durable` 的 session replication 和 thinking budget/WebSocket timeout 选项表明社区正在把 Pi 从单进程工具扩展为**可恢复、可同步、可嵌入的长期会话运行时**。  
[相关 PR #11696](https://github.com/earendil-works/pi/pull/11696) · [PR #10410](https://github.com/earendil-works/pi/pull/10410)

---

## 开发者关注点

- **长会话性能是首要痛点**：macOS 高 CPU 与大文件高内存问题均获得大量讨论，开发者尤其关注上下文增长、文件读取和后台刷新是否造成持续资源消耗。  
  [Issue #7730](https://github.com/earendil-works/pi/issues/7730)

- **错误状态必须准确**：真实退出码被超时覆盖、OAuth 凭据丢失、扩展日志破坏 TUI 等问题表明，**状态保真和故障恢复能力比单纯“命令执行成功”更受重视**。  
  [Issue #11613](https://github.com/earendil-works/pi/issues/11613) · [Issue #11692](https://github.com/earendil-works/pi/issues/11692)

- **编码与文件修改需要可预测性**：开发者希望 edit 工具只改变目标内容，保留换行符及原有编码，并让大型文件读取受 `offset`/`limit` 真正约束。  
  [PR #11751](https://github.com/earendil-works/pi/pull/11751) · [PR #11811](https://github.com/earendil-works/pi/pull/11811)

- **兼容问题高度依赖具体终端组合**：Windows、tmux、Zellij、ConPTY、Kitty 和 iTerm2 下的行为差异，是 TUI 用户反馈最集中的部分。  
  [Issue #10256](https://github.com/earendil-works/pi/issues/10256) · [Issue #9656](https://github.com/earendil-works/pi/issues/9656)

- **Provider 接入需要“开箱即用”**：社区希望新模型、订阅计划及兼容网关获得原生支持，同时保留旧配置兼容，而不是要求用户长期手工维护 `models.json`。  
  [Issue #11773](https://github.com/earendil-works/pi/issues/11773) · [Issue #7847](https://github.com/earendil-works/pi/issues/7847)

- **扩展系统需要更稳定的运行边界**：依赖解析、日志输出、manifest 发现及 package 索引均存在边缘问题，说明第三方扩展生态已从“能加载”进入对**可发现性、可诊断性和兼容性的严格要求**阶段。  
  [Issue #8092](https://github.com/earendil-works/pi/issues/8092) · [Issue #11817](https://github.com/earendil-works/pi/issues/11817)

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
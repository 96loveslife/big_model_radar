# AI CLI 工具社区动态日报 2026-08-28

> 生成时间: 2026-08-28 10:47 UTC | 覆盖工具: 8 个

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

<think>The user wants a horizontal comparative analysis report based on the 7 AI CLI tools' daily dynamics. Let me carefully analyze the data from each tool and create a structured, professional Chinese report.

Let me extract key data points:

**1. Claude Code (Anthropic)**
- Releases: v2.1.250, v2.1.248 (--restricted mode)
- 30 issues updated, 1 PR
- Hot: Windows desktop stability, MCP/Cowork, session management, OTEL observability

**2. OpenAI Codex**
- Releases: 3 alpha versions (0.151.0-alpha.6/7/8) - rapid iteration
- 30 issues updated, 10 PRs
- Hot: GPT-5.6 code-mode issues, Windows desktop issues, TUI improvements, subagent/service tier routing

**3. Gemini CLI**
- Releases: v0.59.0-nightly
- 50 issues updated, 18 PRs
- Hot: Subagent stability, Auto Memory system, security hardening (env vars, sandbox)

**4. GitHub Copilot CLI**
- Releases: v1.0.81, v1.0.82-0 prerelease
- 35 issues updated, 0 PR
- Hot: store_memory regression, FileWatch runaway loop, MCP breakage, enterprise (GHEC data residency)

**5. Kimi Code CLI**
- Releases: None
- 6 issues updated, 3 PRs
- Hot: Plan mode infinite loop, API tool content bug, dependency security

**6. OpenCode**
- Releases: v1.18.24, v1.18.25 (Azure auth)
- 50 issues updated, 50 PRs
- Hot: Subscription/billing transparency (OpenCode Go), V2 tool chain robustness, OAuth/Entra

**7. jcode**
- Releases: None
- 8 issues updated, 1 PR (batch fixes 9 issues)
- Hot: Image history breaks text models, zai compaction budget, security audit

**8. pi**
- Releases: None
- 50+ issues/PRs updated (over 65)
- Hot: TUI rendering cluster, v0.84.3 regressions, XDG compliance, Provider consistency

Let me build the comparative analysis:

**Active metrics table:**
- Claude Code: 30 issues, 1 PR, 2 releases
- OpenAI Codex: 30 issues, 10 PRs, 3 releases
- Gemini CLI: 50 issues, 18 PRs, 1 release
- GitHub Copilot CLI: 35 issues, 0 PRs, 2 releases
- Kimi Code CLI: 6 issues, 3 PRs, 0 releases
- OpenCode: 50 issues, 50 PRs, 2 releases
- jcode: 8 issues, 1 PR, 0 releases
- pi: 50 issues/PRs, 0 releases

**Common themes:**
1. **Observability/OTel** - Claude Code (#32364, #67657), Copilot (Hooks OTel - already shipped), general trend
2. **Windows desktop stability** - Claude Code (#53247, #49655), Codex (#40036, #39855, #41179), Copilot (#4614, #3576 closed)
3. **Subagent/Agent stability** - Claude Code (#90264, #34692), Codex (#41308), Gemini (#22323, #21409), Copilot (#4533)
4. **MCP ecosystem** - Claude Code (#61682, #40766, #88988), Copilot (#4647 chroma-mcp), Kimi (#1211 Notion), Gemini (mcpServers filter #29099), jcode (sec audit)
5. **Provider/Model compatibility** - pi (#8774 OpenAI Responses, #8779 DeepSeek, #8752 Bedrock), Codex (GPT-5.6 Sol), jcode (zai), OpenCode (Muse Spark)
6. **Session management** - Claude Code (#78776, #75957), Copilot (#4642, #4645, #4629), OpenCode (#36423 subagent resume)
7. **TUI/UX** - Codex (commands folding, /add-dir), pi (TUI rendering cluster), Copilot (#3760 ctrl+enter), Gemini (Wayland)
8. **Security hardening** - Gemini (#28938, #28930, #29099, #28942), Claude Code (--restricted mode), jcode (#1085 third-party audit)
9. **Billing/Quota transparency** - OpenCode (#38255, #41206, #45897)
10. **Code attribution (AI provenance)** - Kimi (#1279 git-ai)

**Differentiation:**
- Claude Code: Enterprise-grade, Cowork, deep Anthropic ecosystem
- OpenAI Codex: Active Rust rewrite, code-mode, deep OpenAI integration
- Gemini CLI: Auto Memory, A2A server, Google Cloud integration
- Copilot CLI: GitHub-native, MCP 2026-07-28 protocol leader, enterprise (GHEC) focus
- Kimi CLI: OpenAI-compat + native models, Chinese ecosystem
- OpenCode: Open core, V2 tool chain, billing/subscription model (Go)
- jcode: Lightweight, security-audit friendly
- pi: TUI focus, extension/AgentHarness API, Bash-native

**Activity tier:**
- Highest: OpenCode (50+50), Gemini (50+18), pi (65+)
- Active: Claude Code (30+1), Copilot CLI (35+0), Codex (30+10)
- Low: Kimi (6+3), jcode (8+1)

**Trends to highlight:**
1. Windows desktop as weak spot across multiple vendors
2. Subagent/multi-agent stability as architectural challenge
3. MCP ecosystem maturity - protocol upgrades breaking third-party
4. OpenTelemetry / observability going mainstream
6. Security hardening cycle (env vars, sandbox, supply chain)
7. Subscription/billing transparency becoming flashpoint (OpenCode Go)
8. AI code attribution emerging (git-ai)
9. TUI rendering competition (pi, Codex, Copilot)
10. Enterprise/auth model consolidation (Azure Entra, GHEC, OAuth)

Let me write this in a clean, professional Chinese style with proper data backing.</think>

# AI CLI 工具横向对比分析报告
**报告日期：2026-08-28** ｜ 数据样本：8 款主流 AI CLI 工具 24 小时社区动态

---

## 一、生态全景

2026 年 8 月底，AI CLI 工具赛道已进入**多极竞速阶段**：头部厂商（Anthropic、OpenAI、Google、GitHub）以每周级甚至日级的节奏推进功能迭代，中尾部工具（OpenCode、pi、Kimi、jcode）则通过差异化定位（开放核心、TUI 体验、轻量化、多模型路由）切入细分市场。社区关注点正从"能不能用"快速迁移到**稳定性、可观测性、跨平台一致性、企业治理与计费透明度**五大维度，订阅制商业化（OpenCode Go）与第三方 MCP 协议升级阵痛也首次成为开发者集中吐槽的焦点。

---

## 二、各工具活跃度对比

| 工具 | Issues 活跃 | PR 活跃 | Release (24h) | 阶段特征 |
|------|-----------|---------|---------------|----------|
| **Claude Code** (Anthropic) | 30 | 1 | 2 个（v2.1.250 / v2.1.248） | 稳定迭代 + 安全模式落地 |
| **OpenAI Codex** (OpenAI) | 30 | 10 | 3 个 alpha（0.151.0-α.6/7/8） | Rust 版本高速预发布 |
| **Gemini CLI** (Google) | 50 | 18 | 1 个 nightly（v0.59.0） | 全速并行，安全加固窗口期 |
| **GitHub Copilot CLI** | 35 | 0 | 2 个（v1.0.81 正式 / v1.0.82-0 预发布） | 回归高发期，修复尚未提交 |
| **Kimi Code CLI** | 6 | 3 | 0 | 低活跃，质量改进为主 |
| **OpenCode** | 50 | 50 | 2 个（v1.18.24 / v1.18.25） | 极高活跃，订阅计费争议 |
| **jcode** | 8 | 1 | 0 | 单维护者节奏，安全审计驱动 |
| **pi** | 50+ | 15+ | 0 | 单日 65+ 互动，TUI 集群爆发 |

**观察**：
- **OpenCode 与 Gemini CLI** 占据 PR 活跃度前二，分别为 50 与 18 条；
- **GitHub Copilot CLI** 出现明显的"Issues 高 / PR 零"裂缝，提示修复管道滞后；
- **pi** 单日总互动（65+）接近头部厂商体量，但 0 Release，属于"高速但不常发版"模式；
- **Kimi / jcode** 处于"少而精"状态，PR 质量密度较高。

---

## 三、共同关注的功能方向

### 1. 多 Agent / Subagent 稳定性（最普遍）

| 工具 | 关注点 |
|------|--------|
| Claude Code | 多智能体会话孤儿化、Subagent 不触发 Hook |
| OpenAI Codex | Subagent 跟随根服务层级（#41308） |
| Gemini CLI | Subagent 错误上报 GOAL 成功、Generalist Agent 挂起 |
| GitHub Copilot CLI | 并行子代理触发 TUI 卡死 |

**结论**：Subagent 已成为新一代 CLI 标配，但**任务路由、状态机、上下文传递**尚未形成成熟范式，是 2026 下半年最需突破的架构瓶颈。

### 2. MCP 生态兼容性

| 工具 | 关注点 |
|------|--------|
| Claude Code | Cowork 中 GitHub 连接器"假连接"、Filesystem MCP 输出规范 |
| GitHub Copilot CLI | v1.0.81 升级 MCP 2026-07-28 协议后 `chroma-mcp` 失联 |
| Gemini CLI | 受限模式下过滤 mcpServers、MCP 工具名截断碰撞 |
| Kimi Code CLI | Notion Remote MCP 凭据不跨会话保留（已关闭） |

**结论**：MCP 协议升级开始反噬生态——每次大版本协议变更都伴随第三方服务器失联，**版本兼容矩阵与 LTS 通道**成为社区共识性诉求。

### 3. Windows 桌面端稳定性（最集中痛点）

| 工具 | 关注点 |
|------|--------|
| Claude Code | 桌面端启动崩溃（孤儿 Silo/Job Object）、更新失败 0x80073CF6 |
| OpenAI Codex | 登录循环、headless 启动、auth 401 集中爆发 |
| GitHub Copilot CLI | MallocStackLogging 警告、MCP stdio 服务挂掉 |
| Gemini CLI | Windows 长路径 260 字符限制 |

**结论**：四家头部厂商的 Windows 表现均不理想，反映 **Windows 终端子系统与进程生命周期**仍是 AI CLI 工具的工程"重灾区"。

### 4. 可观测性 / OpenTelemetry

- **Claude Code** 强烈呼吁 Web 端 OTel 支持（👍 35）；
- **Gemini CLI** 修复 `managed-settings.json` 中 OTEL env var 应用顺序；
- **GitHub Copilot CLI** v1.0.81 已让 Hooks 接收 OTel 上下文，走在最前面；
- **Kimi / jcode / OpenCode** 暂未跟进。

**结论**：OTel 已成为企业级 AI CLI 的事实标准，但普及度仍不均——GitHub 已落地，Anthropic 呼声最高。

### 5. 安全加固周期

| 工具 | 关注点 |
|------|--------|
| Claude Code | v2.1.248 引入 `--restricted` 沙箱模式 |
| Gemini CLI | `GIT_CONFIG_*` 环境变量清理、Sandbox DEBUG 布尔解析、Workspace Trust fail-closed、扩展授权 |
| Kimi Code CLI | asyncssh 依赖漏洞批量升级 |
| jcode | 第三方安全审计完整修复分支待合入 |

**结论**：环境变量注入、依赖供应链、Workspace Trust 形成三大共性攻击面，主流厂商均在集中加固。

### 6. AI 代码归属（Provenance）

- **Kimi Code CLI** (#1279) — 原生集成 git-ai；
- **OpenCode** (#36423 等) — Subagent resume 涉及审计；
- **Gemini CLI** Auto Memory — 行为记忆可追溯；
- **GitHub Copilot CLI** (#4621) — Rubber duck 评审可审计化。

**结论**：随着 AI 生成代码进入生产环境，**可追溯性**正从"加分项"变为"基础设施"。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|----------|------------|
| **Claude Code** | 企业级安全与可治理 | 大型企业 / 合规敏感行业 | Cowork + MCP + OTel + Restricted Mode 完整栈 |
| **OpenAI Codex** | 极致迭代 + 模型原生 | OpenAI 生态重度用户 / Pro | Rust 重写、code-mode、Guardian 自动审查 |
| **Gemini CLI** | 智能体 + 记忆 + 多端 | Google Cloud 用户 / 自动化研究员 | Auto Memory、A2A server、Sandbox 严格化 |
| **GitHub Copilot CLI** | GitHub 原生 + 协议先锋 | GitHub 企业用户 / CI/CD 集成 | MCP 2026-07-28 协议首发、Plugins Dashboard |
| **Kimi Code CLI** | 国产化 + 多模型兼容 | 中文开发者 / 多 Provider 用户 | K3 + OpenAI Legacy 双栈，JetBrains/ACP 覆盖 |
| **OpenCode** | 开放核心 + 灵活订阅 | 个人 Pro 用户 / 工具链定制者 | V1→V2 配置平滑、OpenCode Go 订阅、Bun 可选 |
| **jcode** | 轻量、安全友好 | 个人开发者 / 安全敏感小团队 | 单维护者、第三方审计开放 |
| **pi** | TUI 体验派 | 终端极客 / 扩展作者 | 软换行、Kitty 协议、AgentHarness API |

**关键差异点**：
- **商业模式**：OpenCode 走在订阅化最前（OpenCode Go 引发争议），Claude Code/Copilot 仍以企业合同为主；
- **架构演进**：Claude Code 与 Copilot CLI 偏向"全家桶"，Codex/Gemini 押注"Rust 重写 + 严格沙箱"，OpenCode/pi 走"V2 工具链精修"路线；
- **生态策略**：GitHub/Claude Code 通过 MCP 协议扩展第三方，OpenCode/Kimi 通过兼容 OpenAI 协议降低迁移成本。

---

## 五、社区热度与成熟度评估

### 成熟梯队（产品稳定、用户量大、问题多发）
- **Claude Code**：30 issues + 1 PR，Issue 评论密度高（最高 29/24），反映**真实生产环境中的复杂问题**；
- **OpenAI Codex**：30 + 10，已进入"功能完备期"但 Windows / GPT-5.6 暴露兼容性阵痛；
- **GitHub Copilot CLI**：35 + 0，"功能上线 → 回归集中爆发"的典型瀑布式发布痛点。

### 高速迭代梯队（功能仍在快速演进）
- **Gemini CLI**：50 + 18，P1 安全 PR 密集，反映团队**主动收口 + 高速并行**；
- **OpenCode**：50 + 50，单日双向互动量最大，V2 打磨期 + Go 商业化并行；
- **pi**：单日 65+ 互动，TUI 体验是核心竞争力，但缺少 release cadence。

### 长尾 / 垂直梯队（用户少但聚焦）
- **Kimi Code CLI**：6 + 3，质量优于数量，专注 OpenAI 兼容与 JetBrains 集成；
- **jcode**：8 + 1，单维护者模式，安全审计友好。

### 关注信号

| 信号 | 来源 | 解读 |
|------|------|------|
| **OpenCode Go 计费争议** | #38255、#41206、#45897、#45899 | 订阅制 AI CLI 的首例"额度 vs 实际"集中投诉，是行业的"试点警报" |
| **MCP 协议升级阵痛** | Claude Code、Copilot | 协议方与生态方需建立更稳定的兼容策略 |
| **第三方安全审计贡献** | jcode #1085 | 暴露了小型项目"安全贡献准入"的瓶颈 |
| **Bot 自动化提单** | Kimi #2624 (cursor[bot])、Copilot #41313 (copyberry[bot]) | LLM 辅助的 Issue 治理开始普及 |

---

## 六、值得关注的趋势信号

### 趋势 1：可观测性从"可选项"变成"必选项"
- **信号**：Claude Code 企业用户沉默点赞 OTel（👍 35）、Gemini 修复 OTel env var 顺序、Copilot 已落地 Hooks OTel；
- **启示**：AI CLI 进入生产环境后，**trace、span、token 计费、agent 行为审计** 将是下一个标准件；选型时优先考虑 OTel 原生支持。

### 趋势 2：多 Agent 架构进入"工程深水区"
- **信号**：四家头部厂商的 Subagent 问题均涉及"状态正确性、上下文传递、可观测性"；
- **启示**：未来 6 个月内，能够提供 **统一 agent runtime + 可干预 subagent + 安全沙箱** 的工具将占据企业市场制高点。

### 趋势 3：订阅透明度成为商业化"试金石"
- **信号**：OpenCode Go 多用户投诉"宣传额度与实际不符"；
- **启示**：AI CLI 的订阅模型需要在**额度计算、跨周期结转、面板展示**三方面更透明，否则会迅速演化为公关危机。

### 趋势 4：MCP 协议进入"治理期"
- **信号**：协议升级导致第三方服务失联（Copilot chroma-mcp）、状态显示"假阳性"（Claude Code Cowork）；
- **启示**：依赖 MCP 集成的工具链需要**版本兼容矩阵 + 灰度通道 + LTS 支持**；可考虑实现"协议协商"机制。

### 趋势 5：AI 代码归属走向标准化
- **信号**：Kimi 推动 git-ai 集成，GitHub Copilot 推动 rubber duck 审计化；
- **启示**：`git blame` 级别的 AI provenance 可能成为 2027 年的开源基础设施标配；企业用户应尽早建立 AI 生成代码的归属规范。

### 趋势 6：Windows 平台从"兼容目标"变为"质量短板"
- **信号**：四家头部

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>用户要求我作为技术分析师，根据提供的 GitHub 数据生成一份 Claude Code Skills 社区热点报告。让我仔细分析数据并按要求组织内容。

**数据概览：**
- PRs: 50 条数据，展示前 20 条
- Issues: 50 条数据，展示前 15 条
- 截止日期: 2026-08-28

注意：PR 数据中"评论数"显示为 undefined，"👍"也显示为 0，这说明数据可能不完整。但我需要基于可见信息（创建时间、更新时间、状态、标题、摘要等）进行分析。

**热门 Skills 分析：**

让我挑选最值得关注的 PR：

1. **#1298 - skill-creator 修复** - 关于 run_eval.py 报告 0% recall 的问题，影响整个 description 优化循环，引用了 #556 问题（有 12 条评论）。这是非常关键的修复。

2. **#514 - document-typography** - 文档排版质量控制，针对 AI 生成文档的常见排版问题。

3. **#1615 - scnet-hpc** - 高性能计算集群操作技能，针对科学计算领域。

4. **#538 - PDF 文件引用修复** - 小修复但影响关键功能。

5. **#486 - ODT skill** - OpenDocument 文本创建，与 PDF/DOCX 互补。

6. **#210 - frontend-design 改进** - 前端设计技能的可操作性改进。

7. **#83 - skill-quality-analyzer 和 skill-security-analyzer** - 元技能，质量分析和安全分析。

8. **#541 - docx tracked change 修复** - 解决文档损坏的严重 bug。

9. **#1628 - Hivemind** - 多代理编排技能，零成本。

10. **#1367 - self-audit** - 自我审计技能，机械验证 + 四维推理质量门。

**社区需求趋势分析：**

Issues 中最重要的：
- **#492 - 安全/信任边界问题**（43 评论） - 最热门，关注社区技能冒充官方技能
- **#228 - 组织内技能共享**（16 评论） - 企业级共享需求
- **#556 - run_eval.py 0% 触发率**（12 评论） - 评测基础设施 bug
- **#1329 - compact-memory**（9 评论） - 代理记忆压缩
- **#189 - 插件内容重复**（6 评论） - 平台架构问题
- **#1487 - claude-api 技能上下文窗口爆炸**（4 评论） - 性能问题
- **#1390 - mcp-builder 评测分数为 0**（4 评论） - 评测基础设施
- **#1385 - 推理质量门管道**（4 评论） - 质量保证
- **#1175 - SharePoint 安全/上下文**（4 评论） - 企业集成

**趋势主题：**
1. 安全与信任边界
2. 企业级功能（共享、组织管理、SharePoint）
3. 评测基础设施可靠性（run_eval, mcp-builder 评测）
4. 性能与上下文管理
5. 质量保证与自我审计

**高潜力待合并 Skills：**
- #1298 修复 skill-creator
- #514 document-typography
- #1615 scnet-hpc
- #486 ODT
- #1628 Hivemind
- #1367 self-audit
- #83 skill-quality/security analyzer

**生态洞察：**
社区最集中的诉求是**对 Skills 生态本身的信任、安全与可靠性的诉求**——从"社区技能冒充官方"的信任问题，到"评测工具自身不可靠"的质量问题，到"上下文窗口被吞噬"的性能问题，社区正在要求 Skills 系统从"内容供给"转向"基础设施可信"。

让我组织成报告。需要注意：
- 数据中评论数为 undefined，需要说明或基于可见信息判断
- 状态都是 OPEN，没有 merged 的，可能这是筛选条件
- 应该客观呈现，不要编造数据

我会用中文回答，简洁专业，每个条目附 GitHub 链接。</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-08-28 · 来源: github.com/anthropics/skills*

---

## 一、热门 Skills 排行（Top PRs）

> 注：原数据中评论数字段为空，以下排行综合考量 PR 关注度（关联 Issue 评论数、问题严重度、更新时间、跨 PR 引用热度）。

### 1. 🏆 skill-creator 评测体系修复 — #1298
- **功能**：修复 `run_eval.py` 始终报告 `recall=0%` 的核心 bug；修复 Windows 子进程流读取、触发检测与并行 Worker 稳定性
- **社区热点**：关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论，10+ 独立复现）—— 该 bug 直接导致 `improve_description.py` 整个描述优化循环在"对抗噪声"，是当前最被诟病的"元基础设施"故障
- **状态**：OPEN（2026-06-10 创建，最近更新 06-23）
- **链接**：https://github.com/anthropics/skills/pull/1298

### 2. document-typography — AI 文档排版质量控制 — #514
- **功能**：自动修复 AI 生成文档中的孤儿单词（orphans）、寡妇段落（widows）、编号错位等排版缺陷
- **社区热点**：解决"所有 Claude 生成的文档都有的问题"，切入点小但覆盖面广（每个文档生成场景都受益）
- **状态**：OPEN（2026-03-04 创建，最近更新 03-13）
- **链接**：https://github.com/anthropics/skills/pull/514

### 3. scnet-hpc — 科研 HPC 集群技能 — #1615
- **功能**：基于 Profile 的 SSH + Slurm 工作流，覆盖 SCNet 高性能计算集群的连接、作业提交、模块加载、加速器选择等
- **社区热点**：面向科研/学界用户，是少有的垂直领域（科学计算）Skill
- **状态**：OPEN（2026-08-20 创建，最近更新 08-24）
- **链接**：https://github.com/anthropics/skills/pull/1615

### 4. ODT — OpenDocument 文档技能 — #486
- **功能**：覆盖 ODT/ODS/ODF 文件的创建、模板填充、解析为 HTML，弥补 PDF/DOCX 之外的开源文档格式空白
- **社区热点**：LibreOffice 用户、开源办公场景刚需
- **状态**：OPEN（2026-03-01 创建，最近更新 04-14）
- **链接**：https://github.com/anthropics/skills/pull/486

### 5. Hivemind — 零成本多代理编排 — #1628
- **功能**：将机械性子任务委派给 headless [opencode](https://opencode.ai) worker（基于免费模型），Claude Code 自身只保留规划、评审、合并职责
- **社区热点**：核心论点是"昂贵模型的上下文是稀缺资源，不是其智能" —— 直接回应成本敏感型用户
- **状态**：OPEN（2026-08-21 创建，最近更新 08-24）
- **链接**：https://github.com/anthropics/skills/pull/1628

### 6. skill-quality-analyzer + skill-security-analyzer — 元分析技能 — #83
- **功能**：五维质量分析（结构、文档、资源、安全、可维护性）+ 安全审计，进入 `example-skills` 市场
- **社区热点**：呼应 Issue [#492](https://github.com/anthropics/skills/issues/492) 的社区技能冒充官方问题
- **状态**：OPEN（2025-11-06 创建，最近更新 2026-01-07）
- **链接**：https://github.com/anthropics/skills/pull/83

### 7. self-audit — 自审计质量门 — #1367
- **功能**：交付前的两级审计（机械文件验证 + 四维推理审计，按损害严重度排序），通用、跨技术栈、跨模型
- **社区热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385) "推理质量门管道"提案形成闭环
- **状态**：OPEN（2026-06-28 创建，最近更新 07-02）
- **链接**：https://github.com/anthropics/skills/pull/1367

### 8. frontend-design 改进 — 可执行性提升 — #210
- **功能**：重写 frontend-design Skill，确保每条指令 Claude 都能在单轮会话中执行，并保持指导的具体性
- **社区热点**：解决"Skill 写得像开发文档而非操作指令"的普遍痛点
- **状态**：OPEN（2026-01-05 创建，最近更新 03-07）
- **链接**：https://github.com/anthropics/skills/pull/210

---

## 二、社区需求趋势（基于 Issues）

| 趋势方向 | 代表 Issue | 关注度 | 核心诉求 |
|---------|-----------|-------|---------|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 43 评论 ⭐ 最高 | 社区技能以 `anthropic/` 命名空间冒充官方，存在权限提升风险 |
| **🏢 企业级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 | 组织内 Skill 一键共享，免去手工下载上传 |
| **🛠 评测基础设施可靠性** | [#556](https://github.com/anthropics/skills/issues/556) / [#1390](https://github.com/anthropics/skills/issues/1390) / [#1602](https://github.com/anthropics/skills/pull/1602) | 12+4 评论 | `run_eval.py` 与 mcp-builder 评测脚本自身存在严重 bug，0/N 评分无法区分真失败与脚本失败 |
| **📦 上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) / [#12](https://github.com/anthropics/skills/issues/12) | 4+4 评论 | `claude-api` Skill 单次工具调用注入 ~156k token；DOCX Skill 改空白导致文档损坏 |
| **🧠 代理记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 评论 | 长任务代理自身笔记占用过多上下文，提议 `compact-memory` 符号化压缩 |
| **🤖 代理治理与质量门** | [#412](https://github.com/anthropics/skills/issues/412) / [#1385](https://github.com/anthropics/skills/issues/1385) | 6+4 评论 | agent-governance（策略/威胁/审计）与 三门质量管道（校准→对抗→交付验证） |
| **🔌 企业平台集成** | [#1175](https://github.com/anthropics/skills/issues/1175) / [#568](https://github.com/anthropics/skills/pull/568) | 4 评论 / PR | SharePoint / ServiceNow 等企业 SaaS 的安全集成模式 |
| **📦 插件去重与打包** | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 👍9 | `document-skills` 与 `example-skills` 内容重复，污染上下文 |

**趋势提炼**：社区讨论已从"补齐功能型 Skill"明显转向"治理 Skill 生态本身"——评测可信、安全边界、上下文预算、组织治理成为四大主线。

---

## 三、高潜力待合并 Skills

以下 PR 关联 Issue 反馈强烈、技术价值清晰，但截至 2026-08-28 仍未合并：

| PR | 关键性 | 阻碍合并的可能原因 |
|---|------|------------------|
| [#1298 skill-creator 评测修复](https://github.com/anthropics/skills/pull/1298) | ⭐⭐⭐⭐⭐ 阻塞整个 description 优化循环 | 涉及 Windows 兼容性、跨平台测试覆盖，验收面广 |
| [#83 skill-quality/security-analyzer](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐ 直接呼应 #492 安全诉求 | 已 open 近 10 个月，疑似维护者人手不足 |
| [#1628 Hivemind](https://github.com/anthropics/skills/pull/1628) | ⭐⭐⭐⭐ 零成本多代理是杀手级用例 | 引入 opencode 外部依赖，需评估供应商中立性 |
| [#1367 self-audit v1.3.0](https://github.com/anthropics/skills/pull/1367) | ⭐⭐⭐⭐ 与 #1385 提案互补 | "通用质量门"边界与官方品牌重合度高 |
| [#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615) | ⭐⭐⭐ 填补 HPC 垂直空白 | 高度专业化，scope 与 Anthropic 通用市场定位的张力 |
| [#514 document-typography](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐ 普适性强、入口小 | 文档类 Skill 边界（是否属于 "document-skills" 还是 "example-skills"） |
| [#541 docx tracked-change 修复](https://github.com/anthropics/skills/pull/541) | ⭐⭐⭐ 解决文档损坏严重 bug | 涉及 OOXML 内部 ID 空间，需回归测试 |

**判断**：#1298 最有可能在短期内被推进，因为它阻塞的是 skill-creator 自身的开发闭环；而 #83、#1628、#1367 更可能是社区"民间分流"路径——在合并前通过 partner skills 或第三方分发。

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求已经从"提交更多 Skill"转向"治理 Skill 生态的可信度"——评测工具不可信（recall=0%）、身份边界不可信（社区冒充官方）、上下文预算不可信（156k token 单调用），社区在用 Issue 倒逼官方把 Skills 从"内容货架"升级为"可审计的基础设施"。**

---

*报告方法说明：原数据中评论数（comments）与点赞数（👍）字段为空，因此热门 PR 排序综合考量了"关联高评论 Issue / 严重 bug 报告 / 跨 PR 引用热度 / 更新时间"，而非单一评论数。如需更精确的社区关注度，建议补抓 GitHub GraphQL API 的 reactions 与 comments 字段。*

---

<think>The user wants me to generate a Chinese-language daily report for the Claude Code community based on GitHub data from 2026-08-28. Let me analyze the data carefully.

Let me organize this:

**Releases (past 24h):**
- v2.1.250: Bug fixes and reliability improvements
- v2.1.248: Added `--restricted` flag (or `CLAUDE_CODE_RESTRICTED=1`) - removes built-in tools that run commands/code and WebFetch, keeps file tools inside working directory, refuses bypassPermissions, ignores user/project/local settings files

**Issues (top 30 by comments, past 24h updated):**

Top issues by comment count:
1. #53247 - 29 comments - Claude Desktop fails to launch on Windows (orphaned Silo/Job Object)
2. #61682 - 24 comments - GitHub connector "Connected" but no tools in Cowork
3. #49655 - 23 comments (CLOSED) - Claude Desktop update fails with 0x80073CF6
4. #82049 - 19 comments - Claude.ai sign-in emails delayed 2-5 minutes
5. #34692 - 10 comments (CLOSED) - PreToolUse/PostToolUse hooks don't fire for subagent
6. #32364 - 8 comments - OTel support in Claude Code Web
7. #66440 - 8 comments - C# syntax highlighting disappears
8. #67657 - 7 comments - env block in managed-settings.json doesn't apply OTEL env vars
9. #87710 - 7 comments - Desktop sidebar shows no session history on fresh install
10. #88405 - 6 comments - Symlinked files in .claude/rules/ not auto-loaded
11. #40766 - 6 comments (CLOSED) - mcp__ide__getDiagnostics missing from VSCode extension
12. #12862 - 5 comments - Improve error message for /security-review
13. #89911 - 3 comments - /fork starts in auto mode when parent permission not recorded
14. #88561 - 3 comments - Bash tool collapses \\ to \
15. #85477 - 3 comments - Rules-governance diagnostics
16. #87576 - 3 comments - Session not found on disk
17. #87348 - 2 comments - Endless SecurityAgent prompt stack
18. #75957 - 2 comments - VS Code session Delete recoverable
19. #90299 - 1 comment - Sticky prompt header stopped rendering in 2.1.247
20. #90321 - 1 comment - Claude Code generated untested service version
21. #90306 - 1 comment - Chrome extension not detected when no Default Chrome profile (Linux)
22. #78776 - 1 comment - Disable cross-device session sync
23. #90264 - 1 comment - Multi-agent session: orphaning, drift
24. #90298 - 1 comment - Verify org/account for setup-token
25. #88518 - 1 comment - Restore strict read-before-overwrite for Write tool
26. #88988 - 1 comment - Filesystem MCP server outputSchema draft-07
27. #87528 - 1 comment - Claude Projects knowledge base access
28. #90325 - 0 comments - Desktop model picker duplicate Opus 5
29. #90324 - 0 comments - Desktop model picker duplicate Opus 5
30. #80086 - 0 comments - Sticky top-line flickers

**PRs (past 24h):**
- #69226 - Update frontend-design skill (CLOSED)

Now I need to create the report. Since there's only 1 PR and the user asked for 10, I'll be honest about this.

Let me write the report in Chinese with technical accuracy and provide the appropriate structure.

Let me think about what's most important and noteworthy:

1. v2.1.250 is a bug fix release
2. v2.1.248 introduced `--restricted` mode - this is significant for security
3. Windows-related bugs dominate the top issues (#53247, #61682, #49655, #88988)
4. OTEL (OpenTelemetry) support is requested (#32364, #67657)
5. Session/history management issues (#87710, #87576, #75957, #80086)
6. Hook issues for subagents (#34692)
7. Security concerns (#87348, #12862)

For "Community Hot Issues" I need to pick 10 most important:

Top 10 by significance:
1. #53247 (29 comments) - Windows desktop launch failure
2. #61682 (24 comments) - GitHub connector in Cowork
3. #49655 (23 comments) - Windows update failure (CLOSED)
4. #82049 (19 comments) - Login email delay
5. #34692 (10 comments) - Subagent hooks (CLOSED)
6. #32364 (8 comments) - OTel on Web (high thumbs 35)
7. #66440 (8 comments) - C# syntax highlighting
8. #87710 (7 comments) - Session history missing on fresh install
9. #88405 (6 comments) - Symlinked rules files
10. #40766 (6 comments) - MCP diagnostics missing in VSCode (CLOSED)

Or maybe I should include newer issues like #90299 (sticky prompt regression in 2.1.247) - this is interesting because it's a regression in the most recent release.

For PRs, there's only 1 PR. I should note this.

Function request trends:
- OTel/observability (#32364, #67657)
- Session management improvements (#75957, #78776, #80086)
- Rules governance (#85477)
- Claude Projects integration (#87528)
- Security improvements (#88518)
- Cross-platform reliability (Windows-specific)
- IDE integration improvements (VSCode, Cowork)
- Model picker UX

Developer pain points:
- Windows desktop stability issues (orphaned processes)
- MCP integration in Cowork
- Hook firing in subagents
- Session history management
- Cross-device sync control
- Bash tool escaping bugs
- Model picker regressions

Let me write the report now. I'll use proper Chinese technical writing.</think>

# Claude Code 社区动态日报 · 2026-08-28

> 数据范围：2026-08-27 ~ 2026-08-28 · 数据源：`anthropics/claude-code`

---

## 📌 今日速览

过去 24 小时，Claude Code 发布了 **v2.1.250**（稳定性修复）与 **v2.1.248**（新增 `--restricted` 安全受限模式）。社区关注度集中于 **Windows 桌面端的稳定性问题**（孤儿进程、MCP 连接失败、更新报错）与 **会话历史/同步机制** 的若干缺陷；同时有较高呼声的增强请求聚焦在 **OpenTelemetry 可观测性**、**Rules 治理诊断** 与 **跨设备会话控制**。

---

## 🚀 版本发布

### v2.1.250（最新）
- **类型**：Bug fixes and reliability improvements
- **变更说明**：未列出具体条目，整体偏向稳定性。
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.250)

### v2.1.248
- **新增 `--restricted` 标志**（或环境变量 `CLAUDE_CODE_RESTRICTED=1`）：
  - 移除可执行命令/代码的内置工具与 `WebFetch`（除非通过 `--tools` 显式包含）
  - 文件操作被限制在工作目录内
  - 拒绝 `bypassPermissions` 模式
  - 忽略 user / project / local 三个层级的 settings 文件
- **意义**：面向企业/受限环境提供一个更安全的"沙箱"启动档，可显著缩小误操作与越权执行面。
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 类别 | 评论 / 👍 | 为什么重要 |
|---|-------|------|---------|-----------|
| 1 | [#53247](https://github.com/anthropics/claude-code/issues/53247) Claude Desktop 在 Windows 启动失败：崩溃后遗留孤儿 Silo/Job Object，仅登出/重启可恢复（HRESULT 0x80070020） | bug · windows · desktop | 29 / 18 | 影响面广，4 月至今未关闭；描述指向进程清理缺陷而非配置问题，社区关注度高 |
| 2 | [#61682](https://github.com/anthropics/claude-code/issues/61682) Cowork 中 GitHub 连接器"已连接"但不暴露任何工具（Windows 11, v1.8555.2.0） | bug · mcp · cowork | 24 / 24 | 👍/评论比 1:1，说明社区严重不信任此状态展示；MCP 集成的"假阳性"会破坏自动化 |
| 3 | [#49655](https://github.com/anthropics/claude-code/issues/49655) Claude Desktop 更新失败 0x80073CF6（Windows + CoworkVMService 运行中） | bug · windows · installation | 23 / 10 | 已 **CLOSED**，可能近期有修复释出；典型 Windows 升级场景痛点 |
| 4 | [#82049](https://github.com/anthropics/claude-code/issues/82049) claude.ai 登录 magic link 邮件延迟 2–5 分钟（自 7 月中旬起恶化） | bug | 19 / 36 | 间接影响 Claude Code 会话续期；👍 36 显示这是普遍问题而非个案 |
| 5 | [#34692](https://github.com/anthropics/claude-code/issues/34692) PreToolUse/PostToolUse 钩子不会在 Subagent（Agent 工具）的子调用中触发 | bug · linux · hooks | 10 / 7 | 已 **CLOSED**；关键回归——大量自定义 hook 工作流依赖子代理上下文，修复或回滚对生态影响重大 |
| 6 | [#32364](https://github.com/anthropics/claude-code/issues/32364) Claude Code on the Web 缺少 OpenTelemetry 配置支持 | enhancement · claude-code-web | 8 / 35 | 👍 数高于评论数，说明社区沉默点 👍 表达强烈；企业可观测性诉求典型代表 |
| 7 | [#66440](https://github.com/anthropics/claude-code/issues/66440) C# 语法高亮在短暂显示后消失（macOS） | bug · macos · ui | 8 / 10 | 常见 IDE 体验缺陷，影响特定语言生态用户 |
| 8 | [#87710](https://github.com/anthropics/claude-code/issues/87710) 全新安装后桌面端侧边栏不显示会话历史（`~/.claude/projects` 数据完好） | bug · windows · desktop | 7 / 0 | 新用户首次安装即遭遇"空状态"，体验破坏性极强 |
| 9 | [#88405](https://github.com/anthropics/claude-code/issues/88405) `.claude/rules/` 中的符号链接文件不会被自动加载（与文档矛盾） | bug · core | 6 / 4 | 文档-行为不一致直接影响"共享规则"等团队协作模式 |
| 10 | [#40766](https://github.com/anthropics/claude-code/issues/40766) `mcp__ide__getDiagnostics` 在 CLI 中可用，但在 VSCode 扩展面板中缺失 | bug · mcp · vscode | 6 / 7 | 已 **CLOSED**；CLI/扩展能力差异问题，影响 IDE 自动化流 |

**附加值得关注的"近期新发"Issue（评论少但时效新）：**

- [#90299](https://github.com/anthropics/claude-code/issues/90299) — **2.1.247 回归**：全屏 sticky prompt header 不再渲染（`isSticky()` 被记忆化未重算）
- [#90264](https://github.com/anthropics/claude-code/issues/90264) — 多智能体会话：后台任务孤儿化、跨会话消息滞留、subagent drift（实战报告）
- [#88518](https://github.com/anthropics/claude-code/issues/88518) — 自 v2.1.228 起 Write 工具丢失"读后覆盖"保护，被列为 `data-loss` 标签
- [#88561](https://github.com/anthropics/claude-code/issues/88561) — Windows 下 Bash 工具静默将 `\\` 折叠为 `\`（破坏正则与路径）
- [#90306](https://github.com/anthropics/claude-code/issues/90306) — Linux 下无 'Default' Chrome profile 时扩展检测失败

---

## 📦 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- [#69226](https://github.com/anthropics/claude-code/pull/69226) — **Update frontend-design skill**（已 CLOSED）
  - 由 @williamqian12 提交，bump plugin 版本至 1.1.0，以使已安装副本能拉取到 frontend-design skill 的改进。

> ℹ️ 近 24 小时内 PR 活动极少，提交活跃度偏低，关注后续是否集中出现 fix：Windows 桌面 / Hook / Subagent 等热区修复。

---

## 📈 功能需求趋势

从最新与历史 Issues 提炼，社区关注方向集中在以下几条主线：

1. **可观测性与企业治理**
   - OpenTelemetry 支持 Web 端（[#32364](https://github.com/anthropics/claude-code/issues/32364)）
   - `managed-settings.json` 中 OTEL env var 初始化顺序修复（[#67657](https://github.com/anthropics/claude-code/issues/67657)）
   - `CLAUDE.md` / `.claude/rules` 的指令预算、冲突检测（[#85477](https://github.com/anthropics/claude-code/issues/85477)）

2. **会话与跨设备控制**
   - 关闭跨设备会话同步 / 设备本地化（[#78776](https://github.com/anthropics/claude-code/issues/78776)）
   - VS Code 删除会话可恢复（[#75957](https://github.com/anthropics/claude-code/issues/75957)）
   - sticky header 滚动回归与防闪烁（[#80086](https://github.com/anthropics/claude-code/issues/80086)、[#90299](https://github.com/anthropics/claude-code/issues/90299)）

3. **安全与权限模型**
   - `--restricted` 模式正式落地（v2.1.248）
   - `/security-review` 在 origin/HEAD 缺失时改进错误信息（[#12862](https://github.com/anthropics/claude-code/issues/12862)）
   - macOS 钥匙串分区不匹配导致 SecurityAgent 弹窗循环（[#87348](https://github.com/anthropics/claude-code/issues/87348)）
   - `claude setup-token` 生成后无法核验所属 org（[#90298](https://github.com/anthropics/claude-code/issues/90298)）

4. **数据安全与工具可靠性**
   - 恢复 Write 工具"读后覆盖"严格模式（[#88518](https://github.com/anthropics/claude-code/issues/88518)）
   - Bash 工具对反斜杠的处理（[#88561](https://github.com/anthropics/claude-code/issues/88561)）

5. **生态整合**
   - Claude Projects 知识库接入 Claude Code（[#87528](https://github.com/anthropics/claude-code/issues/87528)）
   - MCP Servers（Filesystem、GitHub 等）在 Cowork 中的稳定暴露

---

## 🛠 开发者关注点

综合 Issues 与标签，开发者当下痛点呈现以下特征：

- **Windows 桌面端是当前稳定性"重灾区"**
  启动崩溃（孤儿进程）、更新失败、侧边栏空白、remote-devices MCP 失败等多发，建议 Anthropic 在 v2.1.25x 系列集中回归测试 Windows 安装/升级链路。

- **Cowork 与 MCP 集成存在"假成功"问题**
  GitHub 连接器"已连接"但不暴露工具是典型例子，导致用户在自动化链路上静默失败；社区要求状态展示必须可验证。

- **Subagent / Hook 模型文档与行为不一致**
  符号链接 `.claude/rules` 不被加载（[#88405](https://github.com/anthropics/claude-code/issues/88405)）、subagent 不触发钩子（[#34692](https://github.com/anthropics/claude-code/issues/34692)）直接影响高级用户对扩展点的信任。

- **会话状态/历史可靠性是新焦点**
  会话"不在磁盘"、"侧边栏空白"、"删除不可恢复"等问题集中出现；`#78776` 的跨设备同步被许多用户视为"不希望默认开启"，需求强烈。

- **回归与稳定性补丁"暗藏代价"**
  v2.1.247 引入 sticky header 渲染回归（[#90299](https://github.com/anthropics/claude-code/issues/90299)）、v2.1.228 起 Write 失去保护（[#88518](https://github.com/anthropics/claude-code/issues/88518)）等，说明近期版本节奏快但回归测试窗口偏紧，建议生产用户在升级时关注 CHANGELOG 中相关条目。

- **可观测性短板被企业用户持续放大**
  OTel / 规则治理 / token 计费等都是付费场景下高频呼吁，且常常以"沉默点 👍"形式体现（[#32364](https://github.com/anthropics/claude-code/issues/32364) 👍35、 [#82049](https://github.com/anthropics/claude-code/issues/82049) 👍36），值得 roadmap 优先级上调。

---

*日报生成时间：2026-08-28 · 数据集：GitHub Issues/PRs/Releases · 报告基于 30 条最热 Issue + 全部 PR 提炼*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community activity on 2026-08-28. Let me analyze the data and create a structured report.

Key observations from the data:

**Releases**: Three alpha releases in 24 hours (0.151.0-alpha.6, .7, .8) - rapid iteration on the Rust version

**Top Issues by comments**:
1. #16857 - High GPU usage due to tiny animation (42 comments, 51👍)
2. #39903 - Add option to disable "Ran N commands" collapsing (33 comments, 60👍)
3. #41049 - code-mode host exited during handshake on 5.6 model (32 comments, 1👍)
4. #35746 - Paginated history drops valid flattened rollout records (31 comments, 1👍)
5. #32759 - GPT-5.6 Sol fails to execute shell commands (18 comments, 5👍)
6. #40036 - Codex Stuck in Login Loop Windows 11 (14 comments)
7. #11747 - Add `/add-dir` slash command (14 comments, 45👍)
8. #39855 - Windows Remote trust verification failure (12 comments)
9. #39678 - Remote Android to macOS project trust error (11 comments)
10. #41179 - Windows ChatGPT Desktop headless after upgrade (11 comments)

**Top PRs**:
1. #41313 - Decouple HTTP retry backoff
2. #41309 - Honor required reviews when reusing Guardian scores
3. #41308 - Make subagents follow root service tier
4. #41292 - Forward history note images to model
5. #41285 - Drive keymap conflict checks from action registry
6. #41260 - Let history backend enforce tool output budgets
7. #41250 - Include thread source in realtime connection metadata
8. #41243 - Add configurable gating for sleep tool
9. #10192 - TUI to use app-server v2 (older but updated)
10. #41239 - Surface model provider auth recovery progress

**Trends**:
- Windows platform issues are very prominent (many Windows-specific bugs)
- GPT-5.6 model causing handshake/exec issues
- TUI/UX improvements
- Authentication issues
- Performance concerns (GPU usage, polling, context size)
- App-server architecture work

Let me write the report in Chinese, structured and professional.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-28**

---

## 一、今日速览

今日 Codex 仓库进入 **0.151.0-alpha 快速迭代阶段**，24 小时内连续发布三个 Rust 预发布版本。社区讨论热度集中在 **GPT-5.6 模型在 code-mode 下执行 shell 命令失败**（多次报告）和 **Windows 桌面端连环故障**（登录循环、headless 启动、auth 401）两大方向。同时 PR 端高频出现 `copyberry[bot]` 自动提交的代码改动，主要围绕 Guardian 审查机制、subagent 服务层级联、工具输出预算等内部基础设施重构。

---

## 二、版本发布

过去 24 小时发布三个 Rust alpha 版本，迭代节奏明显加快：

| 版本 | 链接 |
|---|---|
| rust-v0.151.0-alpha.6 | [Release](https://github.com/openai/codex/releases) |
| rust-v0.151.0-alpha.7 | [Release](https://github.com/openai/codex/releases) |
| rust-v0.151.0-alpha.8 | [Release](https://github.com/openai/codex/releases) |

> 注：Release Notes 内容未在数据中提供，请以 GitHub Releases 页面为准。

---

## 三、社区热点 Issues

| # | Issue | 链接 | 评论 / 👍 | 关注理由 |
|---|---|---|---|---|
| 1 | **#16857** 应用"思考"时高 GPU 占用 | [link](https://github.com/openai/codex/issues/16857) | 42 / 51 | 桌面端长期存在的性能 bug，点赞数高，社区呼吁优化动画与渲染策略 |
| 2 | **#39903** 关闭 "Ran N commands" 折叠的选项 | [link](https://github.com/openai/codex/issues/39903) | 33 / 60 | 👍 60 是当日最高，社区强烈希望 CLI 默认展示执行的命令 |
| 3 | **#41049** code-mode host exited during handshake | [link](https://github.com/openai/codex/issues/41049) | 32 / 1 | GPT-5.6 模型在 Windows 端 shell 执行握手异常，影响 Pro 用户 |
| 4 | **#35746** 分页历史记录丢失 rollout 记录 | [link](https://github.com/openai/codex/issues/35746) | 31 / 1 | CLI 会话数据完整性问题，影响历史回放与审计 |
| 5 | **#32759** GPT-5.6 Sol shell 命令执行失败 | [link](https://github.com/openai/codex/issues/32759) | 18 / 5 | 与 #41049 同一根因（code-mode handshake），多平台复现 |
| 6 | **#11747** 新增 `/add-dir` 中途添加目录指令 | [link](https://github.com/openai/codex/issues/11747) | 14 / 45 | TUI 高价值增强请求，呼声持续 6 个月仍未合并 |
| 7 | **#40036** Windows 11 登录循环 | [link](https://github.com/openai/codex/issues/40036) | 14 / 0 | Plus 用户最新更新后无法登录，疑似认证/Token 失效 |
| 8 | **#39855** Windows Remote 项目信任校验失败 | [link](https://github.com/openai/codex/issues/39855) | 12 / 4 | Remote 功能在 Windows 端路径校验异常，新项目无法启动 |
| 9 | **#41179** Windows 26.820.9563.0 升级后无窗口 | [link](https://github.com/openai/codex/issues/41179) | 11 / 0 | 从 Classic 升级后无渲染进程，影响全部 Windows 桌面用户 |
| 10 | **#32309** code-mode 高频轮询 + 巨大上下文 | [link](https://github.com/openai/codex/issues/32309) | 10 / 4 | 揭示 GPT-5.6 Sol 单日消耗 6 亿 token 的异常根因 |

---

## 四、重要 PR 进展

| # | PR | 链接 | 关键内容 |
|---|---|---|---|
| 1 | **#41313** 解耦 HTTP 重试退避与 overload 测试 | [link](https://github.com/openai/codex/pull/41313) | 用 `run_with_retry` 在暂停的 Tokio 时间下直接验证重试与指数退避 |
| 2 | **#41309** 复用 Guardian 分数时尊重必需审查 | [link](https://github.com/openai/codex/pull/41309) | 修复"切换到强制自动审查模型时绕过完整审查"的安全漏洞 |
| 3 | **#41308** subagent 跟随根服务层级 | [link](https://github.com/openai/codex/pull/41308) | 子代理请求统一继承根线程的 service tier（含远程压缩） |
| 4 | **#41292** 将历史备注图片转发给模型 | [link](https://github.com/openai/codex/pull/41292) | 历史图片转 `input_image`，且不写入日志和 hook 响应 |
| 5 | **#41285** 从 action registry 驱动快捷键冲突检查 | [link](https://github.com/openai/codex/pull/41285) | 消除冗余 action 列表，保证校验顺序与错误信息一致 |
| 6 | **#41260** 历史后端强制工具输出预算 | [link](https://github.com/openai/codex/pull/41260) | 避免客户端二次截断已受限的加密历史响应 |
| 7 | **#41250** 在 realtime 连接元数据中携带 thread_source | [link](https://github.com/openai/codex/pull/41250) | 为跨多 turn 的实时语音会话提供一致来源标识 |
| 8 | **#41243** sleep 工具可配置启用门控 | [link](https://github.com/openai/codex/pull/41243) | 新增 `sleep_tool` feature，支持 `model_driven` / `always_on` |
| 9 | **#10192** TUI 迁移到 app-server v2 | [link](https://github.com/openai/codex/pull/10192) | 引入 `spawn_in_memory_typed()`，TUI 改走标准 app-server 协议 |
| 10 | **#41239** 暴露模型提供方认证恢复进度 | [link](https://github.com/openai/codex/pull/41239) | 新增 `modelProvider/authRecoveryStarted/Completed` 事件 |

> 当日多数 PR 由 `@copyberry[bot]` 自动提交并 CLOSED，节奏密集但单 PR 评论数偏低，建议关注其聚合的安全与性能改进。

---

## 五、功能需求趋势

从 Issues 标签聚合提炼的社区关注方向：

| 方向 | 代表 Issue | 趋势 |
|---|---|---|
| **TUI 交互增强** | #39903, #11747, #18396, #35005 | 命令折叠展开、中途添加目录、隐藏工具调用、内联编辑早期 prompt |
| **Windows 桌面稳定性** | #40036, #39855, #41179, #41136, #40761, #40576, #40512 | 登录循环、headless 启动、auth 401、进程静默退出等多类崩溃 |
| **GPT-5.6 / code-mode 兼容** | #41049, #32759, #41145 | 新模型 shell 执行握手异常、工具丢失 |
| **Remote / 多端协同** | #39678, #38128, #35217, #29163 | Android/macOS/Windows 跨端信任校验、NFS home 进程泄漏、项目不同步 |
| **性能与资源** | #16857, #32309, #38566, #41269 | GPU 占用、高频轮询、V8 崩溃、rollout 4 倍冗余存储 |
| **Browser Use** | #20785 | 桌面 IAB 缺少 `setInputFiles` 能力 |

---

## 六、开发者关注点

**1. 新模型 GPT-5.6 Sol 稳定性** 是当前最显著的痛点——多个高评论 Issue（#41049、#32759、#32309、#41145）均指向 code-mode 握手失败、shell 工具丢失、token 异常消耗。社区迫切需要针对该模型的 release notes 或临时 workaround。

**2. Windows 平台已成"重灾区"**——近 24 小时 50 条更新 Issue 中，带 `windows-os` 标签的超过 15 条，覆盖登录、认证、远程、渲染、退出等多个维度。Plus/Pro 用户升级 26.820.x 系列后普遍遭遇"连不上、用不了、看不到窗"的问题。

**3. TUI 可观测性与可配置性不足**——开发者希望默认展开命令输出（#39903）、隐藏工具调用（#18396）、内联编辑历史 prompt（#35005）、动态添加工作目录（#11747）。这些需求持续数月未落地，反映 TUI 演进节奏慢于 CLI 工具能力扩展。

**4. Session 数据膨胀与一致性**——#41269 揭示单条命令 stdout 被持久化 3~4 份，session 体积 60% 为冗余；#35746 揭示分页解码损坏。Rollout 作为审计/回放基石，其完整性与紧凑度亟待优化。

**5. Bot 化开发节奏**——`copyberry[bot]` 单日产生 15+ 条合并，涵盖 Guardian 审查、subagent 路由、history 后端等深层模块。社区应关注这些原子化重构的累积效应，而非单 PR 粒度。

---

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for the Gemini CLI repository and generate a comprehensive Chinese daily report for 2026-08-28.

Key observations:
1. One new nightly release: v0.59.0-nightly.20260828.g3c311beac
2. 50 issues updated, 18 PRs updated
3. Many issues are about agent-related bugs, subagent issues, browser agent, memory system
4. Several security-related fixes in PRs
5. Core bugs around shell execution, git configuration, SSE parsing

Let me organize this into a structured report.</think>

# Gemini CLI 社区动态日报

**📅 2026-08-28** | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 一、今日速览

Gemini CLI 今日发布 `v0.59.0` nightly 版本，社区讨论集中在 **子代理（Subagent）稳定性** 与 **Auto Memory 系统质量** 两大方向——多个 P1 级别 Issue 反馈子代理在 `MAX_TURNS` 后错误报告 GOAL 成功、Generalist Agent 长时间挂起等问题。与此同时，多个 **核心安全修复 PR**（如 `GIT_CONFIG_*` 环境变量清理、Sandbox 启动器 DEBUG 布尔解析、Workspace Trust fail-closed）正在推进，显示团队对运行时安全加固的持续投入。

---

## 二、版本发布

### 🚀 v0.59.0-nightly.20260828.g3c311beac

今日发布一个 nightly 版本，对应自动化版本 bump PR #29113。

- **变更范围**：相对前一日 nightly 的少量迭代更新
- **完整对比**：[Compare Link](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260827.g3c311beac...v0.59.0-nightly.20260828.g3c311beac)
- **关联 PR**：[#29113](https://github.com/google-gemini/gemini-cli/pull/29113)

---

## 三、社区热点 Issues（Top 10）

### 🔴 P1 级别——子代理可靠性（Agent 核心痛点）

| # | Issue | 标题 | 评论 | 👍 | 摘要 |
|---|-------|------|------|-----|------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在 MAX_TURNS 后错误报告 GOAL 成功，掩盖中断** | 13 | 2 | P1 bug，`codebase_investigator` 子代理虽达到最大回合限制却仍上报 `status: "success"`，导致真正的执行中断被隐藏。评论数最多，反映多用户踩坑。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist Agent 长时间挂起** | 8 | 8 | P1 bug，Gemini CLI 在调用通用代理时无限挂起（简单文件夹创建都受影响，等待 1 小时未恢复）。👍 数高，限制使用体验严重。 |
| 3 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent 在 Wayland 环境下失败** | 4 | 1 | P1 bug，浏览器子代理在 Wayland 显示协议下终止理由显示 GOAL 失败，影响 Linux 桌面用户。 |
| 4 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令执行完成后卡在 "Waiting input"** | 4 | 3 | P1 bug，简单 CLI 命令执行完后 shell 仍标记为活跃状态，干扰用户交互。 |
| 5 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done 输出 hook 触发崩溃** | 3 | 0 | P1 bug，`get-shit-done` 扩展输出 hook 在打印用户摘要时崩溃 CLI。 |

### 🟡 P2 级别——Auto Memory 系统质量

| # | Issue | 标题 | 评论 | 👍 | 摘要 |
|---|-------|------|------|-----|------|
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 无限重试低信号会话** | 5 | 0 | 自动记忆系统反复提取低价值会话，资源浪费明显。 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 缺少确定性脱敏机制** | 4 | 0 | 本地 transcript 在进入模型上下文前未做强制脱敏，存在敏感信息泄露风险。 |
| 8 | [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Auto Memory 静默跳过非法 inbox patch** | 3 | 0 | 非法补丁被静默丢弃，缺乏可见性与隔离机制。 |

### 🟢 功能增强方向

| # | Issue | 标题 | 评论 | 👍 | 摘要 |
|---|-------|------|------|-----|------|
| 9 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** | 8 | 1 | P2 enhancement，主张充分利用 Gemini 3 模型的原生 bash 能力，结合零依赖沙箱与意图路由。 |
| 10 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **评估 AST 感知文件读取/搜索/映射的价值** | 7 | 1 | P2 EPIC，探讨通过 AST 工具降低读取偏差、节省 token 的方案。 |

---

## 四、重要 PR 进展（Top 10）

### 🛡️ 安全与沙箱加固

| # | PR | 内容 | 优先级 | Size |
|---|----|----|----|----|
| 1 | [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | **fail-closed workspace trust + 过滤受限模式下 mcpServers** | - | M/L |
| | | 在 `gemini-cli-a2a-server` 启动时强制 fail-closed 的工作区信任解析，并过滤仓库级 mcpServers，防止意外进程执行。 | | |
| 2 | [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | **修复 `GIT_CONFIG_*` 环境三元组内部一致性** | P1 | L |
| | | 防止脱敏时仅移除一对键/值之一导致 Git 解析失败；同时避免 `ShellExecutionService` 还原敏感配置。 | | |
| 3 | [#28930](https://github.com/google-gemini/gemini-cli/pull/28930) | **移除不安全的 `diff.external` 覆盖** | P1 | M |
| | | 修复 #28928，先前将 `diff.external` 设为空字符串引发 Git 解析异常，已撤回该覆盖。 | | |
| 4 | [#28942](https://github.com/google-gemini/gemini-cli/pull/28942) | **Sandbox 启动器使用严格布尔解析 DEBUG 环境变量** | - | L |
| | | 修复 #28885：原实现使用 JS 字符串真值判断，导致 `DEBUG=false/0` 仍启用调试。 | | |
| 5 | [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **扩展更新提示用户授权 + 清理运行时环境变量** | - | M/L |
| | | 防止扩展更新绕过用户授权注入未授权环境变量到 MCP 服务进程。 | | |

### 🐛 核心 Bug 修复

| # | PR | 内容 | Size |
|---|----|----|----|
| 6 | [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | **`read_file` 改走 `FileSystemService`** | M/L |
| | | `read_file` 此前直接读本地磁盘，忽略 ACP 客户端注入的 `FileSystemService`，与 `write_file`/`replace` 不一致。 | |
| 7 | [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | **SSE 解析器在 EOF 无空行时刷新最终事件** | M |
| | | `CodeAssistServer.requestStreamingPost()` 在流被截断或代理不标准时会丢失 `finishReason`/usage 元数据。 | |
| 8 | [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) | **保持截断后 MCP 工具名唯一性** | M |
| | | 超长 MCP 工具名截断为前 30 + 后 30 字符，存在哈希碰撞；改为保留唯一性。 | |
| 9 | [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | **避免持久化被中断的响应占位符** | L |
| | | 修复 #28927：中断后 CLI 写入 `[The previous response was interrupted...]` 作为模型响应，污染后续会话。 | |

### 📚 文档与发布

| # | PR | 内容 |
|---|----|----|
| 10 | [#28926](https://github.com/google-gemini/gemini-cli/pull/28926) | **在 CONTRIBUTING.md 增加 Windows 长路径配置说明** |
| | | 补充 `core.longpaths=true` 与恢复步骤，解决 Windows 下嵌套快照路径超 260 字符限制导致 ~3000 文件被脏暂存的问题。 |

---

## 五、功能需求趋势

综合所有活跃 Issue 与 PR，社区关注的功能方向集中在以下几条主线：

| 趋势 | 代表 Issue/PR | 关注点 |
|-----|--------------|--------|
| 🤖 **子代理架构稳定性** | #22323、#21409、#21968、#21763 | 子代理任务路由、轨迹可见、状态正确性 |
| 🧠 **Auto Memory 系统** | #26516、#26522、#26523、#26525 | 记忆提取、脱敏、patch 验证、低信号过滤 |
| 🛡️ **运行时安全/沙箱** | #29099、#28938、#28942、#28863 | 环境变量清理、fail-closed、扩展授权 |
| 🌳 **AST 感知代码理解** | #22745、#22746、#19561 | 减少 token 消耗、提高读取精度 |
| 🖥️ **终端体验** | #21924、#22466、#23313 | resize 闪烁、换行处理、测试稳定性 |
| 🧭 **浏览器代理** | #22232、#21983、#22267 | 会话恢复、Wayland 兼容、设置覆盖 |

---

## 六、开发者关注点

从 Issue 讨论与 PR 提交模式中可提炼出几个反复出现的痛点：

1. **子代理透明性不足** —— `/bug` 报告无法包含子代理内部上下文（#21763），子代理轨迹难以分享（#22598），用户难以诊断失败原因。
2. **Auto Memory 静默失败** —— 非法 patch 被丢弃、低信号会话反复重试、缺乏强制脱敏（#26522/26523/26525），记忆系统可靠性与可控性需提升。
3. **核心安全加固窗口期** —— 近期多个 P1 PR 集中在环境变量与沙箱边界（#28938、#28930、#29099），提示团队已将运行时安全列为首要优先级。
4. **CLI 在交互式命令下的挂起** —— Vite 创建、shell 命令完成等场景出现"假活"状态（#22465、#25166），需要更明确的进程生命周期管理。
5. **工具数量膨胀下的健壮性** —— `>128/400 tools` 触发 400 错误（#24246），MCP 工具名截断碰撞（#28971），提示工具注册层需要更精细的命名与配额策略。
6. **跨平台一致性** —— Wayland 失败、Windows 长路径限制、shell 包装解析等多平台问题密集出现，跨平台 QA 投入需要持续加强。

---

> 📌 **小结**：今日 Gemini CLI 的工程重心明显在 **Agent 可靠性 + 安全加固 + Memory 治理**。子代理与自动记忆系统的质量改进将直接影响 CLI 的可用性，而沙箱与环境变量相关的 P1 PR 反映出团队对生产化部署风险的重视。社区贡献者（@SandyTao520、@rnett、@abhipatel12、@gundermanc 等）在多个核心议题中持续活跃，建议跟踪其后续提交。

*报告生成时间：2026-08-28 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily community report for GitHub Copilot CLI based on the provided GitHub data. Let me analyze the data carefully.

Key observations:
1. **Releases**: v1.0.82-0 (prerelease) and v1.0.81 (released 2026-08-27)
   - v1.0.81 includes: Plugins dashboard available to everyone, MCP 2026-07-28 support, Hooks receive OpenTelemetry
   - v1.0.82-0 just says "Fixes and changes"

2. **Issues**: 35 total, showing 30 most commented
   - Several high-impact bugs:
     - #4535: store_memory fails in v1.0.81 prereleases (7 comments)
     - #4612: Runaway FileWatch host-event loop freezes TUI, debug log grows to 13GB (6 comments)
     - #4533: Terminal UI stops consuming events with parallel subagents (4 comments)
     - #4527: copilot -p fails with 401 on GHEC data residency since 1.0.81-1 (3 likes, 2 comments)
     - #3760: CLI shows "ctrl+enter enqueue" but actually adds line break (12 likes!)
   - Several recently opened issues on 2026-08-28:
     - #4648: Black input field background
     - #4647: v1.0.81 broke chroma-mcp compatibility
     - #4650: Auth fails with -p or --agent (enterprise)
     - #4649: Tool search issue on Grok/Gemini (follow-up to #4588)
     - #4646: Compaction fails with CAPIError 400 on custom models
     - #4645: session.resume ignores model parameter
     - #4643: Compaction at low context (20%)
   - Feature requests:
     - #4642: Make --name create or resume a session
     - #4641: Publish official JSON Schema for settings.json
     - #4621: Rubber duck reviews leave no verifiable record
   - Platform-specific:
     - #4614: macOS MallocStackLogging warning
     - #3576 (closed): Windows MCP stdio servers fail (closed today)

3. **Pull Requests**: 0 in past 24 hours - so this section should note absence or skip

Let me pick the top 10 most important issues:
1. #4535 - store_memory fails (7 comments, area:context-memory)
2. #4612 - Runaway FileWatch loop, 13GB log (6 comments, severity)
3. #4533 - Terminal UI freezes with parallel subagents (4 comments, runtime)
4. #4527 - 401 on GHEC data residency (3 likes, enterprise critical)
5. #3760 - ctrl+enter keybinding misleading (12 likes, UX)
6. #4647 - v1.0.81 broke chroma-mcp (breaking change)
7. #4648 - Black input field (visual bug)
8. #4639 - event-storage exhaustion retry storm (OOM)
9. #4602 - managedSettings fails closed on serverFetchFailed (cross-cutting)
10. #4649 - Tool search broken on Grok/Gemini (model coverage)

Or I could include:
- #4629 - Plugin hooks not loaded when resuming session
- #4614 - macOS MallocStackLogging
- #4646 - Compaction fails with custom models

Let me finalize the top 10 list with the most impactful ones.

For PRs section - there are 0 in the past 24 hours, so I should note this.

For trends:
- Memory/context management issues (#4535, #4602, #3904)
- MCP compatibility and stability (#4647, #4239 closed, #1385, #4006 closed, #3576 closed)
- Session management (#4629, #4645, #4643, #4642)
- Multi-model support (#4649, #4646)
- Enterprise features (#4527, #4650)
- UI/TUI rendering (#4648, #4533, #4612, #3760)
- Plugin system (#4629, #4556)
- Developer ergonomics (#4641 JSON Schema, #4642 --name)

Developer concerns:
- Stability/reliability concerns (multiple freeze/OOM issues)
- Enterprise compatibility (data residency, custom models)
- MCP ecosystem breakage with new versions
- Documentation/tooling (JSON Schema request)
- Session lifecycle management

Let me write this report in a professional, concise Chinese style suitable for technical developers.

I should note that since this is a simulated date (2026-08-28), and the knowledge cutoff is January 2026, I'll write the report naturally without questioning the data authenticity.

Let me draft the report now.</think>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-08-28
**数据源**：`github.com/github/copilot-cli`

---

## 一、今日速览

v1.0.81 正式版（2026-08-27）带来 Plugins Dashboard 全员开放、MCP 2026-07-28 协议升级、Hooks 接入 OpenTelemetry 三大特性，紧随其后的 v1.0.82-0 预发布已开启修复轮次。但社区反馈显示，新版本引发了一波回归问题：`store_memory` 在预发布中持续报错、v1.0.81 与 `chroma-mcp` 等第三方 MCP 服务器兼容性破裂、`chroma-mcp`、GHEC 数据驻留企业租户认证 401、并行子代理触发 TUI 卡死等故障集中爆发，整体处于"功能密集上线、质量亟待收敛"的阶段。

---

## 二、版本发布

### v1.0.81（2026-08-27 正式发布）

**主要更新**：
- **Plugins Dashboard 全员开放**：通过 `/plugin`、`/mcp`、`/skills` 即可访问，新增 `copilot plugins` 命令；如需关闭，可设置环境变量 `PLUGINS_DASHBOARD=false`。
- **MCP 2026-07-28 协议规范支持**：CLI、SDK、IDE、内嵌客户端均已同步升级。
- **Hooks 接收 OpenTelemetry**：hooks 现可读取当前 OpenTelemetry 上下文，便于与可观测性栈打通。

🔗 [v1.0.81 Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.81)

### v1.0.82-0（预发布）

官方仅标注 "Fixes and changes"，尚无详细 changelog。结合今日 Issue 反馈，本轮预计修复方向涉及 `store_memory` instance id、运行时事件循环、MCP 兼容性回归等问题。

🔗 [v1.0.82-0 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.82-0)

---

## 三、社区热点 Issues（精选 10 条）

### 🔴 1. [#4535](https://github.com/github/copilot-cli/issues/4535) `store_memory` 在 v1.0.81 预发布中报错 `Instance id is required`
- **重要程度**：⭐⭐⭐⭐⭐
- **评论数**：7 | **标签**：`area:context-memory`
- 为何重要：原生 memory writer 在 1.0.81 预发布中完全不可用，直接破坏 agent 长期记忆能力，是 v1.0.81 系列回归的代表性问题。

### 🔴 2. [#4612](https://github.com/github/copilot-cli/issues/4612) FileWatch 主机事件失控循环导致 TUI 卡死，debug 日志膨胀至 13 GB
- **重要程度**：⭐⭐⭐⭐⭐
- **评论数**：6 | 👍：1 | **标签**：`triage`
- 为何重要：长会话或恢复会话后会出现高频 host event loop，UI 完全失去响应且日志无限增长，影响所有长时间运行场景的稳定性。

### 🟠 3. [#3760](https://github.com/github/copilot-cli/issues/3760) CLI 提示 `ctrl+enter enqueue` 但实际行为是插入换行，`ctrl+q` 才是真正的 enqueue
- **重要程度**：⭐⭐⭐⭐
- **评论数**：2 | 👍：**12** | **标签**：`area:input-keyboard`、`platform-windows`
- 为何重要：键位提示与实际行为不一致，已积累 12 个 👍，是 Windows 平台最高赞的可访问性问题。

### 🟠 4. [#4527](https://github.com/github/copilot-cli/issues/4527) `copilot -p` 在 GHEC 数据驻留租户上 401（1.0.81-1 起）
- **重要程度**：⭐⭐⭐⭐
- **评论数**：2 | 👍：3 | **标签**：`triage`
- 为何重要：非交互模式访问 `api.githubcopilot.com` 而非租户端点，触发企业级鉴权失败；交互模式不受影响，影响所有自动化/CI 场景。

### 🟠 5. [#4533](https://github.com/github/copilot-cli/issues/4533) 启动并行子代理时 TUI 停止消费事件，输入与滚动失效
- **重要程度**：⭐⭐⭐⭐
- **评论数**：4 | **标签**：`area:agents`、`area:terminal-rendering`
- 为何重要：Rust 运行时继续工作，但终端 UI 完全冻结数分钟，是并行 agent 工作流的可用性 blocker。

### 🟡 6. [#4647](https://github.com/github/copilot-cli/issues/4647) v1.0.81 破坏 `chroma-mcp` 兼容性
- **评论数**：1 | **标签**：`triage`
- 为何重要：1.0.80 → 1.0.81 升级直接导致主流 MCP 服务器失联，体现 MCP 协议升级带来的兼容风险。

### 🟡 7. [#4639](https://github.com/github/copilot-cli/issues/4639) 事件存储耗尽触发重试风暴，导致 Node OOM
- **评论数**：1 | **标签**：`triage`
- 为何重要：500 事件 flush 重试 + GC/compaction 循环 + 数千次桥接确认，是长会话的"内存炸弹"。

### 🟡 8. [#4602](https://github.com/github/copilot-cli/issues/4602) `managedSettings` 在 `serverFetchFailed` 时 fail-closed，引发 `store_memory` 与 MCP 剥离
- **评论数**：1 | **标签**：`area:enterprise`、`area:context-memory`、`area:mcp`
- 为何重要：揭示了多个 Issue 共享的根因——托管设置抖动会同时打挂 memory 与 MCP，是企业部署的关键风险点。

### 🟡 9. [#4649](https://github.com/github/copilot-cli/issues/4649) 工具搜索在 Grok/Gemini 模型上无效（#4588 的后续）
- **评论数**：0 | **标签**：`triage`
- 为何重要：#4588 已让 GPT-5.6-SOL 从 43.1k 降到 21.0k tokens，但 Grok（57.7k vs 21.0k）和 Gemini（未启用）家族仍存在 defer 失效，影响多模型成本控制。

### 🟡 10. [#4629](https://github.com/github/copilot-cli/issues/4629) `--resume` 恢复会话时不加载插件 hooks
- **评论数**：1 | **标签**：`area:sessions`、`area:plugins`
- 为何重要：`loadDeferredRepoHooks()` 路径与会话恢复流程未打通，使企业用户在恢复历史会话时丢失插件级安全/审计策略。

---

## 四、重要 PR 进展

> ⚠️ **过去 24 小时内无 PR 更新**，仓库处于 Issue 集中爆发但修复尚未提交的阶段。下一个 PR 流入预计来自 v1.0.82 修复轮次，重点关注 `store_memory`、FileWatch 事件循环、MCP 兼容性回归三条主线。

---

## 五、功能需求趋势

从今日 35 条 Issue 中提炼出六大社区诉求方向：

| 方向 | 代表 Issue | 趋势信号 |
|---|---|---|
| **MCP 生态稳定性** | [#4647](https://github.com/github/copilot-cli/issues/4647)、[#1385](https://github.com/github/copilot-cli/issues/1385)、[#4239](https://github.com/github/copilot-cli/issues/4239)（已关闭）、[#4006](https://github.com/github/copilot-cli/issues/4006)（已关闭） | MCP 2026-07-28 协议升级后兼容性回归集中爆发，第三方服务器（chroma-mcp、pipx 启动器）首当其冲 |
| **会话生命周期管理** | [#4642](https://github.com/github/copilot-cli/issues/4642)（`--name` 创建/恢复合一）、[#4645](https://github.com/github/copilot-cli/issues/4645)（`session.resume` 忽略 model 参数）、[#4643](https://github.com/github/copilot-cli/issues/4643)（compaction 误报 checkpoint） | 用户希望会话语义更直观、可预测，CLI 行为与文档/提示需要对齐 |
| **企业/合规能力** | [#4527](https://github.com/github/copilot-cli/issues/4527)、[#4650](https://github.com/github/copilot-cli/issues/4650)（`--agent` 触发第三方 MCP 策略拦截）、[#4602](https://github.com/github/copilot-cli/issues/4602) | GHEC 数据驻留、托管策略、组织级 MCP 管控成为企业落地硬指标 |
| **多模型支持深度** | [#4649](https://github.com/github/copilot-cli/issues/4649)（Grok/Gemini 工具搜索）、[#4646](https://github.com/github/copilot-cli/issues/4646)（自定义模型 compaction 失败） | 模型路由不止"接进来"，更要"跑得稳、跑得省" |
| **可观测性与调试** | [#4612](https://github.com/github/copilot-cli/issues/4612)、[#4639](https://github.com/github/copilot-cli/issues/4639)、[#4621](https://github.com/github/copilot-cli/issues/4621)（rubber duck 评审可审计化） | 长会话调试、事件溯源、审计可追溯性需求上升 |
| **开发者工具链完善** | [#4641](https://github.com/github/copilot-cli/issues/4641)（`settings.json` 官方 JSON Schema） | 编辑器无法提供可靠自动补全，是配置层最普遍的小痛点 |

---

## 六、开发者关注点

**1. 稳定性焦虑（高频痛点）**
多位用户反馈在 v1.0.81 系列预发布中遭遇 TUI 冻结、debug 日志失控（13 GB）、Node OOM、内存压力下强制 GC 循环等连锁反应。开发者普遍担忧"长会话 + 复杂 agent 编排"场景下的可靠性。

**2. MCP 升级阵痛**
v1.0.81 升级 MCP 2026-07-28 规范后，`chroma-mcp`、基于 `npx`/`pipx` 的 stdio 服务器成为首批"受害者"。开发者呼吁在协议升级时提供兼容矩阵或 LTS 通道，避免"一夜之间所有配置失效"。

**3. 文档与可发现性短板**
- 官方缺少 `~/.copilot/settings.json` 的 JSON Schema（[#4641](https://github.com/github/copilot-cli/issues/4641)）；
- 键位提示与实际行为不符（[#3760](https://github.com/github/copilot-cli/issues/3760)）；
- 会话参数语义不清（`--name` vs `--resume`、compaction checkpoint 提示错误，[#4642](https://github.com/github/copilot-cli/issues/4642) / [#4643](https://github.com/github/copilot-cli/issues/4643)）。

**4. 企业场景成为试金石**
GHEC 数据驻留、托管设置 fail-closed、`--agent` 与组织策略冲突等问题集中出现，说明 Copilot CLI 正在从"个人开发玩具"向"团队/企业基础设施"过渡，企业级需求（如审计、租户隔离、策略遵从）需要被纳入核心路线图。

**5. 多模型公平性**
#4588 修复仅覆盖 GPT 家族，Grok/Gemini 在工具搜索降本上仍处于劣势（[#4649](https://github.com/github/copilot-cli/issues/4649)）；自定义 OpenRouter 模型的 compaction 路径还存在 tool_choice 校验问题（[#4646](https://github.com/github/copilot-cli/issues/4646)）。开发者期望"模型无关"的体验一致性。

---

*报告生成时间：2026-08-28 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data provided for Kimi Code CLI (repository: MoonshotAI/kimi-cli) for the daily report dated 2026-08-28.

Let me organize the data:

**Releases (past 24h):** None

**Issues updated in past 24h (6 total):**
1. #1211 [CLOSED] - Notion Remote MCP creds not stored beyond active session - bug, by @ghost, created 2026-02-23, updated 2026-08-28, 3 comments
2. #2623 [OPEN] - Plan mode: agent loops indefinitely on Bash echo/ReadFile instead of writing plan - bug, by @zheng001001001, created 2026-08-28, updated 2026-08-28, 1 comment
3. #1272 [CLOSED] - JetBrains AI Assistant ACP file recognition - enhancement, by @yuweni99, created 2026-02-27, updated 2026-08-28, 1 comment
4. #2624 [OPEN] - docs: openai_legacy hosted /v1 example - docs, by @cursor[bot], created 2026-08-28
5. #1279 [CLOSED] - Feature Request: Native git-ai integration - enhancement, by @deshes, created 2026-02-27, updated 2026-08-28
6. #2621 [OPEN] - Kimi API issues with tool content - by @Valen-akm, created 2026-08-27, updated 2026-08-27 (technically yesterday but recent)

Wait, #2621 was created/updated 2026-08-27, not in the past 24 hours. But it's listed as part of the data. Let me re-read - the task says "过去24小时内更新". So #2621 was updated 2026-08-27, which is technically the previous day. But the data says it's included... I'll mention it but note it's actually from yesterday.

**PRs updated in past 24h (3 total):**
1. #2622 [OPEN] - deps: bump asyncssh to 2.23.1 in pykaos - by @katsugtgz, created 2026-08-28
2. #2176 [OPEN] - fix(hooks): extract text from ContentPart for UserPromptSubmit hook - by @tears-mysthrala, created 2026-05-07, updated 2026-08-27
3. #2595 [OPEN] - fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 - by @shoemoney, created 2026-08-06, updated 2026-08-27

Now let me think about the structure:

The user asked for:
1. 今日速览 (Today's Highlights) - 2-3 sentences
2. 版本发布 (Version Releases) - skip if none
3. 社区热点 Issues (Hot Community Issues) - top 10 worth noting
4. 重要 PR 进展 (Important PR Progress) - top 10 important PRs
5. 功能需求趋势 (Feature Request Trends) - extract from all issues
6. 开发者关注点 (Developer Concerns) - pain points/high-frequency needs

Note: We only have 6 issues and 3 PRs, so I should work with what's available rather than try to fabricate 10 of each.

Let me draft the report:

**Today's Highlights:**
- Today there was no new release, but community activity focused on two new bugs and one documentation issue
- Main concerns include: Plan mode agent looping indefinitely (#2623), Notion MCP session credential issue closed (#1211)
- Open bot-generated documentation improvement for openai_legacy configuration (#2624)

**Version Releases:** None (will skip)

**Hot Community Issues (we have 6, so I'll cover all):**
1. #2623 - Plan mode agent looping - HIGH PRIORITY, this is a critical workflow blocker
2. #2621 - Kimi API tool content bug - HIGH FRUSTRATION from developer, language is colorful
3. #1211 - Notion MCP credential persistence - CLOSED, important for MCP users
4. #2624 - openai_legacy docs - bot-created doc improvement
5. #1272 - JetBrains AI Assistant ACP file recognition - CLOSED
6. #1279 - git-ai integration feature request - CLOSED

Wait, since the request is to pick "10 most worth noting", but we only have 6 issues total. I'll cover all 6 in the issues section since that's the full available data.

Same for PRs - we only have 3, so cover all 3.

**Feature Trends from issues:**
- IDE integration (JetBrains #1272)
- MCP protocol support (#1211 - Notion)
- AI code attribution (#1279 - git-ai)
- Provider configuration documentation (#2624)
- Better tool/function calling (#2621)

**Developer Concerns:**
- API consistency issues (#2621)
- Plan mode workflow bugs (#2623)
- MCP credential management (#1211)
- IDE integration friction (#1272)

Let me write this up properly in Chinese, professional and concise.

Actually let me re-check the dates. The date is "2026-08-28". So:
- Past 24 hours = 2026-08-27 ~ 2026-08-28

Issues updated in past 24 hours:
- #1211 updated 2026-08-28 ✓ (created 2026-02-23, old issue recently updated)
- #2623 created/updated 2026-08-28 ✓ (new)
- #1272 updated 2026-08-28 ✓ (created 2026-02-27, old issue recently updated)
- #2624 created/updated 2026-08-28 ✓ (new)
- #1279 updated 2026-08-28 ✓ (created 2026-02-27, old issue recently updated)
- #2621 created/updated 2026-08-27 ✓ (new, yesterday in past 24h window)

PRs updated in past 24 hours:
- #2622 created/updated 2026-08-28 ✓ (new)
- #2176 updated 2026-08-27 ✓ (old PR from May, recently updated)
- #2595 updated 2026-08-27 ✓ (old PR from August, recently updated)

OK so all 6 issues and 3 PRs qualify. Good.

Let me now write the report. I'll keep it concise but informative.

Format considerations:
- Use Chinese throughout
- Professional tone suitable for technical developers
- Include GitHub links for each item
- Skip the 版本发布 section since no releases
- The user asked for top 10 issues and top 10 PRs but we have fewer than 10 in each - I'll present what's available and note the count if needed

Let me write the report now.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-08-28** | 数据源：github.com/MoonshotAI/kimi-cli

---

## 📌 今日速览

今日无新版本发布，社区活跃度集中在 **Bug 报告与文档完善**。最值得关注的动向有两个：一是 v0.38.0 出现的 **Plan Mode 死循环** 新 Bug（#2623），严重影响核心工作流；二是 Bot 自动提出的 `openai_legacy` 文档补全提案（#2624），标志着仓库已引入自动化 Issue 流程。同时多条历史 Issue（含 Notion MCP 凭据持久化 #1211、JetBrains 集成 #1272、git-ai 归属 #1279）得到关闭。

---

## 🚀 版本发布

*今日过去 24 小时无新 Release，跳过本节。*

---

## 🔥 社区热点 Issues（共 6 条，按重要性排序）

### 1. [#2623【OPEN】Plan 模式在 K3 模型下进入死循环](https://github.com/MoonshotAI/kimi-cli/issues/2623)
- **类型**：Bug（新发布 v0.38.0 即触发）｜**作者**：@zheng001001001
- **重要性**：⭐⭐⭐⭐⭐ **核心工作流阻塞**。在 Plan 模式下，Agent 完成探索后不调用 ExitPlanMode，而是反复执行 `Bash echo`/`ReadFile`，造成 token 与时间浪费。这是规划模式的核心能力缺陷，影响所有使用 0.38.0 + K3 模型的开发者。新建仅 1 天，已需尽快响应。
- **社区反应**：1 条评论，0 赞（仍处于早期发现阶段）。

### 2. [#2621【OPEN】Kimi API 工具调用返回空 content 时抛出 400](https://github.com/MoonshotAI/kimi-cli/issues/2621)
- **类型**：Bug（API 兼容性）｜**作者**：@Valen-akm
- **重要性**：⭐⭐⭐⭐⭐ **API 行为严重不一致**。开发者反馈：当模型 tool_call 的 `content` 为空字符串时，平台先正常返回，又在下一轮请求中以 "text content is empty" 拒绝，迫使客户端必须自行裁剪字段。作者用较为激烈的措辞描述了"Kimi-cli 内部也是这样 hack 的"。
- **社区反应**：1 赞，0 评论。情绪偏负面，平台 API 契约问题可能影响所有基于 Kimi Function Calling 的下游接入方。

### 3. [#1211【CLOSED】Notion Remote MCP 凭据不跨会话保留](https://github.com/MoonshotAI/kimi-cli/issues/1211)
- **类型**：Bug（MCP 凭据生命周期）｜**作者**：@ghost
- **重要性**：⭐⭐⭐⭐ MCP 是 Kimi CLI 的重要集成点，凭据丢失会要求用户每次手动重新认证。已于今日关闭，3 条评论。
- **社区反应**：3 条评论，0 赞。属于长期遗留问题被标记解决。

### 4. [#2624【OPEN】文档：补充 `openai_legacy` 兼容 Chat Completions 的 `/v1` 示例](https://github.com/MoonshotAI/kimi-cli/issues/2624)
- **类型**：文档改进｜**作者**：@cursor[bot]
- **重要性**：⭐⭐⭐ 首次出现由 Bot（@cursor[bot]）提交的 Issue，针对 providers.md 中三处易错点（`type` 必填、URL 区别、跳过 `/login`）。这反映仓库开始引入 **自动化文档审计** 流程，DX 持续改善。
- **社区反应**：0 评论，新提交。

### 5. [#1272【CLOSED】JetBrains AI Assistant 经 ACP 调用 kimi 无法识别文件](https://github.com/MoonshotAI/kimi-cli/issues/1272)
- **类型**：Enhancement（IDE 集成）｜**作者**：@yuweni99
- **重要性**：⭐⭐⭐ JetBrains 是主流 JetBrains IDE 接入场景，ACP 协议下文件路径处理问题现已关闭，属于**渐进式 IDE 覆盖**的一部分。
- **社区反应**：1 条评论，0 赞。

### 6. [#1279【CLOSED】Feature Request: 原生集成 git-ai 做 AI 代码归属](https://github.com/MoonshotAI/kimi-cli/issues/1279)
- **类型**：Enhancement（AI 代码溯源）｜**作者**：@deshes
- **重要性**：⭐⭐⭐ 引入 vendor-neutral 的 `git-ai`，让 `git blame` 中可直接区分 Kimi 生成与人类编辑。属于**企业级合规与可观测性**方向。
- **社区反应**：0 评论，已关闭（可能被合并 / 暂缓，留待后续追踪）。

---

## 🛠️ 重要 PR 进展（共 3 条）

### 1. [#2622【OPEN】deps: bump asyncssh to 2.23.1（pykaos 安全升级）](https://github.com/MoonshotAI/kimi-cli/pull/2622)
- **类型**：依赖安全｜**作者**：@katsugtgz
- **内容**：将 `pykaos` 中 `asyncssh` 从 2.21.1 升级至 2.23.1，修复 `GHSA-2wxc-x7rj-hg8f` 与 `GHSA-qr67-gv47-xwwh` 两个已知漏洞。
- **意义**：仓库对 **供应链安全** 响应迅速，依赖审计常态化。

### 2. [#2176【OPEN】fix(hooks): 修复 UserPromptSubmit hook 对 ContentPart 列表的处理](https://github.com/MoonshotAI/kimi-cli/pull/2176)
- **类型**：Bug Fix（Hooks 系统）｜**作者**：@tears-mysthrala
- **内容**：原逻辑仅处理 `str` 类型 `user_input`，遇到默认的 `list[ContentPart]` 时 `prompt` 退化为空字符串，导致正则匹配失败。修复 #2148。
- **意义**：Hooks 是扩展点，此 Bug 长期未被发现，修复后可显著提升 **第三方扩展可靠性**。

### 3. [#2595【OPEN】fix(StrReplaceFile): 拒绝编辑非合法 UTF-8 文件](https://github.com/MoonshotAI/kimi-cli/pull/2595)
- **类型**：Bug Fix（文件操作）｜**作者**：@shoemoney
- **内容**：原 `StrReplaceFile` 使用 `errors="replace"` 解码，非 UTF-8 字节会被替换为 `U+FFFD` 并写回，造成**数据损坏**。修复 #2591，直接拒绝非 UTF-8 文件以避免破坏用户内容。
- **意义**：典型的"静默数据丢失"问题，修复后提升 **关键路径** 的数据安全性。

---

## 📈 功能需求趋势

从今日活跃的 6 条 Issue（含历史今日更新）可提炼出 5 个核心方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|------------|----------|
| **🔌 IDE / Editor 深度集成** | #1272（JetBrains + ACP） | 从单 IDE 支持扩展到协议级（ACP）兼容，覆盖范围持续扩大 |
| **🔐 MCP 凭据与扩展生态** | #1211（Notion MCP）、#2176（Hooks） | MCP 与 Hooks 正成为 Kimi CLI 的能力外延，但稳定性需要持续投入 |
| **🤖 多模型与供应商兼容** | #2624（openai_legacy 文档）、#2623（K3 Plan 模式） | 兼容 OpenAI 协议的同时内置多个自有模型，文档与一致性都需要打磨 |
| **📜 AI 代码溯源（合规）** | #1279（git-ai） | 企业用户关注 AI 生成代码归属，向 `git blame` 这一基础设施延伸 |
| **⚙️ 自动化 DX 改进** | #2624（@cursor[bot] 提单） | 首次出现 Bot 自动化提单，预示仓库将引入 **LLM 辅助的文档/Issue 审计** |

---

## 💡 开发者关注点（高频痛点）

1. **核心工作流回归**：v0.38.0 Plan 模式引入死循环（#2623），表明新版本在多模型路径上的回归测试覆盖不足。
2. **平台 API 一致性**：#2621 揭示工具调用 `content` 处理存在"产出合法、回传非法"的契约裂缝，迫使客户端做兼容补丁。
3. **数据安全意识觉醒**：#2595（StrReplaceFile 非 UTF-8 损坏）、#2622（asyncssh 漏洞）显示社区与维护者都开始关注 **静默性数据损坏与供应链依赖**。
4. **MCP / Hooks 扩展盲区**：#1211、#2176 都属于扩展点可靠性的长尾问题，需要建立更系统的集成测试。
5. **文档即产品**：#2624 由 Bot 自动生成，反映开发者期望"配置错一处不要 400，而是给一份可读示例"。

---

*报告生成时间：2026-08-28｜数据窗口：过去 24 小时活跃 Issue/PR。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily community report for OpenCode based on GitHub data. Let me analyze the data carefully and create a structured Chinese report.

Let me analyze the key information:

1. **Releases**: 
   - v1.18.25: Fixed Azure authentication so Azure CLI sign-in works without requiring Bun
   - v1.18.24: Bedrock reasoning responses no longer cached to empty messages; Azure providers can sign in with Microsoft Entra ID via Azure CLI; V1 reads V2 config fields

2. **Issues** - 50 total, showing top 30 by comments:
   - #785: Disable streaming mode (33 comments, 38 likes) - oldest, most popular
   - #6536: Mobile App feature (closed, 16 comments, 49 likes)
   - #38255: Discrepancy between opencode go usage dashboard (10 comments)
   - #45278: Payment Declined (7 comments)
   - #45867: Muse Spark 1.2 intermittent prompt cache miss
   - #32985: opencode inside GNU Screen
   - #33940: Undo in one session reverts all sessions
   - #41206: OpenCode Go quota doesn't match usage history
   - #38550: Manual todo management
   - #21658: Azure AI Foundry Microsoft Entra OAuth
   - And many more recent ones

3. **PRs** - 50 total, showing top 20:
   - #45916: bump solid-js to 1.9.15
   - #45915: bound formatter subprocesses with timeout
   - #45609: skip file watcher on filesystem roots (closed)
   - #45607: reset session status to idle when async prompt fails (closed)
   - #45557: serialize and atomically write auth.json (closed)
   - #28326: runtime base path support for reverse proxy
   - And many more

Let me select the most important issues and PRs based on:
- Comment count
- Likes/reactions
- Recency
- Impact on user experience

Let me structure the report properly. I should make it concise and professional, in Chinese, suitable for technical developers.

Let me draft this report now.</think>

# OpenCode 社区动态日报
**日期：2026-08-28**

---

## 📌 今日速览

今日 OpenCode 连续发布了 **v1.18.24 与 v1.18.25** 两个版本，重点围绕 Azure 认证流程优化（无需 Bun、可通过 Azure CLI 登录 Microsoft Entra ID）以及 Bedrock 响应缓存的 Bug 修复。社区侧，**OpenCode Go 订阅相关争议**持续发酵，多个用户反馈配额计算异常、宣传额度与实际不符；与此同时，开发者 **@skyzhao1223** 在过去 24 小时内提交了大量针对 core 工具链（edit、webfetch、glob、apply_patch 等）的高质量修复 PR，成为今日社区贡献焦点。

---

## 🚀 版本发布

### v1.18.25 — Azure 认证解耦 Bun
- **Bugfix**：修复 Azure 认证流程，使 Azure CLI 登录不再强制依赖 Bun。

### v1.18.24 — Bedrock 缓存修复 & V2 配置兼容
- **Bugfix**：Bedrock reasoning 响应不再被缓存为不可重放的空消息。
- **Improvements**：
  - Azure provider 现在支持通过 Azure CLI 使用 Microsoft Entra ID 登录，替代 API Key。
  - V1 版本开始读取 V2 配置字段，向后兼容新版配置文件。

📦 完整内容请参考 [GitHub Releases](https://github.com/anomalyco/opencode/releases)

---

## 🔥 社区热点 Issues

| # | Issue | 关键点 | 链接 |
|---|---|---|---|
| 1 | **#785** 能否禁用流式输出？ | 历史最久高赞 Issue（👍38，💬33），用户代理不支持 streaming，长期未解决 | [查看](https://github.com/anomalyco/opencode/issues/785) |
| 2 | **#6536** Mobile App 功能请求 | 已关闭（👍49），社区对原生移动端呼声极高 | [查看](https://github.com/anomalyco/opencode/issues/6536) |
| 3 | **#38255** OpenCode Go 用量面板数据不一致 | 周用量与月度面板差额巨大，影响计费透明度（💬10） | [查看](https://github.com/anomalyco/opencode/issues/38255) |
| 4 | **#45278** 订阅支付连续 3 个月被拒 | 涉及支付链路稳定性，疑似风控问题（💬7） | [查看](https://github.com/anomalyco/opencode/issues/45278) |
| 5 | **#45867** Muse Spark 1.2 提示缓存偶发 miss | Zen Go Responses API 缓存 key 不一致，影响性能（💬5） | [查看](https://github.com/anomalyco/opencode/issues/45867) |
| 6 | **#32985** GNU Screen 下终端兼容性差 | truecolor、复制粘贴、鼠标均不可用（💬4） | [查看](https://github.com/anomalyco/opencode/issues/32985) |
| 7 | **#33940** Undo 操作跨会话生效 | 缺乏 session 隔离，存在数据风险（💬4） | [查看](https://github.com/anomalyco/opencode/issues/33940) |
| 8 | **#38550** 手动 Todo 管理 | 用户希望直接编辑待办列表而非仅由 agent 管理（💬4） | [查看](https://github.com/anomalyco/opencode/issues/38550) |
| 9 | **#21658** Azure AI Foundry Entra OAuth | 已被 v1.18.24 部分实现（💬4，👍10） | [查看](https://github.com/anomalyco/opencode/issues/21658) |
| 10 | **#45874** 多会话文件变更 Diff 卡片串流 | 缺乏 session 隔离导致跨会话 UI 污染（💬1，今日新增） | [查看](https://github.com/anomalyco/opencode/issues/45874) |

---

## 🛠 重要 PR 进展

| # | PR | 内容 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | **#45915** formatter 子进程超时控制 | 修复 `mix format`/`ktlint` 等冷启动卡死问题 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45915) |
| 2 | **#45916** 升级 solid-js 到 1.9.15 | 移除部分补丁，拥抱上游修复 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45916) |
| 3 | **#45609** 文件监听跳过根目录 | 修复 Windows/Linux 监听 C:/ 或 / 的资源浪费 | ✅ 已合并 | [查看](https://github.com/anomalyco/opencode/pull/45609) |
| 4 | **#45607** 异步 prompt 失败时重置 session 状态 | 解决流关闭后状态卡 "busy" | ✅ 已合并 | [查看](https://github.com/anomalyco/opencode/pull/45607) |
| 5 | **#45557** auth.json 序列化原子写 | 修复并发场景下认证文件损坏 | ✅ 已合并 | [查看](https://github.com/anomalyco/opencode/pull/45557) |
| 6 | **#45898** glob 越权访问需审批 | 安全加固：限制跨目录 glob 行为 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45898) |
| 7 | **#45894** edit 不展开 `$` 替换模式 | 修复用户内容含 `$&` 等特殊字符被误替换 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45894) |
| 8 | **#45888** edit 工具支持混合行尾文件 | 兼容 Windows CRLF/LF 混合内容 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45888) |
| 9 | **#45903** webfetch 按 charset 解码 | 解决 GBK/Shift_JIS 等非 UTF-8 页面乱码 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45903) |
| 10 | **#45901** CLI 支持多 server URL | `serve --url` 可重复参数，适配多服务场景 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/45901) |

> 今日贡献者 **@skyzhao1223** 一人提交了 5 个核心工具链修复 PR（#45915、#45906、#45903、#45898、#45894、#45888、#45886），覆盖文本处理、安全、I/O 三大领域，质量与产出均突出。

---

## 📈 功能需求趋势

从今日 Issues 数据提炼：

1. **订阅与计费透明化** ⭐⭐⭐⭐⭐
   - OpenCode Go 周/月额度计算与展示不符（#38255、#41206、#45897、#45899）
   - 支付链路异常（#45278、#45907、#45893）
   - **趋势**：Go 套餐进入灰度后，计费逻辑成为最高频投诉来源。

2. **企业级认证（OAuth/Entra）** ⭐⭐⭐⭐
   - #21658（Azure AI Foundry Entra）已被 v1.18.24 落地
   - 表明 Azure 生态集成正稳步推进。

3. **Agent 体验增强** ⭐⭐⭐
   - 手动 Todo 管理（#38550）、subagent resume/steering（#36423）、会话分支（#45815）、Desktop 配置热重载（#45889）
   - **趋势**：从"自动执行"向"可干预、可恢复"演进。

4. **V2 核心工具健壮性** ⭐⭐⭐
   - glob/edit/webfetch/apply_patch 一系列边界场景被密集修复
   - **趋势**：V2 进入打磨期，工具链鲁棒性是当前主线。

5. **移动端 / 跨平台** ⭐⭐⭐
   - Mobile App（#6536）、Windows ARM64 原生构建（#45875）、Android SSH + tmux 兼容（#45871）

6. **Terminal 兼容性** ⭐⭐
   - GNU Screen（#32985）、tmux 滚动（#45871）持续有反馈，终端适配仍有死角。

---

## 💡 开发者关注点

从今日 Issue/PR 综合来看，社区痛点集中在以下四类：

1. **🧮 计费与配额可信度**
   多个用户反映"宣传与实际不符"（如 #45897："写一周 30 刀实际只有 7.5 刀"），建议官方在订阅页明确限额说明并提供导出明细功能。

2. **🔧 V2 工具链的细节鲁棒性**
   edit 工具对 `$` 替换语义、混合行尾文件、glob 越权访问、webfetch 字符集解码等问题集中暴露——开发者更关注"边界条件下能不能用"，而非功能缺失。

3. **🔐 并发与状态一致性**
   auth.json 并发写、session busy 状态未复位、跨会话 UI 串流等问题，反映出 V2 在状态机和文件 I/O 层仍有改进空间。

4. **⚙️ 终端与跨平台适配**
   GNU Screen 256 色、Android tmux、Windows ARM64 等场景兼容性仍是高频反馈点，建议在 CI 中纳入更全面的矩阵测试。

---

*报告基于 GitHub 公开数据生成，数据时间窗口：2026-08-27 ~ 2026-08-28。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a daily report for the jcode community based on GitHub data from 2026-08-28. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 8 issues updated in the past 24 hours
3. 1 PR updated in the past 24 hours

Let me categorize the issues:

**Bugs/High Priority:**
- #755 - Images in chat history break text-only model sessions (vision providers issue) - HIGH PRIORITY, 5 comments
- #1087 - Built-in zai profile compaction budget bug (160k vs 1M)
- #1074 - Strange characters on screen (UI rendering bug)

**Feature Requests:**
- #1089 - Add Conifer as OpenAI-compatible provider
- #1061 - Rules support (like .clinerules, .cursor/rules, .claude/rules)
- #1086 - Keep compaction budget in sync with model switches

**Security:**
- #1085 - Third-party security audit remediation branch ready

**Vague/Low Info:**
- #1088 - "j ai" (no content)

**PR:**
- #1082 - fix: resolve safe issues from open-issue triage (fixes 9 issues)

Wait, the user asked for 10 most important issues but there are only 8 in the data. I should note this and work with what's available.

For PRs, there's only 1 PR, so I'll work with that.

Let me write a comprehensive Chinese daily report.

I need to format it well, make it professional and concise for technical developers.</think>

# jcode 社区动态日报 · 2026-08-28

---

## 📌 今日速览

过去 24 小时内 jcode 仓库无新版本发布，但社区活动依然活跃：维护者 @1jehuang 提交了一个合并了 9 个问题修复的批量 PR（#1082），同时有用户提交了一份**第三方安全审计**的完整修复分支（#1085），等待上游合入。在问题层面，**纯文本模型下的图像历史兼容性问题**（#755）持续发酵，而 **zai 配置下上下文窗口被压缩至 200k** 的 bug（#1087）也引发了新的讨论。

---

## 🚀 版本发布

**无新版本发布。** 当前最新版本仍为 v0.81.1（cae6d2a57），多数新 bug 报告均基于该版本。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时仅更新 8 条 Issue，以下按关注度排序完整呈现。

### 1. [#755] 图片历史破坏纯文本模型会话 ⭐高优先级
- **作者**：@Alexander-J-Quant
- **状态**：OPEN · bug · priority: high · 5 条评论
- **重要性**：这是当前社区反馈最强烈的问题之一。当 jcode 会话中产生截图等图像内容后，`ContentBlock::Image` 会存入消息历史并在后续每一轮被完整回放给 provider。对 GLM-5.2 等不支持视觉的模型而言，这种"无差别回放"会导致请求直接失败。该 bug 影响所有在多模态/纯文本模型间切换的用户，属于**架构层面的一致性缺陷**。
- 🔗 https://github.com/1jehuang/jcode/issues/755

### 2. [#1087] zai profile 上下文压缩预算错误（200k vs 1000000）
- **作者**：@yumhum
- **状态**：OPEN · bug · 2 条评论
- **重要性**：用户配置中明确声明 `context_window = 1000000`，但内置 `zai` profile 仍采用 200k 压缩预算（family-table fallback 覆盖了 config 种子值），导致 GLM-5.3/5.3-flash 在 160k 处就被不合理地压缩。这暴露了**配置优先级与默认值回退逻辑**的潜在冲突，需要维护者厘清是改 family-table 还是改 seed 流程。
- 🔗 https://github.com/1jehuang/jcode/issues/1087

### 3. [#1085] 第三方安全审计：完整修复分支就绪
- **作者**：@ra-co88
- **状态**：OPEN · 0 评论
- **重要性**：外部审计师针对 `master` 分支的 config / webfetch / computer 三大攻击面完成安全审查，已为 SEC-01…07、RC-01、REL-01/02、A11Y-01、VC-01 等所有已确认发现准备了完整修复分支，但因仓库 PR 权限受限无法直接提交。这是**一个对项目安全态势有实质提升的外部贡献**，建议维护者优先评估准入通道。
- 🔗 https://github.com/1jehuang/jcode/issues/1085

### 4. [#1086] 压缩预算与模型切换同步 + 初始 provider key 保留
- **作者**：@pronvis
- **状态**：OPEN · 0 评论
- **重要性**：与 #1087 主题相关——修复服务端 `CompactionManager` 在 model/route 切换时未刷新 token budget 的问题，同时修正初始 runtime provider 选择时丢失原始 provider key 的 bug。这两个问题均属**会话状态一致性**范畴，对长会话稳定性影响显著。
- 🔗 https://github.com/1jehuang/jcode/issues/1086

### 5. [#1089] 新增 Conifer 作为 OpenAI-compatible provider
- **作者**：@charlespers
- **状态**：OPEN · 0 评论
- **重要性**：提议将 Conifer（api.conifer.build）作为标准 OpenAI 兼容 provider 加入内置 profile。Conifer 是一款成本路由网关（云端 + 本地模型、统一 API key、按请求计费回执），契合 jcode 当前的 provider 抽象。若合入，可为用户增加一个**性价比导向的 provider 选项**，降低多模型试用成本。
- 🔗 https://github.com/1jehuang/jcode/issues/1089

### 6. [#1074] 屏幕出现异常字符且输入被锁死
- **作者**：@fmancardi
- **状态**：OPEN · bug · triage: unclear · 2 条评论
- **重要性**：复现于 v0.81.1，截图显示终端渲染区域出现非 ASCII 字符且键盘输入被冻结——属于**交互可用性回归**，需更多信息定位（终端类型、是否含特定输出等）。虽未被标记为 high priority，但若广泛触发将直接阻断用户工作。
- 🔗 https://github.com/1jehuang/jcode/issues/1074

### 7. [#1061] 关于 Rules 机制的支持咨询
- **作者**：@fmancardi
- **状态**：OPEN · question · 2 条评论
- **重要性**：用户询问 jcode 是否支持 Cline（`.clinerules/*.md`）、Cursor（`.cursor/rules/*.mdc`）、Claude Code（`.claude/rules/*.md`）这类**项目级 rules 机制**。随着 AI 编程工具生态趋同，rules 已成为事实标准，jcode 若缺位会显著降低从其他 harness 迁入的体验。这是一个**生态对标性需求**，值得维护者明确路线图。
- 🔗 https://github.com/1jehuang/jcode/issues/1061

### 8. [#1088] "j ai"
- **作者**：@Hamsy52
- **状态**：OPEN · 0 评论
- **重要性**：Issue 描述为空，标题仅为 "j ai"，**信息量不足**，可能需要 triage 时向用户追问。暂列入观察。
- 🔗 https://github.com/1jehuang/jcode/issues/1088

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅更新 1 条 PR。

### [#1082] fix: 批量解决 triage 中可安全修复的 9 个 issue
- **作者**：@1jehuang（维护者本人）
- **状态**：OPEN
- **范围**：合并修复 #1073、#1072、#1071、#1068、#1060、#1053、#1052、#1051、#1050 共 9 个 issue，并为每个改动添加了针对性的回归测试。维护者刻意将**平台敏感性和涉及设计权衡**的报告排除在本 PR 之外，留待后续单独处理。
- **重要性**：这是典型的"清理周"型 PR——通过严格的回归测试覆盖，将分散的小问题集中闭环，降低 triage 积压。从 PR 摘要推测此次应已包含 CI 全绿，合并后可显著降低噪音 issue 数量。
- 🔗 https://github.com/1jehuang/jcode/pull/1082

---

## 📈 功能需求趋势

从过去 24 小时的 8 条 Issue（叠加近 1 周活跃 Issue）提炼出以下主流方向：

| 方向 | 代表 Issue | 社区关注度 |
|---|---|---|
| **多 Provider 生态扩展** | #1089（Conifer）、#1087（zai 兼容） | ⬆️ 持续走高 |
| **Provider 路由 & 上下文管理一致性** | #1087、#1086 | ⬆️ 多个 issue 形成集群 |
| **与主流 harness 特性对标（rules、hooks 等）** | #1061（rules） | ⬆️ 用户迁移诉求强烈 |
| **多模态/纯文本模型混合会话的鲁棒性** | #755 | 🔥 已成为高优 bug |
| **第三方安全审计响应** | #1085 | 🆕 首次出现外部完整修复 |
| **会话可用性 / 终端渲染稳定性** | #1074 | ➡️ 偶发但影响恶劣 |

---

## 💬 开发者关注点

综合社区反馈，开发者当前最关心的痛点可归纳为三点：

1. **会话状态/压缩预算的一致性缺陷**——`CompactionManager` 在 provider 切换、profile 差异、配置覆盖路径上的不一致（#1086、#1087）已经形成 issue 集群，意味着这并非单点 bug 而是设计层面需要统一的状态同步机制。

2. **多模态会话与纯文本模型的兼容**——#755 反映出 jcode 的消息历史抽象（`ContentBlock::Image`）在跨模型复用时缺乏"按 provider 能力过滤"的能力，是多模型时代必须解决的基础设施问题。

3. **与同类 AI 编程工具的生态对标**——#1061 表明用户已习惯 Cline/Cursor/Claude Code 的 rules 机制，期待 jcode 在项目级配置、规则注入上有同等体验，否则会在工具迁移时形成摩擦。

另外，#1085 显示**外部安全审计与上游权限机制之间的张力**（PR 权限受限）也值得社区关注——是否建立更开放的安全贡献准入流程，可能影响未来类似贡献的转化效率。

---

*报告生成时间：2026-08-28 · 数据来源：GitHub API · 仓库：1jehuang/jcode*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese daily report for the pi community based on GitHub data. Let me analyze the data carefully and structure the report according to the requirements.

Let me identify the key items:

**Important Issues (top 10 by comments + relevance):**
1. #2870 - XDG Base Directory (20 comments, 52 thumbs up) - Important for Linux users
2. #8584 - TUI row corruption during streaming (14 comments)
3. #6922 - Default model cannot be llama.cpp (12 comments)
4. #5002 - Global ~/.agents/AGENTS.md (5 comments)
5. #8673 - TUI soft line breaks (4 comments)
6. #7720 - Disable select to copy (4 comments)
7. #8610 - HttpsProxyAgent regression (4 comments)
8. #8675 - TUI renders text one word per line (3 comments)
9. #6907 - Installation section README (3 comments)
10. #8774 - Compaction fails on OpenAI Responses (2 comments)

**Important PRs:**
1. #6848 - retry logic for compaction
2. #8766 - Make write/edit output easier to scan
3. #8674 - Fix markdown soft line breaks
4. #8764 - Honor settings.shellPath
5. #8262 - Dispatch hooks on turn-start
6. #3106 - No trailing spaces
7. #6248 - Stop padding TUI lines with spaces
8. #8731 - Allow disable copy on fullscreen
9. #8744 - Overlay selection exclusion
10. #8723 - Expose https-proxy-agent
11. #8743 - Ignore stale tool image conversions
12. #7602 - Configurable summarization models
13. #8737 - Match subdomains in NO_PROXY

**Trends:**
- TUI rendering issues (many related to streaming/wrapping/line breaks)
- Configuration/standards compliance (XDG, AGENTS.md)
- Provider compatibility (OpenAI, Bedrock, DeepSeek, llama.cpp)
- Extension API improvements
- Proxy/network issues
- New model support (Qwen3.8-flash, Cortecs, etc.)

Let me write this in a professional Chinese style suitable for technical developers.</think>

# pi 社区动态日报 · 2026-08-28

## 今日速览

过去 24 小时 pi 仓库异常活跃，单日新增/更新 Issue 与 PR 超过 65 条。社区焦点集中在 **TUI 渲染相关 bug 集群**（流式输出断行、Markdown 软换行、表格列选择）与 **v0.84.3 引入的多处回归**（`HttpsProxyAgent` 构造错误、OpenAI Responses 压缩失败、Kitty 协议输入冲突）。同时，多个长期悬而未决的高优 Issue（如 XDG Base Directory、global `AGENTS.md`、llama.cpp 默认模型）迎来关闭或进展。

---

## 版本发布

无新版本发布（过去 24 小时内）。

---

## 社区热点 Issues

| # | 标题 | 状态 | 关注度 | 为什么重要 |
|---|------|------|--------|------------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | Follow XDG Base Directory | CLOSED | 👍 52 / 💬 20 | Linux 用户长期痛点：pi 配置文件污染 `$HOME`。遵循 `$XDG_CONFIG_HOME` 是开箱即用的标准做法，获社区最高点赞。 |
| [#8584](https://github.com/earendil-works/pi/issues/8584) | TUI 行损坏：长工具输出后每词一行 | OPEN | 👍 6 / 💬 14 | 流式渲染核心缺陷，频繁复现，影响所有需要阅读长输出的工作流。 |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | llama.cpp 模型无法设为默认 | CLOSED | 👍 14 / 💬 12 | 本地模型用户的入门阻塞问题，已关闭意味着已有修复方案。 |
| [#5002](https://github.com/earendil-works/pi/issues/5002) | 支持全局 `~/.agents/AGENTS.md` | CLOSED | 💬 5 | 与工作区级 AGENTS.md 形成互补，扩展个人规则系统的层级。 |
| [#8673](https://github.com/earendil-works/pi/issues/8673) | TUI 软换行渲染为硬换行 | CLOSED | 👍 2 / 💬 4 | 思考块阅读体验的关键缺陷，已配套 PR [#8674](https://github.com/earendil-works/pi/pull/8674) 修复。 |
| [#7720](https://github.com/earendil-works/pi/issues/7720) | 全屏 TUI 允许关闭"选中即复制" | CLOSED | 💬 4 | 高频需求，避免误清空剪贴板。已由 PR [#8731](https://github.com/earendil-works/pi/pull/8731) 落地。 |
| [#8610](https://github.com/earendil-works/pi/issues/8610) | v0.84.3 google-vertex 代理回归 | CLOSED | 💬 4 | 影响企业代理环境下的 Vertex 用户，由 [#8723](https://github.com/earendil-works/pi/pull/8723) 修复。 |
| [#8675](https://github.com/earendil-works/pi/issues/8675) | TUI 每词一行（WSL2/0.84.3） | CLOSED | 👍 4 / 💬 3 | 与 #8584 同根的渲染问题，WSL2 用户的高频场景。 |
| [#6907](https://github.com/earendil-works/pi/issues/6907) | README 缺少安装说明 | OPEN | 💬 3 | 新用户引导瓶颈，门槛降低可显著扩大采用率。 |
| [#8774](https://github.com/earendil-works/pi/issues/8774) | OpenAI Responses 模型压缩失败 | CLOSED | 💬 2 | 当日新增，影响所有使用 OpenAI Responses 通道的 compaction 路径（手动/阈值/溢出）。 |

---

## 重要 PR 进展

| # | 标题 | 状态 | 关键内容 |
|---|------|------|----------|
| [#6848](https://github.com/earendil-works/pi/pull/6848) | compaction 重试 + 指数退避 | CLOSED | 修复单次瞬时断流导致整次 compaction 失败（修复 [#6647](https://github.com/earendil-works/pi/issues/6647)）。 |
| [#8766](https://github.com/earendil-works/pi/pull/8766) | 改进 write/edit 输出可扫读性 | OPEN | 写入/编辑工具改为文件聚焦紧凑展示，含行号预览，显著减少审阅成本。 |
| [#8674](https://github.com/earendil-works/pi/pull/8674) | Markdown 软换行渲染为空格 | CLOSED | 修复思考块按硬换行分裂的问题，让段落自然成段。 |
| [#8764](https://github.com/earendil-works/pi/pull/8764) | 解析配置时遵循 `settings.shellPath` | CLOSED | Windows 路径下 `!`-前缀的 API key/header 命令解析与用户自定义 shell 保持一致（修复 [#8763](https://github.com/earendil-works/pi/issues/8763)）。 |
| [#8262](https://github.com/earendil-works/pi/pull/8262) | 全 turn 起始路径分发 hooks | OPEN | 让 `sendCustomMessage(triggerTurn: true)` 也能触发 `input` / `before_agent_start`，扩展可控性。 |
| [#8731](https://github.com/earendil-works/pi/pull/8731) | 全屏模式可禁用选中复制 | CLOSED | 新增 `copyOnSelect`（默认 true），禁用后 Ctrl+X 复制选区，否则回退原行为。 |
| [#8723](https://github.com/earendil-works/pi/pull/8723) | 暴露 `https-proxy-agent` 具名导出 | CLOSED | bundle 拆分导致默认导出丢失的回归修复。 |
| [#8737](https://github.com/earendil-works/pi/pull/8737) | `NO_PROXY` 子域/裸域匹配 | CLOSED | 支持通配符与裸域一致处理，正确解析 IPv6（含括号与裸 IPv6）。 |
| [#8744](https://github.com/earendil-works/pi/pull/8744) | 覆盖层选择排除（opt-in） | OPEN | 全屏文本选择默认仍来自 `ScrollView`，覆盖层可声明排除，避免误复制。 |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | 忽略过时的工具图像转换 | OPEN | 将图像转换缓存绑定源图像，过期转换被丢弃，解决 race condition。 |
| [#7602](https://github.com/earendil-works/pi/pull/7602) | 可配置 summarization 模型 | OPEN | compaction 与分支摘要支持自定义模型与思考级别，并处理上下文窗口超限。 |

---

## 功能需求趋势

从过去 24 小时的 50 条 Issue 中可提炼出以下社区最关注的五个方向：

1. **TUI 渲染稳定性** — 流式断行、软/硬换行、表格列选择、Kitty 协议输入处理，占当天 Issue 数量的近 40%。v0.84.3 似乎是引发多个 TUI 回归的源头版本。
2. **平台/标准合规** — Linux 下的 XDG Base Directory、Windows 下 `settings.shellPath`、跨平台 `NO_PROXY` 解析、README 安装说明。降低环境摩擦成为高频诉求。
3. **多 Provider 兼容性** — OpenAI Responses、DeepSeek 推理回传、Bedrock usage 归一化、llama.cpp 默认模型、google-vertex 代理、Wispr Flow 输入。Provider 矩阵每扩展一块都暴露新边界。
4. **扩展与 Agent Harness API** — `before_agent_start` 在自定义消息触发 turn 时的执行、覆盖层 `openUrl` handler 暴露、AgentHarness S4 最小客户端与 TUI。扩展生态正在向"可编程 Agent Runtime"演进。
5. **新模型/新 Provider 接入** — Qwen3.8-flash、Cortecs Provider、`qwen3.8-flash-next` 等，反映社区对模型覆盖广度的持续要求。

---

## 开发者关注点

- **剪贴板冲突（高频）**：全屏 TUI 默认选中即复制引发误清空 → PR [#8731](https://github.com/earendil-works/pi/pull/8731) 提供设置项 [#7720](https://github.com/earendil-works/pi/issues/7720)。
- **思考块/长输出可读性**：流式渲染下的每词一行（#8584、#8675、#8780）与软换行折叠（#8673 → #8674）成为每日最痛的 UI 问题。
- **配置与家目录污染**：开发者对 `$HOME` 整洁度敏感，XDG 合规（#2870）虽呼声已久但仍被列为高优。
- **企业网络与代理**：proxy 环境下的 regression（#8610 → #8723、#8737）影响 CI/代理用户；NO_PROXY 通配符与 IPv6 是常见踩点。
- **Provider 一致性**：compaction 与推理回传在多 provider 间仍存在协议级差异（#8774 OpenAI、#8779 DeepSeek、#8752 Bedrock），需要逐家对齐。
- **示例/文档缺口**：README 缺少安装说明（#6907）、中文 README（#8772）以及文档规则细化（PR [#8775](https://github.com/earendil-works/pi/pull/8775)）反映社区在入门体验上仍有摩擦。
- **安全与供应链**：#8770 报告 `picodesandbox` 仿冒 pi-sandbox 的疑似 impersonation，提醒扩展分发链路需要更强的来源校验。

> 一句话总结今天：**TUI 体验与 Provider 一致性是当前社区最高优先级的两类问题，v0.84.3 的多个回归正被快速闭环。**

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
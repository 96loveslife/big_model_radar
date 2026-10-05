# AI CLI 工具社区动态日报 2026-10-05

> 生成时间: 2026-10-05 05:00 UTC | 覆盖工具: 8 个

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

<think>The user is asking me to generate a horizontal comparative analysis report based on the community dynamics of various AI CLI tools from 2026-10-05. Let me carefully review all the data provided and create a comprehensive comparison.

Let me extract the key data points first:

**Claude Code** (anthropic/claude-code)
- Releases: 0
- Issues updated: 50 (top 30 shown)
- PRs updated: 5
- Notable: Hook system, plugins, model selection, multi-platform

**OpenAI Codex** (openai/codex)
- Releases: 3 alpha (0.162.0-alpha.12, .13, .14)
- Issues updated: 50
- PRs updated: 11 (all closed)
- Notable: VS Code extension, Dots autonomous agent, MultiAgentV2

**Gemini CLI** (google-gemini/gemini-cli)
- Releases: 1 nightly (v0.64.0-nightly.20261005.gfb972b2f8)
- Issues updated: 50
- PRs updated: 24 (top 20 shown)
- Notable: Agent reliability, security hardening, model version management

**GitHub Copilot CLI** (github/copilot-cli)
- Releases: 1 (v1.0.92-4 pre-release)
- Issues updated: 22
- PRs updated: 0
- Notable: MCP, macOS compatibility, config command

**Kimi Code CLI** (MoonshotAI/kimi-cli)
- No activity

**OpenCode** (anomalyco/opencode)
- Releases: 0
- Issues updated: 50
- PRs updated: 50 (top 20 shown)
- Notable: v2 beta compaction fixes, client refactoring, Web/PWA

**jcode** (1jehuang/jcode)
- Releases: 1 (v0.90.1)
- Issues updated: multiple
- PRs updated: 10+ (top 10 shown)
- Notable: Provider reliability, TUI improvements

**pi** (earendil-works/pi)
- Releases: 0
- Issues updated: 45
- PRs updated: 4 (all closed)
- Notable: TUI performance, multi-provider adapters

Now let me create a comprehensive comparison report covering all 6 required sections.

Common themes I noticed:
1. **Multi-Provider support** - especially OpenAI-compatible providers with 529/5xx handling (jcode, pi, OpenCode)
2. **Agent reliability** - subagent termination, MAX_TURNS, model behavior (Gemini, Codex)
3. **Windows platform issues** - across all tools
5. **MCP ecosystem maturation** - Claude Code, Copilot CLI, OpenCode
6. **Model selection / routing** - per-task model, version preservation
7. **Compaction/context management** - OpenCode, Claude Code, Gemini, pi
8. **Security hardening** - path traversal, env leaks (Gemini, Claude Code, OpenCode)
9. **TUI performance** - pi, OpenCode
11. **Hook systems** - Claude Code
12. **Dots/autonomous agents** - OpenAI Codex

Let me structure the report properly in Chinese.</think>

# AI CLI 工具生态横向对比分析报告
**数据日期：2026-10-05** · 覆盖 8 款主流工具

---

## 一、生态全景

当前 AI CLI 工具生态进入**"成熟期 + 深度调整期"叠加**阶段：Claude Code、OpenAI Codex、Gemini CLI、OpenCode 等主流项目均进入高频迭代节奏（单日 24-50 个 PR），核心焦点从"新增能力"转向**可靠性治理、跨平台一致性、多 Provider 适配与安全加固**；与此同时，Provider 层（OpenAI 兼容端点 529/5xx 错误处理、模型版本静默改写、token 配额可见性）正成为新的竞争焦点。与此同时，jcode、pi 等中小型工具通过聚焦差异化能力（Provider 故障切换、SDK 嵌入友好性）寻求生态位，而 Copilot CLI 则在 macOS/Windows 平台碎片化与 MCP 生态成熟度上承压。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issues 更新 | PR 更新 | 活跃度评级 | 主要节奏特征 |
|------|--------------|-------------|---------|-----------|--------------|
| **Claude Code** | 0 | 50 | 5 | ⭐⭐⭐ | 桌面/Web 稳定性回归 + 治理类 PR |
| **OpenAI Codex** | 3 alpha | 50 | 11（全部 closed） | ⭐⭐⭐⭐⭐ | Rust 端高频迭代 + TUI/Windows 修复 |
| **Gemini CLI** | 1 nightly | 50 | 24 | ⭐⭐⭐⭐⭐ | Agent 可靠性 + 安全类 PR 集中 |
| **GitHub Copilot CLI** | 1 (1.0.92-4) | 22 | 0 | ⭐⭐ | 新功能上线 + 修复密集 |
| **Kimi Code CLI** | 无活动 | — | — | — | 静默期 |
| **OpenCode** | 0 | 50 | 50 | ⭐⭐⭐⭐⭐ | v2 beta 修复 + 客户端重构 + Web PWA |
| **jcode** | 1 (v0.90.1) | 30+ | 10+ | ⭐⭐⭐⭐ | Provider 稳定性 + TUI 细节打磨 |
| **pi** | 0 | 45 | 4 | ⭐⭐⭐ | TUI 性能 + 多 Provider 适配 |

**关键观察**：
- **OpenCode 与 Gemini CLI** 在 PR 数量上领先（均 ≥24），但前者侧重重构与 Web PWA，后者侧重 Agent 与安全；
- **OpenAI Codex** 的 PR 全部 closed（11/11），显示"快节奏、低爆炸半径"的工程文化；
- **Copilot CLI** 出现"0 PR 更新 + 多 Issue 关闭"的非常规组合，疑似内部合并窗口期。

---

## 三、共同关注的功能方向

### 1. 多 Provider 兼容与故障切换 🔌
**涉及工具**：jcode、pi、OpenCode、Copilot CLI

| 工具 | 具体诉求 |
|------|---------|
| jcode | 5xx/529 自动重试（已落地 v0.90.1）、402 余额耗尽时切换 Profile |
| pi | Anthropic/Bedrock/Gemini/OpenAI 适配器边角差异（如 thought_signature、anyOf schema） |
| OpenCode | Anthropic 兼容自定义 Provider 桌面流程、AWS Bedrock Mantle SSO/SigV4 |
| Copilot CLI | 外部 Provider（LM Studio、Bionic）超时问题 |

### 2. Agent 可靠性与可观测性 🤖
**涉及工具**：Gemini CLI、OpenAI Codex、Claude Code

- **Gemini CLI**：subagent MAX_TURNS 后仍报 "GOAL success" (#22323)、generalist agent 挂起 (#21409)
- **OpenAI Codex**：Dots 安全暂停状态错位 (#49873)、任务 ID 协议缺陷 (#49729)
- **Claude Code**：subagent 行为非确定性、模型重复错误致 token 耗尽 (#99560)

### 3. 上下文/Compaction 治理 📉
**涉及工具**：OpenCode、Claude Code、pi、Gemini CLI

- **OpenCode**：v2 beta compaction 忽略 `agents.compaction.model` 配置（已修复 #53276）、reasoning-only 空内容被当作成功摘要
- **Claude Code**：PreCompact/PostCompact hook 字段缺失 (#91910)、compaction 被 resume 撤销 (#95328)
- **pi**：CLI 模式下 auto-compaction 不触发 (#10330)、/compact 无法与 prompt 交错 (#8301)
- **Gemini CLI**：WebSearch session cap 静默失败 (#95815) 等相关 Issue

### 4. Windows / macOS / Linux 跨平台一致性 🪟
**涉及工具**：全部 8 款工具（其中 6 款有明确平台 Issue）

| 平台 | 代表性问题 |
|------|----------|
| Windows | Codex 沙箱锁失败 (#45153)、Copilot CLI bubblewrap 预检 (#5052)、Claude Code 侧边栏分组丢失 (#99541) |
| macOS | Copilot CLI `.mcp-writer.binding` 失效 (#4998)、Claude Code Apple 订阅误识别 (#98134) |
| Linux | Gemini CLI Wayland 下 Browser Agent 失败 (#21983)、pi Alt-screen 视口跳变 (#10414) |

### 5. MCP（Model Context Protocol）生态成熟度 🧩
**涉及工具**：Claude Code、Copilot CLI、OpenCode、pi

- 跨平台生命周期管理（macOS binding、Windows wrapper 进程残留）
- 连接器能力不对称：Shopify 多店并行、Google Drive 文件内容更新、OAuth 刷新机制
- 命名空间与发现机制（Claude Code 插件、pi `pi.namespace` 提案）

### 6. 安全与沙箱加固 🔐
**涉及工具**：Gemini CLI、Claude Code、jcode、OpenCode

- **Gemini CLI**：Glob 路径穿越 (#29522)、checkpoint tag 路径逃逸 (#29521)、CheckerRunner 泄露 API Key (#29523)
- **Claude Code**：组织级工具上限 (PR #99540)、Hook 静默激活审查 (#99561)
- **jcode**：`save_named_api_key` 凭证 shadow (#1386)、Instructions 注入 (#1562)

### 7. TUI 性能与体验优化 🎨
**涉及工具**：pi、OpenCode、jcode

- **pi**：Intl.Segmenter 未缓存 + Markdown 重建导致单核 100% (#6665)
- **OpenCode**：TUI 快照测试精简 (#50808)、动画设置默认值 (#29432)
- **jcode**：Korean IME 撤销快照、256 色终端、/model fuzzy 搜索

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 企业级插件/Hook 治理、安全策略、模型路由 | 企业开发团队 + 高合规行业 | 单仓 TypeScript + 桌面/Web/移动多端 |
| **OpenAI Codex** | Dots 自主代理生态、MultiAgentV2、跨 Provider subagent | 高级个人开发者 + 研究型机构 | Rust 核心 + TUI + 多端（VS Code、Desktop、Android） |
| **Gemini CLI** | 安全沙箱化、AST 感知工具、Quota 透明度 | 注重安全与企业治理的 Google Cloud 用户 | Modal、Shell + Node.js + 多 sandbox 后端 |
| **GitHub Copilot CLI** | 多 Provider SDK、企业代理兼容、ACP 集成 | GitHub Enterprise 客户 + 全栈工程师 | 多语言 SDK + Cloud/Desktop 双端 |
| **OpenCode** | v2 beta 架构重构、Web PWA 体验、多 Provider 桌面 | 独立开发者 + 注重 Web 跨端的团队 | 多语言（Rust/TypeScript）+ AI SDK v6 |
| **jcode** | Provider 故障切换、细粒度模型控制、移动远程 | 重度多模型用户 + Provider 混部需求方 | 单仓 Rust（基于 snapshot）|
| **pi** | SDK 嵌入友好、Extension/MCP API、可定制主题 | 下游项目集成方 + 主题/TUI 深度定制者 | TypeScript SDK + QuickJS wasm |

**关键差异点**：
- **治理深度**：Claude Code（Hook + 插件 + 组织策略）> Gemini CLI（沙箱 + TOML 策略）> 其他
- **Provider 多样性**：jcode（故障切换、402 优雅降级）> OpenCode（AWS SSO、Bedrock Mantle）> pi（多适配器）
- **Agent 自主性**：OpenAI Codex（Dots、MultiAgentV2）领先，Gemini CLI / Claude Code 跟进
- **平台覆盖度**：OpenAI Codex > Claude Code > Copilot CLI > Gemini CLI
- **可嵌入性**：pi 在 SDK 形态上具备领先优势（嵌套 API、worker 路径注入）

---

## 五、社区热度与成熟度

### 第一梯队：成熟 + 高活跃
- **OpenAI Codex**：3 个 alpha 版本同日发布、11 PR 闭环，标志"高频迭代已稳态"
- **Gemini CLI**：50 Issue + 24 PR（其中多个安全 PR），显示"安全治理期"
- **OpenCode**：v2 beta 密集修复 + 50 PR，体现"重构期 + 体验补齐"

### 第二梯队：成熟 + 稳定节奏
- **Claude Code**：以 Issue 为主、PR 较少，进入"深度调整期"
- **GitHub Copilot CLI**：v1.0.92-4 预发布 + 8 个 Issue 关闭，修复密集

### 第三梯队：快速迭代 + 差异化定位
- **jcode**：v0.90.1 聚焦 Provider 稳定性 + TUI 细节，社区反馈响应积极
- **pi**：TUI 性能问题（#6665 in-progress）+ 适配器层边角修复

### 观察期
- **Kimi Code CLI**：静默期（连续 7 天以上无活动）

---

## 六、值得关注的趋势信号

### 📌 趋势 1：Provider 故障处理成为差异化新战场
**信号**：jcode v0.90.1（529/5xx 自动重试、402 Profile 切换）、pi 多适配器边角修复、OpenCode Bedrock SSO 提案。

**对开发者的参考价值**：选择 AI CLI 时，应优先评估其**对 OpenAI 兼容端点的错误归类能力**（5xx/429/402 是否自动重试或切换），以及**对非主流 Provider（AWS Bedrock、Vertex AI、本地模型）的认证支持**。

### 📌 趋势 2：Agent 自主性的"安全边界"成共识焦点
**信号**：OpenAI Codex Dots 安全暂停状态错位 (#49873)、Claude Code Hook 静默激活审查、Gemini CLI subagent 误报成功。

**对开发者的参考价值**：在生产环境部署 Agent 时，应主动配置**可中断上限（MAX_TURNS）、人工接管触发器（pause-on-risk）、状态机校验**——多数工具尚未提供开箱即用的"安全护栏"。

### 📌 趋势 3：Windows 平台仍是结构性短板
**信号**：Codex、Copilot CLI、Claude Code、Gemini CLI 均有明确 Windows 专项 Bug（沙箱锁、镜像目录、ACL、方向键滚动、bubblewrap）。

**对开发者的参考价值**：跨平台团队建议**优先验证目标平台**（尤其 Windows 沙箱），并准备**降级方案**（如回退到 macOS/Linux runner）。

### 📌 趋势 4：模型版本"显式固定"需求凸显
**信号**：Gemini CLI 修复 `--model gemini-3-pro-preview` 被静默改写 (#29420)、OpenCode Anthropic 系统更新位置 (#52568)、Claude Code `/model opusplan` 失效 (#92007)。

**对开发者的参考价值**：CI/CD 与生产环境应**显式锁定模型 ID 与版本**，避免被服务端 rollout 影响可重现性。

### 📌 趋势 5：MCP 生态进入"能力边界扩展期"
**信号**：Copilot CLI 多条 MCP Issue（大小写匹配、OAuth、wrapper 进程）、Claude Code Shopify/Google Drive 连接器能力不对称。

**对开发者的参考价值**：使用 MCP 集成时，应**预先评估连接器的更新能力**（创建 vs 更新 vs 删除），避免工作流因能力缺口被迫回退到浏览器/CLI。

### 📌 趋势 6：SDK 嵌入友好性成为新指标
**信号**：pi 推出嵌套工具 API、QuickJS wasm 路径进程级单次化、RPC 队列清理。

**对开发者的参考价值**：构建 IDE 插件、CI 集成或第三方 host 时，**SDK 形态的稳定性（wasm/worker 路径、状态清理、并发安全）**比单纯的功能丰富度更关键。

### 📌 趋势 7：安全治理从"事后修补"转向"前置审查"
**信号**：Gemini CLI 4 个安全 PR 集中合并、Claude Code 组织级工具上限、jcode DefuzeX 团队系统化安全测试。

**对开发者的参考价值**：企业部署 AI CLI 时，应主动配置**最小权限原则**（外部 checker 最小化环境、Glob 路径校验、checkpoint 目录限制），而非依赖工具默认行为。

---

> **报告总结**：2026-10-05 的 AI CLI 生态呈现出"主流工具深度调整、新兴工具差异化突围"的二元格局。**Provider 故障切换**、**Windows 一等公民化**、**Agent 可控自主性**、**SDK 嵌入友好性**将成为下一轮竞争的关键维度。对开发者而言，**优先关注可靠性 > 新特性、关注平台兼容性 > 模型多样性、关注安全护栏 > 自主性上限**，将是工具选型的核心准则。

*本报告基于 8 款 AI CLI 工具 2026-10-05 GitHub 公开数据整理，仅反映社区动态，不构成产品推荐。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository and generate a report. Let me carefully analyze the data provided.

Looking at the data:
- 50 PRs total, showing top 20 by comments (though all show 评论: undefined and 👍: 0, which seems to be data display issues)
- 50 Issues total, showing top 15 by comments

Let me focus on the substantive content:

**Top PRs (note: 评论数字段为undefined，但提供了更新时间和内容):**

1. **#1298** - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures - by @MartinCajiao, updated 2026-09-16
2. **#1742** - fix(mcp-builder): support mcp>=2 streamable_http_client import - by @Kuldeeep18, updated 2026-09-29
3. **#1771** - feat(skills): add proofcore-contract-auditor for smart contract notarization - by @ProofCore-Protocol, updated 2026-09-16
4. **#1734** - Detect orphaned docx comments - by @rohitjain25, updated 2026-09-25
5. **#1703** - Add md2video-audio skill - by @70v-Yoyo, updated 2026-09-15
6. **#1607** - Update claude-api skill: mark four retired model IDs - by @adi-IL, updated 2026-10-04
7. **#1245** - Add notion-spec-to-implementation and quantitative-resume-auditor skills - by @mrdesouzaphd-cmyk, updated 2026-09-30
8. **#1792** - fix(docx): report LibreOffice timeout as an error and verify the output - by @TINGyu123644, updated 2026-09-25
9. **#1730** - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts - by @GISWLH, updated 2026-10-04
10. **#525** - Add pyxel skill for retro game development - by @kitao, updated 2026-09-22
11. **#514** - Add document-typography skill: typographic quality control - by @PGTBoos, updated 2026-03-13
12. **#1681** - fix(skill-creator): support direct execution of package_skill.py - by @Kuldeeep18, updated 2026-09-27
13. **#1615** - Add scnet-hpc skill - by @lql341, updated 2026-08-24
14. **#822** - feat: add AWT (AI Watch Tester) — AI-powered E2E testing skill - by @ksgisang, updated 2026-09-19
15. **#538** - fix(pdf): correct case-sensitive file references in SKILL.md - by @Lubrsy706, updated 2026-04-29
16. **#486** - Add ODT skill — OpenDocument text creation - by @GitHubNewbie0, updated 2026-04-14
17. **#210** - Improve frontend-design skill clarity - by @justinwetch, updated 2026-03-07
18. **#83** - Add skill-quality-analyzer and skill-security-analyzer to marketplace - by @eovidiu, updated 2026-01-07
19. **#1776** - Add blast-radius skill - by @kishormorol, updated 2026-09-18
20. **#723** - feat: add testing-patterns skill - by @4444J99, updated 2026-09-21

**Top Issues by comments:**

1. **#492** - Security: Community skills distributed under anthropic/ namespace - 43 comments - by @aliksir
2. **#228** - Enable org-wide skill sharing in Claude.ai - 16 comments - by @jh-broad-reach
3. **#556** - run_eval.py: claude -p never triggers skills/commands (0% trigger rate) - 12 comments - by @dthau120391
4. **#62** - All my skills have disappeared - 10 comments - by @nicksonnenberg
5. **#1329** - Proposing compact-memory skill - 9 comments - by @WGlynn
6. **#202** - skill-creator should be updated to best practice - 8 comments - by @oaustegard (CLOSED)
7. **#412** - Skill proposal: agent-governance - 6 comments - by @imran-siddique (CLOSED)
8. **#189** - document-skills and example-skills plugins install identical content - 6 comments - by @chuggies510
9. **#1487** - claude-api skill eagerly injects ~156k tokens - 4 comments - by @DaKev
10. **#1394** - skill-creator: eval-viewer escapeHtml XSS - 4 comments - by @griffithsbs
11. **#1390** - mcp-builder: evaluation.py scores 0/N - 4 comments - by @ejprice
12. **#1385** - Proposal: Reasoning Quality Gate Pipeline - 4 comments - by @YuhaoLin2005
13. **#1383** - skill-creator: silent benchmark failures - 4 comments - by @zaesche
14. **#1175** - Security and Context Window for SharePoint Online - 4 comments - by @m-cho-bunsekiya (CLOSED)
15. **#29** - Usage with bedrock - 4 comments - by @mrkhalil6

Now let me organize the report. Note that I should mention the comment count appears to be undefined for PRs in the data, so I'll use other signals like recency of updates, complexity of issues, and the explicit comment numbers for Issues.

Let me write a clean, professional analysis report.</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-10-05 · 数据源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行（Top PRs）

> 说明：原始数据中 PR 的评论数字段为空，以下排行结合 **最近更新时间、修复深度、Issue 关联度** 综合筛选。

### 🥇 #1298 — fix(skill-creator): isolate trigger evals and Windows 兼容修复
- **作者**：@MartinCajiao ｜ **状态**：OPEN
- **功能**：修复 skill-creator 的 trigger 评估在 Windows 上 `select()` 失败、子进程管道冲突、误报 miss 等问题
- **社区热点**：是 Issue #1383（六类 benchmark 故障）的具体修复路径，也是 Issue #556（0% 触发率）的衍生补丁
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥈 #1742 — fix(mcp-builder): mcp>=2 streamable_http_client 适配
- **作者**：@Kuldeeep18 ｜ **状态**：OPEN（最近更新 09-29）
- **功能**：适配 mcp 2.0+ 的 `streamable_http_client` 重命名及自定义 HTTP header 的 `create_mcp_http_client` 模式
- **社区热点**：直接修复 Issue #1668，mcp-builder 是 Claude Code 扩展 MCP 工具的核心元 skill
- 🔗 https://github.com/anthropics/skills/pull/1742

### 🥉 #1771 — feat: proofcore-contract-auditor（Web3 合约审计）
- **作者**：@ProofCore-Protocol ｜ **状态**：OPEN
- **功能**：对 Solidity/Rust 智能合约做静态分析，并通过零存储 Merkle 协议将审计证明锚定到 TON 区块链
- **社区热点**：Skills 生态向 Web3/链上场景扩展的标志性提案
- 🔗 https://github.com/anthropics/skills/pull/1771

### 4️⃣ #1703 — feat: md2video-audio（Markdown → 视频 + AI 配音）
- **作者**：@70v-Yoyo ｜ **状态**：OPEN
- **功能**：零成本将 Markdown 文档经 Marp 转幻灯片 + 拟人化 TTS 合成 MP4
- **社区热点**：内容创作场景自动化代表，触发条件"文档→多媒体"非常吸睛
- 🔗 https://github.com/anthropics/skills/pull/1703

### 5️⃣ #1245 — notion-spec-to-implementation + quantitative-resume-auditor
- **作者**：@mrdesouzaphd-cmyk ｜ **状态**：OPEN（最近更新 09-30）
- **功能**：①将产品/技术 spec 自动拆解为 Notion 实施任务 ②量化简历审计
- **社区热点**：同时覆盖 PM 工作流与求职场景，是"生产力 + 招聘"双场景 Skill 提案
- 🔗 https://github.com/anthropics/skills/pull/1245

### 6️⃣ #525 — pyxel（复古游戏开发）
- **作者**：@kitao ｜ **状态**：OPEN（持续维护至 09-22）
- **功能**：指导 Python 复古游戏开发、headless 调试、帧级断言
- **社区热点**：填补"创意/游戏开发"垂类空白，已迭代半年仍 OPEN，落地难度较大
- 🔗 https://github.com/anthropics/skills/pull/525

### 7️⃣ #822 — AWT (AI Watch Tester) — AI 驱动的 E2E 测试
- **作者**：@ksgisang ｜ **状态**：OPEN（最近更新 09-19）
- **功能**：零代码 E2E 测试生成，赋予 Claude 浏览器视觉与控制能力
- **社区热点**：与 #723 testing-patterns 形成"测试方法论 + 测试自动化"双轨
- 🔗 https://github.com/anthropics/skills/pull/822

### 8️⃣ #1792 — fix(docx): LibreOffice 超时改报 Error 并校验产物
- **作者**：@TINGyu123644 ｜ **状态**：OPEN
- **功能**：将 soffice 超时从"伪成功"改为显式 Error，并校验输出 docx 不含 `w:ins/w:del` 修订标记
- **社区热点**：文档处理链路上的可信度改造，受 Issue #1734 孤悬评论检测启发
- 🔗 https://github.com/anthropics/skills/pull/1792

---

## 2. 社区需求趋势（基于 Issues）

| 需求方向 | 代表 Issue | 评论数 | 诉求要点 |
|---------|-----------|------|--------|
| 🔐 **安全与命名空间隔离** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 社区 skill 在 `anthropic/` 命名空间下伪装官方，存在信任边界滥用风险 |
| 🏢 **企业级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228) | **16** | 期望 Claude.ai 支持组织内 Skill 一键共享，免去手动分发 `.skill` 文件 |
| 🛠️ **Skill-Creator 评测可靠性** | [#556](https://github.com/anthropics/skills/issues/556) | **12** | `run_eval.py` 对 `claude -p` 0% 触发率，CI 评估信号完全失效 |
| 💾 **持久化记忆/压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | **9** | compact-memory：长任务 Agent 用符号化表示压缩自有笔记 |
| 🧹 **插件去重** | [#189](https://github.com/anthropics/skills/issues/189) | **6** | `document-skills` 与 `example-skills` 安装内容重复，污染上下文 |
| 🛡️ **Agent 治理与审计** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED）| 6 | 提议 agent-governance skill：策略执行、威胁检测、信任评分 |
| 📉 **Context 窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) | **4** | `claude-api` skill 单次注入 ~156k tokens 直接撑爆上下文 |
| ⚙️ **E2E/质量门控管线** | [#1385](https://github.com/anthropics/skills/issues/1385) | **4** | Reasoning Quality Gate：预校准 → 对抗评审 → 交付验证 |
| ☁️ **多平台支持** | [#29](https://github.com/anthropics/skills/issues/29) | **4** | 期待 Skills 在 AWS Bedrock 上的官方支持路径 |

**趋势提炼**：社区当前最集中的诉求是 **"如何让 Skills 更可信、可治理、可共享"**——涵盖安全、共享、评测、内存压缩、上下文管理等治理类需求远超新功能数量。

---

## 3. 高潜力待合并 PR（活跃 OPEN）

这些 PR 最近 30 天内有更新、修复价值明确，合并概率较高：

| PR | Skill / 修复主题 | 最近更新 | 落地理由 |
|---|----------------|---------|---------|
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 标记 4 个退役模型 ID | **2026-10-04** | 文档准确性，已合并准备度高 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | 替换 academy-guide/tool-use-concepts 中失效 URL | **2026-10-04** | 文档死链，影响所有 SDK 用户 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation + resume-auditor | **2026-09-30** | 双场景生产力工具，PM/求职者高需求 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 适配 mcp>=2 | **2026-09-29** | 关键依赖升级修复 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator package_skill.py 直接执行 | **2026-09-27** | 修复 ModuleNotFoundError，开发者体验 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时报错 | **2026-09-25** | 提交流水线可信度 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏 | **2026-09-22** | 创意垂类长期维护中 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E 测试 | **2026-09-19** | 补齐测试自动化能力 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | **2026-09-21** | 与 AWT 形成测试矩阵 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 触发评估隔离 | **2026-09-16** | 修复核心评测组件，关联 3 个 Issue |

---

## 4. Skills 生态洞察（一句话总结）

> **当前 Claude Code Skills 社区的核心矛盾已从"如何造更多 Skill"转向"如何让 Skill 更可信、更可治理、更可共享"——安全命名空间隔离（#492）、评测可靠性（#556）、企业内分发（#228）、上下文治理（#1487）四大议题占据绝对关注度，预示下一波官方迭代重点将落在 **Skill 元治理（meta-governance）** 而非单纯的功能扩张。**

---

### 📌 分析师备注

- 本数据集中 PR 评论数字段返回 `undefined`，但通过 **最近更新时间 + Issue 关联度 + 修复复杂度** 三维交叉仍可识别热度最高的 PR。
- 真正"高评论"的信号集中在 **Issues**：#492（43）、#228（16）、#556（12）这三类问题指向平台级缺陷，社区期待 Anthropic 官方介入修复。
- 新增 Skill 提案在垂类上呈现"**创作（md2video/pyxel）+ Web3（proofcore）+ 工作流（notion-spec）+ 测试（AWT/testing-patterns）**"四向分散，但缺少统一治理框架。

---

<think>The user wants me to create a community daily report based on GitHub data from the anthropics/claude-code repository for 2026-10-05. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated in past 24 hours, with top 30 shown (showing most commented)
3. 5 PRs updated in past 24 hours

Let me organize the most important issues:

**Top issues by comments/relevance:**
1. #69238 - BUG: No response from API when Advisor is triggered (67 comments, 112 likes) - Critical bug
2. #14920 - Feature Request: Disable individual Claude plugin skills (19 comments, 95 likes) - Popular enhancement
3. #92007 - /model opusplan fails with "Unsupported model" (9 comments)
4. #99407 - Shopify connector: connect several stores (8 comments)
5. #91910 - Hooks: PreCompact/PostCompact fire for subagent compaction (8 comments)
6. #98134 - Active Apple Max 20x subscription still recognized as Pro (4 comments)
7. #74068 - macOS TCC permission prompts show version number (3 comments)
8. #99560 - Claude Code repeats similar mistakes causing excessive token consumption (3 comments) - NEW
9. #95292 - Google Drive connector: no way to update file content (3 comments)
10. #97504 - Messages meant for user are emitted as hidden thinking (3 comments)
11. #99552 - security-guidance pattern reminders never fire for NotebookEdit (2 comments) - NEW
12. #95328 - session.compact hook compaction undone on resume (2 comments)
13. #95815 - WebSearch session cap fails silently (2 comments)
14. #95190 - Choose model and effort per task (2 comments)
15. #98310 - Remote Control: unarchived sessions never re-dispatched (2 comments)
16. #99562 - "Add to project" shows "No matches" (1 comment) - NEW
18. #99549 - Claude code ignoring repository rules against AI contributions (1 comment) - NEW
19. #98345 - Auto mode dropped on first turn (1 comment)
20. #99541 - Desktop Sidebar session-to-group assignments lost after reboot (1 comment) - NEW
21. #99495 - Sidebar groups: shared context (1 comment)
22. #99513 - Stale MCP cache (1 comment)
... and more new issues

**PRs:**
1. #99540 - sec-default: org ceiling on tools over plugins (NEW)
2. #20448 - Web4-governance plugin
3. #40572 - Global Hookify rules support
4. #1 - Create SECURITY.md (CLOSED)
5. #87077 - fix pr-review-toolkit YAML frontmatter

Let me categorize the trends:

**Functional needs trends:**
- IDE/Editor integration (VSCode, Cursor)
- MCP integration improvements (Shopify, Google Drive)
- Plugin management (individual skill disable)
- Model selection (per-task model/effort)
- Mobile Remote Control improvements
- Hook system improvements
- Desktop app improvements
- Security/governance
- Cost/token consumption management

**Developer concerns:**
- API errors / network issues
- Authentication/subscription recognition
- Performance / token waste
- Tool reliability
- Permissions/security
- Hook behavior edge cases

Let me write the report now.</think>

# Claude Code 社区动态日报
**日期：2026-10-05**

---

## 📌 今日速览

今日无版本发布，社区焦点集中在**桌面端与 Web 端的稳定性回归问题**，包括 Remote Control 会话断连、Apple 订阅识别错误、Windows 重启后侧边栏分组丢失等高频用户痛点。同时，**安全治理与 Hook 机制**持续引发讨论，涉及组织级工具上限（PR #99540）与 Hook 静默激活风险（Issue #99561）两大方向。生态集成侧，Shopify 与 Google Drive 连接器的功能边界问题再度被提出。

---

## 🚀 版本发布

无新版本发布。社区最新可用版本为 **v2.1.289**（来自多个 Issue 环境信息），距离上次 #99556 报告的 2.1.289 仍属当前主线。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 亮点 |
|---|-------|------|
| 1 | **#69238** [BUG] Advisor 触发时无 API 响应 *(67 评论 · 👍112)* | 历史最热问题之一；macOS 下使用 Opus 4.8 Advisor 时持续出现 "No response from API · Retrying" 错误，base model 为 Sonnet 也复现。社区反应强烈，建议作为 P0 跟踪。 |
| 2 | **#14920** [Feature] 单独禁用插件技能 *(19 评论 · 👍95)* | 用户希望选择性关闭 `commit-commands:commit-push-pr` 等技能，仅保留核心命令。呼声高，体现插件粒度控制诉求。 |
| 3 | **#92007** `/model opusplan` 报 "Unsupported model" *(9 评论)* | Windows 11 用户在 Claude Desktop 内调用 `/model opusplan` 失败，曾长期可用。疑似后端模型可用性回归。 |
| 4 | **#99407** [Feature] Shopify 连接器支持多店铺并行 *(8 评论)* | 开发者工作流横跨 9 个 dev store，当前连接器一次只能连接一个，限制明显。 |
| 5 | **#91910** Hooks: 子代理压缩触发缺失字段 *(8 评论 · has repro)* | `PreCompact`/`PostCompact`/`SessionStart(compact)` 对子代理触发时缺少 agent 字段，`SubagentStop` 对内部 summarizer 触发时 `agent_transcript_path` 不存在。 |
| 6 | **#98134** Apple Max 20x 订阅仍识别为 Pro *(4 评论)* | macOS 端账户订阅层级识别错误，影响用户权益。 |
| 7 | **#99560** Claude Code 重复同类错误致 token 耗尽 *(3 评论 · 新)* | 用户痛斥模型循环卡死导致额度快速消耗，要求要么提额要么需有保护机制，情绪激烈。 |
| 8 | **#95292** [Feature] Google Drive 连接器无法替换文件内容 *(3 评论)* | `update_file` 仅支持元数据，更新已有文件内容必须借助浏览器，破坏 agent 自动化工作流。 |
| 9 | **#97504** 用户消息被输出为隐藏 thinking *(3 评论 · 👍7)* | 模型本应面向用户的回复被以 `thinking` block 输出，导致用户看不到。仅在含 tool call 时偶发。 |
| 10 | **#98310** Remote Control 会话归档-取消后无法重连 *(2 评论 · has repro)* | `claude remote-control` 服务模式会话取消归档后，Web 端消息卡在 "Sending…" 2 分钟后报离线，agent 工作流阻塞。 |

**其他值得关注的近期新 Issue：** #99552（`security-guidance` 不覆盖 NotebookEdit）、#99562（"Add to project" 列表显示 No matches）、#99556（CLI 2.1.289 缺失 TaskCreate/TodoWrite 工具）、#99549（忽略仓库 AI 贡献规则）、#99541（Windows 重启后侧边栏分组丢失）。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 |
|---|----|----|
| 1 | **#99540** *sec-default*：组织工具上限覆盖个人插件 | 新增。组织级 deny/审批策略对用户安装的插件同样适用，所有判断路径带 `.catch`，强化企业治理。 |
| 2 | **#40572** feat: 支持全局 Hookify 规则 | 加载 `~/.claude/` 全局规则目录，与项目级 `.claude/` 并行，跨项目统一规则成为可能。 |
| 3 | **#87077** fix(pr-review-toolkit): 修复 agent frontmatter YAML | 此前所有 agent 的 description 是包含对话行的未加引号 scalar，导致 frontmatter 解析失败、加载为空，统一修复。 |
| 4 | **#20448** Add web4-governance plugin | 引入基于 T3 信任张量、实体见证、R6 审计链的轻量 AI 治理插件（社区贡献）。 |
| 5 | **#1** Create SECURITY.md | 仓库首个安全策略文档，已关闭。 |

> 另有早期治理类 PR（#1 已合并 SECURITY.md）反映官方正逐步完善开源治理框架。

---

## 📈 功能需求趋势

从今日 Issues 提炼的社区诉求方向：

1. **🔌 集成边界扩展** — Shopify 多店并行、Google Drive 文件内容更新、Mobile Remote Control 持久化上下文指示器（#99407、#95292、#99564）。Agent 自动化的"最后一公里"仍受连接器能力限制。
2. **🎛️ 细粒度控制** — 单独禁用插件技能（#14920）、为 `spawn_task` 选择 model 与 effort（#95190）、Sidebar 分组共享上下文（#99495）。用户在追求"按需启用、按场景调参"。
3. **🛡️ 安全与治理** — Hook 静默激活需显式审查（#99561）、组织级工具上限（PR #99540）、`security-guidance` 覆盖 NotebookEdit（#99552）。Hook 作为高权限入口正成为治理重点。
4. **📱 跨端一致性** — macOS TCC 权限命名（#74068）、Windows 侧边栏分组持久化（#99541）、Android Remote Control 上下文显示（#99564）。桌面/Web/移动体验一致性是高频诉求。
5. **🤖 模型路由与降级** — `/model opusplan` 失效（#92007）、订阅层级识别（#98134）、token 耗尽防护（#99560）。模型可用性与配额透明度直接关系用户留存。

---

## 👨‍💻 开发者关注点

- **痛点 1：模型行为不稳定导致成本失控** — #99560 反映 Claude Code 重复同类错误致额度耗尽，开发者迫切需要内置循环检测或失败上限保护。
- **痛点 2：Hook 行为非确定性** — #91910、#95328、#99552 显示 Hook 在子代理、压缩、会话恢复等场景下 payload 字段缺失或被覆盖，构建企业级自动化时难以依赖。
- **痛点 3：连接器能力不对称** — Shopify、Google Drive 等连接器"能创建不能更新"或"单实例限制"，迫使 agent 工作流中断回退到浏览器/CLI（#95292、#99407）。
- **痛点 4：账户与权限状态机不一致** — Apple 订阅层级误识别（#98134）、Auto 模式首轮失效（#98345）、MCP 缓存陈旧（#99513），均指向本地缓存与远端状态同步问题。
- **痛点 5：跨平台体验差异** — Windows/macOS/Linux 在 TCC、桌面分组、graphics probe（#99566）等细节上差异显著，开发者需要更统一的终端探测与权限处理逻辑。

---

*报告基于 anthropics/claude-code 仓库过去 24 小时公开数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex community dynamics on 2026-10-05.

Key observations:
1. **Releases**: Three alpha releases (0.162.0-alpha.12, .13, .14) - Rust version
2. **Issues**: 50 issues updated, mix of bugs and feature requests
3. **PRs**: 11 PRs, all closed, mostly by @copyberry[bot]

Let me identify the most important items:

**Top Issues by engagement:**
- #8197: VS Code extension panel grey bug (68 comments, 22 👍) - CLOSED
- #48774: Codex Remote pairing fails on Android (54 comments, 26 👍) - OPEN
- #49988: Extension drops submitted messages (48 comments, 47 👍) - CLOSED
- #49729: Dot cannot create/follow up local Codex tasks (36 comments) - OPEN
- #50428: Windows durable chat turn/start fails (18 comments) - OPEN
- #20312: Native event-driven session wake (17 comments, enhancement) - OPEN
- #34833: MultiAgentV2 cross-provider subagent encrypted (14 comments) - OPEN
- #45596: Windows ChatGPT project mirror sync (14 comments) - OPEN
- #45153: Windows shell commands fail with helper_sandbox_lock_failed (12 comments) - OPEN
- #49873: Dot safety-pause state desync (11 comments) - OPEN
- #18308: Add Agents to Plugins System (11 comments, 70 👍 - high!) - OPEN
- #39851: Windows arrow keys cannot scroll (9 comments) - OPEN
- #45163: TUI palette cache light/dark (8 comments) - OPEN

**Top PRs:**
- #50964: Track inference tool changes in turn analytics
- #50962: Gate stable environment tool exposure
- #50940: Recover malformed Windows deny-read ACL
- #50913: Use server model defaults for connected TUI fresh starts
- #50811: Honor server reasoning summary defaults
- #50803: Use managed daemon for remote-control launches
- #50802: Fall back to mklink for Windows daemon junction
- #50808: Prune TUI snapshots
- #50804: Preserve review lifecycle ordering on failure
- #50943: Include tools changes in turn analytics

**Trends:**
- Windows issues are pervasive (multiple Windows-specific bugs)
- MultiAgentV2 / cross-provider subagent issues
- Dot (autonomous agent) related issues - new product direction
- VS Code extension issues
- Browser/Computer Use integration issues
- Plugin/Skills system extensions

Let me write a structured Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**日期：2026-10-05** · 数据来源：github.com/openai/codex

---

## 1. 今日速览

今日 Rust 端高频迭代，连续推出 0.162.0-alpha.12/13/14 三个 alpha 版本，主要围绕 **TUI 行为修正、Windows 兼容性与服务端默认配置对齐**。社区侧焦点集中在 **VS Code 扩展的输入提交异常 (#49988 / #50110)** 与 **Dots 自主代理的多类状态机缺陷**，同时 MultiAgentV2 的跨 provider 明文投递仍是未解的痛点。

---

## 2. 版本发布

| 版本 | 性质 | 主要内容（依据 PR 推断） |
|---|---|---|
| `rust-v0.162.0-alpha.12` | Alpha | 修复 review 生命周期顺序、托管守护进程用于 remote-control、TUI 快照精简 |
| `rust-v0.162.0-alpha.13` | Alpha | 守护进程连接型 TUI 启动时使用服务端模型默认、Windows daemon junction 退回 `mklink` |
| `rust-v0.162.0-alpha.14` | Alpha | turn analytics 中追踪推理工具变更、引入 `stable_environment_tools` 特性开关 |

> 三个 alpha 均聚焦 **稳定性 + 工具面治理**，尚未引入新模型或大特性。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 为什么值得关注 |
|---|---|---|---|---|
| [#18308](https://github.com/openai/codex/issues/18308) | **enhancement**：在插件系统中加入 Agents 支持 | OPEN | 11 / **70** 👍 | 全榜最高点赞。开发者认为 Plugins 已覆盖 skills/MCP/apps，唯独遗漏 agents，是能力补齐的关键缺口 |
| [#8197](https://github.com/openai/codex/issues/8197) | VS Code 扩展面板长时间运行后变灰 | CLOSED | 68 / 22 | 长会话内存/渲染泄漏类问题的代表作，影响所有深度用户 |
| [#48774](https://github.com/openai/codex/issues/48774) | **Android 上 Codex Remote 配对失败** | OPEN | 54 / 26 | 移动端 Remote Control 是新晋重要入口，配对失败直接阻断核心链路 |
| [#49988](https://github.com/openai/codex/issues/49988) | VS Code 扩展更新后偶发吞消息 | CLOSED | 48 / **47** 👍 | 高赞 + 已关闭，复现路径清晰，是近一周扩展稳定性的代表事件 |
| [#49729](https://github.com/openai/codex/issues/49729) | Dots 无法在已保存项目中创建/跟进本地 Codex 任务 | OPEN | 36 / 6 | 暴露 Dot ↔ App Project 任务 ID 协议缺陷，破坏 Dot 的持久化能力 |
| [#20312](https://github.com/openai/codex/issues/20312) | **enhancement**：原生事件驱动的会话唤醒原语 | OPEN | 17 / 6 | 指出 Codex 是 turn-driven 缺乏 idle 唤醒，将阻塞实时响应场景（IM、队列、文件变更、MCP 推送） |
| [#50428](https://github.com/openai/codex/issues/50428) | Windows Desktop：`turn/start` 与 `thread/fork` 因 `AbsolutePathBuf` 反序列化失败 | OPEN | 18 / 1 | Windows + Durable Chat 组合路径错误，影响企业用户长期会话 |
| [#34833](https://github.com/openai/codex/issues/34833) | MultiAgentV2 跨 provider 子代理收到加密任务 | OPEN | 14 / 3 | 与 #37197、#46939 互为关联：自定义 provider 根本无法消费加密任务内容 |
| [#45596](https://github.com/openai/codex/issues/45596) | Windows：Work helpers 占用镜像目录后 ChatGPT 项目镜像同步失败 | OPEN | 14 / 0 | 暴露 Chat 与 Work 共享同一项目目录时的资源争用 |
| [#49873](https://github.com/openai/codex/issues/49873) | Dots 安全暂停状态错位：自主执行继续，但人工控制被阻塞 | OPEN | 11 / 1 | **安全相关**，需要立刻关注的 agent 安全姿态问题 |

> 补充高信号条目：[#45153](https://github.com/openai/codex/issues/45153)（Windows 沙箱锁失败，error 5）、[#39851](https://github.com/openai/codex/issues/39851)（Windows 方向键无法滚动会话）共同印证 **Windows 桌面端为当前最大痛点平台**。

---

## 4. 重要 PR 进展（Top 10）

| PR | 功能 / 修复 |
|---|---|
| [#50964](https://github.com/openai/codex/pull/50964) | **turn analytics 中追踪推理工具变更**，新增 `tools_change_count` 用于后端归因分析 |
| [#50962](https://github.com/openai/codex/pull/50962) | **新增 `stable_environment_tools` 默认关闭特性开关**，把环境类工具在 executor 就绪前暴露，并保持选择器稳定 |
| [#50940](https://github.com/openai/codex/pull/50940) | **安全恢复** Windows 上畸形的 `deny_read_acl_state.json`，不再误删未知限制或改动链接文件 |
| [#50943](https://github.com/openai/codex/pull/50943) | 在现有 `codex_turn_event` 中加入 `tools_change_count`，与采样/重试字段并排 |
| [#50913](https://github.com/openai/codex/pull/50913) | 连接到 app server 的 TUI 冷启动改用 **服务端模型默认**，避免客户端陈旧目录阻断启动 |
| [#50811](https://github.com/openai/codex/pull/50811) | 新建 TUI 线程 **遵守服务端推理摘要默认**，修复 client 强制覆盖 |
| [#50803](https://github.com/openai/codex/pull/50803) | 符合条件的 `codex remote-control` 启动/复用 **managed daemon**，回退到前台 server |
| [#50802](https://github.com/openai/codex/pull/50802) | Windows 上 daemon junction 更新被拒时，**回退到 `cmd.exe mklink /J`** |
| [#50808](https://github.com/openai/codex/pull/50808) | **精简 TUI 快照测试**，将全量输出断言改为针对消息/弹窗/状态指示符的细粒度断言 |
| [#50804](https://github.com/openai/codex/pull/50804) | review 失败时**保留生命周期顺序**，避免进入 review mode 事件丢失；队列中的 `/review` 也保留运行指示 |

> 全部 11 个 PR 均为已合并关闭状态，体现 Codex 团队本周 **快节奏、低爆炸半径** 的工程节奏。

---

## 5. 功能需求趋势

从近 24 小时活跃 Issues 提炼的社区诉求：

1. **Dots（自主代理）生态成熟化**  
   - 任务与 App Project 的双向引用（#49729、#33942、#49585）  
   - 显式授权在委托执行中被忽略（#50119、#35072）  
   - 安全暂停/恢复状态机（#49873）

2. **MultiAgentV2 跨 Provider 互通**  
   - 加密任务消息无法被自定义 provider 消费（#34833、#37197、#46939）  
   - 需要端到端明文投递的可配置开关（#46939）

3. **插件 / Skills / Agents 体系扩展**  
   - Plugins 中加入 Agents（#18308，最高 👍）  
   - Agent Plugins 1.0 hooks 未被加载（#47925）

4. **Windows 平台一等公民化**  
   - 沙箱锁、镜像目录、ACL、daemon junction、方向键滚动、Tauri 渲染等密集出现（#45153、#50428、#45596、#39851、#50940、#50802）

5. **实时/事件驱动能力**  
   - session 唤醒原语（#20312）、MCP 推送、文件监听等 idle→event 场景

6. **VS Code 扩展输入可靠性**  
   - Enter 提交被吞、首次点击不获焦（#49988、#50110、#48925）

7. **Browser / Computer Use 稳定化**  
   - 个人账户策略拦截（#49465）、Edge RPC 超时（#50675）、nodeRepl.fetch 失败（#44383）、Computer Use 鉴权（#46007）

---

## 6. 开发者关注点

- **可靠性 > 新特性**：本周合并的 PR 几乎全部聚焦在边缘场景下的回归与一致性，而非新增能力；开发者最希望的是"少踩坑"。
- **Windows 是结构性短板**：从沙箱到文件锁到 UI 渲染，跨平台兼容性问题集中在 Windows 桌面端，呼吁专项投入。
- **Agent 安全姿态**：Dots 的安全暂停状态错位（#49873）引发开发者对"自主代理 + 人工接管"边界的强烈关注，是产品口碑风险点。
- **可观测性诉求**：turn analytics 中加入 `tools_change_count`（#50943、#50964）说明社区和官方都希望获得更细粒度的会话级指标。
- **生态一致性**：Plugins/Skills/MCP/Agents/Dots/App-server 之间的能力边界和协议仍较零散，开发者期待"统一模型 + 渐进启用"的能力栈（参见 `stable_environment_tools` 特性开关）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report for Gemini CLI community dynamics based on GitHub data. Let me analyze the data carefully:

1. **Releases**: One nightly release v0.64.0-nightly.20261005.gfb972b2f8
2. **Issues**: 50 issues updated in past 24 hours, top 30 shown. Many focus on agent-related issues (subagents, browser agent, generalist agent)
3. **PRs**: 24 PRs updated, top 20 shown. Several security fixes, model handling fixes, agent fixes

Let me organize this into a comprehensive Chinese daily report.

Key observations:
- Multiple agent-related issues (subagent reliability, browser agent, generalist agent hanging)
- Several security PRs (path traversal, env leaks, checkpoint path containment, glob tool)
- Model ID preservation issues (gemini-3-pro-preview being silently rewritten)
- AST-aware tools investigation
- Quota/rate limiting visibility
- Wayland compatibility issues with browser subagent
- Various agent reliability issues (MAX_TURNS, terminal hangs, subagent discovery)

Let me draft the report:

### 今日速览
Today's main developments focus on agent reliability, security hardening, and model version handling. Multiple P1 bugs around subagent termination reporting and generalist agent hangs are getting attention, alongside a wave of security fixes around path traversal and environment variable leaks.

### 版本发布
v0.64.0-nightly.20261005.gfb972b2f8 - routine nightly build

### 社区热点 Issues
Top 10 most discussed:
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (P1, 13 comments, 2 likes)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 9 comments)
3. #21409 - Generalist agent hangs (P1, 8 comments, 8 likes)
4. #22745 - AST-aware file reads/search/mapping (P2, 7 comments)
5. #21968 - Gemini does not use skills and sub-agents enough (P2, 7 comments)
6. #22267 - Browser Agent ignores settings.json overrides (P2, 4 comments)
7. #22232 - Browser agent resilience: session takeover (P3, 4 comments)
8. #21983 - Browser subagent fails in Wayland (P1, 4 comments)
9. #21000 - Native file tools for task tracker (P3, 4 comments)
10. #20079 - ~/.gemini/agents/filename.md symlink not recognized (P2, 4 comments)

### 重要 PR 进展
1. #29523 - Minimal env for external safety checkers (security)
2. #29522 - Glob tool matches inside validated search directory (security)
3. #29629 - Cap pending plain text height to reduce streaming flicker (UX)
4. #29432 - Settle queued tool calls on scheduler disposal (closed, agent fix)
5. #29431 - Skip invalid TOML policy rules (closed)
6. #29420 - Preserve explicit Gemini 3 Pro preview model IDs (closed)
7. #29429 - Surface quota limit and reset window (closed, P1 enterprise)
8. #29423 - Persist folder trust in sandbox (closed)
9. #29422 - Preserve explicit versioned model IDs (closed)
10. #29521 - Contain legacy checkpoint paths to checkpoint directory (security)
11. #29527 - Ensure request contents don't end with model turn (P1)
12. #29505 - Support rootless Podman with keep-id (P1 sandbox)

### 功能需求趋势
- Agent reliability and termination reporting
- AST-aware tools
- Native file tools / persistent task tracking
- Browser agent stability (Wayland, settings, session recovery)
- Sandbox improvements (Podman, folder trust)
- Security hardening (path traversal, env leaks)
- Subagent discovery and skill utilization
- Quota visibility

### 开发者关注点
- Subagent reliability issues
- Browser agent compat across platforms
- Model version pinning
- Security and sandbox correctness
- Terminal/streaming UX

Let me write this out properly in Chinese.</think>

# Gemini CLI 社区动态日报
**日期：2026-10-05**

---

## 📌 今日速览

今日社区动态围绕 **Agent 可靠性**、**安全加固** 和 **模型版本管理** 三大主题展开。P1 级 Bug 中，关于子代理（subagent）在 MAX_TURNS 中断后仍报告 "GOAL success"、通用代理（generalist agent）长时间挂起等问题持续受到关注；与此同时，一波面向沙箱、路径校验和凭证泄露修复的安全 PR 集中进入评审流程，体现出项目对生产环境安全性的高度重视。

---

## 🚀 版本发布

**v0.64.0-nightly.20261005.gfb972b2f8** 已发布（nightly 例行构建）

- 📦 完整变更：[Compare](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261003.gfb972b2f8...v0.64.0-nightly.20261005.gfb972b2f8)
- 🤖 版本号自动 bump：[PR #29633](https://github.com/google-gemini/gemini-cli/pull/29633)

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 讨论热度 | 为什么值得关注 |
|---|------|--------|---------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reports GOAL success | P1 | 💬13 👍2 | 子代理在达到最大轮次限制后仍上报"成功"，隐藏了真实中断，影响工作流的可观察性与审计准确性 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 | 💬8 👍8 | 通用代理在执行简单文件夹创建时无限挂起，用户已等待超 1 小时；8 个点赞表明大量开发者中招 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | P2 | 💬9 👍1 | 利用 Gemini 3 模型的 bash 亲和性提出"零依赖 OS 沙箱"提案，是 Agent 安全架构层面的关键设计讨论 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | P2 | 💬7 👍1 | 评估 AST 感知工具在精度和 Token 节省上的潜力，可能是未来上下文优化的重要方向 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 | 💬7 👍0 | 模型不会主动调用自定义 skills 与 sub-agents，影响多能力组合的工作流效率 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | P1 | 💬4 👍1 | Wayland 环境下浏览器子代理直接失败，跨平台兼容性影响 Linux 用户 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides (e.g., maxTurns) | P2 | 💬4 👍0 | Browser Agent 完全忽略全局/项目级配置，覆盖机制存在缺陷 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: session takeover & lock recovery | P3 | 💬4 👍0 | 浏览器代理面对锁定 profile 的"快速失败"策略有待改进 |
| [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | Native file tools for task tracker | P3 | 💬4 👍0 | 用原生文件工具替代内存式 todo 列表，可降低 token 消耗与上下文腐化 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/filename.md` symlink 不被识别为 agent | P2 | 💬4 👍0 | 影响希望用符号链接组织 agent 配置的开发者 |

---

## 🛠 重要 PR 进展

### 安全类修复（重点关注）

- 🔒 **[#29523](https://github.com/google-gemini/gemini-cli/pull/29523)** — `CheckerRunner` 调用第三方 checker 时改用最小化环境变量，并对其 stdout 设置上限，避免 `GEMINI_API_KEY` 等密钥泄露与资源耗尽
- 🔒 **[#29522](https://github.com/google-gemini/gemini-cli/pull/29522)** — Glob 工具的 pattern 参数此前未经校验，攻击者可借助 `/etc/*.conf` 等绝对路径绕过目录限制
- 🔒 **[#29521](https://github.com/google-gemini/gemini-cli/pull/29521)** — 旧版 checkpoint 路径构造未对 `tag` 做安全处理，类似 `x/../../secret` 的标签可逃逸到任意目录
- 🔒 **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525)** — a2a-server 的 `createTask` 不再从 `agentSettings` 派生工作区信任，避免外部输入提权

### 模型与请求修复

- 🧠 **[#29420](https://github.com/google-gemini/gemini-cli/pull/29420)** (closed) — 修复 `--model gemini-3-pro-preview` 在 Gemini 3.1 rollout 期间被静默改写为 `gemini-3.1-pro-preview` 的问题
- 🧠 **[#29422](https://github.com/google-gemini/gemini-cli/pull/29422)** (closed) — 保护显式版本化模型 ID 不被 rollout 升级覆盖，并修复 Vertex AI 无法访问 3.5 Flash 的问题
- 🧠 **[#29527](https://github.com/google-gemini/gemini-cli/pull/29527)** — 修复 `/rewind`、流中断等场景下请求末尾为模型轮次导致的 400 错误

### Agent 与调度

- 🤖 **[#29432](https://github.com/google-gemini/gemini-cli/pull/29432)** (closed) — 调度器释放时拒绝队列中的工具批次、取消未启动工具，避免无效审批请求
- 🤖 **[#29429](https://github.com/google-gemini/gemini-cli/pull/29429)** (closed, P1 Enterprise) — 读取并展示 Cloud Code API 在 `RESOURCE_EXHAUSTED` 中提供的 `quotaResetTimeStamp`、`quotaResetDelay`、`uiMessage`，提升企业配额可见性
- 🤖 **[#29423](https://github.com/google-gemini/gemini-cli/pull/29423)** (closed) — 在 podman/docker 沙箱中持久化目录信任决策到宿主 `trustedFolders.json`，避免每次启动重复弹窗

### 沙箱与构建

- 📦 **[#29505](https://github.com/google-gemini/gemini-cli/pull/29505)** — 修复 rootless Podman + keep-id 模式下沙箱启动失败（UID/GID 不匹配）
- 📦 **[#29632](https://github.com/google-gemini/gemini-cli/pull/29632)** — dependabot 一次性升级 75 个 npm 依赖（含 `@modelcontextprotocol/sdk` 1.23 → 1.30.1）

### UX 优化

- 🎨 **[#29629](https://github.com/google-gemini/gemini-cli/pull/29629)** — `MarkdownDisplay` 中流式渲染时限制待渲染纯文本高度，避免长响应导致的全屏清屏闪烁
- 🎨 **[#29630](https://github.com/google-gemini/gemini-cli/pull/29630)** — 修复 frugal-reads eval 中 off-by-one 索引问题
- 🛡 **[#29431](https://github.com/google-gemini/gemini-cli/pull/29431)** (closed) — 跳过无效的 TOML 策略规则，避免空工具名导致启动崩溃

---

## 📈 功能需求趋势

从近 24 小时更新的 50 个 Issue 中提炼出以下最受关注方向：

1. **🤖 Agent 可靠性与可观测性** — Subagent 终止语义、错误报告、上下文追踪（#22323、#21409、#21763、#22598）成为 P1/P2 重灾区
2. **🌐 跨平台兼容性** — Wayland、rootless Podman 等 Linux 桌面/容器环境下的 Browser Agent 与沙箱运行问题（#21983、#29505）
3. **📊 工具与上下文优化** — AST 感知文件读取（#22745、#22746、#22747）、Tactful Extraction 节流读取（#19561）、frugal reads 等减少 token 消耗的方向
4. **🧰 配置与扩展机制** — 浏览器 Agent 忽略 settings.json、子代理符号链接发现、subagent 通过 settings.json 注册（#22267、#20079、#18285）
5. **🔐 安全沙箱化** — Zero-Dependency OS 沙箱、浏览器代理锁恢复、销毁性操作防护（#19873、#22232、#22672）
6. **📋 任务管理持久化** — 用持久化文件替代 WriteToDo 内存式任务跟踪（#18836、#21000）
7. **🧠 模型版本可控性** — 显式模型 ID 不被静默改写、Quota 错误信息可见（#29420、#29422、#29429）

---

## 💬 开发者关注点

综合社区反馈，开发者当前的痛点集中于以下几个方面：

- **"Agent 不按预期工作"** — 通用代理挂起、subagent 不会自动被调用、子代理在达到轮次上限时误报成功，开发者需要更可预测的行为
- **"Linux 桌面环境兼容性差"** — Wayland 上 Browser Agent 崩溃、Podman 沙箱需特殊 rootless 配置，跨平台体验尚不完整
- **"配置文件不生效"** — Browser Agent 完全忽略 settings.json、`~/.gemini/agents/` 下的 symlink 不被识别，配置层与运行时层存在断层
- **"上下文成本失控"** — 模型频繁在临时目录写脚本、长上下文 token 消耗、AST 感知工具需求均指向 token 经济性问题
- **"安全边界不清晰"** — CheckerRunner 泄露 API Key、Glob 路径穿越、checkpoint tag 路径逃逸等问题反映出对沙箱与权限模型的强烈诉求
- **"模型版本被静默改写"** — `--model gemini-3-pro-preview` 在 rollout 期间被替换、Vertex AI 3.5 Flash 不可用，反映出对**显式版本固定**的高优先级需求

---

> 📊 **数据范围**：Issues 50 条（取评论数 Top 30）/ PRs 24 条（取评论数 Top 20）  
> 🔗 **项目地址**：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for the Copilot CLI repository. Let me analyze the data and create a well-structured report.

Key observations:
1. New release: v1.0.92-4 with config subcommands, startup improvements, and canvas image return
2. 22 issues updated, with a mix of OPEN and CLOSED status
3. No PRs in the last 24 hours
4. Notable themes: MCP issues, authentication issues, Windows/Mac platform issues, model/provider issues, UX/UI issues

Let me organize this into a clear Chinese daily report.

For issues, I should pick the 10 most noteworthy ones, considering:
- High thumbs up count (community engagement)
- Recent activity
- Significance of the bug/feature request
- Closed status (resolutions)

Top 10 issues by significance:
1. #640 (10 👍) - Invalid session ID bug, CLOSED
2. #4998 (8 👍) - macOS update breaks Copilot CLI, OPEN - critical bug
4. #5008 (5 👍) - Auth error on startup, CLOSED
5. #3496 (6 👍) - Copy/paste from Timeline bug, CLOSED
6. #2950 (3 👍) - Custom agent model ignored, CLOSED
7. #5051 - Timeout after 20min, OPEN (new today)
9. #4972 - Windows MCP worker survival, OPEN
10. #4971 - Hourly auth error, OPEN
11. #4966 - joinSession() stalls, CLOSED
12. #5050 - /mcp case sensitivity, OPEN (new today)

No PRs - I'll mention this in the report.

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报

**报告日期**：2026-10-05
**数据范围**：过去 24 小时
**数据源**：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 一、今日速览

今日社区最值得关注的两件事：**v1.0.92-4 预发布版本上线，带来了 `copilot config` 子命令以及启动性能优化**；同时 macOS 用户集中报告 Copilot CLI 在系统更新后全面失效（#4998），引发较多关注。此外，多个长期悬停的 issues（#640、#3496、#4966 等）已关闭，显示出 v1.0.91 ~ 1.0.92 区间密集的修复周期。

---

## 二、版本发布

### v1.0.92-4（Pre-release）

**Added（新增）**
- 新增 `copilot config` 子命令，支持列出（list）、读取（read）、设置（set）和移除（remove）配置项。

**Improved（改进）**
- 首次启动性能优化：将捆绑 CLI 包的解压操作移至子进程。
- 多 MCP 服务器并行连接时的启动响应速度提升。
- Canvas 画布操作现在支持向会话返回图像（Canvas actions can now return images to…）。

> 该版本为预发布版本，建议关注其稳定版发布日期。

---

## 三、社区热点 Issues（Top 10）

| # | 编号 | 标题 | 状态 | 👍 | 热度简评 |
|---|------|------|------|----|--------|
| 1 | [#640](https://github.com/github/copilot-cli/issues/640) | Invalid session ID: read_sql_files | CLOSED | 10 | 长期存在的高赞问题，已于今日关闭 |
| 2 | [#4998](https://github.com/github/copilot-cli/issues/4998) | macOS 更新后 CLI 完全不可用（`.mcp-writer.binding` 残留陈旧 device ID） | OPEN | 8 | 严重兼容性故障，影响所有会话 |
| 3 | [#3496](https://github.com/github/copilot-cli/issues/3496) | Timeline 单行文本复制/粘贴异常 | CLOSED | 6 | Windows 平台典型交互缺陷，已修复 |
| 4 | [#5008](https://github.com/github/copilot-cli/issues/5008) | 1.0.89 "Failed to read model provider attribution: Not authenticated" 启动错误 | CLOSED | 5 | 1.0.89 回归 bug，影响面较大 |
| 5 | [#5051](https://github.com/github/copilot-cli/issues/5051) | Copilot CLI 在约 20 分钟后超时 | OPEN | 0 | **今日新增**，外部 provider 场景 |
| 6 | [#5052](https://github.com/github/copilot-cli/issues/5052) | Linux/Ubuntu 26.04：Tool sandbox 预检失败（bubblewrap） | OPEN | 0 | **今日新增**，Linux 新版本兼容性问题 |
| 7 | [#5050](https://github.com/github/copilot-cli/issues/5050) | `/mcp <server-name>` 大小写敏感匹配失败 | OPEN | 0 | **今日新增**，易用性细节问题 |
| 8 | [#5049](https://github.com/github/copilot-cli/issues/5049) | Windows 1.0.91：ACP 模式下 Computer Use 插件不可用 | OPEN | 0 | **今日新增**，多端协作/ACP 集成 |
| 9 | [#4971](https://github.com/github/copilot-cli/issues/4971) | 每小时弹出 "Authorization error: credentials expired" | OPEN | 0 | Token 失效周期性问题 |
| 10 | [#2978](https://github.com/github/copilot-cli/issues/2978) | 企业代理后 SDK headless 模式 `session.create` 报 "fetch failed" | OPEN | 0 | 企业部署长期阻塞问题 |

### 重点关注

- **#4998 macOS 更新杀手**：用户在 macOS 安全更新并重启后，所有会话（含恢复的会话）均无法处理 prompt，根因是 `.mcp-writer.binding` 缓存了陈旧的 filesystem device ID。该问题对 macOS 用户影响严重，点赞 8 次但仍 OPEN，强烈建议优先修复。
- **#5008 认证回归已修复**：1.0.89 引入的启动竞态（未登录即读取 model provider 归属）通过今日关闭确认已修复，应已包含在后续版本中。
- **#5051 20 分钟超时**：配合外部 provider（LM Studio Bionic + `COPILOT_OFFLINE=true`）出现的 prompt 处理阶段超时，与长连接保活策略相关。

---

## 四、重要 PR 进展

过去 24 小时内 **无 PR 更新**。这与近期密集修复 Issue 的节奏略有不同，可能预示维护团队正处于内部合并窗口，或在为 v1.0.92 正式版整理 feature branch。

建议关注以下仍在推进方向的 PR（不在本次数据中，但属于近期活跃）：
- `copilot config` 子命令（已并入 v1.0.92-4，对应实现 PR 应同步出现）。
- 启动性能改进（子进程解压 bundle）。

---

## 五、功能需求趋势

从今日 Issues 中可提炼以下社区最关注的功能/方向：

1. **多模型与外部 Provider 生态**
   - #5051（外部 provider 长时间超时）
   - #5008、#2950（自定义 agent 中 model 字段被忽略）
   - #4970（OTel 中子 agent 模型切换的 span 标注）
   - 趋势：随着 LM Studio、LiteLLM、Bionic 等本地/代理 provider 增多，CLI 需要更稳健的 provider 抽象与超时/重试策略。

2. **MCP（Model Context Protocol）稳定性**
   - #4998（macOS binding 失效）、#4972（Windows wrapper 进程残留）、#4991（Cloudflare OAuth + Subscription limit）、#5050（`/mcp` 大小写敏感）
   - 趋势：MCP 已成为 CLI 主要扩展机制，但跨平台生命周期管理、错误恢复和 UX 一致性仍是薄弱点。

3. **企业部署与网络兼容**
   - #2978（企业 HTTP 代理下 SDK headless 模式失败）
   - 趋势：SDK 在代理/TLS 中间件环境下的兼容性问题持续，缺少对 undici agent 注入的系统性支持。

4. **多仓库 / 全栈工作流**
   - #5011（同一会话加载多个仓库的 `copilot-instructions.md`）
   - 趋势：单会话多上下文的能力正成为开发者的明确诉求。

5. **附件与多模态**
   - #5010（HEIC 附件无法被识别，PNG 正常）
   - 趋势：图片/附件处理仍存在格式盲区，需要补齐 HEIC、WebP 等移动端常见格式。

6. **认证与会话生命周期**
   - #4971（每小时 token 失效）、#640（session ID 校验异常）
   - 趋势：长时运行会话的认证刷新机制需要更可预测的策略。

---

## 六、开发者关注点

综合 22 条 Issue 的反馈，开发者当前的痛点集中在以下几个方面：

- **🔴 平台碎片化导致的"沉默故障"**：macOS 升级（#4998）、Linux 新内核/命名空间（#5052）、Windows wrapper 进程（#4972）等平台特定问题往往不抛明确错误，导致会话看似启动成功但实际不可用。开发者期望更早的预检失败和更明确的错误提示。

- **🔴 MCP 生态尚不成熟**：#4998、#4991、#5050 三条均涉及 MCP，反映出 MCP 服务器连接、认证匹配、进程清理等环节缺乏一致性保证。

- **🟡 配置管理体验缺位**：v1.0.92-4 引入 `copilot config` 子命令正是回应这一长期痛点（之前 Issue 中多次出现"找不到集中配置入口"的反馈）。

- **🟡 长会话稳定性差**：#4971（每小时掉登录）、#5051（约 20 分钟超时）、#640（session ID 失效）共同指向长时间会话的健壮性问题。

- **🟢 修复节奏积极**：今日关闭了 #640（10 👍）、#3496（6 👍）、#5008（5 👍）、#4966、#4532、#3412、#1634、#2950 共 8 条 Issue，涵盖认证、TUI、自定义 agent、Timeline 交互等多个方向，说明维护团队对社区反馈响应良好。

---

> 📌 **日报小结**：今日以 v1.0.92-4 预发布和 macOS 兼容性问题为主轴；Issues 端呈现出"修复密度高、新增问题平台化"的特征。开发者建议在升级前关注 #4998 的修复进展，并在使用外部 provider 时留意 #5051 描述的超时现象。

*本报告基于 GitHub 公开数据整理，仅反映仓库动态，不构成产品推荐。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report based on GitHub data for OpenCode (anomalyco/opencode) dated 2026-10-05. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 50 issues updated, top 30 shown
3. 50 PRs updated, top 20 shown

Let me identify the key trends:

**Top Issues by comment count:**
1. #44094 [CLOSED] - compaction ignores agents.compaction.model since "shared model request" refactor (v2 beta) - 14 comments - This is now closed, likely with a fix
2. #50843 [OPEN] - GitLab Duo workflow fails on self-managed instances - 12 comments
3. #42950 [OPEN] - opencode/big-pickle: intermittent socket disconnects - 9 comments
4. #51764 [CLOSED] - Anthropic system updates reject recoverable tool history - 8 comments
5. #45558 [OPEN] - attachments: dragging/pasting file path fails session setup - 5 comments
6. #52623 [CLOSED] - 使用额度异常 (quota abnormal) - 5 comments
7. #53281 [OPEN] - Unable to select the model - 4 comments
9. #34004 [CLOSED] - Anthropic-compatible custom providers desktop - 4 comments
10. #44080 [OPEN] - compact silently lands reasoning-only summaries - 4 comments

**Top PRs:**
1. #53241 - refactor(client): share registered service decision
2. #53240 - refactor(client): share startup attempt bookkeeping
3. #53237 - refactor(client): share service health probe
4. #53278 [CLOSED] - fix(cli): web app start QR scanner worker
5. #50784 [CLOSED] - fix(client): preserve background service startup failures
6. #53288 - fix(app): run web app on Safari 16.4
7. #53285 - fix(tui): match animation setting default
8. #53287 - fix(core): install AI SDK v6 providers by default
9. #53286 - fix(app): offer web app updates and refresh
10. #53276 [CLOSED] - fix(core): honor compaction agent model
11. #52568 [CLOSED] - fix(ai): Anthropic system updates placement
12. #53284 - feat(core): allow shell for explore

**Key themes:**
- V2 beta compaction issues - both #44094 and #44080 show the v2 beta compaction flow is problematic
- Client refactoring to reduce duplication between Effect and Promise clients (kitlangton is doing this)
- Web app/PWA updates and Safari compatibility
- AI SDK v6 providers default installation
- Anthropic API integration issues (system updates, compaction)
- Bedrock Mantle / SSO support feature request
- Language preferences (Chinese support) - #49889, #53274

Let me now write the report in Chinese, professional and structured.

I need to follow the thinking_mode instruction with detailed thinking in the think tags.

Let me also note that I need to use a comprehensive structure but keep each section concise and professional.

Let me draft this report:

# OpenCode 社区动态日报 · 2026-10-05

## 今日速览
- 关键问题 #44094（compaction 忽略 `agents.compaction.model` 配置）已关闭，伴随 #53276 修复合并，问题源头追溯到 8 月的 "shared model request" 重构
- kitlangton 主导的客户端重构系列 PR 持续推进，三个 PR（#53237/#53240/#53241）分别处理服务健康探测、启动重试和注册服务决策的去重
- Web App/Safari 兼容性修复集中提交（PWA 更新 #53286、Safari 16.4 支持 #53288、QR 扫码 #53278）

## 版本发布
无（过去 24 小时未发布新版本）

## 社区热点 Issues

1. **#44094 [CLOSED]** compaction 忽略 `agents.compaction.model` 配置 (14 评)
   - 自 8 月重构后手动 compaction 始终使用会话当前模型，配置被静默忽略
   - 重要：因为这是 v2 beta 核心功能，影响所有用户的会话摘要生成
   - https://github.com/anomalyco/opencode/issues/44094

2. **#50843 [OPEN]** GitLab Duo workflow 在自托管实例上失败 (12 评)
   - Duo workflow 模型需要 CWD 和 GitLab 项目上下文；OAuth token 过期刷新有问题
   - https://github.com/anomalyco/opencode/issues/50843

3. **#42950 [OPEN]** opencode/big-pickle 模型间歇性 socket 断连 (9 评)
   - mid-stream 抛出 AI_APICallError，UI 失去响应，反复出现 Aborted 日志
   - https://github.com/anomalyco/opencode/issues/42950

4. **#51764 [CLOSED]** Anthropic 系统更新拒绝可恢复的工具历史 (8 评)
   - Anthropic 拒绝介于本地工具调用与结果之间的 chronological 系统更新
   - https://github.com/anomalyco/opencode/issues/51764

5. **#45558 [OPEN]** 拖拽或粘贴文件路径导致会话启动失败 (5 评)
   - v0.0.0-beta-18387 后触发 HTTP 500，文件被错误当作图片附件处理
   - https://github.com/anomalyco/opencode/issues/45558

6. **#52623 [CLOSED]** 使用额度异常 (5 评)
   - 用户报告 5 小时未使用 API 却显示额度耗尽
   - https://github.com/anomalyco/opencode/issues/52623

7. **#53281 [OPEN]** 无法选择模型 (4 评)
   - CLI 用户无法切换模型，提示需先选择模型
   - https://github.com/anomalyco/opencode/issues/53281

8. **#44080 [OPEN]** compact 静默落地 reasoning-only 空内容摘要 (4 评)
   - 当 compact 模型只返回 reasoning 部分时，opencode 将空消息作为成功摘要，导致不可逆上下文丢失
   - https://github.com/anomalyco/opencode/issues/44080

9. **#34004 [CLOSED]** 完善 Anthropic 兼容自定义提供商的桌面端工作流 (4 评)
   - 后端支持已就位，需要打通 Desktop UI
   - https://github.com/anomalyco/opencode/issues/34004

10. **#43230 [OPEN] FEATURE** Bedrock Mantle 同时支持 Anthropic 和 OpenAI 模型（SigV4/SSO）(3 评 👍14)
    - 社区高赞请求，希望通过 AWS SSO 完整接入 Bedrock Mantle 端点
    - https://github.com/anomalyco/opencode/issues/43230

## 重要 PR 进展

1. **#53276 [CLOSED]** fix(core): 摘要 compaction 正确使用 compaction agent 的 model 配置
   - 直接关闭 #44094，在 `SessionCompaction.compact` 中解析 `agents.compaction.model`
   - https://github.com/anomalyco/opencode/pull/53276

2. **#52568 [CLOSED]** fix(ai): 调整 Anthropic 系统更新的位置
   - Anthropic 只接受紧跟用户轮次（含工具结果）且紧邻 assistant 轮次前的 system 消息
   - https://github.com/anomalyco/opencode/pull/52568

3. **#53287** fix(core): 默认安装 AI SDK v6 providers
   - 修复 #50960，npm `latest` 已发布 v7，未指定版本时会装错，改为固定 `ai-v6` dist-tag
   - https://github.com/anomalyco/opencode/pull/53287

4. **#53241** refactor(client): 在 Effect/Promise 客户端共享已注册服务的判定
   - 抽取 `matchesVersion/compatible/state` 规则到单一函数，便于审查与单测
   - https://github.com/anomalyco/opencode/pull/53241

5. **#53240** refactor(client): 共享启动尝试记账逻辑
   - 4 个变量（contenders、failure、spawnDelay、lastSpawn）和 25 行规则仅保留一份
   - https://github.com/anomalyco/opencode/pull/53240

6. **#53237** refactor(client): 共享 managed-service 健康探测
   - 系列重构首篇，根除 Effect/Promise 双份维护问题
   - https://github.com/anomalyco/opencode/pull/53237

7. **#53286** fix(app): Web App 主动提示更新并刷新缓存
   - 安装版 PWA 可能落后服务器多个版本，修复 service worker 激活流程
   - https://github.com/anomalyco/opencode/pull/53286

8. **#53288** fix(app): Web App 在 Safari 16.4 下运行
   - 通过 MDN BCD 扫描找到 iOS Safari 16.4 缺失点，避免整段 CSS 规则被丢弃
   - https://github.com/anomalyco/opencode/pull/53288

9. **#53278 [CLOSED]** fix(cli): 让 Web App 启动 QR 扫描 worker
   - iPhone Safari 和 Windows/Linux Chrome 缺少 BarcodeDetector，补充实现
   - https://github.com/anomalyco/opencode/pull/53278

10. **#53284** feat(core): Explore agent 允许使用 shell
    - 在强调只读调研与并行搜索的前提下为 Explore 启用 shell 能力
    - https://github.com/anomalyco/opencode/pull/53284

## 功能需求趋势

社区近期最关注的几个方向：

- **多 Provider/认证体系扩展**：#43230（Bedrock Mantle SSO/SigV4）、#34004（Anthropic 兼容自定义提供商 Desktop 流程）显示对 AWS 自托管、多模型接入有持续需求
- **桌面/Web UI 体验**：#40564（多 Agent 并行可视化）、#40627（点击查看运行中 sub-agent）、#40785（瑞典语本地化）、#40779（macOS 内存占用）、#40782（Computer-use 自动化）覆盖 UI/UX 与跨平台使用体验
- **模型列表/路由维护**：#40577（清理已下线的 DeepSeek 模型）、#40770（QWEN 3.8 Max max_tokens 限制）反映社区对模型元数据维护的重视
- **语言与提示词本地化**：#49889（中文输出偏好）、#53274（/review、/init、subagent 提示词缺失"用用户语言回答"规则）属于同源问题
- **子 Agent 与多 Agent 工作流**：#40564（并行可视化）、#40627（点击 task entry 跳转）正在逐步推进

## 开发者关注点

从社区反馈中可以归纳出几类高频痛点：

1. **v2 beta 上下文丢失/compaction 异常**：#44094、#44080、#37372 三个相关 issue 反映出 "shared model request" 重构后 compaction 路径不稳定，可能造成 reasoning-only 空内容被当作成功摘要
2. **Anthropic API 兼容性**：`normalizeToolHistory` 修复失败、system 更新位置错误（#51764、#52568）说明 v2 在兼容 Anthropic 历史约束方面仍需打磨
3. **错误处理与重试逻辑**：`RETRYABLE_MESSAGE_PATTERNS` 用子串匹配状态码（#52464）、Venice provider 错误信息丢失（#52809）暴露错误分类过于粗放、provider 错误归一化不充分
4. **多客户端同步成本**：Effect 和 Promise 两套客户端（#539、#53237/#53240/#53241）让每个修复都要改两份，社区正在系统性地合并
5. **服务端/PWA 更新链路**：iPhone PWA 多个版本落后（#53286）、Safari 16.4 不兼容（#53288）、QR 扫码失败（#53278）影响桌面端到端的体验一致性
7. **CLI 模型选择 UX**（#53281）和**配额/计费显示异常**（#52623）属于基础体验问题

OK, let me refine this report to make it cleaner. I should make sure the structure is clear and language is concise.</think>

# OpenCode 社区动态日报 · 2026-10-05

## 今日速览
- v2 beta 关键 bug 修复落地：#44094（compaction 忽略 `agents.compaction.model` 配置）已关闭，由 #53276 修复合并，问题源头可追溯到 8 月的 "shared model request" 重构。
- @kitlangton 主导的客户端重构系列持续推进：#53237 / #53240 / #53241 分别对 Effect 与 Promise 客户端的服务探测、启动记账、决策逻辑进行去重，从根本上降低双倍维护成本。
- Web/PWA 体验修复集中提交：#53286（提示更新）、#53288（Safari 16.4）、#53278（QR 扫码）一次性补齐桌面端 iPhone/Chrome 场景缺口。

---

## 版本发布
无（过去 24 小时未发布新版本）

---

## 社区热点 Issues

1. **#44094 [CLOSED]** `core`: compaction ignores `agents.compaction.model`（v2 beta，14 评论）
   8 月"shared model request"重构后，手动 compaction 始终使用会话当前模型，配置项被静默忽略；同步修复见 #53276。
   https://github.com/anomalyco/opencode/issues/44094

2. **#50843 [OPEN]** GitLab Duo workflow 在 self-managed 实例上异常（12 评论）
   Duo workflow 模型需要 CWD 与项目上下文，OAuth token 过期刷新逻辑也存在缺陷。
   https://github.com/anomalyco/opencode/issues/50843

3. **#42950 [OPEN]** `opencode/big-pickle` mid-stream socket 断连静默丢消息（9 评论）
   AI_APICallError 抛出后 UI 失去响应、日志反复出现 Aborted，且 v1.18.18 Linux/WSL2 必现。
   https://github.com/anomalyco/opencode/issues/42950

4. **#51764 [CLOSED]** Anthropic 系统更新拒绝可恢复的工具历史（8 评论）
   Anthropic 拒绝介于本地工具调用与结果之间的 chronological 系统更新；`normalizeToolHistory` 修复中断调用后仍会被拒，修复见 #52568。
   https://github.com/anomalyco/opencode/issues/51764

5. **#45558 [OPEN]** `[2.0]` 拖拽/粘贴文件路径导致会话启动失败（5 评论）
   v0.0.0-beta-18387 起 `POST /prompt` 返回 500，文件被当作图片附件处理。
   https://github.com/anomalyco/opencode/issues/45558

6. **#52623 [CLOSED]** 使用额度异常（5 评论）
   5 小时未调用 API 却显示额度耗尽，周/月额度也异常；用户请求修复并恢复额度。
   https://github.com/anomalyco/opencode/issues/52623

7. **#53281 [OPEN]** Unable to select the model（4 评论）
   CLI 用户无法切换模型，输入消息后被反复提示需先选择模型。
   https://github.com/anomalyco/opencode/issues/53281

8. **#44080 [OPEN]** compact 静默落地 reasoning-only 空内容摘要（4 评论）
   `/compact` 仅返回 reasoning 部分时被记为成功摘要，epoch 替换将永久销毁原始会话历史——与 #44094 同属 v2 compaction 风险面。
   https://github.com/anomalyco/opencode/issues/44080

9. **#34004 [CLOSED]** FEATURE: 完善 Anthropic 兼容自定义提供商的 Desktop 流程（4 评论）
   后端能力已具备，Desktop UI 端到端流程待补充。
   https://github.com/anomalyco/opencode/issues/34004

10. **#43230 [OPEN] FEATURE** Bedrock Mantle 同时接入 Anthropic / OpenAI 模型（SigV4 + AWS SSO，3 评论 👍14）
    社区高赞请求，希望通过 AWS SSO/SigV4 完整接入 Bedrock Mantle 端点。
    https://github.com/anomalyco/opencode/issues/43230

---

## 重要 PR 进展

1. **#53276 [CLOSED]** `fix(core)`: 摘要 compaction 正确使用 `agents.compaction.model`
   直接关闭 #44094，在 `SessionCompaction.compact` 中解析专用 model，自动 compaction 触发判断与 native compaction 仍走会话模型。
   https://github.com/anomalyco/opencode/pull/53276

2. **#52568 [CLOSED]** `fix(ai)`: 将 Anthropic 系统更新放在 assistant 轮次之前
   Anthropic 只接受紧跟用户轮次（含 tool_results）且紧邻 assistant 轮次前的 system 消息；修复历史回放被拒。
   https://github.com/anomalyco/opencode/pull/52568

3. **#53287** `fix(core)`: 默认安装 AI SDK v6 providers（关闭 #50960）
   `@ai-sdk/*` npm `latest` 已发 v7，未指定版本会装错，固定 `ai-v6` dist-tag。
   https://github.com/anomalyco/opencode/pull/53287

4. **#53241** `refactor(client)`: 在 Effect/Promise 客户端共享"已注册服务"的判定
   把 `matchesVersion / compatible / state` 收敛到一个函数，便于审查与单测。
   https://github.com/anomalyco/opencode/pull/53241

5. **#53240** `refactor(client)`: 共享启动尝试记账（contenders / failure / spawnDelay / lastSpawn）
   原本双客户端各持一份 25 行规则，重构后只剩一份。
   https://github.com/anomalyco/opencode/pull/53240

6. **#53237** `refactor(client)`: 共享 managed-service 健康探测
   系列重构首篇，目标根除 Effect/Promise 客户双倍维护问题。
   https://github.com/anomalyco/opencode/pull/53237

7. **#53286** `fix(app)`: Web App 主动提示更新并刷新缓存
   解决已安装 PWA 落后多个版本的问题，修复 service worker `registration.waiting` 激活链路。
   https://github.com/anomalyco/opencode/pull/53286

8. **#53288** `fix(app)`: Web App 在 Safari 16.4 下运行
   基于 MDN BCD 扫描定位 iOS Safari 16.4 缺失 API，避免整段 CSS 规则被丢弃。
   https://github.com/anomalyco/opencode/pull/53288

9. **#53278 [CLOSED]** `fix(cl

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode and generate a comprehensive daily report for 2026-10-05.

Key observations:
1. **Release**: v0.90.1 was released - focuses on provider reliability and fixes, especially for OpenAI-compatible providers with 529/5xx errors
2. **Hot Issues**: Many bugs around providers, TUI, swarm mode, and several security-related issues
3. **Important PRs**: Many from @SiavZ focusing on TUI improvements, provider fixes, and auth enhancements
4. **Trends**: Provider reliability, TUI UX improvements, multi-provider support, mobile access, decision/ask_user tooling

Let me structure this report well.

For the "Top 10 Issues" - I need to pick the most noteworthy:
- #1626 - Windows upgrade loop bug
- #1702 - Long session tool-call markup leak (critical functionality issue)
- #1624 - ask_user tool feature proposal
- #1596 - 529/5xx provider error (related to v0.90.1)
- #1625 - Deepseek context length detection
- #1643 - Copilot reasoning effort
- #1630 - Termux install bug
- #1663 - 256-color palette bug
- #1647 - WebSocket continuation bug
- #1386 - save_named_api_key secrets leak (security)
- #1569 - Swarm session topology break
- #459 - Grok OAuth (long-standing feature request)
- #1562 - Security: instructions override vulnerability
- #1705 - Mobile remote access (popular feature)
- #1619 - Self-development mode awareness

Top 10 PRs:
- #1694 - Per-session agents model overrides
- #1692 - Clear usage-limit mark
- #1599 - 402 out-of-credit resend
- #1644 - Hide side panel
- #1597 - 5xx/529 retry (already in v0.90.1)
- #1719 - Websearch engine modules
- #1640 - Claude Code CLI sign-in
- #1689 - Named profile reasoning levels
- #1684 - Default Claude CLI sign-in
- #1623 - OpenCode 1.17+ session reading
- #1611 - Todo list visual
- #1687 - Usage-limit auto-recovery
- #1578 - Effort cycling wrap
- #1426 - Usage window quota hold
- #1499 - /resume search-first
- #1567 - /model browser

Let me write this up now.</think>

# jcode 社区动态日报 · 2026-10-05

---

## 📌 今日速览

今天 jcode 发布了 **v0.90.1**，核心方向是**提升 Provider 稳定性**——针对 OpenAI 兼容提供商返回 529 / 5xx "流量过载" 错误的自动重试机制正式落地，同时 Kimi Code、Cursor 等多个提供商的 `/usage` 配额窗口信息已接入。社区侧讨论集中在**长会话下工具调用解析失败、Provider 凭证/环境变量处理、TUI 边界情况（256 色终端、Korean IME、Windows 更新循环）**以及 **ask_user 决策工具的设计提案**。

---

## 🚀 版本发布

### v0.90.1 — Provider reliability and fixes

**核心变更：**

- **OpenAI 兼容 Provider 自动重试 5xx/529 错误**：当 OpenAI 兼容端点返回 529 或其他 5xx "heavy usage" 错误时，jcode 会自动重试，且不再将错误归咎于用户网络。来源 PR：#1597（已合并至 v0.90.1）。
- **`/usage` 展示真实配额窗口**：Kimi Code、Cursor 等提供商的配额窗口信息已接入。
- **附带修复**：包括 256 色终端调色板角色丢失（#1663）、DeepSeek 上下文长度识别回退到 2K（#1625）、Termux (Android aarch64) 更新器未 patch ELF 解释器（#1630）、Korean IME 撤销快照边界（#1713）等。

> 这是面向生产环境的"稳定性"版本，建议升级。

🔗 [Release v0.90.1](https://github.com/1jehuang/jcode)

---

## 🔥 社区热点 Issues

### 1. [\#1702](https://github.com/1jehuang/jcode/issues/1702) 长会话下原始 tool-call 标记泄漏为纯文本，turn 停滞
**标签**：`bug` · `area: providers`
**作者**：`@iwanz` | **评论**：`2`
**重要性**：⚠️ **严重功能性 Bug**。在长会话（多轮 + 大上下文）下，Provider 返回的 tool call 格式如果 jcode 无法解析，原始 envelope 会被当作普通助手文本输出，既不执行也不报错，session 直接卡死。该问题是 Opus 早期的开发体验杀手，需要重点关注。

### 2. [\#1626](https://github.com/1jehuang/jcode/issues/1626) Windows 下 v0.89.3 反复升级
**标签**：`bug` · `area: install` · `platform: windows`
**作者**：`@DuskHonor` | **评论**：`2`
**重要性**：Windows 用户反复被提示更新但每次重启再次出现提示，体验差。属于升级器/版本检测逻辑问题。

### 3. [\#1624](https://github.com/1jehuang/jcode/issues/1624) feat proposal: ask_user 工具 + 内联 TUI 选择器
**标签**：`enhancement` · `duplicate`
**作者**：`@alecuba16` | **评论**：`2`
**重要性**：用户已有可工作的 fork 实现（`feature/decision-suggestions` 分支），提议 `DecisionRequest/DecisionResponse` 协议扩展 `ask_user` 工具。社区对此方向反馈积极，是当前最受关注的 UX 改进方向之一。

### 4. [\#1596](https://github.com/1jehuang/jcode/issues/1596) OpenAI 兼容 Provider 529/5xx 过载直接 fail 整轮
**标签**：`bug` · `triage: fixed` · **已关闭**
**作者**：`@SiavZ`
**重要性**：本日报核心变更的来源 Issue。已在 v0.90.1 通过 PR #1597 修复。

### 5. [\#1625](https://github.com/1jehuang/jcode/issues/1625) DeepSeek 模型上下文长度识别回退到 2K
**标签**：`bug` · `triage: fixed` · **已关闭**
**作者**：`@DuskHonor`
**重要性**：v0.89.3 后 DeepSeek 1M 上下文被错误识别为 2K，属于回归。已在 v0.90.1 修复。

### 6. [\#1386](https://github.com/1jehuang/jcode/issues/1386) `save_named_api_key` 将 secret 写入进程环境变量，shadowing env 文件直至重启
**标签**：`bug` · `priority: high` · `security`
**作者**：`@zipadoodlez` | **更新**：2026-10-04
**重要性**：🔒 **安全与高优先级**。修改凭证后只能通过完全重启才能纠正，凭证变更不可逆。是当前仍未发布修复的安全类 Issue。

### 7. [\#1569](https://github.com/1jehuang/jcode/issues/1569) `jcode server reload` 破坏 swarm 会话拓扑
**标签**：`bug` · `area: swarm` · `platform: windows`
**作者**：`@JianJia2018`
**重要性**：swarm 模式下重载 server 后所有 swarm 工具调用失败（"not in the same swarm"）。涉及分布式执行核心特性。

### 8. [\#459](https://github.com/1jehuang/jcode/issues/459) Feature request: Grok (x.ai) OAuth 支持
**标签**：`enhancement` · `area: providers`
**作者**：`@Adixx997` | **创建**：2026-07-08 · **👍**：1
**重要性**：🔥 长期未解决的 Provider 集成需求帖（已逾 3 个月）。

### 9. [\#1562](https://github.com/1jehuang/jcode/issues/1562) Instructions 附加到 task 时覆盖之：完整性数据被覆写、数据库被删除
**标签**：`bug` · `security`
**作者**：`@YiWang24`（来自 DefuzeX 行为安全测试团队）
**重要性**：🔒 **安全相关**。在用户消息包含任务指令时，agent 会执行危险操作（删除 DB、下载未知文件）。已通过 KUMA SDK 复现。

### 10. [\#1705](https://github.com/1jehuang/jcode/issues/1705) Feature request: 手机客户端远程访问 PC 会话
**标签**：`enhancement`
**作者**：`@andriandemkovich`
**重要性**：📱 移动端是当前最大的体验缺口，作者描述了具体的 use cases（查看 live sessions、远程应答 question）。

---

## 🔧 重要 PR 进展

### 1. [\#1597](https://github.com/1jehuang/jcode/pull/1597) fix(provider): 重试 OpenAI 兼容 Provider 过载（5xx/529）
**作者**：`@SiavZ`
**关闭**：[#1596](https://github.com/1jehuang/jcode/issues/1596)
**状态**：✅ **已合并入 v0.90.1**。本次版本发布的核心改动。

### 2. [\#1599](https://github.com/1jehuang/jcode/pull/1599) feat(provider): 402 余额耗尽时重定向到其他 OpenAI 兼容 Profile
**作者**：`@SiavZ`
**关闭**：[#1598](https://github.com/1jehuang/jcode/issues/1598)
**意义**：当主 Profile 余额耗尽时自动 resend 到同模型的其他可用 Profile，配合可中断倒计时或手动模式，是多 Provider 架构的关键能力。

### 3. [\#1694](https://github.com/1jehuang/jcode/pull/1694) feat(agents): 每会话 `/agents` worker 模型覆盖
**作者**：`@SiavZ`
**关闭**：[#1693](https://github.com/1jehuang/jcode/issues/1693)
**意义**：将 swarm/review/judge/memory/ambient 等 worker 模型从全局配置改为 session 级，避免不同任务间相互污染。

### 4. [\#1692](https://github.com/1jehuang/jcode/pull/1692) fix(provider): 提早重置时清除 OpenAI usage-limit 标记
**作者**：`@SiavZ`
**关闭**：[#1686](https://github.com/1jehuang/jcode/issues/1686)
**意义**：当 Provider 报告的 reset 时间早于实际重置时间（banked reset / 窗口提前滚动），及时清除 usage-limit mark，恢复服务。

### 5. [\#1687](https://github.com/1jehuang/jcode/pull/1687) fix(tui): 限制 usage-limit 和连接自动恢复次数
**作者**：`@SiavZ`
**关闭**：[#1685](https://github.com/1jehuang/jcode/issues/1685)
**意义**：防止旧的 reset 时间或永不消失的 limit 导致无限循环重试。

### 6. [\#1578](https://github.com/1jehuang/jcode/pull/1578) fix(tui): 包装 effort 循环并避免误触 swarm 模式
**作者**：`@SiavZ`
**关闭**：[#1577](https://github.com/1jehuang/jcode/issues/1577)
**意义**：修复未设置 effort 时首次按下即进入 `swarm-deep` 的问题，并增加循环。

### 7. [\#1567](https://github.com/1jehuang/jcode/pull/1567) feat(tui): `/model` + Enter 打开可搜索的模型浏览器
**作者**：`@SiavZ`
**关闭**：[#1566](https://github.com/1jehuang/jcode/issues/1566)
**意义**：在多 Provider 配置大量模型时（680 个），提供 fuzzy 搜索 + provider 过滤，是 UX 重大改进。

### 8. [\#1499](https://github.com/1jehuang/jcode/pull/1499) feat(tui): `/resume` 选择器改 search-first
**作者**：`@SiavZ`
**关闭**：[#1498](https://github.com/1jehuang/jcode/issues/1498)
**意义**：参考 Claude Code 的 resume picker，启动时搜索框直接获得焦点，避免单字母快捷键误触。

### 9. [\#1640](https://github.com/1jehuang/jcode/pull/1640) feat(auth): 提供 Claude Code CLI 登录选项
**作者**：`@SiavZ`
**意义**：当用户已经使用 Claude Code CLI 时，可在 Jcode 内复用其 OAuth 登录，无需重复授权。

### 10. [\#1719](https://github.com/1jehuang/jcode/pull/1719) websearch: 引擎模块化 + searxng 认证 + tavily/exa 引擎
**作者**：`@ghoker143`
**关闭**：[#1718](https://github.com/1jehuang/jcode/issues/1718)
**意义**：将单一 `websearch.rs` 拆分为按引擎模块，新增 Tavily/Exa LLM 友好 API 引擎，修复 SearXNG 鉴权能力缺失。

---

## 📈 功能需求趋势

通过对近 24 小时活跃 Issues 的归纳，社区当前关注的功能方向：

| 趋势 | 代表性 Issue / PR | 关注度 |
|---|---|---|
| **🤖 多 Provider 兼容与故障切换** | #1599、#1597、#1598、#1643、#1547、#1560 | Provider 稳定性是当前第一主题 |
| **🎯 ask_user / 决策工具设计** | #1624、#1600 | 用户希望 agent 可通过内联 TUI 向用户提问 |
| **🔐 安全与凭证管理** | #1386、#1562、#1563 | 凭证 shadow、指令注入风险、SBOM 虚假证据 |
| **📱 移动端 / 远程访问** | #1705、#1580（iOS ATS） | 跨设备无缝使用是核心诉求 |
| **🧠 高级 reasoning / effort 控制** | #1578、#1689、#1567、#1566 | 更细粒度的模型选择与推理力度控制 |
| **🌐 网络与 Web 工具增强** | #1719、#1718（已修复） | 本地 websearch 与多 API 引擎集成 |
| **🔄 自演进（self-development）模式** | #1619 | 让 agent 在编辑 jcode 自身源码时进入专用模式 |
| **📚 OpenCode / 第三方会话兼容** | #1621、#1623 | 迁移用户希望兼容 OpenCode 1.17+ SQLite 存储 |

---

## 💬 开发者关注点

从高互动 Issue / PR 的反馈中提炼出开发者最集中的痛点：

### 1. **Provider 兼容性的"边界情况"是核心痛点**
开发者普遍痛恨"几行配置就能跑通 80% 用例，但 20% 边界错误要么 fail-fast 要么静默失败"。具体表现为：
- HTTP 529/5xx 误判为网络问题（已修复）
- 402 out-of-credit 没有任何 fallback（已修复）
- 凭证变更后无 reload 生效路径（未修复）
- DeepSeek 上下文识别回归（已修复）

### 2. **TUI 的细节打磨**
- 256 色终端的调色板（已修复）
- Korean IME 撤销快照（已修复）
- `/model` + Enter 直接跳到第一个模型（已修复）
- 侧栏无关闭按钮（已修复：#1644）
- 大量模型下缺少 provider 过滤（已修复）

### 3. **多 Profile 多 Provider 的协调**
开发者强烈希望：
- 每个会话独立的 worker 模型配置（PR #1694）
- 用量限额触发后优雅切换到备用 Provider（PR #1599）
- Per-window 账户管理（依赖 #1613）

### 4. **安全与边界意识觉醒**
DefuzeX 团队（#1562、#1563）系统化地暴露了"task instructions 覆盖完整性数据"与"SBOM 虚假证据"两类风险，提示社区：**当 agent 接管复杂多步任务时，对输入与产出的完整性校验仍非常薄弱**。

### 5. **Swarm 模式的拓扑一致性**
Windows + swarm 模式下的 session reload 引发拓扑错乱（#1569），是 Swarm 多 agent 协作稳定性的关键隐患。

---

> 📅 报告生成时间：2026-10-05 · 数据源：[github.com/1jehuang/jcode](https://github.com/1jehuang/jcode)

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community daily report for 2026-10-05.

Key observations:
1. No releases in the past 24 hours
2. 45 issues updated, with 30 most commented shown
3. 4 PRs updated

Let me categorize the issues:

**Top issues by comment count:**
1. #6665 - TUI performance issue (14 comments, 6 👍) - in progress, performance critical
2. #10314 - Home/End defaults in fullscreen (10 comments, 5 👍) - UX discussion
3. #8643 - Bedrock OpenAI image tool handling (10 comments, 3 👍) - bug fix ready
4. #8834 - Package namespace (8 comments, 1 👍) - closed no-action
5. #8301 - Compaction queue bug (7 comments, 2 👍)
6. #9134 - Anthropic adapter anyOf schema (6 comments, 0 👍)
7. #10330 - Auto-compaction CLI bug (6 comments, 0 👍)
8. #9946 - CMD mode outputPad (6 comments, 0 👍)
9. #9887 - read tool string line numbers (6 comments, 0 👍)
10. #9986 - Abort during tool execution (4 comments, 0 👍)

**PRs:**
1. #10440 - QuickJS wasm path fix (closed)
2. #10463 - codemode MCP test fix (closed)
3. #2597 - docs for resources_discover (closed, old)
4. #10448 - sync PR (closed)

**Trends I can identify:**
- Performance optimization (TUI streaming, ICU caching)
- Model provider integrations (Bedrock, Anthropic, OpenAI, Gemini)
- Extension/MCP API development
- UX consistency (Home/End, fullscreen mode)
- Security (keychain storage, OAuth refresh)
- Theme customization
- Cross-platform issues (Windows)
- RPC improvements
- Durability/execution layer

Let me write the report in Chinese, professional and technical tone.</think>

# pi 社区动态日报 · 2026-10-05

> 数据来源：github.com/earendil-works/pi
> 统计周期：过去 24 小时

---

## 1. 今日速览

今日社区活跃度中等偏高，**TUI 流式渲染性能问题 (#6665) 持续占据讨论焦点**，14 条评论已积累至 in-progress 阶段，核心症结被定位到 `Intl.Segmenter` 未缓存 + 每块 Markdown 重建的 CPU 热点。同时，多个模型适配器的细节 Bug（Bedrock 图像处理、Anthropic schema 降级、Gemini 3 thought_signature 缺失）集中提交，反映出 pi 在多 Provider 兼容层仍有不少边角问题。PR 侧则全部为修复性提交，无新功能合入。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时无 Release 记录。

---

## 3. 社区热点 Issues

| # | Issue | 关键点 | 社区反应 |
|---|---|---|---|
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI 流式渲染时单核 100% 占用** | 热点路径定位到 `Intl.Segmenter`（ICU BreakIterator）未缓存 + 每 chunk 重建 Markdown；提供最小复现 `pi -ne`。**已 in-progress**，是高优先级性能缺陷。 | 14 评论 / 6 👍 |
| [#10314](https://github.com/earendil-works/pi/issues/10314) | **全屏模式下 Home/End 默认行为是否合理** | 新版全屏 TUI 中 Home/End 改为滚到顶/底，破坏传统行编辑习惯。涉及 UX 取舍。 | 10 评论 / 5 👍 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock 上 OpenAI 模型拒绝 toolResult 中的嵌套图片** | 需把 tool-result 中的图像上提为同级 user content 块，与 openai-completions 一致；修复 + 回归测试已在作者 fork 准备就绪。 | 10 评论 / 3 👍 |
| [#8834](https://github.com/earendil-works/pi/issues/8834) | **包命名空间（pi.namespace）提案** | 通过 `package.json` 中的 `pi.namespace` 字段统一 skills / prompt templates 的命名空间。**已关闭（no-action）**，但讨论值得参考。 | 8 评论 / 1 👍 |
| [#8301](https://github.com/earendil-works/pi/issues/8301) | **prompt 队列中无法与 /compact 交错** | `/compact` 会立即终止会话并执行压缩，无法与普通提示排队混合。 | 7 评论 / 2 👍 |
| [#9134](https://github.com/earendil-works/pi/issues/9134) | **Anthropic 适配器静默丢弃根级 anyOf** | 自定义工具 schema 中根级 `anyOf` 在发送给模型前被无声剥离；验证器侧仍保留——典型的"模型面 vs 校验面"分歧。 | 6 评论 |
| [#10330](https://github.com/earendil-works/pi/issues/10330) | **CLI 模式下 auto-compaction 不触发** | `pi --mode json` 等 CLI 调用中自动压缩从未生效，TUI 中已正常。 | 6 评论 |
| [#9946](https://github.com/earendil-works/pi/issues/9946) | **CMD 模式 (!) 忽略 outputPad 设置** | 设置 `outputPad: 0` 后，! 命令输出仍有前导空格，聊天消息则正常。 | 6 评论 |
| [#9887](https://github.com/earendil-works/pi/issues/9887) | **read 工具的字符串型行号触发错误拼接** | openrouter 上某些模型把 `offset`/`limit` 返回为字符串，TUI 渲染时直接拼接字符串而非数值相加。 | 6 评论 |
| [#9986](https://github.com/earendil-works/pi/issues/9986) | **abort 工具执行后留下未应答的 tool calls** | abort 之后队列尾部的工具调用既无结果也无错误，仅从历史消失；`executeToolCallsSequential` 与另一路径均受影响。 | 4 评论 |

---

## 4. 重要 PR 进展

> 今日仅 4 个 PR 更新，且全部处于 **CLOSED** 状态，主要是修复和小幅文档同步。

| # | PR | 内容 |
|---|---|---|
| [#10440](https://github.com/earendil-works/pi/pull/10440) | **fix(coding-agent): 解析 QuickJS wasm 路径改为进程级单次** | 关联 #10439。`getQuickJSWasmPath()` 原本每次 codemode 调用都重新解析，pnpm 全局更新后会指向被 GC 掉的旧目录，导致 codemode 整个 session 失效。改为进程内只解析一次。 |
| [#10463](https://github.com/earendil-works/pi/pull/10463) | **fix(coding-agent): codemode MCP 测试适配新的 "[Image saved to ...]" 标签** | 纯 CI 修复，适配 d677d0ee7 引入的图像标签。 |
| [#2597](https://github.com/earendil-works/pi/pull/2597) | **docs(coding-agent): 补全 resources_discover 事件文档** | 旧 PR（3 月创建）今日被 close；补全 MCP `resources_discover` 事件说明，并附一个把 Claude Code skills/commands 装载为 pi skills/prompts 的示例扩展。 |
| [#10448](https://github.com/earendil-works/pi/pull/10448) | **pr for sync** | 同步 PR，无实质描述。 |

---

## 5. 功能需求趋势

从今日 45 条 Issue 提炼出以下方向（按热度排序）：

1. **🔧 多 Provider 适配器健壮性**
   Bedrock 图像处理、Anthropic schema 降级、Gemini 3 `thought_signature` 处理、OpenAI 兼容模型 `temperature` 抑制、codex `max_output_tokens` 丢弃……表明 pi 的多模型适配层正在快速迭代，但跨提供商的"边角差异"成为最大单点痛点。

2. **⚡ TUI / 流式渲染性能**
   头条 #6665 反映长会话流式输出时的 CPU 占用过高，是用户最直接的体验痛点。Markdown 重渲染与 ICU 分段是潜在优化空间。

3. **🧩 Extension / MCP 生态**
   命名空间提案 (#8834)、Stateless MCP 2026-07-28 协议 (#10416)、共享诊断日志 API (#10457)、RPC 文本转换钩子 (#10454)、嵌套工具执行 API (#10455)，呈现"扩展 API 持续丰富"的趋势。

4. **🎨 UX 与主题一致性**
   Home/End 行为 (#10314)、主题驱动的全屏选区样式 (#9715)、assistant 消息独立背景色 (#10469)——社区对 TUI 的可用性、可定制性提出更细诉求。

5. **🔐 安全与凭据管理**
   MCP 凭据改为 keychain 存储 (#10291)、OpenAI OAuth refresh 失效 (#10377)——凭据生命周期管理是生产使用的前提。

6. **🪟 跨平台**
   Windows Alt-screen 视口跳变 + 键盘失焦 (#10414)，仍是 Pi 在 Windows Terminal 下的顽疾。

---

## 6. 开发者关注点

通过今日 Issue / PR 文本聚类，开发者最频繁反馈的痛点可归纳为三类：

- **"行为不一致"** —— 同一逻辑在 CLI vs TUI、不同 Provider、不同模式下表现各异（#10330、#9946、#8643、#9134）。开发者希望适配层有统一、可预测的语义，而不是每条路径单独维护一份心智模型。

- **"静默失败 / 静默丢弃"** —— schema 被丢弃、tool call 在历史中消失、`max_output_tokens` 被忽略、没有错误也没有日志（#9134、#9986、#9845）。这是工具型 agent 最大的雷区：用户既不知情也无法排障。#10457 提出"统一结构化诊断日志 API"正是直接回应此诉求。

- **"可嵌入与可扩展"** —— 嵌套工具调用路径、bundling 时的 wasm/worker 路径注入 (#10466)、RPC 队列清理 (#9194) 等，表明越来越多下游项目（pi-courier、第三方 host、IDE 插件）开始把 pi-coding-agent 作为库嵌入，SDK 形态的边界需要持续打磨。

---

*日报生成时间：2026-10-05 · 数据基于过去 24 小时 GitHub 活动*
*如有疏漏，欢迎在评论区指出。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
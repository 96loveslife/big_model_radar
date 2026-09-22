# AI CLI 工具社区动态日报 2026-09-22

> 生成时间: 2026-09-22 04:15 UTC | 覆盖工具: 8 个

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

<think>The user wants me to create a horizontal comparison analysis report based on the community dynamics of various AI CLI tools. Let me carefully analyze the data from all 7 tools:

1. **Claude Code** (Anthropic)
2. **OpenAI Codex** (OpenAI)
3. **Gemini CLI** (Google)
4. **GitHub Copilot CLI** (GitHub)
5. **Kimi Code CLI** (MoonshotAI)
6. **OpenCode** (anomalyco)
7. **jcode** (1jehuang)
8. **pi** (earendil-works)

Let me extract the key metrics from each:

**Issues/PRs/Releases:**
- Claude Code: 50 issues, 2 PRs, no release
- OpenAI Codex: 50 issues, 50 PRs, 7 releases (high iter)
- Gemini CLI: 50 issues, multiple PRs, 1 release (v0.62.0-nightly)
- GitHub Copilot CLI: 50 issues, 2 PRs, 3 releases
- Kimi Code CLI: 1 issue, 7 PRs, 1 release (final 1.51.0 + archive)
- OpenCode: 50 issues, 20+ PRs, 1 release
- jcode: 16 issues, 15 PRs, no release
- pi: 30 issues, 19 PRs, 1 release (v0.87.0)

**Common themes:**
1. **MCP ecosystem stability** - All major tools have MCP-related issues
2. **Windows platform stability** - Major pain point across Claude Code, Codex, OpenCode, Copilot
3. **Session/compaction management** - Long-running sessions issues everywhere
4. **Multi-provider/Model switching** - Common theme in pi, jcode, OpenCode
5. **Provider/BYOK support** - Especially Copilot CLI
6. **Extension/plugin architecture** - Claude Code mods, Copilot plugins, etc.
7. **TUI rendering performance** - Especially pi and OpenCode
8. **Authentication/OAuth** - Kimi migration, openrouter in jcode, Codex
9. **CI/Supply chain security** - jcode specifically
10. **Documentation drift** - pi, Codex, jcode

**Differentiation:**
- Claude Code: Focus on extensibility (mods/plugins), Anthropic ecosystem
- Codex: High-velocity alpha releases, broad feature set, Windows-heavy
- Gemini CLI: AST tools, security hardening, native binary direction
- Copilot CLI: Enterprise/BYOK focus, GitHub ecosystem integration
- Kimi CLI: Migration to native binary (architectural)
- OpenCode: V2 architecture stabilization, cross-platform (Termux/WSL)
- jcode: CI security, TUI refinements, swarm support
- pi: Session context editing, RPC extensibility, low-level control

**Maturity indicators:**
- High velocity alpha (Codex) = pre-stable churn
- New release with major features (Claude Code v2.x features, Copilot CLI v1.0.88) = mature evolution
- Migration (Kimi) = strategic shift
- Old repo focused on tests/security (jcode) = technical debt cleanup

**Trend signals:**
1. **Native binary > Python/JS runtime** (Kimi decision, Gemini Node move)
2. **Provider portability** (BYOK, multi-provider, auth method handling)
3. **Protocol standardization** (ACP - Agent Client Protocol)
4. **MCP ecosystem maturity** (becoming both feature and pain point)
5. **Long session management** (compaction, persistence, recovery)
6. **TUI performance** (large transcripts, Windows rendering)
7. **Desktop parity with TUI** (Copilot, OpenCode)
8. **Offline-first scenarios** (Kimi, pi)
9. **Sub-agent/orchestration** (Claude Code, pi)

Now let me write a structured comparison report in Chinese, professional and data-driven.</think>

# AI CLI 工具生态横向对比日报
**日期：2026-09-22** | **覆盖 8 款主流工具**

---

## 一、生态全景

2026 年 9 月的 AI CLI 工具生态呈现明显的**"双轨分化"**格局：一方面，**头部产品**（Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI）进入**生产可用性补短板**阶段，Windows 平台稳定性、MCP 兼容、长会话管理等"非亮点"能力成为核心战场；另一方面，**垂直/独立工具**（OpenCode、pi、jcode、Kimi CLI）在协议层、扩展性、安全基线等差异化方向持续突破。值得注意的是，Kimi CLI 宣布从 Python 迁移至原生二进制，pi 推出 `ContextEditEntry` 与可操作生命周期钩子，反映工具链正在向**轻量化运行时 + 强扩展语义**收敛。

---

## 二、各工具活跃度对比

| 工具 | Issues | PRs | Release 数 | 关键版本 | 综合状态 |
|------|--------|-----|------------|----------|----------|
| **Claude Code** | 50 | 2 | 0 | — | 静默观察期 |
| **OpenAI Codex** | 50 | 50 | **7** | rust-v0.157.0-alpha.4 | ⚡ 高强度迭代 |
| **Gemini CLI** | 50 | ~15 | 1 | v0.62.0-nightly | 🌙 夜间构建 |
| **GitHub Copilot CLI** | 50 | 2 | 3 | v1.0.87 / 1.0.88-0 / 1.0.88-1 | 🚢 稳定高频 |
| **Kimi Code CLI** | 1 | 7 | 1 | v1.51.0（**末代版本**） | 📦 归档迁移 |
| **OpenCode** | 50 | ~20 | 1 | v1.18.32 | 🔧 V2 收敛 |
| **pi** | 30 | 19 | 1 | **v0.87.0**（重大特性） | 🎯 协议层突破 |
| **jcode** | 16 | 15 | 0 | — | 🛡️ 内部硬化 |

**数据观察**：
- **OpenAI Codex 独占鳌头**：单日 50 PR 合并 + 7 个 alpha 版本，迭代密度是其他工具的 5–25 倍
- **GitHub Copilot CLI 与 Claude Code**:虽 Issue 热度高，但 PR 流入稀少（各 2 条），表明**维护节奏被刻意控制**
- **jcode 与 Kimi CLI**:Issue 数量偏低，体现项目精细化维护或迁移期平静

---

## 三、共同关注的功能方向

下表汇总跨多个工具的同质化需求，按关注强度排序：

| 方向 | 涉及工具 | 共同诉求 |
|------|----------|----------|
| **🔌 MCP 生态可靠性** | Claude Code、Codex、Copilot CLI、OpenCode、Gemini CLI | MCP server 进程管理（孤儿化、重启丢失）、OAuth 鉴权不兼容（apikey 被拒）、BigInt 序列化、协议层握手兼容性 |
| **🪟 Windows 平台稳定性** | Claude Code、Codex、OpenCode、Copilot CLI、jcode | MSIX 更新死锁、桌面 AppX 状态残留、文件选择器崩溃、Plan9 sandbox 挂载、内核泄漏 |
| **🧠 长会话与 Compaction 管理** | Claude Code、Codex、OpenCode、pi | GB 级日志失控、compaction 后超上下文窗口、陈旧 compaction 条目、thinking 消息溢出、resume 时 OOM |
| **🌐 模型与 Provider 可发现性** | Codex、pi、OpenCode、jcode | 模型从选择器消失（GPT-5.6 Luna）、新模型首日兼容问题（DeepSeek V4.1 Flash Bad Request）、catalog 同步延迟 |
| **🔐 BYOK / 自定义端点** | Copilot CLI、Codex、jcode、OpenCode | 自定义 HTTP Header、多租户路由、企业网关、API key 鉴权方法被边缘化 |
| **🖥️ 桌面 / GUI 端体验短板** | Claude Code、OpenCode、Copilot CLI | 桌面端落后于 TUI、文件选择器、归档会话、Plan/Build 切换、桌面通知 |
| **🧪 TUI 渲染性能** | OpenCode、pi、Claude Code、jcode | Windows 10 重绘、大 transcript 每帧重渲、fullscreen 退出滚动损坏 |
| **🤖 Sub-agent / 多 agent 编排** | Claude Code、pi、Gemini CLI、jcode | 跨会话消息投递（`send_message` 不执行）、subagent 推理可见性、扩展（provider 专有字段访问） |
| **📦 扩展 / 插件体系** | Claude Code（Mods）、Gemini CLI、Copilot CLI、Codex | hooks/plugins 原生支持、命名空间管理、AGENTS.md / `.agents/skills/` 互认 |
| **🛡 供应链 / CI 安全** | jcode、Gemini CLI、OpenCode | workflow permissions 最小化、fork 防伪造发布、apt-key 与 OAuth 凭据日志脱敏 |
| **📚 文档与实际行为漂移** | pi、Codex、jcode | `PI_OFFLINE` 行为偏差、`before_provider_request` 在 compaction 不触发、API key 与设备认证混用 |
| **📴 离线场景体验** | pi、Kimi CLI、Claude Code、Gemini CLI | 离线禁用模型发现、silent fallback、离线 bug export、原生二进制部署 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 | 阶段判断 |
|------|----------|----------|----------|----------|
| **Claude Code** | **扩展性天花板**（hooks/mod 即将发布）、Anthropic 生态深度集成 | 企业开发者 + 重度 AI 用户 | Claude API + 渐进式 Mods | 成熟期攻坚 |
| **OpenAI Codex** | **广度优先**：插件生态、桌面、Marketplace、安全策略 | 全栈开发者 + 平台型组织 | Rust 重写 + 多客户端 | ⚡ 高速预稳定 |
| **Gemini CLI** | **AST 代码理解** + **Auto Memory + 安全强化** | 科研/教育 + 安全敏感用户 | Node + Gemini 3 原生 bash | 差异化探索 |
| **GitHub Copilot CLI** | **企业可控性**（Auto 模式策路、BYOK Header、OSC 777 通知） | GitHub Enterprise + 平台团队 | 多 Provider + GitHub Actions | 企业级稳态 |
| **Kimi Code CLI** | **运行时重构**：Python → 原生二进制 | 中文/亚洲用户 + 性能敏感场景 | 原生二进制 + ACP | 🚚 架构转型 |
| **OpenCode** | **V2 架构稳定化** + 多 Provider + 桌面/TUI 平权 | 跨平台开发者 + 自托管偏好者 | TypeScript + 多后端 | V2 收尾期 |
| **pi** | **会话语义层**：ContextEditEntry + RPC steer + 离线原生 | 高级用户 + 扩展开发者 + RPC 客户端 | Rust + 协议优先 | 🎯 协议层突破 |
| **jcode** | **CI 安全 + TUI 手感**（@file 选择器、swarm stop） | 隐私/安全敏感开发者 + 个人用户 | Rust + 多 Provider | 内部硬化期 |

**核心差异点**：
- **生态绑定 vs 协议中立**：Claude Code/Codex/Copilot 深度绑定自有平台；pi/OpenCode/jcode 强调 provider 中立
- **运行时取舍**：Kimi 从 Python 转向原生二进制，是当下**唯一**做出该取舍的工具
- **会话可编辑性**：pi 的 `ContextEditEntry` 提供"不重写历史的上下文编辑"语义，独此一家

---

## 五、社区热度与成熟度雷达图

按维度对各工具打分（1–5 星，仅为直观对比）：

| 工具 | 用户活跃度 | 维护迭代密度 | 核心创新 | 稳定性 | 生态成熟度 |
|------|------------|--------------|----------|--------|------------|
| Claude Code | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| OpenAI Codex | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Gemini CLI | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Copilot CLI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Kimi CLI | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| OpenCode | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| pi | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| jcode | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

---

## 六、值得关注的趋势信号

### 1. **运行时轻量化是下一波基础设施升级**

**Kimi CLI 从 Python 迁移到原生二进制** 是一个标志性事件。同期 OpenAI Codex 押注 Rust 重写、jcode 自始至终坚持 Rust、pi 同样基于 Rust。Node/Python 工具链在启动速度、分发便利性、运行时一致性上的劣势正在被放大，**预计未来 12 个月将看到更多工具宣布类似迁移**。

### 2. **协议层正在成为新一轮差异化战场**

- **Agent Client Protocol (ACP)**：Kimi 升级至 0.12.1、jcode 已在 ACP 层缺位（`#813` 提出补齐）
- **MCP**：从"亮点"变成"标准化瓶颈"，所有主流工具都在修补兼容层
- **RPC steer 可追溯性**：pi 的 `handled/queued/accepted` 显式处置状态定义了 RPC 协议演进方向

**对开发者的启示**：协议层贡献者（写 ACP/MCP server）将比应用层贡献者获得更高 ROI。

### 3. **"生产可用性"成为头部工具的新护城河**

Claude Code、Codex、Gemini CLI、Copilot CLI 的核心痛点已从"加功能"转向"修 bug"。Windows 平台稳定性、长会话管理、桌面端体验等"边缘议题"反而成为用户留存的关键。

**值得追踪的硬指标**：崩溃率、session 持久化成功率、Windows 平台 Issue 占比。

### 4. **企业级可控性成为付费意愿的源动力**

Copilot CLI 热度最高的 Feature Request 是 **Auto 模式模型池可配置化**（👍16）和 **BYOK 自定义 Header**（👍14），这两个数字远超其他功能。Claude Code 的 AGENTS.md 支持（👍379）与 pi 的扩展可访问性，反映**用户愿意为可控性付费**。

**对开发者的启示**：构建企业内部 AI 工具时，**策略层（policy）、审计层（audit）、成本可观测性**比功能丰富度更重要。

### 5. **Sub-agent / 多 agent 编排是下一个产品形态高地**

跨工具观察：
- Claude Code 的 `send_message` 跨会话投递有缺陷
- pi 推出 `ContextEditEntry` 让多个 agent 可编辑同一上下文
- Gemini CLI 的 subagent 调度不充分（`#21968`）
- jcode 的 swarm stop 修复（`#1362`）

**判断**：多 agent 协作将很快从"能跑"进入"可用"，协议层 + 调度层的标准化工作是关键。

### 6. **离线性（Offline-First）正在重新变得重要**

Kimi 迁移、pi `PI_OFFLINE` 文档修正、Gemini CLI sandbox 强化——结合企业部署与数据合规需求，**离线能力正在从边缘话题变成产品定位**。

### 7. **"文档与实现一致性"是新一波用户摩擦点**

pi 的 `Component.invalidate()`、jcode 的 `JCODE_WAKE_MODE` 指纹缺失、Codex 的模型目录同步——这些都属于"已有能力但未文档化"或"文档承诺与实现不符"。迭代速度已普遍**超过**文档同步能力，**专门负责文档的维护者**将成为瓶颈资源。

---

## 七、决策参考建议

| 你的画像 | 推荐优先级 |
|----------|-----------|
| **企业平台团队 + 强调可控** | Copilot CLI > Claude Code > OpenCode |
| **重度 AI 用户 + 重视扩展性** | Claude Code（Mods 即将落地）> pi |
| **科研/教育 + 关注 AST 与记忆** | Gemini CLI > pi |
| **跨平台/自托管 + 模型中立** | OpenCode > pi > jcode |
| **Rust 协议层贡献者** | pi > jcode > OpenCode |
| **桌面端体验 + 插件生态** | OpenAI Codex（量大但不稳）> Copilot CLI |
| **追求极致启动速度** | 等待 Kimi Code CLI 原生版本 > OpenCode Rust |

---

*报告基于 2026-09-22 8 款工具的 GitHub 公开数据生成。指标仅供参考，实际选型建议结合团队技术栈、合规要求、模型偏好综合评估。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository and generate a comprehensive report. Let me analyze the data carefully.

Looking at the data:

**Pull Requests (PRs)** - I notice that all PRs show "评论: undefined | 👍: 0" which means the comment data and reaction counts aren't available in the dataset. I need to work with what's available - the PR titles, descriptions, dates, and status.

Wait, looking more carefully, the PRs are listed as "热门 Pull Requests（按评论数排序，共 50 条，展示前 20 条）" but all show "评论: undefined". This is unusual but I'll work with the available information - dates, status (all OPEN), descriptions.

Let me identify the most interesting/notable PRs:

1. **#1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures** - About fixing the skill-creator itself
2. **#1771 - feat(skills): add proofcore-contract-auditor** - Web3 smart contract auditing skill
3. **#1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import** - MCP builder fix
4. **#1703 - Add md2video-audio skill** - Markdown to video conversion
5. **#1734 - Detect orphaned docx comments** - DOCX bug fix
6. **#525 - Add pyxel skill for retro game development** - Game dev (old, March 2026, still open)
7. **#514 - Add document-typography skill** - Document typography QC (very old, March 2026)
8. **#1615 - Add scnet-hpc skill** - HPC cluster operation skill
9. **#822 - feat: add AWT (AI Watch Tester)** - E2E testing skill
10. **#538 - fix(pdf): correct case-sensitive file references** - PDF bug fix
11. **#486 - Add ODT skill** - OpenDocument skill
12. **#210 - Improve frontend-design skill** - Frontend design improvements
13. **#83 - Add skill-quality-analyzer and skill-security-analyzer** - Meta skills
14. **#1776 - Add blast-radius skill** - Safety checklist for destructive operations
15. **#723 - feat: add testing-patterns skill** - Testing patterns
16. **#541 - fix(docx): prevent tracked change w:id collision** - DOCX bug
17. **#539 - fix(skill-creator): warn on unquoted description** - YAML validation
18. **#1790 - fix(docx): create document.xml.rels when missing** - DOCX bug
19. **#1769 - Fix skill-creator trigger detection reporting 0% recall** - Skill-creator fix
20. **#1765 - fix(office): decode redlining diffs as UTF-8** - Office doc fix

**Issues** - These have actual comment counts:
- #492 - Security: Community skills distributed under anthropic/ namespace - 43 comments (highest!)
- #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
- #556 - run_eval.py: claude -p never triggers skills/commands - 12 comments
- #62 - All my skills have disappeared - 10 comments
- #1329 - Proposing compact-memory skill - 9 comments
- #202 - skill-creator should be updated to best practice - 8 comments (CLOSED)
- #412 - Skill proposal: agent-governance - 6 comments (CLOSED)
- #189 - document-skills and example-skills plugins install identical content - 6 comments
- #1487 - claude-api skill eagerly injects ~156k tokens - 4 comments
- #1390 - mcp-builder: evaluation.py scores 0/N - 4 comments
- #1385 - [Proposal] Reasoning Quality Gate Pipeline - 4 comments
- #1175 - Concerns regarding Security and Context Window with SPO - 4 comments (CLOSED)
- #29 - Usage with bedrock - 4 comments
- #16 - Expose Skills as MCPs - 4 comments
- #1362 - web-artifacts-builder: bundle/init scripts fail - 3 comments

Now let me organize this into a structured report in Chinese.

Key insights:
1. The skill-creator has many bugs (multiple PRs fixing it)
2. Security/trust concerns are #1 issue (43 comments)
3. Org-wide sharing is a major request
4. Trigger detection has serious bugs (eval framework broken)
5. Document handling (DOCX/PDF/Office) has many bug fixes
6. Meta skills (quality analyzer, security analyzer) 
7. Testing and code quality skills
8. Web3, HPC, game dev - diverse domain extensions

Let me write a comprehensive report.</think>

# Claude Code Skills 社区热点报告
**数据周期**：2025-10 ~ 2026-09 | **数据源**：anthropics/skills 仓库

---

## 一、热门 Skills 排行（Top 8 PRs）

> 注：当前数据集未提供 PR 评论数/👍 数，以下排行综合**PR 主题热度、Issue 关联度、最近活跃度**筛选。

### 🥇 #1771 — proofcore-contract-auditor
- **链接**：https://github.com/anthropics/skills/pull/1771
- **功能**：Web3 智能合约静态分析 + TON 区块链零存储 Merkle 协议存证审计结果
- **热点**：首个面向 Web3/Solidity & Rust 的合约审计 Skill，代表 Skills 生态向区块链场景延伸
- **状态**：OPEN（2026-09-15 创建）

### 🥈 #1703 — md2video-audio
- **链接**：https://github.com/anthropics/skills/pull/1703
- **功能**：Markdown → MP4 视频自动合成 + 类人语音旁白（基于 Marp）
- **热点**："零成本文档视频化" 概念契合创作者经济；代表 Skills 向多媒体生成扩展
- **状态**：OPEN（2026-09-01 创建）

### 🥉 #822 — AWT (AI Watch Tester)
- **链接**：https://github.com/anthropics/skills/pull/822
- **功能**：赋予 Claude 视觉与浏览器控制能力，实现零代码 E2E 测试生成
- **热点**：与 Issue #1390（mcp-builder 评测 0/N 缺陷）形成上下游联动，反映社区对自动化测试的强烈需求
- **状态**：OPEN（2026-03-31 创建，2026-09-19 最新更新，长期未合）

### #4 #1776 — blast-radius
- **链接**：https://github.com/anthropics/skills/pull/1776
- **功能**：批量/破坏性写操作前的"爆炸半径"清单（归档用户、撤销权限、批量发信等）
- **热点**：首个明确面向"操作安全"的 Skill，与 Issue #492 信任边界讨论呼应
- **状态**：OPEN（2026-09-17 创建）

### #5 #1615 — scnet-hpc
- **链接**：https://github.com/anthropics/skills/pull/1615
- **功能**：SCNet HPC 集群的 profile 化 SSH + Slurm 工作流
- **热点**：HPC/超算领域专业化 Skill，体现 Skills 向垂直行业渗透
- **状态**：OPEN（2026-08-20 创建）

### #6 #525 — pyxel（复古游戏开发）
- **链接**：https://github.com/anthropics/skills/pull/525
- **功能**：Python 复古游戏开发、调试、无头输入驱动运行、帧级状态检查
- **热点**：游戏开发 Skill；PR 已存在 **6 个月仍未合并**，反映新 Skill 审核/发布机制可能存在瓶颈
- **状态**：OPEN（2026-03-05 创建，长期滞留）

### #7 #514 — document-typography
- **链接**：https://github.com/anthropics/skills/pull/514
- **功能**：检测 AI 生成文档中的孤行/寡行/编号错位等排版缺陷
- **热点**：解决"每个 Claude 生成文档都受影响"的共性问题
- **状态**：OPEN（2026-03-04 创建，滞留 ~7 个月）

### #8 #1298 — fix(skill-creator)
- **链接**：https://github.com/anthropics/skills/pull/1298
- **功能**：修复 skill-creator 在触发评测、跨平台（Windows）、运行失败的多个核心 bug
- **热点**：skill-creator 是元工具，目前已有 **4 个相关修复 PR**（#1298/#1769/#539/#1769），说明该组件本身缺陷较多，是生态痛点
- **状态**：OPEN（2026-06-10 创建）

---

## 二、社区需求趋势（Top 10 Issues 分析）

### 🔥 信任与安全（首要议题）
- **#492「anthropic/ 命名空间信任滥用」43 评论 👍2** 🔝
  - https://github.com/anthropics/skills/issues/492
  - 核心诉求：社区 Skill 在 anthropic/ 命名空间下分发，存在被误认为官方 Skill 的信任边界风险
- **#16「将 Skills 暴露为 MCPs」4 评论**
  - https://github.com/anthropics/skills/issues/16
  - 核心诉求：Skills 应具备标准 API 接口

### 📢 分发与协作机制
- **#228「Claude.ai 组织级 Skill 共享」16 评论 👍8**
  - https://github.com/anthropics/skills/issues/228
  - 核心诉求：当前只能下载 .skill 文件 → Slack 转发 → 手动上传，需要共享库/直链
- **#189「document-skills 与 example-skills 重复」6 评论 👍9**
  - https://github.com/anthropics/skills/issues/189
  - 核心诉求：插件打包去重、避免上下文污染

### 🧠 上下文与执行可靠性
- **#556「run_eval.py 触发率 0%」12 评论 👍7**
  - https://github.com/anthropics/skills/issues/556
  - 核心诉求：评测框架本身失效，导致 Skill 描述优化依据"全是假阳性"
- **#1487「claude-api 一次性注入 156k token」4 评论**
  - https://github.com/anthropics/skills/issues/1487
  - 核心诉求：避免 Skill 贪婪注入导致单次工具调用耗尽上下文
- **#1390「mcp-builder 评测对真实 MCP 服 0/N」4 评论**
  - https://github.com/anthropics/skills/issues/1390
  - 核心诉求：Phase-4 评测静默吃掉 TextContent 错误

### 🛡️ 治理与质量保障
- **#1329「compact-memory Skill」9 评论**
  - https://github.com/anthropics/skills/issues/1329
  - 核心诉求：长会话 Agent 的符号化紧凑状态表示（节省上下文）
- **#1385「Reasoning Quality Gate Pipeline」4 评论 👍1**
  - https://github.com/anthropics/skills/issues/1385
  - 核心诉求：Pre-task 校准 → 对抗评审 → 交付验证 三闸门质量流水线
- **#412「agent-governance」6 评论（CLOSED）**
  - https://github.com/anthropics/skills/issues/412
  - 核心诉求：策略执行、威胁检测、信任评分、审计追踪

### 🔧 集成与跨平台
- **#29「与 AWS Bedrock 集成」4 评论**
  - https://github.com/anthropics/skills/issues/29
  - 核心诉求：跨云平台 Skills 可移植性
- **#62「Skills 全部消失」10 评论 👍2**
  - https://github.com/anthropics/skills/issues/62
  - 核心诉求：本地 Skill 持久化与恢复机制

---

## 三、高潜力待合并 PR（活跃但未落地）

这些 PR 近期频繁更新、解决实际痛点，最可能率先合入主干：

| PR | 标题 | 最近更新 | 潜力点 |
|---|---|---|---|
| [#1769](https://github.com/anthropics/skills/pull/1769) | Fix skill-creator trigger detection 0% recall | 2026-09-15 | 直击 Issue #556 评测失效根因 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | isolate trigger evals + Windows 兼容 | 2026-09-16 | skill-creator 平台可用性关键修复 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 适配 mcp>=2 | 2026-09-19 | 跟进 MCP 协议升级，社区刚需 |
| [#1790](https://github.com/anthropics/skills/pull/1790) | fix(docx) comments.xml.rels | 2026-09-19 | DOCX 缺陷修复 |
| [#1765](https://github.com/anthropics/skills/pull/1765) | fix(office) UTF-8 diff | 2026-09-14 | 多语种办公文档必备 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 2026-09-18 | 安全理念契合 Issue #492 趋势 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E Tester | 2026-09-19 | 测试自动化刚需，但已滞留 6 个月 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 2026-09-21 | 测试模式知识库，弥补官方缺位 |

**预警**：#525（pyxel）、#514（document-typography）、#83（skill-quality/security-analyzer）已滞留 6 个月以上，反映官方对新 Skill 接纳流程偏慢。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"元层可靠性"——Skills 生态已从"能不能做"进入"做得对不对、信不信得过"的阶段：信任边界（命名空间安全）、评测可靠性（trigger rate 0%）、分发协作（组织级共享）、质量治理（meta-analyzer 与 governance）成为四大主线，而文档/DOCX/Office 等高频场景的细碎 bug 修复则暴露出官方维护资源与社区贡献之间的供需错配。**

---

<think>The user wants me to generate a Chinese daily report for the Claude Code community based on GitHub data from 2026-09-22. Let me analyze the data carefully.

Key observations from the data:

1. **No new releases** in the past 24 hours - this section should be omitted

2. **Most commented issues** (top 10 to highlight):
   - #91870 "Mods - make Claude 10x more extensible" - 207 comments, 124 likes - HUGE. This is about plugins/hooks extension system, with an official community update
   - #31005 "Support for AGENTS.md and .agents/skills/" - 29 comments, 379 likes - massive community support, CLOSED as duplicate
   - #66020 macOS kernel zone leak - 28 comments
   - #87500 Connection dropped bug on Windows - 14 comments
   - #93071 Cowork Windows sandbox-helper issue - 7 comments
   - #94198 CoworkVMService memory leak on Windows - 6 comments
   - #86279 send_message cross-session bug - 6 comments
   - #34982 macOS MCP connection issue - 5 comments
   - #89912 MSIX stealth update relaunch - 5 comments
   - #75654 Update banner checking npm vs winget - 4 comments

3. **Pull Requests**:
   - #95932 Add issue template for GitHub connection problems - CLOSED
   - #95423 diff mod read-only fetch optimization - OPEN
   
   Only 2 PRs, so I can't pick 10. I'll need to note this.

4. **Feature trends**:
   - Extension/Plugins/Mods system (#91870 - hooks, plugins)
   - AGENTS.md and skills support (#31005)
   - Memory/session management
   - Permissions
   - Desktop UI/UX
   - Cowork VM stability
   - MCP improvements
   - TUI improvements

5. **Pain points**:
   - macOS kernel memory leak
   - Windows networking issues (ECONNRESET)
   - Windows Cowork/Desktop stability
   - MSIX update failures
   - Session recovery when bloated
   - Cross-platform inconsistencies (winget vs npm)

Let me write a professional Chinese daily report.

Note: The instructions say "挑选 10 个重要的 PR" but there are only 2 PRs. I should note this honestly and just cover both.

Let me draft this now.</think>

# Claude Code 社区动态日报
**日期：2026-09-22**

---

## 📌 今日速览

Mods/插件体系（#91870）获得 Anthropic 官方社区更新，正式确认将在数周内发布 function hooks，延续其作为社区最受关注议题的地位（207 评论 / 124 👍）。同时，呼声最高的 AGENTS.md 与 `.agents/skills/` 支持请求（#31005，379 👍）被关闭为重复 issue；Windows/Cowork 生态则集中爆发多条稳定性问题（更新失败、内存泄漏、sandbox 异常），社区关注重心正在从"功能扩展"向"生产可用性"迁移。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内仓库未推送新的 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|---|---|---|---|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods — 让 Claude 扩展性提升 10 倍**（hooks / plugins） | OPEN | 207 / 124 | Anthropic 官方在 issue 中发布 9/9 社区更新，承诺数周内发布 function hooks；这是当前社区头号议题，标志着扩展性体系正式进入官方路线图 |
| [#31005](https://github.com/anthropics/claude-code/issues/31005) | **支持 AGENTS.md 与 `.agents/skills/`** | CLOSED (duplicate) | 29 / **379** | 自 2025 年 8 月起被反复请求、零官方回应；高达 379 👍 体现强烈共识，被关闭为 duplicate 引发社区对官方沟通节奏的讨论 |
| [#66020](https://github.com/anthropics/claude-code/issues/66020) | macOS 26.5.1 内核区内存泄漏（`data.kalloc.1024`） | OPEN | 28 / 5 | CLI 在约 20GB 时触发 kernel panic，泄漏速率随 agent 负载从 21→1027/sec 线性放大，属于严重系统级稳定性缺陷 |
| [#87500](https://github.com/anthropics/claude-code/issues/87500) | Windows 持续报 `ECONNRESET` 连接中断 | CLOSED | 14 / 0 | 持续 5 小时的全平台连接故障，反映用户对底层 API 稳定性与故障可视化的诉求 |
| [#93071](https://github.com/anthropics/claude-code/issues/93071) | Windows 10 Cowork：`device_bash` 因 Plan9 共享未挂载而失效 | OPEN | 7 / 0 | 自 9/8 起持续不可用，重启/更新均无效，影响 Cowork Windows 用户的核心工作流 |
| [#94198](https://github.com/anthropics/claude-code/issues/94198) | CoworkVMService 非分页池泄漏（`NtFC/ntfs.sys`） | OPEN | 6 / 1 | Cowork VM 在 Windows 上持续泄漏内核资源，重启可缓解但关机不能，与 #93071 形成系统性故障群 |
| [#86279](https://github.com/anthropics/claude-code/issues/86279) | 跨会话 `send_message` 永远不投递，目标会话卡死 | CLOSED | 6 / 1 | 多 agent 编排核心能力存在缺陷：返回成功但 turn 不执行，需 Esc 强制取消 |
| [#34982](https://github.com/anthropics/claude-code/issues/34982) | macOS CLI MCP 连接问题 | OPEN | 5 / 3 | 老 issue 持续发酵，macOS 用户 MCP 链路不稳定影响外部工具集成 |
| [#89912](https://github.com/anthropics/claude-code/issues/89912) | MSIX 静默更新 relaunch 失败（`0x80070020`） | OPEN | 5 / 0 | Windows 桌面端自动更新彻底失败后应用不可启动，"Claude is already in use" 提示成为死锁状态 |
| [#75654](https://github.com/anthropics/claude-code/issues/75654) | 更新提示 banner 永远显示（npm 与 winget manifest 不同步） | OPEN | 4 / 1 | 跨包管理器一致性 bug 长期挂起，反映 Windows 打包流程缺乏统一真相源 |

---

## 🛠️ 重要 PR 进展

> ⚠️ 过去 24 小时仅有 **2 条 PR** 更新，远少于常规热度，以下覆盖全部。

| # | 标题 | 状态 | 内容 |
|---|---|---|---|
| [#95932](https://github.com/anthropics/claude-code/pull/95932) | 为 claude.ai 添加 GitHub 连接问题的 issue 模板 | CLOSED | 自动应用 `github-integration` 标签，引导用户提交截图、复现步骤与诊断信息；提升 GitHub 集成类问题的分诊效率 |
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | **diff mod**：对只读 shell 命令不再重新拉取 diff | OPEN | 修复 `diff` mod 在每次 Bash/PowerShell 调用后无差别 refetch 的性能浪费；通过读取 `isReadOnly` 标志，跳过 `ls`、`git status`、`cat`、grep 等只读调用，行为与内置 panel 对齐 |

---

## 📈 功能需求趋势

从今日活跃议题提炼，社区诉求呈现清晰的优先级：

1. **🔌 扩展性体系（#91870）** — 官方 hooks/plugins/mod 体系占据绝对焦点，是近 30 天最高赞议题
2. **📄 标准化约定文件（#31005）** — AGENTS.md / `.agents/skills/` 已形成强烈共识（379 👍），社区期望与其他 AI 编码工具互通的元数据规范
3. **🖥️ 桌面端 / Cowork 稳定性** — Windows 平台密集出现 MSIX 更新、CoworkVMService 内存、Plan9 sandbox 等系统层缺陷
4. **🤖 多 agent 与跨会话编排** — `send_message`（#86279）暴露 session 间通信可靠性不足
5. **🧠 会话恢复与上下文管理** — 大会话无法 resume（#83206、#81793）成为长任务用户的硬伤
6. **🔐 权限粒度（#79771）** — ask 规则不生效表明 permissions 模型需要更细粒度的路径/默认行为控制

---

## 💢 开发者关注点

**高频痛点：**

- **🔴 macOS / Windows 系统级稳定性**：内核内存泄漏（#66020）、MSIX 更新死锁（#89912）、Cowork VM 资源耗尽（#94198）反复出现，**系统层缺陷正在侵蚀用户信任**
- **🟠 Stale bot 与沟通缺失**：#94619 指出 docx/pptx/xlsx skills 在 Windows 上 `socket.AF_UNIX` 报错两次被 stale bot 关闭，"被自动关闭无人工 triage"成为开发者吐槽焦点
- **🟡 跨平台包管理不一致**：winget 与 npm manifest 同步滞后（#75654），提示信息长期误导用户
- **🟢 正面信号**：官方在 #91870 主动发布进展、采纳社区设计反馈，体现 Anthropic 对头号议题的实质投入

**总结一句话**：社区当前处于"功能扩展天花板已现、生产可用性补短板"的关键阶段——Mods 体系即将落地是最大利好，但 macOS/Windows 桌面端的多条系统级 bug 若持续累积，将成为阻碍 Claude Code 进入企业生产环境的主要风险。

---

*日报基于 2026-09-22 GitHub 数据生成，覆盖 50 条 Issues、2 条 PR。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex on 2026-09-22 and create a comprehensive daily report in Chinese.

Key observations:
1. Releases - Multiple alpha releases (0.157.0-alpha.1 through alpha.4, 0.156.0-alpha.16/17, 0.155.0-alpha.16.1) - very fast iteration
2. Issues - 50 updated issues, mostly bugs, with several hot topics:
   - Windows-specific issues (multiple)
   - Model issues - GPT-5.6 Luna disappearing, model capacity issues
   - Cybersecurity false positive blocks
   - Plugin/computer-use/browser integration issues
   - TUI issues
   - Marketplace staging leak (559 GB)
3. PRs - 50 merged PRs, all from copyberry[bot] which appears to be an automation bot. Many feature improvements:
   - TUI improvements (fullscreen transcript, autoscroll, forking)
   - Daemon auto-start default enabled
   - Gateway OAuth hardening
   - Network proxy MITM CA support
   - File upload timeout increase
   - Guardian classifier improvements

Let me structure the report professionally.

For the issues to highlight (top 10 by comments/importance):
1. #25220 - Windows bundled plugins unavailable (43 comments, most discussed)
2. #24948 - Session logs grow to 700MB-2GB (31 comments)
3. #34026 - Windows Desktop completed threads stuck "thinking" (18 comments)
4. #45317 - Chrome browser integration rejects API-key auth (14 comments)
5. #25809 - Codex Desktop plugins disappear after restart (12 comments)
6. #16970 - Unified exec caches stale session path (7 comments)
7. #24191 - Remote compact makes session unrecoverable (CLOSED, 7 comments)
8. #39421 - Marketplace upgrade staging leak 559GB (6 comments)
9. #33471 - Locked Computer Use can't be interrupted (5 comments)
10. #43673 - Browser route disappears mid-workflow (4 comments)

Also notable: multiple false-positive cybersecurity blocks (#47171, #47001, #47163), GPT-5.6 Luna disappearing (#47166, #47186, #47152), model capacity errors (#46980, #47180, #47184).

For PRs (top 10):
1. #47179 - Enable automatic daemon startup by default
2. #47178 - Enable fullscreen transcript by default
3. #47185 - Allow forking conversations locked by another app
4. #47170 - Add explicit gateway login control
5. #47162 - Apply workspace routing to Guardian v2 classifier
6. #47158 - Harden gateway OAuth credential persistence
7. #47155 - Ignore stale thread-close notifications
8. #47142 - Honor system proxy settings for web search
9. #47132 - Support caller-provided MITM CAs in network proxy
10. #47130 - Remove ultrafast tier from gpt-5.6-sol
11. #47122 - Increase OpenAI file blob upload timeout from 60s to 5min
12. #47143 - Extract exec-server CLI startup

Let me write this up properly.</think>

# OpenAI Codex 社区动态日报
**日期：2026-09-22**

---

## 📌 今日速览

今天 Codex 进入高频迭代周期，**rust-v0.157.0-alpha.1 → alpha.4** 四个 alpha 版本在 24 小时内接连发布，同时伴随 50 个 PR 集中合入（主要由自动化 bot 提交），显示出 OpenAI 正在为下一阶段稳定版本做最后的特性收口。社区层面，几个高关注度议题仍在持续发酵：**Windows 平台捆绑插件不可用**（评论 43 条）、**会话日志膨胀至 GB 级**（评论 31 条）、以及今天集中爆发的 **GPT-5.6 Luna 从模型选择器消失** 和 **多模型 "Selected model is at capacity" 报错**，构成开发者最关心的三大问题域。

---

## 🚀 版本发布

过去 24 小时共发布 **7 个版本**，节奏显著加快：

| 版本 | 备注 |
|------|------|
| `rust-v0.157.0-alpha.4` | 最新 alpha |
| `rust-v0.157.0-alpha.3` | |
| `rust-v0.157.0-alpha.2` | |
| `rust-v0.157.0-alpha.1` | 0.157 主线启动 |
| `rust-v0.156.0-alpha.17` | |
| `rust-v0.156.0-alpha.16` | |
| `rust-v0.155.0-alpha.16.1` | |

**观察**：0.156 → 0.157 在 24 小时内从 alpha.16 一路推进到 alpha.4（跨主线），叠加大量默认行为变更类 PR 合入（详见下方 PR 章节），预示 **v0.157 稳定版可能很快落地**。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#25220](https://github.com/openai/codex/issues/25220) — Windows 捆绑插件全部不可用
- **标签**：`bug, windows-os, app, skills, computer-use, browser`
- **评论 43 / 👍 4**（今日评论数最高）
- **问题**：在 Windows 11 中国版（Microsoft Store 安装路径），所有捆绑插件（Computer Use、Browser、Chrome、LaTeX）因 `copyfile` 在 EFS-加密的 WindowsApps 目录上失败而失效。
- **关注度**：跨多个版本（`26.527.3686.0` 和 `26.519.11010.0`）均可复现，影响 Windows Store 渠道用户核心功能。

### 2. [#24948](https://github.com/openai/codex/issues/24948) — 会话日志膨胀至 700MB–2GB
- **标签**：`bug, TUI`
- **评论 31 / 👍 4**
- **问题**：重复 compaction 后原始工具输出被反复写入，`~/.codex` 会话日志失控增长至 GB 级，磁盘占用严重。
- **关注度**：macOS Darwin arm64 + codex-tui 用户集中反馈，长期运行会话的可持续性问题。

### 3. [#34026](https://github.com/openai/codex/issues/34026) — Windows Desktop 已完成线程卡在 "thinking"
- **标签**：`bug, windows-os, app, session`
- **评论 18 / 👍 1**
- **问题**：`26.715.4045.0` 上，已完成的线程 UI 仍显示思考中，新消息只能本地排队无法启动新一轮。
- **关注度**：Windows AppX 包用户核心交互阻塞，影响生产力。

### 4. [#45317](https://github.com/openai/codex/issues/45317) — Chrome 浏览器集成拒绝 API Key 认证
- **标签**：`bug, windows-os, auth, custom-model, app, browser`
- **评论 14**
- **问题**：`Chrome BrowserSkill 0.2.1` 抛出 `unsupported Codex auth method: apikey`，枚举或读取 Chrome tabs 全部失败。
- **关注度**：自定义 endpoint 用户的核心集成链路被切断。

### 5. [#25809](https://github.com/openai/codex/issues/25809) — 重启后 Codex Desktop 插件消失
- **标签**：`bug, mcp, app, skills, computer-use, browser`
- **评论 12 / 👍 1**
- **问题**：重启或短暂闲置后，Chrome 与 computer-use 插件消失，Chrome native host manifest 未生成，MCP 未挂载。
- **关注度**：与 #25220、#43673 构成 "插件不可用" 三大联发，反映 Windows Desktop 平台稳定性短板。

### 6. [#16970](https://github.com/openai/codex/issues/16970) — Unified exec 缓存陈旧 tmp/arg0 路径
- **标签**：`bug, windows-os, tool-calls`
- **评论 7 / 👍 3**
- **问题**：`~/.codex/tmp/arg0` 会话路径被缓存导致 `ENOENT`，必须重启 app 才能恢复。

### 7. [#24191](https://github.com/openai/codex/issues/24191) — Remote compact 生成超大 compacted 记录（已关闭）
- **标签**：`bug, CLI, context, session`
- **评论 7 / 👍 1**
- **问题**：远程压缩产生巨型 compacted 记录，后续 resume/compact 直接超出上下文窗口。
- **状态**：已 CLOSED，今日关闭，长跑场景问题收敛。

### 8. [#39421](https://github.com/openai/codex/issues/39421) — Marketplace 升级暂存目录泄漏 559 GB
- **标签**：`bug, CLI, skills, Linux`
- **评论 6 / 👍 1**
- **问题**：41 天内 `~/.codex/.tmp/marketplaces/.staging/` 累积 **4,972 个孤立目录共 559 GB**，超过此前 #29994 报告的 277 GB。
- **关注度**：对比 #29994 的 janitor 仅清理 curated clones，marketplace 路径缺少清理机制，磁盘泄漏问题被放大。

### 9. [#33471](https://github.com/openai/codex/issues/33471) — 锁定的 Computer Use 无法通过 Apple Screen Sharing 中断
- **标签**：`bug, app, computer-use, remote`
- **评论 5 / 👍 1**
- **问题**：Mac mini 上锁定的 Computer Use 会话在 Apple Screen Sharing 下点击 "Press any key or click to unlock" 无响应。

### 10. [#43673](https://github.com/openai/codex/issues/43673) — Windows 浏览器路由中途丢失
- **标签**：`bug, windows-os, app, browser`
- **评论 4**
- **问题**：在 Zazzle 发布工作流中途浏览器控制路由消失且无法恢复，导致时效性任务失败。

> **附：今日新增热点议题（多条同类集中爆发）**
> - **GPT-5.6 Luna 从模型选择器消失**：[#47166](https://github.com/openai/codex/issues/47166)（Windows Plus）、[#47186](https://github.com/openai/codex/issues/47186)（Windows）、[#47152](https://github.com/openai/codex/issues/47152)（CLI/TUI）
> - **多模型 "Selected model is at capacity"**：[#46980](https://github.com/openai/codex/issues/46980)、[#47180](https://github.com/openai/codex/issues/47180)（跨 GPT-6 Astra / GPT-5.6 / GPT-5.5）、[#47184](https://github.com/openai/codex/issues/47184)
> - **网络安全策略误报**：[#47171](https://github.com/openai/codex/issues/47171)（已关闭）、[#47001](https://github.com/openai/codex/issues/47001)、[#47163](https://github.com/openai/codex/issues/47163)

---

## 🛠 重要 PR 进展（Top 10）

> 今日合入的 PR 几乎全部由 `copyberry[bot]` 自动化提交，呈现明显的 "批次落地" 特征。

### 1. [#47179](https://github.com/openai/codex/pull/47179) — 默认开启 daemon 自动启动
将 `daemon_auto_start` 提升为 stable 并默认启用，从 `/experimental` 移除。交互式启动体验显著提升。

### 2. [#47178](https://github.com/openai/codex/pull/47178) — 默认开启全屏 transcript
`tui.fullscreen_transcript` 默认值改为 `true`，首帧即应用。TUI 可读性增强。

### 3. [#47185](https://github.com/openai/codex/pull/47185) — 允许在 TUI 中 fork 被其他 app 锁定的会话
新增 `f`/`F` 快捷键，当原会话被另一 app 持有时，用户可在不中断原作者的前提下创建可编辑 fork。

### 4. [#47170](https://github.com/openai/codex/pull/47170) — 显式网关登录控制与认证状态
新增 `GatewayLoginControl`，允许主机强制要求调用方发起浏览器授权，同时保留自动登录默认行为，并暴露被动 readiness 检查。

### 5. [#47162](https://github.com/openai/codex/pull/47162) — Guardian v2 分类器请求按 workspace 路由
确保分类器请求在线程所属 workspace 路由与账号绑定下运行，即使在复用连接或鉴权变更后重试时也保持一致。

### 6. [#47158](https://github.com/openai/codex/pull/47158) — 网关 OAuth 凭据持久化与错误脱敏加固
修复凭据 I/O 阻塞异步 worker、取消的浏览器登录错误释放锁、以及 provider error 回显授权 URL 中的密钥等安全问题。

### 7. [#47155](https://github.com/openai/codex/pull/47155) — 恢复线程后忽略陈旧的 thread-close 通知
防止旧 runtime 的 close 通知在 thread 重载后误触发 TUI 退出或会话切换。

### 8. [#47142](https://github.com/openai/codex/pull/47142) — 独立 web search 工具遵循系统代理
将配置的 `HttpClientFactory` 传入 web search 工具，在 `respect_system_proxy` 启用时正确走系统代理。

### 9. [#47132](https://github.com/openai/codex/pull/47132) — 网络代理支持调用方提供的 MITM CA
新增 `network.mitm_ca` 配置（`certificate_file` + `private_key_file`），企业网络调试更灵活。

### 10. [#47130](https://github.com/openai/codex/pull/47130) — 从 gpt-5.6-sol 移除 `ultrafast` 服务等级
`gpt-5.6-sol` 仅保留 `priority`（Fast），清理与多 agent tool 定义的快照。

**其他值得关注的合并**：
- [#47122](https://github.com/openai/codex/pull/47122) — OpenAI 文件 blob 上传超时从 60 秒 → 5 分钟（大文件场景）
- [#47143](https://github.com/openai/codex/pull/47143) — 将 exec-server CLI 启动逻辑抽到独立模块
- [#47125](https://github.com/openai/codex/pull/47125) — Guardian reviews 新增 `auto_review.extra_policy` 策略注入

---

## 📈 功能需求趋势

从今日 50 条更新 Issues 中可提炼出以下社区最关注的方向：

| 方向 | 代表 Issue | 诉求强度 |
|------|------------|----------|
| **🪟 Windows 平台稳定性** | #25220, #34026, #25809, #43673, #45667, #47166, #47186 | ★★★★★ |
| **🧠 新模型接入与可用性** | #47166, #47186, #47152, #47180, #47184, #46980 | ★★★★★ |
| **📦 插件 / Skills / MCP 生态** | #25220, #25809, #43673, #45317, #45341 | ★★★★ |
| **💾 会话存储与 compaction** | #24948, #24191, #42628 | ★★★★ |
| **🛡 安全策略与误报** | #47171, #47001, #47163 | ★★★ |
| **⚙️ 配额 / 计费透明度** | #39398, #43560, #46980 | ★★★ |
| **🔐 本地凭据管理** | #22029（本地 Secret Store） | ★★ |
| **🌐 浏览器 / Computer Use 控制** | #33471, #43673, #45317, #45341 | ★★ |
| **🎨 TUI / UX 改进** | #47098, #47187（macOS 黑屏） | ★★ |

---

## 💬 开发者关注点

1. **Windows 是当前最大的 "痛点平台"**：Store/AppX 渠道下插件加载、Microsoft Store EFS 加密、AppX 更新后的状态残留三类问题同时高频出现，几乎每个 Windows 类别 Issue 都有用户复现报告。OpenAI 需要在 v0.157 之后给出一个集中修复批次。

2. **模型目录 (model catalog) 同步异常**：今天 **4 条**不同 Issue 反映 "模型消失/不可用"（Luna），且 #47152 明确指出 "直接调用成功但 `/model` 中不存在"，说明 CLI/TUI 的 effective model catalog 与服务侧存在同步延迟。配合 PR [#47130](https://github.com/openai/codex/pull/47130)（移除 gpt-5.6-sol 的 ultrafast）以及多模型 capacity 错误，提示当前正处于模型档位调整期。

3. **长会话可持续性是核心痛点**：从 #24948（GB 级日志）→ #24191（巨型 compacted 记录，CLOSED）→ #42628（unified thread catalog 残留）形成清晰的脉络：随着会话时长增加，存储/compaction/会话目录同步三个层面均存在脆弱性。开发者期待更稳健的 **会话生命周期管理** 与 **磁盘占用可控性**。

4. **网络安全分类器误报已成日常障碍**：[#47001](https://github.com/openai/codex/issues/47001)、[#47163](https://github.com/openai/codex/issues/47163)、[#47171](https://github.com/openai/codex/issues/47171)（今日已 CLOSED）三条同主题，开发者反馈在合法维护自有系统时被 `cyber_policy` 阻断整个对话。PR [#47162](https://github.com/openai/codex/pull/47162) 和 [#47125](https://github.com/openai/codex/pull/47125) 显示 OpenAI 正从架构层（workspace 路由 + extra policy）切入，但短期内误报仍会困扰企业自托管用户。

5. **磁盘清理 janitor 覆盖不全**：[#39421](https://github.com/openai/codex/issues/39421) 的 559 GB 泄漏（4,972 个孤立 staging 目录）远超此前 #29994 的 277 GB，开发者建议把 janitor 扩展到 marketplace 路径——这是成本最低、ROI 最高的改进项之一。

6. **API Key 自定义 endpoint 用户被边缘化**：#45317 / #45341 都指向 Chrome 集成拒绝 `apikey` 鉴权方法，影响自部署或第三方 OpenAI 兼容网关用户。结合 PR [#47170](https://github.com/openai/codex/pull/47170)（显式网关登录控制），可预期 OpenAI 正在为自定义网关建设更完整的支持链路。

---

> 📊 **总结**：今日 Codex 进入 "alpha 加速 + PR 批量化

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data for 2026-09-22. Let me analyze the data and create a structured report.

Let me analyze the key items:

**Release:**
- v0.62.0-nightly.20260922.gd5b3e3acc was released
- Changes include proxy-agent esbuild interop fix and ACP mode tool_call update

**Top Issues to highlight (10):**
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (13 comments, 2 likes) - P1 bug
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments) - enhancement
3. #21409 - Generalist agent hangs (8 comments, 8 likes) - P1 bug, popular
4. #22745 - AST-aware file reads, search, and mapping (7 comments) - feature
5. #21968 - Gemini does not use skills and sub-agents enough (6 comments) - bug
6. #26525 - Add deterministic redaction and reduce Auto Memory logging (5 comments) - security
7. #26522 - Stop Auto Memory from retrying low-signal sessions indefinitely (4 comments)
8. #22232 - Enhance browser_agent resilience (4 comments)
9. #21983 - browser subagent fails in wayland (4 comments, 1 like) - P1 bug
10. #21000 - Experiment with native file tools for task tracker (4 comments)

**Top PRs to highlight (10):**
1. #29441 - chore/release: bump version to 0.62.0-nightly - new release
2. #29323 - fix(core): handle trailing-slash patterns in nested .gitignore correctly
3. #24941 - Generalize evals infra to support more types of evals
4. #29242 - fix(core): stop matching 401 as a substring in isAuthenticationError
5. #29237 - Fix: list_background_processes prints (Exit Code: null) for signal-killed processes
6. #29328 - fix(a2a-server): honour LOG_LEVEL and keep credentials out of the log - P1 security
7. #29336 - fix(core): secure non-system policy directories against write permissions - P2 enterprise
8. #29244 - fix(core): make tool file writes atomic and serialize same-path writes - P1
9. #29327 - fix(sdk): honour AgentShellOptions env and timeoutSeconds
10. #29440 - fix(core): use UTF-8 offsets for web-fetch citations

**Trends from Issues:**
- Agent reliability (subagents, browser agent)
- Memory system improvements (Auto Memory)
- Performance optimization (token usage, sandboxing)
- AST-aware code understanding
- Better tool selection
- Security (directory permissions, logging credentials)

**Developer pain points:**
- Subagent hangs and unreliable termination
- Browser subagent failures on Wayland
- Auto Memory issues (retry loops, invalid patches, logging secrets)
- Tool configuration not respected
- Files losing edits due to concurrent writes

Let me draft the report now.</think>

# Gemini CLI 社区动态日报 · 2026-09-22

---

## 📌 今日速览

今日社区动态围绕**Agent 可靠性**与**底层安全加固**两大主线展开。夜间版本 `v0.62.0-nightly` 正式发布，主要修复了代理环境下的 esbuild 互操作问题；与此同时，多个 P1 级 Bug 显示 **subagent 失控、Browser Agent 在 Wayland 下崩溃、文件并发写入丢失** 等问题仍是开发者最大痛点。安全方向出现集中 PR 浪潮，聚焦凭证日志保护与策略目录权限收敛。

---

## 🚀 版本发布

### v0.62.0-nightly.20260922.gd5b3e3acc

夜间版本已发布，由 robot 自动 bump 完成（#29441），核心变更：

- **fix(core)**：规范化 `https-proxy-agent` / `http-proxy-agent` 的 CJS/ESM 互操作处理，统一 esbuild 打包后的构造函数解析（#29401）
- **fix(cli)**：在 ACP（Agent-Client Protocol）模式下，于 `request_permission` 之前先发出 `tool_call` 状态更新（pending），确保权限请求前 UI 已正确呈现工具调用（#29439）

🔗 [Release 链接](https://github.com/google-gemini/gemini-cli/pull/29441)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要原因 |
|---|-------|------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | 💬 13 | P1，**subagent 命中上限却仍标记 GOAL 成功**，状态机设计需重审 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | 💬 8 👍 8 | P1，**8 个赞**为本期最高，generalist 子代理常驻挂起，连简单建目录都无法返回 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model's bash affinity via Zero-Dependency OS Sandboxing | 💬 9 | P2 enhancement，倡导以 OS 级沙箱替代依赖式方案，发掘 Gemini 3 的原生 bash 能力 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess the impact of AST-aware file reads, search, and mapping | 💬 7 | EPIC 级特性调研，意在用 AST 工具降低 token 消耗与 turn 浪费 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough | 💬 6 | 用户反映自定义 skills/subagents 几乎不会被主动调度 |
| 6 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent fails in Wayland | 💬 4 👍 1 | P1，Browser Agent 在 Linux Wayland 环境直接失败 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction and reduce Auto Memory logging | 💬 5 | P2 安全，**Auto Memory 在模型上下文中明文存有 secret 风险** |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Enhance browser_agent resilience: Automatic session takeover | 💬 4 | P3 feature，要求 Browser Manager 处理锁定 profile 时的恢复 |
| 9 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) `~/.gemini/agents/filename.md` 不识别 symlink | 💬 4 | P2 bug，影响 dotfile 仓库用户的 subagent 配置管理 |
| 10 | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) Experiment with native file tools for task tracker | 💬 4 | 提议用原生文件工具替代 WriteToDo，提升任务跟踪鲁棒性 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 影响面 | 关键变更 |
|---|----|--------|---------|
| 1 | [#29323](https://github.com/google-gemini/gemini-cli/pull/29323) `fix(core): handle trailing-slash patterns in nested .gitignore correctly` | core | 修复 `build/` 这类仅带尾斜杠的模式在嵌套 `.gitignore` 中错误锚定到自身目录的问题（已合并） |
| 2 | [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) `stop matching 401 as a substring in isAuthenticationError` | core | `401` 子串误判导致端口号 `4012` 等被当作认证错误触发重新登录，已修复（已合并） |
| 3 | [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) `make tool file writes atomic and serialize same-path writes` | core | **P1**：并发 `replace` 同一文件导致静默丢编辑，引入序列化 + 原子写 |
| 4 | [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) `a2a-server: honour LOG_LEVEL and keep credentials out of the log` | security | **P1**：修复 a2a-server 日志硬编码 `info` 等级、可能将凭证写入日志的问题 |
| 5 | [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) `secure non-system policy directories against write permissions` | enterprise | **P2**：策略目录权限扫描扩展至 user/workspace 三层，并支持 POSIX/Windows 用户所有权校验 |
| 6 | [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) `sdk: honour AgentShellOptions env and timeoutSeconds` | agent/sdk | `SdkAgentShell.exec` 此前忽略 `env` 与 `timeoutSeconds`，导致长命令永远挂起 |
| 7 | [#29333](https://github.com/google-gemini/gemini-cli/pull/29333) `vet the permissions of policy directories found by convention` | enterprise | 对约定目录读取用户/工作区策略时显式校验写入权限 |
| 8 | [#29329](https://github.com/google-gemini/gemini-cli/pull/29329) `pause stdin after truncation, and say when it gives up` | cli | 修复 `process.stdin.destroy()` 之后无法再次读取导致的输入截断 |
| 9 | [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) `bound how often one call may expand the sandbox` | core | 阻止 `sandbox_expansion_required` 反复触发导致的递归 OOM |
| 10 | [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) `use UTF-8 offsets for web-fetch citations` | agent | 修正 `web-fetch` 在非 ASCII/emoji 响应中的引用偏移，对齐已有 `web-search` 逻辑 |

补充提及：
- [#24941](https://github.com/google-gemini/gemini-cli/pull/24941) **Generalize evals infra**：评估体系正式支持 "behavioral / hero / component" 三级 suite 编排（已合并）
- [#29401](https://github.com/google-gemini/gemini-cli/pull/29401) **proxy-agent esbuild 互操作**：今日 nightly 包含的核心修复（已合并）

---

## 📈 功能需求趋势

从 Issue 文本与标签中归纳，社区目前最关注的几个方向：

1. **AST-aware 代码理解（#22745, #22746, #19561）**：通过 tilth/glyph 等 AST 工具实现精准方法边界读取、降低 firehose 读取带来的 token 浪费。
2. **OS 级沙箱与意图路由（#19873）**：摒弃依赖式沙箱，借 Gemini 3 原生 bash 亲和力做 Post-Execution Intent Routing。
3. **Auto Memory 系统重构（#26516/26522/26523/26525）**：成为近月最密集的需求集群，涵盖 redaction、retry 风暴、inbox 补丁隔离、后台提取器提示词调优。
4. **持久化任务追踪（#18836, #21000）**：用文件系统 CRUD 替代 LLM in-context WriteToDo，规避上下文腐化与会话丢失。
5. **Subagent 可观测性（#21763, #22598, #21968）**：`/bug` 与 `/chat share` 需要携带 subagent 上下文与轨迹。
6. **Browser Agent 韧性（#21983, #22232, #22267）**：Wayland 兼容、锁定 profile 自动接管、`settings.json` 覆盖生效。
7. **工具数量治理（#24246）**：>128/400 个 tool 时触发 400，期望启用范围智能收敛。

---

## 🧩 开发者关注点（痛点 + 高频需求）

**🔴 稳定性和正确性**
- Subagent `MAX_TURNS` 后错误标记为 `GOAL` 成功，掩盖中断（#22323）
- Generalist agent 调度后永不返回（#21409）
- 并发工具调用同一文件**静默丢编辑**（#29244 正在修复）
- 工具配置被忽略：Browser Agent 不读 `settings.json`、SdkAgentShell 忽略 `timeoutSeconds`（#22267、#29327）

**🔒 安全与权限**
- a2a-server 日志硬编码 info 等级且可能打印凭证（#29328）
- 策略目录仅校验 system 一层，user/workspace 易被篡改（#29333/29336）
- Auto Memory 把含 secret 的 transcript 直接送进模型上下文（#26525）

**🐢 性能与终端体验**
- 终端 resize 时的闪烁与高开销（#21924）
- `\n` 转义行为有误（#22466）
- 模型频繁生成 tmp 脚本污染工作区（#23571）

**🧠 能力调度**
- 自定义 skills/subagents 几乎不会被自动选用（#21968）
- >128 个 tool 直接 400，需要智能筛选（#24246）
- Bug report 缺失 subagent 上下文（#21763）

**🧰 可用性细节**
- `~/.gemini/agents/` 不识别符号链接（#20079）
- `/compress` 不持久化，会话恢复后失效（#21335）
- 沙箱扩展请求无限递归导致 OOM（#29332）
- `web-fetch` 多字节内容引用错位（#29440）

---

> 📊 数据范围：2026-09-22 当日 GitHub 公开 Issues / PRs / Releases。报告生成模型：MiniMax-M3。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese-language daily report for GitHub Copilot CLI community dynamics based on the provided GitHub data. Let me analyze the data carefully and structure the report according to the template.

Key data:
- v1.0.88-1 (Fixed: preserve /allow-all during managed-settings refresh, exact session approvals, sandboxed network denials)
- v1.0.88-0 (Added: OSC 777 terminal notifications for Ghostty and WezTerm, namespaced custom skills, MCP/plugin view improvements)
- v1.0.87 (2026-09-21): user and managed startup defaults for Auto routing tier, consecutive steering prompts combination

Issues to highlight (top 10):
1. #3385 [CLOSED] WSL running issue after upgrade - 14 comments, 9 thumbs up
2. #2486 [CLOSED] MCP server blocked by policy - 8 comments
3. #1313 [CLOSED] Session Branching - 8 comments, 13 thumbs up (popular feature request)
4. #3399 [CLOSED] Custom headers for BYOK - 6 comments, 14 thumbs up
5. #3749 [CLOSED] Terminal streaming renderer corrupts output - 6 comments, 8 thumbs up
6. #4211 [CLOSED] BigInt in structured MCP response - 6 comments
7. #4699 [OPEN] OOM crash on long --resume sessions - 6 comments, 6 thumbs up
8. #1663 [CLOSED] Agent implements changes during Plan Mode - 4 comments
9. #1425 [CLOSED] update hook payload session id - 4 comments
10. #2629 [CLOSED] /instructions command doesn't show user-level files - 3 comments
11. #2223 [CLOSED] CAPIError for GPT models - 3 comments
12. #1971 [CLOSED] Granular organizational policies - 3 comments
13. #3264 [OPEN] Document symlink behavior on Windows - 3 comments
14. #4892 [OPEN] Extension hosts/MCP servers re-enumerated hourly - 2 comments
15. #4844 [OPEN] --yolo flag swallowed - 2 comments
16. #4837 [OPEN] Policy-driven enabledPlugins issue - 2 comments
17. #3315 [CLOSED] Research tool "create" missing - 2 comments
18. #2727 [CLOSED] Allow plugins to include instruction files - 2 comments
19. #4253 [CLOSED] /ask frequently returns no result - 2 comments
20. #25 [CLOSED] /mcp add fields not visible - 2 comments
21. #4218 [OPEN] Allow users to configure the model pool used by Auto mode - 2 comments, 16 thumbs up (very popular!)
22. #3704 [OPEN] Hebrew text RTL displayed LTR - 1 comment
23. #4888 [OPEN] MCP client legacy initialize - 1 comment
24. #4926 [CLOSED] Atlassian MCP OAuth fails - 1 comment
25. #4705 [OPEN] Queued prompts stuck after idle - 1 comment
26. #4853 [CLOSED] Linux sandbox hangs silently - 1 comment
27. #4924 [OPEN] Desktop app custom agents missing in worktree - 1 comment
28. #3875 [CLOSED] Subagents spawn failure with specific models - 1 comment
29. #3469 [CLOSED] File @Mention slow for large repo - 1 comment
30. #3119 [CLOSED] BYOK gpt-5.5 effort xhigh fallback - 1 comment

PRs:
1. #4739 [OPEN] docs: propose terminal-owned macOS notifications
2. #4770 [OPEN] Document the WebSocket responses opt-out

Only 2 PRs are provided. So I need to mention all 2.

Now let me identify trends in feature requests:
- MCP-related issues (most common)
- BYOK (Bring Your Own Key) configuration
- Auto mode configuration/model selection
- Session management (branching, resume, OOM)
- Plan Mode behavior
- Plugin support improvements
- Windows/WSL compatibility
- Theming/i18n (RTL support)
- Linux sandboxing
- Performance (large repositories)
- Custom agents
- Policy management
- Notification systems

Pain points:
- OOM crashes on long sessions (#4699 OPEN)
- MCP reliability issues
- Windows/WSL installation problems
- Terminal rendering bugs
- Auto mode opacity (can't configure model pool)
- Policy/plugin management gaps

Let me now write the report in clear, professional Chinese suitable for technical developers.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-22**

---

## 一、今日速览

过去 24 小时内，Copilot CLI 连续发布了 **v1.0.87、v1.0.88-0、v1.0.88-1** 三个版本，重点强化了 Auto 路由模式的可管理性、终端通知能力与沙箱网络稳定性。社区方面，**长时间会话 OOM 崩溃（#4699）** 仍是当前唯一高热度 OPEN 议题；Auto 模式模型池不可配置（#4218，👍16）与 BYOK 自定义 Header（#3399，👍14）持续获得高赞，反映开发者对企业级可控性诉求强烈。

---

## 二、版本发布

### v1.0.87（2026-09-21）
- **Auto 路由分层**：为 Auto routing tier 引入用户级与组织级 managed 的启动默认值，支持严格模式与用户可覆盖的组织策略。
- **连续指令合并**：同一模式下的连续 steering prompts 合并为单条待发消息；空输入框按 Up 可召回编辑（含粘贴文本）。

### v1.0.88-0
- **新增**：可选 OSC 777 终端通知，原生支持直连的 Ghostty 与 WezTerm 会话。
- **改进**：
  - 技能发现支持命名空间自定义技能与忽略目录配置
  - MCP / 插件视图展示服务端展示名与插件描述，状态更清晰
  - Resumi…（描述被截断）

### v1.0.88-1（修复版）
- 修复 managed-settings 刷新失败时丢失 `/allow-all` 的问题
- 完善路径级精确授权：缺失路径可记录会话级精确批准（不连带授权父目录），并在 `/list-dirs` 可见、`/reset-allowed-tools` 清空
- 修复代理隧道失败引发的沙箱网络拒绝

---

## 三、社区热点 Issues（Top 10）

1. **#4699 [OPEN] 长时间 `--resume` 会话 OOM 崩溃（JavaScript heap out of memory）**  
   https://github.com/github/copilot-cli/issues/4699  
   6 评论 / 👍6 / 唯一高热度未关闭 Bug。1.0.82 在长时间恢复会话下反复触发 4 GiB V8 堆上限崩溃，且 Node 诊断报告直接写入用户当前工作目录造成污染。**重要性**：直接影响重度用户的连续工作流，是当前最值得追踪的稳定性问题。

2. **#4218 [OPEN] Auto 模式模型池可配置化**  
   https://github.com/github/copilot-cli/issues/4218  
   2 评论 / 👍16（社区热度最高）。用户无法限制 Auto 模式可选模型，导致成本与行为难以预测。**重要性**：👍数远超其他议题，反映 Auto 模式已成核心使用路径但缺乏精细化控制。

3. **#3399 [CLOSED] BYOK 支持自定义 HTTP Header**  
   https://github.com/github/copilot-cli/issues/3399  
   6 评论 / 👍14。涉及 X-Tenant-ID、X-Organization-ID 等多租户场景。**重要性**：企业用户在私有 LLM 网关部署中的高频刚需。

4. **#3385 [CLOSED] WSL 升级后 Copilot CLI 1.0.49 卡死**  
   https://github.com/github/copilot-cli/issues/3385  
   14 评论 / 👍9。**重要性**：长期跟踪 Issue，本次关闭；Windows + WSL 仍是大量开发者的痛点环境。

5. **#1313 [CLOSED] Session Branching 会话分支能力**  
   https://github.com/github/copilot-cli/issues/1313  
   8 评论 / 👍13。允许从当前会话派生继承完整历史的新会话。**重要性**：广受欢迎的功能请求，已关闭意味着很可能已在路线图中或已落地。

6. **#3749 [CLOSED] 终端流式渲染器输出损坏（字符重复 / 截断）**  
   https://github.com/github/copilot-cli/issues/3749  
   6 评论 / 👍8。影响思考阶段与最终回复的输出。**重要性**：影响所有用户的核心交互体验。

7. **#4211 [CLOSED] BigInt 在结构化 MCP 响应中无法序列化**  
   https://github.com/github/copilot-cli/issues/4211  
   6 评论 / 👍3。MCP 工具返回大整数时直接中断任务。**重要性**：MCP 生态扩展性的基础兼容问题。

8. **#2486 [CLOSED] 个人 Pro+ 账户 MCP server 被策略阻断**  
   https://github.com/github/copilot-cli/issues/2486  
   8 评论 / 👍0。运行数周的工具突然被拦截，作者明确要求 GitHub 官方回复。**重要性**：MCP 策略体验的代表性负面案例。

9. **#4892 [OPEN] 扩展宿主与所有 MCP 服务每小时重新枚举**  
   https://github.com/github/copilot-cli/issues/4892  
   2 评论 / 👍0（作者主动修正了先前 20 进程 / 4.3 GB 内存泄漏的错误数据）。**重要性**：行为正确性描述被独立复现，影响长会话资源占用。

10. **#1663 [CLOSED] Plan Mode 下 Agent 仍实际改代码**  
    https://github.com/github/copilot-cli/issues/1663  
    4 评论 / 👍6。`[[PLAN]]` 前缀本应只规划，实际却执行了完整功能实现。**重要性**：Agent 安全/可控性的标志性 Bug。

---

## 四、重要 PR 进展（2 条）

> 注：过去 24 小时仅 2 条 PR 更新，均为文档类提案，已列出全部。

1. **#4739 [OPEN] docs: 提议由终端接管 macOS 通知**  
   https://github.com/github/copilot-cli/pull/4739  
   作者 @anujb-msft。说明 macOS 通知点击问题，并附带 MIT 许可的可移植终端通知示例与回归测试。**注意**：这是参考提案，不修改已发布的 CLI；仓库不暴露应用实现，仅为维护者提供文档示例。

2. **#4770 [OPEN] 文档化 WebSocket responses 退出选项**  
   https://github.com/github/copilot-cli/pull/4770  
   作者 @1fanwang。声明支持 WebSocket responses 的模型默认走 WS 传输；当网络阻断 WS 或出现 `400 input item ID does not belong to this connection` 时，需要明确记录可用的退出口。**重要性**：补齐 BYOK / 自定义端点用户的关键故障排查文档。

---

## 五、功能需求趋势

从近 24 小时更新的 50 条 Issue 中可提炼以下高频方向：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **MCP 生态可靠性与兼容** | #2486、#4211、#4888、#4926、#4837 | 极高 |
| **BYOK / 企业级可控性** | #3399、#3119、#2223、#4218 | 极高 |
| **会话管理（分支/恢复/内存）** | #1313、#4699、#4705 | 高 |
| **Auto 模式策略化** | #4218、v1.0.87 release | 高 |
| **Plugin / 配置管理** | #2727、#3264、#4837 | 中 |
| **Agent 行为边界** | #1663、#3875、#3315 | 中 |
| **平台兼容与安装** | #3385、#4853、#4924 | 中 |
| **终端渲染与国际化** | #3749、#3704、#3469 | 中 |
| **终端通知** | v1.0.88-0、#4739 | 新兴 |

**核心判断**：社区诉求已从"能不能用"转向"企业能不能管"，MCP、Auto 模式、BYOK 三大主题占据绝对话题密度。

---

## 六、开发者关注点

**1. 稳定性仍是最大痛点**  
- 长会话 OOM（#4699）尚未解决，影响深度用户留存
- 沙箱网络、终端流式渲染、Linux 命名空间（#4853）等底层问题反复出现

**2. MCP 是双刃剑**  
- 是生态扩展的关键，却也带来最多的兼容性 / 策略阻断类工单
- OAuth、BigInt 序列化、双时代协议握手（#4888）成为新焦点

**3. 企业级控制诉求集中爆发**  
- Auto 模式模型池选择（#4218，👍16）压倒性领先
- BYOK 自定义 Header（#3399，👍14）紧随其后
- 策略驱动的插件启用（#4837）暴露配置/激活不同步的设计缺陷

**4. Windows + WSL 用户持续承压**  
- 升级后卡死（#3385）、symlink 文档缺失（#3264）、子代理模型组合问题（#3875）均与该环境强相关

**5. 文档与可发现性短板**  
- WebSocket 退出选项（#4770）、Linux 沙箱覆盖变量（#4853）、`.copilot` 目录 symlink（#3264）等都属于"已有能力但未文档化"类型
- 反映出功能迭代速度已超过文档同步能力

---

*数据来源：github.com/github/copilot-cli（截至 2026-09-22）*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Looking at the data, I notice something important: the repository mentioned is `MoonshotAI/kimi-cli`, but the user asked for a report on "Kimi Code CLI". Let me re-read the title: "Kimi Code CLI 社区动态日报" - this is asking for Kimi Code CLI daily report.

Looking at the data:
- The repository `MoonshotAI/kimi-cli` is being archived
- It's being replaced by `Kimi Code CLI` at `MoonshotAI/kimi-code`
- Issue #2661 explicitly states "Kimi CLI is no longer maintained: please migrate to Kimi Code CLI"
- The new repository mentioned is https://github.com/MoonshotAI/kimi-code

So the report should be about Kimi Code CLI (the new project), but the GitHub data given is from the old `kimi-cli` repo which is being archived. I should frame the report as: Kimi Code CLI is now the main project, the old kimi-cli is being archived, and here's what's happening in the transition.

Let me structure the report:

1. **今日速览** - The key news is that Kimi CLI (the Python version) is being archived, and users should migrate to Kimi Code CLI. Version 1.51.0 is the final release.

2. **版本发布** - 1.51.0 is released, the final version before archival.

3. **社区热点 Issues** - There's only 1 issue in the past 24 hours: #2661 about migration. I need to mention there's only 1 issue (not 10) since the data shows only 1 issue.

4. **重要 PR 进展** - There are 7 PRs. Let me identify the most important:
   - #2659: Archive kimi-cli and point users to Kimi Code CLI (CLOSED)
   - #2660: Bump kimi-cli to 1.51.0 (CLOSED)
   - #2662: bump fastapi from 0.128.0 to 0.141.1
   - #2663: bump rich from 14.2.0 to 15.0.0
   - #2664: bump agent-client-protocol from 0.8.0 to 0.12.1
   - #2665: bump ruff from 0.14.14 to 0.16.8
   - #1625: feat(mcp): add --scope option for OAuth and fix upstream auth flow issues (older PR, updated today)

5. **功能需求趋势** - From the issues (only 1), the main trend is migration to the new CLI. From the PRs, we see:
   - Dependency upgrades (fastapi, rich, agent-client-protocol, ruff)
   - MCP OAuth improvements
   - Archive transition

6. **开发者关注点** - The main concern is migration path; the Python version is being discontinued in favor of a native binary.

Important note: The user asked for "10 most worth-watching Issues" and "10 important PRs" but the data only has 1 issue and 7 PRs. I need to honestly report what's available and not fabricate content.

Let me write this in clear, professional Chinese suitable for technical developers.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-09-22** | **数据来源：GitHub**

---

## 📌 今日速览

**Kimi CLI（Python 版本）正式停止维护并进入归档阶段。** 仓库 `MoonshotAI/kimi-cli` 发布了最后一个版本 **1.51.0**，随后由维护者 @RealKai42 提交归档 PR，所有用户被引导迁移到下一代终端 AI Agent —— **Kimi Code CLI**（原生二进制版本，仓库地址 `MoonshotAI/kimi-code`）。今日社区动态以归档过渡为主，技术活动主要为归档前的依赖版本批量升级。

---

## 🚀 版本发布

### v1.51.0 — 末代版本（Final Release）
- **性质**：归档前的最后一个发布版本
- **关键变更**：
  - 发布说明同步至 CHANGELOG 与官方文档（中英双语）
  - `packages/kimi-code` 桩模块版本对齐到 1.51.0，并解除对 `kimi-cli` 的依赖
  - 此版本后仓库将进入 archived 状态，README / 文档站 / 安全策略 / PyPI 元数据将不再更新
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2660

---

## 🔥 社区热点 Issues

> ⚠️ **数据说明**：过去 24 小时内仓库仅新增 1 条 Issue。以下为完整列表。

### #2661 📢 Kimi CLI is no longer maintained: please migrate to Kimi Code CLI
- **作者**：@RealKai42 | **状态**：OPEN | **评论**：0 | **👍**：0
- **为何重要**：这是仓库级别的**官方公告 Issue**，宣告 Python 版 Kimi CLI 的生命周期终结，确立 Kimi Code CLI（原生二进制）作为继任者。关键信息包括：
  - Kimi CLI 不再维护，仓库即将归档
  - 继任者 **Kimi Code CLI** 由同一团队以**原生二进制**重新构建（非 Python 运行时）
  - 引导所有用户、贡献者转向新仓库 `MoonshotAI/kimi-code`
- **社区反应**：发布极早期（24h 内），尚无讨论互动，但作为**项目迁移的官方锚点**，所有下游用户必须关注。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2661

---

## 🔧 重要 PR 进展

> 共 7 条 PR，过去 24 小时内 4 条为依赖升级，2 条为归档操作，1 条为长期贡献的 MCP 功能。

### 归档与发布（核心里程碑）
| # | 标题 | 作者 | 状态 | 重点 |
|---|------|------|------|------|
| [#2659](https://github.com/MoonshotAI/kimi-cli/pull/2659) | chore: archive kimi-cli and point users to Kimi Code CLI | @RealKai42 | ✅ CLOSED | **里程碑 PR**：准备仓库归档；归档后无法更新 README/文档/策略，因此一次性完成所有指向 Kimi Code CLI 的链接与说明切换 |
| [#2660](https://github.com/MoonshotAI/kimi-cli/pull/2660) | chore(release): bump kimi-cli to 1.51.0 | @RealKai42 | ✅ CLOSED | 1.51.0 发布配套 PR，同步版本号、CHANGELOG、breaking changes 文档 |

### 依赖批量升级（归档前清理）
| # | 标题 | 升级路径 | 意义 |
|---|------|----------|------|
| [#2662](https://github.com/MoonshotAI/kimi-cli/pull/2662) | bump fastapi | 0.128.0 → **0.141.1** | 跨越多个小版本，含兼容性修复 |
| [#2663](https://github.com/MoonshotAI/kimi-cli/pull/2663) | bump rich | 14.2.0 → **15.0.0** | **主版本升级**，宣告放弃 Python 3.8 支持 |
| [#2664](https://github.com/MoonshotAI/kimi-cli/pull/2664) | bump agent-client-protocol | 0.8.0 → **0.12.1** | 跟进 Agent Client Protocol 协议演进 |
| [#2665](https://github.com/MoonshotAI/kimi-cli/pull/2665) | bump ruff | 0.14.14 → **0.16.8** | 升级 dev 依赖的代码检查工具链 |

### 社区功能贡献
| # | 标题 | 作者 | 状态 | 重点 |
|---|------|------|------|------|
| [#1625](https://github.com/MoonshotAI/kimi-cli/pull/1625) | feat(mcp): add `--scope` option for OAuth and fix upstream auth flow issues | @4riel | 🔵 OPEN | **长期挂起后再次更新**：为 MCP server 配置新增可重复的 OAuth scope 支持，并修复上游 auth 流程问题；基于 `origin/main` 86f13642（CLI 1.50.0）与 FastMCP 3.2.4 / MCP SDK 1.27.1 之上 rebase。注意：此 PR 的归宿需与归档计划协调。 |

---

## 📈 功能需求趋势

由于仓库进入归档期，过去 24 小时仅 1 条 Issue，因此**功能需求信号主要来自 PR 与归档决策**。综合提炼的趋势如下：

1. **运行时架构迁移：Python → 原生二进制**
   - 由归档决定可看出官方明确选择**原生二进制**作为下一代替代方案，不再依赖 Python 运行时，对启动速度、分发便利性、安全性是显著提升。

2. **协议层持续演进（Agent Client Protocol）**
   - 升级 `agent-client-protocol` 0.8.0 → 0.12.1，跨度较大。说明 Kimi 系工具正在深度接入 ACP 生态，未来与 IDE / 编辑器侧的互操作性是关键方向。

3. **MCP 生态深化**
   - #1625 的 OAuth scope 与 auth flow 修复，反映社区对 MCP server 鉴权能力的诉求越来越工程化，OAuth 作用域细粒度控制成为标配需求。

4. **依赖现代化**
   - `rich 14 → 15`（放弃 Py3.8）、`fastapi` 大跨度升级、`ruff` 跟进 —— 表明即使在归档阶段，团队仍希望将 Python 生态切到现代基线。

5. **文档与发布资产的最终一致性**
   - 归档前对 README、CHANGELOG、安全策略、PyPI 元数据做"最后一批"更新 —— 反映迁移期对**用户路径清晰度**的重视。

---

## 👨‍💻 开发者关注点

| 关注点 | 详细描述 |
|--------|----------|
| **迁移路径与替代品** | 开发者最关心的是"我现有的脚本 / 配置 / 集成怎么办"。归档 PR 与官方 Issue #2661 已明确指向 `MoonshotAI/kimi-code`，但**新旧 CLI 的命令兼容性、配置文件迁移指引、API 行为差异**尚需在 Kimi Code CLI 仓库中给出说明。 |
| **归档仓库中遗留 PR 的处置** | #1625 这类仍在 OPEN 状态的功能 PR 是否会被 cherry-pick 到 Kimi Code CLI，还是直接关闭，决定了社区贡献者的投入回报。 |
| **依赖升级带来的兼容性风险** | 同一窗口内 4 条依赖批量升级（含一个 major version），合并入 1.51.0 后需要重点回归 FastAPI 服务端与 Rich 终端渲染。 |
| **原生二进制的可观测性 / 调试** | 相比 Python 版，原生二进制对开发者的事后调试、错误堆栈、插件机制将更受限，社区在迁移后大概率会反馈相关诉求。 |
| **包管理与发布渠道** | `packages/kimi-code` 桩模块从依赖中解耦，PyPI 端的发布策略需关注 —— 避免 pip install 用户拉到错误版本。 |

---

## 📎 相关链接

- 旧仓库（归档中）：https://github.com/MoonshotAI/kimi-cli
- 新仓库（继任者）：https://github.com/MoonshotAI/kimi-code
- 最终发布 PR：https://github.com/MoonshotAI/kimi-cli/pull/2660
- 迁移公告 Issue：https://github.com/MoonshotAI/kimi-cli/issues/2661

---
*报告生成于 2026-09-22，基于过去 24 小时 GitHub 公开数据。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a Chinese daily report for the OpenCode community based on GitHub data from 2026-09-22. Let me analyze the data carefully and produce a well-structured report.

Let me organize the key information:

**Release**:
- v1.18.32 with bugfixes for Bedrock image attachments (Claude/Nova/Llama 4 only) and Together AI streaming usage reporting
- Community contribution from @dc85: added DeepSeek V4.1 Flash and Grok 4.7 to Zen

**Top Issues by comment count (most active)**:
1. #6680 - view archived sessions on desktop (41 comments, 27 👍) - still open
2. #37326 - math equations not rendered (8 comments) - closed
3. #36889 - OpenCode Go service frequent outages (7 comments) - open
4. #26266 - Show reasoning/variant level for subagents (6 comments, 8 👍) - closed
5. #36081 - doesn't work under termux (5 comments) - open
6. #36028 - Could not install official VS Code extension (5 comments) - closed
7. #49057 - Muse Spark 1.3 Free access restricted (4 comments) - open
8. #35643 - Content filter blocks but user billed (4 comments) - closed
9. #50153 - desktop "Images and files" picker never opens on Windows (3 comments, 3 👍) - open
10. #50467 - Bad Request with deepseek-v4.1-flash (3 comments) - closed

Other notable issues:
- #50458 - Bash tool stdout/stderr pipe corrupts multi-byte outputs
- #43845 - V2 service spawns one MCP server pair per project directory
- #50401 - GET /api/session 500s when session path contains URL
- #50498 - WSL2 can't start opencode 2.0.12
- #50363 - orphaned MCP server processes accumulate
- #50314 - openai-compatible stream aborts on data: null
- #50486 - curl self-upgrade non-atomic
- #50285 - No streaming in v1.18.31
- #50382 - embedded browser never persists cookies
- #50203 - OpenCode V2 Termux support

**Top PRs** (recent and important):
1. #50271 - fix Windows server directory in project picker
2. #50071 - surface drain failures + check @mention skill permissions
3. #50270 - delete legacy V1 session rows
4. #50307 - bound instruction ancestor walk at filesystem root
5. #50506 - experimental evaluation API for AI
6. #50515 - flush missed parts when run goes idle
7. #50512 - add /rename slash command and rename dialog
8. #50492 - codemode coerce built-in arguments like JS
9. #50504 - preserve Vertex function call ids
10. #50507 - disable keepAliveTimeout so large responses not cut
11. #50511 - keep legacy session directory readable
12. #50509 - terminate whole MCP server process tree on teardown
13. #50508 - ignore non-object SSE keep-alive frames
14. #50495 - share child prompt cache affinity
15. #50489 - bind generator parameters at call
16. #50487 - run session HTTP hooks on AI SDK route
17. #50466 - resolve scoped packages from project directory
18. #50468 - confidence-gated model tier routing
19. #50471 - prevent shell tool hang on fast process exit
20. #50497 - align Catppuccin desktop themes

Now let me identify themes:

**Feature trends**:
- IDE integration (VS Code extension)
- Desktop UI features (rename dialog, archived sessions, picker)
- New model providers (QwenCloud International, DeepSeek V4.1, Grok 4.7)
- Math equation rendering
- Termux/Android support
- Browser/embedded cookie persistence

**Developer pain points**:
- MCP server process management (orphans, per-directory spawning)
- Streaming/SSE issues (large responses, keep-alive frames, no streaming)
- V1→V2 migration bugs
- Windows-specific bugs (file picker, project picker)
- Self-upgrade atomicity
- Billing when content filter blocks output
- Bash tool data integrity issues

Let me draft the report now in Chinese, keeping it concise and professional.</think>

# OpenCode 社区动态日报
**日期：2026-09-22**

---

## 📌 今日速览

OpenCode 在今日发布 **v1.18.32** 修复 Bedrock 图片附件与 Together AI 流式用量统计问题，社区贡献者 @dc85 同步接入 DeepSeek V4.1 Flash 与 Grok 4.7 至 Zen 模型目录。Issues 侧，高活跃话题集中在 **桌面端会话归档查看**（41 评论） 与 **OpenCode Go 服务稳定性**（HTTP 5xx 频繁中断），PR 侧则密集落地 **MCP 进程清理、SSE 流修复、Shell 工具竞态** 等稳定性增强，反映团队正集中精力解决 V2 架构下的遗留缺陷。

---

## 🚀 版本发布

### v1.18.32 — Bugfixes
- **Bedrock 图片附件**：仅对 Claude、Nova、Llama 4 模型进行附件提升（hoist），避免误处理。
- **Together AI 流式用量**：修复流式响应中的 token 用量统计。

**社区贡献致谢**：@dc85
- docs: 将 DeepSeek V4.1 Flash 添加到 Zen (#49897)
- feat: 将 Grok 4.7 添加到 Zen

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论 | 👍 | 关注点 |
|---|-------|------|------|-----|--------|
| [6680](https://github.com/anomalyco/opencode/issues/6680) | 桌面端查看归档会话 | OPEN | 41 | 27 | 长尾高赞需求，桌面 `...` 菜单缺失入口，社区呼声持续高涨 |
| [36889](https://github.com/anomalyco/opencode/issues/36889) | Zen Go 服务频繁中断 | OPEN | 7 | 0 | 每日多次 503/HTTP 000/Cloudflare 524，影响付费用户稳定性 |
| [49057](https://github.com/anomalyco/opencode/issues/49057) | Muse Spark 1.3 Free 被封禁无申诉路径 | OPEN | 4 | 0 | 涉及合规封禁流程透明度，是潜在的合规/信任风险 |
| [50153](https://github.com/anomalyco/opencode/issues/50153) | Windows 桌面端"图片与文件"选择器无法打开 | OPEN | 3 | 3 | Desktop IPC 处理器失败，Windows 体验缺失 |
| [37326](https://github.com/anomalyco/opencode/issues/37326) | 数学公式未渲染 | CLOSED | 8 | 4 | 影响科研/教学类场景展示效果 |
| [26266](https://github.com/anomalyco/opencode/issues/26266) | Subagent 显示推理/变体级别 | CLOSED | 6 | 8 | 已合并到产品路线图，体现社区对多 agent 可观测性的需求 |
| [36081](https://github.com/anomalyco/opencode/issues/36081) | Termux 下无法运行 | OPEN | 5 | 0 | Android 移动端可用性问题，关注度高 |
| [35643](https://github.com/anomalyco/opencode/issues/35643) | 内容过滤阻断但仍计费 | CLOSED | 4 | 0 | 计费系统公平性问题，已闭环 |
| [50467](https://github.com/anomalyco/opencode/issues/50467) | DeepSeek V4.1 Flash 报 Bad Request | CLOSED | 3 | 1 | 新模型接入初期的兼容性问题 |
| [43845](https://github.com/anomalyco/opencode/issues/43845) | V2 service 启动时为每个目录启动 MCP | OPEN | 3 | 0 | 严重的资源放大问题（53 个目录 × 2 个 MCP） |

---

## 🛠 重要 PR 进展

| PR | 说明 | 类型 |
|----|------|------|
| [#50512](https://github.com/anomalyco/opencode/pull/50512) | 桌面/Web 端引入 `/rename` 斜杠命令与重命名对话框，与 TUI 体验对齐 | 功能 |
| [#50506](https://github.com/anomalyco/opencode/pull/50506) | 新增 `@opencode/ai/experimental` 类型化评估 API 与 Effect 客户端 | 实验性功能 |
| [#50515](https://github.com/anomalyco/opencode/pull/50515) | 非交互式 `run` 在 idle 时刷新遗漏的 parts（修复 #50514） | Bugfix |
| [#50509](https://github.com/anomalyco/opencode/pull/50509) | 终止 MCP 时回收整个进程树，避免孤儿进程累积 | Bugfix |
| [#50508](https://github.com/anomalyco/opencode/pull/50508) | 忽略 `data: null` 等非对象 SSE keep-alive 帧，避免流中断 | Bugfix |
| [#50507](https://github.com/anomalyco/opencode/pull/50507) | 禁用 keepAliveTimeout，防止大响应被中途截断（修复 #50505） | Bugfix |
| [#50511](https://github.com/anomalyco/opencode/pull/50511) | 让非文件系统路径的 session 目录可读（修复 #50401） | Bugfix |
| [#50504](https://github.com/anomalyco/opencode/pull/50504) | 保留 Vertex Gemini 的 function call ID 并补齐相关录制 | Bugfix |
| [#50495](https://github.com/anomalyco/opencode/pull/50495) | 子 session 复用父级 prompt cache 亲和键，降低 token 成本 | 性能 |
| [#50492](https://github.com/anomalyco/opencode/pull/50492) | codemode 内置参数改为 JS 风格自动转换，移除类型限制 | DX 改进 |

---

## 📈 功能需求趋势

从 Issues 文本分析，社区关注的功能方向可归纳为以下几类：

1. **桌面/Web 端 UX 补齐**：归档会话查看（#6680）、重命名对话框（#50512）、文件选择器（#50153）、Plan/Build 切换（#38589）。桌面应用仍落后于 TUI，是当前最受关注的体验短板。
2. **新模型/Provider 接入**：QwenCloud International（#43067）、DeepSeek V4.1 Flash、Grok 4.7、Muse Spark，反映用户对**多模型生态**的强烈需求。
3. **数学与富文本渲染**：#37326 等多个 issue 指向 LaTeX/Markdown 渲染，科研与教育场景刚需。
4. **Subagent 可观测性**：#26266 期望展示推理级别/变体，#38564 关乎子agent 终止后的进程回收，多 agent 体系正在走向成熟。
6. **V2 架构稳定性**：MCP 进程管理、SSE 流处理、Shell 工具、curl 升级原子性，V2 大版本正在收尾。
7. **跨平台兼容**：Termux（#36081、#50203）、WSL2（#50498、#50491）以及 Windows 桌面（#50153、#50285）。

---

## 🧑‍💻 开发者关注点

高频痛点可归纳为 **"四个面向"**：

- **可靠性（Reliability）**
  - MCP server 进程孤儿化（#50363、#43845、#50509）
  - Shell 工具输出截断与多字节损坏（#50458、#50471）
  - SSE/keep-alive 引发的流中断（#50314、#50285、#50507、#50508）
  - V1 → V2 数据迁移残留（#50270、#50511）

- **桌面体验（Desktop UX）**
  - 文件选择器、归档会话、Plan/Build 切换、Update 中断（#50153、#6680、#38589、#50470）

- **合规与计费（Compliance & Billing）**
  - 用户被封禁却无申诉（#49057）、内容过滤仍计费（#35643）

- **可观测性（Observability）**
  - Subagent 推理级别（#26266）、HTTP hook 未触发（#50487）、session 流式事件发布（#50285）

整体来看，OpenCode 当前的工作重心已经从 **V2 功能铺开** 转向 **V2 体验打磨与稳定性收敛**，密集的 SSE/MCP/Shell 修复 PR 与高赞桌面端 Issue 是这一阶段最显著的信号。

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>用户要求我生成一份 jcode 社区动态日报，基于 GitHub 数据，时间是 2026-09-22。让我仔细分析数据：

1. **最新 Releases**：过去24小时无新版本发布
2. **最新 Issues**：16条，过去24小时内更新
3. **最新 PRs**：15条，过去24小时内更新

让我分类整理：

### 重要 Issues 分析：

**Bug类（高优先级）**：
- #583 - Info widgets jump/hide/disappear as content scrolls (UI闪烁问题，中优先级)
- #1227 - CLI silently falls back to Claude Opus and ignores default_provider (高优先级，配置被忽略)
- #1190 - GHA workflow failing due to duplicate env entry
- #1303 - No active credentials for provider: openrouter
- #1323 - Direct OpenAI OAuth reports GPT-5.6 Luna context as 272K instead of 1.05M
- #1361 - Ctrl+Up destroys the current unsubmitted prompt (UX问题)
- #1367 - Two jcode-tui account tests assert labels account_store::upsert_account never assigns
- #1365 - TUI test isolation regressed
- #1363 - cargo check warnings
- #1359 - Bind an Anthropic account to a working directory
- #1292 - JCODE_WAKE_MODE missing from config-cache fingerprint (已关闭)

**Feature Request类**：
- #750 - support herdr natively like pi-herdr (7个赞，比较受欢迎)
- #813 - ACP layer: no model catalog, no session/set_model
- #833 - Host-level shared state across sessions

**Security/CI类**：
- #1370 - Release and Discord announcement workflows not guarded
- #1369 - FreeBSD Smoke workflow missing permissions block

### 重要 PRs 分析：

- #1373 - fix(session): persist debug, canary and improve-mode state on blank session
- #1371 - ci(freebsd-smoke): declare least-privilege workflow permissions (关闭 #1369)
- #1372 - ci(release): publish and announce only from canonical repository (关闭 #1370)
- #1368 - fix(tui): stop two account tests asserting labels the store never assigns (修复 #1367)
- #1366 - fix(tui): stop the live git probe leaking host repo state into tests (修复 #1365)
- #1347 - fix: stop image blocks breaking turns on text-only models (runtime modality recovery)
- #1268 - feat(tui): @file mention picker with frecency ranking (closes #570)
- #1346 - feat(tui): /sessions <query> opens the session picker pre-filtered
- #1362 - fix(swarm): make stop quiesce queued and active worker turns
- #1364 - fix(test): drop unused test-module imports in jcode-app-core
- #1295 - fix(terminal): use tail expression for macOS terminal detection (已关闭)
- #1293 - fix(config): track wake mode in the config-cache fingerprint (已关闭)
- #1357 - fix(background): publish task status files atomically
- #1356 - fix(test): bound the shared test-env lock wait and name its holder
- #1360 - test(base): fix the 11 jcode-base lib tests that fail on master

### 功能需求趋势：
1. **多Provider支持/配置问题** - openrouter, OpenAI OAuth, Claude Opus fallback
2. **TUI/UX改进** - 文件提及选择器、会话选择器、Ctrl+Up 提示词历史
3. **会话管理** - 多会话共享状态、按目录绑定账户
4. **ACP层增强** - 模型目录、模型切换、推理力度控制
5. **Agent/工具生态集成** - Herdr原生支持
6. **CI/安全** - 权限最小化、fork保护

### 开发者痛点：
1. **配置问题** - 默认provider被忽略、配置缓存指纹缺失
2. **测试稳定性** - 测试隔离、线程数竞争、状态泄漏
3. **UI闪烁** - 多个HUD系统冲突
4. **CI安全** - 工作流权限过大
5. **模型上下文报告错误** - GPT-5.6 Luna 显示错误的上下文窗口
6. **TUX交互** - Ctrl+Up 销毁未提交草稿

现在让我写一份结构清晰的中文日报。

需要注意：
- 数据来源是2026-09-22，但issue的创建时间有的是2026-07、2026-08等
- "过去24小时内更新"意味着在9/21-9/22这段时间内有活动
- 我需要挑选10个最重要的issues和10个最重要的PRs

让我按重要性、热度、影响范围来挑选。

挑选10个最重要的Issues：
1. #1227 - 高优先级bug，CLI忽略default_provider配置，8条评论
2. #750 - 功能请求，7个👍，是所有issue中最受欢迎的
3. #583 - UI闪烁问题，8条评论
4. #1323 - GPT-5.6 Luna上下文窗口错误
5. #1370 - Release workflow 安全问题
6. #1369 - FreeBSD Smoke workflow 权限问题
7. #1361 - Ctrl+Up 销毁未提交草稿
8. #813 - ACP层缺少功能
9. #833 - 主机级别共享状态
10. #1303 - openrouter凭据问题

挑选10个最重要的PRs：
1. #1372 - ci(release): 限制在canonical repo（安全）
2. #1371 - ci(freebsd-smoke): 最小权限
4. #1373 - fix(session): 持久化debug状态
5. #1347 - 图像块兼容text-only模型（重要的兼容性问题）
6. #1268 - @file mention picker（功能增强）
7. #1346 - /sessions 查询预过滤（功能增强）
8. #1362 - swarm stop 正确停止worker
9. #1366 - 修复git probe泄漏到测试
10. #1368 - 修复account tests

让我开始撰写日报。</think>

# jcode 社区动态日报 · 2026-09-22

> 数据范围：GitHub `1jehuang/jcode` 仓库，过去 24 小时活跃的 Issues 与 PRs

---

## 📌 今日速览

今天仓库的活跃度集中在 **CI 安全加固** 和 **TUI/测试稳定性修复** 两条主线。维护者 @ianalitis 单日提交了 4 个安全相关 PR，覆盖 Release 流程的 fork 防护、FreeBSD Smoke 权限收紧以及多处 test 隔离回归；同时，多个长期悬而未决的 UX 问题（如 Ctrl+Up 销毁草稿、Info widget 闪烁）继续在社区讨论中获得关注。

---

## 🚀 版本发布

过去 24 小时内 **无新 Release**。最近一个已关闭的修复 PR（#1293，配置缓存指纹补全 `JCODE_WAKE_MODE`）已于昨日合并，但未触发版本号变更。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 简述 |
|---|-------|--------|------|
| 1 | [#1227](https://github.com/1jehuang/jcode/issues/1227) | 🔴 **高优先级 Bug** | CLI 静默忽略 `config.toml` 中的 `default_provider`，自动发现 Claude 凭证直接进入 Opus；社区反馈强烈，需 maintainer 决策 |
| 2 | [#750](https://github.com/1jehuang/jcode/issues/750) | 🟢 **热门 Feature**（👍 7） | 希望原生支持 Herdr 多路复用器（与 pi/claude/codex 平起平坐），目前 Herdr 只能通过 TUI 屏幕抓取识别 jcode，脆弱 |
| 3 | [#583](https://github.com/1jehuang/jcode/issues/583) | 🟡 UI Bug（8 评论） | Model/Context/Usage/KV cache 等 Info widgets 在内容滚动时出现跳动/消失；三套独立显示系统（margin HUD、overscroll status、右侧 fact stack）重复渲染 |
| 4 | [#1323](https://github.com/1jehuang/jcode/issues/1323) | 🟡 模型数据 Bug | OpenAI OAuth 路径下 GPT-5.6 Luna 上下文窗口错显 272K（官方为 1.05M），影响用户对模型能力的判断 |
| 5 | [#1370](https://github.com/1jehuang/jcode/issues/1370) | 🔒 **新提 · 安全** | Release 与 Discord 公告 workflow 未校验 `github.repository`，任何仓库推送 `v*` tag 即可伪造官方版本号与公告 |
| 6 | [#1369](https://github.com/1jehuang/jcode/issues/1369) | 🔒 **新提 · 安全** | 11 个 workflow 中唯有 FreeBSD Smoke 没有 `permissions` 块，被 CodeQL `missing-workflow-permissions` 标记 |
| 7 | [#1361](https://github.com/1jehuang/jcode/issues/1361) | 🟡 UX Bug | 在 composer 中按 Ctrl+Up/Alt+Up/Cmd+Up 直接覆盖未提交的草稿，无 stash、无 undo 栈 |
| 8 | [#813](https://github.com/1jehuang/jcode/issues/813) | 🟢 ACP 协议增强 | jcode 守护进程已支持 `SetModel` / `SetReasoningEffort` / 模型目录，但 ACP server（`src/cli/acp.rs`）完全未暴露 |
| 9 | [#833](https://github.com/1jehuang/jcode/issues/833) | 🟢 多会话协同（👍 1） | 同主机各 jcode session 互为孤岛，无法获知兄弟会话的 active sessions / message tail / todos / 后台任务 |
| 10 | [#1303](https://github.com/1jehuang/jcode/issues/1303) | 🟡 Provider 凭据 | 使用 auto 模型切换时频繁报 "No active credentials for provider: openrouter"，疑似凭据读取竞态 |

> 已关闭项：`#1292`（JCODE_WAKE_MODE 缺指纹）和 `#1190`（GHA 重复 env）已通过对应 PR 进入合并流程。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 内容 | 关联 Issue |
|---|----|------|-----------|
| 1 | [#1372](https://github.com/1jehuang/jcode/pull/1372) | `ci(release)` 仅在 `github.repository == '1jehuang/jcode'` 时执行发布与 Discord 公告，杜绝 fork 伪造官方版本 | Closes #1370 |
| 2 | [#1371](https://github.com/1jehuang/jcode/pull/1371) | `ci(freebsd-smoke)` 显式声明 `permissions: read-only`，消除 CodeQL 告警 | Closes #1369 |
| 3 | [#1373](https://github.com/1jehuang/jcode/pull/1373) | `fix(session)` 在空白 session 上持久化 debug / canary / improve-mode 状态，避免隐藏的 session-context 消息落盘为 transcript | Fixes #1339 |
| 4 | [#1347](https://github.com/1jehuang/jcode/pull/1347) | `fix` 在三层（消息清洗 / 重试降级 / 历史裁剪）做**运行时 modality 恢复**，解决 image block 在 text-only 模型下持续污染整个会话的问题 | Closes #1302 |
| 5 | [#1268](https://github.com/1jehuang/jcode/pull/1268) | `feat(tui)` 新增 `@file` 提及选择器，使用 **frecency** 排序，优先推荐项目本地已 tracked 文件 | Closes #570 |
| 6 | [#1346](https://github.com/1jehuang/jcode/pull/1346) | `feat(tui)` `/sessions <query>` `/session <query>` `/resume <query>` 接受可选查询，直接打开已预过滤的会话选择器 | Closes #1232 |
| 7 | [#1362](https://github.com/1jehuang/jcode/pull/1362) | `fix(swarm)` 让 `stop` 真正 quiesce 已排队与正在执行的 worker turn，防止 stop 返回后 worker 仍在跑 | Fixes #1352 |
| 8 | [#1366](https://github.com/1jehuang/jcode/pull/1366) | `fix(tui)` 阻止 `gather_git_info` 后台探测在测试中泄漏宿主仓库状态，恢复 #1133 引入的隔离行为 | Fixes #1365 |
| 9 | [#1368](https://github.com/1jehuang/jcode/pull/1368) | `fix(tui)` 修正两个断言了 `upsert_account` 永远不会赋值的标签的 account 测试 | Fixes #1367 |
| 10 | [#1360](https://github.com/1jehuang/jcode/pull/1360) | `test(base)` 一次性修复 11 个 `jcode-base` lib 测试，包括 code-vs-test 漂移与两处环境泄漏 | Fixes #1358 |

> 已合并：`#1295`（macOS terminal 检测改为 tail 表达式）、`#1293`（配置指纹补全 `JCODE_WAKE_MODE`）。

---

## 📈 功能需求趋势

从近 24 小时活跃的 Issues 中提炼出以下社区最关注的方向：

1. **🔐 CI / 供应链安全**
   `Release`、`Announce on Discord`、`FreeBSD Smoke` 三个 workflow 的权限与执行范围问题被同一日提出，提示仓库正在系统化补齐 GitHub Actions 的安全基线。

2. **🧩 多 Provider 与配置正确性**
   openrouter / OpenAI OAuth / Claude 默认回退 三类问题（#1227、#1303、#1323）显示，社区希望"在 `config.toml` 里写了什么就用什么"这一最朴素约定能被严格遵守。

3. **🤝 Agent 生态集成（Herdr / ACP）**
   - Herdr 原生身份（#750）是当前 👍 数最高的 Feature Request。
   - ACP server 缺少 model catalog、`session/set_model`、reasoning-effort（#813）反映出 ACP 主机生态正在成型，jcode 这边的协议层需要跟上。

4. **🪟 TUI 体验打磨**
   `@file` 选择器（#1268 已实现）、`/sessions` 预过滤（#1346 已实现）、Ctrl+Up 草稿保护（#1361 待修）、Info widget 闪烁（#583 待修）—— 说明 TUI 正从"能用"迈向"手感好"。

5. **🔄 跨会话协同**
   主机级共享会话状态（#833）、按工作目录绑定 Anthropic 账户（#1359），反映出多终端/多仓库并行场景的痛点开始浮现。

6. **🧪 测试可重复性**
   一天之内 4 个 PR（#1360、#1364、#1366、#1368）都在修测试，说明仓库在向 `cargo clippy -D warnings` + 零 warning budget 的硬性 CI 门槛推进。

---

## 👨‍💻 开发者关注点与高频痛点

| 痛点 | 代表 Issue / PR |
|------|----------------|
| **配置不被尊重**：`config.toml` 里的 `default_provider` / `default_model` 被 CLI 静默覆盖 | #1227 |
| **TUI 闪烁 / 多系统打架**：margin HUD、overscroll status、fact stack 重复渲染同一组字段 | #583 |
| **草稿丢失**：方向键调历史直接覆盖未提交输入 | #1361 |
| **模型元数据不准**：GPT-5.6 Luna 上下文窗口被报告为官方值的 ~1/4 | #1323 |
| **凭据切换竞态**：使用 auto switching 时偶发 "No active credentials" | #1303 |
| **测试不稳定**：git 探测泄漏到测试、env 锁无超时无持有者信息、account store 标签漂移 | #1365 / #1367 / #1349 |
| **CI 权限过宽**：fork 可触发 release 与公告 | #1370 |
| **多会话盲区**：无法问出"隔壁那个 session 在干嘛" | #833 |
| **账户作用域过粗**：Anthropic 账户是 daemon 级全局，无法按 repo 绑定 | #1359 |
| **图像消息污染文本模型历史**：一次失败让整轮后续 turn 都不可用 | #1302（已通过 #1347 修复） |

> 一句话总结：今天的 jcode 正在同时推进 **"协议/安全基线"** 和 **"TUI/测试手感"** 两条战线，前者由维护者集中处理，后者由社区持续提报。

---

*日报生成于 2026-09-22，数据基于 GitHub `1jehuang/jcode` 过去 24 小时活动。如需更早的历史趋势或单条 issue 的深度技术解读，告诉我即可。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Chinese daily report based on the GitHub data from the pi repository (earendil-works/pi). Let me analyze the data and create a comprehensive report.

Let me organize the data:

**Releases (past 24 hours):**
- v0.87.0 - New Features: Canonical session context and extension boundaries, Edit model context without rewriting history, add actionable lifecycle hooks. See ContextEditEntry

**Issues (50 total, showing top 30):**
Top issues by comments:
1. #7730 - High CPU usage on Mac OS with long session (17 comments, 10 thumbs)
2. #8684 - PI_OFFLINE silently disables all provider model discovery (12 comments)
3. #9803 - 0.86.0 regression: RPC steer success cannot be correlated with extension-handled input (9 comments)
4. #5105 - Compaction summarization ignores configured transport (7 comments, CLOSED)
5. #9737 - opencode-go catalog missing deepseek-v4.1-flash (6 comments, CLOSED)
6. #9169 - Images rendered incorrectly in fullscreen TUI mode (6 comments, CLOSED)
7. #9602 - Compaction can overflow by including thinking messages (6 comments)
8. #9549 - Large transcripts re-render every frame (6 comments)
9. #9773 - before_provider_request does not fire for summarization/compaction requests (5 comments)
10. #9822 - 0.86.x: Codex tool calls leak as raw harmony text (5 comments, CLOSED)
11. #9255 - TuiMainScreen: full-screen redraw storm (5 comments)
12. #8667 - Stale compaction entry bricks session (4 comments, CLOSED)
13. #9843 - 0.86.x regression: mid-stream APIConnectionError (4 comments, CLOSED)
14. #5921 - Pi creates toolResult for empty/malformed tool calls (4 comments, CLOSED)
15. #9674 - mistral-conversations: empty content deltas open text blocks (3 comments)
16. #9678 - mistral-conversations: hosted GLM reasoning dispatch drops effort (3 comments)
17. #9828 - Fullscreen exit corrupts scrollback (3 comments, CLOSED)
18. #9358 - docs(tui): document Component.invalidate() as required (3 comments)
19. #9784 - Allow extensions to access vendor-specific fields (3 comments)
20. #9819 - Contribution proposal: use auth.kimi.ai (3 comments, CLOSED)
21. #9354 - Prompt templates with invalid frontmatter silently dropped (3 comments, CLOSED)
22. #9873 - estimateMessageTokens crashes on string-content system messages (2 comments, CLOSED)
23. #9847 - Hide child sessions in /resume picker (2 comments, CLOSED)
24. #9845 - openai-codex-responses ignores maxTokens (2 comments, CLOSED)
25. #9136 - Jumpy "jump to latest message" overlay (2 comments, CLOSED)
26. #9792 - SessionManager.create() does not write session file (2 comments)
27. #9838 - Anthropic started banning Pi subscription usage (2 comments, CLOSED)
28. #9101 - clampMaxTokensToContext fixed 4096 margin (2 comments, CLOSED)
29. #9840 - Kimi provider never exits (2 comments, CLOSED)
30. #9872 - subagent example: re-invokes host process entry script (1 comment, CLOSED)

**Pull Requests (19 total):**
1. #9871 - 第一次Git实验作业 (CLOSED)
2. #9869 - fix(ai): skip empty Mistral content deltas (CLOSED)
3. #9866 - fix(agent): validate persisted tool arguments before replay (CLOSED)
4. #9861 - fix(ai,coding-agent): honor Google retry delay on rate limit 429s (CLOSED)
5. #9859 - feat(ai,coding-agent): add Grok 4.7 support (CLOSED)
6. #9851 - fix(ai): remove bare Anthropic model IDs from Bedrock catalog (CLOSED)
7. #9850 - WIP - Add Ollama as a native provider (CLOSED)
8. #9848 - docs(tui): document Component.invalidate() as required (CLOSED)
9. #9569 - fix(ai): coerce JSON-encoded object and array tool arguments (OPEN)
10. #9488 - fix(ai): add canonical Codex turn attribution (CLOSED)
11. #9842 - fix(tui): prevent jump-to-end label from shifting when scrollbar hides (CLOSED)
12. #9846 - fix(coding-agent): keep prompt and tool state across context handlers (CLOSED)
13. #9830 - fix(coding-agent): report invalid prompt frontmatter (CLOSED)
14. #9841 - fix(coding-agent): allow offline bug report exports (CLOSED)
15. #9483 - fix(coding-agent): make tool cwd resolution opt-in via customCwd (CLOSED)
16. #9833 - fix(tui): repaint regular-screen content on Windows 10 (CLOSED)
17. #9763 - feat(coding-agent): add pi.dev compatibility check (OPEN)
18. #9832 - Correlate RPC input dispositions with queued messages (CLOSED)
19. #9831 - docs(packages): add External packages section (CLOSED)

Now let me create the report. I'll need to be careful about the formatting and make it professional. Let me think about what's most important:

**Key themes:**
1. v0.87.0 release - major feature for session context editing
2. Compaction bugs are a major theme (multiple issues, multiple PRs)
3. TUI rendering performance issues on Windows and large transcripts
4. Model provider integrations (Grok 4.7, GLM, deepseek, Bedrock)
5. 0.86.x regressions
6. Extension API limitations

**Hot issues worth highlighting:**
1. #7730 - High CPU usage (highest thumbs up, 10)
2. #8684 - PI_OFFLINE undocumented behavior (12 comments)
3. #9803 - RPC steer correlation regression (9 comments)
4. #9602 - Compaction overflow thinking messages
5. #9549 - Full-screen redraw storm (Windows performance)
6. #9773 - before_provider_request missing in compaction
7. #9784 - Extension API vendor-specific fields
8. #9255 - TuiMainScreen full-screen redraw storm
9. #9822 - Codex tool calls leak as text
10. #9674/9678 - mistral-conversations GLM issues

**Important PRs:**
1. #9869 - Fix mistral empty content deltas (closes #9674)
2. #9866 - Validate persisted tool arguments
3. #9859 - Add Grok 4.7 support
4. #9846 - Keep prompt and tool state across context handlers
5. #9842 - Fix jump-to-end label shifting
6. #9832 - Correlate RPC input dispositions
7. #9861 - Honor Google retry delay on 429
8. #9851 - Remove bare Anthropic from Bedrock
9. #9841 - Allow offline bug report exports
10. #9830 - Report invalid prompt frontmatter

Let me write this up now in Chinese, professional and concise.</think>

# Pi 社区动态日报 · 2026-09-22

## 今日速览

v0.87.0 正式发布，引入**规范化会话上下文与扩展边界**机制，允许在不重写历史的前提下编辑模型上下文，并新增了可操作的扩展生命周期钩子（`ContextEditEntry`）。昨日社区高度活跃，Issue/PR 集中处理 **0.86.x 系列的多个回归问题**（尤其是 compaction、TUI 渲染性能、RPC steer 相关），并修复了一批核心 Provider 适配（Mistral、Codex、Anthropic Bedrock、Google 重试、Grok 4.7 新增）。

---

## 版本发布

### 🚀 v0.87.0

核心新特性：**规范化会话上下文与扩展边界（Canonical session context and extension boundaries）**

- 通过 `ContextEditEntry`，扩展可以在**不重写历史**的前提下编辑模型上下文
- 新增**可操作的扩展生命周期钩子**（actionable lifecycle hooks）
- 详细文档：[session-format.md#contexteditentry](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)
- 链接：[Release v0.87.0](https://github.com/earendil-works/pi/blob/v0.87.0)

---

## 社区热点 Issues

以下按讨论深度排序，挑选 10 条最值得关注的 Issue：

| # | Issue | 状态 | 评论 | 核心要点 |
|---|---|---|---|---|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | Mac OS 长会话高 CPU 占用 | OPEN | 17 (👍10) | **获赞最多**。Mac 上 Pi 运行可飙至 100-110% CPU，内存 600-800MB，疑似与上下文大小/会话长度相关；持续 1 个多月未根治 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` 静默禁用全部 Provider 模型发现 | OPEN | 12 | **文档与行为不一致**。文档说明 `PI_OFFLINE` 只禁用更新检查，但实际禁用了全部 Provider 模型目录发现，影响离线用户 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | 0.86.0 回归：RPC steer 无法与扩展处理输入对应 | OPEN | 9 | extension handler 可能消费 A 同时排队 B，但响应无法标识哪个输入被消费，**RPC 客户端无法可靠关联结果** |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | 大 transcript 全屏每秒重渲染（1 核饱和） | OPEN | 6 | Windows 11 / 2 核环境下，大 transcript 每一帧都触发完整重绘，**已通过 `pi -ne` 复现** |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction 包含被省略的 thinking 消息导致溢出 | OPEN | 6 | Qwen3.8 / llama.cpp 场景下，4 个回复触达 16,384 token 输出限制，thinking 内容使 compaction 溢出 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` 在 compaction/summarization 时不触发 | OPEN | 5 | 文档承诺会触发，但 `createSummarizationOptions()` 实际不设置 `onPayload`，**文档与实现不一致** |
| [#9784](https://github.com/earendil-works/pi/issues/9784) | 扩展无法访问响应中的 Provider 专有字段 | OPEN | 3 | `AssistantMessage` 被描述为"Procrustean bed"（一刀切），长期诉求 |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | mistral-conversations 空 content delta 打开文本块 | OPEN | 3 | GLM 5.x 在 mistral-conversations 通道下产生空白 + 400 错误，已通过 `openai-completions` 临时绕过但损失 prompt cache |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | TuiMainScreen 变更行在视口顶部上方时全屏重绘风暴 | OPEN | 5 | 长 transcript 下，~30 行 streaming thinking 让 `firstChanged < prevViewportTop` 路径被反复触发 |
| [#9792](https://github.com/earendil-works/pi/issues/9792) | `SessionManager.create()` 报告已持久化但未写盘 | OPEN | 2 | `isPersisted()===true` 但磁盘无 `.jsonl`，进程异常退出则会话丢失 |

**社区反应总结**：0.86.x 发布后引发了一波"回归报告"集中潮，主要集中在 compaction 链路（#8667、#9602、#9773、#9843）与 TUI 渲染性能（#9549、#9255、#9828）这两条主线。

---

## 重要 PR 进展

| # | PR | 关键改动 | 关联 |
|---|---|---|---|
| [#9869](https://github.com/earendil-works/pi/pull/9869) | 跳过 mistral-conversations 空 content delta | 修复空白字符串 delta 创建空文本块问题；统一处理 `{type:"text", text:""}`；新增 S1-S4 SSE fixtures | 关闭 #9674 |
| [#9846](https://github.com/earendil-works/pi/pull/9846) | context handler 保留 prompt 与工具状态 | 自 0.86 起 prompt/工具声明位于 transcript 系统消息，context handler 过滤/切片可能丢弃，导致请求缺工具并让 Codex 吐原始文本 | 0.86 关键修复 |
| [#9866](https://github.com/earendil-works/pi/pull/9866) | 重放前校验持久化工具参数 | `replay: "safe"` 工具在中断恢复时，使用变更后的 schema 重新校验参数（如 `Type.String()` → `Type.Literal("current")`） | |
| [#9859](https://github.com/earendil-works/pi/pull/9859) | 新增 Grok 4.7 支持 | 通过 models.dev 加载 `grok-4.7`，500k 上下文，图片输入，4 档 reasoning effort；价格 $2/$0.50/$6 per 1M | |
| [#9842](https://github.com/earendil-works/pi/pull/9842) | 修复 jump-to-end 标签在滚动条隐藏时跳动 | 标签独立于滚动条可见性居中绘制；裁剪绘制与点击边界 | 关闭 #9136 |
| [#9832](https://github.com/earendil-works/pi/pull/9832) | RPC 输入处置与排队消息关联 | 增加 `handled`/`queued`/`accepted` 显式处置状态，队列条目 ID 与 `queue_update` 对齐 | 关闭 #9803 |
| [#9861](https://github.com/earendil-works/pi/pull/9861) | Google 429 速率限制遵守 retry-delay | `RESOURCE_EXHAUSTED` 时按响应中明确 retry guidance 退避重试，避免立即失败 | |
| [#9851](https://github.com/earendil-works/pi/pull/9851) | 移除 Bedrock 目录中裸 Anthropic 模型 ID | AWS 不再支持 11 个 `anthropic.claude-*` on-demand 调用；扩展 `BEDROCK_INFERENCE_PROFILE_ONLY_MODEL_IDS` | |
| [#9841](https://github.com/earendil-works/pi/pull/9841) | 允许离线 bug report 导出 | 将离线检查从 `reportBug()` 移到 upload 路径；`PI_OFFLINE` 下仍可本地 Export as Zip | |
| [#9830](https://github.com/earendil-works/pi/pull/9830) | prompt 模板 frontmatter 解析失败时上报 | 复用资源诊断通道，失效模板不再静默丢弃（与 skills 行为对齐） | 关闭 #9354 |

另外两条仍 OPEN 的 PR 也值得跟踪：
- [#9569](https://github.com/earendil-works/pi/pull/9569) — `validateToolArguments` 兼容 JSON 编码字符串的对象/数组参数
- [#9763](https://github.com/earendil-works/pi/pull/9763) — 增加 pi.dev 兼容检查与跨仓库 dispatch 流程

---

## 功能需求趋势

从 Issues + PR 提炼的社区关注方向：

1. **Provider 适配与模型覆盖**
   - 新增：Grok 4.7（已合入）、Ollama 原生 Provider（WIP #9850）
   - 完善：deepseek-v4.1-flash（#9737）、GLM 5.2/5.3/5/latest（#9678）、Kimi OAuth host 切换（#9819）
   - 维护：Anthropic Bedrock 目录清理（#9851）、Google 429 retry（#9861）

2. **Compaction / Summarization 健壮性**（最热主题）
   - #8667（陈旧 compaction 条目）、#9602（thinking 溢出）、#9773（hook 未触发）、#5105（summarization 忽略 transport）、#9846（prompt 工具状态丢失）
   - 反映社区对长会话可靠性高度关注

3. **TUI 渲染性能**
   - Windows 10 重绘（#9833）、大 transcript 全屏风暴（#9549、#9255）、fullscreen 退出滚动损坏（#9828）、jump-to-end 抖动（#9136/已修）

4. **扩展 API 与生命周期**
   - v0.87.0 的 `ContextEditEntry` 是这一方向的里程碑；#9784 持续呼吁暴露 Provider 专有字段

5. **RPC / 远程调用语义**
   - #9803 / #9832 反映了 RPC 客户端需要更明确的输入处置可追溯性

6. **离线场景体验**
   - #8684（`PI_OFFLINE` 文档偏差）、#9841（离线导出）共同表明离线用户群体的诉求在增长

---

## 开发者关注点

**主要痛点**：

- **0.86.x 回归集中爆发**：尤其 compaction 链路在 0.86 重构后产生多个连锁问题（#8667、#9602、#9773、#9846、#9822）。#9846 已合入，是本批修复的核心
- **TUI 性能与平台兼容性**：Windows 是重灾区（#9549、#9169、#9828、#9833）；长 transcript + 全屏模式下重绘开销过大
- **文档与实际行为漂移**：#8684（`PI_OFFLINE`）、#9773（`before_provider_request`）、#9358（`Component.invalidate()` 必需性）—— 三处文档承诺与实现不符
- **会话持久化语义模糊**：#9792 反映 `isPersisted()` 返回值与磁盘实际状态不一致，存在数据丢失风险
- **扩展 API "一刀切"**：#9784 的"Procrustean bed"形容代表了一类长期诉求：Provider 专有字段在响应中被丢弃，扩展开发者被迫变通

**高频需求**：

- 可靠的 RPC steer / 队列关联（已通过 #9832 回应）
- 更细

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
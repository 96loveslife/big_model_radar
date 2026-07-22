# AI CLI 工具社区动态日报 2026-07-22

> 生成时间: 2026-07-22 03:17 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>The user wants me to create a horizontal comparison analysis report based on the daily reports from 6 major AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code). Let me carefully analyze the data and create a structured, professional comparison report.

Let me identify the key themes:

**Common concerns across tools:**
1. **MCP (Model Context Protocol) ecosystem** - Claude Code, GitHub Copilot CLI, Kimi Code CLI all have MCP-related issues
   - Claude Code: MCP tools silently failing (#78826, #79992, #79971)
   - GitHub Copilot CLI: MCP resources/prompts/subscribe support gaps (#1305, #1518, #1803, #3073, #3125)
   - Kimi Code CLI: MCP schemas rejected by Moonshot API (#2531)
   
2. **Windows platform stability** - Codex, Claude Code, OpenCode
   - Codex: taskkill.exe storms, WMI Provider Host issues
   - Claude Code: MSIX updates fail, fullscreen issues, permission prompts
   - OpenCode: Windows HTTP issues, Bun.serve problems

3. **Subagent/background agent reliability** - Claude Code, Gemini CLI, Qwen Code
   - Claude Code: background agent session issues (#75037)
   - Gemini CLI: generalist agent hangs, subagent state misreporting (#21409, #22323)
   - Qwen Code: subagent mutates main session model (#7156)

4. **Model compatibility and routing** - All tools
   - OpenCode: DeepSeek, MiniMax M3 fixes
   - Claude Code: Fable 5 unavailable, Max 20x not reflected
   - Qwen Code: enable_thinking parameter issues
   - Kimi Code: k2.5 tool calling failure

5. **Security hardening** - Gemini CLI (a2a-server RCE), all tools
6. **Subagent/multi-agent** - common theme
7. **Long session/tool calling** - common pain
8. **Plan Mode/UI/UX** - Claude Code, GitHub Copilot CLI
9. **Authentication/session management** - OpenCode (Go subscription outage), Gemini CLI
10. **Terminal/TUI/UI stability** - all tools

**Differentiation:**
- **Claude Code**: Anthropic ecosystem, hookify plugin ecosystem, Desktop app
- **Codex**: OpenAI, multi-agent, Rust codebase, Windows desktop
- **Gemini CLI**: Google, security-focused, subagent research, eval infrastructure
- **GitHub Copilot CLI**: GitHub-native, MCP protocol coverage, enterprise
- **Kimi Code CLI**: MoonshotAI, Moonshot API, Chinese market
- **OpenCode**: Open source, multi-provider (DeepSeek, MiniMax M3), community-driven
- **Qwen Code**: Alibaba, Web Shell, multi-model, DingTalk integration

**Activity comparison:**
- Claude Code: 50 issues, 12 PRs, 1 release
- Codex: significant activity, 1 release
- Gemini CLI: 50 issues, 17 PRs, 1 nightly
- GitHub Copilot CLI: 38 issues, 1 release, only 1 PR (low)
- Kimi Code CLI: 5 issues, 1 PR, 0 releases
- OpenCode: many issues, many PRs, 0 releases
- Qwen Code: 50 issues, 50 PRs, 4 releases

Let me write this report now in Chinese, professional and concise.</think>

# 主流 AI CLI 工具横向对比分析报告
**日期：2026-07-22 · 数据范围：GitHub 公开仓库过去 24 小时**

---

## 1. 生态全景

2026 年中，AI CLI 工具已从"模型接入层"演化为**多智能体协作平台**，竞争核心从"能不能调通模型"转向"能不能稳定调度工具、跨平台一致运行、长会话可持续"。今日六个工具的社区反馈呈现出三大共性信号：**MCP 协议从"能用"走向"必须可靠"**、**多模型/多 Provider 路由已成标配但兼容性脆弱**、**Windows/桌面端稳定性成为普遍短板**。同时，**安全硬化（沙箱、变量展开、shell 输出截断）和子代理生命周期管理**成为新一轮工程化攻坚焦点。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Releases | 24h 显著特征 |
|------|-----------|---------|----------|-------------|
| **Claude Code** | 50 | 12 | 1 (v2.1.217) | emoji 补全上线；hookify 插件连续 5 个修复；MCP 静默失败集中爆发 |
| **OpenAI Codex** | 30+ | 10+ | 1 (rust-v0.145.0) | Windows Desktop 进程风暴成最大痛点；HTTP 客户端架构重整（7+ PR） |
| **Gemini CLI** | 50 | 17 | 1 (nightly) | a2a-server RCE 安全修复；subagent 可靠性 + Auto Memory 主线 |
| **GitHub Copilot CLI** | 38 | 1 | 1 (v1.0.74-0) | MCP 协议补全呼声高；Plan Mode 回归 + Loading 卡死问题集中 |
| **Kimi Code CLI** | 5 | 1 | 0 | k2.5 tool calling 全面失效；MCP schema 与 Moonshot API 冲突 |
| **OpenCode** | 50 | 20+ | 0 | Go 订阅全员 401 风暴；多 Provider（DeepSeek/MiniMax M3）兼容加固 |
| **Qwen Code** | 50 | 50 | 4 (含 0.20.1) | 0.20.1 正式版发布；enable_thinking 系列事故；Web Shell 产品化推进 |

**总量对比**：Qwen Code 与 Gemini CLI 在 PR/Issue 总量上领跑，**反映两者处于快速迭代期**；GitHub Copilot CLI 的 PR 活跃度异常低迷（24h 仅 1 条），与高 Issue 量形成鲜明对比，提示其开发节奏放缓或流程更聚焦主干提交。

---

## 3. 共同关注的功能方向

### 3.1 🔌 MCP 协议能力补全与可靠性
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 工具连接成功但 `tools/list` 不暴露给模型；`tools/call` 在桌面端被静默丢弃 |
| GitHub Copilot CLI | 补齐 `resources`/`prompts`/`subscribe`/`list_changed` 原语；CIMD/refresh_token OAuth 支持 |
| Kimi Code CLI | Moonshot API 拒绝 MCP schema，需客户端做 sanitization |
| OpenCode | 自定义 Provider 场景下 MCP 鉴权稳定性 |

**共识**：MCP 已成为事实标准，但**协议覆盖率、错误处理、跨桌面/CLI 一致性**仍是普遍短板。

### 3.2 🪟 Windows 平台稳定性
| 工具 | 具体痛点 |
|------|---------|
| OpenAI Codex | `taskkill.exe`/`conhost.exe` 风暴、WMI Provider Host 100% CPU、Git 扫描失控 |
| Claude Code | MSIX 更新失败、全屏模式渲染异常、权限弹窗不一致 |
| OpenCode | 原生 Bun 下 HTTP 监听异常、桌面端 Windows 截图冲突 |
| Qwen Code | 独立安装包 SHA-256、VSCode Companion 进程退出、Docker sandbox cwd 绑定 |

**共识**：Windows 仍是各工具的"高难度考场"，**进程生命周期、资源清理、权限管理**是最频繁出现的反模式来源。

### 3.3 🤖 Subagent / 后台代理生命周期
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 后台 agent 会话终止、attach 崩溃循环 |
| Gemini CLI | generalist agent 长时挂起、子代理 `GOAL` 误报、Wayland 兼容 |
| Qwen Code | subagent 篡改主会话模型、完成后无法 `send_message` 复活 |
| OpenCode | 中断主 agent 不影响子 agent（#28738） |
| GitHub Copilot CLI | `/fleet` 子代理默认模型配置（#2193） |

**共识**：**多代理协作已从"可选增强"变成"核心生产形态"**，但**状态隔离、生命周期管理、错误语义**普遍仍在补"打地基"阶段。

### 3.4 🌐 多模型 / 多 Provider 路由
| 工具 | 具体场景 |
|------|---------|
| OpenCode | DeepSeek V4 系统提示词 + 384K 输出上限；MiniMax M3 thinking 控制 |
| Claude Code | Fable 5 在 CLI 不可用、Max 20x 升级未生效 |
| Qwen Code | `enable_thinking=false` 误送导致 TokenPlan 击穿 |
| Kimi Code CLI | k2.5 工具调用全面失效 |
| GitHub Copilot CLI | BYOK 模型能力探测（reasoning effort）短板 |

**共识**：**"通用系统提示词 + 模型特定行为"的冲突**、**模型能力探测的契约缺失**、**Token 路由与计费层一致性**是普遍痛点。

### 3.5 🔒 安全硬化
| 工具 | 今日动作 |
|------|---------|
| Gemini CLI | a2a-server RCE 重构、shell `$VAR` 展开绕过、shell 输出无上限修复 |
| Claude Code | v2.1.216 sandbox `--cap-drop ALL` 引入回归；transcript 写入告警 |
| Codex | Windows 提权沙盒加固、managed proxy 强化 |

**共识**：**沙箱、shell 解析、输出限流**形成三大安全主线，任何"零依赖沙箱"建议（如 Gemini #19873）都引发社区强烈共鸣。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线亮点 |
|------|---------|---------|-------------|
| **Claude Code** | 插件/hook 生态、Desktop + CLI 双端、模型行为控制 | 偏好 Anthropic 生态、深度自定义工作流 | hookify 工程化最完善；`CLAUDE_PLUGIN_ROOT` 等环境变量契约 |
| **OpenAI Codex** | Rust 高性能、多 agent、桌面/IDE/远程 SSH 全场景 | OpenAI 模型重度用户、追求工程性能 | rust-v0.145.0 引入分页线程历史与跨工具 `/import`；HTTP 客户端统一化重构 |
| **Gemini CLI** | 安全硬化、Eval 基础设施、Auto Memory | 重视可控性与可观测性的团队、研究型用户 | 组件级评估（76 个行为 eval）；SSR Pipeline（PR 自动生成）；a2a-server 安全架构 |
| **GitHub Copilot CLI** | GitHub 原生集成、MCP 协议扩展、BYOK | 企业 GitHub 用户、IDE 紧密集成场景 | `/model plan` 阶段化模型选择；Plans 模式与 `gh` CLI 协同 |
| **Kimi Code CLI** | Moonshot API 深度适配、中文场景 | 国内开发者、Kimi 模型用户 | shell 模式快速迭代（PR #2530 修复后台子进程管道问题） |
| **OpenCode** | 开源、多 Provider（DeepSeek/MiniMax M3/自定义）、社区驱动 | 追求厂商中立、灵活迁移 | `HttpClientBuilder`、`reasoningField` 等抽象层；TUI/Web/Desktop 三端并行 |
| **Qwen Code** | Web Shell 产品化、多语言 SDK（DingTalk/Java）、CI 智能化 | 企业部署、多端点接入、东南亚/全球区域 | Channel 投递契约、智能 core review router、autofix 标签驱动 |

**关键差异点**：
- **闭源 vs 开源**：OpenCode 是唯一的开源代表，其 PR 活跃度（20+）反映社区驱动力的优势；其余工具均为官方主导。
- **单模型 vs 多模型**：Claude Code 与 Kimi Code CLI 仍以单一供应商模型为主；OpenCode/OpenAI Codex/Gemini CLI/GitHub Copilot CLI/Qwen Code 已具备显式多 Provider 路由。
- **工具链 vs 平台**：Codex（Rust）、Gemini CLI（eval 基建）、Qwen Code（CI 智能化）已演进为"开发平台"；Claude Code/Kimi Code CLI/OpenCode 更接近"高效工具"。

---

## 5. 社区热度与成熟度

### 🔥 高活跃度（Issue + PR > 70）
- **Qwen Code**（50 + 50 + 4 Releases）：今日最活跃，处于 **v0.20 重大迭代期**，且 4 个 Release 在 24h 内同时落地，节奏激进。
- **Gemini CLI**（50 + 17 + 1 nightly）：典型快速迭代 + 安全驱动，PR 中含 3 个关键安全修复与 1 个基础设施（SSR Pipeline）大 PR。
- **OpenCode**（50 + 20+）：社区驱动型，贡献者来源多元（@punkisnotdead3、@jlongster、@Sunwuyuan 等）。

### 📈 中等活跃度（Issue 30–50）
- **Claude Code**（50 + 12 + 1）：社区反馈密集但工程化节奏稳健，hookify 一周内 5 个 PR 闭环堪称"健康信号"。
- **OpenAI Codex**（30+ + 10+ + 1）：Windows Desktop 痛点推动 Issue 增长，Rust 重构主线清晰。
- **GitHub Copilot CLI**（38 + 1）：**PR 活跃度严重低于 Issue 量**——这是潜在风险信号，可能反映开发资源向其他 Copilot 产品线倾斜。

### 🧊 低活跃度（Issue < 10）
- **Kimi Code CLI**（5 + 1）：社区规模相对小，**k2.5 tool calling 全面失效 + MCP schema 冲突**暴露其在国内模型兼容上的工程深度仍待加强。

### 成熟度评估
- **最成熟**：Claude Code、Codex——版本节奏稳定，工程化模式清晰，issue → PR 闭环时间短。
- **快速扩张**：Qwen Code、Gemini CLI、OpenCode——功能边界快速扩展，伴随更多 issue/PR 噪声。
- **追赶中**：Kimi Code CLI——核心痛点未解，社区规模有待培育。

---

## 6. 值得关注的趋势信号

### 🚨 信号 1：MCP 从"协议"走向"生产基础设施"
**现象**：6 个工具中 5 个今日有 MCP 相关 issue，且性质从"连不上"升级为"连上了但不可信"。
**对开发者的参考**：
- 生产环境构建 MCP 工具链时需实现**断路器、健康检查、日志追踪**三层防护
- 关注 Anthropic/OpenAI/Google 对 MCP `resources`/`prompts`/`subscribe` 原语的推进节奏
- 客户端 schema sanitization 应作为通用兜底机制

### 🪟 信号 2：Windows 桌面端的"集体翻车"
**现象**：Codex（进程风暴）、Claude Code（MSIX/权限）、OpenCode（Bun.serve）、Qwen Code（VSCode Companion）四家同时在 Windows 平台暴雷。
**对开发者的参考**：
- 升级前应在 Windows 环境做最小化回归测试
- 关注工具的进程生命周期管理是否引入退避机制
- 远程开发/CI 场景下优先选择 CLI 而非 Desktop 应用

### 🧬 信号 3：Subagent 协议正在形成事实标准
**现象**：6 个工具全部出现 subagent 相关 issue，**fork 类型、生命周期、状态隔离、错误传播**已成共性难题。
**对开发者的参考**：
- 设计多 agent 系统时，**"主会话 ↔ 子代理"边界**应作为一等公民显式建模
- 工具调用能力探测（tool discovery）正在从"启动期静态枚举"走向"运行时动态收敛"（Gemini #24246 反映 128/400 工具上限）
- Agent 状态语义（`GOAL`/`FAIL`/`PARTIAL`）亟需统一，避免误导性上报

### 🔐 信号 4：安全硬化从"加分项"变成"生命线"
**现象**：Gemini a2a-server RCE（#28470）、Codex Windows 提权沙盒加固（#34629）、Claude Code sandbox 回归（#79606）三起事件揭示**沙箱边界正在成为核心稳定性问题**。
**对开发者的参考**：
- 关注工具的 sandbox 配置（cap-drop、seccomp、进程隔离）
- "零依赖 OS 沙箱"（Gemini #19873）代表一种新方向：**把模型原生能力直接交给 OS 级机制，而非应用层模拟**
- Shell 输出限流、变量展开边界、`$VAR` 注入是所有工具普遍欠下的"安全债"

### 📊 信号 5：评估（Eval）基础设施正在成为护城河
**现象**：Gemini CLI 76 个行为 eval、组件级评估 EPIC；Codex skill metadata 按模型窗口缩放；Qwen Code tool output budgeting 观测化。
**对开发者的参考**：
- "是否提供组件级、细粒度的评估能力"将成为区分工具成熟度的关键指标
- 长期项目应优先选择**有完善 eval 基建**的工具，以保障 prompt/模型/工具变更下的可观测性

### 🌍 信号 6：本地化与多语言 SDK 成新增量
**现象**：OpenCode 中文翻译补丁（@Sunwuyuan）；Qwen Code Java SDK daemon transport；DingTalk 非机器人 @ 上下文保留。
**对开发者的参考**：
- 中文场景开发者应关注 OpenCode 与 Qwen Code 的中文化进展
- Java/Go/Python 多语言 SDK 将成为企业级采纳的关键门槛

---

## 📋 总结与建议

| 角色 | 推荐关注 |
|------|---------|
| **技术决策者** | 优先评估 Qwen Code（功能广度）、Claude Code（生态成熟）、OpenCode（开源灵活）三者；按"多 Provider 路由"、"subagent 治理"、"Windows 稳定性"三个维度做 PoC |
| **独立开发者** | OpenCode（社区活跃、多模型兼容）、Claude Code（hook 工程化）最适合个人定制工作流 |
| **企业架构师** | 重点关注 Gemini CLI（eval/安全基建）、Codex（Rust 性能/多 agent）、Qwen Code（多语言 SDK + Web Shell） |
| **模型研究者** | Gemini CLI 的组件级 eval、Codex 的 skill metadata 缩放、OpenCode 的 reasoning field 抽象提供最多研究价值 |

**总体判断**：AI CLI 工具已从"模型容器"演进为"分布式智能体协作平台"，下一阶段的竞争核心在于 **协议可靠性、跨平台一致性、多代理治理、安全边界**四大工程化能力。短期内，

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data provided about the anthropics/skills repository and create a comprehensive community hotspot report.

Let me organize my thoughts:

**Hot PRs (top by relevance - the user wants most discussed/popular):**
Looking at the PRs, the user mentioned comment count is undefined for all, so I need to infer from other signals (👍, recency, problem severity, references). Let me pick the most impactful ones:

1. PR #1298 - skill-creator run_eval.py bug (recall 0%, references issue #556 with 12 comments and 10+ reproductions) - HIGH priority
2. PR #514 - document-typography skill
3. PR #486 - ODT skill (OpenDocument)
4. PR #83 - skill-quality-analyzer and skill-security-analyzer (meta skills)
5. PR #1367 - self-audit skill v1.3.0
6. PR #1302 - color-expert skill
7. PR #525 - pyxel retro game development skill
8. PR #723 - testing-patterns skill
9. PR #210 - frontend-design skill improvement

**Community Needs from Issues:**
1. Issue #492 (43 comments) - Security: trust boundary abuse via anthropic/ namespace - HUGE concern
2. Issue #228 (14 comments, 7 👍) - Org-wide skill sharing in Claude.ai
3. Issue #556 (12 comments, 7 👍) - run_eval.py 0% trigger rate
4. Issue #62 (10 comments) - Skills disappearing
5. Issue #1329 (9 comments) - compact-memory skill proposal
6. Issue #189 (6 comments, 9 👍) - duplicate skills from plugins
7. Issue #1385 (3 comments) - Reasoning Quality Gate Pipeline
8. Issue #16 (4 comments) - Expose Skills as MCPs

**High-potential unmerged PRs:**
- PR #1298 (fixes issue #556 with 12 comments)
- PR #514 (document-typography)
- PR #486 (ODT)
- PR #83 (quality/security analyzer)
- PR #1367 (self-audit)
- PR #1302 (color-expert)
- PR #525 (pyxel)
- PR #723 (testing-patterns)
- PR #1099, #1050 (Windows compatibility)

**Key Ecosystem Insights:**
- Security and trust (anthropic/ namespace impersonation) is the #1 community concern
- Skill creator tooling has critical bugs affecting many users
- Demand for meta-skills (quality analysis, security analysis, self-audit)
- Windows compatibility issues widespread
- Org/enterprise features (sharing) needed

Let me write a clean, professional Chinese report.</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-07-22*

---

## 1. 热门 Skills 排行

| # | Skill（PR） | 关注度信号 | 状态 | 核心定位 |
|---|---|---|---|---|
| 1 | **[#1298 skill-creator 修复](https://github.com/anthropics/skills/pull/1298)** | 关联 Issue #556（12 评论 / 7 👍，10+ 独立复现） | OPEN | 修复 `run_eval.py` 的 `recall=0%` 致命 Bug，串联 `run_loop.py` 与 `improve_description.py` 描述优化闭环；同时修复 Windows 流读取、触发检测与并行 worker |
| 2 | **[#83 skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 高维度 Meta Skill 提案 | OPEN | 两个评估型 Skill：质量分析器（结构/文档/示例/资源/测试 5 维度打分），安全分析器（权限/注入/数据外泄检测） |
| 3 | **[#1367 self-audit v1.3.0](https://github.com/anthropics/skills/pull/1367)** | 与 #1385 提案呼应 | OPEN | 通用 AI 输出自审计：先做机械文件验证，再按伤害严重度优先级进行 4 维度推理质量审计，与技术栈/模型解耦 |
| 4 | **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** | 普适痛点 | OPEN | 排版质量控制：防止孤词换行（1-6 词溢出）、孤行段落、编号错位，覆盖所有 Claude 生成的文档 |
| 5 | **[#486 ODT Skill](https://github.com/anthropics/skills/pull/486)** | 开源格式补全 | OPEN | OpenDocument 文本创建/模板填充/ODT→HTML 转换，补齐 LibreOffice/ODF 生态 |
| 6 | **[#1302 color-expert](https://github.com/anthropics/skills/pull/1302)** | 7-21 仍在更新 | OPEN | 颜色知识专家：命名体系（ISCC-NBS/Munsell/XKCD/RAL）、色彩空间选型表（OKLCH/OKLAB/CAM16） |
| 7 | **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** | 工程实践类 | OPEN | 全栈测试模式：测试金字塔哲学 + 单元/组件/E2E/契约测试，覆盖 React Testing Library、Playwright 等 |
| 8 | **[#525 pyxel 复古游戏](https://github.com/anthropics/skills/pull/525)** | 7-15 仍在迭代 | OPEN | 配合 pyxel-mcp，提供像素风/8-bit 游戏开发的"写→运行→截图→检视→迭代"工作流 |

**社区讨论热点：** 真正被反复讨论的不是单个 Skill 的功能，而是 **skill-creator 工具链的可用性**——`run_eval.py` 在 Windows/非 Windows 上都返回 `recall=0%`（#556、#1169、#1061、#1099、#1050、#1323 六条 PR/Issue 围剿同一根因），导致描述优化退化为"对噪声优化"。

---

## 2. 社区需求趋势

按 Issue 评论与 👍 加权提炼，社区诉求呈 **「三层金字塔」**：

### 🔴 顶层：信任与治理（最紧迫）
- **[#492 命名空间冒充（43 评论 / 2 👍）](https://github.com/anthropics/skills/issues/492)** — 社区 Skill 借 `anthropic/` 命名空间伪装官方，导致用户误授高级权限。这是**最热议题**，已讨论 4 个月无关闭。
- **[#189 插件重复 Skill（6 评论 / 9 👍）](https://github.com/anthropics/skills/issues/189)** — `document-skills` 与 `example-skills` 包含相同 Skill，造成上下文窗口污染与歧义触发。
- **[#412 agent-governance（CLOSED, 6 评论）](https://github.com/anthropics/skills/issues/412)** — AI Agent 治理模式（策略执行、威胁检测、信任评分、审计追踪）。

### 🟡 中层：分发与协作
- **[#228 组织级共享（14 评论 / 7 👍）](https://github.com/anthropics/skills/issues/228)** — Claude.ai 内 Skill 库/直链分享，免去手动下载上传流程。
- **[#16 暴露为 MCP（4 评论）](https://github.com/anthropics/skills/issues/16)** — 将 Skill 行为封装为 MCP 协议信号，统一对外接口。
- **[#1175 SharePoint 安全闭环（CLOSED, 4 评论）](https://github.com/anthropics/skills/issues/1175)** — 在 SKILL.md 中写权限逻辑是否安全（context window 暴露风险）。

### 🟢 底层：新能力提案
- **[#1329 compact-memory（9 评论）](https://github.com/anthropics/skills/issues/1329)** — 用符号化紧凑记法替代长 Agent 的散文笔记，节省上下文。
- **[#1385 Reasoning Quality Gate Pipeline（3 评论）](https://github.com/anthropics/skills/issues/1385)** — 三道质量门：预任务校准 → 对抗评审 → 交付验证。
- **[#62 Skills 消失（10 评论）](https://github.com/anthropics/skills/issues/62)** — 上传 Skill 后莫名丢失（高 👍 痛点）。
- **[#29 Bedrock 兼容（4 评论）](https://github.com/anthropics/skills/issues/29)** — 在 AWS Bedrock 上使用 Skills 的可行性。

**趋势归纳：** 文档/排版（PDF/DOCX/ODT/typography）类长期高需求；测试、颜色、复古游戏等垂直 Skill 持续涌现；**Meta-Skill（评估/审计/治理）** 正成为下一波主线。

---

## 3. 高潜力待合并 Skills

按"评论活跃 + 长期未合并 + 根因明确"筛选，近期最可能落地的：

| PR | Skill | 待合并时长 | 落地理由 |
|---|---|---|---|
| **[#1298](https://github.com/anthropics/skills/pull/1298) / [#1323](https://github.com/anthropics/skills/pull/1323) / [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050)** | skill-creator 修复群 | 已挂 1–2 个月 | 阻塞整条描述优化链路，4+ 独立 PR 围攻，根因相同，社区共识强 |
| **[#538](https://github.com/anthropics/skills/pull/538) / [#539](https://github.com/anthropics/skills/pull/539) / [#541](https://github.com/anthropics/skills/pull/541) / [#361](https://github.com/anthropics/skills/pull/361) / [#362](https://github.com/anthropics/skills/pull/362)** | skill-creator 小修群 | 4 个月 | 由 @Lubrsy706 / @Mr-Neutr0n 提交，覆盖大小写、YAML 引用、UTF-8 panic 等基础健壮性 |
| **[#83 quality/security analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-Skill | 8 个月 | 命中 #492 信任问题痛点，merge 后直接补齐 Skill 准入门槛 |
| **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 仓库健康度 | 4 个月 | 关闭 #452 社区健康指标 25% 短板，合并成本极低 |
| **[#210 frontend-design 改进](https://github.com/anthropics/skills/pull/210)** | 已有 Skill 升级 | 6 个月 | 强化可执行性，与 #202（CLOSED）方向一致 |
| **[#1367 self-audit](https://github.com/anthropics/skills/pull/1367)** | 通用审计 Skill | < 1 个月 | 与同期 #1385 提案互补，作者持续在质量门方向推进 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是「元层治理」——既要解决 skill-creator 工具链自身失灵、又要建立 Skill 命名/质量/安全的可信边界，其次才是新能力补全。**

换言之，社区已度过「我要一个 Skill」阶段，正集体迈入「我需要一个**可信赖、可审计、可治理**的 Skill 生态」阶段；任何围绕 Meta-Skill（#83、#1367、#1385、#1329）和基础设施修复（#1298 系列、#492）的进展，都将显著放大其余 Skills 的真实价值。

---

<think>The user wants me to generate a Chinese daily report for Claude Code community dynamics on 2026-07-22. Let me analyze the data carefully and create a structured report.

Let me organize the information:

**Latest Release:**
- v2.1.217: Added emoji shortcode autocomplete in prompt input, warnings for transcript write failures

**Top Issues by comments (most discussed):**
1. #34255 (57 comments) - Remote Control: automatic reconnection doesn't work on macOS/iOS
2. #25042 (12 comments) - Auto-scroll behavior when submitting questions
3. #65961 (7 comments) - Claude verbose code comments by default
4. #72215 (6 comments) - Fullscreen render mode: scrollbar broken on Windows
5. #76357 (6 comments) - Windows MSIX update fails
6. #78826 (5 comments) - MCP server connects but tools never exposed
7. #79992 (4 comments) - macOS filesystem-class MCP tool calls silently dropped
8. #79921 (3 comments) - Sessions freeze locally until another session receives input
9. #75037 (3 comments) - Background agent sessions issues
10. #62135 (2 comments) - Bash read-only commands still prompt for permission
11. #79971 (2 comments) - Desktop: tools/call never reaches healthy local MCP
12. #70267 (2 comments) - Opus unusable, lobotomized and slow
13. #79916 (2 comments) - Fable 5 model unavailable in CLI
14. #70577 (2 comments) - AskUserQuestion keyboard input unreliable
15. #79325 (2 comments) - Interactive choice prompts accept no keyboard input
16. #78769 (2 comments) - Task tools AND TodoWrite hidden by live experiment
17. #79920 (2 comments) - Background daemon fd storm → kernel panic
18. #79962 (2 comments) - Desktop bridge bug
19. #80010 (1 comment) - MCP Tools usage
20. #78774 (1 comment) - Permission prompts fire inconsistently
21. #78942 (1 comment) - Worst experience with app
22. #79687 (1 comment) - Cannot access Claude fable 5
23. #79773 (1 comment) - Max 20x upgrade not reflected
24. #76440 (1 comment) - Cross-link Claude Code sessions with claude.ai
25. #76231 (1 comment) - Web split-pane view broken
26. #78306 (1 comment) - AskUserQuestion unresponsive
27. #75128 (1 comment) - Workflow schema validation fails
28. #80001 (1 comment) - EnterWorktree rejects valid worktree
29. #79995 (1 comment) - Desktop Linux theme doesn't follow system
30. #79606 (1 comment) - 2.1.216 sandbox regression breaks Bash

**Top PRs:**
1. #80008 - Add twilight plugin
2. #79898 - Add Claude apps gateway on AWS
3. #79889 - fix(hookify): make hook entrypoints runnable without CLAUDE_PLUGIN_ROOT
4. #79873 - fix(hookify): event: prompt rules never fire
5. #78532 - gateway/gcp: optional internal ALB
6. #79647 - fix(hookify): resolve imports independent of plugin directory
7. #79645 - fix(hookify): read rule and transcript files as UTF-8
8. #79644 - fix: quote ${CLAUDE_PLUGIN_ROOT} in plugin hook commands
9. #79643 - docs(commit-commands): align /commit-push-pr description
10. #79642 - docs(plugin-dev): correct marketplace name
11. #79640 - fix(ralph-wiggum): use disable-model-invocation
12. #79620 - feat: Add text-to-speech read-aloud hook

Now let me analyze the trends:

**Feature requests/Functional trends:**
- Auto-scroll control (UI)
- Cross-link Claude Code with claude.ai sessions
- MCP server tools exposure
- Subscription/plan feature parity (Max 20x, Fable 5)
- Theme support (Linux)
- Background agent improvements
- TUI/terminal improvements

**Developer pain points:**
- MCP issues (tools not exposed, calls dropped) - very prominent today
- Permission system inconsistency (Windows especially)
- AskUserQuestion UI broken in multiple environments
- Sandbox regressions (2.1.216 broke root installs)
- Subscription tier not properly applied
- Model behavior changes (verbose comments, opus "lobotomized")
- Remote Control stability on macOS

Let me draft the report now. I'll structure it as requested:

1. 今日速览
2. 版本发布
3. 社区热点 Issues (10)
4. 重要 PR 进展 (10)
5. 功能需求趋势
6. 开发者关注点

Let me write this in Chinese, professional and concise.</think>

# Claude Code 社区动态日报 · 2026-07-22

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | 今日新增/更新 Issues 共 50 条，PR 共 12 条

---

## 1. 今日速览

今天社区关注度集中在 **MCP（Model Context Protocol）工具调用链路异常** 与 **跨平台交互体验退化** 两大方向。今日发布 v2.1.217 带来 emoji 短代码补全与转录文件写入失败告警；同时 v2.1.216 引入的 sandbox 默认 `--cap-drop ALL` 在 root 环境下导致 Bash 全面失效，引发回归投诉。

---

## 2. 版本发布

**v2.1.217**（今日发布）

- **输入体验**：提示词输入框新增 emoji 短代码自动补全，输入 `:heart:` 直接插入 ❤️，输入 `:hea` 触发候选；可通过 `emojiCompletionEnabled` 配置关闭
- **可靠性**：当转录文件写入失败（如磁盘满）或因 inheritance 原因未开启会话保存时，新增显式警告提示

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 评论/👍 | 关注点 |
|---|-------|---------|--------|
| 1 | **[#34255](https://github.com/anthropics/claude-code/issues/34255)** Remote Control 自动重连失效（macOS/iOS） | 57 / 99 | **最长尾 bug**，从 3 月延续至今；连接静默断开无任何恢复机制，长期高赞 |
| 2 | **[#25042](https://github.com/anthropics/claude-code/issues/25042)** 控制提交问题时的自动滚动行为 | 12 / 31 | 终端 UX 改进呼声高，用户期望保留当前视图位置不被强制滚到底部 |
| 3 | **[#65961](https://github.com/anthropics/claude-code/issues/65961)** Claude 默认生成冗长代码注释，忽略停止指令 | 7 / 33 | **模型行为类**高赞，指向模型指令遵循退化 |
| 4 | **[#72215](https://github.com/anthropics/claude-code/issues/72215)** Windows 全屏模式下滚动条与按键失效 | 6 / 4 | 全屏渲染模式一旦超出单屏即无法查阅历史输出 |
| 5 | **[#76357](https://github.com/anthropics/claude-code/issues/76357)** Windows MSIX 更新每次都失败，必须重启 | 6 / 4 | "Another program is currently using this file" 每次升级必现，严重影响日常使用 |
| 6 | **[#78826](https://github.com/anthropics/claude-code/issues/78826)** MCP server 连接成功但工具不暴露给模型 | 5 / 0 | OAuth/握手成功，`tools/list` 返回正常，但模型端看不到工具；Gmail MCP 复现 |
| 7 | **[#79992](https://github.com/anthropics/claude-code/issues/79992)** macOS 文件系统类 MCP 调用被静默丢弃 | 4 / 0 | 自 7-21→22 夜间起，desktop 端 fs 类 MCP 工具调用在审批通过后未派发到本地 server |
| 8 | **[#79921](https://github.com/anthropics/claude-code/issues/79921)** Desktop/VS Code session 局部冻结，需另一会话输入才能恢复 | 3 / 0 | web 端无此问题，疑似桌面端 IPC 死锁 |
| 9 | **[#75037](https://github.com/anthropics/claude-code/issues/75037)** 后台 agent 会话异常终止 / attach 后崩溃循环 | 3 / 0 | `claude --bg`/`/bg` 后 worker 快速退出、attach 时崩溃、后台任务完成记录丢失 |
| 10 | **[#70267](https://github.com/anthropics/claude-code/issues/70267)** Opus 近日"lobotomized"——响应迟缓且质量下降 | 2 / 5 | 标记 `area:model`，用户主观感知模型能力显著下降 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 要点 |
|---|----|-----|------|
| 1 | **[#80008](https://github.com/anthropics/claude-code/pull/80008)** 新增 twilight 插件（spec-first 设计/实现技能） | feature | 通过"设计-实现-焦点栈"策略演示如何让 Claude 在长任务中保持稳定产出；作者明确指出仍需大幅修改 |
| 2 | **[#79620](https://github.com/anthropics/claude-code/pull/79620)** 新增 text-to-speech 朗读 hook | feature/a11y | 跨平台 TTS：macOS `say` / Linux Piper / Windows PowerShell；自动剥离 Markdown 与代码块 |
| 3 | **[#79898](https://github.com/anthropics/claude-code/pull/79898)** 新增 Claude Apps Gateway on AWS 参考部署 | docs/infra | 与 GCP 参考并列，提供 Amazon Bedrock 上的网关部署样例（PR 已关闭合并） |
| 4 | **[#79889](https://github.com/anthropics/claude-code/pull/79889)** `fix(hookify)`：在缺少 `CLAUDE_PLUGIN_ROOT` 时 hook 入口仍可运行 | bugfix | 当 env 变量未设置时，原本静默跳过 `sys.path` 注入导致 hook 报错 |
| 5 | **[#79873](https://github.com/anthropics/claude-code/pull/79873)** `fix(hookify)`：`event: prompt` 规则从未触发 | bugfix | 实际 payload key 为 `prompt`，但代码读取的是不存在的 `user_prompt` |
| 6 | **[#79645](https://github.com/anthropics/claude-code/pull/79645)** `fix(hookify)`：以 UTF-8 读取规则与 transcript 文件 | bugfix | 修复 Windows cp1252 默认编码导致 emoji/箭头无法解析的问题（#77270 根因） |
| 7 | **[#79644](https://github.com/anthropics/claude-code/pull/79644)** `fix`：`${CLAUDE_PLUGIN_ROOT}` 在 hook 命令中加引号 | bugfix | macOS 路径含空格（`~/Library/Application Support/…`）未加引号导致 shell 词拆分、hook 失效 |
| 8 | **[#79647](https://github.com/anthropics/claude-code/pull/79647)** `fix(hookify)`：与插件目录名解耦的 import 解析 | bugfix | 解决目录重命名后 `from hookify.core...` 解析失败（#69665） |
| 9 | **[#79642](https://github.com/anthropics/claude-code/pull/79642)** `docs(plugin-dev)`：marketplace 名称更正为 `claude-code-plugins` | docs | 文档中的 `claude-code-marketplace` 与 `marketplace.json` 不一致（#70064） |
| 10 | **[#79643](https://github.com/anthropics/claude-code/pull/79643)** `docs(commit-commands)`：`/commit-push-pr` 描述与行为对齐 | docs | 当前命令实际只基于 staged/unstaged 改动生成 PR 描述，而文档暗示会读取分支历史 |

> 另外值得关注：`#79640`（ralph-loop 改用 `disable-model-invocation`，`#79138`）、`#78532`（GCP gateway 修复 PG16 Cloud SQL 默认拒绝 shared-core 实例）。

---

## 5. 功能需求趋势

按议题频次与共识度提炼：

- **🪟 跨平台一致性**：Windows MSIX 安装/更新流程（#76357）、Linux 主题跟随系统（#79995）、macOS 路径空格导致 hook 失效（#79644）—— 桌面客户端跨平台质量成为高频投诉点
- **🔌 MCP 生态可靠性**：从"server 连不上"升级为"连上了但工具未暴露/调用被丢弃"（#78826、#79992、#79971），社区开始怀疑是 approval gate → dispatch 之间的桌面端链路 bug
- **📐 TUI/终端体验**：自动滚动控制（#25042）、AskUserQuestion 键盘响应（#70577、#78306、#79325）、全屏模式滚动条（#72215）—— 交互层细节打磨需求强烈
- **🔗 工作流串联**：希望 Claude Code session 与 claude.ai chat 之间建立可追溯的引用/链接（#76440）
- **💳 订阅与模型路由**：Fable 5 在 CLI 不可用（#79916、#79687）、Max 20x 升级未生效（#79773）—— 计费/权益映射层问题集中爆发
- **🧩 插件/hook 工程化**：hookify 一周内连发 5 个修复（路径、编码、import、env、payload key），揭示插件生态仍在补"打地基"阶段

---

## 6. 开发者关注点

**最痛的三个点：**

1. **MCP 工具"静默失败"**
   多个独立报告指向同一症状：本地 MCP server 健康、`/mcp` 状态显示已连、`tools/list` 可获取，但 `tools/call` 在桌面端被吞掉或未注册到模型上下文。对基于 MCP 构建生产工具链的开发者来说，这意味着整套扩展能力随时可能"看着能用，实际失效"。

2. **v2.1.216 引入的 sandbox 回归**（[#79606](https://github.com/anthropics/claude-code/issues/79606)）
   默认 `--cap-drop ALL` 在 root 安装下写入 `/proc/self/uid_map` 被拒，所有 Bash 命令全军覆没。说明版本发布前对 root/容器/CI 这类部署形态的验证覆盖不足，开发者升级前需要谨慎。

3. **权限系统行为不一致**
   - `#62135`：`curl`、`gh api` 等只读命令无视 allow rules 仍弹权限
   - `#78774`：Windows 上完全字符串匹配 + 前缀匹配的 allow pattern 仍间歇触发权限弹窗
   权限弹窗是 AI 工作流被打断的最大单一原因，可靠的 allow/deny 语义对开发者体验至关重要。

**模型侧担忧：**
"Opus 近期降智"（#70267）和"代码注释膨胀"（#65961）反映了开发者对模型行为稳定性与可控性的敏感——任何未经 prompt 引导的输出风格变化都会被立刻察觉并上报。

**正面信号：**
hookify 插件的密集修复（#79889 / #79873 / #79647 / #79645 / #79644）说明生态维护者响应积极，问题从 open 到 PR 通常在 1–2 天内闭环，是当前社区工程化层面最健康的信号。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report about OpenAI Codex community dynamics for 2026-07-22. Let me analyze the GitHub data carefully and produce a structured, professional report.

Let me first understand the key themes:

1. **Releases**: 
   - rust-v0.145.0 (main release) - new features including experimental paginated thread history, expanded /import command
   - rust-v0.145.0-alpha.30 and alpha.29

2. **Issues**: The top issues are overwhelmingly about Windows desktop app problems:
   - RTL text support for Arabic/Hebrew
   - Windows taskkill.exe/conhost.exe process storms (multiple issues)
   - WMI Provider Host high CPU usage
   - Git workspace scanning issues on Windows
   - Xcode sign-in issues with ChatGPT Pro accounts
   - MultiAgentV2 hang issues

3. **PRs**: Many of them are from `copyberry[bot]` and are about:
   - codex-http-client migration (HTTP client refactoring)
   - Auth manager routing configuration
   - Windows process-tree tests
   - Linux managed proxy setup
   - Windows sandbox hardening
   - Skill metadata budgets

Let me organize this into the requested report format.

Top 10 Issues to highlight:
1. #19504 - RTL support for Arabic/Hebrew (18 comments, 18 thumbs up)
2. #33776 - Windows taskkill.exe storm (17 comments)
3. #34260 - Windows taskkill cleanup storm (15 comments)
4. #28078 - Xcode 27 beta Codex sign-in fails for ChatGPT Pro (13 comments)
5. #29499 - WMI Provider Host high CPU (12 comments)
6. #34014 - Windows app WMI Provider Host 90-100% CPU (9 comments)
7. #21563 - RTL issue for Persian/Farsi (8 comments)
8. #29110 - Windows 10 Git metadata probes (8 comments)
9. #26812 - Windows Git workspace spawn storm (8 comments)
10. #22965 - Codex Desktop Remote SSH Windows host issues (7 comments)

Top 10 PRs to highlight:
1. #34630 - Add a policy-aware HTTP client builder (HttpClientBuilder)
2. #34645 - Always assign response item IDs
3. #34641 - Harden managed proxy setup for sandboxed executions
4. #34629 - Harden Windows elevated sandbox startup
5. #34643 - Migrate login HTTP construction to HttpClient
6. #34655 - Honor configured proxy routes for auth refreshes
7. #34626 - Scale skill metadata budgets with model context windows
8. #34664 - Preserve approvals reviewer when forking threads
9. #34636 - Keep the TUI open when starting a turn fails
10. #34644 - Verify Git plugin SHA checkouts

Let me also note the trend - massive migration to codex-http-client (HTTP client refactoring across many PRs).

Now let me write the report in Chinese.</think>

# OpenAI Codex 社区动态日报

**日期**: 2026-07-22
**数据来源**: [github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览

今日 Codex 仓库最显著的两条主线：一是 **rust-v0.145.0 正式版发布**，带来实验性的分页线程历史与 `/import` 命令的扩展能力；二是 **Windows Desktop 应用的进程风暴问题集中爆发**，多条高评论 Issue 均围绕 `taskkill.exe`/`conhost.exe` 失控循环、WMI Provider Host 高占用与 Git 工作区扫描等系统性缺陷展开，开发者社区呼吁紧急修复。

---

## 2. 版本发布

### 🚀 [rust-v0.145.0](https://github.com/openai/codex/releases/tag/rust-v0.145.0)（正式版）

**主要新特性**：
- **实验性分页线程历史**：支持高效恢复、检索、持久化命名、子 Agent 集成与记忆功能（[PR #33364](https://github.com/openai/codex/pull/33364), [#33907](https://github.com/openai/codex/pull/33907), [#34085](https://github.com/openai/codex/pull/34085), [#34229](https://github.com/openai/codex/pull/34229), [#34386](https://github.com/openai/codex/pull/34386)）
- **`/import` 命令扩展**：支持从 Cursor 和 Claude Code 迁移设置、MCP 服务器、插件、会话、命令与项目配置
- 同步发布 `rust-v0.145.0-alpha.29` 与 `rust-v0.145.0-alpha.30` 预发布版本

---

## 3. 社区热点 Issues（TOP 10）

### 🔥 [#19504 — Add full RTL text direction support for Arabic & Hebrew users](https://github.com/openai/codex/issues/19504)
- **状态**: OPEN | 💬 18 | 👍 18
- **为何重要**: 阿拉伯语、希伯来语用户长期无法正确渲染 RTL 文本，这是国际化体验的核心缺陷，也是社区呼声最高的增强类请求之一。

### 🔥 [#33776 — Windows Desktop ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe processes](https://github.com/openai/codex/issues/33776)
- **状态**: OPEN | 💬 17 | 👍 13
- **为何重要**: 单次会话即可产生 287+ 残留进程，导致 WMI 故障风暴与 DWM 桌面渲染降级，是 Windows Desktop 当前最严重的稳定性问题。

### 🔥 [#34260 — Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)
- **状态**: OPEN | 💬 15 | 👍 8
- **为何重要**: 与 #33776 同源的进程清理失控问题，反复触发 WMI provider 配额耗尽，几乎让整台机器不可用。

### ⚠️ [#28078 — Xcode 27 beta Codex sign-in fails only for ChatGPT Pro account requiring email OTP](https://github.com/openai/codex/issues/28078)
- **状态**: OPEN | 💬 13 | 👍 11
- **为何重要**: ChatGPT Pro 订阅用户在最新 Xcode 27 beta 中无法完成 OTP 登录，而 ChatGPT Go 账户正常，影响 Pro 付费用户的关键路径。

### ⚠️ [#29499 — Codex triggers high CPU usage in WMI Provider Host on Windows after startup](https://github.com/openai/codex/issues/29499)
- **状态**: OPEN | 💬 12 | 👍 14
- **为何重要**: 启动后 WMI Provider Host 持续高 CPU，是 Windows 平台性能投诉的高发点，与 #34014 形成重复报告。

### 🐛 [#34014 — Standalone Windows app triggers WMI Provider Host (90–100% CPU) when opening one project](https://github.com/openai/codex/issues/34014)
- **状态**: OPEN | 💬 9 | 👍 7
- **为何重要**: 同一项目在 VS Code 扩展中运行正常，但在独立 Windows 应用中打开即触发 WMI 满载，对比鲜明说明问题集中在桌面端。

### 🌍 [#21563 — RTL issue (Persian/Farsi)](https://github.com/openai/codex/issues/21563)
- **状态**: OPEN | 💬 8 | 👍 8
- **为何重要**: 与 #19504 共同指向 RTL 渲染缺陷，波及波斯语用户，反映国际化支持的紧迫性。

### 🐛 [#29110 — Windows 10 app repeatedly spawns Git root/metadata probes while idle](https://github.com/openai/codex/issues/29110)
- **状态**: OPEN | 💬 8 | 👍 0
- **为何重要**: 空闲状态下仍在不断触发 Git 元数据探测，进一步佐证 Windows 平台存在无退避重试的设计缺陷。

### 🐛 [#26812 — Windows Codex app repeatedly spawns git.exe/conhost.exe in Git workspaces](https://github.com/openai/codex/issues/26812)
- **状态**: OPEN | 💬 8 | 👍 5
- **为何重要**: 与 Nonpaged Pool 内存增长相关，揭示了底层资源管理的系统性问题。

### 🔌 [#22965 — Codex Desktop Remote SSH to native Windows host requires hidden CLI/Bash setup and still fails](https://github.com/openai/codex/issues/22965)
- **状态**: OPEN | 💬 7 | 👍 5
- **为何重要**: 暴露了 Remote SSH 到原生 Windows 主机时的配置复杂性与 app-server 代理的可靠性问题。

---

## 4. 重要 PR 进展（TOP 10）

> 今日多个高优先 PR 由 `copyberry[bot]` 提交，呈现出明显的 **HTTP 客户端架构统一化** 主线。

### 🛠️ [#34630 — Add a policy-aware HTTP client builder](https://github.com/openai/codex/pull/34630)
新增 `HttpClientBuilder`，将默认请求头、重定向、Cloudflare cookie 存储与诊断配置集中封装，是本次 HTTP 客户端重构的基石。

### 🛠️ [#34643 — Migrate login HTTP construction to `HttpClient`](https://github.com/openai/codex/pull/34643)
将登录流程的 HTTP 构造迁移至共享 HTTP 客户端，去除对 `reqwest` 的直接依赖。

### 🛠️ [#34655 — Honor configured proxy routes for auth refreshes](https://github.com/openai/codex/pull/34655)
确保 ChatGPT token 刷新请求遵循与应用一致的代理路由策略，包含系统代理场景。

### 🛠️ [#34650 — Require auth managers to receive routing configuration](https://github.com/openai/codex/pull/34650)
强制 `AuthManager` 接收 `AuthRouteConfig`，避免静默回退到传输层默认代理行为。

### 🛠️ [#34649 — Propagate resolved proxy policy through auth routing](https://github.com/openai/codex/pull/34649)
将应用层已解析的代理策略显式传递至认证路由链路，统一 auth 与相关请求的处理路径。

### 🛠️ [#34641 — Harden managed proxy setup for sandboxed executions](https://github.com/openai/codex/pull/34641)
修复 Linux `bubblewrap` 沙盒下生成的代理 socket 目录不可读问题，并将 `WS_PROXY`/`WSS_PROXY` 接入托管代理桥。

### 🛠️ [#34629 — Harden Windows elevated sandbox startup](https://github.com/openai/codex/pull/34629)
对 Windows 提权沙盒启动进行加固：从单一 DACL 快照校验沙盒组与 root capability SID 的可写根权限，必要时刷新 ACL。

### 🛠️ [#34645 — Always assign response item IDs](https://github.com/openai/codex/pull/34645)
保证所有会话（含流式项、分叉历史、压缩结果、非 OpenAI provider 请求）中的客户端响应项都分配稳定 ID，跨持久化与恢复保留。

### 🛠️ [#34626 — Scale skill metadata budgets with model context windows](https://github.com/openai/codex/pull/34626)
将 skill 元数据预算调整为模型上下文窗口的 2%（上限 4000 tokens），替代旧的固定字符限制，更适配不同模型。

### 🛠️ [#34664 — Preserve approvals reviewer when forking threads](https://github.com/openai/codex/pull/34664)
修复分叉持久化线程时丢失审批 reviewer 的问题，确保回退到完整源历史以恢复最近一次 reviewer 配置。

---

## 5. 功能需求趋势

通过分析 Issue 标签与讨论热度，当前社区最关注的方向可分为五类：

| 趋势方向 | 关键证据 | 代表 Issue |
|---------|---------|-----------|
| **🖥️ Windows Desktop 稳定性** | 至少 12 条 Issue 集中指向进程风暴、WMI 满载、Git 扫描失控 | [#33776](https://github.com/openai/codex/issues/33776), [#34260](https://github.com/openai/codex/issues/34260), [#29499](https://github.com/openai/codex/issues/29499) |
| **🌍 国际化与 RTL 渲染** | 阿拉伯语/希伯来语/波斯语用户长期诉求未解决 | [#19504](https://github.com/openai/codex/issues/19504), [#21563](https://github.com/openai/codex/issues/21563) |
| **🔐 IDE 扩展登录与认证** | Xcode 27 beta 中 Pro 用户 OTP 登录失败 | [#28078](https://github.com/openai/codex/issues/28078) |
| **🤖 Multi-Agent / 子 Agent 行为** | spawn_agent 偶发 hang、image2 大 payload 假死 | [#33777](https://github.com/openai/codex/issues/33777), [#33021](https://github.com/openai/codex/issues/33021) |
| **📊 模型与规划性能可观测性** | 缺乏 per-thread 性能遥测，云规划循环资源占用失控 | [#34665](https://github.com/openai/codex/issues/34665) |

---

## 6. 开发者关注点

综合今日 Issue 与 PR 反馈，开发者社区的痛点可归纳为以下三类：

**① Windows 桌面端"无退避重试"模式成为系统性反模式**
多条 Issue（#34473、#29110、#26812、#33450、#31618）均指向同一现象：Git 根解析、文件扫描、进程清理等子任务在失败或空闲时缺乏退避机制，形成高频轮询。这不仅消耗 CPU，还触发 WMI、Defender、Nonpaged Pool 等系统级连锁问题。建议在沙盒与调度层引入指数退避与上限控制。

**② 资源清理与进程生命周期缺乏统一抽象**
`taskkill.exe`、`conhost.exe`、`git.exe` 的大量残留说明 Windows 端的子进程回收路径存在多个入口且未做去重/复用，呼应了 [#34629](https://github.com/openai/codex/pull/34629)（提权沙盒加固）与 [#34640](https://github.com/openai/codex/pull/34640)（进程树测试更新）的协同修复方向。

**③ HTTP 客户端架构正在重整**
今日 7+ 个 PR 集中迁移至 `codex-http-client`，反映出项目在向"策略与传输分离"演进，开发者应关注 `HttpClientBuilder`/`AuthRouteConfig` 等新 API 的稳定性，并准备适配应用层显式代理策略带来的配置变更。

---

*日报生成时间: 2026-07-22 · 数据范围: GitHub openai/codex 过去 24 小时更新*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community, dated 2026-07-22. Let me analyze the data carefully and produce a structured report.

Key observations from the data:

1. **Release**: v0.52.0-nightly.20260722.gc776c665b with a security fix for a2a-server RCE prevention.

2. **Issues**: 50 issues updated, with many related to agents (subagents, browser agents, generalist agent), Auto Memory, security, evaluation infrastructure, and shell/terminal behavior.

3. **PRs**: 17 PRs updated, including:
   - Security fixes (RCE prevention, variable expansion bypass, shell output bounding)
   - New features (eval coverage reports, tool call formatter)
   - Infrastructure (PR generator pipeline, caretaker triage)
   - Bug fixes (session ID rotation, credential fallback, RCE prevention)

Let me identify the top 10 most important issues based on comment count:
1. #22323 - Subagent recovery after MAX_TURNS reports GOAL success (12 comments)
2. #21409 - Generalist agent hangs (8 comments, 8 likes)
3. #19873 - Zero-Dependency OS Sandboxing (8 comments)
4. #24353 - Robust component level evaluations (7 comments)
5. #22745 - AST-aware file reads (7 comments)
6. #21968 - Gemini doesn't use skills and sub-agents enough (6 comments)
7. #26522 - Auto Memory retrying low-signal sessions (5 comments)
8. #25166 - Shell command stuck at "Waiting input" (4 comments, 3 likes)
9. #22232 - browser_agent resilience (4 comments)
10. #21983 - browser subagent fails in wayland (4 comments)

Top 10 PRs:
1. #28470 - a2a-server RCE prevention (security, critical, size/xl)
2. #28403 - Block $VAR variable expansion bypass (security, GHSA)
3. #28401 - Bound shell command output to model (security/quality)
4. #28472 - Fix cached credentials fallback (critical auth fix)
5. #28469 - Rotate session ID on model fallback (fixes blocking error)
6. #28433 - PR generator orchestrator (infrastructure)
7. #28305 - Tool call formatter for evals (closed)
8. #28169 - Eval coverage report (closed)
9. #28432 - Firestore concurrency dual-locking (infrastructure)
10. #28474 - Skill name dimension in telemetry

Trends I can identify:
- Auto Memory system improvements (multiple issues)
- Subagent reliability and behavior
- Security hardening (RCE, variable expansion, output bounding)
- Browser agent improvements
- Evaluation infrastructure
- Shell/terminal handling
- AST-aware tooling
- Authentication/session management
- Skills utilization

Let me write a professional Chinese report.</think>

# Gemini CLI 社区动态日报
**日期：2026-07-22**

---

## 1. 今日速览

今日发布 nightly 版本 **v0.52.0-nightly.20260722.gc776c665b**，核心更新为修复 `a2a-server` 中可能导致零点击 RCE（远程代码执行）的关键安全漏洞。社区讨论焦点集中在 **subagent 可靠性**（generalist agent 挂起、子代理状态误报）、**Auto Memory 系统的安全性与健壮性**，以及多项 **shell 执行与认证流程** 的修复 PR。此外，"SSR Pipeline"（PR 自动生成基础设施）的多个子模块 PR 持续推进。

---

## 2. 版本发布

### v0.52.0-nightly.20260722.gc776c665b
- **安全修复**：重写 `a2a-server` 后端，启动序列、环境加载机制及任务级环境隔离，阻止不可信工作区下的零点击 RCE 与环境污染（[#28470](https://github.com/google-gemini/gemini-cli/pull/28470)）

---

## 3. 社区热点 Issues

| # | Issue | 优先级 | 关注度 | 要点 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 12 评论 | `codebase_investigator` 子代理在触达 `MAX_TURNS` 后仍上报 `GOAL` 状态，掩盖了实际中断，影响调试可信度 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 评论 / 8 👍 | 通用代理（generalist agent）长时间挂起（最高达 1 小时），简单的文件夹创建也会卡死；提示模型不委派子代理可绕过 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 8 评论 | 提议基于 Gemini 3 原生 bash 偏好的"零依赖 OS 沙箱 + 执行后意图路由"，以更安全地释放模型原生能力 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | P1 | 7 评论 | 组件级评估 EPIC：继 [#15300](https://github.com/google-gemini/gemini-cli/issues/15300) 后已积累 76 个行为评估，覆盖 6 个 Gemini 模型 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 评论 | 评估 AST 感知文件读取/搜索/映射对 token 效率与工具调用准确性的潜在收益 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 6 评论 | Gemini 几乎不会主动调用自定义 skills 与 sub-agents，必须显式指令才能触发 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | P2 | 5 评论 | Auto Memory 对低信号 session 的无限重试问题，导致 inbox 反复弹出同一会话 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | P1 | 4 评论 / 3 👍 | 简单 shell 命令执行完成后仍卡在 "Waiting input"，核心层 P1 bug |
| 9 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 评论 | `browser_agent` 采用 fail-fast 策略处理锁定的浏览器 profile，需增强会话接管与锁恢复 |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 评论 | browser 子代理在 Wayland 下失败并以 `Termination Reason: GOAL` 上报，掩盖真实错误 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 要点 |
|---|---|---|---|
| 1 | [#28470](https://github.com/google-gemini/gemini-cli/pull/28470) | 🔒 安全 | **a2a-server RCE 防御**：重构启动序列与环境隔离，已合并入 nightly |
| 2 | [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | 🔒 安全 | 修补 `detectBashSubstitution` 中 `$VAR` / `${VAR}` 变量展开绕过（GHSA-wpqr-6v78-jr5g） |
| 3 | [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) | 🔒 安全 / 质量 | 对发送到模型的 shell 输出做上限控制，防止 `find /` 等命令灌入大量 token |
| 4 | [#28472](https://github.com/google-gemini/gemini-cli/pull/28472) | 🐛 关键 bug | 修复 GCA Agent Mode 下缓存凭据回退至 `GOOGLE_APPLICATION_CREDENTIALS` 的回归问题（VS Code 中退出码 41） |
| 5 | [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) | 🐛 关键 bug | 模型 fallback 至 `gemini-2.5-flash` 时轮换 session ID，解决 Code Assist 后端的 `[API Error: Please submit a new query...]` 阻塞 |
| 6 | [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | ✨ 功能 | 实现 PR 生成流水线（SSR Pipeline）主调度层与异步容器入口，含 Firestore 并发锁与迭代修复状态机 |
| 7 | [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | ✨ 功能 | evals 工具调用时间线格式化与失败摘要诊断（已关闭） |
| 8 | [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) | ✨ 功能 | 新增 `npm run eval:coverage` 命令，跨工具注册表报告评估覆盖率（已关闭） |
| 9 | [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) | ✨ 基础设施 | Issue-to-PR 流水线的 Firestore 双锁并发控制与测试接入工具 |
| 10 | [#28474](https://github.com/google-gemini/gemini-cli/pull/28474) | ✨ 可观测性 | 工具调用遥测新增 `skill_name` 维度（[#18189](https://github.com/google-gemini/gemini-cli/issues/18189)），便于企业级技能使用分析 |

---

## 5. 功能需求趋势

从近 24 小时活跃的 50 条 Issue 中可提炼出以下社区最关注的方向：

- **🔒 安全与沙箱化**：`a2a-server` RCE、shell 变量展开绕过、shell 输出无上限、Auto Memory 凭据泄露路径——形成持续的安全硬化主线。
- **🤖 Subagent 可靠性**：子代理 hang、状态误报（MAX_TURNS 被标记为 GOAL）、Wayland 兼容、配置覆盖失效——是 P1 集中区。
- **🧠 Auto Memory 系统完善**：去重失败、无效补丁隔离、低信号会话去重——构成一个完整的子主题簇（#26516、#26522、#26523、#26525）。
- **📊 评估（Eval）基础设施**：组件级、AST 感知工具、subagent 轨迹可见性（`/chat share`）——指向更细粒度的质量度量。
- **🌐 Browser Agent 韧性**：会话接管、锁恢复、Wayland 支持、`settings.json` 优先级修复。
- **🛠️ AST 感知工具链**：精确方法读取、降低噪声 token、改进 `codebase_investigator`。
- **⚙️ PR 自动生成流水线（SSR Pipeline）**：Cloud Run + Firestore + Workflows 的整套编排正在落地。
- **⌨️ 终端体验**：resize 闪烁、外置编辑器退出后 corruption、shell 卡 "Waiting input"。

---

## 6. 开发者关注点

- **痛点 1：Subagent 不可靠**——`generalist agent` 委派后长时间挂起、错误状态上报为 `GOAL`，使 `/bug` 报告缺乏子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。开发者被迫显式提示模型"不要使用子代理"。
- **痛点 2：Skills 不被主动调用**——自定义 skills（如 gradle、git）几乎不会被模型自主触发，必须显式指令，削弱了 skills 机制的实际价值（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。
- **痛点 3：认证与 session 鲁棒性**——GCA Agent Mode 在凭据缓存缺失时无法回退到 `GOOGLE_APPLICATION_CREDENTIALS`；fallback 至 Flash 模型后旧 session ID 触发阻塞错误。
- **痛点 4：Shell 终端稳定性**——简单命令完成后仍卡在 "Waiting input"；外置编辑器退出引发 buffer corruption；模型倾向于在随机目录散布临时脚本（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)）。
- **痛点 5：工具爆炸**——可用工具超过 128/400 时 API 报 400 错误，模型缺乏工具范围的动态收敛（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。
- **高频需求**：更可靠的状态上报语义、Auto Memory 的工程化质量、shell/AST 工具的精度提升、企业级遥测维度、以及对子代理轨迹可观测性（`/chat share` 集成）。

---

> 📌 **数据范围**：过去 24 小时内更新的 50 条 Issue、17 条 PR 与 1 个 nightly 版本。完整列表请参考 [gemini-cli GitHub 仓库](https://github.com/google-gemini/gemini-cli)。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a daily report in Chinese for GitHub Copilot CLI community dynamics based on the provided data. Let me analyze the data carefully:

1. **Latest Release**: v1.0.74-0 was released with:
   - Added: `/model plan` command to pick a model while in plan mode
   - Improved: Resume search matches session titles even when whitespace differs

2. **Latest Issues**: 38 issues total, but only 30 shown with comments. Let me identify the most important ones based on comments and 👍:
   - #2282 (CLOSED, 11 comments, 1 👍) - MCP servers connection issue on Windows
   - #1305 (OPEN, 4 comments, 26 👍) - Support CIMD for Remote OAuth MCP Servers - high 👍
   - #4188 (OPEN, 3 comments, 2 👍) - Regression on plan-mode
   - #2193 (OPEN, 3 comments, 14 👍) - Default model configuration for /fleet subagents
   - #4183 (OPEN, 2 comments, 5 👍) - Auto-compaction issue with CAPI 5 MB failure
   - #4163 (OPEN, 2 comments, 0 👍) - Zombie processes issue
   - #1518 (OPEN, 2 comments, 14 👍) - Support MCP resources and prompts
   - #4012 (OPEN, 2 comments, 17 👍) - BYOK reasoning effort bug for glm-5.2:cloud
   - #2595 (OPEN, 2 comments, 0 👍) - Background agent completion retention
   - #4206 (OPEN, 1 comment, 2 👍) - Environment footer stuck loading
   - #3976 (OPEN, 1 comment, 0 👍) - tgrep indexer OOM-kills on large monorepos
   - #4212 (OPEN, 1 comment, 0 👍) - tmux dark-on-dark rendering
   - #3073 (OPEN, 1 comment, 0 👍) - MCP resources/subscribe and notifications
   - #1803 (OPEN, 1 comment, 8 👍) - Support MCP resources/read primitive
   - #4005 (OPEN, 1 comment, 2 👍) - Copilot billing entity issue
   - #4196 (OPEN, 1 comment, 0 👍) - BYOK completions wire API fails
   - #3125 (OPEN, 1 comment, 0 👍) - MCP tools/list_changed notification issue
   - And others with 0 comments

3. **Latest PRs**: Only 1 PR (#3163) which seems to be unrelated to actual CLI functionality - it's titled "ViewSonic monitor" and seems to be a spam/joke PR.

Let me organize this into a structured Chinese daily report. I need to:
- Be concise and professional
- Suitable for technical developers
- Include GitHub links for each item
- Cover all 6 required sections

Let me draft the content now.

For section 1 (今日速览), the key highlights:
- v1.0.74-0 released with `/model plan` feature
- A regression in plan-mode is concerning
- MCP-related issues remain the dominant theme

For section 2 (版本发布):
- v1.0.74-0 with the model picker for plan mode

For section 3 (社区热点 Issues):
Top 10 by importance (considering both comments and likes):
1. #2282 - 11 comments, MCP connection issue (closed!)
2. #1305 - 26 likes, CIMD for OAuth MCP
3. #4012 - 17 likes, BYOK reasoning effort
4. #1518 - 14 likes, MCP resources and prompts
5. #2193 - 14 likes, /fleet default model
6. #1803 - 8 likes, MCP resources/read
7. #4183 - 5 likes, auto-compaction 5MB issue
8. #4188 - 3 comments, plan-mode regression
9. #4163 - zombie processes (important bug)
10. #4206 - environment footer stuck
Or alternatively: #3976 (tgrep OOM), #4212 (tmux rendering)

For section 4 (重要 PR 进展):
There's really only 1 PR (#3163) which appears to be spam/irrelevant. I should note this honestly.

For section 5 (功能需求趋势):
- MCP ecosystem expansion (resources, prompts, subscribe, notifications, OAuth improvements)
- Model customization and configuration (/fleet default model, /model plan)
- Custom agent profiles (.agents convention, skill tool alias, inline agent invocation)
- Usage transparency (per-subagent credit breakdown)
- Cross-platform/terminal compatibility (tmux, monorepo performance)

For section 6 (开发者关注点):
- MCP protocol coverage gaps
- Plan-mode regression breaking existing workflows
- Resource consumption issues (zombie processes, OOM in tgrep)
- Terminal rendering issues (tmux)
- Loading state issues (environment footer, eternal loading)
- BYOK model compatibility

Let me write this in Chinese now. I should be concise and professional, use proper Markdown formatting.</think>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-07-22
**项目**：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

今日社区最显著的动态是 **`v1.0.74-0` 预览版发布**，新增 `/model plan` 命令以在规划模式下灵活切换模型；同时，**Plan Mode 回归（#4188）** 和 **MCP 协议能力补全** 成为开发者讨论最热烈的两条主线，前者影响现有工作流，后者关乎生态扩展。此外，**大量 Loading 卡死、BIGINT 序列化、终端渲染** 等稳定性问题在 24 小时内集中涌现，1.0.73 版本的边缘场景可靠性引发关注。

---

## 🚀 版本发布

### [v1.0.74-0](https://github.com/github/copilot-cli/releases) （预览）

**Added**
- 新增 `/model plan`（或 `/model --plan`）命令，允许在 Plan Mode 中为规划阶段单独指定模型：传入模型 ID 进入使用，传入 `off` 清除，缺省时打开选择器。离开 Plan Mode 后自动恢复为会话默认模型。

**Improved**
- Resume 搜索现在可在标题空白字符不一致时也能正确匹配会话标题（容错性增强）。

> 💡 该版本意味着 Copilot CLI 正在把"模型选择"细粒度化到 **任务阶段维度**，体现了"思考/执行"模型分离的产品思路。

---

## 🔥 社区热点 Issues

> 按评论活跃度 + 👍 反应排序，精选 10 条。

### 1. [#2282 – [CLOSED] MCP 服务器连接失败](https://github.com/github/copilot-cli/issues/2282)
Windows + WinGet 安装场景下，github-mcp-server 连接失败并提示 `/mcp show`。**11 条评论**，社区中已经出现"如何清理 MCP 配置"的高频求助讨论。已关闭说明官方已提供修复路径。

### 2. [#1305 – 支持 Remote OAuth MCP 的 CIMD（客户端 ID 元数据文档）](https://github.com/github/copilot-cli/issues/1305)
**26 👍**，长期最高赞议题之一。在 DCR 基础上请求 CIMD 支持，是 GitHub Enterprise 场景下打通企业 OAuth MCP 的关键缺口。

### 3. [#4012 – BYOK：`glm-5.2:cloud` 不支持 reasoning effort](https://github.com/github/copilot-cli/issues/4012)
**17 👍**。自有模型（Bring Your Own Key）场景下，第三方模型能力探测失败，影响 BYOK 用户使用 `--reasoning-effort max` 等高级能力。

### 4. [#1518 – 支持 MCP Resources 与 Prompts](https://github.com/github/copilot-cli/issues/1518)
**14 👍**。MCP 三大原语目前只支持 tools，resources/proments 缺失使得许多 MCP 服务商无法被完整利用。

### 5. [#2193 – `/fleet` 子代理的默认模型配置](https://github.com/github/copilot-cli/issues/2193)
**14 👍**。请求为 /fleet 派生的子代理设置全局/项目级默认模型，避免每次都需手动指定。

### 6. [#1803 – 支持 MCP `resources/read` 原语](https://github.com/github/copilot-cli/issues/1803)
**8 👍**。与 #1518/#3073 一脉相承，是 MCP 协议完整性的基础工单。

### 7. [#4183 – 自动压缩无法规避 5 MB CAPI Body 上限](https://github.com/github/copilot-cli/issues/4183)
**5 👍**。长会话 + 工具调用密集时，即使 token 未超限，请求体大小也会触发硬上限，auto-compaction 没有覆盖该路径，是企业长任务的关键瓶颈。

### 8. [#4188 – Plan Mode 回归：阻塞 shell 命令](https://github.com/github/copilot-cli/issues/4188)
**3 评论**。`gh` CLI 等工具在 Plan Mode 中被阻断，影响基于规划阶段读取/创建 issue 的现有工作流。

### 9. [#4163 – 1.0.71 子进程未被回收，累积僵尸进程](https://github.com/github/copilot-cli/issues/4163)
**2 评论**。Linux 平台下每会话约 2 个/分钟泄漏僵尸进程，长期使用会触发 PID 耗尽风险。

### 10. [#4206 – 环境页脚永久卡在 "Loading:"](https://github.com/github/copilot-cli/issues/4206)
**2 👍**。macOS + Node v24 + 企业 MCP 策略下，握手未完成即无限 Loading，状态不一致；与 #4214/#4215 "eternal loading" 同源。

---

## 🛠 重要 PR 进展

过去 24 小时仅 1 条 PR 更新，且内容与 CLI 功能无关：

### [#3163 – ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)
提交者 `@tijuks`，描述为对 #2591/#3561/#3559 的 monitor 工作及 GitHub Actions runner 初始化。**0 👍，无审查评论**，疑似无效/误提交 PR，建议关注者无需投入评估精力。

> ⚠️ 近期 PR 活跃度极低，建议在产品迭代期关注主干分支提交与 Releases 之间的代码差异，而非依赖 PR 列表追踪功能动向。

---

## 📈 功能需求趋势

综合本期 38 条 Issue，可以提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 社区热度 |
|---|---|---|
| **MCP 协议能力补全** | #1305、#1518、#1803、#3073、#3125、#4203、#4205 | ⭐⭐⭐⭐⭐ |
| **模型精细化配置与多模型协同** | #2193、#4012、#4196、本期 v1.0.74-0 | ⭐⭐⭐⭐ |
| **自定义代理（Custom Agent）生态** | #4204（.agents 目录）、#4208（行内调用链）、#4209（skill 工具别名） | ⭐⭐⭐⭐ |
| **使用透明度与计费** | #4005（billing entity）、#4207（per-subagent 信用明细） | ⭐⭐⭐ |
| **终端/平台兼容性** | #4163（Linux 僵尸进程）、#3976（tgrep OOM）、#4212（tmux 渲染）、#4213（焦点失焦吞键） | ⭐⭐⭐ |

---

## 🧑‍💻 开发者关注点与痛点

**1. 协议完整性焦虑**
MCP 当前只支持 `tools` 原语，开发者普遍希望补齐 `resources`、`prompts`、`subscribe`、`list_changed notifications`，并完善 OAuth 的 CIMD 与 refresh_token 静默刷新路径（#4203）。

**2. Plan Mode 的"收紧"引发不满**
#4188 指出新版 Plan Mode 突然阻断 `gh` CLI，让现有"在规划阶段枚举 issue/读取 issue 上下文"的自动化流程失效。这是一条典型的"能力升级但工作流断裂"型问题。

**3. 长会话与重型仓库的健壮性**
#4183（5 MB Body）、#4163（僵尸进程）、#3976（tgrep OOM）都指向同一根源：CLI 在长会话和大仓库下资源回收/边界保护不足。

**4. 边缘环境兼容性差**
tmux 暗色渲染（#4212）、窗口失焦时吞键（#4213）、远程开发机缺少 o200k_base.tiktoken（#4201）—— 这些"非主路径"环境正在消耗社区大量精力。

**5. 加载状态不可观测**
#4206 / #4214 / #4215 集中反映"Loading 卡片卡死"，且 #4201 中用户反馈 "copilot thinks it identified the source … and it says it may be charging me"——Loading 不收敛直接影响信任与计费预期。

**6. BYOK 与第三方模型的"能力探测"短板**
#4012 / #4196 共同揭示：CLI 在判定"模型是否支持 reasoning / streaming 字段"时缺乏统一抽象，导致不同 BYOK 厂商反复踩坑。

---

> 🤝 **建议**：若你正使用 1.0.73，遇到"Loading"永久挂起可先回退至 1.0.71（参考 #4202）；若使用 Plan Mode + `gh` 工作流，请关注 #4188 的修复进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>Let me analyze the GitHub data for kimi-cli from the past 24 hours and generate a daily report.

Key observations:
1. No new releases in the past 24 hours
2. 5 issues updated in the past 24 hours
3. 1 PR updated in the past 24 hours

Let me look at the issues:
- #2531: MCP tool names & schemas rejected by Moonshot API (HTTP 400) - new issue about Moonshot API rejecting tool schemas
- #2474: UI shaking/re-rendering issue - updated
- #2529: Keyboard number pad not working - new issue
- #2528: Shell mode output too long - new issue
- #2527: k2.5 model tool calling failure + goal mode infinite loop - new issue

PRs:
- #2530: Fix shell blocking issue with detached children

Now let me craft a structured daily report in Chinese.

For the issues section, I should note there are only 5 issues, but the user wants 10 most notable. I'll include all 5 since there aren't 10.

For PRs, there's only 1, so I'll just include that one.

Let me think about the trends:
- Model compatibility issues (k2.5 tool calling)
- API schema validation issues (MCP)
- UI/UX bugs (keyboard, rendering)
- Shell mode issues

Developer pain points:
- Tool calling reliability with different models
- Input/keyboard event handling
- Shell command execution handling</think>

# Kimi Code CLI 社区动态日报

**日期**: 2026-07-22
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

过去 24 小时仓库无新版本发布，但社区活跃度集中在 **k2.5 模型兼容性** 与 **MCP 工具调用兼容性** 两大方向。当日新增 5 条 Issue 中有 3 条直接涉及模型/工具链路异常，其中 k2.5 的 tool calling 完全失效被标记为"必现"。此外有 1 条 PR 提交修复了 Shell 后台子进程阻塞退出码读取的问题。

---

## 🚀 版本发布

无新版本发布（过去 24 小时）。

---

## 🔥 社区热点 Issues

> 过去 24 小时内仅有 5 条 Issue 更新（总数不足以凑齐 10 条），故全部列出，按重要性排序。

### 1. [MCP tool names & schemas rejected by Moonshot API (HTTP 400)](https://github.com/MoonshotAI/kimi-cli/issues/2531)
- **作者**: @sbdsam
- **重要性**: ⭐⭐⭐⭐⭐ 影响所有通过 Moonshot API 使用 MCP 工具的用户，属于"全量阻断型"缺陷。错误信息 `tools.function.parameters is not a valid moonshot flavored json schema` 表明问题在客户端 schema 校验不严格。
- **社区反应**: 创建当天即有 1 条评论，0 个 👍（属于新发现的可复现 bug）。

### 2. [k2.5 模型 tool calling 完全失效 + goal mode 无限循环（必现）](https://github.com/MoonshotAI/kimi-cli/issues/2527)
- **作者**: @lesteryan
- **重要性**: ⭐⭐⭐⭐⭐ 报告者明确标注"必现"，覆盖所有 tool call 命名格式（`functions_Bash`、`functions_Bash_0`、`<functions_Bash_0>`、JSON）均失败；goal mode 陷入死循环导致会话无法退出。
- **社区反应**: 当日新建，0 评论（属于新发现的严重问题）。

### 3. [界面持续抖动 / 重复渲染整个对话](https://github.com/MoonshotAI/kimi-cli/issues/2474)
- **作者**: @yudichimiantiao
- **重要性**: ⭐⭐⭐⭐ 跨版本存在的 UI 渲染性能/状态管理问题，严重影响交互体验。
- **社区反应**: 👍 2，是当日 5 条 Issue 中获赞最高的一条，说明社区有较强共鸣。

### 4. [键盘右侧数字键点击后输入框无反应](https://github.com/MoonshotAI/kimi-cli/issues/2529)
- **作者**: @woai3c
- **重要性**: ⭐⭐⭐ Windows / 数字小键盘用户的基础输入阻塞 bug，影响效率但易修复。
- **社区反应**: 新建当日 0 评论（独立 issue，需更多用户反馈）。

### 5. [Shell mode 输出过长](https://github.com/MoonshotAI/kimi-cli/issues/2528)
- **作者**: @wenli7363
- **重要性**: ⭐⭐⭐ 体验性问题：使用 `!` 进入 shell 模式后输出未做截断/分页，可能与近期 shell 模式改动相关。
- **社区反应**: 新建当日 0 评论。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅 1 条 PR 更新。

### [fix(shell): stop blocking until timeout when a detached child holds the pipes (#2530)](https://github.com/MoonshotAI/kimi-cli/pull/2530)
- **作者**: @ayaangazali
- **关联 Issue**: #2468
- **修复内容**: 解决了前台 shell 路径中 `_run_shell_command` 等待 stdout/stderr EOF 时会被 detached 子进程（如 `some_daemon & echo done`）持有管道句柄导致阻塞，直至超时才返回的缺陷。
- **价值**: 提升 shell 模式下长时间/后台命令的可预测性，避免误判为超时失败，属于可靠性修复。

---

## 📈 功能需求趋势

从近期 Issues 提炼出 4 个社区最关注的方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **多模型兼容与 Tool Calling 可靠性** | #2527, #2531 | 🔥🔥🔥🔥🔥 |
| **UI/交互稳定性**（渲染、键盘事件、输出截断） | #2474, #2528, #2529 | 🔥🔥🔥🔥 |
| **Shell/进程管理健壮性** | #2528, PR #2530 | 🔥🔥🔥 |
| **MCP 生态适配** | #2531 | 🔥🔥 |

**核心趋势**: 用户对 **k2.5 / k3 系列模型的工具调用稳定性** 的容忍度正在快速下降，叠加 Moonshot API 对 MCP schema 的严格要求，暴露了客户端缺乏 schema 预处理/兜底机制的短板。

---

## 👨‍💻 开发者关注点

综合过去 24 小时的反馈，开发者的核心痛点集中在以下三点：

1. **"模型 × 工具"链路缺乏统一健壮性保障**
   - k2.5 工具调用全面失效（#2527）
   - MCP schema 不符合 Moonshot API 风味（#2531）
   - 期望：客户端应内置 schema sanitization、多格式 tool call 兜底，而非依赖服务端。

2. **基础交互层 bug 仍在上游积压**
   - 数字小键盘事件未监听（#2529）
   - 长输出未截断/分页（#2528）
   - 整段对话反复重新渲染（#2474，跨多个版本未修）
   - 期望：完善键盘事件映射、引入输出分页/虚拟化渲染、修复状态管理以避免全量重绘。

3. **Shell/进程模型边界不清**
   - 后台子进程持有管道导致 EOF 永远不到达（PR #2530 修复）
   - shell 模式长输出无截断（#2528）
   - 期望：对"前台命令携带后台子进程"的场景给出明确的退出码与输出采集语义，并提供可配置的分页/截断策略。

---

*本日报基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for anomalyco/opencode on 2026-07-22 and generate a comprehensive daily report.

Let me categorize the data:

**Key observations:**

1. **No releases in past 24 hours** - section will be omitted
2. **Multiple "Request blocked by upstream provider" issues** - This is a major issue affecting OpenCode Go subscribers (#38216, #38218, #38195) - 3 issues on same day about the same problem
3. **DeepSeek-related PRs** - #38229 (system prompt), #38232 (output limit) - same contributor @punkisnotdead3
4. **TUI fixes by @jlongster** - #38224 (CLOSED), #38231 (OPEN) - shell mode styling
5. **Provider/AI improvements** - #38227 (custom reasoning fields), #38214 (MiniMax M3 thinking controls)
6. **Bug fixes** - #38213 (clock skew), #38225 (Bun.serve Windows), #38217 (tool progress), #38188 (malformed patches), #38223 (hosted updater - CLOSED)
7. **Feature additions** - #38031 (Chinese translation), #38200 (Solidity support), #34419/#18497 (sidebar position)
8. **Web UI improvements** - #37097 (shell output), #37054 (fork dialog)

**Top 10 Issues to highlight:**
1. #8836 - Session list not scoped to current directory (11 comments, 12 likes) - Most discussed
2. #38216 - Request blocked by upstream provider (6 comments) - Major current issue
3. #38195 - 401 AuthError same issue (4 comments, 10 likes)
4. #38218 - opencode-go subscription blocked (3 comments)
5. #38215 - Same provider issue
6. #13763 - MCPs disabled don't persist (6 comments)
7. #21738 - Custom ai-sdk/google drops API key (6 comments)
8. #18080 - Cursor rules compatibility feature (6 comments)
9. #26035 - Allow disabling diff summarization (5 comments)
10. #21979 - Wrapped stream error chunks bypass retry (5 comments)
11. #28738 - Interrupting main agent doesn't stop subagents (4 comments)
12. #22323 - No messages displayed in web UI (4 comments)

**Top 10 PRs to highlight:**
1. #38213 - Fix clock-skew response loops (high impact)
2. #38225 - Use Bun.serve for Windows HTTP
3. #38214 - MiniMax M3 thinking controls
4. #38227 - Custom reasoning fields
5. #38229 - DeepSeek system prompt
6. #38232 - DeepSeek V4 output limit
7. #38231 - TUI shell mode styling
8. #38217 - Tool progress live-only
9. #38188 - Reject malformed patch hunks
10. #37097 - Show shell output while running
11. #38031 - Chinese translation supplement
12. #38200 - Solidity file type support
13. #38223 (CLOSED) - Hosted updater API

**Functional trends:**
- IDE integration (Cursor rules compatibility)
- Provider/model support (DeepSeek, MiniMax M3, custom reasoning)
- Session management improvements
- TUI/Web UI polish
- Mobile UI improvements
- Provider authentication issues
- Migration tool (custom slash commands)

Let me write the report in Chinese, professional tone.</think>

# OpenCode 社区动态日报
**日期：2026-07-22**
**数据来源：github.com/anomalyco/opencode**

---

## 📌 今日速览

今日社区最显著的动态是 **OpenCode Go 订阅服务出现大面积认证故障**——多个用户在同一天提交类似 issue 报告（#38216 / #38218 / #38195），所有 Go 订阅模型均返回 `Request blocked by upstream provider` 错误，而免费模型正常工作。与此同时，开发团队在 Provider 层、TUI 主题层与 Session 层的修复持续推进，**DeepSeek 系统提示词与输出限制**、**MiniMax M3 thinking 控制**、**Bun.serve 在 Windows 上的 HTTP 修复**等 PR 值得重点关注。

---

## 📦 版本发布

> 过去 24 小时无新版本发布，本节略过。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 关注理由 |
|---|---|---|---|---|
| 1 | [#8836](https://github.com/anomalyco/opencode/issues/8836) Session 列表未限定当前目录 | CLOSED | 11 / 12 | **今日评论数最高**的长期问题，反映 session 隔离逻辑的边界缺陷，对多项目用户影响明显。 |
| 2 | [#38195](https://github.com/anomalyco/opencode/issues/38195) 401 AuthError: Request blocked by upstream provider | OPEN | 4 / 10 | **OpenCode Go 订阅跨平台全机型失效**，作者在 Desktop 与 Hermes 多台 Windows 设备复现，是今天最"扎心"的反馈。 |
| 3 | [#38216](https://github.com/anomalyco/opencode/issues/38216) Request blocked by upstream provider. | OPEN | 6 / 0 | 与上一条同源问题，**当日新增 6 条评论集中讨论**，反映故障影响范围仍在扩大。 |
| 4 | [#38218](https://github.com/anomalyco/opencode/issues/38218) opencode-go: 所有订阅模型无法调用 | OPEN | 3 / 0 | 又一例 Go 订阅用户报告完整功能不可用，**已形成"群体性 issue"**。 |
| 5 | [#38215](https://github.com/anomalyco/opencode/issues/38215) [needs:compliance] Request blocked by upstream provider. | OPEN | 3 / 0 | 标题直接打出 **HELP**，可见用户焦急程度。 |
| 6 | [#13763](https://github.com/anomalyco/opencode/issues/13763) MCP 禁用状态不持久化 | CLOSED | 6 / 4 | MCP 配置持久化是高频痛点，CLOSE 状态意味着应已修复。 |
| 7 | [#21738](https://github.com/anomalyco/opencode/issues/21738) 自定义 @ai-sdk/google + baseURL 时 API Key 丢失 | CLOSED | 6 / 0 | 自定义 provider 场景下的关键 bug，开发者迁移自部署网关时极易踩坑。 |
| 8 | [#18080](https://github.com/anomalyco/opencode/issues/18080) [FEATURE] Cursor rules/agents/skills 兼容 | CLOSED | 6 / 3 | **高呼声功能**：让 Cursor 用户无缝迁移到 OpenCode，直接关系到生态扩展。 |
| 9 | [#26035](https://github.com/anomalyco/opencode/issues/26035) [FEATURE] 允许关闭 session diff 自动摘要 | CLOSED | 5 / 2 | 长 session 场景下的性能与可读性诉求。 |
| 10 | [#21979](https://github.com/anomalyco/opencode/issues/21979) 包装流错误块绕过重试，父 session 永久挂起 | CLOSED | 5 / 1 | 流式响应错误处理的健壮性问题，影响 Responses 路径下所有 provider。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 亮点 |
|---|---|---|---|
| 1 | [#38213](https://github.com/anomalyco/opencode/pull/38213) **fix: stop clock-skew response loops** | Bug Fix | 修复客户端/服务端时钟漂移造成的请求循环，**同时关闭 #24476 与 #25270** 两个长期 issue，意义重大。 |
| 2 | [#38225](https://github.com/anomalyco/opencode/pull/38225) **fix: use Bun.serve for HTTP on native Windows** | Bug Fix | 解决 Windows 原生 Bun 下 `node:http.createServer().listen()` 绑定端口但不接收连接的隐患，**关闭 #38220**。 |
| 3 | [#38214](https://github.com/anomalyco/opencode/pull/38214) **fix(provider): route MiniMax M3 thinking controls** | Bug Fix | 把 NVIDIA / Lilac 渠道的 MiniMax M3 切换通过 `chat_template_kwargs.thinking_mode` 路由，并保留 `thinking.type: adaptive`。 |
| 4 | [#38227](https://github.com/anomalyco/opencode/pull/38227) **feat(ai): support custom reasoning fields** | Feature | 引入 `reasoningField` 模型选项，统一处理 Models.dev 与 V1 的 `interleaved` 字段，对自定义 OpenAI 兼容 provider 友好。 |
| 5 | [#38229](https://github.com/anomalyco/opencode/pull/38229) **fix: add DeepSeek system prompt** | Bug Fix | **修复 DeepSeek 模型继承通用系统提示词导致的指令冲突**，关闭 #38234。 |
| 6 | [#38232](https://github.com/anomalyco/opencode/pull/38232) **fix: preserve DeepSeek V4 output limit** | Bug Fix | 解除 32K 全局默认对 DeepSeek V4 声明的 384K 输出上限的覆盖。 |
| 7 | [#38231](https://github.com/anomalyco/opencode/pull/38231) **[contributor] fix(tui): restore shell mode styling** | Bug Fix | 恢复 shell 模式的视觉标识——`background.accent` 与 `Shell` label，V2 主题迁移遗留问题。 |
| 8 | [#38217](https://github.com/anomalyco/opencode/pull/38217) **[contributor] fix: make tool progress live-only** | Refactor/Bug | 把运行中工具进度从"持久会话历史"改为"实时快照"，**显著减少噪声与 token 浪费**。 |
| 9 | [#38188](https://github.com/anomalyco/opencode/pull/38188) **fix(core): reject malformed patch hunks** | Bug Fix | 拒绝畸形 patch hunk 并给出按行错误，保留 Codex 兼容行为，是 patch 应用可靠性的一次加固。 |
| 10 | [#38223](https://github.com/anomalyco/opencode/pull/38223) **[contributor] fix(cli): use hosted updater API** | Bug Fix | CLI 改走 `update.opencode.ai` 的 `/api/:channel/cli/npm` 工件端点，**已 CLOSED 并合入**。 |

> 此外值得关注：#37097（Web UI 在 shell 命令运行中默认展开，匹配 TUI 行为）、#38031（补全中文翻译，由社区贡献者 @Sunwuyuan 提交）、#38200（新增 Solidity 语法高亮）、#34419 / #18497（分别面向 Desktop 与 TUI 推出侧边栏方向配置，**同一议题 #16349 的双端落地**）。

---

## 📈 功能需求趋势

综合今日 50 条 issue，可以提炼出几个社区最关注的方向：

1. **🔌 IDE / 工具生态兼容**
   - Cursor rules/agents/skills 兼容 (#18080)
   - 项目级 `.opencode/commands` 在 GUI 中可用 (#17048)
   - 反映出 OpenCode 在抢占 Cursor / Claude Code 迁移用户上的明确战略。

2. **🤖 多模型 / 多 Provider 支持**
   - DeepSeek (#38229、#38232)
   - MiniMax M3 (#38214)
   - 自定义 `@ai-sdk/google` baseURL (#21738)
   - Kimi K2.6 子代理路由问题 (#28879)
   - 模型变体（reasoning_effort）校验 (#28931)

3. **🖥️ TUI / Web UI / Desktop 体验**
   - shell 模式样式 (#38231)、长命令实时进度 (#28932)、工具块时间戳 (#22144)
   - 桌面端自定义全局快捷键与 Windows 截图冲突 (#28853)
   - 移动竖屏布局隐藏 sidebar 按钮 (#28736)
   - web UI 多 assistant 消息场景空白 (#22323)
   - 主题配置文件化 (#28925)

4. **⚙️ Session / 多 Agent 治理**
   - session 仅显示当前目录 (#8836)
   - 关闭自动 diff 摘要以缩短长 session 处理 (#26035)
   - 中断主 agent 不影响后台子 agent (#28738)
   - plan→build 提醒的边沿触发优化 (#38067)

5. **🧾 安装 / 计费 / 订阅合规**
   - 自定义安装目录 (#24260)
   - Big Pickle 免费模型误扣费退款诉求 (#28929)
   - 今日的 Go 订阅全员 401 风暴（见右侧专题）

---

## 🧑‍💻 开发者关注点（高频痛点）

- **🚨 Provider 鉴权与上游路由不稳定** — Go 订阅今日爆发集中在这一点，开发者最担心"付费功能不可用但免费模型却正常"，急需官方透明度与状态页。
- **🧩 自定义 Provider 配置陷阱** — 自定义 `baseURL` 丢 Key、子代理路由失效，反映配置文档与运行时一致性需要更明确的契约。
- **🔁 流式错误处理与重试** — Responses 路径下的 wrapped error chunk 绕过重试 → 父 session 永久挂起，是开发者最不愿遇到的"幽灵故障"。
- **⏱️ 长 Session 的性能开销** — 自动 diff 摘要、tool block 增量、全量 history 扫描带来的延迟与成本被反复提及。
- **🧷 平台边界问题** — Windows 原生 Bun 的 HTTP、TUI renderer 缺失、键盘快捷键被截获，这些"边缘平台"问题正在累积成用户的入门阻力。
- **🌐 本地化与生态扩展** — 中文翻译补丁自 PR 入口可见，社区对中文化的诉求已经从"翻译完整度"延伸到"TUI 文案与文档"层面。
- **📱 多端一致性** — 同一个交互（shell 展开、子代理中断、移动布局），TUI / Web / Desktop 表现分裂，需要统一规范。

> 💡 建议开发者短期关注：**DeepSeek 兼容补丁栈（#38229 / #38232）、Windows 平台 HTTP 修复（#38225）、时钟偏移修复（#38213）**，这三组合入后能直接覆盖当前阻塞性最强的几个使用场景。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for Qwen Code (qwen-code) and generate a daily report for 2026-07-22.

Key observations from the data:

1. **Releases**:
   - v0.20.0-preview.0 - preview release
   - v0.20.0-nightly.20260722.b98306b7e - nightly build
   - v0.20.1 - release with autofix features
   - cua-driver-rs-v0.7.3 - driver update with relative-coordinate support

2. **Top Issues** (most commented):
   - #7156 - Subagent mutates main session model (closed, 11 comments) - P1 bug
   - #7316 - OpenAI toolCall special reaction causing subAgent unusable (closed, 5 comments)
   - #7056 - VS Code IDE companion connection failed (open, 5 comments)
   - #7284 - side-query forces enable_thinking=false breaking TokenPlan (closed, 4 comments)
   - #7306 - Harden tool-output budgeting, observability (open, 4 comments)
   - #7427 - web-shell artifact panel errors (open, 4 comments)
   - #5540 - Resuming completed background sub-agent (open, 4 comments)
   - #7252 - token-plan.ap-southeast-1 not selectable (closed, 4 comments)
   - #7287 - auto-memory MEMORY.md not registered in FileReadCache (open, 3 comments)
   - #7049 - Update check timeout UX (closed, 3 comments)

3. **Important PRs**:
   - #7475 - fix(ci): inject actual model name into triage signature
   - #7268 - feat(serve): Hot-reload workspace trust changes
   - #7474 - fix(release): exclude mobile-mcp from core version bump
   - #7473 - fix(dingtalk): preserve non-bot mention context
   - #7381 - fix(cli): correct queued message display style
   - #7395 - feat(cli): support custom skill directories via settings
   - #7388 - feat(daemon): add explicit channel delivery
   - #7471 - feat(web-shell): add git mode selector for new session creation
   - #7470 - test(core): Cover Shell truncation without an artifact
   - #7469 - feat(ci): replace broad CODEOWNERS with intelligent core review router

4. **Trend analysis**:
   - Multiple issues about enable_thinking parameter (#7284, #7332, #7440) - this is a hot topic
   - Subagent/background agent issues (#7156, #7316, #7315, #7459, #7460, #5540)
   - Web Shell improvements (#6700, #6701, #7430, #7301, #7398, #7467, #7408)
   - Auto-memory system (#7287, #7468, #7393)
   - Windows compatibility (#7118, #7139, #7056)
   - IDE integration (#7056)
   - Performance/cold start (#7264)
   - CI/CD issues (multiple bot-flagged issues)

Let me organize this into a structured Chinese daily report.</think>

# Qwen Code 社区动态日报

**日期：2026-07-22**

---

## 📌 今日速览

今日 Qwen Code 集中发布了 **v0.20.1 正式版**及 v0.20.0 预览/nightly 版本，autofix 标签驱动的 takeover/release 机制正式落地，社区随之进入 0.20.x 时代。Issues 方面，"enable_thinking=false 误送至 thinking-only 模型"已演化为多模型/多端点的连锁故障（#7284、#7332、#7440），Subagent 模型劫持（#7156）与后台代理复活（#5540、#7459、#7460）依然是会话管理的核心矛盾点。PR 端亮点在于 Web Shell 长会话渲染优化、Git 模式选择器、Channel 投递契约等面向生产体验的改进。

---

## 🚀 版本发布

### v0.20.1（今日正式版）
- **核心变更**：无已知破坏性变更
- **关键功能**：autofix 标签驱动的 takeover 与 release；修复 forced-dispatch 的 green no-op 问题（[#7165](https://github.com/QwenLM/qwen-code/pull/7165)）
- [Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1)

### v0.20.0-preview.0 / v0.20.0-nightly.20260722
- Preview 与 nightly 双轨并行，包含 telemetry daemon 指标初始化顺序的测试覆盖（[#7456](https://github.com/QwenLM/qwen-code/pull/7456)）

### cua-driver-rs-v0.7.3（vendored 二进制）
- 启用相对坐标
- macOS 通用二进制已 codesign + notarize；Linux/Windows 仍为未签名（x86_64 + arm64）

---

## 🔥 社区热点 Issues（按评论数 Top 10）

| # | Issue | 状态 | 为什么重要 |
|---|-------|------|-----------|
| [#7156](https://github.com/QwenLM/qwen-code/issues/7156) | **P1** Subagent 修改主会话模型，#7119 修复后仍复发上下文溢出 | CLOSED | 高优 Bug，11 条讨论，直指 subagent ↔ 主会话模型隔离的设计缺陷 |
| [#7316](https://github.com/QwenLM/qwen-code/issues/7316) | **P2** OpenAI 兼容模型对 `toolCall` 特殊反应导致 `subAgent` 不可用 | CLOSED | 反映 OpenAI 兼容模型适配层 schema 校验漏洞，影响生态接入 |
| [#7056](https://github.com/QwenLM/qwen-code/issues/7056) | VSCode Companion v0.19.11 连接失败（ACP 进程退出码 0） | OPEN | IDE 集成的核心故障链路，5 条评论待补充信息 |
| [#7284](https://github.com/QwenLM/qwen-code/issues/7284) | **P1** 侧查询强制 `enable_thinking=false`，击穿 TokenPlan 端点 | CLOSED | 与 #7332、#7440 构成"enable_thinking"系列事故主线 |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | 工具输出预算、可观测性、产物生命周期的硬化 | OPEN | Phase 1 已合并（#7323），是工具链稳定性的 umbrella issue |
| [#7427](https://github.com/QwenLM/qwen-code/issues/7427) | Web Shell artifact 面板自动刷新报错刷屏 | OPEN | Web Shell 生产环境高频告警噪声，影响使用体验 |
| [#5540](https://github.com/QwenLM/qwen-code/issues/5540) | 允许恢复已完成的后台 sub-agent（`send_message` 复活） | OPEN | 长期悬而未决的功能请求，4 条评论反映开发者工作流痛点 |
| [#7252](https://github.com/QwenLM/qwen-code/issues/7252) | `/auth` 中 `token-plan.ap-southeast-1` 不可选 | CLOSED | 区域服务可用性问题，影响东南亚用户 |
| [#7287](https://github.com/QwenLM/qwen-code/issues/7287) | auto-memory MEMORY.md 未注册到 FileReadCache，首次写入被拒 | OPEN | 自动记忆系统的一致性缺陷，与 #7468 形成 PR 闭环 |
| [#7049](https://github.com/QwenLM/qwen-code/issues/7049) | 更新检查超时 UX 优化（warning 而非 error，提高预算） | CLOSED | 启动期网络抖动的容错改进 |

**社区反应**：用户对 v0.20.0 适配 OpenAI 兼容模型时的子代理可用性反响激烈；Web Shell 与后台代理管理是高频反馈方向。

---

## 🛠️ 重要 PR 进展（精选 10 项）

| PR | 标题 | 影响 |
|----|------|------|
| [#7475](https://github.com/QwenLM/qwen-code/pull/7475) | **fix(ci)** 注入真实模型名到 triage 签名 | 修复 triage 工作流硬编码 `qwen3.7-max`，提升 CI 智能分诊准确性 |
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | **feat(serve)** 热重载 workspace 信任变更 | 守护进程无需重启即可应用信任策略变更（语义快照 + 运行时代际切换） |
| [#7474](https://github.com/QwenLM/qwen-code/pull/7474) | **fix(release)** 排除 mobile-mcp 跟随核心版本 bump | 与 SDK 同等待遇，避免 mobile-mcp 误升级 |
| [#7473](https://github.com/QwenLM/qwen-code/pull/7473) | **fix(dingtalk)** 保留非机器人 @ 的上下文 | DingTalk 适配器在剥离可见 `@` 文本后，仍能保留多用户提及语义 |
| [#7381](https://github.com/QwenLM/qwen-code/pull/7381) | **fix(cli)** 修正队列消息的显示样式与顺序 | 中途 steer 消息使用 `>` 前缀与重音色，按入队顺序渲染 |
| [#7395](https://github.com/QwenLM/qwen-code/pull/7395) | **feat(cli)** 通过 settings 支持自定义 skill 目录 | 新增 `skills.directories`，便于跨 agent 共享与组织 SKILL.md |
| [#7388](https://github.com/QwenLM/qwen-code/pull/7388) | **feat(daemon)** 显式 Channel 投递契约 | 守护通知、Agent 终态、定时任务统一通过命名 Channel 路由到对应 worker |
| [#7471](https://github.com/QwenLM/qwen-code/pull/7471) | **feat(web-shell)** 新建会话的 Git 模式选择器 | 在 composer 的 git chip 上以 popover 形式提供"当前分支 / 新分支 / Worktree"三选项 |
| [#7470](https://github.com/QwenLM/qwen-code/pull/7470) | **test(core)** 覆盖无 artifact 时的 Shell 截断 | 明确持久化输出元数据的三态契约（undecided / present / absent） |
| [#7469](https://github.com/QwenLM/qwen-code/pull/7469) | **feat(ci)** 智能 core review router 替换宽泛 CODEOWNERS | 由 GitHub Actions 分析 `packages/core/` 改动并精准指派评审者，替代全员 @ |

**补充值得关注的 PR**：[#7463](https://github.com/QwenLM/qwen-code/pull/7463) 为 Java SDK 增加 daemon transport；[#7453](https://github.com/QwenLM/qwen-code/pull/7453) 闭环 PR #7400 的 prompt-terminal exactly-once 自审；[#7408](https://github.com/QwenLM/qwen-code/pull/7408) 优化长会话渲染性能；[#7468](https://github.com/QwenLM/qwen-code/pull/7468) 修复 #7287 的 MEMORY.md 注册问题。

---

## 📈 功能需求趋势

按 Issue/PR 主题聚合，社区当前最关注的五个方向：

1. **Subagent / 后台代理生命周期管理**（#5540、#7156、#7459、#7460、#7315、#7316）
   - 模型隔离、复活、fork 类型发现、`send_message` 复活机制是核心矛盾。
2. **Web Shell 产品化**（#6700、#6701、#7430、#7301、#7398、#7467、#7408、#7471）
   - Workspace 选择器、Start-In 选择器、文件预览、长会话性能、新会话 Git 模式。
3. **新模型/端点兼容与 enable_thinking 协议**（#7284、#7332、#7440、#7252、#7433）
   - thinking-only 模型、TokenPlan 区域端点、Local 模型 SDK 上报等一致性问题。
4. **自动记忆系统**（#7287、#7468、#7393）
   - MEMORY.md 索引、FileReadCache 注册、recall delivery telemetry 形成完整治理闭环。
5. **性能与冷启动**（#7264、#7408、#7306）
   - ACP 急切闭包懒加载、长会话内存边界、工具输出预算观测化。

---

## 👨‍💻 开发者关注点

**高频痛点：**

- **OpenAI 兼容模型适配不稳**：toolCall 字段语义互斥、enable_thinking 误送等，导致 subagent、web_fetch 等核心工具不可用，社区请求更严格的 schema 与端点能力探测。
- **后台 subagent 不可恢复**：完成态无法 `send_message`，session-restore 只恢复 `running`，开发者希望引入 `revive` 或 paused→completed 的过渡机制（#7459 已部分回应）。
- **Web Shell 体验短板**：artifact 面板错误噪声、token 刷新即丢权限、WorkspaceId 初始化不一致、缺少文件预览等，被视为"接近生产但还差最后一步"。
- **Windows / 安装链路问题**：独立安装包 SHA-256 校验（#7118）、Docker sandbox cwd 绑定（#7139）、VSCode Companion 退出码 0（#7056）三类问题集中爆发。
- **CI 噪声与主分支不绿**：今日仍有 #7435、#7445、#7417 三个 E2E 主线失败工单，需关注稳定性。

**高频需求：**

- 跨 harness 共享 skill 目录（[#7395](https://github.com/QwenLM/qwen-code/pull/7395) 已响应）
- Channel 投递的显式契约（[#7388](https://github.com/QwenLM/qwen-code/pull/7388) 已响应）
- Java/多语言 SDK 的 daemon transport（[#7463](https://github.com/QwenLM/qwen-code/pull/7463) 已起步）
- Web Shell 工作区与 Git 工作流统一选择器（#6700、#6701、#7471 已陆续落地）

---

*日报基于 2026-07-22 过去 24 小时 GitHub 数据生成，覆盖 4 个 Release、50 条 Issue、50 条 PR。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
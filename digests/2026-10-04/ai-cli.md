# AI CLI 工具社区动态日报 2026-10-04

> 生成时间: 2026-10-04 05:16 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics from various AI CLI tools. Let me carefully analyze the data from each tool and synthesize a comprehensive comparative report.

Let me extract key data points from each tool:

**Claude Code:**
- Release: v2.1.289 (1 release)
- Top issues: 10 listed, key themes TUI, Cross-machine, Windows performance
- PRs: 4 (only 4 in past 24h)
- Key concerns: TUI input freeze, cross-machine session resume, Windows desktop git process spawn (17/sec), Opus 5.5 behavior drift

**OpenAI Codex:**
- Releases: 2 alpha (rust-v0.162.0-alpha.10, alpha.11)
- Top issues: 10 listed, Windows Computer Use, VS Code extension message loss, TUI palette cache
- PRs: 22 (high activity, all from copyberry[bot])
- Key concerns: Windows Desktop stability, VS Code extension reliability, Codex Cloud/Dot interop

**Gemini CLI:**
- Releases: 0
- Top issues: 10 listed, focus on Subagent reliability, AST-aware tools
- PRs: 14 (several major performance optimizations)
- Key concerns: Subagent hangs, MAX_TURNS reporting, sandboxing, Wayland support

**GitHub Copilot CLI:**
- Releases: 0
- Top issues: 10+ listed, focus on MCP ecosystem, BYOK
- PRs: 0
- Key concerns: macOS update breaks CLI, MCP OAuth with Entra ID, HydraFusion routing, ACP mode limitations

**Kimi Code CLI:**
- No activity

**OpenCode:**
- Releases: 0
- Top issues: 10 listed, MCP reliability, V2 Beta regressions
- PRs: 50+ (very high activity)
- Key concerns: Context window transparency (#6152 with 138 likes), remote MCP reliability, OpenCode Go model quirks

**jcode:**
- Releases: 0
- Top issues: 10 listed, focus on herdr integration, provider quotas
- PRs: 38 (high activity, batch fixes)
- Key concerns: Multi-provider quota visualization, session storage bloat (452MB), loop bugs

**pi:**
- Releases: v1.0.1, v1.0.2 (2 releases, just hit 1.0 milestone)
- Top issues: 10 listed, TUI performance, MCP extension
- PRs: 13
- Key concerns: TUI redraw storm, MCP Unix socket, OpenAI Responses, sampling by thinking level

Now let me build a comparative analysis:

**Activity comparison:**
- Claude Code: 1 release, 10 issues, 4 PRs (low PR activity)
- Codex: 2 alpha, 10 issues, 22 PRs (high PR activity)
- Gemini CLI: 0 releases, 10 issues, 14 PRs (focused on perf)
- Copilot CLI: 0 releases, 24 issues, 0 PRs (issues but no PR activity)
- Kimi: 0 activity
- OpenCode: 0 releases, 10 issues, 50+ PRs (very high PR activity)
- jcode: 0 releases, 10 issues, 38 PRs (very high PR activity)
- pi: 2 releases, 10 issues, 13 PRs (just hit 1.0)

**Common themes:**
1. MCP生态成熟度 - Codex #39783, Copilot #5044/5040/5014/5050, OpenCode #52237/53053, pi #10247/10416
2. TUI性能问题 - Claude Code #37951/96931, Codex #45163, Gemini #9255, pi #9255/9807/7730
3. 上下文窗口/Token计量 - Claude Code #98747/97449, Copilot #5042, OpenCode #6152/47646, pi #10287
4. 跨设备/会话恢复 - Claude Code #31992, OpenCode fork, Codex Remote
5. BYOK/多Provider支持 - Copilot #4012/5042, jcode provider chaos, OpenCode OAuth
6. 安全/权限 - Claude Code #99137, Codex MCP栈, Gemini #19873/22672
7. Windows Desktop稳定性 - Claude Code #94478, Codex #49458/50428/50362/42808, Copilot #4998

**Differentiation:**
- Claude Code: hosted by Anthropic, focus on TUI experience, model integration (Opus 5.5)
- Codex: focus on multi-platform (Desktop/VS Code/CLI), Computer Use
- Gemini CLI: focus on subagent ecosystem, AST-aware tools, performance optimization
- Copilot CLI: focus on MCP ecosystem, ACP protocol integration, BYOK
- OpenCode: open source, focus on extensibility, V2 migration
- jcode: focus on herdr TUI integration, multi-provider quotas
- pi: lightweight, Nix ecosystem, focus on TUI performance

**Maturity signals:**
- Claude Code (Anthropic): highly active commercial, lots of users
- Codex: rapidly iterating, lots of platform surface
- Gemini CLI: stable maintenance mode
- Copilot CLI: focused on enterprise/MCP
- OpenCode: most active PR flow (open source)
- jcode: active batch fixes
- pi: just hit 1.0 milestone

Now let me write the report.</think>

# AI CLI 工具横向对比分析报告
**报告日期：2026-10-04**
**数据窗口：过去 24 小时 GitHub 公开动态**

---

## 一、生态全景

当前 AI CLI 生态已进入**"功能深化与稳定性博弈"阶段**：各厂商工具在快速搭建完核心能力后，正面临来自真实用户场景的多平台、多 Provider、多模型压力测试。商业系工具（Claude Code、Codex、Copilot CLI）以**桌面端/IDE 集成**和**MCP 生态**为差异化战场；开源/独立工具（OpenCode、jcode、pi）则以**架构灵活性**与**PR 密度**持续推进生态边界。整体看，社区关注度正从"能不能用"过渡到"敢不敢用"——**可观测性、Token 经济性、远程协作**是本周期最一致的诉求。

---

## 二、各工具活跃度对比

| 工具 | Release | Issue 更新 | PR 更新 | 活跃度信号 |
|------|---------|-----------|---------|-----------|
| **Claude Code** | 1（v2.1.289） | 10+ | 4 | 发布节奏稳健，Issue 评论密度高（#37951 达 101 👍），PR 数量偏少 |
| **OpenAI Codex** | 2（rust alpha.10/11） | 10+ | **22** | PR 流密集（自动化合并节奏明显），版本高频迭代 |
| **Gemini CLI** | 0 | 10+ | 14 | 性能优化集群（4 个 PR 带来数量级提速），社区驱动特征明显 |
| **GitHub Copilot CLI** | 0 | **24** | 0 | Issue 数量最多但无 PR 更新，疑似"问题堆积期" |
| **Kimi Code CLI** | 0 | 0 | 0 | 仓库静默，无可观察动态 |
| **OpenCode** | 0 | 10+ | **50+** | 单日 PR 数为本期之最，开源社区贡献极度活跃 |
| **jcode** | 0 | 10+ | **38** | "批量清账"节奏，15 个 Issue 同期关闭，修复效率高 |
| **pi** | **2**（v1.0.1/1.0.2） | 10+ | 13 | 刚跨入 1.0 里程碑，重心向性能与扩展协议倾斜 |

**关键解读**：
- **PR 活跃度前三**：OpenCode > jcode > Codex，均属于"高频小步迭代"模式
- **Issue/PR 比失衡**：Copilot CLI 出现 24 Issue 但 0 PR 的"问题堆积"信号
- **版本节奏差异**：商业系（Claude Code、Codex）保持稳定发布；独立工具（pi、OpenCode）以密集 PR 演进

---

## 三、共同关注的功能方向

通过对各工具热点 Issue/PR 的横向聚类，以下方向被多家社区同时关注：

### 1. 🔗 **MCP 生态成熟度**（最普遍）
| 工具 | 代表议题 |
|------|---------|
| OpenAI Codex | #39783（MCP 栈泄漏）、#38986、#49988 |
| GitHub Copilot CLI | #5044（初始化竞态）、#5040（OAuth/Entra）、#5014（token 复用）、#5050（大小写） |
| OpenCode | #52237（远程重试）、#53053（RTT 超时）、#51223（Code Mode 权限） |
| pi | #10247（Unix socket）、#10416（MCP 2026-07-28）、#10427（/mcp 菜单） |
| Claude Code | #96792（OAuth 兼容性） |

**核心诉求**：OAuth 鉴权与企业 IdP 兼容、连接生命周期管理（重连/退避/超时）、配置可发现性。

### 2. 🖥️ **TUI/终端性能与渲染**
| 工具 | 代表议题 |
|------|---------|
| Claude Code | #37951（内联 diff 隐藏，101👍）、#96931（输入卡死）、v2.1.289（终端冻结修复） |
| Gemini CLI | #21983（Wayland）、#21924（终端尺寸闪烁） |
| pi | #9255（全屏重绘风暴）、#9807（800+ 消息卡顿）、#7730（macOS 长会话 CPU 100%） |
| OpenAI Codex | #45163（调色板缓存） |

**核心诉求**：长会话下的渲染架构（增量 diff 而非全量重绘）、输入响应稳定性、跨终端兼容性。

### 3. 📊 **上下文窗口透明度与 Token 经济性**
| 工具 | 代表议题 |
|------|---------|
| Claude Code | #98747（空闲压缩丢失上下文）、#97449（Token 用量异常）、#98679（Opus 5.5 thinking 翻倍） |
| GitHub Copilot CLI | #5042（HydraFusion 路由导致上下文丢失）、#5045（/compact 失败） |
| OpenCode | #6152（context usage 视图，**138 👍 全榜最高**）、#47646（OAuth 上下文覆盖）、#53080 修复 |
| pi | #10287（getContextUsage 过度估算） |

**核心诉求**：实时上下文使用可视化、可控的压缩策略、准确的 Token 计量。

### 4. 🌐 **跨设备/会话恢复与协作**
| 工具 | 代表议题 |
|------|---------|
| Claude Code | #31992（跨机器会话恢复）、#87190（Remote Control） |
| OpenAI Codex | #50168（Cloud↔Cloud 互操作）、#98812 |
| GitHub Copilot CLI | #5047、#5049（ACP 模式） |
| OpenCode | #53084（Desktop 完整会话分叉） |

**核心诉求**：本地/云端会话无缝迁移、多设备工作流、Agent Client Protocol 标准化。

### 5. 🔐 **安全/权限治理**
| 工具 | 代表议题 |
|------|---------|
| Claude Code | #99137（sec-default 收紧）、#98591（脚本被改写仍执行） |
| Gemini CLI | #19873（Zero-Dep 沙箱）、#22672（破坏性操作抑制）、#29510（Windows 子进程硬化） |
| OpenAI Codex | #39783（MCP 栈泄漏）、#50741（environment 工具暴露） |
| OpenCode | #52682（provider.use 策略强制） |

**核心诉求**：默认安全的权限模型、可审计的操作链路、平台特定硬化（Windows/macOS）。

### 6. 🪟 **Windows 平台一致性**
| 工具 | 代表议题 |
|------|---------|
| Claude Code | #94478（每秒 17 个 git 进程）、#96931（输入卡死） |
| OpenAI Codex | #49458、#50428、#50362、#42808、#19243（依赖缺失） |
| GitHub Copilot CLI | #5027（DNS 沙箱）、#4531（GIT_CONFIG 污染） |
| pi | #9262（路径分隔符） |

**核心诉求**：沙箱稳定性、子进程治理、文件系统路径兼容性——Windows 仍是高摩擦平台。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | TUI 体验打磨 + 模型深度集成 | 偏好 Anthropic 生态、重视 Claude 模型表现的开发者 | 商业闭源 + 活跃社区反馈渠道 |
| **OpenAI Codex** | 多平台覆盖（Desktop/VS Code/CLI/Cloud）+ Computer Use | 深度 OpenAI 用户、需要 GUI 与 CLI 并存的团队 | Rust 重写中，自动化 PR 流，Cloud↔Local 双线 |
| **Gemini CLI** | Subagent 生态 + AST 感知工具 + 性能优化 | 偏重多 Agent 工作流、代码库探索场景的开发者 | 开源，Go/TS，性能驱动型 PR 文化 |
| **GitHub Copilot CLI** | MCP 协议桥 + BYOK + ACP 集成 | 企业用户、需要私有模型/多 IdP 的组织 | 依托 GitHub 生态，企业特性优先 |
| **OpenCode** | 高度可扩展 + Provider 透明 + V2 协议 | 高级用户、开源贡献者、多模型混用者 | 独立开源，**PR 密度最高**，Provider 抽象层先行 |
| **jcode** | Herdr TUI 集成 + 多 Provider 配额 | 终端原住民、需要真实用量面板的重度用户 | 个人/小团队驱动，"小而准"的修复文化 |
| **pi** | 轻量 + Nix 生态 + TUI 性能 | 偏好可定制、类 Unix 工具链的开发者 | 独立项目，1.0 刚落地，关注增量优化 |

---

## 五、社区热度与成熟度

### 🟢 高活跃度梯队
- **OpenCode**：单日 50+ PR、贡献者密集（如 `@JerryLiu369`），处于**快速演进期**
- **jcode**：批量 Issue 关闭 + PR 合并，体现**高效维护节奏**
- **OpenAI Codex**：版本高频、PR 流密集，处于**密集迭代期**

### 🟡 稳定运营梯队
- **Claude Code**：版本节奏稳健，社区反馈渠道成熟，**大型用户基础明显**（Issue 👍 数普遍较高）
- **Gemini CLI**：进入**性能优化与稳定维护**阶段，无新版本但 PR 持续

### 🟠 早期里程碑梯队
- **pi**：刚发布 v1.0.1/1.0.2，处于**生态建立期**
- **GitHub Copilot CLI**：Issue 数量居首但 PR 为零，呈现**"用户先行、工程待补"**特征

### ⚫ 静默状态
- **Kimi Code CLI**：过去 24 小时零动态，需观察是否进入维护或停滞

---

## 六、值得关注的趋势信号

### 📈 趋势 1：**"可观测性"成为差异化竞争焦点**
- OpenCode `#6152`（138 👍）要求类似 Claude `/context` 的视图
- Claude Code、Copilot CLI、pi 都被迫直面 Token 计量失真问题
- **信号**：仅"完成任务"已不够，开发者要求看清**每次交互的成本与上下文状态**

### 📈 趋势 2：**MCP 从"能力扩展"演变为"稳定性战场"**
- 多个工具同时暴露 OAuth、重连、超时、Code Mode 等深层问题
- Copilot CLI 6 条相关 Issue 集中在 24 小时内爆发
- **信号**：MCP 协议本身需要更完善的错误恢复规范，企业落地（Entra、Atlassian）的兼容性成为分水岭

### 📈 趋势 3：**"多设备/多端协同"成为下一波核心需求**
- Claude Code、Codex、OpenCode 同步推进跨机器会话恢复与 fork 能力
- 桌面端/TUI/IDE 三端功能对齐成为普遍课题
- **信号**：单一终端的 AI 体验天花板已现，**分布式开发工作流**是下一步战场

### 📈 趋势 4：**回归问题集中在 Windows 与多 Provider 边界**
- Windows Desktop 的稳定性（Claude Code、Codex、Copilot）持续暴露资源/沙箱/路径问题
- 新 Provider（OpenCode Go、Z.ai、Kimi Coding Plan、Cursor）的 schema 对齐成为 jcode 等工具的日常工作
- **信号**：跨平台一致性需要**测试矩阵与 CI 体系**支撑，而非依赖事后修复

### 📈 趋势 5：**"修复密度"成为社区健康度关键指标**
- OpenCode、jcode 的高频 PR 流代表**社区自我修复能力**
- Copilot CLI "24 Issue / 0 PR" 是潜在警示信号
- **信号**：对开发者选型而言，**PR/Issue 比**比单纯的 star 数更能反映项目长期可持续性

---

## 七、决策参考建议

| 场景 | 推荐工具 | 理由 |
|------|---------|------|
| **追求 Claude 模型最佳 TUI 体验** | Claude Code | 商业支持成熟、TUI 打磨深入、用户反馈通道活跃 |
| **OpenAI 生态深度用户 + 多平台** | OpenAI Codex | Desktop/VS Code/CLI 全覆盖，迭代速度最快 |
| **多 Agent 编排 + 性能敏感** | Gemini CLI | Subagent 成熟、性能 PR 显著、Google 生态对接 |
| **企业落地 + BYOK + Microsoft 生态** | GitHub Copilot CLI | ACP/Entra 集成预期，但需关注 PR 流恢复 |
| **高度可定制 + 开源贡献驱动** | OpenCode | PR 密度最高、Provider 抽象透明 |
| **终端原生 + 配额真实可见** | jcode / pi | jcode 配额面板成熟、pi 刚跨 1.0 性能优化密集 |

---

> 📊 **报告说明**：本分析基于 2026-10-04 过去 24 小时各工具 GitHub 公开动态生成。Issue/PR 数量反映当下活跃度，但**不能完全代表长期健康度**——建议结合版本节奏、贡献者分布、文档完整度等多指标长期跟踪。
>
> 📎 数据源：anthropics/claude-code、openai/codex、google-gemini/gemini-cli、github/copilot-cli、MoonshotAI/kimi-cli、anomalyco/opencode、1jehuang/jcode、earendil-works/pi

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants a community hotspot report for Claude Code Skills based on the provided data. Let me analyze the data carefully.

Looking at the data:
- The PR list has 50 entries showing top 20, but the comments are all "undefined" - this is odd. Let me re-read... yes, all PRs show comments: undefined and 👍: 0. This means the data might not have actual engagement metrics for PRs, or they're all at 0. I need to work with what's available - so I'll need to infer popularity from other signals like recency, topic relevance, and issue linkage.
- The Issues list has actual comment counts (43, 16, 12, 10, 9, 8, 6, 6, 4, 4, 4, 4, 4, 4) and thumbs up counts.

Let me analyze:

**Top Issues by comments:**
1. #492 - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse (43 comments, 2 👍)
2. #228 - Enable org-wide skill sharing in Claude.ai (16 comments, 8 👍)
3. #556 - run_eval.py: claude -p never triggers skills/commands (12 comments, 7 👍)
4. #62 - All my skills have disappeared (10 comments, 2 👍)
5. #1329 - compact-memory proposal (9 comments)
6. #202 - skill-creator should be updated to best practice (8 comments)
7. #412 - agent-governance skill proposal (6 comments)
8. #189 - document-skills and example-skills plugins install identical content (6 comments, 9 👍)

**Top PRs** - Since comments are undefined, I'll need to look at what makes them notable:
- Recent and linking to high-comment issues
- New skill additions that address real pain points
- Fix PRs for widely-discussed issues

Notable PRs:
- #1742 - fixes #1668 (mcp-builder streamable_http_client) - linked to a known issue
- #1607 - fixes #1603 (retired model IDs)
- #1792 - docx LibreOffice timeout fix
- #1734 - Detect orphaned docx comments
- #525 - Pyxel retro game development skill
- #514 - document-typography skill
- #486 - ODT skill
- #1703 - md2video-audio skill
- #1245 - notion-spec-to-implementation + quantitative-resume-auditor
- #1771 - proofcore-contract-auditor (Web3)
- #822 - AWT (AI Watch Tester) - E2E testing
- #723 - testing-patterns skill
- #1776 - blast-radius skill (pre-bulk operation checklist)
- #1615 - scnet-hpc skill (HPC clusters)
- #83 - skill-quality-analyzer + skill-security-analyzer (very old PR from 2025-11)
- #1298 - fix(skill-creator) Windows and runtime failures
- #1681 - fix(skill-creator) direct execution of package_skill.py
- #1394 - eval-viewer XSS (security)
- #1390 - mcp-builder evaluation scores 0/N
- #1383 - skill-creator silent benchmark failures
- #1730 - claude-api dead URLs

Let me organize the report:

**热门 Skills 排行 (Top Skills PRs)** - Since PR comments are undefined, I'll pick the most notable ones by issue discussion linkage:

1. PR #1298 - fix(skill-creator) - addresses skill-creator bugs which has multiple high-comment issues (#1383, #1394, #202)
2. PR #1742 - fix(mcp-builder) - fixes #1668, addresses a real MCP compatibility issue
3. PR #1703 - md2video-audio - new content creation skill
4. PR #1245 - notion-spec-to-implementation - workflow automation
5. PR #525 - Pyxel retro game dev
6. PR #486 - ODT skill
7. PR #514 - document-typography
8. PR #822 - AWT E2E testing
9. PR #1776 - blast-radius (safety checklist)
10. PR #723 - testing-patterns

For "热门 Skills 排行" I think the most notable are:
1. PR #1742 - mcp-builder fix (hot topic: MCP integration)
2. PR #1298 - skill-creator fix (multiple linked issues)
3. PR #1703 - md2video-audio (media creation)
4. PR #1245 - notion-spec-to-implementation (productivity/workflow)
5. PR #822 - AWT E2E testing (testing automation)
6. PR #486 - ODT skill (document format coverage)
7. PR #1776 - blast-radius (safety)
8. PR #514 - document-typography (document quality)

**社区需求趋势**:
From Issues:
- Security/trust boundaries (#492 - top with 43 comments)
- Org-wide skill sharing (#228 - 16 comments)
- Trigger reliability (#556 - 0% trigger rate)
- Skill discovery/managing (#62 - skills disappearing)
- Memory/state management (#1329 - compact-memory)
- Skill creator quality (#202, #1383, #1394)
- Agent governance/safety (#412, #1385)
- Plugin deduplication (#189)
- Context window management (#1487 - 156k tokens)
- MCP integration (#1390)
- Cross-platform integration (#29 - Bedrock)
- SharePoint integration (#1175)

Trends:
1. 安全与权限边界（trust boundary abuse, XSS）
3. Skill 共享协作（org sharing, 触发器可靠性）
4. 文档处理扩展（PDF/ODT/docx）
5. 测试自动化（E2E, testing patterns）
6. 上下文管理（token optimization）
7. 跨平台/企业集成（Bedrock, SharePoint, HPC）

**高潜力待合并 Skills**:
- PR #1298 - skill-creator fix (very recent update)
- PR #1742 - mcp-builder fix
- PR #1245 - notion-spec-to-implementation
- PR #1776 - blast-radius
- PR #1703 - md2video-audio
- PR #486 - ODT
- PR #514 - document-typography
- PR #1734 - docx orphaned comments

**生态洞察**:
核心诉求 - Skills 正从"功能 demo"走向"企业级基础设施"，社区最迫切的诉求是 **trust boundary（信任边界）和可治理性**——从命名空间滥用、eval-viewer XSS、claude-api 156k token 注入等事件看，Skills 缺乏正式的认证、安全审计和上下文治理机制，这已经成为 Claude Code 技能生态能否进入生产环境的最大障碍。

Let me write this up in Chinese, professional and concise.</think>

# Claude Code Skills 社区热点报告
**数据截止：2026-10-04**

---

## 1. 热门 Skills 排行（Top PRs）

> 注：PR 评论数在本次数据中均为 undefined，以下排行综合近期活跃度、关联 Issue 热度和功能代表性筛选。

| # | PR / Skill | 类别 | 状态 | 核心亮点 |
|---|---|---|---|---|
| 1 | [PR #1742](https://github.com/anthropics/skills/pull/1742) **mcp-builder 修复** | Bug Fix | OPEN | 适配 `mcp>=2.0` 中 `streamable_http_client` 重命名及自定义 header 机制 |
| 2 | [PR #1298](https://github.com/anthropics/skills/pull/1298) **skill-creator 修复** | Bug Fix | OPEN | 解决 trigger eval 误报、Windows `select()` 兼容、运行时失败被识别为"非触发" |
| 3 | [PR #1703](https://github.com/anthropics/skills/pull/1703) **md2video-audio** | 内容创作 | OPEN | Markdown → MP4 视频 + 拟人化语音旁白，零成本 |
| 4 | [PR #1245](https://github.com/anthropics/skills/pull/1245) **notion-spec-to-implementation + quantitative-resume-auditor** | 工作流 | OPEN | 把产品规格直接拆解为 Notion 可执行任务 |
| 5 | [PR #822](https://github.com/anthropics/skills/pull/822) **AWT（AI Watch Tester）** | 测试 | OPEN | 给 Claude "视觉 + 浏览器控制" 的零代码 E2E 测试 |
| 6 | [PR #486](https://github.com/anthropics/skills/pull/486) **ODT Skill** | 文档 | OPEN | OpenDocument 格式读写 + LibreOffice 模板填充 |
| 7 | [PR #514](https://github.com/anthropics/skills/pull/514) **document-typography** | 文档质量 | OPEN | 排版 QA：孤行、寡行、编号错位等生成文档常见缺陷 |
| 8 | [PR #1776](https://github.com/anthropics/skills/pull/1776) **blast-radius** | 安全 | OPEN | 批量写入前的 checklist，填补"行级正确 vs 世界级正确"之间的鸿沟 |

**社区讨论焦点**：上述 Skill 都属于"补缺"或"提质"型——要么修复官方 skill 的真实 bug，要么覆盖文档格式/测试/安全等长期被吐槽的盲区，而非炫技式新功能。

---

## 2. 社区需求趋势

从 Issues 评论数和👍数可读出 6 大方向：

| 需求方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **🛡️ 信任边界与安全审计** | [#492 (43💬)](https://github.com/anthropics/skills/issues/492)、[#1394 (4💬)](https://github.com/anthropics/skills/issues/1394)、[#1175 (4💬)](https://github.com/anthropics/skills/issues/1175) | 最高评论数；命名空间冒充、eval-viewer XSS、权限写进 SKILL.md 等话题持续发酵 |
| **🏢 团队级 Skill 共享与治理** | [#228 (16💬, 8👍)](https://github.com/anthropics/skills/issues/228)、[#189 (6💬, 9👍)](https://github.com/anthropics/skills/issues/189) | 企业部署痛点：手动分发、插件重复安装 |
| **🎯 Skill 触发可靠性** | [#556 (12💬, 7👍)](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 在 `claude -p` 下 0% 触发率，skill-creator 可信度受损 |
| **💾 长程 Agent 状态压缩** | [#1329 (9💬)](https://github.com/anthropics/skills/issues/1329) | compact-memory：用紧凑符号压缩 agent 持久记忆，应对长任务上下文爆炸 |
| **🪟 上下文窗口治理** | [#1487 (4💬)](https://github.com/anthropics/skills/issues/1487) | `claude-api` skill 单次注入 ~156k tokens，单次工具调用即耗尽上下文 |
| **🔌 跨平台/企业集成** | [#29 (4💬)](https://github.com/anthropics/skills/issues/29)、[#412 (6💬)](https://github.com/anthropics/skills/issues/412) | Bedrock、SharePoint、agent-governance 等企业落地方向 |

**横向规律**：社区讨论已从"Skill 能做什么"转向"Skill 怎么不出事"——**安全、可靠性、可治理性**成为主要矛盾。

---

## 3. 高潜力待合并 Skills

以下 PR 关联真实 Issue 痛点或补齐明显空白，被合并的概率较高：

| PR | Skill | 为什么值得合并 |
|---|---|---|
| [PR #1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 适配 `mcp>=2` | MCP 是 Claude Code 核心扩展点，命名变更直接影响所有用户 |
| [PR #1298](https://github.com/anthropics/skills/pull/1298) | skill-creator Windows + 评估修复 | 关乎 skill 评测体系可信度，多次出现在 [#1383](https://github.com/anthropics/skills/issues/1383) 等高评论 Issue 中 |
| [PR #1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时检测 | docx 是高频格式，目前"假成功"是严重缺陷 |
| [PR #1730](https://github.com/anthropics/skills/pull/1730) | claude-api 死链替换 | academy 文档 404 干扰教学，低风险高收益 |
| [PR #1607](https://github.com/anthropics/skills/pull/1607) | 标记 4 个退休模型 ID | 关乎模型文档准确性 |
| [PR #1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 补齐"批量破坏性操作"前最后一道防线，企业刚需 |

---

## 4. Skills 生态洞察（一句话）

> **Claude Code Skills 正从"功能陈列"走向"生产基础设施"，社区最集中的诉求是建立正式的**信任边界、Skill 认证机制与上下文治理能力**——这已成为 Skills 能否进入企业级生产环境的最大瓶颈。**

---

### 附录：建议关注的 5 个高分 Issue
1. [#492](https://github.com/anthropics/skills/issues/492) — `anthropic/` 命名空间信任边界滥用（43💬）
2. [#228](https://github.com/anthropics/skills/issues/228) — 组织级 Skill 共享（16💬，8👍）
3. [#556](https://github.com/anthropics/skills/issues/556) — run_eval 0% 触发率（12💬，7👍）
4. [#62](https://github.com/anthropics/skills/issues/62) — Skill 莫名消失（10💬）
5. [#189](https://github.com/anthropics/skills/issues/189) — 插件重复安装（6💬，9👍，👍/💬 比最高）

---

<think>The user wants me to generate a Chinese daily report for the Claude Code community based on GitHub data. Let me analyze the data and structure it according to the requested format.

Let me organize the content:

1. **今日速览** - Need to summarize the most important dynamics
2. **版本发布** - v2.1.289 is the latest release with some fixes
3. **社区热点 Issues** - Top 10 by comment count and importance
4. **重要 PR 进展** - 4 PRs only available (only 4 in the data)
5. **功能需求趋势** - Need to extract from Issues
6. **开发者关注点** - Pain points and high-frequency needs

Let me look at the data carefully:

**Release v2.1.289:**
- Fixed deny/ask rule on nested part of compound shell command
- Fixed terminal freezing on short code blocks with many unclosed script tags or deeply nested ${ substitutions
- Fixed Read den[ied?]

**Top Issues by comments (top 10):**
1. #37951 - Hide inline diffs for Edit/Write tool output (30 comments, 101 👍) - highest engagement
2. #96931 - Input box stops accepting keystrokes in 2.1.282 (13 comments)
3. #31992 - Cross-machine session resume (12 comments, 20 👍)
4. #89690 - modelPicker skips opusplan row (11 comments)
5. #98747 - 2.1.286 idle compaction silently discards context (10 comments, 6 👍)
6. #94478 - Desktop app spawns ~17 git processes per second (9 comments)
7. #87424 - Intermittent ECONNRESET (8 comments, 8 👍)
8. #72957 - Write/Edit tools decode \uXXXX in file content (7 comments)
9. #83841 - macOS 26 access prompt re-prompts (7 comments, 6 👍)
10. #98679 - Claude Opus 5.5 behavior shift (6 comments, 2 👍)

**PRs (only 4):**
1. #81672 - fix(hookify): make package import independent of install directory name
2. #99206 - diff: docked pane starts at its header
3. #99137 - sec-default: plugin may tighten, never loosen
4. #77977 - docs(plugin-dev): document skipLfs marketplace sources

Since there are only 4 PRs, I'll list all 4 instead of 10.

**Feature Trends from Issues:**
- Cross-machine session resume (#31992, #87190)
- TUI improvements (hiding diffs #37951)
- Permission management defaults (#98159)
- First-class local sessions as project threads (#99156)
- Models behavior (#89690, #98679)

**Developer Pain Points:**
- Performance issues (git process spawn rate, terminal freezing)
- Long-running session context loss (idle compaction)
- Multi-platform bugs (Windows, macOS, Linux)
- Model behavior shifts
- Token usage calculation
- OAuth/MCP issues
- Security/permission edge cases

Let me write this in a clean, professional Chinese style suitable for tech developers.

I'll be careful about the date - the report is for 2026-10-04. The release v2.1.289 is from "past 24 hours" and the issues/PRs are from "past 24 hours" updates.

Let me draft the report now.</think>

# Claude Code 社区动态日报
**2026-10-04**

---

## 📌 今日速览

今日 Claude Code 发布了 **v2.1.289** 版本，修复了复合 shell 命令权限继承、终端卡死等关键问题。社区讨论最热烈的话题集中在 **TUI 体验优化**（#37951 内联 diff 隐藏获得 101 👍、30 条评论）和 **跨机器会话同步**（#31992，12 条评论）；同时多个高严重性 Bug 浮出水面，尤其涉及 **Windows 桌面端性能**（每秒 17 个 git 进程）和 **Opus 5.5 模型行为变化**（#98679）。

---

## 🚀 版本发布

### v2.1.289（最新版本）

| 类别 | 修复内容 |
|------|---------|
| 安全/权限 | 复合 shell 命令嵌套部分上的 deny/ask 规则不再被用户安装 mod 的批准覆盖（在托管机器上） |
| 终端渲染 | 修复了含大量未闭合 `<script>` 标签或深层 `${` 嵌套的短代码块导致终端冻结的问题 |
| Read 工具 | 修复了 Read 拒绝（denied）相关问题（变更说明被截断） |

> 完整变更见 [Release v2.1.289](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#37951](https://github.com/anthropics/claude-code/issues/37951) — 隐藏 Edit/Write 工具的内联 diff
- **标签**：`enhancement` `area:tui`
- **热度**：30 条评论、👍 **101**
- **为什么重要**：这是全榜 👍 最高的 Issue。社区希望增加 `showDiffs: false` 设置以关闭流式对话中的内联 diff（Edit/Write 修改文件时自动弹出），目前只能通过 Escape 手动关闭。

### 2. [#96931](https://github.com/anthropics/claude-code/issues/96931) — 2.1.282 输入框在 0-90 秒内停止响应按键
- **标签**：`bug` `platform:linux` `area:tui`
- **热度**：13 条评论
- **为什么重要**：每个交互会话 30 秒左右必现的"输入卡死"，Ctrl-C 无效，进程残留。属于回归 Bug，影响 Linux 平台核心交互体验。

### 3. [#31992](https://github.com/anthropics/claude-code/issues/31992) — 跨机器会话恢复（CLI-to-CLI 状态同步）
- **标签**：`enhancement` `area:cli`
- **热度**：12 条评论、👍 20
- **为什么重要**：长期高呼声的功能请求，允许在不同机器间无缝继续 Claude Code 会话，配合 Remote Control 形成完整的"分布式开发"工作流。

### 4. [#89690](https://github.com/anthropics/claude-code/issues/89690) — `opusplan` 模型行在 picker 中消失
- **标签**：`bug` `platform:macos` `area:model`
- **热度**：11 条评论
- **为什么重要**：`opusplan`（Opus Plan Mode）作为一种模式而非模型被错误分类，导致用户无法在 `/model` 中选择它。

### 5. [#98747](https://github.com/anthropics/claude-code/issues/98747) — 2.1.286 空闲压缩静默丢弃工作上下文
- **标签**：`bug` `area:core`
- **热度**：10 条评论、👍 6
- **为什么重要**：自 2.1.286 起，空闲会话会在 prompt cache 过期前自动压缩，且无 opt-out、无警告。长任务场景下会丢失关键 grounding 上下文。

### 6. [#94478](https://github.com/anthropics/claude-code/issues/94478) — Windows 桌面端每秒持续派生 ~17 个 git 进程
- **标签**：`bug` `platform:windows` `performance` `area:desktop`
- **热度**：9 条评论
- **为什么重要**：单日衍生 ~200 万个短生命周期进程，在某些 Windows 内核环境下放大成 ~6 GB/天的内存池泄漏。严重资源浪费。

### 7. [#87424](https://github.com/anthropics/claude-code/issues/87424) — 间歇性 ECONNRESET
- **标签**：`bug` `platform:macos` `area:networking`
- **热度**：8 条评论、👍 8
- **为什么重要**：桌面端和独立 CLI 都出现，无 VPN/代理介入。对网络栈稳定性产生疑问。

### 8. [#72957](https://github.com/anthropics/claude-code/issues/72957) — Write/Edit 工具静默解码 `\uXXXX` 转义
- **标签**：`bug` `platform:linux` `area:tools`
- **热度**：7 条评论
- **为什么重要**：写入文件内容时把 JSON Unicode 转义直接解码，导致无法存储字面量 `\uXXXX`（如 Unicode 标签字符）。属于数据完整性问题。

### 9. [#83841](https://github.com/anthropics/claude-code/issues/83841) — macOS 26 权限提示每次启动都重弹
- **标签**：`platform:macos`
- **热度**：7 条评论、👍 6
- **为什么重要**：Claude Desktop 每次会话启动都触发 "would like to access data from other apps"，且无法永久清除。

### 10. [#98679](https://github.com/anthropics/claude-code/issues/98679) — Claude Opus 5.5 自 2026-10-01 行为漂移
- **标签**：`bug` `area:cost` `area:model`
- **热度**：6 条评论、👍 2
- **为什么重要**：thinking tokens 翻倍、输出增加约 60%、判断力下降，且在 Claude Code 之外也可复现。属于模型层面回归，需要 Anthropic 官方确认。

---

## 🔧 重要 PR 进展（今日更新）

> 今日仅 4 个 PR 更新，悉数列出。

| PR | 状态 | 描述 |
|----|------|------|
| [#81672](https://github.com/anthropics/claude-code/pull/81672) | OPEN | **fix(hookify)**: 修复 marketplace 安装后插件目录名变化导致 `hookify` 包无法 import 的问题（修复 #69665、#81448） |
| [#99206](https://github.com/anthropics/claude-code/issues/99206) | OPEN | **diff**: dock 模式下 `/diff` 面板起始行从其 header 开始（不再多出一行空白） |
| [#99137](https://github.com/anthropics/claude-code/pull/99137) | OPEN | **sec-default**: 在 sec-default 生效时，用户插件只能收紧、不能放宽 deny/ask 规则或修改 pinned 变量 |
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | CLOSED | **docs(plugin-dev)**: 文档化 `skipLfs` 选项（marketplace github/git source），可跳过 Git LFS 下载 |

---

## 📈 功能需求趋势

通过对今日 Issue 的梳理，社区最关注的功能方向如下：

### 1. 🖥️ **桌面端深度集成**（高频）
- 跨机器会话恢复（#31992, #87190）
- Remote Control 终端附加（#87190）
- 桌面端 Projects (beta) 支持本地 Claude Code session 作为项目线程（#99156）

### 2. 🎨 **TUI / 终端体验优化**（高 👍）
- 内联 diff 隐藏设置（#37951，101 👍）
- 修复输入卡死（#96931）
- 修复终端冻结（v2.1.289）

### 3. 🤖 **模型选择与管理**
- `opusplan` 模式 picker 修复（#89690）
- Opus 5.5 行为回归（#98679）
- Subagent 模型覆盖在 statusline 中显示（#97473）

### 4. 🔐 **权限与安全策略**
- claude.ai 默认权限模式（含 "Skip all approvals"）（#98159，👍 8）
- sec-default：插件收紧规则语义（#99137）
- 生产脚本批准后被改写再次执行（#98591）

### 5. ♿ **可访问性 / 多平台稳定性**
- 屏幕阅读器与虚拟化 transcript 的兼容性（#99332）
- macOS TCC 权限、Linux eCryptfs 路径过长、Windows 桌面渲染等

---

## 🧑‍💻 开发者关注点（痛点与高频需求）

### 🔴 严重痛点
- **性能与资源**：Windows 桌面端每秒 17 次 git fork（#94478）是目前最严重的资源问题；空闲压缩默认行为丢失上下文（#98747）也是高优先级回归。
- **TUI 稳定性**：输入卡死、终端冻结、内联 diff 干扰阅读，三者叠加让重度用户的开发节奏被打断。

### 🟡 工作流阻塞
- **跨设备开发**：跨机器会话恢复与 Remote Control 终端附加呼声强烈，反映出多设备/云端工作流的真实需求。
- **审批体验**：用户希望有更细粒度的默认权限模式（#98159），并对"脚本被改写后仍按原批准执行"（#98591）的安全语义提出质疑。

### 🟢 体验优化
- **diff 与 transcript 可定制**（#37951）
- **MCP OAuth 兼容性**（#96792）：Windows 上多服务器 `.well-known` 失败
- **Subagent 模型透明度**：statusline 显示真实模型而非父会话模型（#97473）

### 📊 Token 与计费
- **Token 用量计量**疑似异常（#97449）：单日用掉 60% 周额度；这与 Opus 5.5 thinking 翻倍（#98679）形成共振，用户成本敏感度提升。

---

> 📎 完整 Issue 列表请参见 [anthropics/claude-code Issues](https://github.com/anthropics/claude-code/issues)。日报基于 2026-10-04 过去 24 小时内的更新数据生成。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report based on GitHub data for the OpenAI Codex project, dated 2026-10-04. Let me analyze the data carefully and structure the report according to the requested format.

Looking at the data:

1. **Releases**: Two alpha versions - rust-v0.162.0-alpha.11 and rust-v0.162.0-alpha.10, both released in the past 24 hours.

2. **Issues**: 50 issues total, top 30 shown by comment count. Key observations:
   - High Windows-related issues
   - VS Code extension message loss issues (#49988 with 40 comments, #50225, #50653)
   - Computer Use related issues on Windows
   - Codex Desktop issues
   - macOS specific issues
   - Code review related issues
   - Browser access issues
   - Pricing/credits issue (#50501)

3. **Pull Requests**: 22 PRs, all from `copyberry[bot]` (which is interesting - this seems to be a bot account, possibly OpenAI's own internal bot). All marked CLOSED. Topics include:
   - Vim mode slash commands
   - Windows daemon handling
   - TUI improvements
   - MCP tool handling
   - Windows Terminal Shift+Enter
   - Code Mode improvements
   - Slash command handling

Let me structure the report now:

**Key themes I see:**
- Windows OS issues dominate (sandbox, Computer Use, desktop app)
- VS Code extension message loss is a recurring pain point
- macOS specific bugs (Cocoa sandbox, browser extensions)
- Computer Use feature issues
- Codex Cloud/Web integration problems
- TUI/CLI improvements

**Most important Issues to focus on (by impact):**
1. #49458 - Computer Use tools missing in dot-started local tasks (46 comments, 20 likes)
2. #49988 - VS Code extension drops messages (40 comments, 47 likes)
3. #47041 - GPT-5.6/GPT-6 reject harmless prompts (11 comments)
4. #50428 - Windows desktop chat turn/start failures (10 comments)
5. #38986 - Auto-review Guardian duplicate tasks (8 comments)
6. #19243 - Missing Windows optional dependency (7 comments)
7. #45163 - TUI palette cache issue (7 comments, 7 likes)
8. #39783 - MCP stack leak via thread unsubscribe (7 comments)
9. #42808 - Windows startup loop (6 comments)
10. #50225 - VS Code messages lost (5 comments, 5 likes)
11. #50362 - Windows Computer Use capture timeout (5 comments)
12. #50168 - Dot cloud_threads write failures (5 comments)
13. #48579 - Windows notification sounds (4 comments)
14. #29689 - Desktop error pill issue (4 comments)
15. #50653 - VS Code submitted prompts stuck (4 comments, 4 likes)

**Most important PRs:**
1. #50788 - Vim Normal mode slash commands
2. #50786 - Remember Command Center grouping
3. #50782 - Retry Windows daemon release on transient locks
5. #50764 - Allow /archive while turn running
6. #50756 - Show unavailable slash commands in side conversations
7. #50741 - Keep environment-backed tools exposed
8. #50727 - Show model and reasoning effort in task details
9. #50720 - Decode Windows Terminal Shift+Enter
10. #50700 - Windows remote-control socket directory

Let me write the report in Chinese now. I'll keep it concise and professional.

I should note that all PRs seem to be CLOSED already and from `copyberry[bot]` - this is unusual. Let me check if this might be a synthetic/fictional scenario. The bot name suggests automated PRs. I'll just report the data as given.

Let me draft this:

---

# OpenAI Codex 社区动态日报 · 2026-10-04

## 今日速览

今日 Codex 项目核心动态聚焦于桌面端稳定性修复：Windows 平台上 Computer Use、VS Code 扩展消息丢失、Desktop 应用黑屏循环等问题持续占据社区热点；与此同时 rust 端 0.162.0 进入 alpha 双发，TUI、Windows Terminal 键位、Slash 命令语义等改进密集合入。Codex Cloud / Dot 互操作的若干写入路径也开始出现回归报告。

## 版本发布

过去 24 小时 Rust 端连续发布两个 alpha：
- **rust-v0.162.0-alpha.10**
- **rust-v0.162.0-alpha.11**

（注：摘要内容未提供，建议直接到 release 页查看变更说明。）

## 社区热点 Issues

1. **#49458 [OPEN]** — [Windows] dot-started 本地任务缺少 Computer Use 工具  
   46 评论 / 👍20。Windows ChatGPT 桌面端的 dot 启动任务无法加载 Computer Use 工具，普通本地 Codex 会话正常。属于 Dot → 本地会话工具链回归。  
   https://github.com/openai/codex/issues/49458

2. **#49988 [CLOSED]** — Codex VS Code 扩展更新后提交的消息间歇性丢失  
   40 评论 / 👍47。10 月 1 日更新后按回车常清空 composer，但消息未进入对话。多个相似报告指向扩展消息可靠性下降。  
   https://github.com/openai/codex/issues/49988

3. **#47041 [OPEN]** — [Codex Desktop] GPT-5.6 Sol / GPT-6 Astra 以 invalid_prompt 拒绝无害请求  
   11 评论 / 👍3。新一代模型对部分 prompt 抛出 invalid_prompt，疑似工具/指令解析问题。  
   https://github.com/openai/codex/issues/47041

4. **#50428 [OPEN]** — Windows Desktop：durable chat turn/start 与 thread/fork 失败  
   10 评论 / 👍1。AbsolutePathBuf 反序列化缺失 base path 直接阻断 Windows 执行环境。  
   https://github.com/openai/codex/issues/50428

5. **#45163 [OPEN]** — TUI 启动期调色板缓存导致系统主题切换后输入不可读 (0.154.0)  
   7 评论 / 👍7。仅缓存启动时刻的浅/深色判定，主题切换后样式错乱。  
   https://github.com/openai/codex/issues/45163

6. **#39783 [OPEN]** — Codex Desktop ephemeral thread 摘要泄漏完整 MCP 栈  
   7 评论 / 👍3。thread_summary 创建的临时 thread 继承并预热全局 stdio MCP 配置，潜在资源与隐私风险。  
   https://github.com/openai/codex/issues/39783

7. **#50225 [OPEN]** — VS Code 扩展：提交的消息间歇性消失且 issue 上报不可用  
   5 评论 / 👍5。扩展内置错误上报失败，问题难以归集。  
   https://github.com/openai/codex/issues/50225

8. **#50362 [OPEN]** — [Windows 10] Computer Use 窗口截图超时，可访问性读正常  
   5 评论。Computer Use 能枚举窗口与读取 UI Automation 但截图超时，1C 瘦客户与 Notepad 均复现。  
   https://github.com/openai/codex/issues/50362

9. **#50168 [OPEN]** — Dot cloud_threads：create 返回 UNKNOWN / send_message 返回 CloudThreadNotFoundError  
   5 评论。可读但不可写的 Cloud→Cloud 互操作失败。  
   https://github.com/openai/codex/issues/50168

10. **#50653 [OPEN]** — VS Code 扩展：提交的 prompt 卡住/消失/停留 pending  
    4 评论 / 👍4。与 #49988、#50225 同类问题，独立报告，进一步印证扩展消息通路存在回归。  
    https://github.com/openai/codex/issues/50653

## 重要 PR 进展

1. **#50788 [CLOSED]** — 在 Vim Normal 模式空草稿下启用 `/` 直接打开 slash 命令  
   解决 Vim Normal 模式下空 draft 输入 `/` 误触发搜索的问题。  
   https://github.com/openai/codex/pull/50788

2. **#50786 [CLOSED]** — 跨启动保留 Command Center 的分组选择  
   用户分组写入 `tui.agents_overview_grouping`，重启后恢复。  
   https://github.com/openai/codex/pull/50786

3. **#50782 [CLOSED]** — Windows daemon 发布在瞬态文件锁下重试  
   处理 Windows 上可执行文件扫描器短时占用导致的 rename 失败。  
   https://github.com/openai/codex/pull/50782

4. **#50781 [CLOSED]** — 限制 TUI MCP 启动通知仅归属自身线程  
   避免无关线程的 MCP 启动通知建立 TUI 事件通道，防止审批请求串入。  
   https://github.com/openai/codex/pull/50781

5. **#50764 [CLOSED]** — 允许运行中的 turn 期间执行 `/archive`  
   解锁运行中归档，并在确认弹窗中提示归档将停止当前 turn。  
   https://github.com/openai/codex/pull/50764

6. **#50756 [CLOSED]** — 在 side conversation 搜索时展示不可用的 slash 命令  
   不可用命令以禁用行展示并附 `not available in side conversations` 说明。  
   https://github.com/openai/codex/pull/50756

7. **#50741 [CLOSED]** — 跨 readiness 切换保持 environment-backed 工具可用  
   在环境未变的前提下稳定暴露 command/patch/image/permissions 等工具。  
   https://github.com/openai/codex/pull/50741

8. **#50727 [CLOSED]** — 任务详情顶部展示模型与推理强度  
   在 agents overview 把 reasoning effort 紧贴模型展示，缺失时显示 `Unknown`。  
   https://github.com/openai/codex/pull/50727

9. **#50720 [CLOSED]** — 解码 Windows Terminal 的 Shift+Enter 映射  
   将 `ESC[13;2u` 转回 Shift+Enter，修复 Windows Terminal 下 composer 换行。  
   https://github.com/openai/codex/pull/50720

10. **#50700 [CLOSED]** — 让传输层自行创建 Windows 远控 socket 目录  
    用受保护 DACL 替代继承临时目录 ACL，降低权限扩散。  
    https://github.com/openai/codex/pull/50700

## 功能需求趋势

- **Windows Desktop 体验**：Computer Use、sandbox 锁、通知声音、Markdown 链接重写等密集反馈，是本周期最显著的痛点集群。
- **VS Code 扩展可靠性**：消息丢失 / pending / 错误上报不可用三类问题同时存在多个独立报告，扩展消息通路疑似回归。
- **Codex Cloud / Dot 互操作**：cloud_threads 写入路径、`post-cutover` 线程 placement format v2 不兼容等问题，反映 Cloud↔Local 边界正在被打破。
- **模型端行为**：GPT-5.6 Sol / GPT-6 Astra 抛出 invalid_prompt 的报告出现，提示新模型上线需更严格的回归测试。
- **TUI / 命令面板体验**：调色板缓存、slash 命令在 side conversation、运行中 `/archive` 等细节改进，指向更成熟的会话控制 UX。
- **Code Review**：macOS Code Review 启动失败、Codex Cloud Security Review 在用户关闭自动审查后仍启动，说明自动审查配置语义需要厘清。

## 开发者关注点

- **平台差异成本高**：Windows 的 sandbox 锁、Computer Use 截图超时、AbsolutePathBuf 反序列化、远控 socket ACL 等问题横跨多个 Issue，开发者更希望平台特定行为被显式声明而非隐式继承。
- **扩展通信链路不透明**：VS Code 扩展与本地 daemon 的消息通路同时出现"提交即丢""卡 pending""上报失败"等不同症状，缺少可观测性是核心矛盾。
- **Cloud 与 Local 边界的可发现性**：post-cutover placement format 与 dot 的 cloud_threads 写入路径问题，体现开发者希望新协议格式对客户端更早可发现。
- **回归与回滚流程**：多个 Issue 跨多个版本才被注意到（#19243 自 v0.124 至今），建议引入更稳定的可选依赖清单 + 自动端到端冒烟。
- **MCP 与第三方工具治理**：MCP 栈泄漏、strict Code Mode Only 下第三方工具暴露策略变动等 PR 表明，社区对工具治理边界的关注度上升。

---

Let me review this. I think this is good. Let me check the structure once more:

1. ✅ 今日速览 - 2-3 sentences
2. ✅ 版本发布 - Two alpha releases noted
3. ✅ 社区热点 Issues - 10 issues selected
5. ✅ 重要 PR 进展 - 10 PRs selected
6. ✅ 功能需求趋势 - Several themes identified
7. ✅ 开发者关注点 - Pain points summarized

All links are included. The language is concise and professional. Let me finalize the response.

Wait, I notice the date says 2026-10-04 in the prompt but the issues have dates like 2026-09-30, 2026-10-01, etc. which is consistent with "past 24 hours" relative to 2026-10-04. The model versions are GPT-5.6 and GPT-6 which are futuristic but consistent with the scenario.

I should mention in the version section that the release notes are minimal. Also, I noticed the PRs all seem to come from `copyberry[bot]` and are all marked CLOSED - this is unusual. In a real scenario this would be OpenAI's internal automation bot. I should not comment on this oddity too much but the report should just reflect what the data shows.

Let me also note that I should not be too speculative about "why" something is happening since I only have the data. I'll stick to summarizing what's described.

Let me also double-check formatting - the user wants简洁专业 (concise and professional), so I should keep bullet points tight.

I think my draft is good. Let me finalize.</think>

# OpenAI Codex 社区动态日报 · 2026-10-04

## 今日速览

今日 Codex 项目的核心矛盾集中在 **Windows 桌面端稳定性** 与 **VS Code 扩展消息可靠性**：Computer Use 工具缺失、扩展提交消息丢失、Desktop 黑屏循环等问题持续占据社区头条；与此同时 Rust 端 0.162.0 连续发布两个 alpha，TUI / Slash 命令 / Windows Terminal 键位等改进密集合入，Codex Cloud 与 Dot 的互操作也暴露出写入路径的早期回归。

---

## 版本发布

过去 24 小时 Rust 端连续发布两个 alpha：

- **rust-v0.162.0-alpha.10**
- **rust-v0.162.0-alpha.11**

> 摘要内容未随数据给出，建议直接到 release 页查看 changelog。

---

## 社区热点 Issues

1. **#49458 [OPEN]** — [Windows] dot 启动的本地任务缺少 Computer Use 工具  
   46 评论 / 👍20。Windows ChatGPT 桌面端由 dot 启动的任务无法加载 Computer Use，普通本地 Codex 会话正常，疑为 Dot 启动链路回归。  
   https://github.com/openai/codex/issues/49458

2. **#49988 [CLOSED]** — Codex VS Code 扩展更新后提交消息间歇性丢失  
   40 评论 / 👍47。10 月 1 日更新后按回车常清空 composer，消息未进入对话；多次重发偶发成功，反映扩展→daemon 通路存在稳定性问题。  
   https://github.com/openai/codex/issues/49988

3. **#47041 [OPEN]** — [Codex Desktop] GPT-5.6 Sol / GPT-6 Astra 以 `invalid_prompt` 拒绝无害请求  
   11 评论 / 👍3。新一代模型对部分 prompt 抛 invalid_prompt，疑似工具/指令解析问题，新模型上线需更严格回归。  
   https://github.com/openai/codex/issues/47041

4. **#50428 [OPEN]** — Windows Desktop：durable chat turn/start 与 thread/fork 失败  
   10 评论 / 👍1。`AbsolutePathBuf` 反序列化缺失 base path 直接阻断 Windows 执行环境；普通明文提交与同目录 fork 均失败。  
   https://github.com/openai/codex/issues/50428

5. **#45163 [OPEN]** — TUI 启动期调色板缓存导致系统主题切换后输入不可读 (0.154.0)  
   7 评论 / 👍7。仅缓存启动时刻的浅/深色判定，主题切换后样式持续错乱。  
   https://github.com/openai/codex/issues/45163

6. **#39783 [OPEN]** — Codex Desktop ephemeral thread 摘要泄漏完整 MCP 栈  
   7 评论 / 👍3。`thread_summary` 创建的临时 thread 继承并预热全局 stdio MCP 配置，存在资源与隐私外溢风险。  
   https://github.com/openai/codex/issues/39783

7. **#50225 [OPEN]** — VS Code 扩展：消息间歇性消失，且扩展内置错误上报不可用  
   5 评论 / 👍5。开发者无法借助扩展自身上报通道提交问题，恶化可观测性。  
   https://github.com/openai/codex/issues/50225

8. **#50362 [OPEN]** — [Windows 10] Computer Use 窗口截图超时，可访问性读正常  
   5 评论。Computer Use 能枚举窗口与读取 UI Automation，但截图超时在 1C 瘦客户与 Notepad 上稳定复现，导致坐标操作也无法进行。  
   https://github.com/openai/codex/issues/50362

9. **#50168 [OPEN]** — Dot `cloud_threads`：create 返回 UNKNOWN，send_message 返回 CloudThreadNotFoundError  
   5 评论。可读但不可写的 Cloud→Cloud 互操作失败，疑为协议或状态迁移问题。  
   https://github.com/openai/codex/issues/50168

10. **#50653 [OPEN]** — VS Code 扩展：提交的 prompt 卡住 / 消失 / 停留 pending  
    4 评论 / 👍4。与 #49988、#50225 同类，独立报告进一步印证扩展消息通路回归。  
    https://github.com/openai/codex/issues/50653

---

## 重要 PR 进展

1. **#50788 [CLOSED]** — Vim Normal 模式下空草稿可直接打开 slash 命令  
   修复空 draft 输入 `/` 误触发 composer 搜索。  
   https://github.com/openai/codex/pull/50788

3. **#50786 [CLOSED]** — 跨启动保留 Command Center 分组选择  
   写入 `tui.agents_overview_grouping`，重启后恢复。  
   https://github.com/openai/codex/pull/507

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Gemini CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations from the data:
1. No new releases in the past 24 hours
2. 50 issues updated (showing top 30 by comment count)
3. 14 PRs updated

Let me categorize the issues:

**P1 Priority (Critical/High):**
- #22323 [P1] Subagent recovery after MAX_TURNS - 13 comments, 2 likes - bug where subagent reports success after hitting max turns
- #21409 [P1] Generalist agent hangs - 8 comments, 8 likes - subagent hangs indefinitely
- #21983 [P1] browser subagent fails in wayland - 4 comments, 1 like
- #22186 [P1] get-shit-done output hook causes crash - 3 comments
- #21763 [P1] Bugreport doesn't provide context of subagent - 2 comments

**P2 Priority:**
- #19873 [P2] Zero-Dependency OS Sandboxing - 9 comments, 1 like - major enhancement
- #22745 [P2] AST-aware file reads/search - 7 comments, 1 like - epic tracking
- #21968 [P2] Gemini doesn't use skills and sub-agents enough - 7 comments
- #22267 [P2] Browser Agent ignores settings.json - 4 comments
- #22232 [P2] browser_agent resilience - 4 comments
- #20079 [P2] symlink agents not recognized - 4 comments
- #24246 [P2] 400 error with >128 tools - 3 comments
- #23571 [P2] tmp scripts in random spots - 3 comments
- #22672 [P2] destructive behavior - 3 comments, 1 like
- #22466 [P2] incorrect \n escape behavior - 2 comments
- #22465 [P2] stuck at vite app prompt - 2 comments
- #21924 [P2] terminal resize flicker - 2 comments
- #23313 [P2] steering eval test - 1 comment
- #23166 [P2] Internal Project Evaluations - 1 comment

**P3 Priority (Lower but still notable):**
- #21000 [P3] task tracker using native file tools - 4 comments
- #20195 [P3] Local Subagent Sprint 1 - 3 comments
- #22746 [P3] AST aware CLI tools - 2 comments
- #22598 [P3] Subagent trajectory via /chat share - 2 comments, 1 like
- #21432 [P3] Agent self-awareness - 2 comments
- #19561 [P3] Tactful Extraction - 2 comments
- #18836 [P3] Persistent File-Based Task Tracking - 2 comments
- #18397 [P3] per workspace policy - 2 comments
- #18287 [P3] Shared Memory parallel subagents - 2 comments, 1 like
- #22747 [P3] AST aware tools search/read - 1 comment, 1 like
- #22741 [P3] local agents backgroundable - 1 comment, 2 likes

PRs (14 total):
- #29404 [CLOSED] gemini models list - feature
- #29411 [CLOSED] resume latest - bug fix
- #29407 [CLOSED] JSON serialization circular refs - bug fix
- #29517 [OPEN] truncateHistoryToBudget linearize - performance
- #29515 [OPEN] state snapshot id lookups - performance (291ms to 10ms!)
- #29516 [OPEN] cache transcript turn indexes - performance (414ms to 18ms!)
- #29512 [OPEN] chat compression linearize - performance
- #29510 [OPEN] Windows subprocess hardening - security
- #28478 [CLOSED] version bump
- #28664 [OPEN] MCP consent and stdio env
- #29590 [OPEN] functionResponse.parts - bug fix (images)
- #29622 [OPEN] tildeifyPath - bug fix
- #29621 [OPEN] subagent multimodal parts - bug fix
- #27656 [OPEN] Changelog v0.46.0-preview.1

Now let me think about feature trends:
1. **Subagent improvements** - many issues relate to subagents (delegation, hangs, recovery, browser agents)
2. **AST-aware tools** - several issues (#22745, #22746, #22747)
3. **Performance optimizations** - several PRs focused on linearizing operations
4. **Security/sandboxing** - Zero-Dependency OS Sandboxing (#19873), Windows subprocess hardening (#29510)
5. **Task tracking** - migrating from in-context to file-based (#18836, #21000)
6. **Browser agent** - multiple issues (#22267, #22232, #21983)
7. **Multimodal support** - preserving image data in subagent responses (#29621, #29590)

Let me pick 10 most notable issues:

1. #22323 [P1] - 13 comments, most discussed, critical bug about subagent status reporting
2. #21409 [P1] - 8 comments, 8 likes (high engagement), agent hanging
3. #19873 [P2] - 9 comments, major enhancement for OS sandboxing
4. #22745 [P2] - 7 comments, AST-aware tools EPIC
5. #21968 [P2] - 7 comments, skills/subagent usage issue
6. #22267 [P2] - 4 comments, browser agent settings bug
7. #24246 [P2] - 3 comments, 400 error with >128 tools
8. #23571 [P2] - 3 comments, tmp scripts clutter
9. #22672 [P2] - 3 comments, destructive behavior prevention
10. #21983 [P1] - 4 comments, browser subagent wayland failure

Or maybe I should include:
- #21763 [P1] - bugreport missing subagent context
- #22186 [P1] - crash on get-shit-done hook
- #20079 [P2] - symlink agents not recognized
- #22741 [P3] - backgroundable local agents (2 likes)

Let me finalize the 10:
1. #22323 [P1] - most comments
2. #21409 [P1] - high engagement
3. #19873 [P2] - major enhancement
4. #22745 [P2] - AST EPIC
5. #21968 [P2] - skills issue
6. #21983 [P1] - browser wayland
7. #24246 [P2] - 400 error
8. #22672 [P2] - safety
9. #22267 [P2] - browser settings
10. #22741 [P3] - backgroundable agents (community-driven, well liked)

For PRs (10 most important):
1. #29515 [OPEN] - massive perf gain (291ms to 10ms)
2. #29516 [OPEN] - massive perf gain (414ms to 18ms)
3. #29512 [OPEN] - perf improvement
4. #29517 [OPEN] - perf improvement
5. #29510 [OPEN] - security fix Windows
6. #29590 [OPEN] - multimodal image bug fix
7. #29621 [OPEN] - subagent multimodal fix
8. #29404 [CLOSED] - gemini models list feature
9. #29411 [CLOSED] - resume latest fix
10. #29407 [CLOSED] - JSON circular refs

Now let me write the report in Chinese, professional tone.</think>

# Gemini CLI 社区动态日报
**📅 2026-10-04**

---

## 📌 今日速览

今日 Gemini CLI 仓库整体进入**稳定维护与性能优化阶段**，无新版本发布。社区讨论焦点集中在 **Subagent（子代理）的可靠性** 与 **AST 感知的代码理解能力** 两大方向；与此同时，多个性能优化 PR 带来了数量级的提速（部分路径耗时下降约 **95%**），Windows 平台下的子进程安全加固也值得关注。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时内）。

---

## 🔥 社区热点 Issues（TOP 10）

### 1. [#22323 [P1] Subagent 命中 MAX_TURNS 后被错误报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)
💬 13 评论 | 👍 2 | 🐛 Bug
`codebase_investigator` 子代理在达到最大轮次限制后，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了执行被中断的事实。属于 P1 级关键缺陷，影响多仓库调查场景的可信度。

### 2. [#21409 [P1] Generalist Agent 无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409)
💬 8 评论 | 👍 8（👍 数最高） | 🐛 Bug
当 Gemini CLI 委派给通用子代理执行简单任务（如创建目录）时会无限卡住，最长需等待一小时后手动取消。社区反响强烈，明确指定子代理可绕过该问题。

### 3. [#19873 [P2] 基于 Zero-Dependency OS 沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)
💬 9 评论 | 👍 1 | ✨ Enhancement（Large）
利用 Gemini 3 模型对 POSIX 工具链的原生亲和力，提出无需依赖的 OS 级沙箱方案。是本周期内**架构性最强的提案**，涉及安全、UX、模型能力释放的多重权衡。

### 4. [#22745 [P2] AST 感知文件读取/搜索/映射的影响评估（EPIC）](https://github.com/google-gemini/gemini-cli/issues/22745)
💬 7 评论 | 👍 1 | ✨ Feature
评估引入 AST 感知工具对 token 效率与代码导航质量的提升，并衍生出 #22746、#22747 两个相关工单，标志着**AST 工具链的探索正在系统性展开**。

### 5. [#21968 [P2] Gemini 极少主动使用 skills 与 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)
💬 7 评论 | 🐛 Bug
用户反馈即使用户已配置 `gradle`、`git` 等 skills，模型也不会主动调用，仅在显式指令下使用。这直接影响**子代理生态的可用性**，是 P2 中最具讨论价值的需求之一。

### 6. [#21983 [P1] Browser Subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983)
💬 4 评论 | 👍 1 | 🐛 Bug | agent/browser
Wayland 桌面环境下 browser subagent 直接以 `GOAL` 失败，对 Linux 桌面用户影响较大，亟需平台兼容性修复。

### 7. [#24246 [P2] 工具数量 > 128 时返回 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)
💬 3 评论 | 🐛 Bug
启用工具超过一定规模时遭遇 API 400 错误，反映了**工具上下文管理与 API 配额之间的张力**，是规模化使用 Gemini CLI 的关键瓶颈。

### 8. [#22672 [P2] Agent 应主动规避破坏性操作](https://github.com/google-gemini/gemini-cli/issues/22672)
💬 3 评论 | 👍 1 | 🛡️ Safety
Agent 在 Git/DB 等场景中会使用 `git reset --force` 等危险命令，需引入**安全偏好引导机制**。

### 9. [#22267 [P2] Browser Agent 忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267)
💬 4 评论 | 🐛 Bug
全局/项目级 `settings.json` 中的 `maxTurns` 等配置对 Browser Agent 不生效，暴露了**配置系统初始化与合并逻辑的缺陷**。

### 10. [#22741 [P3] 支持本地 Agent 后台运行（Ctrl+B）](https://github.com/google-gemini/gemini-cli/issues/22741)
💬 1 评论 | 👍 2 | ✨ Feature
呼声较高的交互改进：允许用户把探索类、构建类子代理放进后台，避免阻塞主对话流。

---

## 🛠️ 重要 PR 进展（TOP 10）

### 1. [#29515 state snapshot ID 查找线性化](https://github.com/google-gemini/gemini-cli/pull/29515)
⚡ **性能** | OPEN | size/m
将消费 ID 查找改为 `Set`，本地基准测试 **291.95 ms → 10.26 ms**（提速约 28 倍）。涉及 28 个相关测试。

### 2. [#29516 cache transcript turn index](https://github.com/google-gemini/gemini-cli/pull/29516)
⚡ **性能** | OPEN | size/s
用 `Map` 缓存 turn 索引，避免每节点 `indexOf()` 调用。基准 **414.20 ms → 17.91 ms**（提速约 23 倍）。

### 3. [#29512 线性化聊天压缩历史重建](https://github.com/google-gemini/gemini-cli/pull/29512)
⚡ **性能** | OPEN | size/m
将 `unshift()` 替换为 `push()` + 反转，10,000 混合消息从 18.97 ms 降至 5.01 ms。

### 4. [#29517 truncateHistoryToBudget 线性化](https://github.com/google-gemini/gemini-cli/pull/29517)
⚡ **性能** | OPEN | size/s
优化 chat 压缩服务的数组重建路径，配合上述 PR 共同解决**大型会话下的上下文压缩性能**问题。

### 5. [#29510 Windows 子进程参数加硬化](https://github.com/google-gemini/gemini-cli/pull/29510)
🔒 **安全** | OPEN | size/m
为 `shell: true` 调用新增 `quoteCmdArg` 引号转义辅助函数，**防止 Windows 平台命令注入漏洞**，需关联 issue 跟进。

### 6. [#29590 保留 functionResponse.parts（图像透传修复）](https://github.com/google-gemini/gemini-cli/pull/29590)
🐛 **Bug 修复** | OPEN | size/s
工具返回的图像（如截图）因 `stripToolCallIdPrefixes()` 重建丢失 `functionResponse.parts` 而无法送达模型，修复后恢复多模态能力。

### 7. [#29621 子代理多模态响应保留](https://github.com/google-gemini/gemini-cli/pull/29621)
🐛 **Bug 修复** | OPEN | size/m
子代理调度器在回传工具结果时丢失图像数据，与 #29590 共同修复**多模态在子代理链路中的完整性**。

### 8. [#29404 `gemini models list` 子命令 + JSON 输出](https://github.com/google-gemini/gemini-cli/pull/29404)
✨ **Feature** | CLOSED | size/l
允许外部集成通过 `gemini models list -o json` 发现可用模型 ID，避免硬编码失效问题。

### 9. [#29411 `--resume latest` 选择最近活跃会话](https://github.com/google-gemini/gemini-cli/pull/29411)
🐛 **Bug 修复** | CLOSED | size/m
裸 `--resume` 此前按"开始时间最新"选取，导致长生命周期主会话用户误恢复到短命 spike 会话，现改为按"最近活动"判定。

### 10. [#29407 JSON 序列化共享引用保留](https://github.com/google-gemini/gemini-cli/pull/29407)
🐛 **Bug 修复** | CLOSED | size/m
用祖先路径追踪替换全局 `WeakSet`，修复 OpenTelemetry 导出中重复数组被误判为 `[Circular]` 的问题。

---

## 📈 功能需求趋势

通过对全部 50 条 Issue 的聚类分析，社区当前最关注的方向呈"三足鼎立"格局：

| 方向 | 代表 Issue | 社区信号 |
|------|-----------|---------|
| **🤖 Subagent 生态成熟化** | #22323, #21409, #21968, #22267, #22598, #21763, #22741, #18287 | 子代理是近 30 个工单的核心主题，覆盖稳定性、可观测性、后台化、协作模式 |
| **🧠 AST-aware 代码理解** | #22745, #22746, #22747, #19561 | 试图从"grep + 文件读取"演进到"语义级导航"，降低 token 消耗并提升精度 |
| **🛡️ 沙箱与安全治理** | #19873, #22672, #29510 (PR) | 涉及 OS 级沙箱、破坏性操作抑制、Windows 子进程加固的安全三位一体 |

**次级趋势：**
- **任务追踪持久化**：#18836、#21000 推动从内存 WriteToDo 迁移到基于文件的 CRUD 系统
- **浏览器代理可靠性**：#21983、#22232、#22267 显示该模块在多平台、多会话场景下问题集中
- **Agent 自认知**：#21432 要求 Agent 能准确描述自身 CLI flag 与快捷键

---

## 👨‍💻 开发者关注点

从社区反馈中可提炼出 **5 个高频痛点**：

1. **🔁 子代理不可靠**：挂起、错误状态、超时无法被透明报告（#22323、#21409）—— 阻碍 CLI 在长流程自动化中的落地。
2. **📚 子代理与 skills 主动性不足**：默认情况下模型不愿调度，导致扩展能力形同虚设（#21968）。
3. **🖼️ 多模态链路数据丢失**：图像等工具响应在子代理返回主链路时被丢弃（#29590、#29621）。
4. **⚙️ 配置体系割裂**：`settings.json` 覆盖对部分 Agent 不生效，配置优先级未统一（#22267、#20079）。
5. **🧹 工作区污染**：模型随意写临时脚本，使 commit 前清理成本高（#23571）。

**社区建议方向：**
- 引入**子代理生命周期可观测性**（状态/轨迹透出、`/chat share` 支持）。
- 提供**工具上下文预算管理**（应对

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data for the Copilot CLI repository and generate a daily report for 2026-10-04.

Key observations:
1. No new releases in the past 24 hours
2. 24 issues updated, mix of OPEN and CLOSED
3. No new PRs updated in past 24 hours
4. Several themes emerge:
   - MCP-related issues (OAuth, tool catalog changes, case-sensitive matching)
   - ACP mode limitations
   - Platform-specific issues (Windows, Linux, macOS)
   - Model-related issues (gpt-6.1-sol, gpt-5.6-sol, glm-5.2, BYOK)
   - UX issues (keyboard shortcuts, terminal rendering)

Let me select the 10 most noteworthy issues based on:
- Engagement (likes, comments)
- Recency
- Significance of the bug/feature
- Severity (blocking issues)

Top issues worth highlighting:
1. #4998 - macOS update breaks Copilot CLI - HIGH engagement (7 likes, 7 comments), critical blocker
2. #2795 - --agent with --plugin-dir bug - HIGH likes (17), closed
3. #4946 - HTTP 400 thinking error - 5 comments
4. #4012 - BYOK reasoning effort bug - 23 likes (very high!)
5. #4531 - GIT_CONFIG_VALUE breaks VS Code Git - 3 likes
6. #1287 - Can't add marketplace - 13 likes
7. #5015 - Keyboard-accessible pager mode - feature request, 3 likes
8. #5042 - HydraFusion model routing issue - serious context-loss bug
9. #5049 - Computer Use plugin unavailable in ACP mode
10. #5050 - /mcp case sensitive matching
11. #5044 - MCP tool catalog changed - regression in 1.0.87
12. #5040 - MCP OAuth Entra ID issue
13. #5014 - MCP OAuth fails with stored token

Since there are no PRs updated in the past 24 hours, I'll need to note this in the report.

Let me structure the report now in Chinese.</think>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-04**
**数据源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 一、今日速览

过去 24 小时内仓库无新版本发布，但 Issues 活跃度显著上升，共 24 条 Issue 更新。MCP 相关问题成为今日最突出的主题（涵盖 OAuth 鉴权、工具目录稳定性、命令大小写匹配等），同时 macOS 安全更新导致 CLI 不可用的 #4998 引发广泛讨论。BYOK 模型与 `glm-5.2` 的兼容性问题 #4012 已获 23 赞，成为本期最高赞议题。

---

## 二、版本发布

🚫 **过去 24 小时内无新版本发布。** 最近的相关版本仍在 1.0.87 ~ 1.0.91 之间（详见各 Issue 中提及的版本号）。

---

## 三、社区热点 Issues（按关注度排序）

### 1. 🔴 [#4998 macOS 更新后 CLI 完全不可用](https://github.com/github/copilot-cli/issues/4998)
- **状态**：OPEN ｜ 👍 7 ｜ 💬 7
- **影响**：安装最新 macOS 安全更新并重启后，所有新旧会话都无法处理 prompt；根本原因是 `.mcp-writer.binding` 中保存了过期的文件系统 device ID。
- **重要性**：阻塞性故障，影响所有 macOS 用户；用户正临时回滚版本作为 workaround。

### 2. 🟠 [#4012 BYOK：自定义模型不支持 `--reasoning-effort max`](https://github.com/github/copilot-cli/issues/4012)
- **状态**：CLOSED ｜ 👍 **23**（本期最高赞）｜ 💬 4
- **影响**：使用 `glm-5.2:cloud` 等 BYOK 模型时，即便配置正确，传递 reasoning effort 标志也会报错。
- **意义**：BYOK 是企业及高级用户最常使用的特性，此类兼容性问题严重阻碍工作流。

### 3. 🟠 [#2795 `--agent` 与 `--plugin-dir` 组合失效](https://github.com/github/copilot-cli/issues/2795)
- **状态**：CLOSED ｜ 👍 17 ｜ 💬 6
- **影响**：结合 `--agent` + `--plugin-dir` + `-p` 时，CLI 错误地从 `.copilot`/`.github` 目录而非插件目录查找 agent。
- **意义**：插件机制的核心路径问题，已正式关闭，可能随某个 patch 版本修复。

### 4. 🟡 [#1287 无法添加 marketplace `anthropics/claude-plugins-official`](https://github.com/github/copilot-cli/issues/1287)
- **状态**：CLOSED ｜ 👍 13 ｜ 💬 4
- **影响**：校验逻辑拒绝合法的 kebab-case 命名规则中的某些字符（疑似 `_` 命名约定冲突）。
- **意义**：影响跨生态（Anthropic）插件互操作，长期呼声较高。

### 5. 🟡 [#4531 VS Code 启动时空 `GIT_CONFIG_VALUE` 破坏 Git](https://github.com/github/copilot-cli/issues/4531)
- **状态**：CLOSED ｜ 👍 3 ｜ 💬 4
- **影响**：CLI 透传了空 `core.fsmonitor` 配置，`code .` 启动后 Git discovery 失败。
- **意义**：典型的环境变量污染问题，已关闭。

### 6. 🟡 [#4946 后台 Shell 完成后 HTTP 400 `content[].thinking` 错误](https://github.com/github/copilot-cli/issues/4946)
- **状态**：OPEN ｜ 👍 1 ｜ 💬 5
- **影响**：后台 shell 命令在新一轮 turn 开头发送完成通知时，runtime 触发了 thinking 块格式错误。
- **意义**：暴露 runtime 流式协议在异步事件注入时的脆弱性。

### 7. 🟡 [#5042 HydraFusion 在 400 后切换到小上下文模型导致工具集合剧变](https://github.com/github/copilot-cli/issues/5042)
- **状态**：OPEN ｜ 👍 0 ｜ 💬 1
- **影响**：同一 session 在 400 错误时切换到 `mai-code-1.1-flash`，上下文窗口无法容纳静态 prompt，且 tool set 在中途变化。
- **意义**：揭示智能路由（HydraFusion）在异常恢复路径下的语义破坏风险，需要架构层面反思。

### 8. 🟢 [#5015 键盘可访问的 pager 模式 + Vim/less 导航](https://github.com/github/copilot-cli/issues/5015)
- **状态**：OPEN ｜ 👍 3 ｜ 💬 2
- **意义**：在禁用鼠标模式下，目前只能整屏翻页，长对话/diff 难以阅读。社区呼声代表"终端原住民"开发者体验改进。

### 9. 🟢 [#5044 1.0.87 回归：MCP 工具目录变更导致调用失败](https://github.com/github/copilot-cli/issues/5044)
- **状态**：OPEN ｜ 👍 0
- **影响**：服务器尚未连接完成前 CLI 已向模型暴露工具快照；只要 `tools/list` 响应中 `_meta` 不同，便会触发 "MCP tool catalog changed" 报错。
- **意义**：典型的初始化竞争条件，影响所有使用快照缓存的 MCP server。

### 10. 🟢 [#5040 MCP OAuth 与 Entra ID 不兼容](https://github.com/github/copilot-cli/issues/5040)
- **状态**：OPEN ｜ 👍 0
- **影响**：远程 HTTP MCP server（Microsoft Entra ID 保护）授权回调使用 `127.0.0.1`，触发 `AADSTS50011`；缺少 localhost 主机覆盖配置。
- **意义**：阻碍企业用户接入 Microsoft 生态的 MCP server（如内部知识库/工具）。

### 附：其他值得关注
- [#5050 `/mcp <server>` 大小写敏感](https://github.com/github/copilot-cli/issues/5050) — 用户体验细节但容易踩坑。
- [#5049 ACP 模式下 Computer Use 插件不可用](https://github.com/github/copilot-cli/issues/5049) — ACP 集成一致性问题。
- [#5027 Linux 沙箱 DNS 在 systemd-resolved 下失效](https://github.com/github/copilot-cli/issues/5027) — Linux 容器化场景关键问题。
- [#5014 MCP OAuth 在已有有效 token 时仍报 probe HTTP 400](https://github.com/github/copilot-cli/issues/5014) — OAuth 流程的状态管理 bug。
- [#5045 `/compact` 在 `gpt-6.1-sol` 上反复失败](https://github.com/github/copilot-cli/issues/5045) — 关键命令的可用性问题。

---

## 四、重要 PR 进展

🚫 **过去 24 小时内无 PR 更新。** 建议关注最近被关闭的几个 Issue 后续是否会有关联 PR 提交（特别是 #2795、#4012、#1287 等已修复但尚未公开改动的高赞问题）。

---

## 五、功能需求趋势

通过对本期 24 条 Issue 的聚类，社区的关注重点呈现以下趋势：

| 趋势方向 | 代表 Issue | 信号 |
|---|---|---|
| **MCP 生态成熟度** | #5044, #5040, #5014, #5050, #4998 | MCP 已成核心，但 OAuth、初始化竞态、配置体验均不成熟 |
| **ACP 模式补齐** | #4880, #5047, #5049 | Agent Client Protocol 集成度不足，缺乏模型选择、审批、插件透出 |
| **BYOK / 多模型支持** | #4012, #5042, #5045 | 自定义模型与新模型（gpt-6.1-sol、gpt-5.6-sol）的兼容性是高频痛点 |
| **终端原生体验** | #5015, #5043, #3369 | Vim/键盘导航、CJK 输入复制、Herdr 等终端兼容性 |
| **智能路由可靠性** | #5042 | 跨模型路由在异常路径下存在上下文与工具集合丢失 |
| **平台一致性** | #4998, #5027, #4531 | macOS、Linux 沙箱、Windows 各自存在阻碍性问题 |

---

## 六、开发者关注点

综合高赞议题与社区评论，开发者最迫切的诉求可归纳为四类：

1. **🛡️ 稳定性优先于新特性** — macOS #4998、Linux 沙箱 #5027、ACP 启动失败 #5049 等"昨天能用今天不能用了"的回归问题持续消耗社区信任，开发者呼吁建立版本回滚/兼容性矩阵。

2. **🔌 MCP 不能再"半成品"上线** — OAuth 与企业 IdP（Entra、Atlassian）、`tools/list` 竞态、命令大小写匹配，几乎每一条 MCP Issue 都直指真实生产场景。开发者期望 MCP 至少有清晰的错误恢复路径与已存 token 的复用逻辑。

3. **🧠 模型生态扩展的代价** — 路由切换导致上下文/工具丢失（#5042）、`/compact` 反复失败（#5045）、BYOK 模型标志不识别（#4012）—— 引入新模型不能只看发布会，更要保证存量 CLI 命令在所有模型上健壮。

4. **⌨️ 终端用户体验被低估** — 键盘导航（#5015）、CJK 复制粘贴（#3369）、Herdr 复制冲突（#5043）等细节决定 CLI 是否能进入主力 IDE 的替代位。

---

**📌 建议关注的下一波动作**：#2795、#4012、#1287 等多个高赞 Issue 已 CLOSED，但未看到对应 PR 合并记录——值得跟踪其修复版本号与回归测试覆盖。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode and create a comprehensive Chinese daily report for 2026-10-04.

Key observations from the data:

1. **No new releases in past 24 hours**
2. **50 issues updated** - many closed issues, focus on MCP, OAuth, context window, TUI bugs
3. **50 PRs updated** - mostly by @JerryLiu369 (high activity contributor), bug fixes
4. **Trending themes:**
   - MCP-related bugs (connections, retries, child process leaks)
   - OAuth issues (ChatGPT, credential management)
   - Context window issues (overrides, overflow handling)
   - TUI/Desktop UX issues
   - V2 migration concerns (config paths, refactor regressions)
   - Remote MCP server connectivity issues

Let me structure the report:

**Today's Highlights:**
- High-volume bug fix activity from contributor @JerryLiu369
- Multiple MCP-related issues emerging (connection retry, process leaks, RTT timeouts)
- OpenCode V2 beta issues surfacing (compaction refactor, config paths)
- Desktop app parity improvements with TUI (tokens/sec, full session fork)

**Top Issues to highlight (10):**
1. #6152 - Session context usage (138👍, 23 comments) - most upvoted feature request
2. #25270 - Duplicate response bug (25 comments, closed)
3. #30068 - Japanese text mojibake (17 comments, closed)
4. #49050 - AI aborts on DSML tool_calls (13 comments, open)
5. #44094 - Compaction ignores config in V2 beta (12 comments, open)
6. #47646 - OAuth context limit override (8 comments, open)
7. #50206 - Malformed XML/DSML tool calls (7 comments, open)
8. #51223 - MCP Code Mode permission asks (6 comments, open)
9. #52237 - Remote MCP server retry (5 comments, open)
10. #53053 - MCP RTT timeout (3 comments, open, new today)

**Top PRs (10):**
1. #53085 - Tokens/sec in assistant footer
2. #53084 - Full session fork option
3. #52670 - Resumed compaction summary fix
4. #52671 - Bound concurrent ripgrep
5. #52673 - Auth provider metadata fix
6. #52674 - Per-project credential activation
7. #52682 - Provider policy enforcement
8. #52702 - Image-count overflow classification
9. #52731 - Opencode-go context limits
10. #53080 - OAuth context limits fix

**Feature trends:**
- Context window management/transparency
- Desktop app feature parity with TUI
- MCP reliability and lifecycle
- OAuth/multi-provider authentication
- File attachment and import
- Long-context model support

**Developer pain points:**
- MCP server connection reliability (especially remote/HTTP)
- OpenCode V2 migration issues (config paths, regression bugs)
- Desktop app UX gaps vs TUI
- Unicode/encoding issues
- Quota and rate limit handling for OpenCode Go

Let me write this up in Chinese, keeping it concise and professional.</think>

# OpenCode 社区动态日报

**日期：2026-10-04**

---

## 📌 今日速览

今日 OpenCode 社区以 **高频 Bug 修复为主线**：核心贡献者 `@JerryLiu369` 集中提交了 10 余个针对 Session、Auth、LLM、Provider 等模块的修复 PR，覆盖 MCP 协议兼容性、网关错误处理、上下文窗口等多个长期痛点。同时，**远程 MCP 连接的可靠性问题**成为新热点，过去 24 小时内新增 3 条相关 Issue，包括连接重试失效、子进程泄漏和 RTT 超时等。此外，OpenCode **V2 Beta 的回归问题**（如 compaction 模型覆盖、/etc/opencode 配置丢失）也持续引发开发者关注。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#6152](https://github.com/anomalyco/opencode/issues/6152) ⭐ 138 — Session context usage（功能需求）
类似 Claude `/context` 的会话上下文窗口使用情况展示。**社区反应最热烈的功能请求**，138 赞、23 条评论，反映开发者对透明化 token 消耗的强烈需求。

### 2. [#25270](https://github.com/anomalyco/opencode/issues/25270) — Model generates identical response twice
模型连续输出两次完全相同的回复，影响用户体验。25 条评论，4 赞，已关闭。

### 3. [#30068](https://github.com/anomalyco/opencode/issues/30068) — Japanese text mojibake on copy
从聊天输出复制日文文本时出现乱码（UTF-8 被错误解析为 Latin1）。17 条评论，反映 **多语言编码兼容性**仍是 TUI 待解决问题，已关闭。

### 4. [#49050](https://github.com/anomalyco/opencode/issues/49050) — AI aborts after writing `</｜DSML｜tool_calls>`
模型在流式输出工具调用标记时直接中断，13 条评论。该问题与 #50206 共同指向 **OpenCode Go 托管模型的 XML/DSML 解析缺陷**。

### 5. [#44094](https://github.com/anomalyco/opencode/issues/44094) — [2.0] compaction 忽略 `agents.compaction.model`
V2 Beta 中 8 月 19–21 日的 "shared model request" 重构导致手动 compaction 静默忽略配置的专用模型。**典型的 V2 重构回归**。

### 6. [#47646](https://github.com/anomalyco/opencode/issues/47646) — [2.0] OpenAI OAuth 上下文限制被错误覆盖为 400K
通过 ChatGPT OAuth 连接时，多个长上下文 OpenAI 模型的真实限制（~1.05M）被覆盖为 400K，**严重低估长上下文能力**。

### 7. [#50206](https://github.com/anomalyco/opencode/issues/50206) — Malformed XML/DSML tool-call output from Opencode Go models
OpenCode Go 托管模型频繁输出非法的 XML/DSML 内容而非标准 tool-call JSON，导致工具执行失败。

### 8. [#51223](https://github.com/anomalyco/opencode/issues/51223) — MCP Code Mode 内权限请求未在 TUI 弹出
在 Code Mode（`execute`）中调用的 MCP 工具发起的权限询问不会渲染到 TUI，导致 `execute` 无限阻塞，需用户手动 Esc 中断。

### 9. [#52237](https://github.com/anomalyco/opencode/issues/52237) — Remote MCP 服务首次失败后永不重试
macOS 睡眠/唤醒杀掉长连接后，远程 MCP 服务器在后台服务中维持 `failed` 状态，新建会话也无法恢复，必须重启服务。

### 10. [#53053](https://github.com/anomalyco/opencode/issues/53053) — Remote MCP RTT >250ms 时连接失败
`autoSelectFamilyAttemptTimeout` 过小，远程 MCP 端点 RTT 超过 ~250ms 时所有会话启动均失败。今日新增，与 #52237、#52410 共同构成 **MCP 可靠性议题集群**。

---

## 🛠 重要 PR 进展

### 1. [#53085](https://github.com/anomalyco/opencode/pull/53085) — feat(app): 在 Assistant 底部显示 tokens/second
将 TUI 的 `session.tps`（默认开启）能力移植到 Desktop 应用，让 Desktop 助手页脚可显示 token 生成速率，与 TUI 体验对齐。

### 2. [#53084](https://github.com/anomalyco/opencode/pull/53084) — feat(app): 增加 Full Session Fork 选项
为 Desktop 应用的 `/fork` 对话框增加「完整会话分叉」选项，与 TUI 行为对齐。

### 3. [#52670](https://github.com/anomalyco/opencode/pull/52670) — fix(session): 为恢复的 compaction 摘要附加 marker
修复 compaction 被取消、新 prompt 到达后恢复时 `lastUser.id` 指向错误的 bug（#52126）。

### 4. [#52671](https://github.com/anomalyco/opencode/pull/52671) — fix(core): 限制并发 ripgrep 子进程
通过 Effect 信号量将并发 ripgrep 上限设为 4，防止工具扇出失控导致 OOM（#50596）。

### 5. [#52674](https://github.com/anomalyco/opencode/pull/52674) — fix(auth): 项目级凭证激活
支持 `providers.<id>.auth` 在项目/文件夹级配置中按 ID/label 钉选当前激活凭证（#51152）。

### 6. [#52682](https://github.com/anomalyco/opencode/pull/52682) — fix(catalog): 配置热重载时强制执行 `provider.use` 策略
修复配置/插件热重载期间 `experimental.policies` 被绕过的安全/合规问题（#52333）。

### 7. [#52702](https://github.com/anomalyco/opencode/pull/52702) — fix(llm): 将图片数量超限错误归类为上下文溢出
处理网关返回的 `400 Too many images` 错误，正确触发 compaction/重试而非直接失败（#51073）。

### 8. [#52731](https://github.com/anomalyco/opencode/pull/52731) — fix(provider): opencode-go 上下文限制与 400 错误暴露
将 `opencode-go` 目录的上下文上限收紧为 148K（输入 128K），并正确透传 400 错误（#50446）。

### 9. [#53080](https://github.com/anomalyco/opencode/pull/53080) — fix(core): 保留 OpenAI OAuth 模型上下文限制
修复 #47646，移除 ChatGPT OAuth 路径下对模型上下文/输入限制的 400K/272K 强制覆盖。

### 10. [#50784](https://github.com/anomalyco/opencode/pull/50784) — fix(client): 保留后台服务启动失败信息
当后台服务启动失败时，客户端能向用户展示真实的子进程 stderr 错误，而不仅仅是 "Timed out waiting…"。

---

## 📈 功能需求趋势

通过梳理 Issues 中所有 FEATURE 标签和提议方向，社区当前最关注的能力集中在以下几类：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **上下文窗口透明化** | #6152（138👍） | ⭐⭐⭐⭐⭐ |
| **Desktop 应用功能补齐** | #31399（Skill/MCP GUI）、#38272（会话列表）、#21063（滚动） | ⭐⭐⭐⭐ |
| **文件附件与导入** | #40215（Zip 导入）、#40341（PDF/Office 作为上下文） | ⭐⭐⭐ |
| **模型选择器与变体展示** | #40346（DeepSeek-V4-Flash-0731）、#40412（推理变体） | ⭐⭐⭐ |
| **OAuth / 多 Provider 工作流** | #30955（/connect 后插件钩子）、#52408（quota 异常） | ⭐⭐⭐ |
| **远程 MCP 可靠性** | #52237、#53053、#52410 | ⭐⭐⭐⭐ |

可以看出，**OpenCode Desktop 与 TUI 的功能一致性**，以及 **对长上下文/MCP 工作流的可观测性**是当下最强烈的需求。

---

## 💡 开发者关注点

1. **远程 MCP 连接的脆弱性**
   macOS 睡眠、RTT 偏高、子进程泄漏、首次失败后无重试——远程 MCP 几乎是过去一周 Issue 数量最多的类别。开发者需要一个**统一的重连/退避策略**。

2. **V2 Beta 的回归与迁移摩擦**
   compaction 模型覆盖、OAuth 上下文覆盖、`/etc/opencode` 不被识别等问题集中在 8–9 月的重构后浮现。开发者反馈：**V2 的迁移文档与变更说明不够充分**。

3. **OpenCode Go 配额与稳定性**
   #52408 反映了付费用户遭遇的 quota 异常消耗；#50206、#49050 显示托管模型仍存在输出格式与协议兼容问题。

4. **Desktop 与 TUI 的体验鸿沟**
   TPS 显示、Skill/MCP GUI、滚动行为、fork 选项等能力在 Desktop 上持续落后，社区希望 **Desktop 不再是「功能子集」**。

5. **多语言与编码细节**
   日文复制乱码等小但高频的问题暴露出 TUI 剪贴板/编码层的兼容层仍需打磨。

6. **上下文与配额的可观测性**
   在长上下文模型普及背景下，开发者强烈希望看到**细粒度的 context usage 视图**，而不仅是当前的 token 计数。

---

*日报基于 GitHub 上 anomalyco/opencode 仓库过去 24 小时数据自动生成。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode community on 2026-10-04 and generate a comprehensive daily report in Chinese.

Key observations:
1. No releases in past 24 hours
2. 27 issues updated, 38 PRs updated
3. Many issues are being closed with corresponding PR fixes - showing active maintenance
4. Several themes emerge:
   - Herdr integration fixes (TUI rendering, spawned panes)
   - Provider/route configuration (User-Agent, headers, worker models)
   - Recovery mechanisms (auto-poke, empty-post-tool, orphaned web_search)
   - CI/build infrastructure fixes
   - Session/file management (large transcripts, .gitattributes)
   - Usage/quota tracking (Kimi, Cursor, Z.ai)
   - Computer-use screenshot bloat
   - Claude Code CLI integration

Let me organize the most important issues and PRs:

**Top Issues to highlight:**
1. #1520 - Configurable User-Agent and global HTTP header overrides (enterprise need)
2. #1529 - Mermaid/math rendering in herdr-webui panes
3. #354 - Session not saved in herdr (long-standing, June)
4. #1638 - Orphaned web_search server_tool_use → session unrecoverable (CLOSED, fixed)
5. #1654 - Remote client 200K default context window
6. #1698 - Kimi Code, Cursor, Z.ai quota in /usage
7. #1697 - turn_end hook include token usage
8. #1693 - /agents worker model global vs session
9. #1690 - Model repeating tool call with null args loops forever
10. #1680 - Computer-use screenshots 452MB transcripts

**Top PRs to highlight:**
1. #1645 - Fix orphaned Anthropic web searches
2. #1696 - Herdr spawned panes fixes
3. #1674 - Worker model transport override
4. #1657 - Re-arm auto-poke
5. #1662 - Stop empty-post-tool loop
6. #1660 - .gitattributes
7. #1676 - CI clippy 1.99 fixes
8. #1672 - Fork PRs build without SSH key
9. #1699 - Kimi/Cursor/Z.ai quota
10. #1347 - Runtime modality recovery for images
11. #1694 - Per-session /agents worker model
12. #1597 - Retry 5xx/529 OpenAI-compatible

Let me write this report.</think>

# jcode 社区动态日报 · 2026-10-04

---

## 📌 今日速览

今天 jcode 仓库呈现典型的"批量清账"节奏：**15 个 Issue 在 24 小时内被关闭**，对应 13 个 PR 同步合并，社区集中修复了 herdr 集成、provider 路由、auto-poke 回路、CI 基础设施等一系列长期挂账问题。仍开放的需求集中在**多 provider 配额可视化**、**会话级配置隔离**和**大体积会话恢复**三个方向，反映出 jcode 用户正在向"多账户、长会话、跨终端"的生产化使用场景演进。

---

## 🚀 版本发布

无新版本发布。过去 24 小时无 Release 活动。

---

## 🔥 社区热点 Issues

> 按重要性与社区关注度排序

### 1. [#1520 可配置的 User-Agent 与全局 HTTP Header](https://github.com/1jehuang/jcode/issues/1520)
**作者:** @alecuba16 | **状态:** OPEN | **评论:** 3
许多企业网关按 User-Agent 过滤/认证客户端，部分需要 tenant id 等附加 header，但 jcode 当前硬编码 UA，导致部署被拦截或请求归属错误。该 Issue 直接关系到**企业级落地**能力，是少数几个标 `triage: needs-decision` 的需求类工单之一，建议重点跟进。

### 2. [#1680 Computer-use 截图无界累积导致 452 MB 会话文件](https://github.com/1jehuang/jcode/issues/1680)
**作者:** @yjhsxdt-hub | **状态:** OPEN
实测 macOS 长会话内联了 113 张 base64 截图，单个 JSONL 会话文件膨胀到 **452 MB**（另有 452 MB `.bak`），resume 时 TUI 持续触发 `TUI_SLOW_FRAME`（50–110 ms）。**对体验和运维成本都有实质影响**，是当前最"硬"的痛点之一。

### 3. [#354 在 herdr 内运行 jcode 会话不保存](https://github.com/1jehuang/jcode/issues/354)
**作者:** @prateekjain-afk | **状态:** OPEN | **创建:** 2026-06-10
一个开了 4 个月的会话保存问题。用户在 herdr 内通过 `/session` 检查发现上下文丢失，**至今未合入修复**。该 Issue 暴露了 herdr 集成的若干基础缺陷，需要和今天的 #1695/#1696 一并观察。

### 4. [#1690 模型重复以 null 参数调用工具导致死循环](https://github.com/1jehuang/jcode/issues/1690)
**作者:** @SiavZ | **状态:** OPEN
当模型流式输出 `null` 作为工具参数时，jcode 静默 coerce 成 `{}`，工具以空参执行后模型再次发起相同调用，**没有任何上限约束**，turn 无限循环消耗 provider 配额。属于明显的稳健性漏洞。

### 5. [#1698 /usage 显示 Kimi Code、Cursor、Z.ai Coding Plan 配额](https://github.com/1jehuang/jcode/issues/1698)
**作者:** @ghoker143 | **状态:** OPEN
`/usage` 在 Kimi Code（仅显示 key 状态）、Cursor（无用量数字）、Z.ai（窗口探测失败）上降级严重。**PR #1699 已同日提交**，体现社区对"真实配额面板"的强需求。

### 6. [#1685 用量/连接限制的自动恢复会无限循环](https://github.com/1jehuang/jcode/issues/1685)
**作者:** @SiavZ | **状态:** OPEN
当 provider 报告的 reset 时间陈旧或持续报错时，jcode 按 reset 时间无限重发请求。**本地（非 remote）turn 同样受影响**。配合 #1686（OpenAI 额度提前重置无法清标记）一起看，是用量管理路径上的系统性缺陷。

### 7. [#1693 /agents worker 模型改动影响所有 jcode 实例](https://github.com/1jehuang/jcode/issues/1693)
**作者:** @SiavZ | **状态:** OPEN
`/agents` 把 worker 模型写入全局配置，**单会话改动会污染所有窗口**，且无法做 per-session 试验。PR #1694 同日提交修复，方向明确。

### 8. [#1654 远程客户端错误显示 200K 默认上下文窗口](https://github.com/1jehuang/jcode/issues/1654)
**作者:** @gdamprint-cmyk | **状态:** OPEN
远程客户端的 provider 是空壳占位，server 不上报真实窗口，导致面板把 1M 窗口误显示为 200K。涉及**remote 模式与 model catalog 的契约设计**，是一个隐蔽但高频影响体验的问题。

### 9. [#1688 OpenAI 兼容 profile 的 reasoning effort 在 TUI 不可选](https://github.com/1jehuang/jcode/issues/1688)
**作者:** @SiavZ | **状态:** OPEN
`supports_reasoning_effort=true` 的命名 profile 在 TUI 状态栏和 `/model` 路由选择器回退到 name-based 推断，导致 effort 等级无法被用户选择。**功能可用但 UI 不可见**这一类问题往往最容易被忽视。

### 10. [#1697 turn_end hook 需要包含本轮 token 用量](https://github.com/1jehuang/jcode/issues/1697)
**作者:** @hoangdq08 | **状态:** OPEN
作者在把 jcode 接入 AgentPet（"吃 token"的桌面宠物），但 `turn_end` 不上报 token 用量，只能事后解析 session JSONL。反映了**第三方集成对结构化用量数据的强烈需求**。

---

## 🛠 重要 PR 进展

### 1. [#1645 修复孤儿 Anthropic native web_search 块](https://github.com/1jehuang/jcode/pull/1645) ✅ CLOSED
关闭 #1638。修复了持久化的 `server_tool_use` 无对应 `web_search_tool_result` 的问题——此前会导致 Anthropic 永久 400、session 不可恢复。**精确区分"完成历史的孤儿"与"合法的 pause_turn 末尾块"**，避免误删。

### 2. [#1696 herdr：退出时关闭生成的 pane，老版本保 state 报告](https://github.com/1jehuang/jcode/pull/1696) ✅ CLOSED
关闭 #1695。两条独立修复：jcode 在 herdr pane 内启动的子 pane 退出时未关闭（herdr < 0.9.2 还存在 state report 停止）。零新增依赖/API。

### 3. [#1674 provider：worker 显式模型 transport 覆盖父会话路由](https://github.com/1jehuang/jcode/pull/1674) ✅ CLOSED
关闭 #1673。`openai-api:gpt-5.5` / `claude-oauth:claude-opus-4-6` 这类带 provider 前缀的 worker 模型不再被父会话的 saved route 劫持，**swarm 真正能用独立 transport**。

### 4. [#1657 completion-gate 熔断后 auto-poke 重新武装](https://github.com/1jehuang/jcode/pull/1657) ✅ CLOSED
关闭 #1656。修复 `auto_poke_incomplete_todos` 在熔断分支被清空后永远不会重置的逻辑死锁——只有 `incomplete.is_empty()` 分支才恢复标记，而熔断恰恰发生在该分支不成立的时刻。**修复一个"自我满足的回路"**。

### 5. [#1662 阻止 empty-post-tool 延续保留自己的触发条件](https://github.com/1jehuang/jcode/pull/1662) ✅ CLOSED
关闭 #1661。`maybe_continue_empty_post_tool_response` 注入的 User-role `<system-reminder>` 被同函数判定的 `messages_end_with_tool_result` 视为"有 tool result 在路上"，于是自己满足自己的触发条件，反复消耗 API 调用。**经典的"自指式 false positive"**。

### 6. [#1660 新增 .gitattributes 终结 core.autocrlf 漂移](https://github.com/1jehuang/jcode/pull/1660) ✅ CLOSED
关闭 #1659。一行 `* text=auto`，根治 Windows 贡献者因 `core.autocrlf=true` 把仓库改写为 CRLF 的问题。**最小、最稳的修复**。

### 7. [#1676 修复 CI：clippy 1.99 与 macOS 告警预算](https://github.com/1jehuang/jcode/pull/1676) ✅ CLOSED
关闭 #1675。async-trait 0.1.89 → 0.1.92 消除 `clippy::double_must_use` 对 `Provider`/`Tool` trait 的误报，同时清理 macOS 告警预算。**一次性解锁所有 open PR 的 CI**。

### 8. [#1672 让 fork PR 也能跑 CI（去掉 SSH deploy key 步骤）](https://github.com/1jehuang/jcode/pull/1672) ✅ CLOSED
关闭 #1671。GitHub 不向 fork 工作流暴露 `secrets.DEPLOY_KEY`，删除 `webfactory/ssh-agent` 步骤与三个 job 的 `ssh-key` 输入。**显著降低外部贡献者门槛**。

### 9. [#1699 /usage 显示 Kimi / Cursor / Z.ai Coding Plan 配额](https://github.com/1jehuang/jcode/pull/1699) 🟢 OPEN
关闭 #1698。Kimi Code 调用 `api.kimi.com/coding/v1/usages` 拉取 5h/周/月三条 quota 曲线，并兼容 backend 三种 response schema；Cursor 与 Z.ai 类似。**对齐了"真配额面板"的承诺**。

### 10. [#1347 运行时模态恢复：阻止图片块在纯文本模型上永久毒化 session](https://github.com/1jehuang/jcode/pull/1347) 🟢 OPEN
关闭 #1302。三层协调：模型侧 stripping、tool 结果侧回退、prompt-level 注入 `<system-reminder>`。**解决了"乐观 OpenAI 兼容 endpoint 在严格模型上一击致命"的根本问题**，长期挂账终于走到合并前夜。

---

## 📈 功能需求趋势

按过去 24h Issue 聚类，社区关注度从高到低：

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **多 provider 配额可视化** | #1698, #1686, #1685 | `/usage` 从"功能性"升级到"真实性"，涉及 Kimi/Cursor/Z.ai/OpenAI 等多 provider 的 schema 对齐 |
| **herdr / TUI 集成稳定化** | #354, #1529, #1631, #1695, #1673 | herdr pane 内的渲染、会话保存、状态报告仍在持续修缮，是当前最密集的工单簇 |
| **会话级 vs 全局配置隔离** | #1693, #1654 | `/agents` 模型、远程客户端的 context window 都在暴露"全局污染 / 隐式默认"问题 |
| **稳健性回路修复** | #1690, #1685, #1656, #1661 | auto-poke、空工具结果续推、5xx 重发等"自我满足"或"无上限重试"成为新一轮焦点 |
| **企业 / 代理部署支持** | #1520 | User-Agent 与 header 可配置是企业上云的硬需求 |
| **会话存储体积治理** | #1680 | 截图 base64 内联引发 452 MB 文件，关系到长会话可持续性 |
| **第三方集成 hook** | #1697 | `turn_end` 缺 token 用量，限制外部工具构建闭环 |

---

## 💡 开发者关注点

从 Issue 摘要与修复风格提炼，开发者社区目前最强烈的几个反馈：

1. **"我能复现、能修、能给最小修复"成为主流贡献范式**。今日合并的 PR 中 #1660（`.gitattributes`）、#1678（test 断言范围收窄）、#1677（macOS socket 阻塞）都是"小而准"的工程修复，反映社区维护意识成熟。

2. **回路类 bug（loop / breaker / self-trigger）是当前最棘手的隐性问题**。#1656 / #1661 / #1685 / #1690 都涉及某种"恢复机制反而把自己困住"的结构性缺陷，单纯加日志或边界检查不够，需要重写状态机。

3. **provider 生态多元化超出 schema 设计预期**。Kimi/Cursor/Z.ai/Cerebras/Kilocode/Openference 等一批新兴 Coding Plan 各自有不兼容的 quota 协议，社区正在以 PR 形式一个一个对接，**缺乏统一的抽象层**是长期隐患。

4. **CI 友好度直接决定外部贡献率**。#1671/#1672/#1675/#1676 一日内四连发，集中修复 fork PR 跑不起来、clippy 升级红、warning budget 红——**仓库正在从"内部可用"转向"开放协作"**。

5. **macOS / BSD 特定行为持续制造 CI 摩擦**。#970（OSC 11 leak）、#1668（O_NONBLOCK 继承）、#1680（截图体积）三者均与 macOS 终端/文件系统行为相关，建议后续在测试矩阵中提升 macOS runner 的覆盖权重。

---

*日报基于 github.com/1jehuang/jcode 在 2026-10-04 当日数据自动生成。*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily report for the pi community (GitHub: earendil-works/pi) for 2026-10-04. Let me analyze the data and create a structured Chinese daily report.

Let me carefully review the data:

**Releases:**
- v1.0.2: Added `samplingParamsByThinkingLevel` in `models.json` for OpenAI-compatible APIs
- v1.0.1: Added Nix flake support

**Top Issues by comment count (30 shown, pick top 10):**
1. #2870 - XDG Base Directory bug, 24 comments, 62 likes [CLOSED]
2. #7730 - High CPU usage on Mac OS, 17 comments, 10 likes [OPEN]
3. #9255 - TuiMainScreen full-screen redraw storm, 9 comments [OPEN]
4. #10314 - Reconsider Home/End defaults in fullscreen mode, 7 comments [OPEN]
5. #9335 - openai-responses cache-preserving reasoning changes, 5 comments [CLOSED]
6. #10267 - Prompt text in before_agent_start dropped, 5 comments [OPEN]
7. #9262 - find tool: glob patterns with Windows separators, 5 comments [OPEN]
8. #10287 - getContextUsage() massively overestimates, 4 comments [OPEN]
9. #9807 - perf(tui): full re-render causes lag, 4 comments [OPEN]
10. #10251 - codemode only mode: read image contents, 4 comments [OPEN]
11. #10139 - Unvalidated toolCall.name poisoning [CLOSED]
12. #10427 - /mcp menu disappeared in 1.0.1 [CLOSED]
13. #7930 - OSC 8 hyperlinks not clickable [CLOSED]
14. #7820 - openai-codex: no retryProviderRequest wrapper [CLOSED]
15. #10247 - Support mcp over unix socket [OPEN]
16. #10417 - extractSegments drops trailing SGR terminators [CLOSED]
17. #10439 - codemode fails after pnpm global update [OPEN]
18. #6566 - PI_OFFLINE prevents pi update [CLOSED]
19. #10436 - Virtual model footer thinking level issue [CLOSED]
20. #10392 - Managed installs accumulate old release dirs [CLOSED]
21. #10423 - formatProviderError bypasses error-body cap [CLOSED]
22. #10419 - Avoid filesystem lookups for builtin extension IDs [CLOSED]
23. #10422 - Responses response.failed drops terminal usage [CLOSED]
24. #10421 - HTML export can overwrite source session journal [CLOSED]
25. #10418 - find: relative path globs depend on directory [CLOSED]
26. #4568 - TUI rendering breaks after resize [CLOSED]
27. #10416 - Support Stateless MCP (2026-07-28) [CLOSED]
28. #9709 - Escape during active run can exit with uncaughtException [CLOSED]
29. #10265 - Multiple pi sessions prevent OpenAI OAuth login [CLOSED]
30. #10445 - openai-completions cacheControlFormat auto-detect [CLOSED]

**PRs (13 total, pick top 10):**
1. #10448 - pr for sync [CLOSED]
2. #10443 - fix: route stdin dead-terminal errors [CLOSED]
3. #9776 - Per thinking sampling parameters [CLOSED]
4. #10440 - resolve QuickJS wasm path once per process [OPEN]
5. #10261 - add prompt template documentation eval [OPEN]
6. #10437 - report settings save failures in interactive mode [OPEN]
7. #10383 - perf: diff raw lines [CLOSED]
8. #10433 - let apps name themselves in OpenAI logins [OPEN]
9. #10429 - let caller headers override Codex originator [OPEN]
10. #10410 - expose durable thinking, websocket, session options [OPEN]
11. #8734 - support top-level instructions for OpenAI Responses [OPEN]
12. #10402 - bind Ctrl+H to delete backward on macOS [CLOSED]
13. #10397 - dedupe tool call ids [CLOSED]

Now I'll generate the report. The date is 2026-10-04.

Let me think about the trends:
- Performance issues: TUI redraw storm (#9255), full re-render lag (#9807), high CPU on Mac (#7730)
- Tool/extension issues: find tool glob patterns (#9262, #10418), MCP support (#10247, #10416), builtin:mcp path handling (#10419)
- Configuration: XDG Base Directory (#2870), settings save failures (#10437), PI_OFFLINE (#6566)
- Models/Providers: sampling by thinking level (#9776), openai-responses changes (#9335, #8734), cache control auto-detect (#10445), Responses errors (#10422)
- codemode: QuickJS wasm path (#10439, #10440), image contents in codemode (#10251)
- OpenAI OAuth: multiple sessions (#10265), app naming (#10433, #10429)
- Session management: HTML export overwriting journal (#10421), getContextUsage overestimating (#10287), before_agent_start dropping (#10267)

Top themes:
1. **TUI 性能优化** - several issues about rendering, scrolling, CPU usage
2. **MCP 生态扩展** - Unix socket, latest MCP spec, /mcp menu regression
3. **Provider/Model 支持** - sampling by thinking level, OpenAI Responses improvements, OpenRouter cost
4. **配置和文件管理** - XDG dirs, settings save, install cleanup
5. **codemode 稳定性** - QuickJS wasm, image support
6. **OAuth 和登录** - multiple sessions, app naming

Let me write the report now.</think>

# Pi 社区动态日报 · 2026-10-04

> 数据来源：github.com/earendil-works/pi（过去 24 小时更新）

---

## 一、今日速览

**v1.0.2 正式发布**，带来按思考级别配置采样参数（`samplingParamsByThinkingLevel`）的能力；社区同时出现一波 TUI 性能回归报告与 MCP 生态扩展请求（Unix socket、最新 MCP 规范），OpenAI 登录流程和 Codex 身份标识也被密集讨论。整体来看，1.0 版本已落地，社区重心正快速转向「性能/稳定性打磨」与「provider 兼容性」两条线。

---

## 二、版本发布

### 🚀 v1.0.2

- **按思考级别配置采样参数**：在 `models.json` 中新增 `samplingParamsByThinkingLevel`，可为不同的思考级别（thinking level）设置独立的 `temperature`、`top_p` 等采样参数，作用于 OpenAI 兼容 API。详见文档 [Configure sampling by thinking level](https://github.com/earendil-works/pi/blob/v1.0.2/...)。
- 同步合入了 #9776 的核心实现及 #9505 的修复（cherry-pick）。

### 🚀 v1.0.1

- **Nix flake 安装**：新增官方 Nix flake 支持——
  - `nix run github:earendil-works/pi/stable` 启动最新版本
  - `nix profile add github:earendil-works/pi/stable` 安装到 profile
- 详见 [Install pi](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi)。

> ⚠️ 注意：v1.0.1 引入了 `/mcp` 命令菜单消失的回归（[#10427](https://github.com/earendil-works/pi/issues/10427)），如需使用 `/mcp` 菜单请留意版本。

---

## 三、社区热点 Issues

> 选取标准：评论数 × 点赞数 × 技术影响力

| # | Issue | 状态 | 关注度 | 为什么重要 |
|---|------|------|--------|----------|
| 1 | [#2870 Follow XDG Base Directory](https://github.com/earendil-works/pi/issues/2870) | CLOSED | 24💬 62👍 | **历史最高赞 Issue**，呼吁遵循 Linux XDG 规范（`$XDG_CONFIG_HOME` 等）存放配置/状态，避免污染 `~`。长期争论后正式关闭，意味着规范已落地。 |
| 2 | [#7730 High CPU usage on Mac OS with long session](https://github.com/earendil-works/pi/issues/7730) | OPEN | 17💬 10👍 | 长会话下 CPU 飙至 100%+，内存 600–800MB，疑似与 context 体积相关；是 1.0 大版本前就未根治的顽疾，影响 Mac 用户日常使用。 |
| 3 | [#9255 TuiMainScreen full-screen redraw storm](https://github.com/earendil-works/pi/issues/9255) | OPEN | 9💬 | 长 transcript 下 `doRender()` 每帧都走 `fullRender(true)` 路径，导致「跳帧 / 文本翻倍」；与 [#9807](https://github.com/earendil-works/pi/issues/9807) 同源，是当前 TUI 性能优化的核心战场。 |
| 4 | [#10314 Reconsider Home/End defaults in fullscreen mode](https://github.com/earendil-works/pi/issues/10314) | OPEN | 7💬 5👍 | fullscreen TUI 模式下 Home/End 改为滚动到顶/底，与历史习惯冲突；用户参与意愿高，反映「1.0 改键位」带来的体验争议。 |
| 5 | [#9335 openai-responses: support configuration_update for cache-preserving reasoning](https://github.com/earendil-works/pi/issues/9335) | CLOSED | 5💬 7👍 | GPT-6 推理强度切换而不破坏 prompt cache 的官方推荐方式——是 cache 经济性问题上的关键优化。 |
| 6 | [#10267 Prompt in before_agent_start dropped on runs without user prompt](https://github.com/earendil-works/pi/issues/10267) | OPEN | 5💬 | 扩展在 `before_agent_start` 注入的 system prompt 在后台/重试/resume 路径被丢弃，造成重复计费；影响所有扩展作者。 |
| 7 | [#9262 find tool: Windows separator globs silently return no results](https://github.com/earendil-works/pi/issues/9262) | OPEN | 5💬 | `find src\**\*.ts` 在 Windows 下静默返回空——agent 极易误判文件不存在。是工具鲁棒性的典型代表。 |
| 8 | [#10287 getContextUsage() overestimates context after retryable network error](https://github.com/earendil-works/pi/issues/10287) | OPEN | 4💬 | 单次网络错误后 token 计数从 42k 跳到 330,081——token 计量失真会直接影响续期/截断策略。 |
| 9 | [#9807 perf(tui): full re-render causes lag in 800+ messages sessions](https://github.com/earendil-works/pi/issues/9807) | OPEN | 4💬 | 与 OpenTUI 的 cell-level diff 对比，明确指出 Pi 当前每次交互全量重绘 scrollback 的架构瓶颈；社区贡献 [#10383](https://github.com/earendil-works/pi/pull/10383) 已尝试优化。 |
| 10 | [#10251 codemode only mode: read cannot expose image contents](https://github.com/earendil-works/pi/issues/10251) | OPEN | 4💬 | `codemode.mode: "only"` 下 `tools.read()` 对图片只返回占位符，文档承诺与实际行为不一致。 |

> **其他高频同类话题**：[#10427 /mcp 菜单消失](https://github.com/earendil-works/pi/issues/10427)、[#10439 codemode 全局更新后失效](https://github.com/earendil-works/pi/issues/10439)、[#10445 OpenRouter 静默 10x 成本](https://github.com/earendil-works/pi/issues/10445)、[#10392 managed install 不清理旧版本](https://github.com/earendil-works/pi/issues/10392) 等也值得跟踪。

---

## 四、重要 PR 进展

| # | PR | 状态 | 内容要点 |
|---|----|------|----------|
| 1 | [#9776 Per thinking sampling parameters](https://github.com/earendil-works/pi/pull/9776) | CLOSED | 实现 `samplingParamsByThinkingLevel`，对不同思考级别使用独立采样参数；合入了 v1.0.2 发布。 |
| 2 | [#10443 route stdin dead-terminal errors to emergencyTerminalExit](https://github.com/earendil-works/pi/pull/10443) | CLOSED | 修复「终端消失时 `read EIO` 触发 `uncaughtException` 直接退出」的严重缺陷，覆盖 ssh/tmux/睡眠唤醒等场景。 |
| 3 | [#10440 resolve the QuickJS wasm path once per process](https://github.com/earendil-works/pi/pull/10440) | OPEN | 修复 [#10439](https://github.com/earendil-works/pi/issues/10439)：pnpm 全局更新后 codemode 失效；把 wasm 路径解析从「每次调用」改为「每进程一次」。 |
| 4 | [#10437 report settings save failures in interactive mode](https://github.com/earendil-works/pi/pull/10437) | OPEN | 修复 [#10168](https://github.com/earendil-works/pi/issues/10168)：只读 `settings.json`（EROFS/EACCES）下，交互模式不再静默吞掉写入失败。 |
| 5 | [#10433 let apps name themselves in OpenAI logins](https://github.com/earendil-works/pi/pull/10433) | OPEN | 允许基于 pi-ai 的 app 在「Sign in with ChatGPT」流程中自定义名称，避免都被识别为「Pi」。 |
| 6 | [#10429 let caller headers override Codex originator and User-Agent](https://github.com/earendil-works/pi/pull/10429) | OPEN | 与 #10433 配套：让上层应用可覆写 Codex 的 originator / UA，避免下游 app 互相混淆。 |
| 7 | [#10410 expose durable thinking, websocket, and session options](https://github.com/earendil-works/pi/pull/10410) | OPEN | 把 `thinkingBudgets`、`websocketConnectTimeoutMs`、`sessionId` 暴露到 durable 的 `ConversationStreamOptions`，补齐旧 SDK 已有能力的回归。 |
| 8 | [#8734 support top-level instructions for OpenAI Responses](https://github.com/earendil-works/pi/pull/8734) | OPEN | 关闭 [#8388](https://github.com/earendil-works/pi/issues/8388)：为 `openai-responses` 增加 `systemPromptFormat` 选项，动态 system prompt 可放至顶层 `instructions` 而不重复。 |
| 9 | [#10383 perf(tui): diff raw lines so unchanged lines keep pointer equality](https://github.com/earendil-works/pi/pull/10383) | CLOSED | 围绕 #9255/#9807 的 TUI 渲染性能实验；作者已通过 fullscreen mod 自行绕过问题，并致歉。 |
| 10 | [#10397 dedupe tool call ids when a server reuses the same pair](https://github.com/earendil-works/pi/pull/10397) | CLOSED | 修复部分 OpenAI 兼容 provider 用相同 `(call_id, id)` 重发 `function_call` 时，assistant 消息出现重复 tool-call 块的 bug。 |

> **值得关注的 OPEN PR**：[#10261 prompt template documentation eval](https://github.com/earendil-works/pi/pull/10261)（项目级与用户级 `/current-time` 模板的 live doc eval）。[#10402 Ctrl+H 当 Backspace on macOS](https://github.com/earendil-works/pi/pull/10402) 已合并——首贡献者友好。

---

## 五、功能需求趋势

按 Issue/PR 的主题聚类，提炼出当前社区最关心的方向：

### 1. 🖥️ **TUI 性能与渲染架构**（最热）
   - 全量重绘 → 增量 diff（#9255、#9807、#10383）
   - 长会话 CPU/内存压力（#7730）
   - 终端尺寸变化后的渲染状态恢复（#4568）
   - fullscreen mode 下的交互约定（#10314、#7930、#10417）

### 2. 🔌 **MCP 生态扩展**
   - Unix socket 传输（[#10247](https://github.com/earendil-works/pi/issues/10247)）
   - 双 era 支持 MCP 2026-07-28（[#10416](https://github.com/earendil-works/pi/issues/10416)）
   - `/mcp` 命令菜单在 1.0.1 回归（#10427）
   - builtin extension 路径解析优化（#10419）

### 3. 🧠 **Provider / 模型能力**
   - 按思考级别采样（v1.0.2、#9776）
   - OpenAI Responses `instructions` 与 cache-aware reasoning（#8734、#9335）
   - OpenRouter Anthropic alias 的 cache_control 自动检测（#10445）
   - Codex 流式重试缺失（#7820）、Responses 失败 usage 丢失（#10422）
   - Virtual model 与 thinking level 语义对齐（#10436）

### 4. ⚙️ **配置 / 安装 / 文件布局**
   - XDG Base Directory 合规（#2870 已落地）
   - managed install 自动清理旧版本（#10392）
   - settings 写入失败可见化（#10437）
   - HTML 导出误覆盖源 journal（#10421）

### 5. 🧩 **codemode 鲁棒性**
   - QuickJS wasm 路径解析与全局更新共存（#10439、#10440）
   - codemode `only` 模式下 image 传递（#10251）

### 6. 🔐 **OAuth / 登录体验**
   - 多 session 下 OpenAI 登录端口冲突（#10265）
   - 自定义 Codex app 名称与 UA（#10429、#10433）

---

## 六、开发者关注点（高频痛点）

1. **「行为与文档不一致」是最普遍的不爽点**：codemode 只读模式的

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI CLI 工具社区动态日报 2026-09-28

> 生成时间: 2026-09-28 04:45 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily community dynamics of various AI CLI tools. Let me analyze the data carefully and produce a professional, data-driven report in Chinese.

Let me first summarize the data I have:

1. **Claude Code** (Anthropic)
   - 0 new Releases
   - 50 Issues updated, 1 PR updated
   - Key themes: 会话状态异常 (event loop卡死), Windows桌面端稳定性 (白屏), 计费/配额争议, MCP协议兼容性

2. **OpenAI Codex**
   - 7 alpha releases (rust-v0.159.0-alpha series)
   - 50 Issues, 33 PRs
   - Key themes: Windows终端闪烁, Linux Desktop 26.924回归, MCP优化, Guardian审查

3. **Gemini CLI** (Google)
   - 1 nightly release (v0.63.0-nightly.20260928)
   - 50 Issues, 20+ PRs
   - Key themes: Subagent体系, Auto Memory系统, AST感知, 零依赖沙箱, 配额错误处理

4. **GitHub Copilot CLI**
   - 0 new Releases
   - 50 Issues, 1 PR (low quality)
   - Key themes: 权限管控, 模型切换BYOK, 认证稳定性, 桌面端

5. **Kimi Code CLI**
   - 无活动

6. **OpenCode**
   - 1 release (v1.18.33)
   - 50+ Issues, 10 PRs
   - Key themes: V2稳定性, 会话可靠性, Provider生态, TUI/移动端

7. **jcode**
   - 1 release (v0.89.0)
   - 13 Issues, 19 PRs
   - Key themes: 测试基础设施, Provider接入, 跨平台兼容, TUI渲染

8. **pi**
   - 0 new Releases
   - 26 Issues, 5 PRs
   - Key themes: 性能/启动时间, 扩展API, Compaction健壮性, Codemode/MCP, Anthropic Provider适配

Now let me structure the comparative analysis:

1. **生态全景** - Overall ecosystem summary
2. **各工具活跃度对比** - Activity comparison table
3. **共同关注的功能方向** - Common functional directions
4. **差异化定位分析** - Differentiation analysis
5. **社区热度与成熟度** - Community heat and maturity
6. **值得关注的趋势信号** - Trend signals

Let me write a thorough, professional, data-backed report.

For activity data, I need to use the information from each tool:

| Tool | Issues | PRs | Releases |
|---|---|---|---|
| Claude Code | 50 (top 30 shown) | 1 | 0 |
| OpenAI Codex | 50 (top 30 shown) | 33 | 7 alpha |
| Gemini CLI | 50 (top 30 shown) | 20+ | 1 nightly |
| GitHub Copilot CLI | 50 (top 30 shown) | 1 | 0 |
| Kimi Code CLI | 0 | 0 | 0 |
| OpenCode | 50+ | 10 (selected) | 1 |
| jcode | 13 | 19 | 1 |
| pi | 26 | 5 | 0 |

Common themes to identify:
1. **MCP (Model Context Protocol) 兼容性与扩展性** - Claude Code, OpenAI Codex, Gemini CLI
2. **Windows平台稳定性** - Claude Code, OpenAI Codex, jcode, GitHub Copilot CLI
3. **会话/上下文管理（Compaction/恢复/分支）** - Claude Code, OpenCode, pi
4. **Provider/模型切换与BYOK** - Claude Code, GitHub Copilot CLI, OpenCode, pi
5. **权限与安全沙箱** - Claude Code, Gemini CLI, GitHub Copilot CLI
6. **TUI/UI打磨** - 几乎所有工具
7. **计费/配额透明度** - Claude Code (用量异常)
8. **扩展API完善** - pi, jcode, GitHub Copilot CLI
9. **测试基础设施** - jcode (重头)
10. **IDE/桌面端集成** - Claude Code, GitHub Copilot CLI, OpenCode

Differentiating positioning:
- **Claude Code**: Anthropic官方，注重企业安全与MCP生态
- **OpenAI Codex**: OpenAI官方，Rust重写，密集迭代，平台兼容性挑战
- **Gemini CLI**: Google官方，Subagent体系，Auto Memory为亮点
- **GitHub Copilot CLI**: GitHub生态绑定，BYOK/本地模型支持
- **OpenCode**: 独立开源，V2迁移期，移动端/LSP深度
- **jcode**: 个人项目，测试质量重投入，跨平台细节
- **pi**: 性能极致（启动时间），Codemode探索
- **Kimi Code CLI**: 当前无活动

Trend signals:
1. **MCP 已成为事实标准** - 多工具主动适配
2. **平台兼容性挑战突显** - Windows尤其突出
3. **可靠性盲区暴露** - "看似成功但实际失败"问题
4. **Subagent/Codemode并行探索** - 两条agent执行路径
5. **企业级可观测性/审计需求** - sec-default PR等
6. **本地LLM兼容加深** - llama.cpp, BYOK provider等
7. **测试基础设施投入加大** - jcode为代表
8. **配置一致性/文档一致性** - 多个工具都出现

Let me now write the full report.</think>

# AI CLI 工具生态横向对比分析报告
**报告日期：2026-09-28** | 数据窗口：过去 24 小时 GitHub 公开动态

---

## 一、生态全景

当前 AI CLI 工具生态呈现"**头部厂商密集迭代 + 独立项目差异化突围**"的双轨格局：以 Claude Code、OpenAI Codex、Gemini CLI 为代表的厂商系工具已进入**周级高频发版**阶段（OpenAI Codex 单日 7 个 alpha），重点围绕 **MCP 协议兼容、Windows 平台稳定性、子代理体系**三条主线展开；而 OpenCode、jcode、pi 等独立/社区驱动项目则选择**垂直纵深**（如 V2 重构、测试基础设施、Codemode 探索）建立差异化壁垒。整体上，"**可靠性盲区**"——即会话假死、重试死循环、配额/计费不透明、配置持久化缺失等"看似成功但实际失败"的问题——已成为跨工具共同的最大痛点，反映行业从"功能堆叠"进入"工程质量"的新阶段。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 新 Release | 社区关注焦点 | 维护节奏判断 |
|------|------------|--------|-----------|------------|------------|
| **OpenAI Codex** | 50 | **33** | **7 alpha**（rust-v0.159.0-α.8~12 + 0.158.0-α.15.3/4） | Windows 终端闪烁、Daemon 化回归、MCP | 🔥 极度活跃，预示 0.159 稳定版临近 |
| **Gemini CLI** | 50 | ~20 | 1 nightly（v0.63.0-nightly.20260928） | Subagent 稳定化、Auto Memory、Quota | 🔥 活跃，nightly 持续推进 |
| **OpenCode** | 50+ | 10 | 1（v1.18.33） | V2 迁移回归、会话可靠性、Provider 兼容 | 🟧 活跃，V2 重构期阵痛明显 |
| **Claude Code** | 50 | 1 | 0 | 事件循环假死、Windows 白屏、配额透明 | 🟧 中等，Issue 多但 PR 流入少 |
| **jcode** | 13 | **19** | 1（v0.89.0） | 测试隔离、Provider 接入、跨平台字符 | 🟧 中等，PR 流入远高于 Issue（质量优先） |
| **GitHub Copilot CLI** | 50 | 1（低质） | 0 | 权限精细化、BYOK、桌面端稳定性 | 🟨 偏静默，Issue 多 PR 流入不足 |
| **pi** | 26 | 5 | 0 | 启动性能、扩展 API、Anthropic 适配 | 🟨 偏静默，Issue 高效关闭但 PR 流入少 |
| **Kimi Code CLI** | 0 | 0 | 0 | 无 | ⚪ 沉睡期 |

> **关键观察**：OpenAI Codex 的 PR/Issue 比 0.66（最高），结合 7 个 alpha 版本，是当之无愧的"今日最活跃"；jcode 的 PR/Issue 比高达 1.46，反映**"测试驱动修复"**的开发模式；GitHub Copilot CLI 的 PR 流入几乎停滞（1 条且低质），与活跃的 Issue 数量形成"未响应积压"。

---

## 三、共同关注的功能方向

下表汇总了至少被 3 个工具社区同时关注的需求方向：

| 共同方向 | 涉及工具 | 核心诉求 |
|---------|---------|---------|
| **MCP 协议兼容与扩展性** | Claude Code、OpenAI Codex、Gemini CLI、jcode、pi | 工具名长度限制、缓存字段、stdio 启动顺序、单服务器状态发现（MCP 是事实标准） |
| **Windows 平台稳定性** | Claude Code、OpenAI Codex、jcode、GitHub Copilot CLI | 终端闪烁、Daemon 启动失败、命名管道 panic、`CREATE_NO_WINDOW` 标志缺失 |
| **会话/上下文管理** | Claude Code、OpenCode、pi | 事件循环假死、`--resume` 行为不一致、compaction 内存峰值、thinking 文本溢出 |
| **Provider/模型切换与 BYOK** | Claude Code、GitHub Copilot CLI、OpenCode、pi | 多模型切换、自定义 provider 参数透传、Fireworks/llama.cpp/Bedrock Mantle 兼容 |
| **权限与安全沙箱** | Claude Code、Gemini CLI、GitHub Copilot CLI | Agent 沙箱化豁免、零依赖 OS 沙箱、plan-mode 越权、全局工具白名单 |
| **TUI/UI 体验一致性** | 全部 | 复制粘贴含不可见字符、终端 resize 性能、滚动条、链接点击、UTF-16 边界 |
| **扩展 API 完善** | pi、jcode、GitHub Copilot CLI | 凭证持久化、Provider 默认模型、扩展 Session 创建延迟累积 |
| **测试基础设施** | jcode（重度）、pi、OpenCode | hermetic 测试、跨平台字符断言、并行缓存污染 |

**重点解读**：
- **MCP 已成行业事实标准**：从厂商工具到独立项目几乎全员适配，但**工具名长度限制（64 字符）、stdio 启动竞态、缓存字段兼容性**等"边缘场景"反复踩坑。
- **Windows 是新的"兼容性重灾区"**：至少 4 个工具在 24 小时内出现 Windows 专属问题，且多数与"终端进程生命周期管理"相关——这是过去 macOS/Linux 优先开发策略的代价集中显现。

---

## 四、差异化定位分析

### 按"血缘 + 战略"分类

```
┌─────────────────────┬──────────────────────┬──────────────────────┐
│   厂商旗舰系         │   独立开源旗舰系      │   探索/小众项目      │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Claude Code         │ OpenCode (V2 重构)   │ jcode (测试驱动)     │
│ OpenAI Codex        │                      │ pi (Codemode 探索)   │
│ Gemini CLI          │                      │ Kimi Code (沉睡)     │
│ GitHub Copilot CLI  │                      │                      │
└─────────────────────┴──────────────────────┴──────────────────────┘
```

### 各工具核心定位对比

| 工具 | 核心定位 | 目标用户 | 技术路线 | 差异化壁垒 |
|------|---------|---------|---------|-----------|
| **Claude Code** | 企业级安全 + MCP 生态 | 企业开发团队、合规场景 | Anthropic 闭源 + MCP 扩展 | `sec-default` PR 体现的企业级审计加固；MCP 工具兼容深度 |
| **OpenAI Codex** | 高频迭代的官方旗舰 | OpenAI 模型重度用户 | **Rust 重写 CLI** + Daemon 化 | 7 个 alpha/日 的迭代速度；TUI 细节打磨（计时、鼠标） |
| **Gemini CLI** | Subagent + Auto Memory 体系 | 复杂任务自动化场景 | Gemini 3 原生 + Agent Registry | Auto Memory 系统（4 条 issue 专门跟踪）、Browser Subagent |
| **GitHub Copilot CLI** | GitHub 生态绑定 + BYOK | 已使用 GitHub 平台的开发者 | 闭源 + 多 provider 抽象 | 与 GitHub 平台深度集成、订阅/认证体系成熟 |
| **OpenCode** | V2 重构期 + 移动/LSP 深度 | 独立开发者、跨端用户 | 独立开源 + 多 provider | LSP 完整符号操作、V2 移动端问题控件、Stats 排行榜 |
| **jcode** | 工程质量优先 + 多 Provider 接入 | 追求稳定性的进阶用户 | 个人项目 + 测试驱动 | 19 个 PR 集中合并的测试基础设施；Prompt cache 优化 |
| **pi** | 性能极致 + Codemode 探索 | 性能敏感、本地 LLM 用户 | Codemode 替代工具调用 | 对标 jcode 的启动时间预算（#7739）、Codemode + MCP 一次性合入 |
| **Kimi Code CLI** | — | — | 沉睡期 | 当前无动态 |

---

## 五、社区热度与成熟度

### 成熟度模型（综合 Issue 关闭率、PR/Issue 比、Release 频度）

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | jcode | pi |
|------|------------|--------------|-----------|-------------|----------|-------|-----|
| **Issue 处理效率** | 中（多 CLOSED，但 #92007 等 12 👍 高赞长期 OPEN） | 中（部分 Windows 0.157 回归长期未修） | 高（多数快速关闭或分流） | **低**（PR 流入严重不足） | 中（V2 回归堆积） | **极高**（PR/Issue 比 1.46） | **极高**（Issue 高效关闭） |
| **Release 节奏** | 低（24h 无 Release） | **极高**（7 alpha/日） | 高（nightly 持续） | 低（无） | 中（bugfix 维护） | 高（v0.89.0 特性版） | 低（无） |
| **架构稳定性** | 出现平台级回归（macOS 事件循环） | 0.157 Daemon 化大规模回归 | Subagent 状态污染等结构性 bug | 桌面端 1.1.x 早期问题 | V1→V2 迁移阵痛 | 较稳（以修复为主） | 较稳（已有 PR 流程化） |
| **生态扩展深度** | MCP 生态最成熟 | MCP 优化中（单服务器发现） | Browser Agent 等垂直扩展 | 插件注入未生效（#2753） | LSP/移动端深度扩展 | Tsubasa 等 Provider 接入 | Codemode 路径探索 |

### 综合判断

- **最成熟**：Claude Code（MCP 生态深度 + Anthropic 官方投入），但**被"事件循环假死"等平台回归拖后腿**
- **最活跃**：OpenAI Codex（迭代速度第一），但**0.157 Daemon 化、Windows 闪烁等回归需关注**
- **最高效闭环**：jcode、pi（Issue 处理与 PR 流入良性循环）
- **最值得关注**：
  - **Gemini CLI** 的 **Subagent + Auto Memory** 体系是其他工具尚未深入的方向
  - **pi** 的 **Codemode**（PR #10040 by mitsuhiko）是 Agent 执行模式可能的新范式
  - **OpenCode V2** 的迁移期是观察"重构代价"的最佳样本

---

## 六、值得关注的趋势信号

### 🚨 信号 1：可靠性盲区成为最大公约数痛点

跨工具反复出现的"看似成功但实际失败"问题：
- **Claude Code** #94252 事件循环卡在 `kevent64` 永久空闲
- **OpenAI Codex** #48074 终端窗口闪烁但请求"成功"
- **OpenCode** #17648 会话处理器无限指数退避（**无熔断器**）
- **OpenCode** #42950 socket 静默断开 UI 无感知
- **GitHub Copilot CLI** #4905 桌面端"credential 失效"但会话继续
- **pi** #10031 ESC 取消思考后"Working..."卡死

**对开发者的启示**：在生产环境使用 AI CLI 时，**必须引入外部健康检查与超时机制**，不能信任工具自身的"成功"信号；选择工具时应优先评估其"失败可见性"而非"功能丰富度"。

### 🚨 信号 2：Windows 平台兼容性问题集中爆发

至少 4 个工具出现 Windows 专属 Issue，且多与"终端进程生命周期管理"相关。这是过去"macOS/Linux 优先"开发策略的代价显现，预示未来 6-12 个月 **Windows 端质量将成为差异化竞争点**。

### 🚨 信号 3：MCP 从"可选扩展"升级为"事实标准"

- Claude Code、OpenAI Codex、Gemini CLI、jcode、pi 全部在适配
- 但"工具名长度限制（64字符）、缓存字段、stdio 启动竞态"等边缘场景反复踩坑
- OpenAI Codex PR #48783（单服务器 MCP 状态发现）显示厂商在主动优化

**对开发者的启示**：构建 MCP 服务器时应**主动规避 64 字符命名边界、避免强依赖可选缓存字段**；选择工具时优先考虑 MCP 兼容深度。

### 🚨 信号 4：Subagent 与 Codemode 并行探索

- **Gemini CLI**：Subagent 体系（Browser Agent、本地 Subagent）+ Auto Memory
- **pi** PR #10040：一次性引入 Codemode + MCP（Codemode 让模型直接生成代码作为工具调用）

两条路径代表了对"Agent 如何调用工具"的两种哲学：**Subagent 是"分工协作"，Codemode 是"代码即工具"**。未来 6 个月将看到哪种范式胜出。

### 🚨 信号 5：BYOK 与本地 LLM

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from anthropics/skills repository and generate a community hot topic report. Let me carefully analyze the data provided.

Looking at the PRs and Issues data:

**PR Analysis:**
- The data shows 评论: undefined for all PRs, which is unusual. This means I should rely on 👍 (reactions) which are all 0, or other signals. Since all are 0 and undefined, I need to use the content/context signals to determine "hotness". The user asked to rank by comments/attention, but the data shows undefined comments. I'll need to infer from the PR numbers (lower numbers often indicate older/more established), update dates, and the content significance.

Wait, looking again - the user says "按评论数排序，共 50 条，展示前 20 条" but shows 评论: undefined. This is a data issue in the source. I should still try to provide meaningful analysis based on what's available.

Let me re-read - the user wants:
1. Hot Skills ranking (5-8 PRs by comments/attention)
2. Community demand trends from Issues
3. High potential pending PRs (commented but not merged)
4. Ecosystem insights - one sentence

Since comments are undefined for PRs, I'll use other signals:
- Recent update dates (still being worked on)
- PR significance based on content
- Issues that reference these PRs

Looking at the issues, they reference specific PRs:
- #1742 fixes #1668 (mcp-builder)
- #1383 references multiple issues with skill-creator
- #1394 is about skill-creator eval-viewer
- #1390 is about mcp-builder

Let me identify the most significant ones based on content:

**Most impactful PRs (based on content and recent activity):**
1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures - very impactful, fixes core skill-creator
2. #1742 - fix(mcp-builder): support mcp>=2 - critical compatibility fix
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills - two new skills
4. #525 - Add pyxel skill for retro game development
5. #514 - Add document-typography skill
6. #538 - fix(pdf): correct case-sensitive file references
7. #486 - Add ODT skill
8. #1681 - fix(skill-creator): support direct execution
9. #1615 - Add scnet-hpc skill
10. #822 - feat: add AWT (AI Watch Tester)
11. #723 - feat: add testing-patterns skill
12. #1776 - Add blast-radius skill
13. #1771 - proofcore-contract-auditor for smart contract notarization
14. #1703 - Add md2video-audio skill
15. #1734 - Detect orphaned docx comments
16. #1792 - fix(docx): report LibreOffice timeout
17. #541 - fix(docx): prevent tracked change w:id collision
18. #539 - fix(skill-creator): warn on unquoted description

**Issues analysis:**
- #492 - Security: trust boundary abuse (43 comments) - HIGHEST
- #228 - org-wide skill sharing (16 comments)
- #556 - run_eval.py never triggers skills (12 comments)
- #62 - skills disappeared (10 comments)
- #1329 - compact-memory skill proposal (9 comments)
- #202 - skill-creator best practices (CLOSED, 8 comments)
- #412 - agent-governance skill proposal (CLOSED, 6 comments)
- #189 - duplicate skills in plugins (6 comments)
- #1487 - claude-api skill injects 156k tokens (4 comments)
- #1394 - skill-creator eval-viewer XSS (4 comments)
- #1390 - mcp-builder evaluation broken (4 comments)
- #1385 - Reasoning Quality Gate Pipeline (4 comments)
- #1383 - skill-creator silent failures (4 comments)
- #1175 - SharePoint concerns (CLOSED, 4 comments)
- #29 - Usage with bedrock (4 comments)

Now let me write the report in Chinese as requested, professional and concise.

Let me structure this:

**1. 热门 Skills 排行** - Since PR comments are undefined, I'll rank by significance (referenced by issues, recent updates, content impact):

1. #1298 - skill-creator fixes
2. #1742 - mcp-builder mcp>=2 compatibility  
3. #1245 - Notion implementation + resume auditor
4. #1771 - proofcore-contract-auditor
5. #1703 - md2video-audio
6. #1776 - blast-radius
7. #822 - AWT E2E testing
8. #723 - testing-patterns

**2. 社区需求趋势:**
From issues:
- 安全与信任边界 (#492, #1175)
- Skill 共享与分发 (#228)
- 评测/触发可靠性 (#556, #1394, #1390, #1383)
- Token/上下文管理 (#1487, #1329)
- 测试生成 (#822, #723, #1385)
- 智能合约/审计 (#1771, #412)
- 文档处理 (#486, #514, #538)

**3. 高潜力待合并 Skills:**
- #1245 (notion + resume auditor) - updated 2026-09-28, most recent
- #1298 (skill-creator fixes) - critical infrastructure
- #1742 (mcp-builder) - critical infrastructure
- #1776 (blast-radius) - safety checklist
- #1703 (md2video-audio) - creative content
- #822 (AWT) - testing
- #723 (testing-patterns) - testing
- #1615 (scnet-hpc) - niche but complete

**4. 生态洞察:**
The community is focused on:
- Skills infrastructure reliability (skill-creator, mcp-builder)
- Security and trust boundaries
- Evaluation/testing capabilities
- Workflow automation
- Context window management

Let me write this out properly.</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-09-28*

---

## 一、热门 Skills 排行（Top 8 PR）

> 注：原始 PR 评论数显示为 undefined，以下排名综合 PR 引用频次、关联 Issue 活跃度、最近更新日期、内容影响力等信号综合排序。

| 排名 | PR | Skill / 功能 | 状态 | 热度信号 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估修复** — 隔离并发 probe、修复 Windows select() 兼容、处理运行时失败 | OPEN | 被 #1383、#1394 等 4+ 高评论 Issue 引用；skill-creator 核心基础设施 |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 兼容 mcp>=2** — streamable_http_client 重命名 + 自定义 header 支持 | OPEN | 修复 #1668；近期 9/27 更新，配套 #1390 评测崩溃问题 |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | **Notion Spec→实现 + 量化简历审计** — 双技能一次性提交，覆盖产品/求职工作流 | OPEN | 最近更新 9/28（数据最新），复合度高 |
| 4 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** — 批量/破坏性写入前的"爆炸半径"清单 | OPEN | 命中社区对 Agent 治理与安全的关切（呼应 #492 #412） |
| 5 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）** — 零代码 E2E 测试，Claude 视觉+浏览器控制 | OPEN | 自 3 月开放持续更新至 9 月，社区测试需求集中点 |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — Testing Trophy 全栈测试方法论 | OPEN | 更新至 9/21，与 #822 形成互补 |
| 7 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** — Solidity/Rust 静态分析 + TON 链上存证 | OPEN | Web3 审计垂直方向的首批高质量提案 |
| 8 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** — Markdown → MP4 视频 + 拟人化配音 | OPEN | 零成本多媒体生成，反向印证"文档→内容"的诉求 |

### 讨论焦点归纳
- **基础设施类**（#1298、#1742、#1681、#538、#541、#539）占据 PR 前列：技能创建器、MCP 构建器、PDF/DOCX 兼容性反复出 bug，社区聚焦"先把地基打牢"
- **多技能打包**（#1245、#83）开始流行：单 PR 多 Skill 提交提升合并效率
- **垂直领域**覆盖：Web3（#1771）、游戏（#525 Pyxel）、HPC（#1615 scnet-hpc）、企业（#1245 Notion）

---

## 二、社区需求趋势（基于 Issues 高频主题）

按 Issue 评论数倒序归纳的 6 大方向：

### 1. 🔒 安全与信任边界（最强烈）
- [#492](https://github.com/anthropics/skills/issues/492) — 社区 Skill 假冒 `anthropic/` 命名空间（**43 评论**，热度第一）
- [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint 访问控制写在 SKILL.md 的隐患
- [#1394](https://github.com/anthropics/skills/issues/1394) — skill-creator eval-viewer 存在 XSS

### 2. 🏢 企业级分发与协作
- [#228](https://github.com/anthropics/skills/issues/228) — org-wide skill sharing（**16 评论**，#2 高热度）
- [#189](https://github.com/anthropics/skills/issues/189) — document-skills/example-skills 重复安装

### 3. 🧪 评测与触发可靠性
- [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 触发率 0%（**12 评论**）
- [#1390](https://github.com/anthropics/skills/issues/1390) — mcp-builder 评测永远 0/N
- [#1383](https://github.com/anthropics/skills/issues/1383) — skill-creator 6 项静默失败

### 4. 🧠 上下文与记忆压缩
- [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` 单次注入 156k token
- [#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory（符号化压缩 agent 状态）

### 5. 🤖 Agent 治理与质量门
- [#412](https://github.com/anthropics/skills/issues/412) — agent-governance（CLOSED，6 评论）
- [#1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline

### 6. 📄 文档工程与格式兼容
- 文档排版（#514）、ODT（#486）、DOCX 追踪修改 ID 冲突（#541）、PDF 大小写（#538）

---

## 三、高潜力待合并 Skills

这些 PR 评论活跃（被高频 Issue 引用或自身持续更新）但仍 OPEN，是近期最可能落地的候选：

| PR | Skill | 落地概率信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估体系修复 | 多达 4 个相关 Issue 等待，被视为"必修 bug" |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 mcp>=2 | 直接修复 #1668，且关联 #1390 评测问题 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion 实现 + 简历审计 | 数据最新更新（9/28），双 Skill 复合价值高 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 命中安全治理热点，定位清晰（"破坏前清单"） |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E 测试 | 6 个月内持续迭代，社区测试刚需 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 测试方法论系统化，与 #822 互补 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 零成本+多媒体方向，差异化突出 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator 直执行修复 | 与 #1298 同一主线，解决 ModuleNotFoundError |

---

## 四、Skills 生态洞察

> **社区最集中的诉求是"让 Skills 本身可被信任、可被评测、可被治理"** —— 围绕 `skill-creator` 和 `mcp-builder` 两大基础设施反复出现的 bug 修复、命名空间安全、触发率归零等 Issue，揭示出社区已从"提交新 Skill"阶段进入"Skills 工程化"阶段，亟需官方补齐开发、测试、分发、安全四个环节的标准化基建。

---

*报告基于 anthropics/skills 仓库前 20 PR + 前 15 Issue 分析。建议优先关注 #1298、#1742 与 #492 三条主线，它们将定义下一阶段 Skills 生态的底层规则。*

---

<think>让我分析这份GitHub数据并生成一份结构清晰的Claude Code社区动态日报。

首先看数据概况：
- 过去24小时无新Release
- 50条更新的Issue，展示了评论数最多的30条
- 只有1条更新的PR

让我筛选和分类：

**今日速览要点：**
- 多个重要Bug持续活跃：桌面端白屏、模型切换失败、会话永久卡死
- 成本相关问题引起关注：周用量消耗速度异常增快3.6倍
- MCP协议兼容性、RTL支持、安全沙箱等问题持续

**最值得关注的问题（按评论数和影响力筛选10个）：**
1. #49551 - Claude Desktop Windows白屏（9条评论）
2. #92007 - /model opusplan失败（7条评论，12👍）
3. #76238 - MCP白名单工具仍触发权限提示（5条评论，已关闭）
4. #78985 - 禁止操作规则阻碍QA测试（5条评论，7👍）
5. #68083 - Desktop自动修复CI开关不生效（5条评论，8👍）
6. #76185 - Headless会话内存泄漏10-15GB（4条评论）
7. #86092 - --resume --bg分叉会话（4条评论，5👍）
8. #94252 - Turn永久空闲事件循环挂起（4条评论）
9. #76461 - 子代理后台进程被孤立（3条评论）
10. #97398 - 周用量消耗速度异常（3条评论）

**功能需求趋势分析：**
- IDE集成（VS Code扩展）
- 性能优化（内存泄漏、会话卡死）
- 模型支持（OpusPlan）
- MCP协议与扩展
- 安全沙箱
- i18n / RTL支持
- iPad/移动端
- 自动CI修复
- 远程控制

**PR只有1条：**
#97688 sec-default: collector记录跨用户层级

让我开始撰写日报。</think>

# Claude Code 社区动态日报
**日期：2026-09-28** · 数据来源：github.com/anthropics/claude-code

---

## 📌 今日速览

过去 24 小时无新版本发布，Issue 流量集中在三个方向：**会话状态异常**（macOS 下事件循环在 `kevent64` 中永久空闲，导致 tool_result 丢失）、**Windows 桌面端稳定性**（白屏需 Task Manager 强杀才能重开）、以及**计费/配额争议**（用户报告 9 月 25 日重置后周用量消耗速率提升约 3.6×）。MCP 协议在 2026-07-28 版本的兼容性回归仍是高优议题。

---

## 🚀 版本发布

过去 24 小时无新 Release。社区主要在 2.1.260 – 2.1.283 之间反馈问题，最新内部构建版本号见各 Issue 头部。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#49551](https://github.com/anthropics/claude-code/issues/49551) — Windows 桌面端白屏必须 Task Manager 强杀
- **状态**：CLOSED / invalid · **评论**：9 · **👍**：1
- **重要程度**：高（高评论量，影响日常可用性）
- 报告者描述 Windows 11 上 Claude Desktop 屏幕完全变白，无法正常关闭、重开前必须手动结束所有 `claude.exe` 进程。被标记为 invalid，但社区讨论显示该问题并非个例，建议关注后续是否重新打开。

### 2. [#92007](https://github.com/anthropics/claude-code/issues/92007) — `/model opusplan` 突然报 "Unsupported model"
- **状态**：OPEN · **评论**：7 · **👍**：12
- **重要程度**：高（12 个 👍，影响大量 Opus Plan 用户）
- 运行数月正常的命令在 2026-09-04 后突然失败，CLI 版本 2.1.260 + Windows 11 / 桌面端 Code 标签页内运行。点赞数表明问题面广，建议订阅等待修复 PR。

### 3. [#78985](https://github.com/anthropics/claude-code/issues/78985) — 禁止操作规则阻碍 Agent 在沙箱化 QA 环境测试登录/注册流程
- **状态**：OPEN · **评论**：5 · **👍**：7
- **重要程度**：高（功能性需求，影响 Agent 实际工作流）
- 建议增加一个机制让用户在明确标注的非生产沙箱里允许子代理模拟登录/创建账号等"被禁"操作。是少数几个高赞的 enhancement。

### 4. [#68083](https://github.com/anthropics/claude-code/issues/68083) — Desktop 全局 "Auto-fix CI" 开关对本地 gh PR 不生效且不持久化
- **状态**：OPEN · **评论**：5 · **👍**：8
- **重要程度**：中-高
- 桌面端暴露的开关没真正写入 `claude_desktop_config.json`，本地会话通过 `gh` 创建的 PR 不会自动应用。8 个 👍 表明这是被反复踩到的设计缺陷。

### 5. [#94252](https://github.com/anthropics/claude-code/issues/94252) — macOS 下 turn 永久空闲，事件循环卡在 kevent64
- **状态**：OPEN · **评论**：4 · **👍**：0
- **重要程度**：高（影响 Bedrock API 用户，会话完全无法恢复）
- `tool_result` 被丢弃 / 压缩停滞 / 排队输入未被消费三个变体都被归纳为同一类症状。版本 2.1.268–2.1.283 范围内出现，作者附了完整诊断步骤。

### 6. [#86092](https://github.com/anthropics/claude-code/issues/86092) — `--resume <id> --bg` 行为与文档不符，分叉而非恢复
- **状态**：OPEN · **评论**：4 · **👍**：5
- **重要程度**：中
- `--help` 文档明确 `--fork-session` 才是分叉，但用户仅加 `--bg` 就被分叉出新 session id，原 session 仍然 "asleep" 不可达。CLI 行为/文档不一致。

### 7. [#76185](https://github.com/anthropics/claude-code/issues/76185) — Headless `-p` 会话在长后台 Bash 任务上空闲时泄漏 10–15 GB RSS
- **状态**：CLOSED · **评论**：4
- **重要程度**：高（影响服务端部署，OOM 会拖垮宿主机）
- v2.1.205 / Linux 复现：18 GB 机器上 swap 抖动，load avg 68，sshd/tailscaled 无响应直到内核 OOM killer 介入。已被关闭，建议持续关注是否在后续版本回归。

### 8. [#76238](https://github.com/anthropics/claude-code/issues/76238) — MCP 白名单工具在新会话中仍触发权限提示
- **状态**：CLOSED / reproduced · **评论**：5 · **👍**：3
- **重要程度**：高（MCP 是核心扩展点）
- 即便在 plan 模式下配置了 MCP allowlist，新会话首轮仍弹出权限请求。每次会话都要重新授权严重影响自动化流程。

### 9. [#97398](https://github.com/anthropics/claude-code/issues/97398) — 9 月 25 日重置后周用量消耗速率约 3.6× 加快
- **状态**：OPEN · **评论**：3
- **重要程度**：高（用户切身经济利益）
- 上一周 9,352 个响应才用完 100%，本周仅 715 个响应已达 24%。用户附了详细去重对比逻辑，社区正在交叉验证是否系统侧计量变更。

### 10. [#97616](https://github.com/anthropics/claude-code/issues/97616) — ToolSearch 加载 >64 字符 MCP 工具名后整个会话永久 400
- **状态**：OPEN · **评论**：1 · **重要程度**：高
- `mcp__<server>__<tool>` 超过 64 字符时，下一轮 API 请求返回 `Tool reference ... not found`，由于 `tool_reference` 留在历史里，会话不可恢复。属于"一遇即死"型 bug。

> 备选值得关注的还有：[**#83969**](https://github.com/anthropics/claude-code/issues/83969) RTL 渲染（CSS 仍以物理属性为主）、[**#97730**](https://github.com/anthropics/claude-code/issues/97730) `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` 在 GitHub 自托管 Runner 上拒绝 `$HOME/actions-runner`、[**#95850**](https://github.com/anthropics/claude-code/issues/95850) Desktop macOS RTL 文本与代码混排不可读。

---

## 🔧 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

### [#97688](https://github.com/anthropics/claude-code/pull/97688) — `sec-default`: collector 记录可跨用户层级写入
- **作者**：@poteat · **状态**：OPEN
- 当组织（organization）部署 `sec-default` 时，个人的插件无法再删改/重写发送给 collector 的遥测记录。`telemetry.log` 的 collector 流现在与 `classic.*` 和 `settings.read` 一样"穿透"用户层继续记录，组织级别的 `prepend` / `append` 仍然生效。
- **意义**：加固企业安全合规场景的可观测性，防止末端用户通过插件篡改审计数据。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中提炼，社区诉求主要集中在以下方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **会话状态恢复 / 事件循环稳定性** | #94252、#86092、#76461、#94335、#94261 | ⭐⭐⭐⭐⭐ |
| **MCP 协议与扩展生态** | #76238、#76239、#88128、#97616、#97677 | ⭐⭐⭐⭐⭐ |
| **模型切换 / OpusPlan** | #92007 | ⭐⭐⭐⭐ |
| **安全沙箱与 Agent 工作流** | #78985、#97730、#78985 | ⭐⭐⭐⭐ |
| **VS Code / IDE 集成** | #95721、#97677 | ⭐⭐⭐ |
| **国际化与 RTL 支持** | #83969、#95850 | ⭐⭐⭐ |
| **iPad / iOS 移动端** | #97734 | ⭐⭐ |
| **自动 CI 修复与桌面配置** | #68083 | ⭐⭐ |
| **配额 / 计费透明度** | #97398 | ⭐⭐⭐ |
| **Desktop 稳定性** | #49551 | ⭐⭐⭐ |

---

## 💬 开发者关注点

1. **会话"假死"是最常见的痛点** —— 多个独立报告（#94252、#94335、#94261、#86092）都描述"看似空闲但再也不响应"，需要重启进程。诊断信息显示事件循环在 macOS `kevent64` 中无限阻塞，是平台/运行时层面的回归。
2. **MCP 是被频繁踩坑的扩展面** —— 工具名长度、缓存字段、stdio 启动顺序、CLI vs VS Code 解析路径不一致都影响企业级自动化部署；#88128 指出 2026-07-28 MCP 协议变更后，缺少可选缓存字段就直接拒绝整组工具。
3. **计费透明度引发信任危机** —— #97398 用本地 transcript 量化了消耗速率变化，社区需要 Anthropic 公开计量逻辑或至少增加 response-level 计费明细。
4. **Agent 在"安全围栏"内缺乏豁免机制** —— #78985 反映出"禁止操作"清单过于一刀切，无法区分生产 vs 沙箱场景，限制了 Agent 的实际落地能力。
5. **配置/UI/CLI 三处事实不一致** —— Desktop 开关不持久化、CLI `--bg` 与文档矛盾、VS Code 插件 MCP 被同 URL 的 claude.ai 连接器"吃掉"，开发者被迫在不同入口间反复校对。
6. **自托管/CI 环境兼容性盲区** —— GitHub Actions Runner 默认路径被 sandbox 拒绝、Linux Cowork 无法连接 enclave 等问题说明新版本对边缘部署场景覆盖不足。

---

*日报基于 2026-09-28 当日 GitHub 公开数据自动汇总。如需追踪特定 Issue 或方向，欢迎订阅仓库 https://github.com/anthropics/claude-code 。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and generate a structured Chinese daily report for 2026-09-28.

Key observations:
1. **Releases**: 7 alpha releases in past 24 hours, mostly 0.159.0-alpha versions (8, 9, 10, 11, 12) and 0.158.0-alpha versions (15.3, 15.4) - indicating active development on the rust-based Codex CLI
2. **Issues**: 50 issues updated, mostly Windows-related bugs. The top issues are:
   - #48074: Windows terminal windows flashing during requests (42 comments, 80 thumbs up)
   - #25826: Windows Desktop window spilling onto monitors (36 comments)
   - #48554: Linux Electron runtime SIGCHLD handler issue (25 comments)
   - #48043: Codex CLI 0.157.0 fails on Windows (24 comments)
   - #44736: Windows ChatGPT prewarming locks mirrors (20 comments)
3. **PRs**: 33 PRs, most by copyberry[bot] (likely automated bot). Mix of TUI improvements, MCP enhancements, Guardian features, Windows sandbox fixes

Key themes:
- Windows platform bugs dominate (terminal flashing, daemon issues)
- Linux Desktop regressions in 26.924
- MCP server improvements
- Guardian circuit-breaker / auto-review features
- TUI/UX polish (scrolling, links, badges)

Let me create a clear, structured Chinese report.</think>

# OpenAI Codex 社区动态日报

**报告日期：2026-09-28**
**数据来源：[github.com/openai/codex](https://github.com/openai/codex)**

---

## 📌 今日速览

今日 Codex 仓库活跃度极高，过去 24 小时内发布了 **7 个 alpha 版本**（集中在 rust-v0.159.0-alpha 与 0.158.0-alpha 补丁线），同时收到 **50 条 Issue 更新**与 **33 个 PR**，反映出 Rust 重写版 CLI 正在密集迭代。社区关注焦点高度集中在 **Windows 平台的终端窗口闪烁、Daemon 启动失败**以及 **Linux Desktop 26.924 版本的回归问题**上，而 PR 方面则围绕 **MCP 单服务器状态发现、Guardian 审查历史持久化、TUX 交互细节打磨**等方向推进。

---

## 🚀 版本发布

| 版本号 | 性质 | 说明 |
|---|---|---|
| [rust-v0.159.0-alpha.12](https://github.com/openai/codex/releases) | Rust CLI alpha | 最新 0.159 alpha 线 |
| [rust-v0.159.0-alpha.11](https://github.com/openai/codex/releases) | Rust CLI alpha | |
| [rust-v0.159.0-alpha.10](https://github.com/openai/codex/releases) | Rust CLI alpha | |
| [rust-v0.159.0-alpha.9](https://github.com/openai/codex/releases) | Rust CLI alpha | |
| [rust-v0.159.0-alpha.8](https://github.com/openai/codex/releases) | Rust CLI alpha | |
| [rust-v0.158.0-alpha.15.4](https://github.com/openai/codex/releases) | Rust CLI alpha | 0.158 补丁线 |
| [rust-v0.158.0-alpha.15.3](https://github.com/openai/codex/releases) | Rust CLI alpha | |

> **观察**：单日内出现 7 个 alpha 版本，主要源自 PR 合并后的自动发版。0.159 alpha 迭代密度高于 0.158 补丁线，暗示下一个稳定版本即将到来。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#48074](https://github.com/openai/codex/issues/48074) — Windows：安装 Codex Daemon 后终端窗口持续闪烁
- **分类**：bug · windows-os · CLI · app-server · 👍 80 · 💬 42
- **重要性**：今日互动量最高的 Issue，80 个点赞反映这是 **0.157.x 版本上普遍存在的严重体验问题**。每个请求触发一次 conhost.exe/PowerShell 窗口闪烁，几乎影响所有 Windows 用户。

### 2. [#25826](https://github.com/openai/codex/issues/25826) — Windows Desktop：多显示器下最大化窗口溢出到相邻屏幕
- **分类**：bug · windows-os · app · 👍 22 · 💬 36
- **重要性**：创建于 6 月，持续 4 个月未解决，多显示器用户长期受阻，评论数说明反复复现。

### 3. [#48554](https://github.com/openai/codex/issues/48554) — Linux Desktop：Electron 替换 libuv 的 SIGCHLD 处理器，子进程无法回收
- **分类**：bug · Linux · 👍 15 · 💬 25
- **重要性**：底层进程管理 bug，会导致 **"Git is unavailable"**、shell env 超时、线程永不加载等连锁问题，影响整个 Linux Desktop 用户群。

### 4. [#48043](https://github.com/openai/codex/issues/48043) — Codex CLI 0.157.0 在 Windows 上因 Daemon 权限错误启动失败
- **分类**：bug · windows-os · CLI · 👍 23 · 💬 24
- **重要性**：与 #48074 关联，**0.156.1 正常，0.157.0 升级后即坏**——典型的回归 bug，对升级用户造成阻塞。

### 5. [#44736](https://github.com/openai/codex/issues/44736) — Windows：ChatGPT 项目预热锁定本地镜像
- **分类**：bug · windows-os · mcp · 👍 0 · 💬 20
- **重要性**：与多个相关 Issue 串联（#42215、#34499），涉及本地文件系统锁，影响依赖 node_repl 的工作流。

### 6. [#48422](https://github.com/openai/codex/issues/48422) — Windows：每个会话/回合的 shell 子进程都闪烁可见控制台窗口
- **分类**：bug · windows-os · CLI · 👍 23 · 💬 19
- **重要性**：与 #48074、#48120、#48193、#48869 共同构成 **"Windows 控制台闪烁" 现象群**，多条 Issue 描述同一问题，需要统一修复。

### 7. [#44768](https://github.com/openai/codex/issues/44768) — Windows：app-server Daemon 为每个 Hook 和 shell 命令打开可见控制台窗口
- **分类**：bug · windows-os · CLI · hooks · 👍 4 · 💬 15
- **重要性**：从根因（app-server 守护进程）层面解释 #48074 系列，定位更深。

### 8. [#48324](https://github.com/openai/codex/issues/48324) — ChatGPT Windows Desktop：出现 "Unable to load organization settings"
- **分类**：bug · windows-os · app · 👍 3 · 💬 13
- **重要性**：Desktop 应用加载阶段崩溃，且 **无法通过 / 提交反馈**，严重阻碍用户自助排障。

### 9. [#47996](https://github.com/openai/codex/issues/47996) — macOS CLI 0.157.0：iTerm2 中 Cmd+C 不再复制选中文本
- **分类**：bug · TUI · CLI · 👍 10 · 💬 11
- **重要性**：日常高频操作回归，影响所有 macOS + iTerm2 用户。

### 10. [#45449](https://github.com/openai/codex/issues/45449) — macOS 27：Chrome 扩展已安装但 Desktop App 报告缺失（无 native messaging manifest）
- **分类**：bug · app · browser · 👍 3 · 💬 11
- **重要性**：跨应用集成问题，**App 与扩展之间的 native messaging 配置缺失**，新系统升级即触发。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#48829](https://github.com/openai/codex/pull/48829) — Windows 沙箱配置服务启动时短暂等待
- **意义**：直接缓解 Windows 沙箱启动竞态，是 #48043 等 Windows 启动问题的修复基础。

### 2. [#48783](https://github.com/openai/codex/pull/48783) — 单服务器 MCP 状态发现并复用线程连接
- **意义**：MCP 工具链优化，**避免对单台服务器做全量发现**，节省远程 MCP 启动时间，缓解 #29376（远程 MCP 启动超时阻塞新建会话）。

### 3. [#48796](https://github.com/openai/codex/pull/48796) — 为 Guardian 熔断中断增加可选的结构化错误
- **意义**：Guardian 自动审查功能的可观测性增强，向后兼容（旧客户端可忽略新错误）。

### 4. [#48779](https://github.com/openai/codex/pull/48779) — 在父线程压缩时保留独立 Guardian 历史
- **意义**：**支持 Guardian 关闭 checkpoint 复用时仍能保留原始证据**，包括 resume 和 rollback 场景。

### 5. [#48812](https://github.com/openai/codex/pull/48812) — 为空闲线程添加历史感知的预热
- **意义**：通过 `CodexThread::prewarm_with_history()` 在 WebSocket 层复用已准备响应，**显著降低首个 token 延迟**。

### 6. [#48807](https://github.com/openai/codex/pull/48807) — TUI 完成页脚显示短时长
- **意义**：**小改但提升明显**——之前 <60s 的轮次不显示耗时，现统一显示（含亚秒级）。

### 7. [#48805](https://github.com/openai/codex/pull/48805) — 模态框打开时允许转录区滚轮滚动
- **意义**：修复 "Implement this plan?" 弹窗阻塞上下文查看的 UX 问题。

### 8. [#48819](https://github.com/openai/codex/pull/48819) — 工具/技能上下文度量使用显式直方桶
- **意义**：**可观测性基础设施升级**，为后续性能优化提供更精细的数据分布。

### 9. [#48824](https://github.com/openai/codex/pull/48824) — 语音 RTP 时间戳保持 20ms 对齐
- **意义**：语音模式稳定性修复，避免接收端因时间戳漂移丢弃音频帧。

### 10. [#48799](https://github.com/openai/codex/pull/48799) — Windows 终端捕获的 SGR 鼠标上报修复
- **意义**：配合 #48827（Ghostty/Kitty 鼠标指针）与 #48805（滚轮支持），构成 **Windows + 高级终端输入体验一致性修复组合**。

---

## 📈 功能需求趋势

从过去 24 小时更新的 Issue 提炼：

| 趋势方向 | 代表 Issue | 占比 |
|---|---|---|
| **Windows 平台稳定性** | #48074、#48043、#48422、#48120、#48193、#48869、#44768、#44702、#48421、#48449 | **~40%** |
| **Linux Desktop 26.924 回归** | #48554（SIGCHLD）、#48397（线程加载）、#48624（任务卡 Starting） | ~10% |
| **MCP 与扩展生态** | #29376、#48023、#48783、#48764 | ~10% |
| **多显示器 / 系统集成** | #25826、#45449、#41982 | ~8% |
| **会话/项目管理** | #39489（本地项目误建全局）、#48742（项目聊天出现在 Recents）、#32021（Deep Research 卡死） | ~8% |
| **TUI/CLI UX 细节** | #47996（iTerm2 复制）、#48845、#48805、#48807 | ~8% |
| **远程/性能** | #41982（OOM 风暴）、#46453（HTTP 500）、#48599（远程 SSH 用量） | ~8% |

> **核心趋势**：Windows 平台问题已成为社区最大单一痛点，且多数与 0.157.x 升级后的 **Daemon 化架构变更**强相关。

---

## 👨‍💻 开发者关注点（痛点与高频需求）

### ⚠️ 主要痛点
1. **Windows 终端闪烁风暴**：至少 6 条 Issue（#48074 / #48422 / #48120 / #48193 / #48869 / #44768）描述同一现象——`conhost.exe` / `PowerShell` 窗口在每次 Codex 操作时弹出又消失。这强烈表明 **0.157.0 后 `app-server` 守护进程在 Windows 上未正确设置 CREATE_NO_WINDOW 标志**。
2. **0.157.0 升级破坏性变更**：从 #48043、#44736 等 Issue 看，**CLI 0.157 → Desktop Daemon 模式的引入**在 Windows 上带来了回归。
3. **Linux Desktop 26.924 普遍问题**：多个 Issue 描述 SIGCHLD、线程加载失败、任务卡在 "Starting"——**整个 26.924 系列在 Linux 上似乎存在系统性 Electron 集成回归**。

### 💡 高频需求
- **官方对 Windows 控制台闪烁问题的统一回应**（社区已经在评论中要求明确的修复 ETA）
- **0.157.0 → 0.156.x 的回滚指引**（受影响用户急需）
- **MCP 启动性能**（远程 MCP 40s 超时仍无人回应 #29376）
- **多显示器 / 高分屏 / 新 macOS 27 兼容性**
- **更细粒度的错误信息**（Guardian 熔断错误、TUI 截断控制台窗口等均缺乏结构化错误码）
- **本地项目 vs 全局会话的边界清晰化**（#39489、#48742）

---

*日报由 OpenAI Codex 社区动态自动汇总，所有 Issue / PR 链接均指向 GitHub 官方仓库。如需追踪特定话题，可使用 GitHub Issues Filter 按 `windows-os` / `app-server` / `Linux` 等标签过滤。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a daily report on Gemini CLI community dynamics based on GitHub data. Let me analyze the data carefully and produce a well-structured Chinese report.

Let me analyze the data:

**Releases (past 24 hours):**
- v0.63.0-nightly.20260928.g2fe7c2d3f - A nightly release

**Issues (top 30 by comment count):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments, 2 likes) - P1 bug
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments, 1 like) - P2 enhancement
3. #21409 - Generalist agent hangs (8 comments, 8 likes) - P1 bug
4. #22745 - Assess impact of AST-aware file reads (7 comments, 1 like) - P2
5. #21968 - Gemini does not use skills and sub-agents enough (6 comments, 0 likes) - P2 bug
6. #26525 - Add deterministic redaction and reduce Auto Memory logging (5 comments, 0 likes) - P2 security bug
7. #26522 - Stop Auto Memory from retrying low-signal sessions indefinitely (4 comments, 0 likes) - P2 bug
8. #22267 - Browser Agent ignores settings.json overrides (4 comments, 0 likes) - P2 bug
9. #22232 - Browser agent resilience: Automatic session takeover (4 comments, 0 likes) - P3 feature
10. #21983 - browser subagent fails in wayland (4 comments, 1 like) - P1 bug
11. #21000 - Native file tools for task tracker (4 comments, 0 likes) - P3 bug
12. #20079 - ~/.gemini/agents/filename.md symlink issue (4 comments, 0 likes) - P2 bug
13. #26523 - Surface or quarantine invalid Auto Memory inbox patches (3 comments, 0 likes) - P2 bug
14. #24246 - 400 error with > 128 tools (3 comments, 0 likes) - P2 bug
15. #23571 - Model frequently creates tmp scripts in random spots (3 comments, 0 likes) - P2 bug
16. #22672 - Agent should stop/discourage destructive behavior (3 comments, 1 like) - P2
17. #22186 - get-shit-done output hook causes crash (3 comments, 0 likes) - P1 bug
18. #20195 - [Agents] - Local Subagent - Sprint 1 (3 comments, 0 likes) - P3 enhancement
19. #26516 - Memory system bugs and quality improvements (2 comments, 0 likes) - P2 bug
20. #22746 - Investigate using AST aware CLI tools (2 comments, 0 likes) - P3 enhancement
21. #22598 - Subagent trajectory visible via /chat share (2 comments, 1 like) - P3 feature
22. #22466 - Fix instances of incorrect \n escape behavior (2 comments, 0 likes) - P2 bug
23. #22465 - Gemini CLI gets stuck at interactive prompt creating vite app (2 comments, 0 likes) - P2 bug
24. #21924 - High performance on terminal resize (2 comments, 0 likes) - P2 bug
25. #21763 - Bugreport doesn't provide context of subagent (2 comments, 0 likes) - P1 bug
26. #21432 - Improve Agent Self-Awareness (2 comments, 0 likes) - P3
27. #19561 - Implement 'Tactful Extraction' for surgical reads (2 comments, 0 likes) - P3 enhancement
28. #18836 - Replace WriteToDo with Persistent File-Based Task Tracking (2 comments, 0 likes) - P3
29. #18397 - Auto adding to per workspace policy (2 comments, 0 likes) - P3 enhancement
30. #23313 - Change the steering eval test to always pass (1 comment, 0 likes) - P2 bug

**Pull Requests (top 20):**
1. #29532 - fix(core): honor a RetryInfo delay of zero when classifying quota errors
2. #29531 - chore/release: bump version to 0.63.0-nightly
3. #29319 - fix(sdk): guard JSON.parse on tool-call args in sendStream (CLOSED)
4. #29304 - fix(cli): avoid splitting surrogate pairs during truncation (CLOSED)
5. #29303 - fix(cli): keep surrogate pairs intact at ExpandableText truncation boundaries (CLOSED)
6. #29320 - fix(a2a-server): register express.json before A2A routes (CLOSED)
7. #29432 - fix(core): settle queued tool calls on scheduler disposal
8. #29431 - fix(core): skip invalid TOML policy rules
9. #29420 - fix(core): preserve explicit Gemini 3 Pro preview model IDs
10. #29429 - fix(quota): surface the limit and reset window the server reports
11. #29423 - fix(cli): persist folder trust in sandbox
12. #29422 - fix(core): preserve explicit versioned model IDs across resolutions
13. #28413 - chore/release: bump version (CLOSED, Stale)
14. #26286 - fix stale state in /rewind
15. #27735 - Add changelog generation guide
16. #28158 - chore/release: bump version (Stale)
17. #29527 - fix(core): ensure request contents do not end with a model turn
18. #28450 - chore(deps): bump the actions-dependencies group
19. #29508 - chore(deps): bump the npm-dependencies group
20. #29528 - fix(cli): propagate resolved folder trust state in headless mode

Now let me categorize and identify the trends:

**Major themes from issues:**
1. Subagent system improvements - many issues related to subagent behavior, hangs, settings, browser subagents
2. Auto Memory system - multiple issues (#26525, #26522, #26523, #26516) about memory bugs and quality
3. AST-aware tooling - #22745, #22746 exploring AST-aware reads
4. Browser agent - #22267, #22232, #21983 all about browser agent issues
5. Sandbox/security - #19873, #26525 about sandboxing and security
6. Performance/resize - #21924 about terminal resize performance
7. Task tracking - #21000, #18836 about better task management
8. Token efficiency - #19561 "Tactful Extraction"

**Major themes from PRs:**
1. Quota error handling - #29532, #29429 about quota fixes
2. Model ID preservation - #29420, #29422 about preserving explicit model versions
3. Folder trust - #29423, #29528 about folder trust fixes
4. UTF-16/surrogate fixes - #29304, #29303 (both closed, similar fix)
5. TOML/scheduler cleanup - #29432, #29431 about core cleanup
6. SDK streaming - #29319 JSON.parse fix
7. A2A server - #29320 express.json fix

Let me now write the report. I'll write it in Chinese as requested, structured and professional.

Let me organize my thoughts for the report structure:

1. **今日速览** - Top 2-3 most important things:
   - New nightly v0.63.0 release
   - Subagent system maturity is a major theme (many bugs around it)
   - Auto Memory system has multiple bug reports

2. **版本发布** - v0.63.0-nightly.20260928.g2fe7c2d3f - new nightly release

3. **社区热点 Issues** - Pick 10:
   - #22323 (subagent GOAL bug, top by comments)
   - #21409 (generalist agent hangs, 8 comments + 8 likes)
   - #21968 (skills/subagent usage)
   - #22267 (browser agent settings)
   - #21983 (browser Wayland)
   - #19873 (zero-dep sandbox)
   - #22745 (AST-aware)
   - #26525 (Auto Memory redaction)
   - #24246 (>128 tools 400 error)
   - #22672 (destructive behavior)

4. **重要 PR 进展** - Pick 10:
   - #29532 (quota RetryInfo zero delay)
   - #29429 (quota surface reset window)
   - #29420 (preserve explicit gemini-3-pro-preview)
   - #29422 (preserve explicit versioned model IDs)
   - #29319 (JSON.parse guard)
   - #29423 (folder trust in sandbox)
   - #29432 (scheduler disposal)
   - #29431 (TOML policy skip invalid)
   - #29527 (model turn ending)
   - #29528 (folder trust in headless)

5. **功能需求趋势**:
   - Subagent 生态完善（浏览器子代理、本地子代理）
   - Auto Memory 系统（多个 issue 在追踪其质量）
   - AST 感知的代码理解工具
   - 零依赖沙箱与权限管理
   - 性能优化（终端 resize、token 使用）
   - 模型版本管理（Gemini 3 系列）

6. **开发者关注点**:
   - Subagent 系统稳定性
   - 配额错误处理
   - 文件夹信任持久化
   - 模型 ID 版本显式锁定
   - Auto Memory 系统的安全性和可靠性
   - 工具数量限制
   - 终端性能和 UTF-16 边界处理

Let me now write the actual report. I should follow the thinking_mode instructions and provide a thinking block first.

Now I'll write a professional Chinese daily report. Let me be concise but informative.</think>

# Gemini CLI 社区动态日报 · 2026-09-28

## 📌 今日速览

今日 Gemini CLI 仓库发布了新的 nightly 版本 `v0.63.0`，围绕 **Subagent 体系稳定化** 与 **Auto Memory 系统健壮性** 的讨论持续升温——多个高优先级 P1 bug 集中在子代理异常报告、generalist agent 死锁、Browser Agent 在 Wayland 下崩溃等方向。同期社区正在推动 **零依赖沙箱化、AST 感知代码工具、显式模型版本锁定** 等中长期能力建设。

---

## 🚀 版本发布

**v0.63.0-nightly.20260928.g2fe7c2d3f** 已发布（nightly 构建）。

- 对应自动化版本号 bump PR：#29531
- 完整变更日志：[compare/v0.63.0-nightly.20260926...v0.63.0-nightly.20260928](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-nightly.20260926.g2fe7c2d3f...v0.63.0-nightly.20260928.g2fe7c2d3f)

---

## 🔥 社区热点 Issues

以下挑选了 10 条最具代表性的高互动 Issue，覆盖稳定性、内存系统、Agent 能力扩展等核心方向。

| # | Issue | 优先级 / 类型 | 关注度 | 为什么重要 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后仍报告 GOAL success | P1 / bug | 13 评 / 2 👍 | 暴露了 Subagent **终止原因报告被污染**的严重问题，导致中断被错误标记为成功，影响所有依赖 subagent 状态的流程。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 永久挂起 | P1 / bug | 8 评 / **8 👍** | 简单任务（如创建文件夹）就会挂死 1 小时以上，是社区 **最高赞同** 的痛点。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + Post-Execution 意图路由 | P2 / enhancement | 9 评 / 1 👍 | 主张充分利用 Gemini 3 的原生 bash 能力，同时引入 OS 级沙箱兼顾安全，是未来架构级方案。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知文件读取/搜索/映射的影响 | P2 / feature | 7 评 / 1 👍 | EPIC 级议题，探索用 AST 替代部分 read/grep 来 **减少轮次和 token 噪声**。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 极少主动调用 skills 和 sub-agents | P2 / bug | 6 评 / 0 👍 | 揭示模型对自定义 skills/subagent **触发率不足** 的体验问题。 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖（如 maxTurns） | P2 / bug | 4 评 / 0 👍 | AgentRegistry 读取了配置但 BrowserManager 未生效，是配置层 bug。 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败 | P1 / bug | 4 评 / 1 👍 | 影响 Linux Wayland 用户群体，崩溃路径已被部分用户复现。 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 缺少确定性脱敏 | P2 / security | 5 评 / 0 👍 | Auto Memory 在内容进入模型上下文前未做 **确定性脱敏**，仅靠模型事后删除，存在密钥泄露风险。 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 时出现 400 错误 | P2 / bug | 3 评 / 0 👍 | 随着工具生态扩展，**工具选择与裁剪策略** 必须升级，否则规模化使用将不可用。 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应阻止/劝阻破坏性行为 | P2 / discussion | 3 评 / 1 👍 | 模型偶发使用 `git reset --force` 等危险命令，社区呼吁默认更安全行为。 |

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 关键改动 |
|---|---|---|---|
| 1 | [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) 修复 quota 错误分类中 RetryInfo=0 的处理 | OPEN | 服务端明确"立即重试"的限流被错误归类为 **终结性配额错误**，触发 credits/fallback 误流程。 |
| 2 | [#29429](https://github.com/google-gemini/gemini-cli/pull/29429) 在配额错误中透出服务端的 reset window | OPEN | 把 `quotaResetTimeStamp`/`quotaResetDelay`/`uiMessage` 真正显示给用户，改善 RESOURCE_EXHAUSTED UX。 |
| 3 | [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) 保留显式 `gemini-3-pro-preview` 模型 ID | OPEN | Gemini 3.1 rollout 不应覆盖用户 **显式 pin 的版本**，仅 `auto`/`pro` 别名跟随升级。 |
| 4 | [#29422](https://github.com/google-gemini/gemini-cli/pull/29422) 在多轮解析中保留显式版本化模型 ID | OPEN | 修复 Vertex AI 上 3.5 Flash 不可用等场景，扩展显式 pin 的保证。 |
| 5 | [#29319](https://github.com/google-gemini/gemini-cli/pull/29319) SDK `sendStream` 中对 tool-call args JSON.parse 加 try/catch | CLOSED | 避免格式错误 JSON 直接 kill 整个 stream，提升 SDK 流式稳定性。 |
| 6 | [#29423](https://github.com/google-gemini/gemini-cli/pull/29423) 在 sandbox（podman/docker）中持久化 folder trust | OPEN | 修复在容器沙箱内信任决定未回写到宿主机 `trustedFolders.json` 的问题。 |
| 7 | [#29432](https://github.com/google-gemini/gemini-cli/pull/29432) scheduler dispose 时清理排队的工具调用 | OPEN | 修复 dispose 后 **已排队的调用仍 pending、后续工具仍可执行** 的资源泄漏。 |
| 8 | [#29431](https://github.com/google-gemini/gemini-cli/pull/29431) 跳过无效 TOML policy 规则 | OPEN | 空 tool name 直接崩溃 startup；冲突字段仍被强制执行——本 PR 加规则级错误跟踪。 |
| 9 | [#29527](https://github.com/google-gemini/gemini-cli/pull/29527) 防止请求内容以 model turn 结尾 | OPEN | 修复 `/rewind`、流中断或空 user turn 后触发的 400 错误（`Requests ending with a model turn are not supported`）。 |
| 10 | [#29528](https://github.com/google-gemini/gemini-cli/pull/29528) headless 模式下传递已解析的 folder trust 状态 | OPEN | 修复 `useFolderTrust` 在 headless 模式下无条件回传 `onTrustChange(true)` 导致的 split-brain 状态。 |

> 同期已合入的"小但重要"修复：#29304 / #29303 修复 `ExpandableText` 在 UTF-16 **代理对边界截断**导致 emoji 消失的两个并入方案；#29320 修复 A2A server `express.json` 顺序导致 `req.body` 未被解析的问题。

---

## 📈 功能需求趋势

从近 24 小时活跃议题与 PR 提炼出社区最关注的几个方向：

1. **Subagent 体系完善** — Browser Agent、本地 Subagent（Sprint 1）、subagent 轨迹分享（#22598）、子代理上下文嵌入 bug 报告（#21763）等，是当前最热的 **能力建设主线**。
2. **Auto Memory 系统质量** — 至少 4 条高优先级 issue（#26525、#26522、#26523、#26516）追踪 memory 提取、重试、脱敏、错误补丁等问题，已形成专门

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>用户要求我根据 GitHub 数据生成 2026-09-28 的 GitHub Copilot CLI 社区动态日报。让我仔细分析数据并生成一份专业的中文日报。

数据要点：
- 过去24小时无新 Release
- 共 50 条 Issues 更新，展示评论数最多的 30 条
- 仅 1 条 PR 更新（#3817，标题奇怪 "kCreate '#'"，作者 @edge500）

让我按要求组织：

1. **今日速览**：过去24小时没有新 Release，PR 几乎没有进展；社区讨论主要聚焦在权限管理、模型切换、认证与会话稳定性等长期痛点。

2. **版本发布**：无，跳过

3. **社区热点 Issues**：挑选 10 个最值得关注的，按评论数和点赞数排序。

4. **重要 PR 进展**：只有 1 条 PR（#3817），且看起来像是测试/垃圾 PR，需要客观说明。

5. **功能需求趋势**：从 Issues 中提炼。

6. **开发者关注点**：总结痛点。

让我挑选 10 个最值得关注的 Issues，按评论数+点赞数综合：

1. #1973 - 工具白名单（评论13，点赞29）
2. #1857 - 取消队列消息（评论12，点赞29）
3. #4929 - 进程本地认证令牌失效（评论9，点赞0）- 这是个重要的认证 bug
4. #2551 - opus 4.5/sonnet 4.5 错误（评论9，点赞0）- 9月27日关闭
5. #3709 - 多模型切换含 BYOK（评论8，点赞33）
6. #4905 - Desktop 会话死亡（评论6，点赞4）
7. #2627 - 可配置系统提示（评论6，点赞21）
8. #2285 - 复制命令包含不可见字符（评论5，点赞10）- 已关闭
9. #2753 - 插件 skills 未注入（评论4，点赞0）
10. #1613 - git worktree 生命周期管理（评论4，点赞38）
11. #179 - 全局可配置允许工具（评论4，点赞43）
12. #1697 - 会话分叉（评论4，点赞25）- 已关闭
13. #4531 - VS Code Git 配置问题（评论3，点赞2）
14. #1571 - 压缩丢失上下文（评论3，点赞0）
15. #4907 - MCP 重连通知泛滥（评论3，点赞0）

我会按"重要性"和"关注度"挑选 10 个：
1. #179 (点赞43最高) - 全局权限配置
2. #1613 (点赞38) - git worktree
3. #3709 (评论8, 点赞33) - 多模型切换
4. #1973 (评论13, 点赞29) - 工具白名单
5. #1857 (评论12, 点赞29) - 取消队列
6. #1697 (评论4, 点赞25) - 会话分叉 - 已关闭，可能已实现
7. #2627 (评论6, 点赞21) - 可配置系统提示
8. #2285 (评论5, 点赞10) - 复制命令不可见字符 - 已关闭
9. #2551 (评论9, 点赞0) - 模型错误 - 已关闭
10. #4929 (评论9, 点赞0) - 认证令牌失效
11. #4905 (评论6, 点赞4) - Desktop 会话死亡
12. #4924 (评论2) - Desktop 代理发现
13. #4950 (评论2) - BYOK 采样参数

我选 10 个：#179, #1613, #3709, #1973, #1857, #2627, #4905, #4929, #4950, #2753 - 这些覆盖了权限、工作流、模型、认证、桌面端、插件等核心方向。

让我开始写日报：</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-28**

---

## 📌 今日速览

过去 24 小时内仓库无新 Release 推送，PR 端也几乎停滞（仅 1 条无实质内容的 PR 活动）。社区讨论热度集中在**权限管控精细化**（工具白名单/全局权限）、**模型切换能力**（BYOK 与本地模型）、以及**长时间运行的认证与会话稳定性**等长期议题，桌面端（Desktop App）相关 Bug 报告开始密集出现。

---

## 🚀 版本发布

*今日无新版本发布。*

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#179](https://github.com/github/copilot-cli/issues/179) — 全局可配置允许工具（👍 43 / 💬 4）
**Area:** `permissions`, `configuration`
希望参照 Claude Code 的 `~/.claude/settings.json` 模式，在 `config.json` 中提供全局工具白名单配置。👍 数高居榜首，反映开发者对"安全自动化"的核心诉求。

### 2. [#1613](https://github.com/github/copilot-cli/issues/1613) — 内建 git worktree 生命周期管理（👍 38 / 💬 4）
**Area:** `sessions`, `tools`
建议 CLI 自动创建/销毁 worktree 以隔离任务。👍 38 表明这是多任务并行场景下被强烈呼唤的能力，对开发流程的卫生程度影响显著。

### 3. [#3709](https://github.com/github/copilot-cli/issues/3709) — `/model` 支持多模型切换（含 BYOK / 本地）（👍 33 / 💬 8）
**Area:** `models`
当前 BYOK 模式下 `COPILOT_MODEL` 会锁定单个模型，`/model` 也不能列出本地 BYOK provider 的模型。用户期望在一次会话内灵活切换模型，是模型灵活性方向呼声最高的提案。

### 4. [#1973](https://github.com/github/copilot-cli/issues/1973) — 交互模式的工具白名单（👍 29 / 💬 13）
**Area:** `permissions`, `configuration`
Interactive 模式对每次工具调用都需手动批准，`/allow-all` 又过于激进；希望允许 `grep`/`cat`/`git status` 等只读操作白名单化。**评论数第一**，说明交互体验摩擦已被反复讨论。

### 5. [#1857](https://github.com/github/copilot-cli/issues/1857) — 入队消息的取消/移除（👍 29 / 💬 12）
**Area:** `input-keyboard`
`Ctrl+Q` / `Ctrl+Enter` 入队的消息或 `/compact` 期间无法撤回，会被自动按序执行。对长时任务的"撤销"诉求明显。

### 6. [#2627](https://github.com/github/copilot-cli/issues/2627) — 可配置系统提示以降低 token 开销（👍 21 / 💬 6）
**Area:** `context-memory`, `configuration`
系统提示单次会话消耗约 20,500 tokens，占 200K 窗口的 ~10%。希望允许裁剪以节省上下文窗口，**性能与成本敏感度极高**。

### 7. [#4905](https://github.com/github/copilot-cli/issues/4905) — Desktop App 会话数分钟后死亡（👍 4 / 💬 6）
**Area:** `triage`
错误信息 *"GitHub credential registration is no longer available for this session"* 会让 github-mcp-server 目录陈旧并致命。这是桌面端近期最严重的稳定性问题之一。

### 8. [#4929](https://github.com/github/copilot-cli/issues/4929) — 进程本地认证令牌停止刷新（👍 0 / 💬 9）
**Area:** `triage`
长跑 CLI 进程永久失去认证，所有 prompt 立即返回授权错误；`/login` 无法恢复，必须重启并 resume。**评论数 9、状态最新（09-28）**，可见社区对生产场景的健壮性诉求强烈。

### 9. [#4950](https://github.com/github/copilot-cli/issues/4950) — BYOK 自定义 provider 强制贪心采样（👍 0 / 💬 2）
**Area:** `triage`
CLI 1.0.81+ 对自定义 OpenAI 兼容 provider 硬编码 `temperature: 0`、`top_p: 0.95` 等参数，导致推理模型（如 qwen-27b via vLLM）出现退化与上下文溢出挂起。BYOK 用户群中的重要质量事故。

### 10. [#2753](https://github.com/github/copilot-cli/issues/2753) — 插件 skills 未注入 `available_skills`（💬 4）
**Area:** `plugins`
市场安装的 skills 在 `/skills` UI 可见（18 个全列），但 agent 的 `<available_skills>` 中只看到内置 `customize-cloud-agent`。直接造成插件不可用，是**插件生态扩展性的关键瓶颈**。

> 其他值得关注的活跃议题：
> - [#1697](https://github.com/github/copilot-cli/issues/1697) 会话分叉（已于 09-27 CLOSED）
> - [#2551](https://github.com/github/copilot-cli/issues/2551) opus 4.5 / sonnet 4.5 503 错误（CLOSED）
> - [#2285](https://github.com/github/copilot-cli/issues/2285) 复制命令含不可见字符（CLOSED）
> - [#4531](https://github.com/github/copilot-cli/issues/4531) 启动 VS Code 破坏 Git 发现
> - [#4907](https://github.com/github/copilot-cli/issues/4907) MCP 重连通知淹没会话历史

---

## 🛠 重要 PR 进展

> **说明**：过去 24 小时仅有 1 条 PR 更新，且内容非常态：
>
> ### [#3817](https://github.com/github/copilot-cli/pull/3817) — "kCreate '#'"
> 提交者：@edge500 ｜ 状态：OPEN
> 摘要极简（"aquellos"），创建于 6 月但本日内有更新记录。从命名与描述判断属低质量/误操作 PR，建议维护者复核是否清理。
>
> *今日无实质性代码合并或功能推进。*

---

## 📈 功能需求趋势

从过去 24 小时活跃议题归纳，社区诉求集中在以下方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **权限与安全精细化** | #179、#1973、#2075（plan mode 仍可编辑） | 🔥🔥🔥🔥🔥 |
| **模型灵活性（BYOK / 本地 / 多模型切换）** | #3709、#4950、#3195、#4623 | 🔥🔥🔥🔥 |
| **会话与上下文管理** | #2627、#1571、#3703（压缩丢失/破坏指令）、#1697（分叉） | 🔥🔥🔥🔥 |
| **多任务/工作流（worktree、入队控制）** | #1613、#1857 | 🔥🔥🔥 |
| **桌面端稳定性** | #4905、#4924、#4907 | 🔥🔥🔥 |
| **终端渲染 / UX 小修小补** | #2285、#2033（OSC 8 链接）、#4707（滚动条） | 🔥🔥 |
| **插件生态** | #2753 | 🔥🔥 |

---

## 💡 开发者关注点总结

1. **"安全 + 自动化"的两难**：开发者既想要 `allow-all` 的丝滑体验，又怕破坏性操作误执行，因此对**白名单 / 全局策略 / plan-mode 严格性**有强烈需求（#179、#1973、#2075）。

2. **上下文窗口即成本**：20.5K tokens 的系统提示与 8.5K tokens 的工具定义几乎是所有长上下文用户的痛点，#2627 与 #1571/#3703 共同指向**压缩策略与提示可裁剪性**。

3. **BYOK 不再是"高级用户玩具"**：随着本地小模型（qwen、vLLM、Ollama 风格）和企业自建 gateway 增多，CLI 对**自定义 provider 的参数透传、模型切换、流式事件**的支持短板集中爆发（#4950、#3195、#4623、#3709）。

4. **桌面端正在追赶 CLI**：Desktop App 1.1.x 的会话死亡、credential 失效、worktree 中 agent 未发现等问题集中浮现，说明桌面端作为新形态产品尚需打磨（#4905、#4924、#4907）。

5. **"撤销"与"中断"是基本期望**：#1857（取消入队消息）、#2075（plan mode 越权编辑）反映出开发者把 CLI 当作"可控 agent"使用，对**可控性、可中断性**提出与 IDE 同等的要求。

6. **小问题累积成体验摩擦**：复制带不可见字符、滚动条被一起复制、OSC 8 链接未渲染、MCP 重连消息污染历史——这些"小 Bug"虽然不致命但**频繁触发**，会显著拉低日常使用满意度。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) | 采样窗口：过去 24 小时 | Issues 共 50 条更新，PR 共 1 条更新*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for the OpenCode community daily report for 2026-09-28.

Key observations:
1. v1.18.33 was released with bugfixes
2. Multiple issues and PRs focused on V2 (version 2.0) features and stability
3. Several issues around TUI bugs, compaction issues, provider/model issues
4. Notable themes: V2 migration issues, TUI problems, provider integration bugs, session/inbox reliability

Let me categorize the issues by importance and themes:

**High-priority issues (most comments/reactions):**
- #17648 (9 comments, 6👍) - Infinite retry loop in session processor - CRITICAL reliability issue
- #42950 (8 comments) - Socket disconnects with big-pickle model
- #34697 (8 comments) - RTL translation support - CLOSED
- #38851 (6 comments, 2👍) - TUI compaction triggers too early
- #45856 (5 comments) - V2 serve Basic Auth 401
- #28639 (5 comments, 3👍) - .exe suffix leaks - CLOSED
- #44094 (4 comments, 2👍) - V2 compaction ignores agents.compaction.model
- #51759 (4 comments) - Project-level tabs feature
- #48520 (3 comments) - TUI console output corruption
- #50969 (3 comments) - Model favorites toggle broken in V2

**Trending features/themes:**
- V2 migration issues (compaction, models dialog, serve auth)
- TUI improvements (paste handling, links, console output)
- Provider/model reliability (OpenRouter, Cloudflare, Gemini, Anthropic)
- Session/inbox reliability
- Mobile UI fixes
- LSP enhancements
- Stats/leaderboard features

**Key PRs:**
- #51775 - LSP symbol operations
- #51765 - Anthropic system updates deferral
- #51757 - TUI hyperlink click handling
- #51768 - Gemini thought signatures on OpenAI Chat
- #51760 - Model favorites in V2
- #51771 - Mobile question controls
- #51751 - Retry failed session wakes
- #51767 - Record overflow as compaction reason
- #51766 - Paste placeholder expansion
- #51769 - Background shell vs interrupted command

Let me write the report in Chinese, professionally structured.</think>

# OpenCode 社区动态日报

**日期：2026-09-28**

---

## 一、今日速览

今日社区最显著的动态是 **v1.18.33 维护版本发布**，重点修复了 Cloudflare AI Gateway 超时、MCP 浏览器启动失败、Gemini 思维签名处理等关键问题。V2 内核（2.0 beta）的稳定性仍是社区焦点，多个高优先级 Issue 涉及会话处理器无限重试、compaction 忽略配置模型、Anthropic/OpenRouter 缓存策略失效等。同时，LSP 工具能力扩展与移动端 UI 适配也在持续推进。

---

## 二、版本发布

### v1.18.33（Core Bugfixes）

- **Cloudflare AI Gateway**：响应与流式超时配置现已生效（@danlapid）
- **MCP 浏览器启动失败**：启动器立即退出时，错误会显式上报
- **Debug 配置输出**：自动脱敏凭据与敏感请求头
- **Gemini 思维签名**：相关处理逻辑修复（详情见 PR）

🔗 https://github.com/anomalyco/opencode/releases/tag/v1.18.33

---

## 三、社区热点 Issues

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|----------|
| 1 | [#17648](https://github.com/anomalyco/opencode/issues/17648) **会话处理器无限指数退避重试** | 无最大重试次数、无熔断器，遇到瞬时错误（Copilot API）会陷入死循环 | 9 评论 / 6 👍 — 关键可靠性问题 |
| 2 | [#42950](https://github.com/anomalyco/opencode/issues/42950) **big-pickle 模型 socket 静默断开** | opencode 内置 provider 的 `big-pickle` 模型流式中断时 UI 无感知，仅日志中反复出现 `Aborted` | 8 评论 |
| 3 | [#38851](https://github.com/anomalyco/opencode/issues/38851) **TUI compaction 阈值过低（30–35%）** | 使用 `gpt-5.6-sol` 时上下文远未耗尽即触发 compaction | 6 评论 / 2 👍 |
| 4 | [#45856](https://github.com/anomalyco/opencode/issues/45856) **V2 serve Basic Auth 始终 401** | 配置 `OPENCODE_SERVER_USERNAME/PASSWORD` 后浏览器反复弹出登录框 | 5 评论 |
| 5 | [#44094](https://github.com/anomalyco/opencode/issues/44094) **V2 忽略 `agents.compaction.model`** | 8 月"共享 model request"重构后，手动 compaction 强制使用会话当前模型，配置静默失效 | 4 评论 / 2 👍 |
| 6 | [#51759](https://github.com/anomalyco/opencode/issues/51759) **项目级 Tab + 左侧会话列表** | 期望按项目分组会话，避免不同项目混排在顶部 | 4 评论 |
| 7 | [#48520](https://github.com/anomalyco/opencode/issues/48520) **TUI library console 输出污染 alternate screen** | Ajv/MCP 插件的 `console.*` 直接写入终端，破坏 TUI 显示 | 3 评论 |
| 8 | [#50969](https://github.com/anomalyco/opencode/issues/50969) **V2 /models 对话框模型收藏失效** | V1→V2 兼容性问题，后端收藏仍存在但 UI 无法切换 | 3 评论 |
| 9 | [#51764](https://github.com/anomalyco/opencode/issues/51764) **Anthropic 系统更新拒绝可恢复的工具历史** | 本地工具结果存在时仍报 `system_update` 错误；恢复历史中 `normalizeToolHistory` 修复的调用也被拒绝 | 2 评论 |
| 10 | [#51770](https://github.com/anomalyco/opencode/issues/51770) **V2 Web 移动端问题控件被裁剪** | 长问题或多选项把 Next/Submit 推至视口外，iPhone 15 Pro（393×852）可复现 | 2 评论 |

**总体观察**：超过 60% 的活跃 Issue 标注为 V2 相关，迁移期的功能回归和重构副作用仍是最大痛点；会话、compaction、模型路由构成三大问题域。

---

## 四、重要 PR 进展

| # | PR | 类型 | 摘要 |
|---|----|------|------|
| 1 | [#51775](https://github.com/anomalyco/opencode/pull/51775) **LSP 符号操作扩展** | Feature | 新增 `symbols`/`members`/`refs`/`callers`/`implementations`/`rename`/`types`，覆盖标准 LSP 请求 |
| 2 | [#51765](https://github.com/anomalyco/opencode/pull/51765) **延迟 Anthropic 系统更新至本地工具结果后** | Bugfix | 修复 V2 中系统更新插入位置导致的工具历史拒绝，配套修复中断恢复场景 |
| 3 | [#51768](https://github.com/anomalyco/opencode/pull/51768) **保留 Gemini 思维签名（OpenAI Chat 兼容层）** | Bugfix | 解决重放并行工具调用批次时缺失 `thought_signature` 报 400 的问题（修复 #50833） |
| 4 | [#51757](https://github.com/anomalyco/opencode/pull/51757) **TUI 链接修饰键点击交由终端处理** | Bugfix | 防止 OSC 8 链接被重复打开，避免双标签页 |
| 5 | [#51760](https://github.com/anomalyco/opencode/pull/51760) **V2 模型收藏无需连接集成** | Bugfix | 修正 `useConnected()` 重新定义后的对话框门控逻辑（修复 #50969） |
| 6 | [#51751](https://github.com/anomalyco/opencode/pull/51751) **重试失败的会话唤醒** | Bugfix | 防止提示被持久接纳后因 wake 失败而"搁浅"在 inbox |
| 7 | [#51767](https://github.com/anomalyco/opencode/pull/51767) **记录 overflow 作为 compaction 原因** | Feature | 区分提供商拒绝触发的 `auto` 与本地大小检查，扩展 schema 支持新原因枚举 |
| 8 | [#51771](https://github.com/anomalyco/opencode/pull/51771) **移动端问题控件可见性修复** | Bugfix | 修复高度计算回退到全视口高度导致按钮被遮盖（修复 #51770） |
| 9 | [#51766](https://github.com/anomalyco/opencode/pull/51766) **粘贴占位符二次粘贴展开** | Feature | 在 `[Pasted ~N lines]` 上再次粘贴时恢复原文，对齐 CLI agent 通用行为 |
| 10 | [#51774](https://github.com/anomalyco/opencode/pull/51774) **Stats 每日/每周模型排行** | Feature | Data leaderboard 新增日/周切换，未知 provider 使用通用图标 |

---

## 五、功能需求趋势

通过对近 50 条活跃 Issue 的语义聚类，社区需求集中在以下方向：

### 1. **V2 稳定性与功能补齐**（占比约 40%）
- 2.0 serve 鉴权、模型对话框收藏、compaction 模型配置
- LSP/Formatter 服务 V2 移植（#38528）
- V1→V2 兼容性回归修复

### 2. **会话与异步可靠性**
- 重试上限、熔断器、PID 复用防护（#17648、#51744、#51751）
- Inbox 入队与执行 claim 之间的崩溃恢复（#51746）
- Compaction 摘要完整性校验（#51747）

### 3. **Provider / 模型生态**
- OpenRouter 上 Anthropic 模型 prompt caching 默认开启（#51726）
- Gemini 思维签名跨协议兼容（#51768）
- models.dev 目录未生效问题（#51739）
- DeepSeek thinking + reasoning_effort 组合请求 400（#48180）

### 4. **TUI / Web UI 体验**
- 链接点击、粘贴占位、控制台输出隔离
- 移动端问题工具可用性
- 项目级 Tab 组织

### 5. **生态扩展**
- 跨项目会话搜索 TUI（PR #50083）
- Stats 模型排行（#51774）
- 插件 API：账户余额查询（#51754）

---

## 六、开发者关注点

### 🔥 高频痛点

1. **可靠性盲区**：无限重试（#17648）、socket 静默断开（#42950）、stale PID 信号错杀（#51744）、硬链接失败静默（#51745）——社区对"看似成功但实际失败"场景容忍度极低。

2. **V2 迁移摩擦**：配置项静默失效（#44094）、UI 控件消失（#50969）、鉴权失效（#45856）——重构带来的语义变化未在变更日志中充分说明。

3. **Compaction 语义模糊**：阈值错误（#38851）、配置被忽略（#44094）、不完整摘要被接受（#51747）、未区分 overflow 原因（#51767）——compaction 是上下文工程核心，亟需统一可观测语义。

### 💡 高频需求

- **可观测性**：会话/Prompt 生命周期失败时的错误显式化
- **跨会话项目视图**：会话组织方式仍偏单层
- **模型缓存策略**：Anthropic 在 OpenRouter 上的缓存默认行为期望更明确
- **CLI 安装/升级可靠性**：Windows 跨卷硬链接、background service 端口冲突（#51772）

---

*数据来源：GitHub anomalyco/opencode · 报告生成时间：2026-09-28*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese-language daily community report for jcode based on the GitHub data provided. Let me analyze the data carefully:

**Release:**
- v0.89.0: Built-in voice input, agent applets, and a pinned session status line
  - Voice input for CLI (macOS/Windows native mic capture, coding-aware dictation)
  - Session status line (directory, branch, git status, context, provider, model)

**Issues (13 updated in past 24h):**
- #1411 [OPEN] Epic: viewport state in model coordinates, refactor (XL)
- #1533 [CLOSED] test(tui): ambient refresh cost test hermetic
- #1532 [CLOSED] test(tui): onboarding telemetry tests
- #1531 [CLOSED] test: benchmark_resume_loading partial timings
- #1530 [CLOSED] test(tui): alignment hint fixture platform-rendered alt chord
- #1329 [CLOSED, duplicate] fix(antigravity): 429 RESOURCE_EXHAUSTED
- #1529 [OPEN] TUI: mermaid/math render on halfblocks inside herdr-webui panes
- #1520 [OPEN] Configurable User-Agent and global HTTP header overrides
- #1524 [CLOSED] Windows: is_socket_path and remove_socket panic
- #1522 [CLOSED] OpenRouter: images clamped to text
- #1517 [CLOSED] MCP: stdio server exit before initialize hangs
- #1547 [OPEN] Add Tsubasa OpenAI-compatible profile
- #1535 [CLOSED] server reload exits 0 when new server never becomes ready

**PRs (19 updated in past 24h):**
- #1548 [OPEN] feat: Tsubasa OpenAI-compatible login profile
- #1546 [CLOSED] fix(antigravity): daily-cloudcode-pa endpoint
- #1545 [CLOSED] test(reload): server reload exit statuses
- #1544 [CLOSED] fix(mcp): avoid startup lock stalls
- #1542 [CLOSED] test(tui): hermetic ambient refresh
- #1541 [CLOSED] fix(test): drop poisoned session-list cache
- #1540 [CLOSED] test(tui): platform-rendered alt chord
- #1537 [CLOSED] test(tui): onboarding telemetry tests
- #1536 [CLOSED] fix(reload): exit non-zero when new server never ready
- #1525 [CLOSED] transport: probe Windows named pipes without Tokio reactor
- #1523 [CLOSED] openrouter: honour input modalities
- #1518 [CLOSED] fix(mcp): fail pending requests when stdio server exits
- #1511 [OPEN] fix(provider): fail fast on content-filter blocks
- #1507 [OPEN] feat(openai): Daybreak cyber access program
- #1505 [OPEN] feat(openai): max_context_window
- #1538 [OPEN] fix(tui): pane-safe glyphs for mermaid/math
- #1534 [OPEN] fix(auth): fallback to valid sibling OpenAI account
- #1543 [OPEN] refactor(tui): one viewport representation
- #1539 [CLOSED] test(tui): platform-rendered alt chord (duplicate of #1540?)

Wait, #1539 description says "Fixes #1529" and is about pane-safe glyphs, while #1540 is about platform-rendered alt chord. These are different issues. Let me re-read.

#1539 description: "Fixes #1529 herdr-webui panes kept mermaid diagrams and math blocks on the Kitty protocol..."
#1538 also fixes #1529 with similar description.

Actually #1538 and #1539 both reference #1529. Maybe one is a duplicate/follow-up. Let me note that.

Now let me think about the structure and what to write.

**Today Overview:**
- v0.89.0 released with voice input and agent applets
- Heavy test infrastructure cleanup (multiple closed issues)
- Active provider ecosystem work (Antigravity, OpenRouter, OpenAI, Tsubasa)

**Important issues to highlight (10):**
1. #1411 - Epic viewport state refactor (XL refactor)
2. #1529 - TUI mermaid/math render in herdr-webui panes
3. #1520 - Configurable User-Agent and HTTP headers (enterprise use case)
4. #1547 - Tsubasa profile request
5. #1329 - Antigravity 429 (consumer accounts)
6. #1524 - Windows named pipe panic
7. #1522 - OpenRouter images clamped to text
8. #1517 - MCP stdio server hangs
9. #1535 - server reload exit 0 bug
10. #1411 already included... let me pick #1411 first, and #1529 already counted. Let me adjust:
1. #1411 - Viewport state refactor (XL)
2. #1520 - Configurable User-Agent (enterprise)
3. #1529 - TUI mermaid/math herdr-webui
4. #1547 - Tsubasa profile
5. #1329 - Antigravity 429
6. #1524 - Windows named pipe panic
7. #1522 - OpenRouter image clamp
8. #1517 - MCP stdio server hang
9. #1535 - server reload exit 0
10. #1411 - too long, replace with one of the tests? Actually #1533, #1532, #1531, #1530 are all test infrastructure. Let me pick one - #1533 ambient refresh cost test.

Actually let me reconsider. The issues closed with PRs are interesting too. Let me pick issues that reflect ongoing concerns:

1. #1411 - Epic viewport state refactor (active, XL)
2. #1520 - Configurable User-Agent and HTTP headers (enterprise use case)
3. #1529 - TUI mermaid/math render in herdr-webui panes
4. #1547 - Tsubasa profile (new provider request)
5. #1329 - Antigravity 429 RESOURCE_EXHAUSTED (now fixed, illustrates bug class)
6. #1524 - Windows named pipe panic
7. #1522 - OpenRouter images clamped to text
8. #1517 - MCP stdio server hangs (now fixed)
9. #1535 - server reload exit 0 (now fixed)
10. #1411 already... let me think. Maybe #1533 test infrastructure? Or maybe focus on open issues.

Let me select the most important:
1. #1411 - Viewport refactor epic (active)
2. #1520 - User-Agent / HTTP header config (open)
3. #1529 - herdr-webui TUI render (open)
4. #1547 - Tsubasa profile (open)
5. #1329 - Antigravity 429 (closed duplicate, but shows provider bug class)
6. #1524 - Windows pipe panic (closed, but security/stability)
7. #1522 - OpenRouter image clamp (closed, data integrity)
8. #1517 - MCP stdio hang (closed, blocking behavior)
9. #1535 - server reload exit 0 (closed, false-positive semantics)
10. #1511 - content filter / 429 retry (this is a PR, not issue - let me skip)

Hmm, let me also include #1506? It's not in the list. Let me check - I have 13 issues, 19 PRs.

Let me re-pick:
1. #1411 - Epic viewport refactor
2. #1520 - Configurable User-Agent
3. #1529 - TUI herdr-webui glyphs
4. #1547 - Tsubasa profile
5. #1329 - Antigravity 429
6. #1524 - Windows named pipe panic
7. #1522 - OpenRouter image clamp
8. #1517 - MCP stdio hang
9. #1535 - server reload semantics
10. #1533 - test hermeticity (representative of test quality push)

OK that works.

**Important PRs (10):**
1. #1548 - Tsubasa profile
2. #1546 - Antigravity endpoint fix
3. #1544 - MCP startup lock fix
4. #1542 - Hermetic ambient refresh test
5. #1541 - Session-list cache poisoning fix
6. #1540 - Platform-rendered alt chord
7. #1537 - Onboarding telemetry isolation
8. #1536 - Server reload exit code
9. #1525 - Windows named pipe probe
10. #1523 - OpenRouter input modalities

Let me make sure these are 10 important PRs. Actually I could also include #1518, #1511, #1507, #1505, #1534, #1538, #1543.

Let me pick the most impactful:
1. #1548 - Tsubasa profile (new provider)
2. #1546 - Antigravity endpoint (consumer accounts)
3. #1544 - MCP startup locks (manager stalls)
4. #1541 - Session-list cache poisoning (benchmark reliability)
5. #1542 - Hermetic ambient refresh test
6. #1540 - Platform-rendered alt chord (cross-platform correctness)
7. #1537 - Onboarding telemetry isolation
8. #1536 - Server reload exit codes (correctness)
9. #1525 - Windows named pipe without Tokio reactor
10. #1523 - OpenRouter input modalities

**Feature Trends:**
- Test infrastructure quality (multiple test hermeticity PRs)
- Provider expansion (Tsubasa, OpenAI cyber access, max_context_window)
- Cross-platform correctness (Windows, macOS, Linux alt chords)
- HTTP/gateway customization (User-Agent, headers)
- TUI robustness (viewport refactor, glyph rendering)

**Developer Concerns:**
- Cross-platform test reliability
- Provider-specific quirks (Antigravity 429, OpenRouter image clamping)
- MCP server resilience
- Windows platform support
- TUI rendering across different terminals/web panes

Let me write the report in Chinese now.

Actually let me make sure about dates. The user said today is 2026-09-28. The issues and PRs are dated 2026-09-26 to 2026-09-28. So this is today's report.

Let me write a clean Chinese report now.</think>

# jcode 社区动态日报 · 2026-09-28

## 📌 今日速览

v0.89.0 正式发布，**内置语音输入**、**Agent 小程序**与**常驻会话状态栏**三大特性齐上线；社区近 24 小时高强度推进了 **TUI 测试隔离与回归修复**（约 7 个 PR 集中合并），同时多家模型供应商的接入与修复齐头并进——Antigravity 消费账户 429、OpenRouter 图片被夹断为文本、Windows 命名管道 panic 等老问题全部关闭。

---

## 🚀 版本发布

### v0.89.0 — Built-in voice input, agent applets, and a pinned session status line

- **内置语音输入**：CLI 直接调用麦克风（macOS / Windows 原生捕获），并内置编程领域词典
- **Agent 小程序**：可挂载的轻量 Agent 单元（applets）
- **常驻会话状态栏**：钉选显示目录、Git 分支、Git 状态、上下文用量、Provider、模型
- 🔗 [Release v0.89.0](https://github.com/1jehuang/jcode/releases/tag/v0.89.0)

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 价值点 |
|---|---|---|---|
| [#1411](https://github.com/1jehuang/jcode/issues/1411) | Epic：viewport 状态改为模型坐标，删除行索引补偿 | OPEN · XL | 长期重构，会消除一类定位 bug 并大幅净减代码；当前已有 6 条评论跟进 |
| [#1520](https://github.com/1jehuang/jcode/issues/1520) | 可配置 User-Agent 与 Provider 全局 HTTP Header 覆盖 | OPEN · 待决策 | 企业网关/代理按 UA 过滤、需附加租户 ID 的场景刚需，关乎生产部署 |
| [#1529](https://github.com/1jehuang/jcode/issues/1529) | TUI：在 herdr-webui 面板内用 pane-safe 字形渲染 mermaid / 数学块 | OPEN | 浏览器面板下占位字符退化为私有区垃圾字符，影响所有嵌入文档 |
| [#1547](https://github.com/1jehuang/jcode/issues/1547) | 新增命名 Tsubasa OpenAI 兼容 profile | OPEN | 公共别名 `tsubasa-pro` / `tsubasa-fast`（32K 上下文）需要官方支持以避免手写 |
| [#1329](https://github.com/1jehuang/jcode/issues/1329) | Antigravity：消费账户因硬编码端点返回 429 RESOURCE_EXHAUSTED | CLOSED · duplicate | 揭示 Provider 端点配置缺乏灵活性，已由 [#1546](https://github.com/1jehuang/jcode/pull/1546) 修复 |
| [#1524](https://github.com/1jehuang/jcode/issues/1524) | Windows：`is_socket_path` / `remove_socket` 在普通线程 panic | CLOSED | 命名管道探测依赖了 tokio reactor，对 Windows 守护进程生命周期有切实影响 |
| [#1522](https://github.com/1jehuang/jcode/issues/1522) | OpenRouter：目录声明支持图片但被夹断为文本 | CLOSED | `architecture.input_modalities` 在反序列化时被丢弃，会静默丢图 |
| [#1517](https://github.com/1jehuang/jcode/issues/1517) | MCP：stdio server 在 `initialize` 前退出导致连接挂死 `timeout_secs` | CLOSED | `mcp list` 工具被阻塞数小时，链路可靠性问题 |
| [#1535](https://github.com/1jehuang/jcode/issues/1535) | `server reload` 在新 server 未就绪时仍返回 0 | CLOSED | 升级静默失败、CI 无法区分成功与"未生效"，影响运维脚本 |
| [#1533](https://github.com/1jehuang/jcode/issues/1533) | test(tui)：环境刷新开销测试非 hermetic | CLOSED | 反映近期一波"测试夹具去环境耦合"的整体动作，质控信号 |

---

## 🛠 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#1548](https://github.com/1jehuang/jcode/pull/1548) | feat：新增 Tsubasa OpenAI 兼容 login profile | OPEN | 复用 OpenAI 兼容运行时，绑定 `TSUBASA_API_KEY`，双别名均限定 32K 上下文，关闭 [#1547](https://github.com/1jehuang/jcode/issues/1547) |
| [#1546](https://github.com/1jehuang/jcode/pull/1546) | fix(antigravity)：切换至 `daily-cloudcode-pa` 端点修复消费账户 429 | CLOSED | 与官方 Antigravity IDE 走同一端点，根除 gmail 账户配额误判 |
| [#1544](https://github.com/1jehuang/jcode/pull/1544) | fix(mcp)：避免启动锁阻塞与重复 spawn | CLOSED | 允许握手期间并发读取 MCP 管理状态，并引入 per-server in-flight 协调，61 项 MCP 测试串行通过 |
| [#1541](https://github.com/1jehuang/jcode/pull/1541) | fix(test)：resume 基准前清空被污染的 session-list 缓存 | CLOSED | `benchmark_resume_loading` 在并发下间歇失败，现已稳定 |
| [#1542](https://github.com/1jehuang/jcode/pull/1542) | test(tui)：ambient refresh 成本测试 hermetic + panic-safe env 还原 | CLOSED | 防止中间断言 panic 后污染后续测试的进程环境 |
| [#1540](https://github.com/1jehuang/jcode/pull/1540) | test(tui)：对齐提示用平台渲染的 alt chord 断言 | CLOSED | macOS（⌥+X）vs Linux/Windows（Alt+X）不再用错字符，让跨平台提示文本断言稳定 |
| [#1537](https://github.com/1jehuang/jcode/pull/1537) | test(tui)：onboarding 遥测测试与本机 opt-out 环境隔离 | CLOSED | 关闭 [#1532](https://github.com/1jehuang/jcode/issues/1532)，开发者本机关掉遥测后测试不再红 |
| [#1536](https://github.com/1jehuang/jcode/pull/1536) | fix(reload)：server 未就绪时返回非零退出码 | CLOSED | `already_current` 与 `handoff_ready:false` 现在都会非零退出，便于 CI 与脚本判断 |
| [#1525](https://github.com/1jehuang/jcode/pull/1525) | transport：Windows 命名管道探测不再依赖 Tokio reactor | CLOSED | 关闭 [#1524](https://github.com/1jehuang/jcode/issues/1524)，同步接口真正同步 |
| [#1523](https://github.com/1jehuang/jcode/pull/1523) | openrouter：尊重模型目录声明的输入模态 | CLOSED | 关闭 [#1522](https://github.com/1jehuang/jcode/issues/1522)，catalog 中 `input_modalities` 真正落到 `supports_image_input()` |

> 此外另有值得关注但本次未入选的开放 PR：[#1511](https://github.com/1jehuang/jcode/pull/1511) Provider 限流与内容过滤快速失败、[#1507](https://github.com/1jehuang/jcode/pull/1507) OpenAI Daybreak cyber access program、[#1505](https://github.com/1jehuang/jcode/pull/1505) 启用 Codex catalog 的 `max_context_window`、[#1534](https://github.com/1jehuang/jcode/pull/1534) OpenAI 多账户 fallback、[#1543](https://github.com/1jehuang/jcode/pull/1543) TUI viewport 单表示重构（Epic #1411 第 6a 阶段）、[#1538](https://github.com/1jehuang/jcode/pull/1538) herdr-webui 内 mermaid/math pane-safe 字形。

---

## 📈 功能需求趋势

1. **测试基线卫生（最强信号）**——单日内 5+ 个 PR 集中处理"测试夹具非 hermetic / 平台分支字符断言 / 并行缓存污染"，表明项目正在系统性地把 CI 推进到

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily report for the pi community based on GitHub data. Let me analyze the data carefully.

The data is for 2026-09-28, from github.com/earendil-works/pi (which appears to be a coding agent tool similar to Claude Code).

Let me organize the information:

**No releases in the past 24 hours**

**Issues (26 total, updated in past 24 hours)**:
Let me categorize them:

OPEN Issues (still active):
- #7739 - Startup-time budget targeting jcode-comparable latency (10 comments, 0 likes)
- #8810 - Extension-registered providers: fresh sessions ignore defaultProvider/defaultModel (7 comments, 2 likes)
- #10033 - Compaction prompt includes all thinking text, exceeds context window (6 comments, 1 like)
- #9974 - pi mishandles Responses API tool calls from llama.cpp (6 comments, 0 likes)
- #7658 - Extension API for persisting API-key credentials (5 comments, 0 likes)
- #9905 - Anthropic: thinking.display always sent as "summarized" (5 comments, 0 likes)
- #9946 - CMD mode (!) ignores outputPad setting (4 comments, 0 likes)
- #9010 - Context compaction causes memory spikes with local LLMs (3 comments, 0 likes)
- #9408 - Remember plan-level model errors and surface them in /model (1 comment, 0 likes)

CLOSED Issues:
- #10031 - Pi stuck in "Working..." when thinking stopped with ESC (16 comments, 2 likes) - CLOSED
- #10019 - Anthropic subscription requests hang (3 comments, 0 likes) - CLOSED
- #10112 - Allow ModelRuntime.create() to accept explicit authContext (2 comments) - CLOSED
- #10092 - Compaction crashes footer (2 comments) - CLOSED
- #10105 - Session creation re-loads all extensions (2 comments) - CLOSED
- #10104 - Session creation latency (2 comments) - CLOSED
- #10101 - AGENTS.md read but not injected (2 comments) - CLOSED
- #9735 - Retry classifier misses premature stream endings (2 comments) - CLOSED
- #10114 - Darwin multiplexer copy skips OSC 52 (1 comment) - CLOSED
- #10111 - Allow themes to opt out of bold styling (1 comment) - CLOSED
- #10110 - TTY stdin read EIO as uncaught crash (1 comment) - CLOSED
- #10109 - auto-mode bash screen denies benign token-echo (1 comment) - CLOSED
- #10108 - Keep Fireworks default in catalog (1 comment) - CLOSED
- #10106 - Switching to openai-responses model 400s with colliding tool-call IDs (1 comment) - CLOSED
- #10103 - Preserve large pastes in /bug external editor (1 comment) - CLOSED
- #10102 - Render cost per frame grows with transcript length (1 comment) - CLOSED
- #10097 - User keeps resending same message (1 comment) - CLOSED

**Pull Requests (5 total)**:
- #10113 - Keep useful lines when shell output is tail-truncated (CLOSED)
- #10040 - feat(coding-agent): Codemode and MCP (OPEN) - by mitsuhiko (creator/maintainer likely)
- #8572 - feat(ai): amazon bedrock mantle (OPEN)
- #10100 - fix(ai): preserve signature-only reasoning details deltas (CLOSED)
- #10099 - First Git experiment homework (CLOSED) - looks like spam/test

Now let me think about the most important issues and PRs to highlight.

**Key Themes I see:**
1. **Performance issues** - Multiple issues about latency, startup time, session creation taking 15s → 140s+
2. **Compaction/memory issues** - Context compaction problems, memory spikes, thinking text in compaction
3. **Provider compatibility** - llama.cpp tool call handling, openai-responses collisions, Anthropic issues
4. **Extension API gaps** - Auth credentials, defaultProvider handling
5. **MCP/Codemode** - Major new feature in PR #10040 by mitsuhiko
6. **Various UX/UI bugs** - Output pad, theme bold, paste handling, etc.

For top 10 issues, I'll prioritize:
1. #10031 - Most discussed (16 comments, 2 likes) - though CLOSED
2. #7739 - Startup performance benchmark
3. #8810 - Extension provider registration bug
4. #10033 - Compaction context overflow
5. #9974 - llama.cpp tool calls
6. #7658 - Auth credentials API
7. #9905 - Anthropic thinking display
8. #9010 - Compaction memory spikes
9. #10019 - Anthropic subscription hang (CLOSED)
10. #9408 - Plan-level error UI

For top 10 PRs - only 5 exist, so I'll just include all 5.

Actually let me re-read - the user asks for "10 most important PRs" but there are only 5. I should mention there are only 5 and cover all of them.

Let me write the report now in Chinese.</think>

# Pi 社区动态日报 · 2026-09-28

## 今日速览

今日 pi 仓库活跃度较高，24 小时内共更新 26 个 Issue 与 5 个 PR，其中绝大多数 Issue 已被关闭/分流（标签多为 `[untriaged]` 或 `[no-action]`），说明维护团队正在高效处理积压问题。最值得关注的是 **#10031**（ESC 取消思考导致"Working..."卡死，16 条讨论）与 **PR #10040**（mitsuhiko 本人提交的 Codemode + MCP 大型特性合入），以及 **#7739**（启动时间对标 jcode 的性能预算提案）。

## 版本发布

无新版本发布。

## 社区热点 Issues（Top 10）

1. **[#10031](https://github.com/earendil-works/pi/issues/10031) — Pi 思考被 ESC 打断后偶发卡在"Working..."** [CLOSED]
   - 讨论热度最高（16 条评论、2 👍），自 v0.84.0 起出现，影响多平台。属于典型稳定性问题，关闭标签为 `no-action`，意味着可能是已知限制或暂时搁置。

2. **[#7739](https://github.com/earendil-works/pi/issues/7739) — 设定对标 jcode 的启动时间预算** [OPEN]
   - 涉及启动延迟与内存占用基准测试，是社区对性能基线的系统性诉求，10 条评论反映讨论较深入。

3. **[#8810](https://github.com/earendil-works/pi/issues/8810) — 扩展注册 Provider 时新会话忽略 defaultProvider/defaultModel** [OPEN]
   - 影响通过 `pi.registerProvider()` 自定义 Provider 的用户，2 👍 表示有真实用户痛点；与 #7658 共同构成"扩展 Provider API 不完整"主题。

4. **[#10033](https://github.com/earendil-works/pi/issues/10033) — Compaction prompt 包含全部 thinking 文本导致超出上下文窗口** [OPEN]
   - 影响长会话使用推理模型（如 DeepSeek V4.1）的用户，与 #9010 一起暴露 compaction 模块的整体健壮性问题。

5. **[#9974](https://github.com/earendil-works/pi/issues/9974) — pi 错误处理 llama.cpp 返回的 Responses API 工具调用** [OPEN]
   - 本地 LLM（llama.cpp）用户的重要场景，导致重复/损坏的工具调用执行，影响使用自托管后端的开发者。

6. **[#7658](https://github.com/earendil-works/pi/issues/7658) — 扩展持久化 API Key 凭证的 Extension API** [OPEN]
   - 核心扩展能力缺口：当前扩展无法编程方式写入 `auth.json`，限制了需要动态凭证管理的第三方 Provider 集成。

7. **[#9905](https://github.com/earendil-works/pi/issues/9905) — Anthropic 上 `thinking.display` 总是发送 `"summarized"`** [OPEN]
   - 暴露 Provider 适配层默认值硬编码问题，类型仅支持 `"summarized" | "omitted"`，缺少 CLI 维度控制。

8. **[#9010](https://github.com/earendil-works/pi/issues/9010) — Context Compaction 引发本地 LLM 内存峰值** [OPEN]
   - 指出 compaction 在主进程中复制多次对话字符串，对于本地模型场景尤其严重；与 #10033 同属 compaction 子系统优化议题。

9. **[#10019](https://github.com/earendil-works/pi/issues/10019) — Anthropic 订阅请求在 :00/:30 UTC 挂起** [CLOSED]
   - 流式响应阶段出现"200 + pings + 无 message_start"现象，影响使用 Anthropic 订阅的稳定性，与 #10031 同类问题。

10. **[#9408](https://github.com/earendil-works/pi/issues/9408) — 在 /model 中记录并展示计划级模型错误** [OPEN]
    - 提案对 429/404/401 等配额与计划错误按 model × credential 维度做持久标记，便于用户在 `/model` 选择时查看，避免反复试错。

## 重要 PR 进展（共 5 条，全数列出）

1. **[#10040](https://github.com/earendil-works/pi/pull/10040) — feat(coding-agent): Codemode 与 MCP** [OPEN]
   - 由核心维护者 mitsuhiko 提交的大型特性 PR，新增 Codemode（更适合 Jev 等模型执行沙箱）和 MCP 支持；规模较大、单 PR 合入全量功能。

2. **[#8572](https://github.com/earendil-works/pi/pull/8572) — feat(ai): Amazon Bedrock Mantle** [OPEN]
   - 解决 Amazon 通过新 Mantle API 暴露的 GPT-5.x 系列模型，目前因 Converse 路由失败而无法使用；等待 API key 权限进行 e2e 测试。

3. **[#10113](https://github.com/earendil-works/pi/pull/10113) — 保留 shell 截断尾部时仍相关的上文行** [CLOSED]
   - 修复 bash/PowerShell 截断（2000 行或 50KB）后，尾部之外的相关行未被包含进工具结果；通过可选的 `SUPERCOMPRESS_API_KEY` 服务完成长上下文回填。

4. **[#10100](https://github.com/earendil-works/pi/pull/10100) — fix(ai): 保留仅含 signature 的 reasoning_details delta** [CLOSED]
   - 修复 OpenRouter 上 Claude 推理签名被丢弃的回归：`isOpenAIReasoningDetail` 因要求 `text` 为字符串导致签名丢失，影响 thinking 块还原。

5. **[#10099](https://github.com/earendil-works/pi/pull/10099) — 第一次 Git 实验作业** [CLOSED]
   - 用户 `jiaqitang-1` 提交的课程作业 PR，已关闭。属低优先级/外部作业类。

## 功能需求趋势

从近期 Issue 提炼，社区关注方向集中在以下几条主线：

- **🚀 性能与启动时间**：#7739（启动预算）、#10104 / #10105（Session 创建延迟从 15s 退化为 140s+，与扩展数量累积相关）。性能是当前最强烈的诉求。
- **🧩 扩展 API 完善**：#7658（auth.json 写入）、#8810（扩展 Provider 的默认模型行为）。现有扩展能力存在缺口，制约第三方 Provider 生态。
- **🧠 Compaction 健壮性**：#10033（thinking 文本溢出）、#9010（内存峰值）、#10092（缺少 cost 字段导致 footer 崩溃）。长会话/本地模型场景下 compaction 是高敏感路径。
- **🤖 新模型/Provider 支持**：#8572（Bedrock Mantle）、#9905（Anthropic thinking.display 可配置）、#9974（llama.cpp Responses API）、#10108（保留 Fireworks 默认）。本地与多云 Provider 并行扩张。
- **🛠️ Codemode / MCP**：#10040 一次性引入 Codemode 与 MCP，标志 Agent 执行模式从工具调用向"代码即工具"演进。
- **🎨 TUI 细节打磨**：#9946（outputPad）、#10111（theme bold 可关闭）、#10103（/bug 外部编辑器保留粘贴内容）、#10102（渲染成本随 transcript 长度增长）。体验类问题逐步被收敛。
- **⚠️ 流式错误处理**：#10019、#9735、#10106、#10097 均涉及流中断、重试判定、跨 Provider 工具调用 ID 冲突等错误恢复路径。

## 开发者关注点（高频痛点）

1. **扩展生态受限**：开发者希望通过扩展动态注册 Provider 与凭证，但 #7658、#8810 暴露 API 不完整；同时 #10105 显示扩展数量增加后 Session 创建成本失控。
2. **错误恢复不够"工程化"**：#10031、#10019、#9735、#10106 都指向同一类问题——遇到边缘流中断、计划级错误、Provider ID 冲突时，pi 的行为要么卡死、要么过早放弃，缺少统一的错误分类与重试/标记机制（#9408 提案正是为此而生）。
3. **本地 LLM 用户体验**：#9974（llama.cpp Responses API）、#9010（本地 LLM compaction 内存）、#10097（llama.cpp 重复发送同一消息）集中反映本地推理场景的兼容性短板。
4. **Anthropic Provider 适配深度不足**：#9905（thinking.display 硬编码）、#10019（订阅挂起）说明对 Anthropic 新特性与边缘行为的覆盖滞后。
5. **小但高频的 UX 摩擦**：#9946、#10103、#10110（TTY EIO 未捕获崩溃）、#10111（theme bold 不可关闭）——单条影响小，但反映出 TUI 层缺乏主题与异常边界的一致性抽象。
6. **Codemode/MCP 的战略转向**：#10040 显示维护者正把 Agent 的核心执行模型从工具链向 Codemode 倾斜，开发者需要关注迁移成本与沙箱安全模型。

> 备注：本日更新的 26 个 Issue 中已有 18 条处于 CLOSED 状态，且多数为 `[untriaged]` 分流标签，建议关注这些 Issue 后续是否被复提或合并到具体功能 PR 中。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
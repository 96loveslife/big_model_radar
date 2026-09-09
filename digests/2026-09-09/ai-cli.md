# AI CLI 工具社区动态日报 2026-09-09

> 生成时间: 2026-09-09 04:04 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparison analysis report based on the daily dynamics of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully analyze the data and structure the report according to the 6 required sections.

Let me extract key metrics from each tool's report:

**Claude Code:**
- Issues: ~50 (top 10 listed, but mentions "过去 24 小时数据")
- PRs: 1 (#63686)
- Releases: 2 (v2.1.266, v2.1.265)
- Themes: Windows compatibility, model behavior, AGENTS.md, Function Hooks, gateway regression

**OpenAI Codex:**
- Issues: 50
- PRs: 20 (Top 10 listed, mentions "本日 PR 高度集中")
- Releases: 2 (rust-v0.154.0-alpha.7, alpha.8)
- Themes: Windows/WSL compatibility, durable rollout projection, credentials, Computer Use

**Gemini CLI:**
- Issues: 30+ (Top 10 listed, mentions "今日 50 条更新 Issue")
- PRs: 12+
- Releases: 3 (v0.61.0-nightly, v0.60.0-preview.0, v0.59.0)
- Themes: Agent reliability, Auto Memory bugs, security (a2a-server auth), cross-platform

**GitHub Copilot CLI:**
- Issues: 44
- PRs: 3
- Releases: 2 (v1.0.84-2, v1.0.84-3)
- Themes: Vim mode (closed), Windows desktop issues, MCP protocol, long-session robustness

**Kimi Code CLI:**
- Issues: 1
- PRs: 1
- Releases: 0
- Themes: VSCode @ file picker (closed), StrReplaceFile UTF-8 fix

**OpenCode:**
- Issues: 30+ (Top 10 listed, mentions 30)
- PRs: 20+ (Top 10 listed)
- Releases: 1 (v1.18.30)
- Themes: Real-time tok/s, v2 API completeness, multi-provider, GPT-6 Astra

**jcode:**
- Issues: 12
- PRs: 1
- Releases: 0
- Themes: CI broken, TUI/harness invisibility, hook extensibility, scheduled tasks

**pi:**
- Issues: 50
- PRs: 16 (Top 10 listed)
- Releases: 0
- Themes: opencode-go session header (cascading), WebSocket reliability, TUI UX, extension API

Now let me identify common themes:

1. **Windows/Desktop compatibility** - Claude Code, OpenAI Codex, GitHub Copilot CLI all have Windows issues
2. **MCP protocol maturity** - Claude Code (OAuth, port), Gemini CLI (>128 tools), Copilot CLI (OAuth, cancellation, registry)
3. **Session/history persistence** - Claude Code (cliSessionId), OpenAI Codex (durable rollout projection), Copilot CLI (resume, orphans)
4. **Long-session robustness** - Copilot CLI (V8 OOM), OpenCode (event table unbounded), OpenAI Codex (projection)
5. **Hook/extensibility** - Claude Code (Function Hooks), Gemini CLI (lifecycle hooks), jcode (pre_request hook), OpenCode (v2 plugin)
6. **Model behavior control** - Claude Code (verbose comments), Gemini CLI (Auto Memory, agent success reports), pi (Sonnet truncated)
7. **Multi-provider routing** - OpenCode (Alibaba, Requesty), pi (Bedrock Mantle, Kimi Coding), Claude Code (gateway)
8. **TUI/Terminal experience** - jcode (Ghostty feedback loop), pi (fullscreen scroll, footer), Copilot CLI (Vim mode)
9. **Security** - Gemini CLI (a2a-server auth), OpenAI Codex (credentials), Copilot CLI (PR #4100)
10. **AGENTS.md standardization** - Claude Code leads, OpenCode mentions v2 plugin skills

Differentiated positioning:
- **Claude Code**: Anthropic ecosystem, agent orchestration focus, gateway/enterprise
- **OpenAI Codex**: Multi-platform (Win/Mac/Linux), Computer Use pioneer, durable rollout
- **Gemini CLI**: Long context, Auto Memory, Google Cloud integration
- **GitHub Copilot CLI**: IDE integration, GitHub workflow, MCP-heavy
- **Kimi Code CLI**: Chinese language/long context, simpler scope
- **OpenCode**: Open-source, multi-provider, plugin ecosystem (v2)
- **jcode**: Performance-focused (startup time), Rust-based, TUI-first
- **pi**: Performance benchmark-focused, TUI quality, extension API maturity

Maturity assessment:
- High activity: Claude Code, OpenAI Codex, Gemini CLI, pi, OpenCode
- Medium activity: GitHub Copilot CLI
- Low activity: Kimi Code CLI, jcode

Let me now write the comparison report in Chinese, professional and concise.

I need to be careful about the data I cite - some numbers are explicitly mentioned, others are top-10 listings where I shouldn't extrapolate. Let me be honest about what's directly stated.

Looking back at the data:
- Claude Code: "过去 24 小时数据" - top 10 listed, no total given
- OpenAI Codex: "50 条更新 Issue" - explicitly stated
- Gemini CLI: "今日 50 条更新 Issue" - explicitly stated
- Copilot CLI: "过去 24 小时的 44 条 Issues" - explicitly stated
- Kimi Code CLI: 1 issue, 1 PR
- OpenCode: "本周最热" - mentions 30 in the report
- jcode: 12 issues, 1 PR
- pi: 50 issues, 16 PRs

Let me write this comparison report now.</think>

# AI CLI 工具横向对比分析报告
**报告日期：2026-09-09** · 覆盖工具：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / jcode / pi

---

## 一、生态全景

当前主流 AI CLI 工具已进入"**协议成熟 + 模型适配 + 长会话鲁棒性**"三方角力的阶段。一线商业产品（Claude Code、Codex、Gemini、Copilot CLI）凭借高频迭代和大体量 Issue 解决推动能力边界，开源派（OpenCode、jcode、pi）则以**多 Provider 路由、TUI 性能、扩展 API 深度**构筑差异化竞争力。值得关注的是，**Windows 跨平台兼容、MCP 协议完善、长会话状态管理**已从单点问题演变为全行业共同挑战——8 个工具中有 5 个今日报告相关 issue，密集程度远超其他议题。

---

## 二、各工具活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Release | 仓库规模定位 |
|------|--------------|-----------|---------|-------------|
| **Claude Code** | 未公开汇总（Top10 涵盖） | 1 | ✅ v2.1.266（hotfix）+ v2.1.265 | 大型商业项目 |
| **OpenAI Codex** | **50** | **20** | ✅ rust-v0.154.0-alpha.7 / alpha.8 | 大型商业项目 |
| **Gemini CLI** | **50** | **12+** | ✅ v0.61.0-nightly / v0.60.0-preview.0 / v0.59.0 | 大型商业项目 |
| **GitHub Copilot CLI** | **44** | 3 | ✅ v1.0.84-2 / v1.0.84-3 | 中型商业项目 |
| **OpenCode** | **30+** | **20+** | ✅ v1.18.30 | 中型开源项目 |
| **pi** | **50** | **16** | ❌ 无 | 小型开源项目（高效率） |
| **jcode** | 12 | 1 | ❌ 无 | 小型项目（CI 阻塞中） |
| **Kimi Code CLI** | 1 | 1 | ❌ 无 | 维护期 |

> **观察**：pi 以小规模团队实现了与商业产品相近的 Issue/PR 比（50/16 ≈ 3.1），仅次于 OpenAI Codex（50/20 = 2.5），体现了高效的开发节奏；而 jcode 受 CI 阻塞影响几乎陷入半停滞。

---

## 三、共同关注的功能方向

### 1. 🪟 Windows / 跨平台兼容性（**6/8 工具**）
- **Claude Code**：Desktop 启动崩溃（#53247）、置顶窗口（#89467）、VSCode 焦点冲突（#88430）
- **OpenAI Codex**：WSL2 项目创建（#41463）、Java NIO Selector（#40902）、Alt+P 崩溃（#42683）、Pet 不响应（#41960）
- **GitHub Copilot CLI**：Local session 创建冲突（#4742、#4756）、任务栏卡死（#4771）
- **Gemini CLI**：NTFS 8.3 短路径（已修复于 v0.61.0-nightly）、Wayland 浏览器失败（#21983）、macOS Seatbelt 崩溃（#29163）
- **jcode**：macOS AppleScript 死代码（#1195）、桌面通知僵尸进程（#1187）
- **pi**：WSL 下 CapsLock 注入（#9362）、Android fork 死锁（#9350）

**诉求共性**：Windows 不再是"能跑就行"，开发者期待与 macOS/Linux 同等的稳定性深度。

### 2. 🔌 MCP 协议深度完善（**4/8 工具**）
- **Claude Code**：MCP OAuth 硬编码端口 53280（#92968）
- **Gemini CLI**：MCP 工具 >128 即报 400（#24246）、a2a-server 鉴权缺失（#29001）
- **GitHub Copilot CLI**：OAuth scope 缺失（#4582）、MCP 取消未发送（#4759）、企业 registry 认证（#3772）、MCP Profiles（#2235）
- **pi**：opencode-go `x-opencode-session` 缺失引发级联问题（#9230、#9290、#9302、#9326）

**诉求共性**：MCP 已从"加分项"变为"基础设施"，认证、取消、多配置、错误恢复成为新刚需。

### 3. 🧠 长会话/状态持久化（**5/8 工具**）
- **Claude Code**：`cliSessionId` 被清空导致会话转录不可用（#92825，data-loss）
- **OpenAI Codex**：durable rollout 投影错位（#41079、#43124）
- **GitHub Copilot CLI**：V8 OOM（#4664）、FileWatch 失控（#4612）、orphaned session 文件夹（#2836）
- **OpenCode**：event 表无界增长至 13GB（#33356）
- **Gemini CLI**：`/compress` 跨会话不持久（#21335）

**诉求共性**：当"长会话"成为常态，会话生命周期管理（resume、压缩、清理、可观测）已成为最大技术债来源。

### 4. 🪝 Hook / 扩展 API 深度（**5/8 工具**）
- **Claude Code**：Function Hooks 中间件式 next 续传模型（#91870）
- **Gemini CLI**：compaction 生命周期 hooks（#1199 提案）
- **OpenCode**：v2 plugin skill 发现（#33896）、part.delete 缺失（#44984）
- **jcode**：pre_request transform hook（#1185）、compaction 生命周期（#1199）
- **pi**：扩展 API 语义一致性（`pi.sendMessage` 绕过事件 #5581）、owner-safe UI 覆写（#9344）

**诉求共性**：观察型 hook 已不够，社区强烈要求"可干预、可重写"的中间件式扩展机制。

### 5. 🤖 多 Provider / 模型路由（**3/8 工具**）
- **OpenCode**：Alibaba（#47874）、Requesty（#16344）、DeepSeek Harness ACP（#48048）、GLM5-2 输出（#36078）
- **pi**：amazon-bedrock-mantle（#5363）、kimi-coding OpenAI Responses（#9338）、opencode-go（#9230）
- **Claude Code**：网关/代理环境配置（v2.1.266 hotfix）

**诉求共性**：单一模型供应商已成过去，路由灵活性与协议适配成为新战场。

### 6. ⌨️ TUI / 终端体验（**4/8 工具**）
- **GitHub Copilot CLI**：Vim 模式终于上线（#13 closed，76 👍）
- **pi**：全屏模式滚动 3× 慢（#9052）、Orca 终端图片协议（#9329）
- **jcode**：Ghostty 42k writes/s 反馈循环（#1184）
- **Gemini CLI**：终端 resize 闪烁（#21924）、交互式 vite 卡死（#22465）

**诉求共性**：终端原生用户的"键盘流"体验已成为差异化指标，跨终端碎片化（Ghostty/Orca/WSL/WezTerm）持续挑战。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级 Agent 编排 | 大型团队 / 复杂任务 / 代理生态 | Anthropic 原生、深 hook、AGENTS.md 标准 |
| **OpenAI Codex** | 全平台 Computer Use | 多模态任务 / Windows 重度用户 | Rust 重构、durable rollout、Computer Use |
| **Gemini CLI** | 长上下文 + 自动记忆 | 研究 / 大型代码库 / Google Cloud | Auto Memory 系统、AST 工具、a2a-server |
| **GitHub Copilot CLI** | GitHub 生态 IDE 集成 | GitHub 用户 / 企业 / IDE 重度 | MCP 重度集成、Vim 模式、桌面端 |
| **OpenCode** | 多 Provider 开源枢纽 | 成本敏感 / 国产模型用户 / 自托管 | v2 plugin 协议、Provider 注册表 |
| **pi** | TUI 极致性能 + 扩展深度 | 终端原住民 / 性能敏感 / 扩展开发者 | 启动时间基准对标 jcode、owner-safe API |
| **jcode** | Rust 性能标杆 | 追求极致延迟的开发者 | 性能基准、swarm 原语、scheduled tasks |
| **Kimi Code CLI** | 中文长上下文 | 中文场景 / 长文档任务 | 当前进入维护期，规模较小 |

> **关键观察**：
> - **商业系**（前 4 个）围绕**模型×IDE×生态**展开，竞合关系明显；
> - **开源系**（后 4 个）则围绕**多 Provider 路由、TUI 性能、扩展 API** 展开同质化竞争；
> - **pi ↔ jcode** 的"启动时间对标"（pi #7739）说明开源派已进入**可量化性能基准**竞争阶段。

---

## 五、社区热度与成熟度

### 🔥 高活跃度（每日 30+ Issues）
- **OpenAI Codex**（50）：成熟期典型特征——Windows 兼容性集中爆发、凭据安全加固、状态机分页回放缺陷
- **Gemini CLI**（50）：仍在快速迭代，多 nightly/preview 同步推送
- **pi**（50）：小团队高产出，Issue/PR 比优秀（3.1），扩展 API 走向成熟
- **Claude Code**：体量大、深度深，单 issue 平均互动量（点赞/评论）领先

### 🟡 中等活跃度
- **GitHub Copilot CLI**（44）：节奏稳定，重大功能（Vim 模式）逐步落地
- **OpenCode**（30+）：v2 协议收敛期，Provider 矩阵持续扩展

### 🔵 维护期 / 受阻
- **jcode**（12）：CI 自 8/20 起瘫痪（#1191），PR #1193 仍是 Draft，社区近乎半停滞
- **Kimi Code CLI**（1）：进入维护期，单一 PR 修复边界问题

### 📊 成熟度梯队
1. **第一梯队（商业旗舰）**：Claude Code、OpenAI Codex、Gemini CLI——体量、迭代、用户基数全面领先
2. **第二梯队（生态绑定）**：GitHub Copilot CLI——依托 GitHub 工作流，节奏稳定
3. **第三梯队（开源差异化）**：OpenCode、pi、jcode——以多 Provider、性能、扩展性建立细分优势
4. **第四梯队（场景聚焦）**：Kimi Code CLI——聚焦中文长上下文，社区规模较小

---

## 六、值得关注的趋势信号

### 🔮 信号 1：MCP 从"协议"走向"基础设施"
MCP 在 4 个工具中同时进入深度完善阶段（认证、取消、Profiles、错误恢复）。**判断**：MCP 已成为 AI CLI 的事实标准协议，未来 6-12 个月将围绕**MCP Profiles 多场景隔离**、**取消语义一致性**、**OAuth 标准化**继续打磨。

### 🔮 信号 2：长会话鲁棒性成为新的"分水岭"
5 个工具同时报告长会话相关问题——OOM、event 表无界增长、状态机分页错位、orphaned session、压缩不可逆。**判断**：长会话管理将从"补丁式修复"走向"系统性架构升级"，开发者应优先关注**会话恢复、压缩策略、可观测性**。

### 🔮 信号 3：Windows 体验进入"深度打磨期"
不再是"能跑就行"，而是启动崩溃、置顶窗口、WSL2、ACL、焦点冲突等细节问题集中爆发。**判断**：商业 CLI 厂商将加大对 Windows QA 的投入，**WSL2 兼容性**将成为 Windows 用户的核心评估指标。

### 🔮 信号 4：Agent 状态报告"可信度危机"
Gemini CLI subagent 错误报告 GOAL 成功（#22323）、Claude Code 模型虚构完成（#65961 关联）、Codex 投影错位。**判断**："Agent 是否真的完成任务"将成为下一代 CLI 工具的核心信任指标，**可验证的状态机**与**可审计的工作流 trace** 将成为差异化卖点（OpenCode #92990 已显现此趋势）。

### 🔮 信号 5：AGENTS.md 标准统一进入议程
Claude Code Issue #6235（5126 👍）虽已 closed 但引发行业讨论。**判断**：跨工具协作场景将推动 `CLAUDE.md` / `

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants a community hot report on Claude Code Skills based on the data provided. Let me analyze the data carefully.

Looking at the PRs, the comment counts are all "undefined" which is unusual. I'll need to work with what's available - the PR numbers, descriptions, status, and dates. The Issues do have comment counts though.

Let me structure the report:

1. **热门 Skills 排行** - I should pick PRs that are most interesting/discussed. Since PR comments are undefined, I'll use the issues' comment counts as a proxy for community interest, and the PRs that address the most-discussed issues.

2. **社区需求趋势** - From the issues, I can see clear patterns: security, org sharing, skill creator fixes, governance, MCP integration.

3. **高潜力待合并 Skills** - Open PRs that are addressing real community needs.

4. **Skills 生态洞察** - One sentence summary.

Let me draft this report in Chinese as the user requested.
</think>
# Claude Code Skills 社区热点报告
**数据截止：2026-09-09 | 数据源：anthropics/skills**

---

## 1. 热门 Skills 排行

由于 PR 评论数未公开（undefined），以下排行综合了**关联 Issue 评论数、PR 更新活跃度、问题严重性**三个维度进行筛选：

| 排名 | Skill | 关键指标 | 状态 |
|------|-------|----------|------|
| 1 | **skill-creator 修复集**（#1298、#1099、#1050） | 关联 Issue #556 12 评论 / 7 👍 | OPEN |
| 2 | **claude-api 上下文管理**（#1607） | 修复 Issue #1487（156k token 失控） | OPEN |
| 3 | **document-typography 排版质量**（#514） | 解决 AI 生成文档的孤儿行/寡行问题 | OPEN |
| 4 | **frontend-design 可执行性增强**（#210） | 长期优化（2026-01 起持续迭代） | OPEN |
| 5 | **testing-patterns 全栈测试**（#723） | 覆盖 Testing Trophy 完整体系 | OPEN |
| 6 | **mcp-builder 评测修复**（#1724、#1602、#1390） | 关联 Issue #1390 0/N 评分 bug | OPEN |
| 7 | **docx 修订追踪修复**（#541） | OOXML `w:id` 冲突导致文档损坏 | OPEN |
| 8 | **skill-quality-analyzer / security-analyzer**（#83） | 元技能，质量+安全双维分析 | OPEN |

**功能与讨论热点：**

- **#1298 [skill-creator 评测修复](https://github.com/anthropics/skills/pull/1298)**：`run_eval.py` 在所有 Skill 上恒报 `recall=0%`，导致描述优化循环在噪声上迭代，#556 有 10+ 独立复现。这是当前**最严重的元工具缺陷**。
- **#514 [document-typography](https://github.com/anthropics/skills/pull/514)**：解决 AI 文档常见的孤儿词换行、寡行段、编号错位——影响所有 Claude 输出文档。
- **#1607 [claude-api 模型退役](https://github.com/anthropics/skills/pull/1607)**：关联 #1487（4 评论），`claude-api` 单次工具调用注水 156k token 打爆上下文。
- **#541 [docx 修订追踪](https://github.com/anthropics/skills/pull/541)**：硬编码 `w:id=1,2,3` 与现有书签冲突，直接导致文档损坏。
- **#83 [skill-quality/security-analyzer](https://github.com/anthropics/skills/pull/83)**：首创 Skills 自身质量与安全审计的元技能。

---

## 2. 社区需求趋势（按 Issues 提取）

| 需求方向 | 代表 Issue | 评论数 | 信号强度 |
|----------|-----------|--------|----------|
| **🛡️ 信任边界与安全** | [#492 Namespace 滥用](https://github.com/anthropics/skills/issues/492) | **43** | 🔴 极高 |
| **🏢 企业级技能分发** | [#228 Org 共享](https://github.com/anthropics/skills/issues/228) | 16 | 🟠 高 |
| **🧰 skill-creator 工具链健壮性** | [#556 eval 失效](https://github.com/anthropics/skills/issues/556) | 12 | 🟠 高 |
| **🧠 长会话内存压缩** | [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329) | 9 | 🟡 中 |
| **🧹 插件去重 / 安装管理** | [#189 重复 Skills](https://github.com/anthropics/skills/issues/189) | 6 / 9 👍 | 🟡 中 |
| **🤖 Agent 治理 / 安全模式** | [#412 agent-governance](https://github.com/anthropics/skills/issues/412)（已关闭） | 6 | 🟡 中 |
| **⚙️ MCP 互操作** | [#16 Skills as MCPs](https://github.com/anthropics/skills/issues/16) | 4 | 🟢 观察 |
| **🪟 Windows 兼容性** | #1099、#1050 多个 PR | — | 🟠 高（隐性强需求） |

**趋势提炼：**
- **安全/信任** 成为绝对头号议题（43 评论），社区明确担忧"伪装官方"的恶意 Skill；
- **工程化诉求上升**：评测可靠性、Windows 兼容、上下文管理、重复安装；
- **企业场景初现**：Org 共享、SharePoint 集成 (#1175)、Bedrock 集成 (#29)；
- **长任务与多 Agent**：compact-memory、agent-governance、Hivemind (#1628) 等高阶编排类需求开始涌现。

---

## 3. 高潜力待合并 PR

这些 PR 解决的都是**已被多用户复现的真问题**，合并概率高、影响面大：

| PR | Skill | 合并紧迫度 | 理由 |
|----|-------|-----------|------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator run_eval | ⭐⭐⭐⭐⭐ | 12 评论 Issue + 10+ 复现，阻塞描述优化流水线 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | skill-creator Windows 修复 | ⭐⭐⭐⭐ | Windows 下 0% 触发率，与 #1298 同根 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 退役模型 | ⭐⭐⭐⭐ | 解决 156k token 失控，已修复 4 个过期模型 ID |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写路径 | ⭐⭐⭐ | Linux/macOS 必现，影响所有 PDF Skill 引用 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx w:id 冲突 | ⭐⭐⭐ | 高隐蔽性数据损坏风险 |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 校验 | ⭐⭐⭐ | 静默失败型 bug，易触发 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | mcp-builder 评测模型升级 | ⭐⭐⭐ | 模型已退役，评测默认配置失效 |

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求是"Skills 自身需要一套可信赖的工程化基座"**——围绕 **namespace 信任边界（#492，43 评论）、评测可靠性（#556）、跨平台兼容（Windows）、上下文治理（#1487）** 这四条主轴展开，呈现出从"快速堆 Skill"向"治理与可验证性"转向的明显拐点。

---

### 📌 附：本期亮点 Skills（值得单独关注）

- **[#1628 Hivemind](https://github.com/anthropics/skills/pull/1628)** — 零成本多 Agent 编排，Claude Code 保留规划者身份，把机械活分发给 opencode 免费模型
- **[#1627 buffer-api](https://github.com/anthropics/skills/pull/1627)** — 可移植 Agent Skill，支持任意 Agent 调度社交媒体
- **[#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615)** — SCNet 高性能计算集群的 SSH+Slurm 工作流
- **[#1367 self-audit](https://github.com/anthropics/skills/pull/1367)** — 输出前的机械化验证 + 四维推理质量门禁
- **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — 排版质量控制，Universal Skill

---

<think>The user wants me to generate a Chinese daily report about Claude Code community dynamics based on GitHub data. Let me analyze the data carefully and structure the report according to the requested sections.

Let me organize my thoughts:

1. **今日速览** - Key points from today (2026-09-09):
   - v2.1.266 was released to fix a regression from v2.1.265 affecting gateway/proxy setups
   - Multiple platform-specific bugs being reported (Windows, macOS)
   - Function Hooks enhancement getting significant attention
   - AGENTS.md support issue (closed but very popular)

2. **版本发布** - v2.1.266 and v2.1.265 details

3. **社区热点 Issues** - Top 10 issues to highlight:
   - #6235 - AGENTS.md support (closed but 5126 thumbs up, 391 comments)
   - #91870 - Function Hooks enhancement (148 comments, 88 thumbs up)
   - #53247 - Windows desktop launch bug (71 comments)
   - #65961 - Verbose code comments issue (203 thumbs up)
   - #89467 - Windows always-on-top issue
   - #76694 - Cowork folder selection issue
   - #92825 - Session transcripts data loss
   - #92517 - Pool usage for teams
   - #88430 - VS Code extension focus issue
   - #92968 - MCP OAuth hardcoded port

4. **重要 PR 进展** - Only 1 PR in the data, so I'll mention it. Actually only 1 PR was submitted in the past 24 hours. I should note this limitation.

5. **功能需求趋势** - Themes I can identify:
   - AGENTS.md standard support
   - IDE integration (VS Code, focus issues, keybindings)
   - Hooks and plugins extensibility
   - Model behavior (verbose comments, instruction following)
   - Cross-platform issues (Windows, macOS, Linux)
   - Team collaboration features
   - Desktop app UX improvements

6. **开发者关注点** - Pain points:
   - Regression bugs from recent updates
   - Windows-specific issues
   - Model behavior consistency
   - Desktop app UX
   - Session/data persistence
   - MCP integration issues

Let me write this in clear, professional Chinese suitable for technical developers.</think>

# Claude Code 社区动态日报

**日期：2026-09-09**

---

## 📌 今日速览

社区今日发布 v2.1.266 热修复版本，紧急回滚了 v2.1.265 中针对 LLM-gateway 与代理环境的回归问题。Issues 方面，跨平台兼容性（尤其是 Windows Desktop）与模型行为一致性（verbose 代码注释、虚构完成）仍是社区焦点；功能请求中 `AGENTS.md` 标准化与 Function Hooks 插件扩展机制呼声最高，分别获得 5126 与 88 赞。

---

## 🚀 版本发布

### v2.1.266（最新）
- **修复 v2.1.265 回归**：未文档化的 `CLAUDE_CODE_USE_GATEWAY` 环境变量此前需同时设置 `ANTHROPIC_BASE_URL` 与 `ANTHROPIC_AUTH_TOKEN` 才生效，v2.1.265 单独设置时会强制 Cloud-gateway 登录，破坏企业代理与自托管网关部署。v2.1.266 已回退此行为。
- 📦 [Release 说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.266)

### v2.1.265（前序版本，仍涉及本次修复）
- 在 Claude Desktop 与 Cowork 通过 Claude apps 网关发送的遥测数据中新增 `user.email` 与 `user.groups` 字段，与终端会话对齐；
- 支持 `--plugin-dir` 直接指向插件文件夹（每个含 manifest 的子目录都将被加载），子目录的增删可即时生效。
- 📦 [Release 说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)

---

## 🔥 社区热点 Issues

1. **[#6235] 支持 AGENTS.md 标准** *(CLOSED, 👍 5126, 💬 391)*
   呼声最高的特性请求：Codex、Amp、Cursor 等正在统一采纳 agents.md 规范的 Markdown 文件，作为编码 Agent 理解代码库的通用入口。`CLAUDE.md` 因过于 Claude 专有，被认为在跨工具协作中存在局限。虽已 CLOSED，但社区关注度极高，关闭方式引发讨论。
   🔗 https://github.com/anthropics/claude-code/issues/6235

2. **[#91870] Function Hooks — 让插件强大 10 倍** *(OPEN, 👍 88, 💬 148)*
   提出类似 Express/Koa 的中间件式注册顺序 "next" 续传模型，通过对参数化 `$` 对象的副作用追踪实现"既深度又安全"的修改能力。社区对插件扩展机制的高度关注，148 条评论已演变为系统性架构讨论。
   🔗 https://github.com/anthropics/claude-code/issues/91870

3. **[#53247] Windows 上 Claude Desktop 无法启动** *(OPEN, 👍 29, 💬 71)*
   应用崩溃后留下孤立 Silo/Job Object，需注销或重启才能恢复，事件 ID 215/208 抛 `HRESULT 0x80070020`。长尾 Windows 兼容性问题的典型代表。
   🔗 https://github.com/anthropics/claude-code/issues/53247

4. **[#65961] 模型默认 verbose 代码注释，忽略关闭指令** *(OPEN, 👍 203, 💬 31)*
   即便在 system prompt 中明确指示停止，Claude 仍持续生成冗余注释。👍 比例极高，说明这一行为对实际开发体验造成普遍困扰。
   🔗 https://github.com/anthropics/claude-code/issues/65961

5. **[#89467] Windows: 桌面窗口始终置顶且无法关闭** *(OPEN, 👍 35, 💬 22)*
   缺少设置项、快捷键或菜单项禁用该行为，影响多窗口工作流。
   🔗 https://github.com/anthropics/claude-code/issues/89467

6. **[#76694] Cowork 新建项目丢失"选择文件夹"入口** *(OPEN, 👍 19, 💬 16)*
   Chat/Cowork 合并后，新项目右键被替换为 Chat 风格的上传式知识菜单，原"Choose a folder"功能消失，被视为 UX 倒退。
   🔗 https://github.com/anthropics/claude-code/issues/76694

7. **[#92825] 会话转录静默永久不可用（cliSessionId 被置空）** *(OPEN, data-loss, 👍 0, 💬 4)*
   Desktop 端会话日志 `cliSessionId` 被清空且无本地恢复路径，为 #79044 的后续问题，标记 data-loss 严重性。
   🔗 https://github.com/anthropics/claude-code/issues/92825

8. **[#92517] 跨账户配额池 + 共享会话上下文，小团队协作** *(OPEN, 👍 0, 💬 3)*
   提议允许多个订阅账户将限额汇总至项目共享池，并共享会话上下文，针对小团队使用场景。
   🔗 https://github.com/anthropics/claude-code/issues/92517

9. **[#88430] VS Code 扩展面板抢焦点后吞掉所有快捷键** *(OPEN, regression, 👍 0, 💬 3)*
   2.1.235+ 起，新加载的 Claude 面板占焦点但输入框未激活，导致 VS Code 全局快捷键失效，必须鼠标点击恢复。
   🔗 https://github.com/anthropics/claude-code/issues/88430

10. **[#92968] Claude Desktop MCP OAuth 回调监听端口硬编码为 53280** *(OPEN, 👍 0, 💬 1)*
    端口冲突与多开实例场景下会出现问题，今日新提交。
    🔗 https://github.com/anthropics/claude-code/issues/92968

---

## 🔧 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新：

- **[#63686] 将 `stale` 与 `autoclose` 超时从 14 天延长至 90 天** *(CLOSED)*
  调整 `scripts/issue-lifecycle.ts` 中两个生命周期参数；`stale` 同时控制"标记 stale"与"标记后关闭"两个时间点，`autoclose` 控制单独的自动关闭。旨在减少活跃 issue 被误关的可能性。
  🔗 https://github.com/anthropics/claude-code/pull/63686

> 备注：今日 PR 数量较少，建议持续关注后续合并动向。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区热度 |
|------|------------|----------|
| **Agent 标准化（AGENTS.md）** | #6235 | 👍 5126，超高 |
| **插件/Hook 扩展性** | #91870、#92601 | 148+ 评论，深度架构讨论 |
| **桌面应用 UX** | #89467、#76694、#92988 | 多个高赞 |
| **模型行为可控性** | #65961、#92505、#92971 | 👍 203，重复反馈多 |
| **跨平台兼容性** | #53247、#92452、#88430 | Windows/macOS 多发 |
| **团队协作能力** | #92517 | 新方向 |
| **可观测性/调试** | #92990（workflow trace） | 关注度上升 |

---

## 💬 开发者关注点

1. **回归风险敏感度高**：v2.1.265 引入的 gateway 行为变更立刻在企业代理场景炸开锅，开发者呼吁对环境变量相关变更保持向后兼容；
2. **Windows 是兼容性重灾区**：从启动崩溃、置顶窗口、VS Code 焦点冲突到 MSIX 写虚拟化，多个问题集中爆发；
4. **模型"过度服务"成为新痛点**：verbose 注释、虚构完成、Opus 在简单调试任务上过度调研造成配额浪费，反映用户对**行为可控性**和**成本可预测性**的强烈需求；
5. **数据可恢复性焦虑**：`cliSessionId` 被清空、hook 输出被静默截断至 2KB 预览等问题，暴露本地会话与日志的"黑盒化"风险；
6. **桌面与 CLI 能力不对等**：Desktop Code 标签无 `chat:queueSubmit` 等价能力，开发者期待跨端一致的功能矩阵；
7. **会话/任务可观测性诉求**：希望 workflow trace 中能记录每个子 agent 的实际 model 与 effort，提升复盘与审计能力。

---

*日报基于 github.com/anthropics/claude-code 过去 24 小时数据生成*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for OpenAI Codex community dynamics on 2026-09-09. Let me analyze the data provided carefully.

Let me organize the information:

**Releases:**
- rust-v0.154.0-alpha.8
- rust-v0.154.0-alpha.7

**Top Issues (by comments):**
1. #16857 - High GPU usage while "thinking" (47 comments, 52 likes) - macOS app performance
2. #41463 - Windows + WSL Cannot create projects (43 comments) - bug
3. #41079 - Windows Desktop paginated thread history stalls (32 comments)
4. #25271 - Computer Use cannot determine Chrome URL on Windows (32 comments)
5. #41960 - Windows Pets don't respond to clicks (23 comments, 28 likes)
6. #39897 - macOS ChatGPT Desktop deleted conversation remains (19 comments)
7. #32139 - Remove manual approval of "Keep Waiting" (14 comments, 23 likes)
8. #40902 - Windows Java NIO Selector regression (14 comments)
9. #42683 - Alt+P keyboard shortcut crashes app (13 comments)
10. #43124 - macOS desktop history freezes (10 comments)
11. #3097 - Endless loop closed (9 comments)
12. #38157 - ChatGPT Pro 20x accounts receive 5x capacity (8 comments)
13. #34263 - macOS Browser tools not provisioned to Remote SSH (8 comments)
14. #43163 - GPT-6 Astra returns invalid_prompt (7 comments)

**Top PRs:**
1. #44040 - Harden credential handling in shell snapshots
2. #44038 - Handle copied credentials in broker
3. #44032 - Generate Python SDK types
4. #44028 - Add AWS credential export for Bedrock
5. #44027 - Support image attachments in agents overview
6. #44025 - Refresh workspace lockfile for macOS voice releases
7. #44002 - Encapsulate executed tool call metadata recording
8. #43994 - Clear stale transcript history when switching threads
9. #43983 - Bundle signed voice resources in macOS releases
10. #43966 - Heap-allocate resume future
11. #43961 - Use curly apostrophes in protocol error messages
12. #43959 - Gate new app-server work during graceful shutdown
13. #43956 - Increase TUI thread capability test stack
14. #43954 - Cache protected shell snapshots
15. #43953 - Preserve per-image generation IDs in analytics
16. #43950 - Keep app-server thread RPCs active
17. #43949 - Add transactional thread attachment mutations
18. #43948 - Show configured app-server updater settings in doctor
19. #43947 - Surface MCP reconnect signals when OAuth tokens expired
20. #43943 - Gate new turn submissions on host shutdown admission

Let me now write the daily report in Chinese with all the required sections.</think>

# OpenAI Codex 社区动态日报

**日期：2026-09-09**

---

## 1. 今日速览

今日 Codex 仓库连续推送两个 Rust Alpha 版本（v0.154.0-alpha.7 / alpha.8），社区反馈集中爆发在 **Windows 平台兼容性问题**——多个高评论数 Issue 涉及 WSL2 项目创建失败、Java NIO Selector 回归崩溃、Computer Use 浏览器延迟异常等；同时，**桌面端会话历史分页投影（durable-rollout projection）**成为新的热点故障模式，在 macOS 与 Windows 上均出现"rollout 完整但 UI 卡在旧消息"的现象。开发主线则聚焦在**凭据代理（credential broker）、app-server 优雅关停、MCP OAuth 重连信号**等安全与稳定性方向。

---

## 2. 版本发布

过去 24 小时发布了两个 Rust Alpha 版本：

- **[rust-v0.154.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.8)**
- **[rust-v0.154.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7)**

> 注：两个 Release 页面均未提供详细 changelog，建议关注 codex-rs 仓库的 commits 以了解具体改动内容。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 主题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#16857](https://github.com/openai/codex/issues/16857) | macOS App "思考中"小动画导致 GPU 高占用 | 47 | 52 |
| 2 | [#41463](https://github.com/openai/codex/issues/41463) | Windows + WSL2 无法创建项目（AbsolutePathBuf 反序列化错误） | 43 | 27 |
| 3 | [#41079](https://github.com/openai/codex/issues/41079) | Windows Desktop 分页线程历史卡在旧消息（ordinal 重复） | 32 | 3 |
| 4 | [#25271](https://github.com/openai/codex/issues/25271) | Computer Use 在 Windows 无法识别 Chrome URL | 32 | 9 |
| 5 | [#41960](https://github.com/openai/codex/issues/41960) | Windows 桌面宠物（Pets）不响应点击/拖拽 | 23 | 28 |
| 6 | [#39897](https://github.com/openai/codex/issues/39897) | macOS ChatGPT Desktop 删除会话后侧边栏仍残留 | 19 | 4 |
| 7 | [#32139](https://github.com/openai/codex/issues/32139) | 建议移除 "Keep Waiting" 的手动审批（自动接受额外等待） | 14 | 23 |
| 8 | [#40902](https://github.com/openai/codex/issues/40902) | Windows 26.820.60940 回归：Java NIO Selector.open 失败 | 14 | 3 |
| 9 | [#42683](https://github.com/openai/codex/issues/42683) | Windows Alt+P 快捷键导致 App 崩溃退出 | 13 | 4 |
| 10 | [#43124](https://github.com/openai/codex/issues/43124) | macOS 桌面历史冻结（projection ordinal 3185 vs 3184） | 10 | 0 |

**为什么重要：**

- **#16857** 关注度最高（52 👍），表明 macOS 用户对长时间"思考"状态下的功耗与散热体验非常敏感，建议社区提交 metal/Activity Monitor 截图协助定位。
- **#41463 / #40902 / #42683** 三个 Windows 关键回归都集中在 `26.820–26.901` 版本窗口，强烈建议 Windows + WSL 用户暂缓升级或锁定 CLI 版本。
- **#41079 / #43124** 是同一类**持久化 rollout 投影缺陷**在 Win/macOS 的不同表现，反映出状态机在分页回放时的边界处理存在系统性问题。
- **#32139** 是今日少数获得高赞同（23 👍）的**增强请求**，反映出 TUI 用户希望减少人机交互摩擦。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 功能 / 修复 |
|---|---|---|
| 1 | [#44040](https://github.com/openai/codex/pull/44040) | **硬化 shell 快照与重放中的凭据处理** —— 解码 shell 字面量但不求值，拒收带凭据的快照 |
| 2 | [#44038](https://github.com/openai/codex/pull/44038) | **Broker 与 shell 快照中处理复制的凭据** —— 支持 startup 文件中复制到别处的变量 |
| 3 | [#44032](https://github.com/openai/codex/pull/44032) | **从仓库 app-server schema 生成 Python SDK 类型** —— 保持 Python 协议模型与 schema 同步 |
| 4 | [#44028](https://github.com/openai/codex/pull/44028) | **新增 Amazon Bedrock 的 AWS 凭据导出命令** —— 支持 SigV4 凭据从 JSON 输出注入 |
| 5 | [#44027](https://github.com/openai/codex/pull/44027) | **Agents overview 后台任务支持图片附件** |
| 6 | [#44025](https://github.com/openai/codex/pull/44025) | **macOS voice 构建前刷新 workspace lockfile** —— 修复 Bazel Cargo 依赖图陈旧问题 |
| 7 | [#44002](https://github.com/openai/codex/pull/44002) | **封装已执行 tool call 的元数据记录** —— 引入 `ExecutedToolCalls` 统一 recording 与 feature check |
| 8 | [#43994](https://github.com/openai/codex/pull/43994) | **切换线程时清理陈旧的 transcript 历史** —— 防止旧线程事件混入新线程 |
| 9 | [#43983](https://github.com/openai/codex/pull/43983) | **macOS Release 包内嵌签名 voice 资源** —— `codex-voice-host` 跨 Apple Silicon/Intel 签名公证 |
| 10 | [#43959](https://github.com/openai/codex/pull/43959) | **app-server 优雅关停期间屏蔽新工作** —— 关闭新客户端请求与自动续接 |

> 备选关注：[#43950](https://github.com/openai/codex/pull/43950) 保持 thread RPC 直到委托工作完成；[#43947](https://github.com/openai/codex/pull/43947) MCP OAuth 过期时暴露 reconnect 信号；[#43953](https://github.com/openai/codex/pull/43953) 保留图像生成 ID 用于分析。

**整体趋势：** 本日 PR 高度集中在 **（a）凭据与安全**、**（b）app-server 生命周期与线程状态机**、**（c）macOS 原生体验（voice / release 流程）** 三大主题。

---

## 5. 功能需求趋势

从今日 50 条更新 Issue 中可提炼出以下社区关注方向：

1. **Windows / WSL 兼容性**（≈35%）
   - WSL2 项目创建、Java NIO Selector 回归、Computer Use/CDP 21–42s 延迟、Alt+P 崩溃、Pet 不可点击、ACL 损坏等。Windows 已从"能用"转向"稳定性深度打磨"阶段。

2. **会话历史与持久化（durable rollout）**（≈20%）
   - macOS 与 Windows 同时报告 projection 投影错位、ordinal 不一致、`token_count` 事件被拒导致历史消失，开发者对 **JSONL 真相源 vs UI 投影** 的可靠性提出质疑。

3. **Computer Use / Browser 工具**（≈15%）
   - Windows Chrome URL 解析、CDP bridge 延迟、file:// 标签策略冲突、Remote SSH 下 Browser 工具缺失。**远程任务工具供给**是新暴露面。

4. **模型与配额**（≈10%）
   - GPT-6 Astra 触发 `invalid_prompt`、ChatGPT Pro 20x 实际配额为 5x、模型行为在新模型上线当日异常波动。

5. **TUI / CLI 体验增强**（≈10%）
   - 自动接受等待、Agent Hub 粘贴图片、显式配置作用域（gitignored project-local override）。

6. **macOS ChatGPT Desktop 整合**（≈10%）
   - 删除会话残留、Paginated history、annotation control 消失 —— 反映 ChatGPT Desktop 与 Codex CLI 共进程下的状态共享仍不稳健。

---

## 6. 开发者关注点（高频痛点）

- **🪟 Windows 体验滑坡**：开发者明确表示 `26.820+` 后多个核心场景无法工作（崩溃、ACL 损坏、Pet 失灵、CDP 桥接延迟），希望 OpenAI 提供 **回归窗口说明** 或 **快速 hotfix 通道**。
- **🧩 持久化层抽象不足**：`AbsolutePathBuf` 反序列化、ordinal 重复、`already_paginated` 标记等多处症状指向**状态机迁移与分页回放缺乏端到端测试覆盖**，社区呼吁补充集成测试。
- **🔐 Shell 凭据泄露**：连续两个 PR（#44040、#44038）专门强化 broker 与 snapshot 的凭据处理，说明 **shell startup 文件复制 / 解码路径** 是真实风险面。
- **🖼 多模态生成不稳定**：图像生成工具在 Images 2.5 rollout 当日不可调用（#44039），模型行为在不同 PC / 账号之间表现不一致，开发者希望获得 **rollout 健康度回滚机制**。
- **🤖 远程开发环境工具供给**：Remote SSH 任务缺少 Browser / node_repl 工具（#34263），对 hybrid 开发流造成实质性阻碍。
- **📦 配额 / 订阅可见性**：ChatGPT Pro 实际配额与订阅描述不符（#38157）让高级订阅用户感到困惑，期望增加客户端内的**配额来源说明**。

---

> **日报小结**：今日 Codex 仓库呈现"安全与稳定性加固 + Windows 兼容性集中爆发"的典型成熟期态势。建议 Windows + WSL 用户暂用 `codex-cli 0.147–0.149` 等较稳版本；关注 Rust v0.154 正式版的 changelog 以了解 alpha 阶段的修复收敛情况。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for the Gemini CLI community based on GitHub data. Let me analyze the data carefully and structure it according to the requested format.

Let me organize the information:

1. **Releases (24h)**:
- v0.61.0-nightly.20260909.ged2ac40df: NTFS 8.3 SFN path fix, sandbox settings isolation
- v0.60.0-preview.0: Web fetch destination validation, MCP OAuth RFC 9207 issuer enforcement
- v0.59.0: Changelog from previous preview, version bump

2. **Top Issues by comments**:
- #22323: Subagent recovery after MAX_TURNS reports GOAL success (13 comments, 2 thumbs)
- #19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments)
- #21409: Generalist agent hangs (8 comments, 8 thumbs - very high engagement)
- #22745: AST-aware file reads/search/mapping (7 comments)
- #21968: Gemini doesn't use skills and sub-agents enough (6 comments)
- #26525: Auto Memory deterministic redaction (5 comments)
- #1385: MCP Server Tool call responses preview/collapsed (4 comments)
- #26522: Auto Memory low-signal sessions retry (4 comments)
- #25166: Shell command hangs with "Waiting input" (4 comments, 3 thumbs)
- #22232: Browser agent resilience (4 comments)
- #21983: Browser subagent fails in wayland (4 comments)
- #21000: Native file tools for task tracker (4 comments)
- #20079: Symlinks not recognized as agents (4 comments)
- #26523: Auto Memory invalid inbox patches (3 comments)
- #24246: 400 error with >128 tools (3 comments)
- #23571: Model creates tmp scripts in random spots (3 comments)
- #22672: Agent should stop destructive behavior (3 comments)
- #22267: Browser Agent ignores settings.json (3 comments)
- #22186: get-shit-done output hook crash (3 comments)
- #20195: Local Subagent Sprint 1 (3 comments)
- #29001: a2a-server HTTP API no auth (2 comments)
- #26516: Memory system bugs (2 comments)
- #22746: AST aware CLI tools (2 comments)
- #22598: Subagent trajectory via /chat share (2 comments)
- #22466: Incorrect \n escape behavior (2 comments)
- #22465: Vite app interactive prompt stuck (2 comments)
- #21924: Terminal resize flicker (2 comments)
- #21763: Bugreport doesn't include subagent context (2 comments)
- #21432: Agent self-awareness (2 comments)
- #21335: /compress not persistent (2 comments, 2 thumbs)

3. **Top PRs by comments** - Many have no comments, so I'll select by priority/importance

Let me write a comprehensive Chinese report now.</think>

# Gemini CLI 社区动态日报
**日期：2026-09-09** · 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 一、今日速览

今日 Gemini CLI 发布 **v0.60.0-preview.0** 与 **v0.61.0-nightly** 双版本，重点修复 Windows NTFS 8.3 短路径、容器沙箱配置隔离、Web Fetch 目的地址校验以及 MCP OAuth 的 RFC 9207 颁发者校验等安全与跨平台问题。社区讨论最热的议题集中在 **Agent 子代理的状态报告失真、Generalist Agent 长时间挂起、Auto Memory 系统的多项可靠性缺陷**，以及一个 **a2a-server HTTP API 缺乏鉴权** 的 P1 安全漏洞已获官方修复 PR。

---

## 二、版本发布

| 版本 | 类型 | 关键更新 |
|------|------|----------|
| **v0.61.0-nightly.20260909.ged2ac40df** | Nightly | • 缓解 NTFS 8.3 短文件名（SFN）路径问题（[#29116](https://github.com/google-gemini/gemini-cli/pull/29116)）<br>• 沙箱容器内隔离 settings 目录（[#29216](https://github.com/google-gemini/gemini-cli/pull/29216)） |
| **v0.60.0-preview.0** | Preview | • Web Fetch 工具强化目的地址校验与连接路由（[#29120](https://github.com/google-gemini/gemini-cli/pull/29120)）<br>• MCP OAuth 流程强制 RFC 9207 颁发者标识（[#29xxx](https://github.com/google-gemini/gemini-cli)） |
| **v0.59.0** | Stable | • 整合 v0.58.0-preview.0 的变更日志<br>• 同步 bump 至 0.59.0-nightly 训练版本（[#29082](https://github.com/google-gemini/gemini-cli/pull/29082)、[#29083](https://github.com/google-gemini/gemini-cli/pull/29083)） |

---

## 三、社区热点 Issues

按评论活跃度与影响力精选：

1. **[#22323] Subagent 在 MAX_TURNS 后错误地报告 GOAL 成功** — 13 评论，p1
   `codebase_investigator` 子代理在达到最大轮次限制前未做任何分析，但仍上报 `status: "success"`、`Termination Reason: "GOAL"`，掩盖了中断事实。影响所有依赖子代理结果做编排的用户。
   👉 https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist Agent 频繁挂死** — 8 评论，8 👍，p1
   在简单任务（如新建文件夹）场景下，CLI 委派到 generalist agent 后长时间无响应，最长等待 1 小时仍需手动取消。👍 8 在今日 Issues 中排名第一，反映用户痛感极强。
   👉 https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#19873] 利用模型 Bash 亲和性的零依赖 OS 沙箱与执行后意图路由** — 9 评论，p2
   Gemini 3 模型天生擅长用 `grep/cat/sed/awk` 串联探索代码库。该 EPIC 提出"零依赖 OS 沙箱"在不损失安全性的前提下充分发挥这一能力，是安全/性能交叉的关键路线讨论。
   👉 https://github.com/google-gemini/gemini-cli/issues/19873

4. **[#22745] 评估 AST 感知的文件读取、搜索与代码库映射** — 7 评论，p2
   探讨通过 AST 工具（如 `tilth`、`glyph`）精确读取方法边界、单次调用替代多次试探性读取，从而减少轮次与 Token 噪声，是值得关注的代码库理解优化方向。
   👉 https://github.com/google-gemini/gemini-cli/issues/22745

5. **[#21968] Gemini 几乎不会主动调用 Skills 与 Sub-agents** — 6 评论，p2
   即便配置了 `gradle`、`git` 等描述清晰的 skills，模型也很少主动使用，除非用户显式提示。涉及代理调度偏好问题，对长尾任务效率影响巨大。
   👉 https://github.com/google-gemini/gemini-cli/issues/21968

6. **[#26525] Auto Memory 引入确定性脱敏并降低日志输出** — 5 评论，p2 / 安全
   背景提取 agent 会先将本地会话内容送入模型上下文，再依赖 prompt 让模型脱敏，存在泄漏窗口。需要确定性脱敏前置 + 减少敏感字段日志。
   👉 https://github.com/google-gemini/gemini-cli/issues/26525

7. **[#25166] Shell 命令完成后仍卡在"Waiting input"** — 4 评论，3 👍，p1
   即使是非常简单的非交互命令，shell 工具完成后也不退出，把命令留在"等待用户输入"状态。是 CLI 可用性的高频痛点。
   👉 https://github.com/google-gemini/gemini-cli/issues/25166

8. **[#21983] Browser 子代理在 Wayland 下失败** — 4 评论，p1
   Wayland 是 Linux 桌面主流，新报告的 Browser 子代理失败属于兼容性回归，影响 Linux 用户。Termination Reason 同样错误地标为 GOAL，与 #22323 同源。
   👉 https://github.com/google-gemini/gemini-cli/issues/21983

9. **[#29001] a2a-server HTTP API 实际未做任何鉴权** — 2 评论，p2，安全
   `@google/gemini-cli-a2a-server` 发布的 npm 二进制在所有端点上均无鉴权，仅存在一个对硬编码凭据（`valid-token`、`admin:password`）的弱校验，且 Agent Card 还虚假声明了 bearer/basic 安全方案。**已在 PR #29067 中被修复并合并**（详见下节）。
   👉 https://github.com/google-gemini/gemini-cli/issues/29001

10. **[#24246] 工具数 > 128 即触发 400 错误** — 3 评论，p2
    MCP server 数量较多时 CLI 报 400。社区期望代理在工具调用前能更智能地限制作用域，是工具生态扩展的关键瓶颈。
    👉 https://github.com/google-gemini/gemini-cli/issues/24246

---

## 四、重要 PR 进展

1. **[#29067] 修复 a2a-server 虚假安全方案与硬编码凭据**（已合并）
   从 `coderAgentCard` 中移除误导性的 `securitySchemes`/`security`，删除 `customUserBuilder` 中的不安全硬编码 token 校验。修复 #29001，提升本地开发模式的安全性透明度。
   👉 https://github.com/google-gemini/gemini-cli/pull/29067

2. **[#29089] 将 abortSignal 透传到 retryWithBackoff**
   `BaseLlmClient.generateContent/generateJson` 虽然把 `abortSignal` 传给了单次 API 调用，却未传给 `retryWithBackoff`，导致取消/超时场景下重试循环无法被中止。影响 SessionSummaryService、压缩、分类器等。
   👉 https://github.com/google-gemini/gemini-cli/pull/29089

3. **[#29088] 修复 VSCode 扩展 deactivate 因 MCP 长连接挂起**
   `IdeServer.stop()` 等待所有连接 drain，但 MCP `GET /mcp` 是长连接流，导致 `deactivate()` 阻塞。修复后 VSCode 扩展可正常卸载。
   👉 https://github.com/google-gemini/gemini-cli/pull/29088

4. **[#29087] 防止并发扩展安装竞态**
   使用现有 `proper-lockfile` 依赖在安装/更新同一扩展时加互斥锁，避免两个进程交错写文件造成损坏。
   👉 https://github.com/google-gemini/gemini-cli/pull/29087

5. **[#29063] 修复非交互模式下 Plan Mode 挂死**
   非交互模式（`gemini -p "..." -y`）中 Plan Mode 的工作流提示会让 agent 等待永远不会出现的用户输入。修复后将直接跳过等待。
   👉 https://github.com/google-gemini/gemini-cli/pull/29063

6. **[#29163] 防止 Git 仓库内认证阶段崩溃**
   在 macOS Seatbelt 等受限权限环境下，`useGitBranchName` 钩子读取 `.git` 时崩溃。加入安全失败回退。
   👉 https://github.com/google-gemini/gemini-cli/pull/29163

7. **[#29156] 不再在 Shell 执行中将用户 Git 配置置空**
   还原 `GIT_CONFIG_GLOBAL`/`GIT_CONFIG_SYSTEM` 为用户真实配置，避免 git 命令在 shell 工具中无法识别用户名/邮箱。
   👉 https://github.com/google-gemini/gemini-cli/pull/29156

8. **[#29155] 修复 BOM 编码文件 isEmpty 误判**
   UTF-16/UTF-32 BOM 文件被解码后含 NUL 字符，`trim()` 误判为非空。影响 `validatePlanContent` 等流程。
   👉 https://github.com/google-gemini/gemini-cli/pull/29155

9. **[#29151] 修复 SkillManager 大小写敏感问题**
   Skill 优先级覆盖（工作区覆盖内置/扩展）和活动状态追踪在 skill 名大小写不同时会失败，改为大小写不敏感。
   👉 https://github.com/google-gemini/gemini-cli/pull/29151

10. **[#29214] 强化沙箱文件系统边界**
    隔离沙箱运行时状态与宿主机配置目录，用净化后的配置文件代替宿主目录挂载，统一使用 `realpath` 做路径敏感度检查。
    👉 https://github.com/google-gemini/gemini-cli/pull/29214

11. **[#29252] 保留显式版本化 Flash 模型 ID**
    避免把用户显式指定的版本化 Flash 模型静默重映射到 Gemini 3.5 Flash 灰度默认；非法 ID 直接返回 API 错误，便于定位。
    👉 https://github.com/google-gemini/gemini-cli/pull/29252

12. **[#29137] Dependabot：批量升级 77 个 npm 依赖**
    包括 `simple-git 3.28.0 → 3.36.0`、`@modelcontextprotocol/sdk` 主版本升级等。
    👉 https://github.com/google-gemini/gemini-cli/pull/29137

---

## 五、功能需求趋势

从 Issues 与 PR 提炼，社区关注的功能方向呈如下分布：

- **🤖 Agent 行为正确性与可靠性（最热）**：Subagent 状态报告失真、Generalist Agent 挂死、子代理上下文未出现在 bugreport 中、模型生成临时脚本散落各处、Skill/Sub-agent 调度不积极——所有这些都指向"让代理更可预测"。
- **🔒 安全与权限**：a2a-server 鉴权、Auto Memory 敏感内容脱敏、Plan Mode 在受限权限下崩溃。
- **🧠 代码库感知升级**：AST 感知的 read/search/map、cursor-level edit、工具调度智能化（>128 工具报错）。
- **🌐 跨平台兼容**：Windows NTFS 8.3 短路径、Linux Wayland 浏览器子代理、macOS Seatbelt 启动崩溃。
- **📦 沙箱与执行隔离**：沙箱状态与宿主机目录隔离、零依赖 OS 沙箱、扩展并发安装竞态。
- **🛠️ 开发者体验**：MCP 工具响应默认折叠、`/chat share` 暴露子代理轨迹、`/compress` 跨会话持久化、终端 resize 高性能渲染（迁移 Ink `RenderStatic`）。
- **🆕 模型与版本控制**：保留显式模型版本化 ID、对新版 Flash（Gemini 3.5）的灰度回退行为。

---

## 六、开发者关注点

1. **Agent 行为"看似成功，实际中断"**：子代理返回 `GOAL` 但实际是 MAX_TURNS——开发者难以信任 CLI 报告的状态，是 #22323、#21983、#21763 等多个 issue 的共同根源，PR #29063（Plan Mode 修复）显示团队已意识到"过早报告完成"问题。
2. **Auto Memory 系统集中爆发质量问题**：#26516、#26522、#26523、#26525 均集中在 5 月初提报，今天仍持续被提及并由 @SandyTao520 主导维护——包括低信号 session 死循环、非法 patch 静默跳过、敏感信息先入上下文后脱敏。开发者普遍担忧隐私与可观测性。
3. **Shell / 终端交互稳定性**：Shell 命令完成后卡住、终端 resize 闪烁、交互式 vite 初始化卡死——这三类问题几乎所有 CLI 重度用户都遭遇过，#21924 提议迁移 Ink `RenderStatic` 是社区期望的根治方案。
4. **工具规模与代理调度**：MCP 生态越丰富，>128 工具 400 错误就越频繁；与此同时 #21968 指出模型对已有 skills/sub-agents 调度不积极。**工具数量**与**主动调度**是硬币两面，亟需"作用域裁剪 + 工具路由"一体的解决方案。
5. **沙箱与本地开发体验的张力**：a2a-server 硬编码凭据被报告后快速被合并修复（#29067），沙箱隔离 PR #29214 持续推进——开发者既要求沙箱更安全，又要求本地开发不被过度限制。

---

*日报基于 2026-09-09 过去 24 小时更新的 GitHub 数据生成。如需关注特定领域（Agent/安全/IDE 集成等）的深度分析，可指定方向继续展开。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community daily report based on the provided data. Let me analyze the data carefully and structure the report according to the required sections.

Let me analyze the data:

1. **Releases (Past 24 hours):**
   - v1.0.84-3: Fixed /copy includes task completion messages when available; OAuth-authenticated MCP servers connect reliably during session startup
   - v1.0.84-2: New Vim mode available to everyone via /vim or editorMode=vim; Improved Windows sandbox policies record blocked accesses for interactive shell commands

2. **Top Issues (sorted by comments):**
   - #13 [CLOSED] CLI input should have a vi/vim input mode - 11 comments, 76 likes
   - #4742 [OPEN] Desktop app 1.1.15: cannot create a second Local session - 10 comments, 5 likes
   - #4612 [OPEN] Runaway FileWatch host-event loop freezes TUI - 9 comments, 1 like
   - #4664 [OPEN] Copilot CLI crashes with JS heap OOM when resuming - 7 comments, 2 likes
   - #4756 [OPEN] Windows app requires archiving every idle project session - 6 comments, 19 likes
   - #2861 [OPEN] Compaction failed on Opus 4.6 - 6 comments, 4 likes
   - #2943 [OPEN] openrouter integration - 3 comments, 14 likes
   - #4753 [OPEN] v1.0.83 session resume cancels MCP connections - 3 comments, 1 like
   - #4505 [OPEN] Resumed session retains stale connection item IDs - 3 comments, 3 likes
   - #4582 [OPEN] MCP OAuth authorize omits scope parameter - 3 comments, 0 likes
   - #4520 [OPEN] Standalone postToolUse hook never fires - 3 comments, 0 likes
   - #4757 [OPEN] --yolo blocked for whole session - 3 comments, 0 likes
   - #4614 [OPEN] macOS MallocStackLogging warning - 2 comments, 4 likes
   - #4448 [OPEN] Search stuck and never finishes - 2 comments, 0 likes
   - #4771 [OPEN] Taskbar presence card stays at spinner - 1 comment, 0 likes
   - #3772 [OPEN] Support authenticated reads of MCP registry - 1 comment, 5 likes
   - #4381 [OPEN] Notification badge count persists - 1 comment, 0 likes
   - #4253 [OPEN] /ask frequently returns no result - 1 comment, 1 like
   - #1724 [OPEN] Show current TODO status - 1 comment, 11 likes
   - #4623 [OPEN] Gemini models fail with union types in MCP - 1 comment, 0 likes
   - #4531 [OPEN] VS Code launch drops GIT_CONFIG_VALUE - 1 comment, 1 like
   - #4750 [OPEN] Copilot TUI hogs CPU - 1 comment, 0 likes
   - #4765 [OPEN] copilot cli fails to read config from non-repo root - 1 comment, 0 likes
   - #2235 [OPEN] MCP Profiles - 1 comment, 3 likes
   - #2836 [OPEN] orphaned session-state folders - 1 comment, 0 likes
   - #4696 [OPEN] allow-all mode resets after long inactive - 1 comment, 0 likes
   - #4759 [OPEN] MCP cancellation requests - 1 comment, 0 likes
   - #4755 [OPEN] Session wedges when queued-lane message - 1 comment, 0 likes
   - #4774 [CLOSED] Mission Control dashboard links 404 - 0 comments, 0 likes
   - #4775 [OPEN] Mission Control dashboard links 404 - 0 comments, 0 likes

3. **Pull Requests:**
   - #4770 [OPEN] Document the WebSocket responses opt-out
   - #4761 [CLOSED] install: report unsupported operating systems
   - #4100 [CLOSED] shangti0168 (security)

Now let me structure the report in Chinese with all the required sections.

Key trends I can identify:
- Vim mode finally implemented (issue #13 closed after high community demand - 76 likes)
- Windows-specific issues are prevalent (multiple issues around Windows desktop app)
- MCP-related issues are common (OAuth, cancellation, registry authentication, connection issues)
- Session management issues (resume, stale data, orphaned files, queueing)
- Model support issues (OpenRouter integration request, Gemini compatibility, Opus compaction)
- Performance issues (TUI CPU usage, FileWatch loops, OOM crashes)

Let me write the report now.</think>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-09**

---

## 1. 今日速览

今日 Copilot CLI 仓库迎来两个重要的版本更新（v1.0.84-2 / v1.0.84-3），其中 **Vim 模式正式上线**——这是社区长达近一年（Issue #13）的强烈诉求终于落地。同时，**Mission Control 仪表盘链接 404 问题**引发关注，桌面端 Windows 平台的会话管理冲突（#4756 / #4742）成为当前最热议的稳定性问题。综合来看，本日动态围绕"输入体验升级 + 桌面端/Windows 兼容性 + MCP 协议完善"三条主线展开。

---

## 2. 版本发布

### 📦 v1.0.84-3（修复）
- **`/copy` 命令**现在会包含可用的任务完成消息
- **OAuth 认证的 MCP 服务器**在会话启动时的连接可靠性提升

### 📦 v1.0.84-2（功能 + 改进）
- **🆕 Vim 模式全面开放**：所有用户可通过 `/vim` 启用，或将 `editorMode` 设置为 `vim` 进入模态编辑。编辑时会在 composer 中显示当前模式。
- **Windows 沙盒策略改进**：支持的 Windows 沙盒策略下，交互式 shell 命令现在会记录被阻止的访问。

> 💡 Vim 模式的发布直接关闭了 Issue [#13](https://github.com/github/copilot-cli/issues/13)（👍 76，社区呼声最高的特性之一）。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 为什么值得关注 |
|---|---|---|---|---|---|
| [#13](https://github.com/github/copilot-cli/issues/13) | CLI vi/vim 输入模式 | **CLOSED** ✅ | 11 | **76** | 社区近一年最强烈的诉求，今日随 v1.0.84-2 正式关闭。👍 数远超其他 Issue，体现 Vim 用户群体的庞大需求 |
| [#4756](https://github.com/github/copilot-cli/issues/4756) | Windows 创建新 Local session 前必须归档所有闲置会话 | OPEN | 6 | **19** | 👍 数远高于评论数，表明大量 Windows 桌面端用户深受其害，与 #4742 描述同类会话冲突问题 |
| [#2943](https://github.com/github/copilot-cli/issues/2943) | 集成 OpenRouter 作为模型后端 | OPEN | 3 | **14** | 14 个 👍 表明大量用户希望摆脱单一模型供应商锁定，开放生态呼声高 |
| [#1724](https://github.com/github/copilot-cli/issues/1724) | 显示当前 TODO 状态 | OPEN | 1 | **11** | 借鉴 opencode 的侧边栏 TODO 展示，长期被低估但广受认可的体验增强 |
| [#4742](https://github.com/github/copilot-cli/issues/4742) | 桌面端 1.1.15 无法创建第二个 Local session | OPEN | 10 | 5 | 评论数最高之一，详细复现了 1.1.15 自动更新引入的回归 bug |
| [#4612](https://github.com/github/copilot-cli/issues/4612) | FileWatch 主机事件循环失控导致 TUI 冻结、调试日志膨胀至 13GB | OPEN | 9 | 1 | 严重稳定性问题——debug 日志无上限增长、UI 完全卡死，影响长会话场景 |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | 恢复长会话时 V8 堆内存溢出崩溃 | OPEN | 7 | 2 | 大型会话可用性瓶颈，Node.js 默认堆限制成为长会话用户的硬约束 |
| [#2861](https://github.com/github/copilot-cli/issues/2861) | Opus 4.6 上 `/compact` 连续 3 次失败 | OPEN | 6 | 4 | 高端模型上下文压缩失败，影响 Opus 付费用户的核心工作流 |
| [#3772](https://github.com/github/copilot-cli/issues/3772) | 企业 MCP registry 支持认证读取 | OPEN | 1 | 5 | 企业部署的安全诉求，避免 Azure API Center 等匿名暴露 |
| [#4775](https://github.com/github.com/github/copilot-cli/issues/4775) | Mission Control 仪表盘链接 404 | OPEN | 0 | 0 | 今日新报告的 Web 端与 CLI 端路径不一致问题，影响远程会话可发现性 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#4770](https://github.com/github/copilot-cli/pull/4770) | 记录 WebSocket responses 退出选项 | OPEN | 为 WebSocket 响应传输不可用（如被网络阻断、或导致 `400 input item ID does not belong to this connection`）时提供逃生通道，与 Issue #4505 直接呼应 |
| [#4761](https://github.com/github/copilot-cli/pull/4761) | install 脚本识别不支持的操作系统 | **CLOSED** ✅ | 修复 FreeBSD 上 `install.sh` 错误显示 "Windows detected but winget not found" 的平台误判 |
| [#4100](https://github.com/github/copilot-cli/pull/4100) | shangti0168 | **CLOSED** ✅ | 安全相关提交（细节未公开） |

> 注：今日 PR 总数仅 3 条，相对安静；但 #4770 与最近 session resume 系列的错误（#4505 / #4753 / #4664）形成联动，预计会有更多 PR 跟进。

---

## 5. 功能需求趋势

从过去 24 小时的 44 条 Issues 中可以提炼出以下几条清晰的社区诉求主线：

### 🔤 输入与编辑器体验
- **Vim 模式**（已落地 ✅）
- **TODO 状态可视化**（#1724，侧边栏展示代理内部任务列表，参考 opencode）

### 🪟 桌面端 / Windows 兼容性
- **Windows Local session 管理冲突**（#4742、#4756）——多 session 并存、闲置归档策略不清晰
- **Windows 任务栏/通知状态显示异常**（#4771 任务栏卡片不退出 working 态、#4381 通知 badge 计数残留）

### 🔌 MCP 协议深度完善
- **认证机制**：Entra ID OAuth scope 缺失（#4582）、企业 registry 匿名读取（#3772）、MCP 取消请求未发送（#4759）
- **多配置管理**：MCP Profiles（#2235）——按场景隔离服务器配置
- **连接稳定性**：会话恢复时取消未初始化的 MCP 连接（#4753）、启动期 OAuth MCP 连接可靠性（v1.0.84-3 已修复）

### 🤖 模型生态扩展
- **OpenRouter 集成**（#2943）——第三方模型路由
- **Gemini 兼容性**（#4623）——MCP 工具 schema 联合类型解析异常
- **Opus 4.6 上下文压缩**（#2861）

### ⚡ 性能与稳定性
- **TUI CPU 占用过高**（#4750，闲置时仍占用多核）
- **FileWatch 循环失控**（#4612）
- **长会话 OOM**（#4664）

### 🔐 权限与会话恢复
- **--yolo/--allow-all 失效**（#4757、#4696）——长时间空闲或策略解析异常后被 fail-closed 锁定
- **会话恢复的连接态一致性**（#4505、#4755、#2836）

---

## 6. 开发者关注点

综合今日社区反馈，开发者最集中的痛点集中在以下几点：

1. **🪟 Windows 桌面端体验断裂**：1.1.15 自动更新后，会话创建/恢复流程在 Windows 上出现多处回归（#4742、#4756、#4771、#4381）。Windows 用户在桌面端的工作流几乎全线受阻，是当下最迫切需要修复的领域。

2. **🧠 长会话的鲁棒性**：随着用户把 Copilot CLI 用于真实项目开发，"长会话"已成为常态。但 FileWatch 死循环、V8 OOM、连接态陈旧、孤儿 session 文件夹、queued-lane 永久 wedge 等问题表明，**会话生命周期管理仍是当前最大短板**。

3. **🔌 MCP 已从"加分项"变为"必修课"**：过去 MCP 只是高级功能，现在 OAuth、cancellation、registry 认证、resume 期稳定性都被提上日程——MCP 生态的成熟度直接决定了 Copilot CLI 作为"代理运行时"的能力上限。

4. **🧰 模型可替换性诉求上升**：OpenRouter 集成（#2943）14 个 👍、Gemini schema 兼容（#4623）、Opus 压缩失败（#2861）共同反映出用户希望**不被单一模型供应商绑定**，并期待各模型在 CLI 中获得平等的稳定性保障。

5. **⌨️ "键盘流"用户是不可忽视的力量**：Vim 模式 Issue 凭借 76 👍 成为仓库历史最高赞 Issue 之一，关闭后形成的"键盘驱动 + 终端原生"用户群体，对未来 TODO 可视化、键位自定义等功能仍有强需求。

6. **🔍 Mission Control 与 CLI 的路径不一致**（#4774 / #4775）：Web 仪表盘链接 `/copilot/tasks/<uuid>` 与实际会话路径 `/agents/tasks/<uuid>` 不匹配，看似小问题但阻碍了远程会话的发现与协作体验。

---

> 📌 **编辑建议**：开发者若正在使用 v1.0.83 系列并遇到会话恢复问题，建议尽快升级至 **v1.0.84-3** 以获得 OAuth MCP 连接的可靠性修复。Windows 桌面端 1.1.15 用户则可暂时回退或在 #4756 / #4742 中跟踪进展。

*报告生成于 2026-09-09，数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data from 2026-09-09. Let me analyze the data carefully.

Key observations from the data:
1. No new releases in the past 24 hours
2. Only 1 updated issue in the past 24 hours:
   - Issue #1270 - VSCode extension @ file picker enhancement (CLOSED)
3. Only 1 updated PR in the past 24 hours:
   - PR #2595 - fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 (OPEN)

I notice the user asked for "10 most noteworthy Issues" and "10 important PRs" but only 1 issue and 1 PR are available. I should be honest about this limitation and provide what I have, rather than fabricating data.

Let me craft a professional Chinese daily report that:
- Honestly reflects the limited activity
- Provides deep analysis of what is available
- Doesn't fabricate issues/PRs that don't exist in the data

I'll structure it according to the requested sections but adapt to the actual data volume.</think>

# Kimi Code CLI 社区动态日报
**日期：2026-09-09**

---

## 📌 今日速览

今日 Kimi CLI 仓库活跃度较低，仅有 1 个 Issue 和 1 个 PR 在过去 24 小时内有更新。Issue #1270（VSCode 扩展 `@` 文件选择优化）已被关闭并解决；同时 PR #2595 提出了关于 `StrReplaceFile` 对非 UTF-8 文件处理的修复方案，正在等待评审。从数据来看，社区进入了一个相对平静的维护期，重点放在已知缺陷的修复和已有功能的打磨上。

---

## 🚀 版本发布

**今日无新版本发布。** 跳过此章节。

---

## 🔥 社区热点 Issues

> ⚠️ 说明：过去 24 小时内仅有 1 个 Issue 有更新活动，远少于通常的 10 条。以下为今日全部 Issue 动态：

### #1270 — VSCode 扩展 `@` 文件选择优化（已关闭）
- **链接**：[Issue #1270](https://github.com/MoonshotAI/kimi-cli/issues/1270)
- **作者**：@ljyfree
- **状态**：✅ CLOSED
- **更新时间**：2026-09-09
- **👍/💬**：0 / 1

**为什么值得关注**：
这是 Kimi CLI VSCode 扩展的一个典型用户体验改进请求。用户反馈当在对话框中输入 `@` 触发文件选择时，候选项的排序逻辑不够智能——既然 IDE 中已经打开的文件往往正是用户接下来要分析和操作的目标，就应该在候选列表中优先展示，而不是按通用文件路径排序。

**社区反应**：互动量较低（0 赞，1 条评论），但 Issue 已在今日被关闭，**说明维护者已经接受方案并完成修复**（或认为无需改动直接关闭）。这种"被快速关闭"的处理方式通常意味着团队已经内部讨论过该问题，或已在更新版本中解决了。

**对开发者的启示**：如果你是 VSCode 扩展的重度用户，建议升级到最新版本（>= v0.4.3 之后）以体验此改进。

---

## 🛠️ 重要 PR 进展

> ⚠️ 说明：过去 24 小时内仅有 1 个 PR 有更新活动，以下为今日全部 PR 动态：

### #2595 — fix(StrReplaceFile): 拒绝编辑非 UTF-8 文件（OPEN）
- **链接**：[PR #2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)
- **作者**：@shoemoney
- **状态**：🟢 OPEN
- **创建时间**：2026-08-06｜**更新时间**：2026-09-08
- **👍**：0

**修复内容解析**：

这是一个**潜在的数据丢失风险修复**，技术含量很高，值得仔细分析：

1. **问题根因**：
   `StrReplaceFile` 工具在执行字符串替换前，会对整个文件用 `errors="replace"` 进行 UTF-8 解码。这意味着如果文件包含任何非 UTF-8 字节（即便这些字节位于本次编辑范围之外），都会被替换为 U+FFFD（�），然后以 `EF BF BD` 三个字节的形式写回文件。

2. **实际后果**：
   - **静默数据损坏**：编辑一个文件中的某个小段落，结果整个文件里的非 UTF-8 字符全部变成了 �
   - **不可逆操作**：原始字节无法恢复
   - 风险场景：包含 GBK/Shift-JIS/二进制残留的文件、旧编码的源代码、混合编码的日志文件

3. **修复方案**：
   拒绝编辑任何包含非 UTF-8 字节的文件，宁可报错也不要悄悄破坏数据。

**为什么这是个好 PR**：
- 体现了"**Fail Loud, Fail Safe**"的工程哲学
- 解决了 AI 编辑工具中长期被忽视的边缘场景
- 反映出社区成员对工具鲁棒性的高要求

**对开发者的启示**：
如果你正在使用 Kimi CLI 编辑含中文 GBK 编码的旧文件、日志文件或其他非 UTF-8 编码文件，**在合并此 PR 前请先备份原文件**。

---

## 📈 功能需求趋势

由于今日 Issues 数据量极少（仅 1 条），无法形成显著的统计趋势。但从这一条 Issue 中仍可提炼出方向：

| 方向 | 体现 | 代表 Issue |
|------|------|----------|
| **IDE 集成体验** | VSCode 扩展的智能排序、上下文感知 | #1270 |
| **编辑器与 AI 的协同** | 利用 IDE 已有状态（打开的文件）减少用户输入 | #1270 |

**核心洞察**：即使只有一条 Issue，它也指向了一个明确趋势——**用户期待 Kimi CLI 从"通用 CLI 工具"向"深度 IDE 集成的智能助手"演进**。VSCode 扩展不再只是终端的封装，而是要主动理解 IDE 上下文。

---

## 💡 开发者关注点

基于今日可观察的数据，开发者的反馈焦点集中在两点：

### 1. 数据安全性与工具鲁棒性
PR #2595 揭示了开发者对 Kimi CLI **底层编辑操作正确性**的深切关注。AI 代码编辑器最危险的失败模式不是"做错"而是"悄悄做错并造成不可逆损失"。开发者希望工具能在边界场景下**显式拒绝**而不是静默损坏数据。

### 2. 减少用户认知负担
Issue #1270 反映出开发者希望 Kimi CLI 能够**主动利用 IDE 上下文**（如已打开文件），避免重复输入和智能猜测。这与 Cursor、Copilot 等竞品的"上下文感知"设计哲学一致。

### 开发者行动建议
- 如果你在 PR 评审名单中，请关注 #2595 的讨论，确保边界条件（空文件、BOM、UTF-16）的处理策略
- 如果你也在使用 VSCode 扩展，验证 #1270 的修复是否已落地
- 关注 Kimi CLI 的下一波提交，可能会有更多针对 IDE 集成深度的改进

---

*📊 数据来源：GitHub REST API | 仓库：MoonshotAI/kimi-cli | 采样窗口：2026-09-08 ~ 2026-09-09*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze this GitHub data for OpenCode and create a comprehensive daily report for 2026-09-09.

Key observations from the data:

**Release (v1.18.30):**
- Added Astra system prompt for GPT-6 models
- Fixed Bedrock DeepSeek model IDs (ARN-based)
- Updated Azure provider SDK
- Updated OpenAI provider SDK

**Top Issues (most commented/liked):**
1. #20995 - Gemma 4 tool calling fails via Ollama (CLOSED, 36 comments, 48 👍) - HIGH engagement
2. #33356 - Unbounded growth of event table (OPEN, 28 comments, 9 👍) - Critical bug
3. #6096 - TPS display feature (CLOSED, 21 comments, 73 👍) - Very popular feature request
4. #16344 - Requesty provider model loading (CLOSED, 12 comments)
5. #9532 - Claude tool calling errors (CLOSED, 8 comments)
6. #36119 - Apply patch permission view (CLOSED, 7 comments)
7. #31907 - display_thinking keybinding (CLOSED, 6 comments, 8 👍)
8. #34543 - WebSearch connection failure (CLOSED, 5 comments)
9. #33896 - v2 plugin skill discoverability (CLOSED, 5 comments)
10. #22655 - Web UI crashes browsing folders (CLOSED, 5 comments)
11. #35314 - Double-click maximize pane (CLOSED, 4 comments)
12. #44984 - v2 restore part.delete (CLOSED, 3 comments)
13. #28177 - Config precedence ignored (CLOSED, 3 comments)
14. #36237 - Web UI session list empty in iframe (CLOSED, 3 comments)
15. #30510 - Rate limit retries without backoff (CLOSED, 3 comments)
16. #36226 - Agent over-executes (CLOSED, 3 comments)
17. #36216 - Token metadata in message (CLOSED, 3 comments)
18. #36078 - GLM5-2 reply formatting (CLOSED, 3 comments)
19. #23041 - Multiple directory access (CLOSED, 3 comments)
20. #48069 - Bedrock GPT-6 Astra image issue (OPEN, 2 comments)
21. #48067 - Real-time tok/s indicator (CLOSED, 2 comments)
22. #47914 - Real-time tok/s in TUI (OPEN, 2 comments)
23. #36326 - Misleading persistence info (CLOSED, 2 comments)
24. #36316 - Kimi stops after first tool call (CLOSED, 2 comments)
25. #36301 - Git Changes panel stuck (CLOSED, 2 comments)
26. #36289 - Subagent model config ignored (CLOSED, 2 comments)
27. #36271 - Ctrl-C terminal conflict (CLOSED, 2 comments)
28. #36266 - Toggle mouse tracking (CLOSED, 2 comments)
29. #36261 - Bug report template unclear (CLOSED, 2 comments)
30. #36259 - opencode.json .opencode/ undocumented (CLOSED, 2 comments)

**Notable themes:**
- Real-time tok/s display (#6096, #47914, #48067) - Major feature request
- Bedrock/GPT-6 Astra integration issues (#48069, #20995)
- v2 API gaps (#44984, #33896, #36289)
- Database/storage issues (#33356)
- UI/UX improvements (multiple)
- Provider-specific bugs (Ollama, Requesty, DeepSeek, Kimi, GLM)

**PRs:**
1. #48074 - compaction rules fix (OPEN)
2. #48072 - codemode interpreter refactor (OPEN)
3. #46723 - optimistic prompt position (OPEN)
4. #47874 - Alibaba inference provider (OPEN)
5. #48058 - compaction summary trim (CLOSED)
6. #48043 - remove message content mutation (CLOSED)
7. #44899 - animate inline code per character (CLOSED)
8. #48070 - Bedrock Astra tool-result images (OPEN)
9. #48068 - global menu commands (OPEN)
10. #44301 - tolerate slow event connections (CLOSED)
11. #45177 - exit cleanly when stopping dev server (CLOSED)
12. #48066 - auth account coverage tests (CLOSED)
13. #47912 - arrow keys model selector (CLOSED)
14. #48060 - acorn typed AST (CLOSED)
15. #38232 - DeepSeek V4 output limit (OPEN)
16. #48064 - defer provider registry loading (CLOSED)
17. #48048 - DeepSeek Harness ACP backend (CLOSED)
18. #48063 - file search styling (OPEN)
19. #47353 - managed OTLP exporter (OPEN)
20. #48062 - worktree dropdown spacing (OPEN)

Now let me write the report in Chinese, organized as requested.

Let me be careful with the format and provide:
1. 今日速览 - 2-3 sentences
2. 版本发布 - v1.18.30 release summary
3. 社区热点 Issues - top 10
4. 重要 PR 进展 - top 10
5. 功能需求趋势 - analysis
6. 开发者关注点 - analysis

I should make it professional and concise for technical developers.</think>

# OpenCode 社区动态日报
**2026-09-09**

---

## 📌 今日速览

OpenCode 在 24 小时内发布了 **v1.18.30**，重点为 GPT-6 引入 Astra 系统提示并修复 Bedrock/DeepSeek/Azure/OpenAI 多家 Provider SDK 兼容性问题。社区方面，**实时 tok/s 显示** 与 **v2 API 完整性** 成为两大热门议题——多个高赞 Issue 推动相关功能落地；底层同时在重写 `codemode` 解释器与压缩摘要逻辑，2.0 架构持续收敛。

---

## 🚀 版本发布

### v1.18.30（2026-09-09）

**Core 改进**
- 为 GPT-6 模型新增 **Astra 系统提示**，对齐 Bedrock `global.openai.gpt-6-astra` 行为。

**Bug 修复**
- 保留 **Bedrock DeepSeek** 模型 ID（包括 ARN 格式），解决解析失败问题。（@YeEmrick）
- 更新 **Azure Provider SDK**，带入上游兼容性修复。
- 更新 **OpenAI Provider SDK**，同步上游变更（内容截断）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 关键看点 |
|---|---|---|---|---|
| 1 | [#20995](https://github.com/anomalyco/opencode/issues/20995) Gemma 4 (e4b) 通过 Ollama OpenAI 兼容 API 调用工具失败，流式 `tool_calls` 无法识别 | CLOSED | 36 / 48 | 本周最热，Ollama 兼容层流式解析缺陷，影响本地部署主力模型 |
| 2 | [#33356](https://github.com/anomalyco/opencode/issues/33356) event 表无界增长，SQLite 膨胀至 13 GB+，缺少 retention/compaction | **OPEN** | 28 / 9 | **生产稳定性核心痛点**，长会话用户磁盘被吃满，2.0 路线已纳入 |
| 3 | [#6096](https://github.com/anomalyco/opencode/issues/6096) 实验性 tokens-per-second 显示（73 👍，本周期最高赞） | CLOSED | 21 / 73 | 社区呼声最高的"显示类"功能，已关联多个实现 PR（见下） |
| 4 | [#16344](https://github.com/anomalyco/opencode/issues/16344) Requesty Provider 加载的模型与账户实际批准的模型不一致 | CLOSED | 12 / 9 | 多 Provider 路由场景下典型"列表≠可用"问题 |
| 5 | [#9532](https://github.com/anomalyco/opencode/issues/9532) Claude 频繁出现 tool calling 错误（unavailable tool） | CLOSED | 8 / 4 | 系统提示与工具过滤相关，影响主力模型 |
| 6 | [#36119](https://github.com/anomalyco/opencode/issues/36119) Apply Patch / Edit 权限预览只显示首个文件 | CLOSED | 7 / 1 | 多文件改动安全审计体验缺陷 |
| 7 | [#31907](https://github.com/anomalyco/opencode/issues/31907) Desktop 缺少 `display_thinking` 快捷键 | CLOSED | 6 / 8 | 思考过程可见性是高频 UX 诉求 |
| 8 | [#34543](https://github.com/anomalyco/opencode/issues/34543) DeepSeek websearch schema 校验失败 | CLOSED | 5 / 0 | Native Claude Code 兼容层 schema 严格性问题 |
| 9 | [#33896](https://github.com/anomalyco/opencode/issues/33896) v2 plugin 通过 `ctx.skill.transform()` 注册的 skill 无法在 `/skills` 出现 | CLOSED | 5 / 0 | v2 插件 API 与发现机制脱节 |
| 10 | [#48069](https://github.com/anomalyco/opencode/issues/48069) **Bedrock GPT-6 Astra 在 `read` 返回图片后下一次请求失败** | **OPEN** | 2 / 0 | 与 v1.18.30 新增 Astra 提示直接相关，已有 PR #48070 待合并 |

> 补充高潜力未结：#48067 / #47914（tok/s 实时显示双帖）、#36289（子代理 model 配置被忽略）、#30510（OpenAI 限流无退避）。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容要点 |
|---|---|---|---|
| 1 | [#48074](https://github.com/anomalyco/opencode/pull/48074) `fix(core)`: 压缩规则中删除"retained-tail"引用 | OPEN | 紧跟 #48058，修正摘要提示中误导模型的内容 |
| 2 | [#48072](https://github.com/anomalyco/opencode/pull/48072) `refactor(codemode)`: 内置 globals 改为 HostFunction/HostNamespace | OPEN | codemode 第 4 次清理，解释器分派由 12 类统一为 2 类 |
| 3 | [#46723](https://github.com/anomalyco/opencode/pull/46723) `fix(app)`: 稳定 optimistic prompt 位置 | OPEN | 解决输入框在流式刷新时跳动、busy 反馈错位 |
| 4 | [#47874](https://github.com/anomalyco/opencode/pull/47874) `feat(ai)`: 新增 Alibaba 推理 Provider | OPEN | 阿里云 Model Studio（Chat Completions / Messages / Responses），需指定 region 或完整 base URL |
| 5 | [#48058](https://github.com/anomalyco/opencode/pull/48058) `fix(core)`: 裁剪压缩摘要提示 | CLOSED | GPT 摘要过长（30K+ 字符）问题修复 |
| 6 | [#48070](https://github.com/anomalyco/opencode/pull/48070) `fix(opencode)`: Bedrock Astra tool-result 图片 hoist | OPEN | 关闭 #48069——把图片从 toolResult.content 提升到 user message |
| 7 | [#48068](https://github.com/anomalyco/opencode/pull/48068) `feat(commands)`: 全局菜单命令（New Session / Open Project） | OPEN | 全页面可达的会话/项目管理入口 |
| 8 | [#48064](https://github.com/anomalyco/opencode/pull/48064) `fix(core)`: 将 Provider 注册表加载推迟到 plugin 启动 | CLOSED | 打破 plugin ⇄ provider registry 循环依赖，修复独立 Bedrock 测试 |
| 9 | [#48048](https://github.com/anomalyco/opencode/pull/48048) `feat`: 新增 DeepSeek Harness ACP 后端 | CLOSED | 可选的 ACP 执行后端，进程生命周期/会话续接/权限/取消统一托管 |
| 10 | [#47353](https://github.com/anomalyco/opencode/pull/47353) `feat(opencode)`: 支持托管 OTLP exporter 设置 | OPEN | 企业部署专属遥测出口（`telemetry.otlp.endpoint`） |

> 其他值得跟踪：#44301（SSE 握手超时延长至 30s）、#38232（DeepSeek V4 384K 输出限制被全局 32K 覆盖）、#48062/#48063（Worktree 下拉与文件搜索样式统一）。

---

## 📈 功能需求趋势

按"出现频次 × 互动量"提炼，本周期社区诉求集中在 6 个方向：

1. **实时性能可见性（最热）**
   - TPS / tok/s 显示：#6096（73 👍）、#47914、#48067——TUI 状态栏直出速率，类 Hermes 体验。
2. **多 Provider 体验**
   - 阿里云、Requesty、DeepSeek Harness ACP、GLM5-2 输出换行问题——国产模型矩阵持续扩展，兼容性细节成为瓶颈。
3. **v2 API 完整性**
   - `part.delete` 缺失（#44984）、v2 plugin skill 发现（#33896）、子代理 model 覆盖（#36289）——2.0 协议仍在补齐与 v1 的能力对齐。
4. **桌面 / TUI UX**
   - `display_thinking` 快捷键、双击最大化面板、Ctrl-C 在内嵌终端冲突、TUI 鼠标追踪开关、Optimistic prompt 抖动。
5. **本地存储与稳定性**
   - SQLite `event` 表无界增长（#33356）——长期运行的生产部署隐患，已纳入 2.0 路线。
6. **IDE / 嵌入式集成**
   - Web UI 在 VS Code iframe 下 session 列表为空（#36237）——周边工具链适配问题。

---

## 🧑‍💻 开发者关注点

**核心痛点**
- **流式协议解析脆弱**：Ollama 兼容层、Bedrock ConverseStream、Kimi reasoning_content、DeepSeek websearch schema 等均出现"流式字段不识别"类问题，本地/小 Provider 的兼容矩阵持续承压。
- **限流与重试策略缺失**：OpenAI 429 重试无退避、无上限（#30510），SDK 内部重试未禁用——开发者被迫自行缓解。
- **文档-实现脱节**：`.opencode/opencode.json` 加载行为、配置优先级（#28177）、"会话持久化"误导性回复（#36326）——文档准确性与用户预期管理亟需加强。

**高频改进呼声**
- 实时 tok/s / 输出进度可视化（写入 statusline / 暴露给 plugin）。
- 多目录会话权限模型（#23041）+ 持久化权限。
- 子代理独立 model / provider 配置（#36289）。
- 2.0 协议下补齐 `part.delete`、`message` PATCH 等 v1 能力。
- 大盘文件搜索框、Worktree 下拉、Terminal 嵌入等 UI 一致性问题。

---

*日报基于过去 24 小时 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese daily report for the jcode community based on GitHub data from 2026-09-09. Let me analyze the data carefully:

1. No new releases in the past 24 hours
2. 12 issues updated in the past 24 hours (some created earlier but updated)
3. 1 PR updated in the past 24 hours

Let me organize this into the required sections:

1. **今日速览** - 2-3 sentences summarizing the most important dynamics today
2. **版本发布** - No releases, so skip
3. **社区热点 Issues** - Pick 10 most noteworthy issues
4. **重要 PR 进展** - Only 1 PR exists, need to expand to 10 - I'll note this limitation
5. **功能需求趋势** - Trends from issues
6. **开发者关注点** - Pain points and high-frequency needs

Let me analyze each issue:

Issues updated in past 24 hours:
- #1191 [OPEN] [bug, triage: reproducible, autonomous: clear] CI broken since Aug 20 - duplicate top-level env in ci.yml, ios-testflight.yml, windows-smoke.yml - 5 comments, 0 likes
- #1185 [OPEN] [enhancement] pre_request transform hook - 3 comments, 0 likes
- #1184 [OPEN] [bug, triage: reproducible] Ghostty: focus-gained handler re-arms mode 1004 - 3 comments, 0 likes
- #1173 [OPEN] [enhancement] OpenCode Go models need protocol-aware routing - 2 comments, 5 likes
- #1187 [OPEN] [bug] Desktop notification children become zombies - 2 comments, 0 likes
- #1196 [OPEN] Recurring schedules with spawn leases - 1 comment, 0 likes
- #1200 [OPEN] Harness API messages invisible in attached TUI - 0 comments, 0 likes (new today)
- #1199 [OPEN] Compaction lifecycle hooks, custom summarizer, persisted provenance - 0 comments, 0 likes
- #1198 [OPEN] fix(swarm): validate spawn working_dir, expand ~ in tool paths - 0 comments, 0 likes
- #1197 [CLOSED] [test-ignore] permission probe - 0 comments, 0 likes
- #1195 [OPEN] macOS clipboard image AppleScript never compiles - 0 comments, 0 likes
- #1194 [OPEN] Scheduled tasks fall back to headless execution - 0 comments, 0 likes

PRs:
- #1193 [OPEN] fix: safe fixes from September 7 issue triage - This is a draft PR that addresses the CI workflow issue (#1191) and likely other triage issues

For section 4 (important PRs), there are only 1 PR updated. I should be honest about this and mention it accordingly. But the user asked for 10 - I need to think about this. I think I should provide what's available and clearly note the limited number. Or perhaps expand to recent PRs not necessarily updated in last 24 hours but mentioned in issues?

Let me look at issues referenced: #935 (observer-hook fix for desktop notifications)

I'll be transparent: there's only 1 PR updated in the last 24 hours, so I'll cover that PR in detail but note the count.

Let me also identify functional trends:
- TUI/stability (Ghostty bug, scheduled tasks vs TUI, harness API TUI invisibility)
- Memory/compaction lifecycle (#1199)
- Hooks and extensibility (#1185 - pre_request transform hook, #1199 - compaction lifecycle)
- Scheduling/reliability (#1196 - recurring schedules with spawn leases, #1194 - scheduled tasks vs TUI)
- Cross-platform bugs (macOS clipboard #1195, Linux/macOS desktop notifications #1187)
- Provider/routing flexibility (#1173 - OpenCode Go protocol-aware routing)
- Swarm/worker reliability (#1198 - spawn validation, working_dir)
- CI infrastructure (#1191 - workflow YAML errors)

Developer pain points:
- CI broken since Aug 20 (blocking all PRs)
- macOS-specific bugs (clipboard image pasting, notification zombies)
- Resource leaks / feedback loops (Ghostty 42k writes/s)
- "Black box" subsystems (compaction)
- Zombie processes
- TUI inconsistency (scheduled tasks, harness API messages)

Now let me write the report in clear, professional Chinese.

Let me draft:

---

# jcode 社区动态日报 · 2026-09-09

## 今日速览
今日 jcode 仓库共新增/更新 12 个 Issue 和 1 个 PR。社区焦点集中在三个方向：**CI 基础设施持续瘫痪**（自 8 月 20 日起三个 workflow 文件因重复 env 块失效）、**TUI 与后台调度/外部 API 的可见性矛盾**（多端同步失灵），以及 **hook/生命周期可扩展性**（pre_request transform hook、compaction 生命周期、recurring schedules 等提案）。维护者 @1jehuang 已开启 PR #1193 集中修复 9 月 7 日 triage 中识别的"安全修复"，但尚处 Draft 阶段，未合并。

## 版本发布
过去 24 小时无新版本发布。

## 社区热点 Issues

### 1. #1191 - CI 全面瘫痪近三周
- **重要性**：⭐⭐⭐⭐⭐（影响所有 PR / master）
- **状态**：OPEN, reproducible, autonomous-clear
- **摘要**：`ci.yml`、`ios-testflight.yml`、`windows-smoke.yml` 三个 GitHub Actions 文件因重复顶层 `env` 块导致 "Invalid workflow file" 错误，自 8 月 20 日以来所有 master 与 feature branch 的运行都在启动瞬间失败。
- **社区反应**：5 条评论，0 👍
- 链接：https://github.com/1jehuang/jcode/issues/1191

### 2. #1173 - OpenCode Go 模型需要协议感知路由
- **重要性**：⭐⭐⭐⭐（5 👍，本批最高）
- **状态**：OPEN, enhancement
- **摘要**：OpenCode Go 暴露了需要不同线协议（wire protocols）的模型，但 jcode 一律走 OpenAI 兼容的 Chat Completions 传输，导致 `muse-spark-1.3-contributor` 等模型在 jcode 中直接失败。
- **社区反应**：2 条评论，5 👍
- 链接：https://github.com/1jehuang/jcode/issues/1173

### 3. #1184 - Ghostty 聚焦触发 42k writes/s 反馈循环
- **重要性**：⭐⭐⭐⭐（性能/资源问题）
- **状态**：OPEN, reproducible
- **摘要**：在 Ghostty 终端中，空闲 jcode 会话因 focus-gained 处理器反复重新启用 mode 1004，导致客户端烧掉 66% CPU、渲染线程 90-106%，每秒向 114x32 终端写 ~42,000 个 61 字节的 write() 系统调用。
- **社区反应**：3 条评论
- 链接：https://github.com/1jehuang/jcode/issues/1184

### 4. #1185 - pre_request transform hook：在每次调用前重写 provider-bound 请求
- **重要性**：⭐⭐⭐⭐（核心可扩展性提案）
- **状态**：OPEN, enhancement, needs-decision
- **摘要**：当前 hooks 只能观察 turn 和 gate 工具调用，无法在每轮重写发送给 provider 的消息数组。需求场景包括消息标记、丢弃、水印、内存塑形等。
- **社区反应**：3 条评论
- 链接：https://github.com/1jehuang/jcode/issues/1185

### 5. #1199 - Compaction 生命周期 hooks、自定义摘要器、持久化来源
- **重要性**：⭐⭐⭐⭐
- **状态**：OPEN
- **摘要**：Compaction 是黑盒，80% 阈值触发后只输出日志和 TUI 通知，外部工具既无法观察也无法影响其行为。作者 @SK-DEV-AI 提议添加 started/finished 事件、自定义摘要器、provenance 持久化。
- **社区反应**：0 评论（新开）
- 链接：https://github.com/1jehuang/jcode/issues/1199

### 6. #1196 - 周期调度 + spawn leases
- **重要性**：⭐⭐⭐⭐
- **状态**：OPEN
- **摘要**：调度工具目前是单次的；周期调度靠 agent 自我重排，一旦某次 wake 丢失/失败/报错，链就永久中断。@SK-DEV-AI 提议引入"spawn leases"原语。
- **社区反应**：1 条评论
- 链接：https://github.com/1jehuang/jcode/issues/1196

### 7. #1200 - Harness API 消息在已附加的 TUI 中隐身
- **重要性**：⭐⭐⭐（新开今日）
- **状态**：OPEN
- **摘要**：外部客户端通过 `api-bridge` 提交的消息被接受并写入 session 历史，但在同一 session 上已经打开的 TUI 中看不到文本内容，审阅者/编排指令对终端旁站者不可见。
- **社区反应**：0 评论（今日新开）
- 链接：https://github.com/1jehuang/jcode/issues/1200

### 8. #1194 - 调度任务在 TUI 仍开启时退回 headless 执行
- **重要性**：⭐⭐⭐
- **状态**：OPEN
- **摘要**：当一个调度任务的目标 session 仍开着 TUI 时，任务在后台运行并修改文件，但 TUI 停在上一条响应上，用户既看不到进度也看不到完成。在 Homebrew jcode 0.84.0 (macOS arm64) 上复现。
- **社区反应**：0 评论
- 链接：https://github.com/1jehuang/jcode/issues/1194

### 9. #1187 - Desktop notification 子进程再次变成僵尸
- **重要性**：⭐⭐⭐
- **状态**：OPEN, reproducible
- **摘要**：#935 中的 observer-hook 修复未覆盖 desktop notification helpers；`notify-send` (Linux) 和 `osascript` (macOS) 启动后仍被立即丢弃 `std::process::Child`，造成僵尸进程。
- **社区反应**：2 条评论
- 链接：https://github.com/1jehuang/jcode/issues/1187

### 10. #1195 - macOS 剪贴板图像 AppleScript 永远无法编译
- **重要性**：⭐⭐⭐
- **状态**：OPEN
- **摘要**：`crates/jcode-tui/src/tui/app/helpers.rs` 的 `clipboard_image()` 在 macOS 分支的 AppleScript 永远不会编译成功，整个 `osascript` 路径是死代码，所有图像粘贴都悄悄回退到 `arboard`。影响低调但影响面广。
- **社区反应**：0 评论
- 链接：https://github.com/1jehuang/jcode/issues/1195

### 附：其它今日更新 Issue（简列）
- #1198 - 修 swarm：验证 spawn working_dir、展开 `~`、写错误更清晰（@JJ245-JJ）
  - 链接：https://github.com/1jehuang/jcode/issues/1198
- #1197 - [CLOSED] [test-ignore] permission probe（@JJ245-JJ，已关闭）
  - 链接：https://github.com/1jehuang/jcode/issues/1197

## 重要 PR 进展

> 过去 24 小时仅 #1193 一个 PR 更新，详细如下。仓库近期 PR 节奏较慢，建议关注 triage PR 与新功能合并窗口。

### #1193 - fix: 9 月 7 日 triage 中的安全修复
- **状态**：OPEN, Draft
- **作者**：@1jehuang（仓库所有者）
- **概要**：
  - 合并 CI、iOS TestFlight、Windows Smoke 三处 workflow 重复的顶层 `env` 块（对应 #1191），全部 9 个 workflow 文件通过"拒绝重复"的 YAML 解析。
  - 其它 workflow（其它 6 个）未受相同问题影响。
  - 状态：Draft，等待目标回归测试与合并的 TUI 构建结果；未引入任何贡献者分支代码。
- **意义**：这是修复 #1191 的关键 PR，目前是解除全仓库 CI 阻塞的预期修复路径。
- 链接：https://github.com/1jehuang/jcode/pull/1193

## 功能需求趋势

从近 24 小时更新的 12 个 Issue 中提炼，社区关注的功能方向按热度排序：

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **Hook / 生命周期可扩展性** | #1185 (pre_request transform hook), #1199 (compaction lifecycle hooks) | 双提案由 @SK-DEV-AI 集中提出，暗示外部集成方强烈需要可观测、可干预的内部事件 |
| **调度可靠性** | #1196 (recurring schedules + spawn leases), #1194 (scheduled tasks 与 TUI 交互) | 单次调度模型的脆弱性已被多次诟病 |
| **多 Provider / 协议路由** | #1173 (OpenCode Go 协议感知) | 5 👍 表明这是当前最受认同的功能缺口 |
| **TUI 一致性与可见性** | #1200 (harness API 隐身), #1194 (scheduled headless) | 多端/多通道状态同步是显著痛点 |
| **跨平台死代码 / 僵尸进程** | #1195 (macOS AppleScript), #1187 (desktop notify) | macOS/Linux 分支长期欠维护 |
| **CI / 发布基础设施** | #1191 | 三周未修，影响所有贡献者 |

## 开发者关注点

汇总反馈中的高频痛点：

1. **CI 阻塞是当前最大生产力瓶颈**：#1191 自 8 月 20 日起让所有 CI 红灯，任何 PR 都无法获得信号，#1193 仍处 Draft，merge 之前社区基本处于"半停滞"状态。

2. **"黑盒"子系统亟待可观测**：compaction、pre_request、schedule 这些核心流程对外只暴露一行日志，TUI 之外的工具既不能观察也不能干预，#1185、#1199、#1196 都在从不同侧面修补这一缺口。

3. **TUI 与后台执行的状态撕裂**：当同一 session 同时有 TUI 和后台 agent（或外部 harness 客户端）时，进度、消息、可见性三件事都会出错（#1200、#1194）。

4. **终端/平台特定的资源泄漏**：Ghostty 模式 1004 反馈循环（#1184）、桌面通知僵尸子进程（#1187）、macOS AppleScript 死代码（#1195）——都指向"边缘路径没人在意"的累积技术债。

5. **swarm 工作者的鲁棒性**：#1198 列出 spawn 时 working_dir 校验缺失、`~` 未展开、写错误模糊等问题，反映 swarm 在真实使用中还很粗糙。

6. **Provider 灵活性单点失误**：把多种协议的模型都强制走 Chat Completions（#1173）是一个典型的"模型即服务"假设反噬，体现社区对 jcode 接入更多 backend 的期待。

---

这份日报适合技术开发者快速了解当日社区动向。让我继续打磨一下格式并确保所有链接都正确。

让我重新审视一下结构。用户的请求是：
1. 今日速览 ✓
2. 版本发布 - 无则省略 ✓
3. 社区热点 Issues - 10 个 ✓
4. 重要 PR 进展 - 10 个（数据只有 1 个，需要说明）
5. 功能需求趋势 ✓
6. 开发者关注点 ✓

对于第 4 部分只选了 1 个 PR，用户要求 10 个。我应该说明这个数据稀缺，或者从 issues 中提到的相关修复 PR 来扩展。但严格说只有 1 个 PR 在过去 24 小时更新。我会诚实标注。

实际上看看 PR 摘要，"safe fixes from September 7 issue triage" - 这可能涵盖多个修复，但只算一个 PR。我会诚实指出只有 1 个 PR，并详细说明。

另外 #1197 是个 test-ignore 已关闭的，可以放在附注里提一下。

格式上我希望尽量使用 markdown 表格、列表，让日报读起来舒服。</think>

# jcode 社区动态日报 · 2026-09-09

## 📌 今日速览

今日仓库共 **更新 12 个 Issue、1 个 PR，无新版本发布**。社区注意力集中在三个方向：(1) **CI 自 8 月 20 日起持续瘫痪**（三个 workflow 重复 `env` 块，所有 master/PR 红灯）；(2) **TUI 与后台调度 / 外部 API 的可见性撕裂**（harness 消息隐身、调度任务退回 headless）；(3) **hook / 生命周期可扩展性**（@SK-DEV-AI 集中提出 pre_request transform hook、compaction 生命周期 hooks、recurring schedules 三连提案）。维护者 @1jehuang 已开启 **PR #1193** 集中修复 triage 中识别出的"安全修复"，但仍为 Draft、未合并。

---

##  版本发布

过去 24 小时无新版本发布（最近版本仍为 Homebrew 上的 `v0.84.0-dev`）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#1191](https://github.com/1jehuang/jcode/issues/1191) · CI 全面瘫痪近三周  ⭐⭐⭐⭐⭐
- **标签**：`bug`, `reproducible`, `autonomous-clear`
- **要点**：`ci.yml` / `ios-testflight.yml` / `windows-smoke.yml` 因重复顶层 `env` 块触发 GitHub Actions "Invalid workflow file"，**自 8/20 起所有 master 与 feature branch 的运行在启动瞬间失败**。这是当前社区最大的生产力瓶颈。
- **社区反应**：5 评论，0 👍
- **修复路径**：见 PR #1193。

### 2. [#1173](https://github.com/1jehuang/jcode/issues/1173) · OpenCode Go 模型需协议感知路由  👍5
- **标签**：`enhancement`, `needs-decision`
- **要点**：OpenCode Go 暴露的多个模型走不同 wire 协议，但 jcode 统一强制走 OpenAI 兼容的 Chat Completions，导致 `muse-spark-1.3-contributor` 等模型在 jcode 中直接失败。
- **社区反应**：2 评论，**5 👍（本批最高）** —— 普遍认同是模型路由灵活性的真实缺口。

### 3. [#1184](https://github.com/1jehuang/jcode/issues/1184) · Ghostty 聚焦触发 42k writes/s 反馈循环
- **标签**：`bug`, `reproducible`, `autonomous-clear`
- **要点**：在 Ghostty 中，**空闲会话**（无输入、无流式输出）focus-gained

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi (earendil-works/pi) repository for the daily report dated 2026-09-09.

Key observations:
1. No new releases in past 24 hours
2. 50 issues updated, showing top 30 with comments
3. 16 PRs updated

Let me categorize and analyze:

**Hot Issues (most commented):**
1. #5363 - amazon-bedrock-mantle provider (19 comments, 15 thumbs up) - in progress, adding new provider
2. #7444 - WebSocket retry only handles two error codes (10 comments, closed)
3. #8823 - Esc during streaming fails to cancel (10 comments, closed)
4. #9052 - Fullscreen mode scroll 3x slower (7 comments, 3 likes, open)
5. #9230 - opencode-go provider missing x-opencode-session header (6 comments, closed)
6. #7445 - openai-responses developer role selection (6 comments, inprogress)
7. #5152 - Codex websocket bearer token support (5 comments, closed)
8. #5581 - pi.sendMessage() bypasses before_agent_start (5 comments, inprogress)
9. #9212 - sonnet-5 truncated edit tool calls (4 comments, closed)
10. #7739 - startup-time budget targeting jcode (4 comments, open)

**Notable Theme**: The opencode-go / x-opencode-session header issue appears in multiple issues (#9230, #9290, #9302, #9326) - this is a major infrastructure issue affecting multiple subsystems.

**Important PRs:**
1. #9351 - Fix edit preview flicker on remote edits (open)
2. #9350 - Fork-free executable lookup (closed)
3. #9347, #9346 - Gondolin undici updates (closed)
4. #9345 - Anthropic OAuth usage reports (closed)
5. #6881 - Use provider-reported cost (open, inprogress)
6. #9344 - Owner-safe UI overrides (closed)
7. #9341 - Update runtime dependencies (closed, by mitsuhiko)
8. #9337 - Compaction/context-display bug fixes (closed)
9. #9152 - DRAFT: forks streaming (closed)
10. #9329 - Detect Orca terminals as Kitty capable (open)
11. #9319 - Guard optional invalidate in MouseRegion (closed)
12. #8627 - Use ctx.cwd for cwd-sensitive tools (closed)
13. #9316 - Three easy fixes (#8919, #8717, #8720) (closed)
14. #8635 - Preserve aborted stop reason (open)
15. #9310 - Clear mouse selection on session switch (closed)

**Feature Trends:**
- New model provider support (amazon-bedrock-mantle, kimi-coding OpenAI Responses, opencode-go)
- TUI/UI improvements (fullscreen mode, scroll performance, footer issues)
- Session/signal handling (RPC SIGTERM, abort behavior)
- Cost/usage reporting
- Extension API enhancements
- Performance benchmarking vs jcode
- Security (Gondolin undici updates)

**Developer Pain Points:**
- Provider authentication header changes (opencode-go session ID requirement)
- WebSocket reliability issues with codex
- Streaming cancellation issues
- TUI/UI inconsistencies between modes
- Cross-platform quirks (CapsLock in WSL, Android fork deadlocks)

Let me write the report in Chinese, professional and concise.</think>

# pi 社区动态日报 · 2026-09-09

## 📌 今日速览

今日社区焦点集中在**外部服务商接口变更引发的级联适配问题**——OpenCode Zen 自 2026-09-06 起强制要求 `x-opencode-session` 请求头，导致 pi 在 opencode-go provider、扩展 API、上下文压缩等多个路径上同时报错（#9230、#9290、#9302、#9326）。与此同时，Anthropic OAuth 用量上报、TUI 全屏模式体验、WebSocket 流可靠性等议题持续推进，PR 方面以小颗粒修复为主，#6881（provider-reported cost）仍在评审中。

---

## 🚀 版本发布

过去 24 小时内无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 为什么值得关注 |
|---|---|---|---|---|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | 添加 amazon-bedrock-mantle provider | OPEN / inprogress | 19 / 15 | **本周最热议题**。Mantle 模型走 OpenAI 兼容 API，与现有 Converse 不兼容，社区对新增 Bedrock 接入方式需求强烈，点赞数断层领先。 |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | WebSocket 重试仅处理两个错误码 | CLOSED | 10 | Codex WebSocket 在非白名单错误下硬中止整个 turn，反映了流式连接的鲁棒性问题。 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | Esc 在流式期间不可靠取消 in-flight 请求 | CLOSED | 10 | 用户中断体验的核心痛点，影响流式响应期间的交互手感。 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | 全屏模式滚轮速度比常规模式慢 3 倍 | OPEN | 7 / 3 | 全屏模式体验缺陷，破坏用户从常规模式切换的预期，仍待修复。 |
| [#9230](https://github.com/earendil-works/pi/issues/9230) | opencode-go provider 未发送 x-opencode-session | CLOSED | 6 / 1 | OpenCode Zen 服务端策略变更的"震中"问题，触发多个关联 issue。 |
| [#7445](https://github.com/earendil-works/pi/issues/7445) | openai-responses 中 developer role 受 model.reasoning 控制 | OPEN / inprogress | 6 | 影响 OpenAI Responses API 兼容性，已推进到 inprogress 阶段。 |
| [#5581](https://github.com/earendil-works/pi/issues/5581) | `pi.sendMessage(triggerTurn:true)` 绕过 `before_agent_start` | OPEN / inprogress | 5 / 1 | 扩展 API 语义一致性问题，影响第三方扩展开发者。 |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | 设定启动时间预算，对齐 jcode 的延迟与内存 | OPEN | 4 | 性能基准对比维度，反映社区对启动性能的关注。 |
| [#9212](https://github.com/earendil-works/pi/issues/9212) | sonnet-5 via gateway: 13% edit tool 调用被截断 | CLOSED | 4 | 模型侧 schema 输出缺陷在客户端的可见表现，影响工具调用可靠性。 |
| [#9338](https://github.com/earendil-works/pi/issues/9338) | kimi-coding provider: 支持 OpenAI Responses 协议 | CLOSED | 3 | Kimi for Coding 已开通 Responses 端点（未公开文档），社区及时跟进。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 关键内容 |
|---|---|---|---|
| [#9351](https://github.com/earendil-works/pi/pull/9351) | 修复远程编辑预览闪烁 | OPEN | 编辑工具在注入式远程操作下出现"红字误报 → 正确 diff"的闪烁，提交修复。 |
| [#9341](https://github.com/earendil-works/pi/pull/9341) | 更新运行时依赖（minimatch 等） | CLOSED | mitsuhiko 本人提交：批量更新运行时依赖，保留 diff/openai/highlight.js 版本，刷新 lockfile。 |
| [#9345](https://github.com/earendil-works/pi/pull/9345) | 暴露 Anthropic OAuth 用量上报 | CLOSED | 新增 provider-neutral 用量报告与 Anthropic OAuth 适配，5 分钟 token 分区缓存 + in-flight dedupe。 |
| [#9344](https://github.com/earendil-works/pi/pull/9344) | 新增 owner-safe UI 覆写接口 | CLOSED | 为主题/页脚/编辑器提供基于对象身份的交互式覆写 API，过期 release 不影响当前状态。 |
| [#9337](https://github.com/earendil-works/pi/pull/9337) | 压缩估计与失败/中止上下文显示边界 | CLOSED | 把下游 fork 已修的 Case 3 压缩触发与 getContextUsage 三处 bug 移植回 upstream。 |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | TUI 将 Orca 终端识别为 Kitty-image 兼容 | OPEN | 让 Orca 终端支持内联图、真彩、OSC 8 链接，避免退化到纯文本。 |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | 使用 provider 上报的 cost 字段 | OPEN / inprogress | 优先采用 usage.cost/cost_details.upstream_inference_cost，回退到 catalog rates。 |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | cwd 敏感工具改用 `ctx.cwd` | CLOSED | read/write/edit/grep 在 ctx.cwd 与注册时 cwd 之间优先使用前者，提升扩展中工具的路径解析一致性。 |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | 懒初始化时保留 aborted stop reason | OPEN | 修复 #8409：中止信号穿透懒流包装器，避免认证阶段丢失中止语义。 |
| [#9316](https://github.com/earendil-works/pi/pull/9316) | 三个 easy fix（#8919、#8717、#8720） | CLOSED | 合并修复全屏 footer minSize、find/grep/ls 工具重注册等。 |

> 此外，#9346/#9347（gondolin undici 6.27→6.28 + 清理陈旧 hook）、#9350（fork-free 可执行查找，规避 Android 多线程 fork 死锁）、#9319（MouseRegion 可选 invalidate 守卫）、#9310（会话切换时清空鼠标选区）等 PR 也已合入。

---

## 📈 功能需求趋势

从 50 条活跃 Issue 提炼出当前社区最关注的**五大方向**：

1. **新模型 Provider 接入** — `amazon-bedrock-mantle`（#5363）、`kimi-coding` OpenAI Responses（#9338）、`opencode-go` session header 适配（#9230 等），呈现"上游服务策略变化 → 客户端适配"的连锁节奏。
2. **TUI/UX 一致性** — 全屏模式下的滚动性能（#9052）、零行 footer 占行（#8919）、TruncatedText 越界（#9359）、CapsLock 在 WSL 输入乱码（#9362）、硬件光标位置错误（#9339），均反映终端交互细节与跨终端兼容性仍是高频痛点。
3. **扩展 API 语义** — `pi.sendMessage` 绕过事件（#5581）、RPC 输入事件触发差异（#8718）、supervisor 接管 SIGTERM（#9328）、交付回执（#9236），扩展作者对"事件流完整性"的需求上升。
4. **性能与可靠性基准** — 启动时间对标 jcode（#7739）、上下文压缩边界（#9337）、中止语义保留（#8635），社区开始系统化度量与竞品差距。
5. **成本与用量透明化** — provider-reported cost（#6881）、Anthropic OAuth usage（#9345）、`lastChangelogVersion` 迁移（#6415），围绕成本可视化与配置可移植性展开。

---

## 🧑‍💻 开发者关注点

- **服务端策略变更的脆弱性**：OpenCode Zen 一夜之间把 `x-opencode-session` 从可选项变为强制项，暴露了 pi 在多个子系统（基础 provider、扩展 API、上下文压缩、树导航）共用同一认证头源的耦合问题，#9230/#9290/#9302/#9326 同时爆发。
- **WebSocket 流式鲁棒性**：codex WebSocket 重试白名单过窄（#7444）、瞬态失败后被永久钉在 SSE（#8125）、GPT 5.6 缓存窗口内仍 miss（#8463），开发者反复指出"连接即承诺"的脆弱性。
- **跨平台/终端碎片化**：Android 上 fork 死锁（#9350）、WSL 下 CapsLock 注入（#9362）、Orca 终端图片协议（#9329）、WezTerm 硬件光标错位（#9339），需要持续投入兼容性测试。
- **扩展/宿主边界**：扩展工具希望使用 `ctx.cwd` 而非创建时 cwd（#8627），`abort()` 之后仍可触发自动压缩（#9340），反映扩展 API 在"控制权归属"上的歧义。
- **配置可移植性**：用户用 git 多机同步 `settings.json` 时，被 `lastChangelogVersion` 这类 Pi 自身写入字段污染（#6415），社区呼吁 Pi 管理 vs 用户管理的配置分离（#4212）。

---

*报告基于 2026-09-08 ~ 2026-09-09 期间 GitHub 公开数据自动生成。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
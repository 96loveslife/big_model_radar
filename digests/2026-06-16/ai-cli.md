# AI CLI 工具社区动态日报 2026-06-16

> 生成时间: 2026-06-16 05:03 UTC | 覆盖工具: 7 个

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

<think>
The user wants me to generate a horizontal comparison analysis report based on the community dynamics of various AI CLI tools. Let me analyze the data provided and structure the report according to the six requested sections.

Let me think about the data:

1. **Claude Code** (anthropics/claude-code) - v2.1.178 released, focus on parameter-based permission rules and nested skills. Hot on macOS stability, persistent/team memory, IDE integration.

2. **OpenAI Codex** (openai/codex) - v0.140.0 released, with /usage view, /goal improvements. Hot on Linux desktop demand, Windows/macOS compatibility, performance.

3. **Gemini CLI** (google-gemini/gemini-cli) - No release. Hot on agent stability, Auto Memory security, SSRF protection, browser agent.

4. **GitHub Copilot CLI** (github/copilot-cli) - v1.0.63 released. Hot on BYOK enhancement, MCP ecosystem, session management, platform compatibility.

5. **Kimi Code CLI** (MoonshotAI/kimi-cli) - No release. Hot on Hook reliability, session continuity, network proxy, cross-platform consistency.

6. **OpenCode** (anomalyco/opencode) - No release. Hot on memory/sandbox, MCP ecosystem, Windows UTF-8, sandbox security.

7. **Qwen Code** (QwenLM/qwen-code) - v0.18.1 + desktop-v0.0.4 released. Hot on /loop self-paced, MCP schema, memory performance, model routing.

Let me prepare the report:

### 1. 生态全景 (Ecosystem Overview)
- All major vendors now have mature CLI tools
- Cross-platform compatibility is the biggest pain point
- Memory/Agent reliability is the most consistent focus
- MCP ecosystem becoming the common protocol layer
- Enterprise-grade features (team memory, multi-user, audit) emerging

### 2. 各工具活跃度对比 (Activity Comparison Table)
| Tool | Issues (24h) | PRs (24h) | Release | Hot topics |
|------|-------------|-----------|---------|------------|
| Claude Code | 50+ | 22 | v2.1.178 | Permission rules, skills, memory |
| OpenAI Codex | 50+ | 50+ | v0.140.0 | Linux desktop, Windows perf, /usage |
| Gemini CLI | 50+ | 27 | None | Agent stability, SSRF, memory security |
| Copilot CLI | 41 | 1 | v1.0.63 | BYOK, MCP, sessions |
| Kimi CLI | 4 | 2 | None | Hooks, session, proxy |
| OpenCode | 50+ | 50+ | None | Memory, sandbox, MCP, Windows |
| Qwen Code | 34 | 20 | v0.18.1 + Desktop v0.0.4 | /loop, memory, MCP, model routing |

### 3. 共同关注的功能方向 (Common Focus Areas)
- **Memory / Persistence**: Claude Code, Gemini CLI, Qwen Code, OpenCode
- **MCP Ecosystem**: All tools
- **Cross-platform (especially Windows/macOS)**: All tools
- **Session Management**: Kimi CLI, Claude Code, Qwen Code
- **Hook System**: Claude Code, Qwen Code, Kimi CLI
- **BYOK/Multi-provider**: Copilot CLI, OpenCode, Qwen Code
- **Agent reliability (subagent, MAX_TURNS)**: Gemini CLI, Claude Code

### 4. 差异化定位分析 (Differentiation Analysis)
- Claude Code: Most feature-rich, permission system, enterprise
- OpenAI Codex: Fast iteration, strong model integration
- Gemini CLI: Security-focused, agent architecture
- Copilot CLI: GitHub ecosystem integration, BYOK
- Kimi CLI: Lightweight, Chinese AI
- OpenCode: Open source, multi-provider
- Qwen Code: Chinese AI, /loop self-paced, daemon architecture

### 5. 社区热度与成熟度 (Community Activity & Maturity)
- Most active: Claude Code, OpenAI Codex, OpenCode, Gemini CLI
- Fast iteration: OpenAI Codex, Claude Code
- Mature/stable: Copilot CLI
- Light but focused: Kimi CLI
- Mid-stage: Qwen Code

### 6. 值得关注的趋势信号 (Trend Signals)
- MCP becoming standard protocol
- Memory/agent persistence as the next battleground
- BYOK + multi-provider routing for cost control
- Cross-platform as the new minimum bar
- Security (SSRF, OAuth, sandbox) moving to first-class concern
- Hook/plugin system for extensibility
- Self-paced agent loops (Qwen /loop)

Let me write this in clear, professional Chinese with data support.

I should make it well-structured and data-driven, suitable for technical decision makers. Let me also include the actual numbers from the data provided.

Let me think about this more carefully. The user provided complete reports for each tool. I need to extract:
- Numbers: issues, PRs, releases per tool
- Common themes
- Differences
- Trends

Let me count more carefully:
- Claude Code: 50 issues, 22 PRs, 1 release (v2.1.178)
- OpenAI Codex: 50+ issues, 20+ PRs (50 in total), 1 release (v0.140.0)
- Gemini CLI: 50 issues, 27 PRs, 0 releases
- Copilot CLI: 41 issues, 1 PR, 1 release (v1.0.63)
- Kimi CLI: 4 issues, 2 PRs, 0 releases
- OpenCode: 50+ issues, 50+ PRs, 0 releases
- Qwen Code: 34 issues, 20 PRs, 2 releases (v0.18.1 + desktop-v0.0.4)

Now let me write the comprehensive report.

I need to keep it professional and concise, suitable for technical decision makers. I'll aim for a balanced length that covers everything important without being too verbose.
</think>
# AI CLI 工具生态横向对比分析报告
**日期：2026-06-16** | 覆盖工具：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Qwen Code

---

## 一、生态全景

当前主流 AI CLI 工具已全面进入"**能力深水区 + 体验返修期**"的并行阶段：一方面，MCP 协议正在成为事实标准的扩展层，跨工具互操作成为新共识；另一方面，**Windows 兼容性、macOS 稳定性、长会话内存与跨平台一致性**成为所有厂商共同的工程债。从市场分布看，Anthropic 与 OpenAI 继续以高频迭代领跑，Google 押注安全与 Agent 架构，GitHub Copilot CLI 转向 BYOK 与生态整合，**开源派系（OpenCode）**与**中文厂商派系（Kimi / Qwen）**则在差异化路径上快速演进。

---

## 二、各工具活跃度对比

| 工具 | 24h 活跃 Issue | 24h 活跃 PR | 新发布 | 关键里程碑 | 当前主线 |
|------|---------------|-------------|--------|-----------|---------|
| **Claude Code** | 50+ | 22 | v2.1.178 | 参数化权限规则 + 嵌套 Skills | 权限精细化、macOS 稳定性 |
| **OpenAI Codex** | 50+ | 50+ | v0.140.0 | `/usage` 用量视图 + 永久会话删除 | 桌面端体验、远程 app-server |
| **Gemini CLI** | 50+ | 27 | 无 | SSRF 防护加固 + Auto Memory 安全治理 | Agent 可靠性、SSRF |
| **GitHub Copilot CLI** | 41 | **1** | v1.0.63 | `deferTools` + `/diff w` 键 | BYOK、MCP、会话管理 |
| **Kimi Code CLI** | **4** | 2 | 无 | Hook 修复 + 会话恢复回退 | Hook 体系、网络代理 |
| **OpenCode** | 50+ | 50+ | 无 | Windows EncodedCommand + MCP 能力补齐 | 内存治理、沙箱安全 |
| **Qwen Code** | 34 | 20 | v0.18.1 + Desktop v0.0.4 | `/loop` wakeup primitive + Daemon 状态 API | 自我节奏循环、MCP 兼容 |

> **速读**：OpenAI Codex 与 OpenCode 在 PR 数量上并列第一（≥50），但 Codex 通过 v0.140.0 正式版稳定落地；Claude Code 的 v2.1.178 是当周最重磅特性发布；Copilot CLI 与 Kimi CLI 在 PR 端活跃度偏低，前者反映官方主导节奏，后者反映项目体量。

---

## 三、共同关注的功能方向

以下 7 个方向被 **3 个及以上工具** 共同关注，是行业共识级需求：

| 共同方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **🧠 持久化记忆 / 团队记忆** | Claude Code、Qwen Code、OpenCode、Copilot CLI | 跨会话上下文、Shared Team Memory、auto-memory OOM 修复、Chronicle 历史整合 |
| **🔌 MCP 生态完善** | Claude Code、Qwen Code、OpenCode、Gemini CLI、Codex | 工具数量 128+ 报错、Schema 兼容、OAuth SSRF、子代理 MCP 访问、OpenAI provider 净化 |
| **🪟 Windows / 跨平台稳定性** | **全部 7 个工具** | WSL 路径映射、ARM64 panic、PowerShell UTF-8、TMUX 滚动、Mac 触控板 |
| **🔑 BYOK 与多 Provider 路由** | Copilot CLI、Qwen Code、OpenCode、Codex | 多模型热切换、自定义 Header、多 provider 同 model id 路由、Amazon Bedrock 凭据 |
| **🪝 Hook / 插件扩展体系** | Claude Code、Qwen Code、Kimi CLI | UserPromptSubmit 输入为空、参数化权限规则、Hook 输出限制（10K 字符）|
| **💸 成本可见性与计费透明** | Claude Code、Copilot CLI、OpenCode、Qwen Code | 失败请求仍计费、tokens/s 展示、成本币种配置、token usage 暴露 |
| **🛡 安全与沙箱治理** | Gemini CLI、OpenCode、Claude Code | SSRF DNS 解析、Agent 文件越权、secrets 处理、symlink 逃逸 |

**总结**：**MCP、跨平台一致性、Memory、安全**已形成"行业四件套"。

---

## 四、差异化定位分析

| 工具 | 产品定位 | 目标用户 | 核心技术路线 | 差异化优势 |
|------|---------|---------|------------|-----------|
| **Claude Code** | 高端企业级 IDE/CLI 双形态 | 工程师 + 企业研发 | 集中式 SaaS + 插件系统 | **参数化权限 + 嵌套 Skills**，权限治理最细 |
| **OpenAI Codex** | 通用 Coding Agent 工具链 | 全栈开发者 | Rust 重写 + 远程 app-server | 性能优化激进（rollout metadata 提速）、Bedrock 托管 |
| **Gemini CLI** | 安全优先的 Agent CLI | 企业 + 内部团队 | 行为评估驱动 + SSRF 防护 | **行为评估测试体系（76 项覆盖 6 模型）**，安全最严 |
| **GitHub Copilot CLI** | GitHub 生态终端入口 | GitHub 现有订阅用户 | 与 VSCode/IDE 深度协同 | 唯一原生整合 **Chronicle / Reindex** 历史能力 |
| **Kimi Code CLI** | 轻量中文 AI CLI | 中文开发者 | 简洁工具链 + Hook 体系 | 体积小、Hook 行为可预期 |
| **OpenCode** | 开源多 Provider CLI | 隐私/本地模型用户 | 多 LLM 路由 + 插件市场 | **开源、桌面端支持最广、Datadog/MLflow 接入** |
| **Qwen Code** | 中文 Agent 平台型 CLI | 中文 + 企业 + 自托管 | Daemon 架构 + `/loop` 自驱动 | 唯一正在落地 **`/loop` 自我节奏循环**（session wakeup primitive） |

> **关键判断**：Claude Code 走"**深度企业化**"路径（权限、记忆、团队）；OpenAI Codex 走"**性能与规模**"路径（rollout、远程、桌面）；Gemini CLI 走"**安全与评估**"路径；Copilot CLI 走"**生态整合**"路径；OpenCode / Qwen / Kimi 三家在"**多 Provider 灵活性 + 中文/本地**"市场分占山头。

---

## 五、社区热度与成熟度

### 按 Issue × PR × Release 综合活跃度排序

| 排名 | 工具 | 综合活跃度 | 成熟度判断 |
|------|------|-----------|----------|
| 1 | **OpenAI Codex** | 🔥🔥🔥🔥🔥 | 高速迭代期，v0.140 → v0.141 同步推进 |
| 2 | **Claude Code** | 🔥🔥🔥🔥🔥 | 已进入 v2.1.x 稳定深耕期，回归风险显现 |
| 3 | **OpenCode** | 🔥🔥🔥🔥 | 开源派最活跃，PR 流量与 Claude Code 持平 |
| 4 | **Gemini CLI** | 🔥🔥🔥🔥 | 维护者驱动型，P1/P2 集中治理 |
| 5 | **Qwen Code** | 🔥🔥🔥 | 中文圈头部，PR 体量稳步上升 |
| 6 | **GitHub Copilot CLI** | 🔥🔥 | 节奏放缓，依赖官方主导 |
| 7 | **Kimi Code CLI** | 🔥 | 体量小，Issue/PR 量级显著低于其他 6 家 |

### 成熟度评估

- **高度成熟**（架构稳定、生态成型）：Claude Code、Copilot CLI —— 已进入"修补 + 小步快跑"阶段
- **快速成长**（特性密集落地）：OpenAI Codex、Qwen Code —— 主版本特性饱和，需治理质量门
- **高速演进**（方向仍在调整）：Gemini CLI、OpenCode —— 架构和协议层仍在变化
- **早期阶段**（社区初成）：Kimi CLI —— 用户基数小，Issue 流通量低

---

## 六、值得关注的趋势信号

### 🚨 1. **MCP 协议已成"事实标准"**
7 个工具中 5 个在过去 24h 都在修 MCP 相关问题（Codex 缓存插件能力、Qwen Schema 兼容、OpenCode 净化工具定义、Claude Code 内存爆炸、Gemini SSRF 防护）。MCP 已从"可选项"变为"入场券"。

### 🧠 2. **"记忆"成为下一代主战场**
- Claude Code 推 **Shared Team Memory**
- Qwen Code 推 **auto-memory + /loop 上下文**
- OpenCode 推 **Memory Megathread**（要求社区提交 heap snapshot）
- Copilot CLI 推 **Chronicle** 整合 IDE 历史
- Gemini CLI 推 **确定性 redact** 而非依赖 LLM

**判断**：2026 下半年到 2027 上半年，"**会话内/跨会话/跨成员**"三层记忆体系将成为厂商差异化核心。

### 🪝 3. **Hook / 插件体系进入"扩展性瓶颈期"**
- Claude Code 用户要求放宽 10K 字符限制
- Qwen Code 要求 hook 增加 `terminalSequence` 字段
- Kimi CLI 在修 `UserPromptSubmit` 空 prompt
- Codex 要求 `apply_patch` 工具不再被错误生成 shell 命令

**判断**：扩展性需求已超过当前实现能力，**"事件契约 + 工具语义"标准化**成为下一阶段关键。

### 💻 4. **Windows 是普遍性短板**
当周 7 个工具中 **6 个** 有 Windows 相关 hot issue（WSL 路径、PowerShell UTF-8、ARM64 panic、TMUX 滚动、杀软误报、admin 降权）。**没有一家在 Windows 体验上取得明显领先**，这是行业级工程债。

### 💸 5. **成本可见性成为用户刚需**
`/usage`（Codex）、`/stats`（Qwen）、AIC 失败计费（Copilot）、币种配置（OpenCode）—— 用户对"跑了多少 token、花了多少钱"的要求正在从"可选"变"必选"，**成本面板**成为下一个必做功能。

### 🔒 6. **SSRF / OAuth / 沙箱成为安全新前线**
Gemini CLI 一日内合并 3 个 SSRF 修复（DNS 解析、redirect、OAuth metadata）；OpenCode 长期推进 Agent 沙箱（#2242 已开 53 👍）；Claude Code 修复 symlink 逃逸。**LLM Agent 触网安全**正成为企业落地最大阻力。

### 🔁 7. **"自驱动 / 自我节奏" Agent 模式兴起**
Qwen Code 的 `/loop` 生态在 24h 内推进 14+ 子任务，**session wakeup primitive** 已合入。这暗示：**Agent 正在从"被动响应"向"自驱动循环"演进**，可能改变 IDE/CLI 的人机协作范式。

---

## 📌 给技术决策者与开发者的结论

1. **选型建议**：
   - 追求**最细权限治理** → Claude Code
   - 追求**最新模型 + 性能** → OpenAI Codex
   - 追求**安全合规** → Gemini CLI
   - 追求**GitHub 生态整合** → Copilot CLI
   - 追求**开源/本地/隐私** → OpenCode
   - 追求**中文/自托管/企业** → Qwen Code
   - 追求**轻量简洁** → Kimi CLI

2. **架构演进关注点**：MCP 协议、Memory 三层模型、Hook 事件契约、Windows 跨平台——这 4 项能力将在 12 个月内决定下一阶段竞争格局。

3. **风险预警**：当前所有工具都面临 **"快速迭代引入回归"** 的质量门问题（Claude Code v2.1.178 当天即出现 TUI 渲染 bug，Codex 26.609 版本在 Windows 上连续崩溃，OpenCode 1.15.1 破坏 Bun 安装），建议在生产环境使用中保持版本锁定与变更管控。

4. **开发者机会**：MCP server 开发、跨平台兼容性测试、Memory 后端集成、Cost 可视化工具、Hook 事件标准化 —— 这些方向在 2026 H2 都有明确的供需缺口。

---

*报告基于 2026-06-16 当日公开 GitHub Issues

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to generate a comprehensive report on Claude Code Skills community trends based on the GitHub data provided. Let me analyze the data carefully.

Looking at the data:
- 50 PRs total, top 20 shown
- 50 Issues total, top 15 shown
- Data cutoff: 2026-06-16

Let me identify the most notable items:

**Top PRs (by relevance, since comment counts are "undefined" for most):**
1. #514 - document-typography skill - typographic quality control
2. #486 - ODT skill - OpenDocument text creation
3. #210 - Improve frontend-design skill
4. #83 - skill-quality-analyzer and skill-security-analyzer
5. #538 - fix(pdf) case-sensitive file references
6. #539 - fix(skill-creator) YAML special characters
7. #541 - fix(docx) tracked change w:id collision
8. #181 - SAP-RPT-1-OSS predictor skill
9. #1140 - agent-creator skill
10. #361 - Detect unquoted YAML special characters
11. #1099 - skill-creator Windows fix
12. #95 - System documentation
13. #509 - CONTRIBUTING.md
14. #1298 - skill-creator run_eval.py fix
15. #723 - testing-patterns skill
16. #1050 - skill-creator Windows subprocess
17. #362 - Fix UTF-8 panic
18. #147 - codebase-inventory-audit skill
19. #154 - shodh-memory skill
20. #444 - AURELION skill suite

**Top Issues (by comments):**
1. #228 - Enable org-wide skill sharing in Claude.ai (14 comments, 7 👍)
2. #556 - run_eval.py 0% trigger rate (12 comments, 7 👍)
3. #62 - All my skills have disappeared (10 comments, 2 👍)
4. #202 - skill-creator should be updated to best practice (8 comments, 1 👍)
5. #492 - Security: Community skills under anthropic/ namespace (7 comments, 2 👍)
6. #412 - agent-governance skill (6 comments, 0 👍)
7. #189 - document-skills and example-skills duplicate (6 comments, 9 👍)
8. #1175 - SharePoint security concerns (4 comments)
9. #29 - Usage with bedrock (4 comments)
10. #16 - Expose Skills as MCPs (4 comments)
11. #1169 - skill-creator recall=0% (3 comments)
12. #1061 - Windows compatibility (3 comments)
13. #184 - agentskills.io redirects (3 comments, 4 👍)
14. #61 - "Not found" error (3 comments)
15. #1220 - multi-file preload (2 comments)

Key themes I see:

1. **Skill Creator (skill-creator) is broken** - This is a HUGE theme. Multiple issues (#556, #1169, #1061) and PRs (#539, #361, #1099, #1050, #362, #1298) all address bugs in the skill-creator tool, particularly:
   - run_eval.py showing 0% recall
   - Windows compatibility issues
   - YAML parsing issues
   - UTF-8 encoding issues

2. **Document Quality and Formats** - Many skills focused on document generation:
   - document-typography (#514)
   - ODT (#486)
   - PDF (#538)
   - DOCX (#541)

3. **Meta-skills** - Skills that help create or evaluate other skills:
   - skill-quality-analyzer (#83)
   - skill-security-analyzer (#83)
   - agent-creator (#1140)
   - skill-creator fixes

4. **Security concerns** - 
   - #492 - Community skills in anthropic/ namespace (trust boundary)
   - #1175 - SharePoint security
   - #412 - agent-governance proposal

5. **Memory and Context** - 
   - shodh-memory (#154)
   - AURELION with memory components (#444)
   - #1220 - multi-file preload for skills

6. **Domain-specific Skills** - 
   - SAP-RPT-1-OSS (#181)
   - frontend-design (#210)
   - testing-patterns (#723)
   - codebase-inventory-audit (#147)

7. **Distribution & Integration** - 
   - #228 - org-wide skill sharing
   - #16 - Skills as MCPs
   - #29 - Bedrock integration

8. **Documentation & Process** - 
   - #509 - CONTRIBUTING.md
   - #95 - System documentation
   - #202 - skill-creator best practices

Now let me structure the report:

1. **热门 Skills 排行** - I need to choose 5-8 based on relevance/impact. Since PR comments are undefined for most, I'll use 👍 counts and update recency as proxies for engagement. But wait, all show 👍: 0, so I need to use other indicators. Let me look at:
   - Number of recent updates (recency of activity)
   - Update dates
   - Significance to the ecosystem

Actually, since the data shows "评论: undefined | 👍: 0" for all PRs, I need to be smart about this. The user is asking me to analyze based on the data given. The fact that all are 0 might mean the data wasn't captured properly, OR it might be that PRs don't have those metrics captured.

Let me focus on the ones that are most discussed in their content - the ones that have meaningful summaries, address real problems, and show recent activity. I'll also note this data limitation in my report.

For PR rankings, I'll prioritize:
- Those with most recent activity (active discussions)
- Those addressing critical issues
- Those representing new skill directions

Top 5-8 PRs by relevance:
1. #1298 - run_eval.py fix (most recent, addresses critical bug)
2. #1140 - agent-creator (recent, fixes issue #1120)
3. #514 - document-typography (high quality, recent)
4. #486 - ODT skill (fills format gap)
5. #210 - frontend-design improvement (popular skill)
6. #83 - skill-quality-analyzer + security-analyzer (meta-skills)
7. #444 - AURELION suite (cognitive framework)
8. #723 - testing-patterns (developer focus)

For 社区需求趋势, from Issues:
- Skill distribution & sharing (org-wide sharing, #228)
- Skill-creator stability (#556, #1169, #1061)
- Cross-platform/Windows support (#1061, related PRs)
- Security & trust (#492, #1175, #412)
- Skills as MCPs (#16)
- Bedrock integration (#29)
- Better error handling (#62, #61)
- Multi-file skill management (#1220)

For 高潜力待合并 PRs:
- #1298 - Most recent, fixes critical bug
- #1140 - Addresses issue #1120
- #514 - High-quality addition
- #486 - New format support
- #83 - Meta-skill analyzer
- #444 - AURELION suite
- #361 - YAML validation
- #538 - PDF bug fix

Let me write the report in Chinese as requested.

I need to be careful about the data quality - I should note that the PR metrics (comments/likes) all show undefined/0, which makes ranking by those metrics unreliable. I'll note this and use other indicators like update recency, issue references, and problem significance.

Let me write a clean, professional report.
</think>
# Claude Code Skills 社区热点报告

**数据截止：2026-06-16** | **样本：50 PRs + 50 Issues**

> ⚠️ **数据说明**：本次抓取的 PR 评论数与点赞数字段均为空/0（疑似 API 抓取限制），故 PR 排序综合采用「最近活跃度 + 关联 Issue 引用 + 解决问题关键性」三维度评估；Issue 排序则使用真实的评论数与点赞数。

---

## 一、热门 Skills 排行

> 排序依据：最近更新活跃度 + 关联问题讨论度 + 领域代表性

### 1. [#1140 agent-creator —— 任务专用 Agent 集合的元技能](https://github.com/anthropics/skills/pull/1140)
- **作者**：@SyedaQurratAI | **状态**：OPEN
- **核心功能**：新增 `agent-creator` 元技能，支持为特定任务自动组装 Agent 集合；顺带修复 `evaluation.py` 多工具并行调用、给 `recalc.py` 加上 Windows 兼容（%APPDATA% 路径）
- **讨论热点**：直接回应 Issue #1120，是「skill-creator 工具链稳定性」这一最大社区痛点的官方级响应，落地概率高

### 2. [#514 document-typography —— 排版质量控制](https://github.com/anthropics/skills/pull/514)
- **作者**：@PGTBoos | **状态**：OPEN
- **核心功能**：解决 Claude 生成文档的三大典型排版缺陷 —— 孤词换行（orphan/widow）、段落章节标题贴底、编号错位
- **讨论热点**：触及「所有文档类 Skill 的共性痛点」，作者指出"用户很少主动要求好的排版"——这是 Agent 质量而非功能维度的问题，反响较好

### 3. [#486 ODT Skill —— OpenDocument 文本创建与模板填充](https://github.com/anthropics/skills/pull/486)
- **作者**：@GitHubNewbie0 | **状态**：OPEN
- **核心功能**：完整覆盖 ODT/ODS/ODF 格式的创建、读取、模板填充、HTML 转换
- **讨论热点**：补齐了「开放文档格式」这一长期缺口，与现有的 PDF/DOCX Skill 形成完整覆盖，对欧洲/政府/ISO 标准化场景用户价值高

### 4. [#210 Improve frontend-design skill —— 前端设计技能重构](https://github.com/anthropics/skills/pull/210)
- **作者**：@justinwetch | **状态**：OPEN
- **核心功能**：重写 `frontend-design` 的指令，提升可执行性与内在一致性；目标「让 Claude 在单次会话内真正能完成」
- **讨论热点**：此 Skill 是最常被调用的官方 Skill 之一，改动影响面大；体现了社区对"Skill 不应只是文档，而应是可执行指令"的共识

### 5. [#83 skill-quality-analyzer + skill-security-analyzer —— Skill 自检元工具](https://github.com/anthropics/skills/pull/83)
- **作者**：@eovidiu | **状态**：OPEN
- **核心功能**：五维度（结构文档 20% + ...）评估 Skill 质量；并配套安全分析工具，纳入 marketplace 的 `example-skills` 集合
- **讨论热点**：呼应 Issue #492 提出的"社区 Skill 信任边界"问题，是构建 Skill 治理体系的关键基础设施

### 6. [#723 testing-patterns —— 全栈测试模式 Skill](https://github.com/anthropics/skills/pull/723)
- **作者**：@4444J99 | **状态**：OPEN
- **核心功能**：覆盖 Testing Trophy 哲学、AAA 单元测试、React 组件测试、E2E 全套最佳实践
- **讨论热点**：填补了"测试方法论"在 Skills 生态中的空白，对企业研发团队吸引力强

### 7. [#444 AURELION Skill Suite —— 结构化认知与记忆框架](https://github.com/anthropics/skills/pull/444)
- **作者**：@Chase-Key | **状态**：OPEN
- **核心功能**：四件套 — kernel（5 层结构化思维）、advisor、agent、memory，构建"专业 AI 协作"的认知操作系统
- **讨论热点**：是迄今最系统的"认知架构"类 Skill，与 #154 shodh-memory 共同代表社区对"持久化记忆/认知框架"的强烈诉求

### 8. [#181 SAP-RPT-1-OSS Predictor —— 企业级表格预测](https://github.com/anthropics/skills/pull/181)
- **作者**：@amitlals | **状态**：OPEN
- **核心功能**：封装 SAP 开源的表格基础模型（Apache 2.0），用于 SAP 业务数据的预测分析
- **讨论热点**：是首批"特定企业生态对接"型 Skill，验证了 Skills 在企业 SaaS 场景的扩展性

---

## 二、社区需求趋势

按 Issues 评论数/点赞数提炼，按热度排序：

### 🔥 趋势 1：Skill 分发与协作仍是头号诉求（评论 14 / 👍7）
- **#228** [Org-wide skill sharing](https://github.com/anthropics/skills/issues/228) —— 用户希望直接组织内分享，而非要靠 Slack 传 .skill 文件再手动上传
- **#16** [Skills as MCPs](https://github.com/anthropics/skills/issues/16) —— 把每个 Skill 暴露为 MCP，统一"软件 API"协议
- **#29** [Bedrock 集成](https://github.com/anthropics/skills/issues/29) —— AWS 用户希望 Skills 在 Bedrock 平台可用
- **#189** [plugins 重复 Skill](https://github.com/anthropics/skills/issues/189)（👍9）—— `document-skills` 与 `example-skills` 内容重复污染上下文

### 🔥 趋势 2：skill-creator 工具链崩溃（评论 12 / 👍7）
- **#556** [run_eval.py 触发率 0%](https://github.com/anthropics/skills/issues/556) —— 描述优化循环其实在"对噪声做优化"
- **#1169** [recall=0% 复现](https://github.com/anthropics/skills/issues/1169) —— 即使是字面 slash-command 查询也命中不了
- **#1061** [Windows 三连失败](https://github.com/anthropics/skills/issues/1061) —— subprocess PATHEXT、cp1252、pipe select 全是 Unix-first 假设
- **#202** [skill-creator 应改为最佳实践导向](https://github.com/anthropics/skills/issues/202)（已关闭）—— 当前的"开发者文档风格"严重浪费 token

### 🔥 趋势 3：安全与信任边界（评论 7 / 👍2 + 4）
- **#492** [社区 Skill 滥用 anthropic/ 命名空间](https://github.com/anthropics/skills/issues/492) —— 第三方 Skill 冒充官方，破坏信任边界
- **#1175** [SharePoint + Agent Skills 的安全风险](https://github.com/anthropics/skills/issues/1175) —— 把访问控制写在 SKILL.md 是否安全
- **#412** [agent-governance Skill 提案](https://github.com/anthropics/skills/issues/412) —— 政策执行、威胁检测、信任评分、审计追踪的治理框架

### 🔥 趋势 4：稳定性 + 跨平台（评论 3+）
- **#1061** Windows 兼容性 + 相关 PRs #1099 / #1050 / #1298 / #362 集中修复
- **#1220** [多文件 preload / 内联打包](https://github.com/anthropics/skills/issues/1220) —— `refs/*.md` 多参考文件场景下只能加载 SKILL.md，限制了复杂 Skill 的设计

### 🔥 趋势 5：基本可用性回归
- **#62** [所有 Skills 突然消失](https://github.com/anthropics/skills/issues/62)（评论 10）—— 用户在本地重命名文件后丢失所有 Skills
- **#61** [加载 Skills 返回 404](https://github.com/anthropics/skills/issues/61)（评论 3）—— Team plan 普遍遇到

---

## 三、高潜力待合并 Skills

> 这些 PR 近期讨论/提交活跃、解决了关键缺陷或代表了被强烈需求的方向

| 优先级 | PR | 标题 | 亮点 |
|---|---|---|---|
| ⭐⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval.py 全面修复（Win + 触发检测 + 并行） | 6-10 提交，集成 #556/#1169 多个 Issue 的修复方案 |
| ⭐⭐⭐ | [#1140](https://github.com/anthropics/skills/pull/1140) | agent-creator + 评估脚本修复 | 5-15 提交，关闭 #1120 |
| ⭐⭐ | [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 校验：未引号 description 警告 | 与 #361 是同一问题的不同实现 |
| ⭐⭐ | [#538](https://github.com/anthropics/skills/pull/538) | fix(pdf) 修复大小写文件名引用 | 8 处大小写错误，跨平台死锁 |
| ⭐⭐ | [#541](https://github.com/anthropics/skills/pull/541) | fix(docx) 防止 tracked change w:id 与书签冲突 | 修复 OOXML 共享 ID 空间导致的文档损坏 |
| ⭐⭐ | [#362](https://github.com/anthropics/skills/pull/362) | fix UTF-8 panic on multi-byte | 替换字符长度检查为字节长度 |
| ⭐⭐ | [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows subprocess + 编码 | 两行修复，unblocks Windows 用户 |
| ⭐ | [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | 解决 #452，仓库社区健康分从 25% 提升 |
| ⭐ | [#83](https://github.com/anthropics/skills/pull/83) | quality-analyzer + security-analyzer | 回应社区对 Skill 治理的期待 |
| ⭐ | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 通用价值高，逻辑独立 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是："让 skill-creator 工具链从『能跑』进化到『可信』" —— run_eval.py 普遍 0% 召回、跨平台崩溃、YAML/UTF-8 漏洞阻塞了整个描述优化循环；与此同时，组织级分发、安全信任、多文件引用、MCP 化等基础设施议题正快速上升，预示 Skills 生态正从『技能库』向『企业级平台』过渡。**

**辅证信号**：
- 4 个 Top-10 Issue 直接指向 skill-creator 工具链（#556、#1169、#1061、#202）
- 仅 Windows + 编码类 PR 就占 Top-20 中的 4 个（#538、#1099、

---

<think>The user wants me to generate a daily report for Claude Code community dynamics based on GitHub data. Let me analyze the data carefully and structure it according to the requested format.

Let me first understand the key elements:

1. **Latest Release**: v2.1.178 - adds `Tool(param:value)` syntax for permission rules and nested skills support

2. **Hot Issues** - I need to pick 10 most noteworthy from the top 30 by comment count:
   - #62466: Image API errors consuming usage limit (26 comments, 20 likes)
   - #38788: WSL1 broken since 2.1.83 (23 comments)
   - #47023: Compact/session lifecycle hooks for memory (22 comments)
   - #38536: Shared Team Memory feature (13 comments)
   - #49933: Native WSL Remote Integration for Desktop (12 comments, 61 likes)
   - #63909: ENOSPC on macOS task runner (12 comments)
   - #64366: MCP server fan-out exhausting RAM on macOS (12 comments)
   - #29355: Programmatic session rename (9 comments, 65 likes)
   - #53346: API Connection refused on macOS (8 comments)
   - #63197: Compaction fails with context window limit (7 comments, CLOSED)
   - #33058: VSCode multiple selections (7 comments)
   - #68484: Desktop extension installs silently fail on macOS Tahoe
   - #65585: Auto-compact stopped working for third-party APIs
   - #51537: persistHookOutput 10,000 char limit
   - #68742: Fullscreen TUI stale spinner under nested subagents

3. **Important PRs** - Pick 10 most important from 22 PRs:
   - #68678: Fix triage bot not marking Desktop issues as invalid
   - #68707: Add /bug command to file GitHub issues from terminal
   - #68691: Complete author name in plugin.json
   - #68679: Strip control characters before promise comparison
   - #68672: Load only event:all rules for unknown tools
   - #68671: PostToolUse hooks cannot return permissionDecision deny
   - #68681: Correct pagination break condition
   - #68700: Add bash prefix and normalize plugin root path for Windows
   - #68702: Guard PROMPT_PARTS expansion against set -u on bash 3.x
   - #68701: Strip CRLF from Python version probe on Windows

4. **Functional Trends** - Looking at the issues:
   - Memory/persistence: #47023, #38536 - persistent memory, team memory
   - IDE integration: #49933 (WSL Desktop), #33058 (VSCode), #64204 (VSCode queuing)
   - API errors/connectivity: #62466, #53346, #65585
   - macOS issues: #63909, #64366, #65166, #65915, #68383, #65067, #68484, #65577, #68717, #68743
   - TUI issues: #68742, #65394, #68252
   - Multi-user collaboration: #60082
   - Hooks/extensions: #51537, #47023

5. **Developer Pain Points**:
   - macOS stability (multiple ENOSPC errors, kernel panics)
   - API stability (Image errors, Connection errors)
   - Windows/WSL compatibility
   - Session management issues
   - Memory limitations
   - CJK encoding issues

Let me write a comprehensive Chinese daily report.</think>

# Claude Code 社区动态日报
**日期：2026-06-16**

---

## 📌 今日速览

今日 v2.1.178 版本正式发布，引入 `Tool(param:value)` 参数化权限规则语法与嵌套 `.claude/skills` 加载机制，进一步强化扩展性与细粒度控制。社区热度集中在 **macOS 稳定性问题**（ENOSPC、MCP 内存爆炸、磁盘写爆）与 **持久化/团队记忆需求** 两个方向；同时 Anthropic 团队在 24 小时内合并了 13 个 PR，多为内部脚本与插件的 Windows/跨平台兼容性修复，质量改进信号明显。

---

## 🚀 版本发布

### v2.1.178（2026-06-16）
- **新增参数化权限规则语法**：支持 `Tool(param:value)` 形式匹配工具输入参数（支持 `*` 通配符）。例如 `Agent(model:opus)` 可阻止使用 Opus 子代理。
- **嵌套 Skills 自动加载**：在嵌套 `.claude/skills` 目录下的 Skills 现在会被自动加载（当处理该目录的文件时）；同名冲突时嵌套 Skill 优先。

🔗 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.178)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 要点 |
|---|-------|------|------|
| 1 | [#62466](https://github.com/anthropics/claude-code/issues/62466) 重复的 "Image couldn't be processed" 错误消耗配额 | 💬26 👍20 | 高优先级 Bug：图像处理 API 失败却仍计入使用额度，已持续约三周 |
| 2 | [#38788](https://github.com/anthropics/claude-code/issues/38788) WSL1 上 2.1.83+ 版本崩溃 | 💬23 👍4 | 回归性问题，影响 WSL1 用户长达两个半月未解决 |
| 3 | [#47023](https://github.com/anthropics/claude-code/issues/47023) 暴露 compact/会话生命周期 hooks | 💬22 👍4 | 增强提案：开放 hook 供外部记忆层介入，社区已有 5+ 个相关 issue |
| 4 | [#38536](https://github.com/anthropics/claude-code/issues/38536) 共享团队记忆（Shared Team Memory） | 💬13 👍6 | 企业级痛点：当前记忆系统仅限个人，缺乏跨成员知识流转 |
| 5 | [#49933](https://github.com/anthropics/claude-code/issues/49933) Desktop 原生 WSL 远程集成（Windows） | 💬12 👍**61** | 票数最高的请求之一，要求 Claude Desktop 在 Windows 上原生集成 WSL |
| 6 | [#63909](https://github.com/anthropics/claude-code/issues/63909) 任务运行器在 macOS 误报 ENOSPC | 💬12 👍19 | macOS 普遍性问题，Bash 工具在有空闲磁盘时仍报"临时文件系统已满" |
| 7 | [#64366](https://github.com/anthropics/claude-code/issues/64366) MCP 服务器 fan-out 导致 macOS 内核崩溃 | 💬12 👍0 | 严重故障：M2 Max/32GB 设备出现 4 次 kernel panic + 强制关机 |
| 8 | [#29355](https://github.com/anthropics/claude-code/issues/29355) 支持编程式会话重命名 | 💬9 👍**65** | 票数极高：希望根据工单 ID（如 `TICKET-123`）自动重命名 session |
| 9 | [#53346](https://github.com/anthropics/claude-code/issues/53346) API ConnectionRefused 错误 | 💬8 👍0 | macOS 上频繁出现 API 连接失败，影响生产使用 |
| 10 | [#68742](https://github.com/anthropics/claude-code/issues/68742) v2.1.178 全屏 TUI 在嵌套 subagent 下错位 | 💬3 👍0 | 最新版本回归：spinner 行残留 + statusline 垂直错位（WSL2） |

**附加关注**：[#63197](https://github.com/anthropics/claude-code/issues/63197)（上下文仅 20% 时仍触发 compact 失败，v2.1.153 回归）已于今日 **CLOSED**；[#65585](https://github.com/anthropics/claude-code/issues/65585)（第三方 API 自 v2.1.161 失去 auto-compact）持续升温。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | [#68707](https://github.com/anthropics/claude-code/pull/68707) 新增 `/bug` 命令 | 🟢 OPEN | 终端内直接提交 GitHub Issue 的插件，无需跳转浏览器表单 |
| 2 | [#68678](https://github.com/anthropics/claude-code/pull/68678) 修复 triage bot 误标 Desktop issue | ✅ CLOSED | issue 分类机器人此前将 Claude Desktop Bug 报告一律标为 invalid |
| 3 | [#68702](https://github.com/anthropics/claude-code/pull/68702) ralph-wiggum 修复 bash 3.x `set -u` | 🟢 OPEN | macOS 自带 bash 3.2 触发 nounset 导致脚本中止 |
| 4 | [#68701](https://github.com/anthropics/claude-code/pull/68701) Windows CRLF 剥离 | 🟢 OPEN | Python 在 Git Bash 输出 `\r\n`，导致版本探测始终失败 |
| 5 | [#68700](https://github.com/anthropics/claude-code/pull/68700) `learning-output-style` Windows 路径兼容 | ✅ CLOSED | 添加 `bash` 前缀并规范化 `${CLAUDE_PLUGIN_ROOT}` |
| 6 | [#68699](https://github.com/anthropics/claude-code/pull/68699) hookify Windows 路径 + Python 包装器 | 🟢 OPEN | 解决 Windows 上 4 个 hookify hook 静默失败 |
| 7 | [#68689](https://github.com/anthropics/claude-code/pull/68689) 阻止 security-guidance symlink 逃逸 | 🟢 OPEN | 防止用户配置通过软链接读取敏感文件（安全修复） |
| 8 | [#68681](https://github.com/anthropics/claude-code/pull/68681) 修复 workflow 分页与 HTTP 2xx 判断 | ✅ CLOSED | `lock-closed-issues.yml` 提前终止分页导致部分 issue 未处理 |
| 9 | [#68680](https://github.com/anthropics/claude-code/pull/68680) `log-issue-events.yml` 修复 shell 注入 | 🟢 OPEN | `ISSUE_TITLE` 未转义可导致命令注入（CVE 级风险） |
| 10 | [#68679](https://github.com/anthropics/claude-code/pull/68679) ralph-wiggum 剥离控制字符 | ✅ CLOSED | Stop hook 在 transcript 含转义序列时无法识别 `<promise>` |

**观察**：13/22 PR 集中在 Windows 跨平台兼容与脚本健壮性，Anthropic 正系统性清理历史技术债。

---

## 📈 功能需求趋势

1. **持久化 & 团队记忆** ⭐⭐⭐⭐⭐
   - [#47023](https://github.com/anthropics/claude-code/issues/47023)、[#38536](https://github.com/anthropics/claude-code/issues/38536)：开放 compact hook、支持跨成员共享上下文，是当前呼声最强的方向。

2. **IDE / Desktop 深度集成** ⭐⭐⭐⭐
   - [#49933](https://github.com/anthropics/claude-code/issues/49933)（WSL 原生集成 61 票）、[#33058](https://github.com/anthropics/claude-code/issues/33058)（VSCode 多选区）、[#64204](https://github.com/anthropics/claude-code/issues/64204)（VSCode 消息队列）。

3. **会话元数据与可编排性** ⭐⭐⭐⭐
   - [#29355](https://github.com/anthropics/claude-code/issues/29355)（编程式重命名，65 票）、[#60082](https://github.com/anthropics/claude-code/issues/60082)（实时多人协作）。

4. **Hooks 能力扩展** ⭐⭐⭐
   - [#51537](https://github.com/anthropics/claude-code/issues/51537) 要求放宽 10,000 字符限制；[#47023](https://github.com/anthropics/claude-code/issues/47023) 要求暴露更多生命周期事件。

5. **第三方 API 兼容性** ⭐⭐⭐
   - [#65585](https://github.com/anthropics/claude-code/issues/65585) auto-compact 自 v2.1.161 失效，影响 Bedrock/Vertex/中转用户。

---

## ⚠️ 开发者关注点与痛点

| 类别 | 痛点 | 代表 Issue |
|------|------|------------|
| **macOS 稳定性** | 今日新增 ≥4 个 ENOSPC 误报、MCP OOM 内核崩溃、磁盘写爆被系统强杀 | [#63909](https://github.com/anthropics/claude-code/issues/63909) · [#64366](https://github.com/anthropics/claude-code/issues/64366) · [#63330](https://github.com/anthropics/claude-code/issues/63330) |
| **配额/计费透明** | 失败请求仍计费（图片 API） | [#62466](https://github.com/anthropics/claude-code/issues/62466) |
| **WSL / Windows 兼容** | WSL1 长期不可用、Windows 全屏渲染 CJK 乱码、native 工具调用结果静默丢失 | [#38788](https://github.com/anthropics/claude-code/issues/38788) · [#65394](https://github.com/anthropics/claude-code/issues/65394) · [#68741](https://github.com/anthropics/claude-code/issues/68741) |
| **会话可靠性** | session 在 resume 列表中消失、slash 命令被当作纯文本发送、Opus 4.8 长会话 XML namespace 丢失 | [#68717](https://github.com/anthropics/claude-code/issues/68717) · [#68252](https://github.com/anthropics/claude-code/issues/68252) · [#68743](https://github.com/anthropics/claude-code/issues/68743) |
| **回归风险** | v2.1.178 当天即出现 TUI 渲染问题；近期版本多次引入回归（v2.1.153 compact、v2.1.161 第三方 API、v2.1.89 hook 限制） | [#68742](https://github.com/anthropics/claude-code/issues/68742) |

**总结**：社区对 **团队级记忆、IDE 集成、参数化权限** 的需求正在从"个人增强"演变为"企业刚需"；与此同时，**macOS 平台质量与跨平台一致性**是当前最大的稳定性瓶颈，建议优先跟进 ENOSPC 与 MCP 内存治理两个共性问题。

---
*数据来源：GitHub `anthropics/claude-code` 仓库，统计窗口为 2026-06-15 至 2026-06-16。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese-language daily report for the OpenAI Codex community based on GitHub data. Let me analyze the data carefully and structure the report according to the requested format.

Let me organize the information:

**Releases (过去24小时):**
- rust-v0.141.0-alpha.2
- rust-v0.141.0-alpha.1
- rust-v0.140.0 (stable) - 主要特性：/usage 视图、/goal 改进、永久会话删除
- rust-v0.140.0-alpha.22
- rust-v0.140.0-alpha.21
- rust-v0.140.0-alpha.20

**Top Issues to highlight (10 most notable):**
1. #11023 - Linux desktop app request (113 comments, 584 likes) - highest engagement
2. #8648 - Codex replies to earlier messages bug (61 comments)
3. #3355 - Sleep/wake connectivity issue (37 comments)
4. #21527 - Codex too slow (32 comments)
5. #25719 - macOS syspolicyd/trustd CPU runaway (26 comments)
6. #2235 - apply_patch shell command bug (17 comments)
7. #28094 - Windows WSL path rewrite bug (13 comments)
8. #28190 - rg blocked by macOS (9 comments)
9. #25709 - Windows sluggish/firewall issue (9 comments)
10. #25296 - Windows elevated shell integrity (8 comments)

Or I could include more recent ones:
- #28095 - Archived chats delete button
- #28071 - macOS syspolicyd exhaust
- #26985 - Windows WSL CODEX_HOME split
- #28435 - Windows Computer Use missing
- #28442 - Desktop app crash on launch
- #28447/#28446 - 504 timeout long completions

Let me pick the 10 most important ones based on comments and recency.

**Top PRs (10 most important):**
1. #27812 - Cache discoverable plugin capabilities (code-reviewed)
2. #28455 - repair stale and custom rollout paths
3. #28163 - Use local environment for user shell commands (CLOSED but recent)
4. #28148 - experimental managed Amazon Bedrock login
5. #27751 - expose Bedrock credential source
6. #28454 - speed up latest-session and thread listing
7. #28441 - Use expect in integration tests (CLOSED)
8. #28453 - Reuse revision-stable plugin catalog snapshots
9. #28034 - Add local credential broker
10. #28429 - Add interruptible sleep tool (CLOSED)
11. #28452 - speed up rollout metadata
12. #28451 - curated plugin catalog revision markers
13. #28307 - queue TUI follow-ups through app-server
14. #28267 - dispatch queued user messages
15. #28268 - expose User Message Queue app-server API
16. #28152 - render remote environment cwd natively
17. #28146 - preserve remote environment cwd
18. #27886 - Update policy wording
19. #28396 - Record external agent import results

Let me pick the most important 10.

**Feature Trends from issues:**
- Linux Desktop App support
- Performance improvements (slow responses)
- Windows platform issues (WSL, sandboxing)
- macOS compatibility issues (syspolicyd, sandbox)
- Apply_patch tool reliability
- Computer Use feature availability
- Cross-platform environment handling
- Chat/session management features
- Custom model support
- Long-context handling

**Developer Pain Points:**
- Performance issues across all platforms
- Windows-specific bugs (WSL, sandbox, app-server)
- macOS sandboxing conflicts (Playwright)
- Apply_patch tool unreliability
- Cross-platform path handling
- Slow connection/timeouts

Now let me write the report in Chinese, structured and professional.

I'll be thorough but concise. Let me think about the language level - it should be professional technical Chinese suitable for developers.</think>

# OpenAI Codex 社区动态日报
**日期：2026-06-16**

---

## 📌 今日速览

OpenAI Codex 今日发布了 **v0.140.0 正式版**，重点引入 `/usage` 用量视图（按日/周/累计）、`/goal` 输入增强（支持大块粘贴与图片附件），以及永久会话删除能力；同时 `v0.141.0` 进入 alpha 迭代。社区方面，**Linux 桌面端**需求热度不减（Issue #11023 累计 113 条评论、584 👍），**Windows/macOS 平台兼容性**问题密集浮现，多个桌面端版本出现 CPU 失控、WSL 路径错乱、连接超时等回归性 bug。基础设施层面，PR 集中在**会话元数据读取性能优化**、**插件目录缓存**和 **Amazon Bedrock 凭据管理**三条主线。

---

## 🚀 版本发布

### rust-v0.140.0（正式版）
新增以下能力：
- **`/usage` 用量视图**：支持按日/周/累计维度查看账户 token 使用情况（[#27925](https://github.com/openai/codex/pull/27925)）
- **`/goal` 增强**：保留超大文本、大段粘贴块和图片附件，远程 app-server 会话中也生效（[#27508](https://github.com/openai/codex/pull/27508) / [#27509](https://github.com/openai/codex/pull/27509) / [#27510](https://github.com/openai/codex/pull/27510)）
- **永久会话删除**：可通过 UI/CLI 彻底清除会话数据

### rust-v0.140.0-alpha.20~22 / rust-v0.141.0-alpha.1~2
均为预发布版本，正在为 0.141.0 主线收尾。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 平台/类型 | 评论 | 👍 | 关注理由 |
|---|---|---|---|---|---|
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | App / Enhancement | 113 | 584 | 累计热度最高的 Feature Request，社区呼吁推出 Linux 桌面端，因 macOS 端耗电严重 (#10432) 促使部分用户迁移需求激增 |
| [#8648](https://github.com/openai/codex/issues/8648) | Codex replies to earlier messages instead of latest one | Agent / Bug | 61 | 55 | 多轮对话上下文错位，影响 0.77.0 版本（gpt-5.2-xhigh 模型），属于长期未解的核心对话质量问题 |
| [#3355](https://github.com/openai/codex/issues/3355) | Error sending request after macbook sleeps | Connectivity | 37 | 19 | 休眠唤醒后连接断开，长期困扰 macOS 用户，跨多版本未修复 |
| [#21527](https://github.com/openai/codex/issues/21527) | Codex is really too slow | App / Performance | 32 | 17 | 同时影响 VSCode 插件与桌面端，反映整体响应延迟问题 |
| [#25719](https://github.com/openai/codex/issues/25719) | Codex Desktop macOS triggers `syspolicyd`/`trustd` CPU runaway | macOS / Performance | 26 | 33 | 严重 macOS 桌面端资源失控，需要重启才能恢复 |
| [#2235](https://github.com/openai/codex/issues/2235) | `apply_patch` invoked as shell command → command not found | Tool-calls | 17 | 0 | 模型将 `apply_patch` 工具调用误生成为 shell 命令，跨模型与本地模型均存在 |
| [#28094](https://github.com/openai/codex/issues/28094) | Windows/WSL 路径被改写为 `C:\home` | Windows / Session | 13 | 1 | 26.609.41114 版本回归，WSL 项目路径映射错误，会话关联丢失 |
| [#28190](https://github.com/openai/codex/issues/28190) | `rg` is blocked by macOS | CLI | 9 | 9 | ripgrep 在 macOS 沙箱中被拦截，影响文件搜索工作流 |
| [#25709](https://github.com/openai/codex/issues/25709) | Windows Desktop 极度卡顿 | Windows / Performance | 9 | 2 | 26.527.60818 升级后 Windows 桌面端疑似与防火墙联动出现严重卡顿 |
| [#28442](https://github.com/openai/codex/issues/28442) | Desktop 26.609.9530.0 启动即崩溃 | Windows / App | 2 | 0 | 26.609.9530.0 在 Windows 10 上完全无法启动，回退到 26.602.9276.0 正常，反映发布链路存在明显质量问题 |

> **补充关注**：[#28071](https://github.com/openai/codex/issues/28071)（macOS syspolicyd 反复耗尽需重启）、[#28435](https://github.com/openai/codex/issues/28435)（Windows 用户缺失 Computer Use 入口）、[#28447](https://github.com/openai/codex/issues/28447)（长上下文补全触发 504 超时）

---

## 🛠 重要 PR 进展（Top 10）

### 性能与稳定性
1. **[#28452](https://github.com/openai/codex/pull/28452)** `speed up rollout metadata and history reads` — 来自 #28388 的拆分 1/4，使用缓冲读取 + 直接反序列化 + 有界分配，显著降低历史会话加载延迟。
2. **[#28454](https://github.com/openai/codex/pull/28454)** `speed up latest-session and thread listing` — 用索引更新时间 + 候选堆替代全量扫描排序，会话列表渲染优化。
3. **[#28455](https://github.com/openai/codex/pull/28455)** `repair stale and custom rollout paths` — 隔离 rollout-path 恢复逻辑，验证 SQLite 元数据路径并按线程根目录有序查找。

### 插件与目录系统
4. **[#27812](https://github.com/openai/codex/pull/27812)** ⭐ `Cache discoverable plugin capabilities`（已 code-reviewed）— 复用 `PluginCatalogSnapshot` 中的能力元数据，避免每次采样都重读插件描述文件。
5. **[#28453](https://github.com/openai/codex/pull/28453)** `Reuse revision-stable plugin catalog snapshots` — 仅复用带 root-local 修订标记的目录片段，市场列表构建提速。
6. **[#28451](https://github.com/openai/codex/pull/28451)** `Add curated plugin catalog revision markers` — 在暂存根中写入原子修订标记，避免 `.tmp/plugins.sha` 描述不一致问题。

### 多端与远程环境
7. **[#28148](https://github.com/openai/codex/pull/28148)** `add experimental managed Amazon Bedrock login and logout` — app-server 客户端可建立/移除 Codex 托管 Bedrock API key。
8. **[#27751](https://github.com/openai/codex/pull/27751)** `expose Bedrock credential source in account/read` — 让客户端区分 Codex 托管 key 与用户自有 AWS 凭据。
9. **[#28146](https://github.com/openai/codex/pull/28146)** `preserve remote environment cwd` — app-server 在跨 OS 选中 Windows exec-server 时，保留 Windows cwd 路径语法。
10. **[#28152](https://github.com/openai/codex/pull/28152)** `render remote environment cwd natively` — 在 Linux app-server 上为目标 Windows 环境渲染本地 cwd 路径，避免 `/C:/...` 这种模型可见的错位。

> **值得关注**：[#28034](https://github.com/openai/codex/pull/28034) 本地凭据代理（network_proxy MITM）、[#28307](https://github.com/openai/codex/pull/28307) / [#28267](https://github.com/openai/codex/pull/28267) / [#28268](https://github.com/openai/codex/pull/28268) User Message Queue 三件套（将客户端排队转交 app-server 持久化）。

---

## 📈 功能需求趋势

从过去 24 小时活跃议题提炼：

1. **Linux 桌面端** — 单议题 584 👍，需求最强且无替代方案
2. **跨平台稳定性** — Windows (WSL/防火墙/沙箱/启动崩溃) 与 macOS (syspolicyd/沙箱/休眠) 各占约 35%
3. **长上下文与会话管理** — 长补全 504 超时、永久会话删除、归档会话 UI 异常
4. **Computer Use 推广** — Windows 用户缺少安装入口，地区/账号层面分发不均
5. **自定义模型与本地 LLM** — apply_patch 在 gpt-oss 等本地模型下兼容性问题持续
6. **MCP / 长期记忆** — #25210 提出 OpenTTT 加密事件 DAG 防止上下文压缩导致的工作流失忆
7. **Auto-review 与安全策略** — #23211 要求允许 codex exec 在受信外部服务上运行
8. **远程 app-server 体验** — 远程项目缺失 worktree 选择器、CWD 路径渲染、shell 环境一致性

---

## 💬 开发者关注点

- **🪟 Windows 是当前最大痛点**：WSL 路径映射回归、沙箱辅助进程丢失（[#27125](https://github.com/openai/codex/issues/27125)）、桌面端 26.609.9530.0 启动崩溃、admin 启动后仍被降权（[#25296](https://github.com/openai/codex/issues/25296) / [#28107](https://github.com/openai/codex/issues/28107)）。多个用户反馈"升级即坏，回退才正常"。
- **🍎 macOS 资源失控问题集中爆发**：`syspolicyd`/`trustd` 在 26.527 与 26.609 两个版本上反复被耗尽，需要重启才能恢复（[#25719](https://github.com/openai/codex/issues/25719) / [#28071](https://github.com/openai/codex/issues/28071)），影响 Plus/Pro 全订阅层。
- **🔧 `apply_patch` 工具不稳定**：超过 4 个独立 Issue 反映同一根因——模型将工具调用生成 shell 命令、sandbox 内调用失败（[#2235](https://github.com/openai/codex/issues/2235) / [#17517](https://github.com/openai/codex/issues/17517) / [#17899](https://github.com/openai/codex/issues/17899) / [#17969](https://github.com/openai/codex/issues/17969)），是历史最久的核心可靠性问题之一。
- **⏱ 性能与响应延迟**：从 App、CLI 到补全全链路均存在"过慢"反馈（[#21527](https://github.com/openai/codex/issues/21527) / [#27240](https://github.com/openai/codex/issues/27240) / [#25709](https://github.com/openai/codex/issues/25709)），与今日 PR 中的"会话加载/列表优化"形成呼应。
- **🌐 多语言与地区化分发问题**：香港地区 Windows 用户反映 Computer Use 安装入口缺失（[#28435](https://github.com/openai/codex/issues/28435)）、`/feedback` 命令未启用；长补全 504 报告使用繁体中文提交（[#28447](https://github.com/openai/codex/issues/28447)），提示非英语地区的支持链路需补强。
- **🔄 发布质量门**：26.609 系列版本在 Windows 上连续出现崩溃与降权问题，开发者呼吁加强 RC 阶段的 Windows 自动化测试覆盖。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 报告生成时间 2026-06-16*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data provided for Gemini CLI repository and generate a comprehensive Chinese daily report for 2026-06-16.

Key observations:
1. No new releases in past 24 hours
2. 50 issues updated in past 24 hours, showing top 30 by comment count
3. 27 PRs updated in past 24 hours, showing top 20
4. Many issues are tagged "🔒 maintainer only" suggesting internal Google team tracking
5. Heavy focus on: agent behavior, security (SSRF), Auto Memory system, browser agent, sub-agents, behavioral evaluations, AST-aware tools

Let me identify key themes:
- Security: Multiple SSRF protection PRs (#27626, #27744, #27739), OAuth security
- Auto Memory system: Multiple issues (#26525, #26522, #26523, #26516) by SandyTao520
- Agent bugs: Generalist agent hangs (#21409), subagent recovery (#22323), tool limits (#24246)
- Browser agent: Wayland issues (#21983), settings.json overrides (#22267), session takeover (#22232)
- Behavioral evaluations: Epic for component-level evals (#24353)
- AST-aware tools investigation (#22745, #22746, #22747)
- Terminal issues: Shell command stuck (#25166), terminal resize (#21924), editor corruption (#24935)
- Dependency updates: Many dependabot PRs

Let me write the report now.</think>

# Gemini CLI 社区动态日报
**日期：2026-06-16**

---

## 📌 今日速览

今日 Gemini CLI 仓库无新版本发布，但社区活跃度集中在 **Agent 系统稳定性** 与 **Auto Memory 安全治理** 两条主线。多位维护者集中推进 subagent 状态判断、generalist agent 挂起等长期 P1 问题的复测与修复，同时 Auto Memory 模块的多个安全相关 issue 引发内部讨论。值得关注的是，PR 层面涌现出 **一批 SSRF 防护加固**（DNS 解析、OAuth 元数据、redirect 防护）以及 **依赖锁定策略** 的重要变更。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#24353 - Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)
- **优先级**：P1 | **评论**：7
- **重要性**：作为仓库"行为评估测试"体系的 EPIC 级跟进，已生成 76 项行为评估测试并覆盖 6 种 Gemini 模型，是衡量 CLI 质量的基线工程。
- **社区反应**：内部维护者长期跟进，影响后续 agent 调优与回归测试策略。

### 2. [#22745 - Assess AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
- **优先级**：P2 | **评论**：7 | **👍**：1
- **重要性**：评估 AST 感知工具对代理效率的影响，可在单次工具调用中精确读取方法边界，显著降低 token 噪声。
- **社区反应**：作为 Epic 驱动多个子 issue（#22746、#22747），可能影响 codebase_investigator 子代理的未来形态。

### 3. [#21409 - Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)
- **优先级**：P1 | **评论**：7 | **👍**：8
- **重要性**：当 CLI 委派给 generalist 子代理时会出现无限挂起，连"创建文件夹"这类简单任务也无法完成。👍 数最高说明用户痛点突出。
- **社区反应**：状态处于 `need-retesting`，需要后续验证修复；要求模型不委派给子代理可暂时规避。

### 4. [#22323 - Subagent MAX_TURNS 状态被错误报告为 GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
- **优先级**：P1 | **评论**：6 | **👍**：2
- **重要性**：`codebase_investigator` 子代理在触发最大轮次上限前未做任何分析，却返回 `"success"`/`"GOAL"`，导致中断被静默掩盖。
- **社区反应**：影响任务调试可信度，与 #21409 共同构成 agent 可靠性核心问题。

### 5. [#21968 - Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
- **优先级**：P2 | **评论**：6
- **重要性**：用户实测反馈 Gemini 在自定义 skill 与子代理的调度上主动性不足，需显式提示才使用。
- **社区反应**：体现"agent 自动编排 vs 显式指令"的产品张力，可能影响后续 prompt 优化方向。

### 6. [#26525 - Deterministic redaction & reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)
- **优先级**：P2（Security） | **评论**：5
- **重要性**：Auto Memory 会读取本地 transcript 并将内容发往后台抽取模型，依赖模型自身 redact 存在隐患。涉及 secret 处理流程优化。
- **社区反应**：与 #26522、#26523、#26516 共同构成 Auto Memory 安全治理系列，由同一维护者 @SandyTao520 集中推动。

### 7. [#25166 - Shell command stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)
- **优先级**：P1 | **评论**：4 | **👍**：3
- **重要性**：简单 CLI 命令执行完成后 shell 仍卡在 "Awaiting user input"，实际命令早已结束。
- **社区反应**：高频 bug，影响核心交互流程；👍 数较高说明用户实际受影响面广。

### 8. [#21983 - browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
- **优先级**：P1 | **评论**：4
- **重要性**：浏览器子代理在 Wayland 环境直接失败，限制 Linux 用户使用浏览器自动化能力。
- **社区反应**：与 #22267（Browser Agent 忽略 settings.json）、#22232（Browser 会话接管恢复）共同构成 Browser Agent 的稳定性三角。

### 9. [#24246 - Gemini CLI hits 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)
- **优先级**：P2 | **评论**：3
- **重要性**：当可用工具数超过 128（实际报告为 400）时 API 返回 400 错误，暴露工具作用域与上下文管理缺陷。
- **社区反应**：影响重度使用 MCP server 或自定义工具链的用户，亟待"智能工具裁剪"机制。

### 10. [#22672 - Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
- **优先级**：P2 | **评论**：3 | **👍**：1
- **重要性**：模型在复杂 git 操作中倾向使用 `git reset --force` 等破坏性命令，应主动推荐更安全的替代方案。
- **社区反应**：涉及产品安全姿态，长期推动 agent 主动"防御性行为"训练。

> 其他值得关注：#22093（v0.33.0 后子代理绕过权限）、#20079（symlink agent 不被识别）、#23571（tmp 脚本散布）、#21924（终端 resize 性能/闪烁）。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#27744 - fix(web-fetch): DNS 解析前置，拦截 hostname→私有 IP 绕过](https://github.com/google-gemini/gemini-cli/pull/27744)
- **状态**：OPEN | **大小**：M/L
- **关键点**：原 `isBlockedHost()` 仅检查 hostname 字面量是否在私有 IP 段，攻击者可通过 `127.0.0.1.nip.io` 等 wildcard-DNS 服务绕过。本 PR 在 SSRF 防护前先做 DNS 解析。

### 2. [#27739 - fix(web-fetch): 防止 DNS hostname 与 redirect 触发的 SSRF](https://github.com/google-gemini/gemini-cli/pull/27739)
- **状态**：OPEN | **大小**：M/L
- **关键点**：补充 web_fetch 工具的两类 SSRF 缝隙——非字面 IP 主机名与跳转目标。与 #27744 同期出现，安全团队重点合并项。

### 3. [#27626 - fix(core): 屏蔽私有 OAuth 元数据 URL](https://github.com/google-gemini/gemini-cli/pull/27626)
- **状态**：CLOSED | **优先级**：P2（Security） | **大小**：M
- **关键点**：为 MCP OAuth metadata 发现增加 SSRF 防护，`OAuthUtils.fetchProtectedResourceMetadata()` 与 `fetchAuthorizationServerMetadata()` 不再直接对来源未知的 URL 调用 `fetch()`。

### 4. [#27605 - MCP allow/block 列表合并应用到 ACP 与 policy-engine](https://github.com/google-gemini/gemini-cli/pull/27605)
- **状态**：CLOSED | **大小**：S
- **关键点**：基于 #27377 修复 MCP 允许/阻止列表绕过，统一通过 `getConsolidatedExcludedMcpServers()` / `getConsolidatedAllowedMcpServers()` 合并多 settings scope 的配置，防止 workspace 级设置削弱 user/system 级条目。

### 5. [#27572 - fix(cli): tmux 误判为浅色背景](https://github.com/google-gemini/gemini-cli/pull/27572)
- **状态**：CLOSED | **大小**：M
- **关键点**：修复在 tmux（特别是 mosh）中误判终端背景为 `#ffffff`，避免错误触发主题切换与兼容性警告。

### 6. [#27603 - fix(core): 平台感知的 shell 引导](https://github.com/google-gemini/gemini-cli/pull/27603)
- **状态**：CLOSED | **优先级**：P3 | **大小**：M
- **关键点**：在 preview-model 操作提示中加入平台感知 shell 引导，`win32` 平台展示 Windows 检查命令而非 Unix 示例，并补充核心提示的测试覆盖。修复 #27751。

### 7. [#24478 - feat(cli): 顶层 `/reload` 命令](https://github.com/google-gemini/gemini-cli/pull/24478)
- **状态**：CLOSED（Stale）
- **关键点**：新增 `/reload`（别名 `/refresh`）顶层命令，将散落的 reload 子命令合并，一次性重新同步 skills、agents、MCP servers、memory、settings。

### 8. [#27956 - feat(core): GDC air-gapped Service Identity 支持](https://github.com/google-gemini/gemini-cli/pull/27956)
- **状态**：OPEN | **大小**：M
- **关键点**：在 `google-auth-library` 升级至 v10.7.0 后，正式为 Google Distributed Cloud (GDCH) air-gapped 部署启用服务身份 token 交换，面向受限网络企业用户。

### 9. [#27948 - chore(deps): 依赖精确锁定 + 14 天冷却](https://github.com/google-gemini/gemini-cli/pull/27948)
- **状态**：OPEN | **大小**：XL
- **关键点**：移除所有直接依赖的 `^` / `~` 范围并强制 14 天冷却期。代表仓库向"稳定、可复现"供应链策略的转变。

### 10. [#27943 - fix(core-tools): `@` 引用文件的防御式路径解析](https://github.com/google-gemini/gemini-cli/pull/27943)
- **状态**：OPEN | **大小**：M/L
- **关键点**：修复 `read_file` / `replace` / `write_file` 对 `@policies/new-policies.txt` 等 `@` 提及语法的初始引用路径解析失败问题，工具报"File not found"。

> 其他：#27939（夜间 release workflow 解锁，#27865）、#24429（并行 replace 的失败行为评估）、#27947（`coreTools` → `tools.core` 迁移）、#27954（OpenTelemetry 批量升级，maintainer only）。

---

## 📈 功能需求趋势

从今日活跃 Issues 与 PR 中可提炼出以下社区最关注方向：

| 方向 | 代表性 Issue / PR | 关注度 |
|------|------|------|
| **Agent 行为可靠性** | #21409、#22323、#22093、#21968 | 🔥🔥🔥 |
| **Auto Memory 安全与质量** | #26525、#26522、#26523、#26516 | 🔥🔥🔥 |
| **Browser Agent 鲁棒性** | #21983、#22267、#22232 | 🔥🔥 |
| **SSRF / OAuth / Web-fetch 安全** | #27744、#27739、#27626 | 🔥🔥🔥 |
| **AST-aware 工具评估** | #22745、#22746、#22747 | 🔥🔥 |
| **工具数量与上下文管理** | #24246、#23571 | 🔥🔥 |
| **依赖治理与供应链** | #27948、#27954、#27952 | 🔥🔥 |
| **终端 UX 优化** | #25166、#21924、#24935 | 🔥 |
| **企业 / air-gapped 部署** | #27956 | 🔥 |
| **行为评估（evals）体系化** | #24353、#24429、#23313、#23166 | 🔥🔥 |

---

## 💬 开发者关注点

1. **Agent 状态机的可信度**：社区最集中的抱怨来自 subagent/MAX_TURNS/permission 流程——GOAL 状态被错报、子代理静默启动、generalist 挂死等，开发者要求更明确的终止语义与可观测信号。

2. **Auto Memory 的"零信任"诉求**：开发者倾向于让本地 transcript 不再依赖 LLM 的事后 redact，而采用确定性脱敏；并要求对低信号会话设置 retry 上限、避免反复扫描。

3. **SSRF 攻击面收敛**：连续出现 DNS 解析、私有 IP 校验、redirect 跳转三个维度的 PR，说明 web_fetch / OAuth 模块过去依赖字面 hostname 校验的方式已成为公认风险点。

4. **MCP 配置作用域混淆**：跨 settings scope 的 allow/block 列表行为不直观，开发者希望统一合并策略（#27605）以避免"看似禁用实则仍生效"的认知陷阱。

5. **终端兼容性与稳定性**：tmux/mosh/Wayland/外部编辑器等场景的兼容问题持续浮现，开发者期待 CLI 在非常规环境下也能保持低闪烁、无残留。

6. **工具数量的边界**：当可用工具超过 ~128 时接口即返回 400，开发者呼吁"上下文感知"自动裁剪而非全局禁启用。

7. **依赖稳定性 vs 升级便利**：#27948 提出 14 天冷却 + 严格版本锁，反映开发者对 dependabot 频繁 bump 引入破坏性变更的担忧；与此同时 OpenTelemetry、markdown-it、js-yaml、tar 等批量升级显示依赖治理进入加速期。

8. **"我对自己一无所知"**：#21432 建议 agent 能准确表述自身 CLI flags、快捷键与子命令，体现开发者希望 CLI 既能"做"也能"教"——产品自我解释能力成为新诉求。

---

*日报生成基于 2026-06-16 当日更新的 Issues / Pull Requests 数据。更多详情请访问 [gemini-cli GitHub 仓库](https://github.com/google-gemini/gemini-cli)。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
The user wants me to generate a daily community report for GitHub Copilot CLI based on the data provided. Let me analyze the data carefully:

1. **Releases**: 
   - v1.0.63 released 2026-06-15
   - v1.0.63-0 also released
   - Key changes: Blocked image attachments now show helpful messages, options sort alphabetically in --help, press w in /diff to hide whitespace, deferTools option for MCP, improved reliability for OpenAI/Anthropic/Azure, experimental /rewind changes

2. **Issues**: 41 total, showing top 30 with most comments
   - Notable ones:
     - #953: Over excessive permissions (7 comments, 3 likes) - long-standing issue
     - #3727: Regression in v1.0.60 with userPromptSubmitted hook (4 comments)
     - #3282: Multiple BYOK model support (3 comments, 8 likes - high engagement)
     - #3781: 400 error with non-multimodal models (3 comments) - CLOSED
     - #3756: Third-party MCP Servers disabled (3 comments) - CLOSED
     - #2966: Multi-session management (3 comments, 1 like)
     - #3776: UTF-8 mojibake (2 comments, 1 like)
     - #3784: Linux ARM64 Tokio panic (2 comments) - CLOSED
     - #3769: Output thread problems (2 comments, 3 likes) - CLOSED
     - #3716: Function call regression (1 comment) - CLOSED
     - #3813: Copy/paste garbled (1 comment) - similar to #3776
     - #3782: MCP stdio respawn loop (1 comment) - CLOSED
     - #3780: Repeated characters in streaming (1 comment, 1 like) - CLOSED
     - #3399: Custom headers for BYOK (1 comment, 2 likes)
     - #3767: Oversized attachment wedges session (1 comment) - CLOSED
     - #3808: Claude Sonnet prompt caching (1 comment)
     - #3797: Different prompt box layouts (1 comment)
     - #3807: --resume doesn't search content (1 comment) - CLOSED
     - #3706: Remote MCP OAuth startup fanout (1 comment) - CLOSED
     - #3818: Phone hacked (spam)
     - #3775: /chronicle standup SQLite INTERVAL (0 comments) - CLOSED
     - #3694: Resume fails with repo name mismatch (0 comments) - CLOSED
     - #3816: /chronicle ingest VS Code Copilot Chat (0 comments)
     - #3815: Debug logs missing backslash (0 comments)
     - #2534: Git worktree UI note (0 comments)
     - #3814: AIC consumption increasing on failure (0 comments, 2 likes)
     - #3812: Subagents MCP tools access (0 comments)
     - #3811: Deleted sessions in /chronicle (0 comments)
     - #3810: Standalone exe stopped working (0 comments)
     - #3809: Reindex completed with errors (0 comments)

3. **PRs**: Only 1 PR #3817 "kCreate" with no description

Let me note: there's only 1 PR and it's not substantive. I should mention this.

Now let me categorize and write the report in Chinese. The user wants a clear structure with 6 sections.

Let me think about the "功能需求趋势" (feature trends) based on the issues:
- BYOK improvements (multiple models, custom headers) - #3282, #3399
- Session management (multi-session, resume, content search) - #2966, #3807
- MCP improvements (OAuth, third-party) - #3756, #3706, #3812
- Claude Sonnet prompt caching - #3808
- VS Code integration - #3816
- Git worktree UI - #2534
- Authentication permissions - #953

Developer pain points:
- Encoding issues (UTF-8 mojibake, copy/paste)
- Platform-specific bugs (Windows, Linux ARM64)
- Performance/streaming issues (thread problems, repeated chars)
- AIC consumption on failures
- Regression issues across versions
- Subagent MCP access broken

Let me structure this as a clean Chinese daily report.

For the PR section - there's only 1 PR that's basically a no-op (kCreate "#"). I should be honest about this and note that PR activity is very low.

Let me write the report now.
</think>
# GitHub Copilot CLI 社区动态日报
**日期：2026-06-16** | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

v1.0.63 已于昨日发布，重点优化 MCP 工具加载与图片附件错误提示，**/diff** 新增 `w` 键隐藏空白差异，**/rewind** 进入实验性重构阶段。社区侧热度集中在 BYOK 多模型扩展 [#3282](https://github.com/github/copilot-cli/issues/3282)、MCP 第三方服务器策略 [#3756](https://github.com/github/copilot-cli/issues/3756) 以及 v1.0.60 引入的 hook 回归 [#3727](https://github.com/github/copilot-cli/issues/3727)，三日内累计关闭 10+ 个回归类问题，整体呈现"修旧补新、稳步迭代"节奏。

---

## 🚀 版本发布

### v1.0.63（2026-06-15）
- **🖼 图片附件体验改进**：被拦截的图片附件现在会提示三种解决路径——在 Editor preview features 策略中开启 vision、切换到支持视觉的模型、或更换图片，告别"神秘报错"。
- **⌨️ /diff 新快捷键**：在 diff 视图中按 `w` 即可隐藏仅空白字符的差异行。
- **🔌 MCP `deferTools` 选项**：在 MCP server 配置中可设置 `deferTools`，使服务器的工具在 tool search 启用时也始终可用，避免按需检索导致的关键工具不可见。
- **🌐 多供应商请求可靠性提升**：对 OpenAI、Anthropic、Azure OpenAI 请求链路的稳定性做了加固。
- **📖 --help 排序优化**：选项按字母序排列，包括带 `--tw` 等前缀的选项。
- **🧪 /rewind 实验性变更**：行为正在重塑中（具体变更未在 release note 中完整披露，建议关注实验性提示）。
- **🔠 --help 排序**：`--help` 输出选项按字母序排列。

🔗 [查看完整 Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.63)

### v1.0.63-0（前置预发布）
与正式版同步发布，作为通道预热版本（pre-release 通道用户已可用）。

---

## 🔥 社区热点 Issues

| # | Issue | 关注度 | 推荐理由 |
|---|---|---|---|
| [#953](https://github.com/github/copilot-cli/issues/953) | 过度授权请求：希望按仓库/作用域细粒度控制 | 💬7 👍3 | 长期未解决的高赞企业级诉求，跨越 authentication/permissions/enterprise 三大区域，反映 OAuth 范围授权粒度不足的结构性问题 |
| [#3727](https://github.com/github/copilot-cli/issues/3727) | v1.0.60 回归：`userPromptSubmitted` hook 的 `additionalContext` 不再注入 planner | 💬4 | 精准复现 30 分钟窗口的回归，影响所有依赖 hook 注入上下文的插件作者，回归边界文档清晰 |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | BYOK 多模型能力：CLI 内热切换支持 | 💬3 👍8 | 今日**最高赞** Issue，反映重度用户在多 BYOK 模型间无缝切换的强需求 |
| [#3781](https://github.com/github/copilot-cli/issues/3781) | 会话因非多模态模型 + 图片附件陷入不可恢复 400 错误（已关闭） | 💬3 | 揭示 CAPI 4xx 错误污染事件日志导致 session 永久卡死的恢复性缺陷 |
| [#3756](https://github.com/github/copilot-cli/issues/3756) | 第三方 MCP 服务器被组织策略禁用（已关闭） | 💬3 | 与 [#1707](https://github.com/github/copilot-cli/issues/1707) 重复，企业策略对 MCP 生态扩展性的关键瓶颈 |
| [#2966](https://github.com/github/copilot-cli/issues/2966) | 缺失并发多会话的原生管理工具 | 💬3 👍1 | Microsoft 员工（@JoshLove-msft）发起，代表"重度并发"用户对 `--yolo --autopilot` 工作流的产品化期望 |
| [#3776](https://github.com/github/copilot-cli/issues/3776) | WSL/Ubuntu 终端复制 UTF-8 文本到 Windows 变乱码 | 💬2 👍1 | 国际化体验痛点，影响所有中欧/东欧语种用户 |
| [#3784](https://github.com/github/copilot-cli/issues/3784) | v1.0.62-1 Linux ARM64 Tokio reactor panic（已关闭） | 💬2 | Apple Silicon / ARM Linux 工作站用户的关键阻塞，已在后续版本修复 |
| [#3769](https://github.com/github/copilot-cli/issues/3769) | Agency 模式输出存在线程问题（已关闭） | 💬2 👍3 | 流式渲染顺序错乱，影响"边思考边输出"体验的可读性 |
| [#3813](https://github.com/github/copilot-cli/issues/3813) | VS Code 终端中日文复制粘贴乱码（与 #3776 关联） | 💬1 | 揭示问题在 VS Code Terminal / iTerm2 渲染层差异，与 #3776 形成"同一问题多终端"对照 |

> **小结**：今日 Open 状态高关注度议题集中在**权限粒度**、**BYOK 灵活性**、**MCP 生态**、**并发会话**四大方向，Closed 议题多围绕 **v1.0.60~62 的回归修复**（function call、stdin MCP、UTF-8 编码、ARM64 panic）。

---

## 🛠 重要 PR 进展

> ⚠️ **PR 活跃度异常低迷**：过去 24 小时内仓库仅合并/更新 1 条 PR，远低于日常节奏。

| # | PR | 状态 | 说明 |
|---|---|---|---|
| [#3817](https://github.com/github/copilot-cli/pull/3817) | kCreate "#" | OPEN | 仅一字符"#"的占位性提交，无描述、无评审，可能是测试或误操作；社区贡献度极低。 |

📊 **观察**：v1.0.63 的核心改进（`deferTools`、图片附件提示、`/diff w` 键等）均由 GitHub 官方维护者直接提交到主干，外部贡献活跃度处于近期低点。

---

## 📈 功能需求趋势

基于过去 24 小时 41 条 Issue 提炼，社区关注度按热度排序如下：

### 1. **BYOK（自带密钥）能力增强** 🔑
- 多模型热切换 [#3282](https://github.com/github/copilot-cli/issues/3282)（8 👍）
- 自定义 HTTP Header [#3399](https://github.com/github/copilot-cli/issues/3399)（2 👍）
- 趋势：用户希望 CLI 摆脱"单环境变量绑定单模型"的设计，支持多供应商动态路由

### 2. **MCP 生态与企业策略** 🔌
- 第三方 MCP 被组织策略禁用 [#3756](https://github.com/github/copilot-cli/issues/3756)
- 远程 MCP OAuth 启动风暴 [#3706](https://github.com/github/copilot-cli/issues/3706)
- Subagent 无法访问 MCP 工具 [#3812](https://github.com/github/copilot-cli/issues/3812)
- 趋势：`deferTools` 新选项（v1.0.63）说明团队已意识到 MCP 工具发现机制的工程问题，但子代理与远程 OAuth 仍是下一阶段重点

### 3. **会话管理与历史检索** 🗂
- 多并发会话管理 [#2966](https://github.com/github/copilot-cli/issues/2966)
- `--resume` 需支持内容搜索 [#3807](https://github.com/github/copilot-cli/issues/3807)
- `/chronicle` 整合 VS Code Copilot Chat 历史 [#3816](https://github.com/github/copilot-cli/issues/3816)
- 删除的会话残留在 `/chronicle` insights 中 [#3811](https://github.com/github/copilot-cli/issues/3811)
- 趋势：**Chronicle / Resume / Search** 正成为 CLI 差异化能力，对标 OpenAI 的 ChatGPT 历史检索

### 4. **平台与终端兼容性** 🖥
- Windows ARM / 独立 exe 启动失败 [#3810](https://github.com/github/copilot-cli/issues/3810)
- Linux ARM64 Tokio panic [#3784](https://github.com/github/copilot-cli/issues/3784)
- Windows 调试日志路径缺反斜杠 [#3815](https://github.com/github/copilot-cli/issues/3815)
- 趋势：Windows 平台稳定性问题持续累积，跨平台 QA 是用户基本盘诉求

### 5. **模型层优化** 🧠
- Claude Sonnet 启用 prompt caching [#3808](https://github.com/github/copilot-cli/issues/3808)
- 失败请求仍计费 [#3814](https://github.com/github/copilot-cli/issues/3814)（2 👍）
- 趋势：用户对**成本可见性**与**延迟优化**的需求正在向模型协议层渗透

### 6. **终端 UX 细节** 🎨
- 流式输出字符重复 [#3780](https://github.com/github/copilot-cli/issues/3780)
- Git worktree 状态提示缺失 [#2534](https://github.com/github/copilot-cli/issues/2534)
- 同一窗口不同 tab 渲染不一致 [#3797](https://github.com/github/copilot-cli/issues/3797)
- 趋势：终端渲染层仍是 CLI 用户最敏感的"门面"问题

---

## 💡 开发者关注点

综合 30+ 条 Issue 的反馈，开发者社区的**核心痛点**可归纳为四类：

### 1. **稳定性回归的信任损耗** 🩹
- v1.0.60 引入 `userPromptSubmitted` hook 回归（[#3727](https://github.com/github/copilot-cli/issues/3727)）、function call 失败（[#3716](https://github.com/github/copilot-cli/issues/3716)）、stdin MCP 重生循环（[#3782](https://github.com/github/copilot-cli/issues/3782)）等连续回归表明：**CLI 在快速迭代中缺乏回归测试矩阵**。对于依赖 hook 系统的插件作者来说，每次升级都需谨慎评估。

### 2. **大文件/长上下文的会话脆弱性** 📦
- 5MB CAPI 原生限制使附件"永久污染" session 日志（[#3767](https://github.com/github/copilot-cli/issues/3767)）、`/chronicle reindex` 静默报错（[#3809](https://github.com/github/copilot-cli/issues/3809)）等问题共同指向：**session_store 的容错与恢复机制薄弱**。一旦污染，恢复成本极高（需手动编辑 `events.jsonl`）。

### 3. **跨平台体验的"长尾 bug"** 🌐
- WSL→Windows 复制粘贴 mojibake、VS Code Terminal 日文乱码、Windows ARM 启动 EPERM、Linux ARM64 panic、debug log 路径缺 `\` —— 反映出**Windows/国际化/ARM 三条战线均有未收敛的体验问题**。对全球开发者来说，这是"用 CLI 干活"的基本盘。

### 4. **计费与错误暴露的透明度** 💸
- 请求失败时 AIC 消耗仍持续上涨（[#3814](https://github.com/github/copilot-cli/issues/3814)）触动了开发者的成本神经。CLI 需在 **retry 中间态**提供更明确的成本提示，否则在 400k context 的长任务中极易"跑空账单"。

---

## 🔭 一句话总结

> 今天的 Copilot CLI 处于"**功能深水区 + 体验返修期**"：v1.0.63 在 MCP 与图片体验上小步快跑，而社区更期待的是 BYOK 多模型、子代理 MCP、Chronicle 历史整合这类**协议层能力**的突破。

---

*日报由 AI 自动生成，基于 GitHub 公开数据。数据时间窗口：2026-06-15 ~ 2026-06-16。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>
The user wants me to generate a Chinese daily report for the Kimi Code CLI community based on GitHub data. Let me analyze the data:

1. No new releases in the past 24 hours
2. 4 updated issues (Issues #2402, #2303, #2222, #2455)
3. 2 new pull requests (PRs #2454, #2453)

I need to:
1. Generate today's overview (2-3 sentences)
2. Skip the version release section since there are no new releases
3. List 10 most noteworthy issues - but there are only 4, so I'll list all 4
4. List 10 most important PRs - but there are only 2, so I'll list both
5. Identify feature request trends from issues
6. Summarize developer pain points

Let me analyze each issue and PR:

**Issues:**
- #2402: Compaction failed with APIStatusError 400, high risk request - bug, Windows
- #2303: UserPromptSubmit hook receives empty prompt from shell UI - bug, fixed by PR #2454
- #2222: kimi --continue reports "No previous session found" - bug, fixed by PR #2453
- #2455: FetchURL doesn't read system proxy - bug, Linux/WSL2

**PRs:**
- #2454: fix(hooks): pass prompt text to UserPromptSubmit - fixes #2303
- #2453: fix(session): resume latest session when last_session_id is missing - fixes #2222

Feature request trends and pain points:
- Hook system improvements
- Session management / continuity
- Network/proxy configuration
- API safety/risk detection (compaction failures)
- Cross-platform compatibility (Windows, macOS, Linux/WSL2)

Let me write a professional, concise Chinese daily report.
</think>
# Kimi Code CLI 社区动态日报
**日期：2026-06-16**

---

## 📌 今日速览

今日社区整体活跃度平稳，开发者贡献了 2 个高价值 PR，分别修复了 `UserPromptSubmit` Hook 接收空 prompt（#2303）以及 `kimi --continue` 无法恢复会话（#2222）两个长期未解决的核心 Bug。Issues 区新增 1 条关于 `FetchURL` 不读取系统代理的网络问题，加上昨日更新的 3 条 Bug 报告，反映出社区当前最关心的方向集中在 **Hook 体系可靠性、会话连续性、网络代理兼容性** 三大主题。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

| # | 标题 | 重要性 | 链接 |
|---|------|--------|------|
| **#2402** | Compaction failed: APIStatusError 400 (high risk) | ⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2402) |
| **#2303** | `UserPromptSubmit` Hook 接收到空 prompt | ⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2303) |
| **#2222** | `kimi --continue` 报 "No previous session found" | ⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2222) |
| **#2455** | `FetchURL` 不读取系统代理 | ⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2455) |

**重点解读：**

- **#2402（高优先级）**：Compaction（上下文压缩）流程被风控系统拦截，影响 Windows 用户使用 K2.6 模型的稳定性。这是关乎核心使用流程的严重 Bug，需关注官方是否会增加风控提示或自动重试机制。
- **#2303**：Hook 系统是 Kimi CLI 扩展性的重要基石，空 prompt 导致基于正则匹配的 Hook 全部失效，社区已有 2 条评论。
- **#2222**：`--continue` 是高频使用功能，行为不一致会严重影响用户体验。
- **#2455（今日新增）**：在 GFW 环境下 `FetchURL` 不可用，shell/curl 正常，疑似底层未读取 `HTTP_PROXY` 等环境变量，对国内开发者尤为关键。

> *由于过去 24 小时内社区更新的 Issue 仅 4 条，已全部列出。*

---

## 🛠 重要 PR 进展

| # | 标题 | 类型 | 链接 |
|---|------|------|------|
| **#2454** | fix(hooks): pass prompt text to `UserPromptSubmit` from structured input | Bug Fix | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2454) |
| **#2453** | fix(session): resume latest session when `last_session_id` is missing | Bug Fix | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2453) |

**重点解读：**

- **#2454（修复 #2303）**：根因定位精准——`KimiSoul._turn` 中从结构化输入派生 Hook 文本时未正确取出 user 文本字段，导致 `prompt` 为空串。修复后所有基于正则的 `UserPromptSubmit` Hook 均可正常触发，Hook 体系恢复可用。
- **#2453（修复 #2222）**：根因在于 `Session.continue_` 强依赖 `work_dir` 的 `last_session_id` 元数据，缺少回退机制——当元数据缺失时无法回退到查找最新会话。修复后 `--continue` 行为将与 `kimi` 进入目录时的体验一致。

> *今日仅有 2 个 PR 提交，均为已合并/正在审查的 Bug 修复，质量较高。*

---

## 📈 功能需求趋势

从近 24 小时的 Issue 与 PR 主题可以提炼出以下社区关注方向：

1. **🔌 Hook 体系健壮性**：#2303 → #2454 揭示了 Hook 输入在不同 UI 路径（shell / structured input）下的兼容性问题，社区期望 Hook 系统在所有交互模式下行为一致。
2. **🧠 会话管理 / 状态恢复**：#2222 → #2453 显示用户对 `--continue`、`/resume` 等会话连续性功能高度依赖，期望更鲁棒的回退机制。
3. **🌐 网络与代理配置**：#2455 反映了 CLI 在受限网络环境下的可用性问题，**Fetch 工具的代理配置**有望成为下一个高频需求点。
4. **🛡 风控与 API 稳定性**：#2402 提示社区对 Compaction 流程与模型风控之间的交互还不够了解，**透明化的错误提示与降级策略**值得期待。
5. **💻 跨平台一致性**：涉及 Windows（#2402、#2222）、macOS Apple Silicon（#2303）、Linux WSL2（#2455）多个平台，社区对一致体验的诉求强烈。

---

## 💬 开发者关注点

综合今日 Issue 与 PR，开发者反馈可归纳为以下 **3 个核心痛点**：

| 痛点 | 典型反馈 | 影响面 |
|------|---------|--------|
| **Hook 在交互 Shell 下不可靠** | "UserPromptSubmit hook 收到的 prompt 永远是空字符串，正则匹配全部失效" (#2303) | 阻碍插件/自动化生态发展 |
| **会话恢复行为不一致** | "直接 kimi 有历史，`kimi --continue` 却找不到 session" (#2222) | 影响日常开发工作流连续性 |
| **内置 Fetch 工具忽略系统代理** | "Shell/curl 都能翻墙，FetchURL 却不行" (#2455) | 在受限网络环境下 CLI 能力受限 |

> **社区建议**：在 Hook 文档中补充各 UI 路径下输入字段的映射说明；在 `--continue` 失败时增加诊断信息（如提示"未发现 last_session_id，是否启用自动恢复？"）；为 `FetchURL` 等网络工具增加 `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` 环境变量支持。

---

*报告基于 GitHub 公开数据自动生成 · 数据时间窗：2026-06-15 ~ 2026-06-16*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a daily report for the OpenCode community based on GitHub data. Let me analyze the data carefully:

1. No new releases in the past 24 hours
2. 50 issues updated, 30 shown - I need to pick the 10 most notable
3. 50 PRs updated, 20 shown - I need to pick 10 important PRs

Let me analyze the key themes:

**Top Issues by importance (combining comments, likes, and recency):**
1. #20695 - Memory Megathread (97 comments, 65 likes) - Very active, critical for stability
2. #2242 - Sandbox the agent (69 comments, 53 likes) - Long-standing security issue
3. #27167 - Session goals /goal feature (49 comments, 84 likes) - High community demand
4. #1970 - Background Bash Execution (18 comments, 30 likes) - Important UX feature
5. #27906 - v1.15.1+ Breaks Bun Installs (18 comments, 13 likes) - Critical regression
6. #5374 - Show tokens/second (17 comments, 81 likes) - Very popular feature request
7. #28567 - Full MCP client capabilities (14 comments, 22 likes) - MCP ecosystem
8. #28957 - Upstream idle timeout exceeded (14 comments, 0 likes) - Bug, related to #31456
9. #19948 - Integration with Ollama Local (10 comments, 3 likes) - Local models
10. #19252 - Build command freezes (10 comments, 7 likes) - Bug
11. #30869 - bash.ts hardcoded UTF-8 (5 comments, 1 like) - Bug
12. #32493 - Moonshot kimi-k2.7-code-highspeed (4 comments, 0 likes) - New model
13. #32420 - Paid Go subscription not activated (3 comments, 0 likes) - Customer support issue
14. #21345 - Move git/PR instructions out of bash tool (3 comments, 9 likes) - Token optimization

**Top PRs (looking at importance of changes):**
1. #32508 - Fix Copilot Claude prefill and tool text leaks - Important bug fix
2. #31794 - Fix malformed percent-encoding in decodeDataUrl - Bug fix
3. #31985 - PowerShell EncodedCommand for UTF-8 on Windows - Closes multiple related Windows encoding issues
4. #32499 - Allow clearing session archive time - Quality of life
5. #29150 - Break auto-compact loop - Bug fix
6. #32494 - Include PR identity in github context - Bug fix
7. #31645 - Progress feedback to upgrade command - UX
8. #32490 - MCP server instructions to context - MCP feature
9. #31644 - Register compact/summarize commands - Bug fix
10. #32489 - Sanitize OpenAI MCP tool schemas - Bug fix for MCP
11. #32487 - Configure cost display currency - Feature
12. #29006 - Add opencode-datarobot-skills plugin - Ecosystem

Let me now write the report.</think>

# OpenCode 社区动态日报 · 2026-06-16

## 📌 今日速览

今天 OpenCode 社区的活跃度集中在 **MCP 协议改进** 与 **Windows 平台体验修复** 两条主线：多份 PR 针对 Windows Shell UTF-8 编码、MCP 工具 Schema 兼容性以及 GitHub Copilot Claude 的 prefill 泄露问题进行修复。同时，付费订阅未激活、长期存在的内存问题以及 Agent 沙箱安全等老议题持续受到关注。

---

## 📦 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 关键数据 | 点评 |
|---|-------|---------|------|
| 1 | **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** | 97 评论 / 65 👍 | 项目维护者 @thdxr 亲自挂帅的统一收口帖，要求社区提交 heap snapshot 而非"AI 给方案"。是当前最优先的稳定性议题。 |
| 2 | **[#2242 Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)** | 69 评论 / 53 👍 | 接近一年仍未解决的"Agent 文件/命令越权"问题，对标 macOS seatbelt，呼声极高，反映企业级安全沙箱的强烈需求。 |
| 3 | **[#27167 Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** | 49 评论 / 84 👍 | 👍/评论比最高的特性请求：在会话中建立持久化的目标/生命周期机制，避免任务上下文漂移。 |
| 4 | **[#5374 Show tokens/second](https://github.com/anomalyco/opencode/issues/5374)** | 17 评论 / 81 👍 | 热度极高的轻量特性：在 UI 展示实时与平均 tokens/s，方便横向对比不同 provider 的推理吞吐。 |
| 5 | **[#27906 v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906)** | 18 评论 / 13 👍 | 1.15.1 引入的 postinstall 钩子与 Bun/Pnpm 默认安全策略冲突，导致 Bun 全局安装失败，影响一批 Bun 用户。 |
| 6 | **[#1970 Background Bash Execution](https://github.com/anomalyco/opencode/issues/1970)** | 18 评论 / 30 👍 | 呼声已久的异步后台 Bash 执行，对齐 Claude Code 的 Ctrl+B 用例，可避免长任务阻塞 agent。 |
| 7 | **[#28567 Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)** | 14 评论 / 22 👍 | 社区要求 OpenCode 跟进 MCP 最新规范（resources、prompts、elicitation 等），MCP 生态正在快速演进。 |
| 8 | **[#28957 / #31456 "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)** | 14+4 评论 | macOS Tahoe / Windows 上长会话频繁出现空闲超时，疑似基础设施层代理问题，影响多平台用户。 |
| 9 | **[#19948 Integration with Ollama Local](https://github.com/anomalyco/opencode/issues/19948)** | 10 评论 / 3 👍 | 本地 Ollama 模型在 Desktop 中返回非法 JSON（skill name 嵌套错误），离线/隐私场景的核心痛点。 |
| 10 | **[#32420 Paid Go subscription — charged but not activated](https://github.com/anomalyco/opencode/issues/32420)** | 3 评论 / 0 👍 | 多用户付费后未激活，邮件无回复，已有 #32153 等相似投诉。属于商务/合规风险，建议官方介入。 |

**其他值得留意**：[#19252](https://github.com/anomalyco/opencode/issues/19252) 构建命令长时间冻结；[#30869](https://github.com/anomalyco/opencode/issues/30869) bash.ts 硬编码 UTF-8 在 Windows GBK 环境乱码；[#32493](https://github.com/anomalyco/opencode/issues/32493) Moonshot 缺 kimi-k2.7-code-highspeed 模型；[#21345](https://github.com/anomalyco/opencode/issues/21345) 将 Git/PR 指令移出 bash 工具描述（每请求省 ~1.7K tokens）。

---

## 🛠 重要 PR 进展

| # | PR | 修复/功能 | 点评 |
|---|----|----------|------|
| 1 | **[#32508 Fix Copilot Claude prefill & tool text leaks](https://github.com/anomalyco/opencode/pull/32508)** | Bug Fix | 修复中断后 assistant prefill 文本与工具调用结果被原样回送给模型、导致 Copilot Claude 拒答的问题（Closes #31807）。 |
| 2 | **[#31985 PowerShell EncodedCommand for reliable UTF-8 on Windows](https://github.com/anomalyco/opencode/pull/31985)** | Bug Fix | 通过 `EncodedCommand`（base64 UTF-16LE）彻底绕开 Windows 代码页问题，一次性关闭 #23636 / #31187 / #30205 / #31830 / #26882 等多个相关工单，是今天 Windows 体验最关键的修复。 |
| 3 | **[#31794 Handle malformed percent-encoding in decodeDataUrl](https://github.com/anomalyco/opencode/pull/31794)** | Bug Fix | 非 base64 data URL 在 `decodeURIComponent` 抛 URIError 的边界处理，健壮性提升。 |
| 4 | **[#32499 Allow clearing session archive time](https://github.com/anomalyco/opencode/pull/32499)** | Bug Fix | 补齐"取消会话归档"路径，关闭 #24153，对长期调试用户友好。 |
| 5 | **[#29150 Break auto-compact loop when compaction makes no progress](https://github.com/anomalyco/opencode/pull/29150)** | Bug Fix | 当模型上下文实际大于 models.dev 标注时，会陷入 auto-compact 死循环，本 PR 在无进展时主动退出（Closes #28543）。 |
| 6 | **[#32490 Append MCP server instructions to context](https://github.com/anomalyco/opencode/pull/32490)** | New Feature | 把 MCP `InitializeResult.instructions` 拼到 system prompt，是 #28567 "Full MCP capabilities" 路线图的第一步。 |
| 7 | **[#32489 Sanitize OpenAI MCP tool schemas](https://github.com/anomalyco/opencode/pull/32489)** | Bug Fix | 清理 MCP 工具 schema 中 OpenAI 不支持的 JSON Schema 关键字，避免 OpenAI provider 校验失败（Closes #32488）。 |
| 8 | **[#31645 Progress feedback for upgrade command](https://github.com/anomalyco/opencode/pull/31645)** | New Feature | `opencode upgrade` 增加实时下载/安装进度，解决"静默卡住"的体验问题（Closes #31623）。 |
| 9 | **[#32494 Include PR identity in github context](https://github.com/anomalyco/opencode/pull/32494)** | Bug Fix | 在 `opencode github run` 触发的 PR 评论上下文里补全 PR 号与 URL，便于 agent 准确溯源（Fixes #32233）。 |
| 10 | **[#32487 Configure cost display currency](https://github.com/anomalyco/opencode/pull/32487)** | New Feature | 引入 `display.currency / cost_currency / currency_rate` 配置项，跨币种用户终于能按本币查看用量成本（Closes #32485）。 |

**其他**：[#32502](https://github.com/anomalyco/opencode/pull/32502) 修订 TUI 插件日志文档；[#31644](https://github.com/anomalyco/opencode/pull/31644) 修复 ACP 中 `/compact`、`/summarize` 命令未注册到补全列表；[#29006](https://github.com/anomalyco/opencode/pull/29006) 新增 DataRobot skills 生态插件。

---

## 📈 功能需求趋势

从过去 24h 的活跃 Issue 中可清晰提炼出以下五大方向：

1. **🔒 沙箱与安全** — Agent 文件/命令越权（#2242, #16914）仍是企业采用的最大门槛，呼声仅次于内存稳定性。
2. **📊 可观测性 / 性能指标** — tokens/s（#5374）、成本币种（#32487、#32485）、agent 评估对比（#32484）共同构成"看见模型在做什么"的诉求。
3. **🧩 MCP 生态完善** — 从 #28567 到 #32490/#32489，MCP 协议规范快速演进，OpenCode 客户端能力补齐成为优先级 P1。
4. **🖥 跨平台体验** — Windows Shell 编码（#30869, #31985）、Bun 安装兼容（#27906）、Desktop 启动卡死（#32452）、WSL 工作区选择（#27674）均集中在 Windows，平台差距明显。
5. **🤖 Agent 抽象升级** — 持久化会话目标 #27167、agent-scoped skills #19344、build agent 能力差距 #32484，三者指向"让 agent 更可控、可衡量、可组合"。

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 代表 Issue |
|------|-----------|
| **稳定性 / 内存泄漏** | #20695（项目方要求收集 heap snapshot，官方明示"LLM 给的方案永远是错的"） |
| **付费未到账 / 客服失联** | #32420, #32482, #32466 — 多语言用户集中投诉商务流程 |
| **长会话超时 / Upstream idle timeout** | #28957, #31456 — 与 provider 代理或空闲策略相关 |
| **本地模型集成粗糙** | #19948（Ollama JSON 异常）、#32493（Moonshot 缺新模型） |
| **Prompt/Token 浪费** | #21345（bash tool 描述占用 ~1.7K tokens/请求），社区开始抠上下文预算 |
| **Desktop / TUI 渲染线程阻塞** | #32452（marked.js 同步 AST 遍历冻结 UI），#32479（Windows 剪贴板图片粘贴） |
| **IDE 上下文感知未生效** | #22235（VSCode "Context Awareness" 不工作） |

---

**数据时间窗**：2026-06-15 → 2026-06-16  
**数据来源**：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) Issues & Pull Requests

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>
The user wants me to generate a Chinese daily report for the Qwen Code community based on GitHub data from 2026-06-16. Let me analyze the data carefully.

**Releases (past 24 hours):**
1. v0.18.1-preview.0 - Fix oversized context instructions warning
2. v0.18.1-nightly.20260616.a68b2e1e7 - Nightly build
3. v0.18.1 - Stable release including daemon session shell gating
4. desktop-v0.0.4 - Desktop release fixing MCP server removals persistence and model defaults
5. desktop-latest - Auto-update feed

**Top Issues (30 most commented out of 34):**
- #5055: Trojan:JS/ShaiWorm.DBA!MTB antivirus detection in VSCode extension (5 comments, P1, security)
- #5142: CLI virtualization history mode bug - history not visible (4 comments, P2, bug)
- #5124: Track /loop alignment work parent issue (3 comments, 1 like, feature)
- #4882: [FEATURE] terminalSequence field on hook (3 comments, feature)
- #4562: qwen-code in Windows - cmd execution question (3 comments, question)
- #5160: /model lists discontinued qwen-oauth coder-model (3 comments, P2, bug)
- #5132: Add token-efficient loop tick templates (3 comments, P2, feature)
- #5130: Add session wakeup scheduling for self-paced loops (3 comments, P2, blocked)
- #5131: Run prompt-only /loop as a self-paced loop (3 comments, P2, blocked)
- #5180: Subagent crash issue in long context manager/project scenario (2 comments, P2, bug)
- #5173: Model provider disambiguation fails with same model id (2 comments, P2, bug)
- #4966: SchemaValidator missing numeric string coercion MCP failures (2 comments, P2, bug)
- #5147: OOM after /quit with managed auto-memory (2 comments, P2, bug)
- #4941: Add QWEN.md length warning scaling with model context window (2 comments, P2, feature)
- #5159: Trackpad scroll in tmux session triggers prompt history (2 comments, P3, bug)
- #5119: Sudo command not allowed properly (2 comments, P2, feature)
- #4769: Display git branch prominently in Desktop UI (2 comments, feature)
- #5101: Qwen Code carries repeated large tool results through provider history (2 comments, P1, bug)
- #5134: Add /loop cancellation and status feedback (2 comments, feature)
- #5135: Document /loop lifecycle decisions (2 comments, docs)
- #5133: Support bare and interval-only /loop defaults (2 comments, feature)
- #5129: Support loop task files for /loop (2 comments, P2, blocked)
- #5184: Wire prompt-only /loop to self-paced wakeups (1 comment, P3, blocked)
- #5156: Add session wakeup primitive for /loop iterations (1 comment, P3, blocked)
- #4939: Let grep/egrep/fgrep satisfy read-before-edit check (1 comment, P2, feature, closed)
- #5177: exit_plan_mode fails with empty plan parameter (1 comment, P3, bug, 1 like)
- #5154: Discussion on cli-entry.js --expose-gc wrapper (1 comment, P3, enhancement)
- #3153: Cannot stop Qwen after rejecting a command (1 comment, bug, open since April)
- #5136: Implement /loop baseline (1 comment, P3, enhancement)
- #3090: Qwen Code 0.14.2 add-on generation error (0 comments, bug, open since April)

**Top PRs (20 most commented, though most have undefined):**
- #5168: Qwen PR review proxy bypass, stale-worktree cleanup
- #5175: Web-shell mid-turn message delivery
- #5094: Workflow P4 — meta + /workflows + phase-tree
- #5174: Daemon status API
- #5181: Fix OOM in auto-memory extraction during /quit
- #4983: Feishu channel setup guide screenshots (closed)
- #5182: Session wakeup primitive for /loop
- #5185: Plan-gate AbortSignal isolation
- #4943: --safe-mode flag for troubleshooting
- #5183: Preserve mid-turn image messages
- #5145: Follow-up suggestion in input placeholder
- #4564: Token usage exposure for cost visibility
- #5172: MCP token path docs fix (closed)
- #5179: Remember selected provider when multiple share model id
- #5152: Qwen Code Desktop release link (closed)
- #4850: Multi-tab /extensions manager
- #4793: Coerce non-string tool params for self-hosted LLMs
- #5178: CI autofix prioritize recent bugs
- #4918: Pass original API call ID to hook system
- #5148: /loop command surface alignment and task-file reader

**Key Trends I observe:**

1. **/loop feature is huge focus** - Many issues (#5124, #5132, #5130, #5131, #5134, #5135, #5133, #5129, #5184, #5156, #5136, #5148, #5182) all related to /loop enhancement. This is a major ongoing development effort.

2. **MCP integration issues** - Multiple issues about MCP tool failures, schema validation, etc.

3. **Performance/Memory issues** - OOM bugs, large tool results carrying through history, model context scaling

4. **Desktop app updates** - v0.0.4 release with bug fixes

5. **Daemon system** - Multiple PRs about daemon status API, web-shell, session shell gating

6. **Security** - Trojan detection on Windows VSCode extension

7. **Workflow system** - P4 phase of Dynamic Workflows port

8. **Provider/Model switching** - Issues with model selection when multiple providers share model IDs

9. **CLI UX issues** - Trackpad scroll, history visibility, virtualization

10. **Documentation** - Several docs cleanup PRs

Let me organize this into a proper Chinese daily report.

I need to be careful about the date. The user specified 2026-06-16. The data shows v0.18.1 nightly dated 20260616, which matches.

Let me structure the report:

1. **今日速览** - 2-3 sentences about most important events
2. **版本发布** - v0.18.1 release, desktop-v0.0.4
3. **社区热点 Issues** - Top 10
4. **重要 PR 进展** - Top 10
5. **功能需求趋势** - Categorize trends
6. **开发者关注点** - Pain points and high-frequency needs

Let me write this in clear, professional Chinese suitable for technical developers.
</think>
# Qwen Code 社区动态日报 · 2026-06-16

> 数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 统计窗口：过去 24 小时

---

## 📌 今日速览

- **v0.18.1 正式版与 Desktop v0.0.4 双线发布**：CLI 侧主版本引入"daemon 直连 session shell 需显式开启"的安全门控；Desktop 侧修复 MCP 服务移除持久化与模型默认值刷新问题。
- **/loop 自我节奏循环重构进入密集落地期**：跟踪主线 #5124 下近 10 个子任务同步推进，session wakeup primitive 已合并 PR #5182，后续切片将在本周内陆续合入。
- **Memory/性能类 P1 缺陷集中修复**：#5181 修复 `/quit` 后 managed auto-memory 构建 transcript 触发的 OOM，#5101 等大工具结果回传问题也在持续治理。

---

## 🚀 版本发布

### v0.18.1（稳定版）
- `feat(daemon)`：将直连 session shell 行为改为默认禁用 + 显式 opt-in，提升多用户/共享环境下的安全性。
- `fix`：context instructions 过大时给出告警（PR #5073）。
- `docs`：修正过时的默认值、CLI 语法与工具命名漂移。
- 发布地址：<https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1>

### v0.18.1-preview.0 / v0.18.1-nightly.20260616.a68b2e1e7
- 与稳定版同步携带 oversized context 告警修复，便于早期采用者回归验证。

### desktop-v0.0.4
- `fix(cli)`：MCP 服务移除后状态正确持久化（PR #4535）。
- `fix(models)`：刷新 raw model 派生的默认值（PR 列表中同步合入）。
- `desktop-latest` 自动更新通道已指向该版本。
- 发布地址：<https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.0.4>

---

## 🔥 社区热点 Issues

| # | 标题 | 关键信息 | 为什么值得关注 |
|---|------|---------|---------------|
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | **Trojan:JS/ShaiWorm.DBA!MTB** 在 Win11 杀软中告警 VSCode 扩展 `qwenlm.qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` | P1 / security / 5 评论 | 涉及供应链信任链与下载渠道问题，是当前最高优先级 P1。维护者已要求提供样本与哈希以溯源。 |
| [#5142](https://github.com/QwenLM/qwen-code/issues/5142) | 虚拟化历史模式下历史记录不可见，仅 `/` 触发时显示 | P2 / ui / 4 评论 | 影响所有使用新渲染管线用户的可读性，需关注 0.18.x 渲染层回归。 |
| [#5124](https://github.com/QwenLM/qwen-code/issues/5124) | **Track /loop alignment work**（父任务） | 1 👍 / 3 评论 | 当前 CLI 命令面演进的核心入口；本日内近 10 个子任务（#5129/#5130/#5131/#5132/#5133/#5134/#5135/#5136/#5156/#5184）同源。 |
| [#4882](https://github.com/QwenLM/qwen-code/issues/4882) | [FEATURE] hook JSON 增加 `terminalSequence` 字段 | 3 评论 | 与 ClaudeCode v2.1.141 对齐，落地桌面通知/窗口标题/铃声等终端侧能力。 |
| [#4562](https://github.com/QwenLM/qwen-code/issues/4562) | Windows 下 qwen-code 使用 cmd.exe 而非 pwsh | 3 评论 | Windows 原生环境（非 WSL）体验问题；与 #5055 共同影响 Windows 用户的"开箱即用"。 |
| [#5160](https://github.com/QwenLM/qwen-code/issues/5160) | `/model` 在未配置 OAuth 时仍列出已下线的 `qwen-oauth coder-model` | P2 / 3 评论 | 模型清单脏数据问题，影响用户选型判断。 |
| [#5180](https://github.com/QwenLM/qwen-code/issues/5180) | 主会话作 PM、subagent 执行时中途崩溃（12h 长会话） | P2 / multi-agent / 2 评论 | 暴露 multi-agent 编排下长任务稳定性短板，与 #5147 内存/上下文问题形成互补证据。 |
| [#5173](https://github.com/QwenLM/qwen-code/issues/5173) | 多个 provider 共享同一 model id 时模型选择不持久化 | P2 / 2 评论 | Token Plan/IdeaLab/BFF 同名模型场景的可用性问题，PR #5179 已在修。 |
| [#5147](https://github.com/QwenLM/qwen-code/issues/5147) | `/quit` 后 managed auto-memory 构建 transcript 触发 OOM | P2 / 2 评论 | 高优先级 P1 趋势线，PR #5181 已给出修复方案。 |
| [#5159](https://github.com/QwenLM/qwen-code/issues/5159) | macOS tmux 内触控板滚动触发 prompt 历史而非视口滚动 | P3 / 2 评论 | 跨终端行为兼容性的典型案例，键位映射需要工程化讨论。 |

> 另：#5177（`exit_plan_mode` 空 plan 参数导致无效重试，1 👍）虽评论较少但被社区点赞 +1，是 plan-mode 工作流的真实痛点，建议关注。

---

## 🛠 重要 PR 进展

| # | 标题 | 说明 |
|---|------|------|
| [#5181](https://github.com/QwenLM/qwen-code/pull/5181) | **fix(core): prevent OOM in auto-memory extraction during /quit** | 关闭 #5147；将 `buildTranscriptMessages` 中对全量历史的 `partToString().replace(/\s+/g,' ')` 改为流式分块处理，避免 GC 压力峰值。 |
| [#5182](https://github.com/QwenLM/qwen-code/pull/5182) | **feat(loop): add session wakeup primitive** | 关闭 #5156；新增 `loop_wakeup` 工具为 `/loop` 自我节奏模式奠基，本切片不改变现有 `/loop` 行为。 |
| [#5168](https://github.com/QwenLM/qwen-code/pull/5168) | fix: Qwen PR review proxy bypass, stale-worktree cleanup, and footer line break | 三个可靠性打包修复：PR review 走 `NO_PROXY` 绕开代理；清理过期 worktree；修复 footer 换行。 |
| [#5175](https://github.com/QwenLM/qwen-code/pull/5175) | feat(daemon): web-shell 提交消息中段投递到运行中 turn | 用户在 turn 进行中提交的消息可在 tool batch 间隙被 drain 到当前 turn，提升交互实时性。 |
| [#5094](https://github.com/QwenLM/qwen-code/pull/5094) | **feat(core+cli): Workflow P4 — meta + /workflows + phase-tree** | 动态工作流移植 P4 阶段（基于 P1–P3 已合入），引入 meta 抽取与 `/workflows` 命令 + phase 树视图。 |
| [#5174](https://github.com/QwenLM/qwen-code/pull/5174) | feat(cli): daemon status API | `qwen serve` 新增只读 `GET /daemon/status` 端点，提供 summary / full 两档，包含 session 数、权限压力、SSE/ACP transport 计数、限流拒绝等指标。 |
| [#5185](https://github.com/QwenLM/qwen-code/pull/5185) | fix(plan-gate): 隔离 gate agent 的 AbortSignal | 修复 AUTO/YOLO 预 plan 模式下 `exit_plan_mode` 触发 gate agent 无限重试的 bug。 |
| [#5179](https://github.com/QwenLM/qwen-code/pull/5179) | fix(model): 多 provider 共享 model id 时持久化所选 provider | 关闭 #5173；模型选择时同时持久化 `baseUrl` 用于下次解析。 |
| [#4943](https://github.com/QwenLM/qwen-code/pull/4943) | feat(cli): `--safe-mode` 故障排查旗标 | 关闭 QWEN.md/hooks/extensions/skills/MCP/subagents 等所有自定义，提供纯净基线会话与 `QWEN_CODE_SAFE_MODE` 环境变量。 |
| [#5148](https://github.com/QwenLM/qwen-code/pull/5148) | **feat(loop): /loop 命令面对齐 + 任务文件读取器** | `/loop` 父任务 #5124 的首个落地切片；新增 `/proactive` 别名与项目级/用户级 loop task 文件查找，仍不引入 wakeup 调度。 |

> 另值得跟踪：#5173/5179 修复、#5181 OOM 修复与 #5147/5154 共同构成"memory & 上下文性能"治理组合；#4564（token usage 暴露 / `/stats` 增强）将补齐成本可见性短板。

---

## 📈 功能需求趋势

按议题聚类，过去 24 小时社区关注集中在以下方向：

1. **`/loop` 自驱动循环生态**（热度最高）
   涉及 #5124/#5129/#5130/#5131/#5132/#5133/#5134/#5135/#5136/#5133/#5156/#5184/#5182/#5148 等 14+ 条目。社区诉求已从"是否支持"演进到"自我节奏 vs 固定间隔 vs 任务文件 vs tick 模板"四维精细化讨论。

2. **MCP 生态与 Schema 兼容性**
   - 数字字符串强制转换（#4966、#4793）：LLM 输出 `"3"` 触发严格 schema 校验失败。
   - MCP OAuth token 路径与 daemon UI 事件计数（#5172 已修）。
   - Desktop 端 MCP server 移除持久化（#4535 已修）。

3. **Memory / 上下文性能治理**
   - auto-memory transcript 构建 OOM（#5147 → #5181 已修）。
   - 大工具结果反复塞入 provider 历史（#5101，P1）。
   - QWEN.md 长度按模型上下文窗口缩放告警（#4941）。
   - 自我节奏 loop 的 token 高效 tick 模板（#5132）。

4. **模型与 Provider 路由**
   - OAuth 下线模型仍出现在 `/model` 列表（#5160）。
   - 多 provider 同 model id 路由（#5173 → #5179）。
   - 统计/成本可见性 #4564（`/stats` 扩展 token 用量展示 + 导出）。

5. **Desktop 体验补全**
   - 顶部展示 git 分支（#4769）。
   - `/extensions` 多 Tab 管理器（PR #4850：Installed/Discover/Sources）。
   - Desktop 启动通道（#5152 已修）。

6. **安全与权限体验**
   - 桌面通知/窗口标题/铃声 hook 输出（#4882）。
   - sudo 命令交互式授权（#5119）。
   - 杀软误报 VSCode 扩展（#5055，P1）。
   - `--safe-mode` 故障排查（PR #4943

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
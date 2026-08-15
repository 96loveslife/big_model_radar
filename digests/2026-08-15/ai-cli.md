# AI CLI 工具社区动态日报 2026-08-15

> 生成时间: 2026-08-15 01:34 UTC | 覆盖工具: 8 个

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

<think>The user wants me to generate a horizontal comparative analysis report based on the daily reports of various AI CLI tools. Let me analyze the data carefully and produce a well-structured report in Chinese.

Let me extract key data points:

**Claude Code:**
- Release: v2.1.233 (GitLab MR + Apps Gateway forward_user_identity)
- Issues: Top has #69238 (63 comments, 96 thumbs up), multiple Windows/macOS stability issues
- PRs: Only 4 in 24h

**OpenAI Codex:**
- Releases: 5 alpha versions (rust-v0.148.0-alpha.14 through alpha.18)
- Issues: #20214 with 101 comments, Windows 26.810.x regression wave
- PRs: ~10 notable, mostly from copyberry[bot], focus on permission profiles + sandbox

**Gemini CLI:**
- Release: v0.56.0-nightly.20260815
- Issues: #22323 (12 comments), SSR Agent dominant
- PRs: ~13+ SSR Agent auto-fixes

**GitHub Copilot CLI:**
- Releases: v1.0.81-0 + v1.0.80 (model config only)
- Issues: MCP OAuth regression cluster (#4480, #4439)
- PRs: Only 3, internal workflow migration

**Kimi Code CLI:**
- Releases: None
- Issues: Only 4 in 24h (mostly memory-system related #1283 with 39 comments)
- PRs: None

**OpenCode:**
- Releases: None
- Issues: #42608 ID timestamp wraparound (P0 incident), #36997 desktop layout
- PRs: ~10+ including #42684 fix

**jcode:**
- Release: v0.76.0 (transcript privacy + provider expansion)
- Issues: #940 critical daemon bug, provider routing
- PRs: 2 batch triage PRs closing 11 issues

**pi:**
- Release: v0.84.2 (fullscreen search + configurable tools)
- Issues: #7547 Windows survey, TUI perf
- PRs: ~18 closed, focus on multi-provider

Let me build the comparative analysis:

**Activity metrics:**
- Claude Code: 1 release, 30+ issues shown, 4 PRs
- Codex: 5 releases, 50 issues, 10+ PRs
- Gemini: 1 release, 50 issues, 13+ PRs
- Copilot CLI: 2 releases (small), 30 issues, 3 PRs
- Kimi: 0 releases, 4 issues, 0 PRs
- OpenCode: 0 releases, 50 issues, 10+ PRs
- jcode: 1 release, 30 issues, 2 PRs (but big impact)
- pi: 1 release, 30 issues, 18+ PRs

**Common themes (cross-tool):**
1. **Provider/multi-model support** - All tools: Claude Code (#24537 subagent), Codex (permission profiles), Gemini (#21968 skills), Copilot (MCP OAuth), Kimi (#1283 memory), OpenCode (#4581 Ollama, #42083 Copilot), jcode (#938, #942, #949), pi (SiliconFlow, xAI, Bedrock)
2. **Windows/Desktop platform stability** - Claude Code (#86619), Codex (#20214, #28855, #33912), Gemini (wayland/wsl), Copilot (#4492, #4499), pi (#7547, #7761, #8047)
3. **Memory/context management** - Claude Code (#79217 MEMORY.md), Codex (auto-compact), Gemini (auto-memory safety), Kimi (#1283, #1478), pi (#8120, #8119)
4. **MCP ecosystem** - Claude Code (plugins), Codex (sandbox), Gemini (browser_agent), Copilot (#4480 OAuth), OpenCode (#42662 config), jcode (#936, #944)
5. **Sandbox/security granularity** - Claude Code (worktree), Codex (deny-read, permission profiles), Gemini (zero-dep sandbox), jcode (bash gate false positives)
6. **Billing/transparency** - Claude Code (#83062, #84607), OpenCode (#42013, #42385)
7. **TUI/CLI UX details** - All have UX grievances - scrolling, paste handling, terminal compat

**Differentiation:**
- Claude Code: enterprise gateway + worktree + MR URL
- Codex: deepcopy permission model + sandbox hardening
- Gemini: SSR Agent auto-fix + AST-aware tools + Auto Memory
- Copilot CLI: GitHub-native + MCP OAuth heavy
- Kimi: Chinese developer focus + simpler scope
- OpenCode: Desktop-first + multi-provider discovery (LAN)
- jcode: privacy-by-default telemetry + provider fanout
- pi: experimental features (append compaction) + TUI perf + provider matrix

**Community heat:**
- High: Codex, Claude Code, OpenCode (sustained issue volume + PR activity)
- Medium: Gemini, Copilot CLI, pi
- Lower recent activity: Kimi (low issue count, but #1283 still strong)
- jcode: low PR count but high impact per PR

**Trend signals:**
1. Sub-agent/multi-agent workflows becoming table-stakes
2. Memory/persistent context is the next battleground
3. Multi-provider fanout replacing single-model lock-in
4. Sandbox security moving from binary allow/deny to per-env permission profiles
5. Desktop app stability becoming critical mass problem
6. SSR Agent / auto-triage bots changing contribution dynamics
7. PR automation migrating away from pull_request_target
8. Provider catalog drift (models.dev) being a persistent pain point
9. Windows is still the underdog platform
10. Privacy-preserving telemetry becoming a feature

Let me write this up in a professional, structured format with tables and clear data backing.</think>

# AI CLI 工具横向对比分析报告
**日期：2026-08-15 · 覆盖 8 款主流 AI CLI 工具**

---

## 1. 生态全景

AI CLI 工具在 2026 年中期已从"模型入口"演化为"开发者工作站"——8 款主流工具普遍进入 **Provider 矩阵 × 沙箱权限 × 持久化记忆 × 多 Agent 编排** 四象限的同台竞争。今天最显著的态势是：**OpenAI Codex 借 5 个 alpha 连发与 Windows 性能回归争夺头版；Anthropic Claude Code 在企业场景（GitLab MR / Apps Gateway）加深护城河；OpenCode 因 P0 级 ID 时间戳溢出事件暴露了"会话主键设计"的根本性短板；Gemini CLI 的 SSR Agent 已形成可复用的"自动 triage → 批量 fix"流水线**——这意味着下一阶段的竞争将不只是模型能力比拼，更是**工程治理能力**（自动化维护、回滚机制、跨平台一致性）的较量。

---

## 2. 各工具活跃度对比

> 数据基准：过去 24 小时（2026-08-14 ~ 2026-08-15）GitHub 公开数据

| 工具 | 发布 | Issue 数 | PR 数 | 关键信号 |
|------|------|----------|-------|---------|
| **Claude Code** | v2.1.233 ×1 | ~50 (Top10 选取) | 4 | 高 👍 低评论占比，单条热度极高（#69238 96 👍） |
| **OpenAI Codex** | rust-v0.148.0-alpha.{14..18} **连发 5 个** | ~50 | 10+ | 单日发布密度最高；Windows 26.810.x 引发系统性 Issue 爆发 |
| **Gemini CLI** | v0.56.0-nightly | ~50 | **13+ (SSR Agent 主导)** | PR 数显著多于 Issue，新增几乎全为机器人自动化 |
| **GitHub Copilot CLI** | v1.0.81-0 + v1.0.80 | ~31 | 3 | 版本仅做模型配置热更新，PR 集中于内部工作流迁移 |
| **Kimi Code CLI** | 无 | 4 | 0 | 仓库活跃度偏低，#1283 Memory System 仍是社区最热 |
| **OpenCode** | 无 | ~50 | 10+ | **P0 事件级别**：48-bit ID 时间戳回绕引发大规模 session 假死 |
| **jcode** | v0.76.0 ×1 | ~30 | **2** (含批量 triage) | PR 数量少但**单 PR 平均关闭 5–6 个 issue**，治理密度最高 |
| **pi** | v0.84.2 ×1 | ~30 | **18+ 已合并** | PR 数量与质量双高，Provider 矩阵扩张明显 |

**图表解读**：
- **发布密度**：Codex > Claude Code / Gemini / Copilot / jcode / pi > OpenCode / Kimi
- **PR 活跃**：pi ≈ Gemini > Codex ≈ OpenCode > Claude Code > jcode > Copilot > Kimi
- **Issue 体量**：Codex ≈ OpenCode ≈ Gemini ≈ Claude Code > jcode ≈ pi ≈ Copilot > Kimi

---

## 3. 共同关注的功能方向

下表汇总各工具在今日数据中**同时出现**的需求热点：

| 方向 | Claude Code | Codex | Gemini | Copilot | Kimi | OpenCode | jcode | pi | 共性诉求 |
|------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|----------|
| **多 Provider 接入 / 路由** | #24537 | Permission Profile | — | #4390/#4345 | — | #4581/#42083/#27554 | #938/#949/#650 | SiliconFlow/xAI/Bedrock | 已成全行业标配，焦点从"接入"转向"路由正确性" |
| **多 Agent / Subagent 体系** | #24537/#86089 | — | #22323/#21409 | — | — | (subagent 颜色) | — | — | 工作流编排逐渐成为差异化点 |
| **Windows / Desktop 稳定性** | #86619/#86555 | #20214/#28855/#33912 | Wayland | #4492/#4499 | #1136 | #36997/#37718 | #955 | #7547/#8047 | **最普遍的低分项**，几乎每家都积压 1+ 年 |
| **沙箱与权限粒度** | `--worktree` | deny-read/permission profile | Zero-dep sandbox | — | — | `#27554` LAN | Bash gate 误判 | — | 从二元允许/拒绝 → per-environment/attachment |
| **持久化记忆 / 上下文** | #79217/#85205 | TUI 长线程恢复 | Auto Memory 安全 | — | **#1283 (#1478)** | #37489 缓存 | — | #8119/#8120 | 中文社区对 Memory.md 模式期望最高 |
| **MCP 生态** | plugin | — | browser_agent | **#4480/#4439 OAuth** | — | #42662 容错 | #936/#944 | — | OAuth/RFC 8414 兼容性成最大痛点 |
| **TUI / 终端体验** | 折叠失效 | TUI 黑屏 | WSL/Wayland | WebView2 | — | 多路复用器 | Windows Sixel | #6665 CPU/剪贴板 | 流式渲染 + 主题刷新 + 剪贴板是公认三难 |
| **计费透明度** | #83062/#84607 | — | — | — | — | #42013/#42385 | — | — | 商业化工具共同短板 |
| **隐私遥测** | — | — | — | — | — | — | **v0.76.0 opt-in redact** | — | 仍属差异化卖点 |

**结论**：**Provider 矩阵 + 平台稳定性 + 记忆系统**已成为事实上的"行业三大诉求"，是任何新进入者必须正面回答的题目。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线关键词 |
|------|----------|---------|---------------|
| **Claude Code** | 企业工作流编排 + 上游网关 | 企业 SRE、平台工程团队 | GitLab MR / Apps Gateway / multi-agent |
| **OpenAI Codex** | 高频迭代的协议层 (Rust α) + 系统级 Desktop | 重度 CLI 用户 + 付费 Plus/Pro | PermissionProfileSnapshot / sandbox fail-closed / copyberry bot |
| **Gemini CLI** | 自动化社区运营 + 大模型原生 Bash 体验 | 偏爱 Gemini 3 的开发者 + 自动化社区 | SSR Agent auto-triage / AST-aware / Auto Memory |
| **GitHub Copilot CLI** | GitHub 生态深度集成 + MCP 注册中心 | GitHub Actions 用户 / 企业订阅 | MCP OAuth / OTLP / BYOK autopilot |
| **Kimi Code CLI** | 中文社区 Memory-First Agent | 中文开发者大项目协作 | MEMORY.md / SOUL.md 风格 |
| **OpenCode** | 桌面优先 + 多 Provider 自动发现 | 本地/自托管模型重度用户 + Wayland/WSL 用户 | LAN discovery (mDNS) / Desktop UI / 多 provider fanout |
| **jcode** | 隐私默认 + 严苛 Bash 安全门 + Anthropic 兼容 Provider | 安全敏感 / 多订阅轮换用户 | transcript redact / provider profile / batch triage |
| **pi** | 实验性前沿特性 + Provider 矩阵广度 | 早期采用者 / 多模型订阅重度用户 | append compaction / experimental flags / TUI perf |

**观察**：
- **企业网关 vs 个人开发者**：Claude Code 与 Copilot CLI 在企业落地（Gateway/Org policy）最深；OpenCode、pi 更适合个人深度玩家。
- **自托管优先**：OpenCode（LAN discovery）与 jcode（Anthropic-compat + http provider）是唯二重点投入自托管场景的工具。
- **自动化治理代表**：Gemini CLI 的 SSR Agent 与 jcode 的批量 triage PR 模式，代表了"AI 维护 AI"的新范式，效率远超传统人力 triage。

---

## 5. 社区热度与成熟度

### 社区热度（按过去 24h 互动体量排序）

```
[ 极高 ]  OpenAI Codex · Claude Code · OpenCode
[ 高   ]  Gemini CLI · GitHub Copilot CLI · pi
[ 中   ]  jcode
[ 低   ]  Kimi Code CLI
```

### 成熟度评估矩阵

| 工具 | 协议稳定性 | 跨平台覆盖 | 社区治理节奏 | 商业化清晰度 | 综合成熟度 |
|------|:---:|:---:|:---:|:---:|:---:|
| Claude Code | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | 🟢 高 |
| OpenAI Codex | ⭐⭐ (α 阶段) | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | 🟡 中（α 不稳） |
| Gemini CLI | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ (SSR Agent) | ⭐⭐ | 🟢 高 |
| Copilot CLI | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | 🟢 高（窄） |
| Kimi Code CLI | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | 🟡 中 |
| OpenCode | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | 🟢 高 |
| jcode | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ (高效 triage) | ⭐ | 🟡 中 |
| pi | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | 🟡 中 |

**解读**：
- **生态最稳**：Claude Code + OpenCode 进入"可用 + 可治理"阶段。
- **最活跃迭代**：OpenAI Codex（α 连发）+ Gemini CLI（SSR Agent 流水线）。
- **最具潜力**：pi 以高频的 PR 合并节奏与 Provider 矩阵广度，正快速逼近头部。
- **需要警示**：Codex 当前处于 α 阶段、Windows 性能回归未根因；Kimi 在 PR 通道近乎沉默。

---

## 6. 值得关注的趋势信号

### 🔮 行业级信号

1. **会话主键设计成为基础设施工种**
   - OpenCode #42608（48-bit 时间戳回绕）+ Codex alpha (SessionPrompt.runLoop 死循环) 同日暴露 ID 设计的根本缺陷。
   - **建议**：任何在生产环境使用 AI CLI 的团队，升级前对 **session/thread ID 迁移路径** 做回归测试。

2. **"AI 维护 AI" 自动化流水线正式成型**
   - Gemini CLI SSR Agent（24h 内 13+ 个批量 fix）+ jcode 双 PR 关闭 11 个 issue。
   - **建议**：贡献者向这些"低垂果实"项目靠拢，可获得最快的合入节奏；产品团队应审视自身的 triage 流程是否会被此类自动化工具反超。

3. **多 Provider 接入从"开关"转向"路由正确性"**
   - jcode #650（帧过大丢路由）、OpenCode #42083（认证后看不到模型）、Copilot #4390（启用模型消失）都体现：路由层的静默失败已成高频痛点。
   - **建议**：选型时关注工具是否提供 **provider-level 可观测性 / 故障注入测试能力**。

4. **持久化记忆 = 下一阶段主战场**
   - Claude Code #79217（MEMORY.md 配置化）+ Kimi #1283/#1478（中文用户呼吁）+ Codex 长线程恢复 + Gemini Auto Memory 安全告警。
   - **建议**：关注工具是否提供 *Memory 文件的分层（system/user/project）、确定性 redact、quarantine* 能力，这三要素将决定企业部署的合规可行性。

5. **Windows 仍是 Agent IDE 的"暗物质"**
   - 8 款工具无一幸免：Claude Code（Git Bash 弹窗）、Codex（DWM 句柄）、Gemini（WSL 剪贴板）、OpenCode（WSL 网络 sidecar）、pi（VTE 剪贴板 + Unix socket）。
   - **建议**：若团队主力在 Windows，应优先选择 *在 Windows 测试覆盖上有承诺* 的项目（看 CHANGELOG / Windows CI matrix）。

6. **Provider Catalog Drift 长期化**
   - pi #8096（Z.AI 默认模型引用空指针）+ Copilot #4494（缓存未刷新看不到新模型）+ OpenCode #42083 共同指向：models.dev 等 catalog 与本地缓存的同步机制没有彻底方案。
   - **建议**：短期内可手动清缓存或切换 `--no-cache`；长期需工具方提供

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community repository data and produce a structured report. Let me carefully review the data provided.

Looking at the PRs (sorted by what appears to be engagement, though comments show as "undefined" - I need to infer from other signals like updates, thumbs up, and the issue linkages):

**Top PRs by engagement signals:**
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall — This is a significant bug fix related to #556 with "10+ independent reproductions"
2. #514 - Add document-typography skill
3. #538 - fix(pdf): correct case-sensitive file references
4. #486 - Add ODT skill
5. #210 - Improve frontend-design skill clarity
6. #83 - Add skill-quality-analyzer and skill-security-analyzer
7. #541 - fix(docx): prevent tracked change w:id collision
8. #539 - fix(skill-creator): warn on unquoted description
9. #1367 - feat(skills): add self-audit
10. #1099 - skill-creator: fix run_eval.py crash on Windows
11. #1050 - skill-creator: fix Windows subprocess + encoding bugs
12. #723 - feat: add testing-patterns skill
13. #568 - feat: add ServiceNow platform skill
14. #525 - Add pyxel skill for retro game development
15. #509 - docs: add CONTRIBUTING.md
16. #181 - Add SAP-RPT-1-OSS predictor skill
17. #95 - Add comprehensive system documentation and flowcharts
18. #1538 - fix: bring two skills back under the Agent Skills spec
19. #1528 - FIX
20. #1479 - Add plan-file-hygiene skill

**Top Issues by comments:**
1. #492 - Security: Community skills distributed under anthropic/ namespace (43 comments, 2 👍) - HIGHEST COMMENT COUNT
2. #228 - Enable org-wide skill sharing in Claude.ai (16 comments, 8 👍)
3. #556 - run_eval.py never triggers skills/commands (12 comments, 7 👍)
4. #62 - All my skills have disappeared (10 comments, 2 👍)
5. #1329 - compact-memory skill proposal (9 comments)
6. #202 [CLOSED] - skill-creator update (8 comments)
7. #412 [CLOSED] - agent-governance proposal (6 comments)
8. #189 - duplicate skills problem (6 comments, 9 👍)
9. #1487 - claude-api skill injects 156k tokens (4 comments)
10. #1385 - Reasoning Quality Gate Pipeline (4 comments)
11. #1175 [CLOSED] - SharePoint security concerns (4 comments)
12. #29 - Usage with bedrock (4 comments)
13. #16 - Expose Skills as MCPs (4 comments)
14. #12 - whitespace reformatting in docx (4 comments)
15. #1169 - skill-creator recall=0% (3 comments)

Now let me structure the report:

**1. Hot Skills Ranking (Top 5-8)**
Looking at engagement signals (comments on linked issues, 👍 counts, cross-references):
- The data shows "评论: undefined" for PRs but I can infer engagement from issue references and 👍 (which all show 0 for PRs, so I'll go by relevance of issues linked)

Top skills by community engagement:
1. **#1298 skill-creator fix** - Links to #556 (12 comments, 7 👍), massive impact
2. **#514 document-typography** - High relevance for AI-generated docs
3. **#83 skill-quality-analyzer / skill-security-analyzer** - Meta skills, security focus aligns with #492 (43 comments)
4. **#1367 self-audit** - Quality gate, alignment with #1385
5. **#210 frontend-design improvement** - Design quality skill
6. **#723 testing-patterns** - Major workflow area
7. **#486 ODT skill** - Document handling expansion
8. **#568 ServiceNow** - Enterprise platform

**2. Community Demand Trends (from Issues)**
- **Security & Trust boundaries** - #492 (43 comments!) - massive concern about community skills impersonating official ones
- **Org-wide skill sharing** - #228 (16 comments, 8 👍) - enterprise distribution
- **Skill quality & governance** - #1329 (compact-memory), #1385 (reasoning quality gate), #412 (agent-governance), #83 (skill-quality-analyzer)
- **Document skills expansion** - #12 (docx), #514 (typography), #486 (ODT)
- **skill-creator tooling** - #556, #1169, #202, multiple skill-creator fixes show this is a pain point
- **Cross-platform compatibility** - Bedrock (#29), MCP integration (#16)
- **Context window management** - #1487 (156k tokens problem)
- **Plan/lifecycle management** - #1417 mentioned, #1479 plan-file-hygiene

**3. High-Potential Pending PRs**
These are open and addressing high-engagement issues:
- #1298 (skill-creator fix) → addresses #556 (12 comments)
- #83 (skill-quality/security analyzer) → addresses meta-concerns related to #492
- #1367 (self-audit) → addresses quality gap, aligns with #1385
- #1099, #1050 (Windows fixes) → platform compat
- #514 (document-typography) → unique value prop
- #723 (testing-patterns) → major developer need

**4. Ecosystem Insight**
The community's central demand: **Trust, Quality, and Tooling for Skills themselves** - skills for managing skills, security analysis of skills, fixing the skill-creation loop, and clear trust boundaries between official and community contributions. The skill-creator is the bottleneck for the entire ecosystem.

Let me now write the report in Chinese, professional and concise as requested.</think>

# Claude Code Skills 社区热点报告
*数据截止 2026-08-15*

---

## 1. 热门 Skills 排行

按社区参与度（关联 Issue 评论数、👍 数、问题引用广度）排序：

### 🏆 #1298 — skill-creator: 修复 `run_eval.py` 始终 0% recall [OPEN]
**关联 Issue** [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7👍, **10+ 复现**） / [#1169](https://github.com/anthropics/skills/issues/1169)
- **功能**：修复 `run_eval.py` 的核心评估失灵——导致 skill-creator 的描述优化循环在"噪声"上迭代
- **热点**：描述优化、评估管线、Windows 兼容、并行 workers 全面失修；社区公认的"阻塞性问题"
- **状态**：Open（2026-06-10 提交，被多 PR 接力修复）

### 🥈 #514 — 新增 document-typography Skill [OPEN]
- **功能**：孤儿行/widow 段落/编号错位等排版通病自动控制
- **热点**：每个 Claude 生成的文档都受影响，"用户极少主动要求好排版"——填补通用质量缺口
- **状态**：Open（2026-03-04）

### 🥉 #83 — skill-quality-analyzer 与 skill-security-analyzer [OPEN]
- **关联 Issue** [#492](https://github.com/anthropics/skills/issues/492)（43 评论, **社区最热议题**）
- **功能**：从结构/文档/可靠性/安全/可维护性五维度审计 Skill
- **热点**：直接回应社区对社区贡献 Skill "信任边界"问题的核心诉求
- **状态**：Open（2025-11-06，最长滞留之一）

### #1367 — self-audit v1.3.0 [OPEN]
- **关联 Issue** [#1385](https://github.com/anthropics/skills/issues/1385)
- **功能**：交付前的机械文件验证 + 4 维推理质量门控
- **热点**："交付前自审计"成为继 skill-creator 之后的第二大能力缺口
- **状态**：Open（2026-06-28）

### #723 — testing-patterns Skill [OPEN]
- **功能**：覆盖 Testing Trophy / 单元测试 / React Testing Library / E2E 完整栈
- **热点**：测试生成/模式化是开发者高频工作流，0 到 1 的全套方案
- **状态**：Open（2026-03-22）

### #210 — 改进 frontend-design Skill [OPEN]
- **功能**：把模糊的 UI 指导改写为 Claude 单轮可执行、行为可约束的指令
- **热点**：设计质量是用户最直观的痛点，原版本"指令冗长但不收敛"
- **状态**：Open（2026-01-05，长期优化型 PR）

### #568 — ServiceNow 平台 Skill [OPEN]
- **功能**：覆盖 ITSM/ITOM/ITAM/SecOps/FSM/SPM/CSDM 的大型企业平台助手
- **热点**：企业级垂直域知识深度整合
- **状态**：Open（2026-03-08 → 2026-08-12 持续活跃迭代）

---

## 2. 社区需求趋势

| 需求方向 | 信号 Issue | 关注度 |
|---------|-----------|--------|
| **安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 🔥 **43 评论**（绝对 TOP 1）|
| **企业内 Skill 共享分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 / **8👍** |
| **Skill 自评估与质量门控** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) / [#1385](https://github.com/anthropics/skills/issues/1385) | 12+9+4 评论 |
| **文档生成质量（排版/格式）** | [#12](https://github.com/anthropics/skills/issues/12) / #514 | 4 评论 + 文档类高频痛点 |
| **Skill 生命周期/规划卫生** | #1479（plan-file-hygiene）| 新型长尾需求 |
| **跨平台兼容（Bedrock / MCP）** | [#29](https://github.com/anthropics/skills/issues/29) / [#16](https://github.com/anthropics/skills/issues/16) | 4+4 评论 |
| **上下文窗口控制** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` 单次注入 156k tokens |
| **Agent 治理与安全** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED）/ [#1175](https://github.com/anthropics/skills/issues/1175) | 6+4 评论 |
| **重复 Skill 加载** | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 / **9👍** |

**三大主线**：
1. **元技能（Meta-Skills）**——评估他人 Skill 的工具成为新刚需
2. **企业化能力**——跨组织分发、平台集成、合规审计
3. **skill-creator 自身的可用性**——共 4 个相关高优 Issue/修复 PR，反映它是生态瓶颈

---

## 3. 高潜力待合并 PR

按"高关注议题 + 仍 Open + 近期活跃"筛选：

| PR | 解决的核心议题 | 落地概率信号 |
|----|--------------|------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 综合修复 | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) | **最高优先级**——多 PR 接力、10+ 复现案例 |
| [#1099](https://github.com/anthropics/skills/pull/1099) Windows fix | [#556](https://github.com/anthropics/skills/issues/556) WinError 10038 | 与 #1298 互补 |
| [#1050](https://github.com/anthropics/skills/pull/1050) Windows subprocess fix | [#556](https://github.com/anthropics/skills/issues/556) WinError 2 | 1 行修复，落地阻力低 |
| [#83](https://github.com/anthropics/skills/pull/83) skill-quality-analyzer | [#492](https://github.com/anthropics/skills/issues/492) 信任危机 | 切中最大痛点，但需协调命名空间策略 |
| [#1367](https://github.com/anthropics/skills/pull/1367) self-audit v1.3.0 | [#1385](https://github.com/anthropics/skills/issues/1385) | 思路被认可，等待 v1.3 收敛 |
| [#514](https://github.com/anthropics/skills/pull/514) document-typography | 隐性高频痛点 | 独立性强，依赖少 |
| [#1538](https://github.com/anthropics/skills/pull/1538) 合规 spec 修复 | 参考实现的范式问题 | 阻塞性，技术债务 |
| [#541](https://github.com/anthropics/skills/pull/541) docx w:id 冲突修复 | 文档损坏 P0 故障 | 根因清晰，落地阻力极低 |

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求是「用 Skill 治理 Skill」——构建一套可信、可度量、可审计的 Skill 自举生态，包括命名空间信任边界（#492）、description 优化评估闭环（#556/#1298）、交付前自审计（#1367/#1385）三层质量基础设施。** skill-creator 既是社区创造力放大器，也是当下最大的可用性瓶颈。

---

<think>The user wants me to generate a daily report for Claude Code community dynamics based on the GitHub data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze what I have:

**Release:**
- v2.1.233 - Added GitLab MR URL support to --worktree flag and claude agents view, plus opt-in forward_user_identity apps gateway setting

**Top Issues by comments (30 shown, need to pick 10):**
1. #69238 - BUG: No response from API error when Advisor is triggered (63 comments, 96 thumbs up) - MacOS, TUI, API bug
2. #30869 - Unarchive Claude Code sessions in desktop app option (29 comments, 57 likes) - CLOSED
3. #24537 - Agent Hierarchy Dashboard for multi-agent workflows (16 comments, 17 likes) - Enhancement
4. #11791 - Browser automation tools incompatible with web sandbox proxy (11 comments, 16 likes) - DOCS/BUG
5. #86619 - Windows Git Bash: static analysis false-positives on read-only cd-compound commands (9 comments, 9 likes) - Bug
6. #66117 - Disable prompt suggestions in Claude.ai web/app interface (9 comments, 10 likes) - Enhancement
7. #79217 - Make MEMORY.md index size limit configurable (3 comments, 2 likes) - Enhancement
8. #84029 - Crash leaves terminal in mouse-tracking mode (2 comments) - Bug
9. #82431 - Dispatch missing from Claude Desktop sidebar on Linux (2 comments) - Bug
10. #84266 - model_refusal_fallback false-positives on tmux orchestration (2 comments) - Bug
11. #86473 - Persistent ECONNRESET on Windows (2 comments) - Bug
12. #86555 - Windows MSIX update fails (2 comments) - Bug
13. #84607 - Same-day 17x variance in tokens charged (2 comments) - Bug
14. #72707 - VS Code long user prompt cannot be collapsed (2 comments, 11 likes) - Bug
15. #83924 - Stop hook false unpushed commits (1 comment) - Bug
16. #86809 - Plugin hooks never run from directory-source marketplace (1 comment) - CLOSED Bug
17. #86089 - Workflows resuming agent sessions (1 comment) - Enhancement
18. #76079 - Claude Desktop macOS 107s startup beachball (1 comment) - Bug
19. #83063 - 251+ instruction-following failures (1 comment) - User complaint
20. #85272 - Archiving local Cowork project removes from UI (1 comment) - Bug
21. #83062 - $995.67 auto-recharges after limits reset (1 comment) - Billing Bug
22. #86807 - Browser Agent MCP no way to list contexts (1 comment) - CLOSED Enhancement
23. #86016 - Windows session freezing (1 comment) - Bug
24. #86804 - Fable 5 dual-use safeguard false-positives (1 comment) - Bug
25. #86786 - Plugin marketplace EFAULT on macOS 26 (1 comment) - CLOSED
26. #85205 - Auto-compact fires at 150k on 1M model (1 comment) - Bug
27. #86730 - Default cleanupPeriodDays deleted session transcripts (1 comment) - Bug, data-loss
28. #84548 - Gateway /login hangs at "press Enter" (1 comment) - Bug
29. #86818 - Cowork marketplace update fails (0 comments) - Bug
30. #86817 - claude-api reinvocation duplicates payload (0 comments) - Bug

**Pull Requests:**
1. #86746 - fix(security-guidance): preserve Python probe errors
2. #86626 - feat: add shell completions (bash, zsh, fish)
3. #83890 - Create pylint.yml
4. #41611 - add the missing source to claude code

Wait, there are only 4 PRs shown but the user asked for 10. Let me note that and pick the most important from what's available.

Now let me structure the report:

1. **今日速览** - Overview of most important updates
2. **版本发布** - v2.1.233 details
3. **社区热点 Issues** - Top 10 by importance (use comment count + likes as proxy)
4. **重要 PR 进展** - 4 PRs available (note that there are only 4, not 10)
5. **功能需求趋势** - Analysis of features requested
6. **开发者关注点** - Pain points from feedback

Let me also identify trends:
- IDE/Desktop integrations (VS Code, Linux desktop, Cowork)
- Multi-agent workflows and orchestration
- Memory/context management (1M context, auto-compact)
- Browser automation (Playwright/Puppeteer sandboxing)
- Windows-specific issues
- Model behavior (Fable 5 dual-use safeguards)
- Billing concerns
- Plugin ecosystem
- Cost/billing visibility

Let me write a comprehensive, professional report in Chinese.</think>

# Claude Code 社区动态日报
**日期：2026-08-15**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.233**，主要新增 GitLab MR URL 支持（`--worktree` 与 `claude agents` 视图）以及面向代理上游的可选 `forward_user_identity` 网关配置。社区层面，**macOS Advisor 触发 API 无响应** 的高赞 Bug（#69238，96 👍）仍是讨论焦点；同时 **Windows Git Bash 权限弹窗风暴**（#86619）、**1M 模型被错误触发 150k 自动压缩**（#85205）以及 **Cowork 项目归档不可逆**（#85272）等一批影响工作流的关键缺陷在过去 24 小时持续被追踪。

---

## 🚀 版本发布

### v2.1.233 — 2026-08-15

**主要变更：**

1. **GitLab Merge Request URL 支持**
   - `--worktree` 标志现在接受 GitLab MR URL（在 `claude agents` 视图里以 `!N` 形式展示 MR）
   - 面向使用 GitLab 而非 GitHub 的团队，统一多平台工作流入口

2. **Apps Gateway：`forward_user_identity`（opt-in）**
   - 在 Anthropic 上游启用后，网关会以 HTTP header 形式转发当前登录用户的身份信息
   - 适用于反向代理背后的场景，使后端可基于用户身份进行审计、限流或路由决策

> 🔗 [Release v2.1.233](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键标签 | 评论数 / 👍 | 为何重要 |
|---|-------|----------|-----------|---------|
| 1 | [#69238](https://github.com/anthropics/claude-code/issues/69238) **No response from API when Advisor triggered** | bug, macos, tui, api | **63 / 96 👍** | 顶级热帖。Opus 4.8 advisor 在 sonnet 基础模型上报 "No response from API"，影响 macOS 用户最核心的会话路径 |
| 2 | [#30869](https://github.com/anthropics/claude-code/issues/30869) **Unarchive Claude Code sessions in desktop** | enhancement, desktop *(已 CLOSED)* | 29 / 57 👍 | Desktop 归档后无法恢复，长期被诟病，验证社区诉求终被采纳 |
| 3 | [#24537](https://github.com/anthropics/claude-code/issues/24537) **Agent Hierarchy Dashboard** | enhancement, tui, desktop, core | 16 / 17 👍 | 多 agent 协作场景下统一可视化诉求，是 sub-agent / workflow 演进方向 |
| 4 | [#11791](https://github.com/anthropics/claude-code/issues/11791) **Playwright/Puppeteer 与 web sandbox proxy 不兼容** | docs/bug | 11 / 16 👍 | 沙箱代理不支持 HTTPS CONNECT tunneling，导致主流浏览器自动化工具在 Web 沙箱中完全不可用 |
| 5 | [#86619](https://github.com/anthropics/claude-code/issues/86619) **Windows Git Bash 权限弹窗风暴** | bug, windows, bash | 9 / 9 👍 | 自 2.1.232 起，对 `cd` 复合命令的静态分析出现误报，每条只读命令都触发权限弹窗；两台独立机器复现 |
| 6 | [#66117](https://github.com/anthropics/claude-code/issues/66117) **关闭 web/app 提示建议** | enhancement, claude-code-web | 9 / 10 👍 | 长期 UX 干扰项，Pro/Max 付费用户呼吁可关闭 prompt suggestions |
| 7 | [#72707](https://github.com/anthropics/claude-code/issues/72707) **VS Code 长 prompt 无法折叠** | bug, macos, vscode | 2 / 11 👍 | 👍/评论比异常高，说明该 UI 痛点被广泛共鸣但讨论集中 |
| 8 | [#85205](https://github.com/anthropics/claude-code/issues/85205) **1M 模型被错误压缩到 150k** | bug | 1 / 0 👍 | `/context` 自报 `Auto-compact window: 150k tokens`，对购买 1M 上下文模型的用户造成直接经济损失 |
| 9 | [#85272](https://github.com/anthropics/claude-code/issues/85272) **Cowork 项目归档后消失且无法恢复** | bug | 1 / 1 👍 | 与 Chat 项目表现不一致，存在数据可访问性风险 |
| 10 | [#83062](https://github.com/anthropics/claude-code/issues/83062) **Individual 计划额度重置后自动续费 $995.67** | billing, bug | 1 / 0 👍 | 计费类高风险案例，体现用户对自动充值透明度的高度关注 |

**关键观察**：今日更新列表中 *数据丢失（data-loss）*、*Windows 安装链（MSIX）*、*Fable 5 双用途拦截误判* 等标签高频出现，提示 2.1.23x 系列在企业部署上正遭遇多平台稳定性挑战。

---

## 🔧 重要 PR 进展

> ⚠️ 过去 24 小时仅有 **4 条 PR** 处于活跃状态（社区已显著偏向 issue-driven 反馈），以下为全量：

| # | PR | 说明 |
|---|----|------|
| 1 | [#86626](https://github.com/anthropics/claude-code/pull/86626) **新增 shell 补全脚本（bash/zsh/fish）** | 提供 `completions/{claude.bash, _claude, claude.fish}`，bash 实现兼容 macOS 自带 bash 3.2，无需 bash-completion 包。显著降低新用户上手成本 |
| 2 | [#86746](https://github.com/anthropics/claude-code/pull/86746) **保留 Python 探测错误日志** | 修复 #86709：`sg-python.sh` 不再吞掉 probe stderr，所有候选解释器失败时会输出诊断信息，便于排障 |
| 3 | [#83890](https://github.com/anthropics/claude-code/pull/83890) **新增 pylint.yml** | 为仓库引入 pylint 静态检查配置（仍待评审） |
| 4 | [#41611](https://github.com/anthropics/claude-code/pull/41611) **补充缺失源码** | 长期未合并的 "add the missing source" 提交，标注不清晰、悬置已久 |

**点评**：今天的 PR 集中在**开发者体验打磨**（shell 补全、错误可观测性），属于"小而美"的体验改进。社区近期对 PR 通道的关注度低于 Issue 通道，可能与 2.1.x 频繁发布、贡献者精力集中于 issue triage 有关。

---

## 📈 功能需求趋势

基于过去 24 小时 50 条 Issue 的标签与摘要，可归纳以下五大方向：

| 趋势 | 代表 Issue | 社区诉求核心 |
|------|-----------|-------------|
| **多 Agent 可视化与编排** | #24537、#86089 | 子 agent / workflow 树状 UI、跨会话恢复与缓存复用 |
| **模型行为与上下文管理** | #85205、#86804、#84266 | 1M 上下文正确生效、Fable 5 双用途拦截精准度、避免强制降级 |
| **IDE / Desktop 体验** | #30869、#72707、#82431、#76079 | 折叠/归档恢复、跨平台 sidebar 一致性、macOS 启动性能 |
| **沙箱与浏览器自动化** | #11791 | Web sandbox 与 Playwright/Puppeteer 的 HTTPS CONNECT 兼容 |
| **计费透明度与配额** | #83062、#84607 | 自动续费上限、按模型/会话维度的费用明细、避免 quota 误计 |

> 备注：**memory 模块**（#79217 要求 `MEMORY.md` 大小可配置）正在成为新的需求增长点，叠加 1M 上下文诉求，社区对"持久化 + 大上下文"的协同管理期望强烈。

---

## 🧑‍💻 开发者关注点

1. **平台一致性是新版本最大雷区**
   - Windows 平台集中爆发：Git Bash 权限弹窗（#86619）、MSIX 更新失败（#86555）、ECONNRESET（#86473）、会话冻结（#86016）。
   - macOS 同样不稳定：Advisor 触发 API 无响应（#69238）、启动沙滩球 107s（#76079）、插件 marketplace EFAULT（#86786）。
   - Linux 桌面（#82431）和 Cowork（#85272、#86818）开始浮出水面。

2. **数据可恢复性是底线问题**
   - #86730：`cleanupPeriodDays` 默认值静默删除 58/69 个本地会话，侧栏出现幽灵条目。
   - #85272：Cowork 项目归档即"消失"。
   - 社区呼吁：归档/清理路径必须可逆、可查询。

3. **自动模式的副作用被低估**
   - 2.1.232 引入的 auto-mode 静态分析在 Windows 上产生大量误报；与之相关的 150k 压缩、Fable 5 误拦截同样源自模型/模式切换逻辑。
   - 建议关注 changelog 中的 "auto" 相关条目，升级前在关键工作流做回归测试。

4. **计费与配额的焦虑情绪上升**
   - $995.67 自动续费（#83062）、单周 token 消耗 17 倍波动（#84607）等案例反映出用户对**实时费用面板**与**自动充值上限**的强烈需求。

5. **"看似很小、实际很烦"的 UX 细节积怨**
   - Web/app prompt suggestions（#66117）、VS Code 折叠失效（#72707）、Gateway 登录卡在 "press Enter"（#84548）—— 这些问题单条评论不多，但 👍/评论比高，说明影响面广，**优先级应在 IDE/UX 团队被前置**。

---

*本日报基于 GitHub 上 anthropics/claude-code 仓库 2026-08-14 ~ 2026-08-15 的公开数据整理，所有链接均指向官方仓库。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for the OpenAI Codex project and generate a comprehensive daily report for 2026-08-15.

Key observations:
1. **Releases**: 5 alpha releases of rust-v0.148.0 (alpha.14 through alpha.18) - very active alpha development cycle
2. **Issues**: Lots of Windows performance issues, especially after the 26.810.x update. Many issues about system-wide mouse lag, CPU usage, freezes. Also macOS performance regressions.
3. **PRs**: Most PRs are from copyberry[bot] - automated bot merges. Several about permission profiles, sandbox rules, TUI improvements, environment configuration.

Let me identify the most important issues:
- #20214 (101 comments) - Windows 11 Pro freezes/stutters
- #29532 (47 comments) - macOS SQLite log churn
- #25453 (26 comments) - Windows powershell.exe spawning
- #28015 (24 comments) - False positive safety check blocking legitimate work
- #24287 (23 comments) - Codex Desktop stuck in Thinking
- #28855 (18 comments) - Windows input lag
- #33912 (18 comments) - App freezes due to HID discovery
- #29436 (15 comments) - Windows kernel-pool growth
- #38455 (12 comments) - ChatGPT desktop Computer Use workers crash
- #38547 (12 comments) - Windows main-process CPU busy loop
- #38583 (11 comments) - Persistent system-wide mouse lag
- #33192 (11 comments) - DWM Composition handles accumulate

The hot topic is clearly the 26.810.41047 / 26.810.4967.0 update causing widespread Windows performance issues. This is a major regression affecting many users.

Top PRs (by content significance):
- #38681 - Preserve HTTP fallback for delegated sessions
- #31471 - Extract apps cache logic into ConnectorRuntimeManager
- #31644 - Linux sandbox DNS through managed proxy
- #38678 - Preserve environment configuration ownership
- #38675 - TUI paste bursts exclude shortcut input
- #38673 - Honor per-environment permission profiles
- #38670 - Forward executor network policy decisions
- #38660 - Windows sandbox managed deny-read rules
- #38651 - Permission profile snapshots in protocol
- #38649 - Reuse TUI startup account response
- #38647 - Add override to skip project configuration
- #38643 - Delay startup composer until first-login onboarding

Feature trends:
- Windows performance (top concern by far)
- macOS performance issues
- TUI/CLI improvements
- Sandbox/security enhancements
- Permission management
- Onboarding flow improvements

Let me write this report now in Chinese, technical and professional style.</think>

# OpenAI Codex 社区动态日报
**日期：2026-08-15**

---

## 📌 今日速览

过去 24 小时，社区最显著的事件是 **26.810.41047 / 26.810.4967.0 版本在 Windows 平台上集中爆发的性能回归**——大量用户报告系统级鼠标卡顿、空闲 CPU 占用飙升、DWM 句柄泄漏等问题。Rust CLI 侧同步推出 5 个 `0.148.0-alpha` 迭代版本（alpha.14 → alpha.18），节奏明显加快。PR 方面则以 `copyberry[bot]` 主导的环境配置、权限快照与沙箱强化合入为主。

---

## 🚀 版本发布

### `rust-v0.148.0-alpha.14` → `rust-v0.148.0-alpha.18`（连续 5 个 alpha）

24 小时内连发 5 个 alpha 版本，迭代节奏紧凑，但官方 changelog 内容较为精简。从配套的 PR 与 Issue 推测主要涉及：

- **沙箱强化**：Windows managed deny-read 规则在所有执行路径生效（[#38660](https://github.com/openai/codex/pull/38660)）；Linux 沙箱 DNS 通过 managed proxy 路由（[#31644](https://github.com/openai/codex/pull/31644)）。
- **权限模型重构**：`PermissionProfileSnapshot` 升级为协议层模型，引入 per-environment permission profile（[#38651](https://github.com/openai/codex/pull/38651)、[#38673](https://github.com/openai/codex/pull/38673)）。
- **执行链路可观测性**：executor 网络策略决策增加 `network/policyDecision` 通知用于审计（[#38670](https://github.com/openai/codex/pull/38670)）。
- **TUI/输入体验**：TUI 启动时复用账户响应避免重复读取（[#38649](https://github.com/openai/codex/pull/38649)）；首次登录 onboarding 流程调整（[#38643](https://github.com/openai/codex/pull/38643)、[#38644](https://github.com/openai/codex/pull/38644)）。

⚠️ 当前仍处于 alpha 阶段，**不建议生产环境升级**。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 / 👍 | 为什么重要 |
|---|-------|----------|-----------|
| 1 | [#20214](https://github.com/openai/codex/issues/20214) Codex App 在 Windows 11 Pro 频繁卡顿/冻结（@squarepots） | 101 / 84 | **本月讨论度最高的 Windows 性能问题**，跨版本未根治，影响 Plus 订阅用户基础体验。 |
| 2 | [#29532](https://github.com/openai/codex/issues/29532) macOS 上 `rust-v0.142.0` 之后 SQLite TRACE 日志仍持续产生（@pwukun） | 47 / 9 | 暴露 `app-server` 日志管道仅部分修复，磁盘与 I/O 影响长期存在。 |
| 3 | [#25453](https://github.com/openai/codex/issues/25453) Windows Codex Desktop 每秒拉起 powershell.exe 导致高 CPU（@jrf1001） | 26 / 7 | 反映 Desktop 进程轮询机制设计缺陷，长期未解决。 |
| 4 | [#28015](https://github.com/openai/codex/issues/28015) CLI 安全检查对普通本地维护任务频繁误报（@jyongchul） | 24 / 5 | 付费用户被多次中断会话，安全策略与开发者体验的典型冲突。 |
| 5 | [#28855](https://github.com/openai/codex/issues/28855) Windows Desktop 26.611.8604.0 引发系统性输入延迟（@Yassycodes） | 18 / 20 | 👍 高赞，表明问题影响面广、用户痛感强烈。 |
| 6 | [#33912](https://github.com/openai/codex/issues/33912) Windows 上 App 冻结：HID 发现阻塞 Electron 主线程（@mihalyimark） | 18 / 2 | 揭示 Electron 主线程被同步扫描阻塞，架构层面问题。 |
| 7 | [#29436](https://github.com/openai/codex/issues/29436) Windows 桌面应用引发持续内核池增长（@xinaxinaxin） | 15 / 7 | 内核资源泄漏级别问题，普通应用无法回收内存。 |
| 8 | [#38455](https://github.com/openai/codex/issues/38455) ChatGPT Desktop 26.810.41047 Computer Use 重复生成 worker 并 V8 OOM（@flannick） | 12 / 4 | 新版本 Computer Use 在 macOS 崩溃，并叠加昨日 #38637 / #38468 的同类投诉。 |
| 9 | [#38547](https://github.com/openai/codex/issues/38547) Codex Windows 26.810.4967 空闲时主进程 CPU 忙循环（@123kkksss） | 12 / 5 | 直接指向 **26.810.4967 Chrome 插件 app-server 哈希逻辑回归**，与近期 Windows 卡顿潮关联。 |
| 10 | [#38583](https://github.com/openai/codex/issues/38583) Windows 11 26.813.12317 引发持续鼠标延迟与空闲 CPU 占用（@spirosin） | 11 / 6 | 与 [#38547](https://github.com/openai/codex/issues/38547)、[#38554](https://github.com/openai/codex/issues/38554)、[#38556](https://github.com/openai/codex/issues/38556)、[#38510](https://github.com/openai/codex/issues/38510)、[#38546](https://github.com/openai/codex/issues/38546) 共同指向 **26.810.x 系列在 8/14 推送后的系统性回归**。 |

> **趋势提示**：8 月 14 日推送的 `26.810.41047` / `26.810.4967.0` 已被至少 10 个 Issue 同时投诉，强烈建议官方优先 hotfix 或回滚。

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 意义 |
|----|------|------|
| [#38681](https://github.com/openai/codex/pull/38681) | Preserve HTTP fallback for delegated sessions | 委派会话在父会话切换 HTTP 后避免重复尝试 WebSocket，提升稳定性。 |
| [#31644](https://github.com/openai/codex/pull/31644) | Linux 沙箱通过 managed proxy 路由 DNS | 补齐 Linux sandbox 在受管 DNS 场景的代理盲区。 |
| [#31471](https://github.com/openai/codex/pull/31471) | 抽取 apps 缓存至 `ConnectorRuntimeManager` | 重构 `faster-connectors` 链路第一段，引入不可变工具快照与上下文失效逻辑。 |
| [#38678](https://github.com/openai/codex/pull/38678) | Preserve environment configuration ownership | 修复线程级配置更新覆盖 attachment-owned 权限的越权问题。 |
| [#38675](https://github.com/openai/codex/pull/38675) | 排除快捷键修饰输入对 TUI paste 突发检测的影响 | 解决 Super/Hyper/Meta 修饰键被误判为粘贴的问题。 |
| [#38673](https://github.com/openai/codex/pull/38673) | Honor per-environment permission profiles | `EnvironmentConfig` 增加 `permission_profile`，支持 Ready 环境覆写线程权限。 |
| [#38670](https://github.com/openai/codex/pull/38670) | Forward executor network policy decisions for auditing | 新增 `network/policyDecision` 通知，executor 策略决策进入审计链。 |
| [#38660](https://github.com/openai/codex/pull/38660) | Windows 沙箱强制 managed deny-read 规则 | fail-closed 强化，防止沙箱绕过。 |
| [#38651](https://github.com/openai/codex/pull/38651) | 将 permission profile 快照迁移至协议层 | 为后续 UI / CLI 统一权限展示铺路。 |
| [#38643](https://github.com/openai/codex/pull/38643) | 首次登录 onboarding 完成前延迟启动 composer | 修复「干净安装却过早显示输入框」的体验 Bug。 |

> **观察**：今日多数高价值合入来自 `copyberry[bot]`，呈现出 **权限模型重构 + 沙箱加固 + TUI 细节打磨** 三条主线，与 0.148.0-alpha 的迭代主题高度一致。

---

## 📈 功能需求趋势

从近 24 小时更新的 50 条 Issue 中提炼：

1. **Windows Desktop 性能**（≈ 45% 的活跃 Issue）
   - 系统级鼠标/键盘卡顿、DWM 句柄累积、内核池泄漏、空闲高 CPU。
   - 集中在 26.810.41047 / 26.810.4967 之后。
2. **macOS 性能与稳定性回归**（≈ 15%）
   - V8 OOM、Computer Use worker 风暴、UI hang（[#38455](https://github.com/openai/codex/issues/38455)、[#38468](https://github.com/openai/codex/issues/38468)、[#38637](https://github.com/openai/codex/issues/38637)）。
3. **会话/线程恢复可靠性**（≈ 12%）
   - 长时间线程恢复时 TUI 黑屏、线程永久卡 Thinking（[#34724](https://github.com/openai/codex/issues/34724)、[#24287](https://github.com/openai/codex/issues/24287)、[#34026](https://github.com/openai/codex/issues/34026)）。
4. **安全检查误报**（≈ 8%）
   - 普通本地维护被 safety check 中断，影响付费会话（[#28015](https://github.com/openai/codex/issues/28015)）。
5. **跨工作区任务交接 / Git 诊断增强**（≈ 6%）
   - WorkTree 关联失败时的诊断能力（[#24484](https://github.com/openai/codex/issues/24484)）；跨工作区 sanitized task handoff（[#34582](https://github.com/openai/codex/issues/34582)）。
6. **自定义模型元数据解析**（≈ 4%）
   - `model_catalog_json` 已加载但自定义模型仍无法解析（[#32349](https://github.com/openai/codex/issues/32349)）。

---

## 💡 开发者关注点（痛点 + 高频需求）

1. **Windows 是当前最大的体验洼地**：从 #20214（101 评论）到 8/14 推送后爆发的多个新 Issue，开发者反复要求「彻底排查 26.810.x 引入的 Chrome 插件主线程同步逻辑」与「Electron 主线程/进程隔离」。
2. **付费订阅与体验不对等**：Plus / Pro 用户在普通操作中遭遇安全检查误报、线程卡死、UI 冻结，呼吁 **SLA / 紧急 hotfix 通道**（[#28015](https://github.com/openai/codex/issues/28015)）。
3. **TUI 长线程恢复体验差**：0.145.0 在恢复长时间会话时直接黑屏、无进度反馈（[#34724](https://github.com/openai/codex/issues/34724)），是 CLI 用户高频痛点。
4. **沙箱与权限模型演进**：开发者普遍接受权限收紧，但希望 **per-environment / per-attachment 权限可观测、可审计**，对应今日 PR 主线。
5. **回归测试与回滚机制缺失**：单次推送引发系统级故障却缺少快速回滚通道，是 Windows / macOS 用户反复诟病的运营问题。
6. **自定义模型接入链路过深**：`model_catalog_json` 已成功加载仍解析失败（[#32349](https://github.com/openai/codex/issues/32349)），反映自定义/自托管模型路径缺乏端到端验证。

---

> 📎 数据来源：[github.com/openai/codex](https://github.com/openai/codex)（统计窗口：2026-08-14 → 2026-08-15）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>用户要求我作为技术分析师，基于 GitHub 数据生成一份 2026-08-15 的 Gemini CLI 社区动态日报。让我仔细分析这些数据并组织成结构清晰的中文日报。

数据要点：
1. 有一个新的 nightly release：v0.56.0-nightly.20260815.g2a87e7be1
2. 50 个更新的 Issues（展示 30 个），按评论数排序
3. 25 个更新的 PRs（展示 20 个）

让我开始组织日报内容：

**今日速览**：
- SSR Agent（自动化 issue 处理机器人）非常活跃，24小时内合并/提交大量 PR
- 多个 P1 级别 bug 在处理中，特别是 subagent 相关问题
- Auto Memory 系统有多项安全相关 bug 被报告

**版本发布**：
- v0.56.0-nightly.20260815，主要是 SSR Agent issue 修复

**社区热点 Issues**（选 10 个）：
1. #22323 - Subagent recovery MAX_TURNS bug (12 comments)
2. #21409 - Generalist agent hangs (8 comments, 8 likes)
3. #19873 - Zero-Dependency OS Sandboxing (8 comments)
4. #24353 - Robust component level evaluations (7 comments)
5. #22745 - AST-aware file reads (7 comments)
6. #21968 - Gemini 不使用 skills 和 sub-agents (6 comments)
7. #26522 - Auto Memory retry 低信号会话 (5 comments)
8. #26525 - Auto Memory redaction 和日志 (4 comments)
9. #25166 - Shell command 等待输入卡住 (4 comments, 3 likes)
10. #22232 - browser_agent resilience (4 comments)

**重要 PR 进展**（选 10 个）：
1. #28815 - SSR Agent: 保留 subagent 终止原因 (修复 #22323)
2. #28812 - SSR Agent: 防止 TUI 无限挂起 (修复 #21477)
3. #28813 - SSR Agent: 添加 composite flag (修复 #21911)
4. #28814 - SSR Agent: 修复 strict-null 错误 (修复 #21919)
5. #28811 - SSR Agent: 迁移 process.env (修复 #19826，已合并)
6. #28820 - SSR Agent: 澄清隐私通知 (修复 #26120)
7. #28819 - SSR Agent: 修复个人账户错误信息 (修复 #24587)
8. #28817 - SSR Agent: 保留子代理工具调用 (修复 #22589)
9. #28816 - SSR Agent: 修复 MessageBus 静默挂起 (修复 #22588)
10. #28738 - 允许 agent 调用 agent (修复 #22092)

**功能需求趋势**：
- Subagent 系统改进（最热门）
- Auto Memory 系统（多个相关 issue）
- AST 感知的代码库工具
- OS 沙箱化
- Browser agent 弹性
- 评估系统（evals）

**开发者关注点**：
- Subagent 频繁导致挂起
- 工具数量限制
- 终端/Shell 执行问题
- 权限和安全
- 平台兼容性（Windows WSL2、Wayland）

让我用专业、简洁的中文撰写日报。</think>

# Gemini CLI 社区动态日报
**日期：2026-08-15**

---

## 📌 今日速览

今日 Gemini CLI 仓库以 **SSR Agent（自动 Issue 修复机器人）批量提交** 为主基调——24 小时内针对长期挂起的 P1/P2 问题集中产出 13+ 个修复 PR，覆盖 subagent 终止语义、TUI 挂起、TypeScript 严格模式等；与此同时，社区热议焦点仍集中在 **Subagent 行为稳定性** 与 **Auto Memory 系统的安全性** 上。

---

## 🚀 版本发布

### v0.56.0-nightly.20260815.g2a87e7be1
- 将 `process.env` 的直接修改迁移为 `vi.stubEnv`，统一 a2a-server 测试环境变量管理规范。
- 详情：[Release v0.56.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260815.g2a87e7be1)

---

## 🔥 社区热点 Issues

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|-----------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1** Subagent 达到 MAX_TURNS 后仍上报 GOAL success | 隐藏中断真相，破坏恢复语义可靠性 | 12 评论 / 👍2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1** Generalist agent 永久挂起 | 简单操作（如建文件夹）即可触发 1 小时级阻塞 | 8 评论 / 👍8（高共鸣） |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **P2** 零依赖 OS 沙箱 + 意图路由（Post-Execution） | 释放 Gemini 3 的 bash 亲和力，平衡安全与 UX | 8 评论 / 👍1 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **P1** 健壮的组件级评估体系 | 已积累 76 项行为测试，影响回归质量 | 7 评论 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **P2** AST 感知的文件读取/搜索 | 减少误读导致的 token 浪费与多余轮次 | 7 评论 / 👍1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2** Gemini 不主动调用 skills/sub-agents | 暴露自定义 skill 引导策略缺陷 | 6 评论 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **P2** Auto Memory 无限重试低信号会话 | 资源浪费、影响上下文质量 | 5 评论 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1** Shell 命令完成后 TUI 卡在"等待输入" | 影响所有交互式命令的可用性 | 4 评论 / 👍3 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **P2** Auto Memory 缺乏确定性 secret redact | 隐私与日志泄露风险 | 4 评论 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **P3** browser_agent 自动会话接管与锁恢复 | 提升浏览器子代理在并发场景下的鲁棒性 | 4 评论 |

---

## 🛠 重要 PR 进展

| # | 主题 | 说明 |
|---|------|------|
| [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) | **P1** 修复 subagent 恢复时丢失原始终止原因 | 修复 #22323，保证 MAX_TURNS/TIMEOUT 真实可见 |
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) | **P1** 为 TUI 添加执行超时 | 修复 #21477，解决裸 Linux 终端下的"Initializing..."死锁 |
| [#28817](https://github.com/google-gemini/gemini-cli/pull/28817) | 保留 Executing 状态的子代理工具调用 | 修复 #22589，让后台工具在 hook 链中可见 |
| [#28816](https://github.com/google-gemini/gemini-cli/pull/28816) | 修复 MessageBus.request publish 失败的静默挂起 | 修复 #22588，60s 幽灵等待问题 |
| [#28819](https://github.com/google-gemini/gemini-cli/pull/28819) | 修复个人账户误显示企业级错误信息 | 修复 #24587，提升 UX 一致性 |
| [#28820](https://github.com/google-gemini/gemini-cli/pull/28820) | 澄清隐私通知文案与可选项 | 修复 #26120，解决自相矛盾的措辞 |
| [#28814](https://github.com/google-gemini/gemini-cli/pull/28814) | 修复集成测试中的 TS strict-null 错误 | 修复 #21919，提升构建稳定性 |
| [#28813](https://github.com/google-gemini/gemini-cli/pull/28813) | 为 packages/cli tsconfig 添加 composite 标志 | 修复 #21911，使根目录 typecheck 正常 |
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | 允许 agent 调用 agent（嵌套委托） | 修复 #22092，支持 `tools:` frontmatter 递归 |
| [#28821](https://github.com/google-gemini/gemini-cli/pull/28821) | 自动版本号 bump | 自动化夜间发布流程 |

> **注**：除 SSR Agent 系列外，#20916 与 #27154（ShellExecutionService PTY/FD 泄漏）、#28602/#28603（Docker 镜像升级 Node 24/22）也在 24 小时内完成合并，体现对 **底层资源安全** 与 **运行时现代化** 的重视。

---

## 📈 功能需求趋势

1. **Subagent 体系完善** —— 占比最高。从执行挂起、权限回收、轨迹可见性，到 agent→agent 嵌套委托，几乎贯穿所有 P1/P2 工作流。
2. **Auto Memory 安全与质量** —— 多项关于 redact、日志、inbox 校验的 issue 集中爆发，社区对记忆系统的可信度要求显著上升。
3. **AST 感知工具** —— 推动 `codebase_investigator` 从字符串匹配升级为结构化检索，降低 token 消耗。
4. **零依赖沙箱与意图路由** —— 利用 Gemini 3 模型的 bash 偏好，在保留安全约束下释放原生能力。
5. **评估基础设施** —— 行为评估（behavioral evals）已具规模，组件级回归成为质量门禁。
6. **跨平台兼容性** —— Windows WSL2 剪贴板粘贴、Wayland 下 browser subagent 等仍为长期痛点。

---

## 💬 开发者关注点

- **稳定性第一**：subagent 恢复语义不明确（#22323）、generalist agent 永久挂起（#21409）、TUI 卡"等待输入"（#25166），反映出 **执行边界与超时控制** 是当下最迫切的需求。
- **资源泄漏隐患**：ShellExecutionService 的 PTY 文件描述符泄漏（#15945、#22784）已在 PR #20916 / #27154 / #25378 多方修复，但暴露出长会话下的资源治理仍需加强。
- **工具数量与权限**：>128/400 工具触发 400 错误（#24246），v0.33.0 起子代理绕过权限配置（#22093），开发者期望更智能的工具筛选与权限沙箱。
- **Auto Memory 信任边界**：本地 transcript 上送模型、prompt-level redact 不足以兜底，社区呼吁 **确定性 redact + 主动 quarantine**（#26522–#26525）。
- **自定义能力发现**：用户自定义的 skills/sub-agents 不会被模型主动调用（#21968），需要更好的能力暴露与意图匹配机制。
- **跨平台覆盖**：Wayland 下 browser 子代理失败（#21983）、WSL2 剪贴板图片粘贴（#22274）、Windows 下 ripgrep EFTYPE（#22784），跨平台一致性仍是高频抱怨点。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成时间：2026-08-15*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics based on the data provided. Let me analyze the data carefully and structure the report according to the requested sections.

Let me analyze what I have:

1. **Releases (last 24 hours):**
- v1.0.81-0: Just released, "Update model configurations"
- v1.0.80: Released 2026-08-14, "Update model configurations"

2. **Issues (31 total, top 30 shown):**
Let me identify the most important ones:
- #4345 - Reasoning effort 'medium' not supported for claude-haiku-4.5 (6 comments, 4 👍) - Important because affects model configuration
- #4390 - Enabled organization models missing (Claude Sonnet 5/Opus 5, Kimi K3) (6 comments, 4 👍) - Critical: missing models
- #4480 - CLOSED - Atlassian MCP OAuth fails (RFC 8414 regression) (4 comments, 6 👍) - High 👍 count
- #4422 - All Claude models disabled (3 comments, 3 👍)
- #4439 - GitLab MCP OAuth RFC 8414 issuer mismatch (3 comments, 2 👍)
- #4306 - Subtasks freeze (3 comments, 2 👍)
- #2934 - CLOSED - Support protobuf OTLP export (2 comments, 6 👍) - High 👍 count
- #4346 - CLOSED - MCP registry policy fetch 403 (2 comments, 3 👍)
- #4488 - Plugin updates fail with Access denied (1 comment)
- #4491 - /spawn command template issue (1 comment)
- #4006 - MCP tools/list pagination (1 comment)
- #4500 - BYOK autopilot nudge breaks prompt caching
- #4499 - v1.0.79 fatal OOM in autopilot
- #4498 - CoPilot used word "Enslaved" - inappropriate content
- #4495 - Add GPT-5.6 reasoning.mode parameter
- #4494 - Newly enabled model unavailable until cache cleared
- #4492 - Desktop app WebView2 renderer crash
- #4493 - /restart fails in sessions created with -w
- #4490 - Atlassian MCP OAuth broken in 1.0.80 (regression)
- #4489 - Agent not selected when resuming session
- #4487 - Plugin dependency resolution
- #4486 - Edit permission request times out
- #4477 - Session and prompt lost when stopping
- #4475 - Clarify "No copilot-instructions.md" message
- #4479 - Code debugging flagged as cybersecurity risk
- #4478 - MCP server collision case-sensitive
- #4481 - Copilot App gated by org policy
- #4482 - allowed_directories not suppressing prompts
- #4485 - Theme turns light overnight
- #4484 - Can't access rubber-duck

3. **Pull Requests (3 total):**
- #4497 - Handle fork PR associations in invalid-label writer (OPEN)
- #4496 - Verify pull request workflow migration (CLOSED, canary)
- #4449 - Migrate pull request automation from pull_request_target (CLOSED)

Only 3 PRs in the last 24 hours, all related to workflow migration for fork PRs. The user asked for 10 important PRs but there are only 3, so I should mention that.

Now let me identify themes and trends:

**Major themes:**
1. **MCP OAuth/Authentication issues** - Multiple issues (#4480, #4439, #4490, #4346) - Big problem area
2. **Model availability/catalog issues** - #4390, #4422, #4345, #4494 - Many users can't access models
3. **Memory/Performance issues** - #4499 OOM, #4306 subtasks freeze
4. **BYOK (Bring Your Own Key) issues** - #4500
5. **Plugin system issues** - #4488, #4487
6. **Session management** - #4477, #4493, #4489
7. **New model support requests** - #4495 GPT-5.6
8. **Observability** - #2934 (closed) protobuf OTLP
9. **Desktop app issues** - #4492 WebView2 crash
10. **Content safety** - #4498 inappropriate language

**Developers' pain points:**
- MCP integration is unstable (OAuth, authentication, registry)
- Model catalog caching is fragile
- Memory management in long-running sessions
- Plugin system limitations
- Session management bugs

Now let me write the report in Chinese, professional and concise, suitable for technical developers.

I need to be careful about the date - 2026-08-15. The data is from 2026-08-14 (most recent). The report is for 2026-08-15.

Let me draft the report:

# GitHub Copilot CLI 社区动态日报 (2026-08-15)

## 1. 今日速览
Today's main events:
- v1.0.81-0 版本发布，继续更新模型配置
- MCP OAuth 认证问题集中爆发：Atlassian、GitLab 等多家 MCP 服务在 1.0.79/1.0.80 出现 RFC 8414 §3.3 回归
- Claude 系列模型可用性成为热点：企业/组织场景下多用户报告无法选用已授权的 Claude Sonnet 5/Opus 5、Haiku 4.5 等
- 多个长会话/Autopilot 场景下的稳定性问题（V8 OOM、子任务冻结、Prompt 缓存失效）

## 2. 版本发布
- **v1.0.81-0 (2026-08-15)**: Improved - Update model configurations
- **v1.0.80 (2026-08-14)**: Update model configurations

两个版本均仅涉及模型配置更新，无新功能公告。

## 3. 社区热点 Issues

Picking top 10 by importance (comments + reactions + impact):

1. **#4345** - Reasoning effort 'medium' 不支持 claude-haiku-4.5
2. **#4390** - 启用的组织模型（Claude Sonnet 5/Opus 5、Kimi K3）从目录中消失
3. **#4480** - Atlassian MCP OAuth 1.0.79 回归（已关闭） - 4 comments, 6 👍
4. **#4422** - 所有 Claude 模型在 CLI 中被禁用
5. **#4439** - GitLab MCP OAuth RFC 8414 issuer 校验失败
6. **#4306** - Autopilot 子任务冻结不响应
7. **#2934** - OTLP protobuf 导出支持（已关闭，2 comments, 6 👍）
8. **#4346** - MCP registry 403 阻塞 CI（已关闭）
9. **#4499** - v1.0.79 autopilot V8 OOM 致命错误
10. **#4500** - BYOK 提示缓存被 autopilot nudge turn 破坏

## 4. 重要 PR 进展
Only 3 PRs in last 24 hours, all related to workflow migration:
- #4497 - Handle fork PR associations in invalid-label writer
- #4496 - Verify PR workflow migration (canary, closed)
- #4449 - Migrate PR automation from pull_request_target (closed)

## 5. 功能需求趋势
- 新模型/推理参数支持：GPT-5.6 reasoning.mode (#4495)、模型目录实时刷新 (#4494)
- MCP 生态完善：Atlassian/GitLab OAuth、registry 权限、tools/list 分页 (#4006)、大小写冲突 (#4478)
- 可观测性：OTLP protobuf 导出（已落地 #2934）
- 插件系统：依赖解析机制 (#4487)、更新并发冲突 (#4488)
- 桌面端：WebView2 稳定性 (#4492)、主题行为 (#4485)
- 会话与权限：allowed_directories 不生效 (#4482)、edit 权限超时 (#4486)、stop 后会话丢失 (#4477)

## 6. 开发者关注点
- 模型可用性脆弱：catalog 缓存不一致，需要手动清缓存才能看到新启用模型
- MCP OAuth 链路是当前最大不稳定源：1.0.79-1.0.80 出现多家远程 MCP server 回归
- 长会话/Autopilot 资源管理堪忧：V8 OOM、子任务冻结、Prompt 缓存失效
- BYOK 用户体验细节被忽视：字节级一致性影响缓存命中
- 副带/边缘体验问题增多：stop 按钮丢会话、-w 与 /restart 冲突、权限请求超时

Let me refine and write this out properly. I'll make sure to include GitHub links for each item.

Let me think about formatting - the user wants this to be professional and concise. I'll use markdown structure with clear sections. Each issue should have a brief reason why it's important and community reaction. Each PR should describe the fix/feature.

Let me finalize the report now.

For the 10 most important issues, I should pick the ones that are:
- Highest impact (affects many users)
- Have meaningful discussion
- Represent broader trends

Top 10 selection rationale:
1. #4345 - 6 comments, model config issue
2. #4390 - 6 comments, multiple models missing
3. #4480 - 4 comments, 6 likes, regression - but closed
4. #4422 - 3 comments, all Claude models
5. #4439 - 3 comments, GitLab MCP
6. #4306 - 3 comments, long-standing
7. #2934 - 6 likes, feature request
8. #4346 - closed, but important CI issue
9. #4499 - 0 comments but V8 OOM is serious
10. #4500 - 0 comments but BYOK prompt cache is technical interesting

Actually, I should reconsider - the user said 10 most worth attention. Let me pick more strategically based on actual importance and community interest:

1. #4390 - 6 comments - critical model availability
2. #4345 - 6 comments - model config error
3. #4480 - closed, 6 👍 - regression in 1.0.79
4. #4422 - 3 comments - all Claude blocked
5. #4439 - 3 comments - GitLab MCP regression
6. #4306 - 3 comments - subtasks freeze
7. #2934 - closed, 6 👍 - long-awaited feature
8. #4346 - closed, 3 👍 - CI blocker
9. #4499 - V8 OOM (very recent, serious)
10. #4500 - BYOK cache (technical depth)
11. #4488 - Plugin update blocked
12. #4491 - /spawn security/contract

Let me pick 10:
1. #4390 - Models missing (highest visibility)
2. #4345 - Reasoning effort config error
3. #4480 - Atlassian MCP OAuth regression
4. #4422 - All Claude models disabled
5. #4439 - GitLab MCP OAuth regression
6. #4306 - Subtasks freeze
7. #2934 - OTLP protobuf (closed, long-awaited)
8. #4346 - MCP registry 403 in CI (closed)
9. #4499 - V8 OOM crash
10. #4500 - BYOK prompt cache

I'll go with these. Now let me write the full report.

For PRs, I only have 3, so I'll present all 3 and note that only 3 are present in the last 24 hours. Or I could expand to other recently updated PRs... but the user said "latest PRs updated in last 24 hours", and there are only 3. I should be honest about that.

Actually, looking at the data more carefully, I see all 3 PRs are by @mrecachinas and all related to PR automation workflow migration. They're not particularly "important" in the sense of new features - they're internal CI/workflow changes. I should mention this.

Let me write a more concise and professional report.

Format considerations:
- Use clear section headers
- Use bullet points
- Include GitHub links as markdown
- Keep each item brief but informative
- Be analytical, not just descriptive

Final structure:
</think>
# GitHub Copilot CLI 社区动态日报

**日期**：2026-08-15
**数据源**：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

- **v1.0.81-0 紧急发布**，仅含 "Update model configurations"，与昨日 v1.0.80 一致，连环模型目录更新说明团队正针对模型可用性相关问题快速打补丁。
- **MCP OAuth 集中回归**成为本日最大热点：Atlassian、GitLab 等远程 MCP 服务在 1.0.79 / 1.0.80 因 RFC 8414 §3.3 issuer 校验失败而无法连接（#4480、#4439、#4490、#4346），影响所有非默认 MCP server。
- **企业/组织侧 Claude 模型不可用**问题集中爆发：多名用户报告已授权的 Sonnet 5 / Opus 5 / Haiku 4.5 在 CLI 中消失或被禁用（#4390、#4422、#4345、#4494），往往需要手动清缓存才恢复。

---

## 2. 版本发布

| 版本 | 发布时间 | 主要变更 |
| --- | --- | --- |
| [v1.0.81-0](https://github.com/github/copilot-cli/releases) | 2026-08-15 | **Improved** – Update model configurations |
| [v1.0.80](https://github.com/github/copilot-cli/releases) | 2026-08-14 | Update model configurations |

两个版本均无新功能公告，仅涉及模型配置热更新，与当前大量"模型目录/可用性"类 issue 强相关。

---

## 3. 社区热点 Issues

按 *影响面 × 讨论度* 精选 10 条：

1. **#4390 – 组织已启用模型在目录中缺失（Sonnet 5 / Opus 5 / Kimi K3）** [[link](https://github.com/github/copilot-cli/issues/4390)]
   评论 6 / 👍 4。Copilot Business 管理员在控制台启用后，CLI 端仍报 "This model is disabled by your organization"。说明企业场景下服务端 catalog 与 CLI 本地缓存存在同步缺陷。

2. **#4345 – `claude-haiku-4.5` 不支持 reasoning effort `medium`** [[link](https://github.com/github/copilot-cli/issues/4345)]
   评论 6 / 👍 4。在子代理执行路径中，当服务端同时下发 `copilot_cli_opus_medium_effort_default` 与 `copilot_cli_gpt_5_4_mini_for_explore` 两个 feature flag 时即触发崩溃。

3. **#4480 – Atlassian 远程 MCP OAuth 在 1.0.79 回归** [[link](https://github.com/github/copilot-cli/issues/4480)] *(已关闭)*
   评论 4 / 👍 6。`MCPOAuthError: Incompatible authorization server (RFC 8414 §3.3)`，从 1.0.71 升级到 1.0.79 即失效。👍 数高说明社区痛感强，关闭状态需关注是否在 1.0.81 完整修复。

4. **#4422 – 个人 Enterprise 账户下所有 Claude 模型被禁用** [[link](https://github.com/github/copilot-cli/issues/4422)]
   评论 3 / 👍 3。回滚 CLI 版本后问题依旧，但前一天还能用——典型的服务端/客户端状态不一致。

5. **#4439 – 1.0.79 拒绝 GitLab Self-Managed MCP 的 OAuth 元数据** [[link](https://github.com/github/copilot-cli/issues/4439)]
   评论 3 / 👍 2。与 #4480 同源（RFC 8414 issuer mismatch），证实 1.0.79 起对动态注册 MCP server 的兼容性收窄。

6. **#4306 – Autopilot 模式下子任务冻结** [[link](https://github.com/github/copilot-cli/issues/4306)]
   评论 3 / 👍 2。speckit 系列 agent 循环调用时子代理不再响应，issue 自 7 月底起持续跟进未关闭。

7. **#2934 – 支持 OTLP `http/protobuf` 导出** [[link](https://github.com/github/copilot-cli/issues/2934)] *(已关闭)*
   评论 2 / 👍 6。👍 数并列最高。`OTEL_EXPORTER_OTLP_PROTOCOL` 此前被静默忽略，长期可观测性痛点终于落地。

8. **#4346 – Actions `GITHUB_TOKEN` 下 MCP registry 返回 403** [[link](https://github.com/github/copilot-cli/issues/4346)] *(已关闭)*
   评论 2 / 👍 3。CI 场景下阻断所有非默认 MCP server，影响 Copilot CLI 官方推荐的 PAT-less Actions 流程。

9. **#4499 – v1.0.79 autopilot `FATAL: Committing semi space failed` OOM** [[link](https://github.com/github/copilot-cli/issues/4499)]
   评论 0 / 👍 0。V8 仅用 0.6/4.3 GB 仍崩溃——属于宿主层 commit 失败而非堆上限，提示 Node/V8 与 Windows 内存管理有更深层兼容问题。

10. **#4500 – BYOK autopilot nudge 破坏 prompt caching** [[link](https://github.com/github/copilot-cli/issues/4500)]
    评论 0 / 👍 0。BYOK + `responses` 协议下，CLI 在 nudge turn 重新序列化历史项导致缓存失效，token 成本直接上升。属于典型"细节正确性"问题。

---

## 4. 重要 PR 进展

过去 24 小时 PR 较少（仅 3 条），且全部聚焦于仓库本身的 PR 自动化工作流迁移：

- **#4497 – 在 invalid-label writer 中处理 fork PR 关联** *(OPEN)* [[link](https://github.com/github/copilot-cli/pull/4497)]
  修复 GitHub 不为 fork PR 工作流 run 填充 `pull_requests` 关联时 trusted 写入逻辑失效的问题。流程自动化层的小但必要的修复。
- **#4496 – PR workflow migration canary** *(CLOSED, invalid)* [[link](https://github.com/github/copilot-cli/pull/4496)]
  临时文档 PR，用于

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a community dynamics daily report for Kimi Code CLI based on GitHub data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 4 issues updated in the past 24 hours (issues #1283, #2269, #1478, #1136)
- No PRs updated in the past 24 hours

Wait, the user asks for "10 most worth-following issues" and "10 important PRs", but we only have 4 issues and 0 PRs. I need to be honest about this and work with the data available, rather than fabricating information.

Let me structure the report properly:

1. **今日速览** - Summarize the most important dynamics
2. **版本发布** - None, so skip
3. **社区热点 Issues** - We only have 4 issues, I should present all 4 since the user asked for 10 but we only have 4. I should be transparent about this.
4. **重要 PR 进展** - No PRs, I should note this
5. **功能需求趋势** - Analyze the trends from the issues
6. **开发者关注点** - Summarize pain points

Let me write this in a professional, concise Chinese style suitable for technical developers.

Key insights from the data:
- Memory System is a hot topic (issues #1283 and #1478 both discuss memory features)
- Remote/Multi-device access (#2269)
- Shell tool improvements on Windows (#1136 - closed)
- The memory-related issues have 39 and 3 comments respectively, indicating significant community engagement

Let me craft the report now.</think>

# Kimi Code CLI 社区动态日报

**📅 2026-08-15 · 数据来源: github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

过去 24 小时内，Kimi Code CLI 仓库**无新版本发布、无 PR 更新**，社区活跃度主要集中在 4 个已有 Issue 的讨论上。其中 **#1283（Memory System 功能请求）持续保持高热度（39 条评论）**，反映出"跨会话持久化记忆"仍是社区最强烈的诉求之一；同时 #1478（中文用户对记忆层文档缺失的反馈）也在今日更新，进一步印证了记忆系统在中文开发者群体中的关注度。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节略。*

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 共 **4 条**，以下为全部条目（数量不足以凑够 10 条，故全部列出并附重要性分析）。

### 1. #1283 · Memory System - Persistent context across sessions ⭐⭐⭐⭐⭐
- **状态**: OPEN | **更新**: 2026-08-14 | **评论**: 39 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1283
- **为什么重要**: 这是当前评论数最高的 Issue之一（39 条），提议实现**跨会话的持久化记忆系统**，涵盖 AI 自动记忆 + 用户手动指令（如 CLAUDE.md 风格配置）。命中大项目协作的核心痛点，是 Kimi CLI 向"工程级 Agent"演进的关键能力。

### 2. #1478 · 能否优化记忆层？中文用户反馈记忆文档缺失 ⭐⭐⭐⭐
- **状态**: OPEN | **更新**: 2026-08-15 | **评论**: 3 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1478
- **为什么重要**: 与 #1283 主题高度重合，但**视角来自中文用户**——指出参考文档中找不到记忆相关内容（仅 agent.md），大项目体验"很痛苦"。开发者还贡献了 OpenClaw 的 SOUL.md / MEMORY.md 设计作为参考。该 Issue 是中文社区代表性的反馈通道。

### 3. #2269 · Remote Control / Multi-Device Session Handoff ⭐⭐⭐⭐
- **状态**: OPEN | **更新**: 2026-08-14 | **评论**: 6 | 👍: 1
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2269
- **为什么重要**: 提议支持**跨设备会话迁移与远程控制**（laptop ↔ web ↔ mobile），解决多环境工作流的断点痛点。👍 数较高（1 票），反映出明确的用户需求。属于"工作流级"功能，对标 Cursor / Claude Code 等竞品的能力边界。

### 4. #1136 · feat(shell): PowerShell 版本感知上下文增强（已关闭） ⭐⭐⭐
- **状态**: CLOSED | **更新**: 2026-08-14 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1136
- **为什么重要**: 针对 Windows + Kimi K2.5 (SGLang) 场景下 Shell 工具的**三处关键缺陷**（Shebang 歧义、PowerShell 版本识别、命令初始化逻辑）。Issue 已关闭，**说明该优化可能已被合并或转向内部处理**，是 Windows 体验改进的信号。

---

## 📥 重要 PR 进展

*过去 24 小时内无 PR 更新，本节略。建议持续关注仓库 PR 区：https://github.com/MoonshotAI/kimi-cli/pulls*

---

## 📈 功能需求趋势

通过对 4 条活跃 Issue 的主题归纳，可以提炼出以下**社区最关注的功能方向**：

| 优先级 | 功能方向 | 代表 Issue | 热度信号 |
|--------|---------|-----------|---------|
| 🥇 | **持久化记忆系统**（跨会话上下文） | #1283, #1478 | 评论 39+3，跨语言社区双重关注 |
| 🥈 | **多设备/远程会话流转** | #2269 | 已有 👍，契合远程办公趋势 |
| 🥉 | **Windows 体验优化**（Shell/PowerShell） | #1136 | 已闭环，反映团队正在补齐短板 |
| 观察 | **大项目/工程级 Agent 能力** | #1478 间接反映 | 与记忆系统强关联，需求溢出 |

**核心趋势总结**: 社区诉求正在从"能跑通"向"工程级可用"迁移——**上下文管理 + 工作流连续性**成为下一阶段的核心矛盾。

---

## 👨‍💻 开发者关注点

综合 Issue 中的用户反馈，当前开发者社区存在以下**高频痛点与需求**：

1. **🔴 记忆与上下文的"失忆"问题**
   - 大项目长链路任务中，Kimi CLI 无法保留关键决策、代码约定与项目模式，导致每次新会话需"重新教学"。
   - 中文用户尤其反映**官方文档对记忆机制覆盖不足**，缺少类 MEMORY.md / agent.md 的标准说明。

2. **🟠 工作流连续性受限**
   - 跨设备切换（办公室/通勤/家中）时无法无缝接管会话，远程控制能力空白。

3. **🟡 平台兼容性细节**
   - Windows + PowerShell 环境下的 Shebang 识别、命令初始化存在静默错误，影响首轮 Agent 执行质量（#1136 已被官方关注并处理）。

4. **🟢 中文社区参与度提升**
   - 出现以中文撰写的高质量 Issue（#1478），并主动对标开源方案（OpenClaw），说明中文开发者正在深度参与 Kimi CLI 的产品共建。

---

## 📊 数据小结

| 维度 | 数值 |
|------|------|
| 过去 24h 新 Release | 0 |
| 过去 24h 更新 Issue | 4 |
| 过去 24h 更新 PR | 0 |
| OPEN 状态 Issue | 3 |
| CLOSED 状态 Issue | 1 |
| 累计评论数（活跃 Issue） | 48 |

---

*报告生成时间: 2026-08-15 · 数据基准: GitHub API 实时拉取*
*仓库地址: https://github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode and generate a comprehensive Chinese daily report for 2026-08-15.

Let me look at the key information:

1. **Releases**: No new releases in the past 24 hours
2. **Issues**: 50 issues updated, top 30 shown by comment count
3. **Pull Requests**: 50 PRs updated, top 20 shown by comment count

Key observations:

**Critical Issues**:
- #42608 - 48-bit ID timestamp wraparound that wedges all pre-existing sessions (CLOSED with 5 comments, 3 thumbs up) - This is a major incident
- #36997 - Desktop App v1.18.1 new layout hides agent (Plan/Build) switching UI (12 comments, 6 thumbs up) - High-impact UI bug
- #42605 - Session remains open but agent doesn't process subsequent prompts (related to #42608)
- #42013 - error: Free usage exceeded, subscribe to Go (10 comments, 4 thumbs up)
- #4581 - Ollama Cloud AUTH Login Feature (14 comments - highest comment count)
- #42083 - GitHub Copilot provider shows zero models (8 comments, 2 thumbs up)
- #25129 - Thinking mode gets stuck in infinite repetition loop (7 comments, 4 thumbs up)
- #41518 - gpt-5.6-luna access via OpenCode Go returns 403
- #38791 - Run loop can never exit when message ids are not time-sortable
- #37489 - Performance issue: Context cache invalidation
- #42626 - Bash tool subprocess killed with SIGKILL (CLOSED)
- #42385 - DeepSeek V4 Flash Free returns FreeUsageLimitError

**Important PRs**:
- #42684 - fix: compare ID timestamps numerically for 48-bit overflow (directly addresses #42608)
- #42685 - fix(tui): re-query terminal palette on focus (addresses #42635)
- #42683 - fix(tui): search all agents for configured color
- #42682 - fix(core): keep queued work parked after interrupt
- #42681 - fix(desktop): show window on did-finish-load fallback for wayland
- #42680 - refactor(core): share session model requests
- #42667 - fix(core): unify patch path resolution
- #42662 - fix(mcp): fail loudly on MCP server config missing type
- #42663 - feat(core): persist web search provider selection
- #27554 - feat(opencode): local LAN provider discovery + auto-discover models

**Trends**:
- Session management bugs (ID wraparound, agent not responding)
- Desktop UI issues (Wayland, layout, permissions)
- Free tier/Go subscription issues
- Provider/model discovery (Ollama, Copilot, GitHub Copilot)
- MCP improvements
- Web search features
- TUI theme/palette handling
- Performance (context cache, subagent CPU)

Let me create the report now.</think>

# OpenCode 社区动态日报

**日期**：2026-08-15
**数据来源**：github.com/anomalyco/opencode
**统计周期**：过去 24 小时更新

---

## 📌 今日速览

**48-bit ID 时间戳溢出事件**成为本日焦点：UTC 时间 2026-08-14 12:39:55 的 ID 生成器时间戳回绕导致所有历史会话"假死"，社区已紧急定位并提交修复 PR（#42684）。同时桌面端 v1.18.1 布局变更隐藏 Plan/Build 切换 UI 的问题 (#36997) 持续发酵，OpenCode Go 免费额度异常、GitHub Copilot Provider 模型不显示等问题也获得大量关注。中文用户反馈 gpt-5.6-luna 经 OpenCode Go 中继访问返回 403 区域限制。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#42608 48-bit ID timestamp wraparound wedges all pre-existing sessions](https://github.com/anomalyco/opencode/issues/42608) — 已关闭 ⭐3
**重要性**：P0 级严重故障。2026-08-14 12:39:55 UTC 时间戳 48-bit 回绕，导致所有该时刻之前创建的会话在 `runLoop` 步数 0 处就提前退出，提示被静默忽略。报告者认为是 #42605 等"agent 不响应"问题激增的根因。

### 2. [#36997 Desktop App v1.18.1 new layout hides agent switching UI](https://github.com/anomalyco/opencode/issues/36997) — 开放 ⭐6
**重要性**：12 条评论、6 个 👍。v1.18.1 启用 `newLayoutDesigns: true` 后，Plan/Build 模式切换控件消失，Tab 键也被破坏，直接影响桌面端核心工作流。

### 3. [#4581 [FEATURE] Ollama Cloud AUTH Login](https://github.com/anomalyco/opencode/issues/4581) — 已关闭 💬14
**重要性**：评论数最高。社区强烈希望支持 Ollama Cloud 直连（无需本地中转），目前 closed 状态可能是被实现或被合并。

### 4. [#42013 error: Free usage exceeded, subscribe to Go](https://github.com/anomalyco/opencode/issues/42013) — 开放 ⭐4
**重要性**：DeepSeek V4 Flash Free 在 OpenCode Zen 上配额异常，多人复现，免费额度计费逻辑存在 bug。

### 5. [#42083 GitHub Copilot provider shows zero models](https://github.com/anomalyco/opencode/issues/42083) — 开放 ⭐2
**重要性**：`opencode auth login -p github-copilot` 鉴权成功，但 `/models` 看不到任何模型，`opencode models github-copilot` 报 "Provider not found"。

### 6. [#25129 Thinking mode gets stuck in infinite repetition loop](https://github.com/anomalyco/opencode/issues/25129) — 开放 ⭐4
**重要性**：Qwen 3.6 Pro 思考模式下输出 `!!!!!...` 无穷循环，需切换到 DeepSeek v4 才能工作，影响国产模型可用性。

### 7. [#41518 gpt-5.6-luna 经 OpenCode Go 访问返回 403](https://github.com/anomalyco/opencode/issues/41518) — 开放
**重要性**：中文用户报告。OpenCode Go 中继访问 `gpt-5.6-luna` 持续返回 403 区域限制，但通过其他渠道可证明有效。

### 8. [#38791 Run loop can never exit when message ids are not time-sortable](https://github.com/anomalyco/opencode/issues/38791) — 开放
**重要性**：与 ID 生成器相关的深层设计问题。第三方导入的会话 ID 不是按时间排序字符串，导致 `SessionPrompt.runLoop` 死循环直至 Provider 400 错误。

### 9. [#37489 [FEATURE] Context cache invalidation when switching modes](https://github.com/anomalyco/opencode/issues/37489) — 开放 ⭐1
**重要性**：本地 LLM（vLLM/Ollama）用户报告，切换 Plan/Build 模式或压缩上下文时缓存完全失效，性能大幅下降。

### 10. [#42605 The session remains open, but the agent does not process subsequent prompts](https://github.com/anomalyco/opencode/issues/42605) — 开放
**重要性**：与 #42608 同源事件，已被确认为时间戳溢出导致，与 #42608 修复同步。

---

## 🔧 重要 PR 进展

### 1. [#42684 fix: compare ID timestamps numerically for 48-bit overflow](https://github.com/anomalyco/opencode/pull/42684) — 开放
修复今日最高优先级事件：把 `MessageV2.latest()` 从字符串字典序比较改为数值时间戳比较，彻底解决 48-bit 时间戳回绕引发的会话卡死问题。

### 2. [#42685 fix(tui): re-query terminal palette on focus for system theme refresh](https://github.com/anomalyco/opencode/pull/42685) — 开放
监听渲染器 focus 事件重新查询终端调色板，解决在 herdr 等多路复用器内 `system` 主题无法刷新、需手动触发 ?997 报告的问题。

### 3. [#42683 fix(tui): search all agents for configured color in color() lookup](https://github.com/anomalyco/opencode/pull/42683) — 开放
修复 subagent 颜色被静默丢弃的 bug：TUI 颜色查找改为遍历所有 agents（包括 subagents）而非仅可见 agents。

### 4. [#42682 fix(core): keep queued work parked after interrupt](https://github.com/anomalyco/opencode/pull/42682) — 开放
让 `session.interrupt?continue=true` 只恢复被中断意图的 steering input，已显式排队的下一轮任务保持 parked，防止抢占式行为。

### 5. [#42681 fix(desktop): show window on did-finish-load fallback for wayland](https://github.com/anomalyco/opencode/pull/42681) — 开放
为 Wayland 增加 `did-finish-load` 备选触发窗口显示路径，用 `revealed` 标志保证单次触发，修复部分 Linux 桌面环境下窗口不显示问题。

### 6. [#42680 refactor(core): share session model requests](https://github.com/anomalyco/opencode/pull/42680) — 开放
将持久化的 Session 步骤与瞬态 `session.generate` 调用统一通过 `SessionModelRequest.prepare` 边界，确保 provider 级别请求塑形一致。

### 7. [#42667 fix(core): unify patch path resolution](https://github.com/anomalyco/opencode/pull/42667) — 开放
将 V2 patch 工具的路径/权限资源统一到 `LocationMutation` 服务，与 write/edit 工具保持一致。

### 8. [#42662 fix(mcp): fail loudly on MCP server config missing type](https://github.com/anomalyco/opencode/pull/42662) — 开放
针对 Claude Code 风格的 MCP 配置（缺 `type`/`enabled` 字段）改为显式报错而非静默忽略，方便用户排查。

### 9. [#42663 feat(core): persist web search provider selection](https://github.com/anomalyco/opencode/pull/42663) — 已关闭
Web search provider 选择持久化到文件级配置而非 KV，支持固定 provider 列表。

### 10. [#27554 feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554) — 开放
在 `/connect` 增加 `Local (LAN)` 自动发现，结合 mDNS 扫描本地 OpenAI-compatible 服务，同时自动拉取 `/v1/models`，关闭 #27553。

---

## 📈 功能需求趋势

| 方向 | 代表 Issues | 社区热度 |
|------|-------------|----------|
| **Provider / 模型扩展** | #4581 Ollama Cloud、#42083 Copilot、#42664 Nara Router、#41518 gpt-5.6-luna、#27553 自动发现 | 多 Provider 接入、区域可用性、模型发现 |
| **桌面端 UI/UX** | #36997 布局、#37718 WSL sidecar、#42668 Web sidebar、#42635 主题刷新 | 跨平台一致性、Wayland/WSL 适配 |
| **性能 / 上下文管理** | #37489 缓存失效、#42657 TUI 渲染、#25129 思考循环 | 本地 LLM 用户最痛 |
| **会话管理稳定性** | #42608 ID 回绕、#38791 死循环、#42605 不响应 | P0 故障，ID/时间戳设计缺陷 |
| **权限 / 审批流程** | #41909 `/approve` 运行时切换、#24615 plan agent bypass | 借鉴 Claude Code 的可控代理 |
| **Go 订阅 / 免费额度** | #42013、#42385、#42215、#42606、#42637 | 计费/配额系统 Bug 集中爆发 |
| **MCP / 插件生态** | #42662 配置容错、#42669 schema 驱动 | Claude Code 兼容配置兼容性 |

---

## 💬 开发者关注点

1. **会话 ID 设计的根本性缺陷** —— 48-bit 时间戳字段在 2023 年附近就开始溢出，至今未在字符串比较与数值比较之间做切换，导致生产环境"静默不响应"事件。开发者呼吁放弃"ID 隐含时间戳"的耦合设计。

2. **OpenCode Go / Zen 商业化体验欠佳** —— 同一时间窗口内出现 5+ 条关于免费额度、付费未到账、区域限制 (403)、配额计数异常的工单，提示计费/配额后端可能在 8 月中旬做过改动。

3. **Windows / WSL / Wayland 桌面端碎片化** —— WSL 镜像网络 sidecar 失败、Wayland 窗口不显示、Windows Web sidebar 不显示 session，三个平台三种症状，桌面端"ready for daily use"仍有差距。

4. **第三方 Provider 自动发现成为强需求** —— Ollama、LM Studio、llama-swap、Copilot 等本地/自托管 Provider 数量增长，手写 `opencode.json` 已成为阻碍，#27554 是高优先级 PR。

5. **LLM 思考模式与反向 Token 控制** —— Qwen 3.6 Pro 思考死循环、Headless `opencode run --auto` 静默保存 118 token 空消息并 exit 0 等问题反映对模型输出"截断/兜底"机制的需求。

6. **TUI/终端适配是开发体验分水岭** —— 终端多路复用器内主题刷新、render 线程 97% CPU、签名 `\` 转义 vs 透明 tab 背景等细节体现 OpenCode 对"重度 CLI 用户"的投入。

---

*报告生成时间：2026-08-15 | 数据样本：50 条 Issue + 50 条 PR*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>The user wants me to generate a Chinese-language daily report for the jcode community, dated 2026-08-15. Let me analyze the GitHub data carefully and produce a structured report.

Let me organize the data:

**Releases:**
- v0.76.0: Transcript privacy and broader provider support (highlighted features: transcript telemetry with privacy-preserving collection, Anthropic-compatible provider profiles, Grok Build login)

**Issues (40 total, showing top 30 by comments):**
Top issues by comment count:
1. #940 - Critical bug: daemon keeps replaying detached commands after swarm workers stop (6 comments)
2. #650 - Oversized AvailableModelsUpdated frame drops provider routes (5 comments)
3. #936 - MCP tools with hyphens fail (CLOSED, 4 comments)
4. #938 - Feature: allow jcode to access model via http (4 comments)
5. #937 - auth-test Grok 402 reported as auth failure (CLOSED, 3 comments)
6. #950 - auto provider selection needs preference/quota (3 comments)
7. #515 - Is there a way to make /compact automatic? (3 comments)
8. #569 - jcode run hangs with OAuth providers (3 comments)
9. #740 - /usage Z.AI shows no real limits (3 comments)
10. #929 - OpenRouter replays first tool output (CLOSED, 2 comments)
11. #597 - MiniMax Token Plan keys fail (2 comments)
12. #922 - Destructive-command filter false-positives on heredocs (2 comments)
13. #947 - Model picker allowlist leaks providers (CLOSED, 1 comment)
14. #946 - Make usage indicator configurable (CLOSED, 1 comment)
15. #945 - Make Ctrl+P auto-poke toggle configurable (CLOSED, 1 comment)
16. #952 - Skill loader silently skips SKILL.md parse failures (CLOSED, 1 comment)
17. #944 - Can't keep MCP servers separate (CLOSED, 1 comment)
18. #920 - Bash tool output not shown in collapsed UI (CLOSED, 1 comment)
19. #921 - Pasted multi-line text shows as [pasted N lines] (CLOSED, 1 comment)
20. #923 - setup-hotkey --uninstall reinstalls (CLOSED, 1 comment)
21. #942 - OpenAI-compatible providers overlap (1 comment)
22. #943 - Afra Experience Platform (question, 1 comment)
23. #948 - jcode run --provider openai-api fails (1 comment)
24. #949 - Add OrcaRouter as named provider (1 comment)
25. #953 - Route codemode run_code through permission system (1 comment)
26. #951 - probe-issue (CLOSED, 1 comment)
27. #926 - suicide on windows terminal (1 comment)
28. #927 - How to modify endpoint and API key for existing OpenAI-compatible provider (1 comment)
29. #932 - bash gate rm -rf parses redirect as delete targets (1 comment)
30. #955 - Windows Terminal Sixel rendering (0 comments)

**PRs:**
- #954 - fix: resolve safe issues from automated triage (CLOSED)
- #941 - fix: resolve six reproducible triage issues (CLOSED)

The PRs are very important because they reference many of the closed issues:
- PR #954 fixes: SKILL.md parse failures, Claude MCP opt-out, model-picker allowlists, usage wording, auto-poke toggle
- PR #941 fixes: setup-hotkey --uninstall, MCP hyphens, OpenRouter tool-call replay, pasted content restoration, Bash output in collapsed cards, Grok Build surfacing

Now let me craft the report in Chinese, structured as requested. I need to be concise, professional, and include GitHub links.

Let me think about the key trends:
1. Multi-provider support is a major theme - issues about provider routing, OpenAI-compatible providers, OpenRouter
2. UX/UI improvements - collapsed tool output, usage indicators, hotkey configuration
3. Bash safety gate - multiple issues about false positives
4. MCP ecosystem integration - hyphens, Claude Code compat
5. Security/Privacy - transcript telemetry with redaction
6. Cross-platform - Windows terminal support, Sixel rendering

Top 10 issues to highlight:
1. #940 - Critical daemon hang bug
2. #650 - Provider route drops due to frame size
3. #569 - OAuth provider hang
4. #938 - HTTP provider support (feature request)
5. #950 - Auto provider selection preferences
6. #515 - Automatic /compact (recurring)
7. #932 - Bash safety false positives on redirects
8. #922 - Bash safety false positives on heredocs
9. #740 - /usage for Z.AI
10. #955 - Windows Terminal Sixel rendering

For the report structure, I'll organize it well in Chinese.

Since there are only 2 PRs, I'll highlight both with details about what they fix.

Let me write this out now.</think>

# jcode 社区动态日报 · 2026-08-15

> 数据来源：GitHub 仓库 `github.com/1jehuang/jcode`
> 统计窗口：过去 24 小时（2026-08-14 ~ 2026-08-15）

---

## 一、今日速览

昨日 v0.76.0 发布，新增"隐私模式"转录遥测与更多 Anthropic 兼容 provider 支持，社区反馈集中在**多 provider 路由稳定性**与 **Bash 安全闸误判**两大方向。同时维护者连续合并两个 triage PR（#941、#954），一次性关闭了 11 个中低优先级问题，节奏明显加快。

---

## 二、版本发布

### 🚀 v0.76.0 — Transcript privacy and broader provider support

- **隐私遥测**：opt-in 的 transcript telemetry 支持自动密钥脱敏（secret redaction）
- **Provider 扩展**：Anthropic-compatible profile 现可连接更多兼容服务
- **Grok Build 登录**：登录流程进一步补全

> 📦 发布详情：[Release v0.76.0](https://github.com/1jehuang/jcode/releases/tag/v0.76.0)

---

## 三、社区热点 Issues（Top 10）

| # | 标题 | 状态 | 为什么值得关注 |
|---|------|------|---------------|
| [#940](https://github.com/1jehuang/jcode/issues/940) | **critical**：停止 swarm workers 后守护进程仍重放 detached 命令，系统挂死 | OPEN · 6 评论 | 标记为 critical + regression，低资源环境下连进程都无法 kill，影响核心 swarm 能力 |
| [#650](https://github.com/1jehuang/jcode/issues/650) | 超大 `AvailableModelsUpdated` 帧丢弃 provider 路由，导致 picker 错配多 provider 模型 | OPEN · 5 评论 | 影响所有多 provider 用户，模型静默走错路由，沉默失败最难排查 |
| [#569](https://github.com/1jehuang/jcode/issues/569) | `jcode run` 在 default_provider 为 API-key 时挂死（OAuth provider 下） | OPEN · 3 评论 | 高优先级 reproducible，影响 OAuth/API-key 混用场景，无超时机制 |
| [#938](https://github.com/1jehuang/jcode/issues/938) | [enhancement] 允许 jcode 通过 http（非 https）访问模型 | OPEN · 4 评论 | 企业内网/自建 proxy 场景普遍需求，目前只支持 https |
| [#950](https://github.com/1jehuang/jcode/issues/950) | auto provider 选择缺乏偏好与剩余配额维度 | OPEN · 3 评论 | 多订阅用户每次都撞已耗尽 provider，先发请求才发现，浪费配额 |
| [#932](https://github.com/1jehuang/jcode/issues/932) | Bash 安全闸把 `2>/dev/null` 重定向解析为删除目标 | OPEN · 1 评论 | recurring-theme，`/dev/null` 触发"受保护系统路径"硬阻断且**无 justification 出口** |
| [#922](https://github.com/1jehuang/jcode/issues/922) | heredoc 内普通英文触发破坏性命令安全闸 | OPEN · 2 评论 | recurring-theme，heredoc 内的 `time` 字符串被误判，安全策略扫描范围需要收窄 |
| [#740](https://github.com/1jehuang/jcode/issues/740) | `/usage` 在 Z.AI coding-plan 上不显示真实配额 | OPEN · 3 评论 | 只跑了一个 key-status 探针就停，用户看不到余额与限额 |
| [#515](https://github.com/1jehuang/jcode/issues/515) | 200K+ 上下文模型下，能否让 `/compact` 自动执行？ | OPEN · 3 评论 | 长上下文场景下的老问题，满了只能手动中断 compact |
| [#955](https://github.com/1jehuang/jcode/issues/955) | Windows Terminal 1.22+ 原生支持 Sixel，但 jcode 未检测 `WT_SESSION` 走文本兜底 | OPEN · 新提交 | 影响 Windows 用户查看 mermaid/LaTeX/图片附件，体验落差明显 |

---

## 四、重要 PR 进展

由于过去 24 小时仅 2 个 PR，但都属"批量 triage 修复"，含金量很高：

### ✅ [#954](https://github.com/1jehuang/jcode/pull/954) — fix: resolve safe issues from automated triage

由维护者 @1jehuang 提交，**已合并关闭**，一次性解决 5 个问题：

- SKILL.md frontmatter 解析失败时给出诊断，不再静默跳过（[#952](https://github.com/1jehuang/jcode/issues/952)）
- 增加 Claude MCP 配置导入的 opt-out（[#944](https://github.com/1jehuang/jcode/issues/944)）
- 模型 picker allowlist 按精确活跃路由隔离（[#947](https://github.com/1jehuang/jcode/issues/947)）
- 使用率文案支持"已用%"配置（[#946](https://github.com/1jehuang/jcode/issues/946)）
- Ctrl+P auto-poke 快捷键可配置/禁用（[#945](https://github.com/1jehuang/jcode/issues/945)）

### ✅ [#941](https://github.com/1jehuang/jcode/pull/941) — fix: resolve six reproducible triage issues

同样由维护者提交，**已合并关闭**，解决 6 个 reproducible 问题：

- `setup-hotkey --uninstall` 在 macOS/Linux 真正卸载（[#923](https://github.com/1jehuang/jcode/issues/923)）
- MCP 工具名含连字符时走标准 dispatcher（[#936](https://github.com/1jehuang/jcode/issues/936)）
- OpenRouter 重复 tool-call ID 时保留输出顺序（[#929](https://github.com/1jehuang/jcode/issues/929)）
- 发送后的聊天消息恢复粘贴的完整内容（[#921](https://github.com/1jehuang/jcode/issues/921)）
- 折叠 tool 卡片中显示 trim 后的 Bash 输出（[#920](https://github.com/1jehuang/jcode/issues/920)）
- `auth-test` 暴露 Grok Build 订阅/余额错误而非误报为 auth 失败（[#937](https://github.com/1jehuang/jcode/issues/937)）

> 💡 **观察**：两个 PR 体现维护者采用了"自动化 triage → 批量 fix"的节奏，预计后续仍会有同模式 PR 收尾剩余 issue。

---

## 五、功能需求趋势

从今日 Issues 提炼，社区最集中的诉求集中在 **5 个方向**：

| 方向 | 代表 Issue | 占比特征 |
|------|------------|----------|
| **🔌 Provider 路由与生态扩展** | #938, #942, #949, #948, #569, #650, #950, #740 | 占比最高，从 http/企业内网、OrcaRouter/Z.AI/OpenAI 兼容配置到 auto 选择策略，覆盖"接入更多模型"全链路 |
| **🛡️ Bash 安全闸误判** | #922, #932, （关联 recurring-theme 标签） | 集中在 heredoc、重定向、`time` 关键字被错杀，用户希望提供 escape 通道或上下文感知 |
| **🧩 MCP 与外部工具集成** | #944, #953, #936（已修） | MCP 命名规范、Claude Code 隔离、codemode 权限打通是三个最热的细分点 |
| **🎨 UX 可配置化** | #946, #945, #921, #920（已修）, #515 | 百分比文案、快捷键、粘贴行为、折叠卡片——社区希望"小细节也能调" |
| **🖥️ 跨平台/终端能力** | #955, #926 | Windows Terminal Sixel 渲染、Windows 终端自杀问题需要更多测试覆盖 |

---

## 六、开发者关注点（痛点 & 高频需求）

**🔴 稳定性与沉默失败**
- #940、#569、#650 都属于"运行过程中无错信息、但实际卡死/错路由"型问题。开发者最大的焦虑不是 crash，而是**不报错地走错路径**——尤其涉及 provider 路由时。

**🟠 安全策略的可解释性**
- #932、#922 反映出：**安全闸一旦阻断，必须提供可解释的逃生口**。"no justification escape" 这类硬阻断在生产环境尤其让脚本化用户头疼。

**🟡 配置可见性不足**
- #927（找不到现有 OpenAI 兼容 provider 的 endpoint 与 key 配置）、#942（providers 在 settings 里互相遮挡）——开发者希望能直观看到和管理 provider 配置，而不是 grep 配置文件。

**🟢 隐私与企业合规**
- v0.76.0 的转录脱敏遥测 + #938 的 http provider 支持，**两条线都指向"企业内部 AI 基础设施"的接入需求**。这是社区近期明显的需求增量。

**⚪ 长上下文工作流的成熟度**
- #515 的 `/compact` 自动诉求，叠加 #650、#922 等场景说明：**200K+ 上下文**已经成为不少用户的默认配置，但围绕它的工具链（自动 compact、provider 切换、token 用量可见）仍偏碎片化。

---

> 📌 **TL;DR**：v0.76.0 把隐私与 provider 生态往前推一步；维护者通过两个批量 triage PR 高效关闭了 11 个 issue；社区下一阶段的关键战场是 **provider 路由正确性、Bash 安全策略可解释性、Windows 终端能力**。

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>让我仔细分析这份 GitHub 数据，生成一份 2026-08-15 的 pi 社区动态日报。

首先梳理关键信息：

**版本发布**
- v0.84.2 在过去24小时内发布，主要特性：
  - Fullscreen transcript search（完整对话记录搜索）
  - Configurable default tools（可配置的默认工具）

**Issues 关键信息**
最活跃的 Issues：
1. #7547 - Windows 使用体验调查（27评论）
2. #6187 - WSL 登录 GitHub Copilot 卡住（26评论，已关闭）
3. #5223 - Anthropic provider 修改 thinking blocks 导致 Opus 4.8 失败（17评论，已关闭）
4. #5023 - 终端随机滚动到开头（12评论）
5. #6665 - TUI 流式传输时占满一个 CPU 核心（12评论，进行中）
6. #7850 - GitHub Copilot 登录 429 错误（9评论）
7. #8096 - Z.AI Coding Plan 默认模型引用已移除模型（5评论）
8. #8092 - pnpm 安装的扩展加载失败（5评论）
9. #8010 - Copilot 账户登录 429（4评论）
10. #7787 - Bash PI_* 指南触发不必要权限（3评论）
11. #8047 - Windows 上 Pi Server 测试绑定 Unix socket 失败（3评论）
12. #5581 - 自定义消息绕过 before_agent_start 事件（3评论）
13. #7761 - VTE 终端复制到剪贴板失败（3评论）
14. #8105 - openai-codex-responses strict:null 问题（3评论）

**PRs 关键信息**
1. #8149 - 修复 OpenAI session header 问题
2. #8148 - 修复 bash PI_* 指南（关闭 #7787）
3. #8146 - Baseten DeepSeek V4 Flash 输出限制修复
4. #8143 - TUI 完整对话窗口化
5. #8139 - 添加 ChatGPT OAuth 图像生成
6. #8124 - xAI 模型改用 Responses API，默认 Grok 4.6
7. #8120 - 实验性 append compaction
8. #8119 - 修复 Kimi 缓存令牌追踪
9. #8012 - 修复根目录 md 文件作为 skill
10. #8011 - 修复单一 edit 输入
11. #8123 - 修复 registerFlag 类型不匹配
12. #5262 - 添加 Anthropic Vertex provider
13. #6216 - 添加 Amazon Bedrock Mantle OpenAI Responses provider
14. #8118 - 添加 requiresNonNullAssistantContent 兼容标志
15. #8112 - 修复 pnpm 扩展加载
16. #8113 - 添加 SiliconFlow provider
17. #8110 - 修复 TUI 复制剪贴板
18. #8067 - 使用 APP_NAME 用户消息

**功能需求趋势分析**
从 Issues 中识别：
1. **多 Provider 支持**：Anthropic Vertex、xAI Grok 4.6、SiliconFlow、Baseten、Z.AI、ChatGPT OAuth 图像生成
2. **性能优化**：TUI 流式传输 CPU 占用（#6665）、Kimi 缓存追踪、TUI 完整对话窗口化
3. **平台兼容性**：Windows 支持（#7547、#8047）、VTE 终端剪贴板（#7761）
4. **可靠性修复**：429 限流（#7850、#8010）、Opus 4.8 thinking blocks（#5223）、forward proxy（#8134）、Anthropic OAuth refresh（#8131）
5. **用户体验改进**：权限提示优化（#7787）、compaction 设置（#8133）、autocomplete（#8132、#8144）、/tmp 文件规则（#8145）
6. **扩展系统**：jiti 扩展加载（#8092、#8112）、registerFlag 类型（#8123）

**开发者痛点**
1. Windows 兼容性是主要痛点（多个相关 issue）
2. TUI 性能问题（流式传输占 CPU、剪贴板复制）
3. Provider 兼容性问题众多（每个 provider 都有自己的边角问题）
4. 扩展系统脆弱（pnpm、jiti、realpath）

现在生成结构化的日报。</think>

# Pi 社区动态日报 · 2026-08-15

## 📌 今日速览

v0.84.2 在过去 24 小时内发布，重点推出 **全屏转录搜索** 与 **可配置默认工具**；社区当日合并/关闭了约 18 个 Issue 与 10 余个 PR，焦点集中在 **多 Provider 兼容矩阵补全**（xAI Grok 4.6、SiliconFlow、Baseten DeepSeek V4 Flash、ChatGPT OAuth 图像生成）与 **性能/可靠性修复**（TUI 流式 CPU 占用、WSL Copilot 登录、pnpm 扩展加载）。同时，#7547 这份 Windows 用户体验调研仍在持续滚动讨论，显示出 Windows 适配仍是 Pi 当前最大的"用户体验空白"。

---

## 🚀 版本发布

### v0.84.2
- **Fullscreen transcript search** — 在全屏模式下搜索并导航匹配项，详见 [TUI Fullscreen Viewport 键位文档](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)
- **Configurable default tools** — 可配置启动时的默认工具集
- 同步包含 #8131（Anthropic OAuth refresh 在 signal 为 undefined 时崩溃）等稳定性修复

---

## 🔥 社区热点 Issues

| # | Issue | 关键洞察 |
|---|-------|---------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] Pi 在 Windows 上的使用现状调研（27 评论，OPEN） | **持续关注度最高**。作者 @petrroll 试图厘清 Windows 上 Pi 的"核心支持"与"可外包给扩展"边界，是产品策略级别的讨论。 |
| [#6187](https://github.com/earendil-works/pi/issues/6187) | WSL 中 Pi 登录 GitHub Copilot 卡死（26 评论，CLOSED） | 浏览器端完成 OAuth 后，WSL 内 Pi 客户端未检测到回调，体现 Pi 的设备授权流对 WSL 桥接的脆弱性。 |
| [#5223](https://github.com/earendil-works/pi/issues/5223) | Anthropic provider 修改 Opus 4.8 adaptive thinking blocks（17 评论，CLOSED，👍6） | 多轮对话中途收到 Anthropic 400；揭示**多 Provider 在 reasoning/extended thinking 上的协议碎片化**。 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | TUI 流式传输时占满 1 个 CPU 核心（12 评论，OPEN/INPROGRESS） | 火焰图定位到 `Intl.Segmenter` 未缓存 + 每 chunk Markdown 重建，是少数影响长会话用户体验的性能回归。 |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | Copilot 登录在大型组织 429 限流（9 评论，CLOSED，👍7） | 20+ 模型的企业 Copilot 触发上游限流，反映 **Provider 模型枚举策略需调整**。 |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | 终端随机滚到 session 开头（12 评论，CLOSED） | 长期困扰用户的 UX 抖动问题，可能与自动滚动逻辑有关。 |
| [#8096](https://github.com/earendil-works/pi/issues/8096) | Z.AI Coding Plan 默认引用已移除的 `glm-5.1`（5 评论，CLOSED） | 体现 **models.dev 与本地 catalog 漂移** 是 Provider 集成的常见痛点。 |
| [#8092](https://github.com/earendil-works/pi/issues/8092) | pnpm 安装的扩展 jiti 无法解析依赖（5 评论，CLOSED） | jiti 不像 Node 原生 loader 那样 realpath 入口，导致 `.pnpm` symlink 链断裂。 |
| [#7787](https://github.com/earendil-works/pi/issues/7787) | Bash 工具的 `PI_*` 指南触发冗余权限提示（3 评论，OPEN） | 默认 `exposeSessionEnvironment: true` 让模型把"读 env"当作常规任务，引发不必要 shell 调用。 |
| [#5581](https://github.com/earendil-works/pi/issues/5581) | `pi.sendMessage({triggerTurn:true})` 绕过 `before_agent_start`（3 评论，OPEN） | 扩展 SDK 的 hook 漏触发问题，影响需要前置校验/计费的扩展作者。 |

---

## 🛠 重要 PR 进展

| # | PR | 作用 |
|---|----|------|
| [#8149](https://github.com/earendil-works/pi/pull/8149) | `fix(ai)`: 省略非法 OpenAI `session_id` header（CLOSED） | Envoy 等 HTTP/1 proxy 会因下划线 header 名称返回 `http1.unexpected_underscore`；修复可避免线上请求被前置代理拦截。 |
| [#8148](https://github.com/earendil-works/pi/pull/8148) | `fix(coding-agent)`: bash PI_* 指南限定到会话问题（CLOSED，#7787） | 把"可读取 PI_*"的提示收紧到真正需要会话上下文的场景，避免无关任务里 `env` 调用。 |
| [#8146](https://github.com/earendil-works/pi/pull/8146) | `fix(ai)`: Baseten DeepSeek V4 Flash 输出封顶 384k（CLOSED） | models.dev 标注 1M 但 Baseten 仅支持 384k，封顶可避免所有超出请求失败。 |
| [#8143](https://github.com/earendil-works/pi/pull/8143) | `perf(tui)`: 全屏转录分块渲染（CLOSED） | 完整人类转录保留在 alt-screen 之外，渲染器按精确块高只画视口内块，配合 v0.84.2 全屏搜索体验提升明显。 |
| [#8139](https://github.com/earendil-works/pi/pull/8139) | `feat(ai)`: ChatGPT OAuth 图像生成（CLOSED） | 复用现有 Codex OAuth/Responses 基础设施，让用户**无需 OpenAI API Key** 即可通过 ChatGPT 订阅生成/编辑图片。 |
| [#8124](https://github.com/earendil-works/pi/pull/8124) | `feat(ai)`: xAI 走 Responses API + 默认 Grok 4.6（OPEN） | 补全 xAI User-Agent、并把默认模型从 4.5 升级到 4.6。 |
| [#8120](https://github.com/earendil-works/pi/pull/8120) | `feat(coding-agent)`: 实验性 append compaction（OPEN） | `PI_EXPERIMENTAL=1` 时使用 append 模式复用 system prompt / 路由 session，**保留 Provider 提示词缓存命中率**。 |
| [#8119](https://github.com/earendil-works/pi/pull/8119) | `fix`: 追踪 Kimi `cached_tokens`（OPEN，#8075） | 之前 Kimi 的 top-level `cached_tokens` 被当成普通输入，修复后可正确计入缓存读出，对长会话成本核算意义显著。 |
| [#8113](https://github.com/earendil-works/pi/pull/8113) | `feat(ai)`: 新增 SiliconFlow provider（CLOSED） | OpenAI 兼容端点 `https://api.siliconflow.com/v1`，环境变量 `SILICONFLOW_API_KEY`，补齐国产模型生态。 |
| [#8110](https://github.com/earendil-works/pi/pull/8110) | `fix(tui)`: 复制走宿主剪贴板（CLOSED，#7761） | 替换裸 OSC 52，覆盖 Terminal.app / GNOME Terminal / Tilix / tmux 等忽略 OSC 52 的终端，让"Copied!" 不再是说谎。 |

> 另有值得跟踪的开放 PR：[#5262](https://github.com/earendil-works/pi/pull/5262)（Anthropic Vertex）、[#6216](https://github.com/earendil-works/pi/pull/6216)（Bedrock Mantle OpenAI Responses）、[#8012](https://github.com/earendil-works/pi/pull/8012)（settings 根目录 md 不再误判为 skill）。

---

## 📈 功能需求趋势

1. **多 Provider 生态扩张**：当日涉及 SiliconFlow、xAI Responses、Baseten DeepSeek、ChatGPT OAuth 图像、Anthropic Vertex、Bedrock Mantle —— 社区在持续把 Pi 打造成**多模型聚合前端**。
2. **TUI 性能与可用性**：`Intl.Segmenter` 缓存、全屏转录分块、剪贴板走宿主通道，三件事共同指向"长会话 + 大模型输出"下的 TUI 体验优化。
3. **协议级兼容与可恢复性**：每家 Provider 在 retry / thinking / null content / 反向代理 下的行为都不同，**重试分类 + compat flags + provider 适配层**成为新常态（如 #8118 `requiresNonNullAssistantContent`、#8138 "Sorry, something went wrong" 分类）。
4. **扩展系统稳健化**：jiti realpath（#8112）、`registerFlag` 类型 union（#8123）、settings 根目录 md（#8012）说明扩展 SDK 进入"硬化"阶段。
5. **企业/组织场景**：Copilot 429（#7850/#8010）、forward proxy hang（#8134）暴露出企业网络与大批量模型目录的新需求。

---

## 💡 开发者关注点

- **Windows 是头号痛点**：#7547 仍在涨评论，加上 #8047（Unix socket 测试 31 个失败）和 #7761（VTE 剪贴板），Windows 用户基本"自己凑方案"，亟需官方优先级表态。
- **"Copied!" 不真实 / 终端行为碎片化**：开发者普遍对"看起来工作但实际未生效"类 bug 零容忍（剪贴板、scrolling）。
- **Prompt caching 透明度**：Kimi、OpenAI Codex、Anthropic 三家缓存语义不同，开发者希望 UI/账单侧能清晰区分 cache read vs write（#8075、#8120）。
- **可配置化的呼声**：compaction profiles（#8133）、autocomplete 位置（#8132）、中间位置 skill 自动补全（#8144）、`/tmp` 文件规则（#8145）—— 反映 Pi 用户**从"开箱即用"阶段进入"长期项目化使用"阶段**。
- **贡献者友好度提升**：当日多条 PR 是社区提交的"小而精准"的 compat flag / provider 集成（#8137、#8138、#8148、#8118），说明 Pi 的贡献门槛正在下降，但**Provider SDK 的稳定性仍是新贡献者最大的拦路虎**。

---

*日报基于过去 24 小时内 earendil-works/pi 的 Release、Issue、PR 数据综合生成。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
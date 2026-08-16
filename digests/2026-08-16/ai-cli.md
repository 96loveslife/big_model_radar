# AI CLI 工具社区动态日报 2026-08-16

> 生成时间: 2026-08-16 01:40 UTC | 覆盖工具: 8 个

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

<think>The user wants a comprehensive comparative analysis report based on the daily reports of 7 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, jcode, pi). Let me carefully synthesize all the information provided.

Let me first count and verify the data:

1. **Claude Code** (github.com/anthropics/claude-code)
   - No releases in past 24 hours
   - 50 issues updated (top 30 shown)
   - 3 PRs updated
   
2. **OpenAI Codex** (github.com/openai/codex)
   - 2 releases: rust-v0.148.0-alpha.20, rust-v0.148.0-alpha.19
   - 50 issues updated (top 30 shown)
   - 50 PRs updated (top 20 shown)
   
3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
   - 1 release: v0.56.0-nightly.20260816.g2a87e7be1
   - 50 issues updated
   - 12 PRs updated
   
4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
   - No releases
   - 17 issues updated
   - 2 PRs updated
   
5. **Kimi Code CLI** (github.com/MoonshotAI/kimi-cli)
   - No releases
   - 4 issues updated
   - 2 PRs updated
   
6. **OpenCode** (github.com/anomalyco/opencode)
   - No releases
   - 50 issues updated (top 30 shown)
   - 50 PRs updated (top 20 shown)
   
7. **jcode** (github.com/1jehuang/jcode)
   - No releases
   - 18 issues updated
   - 1 PR updated
   
8. **pi** (github.com/earendil-works/pi)
   - No releases
   - 38 issues updated (top 30 shown)
   - 14 PRs updated

Now let me identify the common themes:

**Common themes across tools:**
1. **Hook/Extension system reliability** - Claude Code (PreToolUse hook bugs), pi (extension API issues), jcode (Provider config bugs)
2. **Context/Compaction reliability** - Claude Code, Gemini CLI, pi (compaction issues), OpenCode (compaction loops)
3. **Multi-Provider/LAN support** - OpenCode (LAN discovery), Gemini CLI (Vertex/Gemini), Claude Code (Connector), jcode (multiple providers)
4. **Cross-platform (Windows) issues** - Almost every tool has Windows-specific issues
5. **MCP integration** - Copilot CLI (MCP OAuth bugs), Claude Code, Gemini CLI
6. **Memory/session persistence** - Claude Code (memory system), Gemini CLI (Auto Memory), jcode (memory retrieval), Kimi (cross-session memory)
7. **Cost/Quota transparency** - Kimi (quota complaints), OpenCode (subscription), Copilot CLI (BYOK prompt caching)
8. **Security/Sandbox** - Gemini CLI (SSRF fix), Claude Code (Hook bypassPermissions), OpenCode (grok-4.5 issues), pi (Windows bash tool)
9. **Storage/disk management** - OpenAI Codex (rollout files), OpenCode (event table growth), Claude Code (transcript corruption)
10. **Agent reliability/hangs** - Gemini CLI (Generalist agent hangs), Claude Code (background tasks), Kimi, OpenCode

**Differentiating positions:**
- **Claude Code**: Anthropic生态核心，权限/Hook体系丰富，企业级
- **OpenAI Codex**: 重性能与存储治理，TUI体验，内部迭代密集
- **Gemini CLI**: Google生态，注重Agent能力与评测基建，安全响应快
- **GitHub Copilot CLI**: IDE集成深，MCP生态是企业痛点
- **Kimi Code CLI**: 长上下文（1M）领先，配额争议大
- **OpenCode**: 多Provider/LAN自托管，云+本地+LAN三栖
- **jcode**: 小众但用户活跃，Windows TUI打磨
- **pi**: 压缩（Compaction）系统、扩展API深化、本地推理

**Activity level analysis:**
- Very active (50 issues, 50 PRs): OpenAI Codex, OpenCode
- Highly active (50 issues, 12 PRs): Claude Code, Gemini CLI
- Moderately active (38 issues, 14 PRs): pi
- Less active (18 issues, 1 PR): jcode
- Lower activity (17 issues, 2 PRs): GitHub Copilot CLI
- Quiet (4 issues, 2 PRs): Kimi Code CLI

**Maturity assessment:**
- Most mature (with version 1.x.x and stable releases): OpenAI Codex (alpha but extensive), Claude Code (v2.1.21x)
- Stable: Gemini CLI (nightly), OpenCode (v1.18.18)
- Active development: pi, GitHub Copilot CLI
- Early stage: jcode, Kimi Code CLI

Now let me craft the report. The user wants:
1. 生态全景 (3-5 sentences)
2. 各工具活跃度对比 (table)
3. 共同关注的功能方向 (which tools, specific needs)
4. 差异化定位分析
5. 社区热度与成熟度
6. 值得关注的趋势信号

Let me write a professional, data-backed Chinese report.</think>

# AI CLI 工具生态横向对比分析报告
**数据日期：2026-08-16**

---

## 一、生态全景

截至 2026-08-16，AI CLI 工具生态已进入**"功能补齐完成、向体验与稳定要密度"**的成熟期阶段：头部工具（Claude Code、OpenAI Codex、Gemini CLI、OpenCode）单日活跃 Issue 数普遍达到 50 条量级，竞争维度从"能不能跑"迁移到"长跑稳不稳、Token 花得明不白、跨平台均不均衡"；同时小型/新兴工具（jcode、pi）以差异化的扩展体系、压缩机制、本地推理体验切入细分市场。整个生态呈现出 **"权限/Hook/扩展系统成为新瓶颈"**、**"压缩与上下文管理成为可靠性主线"**、**"存储与磁盘治理从边缘议题上升为核心痛点"**三大共性现象。

---

## 二、各工具活跃度对比

| 工具 | 24h Release | Issues 更新 | PR 更新 | 综合活跃度 | 备注 |
|------|------|-----------|--------|------|------|
| **OpenAI Codex** | 2 (alpha) | **50** | **50** | 🔥🔥🔥🔥🔥 | PR/Issue 双高，内部迭代最密集 |
| **OpenCode** | 0 | **50** | **50** | 🔥🔥🔥🔥🔥 | v2.0 问题集中爆发+合并 PR 量最大 |
| **Gemini CLI** | 1 (nightly) | **50** | 12 | 🔥🔥🔥🔥 | Issue 流量大，PR 偏稳健节奏 |
| **Claude Code** | 0 | **50** | 3 | 🔥🔥🔥🔥 | Issue 极热但 PR 流量显著偏低 |
| **pi** | 0 | 38 | 14 | 🔥🔥🔥 | 压缩主线驱动 |
| **jcode** | 0 | 18 | 1 | 🔥🔥 | 维护者驱动，外部贡献待激活 |
| **GitHub Copilot CLI** | 0 | 17 | 2 | 🔥🔥 | Issue 多为 1.0.79/1.0.80 回归 |
| **Kimi Code CLI** | 0 | 4 | 2 | 🔥 | 仓库最安静，配额/压缩两议题孤立 |

> 数据观察：OpenAI Codex 与 OpenCode 的 Issue/PR 双高（各 50/50），而 Claude Code 出现明显的"Issue 高/PR 低"倒挂（50/3），提示其**外部贡献路径相对封闭**，更多依赖官方迭代。

---

## 三、共同关注的功能方向

### 3.1 上下文压缩与 Compaction 系统（最广泛的共识痛点）
- **Claude Code** #50246（消息队列模式，197 👍）
- **OpenCode** #27924（压缩死循环，22GB 卷被吃光）
- **pi** #6879（auto-compaction 不触发，17 👍 / 21 评论）+ #8164/#8153/#8165/#8175/#8176 5 个相关 PR
- **Gemini CLI** Auto Memory 的低信号会话重试（#26522）
- **Kimi** #2603（基于 token 预算的配额感知压缩）
- **jcode** #962（自动化 todo 评估死循环）

> **行业信号**：压缩已从"高级特性"变成"基础可用性"门槛，所有玩家都在同一条赛道上补课。

### 3.2 MCP（Model Context Protocol）生态稳定性
- **GitHub Copilot CLI** Atlassian MCP OAuth 在 1.0.79/1.0.80 连续两次回归（#4480/#4490）+ 60s 握手无重试（#4421）+ CI 下 403（#4346）
- **Claude Code** #77212/#78527 PreToolUse hook 权限语义破坏 bypassPermissions 契约
- **Gemini CLI** MCP 远程流式能力协商问题
- **jcode** #964 MCP 工具单下划线名查找失败

> MCP 是 AI CLI 扩展性的事实标准，但**认证、重试、命名约定**三个环节都不够稳定，正在侵蚀用户对远程 MCP 服务器的信任。

### 3.3 存储与磁盘治理（从边缘议题升级为核心痛点）
- **OpenAI Codex** rollout 文件膨胀至数百 GiB（#30779/#35470/#34337/#25921）+ 新增 `codex doctor` 存储诊断（PR #38795）
- **OpenCode** #33356 事件表无上限增长 13 GB + CLI 残留 13 MiB `libopentui.so`
- **Claude Code** #77898 单个坏 stub transcript 可"吞掉"33 个会话
- **jcode** Crashpad dumps 无限制累积

> **行业信号**：长跑场景下的存储可观测性、压缩、配额、清理工具成为**"能否上生产"的隐性门槛**。

### 3.4 Windows 跨平台体验治理
- **Claude Code** #80444 GPU 进程崩溃、#68625 后台任务被 WarmLifecycle 杀、#86999 PATH 缺失、#87024 Bash Cowork 设备兼容性
- **OpenAI Codex** #20214（Windows 11 Pro 卡顿，104 评论/85 👍）+ #38546 + #28109
- **GitHub Copilot CLI** #4499 v1.0.79 autopilot Windows OOM + #3392 NixOS 兼容
- **jcode** #928 Windows 粘贴行为 + #956 Alacritty 鼠标滚轮 + #970 Orca 终端泄漏
- **pi** #8170 Windows bash 工具可杀宿主 + #6187 WSL 登录挂起

> **行业信号**：几乎每个工具都有"Windows 长尾问题清单"，**跨平台体验是非 macOS 用户的核心抱怨**。

### 3.5 成本/配额透明性与预算控制
- **Kimi** #2604 Vivace 套餐疑似缩减 3–5 倍（用户附 wire-level 埋点数据）
- **OpenCode** #37790 Stripe 成功但不到账 + #42143 "100% 免费"认知冲突 + #24879 Go Pro 分层诉求 + PR #42823 会话级 budget 字段
- **GitHub Copilot CLI** #4500 BYOK 模式 prompt caching 被破坏
- **OpenAI Codex** base64 图片内联"投毒"线程（#18629）

> **行业信号**：Agentic 工作流让单用户成本失控成为普遍焦虑，**"Budget/Spend Dashboard"正在从 nice-to-have 变成 must-have**。

### 3.6 Agent 可靠性与状态报告可信度
- **Gemini CLI** #22323 Subagent MAX_TURNS 后仍上报成功 + #21409 Generalist Agent 挂死
- **Claude Code** 多个后台任务被静默杀
- **jcode** #958 Swarm DM 中断无法抢占 2.5 小时 worker
- **pi** Compaction 错误信息与真实原因不符（#8176/#8058）

> Agent 是否能"诚实告诉你它失败了"，正在与"能否完成任务本身"并列成为核心质量指标。

### 3.7 跨会话记忆与持久化
- **Claude Code** #87028 claude.ai ↔ Code 无共享上下文 + #77898 数据完整性
- **Gemini CLI** Auto Memory 确定性密钥脱敏（#26525）
- **Kimi** #1283 跨会话持久化（**仓库最热 Issue，40 评论**）
- **jcode** #960 内存检索零命中
- **OpenCode** auto-memory 数据完整性

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | Anthropic 生态旗舰 CLI | 企业/深度 Agent 开发者 | **权限与 Hook 体系最完备**，v2.1.21x 重构暴露契约不稳；Connector 多账户是头部长期诉求 |
| **OpenAI Codex** | 性能与存储治理标杆 | CLI 重度用户 + Pro/Plus 订阅 | **Rust 内部迭代最密集**，TS SDK 配置覆盖、code-mode gRPC、Hooks 引擎 MCP 支持；`codex doctor` 引领存储可观测性 |
| **Gemini CLI** | Google AI 能力 + 评测基建 | 研究型/前瞻型用户 | **行为评测体系**最系统（PR #28822/23/24 XL 规模），Subagent 可靠性 + 安全修复（SSRF + Node 22 EOL）双线推进 |
| **GitHub Copilot CLI** | IDE/GitHub 深度集成 | GitHub Actions / Copilot Enterprise 用户 | **MCP 认证 + ACP 协议**是企业接入关键；protobuf OTLP（#2934）采纳反映企业可观测性诉求 |
| **OpenCode** | 云+本地+LAN 三栖模型网关 | 本地/自托管/混合云用户 | **LAN 发现**（PR #27554）+ **容器化工作区**（Docker/Incus PR #42831/#42829）+ v2.0 事件溯源架构 |
| **Kimi Code CLI** | 长上下文（1M）领先者 | 重度阅读/分析用户 | **1M 上下文是双刃剑**：配额争议（#2604）+ 压缩几乎不触发（#2603）；商业摩擦风险显现 |
| **pi** | 扩展体系 + 压缩语义革新 | 扩展开发者 + 本地推理用户 | **扩展 API 深化**（UI 弹窗事件 #7147、pre-commit hook #8169）+ **Compaction 安全边界**（PR #8153）|
| **jcode** | 小而精的 Agent 沙盒 | 尝鲜型个人开发者 | 单维护者驱动，**Plan Mode 是"旗舰空白"**（#96 沉淀 3 个月）；外部贡献生态待激活 |

---

## 五、社区热度与成熟度

### 🔥 高活跃 + 高成熟（第一梯队）
- **OpenAI Codex**：alpha 阶段但 PR/Issue 双高，技术深度领先
- **OpenCode**：v2.0 集中爆发，但合并能力极强（每日合并 10+ PR）
- **Gemini CLI**：nightly 节奏稳定，评测基建投入大

### 📈 高活跃 + 中等成熟（快速迭代期）
- **Claude Code**：Issue 流量第一（多条 100+ 评论），但 PR 流量倒挂提示**官方迭代节奏快但社区贡献有限**
- **pi**：38 个活跃 Issue 中约 1/4 围绕压缩，反映**专注且深入**

### 🔧 中活跃 + 战略防守
- **GitHub Copilot CLI**：1.0.79/1.0.80 双版本回归拖累口碑，MCP 是企业命脉但稳定性堪忧

### 🌱 低活跃 + 早期阶段
- **jcode**：维护者驱动，依赖单一，外部贡献生态尚未激活
- **Kimi Code CLI**：仓库最安静，#1283 长期热度（40 评论）vs 整体冷淡形成反差

---

## 六、值得关注的趋势信号

### 📡 信号 1：压缩（Compaction）正在成为下一代 AI CLI 的"分水岭"
今日至少有 **5 个工具**（Claude Code、OpenCode、pi、Kimi、jcode）有压缩相关的高优议题。压缩的**触发时机、安全边界、错误可观测性、对扩展的可见性**四个维度正在被同时打磨。这是一场**继上下文窗口长度竞赛之后的第二轮基础能力竞赛**。

### 📡 信号 2：存储可观测性从"加分项"变成"生产门槛"
OpenAI Codex 的 `codex doctor`（PR #38795）、OpenCode 的 13 GB 事件表（#33356）、Claude Code 的 stub transcript 完整性（#77898）——**Agentic 工作流让"看不见的磁盘消耗"成为 SLA 级风险**。未来 6 个月，存储健康检查、配额/压缩策略、清理工具将成为生产级 CLI 的标配。

### 📡 信号 3：MCP 协议从"亮点"进入"信任保卫战"
Copilot CLI 的 Atlassian OAuth 连续两次回归（#4480 → #4490）、Claude Code 的 bypassPermissions 静默放行（#77212）、jcode 的单下划线命名约定破裂（#964）——**MCP 生态的认证/握手/命名规范尚未稳定**，这将影响所有依赖第三方工具的 Agent 工作流可靠性。

### 📡 信号 4：Windows 平台正在从"可跑"走向"必追"
每家工具都有 Windows 长尾问题清单，但**只有当问题被列入 P1 修复时**才被认真对待。Windows 上的 Agent 体验将逐渐成为**企业部署决策的关键变量**。

### 📡 信号 5：成本透明度成为新刚需
Kimi 的"配缩减 3-5 倍"（#2604）+ OpenCode 的 Stripe 不同步（#37790）+ Copilot CLI 的 BYOK 缓存破坏（#4500）共同指向一个事实：**用户开始自带埋点数据维权**。"Budget/Spend Dashboard"将成为 2027 年 Agent 工具的核心 UI 模块。

### 📡 信号 6：扩展/插件系统的"深度 API"竞赛
pi 的 UI 弹窗事件、pre-commit hook、压缩失败回调（#7147/#8169/#8175）以及 Codex 的 MCP tool handler（PR #38705）显示

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and generate a hot report. Let me carefully review the data and extract meaningful insights.

Let me organize the information:

**Top PRs by attention:**
1. #1298 - fix(skill-creator): run_eval.py always reports 0% recall — Most critical bug
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
14. #525 - Add pyxel skill
15. #509 - docs: add CONTRIBUTING.md
16. #181 - Add SAP-RPT-1-OSS predictor skill
17. #95 - Add comprehensive system documentation
18. #1538 - fix: bring two skills back under the Agent Skills spec
19. #1528 - FIX (unclear)
20. #1479 - Add plan-file-hygiene skill

**Top Issues by comments:**
1. #492 - Security: Community skills under anthropic/ namespace - 43 comments
2. #228 - Enable org-wide skill sharing - 16 comments
3. #556 - run_eval.py 0% trigger rate - 12 comments
4. #62 - All my skills disappeared - 10 comments
5. #1329 - Proposing compact-memory skill - 9 comments
6. #202 - skill-creator should be updated - 8 comments (CLOSED)
7. #412 - agent-governance skill proposal - 6 comments (CLOSED)
8. #189 - document-skills and example-skills duplicates - 6 comments
9. #1487 - claude-api skill injects 156k tokens - 4 comments
10. #1385 - Reasoning Quality Gate Pipeline - 4 comments
11. #1175 - SharePoint security concerns - 4 comments (CLOSED)
12. #29 - Usage with bedrock - 4 comments
13. #16 - Expose Skills as MCPs - 4 comments
14. #12 - docx whitespace reformatting - 4 comments
15. #1169 - skill-creator recall=0% - 3 comments

Key insights:
- Skill-creator issues dominate (Windows compatibility, eval loop bugs, recall=0%)
- Document skills (docx, pdf, odt) getting a lot of fixes
- Quality and governance concerns (security, trust boundaries)
- Enterprise integration (ServiceNow, SAP)
- Testing patterns and frontend design
- Security trust boundary issue (#492) is the highest engagement issue

Let me now structure the report. The user asked for Chinese output (the prompt is in Chinese). I'll write in Chinese, concise and professional.

Note: The data shows "评论: undefined" for PRs but shows actual comment counts for Issues. This is interesting - I should note that PR engagement might be measured differently (perhaps by reactions or commits).

Let me structure:

1. 热门 Skills 排行 - Top PRs by attention
2. 社区需求趋势 - From Issues
3. 高潜力待合并 Skills - Open high-value PRs
4. Skills 生态洞察 - Summary insight

I'll need to estimate which PRs are most discussed based on the data. Since PRs show "undefined" for comments, I'll have to use other signals like update recency, issue cross-references, and PR number (later PRs tend to be newer). But the data shows top 20 PRs already, so I'll work with that.

Actually, re-reading: "热门 Pull Requests（按评论数排序，共 50 条，展示前 20 条）" - These are sorted by comment count but show "undefined". I'll have to infer based on cross-references and issue linkage.

Key cross-references I see:
- #1298 references #556 (issue) - the run_eval.py bug
- #1099, #1050 also fix the Windows/recall issue
- #514 document-typography
- #568 ServiceNow skill
- #1367 self-audit
- #1479 plan-file-hygiene - addresses #1417
- #1538 fix spec compliance

Let me write the report now.

I should include thinking block as required by the system prompt with very detailed thinking. Let me structure my analysis:

**热门 Skills 分析：**

1. **#1298 skill-creator 修复** - 这是最关键的，因为它解决了一个根本性 bug：run_eval.py 始终报告 0% recall，意味着整个 description 优化循环都在对噪声优化。引用了 #556（有 12 条评论），说明这是社区已知的严重问题。

2. **#514 document-typography** - 解决 AI 生成文档的排版质量问题（孤行、寡行、数字对齐），这影响所有 Claude 生成的文档。

3. **#1367 self-audit (v1.3.0)** - 通用审计技能，先做机械文件验证，再做四维推理质量审核。

4. **#538, #541, #539** - 文档技能（pdf, docx）和 skill-creator 的 bug 修复

5. **#568 ServiceNow** - 企业级平台集成

6. **#210 frontend-design** - 前端设计技能改进

7. **#83 skill-quality-analyzer & skill-security-analyzer** - 元技能（meta skills）

8. **#486 ODT** - OpenDocument 格式支持

9. **#723 testing-patterns** - 测试模式

10. **#525 pyxel** - 复古游戏开发

11. **#181 SAP-RPT-1-OSS** - SAP 表格预测模型

**社区需求趋势：**

从 Issues 看：
1. **安全与信任** - #492 (43 评论) 是最大焦点，namespace 滥用问题
2. **跨平台兼容性** - Windows 子进程问题反复出现
3. **企业协作** - #228 组织内 skill 共享（16 评论）
4. **核心评估机制** - skill-creator 的 recall 问题（多个 issues）
5. **上下文管理** - #1487 claude-api 注入 156k tokens
6. **代理治理** - #412 agent-governance（已关闭但仍是需求）
7. **推理质量** - #1385 三阶段质量门
8. **MCP 集成** - #16 暴露 Skills 为 MCPs

**高潜力待合并：**
- #1298 修复 skill-creator（影响所有开发者）
- #1367 self-audit（通用质量工具）
- #568 ServiceNow（企业集成）
- #514 document-typography（影响所有文档生成）

**生态洞察：**
社区目前最集中的诉求是「**技能可信度与质量保障**」——从 skill-creator 的核心评估机制失灵，到 namespace 信任边界被滥用，再到 description 优化循环产生噪声，本质上都是「如何确保 Skills 是可信赖、可度量、可治理的」。其次是文档类技能（DOCX/PDF/ODT）的工业化成熟度。

让我开始撰写最终报告。</think>

# Claude Code Skills 社区热点报告
*数据截止：2026-08-16*

---

## 一、热门 Skills 排行

| # | PR | Skill / 主题 | 关注度信号 | 状态 |
|---|-----|-------------|----------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 核心修复**：run_eval.py 始终报告 recall=0% | 串联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）+ Issue [#1169](https://github.com/anthropics/skills/issues/1169)，10+ 独立复现 | OPEN |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：AI 生成文档的排版质量控制（孤行/寡行/编号对齐） | 解决"每个 Claude 生成文档都受影响"的普遍问题 | OPEN |
| 3 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit (v1.3.0)**：机械文件验证 + 四维推理质量门 | 配套 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论），提出"推理质量门"管道提案 | OPEN |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer**：质量/安全元技能 | 五维评分体系（结构、文档、测试、安全、维护性） | OPEN（长时间未合入） |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 平台 Skill**：覆盖 ITSM/ITOM/ITAM/SAM/FSM/SPM 等 7 大模块 | 长期维护中（持续 5 个月更新），企业级集成代表 | OPEN |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 改进**：提升清晰度与可执行性 | 关注"每条指令必须可在单次会话内执行" | OPEN |
| 7 | [#541](https://github.com/anthropics/skills/pull/541) | **docx 修复**：tracked-change 与书签的 w:id 冲突 | 解决文档腐败的高危根因 | OPEN |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns**：完整测试栈（Testing Trophy + AAA + React 组件） | 面向通用开发者的方法论 Skill | OPEN |

> **补充观察**：文档类（PDF/DOCX）和 skill-creator 自身的 Bugfix PR（#538, #539, #1099, #1050）虽单项评论数不高，但与核心 Issue 形成话题集群，间接关注度极高。

---

## 二、社区需求趋势

按 Issues 评论数从高到低归纳为 **5 大方向**：

### 1. 🔐 信任与安全（热度最高）
- [#492](https://github.com/anthropics/skills/issues/492) **43 评论**：社区 Skills 在 `anthropic/` 命名空间下冒充官方，破坏信任边界
- [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 文档访问控制与 Skill 内权限逻辑的安全顾虑

### 2. 🏢 企业协作与共享
- [#228](https://github.com/anthropics/skills/issues/228) **16 评论**：Claude.ai 组织级 Skill 共享（当前需手动下载/上传）

### 3. 🛠️ skill-creator 工具链成熟度
- [#556](https://github.com/anthropics/skills/issues/556) **12 评论** + [#1169](https://github.com/anthropics/skills/issues/1169)：recall=0% 导致 description 优化循环失效
- [#202](https://github.com/anthropics/skills/issues/202)（CLOSED）"skill-creator 应当按最佳实践更新"
- [#29](https://github.com/anthropics/skills/issues/29) Bedrock 兼容性问题

### 4. 💾 上下文与内存管理
- [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 一次性注入 ~156k tokens 耗尽上下文窗口
- [#1329](https://github.com/anthropics/skills/issues/1329) **compact-memory**（符号化紧凑状态表示）

### 5. 🧩 协议化与互操作
- [#16](https://github.com/anthropics/skills/issues/16) 将 Skills 暴露为 MCP
- [#189](https://github.com/anthropics/skills/issues/189) `document-skills` 与 `example-skills` 插件内容重复
- [#1385](https://github.com/anthropics/skills/issues/1385) 推理质量门管道（前置校准 → 对抗评审 → 交付验证）

### 6. 🤖 治理类（已关闭但仍有需求）
- [#412](https://github.com/anthropics/skills/issues/412)（CLOSED）**agent-governance**：策略执行、威胁检测、信任评分、审计追踪
- [#12](https://github.com/anthropics/skills/issues/12) docx 空白字符再格式化导致 Word 不可读

---

## 三、高潜力待合并 Skills

这些 PR 同时具备 **强需求信号 + 尚未合并**，最有可能在近期落地：

| PR | Skill | 落地价值 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 修复（recall=0%） | **阻塞性最高**：影响所有依赖 description 优化的 Skill 开发者 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 通用、模型无关，覆盖文件验证 + 推理质量门 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 直接影响所有文档生成场景，用户感知度高 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow | 长期打磨，企业落地诉求明确 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | skill-creator Windows 兼容 | 解决跨平台阻塞（与 #1298 主题同源） |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写引用修复 | 修复跨平台（Linux）静默断裂 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 让两个 Skill 通过 `skills-ref validate` | 保证仓库自身符合它所定义的规范 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是"Skills 的可信赖度与工业化成熟度"** —— 从 skill-creator 的核心评估机制失灵、namespace 信任边界被滥用，到 description 优化对噪声做功、根因型 Bug 在文档类 Skill 中反复出现，本质都在追问同一个问题：**当 Skills 进入生产工作流，谁来保证它们是可度量、可验证、可治理的？** 元技能（quality-analyzer / security-analyzer / self-audit）和治理类提案（agent-governance / 质量门管道）的集中涌现，正是对这一诉求的系统性回应。

---

*附：数据局限性说明——PR 的评论数字段在抓取时返回 `undefined`，本报告以"交叉引用 Issue 评论数 + 更新时间 + 关联 PR 数量"作为关注度的代理信号；Issues 评论数则取自仓库原始数据。*

---

<think>Let me analyze the GitHub data for Claude Code community dynamics on 2026-08-16 and generate a structured Chinese daily report.

Key observations from the data:
1. No releases in past 24 hours
2. 50 issues updated, showing top 30 by comment count
3. 3 PRs updated

Let me identify the most important items:

**Top Issues by comments:**
1. #27302 - Multiple Connector accounts (229 comments, 346 likes) - TOP FEATURE REQUEST
2. #84352 - CVP-approved orgs getting cyber blocks (102 comments)
3. #50246 - Message queue mode (56 comments, 197 likes) - HIGH ENGAGEMENT
4. #80444 - Windows desktop GPU crash (34 comments)
5. #65925 - Background Agent stuck in /workflows (7 comments)
6. #68625 - Desktop kills background tasks after 15min (5 comments)
7. #77830 - Claude-Session attribution trailer ignored (5 comments)
8. #77212 - PreToolUse "ask" auto-approved in bypassPermissions (5 comments)
9. #78527 - PreToolUse deny regression in 2.1.210 (5 comments)
10. #86362 - Browser pane blocks local dev (5 comments)

**PRs (only 3, all recent):**
1. #84600 - Enable frontend-design plugin at project scope (CLOSED)
2. #82981 - Claude/automatizar inventario insumos (OPEN)
3. #86870 - Fix CVP false-positive during security research (OPEN)

**Trends I notice:**
- Many Windows desktop/MSIX issues
- Many PreToolUse hook permission issues (multiple related bugs)
- Memory/sync across devices and claude.ai vs Claude Code
- Cyber Verification Program (CVP) issues
- Browser pane rendering issues
- Plugin/skill management bugs

Let me now create a structured Chinese daily report.</think>

# Claude Code 社区动态日报
**2026-08-16**

---

## 1. 今日速览

今日社区焦点集中在 **权限与 Hook 系统的回归性缺陷**——多条 v2.1.21x 版本后出现的 PreToolUse hook 行为异常被反复复现并引发开发者讨论；同时 **多 Connector 账户支持（#27302）** 继续保持最高热度，社区已自发整理出详尽方案论证。Windows 桌面端 MSIX 安装链路、自动更新后的会话挂起、跨设备/跨产品（claude.ai ↔ Claude Code）配置同步也成为本日新增议题的主线。

---

## 2. 版本发布

⚠️ 过去 24 小时内无新版本发布（无 Releases）。

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 关键意义 |
|---|-------|------|----------|
| 1 | **[#27302]** 支持同一 Connector 的多账户（claude.ai/code） | 229 💬 / 346 👍 | **TOP 1 长期功能请求**，作者提供了完整架构方案，已成为同类诉求的事实标准 |
| 2 | **[#84352]** CVP 已批准的 Claude.ai 组织仍被 cyber-safeguard 拦截 | 102 💬 / 19 👍 | 影响企业级用户合规流程，Verification Portal 状态显示异常 |
| 3 | **[#50246]** 消息队列模式：排队而非打断活跃任务 | 56 💬 / 197 👍 | 解决用户工作流核心痛点，互动质量极高，已被官方标记 enhancement |
| 4 | **[#80444]** Windows 桌面 1.24012.1 致命 GPU 进程崩溃 | 34 💬 | GPU 0x060C201E 致 MSIX 包不可启动，仅 Repair 可恢复，跨双驱动复现 |
| 5 | **[#77212]** bypassPermissions 下 PreToolUse "ask" 被静默自动批准 | 5 💬 | 权限模型存在明显安全语义不一致：deny 生效、ask 不生效 |
| 6 | **[#78527]** v2.1.210 回归：PreToolUse prompt-hook deny 直接中断整个 turn | 5 💬 | 影响 LLM 安全审判 hook 模式，与官方文档契约不一致 |
| 7 | **[#77110]** "allow" hook 对 `cd … 2>/dev/null \|\| cd …` 复合命令无效 | 3 💬 | 此前 2.1.207 修复不完整，permissions 体系持续暴露边界问题 |
| 8 | **[#86362]** Browser Pane 拦截本地开发子资源（ERR_BLOCKED_BY_CLIENT） | 5 💬 / 4 👍 | `/etc/hosts` 映射 127.0.0.1 的域名整页空白，影响本地开发体验 |
| 9 | **[#86344]** 桌面自动更新 1.26832.0→1.28929.0 后会话恢复/跨会话消息挂死 | 2 💬 / 2 👍 | watchdog ~980s 后 kill，sessions 间通信受影响 |
| 10 | **[#77898]** 单一 stub transcript 致整个项目 /resume 列表为空 | 2 💬 | 一个 416 字节坏文件可隐藏 33 个健康会话，属于数据完整性缺陷 |

🔗 **详细链接：**
- [#27302](https://github.com/anthropics/claude-code/issues/27302)
- [#84352](https://github.com/anthropics/claude-code/issues/84352)
- [#50246](https://github.com/anthropics/claude-code/issues/50246)
- [#80444](https://github.com/anthropics/claude-code/issues/80444)
- [#77212](https://github.com/anthropics/claude-code/issues/77212)
- [#78527](https://github.com/anthropics/claude-code/issues/78527)
- [#77110](https://github.com/anthropics/claude-code/issues/77110)
- [#86362](https://github.com/anthropics/claude-code/issues/86362)
- [#86344](https://github.com/anthropics/claude-code/issues/86344)
- [#77898](https://github.com/anthropics/claude-code/issues/77898)

---

## 4. 重要 PR 进展

> 过去 24 小时仅 3 条 PR 更新，活跃度偏低。

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | **[#84600]** 在项目作用域启用 frontend-design 插件 | 🟣 CLOSED | 注册 anthropics 官方 marketplace 并自动加载前端设计 skill |
| 2 | **[#82981]** automatizar inventario insumos (自动化库存管理) | 🟢 OPEN | 仓库级自动化脚本（西班牙语描述，背景信息有限） |
| 3 | **[#86870]** 修复安全研究期间的 CVP 误报状态变更 | 🟢 OPEN | 在 `security-guidance/hooks/review_api.py` 增加授权实验环境识别，降低合法研究被误判为安全事件的概率 |

🔗 **链接：**
- [#84600](https://github.com/anthropics/claude-code/pull/84600)
- [#82981](https://github.com/anthropics/claude-code/pull/82981)
- [#86870](https://github.com/anthropics/claude-code/pull/86870)

---

## 5. 功能需求趋势

从 50 条活跃 issue 中提炼出**五大高优方向**：

### 📡 5.1 跨产品/跨设备一致性（热度上升）
- **#87028** claude.ai ↔ Claude Code 无共享上下文路径
- **#87027** Windows 双机账户级 user config 与 auto-memory 同步缺失
- **#86999** Windows 原生安装未将 `~\.local\bin` 写入 PATH
- 反映出 Max/Team 计划用户对**登录即随行**的体验期待强烈。

### 🪝 5.2 Hook & Permissions 系统健壮性（高频痛点）
- 同窗口内 4 条 issue（#77212、#78527、#77110、#77212 系列）指向同一根因：v2.1.21x 重构后 PreToolUse 钩子的 `allow`/`ask`/`deny` 语义与文档契约偏离。
- 涉及**复合命令解析、prompt-style hook、bypassPermissions 模式**，是当前最不稳定模块。

### 🖥️ 5.3 Windows 桌面 / MSIX 体验治理（持续累积）
- GPU 进程崩溃、后台任务被 WarmLifecycle 杀、Bash Cowork 设备兼容性、PATH 缺失等密集出现（#80444、#68625、#87024、#86999）。

### 🔌 5.4 Connector / 多账户体系（长期 TOP）
- #27302 仍居首，多账户是面向企业 SSO / 顾问型用户的**关键缺失能力**。

### 💾 5.5 Memory 与会话持久化
- #77898 stub 文件污染、#76868（已 CLOSED）frontmatter 被覆盖、#87023 跨会话记忆综述——指向 auto-memory 系统的**原子性与恢复能力不足**。

---

## 6. 开发者关注点（高频痛点）

1. **Hook 权限契约"半失效"** — 开发者反馈：在 `bypassPermissions` 模式下，`ask` 被静默 `allow`、`deny` 又直接终止 turn，难以构建稳定的 LLM 安全网关层（#77212、#78527、#77110）。
2. **MSIX 包升级失败导致应用不可启动** — 桌面端 GPU 崩溃后必须手动 Repair；后台进程 (`run_in_background`) 静默被杀，影响长跑任务（#80444、#68625）。
3. **本地开发体验被 Browser Pane 阻断** — `ERR_BLOCKED_BY_CLIENT` 让 localhost 页面无法渲染子资源（#86362）。
4. **跨设备/跨产品不同步** — 用户明确指出"登录身份"与"工作配置"已脱钩（#87027、#87028）。
5. **/resume 数据完整性隐患** — 一个损坏文件可"吞掉"整项目会话列表（#77898）。
6. **`claude setup-token` 长效 token 首次调用 400** — Max 20x 账户全新 token 即遭拒，与同账户交互模式不一致（#86986）。
7. **CVP 合规误判** — 已批准组织仍被 safeguard 拦截，Verification Portal 状态回退（#84352），对安全研究类 PR（#86870）形成连锁影响。

---

📌 **TL;DR 给开发者**：如果你正在基于 Claude Code 构建自动化或安全网关，请**避开 v2.1.21x 的 prompt-style PreToolUse hook**，并关注下一个补丁对 bypassPermissions 语义的统一修复；Max/Team 用户在 Windows 多机场景下仍需手动同步配置，短期内建议自行用 dotfiles 管理 settings 与 memory 目录。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a Chinese daily report for OpenAI Codex community dynamics based on the provided GitHub data dated 2026-08-16. Let me analyze the data carefully and structure the report.

Key observations:
1. Two alpha releases: rust-v0.148.0-alpha.20 and rust-v0.148.0-alpha.19 (no detailed release notes provided)
2. Many issues are about Windows app performance problems - stuttering, freezing, crashes
3. macOS issues with Computer Use service spawn storms causing crashes
4. Storage/disk space issues - rollout files growing to hundreds of GiB
5. 404 errors on backend API endpoints
6. PRs are mostly internal refactors and improvements (copyberry bot seems to be OpenAI's internal bot)
7. Notable: issue #20214 has 104 comments and 85 thumbs up - very high engagement on Windows stuttering

Let me organize:

**Hot Issues (top 10 by engagement):**
1. #20214 - Windows 11 Pro stuttering (104 comments, 85 👍) - highest engagement
2. #3550 - VS Code project scoping (34 comments, 79 👍) - closed/enhancement
3. #38546 - Windows desktop mouse stutter (25 comments)
4. #28109 - Windows Desktop mouse freezes (23 comments)
5. #38455 - macOS Computer Use OOM crash (18 comments)
6. #25921 - Crashpad dumps consuming 5GB/day (17 comments)
7. #35746 - Paginated history bug (13 comments)
8. #18629 - Base64 tool images poisoning threads (12 comments)
9. #29070 - Codex App couldn't read terminal (12 comments)
10. #31433 - Unindexed rollout files (12 comments)

**Important PRs (top 10):**
1. #38819 - Support metadata staging for reserved thread IDs
2. #38817 - Add raw config overrides to TypeScript SDK
3. #38806 - Add health endpoint to code-mode gRPC listener
4. #38800 - Route executor policy audits through log-only telemetry
5. #38795 - Add storage diagnostics to codex doctor
6. #38788 - Show resume and fork status during TUI startup
7. #38785 - Keep active-turn model settings stable
8. #38774 - Use paginated history for persistent exec threads
9. #38767 - Forward workload identity context during token exchange
10. #38705 - Add MCP tool handler support to hooks engine

**Feature Trends:**
- Windows desktop app stability/performance (dominant)
- macOS Computer Use service crashes
- Storage/disk bloat from rollout files
- VS Code integration (workspace scoping)
- Session/history management
- Backend API 404 errors

**Developer pain points:**
- Massive disk usage from sessions (hundreds of GiB)
- App stability on Windows
- Computer Use service causing system crashes on macOS
- API endpoint 404 errors affecting compact/resume

Let me write a professional Chinese daily report.</think>

# OpenAI Codex 社区动态日报
**2026-08-16**

---

## 📌 今日速览

今日 Codex 仓库发布了 **rust-v0.148.0-alpha.19** 与 **rust-v0.148.0-alpha.20** 两个 Alpha 版本，内部迭代密集。社区热度集中在 **Windows 桌面端的严重卡顿/冻结问题**（#20214 单条 Issue 评论数突破 104 条），同时 macOS 端 `SkyComputerUseService` 进程风暴导致的 OOM 崩溃，以及 CLI/Desktop 会话回放文件无限制膨胀（已达数百 GiB）成为开发者最迫切的痛点。

---

## 🚀 版本发布

| 版本 | 类型 | 备注 |
|------|------|------|
| `rust-v0.148.0-alpha.20` | Alpha | 内部迭代，无公开 changelog |
| `rust-v0.148.0-alpha.19` | Alpha | 内部迭代，无公开 changelog |

> 注：两个版本均无详细发布说明，可结合下文的 PR 变更了解方向（TS SDK 配置覆盖、TUI 性能优化、分页历史等）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#20214](https://github.com/openai/codex/issues/20214) — Windows 11 Pro 频繁卡顿/冻结
- **评论数**：104 | 👍 85
- 长期未解决的高优 Issue。Codex App 即便系统资源充足（Ryzen 5 5600 / 32GB RAM）仍出现严重卡顿，标签覆盖 `bug / windows-os / app / performance`。
- **社区反应**：大量用户复现并附上硬件与日志，已成为 Windows 用户"必踩"问题。

### 2. [#3550](https://github.com/openai/codex/issues/3552) — Codex 会话按 VS Code 项目/工作区隔离（已关闭）
- **评论数**：34 | 👍 79
- 高赞 Enhancement：要求将 VS Code 扩展中的 Codex 会话限定到当前项目/工作区，避免"Recent Tasks"混入其他工程的对话。该 Issue 已被关闭，建议关注后续落地。

### 3. [#38546](https://github.com/openai/codex/issues/38546) — Windows 桌面端未提权运行导致全局鼠标卡顿
- **评论数**：25 | 👍 11
- 现象与 #20214 类似，但触发条件更具体——非提权运行时整个系统鼠标指针出现规律性卡顿。

### 4. [#28109](https://github.com/openai/codex/issues/28109) — 打开 Codex 后 Windows 出现短暂输入冻结（已关闭）
- **评论数**：23 | 👍 14
- 与大 `sessions` 目录相关，打开 Codex 后鼠标与键盘会出现 1–2 秒停顿。原 Issue 已关闭，需关注是否彻底解决。

### 5. [#38455](https://github.com/openai/codex/issues/38455) — macOS ChatGPT Desktop 反复拉起 Computer Use 进程并 V8 OOM 崩溃
- **评论数**：18 | 👍 6
- 26.810.41047 版本启动 98 秒后 SIGABRT；崩溃时 316 个线程中 187 个为 computer-use，疑似进程回收逻辑异常。

### 6. [#25921](https://github.com/openai/codex/issues/25921) — Crashpad pending dumps 无限制累积（每天 5GB+）
- **评论数**：17 | 👍 9
- macOS 端 `Crashpad/pending` 目录 1 天内产出 4.9G / 54,504 个 `.dmp` + `_sidecar.json` 文件，存储被静默吞噬。

### 7. [#35746](https://github.com/openai/codex/issues/35746) — 分页回放历史丢数据并复用 ordinal
- **评论数**：13 | 👍 0
- CLI 0.146.x 中 `RolloutLine` 解码不一致，会话历史不可靠，影响 resume/审计。

### 8. [#18629](https://github.com/openai/codex/issues/18629) — 内联 base64 图片"投毒"会话线程
- **评论数**：12 | 👍 2
- `function_call_output` 中 `input_image` 的 base64 内容持久化到历史，累积后触发 `{"detail":"Bad Request"}` 并推高 token 消耗。

### 9. [#29070](https://github.com/openai/codex/issues/29070) — Codex App 无法读取终端输出
- **评论数**：12 | 👍 0
- Windows 桌面端在特定 thread 中 view terminal 失效，影响 agent 调试体验。

### 10. [#31433](https://github.com/openai/codex/issues/31433) — 合法 rollout 文件未入索引且无 reindex 修复路径
- **评论数**：12 | 👍 0
- WSL 场景下 standalone Windows 安装 + WSL agent 组合出现状态数据库与磁盘文件不同步，缺乏官方修复工具。

---

## 🛠️ 重要 PR 进展（Top 10）

> PR 几乎全部由 OpenAI 内部 bot `copyberry[bot]` 提交，反映 Rust CLI/TUI/SDK 的密集重构。

| PR | 主题 | 亮点 |
|----|------|------|
| [#38819](https://github.com/openai/codex/pull/38819) | 支持预留 Thread ID 的元数据暂存 | 新增 `ThreadManager::reserve_thread_id`，允许 Core 启动前绑定宿主状态 |
| [#38817](https://github.com/openai/codex/pull/38817) | TypeScript SDK 增加 raw config 覆盖 | `CodexOptions.configOverrides` 支持以 `--config key=value` 形式传递 TOML，绕开结构化配置的局限性 |
| [#38806](https://github.com/openai/codex/pull/38806) | code-mode gRPC listener 增加 `/healthz` | 仅 HTTP/1.1+HTTP/2 暴露健康检查，业务接口仍强校验 HTTP/2 |
| [#38800](https://github.com/openai/codex/pull/38800) | 执行器策略审计改走 log-only 遥测 | 转发网络策略决策进入 `codex_otel.log_only`，避免污染持久化状态日志 |
| [#38795](https://github.com/openai/codex/pull/38795) | `codex doctor` 增加存储诊断 | 报告 `CODEX_HOME` 与 worktree 可用空间，<5GiB 警告 / <1GiB 失败；Windows 校验 Dev Drive |
| [#38788](https://github.com/openai/codex/pull/38788) | TUI 启动期显示 resume/fork 状态 | 在占位 composer 上方展示 `Resuming session…` / `Forking session…` 提示 |
| [#38785](https://github.com/openai/codex/pull/38785) | 锁定活跃 turn 的模型设置 | 防止 turn 中途模型配置被切换，保证单轮推理参数稳定 |
| [#38774](https://github.com/openai/codex/pull/38774) | `codex exec` 持久线程使用分页历史 | 持久线程优先走分页读取，不支持的 store 自动回退旧路径 |
| [#38767](https://github.com/openai/codex/pull/38767) | Token 交换时转发 workload identity 上下文 | 透传 `OPENAI_WORKLOAD_IDENTITY_CONTEXT`，并在日志中脱敏 |
| [#38705](https://github.com/openai/codex/pull/38705) | Hooks 引擎支持 MCP tool handler | 发现同步 `mcp_tool` hook handler，调用其配置的 MCP server/tool，并展开嵌套占位符 |

---

## 📈 功能需求趋势

1. **Windows 桌面端稳定性与性能** — 占比最高。几乎所有高评论 Issue 都集中在卡顿、冻结、鼠标停顿，标签 `windows-os / app / performance` 成为"流量担当"，反映出 v26.810 系列在 Windows 上仍未走出质量低谷。

2. **macOS Computer Use 进程治理** — `SkyComputerUseService` / `Computer Use workers` 失控生成是近一周的热门话题（#38455、#38744、#38760、#38769），用户呼吁加 spawn rate limit / 复用现有 worker。

3. **会话与回放存储可观测性** — #25921、#30779、#34337、#35470、#35746、#31433 共同指向一个事实：**rollout 文件可静默膨胀至数百 GiB**，开发者需要磁盘配额、压缩、过期清理与 `codex doctor` 类诊断。

4. **IDE 集成深化** — #3550 关闭但诉求未消：VS Code/工作区隔离、多 IDE 支持、终端集成体验（#29070）持续被关注。

5. **后端 API 兼容性** — `/backend-api/codex/responses/compact` 在 CLI 0.146、Desktop 26.519 等多个版本上返回 404（#38323、#38706），提示近期有接口调整或区域可用性问题。

6. **历史/会话正确性** — #18629、#35746 反映出对 base64 内联、分页回放解码的稳健性担忧，直接关系到 resume 与 token 计费。

---

## 🧑‍💻 开发者关注点与痛点

- **磁盘被静默吃光**：subagent fork 会话（#30779）、图片重复复制（#35470）、Crashpad dumps（#25921）、长期 rollout（#34337）四类问题叠加，单用户单日可产生 400 GiB+，亟需官方配额与清理工具。
- **App 启动即崩坏**：26.810.4xxxx 系列在 macOS/Windows 双端出现启动 ~90–120 秒后 OOM 或 kernel panic，社区已自发整理多个 Issue 关联表。
- **后端 compact 接口 404**：影响 CLI 与 Desktop 的上下文自动压缩，对 Pro/Plus 订阅用户体验直接造成"用着用着就报错"（#38323、#38706、#37742）。
- **TUI 体验细节**：CRLF 粘贴双倍换行（#38704 已修复）、TUI 中残留 CLI dev-dep（#38746 已清理）、resume/fork 无状态提示（#38788 已修复）—— 体验向细节正在被密集打磨。
- **签名与发布物可信度** — #38814 指出 npm SDK 中 macOS arm64 二进制无法通过严格代码签名校验，提示供应链验证流程仍需完善。
- **远程控制 / MCP elicitation** — #35351、#38707 暴露远程 streamable HTTP 下 MCP 行为与本地 stdio 不一致，远程场景需要更清晰的 capability 协商。

---

*数据时间窗：2026-08-15 ~ 2026-08-16 UTC · 来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI and generate a comprehensive daily report in Chinese for 2026-08-16.

Key observations:
1. New nightly release: v0.56.0-nightly.20260816.g2a87e7be1
2. 50 issues updated, 12 PRs updated in past 24 hours
3. Major themes:
   - Subagent issues (recovery, hangs, settings overrides)
   - Auto Memory system bugs (multiple issues from SandyTao520)
   - Browser agent issues (wayland, settings, session takeover)
   - Security concerns (SSRF, sandbox Dockerfile)
   - Model availability (preview model silent substitution)
   - Authentication errors (401 false positives)
   - Shell command execution hangs
   - AST-aware tooling investigations
   - Behavioral evaluations expansion

Let me pick the most important issues and PRs:

Top 10 Issues (by comments and importance):
1. #22323 - Subagent recovery after MAX_TURNS (12 comments, P1)
2. #21409 - Generalist agent hangs (8 comments, 8 thumbs, P1)
3. #24353 - Robust component level evaluations (7 comments, P1)
4. #22745 - AST-aware file reads/search (7 comments, P2)
5. #21968 - Gemini doesn't use skills/sub-agents enough (6 comments, P2)
6. #26522 - Stop Auto Memory retrying low-signal sessions (5 comments, P2)
7. #11802 - OTLP headers for telemetry (4 comments, 7 thumbs, P2)
8. #26525 - Deterministic redaction in Auto Memory (4 comments, P2)
9. #25166 - Shell command "Waiting input" hang (4 comments, 3 thumbs, P1)
10. #22232 - Browser agent session takeover/lock recovery (4 comments, P3)

Top 10 PRs:
1. #28831 - Release version bump (nightly)
2. #28828 - Warn when preview model silently substituted (P1)
3. #28827 - Avoid false authentication errors for 401 substrings
4. #28769 - Add .opencode to .gitignore
5. #28823 - Evals tracker relationships error recovery
6. #28824 - Evals multi-tool chain, context safety, security
7. #28822 - Evals todos tasks tracker
8. #28679 - Vertex AI 401 error message improvement
9. #28606 - Setapart (closed)
10. #28608 - Fall back to stable models (closed)
11. #28725 - Fix SSRF via DNS resolution bypass (P1)
12. #28726 - Upgrade sandbox Dockerfile to node:22-slim (P1)

I'll pick 10 of the most relevant PRs.

Let me now write a structured Chinese daily report.</think>

# Gemini CLI 社区动态日报
**日期**: 2026-08-16
**数据源**: github.com/google-gemini/gemini-cli

---

## 📌 今日速览

Gemini CLI 今日发布了新的 nightly 版本 `v0.56.0-nightly.20260816.g2a87e7be1`，社区讨论焦点集中在 **Agent 可靠性**与 **Auto Memory 系统安全**上——多个 P1 级别 bug 暴露了 Subagent 在 MAX_TURNS 超限后状态报告失真、Generalist Agent 偶发挂死等核心问题；同时 SSRF 安全漏洞修复和 Auto Memory 的密钥泄露风险也引发关注。多个 PR 聚焦于 preview model 静默替换告警、401 错误误判修复等模型可用性关键路径。

---

## 🚀 版本发布

### v0.56.0-nightly.20260816.g2a87e7be1
夜间构建版本发布，主要为常规自动化版本号 bump。完整变更日志可通过以下链接查看：
🔗 [v0.56.0-nightly.20260815...v0.56.0-nightly.20260816](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260815.g2a87e7be1...v0.56.0-nightly.20260816.g2a87e7be1)

---

## 🔥 社区热点 Issues

### 1. [P1] #22323 - Subagent 在 MAX_TURNS 后错误报告 GOAL 成功（12 评论）
**作者**: @matei-anghel
`codebase_investigator` 子代理在达到最大轮次限制后仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断信息，可能导致用户误判任务完成状态。这是 agent 状态机一致性的关键问题。
🔗 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. [P1] #21409 - Generalist Agent 挂死（8 评论，👍 8）
**作者**: @turmanticant
当 Gemini CLI 调用 generalist agent 处理简单任务（如创建文件夹）时会无限挂起，用户需等待长达一小时后手动取消。临时方案是显式指示模型不使用子代理。此为高频痛点之一。
🔗 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. [P1] #24353 - 组件级评测体系（Robust component-level evaluations）（7 评论）
**作者**: @gundermanc
跟进此前引入的"行为评测"工作，自 EPIC 创建以来已生成 76 项行为评测，覆盖 6 个 Gemini 模型版本。目标是构建更细粒度的组件质量度量体系。
🔗 [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 4. [P2] #22745 - AST 感知的文件读取/搜索/映射价值评估（7 评论）
**作者**: @gundermanc
探索 AST 感知工具（基于 tilth/glyph）的潜力：精准定位方法边界、降低读取轮次、改进代码库导航。如成功将显著降低 token 噪声与误读成本。
🔗 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 5. [P2] #21968 - Gemini 很少主动使用 skills 和 sub-agents（6 评论）
**作者**: @rnett
开发者反馈 Gemini CLI 几乎不会自动调用自定义 skills（如 gradle、git）和子代理，除非显式提示。这是一个 agent 自驱能力的设计缺陷。
🔗 [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 6. [P2] #26522 - Auto Memory 无限重试低信号会话（5 评论）
**作者**: @SandyTao520
当提取 agent 判定某会话为"低信号"并跳过读取时，该会话永远不会被标记为已处理，会反复出现在候选队列中，导致资源浪费。
🔗 [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 7. [P2] #11802 - Telemetry 添加 OTLP Headers（4 评论，👍 7）
**作者**: @jerop
用户需要为 OTEL Collector 发送 metrics/logs 时附加认证 headers，需要在 settings.json、环境变量等位置支持自定义 OTLP headers。
🔗 [#11802](https://github.com/google-gemini/gemini-cli/issues/11802)

### 8. [P2] #26525 - Auto Memory 需确定性密钥脱敏（4 评论）
**作者**: @SandyTao520
**安全问题**：Auto Memory 将本地 transcript 内容发送给提取 agent 模型，由模型在上下文中负责 redact 密钥，存在密钥泄露风险。需改为确定性 pre-redaction。
🔗 [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)

### 9. [P1] #25166 - Shell 命令完成后卡在"Waiting input"（4 评论，👍 3）
**作者**: @rnett
极简单的 CLI 命令执行完成后，CLI 仍显示 shell 命令活跃状态并等待用户输入，需要手动取消。影响所有使用 shell 工具的工作流。
🔗 [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 10. [P3] #22232 - Browser Agent 弹性增强：会话接管与锁恢复（4 评论）
**作者**: @hsm207
当前 BrowserManager 在遇到锁定 profile 时采用 fail-fast 策略（持久化模式下已有实例或孤立进程时），需增强为自动接管与恢复机制。
🔗 [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)

---

## 🛠️ 重要 PR 进展

### 1. #28831 - chore/release: 版本号 bump 到 nightly
**作者**: @gemini-cli-robot（机器人）
自动化夜间发布版本号 bump。
🔗 [#28831](https://github.com/google-gemini/gemini-cli/pull/28831)

### 2. #28828 - [P1] 当 preview model 被静默替换时发出警告
**作者**: @chelsealong | **大小**: M
修复 #28825。当用户请求 `gemini-3.1-pro-preview` 但账号无 preview-model 权限时，Config 会静默回退到 `auto-gemini-2.5` 别名且无任何提示——本次修复将增加显式告警。
🔗 [#28828](https://github.com/google-gemini/gemini-cli/pull/28828)

### 3. #28827 - 修复 401 子串导致的误判鉴权错误
**作者**: @mikemikimike | **大小**: S
修复 #28203。`isAuthenticationError` 曾将所有包含 `401` 的字符串（如端口号、退出码、错误码）误判为鉴权失败。现仅在消息开头或 HTTP/status 上下文出现时才识别。
🔗 [#28827](https://github.com/google-gemini/gemini-cli/pull/28827)

### 4. #28769 - 将 .opencode 添加到 .gitignore
**作者**: @love-be | **大小**: XS
OpenCode IDE 生成的配置目录不应纳入版本控制。
🔗 [#28769](https://github.com/google-gemini/gemini-cli/pull/28769)

### 5. #28823 - Evals: tracker 关系与错误恢复行为评测
**作者**: @ved015 | **大小**: XL
为任务图依赖（`tracker_add_dependency`）、任务图可视化（`tracker_visualize`）、文件路径错误恢复（404 后重新搜索读取）、shell 命令失败诊断重试添加行为评测。
🔗 [#28823](https://github.com/google-gemini/gemini-cli/pull/28823)

### 6. #28824 - Evals: 多工具链、上下文安全、安全边界评测
**作者**: @ved015 | **大小**: L
为多工具链工作流、大文件的上下文安全处理、敏感文件/目录的安全边界强制执行添加行为评测。
🔗 [#28824](https://github.com/google-gemini/gemini-cli/pull/28824)

### 7. #28822 - Evals: write_todos / complete_task / tracker 状态查询评测
**作者**: @ved015 | **大小**: XL
为任务规划（`write_todos`）、任务完成信号（`complete_task`）、tracker 状态查询（`tracker_list_tasks`、`tracker_get_task`）添加行为评测。
🔗 [#28822](https://github.com/google-gemini/gemini-cli/pull/28822)

### 8. #28679 - [P2] 改进 Vertex AI 401 错误信息（使用标准 API key 时）
**作者**: @SHAI-nikhil-chaudhary | **大小**: S
用户用 vertex-ai auth 类型但只提供了 Gemini API key 时，错误提示不够明确，本次改进开发者体验。
🔗 [#28679](https://github.com/google-gemini/gemini-cli/pull/28679)

### 9. #28725 - [P2][安全] 修复 web-fetch 的 SSRF（DNS 解析绕过）
**作者**: @alifakbxr | **大小**: M
**重要安全修复**：修复 #28555 中的 SSRF 漏洞（CVSS 8.6）。恶意攻击者可通过指向私有/loopback IP（如 `169.254.169.254`）的自定义域绕过 DNS 防护，访问云元数据服务。
🔗 [#28725](https://github.com/google-gemini/gemini-cli/pull/28725)

### 10. #28726 - [P1][安全] 沙箱 Dockerfile 升级至 node:22-slim
**作者**: @alifakbxr | **大小**: S/M
**重要安全修复**：Node 20 已接近 EOL，停止接收安全更新。修复 #28584，将 Sandbox 与 cloudrun Dockerfile 全面升级到 node:22-slim 以获取最新 CVE 修复。
🔗 [#28726](https://github.com/google-gemini/gemini-cli/pull/28726)

---

## 📈 功能需求趋势

从所有 Issues 中提炼出以下社区最受关注的方向：

| 方向 | 代表性 Issue | 关注度 |
|---|---|---|
| **Agent 可靠性** | #22323、#21409、#22093、#25166 | 🔥 极高 |
| **Auto Memory 安全与质量** | #26522、#26525、#26523、#26516 | 🔥 高（今日 4 项集中修复）|
| **AST 感知工具** | #22745、#22746 | 中高 |
| **Browser Agent 健壮性** | #22232、#22267、#21983 | 中高 |
| **模型可用性与回退** | #28828(PR)、#28608(PR) | 中 |
| **评测体系扩展** | #24353、#28822/23/24(PR) | 中 |
| **可观测性 / Telemetry** | #11802 | 中 |
| **Agent 自驱能力** | #21968、#21432 | 中 |
| **安全（SSRF、Node EOL）** | #28725、#28726(PR) | 中（重要 PR）|

---

## 💡 开发者关注点

综合今日 issue 与 PR 反馈，开发者社区的核心痛点和需求集中在以下方面：

1. **🪲 Agent 状态报告可信度**：Subagent 在异常（MAX_TURNS、generalist 挂死）时仍上报"成功"，严重破坏用户对任务进度的信任。需要更细粒度的 Termination Reason 与回退状态设计。

2. **🧠 Auto Memory 的安全性与可靠性**：本地 transcript 内容会被发送给模型，且由模型负责 redact 密钥——这是潜在的信息泄露渠道。同时低信号会话的无限重试也消耗资源。今日 4 项集中修复显示这是团队当前重点。

3. **🤖 Agent 缺乏自驱使用工具的"本能"**：自定义 skills（gradle、git）和 sub-agents 几乎不会被 Gemini 自动调用，必须显式提示。开发者期望 agent 能像 IDE 中的 Copilot 一样"主动发现可用工具"。

4. **🔐 错误信息需要更明确**：401 误判（端口号被识别为鉴权失败）、Vertex AI 鉴权类型错误、preview model 静默降级——所有这些都让用户在排错时浪费大量时间。

5. **🐚 Shell 工作流的稳定性**：极简单的 shell 命令在执行后仍显示"Waiting input"，使得常规开发工作流频繁中断。

6. **🔧 跨平台兼容**：Browser Agent 在 Wayland 下失败、~/.gemini/agents 中的 symlink 不被识别等兼容性细节，影响 Linux 高级用户。

7. **📊 评测基建投资加大**：连续 3 个 XL/L 规模的 evals PR 上线，反映团队正系统性构建组件级行为评测体系，这是产品质量长期保障的关键投入。

---

*报告生成时间：2026-08-16 · 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics on 2026-08-16. Let me analyze the data provided:

1. No releases in the past 24 hours
2. 17 issues updated in the past 24 hours
3. 2 PRs updated in the past 24 hours

Let me categorize and prioritize the issues:

**High priority / high engagement issues:**
- #3392 - Bash tool breaks on NixOS (9 thumbs up, 4 comments) - platform/Linux issue
- #4480 - Atlassian MCP OAuth fails (6 thumbs up, 4 comments) - closed regression
- #2934 - Support protobuf OTLP export (6 thumbs up, 2 comments) - closed feature
- #4346 - MCP registry 403 for Actions GITHUB_TOKEN (3 thumbs up, 2 comments) - closed CI issue
- #4275 - ACP: expose contextTier as session config (1 thumb, 2 comments) - feature
- #4438 - disable-model-invocation makes skill unreachable (1 thumb, 2 comments) - skill bug
- #3565 - Task tool silently downgrades subagent model (1 thumb, 1 comment) - closed agents bug
- #4421 - MCP initialize handshake 60s budget (0 thumbs, 1 comment) - MCP reliability
- #4491 - /spawn command template bug (0 thumbs, 1 comment) - sessions/agents

**Newer issues (recent):**
- #4502 - Add way to un-archive session
- #4490 - Atlassian MCP OAuth broken in 1.0.80 (regression)
- #4493 - /restart fails in sessions created with -w
- #4494 - Newly enabled model remains unavailable
- #4495 - Add support for GPT-5.6 reasoning.mode
- #4499 - v1.0.79 fatal OOM in autopilot
- #4500 - BYOK autopilot nudge breaks prompt caching
- #4501 - Codespaces ships Copilot CLI 1.0.3 update issues

**PRs:**
- #4497 - Handle fork PR associations (OPEN)
- #4449 - Migrate PR automation (CLOSED)

Let me structure the report properly. I need to:
1. Brief overview (2-3 sentences)
2. Releases (skip since none)
3. Top 10 issues worth following
4. Important PR progress (only 2 PRs, but I'll cover them)
5. Feature request trends
6. Developer pain points

Let me think about feature request trends from the issues:
- MCP improvements (#4480, #4490, #4346, #4421) - OAuth, CI auth, handshake timeouts
- New model support (#4495 - GPT-5.6 reasoning.mode, #4494 - model catalog refresh)
- Session management (#4502 - un-archive, #4493 - /restart, #4491 - /spawn)
- Platform support (#3392 - NixOS, #4501 - Codespaces)
- Observability (#2934 - protobuf OTLP)
- ACP parity (#4275 - contextTier)

Developer pain points:
- Multiple MCP/OAuth regressions in recent versions
- Stability issues (OOM in autopilot)
- Prompt caching broken in BYOK mode
- Platform-specific issues (NixOS, Codespaces, Windows)
- Session lifecycle bugs (/restart, /spawn, un-archive)
- Subagent model selection silently ignored

Let me write this in Chinese now.</think>

# GitHub Copilot CLI 社区动态日报
**2026-08-16**

---

## 📌 今日速览

今日 Copilot CLI 仓库无新版本发布，但社区活跃度较高，过去 24 小时有 17 个 Issue 和 2 个 PR 更新。最受关注的议题集中在 **MCP 认证回归**（Atlassian MCP OAuth 在 1.0.79/1.0.80 连续翻车）和 **1.0.79 autopilot 稳定性**（Windows 平台出现 V8 OOM、BYOK 模式下 prompt caching 被破坏），此外 NixOS 兼容性、Codespaces 版本更新、模型目录刷新等多个长期痛点也持续被开发者跟进。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时内）。

社区目前主要围绕 **1.0.79 / 1.0.80** 的若干回归问题展开讨论，这两个版本被多次提及存在兼容性缺陷。

---

## 🔥 社区热点 Issues（TOP 10）

| # | Issue | 状态 | 热度 | 摘要 |
|---|-------|------|------|------|
| 1 | [#3392](https://github.com/github/copilot-cli/issues/3392) Bash tool breaks on NixOS ≥1.0.49 | OPEN | 👍9 / 💬4 | **历史最久痛点**。从 1.0.49 起 Bash 工具在 NixOS 上完全不可用，`strace` 表明进程无法正常启动；社区已等待近 3 个月。 |
| 2 | [#4480](https://github.com/github/copilot-cli/issues/4480) Atlassian MCP OAuth 回归（1.0.79） | CLOSED | 👍6 / 💬4 | 升级到 1.0.79 后连接 `mcp.atlassian.com` 失败，触发 RFC 8414 §3.3 issuer 校验不通过；属于 1.0.71 → 1.0.79 的回归。 |
| 3 | [#2934](https://github.com/github/copilot-cli/issues/2934) 支持 protobuf OTLP 导出 | CLOSED | 👍6 / 💬2 | 社区长期诉求：`copilot monitoring` 只支持 JSON OTLP，标准 `OTEL_EXPORTER_OTLP_PROTOCOL` 环境变量被忽略。本次已关闭，意味着官方已认可并修复。 |
| 4 | [#4346](https://github.com/github/copilot-cli/issues/4346) Actions GITHUB_TOKEN 下 MCP 注册表 403 | CLOSED | 👍3 / 💬2 | 在 GitHub Actions 中使用免 PAT 的 `copilot-requests: write` 模式时，所有非默认 MCP 服务器因 403 无法加载，影响 CI 场景。 |
| 5 | [#4490](https://github.com/github/copilot-cli/issues/4490) Atlassian MCP OAuth 在 1.0.80 再次回归 | OPEN | 👍0 / 💬0 | **#4480 的复刻版**：1.0.78 工作，1.0.80 再次出现相同的 issuer 不匹配错误。连续两个版本未根治。 |
| 6 | [#4421](https://github.com/github/copilot-cli/issues/4421) MCP initialize 握手 60s 硬超时无重试 | OPEN | 👍0 / 💬1 | npx 启动的 stdio MCP 服务器在冷启动时 ~29% 会超时，且 CLI 会**永久标记失败、永不复活**，严重影响会话可用性。 |
| 7 | [#4499](https://github.com/github/copilot-cli/issues/4499) v1.0.79 autopilot Windows OOM | OPEN | 👍0 / 💬0 | 长跑 autopilot 时报 `Committing semi space failed`，但 V8 heap 实际仅占用 ~607 MB / 4.3 GB，疑似 **主机内存 commit 失败**而非堆上限触发。 |
| 8 | [#4500](https://github.com/github/copilot-cli/issues/4500) BYOK autopilot nudge 破坏 prompt caching | OPEN | 👍0 / 💬0 | autopilot 完成提示那一轮重新序列化历史 transcript，导致 prompt cache 命中率归零，BYOK 用户的 token 成本与延迟显著上升。 |
| 9 | [#4438](https://github.com/github/copilot-cli/issues/4438) `disable-model-invocation:true` 让 skill 完全不可达 | OPEN | 👍1 / 💬2 | 项目级 skill 在 `SKILL.md` 中标注该字段后，`copilot skill list` 仍可见，但模型的 `skill()` 工具返回 not found——语义与 `disable-model`（"仅手动"）不一致。 |
| 10 | [#3565](https://github.com/github/copilot-cli/issues/3565) Task 工具静默降级子代理模型 | CLOSED | 👍1 / 💬1 | 当请求的模型 cost multiplier 高于 session 模型时，子代理的 `model` 配置（frontmatter 与显式参数）都会被静默忽略，影响自定义 agent 工作流。 |

---

## 🛠 重要 PR 进展

| PR | 状态 | 说明 |
|----|------|------|
| [#4497](https://github.com/github/copilot-cli/pull/4497) Handle fork PR associations in invalid-label writer | OPEN | 修复 fork 仓库 PR 工作流运行时 GitHub 未填充 PR 关联的边界情况：当 association 缺失时，依据可信 workflow-run 元数据查询并要求**恰好一个**开放 PR，避免误操作。属于机器人自动化基础设施稳健性改进。 |
| [#4449](https://github.com/github/copilot-cli/pull/4449) Migrate PR automation away from `pull_request_target` | CLOSED | 将无效标签（invalid-label）自动化从 `pull_request_target` 迁出：使用 issue-scoped token 直接关闭非法 issue，用无权限 `pull_request` 触发器处理 mergeable PR。降低供应链攻击面，已合并。 |

> 备注：过去 24 小时仅 2 个 PR 更新，仓库当前处于版本打磨期，PR 流量显著低于 Issue。

---

## 📈 功能需求趋势

通过分析 17 个活跃 Issue，可以提炼出以下社区最关注的演进方向：

| 方向 | 代表 Issue | 诉求要点 |
|------|------------|----------|
| **MCP 生态稳健性** | #4480 / #4490 / #4346 / #4421 | OAuth 流程回归、CI 鉴权、超时/重试机制——MCP 是 CLI 扩展性的核心，相关问题已占活跃 Issue 的 ~25%。 |
| **新模型/参数支持** | #4495 / #4494 | GPT-5.6 `reasoning.mode=pro` 支持、模型目录热刷新（Sonnet 5 等新模型启用后 CLI 不可见）。 |
| **会话生命周期管理** | #4502 / #4493 / #4491 | 取消归档（un-archive）、`/restart` 与 `-w` worktree 冲突、`/spawn` 模板自相矛盾。 |
| **平台兼容性** | #3392 / #4501 / #4499 | NixOS、Codespaces、Windows autopilot——非 macOS 平台的边缘问题集中暴露。 |
| **可观测性** | #2934 | protobuf OTLP 已被官方采纳，反映出企业级监控集成是付费用户的硬需求。 |
| **子代理/Agent 控制** | #4275 / #3565 / #4438 | ACP 协议下 `contextTier` 配置、subagent 模型不被尊重、skill 可达性语义——AI 工作流可控性持续受到关注。 |

---

## 💢 开发者关注点（痛点与高频诉求）

1. **MCP 是新瓶颈**：Atlassian MCP OAuth 在 1.0.79 与 1.0.80 **连续两次回归**（#4480 / #4490），加上 MCP registry 403（#4346）和 60s 无重试握手（#4421），表明 MCP 认证/连接栈尚未稳定，正在侵蚀用户对远程 MCP 服务器的信任。

2. **1.0.79 稳定性堪忧**：除 OAuth 回归外，还在 Windows autopilot 上出现非常规 OOM（#4499），BYOK 模式下破坏 prompt caching（#4500）。社区已开始怀疑该版本是否经过充分长跑测试。

3. **平台覆盖仍是短板**：NixOS（#3392，等待超 3 个月）、Codespaces 锁死在 1.0.3（#4501）、Windows autopilot 异常——三条独立线索都指向 CI/CD 与非主流 Linux 发行版的兼容性治理不足。

4. **配置"静默失败"令人沮丧**：Task 工具静默降级子代理模型（#3565）、`disable-model-invocation` 让 skill 不可达（#4438）、`/spawn` 模板自相矛盾（#4491）——开发者更希望 **配置被尊重并明确报错**，而不是悄悄改变行为。

5. **Session UX 体验欠佳**：误点 Done 即"永久归档"（#4502）、`-w` 与 `/restart` 不能组合（#4493）——会话作为用户的工作记忆，缺乏撤销/恢复能力是个普遍抱怨。

6. **企业可观测性需求落地**：protobuf OTLP（#2934）从提出到关闭跨度近 4 个月，但最终被官方采纳，提示监控/Tracing 是企业付费用户后续推动功能演进的关键杠杆。

---

*报告基于 [github.com/github/copilot-cli](https://github.com/github/copilot-cli) 公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a Chinese daily report for Kimi Code CLI community dynamics based on GitHub data from 2026-08-16. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 4 issues updated in the past 24 hours (but I need to be careful - some were created earlier and only updated)
- 2 PRs updated in the past 24 hours

Let me re-read the issues:
1. #1283 - Memory System feature request (created 2026-02-27, updated 2026-08-15) - 40 comments
2. #2604 - Weekly allowance appears reduced (created/updated 2026-08-15) - 2 comments
3. #2603 - Quota-aware compaction (created/updated 2026-08-15) - 0 comments
4. #1155 - CLOSED - openai_legacy provider issue (closed)

PRs:
1. #2524 - OPEN - fix StrReplaceFile replacements
2. #2506 - CLOSED - fix circular $ref in deref_json_schema

The user asked for "10 issues" and "10 PRs" but there are only 4 issues and 2 PRs in the past 24 hours. I need to be honest about this and not fabricate data. I should mention that there are only a few updates and provide analysis on what's available.

Let me structure the report properly:

1. **今日速览** - 2-3 sentences summarizing today's most important dynamics
2. **版本发布** - No new releases, so skip or note this
3. **社区热点 Issues** - Only 4 issues, I'll cover all 4 with analysis
4. **重要 PR 进展** - Only 2 PRs, I'll cover both
5. **功能需求趋势** - Extract from all issues
6. **开发者关注点** - Summarize pain points

Let me write this in professional Chinese technical style.</think>

# Kimi Code CLI 社区动态日报

**日期：2026-08-16** | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

过去 24 小时仓库无新版本发布，社区讨论集中在 **订阅配额感知** 与 **上下文压缩机制** 两个紧密相关的话题上——多用户反馈 Vivace 套餐有效配额疑似缩减 3–5 倍，并建议基于 token 预算而非模型最大窗口触发压缩。此外，长期高热度的 **Memory System（跨会话持久化记忆）** 需求继续保持活跃讨论。

---

## 🚀 版本发布

过去 24 小时无新版本发布，跳过本节。

---

## 🔥 社区热点 Issues

> 今日仅 4 条 Issue 有更新，远少于通常水平，但仍包含两条值得重点关注的新反馈。

| # | Issue | 状态 | 重要性 | 社区反应 |
|---|---|---|---|---|
| 1 | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) **Memory System：跨会话持久化上下文** | OPEN | ⭐⭐⭐⭐⭐ | 💬 40 条评论 |
| 2 | [#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604) **Vivace 套餐有效配额疑似缩减 3–5 倍** | OPEN | ⭐⭐⭐⭐⭐ | 💬 2 条评论 |
| 3 | [#2603](https://github.com/MoonshotAI/kimi-cli/issues/2603) **基于 token 预算的配额感知压缩** | OPEN | ⭐⭐⭐⭐ | 💬 0 条评论 |
| 4 | [#1155](https://github.com/MoonshotAI/kimi-cli/issues/1155) ~~openai_legacy 兼容层丢失 reasoning 内容~~ | **CLOSED** | — | 已归档 |

### 详细分析

**#1283 — Memory System：跨会话持久化上下文**（长期热门）
- 该 Issue 自 2026-02 提出至今累计 40 条评论，是仓库中最活跃的 feature request 之一。
- 需求包含两部分：AI 自动管理的"自动记忆"与用户通过配置注入的"手动记忆"。
- 在 agentic coding 工作流中，跨会话记忆项目约定、技术栈偏好、踩坑记录是高频刚需，目前 Claude Code 等竞品已落地相关能力，Kimi CLI 社区呼声强烈。
- **建议**：维护者可考虑将其拆分为子任务里程碑，提升可追踪性。

**#2604 — Vivace 套餐配额缩减争议（带完整埋点数据）**（最新反馈）
- 用户 @tobiu 提供了一份非常专业的客户端埋点日志（wire-level JSONL ledger），按日记录 input / cache-read / output token 体积。
- 报告显示其感知到的有效 weekly allowance 减少了约 3–5 倍，怀疑是计费逻辑回归或未公告的条款调整。
- 该 Issue 论据扎实（带原始数据），不是情绪化抱怨，维护者应优先调查以避免信任流失。

**#2603 — 配额感知压缩（Quota-aware compaction）**（最新反馈）
- 提出当前压缩仅在接近 1M token 上下文窗口时触发，对订阅用户来说几乎从未生效。
- 建议改为基于 token 预算（用户可配置阈值）触发，让订阅用户在配额受限场景下也能享受上下文压缩红利。
- 与 #2604 直接呼应——若配额的确收紧，智能压缩将变得至关重要。

**#1155 — openai_legacy 兼容层 reasoning 丢失**
- 已 CLOSED，无更多讨论必要，列在此处仅为完整性。

---

## 🛠 重要 PR 进展

> 今日仅有 2 条 PR 更新，其中 1 条已合入。

### [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) `fix(tools): StrReplaceFile 替换计数应基于当前已变更内容` — **OPEN**
- 修复 `StrReplaceFile` 工具链式编辑的计数 Bug：原先统计替换次数是相对于**原始文件内容**，导致前序编辑产生的新内容无法被后续 `old` 字符串匹配到。
- 修复后改为相对**当前已应用变更后**的内容统计，确保链式编辑可被正确计数。
- 关联 Issue #2526，属于小型 bugfix，但直接影响 agentic editing 的可靠性。

### [#2506](https://github.com/MoonshotAI/kimi-cli/pull/2506) `fix(kosong): deref_json_schema 遇到循环 $ref 时抛出明确错误` — ✅ **CLOSED（已合并）**
- `kosong.utils.jsonschema.deref_json_schema` 在内联本地 `$ref` 时存在无限递归风险。
- 现改为在检测到循环引用时抛出清晰错误，便于上层捕获与排错。
- 该 PR 自描述为 < 100 行的自包含修复，符合 CONTRIBUTING 规范，是社区贡献的良好范例。

---

## 📈 功能需求趋势

从今日活跃 Issues 提炼出的社区需求方向：

| 方向 | 代表 Issue | 热度 | 趋势解读 |
|---|---|---|---|
| **🧠 跨会话记忆系统** | #1283 | 🔥🔥🔥🔥🔥 | 长期第一需求，与竞品差距正在扩大 |
| **💰 配额透明度与计费可解释性** | #2604 | 🔥🔥🔥🔥 | 新兴痛点，用户开始自带埋点取证 |
| **📦 智能上下文压缩（配额感知）** | #2603 | 🔥🔥🔥🔥 | 与配额议题强绑定，订阅用户的核心诉求 |
| **🔌 第三方 LLM 兼容层健壮性** | #1155 (已关) | 🔥🔥 | sglang/vllm 等自部署用户持续关注 |

---

## 👨‍💻 开发者关注点

综合今日社区反馈，开发者最强烈的痛点可归纳为以下三条：

1. **"看不见的限额"焦虑** — 用户对订阅套餐的有效配额缺乏透明度，#2604 提到的"配缩减 3–5 倍"若属实，将严重动摇 agentic 重度用户的付费意愿。建议官方在 CLI 层面暴露更详细的实时配额使用面板。

2. **长会话成本失控** — K3 的 1M 上下文窗口反而成为双刃剑：默认行为下压缩几乎不触发，导致 cache-read 费用累积惊人。#2603 提出的"基于预算的压缩"应被视为下一阶段的**优先级修复**而非 nice-to-have。

3. **项目级持久记忆缺失** — 开发者希望 Kimi CLI 能像队友一样"记住"项目规范、命名约定、历史决策，这是提升 daily-driver 黏性的关键能力。#1283 已积累 40 条讨论，建议官方回应具体路线图时间表。

---

*报告生成完毕。如需追踪具体 Issue 或 PR 的后续进展，可点击对应链接跳转至 GitHub。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for OpenCode on 2026-08-16 and generate a comprehensive Chinese daily report.

Key observations from the data:
1. No releases in the past 24 hours
2. 50 issues updated, focusing on the top 30 by comment count
3. 50 PRs updated, focusing on top 20 by comment count

Let me categorize and analyze:

**Top Issues (by comment count):**
- #33356 - Unbounded growth of event table (13GB+ DB) - 19 comments, 5 likes
- #37790 - OpenCode Go subscription "Insufficient balance" bug - 14 comments
- #24879 - Go Pro tier ($20) with first-month discounts - 11 comments, 11 likes
- #42143 - Why subscribe when website says 100% free? - 10 comments
- #7801 - Plan Mode auto switch to Build mode - 10 comments, 31 likes
- #40206 - grok-4.5 not working since Aug 2 - 9 comments (CLOSED)
- #27924 - Infinite compaction loop bug - 8 comments
- #35649 - Links not clickable in Kitty terminal - 5 comments
- #42750 - Upstream request failed - 4 comments
- #42329 - Fetch Failed error - 4 comments
- #35295 - mouse:false causes wheel issues - 4 comments
- #34737 - Project path not updated - 4 comments
- #37671 - v2 CLI leaks native temp files - 4 comments
- #42739 - Cloudflare env var crash - 4 comments
- #38598 - Deepseek V4 FLASH not finishing tasks - 3 comments
- #32911 - Deepseek API burning tokens - 3 comments
- #42802 - grok-4.5 server error (CLOSED)
- #40886 - grok-4.5 HTTP 503 - 3 comments
- #42827 - AI_APICallError via ACP - 2 comments
- #42818 - Poe Provider Tool Failure - 2 comments
- Several CLOSED ones with 2 comments

**Top PRs:**
- #42840 - expose durable event persistence (OPEN)
- #42829 - Incus workspace forks (CLOSED)
- #42831 - Docker blueprint workspaces (CLOSED)
- #27554 - LAN provider discovery (OPEN)
- #42811 - Session viewed state (OPEN)
- #42836 - ACP session default model (OPEN)
- #42833 - Mobile variant select overlap (OPEN)
- #42823 - Per-session budget limit (CLOSED)
- #42824 - Voice input + budget UI (CLOSED)
- #35555 - Desktop settings scrollbar (CLOSED)
- #42832 - Promise event iterator scoping (OPEN)
- #42830 - Plugin event subscription selection (OPEN)
- #42828 - Numeric event timestamps (CLOSED)
- #42820 - Tree directory picker (CLOSED)
- #42825 - Release virtualized timeline elements (CLOSED)
- #42826 - Batch streamed session deltas (CLOSED)

**Major themes:**
1. **grok-4.5 issues** - Multiple issues about grok-4.5 failing on OpenCode Go
2. **Database/storage issues** - 13GB+ DB growth from event table
3. **Subscription/billing confusion** - Multiple issues about Go subscription
4. **v2.0 regressions** - Multiple issues specific to v2
5. **TUI/terminal issues** - Link clicking, mouse wheel
6. **Workspace/isolation features** - Docker, Incus workspace forks
7. **Performance** - Virtualized elements, event batching

Let me write the report now in Chinese, being concise and professional.

I should note: the user mentioned this is for 2026-08-16, and I'm being asked to generate a daily report. I need to be careful about the date - this seems to be in the future from my knowledge cutoff, but the user is providing explicit data so I should use that data as-is.

Let me organize the report following the requested structure:
1. 今日速览
2. 版本发布 (skip - no releases)
3. 社区热点 Issues (top 10)
4. 重要 PR 进展 (top 10)
5. 功能需求趋势
6. 开发者关注点

I'll be selective and highlight what's most relevant to AI development tools and developers.</think>

# OpenCode 社区动态日报 · 2026-08-16

## 📌 今日速览

今日 OpenCode 仓库 **无新版本发布**，但 v2.0（2.0）分支集中暴露出多个关键问题：数据库事件表无上限增长（单实例超过 13 GB）、CLI 加载 OpenTUI 残留 13.1 MiB 的 `libopentui.so` 临时文件，以及 grok-4.5 在 Zen/Go 通道持续返回 500/503 错误。同日合并了 **session 预算上限 + 语音输入 UI**、**Docker/Incus 工作区分支**与**事件流批量发布**等重要特性，开发者对 v2 稳定性与长跑场景下的资源治理讨论显著升温。

---

## 🚀 版本发布

> 过去 24 小时内 **无新 Release**。当前稳定版本为 v1.18.18，v2.0 分支仍在快速迭代。

---

## 🔥 社区热点 Issues

1. **[#33356](https://github.com/anomalyco/opencode/issues/33356)** — `[2.0]` `event` 表无上限增长，`opencode.db` 突破 13 GB
   评论 19、👍 5。本地 SQLite 事件溯源表永不清理/压缩，长跑实例单库可占 22 GB 卷 97–99%。**是 v2.0 最被诟病的运维级痛点**。

2. **[#37790](https://github.com/anomalyco/opencode/issues/37790)** — OpenCode Go 订阅已付款仍提示 "Insufficient balance"
   评论 14。Stripe 扣款成功但 workspace 余额未到账，影响 Go 订阅用户正常使用，**疑似支付链路与配额系统同步缺陷**。

3. **[#24879](https://github.com/anomalyco/opencode/issues/24879)** — `[FEATURE]` Go Pro 档位 $20 + Share 加购首月折扣
   评论 11、👍 11。当前达到 Go 月度上限后只能切到按量计费 Zen，社区呼吁分层订阅/配额模型。

4. **[#42143](https://github.com/anomalyco/opencode/issues/42143)** — 官网宣称 100% 免费却要求订阅
   评论 10。新用户认知与商业策略冲突，**反映品牌定位沟通问题**。

5. **[#7801](https://github.com/anomalyco/opencode/issues/7801)** — `[FEATURE]` Plan Mode 完成后自动切回 Build Mode
   评论 10、👍 31（高赞）。体验向高频需求，工具调用流程自动化呼声强烈。

6. **[#27924](https://github.com/anomalyco/opencode/issues/27924)** — `[2.0]` 压缩无法缩上下文时进入死循环
   评论 8。`prompt.ts` 在 overflow → compact → overflow 路径下无上限递归，**会话会卡死并可能产生雪崩成本**。

7. **[#35649](https://github.com/anomalyco/opencode/issues/35649)** — Kitty 终端跨行链接不可点击
   评论 5、👍 2。OSC 8 超链接渲染与终端换行边界冲突，影响 CLI 工作流。

8. **[#40206](https://github.com/anomalyco/opencode/issues/40206)** *(已关闭)* — grok-4.5 在 OpenCode Go 自 8 月 2 日起不可用
   评论 9。与 **#40886**（HTTP 503）、**#42802**（Zen 通道 500）共同指向 **xAI 上游问题**，社区临时绕过方案集中讨论中。

9. **[#37671](https://github.com/anomalyco/opencode/issues/37671)** — `[2.0]` v2 CLI headless 命令加载 OpenTUI 泄露 13.1 MiB `libopentui.so`
   评论 4、👍 2。`--version`/`--help`/`service status`/`api` 都会留下临时库文件，**频繁调用即磁盘膨胀**。

10. **[#34737](https://github.com/anomalyco/opencode/issues/34737)** — 项目目录移动后仍打开已删除的旧路径
    评论 4。历史会话持久化路径未跟随项目迁移重定位，**长时间使用者高概率踩坑**。

> 备选关注：`[#42739](https://github.com/anomalyco/opencode/issues/42739)` Cloudflare 环境变量未配 token 导致启动崩溃；`[#42799](https://github.com/anomalyco/opencode/issues/42799)` opencode.ai 后端事务池过载（ResourceExhausted）。

---

## 🛠 重要 PR 进展

1. **[#42840](https://github.com/anomalyco/opencode/pull/42840)** — `fix(cli)` 暴露可持久化事件开关
   OPEN。将 `OPENCODE_EVENTS_PERSIST=1` 映射到 `ServerOptions.events.persist`，**直接对应 #33356 的治理诉求**。

2. **[#42811](https://github.com/anomalyco/opencode/pull/42811)** — `feat(session)` 增加已读状态
   OPEN。把 "未读" 从客户端 tab 文件上移到 Session 维度，**跨多端 TUI 状态一致**。

3. **[#27554](https://github.com/anomalyco/opencode/pull/27554)** — `feat` 本地 LAN 供应商发现 + 模型自动发现
   OPEN。`/connect` 面板新增 `Local (LAN)`，结合 mDNS 扫描 OpenAI 兼容服务，**对本地模型/自托管场景是重大便利**。

4. **[#42836](https://github.com/anomalyco/opencode/pull/42836)** — `fix(acp)` ACP 新会话优先使用默认 agent 模型
   OPEN。修复 `session/new` 在配置存在默认模型时仍回退到 `selectDefaultModel` 的逻辑漏洞。

5. **[#42833](https://github.com/anomalyco/opencode/pull/42833)** — `fix(session-ui)` 修复移动端 variant 选择器覆盖发送按钮
   OPEN。解决 320–390px 视口下推理档位选择器与发送按钮的重叠问题。

6. **[#42823](https://github.com/anomalyco/opencode/pull/42823)** *(已合并)* — `feat(opencode)` 单会话预算上限
   新增 session 级 `budget` 字段，PATCH 端点可设置/清除，**自动在到达上限时停止助手**，附 schema + DB 迁移。

7. **[#42824](https://github.com/anomalyco/opencode/pull/42824)** *(已合并)* — `feat(app)` 语音输入 + 预算面板
   配套 #42823，桌面/浏览器基于 `getSpeechRecognitionCtor` 实现连续 STT。

8. **[#42831](https://github.com/anomalyco/opencode/pull/42831)** *(已合并)* — Docker 蓝图工作区
   基于不可变 blueprint 快照的本地 Docker 提供器，coordinator 与模型循环保留在宿主机，**workspace 子代理进入隔离容器**。

9. **[#42829](https://github.com/anomalyco/opencode/pull/42829)** *(已合并)* — Incus 工作区分支
   与 Docker PR 同源的容器/VM 蓝图方案，**空闲实例自动停机、按需唤醒**。

10. **[#42826](https://github.com/anomalyco/opencode/pull/42826)** *(已合并)* — `fix(core)` 流式会话增量批量发布
    此前每个文本/推理/工具输入分片都作为独立事件推送，批量后**显著降低 SSE 事件风暴与 GPU/CPU 抖动**。

> 备选：**[#42832](https://github.com/anomalyco/opencode/pull/42832)** Promise 事件迭代器作用域隔离（OPEN）、**[#42830](https://github.com/anomalyco/opencode/pull/42830)** 插件事件订阅选择（OPEN）、**[#42825](https://github.com/anomalyco/opencode/pull/42825)** 释放虚拟化时间线元素（已合并，**单长会话可释放约 37,500 个游离 DOM 节点**）。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 关注度 |
| --- | --- | --- |
| **订阅/计费模型分层** | #24879、#37790、#42143、#42823 | 🔥🔥🔥 |
| **v2.0 资源治理（DB/临时文件/事件流）** | #33356、#27924、#37671、#42826、#42840 | 🔥🔥🔥 |
| **Plan/Build 模式自动化** | #7801 | 🔥🔥 |
| **本地模型与 LAN 自托管发现** | #27554、#42793（GLM 推理 toggle） | 🔥🔥 |
| **ACP 协议完善 & 错误传递** | #42827、#42836 | 🔥 |
| **TUI/终端渲染（链接、鼠标、移动端）** | #35649、#35295、#42805、#42833 | 🔥 |
| **跨端未读状态与多端一致** | #42811 | 🔥 |
| **工作区隔离（容器化分支）** | #42829、#42831 | 🔥 |
| **多语种本地化** | #37184（Farsi） | ⚪ |

---

## 🧑‍💻 开发者关注点

1. **长跑实例的磁盘与内存治理迫在眉睫**：13 GB 的事件表 + 每次 CLI 调用 13 MiB 残留库文件 + 37.5k 游离 DOM 节点，三类资源膨胀都集中在 v2.0 路径，**生产部署门槛被显著抬高**。

2. **grok-4.5 在自有通道的可用性**：自 8 月 2 日起多个独立 issue 复现 HTTP 503/500，社区已通过 #40206/#40886/#42802 跟踪并部分规避，但仍**未在 Zen/Go 上得到官方透明说明**。

3. **付费体验与品牌承诺存在错位**：官网"100% 免费"认知与 Go 订阅门槛冲突，加上 Stripe 成功却不到账的同步 bug，**商业摩擦正在转化为社区舆情**。

4. **会话级成本与预算控制成为新刚需**：#42823 + #42824 一次性补齐预算字段与 UI，配合 #32911（Deepseek token 燃烧）、#38598（Deepseek V4 Flash 偷懒）形成"成本可视化"链路，**Budget/Spend Dashboard 预计是下一阶段核心话题**。

5. **跨终端体验细节**:Kitty 链接、鼠标滚轮语义、移动端 variant 选择器均成为高频反馈点，**TUI 的"可发现性"与"渐进增强"开始被开发者按 IDE 标准要求**。

6. **本地/自托管模型友好度上升**：LAN 发现（#27554）+ GLM 等 OpenAI-兼容供应商推理 toggle（#42793）显示，**OpenCode 正在从"云优先"向"云 + 本地 + LAN"三栖模型网关演进**。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) 截至 2026-08-16*

</details>

<details>
<summary><strong>jcode</strong> — <a href="https://github.com/1jehuang/jcode">1jehuang/jcode</a></summary>

<think>Let me analyze the GitHub data for jcode community daily news for 2026-08-16.

Key observations:
1. No new releases in the past 24 hours
2. 18 issues updated/created in the past 24 hours
3. 1 PR updated in the past 24 hours (#918)

Let me categorize the issues:

**High priority/bug issues:**
- #932 - bash gate `rm -rf x 2>/dev/null` parses redirect as delete targets (HIGH, reproducible)
- #928 - TUI multi-line paste auto-submits (HIGH, UX)
- #969 - MiniMax provider reads wrong env var (OPENAI_API_KEY vs MINIMAX_API_KEY)
- #968 - Gemini API key incorrectly marks Google Gemini OAuth as configured
- #961 - OpenAI Responses requests omit prompt_cache_key
- #964 - MCP tools with single-underscore names fail lookup
- #962 - Automated todo assessment review creates endless loop
- #956 - Mouse wheel scrolls pre-launch terminal scrollback
- #966 - Mermaid diagrams never render
- #970 - Leaked OSC 11 background-color reply

**Feature requests:**
- #96 - Plan Mode (high engagement, 2 thumbs up, 2 comments)
- #963 - GitHub Copilot Enterprise support
- #957 - Export full session to Markdown/HTML
- #965 - Docs update for AMBIENT_MODE

**Documentation:**
- #965 - AMBIENT_MODE.md status stuck at "Design"

**UX/Accessibility:**
- #959 - Low-emphasis text unreadable for colorblind users
- #967 - Too eager to run git mutating commands

**Swarm/Memory/Performance:**
- #958 - Swarm DM with interrupt delivery doesn't preempt worker
- #960 - Memory retrieval gaps

**Only PR #918** - Fix seven reproducible issues from automated triage

Let me now craft the daily report in Chinese.

For "重要 PR 进展" (Important PR Progress), there's only 1 PR, so I'll include it but note the limited activity.

Let me structure the report properly.</think>

# jcode 社区动态日报 · 2026-08-16

## 📌 今日速览

jcode 在过去 24 小时内**无新版本发布**，但社区活跃度高涨：**18 条 Issue** 被新建或更新，涵盖安全解析、TUI 兼容性、Provider 配置错误、MCP 工具查找、内存检索等多类问题。仓库维护者 @1jehuang 推动了 PR #918，集中修复自动化分诊发现的 7 个可复现问题。整体看，社区已从"功能补齐"进入"质量打磨与生态对接"阶段，Plan Mode（#96）等高呼声功能仍悬而未决。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

### 1. #96 - [Feature Request] Plan Mode ⭐⭐⭐（👍 2, 💬 2）
**链接**：https://github.com/1jehuang/jcode/issues/96
Plan Mode（"先规划、再审批执行"的只读模式）是 Claude Code、Codex、Gemini CLI 的标志性能力。社区对该需求呼声最高（2 点赞 + 2 评论），是 18 条 Issue 中互动最久的，从 5 月延续至今，**是 jcode 亟需追赶的"旗舰功能空白"**。

### 2. #932 - bash gate 把 `2>/dev/null` 解析为删除目标 ⭐⭐⭐（High, reproducible）
**链接**：https://github.com/1jehuang/jcode/issues/932
安全网关上 `rm -rf x 2>/dev/null` 被误解析为三个删除目标，其中 `/dev/null` 触发系统保护路径硬阻断，**用户连"申请豁免"的机会都没有**。这是**安全策略可绕过性 + UX 死锁**的双重问题，影响所有依赖 stderr 重定向的合法命令，优先级被标为 high。

### 3. #928 - Windows TUI 粘贴行为双重 Bug（High）
**链接**：https://github.com/1jehuang/jcode/issues/928
Windows Terminal / conhost 下：(1) 多行粘贴在首个换行处自动提交；(2) 右键粘贴失效。两者根因相同——终端不发 bracketed paste 时 TUI 兜底逻辑缺失。**直接影响 Windows 用户日常操作流畅度**。

### 4. #961 - OpenAI Responses 缺少 `prompt_cache_key`
**链接**：https://github.com/1jehuang/jcode/issues/961
在多会话共享同一 server 的场景下，OpenAI Responses 请求未携带 `prompt_cache_key`，**直接造成缓存命中率波动与成本上升**。属于"看不见但烧钱"的隐性问题，对企业用户尤其敏感。

### 5. #962 - 自动化 todo 评估在任务完成后陷入死循环
**链接**：https://github.com/1jehuang/jcode/issues/962
长会话中 jcode 注入的"自动化 todo 评估回顾"提示词会导致 Agent 反复重读原请求，**形成无限重规划循环**，浪费 token 且容易破坏已完成的成果。属于自动 harness 的设计缺陷。

### 6. #968 - Gemini API Key 误标记 OAuth 已配置
**链接**：https://github.com/1jehuang/jcode/issues/968
配置了 `GEMINI_API_KEY` 但无 OAuth 凭据时，Provider 选择器把"Google Gemini (OAuth)"也标记为 `configured`，**误导用户认为无需登录即可使用**，实际调用会失败。

### 7. #969 - MiniMax provider 读取错误的环境变量
**链接**：https://github.com/1jehuang/jcode/issues/969
README 写 `MINIMAX_API_KEY`，代码却读 `OPENAI_API_KEY`，**文档与实现完全相反**，新用户按文档配置必然鉴权失败。属于低级但影响面大的发版质量问题。

### 8. #964 - MCP 工具单下划线名查找失败
**链接**：https://github.com/1jehuang/jcode/issues/964
MCP server 注册时使用 `__`（双下划线），但 Agent 经常用 `_`（单下划线）调用（如 `mcp_codegraph_codegraph_explore`），返回 `Unknown tool`。**破坏了 MCP 生态的核心调用约定**，影响所有第三方 MCP 集成。

### 9. #958 - Swarm DM 中断投递无法抢占深度工具循环
**链接**：https://github.com/1jehuang/jcode/issues/958
一次实测中 worker 耗费 2.5 小时 / 37.7 万 token 反复"发明"新探测变体，**coordinator 通过 `swarm dm` 发送的中断指令完全无法抢占**。暴露了 Swarm 模式下的资源失控风险。

### 10. #959 - 低对比度文本对色盲用户不可读
**链接**：https://github.com/1jehuang/jcode/issues/959
TUI 中 `.dim()` 修饰器硬编码低对比度样式，**`/colors` 配置无法覆盖**。属于无障碍（a11y）合规层面的硬伤，潜在违反 WCAG。

**其他值得关注的 Issue**：
- #970 - Orca 终端 macOS 下 OSC 11 背景色响应泄漏到输入行
- #966 - macOS + VS Code 终端 Mermaid 图表渲染为原始 HTML
- #960 - 内存检索"近似字面匹配"零命中 + 中文嵌入召回退化
- #967 - Agent 过度主动执行 git 修改命令
- #956 - Windows Alacritty 鼠标滚轮滚动的是启动前终端历史

---

## 🛠️ 重要 PR 进展

### PR #918 - Fix seven reproducible issues from automated triage
**链接**：https://github.com/1jehuang/jcode/pull/918
**作者**：@1jehuang（维护者亲自下场）
批量修复自动化分诊产出的 7 个可复现问题：
- **构建发布**：显式提升 shared-server 构建优先级 + 原生 Windows 自开发 Cargo 执行路径
- **TUI 体验**：扩展重复粘贴占位符 + 修复空闲动画缓冲区重新种子逻辑
- **配置卫生**：去重 home/project `AGENTS.md`、安全裁剪技能描述
- **Provider 兼容**：保留孤立的 OpenRouter 工具输出

这是过去 24 小时**唯一的活跃 PR**，体现了"以 PR 形式集中清账"的工程节奏，但仅 1 条 PR 处于 OPEN 状态说明**外部贡献生态仍待激活**。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区信号 |
|---|---|---|
| **Agent 范式升级** | #96 Plan Mode | 最高呼声，已沉淀 3 个月 |
| **企业/平台接入** | #963 GitHub Copilot Enterprise、#968/969 Provider 配置 | 企业用户对多平台 OAuth/自托管 URL 需求强烈 |
| **会话可移植性** | #957 全量导出 Markdown/HTML（含思维链） | 用户希望脱离工具仍能复盘 |
| **多 Agent 协同** | #958 Swarm 中断机制 | 资源失控问题已成为生产痛点 |
| **可观测性/性能** | #961 prompt_cache_key、#960 内存检索 | "看不见的成本与召回"成为企业化门槛 |

---

## 🎯 开发者关注点

1. **"配置语义不一致"成头号痛点**
   #968、#969 同日出现——Provider 配置与文档/UI 状态显示脱节，反映**多 Provider 矩阵的工程债务**已显化。

2. **Windows 体验仍未追平 macOS/Linux**
   #928（粘贴）、#956（滚轮）、#970（Orca）三条都与终端兼容性相关，**Windows 用户在 TUI 层的"边角体验"被反复报告**。

4. **Agent 安全策略与易用性拉扯**
   #932（误拦截）和 #967（过度激进执行 git）形成镜像——开发者既想要更严格的安全门，也想要更克制的自主行为，**当前的规则集两边都没做到位**。

5. **生态互操作成为新瓶颈**
   #964 MCP 工具命名、#961 OpenAI 缓存键、#966 Mermaid 渲染——jcode 与外部生态（MCP、OpenAI、Artifact 渲染器）的握手细节正成为高频故障点。

6. **可访问性与国际化被忽视**
   #959（色盲无障碍）、#960（中文嵌入）显示 jcode 在 i18n 和 a11y 维度几乎是空白，需要专项投入。

---

*日报由 GitHub Issues/PR 数据自动生成 · 数据范围：2026-08-15 至 2026-08-16*

</details>

<details>
<summary><strong>pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a daily report for the pi community (a GitHub project at github.com/earendil-works/pi) based on the data provided. Let me analyze the data carefully.

Looking at the data:
- No releases in the past 24 hours
- 38 issues updated in the past 24 hours (top 30 shown)
- 14 pull requests updated in the past 24 hours

Let me categorize and analyze:

**Hot Issues (by comments/likes):**
1. #6187 - Pi login hangs in WSL after GitHub Copilot auth (27 comments, CLOSED) - important bug fix
2. #6879 - auto-compaction never triggers after context grows past 100% (21 comments, 17 likes, OPEN) - major bug
3. #7855 - Response was truncated before completion (5 comments, CLOSED)
4. #7765 - Configurable fullscreen mouse wheel scroll step (5 comments, CLOSED)
5. #8105 - openai-codex-responses materializes optional tool parameters (4 comments, CLOSED)
6. #4776 - Shell completion script generator (4 comments, CLOSED)
7. #8058 - Documentation: how to stop current response (3 comments, CLOSED)
8. #7871 - Per-model thinking-level persistence (2 comments, CLOSED)
9. #8157 - Migrate grok-mermaid to lovely-mermaid (2 comments, OPEN)
10. #8171 - TUI: fixed-height scrollable thinking blocks (2 comments, CLOSED)
11. #8170 - Windows: bash tool can kill its own host (2 comments, CLOSED) - security issue
12. #8028 - TUI fullRender crashes with RangeError (2 comments, OPEN)
13. #8003 - Cursor in input box flickers (2 comments, OPEN)
14. #8154 - Hidden thinking blocks leave blank spacer lines (2 comments, CLOSED)
15. #8152 - /tree: built-in optional file restore (2 comments, CLOSED)
16. #8185 - Code Review: auth-check.ts race conditions (1 comment, CLOSED)
17. #8184 - stdout resume-hint not drained (1 comment, CLOSED)
18. #8183 - Windows Terminal Ctrl+Shift+F conflict (1 comment, CLOSED)
19. #8182 - Add low thinking level for DeepSeek V4 Flash (1 comment, CLOSED)
20. #8180 - ExtensionCommandContext for shortcut handlers (1 comment, CLOSED)
21. #7147 - Emit extension events around UI dialogs (1 comment, OPEN)
22. #8178 - Add LLMTR as a built-in provider (1 comment, CLOSED)
23. #8177 - Discuss exclusive cross-process writers (1 comment, CLOSED)
24. #8176 - Neutral wording for ambiguous length stops (1 comment, CLOSED)
25. #8175 - Compaction failures not exposed to extensions (1 comment, CLOSED)
26. #8173 - Tool-result pruner + spill extension (1 comment, CLOSED)
27. #8169 - Cancellable pre-commit hook for model selection (1 comment, CLOSED)
28. #8168 - Compaction + session restore corrupts tool-result role (1 comment, CLOSED)
29. #8167 - Cannot pick a model with built-in llama.cpp support (1 comment, CLOSED)
30. #8166 - Custom message injected mid-tool-batch breaks adjacency (1 comment, CLOSED)

**Important PRs:**
1. #8076 - DRAFT: dev branch with new harness (OPEN)
2. #8181 - Fix: expose low thinking level for DeepSeek V4 Flash (CLOSED)
3. #8174 - Fix: neutral wording for repeated ambiguous length stops (CLOSED)
4. #8172 - Example: tool-result pruner + spill extension (CLOSED)
5. #8165 - Fix: tokens.total = billable only (CLOSED)
6. #8164 - Fix: never continue from trailing assistant message (CLOSED)
7. #8146 - Fix: cap Baseten DeepSeek V4 Flash output at 384k (CLOSED)
8. #8158 - Feat: upgrade Mermaid terminal rendering (OPEN)
9. #7984 - Fix: update grok-mermaid to 0.2.3 (CLOSED)
10. #7381 - Fix: make model refresh state consistent (CLOSED)
11. #8155 - Fix: avoid resetting cursor blink during renders (OPEN)
12. #8153 - Fix: compact at safe turn boundaries (CLOSED)
13. #8151 - Fix: contain widget render failures (CLOSED)
14. #8124 - Feat: route xAI models through Responses and default to Grok 4.6 (OPEN)

**Key Trends I'm noticing:**
1. Compaction issues are a major theme - multiple issues and PRs related to compaction logic
2. Multiple DeepSeek-specific fixes (V4 Flash thinking levels, output limits)
3. TUI/UX issues (cursor flicker, scroll behavior, thinking blocks)
4. Extension system improvements
5. Model provider support (LLMTR, xAI, opencode)
6. Cross-platform concerns (Windows, WSL)
7. Security concerns (bash tool on Windows)
8. Documentation/UX clarity

Let me draft the report now. The user wants:
1. 今日速览 - 2-3 sentences summary
2. 版本发布 - skip if no releases
3. 社区热点 Issues - top 10 worth-noting
4. 重要 PR 进展 - top 10 important PRs
5. 功能需求趋势 - community's most wanted features
6. 开发者关注点 - pain points and high-frequency requests

Language: clear, concise, professional Chinese for tech developers.

Let me think about the most important issues to highlight:

1. #6187 - WSL login hang (27 comments, CLOSED) - major bug resolved
2. #6879 - Auto-compaction not triggering (21 comments, 17 likes, OPEN) - critical ongoing issue
3. #8170 - Windows bash tool kills own host (security issue)
4. #8028 - TUI fullRender crashes with RangeError (OPEN)
5. #8168 - Compaction + session restore corrupts tool-result role
6. #8166 - Custom message injected mid-tool-batch breaks adjacency
7. #8003 - Cursor flicker while streaming
8. #8157 - Migrate grok-mermaid to lovely-mermaid (OPEN)
9. #7147 - Emit extension events around UI dialogs (OPEN)
10. #8167 - Cannot pick a model with built-in llama.cpp support

For PRs:
1. #8158 - Feat: upgrade Mermaid terminal rendering (OPEN, important feature)
2. #8124 - Feat: route xAI models through Responses, default to Grok 4.6 (OPEN)
3. #8076 - DRAFT: dev branch with new harness (OPEN, important)
4. #8153 - Fix: compact at safe turn boundaries (important)
5. #8165 - Fix: tokens.total = billable only (important for accounting)
6. #8164 - Fix: never continue from trailing assistant message (compaction crash)
7. #8155 - Fix: avoid resetting cursor blink during renders (OPEN, UX)
8. #8151 - Fix: contain widget render failures
9. #8181 - Fix: expose low thinking level for DeepSeek V4 Flash
10. #8174 - Fix: neutral wording for repeated ambiguous length stops

I should also note the "compaction" thread is a major theme.

Let me write the report now in Chinese.</think>

# 📋 Pi 社区动态日报 · 2026-08-16

## 🎯 今日速览

今天的社区活动以 **Context 压缩（Compaction）相关问题的密集修复**为主线——多个 PR 针对压缩流程中的边界处理、token 统计、错误信息措辞展开修正，呼应了一周前高赞 Issue #6879 中"自动压缩永远不触发直到 API 溢出"的痛点。同时，PI 团队在 **TUI 体验、扩展系统健壮性、DeepSeek V4 Flash 跨提供商一致性** 等方向也有并行推进。WSL 登录挂起的长期疑难 Bug（#6187）在 27 条评论后终于关闭。

---

## 🏷️ 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 为什么值得关注 |
|---|-------|------|----------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction 在 context 超过 100% 后仍不触发 | 🟢 OPEN | **17 👍 / 21 评论** 的本周最高赞。gpt-5.6-sol 上 2 小时 agent 回合后压缩失效，直到 373k token 触发 API 拒绝。触及 Pi 核心可靠性。 |
| [#6187](https://github.com/earendil-works/pi/issues/6187) | WSL 中 Pi 登录卡死于 GitHub Copilot 设备授权 | 🔴 CLOSED | 27 条评论的长期疑难问题终于关闭，WSL 用户关注的稳定性问题。 |
| [#8170](https://github.com/earendil-works/pi/issues/8170) | Windows bash 工具可经 `taskkill /F /IM node.exe` 杀死宿主进程 | 🔴 CLOSED | **典型安全 issue**：模型生成的命令无需确认即可杀掉 Pi-Web 宿主，凸显 Windows 沙箱与命令白名单的缺失。 |
| [#8168](https://github.com/earendil-works/pi/issues/8168) | 压缩 + 会话恢复损坏 tool-result role，导致 422 错误 | 🔴 CLOSED | 与 #6879 同源的压缩脆弱性问题，多次反馈但修复后又以新形式出现。 |
| [#8166](https://github.com/earendil-works/pi/issues/8166) | 扩展在 tool-batch 中注入自定义消息破坏 tool_calls→tool 相邻性（DeepSeek 400） | 🔴 CLOSED | 暴露扩展 API 与 provider 协议校验之间的契约漏洞，影响所有使用 `sendMessage` 的扩展作者。 |
| [#8028](https://github.com/earendil-works/pi/issues/8028) | TUI `fullRender` 在输出超过 V8 字符串上限时崩溃 | 🟢 OPEN | 视频/图像类 agent 的硬性瓶颈，影响长上下文场景。 |
| [#8167](https://github.com/earendil-works/pi/issues/8167) | 内置 llama.cpp 支持无法在路由模式下选模型 | 🔴 CLOSED | 本地推理用户痛点：能用 `/llama` 加载但模型列表缺失。 |
| [#7157](https://github.com/earendil-works/pi/issues/8157) | grok-mermaid → lovely-mermaid 迁移 | 🟢 OPEN | TUI 内 Mermaid 渲染升级提案，伴随 PR #8158 同步推进。 |
| [#7147](https://github.com/earendil-works/pi/issues/7147) | 在 UI 弹窗周围发出扩展事件 | 🟢 OPEN | 扩展开发者关心的 API 表现力扩展——`ui_dialog_start/end` 一直是高频诉求。 |
| [#8003](https://github.com/earendil-works/pi/issues/8003) | 流式输出时输入框光标剧烈闪烁 | 🟢 OPEN | 体验级痛点，对应 PR #8155 同步修复。 |

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 修复 / 改进 |
|---|----|----|------------|
| [#8076](https://github.com/earendil-works/pi/pull/8076) | dev branch with new harness | 🟢 OPEN | **未来架构方向**：新 harness 草案 PR，值得关注长期演进。 |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | 升级 Mermaid 终端渲染（lovely-mermaid） | 🟢 OPEN | 替换 grok-mermaid，解析器更健壮（关闭 #8157 #7832）。 |
| [#8124](https://github.com/earendil-works/pi/pull/8124) | xAI 模型路由切换至 Responses API，默认 Grok 4.6 | 🟢 OPEN | 跟随 OpenAI 的 API 迁移趋势，同时切换默认模型。 |
| [#8153](https://github.com/earendil-works/pi/pull/8153) | 在安全回合边界处触发压缩 | 🔴 CLOSED | **直接回应 #6879 核心痛点**：引入 run-scoped 边界压缩 API，在回合间暂停而非越过 100%。 |
| [#8165](https://github.com/earendil-works/pi/pull/8165) | `tokens.total` 仅计入计费 token（排除 cacheRead/cacheWrite） | 🔴 CLOSED | 修正压缩预算与状态显示；参照 miss-minutes 历史提交。 |
| [#8164](https://github.com/earendil-works/pi/pull/8164) | 永远不要从尾随 assistant 消息继续（压缩崩溃） | 🔴 CLOSED | 修复 `agent.continue()` 在压缩余震中的崩溃——与 #8168 同源。 |
| [#8155](https://github.com/earendil-works/pi/pull/8155) | 渲染期间避免重置光标闪烁 | 🟢 OPEN | 直接修复 #8003 重渲染频繁重置光标状态的问题。 |
| [#8151](https://github.com/earendil-works/pi/pull/8151) | 隔离 widget 渲染失败并在失效时清理 ctx-owned widgets | 🔴 CLOSED | 修复扩展 `render()` 闭包捕获 ctx 导致的 `/reload` 后僵尸 widget bug。 |
| [#8181](https://github.com/earendil-works/pi/pull/8181) | opencode/opencode-go 暴露 DeepSeek V4 Flash 的 low 思考级别 | 🔴 CLOSED | 修复多提供商下 DeepSeek 思考级别映射不一致。 |
| [#8174](https://github.com/earendil-works/pi/pull/8174) | 重复模糊 length 停止时使用中性措辞 | 🔴 CLOSED | 修复误导性错误信息，避免用户误判为"上下文溢出"。 |

---

## 📈 功能需求趋势

按议题聚类看，社区当前的关注方向很清晰：

1. **压缩（Compaction）系统升级** — #6879、#8168、#8164、#8153、#8175、#8176 形成了一整条"压缩可靠性"主线，占据约 1/4 的活跃讨论。开发者呼吁：更早触发、边界安全、错误信息准确、对扩展可见。
2. **扩展（Extension）API 增强** — UI 弹窗事件 (#7147)、快捷键 ctx (#8180)、压缩失败回调 (#8175)、模型选择 pre-commit hook (#8169) 表明扩展作者正在要求更深的上下文访问权。
3. **TUI 体验打磨** — 滚动步进可配 (#7765)、光标闪烁 (#8003)、思考块折叠 (#8171)、隐藏思考块间距 (#8154)、搜索快捷键冲突 (#8183) 都是 TUI 成熟期的细节打磨。
4. **多提供商一致性** — DeepSeek V4 Flash 横跨 deepseek/opencode/opencode-go/baseten 四家，每家都有差异（#8182、#8181、#8146）；LLMTR 新提供商 (#8178)、xAI API 迁移 (#8124) 也在同步进行。
5. **本地推理体验** — llama.cpp 路由模式 (#8167)、Stone 模型列表 (model refresh #7381) 反映本地化部署需求。
6. **跨平台稳健性** — WSL 登录 (#6187)、Windows bash 沙箱 (#8170)、Windows Terminal 快捷键冲突 (#8183) 三件事说明 Windows 仍是短板。

---

## 💭 开发者关注点

综合反馈，开发者最持续的痛点可归纳为三点：

- **Compaction 不靠谱**：当前实现是"被动响应型"——只有 API 拒绝才触发压缩，导致部分长任务直接崩溃或丢失上下文。开发者希望压缩与回合语义对齐、可观测、可被扩展干预。
- **错误信息不准确**：`Context overflow recovery failed…`、`Response was truncated before completion` 等措辞常与真实原因不符（#8176、#8058），降低了排障效率。文档也需要更清晰的"如何中断当前回合"说明。
- **跨平台与沙箱缺位**：尤其是 Windows 下 bash 工具拥有过高权限（#8170），本地推理场景的模型发现（#8167、#7381）也存在状态不一致问题。社区期待更严格的命令白名单和统一的 provider 状态机。

> 这些问题在今天的 PR 浪潮中已有部分回应，但 #6879 仍处于 OPEN 状态，**下一轮压缩语义重写**仍是团队需要集中攻克的核心议题。

---

*日报基于 GitHub Issues / PRs 最近 24 小时更新生成。点击链接直达讨论。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
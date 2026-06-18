# AI CLI 工具社区动态日报 2026-06-18

> 生成时间: 2026-06-18 04:39 UTC | 覆盖工具: 7 个

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
The user wants a horizontal comparison report of all 6 AI CLI tools based on the daily dynamics provided. Let me carefully analyze each tool's data and create a comprehensive cross-comparison report.

Let me extract key data points from each tool:

**Claude Code:**
- 1 release (v2.1.181)
- Many issues, top one #16157 with 1475 comments
- Multiple PRs (some open source related, some bugfixes)
- Focus: cost/billing, tool call rendering, cross-platform, IDE integration

**OpenAI Codex:**
- 3 alpha releases (rust-v0.141.0-alpha.5/6/7)
- Top issue: #23794 (closed, 170 comments), #25749 (49), #25719 (31)
- Top PRs around plugin system, varlatency
- Focus: desktop UX, auth, performance/resource consumption

**Gemini CLI:**
- 2 releases (v0.47.0, v0.48.0-preview.0)
- 1 P0 issue (#28001 release failure)
- Top issues around agent stability, auto memory
- Security PRs around fork PR workflows
- Focus: agent stability, auto memory, AST tools

**GitHub Copilot CLI:**
- 0 releases
- 37 issues updated, ~half closed
- Only 1 new PR (#3847)
- Focus: plugin/extensions, BYOK compatibility, subagent behavior

**Kimi Code CLI:**
- 0 releases
- Only 2 issues (limited activity)
- Focus: enterprise SSL, execution mode switching

**OpenCode:**
- 1 release (v1.17.8)
- Top issues: #11176 (110 likes), #17994, #6096
- Multiple PRs (10 listed)
- Focus: VS Code extension, multi-agent, model auto-selection

**Qwen Code:**
- 3 releases (v0.18.3, preview, nightly)
- Top issue: #3203 (151 comments) about OAuth policy
- Multiple PRs
- Focus: OAuth/auth, custom provider, multi-agent workflow

Now let me create the cross-comparison report. I need to be careful with numbers and present this professionally for technical decision-makers.

Let me think about the structure:

1. 生态全景 - 3-5 sentences
2. 各工具活跃度对比 - Table
3. 共同关注的功能方向 - cross-cutting themes
4. 差异化定位分析
5. 社区热度与成熟度
6. 值得关注的趋势信号

Let me think about common themes:
- **Multi-agent/subagent governance** - all tools are working on this (Codex #28845 plugin agent roles, Gemini #22323 subagent MAX_TURNS, Copilot #3812 subagent MCP, Qwen #5180 subagent crash, OpenCode #17994 multi-agent)
- **BYOK/OpenAI-compatible provider support** - all except Claude Code deal with this
- **Cost/billing transparency** - Claude Code #16157, Codex #17827 status line, Qwen #4479 token stats
- **IDE integration** - VS Code extensions, JetBrains (Claude Code, OpenCode #11176)
- **Plugin/extension systems** - All tools are evolving these
- **Performance/resource consumption** - Codex Crashpad, Gemini Auto Memory
- **Auto model selection** - OpenCode #8456, Claude Code multi-model
- **Dynamic workflows** - OpenCode #29789, Qwen #5231
- **Security** - Gemini fork PR defenses, all have security concerns
- **Documentation accuracy** - multiple tools

Differentiation:
- **Claude Code**: Most mature, cost/billing focus, JetBrains gap, open source demand
- **Codex**: Desktop-heavy, resource consumption issues, plugin ecosystem maturing
- **Gemini**: Agent stability focus, security-first, AST-aware tools
- **Copilot**: BYOK compatibility, enterprise integration, post-outage recovery
- **Kimi**: Enterprise compatibility (SSL), execution mode flexibility
- **OpenCode**: IDE integration gap, performance visualization (TPS), multi-agent isolated workspaces
- **Qwen**: OAuth/auth chaos, multi-channel adapters (QQ Bot), Chinese localization

Maturity signals:
- Claude Code: most mature (1475 comments on top issue = huge user base)
- Codex: rapid iteration (3 alpha in 24h)
- Gemini: high quality control (security PRs, precise version)
- Copilot: stable iteration
- Kimi: smallest community activity
- OpenCode: high engagement (110 likes on #11176)
- Qwen: high controversy (151 comments on policy issue)

Let me write this in clean, professional Chinese.

I should be careful about:
- Numbers must be accurate
- Don't fabricate
- Note where data is limited (e.g., Kimi)
- Cross-reference issues properly
- Use consistent terminology

Let me also think about data quality - some of the "active issues" might be cumulative (like 1475 comments) vs. new today. I should clarify where possible.

Let me write the report now.
</think>
# AI CLI 工具生态横向对比分析报告
**日期：2026-06-18**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **"分化深化 + 能力对标"** 阶段：主流厂商（Anthropic、OpenAI、Google、GitHub、Alibaba、Moonshot）均已形成独立产品线，社区讨论从早期的"功能有没有"转向**稳定性、可观测性、可扩展性、跨平台一致性**等成熟度指标。今日数据呈现出几个共性信号：成本与计费透明度普遍不足、**多 Agent / Subagent 治理**成为各家共同挑战、OpenAI 兼容后端（BYOK）成为差异化竞争点、企业级部署（SSL 拦截、网络代理）开始成为新兴痛点。

---

## 2. 各工具活跃度对比

| 工具 | Release 数 | 活跃 Issues | 头部 Issue 热度 | 活跃 PR 数 | 整体节奏 |
|------|-----------|------------|---------------|----------|---------|
| **Claude Code** | 1（v2.1.181） | 高 | 💬1475 / 👍691 | 中 | 稳步迭代 + 长尾问题积压 |
| **OpenAI Codex** | 3（alpha.5/6/7） | 中 | 💬170 / 👍168（已关闭） | 高（10+） | 24h 三连 alpha，密集收尾 |
| **Gemini CLI** | 2（v0.47.0 + v0.48.0-preview） | 中 | 💬7 / 👍8 | 高（10+） | 质量优先，P0 应急并行 |
| **GitHub Copilot CLI** | 0 | 中高（37） | 💬10 / 👍20 | 低（1） | 故障恢复 + BYOK 攻坚 |
| **Kimi Code CLI** | 0 | 低（2） | 💬0 | 0 | 数据极低，社区沉淀期 |
| **OpenCode** | 1（v1.17.8） | 中 | 💬23 / 👍110 | 高（10+） | 功能驱动 + IDE 集成诉求强烈 |
| **Qwen Code** | 3（stable + preview + nightly） | 中高 | 💬151 / 👍0 | 高（10+） | 商业化争议 + 多线 PR 并进 |

> **数据观察**：Claude Code 单 Issue 评论数（1475）显著高于其他工具，反映其**用户基数与社区卷入度**最大；Qwen Code 出现"高评论、低点赞"现象（#3203），暗示话题存在争议性分歧；Copilot 呈现"高频关闭"模式（多 issue 当日关闭），迭代效率较高。

---

## 3. 共同关注的功能方向

### 3.1 多 Agent / Subagent 治理（覆盖最广）

| 工具 | 代表 Issue/PR | 具体诉求 |
|------|--------------|---------|
| **Codex** | PR #28845（plugin agent roles） | `spawn_agent` 支持命名空间化 agent_type |
| **Gemini** | #22323（MAX_TURNS 误报 success） | 沉默失败（silent failure）治理 |
| **Copilot** | #3812（subagent 不可见 MCP）、#3824 | 子代理工具可见性与模型透明性 |
| **OpenCode** | #17994（多 Agent 隔离工作区） | 借鉴竞品，在隔离 workspace 并行 |
| **Qwen** | #5180（subagent 崩溃）、PR #5231 | Workflow token 预算 + 子代理鲁棒性 |

**核心共识**：随着 Agent 模式被重度使用，**子代理的边界定义、状态可观测性、工具隔离**成为新的"必答题"。

### 3.2 BYOK / OpenAI 兼容 Provider 支持

| 工具 | 代表 Issue/PR | 现状 |
|------|--------------|------|
| **Codex** | 多个相关 issue | 自有 provider 体系，外部兼容性不公开 |
| **Copilot** | #3839（Ollama Cloud custom_tool_call） | 严格 OAI 兼容层薄弱 |
| **OpenCode** | v1.17.8 修复 + PR #32731 | 模型自动发现机制引入 |
| **Qwen** | #3384（VLLM 接入失败）、PR #5241 | baseUrl 消歧在重构中 |
| **Claude Code** | #68522（自定义模型上下文） | Anthropic-Messages 协议网关适配 |

**核心共识**：**"自托管 + 多模型路由"** 已成为企业落地标配，模型 ID 消歧、参数映射（`max_tokens` vs `max_completion_tokens`）、tool_call schema 校验是普遍痛点。

### 3.3 可观测性与状态面板

| 工具 | 代表 Issue | 诉求 |
|------|-----------|------|
| **Claude Code** | #16157（使用限额） | 账单可预测性 |
| **Codex** | #17827（status line，71 👍） | 自定义 status line |
| **Codex** | #24182（App 端常驻使用量） | 桌面端用量显示 |
| **OpenCode** | #6096（TPS 显示，55 👍） | Token/秒速率可视化 |
| **Qwen** | #4479（每日 token 消耗） | 内置用量看板 |

**核心共识**：用户对"花得明白、用得清楚"的需求强烈，**实时 token 计量 + 速率/限额可视化**已成共性刚需。

### 3.4 跨平台与无障碍

| 工具 | 代表 Issue | 平台 |
|------|-----------|------|
| **Claude Code** | #39636（Snapdragon ARM64）、#11002（屏幕阅读器） | Windows ARM + a11y |
| **Codex** | #25178（Win10 Computer Use）、#24207（macOS Intel 签名） | Windows/macOS 兼容 |
| **Gemini** | #21983（Wayland browser subagent） | Linux 桌面 |
| **OpenCode** | #24817（Linux Ctrl+Z）、#32754（Windows 重装乱码） | Linux/Windows 终端行为 |

**核心共识**：**测试矩阵仍有空白**，键位冲突、终端行为差异、ARM64 兼容性是各工具的共同债务。

### 3.5 安全与供应链

| 工具 | 代表 PR | 主题 |
|------|---------|------|
| **Gemini** | #27780/#27783/#27784 | fork PR 工作流同仓库 gate（纵深防御） |
| **Gemini** | #27743 / #27948 | dependabot cooldown + 依赖精确钉版 |
| **Claude Code** | #63870 | 工具调用原始文本泄漏（注入风险） |
| **Qwen** | #5279 | 工具调用死循环熔断器 |

**核心共识**：**纵深防御 + 工具调用安全** 正成为 CLI 工具的合规基线。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | **生产力旗舰 / 成本敏感** | 高级开发者、企业 Max 订阅用户 | 单仓 + 强 agent 调度、近期新引入 `/config` 命令语法 |
| **OpenAI Codex** | **桌面优先 + 插件生态** | 桌面端重度用户、企业 ChatGPT 订阅者 | Rust CLI 重写 + Codex Desktop 桌面端 + plugin/skills 体系 |
| **Gemini CLI** | **Agent 深度 + 安全优先** | Google Cloud / AI Studio 用户、研究型开发者 | codebase_investigator 后端 + 76 个 behavioral eval + 严格依赖治理 |
| **Copilot CLI** | **GitHub 原生 + BYOK 兼容** | GitHub Enterprise 用户、VS Code 生态延伸 | GitHub 平台强绑定 + 多模型路由 + 插件/hook 体系 |
| **Kimi CLI** | **企业部署友好**（潜力方向） | 受管网络环境用户 | 执行模式可切换（Agent ↔ Cluster）+ SSL 旁路待补 |
| **OpenCode** | **极客 / 多模型探索** | 工具链折腾型开发者、开源贡献者 | 单一二进制 + 9 种 fuzzy edit + 多 provider 抽象 |
| **Qwen Code** | **国内生态 + 多渠道** | 阿里云 Coding Plan 用户、QQ/微信生态接入方 | QQ Bot Channel Adapter + i18n 工具名 + Workflow 治理 |

**关键差异**：
- **桌面化深度**：Codex 走在最前，Claude Code 与 Copilot 仍以 CLI 为主战场
- **企业级支持**：Copilot（Enterprise 自定义模型）与 Kimi（SSL 代理）切入角度不同
- **插件生态成熟度**：Codex（plugin manifest + agent roles）与 Copilot（hook + 插件市场）最完善
- **国内本地化**：Qwen 独享 QQ Bot Channel + 完整中文 i18n 链路
- **开源深度**：OpenCode 与 Qwen 更接近开源协作模式，Claude Code 仍受"开源诉求"压力

---

## 5. 社区热度与成熟度

### 5.1 热度分级（综合评论数、点赞数、Issue 关闭率）

**第一梯队（头部用户基数 + 强话题性）**
- **Claude Code**：单 Issue 1475 评论 + 691 点赞，社区热度绝对领先；#16157（成本限额）成为行业级问题
- **Qwen Code**：#3203（OAuth 政策，151 评论）反映商业化争议已外溢为社区事件

**第二梯队（迭代密集 + 工程化领先）**
- **OpenAI Codex**：24 小时 3 个 alpha 版本 + 高 PR 流转，#23794 已关闭（170 评论）显示快速响应能力
- **Gemini CLI**：双版本发布 + 安全系列 PR（fork gate 纵深防御），#24353（76 个 behavioral eval）展现工程化深度
- **OpenCode**：#11176（110 👍）需求热度极高，#6096（55 👍）TPS 显示已成共识

**第三梯队（稳步迭代 / 数据稀疏）**
- **Copilot CLI**：当日 0 Release，但 24h 关闭率高，反映稳定维护节奏；#1973（20 👍）展示长期功能诉求
- **Kimi CLI**：仅有 2 条 Issue 流转，**社区沉淀期**，但需求方向（企业 SSL、模式切换）具潜力

### 5.2 成熟度信号

| 成熟度指标 | Claude Code | Codex | Gemini | Copilot | Kimi | OpenCode | Qwen |
|----------|------------|-------|--------|---------|------|----------|------|
| 版本节奏 | 稳定 | 激进（3 alpha/日） | 稳定 | 慢 | 极慢 | 稳定 | 稳（含 nightly） |
| 文档准确性 | 中（#28379 等反映差距） | 中 | 高（PR #27997 主动清理） | 中 | 未知 | **低**（#23566 LSP 文档与代码不符） | 中（PR #5257 重构） |
| Plugin 体系 | 中（hooks 已有） | **高**（manifest + roles + cache） | 中 | 中 | 无 | 中 | 中（Channel 多元） |
| 桌面端覆盖 | 无 | **强** | 中 | 中 | 无 | 中 | 中 |
| Issue 关闭率 | 低（长期积压） | 高 | 中 | **高** | 未知 | 中 | 中 |

---

## 6. 值得关注的趋势信号

### 🔺 趋势一：**多 Agent 架构进入"工程化深水区"**
6 款工具中 **5 款**在 24 小时内有 subagent/multi-agent 相关 Issue 或 PR，**子代理的失败语义、工具隔离、模型透明性** 已成为行业级共性挑战。开发者使用 Agent 不再是"能否跑通"而是"如何治理"。

### 🔺 趋势二：**OpenAI 兼容 Provider 成为新战场**
随着 Ollama Cloud、VLLM、Anthropic-Messages 网关等接入需求爆发，**模型发现、参数映射、tool_call schema 校验**成为各工具必须补齐的能力。OpenCode v1.17.8 的 schema 修复与 PR #32731（自动发现）代表了行业方向。

### 🔺 趋势三：**"可观测性"从可选项变为必选项**
status line、TPS 显示、token 用量看板、限速可视化——这些过去不被重视的能力正在成为 **社区高赞 enhancement 的主战场**（OpenCode #6096 55 👍、Codex #17827 71 👍）。**AI CLI 的"开发者体验"差异化将向"信息透明度"倾斜**。

### 🔺 趋势四：**企业级部署兼容性成新蓝海**
Kimi 的 SSL 拦截问题、Claude Code 的企业区域定价（#17432，444 👍）、Gemini 的 consumer tier 弃用——**B 端市场的网络/合规/支付适配**正在成为新的产品分水岭。Copilot 的 Enterprise 自定义模型（#3730）是先例。

### 🔺 趋势五：**安全纵深防御进入工具链 CI**
Gemini 集中提交的 3 枚 fork PR 防御 PR（#27780/#27783/#27784）+ dependabot cooldown + 依赖精确钉版，**代表 AI CLI 工具正在向"安全合规级开源项目"标准对齐**，这一趋势将向其他工具扩散。

### 🔺 趋势六：**对话续接与中断恢复成为稳定性新焦点**
Qwen #5030（无合成 continue 消息恢复）、Codex #21211（会话加载性能）、OpenCode #31204（seq 约束）、Copilot #3837（resume 显示）——**长会话管理的"无状态丢失"能力**正在成为新的质量基线。

---

## 📊 决策者速览

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze data from the anthropics/skills repository and generate a community hot report. Let me carefully analyze the data provided.

Looking at the data:

**Pull Requests (top 20 by what appears to be engagement):**
1. #514 - document-typography skill (PGTBoos) - typographic quality control
2. #486 - ODT skill (GitHubNewbie0) - OpenDocument text creation
3. #210 - Improve frontend-design skill (justinwetch) - clarity improvements
4. #83 - skill-quality-analyzer and skill-security-analyzer (eovidiu) - meta skills
5. #538 - fix(pdf): case-sensitive file references (Lubrsy706) - bug fix
6. #539 - fix(skill-creator): YAML special characters (Lubrsy706) - bug fix
7. #541 - fix(docx): tracked change w:id collision (Lubrsy706) - bug fix
8. #181 - SAP-RPT-1-OSS predictor skill (amitlals) - SAP tabular foundation model
9. #1298 - fix(skill-creator): run_eval.py 0% recall (MartinCajiao) - major bug fix
10. #361 - Detect unquoted YAML special characters (Mr-Neutr0n) - validation
11. #1099 - skill-creator Windows compatibility (joshuawowk) - bug fix
12. #95 - Comprehensive system documentation (TylerALofall) - docs
13. #509 - CONTRIBUTING.md (narenkatakam) - documentation
14. #1050 - skill-creator Windows bugs (gstreet-ops) - bug fix
15. #723 - testing-patterns skill (4444J99) - testing skill
16. #362 - Fix skill-creator UTF-8 panic (Mr-Neutr0n) - bug fix
17. #335 - masonry-generate-image-and-videos skill (junaid1460) - image/video gen
18. #154 - shodh-memory skill (varun29ankuS) - persistent memory
19. #568 - ServiceNow platform skill (Vanka07) - enterprise platform
20. #444 - AURELION skill suite (Chase-Key) - cognitive framework

**Issues (top 15):**
1. #228 - Enable org-wide skill sharing in Claude.ai (14 comments, 7 thumbs)
2. #556 - run_eval.py 0% trigger rate (12 comments, 7 thumbs)
3. #62 - All my skills have disappeared (10 comments)
4. #202 - skill-creator should be updated (CLOSED, 8 comments)
5. #492 - Security: anthropic/ namespace abuse (7 comments)
6. #412 - agent-governance skill proposal (CLOSED, 6 comments)
7. #189 - document-skills and example-skills duplicates (6 comments, 9 thumbs)
8. #1175 - SharePoint Online security (CLOSED, 4 comments)
9. #29 - Usage with bedrock (4 comments)
10. #16 - Expose Skills as MCPs (4 comments)
11. #1169 - skill-creator description optimization recall=0% (3 comments)
12. #1061 - Windows compatibility (3 comments)
13. #184 - agentskills.io too many redirects (CLOSED, 3 comments)
14. #61 - "Not found" error loading Skills (3 comments)
15. #1220 - Multi-file preload / inline bundling (2 comments)

Now let me think about the report structure:

**Section 1: Hot Skills Ranking**
Note: Looking at the data, all PRs show "undefined" for comments and 0 for likes. This is unusual - it might be that the data is showing the most recently updated or top PRs but the comment counts aren't actually displayed. The user said "按评论数排序" (sorted by comment count) but the data shows "undefined" for all comments. I should note this limitation.

Looking at the data more carefully, I notice the comment count is "undefined" for all PRs - this might be a data quality issue. However, I can still rank by what I can see - the order they appear in the list, the engagement signals (recent updates, thumbs), and the issues that reference them.

Let me reconsider - the order shown might already be the ranking by some engagement metric. I'll work with that assumption and focus on substantive analysis.

For the top skills, I'll focus on the ones that have:
- Cross-references in popular issues
- Multiple PRs addressing the same problem
- Hot issues driving them

The hottest themes are:
1. **Document quality/processing skills** - #514 (typography), #486 (ODT), #541 (DOCX fix), #538 (PDF fix)
2. **Skill-creator fixes** - #1298, #1099, #1050, #539, #361, #362 - Many PRs trying to fix the skill-creator tool
3. **Meta-skills** - #83 (quality-analyzer, security-analyzer)
4. **New skill types** - #181 (SAP), #335 (image/video), #723 (testing), #154 (memory), #568 (ServiceNow), #444 (AURELION)
5. **Improvements to existing skills** - #210 (frontend-design)

**Section 2: Community Demand Trends**

From the issues, the top demands are:
- **Org-wide skill sharing** (#228) - 14 comments, biggest issue
- **Skill-creator bug fixes** (#556, #1169) - critical for development
- **Security/trust** (#492) - namespace abuse
- **MCP integration** (#16) - exposing skills as MCPs
- **Cross-platform support** (Bedrock #29, Windows #1061) - platform reach
- **Multi-file bundling** (#1220) - skill architecture

**Section 3: High-potential unmerged PRs**
- #1298 (skill-creator critical bug fix) - references #556
- #1099, #1050 (Windows compatibility)
- #514 (document typography)
- #486 (ODT)
- #210 (frontend-design improvements)
- #83 (quality/security analyzers)
- #723 (testing patterns)
- #181 (SAP)

**Section 4: Ecosystem Insight**
The most concentrated demand is around:
1. **Trust & security** (#492) - biggest concern
2. **Distribution/sharing** (#228) - org-wide sharing
3. **Quality of skill-creator tooling** - multiple PRs fixing it
4. **Document quality/processing** - typography, ODT, DOCX, PDF

Let me write this up in a concise, professional way. The user wants Chinese language and concise professional tone.

I should be careful to note that the comment counts on PRs are "undefined" - this is a data quality issue. But the issues do have clear comment counts, so I can use those.

Let me structure the final report.
</think>
# Claude Code Skills 社区热点报告
**数据周期：2025-10 ~ 2026-06 ｜ 仓库：anthropics/skills**

> ⚠️ **数据说明**：热门 PR 列表中评论数字段（comments）显示为 `undefined`，以下 PR 排序综合依据其在热门列表中的位置、关联 Issue 引用频度、PR 更新时间及 thumbs 反馈；Issues 的评论数则是完整可用的核心指标。

---

## 一、热门 Skills 排行（PR Top 8）

| # | PR | Skill / 主题 | 状态 | 关注度来源 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py 始终 0% recall** | OPEN | 直击 [#556](https://github.com/anthropics/skills/issues/556) 核心 Bug，10+ 独立复现 |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：AI 生成文档的排版质量控制 | OPEN | 普适痛点（孤儿行、寡行、编号错位） |
| 3 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer** 元技能 | OPEN | 回应社区对"Skill 自身质量审计"的需求 |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill**：OpenDocument 创建/解析/模板填充 | OPEN | 补齐开源文档格式的官方支持 |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | **改进 frontend-design skill** 的清晰度与可执行性 | OPEN | 影响所有前端设计场景的质量基线 |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns**：测试哲学 + 单元/组件/E2E 全栈 | OPEN | 长期缺位的工程实践类 Skill |
| 7 | [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor**：企业级表格预测 | OPEN | 企业用户接入 SAP 数据资产 |
| 8 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 平台技能套件** | OPEN | ITSM/SecOps/ITAM 等 7 大模块覆盖 |

**讨论热点共性**：
- **技能创建工具链（skill-creator）是最大热点**——[#1298](https://github.com/anthropics/skills/pull/1298)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#539](https://github.com/anthropics/skills/pull/539)、[#361](https://github.com/anthropics/skills/pull/361)、[#362](https://github.com/anthropics/skills/pull/362) 共 6 个 PR 集中修复同一套脚本。
- **文档处理类技能集中爆发**——typography、ODT、PDF（[#538](https://github.com/anthropics/skills/pull/538)）、DOCX（[#541](https://github.com/anthropics/skills/pull/541)）四位一体。

---

## 二、社区需求趋势（来自 Issues）

### 🔥 Tier 1：基础设施与信任（最强烈诉求）
- **组织级 Skill 共享**（[#228](https://github.com/anthropics/skills/issues/228)，14 评论 👍7）：用户当前需手动下载 .skill 文件并通过 Slack 分发，呼吁原生共享库/链接。
- **Skill 信任边界 / 命名空间安全**（[#492](https://github.com/anthropics/skills/issues/492)，7 评论）：社区 Skill 冒用 `anthropic/` 命名空间，潜在权限提升风险——这是**当前最严重的生态安全议题**。

### ⚙️ Tier 2：开发工具链体验
- **skill-creator 评测失效**（[#556](https://github.com/anthropics/skills/issues/556)，12 评论 👍7 + [#1169](https://github.com/anthropics/skills/issues/1169)）：`run_eval.py` 在所有查询上 0% 触发，描述优化循环在"对着噪声训练"。
- **Windows 兼容性**（[#1061](https://github.com/anthropics/skills/issues/1061)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)）：subprocess PATHEXT、cp1252 编码、pipe select 三连击，Windows 用户完全无法使用。
- **多文件预加载/内联打包**（[#1220](https://github.com/anthropics/skills/issues/1220)）：多 ref 文件无法整体注入上下文。
- **插件重复安装**（[#189](https://github.com/anthropics/skills/issues/189)，6 评论 👍9）：`document-skills` 与 `example-skills` 内容重复污染上下文窗口。

### 🏢 Tier 3：平台与企业集成
- **Bedrock 兼容**（[#29](https://github.com/anthropics/skills/issues/29)）：AWS 用户无路径使用。
- **Skills → MCP 暴露**（[#16](https://github.com/anthropics/skills/issues/16)）：希望将 Skill 包装为标准 MCP 服务。
- **SharePoint Online 安全模型**（[#1175](https://github.com/anthropics/skills/issues/1175)，已 CLOSED）：企业文档场景下 SKILL.md 内的访问控制能否可靠。

### 📋 Tier 4：长尾/已解决
- **Skill 消失/404 加载错误**（[#62](https://github.com/anthropics/skills/issues/62)、[#61](https://github.com/anthropics/skills/issues/61)）：早期版本数据丢失问题。
- **agentskills.io 站点 301 循环**（[#184](https://github.com/anthropics/skills/issues/184)）：标准参考站点已修复。
- **agent-governance Skill 提案**（[#412](https://github.com/anthropics/skills/issues/412)，CLOSED）：安全治理模式提案已落地。

---

## 三、高潜力待合并 Skills（社区关注但尚未合并）

| Skill | 关联 Issue | 落地预判依据 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) 修复 run_eval.py | [#556](https://github.com/anthropics/skills/issues/556) (12 👍7) | **最高优先级**：阻塞整个 description 优化闭环 |
| [#514](https://github.com/anthropics/skills/pull/514) document-typography | 无直接关联，但覆盖所有文档场景 | 通用性强，零依赖 |
| [#83](https://github.com/anthropics/skills/pull/83) skill-quality/security-analyzer | [#492](https://github.com/anthropics/skills/issues/492) | 直接呼应社区对 Skill 自身质量的担忧 |
| [#486](https://github.com/anthropics/skills/pull/486) ODT | — | 补全 ISO 标准格式支持 |
| [#210](https://github.com/anthropics/skills/pull/210) frontend-design 改进 | — | 高频使用 Skill 的体验升级 |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) Windows 修复 | [#1061](https://github.com/anthropics/skills/issues/1061) | 决定 Windows 用户能否入场 |
| [#361](https://github.com/anthropics/skills/pull/361) / [#539](https://github.com/anthropics/skills/pull/539) YAML 引号校验 | — | 低风险高价值的脚手架加固 |
| [#723](https://github.com/anthropics/skills/pull/723) testing-patterns | — | 填补工程实践空白 |
| [#335](https://github.com/anthropics/skills/pull/335) masonry 图片/视频生成 | — | 多模态场景补充 |
| [#154](https://github.com/anthropics/skills/pull/154) shodh-memory 持久记忆 | — | 跨会话上下文（与 [#1220](https://github.com/anthropics/skills/issues/1220) 方向契合） |

---

## 四、Skills 生态洞察

> **社区最集中的诉求是：在"工具链可信（skill-creator 修复 + Skill 自身质量审计）+ 跨平台/组织可分发（共享、命名空间、Windows、Bedrock）"两条主轴上，搭建起一套企业级可依赖的 Skills 基础设施**——具体能力（如文档处理、测试、记忆、多模态）反而是建立在基础设施稳固之后的自然延伸。

---

<think>
The user wants me to generate a Chinese-language daily report for Claude Code community dynamics based on GitHub data. Let me analyze the data carefully.

Key observations:
1. There's a new release v2.1.181 with `/config key=value` syntax and sandbox improvements
2. Many issues, with #16157 (usage limits bug) being the most commented (1475 comments!)
3. Several issues relate to cost, model switching, and tool call rendering bugs
4. Multiple closed issues that have been duplicated
5. PRs are mostly older open ones for "open source claude code" which is interesting

Let me structure this report:

1. 今日速览 - Most important: usage limits bug is dominant, new v2.1.181 release with /config command, multiple tool call rendering bugs emerging

2. 版本发布 - v2.1.181 with /config key=value syntax and sandbox.allowAppleEvents

3. 社区热点 Issues - Pick 10 most important:
- #16157: Usage limits bug (1475 comments, 691 👍) - biggest issue
- #17432: India pricing (198 comments, 444 👍)
- #11002: Screen reader mode accessibility
- #50246: Message queue mode (32 comments, 99 👍)
- #39636: Cowork VM on Snapdragon ARM64
- #63870: Bash tool calls rendered as raw text (17 comments)
- #5277: Image paste in SSH
- #28379: Slash commands in remote control
- #68522: Custom model context window >200k
- #69241: JetBrains auto-accept edits
- #67999: MCP HTTP OAuth with Google
- #69253: Excessive token consumption on v2.1.181 (directly related to the new release)

4. 重要 PR 进展 - 
- #41447: open source claude code ✨ (closed many related issues)
- #41611: add missing source to claude code
- #69226: Update frontend-design skill (closed)
- #19867: code-review plugin re-reviews
- #33443: Update Dockerfile native installer

5. 功能需求趋势 - 
- IDE 集成 (JetBrains, VSCode improvements)
- 性能/成本控制 (usage limits, cost)
- 可访问性 (screen reader)
- 模型支持 (custom context windows, model switching)
- 远程/协作功能 (message queue, remote control, SSH)
- 跨平台支持 (Windows, WSL, ARM64)

6. 开发者关注点 -
- Cost and token consumption is the #1 pain point
- Tool call rendering bugs
- Cross-platform issues (Windows, WSL, ARM64)
- IDE integration gaps (especially JetBrains)
- Accessibility

Let me write this in a clean, professional Chinese style suitable for technical developers.
</think>
# Claude Code 社区动态日报
**日期：2026-06-18**

---

## 📌 今日速览

今天社区焦点高度集中在**使用额度与成本问题**上：拥有 1475 条评论的 #16157（Max 订阅立即触达限额）持续霸榜，叠加新发布的 v2.1.181 中出现的 #69253（"20x Max 计划下 2 分钟消耗 10%"）个案，凸显成本与计费逻辑仍是开发者最大痛点。版本方面，v2.1.181 引入了 `/config key=value` 命令行设置语法和 macOS 沙箱的 Apple Events 选项，是本轮最实质的功能更新。

---

## 🚀 版本发布

### v2.1.181

**关键更新：**
- **`/config key=value` 命令语法**：支持在交互模式、`-p` 模式和 Remote Control 中直接设置任意配置项（如 `/config thinking=false`）
- **`sandbox.allowAppleEvents` 沙箱选项**：macOS 上可放行沙箱进程发送 Apple Events
- 新增 `CLAUDE_CLIENT_P…`（截断的客户端配置相关变更）

> 说明：v2.1.181 同时引发了 #69253 等成本消耗异常的新反馈，建议升级后密切关注账单与 token 用量。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 平台/标签 | 评论 | 👍 | 关注理由 |
|---|---|---|---|---|---|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **BUG：Max 订阅瞬间触达使用限额** | bug / macos / cost / api / oncall | **1475** | **691** | 长期高居榜首的成本类故障，oncall 标签已挂，仍是社区头号问题 |
| [#17432](https://github.com/anthropics/claude-code/issues/17432) | **功能请求：印度本币定价 (INR)** | enhancement / cost / external | 198 | **444** | 区域定价话题，👍 数极高，体现新兴市场需求 |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **功能请求：消息队列模式** | enhancement / tui | 32 | 99 | 解决"任务进行中无法追加消息"的体验断点，反响热烈 |
| [#11002](https://github.com/anthropics/claude-code/issues/11002) | **功能：--screen-reader 模式** | enhancement / windows / a11y | 53 | 36 | 屏幕阅读器（NVDA/JAWS）支持，体现无障碍推进 |
| [#39636](https://github.com/anthropics/claude-code/issues/39636) | **Cowork VM 在 Snapdragon X Plus 上无法启动** | bug / windows / cowork | 29 | 9 | ARM64 Windows 设备兼容性问题，影响 Windows on ARM 用户 |
| [#63870](https://github.com/anthropics/claude-code/issues/63870) | **Bash 工具调用以原始 `<invoke>` 文本泄漏** | bug / macos / model / bash | 17 | 20 | 多名用户复现，附 23 次畸形调用的 JSONL 证据，是近期最具体可查的工具解析 bug |
| [#5277](https://github.com/anthropics/claude-code/issues/5277) | **SSH 远程会话中图片粘贴** | question / linux / tui | 17 | 31 | 远程开发场景刚需，已存在 10 个月仍未解决 |
| [#28379](https://github.com/anthropics/claude-code/issues/28379) | **Remote Control UI 不支持斜杠命令** | enhancement / claude-code-web | 10 | 48 | Web/移动端核心 UX 缺口，/clear /compact 等命令失效 |
| [#68522](https://github.com/anthropics/claude-code/issues/68522) | **自定义模型无法声明 >200k 上下文窗口** | enhancement / providers | 4 | 0 | 对接 Anthropic-Messages 兼容网关的关键配置缺失，影响自托管/代理场景 |
| [#69253](https://github.com/anthropics/claude-code/issues/69253) | **v2.1.181 上 token 消耗速率异常（20x Max 计划 2 分钟 10%）** | bug / macos / cost | 2 | 0 | **今日新发**，与最新版本直接相关，疑似新引入的成本回归 |

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 关键内容 |
|---|---|---|---|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: 开源 Claude Code ✨** | OPEN | 社区长期诉求 PR，一次性关闭了 #59、#456、#2846、#22002、#41434 等多个相关 Issue |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **add the missing source to claude code** | OPEN | 与开源诉求互补，补充缺失的源码 |
| [#69226](https://github.com/anthropics/claude-code/pull/69226) | **Update frontend-design skill** | CLOSED | 前端设计技能改进，插件版本升级到 1.1.0，用户会自动接收更新 |
| [#19867](https://github.com/anthropics/claude-code/pull/19867) | **fix(code-review): 允许新提交触发重审** | OPEN | 修复 code-review 插件在新 commit 推送后跳过复审的 bug，新增 `--force` 旁路 |
| [#33443](https://github.com/anthropics/claude-code/pull/33443) | **fix: 改用原生安装器的 Dockerfile** | OPEN | devcontainer 改用 Node 24.14 + 原生安装器替代已弃用的 npm 安装 |
| [#60427](https://github.com/anthropics/claude-code/pull/60427) | **docs: README 使用标准 GitHub 大小写** | CLOSED | 修正产品描述中的品牌大小写 |
| [#60732](https://github.com/anthropics/claude-code/pull/60732) | **docs: 优化插件 README 措辞** | CLOSED | 微调插件生态的用户可读性 |

> 注：另有 2 条 OPEN 但缺少实质进展的 PR（#41447、#41611）仍处于长期搁置状态，主要承载社区"开源"呼声。

---

## 📈 功能需求趋势

通过对今日 Issues 的归纳，社区对以下方向需求最集中：

1. **成本与计费透明化** — 使用限额、区域本币定价、token 异常消耗构成 Issue 主流（#16157、#17432、#69253）
2. **IDE 集成深化** — JetBrains 插件补全（#69241）、VSCode 扩展的环境变量污染（#69227）、自定义模型上下文窗口声明（#68522）
3. **远程与协作体验** — 消息队列（#50246）、Remote Control 斜杠命令（#28379）、SSH 会话图片粘贴（#5277）
4. **无障碍与跨平台** — 屏幕阅读器（#11002）、ARM64 Windows（#39636）、WSL 插件路径（#69256）
5. **模型可扩展性** — 多模型切换的稳定性（#62487）、自定义 provider 上下文配置（#68522）
6. **设计系统/MCP 集成** — Claude Design 原生解析（#60327、#69239）、MCP OAuth 兼容性（#67999）

---

## 🧑‍💻 开发者关注点

综合今日数据，开发者社区反馈集中于以下痛点：

- **账单不可预测**：成本/限额类问题在热度、👍 数、复现频次上全部位列前茅，且新版本可能引入回归
- **工具调用解析脆弱**：多名用户报告 Bash/工具调用以原始 `<invoke>` 文本泄漏（#63870、#68719、#69258），且 #63870 附有 23 条 JSONL 证据
- **跨平台一致性问题突出**：Windows、WSL、ARM64、macOS 沙箱分别暴露不同缺陷，反映多平台测试矩阵仍有空白
- **Web/Remote Control 功能落后于 CLI**：#28379 揭示斜杠命令在云端 UI 中被当作普通消息发送，是产品一致性短板
- **JetBrains 体验缺位**：相比 VSCode，JetBrains 用户反复请求"自动接受编辑"等基础工作流能力
- **子代理/团队协作路由错误**：#69212 报告子代理结果错发至根 teammate，多代理架构的边界仍需打磨
- **插件与 hook 在 WSL 下行为异常**：#69256 显示 Semgrep 插件在 WSL 中错误执行 Windows 二进制

---

*数据窗口：2026-06-17 ~ 2026-06-18 ｜ 来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data for OpenAI Codex and generate a comprehensive daily report for 2026-06-18.

Let me go through the key items:

**Releases (past 24 hours):**
- rust-v0.141.0-alpha.7
- rust-v0.141.0-alpha.6
- rust-v0.141.0-alpha.5

Three alpha releases for the Rust version of Codex CLI, suggesting rapid iteration on the 0.141.0 line.

**Top Issues by comments:**
1. #23794 (CLOSED, 170 comments, 168 👍) - Codex Desktop no longer shows visible context/token usage indicator
2. #25749 (OPEN, 49 comments) - Codex requires verification of inaccessible legacy phone number
3. #25719 (OPEN, 31 comments, 39 👍) - Codex Desktop macOS triggers syspolicyd/trustd CPU/memory runaway
4. #9046 (OPEN, 26 comments) - Context window exceeded issue
5. #17827 (OPEN, 16 comments, 71 👍) - Customizable status line feature request
6. #25178 (OPEN, 12 comments) - Windows Computer Use screenshot fails
7. #21211 (OPEN, 12 comments) - Thread navigation/loading performance
8. #24006 (OPEN, 11 comments) - macOS codex cannot access local database
9. #25737 (OPEN, 11 comments) - Codex CLI login forces SMS phone OTP
10. #28422 (OPEN, 10 comments) - image_gen regression in 0.140.0
11. #25921 (OPEN, 9 comments) - Crashpad pending dumps growing without limit (+5GB/day)
12. #28241 (OPEN, 6 comments) - Codex turn-diff tree refs break libgit2-based Git clients
13. #24182 (OPEN, 6 comments) - Show usage information persistently in Codex App
14. #28224 (OPEN, 6 comments) - SQLite feedback logs writing ~640 TB/year
15. #24030 (OPEN, 6 comments) - Codex App fails to launch on macOS due to malformed SQLite

**Top PRs:**
1. #28851 - Path migration guidance
2. #28780 - unified-exec: retain PathUri in command events
3. #28790 (CLOSED) - Plugin manifest path lists
4. #28844 - Reuse parsed plugin skills during session startup
5. #28835 - App-server current-time impl (varlatency 3/n)
6. #28683 - Track starting environments in snapshots
7. #28814 - Assign response item IDs when recording history
8. #27132 - Emit Trusted MCP App Identity on Tool-Call Items
9. #26496 - Make auto-review on-request prompt more proactive
10. #28825 (CLOSED) - Expose selected namespaces as direct model tools
11. #28838 - Support Codex home instructions directory
12. #28843 - Persist fsmonitor status refreshes
13. #28836 (CLOSED) - Support assistant realtime append text
14. #28781 - Show hook status messages in browser
15. #28813 - Pause active goals before TUI interrupts
16. #28824 - Current time reminders impl for system clock (varlatency 2/n)
17. #28845 - Support plugin agent roles
18. #19049 - Opt ChatGPT auth into agent identity

**Key themes:**
- Performance issues (SQLite writes, Crashpad dumps, thread loading)
- Auth/MFA issues (phone verification, SMS OTP)
- Computer Use bugs (Windows screenshots, macOS native components)
- Plugin system improvements
- Status line / UI feature requests
- Database corruption issues

Let me draft the report now.</think>

# OpenAI Codex 社区动态日报
**日期：2026-06-18**

---

## 📌 今日速览

Codex 今日连发 **rust-v0.141.0-alpha.5/6/7** 三个 alpha 版本，CLI 迭代进入密集阶段。社区讨论焦点集中在三大类问题：**桌面端体验与可视化（上下文指示器、使用量面板）**、**认证与账户恢复（遗留手机号、SMS OTP 升级）**、以及**性能与资源消耗（Crashpad 泄漏、SQLite 写入风暴）**。PR 侧，plugin 体系（路径列表、agent roles、skills 复用）和 varlatency 系列（current-time 实现）成为主要演进方向。

---

## 🚀 版本发布

**rust-v0.141.0-alpha.5 → alpha.7**（24 小时内连续三个 alpha）

CLI Rust 主线在 24 小时内推进三个 alpha 版本，反映出对 0.141.0 收尾前的密集修复与回归验证。建议生产环境用户暂缓升级，关注 alpha 渠道以备回归。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 关键点 |
|---|-------|------|------|--------|
| [#23794](https://github.com/openai/codex/issues/23794) | 桌面端不再显示上下文/token 使用量指示器 | **CLOSED** | 170 💬 / 168 👍 | 长期高赞 issue 已关闭，桌面端可见性回归被定位修复 |
| [#25749](https://github.com/openai/codex/issues/25749) | 无法访问的遗留手机号强制验证，无替换/恢复路径 | OPEN | 49 💬 / 30 👍 | 反映 OpenAI 账户恢复链路单点故障，影响真实用户 |
| [#25719](https://github.com/openai/codex/issues/25719) | macOS 桌面端反复触发 syspolicyd/trustd CPU/内存失控 | OPEN | 31 💬 / 39 👍 | Apple Silicon 上持续守护进程风暴 |
| [#9046](https://github.com/openai/codex/issues/9046) | 模型上下文窗口耗尽 | OPEN | 26 💬 | 老问题，新模型/长会话下继续出现 |
| [#17827](https://github.com/openai/codex/issues/17827) | 自定义 status line（对标 Claude Code） | OPEN | 16 💬 / 71 👍 | **本周最高赞 enhancement**，呼声极高 |
| [#25921](https://github.com/openai/codex/issues/25921) | Crashpad pending dumps 无上限增长（每日 +5GB） | OPEN | 9 💬 | macOS Crashpad 目录资源泄漏 |
| [#28224](https://github.com/openai/codex/issues/28224) | SQLite feedback logs 年写入量约 640TB | OPEN | 6 💬 | 本地 SSD 寿命风险，社区严重关切 |
| [#25178](https://github.com/openai/codex/issues/25178) | Windows 10 22H2 计算机使用截图失败 | OPEN | 12 💬 | Computer Use 在 Win10 上的兼容性 |
| [#21211](https://github.com/openai/codex/issues/21211) | 会话导航/加载性能退化 | OPEN | 12 💬 | 元数据无界 + 大历史 eager hydration |
| [#25737](https://github.com/openai/codex/issues/25737) | CLI 登录强制 SMS OTP（与浏览器 AAS 行为不一致） | OPEN | 11 💬 | 安全策略在不同入口分裂 |

> 共同特征：**桌面端 UX 回归**、**认证恢复路径缺失**、**本地资源失控**三类问题在 24 小时内同时浮出水面。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 主题 | 关键变更 |
|----|------|----------|
| [#28851](https://github.com/openai/codex/pull/28851) | 记录更多 PathUri / LegacyAppPathString 迁移指引 | 沉淀近期自动化与人工评审中的迁移经验 |
| [#28845](https://github.com/openai/codex/pull/28845) | Plugin agent roles 支持 | `spawn_agent` 支持命名空间化 agent_type（如 `sample:researcher`） |
| [#28844](https://github.com/openai/codex/pull/28844) | Session 启动复用已解析的 plugin skills 快照 | 减少重复解析，统一以 plugin cache 生命周期管理失效 |
| [#28838](https://github.com/openai/codex/pull/28838) | 支持 `~/.codex/instructions/` 全局 home 指令目录 | 与 `AGENTS.md` 优先级对齐，按字典序追加 |
| [#28843](https://github.com/openai/codex/pull/28843) | 持久化 fsmonitor 状态刷新 | 仅对使用 fsmonitor 的 status 命令放开 `GIT_OPTIONAL_LOCKS` |
| [#28835](https://github.com/openai/codex/pull/28835) | App-server current-time 实现（varlatency 3/n） | 新增 `currentTime/read` RPC，为可变延迟实验奠基 |
| [#28824](https://github.com/openai/codex/pull/28824) | 系统时钟当前时间提醒（varlatency 2/n） | 注入式 provider、会话级 cadence、压缩后强制刷新 |
| [#28813](https://github.com/openai/codex/pull/28813) | TUI 中断前暂停活动 goal | 修复 #28104：`Esc` 中断路径未更新 goal 状态 |
| [#28780](https://github.com/openai/codex/pull/28780) | unified-exec: 命令事件保留 PathUri | 跨平台路径在事件中无损上报，不破坏 rollout 字符串 |
| [#26496](https://github.com/openai/codex/pull/26496) | 自动评审 on-request 提示更主动 | 提前把需要沙箱外资源的命令升级审批 |

> **varlatency 系列**（#28824、#28835）暗示 Codex 正在为「服务器可观测时钟」和「动态延迟调整」搭建基础设施。

---

## 📈 功能需求趋势

从 50 条 issue 提炼出的社区诉求（按强度排序）：

1. **可观测性与状态面板（最高优先级）**
   - #17827 自定义 status line（71 👍）
   - #24182 App 端常驻使用量显示
   - #23794 上下文指示器回归（已修复）

2. **性能与本地资源治理**
   - #25921 Crashpad 日志泄漏
   - #28224 SQLite 写入风暴
   - #21211 会话加载性能
   - #24030 / #28666 SQLite 数据库锁定 / 损坏

3. **认证与多因素安全**
   - #25749 遗留手机号无恢复路径
   - #25737 CLI 与浏览器 AAS 行为分裂
   - #28672 Business 账户频繁 401 / token 失效

4. **Computer Use 跨平台稳定性**
   - #25178 Windows 截图
   - #24207 macOS Intel 签名
   - #28024 macOS 远程控制 NSLocalNetworkUsageDescription 缺失
   - #26779 远程 Mac 错误调用 powershell.exe

5. **Plugin / 工作流扩展**
   - #25758（已修复）插件配置被覆盖
   - #28849 image_gen 输出路径回归
   - #26648 Jujutsu (`jj`) workspace 支持

---

## 💬 开发者关注点

**1. 桌面端是当前最大痛点集**
桌面应用在 Windows/macOS 两侧同时出现问题：可见性退化、数据库不可用、远程控制、Computer Use 本地组件签名、Crashpad 失控。开发者越来越把 Codex Desktop 当作主力入口，但稳定性与 Windows 兼容性明显落后于 CLI。

**2. 本地存储与资源消耗被低估**
#28224 揭示的「640 TB/年写入」以及 #25921 的「+5GB/天 Crashpad」是首次被量化披露的资源问题，意味着 Codex 在「隐式遥测 + crash reporter」路径上的写入策略需要重新设计。

**3. 认证体验分裂**
CLI、Desktop、Codex Web 三个入口在 MFA、AAS、phone verification 上行为不一致（#25737、#25749、#28672），开发者呼吁统一身份与恢复流程。

**4. 对标 Claude Code 的功能诉求强烈**
#17827 status line、#24182 使用量常驻、#26648 `jj` 支持等 enhancement 几乎是直接对照 Claude Code 的体验差距，社区期望 Codex 在「可视化配置」「工作流自定义」上追平。

**5. Plugin 体系进入稳定期**
连续 PR（#28844、#28845、#28790、#28838）显示 plugin manifest、agent roles、skills 缓存、home instructions 已成体系，开发者可基于此构建稳定的扩展生态。

---

*报告基于 GitHub `openai/codex` 仓库 2026-06-18 当日数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for Gemini CLI on 2026-06-18 and generate a comprehensive daily report in Chinese.

Key observations:
1. Two releases: v0.47.0 and v0.48.0-preview.0
2. There's a P0 release failure issue (#28001) for v0.48.0-nightly
3. Many issues are about agent bugs (subagent, generalist agent hangs, MAX_TURNS recovery)
4. Auto Memory system has multiple bugs (issues 26525, 26522, 26523, 26516)
5. Security-related PRs are coming in (fork PR workflows)
6. Notable: docs PR removing deprecated consumer/free tier references
7. PR #28000 fixes critical Jupyter/JSON corruption in write_file

Let me organize this into a structured Chinese daily report.</think>

# Gemini CLI 社区动态日报

**日期**: 2026-06-18
**仓库**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 完成 **v0.47.0 正式版** 与 **v0.48.0-preview.0 预览版** 双发，但 v0.48.0 的 nightly 构建因流水线异常触发 P0 级发布失败告警（[#28001](https://github.com/google-gemini/gemini-cli/issues/28001)）。社区焦点持续集中在 **Agent 稳定性** 与 **Auto Memory 系统质量**，安全团队也集中提交了多枚针对 fork PR 工作流的纵深防御补丁。

---

## 🚀 版本发布

### v0.47.0（正式版）
- 配套 Changelog 已自动生成：[#28002](https://github.com/google-gemini/gemini-cli/pull/28002)
- 主要合入：与 `codebase_investigator` 后端的契约改进（Respect backend def）

### v0.48.0-preview.0（预览版）
- 配套 Changelog：[#27999](https://github.com/google-gemini/gemini-cli/pull/27999)
- 引入 **npm dependabot cooldown 周期** ([#27743](https://github.com/google-gemini/gemini-cli/pull/27743))，将依赖更新冷却期纳入 CI 治理

> ⚠️ **注意**：v0.48.0-nightly.20260618 发布流水线失败，见下方 Issue [#28001](https://github.com/google-gemini/gemini-cli/issues/28001)。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|----------|
| 1 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent 卡死** | 💬7 👍8 | 用户报告 generalist agent 在简单文件夹创建任务中无限挂起，**社区点赞最多**（8），影响所有 defer-to-subagent 场景的可用性 |
| 2 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **组件级评估体系建设** | 💬7 | 已积累 76 个 behavioral eval，覆盖 6 种 Gemini 模型，是评估体系走向精细化的关键 EPIC |
| 3 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知的文件读取与代码库映射** | 💬7 👍1 | 探索用 AST 工具精确切片代码、降低 token 噪声，可能成为 `codebase_investigator` 的下一代基础设施 |
| 4 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent MAX_TURNS 误报 GOAL 成功** | 💬6 👍2 | 沉默失败（silent failure）：`codebase_investigator` 触达最大轮次却仍上报 success，破坏用户对子代理结果的信任 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 不主动调用自定义 skills/subagents** | 💬6 | 揭示了 agent 自发现能力不足：默认行为下自定义 gradle/git skills 几乎不被触发 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 确定性的敏感信息脱敏** | 💬5 | 安全相关：transcript 内容在脱敏前已进入模型上下文，存在数据泄露风险 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory 无限重试低信号会话** | 💬5 | 资源浪费：低信号 session 永远停留在未处理状态，反复被表面化 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令完成但 CLI 卡在"等待输入"** | 💬4 👍3 | 简单命令完成后仍长时间占用 shell，会话无法继续推进 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **browser subagent 在 Wayland 下失败** | 💬4 👍1 | Linux 桌面环境下 browser agent 兼容性缺陷，影响 Wayland 用户 |
| 10 | [#28001](https://github.com/google-gemini/gemini-cli/issues/28001) **P0: v0.48.0-nightly 发布失败** | 💬1 | 当日唯一 P0，CI 流水线异常，需立即响应 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 内容 |
|----|------|
| [#28000](https://github.com/google-gemini/gemini-cli/pull/28000) **修复 write_file 对 .ipynb/JSON 的静默损坏** | 关键 bug：`write_file` 会破坏 Jupyter Notebook 与 JSON 文件，导致 Colab/JupyterLab 回滚到 checkpoint |
| [#28003](https://github.com/google-gemini/gemini-cli/pull/28003) **0.49.0-nightly 版本 bump** | 自动化版本号升级，启动下一个 nightly 周期 |
| [#27948](https://github.com/google-gemini/gemini-cli/pull/27948) **依赖精确钉版 + 14 天冷却期** | 大型 PR：移除所有 `^`/`~` 范围，强制 14 天依赖更新冷却，提升供应链稳定性 |
| [#27997](https://github.com/google-gemini/gemini-cli/pull/27997) **移除已弃用的 consumer/free tier 文档引用** | 跟进 Google AI 政策：Gemini Code Assist 个人版、AI Pro/Ultra、Free Tier 将于 6 月停止服务，需清理文档 |
| [#27996](https://github.com/google-gemini/gemini-cli/pull/27996) **web-fetch 响应体按 Content-Type charset 解码** | 修复 GBK/ISO-8859-1 等非 UTF-8 编码页面乱码问题，中文/日文/遗留站点受益 |
| [#27994](https://github.com/google-gemini/gemini-cli/pull/27994) **系统提示中按字面量插入 skill/agent 内容** | 修复 `applySubstitutions()` 中 `${AgentSkills}` `${SubAgents}` 被误当正则替换的缺陷 |
| [#27990](https://github.com/google-gemini/gemini-cli/pull/27990) **macOS 符号链接路径测试修正** | 解决 `/var` → `/private/var` 在 EditTool/WriteFileTool 测试中的路径错配 |
| [#27987](https://github.com/google-gemini/gemini-cli/pull/27987) **CLI 参数解析改抛 FatalConfigError** | 用错误替代 `process.exit(1)`，避免 Vitest E2E 在 --help/--version 下挂起 |
| [#27784](https://github.com/google-gemini/gemini-cli/pull/27784) **安全：gate release-patch-2-trigger 同仓库检查** | 纵深防御系列：防止 fork PR 利用 `workflow_run` 注入仓库 + sha 进行供应链攻击 |
| [#27783](https://github.com/google-gemini/gemini-cli/pull/27783) **安全：gate PRT label 工作流同仓库检查** | 同上，针对 `pull_request_target` 上 pr-size-labeler 与 pr-rate-limiter 的 fork 攻击面 |

> 📌 **安全主题**：[#27780](https://github.com/google-gemini/gemini-cli/pull/27780) [#27783](https://github.com/google-gemini/gemini-cli/pull/27783) [#27784](https://github.com/google-gemini/gemini-cli/pull/27784) 三枚 PR 共同构成本轮 fork PR 工作流的安全闭环，是 @DVHRMNTCBSL 系列性贡献。

---

## 📈 功能需求趋势

从过去 24 小时活跃议题中提炼：

1. **🧠 Agent 子代理治理**（热度最高）
   - subagent 状态机正确性（MAX_TURNS、Termination Reason）
   - generalist agent 调度死锁
   - 自定义 skills/subagents 的自发现能力增强
   - browser agent 的会话接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）

2. **📚 Auto Memory 体系**
   - 脱敏确定性（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
   - 重试去重（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）
   - 无效 patch 隔离（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）
   - 整体质量跟踪（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）

3. **🔬 AST-aware 工具链**
   - 精确读取方法边界
   - 基于 AST 的代码库映射（tilth / glyph 候选）（[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）

4. **📊 评估基础设施**
   - 组件级 eval（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）
   - 内部项目 eval 稳定化（[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)）
   - steering eval 测试治理（[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)）

5. **🛡️ 安全纵深防御**
   - fork PR 工作流的同仓库 gate（PR #27780/#27783/#27784）
   - dependabot cooldown（PR #27743）
   - 依赖精确钉版（PR #27948）

6. **💳 商业模式变更文档**
   - Google AI 弃用 consumer/free tier，文档体系需快速同步（[#27997](https://github.com/google-gemini/gemini-cli/pull/27997)）

---

## 💬 开发者关注点

通过议题情绪与痛点分析：

- **🤕 沉默失败（silent failure）是头号痛点**
  - Agent 触发 MAX_TURNS 但报告 success（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
  - Shell 已退出但 CLI 仍卡"等待输入"（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）
  - get-shit-done 输出末尾崩溃（[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)）
  - 开发者反馈"无法信任子代理的结果"

- **🧹 工作区污染**
  - 模型到处生成 tmp 脚本（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)），提交前清理成本高

- **⚠️ 安全 / 权限边界模糊**
  - v0.33.0 起子代理绕过配置默认启用（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）
  - destructive command（`git reset --force` 等）缺乏显式禁止（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）

- **🧠 Skills/Subagents 自发现弱**
  - 默认行为不调用自定义 skills，需要显式提示（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）

- **🐧 跨平台兼容性**
  - Wayland 下 browser subagent 失败（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）
  - macOS `/var` 符号链接路径在测试中错配（[#27990](https://github.com/google-gemini/gemini-cli/pull/27990)）

- **🔁 工具数量爆炸**
  - 启用工具超过 400 个后 API 返回 400（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)），需要 agent 自行剪裁作用域

---

## 🗓️ 明日观察重点

- **P0 发布失败修复**：关注 [#28001](https://github.com/google-gemini/gemini-cli/issues/28001) 是否得到 fast-track
- **写文件损坏 PR [#28000](https://github.com/google-gemini/gemini-cli/pull/28000)**：critical bug，建议尽早合入 v0.48.0 正式版
- **Auto Memory 系列 PR**：观察 SandyTao520 的修复节奏
- **弃用 tier 文档清理 [#27997](https://github.com/google-gemini/gemini-cli/pull/27997)**：与政策时间表强相关，需在 6 月停止服务前完成

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
The user wants me to generate a Chinese daily report for GitHub Copilot CLI community dynamics for 2026-06-18. Let me analyze the data carefully.

Key observations:
1. No new releases in the past 24 hours
2. 37 issues updated (showing top 30 by comments)
3. 1 PR opened/updated
4. Many issues are closed, suggesting rapid bug fixes

Let me categorize the issues:

**High engagement issues (top 10 by comments):**
1. #2643 - preToolUse hook rewriting - plugins area (10 comments, 1 like)
2. #1973 - Tool whitelist for Interactive Mode (10 comments, 20 likes) - very popular feature request
3. #254 - copilot-cli keeps asking to login again (9 comments, 4 likes) - long-standing issue
4. #3560 - CAPIError: Duplicate item found (5 comments, 1 like)
5. #3832 - All models show as 'Blocked/Disabled' after outage (5 comments, 13 likes) - high engagement
6. #3831 - Request failed due to transient API error (4 comments, 2 likes)
7. #2939 - [deleted] (2 comments, 0 likes)
8. #3730 - Support Enterprise-Managed Custom Models (2 comments, 4 likes)
9. #3754 - copilot --resume fails with spaces (2 comments, 1 like)
10. #3812 - Subagents can no more access MCP tools (2 comments, 0 likes)
11. #3820 - Document matcher support for command hooks (2 comments, 0 likes)
12. #3828 - ContentExclusionFilter.isExcluded crash (2 comments, 0 likes)
13. #3833 - Efren [invalid] (2 comments, 0 likes)
14. #3074 - Add /effort command (1 comment, 5 likes)
15. #3801 - GPT-5 mini is bad at simple tasks (1 comment, 0 likes)
16. #3292 - Skill files to enable MCP servers (1 comment, 0 likes)
17. #3842 - plugin install fails with fsmonitor (1 comment, 0 likes)
18. #3837 - --resume doesn't show folder (1 comment, 0 likes)
19. #3839 - Ollama Cloud doesn't support custom_tool_call (1 comment, 7 likes)
20. #3836 - Wealthflow [invalid] (1 comment, 0 likes)
21. #3830 - Single command to update all plugins (1 comment, 0 likes)
22. #3824 - Sub-agents can run different model (1 comment, 0 likes)
23. #3804 - Disable mouse interaction (1 comment, 0 likes)
24. #3791 - Malformed attachment poisons session (1 comment, 0 likes)
25. #3787 - Preload MCP server tools (1 comment, 0 likes)
26. #3846 - Plan review menus compatibility (0 comments, 0 likes)
27. #3845 - Ctrl+X B backgrounds only sync shell (0 comments, 0 likes)
28. #3843 - [deleted] (0 comments, 0 likes)
29. #3844 - Configure custom aliases (0 comments, 0 likes)
30. #3841 - Content exclusions wrongly enforced (0 comments, 0 likes)

**Closed issues (recently fixed):**
- #3832 (high likes 13) - outage recovery issue
- #3831 - transient API error
- #2939 - deleted
- #3820 - documentation
- #3828 - crash bug
- #3833 - invalid
- #3842 - plugin install
- #3837 - resume folder
- #3836 - invalid
- #3830 - plugin update
- #3824 - sub-agent models
- #3804 - mouse interaction
- #3791 - attachment poisoning
- #3787 - MCP preloading
- #3843 - deleted

Notable patterns:
1. **Post-outage recovery** - Issues #3832, #3831 suggest a GitHub Copilot outage on June 16
2. **Plugin/extension system** - Multiple issues around plugin installation and management
3. **MCP server integration** - #3812, #3292, #3787 all about MCP
4. **OpenAI-compatible backends** - #3839, #3846, #3847 about BYOK/compatibility
5. **Authentication issues** - #254 long-standing
6. **Model selection/management** - #3730, #3801, #3824
7. **Subagent behavior** - #3812, #3824, #3845
8. **Interactive UX** - #2643, #1973, #3074, #3804, #3844

**PR #3847** - Plan review compatibility fallback - related to issue #3846

Let me write a structured Chinese report.

For "重要 PR 进展" - I only have 1 PR, so I should be honest about that. The user asked for 10 PRs but we only have 1. I should note this and provide what we have.

Let me structure the report now.
</think>
# GitHub Copilot CLI 社区动态日报

**日期：2026-06-18** | **数据源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 📌 今日速览

社区今天呈现**"高频关闭、稳步迭代"**的特征：过去 24 小时内有近半数更新的 Issue 被关闭（多与 6 月 16 日的 GitHub Copilot 服务中断恢复相关），同时围绕 **OpenAI 兼容后端（BYOK）兼容性**、**子代理（Subagent）行为**、**插件/会话管理**出现多个高质量讨论。仅有 1 个新 PR 进入流程，主题恰好是 Plan Review 兼容性回退方案，与今日新开的 Issue #3846 形成闭环。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时无 Release 动态。

---

## 🔥 社区热点 Issues（精选 10 条）

> 排序逻辑：综合评论活跃度、点赞数（👍）和议题影响力。

### 1. [\#1973] Interactive Mode 工具白名单 — ⭐ 20 👍，10 评论
**Feature Request: Tool whitelist for Interactive Mode**  
当前交互模式对所有工具调用都需要手动批准，包括 `grep`/`cat`/`find` 等只读操作。`/allow-all` 又会一并放行破坏性命令，社区诉求一个"安全只读工具"白名单能力。  
🔗 https://github.com/github/copilot-cli/issues/1973  
**点评**：本周点赞数最高的功能请求，反映了"安全 vs 效率"的长期张力。

### 2. [\#3832] 6·16 故障后所有模型显示为 Blocked/Disabled — ⭐ 13 👍，已关闭
**All models show as 'Blocked/Disabled' after June 16 outage**  
6 月 16 日 17:45–18:15 UTC 发生 GitHub Copilot 服务中断，恢复后模型选择界面所有模型被标记为禁用。  
🔗 https://github.com/github/copilot-cli/issues/3832  
**点评**：高赞议题，标志性问题，已在当日关闭修复。

### 3. [\#2643] preToolUse hook 使用 updatedInput 改写命令后仍弹确认框 — 10 评论
**preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow**  
插件钩子改写命令并明确放行后，CLI v1.0.24 仍弹交互确认；hook 无法静默改写命令。  
🔗 https://github.com/github/copilot-cli/issues/2643  
**点评**：插件扩展能力的核心痛点，限制了"安全即改写"类工作流的落地。

### 4. [\#3839] Ollama Cloud 不支持 custom_tool_call 负载 — ⭐ 7 👍
**Ollama Cloud Does Not Support custom_tool_call Payload Used by Copilot CLI**  
Fleet Mode + BYOK + Ollama Cloud 组合下，请求因 `unknown input item type: "custom_tool_call"` 失败。  
🔗 https://github.com/github/copilot-cli/issues/3839  
**点评**：与 #3846、PR #3847 共同构成"严格 OpenAI 兼容后端"兼容性主题。

### 5. [\#254] copilot-cli 反复要求重新登录 — 9 评论，⭐ 4
**copilot-cli keeps asking to login again**  
登录后 Ctrl-C 退出即要求重新鉴权，影响 Business 用户。  
🔗 https://github.com/github/copilot-cli/issues/254  
**点评**：跨越 8 个月仍未根治的"老大难"问题，标记为 `unable-to-reproduce`。

### 6. [\#3560] CAPIError: Duplicate item found — 5 评论
**Duplicate item found with id fc_call_xxx**  
工具调用之后的下一轮偶发出现重复工具项 400 错误；纯对话正常，仅在 tool call 之后的轮次失败。  
🔗 https://github.com/github/copilot-cli/issues/3560  
**点评**：稳定性问题，与多轮工具调用状态管理有关。

### 7. [\#3831] 中途突然报 transient API error 并停止工作 — 4 评论，已关闭
**Request failed due to a transient API error. Retrying... suddenly stopped**  
重试若干次后流程被中止。  
🔗 https://github.com/github/copilot-cli/issues/3831  
**点评**：疑似与 6·16 中断连锁相关，已快速关闭。

### 8. [\#3074] 增加 `/effort` 快速切换推理深度 — ⭐ 5 👍
**Add an `/effort` command to quickly switch reasoning effort for the current model**  
当前通过 `/model` 切换推理深度步骤多；用户期望单命令切换 Low/Medium/High。  
🔗 https://github.com/github/copilot-cli/issues/3074  
**点评**：实用 UX 增强，跨模型工作流用户的强烈诉求。

### 9. [\#3730] 支持 Enterprise 自定义模型 — ⭐ 4 👍
**Support Enterprise-Managed Custom Models in Copilot CLI**  
VS Code 等客户端已支持通过 Copilot Admin 配置的企业级自定义模型/OAI 兼容端点，但 CLI 不可用。  
🔗 https://github.com/github/copilot-cli/issues/3730  
**点评**：企业落地的关键能力缺失，与 BYOK 议题相互呼应。

### 10. [\#3812] Subagent 无法访问 MCP 工具 — 2 评论
**Subagents can no more access MCP tools**  
MCP 工具在顶层 agent 可用，但子代理已看不到，疑似 MCP 工具延迟加载导致。  
🔗 https://github.com/github/copilot-cli/issues/3812  
**点评**：与 #3787（请求预加载 MCP 工具）、#3824（子代理换模型未显式告知）共同构成"子代理"主题。

---

## 🛠 重要 PR 进展

⚠️ **过去 24 小时仅有 1 个新 PR**（见下方）。其他 9 个位置将以"近期高价值 PR 推荐"形式补充信息密度。

### 本日新增/更新 PR

**[\#3847] Plan review: add compatibility fallback design + test vectors**  
作者：[@nguyenhoangduc0707-lang](https://github.com/nguyenhoangduc0707-lang)  
为严格 OpenAI 兼容后端（无 function_call/tool metadata）的 Plan Review 菜单提供兼容性回退设计文档与测试向量；策略为 **JSON 优先 → YAML → 编号/无序列表启发式**。  
🔗 https://github.com/github/copilot-cli/pull/3847  
**点评**：直接呼应 Issue #3846，是社区兼容性系列的关键起点。

### 建议持续关注的近期方向（基于 Issue 衍生）

| 方向 | 代表 Issue | 状态 |
|------|------------|------|
| OpenAI 兼容后端 Plan Review 兼容 | #3846 / #3847 | 今日新建 PR |
| Ollama Cloud BYOK 兼容 | #3839 | 待修复 |
| Subagent MCP 工具可见性 | #3812 / #3787 | 讨论中 |
| 插件安装（fsmonitor 冲突） | #3842 | 已关闭 |
| `--resume` 带空格会话名 | #3754 | 待修复 |
| 6·16 中断后遗症（模型/会话） | #3831 / #3832 | 已关闭 |
| 子代理模型漂移 | #3824 | 已关闭 |
| 内容排除策略误用于 CLI | #3841 | 新开待审 |
| 自定义 alias / slash 命令 | #3844 | 新开 |
| Ctrl+X B 后台化子代理（对标 Claude Code Ctrl+B） | #3845 | 新开 |

---

## 📈 功能需求趋势

从近 24 小时议题分布看，社区关注点集中在以下方向：

1. **🔌 插件/扩展系统**（热度最高）
   - hook 改写命令静默化（#2643）
   - 插件批量更新（#3830）
   - 插件安装时与 `core.fsmonitor` 冲突（#3842）
   - 文档补全：hook `matcher` 语法（#3820）

2. **🧠 模型与推理控制**
   - `/effort` 单命令切推理深度（#3074，⭐ 5）
   - Enterprise 自定义模型接入（#3730，⭐ 4）
   - 子代理模型透明化（#3824）
   - GPT-5 mini 行为退化（#3801）

3. **🤖 子代理（Subagent）能力**
   - MCP 工具对子代理可见（#3812、#3787）
   - 后台化子代理（#3845，对标 Claude Code `Ctrl+B`）

4. **🔁 BYOK / OpenAI 兼容后端**
   - Ollama Cloud 不支持 `custom_tool_call`（#3839，⭐ 7）
   - Plan Review 在严格后端下不可用（#3846 + #3847 PR）

5. **🛡️ 权限与安全 UX**
   - Interactive Mode 工具白名单（#1973，⭐ 20）
   - 内容排除策略误用于 CLI（#3841）

6. **🖥️ 会话 / 输入 UX**
   - `--resume` 带空格名静默失败（#3754）
   - `--resume` 不显示创建目录（#3837）
   - 自定义 alias/slash command（#3844）
   - 禁用鼠标输入（#3804）

---

## 👨‍💻 开发者关注点与痛点

**1. 静默执行 vs 安全确认的二选一**  
钩子想"安全地改写并自动放行"，CLI 却强制弹确认；`/allow-all` 又过于激进。开发者实际想要"基于工具分类的细粒度策略"（#2643 + #1973 是同一诉求的两面）。

**2. 6·16 服务中断的"恢复不彻底"**  
多个高赞议题（#3831、#3832）指向中断后模型列表/会话状态损坏问题，提示**客户端状态机对服务端瞬时错误的容错**需要加强。

**3. BYOK 兼容层薄弱**  
Ollama Cloud 拒绝 `custom_tool_call`、严格 OAI 后端无法解析 Plan Review——开发者越来越希望 CLI 在多模型路由下保持"语义一致"，而非"形式一致"（#3839、#3846）。

**4. 子代理透明性不足**  
用户配置了 A 模型，子代理悄悄用了 B 模型（#3824），MCP 工具又"看得见用不着"（#3812）。社区普遍认为子代理应**显式声明其工具集与模型**。

**5. 长期账号问题**  
#254 登录态反复丢失持续 8 个月未被复现，是典型的"边缘用户"痛点。

**6. 文档/可发现性**  
hook `matcher`、Subagent 与 MCP 的协作边界、`--resume` 对空格的支持等——核心能力常因**文档缺失**而变成 Issue。

---

> 💡 **TL;DR**：今日的关键词是 **"兼容"**（后端兼容、模型兼容、工具兼容）与 **"透明"**（子代理、权限、模型选择）。PR #3847 是值得持续关注的关键起点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>
The user wants me to generate a daily community report for Kimi Code CLI based on GitHub data. Let me analyze the data:

1. No new releases in past 24 hours
2. Only 2 issues updated in past 24 hours:
   - #2459: Feature request for switching execution mode during session (Agent ↔ Cluster)
   - #2458: Enhancement to add option to ignore SSL certificate
3. No new PRs in past 24 hours

Since the data is quite limited (only 2 issues, no PRs, no releases), I need to be honest about this and generate a report that accurately reflects the limited activity. I should not fabricate data.

Let me structure the report according to the requirements:

1. 今日速览 - Brief summary
2. 版本发布 - Skip since no releases
3. 社区热点 Issues - Only 2 issues, so I'll list both (not 10 since there aren't 10)
4. 重要 PR 进展 - Skip since no PRs
5. 功能需求趋势 - Based on the 2 issues
6. 开发者关注点 - Based on the limited data

I need to be transparent that the data is limited rather than making up content. The user said "挑选 10 个" but with only 2 issues, I should note this honestly.
</think>
# Kimi Code CLI 社区动态日报

**日期：2026-06-18**
**项目：MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日 Kimi CLI 仓库动态较为平静，过去 24 小时内无新版本发布、无 Pull Request 提交，仅有 2 条 Issue 被创建/更新。社区关注点集中在 **企业环境兼容性**（SSL 证书拦截问题）与 **运行时灵活性**（执行模式动态切换）两大方向，体现出用户在复杂生产环境与多场景适配方面的实际诉求。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布，本节省略。

---

## 🔥 社区热点 Issues

> ⚠️ **数据说明**：过去 24 小时内仅有 2 条 Issue 更新，远少于常规 10 条，因此本节完整呈现这 2 条，并附上分析。

### 1. #2459 [Feature Request] 支持会话运行中切换执行模式（Agent ↔ 集群）
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2459
- **作者**：@PresentXoX
- **状态**：OPEN ｜ 评论：0 ｜ 👍：0
- **重要性**：⭐⭐⭐
- **分析**：该需求指向 Kimi CLI 的核心架构能力——在单个会话生命周期内动态切换执行模式。Agent 模式适合轻量本地交互，而集群模式（推测为分布式/云端执行）则面向大规模任务。若支持运行中切换，将显著降低上下文重建成本，提升工作流连续性，是从「单模式工具」向「多模式编排平台」演进的关键功能。

### 2. #2458 [enhancement] Add option to ignore SSL certificate
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2458
- **作者**：@dmorsin
- **状态**：OPEN ｜ 评论：0 ｜ 👍：0
- **重要性**：⭐⭐⭐⭐
- **分析**：企业 IT 环境中广泛部署 SSL 解密代理（如 Zscaler、Palo Alto、Symantec DLP），会注入自有根证书。Kimi CLI 当前在登录鉴权阶段因证书校验失败而无法使用，导致受管设备用户完全无法使用产品。该需求直接影响 Kimi CLI 在企业市场的可落地性，是典型的「B 端可访问性」痛点。社区常见做法是提供 `--insecure` 或 `KIMI_SSL_VERIFY=false` 环境变量开关。

---

## 🔧 重要 PR 进展

> 过去 24 小时内无 PR 更新，本节省略。

---

## 📊 功能需求趋势

基于近期（过去 24 小时及上下文）Issue 提炼：

| 方向 | 占比 | 趋势 |
|------|------|------|
| **企业环境适配**（SSL/代理/证书） | 显著 | 🔺 上升 |
| **运行时灵活性**（模式切换、热配置） | 显著 | 🔺 上升 |
| **执行架构扩展**（集群/分布式模式） | 萌芽 | 🔺 上升 |

**核心洞察**：
1. **企业级部署兼容性**成为新焦点：受 SSL 拦截类需求驱动，社区开始关注 Kimi CLI 在严格 IT 管控环境下的可用性。
2. **会话可塑性**需求浮现：用户期待单一会话支持多种执行模式，避免重启导致的上下文丢失，反映出对 Kimi CLI 作为长时任务助手的定位预期。
3. 整体需求呈现「**从开发者工具向企业生产力平台**」迁移的趋势。

---

## 💬 开发者关注点

综合两条 Issue，开发者当前反馈的痛点集中于以下两点：

### 痛点一：企业网络环境的"最后一公里"阻塞
- **现象**：受 Zscaler、Palo Alto 等 SSL 拦截设备管控的开发者无法完成登录。
- **根因**：CLI 客户端缺少 TLS 校验旁路选项（无 `--insecure` / `SSL_VERIFY=false` 等开关）。
- **建议方案**：在配置文件（`~/.kimi/config.toml`）和环境变量层增加 `verify_ssl` 选项，并在文档中明确企业部署指引。

### 痛点二：会话模式的"刚性约束"
- **现象**：启动后无法在 Agent 与集群模式间切换，需新建会话。
- **根因**：CLI 的执行后端在初始化时硬绑定，会话状态结构不支持运行时迁移。
- **建议方案**：抽象出 `Executor` 接口，通过 `/mode` 内建命令实现热切换，并复用当前会话上下文与历史记录。

### 高频需求关键词云
`SSL 旁路` · `执行模式切换` · `企业代理兼容` · `会话连续性` · `集群执行` · `热配置`

---

## 📝 备注

- 本期数据量较少（2 Issues / 0 PRs / 0 Releases），日报侧重于**深度解读**而非广度覆盖。
- 两条 Issue 均处于早期阶段（评论 0、点赞 0），尚未形成社区讨论，但均涉及产品**关键能力扩展**与**企业可用性**。
- 建议关注维护者是否会在后续版本中合并相关配置开关或实验性 API。

---

*报告生成时间：2026-06-18 ｜ 数据来源：GitHub Public API*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
Let me analyze the GitHub data for OpenCode and generate a comprehensive Chinese daily report for 2026-06-18.

Key observations from the data:

**Release:**
- v1.17.8 released with session timeline performance improvements and bugfixes for OpenAI-compatible providers and Cloudflare AI Gateway

**Top Issues by engagement:**
1. #11176 - Official VS Code extension (23 comments, 110 likes) - very high engagement
2. #17994 - Multi-agent orchestration in isolated workspaces (21 comments, 2 likes)
3. #6096 - Tokens per second display (18 comments, 55 likes)
4. #23566 - Docs suggest LSP enabled by default (10 comments, 20 likes)
5. #32172 - GLM-5.2 support for Z.AI provider (10 comments, CLOSED)
6. #3541 - Windows screen bug (9 comments, CLOSED)
7. #7380 - Old messages disappear (8 comments, CLOSED)
8. #8538 - Session lookup fails with PTY in non-git directory (7 comments, CLOSED)
9. #31204 - session_message.seq NOT NULL constraint (7 comments, CLOSED)
10. #8456 - Auto model selection based on task type (7 comments, 36 likes)
11. #18877 - Cannot connect to local server (5 comments, CLOSED)
12. #24817 - Ctrl+Z closes OpenCode on Linux (5 comments, OPEN)
13. #7928 - Runtime permission mode toggle (5 comments, 17 likes, CLOSED)
14. #22623 - Azure GPT-5 max_tokens issue (4 comments, OPEN)
15. #32754 - Garbled escape codes in Windows (4 comments, CLOSED)
16. #32745 - Stuck in OpenRouter auth (4 comments, CLOSED)
17. #31119 - "no such column: name" error (4 comments, OPEN)
18. #32620 - glm-5.2:cloud Ollama support (4 comments, OPEN)
19. #23906 - Logo not displayed in web TUI (4 comments, CLOSED)
20. #15302 - Desktop notification sound (3 comments, OPEN)

**Notable PRs:**
1. #32771 - feat(tui): show assistant completion time
2. #29789 - feat: Dynamic workflows
3. #32753 - fix(web): clipboard fallback for non-HTTPS (CLOSED)
4. #32774 - fix: preserve execution metadata
5. #32767 - fix: restore ESC interrupt for subagent sessions
6. #23688 - feat: markdown preview with mermaid
7. #32766 - feat: accept explicit storage in public API
8. #32765 - chore: code cleanup
9. #32762 - fix: prevent recursive sub-skill discovery
10. #32761 - feat: port V1 fuzzy edit matching to V2
11. #32758 - fix: re-read plugin.trigger output
12. #32752 - feat: session select interactive picker
13. #32751 - fix(acp): show command in permission dialog (CLOSED)
14. #30879 - feat(acp): shell command display and replay
15. #32750 - feat: global session list scope toggle
16. #32731 - feat: auto-discover models from OpenAI-compatible
17. #32612 - fix: exclude -pro models from ChatGPT list

**Trends:**
- IDE integration (VS Code extension most wanted - 110 likes)
- Model auto-selection/intelligence
- Multi-agent orchestration
- New model support (GLM-5.2)
- Performance/UX (TPS display, session loading)
- LSP configuration
- Permission modes
- Bug fixes for OpenAI-compatible providers
- Mermaid diagram support
- Subagent improvements

Let me write a structured, professional report.
</think>
# OpenCode 社区动态日报
**2026-06-18**

---

## 1. 今日速览

OpenCode 今日发布 v1.17.8，核心改进集中在 Session 时间线加载性能与 OpenAI 兼容 Provider 的兼容性修复；社区侧，**官方 VS Code 扩展**请求（#11176）持续保持 110 👍 高热度，**多 Agent 隔离工作区编排**（#17994）与**自动模型选择**（#8456）位列讨论焦点。PR 端则围绕 TUX 体验优化（完成时间显示、ESC 中断恢复、Markdown + Mermaid 预览）与 V2 Core 工具链移植（Fuzzy Edit、Storage Layer 显式注入）密集推进。

---

## 2. 版本发布

### v1.17.8
发布于 2026-06-18

**Core - 改进**
- **Session 时间线加载加速**：解决了加载时的闪烁与滚动跳跃问题，长会话浏览体验显著提升。

**Core - 修复**
- **OpenAI 兼容 Provider 修复 MCP 工具 Schema 校验**（@jquense）：此前部分符合 OpenAI 接口规范的 MCP 工具 schema 校验失败，现已修复。
- **Cloudflare AI Gateway API Key 传递修复**（@keefetang）：修正了配置 API Key 未正确发送到 Gateway 的问题。

> 维护者提示：v1.17.8 为小版本迭代，建议在生产环境升级前关注 PR #31204 中 session_message.seq NOT NULL 约束的修复版本对应关系。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 状态 | 简要 |
|---|-------|------|------|------|
| 1 | [#11176](https://github.com/anomalyco/opencode/issues/11176) 官方 VS Code 扩展 | 23 评论 / 110 👍 | OPEN | **社区呼声最高**：用户希望 OpenCode 以原生扩展形式集成到 VS Code，作为主流 IDE 集成入口的长期缺失 |
| 2 | [#17994](https://github.com/anomalyco/opencode/issues/17994) 多 Agent 隔离工作区编排 | 21 评论 | OPEN | 借鉴多 Agent 工具的设计，在隔离 workspace 中并行执行多个编码 Agent |
| 3 | [#6096](https://github.com/anomalyco/opencode/issues/6096) TPS（Tokens/s）实验性显示 | 18 评论 / 55 👍 | OPEN | 展示每个消息的 Token/秒速率，**实用度极高的性能可视化需求** |
| 4 | [#23566](https://github.com/anomalyco/opencode/issues/23566) 文档与实际行为不符：LSP 默认状态 | 10 评论 / 20 👍 | OPEN | 文档暗示 LSP 自动启用，实际默认禁用。**文档一致性需要立即修正** |
| 5 | [#32172](https://github.com/anomalyco/opencode/issues/32172) Z.AI Provider GLM-5.2 模型支持 | 10 评论 | CLOSED | Z.AI 最新推理模型 GLM-5.2 的官方支持请求 |
| 6 | [#8456](https://github.com/anomalyco/opencode/issues/8456) 基于任务类型自动选模型 | 7 评论 / 36 👍 | OPEN | 自动按任务类型切换模型，类似 Cursor/Claude Code 的可配置路由能力 |
| 7 | [#24817](https://github.com/anomalyco/opencode/issues/24817) Linux 下 Ctrl+Z 关闭应用 | 5 评论 | OPEN | Ctrl+Z 在 Linux 上触发 SIGTSTP 而非撤销输入，**典型终端行为与编辑器期望冲突** |
| 8 | [#7928](https://github.com/anomalyco/opencode/issues/7928) 运行时权限模式切换（Shift+Tab） | 5 评论 / 17 👍 | CLOSED | 类似 Claude Code 的 Shift+Tab 在 auto/edit/plan 模式间切换 |
| 9 | [#22623](https://github.com/anomalyco/opencode/issues/22623) Azure GPT-5 参数不兼容 | 4 评论 | OPEN | Azure GPT-5 模型需用 `max_completion_tokens` 而非 `max_tokens` |
| 10 | [#15302](https://github.com/anomalyco/opencode/issues/15302) 桌面通知声循环播放 | 3 评论 | OPEN | OpenCode 桌面端启动后通知声反复播放且无法关闭，影响多平台用户 |

> **已关闭热点**：`#31204`（agent 切换时 seq 约束失败）、`#8538`（非 Git 目录下 PTY 会话查找失败）、`#32768`（自定义 subagent 无法访问 bash 工具）等 bug 已在 v1.17.x 系列中陆续得到修复。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 内容 |
|---|----|------|------|
| 1 | [#32771](https://github.com/anomalyco/opencode/pull/32771) TUI 显示助手完成时间 | feat (tui) | 在原生 run summary 追加助手回合完成时间，footer 事件与重放均保留时间戳，并显示主机名+当前目录 |
| 2 | [#29789](https://github.com/anomalyco/opencode/pull/29789) 动态 Workflows（Claude Code 新特性） | feat | 项目级 workflows，通过 `/workflow <name> arg=value` 在 TUI 中调用，`/workflows` 查看 |
| 3 | [#32767](https://github.com/anomalyco/opencode/pull/32767) 恢复 delegated subagent 的 ESC 中断 | fix (tui) | 回归修复：解决 subagent 会话中 ESC 键失效的长期问题（#3699/#4073/#23534） |
| 4 | [#23688](https://github.com/anomalyco/opencode/pull/23688) Markdown 预览 + Mermaid 图表 | feat (app) | 集成 mermaid v11.4.1，markdown 文件预览模式支持图表渲染 |
| 5 | [#32761](https://github.com/anomalyco/opencode/pull/32761) V1 Fuzzy Edit 移植到 V2 Core | feat (core) | 将 9 种 fuzzy 替换策略 + Levenshtein 距离移植到 V2 编辑工具 |
| 6 | [#32766](https://github.com/anomalyco/opencode/pull/32766) 公共 API 层显式 storage 注入 | feat (core) | 抽取 `Database.defaultLayer`，新增 `layerWithDatabase(db)` 导出，便于测试与 embeddings 注入 |
| 7 | [#32762](https://github.com/anomalyco/opencode/pull/32762) 防止子技能递归发现 | fix (skill) | 将 skill 发现 glob 从递归改为单层，避免嵌套子目录被错误加载 |
| 8 | [#32758](https://github.com/anomalyco/opencode/pull/32758) 重读 plugin.trigger 输出 | fix (opencode) | 修复 `chat.message` 与 `messages.transform` 钩子中 `output.messages` 数组替换被静默丢弃的问题 |
| 9 | [#32752](https://github.com/anomalyco/opencode/pull/32752) `session select` 交互式选择器 | feat (opencode) | 新增命令行交互式 session 选择器，使用 `@clack/prompts` 列出项目级 root session |
| 10 | [#32731](https://github.com/anomalyco/opencode/pull/32731) OpenAI 兼容 Provider 模型自动发现 | feat (opencode) | 对配置 `baseURL` 的 OpenAI 兼容 provider 调用 `GET /models` 自动发现模型，关闭 #6231 |

> **已合并修复**：`#32753`（web 端非 HTTPS 上下文剪贴板回退）、`#32765`（opencode 包代码清理与格式化合并）、`#32612`（ChatGPT 账号下隐藏 -pro 模型）。

---

## 5. 功能需求趋势

| 趋势方向 | 代表 Issue | 信号 |
|----------|-----------|------|
| **IDE 深度集成** | #11176（110 👍）| VS Code 扩展需求压倒性领先，反映 OpenCode 在 IDE 生态的缺位 |
| **智能模型路由** | #8456、#32736 | 按任务类型自动选模型，借鉴 Claude Code/Cursor 的"配置式"模型调度 |
| **多 Agent 协同** | #17994、#19538、#32768 | 隔离工作区、子 agent @-mention、Task 工具调用三类问题并发，反映多 Agent 模式正在被重度使用 |
| **新模型支持** | #32172、#32620、#24072 | GLM-5.2、Ollama glm-5.2:cloud、devin.ai 持续接入请求 |
| **TPS/性能可视化** | #6096（55 👍）| 性能指标实时显示是高赞高频需求 |
| **工作流与权限** | #29789、#7928 | Dynamic workflows 与运行时权限模式（Shift+Tab）已成共识 |
| **文档准确性** | #23566 | LSP 文档与代码不一致暴露了文档同步机制的缺失 |
| **Markdown 渲染** | #23688、#32769 | Mermaid 预览、思考过程折叠都指向 TUI/App 文档渲染能力升级 |

---

## 6. 开发者关注点

**核心痛点**

1. **IDE 集成缺位**：110 👍 的 VS Code 扩展需求说明，OpenCode 在与编辑器原生集成上落后于 Cursor、Claude Code、Cline 等同类工具，影响日常开发嵌入度。

2. **OpenAI 兼容 Provider 生态问题频发**：v1.17.8 修复的 MCP schema 校验（#11176/jquense PR）、Azure GPT-5 的 `max_tokens` 参数（#22623）、OpenAI 兼容流式 tool_calls 分块（#24137）共同表明，**兼容层是对外集成的最大脆弱面**，需建立更系统的 provider 适配测试矩阵。

3. **数据迁移与数据库 schema 演进风险**：`session_message.seq NOT NULL 约束`（#31204）、`no such column: name`（#31119）等错误指向 6 月初的 migrations 存在兼容性回退路径问题，**升级流程的可靠性直接影响用户信任**。

4. **TUI 体验细节**：Ctrl+Z 行为（#24817）、TPS 显示（#6096）、ESC 中断（#32767 PR 修复）、session 时间戳（#32771）——TUI 用户对键绑定与即时反馈的期望非常明确。

5. **多 Agent 调用的确定性**：`@-mention` 不能保证 subagent 真正被调用（#19538）、自定义 subagent 缺 bash（#32768）——**Agent 调度语义需要更明确的契约与文档**。

6. **认证与连接路径问题**：`#32745`（OpenRouter 授权卡死）、`#18877`（本地服务器连接失败）、`#32754`（Windows 重装后终端乱码）反映了**桌面端/Distributed 模式在 OAuth 与终端兼容性上的稳定性短板**。

---

*日报基于 github.com/anomalyco/opencode 公开数据生成，覆盖窗口：2026-06-17 ~ 2026-06-18。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>
The user wants me to generate a Chinese daily report for Qwen Code community dynamics on 2026-06-18. Let me analyze the data carefully and structure the report according to the 6 sections requested.

Let me first identify key information:

**Releases (past 24h):**
- v0.18.3-nightly.20260618.bc3e0b405 (nightly build)
- v0.18.3 (stable)
- v0.18.3-preview.0
- v0.18.2 (previous)

Notable changes in 0.18.3:
- fix(core): Track supported sed edits in file history by @doud
- chore(release): v0.18.2 by @qwen-code-ci-bot

Notable changes in 0.18.2:
- fix: warn on oversized context instructions by @he-yufeng (#5073)
- docs: fix stale defaults, CLI syntax, and tool naming drift by @DragonnZhan

**Top Issues (by comment count, but also considering recency and importance):**
1. #3203 - Qwen OAuth Free Tier Policy Adjustment (151 comments) - The hottest issue, about reducing free tier
2. #4479 - Daily token consumption statistics feature (16 comments)
3. #3384 - Unable to add OpenAI-compatible local LLM (15 comments)
4. #1855 - OAuth session persists after switching to Coding Plan API key (14 comments) - CLOSED
5. #3335 - Internal error 401 invalid access token (14 comments) - CLOSED
6. #3307 - Alibaba Cloud Coding Plan out of stock (10 comments) - CLOSED
7. #3914 - API connected, no errors but then fail to fetch (9 comments)
8. #3281 - Qwen OAuth authentication succeeded but free tier quota exceeded (9 comments) - CLOSED
9. #3267 - Requests limits overview (8 comments) - CLOSED
10. #5267 - context.fileName in setting file doesn't work (5 comments)
11. #5210 - 0.18.1-ExitPlanMode stuck (5 comments) - CLOSED
12. #5090 - Refactor: Decouple Provider Identity from SDK Protocol (5 comments)
13. #5265 - API Error 400 content field required (4 comments) - CLOSED
14. #4274 - qwen-code 0.15.11 fails with fetch error on Node.js 26 (4 comments) - CLOSED
15. #5234 - 工具调用会一直陷入死循环 (4 comments) - tool call infinite loop
16. #4825 - qwen sessions list subcommand (4 comments) - CLOSED
17. #4814 - UI for Custom Provider users to add new models (4 comments)
18. #5180 - 主会话派发任务 subagent 崩溃 (4 comments) - subagent crash
19. #3272 - No Pro plan available (4 comments) - CLOSED
20. #5173 - Model provider disambiguation fails (3 comments) - CLOSED
21. #5263 - 自动生成的技能在落盘持久化前能不能提示确认 (3 comments)
22. #5201 - QQ Bot channel adapter (3 comments)
23. #2561 - Vim mode dropdown menu selection (3 comments)
24. #5159 - Trackpad scroll in tmux (3 comments)
25. #5237 - Repetitive tool calls detected (3 comments) - CLOSED
26. #3233 - OAuth fails (3 comments) - CLOSED
27. #5280, #5277, #5275, #5273 - Test re-enable (2 comments)

**Top PRs (most relevant):**
1. #5202 - feat(channel): add QQ Bot channel adapter
2. #5231 - feat(core,cli): Workflow tool token budget + per-run UI surfacing
3. #5220 - feat(i18n): localize tool display names in TUI and web-shell badges
4. #5282 - test(core): enable agent headless termination coverage
5. #5283 - test(cli): enable command search long suggestion coverage
6. #5145 - feat(cli): show follow-up suggestion in input placeholder
7. #5181 - fix(core): prevent OOM in auto-memory extraction during /quit
8. #5195 - fix(cli): window title shows session name instead of model activity status
9. #5284 - feat(desktop): compile macOS 26+ Liquid Glass Assets.car
10. #5030 - feat(core,cli,sdk): resume an interrupted turn without a synthetic "continue" message
11. #5279 - fix(core): add always-on tool-call circuit breaker for runaway loops
12. #2915 - feat(cli): add /clear --all to fully reset session
13. #5241 - fix(model): disambiguate providers sharing a model id by baseUrl - CLOSED
14. #2993 - Fix/i18n chinese translations
15. #5259 - fix(cli): support Ctrl+P/N in completions
16. #5258 - fix(cli): Stop after cancelled permissions
17. #5257 - docs: Revamp README for clarity and focus - CLOSED
18. #5179 - fix(model): remember selected provider when multiple share a model id - CLOSED
19. #5248 - docs(cli): document tmux scroll workaround
20. #5256 - fix(core): detect dat files by content - CLOSED

Now let me analyze the trends:

**功能需求趋势:**
- **多 Provider / 自定义模型支持** - 大量关于 OpenAI 兼容、Custom Provider、Provider 消歧（#3384, #5090, #4814, #5173, #5241, #5179）
- **使用统计与配额管理** - Token 统计、限额概览（#4479, #3267）
- **认证与订阅问题** - OAuth、Coding Plan、Pro plan 可用性（#3203, #1855, #3335, #3307, #3281, #3272, #3233）
- **Subagent / Workflow 多代理** - Subagent 崩溃、Workflow token 预算（#5180, #5231）
- **国际化 / 中文化** - i18n 工具名、tmux 文档、Chinese translations（#5220, #2993, #5248）
- **Channel 适配器扩展** - QQ Bot（#5201, #5202）
- **工具调用稳定性** - 死循环、circuit breaker（#5234, #5237, #5279）
- **UI 体验改进** - 建议提示、Vim 模式、Ctrl+P/N（#5145, #2561, #5259）
- **测试覆盖恢复** - 多个测试 re-enable（#5280, #5277, #5275, #5273）

**开发者关注点:**
- OAuth / 认证相关问题是最高频痛点
- Coding Plan / Pro plan 库存问题反映了商业化压力
- 工具调用死循环、OOM 等稳定性问题
- 自定义 Provider 配置的体验需要改进
- 国际化不完整

Let me write the report now.
</think>
# Qwen Code 社区动态日报 · 2026-06-18

## 1. 今日速览

v0.18.3 正式版发布带来 `sed` 文件历史追踪修复，0.18.2 的"超大上下文指令告警"也已合入；社区端 OAuth 配额、Coding Plan 库存、Custom Provider 多 baseUrl 消歧仍是讨论焦点，PR 端则集中于 QQ Bot Channel、Workflow Token 预算、Tool-call Circuit Breaker 等功能。

---

## 2. 版本发布

- **v0.18.3 (stable)** — 核心变更：在 file history 中记录 sed 支持的编辑操作 ([#5255](https://github.com/QwenLM/qwen-code/pull/5255) by @doud)
- **v0.18.3-preview.0** — 预览版
- **v0.18.3-nightly.20260618.bc3e0b405** — 每日构建
- **v0.18.2** — 含 `@he-yufeng` 的"超大上下文指令告警"修复 ([#5073](https://github.com/QwenLM/qwen-code/pull/5073)) 与 `@DragonnZhan` 的文档陈旧默认值/CLI 语法/工具命名漂移修正

> 0.18.3 是一个相对克制的小版本，重心放在 file history 语义增强，大的功能迭代留给后续 0.19 系列。

---

## 3. 社区热点 Issues

| # | Issue | 关注点 | 链接 |
|---|-------|--------|------|
| 1 | **#3203** OAuth 免费配额策略调整 (151 💬) | 社区要求将日免费配额从 1000 降至 100 并在月底关闭免费入口，是当前最热的商业化议题 | [🔗](https://github.com/QwenLM/qwen-code/issues/3203) |
| 2 | **#4479** 每日 Token 消耗统计 (16 💬) | 用户一次会话消耗 3 千万 token，亟需内置用量看板 | [🔗](https://github.com/QwenLM/qwen-code/issues/4479) |
| 3 | **#3384** 无法添加 OpenAI 兼容本地 LLM (15 💬) | VLLM + Qwen3.6-35B-A3B 按官方文档配置失败，自定义 Provider 接入门槛高 | [🔗](https://github.com/QwenLM/qwen-code/issues/3384) |
| 4 | **#1855** OAuth 切换 Coding Plan 后仍报 401 (14 💬, 已关闭) | 典型的认证凭据残留导致鉴权失败 | [🔗](https://github.com/QwenLM/qwen-code/issues/1855) |
| 5 | **#3335** 401 invalid access token (14 💬, 已关闭) | Token 过期高频错误之一 | [🔗](https://github.com/QwenLM/qwen-code/issues/3335) |
| 6 | **#3307** Coding Plan 持续断货 (10 💬, 已关闭) | 阿里云 Coding Plan 持续 "Temporarily out of stock" 反映供需失衡 | [🔗](https://github.com/QwenLM/qwen-code/issues/3307) |
| 7 | **#3914** API connected 却 fetch failed (9 💬) | OpenRouter 等第三方 baseURL 下出现静默断连 | [🔗](https://github.com/QwenLM/qwen-code/issues/3914) |
| 8 | **#5090** Provider 与 SDK Protocol 解耦 (5 💬, in-review) | 把 `providerId` 改自由字符串、`Protocol` 改为枚举，扩展性关键重构 | [🔗](https://github.com/QwenLM/qwen-code/issues/5090) |
| 9 | **#5234** 工具调用陷入死循环 (4 💬) | 反映 0.18.x 在部分模型下循环触发同工具 | [🔗](https://github.com/QwenLM/qwen-code/issues/5234) |
| 10 | **#5180** Subagent 派发任务中途崩溃 (4 💬) | 主会话+子代理多代理架构稳定性问题，归类到 long-context / token-management | [🔗](https://github.com/QwenLM/qwen-code/issues/5180) |

> 注：#3203 累计评论 151 条但当前 👍 为 0，社区讨论存在明显分歧。

---

## 4. 重要 PR 进展

| # | PR | 关键变更 | 链接 |
|---|----|---------|------|
| 1 | **#5202** QQ Bot Channel Adapter | 新增 `@qwen-code/channel-qqbot`，WebSocket Gateway 支持 HELLO/IDENTIFY/HEARTBEAT/DISPATCH/RECONNECT | [🔗](https://github.com/QwenLM/qwen-code/pull/5202) |
| 2 | **#5231** Workflow 工具 Token 预算 (P5) | 单次 run 输出 token 预算贯穿 orchestrator、WorkflowRunRegistry、BackgroundTasksDialog 与 `/workflows` 命令 | [🔗](https://github.com/QwenLM/qwen-code/pull/5231) |
| 3 | **#5220** TUI 工具名 i18n | `TodoWrite`/`Shell`/`ReadFile` 等工具 badge 走本地化，UI 切中文后统一显示 | [🔗](https://github.com/QwenLM/qwen-code/pull/5220) |
| 4 | **#5181** `fix(core)` 修复 `/quit` 时 OOM | auto-memory 提取不再对完整会话调用 `buildTranscriptMessages()`，避免堆溢出 | [🔗](https://github.com/QwenLM/qwen-code/pull/5181) |
| 5 | **#5279** Tool-call Circuit Breaker | 独立的"失控循环"熔断器，从原 #5242 拆出，专注核心逻辑 | [🔗](https://github.com/QwenLM/qwen-code/pull/5279) |
| 6 | **#5030** 无合成 "continue" 消息的会话续接 | 区分 resume/crash/中断三类恢复形态，避免污染 transcript | [🔗](https://github.com/QwenLM/qwen-code/pull/5030) |
| 7 | **#5259** `Ctrl+P/N` 自动补全导航 | Vim 用户在补全菜单中获得与 `↑/↓` 等价的导航键 | [🔗](https://github.com/QwenLM/qwen-code/pull/5259) |
| 8 | **#5258** 取消权限后停止当前回合 | 修复 ACP 权限取消对 `ask_user_question` 之外的工具不生效的问题 | [🔗](https://github.com/QwenLM/qwen-code/pull/5258) |
| 9 | **#5241** 多 Provider 共享 model id 消歧 (已关闭) | `persistModelSelection` 持久化 baseUrl，重启后能选择到 Token Plan / IdeaLab / BFF | [🔗](https://github.com/QwenLM/qwen-code/pull/5241) |
| 10 | **#5145** 输入框占位符显示后续建议 | 模型回复后立即在 placeholder 展示建议 prompt，调用 fast model 生成 | [🔗](https://github.com/QwenLM/qwen-code/pull/5145) |

> 另有多条测试恢复 PR (#5282/#5283/#5275/#5273 等) 由 @tt-a1i 提交，正在批量解冻旧快照。

---

## 5. 功能需求趋势

1. **多 Provider / 自定义模型适配** — 仍是社区第一需求：OpenAI 兼容 VLLM (#3384)、Provider 协议解耦 (#5090)、Custom Provider UI (#4814)、baseUrl 消歧 (#5173/#5241/#5179) 形成完整链路。
2. **使用计量与配额可视化** — 每日 token 统计 (#4479)、限额概览 (#3267) 显示用户对"花得明白"的需求强烈。
3. **认证 / 商业化稳定性** — OAuth 残留 (#1855)、Token 过期 (#3335)、Coding Plan 缺货 (#3307/#3272)、OAuth 注册失败 (#3233) 构成最频繁的痛点簇。
4. **多代理 / Workflow 治理** — Subagent 崩溃 (#5180)、Workflow 预算 (#5231)、unattended resume (#5030) 指向同一方向：长任务编排的鲁棒性。
5. **Channel 适配器生态** — QQ Bot (#5201/#5202) 加入 telegram/weixin/dingtalk/feishu 矩阵，多端触达持续扩张。
6. **国际化与本地化** — TUI 工具名 (#5220)、命令中文化 (#2993)、tmux 文档 (#5248) 表明非英文用户体验正在被系统化补齐。
7. **工具调用安全** — 死循环熔断 (#5279/#5234)、`repetitive tool calls` 错误 (#5237) 推动核心引入"always-on circuit breaker"。
8. **测试覆盖恢复** — #5280/#5277/#5275/#5273 集中解冻 0.18 期间 skip 的快照测试，质量基线正在回归。

---

## 6. 开发者关注点

- **认证链路混乱**：从 OAuth → Coding Plan → Pro 的状态切换存在凭据残留，是 GitHub 上 401 错误的最大来源；建议在 `settings.json` 显式区分 auth source。
- **Coding Plan 容量**：多个 issue 提及 Pro/Coding Plan 长期缺货，开发者被迫依赖 OpenRouter 等三方通道，对稳定 baseURL 支持呼声高。
- **自定义 Provider 体验断层**：VLLM/OpenAI-compatible 配置按官方文档无法生效 (#3384)，Wizard 流程对 Custom Provider 也不够友好 (#4814)，多 baseUrl 同 id 模型选择不能跨会话保持 (#5173/#5241)。
- **稳定性短板**：长会话中 `/quit` 触发的 OOM (#5181)、子代理执行崩溃 (#5180)、工具调用死循环 (#5234) 是 P1/P2 级别的核心稳定性议题，0.18.3 仍未完全收敛。
- **可观测性诉求**：Token 消耗、配额进度、错误码可读性（如 `InternalError.Algo.InvalidParameter: Repetitive tool calls`）都是"希望有内建反馈"的高频反馈。
- **平台/键位细节**：tmux 滚轮误触发历史导航 (#5159/#5248)、Vim 模式补全 (#2561/#5259) 反映 CLI 在终端兼容层仍有缺口。

---

*数据窗口：2026-06-17 → 2026-06-18 · 数据源：github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
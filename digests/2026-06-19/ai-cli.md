# AI CLI 工具社区动态日报 2026-06-19

> 生成时间: 2026-06-19 04:58 UTC | 覆盖工具: 7 个

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

<think>The user wants me to create a comprehensive cross-comparison analysis report based on the daily dynamics of 6 AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code). 

Let me organize the data first:

**Activity Summary:**
- Claude Code: 50 issues, 4 PRs, 1 release (v2.1.183)
- OpenAI Codex: 50 issues, 50 PRs, 3 releases (rust-v0.142.0-alpha.1/2/3)
- Gemini CLI: 50 issues, 26 PRs, 0 releases
- GitHub Copilot CLI: 36 issues, 1 PR, 0 releases
- Kimi Code CLI: 3 issues, 1 PR, 0 releases
- OpenCode: ~30 issues, ~30 PRs (showing top 30/20), 0 releases
- Qwen Code: 50 issues, 50 PRs, 0 releases

**Common themes I can identify:**
1. MCP (Model Context Protocol) ecosystem maturity - Claude Code, Codex, Copilot CLI, OpenCode, Qwen Code
2. Token consumption / cost transparency - Claude Code (#38350, #69419), Codex (#14593, #28879), Qwen Code (#4479)
3. Cross-platform compatibility - all tools have Windows/Linux/macOS issues
4. Session/context management reliability - Claude Code (#47098), Codex (#25792), OpenCode (#27167)
5. Multi-account / authentication management - Claude Code (#36151), Codex (#14601), OpenCode (#5391)
6. Subagent / agent reliability - all tools
7. Configuration pollution / project isolation - Codex (#14601), Qwen Code (sandbox security)
8. Performance / regression issues - widespread
9. Security & sandbox - all tools, especially Qwen Code's notable findings
10. Long-running task reliability - Codex (#25792), Claude Code regressions

**Differentiation:**
- Claude Code: enterprise/paying users, auto mode safety, Opus model integration
- Codex: gpt-5.5/5.4 model support, Rust architecture, alpha rapid iteration
- Gemini CLI: Auto Memory system, eval infrastructure, P0 release failures
- Copilot CLI: GitHub ecosystem integration, MCP issues cluster
- Kimi Code CLI: smallest community, focus on proxy/network compat
- OpenCode: MCP-first, /goal session goals, plugin provider
- Qwen Code: ACP protocol, security hardening, vision-bridge for text models

Let me write a professional comparison report in Chinese.

I should make this comprehensive but readable, with clear data backing up each point. Let me structure it as requested.</think>

# AI CLI 工具生态横向对比分析报告
**日期：2026-06-19 | 覆盖工具：Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · Kimi Code CLI · OpenCode · Qwen Code**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **"能力扩展期"与"质量收敛期"并行的关键阶段**：一方面，所有主流工具都在围绕 **MCP（Model Context Protocol）扩展生态、多 Agent 协作、跨平台覆盖** 三大方向快速堆叠功能；另一方面，**计费透明度、版本回归、上下文可靠性** 这三大"成熟期阵痛"在多个工具社区集中爆发。技术路线上呈现明显分化——商业系（Claude Code、Codex、Copilot CLI）侧重深度模型集成与企业能力，国内系（Qwen Code、Kimi Code CLI）侧重多渠道接入与中文场景适配，开放系（OpenCode）则把 MCP 协议对齐和会话目标管理作为差异化抓手。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issue 更新 | 今日 PR 更新 | 新版本发布 | 总体节奏 |
|------|----------------|-------------|-----------|---------|
| **Claude Code** | 50 | 4 | v2.1.183（auto mode 安全加固） | 节奏稳定，重安全与稳定性 |
| **OpenAI Codex** | 50 | **50** | rust-v0.142.0-alpha.1/2/3 | **今日最活跃**，alpha 密集迭代 |
| **Gemini CLI** | 50 | 26 | ❌ | 节奏正常，P0 阻塞发布链 |
| **GitHub Copilot CLI** | 36 | **1** | ❌ | **PR 活跃度最低**，疑似内部重构期 |
| **Kimi Code CLI** | **3** | 1 | ❌ | **活跃度最低**，社区体量小 |
| **OpenCode** | ~30 | ~30 | ❌ | 高活跃，单 PR 规模克制 |
| **Qwen Code** | 50 | 50 | ❌ | **整改式集中爆发**，@tt-a1i 单日 15+ PR |

> 📊 **关键观察**：Codex 和 Qwen Code 以 50/50 的 issue/PR 比例显示最强工程输出；Copilot CLI 与 Kimi Code CLI 处于低活跃期，可能反映版本节奏或组织调整。

---

## 3. 共同关注的功能方向

### 3.1 🔌 MCP 生态成熟度（5/7 工具聚焦）

| 工具 | 代表性反馈 |
|------|-----------|
| Claude Code | #69324 内置 MCP 自动注入 401、#26073 Windows MSIX 路径错误、#56740 插件 `gitCommitSha` 过期 |
| Codex | MCP OAuth 并发序列化栈 5 层 PR (#29017-#29021)，解决 refresh/login/logout 竞态 |
| Copilot CLI | **#3838 OAuth 凭据丢失**（7 评论，最高互动）、#3812 subagent 无法访问 MCP、#3296 Ubuntu 20.04 MCP 启动失败 |
| OpenCode | **#28567 完整 MCP 客户端能力**（24 赞），PR #32480/#32936 推进资源订阅与进度通知 |
| Qwen Code | #5380 正确识别 MCP callable 顶层 `isError`、#5382 MCP 工具错误时不重连 |

**共识诉求**：OAuth 鉴权链路稳定性、subagent 调用 MCP 的可用性、跨平台配置发现、错误处理语义统一。

### 3.2 💰 计费透明度与成本控制（3/7 工具爆发）

| 工具 | 代表性反馈 |
|------|-----------|
| Claude Code | #38350 用量异常（63 评论）、#69419 周配额突跳满、#47098 cache-create 异常 |
| Codex | **#14593 "Burning tokens very fast"**（616 评论/271 赞，长期 TOP1）、#28879 gpt-5.5 消耗飙升 10-20× |
| Qwen Code | **#4479 每日 Token 用量统计**（今日评论最高，16 条） |

**共识诉求**：用量明细拆解（cache-create vs cache-read vs input vs output）、服务端/客户端限流区分、配额突增预警机制。

### 3.3 🪟 跨平台一致性（6/7 工具受影响）

| 平台 | 主要痛点 |
|------|---------|
| **Windows** | Claude Code #26302 UI 卡顿、Codex #15777 ACL 损坏、Copilot CLI #3296 glibc 不兼容、Qwen Code 多起盘符解析问题 |
| **Linux/WSL** | Claude Code #19393 100% CPU、OpenCode #27589 Alpine musl TUI 崩溃、Kimi Code CLI #2462 Git Bash 安装失败 |
| **macOS** | Claude Code #38350 限流计算异常、Codex #25719 syspolicyd CPU 失控 |

### 3.4 🤖 Subagent / 多 Agent 编排可靠性（5/7 工具）

- **Claude Code** #68721 v2.1.178 TeamCreate/TeamDelete 消失
- **Gemini CLI** #21409 通用子代理挂起（8 赞）、#22323 MAX_TURNS 仍报成功
- **Copilot CLI** #3013 Hooks 不覆盖后台 agent、#3812 subagent 无法用 MCP 工具
- **OpenCode** #27167 `/goal` 会话级目标（51 评论/88 赞，今日最热）
- **Qwen Code** #5385 ACP 会话取消测试引用旧标志位

### 3.5 🔐 认证与多账户管理（3/7 工具）

- **Claude Code** #36151 Mobile 多账号切换（**352 赞**，长期呼声最高）
- **Codex** #14601 隔离 `trusted_level` 防配置污染（43 赞）
- **OpenCode** #5391 同 provider 多 auth profile（31 赞）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 深度 Anthropic 模型集成 + 企业级 Agent | 中大型企业、付费开发者、Claude 生态用户 | Auto mode 安全语义、Opus 模型调优、桌面/IDE 集成 |
| **OpenAI Codex** | gpt-5.5/5.4 模型最佳载体 + 远程执行环境 | OpenAI 全产品用户、企业 Pro 订阅者、远程开发场景 | Rust 重写、alpha 快速迭代、远程环境生命周期重构（deferred_executor） |
| **Gemini CLI** | Google AI 能力 + Auto Memory 长期记忆 | Google Cloud 用户、需要长期项目记忆的研究者 | Auto Memory 系统、Eval 基础设施（76+ 行为测试）、AST 感知工具探索 |
| **GitHub Copilot CLI** | GitHub 生态深度绑定 + BYOK 灵活性 | GitHub 重度用户、企业 Copilot 订阅者 | MCP 集成（Drive 等服务）、BYOK/Ollama 支持 |
| **Kimi Code CLI** | 国内场景 + 长上下文 | 中文长文档处理场景、Kimi 模型用户 | 长上下文 MCP、sub-skill、轻量级社区 |
| **OpenCode** | **协议中立** + 开放扩展生态 | 多模型用户、Plugin 开发者、技术尝鲜者 | MCP-first 设计、`/goal` 会话目标、Plugin Provider 体系、AI SDK 6 |
| **Qwen Code** | **阿里生态** + 安全沙箱 + 中文 IDE 集成 | 阿里云用户、国内 ACP 协议使用者、安全敏感场景 | ACP 协议、Web Shell 托管、Vision Bridge、QQ Bot/飞书渠道 |

**路线分野清晰**：
- **"模型绑定派"**：Claude Code、Codex、Gemini CLI 各自锁定自家模型
- **"协议中立派"**：OpenCode 强调 provider 无关
- **"生态绑定派"**：Copilot CLI 强绑 GitHub，Qwen Code 强绑阿里
- **"渠道扩张派"**：Qwen Code 在 IDE/IM 渠道上最为积极

---

## 5. 社区热度与成熟度

### 社区热度榜（按今日互动量）

| 排名 | 工具 | 关键热度指标 |
|------|------|-------------|
| 🥇 | **OpenAI Codex** | #14593 累计 616 评论/271 赞；50 PR 同步推进 |
| 🥈 | **Claude Code** | #36151 352 赞、#38350 63 评论；版本发布稳定 |
| 🥉 | **OpenCode** | #27167 单日 51 评论/88 赞；高密度 PR 提交 |
| 4 | **Gemini CLI** | 50 issues + 26 PR；Eval 体系化建设 |
| 5 | **Qwen Code** | 50/50 同步爆发；安全主题集中 |
| 6 | **Copilot CLI** | 36 issues 但仅 1 PR；MCP 痛点集中 |
| 7 | **Kimi Code CLI** | 仅 3 issues；社区体量最小 |

### 成熟度评估

| 工具 | 成熟度 | 主要特征 |
|------|-------|---------|
| **Claude Code** | ⭐⭐⭐⭐⭐ | 明确的版本节奏、安全机制、模型适配；处于功能完备期 |
| **OpenAI Codex** | ⭐⭐⭐⭐ | Rust 重写已收敛，alpha 节奏显示架构收敛中 |
| **Gemini CLI** | ⭐⭐⭐ | Eval/Auto Memory 等基础设施仍在搭建 |
| **Copilot CLI** | ⭐⭐⭐ | MCP 集成度低、PR 活跃度低，疑似平台调整期 |
| **OpenCode** | ⭐⭐⭐ | 处于"修缮期"，但 `/goal` 等架构扩展活跃 |
| **Qwen Code** | ⭐⭐⭐ | 集中整改期，安全加固密集 |
| **Kimi Code CLI** | ⭐⭐ | 社区体量小，反馈渠道单一 |

---

## 6. 值得关注的趋势信号

### 🔴 趋势一：**MCP 已成为 AI CLI 扩展的事实标准，但稳定性成为新瓶颈**

7 个工具中 5 个在 24 小时内集中反馈 MCP 相关问题。**这意味着 MCP 生态从"接入竞赛"进入"质量竞赛"**。对开发者的启示：在选型时，应特别关注目标工具的 MCP OAuth 实现、subagent 调用能力、配置发现机制——这些是当前最脆弱的环节。

### 🟡 趋势二：**"自主 Agent"从概念走向实现，但状态语义仍是核心痛点**

- OpenCode 推进 `/goal` 会话级目标（PR #32743/#32924 同步推进）
- Claude Code v2.1.183 强化 auto mode 安全拦截
- Gemini CLI 出现 subagent 报告 GOAL 成功却实际未完成（#22323）

**信号**：2026 下半年的 Agent 竞争焦点已从"能否调用工具"转向"能否可靠地追求长期目标"。对开发者而言，工具的可观测性（能否看清 agent 真实状态）将比"功能多寡"更影响选型决策。

### 🟢 趋势三：**计费透明度成为付费用户最大的不信任来源**

Claude Code #38350、Codex #14593、Qwen Code #4479 在同一日集中反映同类诉求。**这是商业系 AI CLI 工具的共同治理短板**。**对技术决策者的启示**：在企业采购决策中，"用量可观测性"应作为重要评估项，不亚于模型能力本身。

### 🔵 趋势四：**跨平台一致性从"附加分"变为"入场券"**

Alpine musl 崩溃、Windows 盘符解析、Git Bash 安装失败、macOS 系统服务风暴——每一个都是"放弃某个用户群"的临界点。OpenCode 的 #27589（Alpine）和 Kimi Code CLI 的 #2462（Windows Git Bash）表明：**任何平台短板都可能成为社区流失的导火索**。

### 🟣 趋势五：**安全沙箱从"功能项"升级为"信任项"**

Qwen Code 今日爆出 3 起安全相关 Issue：
- #5373 沙箱路径前缀可被兄弟目录绕过
- #5376 `~` 路径在权限检查时未展开
- #5368 不可信工作区状态误转 boolean

**这反映出 AI CLI 进入企业场景后，沙箱语义已经从"防止误操作"升级到"防止安全攻击"。** 对开发者：评估工具时应将沙箱实现作为安全审查的必要环节。

### 🟠 趋势六：**"渠道扩张"成为国内 AI CLI 的差异化战略**

Qwen Code 今日并行推进：
- #5392 `qwen serve` 托管 Web Shell UI
- #5201 QQ Bot 渠道适配器
- 飞书/钉钉/微信/钉钉渠道矩阵

**这与海外工具的"深度 IDE 集成"路线形成鲜明对比**。对国内开发者：**Qwen Code 是目前国内 IM/IDE/CLI 全渠道覆盖最积极的 AI CLI 工具**，适合需要在国内办公协同场景落地的团队。

---

## 📌 总结建议

| 角色 | 建议 |
|------|------|
| **企业技术决策者** | 优先关注 Claude Code 与 OpenAI Codex；将 MCP 稳定性、用量可观测性、沙箱安全语义列入采购评估清单 |
| **个人开发者** | 若追求前沿功能，可关注 OpenCode 的 `/goal` 与 Qwen Code 的 ACP 集成；若追求稳定，省心选 Claude Code |
| **Plugin/MCP 开发者** | 当前是 MCP 生态的关键窗口期，应优先选择 OpenCode、Claude Code 作为首发目标——前者协议中立、后者商业化能力强 |
| **安全工程师** | 重点关注 Qwen Code 今日披露的多起沙箱边界问题，这是行业级的安全意识提升信号 |
| **国内企业用户** | Qwen Code 是当前中文场景下生态最完整的 AI CLI 选择；Kimi Code CLI 适合长文档处理专项需求 |

---

*报告基于 2026-06-19 各工具 GitHub 仓库公开数据综合生成 · 横向对比分析维度*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>
The user wants me to analyze the GitHub data from the anthropics/skills repository and generate a community hot report on Claude Code Skills. Let me carefully analyze the data provided.

Key observations:
1. The data shows PRs sorted by comment count, but the comment counts are all "undefined" - this is interesting. The actual ranking is likely based on some other metric or it's the data presentation.
2. Let me look at the actual content and engagement signals (likes/👍, dates, status)

Looking at the PRs:
- #514 document-typography skill - typographic quality control
- #486 ODT skill - OpenDocument text creation
- #210 Improve frontend-design skill
- #83 Add skill-quality-analyzer and skill-security-analyzer
- #538 fix(pdf) - case-sensitive file references
- #539 fix(skill-creator) - YAML special characters
- #541 fix(docx) - tracked change w:id collision
- #181 Add SAP-RPT-1-OSS predictor skill
- #1298 fix(skill-creator) - run_eval.py 0% recall
- #361 Detect unquoted YAML special characters
- #1099 skill-creator: fix run_eval.py Windows
- #95 Add comprehensive system documentation
- #509 docs: add CONTRIBUTING.md
- #1050 skill-creator: fix Windows subprocess
- #723 feat: add testing-patterns skill
- #362 Fix skill-creator UTF-8 panic
- #335 Add masonry-generate-image-and-videos skill
- #154 Add shodh-memory skill
- #568 feat: add ServiceNow platform skill
- #444 feat: add AURELION skill suite

Issues (with comment counts):
- #228 Enable org-wide skill sharing in Claude.ai - 14 comments, 7 likes
- #556 run_eval.py 0% trigger rate - 12 comments, 7 likes
- #62 All my skills have disappeared - 10 comments, 2 likes
- #202 skill-creator should be updated to best practice - 8 comments, 1 like
- #492 Security: Community skills distributed under anthropic/ namespace - 7 comments, 2 likes
- #412 Skill proposal: agent-governance - 6 comments, 0 likes
- #189 document-skills and example-skills plugins duplicate - 6 comments, 9 likes
- #1175 Security/Context Window for SharePoint - 4 comments, 0 likes
- #29 Usage with bedrock - 4 comments, 0 likes
- #16 Expose Skills as MCPs - 4 comments, 0 likes
- #1329 compact-memory skill - 3 comments, 0 likes
- #1169 recall=0% on every iteration - 3 comments, 1 like
- #1061 Windows compatibility - 3 comments, 0 likes
- #184 agentskills.io redirects - 3 comments, 4 likes
- #61 "Not found" error loading Skills - 3 comments, 0 likes

Let me structure the report according to the requirements:

1. **热门 Skills 排行** - Top 5-8 Skills (PRs) by engagement
2. **社区需求趋势** - New skill directions from issues
3. **高潜力待合并 Skills** - High-activity unmerged PRs
4. **Skills 生态洞察** - Summary

For the ranking, since comment count is "undefined" in the data, I'll need to use other indicators. But the PRs are presented as "sorted by comment count" so I'll trust the order and consider dates, scope, and other engagement signals.

Actually, looking more carefully - the comment count is undefined, but the data is sorted by comment count. This seems to be a data quality issue, but I can still rank by examining the substance, dates, and likely engagement.

Let me focus on the most substantive and high-impact PRs:

Top Skills by impact and potential:
1. #514 document-typography - addresses real pain point in AI-generated documents
2. #486 ODT - extends document format support
3. #210 Improve frontend-design - high-impact improvement
4. #83 skill-quality-analyzer and skill-security-analyzer - meta tools
5. #181 SAP-RPT-1-OSS predictor - enterprise integration
6. #723 testing-patterns - high demand category
7. #568 ServiceNow platform - enterprise
8. #335 masonry-generate-image-and-videos - creative/multimodal

For community needs, the issues clearly show:
- Enterprise sharing/distribution (org-wide sharing)
- skill-creator reliability (run_eval.py bugs)
- Security concerns (anthropic/ namespace impersonation)
- Platform integration (Bedrock, MCP)
- Cross-platform compatibility (Windows)
- Plugin deduplication
- Skill persistence/memory

High potential unmerged PRs:
- All 20 listed are OPEN status
- #514, #486, #210, #83, #181, #723, #568, #444, #335, #154, #444 - all new skills
- Multiple fix PRs for skill-creator (#538, #539, #541, #1298, #361, #1099, #1050, #362)

Let me write a comprehensive report in Chinese, as the user wrote in Chinese.

The data cutoff is 2026-06-19, so I should be careful about how I present dates and use present tense appropriately. The dates in the data range from late 2025 to mid-2026.

Let me draft the report now. I should use professional, concise language and provide GitHub links for each item.
</think>
# Claude Code Skills 社区热点报告

**数据范围**：github.com/anthropics/skills 仓库热门 PR（前 20/50）+ Issues（前 15/50）
**截止日期**：2026-06-19

---

## 一、热门 Skills 排行

> 排序依据：PR 综合关注度（功能价值 + 时间跨度 + 行业代表性）。注：原数据评论数为 `undefined`，以下排行结合内容影响力与问题追踪综合判断。

### 1. document-typography — AI 文档排版质量控制 🔤
- **PR**：[#514](https://github.com/anthropics/skills/pull/514)（@PGTBoos，2026-03 至今仍 OPEN）
- **功能**：自动预防 AI 生成文档中的孤词换行、寡妇段落、编号错位等排版问题
- **热点**：补足了 Skills 中"输出美观度"维度的空白；属于人人都受益的"基础设施型"Skill
- **状态**：OPEN（未合并）

### 2. ODT — OpenDocument 创建/解析 📄
- **PR**：[#486](https://github.com/anthropics/skills/pull/486)（@GitHubNewbie0，2026-03 至今仍 OPEN）
- **功能**：在 Claude 中原生支持 `.odt`/`.ods` 格式生成、模板填充及转 HTML
- **热点**：补齐开源办公格式支持，对欧洲/政府/开源生态用户意义重大
- **状态**：OPEN（未合并）

### 3. frontend-design — 改进清晰度与可执行性 🎨
- **PR**：[#210](https://github.com/anthropics/skills/pull/210)（@justinwetch，2026-01 起 5 个月仍未合）
- **功能**：重写 frontend-design 技能，使其指令更可被 Claude 在单次对话内执行
- **热点**：反映"现有 Skill 描述冗长、缺乏可操作性"是社区普遍痛点（与 #202 Issue 互相印证）
- **状态**：OPEN（未合并）

### 4. skill-quality-analyzer + skill-security-analyzer — 元能力 🔍
- **PR**：[#83](https://github.com/anthropics/skills/pull/83)（@eovidiu，2025-11 起长期 OPEN）
- **功能**：从 5 个维度（结构 20% / 示例 / 资源 / 安全 / 可触发性）自动评估 Skill 质量
- **热点**：社区对"如何衡量 Skill 质量"已形成方法论诉求；呼应 #492 安全信任议题
- **状态**：OPEN（未合并）

### 5. SAP-RPT-1-OSS predictor — 企业级表格预测 🏢
- **PR**：[#181](https://github.com/anthropics/skills/pull/181)（@amitlals，2025-12 起 6 个月 OPEN）
- **功能**：封装 SAP 开放表格基础模型（Apache 2.0）用于业务数据预测分析
- **热点**：首个深度集成 SAP 生态的 Skill；显示企业 SaaS 集成是新增量赛道
- **状态**：OPEN（未合并）

### 6. testing-patterns — 全栈测试方法论 🧪
- **PR**：[#723](https://github.com/anthropics/skills/pull/723)（@4444J99，2026-03 起 3 个月 OPEN）
- **功能**：覆盖 Testing Trophy 模型、AAA 模式、React Testing Library、契约测试等
- **热点**：呼应社区对"测试生成/质量保证"Skill 的长期呼声
- **状态**：OPEN（未合并）

### 7. ServiceNow Platform — ITSM/ITOM/ITAM 全栈 🛠️
- **PR**：[#568](https://github.com/anthropics/skills/pull/568)（@Vanka07，2026-03 起 3 个月 OPEN）
- **功能**：覆盖 ServiceNow 7 大模块（ITSM、ITOM、SecOps、ITAM/SAM、FSM、SPM、CSDM）
- **热点**：体现"广覆盖 + 深业务"型企业 SaaS 集成模板的兴起
- **状态**：OPEN（未合并）

### 8. masonry-generate-image-and-videos — 多模态生成 🖼️
- **PR**：[#335](https://github.com/anthropics/skills/pull/335)（@junaid1460，2026-02 起 4 个月 OPEN）
- **功能**：封装 Imagen 3.0 / Veo 3.1 等模型进行图像与视频生成
- **热点**：多模态生成是 Claude Skills 在"创意生产"领域的延展方向
- **状态**：OPEN（未合并）

---

## 二、社区需求趋势（基于热门 Issues）

| 诉求方向 | 代表 Issue | 社区关注度 | 核心痛点 |
|---------|-----------|----------|---------|
| **企业级分发与协作** | [#228](https://github.com/anthropics/skills/issues/228)（14 评论 / 7 👍） | ⭐⭐⭐⭐⭐ | Skill 跨用户/跨团队共享无原生机制，需手动下载、Slack 传文件、再上传 |
| **skill-creator 评估工具失灵** | [#556](https://github.com/anthropics/skills/issues/556)（12/7）、[#1169](https://github.com/anthropics/skills/issues/1169)（3/1） | ⭐⭐⭐⭐⭐ | `run_eval.py` 触发率 0%，`improve_description.py` 在基于噪声优化 |
| **Skill 消失/加载异常** | [#62](https://github.com/anthropics/skills/issues/62)（10/2）、[#61](https://github.com/anthropics/skills/issues/61)（3/0） | ⭐⭐⭐⭐ | 用户上传 Skill 莫名消失 / `list-skills` 404，平台稳定性存疑 |
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（7/2） | ⭐⭐⭐⭐ | 社区 Skill 混在 `anthropic/` 命名空间，冒充官方，存在权限提升风险 |
| **AI Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412)（6/0，CLOSED） | ⭐⭐⭐ | 提案 Skill 覆盖策略执行、威胁检测、信任评分、审计追踪 |
| **插件去重** | [#189](https://github.com/anthropics/skills/issues/189)（6/9 👍） | ⭐⭐⭐ | `document-skills` 与 `example-skills` 重复安装，污染上下文窗口 |
| **跨平台兼容（Windows）** | [#1061](https://github.com/anthropics/skills/issues/1061)（3/0） | ⭐⭐⭐ | `subprocess.PATHEXT`、`cp1252` 编码、pipe 上 `select` 三大 Windows 阻塞 bug |
| **Skills 协议化（MCP 化）** | [#16](https://github.com/anthropics/skills/issues/16)（4/0） | ⭐⭐⭐ | 提议把 Skill 暴露为 MCP，标准化"AI 软件"的 API 协议 |
| **长程 Agent 记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329)（3/0） | ⭐⭐ | `compact-memory` 用符号化表示压缩 Agent 状态、节省上下文 |
| **第三方平台集成** | [#29](https://github.com/anthropics/skills/issues/29)（4/0，AWS Bedrock） | ⭐⭐ | Skills 在非 Anthropic 平台上的使用指南缺失 |

**趋势归纳**：
1. **"工具链失灵"压过"新功能"** — 当前社区最痛的不是缺什么 Skill，而是 `skill-creator` 这一关键自举工具不可用。
2. **企业化纵深** — 从 SAP、ServiceNow、SharePoint 等 Issue/PR 看出，Skills 正在从"个人生产力"向"企业 SaaS 中枢"演进。
3. **安全与治理崛起** — 命名空间冒充、SharePoint 权限内嵌、Agent 治理等议题集中出现。

---

## 三、高潜力待合并 Skills（短期内可能落地）

以下 PR 状态均为 **OPEN**，但具备明确的合并条件与场景价值：

| 优先级 | PR | Skill | 合并阻力 | 落地价值 |
|------|------|------|--------|---------|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 0% recall（@MartinCajiao） | 低（纯修复） | 极高（解锁 description 优化闭环） |
| 🥇 | [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 子进程/编码修复 | 低 | 高（让 skill-creator 在 Win 上可用） |
| 🥇 | [#361](https://github.com/anthropics/skills/pull/361) / [#539](https://github.com/anthropics/skills/pull/539) | YAML 未引号特殊字符检测 | 低 | 高（修复静默解析失败） |
| 🥈 | [#538](https://github.com/anthropics/skills/pull/538) | PDF Skill 大小写路径修复 | 低 | 中（消除 Linux 部署问题） |
| 🥈 | [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked-change 与 bookmark ID 冲突 | 中 | 中（防文档损坏） |
| 🥈 | [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 多字节字符 panic 修复 | 低 | 中（多语言场景必需） |
| 🥉 | [#509](https://github.com/anthropics/skills/pull/509) | 添加 `CONTRIBUTING.md`（@narenkatakam） | 极低 | 文档基础建设 |
| 🥉 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography Skill | 中 | 高（人人受益） |
| 🥉 | [#486](https://github.com/anthropics/skills/pull/486) | ODT Skill | 中 | 高（欧洲/政府用户刚需） |
| 🥉 | [#210](https://github.com/anthropics/skills/pull/210) | frontend-design 重写 | 中 | 高（与 #202 痛点共振） |

**观察**：维护者当前似乎"重功能、轻基础设施"——20 条热门 PR 中 **6 条是 skill-creator 修复**，但均长期 OPEN；而高调的新功能 Skill（SAP / ServiceNow / masonry）也未推进。这与社区的真实诉求（"先让工具链好起来"）存在明显错位。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"把 skill-creator 这个自举工具修好"** —— 在 20 条热门 PR 中，修复 `skill-creator` 的 PR 占据近三分之一（#1298、#1099、#1050、#539、#541、#362、#361），Issues #556、#1169、#1061 也反复指向 `run_eval.py` 在 Windows/跨平台/触发检测上的全面失灵，叠加组织级共享（#228）、命名空间信任（#492）、平台稳定性（#62/#61）等诉求，说明 Claude Code Skills 已从"功能发布期"进入"工程化治理期"：社区在用脚投票，要求先解决**评估、兼容、安全、分发**这四项基础设施问题，再谈 SAP、ServiceNow、多模态生成等上层扩张。

---

<think>Let me analyze the GitHub data provided and create a comprehensive daily report for Claude Code community dynamics on 2026-06-19.

Key observations:
1. New release v2.1.183 with auto mode safety improvements (blocking destructive git commands)
2. Multiple high-traffic issues, with #36151 being the most commented (96 comments, 352 likes) - multi-account switching
3. Cost/rate limit issues are a major theme
4. Several regression bugs in recent versions
5. Only 4 PRs in the past 24 hours, with #69470 being a closed fix for the stale-issue-locking workflow
6. Platform-specific bugs across macOS, Windows, Linux
7. MCP-related issues emerging as a theme
8. Model-specific concerns (Opus 4.8 performance, Opus 4.7 thinking summaries)

Let me structure this into a comprehensive Chinese daily report.</think>

# Claude Code 社区动态日报
**2026-06-19**

---

## 📌 今日速览

今日 v2.1.183 发布，重点强化 **auto mode 安全机制**：自动拦截高危 git 命令（如 `git reset --hard`、`git checkout -- .`、`git clean -fd`、`git stash drop`），并在非本会话提交时阻止 `git commit --amend`。社区层面，"**多账号切换**"长期高赞需求（👍352）持续领跑；**限流与计费异常**类问题集中爆发，多个高评论 issue 反映 Anthropic API 服务端限流与用量突增问题；近两个版本（2.1.178 / 2.1.181）出现 **regression bug**，涉及团队管理工具消失、API 无响应等。

---

## 🚀 版本发布

### v2.1.183
- **Auto Mode 安全加固**：在 auto 模式下，系统主动阻断破坏性 git 操作，除非用户明确要求丢弃本地工作：
  - `git reset --hard`
  - `git checkout -- .`
  - `git clean -fd`
  - `git stash drop`
- **`git commit --amend` 保护**：仅当 amend 的目标 commit 是本会话由 agent 创建时允许，否则拦截。
- 这是一项以"防止 agent 误操作毁掉用户未提交成果"为导向的防御性更新，体现了 Anthropic 在 agent 自主性与安全边界之间的权衡。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 关注点 |
|---|-------|------|----|--------|
| 1 | [#36151](https://github.com/anthropics/claude-code/issues/36151) Multi-account switching in Claude Mobile app | 96 | 352 | **长期呼声最高的功能请求**。用户希望在共享邮箱场景下能在 Claude Mobile 中灵活切换多账号，反映企业/团队用户身份管理需求。352 赞说明需求迫切但迟迟未落地。 |
| 2 | [#38350](https://github.com/anthropics/claude-code/issues/38350) Abnormal / inflated rate limit / session usage | 63 | 42 | **计费异常高居不下**。macOS 平台用户反馈 session 用量与限流计算异常，严重影响付费用户体验。 |
| 3 | [#53915](https://github.com/anthropics/claude-code/issues/53915) API Error: Server temporarily limiting requests | 57 | 19 | **服务端限流 vs 用户限流混淆**。Windows + VSCode 环境频发 "Rate limited" 报错，但实为服务端问题，用户难以自查。 |
| 4 | [#49268](https://github.com/anthropics/claude-code/issues/49268) Thinking summaries missing on Opus 4.7 | 46 | 75 | **Opus 4.7 模型兼容性问题**。harness 未设置 `display: "summarized"`，导致扩展思考摘要丢失。👍比评论数高，说明影响面广但讨论收敛。 |
| 5 | [#26302](https://github.com/anthropics/claude-code/issues/26302) Claude Desktop UI lag & mouse stutter on Windows | 43 | 37 | **Desktop 性能 regression**。更新后 Windows 端 UI 卡顿、鼠标拖拽抖动，43 条评论说明问题长期未根治。 |
| 6 | [#19393](https://github.com/anthropics/claude-code/issues/19393) High CPU usage (100%+) when idle (v2.1.12) | 24 | 24 | **Linux/WSL 空闲态 CPU 满载**。即便在等待输入时也持续高占用，影响开发体验且导致风扇狂转。 |
| 7 | [#20944](https://github.com/anthropics/claude-code/issues/20944) Add Setting to Disable Automatic IDE Selection Context | 16 | 58 | **IDE 上下文自动注入控制**。用户希望关闭自动注入 IDE 选中上下文以节省 token/避免误触发，58 赞显示高度共鸣。 |
| 8 | [#68721](https://github.com/anthropics/claude-code/issues/68721) 2.1.178: TeamCreate/TeamDelete regression | 15 | 5 | **本版本直接相关 regression**。v2.1.178 中原生团队管理工具消失，对使用多 agent 协作的用户是 breaking change。 |
| 9 | [#69419](https://github.com/anthropics/claude-code/issues/69419) Usage jumped from 80% to 100% for the week | 14 | 6 | **本周配额突增问题**。macOS 用户周用量突然跳满，疑与上文 #38350 同源。 |
| 10 | [#47098](https://github.com/anthropics/claude-code/issues/47098) New sessions never hit full cache | 12 | 1 | **缓存命中率异常**。重新启动 claude 或清空 session 后，即使简短消息也产生 6505 个 cache-create token，质疑缓存策略。 |

---

## 🛠️ 重要 PR 进展

| PR | 状态 | 内容概要 |
|----|------|----------|
| [#69470](https://github.com/anthropics/claude-code/pull/69470) Fix lock-closed-issues workflow | **已关闭 (合并)** | 修复 "Lock Stale Issues" 定时工作流——自 2026-04-27 起连续 53 天失败，原因是 offset 分页遇到 GitHub search API 的 1000 条上限。改用 search API 进行分页。**基础设施级修复**，影响所有 issue 自动化管理。 |
| [#68673](https://github.com/anthropics/claude-code/pull/68673) fix(scripts): break pagination when page is not full | OPEN | 脚本分页逻辑修复：当分页未满时不只判断为空才中断，对应 #69470 同类问题。 |
| [#45553](https://github.com/anthropics/claude-code/pull/45553) resolve duplicate IPs | OPEN | 解决重复 IP 解析问题（具体背景待补充，从摘要看涉及网络/IP 处理）。 |
| [#23972](https://github.com/anthropics/claude-code/pull/23972) fix: hookify Python 3.8 compat | OPEN | hookify 插件兼容修复：`config_loader.py` 添加 `from __future__ import annotations` 解决 Ubuntu 20.04 默认 Python 3.8 下 `tuple[Dict, str]` 类型注解报错；同时让规则加载与 cwd 无关。**对低版本 Python 用户友好**。 |

> 注：今日 PR 数量较少（仅 4 条更新），且多为维护性修复，未见重大功能 PR 合入。

---

## 📈 功能需求趋势

从今日 50 条更新 issues 中提炼，社区关注度集中在以下方向：

### 1. **多账号 / 身份管理**（最热）
- #36151 (👍352) Mobile 多账号切换长期未被满足，企业用户呼声持续走高。

### 2. **成本与配额透明度**（高频痛点）
- #38350、#69419、#47098、#53915 均围绕"用量莫名其妙暴涨"或"分不清是服务端还是客户端限流"。
- 用户强烈希望看到**用量明细拆解**（cache-create vs cache-read vs input vs output）。

### 3. **模型切换与一致性**
- Opus 4.7 thinking summary 丢失（#49268）
- Opus 4.8 性能低于预期（#68820、#69491）
- Web 版模型自动切换（#69494）
- → 用户希望**模型行为稳定**，避免版本间隐式行为变化。

### 4. **MCP / Plugins 生态成熟度**
- #69324 built-in design MCP 自动注入导致 401
- #56740 插件更新后 `gitCommitSha` 过期
- #26073 Windows MSIX 下 MCP 配置路径错误
- → MCP 正在成为最大扩展点，但**配置发现、错误处理、版本管理**仍粗糙。

### 5. **Auto Mode 安全语义**
- v2.1.183 的破坏性 git 拦截是起点，社区期待更细粒度策略（如允许列表、白名单路径）。

### 6. **IDE / Desktop 体验**
- 自动注入 IDE 上下文开关（#20944）
- Windows 文本选择失效（#61021）
- Desktop 启动无法直达 Code session（#54614）
- → 桌面端与 IDE 集成的"最后一公里"仍是痛点。

---

## 💬 开发者关注点总结

高频痛点按严重度排序：

1. **计费透明度与限流准确性** ⭐⭐⭐⭐⭐
   - "为什么我的周配额突然 100%？"、"明明没几条消息为什么 cache-create 这么高？" 是当下最普遍焦虑。
   - 建议关注 #38350、#69419、#47098。

2. **版本回归 (regression) 风险** ⭐⭐⭐⭐
   - v2.1.178 出现 TeamCreate/TeamDelete 消失（#68721）
   - v2.1.181 出现"No Response From API"（#69358）
   - v2.1.154+ 出现显示渲染异常（#69486）
   - → 快速迭代下稳定性成为隐忧。

3. **跨平台一致性** ⭐⭐⭐⭐
   - macOS / Windows / Linux / WSL 各有特有问题（CPU 100%、UI 卡顿、文本选择失效、`.mcp.json` 不识别等）。

4. **Agent 工作流可靠性** ⭐⭐⭐
   - "modify→test→fail→revert" 反复横跳（#69491）反映 agent 在长链路调试时仍不够鲁棒。
   - MCP 工具调用无客户端超时导致卡死（#69487）。

5. **安全机制的演进** ⭐⭐⭐
   - v2.1.183 是正向信号，但用户希望更可控（如"哪些路径允许破坏性操作"）。

6. **基础设施与自动化** ⭐⭐
   - 53 天连续失败的工作流（#69470）暴露内部 DevOps 也需要修复，间接说明 Anthropic 团队自身也依赖此仓库的自动化。

---

**📊 数据总览**：今日 50 条 issue 更新、4 条 PR 更新、1 个版本发布。社区活跃度维持高位，但**计费与稳定性**是最需官方响应的两条主线。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a daily report for OpenAI Codex community dynamics based on GitHub data. Let me analyze the data carefully:

1. **Releases**: Three alpha versions of rust-v0.142.0 (alpha.1, alpha.2, alpha.3) released in the past 24 hours
2. **Issues**: 50 issues updated, need to pick top 10 most notable
3. **PRs**: 50 PRs updated, need to pick top 10 most important

Let me analyze the most important issues:

Top issues by comments and significance:
1. **#14593** (616 comments, 271 likes) - "Burning tokens very fast" - rate limit bug, high community engagement
2. **#20161** (201 comments, 125 likes) - "Phone number verification doesn't work" - auth bug, CLOSED
3. **#2952** (34 comments, 104 likes) - Search @ cannot search from .gitignore excluded directories
4. **#25719** (33 comments, 40 likes) - Codex Desktop for macOS triggers syspolicyd/trustd CPU runaway
5. **#15777** (26 comments) - Codex sandbox installation corrupts ACL on AppData
6. **#14601** (15 comments, 43 likes) - Prevent Configuration Pollution: Separate trusted_level
7. **#25792** (10 comments) - Context compaction forgets AGENTS rules - serious long-task reliability
8. **#28988** (9 comments) - Full Access mode keeps asking for permission in 26.614.11602
9. **#28997** (6 comments) - logs_2.sqlite-wal grows without bound into tens of GB
10. **#28879** (5 comments, 4 likes) - Rate-limit cost per token jumped ~10-20x since June 16
11. **#28881** (5 comments, 3 likes) - Image generation no longer saves files (regression)
12. **#28978** (3 comments, 8 likes) - Desktop app missing field \inputSchema error
13. **#26779** (6 comments) - Codex mobile via ChatGPT remote Mac tries to run powershell.exe

For PRs, the most interesting clusters:
1. **#29025, #28936, #28683, #28674** - Remote environment connection lifecycle stack by sayan-oai (deferred_executor)
2. **#29026** - Avoid skill filesystem scans on cache hits (performance)
3. **#29035** - Optimize filesystem thread listing (performance)
4. **#29017-#29021** - MCP OAuth serialization stack by stevenlee-oai
5. **#29022** - Support protected resource OAuth discovery
6. **#29038** - Update policy wording
7. **#29006** - Preserve skill descriptions outside model context
8. **#28787** - code-mode: transport-neutral session runtime
9. **#28489** - Add indexed web search mode
10. **#28707** - abort turns when rollout budgets expire (token budget)
11. **#29030** - Respect image generation feature gate for standalone tool
12. **#29014** - Honor startup custom CA bundles with managed MITM

Let me identify feature request trends from issues:
- IDE integration (VS Code @ search, extensions)
- Performance (token burning, memory runaway, log file growth)
- New model support (gpt-5.5, gpt-5.4)
- Configuration management (trusted_level, amazon-bedrock base_url)
- Windows compatibility issues
- Rate limits and billing
- Authentication/SSO
- Context compaction reliability

Developer pain points:
- Token consumption/rate limits
- Windows-specific bugs (sandbox, ACL, app crashes)
- macOS performance issues (syspolicyd, IME)
- Configuration management
- Context compaction reliability
- Skill/plugin failures

Now let me write the report in Chinese, following the structure provided.

Let me carefully craft this report, making sure all information is accurate and well-organized. I'll provide proper GitHub links for each item.</think>

# OpenAI Codex 社区动态日报

**日期：2026-06-19**

---

## 1. 今日速览

今日 Codex 社区聚焦于**计费与配额**问题，多个高热度 Issue 持续发酵，特别是 `gpt-5.5` 在 Plus 套餐下的 token 消耗异常（[#28879](https://github.com/openai/codex/issues/28879)）以及长期存在的"Burning tokens very fast"经典工单（[#14593](https://github.com/openai/codex/issues/14593)）。同时，Rust 端连续发布了 `0.142.0-alpha.1/2/3` 三个 alpha 版本，工程团队在远程环境连接生命周期、MCP OAuth 并发序列化、技能快照性能等核心架构领域集中提交 PR，预示着 0.142 主版本正在为更稳健的多环境/多插件架构做准备。

---

## 2. 版本发布

| 版本 | 类型 | 发布时间 | 说明 |
|---|---|---|---|
| [rust-v0.142.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.1) | Pre-release | 2026-06-19 | 0.142 系列首个 alpha |
| [rust-v0.142.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.2) | Pre-release | 2026-06-19 | 快速迭代修复 |
| [rust-v0.142.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.3) | Pre-release | 2026-06-19 | 最新 alpha 构建 |

> ⚠️ 三个 alpha 在 24 小时内密集发布，节奏较快，建议关注 changelog 后再用于生产；当前 CLI 稳定版仍为 `0.140.0` / `0.141.0`。

---

## 3. 社区热点 Issues

| # | 标题 | 标签 | 评论 / 👍 | 重要性 |
|---|---|---|---|---|
| [#14593](https://github.com/openai/codex/issues/14593) | Burning tokens very fast（rate-limits） | bug, rate-limits | 616 / 271 | **最高热度工单**。Business 套餐用户在 VS Code（Windows）中 token 消耗异常，与今日 #28879 疑似同源，已存在近 3 个月，反映计费透明度长期痛点 |
| [#20161](https://github.com/openai/codex/issues/20161) | Phone number verification doesn't work | bug, auth | 201 / 125 | 多设备 SSO 登录强制手机号验证，影响企业/Plus 用户的迁移体验。已被关闭但讨论量巨大 |
| [#25792](https://github.com/openai/codex/issues/25792) | Context compaction forgets AGENTS rules（任务进度从 97% 回退到 42%） | bug, context | 10 / 0 | **严重可靠性问题**。长任务在自动上下文压缩后丢失关键指令，导致任务状态回滚，影响 Pro 用户的复杂工作流 |
| [#28879](https://github.com/openai/codex/issues/28879) | gpt-5.5 Plus 配额消耗 ~10-20× 飙升 | bug, rate-limits | 5 / 4 | 自 6 月 16 日起，`gpt-5.5` 单 token 占用预算比例突增，5 小时预算仅够 2-3 次提示，与 #14593 形成呼应 |
| [#28988](https://github.com/openai/codex/issues/28988) | Desktop Full Access 模式反复弹权限（26.614.11602） | bug, sandbox | 9 / 6 | 最新版本回归，Full Access 信任被反复询问，影响 Pro Max 用户的连续工作流 |
| [#25719](https://github.com/openai/codex/issues/25719) | macOS Desktop 触发 syspolicyd/trustd CPU 内存失控 | bug, performance | 33 / 40 | Codex Desktop 在 macOS 上反复触发系统服务风暴，影响续航和系统稳定性 |
| [#15777](https://github.com/openai/codex/issues/15777) | Sandbox 安装破坏 Windows AppData ACL | bug, windows | 26 / 2 | 严重安全问题，sandbox 安装会破坏 Windows ACL，可能引发数据访问异常 |
| [#28997](https://github.com/openai/codex/issues/28997) | logs_2.sqlite-wal 无限增长至数十 GB | bug, CLI, performance | 6 / 0 | 0.140.0 引入的日志写入缺陷，影响所有 CLI 用户，需尽快修复 |
| [#28978](https://github.com/openai/codex/issues/28978) | Desktop 26.616 报 `missing field \inputSchema` | bug, mcp, app | 3 / 8 | 26.616 自动更新后新会话直接失败，但同配置 CLI 正常，说明 Desktop app-server 集成链路存在 bug |
| [#28881](https://github.com/openai/codex/issues/28881) | 图像生成不再写入 `~/.codex/generated_images/`（回归） | bug, imagen | 5 / 3 | 26.611 版本回归，影响依赖图像生成工作流的 Pro 用户 |
| [#26779](https://github.com/openai/codex/issues/26779) | Codex 移动端远程连接 Mac 误调用 powershell.exe | bug, remote | 6 / 1 | 远程执行环境的 shell 检测缺陷，跨平台远程功能需要更严格的平台适配 |
| [#14601](https://github.com/openai/codex/issues/14601) | 隔离 `projects.trusted_level` 与 `config.toml`（防配置污染） | enhancement | 15 / 43 | 高赞功能请求，希望项目级信任级别不被全局配置覆盖，体现社区对**多项目隔离**的强烈诉求 |

---

## 4. 重要 PR 进展

### 🚀 远程环境生命周期重构（[#28674](https://github.com/openai/codex/pull/28674) → [#28683](https://github.com/openai/codex/pull/28683) → [#28936](https://github.com/openai/codex/pull/28936) → [#29025](https://github.com/openai/codex/pull/29025)）
作者：`@sayan-oai`  
四层 PR 栈，引入 `deferred_executor` feature flag，将远程环境的 exec-server 连接从注册时点解耦，支持按请求快照（snapshot）和可配置 WebSocket 超时。**为多环境/慢启动执行器铺路**，与 #25719 等性能工单方向一致。

### ⚡ 性能优化系列
- [#29026](https://github.com/openai/codex/pull/29026) `@xl-openai`：技能快照缓存命中时跳过文件系统扫描，避免每轮无谓遍历 cwd 祖先与 `.agents` 目录。
- [#29035](https://github.com/openai/codex/pull/29035) `@friel-openai`：优化 `thread/list` 的文件系统回退路径，先用 `SessionMeta` 过滤再读 rollout 摘要，避免大量子代理线程场景下的千级 IO。
- [#28707](https://github.com/openai/codex/pull/28707) `@rka-oai`：**token 预算 3/3**，基于共享账本和 `CodexErr::TurnAborted` 在 rollout 预算耗尽时终止回合，直面 #14593/#28879 类资源失控问题。

### 🔐 MCP OAuth 并发序列化栈（[#29017](https://github.com/openai/codex/pull/29017) / [#29018](https://github.com/openai/codex/pull/29018) / [#29019](https://github.com/openai/codex/pull/29019) / [#29020](https://github.com/openai/codex/pull/29020) / [#29021](https://github.com/openai/codex/pull/29021)）
作者：`@stevenlee-oai`  
五层 PR 栈，将 MCP OAuth 的 refresh / login / logout / 共享存储序列化，避免并发竞态导致密钥或刷新失败，并保留 `Auto`-mode 错误。

### 🔎 索引化 Web Search（[#28489](https://github.com/openai/codex/pull/28489)）
作者：`@winston-openai`  
新增 `web_search = "indexed"` 模式（与 `disabled`/`cached`/`live` 并列），hosted 与 standalone 走同一解析路径；hosted 模式发送 `index_gated_web_access: true`。**对合规与成本敏感的企业用户价值显著**。

### 🧩 其他关键 PR
- [#28787](https://github.com/openai/codex/pull/28787) `@cconger`：`code-mode` 引入 transport-neutral 的 `SessionRuntime`，为独立进程传输做准备，是多端架构的重要演进。
- [#29022](https://github.com/openai/codex/pull/29022) `@xl-openai`：统一受保护资源 OAuth 发现（已关闭，被后续 PR 折叠）。
- [#29006](https://github.com/openai/codex/pull/29006) `@charlesgong-openai`：技能描述在元数据层保留完整，仅在送入模型上下文时裁剪到 1024 字符，避免有效技能被误跳过。
- [#29030](https://github.com/openai/codex/pull/29030) `@rounak-openai`：独立 `image_gen.imagegen` 扩展复用统一 image generation feature gate，修复 #28881 类回归。
- [#29014](https://github.com/openai/codex/pull/29014) `@winston-openai`：修复 `SSL_CERT_FILE` 自定义 CA 与托管 MITM 的冲突，企业代理场景的可靠修复。
- [#29038](https://github.com/openai/codex/pull/29038) `@winston-openai`：澄清敏感数据移动与用户授权的策略边界，保持本地只读/任务级仓库动作。

---

## 5. 功能需求趋势

通过对 50 条 Issue 的归类，社区关注度排名如下：

| 方向 | 代表性 Issue | 热度信号 |
|---|---|---|
| **计费/配额透明度** | [#14593](https://github.com/openai/codex/issues/14593)、[#28879](https://github.com/openai/codex/issues/28879)、[#28811](https://github.com/openai/codex/issues/28811) | 🔥🔥🔥 长期、高频、跨套餐 |
| **Windows 兼容性** | [#15777](https://github.com/openai/codex/issues/15777)、[#28971](https://github.com/openai/codex/issues/28971)、[#28982](https://github.com/openai/codex/issues/28982)、[#28245](https://github.com/openai/codex/issues/28245)、[#28676](https://github.com/openai/codex/issues/28676) | 🔥🔥🔥 6 月新增多起，影响面广 |
| **多项目/多环境配置隔离** | [#14601](https://github.com/openai/codex/issues/14601)、[#28902](https://github.com/openai/codex/issues/28902)（amazon-bedrock 自定义 base_url） | 🔥🔥 工程化诉求上升 |
| **长任务与上下文可靠性** | [#25792](https://github.com/openai/codex/issues/25792)、[#28592](https://github.com/openai/codex/issues/28592)（remote compact 异常） | 🔥🔥 触发高级用户信任危机 |
| **新模型与功能支持** | gpt-5.5 计费异常、image generation 回归、Computer Use 插件 | 🔥🔥 |
| **IDE 集成（VS Code）** | [#2952](https://github.com/openai/codex/issues/2952)（@ 搜索）、[#28500](https://github.com/openai/codex/issues/28500)（@ unified mentions 导航） | 🔥 中等稳定 |
| **认证/SSO** | [#20161](https://github.com/openai/codex/issues/20161) | 🔥 偶发但破坏性大 |

---

## 6. 开发者关注点与痛点

**最痛的 5 个问题：**

1. **资源消耗失控与不透明计费**——`gpt-5.5` 单 token 配额占比跳涨 10-20×，但官方未给出明确说明，是当前最尖锐的信任问题（[#28879](https://github.com/openai/codex/issues/28879)、[#14593](https://github.com/openai/codex/issues/14593)）。

2. **Windows 是体验短板**——ACL 损坏、Bitdefender 拦截 PowerShell、原生 sandbox 找不到模块、Computer Use 插件 `@oai/sky` 子路径未导出、Windows app 闪烁。Windows 用户几乎每隔一两个版本就会遇到新问题。

3. **长任务上下文压缩的可靠性**——任务进度从 97% 回退到 42% 是不可接受的（[#25792](https://github.com/openai/codex/issues/25792)），remote compact v2 异常（[#28592](https://github.com/openai/codex/issues/28592)）让"交给 Codex 跑通宵"的信心受损。

4. **CLI 日志与本地存储爆炸**——`logs_2.sqlite-wal` 单文件可膨胀至数十 GB（[#28997](https://github.com/openai/codex/issues/28997)），缺少自我约束机制。

5. **认证/权限回归反复**——Desktop 26.614 Full Access 不再被记住（[#28988](https://github.com/openai/codex/issues/28988)）、26.616 新会话因 `inputSchema` 缺失直接失败（[#28978](https://github.com/openai/codex/issues/28978)），Desktop 与 CLI 行为不一致是开发协作的关键风险。

**值得乐观的信号：**  
PR 栈 [#28674](https://github.com/openai/codex/pull/28674) → [#29025](https://github.com/openai/codex/pull/29025) 正在系统性地重做远程环境生命周期；[#28707](https://github.com/openai/codex/pull/28707) 直接用 ledger 拦截超额回合；[#29026](https://github.com/openai/codex/pull/29026) / [#29035](https://github.com/openai/codex/pull/29035) 表明团队已意识到文件系统热路径的性能问题。0.142 系列的密集 alpha 节奏也说明核心架构在加速收敛，社区反馈正在被工程层面吸收。

---

*报告基于 2026-06-19 GitHub `openai/codex` 仓库数据生成，覆盖 50 条 Issue 与 50 条 PR 的最新更新。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>
The user wants me to generate a Chinese daily report for the Gemini CLI community based on the GitHub data provided. Let me analyze the data carefully and structure it according to the requirements.

Let me analyze the key data:

**Releases**: None in the past 24 hours.

**Issues**: 50 total updated, showing top 30 by comments. Key observations:
- Many issues are P1 priority (high priority bugs)
- Agent-related issues dominate
- Several Auto Memory system issues (26525, 26522, 26523, 26516)
- Browser agent issues (21983, 22267, 22232)
- Generalist agent hangs (#21409, 8 thumbs up - very popular)
- A nightly release failure P0 issue (#28028)
- Subagent recovery bug (#22323)
- Tool count 400 error (#24246)
- Shell command hang issue (#25166)
- MCP OAuth atomic write (#27664)
- Auto Memory bug tracking
- AST-aware tools investigation (#22745, #22746, #22747)
- Custom slash commands question (#27325)
- Component level evals (#24353)

**PRs**: 26 total updated, top 20 shown. Key observations:
- MCP OAuth tokens atomic write (#27664) - security fix, CLOSED
- Hide ignored folders from session context (#27678) - CLOSED
- Cross-platform vitest config (#27494) - CLOSED
- 'models' command to list available models (#27848) - new feature
- MCP image MIME type sniffing (#27850) - bug fix
- Folder trust prompt before auth (#27845) - new security feature
- Multiple dependabot dependency updates (closed/merged quickly)
- Pin dependencies 14-day cooldown (#27948) - CLOSED
- Nightly release fix (#28016) - CLOSED
- Jupyter Notebook/JSON corruption fix (#28000)
- Cloud Run webhook ingestion for Caretaker Agent (#28015)
- Charset decoding fix (#27996)
- Changelog for v0.48.0-preview.0 (#27999) - CLOSED
- applySubstitutions $-pattern fix (#28013)
- undici security update (#28014) - CLOSED
- P0 release failure for v0.49.0-nightly (#28028)

Now let me write a professional Chinese daily report.

Let me think about the structure:

1. **今日速览** - 2-3 sentences summarizing the most important dynamic
2. **版本发布** - Skip (no new releases)
3. **社区热点 Issues** - 10 most noteworthy
4. **重要 PR 进展** - 10 most important PRs
5. **功能需求趋势** - Common themes from issues
6. **开发者关注点** - Developer pain points

Let me draft this now.
</think>
# Gemini CLI 社区动态日报
**日期：2026-06-19**

---

## 📌 今日速览

今日 Gemini CLI 仓库活跃度持续高位，但**夜间构建出现 P0 级失败**——`v0.49.0-nightly.20260619.g93844dfa1` 发布流程异常（#28028），需重点关注。社区讨论焦点集中在 **Agent 稳定性**（subagent 挂起、状态误报）与 **Auto Memory 系统质量**两条主线上；与此同时，依赖治理（#27948 锁定 + 14 天冷却）和多个 P1 安全/兼容性修复（#27664 MCP OAuth 原子写、#27850 MCP 图片 MIME 嗅探）已陆续合入。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。`v0.48.0-preview.0` 的 changelog（#27999）已自动生成并关闭，待 `v0.49.0-nightly` 失败问题修复后发布链路可恢复。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 关注理由 |
|---|-------|--------|----------|
| 1 | [#28028](https://github.com/google-gemini/gemini-cli/issues/28028) Nightly Release Failed for v0.49.0-nightly | **P0** | 唯一 P0，nightly-release workflow 失败，阻塞预发版本链路 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 | 👍 **8** 票，开发者广泛遭遇——通用子代理长时间挂起，简单的文件夹创建也会卡死 |
| 3 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent reports GOAL success despite MAX_TURNS | P1 | 严重的**状态报告失真**问题——子代理触发最大轮次限制后仍报成功，掩盖真实中断 |
| 4 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command "Waiting input" stuck | P1 | 👍 3 票，命令行执行完成后仍卡在"等待用户输入"状态，常见但体验极差 |
| 5 | [#27325](https://github.com/google-gemini/gemini-cli/issues/27325) Antigravity CLI 自定义 slash 命令兼容性 | P3 | 👍 4 票，热度最高的**社区提问**——大量现有 custom commands 是否需要迁移到 skills |
| 6 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component level evaluations | P1 | **评估基础设施 EPIC**，已积累 76 个行为评估测试，覆盖 6 个模型版本，质量基线建设关键 |
| 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads/search/mapping | P2 | **效率优化 EPIC**，探索 AST 感知工具以减少读错、降低 token 噪声 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏 & 减少日志 | P2 | **安全/隐私**——Auto Memory 在模型上下文中已存在敏感信息后才脱敏，机制待重构 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | P2 | Auto Memory 对低价值会话持续重试，缺乏退出机制 |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent fails in wayland | P1 | Wayland 环境下 Browser Agent 失败，**Linux 桌面用户**痛点 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [#28016](https://github.com/google-gemini/gemini-cli/pull/28016) fix(ci): nightly release 包变量兜底 | ✅ CLOSED | 修复 scheduled release 在 `internal` 环境下因包名变量缺失导致 `npm publish` 失败的问题 |
| 2 | [#28024](https://github.com/google-gemini/gemini-cli/pull/28024) OpenTelemetry 2.7.1→2.8.0 | 🟢 OPEN | 维护者合入的可观测性依赖升级 |
| 3 | [#28014](https://github.com/google-gemini/gemini-cli/pull/28014) undici 7.24.5→7.28.0 | ✅ CLOSED | ⚠️ **安全升级**，含重要安全修复 |
| 4 | [#28013](https://github.com/google-gemini/gemini-cli/pull/28013) `applySubstitutions` 中 `$` 模式损坏修复 | 🟢 OPEN | 修复 JS `String.replace` 对 `$&/$1` 等替换模式的误解析，影响 skill/sub-agent 描述 |
| 5 | [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) Caretaker Cloud Run Webhook Ingestion | 🟢 OPEN | 大型特性：GitHub Webhook 接入、签名校验、Firestore 事务、Pub/Sub 发布 |
| 6 | [#28000](https://github.com/google-gemini/gemini-cli/pull/28000) `write_file` 修复 `.ipynb`/JSON 损坏 | 🟢 OPEN | **关键数据完整性**修复——Colab/JupyterLab 因 .ipynb 静默损坏而回退到 checkpoint |
| 7 | [#27996](https://github.com/google-gemini/gemini-cli/pull/27996) web-fetch 按 Content-Type charset 解码 | 🟢 OPEN | 修复 `gbk/iso-8859-1` 等非 UTF-8 页面（含大量中文/日文站点）乱码 |
| 8 | [#27948](https://github.com/google-gemini/gemini-cli/pull/27948) 锁定依赖 + 14 天更新冷却 | ✅ CLOSED | **依赖治理**：去除 `^/~` 范围，强制 14 天冷却以提升供应链稳定性 |
| 9 | [#27954](https://github.com/google-gemini/gemini-cli/pull/27954) OpenTelemetry 14 包批量升级 | ✅ CLOSED | 维护者批量升级 OpenTelemetry 生态 |
| 10 | [#27970](https://github.com/google-gemini/gemini-cli/pull/27970) hono 4.12.18→4.12.26 | ✅ CLOSED | Web 框架依赖更新 |

> 另含多枚已快速合入的 dependabot PR（vitest 3.2.6、@modelcontextprotocol/sdk 1.26.0、ws 8.21.0 等），体现项目对依赖及时维护的节奏。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中可归纳出以下几条社区最关注的方向：

1. **Agent 可靠性与状态语义** — subagent 挂起、MAX_TURNS 误报为成功、shell 假死等是当前最高频痛点，反映**多 Agent 编排的状态机仍不稳健**。
2. **Auto Memory / 持久化记忆系统** — SandyTao520 集中提交的 #26516/#26522/#26523/#26525 构成一个**记忆系统的质量追踪 EPIC**，涵盖脱敏、重试、损坏 patch 处理、隐私日志等。
3. **AST 感知的代码库工具** — #22745/#22746/#22747 系列希望引入 AST grep/tilth/glyph 等工具以提升 `codebase_investigator` 的精度和 token 效率。
4. **评估（Eval）基础设施完善** — #24353（组件级 eval）、#23166（稳定化内部评估）、#23313（steering eval）显示项目正系统化建设质量度量。
5. **Browser Agent 鲁棒性** — #21983/#22267/#22232 关注 Wayland 兼容、settings.json 覆盖、锁恢复，反映浏览器子代理仍处早期迭代。
6. **CLI 体验增强** — #27848（`gemini models` 新命令）、#27325（custom commands 迁移）、#22741（subagent 背景化）属于**面向终端用户**的能力扩展。

---

## 💬 开发者关注点

综合高赞 Issue 与 PR 反馈，开发者社区的痛点和诉求集中表现为：

- **🔴 稳定性优先于新功能**：`Generalist agent hangs`（#21409）以 8 票成为非 P0 议题中获赞最高，说明"Agent 在真实任务中频繁卡死"是当前最普遍且最影响使用意愿的问题。
- **🔴 状态可观测性不足**：subagent 报告 GOAL 成功却实际未完成任务（#22323），使开发者难以判断何时需要人工介入。
- **🟡 隐私与安全合规**：Auto Memory 在已加载到模型上下文后才脱敏（#26525），引发对企业级用户关于敏感信息泄露的担忧。
- **🟡 跨平台/生态兼容**：Wayland（#21983）、非 UTF-8 编码站点（#27996）、`.ipynb` 文件损坏（#28000）等都是**真实使用场景暴露的边界缺陷**。
- **🟢 依赖治理意识增强**：#27948 锁定依赖 + 14 天冷却规则的合入，体现项目对供应链稳定性的重视。
- **🟢 新模型/能力准入门槛低**：`gemini models` 命令 PR（#27848）反映用户希望**自助发现可用模型与配额**。

---

> 📊 **日报小结**：今日 Gemini CLI 仓库处于"质量优先"阶段——nightly 发布故障、Agent 状态机缺陷、Auto Memory 体系化改进三条主线交织，PR 侧以安全/兼容性修复和依赖治理为主，**短期关注点应放在 v0.49.0-nightly 发布链恢复**以及 **subagent 状态语义**的修复上。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>
Let me analyze the GitHub data for the Copilot CLI repository and generate a comprehensive daily report in Chinese.

Key observations from the data:

1. **No releases in the past 24 hours** - so I'll skip the release section or mention it briefly.

2. **Issues**: 36 issues updated, showing the top 30 by comment count. Let me identify the most important ones:
   - #3838 - Drive MCP OAuth not attached (7 comments) - High engagement, MCP authentication issue
   - #1974 - Markdown links not clickable (5 comments) - Long-standing bug
   - #3857 - Allow directory access dialog enhancement (2 comments) - Feature request
   - #3013 - Hooks don't fire for background agents (2 comments) - Security concern
   - #3791 - Malformed attachment poisons session (2 comments) - Session stability
   - #2896 - Programmatic Model Switching (2 comments, 1 👍) - Feature request, now closed
   - #3700 - WSL2 regression (2 comments, 2 👍) - High severity regression
   - #3296 - v1.0.46 fails on Ubuntu 20.04 (2 comments) - Installation/compatibility
   - #3518 - Unarchive session ability (2 comments, 5 👍) - Popular feature request
   - #3812 - Subagents can't access MCP tools (2 comments) - MCP regression
   - #3730 - Enterprise Custom Models support (2 comments, 4 👍) - Enterprise feature
   - #3860 - Content-exclusion over-blocks (1 comment) - High severity permissions issue
   - #3859 - Subconscious sidekick spawning (1 comment) - Memory/agents issue
   - #3582 - disabled MCP servers still loaded (1 comment) - Configuration bug
   - #3855 - Scrolling doesn't work (1 comment) - UI bug
   - #3854 - @ syntax for file reference broken (1 comment) - Input bug
   - #3839 - Ollama Cloud custom_tool_call (1 comment, 7 👍) - High 👍, model compatibility
   - #3850 - SDK mcpServers dropped (1 comment) - SDK bug
   - #3344 - Messages stranded in Queued UI (1 comment) - Agent/UI bug
   - #3861 - Docs present non-working features (0 comments) - Documentation issue
   - #3858 - Ctrl+Backspace on Windows (0 comments) - Input bug
   - #3856 - Enter in /resume picker splits session (0 comments) - Session bug
   - #3834 - @filename doesn't expand (0 comments) - Input bug
   - #3853 - /pr auto misses review threads (0 comments) - PR review bug
   - #3851 - Effort mismatch CLI vs VS Code (0 comments) - Configuration issue
   - #3845 - Ctrl+X B backgrounds sync shell, not subagent (0 comments) - Feature request

3. **PRs**: Only 1 PR updated in past 24 hours:
   - #3847 - Plan review compatibility fallback

Key themes/trends:
- MCP-related issues (authentication, loading, subagent access) - very prominent
- @ file reference expansion broken
- Session management issues (archive/unarchive, resume, poisoning)
- Subagent behavior (hooks not firing, background management)
- Platform-specific issues (WSL2, Ubuntu 20.04, Windows)
- Enterprise features (custom models)
- Model compatibility (Ollama Cloud)
- Documentation discrepancies
- UI/input bugs (scrolling, keyboard shortcuts)

Let me now write the report in Chinese, organized as requested.

For "重要 PR 进展" section, there's only 1 PR, but the user asked for 10. I'll need to note that there's only 1 active PR and focus on it, or possibly include the closed issues that are essentially PRs in spirit. Let me re-read the data... No, only 1 PR is mentioned. I'll be honest about this.

Let me structure the report now.
</think>
# GitHub Copilot CLI 社区动态日报
**日期：2026-06-19**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI 仓库无新版本发布，但社区活跃度不减，36 条 Issue 与 1 条 PR 被更新。**MCP（Model Context Protocol）相关问题成为最突出的热点**——涉及 OAuth 凭据丢失、subagent 无法访问 MCP 工具、disabled 标记失效等多类故障，几乎占据了 Top 10 反馈的一半。此外，`@` 文件引用展开功能从 1.0.3 起持续退化、Windows/WSL2 平台回归、会话状态管理混乱等老问题仍在持续发酵。

---

## 🚀 版本发布

**无新版本发布。** 社区当前主要版本为 `1.0.63`（Homebrew 分发），近期未观察到正式 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 👍 | 重要性 |
|---|-------|------|------|-----|--------|
| 1 | [#3838](https://github.com/github/copilot-cli/issues/3838) | Drive MCP OAuth 凭据未挂载，重认证后工具仍报"missing required authentication credential" | 7 | 0 | **最高互动** — MCP 鉴权链路存在系统性 bug，OAuth 浏览器流程成功但请求仍无凭据 |
| 2 | [#1974](https://github.com/github/copilot-cli/issues/1974) | 升级到 1.0.3 后生成的 Markdown 链接不可点击 | 5 | 1 | 长尾 bug，自 3 月起未修复 |
| 3 | [#3857](https://github.com/github/copilot-cli/issues/3857) | 为"Allow directory access"对话框增加"仅当前会话有效"选项 | 2 | 0 | 改善 UX 的小特性，已被关闭 |
| 4 | [#3013](https://github.com/github/copilot-cli/issues/3013) | Hooks 不对后台 task agent 触发，存在安全绕过风险 | 2 | 0 | **安全隐患** — 危险命令可通过子 agent 绕过自定义 hook 拦截 |
| 5 | [#3700](https://github.com/github/copilot-cli/issues/3700) | [High] 1.0.60 WSL2 回归：MainThread 空转 ~215% CPU，TUI 冻结 | 2 | 2 | **高严重度回归**，疑似 #2208 重新出现 |
| 6 | [#3296](https://github.com/github/copilot-cli/issues/3296) | v1.0.46 在 Ubuntu 20.04 上 MCP server 无法启动（glibc 2.33+ 依赖） | 2 | 0 | 安装兼容性问题，影响企业 LTS 用户 |
| 7 | [#3812](https://github.com/github/copilot-cli/issues/3812) | Subagent 不再能访问 MCP 工具（顶层 agent 正常） | 2 | 0 | 与 MCP 延迟加载机制相关，影响代理编排 |
| 8 | [#3730](https://github.com/github/copilot-cli/issues/3730) | 支持企业管理的自定义模型（Enterprise-Managed Custom Models） | 2 | 4 | 社区高呼声的企业功能，**4 个 👍** |
| 9 | [#3839](https://github.com/github/copilot-cli/issues/3839) | Ollama Cloud 不支持 Copilot CLI 使用的 `custom_tool_call` payload | 1 | **7** | **👍 数最高** — BYOK 用户在 Ollama Cloud 上完全无法使用工具调用 |
| 10 | [#3518](https://github.com/github/copilot-cli/issues/3518) | 支持解档/恢复已归档的项目会话 | 2 | **5** | **👍 数第二** — 误操作导致重要会话丢失，需求迫切 |

**社区反应观察**：MCP 相关 Issue 占据 4 席（#3838、#3296、#3812、#3850、#3859 间接相关），反映出 **MCP 已成为 Copilot CLI 扩展生态的事实标准，但稳定性问题集中爆发**。👍 数最高的两条（#3839、#3518）均反映用户的"被卡住"痛点——一个卡在模型兼容，一个卡在数据丢失。

---

## 🛠️ 重要 PR 进展

过去 24 小时**仅 1 条 PR** 被更新：

**[#3847 — Plan review: add compatibility fallback design + test vectors](https://github.com/github/copilot-cli/pull/3847)**
作者：@nguyenhoangduc0707-lang
为严格的 OpenAI 兼容后端（不提供 `function_call` / tool metadata）增加了 plan review 菜单的**兼容性回退设计**。该 PR 采用 JSON 优先解析策略，并辅以 YAML、有序/无序列表启发式作为兜底，同时附带测试向量。
👉 价值：让 Copilot CLI 在更广泛的自托管/企业模型后端上仍可使用交互式计划审阅。

> *注：今日 PR 数量极少，提交活跃度偏低，可能与 1.0.63 后开发周期处于内部重构阶段有关。*

---

## 📈 功能需求趋势

从 36 条 Issue 中提炼出的**社区最关注方向**：

### 1. 🤖 MCP 生态稳定性（最热）
- 鉴权链路（#3838、#3850）
- 加载机制（#3812、#3582、#3296）
- 与 subagent 的集成（#3859）
- 文档与实际行为不一致（#3861）

### 2. 🔄 会话与上下文管理
- 归档会话的恢复（#3518 👍5）
- 附件毒化会话（#3791）
- `/resume` 选择器状态错乱（#3856）
- `Queued (N)` 消息滞留（#3344）

### 3. 🎛️ 模型与算力控制
- 自动/编程式模型切换（#2896）
- 企业自定义模型（#3730 👍4）
- `effort` 在 CLI 与 VS Code 间不同步（#3851）
- BYOK/Ollama 兼容性（#3839 👍7）

### 4. 🪟 跨平台与终端体验
- WSL2 性能回归（#3700）
- Ubuntu 20.04 glibc 不兼容（#3296）
- Windows Ctrl+Backspace 失效（#3858）
- 滚动条与 TUI 渲染（#3855）

### 5. 🔌 插件与扩展
- 插件包含 instruction files（#2727）
- 本地插件锁文件安装（#3136）
- SDK/Server 模式 MCP 传递（#3850）

### 6. 🛡️ 权限与安全
- Hooks 不覆盖后台 agent（#3013）
- content-exclusion 过度阻塞（#3860）
- 沙箱文档与实际不符（#3861）

---

## 💬 开发者关注点（痛点 & 高频需求）

**1. MCP 是一把双刃剑**  
MCP 让 Copilot CLI 能对接 Drive、Slack、数据库等外部服务，但实际使用中频繁出现"看起来连接成功，工具调用却失败"的灰色地带（#3838、#3850）。开发者呼吁 CLI 应**明确报告 MCP 工具的就绪状态**，而不是让用户反复重试 OAuth。

**2. 升级即回退**  
`@` 文件引用展开（#3834、#3854、#1974）、Markdown 链接可点击性（#1974）、scrolling 行为（#3855）均在升级后失效，开发者反馈**版本升级更像在开盲盒**，缺乏明确的 migration / behavior change 说明。

**3. 误操作无后悔药**  
归档项目会话（#3518）、`Queued` 区域消息滞留（#3344）暴露出**破坏性操作缺少软删除/回滚机制**。对将 CLI 用作长期编排器的用户而言，一次手滑就可能丢失数小时的上下文。

**4. Subagent 边界模糊**  
Hooks 不覆盖后台 agent（#3013）、`Ctrl+X B` 只能后台同步 shell（#3845）、subagent 无法用 MCP 工具（#3812）——开发者正在用 subagent 模拟 Claude Code 的 `Ctrl+B` 工作流，但发现 **Copilot CLI 的 subagent 仍处于"半成品"状态**。

**5. 跨平台分裂**  
WSL2 CPU 飙高（#3700）、Ubuntu 20.04 glibc（#3296）、Windows 键位（#3858）说明**每个平台都有自己专属的痛点**，且没有统一的 bug 看板可追踪。

**6. 企业/BYOK 体验割裂**  
企业自定义模型（#3730）、Ollama Cloud（#3839）、effort 不同步（#3851）反映出**非默认模型路径仍存在大量兼容问题**，是企业落地的最大阻碍。

---

> 📊 **数据快照**：36 条更新 Issue / 16 OPEN / 14 CLOSED / 1 条 PR / 0 个 Release
> 🕐 **报告时间窗口**：2026-06-18 ~ 2026-06-19

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a daily report for Kimi Code CLI community dynamics based on GitHub data. Let me analyze the data carefully.

Looking at the data:
- No new releases in the past 24 hours
- 3 issues updated in the past 24 hours:
  - #2455 [OPEN] - Bug about FetchURL not reading system proxy
  - #2462 [OPEN] - Bug about Windows + Git Bash VS Code extension failing
  - #2460 [CLOSED] - Feedback about onboarding being hard
- 1 PR updated:
  - #2461 [OPEN] - Fix for system proxy env vars

The instructions ask for "挑选 10 个最值得关注的 Issue" and "挑选 10 个重要的 PR", but we only have 3 issues and 1 PR total. I should note this in the report and present what we have rather than fabricating content. I'll be honest about the limited activity.

Let me write a professional, concise Chinese report that:
1. Summarizes the day's highlights
2. Notes no releases
3. Covers the issues we have (3 only, not 10)
4. Covers the PR we have (1 only, not 10)
5. Analyzes feature needs from these issues
6. Summarizes developer concerns

I should be honest that the data only contains 3 issues and 1 PR, so I can't pick 10 of each. I'll present what's available.

Let me draft the report now.</think>

# Kimi Code CLI 社区动态日报

**日期**：2026-06-19  
**数据来源**：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日仓库活跃度较低，24 小时内 **无新版本发布**，社区更新集中在 **网络代理兼容性修复** 与 **Windows 平台安装兼容性** 两条主线：开发者 `@logicwu0` 已提交 PR #2461 修复 `FetchURL` 忽略系统代理环境变量的问题（对应 Issue #2455），与此同时 Windows + Git Bash 环境下 VS Code 扩展解压失败（#2462）被首次报告；另外一条关于 MCP/插件/子技能 onboarding 体验的反馈（#2460）当日即被关闭，预计已有后续处理动作。

---

## 2. 版本发布

⚠️ **无新版本发布**。最近一次发版情况未在本次数据中体现，建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 3. 社区热点 Issues

> 说明：今日 24 小时内仅有 **3 条** Issue 更新（不足 10 条），以下为全部条目，按社区关注度排序。

### 🔥 #2455 — FetchURL 未读取系统代理，被墙环境下无法访问外网  
- **状态**：OPEN | 👍 0 | 💬 2  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2455  
- **为什么重要**：影响所有身处网络受限环境（公司代理 / 跨境 / 防火墙）的开发者。`curl` 正常而 `FetchURL`/`WebSearch` 失败，意味着内置 HTTP 客户端绕过了 `HTTP_PROXY`/`HTTPS_PROXY` 环境变量。该问题已锁定 root cause 并被 PR #2461 修复，**预计下个版本合入**。
- **社区反应**：2 条讨论，处于早期阶段。

### 🐛 #2462 — Windows + Git Bash：VS Code 扩展无法解压捆绑 CLI（tar 不支持 zip）  
- **状态**：OPEN | 👍 0 | 💬 0  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2462  
- **为什么重要**：直接影响 Windows 用户首次安装体验。VS Code 扩展捆绑的 CLI 打包为 zip，但 MSYS2/Git Bash 自带的 `tar` 无法解压 zip 格式，会导致安装直接失败。属于**首次使用即阻断**的硬性 bug，优先级较高。
- **社区反应**：新报告，尚无评论。

### 💬 #2460 — Feedback：MCP 服务器 / 插件 / 子技能的配置 onboarding 过于复杂  
- **状态**：CLOSED | 👍 0 | 💬 0  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2460  
- **为什么重要**：用户 `@PowerBeef` 报告"功能很好用，但配置门槛高"——这是 Kimi Code CLI 走向更广泛开发者群体的关键摩擦点。该 Issue 当日被关闭，**可能已有内部处理 / 重复 issue 合并**。
- **社区反应**：纯反馈帖，无讨论即关闭，建议跟进是否有相关 PR 或文档改进。

---

## 4. 重要 PR 进展

> 说明：今日 24 小时内仅有 **1 条** PR 更新，以下为唯一条目。

### ✅ #2461 — fix(net): honour system proxy env vars in aiohttp sessions  
- **状态**：OPEN | 👍 0  
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2461  
- **修复内容**：所有出站 HTTP 请求通过 `aiohttp` 发起时，将尊重 `HTTP_PROXY` / `HTTPS_PROXY` / `NO_PROXY` 等环境变量，修复 Behind-a-proxy 场景下 `FetchURL` 与 `WebSearch` 失败的 bug。**直接 Fixes #2455**。  
- **影响面**：所有使用代理网络环境的开发者的网络功能可用性，属于关键稳定性修复，建议 Maintainer 优先 review。

---

## 5. 功能需求趋势

虽然今日 Issue 数量有限，但从内容可归纳出三个清晰的社区诉求方向：

| 方向 | 代表 Issue | 社区诉求 |
|---|---|---|
| 🌐 **企业/受限网络兼容性** | #2455 | 支持系统代理环境变量，应对代理、防火墙、被墙等真实部署环境 |
| 🪟 **跨平台安装体验** | #2462 | Windows + Git Bash / WSL 等组合环境的安装与依赖处理需更稳健 |
| ⚙️ **扩展机制可发现性** | #2460 | MCP server、插件、sub-skill 的 onboarding 流程需要更直观的引导和文档 |

**趋势小结**：网络兼容性和跨平台安装是基础设施级痛点，而扩展配置体验则反映了 Kimi Code CLI 正从"能用"向"易用"过渡。

---

## 6. 开发者关注点

综合今日社区反馈，开发者主要聚焦以下三类问题：

1. **网络代理透明化**：开发者期望 CLI 工具"开箱即用"地复用系统代理配置，而无需额外配置内置 HTTP 客户端。这与 `curl` 等 Unix 工具的默认行为一致，是合理预期。
2. **平台兼容性盲区**：Windows + Git Bash 这一**主流开发者组合**首次安装失败，说明 CI/CD 与发布前的平台测试覆盖尚有缺口。
3. **扩展机制学习曲线**：当用户需要叠加 MCP server + 插件 + 自定义 skill 时，缺乏一致的 onboarding 流程与文档指引，影响"配置一次后长期使用"的体验预期。

---

> 📌 **日报说明**：本日报基于过去 24 小时窗口的 GitHub 公开数据生成；当日活跃度较低（3 Issues + 1 PR），后续版本发布或新 Issue 涌入时可结合历史数据形成对比分析。建议关注 PR #2461 的合并进度，以及 Issue #2462 是否在下个版本得到修复。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>
The user wants me to generate a Chinese daily report for the OpenCode community based on GitHub data from 2026-06-19. Let me analyze the data and create a structured report.

Key observations from the data:
1. No releases in the past 24 hours
2. Multiple high-engagement issues, with #27167 (session goals) being most popular (88 likes, 51 comments)
3. MCP-related work is very active - #28567 (full MCP client) and related PRs #32480, #32936
4. Multiple inotify/watch-related bugs being fixed
5. Session goals feature being actively developed with two competing PRs (#32924 and #32743)
6. AI SDK 6 migration (#32933)
7. Various platform-specific issues (Alpine Linux TUI, Windows updates, etc.)
8. Performance diagnostics PR (#32937)
9. Vietnamese locale (#30102)
10. Noumena provider addition (#32916)

Let me structure the report according to the requested format.
</think>
# OpenCode 社区动态日报
**日期：2026-06-19**

---

## 📌 今日速览

今日 OpenCode 社区热度集中在三大方向：**MCP 协议能力补齐**（资源订阅、进度通知陆续落地）、**会话级目标管理 /goal**（双 PR 同步推进，核心 Issue 评论突破 50 条）以及**底层稳定性修复**（inotify 耗尽、Alpine musl 兼容性、Windows 自更新）。无新版本发布，提交节奏以功能 PR 和 Bug 修复为主。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 💬 | 👍 | 关注理由 |
|---|------|------|-----|-----|----------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **Add native session goals with /goal** | OPEN | 51 | 88 | 当日最热 Issue。提议加入持久化的会话级目标/生命周期管理，社区反响强烈，已有两条实现 PR 跟进（#32743、#32924），标志着 OpenCode 向"自主 Agent 框架"演进。 |
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | **TUI fails on Alpine Linux (musl) in 1.14.50** | OPEN | 35 | 12 | 严重回归：1.14.50 在 musl libc 系统上因缺失 `getcontext` 符号无法启动 TUI。影响 Alpine/容器化部署用户，已定位到 OpenTUI 渲染库。 |
| [#14289](https://github.com/anomalyco/opencode/issues/14289) | **model "claude-opus-4.6" not supported for vision** | CLOSED | 19 | 5 | Claude Opus 4.6 视觉能力支持问题，模型兼容性的典型痛点。 |
| [#28567](https://github.com/anomalyco/opencode/issues/28567) | **Full MCP client capabilities** | OPEN | 17 | 24 | 社区要求对齐最新 MCP 规范，资源订阅、进度通知等能力持续推进中，关联 PR #32480、#32936。 |
| [#450](https://github.com/anomalyco/opencode/issues/450) | **Support for reasoning_effort parameter in UI** | CLOSED | 14 | 26 | 呼声较高的"推理强度"参数 UI 化需求，影响 OpenAI/Gemini/DeepSeek 等多模型使用体验。 |
| [#16610](https://github.com/anomalyco/opencode/issues/16610) | **Opencode hangs at startup if .git repo and inotify instances run out** | OPEN | 12 | 7 | 启动挂起的经典痛点，已有两个修复 PR（#32854、#32930）从不同角度处理。 |
| [#25630](https://github.com/anomalyco/opencode/issues/25630) | **Regression: plugin provider.models() hook no longer populates custom providers** | OPEN | 12 | 3 | v1.14.x 引入的回归，影响插件用户自定义 provider 能力。 |
| [#5391](https://github.com/anomalyco/opencode/issues/5391) | **multiple auth profiles per provider** | OPEN | 11 | 31 | 高赞功能需求：同一 provider 多套认证配置（个人/工作、轮换、密钥优先级）。 |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) | **opencode could automatically use different models based on task type** | OPEN | 9 | 37 | 任务感知的智能模型路由，对标 Claude Code 等竞品能力，点赞数极高。 |
| [#32704](https://github.com/anomalyco/opencode/issues/32704) | **Bash tool description references Edit/Write even when those tools are unavailable** | OPEN | 4 | 0 | 工具提示一致性问题，暴露当前工具描述逻辑与权限/可用性配置未完全解耦。 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#32743](https://github.com/anomalyco/opencode/pull/32743) | **feat(session): native per-session goals with /goal and autonomous pursuit** | Feature | 关闭 #27167 和 #29445。引入持久化会话目标（active/paused/completed 状态机）、自动推进逻辑，是会话级目标功能的完整实现。 |
| [#32924](https://github.com/anomalyco/opencode/pull/32924) | **feat: add native /goal foundation** | Feature | 与 #32743 互补的"基础版"实现（草稿），提供工作区级目标状态机与持久化；两条 PR 存在一定设计竞争，社区正在评估。 |
| [#32936](https://github.com/anomalyco/opencode/pull/32936) | **feat(mcp): support resource subscriptions** | Feature | 引用 #28567，在已读资源且 server 声明 `subscribe: true` 时启用订阅，叠加在 #32478 之上，逐步补齐 MCP 规范。 |
| [#32480](https://github.com/anomalyco/opencode/pull/32480) | **feat(mcp): surface tool progress** | Feature | 引用 #28567，将 MCP 进度通知接入 OpenCode 既有的工具运行进度展示层。 |
| [#32933](https://github.com/anomalyco/opencode/pull/32933) | **chore: AI SDK 6 migration, flag cleanup, and code hygiene** | Refactor | 关闭 #32763。完成 AI SDK 6 schema 迁移（`.nullish()` → `.optional()`）、过期 flag 清理、copilot provider 兼容性修复。 |
| [#32938](https://github.com/anomalyco/opencode/pull/32938) | **feat(provider): support bearer auth for google-vertex-anthropic** | Feature | 关闭 #14175。`google-vertex-anthropic` 现支持通过 `VERTEX_ANTHROPIC_TOKEN` 环境变量或 auth flow 使用 Bearer Token，绕过 google-auth-library。 |
| [#32930](https://github.com/anomalyco/opencode/pull/32930) | **fix(core): prevent hang when inotify watches are exhausted** | Bug fix | 关闭 #16610。`.git` 监听从全树订阅改为针对 refs/HEAD 等关键路径，避免在大仓库下耗尽 inotify 句柄。 |
| [#32935](https://github.com/anomalyco/opencode/pull/32935) | **fix(snapshot): handle git subdirectory launches** | Bug fix | 关闭 #27688。修复从 git 子目录启动时的 snapshot 路径处理。 |
| [#32937](https://github.com/anomalyco/opencode/pull/32937) | **test(app): add manual performance diagnostics** | Test | 新增可选 Playwright 性能套件（默认不跑，需 `OPENCODE_PERFORMANCE=1`），覆盖会话切换、缓存重绘、流式输出时间线。 |
| [#30102](https://github.com/anomalyco/opencode/pull/30102) | **feat(i18n): add Vietnam (vi) locale support** | Feature | 新增越南语本地化（app/console/desktop 全套翻译包）。 |

---

## 📈 功能需求趋势

通过聚合过去 24 小时内活跃的 Issue，社区关注度按主题可归纳为：

1. **🤖 Agent 自主性 & 会话生命周期** — `/goal` 会话级目标（#27167）、任务感知的智能模型路由（#8456）、BSD 平台支持（#3476），反映出从"工具调用"向"自主 Agent 框架"演进的强烈诉求。
2. **🔌 MCP 生态对齐** — 完整 MCP 客户端能力（#28567）、MCP `object` 参数序列化（#28472）、Go 订阅价格透明度（#32116），MCP 已成为 OpenCode 扩展生态的核心通道。
3. **🧠 模型兼容 & 路由** — Claude Opus 4.6 视觉支持（#14289）、reasoning_effort UI（#450）、DeepSeek API 计费异常（#32911），反映多模型策略下的兼容性与成本控制痛点。
4. **🪟 跨平台稳定性** — Alpine/musl TUI 启动失败（#27589）、Windows 自更新破坏 exe（#28072）、Desktop 更新后插件 Agent 丢失（#30855），跨平台发布质量仍是高频痛点。
5. **🔐 鉴权 & 多账户** — 同 provider 多 auth profile（#5391，31 赞）、Vertex Anthropic bearer token（#14175），企业场景下的多环境密钥管理需求显著。
6. **🖥️ IDE / 编辑器集成** — Zed ACP Agent 不显示命令（#29924）、TUI 多文件 diff 审批（#17076），编辑器侧深度集成仍有缺口。

---

## 🧑‍💻 开发者关注点

从高互动 Issue 和合并/关闭节奏中，可归纳出开发者当前最集中的几个痛点：

- **启动稳定性**：inotify 句柄耗尽（#16610）、musl 兼容性（#27589）、Desktop 自更新后插件丢失（#30855）—— 三个问题集中在"首次使用即崩"，是新手流失的最大风险点。
- **多模型计费与路由**：`bash` 工具描述硬编码 Edit/Write（#32704）、DeepSeek API 异常计费（#32911）—— 提示系统/工具描述与实际暴露能力未解耦，计费透明度不足。
- **MCP 落地质量**：`object` 类型参数被错误序列化为 JSON 字符串（#28472）—— 反映 MCP 集成在数据序列化层仍有 bug，影响第三方工具可用性。
- **DX 痛点**：`@` 文件提及不包含启动后新建文件（#32747、#32915）、文件索引不刷新 —— 索引/搜索状态在 TUI 与 Desktop 间未打通。
- **平台支持广度**：BSD（#3476）、Linux 发行版（Alpine）、越南语本地化（#30102）—— 社区主动承担长尾平台的兼容性和本地化工作。

> **整体观察**：今日 PR 提交密度高、单 PR 规模克制（多数为单点修复或单功能），体现了项目在 1.14–1.16 之间的"修缮期"特征。最大潜在突破是 `/goal` 会话级目标体系，若两条 PR 合并路径明确，将是 OpenCode 继 Plugin/MCP 之后的第三个重要架构扩展。

---

*数据来源：github.com/anomalyco/opencode · 报告生成时间 2026-06-19*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for Qwen Code to generate a comprehensive daily report for 2026-06-19.

Looking at the data:
- No releases in past 24 hours
- 50 issues updated, top 30 shown with most comments
- 50 PRs updated, top 20 shown

Key observations:

**Issues with high engagement:**
1. #4479 - Token usage statistics (16 comments) - most discussed
2. #4987 - PR silent revert (5 comments)
3. #5385 - ACP session cancel tests (4 comments) - P1
4. #5261 - No collapsible thinking block (4 comments)
5. #5007 - ACP mode skills not exposed (3 comments) - OPEN
6. #5390 - web_fetch uppercase URLs (3 comments)
7. #5379 - MCP callable fallback (3 comments)
8. #5365 - FileTokenStorage (3 comments)
9. #5147 - OOM after /quit (3 comments)
10. #5201 - QQ Bot channel adapter (3 comments)
11. #5348 - cron parser malformed fields (3 comments)
12. #5339 - GIF images fallback (3 comments)

**PRs:**
1. #5389 - validate grep result limits
2. #4746 - preserve trustedFolders comments
3. #5377 - preserve equals in mcp env values
4. #5392 - serve Web Shell UI from qwen serve
5. #5372 - parse grep results with colon paths
6. #5126 - vision-bridge for text-only models
7. #5388 - parse sandbox mounts with windows drives
8. #5382 - avoid reconnecting on MCP tool errors
9. #5391 - accept uppercase web fetch schemes
10. #5364 - avoid glob prefix cache reuse
11. #5060 - Add TrustedRouter provider preset
12. #5330 - SSE stream idle watchdog
13. #5318 - --no-ask-password to systemd-inhibit
14. #5145 - show follow-up suggestion in placeholder

Notable patterns:
- Many PRs from @tt-a1i addressing ACP session, MCP, grep, sandbox issues
- Heavy focus on Windows compatibility issues
- Security-related fixes (sandbox, paths, tilde expansion)
- ACP (Agent Control Protocol) integration is a major theme
- Performance issues (OOM, glob cache)
- Cross-platform concerns

Let me write the report in Chinese with a professional tone.</think>

# Qwen Code 社区动态日报
**2026-06-19**

---

## 📌 今日速览

今日 Qwen Code 仓库虽无新版本发布，但社区异常活跃——过去 24 小时内共产生 50 条 Issue 和 50 条 PR 更新，呈现明显的"集中整改"特征。开发者 @tt-a1i 单日提交了 15+ 个针对 ACP 会话、MCP 工具链、Grep/RipGrep 搜索、沙箱路径校验等模块的修复 PR，显示团队正对一批近期反馈集中的稳定性与跨平台问题做系统性清理。Windows 兼容性、安全沙箱边界、ACP 协议实现是今日最受关注的三条主线。

---

## 🚀 版本发布

*过去 24 小时无新版本发布。上一版本为 `v0.18.2`，引入可折叠 thinking block（已引发 UI 可见性反馈，见 #5261）。*

---

## 🔥 社区热点 Issues

### 1. [#4479](https://github.com/QwenLM/qwen-code/issues/4479) — 每日 Token 用量统计功能请求
- **重要性**: ⭐⭐⭐⭐⭐ 今日评论数最高（16 条），反映用户对成本透明度的强烈诉求
- **核心诉求**: 用户希望直观查看每日 Token 消耗量（已有用户单次使用即消耗 3000 万 Token）
- **社区反应**: 标签含 `welcome-pr`，明确欢迎社区贡献实现

### 2. [#4987](https://github.com/QwenLM/qwen-code/issues/4987) — PR #4779 静默回滚了已合并功能
- **重要性**: ⭐⭐⭐⭐⭐ 涉及协作流程规范，P2 但社区反响强烈
- **核心问题**: PR 在合并时回滚了 PR #4652 的功能但未说明，破坏贡献者信任

### 3. [#5385](https://github.com/QwenLM/qwen-code/issues/5385) — ACP 会话取消测试引用旧标志位（P1）
- **重要性**: ⭐⭐⭐⭐⭐ P1 高优先级，阻塞 CLI 完整构建
- **核心问题**: 字段重命名 `stopAfterUserQuestionCancel` → `stopAfterPermissionCancel` 后，3 个测试未同步更新，CI typecheck 失败

### 4. [#5261](https://github.com/QwenLM/qwen-code/issues/5261) — v0.18.2 后 thinking block 无法查看内容
- **重要性**: ⭐⭐⭐⭐ UX 回归问题，影响模型可解释性
- **核心问题**: 可折叠 thinking block 功能发布后，用户只能看到 "Thought for 1s" 但无法展开查看推理过程，也无快捷键

### 5. [#5007](https://github.com/QwenLM/qwen-code/issues/5007) — ACP 模式不暴露 ~/.qwen/skills 中的技能
- **重要性**: ⭐⭐⭐⭐ 影响 IDE 集成（如 Zed）的核心使用场景，OPEN 状态
- **核心问题**: 通过 ACP 模式启动时 `/skills` 命令无返回，CLI 直接运行则正常

### 6. [#5147](https://github.com/QwenLM/qwen-code/issues/5147) — `/quit` 后 managed auto-memory 触发 OOM
- **重要性**: ⭐⭐⭐⭐ 影响稳定性，与先前 #4644/#4717 修复不同路径
- **核心问题**: 短会话退出后 V8 报 `JavaScript heap out of memory`，根因疑似后台 auto-memory 任务从大文本历史构建 transcript

### 7. [#5201](https://github.com/QwenLM/qwen-code/issues/5201) — QQ Bot 渠道适配器功能请求
- **重要性**: ⭐⭐⭐ 生态拓展请求，PR 已就绪
- **核心诉求**: 新增官方 QQ 机器人渠道适配器，与现有 telegram/weixin/dingtalk/feishu 并列

### 8. [#5390](https://github.com/QwenLM/qwen-code/issues/5390) — `web_fetch` 拒绝大写 HTTP URL scheme
- **重要性**: ⭐⭐⭐ 标准合规问题
- **核心问题**: 使用 `startsWith("http://")` 严格匹配，违反 RFC 3986（scheme 应大小写不敏感）

### 9. [#5373](https://github.com/QwenLM/qwen-code/issues/5373) — 沙箱路径校验把同级目录误判为工作区路径
- **重要性**: ⭐⭐⭐⭐ P2 安全问题
- **核心问题**: `path.startsWith(workdir)` 会匹配共享前缀的兄弟目录（如 `/repo/app` 和 `/repo/app-build`）

### 10. [#5376](https://github.com/QwenLM/qwen-code/issues/5376) — 搜索工具权限检查不展开 `~` 路径
- **重要性**: ⭐⭐⭐⭐ P1 安全问题，可绕过权限边界
- **核心问题**: 权限检查用 `path.resolve()` 但执行时用 `resolveAndValidatePath()`（会展开 `~`），导致 `~/secret` 能绕过检查

---

## 🛠️ 重要 PR 进展

### 1. [#5392](https://github.com/QwenLM/qwen-code/pull/5392) — `qwen serve` 直接托管 Web Shell UI
- **作者**: @wenshao
- **亮点**: 一个二进制同时提供 daemon HTTP/SSE API 和浏览器版 Web Shell SPA，单进程单端口，零额外配置

### 2. [#5126](https://github.com/QwenLM/qwen-code/pull/5126) — Vision Bridge：图片转文本供纯文本模型使用
- **作者**: @yiliang114
- **亮点**: 为纯文本主模型添加可选"视觉桥接"，自动调用多模态模型将图片转录为文本后传入，默认关闭

### 3. [#5330](https://github.com/QwenLM/qwen-code/pull/5330) — SSE 流空闲看门狗（修复 #4177）
- **作者**: @aspnmy
- **亮点**: 弱网场景下检测 SSE 静默断流并中止，避免用户面对卡死旋转图标只能 Ctrl+C 重启

### 4. [#5389](https://github.com/QwenLM/qwen-code/pull/5389) — Grep 工具 limit 参数校验
- **作者**: @tt-a1i
- **亮点**: 强制 `limit` 必须为正整数，杜绝 `0`/`-1`/`1.5` 等异常值造成结果截断

### 5. [#5372](https://github.com/QwenLM/qwen-code/pull/5372) — Grep 解析支持含冒号的文件路径
- **作者**: @tt-a1i
- **亮点**: 改用 NUL 分隔输出（`git grep -z -n`、`grep --null`）避免误解析，保持向后兼容

### 6. [#5388](https://github.com/QwenLM/qwen-code/pull/5388) — 沙箱挂载解析支持 Windows 盘符
- **作者**: @tt-a1i
- **亮点**: `SANDBOX_MOUNTS` 中 `C:\Users\me:/workspace:ro` 的盘符冒号不再被误识别为字段分隔符

### 7. [#5375](https://github.com/QwenLM/qwen-code/pull/5375) — 沙箱路径校验改为段边界匹配
- **作者**: @tt-a1i
- **亮点**: 替换脆弱的字符串前缀检查，使用归一化路径段匹配，杜绝兄弟目录绕过

### 8. [#5378](https://github.com/QwenLM/qwen-code/pull/5378) — 搜索工具权限检查前展开 `~` 路径
- **作者**: @tt-a1i
- **亮点**: 与执行时使用相同的 tilde 感知解析器，杜绝权限绕过

### 9. [#5380](https://github.com/QwenLM/qwen-code/pull/5380) — 正确识别 MCP callable 顶层 `isError`
- **作者**: @tt-a1i
- **亮点**: 修复 MCP 工具错误结果被当作成功的潜在问题

### 10. [#5145](https://github.com/QwenLM/qwen-code/pull/5145) — 在输入框占位符显示后续建议
- **作者**: @MikeWang0316tw
- **亮点**: 模型回复后立即在输入区显示建议的后续提示词，使用 fast 模型生成，降低响应延迟

---

## 📈 功能需求趋势

从今日 Issue 池中提炼出五大社区关注方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **成本透明 & 用量统计** | #4479 | 🔥 高 |
| **IDE / 协议层集成** | #5007、#5392 | 🔥 高 |
| **跨平台一致性（Windows 优先）** | #5386、#5244、#5388 | 🔥 高 |
| **UX 增强** | #5261、#5366 | 中 |
| **生态渠道拓展** | #5201（QQ Bot） | 中 |

---

## 👨‍💻 开发者关注点

### 🔴 安全与权限边界
今日最值得警惕的趋势是**多起安全相关 Issue 集中在沙箱与权限校验层**：
- 沙箱路径前缀匹配可被兄弟目录绕过（#5373）
- `~` 路径在权限检查时未展开导致可访问家目录（#5376）
- 不可信工作区状态被错误地转换为 boolean（#5368）
- Web 抓取 URL scheme 大小写严格匹配（#5390）

开发者社区对**纵深防御与平台无关的安全语义**需求强烈。

### 🟡 ACP 协议稳定性
`stopAfterPermissionCancel` 字段重命名连带引发 #5385/#5383 编译失败，反映**协议层重构缺乏兼容期**，建议引入 deprecation alias。

### 🟢 性能与内存管理
OOM 问题（#5147）与 glob prefix cache 误用（#5364）显示**大上下文场景下的资源管理仍是痛点**，managed auto-memory 路径需重点关注。

### 🔵 协作流程
#4987 揭示的"无说明静默回滚"问题触及开源治理信任基础，建议维护者在 revert PR 时强制要求说明关联 Issue。

---

*日报由 GitHub 数据自动生成，覆盖时间窗口：2026-06-18 ~ 2026-06-19。*

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# OpenClaw 生态日报 2026-08-22

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-08-22 01:34 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [OpenHuman](https://github.com/tinyhumansai/openhuman)

---

## OpenClaw 项目深度报告

<think>Let me analyze the GitHub data for OpenClaw from 2026-08-22 and create a comprehensive daily report.

Key observations from the data:
1. Activity: 500 issues updated (487 new/active, 13 closed), 500 PRs updated (386 pending, 114 merged/closed)
2. No new releases
3. Major themes:
   - Gateway memory leak (P0 critical)
   - SQLite corruption issues on beta.2
   - Codex integration problems (multiple issues)
   - OAuth/Auth provider issues
   - Channel-specific bugs (Telegram, Discord, Feishu)
   - Event loop blocking issues

Let me structure the report:

1. **今日速览** - High activity but no releases. Many P0/P1 critical bugs open. Project health concerning.

2. **版本发布** - None, skip

3. **项目进展** - Look at merged/closed PRs. Several important ones:
   - #127727 - remove test-only route bypass
   - #120900 - install policy warnings review
   - #125471 - Claude CLI OAuth fix
   - #116489 - install policy warnings acknowledgement
   - #126424 - keep conversation delivery within agent bindings
   - #127735 - telegram inline callback action values
   - Many more...

4. **社区热点** - Top issues by comments:
   - #91588 (23 comments) - Gateway memory leak
   - #91009 (22 comments) - Codex PreToolUse CPU issue
   - #87744 (18 comments) - Codex Telegram timeouts
   - #125626 (18 comments) - Release validation v2026.8.1-beta.2
   - #68596 (16 comments) - Streaming watchdog timeout

5. **Bug 与稳定性** - Multiple critical bugs:
   - P0: #91588 (memory leak), #124788 (event loop blocks), #126821 (SQLite corruption)
   - P1: Many related to Codex, OAuth, etc.

6. **功能请求** - Slack modal, multiple Azure bots, skill priority, LaTeX support, etc.

7. **用户反馈** - Real pain points

8. **待处理积压** - Many P0/P1 issues waiting for fix

Let me write this in Chinese as requested.</think>

# OpenClaw 项目日报 · 2026-08-22

> 数据来源：github.com/openclaw/openclaw  
> 报告日期：2026-08-22  
> 统计窗口：过去 24 小时

---

## 一、今日速览

OpenClaw 今日维持**极高活跃度但零版本发布**的状态：24 小时内触发 500 条 Issue 更新（新开/活跃 487、仅关闭 13）与 500 条 PR 更新（待合并 386、合并/关闭 114），但没有新 Release 落地。项目当前处于 **v2026.8.1-beta.2 收尾与 v2026.8.1 候选验证**的关键节点，多个 P0 级稳定性缺陷（Gateway 内存泄漏、beta.2 事件循环阻塞、SQLite 指针页损坏）持续压在主干上尚未根治，社区反复出现"已升级到 beta.2 反而更糟"的回退呼声。整体健康度评估：**⚠️ 偏低**——issue 关闭率仅 2.6%，合并率 22.8%，大量高优先级事项仍处于 `no-new-fix-pr` / `needs-maintainer-review` 状态。

---

## 二、版本发布

⚠️ 今日无新版本发布。

当前 Release 通道状态：
- 稳定版：`2026.5.12 / 2026.5.27`（多份报告指出仍存在未修复的 OAuth 与 Codex 集成缺陷）
- Beta 通道：`2026.8.1-beta.2`（验证任务 [#125626](https://github.com/openclaw/openclaw/issues/125626) 进行中，但被多次报告存在回归性事件循环阻塞、SQLite 损坏）
- 候选趋势：下一稳定版仍需至少解决 2 个 P0 问题（#91588、#124788、#126821）后才建议 GA。

---

## 三、项目进展

今日合并/关闭的重要 PR 共 **114 个**，以下为推动主干能力前进的代表：

### 🔒 安全与可靠性（多端跨层）
- **[#126424](https://github.com/openclaw/openclaw/pull/126424)** ⭐ P1 · `feat(gateway): keep conversation delivery within agent bindings`  
  修复多代理操作员使用会话工具时跨绑定泄漏回复的问题，影响 Discord / Slack / Telegram / Feishu / Matrix 等 10+ 通道。已 CLOSED，待补完整合并证据链。
- **[#116489](https://github.com/openclaw/openclaw/pull/116489)** ⭐ P2 · `feat(security): require acknowledgement for install policy warnings`  
  引入 `security.installPolicy` 的 `warn` 路径，CLI/WebUI 安装可疑插件前需要操作员显式确认，闭合了 install-policy UX 闭环。

### 🛠 Codex 集成硬化
- **[#127724](https://github.com/openclaw/openclaw/pull/127724)** ⭐ P2 · `feat(codex): upgrade to 0.149 and harden the complete app-server integration`  
  将 Codex app-server 升级到 0.149，并修复 reply delivery / approval / sandbox / MCP / Guardian 可见性等一系列伴生缺陷，是今日涉及面最广的集成级 PR。
- **[#127169](https://github.com/openclaw/openclaw/pull/127169)** ⭐ P2 · `fix(cli): report exact Claude stream failures`  
  让 Claude CLI 流式 JSONL 解析失败时上报**精确**原因（原始字符上限 / 行数 / 单行 / 后端），不再统一糊成 "turn output exceeded limit"。

### 🖥 UI 体验
- **[#127737](https://github.com/openclaw/openclaw/pull/127737)** · `fix: current chat attachments fail after send acknowledgement`  
  修复 WebChat / TUI 中"图片声称已发但媒体失败"的伪成功状态。
- **[#127738](https://github.com/openclaw/openclaw/pull/127738)** · `fix(ui): align page titles with page content`  
  Control UI 页头布局修正，避免 Activity 等标题被固定 chrome 推到右侧。
- **[#127740](https://github.com/openclaw/openclaw/pull/127740)** · `fix(ui): stop empty protected secrets before Gateway save`  
  阻止向 Gateway 发送必填空值的受保护密钥，提前在 UI 层校验。

### 🧹 代码卫生 / 测试
- **[#127727](https://github.com/openclaw/openclaw/pull/127727)** · `refactor(browser): remove test-only route bypass`  
  移除浏览器桥接测试用的生产环境绕过路径，闭合一道潜在鉴权绕过。
- **[#127343](https://github.com/openclaw/openclaw/pull/127343)** · `fix(release): preserve validation plan across reruns`  
  在 Full Release Validation 重跑时保留 attempt-one 的执行计划字节，避免子任务 ID 被重建。

### 📉 推进程度评估
- **安全 / 策略层**：明显前进（install-policy 闭环、鉴权绕过移除）
- **Codex / OAuth 集成**：硬化 PR 在路上，但 #83598 / #91009 / #86215 等 P1 仍 OPEN
- **网关运行时健康度**：进展有限，#91588、#124788、#126821 三个 P0 今日无对应合并
- **UI 一致性**：稳步收敛

---

## 四、社区热点

按评论数排序的焦点 Issue（合并展示前 5）：

| # | Issue | 评论数 | 主题 | 社区诉求 |
|---|---|---|---|---|
| 1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | **23** | Gateway 内存泄漏（350MB→15.5GB 后被 OOM 杀） | 用户要求**可配置内存上限**与**自动 heap 快照**，而非仅靠 launchd 重启续命 |
| 2 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | **22** | Codex PreToolUse 原生 hook relay 派生 CPU 100% 子进程 | 多用户反映 hook relay 会让网关 RPC 阻塞，呼吁引入**并发上限**与**慢启动熔断** |
| 3 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | **18** | 2026.5.27 后 Codex Telegram 永远拿不到 turn/completed | 升级即触发，严重影响生产 Telegram 部署 |
| 4 | [#125626](https://github.com/openclaw/openclaw/issues/125626) | **18** | Release validation: v2026.8.1-beta.2 | 多位验证测试员在评论中**附实测失败案例**，对 beta.2 信心不足 |
| 5 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | **16** (👍8) | 可配置流式 watchdog 超时阈值 | 在 kimi-k2.5 / DeepSeek-R1 等推理模型上 30s 默认阈值过短，**强烈希望可调** |

**信号解读**：今日 Top 5 中有 **3 个集中在 Codex / 网关健康**，1 个涉及 release 验证，1 个是配置灵活性需求——社区情绪可概括为**"Codex 是最大单点风险"+"beta.2 尚未准备好 GA"+"产品级可配置项不足"**。

---

## 五、Bug 与稳定性

按 P0 → P1 → P2 严重度排列的关键报告：

### 🚨 P0（必须立刻修复）

| Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 350MB→15.5GB 内存泄漏，触发 OOM 循环 | `needs-live-repro` | ❌ 无 |
| [#124788](https://github.com/openclaw/openclaw/issues/124788) | beta.2 网关事件循环每 ~10.9 分钟阻塞 ~100s | `no-new-fix-pr` | ❌ 无 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | beta.2 上 SQLite 损坏在 15-24h 内复发（含"瘫痪网关"模式） | `needs-live-repro` | ❌ 无 |

### ⚠️ P1（高优先级）

| Issue | 标题 | 影响面 | fix PR |
|---|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay 派生 CPU 100% 子进程 | 网关 RPC 阻塞 | ❌ |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 2026.5.27 Codex-backed Telegram 永远 turn/completed 超时 | Telegram 通道 | ❌ |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 刷新失败可让代理僵死数小时，无明确告警 | OAuth + 监控 | ❌ |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成派发在 direct-announce 失败时被丢弃 | Subagent | ❌ |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 各通道缺失可证明的"最终兜底送达"语义 | 全通道 | ❌ |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长会话后 write/exec 工具参数被静默丢弃 | 工具层 | ❌ |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright assertion 错误未捕获，Gateway 整进程崩溃 | 网关 | ❌ |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子/工具子进程未被回收，僵尸进程累积 | 系统健康 | ❌ |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | 大工具输出后 context usage 从 57% 莫名跌到 13% | Session | ❌ |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update 会**覆盖**live skill 的 description | Skill 路由 | ❌ |
| [#125744](https://github.com/openclaw/openclaw/issues/125744) | beta.2 State DB ptrmap 损坏，in-place 恢复不触发 | 数据 | ❌ |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) | 受 Codex compact 404 影响的 2026.5.12 生产用户缺升级指引 | 升级路径 | ❌ |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | 2026.5.12 anthropic:claude-cli OAuth refresh 仍 dead-end | OAuth | ❌ |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久化出站消息卡在 send_attempt_started 后丢失 | Telegram | ❌ |
| [#127176](https://github.com/openclaw/openclaw/issues/127176) | Windows CLI/Node Host 设备元数据审批错位 | Windows | ❌ |
| [#92776](https://github.com/openclaw/openclaw/issues/92776) | Session 模型 pin 不释放（snap-back 探针被上游 origin 字段污染失效） | Session | ❌ |
| [#77717](https://github.com/openclaw/openclaw/issues/77717) | Feishu bot 身份恢复竞态导致永久断连 | Feishu | ❌ |

### 🟡 P2（按计划修复）

| Issue | 标题 |
|---|---|
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker + `OPENCLAW_SANDBOX=1` 时容器重启循环 |
| [#125570](https://github.com/openclaw/openclaw/issues/125570)（已列于上表） | Skill description 静默覆盖 |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | v2026.8.1-beta.2 发布验证 |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord 通道 2026.5.4 / beta.2+ 加载失败（回归） |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | 模型切换在长上下文时静默失败 |
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | Linux 上 exec 工具偶发 SIGKILL 广搜命令 |
| [#120735](https://github.com/openclaw/openclaw/issues/120735) | Telegram 入站贴纸只到原始 file ref，agent 看不到 |
| [#127176](https://github.com/openclaw/openclaw/issues/127176)（已列） | Windows 设备元数据错位 |

> **稳定性总结**：P0 三件套都集中在 beta.2 通道的**网关运行时 / 持久化层**——这是 GA 前必须解决的"地基"问题；P1 列表中 Codex + OAuth 相关占 **>50%**，与本期"Codex 单点风险"信号一致。

---

## 六、功能请求与路线图信号

按点赞数与可落地性排列：

| 优先级 | Issue / PR | 主题 | 落地预判 |
|---|---|---|---|
| 🔥 高 | [#68596](https://github.com/openclaw/openclaw/issues/68596) 👍8 | 可配置 streaming watchdog 超时 | 高——有明确代码锚点 (`src/agents/cli-watchdog-defaults.ts`)，#40982 已在推同类方向 |
| 🔥 高 | [#42840](https://github.com/openclaw/openclaw/issues/42840) 👍10 | Control UI MathJax/LaTeX 支持 | 中——仅 UI 层，独立 PR 即可加 |
| 中 | [#50199](https://github.com/openclaw/openclaw/issues/50199) | Skill 优先级配置 | 中——与 #125570 修复绑定后顺势加入 |
| 中 | [#71058](https://github.com/openclaw/openclaw/issues/71058) | 单网关多 Azure/Teams Bot | 低——涉及 channels.msteams schema 升级 |
| 中 | [#52640](https://github.com/openclaw/openclaw/issues/52640) 👍2 | 长会话持续任务状态面板（Discord 优先） | 中——与 #87561 兜底送达语义合并设计 |
| 中 | [#88154](https://github.com/openclaw/openclaw/issues/88154) | Slack Modal 支持 | 中——外部插件候选 |
| 中 | [#57425](https://github.com/openclaw/openclaw/issues/57425) | 网关优雅重启 + 会话恢复 | 高——直接对应 #127729 / #127739 修复方向 |
| 中 | [#51572](https://github.com/openclaw/openclaw/issues/51572) | session-memory hook 触发扩展到 reset/prune | 中——有现有 hook 体系 |
| 中 | [#51028](https://github.com/openclaw/openclaw/issues/51028) | Sessions 面板按"最后有意义活动"排序 | 低——纯 UI 优化 |
| 中 | [#45771](https://github.com/openclaw/openclaw/issues/45771) 👍2 | 内置节奏感知限流 | 中——直接对应 #78865 的 circuit breaker 需求 |
| 中 | [#78865](https://github.com/openclaw/openclaw/issues/78865) | 工具调用熔断器 | **高**——LLM 死循环的关键护栏，与 #115405 fallback 修复形成完整体系 |
| 中 | [#55249](https://github.com/openclaw/openclaw/issues/55249) | 会话标签/昵称 | 低——CLI 层面 |
| 中 | [#50490](https://github.com/openclaw/openclaw/issues/50490) | Feishu 群聊 `/activation mention` 模式切换失效 | 高——纯回归 bug |
| 中 | [#71452](https://github.com/openclaw/openclaw/issues/71452) | message list 应支持分页 | 低 |
| 中 | [#71195](https://github.com/openclaw/openclaw/issues/71195) | macOS Talk Mode Realtime (S2S) 路径 | 中——与现有 voice-call 插件解耦 |

**路线图信号**：呼声集中在**"网关健康"+"配置灵活性"+"渠道鲁棒性"+"LLM 行为护栏（熔断 / 限流）"** 四大方向，建议下个 sprint 将 #68596、#78865、#57425 列为优先。

---

## 七、用户反馈摘要

---

## 横向生态对比

<think>The user wants me to generate a horizontal comparative analysis report based on the daily dynamics of 7 open-source AI agent projects. Let me carefully analyze the data from all projects:

1. **OpenClaw** - 500 issue updates, 500 PR updates, 0 releases, ⚠️ low health
2. **NanoBot** - 5 issues, 37 PR updates, 0 releases, healthy
3. **PicoClaw** - 1 issue, 3 PR updates (all closed not merged), 0 releases, low activity
4. **IronClaw** - 15 issues, 35 PR updates, 0 releases, high activity
5. **LobsterAI** - 2 issues, 13 PR updates, 0 releases, release merging
6. **QwenPaw** - 34 issues, 34 PR updates, 0 releases, stable iteration
7. **Hermes Agent** - 50 issues, 50 PR updates, 1 release (v0.20.5), high activity
8. **OpenHuman** - 30 issues, 24 PR updates, 0 releases, intensive refactoring

I need to create a horizontal comparative analysis covering:
1. Ecosystem panorama
2. Activity comparison table
3. OpenClaw's positioning
5. Common technical directions
6. Differentiation positioning
7. Community heat and maturity
8. Trend signals

Let me write a professional, data-driven Chinese report.

Key insights I want to highlight:
- **Activity stratification**: OpenClaw and Hermes Agent are massive (500/50), while PicoClaw is nearly dormant (1/3)
- **Codex/OAuth single-point risk** as cross-cutting concern
- **MCP ecosystem maturation** - MCP issues appearing in multiple projects
- **Gateway stability** is a shared P0 across multiple projects
- **Design system / UI consistency** becoming a new axis of competition
- **Memory MCP / pluggable memory** emerging as differentiator
- **Configurability** (watchdog timeouts, image sizes) is a recurring user request
- **Skills system** appearing in multiple projects (#125570 in OpenClaw, #5405 in NanoBot, etc.)
- **Streaming reliability** - appears in OpenClaw, NanoBot, QwenPaw, etc.
- **Tool call fidelity** - tinyagents in OpenHuman, hooks in OpenClaw

Let me design this report to be:
- Concise but with data backing
- Suitable for tech decision-makers
- With clear tables and comparisons
- Professional tone

Let me write it now.</think>

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**报告日期：2026-08-22**  
**覆盖项目：OpenClaw · NanoBot · PicoClaw · IronClaw · LobsterAI · QwenPaw · Hermes Agent · OpenHuman**

---

## 一、生态全景

过去 24 小时，8 个项目的开源智能体生态呈现出**"成熟项目深陷稳定性债务，新生项目抢占差异化赛道"**的典型格局：OpenClaw 与 Hermes Agent 单日吞吐达 500 条 Issue/PR 量级，处于"大规模治理期"；NanoBot / IronClaw / OpenHuman 在 30–40 条区间，体现**激进的模块化与基础设施重构**；PicoClaw 仅 1+3 条，呈现明显的低活跃特征；QwenPaw 与 LobsterAI 处于"测试基建与版本收口"的稳态迭代。共同技术语言是 **MCP（Model Context Protocol）**、**Skills / Hooks / Tools 抽象** 与 **网关-代理（Gateway-Agent）分离架构**；共同痛点是**网关级内存泄漏、OAuth/Codex 单点风险、streamable_http MCP 重连、配置可调性不足**。整体态势：**生态从"能力扩展期"过渡到"运行可靠性 + 可插拔架构期"**，开发者正用脚投票——**稳定性优于新特性，配置灵活性优于默认值的合理性**。

---

## 二、各项目活跃度对比

| 项目 | 仓库 | 今日 Issues（新增/活跃·关闭） | 今日 PRs（待合并·合并/关闭） | Release | 阶段定位 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | openclaw/openclaw | 500（487·13） | 500（386·114） | ❌ 无 | 大规模治理期 | ⚠️ 偏低（issue 关闭率仅 2.6%） |
| **Hermes Agent** | NousResearch/hermes-agent | 50（46·4） | 50（46·4） | ✅ v0.20.5（3 天前汇总 323 PR） | 架构收敛期 | 🟢 高 |
| **NanoBot** | HKUDS/nanobot | 5（1·4） | 37（14·23） | ❌ 无 | 重构冲刺期 | 🟢 良好（Issue 即报即关） |
| **QwenPaw** | agentscope-ai/QwenPaw | 34（19·15） | 34（21·13） | ❌ 无 | 质量收口期 | 🟡 良好（v2.1.1 回归待控） |
| **IronClaw** | nearai/ironclaw | 15（11·4） | 35（19·16） | ❌ 无 | 基础设施重构期 | 🟢 健康（合并速度快） |
| **OpenHuman** | tinyhumansai/openhuman | 30（29·1） | 24（14·10） | ❌ 无 | 模块化收尾期 | 🟡 紧张（pre-prod 故障叠加） |
| **LobsterAI** | netease-youdao/LobsterAI | 2（0·2） | 13（1·12） | ⚠️ 2026.8.21 合入主干待 tag | 版本收口期 | 🟢 良好（含 4 月积压清理） |
| **PicoClaw** | sipeed/picoclaw | 1（1·0） | 3（0·3，未合并） | ❌ 无 | 维护性事务期 | 🔴 偏低（仅清理积压） |

> **关键观察**：活跃度排序与"问题密度"高度相关——OpenClaw / Hermes 的高活跃恰恰说明**多代理 + 网关 + 多平台集成在规模化阶段的复杂度代价**；PicoClaw 的低活跃则可能反映项目治理节奏放缓，需要维护者主动维护信号。

---

## 三、OpenClaw 在生态中的定位

### 1. 优势相对坐标

| 维度 | OpenClaw | 同类对照 |
|---|---|---|
| **功能广度** | ⭐⭐⭐⭐⭐ | 10+ 通道（Discord/Slack/Telegram/Feishu/Matrix…）+ Skills + Hooks + Gateway + Codex 子系统，覆盖最广 |
| **集成深度** | ⭐⭐⭐⭐ | Codex 集成硬化（PR #127724）与 Claude CLI OAuth 修复并行推进 |
| **社区规模** | ⭐⭐⭐⭐⭐ | 单日 500 Issue/PR 体量显著高于其他项目一个数量级 |
| **治理成熟度** | ⭐⭐ | P0 三件套（内存泄漏 / 事件循环 / SQLite 损坏）均无 fix PR，issue 关闭率仅 2.6% |
| **配置可调性** | ⭐⭐ | 多个 Issue 反复呼吁（#68596 streaming watchdog、#91588 内存上限、#7156 同类） |

### 2. 技术路线差异

- **"一体化平台"路线**：OpenClaw 走"内置 10+ 通道 + 全栈 Agent 框架"路线，类似 **LangChain/LangGraph 的全套式哲学**。
- **对比策略**：
  - **NanoBot** 走"Provider 类型化重构 + 小而美"路线，对应 **LiteLLM 哲学**
  - **IronClaw / Hermes Agent** 走"严格 CI 治理 + 设计系统 + Inbox 持久化"路线，对应 **GitHub-Style 工程优先**
  - **OpenHuman** 走"模块化（tinyagents/tinymcp/tinyruntime 拆分）+ 跨进程 core"路线，对应 **微内核架构**
  - **QwenPaw** 走"测试覆盖率 + 多端一致性"路线，对应 **Cloud SaaS 工程化范式**
  - **LobsterAI** 走"业务场景优先（DSH/Cowork/资料库）"路线，对应 **企业级 SaaS 工作流**

### 3. 社区规模 vs 同类

OpenClaw 是当前生态中**单日吞吐最大的项目**（约 Hermes Agent 的 10 倍、NanoBot 的 13 倍），但其关闭率最低，意味着**贡献者多但维护者带宽不足**——这是规模化开源项目的典型瓶颈信号。

---

## 四、共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🔴 网关运行时健康度** | OpenClaw (#91588 内存泄漏 / #124788 事件循环 / #126821 SQLite 损坏)、Hermes Agent (#91277 fleet 更新可靠性)、OpenHuman (#5643 ABI 不匹配) | 内存可配置上限、heap 快照、子进程回收、状态 DB 容灾 |
| **🔌 MCP 协议成熟度** | QwenPaw (#6524 重连)、OpenClaw (#83598 OAuth)、OpenHuman (#5671 MCP 拆分)、Hermes Agent (#47509 静默发现失败) | streamable_http 自动重连、tool auth 自定义频道、失败可见性 |
| **⚙️ 配置可调性诉求** | OpenClaw (#68596 watchdog、#91588 内存)、QwenPaw (#7156 embedding 超时、#7201 provider 媒体上限)、NanoBot (#5234 多源搜索) | 把硬编码阈值暴露为配置项 |
| **🛡️ LLM 行为护栏（熔断 / 限流）** | OpenClaw (#78865 工具熔断、#45771 节奏感知限流、#68596 watchdog) | LLM 死循环 / 长推理保护、熔断器 |
| **🧠 记忆层可插拔 / 长上下文稳健性** | OpenHuman (tinymemory)、IronClaw (#7664 Memory MCP + #7808 写路径脱敏)、QwenPaw (#7168 history.db 膨胀)、NanoBot (#5379 consolidation)、OpenClaw (#108215 context usage 跌变) | 外部 provider 绑定、出网脱敏、context 计数可信 |
| **🖥️ 设计系统 / UI 一致性** | IronClaw (#7257/#7750/#7792)、OpenClaw (#127738)、LobsterAI (#1219/#1220)、QwenPaw (#7196/#7203 折叠诉求) | Storybook + 组件库 + 信息密度可控 |
| **🔒 安全闭环（认证绕过 / 密钥保护）** | OpenClaw (#127727 移除测试旁路、#127740 必填空值校验、#116489 install policy)、OpenHuman (#5635 config.toml 644 权限) | UI 层预校验 + 鉴权移除测试绕路 |
| **📦 Skills / Hooks 体系** | OpenClaw (#125570 Skill description 覆盖、#68596 watchdog hook)、NanoBot (#5405 manual-only invocation、#1149 PromptGuard)、OpenHuman (#5662 Cursor 兼容 hooks) | 跨 host 的 hooks 契约、Skill 路由可预测 |

---

## 五、差异化定位分析

| 项目 | 核心赛道 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 一体化 Agent 平台 | 多通道运营 + 复杂工作流用户 | Gateway-Channel 多协议网关 + Codex app-server + 全套 Skills/Hooks |
| **Hermes Agent** | 学术/前沿架构 | 开发者 + 研究者 | 可证明状态架构（proof-carrying）+ 跨平台 Desktop + Bot Mode 控制平面 |
| **NanoBot** | 轻量 Provider 重构 | 偏好简洁、可控、模块化的开发者 | 类型化 LLMUsage + Dream/Cron 自治 + Tauri 桌面端 |
| **PicoClaw** | 嵌入式/单用途 | 极简用户 | 协议极简，无统一治理 |
| **IronClaw** | 工程优先 SaaS | 企业工程团队 | 严格 CI 治理（T1–T4 矩阵）+ 设计系统 + 持久化 Inbox + Memory MCP |
| **LobsterAI** | 业务场景驱动 | 网易系企业 / 文档/资料库场景 | DSH 实验运行时 + Cowork 协作模式 + 资料库 UX 打磨 |
| **QwenPaw** | 多模态 + 测试基建 | 多模态创作 + 严格工程化用户 | Creator 1.1.0 多供应商 + Storybook 化前端 + Hub/单租户二分 |
| **OpenHuman** | 模块化微内核 | Rust/底层贡献者 | tinyagents/tinymcp/tinyruntime 拆分 + 跨进程 core + Orchestrator 性能极致 |

**关键差异化信号**：

1. **架构哲学分化明显**：OpenClaw / QwenPaw 偏"全家桶"；NanoBot / OpenHuman 偏"乐高"；IronClaw / Hermes 偏"工程化治理"；LobsterAI 偏"场景驱动"。
2. **多模态路径分叉**：QwenPaw（Creator 多供应商图像/视频）、Hermes Agent（Desktop 渲染）、OpenClaw（多通道富媒体）三条路径并存。
3. **桌面端战略**成为新战场：NanoBot（Tauri + Lumina Windows）、OpenHuman（tinybox 跨进程）、Hermes Agent（Desktop 三平台）几乎同步推进，桌面端从"附属"变为"主战场"。
4. **Skills 与 Hooks 的标准化战争**：OpenHuman 走 Cursor 兼容、OpenClaw 走 install policy 闭环、NanoBot 走 manual-only 模式——尚未形成事实标准。

---

## 六、社区热度与成熟度分层

### 🔥 第一梯队：快速迭代 + 高吞吐（治理风险高）

- **OpenClaw**：500/500 体量但关闭率仅 2.6%，**典型的"贡献洪流淹没维护者带宽"**信号。
- **Hermes Agent**：500/500 + v0.20.5 集中发版，**架构收敛期**但仍处于高频变动。

### 🚀 第二梯队：激进重构 + 模块化

- **NanoBot**：Provider 类型化重构落地，Dream/Cron 闭环修复，代码健康度持续向好。
- **OpenHuman**：单日净减 12,000+ 行代码（拆分到 tinymcp 等子 crate），**激进重构但 pre-prod 故障叠加**。
- **IronClaw**：T1–T4 CI 矩阵 + Sandbox 凭据治理 + 持久 Inbox 三线并进，**合并速度健康**。

### 🟢 第三梯队：质量巩固 + 收口

- **QwenPaw**：M1/M2/M3-A/M3-B 测试用例集中落地，v2.1.0 → v2.1.1 出现回归迹象（`/compact` 失败、WebView2 崩溃）。
- **LobsterAI**：2026.8.21 合入主干待 tag，含 4 月积压清理，**版本节奏稳态**。

### ⚠️ 第四梯队：低活跃 / 维护性事务

- **PicoClaw**：1 Issue + 3 PR（全部关闭未合并），**典型积压清理状态**，缺乏实质推进。

> **分层决策含义**：第一梯队项目的风险来自"治理带宽"，第二梯队来自"重构期质量波动"，第三梯队需要"测试与发版节奏"，第四梯队需要"维护者主动信号"——四类项目的健康度干预手段完全不同。

---

## 七、值得关注的趋势信号

### 📈 趋势 1：网关运行时健康度成为头号工程债

**信号**：OpenClaw（#91588/#124788/#126821 三 P0）、Hermes Agent（#91277 P1 fleet 可靠性）、OpenHuman（pre-prod WS 11 分钟周期断连）几乎同步出现"网关/运行时长期运行下的内存/状态/连接故障"。

**含义**：当 Agent 从 demo 走向长跑生产，**长时运行的资源回收、子进程管理、连接心跳、可观测性**是开源生态尚未收敛的核心问题集。对开发者的参考价值：**任何新 Agent 项目应在网关层预设内存上限 + heap 快照 + 子进程回收 + 连接心跳可配置项**，而不是事后补救。

### 📈 趋势 2：MCP 生态进入"互操作痛点期"

**信号**：QwenPaw #6524（重连）、Hermes Agent #47509（静默发现失败）、OpenClaw #83598（OAuth 死路）、OpenHuman #5671（拆分到 tinymcp）。

**含义**：MCP 已从"协议新鲜感"过渡到"互操作痛点期"——`streamable_http` 模式下的会话恢复、OAuth 兼容性、tool auth 与 channel 路由成为新热点。对开发者的参考价值：**MCP 客户端实现必须内置会话过期检测 + 自动重连 + 失败可观测性**，否则将面临生产事故。

### 📈 趋势 3：Skills / Hooks 标准化窗口期

**信号**：OpenHuman（Cursor 兼容 hooks）、OpenClaw（install policy + 必填校验）、NanoBot（manual-only invocation + PromptGuard）。

**含义**：各项目正在以各自方言定义 Skills / Hooks，**跨 host 互操作尚未成型**。对开发者的参考价值：**插件作者需要面对碎片化契约**，应优先支持 Cursor/Claude Code 兼容子集而非平台特定方言。

### 📈 趋势 4：记忆层可插拔成为差异化主战场

**信号**：IronClaw #7664（Memory MCP）、OpenHuman（tinymemory cdylib）、QwenPaw #7168（history.db 膨胀）、OpenClaw #108215（context usage 跌变）。

**含义**：Agent 的"长记忆"既是卖点也是故障源，**外部 memory provider + 出网脱敏 + context 计数可信**正在成为差异化方向。对开发者的参考价值：**写路径脱敏（taint 元数据）应早于 provider 绑定实现**，避免数据外泄事故。

### 📈 趋势 5：可配置性是用户付费意愿信号

**信号**：OpenClaw #68596（streaming watchdog 8 👍）、QwenPaw #7156 + #7201（embedding 超时、provider 媒体上限）、NanoBot #50199（Skill 优先级）。

**含义**：用户反复呼吁"硬编码阈值暴露为配置项

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot from 2026-08-22 and create a comprehensive daily report.

Key observations:
1. Issues: 5 total updates - 1 newly opened, 4 closed
2. PRs: 37 total updates - 14 open/pending, 23 merged/closed
3. No new releases

Let me categorize the activity:

**Issues:**
- #5198 [CLOSED] - Bug about changing models in a specific session
- #1168 [CLOSED] - Nanobot connecting to Notion MCP failed
- #5441 [CLOSED] - Dream run tool error blocks memory cursor
- #5463 [OPEN] - DingTalk doesn't drain inbound background tasks (NEW)
- #5454 [CLOSED] - Streaming providers mid-stream server_error retry issue

**PRs - Notable merged/closed:**
- #5407 [CLOSED] - fix(cron): retire persisted heartbeat/dream system jobs when disabled
- #5442 [CLOSED] - fix(dream): advance cursor when tool errors were recovered
- #5414 [CLOSED] - fix(slack): validate file downloads across redirects
- #5478 [CLOSED] - refactor(providers): define typed LLM usage contract
- #5479 [CLOSED] - feat(trajectory): add unified provider usage backend
- #5476 [CLOSED] - feat(tui): render LaTeX as Unicode
- #5477 [CLOSED] - fix(webui): keep iOS PWA controls inside safe area
- #5474 [CLOSED] - feat(providers): support DeepSeek V4 Flash Vision
- #5475 [OPEN] - refactor: remove remaining dead code
- #1149 [CLOSED] - feat(safety): Add PromptGuard for prompt injection detection
- #1592 [CLOSED] - feat: finalize Lumina Windows app + local stack installer flow
- #2063 [CLOSED] - Tauri desktop app with PyInstaller sidecar
- #1539 [CLOSED] - CrowPay skill for AI agents

**Open PRs:**
- #5234 [OPEN] - feat(agent): integrate mst-python as a metasearch provider
- #5480 [OPEN] - refactor(providers): define typed LLM usage contract (similar to #5478)
- #5481 [OPEN] - feat(trajectory): add unified provider usage backend (similar to #5479)
- #5420 [OPEN] - feat(webui): add turn observability and safe recovery
- #5405 [OPEN] - feat(skills): support manual-only invocation
- #5379 [OPEN] - fix(memory): preserve full consolidation input
- #5457 [OPEN] - fix(channels): scope dispatcher exception boundary
- #5475 [OPEN] - refactor: remove remaining dead code

Let me draft the daily report in Chinese since the user's original language is Chinese.

I need to consider:
- The data shows a lot of activity on 2026-08-21 and 2026-08-22
- @chengyongru is very active, contributing many PRs
- @flobo3, @aiguozhi123456, @akinolur also active
- Many PRs are related to provider refactoring and Dream/cron system fixes

Let me structure this into a professional report.</think>

# NanoBot 项目日报 · 2026-08-22

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> 统计周期：过去 24 小时（2026-08-21 ~ 2026-08-22）

---

## 1. 今日速览

NanoBot 今日维持**高度活跃的迭代节奏**：过去 24 小时共发生 5 次 Issue 更新（1 新开 / 4 关闭）和 37 次 PR 更新（14 待合并 / 23 已关闭），单日 PR 处理量显著高于项目历史均值。代码层面围绕 **Provider 重构**（LLMUsage 类型化契约）、**Dream/Cron 任务系统稳定性**（光标推进、心跳退役）、**WebUI/TUI 体验增强**（LaTeX Unicode 渲染、iOS PWA 安全区）三条主线推进。社区贡献者 `@chengyongru` 单日提交 8 个 PR，呈现明显的"集中重构 + 集中清理"特征。无新版本发布，核心修复与改进仍在主干累积。

---

## 2. 版本发布

🚫 **今日无新版本发布。**

---

## 3. 项目进展

今日共有 23 个 PR 关闭/合并，主要推进方向如下：

### 🔧 关键修复
- **[#5407](https://github.com/HKUDS/nanobot/pull/5407)** `fix(cron): retire persisted heartbeat/dream system jobs when disabled`  
  修复 `gateway.heartbeat.enabled=false` 后旧的 cron 任务仍在 `<workspace>/cron/jobs.json` 中持续触发并消耗 token 的回归问题。
- **[#5442](https://github.com/HKUDS/nanobot/pull/5442)** `fix(dream): advance cursor when tool errors were recovered`  
  修复 #5441——Dream 任务在工具调用出现已恢复错误时仍然被拒，关闭后修复 PR 同步关闭。
- **[#5414](https://github.com/HKUDS/nanobot/pull/5414)** `fix(slack): validate file downloads across redirects`  
  修复 Slack 私有下载 URL 重定向链上的安全校验漏洞。
- **[#5477](https://github.com/HKUDS/nanobot/pull/5477)** `fix(webui): keep iOS PWA controls inside safe area`  
  恢复 `viewport-fit=auto`，修正 iOS PWA 安装后控件被刘海遮挡的问题。

### 🏗️ 架构重构（@chengyongru 主导）
- **[#5478](https://github.com/HKUDS/nanobot/pull/5478)** `refactor(providers): define typed LLM usage contract`  
  用不可变 `LLMUsage` 类型替换动态字典，统一 OpenAI Chat / Responses、Anthropic、Bedrock 边界的 token / cache 语义。
- **[#5479](https://github.com/HKUDS/nanobot/pull/5479)** `feat(trajectory): add unified provider usage backend`  
  为每次重试管理下的 provider 调用记录一条无内容的轨迹行（包括 fallback / 错误 / 取消），与 #5478 形成原生堆栈。
- **[#5476](https://github.com/HKUDS/nanobot/pull/5476)** `feat(tui): render LaTeX as Unicode`  
  TUI 支持流式/历史回放中的 LaTeX 渲染为 Unicode 文本，同时保留货币符号、Shell 变量、代码块不被误转。
- **[#5474](https://github.com/HKUDS/nanobot/pull/5474)** `feat(providers): support DeepSeek V4 Flash Vision`  
  注册 `deepseek-v4-flash-vision-exp` 路由至 DeepSeek Responses API，保留多模态结构化内容。

### 🛡️ 安全与生态扩展
- **[#1149](https://github.com/HKUDS/nanobot/pull/1149)** `feat(safety): Add PromptGuard for prompt injection detection`  
  新增 `nanobot.safety.PromptGuard`，覆盖系统提示覆盖、角色混淆、工具调用 JSON 注入三类检测。
- **[#1539](https://github.com/HKUDS/nanobot/pull/1539)** `Add CrowPay skill`  
  为 Agent 增加自主支付能力，集成 CrowPay 托管钱包与消费规则。
- **[#1592](https://github.com/HKUDS/nanobot/pull/1592)** `feat: finalize Lumina Windows app + local stack installer flow`  
  完成 Lumina Windows 应用与本地栈安装流程。
- **[#2063](https://github.com/HKUDS/nanobot/pull/2063)** `feat: add Tauri desktop app with PyInstaller sidecar`  
  引入 Tauri v2 桌面应用壳，含 WebSocket 通道、引导向导、PyInstaller 单文件打包与 CI 工作流。

> 📊 **整体进度评估**：Provider 类型化重构（#5478）落地后，#5480（refactor 重做版）与 #5481（trajectory 重做版）作为后续 native stack #5482 的 PR 仍在排队；Dream/Cron 系统相关 bug 已形成"Issue → Fix PR → 关闭"的闭环，整体代码健康度持续向好。

---

## 4. 社区热点

虽然今日无新增高互动议题，但以下 Issue 在 24 小时内产生了**实质性进展**：

| 链接 | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | [bug] 无法在特定会话中切换模型 | 4 | 已关闭 |
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Nanobot 连接 Notion MCP 失败 | 2 | 已关闭 |

**诉求分析**：
- **#5198** 反映用户在多模型配置下仍被锁定于单一首选模型，且 UI 上缺乏内联切换能力，类比 Cloud SaaS AI 的体验差距较大——这是 Agent 多 Provider 时代典型的"配置复杂度 vs 切换自由度"矛盾。
- **#1168** 揭示了 MCP 集成的兼容性问题，用户交叉验证 API 与 Claude 均正常，问题收敛于 Nanobot 侧，是 MCP 生态快速扩张下的典型互操作缺陷。

> ⚠️ 两条 Issue 在更新当日即被关闭，说明维护者响应效率较高，但需关注关闭原因（修复/不修复/Won't Fix）以判断是否彻底解决。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 高 | [#5463](https://github.com/HKUDS/nanobot/issues/5463) | DingTalk 不观察/排空入站后台任务 | 🆕 OPEN | ❌ 无 |
| 🟠 中 | [#5441](https://github.com/HKUDS/nanobot/issues/5441) | 单次已恢复的工具错误永久阻塞 memory cursor | ✅ CLOSED | ✅ [#5442](https://github.com/HKUDS/nanobot/pull/5442) |
| 🟠 中 | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | 流式 provider mid-stream server_error 跳过重试 | ✅ CLOSED | 待跟踪 |
| 🟡 低 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 会话级模型切换不可用 | ✅ CLOSED | 待跟踪 |

**重点关注**：
- **#5463** 是今日唯一未处理的 Bug：钉钉通道通过 `asyncio.create_task` 转发入站消息后未注册任何终止观察者，存在后台任务泄漏与静默失败风险。建议关注 `@yu-xin-c` 后续的修复 PR（与 #5457 异常边界修复思路一致）。
- **#5454** 描述的流式场景重试逻辑缺陷，仅在"首 delta 之后发生 server_error"时触发，影响 Codex 集成可靠性。

---

## 6. 功能请求与路线图信号

| PR | 标题 | 状态 | 路线图含义 |
|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | integrate mst-python as a metasearch provider | OPEN | 多源搜索融合（RRF 算法）即将进入 Agent 工具箱 |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | feat(skills): support manual-only invocation | OPEN | 通过 `disable-model-invocation: true` 引入"用户专属技能"模式，应对部署/发布等副作用场景 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(webui): add turn observability and safe recovery | OPEN | WebUI 单回合可观测 + 中断可恢复，将显著提升调试体验 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | integrate mst-python | OPEN | 替换/补充单一搜索引擎 |
| [#2063](https://github.com/HKUDS/nanobot/pull/2063) | Tauri 桌面应用 + PyInstaller | 已关闭 | 桌面端发行方案基本就位 |

**预测**：下一版本（若发布）很可能包含 **DeepSeek V4 Flash Vision 支持**（#5474 已合）、**PromptGuard 安全模块**（#1149 已合）以及 **Skills 手动调用模式**（#5405 仍在排队）。

---

## 7. 用户反馈摘要

来自今日关闭 Issues 的真实声音：

- **🔧 模型灵活性诉求**（#5198）："Nanobot 始终以某个特定模型作为首选，其余仅作 fallback……不像 SaaS AI 的 UI 那样允许切换。" → 反映**多 Provider 场景下的 UX 缺口**，与 #5480 类型化重构的最终落点（统一 Provider 身份）方向吻合。
- **🔌 MCP 集成痛点**（#1168）："我用 nanobot 连 notion MCP 一直失败，但 Claude 那边正常。" → 反映**第三方 MCP 服务兼容性问题**，尚不清楚是否进入正式测试矩阵。
- **🧠 Dream 机制困惑**（#5441 衍生）："为什么一个被恢复的工具错误会让整次 Dream run 被判失败？" → 反映**长程记忆自动化机制对普通用户来说仍偏黑盒**。

---

## 8. 待处理积压

以下为仍处于 **OPEN 状态且较受关注** 的 PR/Issue，提醒维护者排期：

| 链接 | 类型 | 标题 | 创建日期 | 待办重点 |
|---|---|---|---|---|
| [#5463](https://github.com/HKUDS/nanobot/issues/5463) | Issue | DingTalk 入站后台任务无 observer | 2026-08-21 | 🆕 新开，需指派 owner |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | PR | feat(webui): add turn observability and safe recovery | 2026-08-18 | 标签含 `[conflict]`，需 rebase |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | PR | feat(skills): support manual-only invocation | 2026-08-16 | 已 6 天未合，需 review |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | PR | fix(memory): preserve full consolidation input | 2026-08-13 | 已 9 天未合，需 review |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR | integrate mst-python as a metasearch provider | 2026-08-03 | 已 19 天未合，p1 优先级 |

> 💡 **维护者提示**：`@chengyongru` 在 #5480 / #5481 标注了"原生堆栈 #5482"，建议同步评审 #5478→#5480 的合并策略，避免重复改造占用 review 带宽。

---

*📅 报告生成时间：2026-08-22 · 数据基于 GitHub 公开 API 抓取*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>The user wants me to generate a daily report for the PicoClaw project based on GitHub data from 2026-08-22. Let me analyze the data carefully.

Key observations:
1. Only 1 new issue opened (#3342) - about a feature request for "after-turn" steering mode
2. 3 PRs were closed - all were old PRs from February/March 2026 that were closed today
3. No new releases
4. The 3 closed PRs:
   - #647 (Feb 22, 2026) - WebFetchTool improvements - CLOSED (not merged)
   - #1182 (Mar 6, 2026) - AGENTS.md documentation - CLOSED (not merged)
   - #1158 (Mar 6, 2026) - anthropic-messages protocol - CLOSED (with "Fixes #269")

Let me create the report in Chinese as requested.

I need to be careful about the "closed" status - I should note that these were closed without merging, which could indicate they were rejected, superseded, or had other issues. This might actually reflect declining activity or maintenance challenges.

Let me structure each section:

1. **今日速览** - Overall activity is low. 1 new issue, 3 old PRs closed (not merged), 0 releases. This suggests reduced activity or potentially maintenance backlog being cleared.

2. **版本发布** - None, skip

3. **项目进展** - 3 PRs closed but none merged. Actually this is concerning - "推进" would be misleading. I should be honest about this - these are closures without merging, which could mean the project is not making progress in terms of code changes today.

4. **社区热点** - Only 1 issue with 0 comments, so not much discussion. The PRs that were closed were old, suggesting some community cleanup.

5. **Bug 与稳定性** - No new bug reports.

6. **功能请求与路线图信号** - Issue #3342 about steering mode is the new feature request.

7. **用户反馈摘要** - Limited data, only from the new issue.

8. **待处理积压** - 3 old PRs being closed is a sign of backlog cleanup.

Let me write this professionally and objectively. I should note that the closures without merging is a notable pattern worth highlighting.</think>

# PicoClaw 项目日报

**日期：2026-08-22**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

项目今日活跃度处于低位：仅新开 1 条 Issue，无新版本发布，3 条 PR 全部以"已关闭"状态收尾（但均未合并）。值得关注的是，今日关闭的 3 条 PR 全部创建于 2026 年 2–3 月（间隔约 5–6 个月），呈现出典型的"长期积压清理"特征，而非实质性的代码进展。整体而言，今日 PicoClaw 处于**维护性事务阶段**，未观察到主线功能推进。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

---

## 3. 项目进展

今日 PR 活动量为 3 条关闭 / 0 条合并，**无任何代码被合入主干**。下表整理今日关闭的 PR：

| PR | 标题 | 类型 | 创建日期 | 关闭方式 | 影响 |
|---|---|---|---|---|---|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | Improve WebFetchTool 文本提取（HTML 实体解码与结构保留） | enhancement / tool | 2026-02-22 | 未合并关闭 | ❌ 工具侧能力未落地 |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | 优化 AGENTS.md 仓库指南 | documentation | 2026-03-06 | 未合并关闭 | ❌ 文档改进未落地 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | 新增 anthropic-messages 协议（修复 [#269](https://github.com/sipeed/picoclaw/issues/269)） | feature / protocol | 2026-03-06 | 未合并关闭 | ⚠️ 一项长期有效的功能请求被关闭 |

**评估**：今日并非推进日，而是**清理日**。三条 PR 在积压数月后被一并关闭，但其本身在功能、协议兼容性与生态扩展方面均具有积极价值。维护者在关闭这些 PR 时**未提供合并替代方案**，意味着这些改进或被推迟至后续迭代，或将由维护者自行重写。建议关注者跟进后续替代 PR 的出现。

---

## 4. 社区热点

由于今日 Issues 与 PRs 的评论数均为 0、点赞数均为 0，**严格意义上的讨论热度信号缺失**。但从议题本身的关注点可提炼出两项潜在热点：

- **🔧 多轮会话中的"中断"语义争议**  
  新 Issue [#3342](https://github.com/sipeed/picoclaw/issues/3342) 提出：当前在 agent 仍在处理任务时，用户的第二条消息会被视作"中途修正"，跳过任务 1 的剩余工具调用并注入新消息。作者希望引入**"after-turn" steering 模式**作为可选行为，将后续消息排队而非中断。该议题触及对话式 Agent 的核心交互模式，具有较高设计价值。

- **🌐 协议兼容性长期缺口**  
  被关闭的 [#1158](https://github.com/sipeed/picoclaw/pull/1158) 解决 [#269](https://github.com/sipeed/picoclaw/issues/269)——仅支持 Anthropic 原生 Messages API 格式的服务（如部分代理服务）此前无法接入 PicoClaw。这一缺口在社区中存在已久。

---

## 5. Bug 与稳定性

✅ **今日无新 Bug、崩溃或回归问题报告。**

健康度层面值得关注的是：3 条 PR 关闭但未合并，**未引入新代码变更**，因此不存在"今日引入回归"的风险。但仍建议后续对 [#647](https://github.com/sipeed/picoclaw/pull/647)（WebFetchTool HTML 实体解码）所描述的现有行为进行核对，确认在实际运行中是否已被其他途径修复，否则用户抓取含 HTML 实体的网页时仍会拿到字面字符。

---

## 6. 功能请求与路线图信号

今日最明确的新功能信号来自 Issue：

| 序号 | 请求 | 状态 | 是否已有 PR | 纳入近期版本可能性 |
|---|---|---|---|---|
| F-1 | [after-turn steering 模式（不中断当前轮的排队消息机制）](https://github.com/sipeed/picoclaw/issues/3342) | OPEN | 否 | 中–高。是 agent UX 关键交互，原 issue 表述清晰，存在被优先纳入的可能 |

**已被关闭但仍具需求价值的功能请求**（建议社区重新发起或由维护者接手）：
- [anthropic-messages 协议支持](https://github.com/sipeed/picoclaw/pull/1158)（[#269](https://github.com/sipeed/picoclaw/issues/269)）——协议兼容性问题，解决后会扩大下游用户群。
- [WebFetchTool 文本提取](https://github.com/sipeed/picoclaw/pull/647)——属于体验改善，对抓取质量有直接影响。

---

## 7. 用户反馈摘要

由于今日交互量为 0 评论、0 点赞，可观察到的用户声音主要来自 PR/Issue 自述：

- **协议兼容性是真实痛点**：作者在 [#1158](https://github.com/sipeed/picoclaw/pull/1158) 中详细列举了**只支持 Anthropic 原生 `/v1/messages` 端点的代理/中转服务**无法接入 PicoClaw 的实际情况，说明并非个别用户遭遇，而是 Anthropic 生态中长期存在的不兼容带。

- **Agent 中断模型存在体验摩擦**：[#3342](https://github.com/sipeed/picoclaw/issues/3342) 的作者指出，目前第二条消息会"跳过任务 1 的剩余工具调用（Skipped due to queued user message.）"，这对部分希望**先完成一个完整任务再处理下一个问题**的用户并不友好。

- **文档不友好的隐性信号**：[#1182](https://github.com/sipeed/picoclaw/pull/1182) 的作者提出希望将 AGENTS.md 改为"原则导向、轻量化"，说明社区贡献者认为现行贡献门槛偏高。

---

## 8. 待处理积压

以下为今日 PR 清理动作的副产物，提示维护者需注意的潜在积压：

| 类型 | 链接 | 备注 |
|---|---|---|
| 长期未合并但有价值的工具增强 PR | [#647](https://github.com/sipeed/picoclaw/pull/647) | 关闭未合并；功能描述仍有效，建议给出替代处理路径 |
| 长期未合并的协议功能 PR | [#1158](https://github.com/sipeed/picoclaw/pull/1158) | 关闭未合并；其对应的 [#269](https://github.com/sipeed/picoclaw/issues/269) 尚未宣告关闭，需明确该需求是否仍被路线图接纳 |
| 长期未合并的文档 PR | [#1182](https://github.com/sipeed/picoclaw/pull/1182) | 关闭未合并；涉及 AGENTS.md 的维护，可能需要维护者自行吸收建议 |
| 新开功能议题 | [#3342](https://github.com/sipeed/picoclaw/issues/3342) | 作为新 Issue，尚需维护者识别并响应（领先响应窗口约 24 小时） |

**健康度提醒**：项目今日呈现"低活跃 + 集中清理积压"的特征。维护者应在关闭上述长期 PR 时同步明确：
1. 是否会以新 PR 或 commit 形式吸收其改进；
2. 对应的 Issue（如 [#269](https://github.com/sipeed/picoclaw/issues/269)）是否同步关闭或保留。

否则容易形成"贡献被冷处理"信号，抑制后续社区参与意愿。

---

*本报告基于 GitHub 公开数据自动生成。数据时间窗：2026-08-21 → 2026-08-22 UTC。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a daily project report for IronClaw (a GitHub project at github.com/nearai/ironclaw) based on the GitHub data provided. The date is 2026-08-22. Let me analyze the data carefully and produce a structured report in Chinese.

Let me organize the information:

**Overview:**
- Past 24h Issues: 15 updates (11 new/active, 4 closed)
- Past 24h PRs: 35 updates (19 pending, 16 merged/closed)
- No new releases

**Key Issues to highlight:**
1. #7801 - CI expedite T4 canonical preflight (henrypark133)
2. #7799 - CI expedite T2 nextest pipeline
3. #7664 - Pluggable memory over MCP (serrrfirat)
4. #7800 - CI expedite T3 PR/queue convergence
5. #7798 - CI expedite T1 setup-rust composite
6. #7783 [CLOSED] - LLM timeout policy bug
7. #7813 - UI heading cropped
8. #7812 - Onboarding suggestions
9. #7808 - Memory write path redaction
10. #7690 [CLOSED] - Publish notifications to inbox
11. #7715 [CLOSED] - Telegram connection flow consent
12. #7793 - Migrate Settings and Admin banners
13. #7792 - Shared page-shell primitives
14. #7687 - Generalize WebUI notification center epic
15. #7689 [CLOSED] - Generalize WebUI notification center

**Key PRs to highlight:**
1. #7516 - WebUI operator surface for IronHub agent link (neo-sky, XL, low risk)
2. #7811 - Bundle Xquik hosted MCP (kriptoburak, new contributor)
3. #7810 - Sandbox mediate GitHub CLI credentials (serrrfirat, XL, core)
4. #7809 - CI canonical preflight T4 tasks 1-5 (henrypark133)
5. #7804 [CLOSED] - Workspace root 1.3
6. #7797 [CLOSED] - Repo-wide agent guidance audit
7. #7803 [CLOSED] - Telegram paired channels
8. #7805 [CLOSED] - Clippy 1.98 lint fixes
9. #7807 [CLOSED] - Sandbox GitHub CLI credentials
10. #7806 [CLOSED] - Sandbox GitHub CLI credentials
11. #7456 - Make durable storage profile-agnostic
12. #7796 [CLOSED] - Sandbox Railway audit appends
13. #7257 - WebUI design system proposal
14. #7802 - OOBE suggestions always on
15. #7700 - Publish authoritative run outcomes
16. #7750 - Storybook + design system catalog
17. #7491 - OMP core-tool contract
18. #7650 - Derive run outcomes from runtime evidence
19. #7699 [CLOSED] - Publish actionable run gates
20. #7794 - Shared page shell and loading primitives

Let me analyze themes:
- **CI/CD refactor initiative** by @henrypark133: T1-T4 tracks (#7798, #7799, #7800, #7801) all opened on 2026-08-21
- **Sandbox/GitHub CLI mediation**: 3 PRs by @serrrfirat (#7806, #7807, #7810) - iterating
- **Memory MCP**: #7664, #7808 by @serrrfirat
- **Notifications/Inbox**: #7687 epic, #7689/#7690 closed, #7699 closed, #7700 open, #7793, #7792, #7794
- **WebUI/Design system**: #7792, #7793, #7794, #7813, #7257, #7750
- **Telegram**: #7803 closed, #7715 closed

Bug severity analysis:
- #7783 [CLOSED] - LLM timeout policy: medium risk, llm scope - has clear bug description but is closed already
- #7813 - UI heading cropped (minor UX)
- #7715 [CLOSED] - Telegram consent flow (medium UX)
- #7808 - Memory write path redaction (medium-high risk, security)
- #7805 [CLOSED] - clippy 1.98 lint fixes - regression fixed

Active contributor analysis:
- @henrypark133 - heavy contribution (CI refactor, OOBE, workspace, guidance audit, clippy fixes)
- @serrrfirat - heavy (sandbox, memory, telegram)
- @italic-jinxin - notifications/inbox work
- @sergeiest - UX feedback (UI crop, onboarding)
- @neo-sky - WebUI IronHub
- @rdisandro - design system
- @kriptoburak - new contributor for Xquik

Now let me structure the report. I'll write in Chinese, professional and objective, with data-driven insights.

Let me draft it section by section:

**今日速览** - Project is in active refactoring phase. CI/CD modernization (T1-T4), sandbox credential mediation, notifications/inbox generalization, and WebUI design system work all converging. 35 PRs updated, 16 merged/closed, indicating steady merge velocity. No new releases.

**版本发布** - None, skip

**项目进展** - Highlight the merged/closed PRs:
- #7797: Agent guidance audit (21.5k lines pruned) - major hygiene work
- #7805: clippy 1.98 lint forward-port - fixes every PR
- #7804: workspace root override forward-port
- #7803: Telegram paired channels
- #7796: Sandbox Railway audit failure preservation
- #7806, #7807: Sandbox GitHub CLI iterations
- #7689, #7690, #7699: Notification infrastructure

**社区热点** - Most active issues by comment count:
- #7801 (3 comments) - CI T4 canonical preflight
- #7799 (3 comments) - CI T2 nextest
- #7664 (2 comments) - Pluggable memory MCP
- #7800 (2 comments) - CI T3
- #7798 (2 comments) - CI T1

Most notable PRs (high impact):
- #7516 - IronHub agent link
- #7811 - Xquik MCP new contributor
- #7810 - Sandbox GitHub CLI (latest iteration)

**Bug 与稳定性** - 
- #7808: Memory write path redaction (security, no fix PR yet)
- #7783 [CLOSED]: LLM timeout policy (medium, was a deadlock issue)
- #7805 [CLOSED]: clippy 1.98 regression (now fixed)
- #7715 [CLOSED]: Telegram consent flow
- #7813: UI heading cropped

**功能请求与路线图信号** -
- #7812: Onboarding suggestions with tool access
- #7811: Xquik MCP bundle (new contributor)
- #7664: Pluggable memory MCP

**用户反馈摘要** - From comments and issues, the main user pain points:
- Telegram connection flow lacks consent (#7715)
- UI layout bugs (#7813)
- Onboarding suggestions not grounded in user data (#7812)
- Memory egress redaction needed (#7808)

**待处理积压** -
- #7456: durable storage profile-agnostic (opened 2026-08-10, 12 days)
- #7491: OMP core-tool contract (2026-08-11)
- #7516: IronHub operator surface (2026-08-12)
- #7257: Design system proposal (2026-08-05, 17 days)

Let me also note #7797 is interesting - massive 21.5k line prune of guidance docs.

Now let me write the full report with appropriate detail. I need to include GitHub links.

I should use the thinking mode and present this as a daily report in Chinese.

Let me also consider: the report is dated 2026-08-22, but the data shows the past 24h including some activity from 2026-08-21. The cutoff for "today" is 2026-08-22.

Let me write the report now. I'll make it comprehensive but concise, with appropriate use of formatting.</think>

# IronClaw 项目日报 · 2026-08-22

> 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) · 统计周期：过去 24 小时

---

## 1. 今日速览

IronClaw 仓库今日处于**多线并进的重构冲刺期**，整体活跃度处于高位（24h 内 35 个 PR 变动、15 个 Issue 变动）。三大主线清晰可见：**CI/CD 基础设施现代化**（由 @henrypark133 主导的 T1–T4 轨道集体落地）、**Sandbox 凭据治理**（@serrrfirat 三轮迭代 GitHub CLI 凭据中继）、以及**通知中心向持久化 Inbox 演进**（@italic-jinxin 的史诗 #7687 子任务集中关闭）。合并速度健康（16 个 PR 已关闭/合并），无新版本发布，节奏稳定且偏内部基建。

---

## 2. 版本发布

**无新版本发布。** 当前 `release/2026-08-17` 分支仍是最新活跃线（见 [PR #7804](https://github.com/nearai/ironclaw/pull/7804)、[#7805](https://github.com/nearai/ironclaw/pull/7805) 中对 `release/2026-08-17` 与 `release/2026-08-11` 的对比）。

---

## 3. 项目进展（已合并/关闭 PR）

今日 16 个 PR 进入已关闭状态，体现项目在**质量基线、凭据安全、通知可靠性**三方面同步推进：

| 主题 | PR | 影响 |
|---|---|---|
| Agent 指导文档治理 | [#7797](https://github.com/nearai/ironclaw/pull/7797) | **XL 规模**：13 路并行审计 + 6 轮修复，**裁剪 21.5k 行冗余文档**，统一 `AGENTS.md` 规范。显著降低新贡献者认知负担 |
| Clippy 回归修复 | [#7805](https://github.com/nearai/ironclaw/pull/7805) | 修复 1.98 lint 在所有 PR 上的阻塞性编译失败，向 `1.3` 分支 forward-port |
| 工作区根环境变量 | [#7804](https://github.com/nearai/ironclaw/pull/7804) | 将 `IRONCLAW_REBORN_WORKSPACE_ROOT` 覆盖从 `2026-08-11` 分支移植到 `1.3`，修复 CLI 启动路径 |
| Telegram 通道配对 | [#7803](https://github.com/nearai/ironclaw/pull/7803) | 修复 pairing 后保持 bot 存活、消除草稿重复，并解决与 #7715 关联的"混淆为个人账号"问题 |
| Sandbox Railway 审计 | [#7796](https://github.com/nearai/ironclaw/pull/7796) | 失败时 fail-closed 并保留暂存记录，避免审计链路静默丢失 |
| 通知-操作门事件 | [#7699](https://github.com/nearai/ironclaw/pull/7699) | 将 approval/auth/blocked-run 事件写入持久 Inbox，配合 #7689、#7690 完成通知中心首阶段通用化 |
| Sandbox GitHub 凭据中继（迭代 2/3） | [#7806](https://github.com/nearai/ironclaw/pull/7806)、[#7807](https://github.com/nearai/ironclaw/pull/7807) | 由 [PR #7810](https://github.com/nearai/ironclaw/pull/7810) 接力——后者是当前最新活跃版 |

**整体判断：** 合并量集中在"清理债 + 安全债"两类工作，项目正在为下一波功能交付（设计系统、Memory MCP、Run Outcome 判定）打地基。

---

## 4. 社区热点

**评论最集中的议题**（按评论数排序）：

| 排序 | 编号 | 标题 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | #7801 | CI expedite T4：规范 preflight、统一 gate 列表 | 3 | [链接](https://github.com/nearai/ironclaw/issues/7801) |
| 2 | #7799 | CI expedite T2：nextest 流水线、全量失败信号、PR 并行解限 | 3 | [链接](https://github.com/nearai/ironclaw/issues/7799) |
| 3 | #7664 | Memory over MCP 插拔：接入 Mnesis 首消费者 | 2 | [链接](https://github.com/nearai/ironclaw/issues/7664) |
| 4 | #7800 | CI expedite T3：PR/queue 一致性、planner 防漂移 | 2 | [链接](https://github.com/nearai/ironclaw/issues/7800) |
| 5 | #7798 | CI expedite T1：setup-rust 复合 action、mold linker | 2 | [链接](https://github.com/nearai/ironclaw/issues/7798) |

**诉求分析：**
- **T1–T4 形成清晰"CI 现代化矩阵"**，均由 @henrypark133 提出并配套 PR（[#7809](https://github.com/nearai/ironclaw/pull/7809) 已开工 T4 Task 1–5）。其核心诉求是**消除 43 处散落的 `dtolnay/rust-toolchain` 调用**（[#7798](https://github.com/nearai/ironclaw/issues/7798)）、**消灭"绿 PR / 红 queue"的发散**（[#7800](https://github.com/nearai/ironclaw/issues/7800)），并**让本地 preflight 与 CI gate 完全一致**（[#7801](https://github.com/nearai/ironclaw/issues/7801)）。这是典型的"开发者体验 → 交付吞吐"链路修复。
- **#7664（Memory MCP）** 反映出社区对**记忆层可插拔**的期待——希望外部 memory provider（Mnesis）能通过配置绑定而非硬编码，这与 [#7808](https://github.com/nearai/ironclaw/issues/7808)（写路径脱敏）联动。

**值得关注的高影响力 PR：**
- [#7516](https://github.com/nearai/ironclaw/pull/7516) IronHub Agent Link 的 WebUI 操作面（新贡献者 @neo-sky，XL 规模）
- [#7811](https://github.com/nearai/ironclaw/pull/7811) Xquik 托管 MCP 集成（新贡献者 @kriptoburak，用 OAuth 2.1 + PKCE 取代浏览器 Cookie）
- [#7810](https://github.com/nearai/ironclaw/pull/7810) Sandbox 中继 `gh` 凭据（每用户托管出口 + 调用归属）

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 标题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 高（安全） | [#7808](https://github.com/nearai/ironclaw/issues/7808) | **Memory 写路径缺少 redaction + taint 元数据**：外部 provider 绑定前，对话原文直接出网 | OPEN，0 评论 | **暂无 fix PR** — 这是 #7664 的前置条件，需在写出网关前修复 |
| 🟠 中 | [#7783](https://github.com/nearai/ironclaw/issues/7783) | LLM 超时策略：finalization 无法测量 TTFT，retry 预算装不进 deadline | **CLOSED** | 已关闭但未列出对应 fix PR，需确认 commit 落在哪条分支 |
| 🟡 中 | [#7715](https://github.com/nearai/ironclaw/issues/7715) | Telegram 连接流程缺少 bot / 个人账号的同意选择 | **CLOSED** | [#7803](https://github.com/nearai/ironclaw/pull/7803) 已合并 |
| 🟡 中（回归） | [#7805 引发的 clippy 1.98 失败](https://github.com/nearai/ironclaw/pull/7805) | 阻塞所有入 `release/2026-08-17` 的 PR | **CLOSED** | [#7805](https://github.com/nearai/ironclaw/pull/7805) 已合并 forward-port |
| 🟢 低（UX） | [#7813](https://github.com/nearai/ironclaw/issues/7813) | 聊天首页"Suggested for you"面板出现时标题被裁剪 | OPEN，0 评论 | 暂无 fix PR |

**风险提示：** [#7808](https://github.com/nearai/ironclaw/issues/7808) 是**今日唯一未修复的高优先级安全问题**，与 [#7664](https://github.com/nearai/ironclaw/issues/7664) 形成强耦合，建议在接入任何外部 memory provider 之前优先处理。

---

## 6. 功能请求与路线图信号

| 信号 | 编号 | 落地路径预判 |
|---|---|---|
| 接入已连接工具生成 onboarding 建议（用户级权限、只读） | [#7812](https://github.com/nearai/ironclaw/issues/7812) | 与 [#7802](https://github.com/nearai/ironclaw/pull/7802)（OOBE 建议默认开启）方向一致，**有望合并入下个版本** |
| WebUI 通知中心 → 持久 Inbox（史诗） | [#7687](https://github.com/nearai/ironclaw/issues/7687) | 子任务 [#7689](https://github.com/nearai/ironclaw/issues/7689)、[#7690](https://github.com/nearai/ironclaw/issues/7690)、[#7699](https://github.com/nearai/ironclaw/pull/7699) 已完成；[#7700](https://github.com/nearai/ironclaw/pull/7700) 在途 |
| 设计系统（Storybook + Catalog）| [#7257](https://github.com/nearai/ironclaw/pull/7257)、[#7750](https://github.com/nearai/ironclaw/pull/7750) | 由 @rdisandro 主导的 Epic #7038 阶段 1 推进中，#7792、#7793、#7794 共享底层 |
| Memory MCP 插拔 | [#7664](https://github.com/nearai/ironclaw/issues

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI project and generate a comprehensive daily report for 2026-08-22.

Key observations:
1. No new releases today
2. 2 issues were closed (both marked as stale, from April 2026)
3. 13 PRs were updated - 12 closed/merged, 1 still open
4. Most activity is concentrated around PR #2519 which is a release merge for 2026.8.21
5. Multiple DSH (DeepSeek Harness) related PRs were merged
6. Library improvements (PRs #2513, #2514, #2517) were all merged
7. Several stale PRs from April were closed
8. PR #1550 remains open - a bug fix for scheduled task delivery mode

Let me structure the report according to the requested sections:

1. Today's overview - summarize activity level
2. Releases - none today, but there's the 2026.8.21 release being merged
3. Progress - merged PRs analysis
4. Community hot spots - discussions
5. Bugs and stability - both closed issues were bugs
6. Feature requests - none new today
7. User feedback - from closed issues
8. Pending backlog - PR #1550 is the main one

Let me write this in Chinese as requested.</think>

# LobsterAI 项目日报

**日期**：2026-08-22  
**数据范围**：过去 24 小时  
**仓库**：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 今日活跃度较高，核心进展集中在 **2026.8.21 版本合入主线（PR #2519）**，围绕实验性 DeepSeek Harness（DSH）运行时升级、Windows 集成可靠性以及隐私友好的使用分析展开。过去 24 小时内关闭/合并 **12 个 PR**，关闭 **2 个 Issues**，新开 Issues 与 PR 均为 0，整体处于"批量收尾 + 版本合入"的节奏。值得注意的是，今天处理的 PR 中有 **7 个为 4 月份积压的 stale PR**（由自动化或维护者集中清理），实际"当日新增"的有效推进为 5 个 PR，项目仓库活跃度需结合更长周期观察。

---

## 2. 版本发布

**今日无新 Release 发布。**

但今日最重要的进展是 **PR #2519** 将 `release/2026.8.21` 分支合入 `main`，意味着版本 2026.8.21 已基本就绪，等待后续打 tag 发布。本次版本主要变更：

- **DSH 运行时升级**：实验性 DeepSeek Harness 升级至 `0.1.1-rc.1`（PR #2516）
- **Windows 集成可靠性提升**
- **DSH 隐私使用分析**：记录 DSH 启用开关与 workbench 打开行为（PR #2515、#2518），事件"即发即弃"，不向 IPC 调用者抛出异常
- **资料库交互优化**（详见下文项目进展）

> 建议关注者查阅 [PR #2519](https://github.com/netease-youdao/LobsterAI/pull/2519) 的关联 PR 列表（#2515、#2516、#2518）了解完整变更。

---

## 3. 项目进展

今日合入主线/关闭的重要 PR 共 5 个（按主题分组）：

### 🚀 DSH（DeepSeek Harness）相关
- **[PR #2516](https://github.com/netease-youdao/LobsterAI/pull/2516)** – feat: update dsh to 0.1.1-rc.1  
  实验性 DSH 运行时升级，伴随 Windows 兼容性改进。
- **[PR #2515](https://github.com/netease-youdao/LobsterAI/pull/2515)** – feat(dsh): add usage analytics for enable toggle and workbench open  
  新增 DSH 功能开启与 workbench 打开的成功/失败埋点，文档同步更新。
- **[PR #2518](https://github.com/netease-youdao/LobsterAI/pull/2518)** – refactor(dsh): move usage analytics reporting from main to renderer  
  将分析事件构建从 main 进程迁移至 renderer 侧服务（`src/renderer/services/dshAnalytics.ts`），并修复分析信标的重复日志问题。

### 📚 资料库 / 本地产物
- **[PR #2513](https://github.com/netease-youdao/LobsterAI/pull/2513)** – Feat/2026.8.17 library  
  2026.8.17 资料库特性合入。
- **[PR #2514](https://github.com/netease-youdao/LobsterAI/pull/2514)** – feat(library): 优化本地产物预览与操作体验  
  调整预览弹窗尺寸与安全区适配、移除冗余的删除入口、区分空状态与"无结果"状态、本地/云端搜索框新增一键清空、修复发布额度弹窗占位符重复替换问题。
- **[PR #2517](https://github.com/netease-youdao/LobsterAI/pull/2517)** – fix(library): 完善文件分享与收藏交互  
  分享打包保留 Unicode 文件名、兼容历史版本、即时更新收藏状态并支持失败回滚、统一订阅/发布额度弹窗样式焦点，附带自动化测试。

### 🧹 性能与稳定性（历史 stale PR 关闭）
- **[PR #1219](https://github.com/netease-youdao/LobsterAI/pull/1219)** – perf(cowork): 消除会话列表/详情页无效重渲染  
  为 `CoworkSessionItem`/`CoworkSessionList` 增加 `React.memo`，合并 `CoworkSessionDetail` 的 4 个 `useSelector` 调用。
- **[PR #1220](https://github.com/netease-youdao/LobsterAI/pull/1220)** – perf(cowork): 消除 recentChats/conversationSearch 的 N+1 查询  
  合并每 session 的两次独立查询为一次批量查询，性能明显提升。
- **[PR #1215](https://github.com/netease-youdao/LobsterAI/pull/1215)** – fix(im): 始终重建 chat handler 避免 imSe…  
  修复平台凭证（DingTalk/Telegram）保存后未触发 `updateChatHandler` 导致的 systemPrompt、skill 配置不生效问题。
- **[PR #1218](https://github.com/netease-youdao/LobsterAI/pull/1218)** – fix(定时任务): 重构任务列表排序规则  
  解决新建任务随机出现在列表中间的问题，改用 `nextRunAtMs` 升序排序，相同时间按创建时间戳兜底。
- **[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)** – fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击  
  关联关闭 Issue #1223（详见下文）。

**整体评估**：项目在资料库 UX、Cowork 性能、IM 配置一致性方面均有实质性推进，DSH 模块正在快速迭代；与上一日相比推进幅度"中等偏高"。

---

## 4. 社区热点

今日评论与互动最多的两条 Issue 均集中于 **Bug 报告**，且均为 **stale 标签** 后被维护者关闭：

| 排名 | Issue | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| 1 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) – i18n 硬编码 + Agent 弹窗 UX | 2 | 0 | CLOSED（已修复于 #1224） |
| 2 | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) – 偶发重启网关 | 2 | 0 | CLOSED（stale 关闭，无 fix PR） |

**诉求分析**：
- **#1223** 反映用户在英文系统下仍看到中文字符串、Agent 弹窗缺少 Escape 关闭快捷键与删除防抖——属于**国际化与基础 UX 规范**问题，与项目 `AGENTS.md` 中 "Never hardcode strings" 规则直接冲突。该问题已被 #1224 在同一 PR 修复，体现维护者对 i18n 规范的重视。
- **#1217** 描述 Windows 10 环境下运行期间偶发（一天 3-5 次）重启网关，问题严重且**无对应修复 PR**，stale 关闭后用户后续是否需要重开值得关注。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（高影响 + 无修复）
- **[Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217)** – 运行中偶发重启网关（Win10，2026.3.26 版本）  
  - 严重程度：高（影响正常使用、1 天多次）  
  - 修复 PR：❌ 无  
  - 处置状态：⚠️ stale 关闭（非修复关闭）  
  - **风险提示**：用户问题未被真正解决，可能在后续版本中复现，建议维护者评估是否需要 reopen 或转入 backlog。

### 🟡 中等（已修复）
- **[Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223)** – i18n 硬编码 + Agent 弹窗 Escape / 删除防抖缺失  
  - 严重程度：中（影响英文用户体验与交互一致性）  
  - 修复 PR：✅ [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 已合并

### 🟢 轻微（已修复）
- **[PR #1215](https://github.com/netease-youdao/LobsterAI/pull/1215)** – IM 平台凭证保存后 chat handler 未刷新  
  - 影响：钉钉/飞书/Telegram 平台凭证保存后 systemPrompt、skill 等配置不生效
  - 状态：✅ 已修复关闭

### ⏳ 待修复
- **[PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550)** – 投递模式为"不通知"时仍携带 channel/to 字段导致网关校验失败  
  - 状态：🟡 OPEN，已超过 4 个月未合并  
  - 影响：会话/IM 路径创建的定时任务实际触发时报错  
  - **建议**：维护者重点 review，已知存在功能 bug。

---

## 6. 功能请求与路线图信号

今日**无新功能请求 Issue**，但从已合入 PR 可推断下一阶段路线图方向：

1. **DSH 持续投入**（#2515、#2516、#2518）：隐私埋点基础设施完善 → 暗示后续会有更多 DSH 功能灰度与 A/B 验证。
2. **资料库作为重点打磨模块**（#2513、#2514、#2517）：分享、收藏、预览三大交互链路集中优化，提示资料库可能是 2026 下半年的核心场景。
3. **Cowork 性能优化**（#1219、#1220）：会话列表与搜索的渲染/查询优化，暗示未来 Cowork 模式将承载更大数据量。

---

## 7. 用户反馈摘要

从今日关闭的 Issue 评论中提炼：

- **多语言用户真实痛点**（[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)）：英文系统用户发送带附件的提示词时，中文标签"输入文件"被错误地发给 AI 模型，影响生成质量。用户还要求 Agent 弹窗支持 Escape 关闭与删除按钮防抖，反映**专业用户对键盘效率与操作可预期性的高要求**。
- **网关稳定性焦虑**（[#1217](https://github.com/netease-youdao/LobsterAI/issues/1217)）：用户对"运行中偶发重启"非常敏感，且对 2026.3.26 版本日志被要求自行打包上传的反馈方式存在一定门槛，提示维护者需考虑**简化用户日志提交流程**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 当前状态 |
|---|---|---|---|---|
| 🔴 PR | [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | 投递模式"不通知"去除 channel/to 字段 | 2026-04-07 | OPEN，已 4 个多月 |
| 🟡 Issue | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | 偶发启动网关 | 2026-04-01 | stale CLOSED（建议 reopen 跟进） |

**提醒维护者**：
- PR #1550 是一个明确的用户场景 bug，根因清晰（`mode=none` 时手动 vs 会话创建路径构建 delivery 对象不一致），影响 IM 路径创建的定时任务实际触发，应优先处理。
- Issue #1217 在 stale 关闭后无后续修复闭环，建议在下一个 sprint 排期内评估并向用户回访。

---

**报告生成时间**：2026-08-22  
**数据来源**：LobsterAI GitHub 仓库公开数据  
**备注**：本报告基于公开数据自动生成，观点仅供参考。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a daily project report for QwenPaw (a GitHub project at agentscope-ai/QwenPaw) dated 2026-08-22. I need to analyze the provided GitHub data and create a structured report with 8 sections.

Let me analyze the data:

**Overview:**
- Past 24h Issues: 34 (19 new/active, 15 closed)
- Past 24h PRs: 34 (21 pending, 13 merged/closed)
- No new releases

**Key Issues to highlight (by comment count):**
1. #6524 - MCP backend restart client reconnect issue (6 comments, OPEN)
2. #6780 - 2.0.1 hangs after long idle (4 comments, CLOSED)
3. #7016 - Tool call 404 (3 comments, OPEN)
4. #7156 - Embedding health check timeout (3 comments, OPEN)
5. #7206 - v2.1.1-beta.1 manual /compact fails (2 comments, OPEN)
6. #7204 - How to add custom tools (2 comments, OPEN)
7. #7197 - MCP tool auth rules can't select custom channel (2 comments, OPEN)
8. #6427 - WebView2 crash (2 comments, OPEN)
9. #6430 - Startup hang (2 comments, OPEN)
10. #7136 - File card mojibake (2 comments, OPEN)
11. #7168 - history.db bloat (2 comments, CLOSED)

**Key PRs (recent activity):**
1. #7190 - PyPI runtime path for qwenpaw-data
2. #7187 - Disable thinking for title generation
3. #7211 - Prevent injected context persistence
4. #6808 - Show custom profile markdown files
5. #7113 - Transactional patching, managed PTY
6. #7167 - Creator 1.1.0 with image/video providers
7. #6399 - Reranker UI config panel
8. #5992 - Per-session model overrides
9. #7205 - Windows coverage fix (CLOSED)
10. #7209 - E2E cases fix
11. #7112 - QwenPaw Hub multi-user (CLOSED)
12. #6976 - Session-scoped multi project dirs
13. #7208 - DingTalk shared session
14. #7176 - Long chat responsiveness (CLOSED)
15. #7207 - Token usage by agent
16. #6607 - Global-hotkey floating input
17. #7194 - Workspace startup cancellation-safe
18. #7175 - Free model listings
19. #7202 - Mailbox docs
20. #7200 - Bump to v2.1.1b2 (CLOSED)

**Closed PRs today:**
- #7205 - Windows integration coverage fix
- #7112 - QwenPaw Hub (rejected/closed)
- #7176 - Long chat responsiveness perf
- #7200 - Version bump to v2.1.1b2

**Closed Issues today:**
- #6780 - Hang issue
- #7168 - history.db bloat
- #5580 - app-infra backend tests
- #5437 - frontend M3-B tests
- #5433 - frontend M3-A tests
- #5419 - runner module tests
- #5007 - M3+M4 frontend tests
- #5006 - M2 frontend tests
- #5005 - M1 frontend tests
- #5004 - M1 frontend tests
- #4855 - Windows drag-drop upload
- #4854 - Windows file size limit
- #4816 - History sort order

The closed issues show a lot of frontend test coverage work being completed (M1, M2, M3+A, M3+B, etc.)

Now let me write a comprehensive, well-structured report in Chinese.</think>

# QwenPaw 项目动态日报
**日期：2026-08-22**

---

## 1. 今日速览

QwenPaw 仓库在过去 24 小时保持高活跃度，**共处理 34 条 Issue 和 34 条 PR**，新开/活跃 19 条 Issue 已关闭 15 条，21 条待合并 PR 中已有 13 条关闭或合并，整体响应节奏稳定。本日没有新版本发布，但 **v2.1.1-beta.1→v2.1.1b2 的版本号调整 PR（#7200）已被关闭**，暗示维护者倾向以正式版而非 beta 节奏推进。社区讨论焦点集中在 **MCP 连接稳定性、自定义工具/频道扩展、WebView2 渲染崩溃以及 UI 视觉干扰** 四类问题，前端测试覆盖率建设（M1/M2/M3-A/M3-B）相关 Issue 已全部集中关闭，项目在工程化与测试基建方面取得阶段性进展。综合判断：**项目处于活跃迭代与质量收口期，Bug 反馈集中但响应较快，健康度良好**。

---

## 2. 版本发布

⚠️ 本日无新版本发布。

值得关注：版本号推进 PR #7200（v2.1.1b2）已关闭，结合近期大量 v2.1.0 / v2.1.1-beta.1 反馈，维护者可能在准备 v2.1.1 正式版或回退方案。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7205](https://github.com/agentscope-ai/QwenPaw/pull/7205) | test(coverage): 修复 Windows 集成覆盖率始终为 0 | **CI 质量门禁修复**：自 6 月以来 Windows nightly 集成覆盖率持续静默上传 0 行执行数据，新增 fail-closed 守卫防止再次发生 |
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | perf(console): 长会话保持响应 | **性能优化**：消除流式更新重复解析 Markdown、长历史卡顿等问题 |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | feat(hub): 自托管多用户 Hub（已关闭） | **架构探索**：Hub 多用户控制面板方案被关闭，官方倾向保留单租户 `qwenpaw app` 主线 |
| [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) | chore: 升级至 v2.1.1b2（已关闭） | 版本节奏信号：beta 路线被回退 |

**整体推进评价**：今日合并/关闭的 PR 集中在 **测试基建完善 + 性能优化 + 可观测性** 三方面，是典型的"质量收口期"动作，并未引入重大新功能，研发重心正从"快速增加特性"转向"提升稳定性"。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue

1. **[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) - MCP 后端重启后客户端无法自动恢复（6 条评论）**
   - 核心痛点：`streamable_http` 模式下 MCP Server 重启后，QwenPaw 复用旧 `mcp-session-id`，工具查询失败，需手动执行 `list mcp` 才能恢复
   - 这是 MCP 生态的通用难题，社区反复出现

2. **[#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) - 2.0.1 闲置几十分钟后卡死（4 条评论，已关闭）**
   - 长会话稳定性问题，关闭后未见明确修复说明，建议跟踪回归

3. **[#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) - Embedding health check 硬编码 5s 超时（3 条评论）**
   - Ollama embedding 后端预热后仍触发 health check 超时，导致向量召回降级为 BM25-only；建议将超时时间暴露为配置项

4. **[#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) - 工具调用 404（3 条评论）**
   - 流式会话时 `/tool-calls/{session_id}/{tool_call_id}/offload` 持续返回 404，影响前端交互稳定性

### 🆕 当日新开高关注 Issue

- **[#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206)** - v2.1.1-beta.1：`/compact` 在 `compact_threshold_ratio == 0.9` 时 pydantic ValidationError 失败（**v2.1.1 beta 版本回归**）
- **[#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210)** - agent.json 全启用但 session 函数 schema 未注入内置工具（工具面暴露不一致）
- **[#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199)** - `daily_paper` 在 PDF 含 surrogate 字符时 `write_atomic` 崩溃
- **[#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193)** - 网页版 agent 自动搜索记忆串会话（同一 agent 不同会话内容混淆）

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能/数据）

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 P0 | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168)（已关闭） | `history.db` 被 `recall_history` 撑爆至 7.6GB，同一区间重复落库 | 待验证，需关注后续回归 |
| 🔴 P0 | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)（已关闭） | v2.0.1 闲置后进程卡死 | 未见明确修复 PR |
| 🔴 P0 | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 渲染进程 `msedge.dll+0x36c7f6d` 崩溃（v2.0.0+post.4 回归，post.3 正常） | 无 |
| 🔴 P1 | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | v2.1.1-beta.1 `/compact` 必失败（pydantic 验证错误） | 无 |
| 🔴 P1 | [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | 桌面端启动卡死约 85 秒 | 无 |

### 🟡 中等（功能降级/体验问题）

| 严重度 | Issue | 描述 |
|---|---|---|
| 🟡 P2 | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | Embedding health check 硬编码 5s 超时 |
| 🟡 P2 | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 工具调用流式 404 |
| 🟡 P2 | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | 内置工具全启用但 schema 未注入 |
| 🟡 P2 | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | daily_paper 遇 surrogate 字符崩溃 |
| 🟡 P2 | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 网页版记忆召回串会话 |
| 🟡 P2 | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP 会话失效后无自动恢复 |
| 🟡 P2 | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | `send_file_to_user` 中文文件名 percent-encoded 乱码 |
| 🟢 P3 | [#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195) | 桌面全屏后图标遮挡 |

**稳定性诊断**：v2.1.0 → v2.1.1-beta.1 出现明显回归迹象（`/compact` 失败、WebView2 崩溃、MCP 重连），建议维护者在合并 #7206 类修复前暂缓发版。

---

## 6. 功能请求与路线图信号

### 已被 PR 实现的请求

| 需求 | 对应 Issue | 实现 PR | 状态 |
|---|---|---|---|
| Windows 文件拖拽上传 | [#4855](https://github.com/agentscope-ai/QwenPaw/issues/4855)（已关闭） | — | 已合入 |
| Windows 文件上传解除大小限制 | [#4854](https://github.com/agentscope-ai/QwenPaw/issues/4854)（已关闭） | — | 已合入 |
| 历史会话按最近对话时间排序 | [#4816](https://github.com/agentscope-ai/QwenPaw/issues/4816)（已关闭） | — | 已合入 |
| 钉钉群共享会话上下文 | （需求） | [#7208](https://github.com/agentscope-ai/QwenPaw/pull/7208) | 待合并 |
| 桌面全局热键浮窗 | [#6568](https://github.com/agentscope-ai/QwenPaw/issues)（隐藏）+ [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | 同左 | 待合并 |
| 自定义 Persona markdown 显示 | — | [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | 待合并 |

### 高需求新功能（待评估进入下版本）

1. **可配置 UI 折叠**（[#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) + [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203)）：希望默认折叠工具调用/推理过程，参考 Hermes 设计——**3+ 用户同日提出**，强烈信号
2. **审批模式智能化**（[#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)）：对任务中临时产物免审批——典型"自动化执行夜间任务"场景痛点
3. **按 provider 分别配置 max_image/video/audio_bytes**（[#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201)）：精细化媒体上限管理
4. **qwenpaw 增加自定义 tool**（[#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204)）：扩展性诉求，社区教学需求
5. **MCP 工具授权支持自定义频道**（[#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197)）：插件生态闭环

### 路线图信号

- **Creator 1.1.0** ([#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167))：接入主流图像/视频生成供应商 + Anthropic/Gemini 协议，对话门控视频分发——多模态创作能力跃迁
- **qwenpaw-data 1.0 路线** ([#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190))：PyPI 安装路径、docker-compose 演示、GAAP demo 完整闭环——数据/知识图谱模块正式化
- **Hub 多用户架构**（#7112 已关闭）：官方短期不在主线，倾向于单租户深耕

---

## 7. 用户反馈摘要

### 🗣️ 真实使用场景与痛点

- **"夜间甩手掌柜"场景**（[#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)）：用户希望 agent 夜间独立执行长任务，但当前审批模式频繁打断；中间产物审批被认为无意义
- **专业工作场景的视觉干扰**（[#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) / [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203)）：审核合同、做研报时推理过程和工具调用信息"除了造成视觉干扰，没有任何正面意义"，希望默认折叠
- **长会话稳定性焦虑**（[#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) / [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168)）：高负载/长任务用户对数据库膨胀、进程卡死极为敏感
- **桌面端与网页端一致性**（[#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193)）：网页版（qwenpaw.platform.agentscope.io）记忆召回出现跨会话内容混淆，影响信任度
- **MCP 生态依赖**（[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)）：用户已广泛使用 `streamable_http` 远程 MCP server，断连恢复是刚需
- **不满意点**：UI 信息密度过高、审批粒度粗、对中文文件名等本地化细节处理不完善、桌面端全屏布局问题

### 👍 满意方向

- 测试覆盖建设带来的信心（M1/M2/M3-A/M3-B 测试用例集中落地）
- 文档持续完善（[#7202](https://github.com/agentscope-ai/QwenPaw/pull/7202) Mailbox 管理文档）

---

## 8. 待处理积压

### ⏰ 长期未解决的高优先级问题

| Issue | 创建日期 | 等待天数 | 状态 |
|---|---|---|---|
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) WebView2 渲染崩溃 | 2026-07-24 | ~29 天 | OPEN，无 fix PR |
| [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) 启动挂起 85 秒 | 2026-07-24 | ~29 天 | OPEN，无 fix PR |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP 自动重连 | 2026-07-28 | ~25 天 | OPEN，讨论活跃但无 PR |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) PR per-session model overrides

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent and generate a comprehensive daily report for 2026-08-22.

Key observations from the data:

1. **Activity Overview:**
   - 50 Issues updated (46 new/active, 4 closed)
   - 50 PRs updated (46 pending, 4 merged/closed)
   - 1 new release: v2026.8.19 (v0.20.5) - patch release

2. **Release Analysis:**
   - v0.20.5 (v2026.8.19) is a patch release rolling up ~323 PRs since v0.20.4
   - Released August 19, 2026 (3 days ago)
   - Stable tag for downstream consumers

3. **Top Issues by comments:**
   - #78647 [CLOSED] - Large-file decomposition epic (78 comments) - closed today
   - #66616 [OPEN] - Skills index stale/degraded (72 comments) - automated probe failure
   - #90473 [OPEN] - "Show earlier messages" paging UX issue (11 comments) - Windows 11 user frustration
   - #68592 [OPEN] - Cron agents getting mandatory kanban_show protocol (10 comments)
   - #79564 [OPEN] - Discord Feature Parity campaign meta-issue (9 comments)
   - #79890 [OPEN] - WhatsApp Feature Parity campaign meta-issue (8 comments)
   - #91277 [OPEN] - Fleet update reliability tracking (7 comments) - P1
   - #90866 [OPEN] - Observable state proof-carrying architecture (7 comments)

4. **Closed Issues Today:**
   - #78647 - Large-file decomposition (78 comments, COMPLETE)
   - #88534 - Desktop session tab bar disappears (CLOSED)
   - #91979 - Configured MCP silently disabled (CLOSED as Duplicate)

5. **Notable PRs:**
   - #62944 / #71686 - Single gateway multi-agent (long-running architectural feature, stacked PRs)
   - #91906 - P0 dependency security remediation
   - #91971 - P1 fix keeping Kanban dispatch running
   - #91277 - P1 tracking issue for fleet update reliability

6. **Bug patterns observed:**
   - Windows-specific issues (gateway start, browser use CLI)
   - macOS issues (keychain prompts after update)
   - Linux/Wayland issues (HUD drag broken)
   - Cross-platform issues (session state, compression)
   - Security issues (secret redaction missing)

7. **User feedback signals:**
   - Strong frustration on Windows with gateway start behavior
   - User using Chinese language to express frustration on "show more messages" UX
   - Discord/WhatsApp/Slack platform feature parity campaigns

8. **Architecture trends:**
   - Multiple "proof-carrying" architecture issues
   - Session state reliability concerns
   - Bot Mode control plane unification
   - Generation identity fencing
   - State observability

Let me structure this into a comprehensive daily report in Chinese.

Let me also note the dates carefully - the report is for 2026-08-22. The release was on 2026-08-19. The "today" in the report refers to 2026-08-22.

Key data points to include:
- Release: v2026.8.19 (3 days ago)
- Most active issue: #78647 (closed) - the god-file sharding epic
- Skills index still degraded (29.8h old, limit 26h)
- P1 issue: Fleet update reliability
- Long-running architectural PRs still open: #62944, #71686

Let me write this up now.</think>

# Hermes Agent 项目日报
**日期：2026-08-22**
**数据周期：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 今日保持高强度开发节奏：**50 条 Issues 更新、50 条 PR 更新**。v0.20.5 (v2026.8.19) 补丁版本已于 3 天前发布，将自 v0.20.4 以来的 ~323 个 PR 汇总为稳定版本。社区讨论热度集中在两类话题：**(1) 跨平台稳定性**（Windows 网关启动、macOS 钥匙串、Linux/Wayland HUD 拖拽）与 **(2) "可证明状态"架构收敛**（多项 P3 架构议题密集出现）。最大事件是 **#78647 "God-file 大文件拆分"史诗级 Issue 完成关闭**（78 评论），标志着 20/20 god-files 重构全部落地。

活跃度评估：**🟢 高**。Issue/PR 数据齐头并进，且有重要架构里程碑收官。

---

## 2. 版本发布

### v2026.8.19 — Hermes Agent v0.20.5（补丁版本）
- **发布日**：2026-08-19（3 天前）
- **类型**：Patch release（汇总性稳定版本）
- **变更规模**：合并自 v0.20.4 以来的 ~323 个 PR
- **用途说明**：为下游消费者（Docker 镜像、托管部署、新装用户）提供稳定 tag
- **破坏性变更**：未在公告中提及；按语义化版本应无破坏性变更
- **迁移注意事项**：建议生产环境直接固定到 `v2026.8.19` tag 而非 `main`
- 🔗 [Release 链接](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19)

> ℹ️ 由于仅汇总 PR，实质功能变更需查阅 commit log；建议关注 323 个 PR 的合并窗口与 `main` 的差异审计。

---

## 3. 项目进展

### 今日合并/关闭的 PR 与里程碑

| 编号 | 标题 | 状态 | 意义 |
|---|---|---|---|
| #78647 | 大文件拆分 epic 20/20 完成 | 🔒 Closed [COMPLETE] | **重要里程碑**：god-file 拆分工作收官，全仓进入"已分片、不可回滚"阶段 |
| #88534 | Desktop 顶部 session tab bar 消失 | 🔒 Closed | 修复 sidebar 持久化缺陷 |
| #91979 | MCP 在网关 SDK 缺失时被静默禁用 | 🔒 Closed（Duplicate → #47509） | 文档化问题归集到 #47509 |
| #88551（关联 #88740/#88758） | 压缩：水印在 replay/alteration 后保留 | 持续推进 | 推进持久化会话水印一致性 |

### 实质性推进方向
- **可证明状态架构系列**（多条 P3 架构 Issue 出现于 24h 内）：状态来源限定、原子发布、所有者作用域、真值报告、打包验证 — Hermes 正在形成"第六条法则"（#91230：任务完成验证）
- **Bot Mode 控制平面统一**（#91911）：将身份、能力、投递、取消收敛到单一控制对象
- **生成身份围栏**（#90145）：恢复/拆卸/清理/对账/发布都必须比较持久化生成/化身

项目整体方向：**架构可信性收敛** + **多代理网关扩展**（#62944/#71686 仍在评审中）。

---

## 4. 社区热点

### 评论区最热议题

| 排名 | 编号 | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 78 | 大文件拆分 epic（已关闭）|
| 2 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 72 | Skills index 降级（29.8h 过期，限制 26h）|
| 3 | [#90473](https://github.com/NousResearch/hermes-agent/issues/90473) | 11 | 长会话"显示更多消息"分页 UX 灾难 |
| 4 | [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) | 10 | Cron agent 被强制注入 kanban_show 协议 |
| 5 | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | 9 | Discord API v10 功能对齐 meta |
| 6 | [#79890](https://github.com/NousResearch/hermes-agent/issues/79890) | 8 | WhatsApp 功能对齐 meta |
| 7 | [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | 7 | **P1** Fleet 更新可靠性 tracking |
| 8 | [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) | 7 | 可证明状态架构 |

### 诉求分析

- **#66616 Skills index 持续 29.8h 过期**（超过 26h 限制）已是一个反复出现的自动探针失败，说明重建 cron 工作流（`skills-index.yml` 每 6/18 UTC 触发）可能多次未按预期触发。72 条评论说明社区对此基础设施可靠性已经失耐。
- **平台功能对齐 meta-issue 集中化**：Discord / WhatsApp / Slack 三大平台被分别用独立 meta-issue 组织（#79564 / #79890 / #79772），表明社区已默认接受"分平台对齐"是阶段性主轴。
- **#91277 升级为 P1**：作者 `@teknium1` 亲自立项，明确指出"~30 个 open issues、~15 个 open PRs 各打补丁"，呼吁统一 fleet 更新规划 — 这是一个**自上而下**的协调信号。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) **P1** | Fleet 更新可靠性统一部署规划 | ❌ 仍为 tracking |
| [#89083](https://github.com/NousResearch/hermes-agent/issues/89083) **P2** | macOS 睡眠唤醒后 Desktop 永久卡死（半开 WebSocket 未检测）| ❌ |
| [#91675](https://github.com/NousResearch/hermes-agent/issues/91675) **P2** | Windows：网关 6s 活跃探针后仍输出 ✓ 后死亡 | ❌ |
| [#88740](https://github.com/NousResearch/hermes-agent/issues/88740) **P2** | 压缩：跨 child/CLI/ACP 恢复时水印丢失 | ❌ |
| [#88758](https://github.com/NousResearch/hermes-agent/issues/88758) **P2** | 压缩：replay 清理后裸水印未保留 | ❌ |

### 🟡 中优先级

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#47509](https://github.com/NousResearch/hermes-agent/issues/47509) **P2** | MCP 发现失败以 DEBUG 记录，默认日志级不可见 | ❌（7 周未关闭）|
| [#90200](https://github.com/NousResearch/hermes-agent/issues/90200) **P2** | GitHub 自动化分裂授权：metadata 写成功而 repo-object 写 403 | ❌ |
| [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) **P2** | macOS 更新后钥匙串反复弹窗（safeStorage 轮换）| ❌ |
| [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) **P3** | Cron agent 被强制注入 kanban_show 协议 | ❌ |
| [#50871](https://github.com/NousResearch/hermes-agent/issues/50871) **P3** | Desktop Markdown 把孤立 `~` 渲染为删除线（数字范围 `1~10,11~20` 中招）| ❌（2 月+）|

### 🟢 低优先级 / UX

- [#76385](https://github.com/NousResearch/hermes-agent/issues/76385) Buzz 网关连接但 agent 看似离线
- [#87041](https://github.com/NousResearch/hermes-agent/issues/87041) WhatsApp 设置指南链接指向 whatsmeow，但实际桥是 Baileys（文档错误，已标 duplicate）
- [#82851](https://github.com/NousResearch/hermes-agent/issues/82851) Linux/Wayland 下 HUD setPosition 失效

### 已有关联 fix PR（24h 内）

| Issue → PR |
|---|
| #91440 → [#91973](https://github.com/NousResearch/hermes-agent/pull/91973) `cleanup_vm()` 任务键解析修复 |
| #91656 → [#91972](https://github.com/NousResearch/hermes-agent/pull/91972) 网关 I/O 错误 vs 鉴权失败区分（已 CLOSED duplicate）|
| #91765 → [#91970](https://github.com/NousResearch/hermes-agent/pull/91970) `max_spawn_depth=0` 真正禁用子代理（已 CLOSED duplicate）|
| #91698 → [#91977](https://github.com/NousResearch/hermes-agent/pull/91977) `files_only` 搜索路径允许空格（已 CLOSED duplicate）|
| #91348 → [#91978](https://github.com/NousResearch/hermes-agent/pull/91978) 第三方日志工厂下 `session_tag` 守卫 |
| #91440/#91698/#91348/#91656/#91765 全部由 `@RelaxJonh` 24h 内批量关闭 |

> ⚠️ 注意：上述 5 个 PR 在 24h 内全部被标为 **duplicate 关闭**，而非 merged — 需确认它们是 fix-by-duplicate-marker 还是被维护者拒绝。

---

## 6. 功能请求与路线图信号

### 高确定性纳入方向

| 编号 | 标题 | 优先级 | 状态 |
|---|---|---|---|
| [#91974](https://github.com/NousResearch/hermes-agent/pull/91974) | **上下文窗口预算提示注入**（借鉴 openai/codex）| P3 | 已开 PR，2026-08-22 |
| [#91963](https://github.com/NousResearch/hermes-agent/pull/91963) | 委托任务暴露稳定 attribution ID | P3 | 已开 PR |
| [#91971](https://github.com/NousResearch/hermes-agent/pull/91971) | **P1** 网关在委托任务后保持 Kanban dispatcher 运行 | P1 | 已开 PR |
| [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) / [#71686](https://github.com/NousResearch/hermes-agent/pull/71686) | 单网关多 agent 架构（叠加 PR）| P2/P3 | 长期评审中，自 7 月起 |

### 路线图信号（来自 meta-issue）

- **平台对齐**：Discord / WhatsApp / Slack 三方各自有独立 meta-issue，承诺达到官方 API 全覆盖 — 平台广度优先
- **可证明状态**：状态来源限定、原子发布、所有者作用域、真值报告正成为新法则族（#91230 提出第六条法则"任务完成验证"）
- **Bot Mode 控制平面**：身份/能力/投递/取消四象限被要求收敛到单一控制对象（#91911）
- **fleet 更新可靠性**：`@teknium1` 立项 P1 tracking（#91277），约 30+15 个 issue/PR 涉及
- **HMAC/safeStorage 轮换**：macOS 钥匙串问题（#91115）需 Electron 层 proof-carrying safeStorage rotation

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **#90473 "show more messages" 设计被骂**：Windows 11 用户、Desktop 客户端、长会话（~900 消息），原文 *"显示更多消息是哪个傻逼的设计？"* — 长会话分页体验是**已被用户明确表达不满**的 UX 问题，11 条评论。
2. **#50871 Markdown `~` 误删**：用户需要输出数字范围 `1~10,11~20`，Desktop 渲染为删除线 — 业务场景被基础设施破坏。
3. **#89083 macOS 睡眠唤醒后窗口永久卡死**：唯一恢复路径是开新窗/退出重启，Cmd+R 也能恢复（因为重建 WebSocket）— 用户因此被迫丢失上下文。
4. **#82851 KDE Plasma 6 / Wayland 用户 HUD 无法拖动**：长按 composer 触发拖拽手势 setPosition 无效 — Linux 桌面用户被边缘化。
5. **#66616 Skills index 持续过期 29.8h**：72 条评论说明社区认为这是**反复发作的基础设施信号**，影响 /docs/skills 内容新鲜度。

### 满意/正面信号

- **#78647 史诗收官**：god-file 拆分 20/20 完成，社区显然认可这一**长期架构债清理**是积极进展。
- **v0.20.5 tag 化**：将 ~323 PR 汇总为稳定 tag 是对生产用户友好的工程动作。

### 平台/场景覆盖观察

- **跨平台 Windows/macOS/Linux 三线同时出现高严重性 bug**：说明 Hermes Desktop 在多平台一致性上仍未达标。
- **中文用户反馈已出现**：#90473 中包含中文原话 — 意味着中文用户群可能比 Issue 数量显示的更活跃，建议考虑双语 Issue 模板。

---

## 8. 待处理积压

### 长期未响应（>30 天）

| 编号 | 创建日 | 距今 | 标题 |
|---|---|---|---|
| [#47509](https://github.com/NousResearch/hermes-agent/issues/47509) | 2026-06-17 | **66 天** | MCP 发现失败以 DEBUG 记录，默认日志级不可见（P2）|
| [#50871](https://github.com/NousResearch/hermes-agent/issues/50871) | 2026-06-22 | **61 天** | Desktop Markdown `~` 误删线（P3，已有 1 个 👍）|

### 中期未响应（14-30 天）

| 编号 | 创建日 | 距今 | 标题 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18 | 35 天 | Skills index 降级（72 评论，自动探针）|
| [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) | 2026-07-21 | 32 天 | Cron agent 被强制 kanban_show 协议 |
| [#71686](https://github.com/NousResearch/hermes-agent/pull/71686) | 2026-07-26 | 27 天 | 单网关多 agent（叠加 PR，评审停滞）|
| [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) |

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

<think>用户要求我基于给定的 GitHub 数据生成 OpenHuman 项目 2026-08-22 的动态日报。让我仔细分析数据：

**数据概览**：
- 过去 24 小时 Issues 更新：30 条（新开/活跃 29，已关闭 1）
- 过去 24 小时 PR 更新：24 条（待合并 14，已合并/关闭 10）
- 新版本发布：0 个
- 无最新 Releases

让我系统梳理：

**已关闭 Issues**：#5658（macOS release 故障 - 已关闭）

**关闭/合并的 PR**（10 条已合并/关闭）：
- #5662 - Cursor 兼容 hooks
- #5665 - 修复 tinyagents 升级（tool-output fidelity）
- #5647 - 链接 tinymemory-bus
- #5646 - 性能优化（移除每轮 memory recall，2.1x 吞吐）
- #5661 - 删除 5 个死 bin 目标
- #5660 - 工具调用层迁移到 tinyagents
- #5659 - 修复 release 签名
- #5645 - 代理级 benchmark tier
- #5657 - 升级 tinymemory pin
- #5632 - 升级 tinyhumans-sdk
- #5654 - 文档死链修复（OPEN）

**待合并 PR**（14 条 OPEN）：
- #5671 - 提取 MCP client 到 tinymcp
- #5668 - 运行 OpenHuman harness 作为 library API
- #5666 - 性能优化 Master Agent token 减 26%
- #5667 - WP-5 收尾
- #5669 - 任务运行/调度/目标预算迁移
- #5670 - tinybox 跨进程 core
- #5664 - 运行时解析迁移到 tinyruntime
- #5663 - 多模态迁移到 tinyagents
- #5631 - Arch 包升级
- #5654 - 文档死链修复

**Issues 分析**：
大量 [bug, pre prod build] 标签的 staging/pre-prod 环境问题：
- #5595 - Desktop build matrix 超时
- #5600 - GitHub MCP server uvx not found
- #5462 - 删除死代码（local-STT）
- #5597 - deepseek v4 flash 404
- #5589 - URL guard DNS-free predicates 导出
- #5643 - 模块 rustc 版本不匹配
- #5642 - chat-v1 路由失败
- #5641 - 学习调度 profile family
- #5640 - Journal sink UTF-8 崩溃
- #5638 - WebSocket 多种失败模式
- #5637 - hint:summarize 不可用
- #5636 - ac.inference.sh MCP 频繁断连
- #5635 - config.toml 权限不安全
- #5634 - triage.escalate 被阻断
- #5633 - Notion sync 失败
- #5627 - TinyPlace identity 404
- #5626 - outcome summarize 失败
- #5625 - auto-updater 无法连接 GitHub
- #5624 - user state fetch 超时 51x
- #5623 - 学习调度 260x 失败
- #5604 - staging API 传输层失败
- #5603 - WebSocket 11 分钟周期断连
- #5602 - Langfuse journal 超时
- #5601 - spawn_parallel_agents 注册模糊
- #5599 - journal-sink UTF-8 验证失败 2372 观察丢失

**新 Issues**：
- #5658 - macOS release 故障（已关闭）
- #5656 - Socket 连接问题（用户反馈）
- #5655 - FLASHDROP feature（Discord free daily token）
- #5649 - Claude Code 粘贴图片丢失
- #5648 - Claude Code 会话失败

**核心议题**：
1. 大量 staging/pre-prod 环境的稳定性问题
2. tinyagents / tinymemory / tinymcp 模块化重构（WP-5 推进）
3. Claude Code 集成问题（图片粘贴、会话）
4. Release 流程修复（macOS 签名）
5. 性能优化（Master Agent token 减少 41.5%）

让我开始撰写日报。要做到：
- 中文（用户用中文提问）
- 客观专业
- 数据驱动
- 突出项目健康度
- 每个条目附 GitHub 链接

让我设计结构：

1. 今日速览：项目高活跃度，大量基础设施重构推进，但 pre-prod/staging 环境稳定性堪忧
2. 版本发布：无
3. 项目进展：核心重构、性能优化、Release 流程修复等
4. 社区热点：bug 讨论、Hooks 提议、Flashdrop 等
5. Bug 与稳定性：按严重程度排列
6. 功能请求与路线图
7. 用户反馈摘要：真实用户痛点
8. 待处理积压

让我注意几个细节：
- 评论数为 1 的 issues 有：#5595, #5600, #5462
- 其他 Issues 评论为 0
- 大多数 PR 没有明确的评论数（显示 undefined）

让我开始撰写。

需要保持中文专业报告风格，符合 GitHub 项目日报的格式。

格式应该用 Markdown，便于阅读。</think>

# OpenHuman 项目日报 · 2026-08-22

> **数据周期**：2026-08-21 ~ 2026-08-22 · **仓库**：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) · **生成时间**：2026-08-22

---

## 一、今日速览

OpenHuman 项目今日进入**高活跃、强推进**状态：24 小时内 30 条 Issue 更新（29 新开/活跃 + 1 关闭）与 24 条 PR 同步刷新（10 条已合并/关闭、14 条待合并），且 PR 待合并比高达 **58%**，反映仓库处于**多线重构并进**的攻坚阶段。今日主线清晰——**WP-5 子代理/tinyagents 模块化迁移收尾 + Master Agent 性能优化 + Release 流水线修复**三条战线同步推进，主分支合并活动密集。

但与此同时，**staging / pre-prod 环境暴露出系统性的稳定性问题**：单次会话出现 2372+ observation 丢失、260 次学习调度失败、51 次 user state 超时、~11 分钟周期 WebSocket 断连等多起高频故障叠加，呈现"基础设施已上线、可观测性数据不可信"的张力。这部分是测试期间检出，部分 bug 已有对应修复 PR 在排队，体现项目"边开发边暴露边修复"的节奏。

---

## 二、版本发布

**本周期内无新版 Releases。**

最近的发布行为体现在 PR 层面：Arch 包配方在 [#5631](https://github.com/tinyhumansai/openhuman/pull/5631) 中从陈旧的 `0.54.0` 同步至上游最新稳定版 `0.63.7` 并引入 `pkgver()` 自动跟随 Release tag。

---

## 三、项目进展（已合并 / 已关闭 PR）

今日共 **10 条 PR 完成生命周期**，仓库净增推进可量化为：

| PR | 主题 | 影响范围 |
|---|---|---|
| [#5665](https://github.com/tinyhumansai/openhuman/pull/5665) | **fix(agent): 升级 tinyagents 修复文本方言中工具输出保真度** | 修复 prompt-guided 模型收到 `&lt;div&gt;` 转义源码的回归问题，恢复工具输出 fidelity |
| [#5660](https://github.com/tinyhumansai/openhuman/pull/5660) | **refactor(agent): 工具调用/渲染层迁入 tinyagents** | `agent/dispatcher.rs` 净减 210 行，`tinyagents` 拥有完整方言层，约 190 个调用点保持不变 |
| [#5661](https://github.com/tinyhumansai/openhuman/pull/5661) | **chore(bins): 删除 5 个死 bin 目标与 harness_audit 门面** | 净减 **2,269 行** 死代码 |
| [#5647](https://github.com/tinyhumansai/openhuman/pull/5647) | **链接 tinymemory-bus + TinyMemory 客户端接缝** | 让 host 二进制能 `use` tinymemory cdylib 的 89 个成员，闭合 [#5623](https://github.com/tinyhumansai/openhuman/issues/5623) 错误根源 |
| [#5646](https://github.com/tinyhumansai/openhuman/pull/5646) | **perf(agent): 移除每轮 memory recall（2.1× 吞吐）** | 删除 `load_context()`，节省两次 global 命名空间扫描/每轮；与 [#5666](https://github.com/tinyhumansai/openhuman/pull/5666)（待合并）组合已累计 **41.5% orchestrator 成本削减** |
| [#5657](https://github.com/tinyhumansai/openhuman/pull/5657) | **chore(deps): 升级 vendored tinymemory pin past #76/#77** | 修复 keyed remote get 退化为全账户枚举的回归（关联 [#5623](https://github.com/tinyhumansai/openhuman/issues/5623)、[#5641](https://github.com/tinyhumansai/openhuman/issues/5641)、[#5598](https://github.com/tinyhumansai/openhuman/issues/5598)） |
| [#5659](https://github.com/tinyhumansai/openhuman/pull/5659) | **fix(release): 用 release lane 实际安装的 CLI 完成 updater 签名** | 闭环 [#5658](https://github.com/tinyhumansai/openhuman/issues/5658)：Release Production 在两条 macOS 腿上 50 分钟任务最后一步必然失败的根因 |
| [#5645](https://github.com/tinyhumansai/openhuman/pull/5645) | **test(bench): 真实 openhuman-core 进程的代理级 benchmark tier** | 引入进程外基准，零核心代码改动即可得到 CPU/RSS/泄漏/退化结论 |
| [#5632](https://github.com/tinyhumansai/openhuman/pull/5632) | **chore(deps): 升级 vendored tinyhumans-sdk pin** | 收 spend-cap 路由、`/agent-integrations/*` 一模块一供应商拆分（[#14](https://github.com/tinyhumansai/sdk/pull/14)/[#15](https://github.com/tinyhumansai/sdk/pull/15)/[#16](https://github.com/tinyhumansai/sdk/pull/16)） |
| [#5662](https://github.com/tinyhumansai/openhuman/pull/5662) | **feat(hooks): Cursor 兼容的可配置 hooks（hooks.json）** | 引入 `src/openhuman/hooks/` 域，事件/信封/决策与 Cursor 契约对齐，hook 脚本可在两 host 间无损迁移（⚠️ **PR 状态 OPEN 但摘要标注 CLOSED，请维护者确认是否合入**） |

**今日净代码账**：合并向量合计净减 ≥ 12,000 行（其中 #5671 待合并即减 11,125 行 MCP 实现）。

> ⚠️ 注：原数据将 [#5662](https://github.com/tinyhumansai/openhuman/pull/5662) 列在"待合并"段，但其 PR 摘要备注 CLOSED，建议复核实际合并状态。

---

## 四、社区热点

### 评论最活跃的 Issues（按评论数排序）
| Rank | Issue | 评论 | 👍 | 焦点 |
|---|---|---|---|---|
| 1 | [#5595](https://github.com/tinyhumansai/openhuman/issues/5595) `[infra-ci-release]` Desktop 构建超时 | 1 | 0 | 构建矩阵 90 分钟天花板，Windows 仅余 9 秒 |
| 2 | [#5600](https://github.com/tinyhumansai/openhuman/issues/5600) `[bug, pre prod build]` GitHub MCP server uvx 缺失 | 1 | 0 | staging 环境 `uvx` 未安装 |
| 3 | [#5462](https://github.com/tinyhumansai/openhuman/issues/5462) `[chore]` 删除死 STT 模型下载管线 | 1 | 0 | whisper.cpp 删除后残留 UI 入口 |

### 关注密集的 PR
- [#5671](https://github.com/tinyhumansai/openhuman/pull/5671) **Extract MCP client/registry → tinymcp**（净减 11,125 行）
- [#5668](https://github.com/tinyhumansai/openhuman/pull/5668) **One-call library API（`openhuman_core::Harness`）**
- [#5666](https://github.com/tinyhumansai/openhuman/pull/5666) **Master Agent 固定 token 底砍 26%，累计 −41.5%**

**诉求分析**：社区/工程侧的核心声量集中在三类——(a) CI / 构建流水线容量与 Windows/macOS 路径差异带来的 release 阻塞；(b) **MCP 栈公司化（tinyauth / tinymcp / tinyagents）以解耦 OpenHuman 体积**；(c) **embedding 故事**：`openhuman_core::Harness` + `tinybox` 跨进程 core 把 host 削成纯编排壳。

---

## 五、Bug 与稳定性

按 **会话影响面 × 复现率 × 数据丢失风险** 综合排序：

### 🔴 严重（数据丢失 / 全局可用性）
| Issue | 描述 | 严重度依据 | 是否有修复 |
|---|---|---|---|
| [#5599](https://github.com/tinyhumansai/openhuman/issues/5599) | journal-sink UTF-8 验证错误，**单会话丢失 2,372+ observation** | 遥测数据全量丢失 + 不可恢复 | 与 [#5640](https://github.com/tinyhumansai/openhuman/issues/5640) 同源，**PR 待开** |
| [#5640](https://github.com/tinyhumansai/openhuman/issues/5640) | Journal sink 在非 UTF-8 数据上崩溃，单会话观察永久丢失 | 与上同模式 | 同上 |
| [#5623](https://github.com/tinyhumansai/openhuman/issues/5623) | 学习调度 **260 次失败**，`tinymemory` 缺 `ListAllFacets` 成员 | 后台重建管线全停 | ✅ 已被 [#5657](https://github.com/tinyhumansai/openhuman/pull/5657) 关闭根因 + [#5647](https://github.com/tinyhumansai/openhuman/pull/5647) 补接缝 |
| [#5643](https://github.com/tinyhumansai/openhuman/issues/5643) | `tinywallet`、`tinyjuice` 进程内模块使用不同 rustc 编译 | ABI 不匹配可能在 trust 边界内爆炸 | ⚠️ 未见修复 |
| [#5642](https://github.com/tinyhumansai/openhuman/issues/5642) | `chat-v1` **每轮失败**，SDK 静默回退到 `burst-v1` | 用户始终运行在备用路由，成本/质量不知情 | ⚠️ 未见修复 |
| [#5597](https://github.com/tinyhumansai/openhuman/issues/5597) | `deepseek-v4-flash` 返回 404，payload summarizer 回退导致 **orchestrator hang** | 主链路阻塞 | ⚠️ 未见修复 |

### 🟠 高（连接 / 网络层）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#5603](https://github.com/tinyhumansai/openhuman/issues/5603) | staging WebSocket **准 11 分钟** 周期断连 → 服务端会话超时误配 | ⚠️ 未见修复 |
| [#5638](https://github.com/tinyhumansai/openhuman/issues/5638) | pre-prod WS **服务端主动 close + TCP reset (os 54)** 与 ping timeout 并存 | ⚠️ 未见修复 |
| [#5604](https://github.com/tinyhumansai/openhuman/issues/5604) | `staging-api.tinyhumans.ai` 传输层连接失败 | ⚠️ 未见修复 |
| [#5624](https://github.com/tinyhumansai/openhuman/issues/5624) | user state fetch **每会话 51 次超时**，全程跑在 stale snapshot 上 | ⚠️ 未见修复 |
| [#5600](https://github.com/tinyhumansai/openhuman/issues/5600) | GitHub MCP server 因 `uvx` 缺失**反复重试** | ⚠️ 未见修复 |
| [#5636](https://github.com/tinyhumansai/openhuman/issues/5636) | `ac.inference.sh/mcp` 14 次 transport drop 不稳定 | ⚠️ 未见修复 |

### 🟡 中（功能 / 集成 / DevOps）
| Issue | 修复状态 |
|---|---|
| [#5641](https://github.com/tinyhumansai/openhuman/issues/5641) 内存驱动不支持 profile family | 与 [#5623](https://github.com/tinyhumansai/openhuman/issues/5623) 同源 ✅（[#5657](https://github.com/tinyhumansai/openhuman/pull/5657)） |
| [#5627](https://github.com/tinyhumansai/openhuman/issues/5627) TinyPlace identity 404 | ⚠️ 未见修复 |
| [#5625](https://github.com/tinyhumansai/openhuman/issues/5625) auto-updater 联不上 GitHub releases API | ⚠️ 未见修复 |
| [#5633](https://github.com/tinyhumansai/openhuman/issues/5633) Notion sync **每 tick 51 次失败** | ⚠️ 未见修复 |
| [#5637](https://github.com/tinyhumansai/openhuman/issues/5637) `hint:summarize` 未配置 → 线程标题全 fallback | ⚠️ 未见修复 |
| [#5635](https://github.com/tinyhumansai/openhuman/issues/5635) `config.toml` 写出时为 644（world-readable），运行时自纠 | ⚠️ 未见修复 |
| [#5634](https://github.com/tinyhumansai/openhuman/issues/5634) `triage.escalate` 被 'no origin label' gate 阻断 8 次 | ⚠️ 未见修复 |
| [#5602](https://github.com/tinyhumansai/openhuman/issues/5602) Langfuse journal 每轮 10s 超时，**staging 无任何遥测** | ⚠️ 未见修复 |
| [#5601](https://github.com/tinyhumansai/openhuman/issues/5601) `spawn_parallel

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
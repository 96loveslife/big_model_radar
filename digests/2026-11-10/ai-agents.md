# OpenClaw 生态日报 2026-11-10

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-10 06:47 UTC

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

⚠️ 摘要生成失败。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**分析日期：2026-11-10**  
**覆盖项目：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman**

> 说明：OpenClaw 当日摘要生成失败，因此其 Issues、PR、Release 数量缺失；涉及 OpenClaw 的横向结论仅依据其“核心参照”定位及生态关联信息，不将其缺失数据解读为无活动。

---

## 1. 生态全景

生态正从“单 Agent 对话工具”快速转向覆盖 **桌面端、多渠道消息、插件/Skills、本地模型、后台任务、工作流与会话持久化** 的完整个人助理平台。今日有统计的项目合计出现约 **248 条 Issue/PR 更新**，QwenPaw、Hermes Agent、OpenHuman 三个高活跃项目贡献了主要流量。

与此同时，生态的主要矛盾已从“功能够不够”转向 **跨模块一致性**：会话路由、消息投递状态、Provider 能力协商、工具调用幂等、跨平台路径和插件安装，正在成为最集中的故障源。  
成熟度呈明显分层：QwenPaw 处于 **高频发布后的 Beta 收敛期**，Hermes Agent 处于 **统一 Gateway 后的架构迁移期**，NanoBot 和 OpenHuman 处于 **多会话/多渠道可靠性建设期**，PicoClaw 和 LobsterAI 更接近 **局部能力扩展与工程治理阶段**。  
整体健康度不差，但多个项目都暴露出同一治理问题：**PR 数量高、待合并队列长、正式发布滞后于代码合入**，维护者需要从“继续堆功能”转向“建立发布门禁、回归矩阵和积压收敛机制”。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 当日活跃特征 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 数据缺失 | 数据缺失 | 数据缺失 | 作为生态核心参照，其他项目大量使用或兼容其运行时、工具及迁移接口 | **无法据当日数据评估**；生态中心性高 |
| **NanoBot** | 5 | 30 | 无 | 35 条更新，19 条关闭/合并、11 条待处理；会话重构、渠道可靠性、WebUI、测试同步推进 | **良好，但多会话边界未收敛** |
| **PicoClaw** | 0 | 5 | 无 | 4 条待处理、1 条关闭；本地化、Skills 安装、Provider 兼容与 Termux 支持 | **中等偏积极**；交付偏慢、存在 stale PR |
| **IronClaw** | 0 | 0 | 无 | 过去 24 小时无活动 | **静默/待观察**，无法判断是低活跃还是数据缺失 |
| **LobsterAI** | 2 | 13 | 无 | 7 条关闭、6 条待处理；工具 Schema 减负、人格数据统一、模型能力配置 | **中等偏积极**；开发高、治理与发布一般 |
| **QwenPaw** | 16 | 50 | **v2.3.0-beta.3** | 14 条活跃 Issue、2 条关闭；31 条 PR 待处理；Beta 后集中修复桌面插件和多模态问题 | **中高（约 7/10）**；高活跃、高回归压力 |
| **Hermes Agent** | 50 | 50 | **v0.23.1** | 41/50 PR 待处理；统一 Gateway、Desktop 状态、Windows 与消息渠道集中收敛 | **中高，活跃但承压**；安全与数据完整性优先 |
| **OpenHuman** | 50 | 15 | 无 | 47 条 Issue 活跃、3 条关闭；Provider 兼容、安全、后台任务及前端稳定性问题密集 | **活跃但承压**；修复方向清晰、交付偏慢 |

### 活跃度分层

- **第一层：QwenPaw、Hermes Agent、OpenHuman**
  - 三者合计约 **232 条 Issue/PR 更新**。
  - 优势是反馈密集、功能推进快；风险是 Beta 回归、架构迁移和 PR 积压同时存在。

- **第二层：NanoBot、LobsterAI**
  - 分别有 35、15 条 Issue/PR 更新。
  - 已进入会话、数据一致性和工具成本优化阶段，成熟度通常高于仅有新功能提案的项目。

- **第三层：PicoClaw**
  - 5 条 PR、0 条 Issue，贡献活跃但缺乏问题讨论和正式交付。

- **第四层：IronClaw**
  - 24 小时无可见活动，短期无法形成有效趋势判断。

---

## 3. OpenClaw 在生态中的定位

### 生态角色：事实上的兼容层与运行时参照系

OpenClaw 的核心优势不在于本次日报中的单日数字，而在于其已经形成较强的**运行时抽象与生态外溢能力**：

1. **工具协议和运行时接口成为上游标准**
   - LobsterAI 直接围绕 OpenClaw 的人格文件、Tool Search 和工具目录进行适配。
   - OpenHuman 仍存在调用 OpenClaw/Hermes 迁移方法的历史入口，说明其迁移价值仍在，但接口生命周期管理已落后。

2. **多渠道、多会话模式具有较强外溢效应**
   - NanoBot 的会话路由重构、投递状态语义和显式 topic 路由，与 OpenClaw 类多渠道助理形态高度一致。
   - Hermes Agent 和 QwenPaw 也都在强化 Channel、插件和会话生命周期。

3. **生态兼容成本开始成为反向约束**
   - LobsterAI 的子 Agent 人格“双轨存储”问题，本质是 SQLite 与工作区 `SOUL.md` / `IDENTITY.md` 两种存储方式并存。
   - OpenHuman 的旧迁移入口调用失效方法，说明依赖某个运行时接口时，版本治理和弃用策略必须明确。

### 技术路线差异

| 维度 | OpenClaw 生态影响 | 同类项目表现 |
|---|---|---|
| 架构定位 | 多渠道、多工具、运行时与插件兼容中心 | QwenPaw/Hermes 强调统一 Gateway；OpenHuman 强调本地 Core 与后台任务 |
| 会话模型 | 外部项目普遍借鉴共享会话、topic、Channel 路由 | NanoBot 正从全局共享转向显式路由；Hermes 强调持久化会话 |
| 工具生态 | Tool Search、工具 Schema 与插件/MCP 兼容影响明显 | LobsterAI 已用目录检索压缩 10.6 万字符 schema；Hermes 以 Schema 去重节省约 696 tokens/调用 |
| 社区规模 | 从跨项目适配、迁移、插件与渠道需求看，拥有最大的间接生态触达 | Hermes/OpenHuman 社区讨论强；QwenPaw PR 吞吐最高 |

### 判断

- **优势**：生态兼容面广、运行时概念成熟、可被桌面端和消息渠道大量复用。
- **短板**：成为事实标准后，任何接口、数据源和路由语义变化都会形成迁移成本；生态项目已经出现“旧接口仍存”“双轨人格存储”等技术债。
- **竞争位置**：OpenClaw 更像“生态协议层”，而 QwenPaw、Hermes Agent 更强调完整产品体验，OpenHuman 更强调本地化与后台自动化，NanoBot 更偏轻量多渠道运行时。

---

## 4. 共同关注的技术方向

### 4.1 会话隔离、显式路由与持久化一致性

涉及项目：**NanoBot、LobsterAI、QwenPaw、Hermes Agent、OpenHuman**

- NanoBot 移除全局共享会话，转向按聊天和 topic 显式路由。
- LobsterAI 统一 UI 与 OpenClaw 运行时的子 Agent 人格来源。
- QwenPaw 修复 mission 切换模型后仍使用旧模型等状态不一致。
- Hermes Agent 集中修复 Desktop 会话水合、重复块、乱序和 SQLite 未写入问题。
- OpenHuman 推进后台补全按工作区隔离并持久化。

**共同诉求**：会话、任务、模型、工作区和输出目标必须形成唯一、显式、可持久化的绑定，不能依赖“最近使用渠道”或 UI/运行时双轨状态。

### 4.2 消息投递语义与跨渠道可靠性

涉及项目：**NanoBot、QwenPaw、Hermes Agent、OpenHuman**

- NanoBot 存在 heartbeat 输出进入错误房间，以及消息被抑制却返回成功状态的问题。
- QwenPaw 出现 QQ 纯图片消息静默丢失。
- Hermes Agent 出现 Gateway 消息未写入 SQLite，导致 Desktop 无历史。
- OpenHuman 修复后台子 Agent 事件未投递到用户 Socket。

**共同诉求**：投递协议需要明确区分：

- 已接收；
- 已路由；
- 已投递；
- 被抑制；
- 投递失败；
- 不可重试。

这是当前生态最直接的数据边界与隐私风险之一。

### 4.3 Provider 能力协商与协议兼容

涉及项目：**QwenPaw、LobsterAI、OpenHuman、Hermes Agent、NanoBot**

- QwenPaw 持续完善模型目录、推理参数、多模态能力、fallback 模型及自定义 Provider。
- OpenHuman 出现新模型拒绝 `temperature`、DeepSeek 推理字段回放缺失、OpenCode 缺少 session header 等问题。
- LobsterAI 修复模型能力配置被服务商预设覆盖。
- Hermes Agent 出现 `reasoning` / `reasoning_content` 重复字段导致 HTTP 400。
- NanoBot 持续压缩模型请求并改善长会话资源占用。

**共同诉求**：“OpenAI-compatible”不能等于协议完全兼容，需要统一的**模型能力元数据、请求参数过滤、字段规范化和错误学习机制**。

### 4.4 工具目录膨胀与上下文成本控制

涉及项目：**LobsterAI、Hermes Agent、OpenHuman**

- LobsterAI 的 OpenClaw Tool Search 将约 68 个工具、10.6 万字符 schema 改为按需加载，首请求基线约 4.5 万 tokens。
- Hermes Agent 通过精简七个核心工具 Schema，每次调用减少约 696 tokens。
- OpenHuman 暴露大量工具与配置快照的安全、可观测性问题。

**共同诉求**：工具数量增长必须与发现机制、权限控制、Schema 压缩和凭据脱敏同步推进，否则工具越多，Agent 越慢、越贵、越不安全。

### 4.5 插件、Skills 与 MCP 生态

涉及项目：**PicoClaw、QwenPaw、Hermes Agent、OpenHuman**

- PicoClaw 修复 Skills 因 frontmatter 同名而错误去重、导致安装失败。
- QwenPaw 修复官方 Creator 插件包元数据缺失，并规划分类嵌套 Skills。
- Hermes Agent 一次性新增 159 个公共 MCP 条目，并建设 Creature Workshop。
- OpenHuman 推进隐私出口策略和配置快照脱敏。

**共同诉求**：插件分发必须具备稳定包元数据、命名空间隔离、版本固定、签名或审核、依赖检查和卸载回滚机制。

### 4.6 跨平台与边缘环境兼容

涉及项目：**QwenPaw、Hermes Agent、PicoClaw、OpenHuman**

- QwenPaw 集中暴露 Windows 长路径、中文路径、盘符截断和 frozen Desktop 启动问题。
- Hermes Agent 面临 Windows Store 更新、WhatsApp `WinError 5`、Keet 安装和 TicketBridge 超时。
- PicoClaw 暴露 Termux/NVIDIA 模型识别问题。
- OpenHuman 涉及 Windows 带引号路径、Telegram pairing 持久化和 localhost Provider 误拦截。

**共同诉求**：Windows、移动端和受限 Shell 应进入常规 CI 矩阵，而非发布后的被动故障发现渠道。

### 4.7 可观测性、错误分类与自动更新

涉及项目：**OpenHuman、Hermes Agent、QwenPaw**

- OpenHuman 对过期会话、无效密钥和用户配置错误持续重试并污染 Sentry。
- Hermes Agent 暴露 SQLite 写入、上下文用量、错误恢复及流式超时问题。
- QwenPaw 需要区分模型配置错误、网络超时、认证和 5xx。

**共同诉求**：将“用户可修正错误”“不可重试业务状态”“可重试暂时故障”“内部系统异常”结构化分类，并让后台任务、更新器和可观测性系统共享同一套错误语义。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道消息、工具调用、插件与运行时兼容 | 希望部署个人通用助理、渠道型 Agent 的开发者 | 生态协议和兼容层属性强；对下游接口形态影响大 |
| **NanoBot** | 轻量多渠道、显式会话路由、WebUI 与沙箱 | 需要快速部署个人 Bot、多房间路由的开发者 | 从全局共享会话转向聊天/topic 路由，强调运行时与 WebUI 同步 |
| **PicoClaw** | Web UI、Skills、Provider 与搜索 | 偏好简洁桌面/个人助理体验和第三方扩展的用户 | Provider + Skills 扩展导向，功能边界相对聚焦 |
| **IronClaw** | 当日无足够信息 | 暂无法判断 | 需先确认仓库活跃度、产品阶段及技术栈 |
| **LobsterAI** | OpenClaw 桌面化、模型服务、文档与工作区 | 使用桌面 UI 管理 OpenClaw、模型和子 Agent 的个人用户/团队 | Electron + OpenClaw 集成层；近期重点是工具目录、人格数据与模型配置 |
| **QwenPaw** | 桌面 Agent、Channel 插件、多模态、本地模型与模型治理 | 追求桌面端、多平台渠道和本地/云模型统一体验的用户 | 本地 Core + 插件/Channel + 模型目录 + 多模态链路，能力面最广之一 |
| **Hermes Agent** | Gateway、CLI/TUI/Desktop、多消息平台、后台任务、MCP | 长时间运行、跨平台、高度可扩展的高级个人助理用户 | 统一 Gateway 和多端会话为核心，近期处于大规模架构迁移后的收敛期 |
| **OpenHuman** | 本地 Core、后台 Agent、工作流、Web Chat、渠道与隐私 | 注重本地化、自动化工作流和后台持续运行的用户 | 本地 Core + Socket/Web Chat + 后台任务与工作流，强调数据出口和存储隔离 |

### 架构取向总结

- **OpenClaw**：兼容性中心，适合作为生态协议层。
- **NanoBot**：轻量、多会话、多渠道，工程重心在路由正确性。
- **QwenPaw**：大而全的桌面/本地 Agent 平台，模型和多模态治理突出。
- **Hermes Agent**：服务端运行时中心，Gateway 与多端状态最复杂。
- **OpenHuman**：本地 Core 与后台自动化结合，隐私、工作流和持久化并重。
- **LobsterAI**：桌面集成与体验层，核心竞争力在 OpenClaw 的可视化封装。
- **PicoClaw**：更聚焦的 Skills/Provider/Web 体验型项目。

---

## 6. 社区热度与成熟度

### A 层：快速迭代 + 高回归压力

**QwenPaw**

- 50 条 PR、16 条 Issue，并发布 `v2.3.0-beta.3`。
- 功能推进、模型治理和桌面插件都很强，但 packaged Desktop Channel 全失效、Windows 附件路径截断跨多个 Beta，说明发布门禁不足。
- 属于**高活跃 Beta 收敛期**。

**Hermes Agent**

- 50 条 Issue、50 条 PR，并发布 `v0.23.1`。
- 统一 Gateway 跟踪 Issue 达 60 条评论，Keet 安装问题 27 条评论，Windows WhatsApp 问题 20 条评论。
- 社区参与最深，但架构迁移带来较宽回归面；属于**高活跃架构收敛期**。

### B 层：可靠性建设期

**NanoBot**

- 35 条 Issue/PR 更新，代码吞吐高。
- 已同时处理 WebUI、性能、沙箱、CI 和投递可靠性，但仍保留多个会话重构 PR 的交叉依赖。
- 属于**多会话架构重构期**。

**OpenHuman**

- 50 条 Issue、15 条 PR，问题发现量高于合入量。
- 修复方向清晰，但 Provider 兼容、凭据授权、自动更新、React 崩溃仍是关键路径问题。
- 属于**高反馈、低交付转化期**。

### C 层：局部扩展与工程治理期

**LobsterAI**

- 13 条 PR 更新，方向明确：人格统一、工具成本、模型能力、工作目录。
- 但 Issue 少、stale PR 和重复依赖 PR 较明显；属于**桌面集成质量巩固期**。

**PicoClaw**

- 5 条 PR、0 条 Issue；本地化、Skills 安装、Perplexity 和 Termux 均有具体贡献。
- 实际合入与发布有限；属于**社区贡献驱动的渐进扩展期**。

### D 层：数据不足或静默期

**IronClaw**

- 24 小时无活动。
- 在没有更长时间窗口、产品说明和 Issue/PR 数据前，不宜判断为停滞；只能列为**低可见度、待观察**。

---

## 7. 值得关注的趋势信号

### 趋势一：多 Agent 的竞争焦点从“模型能力”转向“控制面”

模型差异正在被 Provider 抽象、模型目录和能力协商逐步抹平。未来决定体验的核心是：

- 任务路由是否确定；
- 会话状态是否唯一；
- 后台任务是否可观测；
- 工具调用是否幂等；
- 输出是否投递到正确目标。

**开发建议**：优先建设显式 `task_id → session_id → workspace_id → channel → model` 上下文链，避免依赖全局最近活动状态。

### 趋势二：渠道数量增加会放大隐私与数据边界风险

NanoBot 的错误房间投递、OpenHuman 的后台事件遗漏、Hermes Agent 的 SQLite 未写入、QwenPaw 的图片消息静默丢失，都说明“消息成功”尚未成为跨项目统一事实。

**开发建议**：将“调用成功”与“投递成功”拆开，至少提供：

```text
accepted
routed
delivered
suppressed
failed
non_retryable
```

并记录可追踪的 session、channel、delivery attempt 和 provider message ID。

### 趋势三：工具数量正在成为新的上下文瓶颈

LobsterAI 和 Hermes Agent 的优化均显示，工具 Schema 已可能占据数万 tokens。未来 Agent 框架不会只依赖“把工具全部塞给模型”，而会转向：

- 工具检索；
- 分层工具空间；
- 权限感知的按需加载；
- Schema 去重；
- 工具调用缓存和幂等键。

**开发建议**：将工具注册表视为代码资产治理对象，增加版本、权限、来源、依赖、Schema 大小和召回测试。

### 趋势四：Provider 兼容需要从“兼容 OpenAI”升级为“能力协商”

GPT-6/Claude 5 拒绝 `temperature`、DeepSeek 推理字段、OpenCode session header、推理字段别名重复等问题说明，仅靠 endpoint 类型不足以决定请求格式。

**开发建议**：建立模型能力矩阵，至少描述：

- 参数白名单；
- 推理字段格式；
- 多模态输入限制；
- 工具调用协议；
- 流式事件格式；
- 错误可重试性；
- 上下文窗口；
- Prompt Cache 支持。

### 趋势五：插件生态正从“数量增长”转向“供应链治理”

Hermes 一次新增 159 个 MCP、PicoClaw 和 QwenPaw 暴露插件安装问题，说明目录规模已快速增长，但包元数据、命名冲突、签名审核、版本固定和回滚仍不成熟。

**开发建议**：插件进入官方目录前，应强制通过元数据校验、恶意代码扫描、依赖审计和最小权限检查。

### 趋势六：Windows 与本地部署是下一阶段的硬指标

QwenPaw、Hermes Agent、PicoClaw 和 OpenHuman 的问题高度集中在 Windows 路径、长路径、Store 更新、Termux、localhost 代理、中文路径和桌面打包环境。桌面 Agent 竞争已经不只是 UI 竞争，还包括安装、更新、回滚、进程生命周期和路径语义的竞争。

**开发建议**：建立“Windows 中文路径 + 长路径 + frozen build + Store 更新 + 无管理员权限 + 系统代理”组合测试矩阵。

### 趋势七：稳定发布比发布频率更重要

QwenPaw 和 Hermes Agent 都展示了很高的 PR 吞吐，但也分别暴露跨 Beta 回归和统一 Gateway 回归。NanoBot、LobsterAI、OpenHuman 又存在“代码已合入、Release 未闭环”的问题。

**开发建议**：每次发布明确设置以下门禁：

1. P0/P1 阻断项清零；
2. 破坏性变更附迁移说明；
3. 跨平台组合测试通过；
4. 安全修复优先发布；
5. PR、Issue 与 Release Notes 可互相追踪。

---

## 决策层结论

- **最适合作为生态兼容基准**：OpenClaw。
- **最值得观察多会话路由演进**：NanoBot。
- **最值得观察桌面、多模态和模型治理**：QwenPaw。
- **最值得观察统一 Gateway、跨端持久化与插件生态**：Hermes Agent。
- **最值得观察本地后台 Agent、隐私和工作流**：OpenHuman。
- **最适合评估桌面 OpenClaw 封装与工具成本优化**：LobsterAI。
- **最适合评估轻量 Skills/Provider/Web 扩展**：PicoClaw。
- **目前信息不足，需要补充观察窗口**：IronClaw。

总体而言，生态已经进入“**平台化工程阶段**”。下一轮竞争的胜负手不会只是模型接入数量或 UI 完整度，而是 **状态一致性、投递可靠性、能力协商、插件治理、跨平台发布质量和可观测性**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-10**  
**数据范围：过去 24 小时 GitHub 活动**  
**Issue：5 条更新（3 条活跃/新开，2 条关闭）**  
**PR：30 条更新（11 条待合并，19 条已合并/关闭）**  
**新版本：0**

---

## 1. 今日速览

NanoBot 今日开发活动较高，过去 24 小时共有 **35 条 Issue/PR 更新**，其中 PR 数量达到 30 条，显示维护工作主要集中在代码合并、回归修复与测试稳定性。已关闭或合并的 PR 有 19 条，但仍有 11 条待处理，说明迭代吞吐较高，同时存在一定合并与评审积压。

今日推进的重点包括：**会话路由模型重构、WebUI 交互与性能优化、跨渠道投递可靠性、沙箱配置、上下文压缩与渲染部署修复**。不过，Issue 侧暴露出的中继消息误投递、跨渠道错误状态丢失等问题，说明多渠道、多会话场景仍处于快速演进期。今日无正式版本发布，变更暂未形成可确认的发行版本。

---

## 2. 版本发布

过去 24 小时没有新版本发布。

值得注意的是，版本准备 PR [#6570](https://github.com/HKUDS/nanobot/pull/6570) 已关闭，提交信息显示 **0.4.1 准备 PR 已通过 squash 合并**，但当前数据中没有对应的正式 Release。发布流程是否已完成、是否仍存在构建产物或标签发布步骤，建议维护者补充确认。

---

## 3. 项目进展

### 3.1 会话模型与路由重构

- **移除全局共享会话模式**：[#6621](https://github.com/HKUDS/nanobot/pull/6621)  
  该 PR 从配置、网关路由、WebUI 设置和文案中移除全局共享会话，同时保留按聊天和显式 topic 路由。这是一个带有 **breaking change** 属性的架构调整，可能影响依赖共享会话或“最近使用渠道”路由的用户。PR 当前仍待合并。

- **修复跨会话输入归属与历史记录**：[#6613](https://github.com/HKUDS/nanobot/pull/6613)  
  修复不同 session 间发送消息时，工作区归属不一致、输入重复或响应关联到错误输入的问题。该 PR 仍待合并，但与正在推进的会话路由重构直接相关，可能需要协调合并顺序。

- **避免空闲扫描干扰正在执行的直接任务**：[#6405](https://github.com/HKUDS/nanobot/pull/6405)  
  指出 API Server、SDK 和单次 CLI 使用的 `process_direct` 不会创建队列，因此长任务超过 session TTL 后可能被误判为空闲并触发压缩。当前标记为存在冲突，仍待处理。

### 3.2 消息渠道可靠性

- **保留跨渠道投递失败状态**：[#6606](https://github.com/HKUDS/nanobot/pull/6606)  
  修复邮件在进入代理入站队列前即被确认、Mattermost 附件发送成功但实际丢失、恢复审阅后失败状态无法重现等问题。相关 PR 已关闭，推动了渠道边界错误传播和可恢复状态的完善。

- **修复 Render 部署无法启动**：[#6611](https://github.com/HKUDS/nanobot/pull/6611)  
  针对 [#6607](https://github.com/HKUDS/nanobot/issues/6607) 中 Render 部署在 entrypoint 前退出、状态码 128 的问题，Blueprint 改为显式通过容器 entrypoint 启动 gateway，并增加部署测试。

### 3.3 WebUI 功能与体验

- **统一代码及 diff 高亮**：[#6412](https://github.com/HKUDS/nanobot/pull/6412)  
  合并原分离的 Prism 代码、预览和 diff 高亮路径，恢复消息与 Composer 同列的会话预览布局，同时保留文件变更浏览能力。

- **优化昼夜主题和交互连续性**：[#6594](https://github.com/HKUDS/nanobot/pull/6594)  
  改善 WebUI 侧边栏夜间主题、Star 邀请页插画和明暗过渡体验，并保持现有主题行为。

- **新会话时关闭上下文侧栏**：[#6590](https://github.com/HKUDS/nanobot/pull/6590)  
  修复从项目创建新会话时仍展示旧上下文图的问题。

- **首次访问遵循浏览器语言**：[#6591](https://github.com/HKUDS/nanobot/pull/6591)  
  修复启动页使用浏览器语言、应用随后切换为英语并保存用户未主动选择偏好的问题。

- **保留无法识别的粘贴路径**：[#6610](https://github.com/HKUDS/nanobot/pull/6610)  
  当附件识别失败时，不再丢弃用户粘贴的路径文本，并保持已有附件转换及限制。

- **压缩后保留系统上下文图**：[#6608](https://github.com/HKUDS/nanobot/pull/6608)  
  修复上下文压缩后系统提示词来源从文件图中消失的问题。

### 3.4 性能与资源优化

- **减少文件、会话和模型请求中的内存复制**：[#6581](https://github.com/HKUDS/nanobot/pull/6581)  
  涉及流式文件范围读取、会话增量检索及模型请求处理，降低大文件读取和长会话场景下的内存峰值。

- **降低文件活动区布局开销**：[#6587](https://github.com/HKUDS/nanobot/pull/6587)  
  通过 `ResizeObserver` 获取尺寸，减少大量文件活动和 diff 渲染造成的主线程布局压力。

### 3.5 沙箱与安全配置

- **沙箱检查与可信启动器配置**：[#6595](https://github.com/HKUDS/nanobot/pull/6595)  
  增加网关主导的沙箱检查、临时文件验证和可信启动器配置，在不放宽命令隔离的前提下提升配置可检查性。

### 3.6 测试与 CI 稳定性

- **隔离不稳定测试并保留诊断信息**：[#6622](https://github.com/HKUDS/nanobot/pull/6622)  
  对 WebSocket 测试使用进程内 HTTP registry 隔离，并收窄 watchdog 范围，减少相互共享状态和统一 deadline 导致的 CI 挂起。

- **调整大图页面测试时限**：[#6588](https://github.com/HKUDS/nanobot/pull/6588)  
  将 500 节点图页面测试的页级长任务预算由 100ms 提升到 150ms，未减少节点数量或关键断言。

- **稳定原生主题渐变采样测试**：[#6600](https://github.com/HKUDS/nanobot/pull/6600)  
  修复主题过渡测试中动画在浏览器协议往返前结束导致的偶发超时。

整体来看，今日项目在 **会话架构、WebUI、渠道可靠性和测试体系** 四条线上均有推进；已关闭 PR 显示代码合入面较广，但关键会话重构仍有多个待合并 PR 尚未形成最终闭环。

---

## 4. 社区热点

### Issues

1. **暴露稳定的工具调用上下文，支持幂等副作用**  
   [#5749](https://github.com/HKUDS/nanobot/issues/5749)  
   当前 AgentRunner 在派发工具时拥有稳定的 provider tool-call ID，检查点也使用该 ID 区分待处理和已完成任务，但工具实现拿不到逻辑调用身份。希望通过 `RequestContext` 暴露稳定调用 ID，以便工具实现实现幂等、重试去重和副作用追踪。  
   **诉求核心**：将运行时已有的唯一标识传递给工具，补齐可靠执行和幂等 API。

2. **Heartbeat 输出被投递到最近更新的房间**  
   [#6619](https://github.com/HKUDS/nanobot/issues/6619)  
   多房间部署中，heartbeat 任务结果依赖 session store 中最近更新的房间，而非任务对应的路由，可能将报告发送至无关房间。  
   **诉求核心**：输出路由应由任务上下文决定，不能依赖全局“最近活动”状态。

3. **内部轮次中消息发送被抑制，却返回成功提示**  
   [#6620](https://github.com/HKUDS/nanobot/issues/6620)  
   heartbeat 等内部轮次会抑制 `message` 投递，让输出统一进入 post-run evaluator，但被抑制的调用仍向代理返回“Message acknowledged”式成功响应，使代理误以为消息已交付。  
   **诉求核心**：被抑制的发送应明确返回错误或可识别的状态。

### PR

1. **移除全局共享会话**  
   [#6621](https://github.com/HKUDS/nanobot/pull/6621)  
   今日最重要的架构型 PR，评论和热度信息未完整提供，但涉及配置、网关、WebUI 与翻译多层联动，评审复杂度较高。

2. **跨会话输入归属和历史记录修复**  
   [#6613](https://github.com/HKUDS/nanobot/pull/6613)  
   聚焦多会话并发、输入重复和响应关联问题，与社区关于会话隔离和正确路由的诉求高度相关。

3. **空闲扫描与直接任务冲突修复**  
   [#6405](https://github.com/HKUDS/nanobot/pull/6405)  
   PR 自创建于 2026-10-22，今日仍有更新且存在冲突，体现该问题需要跨队列、TTL、压缩流程进行系统性修复。

> 当前提供的 PR 数据中评论数均显示为 `undefined`，无法可靠比较评论热度。因此，本节按技术影响力和当日活跃度排序，而不将“无点赞”误读为缺乏关注。

---

## 5. Bug 与稳定性

### 高优先级

1. **Heartbeat 输出可能泄漏到无关房间**  
   Issue：[#6619](https://github.com/HKUDS/nanobot/issues/6619)  
   **影响**：多房间、多渠道部署可能把任务结果发送到错误会话，属于数据边界与隐私风险。  
   **修复 PR**：当前提供数据中未见明确对应的已合并 PR。  
   **状态**：待处理。

2. **跨渠道投递失败可能丢失或被错误确认**  
   Issue 关联：[#6606](https://github.com/HKUDS/nanobot/pull/6606)  
   **影响**：邮件可能过早确认成功，Mattermost 附件可能丢失，恢复审阅失败状态可能无法重现。  
   **修复 PR**：**有**，即 #6606，已关闭。  
   **状态**：已修复或已合入，需通过正式 Release 验证。

3. **Render 新部署启动失败，退出码 128**  
   Issue：[#6607](https://github.com/HKUDS/nanobot/issues/6607)  
   **影响**：新部署在 nanobot 启动前失败，且缺少应用日志，部署体验和可诊断性较差。  
   **修复 PR**：**有**，即 [#6611](https://github.com/HKUDS/nanobot/pull/6611)，已关闭。  
   **状态**：已修复或已合入。

### 中优先级

4. **被抑制的 message 调用返回成功式确认**  
   Issue：[#6620](https://github.com/HKUDS/nanobot/issues/6620)  
   **影响**：代理可能基于虚假成功继续执行，造成输出遗漏或工作流状态不一致。  
   **修复 PR**：当前未见明确对应 PR。  
   **状态**：待处理。

5. **WebUI 中键自动滚动在消息尾部失效**  
   Issue：[#6592](https://github.com/HKUDS/nanobot/issues/6592)  
   **影响**：长会话中中键自动滚动发生抖动并被强制拉回底部，干扰用户阅读。  
   **修复 PR**：**有**，即 [#6612](https://github.com/HKUDS/nanobot/pull/6612)，已关闭。  
   **状态**：已修复或已合入。

6. **WebUI 中键自动滚动修复**  
   PR：[#6612](https://github.com/HKUDS/nanobot/pull/6612)  
   调整滚动所有权判定，使用户输入优先于摄像机自动写入边界，避免自动滚动争抢控制权。

7. **空闲会话压缩可能干扰直接执行任务**  
   PR：[#6405](https://github.com/HKUDS/nanobot/pull/6405)  
   **影响**：长耗时直接调用可能被错误压缩，造成任务中断或状态不一致。  
   **修复 PR**：已有 PR，但当前存在冲突。  
   **状态**：待解决冲突并重新评审。

### 低优先级或已覆盖

- WebUI 新会话残留旧上下文侧栏：[#6590](https://github.com/HKUDS/nanobot/pull/6590)，已关闭。
- WebUI 首次访问语言与保存偏好不一致：[#6591](https://github.com/HKUDS/nanobot/pull/6591)，已关闭。
- WebUI 主题切换测试偶发超时：[#6600](https://github.com/HKUDS/nanobot/pull/6600)，已关闭。
- 500 节点图页面 CI 时间预算不足：[#6588](https://github.com/HKUDS/nanobot/pull/6588)，已关闭。
- 粘贴路径在附件识别失败后丢失：[#6610](https://github.com/HKUDS/nanobot/pull/6610)，已关闭。
- `/new` 命令可能自取消、导致会话未重置：[#6603](https://github.com/HKUDS/nanobot/pull/6603)，已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 工具调用稳定身份与幂等执行

Issue：[#5749](https://github.com/HKUDS/nanobot/issues/5749)

该需求直接对应 AgentRunner、运行时检查点和工具实现之间的接口缺口。若纳入后续版本，预计会扩展 `RequestContext`，让工具获得稳定 tool-call ID，并支持：

- 外部副作用幂等；
- 重试去重；
- pending/completed 状态关联；
- 更可靠的恢复与故障诊断。

这是运行时可靠性基础设施级改动，建议优先级高于一般体验增强。

### 6.2 会话隔离和显式路由取代共享状态

相关 Issue/PR：

- [#6621](https://github.com/HKUDS/nanobot/pull/6621)
- [#6619](https://github.com/HKUDS/nanobot/issues/6619)
- [#6613](https://github.com/HKUDS/nanobot/pull/6613)
- [#6620](https://github.com/HKUDS/nanobot/issues/6620)

从今日 PR 结构看，路线图正在从“全局共享会话 + 最近更新渠道”转向：

- 按聊天或 topic 显式路由；
- 会话间输入与历史隔离；
- 输出基于任务上下文投递；
- 被抑制发送返回明确状态。

这说明多渠道、多会话部署正成为下一阶段的核心能力，但相关改动仍需统一合并和回归测试。

### 6.3 沙箱安全与可审计配置

PR：[#6595](https://github.com/HKUDS/nanobot/pull/6595)

沙箱检查、启动器白名单和临时文件验证已进入合入流程，后续可能进一步发展为：

- 可视化沙箱健康检查；
- 可信启动器管理；
- 更明确的执行隔离状态；
- 面向部署者和运维人员的安全诊断能力。

### 6.4 WebUI 文件与上下文可视化继续深化

相关 PR：

- [#6412](https://github.com/HKUDS/nanobot/pull/6412)
- [#6587](https://github.com/HKUDS/nanobot/pull/6587)
- [#6608](https://github.com/HKUDS/nanobot/pull/6608)

代码、diff、文件活动图和系统上下文图正在统一为一套可理解的文件上下文体验。后续可能继续优化大文件、长历史和多 diff 场景下的性能与可读性。

### 下一版本建议关注

虽然今日没有正式 Release，但从已关闭 PR 看，以下内容很可能进入下一批版本：

- Render Blueprint 启动修复；
- 中键自动滚动修复；
- WebUI 语言、主题、上下文侧栏和粘贴路径修复；
- 跨渠道投递可靠性增强；
- 沙箱检查与可信启动器配置；
- 大文件和模型请求内存优化。

会话路由重构 [#6621](https://github.com/HKUDS/nanobot/pull/6621) 涉及破坏性变更，是否进入下一正式版本仍取决于 [#6613](https://github.com/HKUDS/nanobot/pull/6613) 等配套 PR 的合并与兼容性验证。

---

## 7. 用户反馈摘要

### 真实使用场景

- **Render 一键部署**：用户使用 `render.yaml` 创建全新服务时，在应用输出前就遭遇退出码 128。其自行指定完整 entrypoint 后才能启动，说明部署模板与容器命令组合存在真实兼容问题。[#6607](https://github.com/HKUDS/nanobot/issues/6607)
- **多房间渠道部署**：启用多个房间或渠道后，heartbeat 报告被发送至“最近更新”的房间，而非工作所属房间，反映用户在多实例、多群组场景下对可靠路由的明确需求。[#6619](https://github.com/HKUDS/nanobot/issues/6619)
- **内部轮次工作流**：heartbeat 会主动抑制内部 `message` 调用，再由运行后 evaluator 统一输出，因此“发送是否真正完成”的状态语义直接影响代理后续行为。[#6620](https://github.com/HKUDS/nanobot/issues/6620)
- **长会话阅读**：用户在 WebUI 底部查看长对话时，中键自动滚动不可用且发生抖动；滚轮、触控板、滚动条和键盘路径正常，说明问题集中于自动滚动控制权，而非整体滚动功能。[#6592](https://github.com/HKUDS/nanobot/issues/6592)

### 满意点

根据已合入 PR 的目标可见，用户对以下既有能力总体认可：

- WebUI 已具备文件活动、diff、上下文图和多会话浏览能力，项目当前主要是在修正交互一致性和性能，而非重建基础功能；
- 沙箱隔离没有被弱化，而是在保留安全边界的前提下增强可检查性和配置能力；
- 主题、浏览器语言、上下文侧栏等体验问题均有针对性回归测试。

### 不满与共性痛点

- **部署失败缺少应用日志**：用户只能看到退出码 128，难以定位启动前故障。
- **成功状态与真实投递状态不一致**：消息可能过早确认，或被抑制后仍返回成功反馈。
- **路由依赖隐式全局状态**：最近更新的房间不适合作为任务输出目标。
- **长会话和大规模数据下性能敏感**：文件读取、会话搜索、模型请求及 WebUI diff 均存在内存或布局开销。
- **CI 偶发失败影响交付效率**：共享状态、动画采样和过于严格的时间预算都曾导致间歇性失败。

---

## 8. 待处理积压

### 需要维护者优先处理的 Issue

1. **跨房间输出泄漏风险**  
   [#6619](https://github.com/HKUDS/nanobot/issues/6619)  
   新开且尚无明确修复 PR，涉及错误消息投递和潜在隐私边界，应尽快确认修复方案。

2. **消息抑制状态语义错误**  
   [#6620](https://github.com/HKUDS/nanobot/issues/6620)  
   与 heartbeat 内部工作流直接相关，建议定义统一的“已接收 / 已投递 / 被抑制 / 投递失败”状态协议。

3. **稳定工具调用上下文长期未推进**  
   [#5749](https://github.com/HKUDS/nanobot/issues/5749)  
   Issue 自 2026-09-12 创建并于今日更新，已存在较长时间。若幂等副作用是正式支持目标，应明确接口设计、兼容性方案和目标版本。

### 需要合并或重审的 PR

1. **移除全局共享会话**  
   [#6621](https://github.com/HKUDS/nanobot/pull/6621)  
   今日新建，属于破坏性架构调整。需要重点评审迁移说明、默认路由行为以及 WebUI/网关配置兼容。

2. **跨会话输入归属与历史修复**  
   [#6613](https://github.com/HKUDS/nanobot/pull/6613)  
   应与会话模型重构 PR 协同评审，避免两项改动分别合入后产生路由语义冲突。

3. **空闲扫描与直接任务冲突修复**  
   [#6405](https://github.com/HKUDS/nanobot/pull/6405)  
   自 2026-10-22 创建，今日仍存在冲突，属于长期积压。应明确以队列、活跃租约还是执行句柄作为“真实活跃”判据。

### 发布闭环

- 0.4.1 准备 PR：[#6570](https://github.com/HKUDS/nanobot/pull/6570) 已关闭，但无对应 Release。  
  建议确认标签、构建产物、变更日志及部署说明是否完整，并明确全局共享会话移除等破坏性变更是否包含在已发布版本中。

---

## 今日项目健康度评估

**整体健康度：良好，但多会话与多渠道边界仍需收敛。**

- **开发吞吐：高**——30 条 PR 更新、19 条已关闭或合并，说明修复与优化推进密集。
- **功能进展：中高**——会话、WebUI、沙箱、部署和性能均有实质改动。
- **测试质量：改善中**——多项 flaky CI 和浏览器交互测试已隔离或修复。
- **稳定性风险：中等**——消息误投递、错误成功状态和直接任务误压缩仍对可靠性有影响。
- **发布成熟度：待确认**——代码已大量合入，但没有新 Release，发布闭环与破坏性变更迁移说明不清晰。
- **维护压力：中高**——11 条 PR 待处理，且会话重构相关 PR 存在交叉依赖和冲突。

**维护建议**：优先统一处理 [#6619](https://github.com/HKUDS/nanobot/issues/6619)、[#6620](https://github.com/HKUDS/nanobot/issues/6620)、[#6405](https://github.com/HKUDS/nanobot/pull/6405) 和 [#5749](https://github.com/HKUDS/nanobot/issues/5749)，并尽快完成会话重构的兼容性评审及 0.4.1 发布状态确认。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-10**  
**数据范围：过去 24 小时 GitHub 更新**  
**数据源：PicoClaw GitHub 仓库**

---

## 1. 今日速览

- 过去 24 小时共有 **5 条 PR 更新**，其中 **4 条仍待合并、1 条已关闭**，暂无新 Issue 更新，也没有新版本发布。
- 今日主要进展集中在 **Web 前端本地化、Provider 接入、Skills 安装逻辑修复和 Perplexity 搜索请求适配**，整体呈现“功能扩展与稳定性修复并行”的开发态势。
- 当前提交以个人贡献者 PR 为主，但缺少评论、点赞等社区互动数据，尚无法判断需求热度或维护者响应强度。
- 2 条 PR 带有 **`[stale]`** 标签，其中 1 条已关闭、1 条仍开放，表明部分较早提交的 PR 存在清理或响应压力。
- 整体健康度评估：**中等偏积极**。代码侧保持活跃，但 Issue 讨论为空、版本发布缺失，且存在 stale PR，项目治理与发布节奏仍需关注。

---

## 3. 项目进展

### 今日关闭的重要 PR

#### Runcrate OpenAI-compatible Provider 已关闭

- **PR：** [#3448 feat(provider): add Runcrate OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3448)
- **状态：** CLOSED，标记为 `[stale]`
- **目标：** 将 Runcrate 作为一等 OpenAI-compatible Provider 接入，使用 `runcrate/` 前缀及 `https://api.runcrate.ai/v1` 作为基础地址。
- **预期价值：**
  - 扩充可用模型与 GPU 服务提供商；
  - 沿用既有 OpenAI-compatible Provider 集成方式，降低用户切换成本；
  - 为不同定价、模型供给或部署区域提供更多选择。

**进展判断：** 该 PR 未在今日以正常合并方式落地，项目并未因此新增已发布能力。其关闭状态带有 stale 标记，更像是长期未处理后的自动或人工清理；若 Runcrate 仍有明确用户需求，可能需要重新提交并补充维护者反馈。

### 今日整体推进程度

- 今日没有确认合并并进入主分支的功能性 PR。
- 4 条开放 PR 覆盖：
  - Web 界面法语本地化；
  - Skills 安装去重修复；
  - Perplexity Web Search 请求头适配；
  - Termux 环境下 NVIDIA 模型 ID 修复。
- 项目开发方向较清晰，但当日实际合入产出有限，健康度暂评为 **中等偏积极**。

---

## 4. 社区热点

> 当前数据中所有 PR 的评论数和点赞数均为 `undefined` 或 0，未提供 Issues 评论。因此，“最活跃”只能依据当日更新时间和功能覆盖面判断，无法可靠衡量真实社区讨论热度。

### 重点关注：法语 Web UI 本地化

- **PR：** [#3467 feat(web): add French UI locale](https://github.com/sipeed/picoclaw/pull/3467)
- **作者：** @slashr512
- **状态：** OPEN
- **今日动态：** 2026-11-10 创建并更新，是今日最新 PR。
- **内容：**
  - 新增完整法语翻译文件；
  - 注册 i18next 法语资源及 dayjs locale；
  - 在登录、设置和 Dashboard 的语言菜单中加入 **Français**。

**背后诉求：** 提升 PicoClaw Web 界面的法语用户可用性，尤其是登录、初始化配置和 Dashboard 等核心操作路径。本地化不仅涉及文案翻译，还同步处理日期时间区域格式，说明实现范围较完整。

### 重点关注：Skills 安装去重逻辑修复

- **PR：** [#3463 fix(skills): deduplicate installed skills per root, not by frontmatter name](https://github.com/sipeed/picoclaw/pull/3463)
- **作者：** @nelsonrochaa-creator
- **状态：** OPEN
- **关联 Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **内容：**
  - 将 Skills 去重维度从 frontmatter `name` 调整为安装根目录；
  - 避免不同目录中的 Skills 因同名而被误判；
  - 修复 `picoclaw skills install` 与 Agent `install_skill` 工具可能出现的 `registry archive is not a valid skill` 错误。

**背后诉求：** 用户需要正确安装来源不同但 frontmatter 同名的 Skills，而不是被全局名称去重机制阻断。这一诉求直接关系到扩展系统的可组合性与第三方 Skill 分发。

### 重点关注：Perplexity Web Search 集成标识

- **PR：** [#3466 feat(tools): send X-Pplx-Integration header on Perplexity web search](https://github.com/sipeed/picoclaw/pull/3466)
- **作者：** @qirh
- **状态：** OPEN
- **内容：**
  - 在 `PerplexitySearchProvider.Search` 对现有 Perplexity Chat Completions 请求中增加：
    `X-Pplx-Integration: picoclaw`
  - 改动仅作用于现有硬编码请求，不影响其他 Provider、代理或调用方。

**背后诉求：** 更明确地向 Perplexity 标识 PicoClaw 集成来源，可能用于集成统计、请求识别、服务合作或兼容性要求。该改动范围小、边界清晰，属于较低风险的兼容性增强。

### 次要关注：Termux 下 NVIDIA 模型 ID 修复

- **PR：** [#3455 Fix/nvidia model id termux shell](https://github.com/sipeed/picoclaw/pull/3455)
- **作者：** @theophillus-imtl
- **状态：** OPEN，`[stale]`
- **创建时间：** 2026-11-01
- **最近更新：** 2026-11-09
- **内容摘要：** 面向 Termux shell 环境修复 NVIDIA 模型 ID 相关问题，但摘要未提供完整变更说明。

**背后诉求：** 改善 Android/Termux 用户在 NVIDIA 模型或相关命令调用场景下的兼容性，反映出移动端与受限 shell 环境是实际使用中的边缘场景。

---

## 5. Bug 与稳定性

### 高优先级：Skills 安装因同名误判而失败

- **PR：** [#3463 fix(skills): deduplicate installed skills per root, not by frontmatter name](https://github.com/sipeed/picoclaw/pull/3463)
- **关联 Issue：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **影响范围：**
  - `picoclaw skills install`；
  - Agent 的 `install_skill` 工具；
  - 存在相同 frontmatter `name`、但目录、作者和内容不同的已安装 Skills。
- **用户症状：** 安装失败，并报告 `registry archive is not a valid skill`。
- **严重程度：** **高**  
  该问题直接阻断 Skill 安装，且错误信息将去重冲突伪装成归档格式异常，容易误导排障。
- **修复状态：** **已有 fix PR，但尚未合并**。

### 中优先级：Termux shell 下 NVIDIA 模型 ID 异常

- **PR：** [#3455 Fix/nvidia model id termux shell](https://github.com/sipeed/picoclaw/pull/3455)
- **状态：** OPEN，`[stale]`
- **严重程度：** **中**  
  主要影响 Android/Termux 等特定环境，但可能造成 NVIDIA 模型识别、命令执行或配置解析失败。
- **修复状态：** **已有候选 PR，尚未合并且已 stale**。

### 低优先级/集成兼容：Perplexity 请求缺少集成标识头

- **PR：** [#3466 feat(tools): send X-Pplx-Integration header on Perplexity web search](https://github.com/sipeed/picoclaw/pull/3466)
- **严重程度：** **低至中**  
  当前摘要未表明普通请求会直接失败，更接近服务端识别、统计或兼容性增强。
- **修复状态：** **已有增强 PR，尚未合并**。

### 今日崩溃与回归问题

- 过去 24 小时没有新增 Issue，因此没有可确认的崩溃、回归或高频稳定性报告。
- 这并不代表项目完全无缺陷：今日 PR 中仍暴露了 Skills 安装和 Termux 兼容性两类问题。

---

## 6. 功能请求与路线图信号

### 已形成明确 PR 的需求

1. **法语 Web 界面**
   - PR：[#3467](https://github.com/sipeed/picoclaw/pull/3467)
   - 已覆盖核心页面和 locale 注册，具备较明确的合入价值。
   - 若维护者接受当前翻译质量与测试情况，较可能进入后续 Web 版本。

2. **Runcrate Provider 接入**
   - PR：[#3448](https://github.com/sipeed/picoclaw/pull/3448)
   - 符合既有 Provider 扩展模式，但目前已因 stale 关闭。
   - 在没有维护者确认或用户需求数据前，难以判断是否进入下一版本。

3. **Perplexity 集成请求头**
   - PR：[#3466](https://github.com/sipeed/picoclaw/pull/3466)
   - 改动小且作用域明确，若符合服务方集成要求，具备较快合入的可能。

### 值得关注的下一版本候选方向

- **Skills 安装机制稳定性：** [#3463](https://github.com/sipeed/picoclaw/pull/3463) 对应的修复应优先进入近期版本，避免扩展安装流程继续产生误导性错误。
- **移动端与受限环境兼容：** [#3455](https://github.com/sipeed/picoclaw/pull/3455) 表明 Termux 用户场景仍需专项支持。
- **Web 多语言能力：** [#3467](https://github.com/sipeed/picoclaw/pull/3467) 表明国际化仍在持续推进，后续可能扩展更多语言。
- **Provider 生态扩展：** Runcrate 提案体现了 Provider 数量增长的需求，但需要先解决该 PR 的关闭原因和响应时效。

---

## 7. 用户反馈摘要

过去 24 小时没有新增或更新的 Issue，且开放 PR 未提供可读取的评论，因此本次无法从 Issue 评论中提炼足够的真实用户反馈。

目前可从 PR 描述中归纳出的使用痛点包括：

- **Skill 安装失败且报错不准确：** 同名 Skills 被错误去重，用户看到“归档不是有效 Skill”，难以定位真实原因。见 [#3463](https://github.com/sipeed/picoclaw/pull/3463) 和 [#3462](https://github.com/sipeed/picoclaw/issues/3462)。
- **法语用户缺少本地化界面：** 登录、设置和 Dashboard 的语言可达性不足。见 [#3467](https://github.com/sipeed/picoclaw/pull/3467)。
- **Termux 用户在 NVIDIA 模型相关场景中遇到兼容问题：** 移动端和受限 shell 环境的适配仍不完整。见 [#3455](https://github.com/sipeed/picoclaw/pull/3455)。
- **Provider 选择需求持续增长：** 用户希望直接接入更多 OpenAI-compatible 服务。Runcrate 提案见 [#3448](https://github.com/sipeed/picoclaw/pull/3448)，但目前尚未获得可见的社区互动或维护者反馈。

总体上，今日没有足够数据判断用户满意度；贡献行为本身说明仍有用户愿意主动补齐本地化、兼容性和 Provider 能力。

---

## 8. 待处理积压

### Stale 且仍开放的 PR

#### Termux 下 NVIDIA 模型 ID 修复

- **PR：** [#3455](https://github.com/sipeed/picoclaw/pull/3455)
- **状态：** OPEN，`[stale]`
- **创建时间：** 2026-11-01
- **最近更新：** 2026-11-09
- **积压风险：** 特定环境兼容问题长期未明确关闭，可能错过版本窗口。
- **建议：** 维护者确认是否仍有复现条件；若有效，应补充复现步骤、测试结果并安排评审。

### 已关闭但可能仍有产品需求的 PR

#### Runcrate Provider 接入

- **PR：** [#3448](https://github.com/sipeed/picoclaw/pull/3448)
- **状态：** CLOSED，`[stale]`
- **风险：** 功能诉求可能随关闭而丢失，尤其当 Provider 目录和接入模式仍在扩展时。
- **建议：** 明确关闭原因，并在存在真实用户需求时鼓励更新后重开。

### 治理层面的积压信号

- 今日更新的 5 条 PR 中，2 条带有 stale 标签，说明仓库可能存在低活跃或长期未评审 PR。
- 当前无新 Issue 更新，无法确认这是正常低流量日，还是 Issue 提交与维护渠道活跃度不足。
- 没有新版本发布，因此上述开放修复尚未转化为可供用户获取的正式版本。

---

## 健康度结论

**综合健康度：中等偏积极。**

- **开发活跃度：良好**——24 小时内 5 条 PR 更新，功能、国际化、兼容性与扩展性议题均有覆盖。
- **交付活跃度：一般**——今日没有确认合并的功能性 PR，也没有版本发布。
- **稳定性信号：中等**——发现一个直接影响 Skill 安装的高优先级问题，已有修复但尚未合并。
- **社区互动：数据不足**——Issues 为 0，PR 评论与点赞均无有效数据。
- **维护治理：需关注**——存在 stale PR，且 Provider 提案已被关闭，建议尽快明确评审和清理策略。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-10**  
**数据范围：过去 24 小时**  
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 一、今日速览

过去 24 小时项目共更新 **2 条 Issues** 和 **13 条 PR**，其中 **1 条 Issue 新开、1 条关闭**，PR 端有 **7 条关闭、6 条待处理**，整体开发活跃度较高，但尚未产生新版本发布。  
今日变更重点集中在 **Agent 人格数据统一、模型能力配置、工具调用性能优化、工作目录错误处理** 等方向，另有 Electron、Univer、XML 解析器和 DOCX 编辑器依赖升级。  
PR 数量明显高于 Issue 数量，说明当前主要驱动力来自维护者和自动化依赖更新；不过仍有多个长期开放的 PR 带有 `stale` 标记，积压治理仍需加强。  
项目健康度评估：**功能开发活跃，质量修复持续，但发布节奏、Issue 响应与长期 PR 收敛速度一般**。

---

## 二、项目进展

### 1. 子 Agent 人格来源统一

- **PR [#3038](https://github.com/netease-youdao/LobsterAI/pull/3038) 已关闭**
- 关联 Issue：[#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)

该 PR 针对非 `main` 子 Agent 的双重人格存储问题进行处理：此前 UI 从 SQLite 中的 `agents.system_prompt` / `agents.identity` 读取和写入人格信息，而 OpenClaw 运行时实际使用工作区中的 `SOUL.md` / `IDENTITY.md`，导致 UI 显示为空，且 Agent 自主修改人格文件后可能被旧数据静默覆盖。

该修复以工作区文件作为人格信息的统一来源，推动 UI 与运行时行为一致。但需要注意：**PR 已在当日关闭，而对应 Issue 仍处于 OPEN 状态**，最终实现是否进入主干、采用何种替代方案，仍需跟踪确认。

### 2. OpenClaw 大型工具目录改为按需检索

- **PR [#3029](https://github.com/netease-youdao/LobsterAI/pull/3029) 已关闭**

此前每次模型请求约包含 **68 个工具、10.6 万字符的 schema**，首请求基线约为 **4.5 万 tokens**，工具定义占据了请求内容的大部分。该 PR 启用 OpenClaw Tool Search 的目录模式，仅直接发送核心文件、Shell 和少量固定交互工具，其余工具通过搜索按需加载。

这是今日较重要的性能优化，可明显降低请求体积、上下文占用和潜在推理成本；同时也暴露出工具管理、检索准确度及兼容性的后续优化空间。

### 3. 模型编辑器能力选项覆盖服务商预设

- **PR [#3034](https://github.com/netease-youdao/LobsterAI/pull/3034) 已关闭**

该 PR 修复模型编辑器中“支持图像输入”等能力选项被服务商预设覆盖的问题。具体包括：

- 更新内置 MiMo `V2.6 Pro` 的图像输入能力数据；
- 调整配置优先级，使用户在模型编辑器中的显式选择能够覆盖服务商预设；
- 同步改善模型列表中的能力标签展示。

该修复有助于减少“设置已保存但实际未生效”的配置误导，并提升多模态模型接入体验。

### 4. 工作目录不可用时返回准确错误

- **PR [#3033](https://github.com/netease-youdao/LobsterAI/pull/3033) 已关闭**

此前当默认工作目录位于未挂载的外接硬盘时，任务启动会尝试创建目录并触发 `EACCES` 错误，但界面却提示“当前账号无权访问该模型”，错误信息与真实原因完全不符。修复后，工作目录不可访问时将明确报告目录问题，而不是尝试创建或误报模型权限。

### 5. 新增模型服务商支持

- **PR [#2766](https://github.com/netease-youdao/LobsterAI/pull/2766) 已关闭**
  - 新增 Requesty 模型服务商，默认关闭。
- **PR [#2818](https://github.com/netease-youdao/LobsterAI/pull/2818) 待处理**
  - 新增 Atlas Cloud 模型服务商，配置形态与 OpenRouter 类似。

这两项工作拓展了统一模型网关和多服务商接入能力，但 PR 状态不同：Requesty 已关闭，Atlas Cloud 仍待处理，需关注是否进入正式发布。

### 6. 依赖更新

今日共有多条 Dependabot 更新：

- [PR #3021](https://github.com/netease-youdao/LobsterAI/pull/3021) 已关闭：Electron `43.5.0 → 43.8.6`
- [PR #3037](https://github.com/netease-youdao/LobsterAI/pull/3037) 待处理：Electron `43.5.0 → 43.8.7`
- [PR #3019](https://github.com/netease-youdao/LobsterAI/pull/3019) 待处理：Univer 依赖组共 34 项更新
- [PR #3022](https://github.com/netease-youdao/LobsterAI/pull/3022) 已关闭：`fast-xml-parser 5.11.1 → 5.11.2`
- [PR #3036](https://github.com/netease-youdao/LobsterAI/pull/3036) 待处理：`fast-xml-parser 5.11.1 → 5.12.0`
- [PR #3020](https://github.com/netease-youdao/LobsterAI/pull/3020) 待处理：DOCX 编辑器依赖组 2 项更新

其中 Electron 存在 `43.8.6` 与 `43.8.7` 两个并行 PR，`fast-xml-parser` 也存在 `5.11.2` 与 `5.12.0` 两个并行版本，建议维护者及时收敛，避免重复依赖升级与后续合并冲突。

---

## 三、社区热点

> 本期 Issue/PR 的点赞和评论数据整体较少，未出现高互动事件；以下按技术影响力和讨论关联度排序。

### 1. 子 Agent 人格文件双轨存储问题

- Issue：[#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)
- 关联 PR：[#3038](https://github.com/netease-youdao/LobsterAI/pull/3038)
- 状态：Issue OPEN；PR CLOSED
- 数据：0 评论、0 点赞

**核心诉求：** UI 与 OpenClaw 运行时必须使用同一份人格信息，不能因 SQLite 与工作区文件并存而静默回滚 Agent 的自主修改。

**影响评估：**

- 直接影响子 Agent 的身份、性格与长期记忆一致性；
- 对“可自我修改人格”的 Agent 工作流尤其重要；
- 反映项目的 Agent 配置层仍存在“双数据源”架构债务。

虽然当前评论热度不高，但该问题属于基础一致性缺陷，优先级应高于一般功能请求。

### 2. 不重启网关切换工作区

- Issue：[#2738](https://github.com/netease-youdao/LobsterAI/issues/2738)
- 状态：CLOSED
- 数据：2 条评论

用户明确反馈：本机网关启动超过 **10 秒**，频繁切换工作区时体验较差，希望在不重启网关的情况下完成切换。

该 Issue 已关闭，说明需求已得到处理或已有替代方案，但日报数据未提供关闭原因或对应 PR。建议在版本说明中明确其落地方式，以确认这一性能诉求是否真正解决。

### 3. MCP 命令与外部 URL 安全边界加固

- PR：[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)
- 状态：OPEN，创建于 2026-09-01，带 `stale` 标记

该 PR 聚焦两类安全边界：

- MCP stdio 命令和参数缺少 shell 元字符及命令路径校验；
- Renderer 提供的 URL 被直接交给 `shell.openExternal`，缺少协议白名单。

这是安全相关且长期停滞的改动，即使社区讨论不活跃，也应优先完成评审或明确替代方案。

### 4. 工具目录加载优化

- PR：[#3029](https://github.com/netease-youdao/LobsterAI/pull/3029)
- 状态：CLOSED

该 PR 的价值主要通过请求体积与 token 成本体现：约 **10.6 万字符工具 schema / 4.5 万 tokens 首请求基线**。虽然互动数据有限，但它可能是今日对运行性能和用户体验影响最大的改动之一。

---

## 四、Bug 与稳定性

### 高优先级

#### MCP stdio 与外部 URL 缺少安全边界

- PR：[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)
- 状态：OPEN，带 `stale` 标记
- 修复 PR：**已有，但尚未关闭**

风险包括任意命令执行、外部协议滥用及第三方 MCP 配置带来的供应链攻击面。该问题从 2026-09-01 起持续开放，建议作为安全维护项优先处理，并补充命令转义、路径白名单和协议白名单测试。

### 中优先级

#### 子 Agent 人格数据不一致及静默回滚

- Issue：[#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)
- 修复 PR：[#3038](https://github.com/netease-youdao/LobsterAI/pull/3038)
- 状态：Issue OPEN；PR CLOSED

该问题会导致 UI 显示空白、Agent 修改人格后配置被旧数据覆盖。由于关联 PR 已关闭但 Issue 仍开放，需确认是否已经合并、放弃或由其他方案替代。

#### 模型图像输入能力配置被覆盖

- 修复 PR：[#3034](https://github.com/netease-youdao/LobsterAI/pull/3034)
- 状态：CLOSED

属于配置优先级和内置元数据过期问题，可能造成多模态能力设置不生效。已有直接修复 PR，建议在后续版本中验证 MiMo V2.6 Pro 的图片输入和 UI 标签是否正常。

#### 外接硬盘未挂载导致错误提示误导

- 修复 PR：[#3033](https://github.com/netease-youdao/LobsterAI/pull/3033)
- 状态：CLOSED

实际影响偏中等，但会直接影响用户对故障原因的判断。修复应确保工作目录不可用时不再创建目录，并明确提示挂载、权限或路径配置问题。

### 低至中优先级

#### Electron 版本并行升级

- [PR #3021](https://github.com/netease-youdao/LobsterAI/pull/3021)：`43.8.6`，已关闭
- [PR #3037](https://github.com/netease-youdao/LobsterAI/pull/3037)：`43.8.7`，待处理

Electron 大版本升级可能带来渲染进程、窗口生命周期和 IPC 行为变化。虽然是补丁版本升级，仍建议执行主进程、窗口、文件拖放、更新器和跨平台构建回归测试。

#### Univer 依赖组大规模更新

- [PR #3019](https://github.com/netease-youdao/LobsterAI/pull/3019)
- 状态：待处理

单次涉及 **34 个依赖**，建议重点回归文档编辑器的基础操作、协同编辑、公式、导入导出和插件兼容性。

---

## 五、功能请求与路线图信号

### 1. 无重启切换工作区

- Issue：[#2738](https://github.com/netease-youdao/LobsterAI/issues/2738)
- 状态：已关闭

该需求直接针对高频使用中的网关启动延迟。若关闭意味着功能已实现，则很可能进入下一版本；由于缺少关联 PR 或维护者说明，目前只能将其视为已处理但待验证的路线图项。

### 2. 子 Agent 人格统一存储

- Issue：[#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)
- 关联 PR：[#3038](https://github.com/netease-youdao/LobsterAI/pull/3038)

从架构方向看，统一工作区 `SOUL.md` / `IDENTITY.md` 与 UI 配置源符合 Agent 可自治编辑、人格可版本管理的趋势，具备进入下一版本的可能。但关联 PR 已关闭，需先厘清关闭原因。

### 3. 新模型服务商接入

- [PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766)：Requesty，已关闭
- [PR #2818](https://github.com/netease-youdao/LobsterAI/pull/2818)：Atlas Cloud，待处理

持续增加服务商，说明项目的模型抽象层和统一网关策略仍在扩展。Requesty 更接近完成状态；Atlas Cloud 是否进入下一版本取决于其当前评审状态。

### 4. Tool Search 与请求成本优化

- [PR #3029](https://github.com/netease-youdao/LobsterAI/pull/3029)

大型工具目录按需检索很可能成为后续版本的性能主线。该方向可与模型上下文管理、工具权限控制和 MCP 工具发现统一设计。

### 5. 下一步建议关注

1. 确认人格统一 PR 的最终落地状态；
2. 收敛 Electron 与 `fast-xml-parser` 的重复升级 PR；
3. 优先处理长期停滞的 MCP 安全边界；
4. 为 Tool Search 增加工具召回准确率及上下文兼容性测试；
5. 在下一次发布中集中验证文档编辑器和 Electron 升级回归。

---

## 六、用户反馈摘要

### 核心痛点

1. **工作区切换成本高**  
   用户反馈本机网关启动超过 **10 秒**，频繁切换工作区影响效率。该问题来自真实、低性能设备场景，说明启动耗时仍是重要体验瓶颈。[Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738)

2. **子 Agent 人格状态不可见且会被覆盖**  
   用户在工作区已经配置 `IDENTITY.md` / `SOUL.md` 的情况下，UI 仍显示空白；Agent 自改人格后还可能被静默回滚。这反映出配置展示、运行时读取和持久化之间缺乏一致性。[Issue #3035](https://github.com/netease-youdao/LobsterAI/issues/3035)

3. **错误提示与真实故障不匹配**  
   外接硬盘未挂载时，应用错误提示为“当前账号无权访问该模型”，会误导用户排查模型权限，而实际问题在工作目录。[PR #3033](https://github.com/netease-youdao/LobsterAI/pull/3033)

4. **模型能力设置无法可靠生效**  
   用户勾选图像输入后，配置被内置预设悄悄改回，反映服务商预设与用户显式配置之间缺少清晰优先级。[PR #3034](https://github.com/netease-youdao/LobsterAI/pull/3034)

### 满意度信号

本期点赞和评论数量有限，未出现明确的高满意反馈事件。已经关闭的功能与修复 PR 表明维护者能够快速响应多项具体技术问题；但 Issue 关闭后的解释、关联 PR 和版本说明不足，会降低用户对“问题是否真正解决”的可见性。

---

## 七、待处理积压

### 1. MCP 安全边界加固长期未收敛

- [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)
- 创建时间：2026-09-01
- 状态：OPEN，带 `stale` 标记

该 PR 涉及命令执行和外部 URL 安全，属于不应长期搁置的高风险事项。建议维护者明确给出评审结论、拆分范围或替代修复计划。

### 2. Atlas Cloud 服务商接入长期开放

- [PR #2818](https://github.com/netease-youdao/LobsterAI/pull/2818)
- 创建时间：2026-10-09
- 状态：OPEN，带 `stale` 标记

该功能本身范围较小，长期开放可能说明测试、图标、注册表或 OpenClaw 适配仍存在阻塞。建议尽快完成验收或说明维护计划。

### 3. Univer 依赖组升级积压

- [PR #3019](https://github.com/netease-youdao/LobsterAI/pull/3019)
- 状态：OPEN

涉及 34 个依赖，若长期不处理会增加后续升级的冲突成本，也增加文档编辑器回归风险。

### 4. Electron 与 XML 解析器重复升级待收敛

- [PR #3037](https://github.com/netease-youdao/LobsterAI/pull/3037)
- [PR #3036](https://github.com/netease-youdao/LobsterAI/pull/3036)

两项均与已关闭的较低版本 PR 重叠。维护者应尽快确定保留目标版本，避免自动化 PR 持续占用评审队列。

### 5. 子 Agent 人格问题尚未形成闭环

- Issue：[#3035](https://github.com/netease-youdao/LobsterAI/issues/3035)
- PR：[#3038](https://github.com/netease-youdao/LobsterAI/pull/3038)

Issue 仍开放、关联 PR 已关闭，建议补充关闭原因、替代提交链接或回归测试结果，避免用户问题长期处于“看似关闭但实际未解决”的状态。

---

## 总体健康度判断

**综合健康度：中等偏积极。**

- **开发活跃度：高**——24 小时内 13 条 PR 更新，覆盖性能、稳定性、模型接入和 Agent 一致性。
- **质量方向：积极**——已形成针对工具上下文膨胀、人格双轨存储、模型能力覆盖和工作目录误报的专项修复。
- **社区活跃度：偏低**——仅 2 条 Issue 更新，评论与点赞很少，Issue/PR 中缺少充分的用户验证和讨论。
- **积压风险：中等**——多个带 `stale` 标记的 PR 未收敛，其中包含 MCP 安全加固。
- **发布状态：平稳但偏慢**——过去 24 小时无新版本，尚未看到当日修复与依赖更新的集中发布安排。

**维护优先级建议：**先确认 [#3035](https://github.com/netease-youdao/LobsterAI/issues/3035) 的实际修复状态，再推进 [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) 的安全收敛，随后合并重复依赖 PR，并针对工具目录优化和文档编辑器依赖升级补充回归测试。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-10**  
**数据范围：过去 24 小时 GitHub Issues、Pull Requests 与 Releases**  
**整体判断：项目活跃度高，当前处于版本发布后的集中修复与质量收敛阶段。**

---

## 一、今日速览

过去 24 小时共更新 **16 条 Issues**（新开或活跃 14 条、关闭 2 条）和 **50 条 PRs**（待合并 31 条、已合并或关闭 19 条），并发布 **v2.3.0-beta.3**，研发吞吐较高。当前主线明显聚焦于桌面版插件与 Channel 启动、附件路径、多模态能力、模型目录和本地运行时稳定性， Issues 中同时出现 **Windows 路径截断、桌面 Channel 全量启动失败等高影响回归**。  
PR 数量明显高于 Issues，且多批较早提交集中进入关闭或待审状态，说明项目正在快速消化历史改动；但仍有 **31 条待合并 PR**，以及若干长期开放的关键问题积压。  
综合来看，项目处于 **高活跃、较高风险但修复响应积极** 的阶段：beta.3 发布后已有针对插件安装和桌面 Channel 启动的修复跟进，不过新版本尚未完全摆脱跨平台、模型元数据及多模态链路问题。

**项目健康度：中高（7/10）**  
- 优势：发布频繁、PR 吞吐高、关键问题已有明确修复方向。
- 风险：beta 阶段回归较多；跨平台桌面兼容、插件生态和模型能力发现仍有系统性缺口。
- 建议：优先收敛 beta.3 发布阻断问题，并对 31 条待合并 PR 明确负责人、评审时限和合并条件。

---

## 二、版本发布

### v2.3.0-beta.3

- **版本类型：** Beta
- **发布日期：** 2026-11-10
- **Release：** [v2.3.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.3)
- **发布验证 Issue：** [#8643 — Installation Verification](https://github.com/agentscope-ai/QwenPaw/issues/8643)（已关闭）

### 更新内容

根据 Release Notes，本次版本至少包含：

1. **多模态 Memory 与 Memory Tags 双语文档**
   - 新增多模态记忆和 Memory Tags 的独立中英文博客。
   - 侧重产品使用与架构理解，不涉及核心运行时接口调整。
   - 对应贡献者：`@wang-qisen`。
   - 相关 PR：[ #8506](https://github.com/agentscope-ai/QwenPaw/pull/8506)

2. **桌面插件安装与修复流程改进**
   - 修复桌面插件安装失败及部分插件无法正常修复的问题。
   - 对应 PR：[ #8653 — preserve runtime ABI checks for desktop channel startup](https://github.com/agentscope-ai/QwenPaw/pull/8653)

### 破坏性变更与迁移注意事项

- Release Notes 未明确声明破坏性 API 变更。
- 但 beta.3 发布后仍存在以下已知问题，因此不建议直接视为生产稳定版：
  - 桌面打包环境中 Channel 插件可能无法激活：[Issue #8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)，已有 [PR #8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) 待合并。
  - 上传附件路径可能被截断为盘符根目录，影响图片加载：[Issue #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)。
  - 官方 `qwenpaw-creator` v2.0.4 插件仍可能因缺少包元数据而安装失败：[Issue #8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)，Creator 2.0.5 正在 [PR #8654](https://github.com/agentscope-ai/QwenPaw/pull/8654) 中准备。
- **升级建议：**
  1. 使用 Windows 桌面版的用户，升级后应重点验证附件上传、图片读取、Channel 插件启动。
  2. 使用自定义 OpenAI 兼容 Provider 的用户，应验证 `run_code` 工具参数及多模态附件链路。
  3. 生产环境建议保留回退版本，等待 beta.3 的关键修复完成合并与安装验证。

---

## 三、项目进展

### 1. 桌面端 Channel 启动链路进入集中修复

当前最关键的推进项是桌面打包环境下插件运行身份校验：

- 问题：打包版中 `validate_runtime_identity` 从 `DependencyReadEvidence` 读取 `supported_tags` 时触发 `AttributeError`，最终导致 `WORKER_START_FAILED`，Feishu、WeChat、Yuanbao 等 Channel 插件无法激活。
- 跟踪 Issue：[ #8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)
- 修复 PR：[ #8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)
- beta.3 发布说明也列出插件安装和修复失败的处理：[Release v2.3.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.3)

**推进意义：**  
这是桌面版可用性的关键阻断修复。若成功合入，可显著降低“界面配置正常但实际 Channel 不工作”的故障率。不过目前 PR 仍为 OPEN，应继续观察验证结果。

### 2. 自定义 Provider 的模型发现与能力元数据继续完善

过去 24 小时关闭/更新的多项 Provider PR 构成了较完整的模型治理链路：

- 修复自定义 OpenAI 兼容 Provider 的模型发现、持久化、前端刷新和失败恢复：[PR #7320](https://github.com/agentscope-ai/QwenPaw/pull/7320)
- 统一 Provider 发现、模型元数据、路由和 Agent 控制：[PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)
- 区分模型输出能力与请求级 token 限制：[PR #7337](https://github.com/agentscope-ai/QwenPaw/pull/7337)
- 更新 Aliyun Token Plan、Aliyun Coding Plan 与 Kimi 模型目录：[PR #7277](https://github.com/agentscope-ai/QwenPaw/pull/7277)
- 增加独立的后备模型配置页：[PR #7392](https://github.com/agentscope-ai/QwenPaw/pull/7392)

同时，运行时媒体能力识别也在调整：

- [PR #8100 — use resolved media capabilities at runtime](https://github.com/agentscope-ai/QwenPaw/pull/8100) 仍待合并，目标是避免已解析为支持图片的模型在运行时仍被原始 Provider 记录拦截。

**推进意义：**  
项目正在从“简单模型选择”升级为目录驱动、能力感知、可回退的模型治理体系，对多 Provider 生态是重要基础建设。

### 3. Shell、聊天错误处理与桌面沙箱稳定性改进

- Shell 子进程不再继承交互式终端 stdin，避免 Windows 下命令读取终端输入导致阻塞：[PR #7598](https://github.com/agentscope-ai/QwenPaw/pull/7598)
- Chat 页面区分模型配置错误与网络、超时、认证、5xx 等传输故障，减少误导性提示：[PR #7563](https://github.com/agentscope-ai/QwenPaw/pull/7563)
- Windows 沙箱不再向子进程注入错误的 `PYTHONHOME`：[PR #6902](https://github.com/agentscope-ai/QwenPaw/pull/6902)

**推进意义：**  
这些改动主要改善错误可诊断性和执行环境隔离，可降低 Windows 桌面端的“假失败”和进程卡死风险。

### 4. Console 模型选择器与免费模型展示逻辑收敛

近期关闭的多项 PR 集中处理模型选择器：

- 按 Provider 折叠并默认展示全部免费模型：[PR #7124](https://github.com/agentscope-ai/QwenPaw/pull/7124)
- 恢复完整免费模型列表：[PR #7175](https://github.com/agentscope-ai/QwenPaw/pull/7175)
- 将免费模型与 Pro 模型分开展示：[PR #7524](https://github.com/agentscope-ai/QwenPaw/pull/7524)

**推进意义：**  
模型目录从早期“不完整或混用”逐步转向稳定、可预期的展示逻辑，对免费 Provider 用户尤其重要。

### 5. Chat 工作区产物卡片与 CLI 启动兼容性

- Chat 持久化 Workspace Artifact 卡片，记录 Agent 回合中创建或修改的文件：[PR #6719](https://github.com/agentscope-ai/QwenPaw/pull/6719)
- 支持在全局 CLI 参数后传入项目路径，例如 `qwenpaw --port 6066 .`：[PR #6892](https://github.com/agentscope-ai/QwenPaw/pull/6892)
- Shell 工具卡片拟增加可选意图标题，隐藏冗长原始命令：[PR #8638](https://github.com/agentscope-ai/QwenPaw/pull/8638)

**推进意义：**  
项目开始强化“Agent 工作成果可视化”和命令执行可读性，有助于改善长任务中的交互体验。

### 总体进展判断

今日虽有 **19 条 PR 已合并或关闭**，但其中相当一部分是较早创建、近期完成评审的历史改动，并非全部在今日新增。真正面向最新 beta 的核心修复仍包括 [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)、[#8654](https://github.com/agentscope-ai/QwenPaw/pull/8654)、[#8638](https://github.com/agentscope-ai/QwenPaw/pull/8638) 等待合并项。  
因此，项目整体确实向前推进，但当前更准确的描述是：**模型治理与 Console 基础能力已显著收敛，桌面插件、多模态和跨平台稳定性仍处于 beta 后的修复窗口。**

---

## 四、社区热点

> 原始 Issue 列表未提供完整点赞数据，以下以评论数、更新时间和问题影响范围作为讨论活跃度代理指标。

### 1. Aliyun Token Plan 思考参数目录缺失

- **Issue：** [#7990 — 模型目录请为 Aliyun Token Plan 模型声明 thinking_param_style](https://github.com/agentscope-ai/QwenPaw/issues/7990)
- **状态：** OPEN
- **评论数：** 4
- **热度判断：** 今日评论最集中的 Issue 之一。

**背后诉求：**  
Aliyun Token Plan 端点实际支持 `reasoning_effort`、`thinking_budget`、`enable_thinking`，但内置目录没有声明 `thinking_param_style`，导致 Console 隐藏或禁用思考模式和推理强度控件。  
这不仅影响单个模型，而是反映模型目录与 Provider 实际协议能力之间存在同步滞后。相关目录更新已在 [PR #7277](https://github.com/agentscope-ai/QwenPaw/pull/7277) 中推进，但该 Issue 仍开放，说明元数据覆盖可能尚未完全闭环。

### 2. 桌面打包版所有 Channel 插件无法激活

- **Issue：** [#8644 — Channel plugins never activate on packaged Desktop builds](https://github.com/agentscope-ai/QwenPaw/issues/8644)
- **PR：** [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)
- **状态：** OPEN / PR 待合并
- **评论数：** 2

**背后诉求：**  
用户期待“一次配置、全平台一致工作”，但 frozen build 的运行身份校验破坏了这一体验。问题覆盖 Feishu、WeChat、Yuanbao 等多个 Channel，具有平台级阻断特征，因此优先级高于一般 UI Bug。

### 3. Creator 官方插件无法安装

- **Issue：** [#8595 — Plugin install fails with “No package metadata was found” for qwenpaw-creator](https://github.com/agentscope-ai/QwenPaw/issues/8595)
- **PR：** [#8654 — release 2.0.5 with safe assets and audio updates](https://github.com/agentscope-ai/QwenPaw/pull/8654)
- **状态：** OPEN / PR 待合并
- **评论数：** 4

**背后诉求：**  
官方插件通过 UI 和 CLI 均无法安装，直接损害“官方出品即可用”的信任。社区还期待插件发布链路具备更清晰的错误诊断、包元数据校验和回滚机制。

### 4. 桌面端 HTML 预览外部打开失效

- **Issue：** [#8502 — 桌面端 HTML 预览“在浏览器中打开”失效](https://github.com/agentscope-ai/QwenPaw/issues/8502)
- **状态：** CLOSED
- **评论数：** 1

**背后诉求：**  
中文路径、浏览器调用和工作区外文件访问均影响 Agent 生成成果的直接使用。虽然 Issue 已关闭，但该场景对中文用户和跨工作区文件尤其重要，建议在 beta.3 回归测试中继续验证。

---

## 五、Bug 与稳定性

### P0 / 严重：可能阻断桌面核心功能

#### 1. 桌面打包版 Channel 插件全部无法激活

- **Issue：** [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)
- **影响：** Feishu、WeChat、Yuanbao 等 Channel 在 packaged/frozen Desktop 中均可能停留在 validation pending 或启动失败。
- **根因：** `validate_runtime_identity` 读取不存在的 `DependencyReadEvidence.supported_tags`，触发 `AttributeError` 和 `WORKER_START_FAILED`。
- **Fix 状态：** **已有修复 PR**：[ #8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)，待合并。
- **风险判断：** 影响面广，属于 beta.3 发布后应优先验证和合并的问题。

#### 2. Windows 上传附件路径被截断为盘符根目录

- **Issue：** [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)
- **影响：** 文件实际保存成功，但传给模型的路径可能变为 `C:\`，导致图片无法加载；报告称 beta.1 起出现，beta.2、beta.3 均可复现。
- **Fix 状态：** 当前摘要中**未发现明确对应修复 PR**。
- **风险判断：** 多模态、文件理解和附件型任务直接失效，且跨越三个 beta 版本，属于高优先级回归。

### P1 / 高：插件、Provider 与任务执行故障

#### 3. 官方 Creator 插件安装失败

- **Issue：** [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)
- **影响：** UI 与 CLI 均报 `No package metadata was found`。
- **Fix 状态：** **有相关 PR**：[ #8654](https://github.com/agentscope-ai/QwenPaw/pull/8654) 正在准备 Creator 2.0.5。
- **风险判断：** 影响官方扩展分发链路，应在发布前补充冷启动安装与升级测试。

#### 4. 自定义 OpenAI 兼容 Provider 的 `run_code` 参数为空

- **Issue：** [#8603](https://github.com/agentscope-ai/QwenPaw/issues/8603)
- **影响：** `run_code` 发出 `{}`，触发 `'code' is a required property`，代码执行工具不可用。
- **Fix 状态：** 当前摘要中**未见直接 fix PR**；较接近的 [PR #7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) 主要处理 Provider 模型发现。
- **风险判断：** 对 Kimi、Kimi CodingPlan 等自定义兼容端点的 Agent 工作流影响明显。

#### 5. mission 切换模型后派发脚本仍使用旧模型

- **Issue：** [#8652](https://github.com/agentscope-ai/QwenPaw/issues/8652)
- **影响：** 任务选择新模型后，实际脚本执行仍使用原模型，可能导致参数格式、能力或上下文不匹配并使任务失败。
- **Fix 状态：** **未见对应修复 PR**。
- **风险判断：** 属于模型路由状态一致性问题，对自动化任务链影响较大。

#### 6. QQ 纯图片 C2C 消息被静默丢弃

- **Issue：** [#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651)
- **影响：** 无文本、仅图片的 QQ 私聊消息在模型调用前即被丢弃，且与 Provider 无关。
- **Fix 状态：** **未见对应修复 PR**。
- **风险判断：** 直接影响多模态 Channel 能力，且静默失败难以被普通用户察觉。

### P2 / 中：环境兼容、搜索与 UI 回归

#### 7. Windows 长路径下 Checkpoint 服务失败，WeChat 依赖环境不明确

- **Issue：** [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627)
- **影响：** Windows 11、Git 2.51、LongPathsEnabled 已开启时仍出现服务失败，WeChat Channel 停留在 `DEPENDENCY_ENVIRONMENT_AMBIGUOUS`。
- **Fix 状态：** 当前摘要中**未见明确修复 PR**。
- **风险判断：** 长路径和依赖识别组合场景复杂，需检查 Git 路径前缀解析与环境探测逻辑。

#### 8. MemorySpace 重复查询相同搜索命中的回合边界

- **Issue：** [#8619](https://github.com/agentscope-ai/QwenPaw/issues/8619)
- **影响：** 同一批 hit rows 的 turn start seq 被解析两次，增加查询开销并可能造成边界数据不一致。
- **Fix 状态：** **未见对应修复 PR**。
- **风险判断：** 更偏内部一致性与性能问题，但搜索结果会频繁依赖该路径。

#### 9. 搜索超时后 SQLite 错误被掩盖

- **Issue：** [#8620](https://github.com/agentscope-ai/QwenPaw/issues/8620)
- **影响：** deadline 已过期时，真实 `sqlite3.OperationalError` 被转换为 `TimeoutError`，降低根因可诊断性。
- **Fix 状态：** **未见对应修复 PR**。
- **风险判断：** 直接影响故障排查，可能延迟发现数据库损坏、锁冲突等问题。

#### 10. 历史大图在每次模型调用中被重复发送

- **Issue：** [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629)
- **影响：** Provider 因尺寸或像素限制拒绝当前媒体后，历史图片仍在后续请求中重复携带；重试还会保留误导性的 `Image loaded` 文本。
- **Fix 状态：** 当前摘要中**未见直接修复 PR**；[PR #8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) 涉及运行时媒体能力，但摘要未明确覆盖请求级媒体拒绝逻辑。
- **风险判断：** 会放大 token、带宽和成本消耗，并可能导致长会话持续失败。

### P3 / 较低：体验与一致性问题

#### 11. 思考块与工具卡片视觉不一致

- **Issue：** [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650)
- **影响：** 长任务中步骤列表左侧边缘持续跳动，降低可读性。
- **Fix 状态：** 无明确 fix PR。
- **风险判断：** 不影响核心执行，但属于高频交互体验债。

#### 12. 桌面 HTML 预览外部打开异常

- **Issue：** [#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502)
- **状态：** CLOSED。
- **影响：** 中文路径提示找不到文件，工作区外文件点击无响应。
- **Fix 状态：** 已关闭，建议确认回归覆盖是否覆盖中文路径和目录外文件。

---

## 六、功能请求与路线图信号

### 1. Managed MLX 引擎与 GPU 控制

- **Feature：** [#8646 — add managed MLX engine and GPU controls to QwenPaw Local](https://github.com/agentscope-ai/QwenPaw/issues/8646)
- **诉求：**
  - 在 QwenPaw Local 中增加受管理的 MLX 引擎。
  - 显示 Apple Silicon 上 Metal GPU offload 是否生效。
  - 提供关闭 GPU 的排障开关。
  - 解决当前只暴露 llama.cpp、界面却只显示默认使用 CPU 的信息缺口。

**路线图判断：中等概率进入后续版本。**  
需求与 QwenPaw Local 的 Apple Silicon 定位高度一致，且属于模型运行基础设施能力。但需先明确 MLX 与现有 llama.cpp 的定位、模型格式兼容和安装体积。

### 2. 官方收录 Mistral Provider 插件

- **Feature：** [#8656 — 请求收录 Mistral provider 插件](https://github.com/agentscope-ai/QwenPaw/issues/8656)
- **诉求：**
  - 支持 Mistral OpenAI 兼容端点的 reasoning。
  - 修复 `reasoning_content` 触发 422。
  - 处理 chunk 列表形式的 `content`。
  - 支持 `prompt_cache_key` 和 prompt caching。
- **关联 PR：** [PR #8654](https://github.com/agentscope-ai/QwenPaw/pull/8654) 涉及 Creator 2.0.5 的资产与音频更新，但未显示直接包含 Mistral 插件。

**路线图判断：可能先以社区插件落地，再决定是否官方内置。**  
该请求具备明确 Provider 钩子和传输层实现基础，但官方目录是否接受第三方 Provider，需要看插件审核和签名分发机制。

### 3. Shell 命令卡片展示“意图标题”

- **PR：** [#8638](https://github.com/agentscope-ai/QwenPaw/pull/8638)
- **诉求：** 为 `execute_shell_command` 增加可选的展示型 `title`，以简短意图替代过长命令。
- **路线图判断：较高概率进入下一版本。**  
改动向后兼容，`command` 仍是唯一必填字段，且能直接改善工具卡片可读性。

### 4. Skills 支持分类嵌套目录

- **PR：** [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)
- **诉求：** 支持 `<root>/<category>/<skill>/SKILL.md`，同时保持原有平铺结构。
- **路线图判断：中高概率纳入。**  
这是向后兼容的目录组织能力，且与主流 Agent 技能生态结构一致。

### 5. Skill 安装性能优化

- **PR：** [#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477)
- **诉求：** 池化 Skill 从 staging 安装到 workspace 时，以 rename 代替第二次完整目录复制。
- **路线图判断：较高概率纳入。**  
属于低风险性能优化，可减少安装时间和磁盘 I/O。

### 6. Ollama 上下文窗口按 `num_ctx` 建模

- **PR：** [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- **诉求：** 本地 Ollama 模型以实际 `num_ctx` 为上下文窗口，而不是固定采用 128K。
- **路线图判断：中高概率纳入。**  
当前默认窗口可能与本地模型真实能力不一致，容易造成截断或错误预算分配。

### 7. Aliyun 思考参数目录补全

- **Issue：** [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)
- **路线图判断：高。**  
属于模型目录元数据补全，修改范围小、用户影响明确，且已有模型目录更新工作作为基础。

---

## 七、用户反馈摘要

### 高频真实痛点

1. **“界面配置成功，但实际能力不可用”**
   - Channel 长期停留在 validation pending：[ #8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)
   - 官方插件安装报缺少 metadata：[ #8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)
   - 用户反馈集中在“UI、CLI 与 packaged Desktop 三种入口行为不一致”。

2. **多模态链路在文件、Channel 和 Provider 之间不连贯**
   - Windows 附件路径被截断：[ #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)
   - QQ 纯图片消息被丢弃：[ #8651](https://github.com/agentscope-ai/QwenPaw/issues/8651)
   - 历史大图重复发送：[ #8629](https://github.com/agentscope-ai/QwenPaw/issues/8629)
   - 用户希望图片能够从“上传—存储—模型请求—渠道传输”全链路稳定工作，而当前各环节分别出现故障。

3. **自定义 Provider 兼容仍不够可靠**
   - `run_code` 空参数被拒：[ #8603](https://github.com/agentscope-ai/QwenPaw/issues/8603)
   - Mistral reasoning 与缓存存在协议差异：[ #8656](https://github.com/agentscope-ai/QwenPaw/issues/8656)
   - 表明 OpenAI-compatible 并不等于完全兼容，Provider 能力探测和协议适配仍有较高需求。

4. **中文 Windows 环境是高频压力场景**
   - 长路径与 Git：[ #8627](https://github.com/agentscope-ai/QwenPaw/issues/8627)
   - 中文路径浏览器预览：[ #8502](https://github.com/agentscope-ai/QwenPaw/issues/8502)
   - 附件盘符路径截断：[ #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)
   - 这类问题对中文用户和 Windows 桌面部署尤其具有代表性。

### 正向反馈与积极信号

- 文档方向受到认可，最新版本补充了多模态 Memory 和 Memory Tags 双语博客：[PR #8506](https://github.com/agentscope-ai/QwenPaw/pull/8506)。
- 用户积极提出可落地的建设性方案，而非仅报告现象：
  - Mistral 插件已给出 Provider 钩子和双向翻译思路：[ #8656](https://github.com/agentscope-ai/QwenPaw/issues/8656)。
  - Shell 意图标题提供了向后兼容的具体设计：[PR #8638](https://github.com/agentscope-ai/QwenPaw/pull/8638)。
  - MLX/GPU 请求说明了用户对 Apple Silicon 本地推理管理的明确需求：[ #8646](https://github.com/agentscope-ai/QwenPaw/issues/8646)。
- 模型目录、免费模型展示和自定义 Provider 发现近期有多项 PR 关闭，说明社区反馈已有效转化为代码改进。

### 不满与信任风险

- beta.1 引入的附件路径问题延续至 beta.3，说明回归测试覆盖不足：[ #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)。
- 官方插件自身无法安装，会降低用户对插件生态稳定性的信任：[ #8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)。
- 同一桌面版本中多个 Channel 同时失效，比单插件故障更易被视为架构性问题：[ #8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)。

---

## 八、待处理积压

### 1. 31 条待合并 PR，评审与合并压力较高

今日共有 **31 条 PR 待合并**。重点项目包括：

- 桌面 Channel 运行时 ABI 修复：[PR #8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)
- Creator 2.0.5 发布：[PR #8654](https://github.com/agentscope-ai/QwenPaw/pull/8654)
- Shell 意图标题：[PR #8638](https://github.com/agentscope-ai/QwenPaw/pull/8638)
- 运行时媒体能力解析：[PR #8100](https://github.com/agentscope-ai/QwenPaw/pull/8100)
- 嵌套 Skills 目录：[PR #8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)
- Ollama 上下文窗口修正：[PR #8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- Skill 安装性能优化：[PR #8477](https://github.com/agentscope-ai/QwenPaw/pull/8477)

**建议：** 对涉及 beta 发布阻断的 PR 单独建立快速审查通道；对其余大型 PR 明确拆分、测试和负责人，避免 31 条积压持续扩大。

### 2. 创建时间较长但仍在审查的关键 PR

- [PR #8100](https://github.com/agentscope-ai/QwenPaw/pull/8100)：10 月 3 日创建，涉及运行时媒体能力，影响所有动态发现模型的多模态行为。
- [PR #8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)：10 月 11 日创建，涉及 Skills 目录兼容性。
- [PR #8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)：10 月 14 日创建，涉及 Ollama 上下文预算准确性。
- [PR #8477](https://github.com/agentscope-ai/QwenPaw/pull/8477)：10 月 28 日创建，涉及安装性能。

这些 PR 已存在数周，应尽快确认是等待大范围评审、存在架构分歧，还是缺少可合并切片。

### 3. 长期开放且影响基础能力的问题

- [Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)：自 9 月 25 日开放，Aliyun 模型思考能力目录仍未闭环。
- [Issue #8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)：官方 Creator 插件安装失败，直接影响官方生态可信度。
- [Issue #8603](https://github.com/agentscope-ai/QwenPaw/issues/8603)：自定义 Provider 的工具调用参数问题未显示直接修复。
- [Issue #8620](https://github.com/agentscope-ai/QwenPaw/issues/8620) 与 [Issue #8619](https://github.com/agentscope-ai/QwenPaw/issues/8619)：MemorySpace 搜索边界与错误保真问题尚无明确修复。
- [Issue #8652](https://github.com/agentscope-ai/QwenPaw/issues/8652)：mission 切换模型后仍使用旧模型，属于状态一致性风险。

### 4. 建议维护者优先关注

1. **立即合并并验证** [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)，确认桌面版 Channel 启动恢复。
2. **为 beta.3 建立附件路径回归门禁**，覆盖中文路径、盘符根目录、工作区外文件和多模态读取：[ #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)。
3. **核验官方 Creator 包元数据发布链路**，避免主版本和插件版本各自发布但无法安装：[ #8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)。
4. **为 Windows + 长路径 + frozen Desktop 建立组合测试矩阵**，覆盖 [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627)、[#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) 和 [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)。
5. **清理 PR 积压并公开优先级**：对 31 条待合并 PR 标记 release-blocker、next-release、backlog 或 stale，减少长期占用。

---

## 结论

QwenPaw 今日的关键词是 **“高活跃发布、桌面稳定性集中修复、多模态与 Provider 能力持续补齐”**。项目并未停滞，反而进入一轮较深的模型治理和运行时可靠性建设；但 beta.3 仍存在跨 beta 延续的附件路径回归，以及 packaged Desktop 的 Channel 级阻断，说明发布质量门禁尚需加强。

短期最值得关注的三个指标是：

1. [PR #8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) 能否快速合并并解决 [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)；
2. [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) 是否出现明确修复 PR；
3. 31 条待合并 PR 是否能在下一轮发布前完成清理与优先级确认。

若上述事项得到收敛，QwenPaw 的项目健康度可从当前的中高水平提升到稳定 beta 状态；否则，桌面插件和多模态链路仍可能成为下一轮用户反馈的集中来源。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-10**  
**数据范围：过去 24 小时 GitHub Issues、Pull Requests 与 Releases**

## 1. 今日速览

- 过去 24 小时共更新 **50 条 Issues、50 条 PR**，另有 **1 个新版本 v0.23.1** 发布，项目处于高强度开发与问题收敛阶段。
- PR 中仍有 **41 个待合并、9 个已合并或关闭**，待处理占比 **82%**，说明代码吞吐量大，但评审、验证和合并压力仍然较高。
- 今日问题主要集中于 **统一 Gateway 架构、会话持久化、桌面端状态同步、Windows 兼容、流式响应稳定性及插件/Telegram 格式化**。
- 社区反馈呈现出明显的两面性：统一 Gateway 与桌面端集成推进迅速，但架构迁移后暴露出的跨模块回归问题较多；不过多个高关注 Bug 已有对应修复 PR。
- 综合判断，项目健康度为 **“活跃但承压”**：发布节奏稳定、创新功能持续进入，但核心 Gateway、Desktop 和会话状态链路需要下一轮集中收敛。

---

## 2. 版本发布

### v0.23.1：Hermes Agent v0.23.1

**发布日期：2026-11-09**  
**Release 链接：** [GitHub Release v0.23.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1)

本次为补丁版本，主要将自 **v0.23.0** 以来合并的约 **618 个 PR** 汇总为稳定发行，覆盖：

- GitHub Release 中的 CLI 与安装器；
- Microsoft Store 应用；
- Docker 镜像；
- Hermes Cloud。

#### 更新特点

- 发布规模较大，属于典型的“集中稳定化发布”，而不是单一功能版本。
- v0.23.0 至 v0.23.1 期间的大量 Gateway、Desktop、插件、会话及工具链改动均可能进入用户环境。
- Release 页面没有提供逐项破坏性变更说明，而是表示该窗口的完整精选说明将随 **v0.24.0** 发布。

#### 破坏性变更与迁移注意事项

- 当前 Release 未明确声明破坏性变更，也没有提供独立迁移指南。
- 由于包含约 618 个 PR，建议生产用户升级前重点回归：
  1. **Gateway 与多平台消息接入**：Telegram、Discord、WhatsApp 等；
  2. **SQLite 会话和消息持久化**：尤其是从 v0.22.1 升级的部署；
  3. **Desktop 会话切换、流式消息与历史恢复**；
  4. **Windows 启动器、WhatsApp 子进程和 Keet 安装向导**；
  5. **插件目录、Markdown 表格及 Telegram 格式输出**；
  6. **OpenAI/Codex、Bedrock、Anthropic 等提供商兼容性**。
- Windows Store 更新可能移除旧解释器路径，升级后应确认自启动和本地 Gateway 仍能正常启动；相关修复正在推进：
  - [PR #152232：重新生成解释器被 Store 更新移除的 Windows 启动器](https://github.com/NousResearch/hermes-agent/pull/152232)
- 对依赖旧版本持久化数据、插件固定版本或自定义 Gateway 工作目录的环境，建议保留旧环境用于回滚，并先备份 `state.db` 和 Hermes 配置目录。

---

## 3. 项目进展

### 3.1 重要 PR 状态

过去 24 小时共更新 **50 个 PR**：

- **待合并：41 个（82%）**
- **已合并或关闭：9 个（18%）**
- PR 列表中有 2 个明确标记为 **CLOSED**：
  - [PR #151940：修正 Glorya 插件维护者](https://github.com/NousResearch/hermes-agent/pull/151940)
  - [PR #151934：为 reset-rescue 插件补充卡片图片和截图](https://github.com/NousResearch/hermes-agent/pull/151934)
- 另有 [PR #142883：修复宠物图片生成遵循托管 Krea 路由](https://github.com/NousResearch/hermes-agent/pull/142883) 已关闭。
- 本批 PR 中暂未出现明确标记为 **MERGED** 的条目，因此不能仅依据当前摘要认定这些修复已正式进入 v0.23.1。

### 3.2 主要推进方向

#### 桌面端会话状态修复

- [PR #132913：桌面端历史水合时保留工具状态，避免重复持久化块](https://github.com/NousResearch/hermes-agent/pull/132913)
  - 目标是防止已持久化的 tool/commentary 块被历史加载重新注入；
  - 同时保留 REST 读取期间新到达的实时消息后缀；
  - 直接对应桌面端重复块、消息乱序和工具状态丢失问题。

- [PR #145459：读取当前历史时保留本地会话地址](https://github.com/NousResearch/hermes-agent/pull/145459)
  - 修复 reset 后仍读取旧会话历史、导致当前消息被替换的问题；
  - 对 Desktop 会话生命周期和本地物理地址稳定性有直接价值。

#### Gateway 与桌面端可靠性

- [PR #152472：优化 Bot Group 输入性能，避免每次按键重绘整个房间](https://github.com/NousResearch/hermes-agent/pull/152472)
  - 将群聊历史与输入草稿状态解耦；
  - 直接修复群聊随历史增长而出现按键卡顿的问题；
  - 对应 [#152114](https://github.com/NousResearch/hermes-agent/issues/152114)。

- [PR #152232：修复 Windows Store 更新后启动器失效](https://github.com/NousResearch/hermes-agent/pull/152232)
  - Store 更新删除旧 Python 后，自动重新渲染启动器；
  - 提升 Windows 自动启动和升级后的可恢复性。

- [PR #151621：保持 relay 与 detached backend 工作时机器不休眠](https://github.com/NousResearch/hermes-agent/pull/151621)
  - 避免长任务、消息接力或仪表盘后台工作在客户端断开后被提前终止；
  - 同时修正 Gateway agent slot 过早释放的问题。

#### 模型流式响应与提供商兼容

- [PR #147551：为 Codex Responses 和 Bedrock Converse 接入 `stream_max_lifetime`](https://github.com/NousResearch/hermes-agent/pull/147551)
  - 将流式请求最长生命周期限制扩展到此前未覆盖的两条协议链路；
  - 解决部分提供商在流式请求上无限等待或超时行为不一致的问题。

#### Telegram 与 Markdown 稳定性

- [PR #152466：修复 Telegram 粗体、斜体、表格和美元符号转义](https://github.com/NousResearch/hermes-agent/pull/152466)
  - 修复粗体文本中的孤立 `*` 引发误格式化；
  - 修复特殊输入导致扫描耗时数秒、阻塞整个 Bot；
  - 修复表格单元格中的反引号跨列配对；
  - 合并了多个相关 Telegram 格式问题，预计是今日最值得优先合入的修复之一。

#### 配置与远程后端

- [PR #147999：保留 YAML 列表项原有格式](https://github.com/NousResearch/hermes-agent/pull/147999)
  - 避免删除列表项时，幸存条目的引号和注释被错误迁移；
  - 同时保持整数、浮点数、布尔值和嵌套结构的类型区分；
  - 属于配置编辑器安全性改进。

- [PR #152470：避免 SSH 后端使用远程主机上的 Docker Hermes Home](https://github.com/NousResearch/hermes-agent/pull/152470)
  - 防止 Docker 中的 `terminal.cwd`、`workdir` 或子代理工作目录错误指向远端 Hermes Home；
  - 降低 SSH 与 Docker 嵌套部署中的路径串用风险。

#### 工具调用成本优化

- [PR #152474：精简七个核心工具 Schema 的重复规则](https://github.com/NousResearch/hermes-agent/pull/152474)
  - 去除工具描述与参数说明中的重复文本；
  - 据称每次调用可减少约 **696 tokens**；
  - 在不改变行为的前提下降低上下文开销，属于较高价值的效率优化。

#### 插件生态与目录治理

- [PR #152237：新增 159 个 AgentStatus 托管公共 MCP 条目](https://github.com/NousResearch/hermes-agent/pull/152237)
  - 扩展公共 MCP 的可发现性和可用覆盖面；
  - 但一次引入 159 个目录项，需要关注供应链审核、版本固定和条目质量。

- [PR #149855：新增 Creature Workshop 插件](https://github.com/NousResearch/hermes-agent/pull/149855)
  - 通过 `.ops/` 目录统一管理项目工具、配置及锁文件；
  - 反映插件生态正从单点工具向项目生命周期管理扩展。

- [PR #152056：修正 quotum 插件维护者信息](https://github.com/NousResearch/hermes-agent/pull/152056)
- [PR #145330：优化 live-time 插件搜索描述](https://github.com/NousResearch/hermes-agent/pull/145330)
- [PR #142786：修正 nano-pdf 文档指引](https://github.com/NousResearch/hermes-agent/pull/142786)

### 3.3 整体进展评估

本期推进可归纳为：

1. **从“功能扩张”转向“架构迁移后的稳定性收敛”**；
2. **Desktop 会话状态、Gateway 生命周期和消息持久化成为主线**；
3. **工具 Schema 优化和插件目录扩充并行推进**；
4. **跨平台格式化和 Windows 部署体验获得针对性修复**。

但 82% 的 PR 仍待合并，且多个核心 Bug 只有修复 PR、尚未确认合并，因此项目虽然“向前推进明显”，仍需要一轮 CI、回归测试与维护者评审才能真正转化为稳定版本收益。

---

## 4. 社区热点

### 4.1 统一 Gateway 合并后的综合问题跟踪

- [Issue #143547：统一 Gateway 合并后主分支遗留问题总跟踪](https://github.com/NousResearch/hermes-agent/issues/143547)
- **60 条评论，为今日最活跃 Issue。**

这是本轮架构迁移的集中跟踪入口，覆盖：

- CLI、TUI、Desktop、API Server；
- 编辑器与消息平台；
- Cron、Kanban、Group Chat；
- 鉴权、配置、会话、压缩及连接层。

社区核心诉求不是单点修复，而是希望维护者提供清晰、可验证的迁移状态：哪些路径已经统一、哪些仍存在双轨逻辑，以及旧部署如何安全升级。当前高达 60 条评论反映用户对统一 Gateway 的期待，也反映该重大改造的回归面过大。建议维护者按子模块拆分关闭条件，并标注已修复版本。

### 4.2 Keet Gateway 安装向导崩溃

- [Issue #97065：`hermes gateway setup` 选择 Keet 后触发 `_n() missing required argument 'config'`](https://github.com/NousResearch/hermes-agent/issues/97065)
- **27 条评论。**

用户场景集中在 Windows 11、Node.js 24、Keet Desktop 和 Keet 插件环境。诉求是恢复 Gateway 插件安装流程，并提供清晰的错误定位与版本兼容说明。这是典型的“安装即阻断”问题，优先级应高于一般体验优化；当前摘要中未出现明确对应修复 PR。

### 4.3 WhatsApp 在 Windows 特殊作业对象中无法启动

- [Issue #68128：WhatsApp bridge spawn 触发 `WinError 5`](https://github.com/NousResearch/hermes-agent/issues/68128)
- **20 条评论，2 个赞。**

用户需要 Hermes 在 Windows no-breakaway job object、企业安全软件或受管环境中仍可启动 WhatsApp bridge。诉求聚焦于补齐 `windows_detach_flags_without_breakaway()` 回退逻辑。该问题直接影响消息平台可用性，属于 Windows 部署的高优先级稳定性问题。

### 4.4 推理字段别名导致请求失败

- [Issue #136486：同时重放 `reasoning` 与 `reasoning_content` 触发 HTTP 400 duplicate field](https://github.com/NousResearch/hermes-agent/issues/136486)
- **18 条评论，3 个赞。**

OpenAI 兼容端点将 `reasoning` 视为别名时，Hermes 的历史重放会触发重复字段校验，而且字段拒绝学习机制未能生效，导致每轮请求持续回退。诉求包括：

- 去重或规范化别名；
- 让 provider 错误学习真正生效；
- 避免每个新会话重复消耗一次失败请求。

这是兼容层与错误恢复机制共同失效的问题，对第三方代理服务用户影响较大。

### 4.5 Gateway 空闲压缩机制失效

- [Issue #79357：gateway 模式下 `idle_compact_after_seconds` 永不触发](https://github.com/NousResearch/hermes-agent/issues/79357)
- **12 条评论，2 个赞。**

Gateway 在新一轮外部活动开始时重置 `_last_activity_ts`，随后压缩检查又读取同一时间戳，导致“空闲时长”始终被归零。长期会话因此无法按预期压缩，可能带来上下文膨胀、成本升高和响应质量下降。诉求是分离活动心跳与压缩计时状态。

### 4.6 Desktop 上下文用量弹窗为空

- [Issue #142925：非驻留 Agent 的会话始终显示“暂无上下文数据”](https://github.com/NousResearch/hermes-agent/issues/142925)
- **10 条评论。**

Desktop 会话切换后，只要对应 Agent 不常驻 Gateway，就无法显示已存储的上下文用量。诉求是从持久化会话数据恢复 `used/max/%`，而不是只依赖当前驻留实例。该问题影响用户判断剩余上下文和压缩时机，当前未看到明确对应修复 PR。

### 4.7 PR 侧热点

- [PR #132913：桌面端持久化实时块与工具状态协调](https://github.com/NousResearch/hermes-agent/pull/132913)
- [PR #147551：Codex 与 Bedrock 流式生命周期限制](https://github.com/NousResearch/hermes-agent/pull/147551)
- [PR #152474：工具 Schema 去重，减少每次调用约 696 tokens](https://github.com/NousResearch/hermes-agent/pull/152474)
- [PR #152466：Telegram Markdown 格式化修复](https://github.com/NousResearch/hermes-agent/pull/152466)
- [PR #152472：Desktop 群聊输入性能优化](https://github.com/NousResearch/hermes-agent/pull/152472)

PR 的关注方向比 Issue 更集中于可验证的性能、协议和 UI 修复，说明社区开发者正积极参与“收敛复杂度”和“减少调用成本”。

---

## 5. Bug 与稳定性

> “已有 fix PR”仅依据所提供摘要判断；“未见对应 PR”不代表仓库中一定不存在修复。

### P0 / 严重安全与数据完整性风险

#### 1. 受保护指令文件可绕过审批门

- [Issue #143266：terminal、execute_code、process_manage 可绕过受保护文件审批](https://github.com/NousResearch/hermes-agent/issues/143266)
- **状态：开放；摘要中未见对应 fix PR。**

当前审批门只覆盖文件工具，但代理可以通过终端或代码执行覆盖 `AGENTS.md`、`SOUL.md`、`CLAUDE.md`、`.cursorrules` 等指令文件。这不仅是功能缺陷，也可能破坏代理安全边界。建议作为最高优先级处理，将所有写入路径统一接入受保护文件检查。

### P1 / 高优先级

#### 2. Gateway 消息未持久化到 SQLite

- [Issue #140823：WeChat/Telegram 消息未写入 `state.db`](https://github.com/NousResearch/hermes-agent/issues/140823)
- **状态：开放；摘要中未见明确 fix PR。**

自 v0.22.1 起，消息可处理并回复，但 `sessions/messages` 表保持为空，Desktop 因读取 SQLite 而显示零消息。该问题同时影响数据可见性、历史恢复和跨端一致性。

#### 3. `delegate_task` 共享 Anthropic OAuth 池导致互相撤销令牌

- [Issue #138337：共享 CredentialPool 在 401 时相互撤销 OAuth token](https://github.com/NousResearch/hermes-agent/issues/138337)
- **状态：开放；摘要中未见明确 fix PR。**

并发子代理在刷新同一凭据时可能撤销兄弟代理刚刷新的 token，并最终耗尽刷新额度。其影响可能从单次 401 扩展为整个协调回合不可用。

#### 4. Windows 桌面端 TicketBridge 超时杀死 helper

- [Issue #151351：慢 ticket 导致 Python helper 被定时终止并触发完整重启](https://github.com/NousResearch/hermes-agent/issues/151351)
- **状态：开放；摘要中未见明确 fix PR。**

10 秒或 30 秒定时器可能结束整个 helper，所有进行中的 ticket 请求被拒绝，并使一次慢请求升级为完整 Gateway 启动失败。

### P2 / 重要功能与稳定性问题

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [Keet Gateway setup 崩溃 #97065](https://github.com/NousResearch/hermes-agent/issues/97065) | Windows 安装向导直接失败 | 未见对应 PR |
| [WhatsApp `WinError 5` #68128](https://github.com/NousResearch/hermes-agent/issues/68128) | Windows 平台消息桥无法启动 | 未见对应 PR |
| [`reasoning` 字段重复 #136486](https://github.com/NousResearch/hermes-agent/issues/136486) | 第三方兼容端点每轮 HTTP 400 | 未见对应 PR |
| [Gateway 空闲压缩失效 #79357](https://github.com/NousResearch/hermes-agent/issues/79357) | 会话无法自动压缩，成本与质量下降 | 未见对应 PR |
| [`process_manage` 分页 TypeError #141988](https://github.com/NousResearch/hermes-agent/issues/141988) | 无法分页读取后台进程日志 | 未见对应 PR |
| [长单行 JSON 完成通知丢失 #131786](https://github.com/NousResearch/hermes-agent/issues/131786) | 后台任务结果被截断或丢失 | 未见对应 PR |
| [Desktop 上下文弹窗为空 #142925](https://github.com/NousResearch/hermes-agent/issues/142925) | 无法查看会话上下文占用 | 未见对应 PR |
| [Desktop 会话切换出现重复块与乱序 #121096](https://github.com/NousResearch/hermes-agent/issues/121096) | 历史消息重复、顺序错乱 | **已有 PR #132913** |
| [Markdown 表格反引号跨列配对 #151724](https://github.com/NousResearch/hermes-agent/issues/151724) | Telegram/Discord/CLI 表格丢列 | **已有 PR #152466** |
| [Telegram 新私聊 topic 恢复后不可见 #152148](https://github.com/NousResearch/hermes-agent/issues/152148) | 消息已送达但用户无法打开 topic | 未见对应 PR |
| [未使用旧 home 打开 SessionDB 失败 #121882](https://github.com/NousResearch/hermes-agent/issues/121882) | 升级或迁移后无法打开会话 | 未见对应 PR |
| [Codex zstd 请求偶发 HTTP 400 #148898](https://github.com/NousResearch/hermes-agent/issues/148898) | Responses 请求间歇失败且被归为不可重试 | 未见对应 PR |
| [桌面端 mid-turn 消息延迟 5 分钟以上 #149598](https://github.com/NousResearch/hermes-agent/issues/149598) | `busy_input_mode: interrupt` 未生效 | 未见明确 PR；相关 Gateway 工作由 [PR #151621](https://github.com/NousResearch/hermes-agent/pull/151621) 覆盖但并非完全对应 |
| [Hosted-room 每次任务重开 SQLite #149223](https://github.com/NousResearch/hermes-agent/issues/149223) | Gateway CPU 随房间历史增长 | 未见对应 PR |
| [browser_vault 原生提示期间浏览器被关闭 #151079](https://github.com/NousResearch/hermes-agent/issues/151079) | 密码/验证码无法完成 | 未见对应 PR |
| [Bot 群聊输入卡顿 #152114](https://github.com/NousResearch/hermes-agent/issues/152114) | 每次按键重绘完整历史 | **已有 PR #152472** |
| [Desktop 大文本粘贴触发 UTF-16 代理项 #150281](https://github.com/NousResearch/hermes-agent/issues/150281) | 提交失败且提示丢失 | 未见对应 PR |
| [Codex acknowledgment 重复提示协调者 #149942](https://github.com/NousResearch/hermes-agent/issues/149942) | Bot 私聊产生重复协调请求 | 未见对应 PR |

### P3 / 中低优先级但影响维护质量

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [`systemctl show` 误报 timing 对齐 #36755](https://github.com/NousResearch/hermes-agent/issues/36755) | 系统级 systemd 部署产生永久启动警告 | 未见对应 PR |
| [Windows Store 更新后启动器失效](https://github.com/NousResearch/hermes-agent/issues/151351) | 自启动不可用 | **已有 PR #152232** |
| [SSE keepalive 被误判为 stale stream #151280](https://github.com/NousResearch/hermes-agent/issues/151280) | 活跃流在 240 秒被终止 | 与 [PR #147551](https://github.com/NousResearch/hermes-agent/pull/147551) 的生命周期治理相关，但需确认是否覆盖 ping/comment |
| [Buzz ACP 子代理丢失凭据 #145201](https://github.com/NousResearch/hermes-agent/issues/145201) | 托管代理只能收消息、不能回复 | 未见对应 PR |

---

## 6. 功能请求与路线图信号

### 6.1 Gateway 会话间可信触发与角色交接

- [Issue #17415：Trusted Internal Session Trigger / Role Handoff](https://github.com/NousResearch/hermes-agent/issues/17415)
- **5 条评论。**

诉求是让 Director/Coordinator 等受信会话向预定义角色会话派发有界任务，并具备权限、范围及生命周期约束。

**路线图判断：中高概率进入后续版本。**  
这与现有 `delegate_task`、`message_agent`、Group Chat、Gateway 多会话能力高度一致，属于统一 Gateway 后的自然延伸。但需要先明确授权模型、消息路由和防递归机制，安全边界设计将是合并门槛。

### 6.2 后台进程完成结果主动注入当前回合

- [Issue #134198：将后台进程完成事件在安全的续接点送达模型](https://github.com/NousResearch/hermes-agent/issues/134198)
- **4 条评论。**

诉求是当后台终端任务在当前长回合中完成时，模型能在下一个安全边界获得结果，而不是继续使用过时假设。

**路线图判断：中高概率。**  
PR [#151621](https://github.com/NousResearch/hermes-agent/pull/151621) 已涉及 detached backend 与 Gateway 生命周期，说明该方向正在开发；但“主动注入模型”比单纯保持进程存活更复杂，仍需事件队列、去重及并发控制。

### 6.3 Hermes 语音播报插件钩子

- [Issue #152238：为 Hermes 自己朗读的文本增加独立插件 hook](https://github.com/NousResearch/hermes-agent/issues/152238)
- **2 条评论。**

当前 `/voice on`、自动 TTS、朗读路径会在插件钩子之外处理文本。用户希望插件能分别控制：

- 屏幕显示文本；
- 实际语音文本；
- 自动化朗读内容。

**路线图判断：中等概率。**  
该需求边界清晰，适合通过插件生命周期扩展实现，但需避免破坏现有语音格式化和 Markdown 清理逻辑。

### 6.4 公共 MCP 生态扩张

- [PR #152237：新增 159 个 AgentStatus 公共 MCP](https://github.com/NousResearch/hermes-agent/pull/152237)

**路线图判断：高概率进入目录，但需审查。**  
这显示 Hermes 正积极发展 MCP 与插件分发网络。一次性加入大量社区条目会显著扩大可用能力，同时也会提高供应链、可用性和版本固定风险。

### 6.5 Creature Workshop 项目生命周期插件

- [PR #149855：新增 Creature Workshop 插件](https://github.com/NousResearch/hermes-agent/pull/149855)

**路线图判断：中等概率。**  
它把项目配置、工具和锁文件统一到 `.ops/`，反映生态正从“调用一个工具”走向“管理完整开发工作流”。

### 6.6 下一版本可能重点

综合 Issue 和 PR，下一版本大概率围绕：

1. 统一 Gateway 迁移收尾；
2. SQLite 会话持久化一致性；
3. Desktop 会话切换与历史恢复；
4. Windows 安装、启动及平台桥接；
5. Telegram/Discord/Markdown 格式稳定性；
6. 流式请求超时与 provider 兼容；
7. 后台任务事件回注；
8. 工具 Schema 精简带来的 token 成本下降。

---

## 7. 用户反馈摘要

### 7.1 主要真实使用场景

- **多平台个人助理**：Telegram、Discord、WhatsApp、微信与 Keet 用户希望消息可靠接入，并在 Desktop 中保留完整历史。
- **长期运行的 Agent 会话**：用户依赖自动压缩、上下文用量展示和后台任务完成通知，避免长会话失控。
- **桌面端多会话工作**：用户在流式输出期间切换聊天、粘贴大段内容和查看群聊，关注状态一致性及输入性能。
- **第三方模型代理接入**：OpenAI 兼容代理、Codex、Bedrock、Anthropic OAuth 和 ACP harness 用户需要更稳定、统一的字段和凭据处理。
- **Windows 企业环境**：受到 Store 更新、作业对象、安全软件和解释器迁移影响，安装与自动启动的可靠性诉求突出。
- **插件与 MCP 用户**：更关注插件目录正确性、公共 MCP 数量，以及工具描述是否浪费上下文 token。

### 7.2 满意点

- 统一 Gateway 的方向得到持续参与和反馈，复杂会话、Cron、群聊和多端能力具备较强吸引力。
- 插件生态扩展迅速，社区愿意主动提交工具 Schema 优化、Telegram 格式化修复、Windows 启动器修复和性能优化。
- 工具 Schema 去重 PR 明确给出 **每次调用约减少 696 tokens** 的量化收益，符合成本敏感型用户的核心诉求：
  - [PR #152474](https://github.com/NousResearch/hermes-agent/pull/152474)

### 7.3 不满意点

- **升级后基础功能退化**：用户对 v0.22.1 后消息不写 SQLite、Desktop 会话乱序、上下文弹窗为空等问题反应明显。
- **安装和启动阻断**：Keet、WhatsApp、Windows Store/TicketBridge 等问题发生在首次使用或后台运行阶段，直接阻止核心场景。
- **错误恢复不透明**：字段拒绝不学习、HTTP 400 被判定不可重试、OAuth 刷新互相撤销，用户担心 Agent 在错误状态下持续消耗资源。
- **跨版本发布缺少逐项说明**：v0.23.1 汇总约 618 个 PR，却将精选说明推迟到 v0.24.0，用户难以判断升级后哪些行为发生变化。
- **架构迁移带来回归面过大**：统一 Gateway 覆盖组件太多，跟踪 Issue 达到 60 条评论，说明变更管理和回归测试仍需加强。

---

## 8. 待处理积压

### 8.1 高关注、长期开放的关键 Issue

1. [Issue #143547：统一 Gateway 合并后遗留问题总跟踪](https://github.com/NousResearch/hermes-agent/issues/143547)  
   - 创建于 2026-10-23，仍有 60 条评论；
   - 涉及面广，需拆分里程碑并逐项关闭。

2. [Issue #97065：Keet Gateway setup TypeError](https://github.com/NousResearch/hermes-agent/issues/97065)  
   - 创建于 2026-08-28，27 条评论；
   - 安装阻断问题长期开放，用户无法完成插件配置。

3. [Issue #68128：Windows WhatsApp bridge `WinError 5`](https://github.com/NousResearch/hermes-agent/issues/68128)  
   - 创建于 2026-07-20，20 条评论；
   - 平台桥接长期不可用，且涉及 Windows 特殊部署环境。

4. [Issue #36755：systemd timing alignment 误报](https://github.com/NousResearch/hermes-agent/issues/36755)  
   - 创建于 2026-06-01，14 条评论；
   - 系统级部署持续产生错误告警，降低诊断可信度。

5. [Issue #86421：压缩后重新注入技能内容](https://github.com/NousResearch/hermes-agent/issues/86421)  
   - 创建于 2026-08-14，8 条评论；
   - 压缩后技能能力可能丢失，属于长期上下文质量债务。

6. [Issue #121096：Desktop 会话切换出现重复块与乱序](https://github.com/NousResearch/hermes-agent/issues/121096)  
   - 创建于 2026-09-24；
   - 已有 [PR #132913](https://github.com/NousResearch/hermes-agent/pull/132913)，应尽快完成评审、回归测试和合并。

### 8.2 长期开放的 PR

- [PR #132913：桌面端历史水合与实时块协调](https://github.com/NousResearch/hermes-agent/pull/132913)  
  创建于 2026-10-04，至今仍在开放；对应高影响 Desktop 状态 Bug，应优先确认测试覆盖和合并条件。

- [PR #142786：修正 nano-pdf 索引与付费上传文档](https://github.com/NousResearch/hermes-agent/pull/142786)  
  创建于 2026-10-21；变更虽小，但长期未收敛会持续造成用户误用。

- [PR #145330：优化 live-time 插件搜索描述](https://github.com/NousResearch/hermes-agent/pull/145330)  
  创建于 2026-10-27；属于低风险目录维护项，可快速合并或关闭。

- [PR #145459：保留本地会话物理地址](https://github.com/NousResearch/hermes-agent/pull/145459)  
  创建于 2026-10-27；直接关联会话 reset 后历史错读，应与 [PR #132913](https://github.com/NousResearch/hermes-agent/pull/132913) 一并评估。

### 8.3 维护建议

- **优先合并安全与数据完整性修复**：
  - [#143266](https://github.com/NousResearch/hermes-agent/issues/143266)
  - [#140823](https://github.com/NousResearch/hermes-agent/issues/140823)
  - [#138337](https://github.com/NousResearch/hermes-agent/issues/138337)
  - [#151351](https://github.com/NousResearch/hermes-agent/issues/151351)
- **将统一 Gateway 跟踪 Issue 拆分为按组件关闭的子清单**：
  - [#143547](https://github.com/NousResearch/hermes-agent/issues/143547)
- **给 Windows 专项问题设置统一责任人**：
  - [#68128](https://github.com/NousResearch/hermes-agent/issues/68128)
  - [#151351](https://github.com/NousResearch/hermes-agent/issues/151351)
  - [PR #152232](https://github.com/NousResearch/hermes-agent/pull/152232)
- **对 50 个待合并 PR 进行批量 triage**，优先处理已经有明确用户 Issue 和回归测试的修复：
  - [PR #132913](https://github.com/NousResearch/hermes-agent/pull/132913)
  - [PR #147551](https://github.com/NousResearch/hermes-agent/pull/147551)
  - [PR #152466](https://github.com/NousResearch/hermes-agent/pull/152466)
  - [PR #152472](https://github.com/NousResearch/hermes-agent/pull/152472)

---

## 项目健康度结论

**健康度评级：中高，趋势为“活跃但承压”。**

- **开发活跃度：高**——24 小时内 100 条 Issue/PR 更新，并发布新版本；
- **交付吞吐：高**——单版本窗口累计约 618 个 PR；
- **社区参与度：高**——核心问题有持续复现、讨论和修复贡献；
- **稳定性：中等**——Gateway、Desktop、会话持久化及 Windows 路径存在明显回归；
- **积压压力：偏高**——82% 的 PR 仍待合并，核心 Issue 缺少明确闭环；
- **下一阶段重点**：不是继续快速增加功能数量，而是完成统一 Gateway 和 Desktop 状态的收敛、补齐跨平台回归测试，并明确大规模版本发布的迁移说明。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-10**  
**数据范围：过去 24 小时**  
**项目：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

过去 24 小时项目保持较高活跃度，共更新 **50 条 Issues** 和 **15 条 PRs**；其中 47 条 Issue 新开或仍活跃、3 条关闭，PR 待合并 9 条、合并或关闭 6 条。过去 24 小时 **没有发布新版本**，用户主要集中反馈模型兼容性、凭据安全、后台任务稳定性和前端崩溃等问题。已关闭的重要修复涵盖后台补全存储隔离、工作流自动触发器停用、后台子智能体事件投递和 Unicode 文本截断，说明核心可靠性正在改善，但 PR 积压和长周期问题仍较明显。整体健康度评估为：**活跃但承压**——问题发现和修复并行推进，不过用户关键路径上的 P1 问题、更新机制及可观测性误报仍需要尽快收敛。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日共更新 **15 条 PR**，其中 **9 条待合并、6 条已合并或关闭**。已关闭 PR 中，至少 4 项直接推进了稳定性、安全性或关键工作流修复。

### 已合并或关闭的重要 PR

1. **后台补全路由按工作区和存储作用域隔离**  
   PR [#7920](https://github.com/tinyhumansai/openhuman/pull/7920) 已关闭，对应 Issue [#7687](https://github.com/tinyhumansai/openhuman/issues/7687) 也已关闭。  
   该变更避免不同工作区或存储作用域错误复用同一个补全存储，降低跨工作区状态串用和错误降级到内存存储的风险。后续仍有一个工作区持久化细节需要跟进，见 [#8644](https://github.com/tinyhumansai/openhuman/issues/8644)。

2. **保存工作流时自动停用已启用的自动触发流程**  
   PR [#8541](https://github.com/tinyhumansai/openhuman/pull/8541) 已关闭，对应 Issue [#8489](https://github.com/tinyhumansai/openhuman/issues/8489) 也已关闭。  
   修复了工作流构建器保存后，新图未经确认便立即上线的问题。现在保存图结构会先解除自动触发状态，降低误操作造成生产行为变更的风险。

3. **后台投递轮次中的子智能体改为路由到用户 Socket**  
   PR [#8565](https://github.com/tinyhumansai/openhuman/pull/8565) 已关闭。  
   此前后台投递使用没有 Socket 的 `system` 客户端，子智能体进度会被丢弃，用户看不到“Delegated to…”事件。修复后，后台子智能体事件可送达用户界面。

4. **Unicode 文本截断不再产生孤立代理项**  
   PR [#8604](https://github.com/tinyhumansai/openhuman/pull/8604) 已关闭。  
   修复在 UTF-16 长度限制下截断 emoji 等补充平面字符时生成孤立代理项的问题，并覆盖共享辅助函数和工作流代理卡片摘要。

5. **前端测试中的 Keyring 授权跳过项重新关联跟踪 Issue**  
   PR [#8607](https://github.com/tinyhumansai/openhuman/pull/8607) 已关闭。  
   此次为测试维护调整，在跳过说明中补充 Issue URL，使 `browser-test-skip-guard` 不再将合法的条件性跳过误判为失败。

6. **`delegate_graph` 工具错误标识统一**  
   PR [#8060](https://github.com/tinyhumansai/openhuman/pull/8060) 已关闭。  
   相关 Issue 已通过其他途径完成，该 PR 等待维护者决定是否仍需纳入，避免功能范围和修复状态长期不一致。

### 待合并 PR 重点

- **所有配置快照中的凭据脱敏**：PR [#8608](https://github.com/tinyhumansai/openhuman/pull/8608)，对应安全发现 TS-E2E-047；这是当前优先级较高的安全修复。
- **语音上传前执行隐私出口策略**：PR [#8061](https://github.com/tinyhumansai/openhuman/pull/8061)，覆盖 7 类语音请求路径。
- **本地 Core 的 JSON-RPC 请求绕过系统代理**：PR [#8169](https://github.com/tinyhumansai/openhuman/pull/8169)，避免 loopback 请求被错误代理。
- **工作区相对 artifact 路径安全解析**：PR [#8647](https://github.com/tinyhumansai/openhuman/pull/8647)，直接修复 [#8643](https://github.com/tinyhumansai/openhuman/issues/8643)。
- **本地 AI 连接失败后恢复旧设置**：PR [#8205](https://github.com/tinyhumansai/openhuman/pull/8205)，但并发连接场景仍有遗留，见 [#8645](https://github.com/tinyhumansai/openhuman/issues/8645)。
- **Socketioxide 升级与广播等待**：PR [#8127](https://github.com/tinyhumansai/openhuman/pull/8127)，相关连接期间漏广播问题仍需补充修复，见 [#8646](https://github.com/tinyhumansai/openhuman/issues/8646)。

**进展评估：** 今日关闭的 PR 对数据隔离、工作流安全和后台事件可见性均有实质推进，但 9 条待合并 PR 中包含多项安全与 P1 稳定性修复，合并速度已经成为影响版本交付的主要瓶颈。

---

## 4. 社区热点

> 本期没有可用的点赞数据；“最活跃”主要依据评论数、优先级和跨版本影响范围判断。

1. **React 渲染器在工具参数流式输入时陷入持续更新循环**  
   Issue [#6455](https://github.com/tinyhumansai/openhuman/issues/6455)  
   **10 条评论，为今日最活跃 Issue。** 用户通过程序化输入事件驱动聊天输入框时会导致 Renderer 崩溃，直接阻塞自动化端到端测试及 Agent 驱动界面交互。需求核心是：聊天输入框应支持稳定的合成事件输入，且工具调用参数持续流式更新不能造成无限重渲染。

2. **Composio Direct 模式无法路由触发器 Webhook，Disconnect 也失效**  
   Issue [#6128](https://github.com/tinyhumansai/openhuman/issues/6128)  
   **4 条评论。** 用户反馈自带 API Key 的 Direct 模式无法创建、启用、列出或接收 triggers/webhooks，Disconnect 同样不可用。界面此前将缺失能力标为“后续跟进”，但实际没有对应实现，属于公开承诺与功能落地不一致。

3. **后台补全应按工作区存储，并兼容旧的按 Agent 存储**  
   Issue [#8644](https://github.com/tinyhumansai/openhuman/issues/8644)  
   **3 条评论，新开 Issue。** 这表明刚关闭的存储隔离工作尚未完全收口：虽然路由器已按作用域区分，但后台补全本身仍可能使用共享或内存存储。社区诉求是实现真正的工作区级持久化，并为旧存储提供明确、可控的迁移或读取策略。

4. **旧版本 Core 无法自动更新**  
   Issue [#8610](https://github.com/tinyhumansai/openhuman/issues/8610)  
   **2 条评论。** 从 0.54 升级到 0.57 的用户无法自更新，原因是发布资产名称与更新器预期不一致。该问题会长期滞留旧版本，并放大其他兼容性缺陷。

5. **过期会话 401 响应未被识别，导致后台任务持续重试并上报 Sentry**  
   Issue [#8609](https://github.com/tinyhumansai/openhuman/issues/8609)  
   **2 条评论。** 用户希望会话过期被视为不可重试的终止状态，而不是持续消耗资源并污染错误监控。

6. **PR 全量分诊任务**  
   Issue [#8605](https://github.com/tinyhumansai/openhuman/issues/8605)  
   **2 条评论。** 维护者统计当时有 37 个开放 PR，其中 17 个冲突、20 个超过两周，反映 PR 队列维护已成为显性的工程债。

---

## 5. Bug 与稳定性

### P1／高严重度

1. **OpenAI GPT-6、Anthropic Claude 5 家族拒绝 `temperature`，导致每轮请求 HTTP 400**  
   Issue [#8641](https://github.com/tinyhumansai/openhuman/issues/8641)  
   **已有明确修复方向，但当前列表中未见对应 PR。** 应根据模型能力过滤不支持的参数，而不能统一发送。

2. **旧版本 Core 自更新失败**  
   Issue [#8610](https://github.com/tinyhumansai/openhuman/issues/8610)  
   **未见对应修复 PR。** 影响用户自动获取安全修复和兼容性问题。

3. **Settings 中保存 API Key 因缺少 WebChat 来源而无法获得 secret grant**  
   Issue [#8596](https://github.com/tinyhumansai/openhuman/issues/8596)  
   **未见对应修复 PR。** 直接阻断模型配置流程；前端在缺少来源上下文时应主动请求授权，或由 Core 提供正确的授权流程。

4. **过期会话 401 被持续重试并上报 Sentry**  
   Issue [#8609](https://github.com/tinyhumansai/openhuman/issues/8609)  
   **未见对应修复 PR。** 需要识别新的 `TOKEN_EXPIRED` 响应体并将其分类为不可重试错误。

5. **React 工具参数流式更新造成渲染循环和 Renderer 崩溃**  
   Issue [#6455](https://github.com/tinyhumansai/openhuman/issues/6455)  
   **未见明确修复 PR。** 影响聊天 UI、自动化测试和 Agent 驱动交互。

6. **OpenCode Go Provider 缺少 `x-opencode-session` 请求头，返回 HTTP 400**  
   Issue [#7865](https://github.com/tinyhumansai/openhuman/issues/7865)  
   **未见对应修复 PR。** 需要补齐会话头生成与请求注入。

7. **迁移入口调用 Core 已不再注册的 OpenClaw/Hermes 方法**  
   Issue [#8639](https://github.com/tinyhumansai/openhuman/issues/8639)  
   **未见对应修复 PR。** 应移除失效入口或提供兼容实现。

### P2／中严重度

1. **DeepSeek 思考模式下回放工具调用消息时遗漏 `reasoning_content`**  
   Issue [#8398](https://github.com/tinyhumansai/openhuman/issues/8398)  
   **未见对应修复 PR。** 会在任务执行中段触发 Provider 400，需保持推理字段的历史一致性。

2. **可观测性 durable append 失败导致观察数据静默丢失**  
   Issue [#8507](https://github.com/tinyhumansai/openhuman/issues/8507)  
   **未见对应修复 PR。** 除数据丢失外，失败后重复事件还会被抑制，放大盲区。

3. **定时 Agent 在用户密钥、模型或服务无效时反复重试并上报 Sentry**  
   Issue [#8611](https://github.com/tinyhumansai/openhuman/issues/8611)  
   **未见对应修复 PR。** 用户配置错误应快速失败或退避，不应持续重试。

4. **相对路径读取 offloaded tool result 可终止长任务**  
   Issue [#8643](https://github.com/tinyhumansai/openhuman/issues/8643)  
   **已有 fix PR：[#8647](https://github.com/tinyhumansai/openhuman/pull/8647)。**

5. **重复 `toolCallId` 导致聊天线程崩溃**  
   Issue [#8636](https://github.com/tinyhumansai/openhuman/issues/8636)  
   **未见对应修复 PR。** 当两个时间线条目映射到同一子 Agent 调用 ID 时，资源映射表发生键冲突。

6. **本地隐私模式误拦截运行于 localhost 的自定义 Provider**  
   Issue [#8637](https://github.com/tinyhumansai/openhuman/issues/8637)  
   **未见对应修复 PR。** 隐私判断应依据实际 endpoint，而非仅依据 Provider slug。

7. **Composio Direct 的 Webhook 与 Disconnect 不可用**  
   Issue [#6128](https://github.com/tinyhumansai/openhuman/issues/6128)  
   **未见对应修复 PR。** 属于集成能力缺口，同时影响错误说明和用户信任。

8. **Discord 清洁安装后 Memory 模块仍无法加载**  
   Issue [#6690](https://github.com/tinyhumansai/openhuman/issues/6690)  
   **未见对应修复 PR。** 用户强调在清空旧数据、恢复默认设置后仍复现，怀疑不是单纯迁移残留。

9. **Browser profile 缺少路径仍可保存，并将校验错误上报 Sentry**  
   Issue [#8635](https://github.com/tinyhumansai/openhuman/issues/8635)  
   **未见对应修复 PR。**

10. **Windows 路径带双引号时被 Files 文件夹设置拒绝**  
    Issue [#8634](https://github.com/tinyhumansai/openhuman/issues/8634)  
    **未见对应修复 PR。** 属于常见桌面复制路径场景的输入兼容问题。

11. **Telegram `/start` pairing 无法持久化 allowlist**  
    Issue [#8102](https://github.com/tinyhumansai/openhuman/issues/8102)  
    **未见对应修复 PR。** 当前读取旧版 `~/.openhuman/config.toml`，而不是用户级配置，导致重启后配对失效。

12. **过期线程 API 返回陈旧线程 ID，而不是 `ThreadNotFound`**  
    Issue [#8638](https://github.com/tinyhumansai/openhuman/issues/8638)  
    **未见对应修复 PR。**

### 稳定性工程建议

- 优先将 [#8641](https://github.com/tinyhumansai/openhuman/issues/8641)、[#8609](https://github.com/tinyhumansai/openhuman/issues/8609)、[#8596](https://github.com/tinyhumansai/openhuman/issues/8596)、[#8610](https://github.com/tinyhumansai/openhuman/issues/8610) 纳入近期修复批次。
- 将用户可纠正错误与内部故障分级，避免无效密钥、过期会话、限流和本地配置错误污染 Sentry。相关问题包括 [#8642](https://github.com/tinyhumansai/openhuman/issues/8642)、[#8631](https://github.com/tinyhumansai/openhuman/issues/8631)、[#8632](https://github.com/tinyhumansai/openhuman/issues/8632)、[#8633](https://github.com/tinyhumansai/openhuman/issues/8633)。
- 对 [#8647](https://github.com/tinyhumansai/openhuman/pull/8647) 等已有明确修复 PR 的问题优先评审合并，减少用户等待时间。

---

## 6. 功能请求与路线图信号

### 明确的新需求

1. **Composio Direct 模式完整支持 Trigger 与 Webhook**  
   Issue [#6128](https://github.com/tinyhumansai/openhuman/issues/6128)  
   用户不仅需要 UI 隐藏提示，还要求真正支持创建、启用、列举、接收 Webhook，以及正常 Disconnect。  
   **路线图判断：中高概率进入下一版本。** 这属于已公开承诺但未落地的能力，且当前没有对应 PR，维护者需要明确排期或更新产品说明。

2. **后台补全按工作区持久化，并兼容旧 Agent 存储**  
   Issue [#8644](https://github.com/tinyhumansai/openhuman/issues/8644)  
   **路线图判断：高概率。** 现有 PR [#7920](https://github.com/tinyhumansai/openhuman/pull/7920) 已完成路由隔离，后续 Issue 明确指出了剩余存储层缺口，属于同一条可靠性工作的自然延续。

3. **Web Chat 在连接期间重放遗漏的系统广播，并提供断连感知的订阅确认**  
   Issue [#8646](https://github.com/tinyhumansai/openhuman/issues/8646)  
   **路线图判断：中高概率。** PR [#8127](https://github.com/tinyhumansai/openhuman/pull/8127) 已升级 Socketioxide 并处理广播等待，但 Issue 明确指出连接窗口和订阅确认仍有缺口，可能作为后续补丁合入。

4. **本地 AI 并发连接失败时恢复最后验证成功的设置**  
   Issue [#8645](https://github.com/tinyhumansai/openhuman/issues/8645)  
   **路线图判断：中等概率。** PR [#8205](https://github.com/tinyhumansai/openhuman/pull/8205) 已覆盖基础回滚，Issue 补充了并发边界，预计会形成小幅补丁。

5. **清除未实现或重复的应用能力承诺**  
   PR [#8062](https://github.com/tinyhumansai/openhuman/pull/8062)  
   该 PR 并不新增能力，而是清理 About 页面中未实现、重复或不准确的承诺，并将“清除应用数据”描述收窄为仅清除当前用户的本地数据。  
   **路线图判断：较可能随近期 UI 文档修订合入。**

6. **语音数据外发前落实隐私政策并显示目标来源**  
   PR [#8061](https://github.com/tinyhumansai/openhuman/pull/8061)  
   **路线图判断：中高概率。** 属于隐私合规增强，且已经提供跨 7 类语音路径的请求级回归测试。

### 可能影响下一版本的未决工作

- **工作区级 artifact 路径解析**：PR [#8647](https://github.com/tinyhumansai/openhuman/pull/8647) 已具备明确修复，适合纳入下一补丁版本。
- **配置快照全面脱敏**：PR [#8608](https://github.com/tinyhumansai/openhuman/pull/8608) 直接消除敏感凭据暴露，建议以安全修复优先合入。
- **Provider 参数能力协商**：Issue [#8641](https://github.com/tinyhumansai/openhuman/issues/8641) 很可能需要统一改造请求构建层，而不是逐模型打补丁。
- **迁移能力清理**：Issue [#8639](https://github.com/tinyhumansai/openhuman/issues/8639) 表明迁移功能与 Core 注册表已经脱节，下一版本需明确是否继续支持 OpenClaw/Hermes 迁移。

---

## 7. 用户反馈摘要

### 核心痛点

- **“能配置模型，但一次请求就失败”**：OpenAI GPT-6、Anthropic Claude 5、DeepSeek、OpenCode Go 的问题表明 Provider 兼容层仍存在明显断层。  
  相关链接：[#8641](https://github.com/tinyhumansai/openhuman/issues/8641)、[#8398](https://github.com/tinyhumansai/openhuman/issues/8398)、[#7865](https://github.com/tinyhumansai/openhuman/issues/7865)

- **“保存 API Key 直接失败”**：缺少 WebChat 来源时没有弹出授权，用户既无法完成设置，也没有清晰下一步。  
  链接：[#8596](https://github.com/tinyhumansai/openhuman/issues/8596)

- **“后台任务不该无限重试”**：过期会话、无效密钥、用户拒绝配置等情况被当成系统故障，既浪费资源，也让 Sentry 噪声掩盖真实问题。  
  链接：[#8609](https://github.com/tinyhumansai/openhuman/issues/8609)、[#8611](https://github.com/tinyhumansai/openhuman/issues/8611)、[#8642](https://github.com/tinyhumansai/openhuman/issues/8642)

- **“自动化场景下聊天框不可靠”**：程序化输入触发 Renderer 崩溃，意味着自动化 UI 测试与 Agent 操作现有应用时缺乏稳定接口。  
  链接：[#6455](https://github.com/tinyhumansai/openhuman/issues/6455)

- **“集成页面的承诺与实际能力不一致”**：Composio Direct 界面提示功能将在后续跟进，但 triggers、webhooks 和 Disconnect 均不可用。  
  链接：[#6128](https://github.com/tinyhumansai/openhuman/issues/6128)

- **“跨平台基础操作仍有细节缺口”**：Windows 复制路径、Telegram 配对重启失效、localhost 自定义 Provider 被误拦截，均属于真实使用路径中的摩擦。  
  链接：[#8634](https://github.com/tinyhumansai/openhuman/issues/8634)、[#8102](https://github.com/tinyhumansai/openhuman/issues/8102)、[#8637](https://github.com/tinyhumansai/openhuman/issues/8637)

### 使用场景

- 长时间运行的 Agent 会频繁读写大体积、offloaded tool result；相对路径解析问题直接中断任务。  
  链接：[#8643](https://github.com/tinyhumansai/openhuman/issues/8643)
- Discord/Telegram 等消息渠道用于个人助理配对和持续运行，重启后配置丢失会明显破坏信任。  
  链接：[#6690](https://github.com/tinyhumansai/openhuman/issues/6690)、[#8102](https://github.com/tinyhumansai/openhuman/issues/8102)
- 定时 Agent 与后台补全依赖可靠的持久化和错误分类，当前在失败时会反复运行。  
  链接：[#8611](https://github.com/tinyhumansai/openhuman/issues/8611)、[#8644](https://github.com/tinyhumansai/openhuman/issues/8644)

### 满意点与改进信号

- 用户认可或持续使用工作流、后台子 Agent、Web Chat 等能力，说明核心产品方向已有实际需求。
- 今日已关闭修复改善了后台事件可见性、工作流上线安全和存储隔离。  
  链接：[#8565](https://github.com/tinyhumansai/openhuman/pull/8565)、[#8541](https://github.com/tinyhumansai/openhuman/pull/8541)、[#7920](https://github.com/tinyhumansai/openhuman/pull/7920)
- 不满主要集中在“功能宣传存在但实际不可用”和“错误分类/重试策略不合理”，本质上都是产品承诺与运行时行为不一致。

---

## 8. 待处理积压

### 长期活跃但仍需响应的重要 Issue

1. **React Renderer 持续更新循环与崩溃**  
   [#6455](https://github.com/tinyhumansai/openhuman/issues/6455)  
   创建于 2026-09-22，已累计 10 条评论；自动化测试阻塞明显，应明确负责人和修复版本。

2. **Composio Direct 的 Webhook 与 Disconnect 缺口**  
   [#6128](https://github.com/tinyhumansai/openhuman/issues/6128)  
   创建于 2026-09-08，既是功能缺失，也是已披露事项未跟进，建议给出明确路线图。

3. **Discord 全新安装后 Memory 加载失败**  
   [#6690](https://github.com/tinyhumansai/openhuman/issues/6690)  
   创建于 2026-09-25，已在清理环境后复现，不应继续按迁移问题处理。

4. **OpenCode Go Provider 缺少 session header**  
   [#7865](https://github.com/tinyhumansai/openhuman/issues/7865)  
   创建于 2026-10-15，涉及多个版本和模型，持续影响真实 Provider 使用。

5. **DeepSeek 思考模式工具调用回放失败**  
   [#8398](https://github.com/tinyhumansai/openhuman/issues/8398)  
   创建于 2026-10-25，属于任务执行中途失败，需兼容层专项处理。

6. **Telegram pairing allowlist 不持久化**  
   [#8102](https://github.com/tinyhumansai/openhuman/issues/8102)  
   创建于 2026-10-19，直接影响消息渠道重启后的可用性。

7. **OpenHuman PR 全量分诊**  
   [#8605](https://github.com/tinyhumansai/openhuman/issues/8605)  
   维护者已明确指出开放 PR 数量多、冲突多、陈旧时间长，应作为流程性事项持续推进。

### PR 队列风险

- 当前仍有 **9 条待合并 PR**，其中多项已经创建超过两周：  
  [#8061](https://github.com/tinyhumansai/openhuman/pull/8061)、[#8062](https://github.com/tinyhumansai/openhuman/pull/8062)、[#8169](https://github.com/tinyhumansai/openhuman/pull/8169)、[#8205](https://github.com/tinyhumansai/openhuman/pull/8205)、[#8127](https://github.com/tinyhumansai/openhuman/pull/8127)、[#8431](https://github.com/tinyhumansai/openhuman/pull/8431)、[#7248](https://github.com/tinyhumansai/openhuman/pull/7248)。
- 优先处理安全相关 PR：  
  [#8608](https://github.com/tinyhumansai/openhuman/pull/8608)、[#8061](https://github.com/tinyhumansai/openhuman/pull/8061)、[#7248](https://github.com/tinyhumansai/openhuman/pull/7248)。
- 优先处理已有 P1/P2 用户阻塞的 PR：  
  [#8647](https://github.com/tinyhumansai/openhuman/pull/8647)、[#8127](https://github.com/tinyhumansai/openhuman/pull/8127)、[#8205](https://github.com/tinyhumansai/openhuman/pull/8205)。
- 对已由其他方式完成修复的 PR 应尽快关闭或重新对齐范围，例如：  
  [#8060](https://github.com/tinyhumansai/openhuman/pull/8060)。

---

## 今日结论

OpenHuman 当前的主要问题不是缺乏开发活动，而是**高活跃度尚未充分转化为稳定版本交付**。今日关闭的 PR 已改善了存储隔离、工作流安全和后台事件可见性；但 Provider 兼容性、凭据授权、自动更新、错误重试分类及 React 崩溃仍直接影响核心使用。

建议下一轮维护优先顺序为：

1. 合并配置脱敏、artifact 路径和隐私出口相关安全修复；
2. 修复导致模型调用全面失败的 `#8641`；
3. 修正过期会话、无效密钥和限流的错误分类与重试策略；
4. 为旧版本自更新和 API Key 授权建立回归测试；
5. 对 37 个开放 PR 的历史队列进行合并、关闭或重新分派，压缩长期积压。

**项目健康度：活跃但承压；修复方向清晰，主要风险在 PR 合并速度、跨 Provider 兼容性和错误治理。**

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
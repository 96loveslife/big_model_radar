# OpenClaw 生态日报 2026-11-07

> Issues: 412 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-07 05:27 UTC

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

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**统计日期：2026-11-07**  
**分析范围：OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“聊天壳与模型接入”进入**运行时可靠性、工具执行安全、会话状态管理和多渠道交付**为核心的阶段。NanoBot、LobsterAI、QwenPaw、Hermes Agent 和 OpenHuman 均在当日出现高 PR 吞吐，但主要投入明显偏向安全边界、Provider 兼容、状态一致性、跨平台部署和故障恢复，而不是单纯增加模型或 Agent 数量。

生态已出现三种代表性路线：  
- **轻量个人助手型**：以 NanoBot、PicoClaw 为代表，强调低成本、多 Provider 与可扩展 Skills；  
- **桌面工作台型**：以 LobsterAI、QwenPaw 为代表，强调 GUI、文档、多模态和插件生态；  
- **基础设施 / 协作平台型**：以 Hermes Agent、OpenHuman 为代表，强调 Gateway、渠道、权限与长期运行可靠性。

跨项目普遍暴露出相似债务：长会话状态错乱、消息“假成功”、第三方 Provider 协议差异、插件/技能安装链路不稳定、跨平台路径兼容，以及权限策略与工具降级之间的冲突。部分项目已有版本发布，但 **OpenClaw 核心参照当日摘要生成失败、IronClaw 无活动**，因此本报告无法对其当日活跃度和社区规模作出可靠比较。

---

## 2. 各项目活跃度对比

> 注：PR 数按当日更新的 Issue / PR 列表口径统计；部分项目的“已关闭”可能包含合并、放弃或已完成，不能完全等同于已合并。

| 项目 | 今日 Issues | 今日 PR | Release | 活跃度特征 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 无法确认 | 无法确认 | 无法确认 | 核心参照，但摘要生成失败 | **无法评估**，需补抓当日数据 |
| **NanoBot** | 4（3 活跃、1 关闭） | 40（33 已合并/关闭、7 待处理） | **v0.4.1** | 高吞吐，安全、WebUI、Provider 并进 | **良好** |
| **PicoClaw** | 1（开放） | 2（1 开放、1 关闭） | 无 | 更新量低，但形成 Issue→Fix 闭环 | **中低活跃、局部正常** |
| **IronClaw** | 0 | 0 | 无 | 过去 24 小时无活动 | **静默 / 数据不足** |
| **LobsterAI** | 1（开放） | 23（16 已合并/关闭、7 待处理） | **2026.11.6** | 发布、依赖升级与运行时修复并行 | **良好** |
| **QwenPaw** | 16（9 活跃、7 关闭） | 23（14 待处理、9 已合并/关闭） | 无 | 高活跃，控制台、Memory、兼容性并进 | **中高** |
| **Hermes Agent** | 50（23 活跃、27 关闭） | 50（36 待处理、14 已合并/关闭） | 无 | 吞吐很高，Gateway 与平台集成债务集中 | **中高活跃、中等稳定性** |
| **OpenHuman** | 3（全部新开） | 33（31 已合并/关闭、2 待处理） | 无 | 高强度安全收敛，新问题集中于容错层 | **开发健康，产品稳定性中等** |

### 活跃度分层

- **第一层：高吞吐、多线收敛**  
  Hermes Agent、QwenPaw、NanoBot、OpenHuman。共同特征是单日更新数十条 Issue / PR，但待合并 PR 和长期积压也明显增加。

- **第二层：有明确版本交付的稳定化阶段**  
  LobsterAI 已发布 `2026.11.6`，NanoBot 已发布 `v0.4.1`。两者都从功能扩张转向交付质量和生产可靠性。

- **第三层：低频或局部推进**  
  PicoClaw 更新量小，但 Skills 安装问题已有直接修复；IronClaw 当日无活动，无法判断是稳定、停滞还是数据缺失。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势判断

在缺少当日 OpenClaw 数据的情况下，只能基于其作为**核心参照**的生态位置进行定性比较，不能给出可靠的当日活跃度或社区规模排名。

相较多数项目，OpenClaw 的潜在优势主要有三点：

1. **生态参照价值更高**  
   LobsterAI 已直接出现“OpenClaw 插件”“OpenClaw Gateway”“entry hooks 持久化”等集成工作，说明其配置模型、插件机制和 Gateway 生命周期已成为周边项目的重要兼容目标。

2. **集成场景更广**  
   NanoBot、QwenPaw、Hermes Agent、OpenHuman 分别强化了 Provider、Memory、多渠道、MCP、安全执行等能力，这些方向与 OpenClaw 类通用 Agent Runtime 的能力版图高度重叠。

3. **更适合作为上游能力与生态标准的观察对象**  
   其他项目正在补齐 Gateway、插件、Skills、权限和持久化，说明 OpenClaw 类架构的市场关注点已从“单机聊天”转向“可持续运行的 Agent 平台”。

### 3.2 技术路线差异

| 维度 | OpenClaw 类路线 | 同类项目差异 |
|---|---|---|
| 核心定位 | 通用个人 Agent Runtime / 生态枢纽 | NanoBot 更轻量；LobsterAI 更偏桌面工作台；Hermes 更偏 Gateway 与跨机器协作 |
| 扩展方式 | 插件、Skills、工具与多 Provider 组合 | PicoClaw 偏 Skills 分发；QwenPaw 偏 Memory、插件和模型中心；OpenHuman 偏受控工具执行 |
| 运行架构 | 多入口、多渠道、统一运行时 | Hermes 更强调 Unified Gateway；LobsterAI 强调 Electron 桌面端；QwenPaw 同时覆盖控制台与 IM |
| 安全边界 | 依赖宿主实现和插件生态 | NanoBot 已强化 TLS/Shell/工作区；OpenHuman 重点强化 TinySecurity、凭据与模块隔离 |
| 会话模型 | 强调长生命周期、工具与多 Agent 交互 | QwenPaw 强调 Memory Recall；Hermes 强调 profile/session/MCP 生命周期 |

### 3.3 社区规模对比

现有摘要不足以给出 OpenClaw 的准确社区规模，且仓库编号、Issue/PR 数量不能直接代表真实用户规模。相对而言：

- **Hermes Agent** 今日表面社区吞吐最高：50 Issues、50 PR；
- **NanoBot、OpenHuman、QwenPaw、LobsterAI** 均保持数十条 PR 更新；
- **PicoClaw、IronClaw** 当日社区活动显著较少。

但这些数字受到自动摘要、机器人提交和仓库运作方式影响，**不能据此认定 OpenClaw 社区规模小于 Hermes Agent**。若要比较真实社区规模，应补充过去 30 天独立贡献者、Issue 作者、Release 下载、Discord/论坛活跃和插件生态数据。

---

## 4. 共同关注的技术方向

### 4.1 Provider 协议一致性

涉及项目：**NanoBot、QwenPaw、LobsterAI、Hermes Agent**

- NanoBot 修复 Gemini 流缺少 `tool_calls[].index` 时并行工具调用合并、DeepSeek 中断状态误判及图像消息角色不兼容。
- QwenPaw 暴露第三方 OpenAI-compatible Provider 的 `run_code` 参数为空，以及 Ollama 上下文窗口识别错误。
- Hermes Agent 出现 GPT-6.1 Sol 流式处理和会话重放退化。
- LobsterAI 则通过模型兼容插件变化和网关重启逻辑处理 Provider 生命周期。

**共同诉求**：Provider 适配不能只满足“请求成功”，还必须覆盖流式结束、并行工具调用、多模态、错误映射、上下文窗口和重连恢复。

### 4.2 会话状态与长历史可靠性

涉及项目：**NanoBot、QwenPaw、Hermes Agent、OpenHuman**

- NanoBot 处理超长单轮历史静默截断，并优化 Session 搜索和内存复制。
- QwenPaw 修复 `/clear` 后缓存消息重新出现、会话切换丢输入和附件、Memory 标签索引返回 503。
- Hermes Agent 聚焦群聊 turn 堵塞、Clean EOF 误判、profile/session 串线和多 profile MCP 恢复。
- OpenHuman 报告 Telegram 回合失败后历史丢失。

**共同诉求**：失败 Turn 不应破坏既有会话；清空、切换、升级、重启和 provider 中断都应具有原子性，且状态应可恢复、可观测。

### 4.3 工具、Skills 与插件生态可靠性

涉及项目：**PicoClaw、OpenHuman、LobsterAI、QwenPaw、Hermes Agent**

- PicoClaw 修复不同目录 Skill 使用相同 frontmatter `name` 时安装失败。
- OpenHuman 强化 Hook 安全检查、Host Callback 模块隔离和 Composio 凭据脱敏。
- LobsterAI 持久化 OpenClaw entry hooks，修复插件配置在网关重启后丢失。
- QwenPaw 报告官方插件 `qwenpaw-creator` 因包元数据缺失无法安装。
- Hermes Agent 快速扩充 Windows 与第三方项目插件目录。

**共同诉求**：插件目录扩张必须与身份模型、安装校验、版本固定、权限声明、凭据治理和卸载生命周期同步建设。

### 4.4 安全执行与最小权限

涉及项目：**NanoBot、OpenHuman、QwenPaw、LobsterAI**

- NanoBot v0.4.1 强化 TLS、Unix Shell 沙箱和工作区权限。
- OpenHuman 大规模强化 Prompt / Hook 安全检查、受保护路径、模块回调隔离和凭据脱敏。
- QwenPaw 暴露 Docker 非 root 启动失败，实质上反映最小权限部署兼容不足。
- LobsterAI 增加 macOS 辅助功能和屏幕录制权限引导。

**共同诉求**：安全策略必须在工具、文件、容器、桌面权限和插件调用等所有入口统一生效，同时避免“策略正确但部署不可用”或“策略拒绝导致任务不可恢复”。

### 4.5 渠道投递与错误可见性

涉及项目：**Hermes Agent、OpenHuman、LobsterAI、QwenPaw**

- Hermes Agent 多个消息平台在分段回复时可能重发首段、丢失中间段却报告成功。
- OpenHuman 的 Telegram 外发失败既不重试，也没有用户可见日志。
- LobsterAI 修复登录后 OpenClaw Gateway 重复重启。
- QwenPaw 增加 IM 渠道工具调用的紧凑展示格式。

**共同诉求**：渠道适配器需要统一投递状态机，明确“已发送、部分发送、失败、重试中、需人工处理”，不能以最终成功状态掩盖分段丢失。

### 4.6 跨平台与部署兼容

涉及项目：**QwenPaw、NanoBot、PicoClaw、Hermes Agent**

- QwenPaw 集中处理 Windows GBK/CP936、长路径 SQLite、Windows Shell 测试和 Docker 非 root 权限。
- NanoBot 明确 TLS、自定义 CA、代理和 Unix 沙箱等部署边界。
- PicoClaw 需同时兼容 CLI 和 Agent `install_skill` 两个安装入口。
- Hermes Agent 处理 Git proxy、自定义 SSL、systemd、多 profile、managed config 与 iPhone Safari。

**共同诉求**：测试矩阵不能只覆盖默认 Linux、UTF-8、root 容器和桌面 Chromium；企业代理、Windows 中文环境、非 root 容器和移动浏览器应成为发布门禁。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 通用个人智能体运行时、工具与插件枢纽 | 希望搭建个人 AI 助手和扩展生态的开发者 | 多入口、多渠道、插件/Skills 组合；当日数据缺失 |
| **NanoBot** | 轻量多 Provider 助手、WebUI、Skills、Shell 工具 | 个人开发者、极客、自托管用户 | Python 为主，强调工作区、Session、TLS 与 Shell 沙箱 |
| **PicoClaw** | 轻量助手与 Skills 安装分发 | 关注技能生态、快速扩展的个人用户 | 以 CLI / Agent 安装工具和 Skill 目录为核心 |
| **IronClaw** | 当日无足够信息 | 无法判断 | 无法判断 |
| **LobsterAI** | 桌面 AI 工作台、聊天、文档、多模态、桌面自动化 | 办公用户、桌面 AI 消费者 | Electron 桌面应用，强调发布、插件、模型和系统权限 |
| **QwenPaw** | 控制台、Memory 检索、多渠道 Agent、模型管理 | 自托管用户、IM 自动化用户、Agent 开发者 | 模型中心 + Memory/Recall + 控制台 + 多 Provider |
| **Hermes Agent** | Gateway、群聊、跨机器协作、MCP、消息平台 | 高级个人用户、多设备与多 Bot 协作用户 | 统一 Gateway 承载 CLI、TUI、Desktop、API、IM 和 Cron |
| **OpenHuman** | 受控工具执行、凭据管理、自动化与渠道接入 | 重视安全和本地执行的自主 Agent 用户 | TinySecurity、模块隔离、Hook 治理、Keyring 和策略化执行 |

### 核心判断

- **NanoBot 是“轻量运行时 + WebUI”路线**，适合追求低成本、可脚本化和 Provider 灵活性的开发者。
- **PicoClaw 更聚焦 Skill 分发闭环**，其关键竞争点不是模型数量，而是技能身份、安装和生态治理。
- **LobsterAI 是桌面产品化路线**，优势在用户体验、文档生态和安装体验，短板是依赖升级和桌面平台回归面较大。
- **QwenPaw 是“自托管控制台 + Memory + IM”路线**，产品面广，但跨平台和第三方 Provider 债务较集中。
- **Hermes Agent 是“统一 Gateway + 跨机器协作”路线**，上限高，但当前生产复杂度也最高。
- **OpenHuman 是“安全优先的受控执行”路线**，安全边界明显领先，但渠道容错和工具降级体验仍需补齐。

---

## 6. 社区热度与成熟度

### 6.1 社区热度

按当日 Issue / PR 更新量看：

1. **Hermes Agent**：50 Issues、50 PR，且核心迁移 Issue 有 50 条评论，需求和工程讨论最密集。
2. **NanoBot / OpenHuman / LobsterAI / QwenPaw**：均维持 23–40 条 PR 更新，属于高活跃层。
3. **PicoClaw**：1 Issue、2 PR，低频但有明确闭环。
4. **IronClaw**：24 小时无活动。
5. **OpenClaw**：无法判断。

需要注意：PR 数量不等于社区质量。Hermes Agent 的高吞吐伴随较多待合并 PR 和集成债务；OpenHuman 的 31 条关闭 PR 则显示较强的修复收敛能力。

### 6.2 成熟度分层

#### 快速迭代阶段

- **Hermes Agent**：统一 Gateway、跨机器协作、MCP 与插件目录快速扩张。
- **QwenPaw**：Reranker、Memory 精度、模型中心、引用追问等能力密集推进。
- **LobsterAI**：依赖现代化、桌面端功能和插件体验同步迭代。

#### 质量巩固阶段

- **NanoBot**：已发布 v0.4.1，重点明显转向 TLS、Shell、工作区、调度和异常恢复。
- **OpenHuman**：高强度收敛安全策略、凭据、模块边界和 CI 门禁。
- **PicoClaw**：从具体安装阻断问题切入，处于局部可靠性修复阶段。

#### 数据不足或需观察

- **IronClaw**：无活动，无法区分稳定沉寂、优先级下调或项目停滞。
- **OpenClaw**：当日摘要失败，不能据此判断活跃度下降。

---

## 7. 值得关注的趋势信号

### 7.1 Agent 产品的竞争焦点已从“模型能力”转向“执行正确性”

多个项目同时暴露了工具参数为空、并行调用合并、错误中断被当成功、策略拒绝导致整轮失败等问题。对开发者而言，**Provider adapter、错误分类、工具调用归一化和会话持久化**已成为比新增模型更重要的工程资产。

### 7.2 安全策略需要支持“受控降级”，而非只有允许或拒绝

OpenHuman 的 `file_write` 被拒后直接终止整个 Turn，暴露了现实矛盾：安全系统需要阻止危险路径，但不应把局部工具失败放大为任务失败。

更合理的设计是分层处理：

- 确定性策略拒绝：禁止重试同一危险动作；
- 可恢复工具失败：允许换工具或合法路径；
- 安全模块不可用：按 fail-closed 或显式降级策略处理；
- 预算耗尽：停止并保留可恢复状态。

### 7.3 “消息假成功”将成为渠道型 Agent 的信任杀手

Hermes 与 OpenHuman 都暴露了消息丢失或中间段失败但系统显示成功的问题。随着 Agent 接入 Telegram、飞书、钉钉、QQ、Discord 和 Yuanbao，投递状态必须从布尔值升级为：

- 已接收；
- 部分发送；
- 重试中；
- 永久失败；
- 无法确认。

这应成为所有消息适配器的统一接口，而不是各平台分别实现。

### 7.4 Memory 正从“能召回”进入“可评估、可治理”阶段

QwenPaw 的 Reranker、多查询精度历史、Memory Recall 上下文化，以及 NanoBot 的 Session 搜索优化都表明，Memory 已不再只是向量检索功能集合。下一步竞争点包括：

- 召回准确率与引用可追溯性；
- 自动召回的注入边界；
- 标签和索引的自恢复；
- 跨 Provider 下的一致性；
- 长期历史的可搜索性与内存成本。

### 7.5 插件生态需要从“目录扩张”升级为供应链治理

PicoClaw 的同名 Skill、QwenPaw 的包元数据缺失、LobsterAI 的 Hook 丢失、Hermes 的大量目录 PR 和 OpenHuman 的模块隔离共同说明：

> 插件数量增长并不等于生态成熟，身份、版本、依赖、权限、凭据、升级和卸载才是核心基础设施。

建议各项目逐步统一插件清单签名、权限声明、最小权限运行、版本锁定和安全更新机制。

### 7.6 非默认环境将成为下一轮质量竞争点

Windows 中文编码、长路径 SQLite、Docker 非 root、Git proxy、自定义 SSL、systemd、多 profile、macOS 权限和 iPhone Safari 都在近期集中暴露。下一阶段值得关注的不是“默认环境能否运行”，而是：

> 在企业代理、非 root、异构编码、移动浏览器和多实例部署中，能否保持一致、可诊断和可恢复。

### 7.7 发布节奏将比 PR 吞吐更能反映项目治理质量

NanoBot 和 LobsterAI 已发布明确版本，而 QwenPaw、Hermes Agent、OpenHuman 当日均无版本。高 PR 吞吐如果长期不转化为发布、迁移说明和回滚机制，会形成“主分支持续修复、用户版本长期滞后”的交付债务。

建议技术决策者重点跟踪：

- Release 频率与修复进入版本的比例；
- 破坏性变更、数据库迁移和升级回滚说明；
- PR 从开放到合并的中位时间；
- 高严重度 Issue 从报告到正式修复的时间；
- 跨平台、Provider 和渠道组合测试是否进入发布门禁。

---

## 总结

当前生态最明显的趋势不是“更多 Agent”，而是**现有 Agent 系统能否在真实权限、网络、历史和多渠道环境中可靠运行**。NanoBot 与 OpenHuman 正集中强化安全边界，QwenPaw 正深化 Memory 与控制台，Hermes Agent 正把个人 Agent 推向统一 Gateway 和跨机器协作，LobsterAI 则继续强化桌面产品化。

对开发者和决策者而言，当前最值得投入的方向是：

1. **统一 Provider 流式协议与错误语义**；
2. **建立可恢复、原子性的会话状态机**；
3. **区分安全拒绝、技术失败和预算耗尽**；
4. **为多渠道引入细粒度投递状态与有限重试**；
5. **把插件身份、权限和供应链治理标准化**；
6. **将 Windows、非 root、代理、移动端和企业部署纳入发布门禁**。

整体生态仍处于快速演进期，但已经从功能竞争进入**可靠性、治理和交付能力竞争**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-07**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度：良好，偏高活跃；发布节奏稳定，但长周期 PR 积压仍需关注。**

---

## 1. 今日速览

- 过去 24 小时共更新 **40 个 PR**，其中 **33 个已合并或关闭、7 个待处理**，合并/关闭率约 **82.5%**，贡献活跃度很高。
- Issues 共更新 **4 条**，包括 **3 个新开或活跃问题和 1 个已关闭问题**；整体问题量不高，但 WebUI 交互与模型供应商兼容性仍是主要风险点。
- 项目发布 **v0.4.1**，重点强化 TLS、Shell 沙箱、工作区权限、空闲任务调度及异常恢复，属于安全性和运行稳定性导向的补丁版本。
- 今日工作同时覆盖 **WebUI 性能与交互、Provider 协议兼容、Session 搜索、Agent 调度、文件读取、测试稳定性及发布流程**，说明项目正由功能开发逐步转向稳定性和可维护性建设。
- 健康度判断：**良好**。版本发布和修复吞吐较强；风险主要在于若干 PR 自 9—10 月持续开放，以及部分 WebUI 滚动体验和 DeepSeek 图像消息协议问题尚无明确合并结果。

---

## 2. 版本发布

### v0.4.1

**发布时间：过去 24 小时内**  
**Release 链接：** [v0.4.1](https://github.com/HKUDS/nanobot/releases/tag/v0.4.1)

#### 主要更新

- 修复 **TLS 证书验证**，确保 HTTP、WebSocket 及 HTTP fallback 场景保持证书和主机名校验。
- 修复 **Shell 沙箱执行**，在运行指定 Shell 前正确启动已配置的 Unix 沙箱。
- 收紧 **工作区权限**，限制排队输入任务对工作区资源的越界访问。
- 优化 **空闲维护任务调度**，避免空闲扫描阻塞活跃任务或 `/stop` 等入站命令。
- 改进模型的 **重试、重连和异常恢复行为**。
- 在兼容流程中更好地 **保留原生 Provider 状态**，降低降级或转换过程中的状态丢失。
- 配套发布准备由 [PR #6570](https://github.com/HKUDS/nanobot/pull/6570) 完成；安全边界修复集中在 [PR #6563](https://github.com/HKUDS/nanobot/pull/6563)。

#### 破坏性变更

- Release Notes 未明确声明新的 API 破坏性变更。
- 安全修复会**收紧 TLS 校验、Shell 沙箱和工作区权限**。依赖自定义 CA、代理、非标准证书或工作区外路径的部署，可能需要显式配置授权。

#### 升级与迁移建议

1. 使用自签名证书、私有 CA 或代理的部署，应检查 TLS 和代理配置。
2. 依赖 Shell 执行的工作流，应确认沙箱环境、文件系统权限及可执行路径配置完整。
3. 升级后重点验证：
   - 长时间空闲后的新任务响应；
   - `/stop` 等控制命令是否能及时处理；
   - 模型断线重连与部分响应保存行为；
   - WebSocket、HTTP fallback 和自定义 CA 场景。
4. 升级前建议备份工作区配置与 Session 数据，并在预发布环境执行一轮真实任务回归。

---

## 3. 项目进展

### 3.1 安全与运行时边界

- [PR #6563 — fix(security): enforce TLS, shell and workspace boundaries](https://github.com/HKUDS/nanobot/pull/6563)  
  已关闭并进入 v0.4.1。统一处理 TLS 证书与主机名校验、显式 CA 信任、代理路由、Unix Shell 沙箱和工作区边界，属于本版本最重要的安全改进。

- [PR #6565 — fix(agent): keep idle scans off the inbound consumer](https://github.com/HKUDS/nanobot/pull/6565)  
  已关闭。将空闲会话扫描移出入站消费路径，避免存储等待阻塞活跃轮次及 `/stop` 命令，降低任务“卡住但无法停止”的风险。

### 3.2 Agent 调度与发布流程

- [PR #6324 — feat(heartbeat): add heartbeat-specific model override](https://github.com/HKUDS/nanobot/pull/6324)  
  仍待处理。拟允许 Heartbeat 使用独立模型，避免频繁触发的轻量任务持续消耗主 Agent 的高价或自动路由模型，方向具备明确成本优化价值。

- [PR #6556 — ci(release): share manual and opt-in daily candidate preparation](https://github.com/HKUDS/nanobot/pull/6556)  
  已关闭。统一稳定版准备与可选每日 Preview 候选流程，为高频测试发布提供轻量化路径。

- [PR #6570 — chore(release): prepare 0.4.1](https://github.com/HKUDS/nanobot/pull/6570)  
  已关闭并完成 v0.4.1 发布。

### 3.3 WebUI 体验与性能

- [PR #6591 — fix(webui): follow browser language on first visit](https://github.com/HKUDS/nanobot/pull/6591)  
  已关闭，修复首次访问语言从浏览器语言错误回落至英语的问题，并关闭 [Issue #6583](https://github.com/HKUDS/nanobot/issues/6583)。

- [PR #6590 — fix(webui): close context sidebar for new conversations](https://github.com/HKUDS/nanobot/pull/6590)  
  已关闭。新建会话时自动关闭上下文侧栏，避免空上下文图持续占据界面。

- [PR #6587 — perf(webui): reduce file activity layout work](https://github.com/HKUDS/nanobot/pull/6587)  
  已关闭。使用 `ResizeObserver` 优化文件路径截断和 diff 渲染，降低大量文件活动记录下的主线程布局压力。

- [PR #6586 — fix(webui): preserve oversized turn history with record pagination](https://github.com/HKUDS/nanobot/pull/6586)  
  仍待处理。针对超出旧 replay 预算的单轮记录，改为连续的分页读取，避免答案、推理和工具活动被静默遗漏。

- [PR #6412 — refactor(webui): unify code and diff highlighting](https://github.com/HKUDS/nanobot/pull/6412)  
  已关闭。统一代码、预览和 diff 高亮路径，并恢复单会话预览布局，降低 WebUI 渲染路径复杂度。

### 3.4 Provider 与数据处理

- [PR #6581 — perf: reduce memory copies across files, sessions, and model requests](https://github.com/HKUDS/nanobot/pull/6581)  
  已关闭。减少大文件范围读取、Session 搜索和模型请求中的完整数据复制，降低内存峰值。

- [PR #6296 — fix(providers): keep parallel tool calls apart when the stream omits index](https://github.com/HKUDS/nanobot/pull/6296)  
  仍待处理。修复 Gemini OpenAI 兼容流未提供 `tool_calls[].index` 时并行工具调用被错误合并的问题。

- [PR #6533 — fix(providers): report DeepSeek generation interruptions](https://github.com/HKUDS/nanobot/pull/6533)  
  仍待处理且存在冲突。拟将 DeepSeek 的 `insufficient_system_resource` 和 `aborted` 中断识别为模型错误，避免部分回答被当作成功结果保存。

- [PR #5845 — Add Opper as a built-in provider](https://github.com/HKUDS/nanobot/pull/5845)  
  仍待处理。新增 Opper 内置网关 Provider，通过 `OPPER_API_KEY` 和 OpenAI-compatible 后端接入。

### 3.5 测试稳定性与文档

- [PR #6588 — test(webui): allow 150ms for large graph page tasks](https://github.com/HKUDS/nanobot/pull/6588)  
  已关闭。将 500 节点图浏览器测试的页面级长任务预算从 100ms 调整至 150ms，同时保留节点数量、绘制状态和多帧进度断言。

- [PR #6564 — test: stabilize timing-sensitive CI checks](https://github.com/HKUDS/nanobot/pull/6564)  
  已关闭。缓解 Windows CI 上持久化写入耗时导致的定时测试偶发失败。

- [PR #6585 — docs: correct maintainer name](https://github.com/HKUDS/nanobot/pull/6585)  
  已关闭，修正 README 中维护者姓名及图片替代文本。

- [PR #6528 — docs: add nanobot WeChat community QR entry](https://github.com/HKUDS/nanobot/pull/6528)  
  已关闭，补充微信社区入口及中英文说明。

### 整体推进评估

今日并非单一功能版本，而是一次覆盖 **安全、调度、性能、交互、Provider 兼容和发布流程** 的集中收敛。按已展示 PR 统计，至少完成：

- 1 个正式版本发布；
- 3 项安全/运行时边界修复；
- 2 项 Agent 调度或发布流程改进；
- 4 项 WebUI 功能与性能修复；
- 3 项 Provider 或数据处理改进；
- 2 项测试稳定性修复；
- 2 项文档维护。

项目已从“快速增加能力”进一步进入“提升可靠性和运行效率”的阶段。

---

## 4. 社区热点

> 本批数据中的 Issues 与 PR 评论数均为 0，且 👍 数均为 0，因此无法按实际评论量识别“评论最多”的条目。以下按技术影响、开放时长和用户影响排序。

### 4.1 DeepSeek 图像工具结果协议不兼容

- **Issue：** [#6584 — DeepSeek Chat Completions: image tool results are sent in an unsupported message role](https://github.com/HKUDS/nanobot/issues/6584)
- **相关 PR：** [#6533 — report DeepSeek generation interruptions](https://github.com/HKUDS/nanobot/pull/6533)

**诉求：** DeepSeek Chat Completions 仅允许在 `user` 消息中携带图像，而 NanoBot 当前将图像工具结果放入不支持的角色，可能导致请求被拒绝或行为异常。

**影响：** 使用 DeepSeek 视觉能力、工具调用和图片读取的用户会直接受影响。其修复可能需要调整通用消息转换层，而不仅是 DeepSeek 单点适配，因此优先级应高于普通 UI 问题。

### 4.2 WebUI 中键自动滚动与底部锁定冲突

- **Issue：** [#6592 — Middle-click autoscroll at the live tail is snapped back](https://github.com/HKUDS/nanobot/issues/6592)

**诉求：** 当用户位于实时输出底部时，中键自动滚动会被逐帧拉回底部并产生抖动；滚轮、触摸板、滚动条和键盘表现不一致。

**影响：** 反映 WebUI 的“跟随最新消息”逻辑与用户主动导航之间缺少明确状态仲裁。该问题会影响长会话阅读、复制旧消息和回看工具输出，是高频交互场景中的体验阻塞。

### 4.3 “滚动到底部”按钮闪烁与重复挂载

- **Issue：** [#6593 — Scroll-to-bottom button flickers](https://github.com/HKUDS/nanobot/issues/6593)

**诉求：** 点击按钮后，按钮在平滑滚动过程中反复消失和重新出现，并重复播放进入动画。

**影响：** 虽然不影响数据正确性，但暴露出按钮显隐逻辑、动画状态和滚动监听之间可能存在重复触发。与 #6592 同属 WebUI 滚动状态管理问题，适合合并治理。

### 4.4 Opper 内置 Provider 接入

- **PR：** [#5845 — Add Opper as a built-in provider](https://github.com/HKUDS/nanobot/pull/5845)

**诉求：** 将 Opper 作为内置网关 Provider，支持环境变量配置、OpenAI-compatible 后端和自动识别。

**影响：** 反映用户希望扩展模型路由与网关选择。由于 PR 自 2026-09-21 起持续开放，其长期未收敛状态值得维护者关注。

---

## 5. Bug 与稳定性

### 严重级别：高

#### 1. DeepSeek 图像工具结果使用不支持的消息角色

- Issue：[#6584](https://github.com/HKUDS/nanobot/issues/6584)
- 状态：**开放**
- 现有修复 PR：**未见直接对应 PR**
- 可能关联：[#6533](https://github.com/HKUDS/nanobot/pull/6533)，但该 PR 主要处理 DeepSeek 中断状态，不能视为已覆盖图像角色问题。

**风险：** 请求被供应商拒绝，或多模态工具结果无法可靠传递。需要检查 Provider 消息规范化及工具结果到 `user` 消息的转换路径。

### 中高

#### 2. DeepSeek 生成中断可能被误保存为成功回答

- PR：[#6533](https://github.com/HKUDS/nanobot/pull/6533)
- Issue：[无直接对应 Issue](https://github.com/HKUDS/nanobot/issues)
- 状态：**开放，存在冲突**
- 已有 fix PR：**是**

**风险：** `insufficient_system_resource` 或 `aborted` 结束时，残缺回答可能被当作正常完成并持久化，污染后续上下文。

#### 3. Gemini 并行工具调用在缺少 `index` 时可能被错误合并

- PR：[#6296](https://github.com/HKUDS/nanobot/pull/6296)
- Issue：[无直接对应 Issue](https://github.com/HKUDS/nanobot/issues)
- 状态：**开放**
- 已有 fix PR：**是**

**风险：** 多工具并行场景下，工具调用归属、参数或结果顺序可能错误，影响 Agent 工具链执行。

### 中等

#### 4. WebUI 中键自动滚动被底部跟随逻辑抢占

- Issue：[#6592](https://github.com/HKUDS/nanobot/issues/6592)
- 状态：**开放**
- 已有 fix PR：**未见**

**风险：** 用户主动阅读历史内容时视口抖动，影响长会话使用体验，但不涉及数据损坏。

#### 5. WebUI 滚动到底部按钮反复挂载和闪烁

- Issue：[#6593](https://github.com/HKUDS/nanobot/issues/6593)
- 状态：**开放**
- 已有 fix PR：**未见**

**风险：** 主要为 UI 状态和动画问题；与 #6592 很可能共享根因。

#### 6. 超长单轮历史可能被静默截断

- PR：[#6586](https://github.com/HKUDS/nanobot/pull/6586)
- 状态：**开放**
- 已有 fix PR：**是**

**风险：** 旧实现可能只保留选中的记录，使部分回答、推理和工具活动不可恢复；修复方向是改为记录级连续分页。

#### 7. SVG 被错误当作图片块读取

- PR：[#6135](https://github.com/HKUDS/nanobot/pull/6135)
- 状态：**开放，存在冲突**
- 已有 fix PR：**是**

**风险：** `read_file` 会根据扩展名把 SVG 包装为 `image_url`，而多数模型并不支持 SVG 图像输入，可能导致请求失败或内容无法读取。改为文本读取是合理方向。

### 低至中等

#### 8. Session 搜索在长历史下性能退化

- PR：[#5826](https://github.com/HKUDS/nanobot/pull/5826)
- 状态：**开放，存在冲突**
- 已有 fix PR：**是**

**风险：** 搜索需要加载完整 Session 历史，数据量增大后出现延迟和内存放大；拟通过 SQLite FTS5 候选缓存优化。

#### 9. Windows CI 定时测试偶发失败

- PR：[#6564](https://github.com/HKUDS/nanobot/pull/6564)
- 状态：**已关闭**
- 已有 fix PR：**是，已处理**

**风险：** 持久化写入耗时超过共享 2 秒预算，但不代表业务逻辑失败。

#### 10. 首次访问 WebUI 语言错误固定为英语

- Issue：[#6583](https://github.com/HKUDS/nanobot/issues/6583)
- Fix PR：[#6591](https://github.com/HKUDS/nanobot/pull/6591)
- 状态：**已关闭，已有修复**

**风险：** 已修复；用户未显式选择前，不应覆盖浏览器语言偏好。

---

## 6. 功能请求与路线图信号

### 明确已进入实现阶段

#### 浏览器语言默认跟随

- Issue：[#6583](https://github.com/HKUDS/nanobot/issues/6583)
- PR：[#6591](https://github.com/HKUDS/nanobot/pull/6591)

这是当日最明确完成的用户需求：首次访问应遵循浏览器语言，只有用户主动选择后才持久化自定义偏好。该改动已关闭，预计已随 v0.4.1 或其相邻提交进入主线。

### 有较高可能进入下一版本

#### Heartbeat 独立模型配置

- PR：[#6324](https://github.com/HKUDS/nanobot/pull/6324)

该功能直接解决频繁 Heartbeat 消耗高价主模型的问题，具备清晰成本收益，且已有测试与文档标注。若能解决配置兼容和合并冲突，属于下一版本较合理的候选。

#### 超长单轮历史的分页回放

- PR：[#6586](https://github.com/HKUDS/nanobot/pull/6586)

这是数据完整性修复，而非纯功能扩展。只要分页 API 与现有前端兼容，优先级较高，适合进入近期版本。

#### DeepSeek 中断状态识别

- PR：[#6533](https://github.com/HKUDS/nanobot/pull/6533)

该修复避免将失败响应保存为成功结果，应作为可靠性补丁尽快合并。当前阻碍是冲突，而非方案本身。

#### Gemini 并行工具调用修复

- PR：[#6296](https://github.com/HKUDS/nanobot/pull/6296)

方案直接针对真实 Provider 流格式差异。由于 PR 已持续较久，建议明确测试范围并推动收敛。

### 中期候选

#### Opper 内置 Provider

- PR：[#5845](https://github.com/HKUDS/nanobot/pull/5845)

内置 Provider 可扩展用户模型选择，但需维护检测规则、环境变量、文档和测试。由于已开放数周，更应尽快完成审查或明确接受策略。

#### Session 搜索 FTS5 加速

- PR：[#5826](https://github.com/HKUDS/nanobot/pull/5826)

大型工作区和高频搜索用户会受益。考虑 SQLite FTS5 可选能力、数据库迁移及跨平台兼容，适合作为性能版本候选。

### 尚未进入实现的用户诉求

- WebUI 主动滚动与实时跟随模式之间需要更明确的用户控制，例如“暂停自动跟随”。目前只有问题报告，尚无直接 PR。
- DeepSeek 图像工具结果的协议适配目前缺少直接修复 PR。
- SVG 读取修复已有 PR，但处于冲突状态。

---

## 7. 用户反馈摘要

### 核心用户痛点

1. **实时输出与历史浏览不能和平共存**  
   用户希望向上翻阅长会话时，页面不要被实时尾部强制拉回。[#6592](https://github.com/HKUDS/nanobot/issues/6592) 表明滚轮、触摸板、滚动条、键盘和中键行为不一致，问题不仅是“自动滚动不好用”，而是滚动状态仲裁不统一。

2. **WebUI 控件状态不够稳定**  
   “滚动到底部”按钮会真实卸载并重新挂载，说明用户感知到的是结构性闪烁，而非单纯动画观感。[#6593](https://github.com/HKUDS/nanobot/issues/6593)

3. **首次访问应尊重本机语言偏好**  
   WebUI 启动画面已读取 `navigator.languages`，应用层却回落到英语并将英语作为用户选择保存。[#6583](https://github.com/HKUDS/nanobot/issues/6583) 已由 [#6591](https://github.com/HKUDS/nanobot/pull/6591) 修复。

4. **多模态工具调用需要遵循供应商协议约束**  
   DeepSeek Chat Completions 对图像所在消息角色有明确限制。[#6584](https://github.com/HKUDS/nanobot/issues/6584) 表明用户不仅需要“能上传图片”，还需要跨 Provider 时正确的消息语义转换。

5. **大历史和大文件场景下性能仍敏感**  
   用户通过长会话搜索、超长单轮回放、大量文件活动和模型请求暴露了内存与布局成本。相关 PR 包括 [#5826](https://github.com/HKUDS/nanobot/pull/5826)、[#6586](https://github.com/HKUDS/nanobot/pull/6586)、[#6587](https://github.com/HKUDS/nanobot/pull/6587) 和 [#6581](https://github.com/HKUDS/nanobot/pull/6581)。

### 满意与正向信号

- 浏览器语言问题反馈后迅速形成对应 PR 并关闭，响应链路清晰。
- v0.4.1 对 TLS、沙箱和工作区权限的集中加固，直接回应了部署安全与不可信输入隔离需求。
- 多个性能修复从文件读取、Session 搜索到 WebUI 布局均有覆盖，表明项目已开始系统处理规模化使用，而非只优化单一路径。
- 社区入口和文档修正降低了用户参与门槛。

### 当前不满意点

- DeepSeek 多模态协议问题尚无直接修复 PR。
- WebUI 滚动相关两个问题均无对应修复 PR。
- 若干 PR 长时间开放且存在冲突，用户可能难以判断功能是否会进入正式版本。

---

## 8. 待处理积压

### 高优先级：长期开放且直接影响正确性

#### DeepSeek 中断状态修复

- PR：[#6533](https://github.com/HKUDS/nanobot/pull/6533)
- 创建于 2026-10-30，状态为 **OPEN / CONFLICT**。

**建议：** 尽快解决冲突并明确 Provider 错误映射范围，避免部分回答被保存为成功结果。

#### Gemini 并行工具调用修复

- PR：[#6296](https://github.com/HKUDS/nanobot/pull/6296)
- 创建于 2026-10-19，状态为 **OPEN**。

**建议：** 补充无 `index`、单调用及多调用流式响应的回归测试，确认后可进入 Provider 修复批次。

#### SVG 文本读取修复

- PR：[#6135](https://github.com/HKUDS/nanobot/pull/6135)
- 创建于 2026-10-10，状态为 **OPEN / CONFLICT**。

**建议：** 重新基于当前文件读取实现处理 MIME 判定顺序，确保 SVG 作为文本读取且不破坏 PNG/JPEG/GIF/WebP 的图片识别。

### 中高优先级：长期开放的功能与性能工作

#### Session FTS5 搜索加速

- PR：[#5826](https://github.com/HKUDS/nanobot/pull/5826)
- 创建于 2026-09-20，状态为 **OPEN / CONFLICT**。

**建议：** 明确 FTS5 缓存的失效、迁移和数据库兼容策略；其价值随工作区规模增长，应避免长期悬置。

#### Opper Provider 接入

- PR：[#5845](https://github.com/HKUDS/nanobot/pull/5845)
- 创建于 2026-09-21，状态为 **OPEN**。

**建议：** 明确是否接受新 Provider；若接受，应补齐密钥配置、检测逻辑、文档和测试；若暂不接受，应关闭并拆分后续任务，避免模糊积压。

#### Heartbeat 独立模型

- PR：[#6324](https://github.com/HKUDS/nanobot/pull/6324)
- 创建于 2026-10-20，状态为 **OPEN**。

**建议：** 明确配置优先级、默认回退和多通知任务的模型使用策略。该功能用户价值清晰，可能适合作为下一版本重点。

### 新增但尚无修复 PR

- [#6582 不适用] WebUI 滚动到底部按钮闪烁：[#6593](https://github.com/HKUDS/nanobot/issues/6593)
- WebUI 中键自动滚动被拉回底部：[#6592](https://github.com/HKUDS/nanobot/issues/6592)
- DeepSeek 图像工具结果角色不兼容：[#6584](https://github.com/HKUDS/nanobot/issues/6584)

**建议：** 将 #6592 与 #6593 作为同一“滚动状态机”任务处理；为 #6584 建立独立 Provider 协议回归测试。

---

## 总结

NanoBot 今日呈现出**高吞吐、重稳定性、持续扩张功能边界**的状态。v0.4.1 的核心价值在于建立更可信的运行边界，而 WebUI、Provider、Session 和文件系统的多项修复则表明项目开始认真处理规模化使用中的性能与协议边缘问题。

当前最值得维护者优先处理的是：

1. DeepSeek 图像消息协议问题 [#6584](https://github.com/HKUDS/nanobot/issues/6584)；
2. 已冲突的 DeepSeek 中断修复 [#6533](https://github.com/HKUDS/nanobot/pull/6533)；
3. WebUI 滚动状态问题 [#6592](https://github.com/HKUDS/nanobot/issues/6592)、[#6593](https://github.com/HKUDS/nanobot/issues/6593)；
4. 长期开放的 Provider 兼容与性能 PR；
5. 推进 Heartbeat 独立模型 [#6324](https://github.com/HKUDS/nanobot/pull/6324) 进入下一版本。

**综合健康度：良好。** 版本发布顺利、修复效率较高、社区问题规模可控；主要风险不是活跃度不足，而是部分跨月 PR 的决策与合并长期停滞。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-07**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

- 今日共更新 **1 个 Issue、2 个 PR**，整体活跃度偏低，但围绕 Skills 安装失效问题形成了较快的“问题报告—修复 PR”闭环。
- 新增 Issue [#3462](https://github.com/sipeed/picoclaw/issues/3462) 报告：当不同 Skill 共享相同 frontmatter `name` 时，`picoclaw skills install` 和 Agent 的 `install_skill` 工具会错误拒绝有效 Skill。
- 对应修复 PR [#3463](https://github.com/sipeed/picoclaw/pull/3463) 已提交但尚未合并，修复方向是按安装根目录去重，而不是按 frontmatter 名称去重。
- 长期 PR [#1550](https://github.com/sipeed/picoclaw/pull/1550) 今日关闭，承担了合并多个既有修复 PR 的收口作用。
- 今日没有版本发布。问题修复已有明确实现路径，但尚不能确认已进入正式版本。

**项目健康度判断：中低活跃、局部推进正常。**  
今日更新量有限，但关键技术故障获得了针对性修复，没有开放超过一天的新积压条目。当前主要风险在于修复 PR 尚未合并、发布，且缺少测试与社区验证信息。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本级更新说明、破坏性变更或迁移指引。

需要关注：

- [#3463](https://github.com/sipeed/picoclaw/pull/3463) 若后续合并，预计会影响 Skills 安装、去重与校验逻辑。
- 在正式发布前，建议维护者确认旧版 `SKILL.md` 中重复 frontmatter `name` 的兼容性，以及同名但不同内容 Skill 的安装结果是否符合预期。
- 今日没有足够数据确认该修复会进入哪个下一版本。

---

## 3. 项目进展

### PR [#1550](https://github.com/sipeed/picoclaw/pull/1550) — 已关闭

- 该 PR 创建于 2026-03-14，今日关闭。
- 用途是合并以下既有修复：
  - PR [#1442](https://github.com/sipeed/picoclaw/pull/1442)
  - PR [#1435](https://github.com/sipeed/picoclaw/pull/1435)
  - PR [#1434](https://github.com/sipeed/picoclaw/pull/1434)
  - PR [#1430](https://github.com/sipeed/picoclaw/pull/1430)
- 其价值主要是将分散修复集中收口，减少多个 PR 独立维护和合并带来的协调成本。
- 由于当前数据未提供具体代码差异、测试结果及最终合入分支信息，无法准确判断各修复对应的功能范围。

### PR [#3463](https://github.com/sipeed/picoclaw/pull/3463) — 待合并

- 直接修复 Issue [#3462](https://github.com/sipeed/picoclaw/issues/3462)。
- 核心调整是将已安装 Skill 的去重维度从 **frontmatter `name`** 改为 **安装根目录（per root）**。
- 这一改动意味着不同目录中的 Skill 即使声明相同名称，也可以作为不同安装项存在，避免有效 Skill 被误判为无效。
- 今日没有合并记录，因此修复尚未进入主分支或正式版本。

**整体推进评估：**  
今日主要完成了 Skills 安装逻辑的缺陷定位和修复提案，方向与问题根因高度一致。若 [#3463](https://github.com/sipeed/picoclaw/pull/3463) 顺利通过测试并合并，可显著减少 Skill 安装失败和错误拦截问题。

---

## 4. 社区热点

今日所有条目均无评论、点赞或 reaction 数据，因此无法按讨论热度排序；以下按问题影响和关联性汇总。

### 1. Issue [#3462](https://github.com/sipeed/picoclaw/issues/3462)

**主题：** 不同 Skill 使用相同 frontmatter `name` 时安装失败

现象：

```text
failed to install "<slug>": registry archive is not a valid skill
```

影响范围：

- CLI：`picoclaw skills install`
- Agent 工具：`install_skill`

背后的用户诉求：

- 不同 Skill 应允许复用相同的 `SKILL.md` frontmatter `name`，只要它们实际位于不同安装目录，且内容、作者或上下文不同。
- 安装器不应把“名称重复”错误解释为“压缩包不是合法 Skill”。
- 用户需要稳定安装来自不同来源、但元数据存在重合的 Skill。

### 2. PR [#3463](https://github.com/sipeed/picoclaw/pull/3463)

**主题：** 修正 Skills 去重策略

该 PR 是今日最直接的技术行动项。其实现方向表明项目倾向于将“Skill 身份”与安装路径绑定，而不是仅依赖 frontmatter 名称。

### 3. PR [#1550](https://github.com/sipeed/picoclaw/pull/1550)

**主题：** 汇总合并多个修复 PR

虽然创建时间较长，但今日关闭，属于历史维护工作的集中收口，也提示项目存在较长生命周期 PR 的整合需求。

---

## 5. Bug 与稳定性

### P1 / 高优先级：同名 Skill 导致安装失败

- **问题：** [#3462](https://github.com/sipeed/picoclaw/issues/3462)
- **状态：** Open，0 评论、0 点赞
- **影响：** CLI 与 Agent 安装工具均受影响；可能阻断多个合法 Skill 的共存与自动安装。
- **严重程度说明：** 当前没有用户规模、错误率或环境信息，暂定为 **P1（高）**，而非确认的系统性 P0。
- **修复状态：** 已有 fix PR [#3463](https://github.com/sipeed/picoclaw/pull/3463)，但尚未合并。
- **稳定性风险：** 修复落地前，重复 frontmatter 名称仍是可复现的安装阻断点。

### PR 聚合关闭带来的验证风险

- **条目：** [#1550](https://github.com/sipeed/picoclaw/pull/1550)
- 由于数据未提供被聚合 PR 的具体改动和测试结果，无法确认其中是否存在回归风险。
- 建议维护者在关闭或合入前核对各子 PR 的测试覆盖及冲突解决结果。

**今日总体稳定性判断：**  
发现一个明确的功能性 Bug，已有对应修复，但正式缓解尚未发布。当前没有崩溃、进程异常或安全漏洞报告。

---

## 6. 功能请求与路线图信号

今日没有独立的功能请求 Issue 或明确路线图提案，但 [#3462](https://github.com/sipeed/picoclaw/issues/3462) 与 [#3463](https://github.com/sipeed/picoclaw/pull/3463) 释放出以下信号：

1. **Skills 安装体系正在强化多 Skill 共存能力。**  
   按根目录去重，说明系统需要支持不同来源、不同目录的 Skill 独立安装和管理。

2. **Skill 唯一性标识可能需要重新定义。**  
   当前 frontmatter `name` 既承担展示名称，又似乎影响去重。后续可能需要明确区分：
   - 展示名称；
   - Skill slug；
   - 安装标识；
   - 实际安装路径。

3. **Agent 工具与 CLI 应保持一致行为。**  
   Issue 同时涉及 `picoclaw skills install` 和 `install_skill`，后续测试应覆盖两个入口，防止修复只覆盖其中之一。

4. **可能纳入下一版本的候选项：**  
   [#3463](https://github.com/sipeed/picoclaw/pull/3463) 是唯一具备明确用户故障与实现方案的候选修复，若测试通过，优先级较高。

---

## 7. 用户反馈摘要

今日 Issue 无评论，无法提取更多真实用户反馈；以下仅依据 [#3462](https://github.com/sipeed/picoclaw/issues/3462) 的报告内容归纳。

### 真实使用痛点

- 用户会安装内容不同、来源不同但 frontmatter `name` 相同的 Skill。
- 当前系统将这种合法共存场景误判为无效压缩包。
- 错误信息“registry archive is not a valid skill”具有误导性，没有指出实际冲突原因是名称重复。
- 故障同时影响手动 CLI 安装和 Agent 自动安装，降低了工具链的可靠性。

### 满意与不满意

- **正面信号：** 用户能够明确区分“目录不同、作者不同、内容不同”的 Skill，并提交了可复现的问题。
- **主要不满意：** 安装器采用过强的名称唯一性假设，且错误提示无法帮助用户定位冲突。
- **待验证：** 修复 PR 尚无评论、点赞或测试反馈，暂时无法判断社区对方案的认可程度。

---

## 8. 待处理积压

### 重点待处理：PR [#3463](https://github.com/sipeed/picoclaw/pull/3463)

- 当前状态：Open、待合并。
- 创建与更新日期均为 2026-11-06，是今日最需要跟进的技术事项。
- 建议维护者：
  1. 验证同名但不同目录的 Skill 可以同时安装；
  2. 验证同一路径下重复安装时仍能正确去重；
  3. 覆盖 CLI 与 Agent `install_skill` 两个入口；
  4. 检查错误信息是否仍会在其他无效归档场景下产生误导。

### 重点待处理：Issue [#3462](https://github.com/sipeed/picoclaw/issues/3462)

- 当前状态：Open。
- 已有对应 PR，但在修复合并、测试通过和版本发布之前，不宜关闭。
- 建议补充受影响版本、操作系统、安装来源及最小复现步骤，便于回归测试。

### 历史积压收口提醒：PR [#1550](https://github.com/sipeed/picoclaw/pull/1550)

- 该 PR 从 2026-03-14 持续至 2026-11-06，生命周期约八个月。
- 今日已关闭，说明历史 PR 正在被集中处理。
- 由于聚合了四个旧 PR，建议确认 [#1442](https://github.com/sipeed/picoclaw/pull/1442)、[#1435](https://github.com/sipeed/picoclaw/pull/1435)、[#1434](https://github.com/sipeed/picoclaw/pull/1434)、[#1430](https://github.com/sipeed/picoclaw/pull/1430) 均获得明确处置，避免功能遗漏。

---

## 今日结论

PicoClaw 今日没有发布新版本，整体更新量较小，但 Skills 安装链路出现了一个具有实际阻断性的元数据冲突问题。Issue [#3462](https://github.com/sipeed/picoclaw/issues/3462) 与修复 PR [#3463](https://github.com/sipeed/picoclaw/pull/3463) 已形成直接对应关系，说明问题响应效率尚可。接下来最关键的推进事项是完成回归测试、合并修复并纳入版本发布，同时确认历史聚合 PR [#1550](https://github.com/sipeed/picoclaw/pull/1550) 涉及的修复没有遗漏。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-07**  
**项目：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

- 过去 24 小时共更新 **1 条 Issue、23 条 PR**，其中 **7 条待合并、16 条已合并或关闭**，项目开发与维护活动较为活跃。
- 今日发布 **LobsterAI 2026.11.6**，核心方向是提升聊天、流式响应、上下文压缩和安装包体验的可靠性。
- PR 以 **依赖升级和发布准备** 为主，同时涉及登录流程、桌面伴侣权限引导及 OpenClaw 插件配置持久化等关键修复。
- 今日仅有 **1 条账号封禁申诉**，未出现新的崩溃、回归或集中性用户反馈；但当前仍有 **7 条待合并 PR**，包括 Electron、Univer、文档编辑器和 CI Action 等升级，需要重点关注兼容性与合并节奏。
- 整体健康度评估：**良好**。版本发布和缺陷修复推进明确，但依赖变更规模较大、待合并事项较多，建议在下一版本前完成回归验证。

---

## 2. 版本发布

### [LobsterAI 2026.11.6](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.11.6)

> 发布日期：2026-11-06  
> 发布说明中同时出现“2026.11.2”标题，内容可能沿用了早期版本说明，具体变更以 Release 页面和标签内容为准。

本版本重点围绕**可靠性与资源优化**展开：

- **模型流自动重连**：聊天过程中发生流式连接中断时，可自动恢复，降低回答被迫终止的概率。
- **超长上下文恢复机制**：上下文过大时执行压缩，并向用户显示压缩进度，改善长会话稳定性。
- **图像处理管线优化**：降低图像链路的资源消耗及额外请求开销。
- **安装包瘦身**：减少无效资源随安装包分发，降低下载与安装体积。

#### 破坏性变更

- 当前提供的 Release 摘要中**未明确列出破坏性变更**。
- 但该版本包含依赖升级及运行时行为调整，用户仍应重点验证：
  - 长时间对话与断线重连；
  - 超长上下文触发压缩时的数据完整性；
  - 图片上传、识别和多模态响应；
  - Windows、macOS 等不同平台的安装与启动；
  - 插件、模型服务及 OpenClaw 集成。

#### 迁移注意事项

- 建议安装后优先确认原有模型配置、插件配置和历史会话是否正常载入。
- 使用长上下文会话的用户，应检查自动压缩后的关键信息保留情况。
- 若使用桌面伴侣，建议完成 macOS **辅助功能**与**屏幕录制**权限配置；相关引导已由 [PR #3024](https://github.com/netease-youdao/LobsterAI/pull/3024) 补充。
- 当前发布标签与说明标题存在版本号不一致，建议维护者在正式公告中核对 Release 正文，避免用户误判。

---

## 3. 项目进展

今日共更新 **23 条 PR**，其中 **16 条已合并或关闭**。已展示的重要条目如下：

### 登录与网关稳定性

- [PR #3025：避免登录后网关重复重启](https://github.com/netease-youdao/LobsterAI/pull/3025)  
  **状态：已关闭**  
  修复订阅账号登录后 OpenClaw 网关相隔约 24 秒重复重启的问题。问题与媒体权益同步、模型兼容插件被移除，以及 `plugins/models` 配置变化共同触发重启有关。该 PR 表明维护者开始处理登录链路中的重复副作用，有助于减少等待时间和服务抖动。

### 桌面伴侣权限体验

- [PR #3024：增加辅助功能与屏幕录制权限引导](https://github.com/netease-youdao/LobsterAI/pull/3024)  
  **状态：已关闭**  
  为 macOS 桌面伴侣增加权限介绍卡和系统设置操作指引，并通过 `CGRequest` 将应用注册到系统权限列表；同时强化权限选择与截图处理。该工作改善了桌面自动化能力的可发现性和配置成功率。

### OpenClaw 插件配置持久化

- [PR #2727：持久化 OpenClaw entry hooks](https://github.com/netease-youdao/LobsterAI/pull/2727)  
  **状态：已关闭**  
  将 `plugins.entries.*.hooks` 持久化到 SQLite，并在 `syncToDisk` 时重写配置，使入口 Hook 在网关重启后不再丢失。该修复提升了插件配置的一致性与可靠性，降低了重启导致自动化能力失效的风险。

### 发布流程

- [PR #3018：Release/2026.11.2](https://github.com/netease-youdao/LobsterAI/pull/3018)  
  **状态：已关闭**  
  覆盖 renderer、build、docs、main、openclaw、skills、cowork、im、artifacts 及 Windows 平台等范围，是本轮版本交付的集中发布 PR。

### 依赖与工具链维护

今日大量 PR 聚焦依赖升级：

- [PR #3021：Electron 43.5.0 → 43.8.6](https://github.com/netease-youdao/LobsterAI/pull/3021)，待合并。
- [PR #3022：fast-xml-parser 5.11.1 → 5.11.2](https://github.com/netease-youdao/LobsterAI/pull/3022)，待合并。
- [PR #3020：docx-editor core/i18n 升级](https://github.com/netease-youdao/LobsterAI/pull/3020)，待合并。
- [PR #3019：Univer 依赖组批量升级 34 项](https://github.com/netease-youdao/LobsterAI/pull/3019)，待合并。
- [PR #2970](https://github.com/netease-youdao/LobsterAI/pull/2970)、[#2971](https://github.com/netease-youdao/LobsterAI/pull/2971)、[#2973](https://github.com/netease-youdao/LobsterAI/pull/2973)：Univer 子包升级，已关闭。
- [PR #2969：Mermaid 10.9.8 → 12.2.0](https://github.com/netease-youdao/LobsterAI/pull/2969)，已关闭。
- [PR #2972：KaTeX 0.16.47 → 0.19.1](https://github.com/netease-youdao/LobsterAI/pull/2972)，已关闭。
- [PR #2968：Vite 5.4.21 → 8.3.5](https://github.com/netease-youdao/LobsterAI/pull/2968)，已关闭。
- [PR #2857：@nodesecure/js-x-ray 14.3.0 → 16.2.0](https://github.com/netease-youdao/LobsterAI/pull/2857)，已关闭。
- [PR #2852：Electron 与 electron-builder 依赖组升级](https://github.com/netease-youdao/LobsterAI/pull/2852)，已关闭。

### 整体推进判断

项目今日主要完成了三方面推进：

1. **发布可靠性**：新版本上线，重点解决流中断、上下文压缩和安装包冗余。
2. **运行时稳定性**：修复登录重复重启和插件 Hook 丢失。
3. **依赖现代化**：持续更新桌面运行时、文档渲染、绘图、公式、构建及 CI 组件。

这些工作直接改善聊天连续性、桌面自动化和 OpenClaw 插件稳定性，项目整体向可交付状态推进了明显一步。

---

## 4. 社区热点

今日展示的 PR 均未提供评论数或点赞数，因此无法基于互动量严格排序；以下按业务影响和社区相关性归纳。

### [Issue #3023：LobsterAI 账号被封禁申诉](https://github.com/netease-youdao/LobsterAI/issues/3023)

- **状态：**开放
- **评论数：**1
- **点赞数：**0
- **关注度：**今日唯一 Issue，也是最主要的用户诉求。

用户申诉其 LobsterAI 账号无法登录，系统提示账号被封禁或存在异常，并强调没有批量调用接口。补充说明显示，该用户曾在本地第三方插件中配置过 LobsterAI 凭据，用于定时签到和刷新模型目录，因此产生了自动化请求；目前已删除相关凭据。

**背后诉求：**

- 用户希望获得账号封禁原因和人工复核机会。
- 用户对“第三方插件自动请求是否会被判定为异常使用”存在明显不确定性。
- 事件可能反映账号风控规则与本地插件集成场景之间存在认知或策略冲突。

### [PR #3025：登录后网关重复重启修复](https://github.com/netease-youdao/LobsterAI/pull/3025)

尽管没有评论和点赞数据，该 PR 直接涉及真实用户登录日志，反映出团队对登录延迟、网关重复重启等稳定性问题的响应。

### [PR #3024：桌面伴侣权限引导](https://github.com/netease-youdao/LobsterAI/pull/3024)

该 PR 面向桌面伴侣最容易引发用户困惑的系统权限配置问题，具有较强的用户教育价值，也直接关系桌面自动化功能能否顺利启用。

### [PR #3019：Univer 依赖组批量升级](https://github.com/netease-youdao/LobsterAI/pull/3019)

单次包含 34 项更新，是待合并 PR 中变更规模最大的一项。虽然社区互动数据缺失，但其影响范围广，值得进行兼容性评估和专项回归。

---

## 5. Bug 与稳定性

### 高优先级

#### 1. 账号被封禁或无法登录

- **Issue：** [#3023](https://github.com/netease-youdao/LobsterAI/issues/3023)
- **现象：** 用户无法登录或使用，系统显示账号被封禁或异常。
- **可能背景：** 第三方插件中的定时签到、模型目录刷新等自动化请求。
- **是否已有 Fix PR：** **未发现明确的修复 PR**。
- **当前判断：** 需先确认封禁原因、请求特征及是否存在违规使用，再决定属于风控误判、凭据管理问题还是产品策略调整。
- **处理建议：** 提供申诉状态、封禁原因或人工复核入口，并明确第三方集成的请求频率与合规边界。

### 中优先级

#### 2. 登录后 OpenClaw 网关重复重启

- **PR：** [#3025](https://github.com/netease-youdao/LobsterAI/pull/3025)
- **现象：** 登录订阅账号后，网关相隔约 24 秒重启两次，首次耗时约 20 秒。
- **影响：** 登录延迟、服务不稳定、插件可能在重启期间短暂不可用。
- **是否已有 Fix PR：** **有，PR 已关闭**。
- **注意：** “已关闭”不等同于“已合并”，仍需确认关闭原因及修复是否进入发布分支。

#### 3. OpenClaw entry hooks 在网关重启后丢失

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **现象：** `plugins.entries.*.hooks` 未被完整持久化，`syncToDisk` 后可能丢失。
- **影响：** 自动化入口失效、插件行为与用户配置不一致。
- **是否已有 Fix PR：** **有，PR 已关闭**。
- **建议：** 验证重启、配置同步及版本升级三个场景。

### 较低优先级或以预防性维护为主

#### 4. 大规模依赖升级带来的潜在回归风险

相关 PR：

- [Electron 43.5.0 → 43.8.6，#3021](https://github.com/netease-youdao/LobsterAI/pull/3021)
- [Univer 批量升级 34 项，#3019](https://github.com/netease-youdao/LobsterAI/pull/3019)
- [docx-editor 升级，#3020](https://github.com/netease-youdao/LobsterAI/pull/3020)
- [Mermaid 10.9.8 → 12.2.0，#2969](https://github.com/netease-youdao/LobsterAI/pull/2969)
- [KaTeX 0.16.47 → 0.19.1，#2972](https://github.com/netease-youdao/LobsterAI/pull/2972)
- [Vite 5.4.21 → 8.3.5，#2968](https://github.com/netease-youdao/LobsterAI/pull/2968)
- [Electron 依赖组升级，#2852](https://github.com/netease-youdao/LobsterAI/pull/2852)

这些并非已确认的生产 Bug，但跨越运行时、文档渲染、公式、图表和构建工具多个层级。当前应视为**回归风险项**，建议按桌面端启动、文档编辑、公式渲染、Mermaid 图表、插件构建和安装包构建进行验证。

### 今日未发现

- 无明确崩溃报告；
- 无新版本升级后回归报告；
- 无聊天断线相关的新 Issue；
- 无上下文压缩失败或数据丢失的新 Issue。

---

## 6. 功能请求与路线图信号

### 已进入实现的信号

#### macOS 桌面伴侣权限引导

- **PR：** [#3024](https://github.com/netease-youdao/LobsterAI/pull/3024)
- **信号：** 项目正在补齐桌面自动化功能的首次使用体验，重点包括辅助功能、屏幕录制权限说明和系统设置跳转。
- **下一阶段可能内容：** 更精细的权限状态检测、授权失败后的诊断提示，以及跨平台权限引导统一化。

#### OpenClaw 插件配置一致性

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **信号：** OpenClaw 集成继续向配置可靠性和重启可恢复性推进。
- **下一阶段可能内容：** 插件配置版本迁移、同步冲突检测，以及配置变更后的单次、有序重启。

#### 登录和网关生命周期优化

- **PR：** [#3025](https://github.com/netease-youdao/LobsterAI/pull/3025)
- **信号：** 维护者开始关注登录过程中的事件同步、插件变更和网关重启之间的竞态问题。
- **下一阶段可能内容：** 合并重复重启事件、延长重启去重窗口、补充状态反馈和回归测试。

### 来自用户诉求的潜在路线图信号

#### 账号风控可解释性与申诉闭环

- **Issue：** [#3023](https://github.com/netease-youdao/LobsterAI/issues/3023)
- **用户诉求：** 账号封禁原因透明化、人工复核和申诉进度反馈。
- **可能纳入方向：**
  - 在客户端明确展示账号受限原因；
  - 提供申诉入口与处理状态；
  - 对定时签到、模型目录刷新等插件请求区分正常流量和异常行为；
  - 增加凭据撤销、失效及清理提示。

目前没有对应功能 PR 可见，但这是今日最直接的用户需求。

### 依赖现代化路线

- 待合并的 [Electron #3021](https://github.com/netease-youdao/LobsterAI/pull/3021)、[Univer #3019](https://github.com/netease-youdao/LobsterAI/pull/3019)、[docx-editor #3020](https://github.com/netease-youdao/LobsterAI/pull/3020) 表明项目正持续更新基础技术栈。
- 此外，开放的 [actions/checkout #2579](https://github.com/netease-youdao/LobsterAI/pull/2579)、[actions/cache #2580](https://github.com/netease-youdao/LobsterAI/pull/2580)、[actions/stale #2581](https://github.com/netease-youdao/LobsterAI/pull/2581) 指向 CI 工具链现代化，但均带有 `stale` 标签，需先确认是否仍有维护价值。

---

## 7. 用户反馈摘要

今日 Issue 数量较少，因此用户反馈主要来自 [Issue #3023](https://github.com/netease-youdao/LobsterAI/issues/3023)。

### 真实使用场景

- 用户通过本地第三方插件配置 LobsterAI 账号凭据；
- 插件会执行定时签到及模型目录刷新；
- 用户由此接触到 LobsterAI，并希望在后续使用中出现账号封禁或异常提示。

### 主要痛点

1. **账号限制缺少透明度**  
   用户只能看到“被封禁或异常”，无法判断具体触发原因。

2. **自动化集成边界不清晰**  
   用户不确定定时请求、模型目录刷新是否违反平台规则。

3. **申诉反馈不足**  
   Issue 已有 1 条评论，但尚无公开的明确处理结论或可追踪状态。

4. **凭据治理意识较强**  
   用户已主动删除本地凭据，说明其愿意配合整改，但仍希望账号恢复正常使用。

### 满意与不满意

- **积极信号：** 用户仍主动提交申诉并说明整改情况，说明其对产品存在使用意愿。
- **主要不满意：** 账号风控结果不透明、自动化请求规则不清晰、申诉处理链路不明确。
- **今日总体口碑：** 没有出现集中投诉，负面反馈集中于单个账号事件，尚不足以判断形成普遍性产品问题。

---

## 8. 待处理积压

### 8.1 今日待合并 PR：7 条

重点关注以下条目：

- [PR #3021：Electron 升级至 43.8.6](https://github.com/netease-youdao/LobsterAI/pull/3021)  
  影响桌面运行时，应优先完成启动、渲染、窗口行为和安装包回归。

- [PR #3019：Univer 依赖组升级 34 项](https://github.com/netease-youdao/LobsterAI/pull/3019)  
  变更面最大，需重点验证表格、绘图、数据验证、查找替换和国际化。

- [PR #3020：docx-editor core/i18n 升级](https://github.com/netease-youdao/LobsterAI/pull/3020)  
  需验证文档编辑、格式兼容、语言切换和导入导出。

- [PR #3022：fast-xml-parser 升级](https://github.com/netease-youdao/LobsterAI/pull/3022)  
  虽为小版本升级，也应确认 XML 解析兼容性。

### 8.2 长期开放且带 `stale` 标签的 CI PR

- [PR #2579：actions/checkout 4 → 7](https://github.com/netease-youdao/LobsterAI/pull/2579)
- [PR #2580：actions/cache 4 → 6](https://github.com/netease-youdao/LobsterAI/pull/2580)
- [PR #2581：actions/stale 9.1.0 → 11.0.0](https://github.com/netease-youdao/LobsterAI/pull/2581)

这些 PR 自 2026-08-31 创建至今仍处于开放状态。建议维护者：

- 核对 Action 新版本是否仍适配现有工作流和 Node 运行时；
- 若升级价值仍存在，补充兼容性验证后合并；
- 若已被其他方案取代，应明确关闭并记录原因，避免长期积压。

### 8.3 长期开放的依赖更新

- [PR #2461：eslint-plugin-react-hooks 5.2.0 → 7.1.1](https://github.com/netease-youdao/LobsterAI/pull/2461)  
  自 2026-08-10 起开放且标记 `stale`。该升级可能涉及 React Hooks 规则变化，建议重新执行 lint 和组件测试，确认没有引入新的误报或规则兼容问题。

### 8.4 账号申诉事项

- [Issue #3023](https://github.com/netease-youdao/LobsterAI/issues/3023)  
  虽仅开放 1 天，但涉及账号可用性和自动化请求合规边界，建议优先响应并给出人工复核结论。

---

## 今日结论

LobsterAI 今日处于**高频开发、版本交付和依赖维护并行**阶段。2026.11.6 的发布重点解决流式聊天连续性、长上下文处理及安装包冗余；网关重复重启和插件 Hook 丢失等可靠性问题也已有对应修复工作。

当前主要风险不在于用户问题数量，而在于**大批依赖升级的兼容性验证压力**以及**账号风控申诉机制缺少即时反馈**。若 Electron、Univer 和文档编辑器升级经过完整回归，并完成账号申诉闭环，项目健康度可进一步提升。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-07**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度：中高（开发活跃，修复密集，但稳定性与兼容性债务仍较明显）**

---

## 1. 今日速览

过去 24 小时共更新 **16 条 Issues** 和 **23 条 PR**，其中 Issues 有 **9 条保持活跃、7 条关闭**，PR 有 **14 条待合并、9 条已合并或关闭**，项目整体开发活跃度较高。

今日工作重点集中在**控制台体验、模型与 Provider 稳定性、Memory 检索、IM 渠道展示、Windows/Docker 兼容性**等方向；同时出现了多项涉及启动失败、工具调用失效、会话状态异常的缺陷修复。

从问题分布看，当前 QwenPaw 的功能扩展速度较快，但**配置校验、跨平台路径、第三方 Provider 兼容、插件安装和资源生命周期管理**仍存在系统性薄弱点。当天没有发布新版本，因此这些修复的落地与版本化交付是后续观察重点。

---

## 3. 项目进展

> 今日无新版本发布，暂无独立版本发布章节。

### 3.1 已关闭或完成的重要 PR

以下 PR 已显示为关闭状态，通常意味着已经合并、放弃或完成评审；其具体落地状态仍应以仓库合并记录为准。

- **模型配置写入校验修复**  
  PR [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550) 修复 `thinking_budget`、`max_input_length` 等字段在写入路径中绕过校验的问题，避免非法配置落盘后导致 Provider 重启失效。相关 Issue：[#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549)。  
  **进展意义：** 将校验从事后读取前移到配置写入阶段，降低“保存成功但服务不可用”的隐蔽故障。

- **Matrix 会话恢复和设备密钥补传**  
  PR [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) 面向密码登录场景，改进缓存会话复用，并在服务端丢失设备密钥后重新上传 E2EE 密钥。相关 Issue：[#8365](https://github.com/agentscope-ai/QwenPaw/issues/8365)。  
  **进展意义：** 提升 Matrix 渠道重启恢复能力，降低“渠道看似在线但消息无法解密”的风险。

- **第三方智能体定时任务请求格式修复**  
  PR [#8535](https://github.com/agentscope-ai/QwenPaw/pull/8535) 统一 Cron 请求进入第三方 Harness 前的对象转换，修复 Codex、Qoder 后端将非空任务指令误判为空的问题。相关 Issue：[#8533](https://github.com/agentscope-ai/QwenPaw/issues/8533)。  
  **进展意义：** 补齐第三方 Agent 与定时任务集成链路。

- **Windows Shell 取消测试防挂起**  
  PR [#8604](https://github.com/agentscope-ai/QwenPaw/pull/8604) 修复 Windows Shell cancellation 测试可能长时间挂起的问题。  
  **进展意义：** 改善 Windows CI 测试稳定性，减少测试环境中的假死和队列阻塞。

- **`/clear` 后重新打开会话仍为空**  
  PR [#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600) 修复清空或新建会话后，缓存的 `/clear` 消息被恢复为用户气泡、进而遮挡空状态提示的问题。相关 Issue：[#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596)。  
  **进展意义：** 改善会话生命周期与前端缓存状态的一致性。

- **自动 Memory Recall 改为引用上下文**  
  PR [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) 将自动召回从“助手思考/工具调用序列”改为临时、不可信的文本引用上下文，减少模型模仿内部轨迹并重复调用 `memory_search`。  
  **进展意义：** 有助于提高 Memory 注入稳定性和上下文安全性。

- **动态 MCP 工具与会话级持久化**  
  PR [#373](https://github.com/agentscope-ai/QwenPaw/pull/373) 尝试让动态加载的 MCP 连接在会话轮次间保持可用。  
  **进展意义：** 对长期运行的工具型智能体和动态技能生态具有重要意义，但需关注其最终是否合并及测试覆盖情况。

### 3.2 待合并的重点 PR

- **Reranker 模型中心与多查询精度验证**  
  PR [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) 新增 Reranker 模型配置、服务测试、多查询持久化精度历史及自动验证。  
  **进展意义：** 显示 Memory & Retrieval 正从基础召回向可观测、可调优的检索工程体系演进。

- **GBK/CP936 文件读取与编辑修复**  
  PR [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) 避免 `read_file_safe`、`edit_file` 和 `grep_search` 在 Windows 中文环境下静默丢弃非 UTF-8 字节。  
  **进展意义：** 直接提升中文 Windows 用户处理 TXT、CSV、Markdown 等文件时的数据完整性。

- **Ollama 上下文窗口识别**  
  PR [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) 改为从 `num_ctx` 获取上下文窗口，而不是沿用 128K 默认值。  
  **进展意义：** 可减少本地模型被错误赋予超大上下文、进而触发截断或内存压力的问题。

- **运行时使用解析后的媒体能力**  
  PR [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) 修复能力发现与运行时判定口径不一致，导致图片内容被提前移除的问题。  
  **进展意义：** 提升多模态模型在实际运行路径中的可用性。

- **控制台模型删除能力**  
  PR [#8611](https://github.com/agentscope-ai/QwenPaw/pull/8611) 在远程模型管理中增加删除模式，便于清理重复或废弃条目。  
  **进展意义：** 控制台开始补齐模型生命周期管理；另有较早的 [#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410) 也在推进同类能力，需关注整合方式。

- **会话切换时保留用户输入和时间戳**  
  PR [#8274](https://github.com/agentscope-ai/QwenPaw/pull/8274) 避免生成过程中切换会话再返回时丢失待发送输入、附件、提交时间或客户端消息标识。  
  **进展意义：** 改善异步生成场景中的会话切换体验和消息一致性。

### 3.3 整体推进判断

今日项目推进可概括为：

1. **修复了一批“已存在但不可见或不可用”的底层问题**，包括配置校验、定时任务、第三方 Provider、Matrix 密钥和会话状态；
2. **控制台开始补齐成熟产品级交互**，包括模型删除、默认 Agent 编辑、引用回复、紧凑工具调用展示；
3. **Memory 模块继续深化**，从自动召回注入走向 Reranker、多查询验证和精度可观测；
4. 但仍有 **14 个 PR 尚待合并**，多个大型 PR 已创建较久，当前工程吞吐尚不能完全等同于有效交付速度。

---

## 4. 社区热点

### 4.1 Issues

- **跨智能体协作与身份混淆体验反馈** — [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420)  
  今日更新中评论最多，共 **4 条评论**。反馈集中于跨 Agent 协作引导、通信触发、协作连贯性和身份混淆。  
  **核心诉求：** 用户希望多智能体交互从“功能可用”进一步变成“关系可理解、协作可预测、身份可辨识”。

- **Memory 标签索引不可用** — [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)  
  共 **4 条评论**。标签已生成，但 `/memory/tags` 返回 503，索引没有重建。  
  **核心诉求：** Memory 的生成链路和读取链路需要保持一致；自动化系统不能出现“数据已写入但界面不可读”的半失效状态。

- **IM 渠道工具调用展示格式** — [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)  
  共 **3 条评论**，并已有对应实现 PR [#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610)。  
  **核心诉求：** 飞书、钉钉等 IM 中工具调用应支持 `full`、`name_only`、`compact` 等可配置格式，降低消息噪声。

- **回答文本引用到后续提问** — [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)  
  共 **3 条评论**，已有实现 PR [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)。  
  **核心诉求：** 支持类似 Perplexity 的“引用后追问”，将选中的回答作为上下文带入下一轮对话。

- **默认 Agent 无法编辑** — [#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)  
  共 **3 条评论**，已有修复 PR [#8608](https://github.com/agentscope-ai/QwenPaw/pull/8608)。  
  **核心诉求：** 单 Agent、自托管用户也应拥有完整的默认 Agent 管理能力。

- **官方插件安装元数据缺失** — [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)  
  共 **3 条评论**。UI 与 CLI 安装 `qwenpaw-creator` 均出现 `No package metadata was found`。  
  **核心诉求：** 插件生态的基础安装链路必须稳定，否则官方扩展难以形成可用生态。

- **Hub Docker 非 root 启动失败** — [#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517)  
  共 **3 条评论**。Hub 以非 root 用户运行时无法访问 `working/config.json`。  
  **核心诉求：** 容器部署应符合最小权限原则，不能隐式依赖 root 权限。

### 4.2 Pull Requests

今日 PR 列表中评论字段普遍为空，因此无法仅依据评论数判断讨论热度；从规模和关注主题看，以下 PR 最具代表性：

- **Reranker 模型中心** — [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472)  
  涉及 Memory 检索质量、模型配置、服务测试和持久化验证，属于当前较重要的能力建设。

- **自动 Memory Recall 上下文化** — [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)  
  触及长期记忆注入方式和模型行为稳定性，安全与可靠性价值较高。

- **Windows GBK/CP936 文件兼容** — [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)  
  直接影响中文 Windows 用户的日常文件操作，且 PR 规模达到 XXL，说明兼容改造工作量较大。

- **动态 MCP 会话级持久化** — [#373](https://github.com/agentscope-ai/QwenPaw/pull/373)  
  解决了动态 MCP 工具跨轮次丢失的关键问题，但 PR 创建时间较长，合并状态与维护优先级值得跟进。

总体来看，社区热点并非只集中于“增加更多 Agent”，而更多围绕**多 Agent 协作可信度、长期记忆、工具生态稳定性和控制台可用性**展开。

---

## 5. Bug 与稳定性

### 严重

1. **第三方 OpenAI 兼容 Provider 的 `run_code` 工具参数为空**
   - Issue：[#8603](https://github.com/agentscope-ai/QwenPaw/issues/8603)
   - 现象：用户自定义 OpenAI-compatible Provider 每次执行 `run_code` 都传入 `{}`，触发 `'code' is a required property`。
   - 影响：相关 Provider 下的代码执行能力基本不可用。
   - **Fix PR：尚未看到明确对应 PR。**

2. **Hub Docker 以非 root 用户启动失败**
   - Issue：[#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517)
   - 现象：访问 `working/config.json` 时出现 `Permission denied`。
   - 影响：容器化、自托管及安全加固部署可能被直接阻断。
   - **Fix PR：尚未看到明确对应 PR。**

### 高

3. **Windows 下 `recall_history` 失效**
   - Issue：[#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)
   - 现象：`workspace_dir` 被规范化为 `\\?\` 扩展长度路径后，SQLite 只读 URI 无法读取。
   - 影响：Windows 用户历史召回功能不可用，且已观察到跨 2.2.x、2.3.x 的持续问题。
   - **Fix PR：尚未看到明确对应 PR。**

4. **Memory 标签索引不重建并返回 503**
   - Issue：[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)
   - 现象：标签生成成功，但 `/memory/tags` 报索引不可用。
   - 影响：Memory 管理接口和标签检索链路失效，可能进一步影响记忆质量评估。
   - **Fix PR：暂无明确对应 PR；相关方向有 [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472)，但并非直接针对该 503。**

5. **官方插件 `qwenpaw-creator` 安装失败**
   - Issue：[#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)
   - 现象：UI 和 CLI 均报 `No package metadata was found`。
   - 影响：官方插件分发链路受阻，扩展生态可信度受损。
   - **Fix PR：疑似与已关闭的 [#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598) 有关，但其摘要未明确问题编号，需确认实际覆盖范围。**

6. **ACP shutdown fallback 可能泄漏事件循环**
   - Issue：[#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857)
   - 现象：同步回退路径可能跳过 session cleanup，并留下未关闭的事件循环。
   - 影响：长期运行或反复启停 ACP 时可能积累资源泄漏和生命周期异常。
   - **Fix PR：Issue 已关闭，相关测试清理见 [#7858](https://github.com/agentscope-ai/QwenPaw/pull/7858)，但原始 Issue 页面未展示明确修复 PR。**

### 中

7. **默认 Agent 编辑按钮不可用**
   - Issue：[#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)
   - **Fix PR：有，[#8608](https://github.com/agentscope-ai/QwenPaw/pull/8608)，当前待合并。**

8. **模型配置非法值被写入，重启后 Provider 消失**
   - Issue：[#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549)
   - **Fix PR：有，[#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)，PR 已关闭。**

9. **Codex/Qoder 定时任务误判为空请求**
   - Issue：[#8533](https://github.com/agentscope-ai/QwenPaw/issues/8533)
   - **Fix PR：有，[#8535](https://github.com/agentscope-ai/QwenPaw/pull/8535)，PR 已关闭。**

10. **Matrix 每次启动重新密码登录且设备密钥未补传**
    - Issue：[#8365](https://github.com/agentscope-ai/QwenPaw/issues/8365)
    - **Fix PR：有，[#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411)，PR 已关闭。**

11. **清空会话后重新打开仍显示 `/clear` 消息**
    - Issue：[#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596)
    - **Fix PR：有，[#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600)，PR 已关闭。**

### 低至中

12. **工具 Schema 中布尔型 `additionalProperties` 被错误改写**
    - PR：[#8607](https://github.com/agentscope-ai/QwenPaw/pull/8607)
    - 影响：符合规范的第三方工具 Schema 可能被错误处理。
    - **Fix PR：已有，待合并。**

13. **会话切换可能丢失待发送输入和时间戳**
    - PR：[#8274](https://github.com/agentscope-ai/QwenPaw/pull/8274)
    - 影响：用户输入和附件存在丢失风险。
    - **Fix PR：已有，待合并。**

14. **Windows Shell 取消测试可能挂起**
    - PR：[#8604](https://github.com/agentscope-ai/QwenPaw/pull/8604)
    - 影响：主要影响测试稳定性，但可能拖慢 CI。
    - **Fix PR：已有，PR 已关闭。**

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入近期版本

- **回答内容引用后追问**
  - Issue：[#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)
  - PR：[#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)
  - **判断：高。** 已有小型、边界清晰的实现，预计较容易进入下一版本。

- **IM 工具调用紧凑展示**
  - Issue：[#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)
  - PR：[#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610)
  - **判断：高。** 已有完整配置设计和多格式兼容，适合快速交付。

- **默认 Agent 可编辑**
  - Issue：[#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)
  - PR：[#8608](https://github.com/agentscope-ai/QwenPaw/pull/8608)
  - **判断：高。** 属于恢复既有 API 已支持的能力，改动和回归风险较低。

- **模型管理支持删除**
  - PR：[#8611](https://github.com/agentscope-ai/QwenPaw/pull/8611)
  - 相关 PR：[#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410)
  - **判断：中高。** 已有 API 支撑，但可能需要先统一两个 PR 的交互和实现方案。

### 6.2 中期路线图信号

- **Reranker 模型中心与检索精度管理**
  - PR：[#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472)
  - **判断：中高。** 功能体量较大，且与 Memory 质量提升直接相关，适合进入检索能力升级阶段。

- **浏览器标签页标题跟随会话名**
  - Issue：[#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605)
  - **判断：中。** 需求明确但技术改动较小，优先级取决于多标签页使用频率。

- **跨智能体协作的显式引导与身份隔离**
  - Issue：[#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420)
  - **判断：中。** 这是多智能体产品化的核心方向，但涉及运行时协议、会话状态和 UI 呈现，复杂度高于普通功能增强。

### 6.3 仍需明确设计的请求

- **Memory 标签索引的自恢复机制**
  - Issue：[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)
  - **判断：应作为稳定性修复，而非只做临时手工重建。** 建议明确索引版本、启动重建、失败回退和健康检查。

- **插件安装与包元数据兼容性**
  - Issue：[#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)
  - **判断：生态基础设施。** 需要验证官方插件包、镜像、热安装 API 与 CLI 元数据解析的一致性。

---

## 7. 用户反馈摘要

### 主要使用场景

- **多控制台标签页管理不同会话**
  - 用户需要从浏览器标签标题识别当前会话，见 [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605)。
  - **痛点：** 当前标题完全相同，在多会话并行使用时效率较低。

- **IM 渠道中的高频 Agent 运行**
  - 飞书、钉钉等渠道中的工具调用占据多行，影响阅读和交互连续性，见 [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)。
  - **诉求：** 可配置紧凑展示，同时保留排障所需信息。

- **围绕回答内容继续追问**
  - 用户希望引用选中文本并带入下一轮上下文，交互方式类似 Perplexity，见 [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)。
  - **诉求：** 提升长回答阅读、研究和多轮分析效率。

- **Windows 本地文件处理**
  - GBK/CP936 文件因 UTF-8 解码策略被静默丢字节，相关修复见 [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)。
  - **痛点：** 用户缺少错误提示，难以判断内容为何不完整。

- **单 Agent 自托管管理**
  - 默认 Agent 在控制台不可编辑，但后端 PUT API 实际允许，见 [#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)。
  - **痛点：** 前端权限或状态限制与后端能力不一致，造成“功能不存在”的误解。

### 不满意点

- Memory 出现**写入成功但索引不可读**，见 [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)。
- 自定义 Provider 的工具调用出现**空参数**，见 [#8603](https://github.com/agentscope-ai/QwenPaw/issues/8603)。
- 官方插件在两个安装入口同时失败，见 [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)。
- 跨智能体协作存在**身份混淆**，见 [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420)。

### 正面信号

- 用户对跨智能体协作的反馈不是“功能不存在”，而是希望进一步改善引导、通信触发和连贯性，说明核心方向已获得真实使用反馈。
- 多项高频需求已有对应 PR，包括引用追问、紧凑工具调用、默认 Agent 编辑和模型删除，表明社区反馈正快速进入实现阶段。

---

## 8. 待处理积压

### 8.1 长期未关闭且持续活跃的重要 Issue

- **跨智能体协作与身份混淆**
  - [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420)
  - 创建于 **2026-03-27**，今日更新时已关闭。虽然问题已关闭，但该反馈暴露的产品方向仍值得在后续版本中验证。

- **IM 工具调用格式配置**
  - [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)
  - 创建于 **2026-08-31**，至今仍开放，已有 PR [#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610)，需要尽快完成评审和合并。

- **回答引用后追问**
  - [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)
  - 创建于 **2026-06-11**，已有 PR [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)，建议同步更新 Issue 状态，避免需求长期悬空。

### 8.2 等待评审时间较长的 PR

- **Windows GBK/CP936 兼容修复**
  - [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)
  - 创建于 **2026-10-14**，规模 XXL。
  - **风险：** 中文 Windows 是核心用户场景，长期停留于待评审会持续积累兼容性债务。

- **Ollama 上下文窗口识别**
  - [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)
  - 创建于 **2026-10-14**，规模 XL。
  - **风险：** 本地模型上下文配置错误可能直接影响长任务稳定性。

- **运行时媒体能力解析**
  - [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100)
  - 创建于 **2026-10-03**，规模 L。
  - **风险：** 多模态支持涉及模型发现、配置和运行链路，需避免长期停留在评审队列。

- **Reranker 模型中心**
  - [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472)
  - 创建于 **2026-10-28**，规模 XXL。
  - **风险：** 功能价值高，但涉及配置、持久化和测试验证，应明确拆分和验收计划。

- **动态 MCP 会话级持久化**
  - [#373](https://github.com/agentscope-ai/QwenPaw/pull/373)
  - 创建于 **2026-03-02**，是今日列表中最早期的 PR。
  - **风险：** MCP 动态工具跨轮次持久化直接影响工具型智能体能力，长期未决会增加后续重构成本。

- **会话切换状态保留**
  - [#8274](https://github.com/agentscope-ai/QwenPaw/pull/8274)
  - 创建于 **2026-10-16**，规模 S。
  - **风险：** 改动不大但涉及异步消息状态，适合优先完成评审和回归测试。

### 8.3 维护者建议

1. **优先处理无明确 Fix PR 的高严重度问题**：`#8603`、`#8517`、`#8585`、`#8580`。
2. **为长期开放 Issue 补充维护者结论**：特别是 `#7436`、`#5110`，避免已有 PR 但 Issue 长期开放。
3. **拆分大型 PR 的评审范围**：优先让 Windows 编码、Ollama 上下文、默认 Agent 编辑等独立修复尽快落地。
4. **确认已关闭 PR 的实际合并状态**：数据中的“CLOSED”不等同于一定已合并，建议结合 commit 或 merged 状态核验。
5. **关注下一次版本发布节奏**：今日没有新版本，但已有大量已关闭修复 PR，若未及时打包发布，用户侧改善可能滞后于代码侧进展。

---

## 结论

QwenPaw 今日处于**高活跃开发与缺陷收敛阶段**：23 条 PR 更新、16 条 Issue 更新，说明反馈和修复链路运转较快。控制台交互、Memory 检索和多模态支持继续推进，Matrix、定时任务、模型配置等已有明确修复。

当前主要风险不在功能数量，而在**跨平台兼容性、第三方 Provider 适配、插件安装可靠性和核心内存生命周期管理**。项目健康度评估为**中高**：开发活跃度和社区响应较好，但仍有多个高优先级缺陷尚缺明确修复，以及多笔大型 PR 等待评审。下一关键节点是完成上述高风险修复、收敛长期积压，并形成可验证的版本发布。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-11-07**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issue**（23 条新开或活跃、27 条关闭）和 **50 条 PR**（36 条待合并、14 条已合并或关闭），整体保持较高吞吐，且没有新版本发布。  
今日工作重点集中在 **统一 Gateway 后续收敛、跨网关与跨机器群聊、会话状态稳定性、更新器与配置迁移，以及 Desktop/WebApp 兼容性**。  
关闭的 Issue 明显多于仍处于活跃状态的 Issue，说明多条 Yuanbao、群聊和升级链路问题正在被消化；但与此同时，仍有 **36 条 PR 待合并**，核心改动较集中，合并节奏和回归验证值得关注。  
综合来看，项目处于 **功能快速扩张与稳定性收敛并行** 的阶段：方向活跃，但 Gateway、会话队列、消息投递和升级机制仍存在较高复杂度带来的系统性风险。  
今日无正式 Release，面向生产环境的升级应避免把尚未发布的主分支改动视为稳定能力。

---

## 2. 版本发布

过去 24 小时 **未发布新版本**，因此暂无正式版本更新说明、破坏性变更或官方迁移指南。

不过，主分支已出现若干可能影响未来版本的重要变化：

- **会话搜索的 CJK FTS5 分词器将从 core 中移除**：[#150388](https://github.com/NousResearch/hermes-agent/pull/150388)。  
  这是带破坏性标记的内部重构。手工创建并使用该 tokenizer 的数据库在打开时可能删除相关索引，需要提前备份并评估依赖。
- **旧模块名兼容机制正在建设**：[#150496](https://github.com/NousResearch/hermes-agent/pull/150496)。  
  当前模块尚未迁移，因此短期无用户可见变化；未来模块移动到 `hermes_agent` 包时，可降低外部集成断裂风险。
- **升级流程正在强化 stable 通道测试和 gateway 启动文件重写**：  
  [#150482](https://github.com/NousResearch/hermes-agent/pull/150482)、[#150460](https://github.com/NousResearch/hermes-agent/pull/150460)。  
  建议关注正式发布说明中的升级回滚、systemd 环境和多 profile 行为变化。

---

## 3. 项目进展

### 3.1 已关闭或合并的重要 PR

#### Gateway / 群聊会话状态修复

- [#150485](https://github.com/NousResearch/hermes-agent/pull/150485)  
  修复群聊中的机器人因被放弃或中断的 turn 长期卡在队列头部，进而出现“Stop 无法结束、机器人持续沉默”的问题。  
  该 PR 覆盖了此前报告的两个核心问题：
  - [#144729](https://github.com/NousResearch/hermes-agent/issues/144729)：审批租约丢失后 canonical group 卡在 stopping。
  - [#146567](https://github.com/NousResearch/hermes-agent/issues/146567)：room task 被 deferred 后，后续消息持续触发 `permission_denied`。

- [#150492](https://github.com/NousResearch/hermes-agent/pull/150492)  
  修复 self-repo guard 推荐一个实际上不会自动清理的 clone 目录，将建议路径改为已有的 `<home>/cache/scratch/<task>`。  
  对应问题：[#150491](https://github.com/NousResearch/hermes-agent/issues/150491)。

- [#150460](https://github.com/NousResearch/hermes-agent/pull/150460)  
  修复 `hermes update` 使用旧 service file 启动 Gateway、随后才由新版本重写配置的问题。现在更新流程会先重写各 profile 的启动文件，再启动 Gateway。  
  对应问题：[#150459](https://github.com/NousResearch/hermes-agent/issues/150459)。

- [#150484](https://github.com/NousResearch/hermes-agent/pull/150484)  
  调整凭证优先级，使管理员固定配置的 platform credentials 优先于用户配置中的陈旧或空值，减少 Yuanbao 插件化后升级环境中的凭证回退问题。

#### 测试与质量保障

- [#150402](https://github.com/NousResearch/hermes-agent/issues/150402) 已关闭  
  e2e upgrade handoff 测试不再因无法结束的 drain 等待完整任务超时，提升了升级回归测试的反馈速度。
- Yuanbao 模块拆分工作 [#79910](https://github.com/NousResearch/hermes-agent/issues/79910) 已关闭。  
  该工作针对约 5,298 行的超大型 `yuanbao.py`，推动平台适配器从单体文件向可维护模块拆分。
- Yuanbao 工具和协议模块测试覆盖补强：
  - [#36607](https://github.com/NousResearch/hermes-agent/issues/36607)
  - [#36352](https://github.com/NousResearch/hermes-agent/issues/36352)
  - [#36351](https://github.com/NousResearch/hermes-agent/issues/36351)

这些关闭项主要提升了 Yuanbao 代码结构、测试可见性和升级测试效率，属于重要的工程治理进展。

### 3.2 待合并的重要功能与架构 PR

- [#150283](https://github.com/NousResearch/hermes-agent/pull/150283)  
  Desktop 内置浏览器支持从 Hermes Vault、Bitwarden、1Password 填充保存的登录信息，并尝试复用真实浏览器 profile。  
  这直接改善了 Desktop Browser 的登录体验和自动化可用性。

- [#149702](https://github.com/NousResearch/hermes-agent/pull/149702)  
  支持创建不依赖 Desktop 持续在线的跨机器群聊。Gateway 跨机器支持已经进入主分支，Desktop 正补齐创建和配置入口。

- [#150498](https://github.com/NousResearch/hermes-agent/pull/150498)  
  通过终端 OSC 7501 Program Status Protocol 上报 `idle`、`working`、`blocked`、`done` 等状态，使终端和 agent dashboard 能原生显示 Hermes 工作状态。

- [#130688](https://github.com/NousResearch/hermes-agent/pull/130688)  
  WAL 捕获阶段不再意外重建已经被移除的 profile home，降低 retired profile 被错误恢复或污染的风险。

- [#24304](https://github.com/NousResearch/hermes-agent/pull/24304)  
  工具调用预览改为 diff-aware 截断，在有限字符预算下展示共同前缀后的差异尾部，提升复杂命令的可读性。

- 插件目录扩展：
  - Windows 证书：[#150503](https://github.com/NousResearch/hermes-agent/pull/150503)
  - Windows 磁盘：[#150501](https://github.com/NousResearch/hermes-agent/pull/150501)
  - Windows 防火墙：[#150500](https://github.com/NousResearch/hermes-agent/pull/150500)
  - Canonry AEO：[#150493](https://github.com/NousResearch/hermes-agent/pull/150493)
  - Thoth：[#150497](https://github.com/NousResearch/hermes-agent/pull/150497)
  - BuildPilot：[#150504](https://github.com/NousResearch/hermes-agent/pull/150504)
  - Creature Workshop：[#149855](https://github.com/NousResearch/hermes-agent/pull/149855)

插件目录继续快速扩张，但新增插件数量显著高于核心稳定性修复数量。目录生态活跃的同时，需要关注插件版本固定、供应链验证及权限边界。

### 3.3 整体推进程度

今日项目在以下方向有实质推进：

1. **会话和群聊队列可靠性提升**：关闭了多机器人“卡死/沉默”的关键问题。
2. **更新器正确性增强**：修复升级后使用旧服务环境启动的问题，并补充 stable 通道升级测试。
3. **Desktop 能力向独立运行和原生集成扩展**：跨机器群聊、浏览器登录、终端状态协议均进入开发中。
4. **平台生态扩张**：Windows 系统工具和多种项目管理工作流插件大量进入目录。

整体可评价为：**核心可靠性在逐项收敛，Desktop 和插件生态继续扩张，但跨模块复杂度增长较快。**

---

## 4. 社区热点

### 4.1 Unified Gateway 合并后问题汇总

[#143547](https://github.com/NousResearch/hermes-agent/issues/143547)  
评论 **50**，👍 **1**

这是今日最活跃议题。统一 Gateway 将 CLI、TUI、Desktop、API、编辑器、消息机器人、Cron、Kanban 和 Group Chat 的会话统一交给一个进程后，暴露出大量跨组件问题，涉及：

- Gateway、Cron、Plugins
- Telegram、Discord
- Auth、Config、Sessions、Profiles、Compression
- Desktop、TUI Gateway、Connection

**背后诉求：** 用户需要从“架构迁移完成”进一步获得可恢复、可观测、可兼容的稳定运行状态。该 Issue 已从单点 Bug 演变为统一 Gateway 的集成测试和缺陷跟踪中心。其高评论量说明架构方向获得关注，但迁移后的尾部问题数量也超出预期。

### 4.2 跨 Gateway Bot 协作

[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)  
评论 **40**，👍 **4**

目标是让不同机器、甚至不同所有者的个人 Bot 协作，同时保留各自的模型、工具、记忆和凭证控制权。

**背后诉求：**

- 从单机单 Bot 扩展到跨机器协作；
- 保持个人 Agent 的隐私和所有权边界；
- 为未来跨所有者协作建立基础协议。

这是项目最具路线图意义的需求之一。相关 Desktop 跨机器群聊 PR [#149702](https://github.com/NousResearch/hermes-agent/pull/149702) 已出现，说明讨论正在向实现转化。

### 4.3 多 Profile 共享 MCP 工具恢复异常

[#141223](https://github.com/NousResearch/hermes-agent/issues/141223)  
评论 **7**

多个 profile 使用相同 MCP server 配置时，共享连接会被复用；连接 park/revive 后，仅原始 owner profile 能重新获得工具，其他 profile 丢失共享 MCP 工具。

**背后诉求：** MCP 连接生命周期不能与首次创建连接的 profile 错误绑定。对多 profile、多租户式个人 Agent 部署而言，这是核心隔离与可用性问题。

### 4.4 MCP 表单审批 fail-closed

[#58778](https://github.com/NousResearch/hermes-agent/issues/58778)  
评论 **6**

Telegram 对 MCP form elicitation 点击接受后，返回 `action="accept"` 但 `content={}`；如果 schema 包含必填字段，服务端收到的响应无效并拒绝执行。

**背后诉求：** 人工审批必须保留用户在表单中填写的数据，且 Telegram 审批链路应满足 MCP schema，而非仅表示“同意”。这是消息平台与 MCP 协议兼容性上的关键缺口。

### 4.5 Gateway 回复增加模型与思考级别标识

[#6232](https://github.com/NousResearch/hermes-agent/issues/6232)  
评论 **4**，👍 **3**

建议在 Telegram 等 Gateway 回复中以可选响应头显示当前模型和 thinking level。

**背后诉求：** 用户希望在多模型、动态路由和不同 reasoning level 下，能够直接判断回复来源与推理配置，提高透明度、调试效率及成本归因能力。

---

## 5. Bug 与稳定性

### 严重

#### 1. Clean EOF 被误判为 token 截断，并可能形成会话重放死循环

[#144116](https://github.com/NousResearch/hermes-agent/issues/144116)

上游流正常结束但没有提供 `finish_reason` 时，Hermes 可能误判为输出 token 截断；残留 stub message 又可能污染 session，使后续 replay 持续失败。

**影响：** 表现为会话不连贯、反复重启同一计划、恢复失败。  
**已有 fix PR：** 数据中未显示直接对应的开放 PR。

#### 2. GPT-6.1 Sol 在 Hermes 中会话连贯性下降

[#139418](https://github.com/NousResearch/hermes-agent/issues/139418)

用户报告 GPT-6.1 Sol 反复执行相似 reasoning/plan、工作变慢并逐渐偏离上下文；同一问题在 Codex 中表现正常。

**影响：** 可能属于 provider adapter、流式处理或 session replay 的兼容性问题。  
**已有 fix PR：** 未见明确对应修复。

#### 3. Bot Mode 群聊成员永久沉默

[#146567](https://github.com/NousResearch/hermes-agent/issues/146567)

room task 被标记为 deferred 后，session admission row 仍以 queued 状态留在 FIFO 头部，后续每条消息都可能触发 `permission_denied`，导致机器人永久无响应。

**已有 fix PR：** **是**，[#150485](https://github.com/NousResearch/hermes-agent/pull/150485)，当前 PR 状态为 CLOSED。

### 高

#### 4. 多 Profile 共享 MCP 在连接恢复后丢失工具

[#141223](https://github.com/NousResearch/hermes-agent/issues/141223)

共享 MCP server 的连接 park/revive 后，只有 owner profile 恢复工具，其他 profile 继续缺工具。

**已有 fix PR：** 未见明确对应 PR。

#### 5. MCP Telegram 表单审批返回无效内容

[#58778](https://github.com/NousResearch/hermes-agent/issues/58778)

表单审批结果为空，无法满足含必填字段的 schema，服务端 fail-closed。

**已有 fix PR：** 未见明确对应 PR。

#### 6. QQBot、Feishu、Yuanbao 分段回复存在重发首段或掩盖中间失败

[#126451](https://github.com/NousResearch/hermes-agent/issues/126451)

多个平台在 split-resume 场景下可能：

- 重发第一个 chunk；
- 中间 chunk 发送失败但最终显示成功；
- 用户收到的内容不完整却被系统视为投递成功。

**已有 fix PR：** 数据中未显示直接对应修复。

#### 7. 群聊消息时间戳被替换，并产生逐条 WARNING

[#118105](https://github.com/NousResearch/hermes-agent/issues/118105)

Adapter 写入 ISO 时间戳，但持久化路径无法解析，导致每条 observed group message 使用替代时间戳，并持续输出 warning。

**已有 fix PR：** 未见明确对应 PR。

#### 8. Desktop 多连接下 profile 会话串线

[#146912](https://github.com/NousResearch/hermes-agent/issues/146912)

两个 Gateway connection 都存在 `default` profile 时，返回具体 profile 后，Desktop 仍可能保留另一连接的 sessions，profile scope 没有正确应用 `connection_id`。

**已有 fix PR：** 未见明确对应 PR。

### 中

#### 9. `hermes update` 无法解析 stable source channel

[#141301](https://github.com/NousResearch/hermes-agent/issues/141301)

依赖用户 Git proxy 或自定义 SSL backend 的 stable checkout 更新失败。  
**已有相关 PR：** [#150482](https://github.com/NousResearch/hermes-agent/pull/150482) 补充升级测试，但并非完全等同于该问题的完整修复。

#### 10. Telegram `/restart` 无反馈且短暂不可用

[#65057](https://github.com/NousResearch/hermes-agent/issues/65057)

命令执行时 gateway 开始关闭和重启，但用户收不到确认消息，polling teardown 期间表现为无响应。  
**已有 fix PR：** 未见明确对应 PR。

#### 11. Desktop/WebApp 在 iPhone Safari 无法渲染

[#148538](https://github.com/NousResearch/hermes-agent/issues/148538)

`/capabilities` 和 `/workspace` 等页面因缺少 `requestIdleCallback` 而报错，核心页面无法展示。  
**已有 fix PR：** 未见明确对应 PR。

#### 12. 配置文件 stamp-independent migration 未实际执行

[#150362](https://github.com/NousResearch/hermes-agent/issues/150362)

迁移定义声称步骤 46、50 每次都会执行，但当前带 stamp 的配置可能完全跳过，造成未发布运行时与正式版本之间的配置漂移。  
**已有 fix PR：** 未见明确对应 PR。

### 低

- [#150502](https://github.com/NousResearch/hermes-agent/issues/150502)：WebApp 在 125% UI 缩放下，上下文用量面板因固定像素高度被裁切，无法完整滚动查看。
- [#150491](https://github.com/NousResearch/hermes-agent/issues/150491)：self-repo guard 推荐不会被清理的 scratch 路径。  
  **已有 fix PR：** [#150492](https://github.com/NousResearch/hermes-agent/pull/150492)，已关闭。
- [#150459](https://github.com/NousResearch/hermes-agent/issues/150459)：升级后仍使用旧 service file 启动 Gateway。  
  **已有 fix PR：** [#150460](https://github.com/NousResearch/hermes-agent/pull/150460)，已关闭。

### 稳定性判断

今日暴露的问题高度集中在 **Gateway 会话状态、消息投递、MCP 生命周期、平台适配器和升级流程**。其中群聊卡死已有关闭的修复 PR，但流式 EOF、GPT-6.1 Sol、MCP 多 profile 恢复、跨平台分段投递仍缺少明确修复。  
因此项目当前更应视为 **高活跃但中高回归风险**，尤其是统一 Gateway、多 profile、MCP 和多消息平台组合场景。

---

## 6. 功能请求与路线图信号

### 6.1 跨 Gateway / 跨机器群聊

- 需求 Issue：[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
- 实现 PR：[#149702](https://github.com/NousResearch/hermes-agent/pull/149702)

**判断：较可能进入下一版本。**  
Gateway 支撑已经进入主分支，Desktop PR 正在补齐用户入口，功能范围也较明确。若测试和权限模型稳定，跨机器群聊是下一版本的重要看点。

### 6.2 Gateway 回复显示模型与 thinking level

- 需求 Issue：[#6232](https://github.com/NousResearch/hermes-agent/issues/6232)

**判断：中等概率进入下一版本。**  
需求清晰、实现成本相对可控，且与模型路由、可观测性和成本控制趋势一致。关键决策点是展示形式及是否默认开启。

### 6.3 Desktop 内置浏览器复用真实浏览器登录态

- PR：[#150283](https://github.com/NousResearch/hermes-agent/pull/150283)

**判断：较可能进入下一版本。**  
用户痛点明确，PR 已进入 `[ci-reviewed]`，但涉及浏览器 profile、凭证保险库和跨平台兼容性，合并前仍需安全审查。

### 6.4 NixOS 支持 per-profile `config.yaml`

- 需求 Issue：[#149338](https://github.com/NousResearch/hermes-agent/issues/149338)

**判断：可能作为小版本或专项功能合入。**  
当前 NixOS module 只管理主 `HERMES_HOME`，无法自然表达 Kanban role profile 的独立配置。新增 profiles option 能补齐 declarative deployment 场景，但需明确配置优先级、路径和迁移策略。

### 6.5 终端原生 Agent 状态显示

- PR：[#150498](https://github.com/NousResearch/hermes-agent/pull/150498)

**判断：中等偏高概率进入下一版本。**  
通过 OSC 7501 接入成熟终端协议，不依赖 Hermes 自有 UI，集成面广且改动相对独立。

### 6.6 插件目录扩展

今日新增多个目录条目，包括 Windows 证书、磁盘、防火墙，以及 Canonry、Thoth、BuildPilot、Creature Workshop 等。  
这些 PR 表明生态目录仍在快速扩张，但“进入目录”不等于功能已进入核心发布版：

- [#150503](https://github.com/NousResearch/hermes-agent/pull/150503)
- [#150501](https://github.com/NousResearch/hermes-agent/pull/150501)
- [#150500](https://github.com/NousResearch/hermes-agent/pull/150500)
- [#150493](https://github.com/NousResearch/hermes-agent/pull/150493)
- [#150497](https://github.com/NousResearch/hermes-agent/pull/150497)
- [#150504](https://github.com/NousResearch/hermes-agent/pull/150504)
- [#149855](https://github.com/NousResearch/hermes-agent/pull/149855)

**判断：大概率分批进入目录更新，但需关注版本 pin、权限和供应链治理。**

---

## 7. 用户反馈摘要

### 真实使用痛点

1. **统一 Gateway 后出现跨模块连锁问题**  
   用户反馈的问题不再局限于单一平台，而是同时涉及 Desktop、Telegram、Discord、Cron、Profiles 和 Sessions。  
   这说明当前主要矛盾已从“功能是否能用”转向“所有入口共享 Gateway 后是否稳定一致”。  
   参考：[#143547](https://github.com/NousResearch/hermes-agent/issues/143547)。

2. **群聊机器人出现“看似仍在线、实际永远不响应”**  
   审批未处理、Gateway 丢失 turn 或 room task deferred 后，机器人可能永久沉默，用户只能手动停止和重启。  
   参考：[#146567](https://github.com/NousResearch/hermes-agent/issues/146567)、[#144729](https://github.com/NousResearch/hermes-agent/issues/144729)。

3. **消息投递存在“假成功”风险**  
   Yuanbao 长消息、QQBot、Feishu 的分段回复可能丢失中间段，却仍被报告为成功。对用户而言，这比直接报错更危险，因为会造成信息不完整但无明显提示。  
   参考：[#107227](https://github.com/NousResearch/hermes-agent/issues/107227)、[#126451](https://github.com/NousResearch/hermes-agent/issues/126451)。

4. **Yuanbao 断连期间 Cron 投递不稳定**  
   `deliver=origin` 依赖 live adapter，WebSocket 短时断连即可导致任务失败。  
   参考：[#58184](https://github.com/NousResearch/hermes-agent/issues/58184)。

5. **多 profile + MCP 组合场景不够可靠**  
   用户希望在多个个人 profile 之间共享工具连接，同时保持数据隔离；当前连接恢复后工具会丢失或只恢复到 owner。  
   参考：[#141223](https://github.com/NousResearch/hermes-agent/issues/141223)。

6. **升级在非标准网络和企业配置下失败**  
   使用 Git proxy、自定义 SSL、managed config 或 systemd 多 profile 的用户，比普通安装更容易遇到升级失败或旧环境残留。  
   参考：[#141301](https://github.com/NousResearch/hermes-agent/issues/141301)、[#150459](https://github.com/NousResearch/hermes-agent/issues/150459)。

7. **移动端 WebApp 兼容性不足**  
   iPhone Safari 因缺少浏览器 API 直接白屏，说明当前 WebApp 兼容性测试更偏桌面浏览器。  
   参考：[#148538](https://github.com/NousResearch/hermes-agent/issues/148538)。

### 满意度与积极信号

- 用户持续提交复现条件、日志和根因分析，说明项目拥有较强的技术型社区参与度。
- 群聊稳定性、MCP 表单、Desktop 登录体验等问题均获得具体复现和设计反馈，而非只有泛化反馈。
- Cross-gateway 协作获得 **40 条评论、4 个赞**，表明“保留个人控制权的 Agent 协作”是有吸引力的长期方向。
- Yuanbao 大文件拆分与测试覆盖率补强已关闭，表明维护者愿意接受结构治理和长期维护成本改进。

### 主要不满意点

- **故障可恢复性不足**：机器人卡死、升级后环境错误、配置迁移跳过等问题会直接影响生产可用性。
- **状态与投递反馈不可靠**：假成功、永久沉默、缺失反馈比明确报错更容易破坏信任。
- **复杂部署矩阵覆盖不足**：多 profile、多连接、MCP、多消息平台和自定义网络配置的组合场景仍是薄弱区。

---

## 8. 待处理积压

### 8.1 高优先级长期关注项

1. **Unified Gateway 集成债务**
   - [#143547](https://github.com/NousResearch/hermes-agent/issues/143547)
   - 创建于 2026-10-23，已积累 **50 条评论**，覆盖大量模块。
   - 建议按 Gateway admission、session state、message delivery、profile isolation 建立独立子任务和回归矩阵。

2. **跨 Gateway Bot 协作**
   - [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
   - 创建于 2026-08-29，已积累 **40 条评论**。
   - 应明确协议、身份认证、授权、消息顺序、离线行为和跨所有者隐私边界。

3. **MCP 审批与共享连接生命周期**
   - [#58778](https://github.com/NousResearch/hermes-agent/issues/58778)
   - [#141223](https://github.com/NousResearch/hermes-agent/issues/141223)
   - 两项都直接涉及工具能否被可靠调用，且分别持续数月，应优先形成专项修复和跨 profile 集成测试。

4. **GPT-6.1 Sol 会话退化**
   - [#139418](https://github.com/NousResearch/hermes-agent/issues/139418)
   - 属于 provider 级兼容问题，可能影响大量使用 Nous 模型的会话。建议补充最小复现、原始流事件记录和 replay 差分。

### 8.2 仍需处理的重要功能 Issue

- [#6232](https://github.com/NousResearch/hermes-agent/issues/6232)：模型与 thinking level 可视化。
- [#65057](https://github.com/NousResearch/hermes-agent/issues/65057)：Telegram `/restart` 用户反馈。
- [#149338](https://github.com/NousResearch/hermes-agent/issues/149338)：NixOS per-profile 配置。
- [#126451](https://github.com/NousResearch/hermes-agent/issues/126451)：QQBot、Feishu、Yuanbao 分段回复可靠性。
- [#118105](https://github.com/NousResearch/hermes-agent/issues/118105)：群聊消息时间戳持久化。
- [#148538](https://github.com/NousResearch/hermes-agent/issues/148538)：iPhone Safari WebApp 渲染。
- [#150362](https://github.com/NousResearch/hermes-agent/issues/150362)：stamp-independent 配置迁移。
- [#146912](https://github.com/NousResearch/hermes-agent/issues/146912)：Desktop 多连接 profile/session 隔离。

### 8.3 PR 积压提醒

过去 24 小时仍有 **36 条 PR 待合并**，其中包括：

- 跨机器群聊：[#149702](https://github.com/NousResearch/hermes-agent/pull/149702)
- Desktop 浏览器登录：[#150283](https://github.com/NousResearch/hermes-agent/pull/150283)
- CLI 终端状态协议：[#150498](https://github.com/NousResearch/hermes-agent/pull/150498)
- WAL/profile home 保护：[#130688](https://github.com/NousResearch/hermes-agent/pull/130688)
- CJK 搜索迁移：[#150388](https://github.com/NousResearch/hermes-agent/pull/150388)
- 大量插件目录 PR：[#150500](https://github.com/NousResearch/hermes-agent/pull/150500)–[#150505](https://github.com/NousResearch/hermes-agent/pull/150505)

建议维护者避免插件目录更新挤占核心可靠性 PR 的审查资源，并为每个发布版本设置统一的 Gateway、会话、升级和 MCP 回归门槛。

---

## 今日结论

Hermes Agent 今日呈现出明显的“**高活跃度、强需求、稳定性欠账**”特征。统一 Gateway 和跨机器协作正在把项目从个人单机 Agent 推向多入口、多设备、多 Bot 的协作平台；但会话状态、消息投递、MCP 恢复和升级流程的复杂组合，仍是主要生产风险。

今日已有群聊卡死、升级启动文件和 Yuanbao 工程治理方面的实质进展，且没有新版本发布。下一阶段应优先完成以下闭环：

1. 合并并验证群聊队列修复 [#150485](https://github.com/NousResearch/hermes-agent/pull/150485)；
2. 为 Clean EOF、GPT-6.1 Sol、MCP 多 profile 恢复建立专项回归；
3. 统一各消息平台的分段投递状态机，避免“假成功”；
4. 补齐 stable/custom Git/systemd/managed config 升级矩阵；
5. 审慎推进跨 Gateway、跨机器群聊和 Desktop 登录等高影响 PR。

**项目健康度判断：中高活跃度、中等稳定性、工程方向清晰，但生产可靠性仍需加速收敛。**

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-07**

> 数据范围：过去 24 小时 Issues 与 PR 更新。  
> 活跃度判断：**Issues 3 条全部新开，PR 33 条更新，其中 31 条已合并/关闭、2 条待合并**。整体处于高强度修复与收敛阶段，但新问题集中暴露了 TinyAgents、Telegram 会话可靠性与安全策略边界问题。

---

## 1. 今日速览

- 今日共有 **3 条新 Issue**，均为 P2，且均未关闭；问题分别涉及 TinyAgents 工具失败后的恢复、Telegram 会话历史丢失以及外发回复失败无重试无日志。
- PR 侧共有 **33 条更新**，其中 **31 条已合并或关闭、2 条仍待处理**，主要集中在 Rust Core、TinySecurity、安全策略、凭据管理、模块回调校验和测试稳定性。
- 今日没有版本发布，当前主线仍处于快速合并修复阶段，尚未形成可供用户升级的正式版本。
- 项目开发活跃度较高，安全与执行链路得到明显加强，但 Issues 暴露的会话容错和渠道可靠性问题说明“失败后继续工作”的产品体验仍需补齐。
- 综合健康度判断：**开发吞吐较高、缺陷收敛能力强；短期产品稳定性为中等，仍需关注 Telegram 和 TinyAgents 的端到端行为。**

---

## 3. 项目进展

### 3.1 安全策略与权限边界

#### 1）按调用方配置执行 Prompt 安全检查

- PR [#8582](https://github.com/tinyhumansai/openhuman/pull/8582)：修复在启动时安全模式为 `Normal` 的环境下，所有 Prompt 都因读取旧启动快照而被错误拦截的问题。
- `run_single`、Agent Chat、总线回合及固定入站项目现在使用调用方当前配置进行检查；安全模块关闭时也能正确生效。
- **意义**：减少安全策略误拦截，使配置变更能够在实际运行链路中生效。

#### 2）固定批次复用一次安全配置加载

- PR [#8587](https://github.com/tinyhumansai/openhuman/pull/8587)：固定入站批次改为每批加载一次检查配置，并将筛查消耗计入交付预算；无 Core 接管时，`run_single` 回退使用会话配置。
- **意义**：降低重复配置加载成本，同时将筛查纳入统一的资源和超时预算。

#### 3）拒绝结果在 Cron 中视为最终结果

- PR [#8583](https://github.com/tinyhumansai/openhuman/pull/8583)：TinySecurity 明确拒绝的 Shell 任务不再沿退避曲线持续重试；安全模块不可用或行动预算耗尽仍按可恢复故障处理。
- **意义**：避免确定性的策略拒绝被反复执行，减少无效资源消耗。

#### 4）Hook 命令统一进入安全检查

- PR [#8573](https://github.com/tinyhumansai/openhuman/pull/8573)：用户及工作区中的命令 Hook 统一经过 TinySecurity 检查，不再直接运行项目 `.openhuman/hooks.json` 内的命令 Hook；Prompt Hook 不受影响。
- **注意**：这是明确的行为变化，部分既有 Hook 可能被禁用，需要重新评估权限配置。
- **意义**：统一命令执行入口，降低绕过安全审查的风险。

#### 5）Autonomy 设置保存前校验

- PR [#8575](https://github.com/tinyhumansai/openhuman/pull/8575)：保存自治设置时先验证 TinySecurity 是否可接受相关规则，例如禁止相对路径、允许命令携带参数等不再被直接保存。
- **意义**：避免“保存成功但运行时全部 fail closed”的配置不一致。

#### 6）Agent 会话使用自身策略构建

- PR [#8576](https://github.com/tinyhumansai/openhuman/pull/8576)：修复每次 Agent Turn 都记录“自治策略已禁用”的问题；会话构建器现在使用会话自身的策略，而不是默认配置生成的临时策略。
- **意义**：修复策略状态显示与真实运行行为不一致的问题。

### 3.2 模块隔离与回调安全

#### 7）Host Callback 仅响应所属模块

- PR [#8578](https://github.com/tinyhumansai/openhuman/pull/8578)：修复模块运行时共享连接上的 Host Callback 可被任意调用方调用的问题。
- PR [#8579](https://github.com/tinyhumansai/openhuman/pull/8579)：进一步限制渠道运行时只接受 `TinyChannels` 发出的 Host Callback。
- **意义**：收紧模块间调用边界，减少跨模块越权或错误响应风险。

#### 8）目录配置增加受保护路径校验

- PR [#8586](https://github.com/tinyhumansai/openhuman/pull/8586)：Agent 的 `files_dir`、`action_dir` 不允许指向凭据存储、系统关键目录、OpenHuman 自身数据目录或包含这些数据的目录，并覆盖符号链接解析结果。
- **意义**：防止 Agent 文件目录配置意外暴露或破坏敏感数据。

### 3.3 凭据、密钥与隐私

#### 9）修复 Keyring 首次登录审批弹窗

- PR [#8580](https://github.com/tinyhumansai/openhuman/pull/8580)：修复 `listPendingKeyringOperations` 错误读取已解包 RPC 结果，导致首次登录时 Keyring 审批弹窗不出现的问题。
- **意义**：恢复关键凭据操作的可见性和可操作性。

#### 10）Composio 执行结果脱敏

- PR [#8563](https://github.com/tinyhumansai/openhuman/pull/8563)：`composio.execute`、`tools.composio_execute` 及 Flow `tool_call` 节点返回的结果统一使用调用对应的 Composio Key 脱敏；无法脱敏的结果将被扣留。
- **意义**：扩大敏感凭据保护范围，避免工具执行结果泄露密钥。

#### 11）测试隔离 Keyring 凭据

- PR [#8585](https://github.com/tinyhumansai/openhuman/pull/8585)：登录测试结束后清理其保存的 Provider Key，避免污染后续重启用例。
- PR [#8577](https://github.com/tinyhumansai/openhuman/pull/8577)：Agent E2E Harness 增加对凭据存储 Keyring 弹窗的自动响应，解决测试在签入阶段等待 120 秒的问题。
- **意义**：提升测试可信度，减少偶发挂起和用例相互影响。

### 3.4 审批与策略测试

- PR [#8568](https://github.com/tinyhumansai/openhuman/pull/8568)：测试 Stub 开始模拟原生引擎的“始终允许”一次性导入行为，修复核心审批流测试无法通过的问题。
- PR [#8588](https://github.com/tinyhumansai/openhuman/pull/8588)：避免作用域测试线程在重载策略时写入进程级全局策略，防止测试污染和审批状态泄漏。
- PR [#8589](https://github.com/tinyhumansai/openhuman/pull/8589)：让 Composio 库测试在同一进程内运行时也能正确获得 TinySecurity 密钥作用域，满足发布门禁的单进程测试方式。
- **意义**：策略、审批和作用域行为得到更接近生产环境的测试覆盖。

### 3.5 其他产品与工程改进

- PR [#8581](https://github.com/tinyhumansai/openhuman/pull/8581)：启动检查改为识别 Core 实际返回的 `ServiceStatus.state`，恢复旧版后台进程检测界面。
- PR [#8584](https://github.com/tinyhumansai/openhuman/pull/8584)：移除已不再使用的 EX63 Runner 路由，Hosted CI Lane 改为每个 PR 都执行，并将 “CI Fast (hosted)” 设为决定性流程。
- **意义**：简化 CI 拓扑，提升所有 PR 的标准化验证覆盖率。

---

## 4. 社区热点

今日提供的 Issues 均含 **1 条评论**；PR 列表中显示的评论数均为 `undefined`。因此无法基于评论量或点赞数形成强排名，热度主要依据优先级、影响范围和新增时间判断。

### 4.1 Issue #8592：TinyAgents 工具失败后恢复预算为零

- 链接：[Issue #8592](https://github.com/tinyhumansai/openhuman/issues/8592)
- 优先级：P2
- 热度信号：当天新开，已有 1 条评论。
- 核心诉求：当 `file_write` 因策略被拒绝时，TinyAgents 不应立即终止整个 Turn，而应允许模型选择 Shell 或工作区内其他合法路径重试。
- 背景判断：当前 `failure_policy` 将策略类失败视为恢复预算为 0 的终止性错误。这会把“某一种工具不可用”错误扩大为“本轮任务完全失败”。
- 社区关注点：工具降级、策略拒绝与瞬时技术失败应采用不同恢复语义。

### 4.2 Issue #8591：Telegram 回合失败后会话历史丢失

- 链接：[Issue #8591](https://github.com/tinyhumansai/openhuman/issues/8591)
- 优先级：P2
- 热度信号：当天新开，已有 1 条评论。
- 核心诉求：一次渠道回合失败后，下一轮 Telegram 对话应保留此前上下文。
- 背景判断：失败路径可能错误清空或覆盖内存中的会话历史，造成后续追问无上下文。
- 社区关注点：渠道错误隔离、历史持久化以及失败回合的原子性。

### 4.3 Issue #8590：Telegram 外发失败既不重试也不记录

- 链接：[Issue #8590](https://github.com/tinyhumansai/openhuman/issues/8590)
- 优先级：P2
- 热度信号：当天新开，已有 1 条评论。
- 核心诉求：失败的 Telegram 回复应提供有限重试，并至少在用户可见位置留下错误记录。
- 背景判断：当前回复失败后会静默丢失，用户既收不到结果，也无法定位原因。
- 社区关注点：渠道投递可靠性、可观测性和错误恢复。

### 4.4 今日最值得关注的开放 PR

- PR [#8564](https://github.com/tinyhumansai/openhuman/pull/8564)：将工作流卡片保存后的 `saved_flow_id` 带入 Builder Hand-off，避免用户回复“保存它”时创建重复 Flow。
- 该 PR 是今日列表中唯一明确处于开放状态的业务功能修复，另一条待处理 PR 未在展示详情中出现。
- **意义**：直接改善聊天式工作流保存体验，可能优先进入下一批修复版本。

---

## 5. Bug 与稳定性

### P2：尚未关闭，且暂无明确对应 Fix PR

#### 1）TinyAgents 策略拒绝导致整轮提前终止

- Issue：[ #8592](https://github.com/tinyhumansai/openhuman/issues/8592)
- 影响：单次 `file_write` 被拒后无法使用其他合法工具或路径完成任务。
- 影响面：TinyAgents、文件写入、工具降级。
- Fix 状态：**未发现明确关联的开放 PR**。
- 风险判断：中高；会直接影响长任务完成率。

#### 2）Telegram 失败回合清空会话历史

- Issue：[ #8591](https://github.com/tinyhumansai/openhuman/issues/8591)
- 影响：后续追问缺少上下文，降低渠道连续对话可用性。
- 影响面：Telegram、内存会话状态、渠道失败处理。
- Fix 状态：**未发现明确关联的开放 PR**。
- 风险判断：中高；可能造成用户体验上的“失忆”。

#### 3）Telegram 外发失败无重试、无用户可见日志

- Issue：[ #8590](https://github.com/tinyhumansai/openhuman/issues/8590)
- 影响：回复静默丢失，无法排障或确认是否已发送。
- 影响面：Telegram 出站投递、可观测性。
- Fix 状态：**未发现明确关联的开放 PR**。
- 风险判断：中；数据不会直接损失，但可靠性与可信度受损。

### P3：今日已关闭或已有对应修复

#### 4）Prompt 安全检查读取旧配置，导致正常请求被持续挂起

- PR：[ #8582](https://github.com/tinyhumansai/openhuman/pull/8582)
- 状态：已关闭，按列表语义应已合并或完成处理。
- 影响面：Agent Chat、Bus、固定入站、单轮调用。

#### 5）Keyring 审批轮询结构解析错误，登录弹窗不显示

- PR：[ #8580](https://github.com/tinyhumansai/openhuman/pull/8580)
- 状态：已关闭。
- 影响面：首次登录、凭据授权。

#### 6）旧版后台服务无法被启动检查识别

- PR：[ #8581](https://github.com/tinyhumansai/openhuman/pull/8581)
- 状态：已关闭。
- 影响面：桌面端启动提示与状态检测。

#### 7）策略与审批测试污染、挂起或无法单进程执行

- PR：[#8568](https://github.com/tinyhumansai/openhuman/pull/8568)、[#8588](https://github.com/tinyhumansai/openhuman/pull/8588)、[#8589](https://github.com/tinyhumansai/openhuman/pull/8589)、[#8577](https://github.com/tinyhumansai/openhuman/pull/8577)
- 状态：均已关闭。
- 影响面：发布门禁、策略测试、Agent Harness。

#### 8）Cron 对确定性策略拒绝进行无意义重复重试

- PR：[ #8583](https://github.com/tinyhumansai/openhuman/pull/8583)
- 状态：已关闭。
- 影响面：计划任务、重试退避、资源消耗。

### 整体稳定性判断

- 今日已处理问题主要集中在**安全边界、凭据保护、配置一致性和测试隔离**，整体属于高价值修复。
- 新增的 3 条 P2 均集中在渠道和 Agent 容错层，说明底层安全机制增强后，端到端失败恢复仍需继续加固。
- 暂未看到与崩溃、进程退出、数据损坏或严重安全绕过直接相关的新报告。

---

## 6. 功能请求与路线图信号

### 6.1 工具失败后的策略化降级与恢复

- 来源：[Issue #8592](https://github.com/tinyhumansai/openhuman/issues/8592)
- 需求：区分“策略明确拒绝”和“工具暂时失败”，为前者保留受控的替代工具尝试能力。
- 路线图判断：**中等概率纳入下一版本**。该能力直接关系 TinyAgents 的任务完成率，但必须避免绕过策略，因此更可能以“允许切换工具，但不得绕过同一安全目标”的受限形式落地。

### 6.2 Telegram 会话历史可靠保存

- 来源：[Issue #8591](https://github.com/tinyhumansai/openhuman/issues/8591)
- 需求：失败 Turn 不应破坏已完成的历史；必要时可回滚到最后一致状态。
- 路线图判断：**中高概率纳入下一版本**。这是渠道可靠性的基础能力，且修复范围相对集中，可通过事务式提交或失败时恢复旧历史实现。

### 6.3 Telegram 外发重试与错误可见性

- 来源：[Issue #8590](https://github.com/tinyhumansai/openhuman/pull/8590)
- 需求：有限次数、指数退避的发送重试，以及用户可理解的失败提示和日志。
- 路线图判断：**中高概率纳入下一版本**。实现模式成熟，且与 #8591 可共享渠道失败处理框架。

### 6.4 聊天保存工作流时避免重复副本

- 来源：[PR #8564](https://github.com/tinyhumansai/openhuman/pull/8564)
- 需求：卡片保存后的确认消息应复用已保存的 Flow ID，而不是再次创建。
- 路线图判断：**高概率优先合并**。已有明确实现，改动范围小，能直接消除用户可见的数据重复。

### 6.5 Host Callback 与模块隔离

- 来源：[PR #8578](https://github.com/tinyhumansai/openhuman/pull/8578)、[PR #8579](https://github.com/tinyhumansai/openhuman/pull/8579)
- 路线图判断：相关修改已进入关闭状态，说明模块调用安全被视为主线优先事项，预计会随近期版本或后续安全版本发布。

### 6.6 CI 标准化覆盖

- 来源：[PR #8584](https://github.com/tinyhumansai/openhuman/pull/8584)
- 路线图判断：Hosted Lane 将成为每个 PR 的决定性检查，表明后续发布质量门禁更严格，但也会提高合并前等待时间。

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户在 **Windows 11 桌面版 OpenHuman 0.64.15** 中使用 **Telegram Channel**，连接本地 OpenAI-compatible Endpoint。
- 用户不仅依赖单轮问答，也使用连续追问，因此对上下文连续性高度敏感。
- 用户会通过聊天界面保存工作流，并通过“保存它”等自然语言确认操作推进任务。

### 主要痛点

1. **失败后缺少上下文**
   - Telegram Turn 失败后，下一轮不再引用此前对话。
   - 用户感知是机器人“突然失忆”，即使模型本身正常也会显得不可靠。
   - 来源：[Issue #8591](https://github.com/tinyhumansai/openhuman/issues/8591)

2. **消息静默丢失**
   - 外发失败后既无重试，也无明显错误记录。
   - 用户无法判断是模型未生成、Telegram 网络异常，还是应用侧发送失败。
   - 来源：[Issue #8590](https://github.com/tinyhumansai/openhuman/issues/8590)

3. **合法替代路径未被探索**
   - `file_write` 被拒后，模型无法改用其他合法工具或工作区路径。
   - 用户期望系统能够“换一种方式完成任务”，而不是立即结束。
   - 来源：[Issue #8592](https://github.com/tinyhumansai/openhuman/issues/8592)

4. **重复保存工作流**
   - 用户在卡片保存后继续说“保存它”，可能产生第二个 Flow 副本。
   - 这会增加整理和去重成本，尤其在连续对话中更明显。
   - 来源：[PR #8564](https://github.com/tinyhumansai/openhuman/pull/8564)

### 满意度信号

- 今日 3 个 Issue 均暂无点赞数据，不能据此判断社区总体满意度。
- 每条 Issue 均已有 1 条评论，表明问题已进入讨论或复现阶段。
- 从问题描述的完整程度看，报告者能提供版本、系统、渠道和 Provider，复现信息较规范，有助于维护者快速定位。

---

## 8. 待处理积压

### 8.1 今日新增、需尽快响应的 P2

1. [Issue #8592](https://github.com/tinyhumansai/openhuman/issues/8592)  
   - TinyAgents 策略拒绝后的恢复预算为零。  
   - 建议明确策略拒绝、技术失败、预算耗尽三类错误的语义，并关联对应修复任务。

2. [Issue #8591](https://github.com/tinyhumansai/openhuman/issues/8591)  
   - Telegram 失败 Turn 导致会话历史丢失。  
   - 建议检查历史提交是否具备原子性，并补充失败后追问的回归测试。

3. [Issue #8590](https://github.com/tinyhumansai/openhuman/issues/8590)  
   - Telegram 外发失败无重试、无可见日志。  
   - 建议将投递失败纳入渠道错误事件系统，并提供有限重试。

### 8.2 仍开放的 PR

- [PR #8564](https://github.com/tinyhumansai/openhuman/pull/8564)  
  - 工作流卡片保存后的确认消息可能重复创建 Flow。  
  - 属于明确、低范围的用户数据一致性修复，建议优先评审和合并。

### 8.3 数据有限下的积压判断

- 当前数据只覆盖过去 24 小时，不能确认是否存在更长期未响应的 Issue 或 PR。
- 今日没有历史 Issue 列表、最后响应时间或 PR 合并等待时长，因此不宜将“当天新开”直接认定为长期积压。
- 当前更值得关注的是：**3 条新 P2 尚无明确 Fix PR 关联**，存在从报告到修复的衔接风险。

---

## 今日结论

OpenHuman 今日的核心投入明显集中在**安全执行、凭据保护、模块隔离和测试可靠性**，大量 PR 已完成合并或关闭，显示主线修复吞吐较强。与此同时，最新 Issues 暴露出一个共同的产品缺口：系统在策略拒绝、渠道失败或投递失败时，缺少一致、可见且可恢复的失败处理机制。

下一阶段建议优先推进：

1. 合并 [PR #8564](https://github.com/tinyhumansai/openhuman/pull/8564)；
2. 为 [Issue #8590](https://github.com/tinyhumansai/openhuman/issues/8590)、[#8591](https://github.com/tinyhumansai/openhuman/issues/8591) 和 [#8592](https://github.com/tinyhumansai/openhuman/issues/8592) 分别建立 Fix PR；
3. 统一“策略拒绝、技术失败、超时、投递失败”的重试与历史提交策略；
4. 在下一次版本发布前重点回归 Telegram 连续对话、TinyAgents 工具降级及安全策略关闭/开启两种路径。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
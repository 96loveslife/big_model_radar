# OpenClaw 生态日报 2026-11-16

> Issues: 499 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-16 05:47 UTC

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

# OpenClaw 项目动态日报

**统计日期：2026-11-16**  
**数据范围：过去 24 小时**  
**仓库：[openclaw/openclaw](https://github.com/openclaw/openclaw)**

---

## 一、今日速览

过去 24 小时共更新 **499 条 Issues**（新开/活跃 408，关闭 91）和 **500 条 PRs**（待合并 218，合并/关闭 282），并发布 **2 个版本**，项目保持极高开发吞吐。  
今日主线集中在 **大会话内存与历史性能、Gateway 生命周期与插件稳定性、更新/迁移机制、CLI 与安装器健壮性**，同时发布了稳定版 `v2026.11.4` 和测试版 `v2026.11.5-beta.4`。  
Issue 热度明显由长期存量问题主导，尤其是 Gateway 插件阻塞、Windows 服务管理、Codex 子代理完成回传和 SQLite transcript 冲突；多个高优先级问题仍缺少可用修复。  
PR 侧已有 282 条合并或关闭，说明修复吞吐很高，但仍有 **218 条待合并**，且部分涉及安全边界、兼容性和自动化的 XL 变更尚待维护者审查。  
综合判断：**项目健康度为“高活跃、整体向前，但稳定性与维护积压风险偏高”**；发布节奏良好，不过 Gateway 生命周期、大会话处理和代理交接仍是短期阻塞点。

---

## 二、版本发布

### 1. `v2026.11.4`（稳定版）

**发布页：** [v2026.11.4](https://github.com/openclaw/openclaw/releases/tag/v2026.11.4)

#### 核心更新

- **大会话资源保护**
  - 保留大型 transcript trimming。
  - 增加分页 memory exports。
  - 改进 Doctor 对大体积状态的修复能力。
  - 重点避免 transcript 裁剪、内存导出和 Doctor 修复耗尽 worker 内存。
- 本次发布说明集中引用 #194066、#196158、#196132、#195459、#196480，体现本轮修复重点是**超长会话和大状态数据下的稳定性**。

#### 破坏性变更与迁移提示

- 已发布说明片段未显示明确的 breaking change，但属于涉及 **transcript、memory export、Doctor 修复和 worker 内存** 的底层变更。
- 建议大型会话用户升级后重新验证：
  - 长对话裁剪是否正常；
  - memory export 是否完整；
  - Doctor 修复是否会中断 Gateway；
  - worker 内存峰值是否显著下降。
- 对依赖旧版数据库或 transcript 行为的插件，应在升级前备份状态目录，并避免在生产环境中直接覆盖升级。

---

### 2. `v2026.11.5-beta.4`（测试版）

**发布页：** [v2026.11.5-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.4)

#### 核心更新

- **Telegram 交互式 Widget**
  - 支持将交互式 widget 渲染为 Telegram 消息（#196991）。
- **Transcript 与附件并发安全**
  - 在数据库准备和并发读取期间保持 transcript 可用。
  - 及时释放已完成的 SQLite reader，避免连接长期占用。

#### 风险提示

- 这是 beta 版本，不建议直接用于要求稳定交付的生产环境。
- Telegram widget 改变了消息渲染路径，建议重点验证：
  - 交互回调；
  - 消息编辑；
  - 附件与 transcript 并发读写；
  - 多用户或多 Bot 群聊中的隔离。
- 数据库 reader 生命周期变化可能影响自定义 SQLite 插件，建议同步进行兼容性测试。

---

## 三、项目进展

### 1. 大型会话和状态处理成为稳定版核心

稳定版 `v2026.11.4` 将大 transcript 裁剪、分页 memory export 和 Doctor 修复的内存保护纳入发布，说明项目已把“超长会话导致 worker 内存耗尽”提升为稳定版级别的系统性问题。

关联：

- [v2026.11.4](https://github.com/openclaw/openclaw/releases/tag/v2026.11.4)
- [Issue #185111：Large-session context reads scan full transcript](https://github.com/openclaw/openclaw/issues/185111)
- [Issue #159799：历史 hydration 导致缓存失效及上下文丢失](https://github.com/openclaw/openclaw/issues/159799)

**进展判断：** 已从“单点性能优化”推进到“大状态生命周期管理”，但现有报告仍显示超大会话读取需 19–25 秒，历史窗口滑动和 prompt cache 稳定性问题尚未完全解决。

### 2. Git checkout 安装的更新机制得到重构

PR #199706 尝试让 Git checkout 安装从正式 release 获取运行时，而不是在更新过程中直接改写正在运行的 checkout 树。其目标是降低大 checkout 复制自身运行时、构建候选版本及兼容处理的复杂度和失败风险。

- [PR #199706](https://github.com/openclaw/openclaw/pull/199706)

**进展判断：** 方向正确，尤其能缓解更新期间的 Gateway 中断和自更新覆盖问题；但标记为兼容性风险，当前仍等待作者处理，尚未合入。

### 3. 更新链路继续拆分迁移归因

PR #199943 避免所有打开数据库的 worker 都复制 update/Doctor migration attribution，降低 released updater 的文件数量逼近 50,000 条目的风险。

- [PR #199943](https://github.com/openclaw/openclaw/pull/199943)

**进展判断：** 对频繁更新、大规模安装和容器部署有实际价值，属于更新基础设施的重要优化；但涉及安装迁移边界，仍需维护者验证。

### 4. Doctor 改善迁移错误可诊断性

PR #199954 不再把正常、必需的数据库迁移显示为被脱敏的“拒绝继续”，而是明确指出 pending state migration 及其数据库。

- [PR #199954](https://github.com/openclaw/openclaw/pull/199954)
- [相关 Issue #172897](https://github.com/openclaw/openclaw/issues/172897)

**进展判断：** 直接改善升级失败时的问题定位，属于维护者高频使用的运维体验修复。

### 5. CLI 取消、安装参数和模板校验持续收敛

今日多项小型修复覆盖了常见运维错误：

- Ctrl-C 可终止等待中的只读 Gateway 请求：  
  [PR #199955](https://github.com/openclaw/openclaw/pull/199955)
- 空 CLI prefix 在配置前即被拒绝：  
  [PR #199953](https://github.com/openclaw/openclaw/pull/199953)
- Node archive 版本统一规范化，避免生成 `vv24...` 路径：  
  [PR #199966](https://github.com/openclaw/openclaw/pull/199966)
- Podman setup 不再忽略未知参数：  
  [PR #199976](https://github.com/openclaw/openclaw/pull/199976)
- Template 名称和描述中的首尾空格不再导致审核/发布失败：  
  [PR #197979](https://github.com/openclaw/openclaw/pull/199979)

**进展判断：** 这些改动单看较小，但共同降低了 CLI 安装、配置和排障过程中的不可预期失败，对首次安装用户尤其有价值。

### 6. 插件与代理生命周期修复进入审查

- 防止 SDK reply 使用已退役 runtime state：  
  [PR #199700](https://github.com/openclaw/openclaw/pull/199700)
- `mcp reload` 使 Gateway 缓存的 MCP runtime 失效：  
  [PR #164734](https://github.com/openclaw/openclaw/pull/164734)
- 修正 wall-clock 变化导致本地 wait budget 提前结束或超时：  
  [PR #199951](https://github.com/openclaw/openclaw/pull/199951)
- 嵌套目标启动时撤回延迟 dispatcher，避免 Discord 重复进度行：  
  [PR #194463](https://github.com/openclaw/openclaw/pull/194463)

**进展判断：** 项目正在从“功能扩张”继续转向生命周期一致性和跨运行时状态安全，这是成熟度提升的积极信号。

---

## 四、社区热点

> 以下按提供的评论数排序。多数条目 👍 为 0，说明当前热度主要来自深度讨论而非社区点赞。

### 1. Gateway 捕获大型外部插件时阻塞数分钟

- [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)
- **83 条评论，P0**
- 自 `2026.9.6` 回归；大型 package/dependency tree 在启动或 runtime republish 时阻塞 Gateway event loop。
- 另有后续问题显示外部插件可能在 turn 中重载，并造成 40–70 秒主线程停顿：[Issue #163029](https://github.com/openclaw/openclaw/issues/163029)。

**背后诉求：** 用户需要插件安装、启动和热更新不能拖垮核心消息循环。其本质是插件准备、依赖扫描和运行时重建缺少异步化、缓存化及隔离机制。

### 2. Windows 启动、停止、计划任务和更新交接不可靠

- [Issue #170956](https://github.com/openclaw/openclaw/issues/170956)
- **33 条评论，P0**
- [Issue #146860](https://github.com/openclaw/openclaw/issues/146860)
- **12 条评论，P0**

涉及 `schtasks` 权限错误、InteractiveToken 下无法取得 process start identity、更新停在 `activating`、客户端出现 `disconnected (1006)` 等。

**背后诉求：** Windows 用户希望安装、更新、重启和排障具备与 Unix 服务管理一致的可预测性。这是目前最明显的平台可靠性短板。

### 3. macOS Gateway 停止和进程检查失败

- [Issue #191944](https://github.com/openclaw/openclaw/issues/191944)
- **28 条评论，P2**

`gateway stop` 与 `gateway stop --force` 均可能因无法完整检查进程祖先关系而失败。

**背后诉求：** 用户需要停止命令要么可靠生效，要么提供可执行的恢复指引，而不是把服务管理职责转嫁给用户。

### 4. CLI-backed subagent 伪造工具调用

- [Issue #121661](https://github.com/openclaw/openclaw/issues/121661)
- **18 条评论，P1**

在 announce-wake 场景中，CLI-backed handoff 被强制为 tool-free，但模型仍可能生成虚构的工具调用和输出。

**背后诉求：** 社区希望“禁止工具”表示模型不再模拟工具执行，而不是允许无法验证的伪工具轨迹污染会话、审计和 fallback 状态。

### 5. Prompt cache 被会话前缀反复重写破坏

- [Issue #143017](https://github.com/openclaw/openclaw/issues/143017)
- **17 条评论，P2**
- [Issue #159799](https://github.com/openclaw/openclaw/issues/159799)
- **7 条评论，P1**
- [Issue #150081](https://github.com/openclaw/openclaw/issues/150081)（已关闭）

报告指出持久会话存在五种前缀重写方式，实测产生约 21.3M cache-write tokens；另有 history hydration 每轮滑动一个事件、导致本地 prefix cache 每轮失效的问题。

**背后诉求：** 用户不仅关注回答质量，也高度关注 token 成本、延迟和供应商缓存命中率。希望会话裁剪与 hydration 保持稳定前缀，而不是每轮重建上下文。

### 6. Codex helper 完成回传失败，父会话无法恢复

- [Issue #196199](https://github.com/openclaw/openclaw/issues/196199)
- **10 条评论，P1**
- [Issue #162637](https://github.com/openclaw/openclaw/issues/162637)
- **9 条评论，P1**

自 `2026.10.10` 起，native Codex helper 约每次启动都有一次完成回传失败；父代理暂停，目标无法继续。

**背后诉求：** 子代理完成必须具备可靠、幂等的 resume 协议。用户需要 helper 完成事件不会因 session rotation、source commit 或 wake-up 时序冲突而永久卡住。

### 7. Telegram 指令与 SQLite transcript mutation 冲突

- [Issue #194451](https://github.com/openclaw/openclaw/issues/194451)
- **7 条评论，P1**

在普通 agent turn 运行期间发送 `/think medium` 等指令，会触发 `SqliteTranscriptMutationConflictError` 并杀死当前 turn；此前 #192585 只覆盖了 `/status`。

**背后诉求：** 运行时指令应被安全排队或合并，而不是与活跃 turn 竞争写 transcript。

### 8. 新版插件插件管理页面令移动端 Chrome 卡死

- [Issue #199713](https://github.com/openclaw/openclaw/issues/199713)
- **7 条评论，P2，11 月 15 日新报**

打开 Control UI 的 Plugins → Advanced 后，移动版 Chrome 无响应，debug target 也不可用。

**背后诉求：** 管理界面需要针对移动端或低端设备设置渲染上限、懒加载和故障隔离。

---

## 五、Bug 与稳定性

### P0 / 发布阻断级

| 问题 | 状态 | Fix PR 判断 |
|---|---|---|
| [Gateway 捕获大型外部插件阻塞数分钟 #160959](https://github.com/openclaw/openclaw/issues/160959) | OPEN；标签含 `no-new-fix-pr` | **暂无已知 fix PR** |
| [Windows 启动、停止和 schtasks 更新不可靠 #170956](https://github.com/openclaw/openclaw/issues/170956) | OPEN；需维护者复核和更多信息 | **暂无已知 fix PR** |
| [Windows InteractiveToken 更新交接卡在 activating #146860](https://github.com/openclaw/openclaw/issues/146860) | OPEN | **暂无已知 fix PR** |
| [SQLite header-probe 修复无法从旧安装版本到达 #193962](https://github.com/openclaw/openclaw/issues/193962) | CLOSED | **已有处理记录；当前状态已关闭** |

其中 #193962 涉及升级器自身先触发 10 秒 probe timeout，导致用户即使已有修复版本也无法通过 `openclaw update` 到达；这暴露出**升级路径的可达性**问题，而不仅是单一数据库探测 bug。

### P1 / 高影响回归与任务中断

| 问题 | 状态 | Fix PR 判断 |
|---|---|---|
| [native Codex helper 无法恢复父会话 #196199](https://github.com/openclaw/openclaw/issues/196199) | OPEN | **暂无明确 fix PR** |
| [Codex completion handoff 在 source commit 前失败 #162637](https://github.com/openclaw/openclaw/issues/162637) | OPEN | **暂无明确 fix PR** |
| [CLI-backed subagent 伪造工具调用 #121661](https://github.com/openclaw/openclaw/issues/121661) | OPEN | **暂无明确 fix PR**；需产品、安全决策 |
| [`/think` 等指令导致 SQLite mutation conflict #194451](https://github.com/openclaw/openclaw/issues/194451) | OPEN | **已有关联 PR #192585，但仅覆盖 `/status`，当前问题需扩展修复** |
| [mDNS/native plugin 重载造成 turn 中 40–70 秒阻塞 #163029](https://github.com/openclaw/openclaw/issues/163029) | OPEN | **已有历史修复 #160658，但报告版本仍复现；当前缺完整修复** |
| [memory index 达到 worker capacity 后直接中止 #196505](https://github.com/openclaw/openclaw/issues/196505) | OPEN | **暂无明确 fix PR** |
| [macOS Gateway 关闭 worker MessagePort 时主线程阻塞 #181120](https://github.com/openclaw/openclaw/issues/181120) | OPEN | **暂无明确 fix PR** |

### P2 / 重要可靠性与可观测性问题

- [macOS `gateway stop` 无法检查进程祖先 #191944](https://github.com/openclaw/openclaw/issues/191944)  
  **暂无明确 fix PR。**

- [`gateway restart` 实际成功却报告失败并以 0 退出 #161158](https://github.com/openclaw/openclaw/issues/161158)  
  **暂无明确 fix PR。**

- [16 处 session admission 错误使用完全相同文本，无法定位根因 #127195](https://github.com/openclaw/openclaw/issues/127195)  
  **暂无明确 fix PR。**

- [远程 embedding 卡顿时 `memory_search` 挂起 15 秒，无 per-call timeout/retry #136405](https://github.com/openclaw/openclaw/issues/136405)  
  **暂无明确 fix PR。**

- [Plugins Advanced 令移动 Chrome 卡死 #199713](https://github.com/openclaw/openclaw/issues/199713)  
  **暂无明确 fix PR。**

- [Discord Components V2 消息无法编辑 #165615](https://github.com/openclaw/openclaw/issues/165615)  
  **已有关联 PR 状态标记，但仍 OPEN。**

- [Control UI 最终回复缺少 Reply/Copy 操作 #163564](https://github.com/openclaw/openclaw/issues/163564)  
  **暂无明确 fix PR。**

- [Gateway 每次生命周期增加 process exit listener，触发 MaxListeners 警告 #156953](https://github.com/openclaw/openclaw/issues/156953)  
  **暂无明确 fix PR。**

- [macOS 设置页打开会话后变慢，暗色主题输入框不可见 #192667](https://github.com/openclaw/openclaw/issues/192667)  
  **暂无明确 fix PR。**

### 已关闭或已有明确修复路径

- [Windows Gateway 升级后挂起 #167652](https://github.com/openclaw/openclaw/issues/167652)：已关闭。
- [PowerShell exec host CLIXML 错误 #140631](https://github.com/openclaw/openclaw/issues/140631)：已关闭。
- [claude-cli usage/cost 少计 #148603](https://github.com/openclaw/openclaw/issues/148603)：已关闭。
- [Heartbeat lane 无 transcript 续发导致非静默回复 #143580](https://github.com/openclaw/openclaw/issues/143580)：已关闭。
- [MCP reload 未失效 Gateway runtime #164642](https://github.com/openclaw/openclaw/issues/164642)：对应 [PR #164734](https://github.com/openclaw/openclaw/pull/164734) 仍待合并。
- [Ollama 云模型因 max_tokens 预算被拒绝 #199928](https://github.com/openclaw/openclaw/issues/199928)：对应 [PR #199930](https://github.com/openclaw/openclaw/pull/199930) 待补充证明。

---

## 六、功能请求与路线图信号

### 1. 按用户隔离的 Secret Vault

- [Issue #197297](https://github.com/openclaw/openclaw/issues/197297)
- 7 条评论；要求每位用户拥有独立秘密库，使 agent 可在对应会话中使用该用户自己的 token。
- 已明确涉及安全审查。

**下一版本可能性：中等。** 需求与多用户 Gateway、权限隔离趋势一致，但密钥存储、访问审计和宿主边界需要专门设计，不太可能仅凭单个小型补丁进入近期稳定版。

### 2. MCP Events 事件驱动启动 Agent

- [Issue #166586](https://github.com/openclaw/openclaw/issues/166586)
- 8 条评论；允许 OpenClaw 订阅 MCP server 的 Events，并像 hooks mapping 一样为每个事件启动 agent。
- 当前仓库已有 `mcp-events` 扩展标签，且 [PR #199699](https://github.com/openclaw/openclaw/pull/199699) 正在推进可信代理设备接入，生态方向持续活跃。

**下一版本可能性：中等偏高。** 技术路径与现有 MCP 能力衔接紧密，但需明确事件安全、幂等和生命周期语义。

### 3. Agent 工具支持更新已安装插件

- [Issue #199721](https://github.com/openclaw/openclaw/issues/199721)
- [PR #199733](https://github.com/openclaw/openclaw/pull/199733)

`plugins` 工具当前只能安装，无法更新已安装的 ClawHub 或官方插件。

**下一版本可能性：高。** 已有直接对应的实现 PR，改动范围小，且符合“会话内管理插件”的产品方向。

### 4. Template 携带可选 preferred model

- [PR #199988](https://github.com/openclaw/openclaw/pull/199988)

允许 Template 作者设置可移植的 `provider/model` 建议值，并在用户未主动选择模型时使用。

**下一版本可能性：高。** 属于 Template 分发体验的增量能力，已有直接实现。

### 5. Control UI 内嵌 iOS Simulator

- [PR #195717](https://github.com/openclaw/openclaw/pull/195717)

在 macOS Control UI 的 Systems 面板中提供可交互的 iOS Simulator，支持触控、Home、键盘和粘贴。

**下一版本可能性：中等。** 用户价值明确，但属于大型 UI/基础设施改动，发布节奏和设备兼容性仍需验证。

### 6. Android 对齐浏览器交互审批体验

- [Issue #175826](https://github.com/openclaw/openclaw/issues/175826)（已关闭，保留设计诉求）
- [Issue #143387](https://github.com/openclaw/openclaw/issues/143387)（Android 通知 QoL，提案继续保留）

目标是让 Android 的可选问题和原生审批请求与浏览器工作流一致，并完善 session-aware 通知、来源标签和跨设备抑制。

**下一版本可能性：中等偏低。** 体验诉求清晰，但 Issue #143387 已明确表示不再推动实现，现阶段主要仍是路线图信号。

### 7. IMAP 持久处理交接和逐邮件可观测结果

- [Issue #179685](https://github.com/openclaw/openclaw/issues/179685)
- 8 条评论。

用户希望在不建设新邮件平台的前提下，为现有 IMAP trigger 增加 durable handoff、逐消息结果和可检查状态。

**下一版本可能性：中等。** 属于现有能力的可靠性扩展，适合通过 plugin/extension 分阶段落地。

### 8. 允许运营方自定义模型请求失败文案

- [Issue #167341](https://github.com/openclaw/openclaw/issues/167341)
- 7 条评论。

现有系统会统一分类 billing、rate limit、auth、overloaded 等错误，但运营方不能配置面向用户的提示文案。

**下一版本可能性：中高。** 改动相对局部，适合通过配置项和本地化机制进入近期版本。

### 9. 每轮可选模型与 reasoning effort

- [Issue #156774](https://github.com/openclaw/openclaw/issues/156774)
- 已关闭，功能请求信号仍保留。

建议允许 Decision consumer 在下一轮提出兼容的 model/reasoning profile。

**下一版本可能性：中等。** 与多 provider 路由和 fallback 机制相关，但需要权限和配置边界设计。

---

## 七、用户反馈摘要

### 核心痛点

1. **“能连上，但任务不一定能完成”**
   - Codex helper、Claude CLI fallback、subagent announce-wake 多次出现“模型已结束，但父会话未恢复、消息未投递或 fallback 未触发”。
   - 代表性问题：  
     [#196199](https://github.com/openclaw/openclaw/issues/196199)、[#162637](https://github.com/openclaw/openclaw/issues/162637)、[#118793](https://github.com/openclaw/openclaw/issues/118793)、[#121661](https://github.com/openclaw/openclaw/issues/121661)。

2. **“Gateway 管理命令不可信”**
   - stop 可能失败、restart 实际成功却报告失败、Windows 更新可能卡死或断连。
   - 代表性问题：  
     [#191944](https://github.com/openclaw/openclaw/issues/191944)、[#161158](https://github.com/openclaw/openclaw/issues/161158)、[#170956](https://github.com/openclaw/openclaw/issues/170956)、[#146860](https://github.com/openclaw/openclaw/issues/146860)。

3. **“长会话越来越慢且越来越贵”**
   - 完整 transcript 扫描、每轮窗口滑动、REM citation 不完整和多处 prefix rewrite 共同破坏缓存。
   - 代表性问题：  
     [#185111](https://github.com/openclaw/openclaw/issues/185111)、[#159799](https://github.com/openclaw/openclaw/issues/159799)、[#143017](https://github.com/openclaw/openclaw/issues/143017)、[#157827](https://github.com/openclaw/openclaw/issues/157827)。

4. **“错误信息无法支持生产排障”**
   - 多处返回相同的 `Session "<key>" changed while starting work. Retry.`，无法区分 session rotation、权限撤销、transcript conflict 或 source commit。
   - 代表性问题：  
     [#127195](https://github.com/openclaw/openclaw/issues/127195)、[#166964](https://github.com/openclaw/openclaw/issues/166964)、[#160494](https://github.com/openclaw/openclaw/issues/160494)。

5. **“插件和高级 UI 会拖垮核心进程”**
   - 大型插件依赖树可让 Gateway event loop 阻塞数分钟；Plugins Advanced 可使移动 Chrome 完全无响应。
   - 代表性问题：  
     [#160959](https://github.com/openclaw/openclaw/issues/160959)、[#163029](https://github.com/openclaw/openclaw/issues/163029)、[#199713](https://github.com/openclaw/openclaw/issues/199713)。

### 典型使用场景

- 多 Bot、多 Agent 共用 Telegram 群聊，需要避免语音转录和工具执行重复：  
  [#146311](https://github.com/openclaw/openclaw/issues/146311)
- Cron 绑定持久 session，在 session rotation 后应等待窗口而不是反复被 admission 拒绝：  
  [#160494](https://github.com/openclaw/openclaw/issues/160494)
- iOS App 配对后需注册 APNs relay，才能在应用挂起后收到推送和唤醒：  
  [#146791](https://github.com/openclaw/openclaw/issues/146791)
- 大型 memory corpus 建索引需要自动重试和分片，而不是达到 worker capacity 后直接失败：  
  [#196505](https://github.com/openclaw/openclaw/issues/196505)
- 多用户 Gateway 需要按用户隔离 CLI token/API key：  
  [#197297](https://github.com/openclaw/openclaw/issues/197297)

### 满意与积极信号

- `v2026.11.4` 已将大 transcript、memory export 和 Doctor 修复的内存保护带入稳定版，说明核心用户最关注的“大会话耗尽内存”问题已有系统性响应：  
  [v2026.11.4](https://github.com/openclaw/openclaw/releases/tag/v2026.11.4)
- `v2026.11.5-beta.4` 修复并发数据库准备期间 transcript 不可用，并增加 Telegram 交互式 widget：  
  [v2026.11.5-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.4)
- 今日 PR 覆盖取消传播、安装参数校验、Doctor 迁移提示、插件更新、MCP reload 等多个用户可直接感知的细节，说明维护响应面较广。

---

## 八、待处理积压

### 1. 长期 P0/P1 但仍无明确 fix PR

建议维护者优先建立专项队列：

- [Gateway 大型外部插件阻塞 #160959](https://github.com/openclaw/openclaw/issues/160959)
- [Windows 启动/更新/停止整体不可靠 #170956](https://github.com/openclaw/openclaw/issues/170956)
- [Windows InteractiveToken 更新交接停滞 #146860](https://github.com/openclaw/openclaw/issues/146860)
- [CLI-backed subagent 伪造工具调用 #121661](https://github.com/openclaw/openclaw/issues/121661)
- [Codex helper 无法恢复父会话 #196199](https://github.com/openclaw/openclaw/issues/196199)
- [Codex completion handoff 冲突 #162637](https://github.com/openclaw/openclaw/issues/162637)
- [macOS Gateway MessagePort 关闭阻塞 #181120](https://github.com/openclaw/openclaw/issues/181181)

> 注：最后一个链接中的 issue 编号应为 **#181120**，正确链接为：  
> [Issue #181120](https://github.com/openclaw/openclaw/issues/181120)

### 2. 长期存在且影响可观测性的设计债务

- [16 个 call site 使用同一 session admission 错误 #127195](https://github.com/openclaw/openclaw/issues/127195)
- [远程 embedding 阻塞无单次 timeout/retry #136405](https://github.com/openclaw/openclaw/issues/136405)
- [Cron 持久 session rotation admission 拒绝 #160494](https://github.com/openclaw/openclaw/issues/160494)
- [无效 session_nodes 无法由 sessions.delete/Doctor/reaper 回收 #160719](https://github.com/openclaw/openclaw/issues/160719)
- [Gateway process exit listener 持续累积 #156953](https://github.com/openclaw/openclaw/issues/156953)
- [Claude CLI duplicate assistant delivery #157537](https://github.com/openclaw/openclaw/issues/157537)

### 3. 待维护者审查的关键 PR

当前 PR 积压 218 条，以下事项涉及兼容性、安全边界或发布收尾，建议优先：

- [PR #199956：将 2026.11.4 发布内容回合并到 main](https://github.com/openclaw/openclaw/pull/199956)  
  这是主分支版本收口的关键 PR。

- [PR #199699：可信代理 CLI/TUI 设备授权](https://github.com/openclaw/openclaw/pull/199699)  
  标记为 compatibility 与 security-boundary 双重风险，需要安全审查。

- [PR #164734：MCP reload 失效 Gateway runtime 缓存](https://github.com/openclaw/openclaw/pull/164734)  
  修复范围合理，但涉及跨进程 runtime 生命周期。

- [PR #188368：CoreDNS 配置原子发布](https://github.com/openclaw/openclaw/pull/188368)  
  直接影响运维配置安全，需验证写失败回滚和权限提升场景。

- [PR #199706：Git checkout 使用 release 执行更新](https://github.com/openclaw/openclaw/pull/199706)  
  属于更新架构变化，兼容性风险较高。

- [PR #199985：依赖审批限制为管理员与 SecOps](https://github.com/openclaw/openclaw/pull/199985)  
  属于供应链安全策略变更，应尽快完成审查。

---

## 结论

OpenClaw 今日呈现 **“发布强、吞吐高、功能推进明显，但 Gateway 生命周期和代理交接仍不稳定”** 的状态。  
稳定版已重点解决大会话内存问题，beta 版继续强化 Telegram widget 和 SQLite 并发安全；与此同时，Windows 服务管理、插件重载阻塞、Codex 子代理回传和 transcript mutation conflict 仍是高影响缺口。

下一阶段最值得关注的不是新增功能数量，而是以下四项能否收敛：

1. 大型插件加载是否彻底移出 Gateway 主线程；
2. Windows 安装、更新与重启流程能否稳定闭环；
3. 子代理完成回传是否具备幂等、可恢复协议；
4. 超长会话是否能同时保持低延迟、上下文完整和 prompt cache 命中。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**统计日期：2026-11-16｜观察窗口：过去 24 小时**

## 1. 生态全景

1. **生态正处于“高活跃开发、稳定性欠账”阶段。** 八个项目当日合计至少更新 **154 条 Issues、142 条 PRs**，但多数项目仍面临 Gateway 生命周期、插件加载、会话一致性、跨平台进程管理和发布迁移等共性缺口。  
2. **竞争重点正由“接入更多模型与渠道”转向“可恢复、可观察、可治理”。** 会话权威、任务幂等、凭证隔离、状态迁移、后台任务终态和成本归因，正取代单纯的模型接入成为主要工程投入。  
3. **插件生态与平台原生交互是两条增长主线。** OpenClaw、QwenPaw、Hermes Agent、OpenHuman 都在强化插件 SDK、市场、生命周期或多渠道原生 UI，而 WebUI、Desktop 与移动端成为重要体验载体。  
4. **成熟度分化明显。** OpenClaw、QwenPaw、Hermes Agent 属于快速迭代平台期；NanoBot、LobsterAI 处于功能收敛与交付阶段；IronClaw、PicoClaw 的当日可见维护和发布活动明显偏弱。  
5. **生产可用性的关键指标正在变化。** 用户不再只问“能否连接模型”，而是更关注任务是否真正完成、状态能否恢复、权限是否隔离、缓存成本是否可控，以及失败后能否自动清理和重试。

---

## 2. 各项目活跃度对比

> Issue/PR 数量按日报披露的过去 24 小时活动统计；“已关闭”不等同于“已合并”，健康度为综合判断。

| 项目 | Issues | PRs | Release | 当日特征 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | **499** | **500** | **2 个**：`v2026.11.4`、`v2026.11.5-beta.4` | 修复吞吐与发布节奏最强，但待合并 PR 达 218 条；Gateway、代理交接、Windows 管理仍是短板 | **高活跃、整体向前；稳定性承压** |
| **QwenPaw** | **22** | **25** | 无 | 2.3.0 后集中修复微信、飞书、企业微信、认证及 Cron；21 条 PR 待合并，架构级 PR 较多 | **7/10，活跃但承压** |
| **Hermes Agent** | **50** | **50** | **1 个 Canary** | 45 条 PR 待合并；多 Profile、会话权威、Gateway 空闲 CPU 与 Desktop 一致性成为架构焦点 | **中高活跃，架构债明显** |
| **NanoBot** | **3** | **10** | 无 | WebUI、模型兼容和 Email 可靠性修复较集中；两个 Email PR 已积压约两个半月 | **良好，交付闭环偏慢** |
| **LobsterAI** | **1** | **2** | 无 | PPT 工作流与 MCP OAuth 推进；两个 PR 均待合并，其中 OAuth PR 长期开放 | **中等偏稳** |
| **OpenHuman** | **0** | **5** | 无 | 无 Issue 更新；3 条待合并，集中在 OAuth 竞态、成本面板、Agent 路由和 Solana 多账户 | **中等偏高，但社区信号弱** |
| **PicoClaw** | **0** | **3** | 无 | 3 条 PR 均关闭/合并，其中批量整合 9 个历史修复；无待合并 PR | **中等偏低，低活跃维护** |
| **IronClaw** | **2** | **0** | 无 | 仅新增本地模型超时与 provider 故障切换问题，无 PR、无讨论、无发布 | **中性偏弱** |

### 活跃度分层

- **第一梯队：OpenClaw**
  - 唯一同时达到数百级 Issue/PR 日吞吐并发布稳定版与测试版。
  - 优势是规模、发布与修复能力；风险是积压和架构问题同样巨大。

- **第二梯队：Hermes Agent、QwenPaw**
  - 均为 20–50 条 Issue、25–50 条 PR 级别。
  - Hermes 更偏 Desktop、插件生态和多 Profile；QwenPaw 更偏渠道插件、Cron 与企业通道。
  - 两者的共同问题都是“功能扩张快于状态模型统一”。

- **第三梯队：NanoBot、LobsterAI、OpenHuman**
  - 活动集中在 1–10 条 Issue/PR。
  - NanoBot 偏 WebUI 与 Email；LobsterAI 偏桌面办公与 MCP 市场；OpenHuman 偏成本、钱包与桌面自动化。
  - 交付瓶颈主要是 PR 审查、合并和发版，而非贡献数量。

- **第四梯队：PicoClaw、IronClaw**
  - PicoClaw 有历史修复整合，但没有新版本；IronClaw 当日只有两个新问题。
  - 短期主要风险是维护可见度下降和用户问题缺少闭环。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态角色

OpenClaw 更接近 **“个人 AI 助手的通用运行时与消息入口”**，而非单一聊天客户端或办公型 Agent。它同时覆盖：

- Telegram、Discord、Slack 等多渠道消息入口；
- Gateway 服务生命周期；
- WebUI 与插件市场；
- 记忆、transcript、Doctor、迁移和升级器；
- Codex/Claude CLI 等外部 Agent 协作；
- 多 Profile、会话调度及自托管部署。

其竞争位置更接近一个 **Agent Runtime + Gateway + Extension Platform**，而不是传统“带模型接口的桌面应用”。

### 3.2 相比同类项目的优势

| 维度 | OpenClaw 的相对优势 |
|---|---|
| **社区与开发吞吐** | 499 Issues、500 PRs，远高于其他项目；稳定版和测试版并行发布 |
| **渠道与集成广度** | 相比 NanoBot 更强调 Gateway、多 Bot、多渠道和第三方 CLI；相比 LobsterAI 更开放、更偏运行时 |
| **生态成熟度** | 插件安装、市场、生命周期、Doctor、迁移、CLI 和安装器体系更完整 |
| **部署灵活性** | 相比桌面优先的 LobsterAI、Hermes Desktop 和 OpenHuman，OpenClaw 更适合服务器、自托管和消息平台场景 |
| **生产运维能力** | Doctor、memory export、transcript trimming、迁移诊断等已进入稳定版，工程化程度领先 |

### 3.3 技术路线差异

- **OpenClaw：消息入口优先、运行时优先**
  - 核心是 Gateway 路由、长会话、插件和外部 Agent handoff。
  - 优势是覆盖广；代价是 Gateway、插件和会话生命周期极难统一。

- **QwenPaw：插件化渠道平台**
  - 微信、企业微信、飞书等通道插件是核心资产。
  - 更强调插件市场、SDK、Worker 和跨通道任务编排。
  - 当前 2.3.0 的主要风险是升级迁移和插件版本一致性。

- **Hermes Agent：Desktop-first 的多 Profile 工作台**
  - 强项是 Desktop、插件目录、本地工具、远程 SSH 和多 Profile。
  - 更接近可视化 Agent 工作站，而非纯消息网关。

- **NanoBot：轻量 WebUI 与渠道代理**
  - 重点是 MiniMax、多模型、多渠道、Email 和 WebUI 可读性。
  - 产品面更聚焦，架构复杂度相对低，但长期 PR 积压影响交付。

- **LobsterAI：办公生产力与 MCP 服务入口**
  - PPT、协作办公、MCP OAuth 和 Skill 分发是主要方向。
  - 更强调“让非技术用户完成办公成果”，而非开放 Agent Runtime。

- **OpenHuman：桌面自动化、成本与钱包**
  - 成本面板、TinyComputer、CAPTCHA Provider、Solana 多账户都显示其更偏本地数字操作与资产安全。
  - 与其他项目的通用消息助手定位差异最大。

- **IronClaw：本地/注册表模型可靠性**
  - 当前暴露的问题集中在慢速本地 LLM 超时和 provider fallback。
  - 技术路线偏 provider/runtime 配置治理，生态规模尚小。

- **PicoClaw：轻量个人助手及 Telegram/Codex 编排**
  - 今日主要在收敛历史修复，Telegram–Codex 编排方向尚不明确。
  - 更适合作为小型个人助手，而非多租户企业平台。

### 3.4 社区规模对比

以当日可见活动衡量：

- **OpenClaw：绝对规模显著领先**，日活跃 Issue/PR 约为第二名 Hermes 的 10 倍。
- **Hermes Agent、QwenPaw：大型活跃社区**，但仍处架构收敛期。
- **NanoBot：中等规模、问题闭环较快**，但缺少版本发布。
- **OpenHuman、LobsterAI、PicoClaw、IronClaw：社区信号明显更弱**。
- 需要注意：GitHub 活动量不等同于真实安装量或商业采用量；OpenClaw 的高活动也可能部分来自超大 Issue 编号和复杂部署面。

---

## 4. 共同关注的技术方向

### 4.1 会话状态、迁移与缓存一致性

- **OpenClaw**：大会话内存、transcript trimming、prompt cache 反复失效；Codex 子代理完成回传失败，父会话无法恢复。
- **QwenPaw**：引入 Append-only SQLite 会话历史、分页历史和 Turn 分叉，以替代快照式存储。
- **Hermes Agent**：会话跨 Profile 移动后永久不可恢复；语音会话、receipt 与 canonical authority 分裂。
- **OpenHuman**：Agent Chat 固定角色路由下忽略 `model_override`。

**共同诉求：**  
会话应是可持久化、可恢复、可迁移、可分叉且具有唯一权威来源的状态对象，而不应由多个运行路径各自维护快照。

### 4.2 插件生命周期与运行时隔离

- **OpenClaw**：大型外部插件可阻塞 Gateway event loop 数分钟；插件热重载造成 40–70 秒停顿。
- **QwenPaw**：插件 SDK 1.1、插件更新、版本守卫、官方市场及 Worker 运行环境持续完善。
- **Hermes Agent**：Desktop 插件无法从磁盘加载、公共子代理生命周期兼容性持续修复。
- **LobsterAI**：MCP OAuth 注册机制趋于通用化。
- **NanoBot**：WebUI 自定义背景和 MiniMax H3 接入体现扩展体验演进。

**共同诉求：**  
插件不仅要“能安装”，还必须具备异步加载、热更新隔离、版本兼容、权限声明和失败恢复能力。

### 4.3 Gateway 与后台任务的可恢复执行

- **OpenClaw**：Gateway 生命周期、Windows 服务管理、代理交接不稳定。
- **QwenPaw**：微信轮询静默死亡、飞书重连监督器退出、Cron 第二次模型调用失败、后台启动阶段任务被吞。
- **Hermes Agent**：Gateway 空闲 CPU 高、MCP Server 静默失联、Feishu/Lark WebSocket 永久卡死、远程 GPU 任务假成功。
- **LobsterAI/Email**：邮件投递后才标记已读，体现“外部副作用必须有可靠终态”的共识。

**共同诉求：**  
后台任务状态机必须区分 queued、running、delivered、failed、receipt settled，并确保失败可重试、终态可验证、资源能够释放。

### 4.4 跨平台与异构部署支持

- **OpenClaw**：Windows `schtasks`、InteractiveToken、进程更新交接是 P0 短板。
- **QwenPaw**：Windows 附件路径截断、Linux Worker HOME 缺失。
- **Hermes Agent**：Windows Git 挂起、Chromium 无法停止、Termux 缺少硬链接。
- **NanoBot**：不支持 `@property` 的浏览器兼容问题。
- **IronClaw**：慢速本地 LLM 与注册表 provider 故障切换。
- **LobsterAI**：Microsoft OAuth 适配与邮箱别名过滤。

**共同诉求：**  
“能在 Linux 标准环境运行”已不足以构成生产可用性；Windows、macOS、Android/Termux、非标准浏览器、本地慢模型和反向代理都需成为一等测试环境。

### 4.5 可观察性与成本治理

- **OpenClaw**：大量相同 session admission 错误、远程 embedding 无单次 timeout/retry、长会话 cache-write 成本过高。
- **QwenPaw**：Cron Token 未写入 `turns.jsonl`；部分失败无日志。
- **Hermes Agent**：成功状态缺乏产物验证，Gateway 诊断行为不稳定。
- **OpenHuman**：成本面板 RPC 乱序导致旧结果覆盖新结果。
- **NanoBot**：WebUI 状态展示不能区分操作与观察结果。

**共同诉求：**  
用户需要知道任务是否完成、消耗多少、错误发生在哪一层；可观察性应覆盖模型调用、工具调用、渠道投递、插件状态和费用归因。

### 4.6 模型路由与 Provider 治理

- **OpenClaw**：按用户/会话选择模型、fallback 和插件更新仍缺统一语义。
- **QwenPaw**：Cron 独立推理等级、更多 Web Search Provider。
- **Hermes Agent**：旧 custom provider 的 `key_cmd` 在辅助调用中丢失。
- **IronClaw**：注册表 provider 之间无法按预期故障切换。
- **OpenHuman**：固定路由下 `model_override` 失效。

**共同诉求：**  
模型、推理强度、超时、凭据和 fallback 应使用统一配置契约，并保证在主对话、辅助调用、Cron、子代理及固定路由下语义一致。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多渠道个人助手、插件、记忆、长期会话、CLI/外部 Agent 协作 | 自托管用户、开发者、机器人与多 Bot 运维者 | Gateway 为中心；transcript/memory/Doctor/插件/升级器形成完整运行时体系 |
| **QwenPaw** | 微信/企微/飞书通道、插件 SDK、Cron、Web Search | 团队助手、办公自动化、跨平台消息用户 | 通道插件 + Worker + SDK + 官方市场；正重构会话存储 |
| **Hermes Agent** | Desktop 工作区、插件目录、远程 SSH、多 Profile | 高级个人用户、团队部署、插件开发者 | Desktop/Gateway 混合；强调 canonical authority，但 Profile 边界仍在收敛 |
| **NanoBot** | MiniMax、多模型、多渠道、Email、WebUI | 轻量个人用户和邮件自动化用户 | 结构更聚焦，以 Provider/Channel + WebUI 为主 |
| **LobsterAI** | PPT、办公协作、MCP OAuth、Skill | 办公用户、MCP 服务消费者 | 桌面办公工作流与市场入口，强调低门槛接入 |
| **OpenHuman** | 成本、TinyComputer、桌面自动化、CAPTCHA、Solana | 数字操作自动化与资产安全管理用户 | Rust Core 驱动，重视账户、签名策略和本地桌面执行 |
| **IronClaw** | 本地/注册表 provider、fallback、超时 | 本地模型和私有化部署用户 | Provider 工厂与 Agent Loop 配置能力为核心 |
| **PicoClaw** | Telegram/Codex 编排、轻量个人助手 | 移动端聊天触发 Agent 的个人用户 | 当前以历史修复整合和小规模编排探索为主 |

### 架构方向的关键分界

- **中心化服务型**：OpenClaw、QwenPaw、Hermes Agent  
  适合长期运行和多入口，但状态、权限和生命周期最复杂。

- **桌面工作台型**：Hermes Agent、LobsterAI、OpenHuman  
  用户体验更直接，但桌面与后台 Agent 的一致性是难点。

- **轻量/渠道代理型**：NanoBot、PicoClaw  
  部署简单、体验聚焦，但生态规模和版本闭环较弱。

- **Provider/运行时型**：IronClaw、OpenClaw  
  更关注模型调度与运行可靠性；IronClaw 当前规模较小，OpenClaw 已形成更完整的生产体系。

---

## 6. 社区热度与成熟度

### 6.1 社区热度

- **高热度、高压力：OpenClaw**
  - 499 Issues、500 PRs，且多个 P0/P1 问题有 10–83 条评论。
  - 热度来自真实生产场景和复杂部署，但也反映长期积压。

- **中高热度、架构收敛期：Hermes Agent**
  - 50 Issues、50 PRs；Desktop 重复响应、Terminal 验证、多 Profile Scope 等议题均有较高讨论。
  - 修复供给丰富，但 45 条待合并 PR 表明评审压力突出。

- **中高热度、发布后修复期：QwenPaw**
  - 22 Issues、25 PRs；社区反馈高度集中于 2.3.0 升级、通道、Cron 和认证。
  - 贡献积极，但缺少新 Release，当前处于“修回归、建平台”的阶段。

- **中低热度、功能收尾期：NanoBot**
  - 多数问题已有直接 PR，响应闭环快，但 Email OAuth 与别名 PR 长期积压。
  - 适合作为轻量方案评估，不宜仅凭开发活跃度判断成熟度。

- **低热度但有明确产品方向：LobsterAI、OpenHuman**
  - LobsterAI 有清晰 PPT/MCP 路线，但交付节奏慢。
  - OpenHuman 核心工程质量信号较好，却缺少 Issue 和社区讨论，难以判断外部采用度。

- **低热度、维护可见度不足：PicoClaw、IronClaw**
  - PicoClaw 有历史修复整合，但无发布和社区讨论。
  - IronClaw 只有两个新 Issue，无 PR；更像需求收集期。

### 6.2 成熟度分层

**快速迭代阶段**

- OpenClaw
- QwenPaw
- Hermes Agent

共同特征：高吞吐、大量架构 PR、明显回归和积压。适合积极采用，但需锁定版本并做生产验证。

**质量巩固阶段**

- NanoBot
- OpenHuman
- LobsterAI

共同特征：主要问题已有修复路径，但合并、迁移和发版尚未完全闭环。

**低活跃或维护待观察阶段**

- PicoClaw
- IronClaw

共同特征：版本发布与社区响应不足，方向或维护连续性不清晰。

---

## 7. 值得关注的趋势信号

### 7.1 “个人助手”正在变成 Agent 操作系统

OpenClaw 的 Gateway、插件、Doctor 和升级器，QwenPaw 的 SDK/市场/Worker，以及 Hermes 的 Desktop/插件目录，共同表明项目竞争已从聊天 UI 转向：

- 运行时；
- 插件生态；
- 状态存储；
- 权限与策略；
- 生命周期治理。

**开发者参考：** 新项目应尽早设计插件 API、会话存储、配置优先级和任务终态，而不是后期再补。

### 7.2 会话一致性成为竞争分水岭

长会话裁剪、缓存前缀稳定、跨 Profile 迁移、语音记录写入、receipt 收敛和 Turn 分叉都指向同一问题：**会话不能由多个模块分别解释**。

**开发者参考：** 建议尽早确立：

1. 唯一会话 ID 与版本；
2. Append-only 事件或事务化快照；
3. 原子迁移协议；
4. 幂等工具调用；
5. 明确的恢复与分叉语义。

### 7.3 “成功”必须绑定可验证产物

RunPod 任务假成功、邮件提前标记已读、Cron 消耗未入账、Codex helper 完成未回传，都说明仅返回 `success` 不足以满足生产需求。

**开发者参考：** 应定义明确终态：成功必须对应产物、远端状态、投递回执或数据库提交，而非仅代表“请求已发出”。

### 7.4 插件治理从安装扩展走向全生命周期

项目都在补更新、版本守卫、权限、OAuth、Worker 环境、热加载与市场机制。下一阶段竞争点将是：

- 插件升级能否可靠到达用户；
- 插件崩溃是否隔离；
- 插件权限能否按 Profile/Secret 隔离；
- 大型依赖是否阻塞主进程。

**开发者参考：** 插件加载必须异步化、可取消、可回滚；重活应进入 Worker，而非 Gateway/UI 主线程。

### 7.5 本地模型与私有化部署成为一等场景

IronClaw 的慢速 LLM 超时、OpenClaw 的本地环境兼容、Hermes 的 Termux/Windows，以及 NanoBot 的多 Provider 接入表明，标准云 API 已不能代表全部用户。

**开发者参考：** 超时、重试和 fallback 不能使用统一固定值，应根据 provider、硬件、模型、推理等级及任务类型动态配置。

### 7.6 安全边界正在从“认证”扩展到“策略来源与作用域”

QwenPaw 的反向代理认证绕过、Hermes 的托管黑名单失效、OpenClaw 的多用户 Secret Vault 和依赖审批，都指向同一趋势：配置优先级和作用域本身就是安全边界。

**开发者参考：** 需要统一解析层，明确：

- 用户配置；
- Profile 配置；
- 托管策略；
- 环境变量；
- Secret；
- 插件声明；

之间的覆盖顺序，并保证低优先级来源不能覆盖高优先级安全策略。

### 7.7 发布工程本身成为产品能力

OpenClaw 和 QwenPaw 的升级迁移问题表明，“代码修复正确”不代表用户能得到修复。插件旧版本残留、升级器自身不可达、数据库迁移不清都可能让修复无法生效。

**开发者参考：** 发布流程应提供：

- 状态目录备份；
- 迁移预检；
- 插件版本同步；
- 可回滚升级；
- 升级后端到端冒烟测试；
- 明确的破坏性变更和迁移说明。

---

## 决策建议

### 若目标是建设通用个人 AI 助手平台

优先关注 **OpenClaw**，但应避开其 Gateway 插件阻塞、Windows 管理和子代理交接风险；建议锁定稳定版并建立回归测试。

### 若目标是企业微信/飞书/微信渠道自动化

优先关注 **QwenPaw**，同时评估其 2.3.0 升级回归、插件迁移和 Cron 可观测性。

### 若目标是 Desktop 工作台与插件化开发体验

优先关注 **Hermes Agent**，重点验证多 Profile、会话迁移和后台任务终态。

### 若目标是轻量、多模型和 Email 工作流

关注 **NanoBot**，但需评估长期 PR 积压、OAuth 支持和正式版本交付节奏。

### 若目标是办公产物生成与 MCP 快速接入

关注 **LobsterAI**，重点等待 PPT 工作流和 MCP OAuth 依赖链完成合并发布。

### 若目标是桌面自动化、钱包或数字资产操作

关注 **OpenHuman**，同时对 OAuth、模型覆盖、钱包派生及每账户签名权限进行专项审查。

**总体结论：**  
OpenClaw 已是当前生态中规模最大、运行时最完整的项目之一，但并非所有维度都最成熟。QwenPaw 和 Hermes Agent 正在形成差异化平台能力；NanoBot、LobsterAI、OpenHuman 则在更聚焦的场景中争夺产品体验。未来一至两个版本，行业胜负手不会只是“接了多少模型”，而是谁能率先实现 **统一会话、可信插件、可靠任务终态、明确配置作用域和可验证发布闭环**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-16**  
**数据范围：过去 24 小时 GitHub 活动**  
**项目健康度：良好，WebUI 与多模型/多渠道支持推进明显；整体活跃度中高，但仍有长期 PR 积压及少量待处理 Bug。**

---

## 1. 今日速览

过去 24 小时共更新 **3 条 Issues**（1 条开启、2 条关闭）和 **10 条 PRs**（3 条待合并、7 条合并或关闭），日度交互量达到近期较高水平。  
工作重点集中于 **WebUI 展示与交互修复**、**MiniMax H3 图像模型接入**，以及 **Email 渠道的 OAuth 和收件人别名管理**。  
今日没有新版本发布，因此相关能力仍处于 PR 合并或待评审阶段，尚不能确认已进入正式发行版本。  
整体来看，项目开发节奏活跃、问题闭环效率较高，但长期开启的 Email 相关 PR 已累积数月，显示出一定的评审积压。

---

## 3. 项目进展

### 3.1 MiniMax H3 图像模型支持

PR [#6671](https://github.com/HKUDS/nanobot/pull/6671) 已关闭，尝试在现有 MiniMax 图像提供商中加入对 `MiniMax-H3-Image` 和 `MiniMax-H3-Image-Highspeed` 的支持，涵盖图像生成、尺寸配置和参考图编辑，同时保持旧版 `image-01` 请求兼容。

对应功能 Issue [#6635](https://github.com/HKUDS/nanobot/issues/6635) 也已关闭，表明需求已得到响应。由于没有新 Release，H3 支持是否已经进入可发布版本仍需结合分支合并状态及后续发行记录确认。

### 3.2 WebUI 文件引用和长代码展示修复

PR [#6672](https://github.com/HKUDS/nanobot/pull/6672) 已关闭，修复了文件样式行内代码被压缩为 basename 的问题。现在无法预览的文件引用会保留完整文本，例如 `pytest tests/test_agent.py` 不再仅显示为 `test_agent.py`，同时继续提供文件预览交互。

PR [#6670](https://github.com/HKUDS/nanobot/pull/6670) 已关闭，针对 Issue [#6662](https://github.com/HKUDS/nanobot/issues/6662) 修复了长单行行内代码被拆成独立横向滚动块的问题，使其在普通顶层段落中能够随正文正常换行。

这两项调整与对应 Issue [#6662](https://github.com/HKUDS/nanobot/issues/6662) 均已关闭，说明 WebUI Markdown 渲染问题形成了较完整的“问题—修复—关闭”闭环。

### 3.3 WebUI 命令会话状态可读性提升

PR [#6654](https://github.com/HKUDS/nanobot/pull/6654) 已关闭，改善 `exec_session` 状态展示：优先显示源命令，区分“操作本身”与“最后观察到的进程状态”，避免向用户暴露内部 session ID，或让已完成的检查看起来像已完成的命令。

这有助于提升 Agent 执行过程的透明度，减少用户误解命令状态的风险。

### 3.4 WebUI Goal 背景兼容性修复

PR [#6677](https://github.com/HKUDS/nanobot/pull/6677) 已关闭，为 Goal 区域设置显式继承的宽高，避免浏览器不支持 `@property` 时 CSS 自定义属性失效，进而导致背景尺寸异常、Goal 文本覆盖对话区的问题。

这是一项明确的跨浏览器稳定性修复。

### 3.5 Email 投递状态修复

PR [#5605](https://github.com/HKUDS/nanobot/pull/5605) 已关闭，修复 IMAP 邮件在真正投递给 Agent 前就被标记为 `\Seen` 的问题。修复后，只有实际完成投递的邮件才会进入已读状态，避免被过滤或未成功投递的邮件丢失。

该修复涉及邮件渠道的数据可见性和可靠性，价值较高。

### 3.6 MIMO 思考参数修复

PR [#3654](https://github.com/HKUDS/nanobot/pull/3654) 已关闭，为 MIMO provider 明确设置 `thinking_style="thinking_type"`，使扩展思考参数能够正确注入。

该问题源自较早的 PR，但今日完成更新并关闭，反映了维护者仍在清理跨 provider 的兼容性问题。

**整体推进判断：**  
今日项目主要完成了 WebUI 可读性、浏览器兼容性以及 Email/模型提供商层面的稳定性收尾，没有发布新版本。功能面覆盖较广，但多数成果仍需要经过合并审查或正式发版才能交付用户。

---

## 4. 社区热点

> 今日数据中的 Issues 评论数普遍为 0，PRs 未提供点赞数据，因此无法仅凭互动量判断“最热门”。以下按功能影响、持续时间和社区诉求明确程度列出重点事项。

### 4.1 MiniMax H3 图像模型接入

- Issue：[#6635](https://github.com/HKUDS/nanobot/issues/6635)
- PR：[#6671](https://github.com/HKUDS/nanobot/pull/6671)

**诉求：** 用户希望在 NanoBot 中直接使用 MiniMax 新一代 H3-Image 系列模型，包括高速版本、尺寸控制和参考图编辑，同时不能破坏旧 `image-01` 能力。

**社区意义：** 这是今日最明确的新模型兼容性需求，且 Issue 与 PR 已同步关闭，闭环速度较快。

### 4.2 WebUI 行内代码和文件引用展示

- Issue：[#6662](https://github.com/HKUDS/nanobot/issues/6662)
- PR：[#6670](https://github.com/HKUDS/nanobot/pull/6670)
- PR：[#6672](https://github.com/HKUDS/nanobot/pull/6672)

**诉求：** 长代码片段不应变成难以阅读的横向滚动块；文件引用不应丢失目录信息。

**社区意义：** 直接影响 Agent 输出中的命令、路径和代码可读性，是较典型的实际使用痛点。

### 4.3 Live buffer 输出与工具调用分离

- Issue：[#6673](https://github.com/HKUDS/nanobot/issues/6673)

**诉求：** 用户反馈实时输出缓冲区中的文本会被工具调用割开，完成后的最终输出与流式展示不一致。

**社区意义：** 该问题涉及流式响应可读性和消息边界管理。虽然目前没有评论或直接关联的 fix PR，但可能成为下一轮 WebUI 修复重点。

---

## 5. Bug 与稳定性

### 严重程度：高

#### Email 消息可能在实际投递前被标记为已读

- Issue/PR：[#5605](https://github.com/HKUDS/nanobot/pull/5605)
- 状态：已关闭
- Fix PR：已有，且对应 PR 已关闭

**影响：** 通过自发送、SPF/DKIM、allow-list 等过滤的邮件，在 Agent 实际接收前便可能被标记为 `\Seen`，存在漏处理或消息可见性错误的风险。

**评估：** 已形成明确修复方案，是今日对渠道可靠性影响最大的改进之一。

### 严重程度：中

#### Live buffer 中输出文本被工具调用割裂

- Issue：[#6673](https://github.com/HKUDS/nanobot/issues/6673)
- 状态：开启
- Fix PR：**暂无明确关联**

**影响：** 流式展示阶段可能把同一段输出拆成多个片段，降低长任务和工具调用场景下的可读性，也可能造成最终输出与实时视图不一致。

**建议：** 维护者应补充消息边界规则，明确文本增量、工具调用和完成事件之间的渲染顺序。

#### Goal 区域背景失效并可能覆盖对话内容

- Issue：无独立 Issue
- Fix PR：[#6677](https://github.com/HKUDS/nanobot/pull/6677)
- 状态：PR 已关闭
- Fix PR：已有

**影响：** 在不支持相关 `@property` 语法的浏览器中，Goal 背景尺寸可能失效，文本可能覆盖对话区。

**评估：** 已有针对性兼容性修复，但建议在正式版本前进行浏览器覆盖测试。

#### 文件引用被截断为文件名

- Issue：[#6662](https://github.com/HKUDS/nanobot/issues/6662)
- Fix PR：[#6672](https://github.com/HKUDS/nanobot/pull/6672)
- 状态：Issue 与 PR 均已关闭
- Fix PR：已有

**影响：** 路径和命令上下文丢失，可能导致用户无法确认 Agent 实际执行的文件或命令。

### 严重程度：低

#### 长行内代码变为横向滚动块

- Issue：[#6662](https://github.com/HKUDS/nanobot/issues/6662)
- Fix PR：[#6670](https://github.com/HKUDS/nanobot/pull/6670)
- 状态：Issue 与 PR 均已关闭
- Fix PR：已有

**影响：** 主要为阅读体验下降，极端长代码仍可能影响布局，但不会直接阻断功能。

#### 命令会话状态表述不清

- Issue：无独立 Issue
- Fix PR：[#6654](https://github.com/HKUDS/nanobot/pull/6654)
- 状态：PR 已关闭
- Fix PR：已有

**影响：** 用户可能误判命令是否仍在运行，或看到无助于理解的内部 session ID。

### 严重程度：低至中

#### MIMO 扩展思考参数未正确注入

- Issue：无独立 Issue
- Fix PR：[#3654](https://github.com/HKUDS/nanobot/pull/3654)
- 状态：PR 已关闭
- Fix PR：已有

**影响：** MIMO 模型可能无法按预期启用扩展思考模式，主要影响特定 provider 的功能正确性。

---

## 6. 功能请求与路线图信号

### 6.1 WebUI 自定义背景图

- PR：[#6674](https://github.com/HKUDS/nanobot/pull/6674)
- 状态：待合并
- 范围：图片选择、预览、移除、模糊和背景渐隐，并将外观配置持久化

**路线图判断：** 该 PR 已在今日更新，且覆盖个性化与可用性，具备进入近期版本的可能。但目前仍待合并，尚未形成稳定交付。

### 6.2 MiniMax H3 图像模型

- Issue：[#6635](https://github.com/HKUDS/nanobot/issues/6635)
- PR：[#6671](https://github.com/HKUDS/nanobot/pull/6671)
- 状态：Issue 与 PR 均已关闭

**路线图判断：** 属于明确且已实现的模型兼容性需求，具备进入下一版本的基础；需确认 PR 是否已合入目标分支以及何时发版。

### 6.3 Microsoft 委托 OAuth 支持

- PR：[#5609](https://github.com/HKUDS/nanobot/pull/5609)
- 状态：待合并
- 范围：Office365/Outlook 授权码流程、机密客户端和委托用户 OAuth

**路线图判断：** 顺应邮箱认证向 OAuth2 迁移的长期需求，技术方向明确，但 PR 自 2026-08-30 创建后仍未合并，纳入下一版本的确定性较低，需维护者优先审查。

### 6.4 Email 按收件人别名过滤

- PR：[#5606](https://github.com/HKUDS/nanobot/pull/5606)
- 状态：待合并
- 范围：同一邮箱配置多个投递别名时，仅处理指定收件人来源的邮件

**路线图判断：** 对共享收件箱和别名部署场景有实际价值，但同样面临长期积压问题，短期内是否进入版本取决于维护者收敛范围和测试状态。

### 6.5 流式输出与工具调用协同展示

- Issue：[#6673](https://github.com/HKUDS/nanobot/issues/6673)
- 状态：开启
- 关联 Fix PR：暂无

**路线图判断：** 这是当前唯一仍明确开放的功能性/交互性 Bug，可能进入近期 WebUI 修复队列，但尚无 PR 证据证明已进入排期。

---

## 7. 用户反馈摘要

### 主要痛点

1. **输出可读性不足**
   - 长代码块和流式文本被工具调用打断，增加理解 Agent 执行过程的成本。
   - 相关反馈：[Issue #6662](https://github.com/HKUDS/nanobot/issues/6662)、[Issue #6673](https://github.com/HKUDS/nanobot/issues/6673)。

2. **文件路径信息被截断**
   - 类似 `pytest tests/test_agent.py` 的内容只显示 `test_agent.py`，用户难以还原完整执行上下文。
   - 相关修复：[PR #6672](https://github.com/HKUDS/nanobot/pull/6672)。

3. **新模型接入存在时间差**
   - 用户已使用或需要使用 MiniMax H3-Image，但旧版 MiniMax 客户端仅支持 `image-01`。
   - 相关需求：[Issue #6635](https://github.com/HKUDS/nanobot/issues/6635)。

4. **邮箱认证需要适配 Microsoft 平台变化**
   - Office365/Outlook 正在淘汰基础认证，现有用户名密码方式存在持续维护和可用性风险。
   - 相关 PR：[PR #5609](https://github.com/HKUDS/nanobot/pull/5609)。

5. **共享邮箱需要精确控制邮件来源**
   - 多个别名投递到同一收件箱时，当前渠道可能处理不属于目标别名的邮件。
   - 相关 PR：[PR #5606](https://github.com/HKUDS/nanobot/pull/5606)。

### 满意度与闭环情况

今日新增 Issues 的评论数均为 0，暂无足够样本判断社区总体满意度。但从闭环表现看，MiniMax H3、WebUI 长代码、文件引用、Goal 背景及 Email 已读标记等问题均已有明确修复记录，说明维护者对已识别的技术问题响应较快。  
不过，实时输出被工具调用割裂的问题仍无明确修复 PR，是当前最值得跟踪的用户反馈。

---

## 8. 待处理积压

### 8.1 Live buffer 输出分割问题

- Issue：[#6673](https://github.com/HKUDS/nanobot/issues/6673)
- 创建时间：2026-11-15
- 状态：开放
- 风险：流式输出体验和消息边界可能继续影响用户对新工具调用模式的信任。

### 8.2 Microsoft Office365/Outlook OAuth PR

- PR：[#5609](https://github.com/HKUDS/nanobot/pull/5609)
- 创建时间：2026-08-30
- 状态：开放
- 风险：已存续约两个半月，涉及身份认证流程和凭据处理，积压时间较长；认证相关改动也需要更严格的安全审查。

### 8.3 Email 收件人别名过滤 PR

- PR：[#5606](https://github.com/HKUDS/nanobot/pull/5606)
- 创建时间：2026-08-30
- 状态：开放
- 风险：与 Microsoft OAuth PR 同期积压，可能受同一 Email 渠道重构或测试策略影响。

### 8.4 WebUI 自定义背景 PR

- PR：[#6674](https://github.com/HKUDS/nanobot/pull/6674)
- 创建时间：2026-11-15
- 状态：开放
- 风险：属于非阻断性增强，但涉及图片读取、持久化和跨设备显示，需确认存储配额、隐私和性能表现。

---

## 健康度结论

NanoBot 今日表现为**中高活跃、整体健康**：主要问题均有对应 PR，WebUI 和模型兼容性推进集中，Email 可靠性也有所改善。  
当前最值得关注的两点是：

1. 开放 Bug [#6673](https://github.com/HKUDS/nanobot/issues/6673) 尚无明确修复路径；
2. 两个长期开放的 Email PR [#5609](https://github.com/HKUDS/nanobot/pull/5609) 与 [#5606](https://github.com/HKUDS/nanobot/pull/5606) 已形成明显评审积压。

由于今日 **无新版本发布**，建议维护者优先明确已关闭 PR 的实际合并状态，并为下一次 Release 整理可验证的功能清单。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-16**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度：低活跃、维护状态待关注**

## 1. 今日速览

- 过去 24 小时 **Issue 更新为 0 条**，没有新开或活跃 Issue，也没有关闭记录，社区讨论面暂时停滞。
- 过去 24 小时共有 **3 条 PR 更新**，且均已关闭或合并；其中 2 条为批量合并修复 PR，1 条涉及 Telegram 与 Codex 编排功能。
- 今日 **无新版本发布**，因此暂无可确认的正式功能交付、破坏性变更或升级迁移事项。
- 今日没有明确的 Bug 修复、崩溃修复或回归修复说明可供验证；项目维护活动主要表现为历史 PR 的收尾。
- 综合来看，PicoClaw 今日整体处于**低活跃、收尾性维护状态**。虽然有 3 条 PR 状态推进，但没有开放 Issue、没有待合并 PR，也没有形成可见的版本发布节奏，需关注后续代码合入与社区响应是否恢复。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

暂无基于发布说明可确认的功能变更、破坏性变更或迁移要求。

---

## 3. 项目进展

### PR #2379：Telegram Codex orchestrator

- **状态：** 已关闭  
- **作者：** @Skezza  
- **更新时间：** 2026-11-15  
- **链接：** [PR #2379](https://github.com/sipeed/picoclaw/pull/2379)
- **内容概述：** PR 标题显示其目标是将 Telegram 与 Codex 进行编排集成，可能涉及通过 Telegram 远程触发或管理 Codex 工作流。摘要未提供完整变更清单，也没有明确的测试结果或兼容性说明。
- **进展判断：** 该 PR 已关闭，但现有数据无法确认其功能是否以其他 PR 形式进入主干。建议维护者补充关闭原因、替代 PR 或功能落地状态，避免功能需求与实现状态脱节。

### PR #1546：批量合并 5 个历史修复 PR

- **状态：** 已关闭  
- **作者：** @xuwei-xy  
- **更新时间：** 2026-11-15  
- **链接：** [PR #1546](https://github.com/sipeed/picoclaw/pull/1546)
- **涉及 PR：** [#1480](https://github.com/sipeed/picoclaw/pull/1480)、[#1479](https://github.com/sipeed/picoclaw/pull/1479)、[#1478](https://github.com/sipeed/picoclaw/pull/1478)、[#1473](https://github.com/sipeed/picoclaw/pull/1473)、[#1467](https://github.com/sipeed/picoclaw/pull/1467)
- **内容概述：** 汇总并合并多个已开放的修复 PR，说明项目存在一定数量的历史修复分支需要集中收敛。
- **进展判断：** 有助于减少修复分支分散和代码集成成本；但摘要未列出具体 Bug、影响范围与回归测试结果，因此无法量化稳定性改善幅度。

### PR #1555：批量合并 4 个历史修复 PR

- **状态：** 已关闭  
- **作者：** @xuwei-xy  
- **更新时间：** 2026-11-15  
- **链接:** [PR #1555](https://github.com/sipeed/picoclaw/pull/1555)
- **涉及 PR：** [#1390](https://github.com/sipeed/picoclaw/pull/1390)、[#1389](https://github.com/sipeed/picoclaw/pull/1389)、[#1383](https://github.com/sipeed/picoclaw/pull/1383)、[#1381](https://github.com/sipeed/picoclaw/pull/1381)
- **内容概述：** 集中合并多个历史修复分支，目标是清理和整合已有修复。
- **进展判断：** 对代码库整理有积极意义，但缺少逐项修复说明，无法确认这些修复是否已经随正式版本向用户交付。

### 今日整体推进程度

今日可量化的进展为：

- **3 条 PR 完成关闭/合并状态更新**
- **9 个历史修复 PR 被纳入 2 个批量合并 PR**
- **0 条新 Issue**
- **0 条待合并 PR**
- **0 个新版本**

项目完成了历史分支收尾，但缺少新功能正式落地和版本发布信号，整体推进幅度有限。

---

## 4. 社区热点

过去 24 小时没有 Issue 更新，3 条 PR 的评论数和点赞数均显示为 **0**，因此没有形成明显的社区讨论热点。

### 今日相对最值得关注的 PR

#### 1. Telegram Codex orchestrator

- **链接：** [PR #2379](https://github.com/sipeed/picoclaw/pull/2379)
- **热度：** 0 评论、0 点赞
- **诉求分析：** 标题反映的核心需求是将 Telegram 与 Codex 编排结合，可能面向移动端远程交互、聊天式任务下发、代理工作流触发等场景。
- **社区信号：** 热度偏低，无法判断需求规模；其关闭状态也使该方向是否继续推进变得不明确。

#### 2. 两项历史修复批量合并

- **链接：** [PR #1546](https://github.com/sipeed/picoclaw/pull/1546)、[PR #1555](https://github.com/sipeed/picoclaw/pull/1555)
- **热度：** 0 评论、0 点赞
- **诉求分析：** 反映维护重点偏向整合既有修复，而非引入新能力。
- **社区信号：** 缺少逐项说明和用户反馈，无法评估这些历史问题对实际用户的影响程度。

---

## 5. Bug 与稳定性

过去 24 小时**没有新报告的 Bug、崩溃或回归 Issue**，因此没有可按严重程度排列的具体故障。

不过，两项批量合并 PR 涉及共 9 个历史修复 PR：

| 严重程度 | 关联条目 | 修复状态 |
|---|---|---|
| 未确认 | [#1480](https://github.com/sipeed/picoclaw/pull/1480)、[#1479](https://github.com/sipeed/picoclaw/pull/1479)、[#1478](https://github.com/sipeed/picoclaw/pull/1478)、[#1473](https://github.com/sipeed/picoclaw/pull/1473)、[#1467](https://github.com/sipeed/picoclaw/pull/1467) | 已由 [PR #1546](https://github.com/sipeed/picoclaw/pull/1546) 批量合并/关闭 |
| 未确认 | [#1390](https://github.com/sipeed/picoclaw/pull/1390)、[#1389](https://github.com/sipeed/picoclaw/pull/1389)、[#1383](https://github.com/sipeed/picoclaw/pull/1383)、[#1381](https://github.com/sipeed/picoclaw/pull/1381) | 已由 [PR #1555](https://github.com/sipeed/picoclaw/pull/1555) 批量合并/关闭 |

**稳定性判断：**

- 今日没有新增稳定性事件，表面上无新增风险暴露。
- 同时，批量合并缺少 Bug 描述、严重程度和测试记录，无法判断实际修复效果。
- 9 个修复分支集中收敛有利于减少代码分叉，但也应核对合并后的回归测试结果。
- 由于今日无新版本，不能确认上述修复是否已对正式版用户生效。

---

## 6. 功能请求与路线图信号

### Telegram 与 Codex 编排集成

- **信号来源：** [PR #2379](https://github.com/sipeed/picoclaw/pull/2379)
- **可能方向：**
  - 通过 Telegram 远程触发 Codex 任务；
  - 在聊天界面中管理智能体或执行工作流；
  - 结合 PicoClaw 的个人 AI 助手能力，提供移动端控制入口；
  - 支持任务状态回传、审批和多轮交互。
- **纳入下一版本的概率：** **暂无法确认**  
  该 PR 已关闭，现有数据没有提供替代 PR、维护者结论或发布计划。若相关实现已通过其他 PR 合入，则可能进入后续版本；否则该需求仍处于未明确状态。
- **建议：** 维护者明确关闭原因，并补充功能是否将继续开发、替代实现链接及预期版本。

### 修复整合与发布闭环

- **信号来源：** [PR #1546](https://github.com/sipeed/picoclaw/pull/1546)、[PR #1555](https://github.com/sipeed/picoclaw/pull/1555)
- **路线图含义：** 当前可观察到的维护重点是历史修复集成，而非大规模新增功能。
- **下一版本可能性：** 这些修复可能已经存在于主干，但只有随新版本发布后才会成为用户可感知更新。
- **建议：** 发布版本说明，逐项列出修复内容、影响版本和升级注意事项。

---

## 7. 用户反馈摘要

过去 24 小时没有 Issue 评论或新增 PR 讨论，因此无法提炼真实用户的：

- 使用痛点；
- 崩溃与异常场景；
- 满意度或不满反馈；
- 对 Telegram/Codex 集成方向的具体需求。

目前唯一可从 PR 标题与摘要观察到的用户侧潜在诉求，是通过 Telegram 获得更便捷的 Codex 或智能体远程编排能力，来源为 [PR #2379](https://github.com/sipeed/picoclaw/pull/2379)。不过，由于没有评论和点赞数据，不能据此判断该诉求的普遍性或优先级。

---

## 8. 待处理积压

### 当前可直接观察的积压

- 今日更新的 3 条 PR 均已关闭或合并，**没有待合并 PR**。
- 今日没有开放或活跃 Issue，**未发现正在等待响应的 Issue**。
- 最新 Releases 页面显示**无新版本**，暂无可用于判断发布积压的历史基线。

### 需要维护者关注的历史事项

1. **批量修复 PR 的信息不完整**  
   [PR #1546](https://github.com/sipeed/picoclaw/pull/1546) 和 [PR #1555](https://github.com/sipeed/picoclaw/pull/1555) 未列明具体修复内容、测试情况及影响版本，容易造成修复记录与发布说明脱节。

2. **Telegram Codex 编排方向状态不清**  
   [PR #2379](https://github.com/sipeed/picoclaw/pull/2379) 已关闭，但未给出明确结论。建议确认该需求是被放弃、被替代，还是等待后续重构。

3. **发布节奏不足**  
   今日无新版本，而当日已有至少 9 个历史修复 PR 被批量收敛。建议尽快整理版本说明并发布，以使用户实际获得这些稳定性改进。

4. **社区响应缺乏可见数据**  
   今日 0 Issue、0 PR 评论、0 点赞，表明社区互动较弱。维护者可通过更新 Issue 标签、补充路线图或发布版本说明恢复可观察性。

---

## 结论

PicoClaw 今日没有出现新增 Issue 或版本发布，核心活动是关闭 **3 条 PR**，其中两项批量整合了 **9 个历史修复分支**。项目短期代码维护压力有所下降，但功能侧仅出现 Telegram/Codex 编排这一条方向性信号，且对应 PR 已关闭，路线图状态不明确。

**项目健康度评估：中等偏低。**  
优势是历史修复正在收敛、没有新增待合并 PR；风险在于缺少版本发布、社区讨论和可验证的测试/修复说明。当前最需要推进的是明确功能方向、补全变更记录，并尽快发布包含历史修复的新版本。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-11-16**  
**统计范围：过去 24 小时**  
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

## 今日速览

- 过去 24 小时共更新 **2 个 Issues**，均处于开放状态；未关闭 Issue、无新增评论或点赞。
- 过去 24 小时 **没有 PR 更新**，也没有已合并或关闭的 PR；今日没有代码层面的可见推进。
- 今日 **未发布新版本**，最新 Issues 的 QA 环境仍标注为 **v1.4.1**。
- 当前议题集中在本地/注册表模型提供商场景：包括注册表提供商之间的故障切换，以及慢速本地 LLM 的主模型调用超时配置。
- 整体活跃度偏低，但问题定位较具体；由于缺少讨论、PR 和发布闭环，健康度暂评为 **中性偏弱，需关注维护响应**。

---

## 项目进展

今日无 PR 更新、合并或关闭记录，因此没有可确认的功能交付或缺陷修复进展。

### 今日项目推进情况

| 指标 | 数量 | 说明 |
|---|---:|---|
| Issues 更新 | 2 | 均为新开或活跃 Issue |
| Issues 关闭 | 0 | 暂无问题闭环 |
| PR 更新 | 0 | 无待合并 PR |
| PR 合并/关闭 | 0 | 无代码合入 |
| 新版本发布 | 0 | 无发布活动 |

**判断：** 今日项目主要处于问题收集与需求澄清阶段。由于两个 Issue 均无评论、无点赞且尚无关联修复 PR，暂不能确认已有开发工作进入正式交付流程。

---

## 社区热点

今日没有足够多的评论或反应数据形成高热度讨论。按问题主题与潜在影响，可关注以下两个 Issue。

### 1. 注册表提供商之间不支持故障切换

- **Issue：** [#8173 Support failover between registry providers (e.g. Ollama → Ollama)](https://github.com/nearai/ironclaw/issues/8173)
- **作者：** @n4s3r
- **状态：** Open
- **创建/更新时间：** 2026-11-15
- **评论与反应：** 0 评论、0 点赞

**核心诉求：**

当前 `NEARAI_FALLBACK_MODEL` 仅适用于 NEAR AI 后端。当主模型采用 Ollama 等注册表提供商时，代码路径 `crates/domains/ironclaw_llm/src/lib.rs` 中通过 `create_llm_provider_with_config(&fallback_config, ...)` 构造回退模型，但该路径始终创建 Near AI provider，导致注册表提供商之间无法按预期故障切换。

**背后的需求：**

- 支持 Ollama 等注册表提供商之间的主备切换。
- 避免本地模型不可用、连接失败或模型缺失时，整个请求链路直接失败。
- 提升本地部署、私有化部署和多提供商环境下的可用性。

### 2. 慢速本地 LLM 的主模型调用空闲超时不可配置

- **Issue：** [#8172 [qa-bug] [QA] Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable for slow local LLMs](https://github.com/nearai/ironclaw/issues/8172)
- **作者：** @n4s3r
- **状态：** Open
- **创建/更新时间：** 2026-11-15
- **评论与反应：** 0 评论、0 点赞
- **报告环境：** hosted-staging（crab shack）
- **报告版本：** 1.4.1

**核心诉求：**

将 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 调整为可配置项，以适配推理速度较慢的本地 LLM。Issue 指出问题位于 Agent Loop 的模型调用空闲 watchdog，具体涉及 `HostManagedLoopModelPort` 与 LLM provider timeout。

**背后的需求：**

- 允许用户按模型硬件、量化方式和推理负载调整超时时间。
- 避免慢速本地模型仍在正常生成时被 watchdog 提前终止。
- 改善 Ollama 等本地部署场景下的长任务稳定性。

---

## Bug 与稳定性

### P1：高影响——慢速本地 LLM 可能被空闲 watchdog 提前终止

- **问题：** [#8172 — Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable for slow local LLMs](https://github.com/nearai/ironclaw/issues/8172)
- **影响范围：** Agent Loop、模型调用超时、本地 LLM、慢速推理任务。
- **潜在后果：** 模型调用被过早中断、任务失败或重试，表现为超时相关的误报。
- **严重程度：** **高**。直接影响本地模型可用性，但 Issue 未提供崩溃、影响用户数或生产事故数据，因此暂不判定为 P0。
- **Fix PR：** **无**。
- **建议关注点：**
  1. 确认超时是硬编码固定值，还是已有环境变量但优先级或读取路径存在问题。
  2. 验证 watchdog 应基于“无数据返回时长”还是“完整调用总时长”触发。
  3. 补充慢模型与快速模型的边界测试，并避免直接放宽所有请求的默认超时。

### P2：中影响——注册表提供商的回退链无法按配置工作

- **问题：** [#8173 — Support failover between registry providers](https://github.com/nearai/ironclaw/issues/8173)
- **影响范围：** `NEARAI_FALLBACK_MODEL`、注册表模型提供商、Ollama 等本地/可配置 provider、主备模型切换。
- **潜在后果：** 主 provider 故障时无法切换至配置的回退 provider；代码可能错误地实例化 Near AI provider。
- **严重程度：** **中**。属于配置契约与故障恢复能力缺陷；若部署高度依赖本地 provider，可用性影响会明显上升。
- **Fix PR：** **无**。
- **建议关注点：**
  1. 明确 fallback 配置是否需要显式保存 provider 类型。
  2. 检查 fallback provider 工厂是否错误复用 Near AI 专属构造逻辑。
  3. 增加 Ollama → Ollama、Ollama → NEAR AI、NEAR AI → Ollama 的测试覆盖。

---

## 功能请求与路线图信号

### 明确提出的功能需求

1. **注册表 provider 的通用故障切换**
   - 来源：[Issue #8173](https://github.com/nearai/ironclaw/issues/8173)
   - 目标：让 `NEARAI_FALLBACK_MODEL` 的语义扩展到注册表提供商，或引入更通用的 fallback provider 配置。
   - 路线图判断：需求具体，且与现有 provider 工厂代码直接相关，具备进入近期修复候选的条件；但当前无 PR，尚不能确认已纳入下一版本。

2. **主模型调用空闲超时可配置**
   - 来源：[Issue #8172](https://github.com/nearai/ironclaw/issues/8172)
   - 目标：允许用户配置 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT`，以适配不同本地模型和硬件性能。
   - 路线图判断：属于配置能力与稳定性改进，范围相对明确，适合近期迭代；当前仍需维护者确认配置名称、默认值和向后兼容策略。

### 下一版本可能纳入的内容

由于今日没有新版本、PR 或路线图说明，只能基于 Issue 内容进行条件性判断：

- 若下一版本以“本地模型可靠性”为主题，**#8172** 很可能优先进入发布范围，因为它直接影响慢速模型的正常执行。
- **#8173** 的改动可能涉及配置结构、provider 工厂和兼容性，适合作为独立修复或小版本功能纳入。
- 两项需求均为 **0 评论、0 点赞**，且没有维护者确认，因此不能视为已正式排期。

---

## 用户反馈摘要

今日两个 Issue 均无评论，因此没有可提炼的社区口碑、满意点或明确的不满反馈。可从报告内容中归纳出以下实际使用痛点：

### 使用场景

- 用户正在使用 **Ollama 等本地模型提供商**。
- 部署环境包含慢速本地 LLM，现有固定空闲超时可能无法覆盖模型推理时间。
- 用户需要主模型失败后自动切换到备用模型，以减少人工干预。

### 用户痛点

1. **配置能力与实际部署场景不匹配**
   - 本地模型硬件和推理速度差异较大，统一超时难以兼顾快速调用与慢速推理。

2. **故障切换行为与配置预期不一致**
   - 用户配置了 fallback，但回退路径没有按 provider 类型构造，可能无法真正实现所配置的主备切换。

3. **缺少公开讨论与响应信号**
   - 两个 Issue 均无评论、点赞或维护者回复，尚无法确认优先级、目标版本及修复方式。

### 满意度判断

今日没有足够反馈判断总体满意度。当前更明确的信号是：相关功能已能支撑基础使用，但在**慢速模型容错**和**多 provider 故障切换**方面存在配置与实现缺口。

---

## 待处理积压

在所提供的过去 24 小时数据中，没有足够历史数据识别长期未响应的 Issue 或 PR。不过，以下两个刚进入队列的事项需要及时响应，避免形成新积压：

- **[#8172 — Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable](https://github.com/nearai/ironclaw/issues/8172)**  
  建议维护者确认严重程度、配置形式、默认值及目标版本。该问题会直接影响慢速本地模型的可用性，优先级应高于普通体验优化。

- **[#8173 — Support failover between registry providers](https://github.com/nearai/ironclaw/issues/8173)**  
  建议确认现有 fallback 配置的兼容边界，判断是修复 provider 构造逻辑，还是引入新的显式配置字段，并补充对应测试。

## 今日结论

IronClaw 今日没有代码合入或版本发布，新增讨论集中于本地模型可靠性。两项需求——**慢速模型超时可配置**与**注册表 provider 故障切换**——均具备明确的问题指向，但尚无讨论、修复 PR 或发布承诺。当前项目健康度评估为 **中性偏弱**：问题发现质量尚可，交付与维护响应仍不足。短期应优先处理 [#8172](https://github.com/nearai/ironclaw/issues/8172)，随后推进 [#8173](https://github.com/nearai/ironclaw/issues/8173) 的设计确认与测试闭环。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报｜2026-11-16

## 1. 今日速览

- 过去 24 小时共更新 **1 个 Issue、2 个 PR**，另有 **0 个版本发布**。
- 今日唯一 Issue 为账号封禁申诉，说明当前用户支持压力主要集中于**账号状态与风控申诉**，而非功能缺陷。
- 两个 PR 均处于待合并状态，分别指向 **PPT 引导式创作体验**和 **MCP OAuth 一键接入及通用化**；目前尚无 PR 在今日合并或关闭。
- 从数据看，项目今日活跃度偏低但方向明确：功能开发持续推进，发布侧暂无动作；整体健康度可评为**中等偏稳**，主要风险是 PR 依赖链、长期积压以及账号风控问题缺少公开处置进展。

---

## 3. 项目进展

> 今日没有合并或关闭的 PR，因此暂无可确认进入主分支的更新。

### 进行中的重要 PR

#### PPT 首页改为可配置示例，并支持引导式封面创建

- **PR**：[#3072 — feat(ppt): add configurable homepage examples and guided cover creation](https://github.com/netease-youdao/LobsterAI/pull/3072)
- **状态**：OPEN，待合并
- **作者**：@btc69m979y-dotcom
- **创建时间**：2026-11-13
- **最近更新**：2026-11-16
- **涉及模块**：renderer、main、cowork

该 PR 计划把 PPT 首页的文字快捷入口替换为可配置的视觉化示例。用户可打开任一示例卡片，直接试用预置内容或自行定制，并基于内容生成可继续编辑的匹配封面，随后进入完整演示文稿制作流程；图片创建仍作为默认首页标签。

**推进价值：**

- 降低 PPT 首次使用门槛，改善从“选择模板”到“生成完整演示文稿”的连续体验。
- 将预置内容与可编辑封面串联，有望提高功能发现率与首次转化率。
- 首页示例可配置，后续更容易根据用户偏好和运营需求调整。

**风险与关注点：**

- PR 尚未合并，实际效果还未进入正式版本。
- 新流程涉及首页、示例配置、封面生成和编辑器衔接，建议重点验证生成失败回退、封面与正文风格一致性，以及旧入口的兼容体验。

#### 新增 Lynxce Omni AI 一键 MCP OAuth 入口与内置 Skill

- **PR**：[#2875 — feat(mcp): add Lynxce Omni AI as a one-click MCP OAuth entry and bundled skill](https://github.com/netease-youdao/LobsterAI/pull/2875)
- **状态**：OPEN，待合并
- **作者**：@alison-xx
- **创建时间**：2026-10-15
- **最近更新**：2026-11-15
- **涉及模块**：renderer、docs、main、openclaw、skills

该 PR 将“灵策全能 AI / Lynxce Omni AI”加入 MCP 市场，并提供一键 OAuth 接入入口及配套 Skill。更关键的是，它尝试让本地注册表条目能够以通用方式声明 MCP OAuth，从而减少未来新增 OAuth 服务所需的定制代码。

**推进价值：**

- 扩展第三方 AI 服务接入渠道，降低用户配置 MCP 的成本。
- 通用 OAuth 声明机制可减少后续服务接入的重复开发，具备平台化意义。
- Skill 随服务一起提供，有利于形成“连接后即可使用”的完整体验。

**风险与关注点：**

- PR 明确依赖 [#2874（远程 MCP OAuth 登录）](https://github.com/netease-youdao/LobsterAI/pull/2874)，属于堆叠式分支；在依赖合入前，独立合入可能存在集成风险。
- 该 PR 自 2026-10-15 创建后仍保持开放，已超过一个月，提示依赖链或评审节奏可能影响交付。

### 今日整体推进程度

今日没有代码实际进入主分支，功能层面的净推进主要体现在：

- **PPT 工作流体验改进**继续完善；
- **MCP 服务接入与 OAuth 通用化**继续推进；
- 暂无发布、合并或修复闭环，因此不能将这些能力视为已对用户正式开放。

---

## 4. 社区热点

### 账号被禁用并申请解封

- **Issue**：[#3094 — 申诉：账号被禁用，申请解封](https://github.com/netease-youdao/LobsterAI/issues/3094)
- **状态**：OPEN
- **作者**：@mikahsb-sudo
- **创建/更新时间**：2026-11-16
- **评论数**：1
- **点赞数**：0

这是今日唯一 Issue，也是最新更新的 Issue。用户在桌面客户端登录时收到“账号已被禁用”提示，欢迎页登录跳转后直接报错，无法进入应用。用户说明此前曾通过本地反向代理调用 LobsterAI 内置模型接口，推测可能触发风控；目前已停止代理、清理本地凭据和 Token，并承诺仅通过官方客户端使用内置模型。

### 热点背后的主要诉求

1. **账号恢复与人工复核**：用户当前最直接的目标是解除封禁、恢复客户端使用。
2. **明确封禁边界**：用户需要知道反向代理、本地调用或 Token 使用方式与账号风控规则之间的关系。
3. **补充可执行的申诉材料**：Issue 中已说明使用背景、整改动作和后续使用方式，体现出用户希望维护者基于这些信息进行人工复核。
4. **避免“登录成功但无法使用”的不透明体验**：欢迎页跳转后直接报错，用户难以判断是账号状态、客户端问题还是服务异常。

### PR 热度说明

今日更新的两个 PR 均未提供评论数和点赞数，因此不能将它们认定为社区讨论最活跃的项目：

- [PR #3072](https://github.com/netease-youdao/LobsterAI/pull/3072) 是今日更新的新功能 PR。
- [PR #2875](https://github.com/netease-youdao/LobsterAI/pull/2875) 虽非今日创建，但持续更新，反映 MCP OAuth 接入仍有开发关注。

---

## 5. Bug 与稳定性

### 严重：账号被禁用，客户端无法进入应用

- **Issue**：[#3094 — 申诉：账号被禁用，申请解封](https://github.com/netease-youdao/LobsterAI/issues/3094)
- **严重程度**：**高**
- **影响范围**：被禁用账号无法通过桌面客户端登录和继续使用产品，属于**账号级阻断**。
- **是否已有 fix PR**：**未发现**。现有数据中没有任何 PR 明确修复登录、封禁状态展示或账号申诉流程。
- **当前状态**：Issue 仍为 OPEN，仅有 1 条评论，尚无公开处理结论。

**稳定性判断：**

- 今日没有新的崩溃、回归或明确代码缺陷报告。
- 但该问题直接影响核心登录路径，且涉及风控策略，优先级应高于一般功能体验优化。
- 建议维护者尽快确认封禁原因、审核申诉，并评估客户端是否能提供更清晰的状态说明与申诉入口。

### 严重：暂无明确修复闭环的 Bug

今日数据中没有其他 Bug、崩溃或回归 Issue，也没有已合并的修复 PR，因此无法确认项目今日是否产生了稳定性修复。

---

## 6. 功能请求与路线图信号

### PPT 示例驱动与引导式封面生成

- **来源 PR**：[#3072](https://github.com/netease-youdao/LobsterAI/pull/3072)

这是今日最明确的功能路线图信号。其重点不是单独增加模板，而是构建一条完整链路：

**首页视觉示例 → 试用或定制预置内容 → 生成匹配的可编辑封面 → 继续生成完整 PPT。**

该方向可能进入下一版本，原因包括：

- PR 在今日仍有更新，说明开发活动未停滞。
- 修改范围覆盖 renderer、main、cowork，涉及前后端与协作流程，具备一定系统性。
- 首页入口、示例内容和封面生成联动，能够直接改善用户从启动到产出的体验。

不过，在 PR 合并并完成回归验证前，不宜将其列为已确定发布内容。

### MCP OAuth 一键接入与通用注册机制

- **来源 PR**：[#2875](https://github.com/netease-youdao/LobsterAI/pull/2875)
- **依赖 PR**：[#2874](https://github.com/netease-youdao/LobsterAI/pull/2874)

该 PR 释放出两项路线图信号：

1. 持续扩充 MCP 市场中的第三方 AI 服务。
2. 从单个服务定制转向通用 OAuth 配置能力，降低后续接入成本。

其进入下一版本的概率取决于依赖 PR #2874 的合入情况、OAuth 安全验证以及多服务兼容性。由于 #2875 已开放较长时间，当前应视为**方向明确但交付存在阻塞风险**的路线图项目。

### 账号风控与申诉体验

- **来源 Issue**：[#3094](https://github.com/netease-youdao/LobsterAI/issues/3094)

虽然 Issue 没有直接提出产品功能需求，但暴露了潜在的路线图需求：

- 在客户端内清晰展示账号被禁用原因及可采取的整改措施；
- 提供标准化的账号申诉入口和材料清单；
- 对可能触发风控的非官方调用方式给出更明确提示；
- 区分账号禁用、Token 失效和客户端登录异常，避免用户只能通过社区 Issue 求助。

目前没有对应 PR 或明确排期，是否进入下一版本尚无法判断。

---

## 7. 用户反馈摘要

### 真实使用场景

- 用户会将 LobsterAI 的内置模型接口接入个人常用本地工具，通过本地反向代理调用。
- 该场景具有明显的个人开发和工作流集成需求，用户强调未商业化、未对外提供服务。
- 用户希望恢复账号后，只通过官方 LobsterAI 客户端使用内置模型。

### 主要痛点

- **账号被直接阻断**：欢迎页登录跳转后提示“账号已被禁用”，无法进入应用。
- **缺少自解释的风控反馈**：用户只能推测反向代理调用可能触发风控，无法从产品反馈中确定具体原因。
- **申诉渠道不够明确**：目前只能在 GitHub 提交 Issue，缺少产品内标准申诉路径或官方材料指引。

### 整改与配合态度

用户已主动采取以下措施：

- 停止全部反向代理服务；
- 清理本地保存的登录凭据和 Token；
- 承诺后续仅通过官方客户端使用内置模型。

这表明用户有较强配合意愿，维护者可通过账号后台核查调用与登录记录，并给出明确复核结论。

### 满意与不满意点

- **满意点**：官方客户端及其内置模型能力是用户持续使用和恢复账号的核心价值。
- **不满意点**：账号风控规则边界不透明，且一旦触发封禁，会直接导致客户端不可用；官方客户端未提供足够的预警或自助恢复路径。
- 当前 Issue 只有 1 条评论、0 点赞，样本量有限，不能据此推断整体用户满意度。

---

## 8. 待处理积压

### PR #2875：创建近一个月仍未合并

- **链接**：[PR #2875 — Lynxce Omni AI MCP OAuth 入口与 bundled skill](https://github.com/netease-youdao/LobsterAI/pull/2875)
- **创建时间**：2026-10-15
- **最近更新**：2026-11-15
- **状态**：OPEN
- **积压特征**：属于长期开放 PR，且依赖 [#2874](https://github.com/netease-youdao/LobsterAI/pull/2874)。

**建议维护者关注：**

- 确认依赖 PR #2874 的评审与合入时间；
- 明确堆叠分支的合并顺序，避免长期保留无法独立验证的 PR；
- 核查 OAuth 凭据保存、撤销、过期处理及多服务兼容性。

### PR #3072：仍在快速迭代，尚需推动合并

- **链接**：[PR #3072 — PPT 可配置首页示例与引导式封面创建](https://github.com/netease-youdao/LobsterAI/pull/3072)
- **创建时间**：2026-11-13
- **最近更新**：2026-11-16
- **状态**：OPEN

该 PR 尚不算长期积压，但涉及多个核心区域，建议尽快完成代码评审和交互验证，避免临近发布前集中集成。

### Issue #3094：账号阻断问题需要明确闭环

- **链接**：[Issue #3094 — 申诉：账号被禁用，申请解封](https://github.com/netease-youdao/LobsterAI/issues/3094)
- **创建时间**：2026-11-16
- **状态**：OPEN
- **积压特征**：虽为今日新建，但属于高影响账号级阻断问题，不能仅等待常规社区响应。

**建议维护者关注：**

- 尽快完成人工风控复核；
- 公开说明可否解封及依据；
- 若不能立即恢复，也应给出申诉状态、预计处理时间和所需补充材料；
- 排查客户端是否可以展示更明确的封禁原因及申诉入口。

---

## 今日健康度结论

**综合健康度：中等偏稳。**

- **开发活动**：有持续功能推进，PPT 工作流和 MCP OAuth 是当前两条清晰主线。
- **交付状态**：2 个 PR 均未合并、0 个版本发布，今日没有形成用户可感知的新版本产出。
- **稳定性**：没有新增崩溃或回归报告，但出现 1 个账号级阻断 Issue，且没有修复闭环。
- **社区响应**：Issue 仅 1 条评论、0 点赞；PR 缺少互动指标，尚无法确认评审响应速度。
- **主要风险**：账号风控体验不透明、PR 依赖链较长、长期开放 PR 的交付效率，以及功能开发与正式发布之间缺少闭环。

**今日优先事项：**

1. 尽快处理并公开回复 [Issue #3094](https://github.com/netease-youdao/LobsterAI/issues/3094)。
2. 推进 [PR #3072](https://github.com/netease-youdao/LobsterAI/pull/3072) 的评审、验证与合并。
3. 明确 [PR #2875](https://github.com/netease-youdao/LobsterAI/pull/2875) 与其依赖 [PR #2874](https://github.com/netease-youdao/LobsterAI/pull/2874) 的合入顺序和交付时间。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-16**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**整体判断：活跃度高，但 2.3.0 版本发布后的问题集中度较高，当前以“修复回归、完善插件生态、推进底层会话架构升级”为主。**

---

## 1. 今日速览

过去 24 小时共更新 **22 条 Issues**（其中 **17 条新开或活跃、5 条关闭**）和 **25 条 PRs**（**21 条待合并、4 条合并/关闭**），日均社区吞吐较高，说明项目正处于快速迭代与问题集中收敛期。

今日没有新版本发布；当前工作重点集中在 **2.3.0 发布后的稳定性修复**，包括微信、企业微信、飞书、认证、附件路径、定时任务和后台启动等关键路径。

PR 侧同时推进了插件 SDK 1.1、会话存储重构、任务推理等级、前端包体优化及 Web Search Provider 扩展，显示出项目正从“功能扩张”转向“平台化与工程化建设”。

整体项目健康度可评估为 **活跃但承压**：贡献者和用户参与度高、修复响应较快，但大量问题集中于正式版升级后的跨平台和多通道回归，发布质量与升级迁移仍需加强。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无需要展开的 Release 更新、破坏性变更或迁移说明。

不过，以下变更已在 PR 队列中推进，表明下一版本可能重点覆盖：

- 插件 SDK 1.1 扩展；
- 微信、飞书通道稳定性修复；
- Console 初始包体优化；
- Cron 任务独立推理等级与 Token 用量统计；
- 会话历史持久化及 Turn 分叉能力；
- 插件版本检查与更新机制。

---

## 3. 项目进展

### 3.1 今日合并或关闭的重要 PR

#### 微信发送回执兼容性修复

[PR #8715](https://github.com/agentscope-ai/QwenPaw/pull/8715) 已关闭，针对微信成功发送时仅返回 `message_id`、却因缺少完整响应体而被误报为 `PLATFORM_RESULT_UNKNOWN` 的问题。该修复只覆盖 #8709 中的一个子问题。

#### 插件恢复失败时延迟启用

[PR #8721](https://github.com/agentscope-ai/QwenPaw/pull/8721) 已关闭，在插件恢复流程中引入重试，避免因一次性恢复失败导致微信通道无法正常启动。

#### 通道插件更新、版本守卫与官方市场发布

[PR #8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) 已关闭，新增通道插件更新动作、版本检查，以及官方插件市场的发布机制。该 PR 规模较大，为后续插件生命周期管理奠定基础。

#### 通道 Worker 运行环境修复

[PR #8692](https://github.com/agentscope-ai/QwenPaw/pull/8692) 已关闭，为通道 Worker 保留 `HOME` 和 `QWENPAW_WORKING_DIR` 等运行时目录上下文，修复 Linux 环境下官方插件 Worker 因无法确定 Home 目录而崩溃的问题。

### 3.2 今日重点待合并 PR

#### 插件 SDK 1.1 与生命周期能力

[PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) 将插件 SDK 扩展至 1.1，涉及请求身份、模型选择、会话历史作用域、权限与资源生命周期，是今日最值得关注的平台级 PR。规模标记为 XXXL，合并成本和兼容性风险也较高。

#### Append-only 会话存储与原生 Turn 分叉

[PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) 引入持久化 SQLite 会话历史、分页历史和原生 Turn 分叉，目标是替代易变快照与大历史窗口加载方式。该 PR 对运行时恢复、重连和历史一致性具有基础性意义，但仍是 XXXL 变更。

#### Cron 任务独立推理等级

[PR #8476](https://github.com/agentscope-ai/QwenPaw/pull/8476) 为 `JobRuntimeSpec` 增加 `thinking_level` 和可选 `thinking_budget`，允许定时任务按任务配置推理强度，缓解所有 Cron 任务继承 Agent 全局设置的问题。

#### Console 初始包体大幅优化

[PR #8761](https://github.com/agentscope-ai/QwenPaw/pull/8761) 报告初始静态包体由 **9.972 MiB 降至 3.053 MiB，减少 69.4%**；Brotli 后由 **2.573 MiB 降至 0.818 MiB，减少 68.2%**，同时修复开发恢复代理问题。

#### 飞书重连监督器容错

[PR #8749](https://github.com/agentscope-ai/QwenPaw/pull/8749) 修复飞书断线清理抛出异常后，重连监督器直接永久退出的问题，与 [#8748](https://github.com/agentscope-ai/QwenPaw/issues/8748) 直接对应，已有明确 fix PR。

#### 微信账号冲突误判与工作区隔离

[PR #8720](https://github.com/agentscope-ai/QwenPaw/pull/8720) 修复因已保存凭据、共享路径或工作区 ID 大小写差异而误判微信账号正在使用的问题，并强化工作区隔离，与 [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)、[#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755) 高度相关。

#### Web Search Provider 扩展

- [PR #8741](https://github.com/agentscope-ai/QwenPaw/pull/8741)：增加 Olostep Provider；
- [Issue #8758](https://github.com/agentscope-ai/QwenPaw/issues/8758)：提出将 Keenable 作为可选 Provider。

这两项显示搜索工具生态正在扩展，但目前主要仍由外部 Provider 贡献驱动。

### 3.3 进展评估

今日已合并/关闭的 PR 主要完成了微信和插件 Worker 的若干定点修复，方向明确但覆盖面有限。更大的架构升级——插件 SDK、会话存储、Cron 推理控制及前端性能优化——仍处于待合并状态。

**整体推进程度：中等偏快。**  
短期可用性有改善，但会话语义、插件生命周期和通道生态的长期升级尚未完成闭环。

---

## 4. 社区热点

### 4.1 自动记忆搜索重复调用后无法回复

[#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) 是今日评论最多的 Issue，共 **4 条评论**，现已关闭。

用户反馈开启 Automatic Memory Search 后，同一回合会反复以相同或近似 query 调用 `memory_search`；达到保护阈值后，虽然重复调用被拦截，但最终回复和恢复流程仍无法完成。这是典型的“防循环机制生效，但失败降级路径不完整”。

### 4.2 Cron Token 用量未写入 `turns.jsonl`

[#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705) 有 **2 条评论**，涉及 Console 用量面板遗漏 Cron 消耗。

对话通道会在每轮结束后通过 `_commit_turn_usage` 写入用量，但 Cron 执行路径缺少等价持久化逻辑。该问题直接影响用户对 Agent 成本、账单和任务运行效率的判断。

### 4.3 附件路径被截断至盘符根目录

[#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) 有 **2 条评论**，自 2.3.0-beta.1 起在多个 Beta 版本复现。

文件本身已成功保存，但传给模型的本地路径被截断成 `C:\`，导致图片无法加载。这是影响多模态输入和 Windows 用户的严重回归。

### 4.4 定时任务第二次模型调用连接失败

[#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) 有 **2 条评论**，为今日新开 Issue。

用户称同一任务手动执行始终成功，但连续四次定时运行均在第二次模型调用时报 `APIConnectionError`。问题集中暴露了定时任务与手动运行在连接复用、会话状态、代理或重试机制上的差异。

### 4.5 同主机反向代理绕过认证

[#8695](https://github.com/agentscope-ai/QwenPaw/issues/8695) 有 **2 条评论**，涉及安全边界。

在开启认证且存在注册用户时，经同主机反向代理到达后端的请求可能被视作本地 CLI 请求而跳过 Bearer Token 校验。根因涉及 loopback 白名单与空 `trusted_proxies` 配置的组合，部署在反向代理后的用户风险较高。

### 4.6 升级未迁移内置通道插件

[#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684) 有 **2 条评论**，现已关闭。

升级至 2.3.0 后，已安装的 Matrix 插件仍保留旧代码，导致 2.3.0 中的 E2EE 依赖、会话、设备密钥等修复无法生效。该问题反映发布迁移机制与插件版本分发之间仍有断层。

### 4.7 PR 社区参与特征

今日展示的 PR 均无可见评论数，且点赞数均为 0。社区当前贡献主要以直接提交代码和修复 Issue 为主，评审讨论密度偏低。对大型 PR 而言，这可能意味着评审反馈不足，也可能是数据截取时尚未形成公开讨论。

---

## 5. Bug 与稳定性

### 严重级别：P0 / 高

#### 1. 同主机反向代理可能绕过 API 认证

- Issue：[#8695](https://github.com/agentscope-ai/QwenPaw/issues/8695)
- 当前状态：开放
- 已发现 fix PR：**暂未发现明确对应 PR**
- 影响：启用 `QWENPAW_AUTH_ENABLED=true` 时，反向代理部署可能错误信任请求，造成未授权访问风险。
- 建议：优先核查 loopback 判断、`trusted_proxies` 解析和代理头信任链，并补充反向代理集成测试。

#### 2. 微信多智能体、多账号升级后凭据冲突

- Issue：[#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755)
- 潜在关联 PR：[#8720](https://github.com/agentscope-ai/QwenPaw/pull/8720)
- 影响：共享前端中两个 Agent 对应两个微信账号时，升级可能复制凭据，最终只有一个通道能够运行。
- 判断：**已有相关 fix PR，但需确认完整覆盖多 Agent 升级迁移场景。**

#### 3. 企业微信所有文件/图片发送失败

- Issue：[#8760](https://github.com/agentscope-ai/QwenPaw/issues/8760)
- 当前状态：开放，今日新开
- 已发现 fix PR：**暂未发现**
- 影响：QwenPaw 2.3.0 下企业微信 AI Bot 的分块上传 ACK 无响应体，被判定为 `UPLOAD_ACK_INVALID`，整个回复回合中止；文本消息不受影响。
- 建议：核对 2.2.x 与 2.3.0 的上传 ACK 解析逻辑，并补充无 body ACK 的兼容测试。

#### 4. 附件路径被截断，图片无法加载

- Issue：[#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)
- 当前状态：开放
- 已发现 fix PR：**暂未发现**
- 影响：2.3.0 Beta 系列中的 Windows 多模态附件功能发生回归，文件保存成功但模型读取失败。
- 建议：重点检查路径标准化逻辑是否错误使用了 `drive` 边界，以及 URL、UNC 路径与普通绝对路径的分支。

### 严重级别：P1 / 中高

#### 5. 微信入站轮询静默死亡

- Issue：[#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757)
- 当前状态：开放
- 已发现 fix PR：**暂未发现**
- 影响：Worker 仍存活、健康状态仍为正常，但入站消息停止到达；错误重试循环没有日志，也没有恢复或游标重置机制。
- 风险：表面健康但业务已失效，属于高隐蔽性问题。

#### 6. 飞书非 ASCII 文件名被百分号编码

- Issue：[#8752](https://github.com/agentscope-ai/QwenPaw/issues/8752)
- 当前状态：开放
- 已发现 fix PR：**暂未发现明确当前有效 PR**
- 影响：2.3.0 后文件卡片显示 `%E9%99%84%E4%BB%B6-…docx`，影响文件名可读性及后续下载处理。
- 备注：Issue 提到历史 PR [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) 存在同类问题，但需确认是否已覆盖当前代码路径。

#### 7. 飞书重连监督器因清理异常永久退出

- Issue：[#8748](https://github.com/agentscope-ai/QwenPaw/issues/8748)
- Fix PR：[#8749](https://github.com/agentscope-ai/QwenPaw/pull/8749)
- 状态：**已有修复 PR，待合并**
- 影响：服务端连接轮换时，`disconnect()` 清理异常可让飞书通道永久失去自动重连能力。

#### 8. 后台启动期间提交的任务被静默吞掉

- Issue：[#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746)
- 当前状态：开放
- 已发现 fix PR：**暂未发现**
- 影响：Agent 已构建，但没有调用 LLM，也没有错误日志；用户在启动阶段发送的消息表现为“完全无响应”。
- 风险：故障可观测性弱，且可能影响所有依赖后台初始化的通道。

#### 9. 定时任务第二次模型调用连接失败

- Issue：[#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)
- 当前状态：开放，今日新开
- 已发现 fix PR：**暂未发现**
- 影响：同一任务手动运行成功、定时运行连续失败，说明 Cron 路径可能存在独立连接或会话管理缺陷。

### 严重级别：P2 / 中

#### 10. Cron Token 用量未写入统计文件

- Issue：[#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705)
- 当前状态：开放
- 已发现 fix PR：**暂未发现**
- 影响：Console 用量面板遗漏 Cron 消耗，不是直接运行故障，但会导致成本统计和归因不完整。

#### 11. 微信 `ACCOUNT_IN_USE` 与发送结果误报

- Issue：[#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)
- 已关闭/相关 PR：
  - [#8715](https://github.com/agentscope-ai/QwenPaw/pull/8715)
  - [#8721](https://github.com/agentscope-ai/QwenPaw/pull/8721)
  - [#8720](https://github.com/agentscope-ai/QwenPaw/pull/8720)
- 影响：启动失败与成功发送被错误报告的问题得到部分覆盖，但 PR #8715 明确只处理其中一个子问题，需验证其余场景。

#### 12. 升级未迁移内置通道插件

- Issue：[#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)
- 已关闭
- 相关 PR：[#8699](https://github.com/agentscope-ai/QwenPaw/pull/8699)
- 影响：用户已安装插件可能长期停留在旧版本，无法获得新版修复。
- 迁移建议：升级后检查插件版本与源码来源，必要时手动删除并重新安装官方插件。

#### 13. Linux 官方通道 Worker 启动崩溃

- Issue：[#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)
- 已关闭
- Fix PR：[#8692](https://github.com/agentscope-ai/QwenPaw/pull/8692)
- 影响：缺少 Home 和工作目录上下文，Worker 启动即崩溃。已有直接修复。

#### 14. 子 Agent 完成误触发桌面通知

- Issue：[#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736)
- 当前状态：开放
- 已发现 fix PR：**暂未发现**
- 影响：主回复尚未完成时，Subagent completion 已触发“Reply completion”通知，桌面端可能频繁产生误导性通知。

#### 15. Console 侧边栏缺失“检查点”入口

- Issue：[#8747](https://github.com/agentscope-ai/QwenPaw/issues/8747)
- 当前状态：开放
- 已发现 fix PR：**暂未发现**
- 影响：路由和后端 API 正常，但导航 `parentId` 指向已移除的 `core.agent-group`，导致入口不可见。属于前端配置回归。

#### 16. 自动记忆搜索循环后无法生成最终回复

- Issue：[#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)
- 状态：已关闭
- 影响：重复搜索保护和 finalize/recovery 路径存在耦合缺陷；已关闭表明问题已有处理结果，但仍建议补充回归测试。

---

## 6. 功能请求与路线图信号

### 6.1 插件 SDK 1.1：最明确的平台路线图信号

- Feature/实现：[PR #8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)
- 关联生态：[PR #8699](https://github.com/agentscope-ai/QwenPaw/pull/8699)

SDK 将扩展请求身份、模型选择、会话历史作用域、权限与资源生命周期管理。结合官方插件市场、插件更新和版本守卫等近期工作，可以判断 **插件平台化** 是下一阶段核心方向。

**纳入下一版本概率：高。**  
但 PR 规模为 XXXL，预计需要拆分评审或较长稳定性验证周期。

### 6.2 原生会话历史与 Turn 分叉

- PR：[#8532](https://github.com/agentscope-ai/QwenPaw/pull/8533)
- 关联需求：[#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)

Append-only SQLite 历史、分页查询和原生 Turn fork 有助于解决长会话、恢复、重连和分叉一致性。它与运行时恢复、checkpoint 等能力存在潜在联动。

**纳入下一版本概率：中高。**  
技术方向明确，但数据模型迁移风险较大，更可能先进入主分支测试或分阶段发布。

### 6.3 Cron 任务级推理配置

- PR：[#8476](https://github.com/agentscope-ai/QwenPaw/pull/8476)
- 关联成本统计：[#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705)

允许每个 Cron 任务独立设置推理等级和预算，适合将巡检、摘要与复杂分析任务分配到不同成本档位。

**纳入下一版本概率：高。**  
改动聚焦，且已有完整 Issue 闭环。

### 6.4 Web Search Provider 扩展

- Olostep：
  - Issue：[#8740](https://github.com/agentscope-ai/QwenPaw/issues/8740)
  - PR：[#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741)
- Keenable：
  - Issue：[#8758](https://github.com/agentscope-ai/QwenPaw/issues/8758)

**纳入下一版本概率：中高。**  
两者均已有明确 Provider 接口和外部贡献意愿，预计会遵循可选 Provider 模式继续集成。

### 6.5 千问 AI 平台供应商预设

- Issue：[#8759](https://github.com/agentscope-ai/QwenPaw/issues/8759)

用户希望内置千问 AI 平台预设，同时覆盖按量付费与 Token Plan。由于 QwenPaw 与该平台同属千问生态，官方支持具有较强合理性。

**纳入下一版本概率：中。**  
需要产品方确认供应商命名、认证方式、计费端点和维护责任；也可能先以自定义供应商模板形式交付。

### 6.6 多用户与意大利语 UI

- 多用户：[#8751](https://github.com/agentscope-ai/QwenPaw/issues/8751)，已关闭
- 意大利语：[#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750)，开放
- 国际化问题：[#8763](https://github.com/agentscope-ai/QwenPaw/issues/8763)，开放

这些需求表明 QwenPaw 正从个人助手向团队与国际化产品演进。多用户 Issue 已关闭，但该轮次未展示对应完整实现 PR，因此应区分“需求关闭”与“能力已完整发布”。

意大利语及平台翻译质量问题的落地概率取决于资源投入，短期更可能先修复现有中英文一致性。

### 6.7 Console 前端性能与体验优化

- 包体优化：[PR #8761](https://github.com/agentscope-ai/QwenPaw/pull/8761)
- 侧栏样式：[PR #8766](https://github.com/agentscope-ai/QwenPaw/pull/8766)
- 检查点入口：[#8747](https://github.com/agentscope-ai/QwenPaw/issues/8747)
- Markdown CJK 强调：[PR #8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)

这些变更表明前端工作已从功能开发转向性能、细节体验和渲染正确性。包体优化较易独立合并，复杂 Markdown 修复可能需要更广泛的前端测试。

---

## 7. 用户反馈摘要

### 7.1 核心痛点

1. **升级后功能“表面可用、实际失效”**  
   用户能够成功保存文件、上传图片、启动 Worker 或显示通道健康状态，但模型无法读取附件、通道无法入站消息、Cron 消耗未入账。说明系统健康检查尚未覆盖端到端业务成功。

2. **正式版发布后的回归密集出现**  
   [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)、[#8752](https://github.com/agentscope-ai/QwenPaw/issues/8752)、[#8760](https://github.com/agentscope-ai/QwenPaw/issues/8760)、[#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709) 均与 2.3.0 或其 Beta 升级相关，用户对升级后的稳定性满意度偏低。

3. **定时任务与手动执行行为不一致**  
   [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) 和 [#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705) 分别反映 Cron 在连接稳定性和用量统计上与对话通道不一致，说明任务运行路径仍是架构薄弱区。

4. **插件升级和安装路径不可靠**  
   [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)、[#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755)、[#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757) 显示插件升级、凭据隔离、轮询恢复均存在实际问题。

5. **可观测性不足**  
   [#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757) 无错误日志， [#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746) 任务被吞且无报错， [#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705) 统计缺失。用户难以判断“任务是否真正完成”。

### 7.2 典型使用场景

- 企业微信 AI Bot 中的文件与图片发送；
- 飞书群聊中的非英文文件交付；
- 微信个人助手的多账号、多智能体使用；
- 每日网页巡检等长期定时任务；
- Windows 桌面端上传图片并让模型理解；
- 同一安装供多名家庭成员或企业用户使用；
- 意大利语企业 PoC 和平台国际化访问。

### 7.3 满意点

- 用户对错误给出了较完整的版本、复现步骤、根因和日志定位；
- 多条 Issue 已出现对应修复 PR，响应链条较完整；
- [#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705) 的根因分析直接比较对话与 Cron 两条路径，便于维护者定位；
- [#8761](https://github.com/agentscope-ai/QwenPaw/pull/8761) 给出了包体优化前后量化结果，体现出对前端性能和用户体验的重视。

### 7.4 不满意点

- 2.3.0 正式版及 Beta 连续出现回归；
- 多通道、跨平台组合场景覆盖不足；
- 插件升级后可能继续运行旧代码；
- 一些故障无日志、健康状态失真；
- 认证边界和反向代理场景缺少安全回归测试；
- 多用户需求虽关闭，但本轮数据中看不到完整实现和发布说明。

---

## 8. 待处理积压

### 8.1 高优先级安全与稳定性问题

- [#8695](https://github.com/agentscope-ai/QwenPaw/issues/8695)：同主机反向代理绕过认证；**未发现明确修复 PR**。
- [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)：附件路径截断导致图片不可读；**未发现修复 PR**。
- [#8760](https://github.com/agentscope-ai/QwenPaw/issues/8760)：企业微信文件/图片发送全面失败；**未发现修复 PR**。
- [#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757)：微信入站轮询静默死亡；**未发现修复 PR**。
- [#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746)：后台启动阶段任务被吞；**未发现修复 PR**。
- [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)：定时任务第二次模型调用连接失败；**未发现修复 PR**。

### 8.2 已有修复 PR，但尚待合并或确认

- [#8749](https://github.com/agentscope-ai/QwenPaw/pull/8749) → [#8748](https://github.com/agentscope-ai/QwenPaw/issues/8748)：飞书重连监督器。
- [#8720](https://github.com/agentscope-ai/QwenPaw/pull/8720) → [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)、[#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755)：微信账号冲突与工作区隔离。
- [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)：CJK Markdown 强调边界。
- [#8512](https://github.com/agentscope-ai/QwenPaw/pull/8512)：兼容从网关错误文本解析状态码。

### 8.3 长期开放或周期较长的 PR/Issue

- [#8476](https://github.com/agentscope-ai/QwenPaw/pull/8476)：自 2026-10-28 创建，仍待合并，涉及 Cron 推理等级。
- [#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477)：自 2026-10-28 创建，仍待合并，涉及技能安装性能。
- [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)：自 2026-11-02 创建，XXXL 会话存储重构仍待评审。
- [#8654](https://github.com/agentscope-ai/QwenPaw/pull/8654)：Creator 2.0.5–2.0.6 的大型发布 PR 仍待合并。
- [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)：虽已关闭，但源自 2026-10-21，且暴露记忆搜索失败恢复问题，建议补充防回归测试。
- [#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750)：意大利语 UI 需求仍开放，需明确国际化排期。
- [#8759](https://github.com/agentscope-ai/QwenPaw/issues/8759)：千问 AI 平台供应商预设需求仍开放，需官方产品与维护策略确认。

---

## 今日结论

QwenPaw 今日社区活跃度较高，贡献方向清晰且工程投入明显，但项目正经历 **2.3.0 发布后的集中回归期**。当前最重要的不是继续扩大功能面，而是优先完成以下闭环：

1. **优先审查并修复认证绕过、附件路径、企业微信上传、微信轮询和后台任务吞没等高严重度问题；**
2. **合并飞书重连、微信账号隔离等已有 fix PR，并补充端到端回归测试；**
3. **统一 Cron 与对话通道在 Token 统计、连接管理和错误恢复上的实现；**
4. **为插件升级建立强制迁移与版本一致性校验，避免用户继续运行旧插件代码；**
5. **对插件 SDK 1.1、会话存储重构等大型变更拆分评审，降低合并风险。**

**综合健康度：7/10。**  
社区活跃、修复响应快、功能路线具有平台化潜力；但正式版质量、跨平台回归覆盖、插件迁移和可观测性仍是当前主要短板。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-11-16**  
**统计范围：过去 24 小时**

> 数据说明：过去 24 小时共更新 **50 条 Issues**、**50 条 PR**，并发布 **1 个 Canary 版本**。当前仍有 **45 条 PR 待合并**，说明社区贡献和修复吞吐都很高，但核心问题也从单点功能缺陷逐渐收敛到多 Profile、Gateway、会话权威和 Desktop 状态一致性等架构性问题。

---

## 1. 今日速览

- Hermes Agent 今日保持高活跃度：24 小时内更新 **50 条 Issues**、**50 条 PR**，其中仍有 **45 条 PR 待合并**，贡献者正在 Desktop 重构、Gateway、插件、Cron、Skills 和多 Profile 场景集中提交修复。
- 今日发布了 **v0.23.1 Canary**，但提供的 Release Notes 主要是构建版本信息，未披露可核验的完整变更清单；因此不能仅凭版本号判断具体功能变化或破坏性变更。
- Bug 焦点明显从普通 UI 问题转向系统性可靠性：**多 Profile 状态隔离、Gateway 空闲高 CPU、会话迁移后不可恢复、托管配置未生效、远程任务假成功**等风险值得优先处理。
- PR 侧覆盖了明显的用户痛点，包括 Desktop 新工作区、SSH 超时配置、Slack Block Kit、语音会话记录、Termux 兼容、Windows Chromium 清理等，显示产品正向“可扩展桌面端 + 多端接入 + 多 Profile 企业部署”方向发展。
- 项目健康度评估：**活跃度高、修复供给充足，但架构债与回归压力偏高**。当前最需要维护者投入的不是继续扩大 PR 队列，而是确定核心状态权威、配置优先级和网关生命周期的统一契约。

---

## 2. 版本发布

### v0.23.1+canary.20261115T064406Z

- **发布日期：** 2026-11-15
- **版本类型：** Canary 预发布版本
- **Release：** [v0.23.1+canary.20261115T064406Z](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261115T064406Z)

#### 已确认信息

- 该版本面向 v0.23.1 系列，包含 Hermes Desktop 下载构建。
- 今日数据未提供完整 changelog，无法确认具体功能、修复项和依赖变化。

#### 破坏性变更

- Release Notes 中**没有明确列出破坏性变更**。
- 但从今日活跃缺陷看，v0.23.x 周边正涉及多 Profile、Gateway、Cron、Desktop 和插件行为的调整，实际升级时仍建议重点回归以下场景：
  - 多 Profile Home 与托管配置；
  - Gateway 重启、迁移和会话恢复；
  - Desktop 与共享 Web App 的会话同步；
  - Cron/Kanban 投递回执；
  - Telegram/Matrix/WhatsApp 等平台适配器。

#### 迁移建议

1. Canary 环境先验证持久化会话、插件加载和 Gateway 重启后的恢复能力。
2. 对使用多 Profile 的部署，逐项检查环境变量、Secret、`active_profile` 和 `HERMES_HOME` 的解析结果。
3. 使用托管配置或 `key_cmd` 的用户，应在升级后验证视觉、标题、压缩、MCP 和工具调用等辅助请求。
4. 在升级说明补充完整变更清单后，再判断是否适合升级到稳定分支。

---

## 3. 项目进展

### 已关闭的重要 PR

#### 1. 自改进通知按会话发送面解析

- **PR：** [#112101 — fix(gateway): resolve the self-improvement notice per session surface](https://github.com/NousResearch/hermes-agent/pull/112101)
- **状态：** 已关闭
- **进展：** 修复后台自改进通知、技能补丁、记忆更新及暂存审批提示的投递位置。相关配置虽然是按平台定义，但原实现只在 Profile 级别读取一次，导致通知可能被发送到错误的聊天表面。
- **价值：** 提升多 Profile、多平台部署下通知的准确性和可追踪性。

#### 2. 旧版 custom provider 的辅助调用恢复 `key_cmd`

- **PR：** [#156383 — fix(providers): a legacy custom_providers entry keeps its key_cmd for auxiliary calls](https://github.com/NousResearch/hermes-agent/pull/156383)
- **状态：** 已关闭
- **关联 Issue：** [#156334](https://github.com/NousResearch/hermes-agent/issues/156334)
- **进展：** 修复旧式 `custom_providers` 配置在视觉分析、标题生成、会话压缩、搜索和 Web 提取等辅助任务中丢失 `key_cmd`、进而以占位密钥触发 401 的问题。
- **价值：** 避免主对话可用、辅助能力整体失效的隐蔽配置回归。

#### 3. Desktop 插件无法从磁盘加载

- **Issue：** [#145073 — The Webapp loads no desktop plugin from disk](https://github.com/NousResearch/hermes-agent/issues/145073)
- **修复 PR：** [#145072](https://github.com/NousResearch/hermes-agent/pull/145072)
- **状态：** 已关闭
- **进展：** 修复共享 Web App 不加载宿主机磁盘插件的问题；相关评论还记录了热加载和 headless 宿主机 Desktop 拆分的跟进项。
- **价值：** 恢复 Desktop/Web App 插件生态的实际可用性。

#### 4. 公共子代理生命周期兼容性修复

- **Issue：** [#138860 — Public subagent lifecycle handles stop working after parent-session rotation](https://github.com/NousResearch/hermes-agent/issues/138860)
- **Issue：** [#138828 — Public subagent lifecycle cannot carry native images or output-schema contracts](https://github.com/NousResearch/hermes-agent/issues/138828)
- **Issue：** [#138923 — Public subagent lifecycle re-truncates native summaries and drops spill recovery metadata](https://github.com/NousResearch/hermes-agent/issues/138923)
- **状态：** 均已关闭
- **进展：** 子代理生命周期 API 已针对父会话轮换后的句柄保持、原生图片与结构化输出契约兼容，以及摘要二次截断和 spill 元数据丢失等问题完成修复。
- **价值：** 插件作者不再需要依赖私有 delegation helper，可更可靠地构建编排型插件。

### 值得关注的开放 PR

这些 PR 尚未合并，但方向明确：

- **Desktop 新工作区与经典模式回退：**  
  [#152168 — introduce redesigned agent workspace with classic recovery](https://github.com/NousResearch/hermes-agent/pull/152168)  
  将 Figma 风格的新工作区设为默认壳层，同时保留经典界面恢复开关。属于高可见度产品升级，应重点做 UI、快捷键、会话恢复和浏览器兼容回归。

- **SSH 超时配置化：**  
  [#156239 — take the SSH connect and forward timeouts from config.yaml](https://github.com/NousResearch/hermes-agent/pull/156239)  
  解决远端 Desktop 固定 15 秒超时无法调整的问题，尤其适合高延迟网络环境。

- **Canonical 会话权威下的语音记录：**  
  [#156382 — record spoken conversation through the canonical authority](https://github.com/NousResearch/hermes-agent/pull/156382)  
  将已播放的语音对话写回统一会话存储，减少 Desktop SDK 与 Gateway 会话路径分裂。

- **Slack 原生 Block Kit：**  
  [#156034 — feat(slack): agent_blocks](https://github.com/NousResearch/hermes-agent/pull/156034)  
  允许 Agent 以 `slack-blocks` fenced JSON 输出原生 Block Kit。

- **Termux 硬链接兼容：**  
  [#155843 — fix(termux): fall back when os.link does not exist](https://github.com/NousResearch/hermes-agent/pull/155843)  
  修复 Android/Bionic Python 上缺少 `os.link` 导致发布流程直接失败的问题。

- **Cron 回执收敛：**  
  [#134138 — reconcile last_delivery_queued once the Bot Chat receipt settles](https://github.com/NousResearch/hermes-agent/pull/134138)  
  解决 `delivery_queued` 状态长期滞留，推动 Cron 投递状态从“排队”收敛到最终结果。

- **Gateway 控制读取脱离串行队列：**  
  [#144701 — keep bounded control reads off the serial queue](https://github.com/NousResearch/hermes-agent/pull/144701)  
  避免 `session.control.read` 被慢请求阻塞并触发 30 秒客户端超时。

### 整体推进程度

- 今日至少 **3 个已关闭 PR/修复主题**直接恢复插件、子代理和通知等核心扩展能力。
- 开放 PR 已覆盖 Desktop 重构、Gateway 性能、远程连接、Cron、Skills、Slack、MCP、Termux 和安全边界。
- 从功能供给看，项目一天内推进了多个方向；但 **45 条待合并 PR** 也表明评审、冲突处理和回归验证正在形成积压。

---

## 4. 社区热点

### 讨论最活跃的 Issues

#### 1. Desktop 助手回复偶尔重复渲染

- **Issue：** [#127621 — assistant response occasionally renders duplicated](https://github.com/NousResearch/hermes-agent/issues/127621)
- **评论：** 14
- **点赞：** 9
- **状态：** 开放，未见明确关联 fix PR
- **热度原因：** 高评论、高点赞，是今日最受社区关注的缺陷。
- **核心诉求：** 用户需要区分“模型生成重复”和“客户端/流式传输重复”，并要求从消息去重、流式块合并和重连幂等性上根治，而不是仅在 UI 层隐藏重复文本。

#### 2. Terminal 工具拒绝合法的布尔 `notify=true`

- **Issue：** [#123345 — terminal tool: notify=true rejected by validator](https://github.com/NousResearch/hermes-agent/issues/123345)
- **评论：** 13
- **状态：** 开放，未见明确关联 fix PR
- **核心诉求：** 工具协议声明允许布尔值，但验证器在 Agent/LLM 实际传入布尔值时仍拒绝，属于协议实现不一致。会直接影响后台命令完成通知，并增加模型重试和工具调用失败率。

#### 3. 多 Profile Gateway 的插件检查只在根作用域运行

- **Issue：** [#137010 — Multiplexed gateway session reset plugin check runs only in root scope](https://github.com/NousResearch/hermes-agent/issues/137010)
- **评论：** 8
- **状态：** 开放，未见明确关联 fix PR
- **核心诉求：** `pre_gateway_dispatch` 按消息 Profile 分发，但 Doctor 和启动告警仍在根作用域执行，导致同一部署中的不同 Profile 获得不一致的检查结果。
- **社区意义：** 这是典型“共享 Gateway + 独立 Profile”架构边界问题，不应继续以局部补丁处理。

#### 4. Matrix 错误接受发给其他用户的邀请

- **Issue：** [#76292 — ignore membership invites targeted at other users](https://github.com/NousResearch/hermes-agent/issues/76292)
- **评论：** 7
- **状态：** 开放，未见明确关联 fix PR
- **核心诉求：** Matrix 适配器只验证邀请发送者，没有验证目标 `state_key` 是否为当前机器人。在桥接房间中可能把其他成员的邀请误认为 Hermes 自己的邀请。
- **风险判断：** 虽然标记为 P3，但语义上更接近权限边界问题，建议提升优先级。

#### 5. Windows 看板删除/归档因 SQLite 文件占用返回 500

- **Issue：** [#143908 — Kanban delete/archival fails with opaque 500 on Windows](https://github.com/NousResearch/hermes-agent/issues/143908)
- **评论：** 7
- **状态：** 开放，未见明确关联 fix PR
- **核心诉求：** Dashboard 用户需要明确错误提示、可重试机制，以及 Windows 上对 SQLite 句柄生命周期的正确管理，而不是暴露原始 500。

### 值得关注的开放 PR

- **PR #156304 — Panoptes 插件目录项：** [链接](https://github.com/NousResearch/hermes-agent/pull/156304)  
  提供 Hermes Desktop 的实时 Agent 状态面板，可展示工具调用、模型步骤、子代理和上下文负载。它同时回应了可视化和插件目录需求，预计会较快进入评审。

- **PR #152168 — Desktop 新 Agent 工作区：** [链接](https://github.com/NousResearch/hermes-agent/pull/152168)  
  是今日最接近核心产品体验升级的 PR，预计可能进入下一 Desktop 版本，但需要完整回归测试和迁移开关说明。

- **PR #156382 — 语音会话记录统一写入：** [链接](https://github.com/NousResearch/hermes-agent/pull/156382)  
  与今日多个会话迁移、Profile 隔离和状态权威问题高度相关。若契约稳定，可能成为下一版本的多端会话一致性组成部分。

---

## 5. Bug 与稳定性

### P2 / 高优先级

#### A. 多 Profile Gateway 空闲时持续占用约 0.5–1.2 个 CPU 核

- **Issue：** [#156339 — Gateway burns ~0.5–1.2 cores at idle](https://github.com/NousResearch/hermes-agent/issues/156339)
- **影响：** 12 个 Profile Home 的 6 核主机在无任务时仍消耗约 1.21 核。轮询器数量随 Profile 数增长，并触发文件系统和 SQLite 操作。
- **Fix PR：** 未见明确关联 PR
- **建议：** 优先改为共享调度器、事件唤醒或单例 reconciler；为“Profile 数 × 空闲 CPU”建立基准测试。

#### B. 跨 Profile 移动会话后会话永久不可恢复

- **Issue：** [#156000 — moving a session between profiles leaves it permanently un-resumable](https://github.com/NousResearch/hermes-agent/issues/156000)
- **影响：** 路由记录与 receipt 未一起迁移，形成无法继续的“死路”状态；当前 CLI 也缺少受支持的会话迁移命令。
- **Fix PR：** 未见明确关联 PR
- **建议：** 定义原子迁移事务，覆盖 session row、receipt、索引、附件和回滚路径。

#### C. RunPod 人脸交换永不完成，却返回“成功”并继续计费

- **Issue：** [#156278 — Face swap on a rented RunPod GPU never completes, and reports success it never verified](https://github.com/NousResearch/hermes-agent/issues/156278)
- **影响：** 远程 GPU 任务失败后未经验证仍被标记成功，GPU 持续计费。
- **Fix PR：** 未见明确关联 PR
- **建议：** 将完成状态绑定到可验证产物或远端状态查询；失败时必须关闭实例或进入明确清理流程。

#### D. 托管作用域中的网站黑名单未生效

- **Issue：** [#156267 — website_blocklist in managed scope is not enforced](https://github.com/NousResearch/hermes-agent/issues/156267)
- **类型：** 安全
- **影响：** 管理员在托管配置中设置的 `security.website_blocklist` 可能被 Web 工具绕过。
- **Fix PR：** 未见明确关联 PR
- **建议：** 将策略读取统一为“用户配置叠加托管配置”的唯一解析器，并增加防止低优先级覆盖高优先级策略的测试。

#### E. Gateway 插件钩子在根作用域与消息 Profile 间不一致

- **Issue：** [#137010](https://github.com/NousResearch/hermes-agent/issues/137010)
- **影响：** Doctor、启动告警和实际消息分发使用不同作用域，导致检查结果不可信。
- **Fix PR：** 未见明确关联 PR

#### F. Cron 回执恢复在多 Profile 下无限重试

- **Issue：** [#155638 — Receipt recovery loops forever outside profile scope](https://github.com/NousResearch/hermes-agent/issues/155638)
- **影响：** `MATRIX_HOME_ROOM` 在 Profile 作用域外读取，抛出 `UnscopedSecretError`，receipt journal 永远无法完成。
- **Fix PR：** 未见明确关联 PR

#### G. MCP HTTP Server 静默失联且无法重新发现

- **Issue：** [#156262 — MCP parked HTTP server vanishes silently from tool_search](https://github.com/NousResearch/hermes-agent/issues/156262)
- **影响：** 服务器离线后不会被及时 reconcile，Dashboard 和 Gateway 也无法感知 `mcp_servers` 变化。
- **Fix PR：** 未见明确关联 PR

#### H. Feishu/Lark WebSocket 半断连接可能永久卡死

- **Issue：** [#156356 — Feishu/Lark WS client wedges forever](https://github.com/NousResearch/hermes-agent/issues/156356)
- **影响：** TLS 读取或握手无限阻塞，Gateway 静默失聪直到重启。
- **Fix PR：** 未见明确关联 PR
- **建议：** 增加 socket/TLS 超时、心跳和指数退避重连。

#### I. Desktop 粘贴或拖入图片无法保存

- **Issue：** [#156032 — Desktop Save Image fails for blob source](https://github.com/NousResearch/hermes-agent/issues/156032)
- **影响：** `blob:` URL 未被 `saveImageFromUrl` 支持，下载按钮触发 `ERR_INVALID_PROTOCOL`。
- **Fix PR：** 未见明确关联 PR
- **建议：** 前端将 Blob 转为 ArrayBuffer/base64 或 object URL 生命周期内先落盘，再交给保存接口。

#### J. Telegram 带说明文字的图片丢失图像

- **Issue：** [#155902 — Telegram inbound photo with caption loses the image](https://github.com/NousResearch/hermes-agent/issues/155902)
- **影响：** 有 caption 的入站图片只保留文字，无 caption 的图片正常。
- **Fix PR：** 未见明确关联 PR
- **建议：** 回归 Telegram 媒体与 caption 的联合解析路径。

#### K. Windows Git 版本探测可能永久挂起

- **Issue：** [#153299 — Windows _run_git can hang forever](https://github.com/NousResearch/hermes-agent/issues/153299)
- **影响：** 超时只终止 Git for Windows 的 launcher，真正 Git 进程仍持有管道。
- **Fix PR：** 未见明确关联 PR
- **建议：** 使用进程组终止并关闭管道，增加 Windows 专项测试。

### P3 / 中等优先级

- **Copilot ACP 非法 JSON 的工具调用被静默丢弃：**  
  [#55431](https://github.com/NousResearch/hermes-agent/issues/55431)。文本块被消费但没有执行，造成无提示的动作丢失；未见明确 fix PR。

- **Kanban `--triage` 卡片没有退出路径：**  
  [#110339](https://github.com/NousResearch/hermes-agent/issues/110339)。CLI 状态机不完整；未见明确 fix PR。

- **managed llamacpp 会话保留失效监督端点：**  
  [#132727](https://github.com/NousResearch/hermes-agent/issues/132727)。路由器重启后旧地址未刷新；未见明确 fix PR。

- **Gateway 重启时粘性 Profile 被 supervisor marker 覆盖：**  
  [#113206](https://github.com/NousResearch/hermes-agent/issues/113206)。可能意外回到默认 Profile；未见明确 fix PR。

- **Windows Desktop 不持久化 session cwd，Project 分组失效：**  
  [#92398](https://github.com/NousResearch/hermes-agent/issues/92398)。会话元数据缺失；未见明确 fix PR。

- **Desktop GPT-Live 忽略 Bot Profile 的语音配置：**  
  [#137801](https://github.com/NousResearch/hermes-agent/issues/137801)。多 Profile 语音隔离错误；未见明确 fix PR。

- **插件主题无法绘制首帧：**  
  [#156281](https://github.com/NousResearch/hermes-agent/issues/156281)。启动主题解析与持久化选择不一致；未见明确 fix PR。

- **computer_use 同轮去重吞掉第二次相同按键：**  
  [#156343](https://github.com/NousResearch/hermes-agent/issues/156343)。例如连续两次 `Tab` 只执行一次；未见明确 fix PR。

- **Sandbox Chromium 无法停止：**  
  [#156366](https://github.com/NousResearch/hermes-agent/issues/156366)。因 `/proc/cmdline` 重写导致身份识别失败，浏览器进程可能持续占用资源；未见明确 fix PR。

### 已有明确修复方向的缺陷

- **Termux 发布路径缺少 `os.link`：** [#155843](https://github.com/NousResearch/hermes-agent/pull/155843)
- **技能目录符号链接不可被 `skill_manage` 找到：** [#156015](https://github.com/NousResearch/hermes-agent/pull/156015)
- **Kanban 自动拆解未遵循不可生成 assignee 的隔离规则：** [#62994](https://github.com/NousResearch/hermes-agent/pull/62994)
- **Kanban GitHub acceptance 未预加载 assignee Profile Secret：** [#153328](https://github.com/NousResearch/hermes-agent/pull/153328)
- **Bot Chat receipt 落地后未收敛 `last_delivery_queued`：** [#134138](https://github.com/NousResearch/hermes-agent/pull/134134)
- **Desktop SSH 超时固定且无法由配置覆盖：** [#156239](https://github.com/NousResearch/hermes-agent/pull/156239)
- **Gateway 失败轮次将长 provider 诊断直接发到聊天：** [#156287](https://github.com/NousResearch/hermes-agent/pull/156287)
- **触摸滑动误触 Desktop 底栏菜单：** [#156283](https://github.com/NousResearch/hermes-agent/pull/156283)
- **MCP 连接目标错误提示不够明确：** [#156381](https://github.com/NousResearch/hermes-agent/pull/156381)
- **legacy custom provider 辅助请求丢失 `key_cmd`：** [#156383](https://github.com/NousResearch/hermes-agent/pull/156383)

---

## 6. 功能请求与路线图信号

### 6.1 Desktop 重构成为近期最明确的产品路线信号

- **PR：** [#152168 — redesigned agent workspace with classic recovery](https://github.com/NousResearch/hermes-agent/pull/152168)
- **判断：** **较高概率进入下一 Desktop 版本。**
- **原因：**
  - 已有完整设计和默认入口；
  - 保留经典模式回退，降低迁移风险；
  - 与当前 Desktop 在会话、插件、浏览器手势、图像保存和主题首帧上的修复相互配套。
- **前置条件：** 必须明确旧会话恢复、插件兼容、快捷键、窄屏布局和 Web App 行为。

### 6.2 插件生态继续扩张

- **PR：** [#156304 — Add panoptes to the plugin catalog](https://github.com/NousResearch/hermes-agent/pull/156304)
- **PR：** [#156034 — Slack agent_blocks](https://github.com/NousResearch/hermes-agent/pull/156034)
- **PR：** [#156385 — live-video catalog metadata](https://github.com/NousResearch/hermes-agent/pull/156385)
- **PR：** [#156384 — skilluminati version pin](https://github.com/NousResearch/hermes-agent/pull/156384)
- **判断：**
  - **Panoptes、Slack Block Kit**较可能进入下一版本；
  - 目录元数据更新通常会随目录同步发布。
- **路线图含义：** Hermes 正从单一 Agent Runtime 转向“可视化插件 + 平台原生消息 + 社区目录”的生态型产品。

### 6.3 统一会话权威是后续功能的基础设施信号

- **PR：** [#156382 — record spoken conversation through the canonical authority](https://github.com/NousResearch/hermes-agent/pull/156382)
- **Issue：** [#156000](https://github.com/NousResearch/hermes-agent/issues/156000)
- **PR：** [#144701](https://github.com/NousResearch/hermes-agent/pull/144701)
- **判断：** **高概率成为下一阶段重点，但可能先以若干独立修复合入。**
- **原因：**
  - 今日多个问题都指向 session identity、receipt、profile scope 和 canonical authority 不统一；
  - 语音记录只是第一个迁移到统一权威的新能力。
- **建议路线：** 明确唯一 session store、原子迁移 API、跨 Profile receipt 规则和回退语义。

### 6.4 群组权限控制正在产品化

- **PR：** [#137709 — read and set participant YOLO through canonical owners](https://github.com/NousResearch/hermes-agent/pull/137709)
- **判断：** **中等概率进入下一版本。**
- **原因：** 已更新到当前主干并使用 canonical session authority，功能边界明确。
- **注意：** 涉及群组成员授权，需要补充越权测试和权限撤销后的实时生效机制。

### 6.5 远程与移动端部署体验继续增强

- **PR：** [#156239 — Desktop SSH timeout configuration](https://github.com/NousResearch/hermes-agent/pull/156239)
- **PR：** [#155843 — Termux fallback](https://github.com/NousResearch/hermes-agent/pull/155843)
- **判断：** 两项都属于低风险、明确收益修复，**较可能随近期版本合入**。
- **路线图含义：** Hermes Desktop 与 Gateway 正在面向自托管、移动端和跨网络环境扩展。

### 6.6 平台原生交互能力

- **PR：** [#156034 — Slack Block Kit](https://github.com/NousResearch/hermes-agent/pull/156034)
- **判断：** **中高概率进入下一版本。**
- **价值：** 将 Hermes 从“文本回复机器人”推进到 Slack 原生交互组件，为审批、状态卡片和结构化操作提供基础。

---

## 7. 用户反馈摘要

### 7.1 Desktop 稳定性直接影响日常可用性

用户反馈集中在：

- 回复文本偶尔重复，但模型原始输出并没有重复，说明用户不信任“看起来相同”的现象，必须依赖日志和传输链路定位；
- 粘贴、拖放图片无法保存，直接阻断截图分析后的归档流程；
- Windows 上 Project 分组完全失效，说明用户期待 Desktop、CLI 与持久化会话保持一致；
- Desktop 与共享 Web App 的插件加载差异明显，用户希望同一宿主机上的插件行为一致。

相关反馈：

- [#127621](https://github.com/NousResearch/hermes-agent/issues/127621)
- [#156032](https://github.com/NousResearch/hermes-agent/issues/156032)
- [#92398](https://github.com/NousResearch/hermes-agent/issues/92398)
- [#145073](https://github.com/NousResearch/hermes-agent/issues/145073)

### 7.2 多 Profile 用户最需要“可预测性”

- 用户希望 Doctor、启动告警、插件钩子、Secret 和通知都严格按照消息所属 Profile 执行；
- 当前根作用域与消息作用域不一致，让部署者难以判断配置究竟生效在哪一层；
- 会话跨 Profile 移动后无法恢复，对多身份、多工作区和团队部署尤其致命；
- Profile 重启、路由端点变化和语音配置未隔离，体现出状态生命周期没有被统一管理。

相关反馈：

- [#137010](https://github.com/NousResearch/hermes-agent/issues/137010)
- [#156000](https://github.com/NousResearch/hermes-agent/issues/156000)
- [#132727](https://github.com/NousResearch/hermes-agent/issues/132727)
- [#137801](https://github.com/NousResearch/hermes-agent/issues/137801)
- [#155638](https://github.com/NousResearch/hermes-agent/issues/155638)

### 7.3 “成功但实际没完成”比直接报错更不受欢迎

- RunPod 人脸交换任务未完成却返回成功并继续计费；
- MCP Server 离线后静默消失；
- Gateway provider 错误可能把长诊断信息直接推入聊天；
- Copilot ACP 非法工具调用被移除但没有执行。

用户共同诉求是：**必须有可验证的终态、明确错误、清理动作和资源停机保证**。

相关反馈：

- [#156278](https://github.com/NousResearch/hermes-agent/issues/156278)
- [#156262](https://github.com/NousResearch/hermes-agent/issues/156262)
- [#156287](https://github.com/NousResearch/hermes-agent/pull/156287)
- [#55431](https://github.com/NousResearch/hermes-agent/issues/55431)

### 7.4 远程、弱网络和异构平台需求增长

- 用户要求 SSH 连接与端口转发超时可配置；
- Feishu/Lark 网络短暂抖动可能让 Gateway 永久失联；
- Windows Git launcher 与 Chromium 进程管理暴露跨平台进程生命周期问题；
- Termux 用户需要发布流程在无硬链接环境下可靠降级。

这些反馈表明，实际生产环境已经不只是标准 Linux 主机和稳定网络。

相关反馈：

- [#156239](https://github.com/NousResearch/hermes-agent/pull/156239)
- [#156356](https://github.com/NousResearch/hermes-agent/issues/156356)
- [#153299](https://github.com/NousResearch/hermes-agent/issues/153299)
- [#156366](https://github.com/NousResearch/hermes-agent/issues/156366)
- [#155843](https://github.com/NousResearch/hermes-agent/pull/155843)

### 7.5 社区对插件化能力持积极态度

Panoptes、Slack Block Kit 和插件目录元数据更新说明用户不仅把 Hermes 当作命令行 Agent，也期待它成为可观察、可扩展、可定制的桌面工作台。

不过，用户也明确反映出两个不满：

1. 插件注册成功不等于实际加载成功；
2. 插件 API 若落后于原生工具能力，会迫使插件作者依赖私有接口。

相关反馈与 PR：

- [#156304](https://github.com/NousResearch/hermes-agent/pull/156304)
- [#156034](https://github.com/NousResearch/hermes-agent/pull/156034)
- [#145073](https://github.com/NousResearch/hermes-agent/issues/145073)
- [#138828](https://github.com/NousResearch/hermes-agent/issues/138828)

---

## 8. 待处理积压

### 8.1 长期开放但讨论仍活跃的问题

#### Terminal `notify=true` 验证错误

- **Issue：** [#123345](https://github.com/NousResearch/hermes-agent/issues/123345)
- **创建时间：** 2026-09-26
- **积压时间：** 约 7 周
- **风险：** 工具协议不一致会持续制造模型重试和自动化失败。
- **建议：** 明确 JSON Schema 与运行时验证器的单一来源，并补布尔值及字符串列表的双形态测试。

#### Desktop 重复响应

- **Issue：** [#127621](https://github.com/NousResearch/hermes-agent/issues/127621)
- **创建时间：** 2026-09-29
- **积压时间：** 约 7 周
- **风险：** 当前评论和点赞最高，用户感知强。
- **建议：** 建立流式事件 ID、块序号和重连幂等性测试，避免仅在渲染层去重。

#### 多 Profile Gateway 插件检查作用域

- **Issue：** [#137010](https://github.com/NousResearch/hermes-agent/issues/137010)
- **创建时间：** 2026-10-12
- **积压时间：** 约 5 周
- **风险：** 作用域错误会同时影响安全检查、插件行为和诊断可信度。
- **建议：** 统一 Profile context 传递机制，并为 root/profile 组合建立契约测试。

#### Windows 看板删除/归档 500

- **Issue：** [#143908](https://github.com/NousResearch/hermes-agent/issues/143908)
- **创建时间：** 2026-10-24
- **积压时间：** 约 3 周
- **风险：** 包含文件占用、重试和错误映射三个层次，单纯捕获异常不够。
- **建议：** 明确 SQLite 连接释放协议与可重试错误码。

### 8.2 长期 PR 积压与竞争修复

#### 九项缺陷的“Salvage wave”集中处置

- **Issue：** [#130139 — Salvage wave: 9 open issues, each with one A/B-verified carrier](https://github.com/NousResearch/hermes-agent/issues/130139)
- **状态：** 开放
- **风险：** 多个缺陷都有竞争 PR；如果不尽快选择主修复，可能继续产生冲突、重复测试和维护成本。
- **建议：** 对每个缺陷指定唯一 carrier PR，关闭重复方案，并将行为契约测试合入主干。

#### Cron/Kanban 长期修复

- [#62994 — Kanban auto-decompose assignee containment](https://github.com/NousResearch/hermes-agent/pull/62994)，创建于 2026-07-12
- [#134138 — Cron last_delivery_queued reconciliation](https://github.com/NousResearch/hermes-agent/pull/134138)，创建于 2026-10-06
- **风险：** Cron 和 Kanban 是自动化系统的关键路径，开放时间较长且相互影响。
- **建议：** 优先做端到端状态机测试，并明确 queued、delivered、failed、receipt settled 的唯一迁移规则。

#### 群组 YOLO 权限能力

- **PR：** [#137709 — feat(groups): read and set participant YOLO](https://github.com/NousResearch/hermes-agent/pull/137709)
- **创建时间：** 2026-10-13
- **积压时间：** 约 5 周
- **风险：** 功能涉及权限控制，长期开放也意味着授权契约可能尚未稳定。
- **建议：** 在合入前补齐 owner、participant、hosted room 的权限矩阵测试。

### 8.3 维护者当前应优先关注的事项

1. **统一 Profile scope 和 canonical session authority**：至少覆盖 [#137010](https://github.com/NousResearch/hermes-agent/issues/137010)、[#155638](https://github.com/NousResearch/hermes-agent/issues/155638)、[#156000](https://github.com/NousResearch/hermes-agent/issues/156000)、[#132727](https://github.com/NousResearch/hermes-agent/issues/132727)。
2. **收敛高 CPU 与网关生命周期问题**：优先 [#156339](https://github.com/NousResearch/hermes-agent/issues/156339)、[#156356](https://github.com/NousResearch/hermes-agent/issues/156356)、[#144701](https://github.com/NousResearch/hermes-agent/pull/144701)。
3. **处理高可见度 Desktop 回归**：[#127621](https://github.com/NousResearch/hermes-agent/issues/127621)、[#156032](https://github.com/NousResearch/hermes-agent/issues/156032)、[#156281](https://github.com/NousResearch/hermes-agent/issues/156281)。
4. **清理 45 条待合并 PR 的竞争方案**：参考 [#130139](https://github.com/NousResearch/hermes-agent/issues/130139)，为每个缺陷确定唯一 carrier。
5. **完善 Canary 发布说明**：明确变更项、迁移步骤、配置优先级及已知问题，避免用户仅凭版本号升级。

---

## 项目健康度结论

**综合健康度：中高，但稳定性风险正在集中显现。**

- **优势：** 社区活跃、问题反馈具体、修复 PR 丰富、插件生态和 Desktop 产品路线清晰。
- **主要风险：** 多 Profile 与 Gateway 的状态边界尚未统一；会话、receipt、Secret 和配置解析存在架构级不一致；部分后台任务缺少可靠终态和资源清理。
- **下一版本建议主题：**  
  **“Desktop 新工作区 + 多 Profile 状态一致性 + Gateway 空闲稳定性 + 跨平台进程生命周期”**。

在这些问题收敛前，建议 Canary 用户重点监控多 Profile 部署、远程 GPU 任务、Desktop 会话恢复以及 Cron/MCP 的后台任务状态。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-16**  
**数据范围：过去 24 小时**  
**仓库：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

过去 24 小时内，OpenHuman **无新增或更新 Issue**，但有 **5 个 PR 更新**，其中 **3 个待合并、2 个已关闭/完成**，项目活跃度可评估为**中等偏高**。当日改动集中在 **成本面板异步一致性、OAuth 回环重试、Solana 辅助账户、Agent 模型覆盖配置**以及 **TinyComputer 版本对齐**等方向。当前无新版本发布，也缺少用户 Issue、评论及点赞数据，因此社区讨论热度暂无法充分判断。整体上，开发活动较集中且技术主题明确，但仍有 **3 个关键修复与功能 PR 等待审查合并**。

---

## 3. 项目进展

### 已关闭/完成的重要 PR

#### 1. 修复 Agent Chat 在固定角色路由下忽略模型覆盖配置的问题

- **PR：** [#8734](https://github.com/tinyhumansai/openhuman/pull/8734)
- **状态：** CLOSED
- **作者：** [@senamakel](https://github.com/senamakel)
- **方向：** Rust Core / Agent / Bug 修复
- **主要进展：**
  - 当宿主将 Agent Turn 角色固定到特定供应商路由时，`inference.agent_chat` 的 `model_override` 现在能够实际改变请求模型。
  - 修复了该参数此前被静默忽略的问题。
  - `inference_reasoning_effort` 相关行为也得到覆盖。
- **影响评估：**
  - 提升 Agent 执行时配置的可控性。
  - 避免“界面已设置模型覆盖，但固定路由下实际未生效”的隐性配置偏差。
  - 对依赖不同模型进行推理强度控制的自动化场景具有直接价值。

#### 2. 支持通过 `captcha_provider` 选择 TypeSafe 或 Surplus

- **PR：** [#8733](https://github.com/tinyhumansai/openhuman/pull/8733)
- **状态：** CLOSED
- **作者：** [@senamakel](https://github.com/senamakel)
- **方向：** Rust Core / Computer / TinyComputer 升级对齐
- **主要进展：**
  - 将 TinyComputer 固定到 **v0.18.0**，对应提交 `54aea142427d384aa38301c10d24038a1010acca`。
  - 使用新的总线契约 **3.3**。
  - 新增 Jev Provider `surplus`。
  - `captcha_provider` 现可选择 **TypeSafe** 或 **Surplus**。
- **影响评估：**
  - 扩展验证码处理 Provider 的可选项，增强供应商冗余与策略调度能力。
  - 固定 TinyComputer 版本和资产摘要，有助于降低浮动依赖带来的构建不确定性。

### 待合并 PR

#### 1. 成本面板保留最新一次刷新结果

- **PR：** [#8721](https://github.com/tinyhumansai/openhuman/pull/8721)
- **状态：** OPEN
- **作者：** [@Ricardo-M-L](https://github.com/Ricardo-M-L)
- **方向：** 成本看板 / 异步请求一致性
- **主要进展：**
  - 当多个 RPC 请求乱序完成时，仅保留最新一次刷新结果。
  - 忽略过期的成功结果、错误结果及 Loading 状态更新。
  - 最新请求处于等待状态时，合并定时轮询；手动刷新仍可覆盖前一次请求。
- **影响评估：**
  - 直接降低慢网络或 RPC 延迟导致的成本数据回退、错误覆盖和界面状态抖动。
  - 这是当前待合并 PR 中对用户可见稳定性价值较高的一项。

#### 2. OAuth 回环重试前清理旧超时与监听器

- **PR：** [#8720](https://github.com/tinyhumansai/openhuman/pull/8720)
- **状态：** OPEN
- **作者：** [@Ricardo-M-L](https://github.com/Ricardo-M-L)
- **方向：** OAuth / 原生回调可靠性
- **主要进展：**
  - 新一轮回环 OAuth 尝试启动前，清理上一次尝试留下的回调计时器。
  - 完整拆除旧 JavaScript 尝试，包括可能较晚注册的监听器。
  - 被后续尝试取代的回调等待将明确拒绝。
  - 通过监听器代际机制保护原生停止流程，避免旧请求停止新 Rust 监听器。
- **影响评估：**
  - 解决 OAuth 重试、超时和回调竞争条件下的跨尝试干扰问题。
  - 对桌面端本地登录、授权重试及异常恢复流程尤其重要。

#### 3. 支持由同一助记词派生 Solana 辅助账户

- **PR：** [#8735](https://github.com/tinyhumansai/openhuman/pull/8735)
- **状态：** OPEN
- **作者：** [@senamakel](https://github.com/senamakel)
- **方向：** Wallet / Solana
- **主要进展：**
  - 钱包可持有来自同一恢复助记词的辅助账户。
  - 首个新增账户为 Solana **Index 1**，派生路径为 `m/44'/501'/1'/0'`，标签为 `giveaway`。
  - `WalletAccount` 新增 `index` 字段，默认值为 `0`，保证旧持久化状态兼容。
  - 新增可选 `label` 字段。
  - 恢复和导入流程可派生新账户。
  - 为每个账户提供独立的程序签名策略。
- **影响评估：**
  - 扩展多账户操作场景，如主账户与专用赠送账户隔离。
  - 新字段提供默认值，存量数据兼容性风险较低。
  - 涉及私钥派生、恢复和签名权限，仍建议在合并前重点审查权限边界与迁移测试。

---

## 4. 社区热点

今日没有 Issue 更新，所有 PR 的评论数及点赞数均未提供或显示为 **0**，因此无法基于互动量识别“讨论最活跃”的条目。按技术影响和待合并状态排序，当前最值得关注的是：

1. **[#8735 — Solana 辅助账户及独立签名策略](https://github.com/tinyhumansai/openhuman/pull/8735)**  
   代表钱包多账户与权限隔离需求，是今日最明显的新功能方向。

2. **[#8720 — OAuth 回环重试清理旧监听器和超时](https://github.com/tinyhumansai/openhuman/pull/8720)**  
   聚焦登录授权的竞态与恢复可靠性，直接影响桌面端关键流程。

3. **[#8721 — 成本看板请求乱序保护](https://github.com/tinyhumansai/openhuman/pull/8721)**  
   改善异步请求下的数据准确性和界面一致性。

4. **[#8734 — 修复 Agent Chat 模型覆盖参数被忽略](https://github.com/tinyhumansai/openhuman/pull/8734)**  
   已关闭，但说明固定供应商路由与 Agent 模型调度之间曾存在明显配置断层。

5. **[#8733 — TinyComputer v0.18.0 与验证码 Provider 扩展](https://github.com/tinyhumansai/openhuman/pull/8733)**  
   扩展 CAPTCHA Provider 选择能力，并固定依赖版本与总线契约。

**背后诉求判断：**  
今日活动更多来自核心开发与功能推进，而非社区需求反馈。主要诉求集中在三点：异步操作必须以“最新请求”为准；重试流程不能被旧监听器或计时器污染；Agent 与钱包需要更细粒度的模型、账户和权限控制。

---

## 5. Bug 与稳定性

今日没有新 Issue，因此没有社区新报告的崩溃、回归或缺陷。以下按影响程度整理已识别问题及对应修复状态：

### 高优先级

#### Agent 固定角色路由下模型覆盖参数失效

- **关联 PR：** [#8734](https://github.com/tinyhumansai/openhuman/pull/8734)
- **状态：** **已有修复，PR 已关闭**
- **影响：** `model_override` 在固定 Provider 路由下被静默忽略，可能导致实际模型与用户配置不符。

#### OAuth 重试中的旧计时器和监听器干扰

- **关联 PR：** [#8720](https://github.com/tinyhumansai/openhuman/pull/8720)
- **状态：** **已有修复 PR，待合并**
- **影响：** 旧尝试可能停止新监听器，或让已废弃的回调等待继续占用流程，造成 OAuth 授权失败、卡住或超时。

### 中优先级

#### 成本面板 RPC 乱序导致旧数据覆盖新数据

- **关联 PR：** [#8721](https://github.com/tinyhumansai/openhuman/pull/8721)
- **状态：** **已有修复 PR，待合并**
- **影响：** 较旧的成功或错误响应可能覆盖最新结果，Loading 状态也可能回退，造成成本数据展示不准确。

### 低优先级 / 集成稳定性

#### TinyComputer 版本与 Provider 能力对齐

- **关联 PR：** [#8733](https://github.com/tinyhumansai/openhuman/pull/8733)
- **状态：** **已关闭**
- **影响：** 通过固定 v0.18.0、总线契约 3.3 和资产摘要，减少 CAPTCHA Provider 集成差异及依赖漂移。

---

## 6. 功能请求与路线图信号

今日没有通过 Issue 提交的新功能请求，但现有 PR 显示出以下路线图信号：

### 钱包多账户与权限分层

- **信号来源：** [#8735](https://github.com/tinyhumansai/openhuman/pull/8735)
- **可能纳入下一版本的候选能力：**
  - 同一助记词派生多个 Solana 账户。
  - 账户标签，例如 `giveaway`。
  - 每个账户独立配置程序签名策略。
- **判断：** 较高概率进入后续版本。PR 已形成较完整的数据结构、恢复、导入和策略设计，但应先完成权限及兼容性审查。

### CAPTCHA Provider 可插拔与多供应商调度

- **信号来源：** [#8733](https://github.com/tinyhumansai/openhuman/pull/8733)
- **方向：**
  - 支持 TypeSafe 与 Surplus 两种 Provider。
  - 继续推进 TinyComputer 协议和依赖固定。
- **判断：** 基础设施能力已进入代码，后续更可能体现为 Provider 配置选项、故障切换或策略选择增强。

### Agent 模型与推理强度精细控制

- **信号来源：** [#8734](https://github.com/tinyhumansai/openhuman/pull/8734)
- **方向：**
  - 固定供应商路由下仍允许覆盖模型。
  - 正确应用推理强度参数。
- **判断：** 属于 Agent 路由体系成熟化的基础能力，预计会继续扩展到更多调用入口和角色配置。

### 成本与用量面板可靠性

- **信号来源：** [#8721](https://github.com/tinyhumansai/openhuman/pull/8721)
- **方向：**
  - 最新请求优先原则。
  - 定时轮询合并。
  - 手动刷新抢占。
- **判断：** 更偏向稳定性修复，而非大型新功能；若合并顺利，可能随近期版本或维护分支发布。

---

## 7. 用户反馈摘要

过去 24 小时内：

- **Issue 评论数：0**
- **Issue 更新数：0**
- **PR 评论数据：未提供，可确认均为 0**
- **PR 点赞数据：均为 0**

因此，今日没有足够的新增用户评论可用于提炼真实痛点、满意点或不满意反馈。

从 PR 内容可间接观察到以下使用需求：

1. **成本看板用户需要一致、可预测的数据结果**  
   慢 RPC 环境下不能出现旧数据回退、错误覆盖或 Loading 状态错乱。  
   相关 PR：[#8721](https://github.com/tinyhumansai/openhuman/pull/8721)

2. **OAuth 授权用户需要可靠的重试与异常恢复**  
   尤其是在本地回环监听、回调超时及连续重试场景下，不应发生跨尝试互相干扰。  
   相关 PR：[#8720](https://github.com/tinyhumansai/openhuman/pull/8720)

3. **Agent 用户需要配置真正生效**  
   固定 Provider 路由不能导致模型覆盖和推理强度设置被静默忽略。  
   相关 PR：[#8734](https://github.com/tinyhumansai/openhuman/pull/8734)

4. **钱包用户需要多账户隔离和用途区分**  
   主账户与 `giveaway` 等专用账户应能独立控制签名权限。  
   相关 PR：[#8735](https://github.com/tinyhumansai/openhuman/pull/8735)

---

## 8. 待处理积压

### 待审查与合并 PR

1. **[#8721 — 成本看板保留最新刷新结果](https://github.com/tinyhumansai/openhuman/pull/8721)**  
   - 待处理时长：创建于 2026-11-14，2026-11-16 仍有更新。  
   - 建议：优先验证乱序响应、错误响应、Loading 状态及手动刷新抢占场景。

2. **[#8720 — OAuth 重试前清理旧回环超时](https://github.com/tinyhumansai/openhuman/pull/8720)**  
   - 待处理时长：创建于 2026-11-14，2026-11-16 仍有更新。  
   - 建议：重点测试连续重试、延迟回调、旧监听器晚注册及原生停止竞态。

3. **[#8735 — Solana Index 1 辅助账户](https://github.com/tinyhumansai/openhuman/pull/8735)**  
   - 待处理时长：创建于 2026-11-15，当日更新。  
   - 建议：审查恢复助记词派生路径、存量状态迁移、账户标签及每账户签名权限隔离。

### 长期未响应 Issue

- 今日没有可识别的长期未响应 Issue。
- 由于过去 24 小时 Issue 更新为 0，且未提供更长时间窗口的 Issue 列表，无法评估历史 Issue 积压规模或平均响应时间。

---

## 项目健康度结论

**健康度：中等偏高，但社区信号偏弱。**

- **开发活跃度：良好**——24 小时内有 5 个 PR 更新，覆盖基础设施、Agent、钱包和成本看板多个核心模块。
- **稳定性进展：良好**——关键 OAuth 竞态、成本面板乱序覆盖和 Agent 配置失效问题均有明确修复方向。
- **功能推进：良好**——Solana 多账户与独立签名策略体现明确的产品扩展方向。
- **发布状态：平稳但无新版本**——当日无 Release，3 个关键 PR 尚未合并，短期发布节奏尚未体现。
- **社区健康度：数据不足**——没有 Issue、评论或点赞数据，无法确认外部用户反馈强度；应关注 PR 审查是否及时，避免待合并项持续积压。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
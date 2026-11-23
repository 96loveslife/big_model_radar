# OpenClaw 生态日报 2026-11-23

> Issues: 401 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-23 06:52 UTC

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

**统计日期：2026-11-23**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**

---

## 1. 今日速览

- OpenClaw 过去 24 小时共更新 **401 条 Issues、500 条 PR**，另有 **1 个新版本 v2026.11.7** 发布，整体开发活动非常高。
- Issue 新开或活跃 **335 条**、关闭 **66 条**；PR 待合并 **259 条**、合并或关闭 **241 条**，但仅凭数量无法直接认定净新增合并量。
- 今日议题集中在**升级器与 Gateway 稳定性、会话恢复、内存索引、消息投递可靠性、Codex 子代理协作及 Web UI 细节优化**。
- 新版本 v2026.11.7 强调**网关重启后的会话恢复**和**自动化可靠性**，方向正确，但当日仍有 WAL 校验、更新迁移冲突、插件迁移、Gateway RSS/OOM 等高优先级问题待解决。
- 综合评估：**项目健康度中等偏高，迭代活跃、功能推进明显，但升级链路和长会话稳定性仍是主要风险点**。高优先级积压较多，且不少 Issue 仍缺少明确修复 PR。

---

## 2. 版本发布

### [v2026.11.7](https://github.com/openclaw/openclaw/releases/tag/v2026.11.7)

#### 核心更新

- **会话恢复增强**
  - Gateway 重启后，可恢复被中断的回复以及子任务结果。
  - 目标是避免尚未完成的工作在重启后丢失。
  - 对应相关修复包括 #198905、#201544、#200924、#200967。
- **自动化可靠性增强**
  - 提升自动化任务在异常、重启及子任务完成场景下的连续性。
- **更新与运行时处理改进**
  - 今日多项 PR 围绕 pnpm 更新、Gateway 重启、Doctor 延迟检查、更新运行时清理展开，表明项目仍在集中加固发布与升级链路。

#### 破坏性变更与迁移注意事项

当前提供的 Release 说明未显示明确的破坏性变更，但升级前应注意：

1. **升级前备份状态目录和 SQLite 数据**，尤其是生产 Gateway。
2. **核对 Doctor 的 WAL publication 与插件迁移结果**。相关高优问题仍处于开放状态：
   - [#197083：Doctor WAL publication verification 导致更新仅完成一半](https://github.com/openclaw/openclaw/issues/197083)
   - [#200606：候选 Doctor 因插件迁移冲突阻塞更新](https://github.com/openclaw/openclaw/issues/200606)
3. **pnpm 用户应优先验证更新后的 CLI 与 Gateway 是否均可用**：
   - [#203401](https://github.com/openclaw/openclaw/pull/203401)
   - [#201906](https://github.com/openclaw/openclaw/pull/201906)
4. 检查更新后遗留的 `openclaw-update-runtime-*` 目录，相关清理修复位于：
   - [#203917](https://github.com/openclaw/openclaw/pull/203917)
5. 对长期运行的 Gateway，建议升级后检查 RSS、启动耗时、SQLite WAL 状态及会话恢复结果。

---

## 3. 项目进展

### 3.1 更新器与 Gateway 发布链路继续加固

- [#203966：新增 T 到 T+1 升级存活 E2E 场景](https://github.com/openclaw/openclaw/pull/203966)
  - 通过 `update.run` 走真实 Gateway 更新交接流程。
  - 补足过去只验证软件包升级、未覆盖运行中 Gateway 和候选版本试运行链路的测试缺口。
- [#203959：升级后继续执行延迟 Doctor 检查](https://github.com/openclaw/openclaw/pull/203959)
  - 修复后续较短 Doctor 流程用空列表覆盖待检查项，导致可选检查被跳过的问题。
- [#203917：清理已发布更新器遗留的更新运行时](https://github.com/openclaw/openclaw/pull/203917)
  - 针对约 **640 MiB** 的 `openclaw-update-runtime-*` 残留目录。
- [#203923：恢复长时间安装过程中的备份](https://github.com/openclaw/openclaw/pull/203923)
  - 修复旧 `plugin-runtime-deps` 缓存被归档后，符号链接清单超过 1 MiB 上限的问题。
- [#201025：使用 prepared runtime 启动 worker node](https://github.com/openclaw/openclaw/pull/201025)
  - 减少节点重复 runtime expansion 与预热。
  - 避免 disposable node 等待 private-computer 准备后才连接。
  - 降低 Gateway 升级后旧 runtime 重连的风险。
- [#201029：复用已准入的 prepared project snapshot](https://github.com/openclaw/openclaw/pull/201029)
  - 减少 worker dispatch 阶段重复执行仓库准入与内容验证。
  - 强化工作区、工具链和 runtime 的快照可信度。

**进展评价：**  
这些改动没有大规模增加用户可见功能，但直接提升升级成功率和 worker 调度可靠性，是 v2026.11.7 发布链路的重要工程化补强。

### 3.2 Workboard 开始强化共享任务治理

- [#203935：保留 Workboard 共同工作目标](https://github.com/openclaw/openclaw/pull/203935)
  - 防止共享 Work 在生命周期或调度跨 runtime 边界时丢失或替换既定目标。
  - 限制未经明确批准的旁支目标消耗资源。
  - 减少普通 helper 或 specialist 越权插入用户工作流。
  - 标注了 compatibility、session-state、availability 三类兼容性风险，仍需要充分证明。

**进展评价：**  
这是向“可持续运行、多代理协作的任务工作台”演进的重要信号，但合并前需要证明目标持久化、权限边界和故障恢复行为没有退化。

### 3.3 Web UI 与 Control UI 进行密集体验优化

今日多个小而明确的 PR 聚焦移动端和长路径可读性：

- [#203681：Memory 搜索路径保持紧凑](https://github.com/openclaw/openclaw/pull/203681)
- [#203680：Memory 导入文件名与状态对齐](https://github.com/openclaw/openclaw/pull/203680)
- [#203678：转录发言人 ID 与时间保持同一行](https://github.com/openclaw/openclaw/pull/203678)
- [#203825：文件树展开时保持 Review 文件名紧凑](https://github.com/openclaw/openclaw/pull/203825)
- [#203771：Review 变更区突出可识别文件名](https://github.com/openclaw/openclaw/pull/203771)
- [#203770：移动端 Review 保留分支名末段](https://github.com/openclaw/openclaw/pull/203770)
- [#203768：Processes 页保持可执行文件名可见](https://github.com/openclaw/openclaw/pull/203768)
- [#203767：移动端压缩进程名展示](https://github.com/openclaw/openclaw/pull/203767)
- [#203691：Portal 预览名称保持单行区分](https://github.com/openclaw/openclaw/pull/203691)
- [#203824：Desktop 查看器完整显示所选尺寸](https://github.com/openclaw/openclaw/pull/203824)
- [#203690：插件结果名称与 Install 操作对齐](https://github.com/openclaw/openclaw/pull/203690)
- [#203747：Desktop 来源名称与 ID 不再换行](https://github.com/openclaw/openclaw/pull/203747)
- [#203967：命令面板附件靠近输入草稿](https://github.com/openclaw/openclaw/pull/203967)

**进展评价：**  
这一批 PR 规模和风险普遍较小，适合快速合并，可明显改善 Control UI 在移动端和长资源名场景下的可扫描性。

### 3.4 权限、认证和渠道体验继续完善

- [#203963：用自然语言说明被权限阻止的操作](https://github.com/openclaw/openclaw/pull/203963)
  - 避免直接向用户暴露内部 scope 名称。
  - 同时覆盖 Web UI 与 Android 原生聊天编辑器。
- [#203962：Telegram 私聊 topic 自动命名后立即更新 session 名称](https://github.com/openclaw/openclaw/pull/203962)
  - 解决 topic 已改名但 session 仍显示占位标题的问题。
- [#203954：切换聊天模型时保留 Speed 选项](https://github.com/openclaw/openclaw/pull/203954)
  - 防止 OpenAI 与 Anthropic 模型切换后，用户原有 Fast 付费档设置被意外清除。
- [#203952：GitHub 预览使用已连接的 GitHub CLI 账户](https://github.com/openclaw/openclaw/pull/203952)
  - 修复 Settings 中显示已验证，但链接预览和 `github_read`/`github_search` 仍匿名读取的不一致。

---

## 4. 社区热点

### 4.1 Issue 热点

1. [#197083：Post-install Doctor WAL 校验导致 11.3 更新未完全结束](https://github.com/openclaw/openclaw/issues/197083)  
   **35 条评论，P0，UX release blocker**  
   诉求集中在升级原子性：更新已切换新核心，但 Doctor 在 WAL commit publication 验证阶段失败，系统拒绝回滚，最终形成“服务可运行、插件或迁移状态未完全落地”的半完成状态。

2. [#150635：短期 recall 容量上限导致 deep dreaming 永远无法晋升](https://github.com/openclaw/openclaw/issues/150635)  
   **30 条评论，影响 session state / data loss**  
   用户需要记忆系统在 512 条短期存储上限下仍能正确晋升重要内容；当前批量摄入的零 recall 条目可能挤占关键数据。

3. [#182891：Prompt cache 每次请求都未复用](https://github.com/openclaw/openclaw/issues/182891)  
   **26 条评论，P1**  
   `cache read dropped N -> 0`，涉及 envelope 重写、`runtimeContextCarrier` 变化和 turn 内异常丢弃，直接影响响应延迟与模型调用成本。

4. [#200606：候选 Doctor 因插件迁移冲突且 `changed=[]` 阻塞更新](https://github.com/openclaw/openclaw/issues/200606)  
   **21 条评论，P1**  
   反映插件迁移义务的确定性不足：候选验证需要同时识别输入冲突和真实变更，不能被空变更结果误导。

5. [#155563：agent turn 完成后仍保留 service-child relay 与 MCP group](https://github.com/openclaw/openclaw/issues/155563)  
   **18 条评论，P1**  
   生命周期修复没有完全生效，可能造成资源积累、状态残留和后续调度异常。

6. [#192632：新增 Claude 服务端 web_search provider](https://github.com/openclaw/openclaw/issues/192632)  
   **16 条评论，P2 功能需求**  
   用户希望通过单独的 Anthropic Messages 请求调用 server-side `web_search`，并保持与 Gemini、Perplexity provider 一致的引用返回结构。

7. [#125764：Telegram 单次发送失败后直接进入 dead-letter](https://github.com/openclaw/openclaw/issues/125764)  
   **16 条评论，P1 / message loss**  
   网络抖动造成 announce/completion 回复静默丢失，缺少重试、未知发送状态对账和用户可见告警。

8. [#154812：Gateway 非 V8 堆 RSS 持续增长并触发 OOM](https://github.com/openclaw/openclaw/issues/154812)  
   **15 条评论，P1**  
   约 9.32 GiB RSS 且退出超时，表明内存问题可能不只来自 JavaScript heap，现有阈值监控覆盖不足。

9. [#196199：Codex helper 完成后续接父会话失败](https://github.com/openclaw/openclaw/issues/196199)  
   **15 条评论，session state / message loss**  
   父代理已经 yield 后，子 helper 完成事件无法可靠唤醒父任务，造成目标暂停和助手锁定。

### 4.2 PR 热点

- [#203935：Workboard 保留共同工作目标](https://github.com/openclaw/openclaw/pull/203935)  
  虽为当日新 PR，但因涉及目标持久化、权限与资源治理，被标记为需要充分证明。

- [#203401：pnpm 更新后保持 CLI 与 Gateway 可用](https://github.com/openclaw/openclaw/pull/203401)  
  面向真实生产升级路径，覆盖 pnpm 11/12 及 2026.11.5→2026.11.7 等升级路径。

- [#201906：已发布 pnpm updater 拒绝后完成 Gateway 重启](https://github.com/openclaw/openclaw/pull/201906)  
  聚焦 `service-revalidation-failed` 导致 Gateway 停机的问题。

- [#203966：新增真实 Gateway 升级存活 E2E](https://github.com/openclaw/openclaw/pull/203966)  
  对发布质量具有较高价值。

---

## 5. Bug 与稳定性

> “已有 fix PR”仅依据当前数据中可明确关联的开放 PR 判断；没有可见关联 PR 的，统一标记为“未见明确 fix PR”。

### P0 / 发布阻断

| 问题 | 影响 | 修复状态 |
|---|---|---|
| [#197083：Doctor WAL publication 校验失败，更新半完成](https://github.com/openclaw/openclaw/issues/197083) | 更新状态不一致、插件或迁移未落地 | 未见明确 fix PR |
| [#190563：Codex paused chat 因 provider review/native thread 不匹配无法恢复](https://github.com/openclaw/openclaw/issues/190563) | 会话状态损坏、用户无法继续已有对话 | 未见明确 fix PR |
| [#158912：MEMORY.md 自 2026.9.6 起不再在 bootstrap 注入](https://github.com/openclaw/openclaw/issues/158912) | 记忆能力与文档行为不一致，影响上下文和会话状态 | 未见明确 fix PR |
| [#201468：macOS 新版 App 拒绝向旧 Gateway 执行 schema migration](https://github.com/openclaw/openclaw/issues/201468) | 凭证准备失败、启动恢复路径受阻 | 未见明确 fix PR |

### P1 / 高优先级稳定性

| 问题 | 核心症状 | 修复状态 |
|---|---|---|
| [#196199：Codex helper 无法恢复父代理](https://github.com/openclaw/openclaw/issues/196199) | 父任务暂停、目标锁定、结果可能丢失 | 未见明确 fix PR |
| [#154812：Gateway off-heap RSS 增长导致 OOM](https://github.com/openclaw/openclaw/issues/154812) | 主机 OOM、服务退出超时 | 未见明确 fix PR |
| [#182369：RSS 约 0.1 GiB/h 增长且内部阈值不报警](https://github.com/openclaw/openclaw/issues/182369) | 长期运行后崩溃风险 | 未见明确 fix PR |
| [#190307：Gateway 重启后大量 agent 永久 degraded](https://github.com/openclaw/openclaw/issues/190307) | admission timeout、需要完整 `doctor --fix` | 未见明确 fix PR |
| [#193262：Windows Docker bind mount 启动失败](https://github.com/openclaw/openclaw/issues/193262) | ENOENT、容器无法启动 | 未见明确 fix PR |
| [#200606：插件迁移冲突阻塞更新](https://github.com/openclaw/openclaw/issues/200606) | 无法完成候选版本验证 | 未见明确 fix PR |
| [#200224：退役 heartbeat 配置导致 beta 更新被拒绝](https://github.com/openclaw/openclaw/issues/200224) | 更新流程与旧配置不兼容 | 未见明确 fix PR |
| [#182891：Prompt cache 从不命中](https://github.com/openclaw/openclaw/issues/182891) | 延迟和调用成本上升 | 未见明确 fix PR |
| [#155563：child relay / MCP group 生命周期残留](https://github.com/openclaw/openclaw/issues/155563) | 状态残留、资源积累 | 未见明确 fix PR |
| [#125764：Telegram 发送失败后静默丢消息](https://github.com/openclaw/openclaw/issues/125764) | 完成通知丢失 | 未见明确 fix PR |
| [#160494：持久 session 的 cron 在 session rotation 时被拒绝](https://github.com/openclaw/openclaw/issues/160494) | 调度任务无法在窗口内运行 | 未见明确 fix PR |
| [#191476：Matrix image_generate 完成后 room 持续报错](https://github.com/openclaw/openclaw/issues/191476) | 房间消息链路中断 | 未见明确 fix PR |
| [#128140：`memory_search` 工具固定 15 秒超时](https://github.com/openclaw/openclaw/issues/128140) | CLI 可用但 Agent 工具不可用 | 未见明确 fix PR |
| [#196505：大 memory corpus 因 worker capacity 中止](https://github.com/openclaw/openclaw/issues/196505) | 约 864 MiB 语料无法完成索引 | 未见明确 fix PR |
| [#170928：Windows Gateway 启动需 7–9 分钟](https://github.com/openclaw/openclaw/issues/170928) | 就绪缓慢、间歇无响应 | 未见明确 fix PR |
| [#146860：Windows Scheduled Task 更新交接停滞](https://github.com/openclaw/openclaw/issues/146860) | 更新停在 activating，最终 abandoned | 未见明确 fix PR |
| [#138972：Talk realtime 在工具结果回传前过期](https://github.com/openclaw/openclaw/issues/138972) | 实时语音回合失败 | 未见明确 fix PR |
| [#142116：重启恢复阻塞 Telegram ingress](https://github.com/openclaw/openclaw/issues/142116) | 消息进入停滞或丢失 | 未见明确 fix PR |

### 已关闭或已有处理迹象的问题

- [#118793：Claude CLI session limit 未触发模型 fallback](https://github.com/openclaw/openclaw/issues/118793)  
  **已关闭**，说明错误分类与 fallback 链路已有处理结果。
- [#195279：后台 exec 完成唤醒因执行权限失效丢失结果](https://github.com/openclaw/openclaw/issues/195279)  
  **已关闭**，后台任务结果恢复链路得到处理。
- [#157827：合并 REM 证据引用与存储文本范围不一致](https://github.com/openclaw/openclaw/issues/157827)  
  **已关闭**，记忆证据可追溯性问题得到处理。
- [#157537：Claude CLI 重复输出导致 WebChat 重复投递](https://github.com/openclaw/openclaw/issues/157537)  
  **已关闭**，重复消息问题已处理。
- [#164887：optional-silent cron turn 最终状态不完整](https://github.com/openclaw/openclaw/issues/164887)  
  **已关闭**。
- [#142310：WebChat 工具调用前文本重复渲染](https://github.com/openclaw/openclaw/issues/142310)  
  **已关闭**。
- [#168777：memory embedding cache 重复保存向量](https://github.com/openclaw/openclaw/issues/168777)  
  **已关闭**，记忆索引存储优化已有对应成果。
- [#203923：长时间安装导致备份清单溢出](https://github.com/openclaw/openclaw/pull/203923)  
  PR 已关闭，但状态标记为等待维护者，建议确认修复是否以其他 PR 形式落地。

---

## 6. 功能请求与路线图信号

### 高概率进入近期版本

1. **Claude 服务端 Web Search**
   - [#192632](https://github.com/openclaw/openclaw/issues/192632)
   - 与现有 Gemini、Perplexity provider 形成统一接口，产品边界清晰。
   - 若补齐 provider 测试、引用格式和失败 fallback，较可能进入后续小版本或插件生态更新。

2. **父会话外创建项目 session**
   - [#203957](https://github.com/openclaw/openclaw/pull/203957)
   - 允许从聊天直接创建无父级项目 session，并选择注册项目、准备新 worktree。
   - 直接推动“独立任务/项目型 AI 助手”能力，可能成为下一阶段 Agent 编排的重要入口。

3. **Workboard 共同目标持久化与权限隔离**
   - [#203935](https://github.com/openclaw/openclaw/pull/203935)
   - 体现路线从简单任务列表向多代理共享工作空间演进。
   - 需先解决兼容性、会话状态和可用性证明。

4. **Active Memory 插件化深度召回决策**
   - [#151178](https://github.com/openclaw/openclaw/issues/151178)
   - 允许插件作为单一所有者，决定在确定性检索未命中后是否启动 deep recall。
   - 已有 linked PR 状态，落地概率高于普通长尾需求，但仍需产品决策和接口稳定性确认。

5. **Workboard 卡片归档与移动**
   - [#182463](https://github.com/openclaw/openclaw/issues/182463)
   - 可直接通过 `openclaw.action.run` 执行结构化操作，减少让 Agent 以自然语言操作 UI。
   - 更符合“可组合 AI 助手 + 插件动作”方向。

### 中等概率、依赖架构决策

- [#124306：Exec approval 显示目标路径是否为挂载点](https://github.com/openclaw/openclaw/issues/124306)  
  安全价值高，但需要决定风险提示格式及跨平台检测方式。
- [#133709：后台 ACP 权限请求映射为 OpenClaw approval](https://github.com/openclaw/openclaw/issues/133709)  
  有利于统一 Claude Code/Cursor 等后台代理权限模型，但需安全审查。
- [#103067：集中管理会话命名及子代理生命周期](https://github.com/openclaw/openclaw/issues/103067)  
  是长期架构议题，可能随 session source owner 重构逐步推进。
- [#130257：任务账本记录 delegated ACP 的 token 与成本](https://github.com/openclaw/openclaw/issues/130257)  
  对成本治理价值高，但需要确定代理运行时的统一计费接口。
- [#157614：进度流独立命令文本长度预算](https://github.com/openclaw/openclaw/issues/157614)  
  属于配置与体验细化，可较快落地。

### 尚处早期

- [#157827：让定时任务使用插件提供的系统指令](https://github.com/openclaw/openclaw/issues/157827)（Issue 已关闭；对应功能请求 Issue 为 [#185715](https://github.com/openclaw/openclaw/issues/185715)）
- [#167341：允许运营方覆盖模型请求失败文案](https://github.com/openclaw/openclaw/issues/167341)
- [#151178：Active Memory escalation provider](https://github.com/openclaw/openclaw/issues/151178)

---

## 7. 用户反馈摘要

### 真实使用场景

- **生产 Gateway 长期运行**
  - 多 agent、cron、浏览器自动化、Discord/Telegram/Matrix 多渠道同时使用。
  - 用户重点观察 RSS、启动时间、session 恢复和消息是否丢失。
- **npm 与 pnpm 混合升级**
  - pnpm 11/12 环境出现更新后 CLI 存在但 Gateway 停机的问题。
  - 用户要求更新器具备真正的端到端“升级后仍可服务”保证。
- **Windows + Docker Desktop + WSL2**
  - Windows 盘 bind mount、Scheduled Task、InteractiveToken 都是实际部署障碍。
- **Codex 原生子代理工作流**
  - 用户依赖父代理等待、暂停、恢复以及 child result 回传。
  - 当前失败会直接中断多步任务，而非只影响单次响应。
- **大语料长期记忆**
  - 数百 MiB 到近 1 GiB 语料索引、短期 recall 上限和深层记忆晋升是核心诉求。
- **控制台和移动端管理**
  - 用户持续处理长文件名、长路径、进程名、分支名和插件名，强调单行可读性和操作按钮紧邻内容。

### 主要痛点

1. **升级结果不可信**
   - 用户最担心“表面更新成功，实际只迁移了一半”。
   - Doctor、WAL、插件迁移和 Gateway 重启之间缺乏足够可预测的一致性。

2. **关键消息静默丢失**
   - Telegram 网络失败、Matrix consumer 关闭、Codex helper 回传失败、cron session rotation 都会导致用户收不到完成通知或恢复信号。

3. **长期运行资源增长**
   - off-heap RSS 持续增长且现有监控不触发，用户只能依赖人工重启。

4. **记忆系统规模化不足**
   - CLI 可搜索但 Agent 工具超时；索引容量达到阈值后直接中止；短期 recall 上限阻断深层晋升。

5. **子代理生命周期不可靠**
   - 父会话恢复、Codex 线程匹配、重复最终回复、child group 残留共同说明多代理会话状态仍是高复杂度区域。

### 积极信号

- 用户愿意提供详细环境、数据库 schema、日志和复现步骤，维护者也有多项 PR 直接针对这些问题。
- v2026.11.7 已开始系统性处理重启恢复和自动化可靠性。
- Control UI 的高频小型修复说明项目对实际界面细节有持续投入，而非只关注底层能力。

---

## 8. 待处理积压

### 应优先处理的长期重要 Issue

1. [#150635：短期 recall 上限阻断 deep dreaming](https://github.com/openclaw/openclaw/issues/150635)  
   9 月创建、30 条评论，涉及数据丢失和记忆晋升核心链路，仍未见明确修复 PR。

2. [#154812：Gateway off-heap RSS/OOM](https://github.com/openclaw/openclaw/issues/154812)  
   9 月创建、P1，涉及主机级 OOM。另一个 RSS 问题 [#182369](https://github.com/openclaw/openclaw/issues/182369) 也持续开放，建议合并专项排查。

3. [#125764：Telegram 发送失败后无重试和状态对账](https://github.com/openclaw/openclaw/issues/125764)  
   8 月创建、影响消息可靠性，用户已有实际静默丢消息场景。

4. [#158912：MEMORY.md bootstrap 行为与文档不一致](https://github.com/openclaw/openclaw/issues/158912)  
   9 月创建、P0，涉及上下文、状态和安全语义，不应长期悬置。

5. [#146860：Windows Scheduled Task 更新交接停滞](https://github.com/openclaw/openclaw/issues/146860)  
   9 月创建、P0、更新发布阻断，需结合 Windows 平台专项测试处理。

6. [#124306：Exec approval 未提示挂载点风险](https://github.com/openclaw/openclaw/issues/124306)  
   8 月创建，涉及命令删除的安全边界，需产品与安全评审共同推进。

7. [#103067：会话命名和子代理生命周期统一](https://github.com/openclaw/openclaw/issues/103067)  
   7 月创建，反映长期架构债务，应纳入 session source owner 重构路线。

8. [#187917：updater-runtime-retention 更新失败](https://github.com/openclaw/openclaw/issues/187917)  
   10 月创建，仍标记为 stale；今日已有相关运行时清理 PR [#203917](https://github.com/openclaw/openclaw/pull/203917)，建议确认关闭条件。

### PR 侧待关注

- [#203935](https://github.com/openclaw/openclaw/pull/203935)：Workboard 共同目标功能需要补齐兼容性和故障恢复证明。
- [#201906](https://github.com/openclaw/openclaw/pull/201906) 与 [#203401](https://github.com/openclaw/openclaw/pull/203401)：两个 pnpm 更新修复范围重叠，需明确最终合并策略，避免行为不一致。
- [#201025](https://github.com/openclaw/openclaw/pull/201025) 与 [#201029](https://github.com/openclaw/openclaw/pull/201029)：prepared runtime/project snapshot 两项改造耦合较深，建议统一验证 Gateway 升级、旧节点重连和 disposable worker 生命周期。
- [#203923](https://github.com/openclaw/openclaw/pull/203923)：已关闭，需确认长安装备份修复是否已进入主线。
- [#203955](https://github.com/openclaw/openclaw/pull/203955)：已关闭但涉及 security-sensitive 变更，建议核对其最终归属与提交方式，避免安全相关重构丢失。
- [#203961](https://github.com/openclaw/openclaw/pull/203961)：Gateway Stop 产品测试正在等待维护者，虽为测试调整，也应防止为适配行为而掩盖真实竞态。

---

## 总体健康度判断

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | 高 | 24 小时 401 条 Issue、500 条 PR |
| 发布能力 | 中高 | v2026.11.7 已发布，并持续补充升级 E2E、Doctor 与运行时清理 |
| 功能推进 | 高 | Workboard、worker runtime、Claude Web Search、独立项目 session 等多方向推进 |
| 稳定性 | 中等偏低 | Gateway OOM、消息丢失、Codex 恢复、更新半完成等问题仍突出 |
| 社区质量 | 中高 | 高评论 Issue 通常附环境、日志和复现信息 |
| 积压风险 | 偏高 | 多个 8–9 月创建的高优 Issue 仍无明确 fix PR |

**结论：**OpenClaw 正处于高强度工程迭代期，发布节奏快、功能覆盖面扩张明显。当前最需要的不是继续增加功能数量，而是集中收敛**升级原子性、Gateway 长期资源治理、会话/子代理恢复和跨渠道消息可靠性**四条主线。若高优积压不能持续下降，更多 Issue 和 PR 的增长反而会提高维护负担与回归风险。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**统计日期：2026-11-23**  
**覆盖项目：** OpenClaw、NanoBot、PicoClaw、IronClaw、LobsterAI、QwenPaw、Hermes Agent、OpenHuman  
**口径说明：** 活跃度基于所提供日报中的过去 24 小时 GitHub 活动；“Issue/PR 数”为窗口内更新量；健康度为结合开发吞吐、缺陷积压、版本交付和工程质量的综合判断。

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正从“聊天壳 + 模型调用”快速转向 **可恢复的 Agent Runtime、可插拔工具链、长期记忆、跨渠道执行和定时任务**。今日各项目共呈现约 **232 条 Issue 更新、331 条 PR 更新、2 个 Release**，其中 OpenClaw、QwenPaw 和 Hermes Agent 贡献了主要吞吐，显示生态仍处于高强度工程迭代期。

与此同时，成熟度分化明显：OpenClaw、LobsterAI 已进入发布链路与迁移收敛阶段；QwenPaw、Hermes Agent 功能扩张快，但稳定性债务和评审积压较重；NanoBot、PicoClaw、IronClaw、OpenHuman 则聚焦局部能力或体验优化。当前行业的主要瓶颈已不是模型智力，而是 **状态一致性、升级原子性、资源回收、跨渠道可靠投递和安全权限边界**。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 主要开发焦点 | 健康度 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 401 | 500 | **v2026.11.7** | 升级器、Gateway、会话恢复、Workboard、消息投递、Codex 子代理 | **中高**；功能与吞吐极高，但升级原子性、OOM、消息丢失风险突出 |
| **NanoBot** | 0 | 16 | 无 | 斜杠命令国际化、异步回执、模型预设、WebUI | **良好偏活跃**；方向清晰，但多语言拆分链和长期安全 PR 尚未收敛 |
| **PicoClaw** | 2 | 1 | 无 | QQ 鉴权回归、历史修复分支收敛、OpenAI 兼容 provider | **一般**；产出有限，QQ 通道回归比新功能更紧急 |
| **IronClaw** | 1 | 0 | 无 | 本地 LLM idle timeout 配置化 | **中性偏低**；讨论集中但无 PR、无发版 |
| **LobsterAI** | 0 | 12 | 无 | DSH 迁移验收、记忆隔离、MCP/OAuth、搜索、浏览器、Companion | **良好偏高**；集中收敛且无公开待合并积压，但缺 Release 验证 |
| **QwenPaw** | 19 | 24 | **v2.3.1-beta.1** | Plugin SDK 1.2、Console、Harness 解耦、渠道和 Windows 稳定性 | **活跃但风险偏高**；响应快，但 21 个待合并 PR 和多项稳定性债务 |
| **Hermes Agent** | 50 | 50 | 无 | Gateway、Cron/Kanban、Desktop 会话、Windows、插件生态 | **高活跃、中等稳定**；缺陷规模大，41 项 Issue/PR 仍开放 |
| **OpenHuman** | 0 | 3 | 无 | Cron 子智能体权限、Cron 配置保真、dry-run 安全 | **中等偏正面**；方向聚焦，但三项 PR 均未合并 |
| **合计** | **473** | **331** | **2 个** | — | — |

> 注：各项目日报对 Issue/PR 的“更新”定义可能不同，例如 OpenClaw 明确包含新开、活跃、关闭等状态，因此表格适合比较相对热度，不宜直接当作净新增代码量。

### 活跃度分层

- **第一梯队：OpenClaw**  
  单项目贡献约一半以上 Issue 和三分之二以上 PR，是当前生态中可见度和工程吞吐最高的项目。

- **第二梯队：QwenPaw、Hermes Agent**  
  均有 50 条 Issue 和 24/50 条 PR 更新，功能、插件与运行时扩展非常积极，但合并压力和长期稳定性问题同步扩大。

- **第三梯队：LobsterAI、NanoBot**  
  LobsterAI 专注 DSH 迁移收敛，NanoBot 聚焦国际化和 WebUI；均已进入交付质量巩固阶段。

- **第四梯队：OpenHuman、PicoClaw、IronClaw**  
  活动量较低，分别体现受控自动化、渠道兼容和本地模型配置等明确但尚待落地的方向。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态角色

OpenClaw 更接近 **个人 AI 助手基础设施与多 Agent 操作平台**，而非单一聊天产品。其核心能力已覆盖：

- Gateway 与长期运行服务；
- 会话、记忆和多 Agent 编排；
- Telegram、Discord、Matrix、GitHub 等多渠道；
- Cron、浏览器、插件、模型路由；
- Workboard、prepared runtime、项目 session 等协作基础设施。

这使 OpenClaw 与 QwenPaw、Hermes Agent 的“宿主 Agent”定位相近，但比 PicoClaw、IronClaw 更偏平台化；相比 LobsterAI 的桌面产品底座，OpenClaw 更强调 **Gateway、渠道和自动化运行时**。

### 3.2 相对优势

1. **社区和开发吞吐显著领先**  
   今日 401 条 Issue、500 条 PR 和一个新版本，约为 QwenPaw PR 活跃度的两倍、Hermes Agent 的十倍。其社区规模和多模块并行开发能力明显领先。

2. **功能覆盖面最广**  
   多渠道、多模型、记忆、浏览器、Cron、插件、子代理和共享任务板形成较完整闭环。QwenPaw 正强化插件 SDK，Hermes 正扩展后台任务，但 OpenClaw 的整体集成面更成熟。

3. **发布工程投入明显**  
   v2026.11.7 聚焦重启后的会话恢复和自动化可靠性，并补充真实 Gateway 升级 E2E、Doctor 延迟检查、prepared runtime 和升级残留清理。说明项目已开始系统强化生产发布链路。

4. **具备较强的开源生态辐射潜力**  
   LobsterAI 正在迁移至 DSH，QwenPaw 和 Hermes 都在建设插件 SDK、渠道和 Harness。相比之下，OpenClaw 已拥有更成熟的多渠道、多 Agent 实践样本和外部集成基础。

### 3.3 技术路线差异

| 项目 | 核心路线 |
|---|---|
| **OpenClaw** | Gateway 驱动、多渠道、多 Agent、长期运行与升级可靠性 |
| **QwenPaw** | Console + Plugin SDK + Harness/Execution SDK 解耦，强调宿主能力与执行内核可分离 |
| **Hermes Agent** | Gateway/Desktop 双前端、Cron/Kanban、插件目录和后台任务，强调主动执行与可观测性 |
| **LobsterAI** | 桌面端 Cowork + DSH 运行时，强调办公、浏览器、记忆隔离和按需上下文 |
| **NanoBot** | 轻量个人助手，斜杠命令、多语言、多渠道及 WebUI 体验 |
| **OpenHuman** | 以 Cron 为核心的长期个人代理，强调 workspace、权限层级和后台执行 |
| **PicoClaw** | 更轻量的多渠道助手与 OpenAI-compatible provider 接入 |
| **IronClaw** | 偏模型运行时和 Provider 适配，当前关注本地 LLM 慢响应配置 |

### 3.4 OpenClaw 的相对短板

- **稳定性尚未匹配开发规模**：off-heap RSS/OOM、Telegram 静默丢消息、Codex helper 恢复失败等仍是核心风险。
- **升级一致性未完全解决**：Doctor、WAL、插件迁移和 Gateway 重启仍可能形成“半完成升级”。
- **积压偏高**：多个 8–9 月创建的 P0/P1 Issue 仍没有明确修复 PR。
- **社区复杂度高**：401 条 Issue 与 500 条 PR 意味着更高的维护、评审和回归成本。

因此，OpenClaw 的位置可以概括为：**生态规模与功能覆盖领先，工程体系接近平台级，但当前需要从“快速扩张”转向“稳定性收敛”。**

---

## 4. 共同关注的技术方向

### 4.1 长会话与任务状态恢复

- **OpenClaw**：Gateway 重启后恢复被中断回复和子任务结果。
- **QwenPaw**：流式响应中断、Console 长会话冻结、历史分页恢复。
- **Hermes Agent**：Desktop 压缩后恢复到旧 session、transcript 重复写入、模型切换被 `session_superseded` 拒绝。
- **NanoBot**：延迟回执按原会话、正确顺序和重启后的路由投递。
- **LobsterAI**：会话 fork、上下文压缩、启动恢复和备份恢复。

**共同诉求：** Agent 执行不再只是单轮请求，而必须保证任务、会话版本、结果和通知在压缩、重启、路由切换后仍然一致。

### 4.2 定时任务与后台主动执行

- **OpenHuman**：让明确 opt-in 的 Cron 子智能体获得受限 acting 权限。
- **Hermes Agent**：Cron/Kanban worker、主动任务、后台 memory/skill review。
- **OpenClaw**：Cron、Workboard、共享目标持久化。
- **LobsterAI**：定时任务工作目录、重载后提示恢复。
- **QwenPaw**：计划任务与手动执行行为不一致。

**共同诉求：** 后台任务必须可授权、可观察、可停止、可恢复，并在失败时明确告警，而不是静默挂起。

### 4.3 插件、工具与 MCP 生态

- **NanoBot**：修复 MCP 工具名称清洗碰撞，避免工具身份与授权边界混淆。
- **QwenPaw**：Plugin SDK 1.2、插件 CLI、主题、权限和生命周期。
- **Hermes Agent**：AirPrompter、插件生命周期钩子、OAuth redirect port、多 profile MCP。
- **LobsterAI**：MCP 同步、OAuth 2.1、SSE Bridge、工具过滤。
- **OpenClaw**：插件迁移冲突、工具权限说明和执行边界。

**共同诉求：** 插件不仅要“能安装”，还必须具备稳定 API、明确身份、生命周期清理、权限控制和可靠认证。

### 4.4 跨渠道可靠投递

- **OpenClaw**：Telegram 失败后直接进入 dead-letter。
- **QwenPaw**：微信渠道不完整、响应路由容量耗尽后静默失效。
- **Hermes Agent**：Discord watcher 无限重试、Matrix E2EE 双客户端冲突。
- **NanoBot**：异步结果错会话、错顺序或丢失。
- **LobsterAI**：邮件、搜索、插件和定时任务投递链路统一。

**共同诉求：** 渠道接入不能止于“能收发消息”，还必须解决重试、幂等、状态对账、会话路由和密钥生命周期。

### 4.5 记忆系统规模化

- **OpenClaw**：短期 recall 上限阻断 deep dreaming、大语料 worker capacity 中止、搜索固定超时。
- **LobsterAI**：项目级/全局记忆隔离、CRUD 迁移、梦境日记。
- **QwenPaw**：Windows ReMe 标签索引失败。
- **Hermes Agent**：memory/skill review 生命周期钩子。

**共同诉求：** 记忆能力需要从“能存能搜”升级为可分区、可晋升、可迁移、可观测，并能在数百 MiB 至近 GiB 语料下稳定运行。

### 4.6 跨平台与升级可靠性

- **OpenClaw**：Windows Scheduled Task、pnpm updater、WAL、Gateway 重启。
- **Hermes Agent**：Windows 含空格路径、Bash 参数截断、worker 静默挂起。
- **QwenPaw**：Windows `llama-server.exe` 泄漏、ReMe 路径问题。
- **NanoBot**：Telegram/Discord/飞书渠道真实环境验证不足。
- **PicoClaw**：resty 依赖升级破坏 QQ 鉴权。

**共同诉求：** 自动依赖升级不能破坏既有部署；Windows、容器、pnpm/npm、代理环境都应成为发布门禁的一部分。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多渠道个人助理、多 Agent、自动化、记忆、浏览器、插件 | 高级个人用户、运营者、Agent 开发者 | Gateway 常驻服务 + Session/Task/Runtime + 多渠道适配 + Workboard |
| **NanoBot** | 轻量聊天助手、斜杠命令、多语言、WebUI | 希望快速部署和跨客户端一致体验的个人用户 | 较轻量 Agent Loop、类型化命令结果、渠道渲染适配、WebSocket/WebUI |
| **PicoClaw** | 轻量渠道助手、OpenAI-compatible 模型接入 | 小型部署、边缘设备、模型网关用户 | Provider 兼容层为主，当前对外部依赖组合较敏感 |
| **IronClaw** | 模型 Provider 与本地 LLM 运行适配 | 本地模型和私有部署用户 | 强调 Host-managed Loop、Provider timeout 和模型能力配置 |
| **LobsterAI** | 桌面办公、文件、浏览器、长期记忆、Companion | 办公型个人用户和知识工作者 | Electron/桌面端 + Cowork + DSH + 项目级记忆 + MCP/技能运行时 |
| **QwenPaw** | Console、插件平台、多渠道、Harness、执行内核 | 插件开发者、Agent 平台构建者 | 宿主能力与 Execution SDK 解耦、Plugin SDK、Console、渠道执行层 |
| **Hermes Agent** | Gateway、Desktop、Cron/Kanban、主动任务、插件目录 | 长期运行个人助理和自动化重度用户 | Gateway + Desktop + Cron/Kanban + 插件目录 + 多 profile/共享状态 |
| **OpenHuman** | Cron 自动化、workspace 沙箱、受控子代理 | 需要持续运行个人任务的自动化用户 | 强 workspace/层级权限隔离，代理执行能力按 opt-in 渐进开放 |

### 关键差异

- **平台化 vs 桌面化**：OpenClaw、Hermes、QwenPaw 偏平台；LobsterAI 偏桌面办公。
- **通用多渠道 vs 轻量易用**：OpenClaw 功能深但运维复杂；NanoBot、PicoClaw 更强调低成本部署。
- **执行解耦程度**：QwenPaw 明确推进 Harness/Execution SDK 解耦；LobsterAI 正以 DSH 替换底层运行时；OpenClaw 和 Hermes 更接近一体化 Agent Runtime。
- **自动化安全模型**：OpenHuman 的 opt-in + workspace + 深度限制最清晰；OpenClaw、Hermes 的多 Agent 权限与目标治理仍处于快速演进期。

---

## 6. 社区热度与成熟度

### 6.1 社区热度

| 层级 | 项目 | 判断 |
|---|---|---|
| **高热度** | OpenClaw | Issue、PR、Release 三项均领先，复杂议题拥有较多真实环境反馈 |
| **中高热度** | QwenPaw、Hermes Agent | 更新量大、场景丰富，但大量待审 PR 和长期 Issue 拉低质量分 |
| **中等热度** | LobsterAI、NanoBot | 聚焦明确工程主题，公开讨论数据较少但交付收敛较好 |
| **低热度** | OpenHuman、PicoClaw、IronClaw | 问题清晰但样本有限，部分项目接近单点迭代状态 |

### 6.2 成熟度分层

#### 快速迭代阶段

- **OpenClaw**：功能扩张最快，但可靠性债务显著。
- **QwenPaw**：Plugin SDK、Harness、Console、渠道同时推进，架构潜力大，集成风险较高。
- **Hermes Agent**：后台任务、Desktop、插件、跨平台并行开发，系统性问题仍多。

#### 质量巩固阶段

- **LobsterAI**：DSH 验收修复系列、文档同步、无待合并积压，最接近迁移后的发布准备状态。
- **NanoBot**：命令国际化、异步回执和 WebUI 回归修复集中，适合进入稳定发布周期。
- **OpenHuman**：单点问题明确，但尚未看到合并和发布验证。

#### 早期验证阶段

- **PicoClaw**：当前主要矛盾是依赖回归，LLMTR provider 仍属常规功能请求。
- **IronClaw**：仅一个慢速本地模型 timeout 议题，缺少实现和版本活动。

### 6.3 工程成熟度判断

| 项目 | 功能成熟度 | 稳定性 | 社区成熟度 | 综合 |
|---|---|---|---|---|
| OpenClaw | 高 | 中 | 高 | **中高** |
| NanoBot | 中 | 中高 | 中 | **良好偏活跃** |
| PicoClaw | 中 | 中低 | 低 | **一般** |
| IronClaw | 中低 | 中 | 低 | **中性偏低** |
| LobsterAI | 高 | 中高 | 中 | **良好偏高** |
| QwenPaw | 中高 | 中低 | 中高 | **活跃、风险偏高** |
| Hermes Agent | 高 | 中低 | 高 | **高活跃、积压偏高** |
| OpenHuman | 中 | 中高 | 低 | **中等偏正面** |

---

## 7. 值得关注的趋势信号

### 7.1 “个人助手”正在变为“常驻操作代理”

用户期待的不再是一个等待提问的聊天窗口，而是能定时执行、跨渠道通知、调用工具、维护记忆并在重启后继续工作的系统。OpenHuman、Hermes、OpenClaw 和 LobsterAI 都把 Cron/后台任务推进到核心位置。

**开发启示：** 后台任务应从第一天采用持久化 job ID、明确状态机、幂等执行、停止语义和用户可见审计日志。

### 7.2 会话状态机成为核心竞争壁垒

多个项目的故障并非来自模型本身，而是来自“压缩后恢复到哪一代会话”“重启后结果投递到哪里”“模型切换后旧 provider 是否仍被使用”。

**开发启示：** 应把 Session、Generation、Compaction、Routing、Delivery 建模为显式状态，而不是依赖时间戳或 UI 当前引用间接推断。

### 7.3 插件生态从安装数量竞争转向可信边界竞争

QwenPaw、NanoBot、Hermes、LobsterAI 都在扩展 SDK、MCP、OAuth 和生命周期。真正的瓶颈将是工具身份、权限继承、作用域、资源清理和认证安全。

**开发启示：** 插件 API 需要优先定义稳定身份、全局/模型/会话作用域、冲突规则、权限证明和卸载保证。

### 7.4 模型无关正在成为基础要求，但 Provider 适配仍是故障源

PicoClaw 的 LLMTR、IronClaw 的本地模型 timeout，以及各项目的模型别名、路由、视觉能力问题表明，用户正快速接入多种 OpenAI-compatible 和本地模型网关。

**开发启示：** 不应只维护静态模型清单；应建设统一能力协商层，区分连接、首 token、流式空闲、总时长，并让运行时行为与模型目录保持一致。

### 7.5 跨渠道能力必须包含“失败语义”

多个项目都暴露了静默失败：Telegram dead-letter、微信路由耗尽、Discord watcher 无限重试、Matrix E2EE 双客户端冲突。渠道适配器需要与普通网络请求不同，至少具备：

- 明确重试上限和退避；
- 未知发送状态对账；
- 幂等键；
- 会话和路由租约回收；
- 用户可见失败提示；
- 密钥单写者或共享机制。

### 7.6 隐私模式正在从“持续感知”转向“按需上下文”

LobsterAI 将 Companion 从主动提示改为用户打开快捷面板或悬停时采集上下文，反映出个人助手必须平衡便利与权限打扰。

**开发启示：** 桌面上下文采集应默认最小权限、显式触发、作用域受限，并提供清晰降级和审计提示。

### 7.7 发布质量将成为下一阶段竞争点

OpenClaw 补真实升级 E2E，QwenPaw 发布 Beta，Hermes 修复多但无发版，LobsterAI 完成迁移收敛却尚无 Release。项目间的差距会逐渐从“PR 数量”转向：

- 发布后问题恢复速度；
- 升级是否原子；
- 旧配置和数据是否兼容；
- 是否具备跨平台、代理和真实渠道回归；
- 修复是否真正进入稳定版本。

### 7.8 对 AI 智能体开发者的直接建议

1. **优先构建可恢复状态机，而不是先扩充工具数量。**
2. **把后台任务、渠道投递和子代理回传设计成可观测、可取消、可补偿的流程。**
3. **为插件与子代理采用显式 opt-in、最小权限、workspace 限制和深度限制。**
4. **将依赖升级、Windows、代理缓冲、pnpm/npm、真实 IM 纳入发布门禁。**
5. **区分模型连接超时、首 token 超时和流式空闲超时。**
6. **每个 Beta 或迁移版本都应提供状态备份、失败恢复、旧配置迁移和会话恢复验收结果。**

---

## 综合结论

当前生态已经形成清晰分工：**OpenClaw** 是功能覆盖和社区规模领先的多 Agent 平台；**QwenPaw** 正在争夺 Plugin SDK 与执行内核解耦的架构高地；**Hermes Agent** 聚焦 Gateway/Desktop 与后台主动任务；**LobsterAI** 聚焦桌面办公和 DSH 迁移收敛；**NanoBot、OpenHuman、PicoClaw、IronClaw** 则分别从轻量体验、受控自动化、渠道兼容和本地模型适配切入。

下一阶段决定项目差距的，不会只是新增功能数量，而是能否把 **会话一致性、任务可靠性、插件安全、跨渠道投递、资源回收和升级原子性** 同时做好。OpenClaw 的生态领先优势明显，但也最需要立即从“高速扩张”转入“高优积压收敛”；其他项目则应避免复制功能面，转而围绕各自场景建立更清晰、可验证的可靠性优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**数据日期：2026-11-23**  
**统计窗口：过去 24 小时**  
**数据来源：GitHub 仓库 [HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

## 1. 今日速览

过去 24 小时 NanoBot 共出现 **16 条 PR 更新**，其中 **9 条待合并、7 条已合并或关闭**；没有 Issue 更新，也没有发布新版本。  
项目开发活跃度较高，核心工作集中在 **内置斜杠命令多语言化、WebUI 交互优化，以及异步任务回执与会话路由稳定性**。  
PR [#6756](https://github.com/HKUDS/nanobot/pull/6756)、[#6759](https://github.com/HKUDS/nanobot/pull/6759)、[#6760](https://github.com/HKUDS/nanobot/pull/6760) 等形成了较完整的多语言功能拆分链，但多个关联 PR 仍待合并，落地节奏存在一定依赖关系。  
安全方面，[#4618](https://github.com/HKUDS/nanobot/pull/4618) 持续推进 MCP 工具名称碰撞修复，属于自 7 月创建以来仍在更新的高优先级技术债。  
整体健康度评估：**活跃且方向清晰，但合并压力偏高、长期 PR 积压仍需关注**。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列“版本发布”章节。

### 已合并或关闭的重要 PR

- **[#6755](https://github.com/HKUDS/nanobot/pull/6755) — JSON Schema 正则搜索契约描述**  
  将 Schema 校验依赖抽象为“模式搜索接口”，避免绑定具体正则表达式后端，并补充了对应类型契约。该 PR 已关闭，是多语言命令功能拆分中的独立基础改动。

- **[#6754](https://github.com/HKUDS/nanobot/pull/6754) — 修复活动状态图标与回复文本未对齐**  
  调整活动标题行的内边距与偏移，使 Working/Worked 图标、标签和展开引导保持一致；同时补充浏览器回归检查。该 PR 已关闭，属于明确的 WebUI 视觉回归修复。

- **[#6753](https://github.com/HKUDS/nanobot/pull/6753) — 将 Diff 开关合并到文件编辑行**  
  把展开箭头、变更数量和文件信息整合到同一行，减少文件编辑列表的垂直占用，并提升文件名与变更量的可扫描性。该 PR 已关闭，改善了文件变更浏览体验。

- **[#6737](https://github.com/HKUDS/nanobot/pull/6737) — Goal Island 改为悬浮式 Vibrancy 卡片**  
  将目标组件从顶部嵌入式凹槽改为脱离布局的悬浮胶囊/卡片，并支持平滑扩展。该 PR 已关闭，代表 WebUI 视觉设计方向的一次重要调整。

- **[#6751](https://github.com/HKUDS/nanobot/pull/6751) — 桌面端消息操作移至两侧空白区**  
  在宽屏布局中直接展示可用的消息操作，减少打开“更多”菜单的步骤，同时避免阅读栏长期占用工具栏空间。该 PR 已关闭，提升了桌面端操作效率。

- **[#6750](https://github.com/HKUDS/nanobot/pull/6750) — 修复侧边栏标题聚焦样式**  
  将完成重命名后残留的矩形输入框边框改为标题下划线，明确键盘焦点位置，同时避免让非编辑状态看起来仍可输入。该 PR 已关闭，属于可访问性与交互一致性修复。

- **[#1190](https://github.com/HKUDS/nanobot/pull/1190) — Agent Loop Trace 观测能力**  
  增加可选的 Observe 配置，用于记录模型调用、工具调用、Skill 使用和 SubAgent 启动等运行事件，并计划通过 WebUI 展示 Trace。该 PR 当前因冲突关闭，说明该长期功能尚未完全解决合并问题。

### 今日新增、仍待合并的核心 PR

- **[#6756](https://github.com/HKUDS/nanobot/pull/6756) — 类型化命令结果与渠道呈现解耦**  
  让内置命令返回类型化结果，由文本适配器按请求语言渲染，同时向 WebSocket 消费者提供可读文本和结构化事实。该改动是后续 WebUI 与原生渠道本地化的公共基础。

- **[#6757](https://github.com/HKUDS/nanobot/pull/6757) — 修复延迟回执的顺序与原会话投递**  
  在收到确认后启动延迟 Dream 任务，对存储错误进行重试，使用原始会话代际守卫投递，并处理结构化负载超出历史限制时的文本降级；同时增加重启路由、大小和顺序测试。该 PR 对异步任务可靠性提升明显。

- **[#6758](https://github.com/HKUDS/nanobot/pull/6758) — 模型预设切换确认与首次发送校验**  
  只有用户明确确认后才更新模型徽标；创建聊天前校验显式选择的首次发送预设，校验失败时保留草稿。涉及协议、网关、WebUI 和 TUI。

- **[#6759](https://github.com/HKUDS/nanobot/pull/6759) — 本地化斜杠菜单并保留命令回复文本**  
  新命令使用请求语言生成，搜索、复制和重放使用已保存文本；同时移除客户端依赖英文文本匹配的逻辑。

- **[#6760](https://github.com/HKUDS/nanobot/pull/6760) — Telegram、Discord、飞书原生命令反馈本地化**  
  使用 Telegram 和 Discord 的 locale 信息生成原生菜单与命令回复；飞书改为依据结果键判断是否显示“新会话”回执，而非依赖英文文本。提交说明明确指出未连接实时 IM 服务进行验证。

- **[#6747](https://github.com/HKUDS/nanobot/pull/6747) — 内置斜杠命令跨客户端本地化总 PR**  
  作为原始聚合 PR 保持开放，仅用于讨论和审查；官方建议优先审查拆分后的各 PR。其拆分链覆盖类型契约、命令结果、延迟回执、模型预设、WebUI 与原生 IM 渠道，范围较大。

**推进程度判断：**  
今日项目在三个方向上取得了实质推进：

1. **国际化基础设施成型：** 命令从“依赖英文文本判断”转向“类型化结果 + 渠道渲染 + 客户端语言上下文”。  
2. **异步任务可靠性加强：** [#6757](https://github.com/HKUDS/nanobot/pull/6757) 同时处理确认时序、存储失败、原会话路由和历史容量限制。  
3. **WebUI 产品体验连续优化：** Diff 展开、桌面消息操作、焦点样式、活动状态图标和 Goal Island 均获得改进。

不过，核心多语言功能仍以多个开放 PR 的形式存在，尚不能视为已完成交付。

---

## 4. 社区热点

### 讨论与反馈数据不足

今日所有 PR 的数据均显示 **评论数为 `undefined`、点赞数为 0**，且没有 Issue 更新。因此，无法从当前数据确认“评论最多”或“反应最多”的条目，也不能可靠计算社区讨论热度。

按功能影响范围和 PR 拆分复杂度，值得维护者优先关注：

1. **[#6747](https://github.com/HKUDS/nanobot/pull/6747) — 多语言斜杠命令总 PR**  
   - 诉求：让内置命令在不同聊天客户端中保持一致的语言体验。  
   - 热点原因：影响 Telegram、Discord、飞书、WebUI、TUI 和 WebSocket 多个入口。  
   - 风险：功能横跨协议、网关、客户端与文案资源，容易产生合并顺序依赖。

2. **[#6757](https://github.com/HKUDS/nanobot/pull/6757) — 延迟回执按原会话顺序投递**  
   - 诉求：确保异步任务完成后，提示回到正确会话且不乱序。  
   - 热点原因：直接关系到用户是否会漏掉 Agent 的完成通知。  
   - 风险：涉及会话代际、重启路由和历史长度，属于高价值稳定性改动。

3. **[#4618](https://github.com/HKUDS/nanobot/pull/4618) — MCP `enabledTools` 名称碰撞安全修复**  
   - 诉求：防止不同原始 MCP 工具名清洗后映射到同一名称，导致授权边界混淆。  
   - 热点原因：属于安全与工具身份隔离问题。  
   - 风险：自 2026-07-01 创建并持续更新，暴露时间较长。

4. **[#6737](https://github.com/HKUDS/nanobot/pull/6737) — Goal Island 悬浮式重设计**  
   - 诉求：改善目标区域的视觉层次和空间利用。  
   - 热点原因：属于用户直接感知的主界面变化。  
   - 风险：虽已关闭，仍需在最终版本中观察不同屏幕宽度下的可用性。

---

## 5. Bug 与稳定性

### P1 / 高优先级：暂无已报告的 P1 Bug

当前数据中没有明确标记为 P1、崩溃或大规模不可用的问题。

### P2 / 中高优先级

- **[#6757](https://github.com/HKUDS/nanobot/pull/6757) — 延迟回执可能错序、错会话或丢失**  
  **已有 fix PR：** 是，当前仍为 OPEN。  
  修复范围包括存储重试、原会话代际校验、重启后路由以及历史长度超限时的文本降级。

- **[#6758](https://github.com/HKUDS/nanobot/pull/6758) — 模型预设切换状态与首次发送行为不一致**  
  **已有 fix/feature PR：** 是，当前仍为 OPEN。  
  主要防止未经确认就切换模型，以及预设无效时错误创建聊天或丢失用户草稿。

- **[#6754](https://github.com/HKUDS/nanobot/pull/6754) — 活动状态图标与回复文本错位**  
  **已有 fix PR：** 是，已关闭。  
  属于视觉回归，不影响核心数据正确性。

- **[#6750](https://github.com/HKUDS/nanobot/pull/6750) — 侧边栏重命名完成后仍显示输入框式焦点框**  
  **已有 fix PR：** 是，已关闭。  
  主要是交互状态和可访问性问题。

- **[#1190](https://github.com/HKUDS/nanobot/pull/1190) — Agent Loop Trace 合并冲突**  
  **已有修复状态：** 尚无明确修复 PR；当前 PR 因冲突关闭。  
  冲突会延迟 Trace 观测能力落地，影响 Agent 执行过程的调试与排障。

### 安全问题

- **[#4618](https://github.com/HKUDS/nanobot/pull/4618) — MCP 工具名规范化碰撞**  
  **已有 fix PR：** 是，当前仍为 OPEN。  
  某些不同原始名称可能在清洗后变成相同标识，从而产生工具身份混淆和能力授权边界问题。该项应按安全修复优先推进。

### 稳定性结论

- 今日明确的 WebUI 视觉与交互 Bug 多数已有对应修复并关闭。  
- 更关键的剩余风险集中在 **异步回执投递、模型预设状态一致性以及 MCP 工具授权边界**。  
- [#6760](https://github.com/HKUDS/nanobot/pull/6760) 尚未进行实时 Telegram、Discord、飞书服务验证，实际渠道行为仍存在集成风险。

---

## 6. 功能请求与路线图信号

### 1. 跨客户端命令本地化

核心需求来自：

- [#6747](https://github.com/HKUDS/nanobot/pull/6747)
- [#6756](https://github.com/HKUDS/nanobot/pull/6756)
- [#6759](https://github.com/HKUDS/nanobot/pull/6759)
- [#6760](https://github.com/HKUDS/nanobot/pull/6760)

该方向已经形成明确拆分链，具备进入下一版本的条件。合并时需关注：

- 命令结果类型与渠道呈现层是否完整解耦；
- 新建命令与历史重放是否采用正确的语言来源；
- Telegram、Discord、飞书 locale 映射是否一致；
- 是否补齐真实 IM 集成测试。

### 2. 模型预设切换与首次发送校验

[#6758](https://github.com/HKUDS/nanobot/pull/6758) 表明项目正在强化模型配置的一致性和可恢复性。可能纳入下一版本，但需确保协议、网关、WebUI 与 TUI 同步发布，避免不同入口行为不一致。

### 3. 异步任务回执可靠性

[#6757](https://github.com/HKUDS/nanobot/pull/6757) 反映路线图从“能异步执行”转向“可靠、可追踪、按原会话交付”。这类修复通常会直接进入近期版本，尤其适合优先合并。

### 4. WebUI 会话内编辑并重发

[#6323](https://github.com/HKUDS/nanobot/pull/6323) 仍为 OPEN，目标是允许用户在**同一会话中编辑并重发消息**。该 PR 当前描述显示其提交曾通过全部 20 项 CI 检查，属于较成熟但尚未合并的长期功能候选，可能进入下一版本，但需要重新确认与最新 `main` 的兼容性。

### 5. Agent Loop Trace 与运行可观测性

[#1190](https://github.com/HKUDS/nanobot/pull/1190) 体现了明确的调试与观测需求，包括记录模型、工具、Skill 和 SubAgent 事件。当前因冲突关闭，预计需要维护者重新解决冲突或按拆分方式重做后，才更适合进入版本计划。

### 6. MCP 安全能力边界

[#4618](https://github.com/HKUDS/nanobot/pull/4618) 属于安全和正确性修复，而非普通功能扩展。其优先级应高于一般新功能，尤其在 MCP 工具数量和第三方来源增加后。

---

## 7. 用户反馈摘要

过去 24 小时没有 Issue 更新，且 PR 未提供可用的评论内容，因此无法从 Issue 评论中提炼真实用户投诉、满意度或具体使用场景。

当前只能从已提交需求中归纳间接信号：

- **多语言与原生渠道体验：** 用户希望 Telegram、Discord、飞书及 WebUI 中的菜单、命令反馈和新会话提示保持语言一致，并减少依赖英文文本匹配的脆弱逻辑。参见 [#6759](https://github.com/HKUDS/nanobot/pull/6759)、[#6760](https://github.com/HKUDS/nanobot/pull/6760)。
- **异步任务反馈可靠性：** 用户关注任务完成通知是否仍返回原会话、是否按顺序出现，以及重启后是否仍可投递。参见 [#6757](https://github.com/HKUDS/nanobot/pull/6757)。
- **模型切换可控性：** 用户不希望模型徽标在未确认时发生变化，也希望无效预设不会破坏当前草稿。参见 [#6758](https://github.com/HKUDS/nanobot/pull/6758)。
- **WebUI 操作效率与视觉一致性：** 桌面端复制、文件 Diff 查看、重命名焦点和活动状态布局均进行了针对性优化。参见 [#6751](https://github.com/HKUDS/nanobot/pull/6751)、[#6753](https://github.com/HKUDS/nanobot/pull/6753)、[#6754](https://github.com/HKUDS/nanobot/pull/6754)、[#6750](https://github.com/HKUDS/nanobot/pull/6750)。

由于缺少用户评论，以上内容应视为**需求侧归纳，而非已验证的用户满意度结论**。

---

## 8. 待处理积压

### 需要优先处理的开放 PR

- **[#4618](https://github.com/HKUDS/nanobot/pull/4618) — MCP 工具名称碰撞安全修复**  
  创建于 2026-07-01，至今仍有更新，是当前最突出的长期开放事项。  
  **建议：** 按安全缺陷处理，优先审查、补充回归测试并尽快合并。

- **[#6747](https://github.com/HKUDS/nanobot/pull/6747) — 多语言命令总 PR**  
  已明确改为审查拆分 PR，但总 PR 仍保持开放。  
  **建议：** 明确各拆分 PR 的合并顺序，并在子 PR 全部落地后关闭总 PR，避免长期形成模糊入口。

- **[#6323](https://github.com/HKUDS/nanobot/pull/6323) — 同会话编辑并重发消息**  
  创建于 2026-10-20，持续更新且已有 CI 全通过的历史记录。  
  **建议：** 重新基于最新 `main` 做冲突检查和完整回归验证。

- **[#6752](https://github.com/HKUDS/nanobot/pull/6752) — README 增加 Star History 徽章**  
  文档类低风险改动，评审成本较小。  
  **建议：** 确认徽章生成地址和深色模式图片可访问后尽快处理。

### 因冲突关闭、可能形成功能积压

- **[#1190](https://github.com/HKUDS/nanobot/pull/1190) — Agent Loop Trace 观测能力**  
  创建时间早、影响范围大，目前因冲突关闭。  
  **建议：** 维护者明确是否重新提交、按模块拆分，或与当前 Trace/WebUI 架构重新对齐。

### 当前积压判断

- **短期可清理项：** [#6752](https://github.com/HKUDS/nanobot/pull/6752)、[#6747](https://github.com/HKUDS/nanobot/pull/6747)。  
- **需要专项排期项：** [#4618](https://github.com/HKUDS/nanobot/pull/4618)、[#6323](https://github.com/HKUDS/nanobot/pull/6323)。  
- **需要重新设计的遗留项：** [#1190](https://github.com/HKUDS/nanobot/pull/1190)。  

---

## 今日结论

NanoBot 今日保持较高开发吞吐，主要成果是搭建了 **跨渠道多语言命令体系** 的基础架构，并同步强化了 **异步回执可靠性、模型预设一致性及 WebUI 交互质量**。已关闭 PR 多为体验优化和明确回归修复，未发现 P1 级故障；后续最值得维护者关注的是长期开放的安全修复 [#4618](https://github.com/HKUDS/nanobot/pull/4618)、多语言拆分链的合并顺序，以及仍受冲突影响的 Trace 能力 [#1190](https://github.com/HKUDS/nanobot/pull/1190)。

**项目健康度：良好偏活跃；风险主要集中于大型功能拆分、长期 PR 维护和跨渠道真实环境验证。**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-23**  
**数据范围：过去 24 小时 GitHub Issues / PR 更新**

## 1. 今日速览

- 今日共有 **2 条活跃 Issue**、**1 条已关闭 PR**，未发布新版本。
- 主要新增动态是 **QQ 通道因 resty 依赖版本回归导致鉴权失败**，属于可能影响实际使用的稳定性问题，目前尚未看到对应修复 PR。
- 社区提出将 **LLMTR 纳入 OpenAI 兼容提供商目录**，体现出用户对更便捷接入多模型网关的需求。
- 已关闭的 **PR #1555** 汇总合并了多个历史修复分支，有助于减少分散 PR 的维护压力，但当前没有新功能或新版本正式落地。
- 综合判断：今日讨论量较低，但功能活跃度一般；**稳定性风险高于功能产出速度**，应优先处理 QQ 通道回归。

---

## 3. 项目进展

### [PR #1555：合并 PR #1390、#1389、#1383、#1381](https://github.com/sipeed/picoclaw/pull/1555)

- **状态**：CLOSED
- **作者**：@xuwei-xy
- **最后更新**：2026-11-22
- **类型**：修复汇总 / 合并多个历史 PR

该 PR 的主要作用是集中处理多个已有修复分支，避免相关修改长期分散在多个 PR 中。从项目推进角度看，这有助于：

- 统一并收敛待合并变更；
- 降低维护者逐项审阅、合并和验证的成本；
- 减少重复分支之间的冲突与版本漂移。

不过，该 PR 本身没有提供足够信息确认具体修复范围，因此不能据此判断具体功能或缺陷已经发布到正式版本。**今日没有新版本发布，修复是否进入用户可升级版本仍需结合合并分支及 Release 记录确认。**

---

## 4. 社区热点

### [Issue #3470：新增 LLMTR 作为 OpenAI 兼容提供商](https://github.com/sipeed/picoclaw/issues/3470)

- **状态**：OPEN
- **创建时间**：2026-11-14
- **最近更新**：2026-11-22
- **评论数**：2
- **热度**：今日 2 条 Issue 中评论最多

**核心诉求：**

用户希望 PicoClaw 的模型目录原生支持具名 `llmtr` provider。LLMTR 提供 OpenAI 兼容接口：

- Endpoint：`https://llmtr.com/v1`
- 用户表示目前可以手动配置自定义 OpenAI-compatible endpoint；
- 但希望免去重复填写接口地址、提供商名称和模型配置等操作。

**背后诉求与产品价值：**

1. **降低配置成本**：让 LLMTR 用户开箱即用，而不是每次手工配置兼容端点。
2. **提升模型发现能力**：通过 provider 目录展示可用模型和网关服务。
3. **统一多提供商使用体验**：原生 provider 通常意味着更稳定的配置、模型列表和错误处理。
4. **明确兼容性边界**：需求本质是“预置 OpenAI-compatible provider”，不一定要求开发专用 API 客户端。

当前该 Issue 已有讨论但尚未关闭，也没有对应的开放 PR，因此暂不能确认已进入下一版本计划。

---

## 5. Bug 与稳定性

### 严重度：高——QQ 通道鉴权失败，错误码 11241

[Issue #3472：QQ channel error 11241：resty v2.17.1 回归破坏 botgo 鉴权头](https://github.com/sipeed/picoclaw/issues/3472)

- **状态**：OPEN
- **创建/更新时间**：2026-11-23
- **评论数**：0
- **影响范围**：QQ 通道启动及鉴权
- **错误表现**：`Authorization header format error`
- **报告组件组合**：`botgo v0.2.1` + `resty v2.17.1`
- **兼容性说明**：`botgo v0.2.1` 期望使用 `resty v2.6.0`

**问题判断：**

该问题被定位为依赖版本回归，而非 QQ 鉴权逻辑本身发生主动变更。resty 从 `v2.6.0` 升级到 `v2.17.1` 后，生成的 Authorization header 格式与 botgo 的预期不一致，导致 QQ 通道无法正常完成鉴权。

**潜在影响：**

- 使用 QQ 通道的用户可能完全无法启动或连接机器人；
- 问题可能由依赖自动升级触发，影响范围不局限于单个业务配置；
- 如果用户使用宽松依赖锁定、升级后未重新验证，可能在版本升级后突然出现。

**已有修复 PR：**

- **未发现明确对应的 fix PR。**
- PR [#1555](https://github.com/sipeed/picoclaw/pull/1555) 仅说明合并多个历史 PR，现有摘要不足以证明其包含本问题的修复。

**建议处理优先级：P1 / 高优先级。**

可优先采取以下措施之一：

1. 将 resty 依赖锁定或回退至 `v2.6.0`；
2. 升级 botgo，并验证其对新版本 resty 的兼容性；
3. 显式规范化 Authorization header；
4. 增加 QQ 通道鉴权回归测试，覆盖依赖升级场景。

---

## 6. 功能请求与路线图信号

### LLMTR 原生 provider 支持

[Issue #3470](https://github.com/sipeed/picoclaw/issues/3470) 是今日唯一明确的功能请求，信号如下：

- 外部模型网关正在成为 PicoClaw 用户的常见接入方式；
- 用户对 OpenAI-compatible endpoint 的手工配置已经形成一定使用痛点；
- 原生 provider 的价值主要在配置简化、模型目录集成和体验一致性，而非必须增加专用协议适配。

**是否可能纳入下一版本：中等。**

积极信号：

- Issue 已有 **2 条评论**，说明存在明确讨论；
- 技术上可复用现有 OpenAI-compatible provider 能力，实施成本可能较低；
- 能直接改善新用户 onboarding。

不确定因素：

- 当前没有对应开放 PR；
- 是否进入下一版本取决于 provider 命名规范、配置结构及维护资源；
- 暂无 Release 计划可供确认。

### 结合已有 PR 判断

[PR #1555](https://github.com/sipeed/picoclaw/pull/1555) 合并的是多个既有修复，不足以证明 LLMTR 支持已进入开发队列。当前更合理的路线图判断是：

1. **先处理 QQ 鉴权回归**，恢复受影响通道；
2. 再评估将 LLMTR 抽象为预置 OpenAI-compatible provider；
3. 通过配置生成和模型列表测试降低接入成本。

---

## 7. 用户反馈摘要

### LLMTR 用户：自定义兼容端点可用，但原生支持更高效

[Issue #3470](https://github.com/sipeed/picoclaw/issues/3470) 表明：

- LLMTR 已能通过 PicoClaw 的自定义 OpenAI-compatible endpoint 使用；
- 用户的“不满意点”不是能力缺失，而是缺少具名 provider 和目录级预置；
- 用户持有统一 key，希望快速访问其模型目录；
- 实际场景偏向多模型网关聚合与快速切换，原生 provider 能减少重复配置。

当前评论量有限，尚不能据此判断整体社区满意度。

### QQ 用户：通道无法正常鉴权，影响核心功能可用性

[Issue #3472](https://github.com/sipeed/picoclaw/issues/3472) 表明：

- QQ 通道启动时出现明确的鉴权头格式错误；
- 用户已将故障精确定位到 botgo 与 resty 的版本组合；
- 报告信息包含错误日志、依赖版本和预期版本，具备较高复现与修复价值；
- Issue 尚无评论，说明社区尚未形成广泛讨论，也可能是用户仍处于等待响应阶段。

**整体反馈倾向：功能性需求明确，QQ 稳定性问题更紧迫。**

---

## 8. 待处理积压

### [Issue #3472：QQ 通道鉴权回归](https://github.com/sipeed/picoclaw/issues/3472)

- 今日新建，尚不属于长期积压；
- 但因直接影响通道启动，应避免等待时间延长；
- 当前 **0 条评论、无明确修复 PR**，存在响应不足风险。

### [Issue #3470：LLMTR provider 支持](https://github.com/sipeed/picoclaw/issues/3470)

- Issue 已开放约 9 天，最近仍有更新；
- 有 2 条评论，但无明确实现 PR；
- 建议维护者尽快给出“接受贡献 / 提供替代方案 / 排入路线图”的明确反馈，避免功能请求长期悬置。

### [PR #1555：修复汇总 PR](https://github.com/sipeed/picoclaw/pull/1555)

- 该 PR 已关闭，不属于待处理积压；
- 但其具体合入分支、修复内容及对应 release 状态需要维护者补充说明，否则用户难以确认实际获得哪些修复。

---

## 今日结论

今日 PicoClaw 的新增开发产出有限，主要完成了历史修复分支的收敛。社区关注点集中在两个方向：一是 **LLMTR 原生接入带来的易用性提升**，二是 **resty 依赖回归造成的 QQ 通道可用性下降**。

**项目健康度评估：一般。**

- 社区有真实需求和高质量问题报告；
- 但今日没有新版本，Issue 数量少且缺少对应实现 PR；
- QQ 回归问题直接影响核心通道，建议列为最高优先级；
- LLMTR 请求可按低成本 provider 集成项评估，并尽快给出路线图反馈。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**统计日期：2026-11-23**  
**数据范围：过去 24 小时 GitHub 活动**  
**项目地址：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

- 过去 24 小时共更新 **1 条 Issue**，无新增 Pull Request、无关闭或合并记录，项目日活跃度较低。
- 唯一活跃议题为 **#8172**，用户希望将 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 调整为可配置参数，以支持响应较慢的本地 LLM。
- 该 Issue 虽在今日获得更新，但实际创建于 **2026-11-15**，目前仍处于开放状态，尚无对应修复 PR 或明确维护者结论。
- 过去 24 小时没有新版本发布，无法确认配置能力、兼容性改进或其他功能已进入正式版本。
- 综合判断：项目今日处于**低活跃、问题待跟进**状态；短期风险主要不是新增回归，而是慢速本地模型场景缺少可调超时机制，可能影响稳定性和可部署性。

---

## 3. 项目进展

过去 24 小时**无 PR 更新、合并或关闭**，因此没有可确认的功能交付或缺陷修复。

| 指标 | 过去 24 小时 |
|---|---:|
| Issue 更新 | 1 |
| 新开/活跃 Issue | 1 |
| 已关闭 Issue | 0 |
| PR 更新 | 0 |
| 待合并 PR | 0 |
| 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |

当前唯一可见进展是 Issue **#8172** 在统计窗口内获得更新，说明该问题仍在讨论或处理中；但由于没有关联 PR，暂不能认定项目已产生代码层面的实质推进。

---

## 4. 社区热点

### [Issue #8172：使 PRIMARY_MODEL_CALL_IDLE_TIMEOUT 可配置，以支持慢速本地 LLM](https://github.com/nearai/ironclaw/issues/8172)

- **作者：** @n4s3r
- **创建时间：** 2026-11-15
- **最近更新：** 2026-11-22
- **评论数：** 1
- **当前状态：** Open
- **点赞数：** 0

这是过去 24 小时唯一活跃条目，也是本期社区讨论焦点。问题指向 Agent Loop 中模型调用的空闲超时机制，具体涉及 `HostManagedLoopModelPort` 与 LLM Provider timeout。

**背后的核心诉求：**

1. 当前超时参数对用户不可配置，部署在本地或私有环境时不够灵活。
2. 使用 Ollama 等本地模型时，硬件性能、模型规模、量化方式和上下文长度均可能导致响应时间较长。
3. 固定超时可能使仍在正常生成的请求被提前终止，造成调用失败、中断或用户体验不稳定。
4. 用户希望根据模型、Provider 或运行环境调整超时，而不是全局采用固定阈值。

目前评论与点赞均较少，说明问题尚未形成广泛社区讨论；但它直接关系到本地模型支持的实际可用性，具有较高的产品与稳定性价值。

---

## 5. Bug 与稳定性

### 中等严重度：本地 LLM 调用可能因固定空闲超时被提前终止

- **条目：** [#8172 — Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable for slow local LLMs](https://github.com/nearai/ironclaw/issues/8172)
- **影响范围：** Agent Loop → Model Call Idle Watchdog / `HostManagedLoopModelPort` / LLM Provider timeout
- **复现环境：** hosted-staging（crab shack）
- **报告版本：** 1.4.1
- **状态：** Open
- **是否有 fix PR：** **暂无**
- **是否有已发布修复：** **暂无**

该问题更接近“可配置性缺失导致的稳定性风险”，而非已确认的普遍性崩溃或数据损坏问题。其影响取决于模型调用延迟：当本地 LLM 在固定超时窗口内未产生可识别的响应增量时，请求可能被 watchdog 误判为空闲并终止。

**严重度判断：中等。**

- 对云端快速响应模型影响可能有限。
- 对 CPU 推理、大上下文、本地量化模型或资源竞争环境，影响可能明显。
- 可能表现为模型调用失败、流式响应中断或任务无法完成。
- 当前缺乏 Issue 评论中的复现细节及维护者确认，暂不宜提升至“高严重度”。

**处理建议：**

- 增加 Provider 级或模型级 idle timeout 配置；
- 在不开放无限超时的前提下允许用户设置合理上限；
- 区分“连接超时、首 token 超时、流式空闲超时”；
- 在超时日志中记录 Provider、模型、配置值和最后活动时间；
- 补充 Ollama 慢响应场景的自动化回归测试。

---

## 6. 功能请求与路线图信号

### 请求：开放模型调用空闲超时配置

- **关联议题：** [#8172](https://github.com/nearai/ironclaw/issues/8172)

这是当前最明确的功能与工程路线图信号。现有 PR 数量为 0，因此无法从活跃开发分支判断该需求是否已经排期，但结合问题所属的 Agent Loop 和本地模型支持方向，该能力较可能被纳入后续的小版本或配置系统改进。

建议潜在交付形式包括：

1. 在 `providers.json` 中增加 Provider 级 `idle_timeout`；
2. 支持全局默认、Provider 覆盖和单模型覆盖；
3. 允许通过环境变量或运行时设置覆盖；
4. 为旧配置提供默认值，确保升级后行为保持兼容；
5. 在配置文档中说明该值与整体请求超时的区别。

### 下一版本判断

由于过去 24 小时没有 PR 和 Release，无法确认具体版本计划。若该 Issue 后续获得维护者确认并建立修复 PR，它较可能以**补丁版本或配置能力增强版本**的形式发布，而非大规模功能版本。

---

## 7. 用户反馈摘要

当前仅有 **1 条活跃 Issue、1 条评论**，且摘要未提供完整评论内容，因此可提炼的用户反馈有限。

### 真实使用场景

- 用户在 hosted-staging 环境中配置了本地 Ollama Provider。
- 其本地模型响应速度慢于当前默认的模型调用空闲超时阈值。
- 固定超时无法根据实际硬件和模型性能调整，影响慢速本地 LLM 的正常使用。

### 主要痛点

- **缺少可配置性：** 用户无法针对慢速模型提高 idle timeout。
- **环境差异未被适配：** 云端模型与本地模型在延迟特征上差异显著，统一固定阈值缺乏灵活性。
- **故障定位信息可能不足：** 若调用被超时机制终止，理想情况下应明确区分 Provider 超时、连接超时和真正的模型空闲。

### 满意度信号

- 暂无正面评论或满意反馈。
- Issue 获得 0 个点赞、仅 1 条评论，表明尚未出现广泛共鸣。
- 用户提交具体环境、版本、功能区域和复现步骤，说明其具备较明确的 QA 反馈意识；但缺乏后续讨论也意味着问题尚未形成清晰的社区共识或处理承诺。

---

## 8. 待处理积压

### 优先关注：#8172

- **链接：** [github.com/nearai/ironclaw/issues/8172](https://github.com/nearai/ironclaw/issues/8172)
- **开放时长：** 自 2026-11-15 创建，至 2026-11-23 已开放约 8 天
- **当前状态：** Open
- **评论数：** 1
- **点赞数：** 0
- **关联 PR：** 未见
- **版本发布：** 过去 24 小时无

虽然该 Issue 尚不属于长期未响应问题，但已进入需要明确处理的阶段。维护者宜尽快确认：

1. 是否接受将 idle timeout 开放为配置项；
2. 配置应位于全局、Provider 级还是模型级；
3. 默认值及最大允许值如何设定；
4. 是否需要兼容现有 `providers.json`；
5. 是否能关联测试与修复 PR，并纳入下一补丁版本。

---

## 项目健康度结论

**综合健康度：中性偏低。**

- **活跃度：** 偏低——24 小时内仅 1 条 Issue 更新，无 PR、无发布。
- **交付节奏：** 暂无短期发布活动。
- **技术风险：** 本地慢速 LLM 的固定超时问题尚未解决，可能影响特定部署环境。
- **社区状态：** 关注点集中但讨论深度不足，尚无广泛验证或维护者回应。
- **下一步重点：** 推动 [#8172](https://github.com/nearai/ironclaw/issues/8172) 完成需求确认、关联修复 PR、补齐回归测试，并明确是否进入下一版本。

> 注：本日报仅依据所提供的过去 24 小时 GitHub 数据生成。Issue #8172 的完整评论正文、关联分支及其他历史上下文未提供，因此关于维护者意向和用户满意度的判断应视为有限结论。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-23**  
**仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

过去 24 小时内，LobsterAI 共出现 **12 条 PR 更新**，全部为已合并或已关闭状态，**待合并 PR 为 0**，项目在日报周期内没有新增待处理代码评审积压。今日开发重点高度集中在 **DeepSeek Harness（DSH）迁移及其验收修复**，同时完成网页搜索路由统一、桌面伴侣上下文改造、浏览器能力恢复和文档更新。过去 24 小时 **没有 Issue 更新、没有新版本发布**，说明当日主要是维护者集中收敛代码与文档，而非新增社区需求或用户问题。

**活跃度判断：高。** 12 条 PR 集中处理核心迁移问题，其中 6 条组成完整的 DSH 验收修复系列，表明项目正从大规模架构迁移转向稳定性、运行时一致性和交付准备阶段。

---

## 3. 项目进展

### 3.1 DSH 迁移验收修复系列完成收敛

今日更新的核心进展来自一组按 **1/6—6/6** 编号组织的 DSH 验收修复 PR。该系列覆盖启动、生命周期、记忆、技能、MCP、模型兼容和 Companion 等关键链路，并明确建议按顺序合并。

1. **启动、隔离、备份恢复与打包加固**  
   [#3146](https://github.com/netease-youdao/LobsterAI/pull/3146) 修复 DSH 启动门控、初始化重试、旧会话迁移、运行时隔离以及备份恢复和打包问题。启动状态会保持至初始化完成，减少重复启动带来的竞态与状态不一致。  
   **影响范围：** main、renderer、build、cowork、IM。

2. **会话生命周期、目标、上下文压缩与权限修复**  
   [#3147](https://github.com/netease-youdao/LobsterAI/pull/3147) 清理遗留消息编辑状态，完善会话 fork、目标管理、上下文压缩和权限控制。  
   **影响范围：** main、renderer、cowork。

3. **记忆系统作用域、CRUD 迁移与梦境日记查看器**  
   [#3148](https://github.com/netease-youdao/LobsterAI/pull/3148) 强化项目级与全局记忆隔离，修复记忆 CRUD 迁移，并增加梦境日记查看器。  
   **影响范围：** main、renderer、cowork。

4. **技能、邮件技能、网页搜索沙箱与插件生命周期修复**  
   [#3149](https://github.com/netease-youdao/LobsterAI/pull/3149) 修复技能运行时环境、作用域和迁移问题，并调整邮件技能、网页搜索沙箱及插件生命周期。  
   **影响范围：** main、renderer、docs、skills、cowork。

5. **MCP 同步、OAuth 2.1、SSE Bridge 与工具过滤加固**  
   [#3150](https://github.com/netease-youdao/LobsterAI/pull/3150) 修复 MCP 服务标识、超时、增量同步、OAuth 2.1、SSE 桥接、工具过滤和包路径问题。  
   **影响范围：** main、renderer。

6. **模型兼容、Office 编辑、定时任务、决策工具与 Companion 综合修复**  
   [#3151](https://github.com/netease-youdao/LobsterAI/pull/3151) 完成 DSH 验收修复系列第 6 部分，覆盖模型别名、思考等级、OAuth 路由、Office 编辑、定时任务、决策工具和桌面伴侣。  
   **影响范围：** main、renderer、openclaw、cowork、artifacts。

7. **定时任务工作目录绑定与重载后待处理提示恢复**  
   [#3152](https://github.com/netease-youdao/LobsterAI/pull/3152) 修复定时任务工作目录绑定，并支持页面重载后恢复尚未处理的 DSH 提示，减少任务执行目录错误及重载导致的任务丢失。  
   **影响范围：** main、renderer。

8. **DSH 引擎下恢复应用内浏览器能力**  
   [#3128](https://github.com/netease-youdao/LobsterAI/pull/3128) 将应用内浏览器的无障碍树和可复用元素 ID 暴露给 DSH 模型，支持导航当前标签页、返回截图或保存截图，并保持后台标签页可渲染。该 PR 创建于 11 月 20 日，但于今日完成更新与关闭。  
   **影响范围：** main。

### 3.2 搜索与工具链统一

- [#3155](https://github.com/netease-youdao/LobsterAI/pull/3155) 统一 DSH 原生 `web_search` 路由，并通过 `lobster-web-search-bridge` 接入，关闭旧的 DeepSeek 网页搜索服务，同时将单轮最大查询数限制为 4。  
  **影响范围：** main、renderer、docs、skills、cowork。  
  **意义：** 降低新旧搜索实现并存造成的配置分叉和调用不确定性，降低工具调用成本与失控风险。

- [#3153](https://github.com/netease-youdao/LobsterAI/pull/3153) 修复 `lobster_enable_tools` 的渲染协议：此前 `output.render` 返回字符串，而 DSH 要求 `ContentBlock[]`，导致 `dsh-spill-policy` 抛出 `TypeError`。  
  **影响范围：** main。  
  **意义：** 修复工具启用后触发的运行时异常，是直接影响稳定性的协议兼容问题。

### 3.3 Companion 从主动提示转向按需上下文

- [#3156](https://github.com/netease-youdao/LobsterAI/pull/3156) 移除主动式桌面伴侣提示，改由用户打开快捷面板或悬停启动器时按需采集上下文；主进程新增 `CompanionContextInspector`，用于检查前台应用和当前文件，其中 macOS 路径涉及辅助功能权限。  
  **影响范围：** main、renderer。  
  **意义：** 产品策略从“持续感知与主动打扰”转向“用户触发后提供上下文”，有望降低隐私、权限和打扰成本，但也使辅助功能权限成为关键体验变量。

### 3.4 文档同步

- [#3154](https://github.com/netease-youdao/LobsterAI/pull/3154) 更新中英文 README、贡献者指南及仓库维护文档，补充 DSH 下 Cowork 的运行方式、隔离 profile、工作区位置和开发启动说明。  
  **影响范围：** docs、main。  
  **意义：** DSH 迁移已从内部实现工作进一步扩展到开发者和贡献者文档层面，项目交付准备度提高。

### 3.5 整体推进程度

本日 12 条 PR 几乎全部指向同一条主线：**把 DSH 从可运行的迁移版本推进为更可靠、可恢复、可打包、可扩展的工程实现**。一天内完成启动隔离、会话恢复、记忆隔离、工具协议、搜索路由、浏览器接入、定时任务、文档等关键链路，实质推进幅度较大。

不过，由于所有 PR 都处于关闭或已合并状态，且没有 Release，代码是否已经形成可分发版本仍需以分支合并结果、CI 状态和后续版本标签为准。

---

## 4. 社区热点

本日没有 Issue 更新，PR 的评论数和点赞数也均未提供，因此**无法基于互动量判断最热门讨论项**。从技术影响和变更规模看，今日最值得关注的是以下 PR：

- [#3151](https://github.com/netease-youdao/LobsterAI/pull/3151)  
  覆盖模型、Office、定时任务、决策工具和 Companion，变更范围最广，是 DSH 验收修复系列的收尾部分。

- [#3150](https://github.com/netease-youdao/LobsterAI/pull/3150)  
  聚焦 MCP、OAuth 2.1、SSE 和工具过滤，直接涉及企业扩展工具接入及外部服务互操作。

- [#3155](https://github.com/netease-youdao/LobsterAI/pull/3155)  
  涉及旧搜索服务退役和路由统一，体现基础设施收敛方向，可能影响依赖旧搜索配置的用户和插件作者。

- [#3149](https://github.com/netease-youdao/LobsterAI/pull/3149)  
  技能运行时、沙箱和插件生命周期属于 Agent 扩展生态的基础能力，后续可能成为技能作者重点关注的接口变化点。

**背后诉求判断：** 当日热点并非由大量社区讨论驱动，而是由维护者对迁移稳定性、工具协议一致性、权限隔离和用户可恢复性的工程诉求推动。

---

## 5. Bug 与稳定性

### 严重

1. **DSH 工具输出协议不兼容，可能导致运行时异常**  
   PR：[#3153](https://github.com/netease-youdao/LobsterAI/pull/3153)  
   `lobster_enable_tools` 返回类型不符合 DSH 的 `ContentBlock[]` 约定，可触发 `dsh-spill-policy` 的 `TypeError`。  
   **状态：已有 fix PR，并已关闭。**

### 高

2. **DSH 启动门控、初始化重试及隔离不足**  
   PR：[#3146](https://github.com/netease-youdao/LobsterAI/pull/3146)  
   涉及启动竞态、重复初始化、会话种子、隔离、备份恢复和打包，属于可能导致应用无法启动或跨会话数据污染的基础设施问题。  
   **状态：已有 fix PR，并已关闭。**

3. **会话、权限、上下文压缩和 fork 生命周期异常**  
   PR：[#3147](https://github.com/netease-youdao/LobsterAI/pull/3147)  
   修复旧编辑状态残留、会话生命周期、权限和上下文压缩问题，可能关联消息状态错乱、权限绕过或长会话稳定性下降。  
   **状态：已有 fix PR，并已关闭。**

4. **MCP 同步、OAuth 和 SSE 桥接可靠性问题**  
   PR：[#3150](https://github.com/netease-youdao/LobsterAI/pull/3150)  
   涉及真实服务 ID、超时、增量同步、OAuth 2.1、SSE 桥接及工具过滤，可能造成 MCP 服务重复、遗漏、认证失败或工具暴露不准确。  
   **状态：已有 fix PR，并已关闭。**

### 中

5. **技能运行环境、网页搜索沙箱和插件生命周期问题**  
   PR：[#3149](https://github.com/netease-youdao/LobsterAI/pull/3149)  
   可能导致技能找不到运行时、邮件或搜索操作失败、插件安装和卸载状态不一致。  
   **状态：已有 fix PR，并已关闭。**

6. **记忆作用域和 CRUD 迁移风险**  
   PR：[#3148](https://github.com/netease-youdao/LobsterAI/pull/3148)  
   重点解决项目记忆与全局记忆混淆、数据迁移错误和专家隔离失效。错误作用域可能导致敏感上下文串用。  
   **状态：已有 fix PR，并已关闭。**

7. **定时任务目录错误及重载后待处理提示丢失**  
   PR：[#3152](https://github.com/netease-youdao/LobsterAI/pull/3152)  
   影响后台任务执行位置、重试和恢复能力。  
   **状态：已有 fix PR，并已关闭。**

8. **DSH 引擎下应用内浏览器能力退化**  
   PR：[#3128](https://github.com/netease-youdao/LobsterAI/pull/3128)  
   迁移后模型缺少浏览器无障碍树、元素 ID、标签页导航和截图能力，属于明显的功能回归。  
   **状态：已有 fix PR，并已关闭。**

9. **模型别名、思考等级、OAuth 路由及决策工具兼容问题**  
   PR：[#3151](https://github.com/netease-youdao/LobsterAI/pull/3151)  
   可能导致模型选择错误、推理参数丢失、认证路由异常或工具调用失败。  
   **状态：已有 fix PR，并已关闭。**

### 低至中

10. **Companion 主动提示与上下文采集行为调整**  
    PR：[#3156](https://github.com/netease-youdao/LobsterAI/pull/3156)  
    这并非传统缺陷修复，而是交互策略变化；macOS 辅助功能权限不足时，上下文采集可能不可用。  
    **状态：改造已完成并关闭，需继续观察权限失败提示与降级体验。**

---

## 6. 功能请求与路线图信号

本日没有新的 Issue 或明确的功能请求，因此无法将某项用户诉求认定为正式排期。但结合已关闭 PR，可以识别出以下明确路线图信号：

1. **DSH 成为 Cowork 和 Agent 运行时的主要底座**  
   [#3146](https://github.com/netease-youdao/LobsterAI/pull/3146)、[#3147](https://github.com/netease-youdao/LobsterAI/pull/3147)、[#3151](https://github.com/netease-youdao/LobsterAI/pull/3151)  
   显示项目重心已从 OpenClaw 迁移到 DSH，并开始系统性处理生产级运行要求。

2. **记忆系统向项目级、个人级和专家级隔离演进**  
   [#3148](https://github.com/netease-youdao/LobsterAI/pull/3148)  
   项目与全局作用域、专家隔离、CRUD 迁移和梦境日记查看器表明记忆能力正从基础存储转向可组织、可视化、可隔离的个人 AI 基础设施。

3. **应用内浏览器成为 Agent 的结构化操作界面**  
   [#3128](https://github.com/netease-youdao/LobsterAI/pull/3128)  
   无障碍树、元素 ID、导航与截图能力说明 LobsterAI 正在强化 Agent 对桌面 Web 内容的理解和操作能力。

4. **网页搜索实现统一并强调成本控制**  
   [#3155](https://github.com/netease-youdao/LobsterAI/pull/3155)  
   原生 DSH 搜索路由、桥接层和最大查询数限制表明项目倾向于收敛基础设施，同时控制搜索调用开销。

5. **Companion 转向用户触发的按需上下文助手**  
   [#3156](https://github.com/netease-youdao/LobsterAI/pull/3156)  
   “快捷面板或悬停启动器触发”成为上下文入口，反映产品设计更强调显式用户意图和更少打扰。

6. **定时任务成为稳定的一等能力**  
   [#3152](https://github.com/netease-youdao/LobsterAI/pull/3152)、[#3151](https://github.com/netease-youdao/LobsterAI/pull/3151)  
   工作目录绑定、重载恢复及任务相关综合修复，说明后台自动执行已进入重点验收范围。

---

## 7. 用户反馈摘要

本日 **没有新增 Issue 或评论数据**，因此无法从用户评论中提炼真实使用反馈，也无法客观判断满意度或不满情绪。

可以从变更方向观察到以下潜在使用场景：

- **桌面办公与文件处理：** Companion、Office 编辑和前台文件上下文支持面向日常办公辅助。
- **浏览器内自动化：** DSH 获得无障碍树和可复用元素 ID，目标是让 Agent 理解并操作应用内网页。
- **后台持续任务：** 定时任务、待处理提示恢复和工作目录绑定针对长任务与自动执行场景。
- **个人长期记忆：** 项目级、全局级与专家级隔离适合多工作流、多专家共存。
- **扩展工具接入：** MCP、OAuth 2.1、SSE 和技能生命周期面向第三方工具和服务集成。
- **成本与稳定性控制：** 搜索查询上限、启动门控、上下文压缩和恢复机制显示项目开始关注规模化使用成本。

这些是**产品方向判断**，不等同于已获得用户验证的需求结论。

---

## 8. 待处理积压

- **当前待合并 PR：0 条。**  
  数据来源于 [LobsterAI Pull Requests](https://github.com/netease-youdao/LobsterAI/pulls)，今日更新的 12 条 PR 均已合并或关闭，没有公开的待处理 PR 积压。

- **当前开放 Issue：0 条。**  
  数据来源于 [LobsterAI Issues](https://github.com/netease-youdao/LobsterAI/issues)，过去 24 小时无 Issue 更新，也没有可识别的长期未响应 Issue。

- **缺少版本发布：**  
  今日无新 Release，可前往 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases) 查看历史版本。代码修复已完成并不自动代表用户已经获得可分发版本，维护者仍需确认：
  - 上述 PR 的实际合并分支与目标分支；
  - 主分支 CI 与跨平台测试结果；
  - macOS 辅助功能权限和浏览器回归结果；
  - DSH 迁移的用户配置、API Key、旧搜索配置及数据迁移说明；
  - 下一版本是否包含破坏性配置变更。

---

## 今日结论

LobsterAI 今日呈现典型的**高强度迁移收敛日**：12 条 PR 全部关闭，未留下公开待合并积压，核心成果是 DSH 迁移验收修复体系基本闭环，同时恢复浏览器能力、统一搜索路由并更新文档。项目健康度可评估为**良好偏高**，主要优势是问题发现后修复链路完整、变更覆盖面广；主要风险是缺乏 Issue 与 Release 数据，无法验证真实用户影响和正式交付状态。下一阶段应重点观察**发布前回归测试、迁移文档、旧配置兼容以及用户侧稳定性反馈**。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-23**  
**项目：**[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**数据范围：过去 24 小时**

---

## 一、今日速览

过去 24 小时项目保持较高活跃度，共更新 **19 个 Issues**、**24 个 PR**，并发布 **v2.3.1-beta.1**。当前 PR 以待审代码为主（**21 个待合并、3 个已合并或关闭**），开发重心集中在 Console 前端、插件 SDK、运行时稳定性及多渠道支持。社区问题反馈较为集中，主要涉及 **Web 控制台可用性、Windows/本地模型兼容、流式响应中断、计划任务可靠性以及微信通道稳定性**。整体健康度评估为 **活跃但质量风险偏高**：版本迭代和修复响应积极，但仍有若干高影响稳定性问题尚未完成合并验证。

---

## 二、版本发布

### v2.3.1-beta.1

**发布时间：2026-11-23**  
**Release：** [v2.3.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.1-beta.1)  
**发布验证 Issue：** [#8861](https://github.com/agentscope-ai/QwenPaw/issues/8861)

该 Beta 版本已确认包含以下方向：

- **修复聊天与工具调用 SSE 流的代理缓冲问题**
  - 对应 PR：[#8730](https://github.com/agentscope-ai/QwenPaw/pull/8730)
  - 有助于降低反向代理环境下流式输出被缓冲、延迟或截断的概率。
- **更新版本号至 2.3.1b1**
  - 对应 PR：[#8809](https://github.com/agentscope-ai/QwenPaw/pull/8809)
- 发布说明还涉及 **Agent Loop 工具调用记录** 等修复，但提供的摘要内容不完整，具体变更需以 [Release 页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.1-beta.1) 为准。

### 破坏性变更与迁移建议

从当前公开变更摘要看，**未发现明确标注的破坏性 API 变更**，但 Beta 版本仍建议重点验证：

1. **SSE 流式输出**
   - 测试普通聊天、工具调用、代理转发及长响应场景。
2. **Console 与现有插件**
   - 当前仍有插件路由重复加载、插件 SDK 扩展等待审变更，参见 [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) 和 [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)。
3. **Windows 用户**
   - ReMe 标签索引和 `llama-server.exe` 残留问题在当前版本附近仍被报告，参见 [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)、[#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)。
4. **生产环境**
   - 建议先完成 [#8861](https://github.com/agentscope-ai/QwenPaw/issues/8861) 的平台安装验证，再将 Beta 版本用于关键工作流。

---

## 三、项目进展

### 3.1 已合并或关闭的 PR

今日共记录 **3 个已合并/关闭 PR**。由于数据未提供具体合并时间及合并提交，以下按当日关闭状态整理：

- **[#8791 — 改进审批卡片交互与本地化](https://github.com/agentscope-ai/QwenPaw/pull/8791)**
  - 优化授权范围标签，避免将会话级规则误称为 “Just Once” 或 “Always Allow”。
  - 改善审批失败、过期后的反馈，并保留必要上下文。
  - 与今日新 PR [#8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) 方向一致，表明团队正在系统统一 Console 审批与确认体验。

- **[#8855 — 修复 Plugin SDK 测试在 Windows 下的时序与编码问题](https://github.com/agentscope-ai/QwenPaw/pull/8855)**
  - 提升插件 SDK 测试在 Windows 环境中的稳定性，降低跨平台 CI 偶发失败风险。

- **[#7632 — 未知斜杠命令返回本地反馈](https://github.com/agentscope-ai/QwenPaw/pull/7632)**
  - 未知命令不再直接启动 Agent 对话，而是提供本地错误提示、拼写建议及默认帮助。
  - 改善 CLI/聊天命令的可发现性和容错体验。

**推进程度判断：** 今日已落地内容主要是交互规范、测试兼容性和命令容错类改进；功能扩张与关键稳定性修复大多仍在待审阶段。

### 3.2 重点待合并 PR

以下 PR 尚未合并，但已形成较清晰的下一轮演进方向：

- **[#8764：扩展 Plugin SDK 1.2 API、生命周期及开发工具](https://github.com/agentscope-ai/QwenPaw/pull/8764)**
  - 引入请求身份、模型选择、作用域化会话历史、权限协调及资源生命周期等能力。
  - 是当前最重要的生态扩展之一，可能成为后续版本的核心能力。

- **[#8554：插件 CLI 命令与扩展点](https://github.com/agentscope-ai/QwenPaw/pull/8554)**
  - 将插件接入 Click 命令树，并联动插件注册、依赖检查及资源生命周期。
  - 与 SDK 1.2 共同推动“宿主能力 + 可插拔扩展”架构。

- **[#8787：向插件主题开放语义颜色角色](https://github.com/agentscope-ai/QwenPaw/pull/8787)**
  - 在基础主题角色之上增加更完整的语义颜色接口，改善第三方插件界面的一致性。

- **[#8785：媒体内联预算、拒绝后缩放及遗漏报告](https://github.com/agentscope-ai/QwenPaw/pull/8785)**
  - 同时处理图片尺寸和字节预算限制，并在媒体被拒绝或省略时提供显式反馈。

- **[#8100：运行时使用解析后的媒体能力](https://github.com/agentscope-ai/QwenPaw/pull/8100)**
  - 修复“模型被目录识别为支持图片，但运行时却拒绝图片内容”的能力元数据不一致问题。

- **[#8859：统一 Console 确认与审批交互](https://github.com/agentscope-ai/QwenPaw/pull/8859)**
  - 聚焦授权范围展示、异步状态刷新和破坏性操作确认，属于大型体验统一改动。

- **[#8858：恢复会话历史时启用分页](https://github.com/agentscope-ai/QwenPaw/pull/8858)**
  - 修复重连或发送方切换后，历史消息一次性加载导致的渲染和性能问题。

总体来看，项目正在从单一 Agent/Console 产品向 **可插拔 SDK、跨渠道代理执行层和更成熟的扩展生态**演进，但大批 XL/XXXL PR 集中待审，也带来了较高的集成与回归风险。

---

## 四、社区热点

### 4.1 讨论最活跃的 Issues

#### 1. Console 在 iOS WebKit 长会话中冻结

- **Issue：**[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)
- **评论数：3**
- **作者：** @yaozy2020
- **状态：** Open

问题指向 `UserMessageAnchors` 布局抖动和 `content-visibility: auto` 在 `column-reverse` 列表中的组合效应。随着对话增长，iOS Safari/WebKit 可能持续重排并冻结界面。

**核心诉求：** 移动端长会话必须保持可交互，不能因历史消息增多而锁死 UI。  
**后续观察：** 当前没有明确对应的 fix PR，属于高优先级稳定性缺口。

#### 2. 计划任务第二次模型调用失败，而手动执行成功

- **Issue：**[#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)
- **评论数：3**
- **状态：** Open

同一任务、同一模型在手动触发时成功，但每日计划任务连续失败，并抛出 `APIConnectionError`。

**核心诉求：** 自动化任务必须与手动任务保持一致，连接错误应可诊断、可重试且不产生静默失效。  
**后续观察：** 当前数据中未见直接修复 PR。

#### 3. 微信功能完善度问题

- **Issue：**[#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674)
- **评论数：3**
- **状态：** Open

用户集中反馈：

- 无输入/处理中提示；
- 无法加入群聊；
- UI 与微信会话不同步；
- 桌面版微信中机器人不显示；
- 出现 `503 {"detail":"Channel Console not found"}`。

**核心诉求：** 微信应从“基础可接入”提升至可用的生产渠道。  
**后续观察：** 另有响应路由容量问题可能直接影响微信长期运行，参见 [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) 和 PR [#8834](https://github.com/agentscope-ai/QwenPaw/pull/8834)。

#### 4. 压缩失败提示误导用户清除上下文

- **Issue：**[#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)
- **评论数：2**
- **状态：** Open

压缩失败时提示使用 `/clear`，可能诱导用户删除仍有价值的上下文。

**核心诉求：** 错误恢复提示应优先建议重试压缩，而不是清空会话。  
**修复进展：** 已有 PR [#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853)，建议用户解决错误后重试 `/compact`，但尚未合并。

### 4.2 重点 PR 热点

- **[#8787：插件语义颜色角色](https://github.com/agentscope-ai/QwenPaw/pull/8787)**
- **[#8133：修复聊天 Markdown 的 CJK 强调边界](https://github.com/agentscope-ai/QwenPaw/pull/8133)**
- **[#8764：Plugin SDK 1.2 扩展](https://github.com/agentscope-ai/QwenPaw/pull/8764)**
- **[#8785：媒体预算与遗漏反馈](https://github.com/agentscope-ai/QwenPaw/pull/8785)**
- **[#8100：解析后的媒体能力用于运行时](https://github.com/agentscope-ai/QwenPaw/pull/8100)**

这些 PR 显示社区关注点已从单一聊天体验转向 **插件生态、内容渲染、多媒体处理和运行时能力建模**。

---

## 五、Bug 与稳定性

以下按潜在影响范围和恢复难度排序。

### P0 / 高严重度：可能导致核心服务静默失效

#### 微信等渠道在响应路由达到 128 后永久失效

- **Issue：**[#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814)
- **现象：** `RESPONSE_SCOPE_LIMIT` 达到上限后，活动响应路由从不被回收，入站和出站消息均静默停止，仅记录 `-32603 internal error`。
- **影响：** 长时间运行的渠道实例可能永久不可用，且用户侧没有明确错误。
- **修复 PR：**[#8834](https://github.com/agentscope-ai/QwenPaw/pull/8834)
- **状态：** 已有待合并修复，引入过期路由回收机制。

#### Windows 后端重启后遗留 `llama-server.exe`

- **Issue：**[#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
- **现象：** 后端异常退出或被强制结束后，本地模型进程未被回收；反复重启会持续累积进程并耗尽内存。
- **影响：** Windows 本地模型最终无法启动，并可能影响整机稳定性。
- **修复 PR：** 数据中未见明确对应 PR。

#### Windows ReMe 标签索引永久失败

- **Issue：**[#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)
- **现象：** `v2.3.0` 和 `v2.3.0.post1` 内置的 `reme-ai 0.4.2.0` 在 Windows 上持续报 `Invalid workspace-relative tag-index path`。
- **影响：** 依赖 ReMe Light 的记忆标签索引无法工作。
- **修复 PR：** 暂无明确对应 PR。
- **版本提示：** 当前 Beta 发布说明未显示明确包含此修复。

### P1 / 高严重度：影响数据完整性、任务可靠性或核心交互

#### 流式回复中途断开，且已经输出内容后不重试

- **Issue：**[#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)
- **环境：** Windows、Console、DeepSeek 模型流式输出。
- **现象：** 出现 `RemoteProtocolError`，回复中途终止；一旦已有部分内容发出，当前逻辑不会自动重试。
- **影响：** 用户会收到不完整回答，且弱网或代理波动下失败率较高。
- **修复 PR：** 暂无明确对应 PR。

#### 计划任务调用模型失败而手动运行成功

- **Issue：**[#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)
- **影响：** 定时自动化场景不可靠，直接削弱产品作为长期助理的核心价值。
- **修复 PR：** 暂无明确对应 PR。

#### Console 插件入口被重复加载，插件路由无法注册

- **Issue：**[#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)
- **现象：** import map 对入口 chunk 追加版本查询参数，造成入口模块被加载两次，插件注册逻辑未在预期实例中生效。
- **影响：** 插件应用路由无法注册，插件生态功能不可用。
- **修复 PR：** 暂无明确对应 PR。

### P2 / 中严重度：影响 Web Console 可用性

#### 消息列表不能通过键盘滚动

- **Issue：**[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)
- **影响：** 无鼠标用户、纯键盘操作及部分辅助技术场景下，Console 对话难以使用。
- **修复 PR：**[#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854)

#### Markdown 表格及长行溢出且无法横向滚动

- **Issues：**
  - [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)
  - [#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856)
- **影响：** 表格右侧列不可见，结构化回答和长代码/链接展示受损。
- **修复 PR：**[#8847](https://github.com/agentscope-ai/QwenPaw/pull/8847)

#### 工具配置包含 password 字段时页面循环刷新

- **Issue：**[#8836](https://github.com/agentscope-ai/QwenPaw/issues/8836)
- **影响：** 配置页面不可用，可能触发重复保存与请求。
- **修复 PRs：**
  - [#8862](https://github.com/agentscope-ai/QwenPaw/pull/8862)
  - [#8842](https://github.com/agentscope-ai/QwenPaw/pull/8842)

#### iOS WebKit 长会话冻结

- **Issue：**[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)
- **影响：** 移动端长对话体验严重退化。
- **修复 PR：** 暂无明确对应 PR。

### P2 / 中低严重度：CLI 路径和接口问题

#### mission CLI 重复拼接 `/api`

- **Issue：**[#8833](https://github.com/agentscope-ai/QwenPaw/issues/8833)
- **现象：** `mission start/status/...` 请求 `/api/api/chat/send`。
- **修复 PR：** 暂无明确对应 PR。

#### auto CLI 使用不支持的 `HEAD /api/version`

- **Issue：**[#8832](https://github.com/agentscope-ai/QwenPaw/issues/8832)
- **现象：** 实际请求 `HEAD /api/version`，服务返回 405，健康检查误判守护进程未运行。
- **修复 PR：** 暂无明确对应 PR。

---

## 六、功能请求与路线图信号

### 6.1 Harness 进一步解耦为可插拔 Execution SDK

- **Issue：**[#8860](https://github.com/agentscope-ai/QwenPaw/issues/8860)
- **诉求：** 将 Agent Loop / Execution SDK 与 QwenPaw 宿主能力进一步解耦，同时保留记忆、内置工具、模型路由及 Console 等宿主能力。
- **已有基础：**
  - `qwenpaw-harness-codex v1.0.0` 已在 v2.3.0 发布；
  - Plugin SDK 扩展 PR [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)；
  - 模块化方向相关 Issue [#8808](https://github.com/agentscope-ai/QwenPaw/issues/8808)。
- **判断：** 这是一个明确的架构路线信号，但改动面较大，更可能进入后续主版本或分阶段版本，而非仅作为小版本补丁。

### 6.2 Plugin SDK 1.2 与 CLI 扩展点

- **PR：**[#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)
- **PR：**[#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)
- **诉求方向：**
  - 请求身份和权限；
  - 模型与会话作用域；
  - 插件 CLI；
  - 生命周期与资源清理；
  - 开发者工具与主题扩展。
- **判断：** 高度可能进入下一批 2.x 版本，但因涉及公共 API、权限模型和生命周期语义，需要谨慎安排兼容性审查。

### 6.3 Telegram Forum Topic 会话隔离

- **Issue：**[#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827)
- **诉求：** 在 Telegram forum supergroup 中按 topic 建立独立 Agent 会话。
- **判断：** 需求清晰、实现边界集中，可能较快进入后续小版本；但需要与现有多渠道会话路由机制一起设计，避免与响应路由回收问题交叉影响。

### 6.4 更完整的插件主题系统

- **PR：**[#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787)
- **判断：** 属于低风险生态体验增强，较适合随 Plugin SDK 更新同步发布。

### 6.5 本地模型与 Windows 可靠性增强

- 相关 Issues：
  - [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)
  - [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)
- **判断：** 虽以 Bug 形式提出，但会直接影响 Windows 桌面版可靠性，优先级应高于一般前端体验优化。

---

## 七、用户反馈摘要

### 核心痛点

1. **“能调用模型”不等于“任务可靠”**
   - 用户希望计划任务、桌面端、本地模型和流式输出在长期运行时保持稳定。
   - 相关反馈：[#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)、[#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)、[#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)。

2. **Console 的长会话和富内容展示仍不成熟**
   - iOS WebKit 冻结、键盘无法滚动、Markdown 表格被裁切等问题集中在日常高频路径。
   - 相关反馈：[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)、[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)、[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)、[#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856)。

3. **错误提示可能放大损失**
   - 压缩失败建议 `/clear` 可能让用户误删上下文。
   - 修复方案应明确保留会话并提供重试路径。
   - 相关反馈：[#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)、[#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853)。

4. **微信渠道距离生产可用仍有距离**
   - 用户期待群聊、输入状态、桌面端可见性及多端会话同步。
   - 路由容量耗尽后静默死亡尤其影响长期在线场景。
   - 相关反馈：[#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674)、[#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814)。

5. **插件生态开始进入实际落地阶段**
   - 用户不再只关注官方 Console，而是要求主题、CLI、权限、生命周期和 API 稳定性。
   - 相关 PR：[#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764)、[#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)、[#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787)。

### 满意度信号

- 当前新增 Issue 的 👍 数均为 **0**，表明当日问题反馈尚未形成明显社区共识或传播热度。
- 但部分 Issue 已获得 **2–3 条评论**，尤其是 iOS 冻结、计划任务失败和微信功能，说明这些问题具有明确复现或使用场景。
- 多个 Bug 在数小时内即出现针对性 PR，表明维护团队响应速度较好；但 PR 是否合并、是否进入当前 Beta，仍是判断问题真正闭环的关键。

---

## 八、待处理积压

### 8.1 长期存续且影响较大的 Issue

#### 微信功能完善度

- **Issue：**[#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674)
- **创建时间：2026-03-31**
- **状态：** Open
- **关注点：** 群聊、桌面端、状态提示、UI 同步及渠道错误。

这是数据中最明显的长期积压项。建议维护者拆分需求，明确短期修复清单和长期渠道路线图。

### 8.2 创建较早、仍处审核或待合并状态的 PR

#### 未知斜杠命令反馈

- **PR：**[#7632](https://github.com/agentscope-ai/QwenPaw/pull/7632)
- **创建时间：2026-09-08**
- **当前状态：** 已关闭，优先级风险较低。

#### 运行时媒体能力修复

- **PR：**[#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100)
- **创建时间：2026-10-03**
- **当前状态：** Open / Under Review

该 PR 涉及图片能力判定与媒体内容保留，建议避免因等待周期过长而扩大兼容性问题。

#### 工具结果折叠中的 URL 媒体识别

- **PR：**[#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487)
- **创建时间：2026-10-29**
- **当前状态：** Open

建议结合上下文压缩与历史记录加载测试，确认不会造成引用丢失或资源泄漏。

#### Provider 不存在时返回 404 的集成测试

- **PR：**[#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308)
- **创建时间：2026-10-18**
- **当前状态：** Open

测试本身范围较小，但仍应确认与上游模型目录测试的依赖关系，避免长期成为合并阻塞项。

#### 任务完成回调与清理

- **PR：**[#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268)
- **创建时间：2026-10-16**
- **当前状态：** Open

该 PR 修复运行完成后回调悬挂导致任务永久处于 `running` 的问题，属于稳定性修复，建议提高审核优先级。

### 8.3 建议维护者优先关注的未闭环问题

1. **渠道响应路由容量耗尽后静默失效**  
   [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) / PR [#8834](https://github.com/agentscope-ai/QwenPaw/pull/8834)

2. **计划任务与手动执行行为不一致**  
   [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)

3. **Windows 本地模型进程泄漏**  
   [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)

4. **Windows ReMe 索引完全不可用**  
   [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)

5. **流式输出中断且不重试**  
   [#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)

6. **Console 插件入口重复加载**  
   [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)

7. **iOS 长会话冻结**  
   [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)

---

## 项目健康度结论

**综合健康度：活跃，修复响应较快，但稳定性债务仍较明显。**

- **开发活跃度：高**  
  24 小时内有 24 个 PR 更新，并发布新 Beta。
- **社区活跃度：中高**  
  19 个 Issue 更新，问题覆盖真实场景，但点赞和评论规模整体仍偏小。
- **版本成熟度：中等**  
  v2.3.1-beta.1 已发布，但多个关键稳定性修复尚未明确进入该版本。
- **工程质量：风险偏高**  
  大量 XL/XXXL PR 集中在插件 SDK、Harness 解耦和 Console 体验，集成复杂度较高。
- **近期建议**  
  维护者应优先推动渠道路由、Windows、流式输出、计划任务和插件入口相关修复完成合并；同时为 Plugin SDK 1.2、Harness 解耦及 Telegram topic 隔离明确版本归属和兼容性策略。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-23**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**数据源：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时项目共出现 **50 条 Issue 更新和 50 条 PR 更新**，其中 Issues/PR 的活跃或待处理比例均为 **82%（41/50）**，另各有 **9 条关闭或合并**，整体开发活动较高。  
今日没有新版本发布，项目仍处于密集修复与功能验证阶段，提交主题主要覆盖 **Gateway 稳定性、Desktop 会话、跨会话锁、Windows 兼容、插件生态和 CI 治理**。  
Issues 中长期积累的 P1/P2 级问题依然较多，尤其是 Gateway 重启挂起、Kanban/Cron worker 卡死、Desktop 会话压缩异常及 SSH/MCP 资源复用问题，暴露出多子系统生命周期管理仍不稳定。  
PR 端出现了一些有针对性的修复，包括路由持久化性能优化、SSH ControlMaster 清理、会话恢复锁、Windows 命令截断和 RE2 迁移护栏，但多数尚未合并，项目健康度可评为 **“高活跃、中等稳定、积压偏高”**。  
今日数据呈现明显的“问题发现速度接近修复速度，但存量缺陷规模仍大”的特征，短期应优先关注 Gateway/Cron 的可用性以及 Desktop 会话一致性。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此没有新增版本说明、破坏性变更或升级迁移事项。

---

## 3. 项目进展

今日未展示完整的 PR 合并明细，但已有明确关闭/合并状态的 PR 反映出以下推进方向。

### 3.1 修复压缩片段查询无限重试

PR [#158487](https://github.com/NousResearch/hermes-agent/pull/158487) 已关闭，目标是让压缩片段 ID 被不可恢复地拒绝，而不是持续返回 `storage_unavailable`。这改善了错误语义，避免客户端无限轮询，并推动 Gateway 压缩与会话所有权逻辑进一步收敛。

### 3.2 修复一次性运行遗留 Docker 容器

Issue [#141661](https://github.com/NousResearch/hermes-agent/issues/141661) 已关闭，对应修复方向是在 one-shot 运行退出前可靠等待 Docker 环境清理，避免 `os._exit` 跳过正常清理并留下已停止容器。这减少了 CLI benchmark、自动化测试和临时任务产生资源残留的概率。

### 3.3 修复后台完成通知触发空回复重试

Issue [#139299](https://github.com/NousResearch/hermes-agent/issues/139299) 已关闭。相关处理聚焦于后台进程或委派任务完成通知触发空模型回复后，被错误 nudge、重试甚至切换 provider 的问题，有助于减少无意义调用和成本。

### 3.4 修复运行时路径被电话号码脱敏规则破坏

Issue [#123316](https://github.com/NousResearch/hermes-agent/issues/123316) 已关闭。原先托管 Python 路径中的 `+` 加构建日期会被误判为电话号码而破坏路径；该问题现已处理，说明日志脱敏规则与安装路径兼容性得到修正。

### 3.5 增强 Gemini 4 Neon 与 Nous Portal 能力目录

Issue [#158253](https://github.com/NousResearch/hermes-agent/issues/158253) 已关闭，涉及 Gemini 4 Neon 的模型目录、定价和 `xhigh` 能力对齐，以及 Nous Portal 原生视觉能力查询。该项提升了模型目录准确性和计费展示一致性。

### 3.6 推进插件与后台任务能力扩展

虽然下列 PR 仍待处理，但反映了近期开发重点：

- PR [#159113](https://github.com/NousResearch/hermes-agent/pull/159113)：插件目录新增 **AirPrompter**，用于保存、运行和更新提示词与多步骤工作流。
- PR [#157950](https://github.com/NousResearch/hermes-agent/pull/157950)：新增 `pre/post_background_review`、`pre_curator_run` 等插件生命周期钩子，使插件可以介入后台记忆与技能审阅流程。
- PR [#159109](https://github.com/NousResearch/hermes-agent/pull/159109)：将 `mock-review` 插件重新固定到 v2.4.1，强化插件版本可复现性。

### 总体推进程度

今日工作覆盖了 **稳定性修复、桌面端一致性、跨平台兼容、插件能力、性能和 CI 护栏**，方向较完整；但从 41 个仍待处理的 Issue/PR 看，修复尚未充分转化为已发布版本，成果对用户的实际可用性仍取决于合并和发版节奏。

---

## 4. 社区热点

### 4.1 Issue：Discord 进程完成监听无限冲突重试

[#143720](https://github.com/NousResearch/hermes-agent/issues/143720)  
**状态：OPEN｜16 条评论｜P2**

Discord 线程关联的 process-completion watch 每 60 秒持续遭遇 `admission_conflict`，单次日志中出现 **494 次记录并持续 6 小时以上**。更严重的是，尝试次数上限没有生效，`notify-mode=off` 也无法关闭。

**用户诉求：**

- 建立可靠的尝试上限和退避机制；
- 让通知关闭配置真正生效；
- 避免后台任务无限消耗资源和刷屏。

这是今日评论最多的 Issue，显示该问题对长期运行 Gateway 的资源控制和可观测性影响较大。

### 4.2 Issue：Desktop 恢复已结束的旧压缩会话

[#143767](https://github.com/NousResearch/hermes-agent/issues/143767)  
**状态：OPEN｜13 条评论｜P2**

Desktop 消息聊天在恢复会话时仍指向压缩前、已经结束的 session，导致每次模型切换都被 `session_superseded` 拒绝。

**用户诉求：**

- Desktop 应恢复当前有效的会话代际；
- 模型切换不能因历史 session 引用失效而被阻断；
- 压缩、重启和恢复之间需要一致的会话选择规则。

这与今日的压缩、路由和会话相关 PR 高度相关，说明会话代际管理是当前社区最集中的痛点之一。

### 4.3 Issue：主动任务机制路线图讨论

[#158538](https://github.com/NousResearch/hermes-agent/issues/158538)  
**状态：OPEN｜9 条评论｜P3**

维护者整理了 Hark、OpenAI dots、Meta Muse、Grok Bot 等产品的主动任务机制，重点讨论：

- 用户批准的任务与后台“寻找帮助”扫描如何分离；
- 主动运行是否应保持透明；
- 如何避免过度读取、噪声和延迟执行。

Hermes 的方向是让每次主动执行都对应用户批准的 job，并展示提示词和状态。  
**潜在影响：** 该讨论可能演化为下一阶段 Cron、主动任务和通知体系的产品路线图。

### 4.4 Issue：Desktop/TUI 切换模型后仍使用旧 provider

[#146345](https://github.com/NousResearch/hermes-agent/issues/146345)  
**状态：CLOSED｜9 条评论｜2 个 👍｜P2**

模型切换没有同步覆盖 `model_config.gateway_runtime`，恢复会话时可能重新走旧 provider。Issue 已关闭，说明会话路由配置继承问题得到处理。

### 4.5 Issue：Windows profile 路径含空格导致更新失败

[#140831](https://github.com/NousResearch/hermes-agent/issues/140831)  
**状态：OPEN｜7 条评论｜P2**

Windows 下 `_read_process_cmdline` 在拼接参数时没有正确重新加引号，用户目录含空格时 Gateway 身份校验失败，最终中断 `hermes update`。

**用户诉求：**

- Windows 安装、升级和 Gateway 重启应正确处理带空格路径；
- 进程身份识别不能依赖脆弱的字符串拼接。

这是直接影响安装和更新成功率的问题。

### 4.6 Issue：Matrix 外部 `hermes send` 破坏 Gateway E2EE 密钥共享

[#141208](https://github.com/NousResearch/hermes-agent/issues/141208)  
**状态：OPEN｜7 条评论｜P2**

在 Gateway 运行期间从外部执行 `hermes send`，会使用同一 Matrix device 和 `crypto.db` 创建第二个短期 E2EE 客户端，导致后续 megolm key share 无法解密。

**用户诉求：**

- 外部 CLI 应复用 Gateway 的加密会话，或明确禁止并发访问；
- E2EE 状态必须具备单写者/单进程语义；
- 修复后需提供安全恢复密钥共享的方法。

### 4.7 PR：路由持久化只写入变化行

[#159114](https://github.com/NousResearch/hermes-agent/pull/159114)  
**状态：OPEN｜P3**

现实现每次调用 `replace_routing_entries` 都会删除并重新插入整个 routing index。在 **3,331 行路由索引**且磁盘饱和的实例上，一次写入会持有 `state.db` writer mutex **10–12 秒**。

该 PR 改为增量写入，属于高价值性能修复，也与今日的 Gateway 路由锁、事件循环阻塞问题直接相关。

### 4.8 PR：修复 SSH ControlMaster 被单个环境误关闭

[#159108](https://github.com/NousResearch/hermes-agent/pull/159108)  
**状态：OPEN｜P2**

多个 SSH 环境共享同一 `user@host:port` ControlMaster，其中一个环境清理时执行 `ssh -O exit`，会连带中断其他活跃环境的命令。

**用户诉求：**

- 共享资源必须按引用计数管理；
- 一个租户清理不能破坏其他会话；
- SSH 终端在长时间任务中的稳定性需要明确保障。

---

## 5. Bug 与稳定性

以下按对核心可用性、数据一致性和资源泄漏的影响排序。  
“已有 fix PR”仅表示数据中能明确找到对应修复，不等同于已经合并发布。

### P1

#### Kanban/Cron receipt admission 路径导致 Gateway/worker 活性问题

- Issue：[#157896 相关现场记录 / #145022 背景](https://github.com/NousResearch/hermes-agent/pull/157896)
- PR：[#157896](https://github.com/NousResearch/hermes-agent/pull/157896) — **已有 fix PR，OPEN**
- 现象：在 21 个 profile 共用 Gateway 的 VPS 上，曾出现每日 4 次 exit-75 watchdog kill、81 个卡片执行状态未知。
- 修复方向：将 receipt admission 读取移出事件循环，并提升 owner write 等待容错。

### P2

#### Gateway 优雅重启在 `stop()` 抛错时永久 draining

- Issue：[#159067](https://github.com/NousResearch/hermes-agent/issues/159067)
- **暂无明确对应 PR**
- `SIGUSR1` 重启时，如果 `stop()` 抛出异常，异常没有记录，shutdown watchdog 又被解除，Gateway 会停留在 `draining`，直到 supervisor 强制终止。
- **风险：高**，影响升级、配置重载和服务恢复。

#### Kanban worker 在 Windows 启动后不发起模型请求

- Issue：[#148389](https://github.com/NousResearch/hermes-agent/issues/148389)
- **暂无明确对应 PR**
- 任务一直显示 `running`，CPU 停止增长、无 API TCP 连接，session 也没有消息。
- **风险：高**，属于静默挂起。

#### Cron worker 因一次临时 WebSocket 故障退出并暂停任务

- Issue：[#157341](https://github.com/NousResearch/hermes-agent/issues/157341)
- PR：[#157896](https://github.com/NousResearch/hermes-agent/pull/157896) — **可能相关，尚未合并**
- `state.db` 锁竞争下，单次临时 Gateway WS 错误即可让 restart-safe worker 退出，任务进入“已暂停但 admission 未验证”状态。
- **风险：高**，自动化任务可能静默停止执行。

#### Gateway 保存 terminal cwd 时阻塞事件循环

- Issue：[#158204](https://github.com/NousResearch/hermes-agent/issues/158204)
- PR：[#159114](https://github.com/NousResearch/hermes-agent/pull/159114) — **部分相关，尚未合并**
- 保存工作目录会持有 `SessionStore._lock` 并持久化完整 routing index，可能阻塞 Gateway 事件循环数秒乃至十余秒。

#### Desktop 会话压缩后恢复旧 session

- Issue：[#143767](https://github.com/NousResearch/hermes-agent/issues/143767)
- **暂无明确对应 fix PR**
- 模型切换持续被 `session_superseded` 拒绝，直接影响 Telegram/飞书等消息聊天。

#### Desktop 压缩时重复写入 transcript

- Issue：[#155151](https://github.com/NousResearch/hermes-agent/issues/155151)
- **暂无明确对应 fix PR**
- 相同 `message_uid` 和时间戳被写入两次，造成数据库膨胀、搜索噪声和界面重复显示。

#### Desktop 工具被延迟且无法调用 Preview

- Issue：[#139652](https://github.com/NousResearch/hermes-agent/issues/139652)
- **暂无明确对应 fix PR**
- `tool_search.enabled=auto` 下，`desktop_preview` 仍可能同时被延迟和拒绝，Preview 面板无法驱动。

#### Discord completion watcher 无限重试

- Issue：[#143720](https://github.com/NousResearch/hermes-agent/issues/143720)
- **暂无明确对应 fix PR**
- 每分钟触发一次冲突，持续数小时且无法通过配置关闭。

#### Matrix E2EE 双客户端导致密钥共享不可解密

- Issue：[#141208](https://github.com/NousResearch/hermes-agent/issues/141208)
- **暂无明确对应 fix PR**
- Gateway 后续收到的 megolm key share 可能不可解密。

#### Windows 路径含空格导致更新和 Gateway 身份识别失败

- Issue：[#140831](https://github.com/NousResearch/hermes-agent/issues/140831)
- PR：[#156458](https://github.com/NousResearch/hermes-agent/pull/156458) — **涉及 Windows 终端参数处理，但未证明完全覆盖该 Issue**
- **暂无明确完整 fix PR**

#### Windows Bash 命令参数过长被静默截断

- Issue/PR：[#156458](https://github.com/NousResearch/hermes-agent/pull/156458)
- **已有 fix PR，OPEN**
- 当生成脚本超过 MSYS `bash -c` 参数限制时，命令会失败或被静默截断。

#### Gateway 缓冲 steer 在策略拒绝或压缩重置后丢失

- Issue：[#159085](https://github.com/NousResearch/hermes-agent/issues/159085)
- **暂无明确对应 PR**
- 用户已发送且表面确认的 steer，在 agent 被驱逐时无痕丢失。

#### 多 profile 同名 stdio MCP server 第二个 profile 获得 0 个工具

- Issue：[#140879](https://github.com/NousResearch/hermes-agent/issues/140879)
- **暂无明确对应 PR**
- 第二个 profile 误判服务器“已连接并处于重试冷却期”，导致工具不可用。

#### Desktop Cmd/Ctrl+F 导致窗口重载且无法定位匹配项

- Issue：[#142154](https://github.com/NousResearch/hermes-agent/issues/142154)
- **暂无明确对应 PR**
- 长会话查找时 renderer 重载，随后回到最新消息，目标位置仍无法到达。

#### Desktop 编辑提示后停止运行会丢失草稿

- Issue：[#145872](https://github.com/NousResearch/hermes-agent/issues/145872)
- **暂无明确对应 PR**
- 编辑中的内容在 Stop 后回退为原始提示，影响桌面端主要工作流。

#### 多模态 usage anchor 在 reload 后失效

- Issue：[#159070](https://github.com/NousResearch/hermes-agent/issues/159070)
- **暂无明确对应 PR**
- 图片消息的多段 content 结构会破坏持久化 anchor，新恢复会话在首轮前显示 `0/estimate`。

#### OpenCode Zen/Go 默认辅助模型指向已退役 relay ID

- Issue：[#133181](https://github.com/NousResearch/hermes-agent/issues/133181)
- **暂无明确对应 PR**
- `auto` 模式下可能暂时无害，但一旦 provider 被固定，辅助模型调用即失效。

### P3

#### 插件 OAuth 缺少固定 redirect port

- Issue：[#149642](https://github.com/NousResearch/hermes-agent/issues/149642)
- **暂无明确对应 PR**
- QuickBooks 等要求精确匹配 redirect URI 的 IdP 无法稳定登录，因为监听端口每次变化。

#### Repetition guard 无法关闭或配置

- Issue：[#156989](https://github.com/NousResearch/hermes-agent/issues/156989)
- **暂无明确对应 PR**
- 守卫硬编码开启，阈值不可配置，可能误伤合法重复输出。

#### 测试 fixture 污染 `sys.modules`

- Issue：[#159065](https://github.com/NousResearch/hermes-agent/issues/159065)
- **已关闭**
- 清理 `hermes_cli`/`hermes_state` 模块后未恢复，导致约 130 个无关测试失败；当前状态显示问题已关闭。

#### Kanban dispatcher 从 Hermes Home 导入操作员脚本

- Issue：[#159089](https://github.com/NousResearch/hermes-agent/issues/159089)
- **已关闭**
- 核心代码通过 `sys.path` 和路径猜测加载用户脚本，造成环境污染；问题已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 主动任务与 Cron 能力

- Issue：[#158538](https://github.com/NousResearch/hermes-agent/issues/158538)
- PR：[#157950](https://github.com/NousResearch/hermes-agent/pull/157950)

社区正在系统比较 Hark、dots、Muse 和 Grok Bot 的后台主动执行机制。Hermes 倾向于保留“用户批准的 job + 可见提示词 + 可追踪状态”，并通过插件生命周期钩子扩展后台 memory/skill review。  
**下一版本可能性：中高。** 主题已经进入维护者路线图讨论，且已有插件基础设施 PR 支撑。

### 6.2 Discord 线程自动归档时长可配置

- Issue：[#81136](https://github.com/NousResearch/hermes-agent/issues/81136)

Discord 默认 24 小时自动归档不适合长期线程。建议支持 Discord 允许的 **60、1440、4320、10080 分钟**。  
**下一版本可能性：中。** 实现范围小、需求明确，但尚未见对应 PR。

### 6.3 Desktop 支持删除单条消息或问答交换

- Issue：[#142421](https://github.com/NousResearch/hermes-agent/issues/142421)

用户希望在保留后续会话的前提下删除中间消息或问答对，而不只是 rewind。  
**下一版本可能性：中。** 属于高价值会话管理功能，但涉及历史重写、存储一致性和分支语义，实施复杂度高于 UI 表面需求。

### 6.4 插件 OAuth 固定回调端口

- Issue：[#149642](https://github.com/NousResearch/hermes-agent/issues/149642)

插件 catalog 需要暴露 `redirect_port`，以兼容 QuickBooks 等精确匹配 redirect URI 的 IdP。  
**下一版本可能性：中高。** 是插件生态可用性的直接阻塞项，且改动集中。

### 6.5 插件目录新增 AirPrompter

- PR：[#159113](https://github.com/NousResearch/hermes-agent/pull/159113)

体现 Hermes 正从核心 Agent 能力扩展到 **提示词库、多步骤工作流和托管 MCP 服务**。  
**下一版本可能性：中高。** 若 CI 与目录校验通过，可能随插件目录更新进入后续发布。

### 6.6 对“承诺后续跟进但无人唤醒”的最终回复进行再提示

- PR：[#141778](https://github.com/NousResearch/hermes-agent/pull/141778)

Agent 的 stall guard 将识别“我将在十分钟后检查”“完成后汇报”等无后续执行器支撑的承诺，并触发再提示。  
**下一版本可能性：中。** 能减少虚假的后续承诺，但也需要避免反复重试或破坏正常结束语。

### 6.7 RE2 迁移和静态代码护栏

- PR：[#158718](https://github.com/NousResearch/hermes-agent/pull/158718)

通过 CI 和 pre-commit 阻止不兼容 RE2 模式，并逐步禁止产品代码新增标准库 `re` 导入。  
**下一版本可能性：高。** 属于内部兼容性基础设施，通常会随主分支持续合入，不一定单独形成版本亮点。

### 6.8 Repetition guard 配置化

- Issue：[#156989](https://github.com/NousResearch/hermes-agent/issues/156989)

建议增加 `gateway.repetition_guard.enabled` 和 `HERMES_REPETITION_GUARD`，允许禁用或调整阈值。  
**下一版本可能性：中。** 目前仅有问题描述，没有实现 PR，但属于易落地配置项。

---

## 7. 用户反馈摘要

### 7.1 稳定性优先于新功能

最集中的用户反馈不是缺少能力，而是已有自动化和消息渠道无法可靠停止、重试或恢复：

- Discord completion watcher 无法停止；
- Cron/Kanban worker 静默挂起或暂停；
- Gateway 重启可能卡在 draining；
- Matrix E2EE 因并发 CLI 客户端损坏；
- Desktop 模型切换因旧 session 被拒绝。

这些反馈表明用户正在把 Hermes 用于 **长期运行的个人助理、消息平台接入和自动化任务**，对“后台任务不重复、不丢失、不静默退出”的要求高于一般聊天场景。

### 7.2 Desktop 的会话完整性是主要体验瓶颈

多个高热度问题都集中在 Desktop：

- 压缩后恢复错误 session；
- transcript 重复写入；
- 查找功能触发窗口重载；
- 编辑提示后 Stop 丢失草稿；
- 工具被延迟和拒绝，Preview 不可用；
- 多模态 usage 统计在 reload 后异常。

用户期望是“编辑—运行—停止—恢复”的完整链路可靠，但当前多个环节分别存在状态同步问题。这表明 Desktop 已进入真实高频使用阶段，而不只是外围界面。

### 7.3 Windows 和本地安装仍有显著摩擦

- 用户目录含空格会破坏进程身份识别和更新；
- MSYS Bash 参数限制会截断终端命令；
- Kanban worker 在 Windows 上可静默挂起。

Windows 用户的主要不满不是功能缺失，而是 **安装、升级、命令执行和后台任务在部分环境下无法稳定完成**。

### 7.4 插件生态开始进入“真实集成”阶段

AirPrompter、OAuth redirect port、后台 review 生命周期钩子等需求说明用户希望把 Hermes 连接到：

- 提示词与工作流资产库；
- 企业身份认证系统；
- 自动记忆整理和技能进化流程。

不过 OAuth 回调、共享 MCP 命名和 E2EE 单写者等问题表明插件与多 profile 场景尚未完全成熟。

### 7.5 主动任务机制需要兼顾效率与信任

社区并非简单追求“后台自动干活”，而是要求：

- 后台运行仍对应用户批准的任务；
- 提示词与状态可见；
- 避免宽泛读取和噪声；
- 不制造无法兑现的后续承诺。

因此，未来路线应强调 **可审计、可停止、范围明确**，而不仅是提高自动化频率。

---

## 8. 待处理积压

### 8.1 长期高热度但仍开放的问题

#### Discord completion watcher 无限重试

- [#143720](https://github.com/NousResearch/hermes-agent/issues/143720)
- 自 2026-10-23 起持续更新，今日仍有 16 条评论。
- 建议：明确指派维护者，优先补齐 attempt cap、配置关闭和退避逻辑。

#### Desktop 压缩后恢复旧 session

- [#143767](https://github.com/NousResearch/hermes-agent/issues/143767)
- 自 2026-10-23 起持续更新，今日 13 条评论。
- 建议：与 session ownership、压缩 receipt 和 provider 切换修复一起处理。

#### Windows 含空格路径导致更新失败

- [#140831](https://github.com/NousResearch/hermes-agent/issues/140831)
- 自 2026-10-18 起持续更新，今日 7 条评论。
- 建议：补充带空格路径回归测试，并检查 CLI、Gateway、updater 是否共用同一套进程参数解析。

#### Matrix E2EE 双客户端冲突

- [#141208](https://github.com/NousResearch/hermes-agent/issues/141208)
- 自 2026-10-18 起持续更新，今日 7 条评论。
- 建议：明确单进程/单写者边界，并提供已有损坏 crypto store 的恢复指引。

### 8.2 高影响但缺少明确 fix PR 的问题

- Gateway 重启卡 draining：[#159067](https://github.com/NousResearch/hermes-agent/issues/159067)
- Windows Kanban worker 静默挂起：[#148389](https://github.com/NousResearch/hermes-agent/issues/148389)
- Cron 单次 WS 故障后任务暂停：[#157341](https://github.com/NousResearch/hermes-agent/issues/157341)
- Gateway terminal cwd 保存阻塞事件循环：[#158204](https://github.com/NousResearch/hermes-agent/issues/158204)
- 多 profile 同名 MCP server 工具不可用：[#140879](https://github.com/NousResearch/hermes-agent/issues/140879)
- 缓冲 steer 丢失：[#159085](https://github.com/NousResearch/hermes-agent/issues/159085)
- Desktop 压缩重复 transcript：[#155151](https://github.com/NousResearch/hermes-agent/issues/155151)
- Desktop Preview 工具不可达：[#139652](https://github.com/NousResearch/hermes-agent/issues/139652)
- 插件 OAuth redirect port：[#149642](https://github.com/NousResearch/hermes-agent/issues/149642)
- 多模态 usage anchor reload 失效：[#159070](https://github.com/NousResearch/hermes-agent/issues/159070)

### 8.3 长期开放、可能需要重新分诊的 PR

以下 PR 创建时间较早且截至今日仍为 OPEN，建议维护者确认是否仍有用户需求、是否已有替代实现或应关闭：

- PR [#141778](https://github.com/NousResearch/hermes-agent/pull/141778)：Agent 对无法兑现的后续承诺进行再提示。
- PR [#145477](https://github.com/NousResearch/hermes-agent/pull/145477)：修复 manifest probe 与 symlink install 的测试误报。
- PR [#148737](https://github.com/NousResearch/hermes-agent/pull/148737)：避免全局 resume lock 等待单会话 history lock。
- PR [#154467](https://github.com/NousResearch/hermes-agent/pull/154467)：补全俄语 Desktop 本地化。
- PR [#154645](https://github.com/NousResearch/hermes-agent/pull/154645)：将硬编码 Desktop 文案纳入 i18n catalog。
- PR [#155183](https://github.com/NousResearch/hermes-agent/pull/155183)：移动端选择会话后关闭侧边抽屉。
- PR [#156458](https://github.com/NousResearch/hermes-agent/pull/156458)：修复 Windows Bash 命令截断。
- PR [#157896](https://github.com/NousResearch/hermes-agent/pull/157896)：修复 Kanban receipt admission 活性问题。
- PR [#158718](https://github.com/NousResearch/hermes-agent/pull/158718)：RE2 CI/pre-commit 护栏。

---

## 项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | 高 | 24 小时内 100 条 Issue/PR 更新 |
| 修复吞吐 | 中 | 有 9 条 PR/Issue 关闭或合并，但仍有 41 个开放事项 |
| 核心稳定性 | 中等偏低 | Gateway、Cron、Kanban、Desktop 会话均有高影响缺陷 |
| 跨平台成熟度 | 中等偏低 | Windows 更新、终端命令和 worker 启动问题突出 |
| 插件生态 | 增长中 | 新增 AirPrompter、生命周期钩子，但 OAuth/MCP 集成仍有阻塞 |
| 性能与架构 | 正在改善 | 路由增量写入、SSH 共享连接、resume lock 等 PR 针对性较强 |
| 发版节奏 | 偏慢 | 今日无新版本，大量修复尚未交付到稳定版本 |

**综合判断：** Hermes Agent 当前处于高强度迭代期，功能扩展活跃、性能和稳定性投入同步增加；但核心运行链路仍存在多处跨 Gateway、Desktop、插件和 Windows 环境的系统性问题。短期项目健康度取决于这些 P1/P2 缺陷能否被合并、回归测试并纳入正式版本，而不是继续增加新功能数量。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-11-23**  
**统计范围：过去 24 小时**  
**仓库：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

## 1. 今日速览

过去 24 小时 OpenHuman **没有新增或活跃 Issue，也没有 PR 被合并或关闭**；当前共有 **3 个待合并 PR**，均为 2026-11-22 创建并更新。  
项目开发主要集中在 **定时任务（Cron）能力增强、Cron 配置编辑正确性和安装脚本安全性**三个方向。  
其中，PR #8769 涉及子智能体执行权限边界，若合并将扩展 Cron 子任务的可执行能力；PR #8768 和 #8767 分别修复 Cron 配置丢失与 `--dry-run` 意外创建目录的问题。  
今日没有版本发布，也没有可量化的社区讨论数据；从短期活跃度看，项目保持稳定推进，但 PR 尚未进入合并阶段，整体健康度评为**中等偏正面**。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本更新内容、破坏性变更或迁移注意事项。

---

## 3. 项目进展

### 3.1 扩展 Cron 子智能体的 Acting 能力

- **PR：[#8769 — feat(cron): let an opted-in, sandboxed child of a scheduled-actions run act](https://github.com/tinyhumansai/openhuman/pull/8769)**
- **作者：** @senamakel
- **状态：** Open，待合并
- **标签方向：** `rust-core`、`agent`

该 PR 允许定时任务直接派生的子智能体使用“acting tools”，但设置了较严格的授权边界：

- 子智能体自身必须显式选择加入；
- 执行范围必须保持在根任务的 workspace 内；
- 每次 spawn 时由统一函数决定是否授予权限；
- 其他子智能体继续保持只读；
- 即使子智能体被标记为可执行，**深度 2 及以下仍保持只读**。

**项目意义：**  
这是对定时任务自动化能力的实质扩展，可支持经过授权的定时工作流执行操作，而不仅限于读取信息或生成建议。同时，该 PR 强调权限按任务、按层级隔离，有助于降低自动化代理误操作和权限扩散风险。

---

### 3.2 修复 Settings 编辑 Cron Job 时覆盖既有配置的问题

- **PR：[#8768 — fix(cron): keep routing, zone and active hours when editing a job in Settings](https://github.com/tinyhumansai/openhuman/pull/8768)**
- **作者：** @thejesh23
- **状态：** Open，待合并

该 PR 修复从 **Settings → Cron Jobs** 编辑任务时可能改写表单无法表达字段的问题：

- 保留任务原有的时区 `tz`；
- 保留 `active_hours`；
- 仅在用户实际修改对应选择项时，才提交 `session_target` 和 `delivery`；
- 为 `CoreCronSch...` 等相关类型补充配置支持。

**项目意义：**  
该修复直接降低 Cron 任务配置被意外重置的风险，尤其适用于依赖特定时区、活跃时段、会话目标或投递方式的自动化流程。

---

### 3.3 修复安装脚本 `--dry-run` 在主目录创建目录的问题

- **PR：[#8767 — [bug] fix(installer): keep --dry-run from creating directories under $HOME](https://github.com/tinyhumansai/openhuman/pull/8767)**
- **作者：** @thejesh23
- **状态：** Open，待合并

该 PR 修复 `scripts/install.sh --dry-run` 仍会在 `$HOME` 下创建目录的问题：

- macOS 安装路径中的 `mkdir -p ~/Applications` 增加 dry-run 保护；
- Linux AppImage 路径中的 `~/.local/bin` 和 `~/.local/share/applications` 创建操作也增加保护；
- `scripts/test_install.sh` 增加相应测试覆盖。

**项目意义：**  
Dry-run 行为更符合用户对“仅预览、不修改系统”的合理预期，可减少测试或检查安装脚本时产生的非预期副作用。

---

### 3.4 今日整体推进量

过去 24 小时：

- **新增/活跃 Issues：0**
- **待合并 PR：3**
- **已合并/关闭 PR：0**
- **新版本：0**

今日主要完成了 **1 项代理权限能力增强、1 项配置数据完整性修复、1 项安装器安全修复**的开发活动。不过三项 PR 均尚未合并，因此暂不能计入已稳定交付的进度。

---

## 4. 社区热点

今日所有 PR 均为新建或更新，尚无公开评论、点赞或评分数据，因此无法基于互动量确定“最热门”讨论。依据技术影响范围，可将以下 PR 作为当前重点关注项：

1. **[PR #8769 — 允许经过授权的 Cron 子智能体执行 acting tools](https://github.com/tinyhumansai/openhuman/pull/8769)**  
   - 潜在诉求：让定时代理不仅能分析和通知，还能在隔离环境中完成实际操作。
   - 社区关注点预计集中在授权粒度、workspace 限制、深度限制和审计能力。
   - 由于当前没有评论和反应数据，热度属于**技术影响推断**，而非实际互动排名。

2. **[PR #8768 — 修复 Settings 编辑 Cron Job 时丢失配置](https://github.com/tinyhumansai/openhuman/pull/8768)**  
   - 潜在诉求：避免用户编辑一个字段时意外影响时区、活跃时间、会话路由和投递设置。
   - 这类修复通常直接对应已有工作流的数据保留和可预测性需求。

3. **[PR #8767 — 修复安装器 dry-run 创建 `$HOME` 目录](https://github.com/tinyhumansai/openhuman/pull/8767)**  
   - 潜在诉求：确保预览模式真正无副作用，适用于自动化检查、CI 验证和谨慎排障。
   - 当前评论与反应均为 0，尚无社区反馈信号。

---

## 5. Bug 与稳定性

### 严重程度：中等

#### 安装器 dry-run 仍修改用户主目录

- **相关 PR：[#8767](https://github.com/tinyhumansai/openhuman/pull/8767)**
- **状态：** 已有 fix PR，待合并
- **影响：** `scripts/install.sh --dry-run` 可能在 macOS 的 `~/Applications`、Linux 的 `~/.local/bin` 和 `~/.local/share/applications` 下创建目录。
- **风险：** 虽通常不会覆盖已有文件，但会破坏 dry-run 的无副作用承诺，可能干扰 CI、权限受限环境和自动化检查。
- **处理建议：** 优先合并并确认测试覆盖 macOS 与 Linux 两条安装路径。

### 严重程度：中低

#### 编辑 Cron Job 会丢失或覆盖未展示的配置

- **相关 PR：[#8768](https://github.com/tinyhumansai/openhuman/pull/8768)**
- **状态：** 已有 fix PR，待合并
- **影响：** 编辑任务时可能改写 `tz`、`active_hours`、`session_target` 或 `delivery` 等字段。
- **风险：** 可能导致任务在错误时区运行、活跃时段失效、路由变化或投递异常。
- **处理建议：** 合并前确认表单序列化逻辑能够区分“未修改”和“显式重置”，并验证旧数据兼容性。

### 严重程度：需重点审查

#### Cron 子智能体 acting 权限扩展

- **相关 PR：[#8769](https://github.com/tinyhumansai/openhuman/pull/8769)**
- **状态：** 功能 PR，尚无已知 Bug
- **风险：** 新增代理执行能力会扩大权限面，需要重点验证授权判断、workspace 约束、深度限制以及失败时的默认行为。
- **建议：** 在合并前补充跨 spawn、嵌套调用和越权尝试的测试，并确保拒绝路径默认保持只读。

---

## 6. 功能请求与路线图信号

今日没有新增 Issue 或明确的功能请求 Issue，因此无法确认用户原始需求。可从待合并 PR 中观察到以下路线图信号：

### 6.1 定时任务将从“只读分析”向“受控执行”演进

- **信号来源：[PR #8769](https://github.com/tinyhumansai/openhuman/pull/8769)**
- 计划特征：
  - 允许明确 opt-in 的 Cron 直接子任务使用 acting tools；
  - 以 workspace 沙箱限制操作范围；
  - 保持深层子代理只读；
  - 通过单点函数按 spawn 决策授权。

**下一版本可能性：较高。**  
该变更已经形成具体实现，并带有明确的安全边界；若测试完善，可能进入近期版本。

### 6.2 Cron 配置管理将更强调字段保真与显式修改

- **信号来源：[PR #8768](https://github.com/tinyhumansai/openhuman/pull/8768)**
- 计划特征：
  - 编辑表单不覆盖无法展示的字段；
  - 保留时区和活跃时段；
  - `session_target`、`delivery` 仅在用户实际变更时更新。

**下一版本可能性：高。**  
这是针对现有设置编辑流程的缺陷修复，范围较集中，合并风险相对可控。

### 6.3 安装流程继续强化可预测性和无副作用 dry-run

- **信号来源：[PR #8767](https://github.com/tinyhumansai/openhuman/pull/8767)**
- 计划特征：
  - dry-run 不创建任何用户目录；
  - 为关键系统路径补充回归测试。

**下一版本可能性：高。**  
属于安装器行为一致性修复，适合随下一次安装脚本更新快速交付。

---

## 7. 用户反馈摘要

今日没有 Issue 评论，也没有 PR 评论及点赞数据，因此暂无可提炼的真实用户反馈。

基于变更内容，可以归纳出以下**间接反映的使用痛点**，但不应视为已确认的用户反馈：

- Cron 任务需要更强执行能力，以覆盖持续运行、周期性维护和自动化操作场景。
- 用户在 Settings 编辑任务时，需要系统保留未展示但重要的调度与投递配置。
- 安装器的 dry-run 模式应严格不修改文件系统，以满足安全预览、CI 验证和故障排查需求。

目前无法评估用户满意度，也没有足够信号判断这些改动是否完全符合真实使用场景。

---

## 8. 待处理积压

过去 24 小时没有 Issue 更新，也没有 PR 被合并或关闭；数据中未提供历史长期未响应条目，因此无法列出具体的长期积压项目。

但以下 **3 个当前待处理 PR** 应由维护者优先审查和合并：

1. **[PR #8767 — 修复安装器 dry-run 创建主目录](https://github.com/tinyhumansai/openhuman/pull/8767)**  
   - 建议优先级：高  
   - 原因：范围小、用户影响明确，可快速消除安装器的非预期副作用。

2. **[PR #8768 — 修复 Settings 编辑 Cron Job 时配置丢失](https://github.com/tinyhumansai/openhuman/pull/8768)**  
   - 建议优先级：高  
   - 原因：涉及已有自动化任务的运行时段、路由和投递正确性，可能影响实际业务工作流。

3. **[PR #8769 — 扩展 Cron 子智能体 acting 权限](https://github.com/tinyhumansai/openhuman/pull/8769)**  
   - 建议优先级：中高  
   - 原因：功能价值较高，但涉及代理权限与沙箱边界，应在充分测试和审查后合并。

---

**综合健康度：中等偏正面。**  
今日开发方向聚焦且具有明确生产价值，尤其是 Cron 配置保真和 dry-run 安全性修复有望改善稳定性；代理 acting 权限扩展则代表重要能力推进。当前主要风险是三项 PR 均处于待合并状态，且缺少社区讨论、测试结果和版本发布信息，尚无法确认实际交付与用户采用情况。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
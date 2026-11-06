# OpenClaw 生态日报 2026-11-06

> Issues: 491 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-06 05:56 UTC

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

**统计日期：2026-11-06**  
**数据范围：过去 24 小时**  
**仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

> 活跃度说明：过去 24 小时共有 **491 条 Issue 更新**（其中新开/活跃 239、关闭 252）和 **500 条 PR 更新**（待合并 330、已合并/关闭 170），另发布 **1 个版本**。数据量大、吞吐高，但大量更新仍集中在既有故障复现、维护者审查和兼容性修复上，当前健康度可评估为 **高活跃、中等健康、稳定性风险偏高**。

---

## 1. 今日速览

- OpenClaw 过去 24 小时更新了 **491 条 Issue、500 条 PR**，并发布稳定版 **v2026.11.1**，整体开发吞吐很高。
- 新版本重点改善 macOS 配置保存、Tailscale 暴露关闭后的 Gateway 认证，以及 Telegram、Discord、Webhook 通道回复可靠性。
- 当前主要风险仍集中在 **Gateway 生命周期、子进程/MCP 回收、SQLite worker、Doctor 修复流程和 Windows/macOS 服务管理**，其中多项被标记为 P0/P1。
- 社区呈现“**高提交量、高问题量**”特征：今日关闭的 Issue/PR 数量也接近更新量的一半，但不少高优先级问题仍缺少可用修复或明确合并路径。
- 综合判断：项目迭代活跃、功能推进明显，但生产环境可靠性债务较重；下一阶段应优先收敛 Gateway、Doctor、SQLite 和跨平台服务管理问题。

---

## 2. 版本发布

### [v2026.11.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1)

本次是过去 24 小时唯一的新版本，主要亮点如下。

#### 更新内容

- **macOS 配置保存更安全**
  - 配置保存失败时不再覆盖已有 secrets。
  - 关闭 Tailscale exposure 后，Gateway authentication 仍然有效。
  - 关联修复：[Issue #187600](https://github.com/openclaw/openclaw/issues/187600)、[Issue #187597](https://github.com/openclaw/openclaw/issues/187597)。

- **通道回复可靠性增强**
  - 改进 Telegram、Discord 和 webhook conversation 的回复处理。
  - 目标是减少回复丢失、状态不同步或通道侧异常导致的任务中断。

#### 破坏性变更

- 已提供的信息中没有明确标注新的 breaking changes。
- 涉及 Gateway 认证、Tailscale 暴露和 secrets 保存，属于安全与生命周期语义修复；升级后建议重新验证：
  - Tailscale 开关与认证组合；
  - macOS 密钥持久化；
  - Telegram、Discord、Webhook 的发送、回复和重试链路。

#### 迁移注意事项

1. **升级前备份配置和数据库**，尤其是包含 secrets 的配置及大规模 session 数据。
2. 若使用了 Tailscale exposure，升级后执行一次“开启 → 关闭 → 重启 Gateway”测试。
3. 对依赖 Telegram、Discord、Webhook 的关键自动化，建议先在测试频道验证完整 turn。
4. 不建议将本版本视为对现有 P0/P1 稳定性问题的全面修复；Gateway 阻塞、Doctor 长时间挂起、SQLite worker OOM 等问题仍有独立报告。

---

## 3. 项目进展

过去 24 小时 PR 更新达 **500 条**，其中 **170 条已合并或关闭**。从可见的重要 PR 判断，项目主要推进了以下方向。

### 已合并或关闭的重要修复

- [PR #193973](https://github.com/openclaw/openclaw/pull/193973) — 修复 Markdown 文本分块限制为 `NaN` 时整条出站消息静默消失的问题。  
  这类修复直接影响 Telegram、Discord、Slack 等所有复用消息分块逻辑的通道，避免配置异常导致整条回复未送达。

- [PR #193976](https://github.com/openclaw/openclaw/pull/193976) — 保留结构化草稿校验状态，避免相同 Gateway config receipt 触发重复校验和性能浪费。

- [PR #193983](https://github.com/openclaw/openclaw/pull/193983) — 修复提醒已成功创建但 Agent 仍回复“本轮没有安排提醒”的误判。

- [PR #193981](https://github.com/openclaw/openclaw/pull/193981) — Windows 环境下通过安装根目录解析系统编码探测程序，减少 PATH 不完整时的启动失败。

- [PR #193977](https://github.com/openclaw/openclaw/pull/193977) — 修复插件卸载后仍被 home-relative load path 发现、残留为 disabled/record-missing 的问题。

- [PR #193975](https://github.com/openclaw/openclaw/pull/193975) — 将 `infer web` 的 provider 标识规范化为小写，修复 `Brave`、`Firecrawl` 等合法配置无法调用的问题。

- [PR #193970](https://github.com/openclaw/openclaw/pull/193970) — 改进更新流程中的 SQLite header probe 与候选版本诊断，降低更新失败时提示过于笼统的问题。

- [PR #192937](https://github.com/openclaw/openclaw/pull/192937) / [PR #192938](https://github.com/openclaw/openclaw/pull/192938) — 强化 installed-update 测试，覆盖子进程生命周期、SQLite 访问和 helper 依赖校验。

### 正在推进的重点能力

- [PR #193982](https://github.com/openclaw/openclaw/pull/193982)：通过 OpenClaw ID tunnel 连接无头节点，目标是不依赖 LAN、Tailscale、SSH 或 Gateway bearer token。
- [PR #192345](https://github.com/openclaw/openclaw/pull/192345)：加入 tunnel transport、OpenClaw ID 登录和 relayed-device Gateway authentication。
- [PR #193980](https://github.com/openclaw/openclaw/pull/193980)：定义 accountless node enrollment 协议。
- [PR #193952](https://github.com/openclaw/openclaw/pull/193952)：允许自定义模型供应商名称和图标，改善 Control UI 品牌呈现。
- [PR #187836](https://github.com/openclaw/openclaw/pull/187836)：为共享 Gateway 增加 creator-only 和 named-audience session confidentiality。
- [PR #177227](https://github.com/openclaw/openclaw/pull/177227)：让 Codex isolated completions 使用 native runtime，并保留模型、凭据所有者、schema 和 inference admission。

### 整体前进程度

项目今日在消息可靠性、插件管理、Windows 兼容性、Doctor/更新工具链和节点远程连接方面都有实质推进。不过，大量 PR 仍处于 **needs proof、waiting on author、security review** 或“尚未合并”状态，实际用户受益仍取决于维护者审查和 CI 验证速度。

---

## 4. 社区热点

### 高讨论度 Issues

1. [Issue #160959](https://github.com/openclaw/openclaw/issues/160959) — **75 条评论**  
   Gateway 在捕获大型外部插件时阻塞数分钟，自 2026.9.6 回归。  
   **核心诉求：** 插件准备、依赖扫描和 runtime republish 必须移出事件循环，并建立大型插件性能基线。

2. [Issue #177656](https://github.com/openclaw/openclaw/issues/177656) — **29 条评论**  
   Native host exec 返回 shared-state integrity-admission error，但没有 child result。  
   **核心诉求：** 修复服务子进程身份、完整性 admission 和结果回传的一致性，避免“无法证明子进程效果”的静默失败。

3. [Issue #170956](https://github.com/openclaw/openclaw/issues/170956) — **29 条评论**  
   Windows 启动慢、插件关闭不干净、`schtasks` 权限错误导致重启和更新不可靠。  
   **核心诉求：** 提升 Windows 托管服务的安装、升级、停止和恢复能力。

4. [Issue #178359](https://github.com/openclaw/openclaw/issues/178359) — **25 条评论**  
   `doctor --fix --non-interactive` 在 macOS 上空闲 15 分钟以上且无输出。  
   **核心诉求：** Doctor 必须有进度、超时、取消机制，并确保最终执行 agent DB repair。

5. [Issue #166634](https://github.com/openclaw/openclaw/issues/166634) — **24 条评论**  
   异常退出后 late reclamation checkpoint 失败，Agent 持续不可用。  
   **核心诉求：** 崩溃恢复应具备事务一致性和自动修复路径，避免会话永久不可用。

6. [Issue #191944](https://github.com/openclaw/openclaw/issues/191944) — **19 条评论**  
   macOS 上 `gateway stop` 和 `gateway stop --force` 均因进程祖先检查失败而无法停止。  
   **核心诉求：** 服务进程树检查需要兼容 macOS 的权限和进程模型，并提供可靠降级方案。

7. [Issue #161921](https://github.com/openclaw/openclaw/issues/161921) — **18 条评论**  
   `doctor --fix` 与 `plugins update` 互相阻塞，插件停留在旧版本。  
   **核心诉求：** 修复、迁移和插件更新不能形成循环依赖，应提供统一恢复流程。

8. [Issue #40001](https://github.com/openclaw/openclaw/issues/40001) — **17 条评论，1 个赞**  
   Write 工具缺少 append 模式，隔离 cron session 可能覆盖共享文件。  
   **核心诉求：** 增加原子 append、文件锁或乐观并发控制，防止共享记忆文件被静默覆盖。

9. [Issue #155563](https://github.com/openclaw/openclaw/issues/155563) — **15 条评论**  
   Agent turn 成功后仍残留 service-child relay、anchor 和 MCP groups。  
   **核心诉求：** 生命周期清理需要可验证，不能只依赖局部修复。

10. [Issue #166017](https://github.com/openclaw/openclaw/issues/166017) — **15 条评论**  
    未显式设置 `mcp.sessionIdleTtlMs` 时，默认 10 分钟 TTL 未生效，MCP runtime 最终占满 256 个 child 上限。  
    **核心诉求：** 默认配置必须真正生效，并为资源上限提供告警和降载。

### 重点 PR 热点

- [PR #192345](https://github.com/openclaw/openclaw/pull/192345) / [PR #193982](https://github.com/openclaw/openclaw/pull/193982) / [PR #193980](https://github.com/openclaw/openclaw/pull/193980)：OpenClaw ID 隧道和无头节点接入是今日最明显的路线型功能集群。
- [PR #187836](https://github.com/openclaw/openclaw/pull/187836)：共享 Gateway 的会话保密性，直接回应团队、多租户和企业部署需求。
- [PR #177227](https://github.com/openclaw/openclaw/pull/177227)：Codex native runtime 接入，涉及模型路由、凭据边界与 admission，兼容和安全风险均较高。
- [PR #191517](https://github.com/openclaw/openclaw/pull/191517)：iOS/native chat 媒体播放恢复，仍需原生 CI 和验收证明。
- [PR #193952](https://github.com/openclaw/openclaw/pull/193952)：自定义模型供应商展示，属于 Control UI 的体验型改进。

### 社区诉求归纳

- **稳定性优先于继续扩展功能。** 多个高热度 Issue 都指向 Gateway、Doctor、SQLite 和子进程生命周期。
- **企业用户需要更清晰的权限和会话边界。** OpenClaw ID、节点 enrollment、session confidentiality 是同一趋势的不同组成部分。
- **配置、迁移和更新需要“可恢复”。** 多个用户被循环依赖或不可逆迁移卡住。
- **跨平台一致性仍不足。** Windows 服务管理、macOS 停止/Doctor、Linux 子进程 admission 各有独立故障面。

---

## 5. Bug 与稳定性

### P0 / 严重

| 问题 | 现状与影响 | Fix PR |
|---|---|---|
| [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)：大型插件导致 Gateway 阻塞数分钟 | P0、crash-loop 风险、2026.9.6 回归；影响启动和 runtime republish | **暂无明确 fix PR**，标记为 no-new-fix-pr / needs-maintainer-review |
| [Issue #40001](https://github.com/openclaw/openclaw/issues/40001)：Write 无 append 导致共享文件被覆盖 | P0、潜在数据丢失；多个 cron session 可破坏共享 memory 文件 | **暂无明确 fix PR**，需要产品决策 |
| [Issue #161921](https://github.com/openclaw/openclaw/issues/161921)：Doctor 与插件更新互相依赖 | P0、release blocker；升级后插件可能卡在旧版本 | **暂无明确 fix PR** |
| [Issue #70903](https://github.com/openclaw/openclaw/issues/70903)：Provider cooldown 持久化阻断已恢复账户 | P0；用户充值或账单恢复后仍可能数小时无法使用 | **暂无明确 fix PR** |
| [Issue #142821](https://github.com/openclaw/openclaw/issues/142821)：默认 transcript redaction 污染重放上下文 | P0，标记数据丢失与安全风险；脱敏结果可能传播到命令、文件和回复 | **有 linked PR，但尚未确认合入/完全修复** |
| [Issue #158912](https://github.com/openclaw/openclaw/issues/158912)：`MEMORY.md` 未在 bootstrap 注入 | P0、release blocker；行为与文档不一致，影响长期记忆 | **暂无明确 fix PR** |
| [Issue #124306](https://github.com/openclaw/openclaw/issues/124306)：执行审批未标注挂载点风险 | P2 标签但影响数据丢失；审批卡未提示 `rm -rf` 目标是 mount point | **暂无明确 fix PR** |

### P1 / 高

- [Issue #177656](https://github.com/openclaw/openclaw/issues/177656)：Native host exec integrity-admission 失败且无 child result。  
  **Fix：** 暂无明确修复 PR。

- [Issue #170956](https://github.com/openclaw/openclaw/issues/170956)：Windows 启动、插件关闭、`schtasks` 权限和更新重启不可靠。  
  **Fix：** 暂无统一 fix PR；需协调服务管理、权限和插件生命周期修复。

- [Issue #178359](https://github.com/openclaw/openclaw/issues/178359)：Doctor 修复流程静默挂起超过 15 分钟。  
  **Fix：** 暂无明确 fix PR。

- [Issue #166634](https://github.com/openclaw/openclaw/issues/166634)：崩溃恢复后 Agent 永久不可用。  
  **Fix：** 暂无明确 fix PR。

- [Issue #155563](https://github.com/openclaw/openclaw/issues/155563)：service-child/MCP group 成功 turn 后仍残留。  
  **Fix：** 暂无明确 fix PR。

- [Issue #166017](https://github.com/openclaw/openclaw/issues/166017)：MCP session 默认 TTL 不生效，最终耗尽 child broker。  
  **Fix：** 暂无明确 fix PR。

- [Issue #191847](https://github.com/openclaw/openclaw/issues/191847)：大型 session 使 512 MB SQLite worker 持续 OOM，turn 全部报 `admission is closed`。  
  **Fix：** 暂无明确 fix PR。

- [Issue #182647](https://github.com/openclaw/openclaw/issues/182647)：Cloud worker turn 在 inference 前失败，提示缺少 worker preparation。  
  **Fix：** 已标记 `fix-shape-clear`、`queueable-fix`，但**尚未显示已关联具体 PR**。

- [Issue #162637](https://github.com/openclaw/openclaw/issues/162637)：Native Codex completion handoff 失败。  
  **Fix：** 暂无明确 fix PR。

### P2 / 中等但影响范围广

- [Issue #134993](https://github.com/openclaw/openclaw/issues/134993)：Gateway 文件系统发现进入 busy loop，占满单核。
- [Issue #141474](https://github.com/openclaw/openclaw/issues/141474)：collector child 调用 `sessions_yield` 时父 Agent 永久等待；相关修复据描述已进入 prerelease，但尚未进入稳定版。
- [Issue #177094](https://github.com/openclaw/openclaw/issues/177094)：Control UI 重载后 system-notice delivery mirror 覆盖最后回答的展示位置。
- [Issue #118793](https://github.com/openclaw/openclaw/issues/118793)：Claude CLI session limit 未触发模型 fallback chain。
- [Issue #172969](https://github.com/openclaw/openclaw/issues/172969)：CLI backend 缺少 `modelProvider` 时静默丢弃，最终报无效 URL。
- [Issue #166526](https://github.com/openclaw/openclaw/issues/166526)：大型状态下幂等 Doctor 耗时约 473 秒，超过 60 秒预算。
- [Issue #166964](https://github.com/openclaw/openclaw/issues/166964)：请求方权限撤销后，subagent completion 永久无法投递。
- [Issue #182891](https://github.com/openclaw/openclaw/issues/182891)：Prompt cache 每次请求均无法复用。
- [Issue #112638](https://github.com/openclaw/openclaw/issues/112638)：`session.maintenance` 对 thread/channel entry 不执行回收，存储上限可被绕过。
- [Issue #147620](https://github.com/openclaw/openclaw/issues/147620)：Secret egress proxy 无法替换 HTTP Basic credentials 中的 sentinel，导致持续 401。
- [Issue #142606](https://github.com/openclaw/openclaw/issues/142606)：Native app 中 dashboard HTML 外链静默失效。

### 已关闭的重要稳定性问题

- [Issue #185656](https://github.com/openclaw/openclaw/issues/185656)：大型 zstd transcript archive 超过 Node 字符串限制，阻塞更新。该问题已关闭，说明相关迁移路径已有处理。
- [Issue #171122](https://github.com/openclaw/openclaw/issues/171122)：update-runtime retention 在 PID 1 无法分类时中止进程普查，已关闭。
- [Issue #143274](https://github.com/openclaw/openclaw/issues/143274)：rate-limit `Retry-After` 导致 auth-profile rotation 失效，已关闭。
- [Issue #140129](https://github.com/openclaw/openclaw/issues/140129)：Anthropic 长会话 prompt cache 固定问题，已关闭。
- [Issue #148033](https://github.com/openclaw/openclaw/issues/148033)：recall 路径缺少 `senderId`，已关闭。
- [Issue #149806](https://github.com/openclaw/openclaw/pull/149806)：`run_stalled` takeover 缺少原因和日志，已关闭。
- [Issue #146124](https://github.com/openclaw/openclaw/issues/146124)：Control UI heartbeat session 绕过过滤，已关闭。
- [Issue #135117](https://github.com/openclaw/openclaw/issues/135117)：heartbeat 将异步结果错误重放到 Discord 通道，已关闭。
- [Issue #143784](https://github.com/openclaw/openclaw/issues/143784)：`file_fetch` 强制内联图片导致 `mediaId → file_write` 路径不可用，已关闭。

---

## 6. 功能请求与路线图信号

### 6.1 OpenClaw ID 隧道与无头节点

相关 PR：

- [PR #192345](https://github.com/openclaw/openclaw/pull/192345)
- [PR #193982](https://github.com/openclaw/openclaw/pull/193982)
- [PR #193980](https://github.com/openclaw/openclaw/pull/193980)

这是今天最明确的基础设施路线信号：让无头节点通过 OpenClaw ID 隧道访问 Gateway，摆脱 LAN、Tailscale、SSH 和静态 bearer token 的限制。  
**下一版本可能性：高。** 三个关联 PR 已形成协议、隧道和节点接入的完整雏形，但涉及认证和安全边界，预计仍需多轮验证。

### 6.2 共享 Gateway 的会话保密性

- [PR #187836](https://github.com/openclaw/openclaw/pull/187836)

需求包括 creator-only、指定 audience 和来源会话隔离，回应团队共享 Gateway 下的隐私泄漏风险。  
**下一版本可能性：中高。** 功能价值明确，但安全审查与兼容性要求较高，可能先以可选功能进入稳定版。

### 6.3 自定义模型供应商展示

- [PR #193952](https://github.com/openclaw/openclaw/pull/193952)

允许自定义 provider 名称和图标，同时保持路由 ID 不变。  
**下一版本可能性：高。** 范围集中在 Control UI，风险低于隧道和会话权限功能，适合快速合入。

### 6.4 Codex native runtime

- [PR #177227](https://github.com/openclaw/openclaw/pull/177227)

将 Codex isolated completion 接入 native runtime。  
**下一版本可能性：中。** 功能需求明确，但涉及兼容性和安全边界，当前仍为 needs proof。

### 6.5 Feishu 进度流式输出

- [Issue #131457](https://github.com/openclaw/openclaw/issues/131457)

希望 Feishu 支持与其他通道一致的 `streaming.progress` 模式，显示工具调用、推理和 commentary 更新。  
**下一版本可能性：中。** 属于通道一致性补齐，技术路径清晰，但目前主要停留在功能 Issue。

### 6.6 Control UI 历史会话浏览与分叉

- [Issue #158800](https://github.com/openclaw/openclaw/issues/158800)

用户希望在 `/new` 或 `/reset` 后查看并 fork 旧的 channel-chat segment。  
**下一版本可能性：中低。** 与会话管理方向一致，但需要 UI、历史存储和权限边界共同支持。

### 6.7 Write append 与共享文件安全

- [Issue #40001](https://github.com/openclaw/openclaw/issues/40001)

社区明确提出 append 模式需求；当前会覆盖共享文件。  
**下一版本可能性：高。** 数据丢失风险高，且可通过向后兼容的 append 参数解决。建议作为近期版本重点，但需要处理锁、原子写入和跨进程冲突。

### 6.8 本地化模型执行与 CLI 体验

- [Issue #140244](https://github.com/openclaw/openclaw/issues/140244)：为 `openclaw infer model run` 增加 `--prompt-file`。
- [Issue #172969](https://github.com/openclaw/openclaw/issues/172969)：CLI backend 注册应提供更明确的 provider/model 校验。
- [PR #193975](https://github.com/openclaw/openclaw/pull/193975)：provider 参数大小写规范化。

**下一版本可能性：高到中。** 这类改动范围小、用户收益直接，尤其适合近期稳定版或 patch release。

---

## 7. 用户反馈摘要

### 主要真实痛点

- **升级不能成为“修好”的保证。** 用户从 2026.9.x、2026.10.x 升级后仍遇到插件更新循环、Doctor 挂起、SQLite OOM 或 session 不可用，说明升级路径和迁移路径尚未形成一致体验。
  - [Issue #161921](https://github.com/openclaw/openclaw/issues/161921)
  - [Issue #166634](https://github.com/openclaw/openclaw/issues/166634)
  - [Issue #191847](https://github.com/openclaw/openclaw/issues/191847)

- **诊断工具有关但不可操作。** Doctor 长时间无输出、报错没有原因码、同一错误覆盖多个调用点，使用者无法判断是会话变化、权限、迁移还是并发冲突。
  - [Issue #178359](https://github.com/openclaw/openclaw/issues/178359)
  - [Issue #127195](https://github.com/openclaw/openclaw/issues/127195)

- **自动化的“静默错误”特别伤害信任。** 回复整条消失、写工具覆盖文件、subagent 完成结果永久丢失，都可能表现为“任务没发生”，但用户并未主动请求错误。
  - [PR #193973](https://github.com/openclaw/openclaw/pull/193973)
  - [Issue #40001](https://github.com/openclaw/openclaw/issues/40001)
  - [Issue #166964](https://github.com/openclaw/openclaw/issues/166964)

- **资源生命周期缺少可预测性。** 大型插件会卡 Gateway，MCP runtime 不淘汰，SQLite worker 被大 session 拖垮，Doctor 在大型状态下运行近八分钟。
  - [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)
  - [Issue #166017](https://github.com/openclaw/openclaw/issues/166017)
  - [Issue #166526](https://github.com/openclaw/openclaw/issues/166526)

- **跨平台体验不一致。** Windows 服务权限与更新不稳定，macOS 上 stop/Doctor 异常，native app 中外链和媒体播放也存在问题。
  - [Issue #170956](https://github.com/openclaw/openclaw/issues/170956)
  - [Issue #191944](https://github.com/openclaw/openclaw/issues/191944)
  - [PR #193854](https://github.com/openclaw/openclaw/pull/193854)
  - [PR #191517](https://github.com/openclaw/openclaw/pull/191517)

### 积极信号

- 新版本 [v2026.11.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1) 已针对 secrets 保存和通道回复可靠性进行调整，说明用户反馈正在转化为发布内容。
- PR 数量和关闭速度都很高，且多个问题已有精确复现、测试与安全边界标注，项目工程化能力较强。
- 社区对 UI、会话隔离、远程节点和 provider 定制提出了明确使用场景，而不是泛化建议。

### 不满与产品治理诉求

- 用户希望提供更多诊断信息，而不是所有失败都返回同一句错误。
- 用户希望核心修复拥有可见 PR 和合并时间表。
- 用户希望维护者明确长期支持策略，例如 QQ 插件的可持续性讨论。
  - [Issue #150743](https://github.com/openclaw/openclaw/issues/150743)
- 用户希望 hosted plugin catalog 可关闭，以支持离线或受控网络环境。
  - [Issue #164620](https://github.com/openclaw/openclaw/issues/164620)

---

## 8. 待处理积压

### 需要维护者优先处理的长期高优先级 Issue

1. [Issue #40001](https://github.com/openclaw/openclaw/issues/40001)  
   自 2026-03-08 起持续存在，涉及静默数据丢失，且仍需产品决策。建议尽快确定 append、锁和覆盖保护语义。

2. [Issue #70903](https://github.com/openclaw/openclaw/issues/70903)  
   自 2026-04-24 起未解决，provider 恢复后仍被文件 cooldown 阻断，属于直接影响可用性的 P0。

3. [Issue #142821](https://github.com/openclaw/openclaw/issues/142821)  
   自 2026-09-09 起涉及 transcript、命令和文件传播的潜在安全问题，已有 linked PR，需要安全审查和稳定版落地确认。

4. [Issue #158912](https://github.com/openclaw/openclaw/issues/158912)  
   自 2026-09-26 起影响 `MEMORY.md` bootstrap，与长期记忆这一核心场景直接相关。

5. [Issue #124306](https://github.com/openclaw/openclaw/issues/124306)  
   自 2026-08-15 起涉及危险命令审批信息不足，风险等级虽标 P2，但 blast radius 较大。

6. [Issue #127195](https://github.com/openclaw/openclaw/issues/127195)  
   自 2026-08-21 起，16 个调用点返回完全相同的错误，生产环境无法定位根因。

7. [Issue #112638](https://github.com/openclaw/openclaw/issues/112638)  
   自 2026-07-22 起，session maintenance 上限可被绕过，长期运行实例可能持续膨胀。

8. [Issue #140244](https://github.com/openclaw/openclaw/issues/140244)  
   自 2026-09-06 起等待 file-backed prompt 支持；这是简单但实用的自动化能力。

9. [Issue #131457](https://github.com/openclaw/openclaw/issues/131457)  
   自 2026-08-28 起等待 Feishu progress streaming，反映通道能力仍存在明显碎片化。

10. [Issue #164620](https://github.com/openclaw/openclaw/issues/164620)  
    自 2026-10-03 起等待 hosted plugin catalog 开关，属于网络控制、隐私和离线部署能力缺口。

### 需要推动审查或验证的 PR

- [PR #177227](https://github.com/openclaw/openclaw/pull/177227)：Codex native runtime，兼容性和安全边界验证不足。
- [PR #191517](https://github.com/openclaw/openclaw/pull/191517)：native 媒体播放恢复，尚缺 native CI/验收。
- [PR #191525](https://github.com/openclaw/openclaw/pull/191525)：iOS Share 与 TLS pin/custom service header，涉及安全边界。
- [PR #187836](https://github.com/openclaw/openclaw/pull/187836)：共享 Gateway 会话保密性，需要安全审查。
- [PR #192345](https://github.com/openclaw/openclaw/pull/192345)：OpenClaw ID tunnel 与 relayed-device auth，协议和安全验证工作量较大。
- [PR #193986](https://github.com/openclaw/openclaw/pull/193986)：默认 sandbox 镜像变更后保持 sandboxed turns 可用，修复路径应尽快验证。
- [PR #193952](https://github.com/openclaw/openclaw/pull/193952)：provider 名称与 artwork 定制，当前等待作者或维护者处理。
- [PR #193968](https://github.com/openclaw/openclaw/pull/193968)：聊天 composer 布局优化，当前等待作者处理。

### 积压判断

- 今日吞吐很高，但高优先级问题的“**已复现、无新修复 PR**”比例仍大。
- 部分老 Issue 同时带有 `stale`、`needs-maintainer-review`、`needs-product-decision` 标签，说明它们已不只是工程实现问题，还涉及接口语义和产品策略。
- 建议维护者建立三类明确队列：
  1. **生产稳定性 P0/P1**：Gateway、Doctor、SQLite、MCP、服务管理；
  2. **数据与安全完整性**：append、redaction、secret proxy、权限撤销后的消息投递；
  3. **下一阶段能力**：OpenClaw ID 隧道、会话保密性、Codex native runtime。

---

## 今日结论

OpenClaw 今天呈现出典型的“高吞吐扩张期 + 稳定性债务集中暴露”状态：**v2026.11.1 改善了安全和通道回复，PR 队列也在快速推进节点连接、会话隔离、UI 与跨平台体验；但 Gateway、Doctor、SQLite、MCP 生命周期和 Windows/macOS 服务管理仍是用户最直接的生产痛点。**

项目整体健康度可评为：

- **开发活跃度：高**
- **社区关注度：高**
- **发布与修复吞吐：高**
- **生产稳定性：中低**
- **安全与数据完整性风险：中高**
- **下一版本功能潜力：高**

在下一轮发布前，最值得优先确认的是：[v2026.11.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1) 是否覆盖了关键升级回归，以及 [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)、[Issue #178359](https://github.com/openclaw/openclaw/issues/178359)、[Issue #191847](https://github.com/openclaw/openclaw/issues/191847)、[Issue #40001](https://github.com/openclaw/openclaw/issues/40001) 是否已有可合并的修复路径。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**统计日期：2026-11-06｜观察窗口：过去 24 小时**

## 1. 生态全景

生态正从“聊天助手”快速转向“可持续运行、可审计、可扩展的个人 Agent 平台”，Gateway/Session Authority、长期记忆、插件体系、跨平台部署和沙箱隔离成为共同主线。  
今日开发活跃度呈明显分层：OpenClaw、Hermes Agent、QwenPaw 处于高吞吐迭代期；LobsterAI 和 NanoBot 偏稳定收敛；OpenHuman 正集中补齐安全与多租户边界；PicoClaw 主要停留在依赖维护；IronClaw 过去 24 小时无活动。  
功能扩张与可靠性治理并行，但多个项目仍存在“Issue 已复现、修复未合并、版本尚未发布”的交付断层，用户实际获益明显落后于 PR 产出速度。  
数据安全与状态可信度成为新的信任分水岭：共享文件覆盖、Embedding 静默漏批、凭据泄露、会话归属冲突、审批越权等问题，比新增 UI 或模型接入更容易破坏用户信任。  
整体判断：生态机会充足、路线快速分化；下一阶段竞争重点将不再只是“能调用多少模型”，而是**能否长期运行、正确恢复、透明可观测并安全扩展**。

---

## 2. 各项目活跃度对比

> 注：数据来自题述 24 小时摘要；部分仓库仅提供更新条目而非完整历史 backlog。“PR 已关闭”不一定等于已合并。

| 项目 | Issues | PRs | Release | 主要进展 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | **491** | **500** | `v2026.11.1` | 消息可靠性、OpenClaw ID 隧道、会话保密性；Gateway/Doctor/SQLite/MCP 债务突出 | **高活跃、中等健康、稳定性风险偏高** |
| **Hermes Agent** | **50** | **50** | `v0.23.0` | Gateway 统一会话权威、Desktop、插件注册表、本地模型容错 | **高活跃，升级稳定性承压** |
| **QwenPaw** | **16** | **38** | 无 | Console/SSE、Memory/ReMe、Creator、插件安装、Windows 兼容 | **活跃度高，Bug 密度偏高** |
| **LobsterAI** | **1** | **15** | 无 | OpenClaw 配置、长上下文、向量记忆、DSH 生命周期 | **良好偏稳定，安全 PR 待合入** |
| **OpenHuman** | **0** | **20** | 无 | 凭据审批、租户隔离、Composio 脱敏、沙箱文件闭环 | **活跃且方向清晰，合并/发布偏慢** |
| **NanoBot** | **2** | **16** | 无；`0.4.1` 待发布 | WebUI 上下文图谱、迁移兼容、API 锁、Windows 测试 | **良好，核心 PR 有积压** |
| **PicoClaw** | **1** | **4** | 无 | 4 项 Go 依赖升级；Web UI 无法启动 Gateway | **中等偏低，交付与响应偏慢** |
| **IronClaw** | 0 | 0 | 无 | 过去 24 小时无活动 | **数据不足/静默状态** |

### 活跃度分层

- **超高吞吐层：OpenClaw**  
  单日近千条 Issue/PR 更新，远高于其他项目，体现超大规模社区与超高审查吞吐；但问题噪声和稳定性债务同样最大。
- **高活跃层：Hermes Agent、QwenPaw、OpenHuman**  
  Hermes Agent 正处于大版本和多架构切换期；QwenPaw 修复密集但核心链路仍不稳固；OpenHuman 以安全、租户和沙箱治理为主。
- **稳定收敛层：LobsterAI、NanoBot**  
  LobsterAI 的用户可见故障修复较集中；NanoBot 侧重 WebUI 和迁移收尾，发布准备尚未完成。
- **低活跃维护层：PicoClaw**  
  主要由 Dependabot 驱动，缺少功能交付与社区讨论。
- **无观察活动层：IronClaw**  
  24 小时窗口内无可用数据，不能仅据此判断项目长期健康度。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态位置：当前最接近“全栈个人 Agent 操作系统”

OpenClaw 同时覆盖 Gateway、渠道接入、插件、MCP、会话、Web/移动端、远程节点、模型路由和自托管部署，能力面明显宽于其他项目。它不是单一聊天前端，也不只是工作流框架，而是试图成为用户自托管 Agent 的**统一控制面与执行底座**。

### 3.2 核心优势

1. **生态与社区规模领先**  
   今日 491 条 Issue、500 条 PR 更新，远超 Hermes Agent 的 50/50、QwenPaw 的 16/38。社区规模和贡献吞吐处于第一梯队。

2. **渠道与部署覆盖最广**  
   Telegram、Discord、Webhook、Slack，以及 Windows、macOS、Linux 和无头节点接入，使其更适合作为跨设备、跨渠道的个人助手中枢。

3. **平台化路线清晰**  
   OpenClaw ID tunnel、无头节点 enrollment、共享 Gateway 会话保密性和 Codex native runtime，显示其正从“本地 Agent 工具链”升级为“远程节点与多租户平台”。

4. **安全与数据完整性意识增强**  
   `v2026.11.1` 修复 secrets 保存、Tailscale 关闭后的 Gateway 认证以及多通道回复可靠性；PR #193973 修复消息静默消失，说明社区反馈已可快速转化为发布内容。

5. **高吞吐带来快速修复能力**  
   大量问题已有精确复现、测试、安全边界标签和关联 PR，代码工程化能力强于一般个人 Agent 项目。

### 3.3 与同类的技术路线差异

| 维度 | OpenClaw | Hermes Agent | QwenPaw | LobsterAI | OpenHuman | NanoBot | PicoClaw |
|---|---|---|---|---|---|---|---|
| 核心定位 | 通用、自托管、多渠道 Agent 操作系统 | Gateway/Desktop 驱动的个人 Agent 平台 | 多渠道、插件化、可视化工作台 | 面向终端用户的桌面 Agent 产品 | 强调安全、审批与多租户的 Agent 平台 | 轻量 Agent 与 WebUI 可观察性 | 轻量边缘个人 Agent |
| 状态架构 | Gateway 核心，但旧状态债务重 | 正迁移到统一 Session Authority | 多 workspace、插件化 Memory/Console | 强依赖 OpenClaw 后端 | 租户/profile/审批模型突出 | 本地工作区与会话迁移 | 相对简洁 |
| 远程节点 | OpenClaw ID tunnel 是明确主线 | Gateway、Cloud、SSH、Hosted Rooms | 多渠道但远程节点非核心 | 桌面伴侣与 Gateway 协同 | 后台 Agent/流程为主 | 非核心 | 非核心 |
| 记忆能力 | `MEMORY.md`、bootstrap、共享文件并发仍是痛点 | 本地模型与 Agent 状态为主 | ReMe、Embedding、标签索引深，但稳定性待收敛 | 向量记忆刚修复 Windows 故障 | 以沙箱/制品为核心 | 非核心 | 非核心 |
| 安全模型 | 共享 Gateway 保密性待成熟 | 生命周期守卫、审批、插件过滤 | Provider/凭据校验 | OpenClaw 配置与安全 PR | 多租户审批、local-only egress 是显著优势 | 非核心 | 非核心 |
| UI 方向 | Control UI、多端、移动端 | Desktop 原生化明显 | Console、Creator、插件 UI | 桌面伴侣、Cowork | Chat/Flow/Workflow Builder | WebUI 上下文图谱 | 基础 Web UI |

### 3.4 规模背后的代价

OpenClaw 的优势也是其风险来源：功能面过宽导致 Gateway、Doctor、SQLite worker、MCP child、Windows/macOS 服务管理同时承压。它当前最需要从“功能规模领先”转向“关键链路可信”。

---

## 4. 共同关注的技术方向

### 4.1 Gateway 与统一会话权威

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、LobsterAI、OpenHuman**

- OpenClaw：Gateway 阻塞、服务停止失败、子进程/MCP 残留。
- Hermes Agent：CLI、Desktop、Web、Cloud、SSH 向统一 Gateway Session Authority 迁移；仍有 ownership 409、旧 `SessionState` 双路径。
- QwenPaw：多 workspace 插件、Channel 缓存和 Console 状态需要一致。
- LobsterAI：OpenClaw 配置收缩、安装路径和 Gateway 重启依赖。
- OpenHuman：多租户、profile、agent-scoped 审批和后台委派路由。

**共同诉求：** 会话、任务和 Agent 状态必须有唯一权威来源，状态反馈必须与真实执行一致。

### 4.2 长期记忆与检索可靠性

**涉及项目：OpenClaw、QwenPaw、LobsterAI、Hermes Agent**

- OpenClaw：`MEMORY.md` 未注入、共享文件被覆盖、transcript redaction 污染上下文。
- QwenPaw：Embedding 超限导致批次假成功、Memory 标签索引 503、reranker 空密钥。
- LobsterAI：Windows `memory_search` 召回失败并启动第二实例。
- Hermes Agent：状态数据库、会话压缩与长期上下文可靠性。

**共同诉求：** “配置成功”不等于“记忆可用”；索引必须完整可验证，失败项必须可见、可重试，文件写入必须避免静默覆盖。

### 4.3 插件、技能与工具体系治理

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、OpenHuman、NanoBot**

- 来源识别、卸载残留、依赖检查、安装元数据和注册表生命周期反复出现。
- Hermes Agent 正统一 ProviderRegistry，并增加结果过滤钩子。
- QwenPaw 官方插件安装失败，依赖检查重构 PR 规模较大。
- OpenHuman 强化 Composio 出口、凭据脱敏和审批租户隔离。
- NanoBot 修复同名技能来源冲突。

**共同诉求：** 插件来源、权限、凭据、卸载、结果过滤和跨入口策略必须统一管理，不能仅靠工具调用路径各自实现。

### 4.4 跨平台可靠性

**涉及项目：全部有明确跨平台问题的项目**

- Windows：服务管理、长路径、空 venv、SQLite URI、AppContainer 权限、GBK 编码、PATH 配置。
- macOS：服务停止、Doctor 挂起、DSH 残留进程、窗口焦点。
- Linux/容器：子进程 admission、MCP TTL、SQLite worker OOM。

**共同诉求：** 不能依赖单一 OS 的进程模型、权限模型、路径语义或系统命令，应建立统一抽象层。

### 4.5 可诊断、可恢复、可观测

**涉及项目：所有项目**

- OpenClaw：Doctor 无输出、错误原因缺失。
- Hermes Agent：显示 sent 但未送达、活跃 Agent 状态陈旧。
- QwenPaw：批次日志与真实索引不一致。
- OpenHuman：后台子 Agent 事件不可见。
- NanoBot：API 锁长期滞留。
- LobsterAI：账号封禁缺少原因和申诉路径。

**共同诉求：** 错误必须可操作、进度必须可见、失败必须可恢复、后台任务必须可追踪。

### 4.6 安全与隐私边界

**涉及项目：OpenClaw、Hermes Agent、QwenPaw、LobsterAI、OpenHuman**

重点包括：

- secrets 保存与脱敏；
- transcript redaction；
- OAuth Token 日志泄露；
- 符号链接越界；
- 共享 Gateway 会话保密；
- Composio 返回值密钥泄露；
- local-only 模式所有出口一致阻断；
- 审批请求的租户隔离。

这表明安全已从“入口处阻止危险调用”转向**全链路数据流治理**。

---

## 5. 差异化定位分析

### OpenClaw：通用个人 Agent 操作系统

**适合：** 需要多渠道、自托管、远程节点、插件/MCP 和高度可扩展能力的个人或技术团队。  
**优势：** 覆盖广、社区大、基础设施完整。  
**短板：** 维护面过大，Gateway、Doctor、SQLite 和跨平台服务管理尚未充分收敛。

### Hermes Agent：Desktop + Gateway 的一体化个人工作台

**适合：** 重视桌面交互、任务可视化、多 Profile、本地模型和插件工作流的用户。  
**优势：** Desktop 产品化和统一 Session Authority 路线清晰。  
**短板：** v0.23.0 规模巨大，旧数据库、状态迁移和 Windows 更新恢复风险集中。

### QwenPaw：多渠道、插件化、可观测性较强的 Agent 平台

**适合：** 需要 Matrix、DingTalk、Memory/ReMe、Creator 和多 workspace 的用户。  
**优势：** 渠道广、Memory/Creator 产品方向丰富。  
**短板：** 配置、索引、插件安装和跨平台状态经常不一致，“表面可用、实际失败”较多。

### LobsterAI：面向普通用户的桌面 Agent 产品

**适合：** 追求开箱即用、桌面伴侣、Cowork、搜索和本地模型体验的用户。  
**优势：** 用户场景明确，打包、配置和 UI 细节修复速度较快。  
**短板：** 对 OpenClaw 底层依赖较深；安全 PR 尚未合并，发布沟通不足。

### OpenHuman：安全优先的多租户 Agent 平台

**适合：** 对审批、凭据、沙箱、隐私出口和租户隔离敏感的用户。  
**优势：** local-only egress、审批 tenant fencing、Composio 脱敏方向鲜明。  
**短板：** 多数关键改动仍待合并，版本发布和公开 Issue 反馈偏少。

### NanoBot：轻量、透明的本地 Agent 与 WebUI

**适合：** 偏好本地工作区、简洁 Agent 和可观察上下文使用的个人用户。  
**优势：** 轻量、文件上下文图谱有差异化。  
**短板：** 迁移策略反复，核心 PR 积压，WebUI 改版后的跨平台体验仍需验证。

### PicoClaw：轻量边缘个人 Agent

**适合：** Go 技术栈、小型自托管、基础渠道接入场景。  
**优势：** 依赖栈简单、运行形态轻量。  
**短板：** 今日无功能交付，Web UI 与 CLI 能力不一致，社区响应信号弱。

---

## 6. 社区热度与成熟度

### 6.1 社区热度分层

**第一层：超大社区、高噪声**
- OpenClaw：Issue/PR 吞吐远超其他项目，既有强需求，也有大量故障复现和兼容性讨论。
- 社区热度最高，但需要区分“新问题曝光速度”和“实际发布修复率”。

**第二层：高活跃专业社区**
- Hermes Agent：50 Issue/50 PR，功能与架构讨论丰富。
- QwenPaw：16 Issue/38 PR，Issue 与修复映射较清晰。
- 特征是贡献者积极提供复现和 PR，工程反馈效率较高。

**第三层：聚焦型产品社区**
- OpenHuman：20 PR，安全与多租户主题集中，但缺少 Issue 对话数据。
- LobsterAI：15 PR，用户痛点具体，不过贡献来源高度集中于单一维护者。
- NanoBot：16 PR，主要由 WebUI 改版和兼容性收尾驱动。

**第四层：低信号维护**
- PicoClaw：仅 1 Issue、4 个自动依赖 PR。
- IronClaw：24 小时无活动，无法判断是项目静默、归档还是数据窗口过短。

### 6.2 产品成熟度分层

**快速迭代期**
- Hermes Agent：大版本、统一 Gateway、Desktop 平台化和插件生态同时推进。
- OpenHuman：安全、多租户和沙箱工程化快速展开，但交付尚未闭环。
- QwenPaw：功能覆盖扩张快，核心链路稳定性仍需补齐。

**规模化但稳定性承压**
- OpenClaw：规模最大、发布速度高，但稳定性债务和管理复杂度最高。

**质量巩固期**
- LobsterAI：集中修复长上下文、记忆、配置和桌面体验。
- NanoBot：集中修复 WebUI、迁移、锁释放和测试稳定性。

**基础维护期**
- PicoClaw：依赖升级为主，缺少明显功能与社区推进。

---

## 7. 值得关注的趋势信号

### 7.1 “Agent 平台化”取代单点聊天应用

OpenClaw 的 Gateway/节点、Hermes Agent 的 Session Authority、QwenPaw 的 Console/插件、OpenHuman 的租户/审批，都指向同一结论：竞争焦点已转向**运行平台、状态管理、插件协议和权限边界**。

### 7.2 可观测性成为产品差异化能力

NanoBot 的上下文图谱、OpenClaw 的 Doctor、QwenPaw 的 Console、OpenHuman 的后台 Agent 卡片、Hermes Agent 的 Worker 日志都在强化可观察性。未来用户不会只关心“最终答案”，还会关心：

- Agent 正在调用什么工具；
- 文件和记忆如何进入上下文；
- 任务是否真的开始、执行和完成；
- 后台任务卡在哪里；
- 哪些步骤可审计、可回滚。

### 7.3 记忆系统进入“可信度竞争”

仅支持向量库或长期记忆已不足以形成优势。竞争点正在转向：

- 索引是否完整；
- 写入是否原子；
- 召回是否可解释；
- 多会话共享是否安全；
- 脱敏是否污染重放；
- 数据损坏能否恢复。

这会推动记忆系统从“能搜到”升级为“带事务、审计和可观测性的状态系统”。

### 7.4 插件安全从注册时校验转向执行时治理

OpenHuman 的 local-only egress、Composio 结果脱敏，以及 Hermes Agent 的 `filter_tool_result`，说明插件治理正在进入执行链内部。未来插件框架必须原生支持：

- 按租户/Profile 隔离；
- 凭据引用而非明文传递；
- 入站、出站和最终结果统一过滤；
- 审批与所有权 fencing；
- 卸载后的注册表和残留清理。

### 7.5 跨平台不是边缘问题，而是核心产品能力

Windows 和 macOS 的故障密度已经高于 Linux/容器。个人 AI 助手通常运行在用户自己的桌面上，因此服务停止、更新恢复、PATH、进程树、权限和长路径问题会直接决定产品是否“能用”，而不仅是实验室表现。

### 7.6 大版本发布与升级可恢复性必须同步建设

Hermes Agent 的 v0.23.0 和 OpenClaw 的 v2026.11.1都显示，功能规模扩大后，真正影响口碑的往往是升级路径：

- 旧数据库能否无损迁移；
- Gateway/Desktop/Web 状态能否一致；
- 更新中断能否自动恢复；
- 配置目录变化是否可检测；
- 是否提供回滚和备份指引。

**建议各项目将“升级演练、回滚、schema 检查、状态重建”纳入 release-blocking 流程。**

### 7.7 下一阶段应优先投资可恢复性，而非继续堆功能

从今日数据看，最有价值的工程投入并非更多模型适配器，而是：

1. 统一任务和会话状态；
2. 子进程、Gateway、Doctor 的生命周期治理；
3. 写入和索引的事务完整性；
4. 权限撤销、租户隔离和结果脱敏；
5. 升级失败后的自动恢复；
6. 后台任务、错误和资源占用的可见性。

---

## 决策建议

### 对个人用户

- **需要最大生态与渠道覆盖**：优先 OpenClaw，但应避开未收敛的生产版本，并做好配置/数据库备份。
- **需要成熟桌面体验**：关注 Hermes Agent 与 LobsterAI；Hermes 升级前必须验证旧状态库和 Windows 恢复路径。
- **需要长期记忆与插件可视化**：关注 QwenPaw，但暂不宜依赖其 Embedding、标签索引等核心记忆链路承载不可恢复数据。
- **重视安全、多租户和审批**：OpenHuman 路线最明确，但建议等待关键安全 PR 合并及正式版本。
- **偏好轻量本地 WebUI**：NanoBot 值得跟踪，等待 0.4.1 发布及迁移回归结果。

### 对 AI 智能体开发者

最值得复用的工程原则是：

1. **状态必须单一权威化**，避免多套会话视图并存；
2. **所有失败必须可见、可重试**，不能出现“日志成功、实际漏数据”；
3. **文件写入和索引重建必须事务化**；
4. **插件权限应贯穿所有执行入口**，包括 RPC、Flow、后台任务和结果回传；
5. **桌面端与守护进程必须具备可恢复升级机制**；
6. **先收敛 Gateway、Doctor、SQLite、MCP 和跨平台服务管理，再扩展更多渠道或模型。**

**总体判断：** 开源个人 AI 助手生态已进入“平台能力快速扩张、生产可靠性尚未完全跟上”的阶段。OpenClaw 凭借最大社区规模和最广基础设施保持生态领导地位；Hermes Agent、QwenPaw、OpenHuman、LobsterAI 和 NanoBot 则分别在桌面化、记忆与插件、安全租户、终端体验和轻量可视化方向形成差异化。未来真正能建立长期壁垒的，不只是模型接入数量，而是**状态正确、运行稳定、数据安全、失败可恢复，以及全链路可观察**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**统计日期：2026-11-06**  
**数据范围：过去 24 小时**  
**仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

## 1. 今日速览

- 过去 24 小时共更新 **2 个 Issue、16 个 PR**，其中 Issue 包含 **1 个活跃问题和 1 个已关闭问题**；PR 包含 **3 个待合并、13 个已合并或关闭**，整体开发活跃度较高。
- 项目今日重点集中在 **WebUI 稳定性、上下文图谱、迁移兼容、Windows 测试可靠性、API 锁释放** 等方向，PR 数量明显高于 Issue 数量，表明团队主要在消化既有需求和修复问题。
- 今日 **未发布新版本**；版本维护 PR **0.4.1 仍待合并**，说明发布流程尚未完成。
- 社区反馈仍集中在 **Windows 工作区选择器** 与 **新版消息界面体验** 两方面，后者虽已关闭，但用户对滚动、字号和整体样式的主观反馈仍值得持续关注。
- 综合判断：**项目健康度良好、迭代速度较快**，但存在一定 PR 积压、迁移兼容调整反复，以及测试时序不稳定等工程风险。

---

## 2. 版本发布

今日无新版本发布。

相关发布准备：

- **[chore(release): prepare 0.4.1 — PR #6570](https://github.com/HKUDS/nanobot/pull/6570)**  
  - 状态：**待合并**
  - 目标版本：**0.4.1**
  - 该 PR 用于准备维护版本，不代表版本已经发布，也不涉及签名、更新源或仓库保护策略变更。
  - 合并前仍需确认相关修复、测试及兼容性改动均已稳定纳入。

---

## 3. 项目进展

### WebUI 上下文与会话体验

- **[fix(webui): stabilize context usage and session switching — PR #6576](https://github.com/HKUDS/nanobot/pull/6576)**  
  修复模型请求推进状态图时上下文用量显示为空，以及切换会话后上下文图谱异常关闭的问题；目标是提升单窗格布局下的会话切换与用量展示稳定性。

- **[fix(webui): close context graph when switching sessions — PR #6569](https://github.com/HKUDS/nanobot/pull/6569)**  
  在切换会话时主动关闭上下文图谱，避免旧会话的侧栏状态和布局观察器影响新会话。

- **[feat(webui): inspect file context in a live graph sidebar — PR #6562](https://github.com/HKUDS/nanobot/pull/6562)**  
  引入常驻文件上下文图谱侧栏，允许用户查看最近一次压缩后使用的文件、在共享预览侧栏中打开文件，并回放图谱增长过程。这是今日较重要的 WebUI 功能推进。

### WebUI 重构与界面体验

- **[refactor(webui): improve task navigation and isolate workflow ownership — PR #6578](https://github.com/HKUDS/nanobot/pull/6578)**  
  改进任务导航，并为两个具体工作流建立更清晰的代码所有权边界，使局部行为修改更集中于对应模块及其测试。

- **[style(webui): refine Markdown reading typography — PR #6568](https://github.com/HKUDS/nanobot/pull/6568)**  
  优化聊天消息的 Markdown 排版、阅读节奏和层级，并引入本地字体及系统字体回退。

- **[fix(webui): keep composer placeholders readable in narrow panes — PR #6577](https://github.com/HKUDS/nanobot/pull/6577)**  
  针对窄侧栏、桌面分栏、不同语言和字号场景增加紧凑占位符，避免快捷键提示被裁切。

- **[fix(webui): remove composer placeholder tooltip — PR #6579](https://github.com/HKUDS/nanobot/pull/6579)**  
  移除输入框获得焦点时出现的浮动快捷键提示，同时保留输入框内长短占位文本、可访问性描述及 `/`、`@`、`$` 等交互。

### 迁移兼容与历史数据

- **[fix(webui): preserve unmigrated workspace history ownership — PR #6575](https://github.com/HKUDS/nanobot/pull/6575)**  
  防止旧版本安装升级后，多工作区共享的 WebUI 历史记录因仍采用 JSONL 格式而被错误导入其他工作区，重点强化工作区历史归属判断。

- **[revert: retain legacy migrations through 0.4.x — PR #6573](https://github.com/HKUDS/nanobot/pull/6573)**  
  回滚此前的迁移清理改动，因为项目仍计划发布多个 **0.4.x** 版本，需要在兼容期内保留旧历史与代理迁移能力。这反映出近期迁移策略曾因版本计划变化而反复调整。

### API、命令与技能系统

- **[fix(api): release idle session locks — PR #6194](https://github.com/HKUDS/nanobot/pull/6194)**  
  修复已完成 API 请求在注册表中长期保留锁的问题，计划通过弱引用字典回收空闲锁。该 PR 自 10 月 13 日创建后仍在待合并状态，属于需要重点跟进的长期积压项。

- **[refactor(commands): own trusted Shell completion outside agent loop — PR #6523](https://github.com/HKUDS/nanobot/pull/6523)**  
  调整可信 Shell 命令的完成机制，使可信用户命令等待完整字面结果，同时保持模型 Shell 工具原有的有界观察和长任务后续检查能力。

- **[fix(skills): distinguish marketplace installation sources — PR #6571](https://github.com/HKUDS/nanobot/pull/6571)**  
  修复同名技能来自不同仓库时均被视为已安装，以及安装接口错误返回 `already_installed` 的问题；新安装时将记录技能来源。

### 测试与 CI 可靠性

- **[test: separate preparation responsiveness from persistence timing — PR #6574](https://github.com/HKUDS/nanobot/pull/6574)**  
  拆分 Windows 测试中的准备响应与持久化耗时，避免多个无关步骤共用五秒截止时间导致失败。

- **[test(ci): remove Docker output and stdin timing races — PR #6572](https://github.com/HKUDS/nanobot/pull/6572)**  
  移除 Docker 输出检测中的管道竞态，并区分子进程就绪、stdin 写入和进程完成，降低 CI 偶发失败。

**整体进展评估：** 今日完成或关闭的 13 个 PR 覆盖界面、迁移、API、命令、技能和测试六个方向，项目继续向“可维护、可升级、跨平台稳定”的目标推进；但核心修复仍集中在近期 WebUI 改版后的兼容与体验收尾阶段。

---

## 4. 社区热点

> 今日数据中各 Issue/PR 的评论数与点赞数普遍较低，暂无明显的高热度讨论。

### Issue #6526：消息界面体验争议

- **[“no earlier messages” message — Issue #6526](https://github.com/HKUDS/nanobot/issues/6526)**
- 状态：**已关闭**
- 数据：**2 条评论、0 个点赞**
- 热点原因：用户直接表达了对 4.0 更新后消息区域滚动被阻断、字号及样式异常的不满。该 Issue 的评论热度虽然有限，但反馈强度较高，属于典型的主观体验问题。

### Issue #6111：Windows 工作区选择器增强

- **[Workspace picker: drive list, folder creation, and common location shortcuts on Windows — Issue #6111](https://github.com/HKUDS/nanobot/issues/6111)**
- 状态：**开放**
- 数据：**2 条评论、0 个点赞**
- 热点原因：用户希望 Windows 工作区选择器支持磁盘列表、新建文件夹及常用位置快捷入口，核心诉求是提升桌面端的目录选择效率。

### PR #6562：文件上下文图谱侧栏

- **[feat(webui): inspect file context in a live graph sidebar — PR #6562](https://github.com/HKUDS/nanobot/pull/6562)**
- 状态：**已关闭**
- 数据：**暂无评论**
- 热点原因：它直接扩展了 Agent 的可观察性——用户不仅能看到模型使用了哪些文件，还能在对话旁检查并回放上下文增长，代表 WebUI 从聊天界面走向运行过程可视化的方向。

### PR #6324：Heartbeat 独立模型

- **[feat(heartbeat): add heartbeat-specific model override — PR #6324](https://github.com/HKUDS/nanobot/pull/6324)**
- 状态：**开放**
- 数据：**暂无评论**
- 热点原因：允许 Heartbeat 定时任务使用单独模型，可降低频繁轻量任务对主模型或高成本模型资源的消耗，对部署成本控制具有实际价值。

---

## 5. Bug 与稳定性

### 较高优先级

1. **API 空闲会话锁未释放**
   - PR：[fix(api): release idle session locks — #6194](https://github.com/HKUDS/nanobot/pull/6194)
   - 关联问题：[原 Issue #4883（由 PR 引用）](https://github.com/HKUDS/nanobot/issues/4883)
   - 影响：不同 `session_id` 的已完成 API 请求可能持续保留锁，长期运行后可能造成注册表膨胀或资源回收问题。
   - **修复状态：已有 fix PR，但仍未合并。**
   - 风险：高。该 PR 已持续较长时间，建议优先完成审查、测试和合并。

2. **迁移策略回退与旧版历史兼容**
   - PR：[revert: retain legacy migrations through 0.4.x — #6573](https://github.com/HKUDS/nanobot/pull/6573)
   - 影响：此前迁移清理可能破坏仍在 0.4.x 兼容窗口内的旧安装升级流程。
   - **修复状态：已有回退 PR，已关闭。**
   - 风险：中高。后续仍需明确旧历史、代理迁移和多工作区归属的完整兼容矩阵。

3. **未迁移工作区历史归属错误**
   - PR：[fix(webui): preserve unmigrated workspace history ownership — #6575](https://github.com/HKUDS/nanobot/pull/6575)
   - 影响：升级后的旧 JSONL 历史可能被错误导入其他工作区，存在会话串用和数据归属错误风险。
   - **修复状态：已有 fix PR，已关闭。**
   - 风险：中高。建议补充多工作区、旧 JSONL、SQLite 共存的升级回归测试。

### 中等优先级

4. **上下文用量显示为空、切换会话破坏布局**
   - PR：[fix(webui): stabilize context usage and session switching — #6576](https://github.com/HKUDS/nanobot/pull/6576)
   - 关联 PR：[close context graph when switching sessions — #6569](https://github.com/HKUDS/nanobot/pull/6569)
   - **修复状态：已有 fix PR，均已关闭。**

5. **窄侧栏中输入框提示被裁切**
   - PR：[fix(webui): keep composer placeholders readable in narrow panes — #6577](https://github.com/HKUDS/nanobot/pull/6577)
   - **修复状态：已有 fix PR，已关闭。**

6. **输入框焦点提示造成遮挡或干扰**
   - PR：[fix(webui): remove composer placeholder tooltip — #6579](https://github.com/HKUDS/nanobot/pull/6579)
   - **修复状态：已有 fix PR，已关闭。**

7. **Windows 测试受持久化耗时影响而偶发失败**
   - PR：[test: separate preparation responsiveness from persistence timing — #6574](https://github.com/HKUDS/nanobot/pull/6574)
   - **修复状态：已有测试调整 PR，已关闭。**

8. **Docker 输出与 stdin 测试竞态**
   - PR：[test(ci): remove Docker output and stdin timing races — #6572](https://github.com/HKUDS/nanobot/pull/6572)
   - **修复状态：已有 CI 测试修复 PR，已关闭。**

### 用户报告但缺乏明确复现信息

9. **“no earlier messages” 阻断消息滚动、样式异常**
   - Issue：[“no earlier messages” message — #6526](https://github.com/HKUDS/nanobot/issues/6526)
   - **状态：已关闭；当前数据中未见对应明确修复 PR。**
   - 风险：中等。关闭原因和具体修复归属需要维护者补充，避免体验问题在后续版本重现。

---

## 6. 功能请求与路线图信号

### Windows 原生工作区选择体验

- **[Issue #6111](https://github.com/HKUDS/nanobot/issues/6111)** 请求加入：
  - 驱动器列表；
  - 文件夹创建；
  - 常用位置快捷入口。
- **路线图判断：中等概率进入近期版本。**  
  需求定义清晰且属于桌面端基础体验，但今日 PR 列表中没有直接对应实现，可能需等待维护者确认交互范围和平台测试成本。

### Heartbeat 独立模型覆盖

- **[PR #6324](https://github.com/HKUDS/nanobot/pull/6324)** 为 Heartbeat 的执行轮次和通知评估提供单独模型。
- **路线图判断：较高概率进入后续版本，但当前尚未合并。**  
  该功能与成本优化、模型路由和部署配置高度相关，且已有完整实现提案；当前主要障碍是冲突状态和评审积压，而非需求方向不明。

### 文件上下文实时可视化

- **[PR #6562](https://github.com/HKUDS/nanobot/pull/6562)** 已推进文件上下文图谱侧栏、文件预览和图谱增长回放。
- **路线图判断：较明确的产品方向。**  
  后续相关 PR #6576 又补充了稳定性和会话切换处理，说明团队正在围绕该能力继续收尾，而非将其视为一次性改动。

### 技能安装来源管理

- **[PR #6571](https://github.com/HKUDS/nanobot/pull/6571)** 强化多仓库同名技能的来源识别。
- **路线图判断：较高概率随后续维护版本落地。**  
  该修复直接影响技能市场安装正确性，且已进入关闭状态，预计会纳入后续发布分支。

---

## 7. 用户反馈摘要

### 主要痛点

- **新版消息区域影响原生滚动体验**  
  用户在 [Issue #6526](https://github.com/HKUDS/nanobot/issues/6526) 中表示，“no earlier messages” 提示会阻断整个消息滚动，并认为新版本字号和样式异常。这是明确的交互一致性与视觉层级问题。

- **对项目响应速度的旧有印象与新版体验形成落差**  
  同一用户认可该 Agent 过去“快速、响应迅速”，但对 4.0 更新后的界面变化明显失望，说明性能优势仍被认可，而 UI 改版尚未完全达到预期。

- **Windows 目录选择效率不足**  
  [Issue #6111](https://github.com/HKUDS/nanobot/issues/6111) 表明 Windows 用户希望获得更贴近系统原生的工作区选择流程，而不是基础目录浏览。

### 满意点与积极信号

- 用户仍高度认可 Agent 原有的响应速度与整体使用价值。
- 今日团队对窄栏输入、上下文切换、Markdown 排版、焦点提示等细节进行了集中修正，表明维护者正在积极回应 WebUI 体验问题。
- [Issue #6526](https://github.com/HKUDS/nanobot/issues/6526) 已关闭，说明该反馈至少触发了处理流程；不过建议在关闭说明中明确具体变更和版本，以免用户无法确认问题是否真正解决。

---

## 8. 待处理积压

### 优先处理

1. **[PR #6194：释放空闲会话锁](https://github.com/HKUDS/nanobot/pull/6194)**  
   创建于 2026-10-13，至今仍开放，并带有冲突标记。它关联资源长期滞留问题，应明确负责人、解决冲突并安排回归测试。

2. **[PR #6324：Heartbeat 独立模型覆盖](https://github.com/HKUDS/nanobot/pull/6324)**  
   创建于 2026-10-20，仍开放且带冲突标记。虽然功能价值清晰，但长期未合并可能影响后续架构演进，需要尽快完成设计与代码审查。

3. **[PR #6523：可信 Shell 完成机制重构](https://github.com/HKUDS/nanobot/pull/6523)**  
   创建于 2026-10-29，仍处于开放状态。该 PR 涉及可信命令等待语义，建议补充并发、超时和输出边界测试后再合并。

4. **[Issue #6111：Windows 工作区选择器增强](https://github.com/HKUDS/nanobot/issues/6111)**  
   开放时间较长，需求已明确但暂无对应实现 PR。需要维护者确认功能优先级、交互设计和是否限定 Windows 专属实现。

### 兼容性观察

5. **[PR #6573：保留 0.4.x 旧迁移能力](https://github.com/HKUDS/nanobot/pull/6573)**  
   已关闭并不代表兼容风险完全消失。应在 0.4.1 发布前验证旧安装、多工作区、JSONL/SQLite 混合状态以及代理迁移路径。

6. **[PR #6570：准备 0.4.1](https://github.com/HKUDS/nanobot/pull/6570)**  
   仍待合并。发布前需确认 WebUI、API、skills 和迁移相关改动均具备明确的测试覆盖，避免在维护版本中引入新的迁移回归。

---

**项目健康度结论：良好。** 今日协作活动高、修复覆盖面广，且没有新的版本发布事故信号。当前主要风险不在功能产出不足，而在若干核心 PR 长时间待审、迁移策略反复调整，以及 WebUI 新版体验尚需通过更多跨平台和窄栏场景验证。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-11-06**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目健康度：中等偏低，偏低主要源于缺少已合并改动、版本发布及社区反馈；当前以依赖升级和用户可操作性 Bug 为主。**

---

## 1. 今日速览

过去 24 小时共出现 **1 条活跃 Issue** 和 **4 条待合并 PR**，均为新建项目，当前没有已关闭 Issue 或已合并 PR。社区新增了一个关于 **Web UI 无法启动 Gateway** 的 Bug 报告，暴露出无 API Key Provider 场景下的前端功能可用性问题。与此同时，Dependabot 集中提交了 **4 项 Go 依赖升级**，覆盖 Azure Identity、LINE Bot SDK、SQLite 驱动和 `golang.org/x/time`，显示项目在持续维护基础依赖，但尚未看到这些改动进入主分支。综合来看，项目日常维护活跃度尚可，但功能交付、问题修复和用户互动仍较少，整体推进节奏偏慢。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无新功能、破坏性变更或迁移事项需要说明。

---

## 3. 项目进展

今日没有已合并或已关闭的重要 PR，因此没有可确认的新功能或修复正式进入项目主分支。

当前待合并 PR 全部为 Dependabot 自动提交的依赖升级：

| PR | 更新内容 | 预期作用 | 当前状态 |
|---|---|---|---|
| [#3460](https://github.com/sipeed/picoclaw/pull/3460) | Azure Go SDK `azidentity` 1.14.0 → 1.15.0 | 更新 Azure 身份认证依赖，可能包含兼容性修复、安全修复或能力增强 | 待合并 |
| [#3459](https://github.com/sipeed/picoclaw/pull/3459) | LINE Bot SDK Go v8 8.20.1 → 8.23.0 | 更新 LINE 消息渠道集成依赖，可能带来 SDK 修复与适配改进 | 待合并 |
| [#3458](https://github.com/sipeed/picoclaw/pull/3458) | `modernc.org/sqlite` 1.53.0 → 1.61.1 | 更新纯 Go SQLite 驱动，涉及持久化与数据库兼容性，需重点执行回归测试 | 待合并 |
| [#3457](https://github.com/sipeed/picoclaw/pull/3457) | `golang.org/x/time` 0.15.0 → 0.16.0 | 更新 Go 时间处理依赖，可能修复定时、限流或时间解析相关问题 | 待合并 |

### 推进程度判断

- **可确认进入主分支的功能或修复：0 项。**
- **待审核的基础设施维护：4 项。**
- 今日进展主要停留在 PR 阶段，不能视为已经完成交付。
- 其中 [#3458](https://github.com/sipeed/picoclaw/pull/3458) 的 SQLite 大版本跨度相对较大，合并前应验证数据库迁移、读写、并发和备份恢复。
- [#3457](https://github.com/sipeed/picoclaw/pull/3457) 的上游说明涉及更高的 Go directive 要求，需确认项目当前 Go 工具链是否满足要求，避免 CI 或本地构建环境不兼容。

---

## 4. 社区热点

### Issue #3461：Web UI 无法启动 Gateway（无 API Key Provider 场景）

- **状态：** Open
- **作者：** @AuthorProxy
- **评论数：** 0
- **反应数：** 0
- **链接：** [#3461](https://github.com/sipeed/picoclaw/issues/3461)

这是今日唯一新增 Issue，也是当前最值得关注的用户问题。报告者表示命令行操作正常，但使用不要求 API Key 的 Provider 时，Web UI 没有可用的 Gateway 启动入口。

#### 背后诉求

1. **Web UI 与控制台功能对齐**  
   用户期望即使 Provider 不配置 API Key，也能在 Web UI 中启动 Gateway，而不是只能退回命令行。

2. **无 API Key Provider 应被视为受支持配置**  
   报告中的模型配置包含空 `provider` 与自定义 `api_base`，说明项目可能允许代理式、网关式或无需独立密钥的模型服务。前端启动逻辑可能错误地将“无 API Key”直接等同于“不可启动”。

3. **降低部署与排障成本**  
   对自托管用户而言，Gateway 是接入聊天渠道和自动化服务的重要入口。功能不一致会迫使用户使用命令行，并增加首次配置和故障定位难度。

#### 热度判断

由于 Issue 刚创建且没有评论或点赞，暂时不能认定形成了高热度讨论；但从功能影响范围看，它可能影响所有依赖无 API Key Provider 的 Web UI 用户。

---

## 5. Bug 与稳定性

### 中等：`start gateway` 无法通过 Web UI 启动

- **Issue：** [#3461](https://github.com/sipeed/picoclaw/issues/3461)
- **现象：** 命令行可正常使用，但在无 API Key Provider 配置下，Web UI 无法启动 Gateway。
- **影响范围：** 使用免密钥、代理网关或自定义 `api_base` Provider，并希望通过浏览器管理 Gateway 的用户。
- **严重程度：** **中等**
  - 尚无证据表明核心服务完全不可用；
  - 命令行路径仍可用，因此不是全量阻断；
  - 但 Web UI 的关键启动操作缺失，且可能涉及配置校验逻辑不一致。
- **是否有 Fix PR：** **暂无**
- **稳定性观察：** 今日没有新的崩溃、数据损坏、安全回归或服务不可用报告。

### 建议

维护者应优先确认以下场景：

- `provider` 为空时，Web UI 是否错误显示“需要 API Key”；
- `api_base` 存在但无独立 API Key 时，是否能正确构造启动参数；
- 无 API Key 与缺少 `api_base` 两种配置是否被错误合并处理；
- 前端按钮可用性判断是否与后端实际启动条件保持一致。

---

## 6. 功能请求与路线图信号

今日没有明确标注为 feature request 的 Issue，也没有功能类 PR，因此无法基于现有数据确认下一版本的明确路线图。

### 潜在路线图信号

1. **完善 Web UI 的 Gateway 生命周期管理**
   - [#3461](https://github.com/sipeed/picoclaw/issues/3461) 表明 Web UI 可能尚未覆盖所有 Provider 配置类型。
   - 建议将“是否可启动 Gateway”的校验统一放在后端或共享配置模型中，避免前端根据 API Key 字段做过度推断。
   - 若该问题被确认属于配置校验缺陷，可能作为近期补丁进入下一版本。

2. **继续提升第三方集成依赖的时效性**
   - [#3459](https://github.com/sipeed/picoclaw/pull/3459) 和 [#3460](https://github.com/sipeed/picoclaw/pull/3460) 分别对应 LINE 渠道与 Azure 身份认证依赖更新。
   - 这些 PR 表明维护重点仍是生态组件兼容和基础依赖维护；它们更可能进入常规维护版本，而非形成单独的功能版本。

3. **数据库与运行时依赖稳定性**
   - [#3458](https://github.com/sipeed/picoclaw/pull/3458) 和 [#3457](https://github.com/sipeed/picoclaw/pull/3457) 若通过测试，可进入近期维护版本。
   - 当前没有证据表明 SQLite 或定时任务能力正在开发新特性，因此不宜将其解读为明确的路线图项目。

---

## 7. 用户反馈摘要

今日仅有 [#3461](https://github.com/sipeed/picoclaw/issues/3461) 一条用户报告，且尚无评论，因此用户反馈样本较少。

### 可提炼的真实痛点

- **命令行可用，但 Web UI 不可用：** 用户并未报告整体服务故障，核心痛点在于不同操作入口之间存在能力差异。
- **无 API Key Provider 的配置体验不完整：** 这类 Provider 在技术上已经可以配置和使用，但 Web UI 缺少相应启动路径。
- **自托管用户依赖浏览器完成 Gateway 管理：** Web UI 缺失关键操作会增加服务器部署、远程管理和新手上手的门槛。

### 满意度信号

- **正面信号：** 命令行路径能够正常工作，说明后端或核心 Gateway 能力至少部分可用。
- **不满意点：** Web UI 未正确反映 Provider 配置状态，操作入口与实际能力不匹配。
- **信息不足：** Issue 无评论、无点赞，也没有维护者回复，暂时无法判断用户是否已获得临时解决方案。

---

## 8. 待处理积压

由于数据只覆盖过去 24 小时，无法可靠识别“长期未响应”的历史 Issue 或 PR；以下为今日新增、目前仍待处理的条目。

| 优先级 | 条目 | 状态 | 建议 |
|---|---|---|---|
| 高 | [#3461](https://github.com/sipeed/picoclaw/issues/3461) Web UI 无法启动 Gateway | 新开、0 评论 | 尽快确认无 API Key Provider 的前端校验逻辑，并补充复现步骤、环境信息和预期行为 |
| 中 | [#3458](https://github.com/sipeed/picoclaw/pull/3458) SQLite 1.53.0 → 1.61.1 | 待合并 | 运行数据库迁移、读写、并发、备份恢复和升级回滚测试 |
| 中 | [#3457](https://github.com/sipeed/picoclaw/pull/3457) `golang.org/x/time` 0.15.0 → 0.16.0 | 待合并 | 检查 Go 版本要求、定时任务及限流相关测试 |
| 中 | [#3460](https://github.com/sipeed/picoclaw/pull/3460) Azure Identity 1.14.0 → 1.15.0 | 待合并 | 验证 Azure 认证流程，并关注上游破坏性变更 |
| 中 | [#3459](https://github.com/sipeed/picoclaw/pull/3459) LINE Bot SDK v8 8.20.1 → 8.23.0 | 待合并 | 执行 LINE 渠道发送、接收和鉴权回归测试 |

---

## 今日结论

PicoClaw 今日有 **5 个新增社区事件**，但全部处于开放或待合并状态，尚无已完成的代码交付、版本发布或已关闭问题。维护活动主要集中于依赖升级，说明基础栈仍在持续更新；用户侧最明确的诉求是修复 **Web UI 在无 API Key Provider 下无法启动 Gateway** 的问题。当前项目健康度评估为 **中等偏低**：依赖维护保持活跃，但 Bug 响应、功能落地、版本节奏和社区讨论信号都较弱。建议优先处理 [#3461](https://github.com/sipeed/picoclaw/issues/3461)，并尽快审核、测试 [#3458](https://github.com/sipeed/picoclaw/pull/3458) 至 [#3460](https://github.com/sipeed/picoclaw/pull/3460) 等依赖升级，以降低积压并避免兼容性风险持续累积。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-06**  
**数据范围：过去 24 小时 GitHub 动态**

## 1. 今日速览

过去 24 小时项目保持较高开发活跃度，共更新 **15 个 PR**，其中 **14 个已合并或关闭、1 个待合并**，另有 **1 个活跃 Issue**，但今日没有新版本发布。  
本次变更集中在 **OpenClaw 稳定性与性能、DeepSeek Harness（DSH）生命周期、桌面伴侣交互、Cowork 记忆与图片复制** 等方向，显示项目正在从基础功能完善转向跨场景可靠性和细节体验优化。  
全部 PR 均由单一核心贡献者 `@fisherdaddy` 提交，除历史功能 PR 和安全修复 PR 外，其余多为当日快速关闭的缺陷修复，表明修复效率较高，但贡献来源较为集中。  
当前总体健康度评估为 **良好偏稳定**：无新版本、Issue 数量较少且已有明确整改说明；主要风险在于仍有 **1 个待合并 PR**、若干长期开放事项，以及多个高价值修复尚需通过后续 Release 完成用户侧验证。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**，因此暂无对应的更新说明、破坏性变更或迁移要求。

当前 PR 中涉及安装路径同步、DSH 插件安装、OpenClaw 配置生成等底层行为调整，用户需留意后续版本发布说明，以确认是否包含配置目录迁移、Gateway 重启要求或安装环境调整。

---

## 3. 项目进展

今日共有 **14 个 PR 合并或关闭**，主要推进了以下工作：

### 3.1 OpenClaw 上下文与配置稳定性

- **[#3014](https://github.com/netease-youdao/LobsterAI/pull/3014)** 修复快速会话上下文压缩未按所选上下文窗口执行的问题。此前约 40 万 token 的文档可能使上下文占用持续增长并超过限制，自动压缩无法正常触发。  
  **进展价值：** 直接改善长文档会话的容量管理和计费可控性，降低上下文溢出风险。

- **[#3012](https://github.com/netease-youdao/LobsterAI/pull/3012)** 修复用户退出登录后重新生成 `openclaw.json` 时，模型目录被移除导致配置体积大幅缩减，并触发 OpenClaw 的覆盖保护机制。修复后退出登录无需重启 Gateway 即可完成配置收缩。  
  **进展价值：** 避免登录状态切换影响 OpenClaw 配置服务，减少“配置应用被拒绝”和重启依赖。

- **[#3010](https://github.com/netease-youdao/LobsterAI/pull/3010)** 修复无模型配置同步时未重新渲染安装路径的问题，覆盖已安装应用与开发版共用同一用户配置目录、应用重装至其他目录、macOS 应用迁移等场景。  
  **进展价值：** 提升多安装实例和跨目录迁移场景下的路径正确性。

- **[#3011](https://github.com/netease-youdao/LobsterAI/pull/3011)** 将 `build-info.json` 随 Gateway Bundle 一同发布，避免启动迁移检查点找不到构建信息。  
  **进展价值：** 提升 OpenClaw 启动迁移流程在打包产物中的可预测性。

- **[#3002](https://github.com/netease-youdao/LobsterAI/pull/3002)** 将 Windows 注册表根路径和控制台代码页读取改为原生实现，移除 Gateway 就绪后多次同步调用 `reg.exe`、`cmd.exe` 的开销。  
  **进展价值：** 降低 Windows 启动阶段的进程创建成本和同步阻塞，改善启动性能。

### 3.2 记忆搜索与 Cowork 图片复制

- **[#3013](https://github.com/netease-youdao/LobsterAI/pull/3013)** 修复 Windows 下每次执行 `memory_search` 都可能启动第二个应用实例、窗口被拉起且向量召回失败的问题。根因涉及 Electron 子进程环境变量被裁剪。  
  **进展价值：** 直接修复向量记忆不可用这一高影响功能，并降低重复启动应用的风险。

- **[#3009](https://github.com/netease-youdao/LobsterAI/pull/3009)** 修复复制带图片的用户消息时只复制文本、图片附件丢失的问题。新方案通过 HTML 和 data URL 一并写入剪贴板。  
  **进展价值：** 改善 Cowork 任务消息的完整复用和跨应用粘贴体验。

### 3.3 DSH 生命周期与插件安装

- **[#3008](https://github.com/netease-youdao/LobsterAI/pull/3008)** 修复 macOS 正常退出后内置 DSH 进程仍存活并持续占用端口、重启后无法正确回收残留进程的问题。  
  **进展价值：** 降低残留服务、端口冲突和重启后状态不一致的风险。

- **[#3007](https://github.com/netease-youdao/LobsterAI/pull/3007)** 修复 DSH Web 工作台插件安装时找不到 `pnpm` 的问题，改为使用随包分发的 pnpm，并将 DSH 更新至 `0.2.2-rc.1`。  
  **进展价值：** 解决 GUI 启动环境中 PATH 不完整导致的插件安装失败，对终端用户尤其重要。

### 3.4 桌面伴侣和 macOS 窗口体验

- **[#3006](https://github.com/netease-youdao/LobsterAI/pull/3006)** 修复 macOS 桌面伴侣面板重新打开时未取得键盘焦点、随后立即失焦闪退的问题。  
  **进展价值：** 提升面板重开和交互的稳定性。

- **[#3005](https://github.com/netease-youdao/LobsterAI/pull/3005)** 改善未登录用户进入需登录功能时的体验：提供明确登录原因，并在登录后继续原先的划词请求。  
  **进展价值：** 减少划词用户因登录流程中断而丢失操作上下文。

- **[#3003](https://github.com/netease-youdao/LobsterAI/pull/3003)** 调整 macOS 全屏应用上的任务卡片窗口层级，并修复隐藏窗口在重新打开时位置跳动的问题。  
  **进展价值：** 改善全屏工作流和桌面伴侣多窗口管理体验。

### 3.5 文档与 Web 搜索能力

- **[#3004](https://github.com/netease-youdao/LobsterAI/pull/3004)** 补充 Windows 原生注册表和代码页测量的补丁文档，属于已合并运行时优化的后续记录。

- **[#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)** 为内置 Web Search Skill 增加可选的 Parallel 匿名搜索模式，无需账号、API Key 或浏览器连接，并采用受限的 Fast 模式。该 PR 今日关闭。  
  **进展价值：** 扩展搜索供应商可选项，降低零配置使用门槛；但需结合关闭原因确认是否已以其他形式合入。

### 总体推进程度

今日工作主要解决了 **长上下文失控、向量记忆不可用、配置收缩失败、DSH 残留与插件安装失败、跨平台窗口焦点问题** 等用户可见故障。虽然没有发布版本，但底层可靠性得到较集中补强；按变更覆盖面看，约为一次中等规模的稳定性迭代。

---

## 4. 社区热点

今日更新条目整体评论和点赞较少，暂未出现高热度讨论。

### 4.1 活跃 Issue：账号封禁申诉

- **Issue [#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)**  
  创建于 2026-10-25，更新于 2026-11-05，共有 **2 条评论、0 个点赞**，当前仍为开放状态。

用户称其曾通过本地反向代理调用 LobsterAI 内置模型接口，随后账号被禁用。已停止代理并清除本地凭据，希望恢复账号访问。

**背后诉求：**

1. 用户需要明确账号禁用的具体原因与申诉依据；
2. 希望区分本地个人调用行为与滥用、对外服务等高风险行为；
3. 需要一条可追踪的申诉处理流程；
4. 桌面客户端目前直接提示“账号已被禁用”，缺少原因说明和自助恢复入口。

这是今日唯一 Issue，也是社区层面最需要维护者响应的用户诉求。

### 4.2 长期开放的安全与代理修复

- **PR [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798)**  
  今日更新，包含 3 项安全相关修复：
  - OAuth Token 在诊断日志中泄露；
  - 预览服务器符号链接越界风险；
  - OpenClaw 代理认证问题。

该 PR 自 2026-10-05 起持续开放，属于今日更新时间最近且仍待合并的 PR。评论和点赞数未显示明显社区关注，但安全影响范围较高。

---

## 5. Bug 与稳定性

### 严重

#### 凭据日志泄露、符号链接越界及代理认证缺陷

- **PR：[#2798](https://github.com/netease-youdao/LobsterAI/pull/2798)**  
- **状态：待合并**
- **风险：**
  - OAuth Token 被原始写入诊断文件；
  - 预览服务器符号链接可能突破预期目录边界；
  - OpenClaw 代理认证存在缺陷。

这三项问题涉及敏感凭据与文件系统边界，风险高于一般 UI 缺陷。虽然已有集中修复 PR，但仍待合入，不能视为风险已经解除。

### 高

#### 向量记忆搜索无法使用并可能启动第二应用实例

- **PR：[#3013](https://github.com/netease-youdao/LobsterAI/pull/3013)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** Windows 下 `memory_search` 每次均可能拉起窗口、重复启动应用，并导致向量召回失败。

#### 长上下文自动压缩失效

- **PR：[#3014](https://github.com/netease-youdao/LobsterAI/pull/3014)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** 约 40 万 token 文档进入快速会话后，使用量可能持续超过窗口限制，影响稳定性、成本和模型响应质量。

#### DSH 退出后残留进程与端口占用

- **PR：[#3008](https://github.com/netease-youdao/LobsterAI/pull/3008)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** macOS 重启后 DSH 状态显示不一致，残留进程持续监听端口。

#### DSH 插件安装失败

- **PR：[#3007](https://github.com/netease-youdao/LobsterAI/pull/3007)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** GUI 启动环境中因找不到 `pnpm`，多数用户无法安装插件。

### 中

#### OpenClaw 退出登录后的配置收缩失败

- **PR：[#3012](https://github.com/netease-youdao/LobsterAI/pull/3012)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** `openclaw.json` 大幅缩减时被写入安全机制拒绝，用户可能需要重启 Gateway 才能恢复配置同步。

#### 打包环境下安装路径未同步

- **PR：[#3010](https://github.com/netease-youdao/LobsterAI/pull/3010)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** 共用配置目录、重装或应用迁移后可能指向错误安装路径。

#### Cowork 图片消息复制丢失附件

- **PR：[#3009](https://github.com/netease-youdao/LobsterAI/pull/3009)**
- **状态：已关闭，按数据视为已合并或完成处理**
- **影响：** 带图片消息复制后仅保留文字，影响内容复用。

### 低

- **[#3011](https://github.com/netease-youdao/LobsterAI/pull/3011)**：Gateway Bundle 缺少 `build-info.json`，可能导致启动迁移检查异常。**已有修复 PR，已关闭。**
- **[#3006](https://github.com/netease-youdao/LobsterAI/pull/3006)**：macOS 桌面伴侣面板重开后焦点异常并立即关闭。**已有修复 PR，已关闭。**
- **[#3005](https://github.com/netease-youdao/LobsterAI/pull/3005)**：划词功能触发登录后无法继续原请求。**已有修复 PR，已关闭。**
- **[#3003](https://github.com/netease-youdao/LobsterAI/pull/3003)**：macOS 全屏应用上的任务卡片遮挡及隐藏窗口跳动。**已有修复 PR，已关闭。**
- **[#3002](https://github.com/netease-youdao/LobsterAI/pull/3002)**：Windows 启动阶段多次同步拉起外部进程，造成不必要的启动开销。**已有修复 PR，已关闭。**

---

## 6. 功能请求与路线图信号

### 6.1 无需账号的并行 Web 搜索

- **PR：[#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)**

该 PR 提议在内置 Web Search Skill 中加入 Parallel 引擎的匿名模式，用户无需账号、API Key 或浏览器连接即可使用，但使用 Fast 模式并受速率限制。

**路线图判断：**

- 符合降低工具使用门槛、增强搜索供应商可选性的方向；
- 可作为现有 Web Search Skill 的增量功能纳入后续版本；
- 但 PR 今日关闭，需确认是被替代、暂缓，还是已通过其他提交合入。

### 6.2 账号封禁自助诊断与申诉能力

- **Issue：[#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)**

用户反馈表明，账号被禁用时客户端只有失败提示，缺少：

- 禁用原因；
- 违规条款或风险行为说明；
- 申诉入口；
- 申诉处理状态；
- 本地代理等场景下的合规使用边界。

**路线图判断：**

短期更可能由客服或风控流程处理，而非直接纳入客户端功能。若问题反复出现，可考虑增加“账号状态诊断与申诉指引”，降低重复工单量。

### 6.3 跨版本安装路径与配置迁移

今日以下修复共同反映了配置兼容需求：

- **[#3010](https://github.com/netease-youdao/LobsterAI/pull/3010)**：安装路径同步；
- **[#3011](https://github.com/netease-youdao/LobsterAI/pull/3011)**：Gateway 构建信息定位；
- **[#3012](https://github.com/netease-youdao/LobsterAI/pull/3012)**：配置缩减与写入保护；
- **[#3007](https://github.com/netease-youdao/LobsterAI/pull/3007)**：内置 pnpm 插件安装。

这些变更很可能进入下一稳定版本。升级用户应关注旧配置目录、重装路径、Gateway 配置及 DSH 插件环境的兼容性。

---

## 7. 用户反馈摘要

### 已确认的真实痛点

1. **账号被禁用后无法理解原因和恢复路径**  
   来源：[Issue #2940](https://github.com/netease-youdao/LobsterAI/issues/2940)。用户并非强调功能缺失，而是强调账号状态不透明：知道已经停止代理、清理 Token，但不知道哪些行为触发了风控，也无法从客户端获得申诉指引。

2. **长文档会话可能突破上下文限制**  
   来源：[PR #3014](https://github.com/netease-youdao/LobsterAI/pull/3014)。用户观察到上下文占用始终为 100%、用量持续增长，自动压缩未生效，这会直接影响长文档处理的可靠性与成本。

3. **向量记忆在 Windows 上不可用**  
   来源：[PR #3013](https://github.com/netease-youdao/LobsterAI/pull/3013)。记忆搜索不仅召回失败，还会拉起窗口甚至启动第二应用实例，属于明显的功能性和体验双重问题。

4. **带图片消息复制后附件丢失**  
   来源：[PR #3009](https://github.com/netease-youdao/LobsterAI/pull/3009)。用户复制 Cowork 消息后只能得到文本，需要再次处理图片，降低了消息复用效率。

5. **DSH 插件安装与残留进程影响使用连续性**  
   来源：[PR #3007](https://github.com/netease-youdao/LobsterAI/pull/3007)、[PR #3008](https://github.com/netease-youdao/LobsterAI/pull/3008)。插件安装失败、退出后后台进程残留，会让用户无法稳定使用内置工作台。

### 满意度信号

本次数据未提供新增点赞数据，Issue 点赞也为 0，无法据此量化总体满意度。已关闭 PR 数量较多、用户场景描述较具体，说明核心维护者对问题响应积极；但这些变更是否已进入可供用户下载的正式版本，仍需等待 Release 验证。

---

## 8. 待处理积压

### 8.1 待合并安全 PR

- **[#2798](https://github.com/netease-youdao/LobsterAI/pull/2798)**  
  开放时间自 2026-10-05 起，涉及 OAuth Token 日志脱敏、符号链接隔离和 OpenClaw 代理认证。  
  **建议：** 优先完成安全审查、测试与合并，并确认历史诊断日志是否需要清理或提示用户删除。

### 8.2 长期开放的账号申诉 Issue

- **[#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)**  
  开放约 11 天，已有 2 条评论，但尚无公开处理结论。  
  **建议：** 明确风控判定依据、申诉审核状态和预计响应时间，避免用户重复提交。

### 8.3 历史功能 PR 状态需复核

- **[#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)**  
  创建于 2026-09-21，今日关闭。虽然方向符合零配置搜索需求，但应确认是否被替代或已实际合入主线。

### 8.4 贡献与审核集中风险

今日 14 个已关闭 PR 中，绝大多数来自同一维护者 `@fisherdaddy`。这体现了快速处理能力，但也意味着：

- 缺少第二维护者对跨平台行为进行独立复核；
- Windows、macOS、Linux 的验证可能不均衡；
- 安全 PR 与大量常规修复同时堆积时，容易出现审核带宽不足。

建议对 [#3013](https://github.com/netease-youdao/LobsterAI/pull/3013)、[#3014](https://github.com/netease-youdao/LobsterAI/pull/3014)、[#3007](https://github.com/netease-youdao/LobsterAI/pull/3007) 等跨平台高影响变更增加回归测试覆盖。

---

## 今日结论

LobsterAI 今日开发活动较强，修复方向明确且集中在真实用户痛点，尤其是 **长上下文压缩、向量记忆、DSH 生命周期、OpenClaw 配置安全和桌面跨平台体验**。项目当前没有新版本发布，用户侧收益预计需等待下一批 Release；维护者应优先推动安全 PR [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798) 合并，并为账号申诉 Issue [#2940](https://github.com/netease-youdao/LobsterAI/issues/2940) 给出明确结论。综合评估，今日项目健康度为 **良好，稳定性持续改善，但发布与沟通闭环仍需加强**。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-11-06**  
**数据范围：过去 24 小时 GitHub Issue / PR 更新**

---

## 1. 今日速览

过去 24 小时项目共更新 **16 条 Issue**、**38 条 PR**，其中 Issue 新开或保持活跃 **9 条**、关闭 **7 条**，PR 待合并 **20 条**、合并或关闭 **18 条**；整体保持较高开发活跃度，但质量治理压力仍在。  
今日工作重点集中在 **Console 交互与渠道稳定性、Memory/ReMe、插件与 Creator、跨平台兼容** 四条主线，38 条 PR 中已有近半进入合并或关闭状态。  
多项用户可见问题已出现对应修复，包括 `/clear` 状态残留、SSE 经 Nginx 缓冲、ReMe reranker 空密钥、Matrix Windows 迁移以及插件设置页导航等。  
与此同时，Embedding 批处理静默漏掉超限分块、Memory 标签索引不可用、Creator 审核无法判定等高影响问题仍未关闭，显示 **核心链路可靠性尚未完全收敛**。  
今日没有发布新版本，因此修复能否进入正式发行仍取决于后续合并和发版节奏。

**活跃度评估：较高，但 Bug 密度偏高。**  
PR 数量显著高于 Issue 数量，且多数 PR 有明确问题映射，说明团队响应和修复产出积极；但仍有多项影响数据完整性、插件安装、Creator 工作流和跨平台部署的开放问题。

---

## 3. 项目进展

> 今日无新版本发布，因此本节主要汇总已合并或关闭的重要 PR。

### 3.1 Console、SSE 与对话状态

- **SSE 经 Nginx 代理时首事件被缓冲**  
  PR [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522) 已关闭，为 `/api/console/chat` 的 SSE 响应补充 `X-Accel-Buffering: no`，与其他 SSE 接口保持一致。  
  这解决了反向代理下首包延迟、界面长时间无响应的部署问题。

- **插件页面丢失“设置”侧边导航**  
  PR [#8593](https://github.com/agentscope-ai/QwenPaw/pull/8593) 已关闭，修复插件注册的设置菜单与路由被导航状态重置的问题，对应 Issue [#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590)。

- **`/clear` 后重新打开会话仍显示旧命令气泡**  
  PR [#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600) 仍在审核中，针对 Issue [#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596) 清理重置会话的缓存消息，避免遮挡空状态欢迎语。

### 3.2 Memory 与 ReMe

- **ReMe reranker 空 API Key 被误判为可用**  
  PR [#8291](https://github.com/agentscope-ai/QwenPaw/pull/8291) 已关闭，启用条件改为要求非空凭据，并改善错误提示，对应 Issue [#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276)。  
  该修复降低了“配置看似成功、运行时才抛出 unexpected error”的故障成本。

- **Embedding 单项超限导致整批静默失败**  
  PR [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) 已关闭，重点限制单次请求中的内联媒体总量；Issue [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) 仍开放。  
  后者明确指出单个 CJK 分块超过供应商单条 token 限制时，可能使整批 embedding reindex 失败，尽管循环日志仍显示 `processed=126/126`，属于数据完整性高风险问题。

### 3.3 渠道与消息渲染

- **Matrix 在 Windows 迁移时保留 ADS 数据**  
  PR [#8599](https://github.com/agentscope-ai/QwenPaw/pull/8599) 已关闭，修复 Python 3.11 下身份数据库和信任状态文件迁移后未复制到目标作用域名称的问题。  
  这有助于减少 Windows Matrix 加密迁移造成的测试失败和信任数据丢失风险。

- **渠道响应策略缓存反序列化后报错**  
  PR [#8564](https://github.com/agentscope-ai/QwenPaw/pull/8564) 已关闭，避免 JSON 往返后列表形式的缓存项被当作对象使用，降低渠道插件运行时出现属性访问异常的概率。

- **CJK Markdown 强调符边界修复**  
  PR [#8067](https://github.com/agentscope-ai/QwenPaw/pull/8067) 已关闭，修复模型输出中中文句末标点被错误纳入粗体范围的问题，改善渠道消息展示一致性。

- **DingTalk AI 卡片中的 Markdown 表格识别**  
  PR [#8601](https://github.com/agentscope-ai/QwenPaw/pull/8601) 今日新建，目标是让紧邻正文出现的管道表格不再被渲染为普通段落。该 PR 尚待审核。

### 3.4 安装、模型与平台兼容

- **Ollama 模型在激活前自动发现**  
  PR [#8309](https://github.com/agentscope-ai/QwenPaw/pull/8309) 已关闭，`qwenpaw init`、模型配置及设置流程会先查询 Ollama 已安装模型，再让用户选择，避免手工输入错误。对应离线部署问题见 Issue [#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453)。

- **Windows Hub Local 技能暂存目录权限修复**  
  PR [#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568) 仍在审核中，将技能副本暂存到目标 workspace 内，以规避 AppContainer 临时目录 DACL 导致默认技能无法安装的问题。

- **浏览器生命周期测试稳定性优化**  
  PR [#8589](https://github.com/agentscope-ai/QwenPaw/pull/8589) 已关闭，对浏览器 worker 启动和异步清理相关测试进行预热及同步处理，降低测试竞态导致的假失败。

**整体推进判断：**  
今日 PR 覆盖面较广，已关闭的 18 条 PR 对 Console 代理部署、渠道迁移、Memory 凭据校验、Markdown 渲染和测试稳定性均有实质推进。不过，部分核心问题仍停留在开放状态或等待审核，正式版本收益尚未完全兑现。

---

## 4. 社区热点

> 今日 Issue 更新中，评论最多的是 #8040、#8596、#8276、#3570，均为 **4 条评论**；以下按评论量和影响范围整理。

### 4.1 Embedding reindex 静默漏批

- Issue：[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)
- 状态：开放；8 条评论
- 热度：更新列表中评论最多，且属于长期复现问题

用户通过真实供应商回放确认：单个 CJK chunk 超过 provider 单项 token 上限时，会导致整批处理失败，但批处理循环仍打印全部成功。该问题使日志状态与真实索引结果不一致，可能造成记忆检索缺失、召回下降，甚至在不明显报错的情况下形成长期数据缺口。

**核心诉求：** 不只是处理单条超限内容，而是保证“部分失败可见、批次状态真实、失败项可重试”。

### 4.2 `/clear` 后会话空状态错误

- Issue：[#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596)
- 对应 PR：[#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600)
- 状态：开放；4 条评论；已有修复 PR

用户反馈 `/clear` 会话在当前页面看似正常，但切换会话再返回或刷新后，旧的 `/clear` 消息重新出现，并遮蔽空会话欢迎语。场景明确、复现稳定，已有针对性 PR，预计是近期可合并的 UI 状态修复。

### 4.3 ReMe reranker 凭据校验

- Issue：[#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276)
- 对应 PR：[#8291](https://github.com/agentscope-ai/QwenPaw/pull/8291)
- 状态：Issue 已关闭；4 条评论；PR 已关闭

用户希望 reranker 在启用时即校验 API Key，而不是运行后才显示模糊错误。对应修复已关闭，热点已从问题确认进入修复落地阶段。

### 4.4 “All Chats”缺少分页

- Issue：[#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570)
- 状态：开放；4 条评论

随着聊天数量增长，右上角“All Chats”一次性加载全部会话，导致性能和操作体验下降；用户还指出 control sessions 分页疑似失效。其诉求不仅是增加分页，还包括修复分页本身、明确排序和加载策略。

### 4.5 Creator 审核流程无法完成

- Issue：[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)
- 状态：开放；2 条评论

报告集中了三个 Creator 后端缺陷：审核轮次因 artifact reference 缺少 ID 始终返回 422、过期 `source_url` 返回 502、`frame_stats` 未读取 `CREATOR_FFMPEG_PATH`。其中审核无法决定属于工作流硬阻塞，直接影响 Creator 的可用性和自动化验收。

---

## 5. Bug 与稳定性

以下按影响程度排列，并区分“已有明确修复 PR”和“暂无明确修复”。

### 严重

1. **Embedding reindex 批次静默失败**  
   Issue：[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)  
   - 单个 CJK chunk 超限可能拖垮整批。  
   - 日志却报告全部处理成功，可能造成索引不完整且无显式告警。  
   - **修复 PR：未发现明确对应 PR。** 虽与 #8034 的请求体积治理相关，但问题根因是 provider 单项 token 限制，不能视为已解决。

2. **Creator 审核轮次永久无法判定**  
   Issue：[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)  
   - REJECT 因缺少 artifact reference ID 持续返回 422。  
   - 同时伴随过期资源 502 与 FFmpeg 环境变量未生效。  
   - **修复 PR：暂未发现明确对应 PR。**

3. **Memory 标签已生成但索引不可读**  
   Issue：[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)  
   - `/memory/tags` 返回 503：`Memory tag index is unavailable`。  
   - 用户已确认配置开启且落盘正确，问题集中在索引重建或读取链路。  
   - **修复 PR：暂未发现明确对应 PR。**

4. **Matrix 多 workspace 插件无法激活**  
   Issue：[#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)  
   - 多个 workspace 同时启用 Matrix 时，10 秒共享启动窗口只覆盖第一个实例，其余账号无法上线。  
   - **修复 PR：未发现明确对应 PR。**

### 较高

5. **官方 `qwenpaw-creator` 插件安装失败**  
   Issue：[#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)  
   - 扩展 UI 与 CLI 均报 `No package metadata was found`。  
   - 影响官方插件分发和安装可信度。  
   - **修复 PR：暂未发现明确对应 PR。**

6. **Windows `recall_history` 失效**  
   Issue：[#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)  
   - workspace 路径规范化成 `\\?\` 扩展长度路径后，SQLite 只读 URI 无法打开。  
   - 影响 Windows 桌面端的会话历史检索。  
   - **修复 PR：暂未发现明确对应 PR。**

7. **Provider 模型配置写入缺少边界校验**  
   Issue：[#8550 对应 PR](https://github.com/agentscope-ai/QwenPaw/pull/8550)  
   - `thinking_budget`、`max_input_length` 等约束未在写入路径执行。  
   - **修复 PR：有，[#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)，待审核。**

8. **运行时媒体能力判断与模型目录不一致**  
   PR：[#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100)  
   - 原始 provider 记录与解析后的能力元数据不一致，可能移除实际支持的图片内容。  
   - **修复 PR：有，待审核。**

### 中等

9. **Nginx 下 Console SSE 首事件缓冲**  
   Issue：[#8516](https://github.com/agentscope-ai/QwenPaw/issues/8516)  
   PR：[#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522)  
   - **已有修复 PR，PR 已关闭；需确认是否已纳入后续版本。**

10. **ReMe reranker 空密钥延迟报错**  
    Issue：[#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276)  
    PR：[#8291](https://github.com/agentscope-ai/QwenPaw/pull/8291)  
    - **已有修复 PR，Issue 与 PR 均已关闭。**

11. **`/clear` 后旧消息重新出现**  
    Issue：[#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596)  
    PR：[#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600)  
    - **已有修复 PR，待审核。**

12. **插件设置页导航退回会话列表**  
    Issue：[#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590)  
    PR：[#8593](https://github.com/agentscope-ai/QwenPaw/pull/8593)  
    - **已有修复 PR，PR 已关闭。**

13. **Matrix Windows 加密迁移数据问题**  
    PR：[#8599](https://github.com/agentscope-ai/QwenPaw/pull/8599)  
    - **已有修复 PR，PR 已关闭。**

14. **新任务 workspace 选择未传递给后续消息**  
    Issue：[#8555](https://github.com/agentscope-ai/QwenPaw/issues/8555)  
    - **修复 PR：数据中未显示明确对应项。**

---

## 6. 功能请求与路线图信号

### 6.1 会话搜索能力——较高概率进入下一阶段

- PR：[#8367](https://github.com/agentscope-ai/QwenPaw/pull/8367)
- Issue：[#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570)

PR #8367 提议加入关键词搜索和 agentic conversation search，直接解决“自动标题无法命中用户记忆中的关键词”这一问题。它与 #3570 提出的会话列表规模和分页需求共同构成会话管理能力升级方向。

**判断：**  
关键词搜索已有大型 PR 在审；agentic 搜索涉及成本、延迟和模型调用策略，更可能先以实验性或可选能力发布。会话分页很可能与列表虚拟化、搜索入口一起进入后续版本。

### 6.2 Console 模型池支持删除——较明确

- PR：[#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410)
- 目标 Issue：[#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)

Console 模型池目前只能启用/停用，无法移除过时或 provider 管理的条目。PR #8410 已复用删除 API 并加入确认步骤，功能边界清晰，**进入下一版本概率较高**。

### 6.3 Creator 专用 UI 与多模型凭据设计——需求明确，但落地不确定

- Issue：[#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591)

用户提出三类诉求：

- 修复按钮与背景同色导致不可辨识；
- 明确“已启动/运行中”和开关状态之间的关系；
- 允许图片模型、视频模型与 LLM 使用不同 API Key，而不是强制共用一套凭据。

**判断：**  
UI 可读性和状态反馈适合较快修复；多模型独立凭据涉及配置结构、插件协议和向后兼容，预计需先做配置层设计。

### 6.4 OpenViking 长期记忆后端——方向讨论阶段

- Issue：[#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252)
- 状态：已关闭

用户希望基于现有 `BaseMemoryManager` / `MemoryMiddleware` 架构接入 OpenViking。该 Issue 已关闭，说明方向可能已被讨论、调整或转入其他工作项，但当前没有可直接确认的 OpenViking 实现 PR。

### 6.5 插件依赖检查重构——基础设施信号

- PR：[#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598)
- 状态：开放，今日新建，XXL

该 PR 聚焦插件依赖检查重构，与 `qwenpaw-creator` 安装失败 Issue [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595) 高度相关。虽然摘要未明确声明一一对应，但依赖检查、包元数据识别和安装流程可能成为近期插件系统治理重点。

### 6.6 本地模型上下文窗口识别——必要性高

- PR：[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)
- 状态：开放

该 PR 计划从 Ollama 的 `num_ctx` 获取上下文窗口，而不是套用 128k 默认值。对于本地小上下文模型，这能避免错误估算可用上下文并减少截断，属于本地 AI 助手可靠性的基础能力，**具备进入后续版本的合理优先级**。

### 6.7 中文编码与工具兼容性——长期价值明确

- PR：[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)
- 状态：开放

针对中文 Windows 环境下 GBK/CP936 文件被按 UTF-8 解码并静默丢弃字节的问题，PR 计划让 `read`、`edit`、`grep` 正确识别编码。该改进与国内个人用户、小型办公文件和本地知识库场景高度相关，但因涉及文件读写安全边界，预计还需充分测试。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **长期记忆的可靠性高于功能数量**  
   用户同时反馈 embedding 重建不完整、Memory tag 索引 503、reranker 空密钥和 OpenViking 后端需求，表明长期记忆已成为高频使用场景。  
   但当前“配置成功、索引不可用、批次假成功”会削弱用户对 AI 记忆能力的信任。  
   相关链接：[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)、[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)、[#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276)、[#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252)。

2. **Windows 桌面部署和多渠道接入是实际部署痛点**  
   Windows 路径兼容、Matrix 多 workspace 启动、Hub Local 技能安装、GBK 文件读取，以及钉钉、QQ、Matrix 等渠道问题同时出现，说明项目已深入多渠道、多平台使用阶段。  
   相关链接：[#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)、[#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)、[#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568)、[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)。

3. **用户希望模型和插件配置更加可视化、可控**  
   模型池无法移除、Creator 状态不清、插件安装失败、插件页面导航丢失，表明用户正在把 QwenPaw 当作长期运行的个人 AI 工作台，而不只是命令行工具。  
   相关链接：[#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410)、[#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)、[#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590)、[#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591)。

### 满意与积极反馈

- 用户能够提供较完整的复现步骤、环境版本、配置读回结果及跨版本验证，帮助维护者快速定位问题。
- 多个问题已较快形成对应 PR，说明 Issue 到修复的链路较顺畅。
- 用户对项目能力的期待已从基础聊天扩展到长期记忆、插件生态、Creator 内容生产和多渠道机器人，反映整体采用意愿较强。

### 主要不满意点

- **错误信息不透明**：reranker 只报 `unexpected error`，embedding 批次日志与真实结果不一致。
- **配置成功不等于功能可用**：Memory 标签配置正确但索引 503，Matrix 配置启用但账号不上线。
- **跨平台细节仍不稳定**：Windows 路径、AppContainer 权限、GBK 编码等反复出现。
- **核心 UI 状态不可信**：`/clear` 后旧消息复现、Creator 运行状态与开关混淆。
- **历史会话管理能力不足**：大量会话一次加载、缺少关键词与 agentic 搜索。

---

## 8. 待处理积压

### 8.1 高优先级长期问题

1. **Embedding 超限导致批次静默失败**  
   Issue：[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)  
   创建于 2026-09-30，已有 8 条评论，明确属于 #5950 的复发。当前没有直接对应的明确修复 PR，且问题会造成隐性数据缺失，建议优先处理。

2. **“All Chats”分页与 control sessions 分页异常**  
   Issue：[#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570)  
   创建于 2026-04-19，已积累 4 条评论。虽然会话搜索 PR [#8367](https://github.com/agentscope-ai/QwenPaw/pull/8367) 正在推进，但分页问题仍应单独验收。

3. **OpenViking 长期记忆后端方向**  
   Issue：[#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252)  
   已关闭，但建议在路线图中明确“已接受、延后或替代方案”，避免用户误以为该能力已规划进入近期版本。

### 8.2 长期开放且影响核心链路

4. **Memory 标签索引不重建**  
   Issue：[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)  
   影响 `/memory/tags` 的完整可用性，当前无明确修复 PR。

5. **Windows 历史召回路径兼容**  
   Issue：[#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)  
   在 2.3.0-beta.1 与 2.2.x 均出现，说明不是单版本回归，应尽快形成跨版本修复。

6. **Creator 审核、过期资源和 FFmpeg 配置问题**  
   Issue：[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)  
   建议至少先拆分三个可独立验收的问题；否则审核硬阻塞可能掩盖另外两项修复。

### 8.3 审核队列压力

7. **插件依赖检查重构 XXL PR**  
   PR：[#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598)  
   今日新建且改动量大，关联官方插件安装失败风险 [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)，需要重点评审。

8. **对话搜索 XXL PR**  
   PR：[#8367](https://github.com/agentscope-ai/QwenPaw/pull/8367)  
   功能价值高，但涉及搜索索引、agentic 查询成本和延迟，应明确 MVP 范围与降级策略。

9. **GBK/CP936 工具链兼容 XXL PR**  
   PR：[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)  
   涉及编码探测、编辑写回及可能的数据损坏风险，合并前需确认不会错误重写原文件编码。

10. **Ollama 上下文窗口识别**  
    PR：[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)  
    自 2026-10-14 创建以来仍在审核，建议补充不同 Ollama 版本、`num_ctx` 未配置和代理场景的测试。

---

## 日报结论

QwenPaw 今日整体呈现 **“高修复产出、核心稳定性仍待收敛”** 的状态。Console、渠道和配置层已有不少修复落地，PR 响应也较积极；然而，Embedding 静默漏批、Memory 标签索引、Creator 审核和 Windows 兼容仍构成明显风险。

短期应优先确保以下问题获得明确修复 PR、回归测试和版本归属：

- [Embedding reindex #8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)
- [Memory tag index #8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)
- [Creator review #8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)
- [Windows recall_history #8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)
- [Creator plugin install #8595](https://github.com/agentscope-ai/QwenPaw/issues/8595)

在这些问题闭环前，项目健康度可评价为 **活跃度较高、修复响应良好，但生产可靠性与版本发布节奏存在明显风险**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-11-06**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases**

---

## 1. 今日速览

过去 24 小时 Hermes Agent 共更新 **50 条 Issue**（49 条活跃、1 条关闭）和 **50 条 PR**（48 条待合并、2 条关闭），开发与社区反馈均保持高频。期间发布 **v0.23.0 “The Hearth Release”**，但该版本自 v0.22.0 累积规模巨大，仍需重点关注升级兼容、状态迁移和多网关拓扑问题。Issue 热点主要集中在 **Desktop 交互可靠性、Gateway 多 Profile 会话管理、旧状态库升级兼容及 Windows 安装稳定性**；PR 则集中于 Gateway 事件循环、插件注册表、模型下载恢复和技能工具链。整体活跃度很高，但当前呈现“**版本发布快、回归与兼容性债务集中暴露**”的状态，合并吞吐和修复验证仍需观察。

**项目健康度评估：活跃度高，但升级稳定性承压。**

---

## 2. 版本发布

### [v0.23.0 — The Hearth Release](https://github.com/NousResearch/hermes-agent/releases)

- **发布日期：** 2026-11-05
- **相较 v0.22.0：**
  - 约 **10,080 commits**
  - 约 **1,950 merged PRs**
  - 约 **8,720 files changed**
  - 约 **725,200 insertions / 201,400 deletions**
  - 约 **850 issues closed**
  - **666 contributors**

这是规模很大的版本迭代，覆盖 Gateway、Desktop、会话状态、插件、技能、本地模型及多 Profile 架构等核心区域。

#### 重点更新方向

从今日 Issue 与 PR 可以确认，v0.23.0 前后正在集中推进以下工作：

- Gateway 向统一会话权威迁移，逐步让 CLI、Desktop、Web、远程入口使用同一套 Gateway session authority。
- 多 Profile Gateway 的状态隔离、所有权检查、checkpoint 清理和活跃 Agent 状态发布。
- Desktop 会话切换、模型切换、中途 steer 投递、置顶会话及焦点行为修复。
- 插件注册体系统一，将 Dashboard Auth、Secret Source 等接入 `ProviderRegistry`。
- 插件结果过滤钩子、Computer Use 状态验证、原生媒体表面等扩展能力。
- 本地模型下载中断恢复，以及缺失 GGUF、断链软链接和分片模型的容错。
- 技能补丁预览与实际写入行为保持一致。
- ACP 内置工具调用补充原始输入。
- Cron 投递原生审批按钮、Hosted Rooms 的 peer/RoomLink 支持。

#### 潜在破坏性变更与迁移风险

虽然 Release Notes 摘要未完整展示 breaking changes，但以下问题横跨多个版本，升级时需重点验证：

1. **旧版 `state.db` 升级兼容性**
   - 旧库缺少 `INTEGER PRIMARY KEY id` 时，新写入记录可能出现 `NULL id`，进而令压缩流程触发 `int(None)` 并耗尽重试。
   - 详见 [#148742](https://github.com/NousResearch/hermes-agent/issues/148742)。

2. **Standalone 与 Gateway 拓扑切换**
   - Browser Dashboard、Desktop URL、Cloud、SSH 模式正在切换至 Gateway session authority。
   - 旧有 `hermes serve` 独立状态模型与统一 Gateway 模型之间可能出现 ownership、maintenance 或 backfill 冲突。
   - 详见 [#145171](https://github.com/NousResearch/hermes-agent/issues/145171) 与 [#148531](https://github.com/NousResearch/hermes-agent/issues/148531)。

3. **Windows 安装和更新路径**
   - 更新中断可能留下空 venv，继而造成 Gateway 重启死锁和 Desktop 启动循环。
   - 超过 260 字符的路径仍可能在文件复制、遍历、摘要和删除操作中失败。
   - 详见 [#149520](https://github.com/NousResearch/hermes-agent/issues/149520) 与 [#130242](https://github.com/NousResearch/hermes-agent/issues/130242)。

4. **会话所有权与委派任务隔离**
   - Batch `delegate_task` 可能锁定父会话恢复能力。
   - 多 Profile 状态库仍需更严格的 fencing。
   - 详见 [#149237](https://github.com/NousResearch/hermes-agent/issues/149237)、[#149132](https://github.com/NousResearch/hermes-agent/pull/149132)。

#### 升级建议

- 升级前备份 `state.db`、各 Profile 的 `HERMES_HOME` 及相关配置。
- 大版本部署优先使用新 Profile 或可回滚环境验证，避免直接在唯一生产实例上原地升级。
- 对旧数据库执行 schema 检查，确认 `messages`、`sessions` 等表的主键和索引结构。
- Windows 环境启用 Long Path 支持，并验证更新中断后的恢复流程。
- 多 Profile Gateway 重点测试会话归属、后台任务、文件同步和 checkpoint 清理。

---

## 3. 项目进展

### 今日已关闭的重要 PR

#### 1. [插件最终工具结果过滤 #149869](https://github.com/NousResearch/hermes-agent/pull/149869)

新增可选 `filter_tool_result` 插件钩子，在共享最终执行器提交阶段处理结果，使插件可以在结果写入 spill file、模型上下文和 UI 前统一检查或改写输出。

**推进意义：**

- 提升插件对输出审计、脱敏、格式转换和合规控制的扩展能力。
- 覆盖 registry/inline 工具、错误、超时与取消结果，减少各工具单独实现钩子的成本。

#### 2. [插件目录新增 Zaprite #149875](https://github.com/NousResearch/hermes-agent/pull/149875)

新增支付插件目录项，支持从聊天创建结账链接，并通过“新鲜审批门控”限制支付操作。

**推进意义：**

- Hermes 的插件生态开始从通用工具扩展到真实支付场景。
- 审批机制是交易类插件安全接入的关键控制点。

> 今日仅明确展示 2 条关闭 PR，因此不宜将关闭数量等同于全部已合并成果；48 条 PR 仍待处理。

### 高价值待合并 PR

#### 1. [停止 admission-history 扫描阻塞 Gateway 事件循环 #141125](https://github.com/NousResearch/hermes-agent/pull/141125)

此前每次原生 admission 和 watch injection 都会在事件循环线程中读取并解码完整 `session_admissions` 历史，可能造成 Gateway 卡顿。

**预期收益：**

- 直接改善高并发、多会话 Gateway 的尾延迟和响应稳定性。
- 是当前优先级较高的稳定性修复。

#### 2. [跨 Profile Store 增加 Session Ownership Fencing #149132](https://github.com/NousResearch/hermes-agent/pull/149132)

针对跨 Profile 状态库的所有权隔离进行强化；当前版本说明仍显示验收待定，且未宣称完整仓库测试全绿。

**推进意义：**

- 对统一 Gateway session authority 迁移至关重要。
- 建议在完整测试通过后尽快合入。

#### 3. [移除 GatewayRunner 中 8 个遗留 SessionState 视图 #149880](https://github.com/NousResearch/hermes-agent/pull/149880)

`SessionState` 已替代约 19 个 GatewayRunner 中的 per-session dict，但旧视图仍保留，导致同一状态存在双路径访问。

**推进意义：**

- 降低状态一致性问题和并发竞态风险。
- 是多 Profile 和会话状态统一的重要清理工作。

#### 4. [Dashboard Auth 与 Secret Source 注册迁移至 ProviderRegistry #149879](https://github.com/NousResearch/hermes-agent/pull/149879)

将两个注册体系统一到插件后端所使用的 `ProviderRegistry`，支持全局与 Profile 级注册、卸载、保存和恢复。

**推进意义：**

- 减少插件注册机制分叉。
- 为插件卸载、Profile 隔离和运行时凭据管理提供一致基础。

#### 5. [本地模型下载在持续故障后恢复 #144313](https://github.com/NousResearch/hermes-agent/pull/144313)

改变“连续四次失败即终止”的逻辑，使支持续传的模型下载保留进度，并针对瞬时网络故障持续重试。

**推进意义：**

- 降低大模型下载因短时断网而完全失败的概率。
- 对云端环境和不稳定网络尤其有价值。

#### 6. [技能完整重写时显示真实 Diff #149878](https://github.com/NousResearch/hermes-agent/pull/149878)

此前 `/skills diff` 对完整重写显示“patch would fail”，但批准后实际会整体重写。修复后预览与实际应用一致。

**推进意义：**

- 降低技能审批过程中的误导和安全风险。
- 对技能写入审计尤其重要。

#### 7. [Gateway 心跳重新发布实时 active_agents #149877](https://github.com/NousResearch/hermes-agent/pull/149877)

`gateway_state.json` 中的 `active_agents` 原先只在消息轮次边界更新；现在由运行时心跳周期性重新发布实时值。

**推进意义：**

- 改善 Dashboard 活跃任务状态准确性。
- 对长时间无消息轮次的任务监控尤其重要。

#### 8. [本地模型接口容忍缺失 GGUF 和断链 #149873](https://github.com/NousResearch/hermes-agent/pull/149873)

避免断开的模型盘符或不可用分片令 `/api/local-models/status` 抛出 `FileNotFoundError`，并修正分片模型大小显示。

**推进意义：**

- 避免 Local Models 页面长期停留在 loading。
- 提升外接盘、拆分模型和部分离线场景的容错能力。

#### 9. [Email 读取指定 UID 的 FETCH Reply #149874](https://github.com/NousResearch/hermes-agent/pull/149874)

`_imap_payload()` 原先固定读取 `data[0][1]`，可能误取服务器缓冲中的其他 FETCH 响应。该 PR 改为按请求 UID 匹配。

**推进意义：**

- 避免邮件工具读取错信或空回复。
- 对多客户端同时操作邮箱的场景尤其重要。

#### 10. [Computer Use 暴露确定性状态验证 #127158](https://github.com/NousResearch/hermes-agent/pull/127158)

公开 `cua-driver` 的 `verify_state` 判定器，让调用方能够获得 satisfied、unsatisfied 或 unknown 的验证证据。

**推进意义：**

- 提升 Computer Use 的可观测性和可验证性。
- 为自动化 UI 测试及失败恢复提供基础。

---

## 4. 社区热点

### Issues

| 热度 | Issue | 评论 | 核心诉求 |
|---|---|---:|---|
| 1 | [#105758 Lifecycle guard 误拦截 Node.js CLI](https://github.com/NousResearch/hermes-agent/issues/105758) | 25 | 安全守卫应阻止 Gateway 自停，但不能误伤正常 Node.js 命令 |
| 2 | [#122609 Skills index 过期或降级](https://github.com/NousResearch/hermes-agent/issues/122609) | 20 | 自动化 freshness probe 检测到索引超过 26 小时未更新 |
| 3 | [#141973 Desktop 中途发送无法可靠 steer](https://github.com/NousResearch/hermes-agent/issues/141973) | 11 | 消息可能被排队、显示 sent 但未送达，或 Steer 按钮静默失效 |
| 4 | [#145171 入口切换至 Gateway Session Authority](https://github.com/NousResearch/hermes-agent/issues/145171) | 6 | CLI、Desktop、Web、Cloud、SSH 需要统一会话归属和状态 |
| 5 | [#147109 Hosted Rooms 无法使用 Peer Member](https://github.com/NousResearch/hermes-agent/issues/147109) | 5 | canonical gateway 禁用 `room_link`，且未暴露完整 `groups.peer.*` |
| 6 | [#148742 旧 state.db 升级后 NULL id](https://github.com/NousResearch/hermes-agent/issues/148742) | 5 | 老库升级后消息和会话写入失败，压缩流程 `int(None)` |
| 7 | [#78999 Cron 原生审批按钮](https://github.com/NousResearch/hermes-agent/issues/78999) | 4 | Telegram/Discord Cron 投递需要可回传会话的审批按钮 |
| 8 | [#149778 shell.exec 误脱敏结构化插件输出](https://github.com/NousResearch/hermes-agent/issues/149778) | 4 | 32 位十六进制 token 被改写，破坏插件机器解析 |
| 9 | [#148531 Desktop owner-backfill 持续 409](https://github.com/NousResearch/hermes-agent/issues/148531) | 4 | standalone gateway 持有状态时，Desktop 每次启动都触发维护冲突 |

### PRs

| 热度/时效 | PR | 核心内容 |
|---|---|---|
| 高关注 | [#149878 `/skills diff` 展示完整重写](https://github.com/NousResearch/hermes-agent/pull/149878) | 修复技能审批预览与实际写入不一致 |
| 高价值 | [#141125 避免 admission 扫描冻结事件循环](https://github.com/NousResearch/hermes-agent/pull/141125) | 降低 Gateway 高并发卡顿风险 |
| 架构重点 | [#149880 移除 8 个旧 SessionState 视图](https://github.com/NousResearch/hermes-agent/pull/149880) | 消除双重状态访问路径 |
| 架构重点 | [#149879 插件注册表统一](https://github.com/NousResearch/hermes-agent/pull/149879) | 统一认证及密钥来源插件生命周期 |
| 新功能 | [#149882 Gadget 升级至 v0.5.0](https://github.com/NousResearch/hermes-agent/pull/149882) | 增加 Desktop Gadgets 页面及多项改进 |
| 生态扩展 | [#149442 Visor 实时 Agent Canvas](https://github.com/NousResearch/hermes-agent/pull/149442) | Agent 可向无限画布推送结构化可视化内容 |
| 生态扩展 | [#149856 Fledge 插件](https://github.com/NousResearch/hermes-agent/pull/149856) | 面向插件黑客松的技能使用机制 |
| 能力增强 | [#98805 多会话协调技能](https://github.com/NousResearch/hermes-agent/pull/98805) | 基于 SQLite intention board 协调并发会话、子代理和定时任务 |
| 生态扩展 | [#142854 Bark iOS Push 技能](https://github.com/NousResearch/hermes-agent/pull/142854) | 为 iOS 设备提供可选推送通知能力 |

### 热点背后的共同诉求

1. **可靠性必须建立在统一会话权威之上。**  
   Desktop、CLI、Web、SSH 和多 Profile Gateway 正在合并，但 steer、owner-backfill、恢复、模型切换和委派任务仍暴露出状态归属不一致。

2. **用户需要“可见且一致”的系统状态。**  
   活跃任务数、置顶会话、模型切换、Worker 日志、索引新鲜度等都需要准确反馈；“显示已发送但实际未到达”尤其破坏信任。

3. **安全机制需要降低误报。**  
   Lifecycle guard、Threat screen、shell 脱敏分别出现误伤正常 CLI、普通英文词和结构化输出的情况，说明规则需要从字符串匹配转向语义和上下文判断。

4. **插件生态正从工具接入走向平台能力。**  
   支付、实时画布、媒体播放、推送、结果过滤和原生审批按钮，显示 Hermes 正逐渐形成可承载完整工作流的插件运行时。

---

## 5. Bug 与稳定性

### P0 / 阻断级风险

当前数据中未明确标注 P0，但以下问题可能造成数据损坏、会话不可恢复或安装不可用，应按阻断级处理：

1. **[#148742 旧 state.db 升级后产生 NULL-id 行](https://github.com/NousResearch/hermes-agent/issues/148742)**
   - 影响：压缩失败并耗尽重试，可能进一步造成会话状态不可用。
   - Fix PR：今日列表中未见明确对应修复。
   - 优先级：**高，需在 v0.23.0 推广前处理。**

2. **[#149520 更新中断留下空 venv，Gateway/Desktop 启动死锁](https://github.com/NousResearch/hermes-agent/issues/149520)**
   - 影响：升级失败后无法自动恢复，Windows 用户可能需要手动修复安装。
   - Fix PR：未见明确对应 PR。
   - 优先级：**高。**

### P1 / 高严重度

1. **[#141973 Desktop mid-turn steer 不可靠](https://github.com/NousResearch/hermes-agent/issues/141973)**
   - 消息可能排队、未到达 harness，或 Steer 按钮静默无响应。
   - 影响：实时人机协作流程失效。
   - Fix PR：今日展示列表未见明确对应 PR。

2. **[#149237 Batch delegate_task 劫持父会话恢复](https://github.com/NousResearch/hermes-agent/issues/149237)**
   - 父会话进入 `session_read_only` lockout。
   - Fix PR：可能与 [#149132](https://github.com/NousResearch/hermes-agent/pull/149132) 的 ownership fencing 相关，但尚不能确认完全覆盖。

3. **[#148531 owner-backfill 每次 Desktop 启动均 409](https://github.com/NousResearch/hermes-agent/issues/148531)**
   - 反映 standalone/统一 Gateway 拓扑切换中的所有权冲突。
   - Fix PR：可关注 [#149132](https://github.com/NousResearch/hermes-agent/pull/149132) 和 [#145171](https://github.com/NousResearch/hermes-agent/issues/145171)。

4. **[#145381 Desktop transport retry 重跑完整轮次且阻塞事件循环](https://github.com/NousResearch/hermes-agent/issues/145381)**
   - 可能重复执行工具调用，并影响单 Gateway 多 Profile 的整体响应。
   - Fix PR：部分相关工作见 [#141125](https://github.com/NousResearch/hermes-agent/pull/141125)。

### P2 / 中严重度

- **[#149778 shell.exec 对结构化 stdout 强制脱敏](https://github.com/NousResearch/hermes-agent/issues/149778)**  
  插件解析 token 时被截断，可能造成数据损坏或认证失败。未见明确 fix PR。

- **[#147109 Hosted Rooms Peer Member 不可达](https://github.com/NousResearch/hermes-agent/issues/147109)**  
  `room_link` 被硬编码关闭，且 `groups.peer.*` 方法未完整暴露。未见明确 fix PR。

- **[#147026 custom endpoint 在 reasoning replay 时重复字段导致 HTTP 400](https://github.com/NousResearch/hermes-agent/issues/147026)**  
  同时发送 `reasoning` 与 `reasoning_content`，严格主机从第二轮起拒绝请求。未见明确 fix PR。

- **[#135119 Remote backend sync_back 写入默认 Profile](https://github.com/NousResearch/hermes-agent/issues/135119)**  
  多 Profile Gateway 中可能污染默认 Profile 的 skills、usage 和 curator 数据。未见明确 fix PR。

- **[#145267 Multiplexed Gateway 不清理各 Profile checkpoint store](https://github.com/NousResearch/hermes-agent/issues/145267)**  
  长期运行可能积累无用 checkpoint。未见明确 fix PR。

- **[#143004 Managed Worker 日志为空](https://github.com/NousResearch/hermes-agent/issues/143004)**  
  工具轨迹和进度不可见，影响排障与任务透明度。未见明确 fix PR。

- **[#148389 Windows Kanban Worker 启动后不发送模型请求](https://github.com/NousResearch/hermes-agent/issues/148389)**  
  任务持续显示 running，实际无网络连接。未见明确 fix PR。

- **[#147564 Hermes Cloud 出站 TCP 被拒绝](https://github.com/NousResearch/hermes-agent/issues/147564)**  
  Dashboard 登录 503，升级、重置和重启均未解决。可能涉及云端网络策略，而非纯代码回归。未见明确 fix PR。

### P3 / 一般严重度

- **[#105758 Lifecycle guard 误拦截 Node.js CLI](https://github.com/NousResearch/hermes-agent/issues/105758)**：安全规则误报，正常 CLI 无法执行。
- **[#85043 Threat screen 因普通英文单词误封 SOUL.md](https://github.com/NousResearch/hermes-agent/issues/85043)**：关键词规则缺少语义和上下文校验。
- **[#144476 ACP Windows 测试 fixture 路径优先级与 JSON 转义问题](https://github.com/NousResearch/hermes-agent/issues/144476)**：测试环境问题，产品行为据报告正常。
- **[#145453 Desktop 悬停会改变 Session Focus](https://github.com/NousResearch/hermes-agent/issues/145453)**：可能意外触发语音输入或切换会话上下文。
- **[#130242 Windows 长路径失败](https://github.com/NousResearch/hermes-agent/issues/130242)**：影响复制、遍历、摘要、删除和插件安装。
- **[#136324 Qwen3.8 拒绝 max/high reasoning effort](https://github.com/NousResearch/hermes-agent/issues/136324)**：请求返回 500 后触发 fallback。
- **[#149870 Desktop 模型切换不写入 `model_switch` 记录](https://github.com/NousResearch/hermes-agent/issues/149870)**：模型未收到切换通知，GUI 时间线也不显示变更。

---

## 6. 功能请求与路线图信号

### 高概率进入近期版本

1. **Cron 原生审批按钮**
   - 请求：[#78999](https://github.com/NousResearch/hermes-agent/issues/78999)
   - 需求：Telegram Inline Keyboard、Discord Components 点击后回到可继续的 Cron Session。
   - 路线图判断：与 Desktop、Gateway、插件审批体系高度一致，**高概率近期实现**。

2. **Hosted Rooms Peer/RoomLink 支持**
   - 请求：[#147109](https://github.com/NousResearch/hermes-agent/issues/147109)
   - 路线图判断：现有代码已经存在部分 RoomLink v2 和 `groups.peer.*` 实现，更像是配置与暴露层缺口，**实现成本相对可控**。

3. **Gateway 统一 Session Authority**
   - 跟踪项：[#145171](https://github.com/NousResearch/hermes-agent/issues/145171)
   - 相关 PR：[#149132](https://github.com/NousResearch/hermes-agent/pull/149132)、[#149880](https://github.com/NousResearch/hermes-agent/pull/149880)
   - 路线图判断：已有连续架构 PR，**明确属于当前主线**。

4. **本地模型下载恢复与异常文件容错**
   - PR：[#144313](https://github.com/NousResearch/hermes-agent/pull/144313)、[#149873](https://github.com/NousResearch/hermes-agent/pull/149873)
   - 路线图判断：改动边界清晰，**近期合入概率高**。

5. **ACP 内置工具携带 rawInput**
   - 请求：[#149876](https://github.com/NousResearch/hermes-agent/issues/149876)
   - 路线图判断：有助于 ACP 客户端执行策略和安全审查，API 兼容性影响较小，**可能进入下一补丁版本**。

### 中期可能纳入

6. **Desktop 原生媒体表面与播放器 API**
   - 请求：[#144188](https://github.com/NousResearch/hermes-agent/issues/144188)
   - 诉求：应用内视频、可弹出窗口、置顶、全屏，以及聊天与播放器上下文关联。
   - 路线图判断：属于 Desktop 平台化能力，预计先以插件 API 或实验性接口推进。

7. **Kanban 只读 API**
   - 请求：[#149815](https://github.com/NousResearch/hermes-agent/issues/149815)
   - 场景：Hermes Voice、Home Assistant Echo 设备显示实时任务、工具状态和回答。
   - 路线图判断：与第三方语音/IoT 客户端接入需求吻合，但需要先明确 API 稳定性和权限边界。

8. **多会话协调技能**
   - PR：[#98805](https://github.com/NousResearch/hermes-agent/pull/98805)
   - 诉求：通过 SQLite intention board 协调多个会话、子代理、Bot Profile 和定时任务。
   - 路线图判断：作为可选 Skill 风险较低，**适合独立发布**。

### 插件生态方向

- [Visor](https://github.com/NousResearch/hermes-agent/pull/149442)：实时 Agent Canvas。
- [Fledge](https://github.com/NousResearch/hermes-agent/pull/149856)：技能使用与反馈机制。
- [Gadget v0.5.0](https://github.com/NousResearch/hermes-agent/pull/149882)：Desktop Gadgets 页面。
- [Bark iOS Push](https://github.com/NousResearch/hermes-agent/pull/142854)：移动端通知。
- [Zaprite](https://github.com/NousResearch/hermes-agent/pull/149875)：支付及审批门控。

这些项目说明生态正在向 **可视化、通知、支付、IoT 和多代理协调** 扩展。

---

## 7. 用户反馈摘要

### 用户痛点

1. **状态反馈不可信**
   - Desktop 可能显示 “sent”，但消息未到达 Harness。
   - 模型已经切换，但模型本身未收到切换提示。
   - Kanban Worker 显示运行中，却没有模型请求和工具轨迹。
   - 活跃 Agent 数量可能长期陈旧。
   - 相关：[#141973](https://github.com/NousResearch/hermes-agent/issues/141973)、[#149870](https://github.com/NousResearch/hermes-agent/issues/149870)、[#143004](https://github.com/NousResearch/hermes-agent/issues/143004)、[#149877](https://github.com/NousResearch/hermes-agent/pull/149877)。

2. **升级后已有数据和会话不可用**
   - 旧数据库升级后出现 `NULL id`。
   - 多 Profile 环境反复出现 ownership/maintenance 409。
   - 用户需要升级可预测，而不是依赖手工修库或重建环境。
   - 相关：[#148742](https://github.com/NousResearch/hermes-agent/issues/148742)、[#148531](https://github.com/NousResearch/hermes-agent/issues/148531)。

3. **Gateway 在高并发或多 Profile 下不稳定**
   - 事件循环被 SQLite 历史扫描和持久化阻塞。
   - transport retry 可能重复执行整个轮次。
   - Profile 间可能发生文件同步和状态污染。
   - 相关：[#141125](https://github.com/NousResearch/hermes-agent/pull/141125)、[#145381](https://github.com/NousResearch/hermes-agent/issues/145381)、[#135119](https://github.com/NousResearch/hermes-agent/issues/135119)。

4. **安全策略对正常使用场景产生误报**
   - 正常 Node.js CLI 被生命周期守卫拦截。
   - 普通英文词触发整个 SOUL.md 威胁扫描。
   - 结构化插件输出被脱敏破坏。
   - 相关：[#105758](https://github.com/NousResearch/hermes-agent/issues/105758)、[#85043](https://github.com/NousResearch/hermes-agent/issues/85043)、[#149778](https://github.com/NousResearch/hermes-agent/issues/149778)。

5. **跨平台体验不一致**
   - Windows 更新中断、Worker 启动、长路径问题集中出现。
   - ACP 测试中还存在 Windows 路径 fixture 与 JSON 转义假设。
   - 相关：[#149520](https://github.com/NousResearch/hermes-agent/issues/149520)、[#148389](https://github.com/NousResearch/hermes-agent/issues/148389)、[#130242](https://github.com/NousResearch/hermes-agent/issues/130242)、[#144476](https://github.com/NousResearch/hermes-agent/issues/144476)。

### 积极信号

- 社区同时提交了大量生产级 PR，覆盖状态同步、插件兼容、模型下载、IMAP、Windows 和 Desktop 体验。
- [#149337](https://github.com/NousResearch/hermes-agent/pull/149337) 修复了 Multiplex Secondary 的 Relay 被错误标记为故障平台的问题，说明维护者与用户正在主动完善多 Profile 体验。
- [#149874](https://github.com/NousResearch/hermes-agent/pull/149874) 对 IMAP 协议的修复体现了较高的工程质量。
- [#149878](https://github.com/NousResearch/hermes-agent/pull/149878) 主动修正技能审批预览，增强用户对写入流程的信任。
- [#149880](https://github.com/NousResearch/hermes-agent/pull/149880) 和 [#149879](https://github.com/NousResearch/hermes-agent/pull/149879) 表明项目正在主动清理历史架构债务，而非继续堆叠兼容层。

### 不满意点

- 文档和 Release Notes 未能从摘要中充分说明大版本迁移边界。
- 状态、权限和错误语义在 CLI、Desktop、Web、Gateway 间仍不一致。
- 安全与可观测性功能有时“阻止过度、解释不足”。
- 部分修复等待时间较长，且 48 条 PR 尚未合并，可能造成用户已升级但问题仍存在。

---

## 8. 待处理积压

### 长期高评论、仍开放的重要 Issue

1. **[#105758 Lifecycle guard 误拦截 Node.js CLI](https://github.com/NousResearch/hermes-agent/issues/105758)**  
   创建于 2026-09-08，已有 25 条评论，是今日最热问题之一。安全功能若持续误报，会直接破坏自动化工作流。

2. **[#78999 Cron 原生审批按钮](https://github.com/NousResearch/hermes-agent/issues/78999)**  
   创建于 2026-08-05，讨论充分且已有明确产品形态。建议明确排期并拆分 Telegram、Discord 两个实现任务。

3. **[#85043 Threat screen 普通词误报](https://github.com/NousResearch/hermes-agent/issues/85043)**  
   创建于 2026-08-13，反映关键词安全扫描的基础质量问题。建议补充词形、短语和上下文测试集。

4. **[#135119 Remote backend sync_back 写入默认 Profile](https://github.com/NousResearch/hermes-agent/issues/135119)**  
   创建于 2026-10-08，涉及跨 Profile 数据污染，风险较高。即使当前评论数不高，也应提升优先级。

5. **[#130242 Windows 长路径失败](https://github.com/NousResearch/hermes-agent/issues/130242)**  
   创建于 2026-10-01，已持续影响复制、遍历、摘要、删除和插件安装。建议形成统一路径处理层，而非逐调用点修补。

6. **[#144188 Desktop 原生媒体表面](https://github.com/NousResearch/hermes-agent/issues/144188)**  
   创建于 2026-10-24，生态方向明确，但需先收敛 API 边界和安全模型。

### 长期开放 PR

1. **[#98805 多会话协调 Skill](https://github.com/NousResearch/hermes-agent/pull/98805)**  
   创建于 2026-08-30，仍待合并。作为可选 Skill，可独立发布，建议避免继续扩大范围。

2. **[#127158 Computer Use 确定性状态验证](https://github.com/NousResearch/hermes-agent/pull/127158)**  
   创建于 2026-09-29。该能力对 UI 自动化可靠性价值较高，建议完成验收后合入。

3. **[#144313 本地模型下载恢复](https://github.com/NousResearch/hermes-agent/pull/144313)**  
   创建于 2026-10-25，改动价值明确且边界较清晰，建议优先完成测试与合并。

4. **[#113574 Compaction 约束来源标注](https://github.com/NousResearch/hermes-agent/pull/113574)**  
   创建于 2026-09-16，涉及压缩后用户约束被误当长期政策的正确性。建议结合 [#149881](https://github.com/NousResearch/hermes-agent/issues/149881) 的 ARCBench 研究结果统一评估。

5. **[#141125 Gateway 事件循环冻结修复](https://github.com/NousResearch/hermes-agent/pull/141125)**  
   创建于 2026-10-18，问题严重度高于一般 P2，建议作为下一补丁版本的优先合并项。

### 维护建议

- 为 `state.db` 升级、Windows 更新恢复、Desktop steer 建立明确的 **release-blocking checklist**。
- 将多 Profile ownership、checkpoint pruning、sync_back 隔离合并为统一的状态治理里程碑。
- 对 #105758、#85043、#149778 三类误报建立统一的“安全规则上下文测试”体系。
- 为 PR 设置风险分级合并策略：状态数据库、Gateway 事件循环、Windows 安装和多 Profile 隔离应优先于新插件目录项。
- 在 v0.23.0 发布后补充迁移指南，明确哪些入口已切换到 Gateway session authority、如何备份旧状态库，以及 standalone 模式的兼容窗口。

---

## 总结

Hermes Agent 今日保持高强度开发，**v0.23.0** 标志项目进入统一 Gateway 状态体系、Desktop 平台化和插件扩展的新阶段。社区贡献非常活跃，尤其在多 Profile 隔离、插件基础设施和本地模型体验方面有实质推进。

当前主要风险不是开发速度不足，而是 **大版本迁移、旧状态库兼容、Desktop/Gateway 状态一致性以及 Windows 可靠性**。建议下一阶段将 PR 合并重点从“新功能数量”转向“状态正确性与升级可恢复性”：优先处理旧数据库迁移、session ownership fencing、Desktop steer、Gateway 事件循环和 Windows 更新恢复。完成这些关键修复后，项目健康度有望从当前的“高活跃、稳定性承压”提升到“可放心规模化部署”。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**统计日期：2026-11-06**  
**数据范围：过去 24 小时 GitHub 更新**  
**项目：** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

---

## 1. 今日速览

过去 24 小时项目共更新 **20 个 PR**，其中 **12 个待合并、8 个已合并或关闭**，整体开发活跃度较高，但尚无版本发布。  
今日工作主要围绕 **安全与隐私、凭据管理、Agent 审批、沙箱能力、Chat/Flow 稳定性及跨平台体验** 展开；其中 P1 级 PR [#8558](https://github.com/tinyhumansai/openhuman/pull/8558) 聚焦租户沙箱文件流转，是当前功能面影响较大的待合并项。  
过去 24 小时没有新增或活跃 Issue，且现有 PR 摘要未提供评论或点赞数据，因此社区热度只能依据更新频率和优先级判断，尚无法形成可靠的“讨论最活跃”排名。  
整体健康度可评估为 **活跃且方向清晰，但合并与发布节奏偏慢**：约 **60% PR 仍待合并**，同时缺少版本发布和公开 Issue 讨论信号。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

> 本期没有提供 commit 时间信息，以下按 PR 状态变化理解，不将其全部视为已经合并；关闭项可能代表放弃、替代或待重做。

1. **TinyBox 版本固定与沙箱兼容性**
   - [#8550 — chore(modules): pin tinybox 0.2.5](https://github.com/tinyhumansai/openhuman/pull/8550)
   - 固定 TinyBox `0.2.5`，同步更新 vendor gitlink 和锁文件。
   - 修复 OpenShell 后端连接旧版 `0.1.7` 网关时，长名称创建被拒绝、ready box 无法启动等问题。
   - 该 PR 是 [#8545](https://github.com/tinyhumansai/openhuman/pull/8545) 等 agent37 沙箱工作的前置依赖。

2. **agent37 沙箱路由与资源限制**
   - [#8551 — feat(sandbox): configure agent37 box CPU and memory](https://github.com/tinyhumansai/openhuman/pull/8551)
   - 为 `[runtime.agent37]` 增加 `cpu_millis` 和 `memory_mb` 配置。
   - agent37 使用独立资源配置，而非继续复用 `[runtime.docker]`，默认 CPU 为 2000 millis。
   - [#8545 — Fix agent37 sandbox routing, constraints, template, egress, and cleanup](https://github.com/tinyhumansai/openhuman/pull/8545) 已关闭，其中涉及 agent37 后端路由、约束、模板、出口控制和清理等更完整改造；其合并依赖 TinyBox 版本升级。

3. **凭据读取与登录稳定性**
   - [#8553 — fix(credentials): ask for the session token once per launch](https://github.com/tinyhumansai/openhuman/pull/8553)
   - 将安全模块行为下每次 keyring 读取都弹窗，改为每次进程启动、每个 profile secret 首次读取时询问一次。
   - 直接改善桌面端登录后频繁审批的体验问题。
   - [#8552 — don't undo a sign-in when retired cron jobs can't be pruned](https://github.com/tinyhumansai/openhuman/pull/8552) 同时处理了 TinyFlows 不可用时登录被错误回滚的问题。

4. **本地模型 Provider 冲突保护**
   - [#8554 — fix(config): refuse new cloud provider slugs claimed by a local runtime](https://github.com/tinyhumansai/openhuman/pull/8554)
   - 阻止新增 `vllm`、`llamacpp`、`mlx`、`omlx`、`local-openai` 及其别名等被内置本地运行时占用的云 Provider slug。
   - 已存在的配置继续保留并记录日志，降低升级兼容风险。

5. **Windows 制品文件名修复**
   - [#8549 — fix(artifacts): keep Windows device names out of file stems](https://github.com/tinyhumansai/openhuman/pull/8549)
   - 修复 `CON.txt` 等 Windows 保留设备名导致文件无法创建的问题。
   - [#8548 — Keep the file type a text artifact's title names](https://github.com/tinyhumansai/openhuman/pull/8548) 处理文本制品标题到文件名的映射错误，例如 `wifi-note.txt` 不再被错误处理为 `wifi-note-txt.txt`；同时修复重复保存时产生 `(2)` 后缀的问题。

### 当前待合并的重要进展

1. **租户沙箱文件导入、导出与制品创建**
   - [#8558 — Move files in and out of a tenant's sandbox box; create_artifact reads from the box](https://github.com/tinyhumansai/openhuman/pull/8558)
   - **P1，待合并。**
   - 补齐 `BoxRegistry` 缺少文件进出沙箱能力的问题。
   - 上传到宿主机的文件可进入租户 box，Agent 在 box 中创建的文件也可转化为 artifact。
   - 减少模型重新录入文件内容这一低效且可能失真的路径。

2. **Composio 执行结果密钥脱敏**
   - [#8563 — redact Composio keys from RPC and flow Execute results](https://github.com/tinyhumansai/openhuman/pull/8563)
   - 将 `composio.execute`、`tools.composio_execute` RPC 以及 flow `tool_call` 节点的返回结果统一纳入脱敏。
   - 无法被 TinySecurity 脱敏的结果将不予返回，属于数据泄露防护强化。

3. **本地模式下统一阻断 Composio 出口**
   - [#8562 — apply local-only egress on every Composio execute path](https://github.com/tinyhumansai/openhuman/pull/8562)
   - 将“仅本地模式”检查覆盖到所有 Composio 执行入口，而非只保护 Agent 工具调用。
   - UI 分支/Issue 选择器、延迟动作工具和 flow `tool_call` 均会在连接外部服务前被拒绝。

4. **Agent 审批租户隔离**
   - [#8556 — decide a parked request only for the tenant that parked it](https://github.com/tinyhumansai/openhuman/pull/8556)
   - `openhuman.approval_decide` 只允许发起审批的 profile，以及指定 agent 或 agent-scoped dispatch 的所有者处理请求。
   - 跨 profile 或错误 agent 的审批会返回 `WrongTenant`，强化多租户边界。

5. **桌面端重启自锁修复**
   - [#8559 — let a signed-in desktop restart without waiting on itself](https://github.com/tinyhumansai/openhuman/pull/8559)
   - 修复已登录桌面端重启时，TinySecurity 首次加载持有锁、后续凭据读取等待自身审批所形成的启动死锁。
   - 无法获得审批的凭据读取将跳过 keyring，使应用可以完成启动。

6. **后台任务中的子 Agent 消息路由**
   - [#8565 — route sub-agents spawned in a background-delivery turn to the user's socket](https://github.com/tinyhumansai/openhuman/pull/8565)
   - 修复后台投递轮次创建的子 Agent 事件被 system client 的空 sink 丢弃，用户无法看到“Delegated to …”过程卡片的问题。
   - 改善后台委派任务的可见性和可追踪性。

7. **工作流提案保存去重与稳定标识**
   - [#8564 — carry a card-saved proposal into the workflow builder save hand-off](https://github.com/tinyhumansai/openhuman/pull/8564)
   - 修复用户点击聊天卡片中的“Save it”后，又创建第二份相同 flow 的问题。
   - 将卡片中记录的 `saved_flow_id` 传递给 workflow builder hand-off。
   - [#8557 — give workflow proposals stable identities](https://github.com/tinyhumansai/openhuman/pull/8557) 则为提案生成核心唯一 ID，并用于 React key 和保存/完成匹配，解决同名实时提案冲突。

8. **Windows CLI 路径配置**
   - [#8555 — add OpenHuman to user PATH](https://github.com/tinyhumansai/openhuman/pull/8555)
   - 安装时检测 `OpenHuman.exe` 所在目录并加入当前用户 PATH，同时避免重复项。
   - 更新安装进程 PATH，并通知 Windows 用户环境发生变化；提升命令行可用性。

9. **测试布局与条件编译治理**
   - [#8560 — split tiny_store tests under the 750-line layout limit](https://github.com/tinyhumansai/openhuman/pull/8560)
   - 将超过 750 行限制的 tiny_store 测试拆分到独立文件，恢复 `pnpm rust:layout`。
   - [#8561 — gate the protected-file refusal test on security-module](https://github.com/tinyhumansai/openhuman/pull/8561) 修复未启用 `security-module` 时相关测试误失败的问题；该 PR 依赖 [#8560](https://github.com/tinyhumansai/openhuman/pull/8560)。

---

## 4. 社区热点

本期数据未包含 PR 评论数、点赞数或 Issue 讨论详情，且过去 24 小时无 Issue 更新，因此无法严格列出“评论最多、反应最多”的条目。基于 PR 优先级与影响范围，当前值得社区重点关注的项目如下：

| 热点 | 状态 | 关注理由 |
|---|---:|---|
| [#8558 租户沙箱文件进出与 artifact 创建](https://github.com/tinyhumansai/openhuman/pull/8558) | OPEN / P1 | 唯一 P1 PR，直接影响沙箱、文件上传和 Agent 产物闭环 |
| [#8563 Composio 结果密钥脱敏](https://github.com/tinyhumansai/openhuman/pull/8563) | OPEN / P2 | 涉及敏感凭据是否可能通过 RPC 或 flow 泄露 |
| [#8562 所有 Composio 路径执行本地出口策略](https://github.com/tinyhumansai/openhuman/pull/8562) | OPEN / P3 | 关系到 local-only 隐私承诺是否在所有入口一致成立 |
| [#8559 桌面端重启死锁](https://github.com/tinyhumansai/openhuman/pull/8559) | OPEN / P3 | 影响已登录用户启动和重启体验 |
| [#8556 Agent 审批租户隔离](https://github.com/tinyhumansai/openhuman/pull/8556) | OPEN / P3 | 关系到多租户、多 profile 和 agent-scoped 审批安全 |

**社区诉求判断：** 当前热点主要不是“新增大量讨论型需求”，而是维护者在集中修复安全边界、产品闭环和平台稳定性。尤其 Composio、审批与沙箱相关改动表明项目正从功能扩张转向确保既有入口在多租户、隐私模式和后台执行环境下同样可靠。

---

## 5. Bug 与稳定性

按影响范围和风险等级整理如下：

| 严重度 | 问题 | 影响 | 修复状态 |
|---|---|---|---|
| **高 / P1** | [#8558 沙箱文件无法导入导出，artifact 无法读取 box 内文件](https://github.com/tinyhumansai/openhuman/pull/8558) | Agent 生成文件难以成为正式制品；宿主上传与沙箱工作流割裂 | **已有待合并 fix PR** |
| **中高 / P2** | [#8563 Composio Execute 返回值可能包含未脱敏密钥](https://github.com/tinyhumansai/openhuman/pull/8563) | RPC 和 flow 执行链可能暴露 Composio credentials | **已有待合并 fix PR** |
| **中 / P3** | [#8559 已登录桌面端重启时启动死锁](https://github.com/tinyhumansai/openhuman/pull/8559) | 应用无法进入 ready 状态 | **已有待合并 fix PR** |
| **中 / P3** | [#8556 审批请求可能被其他租户或 agent 越权处理](https://github.com/tinyhumansai/openhuman/pull/8556) | 存在审批边界和职责错配风险 | **已有待合并 fix PR** |
| **中 / P3** | [#8565 后台轮次中的子 Agent 事件丢失](https://github.com/tinyhumansai/openhuman/pull/8565) | 用户看不到委派卡片与执行进展 | **已有待合并 fix PR** |
| **中 / P3** | [#8564 “Save it”重复创建工作流](https://github.com/tinyhumansai/openhuman/pull/8564) | 可能产生重复 flow 和状态错配 | **已有待合并 fix PR** |
| **中 / P3** | [#8557 同名工作流提案身份冲突](https://github.com/tinyhumansai/openhuman/pull/8557) | React key、保存和完成匹配可能指向错误提案 | **已有待合并 fix PR** |
| **中 / P3** | [#8562 local-only 模式未覆盖所有 Composio 执行路径](https://github.com/tinyhumansai/openhuman/pull/8562) | 隐私模式承诺在部分入口失效 | **已有待合并 fix PR** |
| **低 / P3** | [#8560 tiny_store 测试文件超过布局限制](https://github.com/tinyhumansai/openhuman/pull/8560) | `pnpm rust:layout` 红灯，CI 质量门禁可能受影响 | **已有待合并修复 PR** |
| **低 / P3** | [#8561 无 security-module 构建下测试失败](https://github.com/tinyhumansai/openhuman/pull/8561) | 特定 feature/build 组合下测试不通过 | **已有待合并修复 PR，依赖 #8560** |
| **低 / P3** | [#8555 Windows 未自动配置 OpenHuman CLI PATH](https://github.com/tinyhumansai/openhuman/pull/8555) | 新安装后命令行调用不便 | **已有待合并 fix PR** |
| **已处理** | [#8553 keyring 每次读取都要求审批](https://github.com/tinyhumansai/openhuman/pull/8553) | 登录后反复弹窗，体验和可用性下降 | **已关闭，状态需确认是否已合入** |
| **已处理** | [#8552 TinyFlows 不可用导致登录回滚](https://github.com/tinyhumansai/openhuman/pull/8552) | 登录被非关键清理步骤阻断 | **已关闭，状态需确认是否已合入** |
| **已处理** | [#8549 Windows 保留设备名导致文件创建失败](https://github.com/tinyhumansai/openhuman/pull/8549) | 特定标题的 artifact 无法落盘 | **已关闭，状态需确认是否已合入** |
| **已处理** | [#8548 文本 artifact 标题扩展名被错误改名](https://github.com/tinyhumansai/openhuman/pull/8548) | 文件名不规范，重复保存产生 `(2)` | **已关闭，状态需确认是否已合入** |

---

## 6. 功能请求与路线图信号

### 1. 沙箱与 Artifact 文件闭环

来自 [#8558](https://github.com/tinyhumansai/openhuman/pull/8558) 的明确信号是：每个租户独立的 sandbox box 需要成为完整文件工作区，而不只是 Agent 执行命令的隔离环境。

可能进入下一阶段的内容包括：

- 宿主文件上传至租户 box；
- box 内文件导出；
- `create_artifact` 直接读取 box 文件；
- Agent 不再依赖模型重新录入文件内容；
- 后续可能扩展到多租户文件生命周期、同步与审计。

这是当前最明确、优先级最高的能力方向。

### 2. Keenable 无密钥搜索接入

- [#7279 — feat(search): add Keenable to search settings (works without a key)](https://github.com/tinyhumansai/openhuman/pull/7279)
- 自 2026-10-10 创建并持续更新至 2026-11-05，属于较长期未合并的功能 PR。
- Keenable 已出现在“Connections → Search”，可承担 Search 和 Contents 角色，且无需 API key。
- TinySearch 侧更新已发布至 v0.5.3，说明上游准备较充分；但本 PR 仍为 OPEN，若下一版本希望增强零配置搜索体验，此项具备合入基础。

### 3. Agent 沙箱资源与生命周期治理

- [#8551](https://github.com/tinyhumansai/openhuman/pull/8551) 表明 agent37 正逐步具备独立运行时配置能力。
- [#8545](https://github.com/tinyhumansai/openhuman/pull/8545) 涉及路由、约束、模板、出口与清理，说明路线不只是“支持 agent37”，而是补齐生产级沙箱生命周期。
- 后续可能形成按 agent、租户或 workload 配置 CPU、内存、出口策略和清理策略的能力。

### 4. Windows 原生使用体验

- [#8555](https://github.com/tinyhumansai/openhuman/pull/8555) 补齐用户级 PATH。
- 结合已处理的 Windows 文件名修复，可判断 Windows 安装、CLI 调用和制品落盘正在形成连续改善。
- 下一版本可能继续关注终端环境刷新、安装器行为以及跨平台文件命名一致性。

### 5. Chat 与 Workflow Builder 协同

- [#8564](https://github.com/tinyhumansai/openhuman/pull/8564) 修复聊天卡片与 Builder 交接中的重复保存。
- [#8557](https://github.com/tinyhumansai/openhuman/pull/8557) 建立稳定提案 ID。
- 两者组合后，聊天提案、后台 Agent、workflow builder 和最终 flow 实例之间的一致性将明显增强，值得作为下一版本重点回归区域。

---

## 7. 用户反馈摘要

过去 24 小时没有新增 Issue，PR 摘要也未提供 Issue 评论中的真实用户反馈，因此本期无法提炼可验证的用户评论、满意点或具体使用案例。

不过，从已提交 PR 的问题描述中可以归纳出以下高可信使用痛点：

1. **已登录用户频繁收到安全审批**
   - [#8553](https://github.com/tinyhumansai/openhuman/pull/8553) 指出 keyring 每次读取都要求批准，导致用户不断弹窗。
   - 这说明安全机制需要在不降低隔离强度的前提下改善交互频率。

2. **桌面端重启无法完成启动**
   - [#8559](https://github.com/tinyhumansai/openhuman/pull/8559) 描述了 signed-in desktop 在启动阶段等待自身审批、永远无法 ready 的死锁。
   - 属于直接影响日常可用性的高优先级体验问题。

3. **后台委派在用户界面中不可见**
   - [#8565](https://github.com/tinyhumansai/openhuman/pull/8565) 指出后台投递期间创建的子 Agent 进度被直接丢弃。
   - 用户无法确认任务是否真正委派、进展到哪一步，降低对后台自动化的信任。

4. **聊天中保存工作流会生成重复副本**
   - [#8564](https://github.com/tinyhumansai/openhuman/pull/8564) 表明“Save it”后的卡片保存与 Builder 保存没有正确共享 flow ID。
   - 属于明确的数据一致性与重复资产管理问题。

5. **本地模式下的外部工具行为不一致**
   - [#8562](https://github.com/tinyhumansai/openhuman/pull/8562) 显示部分 Composio 路径未执行 local-only egress 限制。
   - 用户可能误以为所有入口均保持本地隐私，但实际只有 Agent 工具入口受到保护。

6. **沙箱产物难以带回宿主**
   - [#8558](https://github.com/tinyhumansai/openhuman/pull/8558) 指出 box 内文件无法成为 artifact，上传文件也不在 box 中。
   - 该问题直接阻碍“让 Agent 在隔离环境中处理真实文件并交付结果”的核心场景。

---

## 8. 待处理积压

### 8.1 长期未合并的重要功能 PR

1. **[#7279 — feat(search): add Keenable to search settings](https://github.com/tinyhumansai/openhuman/pull/7279)**
   - 创建于 **2026-10-10**，至 **2026-11-05** 仍有更新，已开放近一个月。
   - 上游 TinySearch 已提供对应能力，但 OpenHuman 侧仍未合并。
   - 建议维护者明确：是否计划合入、是否等待评测/凭据策略、是否存在 UI 或隐私审核阻塞。

2. **[#8558 — Move files in and out of a tenant's sandbox box](https://github.com/tinyhumansai/openhuman/pull/8558)**
   - 虽创建于 2026-11-05，并非长期 PR，但它是唯一 P1 项，且影响沙箱与 Artifact 的关键链路。
   - 建议优先完成安全审查、租户边界验证和集成测试。

3. **[#8560](https://github.com/tinyhumansai/openhuman/pull/8560) / [#8561](https://github.com/tinyhumansai/openhuman/pull/8561)**
   - 两者为堆叠依赖关系，需按顺序处理，避免测试布局和 feature gating 长期阻塞质量门禁。

### 8.2 已关闭但缺少结果确认的 PR

以下条目状态显示为 CLOSED，但数据没有提供是否实际合并、关闭原因或替代 PR：

- [#8550](https://github.com/tinyhumansai/openhuman/pull/8550)
- [#8551](https://github.com/tinyhumansai/openhuman/pull/8551)
- [#8552](https://github.com/tinyhumansai/openhuman/pull/8552)
- [#8553](https://github.com/tinyhumansai/openhuman/pull/8553)
- [#8554](https://github.com/tinyhumansai/openhuman/pull/8554)
- [#8545](https://github.com/tinyhumansai/openhuman/pull/8545)
- [#8548](https://github.com/tinyhumansai/openhuman/pull/8548)
- [#8549](https://github.com/tinyhumansai/openhuman/pull/8549)

建议维护者为每个 CLOSED PR 标记明确结论：**merged、superseded、not planned 或 draft**，避免贡献者无法判断修复是否已经进入主分支。

### 8.3 公共 Issue 响应积压

过去 24 小时 Issue 更新为 0，且没有最新 Issue 列表，因此不能确认是否存在长期未响应的公开 Issue。当前可以确认的是：

- [#7279](https://github.com/tinyhumansai/openhuman/pull/7279) 已持续开放近一个月，是最明确的长期 PR 积压；
- 暂无新 Issue 积压数据，不宜据此推断社区问题已全部解决；
- 维护者宜补充 Issue backlog 或 triage 标签，以便区分“无人关注”与“数据窗口内没有新活动”。

---

## 结论

OpenHuman 今日呈现 **高开发活跃度、强稳定性导向、发布节奏偏慢** 的特征。20 个 PR 中，安全与隐私、凭据和审批、多租户隔离、沙箱文件闭环构成主线；其中 [#8563](https://github.com/tinyhumansai/openhuman/pull/8563)、[#8562](https://github.com/tinyhumansai/openhuman/pull/8562)、[#8556](https://github.com/tinyhumansai/openhuman/pull/8556) 和 [#8559](https://github.com/tinyhumansai/openhuman/pull/8559) 对生产使用可信度尤其重要。当前最需要关注的是 **P1 沙箱文件 PR [#8558](https://github.com/tinyhumansai/openhuman/pull/8558) 的合并进度、12 个待合并 PR 的收敛，以及已关闭 PR 是否真正落地**。在这些问题完成验证并形成版本发布前，项目整体健康度可判断为 **良好但仍处于快速工程化阶段**。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
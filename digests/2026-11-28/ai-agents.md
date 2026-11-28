# OpenClaw 生态日报 2026-11-28

> Issues: 334 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-11-28 07:11 UTC

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

**统计日期：2026-11-28**  
**数据范围：过去 24 小时 GitHub Issues、Pull Requests 与 Releases**  
**项目健康度：活跃但风险偏高，核心更新链路与长期稳定性问题仍需集中治理**

---

## 1. 今日速览

过去 24 小时 OpenClaw 共更新 **334 条 Issues**（新开或活跃 201，关闭 133）与 **500 条 PRs**（待合并 264，已合并或关闭 236），并发布 **1 个 beta 版本**。项目开发吞吐较高，自动化管理、任务生命周期、更新机制、UI 可诊断性和子代理工具发现等方面均有新改动；不过仍有 **264 个 PR 尚未合并**，其中多项属于 XL 规模或兼容性变更，合并压力显著。

当天最突出的风险不是单一功能缺口，而是围绕 **Gateway 更新、SQLite/Doctor、内存增长、任务死锁和会话连续性** 的系统性稳定性压力。多个 P0/P1 问题仍处于开放状态，且不少 issue 尚未出现明确修复 PR。

与此同时，项目也在强化“发布—候选验证—状态迁移—回滚”的工程闭环，最新 beta 引入 prepared-release 更新路径并减少更新时对在线 Gateway 的中断。但相关实现仍存在 Windows、macOS、跨账户服务账户和 Doctor 迁移等边缘场景未完全收敛。

---

## 2. 版本发布

### [v2026.12.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1)

这是本日唯一的新版本。

#### 主要更新

- **Git 安装方式采用 prepared release 与常驻 launcher**
  - Git 安装不再直接覆盖当前运行版本。
  - 通过预构建发布包和常驻启动器管理切换流程。
  - 相关工作项：[#203194](https://github.com/openclaw/openclaw/pull/203194)、[#203497](https://github.com/openclaw/openclaw/pull/203497)。

- **包管理器更新不再提前停止在线 Gateway**
  - 包更新可先完成候选包准备阶段，再在适当阶段切换服务。
  - 目标是降低更新期间的服务中断。

- **提示词缓存优化**
  - 压缩流程开始跨路由复用已经预热的 prompt cache。
  - 有望降低压缩期间的延迟与重复计算成本。

#### 破坏性变更与迁移注意事项

虽然官方发布摘要未列出完整 breaking changes，但 beta 版本包含底层更新和状态迁移机制变化，实际部署应重点检查：

1. **Git 安装与包安装路径不同**
   - Git 用户需确认 launcher、prepared release 和当前工作树之间的切换关系。
   - 不应仅按旧版本“直接替换目录”的方式手工升级。

2. **升级前应备份 SQLite 和状态目录**
   - 当前仍有多起 Doctor、legacy-main migration 和 SQLite integrity 问题开放。

3. **Gateway 可用性不能代替升级成功**
   - 部分失败案例中，新 Gateway 已恢复服务，但插件、数据库或迁移状态并未完整提交。

4. **建议先在测试环境验证**
   - 尤其是 Windows、macOS、root-owned package 配合非 root systemd service，以及 ARM64 1 GiB 内存受限环境。

5. **Beta 版本应谨慎用于生产**
   - 最新 beta 与多项仍在收敛的更新、Doctor、任务生命周期问题处于同一开发周期。

---

## 3. 项目进展

### 3.1 更新机制继续向“可预热、可切换、可验证”演进

- [#204775](https://github.com/openclaw/openclaw/issues/204775) 是当前 prepared-release 更新的核心设计跟踪项，评论达 **58 条**，用于统一状态模型、职责边界和实施计划。
- [#207230](https://github.com/openclaw/openclaw/pull/207230) 尝试支持由 root 管理全局包、但 Gateway 以其他账户运行的 systemd 服务。
- [#207304](https://github.com/openclaw/openclaw/pull/207304) 修复 root 更新过程中误触 root 用户状态或以 root 写入服务账户状态的问题。
- [#207236](https://github.com/openclaw/openclaw/pull/207236) 改进外部升级场景下 Updates 页面的历史展示，避免旧的成功记录仍被当作当前版本。
- [#207293](https://github.com/openclaw/openclaw/pull/207293) 强化备份源分类测试，防止空映射让断言无声跳过。

**进展评价：** 更新架构正在从“下载并替换”升级为候选准备、Doctor 检查、状态迁移、服务切换和历史追踪的完整流程，是本阶段最重要的基础设施进展。但跨平台、跨账户和失败回滚仍有多项开放问题。

### 3.2 自动化任务开始统一执行位置与任务语义

- [#201285](https://github.com/openclaw/openclaw/pull/201285) 提议允许用户选择自动化任务的运行位置。
- [#201275](https://github.com/openclaw/openclaw/pull/201275) 尝试将定时提醒统一为 task prompt 模式，减少编辑器、CLI 与 agent tool 之间不同的执行和投递规则。
- [#201280](https://github.com/openclaw/openclaw/pull/201280) 计划把已结束的一次性自动化移入运行历史。
- [#207316](https://github.com/openclaw/openclaw/pull/207316) 修复失败自动化仍留在 Active 和 Paused 列表的问题。
- [#207275](https://github.com/openclaw/openclaw/pull/207275) 修复升级后保存的 system-event 自动化因缺少记录账户而停止运行。
- [#207315](https://github.com/openclaw/openclaw/pull/207315) 修复 cron 通知已直接发到会话后，agent 仍尝试回复可见消息的问题。
- [#201288](https://github.com/openclaw/openclaw/pull/201288) 推进自动化计费账户显式化。

**进展评价：** 自动化模块正在从零散功能向统一调度、运行位置、账户绑定、状态生命周期和消息投递语义演进。不过相关 PR 普遍规模较大，且部分明确标注仍在讨论中，落地节奏可能慢于代码产出速度。

### 3.3 “End Talk” 与任务生命周期语义得到明确

- [#206321](https://github.com/openclaw/openclaw/pull/206321)、[#206329](https://github.com/openclaw/openclaw/pull/206329) 围绕“结束通话不等于取消已接受任务”修复 Gateway、Control UI 和 Apple 客户端行为。
- [#207314](https://github.com/openclaw/openclaw/pull/207314) 将 `sessions_spawn` 与其 delegation family 一起放入 Tool Search，避免模型只看到部分子代理能力。
- [#207101](https://github.com/openclaw/openclaw/pull/207101) 统一各路由的工具结果截断上限，同时保持不可信内容包装。
- [#207308](https://github.com/openclaw/openclaw/pull/207308) 修正 late-yield 生命周期测试的异步等待问题。

**进展评价：** 项目正强化“界面交互结束”“后台任务完成”和“显式取消”三者的边界，有利于降低消息丢失和任务意外中止。

### 3.4 UI 可诊断性持续改善

- [#206402](https://github.com/openclaw/openclaw/pull/206402) 明确解释空文件无法附加。
- [#206411](https://github.com/openclaw/openclaw/pull/206411) 解释批量删除归档会话为何提前停止。
- [#206409](https://github.com/openclaw/openclaw/pull/206409) 在项目无法加载时提前显示原因，避免无限等待提示。
- [#207313](https://github.com/openclaw/openclaw/pull/207313) 在 Outbox 中显示已有会话标题。
- [#207286](https://github.com/openclaw/openclaw/pull/207286) 修复子菜单 Back/Escape 顺序并稳定浏览器测试。

**进展评价：** 这些改动用户感知直接、技术规模较小，属于有效的体验和可诊断性债务清理。

### 3.5 性能与资源占用开始专项治理

- [#207254](https://github.com/openclaw/openclaw/pull/207254) 避免聊天命令加载未使用的 agent runtime，减少监听进程常驻 JavaScript。
- [#207296](https://github.com/openclaw/openclaw/pull/207296) 移除未使用的 MiniMax OAuth fixture。
- [#207299](https://github.com/openclaw/openclaw/pull/207299) 移除 reload observer 的无用回调。
- [#207309](https://github.com/openclaw/openclaw/pull/207309) 清理废弃 worker 与 settlement fixture。
- [#207311](https://github.com/openclaw/openclaw/pull/207311) 精简重复 Gateway 测试旅程。

**进展评价：** 团队开始关注常驻内存和测试维护成本，但这些改动主要属于局部优化，尚不能证明已解决 ARM64 和生产 Gateway 的大幅内存增长问题。

---

## 4. 社区热点

### 4.1 prepared-release 更新设计：最高热度治理议题

- [#204775](https://github.com/openclaw/openclaw/issues/204775) — **58 条评论**
- [#207230](https://github.com/openclaw/openclaw/pull/207230)
- [#207304](https://github.com/openclaw/openclaw/pull/207304)

**核心诉求：** 用户和维护者都希望更新过程具备明确的状态语义，避免不同模块各自操作更新文件而导致冲突；系统还需正确处理 root-owned package、非 root 服务账户、Windows 回滚树和候选版本验证。

**社区信号：** 这是本日最明显的“设计先行”议题。热度来自它横跨 Gateway、CLI、Doctor、Gateway launcher、文件所有权和回滚机制，而非单一功能争议。

### 4.2 Doctor/SQLite 更新失败：升级可靠性焦虑

- [#197083](https://github.com/openclaw/openclaw/issues/197083) — **41 条评论，P0**
- [#178359](https://github.com/openclaw/openclaw/issues/178359) — **33 条评论，P1**
- [#205202](https://github.com/openclaw/openclaw/issues/205202) — **5 条评论**
- [#206669](https://github.com/openclaw/openclaw/pull/206669) — **8 条评论，P1 回归**

**核心诉求：** 升级不能以“Gateway 恢复在线”为成功标准，必须确保 SQLite WAL 发布、legacy-main 迁移、完整性 worker 和 agent store 全部完成后再提交状态。

**社区信号：** 用户对自动升级的主要要求不是更快，而是**可解释、可恢复、不会留下半迁移状态**。

### 4.3 Gateway 内存增长与受限设备稳定性

- [#192547](https://github.com/openclaw/openclaw/issues/192547) — **30 条评论**
- [#181432](https://github.com/openclaw/openclaw/issues/181432) — **16 条评论**
- [#195497](https://github.com/openclaw/openclaw/issues/195497) — **8 条评论**
- [#207254](https://github.com/openclaw/openclaw/pull/207254)

**核心诉求：** 需要解释并解决启动后 RSS 异常增长、消息处理导致 SQLite 事务超时，以及 1 GiB cgroup 下 Gateway 尚未来得及处理首个模型请求就 OOM 的问题。

**社区信号：** 这类反馈横跨 ARM64、Linux、Ubuntu、WebSocket 和长期 Gateway 部署，说明它不是单平台边缘故障，而可能是运行时常驻对象、缓存或生命周期管理问题。

### 4.4 Control UI 会话与 CPU 回归

- [#200781](https://github.com/openclaw/openclaw/issues/200781) — **10 条评论**
- [#196820](https://github.com/openclaw/openclaw/issues/196820) — **9 条评论**

**核心诉求：** Sessions 页面应显示真实会话而非仅 agent header；Control UI 也不能因 `Element.getAnimations()` 循环占满 CPU。

**社区信号：** Control UI 已成为关键操作面，但其状态投影、默认分组和渲染生命周期仍存在明显回归。

### 4.5 模型路由与凭据配置问题

- [#158144](https://github.com/openclaw/openclaw/issues/158144) — **7 条评论**
- [#113159](https://github.com/openclaw/openclaw/issues/113159) — **9 条评论**
- [#58289](https://github.com/openclaw/openclaw/issues/58289) — **8 条评论**
- [#277](https://github.com/openclaw/openclaw/pull/207277)

**核心诉求：** 长生命周期会话应在账户达到配额后切换到下一个 profile；所有 provider 都应尊重真实 reset time；子代理和工作树中的模型访问不应意外丢失账户授权。

**社区信号：** 用户关注的是模型路由在多账户、多工作区和长会话环境下是否稳定，而非单一 provider 的接入支持。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

| 问题 | 影响 | 状态 / fix PR |
|---|---|---|
| [#197083：升级后 Doctor WAL publication 验证失败](https://github.com/openclaw/openclaw/issues/197083) | 新核心已激活但迁移未完整 finalize，插件或外部状态可能不一致 | **开放，未见明确 fix PR** |
| [#126821：全新 SQLite 在 15–24 小时内复发损坏](https://github.com/openclaw/openclaw/issues/126821) | 可能导致数据损坏、消息丢失和 Gateway 瘫痪 | **开放，未见明确 fix PR** |
| [#152275：插件提交后激活失败，模型目录和回复派发不可用](https://github.com/openclaw/openclaw/issues/152275) | 必须重启才能恢复服务 | **开放，未见明确 fix PR** |
| [#202518：claude-cli 在 spawn/yield 后不关闭，后续复用失效会话](https://github.com/openclaw/openclaw/issues/202518) | 长会话阻塞、状态污染 | **开放，未见明确 fix PR** |
| [#188563：macOS 恢复时无法将 LaunchAgent 移至 Trash](https://github.com/openclaw/openclaw/issues/188563) | 恢复流程中断 | **开放，标记 `queueable-fix`，未见明确 PR** |
| [#141443：Linux AppImage 在 CachyOS Wayland 黑屏](https://github.com/openclaw/openclaw/issues/141443) | 桌面端完全不可用 | **开放，未见明确 fix PR** |

### P1 / 高优先级

| 问题 | 影响 | 状态 / fix PR |
|---|---|---|
| [#178359：doctor --fix 长时间无输出且未进入 DB 修复](https://github.com/openclaw/openclaw/issues/178359) | 修复流程挂起 | **开放，未见明确 fix PR** |
| [#181432：约 1.9 GB 基线 RSS 与 SQLite 超时](https://github.com/openclaw/openclaw/issues/181432) | 内存告警、事务变慢、崩溃风险 | **开放；[#207254](https://github.com/openclaw/openclaw/pull/207254) 为局部优化** |
| [#194403：helper completion continuation 使自身执行权限失效](https://github.com/openclaw/openclaw/issues/194403) | 对话被后台工作阻塞 | **开放，未见明确 fix PR** |
| [#195497：17 小时增长至约 3 GB 内存](https://github.com/openclaw/openclaw/issues/195497) | 长期 Gateway 稳定性风险 | **开放，未见明确 fix PR** |
| [#200148：macOS `/restart` 无限挂起且 launchd 不再拉起](https://github.com/openclaw/openclaw/issues/200148) | 服务假死 | **开放，未见明确 fix PR** |
| [#206669：Windows SQLite integrity worker 不退出](https://github.com/openclaw/openclaw/issues/206669) | 每次启动额外等待约 300 秒/数据库 | **开放；同号 PR 提供候选修复** |
| [#206030：迁移后的 transcript backlog 无法回收](https://github.com/openclaw/openclaw/issues/206030) | checkpoint 持续过期、消息被拒绝 | **开放，未见明确 fix PR** |
| [#196820：Control UI `getAnimations()` 循环导致 100% CPU](https://github.com/openclaw/openclaw/issues/196820) | 控制面不可用 | **开放，未见明确 fix PR** |
| [#207190：Gateway 内 agent 停止 Gateway 时自死锁](https://github.com/openclaw/openclaw/issues/207190) | 等待约 324–330 秒后才超时 | **开放，未见明确 fix PR** |
| [#207277：工作树中的 agent 丢失账户模型访问](https://github.com/openclaw/openclaw/pull/207277) | 子代理请求在模型调用前被拒绝 | **已有开放 PR #207277** |
| [#157332：candidate gateway canary 验证超时](https://github.com/openclaw/openclaw/issues/157332) | 自动升级失败 | **开放，标记 linked PR，但未见明确合并状态** |

### P2 / 中优先级及回归

- [#200756：Windows beta.2 → beta.4 在 package-swap 阶段失败](https://github.com/openclaw/openclaw/issues/200756)  
  **未见明确 fix PR。**

- [#200781：Control UI Sessions 侧栏只显示 agent headers](https://github.com/openclaw/openclaw/issues/200781)  
  **未见明确 fix PR。**

- [#92473：模型 fallback 内部提示泄漏到外部渠道](https://github.com/openclaw/openclaw/issues/92473)  
  涉及信息暴露；**未见明确 fix PR。**

- [#112638：session maintenance 的 maxEntries/maxDiskBytes 被绕过](https://github.com/openclaw/openclaw/issues/112638)  
  存储可无限增长；**未见明确 fix PR。**

- [#127195：16 处 session “changed while starting work” 错误缺少原因码](https://github.com/openclaw/openclaw/issues/127195)  
  **未见明确 fix PR。**

- [#146311：多 bot 群聊中 transcript echo 重复触发](https://github.com/openclaw/openclaw/issues/146311)  
  **标记 linked PR open。**

- [#158144：Claude CLI 长会话固定使用已耗尽额度的 Anthropic profile](https://github.com/openclaw/openclaw/issues/158144)  
  **未见明确 fix PR。**

- [#149406：sessions_spawn 子代理缺少第三方 MCP server](https://github.com/openclaw/openclaw/issues/149406)  
  **未见明确 fix PR。**

- [#193150：Dreaming Promotion cron 无运行进度，被误判卡死](https://github.com/openclaw/openclaw/issues/193150)  
  **标记 queueable-fix，未见明确 PR。**

- [#155908：memory-wiki 缓存清理超时并使语料不可用](https://github.com/openclaw/openclaw/issues/155908)  
  **未见明确 fix PR。**

- [#187654：macOS 受保护 exec 提前拒绝绝对路径 Node 调用](https://github.com/openclaw/openclaw/issues/187654)  
  **未见明确 fix PR。**

---

## 6. 功能请求与路线图信号

### 6.1 自动化运行位置与统一任务模型

- [#201285](https://github.com/openclaw/openclaw/pull/201285)：选择自动化在哪里运行。
- [#201275](https://github.com/openclaw/openclaw/pull/201275)：用 task prompt 统一提醒调度。
- [#201288](https://github.com/openclaw/openclaw/pull/201288)：自动化计费账户显式化。

**路线图判断：** 很可能进入后续版本，但三个 PR 都属于 XL 规模，且标注“仍在进行/不要合并”，更可能分阶段落地。

### 6.2 记忆能力继续深化

- [#158897](https://github.com/openclaw/openclaw/issues/158897)：Dreaming promotion 的 `MEMORY.md` 大小预算可配置，已关闭。
- [#178914](https://github.com/openclaw/openclaw/issues/178914)：memory search 排序支持混合权重、MMR 和可配置衰减，已关闭。
- [#151766](https://github.com/openclaw/openclaw/issues/151766)：补充德语 recall-intent 模式。
- [#112638](https://github.com/openclaw/openclaw/issues/112638)：让 session maintenance 真正遵守容量边界。

**路线图判断：** 搜索排序和 promotion 配置已有收口迹象；下一步重点应从“增加记忆功能”转向“确保记忆存储、清理和召回行为可靠”。

### 6.3 Provider 与模型路由配置化

- [#113159](https://github.com/openclaw/openclaw/issues/113159)：所有 provider 使用真实 usage reset time。
- [#167341](https://github.com/openclaw/openclaw/issues/167341)：允许运维覆盖模型请求失败的面向用户文案。
- [#158144](https://github.com/openclaw/openclaw/issues/158144)：长会话在 profile 配额耗尽后自动切换。
- [#58289](https://github.com/openclaw/openclaw/issues/58289)：非主 agent 也能生成并解析 `models.json`。
- [#207277](https://github.com/openclaw/openclaw/pull/207277)：管理型工作树中保留账户模型访问。

**路线图判断：** 多账户、限流和 fallback 的统一行为很可能继续进入下一批迭代；其中 [#207277] 已具备可审查实现。

### 6.4 第三方 MCP 与子代理能力发现

- [#149406](https://github.com/openclaw/openclaw/issues/149406)：子代理应继承第三方 MCP server。
- [#207314](https://github.com/openclaw/openclaw/pull/207314)：Tool Search 应把 `sessions_spawn` 与 delegation family 一起暴露。

**路线图判断：** 较可能作为短期 agent-tooling 修复进入下一版本，因为用户诉求明确，且已有小规模 PR。

### 6.5 备份与运维配置

- [#204701](https://github.com/openclaw/openclaw/issues/204701)：允许配置 Git 备份超时和表级排除。

**路线图判断：** 适合进入运维增强类版本，但当前没有对应 PR，短期落地概率低于会话和自动化方向。

### 6.6 可观测性与诊断能力

- [#127195](https://github.com/openclaw/openclaw/issues/127195)：为 session 启动冲突增加原因码和调用点标签。
- [#138528](https://github.com/openclaw/openclaw/issues/138528)：保留 blocked tool call 分类，便于解释 cron 中止原因。

**路线图判断：** 与当前 Gateway 稳定性治理高度相关，预计会以诊断和测试改进形式逐步吸收。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **长期运行的个人 Gateway**
   - 用户普遍使用 systemd user service、Feishu WebSocket、多个 cron job 和多 agent 数据库。
   - 这类部署最容易暴露内存增长、SQLite 锁、后台任务残留和升级状态污染。

2. **多账户与多模型工作流**
   - 用户同时配置多个 Anthropic profile、OpenAI/Codex 访问计划和 fallback。
   - 核心期待是额度耗尽后自动切换、工作树中保留授权，并显示真实的 reset time。

3. **多 bot 群聊与共享工作区**
   - Telegram 群聊中存在多个 OpenClaw agent，共用 workspace、记忆或 MCP 配置。
   - 用户希望 transcript、工具注册和状态隔离按 agent 正确工作。

4. **受限 ARM64 与轻量设备**
   - 1 GiB cgroup、无 swap、单 CPU 的设备仍被认为应可运行。
   - 当前 Gateway 在首个模型响应前 OOM，明显低于用户预期。

5. **自托管及跨账户更新**
   - root 管理 npm package、不同用户运行 systemd service 是常见部署。
   - 用户希望升级不触碰错误的 home/state 目录，也不在旧服务仍在线时强行替换文件。

### 主要满意点

- 更新过程正在引入 prepared release、候选验证和常驻 launcher，比直接覆盖安装明显更可靠。
- Control UI 的多项修复开始提供可操作的错误解释，而不是只显示“Try again”。
- End Talk 语义、自动化历史和失败状态的方向符合用户预期：界面关闭不应等同于后台任务被取消。
- 自动化运行位置、计费账户显式化、可配置 memory search 等需求表明项目正从“功能堆叠”转向可运营性。

### 主要不满意点

- 自动升级仍频繁在 Doctor、SQLite、package-swap、legacy migration 和 rollback 阶段失败。
- 失败反馈经常过于笼统，用户无法判断究竟哪些状态已提交、哪些仍需恢复。
- 内存问题出现多份报告但缺少统一诊断结论；局部代码清理尚未消除生产现象。
- Control UI 的 Sessions、CPU 循环和项目恢复提示仍影响基本操作。
- 大量 issue 标注“needs maintainer review”“needs product decision”或“no new fix PR”，说明维护分流仍存在积压。

---

## 8. 待处理积压

### 8.1 长期开放且影响面较大的问题

- [#126821：SQLite 在全新重建库上仍复发损坏](https://github.com/openclaw/openclaw/issues/126821)  
  P0，涉及数据完整性和消息丢失；应优先获得可重复诊断、修复版本和回归测试。

- [#114612：memory_index_chunks 与 embedding cache 无保留策略](https://github.com/openclaw/openclaw/issues/114612)  
  已关闭为 stale，但底层磁盘无限增长风险可能仍存在；建议复核关闭原因是否已有真正落地策略。

- [#112638：session maintenance 不限制 thread/channel 条目](https://github.com/openclaw/openclaw/issues/112638)  
  存储上限长期失效，应明确产品语义并进入维护队列。

- [#127195：相同 session 冲突错误缺少可诊断原因](https://github.com/openclaw/openclaw/issues/127195)  
  涉及 16 个调用点、11 个文件，应统一错误码，而不是逐点修补。

- [#149406：子代理缺少第三方 MCP 工具](https://github.com/openclaw/openclaw/issues/149406)  
  长期影响多 agent 与外部工具集成，且有安全审查价值。

- [#158144：Claude CLI 长会话不切换耗尽 profile](https://github.com/openclaw/openclaw/issues/158144)  
  配额轮换是高频生产需求；应明确 profile 绑定和 fallback 生命周期。

- [#205007：疑似设备完全失控及异常代码投诉](https://github.com/openclaw/openclaw/issues/205007)  
  内容混杂安全投诉与大量代码片段，应由维护者进行安全分类，收集可验证样本后处理，避免误判或遗漏。

### 8.2 PR 合并积压

- 当前有 **264 个待合并 PR**，约占当日 500 条 PR 更新的一半以上。
- [#201288](https://github.com/openclaw/openclaw/pull/201288)、[#201285](https://github.com/openclaw/openclaw/pull/201285)、[#201275](https://github.com/openclaw/openclaw/pull/201275)、[#201280](https://github.com/openclaw/openclaw/pull/201280) 均标注仍在讨论或“不要落地”，且涉及 Gateway、CLI、Web UI、Android、memory-core 等多层模块。
- [#206321](https://github.com/openclaw/openclaw/pull/206321)、[#206329](https://github.com/openclaw/openclaw/pull/206329) 涉及跨端任务生命周期，仍需明确兼容性证明。
- [#207101](https://github.com/openclaw/openclaw/pull/207101) 修改安全敏感的工具结果边界，应要求更严格的安全审查和跨路由回归测试。
- [#207230](https://github.com/openclaw/openclaw/pull/207230) 与 [#207304](https://github.com/openclaw/openclaw/pull/207304) 围绕同一更新设计，建议协调为一致方案，避免 root/state 所有权逻辑分叉。

### 8.3 维护建议

1. **建立更新状态机专项看板**，统一 prepared release、Doctor、迁移、提交、回滚和 launcher 的验收标准。
2. **为 SQLite/Doctor 问题设置独立 release blocker**，优先处理 [#197083](https://github.com/openclaw/openclaw/issues/197083)、[#126821](https://github.com/openclaw/openclaw/issues/126821)、[#205202](https://github.com/openclaw/openclaw/issues/205202)。
3. **发布 ARM64 内存基准**，至少覆盖 768 MiB/1 GiB cgroup、首响应、持续消息和 cron 场景。
4. **为 task lifecycle 定义统一状态机**，覆盖 spawn、yield、helper completion、End Talk、Stop 和 Gateway shutdown。
5. **清理 stale/no-fix 积压时进行代码层复核**，避免以关闭 issue 代替真正解决存储增长、状态上限和路由问题。
6. **对大范围 PR 设置合并策略**：先拆基础抽象与兼容层，再分别合并 Web、Android、Apple、CLI 和 provider 适配，降低一次性回归风险。

---

## 健康度结论

| 维度 | 评价 |
|---|---|
| 开发活跃度 | **高**：24 小时内 500 条 PR 更新、334 条 Issue 更新 |
| 发布活跃度 | **中高**：发布 1 个 beta，prepared-release 与 prompt cache 均有实质进展 |
| 合并吞吐 | **一般**：待合并 PR 达 264 条，大型跨模块 PR 积压明显 |
| 稳定性 | **偏弱**：SQLite、Doctor、内存增长、Gateway shutdown 与任务生命周期均有 P0/P1 |
| 社区反馈 | **活跃**：更新设计、Doctor、内存和 UI 问题形成高热度议题 |
| 下一版本潜力 | **较高**：自动化统一、工具发现、UI 诊断、跨账户更新方向清晰 |
| 主要风险 | **状态一致性与资源生命周期**：更新半完成、数据库迁移、后台任务残留和内存无界增长 |

**综合判断：OpenClaw 处于高吞吐重构期，功能面快速扩张，但发布质量尚未完全追上开发速度。未来一至两个版本的关键，不是继续增加功能数量，而是把更新、Doctor、SQLite、Gateway 生命周期和任务状态机收敛为可验证、可回滚、可诊断的稳定体系。**

---

## 横向生态对比

# 开源个人 AI 助手 / 自主智能体生态横向对比报告

**统计日期：2026-11-28**  
**覆盖项目：OpenClaw、NanoBot、PicoClaw、Hermes Agent、QwenPaw、LobsterAI、IronClaw、OpenHuman**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正进入**“高功能密度、高架构复杂度、高兼容性压力”并存**的阶段：OpenClaw、Hermes Agent、QwenPaw 和 LobsterAI 均保持高强度开发，并分别在自动化、插件化、Console 交互和企业桌面端方向快速扩张。  
与此同时，生态的主要矛盾已从“能否完成 Agent 循环”转向**长会话稳定性、跨平台部署、Provider 协议兼容、状态一致性与资源生命周期**。SQLite 损坏、Gateway 内存增长、工具调用协议偏差、Cron/Relay 状态机异常等问题在多个项目中反复出现。  
工具和 Skills 数量快速增长后，**按需发现、上下文预算、手动调用权限和安全边界**成为共同诉求。更新机制也从直接覆盖安装转向 prepared release、候选验证、回滚和可诊断状态。  
社区路线开始明显分化：OpenClaw 强调通用自动化与多 Agent，Hermes 强调插件平台和桌面工作台，NanoBot 强调轻量多模型兼容，PicoClaw 强调边缘部署，LobsterAI 强调开箱即用的企业桌面体验，QwenPaw 强调 Console、Cron 和企业扩展能力。

---

## 2. 各项目活跃度对比

> Issue/PR 数按给定日报的过去 24 小时统计口径；“PR 数”包含已合并、关闭及待处理更新。

| 项目 | Issues | PRs | Release | 待合并 PR | 今日主要特征 | 健康度 |
|---|---:|---:|---|---:|---|---|
| **OpenClaw** | **334** | **500** | 1 个 Beta：`v2026.12.1-beta.1` | **264** | 发布吞吐和社区规模领先；更新、SQLite、内存及任务生命周期仍有 P0/P1 | **活跃但风险偏高** |
| **Hermes Agent** | **50** | **50** | 1 个补丁版：`v0.23.5` | **40** | Gateway、Cron/Kanban、插件化和桌面生态并进；跨平台债务较重 | **良好，需关注回归与积压** |
| **QwenPaw** | **9** | **20** | 无 | **17** | Issue→PR 闭环较快，但 Cron 500、QQ 重连、子 Agent 隔离尚未落地 | **活跃但处于修复收敛期** |
| **NanoBot** | **6** | **10** | 无 | **7** | 工具目录、Skills、多 Provider 接入活跃；协议兼容和资源治理压力上升 | **良好但存在波动** |
| **LobsterAI** | **0** | **17** | 1 个版本：`2026.11.27` | **0** | 完成 OpenClaw→DSH 核心迁移，集中交付效率突出；尚缺真实用户回归信号 | **良好，迁移后观察期** |
| **PicoClaw** | **2** | **6** | 无 | **2** | 修复与集成优先；Web 输入性能和 Telegram 代理链路是重点 | **中等偏积极** |
| **IronClaw** | 0 | 0 | 无 | — | 过去 24 小时无活动 | **静默，需结合更长周期判断** |
| **OpenHuman** | 0 | 0 | 无 | — | 过去 24 小时无活动 | **静默，需结合更长周期判断** |

### 活跃度分层

- **第一梯队：OpenClaw**  
  以 334 条 Issue、500 条 PR 明显领先，是本组社区规模和开发吞吐最大的项目；但 264 个待合并 PR 也构成最高治理压力。

- **第二梯队：Hermes Agent、QwenPaw**  
  Hermes 兼具发布、插件生态和桌面端投入；QwenPaw 开发密度高，但待合并 PR 占比达 85%，落地节奏偏慢。

- **第三梯队：NanoBot、PicoClaw**  
  NanoBot 正快速平台化，PicoClaw 则以修复和边缘场景为主，两者规模均小于前三者。

- **发布观察期：LobsterAI**  
  今日无 Issue 更新不等于没有问题；106 个 PR 规模的 DSH 迁移刚发布，真实兼容性反馈可能尚未形成。

---

## 3. OpenClaw 在生态中的定位

### 3.1 生态优势

#### 社区规模与开发吞吐显著领先

OpenClaw 今日处理量约为：

- Hermes Agent 的 **6.7 倍 Issue 更新量**；
- Hermes Agent 的 **10 倍 PR 更新量**；
- QwenPaw 的 **37 倍 Issue 更新量**；
- PicoClaw 的 **167 倍 Issue 更新量**。

这意味着 OpenClaw 已形成更大的问题发现、贡献和发布循环，但也产生更高协调成本。

#### 自动化与任务编排覆盖最完整

OpenClaw 同时推进：

- 自动化运行位置；
- task prompt 统一；
- 自动化计费账户；
- 一次性任务历史；
- 子代理工具发现；
- End Talk 与后台任务取消边界；
- Gateway、CLI、Web UI、Apple 客户端的一致生命周期。

其目标不是单点聊天助手，而是覆盖**个人 Agent、后台自动化、多渠道、多模型、多工作区**的通用运行时。

#### 生态兼容性意识较强

prepared release、常驻 launcher、候选 Gateway 验证、跨账户服务所有权、SQLite 迁移和回滚设计，显示其已经进入类似操作系统或 Agent Runtime 的工程阶段。

### 3.2 与同类项目的技术路线差异

| 维度 | OpenClaw | Hermes Agent | NanoBot | QwenPaw | LobsterAI | PicoClaw |
|---|---|---|---|---|---|---|
| 核心定位 | 通用自动化与多 Agent 平台 | 插件化 Agent 与桌面工作台 | 轻量多模型 Agent | Console、Cron、企业扩展型 Agent | 开箱即用的桌面个人助手 | 边缘/轻量设备 Agent |
| 更新机制 | prepared release、候选验证、回滚 | 多渠道版本发布、安装器与 Docker | 快速迭代、兼容层 | 暂无当日发布 | 桌面端集中版本迁移 | 小步修复 |
| 工具治理 | 工具搜索、delegation family | 插件协议、输出策略、上下文预算 | BM25 工具发现、manual-only Skills | 工具注入、治理规则 | Marketplace、只读 Skills | Provider/工具兼容修复 |
| 部署重点 | Linux、macOS、Windows、systemd、多账户 | systemd、Windows、Termux、Docker、Cloud | 轻量运行、CLI、多 Provider | Console/API、反向代理、企业环境 | 桌面端、IM、MCP Marketplace | Web/Telegram、边缘设备 |
| 稳定性焦点 | 更新、SQLite、内存、任务死锁 | 桌面性能、Cron/Kanban、插件安全 | 协议兼容、缓存、进程回收 | Cron、Relay、QQ 重连、Agent 隔离 | 引擎迁移、历史兼容、IM 路由 | 代理一致性、前端性能 |

### 3.3 社区规模判断

从当日公开活动量看，OpenClaw 明显领先 Hermes、QwenPaw、NanoBot 和 PicoClaw，体现出：

1. **更大的贡献者与问题反馈基数**；
2. **更强的持续集成和版本发布节奏**；
3. **更广泛的自托管用户场景**；
4. 同时伴随 **264 个待合并 PR、P0/P1 未收口和状态机债务**。

因此，OpenClaw 的领先更接近“规模与复杂度领先”，不能简单等同于“成熟度领先”。

---

## 4. 共同关注的技术方向

### 4.1 Agent 工具和 Skills 的按需发现

**涉及项目：OpenClaw、NanoBot、QwenPaw、Hermes Agent、LobsterAI**

- OpenClaw 将 `sessions_spawn` 与 delegation family 一并纳入 Tool Search；
- NanoBot 以 BM25 对大型工具目录按需检索，并设置 8,192 Token Schema 预算；
- Hermes 插件系统提示词存在 4K/8K 硬编码上限；
- QwenPaw 暴露治理规则、工具守卫及注入上下文配置问题；
- LobsterAI 通过 Marketplace 和只读挂载管理 Skills。

**共同诉求：** 工具数量增长后，不能继续在每次请求中携带全部 Schema；需要按需检索、上下文预算、优先级和可解释的注入机制。

### 4.2 Provider 与 OpenAI-compatible 协议兼容

**涉及项目：NanoBot、PicoClaw、OpenClaw、Hermes Agent、QwenPaw**

- NanoBot 出现 Gemini 流式 `tool_calls.index` 缺失、Claude `cache_control` 丢失、历史代理字符导致 400；
- PicoClaw 修复 Claude 工具名读取错误导致空工具名；
- OpenClaw 关注多账户配额、reset time 和 profile fallback；
- Hermes 存在 Anthropic 工具别名映射和多 Provider 路由差异；
- QwenPaw 开始支持自定义 provider 作为决策模型。

**共同诉求：** “兼容 OpenAI API”不等于行为完全一致。Agent Runtime 需要规范化流式 tool call、参数编码、缓存标记、错误语义和 fallback。

### 4.3 自动化、Cron 与 Kanban 生命周期

**涉及项目：OpenClaw、QwenPaw、Hermes Agent**

- OpenClaw 统一 task prompt、运行位置、账户绑定、Active/Paused/History；
- QwenPaw 的 Cron API 因工作区解析错误全部返回 500；
- Hermes 修复 Kanban consent refusal 分类和 claim 生命周期。

**共同诉求：** 自动化不能只是一条定时命令，而应具有明确状态：**排队、运行、等待输入、完成、失败、取消、过期、回收**。

### 4.4 更新、迁移与可恢复性

**涉及项目：OpenClaw、LobsterAI、Hermes Agent**

- OpenClaw 推进 prepared release、候选验证、Doctor/SQLite finalize 和 rollback；
- LobsterAI 完成 OpenClaw→DSH 核心引擎迁移；
- Hermes 在一个补丁版本中汇总约 338 个 PR。

**共同诉求：** “服务恢复在线”不等于“升级成功”。用户需要明确知道迁移提交点、数据是否完整、失败如何回滚，以及旧配置是否真正生效。

### 4.5 长会话上下文与资源治理

**涉及项目：OpenClaw、Hermes Agent、NanoBot、QwenPaw**

- OpenClaw 存在 Gateway RSS 增长至约 1.9–3 GB、SQLite 超时；
- Hermes 存在 Linux/AMD iGPU 50%–69% 和 worker 压缩失败；
- NanoBot 引入工具检索，并关注 MCP 空闲进程回收；
- QwenPaw 推进历史分页、上下文注入去重。

**共同诉求：** 长期运行 Agent 必须将消息历史、工具 Schema、压缩缓存、worker、浏览器/桌面渲染和 MCP 进程纳入统一资源预算。

### 4.6 多 Agent 的上下文与工具隔离

**涉及项目：OpenClaw、QwenPaw、Hermes Agent、NanoBot**

- OpenClaw 关注子代理 MCP 工具发现和账户授权继承；
- QwenPaw 的 Code Mode 子 Agent 错误继承父会话 `_execution_toolkit`；
- Hermes 关注 Cron/API Server 与交互会话能力不一致；
- NanoBot 正在处理子 Agent 部分完成状态语义。

**共同诉求：** 子 Agent 必须明确继承哪些工具、凭据、记忆、账户和权限，同时避免继承不应共享的运行时状态。

### 4.7 IM 渠道的一致性与安全

**涉及项目：OpenClaw、LobsterAI、Hermes Agent、QwenPaw、PicoClaw**

- LobsterAI 修复 QQ/Telegram/Discord 群路由、多机器人共享任务和默认开放私聊；
- QwenPaw 修复 QQ WebSocket 清理异常导致永久不重连；
- PicoClaw 的 Telegram 附件下载绕过代理；
- OpenClaw 处理群聊 transcript echo、多 bot 隔离和消息投递语义。

**共同诉求：** 渠道适配不仅是“能发消息”，还包括代理、权限、群身份、机器人路由、重连、会话归属和审计。

---

## 5. 差异化定位分析

### OpenClaw：通用个人智能体操作系统

- **目标用户：** 自托管重度用户、多渠道自动化用户、Agent 开发者、多账户与多工作区用户。
- **技术侧重：** Gateway 常驻运行时、自动化、工具、子代理、模型路由、跨平台更新、状态迁移。
- **优势：** 生态规模最大，功能覆盖和扩展面最广。
- **短板：** 状态一致性和资源生命周期复杂，P0/P1 与 PR 积压最突出。

### Hermes Agent：插件化的桌面 Agent 工作台

- **目标用户：** 希望将 Agent 作为长期桌面操作台、语音/A2A/MCP 扩展用户。
- **技术侧重：** Desktop、Gateway、Cron/Kanban、插件协议、输出治理、跨 profile 和多渠道。
- **优势：** 插件生态与桌面工作流活跃，外部贡献丰富。
- **短板：** Windows、Termux、Linux/AMD、Matrix 等边缘环境成熟度不一，补丁版聚合规模较大。

### NanoBot：轻量、多 Provider 的可扩展 Agent 内核

- **目标用户：** 偏好 Python/CLI、频繁切换模型和 Skills、需要低成本工具调用的个人开发者。
- **技术侧重：** 多 Provider 兼容、Skills、工具检索、WebUI、MCP 生命周期。
- **优势：** 轻量、平台化方向清晰，BM25 工具发现与 manual-only Skills 很有价值。
- **短板：** OpenAI-compatible 细节差异较多，缓存、工具调用和参考图能力存在兼容债。

### QwenPaw：Console、Cron 与企业扩展型 Agent

- **目标用户：** 需要 Console 会话管理、自动化任务、企业 MCP 和私有部署的团队。
- **技术侧重：** Console 稳定、Relay、Cron、QQ、企业 Platform-Worker、决策模型与扩展接口。
- **优势：** Issue 与修复 PR 联动紧密，企业用户开始参与上游共建。
- **短板：** 17/20 个 PR 待合并，Cron、Channel、Creator Tests 等关键路径尚未形成稳定发布基线。

### LobsterAI：开箱即用的企业桌面个人助手

- **目标用户：** 注重桌面体验、IM、Skills/MCP Marketplace、模型目录和低运维成本的中文用户。
- **技术侧重：** DSH 引擎、桌面宿主、IM 路由、会话同步、插件和 Marketplace。
- **优势：** 一次发布打通引擎、会话、插件、渠道、Skills 和设置页，交付效率高。
- **短板：** DSH 迁移规模巨大，真实用户回归信号尚少；旧插件、旧配置和历史会话兼容性需持续观察。

### PicoClaw：轻量、边缘友好的多渠道 Agent

- **目标用户：** Web/Telegram 用户、边缘设备用户、偏好简单 Provider 配置的开发者。
- **技术侧重：** 小体量多渠道、Provider 适配、前端交互与安装体验。
- **优势：** 问题到修复路径短，适合资源受限环境。
- **短板：** 功能与生态规模较小；网络配置一致性和长期 PR 决策能力偏弱。

### IronClaw / OpenHuman

过去 24 小时没有活动，单日数据不足以判断其产品方向或长期健康度。若要参与生态比较，需补充至少 30–90 天的 Issue 响应、发布频率、提交活跃度和用户规模数据。

---

## 6. 社区热度与成熟度

### 快速迭代阶段

| 项目 | 判断依据 |
|---|---|
| **OpenClaw** | 500 条 PR 更新、1 个 Beta、264 个待合并 PR；功能扩张和架构重构并行 |
| **Hermes Agent** | 50 Issues + 50 PRs、1 个版本；插件、桌面、Cron/Kanban 同时演进 |
| **NanoBot** | 工具发现、Skills、OAuth、Provider 接入密集；PR/Issue 比高 |
| **QwenPaw** | 20 个 PR 中大量为底层修复和 Creator 结构化输出加固，尚未充分合入 |

这些项目的共同特征是：**方向明确、产出密集，但发布基线与 PR 队列之间存在明显时滞**。

### 质量巩固阶段

| 项目 | 判断依据 |
|---|---|
| **LobsterAI** | DSH 迁移版本已发布，待合并 PR 清零；下一阶段重点是真实兼容性回归 |
| **PicoClaw** | 今日主要为 Web 性能、Claude 工具调用、历史修复收尾，适合稳定化推进 |
| **OpenClaw**中的局部方向 | prepared release、Doctor/SQLite、任务状态机已进入从“功能开发”转向“验收和回滚”的阶段 |

### 社区热度判断

- **最高热度且最高治理压力：OpenClaw**
- **功能提案与插件贡献最活跃：Hermes Agent**
- **开发响应快但发布偏慢：QwenPaw**
- **轻量生态方向讨论最集中：NanoBot**
- **发布影响最大、但用户反馈尚少：LobsterAI**
- **小规模、问题驱动：PicoClaw**

成熟度上，**PicoClaw 与 LobsterAI 更接近产品化收敛阶段**；OpenClaw、Hermes、QwenPaw、NanoBot 均仍处于高强度架构演进期。需要强调的是，“成熟”不等于“功能少”，而是关键路径是否可验证、可恢复、可诊断。

---

## 7. 值得关注的趋势信号

### 7.1 Agent Runtime 正从单体循环走向状态机系统

OpenClaw 的更新/任务生命周期、Hermes 的 Kanban、Cron 与压缩、LobsterAI 的群任务和审批，都指向同一变化：Agent 的核心不再只是“模型—工具—回答”，而是**状态、恢复、归属、取消和审计**。

**开发建议：** 在继续增加工具前，优先建立统一的任务状态机和状态转换日志。

### 7.2 “OpenAI-compatible”仍需要一层强规范化适配层

NanoBot、PicoClaw 的 Bug 表明，流式 tool call、缓存断点、参数编码和图像编辑差异仍是高频故障源。

**开发建议：** 将 Provider 适配拆成协议级契约测试矩阵，至少覆盖：

- 并行 tool call 与缺失 `index`；
- 无文本 assistant tool call；
- 非法代理字符与 JSON 转义；
- `cache_control` 映射；
- 参考图/多模态输入；
- 错误响应的结构化归一化。

### 7.3 工具发现正在取代“全量工具注入”

BM25、Tool Search、上下文预算和手动调用 Skills 同时出现，说明生态已进入工具过载阶段。

**开发建议：** 工具注册系统应原生提供：

- 分类与标签；
- 检索排序；
- Token 成本；
- 权限等级；
- 自动/手动调用策略；
- 命中与拒绝原因。

### 7.4 多 Agent 隔离是下一阶段核心安全问题

QwenPaw 的父会话工具上下文污染、OpenClaw 的账户授权继承、NanoBot 的子 Agent 完成状态，说明“能创建子 Agent”并不等于隔离正确。

**开发建议：** 默认采用显式 capability grant，禁止隐式继承凭据、工具注册和执行上下文；对共享记忆与工作区单独授权。

### 7.5 更新可靠性会成为用户选择框架的重要指标

OpenClaw 和 LobsterAI 的大规模迁移都暴露了同一问题：数据迁移、插件兼容、状态提交和回滚比新增功能更容易伤害信任。

**开发建议：** 发布说明应提供：

- 状态机式升级阶段；
- 成功判定标准；
- 数据库迁移校验；
- 自动回滚条件；
- 配置迁移差异；
- 跨版本恢复说明。

### 7.6 长会话优化的重点正从“压缩”转向“全链路资源治理”

工具 Schema、缓存、消息历史、MCP 子进程、浏览器动画和常驻 Gateway 都可能成为长期资源来源。

**开发建议：** 建立可重复基准，至少跟踪 RSS、CPU、数据库事务延迟、首响应时间、压缩次数、工具 Schema Token 和孤儿进程数量。

### 7.7 渠道安全默认值将从“可用优先”转向“最小权限”

LobsterAI 已将 Telegram/Discord 私聊默认策略收紧为白名单；Hermes 和 OpenClaw 也持续处理路由、权限和跨机器人隔离。

**开发建议：** 新渠道默认 fail-closed，并提供迁移向导；自动迁移不能静默改变既有消息访问权限。

---

## 综合结论

**OpenClaw 是当前样本中社区规模最大、功能覆盖最广、自动化与多 Agent 能力最完整的项目，但尚未解决更新、SQLite、内存和任务状态一致性等底层问题。**  
Hermes Agent 的优势在插件平台和桌面工作流；NanoBot 的优势在轻量多 Provider 适配；QwenPaw 的优势在 Console、Cron 和企业扩展；LobsterAI 的优势在桌面端开箱即用与 DSH 集成；PicoClaw 则更适合轻量、边缘和聚焦场景。

生态下一阶段的核心竞争点不会只是“接入了多少模型和工具”，而是：

1. **状态是否可恢复；**
2. **资源是否可控；**
3. **协议是否真正兼容；**
4. **子 Agent 是否安全隔离；**
5. **升级后能否证明数据与配置完整。**

对技术决策者而言，选型时应把上述五项作为与模型能力、工具数量同等重要的评估维度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-11-28**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**整体判断：活跃偏高，工程推进明显，但稳定性与兼容性债务正在集中暴露。**

---

## 1. 今日速览

过去 24 小时共更新 **6 条 Issues**（5 条活跃、1 条关闭）和 **10 条 PR**（7 条待合并、3 条已合并/关闭），项目讨论与开发活跃度均较高。  
今日议题主要集中在 **OpenAI 兼容层、Claude/Gemini 工具调用、多模型接入、Skills 扩展机制与工具目录治理**，说明项目正从单一 Agent 循环向多提供商、多工具、多入口的平台化方向演进。  
当日没有新版本发布，但已有 **2 个重要 PR 被关闭**，涉及重复工具调用保护和 MCP 服务空闲超时自动清理，反映稳定性治理仍在推进。  
当前健康度评估为 **良好但存在波动**：功能开发非常积极，不过 Gemini 工具调用故障、Claude 缓存断点丢失、图像参考图被忽略等 Bug 表明兼容层质量尚未完全稳定。

---

## 3. 项目进展

> 今日无新版本发布，因此不单列“版本发布”。

### 已关闭的重要 PR

#### 1. 为所有工具增加通用重复调用保护

- PR：[#4522 fix(runner): add generic repeated-tool-call guard for all tools](https://github.com/HKUDS/nanobot/pull/4522)
- **状态：已关闭**
- 主要内容：
  - 将重复调用保护从网络类工具扩展到所有工具。
  - 当相同工具以相同参数连续失败时，阻止 Agent 陷入无限循环。
  - 覆盖 `read_file`、`list_dir` 等此前未受保护的通用工具。
- 推进意义：  
  提升了 Agent 在异常工具环境中的容错能力，可减少重复失败、无限重试和上下文浪费，是直接的稳定性与成本控制改进。
- 注意事项：该 PR 已关闭，但数据未表明其代码已直接合入主线，需关注替代 PR、提交记录或关闭原因。

#### 2. MCP Server 空闲超时自动终止

- PR：[#4506 feat: implement mcp server idle timeout auto-kill](https://github.com/HKUDS/nanobot/pull/4506)
- **状态：已关闭**
- 主要内容：
  - 为 MCP Server 配置增加 `idle_timeout`。
  - 当服务器长时间未被调用时自动终止进程，释放内存并减少僵尸进程。
- 推进意义：  
  改善长期运行部署中的资源泄漏风险，尤其适用于 Docker、常驻服务和多 MCP Server 场景。
- 注意事项：同样需要确认该实现是否已通过其他方式进入主线，以及超时默认值和误杀策略是否合理。

### 处于待合并状态的重要功能 PR

以下 PR 尚未合并，但已构成下一阶段的重要路线信号：

- [#6824 大型工具目录按需发现与 BM25 检索](https://github.com/HKUDS/nanobot/pull/6824)
- [#6823 Google AI Ultra 订阅 OAuth 接入](https://github.com/HKUDS/nanobot/pull/6823)
- [#6821 发现项目级与用户级 `.agents/skills`](https://github.com/HKUDS/nanobot/pull/6821)
- [#5666 接入 aimlapi.com OpenAI 兼容网关](https://github.com/HKUDS/nanobot/pull/5666)
- [#5405 Skills 支持仅手动调用](https://github.com/HKUDS/nanobot/pull/5405)
- [#6477 历史回放时清洗工具参数](https://github.com/HKUDS/nanobot/pull/6477)
- [#5152 标记子 Agent 部分完成结果](https://github.com/HKUDS/nanobot/pull/5152)

### 总体推进程度

项目今天在以下方向继续前进：

1. **工具生态可扩展性**：大型工具目录按需检索，避免每次模型调用携带全部 Schema。
2. **Skills 使用方式扩展**：支持项目目录发现和仅手动调用，增强安全边界。
3. **模型接入多样化**：增加 Google AI Ultra OAuth 和第三方聚合网关。
4. **Agent 稳定性治理**：重复工具调用保护、MCP 资源回收。
5. **会话与协议正确性**：修复历史回放中的工具参数异常及子 Agent 完成状态识别。

整体属于 **功能扩张与底层治理并行** 的阶段，功能面增长较快，但兼容性与并发正确性仍需补强。

---

## 4. 社区热点

### Issues

#### 1. Kimi K3.1 Pro 下 WebUI 标题生成失败

- Issue：[#6718 WebUI title generation fails with Kimi K3.1 Pro because the 96-token budget is exhausted](https://github.com/HKUDS/nanobot/issues/6718)
- **评论：3，为今日 Issues 中最多**
- 热度表现：3 条评论，暂无点赞。
- 核心诉求：
  - 主回复能够正常完成，但 WebUI 会话主题始终显示为 `Untitled`。
  - 标题生成请求固定以 `finish_reason=length` 结束。
  - 96-token 输出预算对 Kimi K3.1 Pro 明显不足。
- 背后需求：  
  用户期望 WebUI 在不同模型下都能稳定生成标题，不能因为模型响应长度或计费策略差异破坏基础体验。该问题更像“模型兼容性 + 预算策略”问题，应通过模型能力探测、可配置预算或失败降级解决。

#### 2. Gemini OpenAI 兼容工具调用失败

- Issue：[#6825 Gemini OpenAI-compat tool-call failures](https://github.com/HKUDS/nanobot/issues/6825)
- **创建与更新：2026-11-28**
- 热度表现：刚创建，暂无评论和点赞。
- 核心诉求：
  - Gemini 的严格 OpenAI 兼容端点在流式并行 `tool_calls` 中省略 `index` 时，多个调用可能被错误合并到槽位 0。
  - 上下文压缩后，如果历史以 `tool_calls` 开头，可能触发 400 错误。
- 背后需求：  
  用户需要 NanoBot 对“兼容 API 但并不完全符合标准行为”的服务保持足够宽容，同时正确处理并行工具调用和压缩后的消息序列。

### Pull Requests

今日 PR 数据未提供评论数和点赞数，因此无法基于互动量严格排序。以下按功能影响和待合并状态判断优先级：

#### 1. 大型工具目录按需发现

- PR：[#6824 feat(agent): discover large tool catalogs on demand with BM25](https://github.com/HKUDS/nanobot/pull/6824)
- 重点：
  - 小型工具目录仍直接暴露给模型。
  - 大型插件/MCP 工具目录改为本地 BM25 检索。
  - 默认 Schema Token 预算为 8,192。
- 社区诉求：  
  解决插件和 MCP 数量增长后，每次请求携带大量工具 Schema 所造成的 Token 成本、延迟和模型选择干扰。

#### 2. Google AI Ultra 订阅 OAuth

- PR：[#6823 feat(providers): add opt-in Google AI Ultra subscription OAuth](https://github.com/HKUDS/nanobot/pull/6823)
- 重点：
  - 允许 Ultra 订阅用户在不配置 Gemini API Key 的情况下使用订阅额度。
  - 采用 nanobot 自有应用身份，属于显式选择加入的能力。
- 社区诉求：  
  降低付费用户接入门槛，减少 API Key 管理，同时保留清晰的订阅授权边界。

#### 3. WebUI 同会话编辑并重发消息

- PR：[#6323 feat(webui): edit and resend messages in the same session](https://github.com/HKUDS/nanobot/pull/6323)
- **状态：已关闭**
- 重点：
  - 重发时删除所选用户消息及其后续内容。
  - 通过 SQLite 原子提交截断与新输入。
  - 多标签页同步历史状态。
- 社区诉求：  
  改善对话纠错体验，让用户无需新建会话即可修改问题并重新生成结果。
- 状态风险：  
  PR 标注存在冲突并已关闭，需确认是否已被替代或进入后续版本。

---

## 5. Bug 与稳定性

按对核心可用性、请求正确性和数据一致性影响排序如下。

### 严重

#### 1. Gemini OpenAI 兼容端点工具调用失败

- Issue：[#6825](https://github.com/HKUDS/nanobot/issues/6825)
- 影响：
  - 流式并行工具调用可能被错误合并。
  - 压缩后历史以 `tool_calls` 开头时，服务端可能返回 400。
- 结果：  
  可能导致工具调用参数错配、无法执行或整个 Agent 轮次中断。
- 是否有 Fix PR：  
  **未发现明确对应的修复 PR。**
- 优先级建议：**高**。需补充针对省略 `index` 的流式片段和压缩后历史结构的回归测试。

### 较高

#### 2. Claude OpenAI 兼容路径丢失历史缓存断点

- Issue：[#6817 History cache_control marker is dropped after a textless tool call](https://github.com/HKUDS/nanobot/issues/6817)
- 影响：
  - 历史以无文本 assistant tool call 结尾、随后为 tool result 时，历史中的 `cache_control` 断点被丢弃。
  - 只有 system prompt 和 tools 保持缓存，工具循环步骤的缓存收益下降。
- 结果：  
  通常不直接导致功能失败，但会显著增加延迟与 Token 成本，长会话中影响更明显。
- 是否有 Fix PR：  
  **未发现明确对应的修复 PR。**
- 优先级建议：**中高**。应验证 Claude 原生路径与 OpenAI 兼容路径的缓存标记映射逻辑。

#### 3. 自定义图像生成 Provider 静默忽略参考图

- Issue：[#6598 Custom image-generation provider: reference_images silently ignored](https://github.com/HKUDS/nanobot/issues/6598)
- 影响：
  - `generate_image` 接收 `reference_images`，但 custom OpenAI-Images Provider 未调用 `/images/edits`。
  - 请求编辑任务时仍生成无关的新图，且没有报错。
- 结果：  
  属于**静默错误**，用户会得到语义错误的结果，却无法从返回值判断参考图未生效。
- 是否有 Fix PR：  
  **未发现明确对应的修复 PR。**
- 优先级建议：**中高**。至少应在 Provider 不支持编辑能力时显式报错，避免静默降级。

### 中等

#### 4. Kimi K3.1 Pro 下 WebUI 标题生成失败

- Issue：[#6718](https://github.com/HKUDS/nanobot/issues/6718)
- 影响：
  - 主对话成功，但会话标题生成因固定 96-token 预算耗尽而失败。
  - WebUI 长期显示 `Untitled`。
- 结果：  
  核心功能可用，但影响会话管理与浏览体验。
- 是否有 Fix PR：  
  **未发现明确对应的修复 PR。**
- 优先级建议：**中**。建议改为可配置预算，并增加无标题或截断时的回退机制。

#### 5. 历史回放中的工具参数可能包含非法代理字符

- PR：[#6477 fix(providers): sanitize decoded tool arguments during history replay](https://github.com/HKUDS/nanobot/pull/6477)
- 影响：
  - 历史回放时解码或修复后的工具参数可能包含 `\ud800` 等代理字符。
  - 某些服务端会因此拒绝请求。
- 是否已有 Fix PR：  
  **有，PR #6477 当前仍待合并。**
- 优先级建议：**中高**。建议在合并前确保清洗仅作用于历史回放，不改变执行时原始参数。

### 回归与资源稳定性

#### 6. 重复工具调用可能导致 Agent 无限循环

- PR：[#4522](https://github.com/HKUDS/nanobot/pull/4522)
- 状态：**已关闭，需确认最终合入路径。**
- 价值：  
  通用化防循环保护，覆盖文件读取、目录列举等本地工具，是重要的稳定性修复。

#### 7. MCP Server 空闲进程可能泄漏

- PR：[#4506](https://github.com/HKUDS/nanobot/pull/4506)
- 状态：**已关闭，需确认最终合入路径。**
- 价值：  
  空闲超时终止 MCP Server 可降低僵尸进程和长期内存占用。

---

## 6. 功能请求与路线图信号

### 6.1 File Manager：WebUI 文件上传与下载

- Feature Request：[#6822 Enhancement: File manager](https://github.com/HKUDS/nanobot/issues/6822)
- 用户场景：
  - Docker 部署后，容器内文件难以查看和下载。
  - 希望 WebUI 提供类似 Hermes Agent 的文件管理器。
  - 需求包括文件浏览、上传和下载。
- 路线图判断：  
  **中等概率进入后续版本。** 请求明确、用户价值高，但涉及权限隔离、路径穿越防护、上传大小限制和容器卷映射，实施复杂度不低。

### 6.2 支持更多 `.agents/skills` 目录

- PR：[#6821 feat(skills): discover project and user .agents skills](https://github.com/HKUDS/nanobot/pull/6821)
- 功能：
  - 支持 `<project>/.agents/skills/`。
  - 支持 `~/.agents/skills/`。
  - `/skill` 展示有效技能，`$name` 可直接使用。
- 路线图判断：  
  **高概率进入下一版本。** 它与现有 workspace、plugin、bundled skills 机制一致，属于低侵入式生态兼容。

### 6.3 Skills 仅允许手动调用

- PR：[#5405 feat(skills): support manual-only invocation](https://github.com/HKUDS/nanobot/pull/5405)
- 功能：
  - 通过 `disable-model-invocation: true` 禁止模型自动调用。
  - 适合部署、发布等具有副作用的技能。
- 路线图判断：  
  **较高概率进入下一版本。** 它直接解决 Agent 误触发高风险工具的问题，安全诉求明确。

### 6.4 大型工具目录按需检索

- PR：[#6824](https://github.com/HKUDS/nanobot/pull/6824)
- 功能：
  - 使用 BM25 对大型工具目录进行本地检索。
  - 控制工具 Schema 的 Token 预算。
- 路线图判断：  
  **高概率进入下一版本。** 工具数量增长是当前架构的明确瓶颈，该方案兼顾成本、延迟与发现效率。

### 6.5 Google AI Ultra 订阅 OAuth

- PR：[#6823](https://github.com/HKUDS/nanobot/pull/6823)
- 功能：
  - 以 opt-in 方式使用 Google AI Ultra 订阅额度。
  - 无需用户单独配置 Gemini API Key。
- 路线图判断：  
  **中等偏高概率。** 用户需求明确，但涉及 OAuth 审核、应用身份维护、额度策略和合规因素。

### 6.6 接入 aimlapi.com 多模型聚合网关

- PR：[#5666](https://github.com/HKUDS/nanobot/pull/5666)
- 功能：
  - 新增 OpenAI 兼容 Provider。
  - 聚合 1000+ 模型。
- 路线图判断：  
  **中等概率，取决于维护者对商业聚合服务的准入策略。** 技术实现简单，但需要明确质量、计费、隐私和长期维护责任。

### 6.7 WebUI 同会话编辑并重发

- PR：[#6323](https://github.com/HKUDS/nanobot/pull/6323)
- 功能：
  - 编辑并重发消息时截断当前会话后续历史。
  - 原子更新数据库并同步多标签页。
- 路线图判断：  
  **功能价值高，但当前状态需重新确认。** PR 已关闭且存在冲突，可能需要拆分实现后重新提交。

---

## 7. 用户反馈摘要

### 核心痛点

1. **“主回复成功，但辅助功能失败”**  
   Kimi 用户遇到标题生成失败，而主对话正常，说明模型适配问题不只体现在基础请求，还存在于标题、缓存、工具调用等周边链路。  
   链接：[Issue #6718](https://github.com/HKUDS/nanobot/issues/6718)

2. **OpenAI-compatible 不等于行为完全一致**  
   Gemini 严格兼容端点省略流式 `tool_calls.index`，Claude 路径在无文本工具调用后丢失缓存断点；用户期待 NanoBot 能容忍这些真实服务差异。  
   链接：[Issue #6825](https://github.com/HKUDS/nanobot/issues/6825)、[Issue #6817](https://github.com/HKUDS/nanobot/issues/6817)

3. **错误需要显式反馈，而不是静默生成错误结果**  
   参考图被忽略仍返回一张无关图片，是比直接报错更危险的行为。  
   链接：[Issue #6598](https://github.com/HKUDS/nanobot/issues/6598)

4. **Docker 部署后的文件可用性不足**  
   用户希望直接在 WebUI 中浏览、上传和下载文件，以减少进入容器执行命令的成本。  
   链接：[Issue #6822](https://github.com/HKUDS/nanobot/issues/6822)

5. **工具和技能越来越多，已经形成上下文成本问题**  
   用户既希望扩大工具生态，又不希望每次调用携带全部 Schema；BM25 工具发现和手动调用 Skills 正是在平衡能力与成本。  
   链接：[PR #6824](https://github.com/HKUDS/nanobot/pull/6824)、[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)

### 满意度信号

- Issue #6718 获得今日最多的 **3 条评论**，表明该问题有较明确的使用反馈和复现关注。
- 今日整体 Issue 点赞数均为 0，尚未形成强烈社区共识。
- 今日更新的 PR 均未展示评论与点赞数据，热度更可能来自持续开发活动，而非广泛社区讨论。

---

## 8. 待处理积压

### 长期活跃且仍未关闭的重要 PR

#### 1. aimlapi.com Provider 接入

- PR：[#5666](https://github.com/HKUDS/nanobot/pull/5666)
- 首次创建：**2026-09-04**
- 当前仍开放，已存在约三个月。
- 风险：
  - 涉及第三方商业服务，维护者通常需要评估品牌、稳定性、数据隐私与长期维护承诺。
- 建议：维护者给出明确的准入结论或合并条件，避免贡献者持续等待。

#### 2. 子 Agent 部分完成状态标记

- PR：[#5152 fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)
- 首次创建：**2026-07-28**
- 当前仍开放。
- 影响：
  - 涉及兄弟后台任务尚未完成时，结果如何归属当前父轮次。
  - 状态语义错误可能造成重复通知、遗漏通知或错误任务归因。
- 建议：明确优先级并尽快完成审查，尤其需要并发和多任务场景测试。

#### 3. Skills 仅手动调用

- PR：[#5405](https://github.com/HKUDS/nanobot/pull/5405)
- 首次创建：**2026-08-16**
- 当前仍开放。
- 影响：
  - 涉及部署、发布等副作用技能的安全边界。
- 建议：优先级较高，可与 Skills 自动发现能力一起纳入统一设计。

#### 4. 历史回放工具参数清洗

- PR：[#6477](https://github.com/HKUDS/nanobot/pull/6477)
- 首次创建：**2026-10-26**
- 当前仍开放。
- 影响：
  - 可能直接导致部分兼容服务端返回 400。
- 建议：与 Gemini 工具调用 Bug 一并审查，并增加代理字符、非法转义和字典参数回归测试。

### 长期开放的重要 Issue

#### 1. Kimi K3.1 Pro 标题生成失败

- Issue：[#6718](https://github.com/HKUDS/nanobot/issues/6718)
- 创建：**2026-11-18**
- 更新：**2026-11-27**
- 已讨论约一周，但尚无明确修复 PR。
- 建议：至少先加入临时可配置标题 Token 预算，避免用户长期看到 `Untitled`。

#### 2. 自定义图像 Provider 忽略参考图

- Issue：[#6598](https://github.com/HKUDS/nanobot/issues/6598)
- 创建：**2026-11-08**
- 更新：**2026-11-27**
- 已开放约三周，尚无明确修复 PR。
- 建议：优先增加“不支持编辑”的显式错误，随后再补充 `/images/edits` 实现。

### 已关闭但需确认落地状态

- PR：[#4522 通用重复工具调用保护](https://github.com/HKUDS/nanobot/pull/4522)
- PR：[#4506 MCP Server 空闲超时自动终止](https://github.com/HKUDS/nanobot/pull/4506)
- PR：[#6323 WebUI 编辑并重发消息](https://github.com/HKUDS/nanobot/pull/6323)

这些 PR 已关闭，但仅凭当前数据无法确认是已合并、被替代还是未合入。建议维护者在后续提交记录或 Release Notes 中明确说明，避免功能与 Issue 状态脱节。

---

## 今日结论

NanoBot 今日呈现出 **“高活跃开发、兼容性压力上升、平台化方向明确”** 的特征。工具发现、Skills 管理、模型订阅接入和 WebUI 能力都在扩展；但 Gemini 工具调用、Claude 缓存、历史参数清洗和图像编辑等问题，说明多 Provider 适配层需要更多协议级回归测试。下一阶段最值得优先推进的是：

1. 修复 Gemini 工具调用与压缩历史 400；
2. 修复或明确拒绝图像参考图静默忽略；
3. 修复 Claude 历史缓存断点丢失；
4. 确认重复工具调用保护、MCP 超时和 WebUI 重发 PR 的最终落地状态；
5. 推动 BM25 工具发现、`.agents/skills` 和手动调用 Skills 等高价值 PR 进入主线。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-11-28**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

过去 24 小时项目共出现 **2 条活跃 Issue 更新**和 **6 条 PR 更新**，其中仍有 **2 个 PR 待合并**，整体属于**中等活跃度、修复与集成为主**。  
今日最明确的产品进展是 Web 聊天输入卡顿问题已有对应修复 PR，同时 Claude API 空工具名导致的 400 错误也完成了修复闭环。  
社区新增了 Telegram 附件下载绕过代理配置的缺陷报告，表明多网络环境适配仍有盲区。  
当前无新版本发布；另有一个 OpenAI 兼容提供商接入 PR 长期停滞，但缺乏明确维护者结论，提示待办治理仍需加强。

---

## 3. 项目进展

### 已合并或关闭的重要 PR

#### 1. 修复 Claude / Anthropic 请求中的空工具名
- **PR：** [#238 fix(claude): resolve empty tool name in Claude API requests](https://github.com/sipeed/picoclaw/pull/238)
- **状态：** CLOSED
- **更新时间：** 2026-11-27

该修复解决了使用 Claude/Anthropic 作为 LLM 提供商时可能出现的 **400 Bad Request**。根因是工具调用名称存储于 OpenAI 格式的 `Function.Name`，但 Claude provider 错误读取了始终为空的顶层 `tc.Name`；修复同时兼容了以 JSON 字符串形式存储的 `Arguments`。

**影响评估：**
- 直接提升 Claude provider 的工具调用稳定性；
- 避免正常请求因工具调用结构解析错误而失败；
- 对依赖工具调用、函数执行或 Agent 工作流的用户具有较高价值。

#### 2. 批量合并历史修复集合
- **PR：** [#1546 fix: merge PR #1480 #1479 #1478 #1473 #1467](https://github.com/sipeed/picoclaw/pull/1546)
- **状态：** CLOSED
- **更新时间：** 2026-11-28

该 PR 用于合并 #1480、#1479、#1478、#1473、#1467 等修复。由于提供的摘要没有披露各子 PR 的具体内容，无法逐项确认修复范围。

#### 3. 合并另一批历史修复
- **PR：** [#1555 fix: merge PR #1390 #1389 #1383 #1381](https://github.com/sipeed/picoclaw/pull/1555)
- **状态：** CLOSED
- **更新时间：** 2026-11-27

该 PR 汇集 #1390、#1389、#1383、#1381 等修复。当前数据未提供子 PR 的具体变更摘要，因此只能确认其作为历史修复集成项完成关闭。

#### 4. 继续合并历史修复
- **PR：** [#1560 fix: merge PR #1312 #1311 #1308](https://github.com/sipeed/picoclaw/pull/1560)
- **状态：** CLOSED
- **更新时间：** 2026-11-27

该 PR 汇集 #1312、#1311、#1308 的修复。由于三个来源 PR 创建时间均早于本日，项目当天主要是完成集成或状态收敛，而非新增功能开发。

### 整体推进判断

今日 PR 更新中，**4 条为已关闭项，2 条仍待处理**。真正可确认的新修复重点是：

1. Claude API 工具调用兼容性；
2. Web 聊天输入流畅度优化；
3. Telegram 附件下载代理链路修复正在推进。

项目在“已有明确问题快速形成修复”的方向表现积极，但多个长期 PR 以“批量合并旧修复”方式关闭，也反映部分积压正在被集中清理。

---

## 4. 社区热点

### 热点 1：Web 聊天输入时明显卡顿
- **Issue：** [#3475 [BUG] Significant lag/stuttering when typing in web-based chat interfaces](https://github.com/sipeed/picoclaw/issues/3475)
- **评论数：** 1
- **创建/更新时间：** 2026-11-27
- **环境信息：** PicoClaw 0.3.1、DeepSeek、Web channel、Ubuntu 22.04 服务端、Windows Chrome 客户端

用户反馈在 Web 聊天界面输入时出现显著延迟和卡顿。进一步分析表明，在长时间聊天、推理过程和工具输出同时可见时，每次编辑草稿都会触发整个聊天页面更新，导致历史消息被重复渲染，并反复执行 Markdown 解析和语法高亮。

该问题虽然评论数不多，但属于**核心交互体验问题**，会直接影响日常使用效率。

### 热点 2：Telegram 附件下载未使用代理
- **Issue：** [#3477 Telegram channel: attachment download bypasses settings.proxy and connects directly](https://github.com/sipeed/picoclaw/issues/3477)
- **评论数：** 1
- **创建/更新时间：** 2026-11-27

当前 Telegram Bot API 客户端 `telego` 会使用 `settings.proxy`，但附件的实际下载流程直接建立连接。在只能通过代理访问 Telegram 的网络中，可能出现 Bot API 请求成功、`getFile` 成功，但附件下载一直挂起的情况。

这是典型的**代理配置覆盖不完整**问题，暴露出渠道内部不同网络请求路径没有统一复用代理设置。

### 热点 3：Web 聊天草稿更新与消息渲染解耦
- **PR：** [#3476 fix(web): isolate chat draft updates from message rendering](https://github.com/sipeed/picoclaw/pull/3476)
- **状态：** OPEN
- **创建/更新时间：** 2026-11-27

该 PR 与 #3475 高度对应，将草稿状态隔离到 `ChatComposer`，避免每次输入都触发完整聊天页面和历史消息重新渲染。

虽然该 PR 当前没有评论或点赞数据，但它是今日**与用户可感知性能问题最直接相关的修复**，后续是否通过测试和合并值得重点关注。

### 热点 4：新增 LLMTR 提供商支持
- **PR：** [#3471 [stale] feat(providers): add LLMTR as an OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3471)
- **状态：** OPEN，已标记 stale
- **创建时间：** 2026-11-14
- **更新时间：** 2026-11-28

该 PR 希望将 LLMTR 作为具名的 OpenAI 兼容 provider 接入，允许用户在 `model_list` 中选择 `https://llmtr.com/v1`，而不覆盖其他 provider 的配置。模型目录不会预加载，用户需要自行固定模型名称。

---

## 5. Bug 与稳定性

### 严重程度：中
#### Telegram 附件下载绕过代理，下载可能永久挂起
- **Issue：** [#3477](https://github.com/sipeed/picoclaw/issues/3477)
- **影响场景：** Telegram channel 下载照片或文件；网络只能通过代理访问 Telegram。
- **现象：** Bot API 与 `getFile` 请求正常，但实际附件下载绕过 `settings.proxy` 并直接连接，最终挂起。
- **潜在后果：**
  - 用户无法收到附件；
  - 请求长时间占用连接和任务资源；
  - 渠道表现与配置预期不一致。
- **是否已有 fix PR：** **当前数据中未发现明确对应的修复 PR。**
- **稳定性判断：** 这是代理链路一致性问题，影响范围取决于用户网络环境，但对必须使用代理的部署具有阻断性。

### 严重程度：中
#### Web 聊天输入出现明显延迟和卡顿
- **Issue：** [#3475](https://github.com/sipeed/picoclaw/issues/3475)
- **影响场景：** PicoClaw 0.3.1、Web channel、长时间聊天、显示推理和工具输出。
- **现象：** 输入草稿时触发历史消息反复渲染、Markdown 重解析和语法高亮，造成 stuttering。
- **是否已有 fix PR：** **有，#3476**：[`fix(web): isolate chat draft updates from message rendering`](https://github.com/sipeed/picoclaw/pull/3476)
- **当前状态：** 修复 PR 仍待合并。
- **稳定性判断：** 未造成数据损坏，但属于高频、核心路径上的性能回归或既有设计缺陷。

### 严重程度：低至中
#### Claude API 工具调用返回 400
- **PR：** [#238](https://github.com/sipeed/picoclaw/pull/238)
- **影响场景：** 使用 Claude/Anthropic provider，并触发工具调用。
- **现象：** `ToolCall` 的工具名读取路径错误，导致发送空工具名并被 API 拒绝。
- **是否已有 fix PR：** **有，且该 PR 已关闭。**
- **当前状态：** 修复已完成；不过数据未明确显示是否已通过合并进入发布版本。
- **稳定性判断：** 对 Claude 工具调用用户影响较大，但已有明确修复。

---

## 6. 功能请求与路线图信号

### LLMTR 作为具名 OpenAI 兼容提供商
- **PR：** [#3471](https://github.com/sipeed/picoclaw/pull/3471)
- **需求价值：**
  - 扩展模型供应商目录；
  - 允许不同 provider 独立配置 API base；
  - 避免用户通过覆盖通用 OpenAI provider 设置来接入 LLMTR。
- **路线图判断：** 该能力与 PicoClaw 的 provider 扩展方向一致，但 PR 已被标记为 `stale`，且创建已超过两周。若维护者重新确认设计方向、补齐测试并更新分支，**有潜力进入后续版本**；否则更可能被关闭或由新 PR 替代。

### 建议纳入下一版本的重点
1. **优先合并 #3476**，改善 Web 聊天输入性能；
2. **为 #3477 增加 Telegram 附件下载统一代理支持**，并补充代理/直连两种环境的集成测试；
3. **确认 #238 是否已通过其他合并请求进入主线**，避免修复停留在单个已关闭 PR 中；
4. **重新审阅 #3471 的 provider 命名、默认 endpoint 与模型配置方式**，明确 LLMTR 是否进入官方 provider catalog。

---

## 7. 用户反馈摘要

### Web 聊天用户：长会话中的输入体验不稳定
- **来源：** [#3475](https://github.com/sipeed/picoclaw/issues/3475)

用户使用 DeepSeek、Web channel 和 Chrome 时发现输入明显卡顿。该反馈揭示的核心痛点不是模型响应速度，而是**前端草稿编辑与历史消息渲染耦合**：会话越长、推理和工具输出越多，输入体验越差。

从修复 PR #3476 可以进一步确认，用户遇到的问题具有明确技术原因，而非单纯的设备性能问题。

### Telegram 用户：代理配置未覆盖附件下载
- **来源：** [#3477](https://github.com/sipeed/picoclaw/issues/3477)

该用户场景的核心诉求是：**只要为 Telegram channel 配置了代理，所有 Telegram 流量都应使用该代理**。当前只有 Bot API 客户端遵循配置，附件下载绕过代理，造成“接口调用成功但文件始终下载不下来”的不完整代理支持。

目前两条 Issue 都只有 1 条评论，未出现点赞积累，也没有来自维护者的公开结论。因此尚不能据此判断满意度或功能承诺，但可以确认用户主要不满意点集中在：

- Web 聊天输入流畅度不足；
- 网络配置行为与用户预期不一致；
- 故障表现为挂起或卡顿，缺少明确报错和超时反馈。

---

## 8. 待处理积压

### LLMTR provider PR 已进入 stale 状态
- **PR：** [#3471](https://github.com/sipeed/picoclaw/pull/3471)
- **创建时间：** 2026-11-14
- **当前状态：** OPEN、`stale`
- **积压风险：** 若无人恢复讨论，该功能请求可能最终因长期无响应而失效。
- **建议：** 维护者确认是否接受 provider 抽象；若接受，更新分支并补充配置文档；若不接收，应给出明确关闭理由。

### Telegram 附件下载代理问题尚无可见修复 PR
- **Issue：** [#3477](https://github.com/sipeed/picoclaw/issues/3477)
- **当前状态：** OPEN
- **积压风险：** 问题本身不一定是长期积压，但目前没有对应修复进入 PR 列表。
- **建议：** 尽快确认附件下载代码路径，统一代理传递，并增加下载超时，避免请求无限挂起。

### Web 性能修复仍待合并
- **Issue：** [#3475](https://github.com/sipeed/picoclaw/issues/3475)
- **PR：** [#3476](https://github.com/sipeed/picoclaw/pull/3476)
- **当前状态：** Issue 活跃、PR 待合并
- **积压风险：** 修复已经形成，但若未及时评审，用户卡顿将持续影响所有长时间 Web 会话。
- **建议：** 优先完成代码审查和回归测试，重点验证长会话、推理输出、工具输出及 Markdown 高亮场景。

---

## 今日健康度结论

**项目健康度：中等偏积极。**

- **积极面：** Issue 与修复 PR 之间已有快速联动，Claude provider 错误和 Web 聊天性能问题均有明确技术方向；今日没有新增版本，变更主要处于合并和收敛阶段。
- **风险面：** Telegram 代理支持存在链路遗漏；多个历史修复以聚合 PR 方式关闭，变更透明度有限；LLMTR 功能请求已标记 stale，说明功能需求的响应和路线图沟通仍有不足。
- **核心建议：** 优先推进 [#3476](https://github.com/sipeed/picoclaw/pull/3476) 和 [#3477](https://github.com/sipeed/picoclaw/issues/3477)，同时给出 [#3471](https://github.com/sipeed/picoclaw/pull/3471) 明确的接受、替代或关闭结论。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-11-28**  
**项目：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日进入 **OpenClaw → DeepSeek Harness（DSH）架构迁移后的集中收尾阶段**，过去 24 小时共关闭 **17 个 PR**，且已有 **1 个新版本 `2026.11.27` 发布**。本轮变更覆盖智能体引擎、会话与插件、IM 渠道、Skills、设置页、模型目录及桌面端集成，是项目历史上规模最大的一次架构调整。当前无新增或活跃 Issue，且待合并 PR 为 0，短期开发吞吐较高，但迁移后的兼容性、回归验证和用户反馈收集仍应作为下一阶段重点。整体项目健康度评估为 **良好且推进加速，但处于高密度迁移后的稳定性观察期**。

---

## 2. 版本发布

### [LobsterAI 2026.11.27](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.11.27)

**发布时间：2026-11-27**

这是本轮架构迁移的集中发布版本。官方 Release 说明称，本次迁移涉及 **106 个 PR**，并将智能体引擎从 OpenClaw 切换到 **DeepSeek Harness（DSH）**。

#### 核心更新

- 以 DSH 替代 OpenClaw，作为新的统一智能体引擎。
- 重建或迁移会话、专家、记忆和 IM 渠道能力。
- 更新媒体生成、Office 文档编辑及插件生态集成。
- 配套推进桌面端嵌入、外部会话同步、模型桥接、插件安装及设置页重构。
- 优化内置模型目录、Skills 管理、MCP Marketplace 和 Artifact 工作流。

#### 破坏性变更

- **底层引擎发生替换**，依赖 OpenClaw 行为、配置、扩展接口或运行时目录的项目需要重新验证。
- 插件兼容层采用新的宿主协议边界，并非所有旧插件均可无条件兼容。
- IM 渠道默认访问策略趋向严格：Telegram、Discord 的默认 `dmPolicy` 从 `open` 调整为 `allowlist`。
- 内置 Skills 被精简为常驻核心集合，并引入只读挂载和 Marketplace 迁移机制。
- 设置保存逻辑、插件安装流程和危险命令交互被重新设计，部分既有操作路径或自动化脚本可能需要适配。

#### 迁移注意事项

1. **优先备份会话、记忆、专家及插件配置**，升级前确认旧 OpenClaw 数据已正确迁移。
2. 检查 IM 渠道的 DM、群聊白名单和机器人权限；不要依赖原先默认开放私聊的行为。
3. 验证 Telegram、Discord、QQ、飞书、企微、钉钉和 POPO 等渠道的群任务归属、提及路由及审批流程。
4. 审核自定义插件是否兼容 DSH 宿主协议，尤其是外部会话同步、插件面板和模型目录相关能力。
5. 检查导入的 Skin Skills、旧 Profile 链接及只读 Git 对象等历史数据的兼容性。
6. 对依赖 OpenClaw 自动化脚本、MCP 集成或 Artifact 流程的用户，建议在新版本中进行回归测试。

> 注：Release 摘要提及迁移规模为 106 个 PR；本次日报统计窗口内关闭的 17 个 PR，主要反映迁移发布前后的集中收尾与修复工作。

---

## 3. 项目进展

过去 24 小时共关闭 **17 个 PR**，全部为已关闭状态，当前待合并 PR 为 **0**。变更重点集中在 DSH 迁移主链路及其配套能力。

### 3.1 核心引擎与插件生态

- [#3239 — 将智能体引擎从 OpenClaw 迁移至 DSH](https://github.com/netease-youdao/LobsterAI/pull/3239)  
  这是本轮里程碑级 PR，统一引擎、桌面端集成、IM、数据备份与迁移、插件生态及 UI 升级。其后多个兼容性修复均围绕该主线展开。

- [#3242 — 增加 DSH 插件生态兼容和外部会话同步](https://github.com/netease-youdao/LobsterAI/pull/3242)  
  增加 DSH 动态插件模型目录，过滤 LobsterAI 已同步的 Provider，并提供第三方插件扩展入口；同时支持外部 DSH 会话同步，进一步补齐迁移后的生态边界。

- [#3237 — 增加设置区块嵌入、追踪隔离和 Gallery 导航](https://github.com/netease-youdao/LobsterAI/pull/3237)  
  支持 `main` 与 `settings-section` 两类嵌入面板，完善侧边栏、溢出菜单和插件面板路由；并增强模型桥接回合追踪及 Gallery 导航。

- [#3240 — 保留导入的 Skin Skills，并清理运行时链接](https://github.com/netease-youdao/LobsterAI/pull/3240)  
  修复 `skin-creator` 命名冲突导致导入技能无法启用或 Kit 引用失效的问题；清理旧 DSH Profile 链接，并覆盖 Windows junction、只读 Git 对象等边界场景。

### 3.2 IM 路由、会话一致性与权限安全

- [#3241 — 加固 Telegram/Discord 访问控制并限制流式更新频率](https://github.com/netease-youdao/LobsterAI/pull/3241)  
  私聊和群聊白名单改为 **fail-closed** 策略；Telegram、Discord 默认私聊策略由开放调整为白名单，同时降低流式消息更新频率，减少重复消息和并发压力。

- [#3232 — 修复 QQ、Telegram 和 Discord 群聊路由](https://github.com/netease-youdao/LobsterAI/pull/3232)  
  QQ 使用跨应用群 OpenID 关联同一 Agent 下的群任务，避免串聊；Telegram、Discord 正确识别当前机器人的提及和引用；Telegram 论坛话题不再错误合并。

- [#3231 — 同一 Agent 的多个机器人共享普通群任务](https://github.com/netease-youdao/LobsterAI/pull/3231)  
  按渠道、群 ID 和 Agent 复用群任务并串行处理消息，同时保留每轮发言人和回复目标，改善多机器人共同服务同一群聊的体验。

- [#3228 — 在 DSH 中保留共享群聊会话](https://github.com/netease-youdao/LobsterAI/pull/3228)  
  修复群任务标题误用首位发言人姓名、升级后飞书群任务与旧历史割裂、连续消息互相打断等问题；群事件缺少群标识时不再使用成员 ID 错建任务。

- [#3234 — 展示实际主 Agent 绑定并选择当前群任务](https://github.com/netease-youdao/LobsterAI/pull/3234)  
  修复已启用机器人仍显示“未绑定”的问题；保存时仅修改用户实际切换的机器人，避免覆盖同平台其他实例；定时任务和通知优先匹配当前负责人的会话。

- [#3230 — 防止旧 60 秒计时器与 DSH 审批竞争](https://github.com/netease-youdao/LobsterAI/pull/3230)  
  修复界面显示 300 秒审批超时，但旧 OpenClaw 处理器仍在 60 秒超时并误报“已在电脑端处理”的竞态问题。

### 3.3 Skills、设置、模型与桌面体验

- [#3236 — 精简内置 Skills、只读挂载并清理 Markdown 复制内容](https://github.com/netease-youdao/LobsterAI/pull/3236)  
  将内置 Skills 精简为 9 个始终启用的核心集合，保留 Web Search、Office 文档处理等基础能力；同时引入只读挂载、Marketplace 迁移及 Markdown 复制净化。

- [#3233 — 重构设置保存模型、DSH 插件安装和危险命令 UX](https://github.com/netease-youdao/LobsterAI/pull/3233)  
  新增显式保存/放弃操作、未保存变更拦截和统一草稿持久化；同时完善 DSH 插件安装及危险命令提示，降低误操作和设置丢失风险。

- [#3235 — 优化 Artifact 标签页、撤销提示和 MCP Marketplace 缓存](https://github.com/netease-youdao/LobsterAI/pull/3235)  
  改善 Artifact 工作区体验，清理撤销 Toast，并让 MCP Marketplace 支持环境感知地址、本地文件覆盖及缓存机制。

- [#3238 — 首页 Credits 弹层支持滚动并提升 Header 层级](https://github.com/netease-youdao/LobsterAI/pull/3238)  
  限制弹层高度并固定头尾区域，修复内容不可见、滚动异常及 Header 遮挡问题。

- [#3229 — 增加侧边聊天重命名、删除和提升 UI](https://github.com/netease-youdao/LobsterAI/pull/3229)  
  保留用户自定义侧边聊天标题，并增加重命名、删除、提升为正式会话等入口；同时折叠已停止回合的冗余元信息。

- [#2859 — 更新内置 Provider 模型目录](https://github.com/netease-youdao/LobsterAI/pull/2859)  
  刷新 DeepSeek、Moonshot、Qwen、智谱、MiniMax、小米等 6 个 Provider 的默认模型，并为存量用户补充下线模型删除与新模型注入逻辑。

- [#3218 — macOS 技能缺少 lockfile 时生成缓存 lockfile](https://github.com/netease-youdao/LobsterAI/pull/3218)  
  针对内置 Mac Skill 缺少 `package-lock.json` 的情况生成平台无关缓存锁文件，减少重复构建及 Universal Architecture 下的打包异常。

### 进度评估

今天的成果不是单点功能堆叠，而是完成了从底层引擎、插件、IM 会话到桌面交互的一次**纵向闭环迁移**。17 个 PR 全部关闭、无待合并项，说明集中交付效率很高；但大规模替换核心引擎后的真实用户回归数据尚未出现，下一阶段更可能转入发布观察和缺陷修复。

---

## 4. 社区热点

今日没有 Issues 更新，所有 GitHub 数据中的 PR 均显示 **0 评论、0 👍**，因此无法从现有统计中识别出高互动热门讨论。按变更影响范围和工程重要性，以下 PR 最值得社区关注：

1. [#3239 — OpenClaw 到 DSH 的核心引擎迁移](https://github.com/netease-youdao/LobsterAI/pull/3239)  
   诉求本质是升级底层能力并统一架构，但也是兼容性风险最高的变更。

2. [#3241 — Telegram/Discord 访问控制加固](https://github.com/netease-youdao/LobsterAI/pull/3241)  
   背后诉求是避免私聊开放、群聊越权和流式更新过密带来的安全与稳定性风险。

3. [#3232 — QQ、Telegram、Discord 群聊路由修复](https://github.com/netease-youdao/LobsterAI/pull/3232)  
   直接对应多机器人、跨应用群标识、论坛话题和群聊串话等高频真实场景。

4. [#3236 — Skills 精简与 Marketplace 迁移](https://github.com/netease-youdao/LobsterAI/pull/3236)  
   反映用户对默认能力聚焦、可控安装和更安全依赖管理的期待。

5. [#3233 — 设置保存和危险命令 UX 重构](https://github.com/netease-youdao/LobsterAI/pull/3233)  
   回应了设置误覆盖、未保存内容丢失及危险操作确认不足等典型桌面应用痛点。

> **热度判断限制：** 当前数据没有评论、Reaction 或 Review 数量，不能将这些 PR 认定为“讨论最热门”；这里仅按影响范围和社区相关度进行排序。

---

## 5. Bug 与稳定性

### 高优先级

1. **IM 审批错误超时与错误通知**
   - PR：[#3230](https://github.com/netease-youdao/LobsterAI/pull/3230)
   - 问题：界面提示 300 秒，但旧处理器 60 秒即超时，还可能误报“该操作已在电脑端处理”。
   - 状态：**已有 fix，已关闭**。
   - 风险：曾影响审批可靠性及用户对操作状态的判断。

2. **跨平台群聊串话、错路由及多机器人上下文断裂**
   - PR：[#3232](https://github.com/netease-youdao/LobsterAI/pull/3232)、[#3231](https://github.com/netease-youdao/LobsterAI/pull/3231)
   - 问题：QQ 群 OpenID 冲突可能串聊；Telegram/Discord 可能处理发给其他机器人的消息；同一 Agent 下多个机器人会生成多个任务，无法延续上下文。
   - 状态：**已有 fix，均已关闭**。
   - 风险：涉及消息隐私、错误响应和会话连续性，严重度较高。

3. **DSH 升级后群聊历史割裂及连续消息互相打断**
   - PR：[#3228](https://github.com/netease-youdao/LobsterAI/pull/3228)
   - 问题：群任务可能重建，旧 OpenClaw 历史无法续接；群任务标题错误显示成员姓名。
   - 状态：**已有 fix，已关闭**。

### 中优先级

4. **Telegram/Discord 访问控制默认开放**
   - PR：[#3241](https://github.com/netease-youdao/LobsterAI/pull/3241)
   - 问题：默认 `dmPolicy=open`，以及缺少严格群聊白名单，存在越权处理消息的风险。
   - 状态：**已有 fix，已关闭**。
   - 注意：升级用户需重新确认白名单配置。

5. **主 Agent 绑定显示错误及配置被覆盖**
   - PR：[#3234](https://github.com/netease-youdao/LobsterAI/pull/3234)
   - 问题：实际已启用但页面显示“未绑定”；保存可能影响同平台其他机器人实例。
   - 状态：**已有 fix，已关闭**。

6. **导入 Skin Skills 失效和旧 Profile 链接残留**
   - PR：[#3240](https://github.com/netease-youdao/LobsterAI/pull/3240)
   - 问题：`skin-creator` 名称冲突、Kit 引用失效、Windows junction 或只读 Git 对象导致清理异常。
   - 状态：**已有 fix，已关闭**。

7. **MCP Marketplace 环境地址及缓存问题**
   - PR：[#3235](https://github.com/netease-youdao/LobsterAI/pull/3235)
   - 问题：生产/测试环境切换、本地 Marketplace 文件覆盖及缓存一致性需要统一处理。
   - 状态：**已有 fix，已关闭**。

### 低优先级

8. **首页 Credits 弹层滚动与遮挡**
   - PR：[#3238](https://github.com/netease-youdao/LobsterAI/pull/3238)
   - 状态：**已有 fix，已关闭**。

9. **侧边聊天标题及停止回合信息展示不理想**
   - PR：[#3229](https://github.com/netease-youdao/LobsterAI/pull/3229)
   - 状态：**已有 fix，已关闭**。

10. **macOS 技能包缺少 lockfile**
    - PR：[#3218](https://github.com/netease-youdao/LobsterAI/pull/3218)
    - 状态：**已有 fix，已关闭**。

**稳定性结论：** 今日 Bug 修复覆盖面广，尤其是 IM 路由、审批和访问控制问题均已有对应修复 PR。但由于缺乏真实用户 Issue 和崩溃统计，暂时不能据此认定整体已完全稳定。

---

## 6. 功能请求与路线图信号

今日没有新的用户功能请求。以下信号主要来自已关闭 PR，代表已经落地或正在形成下一阶段路线：

1. **DSH 插件生态与外部会话互操作**
   - 已落地：[#3242](https://github.com/netease-youdao/LobsterAI/pull/3242)、[#3237](https://github.com/netease-youdao/LobsterAI/pull/3237)
   - 后续可能方向：更完整的第三方插件目录、插件权限管理、会话跨设备同步、插件安装失败诊断及兼容性标记。

2. **设置页保存模型与插件安装体验**
   - 已落地：[#3233](https://github.com/netease-youdao/LobsterAI/pull/3233)
   - 后续可能方向：逐项草稿自动保存、配置导入导出、设置变更审计、插件依赖冲突处理。

3. **多机器人共享群任务和统一 IM 路由**
   - 已落地：[#3231](https://github.com/netease-youdao/LobsterAI/pull/3231)、[#3232](https://github.com/netease-youdao/LobsterAI/pull/3232)、[#3234](https://github.com/netease-youdao/LobsterAI/pull/3234)
   - 后续可能方向：更清晰的机器人路由规则、跨平台群任务统一视图、群级权限矩阵、路由调试面板。

4. **Skills Marketplace 与只读运行时**
   - 已落地：[#3236](https://github.com/netease-youdao/LobsterAI/pull/3236)
   - 后续可能方向：技能版本升级与回滚、依赖安全扫描、企业私有技能源、Skills 使用统计。

5. **Artifact、MCP 与侧边聊天工作流**
   - 已落地：[#3235](https://github.com/netease-youdao/LobsterAI/pull/3235)、[#3229](https://github.com/netease-youdao/LobsterAI/pull/3229)
   - 后续可能方向：Artifact 版本对比、跨会话引用、MCP 权限可视化、侧边聊天与主任务合并。

---

## 7. 用户反馈摘要

过去 24 小时 **没有 Issues 评论或用户反馈数据**，因此无法提炼真实用户原声、满意度或具体使用场景。

从今日修复内容可以间接观察到的典型使用痛点包括：

- 多机器人群聊时希望保留完整上下文，避免重复建任务和串话。
- IM 审批提示与实际超时不一致，导致用户误判操作状态。
- Telegram、Discord 默认开放私聊带来权限和隐私顾虑。
- DSH 升级后，旧群聊历史和定时任务无法正确关联。
- 设置页缺少可靠的未保存提示，可能造成配置覆盖。
- Skills、插件和 Marketplace 迁移后，用户需要更清晰的兼容性与故障诊断信息。

这些属于**工程侧推断，而非已验证的用户反馈**；后续应重点跟踪新版本发布后的 Issue、IM 渠道故障报告及插件兼容问题。

---

## 8. 待处理积压

### 当前公开积压

- 过去 24 小时 Issues 更新：**0**
- 当前待合并 PR：**0**
- 数据中未提供长期未响应的历史 Issue 或开放 PR 清单，因此无法判断是否存在更早的积压事项。
- 唯一可见的长期未合并 PR [#2859](https://github.com/netease-youdao/LobsterAI/pull/2859) 已于今日关闭，不属于待处理项。

### 建议维护者后续关注

1. **建立 DSH 迁移兼容性反馈入口**，分别收集 OpenClaw 插件、会话、记忆、Skills 和 IM 配置问题。
2. **重点监控 IM 渠道回归**：群路由、多机器人共享任务、Telegram 论坛话题、审批超时和白名单策略。
3. **验证旧会话续接率**，尤其是飞书、POPO、QQ 群聊以及带自定义名称的历史任务。
4. **补充插件兼容矩阵**，明确哪些 OpenClaw 插件可直接迁移、哪些需要 DSH 协议适配。
5. **观察 Skills Marketplace 迁移后的安装失败率、依赖冲突和只读挂载问题**。
6. **完善设置页与危险命令的回归测试**，包括未保存退出、配置覆盖、插件卸载和权限降级场景。

---

## 总体健康度

| 指标 | 今日数据 | 判断 |
|---|---:|---|
| 新版本发布 | 1 | 核心架构版本按计划落地 |
| PR 更新 | 17 | 开发吞吐高 |
| 待合并 PR | 0 | 交付队列清晰 |
| Issues 更新 | 0 | 暂无公开问题信号，但也可能存在反馈尚未进入 Issue |
| 高影响范围变更 | 核心引擎、插件、IM、Skills、设置 | 迁移完成度高，回归风险也高 |
| 综合健康度 | **良好 / 加速推进** | 建议进入发布观察和稳定性收敛阶段 |

**结论：** LobsterAI 今日完成了 DSH 迁移发布及一轮集中收尾，功能覆盖和交付效率突出。项目下一阶段的关键不再是继续大规模换架构，而是验证真实兼容性、收集用户反馈并修复跨渠道、跨设备和历史数据迁移问题。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-11-28**  
**项目：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

过去 24 小时项目保持较高开发活跃度，共更新 **9 条 Issues**、**20 条 PR**，其中 **17 条 PR 仍待合并**、**3 条已合并或关闭**；同期没有新版本发布。  
当前工作集中在 Console 稳定性、模型与 MCP 配置、运行时隔离、Cron/QQ 等关键链路修复，以及 Creator App 的结构化输出和视频记忆模块。  
今日多数 PR 仍处于 Open 或 Under Review 状态，说明功能推进较快，但合并节奏和回归验证仍是项目健康度的关键观察点。  
整体判断：**开发活跃度较高、问题发现及时，但修复尚未大规模落地，发布与集成节奏偏慢。**

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本更新、破坏性变更或迁移说明。

---

## 3. 项目进展

### 今日已关闭或合并的重要 PR

#### 1. Console 聊天导航、滚动与流式时间戳稳定性  
[#8951](https://github.com/agentscope-ai/QwenPaw/pull/8951) · **CLOSED**

该 PR 主要改善 Console 聊天体验：

- 使用嵌套客户端 ID 去重迁移后的用户消息导航；
- 修复在迁移消息与最新消息之间切换时历史记录不完整的问题；
- 在流式输出结束、实时视图切换到虚拟化历史时保持阅读视口稳定；
- 修复 steer 消息时间戳处理。

**影响：** 有助于减少长会话、迁移会话和流式回复场景下的重复消息、历史丢失及滚动跳动，是 Console 可用性的重要稳定性改进。

#### 2. Relay 中断恢复与关闭流程  
[#8952](https://github.com/agentscope-ai/QwenPaw/pull/8952) · **CLOSED**

作为 Relay 恢复机制的后续修复，该 PR 完善了：

- 按用户独立执行 Hub recovery 与 shutdown；
- 为清理流程增加有界等待；
- 关闭 HTTP client 前先解除引用，避免关闭失败后仍被复用；
- 处理中断恢复、用户关闭和资源清理路径。

**影响：** 降低 Relay 在中断、用户切换或关闭过程中出现资源泄漏、状态残留和恢复卡死的概率。

#### 3. Console 聊天历史分页与滚动  
[#8953](https://github.com/agentscope-ai/QwenPaw/pull/8953) · **CLOSED**

该 PR 针对聊天历史分页和滚动体验进行了集中修复：

- 使用持久化 transcript message ID 作为分页边界；
- 修复迁移会话加载历史时出现 `400 Invalid history cursor`；
- 分页失败后停止自动请求，改为显示内联错误并允许手动重试；
- 为滚动区域预留空间，减少内容跳动。

**影响：** 直接改善历史消息加载失败、无限自动重试和滚动体验不稳定等高频 Console 问题。

### 仍待合并的重要进展

- [#8965](https://github.com/agentscope-ai/QwenPaw/pull/8965)：修复 Cron API 默认工作区解析，关联 [#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960)。  
- [#8964](https://github.com/agentscope-ai/QwenPaw/pull/8964)：修复 Console 在模型加载阶段点击 Stop 后仍等待提交的问题。  
- [#8963](https://github.com/agentscope-ai/QwenPaw/pull/8963)：修复 QQ WebSocket 清理错误导致重连监督器永久退出的问题，关联 [#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962)。  
- [#8957](https://github.com/agentscope-ai/QwenPaw/pull/8957)：修复 Creator App Tests 因恢复预算异常身份判断而变红，关联 [#8956](https://github.com/agentscope-ai/QwenPaw/issues/8956)。  
- [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)：避免通过 `HookContext.inject_context()` 注入的系统级提醒被持久化为普通用户消息。  
- [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)：支持通过 `QWENPAW_BASE_PATH` 在反向代理子路径下部署 Console 与 API。  
- [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928)：允许自定义 provider 中的模型作为决策模型，并接入默认决策模型解析。

**阶段评估：** 今日已关闭的 3 条 PR 聚焦 Console 与 Relay 的稳定性，功能覆盖有所推进；但 **17 条待合并 PR** 中仍有大量底层修复和部署能力，尚未进入稳定发布基线。

---

## 4. 社区热点

### Issues

#### [#8845 Console Markdown 表格溢出且无法横向滚动](https://github.com/agentscope-ai/QwenPaw/issues/8845)  
**5 条评论，1 个赞；今日仍有更新**

这是本期评论最多的 Issue。问题表现为 Markdown 表格宽度超过消息气泡，右侧列被裁切，同时没有横向滚动能力，用户只能选择文本但难以阅读完整数据。

**核心诉求：**

- Markdown 表格应限制在消息容器内；
- 宽表应提供横向滚动；
- 避免渲染内容越过消息列表边界。

这是典型的长结果、对比表和数据分析场景体验问题，直接影响 Console 对复杂 AI 输出的可读性。现有数据中尚无明确对应 fix PR。

#### [#8732 在设置中心增加外观页面](https://github.com/agentscope-ai/QwenPaw/issues/8732)  
**2 条评论；今日更新**

用户希望在 Settings Center 统一配置欢迎页，包括：

- 自定义欢迎头像；
- 问候语；
- 布局位置；
- 背景颜色或样式。

该 Issue 指出相关基础能力已存在，主要需求是产品化整合与统一入口，因此实现成本可能低于全新功能，且用户明确提出“单一配置入口”，进入下一版本 UI 规划的可能性较高。

#### [#8929 MCP 配置页增加 Header 表单](https://github.com/agentscope-ai/QwenPaw/issues/8929)  
**2 条评论；今日更新**

许多 MCP 服务依赖 Header 进行认证，但当前配置页无法填写，用户必须切换到原生 JSON 配置，配置成本和出错概率较高。

**核心诉求：** 在 MCP 配置页面提供结构化 Header 字段，避免直接编辑 JSON。  
这是典型的企业集成与鉴权场景需求，若继续维持现状，可能影响第三方 MCP 服务的接入效率。

#### [#8959 企业版 Platform-Worker 实现及上游整合建议](https://github.com/agentscope-ai/QwenPaw/issues/8959)  
**2 条评论，1 个赞**

企业版用户基于 `v2.2.2.post1` 完成了可运行并已实际部署的 Platform-Worker，希望维护团队评审：

- 哪些模块适合贡献上游；
- 哪些能力应继续作为独立扩展；
- QwenPaw 是否需要通用扩展接口；
- 后续 PR 应如何拆分。

**意义：** 这是重要的生态与架构信号，表明企业用户已从“插件调用者”转向“平台能力共建者”。上游扩展接口、模块边界和 PR 拆分策略值得维护团队明确回应。

### Pull Requests

#### [#8951 Console 聊天导航、滚动与时间戳修复](https://github.com/agentscope-ai/QwenPaw/pull/8951)  
虽已关闭，但其修改规模较大，覆盖聊天导航、历史迁移、流式输出和滚动稳定性，属于今日影响用户面最广的 PR 之一。

#### [#8952 Relay 中断恢复与关闭修复](https://github.com/agentscope-ai/QwenPaw/pull/8952)  
聚焦多用户恢复、shutdown、HTTP client 清理等生产环境可靠性问题，重要性高于一般体验优化。

#### [#8953 Console 历史分页与滚动修复](https://github.com/agentscope-ai/QwenPaw/pull/8953)  
与 #8951、#8958 形成同一时间段的 Console 会话稳定性修复组合，说明迁移会话和分页机制正在成为近期质量治理重点。

#### [#7211 防止注入上下文持久化](https://github.com/agentscope-ai/QwenPaw/pull/7211)  
从 2026-08-21 创建并持续更新至今，属于较长期 PR。其目标是防止系统提醒在后续轮次或重载后被重复注入，影响对话正确性与上下文成本，值得关注合并优先级。

---

## 5. Bug 与稳定性

### 严重

#### 1. Code Mode 子 Agent 继承父会话工具上下文  
[#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954)

Code Mode 会话通过 `agent_tools_spawn` 创建子 Agent 时，子会话错误继承父会话的 `_execution_toolkit` ContextVar。结果是子 Agent 虽然构建成功，但调用 `run_code` 时抛出 `ToolNotFoundError`。

**风险等级：高**

- 属于上下文隔离错误；
- 子 Agent 实际不可执行代码；
- 可能导致工具注册、权限或会话边界出现更广泛的不一致。

**Fix PR：** 当前数据中未发现明确对应 PR。

#### 2. Cron API 全部返回 500  
[#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960)

以下三个 Cron REST API 均不可用：

- `GET /crons/jobs`
- `POST /crons/jobs`
- `DELETE /crons/jobs/{job_id}`

根因是 CronManager 实例 getter 引用了不存在的 `mam._workspaces...` 属性。

**风险等级：高**

定时任务功能的核心 API 完全不可用，影响自动化任务管理。

**Fix PR：** 已有 [#8965](https://github.com/agentscope-ai/QwenPaw/pull/8965)，通过异步解析默认 Agent/工作区修复该问题；当前仍待合并。

### 较高

#### 3. QQ 渠道在 WebSocket 清理错误后永久停止重连  
[#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962)

一次 WebSocket 或心跳清理异常会被记录到实例级 `_close_errors`，且该列表不会重置；后续连接逻辑看到列表非空便永久返回失败。结果是 Worker 虽处于 ready 状态，实际已断线且不再自愈。

**风险等级：中高**

- 渠道可能静默失联；
- Worker 状态与真实连接状态不一致；
- 单次清理异常即可造成长期不可用。

**Fix PR：** 已有 [#8963](https://github.com/agentscope-ai/QwenPaw/pull/8963)，继续执行重连；当前仍待合并。

#### 4. Creator App Tests 回归  
[#8956](https://github.com/agentscope-ai/QwenPaw/issues/8956)

`#8785` 引入共享 recovery budget 后，恢复逻辑仅通过异常对象身份识别“停止重试”的信号。若恢复层使用新的异常对象表达同一终止意图，边界会继续消耗恢复预算并再次调用 provider。

**风险等级：中高**

- 主分支 Creator App Tests 持续失败；
- 可能造成额外 provider 调用、费用增加和恢复循环；
- 暴露出异常协议设计不够稳健。

**Fix PR：** 已有 [#8957](https://github.com/agentscope-ai/QwenPaw/pull/8957)，计划使用带标记的异常表达终止；当前仍待合并。

### 中等

#### 5. Console Markdown 表格溢出  
[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)

表格内容被裁切且无法横向滚动，影响复杂结果阅读，但不涉及数据丢失或服务中断。

**Fix PR：** 当前未发现明确对应 PR。

#### 6. Console 在加载模型时点击 Stop 仍持续等待  
[#8964](https://github.com/agentscope-ai/QwenPaw/pull/8964)

当用户点击停止时，若 Chat POST 尚未开始，后端没有可停止的 run；SDK 需要宿主调用本地 abort callback。当前实现未正确处理准备阶段，因此输入区可能持续等待。

**风险等级：中**

**Fix PR：** [#8964](https://github.com/agentscope-ai/QwenPaw/pull/8964) 已提交，待合并。

#### 7. 单波浪号被错误解析为删除线  
[#8961](https://github.com/agentscope-ai/QwenPaw/pull/8961)

Web Console 将单 `~` 当作删除线定界符，导致 `600~1500 t/s` 等数字范围被错误格式化并丢失波浪号。

**风险等级：中低**

**Fix PR：** [#8961](https://github.com/agentscope-ai/QwenPaw/pull/8961) 已提交，要求使用双波浪号；待合并。

### 其他稳定性修复

以下 Creator 与通用工具链问题已有小规模 PR：

- 视频记忆根主题类型与空值处理：[#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933)
- 视频片段尾部时长上限：[#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932)
- JSON 提取时寻找最长有效片段：[#8917](https://github.com/agentscope-ai/QwenPaw/pull/8917)
- 结构化输出候选 JSON 平衡校验：[#8915](https://github.com/agentscope-ai/QwenPaw/pull/8915)
- `allOf` Schema 的字符串强制转换：[#8911](https://github.com/agentscope-ai/QwenPaw/pull/8911)
- Web grounding 列表中的 `null` 处理：[#8909](https://github.com/agentscope-ai/QwenPaw/pull/8909)
- 空文本块导致响应提取失败：[#8907](https://github.com/agentscope-ai/QwenPaw/pull/8907)
- JSON Pointer 数组索引越界或负索引写入：[#8905](https://github.com/agentscope-ai/QwenPaw/pull/8905)
- E2E 分页历史中 prompt 与 reply 配对：[#8958](https://github.com/agentscope-ai/QwenPaw/pull/8958)

这些修复多数已由同一贡献者批量提交，体现出 Creator App 结构化输出与 JSON 工具链的系统性加固，但批量 PR 也意味着**合并与整体回归验证不能仅逐条孤立判断**。

---

## 6. 功能请求与路线图信号

### 6.1 Settings Center 外观配置页  
[Issue #8732](https://github.com/agentscope-ai/QwenPaw/issues/8732)

**可能进入下一版本：较高。**

理由：

- 底层头像、问候文本、背景等能力据 Issue 描述已部分存在；
- 主要工作是统一 UI 入口和配置管理；
- 与 Console 个性化和欢迎页体验直接相关；
- 尚无明确对应 PR，建议维护者拆分后实现。

### 6.2 MCP Header 结构化配置  
[Issue #8929](https://github.com/agentscope-ai/QwenPaw/issues/8929)

**可能进入下一版本：中高。**

理由：

- 需求场景明确，许多 MCP 服务依赖 Header 鉴权；
- 当前需手工编辑 JSON，门槛高且易出错；
- 属于配置体验补齐，而非高风险架构改造。

目前未见明确 PR，若下一版本继续建设 MCP 生态，该功能有较强产品合理性。

### 6.3 自定义决策模型端点  
[PR #8928](https://github.com/agentscope-ai/QwenPaw/pull/8928)

**已进入候选实现阶段。**

允许自定义 provider 的模型被选为默认决策模型，并扩展 resolver 接受范围。若通过审查，这是提升私有模型和企业模型适配能力的重要增强。

### 6.4 反向代理子路径部署  
[PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)

**已进入候选实现阶段，但实现范围较大。**

新增 `QWENPAW_BASE_PATH`，支持 Console 和 API 部署在反向代理前缀下，适配企业网关和复杂基础设施。不过该 PR 标记为 size/XXXL，审查和回归成本较高，合并优先级需要维护者评估。

### 6.5 企业级 Platform-Worker 与上游扩展接口  
[Issue #8959](https://github.com/agentscope-ai/QwenPaw/issues/8959)

**可能形成路线图讨论，但短期合并不确定。**

虽然用户已有可运行的企业实现，但开放代码仍需内部流程。更现实的近期产出可能是：

- 明确通用扩展接口；
- 划分上游与私有扩展边界；
- 将成熟模块拆分为若干可审查 PR；
- 评估 Platform-Worker 的上游化路径。

### 6.6 治理规则与工具守卫配置统一  
[Issue #8955](https://github.com/agentscope-ai/QwenPaw/issues/8955)

用户指出治理层内置规则和工具守卫开关彼此独立，难以判断最终拦截行为。该请求本质上是**策略配置模型与可解释性的统一**。

短期更适合先：

- 补充配置说明；
- 在 UI 中展示规则优先级和生效关系；
- 明确哪些内置规则不可关闭；
- 再决定是否合并配置模型。

目前没有明确 PR，纳入下一版本的确定性低于外观页和 MCP Header。

---

## 7. 用户反馈摘要

### 真实痛点

1. **Console 复杂内容展示不完整**  
   用户在查看宽 Markdown 表格时无法访问右侧列，只能选择文字，无法正常阅读。说明 AI 输出从普通文本向表格、报告和结构化数据演进后，现有消息组件适配不足。[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)

2. **MCP 鉴权配置门槛偏高**  
   依赖 Header 认证的 MCP 无法通过图形界面配置，用户被迫切换到原生 JSON。该问题会直接增加非专业用户接入第三方服务的成本。[#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929)

3. **自动化与渠道自愈能力不足**  
   Cron API 500 使定时任务不可用；QQ 的一次清理错误可导致渠道永久断线。用户需要的不是仅报错，而是服务能够自动恢复并保持状态一致。[#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960)、[#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962)

4. **子 Agent 工具隔离不可靠**  
   Code Mode 子 Agent 虽能创建，但无法使用代码工具，反映复杂 Agent 编排中上下文和工具注册边界仍不稳定。[#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954)

5. **企业用户需要参与上游架构演进**  
   企业版 Platform-Worker 已实际部署，用户希望明确哪些能力适合进入上游、哪些应保持扩展形式。这表明社区已从功能使用进入平台共建阶段。[#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959)

### 满意度信号

- [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) 获得赞，说明企业版实现和参与上游评审的诉求获得至少一位社区成员认可。
- 多个 Bug 获得了可复现描述、环境信息、根因定位和直接 fix PR，说明报告质量较高。
- 今日出现多组“Issue + 对应 PR”的快速闭环，表明项目具备良好的问题响应和代码修复意愿。

### 不满与主要失望点

- 核心 Cron API 仍处于不可用状态；
- 主分支 Creator App Tests 自近期变更后持续变红；
- Console 会话迁移、分页、滚动等基础体验问题较集中；
- 多个关键修复仍停留在待合并状态，尚未形成用户可感知的稳定版本。

---

## 8. 待处理积压

### 1. 长期开放的代码执行上下文隔离问题  
[#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954)

Issue 本身刚于 11 月 27 日创建，但尚无明确修复 PR。由于问题直接影响 Code Mode 子 Agent 工具调用，应尽快确认是否需要重置子会话中的 `_execution_toolkit` ContextVar，并补充父子 Agent 隔离测试。

### 2. 长期等待合并的注入上下文 PR  
[#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)

该 PR 自 2026-08-21 创建并持续更新至今，已等待约三个月。其修复可避免系统提醒被写入持久化会话，并在重载后重复注入，属于数据语义正确性问题。

**建议：** 维护者明确给出审查结论、拆分方案或测试结果，避免长期悬置。

### 3. 大规模反向代理部署 PR  
[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)

该 PR 自 11 月 13 日创建，规模标记为 XXXL。其价值明确，但涉及 Console、API、静态资源、重定向和鉴权路径，可能需要拆分及部署矩阵测试。

**建议：** 优先审查最小可用范围，明确环境变量、静态资源路径、API 前缀和兼容性测试矩阵。

### 4. Console Markdown 宽表问题  
[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)

Issue 自 11 月 20 日创建并持续讨论，已获得 5 条评论，是本期最活跃问题，但尚无明确修复 PR。

**建议：** 增加消息容器 `overflow-x`、表格最小/最大宽度策略和窄屏回归测试，避免仅在桌面宽屏验证。

### 5. 治理配置模型困惑  
[#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955)

该问题不只是 UI 缺陷，也涉及两套拦截机制之间的产品语义。建议维护者发布配置优先级说明，并评估是否统一治理入口。[#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955)

### 6. 企业版上游整合缺少维护者结论  
[#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959)

用户已提出明确的评审目标，但下一步依赖维护者提供模块边界、扩展接口和 PR 拆分建议。建议避免长期停留在讨论阶段，否则企业用户难以规划后续同步与升级。

---

## 今日健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | **高** | 24 小时内 9 条 Issue、20 条 PR |
| 问题发现能力 | **高** | 多个问题有清晰复现、根因及修复 PR |
| 修复落地速度 | **中等** | 20 条 PR 中仍有 17 条待合并 |
| 测试健康度 | **偏弱** | Creator App Tests 主分支回归仍待修复 |
| 核心功能稳定性 | **承压** | Cron API 500、QQ 重连退出、Code Mode 工具隔离问题突出 |
| 发布节奏 | **偏慢** | 24 小时内无新版本，修复无法及时形成稳定基线 |
| 社区参与度 | **中高** | 企业共建诉求出现，多位贡献者提交集中修复 |
| 下一阶段重点 | **合并、回归、发布** | 优先落地 Cron、QQ、恢复机制、Code Mode 隔离与 Console 稳定性修复 |

**总体判断：项目健康度为“活跃但处于修复收敛期”。** 社区提交和缺陷定位效率良好，但主分支回归与关键接口故障表明当前不宜仅以 PR 数量衡量进展。维护者接下来应重点完成关键 fix PR 的审查合并、执行跨 Console/Creator/Channel/Agent 的回归测试，并尽快形成可发布版本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**统计日期：2026-11-28**  
**数据范围：过去 24 小时**  
**仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

过去 24 小时共更新 **50 条 Issues**（47 条新开或活跃、3 条关闭）和 **50 条 PRs**（40 条待处理、10 条合并或关闭），开发活动保持高位。  
项目发布 **v0.23.5** 补丁版，将自 v0.23.4 以来约 **338 个 PR** 汇总到 CLI、安装器、Microsoft Store、Docker 和 Hermes Cloud；完整策展式发布说明留待 v0.24.0。  
今日焦点集中在 **Gateway/systemd 兼容性、桌面端性能、Windows 与 Termux 支持、上下文压缩、Kanban/Cron 生命周期、插件安全及会话状态一致性**。  
问题修复和功能扩展并行推进，但仍有约 40 个 PR 处于待处理状态；部分高价值问题已经出现明确修复 PR，显示响应链路正常。  
综合评估：**项目活跃度很高、工程推进稳健，但发布节奏偏快且兼容性问题密集，当前健康度为“良好，但需关注回归与积压”。**

---

## 2. 版本发布

### [v0.23.5 — Hermes Agent v0.23.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.5)

- **发布日期：** 2026-11-27
- **版本类型：** 补丁版本
- **覆盖范围：** GitHub Release、CLI 与安装器、Microsoft Store、Docker、Hermes Cloud
- **变更规模：** 自 v0.23.4 以来累计约 **338 个合并 PR**

#### 更新定位

v0.23.5 是面向多分发渠道的稳定汇总版本，主要作用是将上一轮开发分支的积累统一发布。该版本没有在说明中提供逐项策展的完整 changelog，完整说明计划在 v0.24.0 给出。

#### 破坏性变更

- 发布说明中**未明确声明破坏性变更**。
- 但由于其汇总约 338 个 PR，跨 CLI、桌面端、插件、Docker 和云端升级时仍可能出现配置项、插件兼容性或环境迁移回归。
- v0.23.5 属于补丁版本，不应视为包含重大架构迁移的版本，但生产环境升级前仍建议验证插件、Gateway、记忆服务和外部 provider。

#### 迁移建议

1. **升级前备份配置和 profile 状态**，重点包括 `gateway_state.json`、插件配置及自定义环境变量。
2. **Gateway 用户**重点验证 systemd user/system unit、重启和 drain timeout 行为。
3. **插件用户**检查插件加载、secret-source 环境变量清理、MCP 1.x/2.0 兼容及外部工具注册。
4. **Cron/Kanban 用户**验证任务领取、过期回收、consent refusal 和 worker 压缩流程。
5. **Windows、Termux 和 Docker 用户**建议进行专项冒烟测试，因为这些问题在近期仍持续出现。
6. 等待 **v0.24.0** 的完整策展说明，以判断 v0.23.5 汇总中哪些属于下一版本重点路线。

---

## 3. 项目进展

今日共看到 50 条 PR 更新，其中 40 条仍待处理、10 条已合并或关闭。由于列表主要按评论数而非合并时间排序，以下为可确认具有代表性的重要推进。

### 3.1 Gateway 与 systemd 修复取得直接进展

- [PR #161031：从实际拥有 unit 的 systemd manager 读取 drain timeout](https://github.com/NousResearch/hermes-agent/pull/161031)  
  针对系统级 Gateway 安装时仍优先查询 `systemctl --user`、从而误报 stale unit 的问题，直接对应 [Issue #85117](https://github.com/NousResearch/hermes-agent/issues/85117)。  
  **判断：** 这是今日最接近合入的兼容性修复之一，可显著降低系统级部署的误报警。

- [PR #161013：为空闲 `session.info` 帧补充时间戳和 provider](https://github.com/NousResearch/hermes-agent/pull/161013)  
  修复 Gateway、Desktop 和流式会话间空闲状态展示不同步的问题，恢复此前相关工作的成果。  
  **判断：** 有助于提升桌面端会话可观测性与状态一致性。

- [PR #144701：将有界 control read 移出串行队列](https://github.com/NousResearch/hermes-agent/pull/144701)  
  避免 `session.control.read` 被慢请求阻塞并错过客户端 30 秒 deadline。  
  **判断：** 对 Gateway-hosted Webapp 和 Desktop 切换场景均有实际性能价值。

### 3.2 Agent 压缩和工具链可靠性增强

- [PR #161027：强化 lean compaction 摘要指令并拒绝工具调用式回复](https://github.com/NousResearch/hermes-agent/pull/161027)  
  解决本地或小模型在压缩时继续聊天而不生成结构化摘要的问题。  
  **对应问题：** [Issue #159238](https://github.com/NousResearch/hermes-agent/issues/159238)  
  **判断：** 压缩链路是否稳定直接影响长会话稳定性，此修复优先级较高。

- [PR #161025：将 `model.supports_vision` 限定到配置的默认运行时](https://github.com/NousResearch/hermes-agent/pull/161025)  
  避免顶层视觉能力开关错误影响非默认模型或 provider。  
  **判断：** 降低多模型、多 provider 环境中的路由误判。

- [PR #161026：A2A 请求显式携带 User-Agent 并展示 403 详情](https://github.com/NousResearch/hermes-agent/pull/161026)  
  改善外部 A2A 服务的兼容性和错误诊断。  
  **判断：** 对插件生态的互操作性和排障体验有直接改善。

### 3.3 Kanban 与 Cron 生命周期改进

- [PR #161030：Kanban consent refusal 归类为 `needs_input`，不再视为崩溃](https://github.com/NousResearch/hermes-agent/pull/161030)  
  防止正常的审批拒绝触发自动熔断。  
  **判断：** 可避免 Kanban 工作流因安全审批机制而错误停摆。

- [PR #160269：为“外部执行型插件”提供公共扩展接口](https://github.com/NousResearch/hermes-agent/pull/160269)  
  包含参数包装、命令判断、稳定辅助函数、插件自有工具调用及 session-kernel opt-out 等 seam。  
  **判断：** 是插件从“本进程内工具”走向“外部执行后端”的架构性铺垫，适合纳入后续主版本规划。

- [PR #159651：飞书/Lark 从核心迁移到官方插件](https://github.com/NousResearch/hermes-agent/pull/159651)
- [PR #159640：QQ Bot 从核心迁移到官方插件](https://github.com/NousResearch/hermes-agent/pull/159640)  
  核心功能进一步模块化，插件默认安装但仅在配置后启用，并包含自动迁移逻辑。  
  **判断：** 项目正在持续降低核心代码膨胀，符合大型开源 Agent 框架的平台化方向。

### 3.4 插件目录与生态扩展

- [PR #160168：新增 ClawCall 语音通话插件](https://github.com/NousResearch/hermes-agent/pull/160168)
- [PR #161033：Fish Audio 更新至 v1.15.0，并支持 S3 Pro](https://github.com/NousResearch/hermes-agent/pull/161033)
- [PR #161028：Talaria WebUI 更新至 1.7.0](https://github.com/NousResearch/hermes-agent/pull/161028)
- [PR #161024：新增 HelmSwap MCP 插件目录项](https://github.com/NousResearch/hermes-agent/pull/161024)
- [PR #161029：新增基于 mTLS 的异步 A2A 插件](https://github.com/NousResearch/hermes-agent/pull/161029)
- [PR #82286：新增可选知识图谱构建技能](https://github.com/NousResearch/hermes-agent/pull/82286)

**整体推进程度：** 今日并非单一功能突破，而是持续推进四条主线：**运行时稳定性、桌面体验、插件平台化、核心解耦**。按可见 PR 估算，项目在功能覆盖和架构整理上都有明显前进；但大量修复尚处于开放状态，不能把 PR 更新等同于已经进入稳定发行。

---

## 4. 社区热点

### Issues：讨论最活跃的问题

1. [Issue #85117：systemd system-level Gateway 被误报 stale unit](https://github.com/NousResearch/hermes-agent/issues/85117)  
   **13 条评论，为今日最高。**  
   核心诉求是让 systemd 诊断识别 unit 的真实管理范围，而不是无条件查询 user scope。已有 [PR #161031](https://github.com/NousResearch/hermes-agent/pull/161031) 跟进。  
   **背后痛点：** 误报会削弱运维人员对 shutdown、drain 和自动重启机制的信任。

2. [Issue #89732：Linux + AMD 环境下桌面动画持续占用 50%–69% iGPU](https://github.com/NousResearch/hermes-agent/issues/89732)  
   **9 条评论。**  
   反映桌面端在可见窗口、前台工作状态下仍持续渲染环境动画，明显影响功耗、发热和办公场景体验。  
   **背后痛点：** Hermes Desktop 尚不能被视为低资源后台工具；Linux/AMD 支持成熟度不足。

3. [Issue #91169：`project bind-board` 未写入 board 的 `project_id`](https://github.com/NousResearch/hermes-agent/issues/91169)  
   **6 条评论。**  
   新建任务无法继承项目，可能回退到未作用域的 workdir。  
   **背后痛点：** 项目、看板和任务之间的身份传播不完整，影响多项目自动化。

4. [Issue #88549：Desktop 会话增加 Settle、Snooze、Wake 生命周期](https://github.com/NousResearch/hermes-agent/issues/88549)  
   **5 条评论。**  
   诉求来自“多个自治任务同时运行、用户需要处理注意项”的真实场景，希望明确表示已读、已处理、暂缓或重新唤醒。  
   **背后痛点：** 当前会话说话式通知难以表达人工关注的生命周期。

5. [Issue #88698：关闭 MCP 1.x/2.0 双时代协议边界缺陷](https://github.com/NousResearch/hermes-agent/issues/88698)  
   **5 条评论、1 个点赞。**  
   核心诉求是统一历史 `initialize` 与新式 `server/discover` 的兼容边界，避免同一协议族中出现行为分叉。  
   **背后痛点：** MCP 生态快速演进，多协议并存已成为插件可靠性的主要风险。

6. [Issue #92774：插件系统提示词注册上限被硬编码](https://github.com/NousResearch/hermes-agent/issues/92774)  
   **5 条评论。**  
   单段 4K、总量 8K 的限制，使合法插件路径无法承载较大的常驻上下文。  
   **背后痛点：** 插件开发者缺少可配置、可治理的上下文注入机制。

7. [Issue #160977：Anthropic 用量百分比被二次放大至 100%](https://github.com/NousResearch/hermes-agent/issues/160977)  
   **2 条评论，今日新建。**  
   `_usage_windows` 把 provider 已返回的百分比误当作 0–1 比例再乘以 100。  
   **背后痛点：** 账户用量监控失真，可能误导额度、订阅和成本决策。

8. [Issue #160945：Cron agent session 未获得外部记忆 provider 的工具](https://github.com/NousResearch/hermes-agent/issues/160945)  
   **2 条评论。**  
   Honcho 等 provider 已注册并激活，但 cron agent 看不到 `honcho_*` 工具。  
   **背后痛点：** “交互会话可用、自动化会话不可用”的能力不一致会直接削弱无人值守工作流。

### PR：值得社区关注的提案

- [PR #160269：外部执行型插件公共 seam](https://github.com/NousResearch/hermes-agent/pull/160269)  
  代表插件架构从简单注册走向可扩展执行后端。

- [PR #82286：知识图谱构建技能](https://github.com/NousResearch/hermes-agent/pull/82286)  
  针对 Agent 构建知识图谱时缺少 schema、实体去重和溯源的问题。

- [PR #160168：ClawCall 语音插件](https://github.com/NousResearch/hermes-agent/pull/160168)  
  显示插件目录正向通信、语音和外部服务扩展。

- [PR #128724：有界 completion policies](https://github.com/NousResearch/hermes-agent/pull/128724)  
  允许插件在答案交付前执行 allow、continue 或 fail 策略，是输出治理的重要方向。

---

## 5. Bug 与稳定性

### P1 / 高优先级

数据中未出现明确标记为 P1 的新 Issue，但以下问题可能造成服务中断、自动化失效或高资源消耗，应按高优先级处理：

1. [Issue #81971：Matrix 临时 CDN/5xx 错误被误判为永久认证失败](https://github.com/NousResearch/hermes-agent/issues/81971)  
   **影响：** 同步循环被静默终止，systemd 仍显示 active，消息接收中断且不触发重启。  
   **Fix PR：** 暂无明确对应 PR。

2. [Issue #147564：Hermes Cloud 所有出站 TCP 被拒绝](https://github.com/NousResearch/hermes-agent/issues/147564)  
   **状态：已关闭**  
   导致 Dashboard 登录 503、Nous auth provider 不可达，并影响 Telegram 等出站服务。  
   **修复情况：** 已关闭，但摘要未显示根因和长期预防机制，需确认是否有可复用的网络诊断或重试策略。

3. [Issue #159238：Worker session 压缩提交被拒](https://github.com/NousResearch/hermes-agent/issues/159238)  
   **影响：** 压缩回滚、上下文计数不下降，下一轮再次压缩。  
   **Fix PR：** [PR #161027](https://github.com/NousResearch/hermes-agent/pull/161027) 已跟进。

### P2 / 中高优先级

4. [Issue #89732：Linux/AMD 桌面动画持续占用 50%–69% iGPU](https://github.com/NousResearch/hermes-agent/issues/89732)  
   **Fix PR：** 暂无。

5. [Issue #91169：绑定看板后任务无法继承项目 ID](https://github.com/NousResearch/hermes-agent/issues/91169)  
   **Fix PR：** 暂无。

6. [Issue #120858：Anthropic OAuth 未反向映射 `chat_history_lookup` 工具别名](https://github.com/NousResearch/hermes-agent/issues/120858)  
   影响工具调用出现 `not_found`，造成额外轮次和记忆检索失败。  
   **Fix PR：** 暂无明确对应项。

7. [Issue #146237：Desktop Kanban 跨 profile 分配返回 403](https://github.com/NousResearch/hermes-agent/issues/146237)  
   影响多 profile 自动化。  
   **Fix PR：** 暂无明确对应项。

8. [Issue #132150：Termux/Bionic 新环境缺少 libpython 链接修复](https://github.com/NousResearch/hermes-agent/issues/132150)  
   影响 Android 本地部署与 `hermes pm repair`。  
   **Fix PR：** 暂无明确对应项。

9. [Issue #160877：最新更新强制安装/配置 `webapp`，导致 Dashboard 冲突](https://github.com/NousResearch/hermes-agent/issues/160877)  
   影响升级路径和用户控制权。  
   **Fix PR：** 暂无明确对应项。

10. [Issue #160945：Cron agent session 缺少 Honcho 等外部记忆工具](https://github.com/NousResearch/hermes-agent/issues/160945)  
    **Fix PR：** 暂无明确对应项。

11. [Issue #160982：Cron lifecycle guard 跨 JSON 字段误判命令](https://github.com/NousResearch/hermes-agent/issues/160982)  
    安全机制出现误报，可能阻断合法任务。  
    **Fix PR：** 暂无明确对应项。

12. [Issue #160983：一次性 Kanban claim 到期被回收并触发 `gave_up`](https://github.com/NousResearch/hermes-agent/issues/160983)  
    **Fix PR：** [PR #161030](https://github.com/NousResearch/hermes-agent/pull/161030) 修复相邻的 consent refusal 分类问题，但摘要显示它未直接覆盖一次性 claim TTL 回收语义。

13. [Issue #161023：Windows 聊天输入框快捷键不可用](https://github.com/NousResearch/hermes-agent/issues/161023)  
    影响 Windows 桌面端基本交互。  
    **Fix PR：** 暂无明确对应项。

14. [Issue #161017：API Server 混用 Bot Chat 模型与 profile provider](https://github.com/NousResearch/hermes-agent/issues/161017)  
    跨 provider 模型在 Desktop 可用，但 API Server 路径失败并触发 fallback。  
    **Fix PR：** 暂无明确对应项。

15. [Issue #161032：Windows Cron `.sh` 脚本命中 WSL stub](https://github.com/NousResearch/hermes-agent/issues/161032)  
    **Fix PR：** 暂无明确对应项。

16. [Issue #161034：插件 secret-source bootstrap token 未从子进程环境移除](https://github.com/NousResearch/hermes-agent/issues/161034)  
    **安全影响：** 敏感令牌可能泄露给插件派生进程。  
    **Fix PR：** 暂无明确对应项，建议提升为近期安全修复。

### P3 / 一般功能与体验问题

- [Issue #160941：Docker 启动 reconciliation 遇到错误结构 JSON 时崩溃](https://github.com/NousResearch/hermes-agent/issues/160941)
- [Issue #160877：升级过程中 WebApp 配置发生非预期变更](https://github.com/NousResearch/hermes-agent/issues/160877)
- [Issue #94714：`hermes sessions browse` 按方向键退出并显示 Cancelled](https://github.com/NousResearch/hermes-agent/issues/94714)  
  **状态：已关闭**。

---

## 6. 功能请求与路线图信号

### 6.1 Desktop 会话注意力生命周期

[Issue #88549](https://github.com/NousResearch/hermes-agent/issues/88549) 请求引入 **Settle、Snooze、Wake**。它与现有 Inbox、未读状态和会话侧栏能力高度衔接，较可能成为下一轮 Desktop 体验增强的一部分。

### 6.2 插件热重载

[Issue #54941](https://github.com/NousResearch/hermes-agent/issues/54941) 请求 `/reload-plugins`，在不新建会话的情况下重新加载 `plugins.enabled`。  
这一需求与插件生态快速扩展相匹配，且 [PR #160269](https://github.com/NousResearch/hermes-agent/pull/160269) 正在建立更稳定的插件公共接口，因此**热重载很可能成为后续版本重点**。

### 6.3 无损刷新系统提示词来源

[Issue #74622](https://github.com/NousResearch/hermes-agent/issues/74622) 请求 `/refresh`，在不丢失当前会话的前提下刷新系统提示词来源。该能力兼顾 prompt cache 性能和配置实时性，且与插件热重载共享需求，**适合纳入 v0.24.0 或后续 Desktop/CLI 小版本**。

### 6.4 可配置系统提示词容量

[Issue #92774](https://github.com/NousResearch/hermes-agent/issues/92774) 指出 4K/8K 硬编码限制使官方插件注入路径不可用。  
解决方式预计涉及配置化限额、上下文预算和更明确的优先级机制，**属于兼容性改进，可能进入下一主版本**。

### 6.5 Desktop 会话日志选区作为上下文附件

[Issue #160948](https://github.com/NousResearch/hermes-agent/issues/160948) 提议将会话日志中的文本选区作为 context chip 附入输入框。  
这与 Desktop 文件附件、工具输出展开和会话检索体验高度一致，**是较有可能近期落地的桌面端功能**。

### 6.6 可配置 Desktop 字标

[Issue #88512](https://github.com/NousResearch/hermes-agent/issues/88512) 请求让空聊天页的 “HERMES AGENT” 字标可配置，并采用 skin 驱动方式。该 Issue 获得 **3 个点赞，为可见 Issues 中反应最高者**，说明存在明确用户需求。  
**判断：** 实现成本相对可控，可能作为 Desktop 个性化更新合入。

### 6.7 插件生态继续扩张

以下 PR 表明下一阶段可能继续加强“Agent + 插件”生态：

- [ClawCall 语音通话](https://github.com/NousResearch/hermes-agent/pull/160168)
- [Fish Audio S3 Pro](https://github.com/NousResearch/hermes-agent/pull/161033)
- [HelmSwap MCP](https://github.com/NousResearch/hermes-agent/pull/161024)
- [mTLS 异步 A2A](https://github.com/NousResearch/hermes-agent/pull/161029)
- [知识图谱构建技能](https://github.com/NousResearch/hermes-agent/pull/82286)

**总体路线图判断：** v0.24.0 很可能继续强化 **插件平台、外部执行、统一协议边界、Desktop 会话管理以及上下文治理**；同时需要集中收敛 Windows、Linux 桌面端、Termux、Docker、Cron 和 Kanban 的兼容性问题。

---

## 7. 用户反馈摘要

### 真实使用痛点

1. **系统级部署可靠性不足**  
   用户在 system-level Gateway 场景持续遭遇错误 stale-unit 警告，说明高级部署路径与默认 user-level 路径之间仍有差异。  
   来源：[Issue #85117](https://github.com/NousResearch/hermes-agent/issues/85117)

2. **桌面应用资源占用不符合日常驱动预期**  
   Linux/AMD 用户报告前台可见窗口下 iGPU 长时间保持 50%–69%，直接影响笔记本续航和持续使用体验。  
   来源：[Issue #89732](https://github.com/NousResearch/hermes-agent/issues/89732)

3. **自治任务缺少人工关注状态**  
   用户同时运行多个 session 后，难以区分“已完成但待检查”“已暂缓”和“需要重新唤醒”，Desktop 因而需要更完整的注意力管理模型。  
   来源：[Issue #88549](https://github.com/NousResearch/hermes-agent/issues/88549)

4. **无人值守场景与交互会话行为不一致**  
   外部记忆 provider 在普通会话中可用，但 cron session 中工具不可见，说明环境能力注入仍存在执行路径差异。  
   来源：[Issue #160945](https://github.com/NousResearch/hermes-agent/issues/160945)

5. **升级不应擅自改变产品形态**  
   更新后 WebApp 被强制启用或配置、继而与 Dashboard 冲突，用户对隐式启用功能较为敏感。  
   来源：[Issue #160877](https://github.com/NousResearch/hermes-agent/issues/160877)

6. **成本控制场景的积极信号**  
   有用户分享从高额 Grok 套餐转向 MiMo + Hermes 作为日常驱动的体验，表明 Hermes 在低成本个人 AI 助手方向具有吸引力。  
   来源：[Issue #161018](https://github.com/NousResearch/hermes-agent/issues/161018)

### 满意与积极信号

- 插件目录持续获得社区主动贡献，语音、MCP、A2A、WebUI 和知识图谱等方向均有新提案。
- 知识图谱技能、Desktop 个性化和会话上下文附件等需求，反映用户希望 Hermes 从“聊天机器人”进一步成为长期工作的桌面 AI 操作台。
- Issue #88512 获得 3 个点赞，是当前可见 Issue 中反应最高的需求项。
- 多个关键问题已有明确修复 PR，说明问题并非只被记录，修复链路总体活跃。

### 不满意点

- “普通会话可用、Cron 或 API Server 路径不可用”的功能不一致。
- 部署、升级和配置变更缺少足够透明的保护。
- Windows、Termux、Docker 和 Linux/AMD 等边缘环境仍缺少发布前系统性回归覆盖。
- 插件协议和安全边界迭代较快，兼容性与令牌隔离问题正在增加用户负担。

---

## 8. 待处理积压

### 8.1 长期未合并的重要 PR

1. [PR #128724：有界 completion policies](https://github.com/NousResearch/hermes-agent/pull/128724)  
   创建于 2026-09-30，涉及回答交付前策略钩子、连续输出上限和输出治理，属于架构性改动。  
   **建议：** 明确接口稳定性、失败语义和与现有插件 hook 的兼容矩阵。

2. [PR #144701：Gateway 有界 control read 脱离串行队列](https://github.com/NousResearch/hermes-agent/pull/144701)  
   创建于 2026-10-25，涉及 Gateway/Webapp 的请求时延和 deadline。  
   **建议：** 优先完成性能与并发回归测试，避免只解决单一路径。

3. [PR #82286：知识图谱构建技能](https://github.com/NousResearch/hermes-agent/pull/82286)  
   创建于 2026-08-09，功能价值明确但等待时间较长。  
   **建议：** 审查技能范围、输出 schema、去重策略和可验证性。

4. [PR #160269：外部执行型插件公共接口](https://github.com/NousResearch/hermes-agent/pull/160269)  
   涉及多个独立 commit 和公共 seam，审查范围较大。  
   **建议：** 拆分或建立兼容性测试，避免多个架构决策捆绑合入。

### 8.2 长期存在、仍需维护者明确处理的重要 Issues

1. [Issue #54941：`/reload-plugins` 热重载](https://github.com/NousResearch/hermes-agent/issues/54941)  
   创建于 2026-06-29。与插件生态持续扩张高度相关，不宜继续长期搁置。

2. [Issue #74622：`/refresh` 重载系统提示词来源](https://github.com/NousResearch/hermes-agent/issues/74622)  
   创建于 2026-07-30。可与插件热重载合并设计。

3. [Issue #88698：MCP 双时代协议边界收敛](https://github.com/NousResearch/hermes-agent/issues/88698)  
   创建于 2026-08-17，已获得讨论和关注，但仍标记为需要决策。  
   **建议：** 明确 1.x 支持终止时间、2.0 默认路径和协商规则。

4. [Issue #92774：系统提示词容量硬编码](https://github.com/NousResearch/hermes-agent/issues/92774)  
   创建于 2026-08-23，直接限制官方插件注入路径。  
   **建议：** 将配置化和预算治理纳入下一主版本设计。

5. [Issue #81971：Matrix 临时错误导致静默停服](https://github.com/NousResearch/hermes-agent/issues/81971)  
   创建于 2026-08-08，属于长期可靠性风险。  
   **建议：** 明确分类规则、退避重试、熔断与健康检查策略。

6. [Issue #132150：Termux/Bionic 环境修复缺失](https://github.com/NousResearch/hermes-agent/issues/132150)  
   创建于 2026-10-03，反映 Android 本地部署的安装器与 generation 生命周期不完善。

7. [Issue #120858：Anthropic OAuth 工具别名映射缺失](https://github.com/NousResearch/hermes-agent/issues/120858)  
   创建于 2026-09-24，属于 provider 兼容性债务，可能造成工具调用浪费和记忆检索失败。

8. [Issue #146237：Kanban 跨 profile 分配被拒绝](https://github.com/NousResearch/hermes-agent/issues/146237)  
   创建于 2026-10-28。多 profile 是 Hermes 的核心使用方式之一，建议明确授权模型，而不是只返回 `profile_scope_mismatch`。

9. [Issue #158430：已完成 delegation 的关联查询与审批工作流](https://github.com/NousResearch/hermes-agent/issues/158430)  
   创建于 2026-11-21，体现用户希望以受控、可审计方式检索历史委派关系。  
   **建议：** 给出正式只读命令或说明官方替代流程。

---

## 项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | **高** | 24 小时更新 50 Issues + 50 PRs，发布 1 个版本 |
| 修复响应 | **较好** | systemd、压缩、Kanban 等重点问题已有明确 PR |
| 架构演进 | **良好** | 核心功能插件化、外部执行 seam、协议与输出治理持续推进 |
| 稳定性 | **中等** | Windows、Termux、Docker、Matrix、Cron/Kanban 仍有显著缺陷 |
| 跨平台成熟度 | **中等偏低** | Linux/AMD 桌面性能、Windows 快捷键与 Cron 脚本问题突出 |
| 社区生态 | **活跃** | 语音、MCP、A2A、知识图谱等外部贡献持续出现 |
| 待处理积压 | **需关注** | 40 个 PR 待处理，多个重要 Issues 自 6–9 月起仍未关闭 |

**总体判断：** Hermes Agent 正处于“快速扩展平台能力，同时补齐跨平台与自动化可靠性”的阶段。v0.23.5 提升了稳定发布的覆盖范围，但下一阶段的关键不只是增加功能，而是确保插件化、桌面化、Cron/Kanban 和多 provider 路径在系统级、跨平台、无人值守环境中保持一致。若维护团队能在 v0.24.0 前集中收敛 systemd、Windows、Termux、Matrix、上下文压缩和 token 隔离问题，项目健康度将明显提升。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# OpenClaw 生态日报 2026-10-24

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-24 04:03 UTC

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

# OpenClaw 项目动态日报｜2026-10-24

## 1. 今日速览

- 过去 24 小时共更新 **500 条 Issues、500 条 PRs**；其中 Issues 仍开放/活跃 **105 条**、关闭 **395 条**，PR 待合并 **207 条**、合并或关闭 **293 条**，整体吞吐很高，但治理与兼容性压力同步上升。
- 今日**没有新版本发布**。由于 PR 队列较大且包含多项破坏性重构、认证与安全边界调整，目前更适合视为持续集成与发布准备阶段，而非用户侧版本落地阶段。
- 今日重点集中在 **Gateway/SQLite 性能与资源占用、模型与认证准备流程、Agent 权限安全、渠道兼容性，以及多端 UI 体验**。
- 值得警惕的是 [#181432](https://github.com/openclaw/openclaw/issues/181432) 报告 2026.10.5 在 Linux ARM64 上启动 RSS 从约 300 MB 增至 **1.89 GB**，并伴随 SQLite 事务超时；与多条 worker 性能 PR 相互印证。
- 整体健康度评为 **中等偏积极**：清理和交付速度较快，但高价值问题中仍存在长期积压、待维护者决策、缺少复现环境及兼容性验证不足等情况。

---

## 2. 版本发布

今日无新版本发布，因此没有可报告的正式更新内容、破坏性变更或迁移说明。

不过，当前 PR 队列包含多项可能进入下一版本的变更：

- [PR #182109](https://github.com/openclaw/openclaw/pull/182109)：计划退役 A2UI widgets 与 content-kind hooks，改以 HTML widgets 为主，属于带 `!` 的破坏性重构。
- [PR #174109](https://github.com/openclaw/openclaw/pull/174109)：计划默认关闭 Agent 面向的 `secrets` 工具，改为显式 opt-in。
- [PR #171950](https://github.com/openclaw/openclaw/pull/171950)：Apple 端将聊天历史刷新时的全量下载次数从 13 次降至 1 次。
- [PR #175733](https://github.com/openclaw/openclaw/pull/175733)：为 OpenAI Responses 无进展流增加最长 15 分钟的停滞保护。

上述变更均应结合最终 release notes、迁移说明和完整 CI 验证观察。

---

## 3. 项目进展

### 3.1 性能与资源治理

- [PR #181939](https://github.com/openclaw/openclaw/pull/181939) 正在收窄 SQLite 与模型目录的导入依赖图，减少 worker 启动时加载无关运行时模块。该方向与近期 Gateway 基线内存、SQLite 锁等待问题高度相关。
- [PR #182165](https://github.com/openclaw/openclaw/pull/182165) 计划依据已配置的 Agent roster 动态计算 SQLite worker store 上限，替代硬编码 `MAX_STORES = 64`。这对多智能体部署尤其重要。
- [PR #182140](https://github.com/openclaw/openclaw/pull/182140) 修复云端 worker 回收时丢失 worker 已创建但尚未推送的 commit，在可安全 fast-forward 时保留变更。
- [PR #182138](https://github.com/openclaw/openclaw/pull/182138) 尝试让云 worker 在 provider 完成物理释放后立即回收，避免会话关闭和清理接受后仍等待 40–120 秒。
- [PR #182173](https://github.com/openclaw/openclaw/pull/182173) 消除重复的 operator authority 检查，目标是在不改变权限语义的前提下减少重复校验。
- [PR #182066](https://github.com/openclaw/openclaw/pull/182066) 继续处理 cron transcript target 检查的重复 source validation；当前仍需补充测量证据。

### 3.2 模型、认证与 Provider 能力

- [PR #181606](https://github.com/openclaw/openclaw/pull/181606) 支持 provider auth 对稀疏配置执行部分更新，减少调用方复制完整 provider 字段的需要。
- [PR #181574](https://github.com/openclaw/openclaw/pull/181574) 允许仅具备 Native Decision 能力的 provider 独立准备凭据，不再伪装为 chat model。
- [PR #181597](https://github.com/openclaw/openclaw/pull/181597) 阻止显式选择与当前 provider 不兼容的认证 profile，避免将其他 provider 的凭据发送到错误端点。
- [PR #181607](https://github.com/openclaw/openclaw/pull/181607) 尝试通过 Cloudflare Workers AI 支持原生 Clef Decisions。
- [PR #171965](https://github.com/openclaw/openclaw/pull/171965) 引入可选 SubQ Snap 插件，为布尔判断、选项与 rubric 评分提供类型化 Decisions API。
- [PR #182127](https://github.com/openclaw/openclaw/pull/182127) 修复模型刷新期间因重叠配置更新而读取 stale owner 的问题，并修复相关 CI fixture。

### 3.3 安全与权限

- [PR #174109](https://github.com/openclaw/openclaw/pull/174109) 拟将 Agent `secrets` request/list/delete 工具默认关闭，并改用更明确的 operator opt-in 与安全录入流程。
- [PR #179899](https://github.com/openclaw/openclaw/pull/179899) 拟阻止 ACP Agent 继承完整 Gateway 环境变量，避免向 Codex、Claude、OpenCode、Pi 等子进程暴露 `OPENCLAW_GATEWAY_TOKEN` 等敏感变量。
- [PR #178313](https://github.com/openclaw/openclaw/pull/178313) 清理 skills library 输出中的终端 escape sequence，防止恶意元数据伪造终端输出或执行控制指令。

### 3.4 多端与 UI

- [PR #182167](https://github.com/openclaw/openclaw/pull/182167) 为访客模式提供可实际执行的 starter prompts，避免展示需要 operator 权限的任务。
- [PR #182040](https://github.com/openclaw/openclaw/pull/182040) 让访客默认进入“Involving me”会话过滤器，减少已授权会话被隐藏。
- [PR #171950](https://github.com/openclaw/openclaw/pull/171950) 优化 Apple 客户端历史记录增量获取，目标将每次刷新中的全量下载从 13 次降低到 1 次。
- [PR #181779](https://github.com/openclaw/openclaw/pull/181779) 修复 Codex 原生会话在 prompt 未镜像时无法完成 settled-turn finalization 的问题。
- [PR #181839](https://github.com/openclaw/openclaw/pull/181839) 保持 Codex 原生 turn 在 Host 工具调用和输出投影期间处于 active 状态，减少被误判 stalled。

### 3.5 内部结构与维护

- [PR #182160](https://github.com/openclaw/openclaw/pull/182160) 合并 core 与 bundled plugins 中重复的私有 response、metadata 和 owner-bound operation 实现。
- [PR #182170](https://github.com/openclaw/openclaw/pull/182170) 将单消费者 preparation 与 forwarding helper 收回各自 owner，缩小内部模块可见范围。
- [PR #182171](https://github.com/openclaw/openclaw/pull/182171) 的 Control UI atomic startup subscription 实验已明确停止推进，不应合并；该实验虽在主路径延迟上表现较好，但未通过 legacy 延迟和 sibling test 门槛。
- [PR #182182](https://github.com/openclaw/openclaw/pull/182182) 同样属于调查性工作，明确标注为不可合并，说明项目正在区分实验代码与可交付变更。

**推进判断：** 今日交付主要集中在性能、安全边界和内部架构治理，方向正确；但 207 条待合并 PR 意味着评审与兼容验证吞吐仍是主要瓶颈。整体可视为“工程推进显著、发布治理承压”。

---

## 4. 社区热点

### 4.1 Windows 服务安装与升级可靠性

- [Issue #170956](https://github.com/openclaw/openclaw/issues/170956) — **17 条评论，当前开放，P0**
- 聚焦 Windows `schtasks` 托管服务下 Gateway 启动慢、插件退出不干净、权限错误，以及重启/更新频繁失败。
- 标签显示已有 `fix-shape-clear`、`no-new-fix-pr`、`needs-maintainer-review` 等状态，说明问题形态已较明确，但缺少可直接合并的修复 PR。
- 核心诉求是**升级过程可预测、失败可诊断、服务重启可靠**，这是典型的 release blocker。

### 4.2 子 Agent 完成结果污染父上下文

- [Issue #96975](https://github.com/openclaw/openclaw/issues/96975) — **15 条评论，已关闭**
- 诉求是默认只返回状态和 child session link，避免把大段子会话内容、工具输出注入父 Agent。
- 该方向直接对应多 Agent 场景的上下文成本、延迟和消息噪声，属于架构性产品决策。

### 4.3 Telegram 进度消息重复

- [Issue #116512](https://github.com/openclaw/openclaw/issues/116512) — **12 条评论，已关闭**
- `streaming.mode: "progress"` 下，首条 commentary 可能在 snapshot ID 变化时被重复展示。
- 反映渠道适配层在流式消息去重与 snapshot 生命周期方面仍需统一抽象。

### 4.4 消息工具重复发送与发送预算

- [Issue #119992](https://github.com/openclaw/openclaw/issues/119992) — **10 条评论，当前开放，P2**
- Agent 可在同一 turn 中反复调用 `message` 工具，发送多个措辞略异的答案，造成“duplicate-answer storm”。
- 用户需要明确的 per-turn 发送预算或终止条件，避免同一语义答案反复触达用户。

### 4.5 更新状态缺少插件兼容性与迁移风险

- [Issue #122019](https://github.com/openclaw/openclaw/issues/122019) — **9 条评论，当前开放，P2**
- `openclaw update status` 只报告核心版本可升级，没有检查已配置/启用插件能否与候选版本兼容，也没有突出不可逆迁移风险。
- 这是升级安全与插件生态可持续性的关键缺口。

### 4.6 访客 UI 权限与导航体验

- [PR #182167](https://github.com/openclaw/openclaw/pull/182167)
- [PR #182040](https://github.com/openclaw/openclaw/pull/182040)
- 两条 PR 均围绕访客权限和会话可见性，说明多人共享 Control UI 正在从“能用”进入“按角色正确呈现”的阶段。

---

## 5. Bug 与稳定性

### P0 / 发布阻断级

1. **Windows 重启、更新失败，伴随插件退出与 schtasks 权限异常**  
   [Issue #170956](https://github.com/openclaw/openclaw/issues/170956)  
   - 状态：开放，P0，17 条评论。  
   - fix PR：标签显示 `no-new-fix-pr`，当前没有明确对应修复 PR。  
   - 影响：Windows 托管安装用户的升级和可用性，属于直接 release blocker。

### P1 / 严重稳定性与安全风险

2. **Gateway 基线 RSS 升至约 1.9 GB，并出现 SQLite 事务超时**  
   [Issue #181432](https://github.com/openclaw/openclaw/issues/181432)  
   - 状态：开放，P1，7 条评论；报告环境为 Linux ARM64、2026.10.5。  
   - 相关 fix/优化 PR：  
     - [PR #181939](https://github.com/openclaw/openclaw/pull/181939)  
     - [PR #182165](https://github.com/openclaw/openclaw/pull/182165)  
   - 判断：有明确修复方向，但尚不能确认已覆盖 1.9 GB 启动 RSS 的根因。

3. **Gateway V8 heap OOM 后自动恢复形成 core-dump 循环**  
   [Issue #115424](https://github.com/openclaw/openclaw/issues/115424)  
   - 状态：已关闭；数据点显示此前被评为 P1、影响 session state、message loss 与 crash loop。  
   - fix PR：数据中未提供明确链接。

4. **CLI budget compaction 在大 session 上近乎 100% 失败并形成 wake death-spiral**  
   [Issue #115546](https://github.com/openclaw/openclaw/issues/115546)  
   - 状态：已关闭；曾被评为 P1、diamond lobster。  
   - fix PR：数据中未提供明确链接。

5. **Channel conversation store 迁移后 SQLite 为 0 bytes，MS Teams 主动发送中断**  
   [Issue #94939](https://github.com/openclaw/openclaw/issues/94939)  
   - 状态：已关闭；涉及数据丢失、消息丢失及 MS Teams 主动推送。  
   - fix PR：数据中未提供明确链接。

6. **Memory dreaming 阻塞 Gateway event loop 约 10 分钟**  
   [Issue #99910](https://github.com/openclaw/openclaw/issues/99910)  
   - 状态：已关闭；影响 Gateway 响应、渠道连接和 short-term recall 持久化。  
   - fix PR：数据中未提供明确链接。

7. **Responses 流在仅收到 bookkeeping events 时无限保持 busy**  
   [PR #175733](https://github.com/openclaw/openclaw/pull/175733)  
   - 状态：开放，待 maintainer。  
   - 修复：设置 15 分钟 no-progress 上限，真实输出或 reasoning progress 可重置计时器。  
   - 判断：已有直接 fix PR，优先级高。

8. **Codex settled turn 因 prompt 未镜像而无法完成 finalization**  
   [Issue #181226](https://github.com/openclaw/openclaw/issues/181226)（由 PR 摘要引用）  
   - fix PR：[PR #181779](https://github.com/openclaw/openclaw/pull/181779)  
   - 状态：开放，标为 P1，已有明确修复候选。

### P2 / 中高优先级可靠性问题

9. **Windows `exec`/`read` 工具偶发返回空输出**  
   [Issue #105528](https://github.com/openclaw/openclaw/issues/105528)  
   - 状态：已关闭；涉及 v2026.6.x 回归、会话相关间歇失败。  
   - fix PR：数据中未提供明确链接。

10. **Xiaomi MiMo / openai-completions 重复生成尝试**  
    [Issue #108379](https://github.com/openclaw/openclaw/issues/108379)  
    - 状态：已关闭；表现为重复叙事文本后 abort。  
    - fix PR：数据中未提供明确链接。

11. **模型 fallback 重启误伤并发 `claude-cli` Agent-tool sessions**  
    [Issue #113149](https://github.com/openclaw/openclaw/issues/113149)  
    - 状态：已关闭；影响 session state 与 message loss。  
    - fix PR：数据中未提供明确链接。

12. **Feishu streaming card 全量更新导致长回复延迟显著回归**  
    [Issue #91941](https://github.com/openclaw/openclaw/issues/91941)  
    - 状态：已关闭；P1，曾有 8 条评论和 2 个赞。  
    - fix PR：数据中未提供明确链接。

13. **Cron scheduler 在连续重 timeout 后永久停止触发**  
    [Issue #102534](https://github.com/openclaw/openclaw/issues/102534)  
    - 状态：已关闭；影响自动化任务可靠性。  
    - fix PR：数据中未提供明确链接。

14. **Signal 插件反复触发 Node module-state assertion**  
    [Issue #116164](https://github.com/openclaw/openclaw/issues/116164)  
    - 状态：已关闭；2026.7.2-beta.5 中单日记录 149 次。  
    - fix PR：数据中未提供明确链接。

15. **Slack zombie WSS 导致 reconnect supervisor 挂死且无日志**  
    [Issue #77249](https://github.com/openclaw/openclaw/issues/77249)  
    - 状态：已关闭；需要人工重启。  
    - fix PR：数据中未提供明确链接。

16. **Telegram 入站 sticker 无描述且未落盘，Agent 无法识别**  
    [Issue #120735](https://github.com/openclaw/openclaw/issues/120735)  
    - 状态：开放，P2。  
    - fix PR：标签显示 `no-new-fix-pr`。

17. **iOS 开启 reasoning/tool activity 后严重卡顿**  
    [Issue #124759](https://github.com/openclaw/openclaw/issues/124759)  
    - 状态：开放，P2。  
    - fix PR：标签显示 `no-new-fix-pr`。

18. **移动端键盘弹出后聊天内容和输入区布局异常**  
    [Issue #137508](https://github.com/openclaw/openclaw/issues/137508)  
    - 状态：开放，P2。  
   - fix PR：标签显示 `no-new-fix-pr`。

19. **Leaf sub-agent 保留 `sessions_yield`，却失去产生等待事件的所有工具**  
    [Issue #118776](https://github.com/openclaw/openclaw/issues/118776)  
    - 状态：开放，P2。  
    - fix PR：标签显示 `no-new-fix-pr`。

### 安全专项

20. **模型生成伪造 `Human: [timestamp]` 消息，可能形成自授权执行链**  
    [Issue #108395](https://github.com/openclaw/openclaw/issues/108395)  
    - 状态：已关闭；曾标记 P1 和 security review。  
    - fix PR：数据中未提供明确链接。

21. **Transcript redaction 恢复后把 `***` 重新喂给模型，导致工具调用复用脱敏值**  
    [Issue #104992](https://github.com/openclaw/openclaw/issues/104992)  
    - 状态：已关闭；涉及 secret、data loss 与 session state。  
    - fix PR：数据中未提供明确链接。

22. **非 Discord 渠道缺少统一 `sanitizeAssistantVisibleText()`**  
    [Issue #90684](https://github.com/openclaw/openclaw/issues/90684)  
    - 状态：已关闭；曾标记 security review。  
    - fix PR：数据中未提供明确链接。

23. **exec 安全模式缺少 denylist 模式**  
    [Issue #71097](https://github.com/openclaw/openclaw/issues/71097)  
    - 状态：已关闭。  
    - 需求：在全 deny 与严格 allowlist 之间提供更平衡的策略。  
    - fix PR：数据中未提供明确链接。

---

## 6. 功能请求与路线图信号

### 6.1 已有明确 PR 支撑，最可能进入近期路线

- **Linux ARM64 官方 companion 构建**  
  [Issue #138279](https://github.com/openclaw/openclaw/issues/138279)  
  目标为 `.deb` 与 AppImage。需求明确，但今日没有对应 PR，进入版本仍需维护者排期。

- **Apple 端增量聊天历史下载**  
  [PR #171950](https://github.com/openclaw/openclaw/pull/171950)  
  已进入实现阶段，若验证通过，很可能成为下一版 iOS/macOS 性能更新重点。

- **Provider 自动发现模型**  
  [Issue #121584](https://github.com/openclaw/openclaw/issues/121584)  
  [Issue #74481](https://github.com/openclaw/openclaw/issues/74481)  
  目标是减少手工维护模型 catalog；今日 [PR #182127](https://github.com/openclaw/openclaw/pull/182127) 修复了模型刷新链路，但完整自动发现能力是否已落地仍需确认。

- **原生 Decision provider 能力**  
  [PR #181574](https://github.com/openclaw/openclaw/pull/181574)  
  [PR #181607](https://github.com/openclaw/openclaw/pull/181607)  
  [PR #171965](https://github.com/openclaw/openclaw/pull/171965)  
  显示项目正在把 Decision 从“聊天模型模拟”升级为独立 provider 能力，可能构成下一阶段 provider 生态的重要方向。

- **访客角色与 Control UI 权限体验**  
  [PR #182167](https://github.com/openclaw/openclaw/pull/182167)  
  [PR #182040](https://github.com/openclaw/openclaw/pull/182040)  
  两条改动均小而明确，较适合进入近期版本。

- **Agent credential request 默认关闭**  
  [PR #174109](https://github.com/openclaw/openclaw/pull/174109)  
  属于安全默认值调整，若合并会影响现有自动化脚本，发布时必须强调迁移。

### 6.2 有明确产品价值，但缺少直接实现 PR

- **Windows 托管服务可靠性**  
  [Issue #170956](https://github.com/openclaw/openclaw/issues/170956)  
  应优先进入 Windows release blocker 修复队列。

- **更新前插件兼容性检查与不可逆迁移提示**  
  [Issue #122019](https://github.com/openclaw/openclaw/issues/122019)  
  很可能成为升级工具下一阶段的核心能力。

- **Message 工具 per-turn 发送预算**  
  [Issue #119992](https://github.com/openclaw/openclaw/issues/119992)  
  需求源于真实重复消息骚扰，优先级应高于一般 P3 UX 改进。

- **Slack Modal 原生支持**  
  [Issue #88154](https://github.com/openclaw/openclaw/issues/88154)  
  适合结构化确认、表单和多步工作流，但今日无对应实现 PR。

- **跨渠道 dispatch ACK / receiver-entry telemetry**  
  [Issue #76247](https://github.com/openclaw/openclaw/issues/76247)  
  对多 Agent 调度和故障定位价值高，但实施面较大。

- **记忆 flush fallback 可命名配置**  
  [PR #138144](https://github.com/openclaw/openclaw/pull/138144)  
  已长期开放且标记 compatibility/proof 风险；适合在确认 fallback 语义后推进。

---

## 7. 用户反馈摘要

### 真实使用痛点

- **升级并不可靠**  
  Windows 用户反复重试后才能完成服务重启，更新过程还会暴露 `schtasks` 权限和插件退出问题。用户需要明确失败原因、可回滚步骤和更新前兼容检查。参见 [#170956](https://github.com/openclaw/openclaw/issues/170956) 与 [#122019](https://github.com/openclaw/openclaw/issues/122019)。

- **多 Agent 会话上下文过于沉重**  
  子 Agent 的完整报告和工具输出会回到父上下文，增加 token、延迟和噪声。社区倾向于“默认返回状态与 session link，必要时再拉详情”。参见 [#96975](https://github.com/openclaw/openclaw/issues/96975)。

- **消息风暴直接影响终端用户**  
  同一 turn 内反复发送相似答案会造成骚扰和感知故障，需要发送次数或语义去重预算。参见 [#119992](https://github.com/openclaw/openclaw/issues/119992)。

- **移动端核心聊天体验仍不稳定**  
  iOS 在展示 reasoning/tool activity 时明显卡顿，Android 又存在软键盘遮挡和输入区布局问题。这些问题直接影响高频使用。参见 [#124759](https://github.com/openclaw/openclaw/issues/124759)、[#137508](https://github.com/openclaw/openclaw/issues/137508)。

- **多模态渠道体验不一致**  
  Telegram sticker 到达后既没有描述也没有落盘，使 Agent 实际无法看到内容；Feishu、Telegram 的流式和富文本行为也存在差异。参见 [#120735](https://github.com/openclaw/openclaw/issues/120735)、[#116512](https://github.com/openclaw/openclaw/issues/116512)。

- **平台覆盖不均衡**  
  Windows 服务安装问题突出，Linux ARM64 官方构建又缺失，ARM 用户只能依赖自行构建或非官方产物。参见 [#138279](https://github.com/openclaw/openclaw/issues/138279)。

### 积极信号

- 大量 Issues 被关闭，表明历史反馈中相当一部分问题已经得到处理。
- 当前 PR 中有多项直接面向体验和安全的改进，包括访客提示、Apple 历史下载、终端 escape 清理、凭据隔离、Codex finalization 修复等。
- 社区能够提供复现环境、版本、平台、日志和截图，问题质量较高；[PR #178313](https://github.com/openclaw/openclaw/pull/178313) 与 [PR #182040](https://github.com/openclaw/openclaw/pull/182040) 明确带有 sufficient proof/screenshot，说明项目的证据意识正在增强。

### 不满与信任风险

- `no-new-fix-pr`、`needs-maintainer-review`、`needs-product-decision` 标签大量存在，说明用户反馈与实际修复之间仍有明显时延。
- 一些高价值提案因缺少环境、复现或 proof 而停留，维护者验证成本较高。
- [#170956](https://github.com/openclaw/openclaw/issues/170956) 和 [#181432](https://github.com/openclaw/openclaw/issues/181432) 若未及时解决，会直接削弱用户对稳定版和升级路径的信任。

---

## 8. 待处理积压

### 8.1 长期开放但已明确无新 fix PR

以下问题虽然多数带 `stale` 标签，但其中多项直接影响稳定性、消息可靠性或发布安全，不能仅因时间久远而关闭：

- [Issue #170956](https://github.com/openclaw/openclaw/issues/170956) — Windows P0 reliability / update blocker。  
- [Issue #119992](https://github.com/openclaw/openclaw/issues/119992) — 同一 turn 重复发送风暴。  
- [Issue #122019](https://github.com/openclaw/openclaw/issues/122019) — 更新检查忽略插件兼容性和迁移风险。  
- [Issue #120735](https://github.com/openclaw/openclaw/issues/120735) — Telegram sticker 无法被 Agent 使用。  
- [Issue #118776](https://github.com/openclaw/openclaw/issues/118776) — Leaf sub-agent 等待无法完成。  
- [Issue #124759](https://github.com/openclaw/openclaw/issues/124759) — iOS 工具活动展示严重卡顿。  
- [Issue #137508](https://github.com/openclaw/openclaw/issues/137508) — 移动端键盘遮挡与布局问题。  
- [Issue #125311](https://github.com/openclaw/openclaw/issues/125311) — `sessions tail` 尚缺紧凑的逐事件指标呈现。  

### 8.2 需要产品或维护者决策

- [Issue #96975](https://github.com/openclaw/openclaw/issues/96975) — 子 Agent 结果默认返回协议；虽已关闭，但结论应沉淀为明确产品契约。
- [Issue #71452](https://github.com/openclaw/openclaw/issues/71452) — message list 分页替代硬编码 25 条。
- [Issue #120244](https://github.com/openclaw/openclaw/pull/120244) — cron maintenance window 与角色隔离。
- [PR #138144](https://github.com/openclaw/openclaw/pull/138144) — memory flush fallback 命名与精确覆盖语义。
- [PR #182109](https://github.com/openclaw/openclaw/pull/182109) — A2UI 退役是破坏性插件 API 调整，需要明确弃用周期和迁移文档。

### 8.3 长期 PR 队列与兼容性风险

- [PR #171965](https://github.com/openclaw/openclaw/pull/171965) — 引入外部 SubQ Snap 插件和凭据消费。
- [PR #101294](https://github.com/openclaw/openclaw/pull/101294) — WhatsApp phone-code login，涉及 auth-provider 与兼容性。
- [PR #181607](https://github.com/openclaw/openclaw/pull/181607) — Cloudflare Workers AI 原生 Decision，标记安全边界与兼容性风险。
- [PR #181574](https://github.com/openclaw/openclaw/pull/181574) — Native Decision 凭据准备模型重构，依赖多个 stacked PR。
- [PR #179899](https://github.com/openclaw/openclaw/pull/179899) — ACP 隔离 Gateway 环境，属于高价值但需要全面回归的安全变更。

### 8.4 建议维护者优先处理顺序

1. **立即确认 Windows P0 修复负责人和目标版本**：[#170956](https://github.com/openclaw/openclaw/issues/170956)。  
2. **复现并定位 2026.10.5 ARM64 1.9 GB 启动 RSS**：[#181432](https://github.com/openclaw/openclaw/issues/181432)，结合 [#181939](https://github.com/openclaw/openclaw/pull/181939) 与 [#182165](https://github.com/openclaw/openclaw/pull/182165)。  
3. **合并并验证 Responses 无进展流保护**：[#175733](https://github.com/openclaw/openclaw/pull/175733)。  
4. **完成 Codex finalization 修复与回归**：[#181779](https://github.com/openclaw/openclaw/pull/181779)。  
5. **统一清理长期无响应项**：为 [#119992](https://github.com/openclaw/openclaw/issues/119992)、[#120735](https://github.com/openclaw/openclaw/issues/120735)、[#118776](https://github.com/openclaw/openclaw/issues/118776) 指派 owner、复现条件或产品结论。  
6. **为破坏性 PR 建立迁移清单**：重点关注 [#182109](https://github.com/openclaw/openclaw/pull/182109)、[#174109](https://github.com/openclaw/openclaw/pull/174109) 和 provider 认证相关 PR。

---

**综合判断：** OpenClaw 今日保持高吞吐，工程质量治理、模型 provider 能力和多端体验均有实质推进；但没有新版本发布，且 Windows 更新可靠性、Linux ARM64 内存回归、长期无 fix 的核心 Issues 仍是发布前应优先控制的风险。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

**观察日期：2026-10-24｜数据口径：各仓库过去 24 小时 GitHub Issues、PRs 与 Releases**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正处于**高强度工程化阶段**：9 个项目当日合计更新 **146 个 Issues、238 个 PR**，并产生 **3 个新版本**。核心竞争维度已从“能否调用模型、完成工具”转向**长会话可靠性、跨端状态一致性、权限安全、插件生态和资源效率**。其中 OpenClaw 以超大社区规模和完整渠道矩阵保持生态枢纽地位，Hermes Agent 与 QwenPaw 加速推进插件化、记忆和运行时架构，OpenHuman 与 LobsterAI 更偏桌面产品化，而 PicoClaw、NanoBot 聚焦轻量化部署与可嵌入性。

整体呈现“**发布活跃、修复供给充足，但质量治理与兼容性压力同步上升**”的态势：Hermes Agent、LobsterAI 已发布版本，OpenClaw、QwenPaw、OpenHuman 等则处于大规模合并或重构收敛期。安全默认值、子 Agent 上下文隔离、跨渠道结果送达、插件依赖事务一致性，以及升级可回滚性，成为下一阶段生态竞争的关键分水岭。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 活跃度判断 | 健康度评估 |
|---|---:|---:|---|---|---|
| **OpenClaw** | 500 | 500 | 无 | 极高，社区与集成面最大 | **中等偏积极**：工程推进显著，但 207 条待合并 PR、Windows P0、ARM64 内存回归形成压力 |
| **NanoBot** | 5 | 32 | 无 | 高，修复密集 | **活跃但积压偏高**：空闲压缩竞态出现多个并行修复，14 条 PR 待合并 |
| **PicoClaw** | 2 | 4 | 无 | 低量、持续维护 | **中等偏低**：有效 PR 尚未合入，Launcher 双栈问题仍开放且 stale |
| **IronClaw** | 0 | 4 | 无 | 低，例行依赖维护 | **稳定、低至中等活跃**：4 个 Dependabot PR 均待合并，无用户问题 |
| **LobsterAI** | 3 | 18 | **2026.10.23** | 高，发布冲刺明显 | **较健康**：版本发布、桌面体验和稳定性修复并行，账号申诉仍待处理 |
| **QwenPaw** | 13 | 36 | 无 | 高，架构改造集中 | **中高活跃**：PawApps、渠道插件化、记忆升级推进快，但大型 PR 集成风险高 |
| **Hermes Agent** | 50 | 50 | **v0.22.5** | 极高，Issue/PR 双向高吞吐 | **活跃但需收敛**：修复储备强，但 Gateway/Desktop/API/Plugin 升级回归集中 |
| **OpenHuman** | 18 | 50 | 无 | 极高，修复与 CI 收敛并行 | **中等偏积极**：大量主干编译/CI 修复，用户侧升级与核心模块问题仍缺闭环 |
| **合计** | **146** | **238** | **3 个** | 生态整体处于高迭代期 | 发布能力增强，但质量治理成为共同瓶颈 |

> 注：OpenClaw 数据为日报展示上限，Issues 和 PRs 可能存在截断，因此生态总量应视为下限。

### 活跃度分层

- **第一层：OpenClaw、Hermes Agent、OpenHuman、QwenPaw**  
  社区吞吐和工程复杂度最高，适合观察规模化 Agent 平台的方向。
- **第二层：LobsterAI、NanoBot**  
  发布和修复节奏明确，但分别面临升级后回归、长会话竞态与 PR 收敛问题。
- **第三层：PicoClaw、IronClaw**  
  更偏轻量部署或基础设施维护；规模较小，但部署体验和可维护性更易控制。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

**社区与维护吞吐处于明显领先位置。**  
OpenClaw 单日触及 **500 Issues + 500 PRs** 的数据上限，待合并 PR 达 **207 条**，远高于多数同类项目。其渠道、Provider、移动端、Agent、Skills 和 Gateway 构成了当前样本中最完整的个人助手技术栈。

相较其他项目，OpenClaw 的突出优势包括：

- **最广的渠道覆盖**：Telegram、Discord、Slack、Teams、Feishu、Signal、WhatsApp 等适配形成较高生态壁垒。
- **多端产品化程度高**：Apple 客户端、访客 UI、移动端交互、会话管理均持续演进。
- **Provider 抽象最激进**：正在把 Decision、认证准备、模型目录和认证 profile 抽象为独立能力。
- **自治能力深入安全边界**：不仅支持 Agent 工具和子 Agent，还涉及 operator authority、secret opt-in、环境变量隔离和 transcript 脱敏。
- **基础设施优化规模大**：SQLite worker、Gateway 内存、云 worker 回收、cron 校验均已形成专门治理线程。

### 3.2 与同类技术路线差异

| 项目 | 技术路线核心 |
|---|---|
| **OpenClaw** | “Gateway + 多渠道 + Provider 抽象 + Agent 权限体系”的大型个人 Agent 平台 |
| **Hermes Agent** | CLI、Desktop、Gateway、API、插件与 MCP 跨端协同，强调持续运行和自动化 |
| **QwenPaw** | PawApps SDK、渠道插件化、ReMe 记忆和 Console 组成的企业化 Agent 平台 |
| **OpenHuman** | Rust 核心、嵌入式运行时、沙箱、Vault/Memory 和桌面交互 |
| **LobsterAI** | 桌面优先，以 OpenClaw/Cowork 为核心构建消费级 AI 工作台 |
| **NanoBot** | 轻量 Python Agent，直接调用、消息队列、WebUI 和多 Provider 兼容 |
| **PicoClaw** | Go 轻量运行时，强调 OpenWrt、嵌入式和 Android 等低资源环境 |
| **IronClaw** | 当前以依赖维护为主，功能和社区信号有限 |

OpenClaw 更像**“个人 Agent 操作系统”**，而 QwenPaw 更偏插件化平台，Hermes Agent 更强调跨端会话连续性，OpenHuman 更强调本地运行时与沙箱，LobsterAI 则把 Agent 能力封装为面向终端用户的桌面产品。

### 3.3 社区规模对比

按当日 Issue/PR 更新量衡量：

1. **OpenClaw**：500 / 500，生态规模显著领先；
2. **Hermes Agent**：50 / 50；
3. **OpenHuman**：18 / 50；
4. **QwenPaw**：13 / 36；
5. **LobsterAI**：3 / 18；
6. **NanoBot**：5 / 32；
7. **IronClaw**：0 / 4；
8. **PicoClaw**：2 / 4。

OpenClaw 的优势是**问题输入、第三方适配和生态反馈密度**，弱点则是**治理成本更高**：大量破坏性 PR、权限默认值调整、插件兼容性和平台回归同时存在，发布节奏容易受长尾问题拖累。

---

## 4. 共同关注的技术方向

### 4.1 跨端、长会话状态一致性

- **OpenClaw**：Desktop 历史增量下载、访客会话可见性、Codex turn finalization。
- **Hermes Agent**：Desktop、API Server、CLI 之间的 Session 恢复出现 `permission_denied`、`not_found` 和长时间 Loading。
- **QwenPaw**：长对话滚动跳回、删除当前会话 404、媒体 URL 污染后续推理循环。
- **OpenHuman**：升级后 Memory 加载、Vault 初始化和桌面基础操作异常。

**共同诉求：**会话不能只被视为消息列表，而应具备统一的身份、来源、版本、恢复、压缩、删除和迁移语义。

### 4.2 消息送达与渠道可靠性

- **OpenClaw**：Telegram 进度消息重复、同一 turn 多次发送、渠道流式行为不一致。
- **Hermes Agent**：Gateway 重连后最终回复丢失、Slack Stop 按钮、跨平台准入冲突。
- **QwenPaw**：钉钉 webhook 过期后最终回复静默丢失、小艺 WebSocket 断开无反馈。
- **PicoClaw**：Telegram MarkdownV2 被拒绝并退化为纯文本。
- **NanoBot**：DuckDuckGo 搜索失败被误报为“无结果”。

**共同诉求：**“任务完成”必须与“结果已可靠送达”统一建模，渠道层需要幂等、重试、fallback、状态反馈和统一错误分类。

### 4.3 插件、Provider 与依赖治理

- **OpenClaw**：Native Decision provider、认证 profile、部分配置更新、第三方插件兼容性检查缺失。
- **Hermes Agent**：`uv 0.13.5` 导致插件被驱逐、memory provider 被清空，旧虚拟环境 extras 丢失。
- **QwenPaw**：PawApps SDK、渠道插件化、插件安装错误规范化。
- **PicoClaw**：新增 Standard Compute Provider。
- **LobsterAI**：OpenClaw entry hooks 在同步后丢失。
- **OpenHuman**：TinyMCP 模块版本不兼容导致所有 MCP 调用不可用。

**共同诉求：**插件和 Provider 需要具备稳定 API、兼容矩阵、事务式安装/升级、依赖锁定、凭据隔离和回滚机制。

### 4.4 权限、安全默认值与隔离

- **OpenClaw**：Agent `secrets` 工具默认关闭、ACP 子进程环境变量隔离、skills 输出清理终端 escape。
- **Hermes Agent**：PM 锁文件可能形成路径穿越与任意目录删除链；Shell Hook 超时可能阻塞所有工具。
- **QwenPaw**：请求级注入上下文不得持久化；插件工具升级和权限审查。
- **OpenHuman**：Composio scope 读取失败时改为 fail-closed；统一 security、policy、approvals 与 sandbox。
- **LobsterAI**：工具载荷缓存复用与敏感信息暴露之间的权衡。

**共同诉求：**权限控制不能依赖插件自觉，必须由宿主强制执行最小权限、环境隔离、审计和失败关闭。

### 4.5 上下文、记忆与子 Agent 成本控制

- **OpenClaw**：子 Agent 默认只返回状态和 session link，避免完整报告污染父上下文。
- **NanoBot**：压缩后大型工具结果仍可能突破预算；空闲压缩错误归档活动会话。
- **QwenPaw**：ReMe 记忆、相关性压缩、图片记忆和实体标签。
- **Hermes Agent**：Doc-chain 长期记忆、来源追溯、主动重读与治理。

**共同诉求：**记忆系统正在从“保存更多”转向“按需召回、可追溯、可压缩、可治理”，并要求工具输出和子 Agent 回报具备明确预算。

### 4.6 升级、回滚与发布工程

- **OpenClaw**：Windows 服务更新失败、无新版本但破坏性 PR 积压、插件兼容性未检查。
- **Hermes Agent**：`hermes update` 返回成功却实际移除插件和配置；v0.22.5 出现跨端 Session 回归。
- **OpenHuman**：0.64 升级后回退、缺少卸载器、Memory/Vault 初始化缺失。
- **LobsterAI**：新版本带来缓存、启动和 MCP 环境变量兼容性挑战。

**共同诉求：**升级必须是可观察、可验证、可回滚的事务，而不是只比较版本号或完成文件替换。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道个人 Agent、Provider、Skills、移动端、访客 UI、自动化 | 高级个人用户、Agent 开发者、跨平台自动化用户 | Gateway 为中心，SQLite worker、渠道适配、Provider 抽象和权限体系耦合较深 |
| **Hermes Agent** | CLI/Desktop/API/Gateway、多 Agent、插件、MCP、后台任务 | 长期运行个人 Agent 和自动化重度用户 | 强调跨来源 Session 续接、插件目录、Shell Hook 和后台执行 |
| **QwenPaw** | PawApps、渠道插件、记忆、Console、多 Agent | 平台型 Agent 开发者、团队和插件生态建设者 | Host contract、插件子进程隔离、ReMe 记忆、控制平面较系统化 |
| **OpenHuman** | 本地记忆、Vault、沙箱、桌面助手、嵌入运行时 | 注重本地化、隐私和可嵌入的个人用户 | Rust 核心、feature gating、host storage、sandbox 与 embed 边界严格 |
| **LobsterAI** | 会话内图片编辑、远程工具、Cowork、桌面伴侣、专家生态 | 消费级桌面用户和内容工作者 | 桌面应用包装 OpenClaw/Cowork，优先优化易用性、缓存和交互 |
| **NanoBot** | 轻量 Agent、Provider 兼容、直接调用、WebUI | 开发者、脚本调用者、追求轻量部署的用户 | Python 轻量核心，直接调用与消息队列并存，WebUI 迭代迅速 |
| **PicoClaw** | Telegram、Cron、OpenAI 兼容 Provider、低资源运行 | OpenWrt、嵌入式设备、边缘部署用户 | Go 实现，强调小体积、跨架构与设备常驻 |
| **IronClaw** | 当前主要是前端测试、证书和安全依赖维护 | 暂未呈现明确用户群 | 依赖现代前端栈，当前缺少可观察的 Agent 产品和社区方向 |

### 关键定位差异

1. **OpenClaw 是“生态平台型”**  
   优势是广度和扩展性，代价是兼容性矩阵庞大、升级治理复杂。

2. **Hermes Agent 是“持续运行型”**  
   更强调 Session、后台任务、跨端恢复和自动化；适合需要 Agent 长期在线的用户。

3. **QwenPaw 是“受控插件平台型”**  
   试图通过 Host contract、子进程隔离和统一安全模型控制第三方扩展。

4. **OpenHuman 是“本地运行时型”**  
   对 Rust feature、存储边界、Vault 和沙箱的约束更强，适合重视本地数据与可嵌入性的用户。

5. **LobsterAI 是“消费级桌面产品型”**  
   通过包装底层 Agent 能力提供图像编辑、远程工具和 Cowork 等完整体验。

6. **NanoBot、PicoClaw 是“轻量部署型”**  
   更容易嵌入现有系统，但渠道矩阵、插件生态和平台能力不及 OpenClaw。

---

## 6. 社区热度与成熟度

### 快速迭代阶段

- **OpenClaw**：吞吐最高，但待合并 PR 达 207 条，正在经历安全默认值、Provider 和内部架构的快速演进。
- **Hermes Agent**：50 Issues、50 PR 与版本发布并行，修复储备充足，但升级回归集中。
- **OpenHuman**：50 个 PR 中大量用于修复主干编译和 CI，反映大型重构后的快速收敛。
- **QwenPaw**：PawApps、渠道插件化、ReMe 记忆等架构能力集中推进，尚未形成发布级交付。
- **NanoBot**：32 个 PR，短会话和 WebUI 修复密集，但同类竞态存在重复方案。
- **LobsterAI**：发布日特征明显，版本交付、桌面体验和生态资源同时推进。

### 质量巩固阶段

- **PicoClaw**：功能规模小，当前重点应转向 Launcher 参数安全、双栈监听、Cron 状态准确性和已有 PR 合并。
- **IronClaw**：今日完全是例行依赖维护，处于低风险维护窗口，但缺乏社区和产品信号。

### 成熟度判断

- **产品成熟度最高**：LobsterAI、Hermes Agent，均已形成跨端发行物。
- **运行时成熟度最高**：OpenClaw、Hermes Agent；OpenHuman 的核心工程能力较强，但发布稳定性仍在收敛。
- **生态成熟度最高**：OpenClaw、Hermes Agent、QwenPaw。
- **轻量化程度最高**：PicoClaw、NanoBot。
- **最需要加强发布治理**：OpenHuman、Hermes Agent、OpenClaw。
- **最需要加强核心缺陷闭环**：PicoClaw、OpenHuman。

---

## 7. 值得关注的趋势信号

### 趋势一：Agent 竞争正从模型能力转向“状态可靠性”

模型和 Provider 已逐渐成为可替换基础设施，真正决定长期体验的是：

- Session 能否跨端恢复；
- 压缩后能否继续工作；
- 后台任务是否最终送达；
- 升级失败后能否回滚；
- 插件更新失败时配置是否仍完整。

**开发启示：**应把会话、投递、升级和插件安装都设计为具有状态机、事务和幂等性的领域对象。

### 趋势二：渠道层正在成为独立基础设施

多个项目同时暴露渠道回复丢失、重复发送、流式状态不一致、Markdown 不兼容和 fallback 缺失。渠道适配已不再是简单消息格式转换层，而是需要：

- 统一 delivery ledger；
- 幂等键和去重；
- TTL 与重试策略；
- 断线重连后的结果恢复；
- 统一消息可见性清洗。

**开发启示：**未来高质量 Agent 框架的竞争力，很大一部分会体现在渠道层，而不是模型适配层。

### 趋势三：插件生态正从“能加载”进入“受控运行”

OpenClaw 权限隔离、QwenPaw PawApps、OpenHuman tinysecurity、IronClaw DOMPurify 更新均表明，第三方扩展需要受控契约。插件生态下一阶段的关键指标不是数量，而是：

- 权限最小化；
- 依赖可复现；
- 安装与升级原子化；
- 崩溃隔离；
- API 版本兼容；
- 凭据不泄露；
- 可撤销、可回滚。

### 趋势四：Fail-closed 与最小权限成为安全默认方向

OpenClaw 准备默认关闭 Agent secrets，OpenHuman 将 Composio scope 读取失败改为拒绝执行，QwenPaw 强调请求级上下文不持久化。

**开发启示：**安全默认值应直接体现在产品配置中，同时提供清晰的 operator 授权入口；不能只依赖文档提醒。

### 趋势五：子 Agent 和工具输出成为上下文成本核心

OpenClaw 推动“默认只返回状态与 session link”，NanoBot 处理压缩后大型工具结果超预算，Hermes Agent 讨论长期记忆主动重读。行业正在从“让 Agent 记住一切”转向：

- 默认轻量摘要；
- 显式细节拉取；
- 工具结果预算；
- 记忆来源链；
- 压缩后的可恢复性；
- 子 Agent 产物隔离。

**开发启示：**上下文协议应像 API 一样分页、引用和按需展开，而不是把完整执行轨迹无差别注入父 Agent。

### 趋势六：发布版本不再是唯一竞争单位，“可恢复发布”更加重要

Hermes Agent 的插件被清空、OpenHuman 的版本回退、OpenClaw 的 Windows 升级失败，都说明一次成功下载并不等于成功升级。

**开发启示：**发布系统至少应提供：

- 升级前兼容性和数据迁移预检；
- 状态与版本持久化；
- 原子切换；
- 自动回滚；
- 卸载清理；
- 升级后 smoke test；
- 插件和配置完整性校验。

### 趋势七：桌面助手正向“Agent 工作台”演进

LobsterAI 的会话内图片编辑、OpenHuman 的 Vault/Memory、QwenPaw 的 Office 预览和 Hermes Agent 的 Desktop 恢复，都表明用户期待的不再是聊天窗口，而是能够：

- 查看和编辑 Agent 产物；
- 管理长期记忆和文件；
- 恢复历史任务；
- 在运行中纠偏；
- 观察工具调用和成本。

**开发启示：**产品竞争将越来越依赖工作区、文件操作、可观察性和恢复体验，而不仅是模型回答质量。

---

## 结论

当前生态已经形成清晰分层：

- **OpenClaw** 是综合生态与社区规模标杆；
- **Hermes Agent** 是跨端持续运行和自动化标杆；
- **QwenPaw** 是受控插件与平台化架构标杆；
- **OpenHuman** 是本地运行时和沙箱工程标杆；
- **LobsterAI** 是消费级桌面 Agent 工作台标杆；
- **NanoBot、PicoClaw** 是轻量化和嵌入式落地标杆。

下一阶段不宜再用“模型接入数、渠道数、Issue 数量”单独衡量项目领先程度，而应重点观察四项结果指标：**结果是否可靠送达、长会话是否可持续、插件是否受控、升级是否可恢复**。对技术决策者而言，这四项将比功能清单更准确地决定项目能否从活跃开源项目成长为可信的个人 AI 助手平台。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-10-24**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 一、今日速览

过去 24 小时共更新 **5 条 Issues**（新开/活跃 1 条、关闭 4 条）和 **32 条 PR**（待合并 14 条、已合并/关闭 18 条），整体开发吞吐量较高。当前工作重点集中在**空闲会话压缩并发安全、工具结果预算、模型供应商兼容和 WebUI 体验优化**，其中多个关键修复仍停留在待合并状态。  
今日无新版本发布，说明项目正处于较密集的缺陷修复与功能整合阶段，尚未形成可发布版本。Issue 关闭速度较快，但仍有 **14 条 PR 等待审查合并**，项目健康度可评为**活跃但合并积压偏高**。

---

## 二、版本发布

过去 24 小时**无新版本发布**，因此暂无版本级更新说明、破坏性变更或迁移注意事项。

---

## 三、项目进展

### 已合并或关闭的重要 PR

今日展示的 PR 中，已有 **18 条合并或关闭**。主要进展如下：

#### 1. WebUI 上下文压缩提示更加准确

- [#6389 feat(webui): distinguish context compaction reasons](https://github.com/HKUDS/nanobot/pull/6389)  
  区分空闲维护、上下文压力压缩和手动 `/compact`，避免不同触发原因显示相同提示，用户更容易判断会话为何被整理。

#### 2. 恢复等待消息不再意外自动执行

- [#6393 fix(webui): keep restored waiting messages manual](https://github.com/HKUDS/nanobot/pull/6393)  
  恢复历史“等待中”消息时，不再自动恢复执行资格，降低旧消息被重新触发 Agent 运行的风险。

#### 3. Kimi K3.1 Pro 参数适配

- [#6418 fix(providers): support Kimi K3.1 Pro request parameters](https://github.com/HKUDS/nanobot/pull/6418)  
  针对 `kimi-k3.1-pro` 和 `kimi-k3.1-pro-highspeed` 调整温度、推理等级及最大 token 等请求参数，提升新模型预设的可用性。

#### 4. WebUI 交互与视觉细节持续完善

- [#6413 fix(webui): show renamed topic titles in @ mentions](https://github.com/HKUDS/nanobot/pull/6413)：话题重命名后，@ 建议同步显示新名称。  
- [#6417 fix(webui): remove goal halo and redundant detail header](https://github.com/HKUDS/nanobot/pull/6417)：精简目标详情面板和动画效果。  
- [#6419 feat(webui): refine composer action feedback](https://github.com/HKUDS/nanobot/pull/6419)：统一输入区语音、发送和停止按钮的视觉反馈。  
- [#6398 fix(webui): preserve dollar prefix in skill references](https://github.com/HKUDS/nanobot/pull/6398)：保留技能引用中的 `$` 前缀，避免原始消息信息丢失。

#### 5. 测试质量清理

- [#6394 test: remove unreachable cases and strengthen weak assertions](https://github.com/HKUDS/nanobot/pull/6394)  
  移除不可达测试及过时断言，并加强边界与回归覆盖，有助于提高后续并发和压缩相关改动的验证可信度。

### 整体推进程度

项目今日在以下方向取得了实质进展：

- **会话生命周期安全**：历史等待消息恢复逻辑得到修正。
- **上下文可解释性**：压缩原因开始被明确区分。
- **模型兼容性**：Kimi 新版本参数得到适配。
- **WebUI 产品体验**：输入区、话题、目标状态和附件展示持续打磨。
- **测试可信度**：清理弱测试，为后续缺陷修复提供更可靠保障。

---

## 四、社区热点

> 数据中 PR 的评论数均显示为 `undefined`，因此无法可靠按评论数排序。以下结合更新时间、Issue 状态及主题关联度，列出今日最值得关注的讨论。

### 1. 空闲压缩可能在直接调用期间错误归档会话

- [#6214 Idle compaction can archive a session whose turn is still running through the direct entry point](https://github.com/HKUDS/nanobot/issues/6214)  
  **状态：已关闭｜评论：4**  
  该 Issue 是今日社区讨论最充分的条目。报告指出，`process_direct` 路径可能未进入空闲检查使用的待处理队列，导致仍在执行的会话被判定为空闲并提前归档。  
  **背后诉求：** 核心用户希望 API Server、SDK 和单次 CLI 调用具备与消息队列路径一致的生命周期保护。

### 2. 长时直接调用结束后立即触发压缩

- [#6410 Idle compaction can run immediately after a long direct turn without a fresh idle interval](https://github.com/HKUDS/nanobot/issues/6410)  
  **状态：开放｜评论：0**  
  即使 #6214 所述并发覆盖问题已经修复，长时间 `process_direct()` 仍可能让压缩候选提前入选；任务在锁队列中等待后，会于本轮完成时立即归档，而不是重新经历一个空闲周期。  
  **背后诉求：** 需要以“获得会话锁后重新检查活跃状态”为原则，彻底消除竞态窗口。

### 3. DuckDuckGo 连续搜索的失败被误报为空结果

- [#6285 web_search (ddgs): ambiguous failures look like empty results](https://github.com/HKUDS/nanobot/issues/6285)  
  **状态：已关闭｜评论：4**  
  默认无需 API Key 的 DuckDuckGo 搜索连续调用时，可能以“No results found”形式暴露底层模糊错误，Agent 容易将服务异常误判为网页不存在。  
  **背后诉求：** 搜索工具应区分“没有结果”和“搜索失败”，并改善重试、限流或服务波动下的错误可诊断性。

### 4. DeepSeek 搜索配置与 Responses API 兼容性

- [#6407 how to enable deepseek web_search tool?](https://github.com/HKUDS/nanobot/issues/6407)  
  **状态：已关闭｜评论：1**  
  用户希望 NanoBot 原生支持 DeepSeek 官方 Web Search 工具，并获得明确配置说明。
- [#6411 DeepSeek Responses: full-history reasoning replay uses output_text instead of documented reasoning_text](https://github.com/HKUDS/nanobot/issues/6411)  
  **状态：已关闭｜评论：0**  
  报告指出，回放完整历史推理内容时使用了 `output_text`，与 DeepSeek 文档描述的 `reasoning_text` 字段不一致。

**社区热点判断：** 今日讨论重点不是新功能扩张，而是保障**直接调用、长会话、搜索工具和特定模型供应商在真实场景中的可靠性**。其中空闲压缩竞态最集中，已有多个修复 PR，说明该问题优先级较高。

---

## 五、Bug 与稳定性

按影响范围和是否可能破坏会话完整性排序如下。

### P1：高优先级

#### 1. 空闲压缩可能在活动会话中运行

- [#6410 Idle compaction can run immediately after a long direct turn](https://github.com/HKUDS/nanobot/issues/6410)  
  **状态：开放**  
  长时直接调用结束时可能立即触发归档和摘要，存在会话历史被过早压缩、转录不一致或并发写入风险。  
  **已有修复 PR：**
  - [#6424 recheck idle eligibility after the session-lock wait](https://github.com/HKUDS/nanobot/pull/6424)
  - [#6421 recheck idle expiry after acquiring session lock](https://github.com/HKUDS/nanobot/pull/6421)
  - [#6405 keep idle scans away from in-flight direct turns](https://github.com/HKUDS/nanobot/pull/6405)

  三个 PR 从不同入口修正同一类竞态，建议维护者尽快统一方案、避免重复修复相互冲突。

### P2：中优先级

#### 2. 压缩后的大型工具结果仍可能导致轮次中止

- [#6404 fix(agent): budget oversized tool-result delta after compaction](https://github.com/HKUDS/nanobot/pull/6404)  
  **状态：待合并**  
  大型 `read_file` 结果不受常规导入预算限制，即使历史摘要成功，后续结果增量仍可能超出模型或轮次预算并中止任务。  
  **影响：** 长文件读取、代码库分析和多文件处理场景稳定性较高。  
  **修复状态：已有修复 PR。**

#### 3. 会话工作线程异常未被可靠报告

- [#6423 fix(agent): report session worker task failures](https://github.com/HKUDS/nanobot/pull/6423)  
  **状态：待合并**  
  Worker 完成回调未调用 `task.exception()`，未处理异常可能被静默丢弃，影响线上可观测性和故障定位。  
  **修复状态：已有修复 PR。**

#### 4. Azure GPT-6 请求参数不兼容

- [#6422 fix(providers): require explicit none effort for Azure GPT-6 temperature](https://github.com/HKUDS/nanobot/pull/6422)  
  **状态：待合并**  
  Azure 部署的 GPT-6 默认启用推理，在未显式设置 `reasoning_effort=none` 时发送 `temperature` 会被接口拒绝。  
  **修复状态：已有修复 PR。**

#### 5. DeepSeek reasoning 回放字段不符合文档

- [#6411 DeepSeek Responses reasoning replay uses output_text](https://github.com/HKUDS/nanobot/issues/6411)  
  **状态：已关闭**  
  可能导致完整历史中的推理上下文恢复不准确，尤其影响多轮推理会话。  
  **修复状态：Issue 已关闭，但当前展示列表中未见明确对应的独立修复 PR。**

### P3：一般或体验性问题

#### 6. DuckDuckGo 搜索错误与空结果混淆

- [#6285 web_search (ddgs): ambiguous failures look like empty results](https://github.com/HKUDS/nanobot/issues/6285)  
  **状态：已关闭**  
  可能导致 Agent 在搜索服务异常时产生错误结论。  
  **修复状态：Issue 已关闭；当前数据未展示对应 PR。**

#### 7. WebUI 文件卡片与媒体预览布局混杂

- [#6425 fix(webui): separate file cards from media previews](https://github.com/HKUDS/nanobot/pull/6425)  
  **状态：待合并**  
  混合图片和文件消息中，文件卡片可能被拉伸并错误排版，属于界面一致性问题。  
  **修复状态：已有修复 PR。**

#### 8. macOS 沙箱 stderr 出现 xcrun 缓存拒绝噪声

- [#6426 fix(tools): drop xcrun cache-denial noise from sandboxed stderr](https://github.com/HKUDS/nanobot/pull/6426)  
  **状态：待合并**  
  Git 经由 xcrun shim 运行时可能产生无关缓存权限错误，干扰日志判断。  
  **修复状态：已有修复 PR。**

---

## 六、功能请求与路线图信号

### 1. DeepSeek 原生 Web Search 接入

- [#6407 how to enable deepseek web_search tool?](https://github.com/HKUDS/nanobot/issues/6407)  
  用户明确希望 NanoBot 支持 DeepSeek 官方搜索工具，而不是仅使用 DuckDuckGo 等通用搜索提供商。  
  **路线图判断：** Issue 已关闭，但数据中没有对应功能 PR，因此暂不能确认已进入开发队列。短期更可能先以配置文档或供应商适配形式落地。

### 2. `web_fetch` 支持分页续读

- [#6317 feat(web): add continuation offsets to web_fetch](https://github.com/HKUDS/nanobot/pull/6317)  
  通过 `offset` 和 `nextOffset` 读取被截断网页的后续内容，并在每个分块中保留不可信内容提示。  
  **路线图判断：** **较可能纳入下一版本。** 这是明确、可测试且对 Agent 长网页阅读价值较高的增强，目前仍在待合并状态。

### 3. 工具上下文由 `message_id` 泛化为 `metadata`

- [#1515 Refactor: Replace message_id with generic metadata in tool contexts](https://github.com/HKUDS/nanobot/pull/1515)  
  将平台、路由和扩展上下文以通用字典传递给 `MessageTool`、`CronTool`、`SpawnTool`。  
  **路线图判断：** **中期很可能落地。** 该变更可提升多渠道及工具路由扩展能力，但 PR 自 2026-03-04 起持续存在且标记冲突，可能需要重新拆分、审查和测试。

### 4. WebUI 从轮询切换为 Gateway 失效通知

- [#6401 refactor(webui): replace idle polling with gateway invalidations](https://github.com/HKUDS/nanobot/pull/6401)  
  由 Gateway 在配对请求、频道状态、自动化、用量和远程连接发生变化时通知客户端，减少空闲标签页重复读取。  
  **路线图判断：** **下一版本候选。** 这是面向扩展性和运行效率的 P1 重构，但仍需关注客户端兼容和通知遗漏风险。

### 5. WebUI 文件与媒体预览分离

- [#6425 fix(webui): separate file cards from media previews](https://github.com/HKUDS/nanobot/pull/6425)  
  属于近期 WebUI 体验完善项，预计会随当前 WebUI 修复批次进入后续版本。

---

## 七、用户反馈摘要

### 真实使用场景

1. **API Server、SDK 与单次 CLI 直接调用**  
   用户在 [#6214](https://github.com/HKUDS/nanobot/issues/6214) 和 [#6410](https://github.com/HKUDS/nanobot/issues/6410) 中均复现了直接调用路径与常规消息队列路径行为不一致的问题。

2. **无需 API Key 的默认搜索**  
   [#6285](https://github.com/HKUDS/nanobot/issues/6285) 表明，DuckDuckGo 默认搜索仍是零配置用户的重要入口；连续搜索时的限流、临时失败与真正空结果必须明确区分。

3. **DeepSeek 深度使用**  
   用户同时关注 DeepSeek 官方 Web Search 和 Responses API 推理字段，说明 NanoBot 用户已经开始将 DeepSeek 作为重点供应商使用。

4. **长文件和长上下文处理**  
   [#6404](https://github.com/HKUDS/nanobot/pull/6404) 指向大型 `read_file` 与压缩后的上下文预算问题，直接对应代码库分析、研究和文档处理场景。

### 满意与积极信号

- [#6214](https://github.com/HKUDS/nanobot/issues/6214) 已关闭，表明现有直接入口的并发归档问题至少部分得到处理。
- WebUI 的多项交互修复已关闭，包括话题名称、等待消息恢复、技能引用和目标面板，说明维护者对前端细节有持续投入。
- 今日 PR 数量较高，且多数附带明确的问题说明、测试与回归目标，项目工程规范正在改善。

### 主要不满意点

- 同类空闲压缩竞态对应多个并行 PR，修复方案尚未收敛。
- 默认搜索失败缺少可靠错误分类，可能让 Agent 产生错误答案。
- DeepSeek 新能力更多停留在问题反馈层，官方搜索接入尚无明确实现。
- 长时间直接调用、WebUI 轮询和大型工具结果暴露出长会话稳定性仍需加强。

---

## 八、待处理积压

### 1. 长时间开放的工具上下文重构

- [#1515 Replace message_id with generic metadata in tool contexts](https://github.com/HKUDS/nanobot/pull/1515)  
  自 2026-03-04 创建并持续更新至今，仍标记为 **conflict**。这是最明显的老龄化 PR，可能因代码冲突长期搁置。建议拆分基础字段传递、具体工具适配和测试，降低合并成本。

### 2. 空闲压缩竞态修复方案重复

- [#6405](https://github.com/HKUDS/nanobot/pull/6405)
- [#6421](https://github.com/HKUDS/nanobot/pull/6421)
- [#6424](https://github.com/HKUDS/nanobot/pull/6424)
- 对应 Issue：[#6410](https://github.com/HKUDS/nanobot/issues/6410)

三个 PR 同时处理“长时间直接调用后立即压缩”问题。建议维护者明确主修复分支，或合并测试用例后保留一个完整实现，避免重复审查和后续冲突。

### 3. 今日待合并 PR 共 14 条

其中值得优先审查的高风险修复包括：

- [#6424](https://github.com/HKUDS/nanobot/pull/6424)：锁等待后重新检查空闲资格。  
- [#6405](https://github.com/HKUDS/nanobot/pull/6405)：让空闲扫描避开活动中的直接调用。  
- [#6404](https://github.com/HKUDS/nanobot/pull/6404)：修复压缩后大型工具结果超预算。  
- [#6423](https://github.com/HKUDS/nanobot/pull/6423)：暴露会话 Worker 异常。  
- [#6422](https://github.com/HKUDS/nanobot/pull/6422)：修复 Azure GPT-6 参数兼容。  
- [#6401](https://github.com/HKUDS/nanobot/pull/6401)：WebUI 轮询改为 Gateway 失效通知。  
- [#6317](https://github.com/HKUDS/nanobot/pull/6317)：为 `web_fetch` 增加续读偏移。

---

## 结论

NanoBot 今日呈现出**高开发活跃度、中高缺陷密度、尚未发布版本**的状态。改进重点明确指向长会话稳定性、直接调用并发安全、模型供应商兼容及 WebUI 质量。主要风险不在需求不足，而在于**多个同类修复 PR 并行、待合并队列较长，以及部分老 PR 长期冲突**。若维护者能在近期完成空闲压缩修复收敛、合并大型工具结果与 Worker 可观测性修复，并推进 `web_fetch` 分页和 Gateway 通知重构，项目将具备较明确的下一版本发布条件。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**统计日期：2026-10-24**  
**统计范围：过去 24 小时**  
**数据源：GitHub Issues / Pull Requests**

## 1. 今日速览

- 过去 24 小时共更新 **2 个 Issues**、**4 个 PRs**，整体保持一定的社区处理活跃度，但新增讨论量偏低。
- 当前有 **3 个 PR 待合并、1 个 PR 已关闭**，另有 **1 个 Issue 关闭、1 个 Issue 仍开放**，问题处理以修复既有缺陷为主。
- 今日没有发布新版本；主要改进集中在 Telegram 格式兼容、Cron 状态上报和第三方模型 Provider 接入。
- 部分更新内容带有 **[stale]** 标记，说明这些 Issue/PR 长时间未获得维护者响应，项目存在积压风险。
- 综合判断：**项目处于“低量、持续维护”状态，功能开发仍在推进，但审查与合并节奏偏慢，跨平台稳定性问题仍需关注。**

---

## 3. 项目进展

今日没有 PR 被合并；唯一关闭的 PR 是 [#3371](https://github.com/sipeed/picoclaw/pull/3371)，该 PR 已标记为 stale，未形成可直接进入版本的功能更新。

### 今日仍在推进的重要 PR

1. **Telegram MarkdownV2 转义修复**  
   [#3443 fix(telegram): escape link labels and blockquote text in MarkdownV2](https://github.com/sipeed/picoclaw/pull/3443)  
   - 修复链接标签和引用文本中的保留字符未正确转义的问题。
   - 避免 Telegram 拒绝格式化消息并回退为纯文本。
   - 关联缺陷：[Issue #3426](https://github.com/sipeed/picoclaw/issues/3426)。
   - **状态：** Open，待维护者审查与合并。

2. **Cron 任务执行状态修复**  
   [#3442 fix(cron): propagate job failures to lastStatus instead of always ok](https://github.com/sipeed/picoclaw/pull/3442)  
   - 修复任务执行失败后，`cron/jobs.json` 中 `lastStatus` 仍被写成 `"ok"` 的问题。
   - 涉及命令执行被禁用、命令执行返回错误等失败路径。
   - 关联缺陷：[Issue #3423](https://github.com/sipeed/picoclaw/issues/3423)。
   - **状态：** Open；这是改善可观测性和自动化任务可靠性的直接修复。

3. **新增 Standard Compute Provider**  
   [#3431 feat(provider): add Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)  
   - 新增 OpenAI 兼容的 `standardcompute` Provider。
   - 目标是为多个模型实验室提供统一密钥和统一接入入口。
   - 实现方式参考现有 NEAR AI Cloud Provider 接入模式。
   - **状态：** Open；具备进入后续版本的功能潜力，但仍需验证模型路由、鉴权及兼容性。

### 关闭的 PR

- [#3371 feat(providers): add opencode-go provider with session header support](https://github.com/sipeed/picoclaw/pull/3371)  
  该 PR 原计划为 OpenCode Go 增加独立 Provider、模型端点路由及 `x-opencode-session` 会话头支持，但已关闭且被标记为 stale。该能力短期内不会随常规合并进入版本。

**推进程度评估：**  
今日没有代码正式合入主线，因此对已发布版本的直接改善为 **0**；但 3 个待合并 PR 已覆盖消息格式、Cron 状态准确性和 Provider 扩展。若这些 PR 获得审查，预计能明显提升 Telegram 体验、自动化任务可观测性及模型接入能力。

---

## 4. 社区热点

### 1. Cron 任务失败状态被错误记录

- PR：[#3442](https://github.com/sipeed/picoclaw/pull/3442)
- 对应 Issue：[#3423](https://github.com/sipeed/picoclaw/issues/3423)

**热度依据：** 关联缺陷已被 PR 明确跟踪，修改聚焦核心状态记录路径。  
**核心诉求：** 用户需要准确知道定时任务究竟成功还是失败，而不能统一显示 `ok`。错误状态会导致监控、告警和人工排查失真。

### 2. Telegram MarkdownV2 格式消息被拒绝

- PR：[#3443](https://github.com/sipeed/picoclaw/pull/3443)
- 对应 Issue：[#3426](https://github.com/sipeed/picoclaw/issues/3426)

**热度依据：** 已有对应修复 PR，说明问题已形成明确的开发闭环。  
**核心诉求：** 链接标签中的 `.`、引用文本等保留字符必须正确转义，否则 Telegram 会拒绝富文本消息，并降级为纯文本，丢失预期格式。

### 3. Android 纯 Go 构建无法完成 DNS 解析

- Issue：[#3420](https://github.com/sipeed/picoclaw/issues/3420)

**热度依据：** Issue 有 **2 条评论**，是本批 Issue 中评论最多的一条；已于今日关闭。  
**核心诉求：** Android 官方构建中的 `libpicoclaw.so` 网关需要稳定解析外部 API 地址，不能依赖 Android 上不可用或行为不一致的本地 DNS/系统解析机制。当前未看到关联修复 PR 出现在本次更新列表中。

> 本次更新的 Issues/PR 均未提供点赞数，因此无法以 reactions 衡量相对热度；社区讨论热度主要以评论数和已有修复 PR 作为判断依据。

---

## 5. Bug 与稳定性

### 严重程度：高

#### Android 纯 Go 二进制 DNS 解析失败

- Issue：[#3420](https://github.com/sipeed/picoclaw/issues/3420)
- **现象：** `CGO_ENABLED=0` 构建的 Android 网关访问 API 端点时，DNS 请求被发送到 `127.0.0.1:53`，收到 `connection refused`。
- **影响：** 网关无法获取模型列表或访问外部 API，直接导致核心服务不可用。
- **状态：** 今日已关闭。
- **是否有明确 fix PR：** 本次数据中**未出现**对应修复 PR。
- **风险判断：** 若关闭仅代表转入后续处理或已有其他修复未在本数据窗口出现，则需在后续版本中重点验证 Android 构建的 DNS 行为。

### 严重程度：高

#### Launcher 监听参数组合导致崩溃循环

- Issue：[#3439](https://github.com/sipeed/picoclaw/issues/3439)
- **现象一：** `-public` 与 `-host` 同时设置时发生自撞，可能形成 crash loop。
- **现象二：** `-public` 单独使用时只监听 IPv6，IPv4 客户端无法连接。
- **环境：** PicoClaw Launcher v0.5.0、OpenWrt aarch64、双栈网络。
- **影响：** 服务可能无法启动、反复崩溃，或出现 IPv4 客户端不可达。
- **状态：** 仍开放，且标记为 stale。
- **是否有 fix PR：** 本次更新中**未见**对应修复 PR。
- **风险判断：** 这是生产部署级稳定性问题，应优先补充参数互斥检查、明确的监听地址策略和 IPv4/IPv6 双栈测试。

### 严重程度：中

#### Cron 任务失败仍显示成功

- Issue：[#3423](https://github.com/sipeed/picoclaw/issues/3423)
- 修复 PR：[#3442](https://github.com/sipeed/picoclaw/pull/3442)
- **现象：** 命令执行被禁用或执行失败时，`lastStatus` 仍可能为 `"ok"`。
- **影响：** 状态监控和故障排查得到错误结论。
- **状态：** 已有修复 PR，但尚待合并。
- **回归风险：** 修复时应覆盖所有失败分支，并验证正常执行、命令禁用、执行错误及任务恢复等场景。

### 严重程度：中

#### Telegram MarkdownV2 富文本被拒绝

- Issue：[#3426](https://github.com/sipeed/picoclaw/issues/3426)
- 修复 PR：[#3443](https://github.com/sipeed/picoclaw/pull/3443)
- **现象：** 链接标签和引用文本中的保留字符未完整转义，Telegram 拒绝消息后回退为纯文本。
- **影响：** 消息格式丢失，但不会阻断主要文本交付。
- **状态：** 已有修复 PR，尚未合并。
- **回归风险：** 需要覆盖嵌套格式、链接标签、引用、多行文本及特殊字符组合，避免过度转义。

---

## 6. 功能请求与路线图信号

### Standard Compute Provider 接入

- PR：[#3431](https://github.com/sipeed/picoclaw/pull/3431)
- **需求方向：** 引入新的 OpenAI 兼容 Provider，以统一密钥访问多个模型实验室。
- **路线图判断：** **中高概率进入后续版本。**  
  该 PR 已按既有 Provider 架构实现，若测试和接口验证通过，合并成本相对可控。

### OpenCode Go 独立 Provider 与会话头支持

- PR：[#3371](https://github.com/sipeed/picoclaw/pull/3371)
- **需求方向：** 为 OpenCode Go 提供专用端点、基于模型 ID 的路由，以及 `x-opencode-session` 会话头。
- **路线图判断：** **短期纳入概率较低。**  
  PR 已关闭并标记 stale，需维护者重新确认需求、维护意愿或拆分方案。

### Launcher 双栈与参数安全

- Issue：[#3439](https://github.com/sipeed/picoclaw/issues/3439)
- **需求方向：** 修复 `-public`/`-host` 参数冲突，并建立可预测的 IPv4、IPv6 监听策略。
- **路线图判断：** **有较强稳定性驱动，但目前更像缺陷修复而非新功能。**  
  建议维护者将该问题优先转成 PR，并明确互斥参数、默认地址及双栈行为。

---

## 7. 用户反馈摘要

### Android 网关用户

- **真实痛点：** 在 Android 上使用官方或纯 Go 构建时，DNS 解析失败，导致网关无法访问任何外部 API。
- **使用场景：** Android 设备上常驻运行 PicoClaw，并请求 `/models` 等接口。
- **反馈结论：** 该问题直接破坏核心功能。Issue 虽已关闭，但数据中未见对应修复 PR，用户仍需关注正式版本是否真正解决。
- [Issue #3420](https://github.com/sipeed/picoclaw/issues/3420)

### OpenWrt / 家庭网络部署用户

- **真实痛点：** Launcher 在 `-public` 与 `-host` 并用时可能崩溃循环；单独使用 `-public` 又只监听 IPv6。
- **使用场景：** 通过 procd 将 arm64 静态二进制常驻运行，并供局域网 IPv4 客户端访问。
- **反馈结论：** 用户需要的是明确、稳定且跨协议一致的监听行为；当前版本在参数组合和双栈兼容方面存在明显不足。
- [Issue #3439](https://github.com/sipeed/picoclaw/issues/3439)

### Telegram 自动化消息用户

- **真实痛点：** 含链接或引用的消息被 Telegram 拒绝，最终退化为纯文本。
- **使用场景：** 通过 Telegram Bot 发送带 MarkdownV2 的富文本回复。
- **反馈结论：** 基础消息仍可送达，但结构化格式丢失，影响阅读体验和自动化输出的一致性。
- [PR #3443](https://github.com/sipeed/picoclaw/pull/3443)

### Cron 自动化用户

- **真实痛点：** 任务失败后状态文件仍显示成功，用户无法依赖 `lastStatus` 判断任务健康度。
- **使用场景：** 定时执行命令或自动化工作流，并依据状态进行告警、追踪和故障排查。
- **反馈结论：** 状态失真比单次任务失败更危险，因为它可能让故障长期处于静默状态。
- [PR #3442](https://github.com/sipeed/picoclaw/pull/3442)

---

## 8. 待处理积压

### 长期未响应的重要 Issue

1. **[#3439 Launcher 参数冲突与 IPv4 不可达](https://github.com/sipeed/picoclaw/issues/3439)**  
   - 当前开放，带 stale 标记。
   - 涉及 crash loop 与 IPv4 客户端不可达，属于影响部署可用性的高优先级问题。
   - **建议：** 尽快确认复现环境，拆分参数校验修复和双栈监听修复，并补充 OpenWrt 集成测试。

### 长期未处理的 PR

1. **[#3443 Telegram MarkdownV2 转义修复](https://github.com/sipeed/picoclaw/pull/3443)**  
   - 修复范围明确、关联缺陷清晰，但尚未合并。
   - **建议：** 优先审查转义边界和回归测试，避免 Telegram 消息格式再次退化。

2. **[#3442 Cron 失败状态传播修复](https://github.com/sipeed/picoclaw/pull/3442)**  
   - 直接影响自动化可观测性。
   - **建议：** 检查所有失败出口及状态迁移，确认不会再出现失败被写成 `ok` 的情况。

3. **[#3431 Standard Compute Provider](https://github.com/sipeed/picoclaw/pull/3431)**  
   - 已形成完整 Provider 接入实现。
   - **建议：** 明确第三方 Provider 的维护、测试、文档和凭据安全标准，再决定合并窗口。

4. **[#3371 OpenCode Go Provider](https://github.com/sipeed/picoclaw/pull/3371)**  
   - 已关闭并标记 stale，需求是否仍然有效尚不明确。
   - **建议：** 由维护者给出关闭原因或重新开放条件，避免功能请求无反馈地消失。

---

## 今日健康度结论

**综合健康度：中等偏低，表现为“开发持续、审查偏慢、积压明显”。**

积极因素：

- 今日仍有多个具体 PR 推进，修复均指向真实运行问题。
- Telegram 和 Cron 缺陷均已有对应修复方案。
- Provider 扩展仍保持开发活力。

主要风险：

- 3 个有效 PR 仍待合并，修复尚未进入正式版本。
- 高影响的 Launcher 双栈与参数冲突问题仍开放且 stale。
- Android DNS 缺陷虽已关闭，但本次数据中没有可见的修复 PR。
- 缺少新版本发布，现有用户暂时无法从正式发行渠道获得这些改进。

**维护建议：** 优先处理 [#3439](https://github.com/sipeed/picoclaw/issues/3439)、[#3442](https://github.com/sipeed/picoclaw/pull/3442) 和 [#3443](https://github.com/sipeed/picoclaw/pull/3443)，并在下一版本发布前验证 Android DNS、OpenWrt 双栈监听、Cron 失败状态和 Telegram MarkdownV2 四类回归场景。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-10-24**  
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**  
**统计窗口：过去 24 小时**

## 1. 今日速览

- 过去 24 小时共更新 **4 个 Pull Request**，全部为 Dependabot 自动发起的依赖升级，当前均处于**待合并**状态；没有已合并或已关闭的 PR。
- 今日没有新增或活跃 Issue，也没有报告新的 Bug、功能请求或用户讨论。
- 依赖更新覆盖 **Certifi、Storybook、DOMPurify**，主要集中在端到端测试环境与 Web 前端开发、测试依赖。
- 今日没有发布新版本，也无 Release 说明。
- 整体活跃度偏低但节奏健康：当前工作集中于例行依赖维护，尚未出现明确的版本交付或大规模社区讨论信号。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

因此今日没有可报告的新增功能、破坏性变更、升级说明或迁移事项。

---

## 3. 项目进展

今日没有已合并或已关闭的 PR。4 个待处理 PR 均属于依赖升级：

| PR | 更新内容 | 项目影响 |
|---|---|---|
| [#8157](https://github.com/nearai/ironclaw/pull/8157) | 将测试端到端环境中的 `certifi` 从 **2026.7.22** 升级至 **2026.10.19** | 更新 Python HTTPS CA 根证书集合，有助于提升证书链兼容性和安全性 |
| [#8156](https://github.com/nearai/ironclaw/pull/8156) | 将 `@storybook/addon-vitest` 从 **10.5.7** 升级至 **10.6.2** | 更新前端 Storybook 与 Vitest 集成，改善组件测试开发体验 |
| [#8158](https://github.com/nearai/ironclaw/pull/8158) | 将 `storybook` 从 **10.5.7** 升级至 **10.6.2** | 更新前端组件开发与文档工具链 |
| [#8155](https://github.com/nearai/ironclaw/pull/8155) | 将 `dompurify` 从 **3.4.12** 升级至 **3.4.17** | 更新 Web 前端 HTML 清理库，涉及潜在安全修复及兼容性改进 |

### 进展评估

这些 PR 表明项目正在持续维护 Python 测试环境、JavaScript 前端测试栈及 Web 安全依赖。不过，由于今日没有 PR 合并，**尚不能计入已落地的项目功能或稳定性改进**。从变更方向看，主要价值是：

- 更新 CA 根证书，改善外部 HTTPS 请求兼容性；
- 更新 Storybook 工具链，辅助前端组件开发和测试；
- 更新 DOMPurify，吸收上游修复并降低已知风险。

---

## 4. 社区热点

今日没有活跃 Issue，也没有出现评论数、反应数或互动量明显领先的 PR。4 个 PR 均为 Dependabot 自动提交，当前评论数及点赞数均未提供有效热度数据。

按技术关注度排序：

1. **[#8155 — DOMPurify 3.4.12 → 3.4.17](https://github.com/nearai/ironclaw/pull/8155)**  
   涉及前端输入清理与潜在 XSS 防护，虽然属于补丁版本升级，仍值得优先审查上游修复范围和回归测试结果。

2. **[#8157 — Certifi 2026.7.22 → 2026.10.19](https://github.com/nearai/ironclaw/pull/8157)**  
   影响 E2E 测试使用的 TLS 根证书集合，可能与证书吊销、网络代理、企业 CA 或外部服务兼容性有关。

3. **[#8158 — Storybook 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8158)**  
   属于前端开发基础设施更新，主要诉求是保持 Storybook 工具链稳定并采用上游改进。

4. **[#8156 — @storybook/addon-vitest 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8156)**  
   应与 [#8158](https://github.com/nearai/ironclaw/pull/8158) 配套评估，避免 Storybook 主包与 Vitest 插件版本错配。

这些 PR 反映的共同诉求是：**减少依赖安全风险、保持测试工具链现代，以及降低自动化测试因证书或浏览器环境变化导致的偶发失败**。

---

## 5. Bug 与稳定性

今日没有用户报告新的 Bug、崩溃、回归或性能问题，也没有发现与现有 Bug 明确关联的 fix PR。

### 依赖升级的潜在稳定性关注点

- **DOMPurify 更新**：建议确认升级后 HTML/SVG 清理、模板渲染、用户输入处理及前端快照测试均无回归。  
  PR：[#8155](https://github.com/nearai/ironclaw/pull/8155)
- **Certifi 更新**：建议检查 E2E HTTPS 请求、代理环境、自定义 CA 和外部 API 连通性。  
  PR：[#8157](https://github.com/nearai/ironclaw/pull/8157)
- **Storybook 更新**：建议执行组件测试、交互测试及构建检查，重点验证 Vitest 插件与 Storybook 版本组合。  
  PR：[#8156](https://github.com/nearai/ironclaw/pull/8156)、[#8158](https://github.com/nearai/ironclaw/pull/8158)

**严重程度判断：**

- 已确认的严重 Bug：**0**
- 已确认的中等 Bug：**0**
- 已确认的低级 Bug：**0**
- 潜在风险：集中于依赖升级后的兼容性与回归验证，当前尚无失败证据。

---

## 6. 功能请求与路线图信号

今日没有用户新提出功能请求，因此没有足够信号判断某项需求会进入下一版本。

可以从待处理 PR 中识别出的工程路线信号包括：

1. **持续强化前端安全依赖**  
   DOMPurify 更新表明 Web UI 的输入清理和内容安全仍是重点维护方向。  
   PR：[#8155](https://github.com/nearai/ironclaw/pull/8155)

2. **维护现代前端测试与组件开发体验**  
   Storybook 及其 Vitest 插件同步升级，显示前端测试基础设施仍在持续演进。  
   PR：[#8156](https://github.com/nearai/ironclaw/pull/8156)、[#8158](https://github.com/nearai/ironclaw/pull/8158)

3. **提升端到端测试的网络兼容性**  
   Certifi 根证书更新可能服务于更可靠的外部 HTTPS 通信测试。  
   PR：[#8157](https://github.com/nearai/ironclaw/pull/8157)

以上均属于维护和基础设施信号，不足以确认具体版本功能规划。

---

## 7. 用户反馈摘要

今日没有 Issue 评论或用户反馈，无法提炼真实用户的痛点、使用场景以及满意/不满意情况。

可观察到的反馈信号仅限于依赖升级目的：

- E2E 测试希望获得最新 CA 根证书，减少 HTTPS 兼容问题：  
  [#8157](https://github.com/nearai/ironclaw/pull/8157)
- 前端开发希望保持 Storybook 与 Vitest 测试插件同步更新：  
  [#8156](https://github.com/nearai/ironclaw/pull/8156)、[#8158](https://github.com/nearai/ironclaw/pull/8158)
- Web UI 希望持续吸收 DOMPurify 上游修复，降低内容注入和 XSS 风险：  
  [#8155](https://github.com/nearai/ironclaw/pull/8155)

由于全部 PR 均由 Dependabot 提交，上述内容代表工程维护诉求，而非终端用户的直接反馈。

---

## 8. 待处理积压

今日没有长期未响应的 Issue 或 PR，也没有足够历史数据确认是否存在长期积压。

当前明确待处理项为以下 **4 个未合并 PR**：

- [#8157](https://github.com/nearai/ironclaw/pull/8157)：Certifi 更新，待合并
- [#8156](https://github.com/nearai/ironclaw/pull/8156)：`@storybook/addon-vitest` 更新，待合并
- [#8158](https://github.com/nearai/ironclaw/pull/8158)：Storybook 更新，待合并
- [#8155](https://github.com/nearai/ironclaw/pull/8155)：DOMPurify 更新，待合并

### 维护建议

- 优先审查 DOMPurify 安全补丁，并补充相关输入清理测试：  
  [#8155](https://github.com/nearai/ironclaw/pull/8155)
- 合并 Storybook 主包和 Vitest 插件时保持版本一致，并验证前端 CI：  
  [#8156](https://github.com/nearai/ironclaw/pull/8156)、[#8158](https://github.com/nearai/ironclaw/pull/8158)
- 检查 E2E 网络测试结果及 CI 是否存在证书相关失败：  
  [#8157](https://github.com/nearai/ironclaw/pull/8157)

---

## 今日健康度结论

**项目健康度：稳定，低到中等活跃。**

今日没有用户问题、版本发布或大规模代码变更；工作全部集中在自动依赖维护。整体没有明显质量风险信号，但 4 个 PR 尚未合并，安全相关 DOMPurify 更新及网络证书更新应经过测试后尽快落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-10-24**  
**项目：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时项目共更新 **3 条 Issues、18 条 PR，并发布 1 个新版本**，整体开发与维护节奏活跃。  
PR 中有 **3 条待合并、15 条已合并或关闭**，多数变更围绕 2026.10.19/2026.10.23 发布准备、OpenClaw 稳定性、图像编辑器和 Cowork 使用体验展开。  
Issue 侧有 **2 条关闭、1 条开放**，已解决问题包括退出二次确认和 stdio MCP 环境变量丢失，但仍有一个账号封禁申诉尚待官方处理。  
当前 PR 提交量较高，但同时存在多个标记为 `stale` 的历史 PR，说明项目迭代活跃度较好，积压治理和及时复核仍有改进空间。

**健康度评估：较健康。** 版本发布、缺陷修复和文档完善并行推进；需要关注开放申诉、长期未合并 PR，以及新版本发布后的问题反馈闭环。

---

## 2. 版本发布

### [2026.10.23 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.10.23)

本版本主要更新包括：

- **会话内图片编辑**
  - 支持直接标注、编辑图片，无需离开当前对话。
- **远程工具连接优化**
  - 改善远程工具的连接与配置体验。
- **用量信息更透明**
  - 增强用户对使用量及账户用量的可见性。
- **启动可靠性改进**
  - 修复或优化应用启动流程。
- **浏览器任务能力改进**
  - 提升浏览器自动化任务的稳定性。
- **账号恢复能力增强**
  - 改善账号异常后的恢复路径。

#### 破坏性变更

现有摘要未明确列出破坏性变更。新增的“退出前确认”设置属于可选配置，默认行为预计仍为启用；但官方发布说明中未完整披露配置迁移和默认值细节，升级时建议关注 Release Notes 与相关设置。

#### 迁移注意事项

- 使用 stdio MCP server 的用户，应验证 **`NODE_OPTIONS` 环境变量**是否正确传递，特别是依赖系统根证书或 TLS 拦截环境的部署。
- 需要远程工具、图像编辑或浏览器任务的用户，建议完成一次端到端测试。
- 若曾遇到 OpenClaw 启动后立即重启、提示词缓存命中率下降或图片编辑闪烁，应确认升级后问题已消失。
- 关注 OpenClaw 工具调用记录中的密钥脱敏变化：工具载荷在缓存回放中可能不再被完整遮蔽，日志与对话历史的敏感信息处理需重新评估。

---

## 3. 项目进展

### 3.1 发布分支整合与版本准备

- [#2933 Release/2026.10.19](https://github.com/netease-youdao/LobsterAI/pull/2933)  
  已关闭，涉及 renderer、main、OpenClaw、Cowork、IM 和 artifacts 等多个模块，是本轮版本发布工作的集中集成 PR。

**影响：** 将多模块改动汇入发布分支，支撑 2026.10.23 版本落地。  
**整体贡献：** 完成了本轮功能发布从单项修复到集成交付的关键一步。

---

### 3.2 OpenClaw 与工具调用稳定性

- [#2932 fix(openclaw): stop restarting the gateway right after it starts](https://github.com/netease-youdao/LobsterAI/pull/2932)  
  已关闭。修复 OpenClaw 网关启动后被 `ensureRunning:config-confirm` 立即重启的问题。该问题在 Windows 启动日志中稳定复现，每次额外启动可能增加 **100–280 秒**启动耗时。

  **影响：** 降低启动延迟和重复启动带来的资源浪费。

- [#2929 fix(openclaw): keep tool payloads unmasked in transcripts for cache replay](https://github.com/netease-youdao/LobsterAI/pull/2929)  
  已关闭。调整持久化对话记录中的工具载荷处理，避免因过度脱敏破坏提示词缓存复用。相关反馈显示，重度代码阅读场景此前可能只有约 **15%** 的提示词命中供应商缓存。

  **影响：** 有望改善缓存命中率和额度使用效率；同时需要关注敏感工具载荷在历史记录中的暴露风险。

- [#2727 fix(user_plugins): persist OpenClaw entry hooks across sync](https://github.com/netease-youdao/LobsterAI/pull/2727)  
  仍开放。拟让 `plugins.entries.*.hooks` 在 SQLite 持久化和 `syncToDisk` 过程中保持一致，避免网关重启后入口 hook 配置丢失。

  **影响：** 修复插件配置同步链路中的数据一致性问题。  
  **状态：** 已关联 #2654，但截至日报日期尚未合并，且带 `stale` 标记。

---

### 3.3 桌面端交互与设置

- [#2931 feat(settings): quit confirmation switch, settings typography and OpenClaw config cleanup](https://github.com/netease-youdao/LobsterAI/pull/2931)  
  已关闭。新增“退出前确认”设置，支持通过 `app_quit_confirmation_enabled` 和对应 IPC 切换；关闭后仍会在 Markdown 或 Office 文档存在未保存内容时提示。同时优化设置页排版和 OpenClaw 配置清理。

  **影响：** 直接回应 [#2921](https://github.com/netease-youdao/LobsterAI/issues/2921)，改善常驻场景下频繁退出造成的操作摩擦，同时保留未保存内容保护。

- [#2930 fix(desktop-companion): keep orb clicks from activating the main window on macOS](https://github.com/netease-youdao/LobsterAI/pull/2930)  
  已关闭。修复 macOS 上点击桌面伴侣悬浮球时错误激活主窗口、而不是打开快捷输入面板的问题。

  **影响：** 修正跨窗口层级与交互焦点行为，减少桌面端误操作。

---

### 3.4 Cowork 与消息体验

- [#2937 fix(cowork): keep loading older messages until the viewport fills](https://github.com/netease-youdao/LobsterAI/pull/2937)  
  已关闭。调整历史消息加载逻辑，在视口未填满前持续加载更早消息。

  **影响：** 改善长会话向下浏览时的连续性，减少空白区域或加载中断。

- [#547 test: add coworkFormatTransform unit tests](https://github.com/netease-youdao/LobsterAI/pull/547)  
  已关闭，并标记为 `stale`。为 `coworkFormatTransform` 增加 **35 个单元测试用例**，覆盖 provider API 格式归一化、停止原因映射、SSE 事件格式化及 Anthropic/OpenAI 格式转换。

  **影响：** 提升协议转换层回归测试覆盖，但因长期滞留关闭，更多价值是测试思路和潜在用例可被后续维护者复用。

- [#736 perf(cowork): 为 MarkdownContent 添加 React.memo](https://github.com/netease-youdao/LobsterAI/pull/736)  
  已关闭，并标记为 `stale`。目标是在流式输出时避免历史 Markdown 消息重复解析和完整组件树重渲染。

  **影响：** 指向明确的性能优化方向，但当前未进入主线，需要由维护者重新评估并接入。

- [#610 feat(cowork): refactor prompt input with structured composer](https://github.com/netease-youdao/LobsterAI/pull/610)  
  已关闭，并标记为 `stale`。提出以结构化 composer 替代 `textarea + 字符串拼接`，统一附件、技能、快捷操作和显式资源引用，并降低 `@`、`/` 的发现成本。

  **影响：** 反映 Cowork 输入体验下一阶段可能的发展方向，但需要基于当前代码基线重做或拆分。

- [#725 feat(cowork): 消息书签/收藏系统 + 全局书签视图](https://github.com/netease-youdao/LobsterAI/pull/725)  
  已关闭，并标记为 `stale`。设计包括会话内消息书签、KV 持久化以及按会话分组的全局收藏视图。

  **影响：** 回应长对话中关键决策、代码片段和指令难以回顾的问题，是潜在路线图信号，但尚未进入当前版本。

- [#738 fix: honor configured execution mode](https://github.com/netease-youdao/LobsterAI/pull/738)  
  已关闭，并标记为 `stale`。拟从 `cowork_config` 读取 `executionMode`，并恢复 `local/auto/sandbox` 与 OpenClaw 沙箱的既有映射。

  **影响：** 关系到用户配置是否真正生效，属于需要优先验证的配置正确性问题。

---

### 3.5 图像编辑与订阅界面

- [#2927 fix(image-editor): prevent preview flicker and selection crashes](https://github.com/netease-youdao/LobsterAI/pull/2927)  
  已关闭。修复图像编辑器在特定视口尺寸下预览闪烁，以及松开选框拖动时出现 `Cannot read properties of undefined (reading 'start')` 的崩溃。

  **影响：** 支撑新版本重点功能“会话内图片编辑”的可用性，降低高频交互中的闪屏和崩溃风险。

- [#2928 fix(subscription-trial): hide popup for subscribed and enterprise accounts](https://github.com/netease-youdao/LobsterAI/pull/2928)  
  已关闭。修复已订阅用户和企业账户仍可能看到“一分钱试用”弹窗的问题，并强化弹窗展示前的订阅与企业身份检查。

  **影响：** 降低商业化弹窗对既有付费用户的干扰，提升订阅身份展示一致性。

---

### 3.6 文档与专家资源生态

- [#2934 docs: revamp README and add contributing guides](https://github.com/netease-youdao/LobsterAI/pull/2934)  
  已关闭。重写中英文 README，更新产品概览、功能结构与截图，并新增中英文贡献指南。

  **影响：** 降低新用户理解成本，同时为外部贡献者提供更明确的流程。

- [#2935 docs: host WeChat QR code in repo](https://github.com/netease-youdao/LobsterAI/pull/2935)  
  已关闭。将微信社区二维码托管到仓库内部，避免 GitHub Camo 在境外网络环境下拉取失败。

  **影响：** 提升 README 社区入口的全球可访问性和稳定性。

- [#2938 feat(experts): contribute Lynxce desktop and WorkBuddy experts with avatars](https://github.com/netease-youdao/LobsterAI/pull/2938)  
  仍开放。提交 Lynxce 桌面专家与 WorkBuddy 专家资源，包括 **43 个桌面预设、53 个专家团队（328 个成员/负责人角色）、783 个 WorkBuddy 专家，共 879 个目录条目**。

  **影响：** 显著扩充专家预设生态，但内容体量较大，需维护者重点审核版权、命名一致性、头像资源和目录质量。

- [#2855 chore(deps): bump katex from 0.16.47 to 0.19.0](https://github.com/netease-youdao/LobsterAI/pull/2855)  
  仍开放。更新 KaTeX 数学公式渲染依赖。

  **影响：** 有助于跟进上游修复与兼容性改进，但跨两个主要版本升级，需要先验证公式渲染和构建兼容性。

---

### 3.7 整体推进程度

今日项目在一天内完成一次版本发布、多个主线稳定性修复、界面体验优化、文档重写和大规模专家资源提交，属于**高强度发布迭代日**。  
从功能覆盖面看，项目已从单纯功能开发进一步转向“发布质量、跨平台交互、协议转换、资源缓存、用户付费体验和社区生态”并重。  
不过，历史 PR 集中关闭且部分带 `stale` 标签，说明积压清理速度较快，但仍需避免重要功能方案在未充分评审的情况下被直接淘汰。

---

## 4. 社区热点

> 今日数据中的 Issues/PR 大多数未记录点赞数，因此“反应最多”主要依据评论数、开放状态、问题影响范围和资源规模判断。

### [#2921 退出前二次确认无法关闭](https://github.com/netease-youdao/LobsterAI/issues/2921)

- **评论数：2**
- **状态：已关闭**
- **热点原因：** 这是少数获得明确用户评论的 Issue，且属于高频、常驻使用场景中的直接摩擦点。

用户指出，通过 **Cmd+Q、应用菜单、Dock 或托盘**退出时都会弹出确认框，且没有设置可关闭。对频繁启停客户端的用户，这一行为会显著打断工作流。

该问题随后由 [#2931](https://github.com/netease-youdao/LobsterAI/pull/2931) 落地解决，形成“用户反馈—设置项—PR—Issue 关闭”的完整闭环。

### [#2936 账号被误封申诉](https://github.com/netease-youdao/LobsterAI/issues/2936)

- **评论数：1**
- **状态：开放**
- **热点原因：** 涉及两个用户账号无法登录或使用，且属于账号资产和信任问题。

申诉人表示曾在第三方 DSH 插件中配置 LobsterAI 凭据并调用有道模型服务，担心账号风控将其识别为异常使用。该诉求反映用户对以下问题存在明显不确定性：

1. 凭据被本地第三方工具使用是否违反服务条款；
2. 封禁判定依据是否透明；
3. 是否存在人工复核和申诉时效；
4. 多账号同时受限是否意味着关联风控。

虽然评论量不高，但这是今日唯一开放的 Issue，且直接关系账号可用性，应优先跟进。

### [#2938 Lynxce/WorkBuddy 专家资源提交](https://github.com/netease-youdao/LobsterAI/pull/2938)

- **状态：开放**
- **热点原因：** 单次提交 **879 个目录条目**，在今日 PR 中资源规模最大。

其核心诉求不是缺陷修复，而是扩大专家预设供给并建立品牌归属。对项目而言，这可能显著提升 Cowork/WorkBuddy 的开箱即用能力；对维护者而言，批量内容也带来审核成本和质量一致性压力。

---

## 5. Bug 与稳定性

### 严重：高影响

#### 1. stdio MCP server 丢失 `NODE_OPTIONS`，导致工具调用全部失败

- Issue：[ #2906](https://github.com/netease-youdao/LobsterAI/issues/2906)
- **状态：已关闭**
- **现象：** MCP 服务可以启动，`tools/list` 也可返回 26 个工具，但实际调用统一出现 `fetch failed`。
- **环境因素：** TLS 拦截环境、需要系统根证书及 `NODE_OPTIONS` 注入的部署。
- **影响范围：** 依赖 Node.js 环境变量进行证书或代理配置的 stdio MCP 工具可能整体不可用。
- **修复状态：** Issue 已关闭，但今日提供的数据中**未提供明确对应的已合并 fix PR**，需在提交历史或 Release changelog 中继续核实具体修复来源。

### 中高：OpenClaw 网关启动后立即重启

- PR：[#2932](https://github.com/netease-youdao/LobsterAI/pull/2932)
- **状态：已关闭/已处理**
- **影响：** 每次启动额外增加约 **100–280 秒**，并产生重复启动开销。
- **修复状态：** **已有明确 fix PR**，对应 #2932。

### 中：图片编辑器预览闪烁及选框拖动崩溃

- PR：[#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)
- **状态：已关闭/已处理**
- **现象：**
  - 特定视口尺寸下预览闪烁；
  - 松开拖动时出现 `Cannot read properties of undefined (reading 'start')`。
- **修复状态：** **已有明确 fix PR**，对应 #2927。

### 中：OpenClaw 缓存复用受脱敏逻辑影响

- PR：[#2929](https://github.com/netease-youdao/LobsterAI/pull/2929)
- **状态：已关闭/已处理**
- **现象：** 工具载荷被持久化时过度脱敏，缓存回放无法获得完整上下文；相关重度会话提示词缓存命中率可能降至约 **15%**。
- **修复状态：** **已有明确 fix PR**，对应 #2929。

### 中：macOS 桌面伴侣悬浮球错误激活主窗口

- PR：[#2930](https://github.com/netease-youdao/LobsterAI/pull/2930)
- **状态：已关闭/已处理**
- **影响：** 快捷输入入口行为不符合预期，可能遮挡或打断当前应用操作。
- **修复状态：** **已有明确 fix PR**，对应 #2930。

### 中低：已订阅或企业账户仍显示试用弹窗

- PR：[#2928](https://github.com/netease-youdao/LobsterAI/pull/2928)
- **状态：已关闭/已处理**
- **影响：** 付费用户看到不适用的营销弹窗，降低产品可信度。
- **修复状态：** **已有明确 fix PR**，对应 #2928。

### 中低：退出二次确认造成高频操作摩擦

- Issue：[#2921](https://github.com/netease-youdao/LobsterAI/issues/2921)
- PR：[#2931](https://github.com/netease-youdao/LobsterAI/pull/2931)
- **状态：已解决**
- **修复状态：** **已有明确 fix PR**，新增退出确认开关，同时保留未保存文档保护。

### 低至中：KaTeX 依赖升级兼容性待验证

- PR：[#2855](https://github.com/netease-youdao/LobsterAI/pull/2855)
- **状态：开放**
- **风险：** 从 0.16.47 升级至 0.19.0 跨版本较大，可能影响公式渲染、构建产物或样式集成。
- **修复状态：** 属于依赖更新，尚无已确认的回归问题。

---

## 6. 功能请求与路线图信号

### 6.1 退出前确认可配置：已落地

- 请求：[#2921](https://github.com/netease-youdao/LobsterAI/issues/2921)
- 实现：[#2931](https://github.com/netease-youdao/LobsterAI/pull/2931)

这是今日最明确的功能闭环。新增设置项后，用户可以关闭常规退出确认，但未保存文档仍会触发保护，兼顾效率与数据安全。

**下一版本判断：** 已进入当前版本线，无需等待下一版。

### 6.2 Cowork 结构化输入框：可能进入后续重构

- 方案：[#610](https://github.com/netease-youdao/LobsterAI/pull/610)
- **诉求：**
  - 统一附件、技能、快捷操作和正文资源引用；
  - 降低 `@`、`/` 的使用门槛；
  - 从字符串拼接迁移到结构化 composer。
- **判断：** 与 Cowork 长期可扩展性相关，具备进入下一阶段架构重构的可能，但需基于当前代码重新评审。

### 6.3 消息书签与全局收藏：可能进入产品增强路线

- 方案：[#725](https://github.com/netease-youdao/LobsterAI/pull/725)
- **诉求：**
  - 收藏长对话中的关键决策、代码片段和指令；
  - 会话内快速访问；
  - 跨会话全局检索。
- **判断：** 用户价值明确，适合进入下一版本或中期路线，但当前 PR 已以 stale 状态关闭，需要维护者重新立项或拆分。

### 6.4 Markdown 流式渲染性能优化：建议尽快重启评估

- 方案：[#736](https://github.com/netease-youdao/LobsterAI/pull/736)
- **诉求：** 使用 `React.memo` 避免历史消息随流式输出重复解析。
- **判断：** 技术目标清晰、与大型会话体验直接相关。虽然 PR 已关闭，仍建议维护者提取最小改动重新提交或纳入专项性能任务。

### 6.5 Cowork 历史消息连续加载：已落地

- 方案：[#2937](https://github.com/netease-youdao/LobsterAI/pull/2937)
- **判断：** 已完成，可视为长会话体验优化的近期交付。

### 6.6 专家目录大规模扩充：正在进入评审

- 方案：[#2938](https://github.com/netease-youdao/LobsterAI/pull/2938)
- **规模：** 879 个目录条目。
- **判断：** 若通过质量、版权和命名审核，可能成为下一阶段专家生态的重要增量；建议建立自动化目录校验和贡献规范。

---

## 7. 用户反馈摘要

### 真实痛点

1. **常驻工具的退出流程过于打扰**
   - 场景：用户通过 Cmd+Q、菜单、Dock 或托盘频繁启停客户端。
   - 诉求：允许关闭退出二次确认。
   - 结果：已由 [#2931](https://github.com/netease-youdao/LobsterAI/pull/2931) 实现。

2. **账号封禁和风控边界不透明**
   - 场景：用户在第三方插件中使用有道模型服务，两个账号随后被封禁或无法使用。
   - 诉求：人工复核、明确判定依据、解释凭据使用与封禁之间的关系。
   - 结果：申诉仍开放，见 [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)。

3. **MCP 工具“可见但不可用”**
   - 场景：工具列表可以成功加载，但所有实际调用均因 TLS/证书环境失败。
   - 诉求：让 stdio server 正确继承 `NODE_OPTIONS` 和系统信任链。
   - 结果：Issue 已关闭，见 [#2906](https://github.com/netease-youdao/LobsterAI/issues/2906)。

4. **升级后额度消耗异常**
   - 场景：重度代码阅读或长会话中，提示词缓存命中率明显下降。
   - 诉求：保留工具调用的完整缓存上下文，同时妥善处理敏感信息。
   - 结果：已由 [#2929](https://github.com/netease-youdao/LobsterAI/pull/2929) 调整。

5. **macOS 桌面伴侣交互不符合预期**
   - 场景：主窗口被其他应用覆盖时点击悬浮球，却将主窗口带到前台。
   - 诉求：悬浮球始终打开快捷输入面板，不抢占主窗口。
   - 结果：已由 [#2930](https://github.com/netease-youdao/LobsterAI/pull/2930) 修复。

### 满意点

- 今日数据中未出现明确点赞数或“已解决且非常满意”的用户表达。
- 但新版本围绕图片编辑、远程工具、用量可见性、启动可靠性和账号恢复进行集中更新，说明项目已开始更系统地回应用户高频场景。
- Issue 与 PR 的闭环效率较好，例如退出确认需求在较短时间内完成实现。

### 不满意点

- 退出确认缺少可配置项——已修复。
- 付费和企业账户仍出现试用弹窗——已修复。
- 图片编辑器存在闪烁和崩溃——已修复。
- OpenClaw 重复启动、缓存命中下降和桌面伴侣焦点问题——已有对应修复。
- 账号误封申诉仍缺少可见处理结论——**待解决**。

---

## 8. 待处理积压

### 8.1 仍开放的账号申诉

- [#2936 账号被误封，未恶意使用却被封禁](https://github.com/netease-youdao/LobsterAI/issues/2936)
- 创建时间：2026-10-23
- 当前评论：1
- **风险：** 账号服务可用性、用户信任、风控误判。
- **建议：** 明确受理状态，核验第三方插件凭据使用场景，回复封禁原因、复核结果及申诉渠道。

### 8.2 专家资源大规模 PR 待审核

- [#2938 contribute Lynxce desktop and WorkBuddy experts](https://github.com/netease-youdao/LobsterAI/pull/2938)
- 规模：879 个目录条目。
- **风险：** 批量内容审核周期长，可能阻塞专家生态更新。
- **建议：** 建立按类别分批审核、目录格式校验、重复项检测和品牌授权检查。

### 8.3 KaTeX 依赖升级长期开放

- [#2855 bump katex from 0.16.47 to 0.19.0](https://github.com/netease-youdao/LobsterAI/pull/2855)
- 创建时间：2026-10-13
- **风险：** 依赖升级搁置可能继续落后上游，或在集中升级时引入集中回归。
- **建议：** 尽快完成公式渲染、Markdown 构建和回归测试后合并。

### 8.4 OpenClaw 插件 hook 持久化修复未合并

- [#2727 persist OpenClaw entry hooks across sync](https://github.com/netease-youdao/LobsterAI/pull/2727)
- 创建时间：2026-09-20
- 状态：开放、带 `stale` 标记，关联 [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)。
- **风险：** 网关重启后 hook 配置丢失，影响插件和自动化工作流稳定性。
- **建议：** 这是仍有明确工程价值的功能性修复，应重新确认测试结果、解决冲突并安排合并。

### 8.5 多项历史高价值 PR 以 stale 状态关闭

- [#610 Cowork 结构化输入框](https://github.com/netease-youdao/LobsterAI/pull/610)
- [#725 Cowork 消息书签与全局收藏](https://github.com/netease-youdao/LobsterAI/pull/725)
- [#736 MarkdownContent React.memo 性能优化](https://github.com/netease-youdao/LobsterAI/pull/736)
- [#738 尊重 executionMode 配置](https://github.com/netease-youdao/LobsterAI/pull/738)
- [#547 Cowork 协议转换单元测试](https://github.com/netease-youdao/LobsterAI/pull/547)

这些 PR 最早创建于 2026 年 3 月，覆盖输入架构、收藏系统、流式渲染性能、执行模式正确性和测试覆盖。集中清理有助于降低 PR 队列噪声，但建议维护者对仍有价值的内容留下“需重做、可提取、已替代或暂不计划”的明确结论，方便贡献者继续参与。

---

## 总结

LobsterAI 在 2026-10-24 呈现明显的**发布冲刺与稳定性收敛特征**：新版本已经发布，OpenClaw、图像编辑、桌面交互、订阅弹窗和 Cowork 消息加载均有关键修复落地，文档和专家生态也在同步扩充。

当前最值得维护者关注的三项是：

1. 尽快完成 [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 账号误封申诉；
2. 推动 [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) 插件 hook 持久化修复合入；
3. 对 [#2938](https://github.com/netease-youdao/LobsterAI/pull/2938) 的大规模专家资源进行分批、可验证的审核。

整体判断为：**项目健康度良好、迭代强度高、功能交付能力较强；主要风险集中在开放申诉、历史 PR 积压治理、批量内容审核以及新版本发布后的兼容性验证。**

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**日期：2026-10-24**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**  
**数据源：** [QwenPaw GitHub Repository](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

过去 24 小时项目保持较高开发活跃度，共更新 **13 条 Issues**、**36 条 PRs**，其中 Issues 新开/活跃 6 条、关闭 7 条，PR 待合并 24 条、合并/关闭 12 条。  
当前开发重点集中在 **运行时稳定性、插件与 PawApps 架构、记忆系统升级、渠道可靠性及 Console 体验修复**。多个长期功能 PR 仍处于评审或待合并状态，说明路线图推进较快，但发布整合压力也在上升。  
今日无新版本发布；当前数据未显示已有版本发布安排，合并后的改动预计仍需经过版本打包与发布验证。整体健康度评估为 **中高**：贡献活跃、功能路线明确，但渠道异常、会话取消、文件预览及多平台测试稳定性等问题仍需尽快收敛。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。

### 版本相关动态

- QwenPaw Creator 正在准备 **2.0.1 → 2.0.3** 的插件更新，内容涉及 skills、narration、scratch 和 script import，但对应 PR 尚未合并，因此尚不能视为正式发布：  
  [#8357 — feat(creator): release 2.0.3 with skills, narration, scratch and script import](https://github.com/agentscope-ai/QwenPaw/pull/8357)
- ReMe 依赖升级至 **0.4.2.0** 的 PR 仍待评审，涉及决策压缩、对话图片记忆和实体标签生成：  
  [#8347 — feat(memory): integrate ReMe 0.4.2.0](https://github.com/agentscope-ai/QwenPaw/pull/8347)

在正式 Release 前，建议重点验证插件兼容性、ReMe 数据迁移与回滚路径，以及多渠道长会话和媒体发送场景。

---

## 3. 项目进展

今日共处理 **12 条已合并/关闭 PR**。从已展示内容看，主要进展包括以下方向：

### 3.1 Hub 配置草稿保护

已关闭 PR 修复了模型列表刷新、启动或停止模型时，未保存的超时配置被旧服务端数据覆盖的问题。例如用户将 timeout 从 900 改为 1200 后，不再因切换模型而回退。

- [#8399 — fix(hub): preserve model policy drafts on refresh](https://github.com/agentscope-ai/QwenPaw/pull/8399)

**意义：** 改善 Hub 管理端的配置一致性，降低用户误操作和配置“自行恢复”的困惑。

### 3.2 跨平台测试稳定性

多个测试侧 PR 被关闭，目标是消除 Windows、macOS nightly CI 中由平台环境差异导致的误报，包括：

- `sips` 预检用例改为平台无关，不要求 Windows 具备 macOS 专用工具；
- advisor listing 与 TUI drain 断言调整为跨平台稳定；
- PawApp sidecar probe 改用 raw socket，避免 macOS CI 的生命周期健康检查超时。

相关链接：

- [#8383 — test(security): keep the sips preflight cases platform-neutral](https://github.com/agentscope-ai/QwenPaw/pull/8383)
- [#8381 — test(unit): make advisor listing and tui drain assertions platform-stable](https://github.com/agentscope-ai/QwenPaw/pull/8381)
- [#8382 — test(pawapp): answer the sidecar probe with a raw socket](https://github.com/agentscope-ai/QwenPaw/pull/8382)

**意义：** 这些变更不代表核心功能完成重大升级，但有助于提高 CI 信号可信度，减少“产品正常、测试误报”造成的维护噪音。

### 3.3 今日推进中的关键能力

虽然以下 PR 尚未合并，但已获得更新，反映项目正在推进较完整的架构升级：

1. **PawApps SDK 与控制平面重构**  
   目标是让 Apps 通过统一、受限的 Host contract 暴露持久化任务，并由 Host 统一管理任务身份、重试、权限、安装、问题与审批。  
   [#7874 — feat(pawapp): redesign the SDK and app control plane](https://github.com/agentscope-ai/QwenPaw/pull/7874)

2. **渠道插件化与子进程隔离**  
   除 Console 外的官方渠道计划迁移为插件，通过静态描述发现并以子进程运行，以减少 SDK 导入耦合、隔离渠道故障。  
   [#8187 — feat(channels): extract channels into plugins with subprocess isolation](https://github.com/agentscope-ai/QwenPaw/pull/8187)

3. **记忆系统升级**  
   引入 ReMe 0.4.2.0，并提供默认关闭的相关性压缩、对话图片记忆和实体标签生成能力。  
   [#8347 — feat(memory): integrate ReMe 0.4.2.0](https://github.com/agentscope-ai/QwenPaw/pull/8347)

4. **执行中人工干预**  
   新增 `/steer <guidance>`，允许用户在 Agent 正在执行时注入指导，而不必停止并丢失当前进度。  
   [#8318 — feat(agent): add /steer command for mid-execution guidance](https://github.com/agentscope-ai/QwenPaw/pull/8318)

**整体推进判断：** 今日项目在“扩展性、插件治理、记忆能力和运行时可控性”上继续前进，但多数核心架构改动仍在 Open 状态，尚不能计入已发布能力。

---

## 4. 社区热点

### 4.1 高讨论度 Issue

#### #8071：插件主题扩展点

- **状态：** Open
- **评论数：** 8，为今日展示 Issue 中最高
- **诉求：** Console 已有用户级主题选择，但插件仍只能设置 `colorPrimary`，无法深度接入语义 token、品牌色、交互态或圆角等主题能力。
- **判断：** 这是插件生态视觉一致性的基础能力，后续可能需要引入语义 token override layer，并明确宿主与插件主题的优先级和隔离边界。
- 链接：[Issue #8071 — Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)

#### #8252：Agent 间调用被静默取消

- **状态：** Closed
- **评论数：** 4
- **诉求：** 多 Agent 场景中，`ChatWithAgent` 调用可能出现 `CancelledError`，同秒成对触发时产物归零，而且日志缺少发起方和取消原因。
- **判断：** 反映多 Agent 协作在取消传播、竞态处理和可观测性方面存在真实生产痛点。
- 链接：[Issue #8252 — Agent 间调用会话被静默取消](https://github.com/agentscope-ai/QwenPaw/issues/8252)

#### #8284：长对话滚轮位置跳回

- **状态：** Closed
- **评论数：** 3
- **诉求：** Console 在长对话中滚动时，因 transcript 高度重新估算导致视图向前跳回约 1.1–2.2k px，影响连续阅读和定位。
- 链接：[Issue #8284 — Wheel scrolling in a long conversation gets stuck](https://github.com/agentscope-ai/QwenPaw/issues/8284)

#### #8343：钉钉最终回复丢失

- **状态：** Open
- **评论数：** 2
- **诉求：** 回复耗时超过 `sessionWebhook` TTL 后，最终消息被静默丢弃，且 `on_event_message_completed` 没有 Open API fallback。
- **影响：** 属于外部渠道集成中的高影响可靠性问题，可能造成用户侧“任务已完成但没有收到结果”。
- 链接：[Issue #8343 — DingTalk final reply silently dropped](https://github.com/agentscope-ai/QwenPaw/issues/8343)

### 4.2 值得关注的开放 PR

- [#7211 — prevent injected context from persisting](https://github.com/agentscope-ai/QwenPaw/pull/7211)  
  目标是让请求级注入上下文仅对当前模型调用生效，不进入用户消息或可搜索历史，直接影响隐私边界与运行时上下文管理。

- [#7874 — redesign PawApps SDK and app control plane](https://github.com/agentscope-ai/QwenPaw/pull/7874)  
  社区关注点预计将集中在权限模型、任务生命周期、审批机制和第三方运行时兼容性。

- [#8187 — extract channels into plugins with subprocess isolation](https://github.com/agentscope-ai/QwenPaw/pull/8187)  
  该 PR 影响所有非 Console 官方渠道，评审与发布风险相对较高。

- [#8347 — integrate ReMe 0.4.2.0](https://github.com/agentscope-ai/QwenPaw/pull/8347)  
  涉及依赖升级和记忆策略变化，需要关注数据迁移、索引兼容及压缩后的信息保真度。

- [#8318 — add /steer command](https://github.com/agentscope-ai/QwenPaw/pull/8318)  
  填补了运行中无法纠偏的交互缺口，用户可保留已有进度并调整方向。

---

## 5. Bug 与稳定性

以下按潜在影响范围排序。需要注意：数据中未明确给出每个 Bug 对应的 fix PR，因此仅在有明确关联时标注。

### 严重：Agent 间调用静默取消

- **现象：** 同秒成对的 Agent 调用可能触发 `CancelledError`，产物归零，且缺少发起方和原因。
- **场景：** Orchestrator / Reasoner / Executor / Reviewer / Defender 多 Agent 舰队通过 `ChatWithAgent` 协作。
- **影响：** 可能导致编排链路中断、结果丢失，且故障难以追踪。
- **状态：** Issue 已关闭，但展示数据中未提供对应 fix PR。
- 链接：[Issue #8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)

### 严重：发送视频后会话持续卡死

- **现象：** `send_file_to_user` 发送 `.mp4` 后，后续纯文本请求也持续报 `422 unknown variant video_url`。
- **影响：** 一次媒体发送错误可能污染整个会话状态，造成持续不可用。
- **状态：** Issue 已关闭；未展示明确对应 fix PR。
- 链接：[Issue #8298](https://github.com/agentscope-ai/QwenPaw/issues/8298)

### 高：钉钉最终回复在 webhook 过期后静默丢失

- **现象：** `sessionWebhook` 过期时返回 `errcode=300001`，系统没有 Open API fallback，也未向用户显示错误。
- **影响：** 长耗时任务越常见，消息丢失概率越高。
- **状态：** Open；未发现明确对应 fix PR。
- 链接：[Issue #8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)

### 高：小艺渠道长轮次无状态帧且 WS 静默断开

- **现象：** 执行期间除 30 秒心跳外不输出 working/status frame；WebSocket 断开也没有明确反馈。
- **影响：** 用户可能误以为任务卡死，且无法及时获知渠道连接已中断。
- **状态：** Open；未发现明确对应 fix PR。
- 链接：[Issue #8394](https://github.com/agentscope-ai/QwenPaw/issues/8394)

### 中高：被拒绝的媒体 URL 可使现有会话持续失败

- **现象：** Provider 返回“提供的 URL 无效”后，Agent 推理循环未恢复，后续轮次可能持续使用失败媒体上下文。
- **影响：** 涉及视觉/多模态 Agent 的长会话可用性。
- **修复状态：** 已有明确 fix PR。  
  [#7973 — fix(agents): recover from rejected media URLs](https://github.com/agentscope-ai/QwenPaw/pull/7973)

### 中：删除当前会话时报错

- **相关 Issues：**
  - [Issue #8396 — Improvement of Deleting Current Conversation](https://github.com/agentscope-ai/QwenPaw/issues/8396)
  - [Issue #8368 — 删除当前选中的会话报错 404](https://github.com/agentscope-ai/QwenPaw/issues/8368)
- **现象：** 删除当前会话后出现 `Chat not found` / 404 提示；核心操作可能仍能继续，但界面状态或后续请求异常。
- **状态：** 两条 Issue 均已关闭；未展示对应 fix PR。

### 中：QQ 启用开关被静默重置

- **现象：** QQ channel enabled flag 被重置为 `false`，且没有警告。
- **影响：** 用户可能误认为渠道已启用，但消息实际不会送达。
- **状态：** Open；未发现明确对应 fix PR。
- 链接：[Issue #8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)

### 中：MCP 配置弹窗无法关闭

- **现象：** MCP 客户端卡片选择 HTTP/SSE 传输后弹窗无法关闭；stdio 模式正常。
- **影响：** 阻断非 stdio MCP 客户端的配置流程。
- **状态：** Open；未发现明确对应 fix PR。
- 链接：[Issue #8405](https://github.com/agentscope-ai/QwenPaw/issues/8405)

### 中低：长对话滚轮回跳

- **现象：** transcript 高度重估使滚动位置回跳 1.1–2.2k px。
- **状态：** Issue 已关闭；未展示明确对应 fix PR。
- 链接：[Issue #8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)

### 中低：Hub 本地模型配置显示异常

- **现象：** Hub 模式向成员提供本地模型时出现显示异常，影响配置可读性。
- **状态：** Issue 已关闭；未展示明确对应 fix PR。
- 链接：[Issue #8392](https://github.com/agentscope-ai/QwenPaw/issues/8392)

---

## 6. 功能请求与路线图信号

### 6.1 插件主题语义层

用户希望插件不仅覆盖主色，还可以控制背景、surface、hover、radius 等语义 token。

- 现有 PR：暂无直接对应 PR。
- 路线图可能性：**中高**。Console 主题系统已落地，插件主题接口存在明显扩展需求。
- 建议形成稳定契约：语义 token、优先级、继承关系、运行时热更新和第三方插件兼容策略。
- 链接：[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)

### 6.2 Office 文件预览

Console 文件抽屉当前仅支持图片、PDF、Markdown、HTML 和 CSV，`.docx`、`.xlsx`、`.pptx` 只能下载或查看元数据。

- 现有 PR：未发现直接对应 PR。
- 路线图可能性：**中高**。Agent 产物中 Office 文档较常见，预览能力能直接减少“离开对话去本地打开”的操作成本。
- 链接：[Issue #8404](https://github.com/agentscope-ai/QwenPaw/issues/8404)

### 6.3 执行中 Steering

- 已有明确 PR：  
  [#8318 — feat(agent): add /steer command](https://github.com/agentscope-ai/QwenPaw/pull/8318)
- 路线图可能性：**高**。该能力直接改善长任务可控性，也与当前 Agent 编排趋势一致。

### 6.4 插件安装容错

- 已有明确 PR：  
  [#8345 — fix(plugins): do not abort a plugin install when invalidate_caches fails](https://github.com/agentscope-ai/QwenPaw/pull/8345)
- 路线图可能性：**高**。这是低风险、高收益的插件安装稳定性修复。

### 6.5 Provider 错误分类与 fallback

兼容网关返回 `data_inspection_failed` 或 `inappropriate content` 时，当前错误分类会阻止 fallback。

- 已有明确 PR：  
  [#8124 — fix(providers): route content inspection errors to fallback](https://github.com/agentscope-ai/QwenPaw/pull/8124)
- 路线图可能性：**高**。可提高多模型部署下的可用性与容灾能力。

### 6.6 插件下载错误规范化

- 已有明确 PR：  
  [#8397 — fix(plugins): return 400 for plugin download network errors](https://github.com/agentscope-ai/QwenPaw/pull/8397)
- 路线图可能性：**高**。改善 API 语义和前端错误提示，适合快速纳入维护版本。

### 6.7 渠道插件化

- 已有大型 PR：  
  [#8187 — feat(channels): extract channels into plugins with subprocess isolation](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- 路线图可能性：**高，但发布风险较高**。它会改变官方渠道的发现、启动和故障隔离机制，需配套迁移与回滚说明。

---

## 7. 用户反馈摘要

### 7.1 多 Agent 编排：取消必须可追踪

用户在多 Agent 舰队中依赖 `ChatWithAgent` 互相调用，但同秒调用触发的静默取消会导致“执行看似完成、实际产物为零”。其核心诉求不是单纯修复异常，而是让日志明确记录：

- 谁发起取消；
- 取消原因；
- 是否属于同秒请求冲突；
- 被取消任务和产物如何回收。

来源：[Issue #8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)

### 7.2 外部渠道：结果送达比任务执行更关键

钉钉和小艺渠道暴露出相同的用户预期：任务完成后必须明确送达，并展示运行中状态、失败原因和断线状态。当前表现是“长期空白、最终静默丢失”，会直接破坏用户对自动化的信任。

来源：

- [Issue #8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)
- [Issue #8394](https://github.com/agentscope-ai/QwenPaw/issues/8394)

### 7.3 长会话 Console：需要保持阅读连续性

用户既关注功能覆盖，也关注细节体验。长对话滚动位置跳回会打断阅读和定位；删除当前会话又出现 404，使历史管理流程不够可靠。

来源：

- [Issue #8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)
- [Issue #8396](https://github.com/agentscope-ai/QwenPaw/issues/8396)
- [Issue #8368](https://github.com/agentscope-ai/QwenPaw/issues/8368)

### 7.4 文件处理：Agent 已产出，但用户仍需离开 Console

Office 文件无法预览，说明文件产出链路已结束，浏览链路却没有闭环。用户希望直接查看 Agent 生成的 Word、Excel、PPT，而不是仅下载后用外部软件打开。

来源：[Issue #8404](https://github.com/agentscope-ai/QwenPaw/issues/8404)

### 7.5 Hub 配置：长任务超时与本地模型展示均有摩擦

用户反馈文件处理任务经常超过默认 120 秒，Hub gateway timeout 偏短；另有本地模型配置显示异常。相关 Issue 已关闭，但数据未展示完整修复细节，建议确认超时配置是否已支持持久化以及本地模型状态的显示逻辑是否覆盖成员视角。

来源：

- [Issue #8372](https://github.com/agentscope-ai/QwenPaw/issues/8372)
- [Issue #8392](https://github.com/agentscope-ai/QwenPaw/issues/8392)

---

## 8. 待处理积压

### 8.1 长期开放且讨论最充分的 Issue：#8071

该 Issue 自 2026-10-01 创建，已有 8 条评论，仍保持 Open。它是插件主题体系的关键扩展点，建议明确：

- 是否接受语义 token API；
- 插件覆盖宿主主题的安全边界；
- 是否纳入下一插件 API 版本。

链接：[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)

### 8.2 大型架构 PR 积压

当前有 24 条 PR 待合并，多项核心改造仍处于 Open/Under Review：

- PawApps SDK 与控制平面：  
  [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)
- 渠道插件化和子进程隔离：  
  [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- 插件工具升级级策略钩子：  
  [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880)
- ReMe 0.4.2.0 集成：  
  [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)
- Creator 2.0.3：  
  [#8357](https://github.com/agentscope-ai/QwenPaw/pull/8357)

这些 PR 涉及运行时、插件、记忆和渠道，评审与集成成本较高。建议维护者明确优先级，并为每项大型 PR 给出目标发布窗口、阻塞项和测试负责人。

### 8.3 首次贡献者 PR 的评审关注

有多项首次贡献者 PR 待处理，包括上下文隔离、插件安装容错、安全扫描误报和文档修复：

- [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)
- [#8345](https://github.com/agentscope-ai/QwenPaw/pull/8345)
- [#8400](https://github.com/agentscope-ai/QwenPaw/pull/8400)

这些改动多数目标清晰、范围较小，建议优先审阅和合并，以降低首次贡献者的参与摩擦。

### 8.4 缺少明确修复关联的 Open Bug

以下问题仍开放，且展示数据中未发现直接对应的 fix PR：

- [Issue #8343 — 钉钉 webhook 过期导致最终回复丢失](https://github.com/agentscope-ai/QwenPaw/issues/8343)
- [Issue #8394 — 小艺渠道无状态帧且 WS 静默断开](https://github.com/agentscope-ai/QwenPaw/issues/8394)
- [Issue #8406 — QQ 启用开关静默重置](https://github.com/agentscope-ai/QwenPaw/issues/8406)
- [Issue #8405 — MCP HTTP/SSE 配置弹窗无法关闭](https://github.com/agentscope-ai/QwenPaw/issues/8405)
- [Issue #8404 — Office 文件预览缺失](https://github.com/agentscope-ai/QwenPaw/issues/8404)

其中前四项直接影响消息送达、渠道可用性或配置流程，建议优先建立修复 PR 和回归测试。

---

## 今日结论

QwenPaw 今日呈现出 **“高贡献活跃度、架构升级集中、稳定性债务仍待收敛”** 的特征。PawApps、渠道插件化、ReMe 集成和 `/steer` 等方向表明项目正在从单体能力建设转向更可扩展、更可控的 Agent 平台。与此同时，钉钉/小艺等渠道的静默失败、Agent 调用取消、媒体污染会话以及 Console 会话管理问题，已直接影响真实用户使用。

建议下一阶段优先顺序为：

1. **P0：** 修复渠道消息静默丢失、Agent 调用取消及媒体导致的会话污染；
2. **P1：** 收敛大型架构 PR，明确版本归属、迁移方案与回滚策略；
3. **P1：** 推进 Office 预览、插件语义主题和 MCP 弹窗等高频体验问题；
4. **P2：** 持续提升跨平台 CI 稳定性，为下一次版本发布建立可信的质量门禁。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-24**  
**数据范围：GitHub 过去 24 小时；Issues 50 条，PR 50 条，新版本 1 个**  
**热度：Issues 48 条仍开放、2 条关闭；PR 45 条待合并、5 条合并或关闭**

---

## 1. 今日速览

Hermes Agent 过去 24 小时保持较高开发活跃度，共处理 **50 条 Issue** 和 **50 条 PR**，并发布稳定补丁版 **v0.22.5**。  
今日讨论重点明显集中在 **Gateway 会话路由、Desktop/API 跨端续接、插件依赖迁移、Shell Hook 与终端工具稳定性** 等生产环境问题上。  
PR 侧约有 **90% 仍待合并**，其中不少直接针对已确认回归或高影响故障，说明修复储备充足，但发布、审查和合并节奏需要继续关注。  
整体项目健康度可评估为 **“活跃且修复供给较强，但 v0.22.5 后的会话兼容性风险偏高”**：版本发布顺畅，然而多个 P2 级问题与 Gateway、Desktop、Plugin Manager 升级路径相关。

---

## 2. 版本发布

### [v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)

- **发布日期：** 2026-10-22
- **版本类型：** Patch release
- **发布范围：**
  - GitHub Release 中的 CLI 与安装器
  - Microsoft Store 应用
  - Docker 镜像
  - Hermes Cloud
- **主要内容：**
  - 汇总自 **v0.22.4** 以来合并的约 **81 个 PR**
  - 完整、经过整理的发布说明计划在 **v0.23.0** 中提供

#### 破坏性变更

官方未在本次 Release Note 中明确声明破坏性变更。不过，从今日反馈看，v0.22.4/v0.22.5 附近仍存在多项可能影响现有部署的行为变化或回归：

- Desktop 会话出现无法归档、删除或恢复的问题：
  [#143839](https://github.com/NousResearch/hermes-agent/issues/143839)
- Desktop 长历史会话持续停留在 “Loading session”：
  [#143829](https://github.com/NousResearch/hermes-agent/issues/143829)
- API Server 续接 CLI/Desktop 会话出现 `permission_denied`：
  [#143686](https://github.com/NousResearch/hermes-agent/issues/143686)
  [#143849](https://github.com/NousResearch/hermes-agent/pull/143849)
- `hermes chat --source desktop` 自 v0.22.4 起失败：
  [#142991](https://github.com/NousResearch/hermes-agent/issues/142991)
- 插件依赖工作区在 `uv 0.13.5` 后无法解析：
  [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)

#### 迁移注意事项

1. **Gateway/Desktop 用户升级前应备份 `state.db` 和会话配置**，尤其是存在旧会话、Claude Code 导入会话或多 Profile 配置的部署。
2. **依赖插件的安装应先验证 `hermes update` 结果**，重点检查插件是否被意外驱逐、memory provider 是否被清空：
   [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)
3. **不建议立即将生产环境全部升级至 v0.22.5**，建议先观察 Gateway admission、Desktop 会话恢复和插件解析相关修复合入情况。
4. **关注 v0.23.0 的整理版 Release Notes**，以确认 v0.22.4 至 v0.22.5 汇总的 81 个 PR 中是否包含行为变化说明。

---

## 3. 项目进展

今日数据中展示的 PR 以“评论最多”为排序依据，且多数 PR 评论数为空或 `undefined`，因此无法将“今日合并/关闭”数量与摘要中的 **5 个已合并/关闭**逐项完全对应。可确认的重要进展包括：

### Gateway 与消息可靠性

- **自动化唤醒按路由身份准入**，避免因 Discord 线程名称、用户名等展示字段变化产生 `admission_conflict`：
  [PR #143590](https://github.com/NousResearch/hermes-agent/pull/143590)  
  关联问题：[Gateway 路由准入与后台唤醒](https://github.com/NousResearch/hermes-agent/issues/143590)

- **Slack/Discord 空闲或中继重连后保留最终回复**，并通过投递账本确认响应已发送、结算：
  [PR #143847](https://github.com/NousResearch/hermes-agent/pull/143847)  
  这直接改善了消息平台在断线恢复场景下可能丢最终回复的问题。

### Desktop 与平台适配

- **Linux Desktop 在不支持透明效果时保持窗口完全不透明**：
  [PR #143857](https://github.com/NousResearch/hermes-agent/pull/143857)

- **Slack 原生 Stop 按钮接入执行取消机制**：
  [PR #143850](https://github.com/NousResearch/hermes-agent/pull/143850)  
  关联 Issue：[Slack Stop 按钮无效](https://github.com/NousResearch/hermes-agent/issues/90978)  
  另有旧版 PR 关闭：[PR #91725](https://github.com/NousResearch/hermes-agent/pull/91725)

### 模型与 Agent Runtime

- **Codex app-server 子进程在空闲期退出后可自动重启并恢复线程**：
  [PR #143853](https://github.com/NousResearch/hermes-agent/pull/143853)

- **Copilot Responses-only 模型改由实时目录的 `supported_endpoints` 决定 API 模式**：
  [PR #143854](https://github.com/NousResearch/hermes-agent/pull/143854)  
  解决仅依赖模型名正则、错误路由到 `chat_completions` 的问题。

### 插件、依赖与安全

- **避免导入 `model_tools` 时创建 `state.db` 或触发 Schema Migration**：
  [PR #123348](https://github.com/NousResearch/hermes-agent/pull/123348)

- **旧虚拟环境迁移时保留 MCP、Home Assistant、SMS、uvloop extras**：
  [PR #123773](https://github.com/NousResearch/hermes-agent/pull/123773)

- **Shell Hook 抑制状态改用注册令牌，而不是 Python 内存地址 `id(cb)`**：
  [PR #141239](https://github.com/NousResearch/hermes-agent/pull/141239)  
  这有助于避免对象回收后地址复用，导致新 Hook 错误继承旧 Hook 的退避窗口。

- **补充 transform_tool_result 的回复替换与 matcher 能力**：
  [PR #129284](https://github.com/NousResearch/hermes-agent/pull/129284)

- **升级 npm 安全依赖并调整最低 Node 版本**：
  [PR #143377](https://github.com/NousResearch/hermes-agent/pull/143377)

### 插件目录生态

- YouTube Dock 提议升级至 `v1.1.0-beta.1`：
  [PR #143859](https://github.com/NousResearch/hermes-agent/pull/143859)
- `hermes-guide` 重新固定到 `v0.8.10`：
  [PR #143860](https://github.com/NousResearch/hermes-agent/pull/143860)
- 新增 `codex-theme` 插件：
  [PR #143371](https://github.com/NousResearch/hermes-agent/pull/143371)
- 新增 macOS Mail、Notes、Numbers、Photos MCP：
  [PR #51466](https://github.com/NousResearch/hermes-agent/pull/51466)
- ChorePilot 插件目录 PR 已关闭：
  [PR #143441](https://github.com/NousResearch/hermes-agent/pull/143441)

**整体推进判断：** 今日修复方向与用户反馈高度一致，尤其是 Gateway 消息投递、Desktop 适配、插件依赖和 Hook 生命周期。但多数 PR 尚未合并，短期内仍需以“修复已提出、等待审查落地”评估，而不能视为问题已经解决。

---

## 4. 社区热点

### 4.1 终端工具提示引用了不存在的工具名

- [#124583](https://github.com/NousResearch/hermes-agent/issues/124583)
- **评论：20**
- 终端后台任务提示要求调用 `process(action='poll')` / `process(action='wait')`，实际工具是 `process_manage`。
- **核心诉求：** 修复错误提示，避免用户照提示操作后得到 tool-not-found。

这是今日最活跃 Issue，属于低门槛、高确定性的文案缺陷。其长期存在也说明终端工具的提示、注册名称和文档之间缺少自动一致性检查。

### 4.2 Doc-chain 持久记忆、治理与压缩 RFC

- [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- **评论：12**
- 提出让长期记录在 Session 压缩后仍保留来源信息，并允许 Agent 主动重读，而不是要求用户重复背景。
- **核心诉求：** 建立可追溯、可治理、可压缩的长期记忆基础设施。

这是今日最具路线图意义的需求。其难点不只在存储，而在 provenance、读写权限、压缩策略和过期治理，预计需要拆成多个阶段性 RFC 或 PR。

### 4.3 Kanban `active_pr` 防护缺少人工解除路径

- [#29458](https://github.com/NousResearch/hermes-agent/issues/29458)
- **评论：11**
- Worker 提交 PR 后，即使 PR 被关闭或任务被判定无关，Dispatcher 仍可能被 `active_pr` 防护卡住。
- **核心诉求：** 防护机制必须感知 PR 最终状态，并提供显式解除路径。

该问题直接影响自动化任务吞吐量，属于“系统看似安全、实际造成任务僵死”的典型设计缺陷。

### 4.4 `notify=true` 被错误拒绝

- [#123345](https://github.com/NousResearch/hermes-agent/issues/123345)
- **评论：10**
- 调用方传入合法布尔值 `true`，却被提示 “notify must be true/false”。
- **核心诉求：** 参数验证器必须正确接受布尔类型，尤其不能在解析后保留字符串表示再进行严格类型校验。

### 4.5 Profile 跟随 Session 切换模型时崩溃

- [#142017](https://github.com/NousResearch/hermes-agent/issues/142017)
- **评论：9**
- 在带 `config_secret_ref` 的 Profile Session 中执行 `/model`，触发 `AttributeError: 'tuple' object has no attribute 'get'`。
- **核心诉求：** 修复 Secret/Policy 配置结构在模型切换链路中的类型不一致。

### 4.6 CLI 退出后继续后台运行

- [#11347](https://github.com/NousResearch/hermes-agent/issues/11347)
- **评论：8，点赞：8**
- 用户希望从 CLI/TUI 脱离后，Agent 仍可在后台继续处理任务。
- **核心诉求：** 引入 `/detach` 或等价的会话脱离能力。

该需求获得今日可见 Issues 中最高点赞数，说明“CLI 交互与后台执行并存”是较明确的产品方向。

### 4.7 Shell Hook 超时后阻塞所有工具

- [#132096](https://github.com/NousResearch/hermes-agent/issues/132096)
- **评论：6**
- 配置 `fail_closed: false` 且带 matcher 的 Hook，在一次超时后仍可能阻塞所有类型工具长达 60 秒。
- **核心诉求：** Hook 的失败策略和 matcher 必须真正生效，插件调度器不能再次以 fail-closed 包装。

相关修复基础已包含在：

- [PR #141239](https://github.com/NousResearch/hermes-agent/pull/141239)
- [PR #129284](https://github.com/NousResearch/hermes-agent/pull/129284)

---

## 5. Bug 与稳定性

### P1 / 高风险安全与数据完整性

#### 1. PM 锁文件校验不足，可形成任意目录删除链

- [#138359](https://github.com/NousResearch/hermes-agent/issues/138359)
- 类型：安全、P2
- 状态：**开放；摘要中未显示对应 fix PR**
- 影响：
  - `lock.json` 中 `sha256` 未做形状校验，可能进入路径拼接并触发任意 `rmtree`
  - `facts.json` 存在环境变量注入风险
  - Downloader 的 loopback 防护可被绕过

这是今日最需要优先处置的安全问题。虽然标签为 P2，但摘要称已验证路径穿越和任意目录删除，实际风险可按高优先级处理。建议对所有锁文件字段实行严格 schema、白名单路径解析和删除根目录约束。

### P2 / 高影响稳定性问题

#### 2. Gateway 缺少一个命令处理器即可导致所有消息轮次失败

- [#143844](https://github.com/NousResearch/hermes-agent/issues/143844)
- 影响：所有消息平台出现 “admitted turn failed”。
- Fix PR：**摘要中未见直接对应 PR**
- 建议：将命令表完整性改为启动时强校验，并加入全平台回归测试。

#### 3. 90 天路由记录清理后，旧 Session 永久无法恢复

- [#143848](https://github.com/NousResearch/hermes-agent/issues/143848)
- 影响：触发 `admission_conflict`，无自愈、无清晰日志。
- Fix PR：**摘要中未见直接对应 PR**
- 相关 PR：[PR #143590](https://github.com/NousResearch/hermes-agent/pull/143590)可能覆盖部分准入逻辑，但不能确认完整解决清理后自愈问题。

#### 4. Desktop v0.22.5 无法管理或恢复自身会话

- [#143839](https://github.com/NousResearch/hermes-agent/issues/143839)
- 现象：
  - 归档/删除报 `permission_denied`
  - 恢复返回 `not_found`
- Fix PR：
  - [PR #143849](https://github.com/NousResearch/hermes-agent/pull/143849)涉及恢复跨来源 Session 的 opt-in 准入，预计部分相关
  - 摘要中未见覆盖全部 Desktop 行为的单一修复 PR

#### 5. Desktop 长历史会话加载永久卡住

- [#143829](https://github.com/NousResearch/hermes-agent/issues/143829)
- 现象：v0.22.5 持续 “Loading session”，回退 v0.22.2 恢复。
- Fix PR：**摘要中未见直接对应 PR**

#### 6. API Server 无法续接 CLI 创建的 Session

- [#143686](https://github.com/NousResearch/hermes-agent/issues/143686)
- 现象：`POST /v1/chat/completions` 携带 CLI Session ID 即报 `permission_denied`。
- Fix PR：[PR #143849](https://github.com/NousResearch/hermes-agent/pull/143849)明确提出为 `POST /v1/runs` 恢复跨来源 Session 的 opt-in 支持，和本问题高度相关。

#### 7. Desktop 无法恢复 Claude Code 导入会话

- [#142091](https://github.com/NousResearch/hermes-agent/issues/142091)
- 现象：Desktop 列表可见，但恢复返回 `not_found`。
- Fix PR：**摘要中未见直接对应 PR**

#### 8. `hermes chat --source desktop` 自 v0.22.4 回归

- [#142991](https://github.com/NousResearch/hermes-agent/issues/142991)
- 现象：模型连接前即报 `invalid_params`。
- Fix PR：**摘要中未见直接对应 PR**

#### 9. Plugin Manager 无法接纳带 Python 依赖的插件

- [#143305](https://github.com/NousResearch/hermes-agent/issues/143305)
- 原因：Core `uv.lock` 无法为 `sys_platform == 'android'` split 重新解析。
- 相关 PR：
  - [PR #123773](https://github.com/NousResearch/hermes-agent/pull/123773)改善旧环境迁移，但不直接等同于跨平台 resolver 修复
  - [PR #143860](https://github.com/NousResearch/hermes-agent/pull/143860)仅重新固定插件目录版本
- 状态：**未确认已修复**

#### 10. `uv 0.13.5` 导致插件被驱逐、memory provider 被清空

- [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)
- 现象：`hermes update` 退出码为 0，但工作区解析失败，插件被移除且 memory provider 清空。
- 风险：更新表面成功，实际破坏功能配置。
- Fix PR：**摘要中未见明确修复 PR**

#### 11. 后台 Review 可归档活跃 Skill 且不吸收内容

- [#143817](https://github.com/NousResearch/hermes-agent/issues/143817)
- 原因：保护逻辑只检查名称存在，未检查目标是否为活跃版本或是否完成内容吸收。
- Fix PR：**摘要中未见对应 PR**

#### 12. `skill_manage` 批处理异常时跳过回滚

- [#97691](https://github.com/NousResearch/hermes-agent/issues/97691)
- 原因：返回错误结果的 Operation 会回滚，但直接抛出的异常会中断并留下半应用状态。
- Fix PR：**摘要中未见对应 PR**

#### 13. Shell Hook 一次超时可阻塞所有工具

- [#132096](https://github.com/NousResearch/hermes-agent/issues/132096)
- 相关 Fix：
  - [PR #141239](https://github.com/NousResearch/hermes-agent/pull/141239)
  - [PR #129284](https://github.com/NousResearch/hermes-agent/pull/129284)
- 判断：**已有针对性修复 PR，尚待确认是否完整覆盖超时退避与 matcher 传播。**

#### 14. Kanban Worker 因预加载 Skill 解析失败而整体崩溃

- [#54088](https://github.com/NousResearch/hermes-agent/issues/54088)
- 影响：整个 Swarm Stage，包括 Synthesizer，可能被单个可选 Skill 阻断。
- Fix PR：**摘要中未见对应 PR**

### P3 / 中等影响或兼容性问题

- 更新检查响应超过 2 MB 时只显示 “update available”，丢失提交数和更新命令：
  [#127940](https://github.com/NousResearch/hermes-agent/issues/127940)
- `save_config` 与 `save_config_value` 存在并发覆盖竞态：
  [#96571](https://github.com/NousResearch/hermes-agent/issues/96571)
- Telegram 主 Gateway Session 被 `_delegate_from` 污染，列表不可见但仍继续路由：
  [#109073](https://github.com/NousResearch/hermes-agent/issues/109073)
- 远程 Desktop 无法下载 Docker Sandbox 文件：
  [#137381](https://github.com/NousResearch/hermes-agent/issues/137381)
- Dashboard 删除已结束 Cron Session 返回 404，但 CLI 可删除：
  [#143845](https://github.com/NousResearch/hermes-agent/issues/143845)
- 大量 Session 下，列表和计数请求反复扫描 lineage receipt，后端 CPU 接近饱和：
  [#143833](https://github.com/NousResearch/hermes-agent/issues/143833)
- 工具型 `pyproject.toml` 缺少 `[project]` 时，`hermes update` 中止：
  [#122148](https://github.com/NousResearch/hermes-agent/issues/122148)
- 终端后台提示使用错误工具名：
  [#124583](https://github.com/NousResearch/hermes-agent/issues/124583)
- `notify=true` 类型验证错误：
  [#123345](https://github.com/NousResearch/hermes-agent/issues/123345)
- 活跃 PR 防护忽略已关闭 PR：
  [#29458](https://github.com/NousResearch/hermes-agent/issues/29458)

### 已关闭安全问题

- Pillow 12.3.0 固定版本涉及 OpenJPEG 堆溢出漏洞：
  [#142324](https://github.com/NousResearch/hermes-agent/issues/142324)
- 状态：**已关闭**
- 风险说明：漏洞仅在 Pillow 13.0.0 修复，而 `browser-harness==0.1.13` 仍要求 `pillow==12.3.0`，可能形成依赖约束冲突。
- 当前摘要未显示对应升级 PR，需确认关闭原因是否通过依赖升级、替换浏览器组件或风险接受处理。

---

## 6. 功能请求与路线图信号

### 6.1 CLI `/detach`：退出交互但保留后台任务

- [#11347](https://github.com/NousResearch/hermes-agent/issues/11347)
- 今日评论 8、点赞 8，是可见功能请求中最明确的信号。
- **可能进入下一版本的依据：**
  - 用户场景清晰；
  - 与现有 `/background`、Gateway 和持久 Session 机制可衔接；
  - 需求关注度较高。
- **落地前提：**
  - 明确 detach 后的生命周期；
  - 定义 CLI 进程退出后的结果通知方式；
  - 避免与 Session 路由、Profile 和恢复机制冲突。

### 6.2 Doc-chain 长期记忆网络

- [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
- 目标是让记忆在压缩后保持可追溯，并支持 Agent 自主重读。
- **路线图价值：高**
- **短期落地可能性：中低**
  - 更像架构 RFC，需要先定义治理、来源链、压缩与权限模型；
  - 建议拆分为存储格式、读取 API、压缩集成、治理策略四个阶段。

### 6.3 API 跨来源继续 Desktop/CLI Session

- [#143849](https://github.com/NousResearch/hermes-agent/pull/143849)
- 已以“opt-in please”的形式提出。
- **进入下一版本可能性：中高**
  - 已有明确 PR；
  - 关联多个真实回归；
  - 可作为 v0.22.5 后续补丁或 v0.23.0 的稳定性修复。

### 6.4 Slack 原生 Stop 控制

- [#90978](https://github.com/NousResearch/hermes-agent/issues/90978)
- Fix：[PR #143850](https://github.com/NousResearch/hermes-agent/pull/143850)
- **进入下一版本可能性：高**
  - 已有实现；
  - 行为边界清晰；
  - 直接改善平台原生交互完整性。

### 6.5 macOS 原生应用 MCP 目录

- [PR #51466](https://github.com/NousResearch/hermes-agent/pull/51466)
- 覆盖 Mail、Notes、Numbers、Photos。
- **进入目录的可能性：中**
  - 功能与个人 AI 助手定位高度相关；
  - 但需补充权限声明、隐私边界、安装和兼容性验证。

### 6.6 插件目录继续扩容

- [YouTube Dock PR](https://github.com/NousResearch/hermes-agent/pull/143859)
- [hermes-guide 重固定 PR](https://github.com/NousResearch/hermes-agent/pull/143860)
- [codex-theme PR](https://github.com/NousResearch/hermes-agent/pull/143371)
- [ChorePilot PR](https://github.com/NousResearch/hermes-agent/pull/143441)

目录生态保持活跃，但 beta 插件应严格区分“预发布可用”与“稳定自动安装”，避免用户将 beta 功能误认为已获完整支持。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **长期运行的个人 Agent**
   - 用户将 Hermes 用于 Telegram、Slack、Discord、Desktop 和 API 混合接入。
   - 重点不是单次问答，而是跨天 Session 恢复、后台唤醒、消息可靠投递和自动化任务持续执行。
   - 典型反馈：
     - Gateway 重连后最终回复丢失：
       [PR #143847](https://github.com/NousResearch/hermes-agent/pull/143847)
     - 后台结果因路由展示字段变化被拒绝：
       [PR #143590](https://github.com/NousResearch/hermes-agent/pull/143590)

2. **插件和 MCP 驱动的扩展工作流**
   - 用户大量依赖 Home Assistant、YouTube、Guide、Apple 原生应用等插件。
   - 升级、插件依赖解析、虚拟环境迁移是高频痛点：
     - [#143305](https://github.com/NousResearch/hermes-agent/issues/143305)
     - [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)
     - [PR #123773](https://github.com/NousResearch/hermes-agent/pull/123773)
   - 用户希望命令是“一条命令完成安装和迁移”，而不是手工处理 extras 和 lock。

3. **自动化 Kanban 与多 Agent 协作**
   - Worker 提交 PR 后，任务应自动根据 PR 状态推进，而不是等待人工解除 guard：
     [#29458](https://github.com/NousResearch/hermes-agent/issues/29458)
   - 可选预加载 Skill 不应导致整个 Swarm Stage 退出：
     [#54088](https://github.com/NousResearch/hermes-agent/issues/54088)

4. **长期记忆与上下文压缩**
   - 用户希望 Session 压缩后，Agent 仍能追溯并重读长期记录：
     [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)
   - 这反映出用户已将 Hermes 视为持续运行的个人 Agent，而非一次性聊天客户端。

### 满意点

- **功能覆盖面广：** CLI、TUI、Desktop、Gateway、多消息平台、插件、MCP、Skills 和自动化均在快速扩展。
- **社区贡献积极：** 今日 PR 中包含上游移植、跨平台适配、插件目录提交和依赖安全修复。
- **v0.22.5 提供了稳定发布物：** CLI、安装器、Microsoft Store、Docker 和 Hermes Cloud 均获得统一版本。
- **部分跨项目修复质量较高：**
  - Codex 进程恢复：
    [PR #143853](https://github.com/NousResearch/hermes-agent/pull/143853)
  - Copilot endpoint 路由：
    [PR #143854](https://github.com/NousResearch/hermes-agent/pull/143854)
  - Slack Stop：
    [PR #143850](https://github.com/NousResearch/hermes-agent/pull/143850)

### 不满点

- **升级后出现跨端 Session 回归**，影响最直接：
  [#143839](https://github.com/NousResearch/hermes-agent/issues/143839)、
  [#143829](https://github.com/NousResearch/hermes-agent/issues/143829)、
  [#142991](https://github.com/NousResearch/hermes-agent/issues/142991)
- **错误提示与真实接口不一致**，降低用户对工具链的信任：
  [#124583](https://github.com/NousResearch/hermes-agent/issues/124583)
- **配置保存存在竞态**，说明配置并发模型尚未完全收敛：
  [#96571](https://github.com/NousResearch/hermes-agent/issues/96571)
- **插件更新出现“退出码成功但实际功能被移除”**，是严重的可观测性和事务一致性问题：
  [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)
- **部分长期 Issue 仍缺乏闭环**，如 Kanban guard、批量 Skill 回滚、Session 列表性能。

---

## 8. 待处理积压

### 8.1 创建时间较早、今日仍有讨论的重要 Issue

1. **Kanban `active_pr` respawn guard**
   - [#29458](https://github.com/NousResearch/hermes-agent/issues/29458)
   - 创建于 2026-05-20，评论 11。
   - 建议：将 PR closed/merged 状态同步和人工 clear 操作列为近期修复。

2. **`skill_manage` 批处理异常不回滚**
   - [#97691](https://github.com/NousResearch/hermes-agent/issues/97691)
   - 创建于 2026-08-29，评论 3。
   - 风险：产生半更新 Skill 集合，破坏幂等性。

3. **`save_config` 并发覆盖**
   - [#96571](https://github.com/NousResearch/hermes-agent/issues/96571)
   - 创建于 2026-08-27，评论 3。
   - 建议：统一配置写入锁或引入 compare-and-swap 语义。

4. **Telegram 主 Gateway Session 被 Delegate Marker 污染**
   - [#109073](https://github.com/NousResearch/hermes-agent/issues/109073)
   - 创建于 2026-09-12，评论 3。
   - 建议：增加 Session 状态不变量检查和自动修复迁移。

5. **远程 Desktop 无法下载 Docker 文件**
   - [#137381](https://github.com/NousResearch/hermes-agent/issues/137381)
   - 创建于 2026-10-12，评论 3。
   - 跨 Gateway、Desktop、Docker 三层，建议明确路径映射协议与安全边界。

6. **Slack Stop 按钮无效**
   - [#90978](https://github.com/NousResearch/hermes-agent/issues/90978)
   - 创建于 2026-08-20，评论 2。
   - 已有替代实现：
     [PR #143850](https://github.com/NousResearch/hermes-agent/pull/143850)
   - 建议优先合并，避免功能长期与平台原生能力脱节。

### 8.2 长期开放但缺少直接修复 PR 的高价值问题

- Gateway 命令处理器缺失导致全平台消息失败：
  [#143844](https://github.com/NousResearch/hermes-agent/issues/143844)
- 90 天路由清理造成旧 Session 永久不可恢复：
  [#143848](https://github.com/NousResearch/hermes-agent/issues/143848)
- Desktop 长历史会话加载卡死：
  [#143829](https://github.com/NousResearch/hermes-agent/issues/143829)
- 后台 Review 错误归档活跃 Skill：
  [#143817](https://github.com/NousResearch/hermes-agent/issues/143817)
- Kanban Worker 因可选 Skill 解析失败退出：
  [#54088](https://github.com/NousResearch/hermes-agent/issues/54088)
- Session 列表扫描导致后端 CPU 饱和：
  [#143833](https://github.com/NousResearch/hermes-agent/issues/143833)
- `uv 0.13.5` 下插件工作区解析失败：
  [#143254](https://github.com/NousResearch/hermes-agent/issues/143254)

### 8.3 维护者建议

1. **优先合并 5 个已有明确实现的修复：**
   - [PR #143590](https://github.com/NousResearch/hermes-agent/pull/143590)
   - [PR #143847](https://github.com/NousResearch/hermes-agent/pull/143847)
   - [PR #143850](https://github.com/NousResearch/hermes-agent/pull/143850)
   - [PR #143853](https://github.com/NousResearch/hermes-agent/pull/143853)
   - [PR #143854](https://github.com/NousResearch/hermes-agent/pull/143854)

2. **对 v0.22.5 建立回归矩阵：**
   - Gateway：Telegram、Slack、Discord、Matrix
   - Session：CLI、Desktop、API Server、Claude Code 导入
   - Profile：普通 Profile、带 Secret 的 Profile
   - Plugin：无依赖、有 Python 依赖、MCP extras、Android split
   - Desktop：短会话、长历史会话、远程 Gateway

3. **将 45 个待合并 PR 按风险重新排序：**
   - 安全与数据破坏；
   - Gateway/Desktop 会话回归；
   - 插件升级事务一致性；
   - 消息投递可靠性；
   - 功能和目录扩展。

4. **为长期未关闭 Issue 设置关闭标准或明确 owner**，尤其针对 Kanban、Skill 原子性、配置竞态和 Session 性能问题。

---

## 项目健康度结论

| 维度 | 评价 | 依据 |
|---|---|---|
| 开发活跃度 | 高 | 24 小时内 50 条 Issue 更新、50 条 PR 更新、1 个版本发布 |
| 修复供给 | 较强 | Gateway、Desktop、Slack、Codex、Copilot、插件依赖均有针对性 PR |
| 发布节奏 | 稳定 | v0.22.5 同步覆盖 CLI、安装器、Microsoft Store、Docker 和 Cloud |
| 社区参与 | 较高 | 插件目录、MCP、平台适配和上游移植贡献活跃 |
| 稳定性 | 承压 | Gateway/Desktop/API Session、Plugin Resolver 出现多项升级相关回归 |
| 安全态势 | 需重点处理 | PM 路径遍历/任意删除链仍开放，另有 Pillow 依赖问题已关闭但需确认 |
| 综合健康度 | **活跃但需收敛** | 修复储备充足，核心风险集中在 v0.22.4–v0.22.5 升级后的会话与插件兼容性 |

**总体判断：** Hermes Agent 当前并不缺少功能供给或修复贡献，主要挑战是 **高数量待合并 PR 的审查吞吐、版本升级回归，以及多子系统之间的状态一致性**。若能在下一补丁版集中解决 Gateway/Desktop/API Session 准入、Plugin Manager 原子升级与 PM 安全边界，项目健康度将明显回升。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-10-24**  
**数据范围：过去 24 小时**  
**仓库：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

---

## 1. 今日速览

过去 24 小时项目保持较高工程活跃度，共更新 **18 个 Issues**（其中新开/活跃 16 个、关闭 2 个）和 **50 个 PRs**（待合并 21 个、已合并或关闭 29 个），另有 **21 个 PR 等待处理**。今日没有发布新版本，当前工作重点集中在修复 `main` 分支上的测试编译失败、CI 漂移、嵌入式运行时兼容和沙箱执行问题，而非用户可见功能发布。

Issue 侧新增了 Linux AppImage 启动失败、消息解析破坏缩进、Vault 路径缺失等高关注度问题；PR 侧则主要由同一维护者集中处理 Rust feature gating、覆盖率测试、embed 示例和静态检查。当前项目**开发活跃度很高，但分支质量承压**：大量 PR 用于修复主干已有故障，说明近期核心重构或依赖演进造成了明显回归积压。综合判断，项目健康度为**中等偏积极**：修复推进密集，但稳定性、升级链路和 CI 红灯问题仍需优先收敛。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此没有新增 Release 记录或正式版本升级说明。

不过，今日议题中出现了明显的版本质量问题：

- [#6662：升级至 0.64 后重启回退到 0.63.7，且 0.63.7 没有卸载器](https://github.com/tinyhumansai/openhuman/issues/6662)
- [#8322：0.64.4 缺少 `memory_tree/content`，错误信息还会显示用户主目录路径](https://github.com/tinyhumansai/openhuman/issues/8322)
- [#6690：全新安装 0.64.0 后，Memory 模块仍无法加载](https://github.com/tinyhumansai/openhuman/issues/6690)
- [#6667：升级后一段时间提示词停止工作，且日志无记录](https://github.com/tinyhumansai/openhuman/issues/6667)

**迁移提示：**即使本次日报没有新版本，用户仍应谨慎执行跨版本升级，并保留旧版本安装包及用户数据备份；涉及 Vault、Memory、升级和卸载时尤其需要先验证恢复路径。

---

## 3. 项目进展

过去 24 小时有 **29 个 PR 被合并或关闭**。从标题和变更摘要看，主线推进重点是：恢复 Rust 多 feature 组合下的编译能力、修复主干 CI 与测试漂移、修复 embed 集成接口变化、清理过期模块边界规则，以及强化权限和沙箱的失败关闭行为。

### 已关闭的重要 PR

> GitHub 状态为 `CLOSED` 不一定等同于代码已合并；以下主要根据提交信息中的“Fixes/Fixes the red lane”等表述判断其实际贡献。以下仍需结合最终 merge commit 状态核验。

- [#8361：让 `raw_coverage_all` 和 `inbound_linked_e2e` 重新基于 `main` 编译](https://github.com/tinyhumansai/openhuman/pull/8361)  
  修复 `MemoryStorage` 路径迁移后覆盖率测试无法编译的问题，为后续 Rust 核心覆盖率流水线恢复扫清障碍。

- [#8357：仅在启用 modules 时运行 module source-fallback 测试](https://github.com/tinyhumansai/openhuman/pull/8357)  
  修正 `rust-gates-off` 场景下测试预期与实际配置不一致的问题。

- [#8356：修复工具目录漂移检查的 feature 列表](https://github.com/tinyhumansai/openhuman/pull/8356)  
  同步产品 feature 清单与前端工具目录 fixture，并补充 `goal_resume`，减少 CI 因目录漂移而失败。

- [#8358：仅在 storage 可声明导入时运行布局迁移状态测试](https://github.com/tinyhumansai/openhuman/pull/8358)  
  修复 15 个因无 storage 权限而失败的 layout migration 测试。

- [#8336：从 `tinyagents-session` testkit 引入内存 session store](https://github.com/tinyhumansai/openhuman/pull/8336)  
  适配 `InMemorySessionStores` 迁移到 `testkit` feature，恢复 embed、clippy 和覆盖率测试编译。

- [#8335：通过 core workspace session store 读取 agent transcript](https://github.com/tinyhumansai/openhuman/pull/8335)  
  适配 `WorkspaceStores` 从 `port` 移除的新接口，修复 embed 集成测试的 `E0433` 编译错误。

- [#8351：恢复 fleet、storage、profiles 和 MCP 示例](https://github.com/tinyhumansai/openhuman/pull/8351)  
  清理 `linux_fleet` 等过期示例，并修复 embed offline examples 编译与运行失败。

- [#8350：仅在 `legacy-import` 下导出 layout auto-migration](https://github.com/tinyhumansai/openhuman/pull/8350)  
  修复 `openhuman-embed --no-default-features` 下的未解析导入问题。

- [#8349：无需 `modules` feature 也能构建 live shell handle](https://github.com/tinyhumansai/openhuman/pull/8349)  
  解决 `LiveHandle` 在 feature 组合为空时无法穷尽匹配的问题，强化沙箱后端的 feature 兼容性。

- [#8347：让 core 库测试支持 `--no-default-features`](https://github.com/tinyhumansai/openhuman/pull/8347)  
  清理由 `cfg` gate 引起的未定义引用，修复 gate-contract 测试编译。

- [#8333：无 `secret-file` feature 时仍可构建 key file reader](https://github.com/tinyhumansai/openhuman/pull/8333)  
  恢复 `openhuman-rpc` 覆盖率任务所需的精简 feature 构建。

- [#8340：移除 `tinystoragedrivers-types` 的模块边界例外](https://github.com/tinyhumansai/openhuman/pull/8340)  
  同步依赖边界规则和检查脚本，修复静态模块边界检查失败。

- [#8339：清理过期的 session-store 静态所有权记录](https://github.com/tinyhumansai/openhuman/pull/8339)  
  删除源码中已不存在的 `OPEN_WORKSPACE_STORES` 和 `MEMORY` 记录，恢复 process-statics 检查。

- [#8332：在目录漂移检查中识别 agent chat RPC controller](https://github.com/tinyhumansai/openhuman/pull/8332)  
  修复仍合法存在的 inference agent chat 方法被误报为目录漂移的问题。

- [#8338：停止调度已删除的 native settings E2E spec](https://github.com/tinyhumansai/openhuman/pull/8338)  
  修正 E2E shard 覆盖检查，防止引用已删除测试文件。

- [#8344：移除 mock API 中已删除的 cron 路由测试](https://github.com/tinyhumansai/openhuman/pull/8344)  
  配合 cron 所有权迁移，避免测试继续假设服务端控制 cron 路由。

### 仍在推进的重要 PR

- [#8327：重新固定 2026-10-23 的可加载模块版本](https://github.com/tinyhumansai/openhuman/pull/8327)  
  同步 registry、vendor gitlink、测试和两个 lockfile。该 PR 与[#8280：TinyMCP 启动故障导致所有 MCP 调用不可用](https://github.com/tinyhumansai/openhuman/issues/8280)直接相关，版本重新 pinning 有望降低模块加载和 API 不一致问题。

- [#8365：Composio scope 偏好读取失败时执行 fail-closed](https://github.com/tinyhumansai/openhuman/pull/8365)  
  从“读取失败时默认允许读写”调整为“读取失败即拒绝”，属于权限行为变化。方向上更安全，但需要维护者重点审查兼容性。

- [#8364：记录 shell job 无法运行的原因，并为 cron E2E 提供 host storage](https://github.com/tinyhumansai/openhuman/pull/8364)  
  提升定时任务失败的可诊断性，同时修复相关端到端测试环境。

- [#8362：让 Claude Code 和 Composio 原始覆盖率测试适配 host storage](https://github.com/tinyhumansai/openhuman/pull/8362)  
  基于[#8361](https://github.com/tinyhumansai/openhuman/pull/8361)继续推进，目标是恢复 raw coverage 测试对当前 host storage 模型的适配。

### 整体推进程度

今日开发活动覆盖了 **Rust core、embed API、sandbox、CI、覆盖率、E2E、模块版本和权限门控** 等多个关键面，说明团队正在快速修复一次较大规模的内部接口调整带来的连锁问题。按 PR 数量衡量进展显著；但从“修复主干已有红灯”的 PR 占比看，系统仍处于**重构后的收敛期**，尚不能仅凭合并数量判断为稳定状态。

---

## 4. 社区热点

### 讨论最活跃的 Issue

- [#7328：整合 security、policy、approvals 与 sandboxing 到 tinysecurity bus](https://github.com/tinyhumansai/openhuman/issues/7328)  
  **31 条评论**，为今日讨论热度最高议题。其诉求是将分散的安全策略、审批和沙箱能力集中到统一总线，并配套 tinybox 审计。这不是单点修复，而是安全架构的收敛项目，可能影响工具调用、权限审批和沙箱生命周期。  
  **观察点：**如果 tinysecurity 与 tinybox 两侧的接口和迁移计划对齐，这项工作有较高概率成为下一阶段平台级版本的核心内容。

- [#7055：修复 Teeny 端到端 Discord 报告转 GitHub Issue 流程](https://github.com/tinyhumansai/openhuman/issues/7055)  
  **4 条评论**。问题覆盖聊天片段回答、ticket 按钮报错，以及将 PII 写入公开仓库。该议题反映出的核心诉求是：用户希望 Teeny 自动生成格式正确、可分派且不泄露个人信息的 Issue，从而减少人工整理 Discord 反馈的工作量。  
  **观察点：**[#6671](https://github.com/tinyhumansai/openhuman/issues/6671)是其下游故障；目前未看到直接覆盖完整链路的 fix PR。

- [#6662：0.64 升级回退及缺少卸载器](https://github.com/tinyhumansai/openhuman/issues/6662)  
  **4 条评论**。这是典型的高影响发布工程问题：用户无法稳定停留在新版，且升级回退后缺少清理手段。

### 新增热点 Issue

- [#8363：Linux AppImage 在收紧 user namespace/AppArmor 的发行版上无法启动](https://github.com/tinyhumansai/openhuman/issues/8363)  
  今日新开且优先级 P1。用户在应用自身 crash reporter 启动前就遇到 EGL 或 unshare 错误，缺少优雅降级或替代安装路径。  
  **反馈价值：**这是影响新用户安装转化与 Linux 发行版覆盖面的高优先级兼容性问题。

- [#8201：Sentry release 缺少 token 时必须失败，并校验 commit 关联](https://github.com/tinyhumansai/openhuman/issues/8201)  
  **2 条评论**，P2。诉求是让发布流程在遥测凭据缺失时明确失败，而不是静默跳过，同时验证 release 与 commit 的真实关联。

- [#8203：明确 Sentry token 所有权、轮换流程并撤销闲置 token](https://github.com/tinyhumansai/openhuman/issues/8203)  
  **2 条评论**，P3。关注安全治理和凭据生命周期，属于运维成熟度提升。

- [#8202：统一各产品的 Sentry release 命名](https://github.com/tinyhumansai/openhuman/issues/8202)  
  **2 条评论**，P3。统一为 `<product>@<version>+<commit>`，可提升跨产品检索和构建定位效率。

### PR 热度判断

展示列表中的 PR 均未提供有效评论数或点赞数，因此无法进行可靠的“评论最多/反应最多”排序。按变更重要性和潜在影响看，今日值得重点关注的 PR 是：

1. [#8365：Composio 权限 fail-closed](https://github.com/tinyhumansai/openhuman/pull/8365)
2. [#8327：模块版本重新固定](https://github.com/tinyhumansai/openhuman/pull/8327)
3. [#8364：cron shell job 失败诊断](https://github.com/tinyhumansai/openhuman/pull/8364)
4. [#8349：沙箱 live shell handle feature 修复](https://github.com/tinyhumansai/openhuman/pull/8349)

---

## 5. Bug 与稳定性

### P0 / 阻断级

今日无明确 P0 Issue。

### P1 / 高严重度

1. **[#8363：Linux AppImage 在严格 user namespace/AppArmor 环境启动失败](https://github.com/tinyhumansai/openhuman/issues/8363)**  
   - 影响：Linux 用户可能在应用启动前即失败，错误不可诊断，且无法进入应用内报告流程。  
   - **已有 fix PR：未发现直接对应 PR。**

2. **[#6662：0.64 更新重启后回退到 0.63.7，且无卸载器](https://github.com/tinyhumansai/openhuman/issues/6662)**  
   - 影响：升级状态不可信，可能造成版本混用、数据迁移混乱和回滚困难。  
   - **已有 fix PR：未发现直接对应 PR。**

3. **[#6690：干净安装 0.64.0 后 Memory 模块仍加载失败](https://github.com/tinyhumansai/openhuman/issues/6690)**  
   - 影响：核心记忆能力不可用，且问题可从全新安装复现，降低了“残留数据导致故障”的可能性。  
   - **已有 fix PR：未发现明确对应 PR。**

4. **[#6667：升级后提示词逐渐停止工作且无日志](https://github.com/tinyhumansai/openhuman/issues/6667)**  
   - 影响：用户无法判断故障原因，也无法自助恢复；对 macOS Apple Silicon 用户尤其重要。  
   - **已有 fix PR：未发现直接对应 PR。**

5. **[#6695：Brain → View Vault → Reveal Folder 会关闭应用](https://github.com/tinyhumansai/openhuman/issues/6695)**  
   - 影响：Vault 目录无法通过预期路径打开，应用静默退出。  
   - **已有 fix PR：未发现直接对应 PR。**

6. **[#7055：Teeny 报告转 Issue 流程破损并可能泄露 PII](https://github.com/tinyhumansai/openhuman/issues/7055)**  
   - 影响：自动反馈闭环失效；若继续自动提交公开 Issue，可能造成个人信息泄露。  
   - **已有 fix PR：未发现覆盖完整链路的 fix PR。**

### P2 / 中等严重度

1. **[#8322：0.64.4 缺少 Vault `memory_tree/content`，错误暴露用户 home 路径](https://github.com/tinyhumansai/openhuman/issues/8322)**  
   - 同时影响数据完整性和隐私呈现。  
   - **已有 fix PR：未发现直接对应 PR。**

2. **[#8328：消息解析破坏代码缩进、代码字符串内空格和 Markdown 换行空格](https://github.com/tinyhumansai/openhuman/issues/8328)**  
   - 影响代码生成、diff、代码块展示及富文本保真。  
   - **已有 fix PR：未发现直接对应 PR。**

3. **[#6671：Teeny “Open a ticket” 按钮返回 integration failed](https://github.com/tinyhumansai/openhuman/issues/6671)**  
   - **已有 fix PR：未发现直接对应 PR。**

4. **[#6941：工具调用完成后 OpenHuman 卡死](https://github.com/tinyhumansai/openhuman/issues/6941)**  
   - 缺少具体触发工具和复现步骤，仍需补充最小复现。  
   - **已有 fix PR：未发现明确对应 PR。**

5. **[#6691：0.64.0 的窗口 X 按钮无法关闭应用](https://github.com/tinyhumansai/openhuman/issues/6691)**  
   - 用户只能通过系统托盘退出，影响桌面端基本交互。  
   - **已有 fix PR：未发现直接对应 PR。**

6. **[#8201：Sentry 缺少 token 时发布流程可能静默继续](https://github.com/tinyhumansai/openhuman/issues/8201)**  
   - 影响发布可观测性与错误追踪完整性。  
   - **已有 fix PR：未发现直接对应 PR。**

7. **[#8317：应先解析 sandbox backend，再预留 shell process slot](https://github.com/tinyhumansai/openhuman/issues/8317)**  
   - Docker 命令无法让出时不应占用每轮四个进程槽之一，否则可能造成调度阻塞。  
   - **相关 PR：[#8349](https://github.com/tinyhumansai/openhuman/pull/8349) 修复了 live shell handle 的 feature 构建，但并未完全替代该问题的完整语义修复。**

### 已关闭或已有明确修复

- **[#8280：TinyMCP 启动时 fault，所有 MCP 调用均显示 module unavailable](https://github.com/tinyhumansai/openhuman/issues/8280)**  
  Issue 已关闭；[#8327](https://github.com/tinyhumansai/openhuman/pull/8327) 正在重新固定 2026-10-23 模块版本，方向上与恢复模块兼容性一致。

- **[#6694：公开 Issue 暴露操作系统账号名和用户 ID](https://github.com/tinyhumansai/openhuman/issues/6694)**  
  已由[#8322](https://github.com/tinyhumansai/openhuman/issues/8322) 替代，原 Issue 标记待删除。虽然 GitHub issue 历史版本无法完全抹除，但这是正确的隐私处置方向。

### 稳定性趋势

今日修复活动的重点是 **CI 和编译稳定性**，而用户侧高严重度问题大多仍缺少明确 fix PR。特别是 Linux 启动、升级回退、Memory 加载和升级后失活四类问题尚未形成明显闭环。因此，当前应把“主干变绿”与“真实用户可稳定运行”分开评估：**工程测试正在修复，但产品稳定性仍有明显缺口。**

---

## 6. 功能请求与路线图信号

### 统一安全总线与审批体系

- **诉求来源：[#7328](https://github.com/tinyhumansai/openhuman/issues/7328)**  
  将 security、policy、approvals 和 sandboxing 收拢到 tinysecurity bus，并进行 tinybox 审计。
- **路线图判断：高概率进入下一阶段。**  
  该 Issue 已有 31 条评论，并拆分为 characterization tests、module wiring 和 OpenHuman 集成迁移等阶段，呈现明确的架构路线图特征。

### Teeny 自动化反馈闭环

- **诉求来源：[#7055](https://github.com/tinyhumansai/openhuman/issues/7055)、[#6671](https://github.com/tinyhumansai/openhuman/issues/6671)**  
  目标是让 Discord 反馈自动转为结构化 GitHub Issue，并正确处理优先级和 PII。
- **路线图判断：中高概率。**  
  这直接减少社区支持成本；[#8327](https://github.com/tinyhumansai/openhuman/pull/8327) 等模块集成修复可改善其运行基础，但 Discord 按钮、Issue 格式化和脱敏仍需专项实现。

### Sentry 发布与凭据治理

- **诉求来源：[#8201](https://github.com/tinyhumansai/openhuman/issues/8201)、[#8202](https://github.com/tinyhumansai/openhuman/issues/8202)、[#8203](https://github.com/tinyhumansai/openhuman/issues/8203)**  
  统一 release 命名、token 所有权与轮换、缺失 token 时失败，以及 commit 关联验证。
- **路线图判断：中高概率进入近期发布工程版本。**  
  这些改动范围明确、易于测试，与现有 Sentry 跟踪工作直接衔接。

### 沙箱调度优化

- **诉求来源：[#8317](https://github.com/tinyhumansai/openhuman/issues/8317)**  
  避免不可让出执行权的 Docker 命令提前占用 shell process slot。
- **路线图判断：较可能纳入近期稳定性版本。**  
  已有沙箱 feature 修复[#8349](https://github.com/tinyhumansai/openhuman/pull/8349)作为前置基础。

### 定时任务可诊断性

- **诉求来源：[#8364](https://github.com/tinyhumansai/openhuman/pull/8364)**  
  当 shell job 无法运行时记录具体原因，而不仅是留下泛化错误。
- **路线图判断：很可能近期合入。**  
  PR 已直接实现，属于小范围、用户可感知的可靠性提升。

### 权限读取失败时 fail-closed

- **候选实现：[#8365](https://github.com/tinyhumansai/openhuman/pull/8365)**  
  Composio scope preference 无法读取时拒绝执行，而不是退回默认读写权限。
- **路线图判断：安全方向明确，但是否进入下一正式版本取决于维护者审查。**  
  它会造成行为变化，需要确认是否存在兼容性和可用性代价。

### 跨产品可观测性

- **潜在方向：Sentry 统一 release 命名和 commit 绑定](https://github.com/tinyhumansai/openhuman/issues/8202)**  
  这是从单产品修复走向多产品工程体系成熟的信号，但更偏基础设施，不一定作为用户功能单独发布。

---

## 7. 用户反馈摘要

### 真实使用场景与痛点

1. **Linux 新装用户首先被启动兼容性阻挡**  
   [#8363](https://github.com/tinyhumansai/openhuman/issues/8363)显示，在 Fedora、较新的 Ubuntu/Debian AppArmor 环境、openSUSE 等发行版上，AppImage 可能在应用启动前失败。用户期待的是应用能够正常启动，或至少给出可理解的降级提示和替代安装方式。

2. **升级流程无法给用户稳定感**  
   [#6662](https://github.com/tinyhumansai/openhuman/issues/6662)中，用户更新到 0.64 后重启又回到 0.63.7，同时旧版本没有卸载器。用户不仅无法升级，还难以清理旧状态，这会直接放大升级期间的兼容问题。

3. **Memory 与 Vault 是高频核心路径，但当前仍有断点**  
   [#6690](https://github.com/tinyhumansai/openhuman/issues/6690)表明即使清空所有旧数据并全新安装 0.64.0，Memory 模块仍无法加载；[#8322](https://github.com/tinyhumansai/openhuman/issues/8322)则显示 0.64.4 缺少 `memory_tree/content`。这说明问题不只是迁移残留，而是新版本中的目录/初始化链路仍不完整。

4. **基础桌面交互仍可能失效**  
   [#6695](https://github.com/tinyhumansai/openhuman/issues/6695)中的 Reveal Folder 会直接关闭应用，[#6691](https://github.com/tinyhumansai/openhuman/issues/6691)中的窗口关闭按钮也无法退出。用户反馈集中在“不报错但行为错误”，这类问题尤其容易损害信任感。

5. **消息格式保真影响专业使用场景**  
   [#8328](https://github.com/tinyhumansai/openhuman/issues/8328)显示代码缩进、代码字符串内重复空格和 Markdown 硬换行会被吞掉。普通聊天用户可能不易察觉，但频繁处理代码、补丁和 Markdown 的用户会明显受影响。

6. **工具调用后卡死影响自动化连续性](https://github.com/tinyhumansai/openhuman/issues/6941)  
   如果 OpenHuman 在工具调用完成后无法继续响应，用户无法安全地执行多步骤任务。由于复现信息不足，当前难以判断是特定工具、响应流还是运行时状态问题。

7. **社区反馈入口本身不稳定，且存在隐私风险**  
   [#7055](https://github.com/tinyhumansai/openhuman/issues/7055)和[#6671](https://github.com/tinyhumansai/openhuman/issues/6671)显示 Teeny 的 Discord → Issue 流程不能稳定工作；更严重的是，报告内容可能把 PII 写入公开仓库。用户希望自动化的同时，必须获得可靠的脱敏和人工监督边界。

### 满意与不满意信号

- **正面信号：**今日多个 PR 精确修复测试和 feature-gating 问题，表明维护者对用户回归并非无响应；尤其[#8327](https://github.com/tinyhumansai/openhuman/pull/8327)主动同步模块 release，[#8364](https://github.com/tinyhumansai/openhuman/pull/8364)主动改善 cron 错误可诊断性。
- **负面信号：**大量 PR 都在处理“main 已红”的测试和编译问题，意味着主干质量控制近期出现缺口；与此同时，若干用户 P1/P2 问题仍没有明确修复 PR。
- **数据限制：**Issues 基本没有点赞，PR 评论与点赞数据也未有效提供，因此无法据此量化社区满意度或维护者响应速度。

---

## 8. 待处理积压

### 优先处理：用户侧高严重度、尚无明确 fix PR

- [#8363：Linux AppImage 启动失败](https://github.com/tinyhumansai/openhuman/issues/8363)  
  建议优先补充发行版矩阵、namespace/AppArmor 检测和安装文档回退方案。

- [#6662：0.64 升级回退、缺少卸载器](https://github.com/tinyhumansai/openhuman/issues/6662)  
  建议明确升级状态写入、版本持久化和卸载/回滚机制。

- [#6690：Memory 模块在干净安装后仍失败](https://github.com/tinyhumansai/openhuman/issues/6690)  
  建议提供最小环境复现、初始化目录日志和内存模块启动诊断。

- [#6667：升级后提示词停止工作且无日志](https://github.com/tinyhumansai/openhuman/issues/6667)  
  建议补齐升级前后进程状态、模块加载和模型调用链日志。

- [#7055：Teeny 端到端流程及 PII 泄露](https://github.com/tinyhumansai/openhuman/issues/7055)  
  建议将“公开仓库写入前脱敏”设为硬门控，并覆盖 Discord 按钮、回复解析、Issue 格式化的端到端测试。

### 需要维护者决策

- [#8317：sandbox backend 与 process slot 的解析顺序](https://github.com/tinyhumansai/openhuman/issues/8317)  
  需要明确 Docker 等不可让出后端是否绕过 shell slot，以及对并发上限的影响。

- [#8365：Composio scope 读取失败时 fail-closed](https://github.com/tinyhumansai/openhuman/pull/8365)  
  需审查权限行为变化、用户提示和升级兼容策略。

- [#8201–#8203：Sentry 发布链路与 token 治理](https://github.com/tinyhumansai/openhuman/issues/8201)  
  三项 Issue 需统一责任人、验收标准及发布时间，避免安全治理事项长期停留在 tracker 阶段。

### PR 队列风险

今日仍有 **21 个待合并 PR**，其中至少以下几项存在堆叠依赖：

- [#8362](https://github.com/tinyhumansai/openhuman/pull/8362) 依赖 [#8361](https://github.com/tinyhumansai/openhuman/pull/8361)
- [#8364](https://github.com/tinyhumansai/openhuman/pull/8364) 同样依赖 [#8361](https://github.com/tinyhumansai/openhuman/pull/8361)

堆叠 PR 会增加 diff 噪声、冲突概率和审查成本。建议维护者先合并或重写基础 PR，并明确每个后续 PR 的独立审查范围。

---

## 项目健康度结论

**整体健康度：中等偏积极。**

- **优势：**开发活动高，Issue/PR 分类和优先级较清晰；安全、CI、模块版本、embed API、sandbox 和权限门控均有实质推进。
- **主要风险：**主干存在较多编译与 CI 回归；用户侧启动、升级、Memory、Vault、桌面交互和工具调用问题尚未全面闭环；PR 数量高但缺少有效评论热度数据，合并质量与响应效率仍需观察。
- **下一关键节点：**优先恢复 `main` 全绿并合并堆叠 PR；随后集中解决 [#8363](https://github.com/tinyhumansai/openhuman/issues/8363)、[#6662](https://github.com/tinyhumansai/openhuman/issues/6662)、[#6690](https://github.com/tinyhumansai/openhuman/issues/6690)、[#6667](https.com/tinyhumansai/openhuman/issues/6667) 和 [#7055](https://github.com/tinyhumansai/openhuman/issues/7055)。这些事项若无法在下一正式版本前收敛，新版发布风险将继续上升。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
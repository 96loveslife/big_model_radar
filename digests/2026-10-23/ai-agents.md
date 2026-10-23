# OpenClaw 生态日报 2026-10-23

> Issues: 500 | PRs: 500 | 覆盖项目: 8 个 | 生成时间: 2026-10-23 07:01 UTC

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

**日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub 数据**

> 统计说明：今日 Issues 与 PR 的“500 条更新”包含既有条目的新评论、状态变更等，并不等同于今日新建数量。PR 列表未提供具体合并者、提交时间等字段，以下“项目进展”依据 PR 的关闭状态、摘要及待合并状态综合整理，不将所有关闭 PR 一概视为已合并。

---

## 1. 今日速览

1. **项目保持极高活跃度**：过去 24 小时记录 **500 条 Issue 更新、500 条 PR 更新**，另有 **1 个新版本 v2026.10.6** 发布，Issue 新开/活跃 333 条、关闭 167 条，PR 待合并 229 条、已合并或关闭 271 条。
2. **今日重点明显偏向运行时稳定性与安全基线**：Node.js 安全运行时升级、Windows 启动性能退化、Gateway 长时间阻塞、插件迁移不收敛、模型运行时恢复失败等问题受到高度关注。
3. **开发吞吐量高，但维护压力也显著**：大量 PR 已合并或关闭，同时仍有 229 条待合并 PR；多个高优先级 Issue 尚未出现明确的新修复 PR，项目处于“高并发修复与持续集成”状态。
4. **社区需求从单一 Agent 能力扩展到平台化能力**：用户重点关注多 Agent 成本控制、内置浏览器、会话重命名、记忆治理、跨节点通知、移动端体验和 Linux ARM 支持。
5. **健康度判断：活跃但承压**。发布与修复并行、贡献者参与度高，但 P0/P1 稳定性问题密度较高，且 Windows、macOS、Linux/npm 等运行环境表现不一致，仍需维护者集中处理发布阻塞项。

---

## 2. 版本发布

### v2026.10.6

发布说明：

- OpenClaw 现在要求使用已修补的 Node.js 运行时：
  - Node **24.22.1+**
  - Node **26.12.1+**
- 新运行时版本会拒绝使用已泄露证书密钥签发的 TLS 证书链。
- Docker 镜像已随版本提供相关运行时调整；发布说明中的镜像描述在原始摘要中被截断，建议部署前核对完整镜像内容。

**链接：** [Release v2026.10.6](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6)

#### 破坏性变更

这是一个明确的**运行时兼容性与安全策略变更**：

- 旧版 Node 24.x、26.x 可能无法继续启动 OpenClaw。
- 依赖旧 Node 运行时的开发脚本、CI 任务、Docker 基础镜像和自动化环境需要同步升级。
- 如果运行环境使用自定义 CA、代理或旧 TLS 组件，应先验证证书链兼容性。

#### 迁移建议

1. 本地开发环境升级至 Node `24.22.1+` 或 `26.12.1+`。
2. 检查 `package.json`、CI、Dockerfile、托管服务和桌面应用内置运行时。
3. 重新执行 TLS、代理、企业 CA 和外部服务连接测试。
4. 关注后续安全依赖修复 PR：
   - [PR #181074：修补运行时并回移至 2026.10.10](https://github.com/openclaw/openclaw/pull/181074)
   - [PR #181341：修补扩展稳定分支的依赖安全公告](https://github.com/openclaw/openclaw/pull/181341)

---

## 3. 项目进展

由于数据没有提供每条 PR 的实际合并时间及合并者，以下按当前关闭状态和变更内容归纳重要推进项。

### 已关闭或已完成的改进

1. **Tailscale Serve 前台声明丢失问题已关闭**
   - Issue：[ #148308](https://github.com/openclaw/openclaw/issues/148308)
   - 涉及 `tailscaled` 重启后 Gateway 不会重新取得前台 Serve claim 的问题。
   - 该问题已关闭，说明相关维护工作至少完成了阶段性收束，但仍应关注回归验证。

2. **会话重置语义问题已关闭**
   - Issue：[ #126836](https://github.com/openclaw/openclaw/issues/126836)
   - `sessions.reset` 曾返回成功但未创建新会话窗口，导致消息被静默吞掉。
   - 关闭该 Issue 表明相关修复或决策已经完成，需继续关注用户侧升级验证。

3. **记忆提升目标文件需求已关闭**
   - Issue：[ #71330](https://github.com/openclaw/openclaw/issues/71330)
   - 需求是避免短期记忆自动提升时固定写入 `MEMORY.md`，以便治理不同类型的长期记忆。

4. **记忆生命周期治理需求已关闭**
   - Issue：[ #87660](https://github.com/openclaw/openclaw/issues/87660)
   - 关注 `MEMORY.md` 的长期记忆生命周期、重复内容治理和自动整理能力。

5. **图片理解摘要持久化需求已关闭**
   - Issue：[ #88646](https://github.com/openclaw/openclaw/issues/88646)
   - 目标是将 Agent 附件的图片理解和摘要结果保存下来，供后续会话复用。

6. **内嵌 Chromium 浏览器能力讨论已关闭**
   - Issue：[ #53763](https://github.com/openclaw/openclaw/issues/53763)
   - 需求是为 Agent 提供稳定的内置无头浏览器，减少对外部 Chrome 或第三方网页访问 API 的依赖。
   - Issue 已关闭，但不代表所有浏览器插件兼容性问题均已解决。

7. **溢出压缩重试次数配置化需求已关闭**
   - Issue：[ #80638](https://github.com/openclaw/openclaw/issues/80638)
   - 原问题是上下文溢出压缩重试次数硬编码为 3，需求是开放为配置项。

8. **macOS 手工 Gateway URL scheme 问题已关闭**
   - Issue：[ #144678](https://github.com/openclaw/openclaw/issues/144678)
   - iOS 手工连接外部主机时，输入 `https://` 或 `wss://` 会导致 Connect 按钮不可用，且缺少输入校验提示。

9. **Control UI 本地化刷新 PR 已关闭**
   - PR：[ #181441](https://github.com/openclaw/openclaw/pull/181441)
   - 该 PR 用于刷新 Control UI locale 生成结果，并显示其与当前主线同步。

10. **UI 懒加载与目录性能优化已关闭**
    - PR：[ #181075](https://github.com/openclaw/openclaw/pull/181075)
    - PR：[ #181404](https://github.com/openclaw/openclaw/pull/181404)
    - 主要将设置、终端、活动、更新详情、偏好设置及侧边栏目录等资源改为按需加载，降低启动阶段的解析和渲染成本。

11. **Control UI 未使用导出清理已完成**
    - PR：[ #181431](https://github.com/openclaw/openclaw/pull/181431)
    - 清理 CI 检测出的 unused-export 问题，不改变用户可见行为。

### 当前值得重点跟进的开放 PR

1. **修复模型运行时发布失败后的消息恢复**
   - PR：[ #181300](https://github.com/openclaw/openclaw/pull/181300)
   - 针对 Telegram 消息在模型运行时发布失败后长期 pending、反复维持 typing 状态的问题。
   - 目标是将普通发布失败纳入需求恢复路径，并限制 ingress 重试。
   - 与 [Issue #158592](https://github.com/openclaw/openclaw/issues/158592)、[#155852](https://github.com/openclaw/openclaw/issues/155852) 相关。

2. **修复无认证请求者场景下的 steering 输入丢失**
   - PR：[ #181449](https://github.com/openclaw/openclaw/pull/181449)
   - 目标是当活跃自动化回合无法识别请求者身份时，不拒绝并消费用户 steering 消息。

3. **Control UI 启动和渲染性能优化**
   - PR：[ #181394](https://github.com/openclaw/openclaw/pull/181394)
   - 将缓存 dashboard 行延迟到 WebSocket 连接建立后构建，减少深链接页面首屏加载压力。
   - PR：[ #181450](https://github.com/openclaw/openclaw/pull/181450) 则针对冷启动测试队列尾部延迟进行优化。

4. **会话命名与通知可辨识性**
   - PR：[ #174317](https://github.com/openclaw/openclaw/pull/174317)
   - 增加可选的一次性自动命名优化，在会话经过若干后续任务后重新生成更符合当前主题的名称。
   - PR：[ #144862](https://github.com/openclaw/openclaw/pull/144862)
   - 为完成会话加入显式标签，改善多会话通知难以区分的问题。

5. **配置来源解释能力**
   - PR：[ #181342](https://github.com/openclaw/openclaw/pull/181342)
   - 为单个配置路径提供 provenance 解释，帮助用户判断配置来自文件、include、环境变量 SecretRef 还是运行时默认值。

### 整体推进判断

项目今日在以下方向持续推进：

- **安全**：Node 运行时、依赖公告、SecretRef 和 egress proxy。
- **可靠性**：模型运行时发布、Gateway 恢复、子 Agent 生命周期、会话状态。
- **性能**：插件加载、Control UI 首屏、目录渲染和测试队列。
- **可运维性**：Doctor、配置来源解释、Gateway suspend 状态和版本展示。

但多个 P0/P1 问题仍未明确对应到新的已合并修复，因此“功能开发推进速度较快，核心运行时稳定性修复仍处于高压追赶状态”。

---

## 4. 社区热点

### 4.1 最活跃 Issue

#### 1. 插件捕获导致 Gateway 阻塞数分钟

- Issue：[ #160959](https://github.com/openclaw/openclaw/issues/160959)
- 评论数：**43**
- 状态：OPEN
- 标签包含：`P0`、`impact:crash-loop`、`clawsweeper:needs-maintainer-review`

核心诉求：

- 大型外部插件或 workspace 插件在启动及 prepared model runtime republish 时触发高 CPU 捕获。
- Gateway event loop 可能阻塞数分钟。
- 这不是单纯的启动慢，而是会影响健康检查、控制请求和消息处理的可用性问题。

判断：这是当前最值得维护者优先处理的性能与稳定性交叉问题之一。

#### 2. Gateway 级别按 Agent 成本预算

- Issue：[ #42475](https://github.com/openclaw/openclaw/issues/42475)
- 评论数：**27**
- 状态：OPEN
- 优先级：P2

核心诉求：

- 支持每日或每月 Agent 级预算。
- 在 Gateway 发起模型调用前执行预算拦截。
- 防止多 Agent 运行导致成本失控。

判断：这是平台化运营需求，代表 OpenClaw 正从“能运行 Agent”转向“能管理 Agent 成本和资源”。

#### 3. Windows 启动时间从约 410 秒升至约 1030 秒

- Issue：[ #168955](https://github.com/openclaw/openclaw/issues/168955)
- 评论数：**18**
- 状态：OPEN
- 优先级：P1

核心信息：

- `2026.9.9` 到 `2026.10.1` 后出现明显启动回归。
- `sidecars.control-ui-assets` 阶段约耗时 477 秒。
- 同机两次热启动均能复现。

判断：Windows 用户体验和升级可信度受到直接影响，应与 [Issue #160485](https://github.com/openclaw/openclaw/issues/160485) 的插件加载 CPU 消耗问题一起排查。

#### 4. 2026.9.7 修复追踪器

- Issue：[ #157531](https://github.com/openclaw/openclaw/issues/157531)
- 评论数：**17**
- 状态：OPEN，标记为 stale

核心诉求：

- 追踪旧版本修复项、隐私和稳定性候选修复。
- 该 Issue 更像发布修复清单，而非单一用户故障。

判断：需要维护者及时关闭已完成项目或重新整理剩余项，避免追踪器本身长期积累。

#### 5. Windows 睡眠/唤醒后 WebSocket 重连失败

- Issue：[ #140010](https://github.com/openclaw/openclaw/issues/140010)
- 评论数：**14**
- 优先级：P1

核心诉求：

- Windows 笔记本从睡眠恢复后，Control UI 和 WebChat 可能 30–60 秒甚至更长时间无法重连。
- Gateway 进程仍在，但 WebSocket upgrade 阶段可能失败。

判断：这是典型的跨平台生命周期问题，涉及事件循环阻塞、唤醒恢复和连接状态机。

### 4.2 高反应/高关注 PR

当前展示的 PR 中，较值得关注的包括：

- [PR #181300：恢复未发布的 dispatch owner，并限制 ingress 重试](https://github.com/openclaw/openclaw/pull/181300)
- [PR #181449：未知请求者时保留 steering 输入](https://github.com/openclaw/openclaw/pull/181449)
- [PR #181074：回移已修补运行时至 2026.10.10](https://github.com/openclaw/openclaw/pull/181074)
- [PR #181341：修补 extended-stable 依赖安全公告](https://github.com/openclaw/openclaw/pull/181341)
- [PR #174317：可选的一次性会话/主题自动重命名](https://github.com/openclaw/openclaw/pull/174317)
- [PR #181366：增加 Gateway suspend status CLI](https://github.com/openclaw/openclaw/pull/181366)
- [PR #181342：单路径配置 provenance 解释](https://github.com/openclaw/openclaw/pull/181342)

> 数据中多数 PR 的评论数为 `undefined`，因此无法据此准确判断“评论最多”的 PR；上述列表按安全影响、范围、优先级和用户影响筛选。

---

## 5. Bug 与稳定性

以下按严重程度排列，并标注是否已有明确的新修复 PR。由于 Issue 标签中的 `no-new-fix-pr` 仅表示当前数据中未发现直接对应的新修复 PR，不代表项目整体没有其他修复。

### P0：可能造成服务不可用、消息丢失或发布阻塞

| 问题 | 影响 | 修复 PR 状态 |
|---|---|---|
| [ #160959 插件捕获阻塞 Gateway](https://github.com/openclaw/openclaw/issues/160959) | 启动及运行时 republish 期间 Gateway 阻塞数分钟 | 暂无明确新 fix PR |
| [ #166634 崩溃恢复后会话回收 checkpoint 过期](https://github.com/openclaw/openclaw/issues/166634) | Agent 在 Gateway 非正常退出后持续拒绝历史、元数据和模型列表请求 | 暂无明确新 fix PR |
| [ #158592 睡眠唤醒后模型运行时发布永久失败](https://github.com/openclaw/openclaw/issues/158592) | 所有入站消息报 `runtime owner was not published`，直到重启 Gateway | 有相关 PR：[ #181300](https://github.com/openclaw/openclaw/pull/181300) |
| [ #156712 triage repair 子进程无法正常退出](https://github.com/openclaw/openclaw/issues/156712) | 子进程持有 Gateway lifecycle 锁，阻塞应用重启 | 暂无明确新 fix PR |
| [ #156674 macOS 长期 Codex worker 导致资源压力](https://github.com/openclaw/openclaw/issues/156674) | CPU/内存压力持续，停止 Gateway 后系统恢复 | 暂无明确新 fix PR |
| [ #140085 Telegram `ask_user` 无法送达](https://github.com/openclaw/openclaw/issues/140085) | 交互式提问阻塞会话，且不会按预期超时恢复 | 暂无明确新 fix PR |
| [ #141615 WebChat profile verification 永久 unavailable](https://github.com/openclaw/openclaw/issues/141615) | 所有依赖 profile 的 RPC 被阻塞，必须重启 Gateway | 暂无明确新 fix PR |
| [ #166004 Windows scheduled-task Gateway 无法启动](https://github.com/openclaw/openclaw/issues/166004) | 服务 readiness timeout，更新回滚 | 暂无明确新 fix PR |
| [ #115642 订阅认证 billing cooldown 持续过久](https://github.com/openclaw/openclaw/issues/115642) | 服务恢复后仍可能数小时快速失败 | 暂无明确新 fix PR |
| [ #48920 Live Docs 内容领先于正式版本](https://github.com/openclaw/openclaw/issues/48920) | 用户按文档配置但当前版本不支持，造成版本认知混乱 | 暂无明确新 fix PR |

### P1：严重影响可用性、恢复能力或消息处理

| 问题 | 影响 | 修复 PR 状态 |
|---|---|---|
| [ #168955 Windows 启动性能回归](https://github.com/openclaw/openclaw/issues/168955) | 启动时间约翻倍至 1030 秒 | 暂无明确新 fix PR |
| [ #160485 Windows 插件加载 CPU 密集](https://github.com/openclaw/openclaw/issues/160485) | 3 个 channel plugin 占插件阶段约 57.4 秒 | 暂无明确新 fix PR |
| [ #140010 Windows 睡眠/唤醒后 WebSocket 重连失败](https://github.com/openclaw/openclaw/issues/140010) | Control UI/WebChat 长时间不可用 | 暂无明确新 fix PR |
| [ #156895 Agent 创建 automation 被错误判定 account unavailable](https://github.com/openclaw/openclaw/issues/156895) | 定时任务约 20ms 内 fail closed | 暂无明确新 fix PR |
| [ #167557 插件 deferred migration 永不收敛](https://github.com/openclaw/openclaw/issues/167557) | 更新后 signal 插件迁移持续等待，可能导致管理 handoff 失败 | 暂无明确新 fix PR |
| [ #144336 deferred config reload 重启失败](https://github.com/openclaw/openclaw/issues/144336) | 配置变更要求重启时 shutdown step 失败 | 暂无明确新 fix PR |
| [ #155359 Windows SQLite 写事务长时间阻塞](https://github.com/openclaw/openclaw/issues/155359) | 多次出现 5.9–33.2 秒事务持有，且冻结检测误报 | 暂无明确新 fix PR |
| [ #155396 Codex 最终答案恢复触发 `provenance_rejected`](https://github.com/openclaw/openclaw/issues/155396) | 已完成工具回合丢失最终答案，只显示通用失败 | 暂无明确新 fix PR |
| [ #145690 子 Agent 完成时释放模型运行时 generation](https://github.com/openclaw/openclaw/issues/145690) | 后续 lane 任务快速失败，fallback 被耗尽，消息丢失 | 暂无明确新 fix PR |
| [ #159787 A2A Workshop 缺少 operator approval scope](https://github.com/openclaw/openclaw/issues/159787) | 受保护的 Skill Workshop apply 被错误报告为 Gateway 不可用 | 暂无明确新 fix PR |
| [ #140455 Google Meet Agent voice 与当前 Meet UI 不兼容](https://github.com/openclaw/openclaw/issues/140455) | 语音会话出现 circular JSON 和音频路由问题 | 暂无明确新 fix PR |
| [ #138042 Gateway 控制请求停滞数分钟](https://github.com/openclaw/openclaw/issues/138042) | 健康检查、控制请求和历史查询长时间不可用 | 暂无明确新 fix PR |

### P2：重要但通常不立即阻断服务

- [ #180690：约 800 Agent 状态下 `doctor --fix` 发生 6 GB heap OOM](https://github.com/openclaw/openclaw/issues/180690)  
  大规模部署运维能力不足，暂未见明确修复 PR。
- [ #125308：长期会话无限增长且无法压缩](https://github.com/openclaw/openclaw/issues/125308)  
  影响长期运行成本和稳定性，暂未见明确修复 PR。
- [ #165421：Control UI 模型切换后仍显示旧 maxTokens](https://github.com/openclaw/openclaw/issues/165421)  
  主要是误导性 UI 显示，模型实际上下文未受影响。
- [ #156864：`tools.alsoAllow` 未授予 browser plugin 工具](https://github.com/openclaw/openclaw/issues/156864)  
  权限配置与运行时工具集不一致。
- [ #166137：egress proxy sentinel substitution 间歇性失效](https://github.com/openclaw/openclaw/issues/166137)  
  可能导致凭据未替换或使用旧凭据，涉及安全边界。
- [ #140723：WebChat 重试导致助手文本重复](https://github.com/openclaw/openclaw/issues/140723)  
  reasoning-only retry 会重新流式输出已发送文本。
- [ #137508：移动端键盘弹出后聊天内容遮挡](https://github.com/openclaw/openclaw/issues/137508)  
  主要影响移动端可用性。

### 稳定性判断

今日 Bug 集中在四条主线：

1. **Gateway 事件循环和后台任务阻塞**；
2. **Windows 生命周期、更新、服务管理和 WebSocket 恢复问题**；
3. **模型运行时 generation 与 Agent lane 生命周期耦合错误**；
4. **状态数据库、迁移和崩溃恢复边界条件失败**。

这些问题往往不是独立故障，可能共同造成“Gateway 不可达、消息丢失、运行时永久失效和重启失败”的连锁症状。

---

## 6. 功能请求与路线图信号

### 6.1 Agent 级成本预算

- Issue：[ #42475](https://github.com/openclaw/openclaw/issues/42475)
- 目标：
  - 每日/月度成本上限；
  - Gateway 派发前强制执行；
  - 防止多 Agent 并发造成预算失控。
- 路线判断：**高概率进入近期平台化版本规划**。  
  这是多 Agent 部署从实验走向生产必需的成本治理能力，且与现有 session cost usage 机制衔接自然。

### 6.2 内置无头浏览器

- Issue：[ #53763](https://github.com/openclaw/openclaw/issues/53763)
- 目标：
  - 提供稳定的 Chromium 浏览器工具；
  - 支持 JavaScript 页面、登录态和网页自动化；
  - 减少外部 Chrome 与多层网络依赖。
- 路线判断：**中期重要能力，可能纳入插件/浏览器体系演进**。  
  该需求已关闭，但后续仍需关注 browser plugin 的权限、登录态、安全边界和跨平台打包方式。

### 6.3 会话与主题自动命名优化

- PR：[ #174317](https://github.com/openclaw/openclaw/pull/174317)
- 目标：
  - 会话初次自动命名后，在积累一定后续消息后执行一次性重命名；
  - 支持 Telegram DM topic；
  - 默认保持 opt-in，避免额外模型调用和兼容性问题。
- 路线判断：**较可能进入下一版本候选**。  
  PR 规模较大、涉及 Gateway、CLI、Web UI 和多个渠道，但用户体验收益明确。

### 6.4 完成通知带会话标签

- PR：[ #144862](https://github.com/openclaw/openclaw/pull/144862)
- 目标：
  - 浏览器 Push 通知显示明确的会话标签；
  - 方便区分同一 Agent 下的多个会话。
- 路线判断：**适合近期合入**。  
  变更范围相对聚焦，直接改善通知可用性。

### 6.5 Gateway suspend 状态 CLI

- PR：[ #181366](https://github.com/openclaw/openclaw/pull/181366)
- 目标：
  - 对已有 `gateway.suspend.status` RPC 提供原生 CLI；
  - 查询 `running`、`draining`、`ready`、阻塞项和租约过期时间。
- 路线判断：**较可能进入运维工具版本**。  
  适合服务托管、桌面连接和自动化运维场景。

### 6.6 配置 provenance 解释

- PR：[ #181342](https://github.com/openclaw/openclaw/pull/181342)
- 目标：
  - 解释某个配置路径具体来自文件、include、环境 SecretRef 还是默认值。
- 路线判断：**可能纳入配置和诊断能力演进**。  
  对 SecretRef、include 和多环境部署尤其有价值，但需要维护者确认命令语义和脱敏边界。

### 6.7 记忆治理与重复内容报告

- Issue：[ #71330](https://github.com/openclaw/openclaw/issues/71330)
- Issue：[ #87660](https://github.com/openclaw/openclaw/issues/87660)
- PR：[ #176037](https://github.com/openclaw/openclaw/pull/176037)
- 目标：
  - 记忆提升目标文件可配置；
  - 引入记忆生命周期治理；
  - 识别重复 Markdown block 并报告文件和行号。
- 路线判断：**记忆质量与长期 Agent 运营会成为下一阶段重点**。  
  目前已有独立 PR 推进重复内容报告，整体方向较明确。

### 6.8 跨节点自动化通知

- Issue：[ #144306](https://github.com/openclaw/openclaw/issues/144306)
- 目标：
  - 允许 automations 将结果投递到 paired node；
  - 通过 Android App 接收通知。
- 路线判断：**中长期路线信号**。  
  需要定义节点权限、离线队列和通知去重，短期合入概率低于 CLI/UI 类改进。

### 6.9 Linux ARM 官方构建

- Issue：[ #138279](https://github.com/openclaw/openclaw/issues/138279)
- 目标：
  - 为 aarch64/arm64 提供 `.deb` 和 AppImage。
- 路线判断：**取决于发布资源与 CI 成本**。  
  社区需求明确，但需维护者评估签名、更新渠道和构建基础设施。

---

## 7. 用户反馈摘要

### 真实使用场景

1. **Windows 桌面和托管服务**
   - 睡眠/唤醒后重新连接 Control UI、WebChat 或 Telegram；
   - 使用 scheduled task 管理 Gateway；
   - 依赖自动更新；
   - 同时运行插件、Agent 和外部模型运行时。

2. **macOS 多用户和长期运行**
   - 通过 Tailscale Serve 暴露 Gateway；
   - 使用 Screen Sharing；
   - 在 Apple Silicon 上运行多个 Codex worker；
   - 使用本地 Gateway、SecretRef 和 macOS App。

3. **多 Agent 生产部署**
   - 数百个 Agent 配置；
   - 维护 SQLite 状态库；
   - 执行 schema 迁移；
   - 使用自动化、记忆、插件和模型 fallback。

4. **多渠道消息接入**
   - Telegram；
   - Slack；
   - Microsoft Teams；
   - Feishu；
   - Matrix；
   - WhatsApp Web；
   - Google Meet voice。

### 主要不满意点

- **升级后启动显著变慢**，尤其 Windows 用户反馈 2026.10.1 启动时间从约 410 秒升至约 1030 秒。
- **服务“看似运行但实际不可用”**：Gateway 进程存在，但控制请求、WebSocket、模型运行时或 profile RPC 已经不可用。
- **消息处理可能静默丢失**：`ask_user`、子 Agent runtime 释放、session reset、Codex final-answer recovery 都有用户消息被吞掉或只返回通用错误的反馈。
- **故障恢复依赖手动重启**：多个问题明确表示需要重启 Gateway 才能恢复。
- **文档与发布版本不一致**：[Issue #48920](https://github.com/openclaw/openclaw/issues/48920) 指出 Live Docs 已经描述尚未进入最新版本的功能。
- **插件体系和权限配置不透明**：`tools.alsoAllow`、deferred migration、operator approvals 等问题会让用户难以判断配置是否真正生效。
- **Windows 和 macOS 体验不稳定**：睡眠恢复、计划任务、SecretRef、Screen Sharing 和 Tailscale 等平台问题较多。

### 相对积极的方向

- 用户对长期记忆、可持久化图片理解、自动命名、通知区分和配置解释等能力有明确期待。
- 社区愿意通过复现、日志、证据包和多平台验证参与问题定位。
- 多个 PR 直接回应了性能、诊断、可访问性和自动化运维痛点，说明项目对用户反馈有较快的迭代响应。

---

## 8. 待处理积压

### 8.1 长期未响应或标记为 stale 的重要 Issue

1. [Issue #157531：2026.9.7 Fixes Tracker](https://github.com/openclaw/openclaw/issues/157531)  
   - 仍 OPEN 且 stale。
   - 需要逐项确认已完成、重复或仍待修复的候选项。

2. [Issue #156712：triage repair 子进程不退出](https://github.com/openclaw/openclaw/issues/156712)  
   - P0、crash-loop、manual-only。
   - 当前没有明确的新修复 PR。

3. [Issue #156674：macOS Gateway 资源压力](https://github.com/openclaw/openclaw/issues/156674)  
   - P0，涉及长生命周期 Codex worker。
   - 对低配 macOS VM 和多 Agent 场景影响较大。

4. [Issue #140085：Telegram `ask_user` 会话无限挂起](https://github.com/openclaw/openclaw/issues/140085)  
   - P0、message-loss。
   - 需要明确超时、取消和 fallback 机制。

5. [Issue #141615：WebChat profile verification wedge](https://github.com/openclaw/openclaw/issues/141615)  
   - P0，所有 profile-dependent RPC 受影响。
   - 需要避免错误状态在 Gateway 生命周期中永久化。

6. [Issue #166004：Windows scheduled-task Gateway 无法启动](https://github.com/openclaw/openclaw/issues/166004)  
   - P0，涉及服务 readiness 和更新回滚。

7. [Issue #138042：Gateway 控制请求停滞数分钟](https://github.com/openclaw/openclaw/issues/138042)  
   - P1，跨平台运行时稳定性问题，仍需进一步复现和定位。

8. [Issue #155359：Windows SQLite 长事务与冻结误报](https://github.com/openclaw/openclaw/issues/155359)  
   - P1，已有较完整证据，但需要维护者确认根因和修复方向。

9. [Issue #125308：长期会话无限增长](https://github.com/openclaw/openclaw/issues/125308)  
   - P2，直接影响长期运行成本、内存和 transcript 管理。

10. [Issue #166137：egress proxy 凭据替换失效](https://github.com/openclaw/openclaw/issues/166137)  
    - P2，涉及安全边界，即使未标记 P0，也应优先进行安全审查。

### 8.2 长期开放或等待维护者的重要 PR

1. [PR #181074：安全运行时回移](https://github.com/openclaw/openclaw/pull/181074)  
   - 等待作者/维护者处理。
   - 涉及 Node、pnpm、Alpine CA、CI 和发布流程，合并风险较高。

2. [PR #174317：自动会话和主题重命名](https://github.com/openclaw/openclaw/pull/174317)  
   - 标记为 waiting on maintainer。
   - 需要确认默认行为、模型调用成本和历史名称兼容策略。

3. [PR #112709：TaskFlow 原子取消状态](https://github.com/openclaw/openclaw/pull/112709)  
   - 自 2026-07-22 起开放，等待验证。
   - 涉及持久化状态、会话一致性和取消语义，建议尽快给出测试结论。

4. [PR #181430：键盘访问被截断的会话详情值](https://github.com/openclaw/openclaw/pull/181430)  
   - 已有截图证据，但标记为 needs proof。
   - 建议补充键盘操作、无障碍测试和合并前验证。

5. [PR #166670 相关 CI OOM 问题](https://github.com/openclaw/openclaw/issues/166670)  
   - Bun 运行环境导致 gateway-methods 测试 OOM。
   - 需要明确 Bun 是否仍属于正式支持矩阵，以及是否增加内存限制或替代测试策略。

---

## 总结

2026-10-23 的 OpenClaw 项目呈现出“**高活跃、高吞吐、高风险并存**”的态势。新版本 [v2026.10.6](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6) 通过 Node.js 安全运行时基线提升了供应链安全门槛；社区则集中反馈 Windows/macOS 生命周期问题、Gateway 阻塞、模型运行时失效、消息丢失和状态迁移异常。

从维护优先级看，建议下一阶段重点关注：

1. **先解决 P0/P1 的 Gateway 阻塞、崩溃恢复和消息丢失问题**；
2. **验证 [PR #181300](https://github.com/openclaw/openclaw/pull/181300) 等运行时恢复修复的覆盖面**；
3. **完成 Node 24.22.1+/26.12.1+ 迁移和安全依赖验证**；
4. **整理 stale tracker 与长期开放 PR，减少维护队列噪声**；
5. **在稳定性基础上推进成本预算、会话命名、配置 provenance 和记忆治理等平台化能力**。

**综合健康度：6.5/10。**  
活跃度和贡献意愿较强，版本发布与修复响应也较活跃；但核心运行时稳定性、跨平台一致性和积压管理仍明显拖累整体健康度。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析

**分析日期：2026-10-23**  
**数据口径：各项目过去 24 小时 GitHub Issue、PR 与 Release 更新。**  
需注意：“500 条更新”包含评论和状态变化，不等于当日新建数量；PR“关闭”也不必然代表已经合并。

---

## 1. 生态全景

1. **生态已进入平台化工程阶段**：竞争重点正从“Agent 能否调用模型和工具”，转向多渠道接入、多 Profile/多 Agent、权限隔离、记忆治理、成本控制、状态恢复和可观测性。  
2. **开发活跃度普遍较高，但集成吞吐分化明显**：Hermes Agent、QwenPaw、OpenClaw、OpenHuman 的 PR 更新量均达到 44–50 条，而待合并队列最高达 48 条，说明普遍存在“贡献多、评审和发布跟不上”的瓶颈。  
3. **稳定性取代功能数量成为第一优先级**：Gateway 阻塞、消息丢失、升级回归、跨会话状态错乱、渠道阻塞主进程、会话压缩失败，是多个项目的共同高风险项。  
4. **安全治理明显加强**：TLS/CA、安全运行时、凭据权限、日志脱敏、Basic Auth、工具执行 deny pattern、Profile 审批隔离，正在成为 Agent 平台的基础能力。  
5. **项目开始分化为两条路线**：一类追求多端、多渠道、大规模个人 Agent 平台，如 OpenClaw、Hermes Agent、QwenPaw；另一类更强调轻量核心、嵌入式 Runtime 和模块化基础设施，如 NanoBot、OpenHuman。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新 | 今日 PR 更新 | 今日 Release | 待合并 PR | 主要状态 | 健康度 |
|---|---:|---:|---|---:|---|---|
| **OpenClaw** | 500 | 500 | **v2026.10.6** | 229 | 极高活跃，安全与性能修复并行，但 P0/P1 密集、跨平台稳定性承压 | **6.5/10：活跃但承压** |
| **NanoBot** | 12 | 55 | 无 | 15 | WebUI、会话压缩、搜索可靠性与 CI 工程化并行推进 | **7.5/10：良好，存在稳定性风险** |
| **PicoClaw** | 0 | 10 | 无 | 9 | 功能与依赖 PR 丰富，但 7 条 stale，缺少版本交付 | **6/10：研发活跃，维护偏弱** |
| **IronClaw** | 2 | 6 | 无 | 5 | 主要进行依赖维护；模型任务质量成为主要风险信号 | **6.5/10：稳定维护，功能推进有限** |
| **LobsterAI** | 0 | 10 | 无 | 1 | 媒体任务、图片编辑、插件持久化修复活跃；历史 PR 清理明显 | **7/10：工程维护稳定** |
| **QwenPaw** | 22 | 50 | **v2.2.2.post1** | 47 | 安全修复及时，但升级回归、渠道阻塞、Hub 部署问题较多 | **6/10：高并行、高风险** |
| **Hermes Agent** | 50 | 50 | **v0.22.5** | 44 | 统一 Gateway 后进入多平台回归期；Profile 隔离和服务生命周期风险较高 | **6/10：活跃但风险偏高** |
| **OpenHuman** | 17 | 50 | 无 | 48 | 安全总线、脱敏、模块边界和异步 Shell 推进明确，但合并积压严重 | **6.5/10：趋势积极，吞吐承压** |

### 活跃度分层

- **超高活跃层**：OpenClaw、Hermes Agent、OpenHuman、QwenPaw  
- **高产出收敛层**：NanoBot  
- **稳定维护层**：LobsterAI、IronClaw  
- **低反馈、积压风险层**：PicoClaw  

### 数据观察

- **Release 节奏**：仅 OpenClaw、QwenPaw、Hermes Agent 今日有 Release，说明这三个项目更重视持续集成后的版本化交付。
- **PR 积压**：
  - OpenClaw：229 条；
  - OpenHuman：48 条；
  - QwenPaw：47 条；
  - Hermes Agent：44 条。
- **Issue 活跃度不能简单等同社区规模**：OpenClaw 的 500 条包含大量历史条目更新；但结合 Issue 数、PR 数和发布频率，仍可判断其社区与贡献者规模显著领先。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

#### 社区与吞吐领先

OpenClaw 今日记录 **500 条 Issue 更新、500 条 PR 更新**，并发布安全版本 v2026.10.6。其贡献规模、功能覆盖和用户场景数量在本次样本中明显领先，已经具备平台型项目的社区体量。

#### 功能宽度最大

项目同时覆盖：

- Telegram、Slack、Teams、Feishu、Matrix、WhatsApp Web、Google Meet 等多渠道；
- 多 Agent、子 Agent、Delegation、A2A；
- 浏览器、记忆、插件、自动化；
- Windows、macOS、Linux、Docker、npm、ARM；
- Doctor、配置 provenance、Gateway 运维和诊断。

相比 NanoBot、PicoClaw 和 LobsterAI，OpenClaw 更接近“个人 Agent 操作系统”，而非单一客户端或轻量助手框架。

#### 平台治理信号更成熟

已出现较明确的平台化能力：

- Gateway 级 Agent 成本预算；
- 会话自动命名与通知标签；
- 配置来源解释；
- 记忆生命周期治理；
- Gateway suspend status CLI；
- 子进程与插件故障隔离方向。

这些能力表明 OpenClaw 正在从功能堆叠转向资源治理和长期运营。

### 3.2 技术路线差异

| 项目 | 主要技术/产品路线 |
|---|---|
| **OpenClaw** | 多渠道 Gateway + 插件 + 多 Agent + 浏览器/记忆/自动化，强调全平台个人 Agent 操作系统 |
| **Hermes Agent** | 统一 Multiplex Gateway、多 Profile、Desktop/CLI/Bot 协同，强调跨入口 Agent Runtime |
| **QwenPaw** | 渠道插件化、子进程隔离、Hub 团队治理，强调轻量核心与可扩展生态 |
| **NanoBot** | Python Agent 核心 + WebUI + 多 Provider/Channel，强调轻量部署和快速工程迭代 |
| **OpenHuman** | Rust/模块化 tiny* 基础设施、TinySecurity 总线、嵌入式 Runtime，强调安全边界和底层复用 |
| **PicoClaw** | Go 实现、OpenAI-compatible、多渠道和轻量个人助手，强调低资源部署 |
| **LobsterAI** | 桌面端 Cowork、媒体生成、OpenClaw 集成与 artifact 体验，强调消费级工作台 |
| **IronClaw** | 办公 Agent 与评测体系，当前重点偏前端依赖维护及模型任务质量 |

### 3.3 社区规模对比

- **第一梯队：OpenClaw**  
  活动和功能覆盖明显领先，问题池规模也最大。
- **第二梯队：Hermes Agent、QwenPaw、OpenHuman**  
  均达到 50 条级 PR 更新，属于高并行开发，但维护压力较大。
- **第三梯队：NanoBot、LobsterAI**  
  约 10–55 条 PR 更新，更偏快速收敛和产品质量建设。
- **较小/低反馈层：PicoClaw、IronClaw**  
  贡献量有限，或主要依靠自动化依赖 PR。

### 3.4 OpenClaw 的主要短板

高活跃并未转化为完全健康的稳定性：

- 插件捕获可令 Gateway 阻塞数分钟；
- Windows 启动时间从约 410 秒升至约 1030 秒；
- 模型 runtime、子 Agent generation、session checkpoint 存在生命周期耦合错误；
- 多个 P0/P1 问题尚无直接修复 PR；
- 229 条待合并 PR 显示维护队列已接近平台规模瓶颈。

**判断：**OpenClaw 的优势是规模、产品宽度和社区动员能力；主要风险是复杂度和维护面已经超出单一核心团队可以线性消化的程度。

---

## 4. 共同关注的技术方向

### 4.1 Gateway 稳定性与事件循环隔离

涉及项目：**OpenClaw、Hermes Agent、QwenPaw**

- OpenClaw：插件捕获阻塞 Gateway、健康检查和控制请求数分钟无响应；
- Hermes Agent：Gateway 重启后服务中断、Desktop/CLI/TUI 会话所有权冲突；
- QwenPaw：飞书同步网络调用阻塞主事件循环，影响健康检查和退出。

**趋势判断：**渠道和插件不应直接阻塞 Agent 主循环。异步 I/O、子进程隔离、超时、熔断和健康检查将逐渐成为标准架构。

### 4.2 多 Profile / 多 Agent 隔离

涉及项目：**OpenClaw、Hermes Agent、QwenPaw、NanoBot**

- OpenClaw：Agent 级成本预算、多 Agent 生命周期；
- Hermes Agent：副 Profile 消息错投、委派任务沿用错误审批模式；
- QwenPaw：Hub 全局 Skill/MCP、成员继承与个人覆盖；
- NanoBot：Subagent 控制面、Token/成本追踪。

**关键诉求：**身份、模型、记忆、凭据、工具权限、成本和消息路由必须按 Agent/Profile 明确隔离。

### 4.3 会话状态、压缩与长期记忆治理

涉及项目：**OpenClaw、Hermes Agent、NanoBot、OpenHuman**

- OpenClaw：会话 reset、checkpoint、记忆提升和生命周期治理；
- Hermes Agent：压缩写回失败、历史会话冷恢复、WebUI 与 Bot Chat handoff；
- NanoBot：direct turn 与 idle compaction 并发竞争；
- OpenHuman：批量记忆导入单并发导致处理极慢。

**趋势判断：**会话已不再只是聊天记录，而是 Agent 的核心持久化状态。未来需要事务化压缩、可恢复 checkpoint、冷会话加载、记忆去重和用户可审计的长期记忆策略。

### 4.4 成本和资源治理

涉及项目：**OpenClaw、NanoBot、Hermes Agent**

- OpenClaw：每日/每月 Agent 级预算及 Gateway 派发前拦截；
- NanoBot：按 session、模型、Provider 统计 Token 与成本；
- Hermes Agent：跨 Gateway Agent 协作及后台任务资源管理。

**趋势判断：**Token/成本可观测性将从“附加统计信息”升级为生产部署的核心控制面，并与预算、限流和任务调度联动。

### 4.5 安全运行时与供应链治理

涉及项目：**OpenClaw、QwenPaw、PicoClaw、IronClaw、OpenHuman**

- OpenClaw：强制 Node.js 24.22.1+/26.12.1+，修复 TLS/证书链；
- QwenPaw：发布 emSign CA 安全修复版本；
- PicoClaw：升级加密、认证和模型 SDK；
- IronClaw：升级 DOMPurify、certifi；
- OpenHuman：文件权限、Basic Auth、日志脱敏和 TinySecurity 总线。

**趋势判断：**Agent 直接接触凭据、文件、浏览器和企业网络，安全基线已从普通 Web 应用提升为 Agent 平台核心能力。

### 4.6 工具调用可靠性与协议兼容

涉及项目：**所有项目**

- PicoClaw：Gemini `thought_signature` 与 OpenAI 兼容接口；
- NanoBot：DuckDuckGo 空结果和临时失败语义；
- QwenPaw：thinking 参数与 wire controls；
- OpenClaw：模型 runtime、插件迁移、上下文压缩；
- LobsterAI：Provider API 格式和 SSE 转换。

**趋势判断：**随着 Agent 大量依赖多轮工具调用，协议正确性、幂等性、错误分类和重试预算将直接影响任务成功率。

### 4.7 跨平台与升级可靠性

涉及项目：**OpenClaw、Hermes Agent、QwenPaw、IronClaw**

- Windows 启动、更新、睡眠恢复和计划任务；
- macOS LaunchAgent、Screen Sharing 和资源释放；
- Linux ARM64 / aarch64 镜像；
- 升级后配置迁移和 sidecar 完整性。

**趋势判断：**桌面 Agent 已成为跨平台产品，任何单一平台的生命周期回归都可能影响自动更新、服务常驻和用户信任。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 主要目标用户 | 关键架构特征 | 核心竞争优势 |
|---|---|---|---|---|
| **OpenClaw** | 多渠道、多 Agent、浏览器、记忆、插件、自动化 | 高阶个人用户、Agent 开发者、团队运营者 | Gateway 为中心，多渠道与插件扩展，跨平台运行 | 功能覆盖、社区规模、生态宽度 |
| **Hermes Agent** | 多 Profile、Bot、Delegation、Computer Use、桌面端 | 高级个人用户、多 Bot/多机器用户 | 统一 Multiplex Gateway，Desktop/CLI/Channel 协同 | 跨入口体验、Bot 与 Profile 协作 |
| **QwenPaw** | 渠道、Hub 团队治理、插件、记忆和办公工具 | 个人用户、团队、教育及企业部署 | 渠道插件化、子进程隔离、Hub 管理 | 插件架构、团队资源治理、安全修复响应 |
| **NanoBot** | 轻量 Agent、WebUI、Channel、多 Provider | 个人开发者、Python 用户、快速部署用户 | Python 核心、WebUI、SDK/CLI direct turn | 低门槛、轻量迭代、工具语义修复 |
| **OpenHuman** | 嵌入式 Agent、Shell、MCP、安全策略和持久化 | 平台开发者、基础设施团队、安全敏感用户 | Rust tiny* 模块、嵌入式 Runtime、TinySecurity 总线 | 模块化、安全边界、底层复用 |
| **PicoClaw** | QQ、多媒体、OpenAI-compatible Provider | 低资源部署用户、中文渠道用户 | Go 轻量实现 | 低资源、部署简单、渠道特色 |
| **LobsterAI** | Cowork、媒体生成、图片编辑、artifact | 桌面端个人用户和内容创作者 | Electron/renderer 桌面工作台 | 消费级 UX、多媒体和 OpenClaw 集成 |
| **IronClaw** | 办公任务、Agent 质量评测 | 企业办公与评测团队 | 桌面/Web 工具链和 officeqa | 办公任务评测、模型质量分析 |

### 架构层面的关键分界

1. **Gateway 中心型**：OpenClaw、Hermes Agent  
   适合长期运行和多入口，但 Gateway 生命周期与会话所有权成为关键风险。

2. **插件化平台型**：QwenPaw、OpenClaw  
   扩展性强，但需要处理插件协议、版本兼容、权限和升级迁移。

3. **轻量运行时型**：NanoBot、PicoClaw  
   部署成本低，但功能边界和长期运维能力弱于大型平台。

4. **嵌入式与基础设施型**：OpenHuman  
   更适合作为 Agent SDK/运行时底座，而非开箱即用的个人助手。

5. **桌面工作台型**：LobsterAI、IronClaw  
   面向最终用户交互和任务完成体验，底层平台能力更多依赖外部组件。

---

## 6. 社区热度与成熟度

### 第一层：高活跃、高风险平台

#### OpenClaw、Hermes Agent

- PR 和 Issue 更新规模最高；
- 有正式版本发布；
- 多平台、多 Profile、多渠道架构复杂；
- 当前主要矛盾不是缺少功能，而是稳定性、兼容性和维护吞吐。

**阶段：**快速迭代后期，已进入质量巩固前的架构收敛期。

#### QwenPaw

- 50 条 PR、47 条待合并；
- 发布安全修复版本；
- 插件化和 Hub 团队化路线明确；
- 升级回归与渠道阻塞问题仍然突出。

**阶段：**高并行架构演进期，尚未完全进入稳定交付阶段。

### 第二层：工程化质量巩固

#### NanoBot

- 55 条 PR，高于 Issue 数量；
- 重点处理会话压缩、搜索错误、状态同步和 CI；
- 功能扩展与工程治理并行。

**阶段：**从快速功能开发向产品化和可靠性建设过渡，质量基础相对较好。

#### LobsterAI

- PR 处理率高，主要集中在媒体生命周期、桌面稳定性和插件持久化；
- 但缺少当日 Issue 和版本信号。

**阶段：**产品体验稳定维护期，历史 PR 清理是主要管理任务。

### 第三层：低反馈维护或交付积压

#### PicoClaw

- 9 条待处理 PR，其中 7 条 stale；
- 无 Issue、无 Release；
- 研发活动存在，但评审闭环不足。

**阶段：**低反馈维护期，需防止有价值修复长期滞留。

#### IronClaw

- 主要由 Dependabot PR 驱动；
- Agent 真实任务质量是潜在核心风险；
- 版本发布和功能交付信号弱。

**阶段：**稳定维护期，但需警惕“基础设施正常、实际任务成功率不足”。

#### OpenHuman

虽然 PR 积压高，但技术方向清晰：

- 安全总线；
- 日志脱敏；
- 模块边界清理；
- Shell 非阻塞；
- Sentry 治理。

**阶段：**架构重构与安全加固期；若提升合并和发布吞吐，潜力较高。

---

## 7. 值得关注的趋势信号

### 7.1 Agent 平台正在形成类似“操作系统”的控制面

未来竞争维度将包括：

- Session/Profile/Bot 生命周期；
- 权限与审批；
- 资源配额；
- 插件与工具注册；
- 日志、追踪与审计；
- 状态迁移、备份和恢复。

开发者应避免只建设模型调用层，而要提前设计统一的身份、状态、工具和资源治理模型。

### 7.2 “统一入口”正在让位于“统一状态模型”

Desktop、CLI、WebUI、Telegram 和插件都争抢同一 Agent 的控制权，带来重复处理和所有权冲突。真正关键的不是让所有客户端连接到同一个进程，而是建立：

- 唯一 Session ID；
- 明确 Owner；
- 租约和心跳；
- 冷加载与持久化索引；
- 幂等消息处理；
- 可恢复的来源映射。

### 7.3 权限隔离将成为多 Agent 产品的核心卖点

Hermes Agent 的 Profile 错投和审批模式继承、QwenPaw 的 Hub 权限设计、OpenHuman 的 TinySecurity、OpenClaw 的 SecretRef 和 egress proxy，都说明下一阶段竞争重点是：

> “Agent 能否在正确身份、正确租户、正确权限和正确成本预算下完成任务。”

仅仅能调用工具已不足以构成生产竞争力。

### 7.4 稳定性问题会成为 AI Agent 产品的首要用户流失点

用户对 AI 助手失去信任，往往不是因为模型回答不够聪明，而是因为：

- 消息静默丢失；
- 压缩后内容消失；
- 服务进程存在但实际不可用；
- 升级后配置失效；
- 操作作用于错误会话或 Profile；
- 任务长期卡住且没有状态。

因此，**可恢复性、可解释性和失败可见性**应优先于新增工具数量。

### 7.5 长上下文不能替代记忆治理

多个项目都面临会话无限增长、媒体重复上传、压缩竞争和记忆污染。未来 Agent 记忆体系需要：

- 分层存储；
- Token 预算；
- 去重和生命周期；
- 媒体引用而非重复传输；
- 可恢复压缩；
- 用户可查看、删除和禁止保存；
- 后台审查的硬隐私约束。

### 7.6 安全供应链将持续收紧

Node、CA、DOMPurify、certifi、Anthropic SDK、加密库等更新表明 Agent 已深度进入高权限执行环境。开发者应将以下内容纳入发布门槛：

- 运行时和依赖签名；
- TLS/CA 兼容测试；
- 凭据文件权限；
- 日志与错误脱敏；
- 工具参数隐藏；
- 出站代理和 SecretRef；
- 依赖许可证与供应链来源。

### 7.7 成本治理将成为个人 Agent 的默认能力

多 Agent、后台任务、Computer Use 和长上下文会快速放大费用。成本预算应至少具备：

- Session/Profile/Agent 多级预算；
- 模型和 Provider 成本归因；
- 调用前预算检查；
- 循环和重试预算；
- 压缩前后 Token 统计；
- 异常费用告警；
- 用户可见的历史账单估算。

### 7.8 对开发者的直接建议

1. **优先建设状态与恢复机制**：包括 checkpoint、租约、幂等和冷启动加载。  
2. **默认所有工具调用不可信**：显式限制命令、路径、网络、凭据和租户。  
3. **将渠道适配器与主循环隔离**：同步 SDK 和网络 I/O 不应阻塞健康检查。  
4. **为 Profile 和子 Agent 建立强隔离测试**：尤其是消息、审批、记忆和凭据。  
5. **不要在日志中输出原始工具参数与 Provider 错误**。  
6. **为升级流程提供迁移与回滚测试**：覆盖旧会话、旧配置、sidecar 和渠道运行时。  
7. **把成本、压缩和工具重试纳入可观测性体系**：仅统计调用次数已不足以支撑生产运营。

---

## 结论

2026-10-23 的生态状态可以概括为：

> **功能扩张仍然活跃，但行业竞争焦点正在从“Agent 能做什么”转向“Agent 能否长期、稳定、安全、可治理地完成任务”。**

其中：

- **OpenClaw** 继续以最大社区规模和最宽功能面保持领先，但已承担平台级稳定性与维护压力；
- **Hermes Agent、QwenPaw** 正在推进统一 Gateway、插件化和团队治理，但架构回归风险较高；
- **NanoBot** 展现出较好的工程收敛能力；
- **OpenHuman** 的安全与模块化方向最具基础技术潜力，但需要解决 PR 和发布积压；
- **PicoClaw、IronClaw、LobsterAI** 分别在轻量部署、办公质量或桌面体验上形成差异化，但社区和交付信号相对较弱。

对技术决策者而言，当前最值得投入的并非再增加一个普通工具，而是围绕 **身份、权限、状态、成本、恢复和可观测性** 建立可持续的 Agent 平台基础。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-10-23**  
**数据范围：过去 24 小时**  
**项目健康度评估：活跃且高吞吐，工程推进明显，但合并与问题收敛速度不完全匹配，当前健康度评为“良好，存在稳定性与积压风险”**

---

## 1. 今日速览

过去 24 小时 NanoBot 共更新 **12 条 Issues**、**55 条 PR**，其中 Issues **新开/活跃 3 条、关闭 9 条**，PR **待合并 15 条、已合并/关闭 40 条**，整体吞吐量较高，说明项目正处于持续集成和密集修复阶段。今日没有新版本发布，但 WebUI、Agent 会话压缩、搜索工具、Provider 支持、CI 稳定性等方向均有实质推进。  
Issue 关闭率约为 **75%**，PR 已合并/关闭比例约为 **73%**，维护者对存量问题的清理速度较快；不过仍有 **15 条 PR 待合并**，部分长期 PR 已标注冲突或处于开放状态。  
今日最值得关注的技术主线是：**后台压缩与 direct turn 的并发安全、WebUI 实时状态同步、搜索失败语义修正、工具结果预算控制，以及多渠道群聊交互策略**。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此暂无版本升级说明、破坏性变更或迁移注意事项。

不过，从近期合并方向看，项目正在积累多项可能影响后续版本的行为变化，建议用户在下一版本发布前重点关注：

- 会话历史与 Agent workspace 的存储隔离；
- 空闲会话压缩触发时机；
- WebUI 任务状态是否改为后端权威；
- DuckDuckGo 搜索失败与空结果的区别；
- Matrix 群聊 `listen` 策略；
- `tools.exec.denyPatterns` 在 Full Access 模式下的实际约束范围。

---

## 3. 项目进展

### 3.1 Agent 空闲压缩与 direct turn 并发安全

今日最集中、最具稳定性意义的进展是修复 Agent 空闲压缩可能与正在执行的 direct turn 发生竞争的问题。

- [#6214](https://github.com/HKUDS/nanobot/issues/6214) 已关闭  
  报告指出，`process_direct` 路径可能不会写入 `_pending_queues`，导致正在运行的 turn 被误判为空闲。相关 PR [#6221](https://github.com/HKUDS/nanobot/pull/6221) 已合并，修复了并发压缩覆盖 transcript/checkpoint 的核心问题。

- [#6410](https://github.com/HKUDS/nanobot/issues/6410) 新开放  
  虽然前一个并发覆盖问题已修复，但新的 Issue 指出：一个长时间运行的 `process_direct()` turn 完成后，空闲压缩可能立即执行，而没有重新等待一个完整的 idle interval。

- [#6405](https://github.com/HKUDS/nanobot/pull/6405) 当前开放  
  目标是让空闲扫描避开正在执行的 direct turn，预计通过显式跟踪 in-flight direct sessions，防止长 turn 被错误选为压缩候选。

**项目意义：**  
这组工作将 Agent 的会话生命周期管理从“依赖 pending queue 的间接判断”推进到“显式区分 direct 与 queued turn”的更可靠模型，有助于避免会话历史丢失、压缩时机过早和状态竞争。

---

### 3.2 DuckDuckGo 搜索失败语义与重试机制

围绕 [#6285](https://github.com/HKUDS/nanobot/issues/6285) 的多个修复 PR 在今日集中收敛。

- [#6331](https://github.com/HKUDS/nanobot/pull/6331)：为 DuckDuckGo 增加退避重试，并区分限流拒绝与真正的空结果。
- [#6300](https://github.com/HKUDS/nanobot/pull/6300)：对限流或反爬拒绝增加一次重试。
- [#6290](https://github.com/HKUDS/nanobot/pull/6290)：为 DuckDuckGo 异常增加有上限的指数退避。
- [#6409](https://github.com/HKUDS/nanobot/pull/6409)：进一步将不确定的 `ddgs` 失败报告为“搜索服务不可用”，避免误报为“没有结果”。
- [#6285](https://github.com/HKUDS/nanobot/issues/6285) 已关闭。

**项目意义：**  
此次修复不只增加重试，还修正了错误语义。此前 `DDGSException("No results found.")` 可能同时表示真实无结果、上游限流、反爬、空解析或聚合失败，容易导致 Agent 错误地改变后续计划。现在项目开始区分：

- 确实没有结果；
- 搜索暂时失败；
- 搜索结果存在但解析/聚合异常。

这类改动对自动化 Agent 的可靠性影响较大。

---

### 3.3 WebUI 消息编辑与任务状态一致性

WebUI 是今日最活跃的功能方向之一。

- [#6323](https://github.com/HKUDS/nanobot/pull/6323) 当前开放  
  支持在同一 session 内编辑并重新发送用户消息：保留目标消息之前的历史，替换目标消息及其后缀，并在同一会话中生成新回复。

- [#6337](https://github.com/HKUDS/nanobot/pull/6337) 当前开放  
  修复刷新、重连或切换 topic 后，侧边栏与 Composer 对任务是否仍在运行的判断不一致问题，改为以后端任务状态为权威来源。

- [#6401](https://github.com/HKUDS/nanobot/pull/6401) 当前开放，优先级 P1  
  将 WebUI 轮询替换为 Gateway invalidation，减少对 pairing request、channel status、automation、usage 和 remote connection 的重复读取。

- [#6408](https://github.com/HKUDS/nanobot/pull/6408) 已关闭  
  修复粘贴路径探测时，尚未完成输入或暂时不存在的路径反复显示错误提示的问题。

- [#6403](https://github.com/HKUDS/nanobot/pull/6403) 已关闭  
  优化分段指示器动画，减少动画期间对 `width` 的修改，降低布局开销。

- [#6256](https://github.com/HKUDS/nanobot/pull/6256) 当前开放  
  为 WebUI 输入区域增加紧凑的工作区工具栏，改善窄屏下权限、工作区和输入操作之间的布局竞争。

**项目意义：**  
WebUI 正从“前端缓存状态 + 定时轮询”向“后端权威状态 + 事件驱动刷新”演进，同时补齐消息纠错、编辑重发和任务状态一致性等核心用户体验。

---

### 3.4 Provider 与模型兼容性

- [#6360](https://github.com/HKUDS/nanobot/pull/6360) 已关闭  
  为 MiniMax 增加 `MiniMax-M3.1-Flash` 元数据支持，并调整 reasoning 配置，避免 `reasoning_split=false` 导致能力或参数处理异常。

- [#6025](https://github.com/HKUDS/nanobot/pull/6025) 已关闭  
  修复 TUI 在 Kitty 键盘协议下使用小键盘 Enter 无法提交的问题。验证结果显示 TUI 测试套件通过 257 项测试。

- [#5653](https://github.com/HKUDS/nanobot/pull/5653) 仍开放且存在冲突  
  试图在 Full Access 模式下继续执行 `tools.exec.denyPatterns`，并采用大小写不敏感匹配。这是安全语义的重要变更，但仍需解决合并冲突并明确配置优先级。

**项目意义：**  
Provider 兼容性和终端输入兼容性继续完善，但 MiniMax 新模型相关 PR 已关闭，需确认相关支持是否已进入主线，或是否因维护分支、配置调整而未发布。

---

### 3.5 CI 与测试稳定性

- [#6395](https://github.com/HKUDS/nanobot/pull/6395) 已关闭  
  尝试复用隔离的 pip seed，并并行化 native acceptance 测试，以缩短 CI 关键路径。摘要指出当前 main 的集成环境仍暴露时序敏感问题。

- [#6402](https://github.com/HKUDS/nanobot/pull/6402) 已关闭  
  修复 Test Suite 的并发隔离问题。此前仅按 workflow 和 ref 并发控制，重新运行旧 SHA 时可能误取消新提交的检查。

**项目意义：**  
项目开始系统性治理 CI 的可重复性、并发隔离和耗时问题。这类改进未必直接体现在用户功能上，但会显著提升后续 PR 的验证可靠性和合并速度。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

#### [#2020 Simple usage logging for token/cost tracking](https://github.com/HKUDS/nanobot/issues/2020)

- 评论数：5
- 状态：已关闭
- 标签：`good first issue`、`feature request`

这是今日评论数最高的 Issue。用户希望获得简单的 token 使用量与成本追踪能力，尤其是在使用自定义 gateway 或付费 API Provider 时，现有 session 文件只保存对话内容，没有保存 API 返回的 usage metadata。

**背后诉求：**

- 估算每个会话、模型和 Provider 的 token 消耗；
- 将 token 使用量转换为实际成本；
- 支持自定义 API 网关；
- 为预算控制、账单核对和运营分析提供基础数据。

相关 Issue [#1193](https://github.com/HKUDS/nanobot/issues/1193) 和 [#2149](https://github.com/HKUDS/nanobot/issues/2149) 也均已关闭，说明 token/cost tracking 是社区持续关注但当前尚未形成统一实现方案的主题。

---

#### [#1006 Control plane MVP for subagents](https://github.com/HKUDS/nanobot/issues/1006)

- 评论数：4
- 状态：已关闭，标记为 stale

用户希望增加 Subagent 控制面，至少支持：

- 查看当前运行的 subagent；
- 查看任务状态和归属 session；
- 终止错误、失控或不再需要的 subagent。

**背后诉求：**  
当前 Subagent 更偏向“spawn + completion callback”，缺少 operator 侧的可见性和干预能力。随着多 Agent 执行场景扩大，控制面可能成为必要基础设施。不过该 Issue 因 stale 关闭，后续是否重启路线仍不明确。

---

#### [#6285 web_search DuckDuckGo ambiguous failures](https://github.com/HKUDS/nanobot/issues/6285)

- 评论数：3
- 状态：已关闭

用户反馈同一 turn 内连续调用默认 `web_search` 时，DuckDuckGo 返回类似：

> DuckDuckGo search failed (No results found.)

但实际上可能是限流、反爬或临时失败，而不是真正的零结果。

**背后诉求：**

- Agent 不应把临时搜索失败误判为“没有资料”；
- 搜索工具应具备重试与退避能力；
- 错误信息应帮助模型决定是否换关键词、换 Provider 或稍后重试。

该问题已通过多个 PR 收敛，说明社区反馈直接推动了搜索可靠性改进。

---

### 4.2 重点关注的开放 PR

#### [#6401 WebUI invalidation 替代 idle polling](https://github.com/HKUDS/nanobot/pull/6401)

优先级 P1，涉及 WebUI 性能、架构和实时同步。虽然没有评论数据，但它是今日最值得关注的开放 PR 之一。核心方向是用 Gateway 主动失效通知替代多个页面轮询，预计可降低服务端负载并改善状态变化延迟。

#### [#6405 修复 direct turn 与 idle compaction 的竞争](https://github.com/HKUDS/nanobot/pull/6405)

该 PR 直接对应 [#6214](https://github.com/HKUDS/nanobot/issues/6214) 和 [#6410](https://github.com/HKUDS/nanobot/issues/6410) 暴露的稳定性问题。若合入，将完善 API Server、SDK 和 single-shot CLI 使用 direct 路径时的会话保护机制。

#### [#5653 Full Access 下执行 denyPatterns](https://github.com/HKUDS/nanobot/pull/5653)

该 PR 聚焦执行安全。由于已经存在冲突且持续开放，说明维护者尚未最终确定 deny pattern 在 Full Access 模式下的产品语义，建议列为安全审查重点。

---

## 5. Bug 与稳定性

以下按严重程度和影响范围排序。

### P0/P1：可能造成会话数据损坏或错误压缩

#### 1. direct turn 期间发生空闲压缩

- [#6214](https://github.com/HKUDS/nanobot/issues/6214)：已关闭  
- [#6410](https://github.com/HKUDS/nanobot/issues/6410)：开放  
- [#6405](https://github.com/HKUDS/nanobot/pull/6405)：开放

**影响：**  
可能导致正在执行的会话被错误压缩，出现 transcript/checkpoint 覆盖、消息丢失或压缩时机过早。

**状态：**  
原始并发覆盖问题已有修复 PR [#6221](https://github.com/HKUDS/nanobot/pull/6221)，但 direct turn 完成后缺少 fresh idle interval 的后续问题仍待 [#6405](https://github.com/HKUDS/nanobot/pull/6405) 处理。

---

#### 2. Full Access 绕过 exec deny patterns

- [#5653](https://github.com/HKUDS/nanobot/pull/5653)：开放，存在冲突

**影响：**  
用户配置的 `tools.exec.denyPatterns` 在 Full Access 模式下可能无法生效，涉及命令执行安全和用户权限预期。

**状态：**  
已有修复 PR，但尚未合并；需要明确 Full Access 是否仍应遵守 deny patterns，以及大小写、别名和路径规范化策略。

---

### P1/P2：任务状态错误与搜索结果误判

#### 3. WebUI 刷新/重连后任务状态不一致

- [#6337](https://github.com/HKUDS/nanobot/pull/6337)：开放

**影响：**  
前端可能显示任务仍在运行，而后端已经结束；也可能后端仍在执行，前端却允许用户重复发送，造成重复任务或状态混乱。

**状态：**  
已有针对性 fix PR，尚未合并。

---

#### 4. DuckDuckGo 失败被误报为空结果

- [#6285](https://github.com/HKUDS/nanobot/issues/6285)：已关闭
- [#6331](https://github.com/HKUDS/nanobot/pull/6331)：已关闭
- [#6300](https://github.com/HKUDS/nanobot/pull/6300)：已关闭
- [#6290](https://github.com/HKUDS/nanobot/pull/6290)：已关闭
- [#6409](https://github.com/HKUDS/nanobot/pull/6409)：已关闭

**影响：**  
Agent 可能基于错误结论停止检索、改变策略或向用户报告不存在的信息。

**状态：**  
已有多条修复方案完成或关闭，当前重点已从“是否重试”转向“如何准确表达不确定性”。

---

### P2：功能回归与 WebUI 体验问题

#### 5. 大型 `read_file` 工具结果导致 turn 中止

- [#6404](https://github.com/HKUDS/nanobot/pull/6404)：开放

大型工具结果可能在上下文压缩后超过 post-accept budget，导致整个 Agent turn 中断。该问题与工具结果豁免、压缩后预算重算和超长文件读取有关。

#### 6. iOS PWA standalone 模式顶部渲染发白

- [#5772](https://github.com/HKUDS/nanobot/issues/5772)：已关闭

问题涉及 iOS standalone PWA 顶部工具栏和消息区域的透明度/模糊效果，属于前端显示兼容性 Bug。

#### 7. WebUI 压缩提示无法说明触发原因

- [#6370](https://github.com/HKUDS/nanobot/issues/6370)：已关闭

后台空闲压缩与上下文窗口压力压缩在 WebUI 中显示相同，用户无法判断压缩原因。当前事件模型缺少足够的 reason 字段。

#### 8. 粘贴路径探测产生持续错误提示

- [#6408](https://github.com/HKUDS/nanobot/pull/6408)：已关闭

用户尚未完成路径粘贴或路径暂时不可访问时，WebUI 会显示持续的错误状态，造成输入干扰。

---

## 6. 功能请求与路线图信号

### 6.1 Token 与成本追踪

- [#2020](https://github.com/HKUDS/nanobot/issues/2020)
- [#1193](https://github.com/HKUDS/nanobot/issues/1193)
- [#2149](https://github.com/HKUDS/nanobot/issues/2149)

这是今日最明确、且被多个 Issue 重复提出的路线图信号。建议下一阶段考虑：

- 从 Provider API 响应中持久化 usage metadata；
- 对不支持 usage 的 Provider 提供统一 fallback；
- 支持按模型、Provider、session、channel 统计；
- 将成本估算与实际账单区分；
- 为压缩决策提供更准确的 token 输入依据。

虽然相关 Issue 已关闭，但从社区诉求看，这一能力仍可能成为后续版本的重要功能。

---

### 6.2 群聊“观察但不回复”策略

- [#6079](https://github.com/HKUDS/nanobot/issues/6079)
- [#6289](https://github.com/HKUDS/nanobot/pull/6289)

用户希望区分：

1. 收到群消息；
2. 判断是否与 Agent 相关；
3. 交给主 Agent 处理；
4. 决定是否实际发送回复。

Matrix PR [#6289](https://github.com/HKUDS/nanobot/pull/6289) 提出 `listen` 策略：Agent 可以读取整个房间，但只有被提及时才回复。这适合群聊中的长期上下文积累和被动知识助手场景。

**路线判断：**  
该能力与 WebUI、Channel 管理和多 Agent 协作方向一致，具有较高产品价值。若行为定义和权限边界清晰，可能进入下一阶段版本。

---

### 6.3 DeepSeek Web Search 工具配置支持

- [#6407](https://github.com/HKUDS/nanobot/issues/6407)

用户询问如何启用 DeepSeek 的 Web Search 工具，并提供了 DeepSeek 搜索 API 文档。

**路线判断：**  
当前更像文档、Provider 配置或渠道适配需求，而非单纯功能开发。建议下一版本补充：

- Provider 与工具能力配置示例；
- 不同 API 网关下的 web search 开关说明；
- 官方搜索 API 与本地 `web_search` 工具的能力边界；
- 常见错误排查文档。

---

### 6.4 Subagent 控制面

- [#1006](https://github.com/HKUDS/nanobot/issues/1006)

尽管 Issue 已因 stale 关闭，但 list/kill subagent 的需求仍然适用于：

- 长任务运维；
- 失控任务中止；
- 多 Agent 并发监控；
- Agent 资源与权限审计。

目前没有对应的开放实现 PR，暂列中期路线，不建议直接判断为近期版本承诺。

---

### 6.5 WebUI 同 session 编辑重发

- [#6323](https://github.com/HKUDS/nanobot/pull/6323)

用户希望在修正已发送消息时，不创建新的 sidebar topic，而是在原 session 内替换消息及其后续内容并重新生成回复。

**路线判断：**  
这是一个明确改善对话可控性和上下文纠错的 UX 功能，已有较完整实现。若测试和交互细节通过，可能纳入下一版本 WebUI 更新。

---

## 7. 用户反馈摘要

### 7.1 最强烈的用户痛点：成本不可见

多个用户围绕 token usage 和 cost tracking 提交反馈，核心不是缺少聊天功能，而是无法回答：

- 这次任务用了多少 token？
- 哪个模型或 Provider 花费最高？
- 压缩前后的真实上下文成本是多少？
- 自定义 gateway 的 API 账单如何核对？

这表明 NanoBot 正在从个人实验工具向可持续运行的个人 AI 助手平台演进，成本可观测性会越来越重要。

---

### 7.2 搜索结果可靠性不足

用户在连续调用 DuckDuckGo 搜索时遇到“没有结果”的误导性错误。其实际使用痛点是 Agent 可能在搜索服务暂时不可用时做出错误决策。

社区诉求集中于：

- 自动重试；
- 指数退避；
- 限流与反爬识别；
- 区分空结果和搜索失败；
- 更清晰的错误可观测性。

---

### 7.3 群聊中“回复策略”不够灵活

群聊用户希望 Agent 不仅支持“开启后全部回复”或“关闭后全部忽略”，而是能够：

- 阅读群上下文；
- 不主动打扰；
- 被提及时再响应；
- 对不同消息类型采用不同处理策略。

这体现了 Agent 从一对一助手向“具备社交边界的群聊参与者”演进的明确需求。

---

### 7.4 WebUI 状态与交互反馈仍不够稳定

用户反馈集中在：

- 页面刷新后任务状态错误；
- 重连或切换 topic 后状态不同步；
- 粘贴路径时错误提示干扰输入；
- iOS PWA 顶部显示异常；
- 压缩过程无法显示触发原因。

总体说明 WebUI 功能增长较快，但前端状态管理、错误恢复和跨设备一致性仍处于快速补齐阶段。

---

## 8. 待处理积压

### 8.1 长时间开放且存在冲突的 PR

#### [#5653 Full Access 下执行 denyPatterns](https://github.com/HKUDS/nanobot/pull/5653)

- 开放时间较长；
- 当前存在合并冲突；
- 涉及安全语义。

**建议：**  
维护者应尽快决定 Full Access 与 deny patterns 的优先级，并明确是否需要新的权限等级或 warning-only 模式。

#### [#6043 preserve edits made while settings are saving](https://github.com/HKUDS/nanobot/pull/6043)

- 仍开放；
- 标记为冲突；
- 涉及设置保存期间的用户编辑保护。

**建议：**  
该问题会造成用户配置被异步响应覆盖，建议优先解决冲突并安排回归测试。

---

### 8.2 当前仍有 15 条 PR 待合并

今日 PR 更新量达到 55 条，但仍有 15 条开放，说明合并队列存在一定积压。建议维护者按以下顺序处理：

1. **稳定性与安全**
   - [#6405](https://github.com/HKUDS/nanobot/pull/6405)
   - [#5653](https://github.com/HKUDS/nanobot/pull/5653)
   - [#6404](https://github.com/HKUDS/nanobot/pull/6404)

2. **WebUI 状态与交互**
   - [#6401](https://github.com/HKUDS/nanobot/pull/6401)
   - [#6337](https://github.com/HKUDS/nanobot/pull/6337)
   - [#6323](https://github.com/HKUDS/nanobot/pull/6323)

3. **功能扩展**
   - [#6289](https://github.com/HKUDS/nanobot/pull/6289)
   - [#6256](https://github.com/HKUDS/nanobot/pull/6256)

---

### 8.3 已关闭但可能需要重新评估的需求

#### Token/cost tracking

- [#2020](https://github.com/HKUDS/nanobot/issues/2020)
- [#1193](https://github.com/HKUDS/nanobot/issues/1193)
- [#2149](https://github.com/HKUDS/nanobot/issues/2149)

这些 Issue 虽然已经关闭，但反映的是长期产品诉求。建议在 roadmap 中明确标记为“暂不实现、待重新评估或已由替代方案覆盖”，避免用户重复提交。

#### Subagent 控制面

- [#1006](https://github.com/HKUDS/nanobot/issues/1006)

该需求因 stale 关闭，但与当前 Subagent 和 Agent 运维方向仍然相关。建议至少在文档中说明当前 MVP 边界，或重新开放为 roadmap 项。

---

## 总体结论

NanoBot 今日呈现出**高活跃、高产出、快速收敛问题**的特征。PR 数量明显高于 Issue 数量，且大量工作集中在测试、CI、Provider 和 WebUI 细节，说明项目正在从核心功能开发逐步过渡到**工程化、产品化和稳定性建设阶段**。

当前最需要关注的不是功能数量，而是以下三个风险点：

1. **Agent 会话压缩与 direct turn 的边界是否彻底稳定；**
2. **执行权限 deny patterns 在 Full Access 模式下是否真正可靠；**
3. **WebUI 是否能够完全以后端状态为权威，避免刷新、重连和任务切换造成状态错乱。**

如果上述问题在未来版本发布前完成收敛，NanoBot 的项目健康度可进一步提升；当前综合评价为：**活跃度 高，工程质量 中上，稳定性 中高，社区需求清晰，但合并队列和长期 Issue 仍需持续治理。**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-10-23**  
**统计范围：过去 24 小时 GitHub 数据**

## 1. 今日速览

- 过去 24 小时 **Issues 更新为 0 条**，没有新开或活跃 Issue，也没有已关闭 Issue，用户侧讨论和缺陷反馈处于静默状态。
- 过去 24 小时共有 **10 条 PR 更新**，其中 **1 条已关闭、9 条仍待处理**；当前待处理项中有 **7 条标记为 `stale`**，显示部分协作流程可能存在维护响应不足的问题。
- 今日没有新版本发布，项目当前主要围绕 **QQ 多媒体消息能力、模型供应商扩展、工具反馈隐私控制，以及 OpenAI 兼容接口兼容性修复** 推进。
- 今日没有公开评论或点赞数据，无法据此判断社区讨论热度；从 PR 数量和主题分布看，开发活动主要集中在功能增强与依赖维护。
- 综合评估：**项目功能开发保持活跃，但 PR 处理积压和 stale 标记较多，版本交付与维护响应健康度偏弱**。由于缺少 CI、测试结果及 Issue 数据，无法进一步确认代码质量趋势。

---

## 3. 项目进展

### 已关闭或合并的 PR

#### [#1227 feat(qq): QQ Channel 支持直接推送本地图片和文件](https://github.com/sipeed/picoclaw/pull/1227)

- **状态：已关闭**
- **方向：** QQ Channel、多媒体消息、Go
- **内容：** 支持将本地图片、文件等多媒体资源直接推送到 QQ Channels，无需依赖外部图床或文件托管服务。
- **潜在价值：**
  - 降低 QQ 渠道多媒体消息的接入复杂度；
  - 减少对外部图片托管服务的依赖；
  - 有利于本地文件自动化处理、机器人媒体转发等场景。
- **注意事项：** 该 PR 当前显示为“已关闭”，数据中未说明是已合并、作者主动关闭还是其他原因，因此不能将其直接视为已发布能力。

### 其他待合并 PR 所体现的推进方向

以下 PR 尚未合并，属于当前项目的主要待处理事项：

- [#3431 feat(provider): 增加 Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)  
  计划新增 OpenAI 兼容供应商 `standardcompute`，扩展模型服务接入选择。该 PR 标记为 stale，后续应优先确认维护者是否接受该供应商及配置方案。

- [#3429 feat: 允许隐藏工具反馈参数](https://github.com/sipeed/picoclaw/pull/3429) 与 [#3430 feat(web): 暴露工具反馈参数隐藏设置](https://github.com/sipeed/picoclaw/pull/3430)  
  两项变更配套推进：在保留工具名称和执行说明的同时隐藏序列化参数，并在 Web UI 中提供配置开关。这反映出项目对工具调用可读性、隐私和界面可控性的关注。

- [#3428 fix(openai_compat): 处理 Gemini `thought_signature`](https://github.com/sipeed/picoclaw/pull/3428)  
  面向 Gemini 3 工具调用场景，尝试解决 OpenAI 兼容接口在连续工具调用时出现 `400 INVALID_ARGUMENT` 的问题。该变更聚焦多轮工具调用的协议兼容性和稳定性。

- [#3436 升级 `go.mau.fi/util`](https://github.com/sipeed/picoclaw/pull/3436)
- [#3435 升级 Azure `azidentity`](https://github.com/sipeed/picoclaw/pull/3435)
- [#3434 升级 `gronx`](https://github.com/sipeed/picoclaw/pull/3434)
- [#3433 升级 `golang.org/x/crypto`](https://github.com/sipeed/picoclaw/pull/3433)
- [#3432 升级 Anthropic Go SDK](https://github.com/sipeed/picoclaw/pull/3432)  
  以上均为 Dependabot 依赖升级 PR，涉及认证、加密库、SDK 和通用工具包等关键基础组件。其中 `golang.org/x/crypto` 与 Azure 身份认证 SDK 的升级尤其需要关注兼容性、安全性和回归测试结果。

**整体进展判断：**  
今日没有明确的新版本交付，已关闭的重要功能 PR 也无法确认是否已经进入主干。项目仍有多项有实际价值的功能和修复等待整合，但 9 条待处理 PR、其中 7 条 stale，说明推进速度受到评审和维护响应限制。

---

## 4. 社区热点

过去 24 小时没有 Issue 更新，也没有提供 PR 评论数、点赞数或评审讨论数据，因此无法客观评选“今日讨论最活跃”的条目。基于主题相关性和潜在影响，可重点关注以下 PR：

1. [#3428 Gemini `thought_signature` 兼容性修复](https://github.com/sipeed/picoclaw/pull/3428)  
   直接关系到 Gemini 3 与 OpenAI 兼容接口下的工具调用连续性，可能影响依赖 Gemini 工具调用、函数调用和多轮对话的用户。

2. [#3429 / #3430 工具反馈参数隐藏功能](https://github.com/sipeed/picoclaw/pull/3429) / [Web 设置](https://github.com/sipeed/picoclaw/pull/3430)  
   核心诉求是减少工具调用日志中的敏感参数暴露，同时改善 Web 管理界面的可配置性，代表隐私、可观测性和易用性方面的共同需求。

3. [#3431 Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)  
   反映用户希望以统一、兼容 OpenAI 的方式接入更多模型服务。供应商扩展有助于降低单一模型供应商依赖，但也需要维护认证、模型列表、错误处理和兼容性测试。

由于缺少评论和反应数据，上述内容属于**影响范围分析**，不代表社区热度排名。

---

## 5. Bug 与稳定性

### 严重程度较高

#### Gemini 工具调用返回 `400 INVALID_ARGUMENT`

- **相关 PR：** [#3428](https://github.com/sipeed/picoclaw/pull/3428)
- **问题：** 在 OpenAI 兼容接口中继续 Gemini 3 工具调用对话时，服务端可能要求 `functionCall` 部分携带 `thought_signature`，缺失时返回 `400 INVALID_ARGUMENT`。
- **影响：** 可能导致工具调用无法继续、多轮 Agent 执行中断或 OpenAI 兼容客户端请求失败。
- **修复状态：** 已有 fix PR，但当前仍为 open/stale，尚未确认合并或发布。
- **建议关注：**
  - 是否覆盖普通函数调用、并行工具调用和多轮工具调用；
  - 是否会影响其他 OpenAI 兼容供应商；
  - 是否有 Gemini 官方接口回归测试。

### 中等风险

#### 依赖升级可能引入兼容性或安全回归

以下依赖升级仍待处理：

- [#3433 `golang.org/x/crypto` 0.53.0 → 0.58.0](https://github.com/sipeed/picoclaw/pull/3433)
- [#3435 Azure `azidentity` 1.14.0 → 1.14.1](https://github.com/sipeed/picoclaw/pull/3435)
- [#3432 Anthropic SDK 1.55.1 → 1.80.0](https://github.com/sipeed/picoclaw/pull/3432)
- [#3434 `gronx` 1.20.0 → 1.20.5](https://github.com/sipeed/picoclaw/pull/3434)
- [#3436 `go.mau.fi/util` 0.9.8 → 0.10.1](https://github.com/sipeed/picoclaw/pull/3436)

这些 PR 不代表已确认存在 Bug，但涉及底层依赖，特别是加密、认证和模型 SDK，合并前应确认：

- Go 版本约束和构建是否通过；
- 认证流程、请求序列化和错误处理是否保持兼容；
- Anthropic SDK 大版本跨度更新是否带来 API 行为变化；
- 是否存在依赖冲突或供应链风险。

### 当前未发现的信息

- 过去 24 小时没有 Issue 更新，因此没有新报告的崩溃、数据丢失、启动失败或明确回归问题。
- 由于没有 CI 状态和测试结果，无法判断待处理 PR 是否已通过完整测试。

---

## 6. 功能请求与路线图信号

### 高概率进入后续版本的功能

#### 工具反馈参数隐藏与 Web 配置

- [#3429 后端配置与行为变更](https://github.com/sipeed/picoclaw/pull/3429)
- [#3430 Web UI 配置入口](https://github.com/sipeed/picoclaw/pull/3430)

该功能组已经覆盖配置定义、默认行为、文档和测试，并补充 Web 界面入口，具备较完整的功能实现形态。若维护者确认设计，可能成为下一版本中改善 Agent 可观测性和隐私控制的重要能力。

#### OpenAI 兼容接口对 Gemini 工具调用的增强

- [#3428](https://github.com/sipeed/picoclaw/pull/3428)

这是面向模型互操作性的修复类需求，优先级通常高于普通增强功能。其价值取决于修复是否经过充分验证，以及能否以兼容方式避免影响已有 OpenAI 兼容供应商。

### 可能纳入但尚未确定的扩展

#### Standard Compute 供应商

- [#3431](https://github.com/sipeed/picoclaw/pull/3431)

该 PR 体现模型供应商扩展的持续需求，但供应商接入通常会带来维护成本，包括 API 兼容性、认证、模型能力声明和故障排查。因此，是否纳入下一版本取决于维护者对供应商中立性、支持成本和测试覆盖的判断。

### 依赖升级方向

多个 Dependabot PR 表明项目在持续进行依赖维护。若其中包含安全修复或必要的 SDK 兼容性调整，可能优先进入后续版本；普通小版本升级则需要等待评审和测试确认。

---

## 7. 用户反馈摘要

过去 24 小时 **Issues 评论为 0 条**，且所有列出的 PR 均未提供评论数据，因此无法从用户评论中提炼真实痛点、满意点或具体使用反馈。

根据 PR 内容可以间接归纳出以下潜在用户需求：

- **本地多媒体消息发送：** 用户可能希望 QQ Agent 直接处理本地图片和文件，而不必先上传至外部图床。
- **模型接入灵活性：** 用户需要更多 OpenAI 兼容供应商，以减少模型服务绑定。
- **工具日志隐私：** 用户可能不希望工具调用参数中包含密钥、文件路径、用户数据或其他敏感信息。
- **多模型协议兼容：** Gemini 与 OpenAI 兼容接口之间的工具调用差异，正在造成实际请求失败。
- **管理界面可配置性：** 用户希望通过 Web UI 控制工具反馈显示方式，而不是仅依赖手工修改配置文件。

以上均为基于功能描述的推断，不代表已有用户评论或明确需求统计。

---

## 8. 待处理积压

### 需要维护者优先清理的 stale PR

- [#3431 Standard Compute provider](https://github.com/sipeed/picoclaw/pull/3431)
- [#3436 `go.mau.fi/util` 升级](https://github.com/sipeed/picoclaw/pull/3436)
- [#3435 Azure `azidentity` 升级](https://github.com/sipeed/picoclaw/pull/3435)
- [#3434 `gronx` 升级](https://github.com/sipeed/picoclaw/pull/3434)
- [#3433 `golang.org/x/crypto` 升级](https://github.com/sipeed/picoclaw/pull/3433)
- [#3432 Anthropic SDK 升级](https://github.com/sipeed/picoclaw/pull/3432)
- [#3430 Web 工具反馈设置](https://github.com/sipeed/picoclaw/pull/3430)
- [#3429 隐藏工具反馈参数](https://github.com/sipeed/picoclaw/pull/3429)
- [#3428 Gemini `thought_signature` 修复](https://github.com/sipeed/picoclaw/pull/3428)

### 积压风险

- **维护响应不足：** 9 条待处理 PR 中 7 条带 stale 标记，说明项目可能缺少足够的 reviewer 或自动清理机制。
- **功能组合未形成闭环：** [#3429](https://github.com/sipeed/picoclaw/pull/3429) 与 [#3430](https://github.com/sipeed/picoclaw/pull/3430) 需要协同合并，否则可能出现后端能力已存在但 Web UI 不可配置，或反之的情况。
- **兼容性修复积压：** [#3428](https://github.com/sipeed/picoclaw/pull/3428) 若持续未处理，相关用户可能继续遇到 Gemini 工具调用失败。
- **依赖风险积累：** 多个依赖升级 PR 长期 pending，可能导致项目暂时错过安全更新、SDK 兼容修复或构建稳定性改进。
- **发布节奏不明确：** 过去 24 小时无新版本发布，无法确认当前 PR 是否会进入近期版本。

### 建议维护动作

1. 优先审查 [#3428](https://github.com/sipeed/picoclaw/pull/3428)，确认 Gemini 工具调用回归影响。
2. 联动处理 [#3429](https://github.com/sipeed/picoclaw/pull/3429) 与 [#3430](https://github.com/sipeed/picoclaw/pull/3430)，避免功能与界面配置脱节。
3. 对 [#3433](https://github.com/sipeed/picoclaw/pull/3433) 和 [#3435](https://github.com/sipeed/picoclaw/pull/3435) 等关键依赖升级执行完整 CI 和兼容性验证。
4. 对 stale PR 逐条确认：合并、关闭、补充测试，或明确标记暂不处理。
5. 为 QQ 多媒体功能 [#1227](https://github.com/sipeed/picoclaw/pull/1227) 补充关闭原因和后续处理结论。

**健康度结论：** 项目今日无用户 Issue 噪声，代码贡献仍较活跃；但待处理 PR 数量较多、stale 比例高、缺乏版本发布和评论数据，表明当前主要风险在于**维护吞吐与交付闭环不足**，而非完全没有研发活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues / Pull Requests 更新**

## 1. 今日速览

- 过去 24 小时共发生 **2 条 Issue 更新**，其中 **1 条新开、1 条关闭**；整体社区讨论热度较低。
- 共发生 **6 条 PR 更新**，其中 **5 条仍待合并、1 条已关闭**；当前开发活动主要集中在依赖升级与前端构建工具维护。
- 今日**无新版本发布**，项目没有形成面向用户的功能发布节点。
- 模型质量与平台兼容性是今日最值得关注的方向：最新 Issue 聚焦 DeepSeek-V4-Flash 的任务失败分类，ARM64 支持 Issue 已关闭。
- 综合判断，项目健康度为**稳定维护态**：依赖治理较活跃，但缺少明显的新功能推进，且待合并 PR 数量形成轻度积压。

## 2. 版本发布

过去 24 小时**无新版本发布**。

## 3. 项目进展

### 已关闭 PR

- **[#8149] DOMPurify 3.4.12 → 3.4.16**  
  [GitHub 链接](https://github.com/nearai/ironclaw/pull/8149)  
  该 PR 已关闭，目标是将 Web UI 使用的 DOMPurify 升级至 3.4.16。其后同日出现了升级至 **3.4.17** 的新 PR [#8155](https://github.com/nearai/ironclaw/pull/8155)，表明维护者可能已采用更高版本替代原升级方案。  
  **进展意义：** 主要属于前端安全与依赖维护，不代表新增用户功能。

### 待合并 PR

当前有以下 5 条待处理 PR，尚未进入合并阶段：

- [#8155：DOMPurify 3.4.12 → 3.4.17](https://github.com/nearai/ironclaw/pull/8155)
- [#8158：Storybook 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8158)
- [#8157：certifi 2026.7.22 → 2026.10.19](https://github.com/nearai/ironclaw/pull/8157)
- [#8156：@storybook/addon-vitest 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8156)
- [#8154：Vite 8.1.3 → 8.1.6](https://github.com/nearai/ironclaw/pull/8154)

这些 PR 主要涉及：

1. **前端安全库升级**
   - DOMPurify 升级可能包含输入清理、解析兼容性或安全修复；
   - 具体破坏性影响需以对应版本发布说明和合并前测试结果为准。

2. **前端开发工具链升级**
   - Storybook 及 `@storybook/addon-vitest` 同步升级，有利于保持组件测试工具的一致性；
   - Vite 升级可能涉及构建配置、插件兼容或开发环境行为变化。

3. **E2E 测试证书包更新**
   - certifi 升级用于更新测试环境信任根证书；
   - 若出现 CI 失败，应重点检查企业代理、自签 CA、证书链及测试环境 TLS 配置。

**整体推进程度：** 今日没有已合并的功能 PR，项目主要完成了依赖更新提案的提交与状态维护，实际代码落地程度有限。

## 4. 社区热点

### Issue：每日失败分类报告

- **Issue [#8153：Daily ironclaw failure taxonomy — 2026-10-22](https://github.com/nearai/ironclaw/issues/8153)**
- 作者：@pranavraja99
- 状态：开放
- 评论数：0
- 👍：0
- 重点：
  - 分析 `officeqa` 运行中的 **64 个非通过任务**；
  - 摘要指出，绝大多数属于 DeepSeek-V4-Flash 的真实模型质量问题；
  - 涉及模型导航、任务执行或答案质量等 Agent 能力表现。

**背后诉求：**

- 降低“任务失败”统计的混杂因素，区分模型能力问题、系统/工具问题与评测框架问题；
- 为模型优化、提示词调整和 Agent 策略改进提供可追踪的数据；
- 可能推动后续建立更稳定的失败分类体系、回归集和质量评测流程。

由于没有评论和点赞，该 Issue 目前属于**分析型信号**，而非社区共识性热点。

### 其他值得关注的 Issue

- **Issue [#3168：Add arm64/aarch64 platform support for Docker builds](https://github.com/nearai/ironclaw/issues/3168)**
- 状态：已关闭
- 原始诉求：
  - 当前官方 Docker 镜像仅覆盖 `linux/amd64`；
  - ARM64 设备无法直接使用官方镜像；
  - Cranelift 已支持 aarch64，已确认的 ARM 限制主要是 armv7。

**关闭意义：**

可能意味着 ARM64 支持已经通过其他实现、合并项或维护决策得到处理，但根据现有数据无法确认具体关闭原因，也未看到今日关联的已合并 PR。建议维护者补充关闭说明，避免用户误以为该功能已正式发布。

## 5. Bug 与稳定性

### 中高优先级：模型任务质量与 Agent 成功率

- **相关 Issue：[#8153](https://github.com/nearai/ironclaw/issues/8153)**
- 涉及 `officeqa` 的 **64 个非通过任务**；
- 摘要称主要问题属于 DeepSeek-V4-Flash 的模型质量错误，而非单纯基础设施故障；
- 当前没有明确的 Bug fix PR，也没有评论确认具体回归范围。

**风险：**

- 可能影响办公自动化、知识问答或多步工具调用场景的完成率；
- 如果模型质量问题具有普遍性，可能造成用户对“Agent 能否可靠完成任务”的预期落差；
- 需要区分一次性能力波动与可复现回归。

### 低至中优先级：前端依赖升级后的兼容性风险

- [#8155](https://github.com/nearai/ironclaw/pull/8155)
- [#8158](https://github.com/nearai/ironclaw/pull/8158)
- [#8156](https://github.com/nearai/ironclaw/pull/8156)
- [#8154](https://github.com/nearai/ironclaw/pull/8154)

这些 PR 尚未合并，因此当前不能视为已确认 Bug。风险主要来自：

- DOMPurify 行为变化可能影响 HTML 清理、富文本展示或工具输出渲染；
- Storybook、Vitest addon、Vite 组合升级可能导致测试或构建失败；
- 应确认单元测试、组件测试、端到端测试及生产构建结果。

### 低优先级：E2E 证书环境变化

- **PR [#8157](https://github.com/nearai/ironclaw/pull/8157)**
- certifi 从 2026.7.22 更新至 2026.10.19；
- 可能影响测试环境的 CA 信任链、TLS 握手或代理访问；
- 当前没有报告 CI 回归，也没有已确认的修复 PR。

## 6. 功能请求与路线图信号

### 已关闭但反映明确平台需求的请求：ARM64 Docker 支持

- **Issue [#3168](https://github.com/nearai/ironclaw/issues/3168)**
- 用户希望官方 Docker 镜像支持 `linux/arm64` / aarch64；
- 适用范围包括：
  - ARM Mac；
  - ARM64 服务器；
  - ARM 云主机；
  - 开发和个人 AI 部署环境。

Issue 已关闭，说明该方向可能已完成或被重新规划。若相关实现尚未进入正式 Release，仍建议在版本说明中明确 ARM64 镜像的可用时间、标签和构建方式。

### Agent 质量改进方向

- **Issue [#8153](https://github.com/nearai/ironclaw/issues/8153)** 暴露了模型层面的任务失败问题；
- 后续可能的路线图工作包括：
  - 对失败任务进行稳定分类；
  - 建立针对 DeepSeek-V4-Flash 的回归测试集；
  - 优化系统提示、工具调用策略与上下文管理；
  - 对高频失败场景增加 Agent 规划或重试机制；
  - 将模型质量指标纳入 CI 或定期评测。

目前没有直接对应的功能或修复 PR，因此暂不能判断其是否已列入下一版本。

### 依赖维护可能影响下一版本质量基线

以下待合并 PR 若通过，可能共同构成下一版本的基础维护：

- DOMPurify 安全更新：[#8155](https://github.com/nearai/ironclaw/pull/8155)
- Storybook 更新：[#8158](https://github.com/nearai/ironclaw/pull/8158)
- Vitest addon 更新：[#8156](https://github.com/nearai/ironclaw/pull/8156)
- Vite 更新：[#8154](https://github.com/nearai/ironclaw/pull/8154)
- certifi 更新：[#8157](https://github.com/nearai/ironclaw/pull/8157)

它们不是功能路线图，但会影响前端构建安全、开发体验和测试稳定性。

## 7. 用户反馈摘要

过去 24 小时 Issues 的评论数均为 0，暂无足够的一手用户评论可用于判断满意度或收集具体使用反馈。

基于现有 Issue，可提炼出以下需求信号：

- **模型执行质量：** `officeqa` 中大量任务未通过，用户实际关心的是 Agent 是否能稳定完成办公任务，而不是单纯的系统可启动性。  
  参见 [#8153](https://github.com/nearai/ironclaw/issues/8153)。

- **跨平台部署：** 用户希望在没有 x86 架构的设备上直接运行官方 Docker 镜像，尤其关注 ARM64 的可部署性。  
  参见 [#3168](https://github.com/nearai/ironclaw/issues/3168)。

- **部署透明度：** ARM64 Issue 已关闭，但关闭原因和最终镜像支持状态不明确，用户可能仍需要确认是否真正可用、应使用哪个镜像标签及是否存在已知限制。

目前没有足够数据判断用户满意或不满意的具体比例，也没有看到新的崩溃、回归或严重使用故障反馈。

## 8. 待处理积压

### 待合并 PR 积压

截至统计时间，共有 **5 条开放 PR**：

- [#8155](https://github.com/nearai/ironclaw/pull/8155)
- [#8158](https://github.com/nearai/ironclaw/pull/8158)
- [#8157](https://github.com/nearai/ironclaw/pull/8157)
- [#8156](https://github.com/nearai/ironclaw/pull/8156)
- [#8154](https://github.com/nearai/ironclaw/pull/8154)

这些 PR 全部由 Dependabot 提交，优先级通常低于功能性或安全问题，但长期不处理会导致：

- 依赖版本继续落后；
- 前端工具链版本漂移；
- 安全修复和安全测试覆盖不足；
- CI 与本地开发环境差异扩大。

### 需要维护者关注的事项

1. **合并或关闭 ARM64 支持 Issue [#3168](https://github.com/nearai/ironclaw/issues/3168) 的后续记录**
   - 补充关闭原因；
   - 确认是否已有可用的 `linux/arm64` 镜像；
   - 若尚未完成，建议恢复 Issue 或拆分实现任务。

2. **尽快确认模型质量问题的责任边界**
   - [#8153](https://github.com/nearai/ironclaw/issues/8153) 已指出 `officeqa` 有 64 个非通过任务；
   - 建议补充失败分类统计、复现样例、责任组件和后续修复计划；
   - 如存在系统性回归，应建立对应 fix PR 或回归测试。

3. **审核依赖升级的组合兼容性**
   - Storybook、Vite、Vitest addon 和 DOMPurify 更新可能存在联动风险；
   - 建议合并前确认构建、测试、端到端测试和安全扫描结果；
   - 对 [#8155](https://github.com/nearai/ironclaw/pull/8155) 与已关闭的 [#8149](https://github.com/nearai/ironclaw/pull/8149) 进行版本链确认，避免重复或遗漏安全修复。

4. **缺少版本发布信息**
   - 今日无 Release；
   - ARM64 支持或前端安全修复若已落地，建议在下一次 Release 中明确发布范围、镜像架构和迁移说明。

## 总体健康度评估

**结论：稳定维护态，轻度积压，功能推进有限。**

积极信号：

- 依赖更新提交较集中，说明项目仍在持续维护；
- DOMPurify、certifi、Storybook 和 Vite 等基础组件有自动化升级跟进；
- ARM64 平台支持议题已关闭，可能反映部署能力正在改善。

风险信号：

- 今日没有合并的功能性 PR 或新版本；
- Agent 在真实办公任务中的失败质量问题仍需进一步分型和修复；
- 5 条开放依赖 PR 尚未处理；
- ARM64 Issue 的关闭原因和用户可用状态不够透明。

**建议优先级：**  
先确认 [#8153](https://github.com/nearai/ironclaw/issues/8153) 的失败分类是否构成系统性回归；随后完成依赖升级的兼容性验证，并明确 [#3168](https://github.com/nearai/ironclaw/issues/3168) 的 ARM64 支持状态。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues、PR 与 Releases 更新**  
**项目地址：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

过去 24 小时项目共有 **10 条 PR 更新**，其中 **1 条仍待合并、9 条已合并或关闭**；期间**没有新增或活跃 Issue**，也**没有发布新版本**。  
今日主要进展集中在渲染层稳定性、媒体任务恢复、头像展示、OpenClaw 插件持久化以及历史代码清理，整体体现出项目继续强化 AI 智能体运行可靠性和交互体验。  
虽然 PR 更新数量较多，但缺少新 Issue、评论和点赞数据，无法判断社区讨论热度；同时多条较早 PR 以 `[stale]` 状态关闭，显示仓库存在一定历史 PR 积压和维护清理压力。  
项目当前健康度可评估为：**工程维护活跃、交付节奏稳定，但社区反馈信号偏弱，长期积压与版本发布节奏仍需关注**。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此没有可报告的 Release、破坏性变更或升级迁移说明。

---

## 3. 项目进展

### 3.1 修复图片编辑器预览闪烁与选择崩溃

- **PR：** [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)
- **状态：** 已关闭
- **方向：** renderer、artifacts
- **主要内容：**
  - 修复图片编辑器在特定视口尺寸下预览闪烁的问题。
  - 修复释放选区拖拽操作时可能出现的崩溃：
    - `Cannot read properties of undefined (reading 'start')`
  - 提升图片编辑预览与选区交互的稳定性。
- **影响：**
  - 直接改善图像编辑和 artifact 预览体验。
  - 属于面向用户可感知 Bug 的稳定性修复。

### 3.2 改进视频确认流程与媒体生命周期分析

- **PR：** [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)
- **状态：** 已关闭
- **方向：** renderer、docs、main、openclaw、cowork
- **主要内容：**
  - 修复视频费用确认倒计时过早开始、超时后无法继续的问题。
  - 确认卡片首次可见且窗口获得焦点后才开始两分钟倒计时。
  - 超时后保留描述和参数，允许刷新费用并重新确认。
  - 支持页面重载、切换会话后的确认状态恢复。
  - 通过 revision/sequence 机制拒绝旧确认、重复确认和过期快照。
  - 增加确认状态 IPC。
  - 调整 OpenClaw 媒体插件，将确认等待与生成请求的超时预算分离，并传递工具取消信号。
  - 媒体生命周期埋点升级至 `schemaVersion=3`。
- **影响：**
  - 降低视频生成任务因倒计时过期导致的失败率。
  - 改善长会话、页面切换和任务恢复场景下的可靠性。
  - 对 AI 工具调用的生命周期观测和异常诊断能力有所增强。

### 3.3 刷新专家头像与推荐场景入口头像

- **PR：** [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925)
- **状态：** 已关闭
- **方向：** renderer
- **主要内容：**
  - 更新专家默认头像。
  - 当预设专家缺少头像或远程图片加载失败时，使用本地兜底头像。
  - 为精选场景卡片中的专家入口增加头像。
- **影响：**
  - 改善专家和精选入口的视觉识别度。
  - 降低远程资源失败导致的空白或破损头像问题。

### 3.4 持久化 OpenClaw 用户插件入口 Hook

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **状态：** **待合并**
- **方向：** main、openclaw
- **主要内容：**
  - 将 `plugins.entries.*.hooks` 持久化至 SQLite。
  - 在 `syncToDisk` 时重写 hooks 配置。
  - 对齐 store、disk sync 和 plugin manager 的处理路径。
  - 解决网关重启后 OpenClaw 入口 Hook 配置丢失的问题。
- **影响：**
  - 直接影响插件配置在重启后的保留能力。
  - 对依赖入口 Hook 的自动化工作流和扩展调用链路较为重要。
- **关注点：**
  - 该 PR 创建于 2026-09-20，至今仍处于开放状态，且带有 `stale` 标记。
  - 需要维护者确认是否具备合并条件，或是否应拆分为更小的可审查变更。

### 3.5 清理或关闭历史功能与测试 PR

以下 PR 今日以关闭状态更新，均带有 `[stale]` 标记：

- [#547](https://github.com/netease-youdao/LobsterAI/pull/547)：新增 `coworkFormatTransform` 单元测试，覆盖 35 个场景，涉及 provider API 格式转换、停止原因映射和 SSE 事件格式化等。
- [#610](https://github.com/netease-youdao/LobsterAI/pull/610)：重构 Cowork 输入框，引入结构化 composer，统一附件、技能和快捷操作的引用体验，并改善 `@`、`/` 的发现与使用。
- [#725](https://github.com/netease-youdao/LobsterAI/pull/725)：增加 Cowork 消息书签/收藏系统及全局书签视图，支持按会话保存、整理和跳转重要消息。
- [#736](https://github.com/netease-youdao/LobsterAI/pull/736)：通过 `React.memo` 优化 `MarkdownContent`，减少 Cowork 流式输出时历史消息的重复 Markdown 解析。
- [#738](https://github.com/netease-youdao/LobsterAI/pull/738)：修复执行模式配置未生效问题，改为读取 `cowork_config` 中的 `executionMode`，并恢复 `local/auto/sandbox` 与 OpenClaw sandbox 的映射关系。

这些 PR 的关闭表明仓库正在进行 PR 队列清理，但其中部分内容涉及测试覆盖、输入体验、消息管理和渲染性能，仍可能包含可复用价值，建议维护者评估是否应迁移为新 PR 或保留为后续路线参考。

---

## 4. 社区热点

过去 24 小时：

- **Issue 更新：0 条**
- **PR 评论数据：无**
- **PR 点赞数据：均为 0**
- 因此无法基于评论数、反应数或讨论参与度识别“今日最热门”议题。

从内容规模和技术影响看，今日值得关注的 PR 主要包括：

1. **[#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)**  
   涉及视频确认、任务恢复、取消机制、超时预算和媒体埋点，覆盖范围最广，也最直接对应 AI 工具调用中的可靠性问题。

2. **[#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)**  
   聚焦图片编辑器闪烁和选择崩溃，属于用户最容易感知的交互缺陷。

3. **[#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)**  
   解决 OpenClaw 插件配置在重启后丢失的问题，对插件生态和自动化扩展具有较高影响。

4. **[#2925](https://github.com/netease-youdao/LobsterAI/pull/2925)**  
   改善专家头像和精选入口视觉表现，主要影响产品观感和使用识别。

不过，由于没有评论和点赞数据，上述判断依据的是**技术范围和潜在影响**，不能视为社区投票结果。

---

## 5. Bug 与稳定性

### 高优先级：OpenClaw 插件 Hook 重启后丢失

- **关联 PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **状态：** PR 仍开放，尚不能确认已修复。
- **风险：**
  - 网关重启后入口 Hook 配置可能被清除。
  - 可能导致自动化任务、扩展入口或工作流行为与预期不一致。
- **建议：**
  - 优先确认 SQLite 存储结构、磁盘同步和插件加载路径的一致性。
  - 增加重启、配置同步和插件重新加载的回归测试。

### 中高优先级：视频确认过期导致任务无法继续

- **关联 PR：** [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)
- **状态：** PR 已关闭，需确认关闭原因是合并还是废弃。
- **风险场景：**
  - 确认卡片已经展示，但窗口未聚焦时倒计时仍开始。
  - 费用确认超时后，用户无法继续原任务。
  - 页面重载、会话切换或连接中断可能造成状态丢失。
- **修复方向：**
  - 延长或重构确认状态保存机制。
  - 对旧 revision、重复请求和过期快照进行严格校验。
  - 确保工具停止和连接断开能够正确结束等待状态。

### 中优先级：图片编辑器预览闪烁及选区拖拽崩溃

- **关联 PR：** [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)
- **状态：** PR 已关闭，需确认修复是否已合入。
- **风险：**
  - 预览在特定视口尺寸下反复闪烁。
  - 释放拖拽操作时可能访问未定义选区字段。
- **影响：**
  - 影响图像编辑和 artifact 预览的使用连续性。

### 中低优先级：执行模式配置未生效

- **关联 PR：** [#738](https://github.com/netease-youdao/LobsterAI/pull/738)
- **状态：** PR 已关闭，且标记为 `stale`。
- **风险：**
  - 代码可能硬编码使用 `local`，忽略用户配置的 `executionMode`。
  - `local/auto/sandbox` 与 OpenClaw sandbox 的映射可能不一致。
- **建议：**
  - 若该问题仍存在，应重新创建带针对性测试的修复 PR。

---

## 6. 功能请求与路线图信号

虽然今日没有新 Issue，但从历史 PR 可以观察到以下路线信号：

### 6.1 Cowork 输入体验结构化升级

- **关联 PR：** [#610](https://github.com/netease-youdao/LobsterAI/pull/610)
- **方向：**
  - 从 `textarea + 字符串拼接` 重构为结构化 composer。
  - 统一附件、技能和快捷操作的引用。
  - 提升 `@` 和 `/` 的发现效率。
- **路线意义：**
  - 表明 Cowork 正从基础聊天输入向更接近 Agent IDE 的上下文编排体验发展。
  - 适合纳入后续版本，但应避免一次性改动过大，建议拆分为输入模型、资源引用和快捷操作三个阶段。

### 6.2 Cowork 消息书签与全局知识导航

- **关联 PR：** [#725](https://github.com/netease-youdao/LobsterAI/pull/725)
- **方向：**
  - 会话级消息收藏。
  - 会话头部快速入口。
  - 侧边栏全局书签视图。
  - 按会话聚合和跨会话跳转。
- **路线意义：**
  - 反映长对话场景下，用户需要保存关键决策、代码片段和任务指令。
  - 可作为 Cowork 会话管理、上下文复盘或知识库功能的前置能力。

### 6.3 流式输出渲染性能优化

- **关联 PR：** [#736](https://github.com/netease-youdao/LobsterAI/pull/736)
- **方向：**
  - 对 `MarkdownContent` 使用 `React.memo`。
  - 降低流式输出期间历史消息重复解析成本。
- **路线意义：**
  - 说明长会话和高频流式输出已经成为性能优化的重点场景。
  - 后续可继续关注 token 增量渲染、消息级缓存和虚拟列表等优化。

### 6.4 协议转换测试体系

- **关联 PR：** [#547](https://github.com/netease-youdao/LobsterAI/pull/547)
- **方向：**
  - 覆盖 `normalizeProviderApiFormat`。
  - 覆盖 `mapStopReason`。
  - 覆盖 `formatSSEEvent`。
  - 覆盖 Anthropic 到 OpenAI 的转换。
- **路线意义：**
  - 反映项目正在加强多模型、多供应商和流式协议兼容性。
  - 若重新纳入路线，应作为基础稳定性工作持续推进，而不是仅依赖功能 PR 的间接验证。

### 可能纳入下一版本的优先级判断

| 方向 | 优先级 | 判断 |
|---|---:|---|
| OpenClaw 插件 Hook 持久化 | 高 | 直接影响重启后的插件稳定性，且已有明确修复方案 |
| 视频确认与任务恢复 | 高 | 影响长时间运行、页面切换和异步媒体任务可靠性 |
| Cowork 结构化输入 | 中高 | 具备明显 Agent 交互升级价值，但需拆分实施 |
| Cowork 书签系统 | 中 | 解决长对话复盘问题，适合作为会话管理增强 |
| 流式渲染性能优化 | 中 | 对长会话体验改善明确，可作为性能专项推进 |
| 多协议单元测试 | 中 | 对模型兼容性重要，建议常态化纳入 CI |

---

## 7. 用户反馈摘要

过去 24 小时没有新增或活跃 Issue，也没有可用的 Issues 评论，因此无法提炼出新的真实用户评论、满意点或不满点。

根据已关闭 PR 的问题描述，可间接归纳出以下用户痛点：

1. **图片编辑过程不稳定**
   - 用户反馈了预览闪烁和释放选区时崩溃。
   - 这表明图像编辑、预览和 artifact 场景对交互稳定性要求较高。
   - 关联链接：[#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)

2. **视频生成确认流程容易中断**
   - 费用确认倒计时与用户实际等待时间不匹配，导致超时后无法继续。
   - 用户需要更可靠的异步任务状态保存、恢复和取消机制。
   - 关联链接：[#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)

3. **Agent 配置在重启后可能丢失**
   - OpenClaw 插件入口 Hook 无法稳定保留，说明配置持久化和网关重启兼容性仍是重要诉求。
   - 关联链接：[#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)

4. **长对话场景需要更强的信息组织能力**
   - 书签 PR 试图解决重要消息难以保存和跨会话回顾的问题。
   - 关联链接：[#725](https://github.com/netease-youdao/LobsterAI/pull/725)

5. **流式输出需要更顺畅**
   - 历史消息重复解析可能影响长会话体验。
   - 关联链接：[#736](https://github.com/netease-youdao/LobsterAI/pull/736)

上述内容均来自 PR 摘要或问题描述，并非今日新增用户评论，代表产品方向和潜在需求，不应当视为经过社区验证的普遍反馈。

---

## 8. 待处理积压

### 8.1 OpenClaw Hook 持久化 PR 长时间开放

- **PR：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)
- **创建时间：** 2026-09-20
- **当前状态：** 开放，带有 `stale` 标记
- **建议：**
  - 尽快确认是否继续合并。
  - 若需重构，建议明确拆分 SQLite schema、sync 逻辑和插件管理器改动。
  - 增加网关重启回归测试，避免配置丢失问题反复出现。

### 8.2 5 条历史 PR 以 stale 状态关闭

- [#547](https://github.com/netease-youdao/LobsterAI/pull/547)
- [#610](https://github.com/netease-youdao/LobsterAI/pull/610)
- [#725](https://github.com/netease-youdao/LobsterAI/pull/725)
- [#736](https://github.com/netease-youdao/LobsterAI/pull/736)
- [#738](https://github.com/netease-youdao/LobsterAI/pull/738)

这些 PR 创建于 2026 年 3 月，今日更新时均处于关闭或 stale 状态。它们涵盖测试、输入重构、书签、渲染性能和执行模式修复，具有不同程度的工程价值。维护者建议建立明确的 stale PR 处理规范：

- 对仍有价值的改动重新拆分并重新提交。
- 对已被替代的改动标注替代 PR 或对应 Issue。
- 对测试类 PR 优先纳入 CI，避免长期停留在个人分支。
- 对功能类 PR 记录是否进入产品路线图，降低贡献者重复开发成本。

### 8.3 Issue 反馈入口缺乏当日活跃信号

过去 24 小时无 Issue 更新，不能据此判断项目没有问题。可能存在以下情况：

- 用户反馈已转移到 Discussions、群组或其他渠道。
- 近期主要工作集中在代码维护和 PR 清理。
- 用户 Issue 创建、响应和关闭节奏较低。

建议维护者在后续日报中继续跟踪：

- Issue 首响时间。
- 平均关闭时间。
- 重复 Bug 和高频回归问题。
- 与 PR 中问题描述对应的 Issue 关联情况。

---

## 总结

2026-10-23，LobsterAI 的主要活动集中在**稳定性修复和基础设施完善**：图片编辑器崩溃、视频确认恢复、OpenClaw 插件配置持久化以及媒体任务埋点构成了今日最值得关注的技术主线。项目 PR 数量达到 **10 条**，但没有新 Issue、评论、点赞或版本发布，说明代码维护活跃度尚可，而社区讨论和版本化交付信号不足。

当前最需要维护者跟进的是仍开放的 [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)，以及多条被标记为 `stale` 的历史 PR。整体健康度判断为：**技术推进正常，短期交付较稳定，但 PR 生命周期管理、用户反馈闭环和版本发布节奏仍有改善空间**。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**统计日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub Issues、PRs 与 Releases**

---

## 1. 今日速览

- 过去 24 小时共更新 **22 条 Issues**，其中 **19 条仍开放、3 条关闭**；更新 **50 条 PR**，其中 **47 条待合并、3 条关闭/合并**，整体开发活动较高。
- 项目发布安全修复版本 **v2.2.2.post1**，重点涉及 **emSign CA 信任链**问题，并建议所有用户尽快升级。
- 当前贡献集中在 **安全与供应链、插件化重构、渠道稳定性、媒体请求治理、Console 体验修复**等方面。
- 社区反馈显示，v2.2 系列在 **Hub 部署、渠道网络阻塞、模型配置、跨会话状态、升级回归**方面仍存在较集中问题。
- 项目健康度评估：**开发活跃度较高，但稳定性与兼容性风险仍处于中等偏高水平**；PR 数量显著高于合并数量，发布后仍需持续收敛问题。

---

## 2. 版本发布

### v2.2.2.post1

- **Release 页面**：[v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2.post1)
- **相关合并 PR**：
  - [#8369：版本号升级至 v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/pull/8369)
  - [#8370：修复 emSign CA 信任问题](https://github.com/agentscope-ai/QwenPaw/pull/8370)

#### 主要更新

根据 Release 信息，本次版本至少包含以下安全修复：

- 修复依赖、安装器及构建流程中的 **emSign CA 信任问题**。
- 通过相关依赖和构建配置的调整，降低证书链异常导致的安装、验证或 HTTPS 请求失败风险。
- 对桌面端、PyPI 等分发渠道提供修复版本。

#### 破坏性变更

- 已提供信息中**未明确列出新的破坏性 API 变更**。
- 该版本属于 **post-release 安全修复版本**，主要是安全性和构建/安装链路修复，而非功能大版本升级。

#### 升级建议

官方安全提醒 Issue [#8385](https://github.com/agentscope-ai/QwenPaw/issues/8385) 建议所有用户升级到 **v2.2.2.post1 或更高版本**。升级时建议：

1. 桌面端用户优先通过官方更新渠道安装；
2. CLI/PyPI 用户确认安装包已更新至 `2.2.2.post1`；
3. 企业或 Hub 部署环境检查容器镜像 digest；
4. 升级后重点验证模型调用、渠道连接和 HTTPS 网络访问；
5. 升级前备份自定义 `agent.json`、环境变量及渠道配置。

---

## 3. 项目进展

### 3.1 安全与发布治理

- **v2.2.2.post1 发布**
  - [#8391：合并 Release/v2.2.2post1 到 main](https://github.com/agentscope-ai/QwenPaw/pull/8391)
  - [#8386：发布后安装验证任务](https://github.com/agentscope-ai/QwenPaw/issues/8386)

发布流程已覆盖安全修复、版本合并和安装验证，整体发布响应较及时。发布后安装验证 Issue 已关闭，说明至少部分平台的发布后检查完成。

### 3.2 Console 会话与草稿状态修复

- [#8362：按会话隔离聊天输入草稿](https://github.com/agentscope-ai/QwenPaw/pull/8362)
  - 修复同一 Agent 下不同会话共享 `localStorage` 草稿的问题。
  - 预计可将草稿键从 Agent 级调整为 Agent + Session 级，减少跨会话串草稿。

- [#8375：删除会话后避免残留请求](https://github.com/agentscope-ai/QwenPaw/pull/8375)
  - 对应 Issue [#8368：删除当前选中会话报错 404](https://github.com/agentscope-ai/QwenPaw/issues/8368)。
  - 通过记录已删除路由，避免前端继续解析已删除会话并触发过期请求。
  - 该 PR 当前已关闭，Issue 也已关闭，属于较明确的缺陷闭环。

- [#8274：切换会话时保留待发送输入和时间戳](https://github.com/agentscope-ai/QwenPaw/pull/8274)
  - 解决生成过程中切换会话导致待发送消息、提交时间丢失的问题。

### 3.3 渠道稳定性与架构隔离

- [#8187：将官方渠道抽取为插件并使用子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)
  - 通过 `channel.json` 描述渠道，减少主进程对平台 SDK 的直接导入。
  - 目标是将渠道故障与主服务隔离，降低单个渠道异常拖垮整个宿主进程的概率。
  - 该 PR 仍处于开放状态，属于较大的架构性变更，合并前需关注兼容性和部署方式变化。

- [#8244：启动时跳过已禁用渠道 SDK](https://github.com/agentscope-ai/QwenPaw/pull/8244)
  - 避免配置启动时导入未启用渠道的 SDK。
  - 针对 Windows 桌面端启动阶段约 **15.1 秒**的阻塞问题进行优化。
  - 若合并，可改善启动响应速度和资源占用。

- [#8350：飞书渠道同步网络调用阻塞主事件循环](https://github.com/agentscope-ai/QwenPaw/issues/8350)
  - 报告指出网络不可用时可能造成 `/api/healthz` 超时，并且 `SIGTERM` 无法及时退出。
  - 该问题凸显渠道适配层仍需全面异步化和超时隔离。

### 3.4 模型与媒体调用治理

- [#8358：遵循 thinking 默认值及声明的 wire controls](https://github.com/agentscope-ai/QwenPaw/pull/8358)
  - 修复 Console 显示的 thinking 设置与 OpenAI-compatible Provider 实际发送参数不一致的问题。
  - 对不同模型声明的 `low`、`medium`、`xhigh` 等控制能力进行适配。

- [#8337：停止重复发送模型不再需要的媒体](https://github.com/agentscope-ai/QwenPaw/pull/8337)
  - 解决历史中的图片、视频在每次请求中被重复上传的问题。
  - 相关 Issue [#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335) 报告称，媒体较多时请求体可达到约 **48 MB**，并导致会话长期不可用。

- [#8299：Provider 拒绝视频时自动重试为无视频请求](https://github.com/agentscope-ai/QwenPaw/pull/8299)
  - 当 Provider 不支持历史视频内容时，避免后续文本请求持续失败。

### 3.5 插件、记忆与部署能力

- [#8376：支持 PowerContext prepared context 与 Artifact API](https://github.com/agentscope-ai/QwenPaw/pull/8376)
  - 适配 PowerContext v1.4.0。
  - 扩展结构化上下文、Profile、Topic Memory、Atomic Memory 和 Experience 的复用能力。

- [#8357：Creator 2.0.2 发布准备](https://github.com/agentscope-ai/QwenPaw/pull/8357)
  - 包含 Skills 管理和 narration safety 相关插件改动。
  - 当前仍是开放 PR，尚未进入主分支。

- [#8328：新增包含 Office/PDF 工具链的离线镜像](https://github.com/agentscope-ai/QwenPaw/pull/8328)
  - 为文档处理场景提供更完整的 Docker 镜像变体。
  - 默认镜像仍保持精简，属于部署能力和场景化能力扩展。

### 3.6 依赖与测试质量

- [#8366：以标准库转换器替换 GPL-3.0 的 html2text](https://github.com/agentscope-ai/QwenPaw/pull/8366)
  - 解决 GPL-3.0 依赖与项目 Apache-2.0 许可证之间的兼容性风险。
  - 改动范围较小，但对供应链合规有积极意义。

- [#8377：干净检出时 pytest 收集阶段失败](https://github.com/agentscope-ai/QwenPaw/pull/8377)
  - 报告指出存在 `test_backup` 导入文件不匹配问题。
  - 目前该 PR 已关闭，但相关测试环境问题仍值得确认是否已彻底修复。

- [#8393：修复 13 个 nightly E2E 测试锚点并移除静默跳过](https://github.com/agentscope-ai/QwenPaw/pull/8393)
  - 其中 3 个问题已由上游修复，另外 10 个主要是测试定位器过期、等待条件不足及自证式断言。
  - 有助于提高 CI 信号可信度。

### 总体进展判断

过去 24 小时的 PR 以修复为主、架构重构为辅，主要推进了：

- 供应链安全和许可证合规；
- Console 会话状态一致性；
- 渠道隔离与启动性能；
- 模型参数和媒体请求稳定性；
- 插件化及可扩展架构；
- 记忆、部署和测试基础设施。

但 **50 条 PR 中 47 条仍待合并**，说明工作流中并行开发较多，合并与回归验证压力仍然较大。

---

## 4. 社区热点

### 4.1 最活跃的路线图讨论

#### [#8289：让 QwenPaw 更轻量、更可扩展，计划进入 v2.3.0](https://github.com/agentscope-ai/QwenPaw/issues/8289)

- 评论数：**3**
- 反应数：**1**
- 热度原因：这是面向整体架构和下一版本方向的公开规划议题。
- 核心诉求：
  - 插件化重构；
  - 降低核心运行时负担；
  - 提升扩展能力；
  - 改善模块边界和故障隔离。

该议题与以下 PR 高度相关：

- [#8187：渠道插件化和子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)
- [#8357：Creator 2.0.2 与插件能力更新](https://github.com/agentscope-ai/QwenPaw/pull/8357)

**分析：** v2.3.0 很可能以“轻量化核心 + 插件化扩展”为主线，但大规模插件迁移可能带来安装、升级、兼容和插件分发方面的新问题。

### 4.2 最活跃的插件主题需求

#### [#8071：为插件增加语义化主题扩展点](https://github.com/agentscope-ai/QwenPaw/issues/8071)

- 评论数：**7**
- 反应数：**0**
- 核心诉求：当前 Console 主题系统主要面向最终用户，插件只能设置有限的 `colorPrimary`，插件作者无法深度定制自己的 UI。
- 诉求方向：
  - 语义化 token；
  - 插件级主题覆盖；
  - 背景、surface、圆角、hover 等更细粒度控制；
  - 避免插件主题侵入全局主题。

**分析：** 评论数是当前 Issues 中最高的，说明插件 UI 定制是较明确的扩展性痛点。该需求与 v2.3.0 的插件化方向匹配，但目前尚未看到直接对应的实现 PR。

### 4.3 Hub 团队协作需求

#### [#8275：Hub 支持全局 Skill 和 MCP 统一管理与共享](https://github.com/agentscope-ai/QwenPaw/issues/8275)

- 评论数：**2**
- 反应数：**1**
- 核心诉求：
  - 管理员统一安装和更新 Skill；
  - 统一配置 MCP；
  - 所有成员自动继承；
  - 保留个人覆盖能力；
  - 降低团队重复配置成本。

**分析：** 这是典型的多用户团队场景需求。当前 Hub 已具备多用户管理能力，但 Skill/MCP 仍偏个人配置，资源治理能力存在明显缺口。短期未必进入 v2.3.0，但可能成为 Hub 后续版本的重要方向。

### 4.4 升级后模型和渠道回归

#### [#8378：升级后模型调用异常](https://github.com/agentscope-ai/QwenPaw/issues/8378)

- 评论数：**1**
- 关联现象：旧版 `agent.json` 中的 `active_model` 配置可能在升级后失效。
- 用户关注点：配置兼容、迁移策略以及升级后模型是否能自动恢复。

#### [#8388：升级后 QQ 渠道无法使用](https://github.com/agentscope-ai/QwenPaw/issues/8388)

- 评论数：**1**
- 核心错误：`No module named '_qwenpaw_remote_backend'`
- 影响范围：不仅是 QQ，工具调用、读取文件、执行 Python 等基础能力也可能受到影响。

**分析：** 两个升级回归问题同时出现，说明 v2.2.x 升级路径需要加强兼容性和端到端验证，特别是安装器、sidecar、模型配置和渠道运行时之间的组合关系。

---

## 5. Bug 与稳定性

以下按影响范围和潜在数据/服务影响程度排序。

### P0/P1：高优先级问题

#### 1. 飞书网络调用阻塞主事件循环

- Issue：[#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)
- 影响：
  - 网络不通时可能阻塞整个服务；
  - `/api/healthz` 超时；
  - `SIGTERM` 无法及时退出；
  - 可能导致所有渠道和 API 请求受到影响。
- 状态：**尚无明确对应修复 PR**
- 建议：尽快将同步网络调用移出主事件循环，增加连接超时、熔断和后台任务隔离。

#### 2. Hub 容器内 Docker 启动失败

- Issue：[#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359)
- 现象：Hub 运行在容器内时，Docker runtime readiness 探测硬编码使用 `127.0.0.1`，触发 `Errno 111`。
- 影响：容器化 Hub 的 Docker 启动链路不可用。
- 状态：**尚无明确对应修复 PR**
- 建议：使用容器网络地址或可配置 host，并补充容器内启动集成测试。

#### 3. 升级后 QQ 渠道及基础运行时异常

- Issue：[#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)
- 现象：升级后出现 `_qwenpaw_remote_backend` 缺失，影响 QQ 和部分工具调用。
- 影响：可能造成渠道、工具执行和本地运行环境整体不可用。
- 状态：**尚无明确对应修复 PR**
- 建议：优先检查安装器是否完整部署运行时模块，并增加升级矩阵测试。

#### 4. 升级后模型调用异常

- Issue：[#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)
- 现象：旧版 `agent.json` 的 `active_model` 配置在升级后可能无法正常生效。
- 影响：已有用户的模型配置需要手工迁移，造成升级后核心能力中断。
- 状态：**尚无明确对应修复 PR**
- 建议：补充旧配置迁移、自动修复和启动日志提示。

### P1：高优先级稳定性问题

#### 5. 媒体历史导致请求体过大和会话卡死

- Issue：[#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)
- 现象：
  - 请求体达到约 **48 MB**；
  - Provider 拒绝请求；
  - 会话进入长期不可恢复状态。
- 对应 PR：
  - [#8337：停止重复发送不再需要的媒体](https://github.com/agentscope-ai/QwenPaw/pull/8337)
  - [#8299：Provider 拒绝视频时无视频重试](https://github.com/agentscope-ai/QwenPaw/pull/8299)
- 状态：**已有修复 PR，待合并**
- 评价：这是今日最明确、覆盖面较广的稳定性改进之一，但应继续增加媒体清理、请求大小限制和失败会话恢复机制。

#### 6. DingTalk 过期 `sessionWebhook` 导致最终回复静默丢失

- Issue：[#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)
- 现象：最终回复发送时 `sessionWebhook` 已过期，错误码 `300001`，用户无任何提示。
- 影响：任务在用户侧表现为“长时间无响应”，且消息可能永久丢失。
- 状态：**尚无明确对应修复 PR**
- 建议：增加 Open API fallback、重试机制、明确错误上报及用户可见的失败状态。

#### 7. 跨会话消息被拆分为独立聊天页面

- Issue：[#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)
- 现象：同一 session 中的 `chat_with_agent` 消息在 UI 中被注册为新的 chat，破坏会话连续性。
- 影响：历史消息分散、子 Agent 对话难以追踪、用户认知成本增加。
- 状态：**尚无明确对应修复 PR**
- 建议：统一 session 标识和路由解析规则，增加跨渠道/子 Agent 的回归测试。

#### 8. QWENPAW_CORS_ORIGINS 通过 Web UI/CLI 设置不生效

- Issue：[#8374](https://github.com/agentscope-ai/QwenPaw/issues/8374)
- 原因：模块导入时读取并固定常量，而环境变量注入发生在导入之后。
- 影响：配置看似设置成功，但服务行为未改变，排障成本高。
- 状态：**尚无明确对应修复 PR**
- 建议：延迟读取配置，或在设置后触发安全的配置重载。

### P2：中等优先级问题

#### 9. Hub 本地模型给成员使用时显示异常

- Issue：[#8392](https://github.com/agentscope-ai/QwenPaw/issues/8392)
- 状态：**已关闭**
- 说明：当前数据未提供关闭原因，建议确认是否为配置展示问题或已通过同步修复解决。

#### 10. Hub AI Gateway 默认超时过短

- Issue：[#8372](https://github.com/agentscope-ai/QwenPaw/issues/8372)
- 现象：文件处理任务经常超过默认 **120 秒**，导致超时。
- 影响：长任务、文档处理和大模型调用稳定性较差。
- 状态：**尚无明确对应修复 PR**
- 建议：区分连接超时、读取超时和任务超时，并提供可配置上限。

#### 11. 跨渠道引用回复丢失控制命令

- Issue：[#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)
- 现象：在引用消息中发送 `/stop` 等命令时，可能被识别为普通用户消息。
- 涉及七个渠道，影响统一渠道控制行为。
- 状态：**尚无明确对应修复 PR**

#### 12. Telegram 忽略 `reply_to_message`

- Issue：[#8329](https://github.com/agentscope-ai/QwenPaw/issues/8329)
- 现象：引用消息内容没有传递给 Agent。
- 影响：多轮对话上下文不完整。
- 状态：**尚无明确对应修复 PR**

#### 13. QQ/飞书/Telegram 等渠道能力不一致

关联问题：

- [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)
- [#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)
- [#8329](https://github.com/agentscope-ai/QwenPaw/issues/8329)
- [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)

**共性根因：**渠道适配层的事件、引用消息、控制命令、超时和异常处理尚未完全统一。

---

## 6. 功能请求与路线图信号

### 6.1 插件主题扩展

- Issue：[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 需求：提供插件可覆盖的语义化主题 token。
- 可能纳入版本：**v2.3.0 或之后的 Console 扩展版本**
- 依据：
  - v2.3.0 已明确强调插件化和可扩展性；
  - 当前插件主题能力过于有限；
  - Issue 讨论热度最高。
- 风险：需要建立稳定的主题 API，避免插件样式破坏全局 UI。

### 6.2 全局 Skill/MCP 管理

- Issue：[#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)
- 需求：
  - Hub 管理员统一管理 Skill/MCP；
  - 成员自动继承；
  - 支持统一更新；
  - 保留个人配置覆盖。
- 可能纳入版本：**Hub 后续小版本或 v2.3.x**
- 依据：符合 Hub 的团队化定位，但与核心 v2.3.0 插件重构并非完全同一范围。
- 关键设计问题：
  - 权限和版本锁定；
  - 个人覆盖与全局配置冲突；
  - MCP 凭据隔离；
  - 更新失败回滚。

### 6.3 流式生成期间关闭自动滚动

- Issue：[#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)
- 需求：允许用户锁定视口，避免 Agent 生成时页面自动滚到底部。
- 可能纳入版本：**Console 近期体验版本**
- 评估：属于低风险、高用户价值的 UI 设置，可优先实现。

### 6.4 插件安装容错

- PR：[#8345](https://github.com/agentscope-ai/QwenPaw/pull/8345)
- 需求：插件安装过程中，即使 `importlib.invalidate_caches()` 失败，也不能直接中止安装。
- 可能纳入版本：**近期插件修复版本**
- 评价：改动小、兼容性好，建议优先合并并补充不同 Python 发行版测试。

### 6.5 离线 Office/PDF 部署镜像

- PR：[#8328](https://github.com/agentscope-ai/QwenPaw/pull/8328)
- 需求：提供内置 Office/PDF 工具链的离线镜像变体。
- 可能纳入版本：**部署能力增强版本**
- 适用场景：无法联网安装依赖的团队、企业内网和文档处理环境。
- 注意：镜像体积、许可证和更新维护成本需要单独评估。

### 6.6 v2.3.0 轻量化与插件化

- Issue：[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)
- 可能路线：
  1. 核心服务进一步拆分；
  2. 渠道通过插件描述文件加载；
  3. 渠道运行于独立子进程；
  4. 插件安装和升级流程标准化；
  5. 降低主进程 SDK 导入和启动成本。
- 主要风险：
  - 插件协议变更；
  - 插件版本兼容；
  - 进程间通信；
  - 数据和会话状态一致性；
  - 旧安装方式迁移。

---

## 7. 用户反馈摘要

### 7.1 升级体验是当前最明显的负面反馈来源

用户主要担忧：

- 升级后模型配置失效：[#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)
- 升级后 QQ 渠道无法使用：[#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)
- Hub 本地模型展示异常：[#8392](https://github.com/agentscope-ai/QwenPaw/issues/8392)

这些反馈共同指向：

- 升级路径缺少足够的配置迁移；
- 渠道、安装器、sidecar 和后端模块之间存在版本耦合；
- 用户需要手工排查 Python 模块、模型配置和运行时环境。

### 7.2 渠道可靠性直接影响服务可用性

在飞书、QQ、Telegram、钉钉等场景中，用户关注的不只是“能否连接”，还包括：

- 网络异常时主服务是否仍可响应；
- 引用消息上下文是否完整；
- 控制命令是否能正确执行；
- 超时后是否能得到明确反馈；
- 最终回复是否可能丢失。

其中 [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) 和 [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) 对生产可用性影响较大。

### 7.3 多用户团队需要“可管理”而不只是“可使用”

Hub 用户希望将 Skill 和 MCP 从个人配置提升为团队资源：

- 管理员统一安装；
- 成员自动继承；
- 统一升级；
- 保留个人定制。

这说明用户对 Hub 的期待已从单用户控制台扩展到团队级 AI 能力治理。

### 7.4 UI 反馈总体偏正面，但细节问题影响信任

已有功能方向获得关注：

- 主题扩展：[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)
- 自动滚动控制：[#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)

但会话草稿、会话切换和删除等基础行为仍存在问题：

- [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)
- [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)
- [#8368](https://github.com/agentscope-ai/QwenPaw/issues/8368)
- [#8274](https://github.com/agentscope-ai/QwenPaw/pull/8274)

这类问题虽然不一定导致服务宕机，但会直接影响用户对数据一致性和会话可靠性的信任。

---

## 8. 待处理积压

### 8.1 长期开放且影响较大的 Issue

#### [#8071：插件主题扩展](https://github.com/agentscope-ai/QwenPaw/issues/8071)

- 创建时间：2026-10-01
- 评论数：7，为当前最活跃主题 Issue。
- 维护建议：明确主题 token API 方案，并指定 v2.3.0 是否纳入。

#### [#7339：关闭流式生成自动滚动](https://github.com/agentscope-ai/QwenPaw/issues/7339)

- 创建时间：2026-08-27
- 维护建议：该需求明确、实现成本较低，建议排入近期 Console 版本。

#### [#8078：跨会话消息分裂为多个聊天页面](https://github.com/agentscope-ai/QwenPaw/issues/8078)

- 创建时间：2026-10-02
- 维护建议：补充统一 session 路由设计，避免跨 Agent/渠道场景持续产生数据分裂。

#### [#8275：全局 Skill/MCP 管理](https://github.com/agentscope-ai/QwenPaw/issues/8275)

- 维护建议：虽然评论数不高，但属于团队级能力的关键缺口，应明确 Hub 产品路线。

### 8.2 高风险但尚无明确修复 PR 的 Issues

以下问题应列入近期稳定性跟踪：

- [#8350：飞书同步网络调用阻塞主事件循环](https://github.com/agentscope-ai/QwenPaw/issues/8350)
- [#8359：Hub 容器内 Docker 启动失败](https://github.com/agentscope-ai/QwenPaw/issues/8359)
- [#8378：升级后模型调用异常](https://github.com/agentscope-ai/QwenPaw/issues/8378)
- [#8388：升级后 QQ 渠道无法使用](https://github.com/agentscope-ai/QwenPaw/issues/8388)
- [#8374：CORS 环境变量设置不生效](https://github.com/agentscope-ai/QwenPaw/issues/8374)
- [#8343：DingTalk 最终回复静默丢失](https://github.com/agentscope-ai/QwenPaw/issues/8343)
- [#8342：七渠道引用回复中的控制命令路由异常](https://github.com/agentscope-ai/QwenPaw/issues/8342)
- [#8329：Telegram 忽略引用消息上下文](https://github.com/agentscope-ai/QwenPaw/issues/8329)

### 8.3 大型开放 PR 的积压风险

#### [#8187：渠道插件化和子进程隔离](https://github.com/agentscope-ai/QwenPaw/pull/8187)

- 标记：`size/XXXL`
- 风险：涉及架构、插件协议、进程生命周期和渠道兼容性。
- 维护建议：拆分评审范围，优先完成协议、迁移和回滚方案。

#### [#8357：Creator 2.0.2 发布](https://github.com/agentscope-ai/QwenPaw/pull/8357)

- 标记：`size/XXXL`
- 风险：插件功能与 narration safety 同时进入发布，验证面较广。
- 维护建议：明确 2.0.2 发布范围、兼容基线和回滚方案。

#### [#8376：PowerContext 记忆 API 适配](https://github.com/agentscope-ai/QwenPaw/pull/8376)

- 标记：`size/XXXL`
- 风险：涉及外部记忆服务和结构化上下文格式。
- 维护建议：补充 PowerContext 版本兼容矩阵及真实环境集成测试。

### 8.4 测试基础设施积压

#### [#8377：干净检出时 pytest 收集失败](https://github.com/agentscope-ai/QwenPaw/pull/8377)

虽然 PR 已关闭，但 Issue [#8377](https://github.com/agentscope-ai/QwenPaw/issues/8377) 仍值得关注。测试无法在干净检出环境收集，会削弱贡献者参与门槛和 CI 信号可信度。

---

## 总结判断

QwenPaw 当前处于 **“高并行开发 + 大规模架构演进 + 发布后问题收敛”** 阶段。安全版本发布和多项修复 PR 表明项目响应能力较强，尤其是媒体请求、渠道隔离、配置一致性和供应链合规方面已有明确改进方向。

但从社区问题看，当前最需要优先解决的是：

1. **升级回归和安装完整性**；
2. **渠道异常对主服务的隔离能力**；
3. **Hub 容器化和长任务超时**；
4. **跨会话状态一致性**；
5. **插件化重构的兼容性与可回滚性**。

在这些问题完成系统性回归验证前，建议将 v2.3.0 的发布标准从“功能完成度”扩展为“插件迁移完成度、升级成功率、渠道故障隔离和长时间任务稳定性”。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-23**  
**数据范围：过去 24 小时 GitHub 活跃记录**  
**项目健康度判断：活跃度高，但处于高强度集成与稳定性收敛期**

## 1. 今日速览

- 过去 24 小时共更新 **50 条 Issues**、**50 条 PRs**，其中 Issues 新开或活跃 **48 条**、关闭 **2 条**；PR 待合并 **44 条**、合并或关闭 **6 条**。
- 项目发布 **v0.22.5**，集中整合自 v0.22.4 以来的约 **81 个 PR**，覆盖 CLI、安装器、Microsoft Store、Docker 和 Hermes Cloud，当前重点不是大规模功能扩张，而是将统一网关、多 Profile、桌面端及插件生态进行稳定化收敛。
- 今日讨论最集中的是统一网关的会话所有权、跨网关协作、桌面端连接恢复、会话压缩、消息路由和权限隔离等问题，说明架构升级后的兼容性债务正在集中显现。
- 项目整体仍保持较高开发吞吐，但 **44 个 PR 尚未合并**，且多个问题涉及 P0/P2 级别风险；当前健康度可评为“开发活跃、工程风险偏高、版本发布稳定但后续修复压力较大”。

---

## 2. 版本发布

### v0.22.5 — Patch Release

- **发布日期：** 2026-10-22
- **版本定位：** 稳定补丁版本
- **内容范围：** 汇总 v0.22.4 之后合并的约 **81 个 PR**，同步发布到：
  - GitHub Release
  - CLI 与安装器
  - Microsoft Store
  - Docker
  - Hermes Cloud
- **官方说明：** 更完整的整理版变更说明将在 **v0.23.0** 发布。

从今日 Issue 反馈看，v0.22.5 并未意味着所有回归已经消除，Windows 更新、桌面端连接、网关重启、会话恢复、压缩写回等问题仍在持续暴露。升级用户应重点检查：

1. 多 Profile 是否已迁移到统一 Multiplex Gateway；
2. Windows 更新后 Gateway 是否能够正常暂停、替换并重启；
3. Desktop 是否能够发现已运行的 standalone Gateway；
4. 历史会话、冷会话和 WebUI 会话能否继续恢复；
5. Telegram、Discord 等多 Bot 场景中的消息是否路由至正确 Profile。

目前数据中没有明确标注 v0.22.5 的破坏性变更，但统一网关迁移、旧会话兼容和 Windows Gateway 更新路径存在较高风险，建议将其视为**需要回归测试的升级版本**，而非无感升级版本。

---

## 3. 项目进展

### 3.1 重要合并/关闭方向

从数据中可确认以下方向正在推进：

- **统一 Gateway Runtime 持续收敛**  
  追踪 Issue [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 表明，核心改造 #106742 已于 10 月 14 日合并，目前主要工作转为多平台、多会话和消息投递的事后修复。

- **Gateway 与桌面端连接架构调整**  
  Desktop、CLI、Gateway 和 ACP 之间正在重新梳理会话发现、恢复和连接流程，相关问题集中在冷会话、WebUI 会话、Bot Chat handoff 以及 standalone Gateway 自动发现。

- **插件目录和插件生态继续扩展**  
  PR [#143430](https://github.com/NousResearch/hermes-agent/pull/143430) 更新 `hermes-cron` 至 1.5.1，PR [#142073](https://github.com/NousResearch/hermes-agent/pull/142073) 更新 `provider-status` 至 1.6.4，PR [#142713](https://github.com/NousResearch/hermes-agent/pull/142713) 更新意大利语语言包版本，显示插件目录和本地化生态仍在活跃维护。

- **Computer Use 能力增强**  
  PR [#142343](https://github.com/NousResearch/hermes-agent/pull/142343) 修复严格工具 Schema 下的参数校验问题；PR [#142583](https://github.com/NousResearch/hermes-agent/pull/142583) 增加有序 `run_steps` 批量执行能力，用于先验证完整动作序列再按顺序执行。

- **Delegate 与后台任务机制增强**  
  PR [#143423](https://github.com/NousResearch/hermes-agent/pull/143423) 支持通过 `/delegation` 保存设置，并在 `--now` 下重建当前会话工具；PR [#140691](https://github.com/NousResearch/hermes-agent/pull/140691) 尝试修复后台委派任务完成后结果无法返回的问题。

- **跨平台工具和运行环境修复**  
  PR [#140698](https://github.com/NousResearch/hermes-agent/pull/140698) 修复 Docker managed config 未正确应用到 per-turn terminal policy；PR [#140703](https://github.com/NousResearch/hermes-agent/pull/140703) 修复容器工作区路径校验；PR [#140695](https://github.com/NousResearch/hermes-agent/pull/140695) 修复 Windows Unicode Home 路径和启动身份问题。

- **网站访问策略缓存修复已关闭**  
  PR [#130377](https://github.com/NousResearch/hermes-agent/pull/130377) 和 [#109068](https://github.com/NousResearch/hermes-agent/pull/109068) 均围绕网站策略 disabled fast path 的缓存作用域和 TTL 进行修复，说明安全策略边界仍在加固。

### 3.2 推进程度评价

- **功能推进：** 中高。委托、Computer Use、Signal、插件目录和本地化均有持续开发。
- **平台成熟度：** 中等。统一 Gateway 架构已落地，但 Windows、macOS、Desktop、CLI 和多平台消息适配仍存在大量边缘问题。
- **维护吞吐：** 高。24 小时内有 50 条 PR 更新，说明维护者和贡献者仍在高负载工作。
- **合并效率：** 中等偏低。50 条 PR 中仅 6 条明确处于合并/关闭状态，积压较明显。
- **整体评价：** 项目没有停滞，但已从“功能快速扩张”进入“多平台架构回归修复和质量收敛”阶段。

---

## 4. 社区热点

### 4.1 最活跃 Issue

#### 1. 统一 Gateway 所有权与后续修复

- **Issue：** [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)
- **状态：** CLOSED
- **评论数：** 214
- **热度：** 今日最高

该 Issue 追踪 #106742 的 post-merge 修复，关注“每个本地会话只由一个 Gateway 拥有”的核心约束。214 条评论表明，它已经成为统一 Gateway 改造的事实跟踪中心。

**背后诉求：**

- 避免 Desktop、CLI、TUI 和平台 Gateway 重复接管同一会话；
- 防止消息重复投递、状态分叉和会话恢复失败；
- 明确跨进程、跨 Profile 和跨平台的所有权模型；
- 在架构调整后保持向后兼容。

这是当前项目最重要的架构稳定性和消息一致性议题。

#### 2. 让 Bots 跨 Gateway 协作

- **Issue：** [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
- **状态：** OPEN
- **评论数：** 40

该功能希望让拥有独立模型、工具、记忆和凭证的个人 Agent，能够跨机器乃至跨所有者协作，同时不牺牲用户控制权。

**背后诉求：**

- 跨机器任务协作；
- 保留每个 Bot 的 Profile、模型和凭证隔离；
- 支持未来跨用户的 Agent 互操作；
- 在授权、消息路由和权限边界上建立统一机制。

这是明确的中长期产品路线信号，但实现复杂度会直接触及身份、授权、审计和多 Gateway 状态同步。

#### 3. Kanban 认证阻塞任务永久挂起

- **Issue：** [#83047](https://github.com/NousResearch/hermes-agent/issues/83047)
- **状态：** OPEN
- **评论数：** 9

`blocker_auth` respawn guard 可能将 ready task 放入无限等待状态，任务既不继续执行，也没有进入正常失败计数和 drain 流程。

**背后诉求：**

- 认证失败应有明确的重试、阻塞和终止语义；
- 任务不能因 respawn guard 永久沉默；
- 需要可观测的阻塞原因和人工恢复路径。

### 4.2 今日高关注新增 Issues

- **Windows 更新后权限和模型选择异常：** [#143326](https://github.com/NousResearch/hermes-agent/issues/143326)  
  反映 Windows Desktop 与 Gateway 权限级别不一致，可能导致连接错误和模型选择延迟。

- **多 Profile Telegram 消息错投：** [#143364](https://github.com/NousResearch/hermes-agent/issues/143364)  
  副 Profile 的中途进度和后台审查消息被发送到主 Profile，涉及安全边界与消息归属。

- **后台记忆审查违反用户“不保存”要求：** [#116788](https://github.com/NousResearch/hermes-agent/issues/116788)  
  用户明确要求不保存敏感信息，但后台 reviewer 仍可能提出并持久化相关事实，直接关系到隐私和信任。

- **会话压缩结果静默丢失：** [#143402](https://github.com/NousResearch/hermes-agent/issues/143402)  
  NULL message id 触发 `int(None)`，导致压缩写回失败，用户可能持续使用未压缩会话，带来性能和上下文管理问题。

- **WebUI 会话无法从 Desktop 归档：** [#143110](https://github.com/NousResearch/hermes-agent/issues/143110)  
  暴露 Desktop 与 Gateway 对会话来源、挂载状态和归档接口理解不一致。

- **`GET /v1/skills` 持续返回 500：** [#142575](https://github.com/NousResearch/hermes-agent/issues/142575)  
  capabilities 已宣告接口可用，但实现因残留关键字参数而失败，属于 API 能力声明与实际行为不一致。

- **Windows `hermes update` 每次失败：** [#143331](https://github.com/NousResearch/hermes-agent/issues/143331)  
  stale `gateway.pid` 与锁处理导致 Gateway 暂停阶段失败，并且稳定通道降级策略直接退出。

- **Gateway 重启后主机没有 Gateway：** [#143416](https://github.com/NousResearch/hermes-agent/issues/143416)  
  Gateway 自认为由外部 supervisor 管理，但重启时实际找不到 supervisor，最终造成服务中断。

- **Group Chat 解散后副本复活：** [#143383](https://github.com/NousResearch/hermes-agent/issues/143383)、[#143382](https://github.com/NousResearch/hermes-agent/issues/143382)  
  解散事件没有成为不可逆状态，副本仍继续接收事件并重新显示为活跃房间。

- **跨 Profile 委派沿用房间成员权限：** [#143399](https://github.com/NousResearch/hermes-agent/issues/143399)  
  子 Agent 在 Group Chat 中调用危险命令时可能错误使用其他 Profile 或房间成员的审批模式，属于高风险权限隔离问题。

### 4.3 值得关注的 PR

- **Computer Use 严格 Schema 修复：** [#142343](https://github.com/NousResearch/hermes-agent/pull/142343)
- **Delegation 设置持久化：** [#143423](https://github.com/NousResearch/hermes-agent/pull/143423)
- **Signal RPC 附件内联：** [#53999](https://github.com/NousResearch/hermes-agent/pull/53999)
- **桌面嵌入式链接安全打开：** [#138561](https://github.com/NousResearch/hermes-agent/pull/138561)
- **Signal REST/WebSocket 新 API 支持：** [#53696](https://github.com/NousResearch/hermes-agent/pull/53696)
- **Gateway 后台委派结果回传：** [#140691](https://github.com/NousResearch/hermes-agent/pull/140691)
- **Windows Unicode 启动路径修复：** [#140695](https://github.com/NousResearch/hermes-agent/pull/140695)
- **容器工作区命名空间修复：** [#140703](https://github.com/NousResearch/hermes-agent/pull/140703)
- **会话租约所有权复核：** [#141102](https://github.com/NousResearch/hermes-agent/pull/141102)

---

## 5. Bug 与稳定性

以下按潜在影响排序。由于 Issue 状态本身不等于已修复，已明确对应 PR 的项目标注为“有修复 PR”；其余标注为“暂未确认修复”。

### P0 / 最高风险

#### 1. 多 Profile 消息错投

- **Issue：** [#143364](https://github.com/NousResearch/hermes-agent/issues/143364)
- **影响：** 副 Profile 的进度、审查或后台通知可能发送到主 Profile。
- **风险：** 消息泄露、上下文混淆、自动化操作作用于错误 Agent。
- **Fix PR：** 暂未确认。
- **状态：** OPEN，建议按安全事件优先处理。

#### 2. 委派子 Agent 使用错误审批模式

- **Issue：** [#143399](https://github.com/NousResearch/hermes-agent/issues/143399)
- **影响：** Group Chat 中的 routed subagent 可能沿用房间成员审批模式，而非目标 Profile 自身的权限设置。
- **风险：** 危险命令审批边界被绕过，或合法命令被错误拒绝。
- **Fix PR：** 暂未确认。
- **状态：** OPEN，属于权限隔离问题，应尽快补充回归测试。

#### 3. 统一 Gateway 会话所有权和消息投递回归

- **Issue：** [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)
- **影响：** 多入口共用本地会话时可能出现重复处理、错误接管或状态分叉。
- **风险：** 跨 Desktop、CLI、TUI 和平台 Gateway 的高概率数据与会话异常。
- **Fix PR：** 统一网关相关修复已有多项跟踪，但数据未提供完整对应合并结果。
- **状态：** 追踪 Issue 已关闭，不代表所有 post-merge 回归均已解决。

### P1 / 高风险

#### 4. 后台记忆审查保存用户明确禁止保存的信息

- **Issue：** [#116788](https://github.com/NousResearch/hermes-agent/issues/116788)
- **影响：** 用户偏好和敏感事实可能被后台 reviewer 提议或持久化。
- **风险：** 隐私承诺失效，长期记忆污染。
- **Fix PR：** 暂未确认。
- **状态：** OPEN。

#### 5. 会话压缩写回失败且静默丢弃

- **Issue：** [#143402](https://github.com/NousResearch/hermes-agent/issues/143402)
- **影响：** 压缩成功但数据库写回失败，结果被丢弃，会话持续膨胀。
- **风险：** 上下文超限、性能下降、重复 token 消耗。
- **Fix PR：** 暂未确认。
- **状态：** OPEN。

#### 6. Windows Gateway 更新失败或重启后崩溃

相关 Issues：

- [#143331](https://github.com/NousResearch/hermes-agent/issues/143331)
- [#143401](https://github.com/NousResearch/hermes-agent/issues/143401)

**表现：**

- stale PID 文件与锁冲突；
- 稳定通道降级拒绝导致更新退出；
- `.update_output.txt` 未加保护地删除触发 `WinError 32`；
- 新 Gateway 启动过程中崩溃。

**Fix PR：** 暂未明确对应。  
**状态：** OPEN，Windows 用户升级风险较高。

#### 7. Gateway 重启导致服务中断

- **Issue：** [#143416](https://github.com/NousResearch/hermes-agent/issues/143416)
- **影响：** `hermes gateway restart` 可能停止唯一 Gateway，却无法重新拉起。
- **风险：** 主机完全失去 Agent 服务。
- **Fix PR：** 暂未确认。
- **状态：** OPEN。

### P2 / 重要回归

- **`GET /v1/skills` 500：** [#142575](https://github.com/NousResearch/hermes-agent/issues/142575)  
  API 能力声明与实现不一致，影响 MCP、插件和工具发现。

- **Desktop 无法归档 WebUI 会话：** [#143110](https://github.com/NousResearch/hermes-agent/issues/143110)  
  会话来源和归档路径不一致。

- **Desktop 启动时无法发现已运行 Gateway：** [#143417](https://github.com/NousResearch/hermes-agent/issues/143417)  
  必须手动刷新才能连接，降低首次使用可靠性。

- **冷会话无法恢复：** [#139796](https://github.com/NousResearch/hermes-agent/issues/139796)  
  `session.resume` 仅依赖内存注册表，重启或被回收后返回 `not_found`。

- **Bot Chat handoff 后无法再次打开：** [#143286](https://github.com/NousResearch/hermes-agent/issues/143286)  
  Telegram handoff 改变了 session binding，Desktop 侧仍按原 Bot Chat registry 查找。

- **Group Chat 解散后继续接收事件：** [#143383](https://github.com/NousResearch/hermes-agent/issues/143383)、[#143382](https://github.com/NousResearch/hermes-agent/issues/143382)  
  生命周期终止语义没有在副本侧强制执行。

- **Desktop 跨机器群聊能力回归：** [#142248](https://github.com/NousResearch/hermes-agent/issues/142248)  
  跨机器 rooms、线程回复和 @ picker 能力受影响。

- **Discord slash command 同步超时：** [#123629](https://github.com/NousResearch/hermes-agent/issues/123629)  
  插件命令可能无法注册，影响 Bot 控制面。

- **Discord 按钮认证顺序错误：** [#143409](https://github.com/NousResearch/hermes-agent/issues/143409)  
  已通过 pairing 的用户在使用 role allowlist 时，按钮操作可能被拒绝。

- **CLI 新会话不重新同步 reasoning 流：** [#143414](https://github.com/NousResearch/hermes-agent/issues/143414)  
  `/new`、`/resume`、`/branch` 后实时 reasoning 显示消失。

### P3 / 功能与体验问题

- **Linux Desktop 默认透明度导致窗口几乎不可见：** [#143426](https://github.com/NousResearch/hermes-agent/issues/143426)
- **macOS 多 Profile 迁移后旧 LaunchAgent 仍重新抢占 Gateway：** [#143390](https://github.com/NousResearch/hermes-agent/issues/143390)
- **Windows Kanban worker 因 NumPy 插件加载锁死：** [#142271](https://github.com/NousResearch/hermes-agent/issues/142271)
- **插件 Gateway 重启后 hook 不注册：** [#143158](https://github.com/NousResearch/hermes-agent/issues/143158)
- **插件目录斜杠命令同步异常：** [#123629](https://github.com/NousResearch/hermes-agent/issues/123629)

---

## 6. 功能请求与路线图信号

### 6.1 跨 Gateway、跨 Bot 协作

- **需求 Issue：** [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
- **相关方向：**
  - Agent 间协作；
  - 跨机器和跨所有者协作；
  - Profile、模型、记忆和凭证隔离；
  - 权限与审计机制。

这是最具战略意义的功能请求，但必须建立在 Gateway 所有权、消息路由和审批模型稳定之后。短期内更适合先实现同一 Gateway 内、明确授权的 Profile 间协作，再逐步扩展到跨主机。

### 6.2 Delegation 配置持久化和动态工具重建

- **PR：** [#143423](https://github.com/NousResearch/hermes-agent/pull/143423)
- **信号：**
  - `/delegation` 可以影响路由；
  - 但工具 Schema 在 session 初始化时缓存；
  - 用户希望配置跨 session 保存，同时 `--now` 能即时重建当前工具。

该 PR 与近期多个委派和权限问题相互关联，建议下一版本优先合并，但必须补充 Profile 路由、审批模式和后台任务结果回传的测试。

### 6.3 Computer Use 的批量动作执行

- **PR：** [#142583](https://github.com/NousResearch/hermes-agent/pull/142583)
- **信号：**
  - 用户希望一次提交有序动作序列；
  - 由驱动层先完成整体 Schema 校验；
  - 执行后只返回一次批次观察结果。

如果 [#142343](https://github.com/NousResearch/hermes-agent/pull/142343) 的严格 Schema 修复同步合入，这一功能具备进入下一版本的较高可能性。

### 6.4 记忆文档链

- **Issue：** [#116564](https://github.com/NousResearch/hermes-agent/issues/116564)
- **信号：**
  - 当前 `MEMORY.md` 有约 2200 字符上限；
  - 用户希望通过索引文件形成多级记忆文档链；
  - 适合长周期个人 Agent 和复杂知识管理。

该方向有明确用户需求，但在 [#116788](https://github.com/NousResearch/hermes-agent/issues/116788) 的记忆隐私问题解决前，不建议直接扩展记忆能力。

### 6.5 插件目录、Provider Status 和定时任务增强

- **PR：** [#143430](https://github.com/NousResearch/hermes-agent/pull/143430)
- **PR：** [#142073](https://github.com/NousResearch/hermes-agent/pull/142073)
- **Issue：** [#83047](https://github.com/NousResearch/hermes-agent/issues/83047)

这些变更表明项目希望继续扩大“个人 AI 操作系统”能力，包括：

- 定时任务和无人值守运行；
- Provider 状态监控；
- 插件目录；
- 任务卡、阻塞诊断和自动化作者过滤。

不过 Kanban 的认证阻塞逻辑需要先修正，否则自动化规模越大，任务静默挂起的风险越高。

---

## 7. 用户反馈摘要

### 7.1 主要真实痛点

1. **升级后服务“不稳定、不可预测”**  
   Windows 用户集中反馈权限、锁文件、PID、更新输出文件和 Gateway 重启问题。用户希望升级过程具备可恢复性，而不是在中途留下无 Gateway 的主机。

2. **多 Profile 和多平台消息路由容易出错**  
   Telegram、Discord、Desktop 和 CLI 用户都报告了消息错投、会话找不到、线程能力丢失和冷会话恢复失败。核心诉求是：每个会话、Profile 和 Bot 的身份必须始终稳定。

3. **历史会话和 WebUI 会话兼容性不足**  
   旧会话、非内存注册表会话、WebUI 会话和 handoff 后会话均出现 `not_found`。这说明用户在依赖长期上下文和跨入口连续工作，系统必须提供冷加载和统一索引。

4. **后台记忆机制的信任边界不足**  
   用户对“明确要求不保存但后台 reviewer 仍提出保存”非常敏感。记忆功能必须把用户拒绝、删除和不可保存标记作为硬约束，而不仅是提示信息。

5. **自动化任务缺少失败可见性**  
   Kanban 任务可能因认证问题永久停留 ready 或 blocker 状态。用户需要明确的失败原因、重试次数、阻塞原因和人工接管入口。

6. **插件和命令系统仍存在“声明可用但实际不可用”**  
   `/v1/skills` 500、Discord 命令未注册、插件 hook 重启后失效，说明能力发现、实际加载和运行时注册之间仍缺乏一致性检查。

### 7.2 正面信号

- v0.22.5 能在一天内汇总约 81 个 PR 并同步多个发行渠道，发布流程仍然有效。
- 统一 Gateway 改造已经进入 post-merge 修复阶段，而不是停留在设计讨论。
- Computer Use、Delegation、Signal、定时任务、Provider Status 和多语言支持均有真实贡献者和明确实现。
- 社区愿意提供详细环境、复现步骤、日志和架构分析，说明问题报告质量较高，便于维护者定位回归。

### 7.3 不满意点

- 同一架构变更会同时影响 Desktop、CLI、Gateway、Telegram、Discord 和 WebUI，用户需要手动刷新、手动恢复或重新绑定。
- 某些错误只返回 `not_found`，没有说明是冷会话、已回收、来源不匹配还是路由错误。
- 一些安全与权限问题被标记为普通 Bug，说明权限策略需要在产品层和测试层进一步显式化。
- v0.22.5 的官方变更说明较简略，而用户需要按 Profile、平台和入口进行升级回归。

---

## 8. 待处理积压

### 8.1 需要优先响应的长期或高影响事项

1. **统一 Gateway post-merge 修复**
   - [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)
   - 已关闭但仍承载大量后续修复和兼容性验证。
   - 建议建立公开的剩余问题清单，按 Gateway、Desktop、CLI、Telegram、Discord 和 WebUI 分层跟踪。

2. **跨 Gateway Bot 协作**
   - [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)
   - 讨论热度高、战略价值高，但目前仍处于设计和评审阶段。
   - 建议先明确权限模型和会话所有权，再承诺跨机器、跨所有者能力。

3. **记忆隐私和长期记忆架构**
   - [#116788](https://github.com/NousResearch/hermes-agent/issues/116788)
   - [#116564](https://github.com/NousResearch/hermes-agent/issues/116564)
   - 应将“不保存”约束、记忆链和后台 reviewer 的审计机制放在同一路线图中处理。

4. **Windows 更新和 Gateway 生命周期**
   - [#143331](https://github.com/NousResearch/hermes-agent/issues/143331)
   - [#143401](https://github.com/NousResearch/hermes-agent/issues/143401)
   - [#143416](https://github.com/NousResearch/hermes-agent/issues/143416)
   - [#142271](https://github.com/NousResearch/hermes-agent/issues/142271)
   - 这些问题均可能造成服务中断，且分布在更新、锁、启动、插件加载和监督进程不同环节。

5. **会话恢复和历史状态兼容**
   - [#143402](https://github.com/NousResearch/hermes-agent/issues/143402)
   - [#143110](https://github.com/NousResearch/hermes-agent/issues/143110)
   - [#139796](https://github.com/NousResearch/hermes-agent/issues/139796)
   - [#143286](https://github.com/NousResearch/hermes-agent/issues/143286)
   - 建议建立统一的 session registry、冷加载和来源映射，而不是让各入口分别维护隐式状态。

6. **多 Profile 权限与消息隔离**
   - [#143364](https://github.com/NousResearch/hermes-agent/issues/143364)
   - [#143399](https://github.com/NousResearch/hermes-agent/issues/143399)
   - [#143383](https://github.com/NousResearch/hermes-agent/issues/143383)
   - [#143382](https://github.com/NousResearch/hermes-agent/issues/143382)
   - 这些问题共同指向 Profile、房间、Bot 和委派任务之间的身份边界问题，应增加跨 Profile 安全回归测试。

7. **插件加载、能力声明和命令注册**
   - [#142575](https://github.com/NousResearch/hermes-agent/issues/142575)
   - [#143158](https://github.com/NousResearch/hermes-agent/issues/143158)
   - [#123629](https://github.com/NousResearch/hermes-agent/issues/123629)
   - 目前存在“capabilities 宣告可用但接口 500”“插件重启后 hook 未注册”“Discord 命令同步超时”等一致性问题。

### 8.2 维护建议

- 为 v0.22.5/v0.23.0 建立公开的迁移与兼容性矩阵，至少覆盖 Windows、macOS、Linux、Desktop、CLI、Telegram、Discord、WebUI 和 Docker。
- 将 P0/P2 安全与稳定性问题从普通功能 PR 中独立出来，优先合并修复，再继续扩展插件和 Computer Use 功能。
- 为每个 Gateway-owned session 增加唯一所有权标识、可恢复注册表和冷加载路径。
- 对所有 Profile 间消息、委派任务和 Group Chat 生命周期增加自动化安全测试。
- 对后台记忆 reviewer 增加“用户拒绝保存”硬测试，并将敏感属性持久化纳入审计。
- 在 Issue/PR 管理上，当前 **44 个待合并 PR** 需要建立优先级和合并队列，否则大量修复会在版本切换时继续累积。

## 总结

Hermes Agent 当前仍是一个开发活跃、生态扩张迅速的个人 Agent 项目，但 v0.22.5 的发布节点也标志着项目进入关键的稳定性阶段。下一阶段的核心目标应从“继续增加 Gateway、插件和桌面功能”转向：

1. 统一 Gateway 的会话所有权和冷恢复；
2. 多 Profile 消息、权限和委派隔离；
3. Windows 更新与服务监督可靠性；
4. 后台记忆和隐私边界；
5. 插件能力声明、加载和运行时注册的一致性。

若上述问题在 v0.23.0 前完成系统性收敛，项目健康度有望从“高活跃但高风险”提升到“高活跃且可持续交付”。

</details>

<details>
<summary><strong>OpenHuman</strong> — <a href="https://github.com/tinyhumansai/openhuman">tinyhumansai/openhuman</a></summary>

# OpenHuman 项目动态日报

**日期：2026-10-23**  
**数据范围：过去 24 小时**  
**仓库：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)**

---

## 1. 今日速览

- 过去 24 小时共更新 **17 个 Issues**、**50 个 PRs**，其中 Issue 新开或活跃 10 条、关闭 7 条，PR 待合并 48 条、合并或关闭 2 条；没有新版本发布。
- 今日主线集中在**安全与权限收口、运行时稳定性、凭据与日志脱敏、测试边界补强**，另有多项 shell、子代理和嵌入式运行时能力正在推进。
- PR 数量显著高于 Issue，且多数 PR 仅新增测试或修复低优先级问题，说明项目当前处于**高并发工程治理与质量加固阶段**，但发布吞吐偏低。
- 安全方面值得关注：`core.token` 文件权限、HTTP Basic Auth 时序比较、租户隔离、日志中的 API Key/Bearer Token 泄露等风险正在集中修复。
- 今日没有版本发布，且 48 个 PR 仍待合并，表明当前更偏向**代码评审和合并积压消化**，尚未形成对外可见的版本节奏。

**项目健康度评估：中高，趋势偏积极。**  
安全边界和可观测性投入明显增强，Issue 关闭数量也较健康；但待合并 PR 达 48 个、发布数量为 0，显示评审与集成吞吐仍是主要瓶颈。

---

## 2. 版本发布

过去 24 小时**无新版本发布**，因此没有可报告的更新内容、破坏性变更或迁移事项。

---

## 3. 项目进展

今日已合并或关闭且影响较重要的 PR 主要如下。

### 3.1 Agent 计划与线程目标解耦

- **PR #8233：抑制 active goal 时，仍保留计划等运行状态**
  - 已关闭。
  - 在 `TurnOverrides::suppress_active_goal` 场景中，线程目标不再进入本轮模型输入，但计划、Agent notes 和本轮事实仍保留在 run-state block。
  - 这有助于区分“对外回复/流程/cron 运行”与“需要继续推进线程目标”的 Agent 行为，减少目标泄漏或无效规划。
  - 链接：[PR #8233](https://github.com/tinyhumansai/openhuman/pull/8233)

### 3.2 推断模块边界收口

- **Issue #8092：将 inference/ 从 host 迁往 tinyinference、tinyagents 和 tinyjuice**
  - 已关闭。
  - 目标是移除 OpenHuman 核心中约 13.8k 行非测试推理代码，避免 host 与独立模块重复承担模型、Provider 适配职责。
  - 对宿主长期维护成本、模块独立升级和 vendor 依赖治理具有积极意义。
  - 链接：[Issue #8092](https://github.com/tinyhumansai/openhuman/issues/8092)

### 3.3 测试所有权归位

- **Issue #8089：将模块行为测试迁回对应 tiny* 仓库**
  - 已关闭。
  - OpenHuman 将只保留组合、宿主策略、审批与安全、租户隔离、适配器、RPC 协议及数据兼容测试；模块自身行为测试由模块仓库负责。
  - 这有助于降低重复测试与覆盖率“填充”，但短期也会增加跨仓库迁移协调成本。
  - 链接：[Issue #8089](https://github.com/tinyhumansai/openhuman/issues/8089)

### 3.4 存储驱动静态化

- **Issue #8131：将 tinystoragedrivers 建设为静态、硬化的存储原语**
  - 已关闭。
  - 计划拆分数据类型、API trait 和各 primitive crate，并将 engine 改为 feature；目标是让文档、流、KV、blob、queue、secret 等存储能力具有更稳定的边界。
  - 链接：[Issue #8131](https://github.com/tinyhumansai/openhuman/issues/8131)

### 3.5 配置与推理延迟优化

- **Issue #8207：临时路由只在配置加载时应用和记录一次**
  - 已关闭。
  - 修复单个 turn 在模型调用期间重复输出约 106 条 `[config][ephemeral-route]` 日志的问题，降低关键日志被淹没的风险。
  - 链接：[Issue #8207](https://github.com/tinyhumansai/openhuman/issues/8207)

- **Issue #8206：临时路由支持 Provider 选项与 reasoning effort**
  - 已关闭。
  - 允许 `EphemeralRoute` 携带 OpenAI 兼容 Provider 的路由偏好及推理强度，避免所有 OpenRouter 请求都落到默认低价排序策略。
  - 链接：[Issue #8206](https://github.com/tinyhumansai/openhuman/issues/8206)

- **Issue #8208：恢复线程且无 integrations backend 时，不再沿用旧 prompt**
  - 已关闭。
  - 解决部署后恢复的线程继续发送旧 system prompt、无法刷新 Agent prompt 的问题。
  - 链接：[Issue #8208](https://github.com/tinyhumansai/openhuman/issues/8208)

### 3.6 Sentry 跨产品治理

- **Issue #8104：统一各产品的 Sentry 项目与 CI token 处理**
  - 已关闭。
  - 修复 CI 静默吞掉 source map 上传失败的问题，并推动各生产产品拥有独立且经验证的 Sentry 项目。
  - 链接：[Issue #8104](https://github.com/tinyhumansai/openhuman/issues/8104)

**整体推进判断：**  
今日并非以单个“大功能”上线为主，而是完成了一轮显著的**架构边界清理、行为修正和基础设施治理**。这对长期维护有利，但大量 PR 尚未合并，实际用户可感知提升仍取决于后续集成与发布。

---

## 4. 社区热点

### 4.1 最活跃 Issue

1. **Issue #7328：将安全、策略、审批和沙箱统一到 tinysecurity 总线**
   - **20 条评论，为今日评论最多的 Issue。**
   - 诉求是将授权、策略、审批、沙箱和审计决策集中到 TinySecurity，同时保持 OpenHuman 的宿主适配与执行生命周期。
   - 这表明社区关注点已从“功能是否可用”升级到“权限边界是否统一、可审计、可迁移”。
   - 链接：[Issue #7328](https://github.com/tinyhumansai/openhuman/issues/7328)

2. **Issue #8088：统一 async `spawn_subagent`，精简 tinyagents**
   - **14 条评论。**
   - 目标是去掉宿主中大量未被产品实际使用的团队、图工作流、并行 fan-out、worktree 等通用子代理机制，只保留 OpenHuman 真正需要的异步生成能力。
   - 本质是“减少过度工程”与“保持 Agent 可扩展性”之间的架构取舍。
   - 链接：[Issue #8088](https://github.com/tinyhumansai/openhuman/issues/8088)

3. **Issue #6983：内存队列 LLM 并发可配置**
   - **7 条评论。**
   - 当前 `llm_permits` 固定为单任务，大规模首次 ingest 在云端摘要模型上可能需要数天。
   - 用户诉求非常具体：让 tinymemory 到 tinycortex 的并发参数真正贯通，以改善批量记忆导入吞吐。
   - 链接：[Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)

4. **Issue #8202 / #8203 / #8201：Sentry 后续治理**
   - 各 **2 条评论**。
   - 分别处理统一 release 命名、token 所有权与轮换、缺失 token 时发布失败及 commit 关联验证。
   - 反映社区对“可定位、可追责、可轮换”的生产可观测性要求正在提高。
   - 链接：
     - [Issue #8202](https://github.com/tinyhumansai/openhuman/issues/8202)
     - [Issue #8203](https://github.com/tinyhumansai/openhuman/issues/8203)
     - [Issue #8201](https://github.com/tinyhumansai/openhuman/issues/8201)

### 4.2 重点开放 PR

- **PR #8234：Shell timeout 改为“调用返回时间”，命令继续后台运行**
  - 今日最核心的功能 PR。
  - `timeout_secs` 不再杀死命令；默认 120 秒、最多 600 秒后先返回当前输出，后台由 `shell_process` 跟进。
  - 直接回应长命令阻塞 Agent turn 的可用性问题。
  - 链接：[PR #8234](https://github.com/tinyhumansai/openhuman/pull/8234)

- **PR #7331：集成 TinySecurity 并迁移文件系统授权**
  - 将安全决策、脱敏、egress 和审计迁移至 TinySecurity，宿主保留审批与沙箱编排。
  - 链接：[PR #7331](https://github.com/tinyhumansai/openhuman/pull/7331)

- **PR #8252 / #8316：扩大日志脱敏范围**
  - 覆盖 snake_case/JSON token、失败入站详情、query password、Basic Auth 等场景。
  - 链接：
    - [PR #8252](https://github.com/tinyhumansai/openhuman/pull/8252)
    - [PR #8316](https://github.com/tinyhumansai/openhuman/pull/8316)

### 4.3 社区反应说明

所给数据中的所有条目 👍 均为 **0**，且 PR 评论数显示为 `undefined`。因此不能据此判断“没有关注”，更可能是采集数据未包含 reaction 或 PR 评论字段。当前热度应主要以 **Issue 评论数、更新时间、PR 数量与主题重要性**衡量。

---

## 5. Bug 与稳定性

### 严重

#### 1. 嵌入式 Runtime 中所有 MCP 调用立即失败

- **Issue #8280：TinyMCP 启动 fault，导致每次调用都返回 `module unavailable`**
- 在提交 `74d2a796`、`openhuman-embed Runtime + AgentSpec::mcp(...)` 场景下，TinyMCP 0.20.1 启动失败，调用约 0 秒即失败。
- **影响：** 嵌入式集成中的 MCP 工具链基本不可用，属于功能性阻断。
- **已有 fix PR：数据中未见明确对应修复。**
- 链接：[Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)

### 较高

#### 2. 本地 AI 连接验证失败后设置未回滚

- **Issue #8172：LM Studio、OMLX、Ollama 连接验证失败时，旧的 `local_ai` 设置未恢复**
- 桌面连接流程在写入新设置后，若 Provider 列表验证失败，配置可能停留在无效状态。
- **已有 fix PR：未在本次 PR 列表中确认到明确对应项。**
- 链接：[Issue #8172](https://github.com/tinyhumansai/openhuman/issues/8172)

#### 3. Docker/沙箱命令错误占用每轮 Shell 进程槽

- **Issue #8317：应先解析 sandbox backend，再预留 ShellProcesses 槽位**
- Docker 命令无法 yield，若提前占用四个 per-turn slot 之一，可能造成不必要阻塞甚至耗尽槽位。
- **已有 fix PR：疑似跟进 [PR #8234](https://github.com/tinyhumansai/openhuman/pull/8234)，但独立修复仍需确认。**
- 链接：[Issue #8317](https://github.com/tinyhumansai/openhuman/issues/8317)

### 中等

#### 4. 凭据文件权限在重写后可能过宽

- **Issue/PR #8221：`core.token` 每次重写时都应保持 `0600`**
- 现有 `OpenOptions::mode(0o600)` 主要约束首次创建，已有文件重写时不会自动收紧权限。
- **已有 fix PR：有，即 [PR #8221](https://github.com/tinyhumansai/openhuman/pull/8221)。**
- 关联：[Issue #8104](https://github.com/tinyhumansai/openhuman/issues/8104)

#### 5. HTTP Host Basic Auth 使用普通字符串比较

- **PR #8314：改为常量时间比较，并覆盖符号链接逃逸测试**
- `ensure_authorized` 原先以 `==` 比较用户名和密码，可能产生时序侧信道；服务还可能绑定 `0.0.0.0` 暴露到局域网。
- **已有 fix PR：有，即 [PR #8314](https://github.com/tinyhumansai/openhuman/pull/8314)。**

#### 6. 日志和前端聊天可能泄露敏感信息

- 覆盖 API Key、Bearer Token、snake_case/JSON token、Basic Auth、query password、provider error 中回显的 key 等。
- **已有 fix PR：有。**
  - [PR #8252](https://github.com/tinyhumansai/openhuman/pull/8252)
  - [PR #8316](https://github.com/tinyhumansai/openhuman/pull/8316)
  - [PR #8301](https://github.com/tinyhumansai/openhuman/pull/8301)

### 较低

#### 7. 目录刷新错误地触发 prompt replacement

- **PR #8306：仅刷新模型目录不应标记 prompt 已替换**
- 可能导致恢复线程时错误重算或重复构建 prompt。
- **已有 fix PR：有，即 [PR #8306](https://github.com/tinyhumansai/openhuman/pull/8306)。**

#### 8. `doctor --help` 退出码异常，失败原因不清晰

- **PR #8310：修复 `doctor --help` 参数路由，并让失败运行明确显示原因**
- **已有 fix PR：有，即 [PR #8310](https://github.com/tinyhumansai/openhuman/pull/8310)。**

#### 9. 模块导入可能被另一个活跃导入长期阻塞

- **PR #8279：导入 claim 改为一次尝试立即返回，下一次调用再重试**
- 可降低 legacy storage importer 的等待与卡死风险。
- **已有 fix PR：有，即 [PR #8279](https://github.com/tinyhumansai/openhuman/pull/8279)。**

#### 10. 混合事件中的 pinned source 未正确执行其 Agent

- **PR #8253：按 source 拆分混合 turn，pinned 事件交给 pinned agent**
- 修复来源路由错误。
- **已有 fix PR：有，即 [PR #8253](https://github.com/tinyhumansai/openhuman/pull/8253)。**

---

## 6. 功能请求与路线图信号

### 6.1 异步 Shell 与后台进程控制

- **需求：** 长时间命令不应阻塞整个 Agent turn；工具调用可先返回已有输出，后台命令继续执行。
- **现状：** [PR #8234](https://github.com/tinyhumansai/openhuman/pull/8234) 已实现主要语义。
- **下一版本判断：高概率纳入。** 需求明确、实现已提交，且能直接改善 Agent 响应性。

### 6.2 内存队列并发配置

- **需求：** 将 `llm_permits` 从 tinycortex 贯通到 tinymemory/OpenHuman 配置。
- **现状：** [Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983) 仍开放。
- **下一版本判断：中等偏高。** 属于明确性能瓶颈，且改动范围预计集中；但需处理并发提高后的费用和限流风险。

### 6.3 嵌入式 turn steering 支持附件

- **需求：** `TurnSteering::steer` 不仅支持文本，还支持图片和文件等 `HostAttachment`。
- **现状：** [Issue #8210](https://github.com/tinyhumansai/openhuman/issues/8210) 开放。
- **下一版本判断：中等。** API 体验合理，适合嵌入式 Agent 场景，但当前优先级为 P3。

### 6.4 统一子代理 API并精简 tinyagents

- **需求：** 使用单一 async `spawn_subagent`，将 goals、session 和 tools 上推，删除宿主未使用的复杂机制。
- **现状：** [Issue #8088](https://github.com/tinyhumansai/openhuman/issues/8088) 开放、讨论较多。
- **下一版本判断：中等。** 属于架构级调整，落地前更可能先形成独立变更批次，而非作为小版本功能直接发布。

### 6.5 TinySecurity 成为统一安全总线

- **需求：** 授权、策略、审批、egress、redaction、audit 和 sandbox scope 统一接入 TinySecurity。
- **现状：**
  - 总体 Tracker：[Issue #7328](https://github.com/tinyhumansai/openhuman/issues/7328)
  - 文件系统授权迁移：[PR #7331](https://github.com/tinyhumansai/openhuman/pull/7331)
- **下一版本判断：高，但可能分阶段。** PR 已进入实现阶段；安全模块不可用时的 fail-open/fallback 策略和迁移兼容性需要重点验证。

### 6.6 存储驱动标准化

- **需求：** 将 documents/streams、KV、blob、queue、secrets 等拆成类型 crate、API crate 和 primitive crate，engine 作为 feature。
- **现状：** [Issue #8131](https://github.com/tinyhumansai/openhuman/issues/8131) 已关闭。
- **下一版本判断：属于架构里程碑，而非单次功能发布。**

### 6.7 生产可观测性标准化

- **需求：** Sentry release 名统一为 `<product>@<version>+<commit>`；token 有明确 owner、轮换流程和撤销机制；缺少 token 时发布应失败。
- **现状：**
  - [Issue #8202](https://github.com/tinyhumansai/openhuman/issues/8202)
  - [Issue #8203](https://github.com/tinyhumansai/openhuman/issues/8203)
  - [Issue #8201](https://github.com/tinyhumansai/openhuman/issues/8201)
- **下一版本判断：高。** 三项均直接承接已关闭的 [Issue #8104](https://github.com/tinyhumansai/openhuman/issues/8104)，目标明确且以发布流程治理为主。

---

## 7. 用户反馈摘要

### 主要真实痛点

1. **长命令阻塞 turn**
   - 用户需要 shell 命令在超时后先返回，让 Agent 可以继续交互，同时命令在后台继续。
   - 这是今日最具代表性的 Agent 实用性问题。
   - 关联：[PR #8234](https://github.com/tinyhumansai/openhuman/pull/8234)

2. **批量记忆导入速度过慢**
   - 单并发 LLM 摘要使云端首次 ingest 可能耗时数天，用户明确希望暴露并调整并发。
   - 关联：[Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)

3. **嵌入式 MCP 完全不可用**
   - TinyMCP 启动 fault 使所有 MCP 调用立即失败，对 library embedding 用户构成阻断。
   - 关联：[Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)

4. **配置失败后状态不一致**
   - 本地模型连接验证失败时 `local_ai` 设置没有回滚，用户可能需要手工恢复。
   - 关联：[Issue #8172](https://github.com/tinyhumansai/openhuman/issues/8172)

5. **生产凭据治理不清晰**
   - Sentry token 缺少明确责任人、轮换步骤及闲置 token 清理机制，增加安全和运维风险。
   - 关联：[Issue #8203](https://github.com/tinyhumansai/openhuman/issues/8203)

### 满意与认可信号

- 今日没有提供可量化的 👍 或满意评论，因此无法对用户满意度作可靠量化判断。
- 但多个 Issue 在创建后持续更新并获得评论，说明核心贡献者仍围绕安全、Agent 架构和可观测性深入协作。
- [Issue #8088](https://github.com/tinyhumansai/openhuman/issues/8088) 获得 14 条评论，表明维护者对“减少无用子代理机制”的精简方向存在较强共识。

---

## 8. 待处理积压

### 8.1 PR 合并积压偏高

- 过去 24 小时更新 **50 个 PR**，其中 **48 个待合并**，仅 2 个合并或关闭。
- 这意味着代码产出很高，但评审和集成吞吐不足；若持续累积，冲突、CI 资源和版本发布风险都会上升。
- 建议优先处理安全修复与核心功能：
  - [PR #8234](https://github.com/tinyhumansai/openhuman/pull/8234)
  - [PR #7331](https://github.com/tinyhumansai/openhuman/pull/7331)
  - [PR #8221](https://github.com/tinyhumansai/openhuman/pull/8221)
  - [PR #8252](https://github.com/tinyhumansai/openhuman/pull/8252)
  - [PR #8314](https://github.com/tinyhumansai/openhuman/pull/8314)

### 8.2 长期讨论但尚未完成的重要架构 Issue

- **Issue #7328：安全总线整合**，10 天、20 条评论，仍开放。
  - 链接：[Issue #7328](https://github.com/tinyhumansai/openhuman/issues/7328)

- **Issue #8088：统一 async spawn_subagent**，5 天、14 条评论，仍开放。
  - 链接：[Issue #8088](https://github.com/tinyhumansai/openhuman/issues/8088)

- **Issue #6983：内存队列并发配置**，创建于 10 月 3 日，已持续约 20 天。
  - 虽然不是零响应，但核心性能诉求尚未实现。
  - 链接：[Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983)

### 8.3 新增但尚无明确修复 PR 的阻断项

- **嵌入式 Runtime 的 TinyMCP 启动失败**
  - 今日新建，尚无明确 fix PR，建议尽快确认 owner 和修复路径。
  - 链接：[Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)

- **本地 AI 连接验证失败后不回滚**
  - 尚无明确修复 PR。
  - 链接：[Issue #8172](https://github.com/tinyhumansai/openhuman/issues/8172)

### 8.4 维护建议

1. 对 48 个待合并 PR 按“安全修复、核心功能、测试加固、文档/清理”分批处理。
2. 为 [Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280)、[Issue #8317](https://github.com/tinyhumansai/openhuman/issues/8317) 和 [Issue #8172](https://github.com/tinyhumansai/openhuman/issues/8172) 明确负责人、目标版本和回归测试范围。
3. 在发布 TinySecurity 集成前，明确模块不可用时的授权与审计策略，避免安全总线迁移引入 fail-open 风险。
4. 对 [Issue #6983](https://github.com/tinyhumansai/openhuman/issues/6983) 给出近期里程碑，因为单并发处理大规模记忆导入已形成实际用户级瓶颈。
5. 建立下一次版本发布的最小安全门槛：凭据权限、日志脱敏、租户隔离、Basic Auth 和 Sentry token 检查全部合并后再发版。

---

## 总结

OpenHuman 今日呈现出明显的“**架构收敛 + 安全加固 + 稳定性补强**”特征。安全、嵌入式 Runtime、Shell 非阻塞执行和跨租户隔离是近期最值得关注的方向。整体贡献活跃，但 **48 个待合并 PR、零发布**表明项目已从功能扩张阶段进入需要提升评审与发布吞吐的阶段。下一版本最可能形成用户感知变化的内容是异步 Shell、TinySecurity 文件系统授权迁移以及一系列凭据和日志安全修复；最紧迫的风险则是 [Issue #8280](https://github.com/tinyhumansai/openhuman/issues/8280) 的嵌入式 MCP 阻断，以及持续膨胀的 PR 积压。

</details>

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
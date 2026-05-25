# AI CLI 工具社区动态日报 2026-05-25

> 生成时间: 2026-05-25 01:59 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告（2026-05-25）

---

## 1. 生态全景

当前 AI CLI 工具生态正经历从“功能可用”向“生产可靠”的关键转型。各主流项目普遍聚焦于**上下文管理稳定性**、**跨平台一致性**与**智能体行为可控性**三大核心挑战。MCP（Model Context Protocol）生态集成、TUI/Vim 深度优化、以及 ACP（Agent Communication Protocol）标准化成为技术演进主线。企业级需求（如权限控制、审计追踪、多账户支持）显著上升，反映出工具正从开发者实验场景向团队协作与生产部署渗透。

---

## 2. 各工具活跃度对比

| 工具 | 新增 Issues | 新增 PRs | 版本发布 | 社区热度（👍/评论总量） |
|------|-------------|----------|----------|------------------------|
| **Claude Code** | 10 | 10 | ❌ 无 | 高（#38335 732 评论，457 👍） |
| **OpenAI Codex** | 10 | 10 | ❌ 无 | 中高（#11626 141 👍，多 Windows 问题） |
| **Gemini CLI** | 10 | 10 | ❌ 无 | 中（#21409 P1 挂起问题受关注） |
| **GitHub Copilot CLI** | 10 | 0 | ✅ v1.0.55-0（预发布） | 中高（#3502 中文输入 21 👍） |
| **Kimi Code CLI** | 1 | 7 | ❌ 无 | 低（#1894 长期未解，但 PR 活跃） |
| **OpenCode** | 10 | 10 | ❌ 无 | 高（#29079 GPT 响应延迟 28 评论） |
| **Qwen Code** | 10 | 10 | ✅ v0.16.1-nightly | 高（#4175 Mode B 路线图主导开发） |

> 注：活跃度综合 Issue/PR 数量、社区互动强度与发布频率评估。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|--------|--------|--------|
| **上下文与状态管理** | 全部 | 支持 `/rewind` 回滚（Codex）、会话恢复失败（Codex/OpenCode）、stats-cache 冻结（Claude）、自动压缩死循环（OpenCode） |
| **跨平台兼容性** | Copilot CLI / Codex / Gemini | Windows 终端渲染错位、WSL CRLF 问题、Wayland 输入失效、Android Termux glibc 依赖 |
| **智能体行为安全** | Gemini / Claude / OpenCode | 误删仓库（Claude #62091）、滥用 `git reset --force`（Gemini #22672）、子代理误报成功（Gemini #22323） |
| **协议标准化** | Kimi / Qwen / Claude | ACP 消息 ID 分配（Kimi #2359）、ACP 权限模式（Kimi #2364）、SSE 桥接修复（Qwen #4484） |
| **TUI/终端体验优化** | Codex / OpenCode / Copilot | Vim 模式补全（Codex #24382）、sticky prompt（OpenCode #28035）、中文输入法错位（Copilot #3502） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|--------|--------|--------|
| **Claude Code** | MCP 生态集成、企业级协作 | 付费团队、MCP 开发者 | 强依赖 Anthropic 模型，深耕权限与审计 |
| **OpenAI Codex** | TUI/Vim 深度集成、Review 叙事 | 终端重度用户、代码审查者 | 强化本地代理系统，推进 `/story` 功能 |
| **Gemini CLI** | 通用代理可靠性、AST 感知工具 | 自动化脚本开发者 | 聚焦底层稳定性（PTY 泄漏、Shell 卡死） |
| **GitHub Copilot CLI** | 终端渲染一致性、插件扩展性 | VS Code 迁移用户 | 快速迭代预发布版本，修复跨平台输入问题 |
| **Kimi Code CLI** | ACP 协议兼容性、技能生态对齐 | 第三方集成开发者 | 小步快跑，专注协议层与文档修正 |
| **OpenCode** | 多模型支持、订阅体验优化 | 个人开发者、Go 订阅用户 | 强调 provider 抽象与 TUI 交互精细化 |
| **Qwen Code** | Mode B 服务化、可观测性 | 本地部署企业用户 | 构建 `qwen serve` HTTP/SSE 接口，强化诊断框架 |

---

## 5. 社区热度与成熟度

- **高活跃度 & 快速迭代**：  
  **Qwen Code**（ nightly 发布 + 10 PR）、**GitHub Copilot CLI**（连续预发布）、**OpenCode**（高互动 Issue + 密集 PR）处于快速演进阶段，功能更新频繁，适合前沿开发者跟进。
  
- **高成熟度 & 企业级关注**：  
  **Claude Code** 和 **OpenAI Codex** 社区反馈高度结构化，Issue 描述详尽，反映其已进入企业生产环境，但修复周期较长（如 #38335 持续2个月未解）。

- ** niche 聚焦 & 协议驱动**：  
  **Kimi Code CLI** 虽 Issue 少，但 PR 全部围绕 ACP 协议完善，显示其定位为“标准化代理通信层”，适合基础设施开发者。

---

## 6. 值得关注的趋势信号

1. **协议标准化加速**：ACP 与 MCP 成为跨工具互操作的关键载体（Kimi/Qwen/Claude 均投入），开发者应关注协议兼容性以提升集成能力。
2. **终端体验成为竞争焦点**：Vim 支持、输入法兼容、TUI 渲染一致性等“细节体验”直接影响用户留存，CLI 工具正逼近 IDE 级交互标准。
3. **安全与可控性优先级上升**：从凭证防护（Claude #62099）到操作确认（Gemini #22672），社区强烈要求细粒度权限与审计机制，预示未来 CLI 将内置策略引擎。
4. **本地服务化（Mode B）兴起**：Qwen 的 `qwen serve` 与 OpenCode 的 daemon 模式表明，CLI 正从“辅助工具”向“本地 AI 服务节点”演进，支持多客户端协同。
5. **诊断可观测性缺口明显**：各工具均缺乏轻量级问题收集机制（如 ring buffer + `/bug collect`），开发者可优先贡献诊断工具链以获取社区影响力。

> **对开发者的建议**：若追求稳定生产使用，优先考虑 GitHub Copilot CLI 或 Claude Code；若参与协议标准或本地服务化建设，Qwen Code 与 Kimi CLI 提供高价值切入点；终端极客可深入 OpenAI Codex 的 TUI 优化贡献。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026-05-25）**

---

### 1. 热门 Skills 排行（按社区关注度）

| Skill | 功能简述 | 社区讨论热点 | 状态 |
|------|--------|------------|------|
| **[document-typography](https://github.com/anthropics/skills/pull/514)** | 自动修复 AI 生成文档中的排版问题（孤行、寡行、编号错位） | 用户普遍反馈 Claude 生成的文档存在基础排版缺陷，此 Skill 直击痛点，被赞“刚需级优化” | Open |
| **[ODT skill](https://github.com/anthropics/skills/pull/486)** | 支持 OpenDocument 格式（.odt/.ods）的创建、填充与 HTML 转换 | 开源办公生态集成需求强烈，尤其受 LibreOffice 用户关注；讨论聚焦跨平台兼容性 | Open |
| **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 提升前端设计指导的清晰度与可操作性 | 开发者反馈原 Skill 指导模糊，改进后强调“单会话可执行性”，获积极认可 | Open |
| **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 覆盖全栈测试模式（单元、组件、Trophy 模型等） | 测试是高频开发场景，社区认为该 Skill 填补了 Claude 在工程化实践中的空白 | Open |
| **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 为 AI 代理提供跨对话持久化记忆能力 | 长期上下文管理是 Agent 核心需求，用户期待其集成到 Claude Code 工作流 | Open |
| **[AURELION skill suite](https://github.com/anthropics/skills/pull/444)** | 结构化认知框架（内核、顾问、代理、记忆） | 专业级知识管理方案，吸引企业用户；讨论围绕复杂场景下的认知一致性 | Open |
| **[ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** | 覆盖 ServiceNow 全平台能力（ITSM、SecOps、集成等） | 企业级用户高度关注，尤其 IT 运维团队视其为自动化入口 | Open |

> 注：尽管部分 PR 评论数为 `undefined`，但其高更新频率、详细描述及社区引用表明实际关注度较高。

---

### 2. 社区需求趋势（来自 Issues）

- **组织级技能共享机制**：[#228](https://github.com/anthropics/skills/issues/228) 呼吁支持团队内一键共享 Skill，替代当前手动上传流程，反映企业规模化使用痛点。
- **安全与信任边界**：[#492](https://github.com/anthropics/skills/issues/492) 警示社区 Skill 冒用 `anthropic/` 命名空间的风险，推动官方建立技能认证机制。
- **技能去重与插件治理**：[#189](https://github.com/anthropics/skills/issues/189) 和 [#1087](https://github.com/anthropics/skills/issues/1087) 指出插件加载逻辑混乱导致重复技能，亟需 marketplace 元数据规范。
- **Windows 兼容性修复**：[#1099](https://github.com/anthropics/skills/issues/1099)、[#1050](https://github.com/anthropics/skills/issues/1050) 显示 `skill-creator` 工具链在 Windows 下严重不可用，影响开发者体验。
- **MCP 数据压缩优化**：[#1102](https://github.com/anthropics/skills/issues/1102) 提出 MCP 返回数据未压缩导致上下文拥堵，需工程层优化。

> 核心趋势：**从“功能扩展”转向“生产就绪”**——社区更关注技能的可共享性、安全性、跨平台稳定性及与企业系统的集成深度。

---

### 3. 高潜力待合并 Skills

以下 PR 具备高活跃度或解决关键问题，有望近期合并：

- **[skill-creator: Windows subprocess + encoding fixes](https://github.com/anthropics/skills/pull/1050)**  
  修复 Windows 下 `claude.cmd` 调用与编码问题，直接影响开发者工具链可用性。
- **[fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)**  
  解决 DOCX 技能导致文档损坏的关键 Bug，属高优先级修复。
- **[Add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**  
  提升社区健康度，响应 GitHub 官方指标建议，低风险高收益。
- **[n8n-builder & n8n-debugger](https://github.com/anthropics/skills/pull/190)**  
  集成热门自动化平台 n8n，满足工作流编排需求，已有生产验证。

---

### 4. Skills 生态洞察

> **当前社区最集中的诉求是：建立安全、可协作、生产级可用的 Skill 分发与治理体系，同时补齐跨平台工具链短板，以支撑企业规模化部署。**

—— 从“我能做什么”转向“我们如何安全高效地一起用”。

---

# Claude Code 社区动态日报（2026-05-25）

---

## 1. 今日速览

本周社区持续聚焦于 **MCP 工具链稳定性** 与 **CLI/桌面端协同体验优化**。多个高热度 Issue 指向权限控制、后台任务重复执行及模型上下文管理缺陷，同时开发者积极贡献文档修复与插件增强方案，推动生态健壮性提升。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|---------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Claude Max 计划会话限制异常耗尽（自 2026-03-23 起） | 影响付费用户核心体验，CLI 使用计费逻辑疑似存在漏洞 | 🔥 732 条评论，457 👍，长期未解决引发广泛焦虑 |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | 支持同一 Connector 下多账户切换（Web 端） | 企业级多账号协作刚需，提升工作流灵活性 | 📈 180 条评论，240 👍，呼声持续高涨 |
| [#49268](https://github.com/anthropics/claude-code/issues/49268) | Opus 4.7 模型下 Thinking Summaries 缺失 | 关键调试信息丢失，影响开发者对推理过程的理解 | ⚠️ 33 条评论，57 👍，已定位至 `display: "summarized"` 配置问题 |
| [#61734](https://github.com/anthropics/claude-code/issues/61734) | Sonnet 4.6 状态栏显示 200k 上下文而非实际 1M | UI 误导用户，可能导致过早中断长任务 | 💬 17 条评论，1 👍，Windows 平台专属问题 |
| [#53442](https://github.com/anthropics/claude-code/issues/53442) | Cowork Google Drive MCP 无法访问 Workspace 共享驱动器 | 企业文件协作功能失效，MCP 权限模型缺陷 | 🔒 15 条评论，18 👍，涉及 Google API 集成深度问题 |
| [#43013](https://github.com/anthropics/claude-code/issues/43013) | `--continue` 与 `-p` 参数组合在 v2.1.90 后严重损坏 | 基础 CLI 工作流中断，回归问题影响广泛 | 🐞 15 条评论，2 👍，标记为 duplicate 但未彻底修复 |
| [#37323](https://github.com/anthropics/claude-code/issues/37323) | VS Code 插件支持 `/btw` 命令 | IDE 与 CLI 功能不对等，降低开发效率 | 💡 14 条评论，61 👍，高价值小功能需求 |
| [#2441](https://github.com/anthropics/claude-code/issues/2441) | 为每条消息添加时间戳 | 多会话调试与审计刚需，提升可追溯性 | ⏱️ 14 条评论，46 👍，长期悬而未决的基础 UX 改进 |
| [#60133](https://github.com/anthropics/claude-code/issues/60133) | 长代理会话中 Socket 连接意外关闭（Bun 无 keepalive） | 稳定性问题阻碍复杂任务执行 | 🔌 12 条评论，7 👍，底层网络栈配置缺陷 |
| [#62091](https://github.com/anthropics/claude-code/issues/62091) | Agent 误删用户主仓库（误解 `gh repo fork --fork-name`） | 严重安全事故，暴露工具调用语义理解风险 | 🚨 3 条评论，0 👍，需紧急修复权限与确认机制 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 功能/修复内容 |
|------|------|--------------|
| [#62099](https://github.com/anthropics/claude-code/pull/62099) | 新增 credential-guard 插件 | 防止硬编码密钥写入文件，集成 PreToolUse 钩子扫描 20+ 凭证模式 |
| [#61969](https://github.com/anthropics/claude-code/pull/61969) | CLI-桌面端对话同步提案 | 实现 CLI 会话历史与桌面 App 双向同步，解决本地隔离问题 |
| [#62023](https://github.com/anthropics/claude-code/pull/62023) | 修复 `@claude` 触发词误匹配 | 避免 `@claude-*` 插件名被误判为触发指令，提升工作流准确性 |
| [#61968](https://github.com/anthropics/claude-code/pull/61968) | 添加 AskUserQuestion 回滚检查点间隙排查指南 | 解释为何用户回答不生成 rewind 点，并提供 echo-back 变通方案 |
| [#61966](https://github.com/anthropics/claude-code/pull/61966) | tmux 中未授权消息问题排查文档 | 分析 tmux 控制序列干扰机制，建议禁用 focus-events |
| [#61964](https://github.com/anthropics/claude-code/pull/61964) | SSH 远程失败因插件归档损坏排查 | 提供本地插件校验与清理方法，解决远程连接中断问题 |
| [#61708](https://github.com/anthropics/claude-code/pull/61708) | 更新后模型标识无效错误排查 | 揭示 AWS_REGION 与 CLAUDE_CODE_USE_BEDROCK 冲突导致前缀不匹配 |
| [#61697](https://github.com/anthropics/claude-code/pull/61697) | 后台任务重复启动问题临时方案 | 提出三层修复策略：元数据保留、调度器去重、心跳检测 |
| [#61702](https://github.com/anthropics/claude-code/pull/61702) | stats-cache 冻结问题排查 | 引入缓存版本化与自动迁移机制解决 lastComputedDate 停滞 |
| [#61956](https://github.com/anthropics/claude-code/pull/61956) | 修正 ralph-wiggum 插件帮助文档路径 | 修复 `.claude/.ralph-loop.local.md` 错误路径引用，确保文档一致性 |

---

## 5. 功能需求趋势

- **MCP 生态强化**：围绕 Gmail、Google Drive、GitHub 等 MCP 工具的权限控制、事件订阅完整性（如 bot 评论遗漏）、草稿处理等问题集中爆发，显示企业对第三方集成稳定性高度敏感。
- **IDE 与 CLI 一致性**：VS Code 插件功能滞后（如 `/btw` 命令缺失）引发多次请求，反映开发者期望统一交互体验。
- **长会话与资源管理**：上下文窗口显示错误、内存泄漏（Windows 后台任务）、Socket 断开等问题凸显系统对长时间、高负载任务的支持不足。
- **安全与合规**：凭证泄露防护（#62099）、误操作防护（#62091）成为新兴重点，尤其在企业场景下。
- **可观测性提升**：时间戳、任务耗时、Thinking Summaries 等调试信息需求强烈，指向开发者对透明化 AI 行为的核心诉求。

---

## 6. 开发者关注点

- **权限与确认机制薄弱**：多起事故（如误删仓库）暴露工具调用缺乏二次确认与语义验证，开发者呼吁更细粒度的权限审批流程。
- **跨平台行为不一致**：Windows/macOS/Linux 在状态栏、后台任务、网络连接等方面表现差异大，增加调试成本。
- **文档滞后于代码**：多个 PR 针对 troubleshooting 文档补充，说明官方文档未能及时覆盖已知问题，社区正自发填补空白。
- **模型版本兼容性风险**：Opus 4.7 引入的 Thinking 显示变更未充分测试，提示新模型上线需加强回归验证。
- **本地状态管理混乱**：stats-cache、插件归档、会话文件等本地存储易损坏且缺乏自愈机制，影响用户体验一致性。

---  
*数据来源：github.com/anthropics/claude-code | 生成时间：2026-05-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-05-25）

---

## 今日速览  
今日社区聚焦于 **CLI/TUI 功能增强** 与 **Windows 平台稳定性修复**，多个高热度 Issue 涉及上下文管理、权限控制及沙箱执行问题。开发团队持续推进 **Vim 模式优化** 和 **Review Story 功能迭代**，同时积极修复因空 base64 图像输入导致的线程污染问题。

---

## 版本发布  
无新版本发布。

---

## 社区热点 Issues

1. **#20161 [CLOSED] 手机号验证失效导致登录异常**  
   🔗 https://github.com/openai/codex/issues/20161  
   用户跨设备登录时强制要求未绑定的手机号验证，引发大量困惑（157 条评论，102 👍）。已关闭，疑似认证流程逻辑缺陷，影响用户体验一致性。

2. **#11626 [OPEN] CLI: 添加 `/rewind` 支持同时回滚对话与代码编辑**  
   🔗 https://github.com/openai/codex/issues/11626  
   高需求功能（141 👍），当前仅支持上下文回滚，无法撤销 Codex 实际修改的文件状态，阻碍工作流完整性。

3. **#9046 [OPEN] 上下文窗口溢出错误在初始对话即触发**  
   🔗 https://github.com/openai/codex/issues/9046  
   用户首次提问即报“context window full”，表明上下文初始化或模型配置存在严重 bug，影响基础可用性。

4. **#20214 [OPEN] Windows 11 下 Codex App 频繁卡顿/冻结**  
   🔗 https://github.com/openai/codex/issues/20214  
   高资源环境下仍出现 UI 冻结（15 👍），反映 Windows 平台性能优化不足，尤其影响专业用户效率。

5. **#23777 [OPEN] WSL 中 app-server 因 CRLF/LF 导致 SQLx 迁移失败**  
   🔗 https://github.com/openai/codex/issues/23777  
   Windows 换行符引发数据库迁移 checksum 不匹配，阻碍 WSL 用户正常使用，属跨平台兼容性硬伤。

6. **#24287 [OPEN] Desktop 接受提示后 UI 卡在“Thinking”状态**  
   🔗 https://github.com/openai/codex/issues/24287  
   会话无响应且“Stop”失效，重启后 turn 消失，暴露 app-server 会话管理缺陷，影响任务连续性。

7. **#24361 [OPEN] 技能列表显示上千无关第三方 App**  
   🔗 https://github.com/openai/codex/issues/24361  
   安装 Desktop 后技能面板污染严重（如韩语电商 App），混淆本地与生态应用边界，损害 UX 清晰度。

8. **#22428 [OPEN] Windows 沙箱执行失败：CreateProcessAsUserW 错误**  
   🔗 https://github.com/openai/codex/issues/22428  
   沙箱机制在 Windows 上频繁崩溃，限制安全代码执行能力，对自动化工作流构成关键阻碍。

9. **#24002 [OPEN] 长对话恢复时 remote compact 报 context_length_exceeded**  
   🔗 https://github.com/openai/codex/issues/24002  
   v0.132.0+ 引入回归问题，降级可规避，表明远程压缩逻辑存在版本兼容性风险。

10. **#24389 [OPEN] 关闭无响应子代理时 close_agent 挂起数小时**  
    🔗 https://github.com/openai/codex/issues/24389  
    多代理系统缺乏超时机制，父线程长期阻塞，暴露子代理生命周期管理缺陷。

---

## 重要 PR 进展

1. **#24376 [OPEN] 拒绝空 base64 图像输入**  
   🔗 https://github.com/openai/codex/pull/24376  
   修复空 `data:image/*;base64,` URL 导致的线程污染，将其转为文本提示，避免 Responses API 持续失败。

2. **#24382 [OPEN] TUI 添加 Vim 文本对象绑定（如 `ciw`, `daw`）**  
   🔗 https://github.com/openai/codex/pull/24382  
   补全 Vim 模式核心编辑能力，提升高级用户编写提示的效率与体验一致性。

3. **#24380 [OPEN] 修复 Vim 单词尾与行尾操作行为**  
   🔗 https://github.com/openai/codex/pull/24380  
   修正 `e` 卡住、`C` 不支持等问题，使 TUI Vim 行为更贴近标准编辑器。

4. **#23539 [OPEN] 添加 transcript 搜索功能**  
   🔗 https://github.com/openai/codex/pull/23539  
   支持在长会话中快速定位任意文本，解决导航难题，是 transcript UX 三部曲的最终章。

5. **#24368 [OPEN] 在 turn 头部添加压缩元数据**  
   🔗 https://github.com/openai/codex/pull/24368  
   增强调试与监控能力，为自动压缩策略提供可追溯的上下文标识。

6. **#24317 [OPEN] 启动时尊重 hook trust bypass 标志**  
   🔗 https://github.com/openai/codex/pull/24317  
   修复 `--dangerously-bypass-hook-trust` 在 TUI 中无效的问题，保障自动化脚本可靠性。

7. **#24358 [OPEN] 添加交互式 Review Story 驾驶舱**  
   🔗 https://github.com/openai/codex/pull/24358  
   提供 `/story` 入口与导航界面，将模型生成的变更叙事转化为可浏览体验。

8. **#24350 [OPEN] 实现可复用的 Review Story API**  
   🔗 https://github.com/openai/codex/pull/24350  
   将大型代码变更转化为有序逻辑步骤，辅助人工审查，提升 Code Review 效率。

9. **#24353 [OPEN] 支持渐进式生成 Review Story**  
   🔗 https://github.com/openai/codex/pull/24353  
   先展示大纲再后台填充细节，降低用户等待感知，优化大变更场景下的响应性。

10. **#24305 [OPEN] 添加 doctor 线程库存审计功能**  
    🔗 https://github.com/openai/codex/pull/24305  
    对比 SQLite 状态库与磁盘 JSONL 文件，帮助用户诊断“会话丢失”问题。

---

## 功能需求趋势

- **上下文与状态管理**：高频出现 `/rewind`、compact 失败、resume 异常等问题，社区强烈要求更可靠的上下文持久化与回滚机制。
- **Windows 平台稳定性**：从沙箱、WSL 兼容性到 UI 卡顿，Windows 用户反馈集中，亟需专项优化。
- **TUI/Vim 体验深化**：连续多个 PR 优化 Vim 模式，反映开发者对高效终端编辑体验的高度依赖。
- **多代理与子任务可靠性**：子代理卡死、关闭挂起等问题凸显复杂工作流下的健壮性短板。
- **Review 辅助工具**：Review Story 系列功能快速迭代，表明 OpenAI 正构建面向代码审查的 AI 叙事能力。

---

## 开发者关注点

- **跨平台一致性**：Windows 与 macOS/Linux 行为差异（如路径处理、换行符、沙箱）引发大量兼容性问题。
- **会话可恢复性**：长对话恢复失败、NUL 字节污染、上下文超限等问题严重影响生产环境使用。
- **权限与认证流程**：手机号验证、token 刷新失败、MCP 环境变量未继承等阻碍自动化与集成场景。
- **UI/UX 反馈延迟**：“Thinking”卡死、子代理卡片残留、diff 显示不全等降低操作信心。
- **调试与诊断工具**：`codex doctor` 功能持续增强，反映开发者对可观测性与问题自检的迫切需求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-05-25）

---

## 1. 今日速览

今日 Gemini CLI 社区聚焦于核心稳定性与代理行为优化，多个高优先级 Bug 修复持续推进，包括子代理异常终止误报、Shell 命令卡死、Auto Memory 安全漏洞等。同时，AST 感知工具集成、浏览器代理健壮性增强等中长期功能探索仍在进行中，反映出社区对智能体可靠性与上下文感知能力的持续投入。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|---------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 级严重 Bug，用户反馈通用代理在执行简单任务（如创建文件夹）时无限挂起，严重影响可用性。 | 👍 8 赞同，7 条评论，开发者多次复现并寻求规避方案。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success | 子代理在达到最大轮次后仍标记为“成功”，掩盖中断事实，导致调试困难。 | 👍 2，6 条评论，涉及任务状态可信度问题。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" | 执行完命令后 CLI 仍显示“等待输入”，造成交互阻塞，影响自动化流程。 | 👍 3，4 条评论，高频反馈问题。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | Auto Memory 在模型处理前未彻底脱敏，存在敏感信息泄露风险。 | 安全相关，P2 优先级，3 条评论，需紧急处理。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | Wayland 环境下浏览器子代理崩溃，影响 Linux 桌面用户。 | 👍 1，4 条评论，平台兼容性问题。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | 模型极少主动调用自定义技能或子代理，需显式指令，降低自动化效率。 | 👍 0，6 条评论，反映智能体自主性不足。 |
| [#27417](https://github.com/google-gemini/gemini-cli/issues/27417) | Gemini overrules user action and does what it wants | 用户指令被模型忽略，存在控制权争议，需附加聊天记录验证。 | 新提交，5 条评论，潜在信任危机。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | 探索 AST 感知工具提升代码理解精度，减少误读与 Token 浪费。 | 👍 1，7 条评论，技术前瞻性议题。 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | 模型倾向使用 `git reset --force` 等危险操作，缺乏安全约束。 | 👍 1，2 条评论，涉及操作安全性。 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | (Sub)agents running without permission since v0.33.0 | 用户未启用代理模式下子代理仍被激活，违反配置预期。 | 2 条评论，配置逻辑缺陷。 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 功能/修复内容 |
|------|------|--------------|
| [#27418](https://github.com/google-gemini/gemini-cli/pull/27418) | feat(core): ensure non-interactive shell respects 'enableInteractiveShell: false' | 修复非交互模式下仍启动交互式 Shell 的问题，并增强原生桥接稳定性，处理非 UTF-8 字节与堆溢出。 |
| [#27348](https://github.com/google-gemini/gemini-cli/pull/27348) | fix: wrap Ajv validate() in try/catch to prevent crash on malformed schemas | 防止 LLM 返回异常参数结构时因 Ajv 校验崩溃，提升工具调用鲁棒性。 |
| [#27412](https://github.com/google-gemini/gemini-cli/pull/27412) | fix(core): prevent model fabrication when read_file returns binary content | 修复读取二进制文件（如 PDF）时模型虚构“已分析”响应的问题，避免误导用户。 |
| [#27153](https://github.com/google-gemini/gemini-cli/pull/27153) | fix(core): serialize concurrent edits to the same file | 引入文件级锁机制，防止并发编辑导致数据竞争与内容覆盖。 |
| [#27096](https://github.com/google-gemini/gemini-cli/pull/27096) | fix(core): prevent text duplication in AfterAgent hook prompt_response | 清理钩子输出中的重复文本与多余空格，确保扩展接收干净响应。 |
| [#27347](https://github.com/google-gemini/gemini-cli/pull/27347) | fix: add command validation to prevent natural language being saved as shell commands | 避免自然语言输入被误存为 Shell 命令历史，提升日志准确性。 |
| [#27349](https://github.com/google-gemini/gemini-cli/pull/27349) | fix: strip CJK characters from model thought output | 过滤模型思维链中的中文/日文/韩文字符，保持英文输出一致性。 |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | fix(core): prevent PTY memory leak by synchronously deleting active entries | 修复 Shell 执行服务中 PTY 资源未释放导致的内存与文件描述符泄漏。 |
| [#27137](https://github.com/google-gemini/gemini-cli/pull/27137) | fix(cli): make --skip-trust actually load workspace settings | 使 `--skip-trust` 标志真正加载 `.gemini/settings.json` 配置，修复功能失效问题。 |
| [#27389](https://github.com/google-gemini/gemini-cli/pull/27389) | fix(core): bypass routing classifiers to prevent orphaned function response errors | 解决因历史剪枝导致的“函数响应未紧随函数调用”400 错误。 |

---

## 5. 功能需求趋势

- **智能体行为可靠性**：高频出现代理挂起、误报成功、滥用危险命令等问题，社区强烈要求提升代理状态机健壮性与操作安全性。
- **AST 感知代码理解**：多个 Issue（#22745、#22746、#22747）聚焦 AST 工具集成，旨在提升文件读取、搜索与代码映射精度，减少 Token 浪费。
- **Auto Memory 安全与效率**：三篇相关 Issue（#26522–#26525）揭示内存系统在重试机制、补丁验证与日志脱敏方面存在缺陷，亟需架构优化。
- **浏览器代理跨平台支持**：Wayland 兼容性（#21983）与会话锁恢复（#22232）反映对 Linux 桌面环境支持的持续投入。
- **终端交互体验优化**：包括终端 resize 性能（#21924）、外部编辑器退出后刷新（#24935）、紧急中止机制（#27415）等，提升 TUI 稳定性。

---

## 6. 开发者关注点

- **代理失控风险**：用户担忧模型无视指令（#27417）或执行破坏性操作（#22672），呼吁更细粒度的权限控制与操作确认机制。
- **调试信息不透明**：子代理状态误报（#22323）、二进制文件处理幻觉（#27412）等问题导致开发者难以信任代理输出。
- **资源泄漏与性能**：PTY 泄漏（#27154）、Token 指数增长（#26758）等底层问题影响长期运行稳定性。
- **配置生效异常**：`--skip-trust` 不加载设置（#27137）、子代理未经授权启动（#22093）等配置逻辑缺陷频发。
- **国际化输出污染**：模型思维链中混入 CJK 字符（#27349）干扰英文开发者阅读，需输出净化机制。

---  
*数据来源：github.com/google-gemini/gemini-cli | 生成时间：2026-05-25*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-05-25）

---

## 1. 今日速览

本周 GitHub Copilot CLI 社区反馈集中暴露了跨平台兼容性与终端渲染稳定性问题，尤其在 Android/Termux、GNOME Wayland 和 Windows 终端环境下出现多起输入、粘贴与显示异常。同时，插件与代理（agent）系统的配置灵活性成为新功能讨论热点，开发者呼吁支持多目录加载与子代理工具声明。

---

## 2. 版本发布

**v1.0.55-0**（最新预发布）  
✅ 修复了 CLI 作为单文件可执行程序（SEA）运行时扩展无法启动的问题。  
🔗 [Release v1.0.55-0](https://github.com/github/copilot-cli/releases/tag/v1.0.55-0)

> 注：v1.0.54 及 v1.0.53 系列在过去24小时内亦有更新，主要修复多行提示显示、Bash 环境兼容性（PS0/PROMPT_COMMAND）、/skills 配置路径识别等问题。

---

## 3. 社区热点 Issues

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#3333](https://github.com/github/copilot-cli/issues/3333) | Android/Termux 支持在 v1.0.48+ 中因 glibc 依赖失效 | ⭐⭐⭐⭐ | 5 条评论，1 👍；影响移动端开发者，需重构 native 模块以支持 Bionic libc |
| [#3414](https://github.com/github/copilot-cli/issues/3414) | GNOME Wayland 下粘贴功能在 v1.0.49 回退 | ⭐⭐⭐⭐ | 3 条评论，1 👍；Wayland 用户关键交互中断，需回查剪贴板实现变更 |
| [#3502](https://github.com/github/copilot-cli/issues/3502) | macOS 中文注音输入法预编辑文本错位至右下角 | ⭐⭐⭐⭐⭐ | 2 条评论，**21 👍**；高频反馈，严重影响中文用户输入体验 |
| [#3501](https://github.com/github/copilot-cli/issues/3501) | Windows 终端滚动条导致文本错位 | ⭐⭐⭐⭐ | 2 条评论，5 👍；终端渲染一致性受损，影响可读性 |
| [#2317](https://github.com/github/copilot-cli/issues/2317) | 执行 Bash 命令后 ~/.bash_history 被截断 | ⭐⭐⭐⭐ | 2 条评论，8 👍；长期未彻底修复，影响 shell 工作流完整性 |
| [#3497](https://github.com/github/copilot-cli/issues/3497) | 终端 resize 后输出被裁剪且无法滚动查看 | ⭐⭐⭐⭐ | 6 👍；终端自适应逻辑缺陷，阻碍长输出阅读 |
| [#3486](https://github.com/github/copilot-cli/issues/3486) | `/mcp show` 工具列表无法滚动查看全部 | ⭐⭐⭐ | MCP 用户工具发现受阻，需优化 UI 分页或滚动机制 |
| [#3508](https://github.com/github/copilot-cli/issues/3508) | 插件生命周期钩子中 workingDirectory 为空（v1.0.51+） | ⭐⭐⭐ | 插件开发者关键上下文丢失，影响路径相关逻辑 |
| [#3507](https://github.com/github/copilot-cli/issues/3507) | COPILOT_CUSTOM_INSTRUCTIONS_DIRS 未完全生效 | ⭐⭐⭐ | 配置系统不一致，部分指令文件未被加载 |
| [#3494](https://github.com/github/copilot-cli/issues/3494) | SKILL.md 描述超 1024 字符被静默丢弃 | ⭐⭐⭐ | 无报错导致技能不可见，违反“显式失败”原则 |

---

## 4. 重要 PR 进展

> 过去24小时内无新 Pull Request 提交。

---

## 5. 功能需求趋势

从近期 Issues 可提炼出三大核心需求方向：

- **跨平台兼容性增强**：Android（Termux）、Wayland、Windows 终端等环境的输入、渲染、安装支持亟待优化。
- **插件与代理系统扩展性**：
  - 支持多 agent 目录（类比 skills 的 `--config-dir` 多路径机制）[#3505](https://github.com/github/copilot-cli/issues/3505)
  - 子代理继承父插件声明的工具集 [#3506](https://github.com/github/copilot-cli/issues/3506)
  - 内置 `/create-*` 技能快速生成能力（对标 VS Code）[#3503](https://github.com/github/copilot-cli/issues/3503)
- **终端 UI/UX 稳定性**：滚动、重绘、输入法集成、剪贴板交互等基础体验问题频发，需系统性回归测试。

---

## 6. 开发者关注点

- **配置系统不一致**：`--config-dir` 在部分功能（如 `/skills` UI、指令加载）中未统一生效，导致行为不可预测。
- **静默失败问题突出**：超长技能描述被丢弃、workingDirectory 为空等场景缺乏错误提示，增加调试成本。
- **移动端与特殊环境支持薄弱**：Android/Termux 用户因 glibc 依赖被排除在外，Wayland 用户遭遇输入回归。
- **中文输入体验差**：Zhuyin IME 预编辑文本错位为高赞痛点，反映国际化输入支持不足。

> 建议优先修复终端渲染与输入法兼容性问题，并发布 Android 兼容性技术路线图以安抚社区情绪。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报**  
📅 2026-05-25 | 数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

### 1. 今日速览  
今日无新版本发布，但社区围绕 **ACP 协议兼容性增强** 和 **跨平台文件处理修复** 提交了多项关键 PR。一个长期悬而未决的 Issue（#1894）再次被激活，反映用户对 Kimi CLI 与 Codex 在嵌套 skill 加载行为上不一致的强烈关注。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 社区热点 Issues  

**#1894 [OPEN] Kimi CLI 无法递归加载嵌套 skill 目录**  
🔗 https://github.com/MoonshotAI/kimi-cli/issues/1894  
- **重要性**：直接影响多技能仓库的复用性，Codex 支持而 Kimi CLI 不支持，导致生态割裂。  
- **社区反应**：自 2026-04-15 提出后沉寂近一月，今日被重新评论（4 条新讨论），开发者 @retamia 强调该问题阻碍了 cloudlive 等项目的迁移。  
- **现状**：尚无官方回应，但已成为技能系统兼容性的关键痛点。

> 注：过去24小时内仅此1条 Issue 更新，故列为唯一热点。

---

### 4. 重要 PR 进展  

| PR | 作者 | 类型 | 核心内容 | 链接 |
|----|------|------|--------|------|
| #2362 | @Sisyphbaous-DT-Project | 修复 | 修复 `StrReplaceFile`/`WriteFile` 工具在跨平台编辑时破坏原始换行符（CRLF/LF）的问题，解决 #1952、#2191 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2362) |
| #2359 | @huntharo | 修复 | 为 ACP 流式内容分配 `messageId`，提升与 PwrAgent 等外部代理的协议兼容性 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2359) |
| #2363 | @huntharo | 修复 | 在 ACP `session/load` 时正确回放已加载的会话历史，增强状态恢复可靠性 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2363) |
| #2364 | @huntharo | 功能 | 实现 ACP 协议层的权限模式切换支持，解决 #1414 提出的细粒度权限控制需求 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2364) |
| #2335 | @he-yufeng | 文档 | 修正 Notification hook 示例中的错误 matcher（原 `permission_prompt` 无效），统一中英文文档 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2335) |
| #2361 | @Randy-sin | 文档 | 澄清 Notification hook 使用通知类型而非 sink 名称，避免开发者误用 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2361) |
| #2358 | @60ke | 构建 | 修正 `pyproject.toml` 中 `module-name` 字段类型，避免 uv 构建后端解析错误 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2358) |

> 注：以上7条 PR 均在过去24小时内更新，全部为 OPEN 状态，体现活跃开发节奏。

---

### 5. 功能需求趋势  

从近期 Issues 与 PR 可提炼出三大核心方向：  

1. **ACP 协议深度兼容**  
   - 多个 PR（#2359、#2363、#2364）聚焦于完善 ACP（Agent Communication Protocol）支持，包括消息 ID 分配、会话回放、权限切换，表明 Kimi CLI 正积极对齐行业标准代理通信框架。

2. **跨平台文件操作一致性**  
   - #2362 修复 CRLF/LF 问题，反映 Windows/Linux/macOS 混合开发环境下文件编辑工具的稳定性已成为高频诉求。

3. **技能系统生态对齐**  
   - #1894 揭示用户对 Kimi CLI 与 Codex 行为一致性的强烈期待，尤其在嵌套 skill 加载等高级用法上，生态互操作性成为 adoption 关键。

---

### 6. 开发者关注点  

- **痛点**：  
  - 文件编辑工具破坏原始换行符（#1952、#2191、#2362）  
  - ACP 协议细节缺失导致第三方集成困难（如 PwrAgent 对接）  
  - 文档示例错误误导开发者（#2335、#2361）  

- **高频需求**：  
  - 请求支持递归 skill 目录加载（#1894）  
  - 期望更清晰的权限控制与通知机制文档  
  - 呼吁提升与 Codex 的行为一致性，降低迁移成本  

> 建议团队优先响应 #1894 并合并 ACP 相关 PR 链（#2359 → #2363 → #2364），以强化协议兼容性与开发者体验。

---  
📌 *日报由 AI 技术分析师基于 GitHub 公开数据生成，聚焦技术演进与社区反馈。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-05-25）

---

## 1. 今日速览

OpenCode 社区今日聚焦于模型响应稳定性与用户体验优化，多个高热度 Issue 指向 GPT 模型响应延迟、DeepSeek 推理模式兼容性及 OpenCode Go 订阅状态异常等核心问题。同时，开发者积极贡献 PR，推动 TUI 交互改进、配置系统重构及关键 Bug 修复，社区活跃度持续升温。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|----------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT Models takes too long to respond | 用户反馈 GPT 模型响应时延波动大，影响开发效率，涉及核心 LLM 调用链路稳定性 | 28 条评论，10 👍，开发者高度关注 |
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | Free usage exceed 错误频发 | 免费模型频繁提示用量超限，质疑 OpenCode 免费策略真实性，影响新用户留存 | 36 条评论，10 👍，争议性强 |
| [#11865](https://github.com/anomalyco/opencode/issues/11865) | Subagents 卡死无超时重试机制 | 子代理任务陷入死循环导致会话挂起，暴露任务调度健壮性缺陷 | 17 条评论，11 👍，长期未解痛点 |
| [#29129](https://github.com/anomalyco/opencode/issues/29129) | OpenAI stream 冻结且高 CPU 占用 | 流式响应卡死但进程不退出，资源泄漏风险显著 | 4 条评论，技术细节详实，需紧急排查 |
| [#24264](https://github.com/anomalyco/opencode/issues/24264) | Nvidia NIM DeepSeek v4 推理模型挂起 | 因缺少 `chat_template_kwargs` 参数导致 API 阻塞，影响推理模型集成 | 4 条评论，1 👍，特定 provider 兼容性问题 |
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | 调整 Go 订阅用量以匹配 DeepSeek V4 Pro 降价 | 建议根据 API 成本下调同步提升用户配额，体现定价策略灵活性 | 8 条评论，10 👍，商业化功能呼声高 |
| [#28035](https://github.com/anomalyco/opencode/issues/28035) | 支持将最后 prompt 固定显示在屏幕顶部 | 提升长会话中上下文可见性，改善 TUI 交互体验 | 7 条评论，PR [#29086](https://github.com/anomalyco/opencode/pull/29086) 已响应 |
| [#26371](https://github.com/anomalyco/opencode/issues/26371) | 需双击 Ctrl+C 才能退出 CLI | 防止误操作中断会话，对标 Claude Code/Codex 交互设计 | 4 条评论，1 👍，UX 优化需求明确 |
| [#29141](https://github.com/anomalyco/opencode/issues/29141) | 升级至 OpenCode Go 后仍锁定免费 tier | 订阅状态同步失败，直接影响付费用户体验 | 2 条评论，属关键商业化 Bug |
| [#29154](https://github.com/anomalyco/opencode/issues/29154) | `opencode-go/kimi-k2.6` 报 `permissions` 字段错误 | 特定模型 schema 校验失败，影响 Go 生态模型可用性 | 2 条评论，需 provider 层适配 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 功能/修复内容 |
|------|------|---------------|
| [#29086](https://github.com/anomalyco/opencode/pull/29086) | feat(tui): prototype sticky prompt header | 实现 TUI 中用户 prompt 固定显示功能，响应 #28035 需求 |
| [#29145](https://github.com/anomalyco/opencode/pull/29145) | fix(tui): wire prompt.skills keybinding to gather call | 修复 `prompt_skills` 快捷键失效问题，闭环 #29148 |
| [#29025](https://github.com/anomalyco/opencode/pull/29025) | fix(llm): preserve native provider options | 修复 OpenAI/DeepSeek 等 provider 原生参数透传问题，提升兼容性 |
| [#29150](https://github.com/anomalyco/opencode/pull/29150) | fix(opencode): break auto-compact loop when compaction makes no progress | 解决上下文压缩死循环问题，提升长会话稳定性 |
| [#29068](https://github.com/anomalyco/opencode/pull/29068) | refactor(core): move database schema ownership | 将数据库 schema 迁移至 core 包，提升架构模块化程度 |
| [#29110](https://github.com/anomalyco/opencode/pull/29110) | fix(app): restore queued follow-up setting | 恢复“排队追问”功能，修复用户工作流中断问题 |
| [#28422](https://github.com/anomalyco/opencode/pull/28422) | fix(app): stabilize virtual session timeline interactions | 优化虚拟会话时间轴交互稳定性，防止工具展开状态丢失 |
| [#29155](https://github.com/anomalyco/opencode/pull/29155) | refactor(app): extract refcount utility and clean up server sdk context | 提取通用引用计数工具，简化 server SDK 上下文管理 |
| [#29138](https://github.com/anomalyco/opencode/pull/29138) | docs: document plugin URL specs | 补充插件 URL 规范文档，提升开发者集成体验 |
| [#29139](https://github.com/anomalyco/opencode/pull/29139) | fix(app): open docs from help button | 修正帮助按钮跳转链接至官方文档页 |

---

## 5. 功能需求趋势

- **模型兼容性与稳定性**：社区强烈关注 DeepSeek、Kimi、NIM 等第三方模型集成问题，尤其是推理模式参数传递与 schema 校验（#24264, #29154）。
- **TUI/CLI 交互优化**：高频需求包括 sticky prompt（#28035）、双击退出（#26371）、快捷键支持（#29148），反映对终端体验精细化追求。
- **订阅与计费体验**：OpenCode Go 用户多次反馈订阅状态未生效（#29141, #29135），商业化流程需加强状态同步与错误提示。
- **移动端与远程开发**：提出 Android 控制端（#29121）、SSH 文件编辑（#29152）等需求，拓展使用场景边界。
- **安全与合规**：GDPR 删除请求（#29092）与第三方安全审计报告（#29133）推动合规能力建设。

---

## 6. 开发者关注点

- **Provider 层健壮性**：多个 Issue 暴露 provider 参数处理不一致（如 `reasoning_content`、`permissions` 字段），需统一 schema 校验与降级策略。
- **会话生命周期管理**：子代理卡死、流式冻结、自动压缩循环等问题表明任务调度与资源回收机制有待强化。
- **配置与状态同步**：用户配置（如 tui.json）、订阅状态、会话项目迁移等场景下，状态一致性保障不足。
- **文档与可观测性**：开发者呼吁完善插件规范（#16669）、上下文可见性（#11995）及错误日志可读性，降低排查成本。

---  
*数据来源：github.com/anomalyco/opencode | 生成时间：2026-05-25*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-05-25）

---

## 1. 今日速览

Qwen Code 社区围绕 **v0.16-alpha 发布准备** 持续推进，重点聚焦于 `qwen serve`（Mode B）的稳定性、可观测性与生产就绪能力。多个关键 PR 进入集成分支，同时社区对 Token 消耗统计、本地诊断框架和跨客户端同步等能力提出明确需求。

---

## 2. 版本发布

- **v0.16.1-nightly.20260525.84f408017**  
  本次 nightly 版本主要修复构建流程中的 TypeScript 输出清理问题（#4453），防止因残留文件导致 TS5055 编译错误，并同步发布元数据更新。  
  🔗 [Release v0.16.1-nightly.20260525.84f408017](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260525.84f408017)

---

## 3. 社区热点 Issues

| Issue | 重要性说明 | 社区反应 |
|------|-----------|--------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) **Mode B 功能优先级路线图** | 明确 v0.16 生产就绪目标，涵盖 HTTP/SSE 路由、会话复用、认证等核心能力落地路径，是近期开发主线。 | 高关注度（38 评论），主导多个 PR 合并与分支同步。 |
| [#4421](https://github.com/QwenLM/qwen-code/issues/4421) **本地问题诊断框架** | 提出 ring buffer + diagnostic ID + `/bug collect` 机制，解决用户无法定位 API/SSE 异常、断流等问题的痛点。 | 获开发者支持（3 评论），被视为提升用户体验的关键基础设施。 |
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) **Token 消耗统计功能** | 用户反馈单次调用消耗高达 3000 万 token，亟需透明化用量以优化成本控制。 | 快速引发讨论（2 评论），已有对应 PR #4480 实现 `/token-stats` 命令。 |
| [#4276](https://github.com/QwenLM/qwen-code/issues/4276) **OOM 崩溃问题** | 报告内存泄漏导致进程崩溃，附详细 GC 日志，影响服务稳定性。 | 8 条评论，需进一步排查内存管理策略。 |
| [#4475](https://github.com/QwenLM/qwen-code/issues/4475) **AUTO 模式遥测与分类器一致性追踪** | 补充 AUTO 安全对齐后的监控能力，支持调试与 fleet 级观测。 | 与安全增强 PR #4476 联动，体现纵深防御思路。 |
| [#4481](https://github.com/QwenLM/qwen-code/issues/4481) **语言一致性 bug** | 用户要求始终用英文响应，但模型重复输出相同内容，暴露指令遵循缺陷。 | 需信息补充，可能涉及 prompt 工程或上下文处理逻辑。 |
| [#4390](https://github.com/QwenLM/qwen-code/pull/4390) **W3C traceparent 与 session ID 传播** | 提升分布式追踪能力，支持端到端请求链路分析。 | 虽为 PR，但关联 #4384 观测性需求，属核心可观测性建设。 |
| [#4412](https://github.com/QwenLM/qwen-code/pull/4412) **daemon-mode 开发者深度文档** | 填补 Mode B 架构文档空白，降低贡献者参与门槛。 | 文档类 PR，对社区协作至关重要。 |
| [#4379](https://github.com/QwenLM/qwen-code/pull/4379) **Feishu (Lark) 通道适配器** | 扩展企业 IM 集成能力，支持实时卡片交互与并发消息处理。 | 体现多平台适配战略，增强商业化落地潜力。 |
| [#4464](https://github.com/QwenLM/qwen-code/pull/4464) **微信图片解密修复** | 解决微信客户端显示灰色占位图问题，保障端到端消息完整性。 | 用户场景驱动，提升特定生态体验。 |

---

## 4. 重要 PR 进展

| PR | 功能/修复内容 |
|----|--------------|
| [#4484](https://github.com/QwenLM/qwen-code/pull/4484) | 修复跨客户端实时同步中的 5 项 bridge 层问题，确保 SSE 订阅客户端状态一致。 |
| [#4477](https://github.com/QwenLM/qwen-code/pull/4477) | 为 `/review` 等并行代理命令引入密集内联面板，优化多 agent 执行状态的可视化体验。 |
| [#4476](https://github.com/QwenLM/qwen-code/pull/4476) | 增强 AUTO 模式安全语义：添加拒绝原因边界、PermissionDenied 钩子及累计拒绝上限。 |
| [#4478](https://github.com/QwenLM/qwen-code/pull/4478) | 对齐 Token Plan 内置模型默认值与 ModelStudio，保持 CLI 与 VS Code 插件一致性。 |
| [#4482](https://github.com/QwenLM/qwen-code/pull/4482) | 改进 LogToSpan 桥接错误信息，优化 TUI 异常处理，提升 OTLP 后端兼容性。 |
| [#4332](https://github.com/QwenLM/qwen-code/pull/4332) | 限制 `/model` 切换为会话级作用域，避免意外污染全局设置，新增 `--default` 显式持久化选项。 |
| [#4377](https://github.com/QwenLM/qwen-code/pull/4377) | 新增用户 prompt 扩展钩子，支持 slash 命令在提交前插入自定义逻辑或阻断请求。 |
| [#4454](https://github.com/QwenLM/qwen-code/pull/4454) | 引入 PostToolBatch 钩子，允许在工具调用批次完成后注入上下文或终止流程。 |
| [#4472](https://github.com/QwenLM/qwen-code/pull/4472) | 实现 ACP Streamable HTTP 传输协议（RFD #721），作为 `qwen serve` 第二北向接口。 |
| [#4483](https://github.com/QwenLM/qwen-code/pull/4483) | 提供 v0.16-alpha 本地启动模板，完善 F5 发布链文档配套。 |

> 注：PR #4480（Token 统计）已关闭，功能已合并；PR #4473 和 #4469 为发布链基础同步操作。

---

## 5. 功能需求趋势

从近期 Issues 与 PR 可提炼出三大核心方向：

1. **生产就绪与稳定性**  
   Mode B (`qwen serve`) 成为焦点，围绕 HTTP/SSE 服务、会话管理、内存优化（#4276）、跨客户端同步（#4484）展开，目标是实现本地部署下的高可用服务。

2. **可观测性与诊断能力**  
   社区强烈呼吁增强本地调试支持，包括 Token 用量统计（#4479）、诊断包收集（#4421）、AUTO 模式遥测（#4475）和日志-追踪桥接（#4482），反映用户对透明化运维的迫切需求。

3. **安全与策略控制**  
   AUTO 模式的安全钩子（#4476）、权限拒绝机制、模型切换作用域隔离（#4332）等 PR 显示团队正构建细粒度策略执行层，兼顾灵活性与合规性。

---

## 6. 开发者关注点

- **Token 成本可视化**：高频提及用量不透明问题，期望内置统计命令或仪表盘。
- **本地问题复现困难**：缺乏轻量级诊断工具，用户难以提供有效日志，推动 ring buffer 方案落地。
- **多客户端状态一致性**：Mode B 下多个 IDE 实例共享会话时，操作同步延迟或丢失引发体验断裂。
- **Windows 路径兼容性**：微信等通道在 Windows 环境下路径校验失败（#4465），需强化跨平台适配。
- **文档缺口**：daemon-mode 架构复杂，新贡献者亟需深度技术文档（#4412）降低参与门槛。

---  
*数据来源：github.com/QwenLM/qwen-code | 生成时间：2026-05-25*

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*
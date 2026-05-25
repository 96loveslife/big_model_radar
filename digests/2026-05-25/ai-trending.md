# AI 开源趋势日报 2026-05-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-25 01:59 UTC

---

# AI 开源趋势日报（2026-05-25）

---

## 1. 今日速览

今日 GitHub AI 开源生态呈现“**智能体工具链爆发**”与“**RAG 基础设施深化**”双主线趋势。以 Claude Code 为核心的 AI 编码智能体生态持续升温，多个围绕其构建的插件、技能库与代理平台单日获星超千；同时，知识图谱化代码理解、向量数据库优化及轻量化 LLM 训练项目亦获显著关注。社区正从“调用大模型”向“构建可协作、可记忆、可进化的 AI 工作流”演进。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- **[earendil-works/pi](https://github.com/earendil-works/pi)** ⭐0 (+456)  
  集成 CLI、TUI、Web UI 与 Slack 机器人的统一 AI 代理工具包，支持 vLLM 部署，提供一站式开发体验。
- **[manaflow-ai/cmux](https://github.com/manaflow-ai/cmux)** ⭐0 (+696)  
  专为 AI 编码代理优化的 macOS 终端，基于 Ghostty，支持垂直标签与通知，提升本地代理开发效率。
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** ⭐7,409 [topic:llm-model]  
  Rust 编写的模块化 LLM 应用框架，强调性能与类型安全，适合构建高性能推理服务。

### 🤖 AI 智能体/工作流
- **[multica-ai/multica](https://github.com/multica-ai/multica)** ⭐0 (+585)  
  开源托管式多智能体平台，支持任务分配、进度追踪与技能复合，将编码代理变为“真实队友”。
- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** ⭐0 (+1173)  
  Anthropic 官方维护的 Claude Code 高质量插件目录，标志厂商对生态标准化的推动。
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** ⭐0 (+930)  
  结构化网络安全技能库，映射 MITRE ATT&CK 等五大框架，赋能 AI 代理在安全场景的精准行动。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐165,755 [topic:ai-agent]  
  持续增长的通用智能体框架，强调自我进化与长期记忆，社区活跃度极高。

### 📦 AI 应用
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** ⭐0 (+106)  
  面向金融市场的语言基础模型，专注市场动态预测，体现垂直领域 LLM 的落地探索。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐20,619 [topic:ai-agent]  
  将任意文档转为原生可编辑 PPTX，保留动画与形状，解决办公自动化中的格式 fidelity 难题。

### 🧠 大模型/训练
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐50,499 [topic:llm-model]  
  2 小时内从零训练 64M 参数小模型，降低 LLM 入门门槛，推动边缘部署研究。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐95,805 [topic:ml]  
  手把手 PyTorch 实现 ChatGPT 类模型，仍是教育类项目标杆。

### 🔍 RAG/知识库
- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** ⭐0 (+3003)  
  预索引代码知识图谱，本地运行，减少 Claude Code 等代理的 token 消耗与工具调用次数。
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** ⭐53,084 [topic:rag]  
  将代码、SQL、文档等转为可查询知识图谱，实现跨模态上下文理解。
- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** ⭐11,551 [topic:vector-db]  
  为 Claude Code 提供代码库级上下文搜索的 MCP 插件，提升代理对大型项目的理解能力。
- **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** ⭐11,721 [topic:vector-db]  
  实现 97% 存储压缩的私有 RAG 方案，兼顾性能与隐私，适合个人设备部署。

---

## 3. 趋势信号分析

今日热榜凸显 **AI 编码智能体生态的爆发式增长**，尤其围绕 Anthropic 的 Claude Code 形成密集工具链：从官方插件目录（`claude-plugins-official`）、第三方技能库（如网络安全技能）、到本地知识图谱（`codegraph`）和终端优化（`cmux`），均服务于“让代理更懂代码、更会协作”。同时，**RAG 正从通用检索向领域深度优化演进**，如金融（Kronos）、代码（codegraph）、安全（Cybersecurity Skills）等场景出现专用解决方案。值得注意的是，**轻量化与本地化部署趋势加强**，`minimind`、`LEANN`、`pi` 等项目均强调低资源消耗与隐私保护，反映行业对成本与合规的关注上升。整体来看，AI 开源正从“模型中心”转向“工作流中心”。

---

## 4. 社区关注热点

- **`codegraph`（+3003 stars）**：将代码库转化为本地知识图谱，显著降低代理调用成本，是提升 AI 编码效率的关键基础设施。  
- **`claude-plugins-official`（+1173 stars）**：Anthropic 官方背书，预示 Claude Code 生态将走向标准化与规模化。  
- **`multica`（+585 stars）**：开源多智能体管理平台，解决代理协作与任务追踪难题，代表 AgentOps 方向的重要尝试。  
- **`LEANN`（RAG 存储压缩 97%）**：在隐私与性能间取得突破，为个人及中小企业部署 RAG 提供新路径。  
- **`minimind`（50k+ stars）**：极简 LLM 训练范式，降低研究门槛，可能催生更多边缘场景微调实践。

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*
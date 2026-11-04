# AI 开源趋势日报 2026-11-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-04 05:42 UTC

---

# AI 开源趋势日报

**日期：2026-11-04**  
**数据范围：GitHub 今日 Trending + AI 主题搜索（80 个活跃仓库）**

## 1. 今日速览

今日热榜最明显的主线是 **AI Agent 基础设施快速扩张**，尤其是持久化记忆、计算机操作、并行工作区和多智能体协作工具集中获得关注。`claude-mem` 今日新增 **1,139 stars**，同时进入 Trending 与 RAG 主题榜，凸显“跨会话记忆”已成为 Agent 落地的关键基础设施。

在模型运行侧，新项目 `colibri` 首次进入 Trending，探索以 GPU、RAM 和 NVMe 分层存储承载超大 MoE 模型，反映出社区关注点正从单纯调用模型转向 **本地化、低成本和异构硬件推理**。RAG 也由传统向量检索向“上下文数据库、结构化知识图谱、记忆压缩”演进，Agent 不再只是生成答案，而是持续积累和维护可用上下文。

与此同时，Coding Agent 周边生态快速产品化：`worktrunk`、`skills`、`Claude-Code-Game-Studios` 分别解决并行分支管理、技能复用和工作流编排问题，显示 Agent 竞争正逐步进入 **工程化和组织协作层**。

---

## 2. 各维度热门项目

> 说明：Trending 项目标注“今日新增”；主题搜索项目仅提供总量数据，不补造今日新增。

### 🔧 AI 基础工具

| 项目 | Stars | 简介 |
|---|---:|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 185,841 | 本地模型运行与管理工具，覆盖 Kimi、GLM、MiniMax、DeepSeek、Qwen 等模型，是本地 AI 应用开发的重要入口。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,982 | 通用 Agent 工程平台，提供模型、工具、检索和链式编排能力，继续充当 AI 应用开发的核心框架。 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | **今日 +3,791** | 面向 AI Agent 的计算机操作 CLI，允许 Agent 执行桌面或命令行任务；是今日 Trending 中新增 stars 最高的 AI 项目。 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | **今日 +438** | 面向并行 AI Agent 工作流的 Git worktree 管理工具，解决多个 Agent 同时修改代码时的分支隔离问题。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,775 | 在工具输出、日志和 RAG 内容进入模型前进行压缩，目标是在保持回答质量的同时显著降低 token 消耗。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | 559 | 提供 OpenAI、Anthropic 兼容接口的通用 LLM 网关，支持多模型转换与智能负载均衡。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 5,536 | 面向 Apple Silicon 系统工程师的小型 LLM 推理项目，目标是构建简化版 vLLM 与 Qwen 推理栈。 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 简介 |
|---|---:|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 260,299 | 强调可成长、个性化能力的开源个人 Agent，是主题搜索中总 stars 最高的 AI Agent 项目。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 112,143；**今日 +1,139** | 为 Claude Code、Codex、Gemini、Copilot 等 Agent 提供跨会话记忆，自动压缩并注入相关上下文。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 79,932 | 开源求职 Agent，可进行职位匹配、简历定制、面试准备和申请管理，并支持本地 AI CLI。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,807 | 轻量级开源个人 Agent，强调低部署门槛和可扩展性，适合作为个人自动化代理底座。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,776 | 支持规划、工具调用、记忆和知识自演化的多模型、多渠道个人 Agent Harness。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,161 | Rust 编写的终端 Agent，支持不同模型提供商，体现 CLI Agent 向高性能、可定制方向演进。 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | **今日 +1,182** | 以 49 个 AI Agent、72 个工作流技能和层级协调机制，把 Claude Code 扩展为完整游戏开发工作室。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 108,511 | 为 Agent 提供跨互联网信息获取能力，可读取和搜索 Twitter、Reddit、YouTube、GitHub、B站及小红书。 |

### 📦 AI 应用

| 项目 | Stars | 简介 |
|---|---:|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,706 | 面向 Ollama、OpenAI API 等模型的自托管 AI 对话与工作台，是本地模型生态的重要用户界面。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,367 | 面向团队的可视化 Agentic 工作流与 RAG 平台，支持多模型、工具调用及云端或私有化部署。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 119,978 | 面向 AI 浏览器的 Python 库，支持无头浏览、网页操作和托管 Agent API。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 138,402 | 根据主题或关键词自动生成高清短视频，体现生成式 AI 从内容工具向完整生产流水线演进。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 73,212 | 将文档或主题转换为包含原生图形、动画、图表和旁白的 PowerPoint，属于成熟办公场景 AI 产品化项目。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,517 | LLM 驱动的多市场股票分析系统，整合行情、新闻、决策看板与自动通知。 |
| [Usagi-org/ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor) | **今日 +228** | 基于 Playwright 和 AI 的闲鱼实时/定时监控与智能分析系统，是 AI 融入垂直电商场景的代表。 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | **今日 +503** | 面向金融市场语言的基础模型，专注时序和金融场景建模。 |

### 🧠 大模型 / 训练

| 项目 | Stars | 简介 |
|---|---:|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 201,295 | 通用机器学习框架，覆盖训练、推理及生产部署，仍是 AI 工程生态的重要基础设施。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 168,519 | 提供文本、视觉、音频和多模态模型定义与推理接口，是开源模型生态的核心框架。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 105,117 | Python 生态主流深度学习框架，持续推动训练、分布式计算和硬件加速能力普及。 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | **今日 +802** | 面向前沿 MoE 模型的 C 分层推理引擎，将热专家放 GPU、温专家放 RAM、冷专家从 NVMe 流式加载。 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | 251 | 能量基础模型的训练与扩展开源代码，面向更高效生成模型研究。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,563 | 面向多模型、多任务的开源评测平台，覆盖推理、代码、科学、长上下文和安全能力。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 107,779 | 使用 PyTorch 从零实现类 ChatGPT LLM，是理解模型训练与推理栈的高热度学习项目。 |

### 🔍 RAG / 知识库

| 项目 | Stars | 简介 |
|---|---:|---|
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,476 | 面向 Agent 的自演化上下文数据库，统一 Agent 记忆、知识 RAG 与技能，显示上下文层正在成为独立基础设施。 |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | 58,726 | 无代码 RAG 服务，可保持文档答案同步，并适配多种向量数据库。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 67,908 | 本地优先的一体化 AI Agent 与知识工作空间，强调数据自主和开箱即用。 |
| [Cognee](https://github.com/topoteretes/cognee) | 33,037 | 面向 Agent 的开源记忆平台，通过图谱化知识与轻量模型提供长期记忆能力。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 68,363 | 可嵌入生产应用的 Agent 记忆层，解决跨会话上下文持久化与复用问题。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 141,959 | 将代码、文档、SQL schema 和配置转换为可查询知识图谱，无需向量库即可进行推理型检索。 |
| [ragflow](https://github.com/infiniflow/ragflow) | 93,459 | 从 RAG 引擎发展为 Agent-native 数据库，兼顾文档检索和上下文基础设施。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 35,417 | 高性能、分布式的向量数据库和搜索引擎，是规模化 AI 检索的重要存储层。 |

---

## 3. 趋势信号分析

今日增长最快的 AI 工具集中在 **Agent 工程底座**：记忆、计算机操作、Git worktree、技能和工作流编排同时登榜，说明社区关注点已由“模型回答能力”转向“Agent 能否长期工作”。`claude-mem` 今日新增 1,139 stars，显示跨会话持久化记忆成为刚需；`agent-desktop` 新增 3,791 stars，则表明 Computer Use 正从研究演示走向 CLI 产品。

技术栈上，`colibri` 的 GPU/RAM/NVMe 分层 MoE 推理是明显新方向，契合近期大模型持续增大、MoE 专家数量增加及推理成本上升的行业趋势。它与 `tiny-llm`、`LLM-API-Key-Proxy` 共同表明开发者同时追求**本地低成本推理**和**多模型统一接入**。RAG 侧则从向量数据库转向上下文数据库、记忆压缩和知识图谱，反映 Agent 基础设施正快速向传统搜索与数据管理栈融合。

---

## 4. 社区关注热点

- **Agent 跨会话记忆**  
  [claude-mem](https://github.com/thedotmack/claude-mem) 今日新增 1,139 stars，且同时出现在 Trending 和 RAG 主题榜；[mem0](https://github.com/mem0ai/mem0)、[Cognee](https://github.com/topoteretes/cognee) 也显示长期记忆正在成为独立基础设施品类。

- **Computer Use 与桌面自动化**  
  [agent-desktop](https://github.com/vercel-labs/agent-desktop) 以今日新增 3,791 stars 居 AI 项目之首。其高关注度表明，Agent 正从文本和 API 操作扩展到 GUI、终端及跨应用执行。

- **Agent 并行开发基础设施**  
  [worktrunk](https://github.com/max-sixty/worktrunk) 直接解决多 Agent 并行修改代码时的 Git 分支管理问题；[Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) 则展示了多 Agent、角色分工和技能编排的完整工作流。

- **上下文层超越传统向量检索**  
  [OpenViking](https://github.com/volcengine/OpenViking)、[Graphify](https://github.com/Graphify-Labs/graphify) 与 [headroom](https://github.com/headroomlabs-ai/headroom) 分别从上下文数据库、无向量知识图谱和 token 压缩切入，RAG 正快速演化为 Agent Context Engineering。

- **本地大模型与异构推理**  
  [colibri](https://github.com/JustVugg/colibri) 首次登上今日 Trending，其分层存储 MoE 推理思路值得关注。这一方向直接回应了超大模型部署中对显存、内存容量、延迟与成本的现实约束。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
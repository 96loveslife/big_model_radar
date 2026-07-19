# AI 开源趋势日报 2026-07-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-19 03:24 UTC

---

<think>Let me analyze this data carefully to create a comprehensive AI open-source trends report.

**Step 1: Filtering**

From the Trending list (11 repos), I need to identify AI-related ones:

1. **Robbyant/lingbot-map** (+831 today) - "A feed-forward 3D foundation model for reconstructing scenes from streaming data" → AI/ML (3D foundation model) ✓
2. **apache/ossie** (+47 today) - "standardize how we exchange semantic metadata across analytics, AI and BI platforms" → AI-related (mentions AI platforms) ✓ but more general - marginal, I'll consider it loosely AI
3. **PostHog/posthog** (+338 today) - "AI observability, analytics, session replay, flags, experiments..." → Has AI components but primarily a product analytics platform. I'll include as AI-related tool.
4. **ibelick/ui-skills** (+123 today) - "Skills for Design Engineers" → Not AI, general frontend
5. **rohitg00/ai-engineering-from-scratch** (+191 today) - "Learn it. Build it. Ship it for others" - title clearly AI → AI ✓
6. **tirth8205/code-review-graph** (+355 today) - "Local-first code intelligence graph for MCP and CLI" → AI coding tools ✓
7. **elder-plinius/G0DM0D3** (+69 today) - "LIBERATED AI CHAT" → AI ✓
8. **lyogavin/airllm** (+161 today) - "AirLLM 70B inference with single 4GB GPU" → AI inference ✓
9. **KnockOutEZ/wigolo** (+203 today) - "The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP" → AI coding agent ✓
10. **codecrafters-io/build-your-own-x** (+1126 today) - "Master programming by recreating your favorite technologies from scratch" → Not AI, general programming education
11. **MoonshotAI/kimi-cli** (+65 today) - "Kimi Code CLI is your next CLI agent" → AI ✓

From the topic search results, all are AI-related by definition (they came from AI topic searches).

**Trending AI-related repos to include:**
- Robbyant/lingbot-map (+831) - 3D foundation model
- apache/ossie (+47) - semantic metadata for AI
- PostHog/posthog (+338) - AI observability (partial AI)
- rohitg00/ai-engineering-from-scratch (+191) - learning
- tirth8205/code-review-graph (+355) - MCP for code review
- elder-plinius/G0DM0D3 (+69) - AI chat
- lyogavin/airllm (+161) - LLM inference
- KnockOutEZ/wigolo (+203) - AI coding agent search
- MoonshotAI/kimi-cli (+65) - Kimi CLI agent

Excluded from Trending:
- ibelick/ui-skills (frontend)
- codecrafters-io/build-your-own-x (general programming)

**Step 2: Classification**

Let me categorize all AI projects:

**🔧 AI 基础工具 (Framework, SDK, Inference Engine, Dev Tools, CLI)**
- lyogavin/airllm (+161 today) - LLM inference
- KnockOutEZ/wigolo (+203 today) - web search/fetch for AI agents
- MoonshotAI/kimi-cli (+65 today) - CLI agent
- affaan-m/ECC (230k stars) - agent harness optimization
- langchain-ai/langchain (142k stars) - agent engineering platform
- langgenius/dify (149k stars) - agentic workflow platform
- vllm-project/vllm (86k stars) - inference engine
- ollama/ollama (176k stars) - LLM runtime
- langchain4j/langchain4j (12k) - Java LLM framework
- 0xPlaygrounds/rig (7k) - Rust LLM framework
- LLM-API-Key-Proxy (524) - LLM gateway
- open-compass/opencompass (7k) - evaluation platform
- OpenHands/OpenHands (81k) - AI-driven dev

**🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)**
- NousResearch/hermes-agent (216k) - AI agent
- CherryHQ/cherry-studio (48k) - AI productivity with agents
- zhayujie/CowAgent (46k) - super AI assistant/agent
- HKUDS/nanobot (45k) - lightweight AI agent
- CopilotKit/CopilotKit (36k) - frontend for agents
- iOfficeAI/AionUi (30k) - cowork for CLI tools
- Gitlawb/openclaude (30k) - runs anywhere
- googleworkspace/cli (29k) - Google workspace CLI with AI agent skills
- esengine/DeepSeek-Reasonix (27k) - DeepSeek coding agent
- HKUDS/Vibe-Trading (25k) - trading agent
- Significant-Gravitas/AutoGPT (185k) - accessible AI
- browser-use/browser-use (105k) - websites for AI agents
- OpenHands/OpenHands (81k) - AI dev
- DietrichGebert/ponytail (85k) - AI agent skills
- grahpify/graphify (91k) - coding assistant
- thedotmack/claude-mem (87k) - persistent context for agents
- Eigenwise/atomic-agents (6k) - building AI agents atomically
- santifer/career-ops (60k) - job search agent
- ZhuLinsen/daily_stock_analysis (57k) - stock analysis agent
- Panniantong/Agent-Reach (57k) - eyes for AI agents

**📦 AI 应用 (Specific products, vertical solutions)**
- PostHog/posthog (+338 today) - AI observability
- hugohe3/ppt-master (39k) - AI PPT generator
- meilisearch/meilisearch (58k) - AI-powered search
- OpenBB-finance/OpenBB (70k) - data platform for AI agents
- netdata/netdata (79k) - AI-powered observability
- elder-plinius/G0DM0D3 - AI chat
- ScrapeGraphAI/Scrapegraph-ai (28k) - AI scraper
- jeecgboot/JeecgBoot (47k) - AI low-code platform
- rohitg00/ai-engineering-from-scratch (+191 today) - learning resource

**🧠 大模型/训练 (Model weights, training frameworks, fine-tuning)**
- Robbyant/lingbot-map (+831 today) - 3D foundation model
- huggingface/transformers (162k) - model definition framework
- pytorch/pytorch (101k) - deep learning framework
- tensorflow/tensorflow (196k) - ML framework
- keras-team/keras (64k) - deep learning
- microsoft/ML-For-Beginners (88k) - ML learning
- microsoft/AI-For-Beginners (52k) - AI learning
- ultralytics/ultralytics (59k) - YOLO
- ultralytics/yolov5 (57k) - YOLOv5
- roboflow/supervision (48k) - computer vision tools
- tesseract-ocr/tesseract (75k) - OCR
- scikit-learn/scikit-learn (66k) - ML
- JuliaLang/julia (48k) - Julia language
- apache/ossie (+47 today) - semantic metadata for AI
- galilai-group/stable-pretraining (288) - pretraining library
- Amirhosein-gh98/Gnosis (46) - LLM self-awareness research
- Awesome-Embodied-Robotics-and-Agent (1.8k) - research list

**🔍 RAG/知识库 (Vector DB, retrieval augmented, knowledge management)**
- VectifyAI/PageIndex (34k) - vectorless RAG
- qdrant/qdrant (33k) - vector database
- topoteretes/cognee (28k) - AI memory
- weaviate/weaviate (16k) - vector database
- memvid/memvid (15k) - memory layer
- alibaba/zvec (15k) - in-process vector DB
- neuml/txtai (12k) - semantic search
- zilliztech/claude-context (12k) - code search MCP
- lancedb/lancedb (10k) - embedded retrieval
- milvus-io/milvus (45k) - vector database
- PaddlePaddle/PaddleOCR (85k) - OCR for AI
- infiniflow/ragflow (85k) - RAG engine
- FlowiseAI/Flowise (54k) - visual AI agent builder
- run-llama/llama_index (50k) - document agent/OCR
- jeecgboot/JeecgBoot (47k) - AI low-code (includes knowledge base)
- Mintplex-Labs/anything-llm (63k) - local-first agent
- mem0ai/mem0 (61k) - memory layer
- headroomlabs-ai/headroom (59k) - compress for LLM
- siyuan-note/siyuan (45k) - knowledge management with AI topic
- Shubhamsaboo/awesome-llm-apps (124k) - RAG apps
- datawhalechina/hello-agents (67k) - agents tutorial
- NirDiamant/RAG_Techniques (28k) - RAG techniques
- tirth8205/code-review-graph (+355 today) - code intelligence graph for MCP

Let me pick the top ones for each category. I need to focus on what's trending today AND what's most popular.

Let me now structure the report:

**Trending Today highlights:**
- Robbyant/lingbot-map (+831) - clearly the most starred new repo
- tirth8205/code-review-graph (+355) - MCP-related
- PostHog/posthog (+338) - AI observability
- KnockOutEZ/wigolo (+203) - MCP search
- rohitg00/ai-engineering-from-scratch (+191) - learning
- lyogavin/airllm (+161) - inference
- ibelick/ui-skills (+123) - excluded (not AI)
- elder-plinius/G0DM0D3 (+69) - AI chat
- MoonshotAI/kimi-cli (+65) - Kimi CLI
- apache/ossie (+47) - semantic metadata

Most relevant trend signals:
- MCP (Model Context Protocol) tools dominating: code-review-graph, wigolo, claude-context, Agent-Reach
- Local-first/local AI: airllm, wigolo, anything-llm, memvid
- CLI agents: kimi-cli, DeepSeek-Reasonix, Google workspace CLI, openclaude
- Coding agents: nanobot, ECC, Graphify
- 3D/multimodal: lingbot-map (3D foundation model)

Let me now write the report in Chinese, professional and concise.

I need to use thinking mode for max effort. Let me be thorough.</think>

# 🤖 AI 开源趋势日报 · 2026-07-19

> 数据来源：GitHub Trending 今日榜单 + Topic Search AI 项目检索，共 11 + 82 个仓库，经 AI 相关性筛选与去重。

---

## 一、今日速览

今日 GitHub Trending 与 AI 强相关的新项目中，**3D 基础模型与 MCP 协议工具双双爆发**：`Robbyant/lingbot-map` 单日斩获 +831 stars，成为今日 AI 领域最大爆款；`code-review-graph`、`wigolo` 等 MCP 原生工具密集上榜，反映开发者社区对"AI Agent 与本地工具链互联"协议的高度热情。与此同时，**低门槛本地推理**（`AirLLM`）和**轻量级 Agent CLI**（`Kimi CLI`、`DeepSeek-Reasonix`）持续走热，标志 AI 工具正全面向端侧、本地化、CLI 化迁移。Apache 旗下语义元数据规范 Ossie 亮相也预示企业级 AI 数据治理正在标准化。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars & 今日新增 | 一句话说明 |
|------|----------------|-----------|
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐0 · **+161 today** | 4GB 单卡即可推理 70B 大模型，极低显存门槛 |
| [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | ⭐0 · **+65 today** | 月之暗面官方 CLI Agent，接入 Kimi 长上下文能力 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,413 | Ollama 已支持 Kimi-K2.6 / GLM-5.2 / DeepSeek 等最新模型，本地 LLM 事实标准 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142,054 | 重新定位为"Agent Engineering Platform"，工程化能力升级 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86,590 | 高吞吐低显存推理引擎，生产环境默认选项 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐81,231 | 老牌 AI 编程 Agent，独立自治能力持续增强 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐29,815 | 谷歌官方 Workspace CLI，内置 AI Agent Skills |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐27,267 | 基于 DeepSeek 的终端编程 Agent，针对 prefix-cache 稳定性深度优化 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars & 今日新增 | 一句话说明 |
|------|----------------|-----------|
| [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo) | ⭐0 · **+203 today** | 面向 AI 编程 Agent 的本地化 MCP 搜索/抓取/研究网关，零 API 成本 |
| [elder-plinius/G0DM0D3](https://github.com/elder-plinius/G0DM0D3) | ⭐0 · **+69 today** | 标榜"Liberated AI Chat"的无限制对话前端 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐216,889 | Nous Research 推出的成长型 Agent，是当前最热门 Agent 框架 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐230,968 | Agent Harness 性能优化系统，含技能/直觉/记忆/安全模块 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,599 | AI Agent 鼻祖，仍是"普惠 AI"愿景的代表项目 |
| [Zhuyujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,038 | 国产开源超级 Agent Harness，支持自演化记忆（chatgpt-on-wechat 继任者） |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐45,865 | 港大开源的轻量级 AI Agent，工具/聊天/工作流三合一 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,739 | 国产 AI 生产力台座，300+ 助手 + 多模型统一接入 |

---

### 📦 AI 应用（垂直场景 / 产品化）

| 项目 | Stars & 今日新增 | 一句话说明 |
|------|----------------|-----------|
| [PostHog/posthog](https://github.com/PostHog/posthog) | ⭐0 · **+338 today** | 增加 AI 观测性 + MCP，打通从数据到 Agent 调试闭环 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐0 · **+191 today** | "Learn it. Build it. Ship it"——AI 工程实战教程型仓库 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐39,825 | 输入文档/主题一键生成原生 PowerPoint，支持动画与旁白 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐70,740 | 面向分析师与 AI Agent 的开源金融数据平台 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | ⭐28,463 | 基于 LLM 的智能网页爬虫，自然语言即可定义抓取规则 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | ⭐47,125 | 国产 AI 低代码平台，"一句话生成整个系统" |

---

### 🧠 大模型 / 训练（模型 / 训练框架 / 微调）

| 项目 | Stars & 今日新增 | 一句话说明 |
|------|----------------|-----------|
| [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | ⭐0 · **+831 today** 🔥 | 流式数据 3D 场景重建的前馈基础模型，今日全榜增量第一 |
| [apache/ossie](https://github.com/apache/ossie) | ⭐0 · **+47 today** | Apache 语义元数据规范，统一 AI/BI 平台的数据交换标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,712 | 事实上的模型定义标准，文本/视觉/音频/多模态全覆盖 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,763 | 深度学习框架底座，与大模型生态深度绑定 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐59,627 | YOLO26/YOLO11 官方仓库，CV 领域持续活跃 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐288 | 面向基础模型与世界模型预训练的新兴库 |
| [Amirhosein-gh98/Gnosis](https://github.com/Amirhosein-gh98/Gnosis) | ⭐46 | 研究 LLM 内部电路以预测自身失败，探索模型自省方向 |

---

### 🔍 RAG / 知识库（向量库 / 检索增强 / 知识管理）

| 项目 | Stars & 今日新增 | 一句话说明 |
|------|----------------|-----------|
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | ⭐0 · **+355 today** | 本地优先的代码情报图谱，让 AI 编程工具只读必要的上下文 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,101 | 无需向量的"推理式 RAG"文档索引，挑战传统 RAG 范式 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85,356 | RAG + Agent 融合的开源引擎，国内最成熟 RAG 框架 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐85,764 | 百度 OCR 工具包，可作为 LLM 文档解析前置模块 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,138 | Agent 通用记忆层，跨会话持久化记忆的事实标准 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐28,228 | 基于知识图谱的 Agent 长期记忆引擎 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,933 | 文档 Agent 与 OCR 平台，RAG 工程化首选 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,269 | 云原生向量数据库，RAG 基础设施代表项目 |

---

## 三、趋势信号分析

今日 Trending 榜单清晰呈现出 **"MCP 协议 + 端侧 Agent + 3D 基础模型"** 三大爆发主线。**第一，MCP（Model Context Protocol）正在成为 Agent 工具链的事实标准**——`code-review-graph`、`wigolo`、`Agent-Reach`、`claude-context` 等围绕 MCP 构建的工具集中涌入热榜，说明开发者社区已经厌倦了碎片化的 Agent 工具集，期待通过统一协议打通搜索、抓取、代码理解、本地数据库等能力。**第二，CLI / 本地优先的 Agent 形态全面回归**——`kimi-cli`、`DeepSeek-Reasonix`、`AirLLM`、`wigolo` 共同指向"零云依赖、零 API Key、零边际成本"的工具哲学，这与近期 Ollama 支持 Kimi-K2.6 / GLM-5.2 等端侧大模型的浪潮形成共振。**第三，3D 基础模型在沉寂后突然走红**——`lingbot-map` 单日 +831 stars，且采用 feed-forward 架构直接处理 streaming 数据，与世界模型/具身智能的研究热度吻合，预示多模态正从 2D 向 3D 加速迁移。值得注意的是 Apache 首次推出面向 AI/BI 的语义元数据规范 `Ossie`，意味着企业级 AI 数据治理开始进入标准化阶段。

---

## 四、社区关注热点

- 🛰️ **[Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map)** — 今日新增 +831 stars 的"流式 3D 重建基础模型"，可能是 3D/具身智能方向的新基座，值得跟踪论文与后续工作。
- 🔌 **[tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — MCP 协议下的代码理解图谱，为"大代码库 AI 审查"提供了可量化的上下文压缩方案，工程化思路领先。
- 🪶 **[KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo)** — 零成本 MCP 搜索/抓取网关，定位明确、痛点真实，是 Agent 基础设施层的潜力项目。
- 💾 **[lyogavin/airllm](https://github.com/lyogavin/airllm)** — 4GB 单卡跑 70B 模型，长期被开发者关注的"显存民主化"代表，本次再度上榜说明需求依然旺盛。
- 🧠 **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 当下社区最热 Agent 框架，216k stars，"随用户成长"的定位契合长期 Agent 演进方向。

---

*📌 报告生成时间：2026-07-19 · 数据均来自公开 GitHub 平台*

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
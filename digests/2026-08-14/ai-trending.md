# AI 开源趋势日报 2026-08-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-14 02:22 UTC

---

<think>Let me analyze the data carefully and create a comprehensive AI open-source trends daily report.

## Step 1: Filtering - Identify AI/ML related projects

### From Trending (17 repos):
1. **cathrynlavery/diagram-design** - AI-related (29 editorial diagram types for Claude Code) ✅
2. **semantica-agi/semantica** - AI-related (Graph-Native Infrastructure for Context and Accountable AI Systems) ✅
3. **anthropics/skills** - AI-related (Public repository for Agent Skills) ✅
4. **cactus-compute/needle** - AI-related (14MB foundation model for tiny devices) ✅
5. **altic-dev/FluidVoice** - AI-related (on-device STT with custom trained AI enhancement model) ✅
6. **unslothai/unsloth** - AI-related (Local UI to run and train LLMs and diffusion models) ✅
7. **macro-inc/macro** - AI-related (workspace with agents, shared AI memory) ✅
8. **megadose/holehe** - NOT AI-related (OSINT tool for checking email usage on sites) ❌
9. **smicallef/spiderfoot** - NOT AI-related (OSINT automation for threat intelligence) ❌
10. **NVIDIA-NeMo/Switchyard** - AI-related (LLM traffic routing across models/providers) ✅
11. **holaboss-ai/holaOS** - AI-related (Open-source All in One AI agent workspace) ✅
12. **kepano/obsidian-skills** - AI-related (Agent skills for Obsidian) ✅
13. **3b1b/manim** - Borderline - Animation engine for math videos, not directly AI. Skip ❌
14. **msitarzewski/agency-agents** - AI-related (AI agency with specialized agents) ✅
15. **Lightricks/LTX-2** - AI-related (LTX-2 audio-video generative model) ✅
16. **lightningpixel/modly** - AI-related (Desktop app to generate 3D models using local AI) ✅
17. **infiniflow/ragflow** - AI-related (RAG engine with Agent capabilities) ✅

So from Trending: 14 AI-related repos, 3 non-AI (holehe, spiderfoot, manim)

### From Topic Search (79 repos):
These are all AI-related by definition (filtered by topic:llm, vector-db, rag, ml, ai-agent, llm-model). Let me list them all and categorize:

**topic:llm (16 repos):**
- affaan-m/ECC - Agent harness performance optimization
- NousResearch/hermes-agent - Agent that grows with you
- Significant-Gravitas/AutoGPT - AutoGPT
- ollama/ollama - Run LLMs locally
- f/prompts.chat - ChatGPT prompts collection
- firecrawl/firecrawl - Web scraping for AI
- huggingface/transformers - ML framework
- langgenius/dify - Agentic workflows, RAG pipelines
- open-webui/open-webui - AI Interface
- langchain-ai/langchain - Agent engineering platform
- browser-use/browser-use - Web automation for AI agents
- Graphify-Labs/graphify - Codebase knowledge graph
- harry0703/MoneyPrinterTurbo - AI video generation
- rasbt/LLMs-from-scratch - Build LLM from scratch
- JuliusBrussee/caveman - Claude Code skill (token optimization)
- (need to check if there are more in topic:llm)

Wait, the data shows 79 repos total. Let me count by topic:
- topic:llm: ~16 (ECC, hermes-agent, AutoGPT, ollama, prompts.chat, firecrawl, transformers, dify, open-webui, langchain, browser-use, graphify, MoneyPrinterTurbo, LLMs-from-scratch, caveman = 15)
- topic:vector-db: 16 (anything-llm, meilisearch, llama_index, milvus, PageIndex, qdrant, cognee, RAG_Techniques, weaviate, zvec, txtai, langchain4j, lancedb, oceanbase, databend = 15)
- topic:rag: 9 (awesome-llm-apps, claude-mem, ragflow, hello-agents, headroom, mem0, Flowise, JeecgBoot = 8)
- topic:ml: 12 (tensorflow, pytorch, ML-For-Beginners, netdata, tesseract, scikit-learn, keras, ultralytics, supervision, julia, ai-engineering-from-scratch, airflow = 12)
- topic:ai-agent: 16 (learn-claude-code, Front-End-Checklist, Agent-Reach, career-ops, daily_stock_analysis, cherry-studio, nanobot, ppt-master, CowAgent, siyuan-note, ai-agent-book, CopilotKit, DeepSeek-Reasonix, QwenPaw = 14)
- topic:llm-model: 14 (rig, opencompass, atomic-agents, tiny-llm, nestia, AgentsMeetRL, awesome-japanese-llm, casbin-gateway, Static-to-Dynamic-LLMEval, picollm, testtimescaling, Awesome-Diffusion-LLM, aarambh-studio, ai-access, croqtile = 15)

Total ≈ 15+15+8+12+14+15 = 79. Good.

## Step 2: Classification

Now let me classify everything into the 5 categories:

### 🔧 AI 基础工具 (Frameworks, SDK, Inference Engines, Dev Tools, CLI)

From Trending:
- unslothai/unsloth - Local UI to run and train LLMs
- NVIDIA-NeMo/Switchyard - LLM traffic routing
- anthropics/skills - Agent Skills (development tool)
- kepano/obsidian-skills - Agent skills for Obsidian
- semantica-agi/semantica - Graph-Native Infrastructure for AI
- cactus-compute/needle - Foundation model for tiny devices

From Topic:
- ollama/ollama - Run LLMs locally
- huggingface/transformers - ML framework
- langchain-ai/langchain - Agent engineering platform
- 0xPlaygrounds/rig - Build LLM Applications in Rust
- Picovoice/picollm - On-device LLM Inference
- open-webui/open-webui - AI Interface
- headroomlabs-ai/headroom - Compress tool outputs for LLMs
- firecrawl/firecrawl - Web scraping API for AI
- JuliusBrussee/caveman - Claude Code skill (token optimization)

### 🤖 AI 智能体/工作流 (Agent Frameworks, Automation, Multi-agent)

From Trending:
- msitarzewski/agency-agents - Complete AI agency
- holaboss-ai/holaOS - AI agent workspace
- macro-inc/macro - Unified workspace with agents
- anthropics/skills - Agent Skills
- kepano/obsidian-skills - Agent skills for Obsidian

From Topic:
- affaan-m/ECC - Agent harness performance optimization
- NousResearch/hermes-agent - Agent that grows with you
- Significant-Gravitas/AutoGPT - AutoGPT
- langgenius/dify - Agentic workflows
- browser-use/browser-use - Web automation for AI agents
- Graphify-Labs/graphify - Codebase knowledge graph for agents
- shareAI-lab/learn-claude-code - Nano claude code-like agent harness
- Panniantong/Agent-Reach - Give AI agent eyes to see internet
- HKUDS/nanobot - Personal AI agent framework
- ZhuLinsen/daily_stock_analysis - LLM-driven stock analysis
- zhayujie/CowAgent - Super AI assistant
- esengine/DeepSeek-Reasonix - DeepSeek-native AI coding agent
- agentscope-ai/QwenPaw - Personal AI Assistant
- CherryHQ/cherry-studio - AI productivity studio
- CopilotKit/CopilotKit - Frontend Stack for Agents

### 📦 AI 应用 (Specific Apps, Vertical Solutions)

From Trending:
- altic-dev/FluidVoice - macOS Dictation app with on-device STT
- Lightricks/LTX-2 - Audio-video generative model
- lightningpixel/modly - Desktop app to generate 3D models
- macro-inc/macro - Workspace with AI features

From Topic:
- harry0703/MoneyPrinterTurbo - AI video generation
- open-webui/open-webui - AI Interface
- CherryHQ/cherry-studio - AI productivity studio
- hugohe3/ppt-master - AI turns documents into PowerPoint
- ZhuLinsen/daily_stock_analysis - Stock analysis
- santifer/career-ops - AI job search
- siyuan-note/siyuan - Knowledge workspace
- JeecgBoot - Enterprise AI low-code platform
- FlowiseAI/Flowise - Build AI Agents Visually
- Mintplex-Labs/anything-llm - Local-first agent experience

### 🧠 大模型/训练 (Model Weights, Training Frameworks, Fine-tuning)

From Trending:
- cactus-compute/needle - 14MB foundation model
- unslothai/unsloth - Train LLMs and diffusion models
- Lightricks/LTX-2 - LTX-2 generative model

From Topic:
- huggingface/transformers - ML framework
- rasbt/LLMs-from-scratch - Build LLM from scratch
- tensorflow/tensorflow - ML framework
- pytorch/pytorch - Deep learning framework
- keras-team/keras - Deep Learning for humans
- ultralytics/ultralytics - YOLO models
- scikit-learn/scikit-learn - ML library
- roboflow/supervision - Computer vision tools
- AarambhDevHub/aarambh-studio - LLM built from scratch in Rust
- llm-jp/awesome-japanese-llm - Japanese LLMs overview
- AIDASLab/Awesome-Diffusion-LLM - Diffusion LLMs
- LancerLab/croqtile - AI-native Kernel programming DSL
- Eigenwise/atomic-agents - Building AI agents (model related)
- skyzh/tiny-llm - learn LLM inference

### 🔍 RAG/知识库 (Vector DB, Retrieval, Knowledge Management)

From Trending:
- infiniflow/ragflow - RAG engine with Agent capabilities

From Topic:
- Shubhamsaboo/awesome-llm-apps - AI Agents and RAG Apps
- thedotmack/claude-mem - Persistent Context Across Sessions
- datawhalechina/hello-agents - Agent principles tutorial
- mem0ai/mem0 - Universal memory layer for AI Agents
- Mintplex-Labs/anything-llm - AnythingLLM
- meilisearch/meilisearch - Search engine with AI
- run-llama/llama_index - Document agent platform
- milvus-io/milvus - Vector database
- VectifyAI/PageIndex - Vectorless RAG
- qdrant/qdrant - Vector Database
- topoteretes/cognee - AI memory platform
- NirDiamant/RAG_Techniques - RAG techniques
- weaviate/weaviate - Vector database
- alibaba/zvec - In-process vector database
- neuml/txtai - Semantic search framework
- langchain4j/langchain4j - Java LLM library
- lancedb/lancedb - Embedded retrieval library
- oceanbase/oceanbase - Distributed database for AI
- databendlabs/databend - Data warehouse for AI
- f/prompts.chat - ChatGPT Prompts
- Graphify-Labs/graphify - Knowledge graph for codebases
- thedaviddias/Front-End-Checklist - Web dev checklist for AI
- JeecgBoot - Knowledge base
- topoteretes/cognee - Knowledge graph
- opencompass/opencompass - LLM evaluation
- seekd... Static-to-Dynamic-LLMEval
- testtimescaling - test-time scaling survey
- AgentsMeetRL - Agentic RL
- samchon/nestia - NestJS helper
- apache/casbin-gateway - AI security gateway
- bojieli/ai-agent-book - AI Agent book
- microsoft/ML-For-Beginners - ML course
- tesseract-ocr/tesseract - OCR engine
- JuliaLang/julia - Julia language (general, but listed under topic:ml)
- apache/airflow - Workflow platform
- netdata/netdata - Observability
- rohitg00/ai-engineering-from-scratch - AI engineering course
- dg/ai-access - PHP AI library

Some of these are general tools that happen to be tagged with ML/AI topics. Let me focus on the most relevant ones.

Now let me organize this into a proper report.

For the "trending" section, today's new stars:
- infiniflow/ragflow: +465 today
- cactus-compute/needle: +769 today (small model, hot topic)
- NVIDIA-NeMo/Switchyard: +408 today (LLM routing)
- macro-inc/macro: +1239 today (workspace with AI agents)
- semantica-agi/semantica: +713 today (graph-based AI infrastructure)
- msitarzewski/agency-agents: +778 today (AI agents)
- Lightricks/LTX-2: +205 today (generative model)
- unslothai/unsloth: +328 today (LLM training UI)
- holaboss-ai/holaOS: +241 today (AI agent workspace)
- anthropics/skills: +312 today (Agent Skills)
- kepano/obsidian-skills: +292 today (Agent Skills)
- altic-dev/FluidVoice: +76 today (voice AI)
- lightningpixel/modly: +118 today (3D generation AI)

Major trends I'm noticing:
1. **Agent Skills / Agent Harness ecosystem is exploding** - anthropics/skills, kepano/obsidian-skills, learn-claude-code, ECC, hermes-agent, agency-agents, holaOS - clearly the "skills" paradigm (popularized by Claude Code) is the dominant AI dev pattern
2. **Small/on-device models** - cactus-compute/needle (14MB foundation model), Picovoice/picollm (on-device LLM inference)
3. **LLM routing/infrastructure** - NVIDIA Switchyard, semantica
4. **AI workspaces** - macro, holaOS, ollama (run models)
5. **Vertical AI apps** - FluidVoice (voice), modly (3D), LTX-2 (video), MoneyPrinterTurbo

Let me write the report now.</think>

# 📊 AI 开源趋势日报 · 2026-08-14

---

## 1. 今日速览

今日 GitHub Trending 被 **"Agent Skills / Agent Harness"** 生态全面占领——Anthropic 官方 `anthropics/skills` 仓库首次亮相即获 +312 stars，配合 `kepano/obsidian-skills`、`shareAI-lab/learn-claude-code`、`affaan-m/ECC`、`msitarzewski/agency-agents` 等生态项目，标志着 **"可组合、可注入的 Agent 技能化范式"** 已成为主流。同时，**端侧/小型基础模型**（`cactus-compute/needle` 仅 14MB）以及 **LLM 流量路由层**（`NVIDIA-NeMo/Switchyard`）双双爆发，反映出社区对"小模型本地化 + 多模型智能调度"的双重押注。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架/SDK/推理引擎/CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | �178,489 | 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等主流模型的"事实标准"CLI，已支持本周期最新模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,081 | 文本/视觉/音频/多模态推理与训练的基石框架，长期稳定霸榜 |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | ⭐0 (+**408** today) | LLM 应用级流量路由网关，兼容 OpenAI/Anthropic API，支持多模型 Benchmark 与成本优化 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐144,196 | 已升级定位为"Agent Engineering Platform"，仍是构建 LLM 应用的默认入口 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐0 (+**328** today) | 一站式本地 UI 运行/训练 LLM 与扩散模型（Qwen3.8、Gemma 4、DeepSeek-V4、FLUX） |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐167,010 | 面向 Agent 的 Web 爬取与交互 API，是 RAG/Agent 场景的数据采集基础设施 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,261 | 用 Rust 构建模块化、可扩展 LLM 应用的 SDK |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐66,243 | 在 Token 进入 LLM 前压缩 tool 输出/log/文件，使编码 Agent 减少 20% Token、JSON 减少 60-95% |

### 🤖 AI 智能体/工作流（Agent 框架/自动化）

| 项目 | Stars | 说明 |
|---|---|---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐0 (+**778** today) | "指尖上的完整 AI Agency"——预设前端/Reddit/质量检查等多角色专家 Agent，今日爆款 |
| [anthropics/skills](https://github.com/anthropics/skills) | ⭐0 (+**312** today) | Anthropic 官方 Agent Skills 仓库，定义可被 Claude 调用的标准化技能格式 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | ⭐0 (+**241** today) | 开源 All-in-One Agent 工作台，集成 100+ MCP 工具与共享 Memory，跨 Claude Code/Codex |
| [macro-inc/macro](https://github.com/macro-inc/macro) | ⭐0 (+**1239** today) | 统一工作空间（邮件/聊天/文档/任务/Agent/通话/CRM），通过 @ 链接 + 共享 AI Memory 串接 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐239,996 | Agent Harness 性能优化系统——为 Claude Code/Codex/Cursor 提供技能、本能与安全层 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐230,176 | "随用户成长"的个人 Agent，强调长期记忆与自适应能力 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐74,152 | 从 0 到 1 实现 nano Claude Code-like Agent Harness 的开源教程 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐109,125 | 让 AI Agent 可访问并操控任何网站，Web 自动化的事实标准 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐152,383 | 一站式 Agentic Workflow + RAG 编排平台，支持云/VPC/自托管 |

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 说明 |
|---|---|---|
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | ⭐0 (+**205** today) | LTX-2 音视频生成模型的官方推理与 LoRA 训练包，对标开源 Sora 级生成 |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | ⭐0 (+**76** today) | macOS 最快的本地听写 App，端侧 STT + 自训练 AI 增强模型，对标 Wispr Flow |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | ⭐0 (+**118** today) | 桌面端"图生 3D"工具，全程本地 GPU 运行 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐103,164 | 大模型驱动的一键高清短视频生成工作流 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐46,551 | 文档/主题 → 原生 PowerPoint（含图表、动画、语音旁白） |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐50,434 | AI 生产力工作室，集成智能聊天/自治 Agent/300+ 助手 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐62,754 | LLM 驱动的多市场股票智能分析与自动推送系统 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐63,753 | AI 自动扫描职位门户、A-F 评分、定制简历、追踪投递 |

### � 大模型/训练（权重/训练框架/微调）

| 项目 | Stars | 说明 |
|---|---|---|
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | ⭐0 (+**769** today) | 14MB 极致轻量基础模型，面向手机/可穿戴/智能家居/机器人，端侧 AI 落地标杆 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐102,614 | 从零用 PyTorch 复现 ChatGPT 类 LLM，系统学习首选教程 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | �102,361 | 深度学习基础框架，社区活跃度长期居高不下 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐60,603 | YOLO26/YOLO11/YOLOv8 全家族（检测/分割/分类/姿态/跟踪） |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | ⭐76 | 纯 Rust + Candle 从零实现 Decoder-only LLM（含 MoE/稀疏注意力/视频理解） |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐316 | 基于 X-Bit 量化的端侧 LLM 推理引擎 |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) | ⭐97 | 跟踪"Large Language Diffusion Model"前沿论文列表 |

### 🔍 RAG / 知识库（向量库/检索增强/知识管理）

| 项目 | Stars | 说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐0 (+**465** today) | 开源 RAG 引擎标杆，融合 RAG + Agent 能力，为 LLM 提供工业级 Context Layer |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | �45,629 | 云原生高性能向量数据库，ANN 检索事实标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,967 | 大规模向量数据库与搜索引擎，提供云服务 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,624 | 文档 Agent 与 OCR 平台，RAG 主流框架 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,174 | **Vectorless** 推理式 RAG——无需向量库的文档索引新范式 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | �63,212 | AI Agent 通用记忆层，让 Agent 跨会话具备长期记忆 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐90,661 | 跨会话持久化 Context，捕获 Agent 行为并用 AI 压缩后注入未来会话 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,005 | 自托管知识图谱引擎，为 AI Agent 提供持久化长期记忆 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐29,058 | 高级 RAG 技术笔记本教程合集 |

---

## 3. 趋势信号分析

**Agent Skills 范式成为新的"操作系统层"**：今日 Trending 前 10 名中近半数围绕"Agent Skills / Harness"展开——从 Anthropic 官方 `skills` 仓库到第三方 `obsidian-skills`、`learn-claude-code`、`ECC`、`hermes-agent`、`agency-agents`、`holaOS`、`macro`。这表明 Agent 已从"单一对话系统"演进为"可加载技能模块的工作站"，Skills 正在成为 Agent 时代的"软件包格式"。

**小型化/端侧模型 + LLM 路由形成互补增长**：`cactus-compute/needle`（14MB）与 `NVIDIA-NeMo/Switchyard`（LLM 路由网关）同日双双登榜，揭示出社区对"**端侧小模型承担高频/隐私场景 + 云端大模型路由调度**"的混合架构共识。这一趋势与近期 Llama 4、Gemma 4 等端侧模型发布的行业事件高度呼应。

**RAG 走向"非向量"分支**：`VectifyAI/PageIndex`（vectorless RAG）、`mem0`（Agent 记忆层）、`cognee`（知识图谱记忆）的并存热度，显示社区正在反思纯向量检索的局限，向**推理式检索 + 结构化记忆**方向迁移。今日 `ragflow` +465 的增量则证明传统 RAG 引擎仍是生产环境刚需。

---

## 4. 社区关注热点

- 🚀 **[anthropics/skills](https://github.com/anthropics/skills)** — Anthropic 官方发布定义了 Agent Skills 标准格式，未来所有 Agent 生态都将围绕此规范构建，是开发者**必须第一时间理解**的基础设施。
- 🔥 **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — 仅 14MB 的基础模型让"手机/可穿戴跑 LLM"成为可能，代表端侧 AI 的**实用化拐点**。
- 🌐 **[NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)** — LLM 网关层的缺失环节已补齐，多模型路由 + 成本/Benchmark 优化是**生产级 AI 应用**的必备组件。
- 🧠 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — Vectorless RAG 的代表，挑战传统"切片+向量检索"范式，值得 RAG 开发者深入评估是否替代现有方案。
- �️ **[unslothai/unsloth](https://github.com/unslothai/unsloth)** — 一站式本地训练/运行 UI 持续高增长，**Qwen3.8、DeepSeek-V4、Gemma 4 等新模型**的首日支持

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
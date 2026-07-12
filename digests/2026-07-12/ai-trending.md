# AI 开源趋势日报 2026-07-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-12 03:28 UTC

---

<think>The user wants me to analyze GitHub trending data from 2026-07-12 and produce a structured AI open-source trend report. Let me work through this carefully.

## Step 1: Filter AI-related projects

### From Trending list (24 repos), I need to identify AI-related ones:

**AI-related (keep):**
1. `davila7/claude-code-templates` - Claude Code CLI tool ✅
2. `google-labs-code/stitch-skills` - Agent Skills library for Stitch MCP, works with AI coding agents ✅
3. `openai/plugins` - OpenAI Plugins ✅
4. `wonderwhy-er/DesktopCommanderMCP` - MCP server for Claude ✅
5. `DayuanJiang/next-ai-draw-io` - AI + draw.io integration ✅
6. `anthropics/claude-cookbooks` - Notebooks for using Claude ✅
7. `obra/superpowers` - Agentic skills framework ✅

**NOT AI-related (exclude):**
- Catch2 (C++ test framework)
- abseil-cpp (C++ library)
- terraform (Infrastructure)
- zeux/meshoptimizer (3D mesh library)
- chriskohlhoff/asio (C++ network library)
- oven-sh/bun (JS runtime)
- actions/checkout (GitHub Action)
- home-assistant/core (home automation)
- microsoft/PowerToys (Windows utilities)
- cypress-io/cypress (Testing)
- vercel/next.js (React framework - though used with AI, it's general)
- malisper/pgrust (Postgres in Rust)
- dotnet/aspnetcore (.NET framework)
- prisma/prisma (ORM)
- nasa/fprime (Flight software)
- ansible/ansible (IT automation)
- nuxt/nuxt (Vue framework)

Wait, let me reconsider `vercel/next.js` and `nuxt/nuxt` - these are general web frameworks, not AI-specific. Exclude.

`home-assistant/core` - while it can use AI, it's primarily home automation. Exclude.

### From AI Topic Search (80 repos) - all are AI-related, keep all.

## Step 2: Classify

Let me classify each:

### AI 基础工具 (AI Infrastructure Tools):
- `davila7/claude-code-templates` - CLI tool for Claude Code
- `google-labs-code/stitch-skills` - Agent Skills library (TypeScript)
- `wonderwhy-er/DesktopCommanderMCP` - MCP server
- `openai/plugins` - OpenAI Plugins
- `anthropics/claude-cookbooks` - Claude notebooks
- `langchain-ai/langchain` - Agent engineering platform
- `ollama/ollama` - Run LLMs locally
- `huggingface/transformers` - Model framework
- `vllm-project/vllm` - LLM inference engine
- `browser-use/browser-use` - Web automation for AI
- `firecrawl/firecrawl` - Web scraping API
- `0xPlaygrounds/rig` - Rust LLM framework
- `ScrapeGraphAI/Scrapegraph-ai` - AI scraper
- `samchon/nestia` - NestJS AI chatbot dev
- `multimindlab/multimind-sdk` - SDK

### AI 智能体/工作流 (AI Agents/Workflows):
- `obra/superpowers` - Agentic skills framework
- `DayuanJiang/next-ai-draw-io` - AI + draw.io
- `Significant-Gravitas/AutoGPT` - Autonomous AI
- `NousResearch/hermes-agent` - Agent
- `affaan-m/ECC` - Agent harness
- `OpenHands/OpenHands` - AI-driven development
- `santifer/career-ops` - AI job search
- `Panniantong/Agent-Reach` - AI agent internet access
- `zhayujie/CowAgent` - Super AI assistant
- `HKUDS/nanobot` - Lightweight AI agent
- `CopilotKit/CopilotKit` - Frontend for agents
- `Gitlawb/openclaude` - Claude anywhere
- `iOfficeAI/AionUi` - Cowork app
- `esengine/DeepSeek-Reasonix` - DeepSeek coding agent
- `jackwener/OpenCLI` - CLI for AI agents
- `CherryHQ/cherry-studio` - AI productivity studio
- `nocobase/nocobase` - AI no-code
- `Eigenwise/atomic-agents` - Atomic agents
- `jeecgboot/JeecgBoot` - AI low-code
- `LancerLab/croqtile` - AI-native kernel DSL
- `hugohe3/ppt-master` - AI PowerPoint

### AI 应用 (AI Applications):
- `langgenius/dify` - Agentic workflow platform
- `open-webui/open-webui` - AI interface
- `Shubhamsaboo/awesome-llm-apps` - AI apps collection
- `Mintplex-Labs/anything-llm` - Local-first agent
- `Graphify-Labs/graphify` - Knowledge graph from code
- `ZhuLinsen/daily_stock_analysis` - Stock analysis
- `siyuan-note/siyuan` - Knowledge management
- `starpig1129/DATAGEN` - Multi-agent research
- `acon96/home-llm` - Home Assistant LLM
- `gluonfield/enchanted` - iOS/macOS LLM chat
- `datawhalechina/hello-agents` - Agent tutorial
- `Developer-Y/cs-video-courses` - CS video courses
- `tensorflow/tensorflow` - ML framework (also foundational)
- `pytorch/pytorch` - ML framework
- `scikit-learn/scikit-learn` - ML
- `keras-team/keras` - Deep Learning
- `ultralytics/ultralytics` - YOLO
- `ultralytics/yolov5` - YOLOv5
- `deepfakes/faceswap` - Deepfakes
- `OpenBB-finance/OpenBB` - Open data platform for AI agents

### 大模型/训练 (LLMs / Training):
- `huggingface/transformers` - Model framework
- `ollama/ollama` - LLM runner
- `rasbt/LLMs-from-scratch` - LLM from scratch
- `vllm-project/vllm` - Inference engine
- `galilai-group/stable-pretraining` - Pretraining library
- `tensorflow/tensorflow` - ML framework
- `pytorch/pytorch` - ML framework
- `f/prompts.chat` - Prompts collection
- `asgeirtj/system_prompts_leaks` - System prompts
- `chrisliu298/awesome-llm-unlearning` - LLM unlearning
- `liguge/Awesome-large-language-model-for-Prognostics-and-health-management` - LLM for maintenance
- `testtimescaling/testtimescaling.github.io` - Test-time scaling survey
- `open-compass/opencompass` - LLM evaluation

### RAG/知识库 (RAG / Knowledge Base):
- `langgenius/dify` - RAG platform
- `open-webui/open-webui` - RAG interface
- `langchain-ai/langchain` - Agent platform with RAG
- `Shubhamsaboo/awesome-llm-apps` - RAG apps
- `thedotmack/claude-mem` - Agent memory layer
- `infiniflow/ragflow` - RAG engine
- `Graphify-Labs/graphify` - Knowledge graph
- `datawhalechina/hello-agents` - Agent tutorial (mentions RAG)
- `Mintplex-Labs/anything-llm` - Local agent experience
- `mem0ai/mem0` - Memory layer for agents
- `headroomlabs-ai/headroom` - Compress for RAG
- `FlowiseAI/Flowise` - AI agents visually
- `run-llama/llama_index` - Document agent
- `milvus-io/milvus` - Vector database
- `meilisearch/meilisearch` - Search engine
- `VectifyAI/PageIndex` - Vectorless RAG
- `qdrant/qdrant` - Vector database
- `topoteretes/cognee` - AI memory
- `weaviate/weaviate` - Vector database
- `memvid/memvid` - Memory layer
- `alibaba/zvec` - Vector database
- `langchain4j/langchain4j` - Java LLM library
- `lancedb/lancedb` - Embedded retrieval
- `oceanbase/oceanbase` - Distributed DB with AI
- `databendlabs/databend` - Data warehouse
- `MariaDB/server` - SQL server
- `DietrichGebert/ponytail` - Code optimization agent
- `netdata/netdata` - Observability
- `tesseract-ocr/tesseract` - OCR (relevant for RAG document processing)
- `HKBU-LAGAS/Awesome-Item-ID-Gen-RecSys` - Item ID for rec systems

Let me organize the final classification and now write the report.

For the report structure:

### 今日速览
Key observations:
1. MCP/Agent ecosystem dominating Trending - DesktopCommanderMCP (909 stars), obra/superpowers (740), stitch-skills (340)
2. Claude Code ecosystem tools rising sharply
3. RAG/Vector DB remains mature with several major players
4. DeepSeek-Reasonix and similar agentic coding tools emerging
5. Memory/context management for agents is hot (claude-mem, mem0, memvid)

### 各维度热门项目 (Top 3-8 per category)

### 趋势信号分析
- Agent harness/framework explosion
- MCP becoming standard
- Memory layers for agents
- Rust emerging for AI infra

### 社区关注热点
- DesktopCommanderMCP
- obra/superpowers
- Dify
- ollama
- mem0

Let me draft the final report now in Chinese.

Actually, I need to be careful about the stars data. The trending list shows stars count as 0 (which seems like a data issue) but shows today's stars. For topic search, I have total stars.

Let me note that the Trending list star counts are marked as 0 but show today's additions. The total stars should be interpreted from context.

Now let me write the final report.</think>

# AI 开源趋势日报 · 2026-07-12

---

## 第一步：AI 相关性筛选结果

**今日 Trending 24 个仓库中，AI 相关项目 7 个**（已过滤基础设施、通用框架、系统工具等）：

| 仓库 | 语言 | 今日新增 ⭐ |
|---|---|---|
| wonderwhy-er/DesktopCommanderMCP | TypeScript | +909 |
| obra/superpowers | Shell | +740 |
| google-labs-code/stitch-skills | TypeScript | +340 |
| davila7/claude-code-templates | Python | +232 |
| anthropics/claude-cookbooks | Jupyter | +219 |
| DayuanJiang/next-ai-draw-io | TypeScript | +81 |
| openai/plugins | JavaScript | +29 |

**主题搜索 80 个仓库**：全部为 AI/ML 相关项目，全部保留。

---

## 第二步：分类结果总览

| 维度 | 入选项目数 | 代表项目 |
|---|---|---|
| 🔧 AI 基础工具 | 12 | langchain、ollama、vllm、firecrawl、DesktopCommanderMCP、stitch-skills |
| 🤖 AI 智能体/工作流 | 17 | AutoGPT、OpenHands、hermes-agent、superpowers、nanobot、CopilotKit |
| 📦 AI 应用 | 11 | dify、open-webui、pytorch、tensorflow、daily_stock_analysis、ppt-master |
| 🧠 大模型/训练 | 12 | transformers、vllm、LLMs-from-scratch、opencompass、system_prompts_leaks |
| 🔍 RAG/知识库 | 19 | milvus、qdrant、ragflow、PageIndex、mem0、lancedb、cognee |

---

## 第三步：趋势报告

---

### 1. 今日速览

今日 GitHub Trending 已被 **Agent 基础设施生态** 强势占据，DesktopCommanderMCP（+909）、obra/superpowers（+740）和 google-labs-code/stitch-skills（+340）包揽榜单前三，标志着 **MCP 协议 + Agent Skills 开放标准** 正在成为新的社区共识。Claude Code 周边工具链呈现集群化爆发，从 CLI 模板、Skill 库、Memory 层到操作系统的全面渗透。底层方面，RAG/向量数据库赛道依然成熟（milvus、qdrant、PageIndex、memvid 多点开花），而大模型训练/评测方向则以系统提示词泄露、测试时缩放等"应用层研究"为主，基础架构进入平稳期。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | ⭐ 总数 / 今日新增 | 说明 |
|---|---|---|
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | — / +909 🔥 | **今日全榜冠军**。为 Claude 提供终端控制、文件系统检索和 diff 编辑能力的 MCP 服务器，定义 AI Agent 接入本地 OS 的标准范式 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | — / +340 | Google 官方推出的 Agent Skills 库，兼容 Antigravity、Gemini CLI、Claude Code、Cursor 四大主流 Agent |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,561 / — | Agent 工程化平台的事实标准，LLM 应用基础设施首选 |
| [ollama/ollama](https://github.com/ollama/ollama) | 175,944 / — | 本地运行 Kimi-K2.6、GLM-5.1、MiniMax、DeepSeek 等大模型的标杆工具 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,999 / — | 高吞吐、低显存的大模型推理与 Serving 引擎 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 149,435 / — | 为 LLM 设计的搜索、爬取与 Web 交互 API |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | — / +232 | Claude Code CLI 配置与监控模板，社区入门首选 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | — / +219 | 官方 Claude Notebook 示例合集，最佳实践入口 |

#### 🤖 AI 智能体/工作流

| 项目 | ⭐ 总数 / 今日新增 | 说明 |
|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | — / +740 🔥 | **Agentic Skills 框架 + 软件开发方法论**，将 Anthropic Skills 标准工程化落地 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 213,341 / — | 主张"与你共同成长"的 Agent，强调持续学习与个性化 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,481 / — | Agent 概念的鼻祖项目，仍是自治 Agent 生态核心 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 80,496 / — | AI 驱动的软件研发代理，开源 Devin 的标杆 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,269 / — | 港大数据智能实验室出品的轻量级开源 Agent |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,923 / — | Agent 与生成式 UI 的前端基础设施（React/Angular/Mobile/Slack） |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 26,687 / — | 围绕 prefix-cache 稳定性优化的 DeepSeek 原生终端编码 Agent |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 228,642 / — | Claude Code / Codex / Cursor 的 Agent Harness 性能优化系统 |

#### 📦 AI 应用

| 项目 | ⭐ 总数 / 今日新增 | 说明 |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | 148,528 / — | 生产级 Agentic workflow 开发平台，B 端最受欢迎的 LLM 应用底座 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 145,095 / — | 兼容 Ollama/OpenAI API 的友好 AI 对话前端 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,758 / — | 深度学习框架绝对主力 |
| [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | — / +81 | Next.js + draw.io + 自然语言驱动的 AI 图表生成 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 56,710 / — | LLM 驱动的多市场股票智能分析系统，A 股量化场景代表 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 38,413 / — | 由文档一键生成可编辑 PowerPoint，含原生图表、动画与语音旁白 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 70,456 / — | 面向分析师、量化与 AI Agent 的开放金融数据平台 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 45,053 / — | 隐私优先的自托管知识管理软件，与 AI Agent 深度集成 |

#### 🧠 大模型/训练

| 项目 | ⭐ 总数 / 今日新增 | 说明 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,514 / — | 文本/视觉/音频/多模态模型的定义、训练与推理框架 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 196,317 / — | 老牌 ML 框架，生态依然庞大 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 98,937 / — | 从零实现 ChatGPT-like LLM，PyTorch 教学标杆 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,184 / — | 支持 100+ 数据集的大模型评测平台 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 165,450 / — | 前身 Awesome ChatGPT Prompts，社区驱动的高质量提示词库 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 56,274 / — | 持续更新 Claude、GPT、Gemini、Grok、Cursor、Copilot 等系统提示词泄露合集 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59,371 / — | YOLO26/YOLO11 系列目标检测、分割、姿态估计全套 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 283 / — | 极简、可扩展的基础/世界模型预训练库，新兴工程化方向 |

#### 🔍 RAG / 知识库

| 项目 | ⭐ 总数 / 今日新增 | 说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 84,836 / — | RAG + Agent 能力融合的领先开源引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,631 / — | AI Agent 的通用记忆层，是当下 Agent 记忆标准的事实候选 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,789 / — | 文档 Agent 与 OCR 平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,197 / — | 云原生高性能向量数据库 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 27,585 / — | 为 Agent 提供持久长期记忆的自托管知识图谱引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 33,947 / — | 无向量化、基于推理的下一代 RAG 文档索引 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,163 / — | 高性能、大规模向量数据库（Rust 实现） |
| [memvid/memvid](https://github.com/memvid/memvid) | 15,742 / — | 单文件 Serverless 记忆层，简化 RAG 管道 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 86,882 / — | 跨会话持久上下文，与 Claude Code、Codex、Gemini 等深度集成 |

---

### 3. 趋势信号分析

**Agent Harness / MCP 生态进入爆发期**。今日 Trending 前三席（DesktopCommanderMCP、superpowers、stitch-skills）共同指向一个明确方向：**AI Agent 正在从"对话工具"演化为"可执行操作系统级操作的软件实体"**。MCP（Model Context Protocol）作为 Anthropic 推出的开放标准，已被 Google（stitch-skills）和独立社区（obra/superpowers）广泛采纳，标志着 Agent 工具调用层开始走向协议化与生态化。

**Agent Memory 成为新的基础设施赛道**。claude-mem、mem0、cognee、memvid 等多个项目同时进入热门，反映社区对"跨会话长期记忆"诉求的强烈——这本质上是 RAG 从文档检索扩展到行为记忆的范式跃迁。

**编码 Agent 出现"应用层优化"分化**。DeepSeek-Reasonix（聚焦 prefix-cache 稳定性）、ECC（Agent Harness 性能优化）、DietrichGebert/ponytail（极简代码哲学）等项目说明，编码 Agent 已从"能不能写"进入"写得好不好、稳不稳"的下半场工程优化阶段。

**Rust 在 AI 基础设施中的渗透加速**。qdrant、lancedb、memvid、rig、bun（虽非 AI）等多个高关注项目采用 Rust，预示性能敏感的 AI infra 层正经历语言栈迁移。

---

### 4. 社区关注热点

- 🔥 **[DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)**：今日 +909 stars，MCP 协议落地的标杆实现，建议作为理解 Agent × 本地 OS 集成模式的起点。
- 🔥 **[obra/superpowers](https://github.com/obra/superpowers)**：Agent Skills 框架化代表项目，是把握 Agent Skills 开放标准工程实践的最佳窗口。
- 🧠 **[mem0ai/mem0](https://github.com/mem0ai/mem0)**：Agent 记忆层事实标准候选，正在重塑 RAG 与上下文工程的边界。
- 📊 **[langgenius/dify](https://github.com/langgenius/dify)**：148k stars 的企业级 Agentic workflow 平台，B 端 LLM 应用落地的首选底座。
- 🛠️ **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**：抛弃向量化的"推理式 RAG"新范式，值得关注是否会成为下一代 RAG 架构的拐点。

---

> **数据观察**：今日 AI 相关项目占据 Trending 榜近 30% 席位，且头部项目几乎全部聚焦 Agent 工具链与执行环境——这意味着 **AI 开源社区的创新重心，已从"模型本身"迁移至"Agent 如何与世界交互"**。开发者若希望押注未来 6~12 个月的高价值方向，应优先投入 MCP 协议、Agent Memory 与 Skills 框架三个赛道。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
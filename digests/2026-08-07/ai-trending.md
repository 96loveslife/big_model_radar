# AI 开源趋势日报 2026-08-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-07 02:53 UTC

---

<think>The user wants me to analyze GitHub trending data from 2026-08-07 and produce a structured AI open-source trends report. Let me go through the data carefully.

## Step 1: Filtering AI-related projects

### Trending List (13 repos)
Let me filter AI-related ones:

1. **TencentCloud/TencentDB-Agent-Memory** [+1057] - AI Agent memory hub ✅
2. **addyosmani/agent-skills** [+593] - Engineering skills for AI coding agents ✅
3. **cloudflare/computer** [+2802] - "Give your agent a computer" - AI agent infrastructure ✅
4. **mattpocock/skills** [+1873] - Skills for AI agents (.agents directory) ✅
5. **goauthentik/authentik** [+138] - Authentication provider ❌ (not AI)
6. **huangruiteng/loopx** [+847] - Loop engineering state kernel for long-running AI agent teams ✅
7. **google/guava** [+13] - Java core libraries ❌ (not AI)
8. **TapXWorld/ChinaTextbook** [+134] - Chinese textbooks PDFs ❌ (not AI)
9. **Significant-Gravitas/AutoGPT** [+37] - AutoGPT, accessible AI ✅
10. **tirth8205/code-review-graph** [+237] - Local-first code intelligence graph for MCP and CLI, AI coding tools ✅
11. **esengine/DeepSeek-Reasonix** [+888] - DeepSeek AI coding agent ✅
12. **obra/superpowers** [+858] - Agentic skills framework ✅
13. **firecrawl/pdf-inspector** [+1190] - Rust PDF library... hmm, is this AI? It's described as "Fast Rust library for PDF inspection, classification, and text extraction. Intelligently detects scanned vs text-based PDFs to enable smart routing decisions." This is from firecrawl organization which is AI-related, but the project itself is more of a utility library. Let me consider it - it has "Intelligently detects" but it's more of a general utility. I'll consider it borderline - probably exclude as it's primarily a PDF utility.

Actually wait, looking more carefully: firecrawl/pdf-inspector is from the firecrawl org which is heavily AI-focused, but the project description is more general utility. I'll mention it could be borderline but lean toward including it since firecrawl is part of the AI ecosystem (data extraction for AI pipelines).

Hmm, let me reconsider - the description says "Fast Rust library for PDF inspection, classification, and text extraction. Intelligently detects scanned vs text-based PDFs to enable smart routing decisions." This is for PDF processing infrastructure, not specifically AI. I'll note it as borderline but probably exclude from primary AI list.

Actually, since firecrawl itself is in the AI topic list and this is part of that ecosystem, I'll include it as a borderline case in the foundation tools category.

### AI Topic Search Results (80 repos, deduplicated)
Let me categorize these. I see the topics are: vector-db, rag, ai-agent, llm-model, ml, llm

Let me list them with their topics:

**vector-db (15 repos):**
- Mintplex-Labs/anything-llm - local-first agent
- meilisearch/meilisearch - AI-powered hybrid search
- run-llama/llama_index - document agent/OCR
- milvus-io/milvus - vector database
- VectifyAI/PageIndex - vectorless reasoning-based RAG
- qdrant/qdrant - vector database
- topoteretes/cognee - AI memory platform
- weaviate/weaviate - vector database
- alibaba/zvec - in-process vector database
- langchain4j/langchain4j - LLM library Java
- neuml/txtai - AI framework semantic search
- lancedb/lancedb - embedded retrieval
- oramasearch/orama - search engine RAG
- oceanbase/oceanbase - distributed database
- databendlabs/databend - data warehouse

**rag (12 repos):**
- langgenius/dify - agentic workflows, RAG
- open-webui/open-webui - AI Interface
- langchain-ai/langchain - agent engineering platform
- Shubhamsaboo/awesome-llm-apps - AI agents and RAG apps
- Graphify-Labs/graphify - knowledge graph
- thedotmack/claude-mem - persistent context for agents
- infiniflow/ragflow - RAG engine
- datawhalechina/hello-agents - AI agents tutorial
- headroomlabs-ai/headroom - compress tool outputs
- mem0ai/mem0 - memory layer for AI agents
- FlowiseAI/Flowise - AI agents visual
- langchain-ai/langgraph - build resilient agents

**ai-agent (15 repos):**
- NousResearch/hermes-agent - agent that grows
- Panniantong/Agent-Reach - give AI agent eyes
- santifer/career-ops - AI job search
- ZhuLinsen/daily_stock_analysis - LLM stock analysis
- CherryHQ/cherry-studio - AI productivity studio
- HKUDS/nanobot - personal AI agent
- zhayujie/CowAgent - super AI assistant
- siyuan-note/siyuan - knowledge management
- hugohe3/ppt-master - AI PowerPoint
- CopilotKit/CopilotKit - frontend stack for agents
- agentscope-ai/QwenPaw - personal AI assistant
- bojieli/ai-agent-book - AI agent book
- esengine/DeepSeek-Reasonix - DeepSeek coding agent
- iOfficeAI/AionUi - cowork app for CLI agents
- Gitlawb/openclaude - runs anywhere

**llm-model (14 repos):**
- jingyaogong/minimind - 64M LLM from scratch
- 0xPlaygrounds/rig - LLM in Rust
- open-compass/opencompass - LLM evaluation
- Eigenwise/atomic-agents - AI agents atomic
- skyzh/tiny-llm - LLM inference serving
- genieincodebottle/generative-ai - GenAI resources
- llm-jp/awesome-japanese-llm - Japanese LLMs
- chrisliu298/awesome-llm-unlearning - LLM unlearning
- Picovoice/picollm - on-device LLM
- kennethleungty/Finance-LLMs - LLM finance use cases
- liguge/... - LLM for predictive maintenance
- HKBU-LAGAS/... - item ID GenRecSys
- AIDASLab/Awesome-Diffusion-LLM - diffusion LLM
- AarambhDevHub/aarambh-studio - LLM in Rust
- paulburgess1357/nvim-mcp - MCP server for Neovim

**ml (15 repos):**
- tensorflow/tensorflow
- f/prompts.chat
- huggingface/transformers
- pytorch/pytorch
- microsoft/ML-For-Beginners
- netdata/netdata
- tesseract-ocr/tesseract
- scikit-learn/scikit-learn
- keras-team/keras
- ultralytics/ultralytics
- deepfakes/faceswap
- roboflow/supervision
- JuliaLang/julia
- apache/airflow
- rohitg00/ai-engineering-from-scratch

**llm (9 repos):**
- affaan-m/ECC - agent harness
- Significant-Gravitas/AutoGPT
- ollama/ollama
- firecrawl/firecrawl
- browser-use/browser-use
- harry0703/MoneyPrinterTurbo
- JuliusBrussee/caveman - caveman skill
- vllm-project/vllm

Now let me classify by category:

### 🔧 AI 基础工具 (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)
- ollama/ollama (⭐177,949) - LLM local inference
- vllm-project/vllm (⭐88,382) - LLM inference engine
- langchain-ai/langchain (⭐143,578) - agent engineering platform
- langchain-ai/langgraph (⭐39,067) - build resilient agents
- langchain4j/langchain4j (⭐12,807) - LLM Java library
- browser-use/browser-use (⭐108,106) - websites accessible for AI agents
- firecrawl/firecrawl (⭐162,407) - search, scrape web
- CopilotKit/CopilotKit (⭐36,570) - frontend for agents
- cloudflare/computer (NEW, +2802) - give your agent a computer
- huangruiteng/loopx (NEW, +847) - loop engineering kernel
- esengine/DeepSeek-Reasonix (NEW, +888) - DeepSeek coding agent
- 0xPlaygrounds/rig (⭐8,191) - LLM in Rust
- Eigenwise/atomic-agents (⭐6,134) - AI agents atomic
- neuml/txtai (⭐12,806) - AI framework
- langgenius/dify (⭐151,608) - agentic workflows
- FlowiseAI/Flowise (⭐55,221) - AI agents visual
- juliusbrussee/caveman (⭐96,506) - caveman skill for tokens

### 🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)
- TencentCloud/TencentDB-Agent-Memory (NEW, +1057) - team-level memory hub
- addyosmani/agent-skills (NEW, +593) - engineering skills for AI coding agents
- mattpocock/skills (NEW, +1873) - skills for AI agents
- obra/superpowers (NEW, +858) - agentic skills framework
- NousResearch/hermes-agent (⭐226,644) - agent that grows
- HKUDS/nanobot (⭐46,713) - personal AI agent framework
- zhayujie/CowAgent (⭐46,385) - super AI assistant
- Significant-Gravitas/AutoGPT (⭐186,050) - AutoGPT
- agentscope-ai/QwenPaw (⭐34,267) - personal AI assistant
- Gitlawb/openclaude (⭐30,546) - open source Claude alternative
- iOfficeAI/AionUi (⭐31,609) - cowork app for CLI agents
- Panniantong/Agent-Reach (⭐67,705) - give AI agent eyes
- CherryHQ/cherry-studio (⭐49,926) - AI productivity studio
- ZhuLinsen/daily_stock_analysis (⭐60,272) - LLM stock analysis
- hugohe3/ppt-master (⭐43,557) - AI PowerPoint
- santifer/career-ops (⭐63,085) - AI job search

### 📦 AI 应用 (Specific products, vertical solutions)
- open-webui/open-webui (⭐148,087) - AI Interface
- Mintplex-Labs/anything-llm (⭐64,436) - local-first agent
- harry0703/MoneyPrinterTurbo (⭐101,934) - AI video generation
- Shubhamsaboo/awesome-llm-apps (⭐131,124) - 100+ AI apps
- siyuan-note/siyuan (⭐45,655) - knowledge management (with AI)

### 🧠 大模型/训练 (Model weights, training frameworks, fine-tuning)
- jingyaogong/minimind (⭐54,414) - 64M LLM from scratch
- AarambhDevHub/aarambh-studio (⭐65) - LLM in Rust from scratch
- Picovoice/picollm (⭐316) - on-device LLM
- open-compass/opencompass (⭐7,281) - LLM evaluation
- skyzh/tiny-llm (⭐4,444) - LLM inference serving course
- f/prompts.chat (⭐166,819) - prompts collection
- chrisliu298/awesome-llm-unlearning (⭐617) - LLM unlearning
- kennethleungty/Finance-LLMs (⭐135) - Finance LLMs
- llm-jp/awesome-japanese-llm (⭐1,424) - Japanese LLMs

### 🔍 RAG/知识库 (Vector DB, retrieval-augmented, knowledge mgmt)
- milvus-io/milvus (⭐45,543)
- qdrant/qdrant (⭐33,819)
- weaviate/weaviate (⭐16,702)
- alibaba/zvec (⭐15,393) - in-process vector db
- lancedb/lancedb (⭐11,084) - embedded retrieval
- oramasearch/orama (⭐10,519) - RAG in browser
- run-llama/llama_index (⭐51,436)
- VectifyAI/PageIndex (⭐35,049)
- topoteretes/cognee (⭐29,836) - AI memory
- mem0ai/mem0 (⭐62,721) - memory layer
- infiniflow/ragflow (⭐86,989)
- Graphify-Labs/graphify (⭐103,566) - knowledge graph
- thedotmack/claude-mem (⭐89,886) - persistent context
- headroomlabs-ai/headroom (⭐65,252) - compress tool outputs
- meilisearch/meilisearch (⭐58,892) - AI search
- datawhalechina/hello-agents (⭐71,377) - agents tutorial
- bojieli/ai-agent-book (⭐33,745) - AI agent book
- meilisearch/meilisearch
- databendlabs/databend (⭐9,408) - data warehouse
- oceanbase/oceanbase (⭐10,232)

Now let me identify the trends:

1. **AI Agent Skills** is the biggest trend - many "skills" repos trending:
   - addyosmani/agent-skills (+593)
   - mattpocock/skills (+1873)
   - obra/superpowers (+858)
   - TencentCloud/TencentDB-Agent-Memory (+1057) - related memory
   - cloudflare/computer (+2802) - infrastructure for agents

2. **Agent infrastructure** is huge:
   - cloudflare/computer giving agents a computer
   - huangruiteng/loopx for long-running agents
   - esengine/DeepSeek-Reasonix DeepSeek-native agent

3. **Knowledge management for agents**:
   - TencentDB-Agent-Memory
   - tirth8205/code-review-graph
   - Graphify-Labs/graphify
   - thedotmack/claude-mem

4. **New tech directions**:
   - Caveman skill (token compression)
   - DeepSeek-prefix-cache stability (DeepSeek-Reasonix)
   - Vectorless RAG (PageIndex)
   - Knowledge graphs (graphify, cognee)

5. **Industry context**: This looks like around 2026 - we have Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, Qwen, Gemma, gpt-oss as mentioned in ollama. The trending on Aug 7 2026 shows:
   - Strong focus on Agent skills/infrastructure
   - Cloudflare entering agent infrastructure space
   - Memory/context management becoming key
   - Local-first tools growing

Let me now write the report.

Actually, let me reconsider the categories. The user asked for primary categories:
- 🔧 AI 基础工具 (Frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)
- 📦 AI 应用 (Specific apps, vertical solutions)
- 🧠 大模型/训练 (Model weights, training frameworks, fine-tuning)
- 🔍 RAG/知识库 (Vector DB, retrieval-augmented, knowledge mgmt)

I'll organize by these 5 categories. Let me prepare the final report.

Let me also note that some big-star projects are basic ML frameworks (tensorflow, pytorch, huggingface, scikit-learn, keras, ultralytics). These are foundational AI/ML tools, so they belong in 🧠 大模型/训练 or 🔧 AI 基础工具. I'll put them in 🔧 AI 基础工具 since they're foundational frameworks.

For the report, I'll select 3-8 representative projects per category. Let me choose wisely based on:
- Today's trend relevance
- Total stars indicating community trust
- Diversity

Let me draft the report now.

### Categories with selected projects:

#### 🔧 AI 基础工具 (AI Foundation Tools)
1. ollama/ollama (⭐177,949) - LLM local inference, now supports Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen
2. vllm-project/vllm (⭐88,382) - High-throughput LLM inference
3. langchain-ai/langchain (⭐143,578) - Agent engineering platform
4. langchain-ai/langgraph (⭐39,067) - Build resilient agents
5. browser-use/browser-use (⭐108,106) - Make websites accessible for AI agents
6. firecrawl/firecrawl (⭐162,407) - Search/scrape web for AI
7. cloudflare/computer (NEW, +2802 today) - Give your agent a computer
8. CopilotKit/CopilotKit (⭐36,570) - Frontend stack for agents & GenUI

#### 🤖 AI 智能体/工作流 (AI Agents/Workflows)
1. cloudflare/computer (NEW, +2802) - Give your agent a computer
2. TencentCloud/TencentDB-Agent-Memory (NEW, +1057) - Team-level memory hub for AI agents
3. mattpocock/skills (NEW, +1873) - Skills for AI agents
4. huangruiteng/loopx (NEW, +847) - Long-running AI agent teams kernel
5. esengine/DeepSeek-Reasonix (NEW, +888) - DeepSeek-native coding agent
6. addyosmani/agent-skills (NEW, +593) - Production-grade skills for AI coding agents
7. obra/superpowers (NEW, +858) - Agentic skills framework
8. NousResearch/hermes-agent (⭐226,644) - The agent that grows with you
9. Significant-Gravitas/AutoGPT (⭐186,050) - AutoGPT

#### 📦 AI 应用 (AI Applications)
1. open-webui/open-webui (⭐148,087) - User-friendly AI Interface
2. langgenius/dify (⭐151,608) - Agentic workflows & RAG on workspace
3. Shubhamsaboo/awesome-llm-apps (⭐131,124) - 100+ AI agents & RAG apps
4. Mintplex-Labs/anything-llm (⭐64,436) - Local-first agent
5. harry0703/MoneyPrinterTurbo (⭐101,934) - AI video generation
6. CherryHQ/cherry-studio (⭐49,926) - AI productivity studio
7. FlowiseAI/Flowise (⭐55,221) - Visual AI agents builder
8. zhayujie/CowAgent (⭐46,385) - Super AI assistant

#### 🧠 大模型/训练 (LLM/Training)
1. tensorflow/tensorflow (⭐196,895) - ML framework
2. huggingface/transformers (⭐163,421) - Model definition framework
3. pytorch/pytorch (⭐102,252) - Deep learning
4. jingyaogong/minimind (⭐54,414) - Train 64M LLM from scratch in 2h
5. AarambhDevHub/aarambh-studio (⭐65) - LLM in pure Rust
6. open-compass/opencompass (⭐7,281) - LLM evaluation platform
7. Picovoice/picollm (⭐316) - On-device LLM
8. ultralytics/ultralytics (⭐60,281) - YOLO

#### 🔍 RAG/知识库 (RAG/Knowledge Base)
1. infiniflow/ragflow (⭐86,989) - Leading open-source RAG engine
2. thedotmack/claude-mem (⭐89,886) - Persistent context across sessions
3. Graphify-Labs/graphify (⭐103,566) - Queryable knowledge graph from codebase
4. mem0ai/mem0 (⭐62,721) - Universal memory layer for AI Agents
5. run-llama/llama_index (⭐51,436) - Document agent & OCR platform
6. VectifyAI/PageIndex (⭐35,049) - Vectorless reasoning-based RAG
7. milvus-io/milvus (⭐45,543) - High-performance vector DB
8. qdrant/qdrant (⭐33,819) - Vector database
9. topoteretes/cognee (⭐29,836) - AI memory platform
10. alibaba/zvec (⭐15,393) - In-process vector DB

Now let me write the report. I'll make sure to:
- Have a "今日速览" section
- List 3-8 projects per category
- Have a trend signal analysis (200-300 words)
- Have community focus hotspots

Let me now write the final report in Chinese.

For the trend analysis, I need to identify:
- AI Agent Skills is the biggest movement today
- Cloudflare entering agent compute infrastructure (computer)
- Memory/context management (TencentDB-Agent-Memory, claude-mem, graphify)
- Long-running agent teams (loopx, huangruiteng)
- DeepSeek-prefix-cache optimization as a new technique
- Vectorless RAG (PageIndex, graphify) moving away from traditional vector DBs
- Token compression (caveman, headroom)

For community hotspots, I'll suggest:
1. cloudflare/computer - first major infra for agents from a hyperscaler
2. TencentCloud/TencentDB-Agent-Memory - memory as key infrastructure
3. DeepSeek-Reasonix - prefix-cache as core engineering
4. PageIndex/graphify - vectorless/knowledge graph RAG
5. mattpocock/skills + obra/superpowers + agent-skills - the "skills" meta-protocol for agents

Now let me write the full report. I'll format it cleanly.</think>

# 📊 AI 开源趋势日报 · 2026-08-07

---

## 第一步 · AI 相关性筛选

**Trending 榜单去噪结果**（13 项 → 保留 9 项 AI 相关）：

✅ 保留：TencentDB-Agent-Memory、agent-skills、cloudflare/computer、mattpocock/skills、loopx、AutoGPT、code-review-graph、DeepSeek-Reasonix、superpowers  
❌ 略去：goauthentik/authentik（身份认证）、google/guava（Java 工具库）、TapXWorld/ChinaTextbook（教材 PDF）、firecrawl/pdf-inspector（通用 PDF 解析）

**AI 主题搜索**：80 个仓库全部保留（均为 vector-db / rag / ai-agent / llm-model / ml / llm 主题），去重后按维度归类。

---

## 今日速览

今日 AI 开源社区呈现出 **"Agent 基础设施大爆发"** 的强烈信号：**Cloudflare 推出 cloudflare/computer（+2802 stars）**，首次由超大规模云厂商正面入局"给 Agent 一台计算机"赛道；同时 **mattpocock/skills（+1873）、obra/superpowers（+858）、addyosmani/agent-skills（+593）** 三款"Agent Skills"框架同日登榜，揭示出 **"Skills / Memory / Loop" 正成为 Agent 工程化的新三件套**。底层模型层面 **DeepSeek-Reasonix（+888）以"prefix-cache 稳定性"** 作为差异化卖点，标志推理侧优化进入精细化阶段。

---

## 第二步 · 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,949 | 本地 LLM 推理事实标准，现已支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、gpt-oss 等全谱系模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,382 | 高吞吐 LLM 推理与 Serving 引擎，工业部署首选 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐162,407 | 为 LLM 提供规模化"上下文 API"——搜索、抓取、交互一站式 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐143,578 | Agent 工程化平台，已演进为完整的智能体编排基础设施 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐108,106 | 让 AI Agent 可访问并操作真实网站，浏览器自动化标杆 |
| [cloudflare/computer](https://github.com/cloudflare/computer) | 🔥 NEW (+2802 today) | **Cloudflare 出品**，为 Agent 提供隔离的云端计算环境，Agent 基础设施里程碑 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,570 | Agent 前端 + 生成式 UI 协议栈（AG-UI Protocol） |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐39,067 | 基于图的状态化 Agent 构建框架，LangChain 官方出品 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [cloudflare/computer](https://github.com/cloudflare/computer) | 🔥 (+2802 today) | "Give your agent a computer👾"——云端沙箱计算环境，超大规模厂商下场 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 🔥 (+1873 today) | 工程师真实可用的 Agent Skills 集，从 .agents 目录直接提炼 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 🔥 (+1057 today) | 腾讯云出品，**团队级 Agent 记忆中枢**，Chat Memory / Skill / LLM-Wiki / Code-Graph 四类资产可治理共享 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 🔥 (+888 today) | DeepSeek 原生终端编码 Agent，**首创 prefix-cache 稳定性工程**，可长期驻留 |
| [obra/superpowers](https://github.com/obra/superpowers) | 🔥 (+858 today) | Agentic Skills 框架 + 软件开发方法论 |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | 🔥 (+847 today) | 长跑型 Agent 团队的"循环工程状态内核"，跨 Codex / Claude Code 通用 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 🔥 (+593 today) | Google 工程师出品，生产级 AI 编码 Agent Skills 库 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐226,644 | "The agent that grows with you"——与用户共同进化的 Agent |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐186,050 | AutoGPT 经典仍在持续维护更新 |

### 📦 AI 应用（垂直产品 / 解决方案）

| 项目 | Stars | 说明 |
|---|---|---|
| [langgenius/dify](https://github.com

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI 开源趋势日报 2026-09-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-17 04:22 UTC

---

<think>Let me carefully analyze the data provided and create a structured AI open-source trends report.

## Step 1: Filter AI-relevant projects

### Trending List (21 repos):
1. **alibaba/open-code-review** [Go] (+3231) - AI code review tool with LLM Agent ✅ AI
2. **cloudflare/security-audit-skill** [JavaScript] (+927) - Coding-agent skill for security audits ✅ AI (agent skills)
3. **JustVugg/colibri** [C] (+1546) - Run frontier MoE models in C ✅ AI (inference engine)
4. **abue-ammar/tinycast** [Swift] (+1179) - macOS launcher, not AI ❌ Skip
5. **jamiepine/voicebox** [TypeScript] (+417) - Open-source AI voice studio ✅ AI
6. **Lakr233/vphone-cli** [Swift] (+547) - Need to check, but sounds like a tool. From the context of date 2026-09, likely a virtual phone CLI. ❌ Skip
7. **anthropics/knowledge-work-plugins** [Python] (+110) - Plugins for Claude Cowork ✅ AI
8. **ever-co/ever-gauzy** [TypeScript] (+778) - ERP/CRM/HRM platform, not AI-related ❌ Skip
9. **ankitects/anki** [Rust] (+58) - Flashcard program, not AI ❌ Skip
10. **NationalSecurityAgency/ghidra** [Java] (+1059) - SRE framework, not AI ❌ Skip
11. **anthropics/claude-code** [TypeScript] (+165) - Claude Code agentic coding tool ✅ AI
12. **roboflow/supervision** [Python] (+260) - Computer vision tools ✅ AI
13. **alphaXiv/OpenResearch** [Rust] (+1017) - Turn coding agents into research agents ✅ AI
14. **supabase/supabase** [TypeScript] (+120) - Postgres platform, mentions AI but core is DB. Marginal. The trending entry mentions "build your web, mobile, and AI applications" - mostly backend infra. I'd say it's borderline. Looking at search results, it doesn't appear in AI search results. I'll skip it as it's primarily a database platform.
15. **rlaope/oh-my-hermes** [Python] (+80) - Plugin for Hermes Agent ✅ AI
16. **Tencent/WeKnora** [Go] (+1197) - LLM knowledge platform with RAG ✅ AI
17. **SnailSploit/Claude-Red** [Python] (+367) - Offensive security skills for Claude ✅ AI
18. **multimodal-art-projection/YuE** [Python] (+332) - Music generation AI ✅ AI
19. **addyosmani/agent-skills** [JavaScript] (+658) - Skills for AI coding agents ✅ AI
20. **cline/cline** [TypeScript] (+112) - Autonomous coding agent ✅ AI
21. **affaan-m/ECC** [JavaScript] (+1057) - Agent harness performance optimization ✅ AI

### AI Topic Search Results (81 repos):
All of these are AI-related by definition (searched under AI topics: ml, rag, llm, llm-model, ai-agent, llm, vector-db).

Let me organize and classify:

## Step 2: Classification

### 🔧 AI 基础工具 (Frameworks, SDK, Inference Engines, Dev Tools, CLI)
From Trending:
- alibaba/open-code-review (+3231) - Hybrid code review with LLM Agent
- cloudflare/security-audit-skill (+927) - Coding-agent skill for security
- JustVugg/colibri (+1546) - MoE inference engine in C
- anthropics/claude-code (+165) - Agentic coding CLI
- supervision (+260) - Computer vision tools
- roborun/oh-my-hermes (+80) - Plugin for Hermes Agent

From Search:
- huggingface/transformers (166k)
- pytorch/pytorch (103k)
- tensorflow/tensorflow (200k)
- keras-team/keras (64k)
- langchain4j/langchain4j (13k)
- neuml/txtai (12k)
- 0xPlaygrounds/rig (8k) - Rust LLM apps
- LLM-API-Key-Proxy (553)
- Picovoice/picollm (318) - On-device LLM inference

### 🤖 AI 智能体/工作流 (Agent Frameworks, Automation, Multi-Agent)
From Trending:
- alphaXiv/OpenResearch (+1017) - Coding agents as research agents
- rlaope/oh-my-hermes (+80) - Plugin for Hermes Agent
- addyosmani/agent-skills (+658) - Engineering skills for AI coding agents
- cline/cline (+112) - Autonomous coding agent
- affaan-m/ECC (+1057) - Agent harness optimization
- SnailSploit/Claude-Red (+367) - Offensive security skills for Claude
- anthropics/knowledge-work-plugins (+110) - Plugins for Claude

From Search:
- NousResearch/hermes-agent (246k)
- langchain-ai/langgraph (41k)
- Significant-Gravitas/AutoGPT (187k)
- browser-use/browser-use (114k)
- CopilotKit/CopilotKit (37k)
- esengine/DeepSeek-Reasonix (35k)
- agentscope-ai/QwenPaw (35k)
- Hmbown/Codewhale (40k)
- Career-ops-hq/career-ops (71k)
- HKUDS/nanobot (48k)
- zhayujie/CowAgent (47k)
- HKUDS/Vibe-Trading (33k)
- zhayujie/daily_stock_analysis (65k) - Actually let me re-check, that's daily_stock_analysis (65k)
- Panniantong/Agent-Reach (82k)
- DATAGEN (1.8k) - AI-driven multi-agent research assistant
- TheDotMack/claude-mem (94k) - Persistent context across sessions
- TheDotMack's project - this is more about agent memory

### 📦 AI 应用 (Application products, vertical solutions)
From Trending:
- jamiepine/voicebox (+417) - AI voice studio
- multimodal-art-projection/YuE (+332) - Music generation
- Tencent/WeKnora (+1197) - LLM knowledge platform

From Search:
- CherryHQ/cherry-studio (51k)
- open-webui/open-webui (152k)
- Mintplex-Labs/anything-llm (66k)
- firecrawl/firecrawl (181k)
- hugohe3/ppt-master (54k)
- harry0703/MoneyPrinterTurbo (124k)
- TauricResearch/TradingAgents (107k)
- hugohe3/ppt-master
- rasbt/LLMs-from-scratch (105k)
- Microsoft/ML-For-Beginners (90k)
- Microsoft/AI-For-Beginners (68k)
- Developer-Y/cs-video-courses (83k) - not really AI app, more like a list. Skip
- opencompass (7k) - LLM evaluation platform
- siyuan-note/siyuan (46k) - AI workspace
- netdata/netdata (80k) - monitoring with AI features
- JeecgBoot (47k) - low-code AI platform

### 🧠 大模型/训练 (Model weights, training frameworks, fine-tuning tools)
From Trending:
- JustVugg/colibri (+1546) - MoE inference engine (inference engine, but related to LLM)

From Search:
- jingyaogong/minimind (61k) - Train tiny LLM
- skyzh/tiny-llm (4.5k) - LLM inference system
- ultralytics/ultralytics (61k) - YOLO models
- genieincodebottle/generative-ai (2.6k) - Gen AI resources
- ollama/ollama (181k) - LLM runner
- opencompass/opencompass (7k) - LLM evaluation
- ollama/ollama

### 🔍 RAG/知识库 (Vector DB, RAG, Knowledge Management)
From Trending:
- Tencent/WeKnora (+1197) - LLM RAG platform
- Graphify-Labs/graphify (118k) - Codebase to knowledge graph

From Search:
- open-webui/open-webui (152k) - AI Interface
- langchain-ai/langchain (146k) - Agent engineering platform
- Shubhamsaboo/awesome-llm-apps (138k) - AI Agents and RAG apps
- infiniflow/ragflow (90k) - RAG engine
- PaddlePaddle/PaddleOCR (89k) - OCR for RAG
- headroomlabs-ai/headroom (72k) - Token compression
- mem0ai/mem0 (65k) - Memory layer for agents
- run-llama/llama_index (52k) - Document processing
- milvus-io/milvus (46k) - Vector database
- jeecgboot/JeecgBoot (47k) - low-code
- meilisearch/meilisearch (59k) - Search engine
- VectifyAI/PageIndex (35k) - Document Index for RAG
- qdrant/qdrant (34k) - Vector DB
- topoteretes/cognee (30k) - AI memory with knowledge graph
- NirDiamant/RAG_Techniques (29k) - RAG techniques
- weaviate/weaviate (16k) - Vector DB
- alibaba/zvec (15k) - Vector DB
- lancedb/lancedb (11k) - Embedded retrieval
- oramasearch/orama (10k) - Search engine
- oceanbase/oceanbase (10k) - DB
- bojieli/ai-agent-book (48k) - Book

Now let me select 3-8 representative projects for each category.

Let me also think about trends:
1. The biggest trend is AI Coding Agents - tons of projects in this space (Claude Code, Cline, Hermes, oh-my-hermes, agent-skills, ECC, OpenResearch, open-code-review)
2. "Agent Skills" / "Agent Harness" is a hot new concept - affaan-m/ECC, addyosmani/agent-skills, cloudflare/security-audit-skill, SnailSploit/Claude-Red, rlaope/oh-my-hermes
3. Edge inference for large models - JustVugg/colibri
4. RAG/Knowledge management still strong - Tencent/WeKnora, Graphify-Labs/graphify

Today (2026-09-17) standout observations:
- AI agent "skills" ecosystem is exploding
- Code review with AI agents (alibaba/open-code-review, +3231 - top trending!)
- MoE inference on consumer hardware (colibri)
- Security skills for agents (cloudflare/security-audit-skill, Claude-Red)
- Codebase knowledge graphs (graphify)

Let me write the report now.

I should also note: the dates in this fictional scenario are 2026-09-17, and the data mentions things like Kimi, GLM, MiniMax in ollama description. Let me proceed with the analysis.

Let me select the best 3-8 projects per category:

### 🔧 AI 基础工具
1. alibaba/open-code-review (+3231 today) - https://github.com/alibaba/open-code-review
2. JustVugg/colibri (+1546 today) - https://github.com/JustVugg/colibri
3. huggingface/transformers (166k) - https://github.com/huggingface/transformers
4. anthropics/claude-code (+165 today) - https://github.com/anthropics/claude-code
5. roboflow/supervision (+260 today) - https://github.com/roboflow/supervision
6. 0xPlaygrounds/rig (8.6k) - https://github.com/0xPlaygrounds/rig
7. langchain4j/langchain4j (13k) - https://github.com/langchain4j/langchain4j

### 🤖 AI 智能体/工作流
1. NousResearch/hermes-agent (246k) - https://github.com/NousResearch/hermes-agent
2. affaan-m/ECC (+1057 today) - https://github.com/affaan-m/ECC
3. alphaXiv/OpenResearch (+1017 today) - https://github.com/alphaXiv/OpenResearch
4. addyosmani/agent-skills (+658 today) - https://github.com/addyosmani/agent-skills
5. cline/cline (+112 today) - https://github.com/cline/cline
6. langchain-ai/langgraph (41k) - https://github.com/langchain-ai/langgraph
7. Significant-Gravitas/AutoGPT (187k) - https://github.com/Significant-Gravitas/AutoGPT
8. browser-use/browser-use (114k) - https://github.com/browser-use/browser-use

### 📦 AI 应用
1. Tencent/WeKnora (+1197 today) - https://github.com/Tencent/WeKnora
2. jamiepine/voicebox (+417 today) - https://github.com/jamiepine/voicebox
3. multimodal-art-projection/YuE (+332 today) - https://github.com/multimodal-art-projection/YuE
4. open-webui/open-webui (152k) - https://github.com/open-webui/open-webui
5. CherryHQ/cherry-studio (51k) - https://github.com/CherryHQ/cherry-studio
6. harry0703/MoneyPrinterTurbo (124k) - https://github.com/harry0703/MoneyPrinterTurbo
7. hugohe3/ppt-master (54k) - https://github.com/hugohe3/ppt-master

### 🧠 大模型/训练
1. JustVugg/colibri (+1546 today) - actually this is more inference engine, but I already put it in 基础工具. Let me keep it there. 
2. jingyaogong/minimind (61k) - https://github.com/jingyaogong/minimind
3. ollama/ollama (181k) - https://github.com/ollama/ollama
4. ultralytics/ultralytics (61k) - https://github.com/ultralytics/ultralytics
5. skyzh/tiny-llm (4.5k) - https://github.com/skyzh/tiny-llm
6. Picovoice/picollm (318) - https://github.com/Picovoice/picollm
7. opencompass/opencompass (7k) - https://github.com/open-compass/opencompass
8. rasbt/LLMs-from-scratch (105k) - https://github.com/rasbt/LLMs-from-scratch

Actually colibri is a MoE inference engine so could go to either. Let me put it in 大模型/训练 as it's about running frontier MoE models. Actually it's more about the inference engine itself which is a basic tool. Let me keep it in 基础工具.

Wait, but it's described as "Run frontier MoE models on hardware you already own — pure C, zero deps, experts streamed from disk. Tiny engine, immense model." - this is clearly a local inference engine for MoE models. It's a tool/runtime. I'll put it in 基础工具.

### 🔍 RAG/知识库
1. Tencent/WeKnora (+1197 today) - https://github.com/Tencent/WeKnora
2. Graphify-Labs/graphify (118k) - https://github.com/Graphify-Labs/graphify
3. langchain-ai/langchain (146k) - https://github.com/langchain-ai/langchain
4. infiniflow/ragflow (90k) - https://github.com/infiniflow/ragflow
5. mem0ai/mem0 (65k) - https://github.com/mem0ai/mem0
6. run-llama/llama_index (52k) - https://github.com/run-llama/llama_index
7. milvus-io/milvus (46k) - https://github.com/milvus-io/milvus
8. qdrant/qdrant (34k) - https://github.com/qdrant/qdrant
9. topoteretes/cognee (30k) - https://github.com/topoteretes/cognee
10. VectifyAI/PageIndex (35k) - https://github.com/VectifyAI/PageIndex

WeKnora appears in both RAG and 应用. Since RAG is its core function, let me prioritize it in RAG.

Now for the trend analysis:

**Today's Key Trends:**
1. **Agent "Skills" Ecosystem Explosion** - Multiple projects today focus on skills, harness, or plugins for coding agents (ECC +1057, agent-skills +658, security-audit-skill +927, Claude-Red +367, oh-my-hermes +80, knowledge-work-plugins +110). The market is clearly moving from "what agent do you use" to "what skills does your agent have."

2. **Code Intelligence & Review AI** - alibaba/open-code-review leads with +3231 stars, showing huge enterprise demand for AI-assisted code review. Also alphaXiv/OpenResearch (+1017) transforms coding agents into research agents.

3. **Edge/Local LLM Inference** - JustVugg/colibri (+1546) for MoE on consumer hardware signals continued push toward local inference.

4. **RAG Goes Mainstream in Enterprise** - Tencent/WeKnora (+1197) from a major Chinese tech company indicates enterprise RAG adoption.

5. **Agent Memory & Context** - thedotmack/claude-mem (94k stars) and headroomlabs-ai/headroom (72k) both address persistent memory/token efficiency for agents.

Let me write the final report.

I need to format this nicely in Chinese.</think>

# 📊 AI 开源趋势日报 · 2026-09-17

---

## 1. 今日速览

今日 GitHub AI 生态呈现**"Agent 技能化"集中爆发**的鲜明特征：以 `affaan-m/ECC`、`addyosmani/agent-skills`、`cloudflare/security-audit-skill`、`SnailSploit/Claude-Red` 为代表的大量新项目聚焦于为 Claude Code、Codex、Cursor 等编码 Agent 提供可插拔的"技能包"。阿里开源的 [`open-code-review`](https://github.com/alibaba/open-code-review) 以 +3231 stars 登顶今日 Trending，标志着**企业级 AI 代码审查**正式进入生产可用阶段。同期，边缘侧 MoE 推理（[`colibri`](https://github.com/JustVugg/colibri) +1546）、企业级 RAG 平台（[`WeKnora`](https://github.com/Tencent/WeKnora) +1197）、以及研究型 Agent（[`alphaXiv/OpenResearch`](https://github.com/alphaXiv/OpenResearch) +1017）同步登榜，说明 AI 开源正在从"模型层"向"应用工程层"全面下沉。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / 开发工具 / CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | ⭐0 (+3231 today) | 阿里开源的代码审查工具，确定性流水线 + LLM Agent 双架构，行级精准批注，原生支持 NPE/线程安全/XSS/SQL 注入等多语言规则集 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | ⭐0 (+1546 today) | 纯 C 实现的极简 MoE 推理引擎，零依赖，专家从磁盘流式加载，让消费级硬件跑得动前沿 MoE 模型 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐0 (+165 today) | Anthropic 官方终端 Agent 编程工具，自然语言驱动代码理解、Git 流程与日常编码任务 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | ⭐50.7k (+260 today) | Roboflow 出品的可复用计算机视觉工具库，今日持续获得社区增量关注 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166k | 多模态模型定义与训练推理的事实标准框架 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.6k | Rust 生态的模块化 LLM 应用构建框架，强类型 + 高并发 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐13k | JVM 生态（原 Java）LLM 统一 API，对接 Quarkus / Spring Boot，企业 Java 团队的 Agent/RAG 首选 |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐246k | 持续自我成长的 Agent 框架，长期记忆 + 多模型协同 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐260k (+1057 today) | Agent Harness 性能优化系统，提供技能 / 直觉 / 记忆 / 安全 / 优先研究开发等模块，兼容 Claude Code、Codex、Cursor、OpenCode 等多平台 |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | ⭐0 (+1017 today) | 把编码 Agent 升级为研究 Agent，面向学术研究自动化场景 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+658 today) | Google Chrome 性能负责人 Addy Osmani 出品，为 AI 编码 Agent 提供生产级工程技能包 |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | ⭐0 (+367 today) | Claude 攻击面安全技能库，覆盖 SQLi 到 EDR 绕过、Shellcode 到漏洞利用的专家级方法论 |
| [cline/cline](https://github.com/cline/cline) | ⭐0 (+112 today) | 开源自主编码 Agent，SDK / IDE 扩展 / CLI 三种形态，活跃维护中 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐41.7k | 构建有状态、多智能体、可恢复工作流的事实标准 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐114k | 让 Agent 真正"使用浏览器"的明星项目，浏览器自动化 Agent 的标杆 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐48k | 港大数据智能实验室出品的超轻量自托管个人 Agent 框架，含 WebUI / MCP / 多智能体 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | ⭐0 (+417 today) | 开源 AI 语音工作室，支持声音克隆、口述生成、语音创作一体化 |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | ⭐0 (+332 today) | 音乐生成前沿项目 YuE2，支持符号规划、零样本翻唱与 Agent 式音乐编辑 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐152k | 本地 LLM 一体化界面，支持 Ollama / OpenAI API，是私有化部署的首选 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐51.8k | 多模型聚合 + 智能体 + 300+ 助手的 AI 生产力工作台 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐124k | 一键根据主题生成高清短视频，AI 大模型 + 自动化工作流 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐54.8k | 把文档/主题自动转为原生 PowerPoint（含动画、图表、音频旁白） |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐107k | 多 Agent 协同的金融交易框架，LLM 量化研究模板 |

### 🧠 大模型 / 训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐61.3k | 2 小时训练 64M 参数微型 LLM 的教学级项目，是入门 LLM 全流程的最佳实验场 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181k | 一行命令运行 Kimi / GLM / DeepSeek / Qwen / Gemma 等数十种模型，本地推理事实标准 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐61.7k | YOLO 系列官方仓库，覆盖目标检测、实例分割、姿态估计等 CV 全任务 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4.5k | 在 Apple Silicon 上从零实现 tiny vLLM + Qwen，系统工程师友好的推理系统教程 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐318 | 端侧 LLM 推理引擎，X-Bit 量化技术支持手机/嵌入式 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7.4k | 司南大模型评测平台，100+ 数据集覆盖 Llama3 / Mistral / Qwen / GLM / Claude 等 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105k | 从零用 PyTorch 手写 ChatGPT 式 LLM 的经典教程 |

### 🔍 RAG / 知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | ⭐0 (+1197 today) | 腾讯开源的 LLM 知识平台：原始资料 → 可查询 RAG → 自主推理 Agent → 自维护 Wiki 一体化 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐118k | 把代码、文档、SQL、配置、PDF 一键转成可查询知识图谱，提供 Claude Code / Cursor / Codex / Gemini CLI 的 /graphify 技能 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐146k | Agent 工程平台的事实标准，RAG / 工具调用 / 多模型编排 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐90.8k | RAG + Agent 双引擎结合的开源引擎，

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
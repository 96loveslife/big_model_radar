# AI 开源趋势日报 2026-07-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-08 03:21 UTC

---

<think>
The user wants me to analyze GitHub trending data for AI-related repositories and generate a structured AI open-source trend report. Let me work through this systematically.

## Step 1: Filtering

### Trending List (13 repos) - Filter AI-related:

1. **MadsLorentzen/ai-job-search** [TypeScript] +2514 - ✅ AI-related (AI-powered job search with Claude)
2. **Zackriya-Solutions/meetily** [Rust] +1777 - ✅ AI-related (AI meeting assistant with transcription)
3. **addyosmani/agent-skills** [JavaScript] +1317 - ✅ AI-related (skills for AI coding agents)
4. **ruvnet/RuView** [Rust] +1129 - ✅ AI-related (WiFi-based spatial intelligence, but is this really AI? It uses signal processing and ML)
5. **asgeirtj/system_prompts_leaks** [JavaScript] +1691 - ✅ AI-related (system prompts from various AI models)
6. **TencentCloud/CubeSandbox** [Rust] +664 - ✅ AI-related (Sandbox for AI Agents)
7. **AhmadIbrahiim/Website-downloader** [HTML] +140 - ❌ Not AI-related (just a website downloader)
8. **steipete/CodexBar** [Swift] +376 - ✅ AI-related (shows usage stats for OpenAI Codex and Claude Code)
9. **dotnet/skills** [C#] +64 - ✅ AI-related (skills for AI coding agents with .NET)
10. **iOfficeAI/OfficeCLI** [C#] +893 - ✅ AI-related (Office suite for AI agents)
11. **bradautomates/claude-video** [Python] +965 - ✅ AI-related (give Claude video watching ability)
12. **kyutai-labs/pocket-tts** [Python] +531 - ✅ AI-related (TTS model)
13. **hesreallyhim/awesome-claude-code** [Python] +144 - ✅ AI-related (Claude Code resources)

So from trending, I exclude: AhmadIbrahiim/Website-downloader

### AI Topic Search (79 repos) - all should be AI-related, but let me check:

Most are clearly AI/ML related. The topic-tagged ones are all from "llm", "ai-agent", "rag", "vector-db", "llm-model", "ml" topics, so all are AI-relevant.

Some "ml" tagged projects are general ML/DL frameworks: tensorflow, pytorch, scikit-learn, keras, ultralytics, yolov5, deepfakes/faceswap, tesseract-ocr, ML-For-Beginners, cs-video-courses (not really ML despite the tag), netdata, OpenBB-finance.

cs-video-courses is more of a general CS resource list - probably not AI specifically, but it's in the ml topic. Let me keep it as borderline.

tesseract-ocr - OCR, which is AI-adjacent. I'll include it.
netdata - observability with AI features. Borderline.
OpenBB-finance - data platform for analysts, AI agents. AI-related.

## Step 2: Classification

Let me classify the filtered projects:

### 🔧 AI 基础工具 (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)

From Trending:
- addyosmani/agent-skills (+1317) - skills for AI coding agents
- dotnet/skills (+64) - skills for AI coding agents
- steipete/CodexBar (+376) - CLI for usage stats
- iOfficeAI/OfficeCLI (+893) - Office CLI for AI agents
- bradautomates/claude-video (+965) - video tool for Claude

From Topic Search:
- huggingface/transformers (162k) - ML framework
- vllm-project/vllm (85k) - LLM inference engine
- langchain-ai/langchain (141k) - LLM framework
- run-llama/llama_index (50k) - document framework
- langchain4j/langchain4j (12k) - Java LLM library
- 0xPlaygrounds/rig (7.8k) - Rust LLM framework
- neuml/txtai (12.7k) - AI framework
- eigenwise/atomic-agents (6k) - agent building
- open-compass/opencompass (7.1k) - LLM evaluation
- cherryhq/cherry-studio (48k) - AI chat interface
- open-webui/open-webui (144k) - AI interface
- hedroomlabs-ai/headroom (57k) - compression for LLM
- Picovoice/picollm (315) - on-device LLM
- acon96/home-llm (1.3k) - Home Assistant LLM
- iOfficeAI/AionUi (29k) - cowork app for AI CLI

### 🤖 AI 智能体/工作流 (Agent Frameworks, Automation, Multi-agent)

From Trending:
- TencentCloud/CubeSandbox (+664) - sandbox for AI agents

From Topic Search:
- affaan-m/ECC (227k) - agent harness
- NousResearch/hermes-agent (211k) - agent
- Significant-Gravitas/AutoGPT (185k) - autonomous AI
- langgenius/dify (148k) - agentic workflow
- OpenHands/OpenHands (79k) - AI development
- browser-use/browser-use (103k) - browser automation for AI
- TauricResearch/TradingAgents (91k) - multi-agent trading
- JuliusBrussee/caveman (86k) - Claude Code skill
- Panniantong/Agent-Reach (52k) - agent internet access
- HKUDS/nanobot (45k) - lightweight AI agent
- zhayujie/CowAgent (45k) - super AI assistant
- CopilotKit/CopilotKit (35k) - frontend for agents
- Gitlawb/openclaude (29k) - Claude wrapper
- esengine/DeepSeek-Reasonix (26k) - DeepSeek coding agent
- jackwener/OpenCLI (26k) - CLI for AI
- nocobase/nocobase (23k) - no-code + AI platform
- starpig1129/DATAGEN (1.7k) - multi-agent research
- multimindlab/multimind-sdk (92) - SDK
- OpenBB-finance/OpenBB (70k) - data platform for AI agents

### 📦 AI 应用 (Specific Products, Vertical Solutions)

From Trending:
- MadsLorentzen/ai-job-search (+2514) - AI job search
- Zackriya-Solutions/meetily (+1777) - AI meeting assistant
- ruvnet/RuView (+1129) - WiFi spatial intelligence
- asgeirtj/system_prompts_leaks (+1691) - system prompts collection
- kyutai-labs/pocket-tts (+531) - TTS model
- hesreallyhim/awesome-claude-code (+144) - Claude Code resources

From Topic Search:
- firecrawl/firecrawl (147k) - web scraping API
- f/prompts.chat (165k) - prompts
- santifer/career-ops (59k) - job search
- ZhuLinsen/daily_stock_analysis (55k) - stock analysis
- hugohe3/ppt-master (37k) - PPT generation
- siyuan-note/siyuan (44k) - knowledge management
- gluonfield/enchanted (5.9k) - iOS/macOS chat
- thedotmack/claude-mem (86k) - persistent memory
- netdata/netdata (79k) - observability
- jeecgboot/JeecgBoot (46k) - low-code AI
- tesseract-ocr/tesseract (75k) - OCR

### 🧠 大模型/训练 (Model Weights, Training, Fine-tuning)

From Topic Search:
- ollama/ollama (175k) - LLM runtime
- tensorflow/tensorflow (196k) - ML framework
- pytorch/pytorch (101k) - ML framework
- ultralytics/ultralytics (59k) - YOLO
- ultralytics/yolov5 (57k) - YOLOv5
- keras-team/keras (64k) - DL framework
- scikit-learn/scikit-learn (66k) - ML library
- microsoft/ML-For-Beginners (87k) - ML course
- chrisliu298/awesome-llm-unlearning (606) - LLM unlearning
- LancerLab/croqtile (34) - AI kernel DSL
- R-D-BioTech-Alaska/Qelm (27) - quantum LLM
- deepfakes/faceswap (55k) - deepfakes
- AmirMotefaker/Create-your-own-ChatGPT (23) - tutorial

### 🔍 RAG/知识库 (Vector DB, RAG, Knowledge Mgmt)

From Topic Search:
- infiniflow/ragflow (84k) - RAG engine
- Graphify-Labs/graphify (79k) - knowledge graph
- datawhalechina/hello-agents (64k) - RAG/agents tutorial
- Mintplex-Labs/anything-llm (62k) - local LLM/RAG
- mem0ai/mem0 (60k) - memory layer
- pathwaycom/llm-app (59k) - RAG templates
- FlowiseAI/Flowise (54k) - visual AI agents
- milvus-io/milvus (45k) - vector DB
- meilisearch/meilisearch (58k) - search engine
- VectifyAI/PageIndex (33k) - vectorless RAG
- qdrant/qdrant (33k) - vector DB
- NirDiamant/RAG_Techniques (28k) - RAG techniques
- topoteretes/cognee (27k) - knowledge graph memory
- weaviate/weaviate (16k) - vector DB
- alibaba/zvec (14k) - in-process vector DB
- StarTrail-org/LEANN (12k) - RAG on personal device
- lancedb/lancedb (10k) - embedded retrieval

Now let me organize the final report.

Let me double-check on the ruvnet/RuView - it uses WiFi signals for sensing, with mention of "spatial intelligence" and "vital sign monitoring". This is more like RF sensing/CSI-based detection, which uses ML/AI. I'll include it as an AI application.

cs-video-courses - has "ml" topic but is a general CS course list. I think it's borderline. Let me include it but mention it's a resource list.

Actually, looking again, it's tagged as topic:ml but is a general computer science course list. I'll keep it as marginal but include it in a sense under ML基础工具 or just briefly mention. Given the AI focus, I'll likely omit it from the detailed analysis.

Let me think about which projects are most noteworthy for the "今日速览" and "社区关注热点" sections.

Top trending AI projects today by stars added:
1. MadsLorentzen/ai-job-search (+2514)
2. Zackriya-Solutions/meetily (+1777)
3. asgeirtj/system_prompts_leaks (+1691)
4. addyosmani/agent-skills (+1317)
5. ruvnet/RuView (+1129)
6. bradautomates/claude-video (+965)
7. iOfficeAI/OfficeCLI (+893)
8. TencentCloud/CubeSandbox (+664)
9. kyutai-labs/pocket-tts (+531)
10. steipete/CodexBar (+376)
11. hesreallyhim/awesome-claude-code (+144)
12. dotnet/skills (+64)

Now let me identify key trend signals:
- AI Agent ecosystem explosion: agent-skills, OfficeCLI, CubeSandbox, claude-video, CodexBar, awesome-claude-code, dotnet/skills - all about extending AI agent capabilities
- Privacy-first/local AI: meetily (local), pocket-tts (CPU)
- System prompts transparency movement: system_prompts_leaks
- AI job search: ai-job-search, career-ops

Industry events: The hypothetical date is 2026-07-08. Looking at the model names mentioned ("Claude Fable 5, Opus 4.8, ChatGPT 5.5, Gemini 3.5, GLM-5.1, Kimi-K2.6"), this is a future scenario. The MiniMax-M3 model is also mentioned. I should treat this as a future scenario report.

Let me now write the report.

Actually, looking at this more carefully, the date 2026-07-08 is in the future, and the data includes future model names. I should treat this as a hypothetical or forward-looking scenario and write the report accordingly. I won't break the fourth wall.

For the "趋势信号分析", I should connect:
- Agent skills/claude ecosystem explosion suggests maturation of Claude Code platform
- Local AI focus: meetily, pocket-tts - privacy-first movement
- Office automation for agents: OfficeCLI, claude-video - agents moving into real workflows
- System prompts transparency: growing interest in understanding AI behavior

For "社区关注热点":
- ai-job-search: massive interest in AI-assisted job hunting
- meetily: local AI meeting assistant
- agent-skills: standards for AI agent capabilities
- CubeSandbox: security for AI agents
- OfficeCLI: AI agents in office workflows
- pocket-tts: lightweight TTS

Let me also verify - "hesreallyhim/awesome-claude-code" is described as having 86k+ stars listed. Let me just use the data as given. The numbers in the data are what they are.

Actually, I should be careful. The "total stars" shown in the topic search results seem unrealistically high for some entries (e.g., affaan-m/ECC at 227k, JuliusBrussee/caveman at 86k - these seem like made-up or inflated numbers in this future scenario). I'll just use the data as provided in the report.

Let me now write the report in Chinese.

Format: I'll use markdown for the report. Let me structure it clearly.

One more consideration: the user wants the most "representative" projects (3-8 per category) for the detailed listing. I should pick the most noteworthy ones, not list all of them.

Let me finalize the selection:

### 🔧 AI 基础工具 (8 items)
- addyosmani/agent-skills (+1317) - engineering skills for AI agents
- iOfficeAI/OfficeCLI (+893) - Office CLI for AI agents
- steipete/CodexBar (+376) - usage stats
- huggingface/transformers (162k) - ML framework
- vllm-project/vllm (85k) - inference engine
- langchain-ai/langchain (141k) - LLM platform
- run-llama/llama_index (50k) - document agent
- 0xPlaygrounds/rig (7.8k) - Rust LLM

### 🤖 AI 智能体/工作流 (8 items)
- TencentCloud/CubeSandbox (+664) - sandbox for agents
- affaan-m/ECC (227k) - agent harness
- NousResearch/hermes-agent (211k) - agent
- Significant-Gravitas/AutoGPT (185k) - autonomous AI
- langgenius/dify (148k) - agentic workflow
- OpenHands/OpenHands (79k) - AI development
- browser-use/browser-use (103k) - browser automation
- TauricResearch/TradingAgents (91k) - multi-agent trading

### 📦 AI 应用 (8 items)
- MadsLorentzen/ai-job-search (+2514) - job search
- Zackriya-Solutions/meetily (+1777) - meeting assistant
- ruvnet/RuView (+1129) - WiFi spatial AI
- asgeirtj/system_prompts_leaks (+1691) - system prompts
- kyutai-labs/pocket-tts (+531) - TTS
- firecrawl/firecrawl (147k) - web scraping
- hugohe3/ppt-master (37k) - PPT generation
- ZhuLinsen/daily_stock_analysis (55k) - stock analysis

### 🧠 大模型/训练 (5 items)
- ollama/ollama (175k) - LLM runtime
- pytorch/pytorch (101k) - ML framework
- ultralytics/ultralytics (59k) - YOLO
- tensorflow/tensorflow (196k) - ML framework
- kyutai-labs/pocket-tts (already mentioned, can be here too)

### 🔍 RAG/知识库 (6 items)
- infiniflow/ragflow (84k) - RAG engine
- mem0ai/mem0 (60k) - memory layer
- milvus-io/milvus (45k) - vector DB
- qdrant/qdrant (33k) - vector DB
- VectifyAI/PageIndex (33k) - vectorless RAG
- thedotmack/claude-mem (86k) - persistent memory

Now let me write the final report.
</think>
# 📊 AI 开源趋势日报 · 2026-07-08

---

## 1. 今日速览

今日 GitHub AI 生态呈现**"Agent 工程化全面爆发"**的鲜明态势：围绕 Claude Code / Codex 等编码 Agent 的"技能扩展层"集中登榜（`agent-skills`、`dotnet/skills`、`OfficeCLI`、`claude-video`、`CodexBar` 合计单日新增近 4000 stars），标志着 Agent 平台已进入生态化阶段。与此同时，**隐私优先的本地 AI**（`meetily` +1777、`pocket-tts` +531）与**AI Agent 安全沙箱**（`CubeSandbox` +664）成为新热点，反映社区对"离线可用、可控可审计"的强烈诉求。系统提示词泄露仓库 `system_prompts_leaks` 单日 +1691 stars，则揭示了开发者对主流闭源模型行为透明度的持续渴求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+1317 today) | Google Chrome 团队出品，面向 AI 编码 Agent 的生产级工程技能集，是 Agent 工程化的事实标准候选 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐0 (+893 today) | 首个专为 AI Agent 读取/编辑 Word/Excel/PPT 的 CLI 工具，单二进制，开创 Office 自动化新范式 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | ⭐0 (+965 today) | `/watch` 一条命令赋予 Claude 视频理解能力，多模态 Agent 工具链的代表项目 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | ⭐0 (+376 today) | 免登录查看 OpenAI Codex / Claude Code 用量的 macOS 状态栏工具 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,357 | 跨模态模型定义框架，仍是 LLM/多模态训练与推理的基石 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐85,650 | 高吞吐 LLM 推理引擎，Agent 后端服务的默认选择 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141,241 | Agent 工程平台，定位升级为"Agent Engineering Platform" |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,859 | Rust 编写的模块化 LLM 应用框架，性能敏感场景的新选择 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | ⭐0 (+664 today) | 腾讯云开源，AI Agent 即用沙箱，专注并发与安全，是企业级 Agent 落地关键基础设施 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐227,110 | 面向 Claude Code/Codex/Cursor 的 Agent Harness 性能优化系统 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐211,074 | "与你共同成长的 Agent"，强调长期记忆与持续学习能力 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,428 | 自主 Agent 愿景的鼻祖项目，至今仍是社区标杆 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐148,098 | 面向生产的 Agentic Workflow 开发平台 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐79,880 | AI 驱动的软件开发 Agent，Devin 之外最知名的开源替代 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐103,367 | 让网站对 AI Agent 可访问，是 GUI 自动化 Agent 的核心库 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐91,674 | 多 Agent 金融交易框架，垂直领域多智能体系统代表 |

### 📦 AI 应用（具体产品 / 垂直场景）

| 项目 | Stars | 说明 |
|---|---|---|
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | ⭐0 (+2514 today) | 基于 Claude Code 的求职框架，AI 自动筛岗、改简历、写求职信，**今日 Trending 第一名** |
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | ⭐0 (+1777 today) | Rust 编写的本地 AI 会议助手，4x Parakeet/Whisper 实时转写 + Ollama 总结，100% 本地处理 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | ⭐0 (+1691 today) | Claude / GPT / Gemini / Grok 等主流模型系统提示词合集，提示工程研究"地下手册" |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐0 (+1129 today) | 利用 WiFi 信号做空间感知与生命体征监测，**无摄像头隐私 AI** 的典型场景 |
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | ⭐0 (+531 today) | 可在 CPU 上运行的轻量 TTS，"口袋级"语音合成模型 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐147,329 | Agent 时代最受欢迎的网络数据采集 API |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐37,531 | 从任意文档生成可编辑 PPT（非图片），原生图形/动画/图表全部可二次修改 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐55,605 | LLM 驱动的多市场股票分析系统，零成本定时运行 |

### 🧠 大模型 / 训练

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐175,684 | 本地运行 Kimi-K2.6 / GLM-5.1 / DeepSeek / Qwen / Gemma 等模型的"国民级"工具 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,108 | 经典 ML 框架，仍是生产部署的重要基石 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,577 | 学术界与开源大模型训练的事实标准 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐59,227 | YOLO26 / YOLO11 / YOLOv8 一体化仓库，CV 实时推理首选 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | ⭐1,376 | Home Assistant 集成 + 专属模型，本地 LLM 走进智能家居 |

### 🔍 RAG / 知识库

| 项目 | Stars | 说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐84,543 | 融合 RAG 与 Agent 能力的开源引擎，企业知识库首选 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐86,352 | 为 Claude Code / Codex / Gemini CLI 等 Agent 提供跨会话持久记忆 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐60,336 | AI Agent 的通用记忆层，是"长记忆 Agent"的基础设施 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,128 | 云原生向量数据库，大规模 ANN 检索的事实标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,019 | 高性能向量搜索引擎，Rust 实现 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐33,866 | **无向量化、基于推理的 RAG** —— 挑战传统 Embedding 范式的新方向 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐14,092 | 阿里开源的轻量级进程内向量数据库，嵌入式场景利器 |

---

## 3. 趋势信号分析

**Agent 平台生态进入"技能化 + 工具化"分层阶段。** 今日 Trending 榜单中超过 60% 的项目直接围绕 Claude Code / Codex 生态展开：底层有 `CubeSandbox` 提供安全沙箱、中间层有 `agent-skills` / `dotnet/skills` 标准化技能协议、上层应用有 `OfficeCLI` / `claude-video` / `CodexBar` 等垂直工具。这种"操作系统化"的演进路径与当年 Linux 桌面环境爆发的格局高度相似，预示 Agent 生态将快速走向成熟。

**本地化与隐私 AI 形成独立潮流。** `meetily`（+1777）、`pocket-tts`（+531）以及 `RuView`（+1129，无摄像头方案）的集中爆发，反映了开发者在数据合规、离线可用性、端侧推理成本上的强烈诉求；尤其 `RuView` 将 WiFi CSI 信号处理与 ML 结合，展示了"非视觉感知 AI"的创新空间。

**对闭源模型行为的"逆向透明化"持续升温。** `system_prompts_leaks` 收录 Claude Opus 4.8、GPT-5.5、Gemini 3.5 等最新旗舰的系统提示词，单日 +1691 stars，说明社区正通过集体协作的方式弥补闭源模型可解释性短板，这一趋势对未来的提示工程基准和模型评测方法学具有重要影响。

---

## 4. 社区关注热点

- 🚀 **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
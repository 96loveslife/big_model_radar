# AI 开源趋势日报 2026-06-27

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-27 03:57 UTC

---

<think>
The user wants me to analyze GitHub trending AI repositories from 2026-06-27 and produce a structured AI open source trends daily report. Let me work through this systematically.

## Step 1: Filter AI-related projects

### Trending list (17 repos) - AI relevance filter:

1. **simplex-chat/simplex-chat** [Haskell] +432 - Messaging network, NOT AI related. SKIP
2. **google-labs-code/design.md** [TypeScript] +2407 - Design format spec for coding agents. AI-related (for AI agents). KEEP
3. **commaai/openpilot** [Python] +80 - Robotics/driver assistance, NOT primarily AI. SKIP (it does use ML but not the focus)
4. **kunchenguid/no-mistakes** [Go] +398 - Git push tool, NOT AI. SKIP
5. **grafana/grafana** [TypeScript] +32 - Observability, NOT AI. SKIP
6. **ripienaar/free-for-dev** [HTML] +90 - Free tier list, NOT AI. SKIP
7. **opendatalab/MinerU** [Python] +960 - Document parsing for LLM/Agent workflows. AI-related. KEEP
8. **alchaincyf/zhangxuefeng-skill** +160 - Skill file for AI, AI-related. KEEP
9. **mauriceboe/TREK** [TypeScript] +1060 - Travel planner, NOT AI. SKIP
10. **xbtlin/ai-berkshire** [Python] +1274 - AI investing framework using Claude Code. AI-related. KEEP
11. **calesthio/OpenMontage** [Python] +1754 - Agentic video production. AI-related. KEEP
12. **aws/agent-toolkit-for-aws** [Python] +243 - AWS MCP servers for AI agents. AI-related. KEEP
13. **NanmiCoder/MediaCrawler** [Python] +673 - Social media crawler, NOT primarily AI. SKIP (scraper not AI focus)
14. **garrytan/gstack** [TypeScript] +950 - Claude Code setup. AI-related. KEEP
15. **IceWhaleTech/CasaOS** [Go] +619 - Personal cloud, NOT AI. SKIP
16. **JCodesMore/ai-website-cloner-template** [TypeScript] +1088 - AI website cloner. AI-related. KEEP
17. **Panniantong/Agent-Reach** [Python] +1194 - AI agent internet access tool. AI-related. KEEP

So from Trending, AI-related projects (8):
- google-labs-code/design.md (+2407)
- opendatalab/MinerU (+960)
- alchaincyf/zhangxuefang-skill (+160)
- xbtlin/ai-berkshire (+1274)
- calesthio/OpenMontage (+1754)
- aws/agent-toolkit-for-aws (+243)
- garrytan/gstack (+950)
- JCodesMore/ai-website-cloner-template (+1088)
- Panniantong/Agent-Reach (+1194)

Wait, that's 9. Let me recount: design.md, MinerU, zhangxuefeng-skill, ai-berkshire, OpenMontage, agent-toolkit-for-aws, gstack, ai-website-cloner, Agent-Reach = 9

### Topic search results (81 repos, already AI-filtered):

All 81 are AI-related by topic. Let me organize them.

**topic:ml** (~15 repos):
- tensorflow/tensorflow ⭐195,934
- f/prompts.chat ⭐164,406
- huggingface/transformers ⭐161,952
- pytorch/pytorch ⭐101,062
- microsoft/ML-For-Beginners ⭐87,394
- Developer-Y/cs-video-courses ⭐81,954
- netdata/netdata ⭐79,423
- tesseract-ocr/tesseract ⭐74,960
- OpenBB-finance/OpenBB ⭐69,733
- scikit-learn/scikit-learn ⭐66,487
- keras-team/keras ⭐64,097
- ultralytics/ultralytics ⭐58,854
- ultralytics/yolov5 ⭐57,560
- ageitgey/face_recognition ⭐56,536
- deepfakes/faceswap ⭐55,321

**topic:llm** (~17 repos):
- affaan-m/ECC ⭐222,224
- NousResearch/hermes-agent ⭐203,843
- Significant-Gravitas/AutoGPT ⭐185,163
- ollama/ollama ⭐174,956
- langgenius/dify ⭐146,688
- open-webui/open-webui ⭐143,151
- langchain-ai/langchain ⭐140,302
- firecrawl/firecrawl ⭐139,700
- browser-use/browser-use ⭐100,879
- TauricResearch/TradingAgents ⭐88,929
- vllm-project/vllm ⭐84,486
- OpenHands/OpenHands ⭐78,441
- bytedance/deer-flow ⭐74,921
- ScrapeGraphAI/Scrapegraph-ai ⭐27,706
- 0xPlaygrounds/rig ⭐7,761
- open-compass/opencompass ⭐7,124
- samchon/nestia ⭐2,160
- thinkwee/AwesomeOPD ⭐692
- galilai-group/stable-pretraining ⭐269
- zjunlp/LightThinker ⭐164
- Anil-matcha/Awesome-GPT-5.6-API-and-Prompts ⭐160
- testtimescaling/testtimescaling.github.io ⭐104
- raw-labs/mxcp ⭐69
- HRI-EU/tulip_agent ⭐44
- LancerLab/croqtile ⭐34
- R-D-BioTech-Alaska/Qelm ⭐27
- AmirMotefaker/Create-your-own-ChatGPT ⭐23
- ELM-Research/ECG-Language-Models ⭐15

**topic:ai-agent** (~17 repos):
- shareAI-lab/learn-claude-code ⭐68,574
- santifer/career-ops ⭐55,974
- ZhuLinsen/daily_stock_analysis ⭐50,173
- CherryHQ/cherry-studio ⭐47,851
- zhayujie/CowAgent ⭐45,633
- HKUDS/nanobot ⭐44,776
- siyuan-note/siyuan ⭐44,662
- Panniantong/Agent-Reach ⭐42,500
- CopilotKit/CopilotKit ⭐35,550
- hugohe3/ppt-master ⭐32,447
- Gitlawb/openclaude ⭐29,434
- iOfficeAI/AionUi ⭐28,927
- googleworkspace/cli ⭐28,911
- jackwener/OpenCLI ⭐25,403

**topic:rag** (~12 repos):
- thedotmack/claude-mem ⭐84,534
- PaddlePaddle/PaddleOCR ⭐83,974
- infiniflow/ragflow ⭐83,705
- safishamsi/graphify ⭐72,651
- Mintplex-Labs/anything-llm ⭐62,153
- datawhalechina/hello-agents ⭐62,102
- mem0ai/mem0 ⭐59,541
- FlowiseAI/Flowise ⭐54,040
- headroomlabs-ai/headroom ⭐52,053
- run-llama/llama_index ⭐50,437
- jeecgboot/JeecgBoot ⭐46,899
- milvus-io/milvus ⭐44,970

**topic:vector-db** (~10 repos):
- meilisearch/meilisearch ⭐58,311
- VectifyAI/PageIndex ⭐33,454
- qdrant/qdrant ⭐32,665
- topoteretes/cognee ⭐23,279
- weaviate/weaviate ⭐16,447
- neuml/txtai ⭐12,681
- StarTrail-org/LEANN ⭐12,582
- alibaba/zvec ⭐12,515
- langchain4j/langchain4j ⭐12,439
- zilliztech/claude-context ⭐11,975
- lancedb/lancedb ⭐10,727
- oramasearch/orama ⭐10,447

## Step 2: Categorization

Now let me categorize everything into the 5 dimensions:

### 🔧 AI 基础工具 (Frameworks, SDKs, inference engines, dev tools, CLIs)

- tensorflow/tensorflow - training framework
- pytorch/pytorch - training framework
- huggingface/transformers - model framework
- vllm-project/vllm - inference engine
- ollama/ollama - local LLM runner
- langchain-ai/langchain - LLM framework
- langchain4j/langchain4j - LLM framework (Java)
- 0xPlaygrounds/rig - Rust LLM framework
- langgenius/dify - workflow platform
- FlowiseAI/Flowise - visual AI builder
- open-webui/open-webui - AI interface
- CherryHQ/cherry-studio - AI productivity
- CopilotKit/CopilotKit - frontend for agents
- google-labs-code/design.md - design spec for AI agents
- scikit-learn/scikit-learn - ML library
- keras-team/keras - deep learning
- netdata/netdata - observability
- tesseract-ocr/tesseract - OCR
- ultralytics/ultralytics - YOLO
- ultralytics/yolov5 - YOLOv5
- PaddlePaddle/PaddleOCR - OCR
- galilai-group/stable-pretraining - pretraining
- Firecrawl/firecrawl - scraping for AI
- jackwener/OpenCLI - website to CLI
- googleworkspace/cli - Google Workspace CLI with AI skills
- LancerLab/croqtile - AI kernel DSL
- raw-labs/mxcp - Model execution protocol
- ELM-Research/ECG-Language-Models - ECG-LM framework
- R-D-BioTech-Alaska/Qelm - Quantum enhanced LM
- aws/agent-toolkit-for-aws - AWS MCP servers

### 🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)

- affaan-m/ECC - agent harness
- NousResearch/hermes-agent - agent
- Significant-Gravitas/AutoGPT - agent
- OpenHands/OpenHands - AI dev agent
- bytedance/deer-flow - super agent
- browser-use/browser-use - browser agent
- TauricResearch/TradingAgents - multi-agent trading
- shareAI-lab/learn-claude-code - claude code-like
- santifer/career-ops - Claude Code system
- ZhuLinsen/daily_stock_analysis - LLM stock analysis
- zhayujie/CowAgent - AI assistant agent
- HKUDS/nanobot - lightweight agent
- Gitlawb/openclaude - open claude
- iOfficeAI/AionUi - cowork for CLIs
- garrytan/gstack - Claude Code setup
- alchaincyf/zhangxuefeng-skill - skill
- datawhalechina/hello-agents - agent tutorial
- siyuan-note/siyuan - PKM (though listed as ai-agent topic, this is actually a PKM software)
- HRI-EU/tulip_agent - autonomous agent

### 📦 AI 应用 (Specific application products, vertical solutions)

- f/prompts.chat - prompt community
- microsoft/ML-For-Beginners - ML tutorial
- Developer-Y/cs-video-courses - CS courses
- ageitgey/face_recognition - face recognition API
- deepfakes/faceswap - face swap
- OpenBB-finance/OpenBB - financial data platform
- ScrapeGraphAI/Scrapegraph-ai - AI scraper
- hugohe3/ppt-master - PPT generation
- calesthio/OpenMontage - video production system
- xbtlin/ai-berkshire - investing framework
- JCodesMore/ai-website-cloner-template - website cloner
- Panniantong/Agent-Reach - internet access
- opendatalab/MinerU - document parsing
- Anil-matcha/Awesome-GPT-5.6-API-and-Prompts - GPT-5.6 prompts
- AmirMotefaker/Create-your-own-ChatGPT - ChatGPT tutorial

### 🧠 大模型/训练 (Model weights, training, fine-tuning)

- tensorflow/tensorflow
- pytorch/pytorch
- huggingface/transformers
- vllm-project/vllm
- ollama/ollama
- ultralytics/ultralytics
- ultralytics/yolov5
- keras-team/keras
- galilai-group/stable-pretraining
- open-compass/opencompass - evaluation
- thinkwee/AwesomeOPD - on-policy distillation
- zjunlp/LightThinker - thinking compression
- testtimescaling/testtimescaling.github.io - test-time scaling survey
- ELM-Research/ECG-Language-Models
- R-D-BioTech-Alaska/Qelm

### 🔍 RAG/知识库 (Vector DB, RAG, knowledge management)

- infiniflow/ragflow - RAG engine
- mem0ai/mem0 - memory layer
- run-llama/llama_index - document agent
- milvus-io/milvus - vector DB
- qdrant/qdrant - vector DB
- weaviate/weaviate - vector DB
- lancedb/lancedb - embedded retrieval
- meilisearch/meilisearch - search engine
- oramasearch/orama - search engine
- neuml/txtai - semantic search
- VectifyAI/PageIndex - vectorless RAG
- topoteretes/cognee - AI memory
- StarTrail-org/LEANN - RAG on personal device
- alibaba/zvec - in-process vector DB
- zilliztech/claude-context - code search MCP
- langchain4j/langchain4j - LLM framework
- thedotmack/claude-mem - persistent context
- safishamsi/graphify - knowledge graph
- Mintplex-Labs/anything-llm - local-first agent
- datawhalechina/hello-agents - agent tutorial (with RAG context)
- FlowiseAI/Flowise - RAG building
- headroomlabs-ai/headroom - compress RAG
- jeecgboot/JeecgBoot - AI low-code with knowledge base

## Step 3: Build the report

Now let me think about today's trends:

**Key observations from today's Trending (AI-related):**

1. **AI Agent tooling explosion** - Most trending projects are agent-related:
   - garrytan/gstack (+950) - Claude Code setup
   - Panniantong/Agent-Reach (+1194) - agent internet access
   - aws/agent-toolkit-for-aws (+243) - AWS MCP for agents
   - JCodesMore/ai-website-cloner-template (+1088) - agent website cloner
   - xbtlin/ai-berkshire (+1274) - multi-agent investing
   - calesthio/OpenMontage (+1754) - agentic video production

2. **Claude Code ecosystem dominance** - Many of today's hottest projects are Claude Code-related:
   - gstack, ai-berkshire, Agent-Reach, ai-website-cloner, OpenMontage, zhangxuefeng-skill

3. **AI Coding Agent tooling** - design.md (+2407) - design format for AI coding agents is the #1 AI trending project

4. **Document understanding for LLM** - MinerU (+960) - PDF/document to LLM-ready format

5. **Multi-agent frameworks** - ai-berkshire, OpenMontage using multiple agents

6. **MCP ecosystem** - AWS agent toolkit, claude-context (zilliztech) - Model Context Protocol growing

**Emerging trends:**
- "Agent harness" concept gaining traction (ECC, hermes-agent, nanobot, CowAgent)
- "Skill" files for AI agents (alchaincyf's zhangxuefeng-skill, ECC, gstack)
- Vectorless RAG / reasoning-based RAG (PageIndex, LEANN)

**Possible industry events:**
- Likely related to recent Claude Code updates or new model releases
- The "skill" pattern aligns with Anthropic's Claude Code skills feature
- Agent harness pattern is becoming a category

Let me write the report now. I should focus on:
- Highlighting the agent explosion
- Claude Code ecosystem
- MCP/skill patterns
- The "agent harness" pattern emergence

Let me also notice: the data shows the trending list is from 2026-06-27, and the topic search results show some repos like "Anil-matcha/Awesome-GPT-5.6-API-and-Prompts" which suggests GPT-5.6 is the latest from OpenAI at that time. Also ollama mentions "Kimi-K2.6, GLM-5.1, MiniMax" which suggests these are current models.

Now let me write a comprehensive report.

Let me also note the format requirements - the user wants:
- Chinese language
- Professional and concise
- Each project must include GitHub link
- 4 sections: 今日速览, 各维度热门项目, 趋势信号分析, 社区关注热点

Let me draft this now. I'll make sure to include the proper markdown formatting and links.

For the categorization, I need to put each project in its primary category. Let me finalize:

**🔧 AI 基础工具:**
- google-labs-code/design.md - format spec for AI agents (dev tool for agents)
- aws/agent-toolkit-for-aws - MCP servers
- tensorflow/tensorflow - ML framework
- pytorch/pytorch - ML framework
- huggingface/transformers - model framework
- vllm-project/vllm - inference engine
- ollama/ollama - local model runner
- langchain-ai/langchain - LLM framework
- scikit-learn/scikit-learn - ML library
- keras-team/keras - DL framework
- langchain4j/langchain4j - LLM framework Java
- 0xPlaygrounds/rig - Rust LLM framework
- ultralytics/ultralytics - YOLO
- ultralytics/yolov5 - YOLOv5
- langgenius/dify - workflow platform
- open-webui/open-webui - AI interface
- CherryHQ/cherry-studio - AI studio
- CopilotKit/CopilotKit - frontend for agents
- FlowiseAI/Flowise - visual AI builder
- PaddlePaddle/PaddleOCR - OCR
- tesseract-ocr/tesseract - OCR
- f/prompts.chat - prompt community
- firecrawl/firecrawl - web scraping API
- galilai-group/stable-pretraining - pretraining lib
- zilliztech/claude-context - code search MCP
- googleworkspace/cli - CLI with AI skills
- jackwener/OpenCLI - website to CLI
- raw-labs/mxcp - Model execution protocol
- LancerLab/croqtile - AI kernel DSL
- open-compass/opencompass - LLM evaluation
- ELM-Research/ECG-Language-Models - ECG-LM framework
- R-D-BioTech-Alaska/Qelm - Quantum LM
- netdata/netdata - observability (only marginally AI)

**🤖 AI 智能体/工作流:**
- calesthio/OpenMontage - agentic video production (+1754)
- xbtlin/ai-berkshire - multi-agent investing (+1274)
- Panniantong/Agent-Reach - agent internet access (+1194)
- garrytan/gstack - Claude Code setup (+950)
- aws/agent-toolkit-for-aws - MCP servers for agents (can be both)
- alchaincyf/zhangxuefeng-skill - skill for AI (+160)
- affaan-m/ECC - agent harness
- NousResearch/hermes-agent - agent
- Significant-Gravitas/AutoGPT - agent
- OpenHands/OpenHands - AI dev agent
- bytedance/deer-flow - super agent
- browser-use/browser-use - browser agent
- TauricResearch/TradingAgents - multi-agent trading
- shareAI-lab/learn-claude-code - claude code-like
- santifer/career-ops - Claude Code system
- zhayujie/CowAgent - AI assistant agent
- HKUDS/nanobot - lightweight agent
- Gitlawb/openclaude - open claude
- iOfficeAI/AionUi - cowork for CLIs
- JCodesMore/ai-website-cloner-template - website cloner (agent)
- HRI-EU/tulip_agent - autonomous agent
- siyuan-note/siyuan - PKM with AI features (sort of)

**📦 AI 应用:**
- opendatalab/MinerU - document parsing (+960)
- JCodesMore/ai-website-cloner-template - website cloner (+1088)
- Panniantong/Agent-Reach - internet access (+1194) - could be tool
- hugohe3/ppt-master - PPT generation
- xbtlin/ai-berkshire - investing framework (+1274) - could be agent
- calesthio/OpenMontage - video production (+1754) - could be agent
- f/prompts.chat - prompt community
- microsoft/ML-For-Beginners - ML tutorial
- Developer-Y/cs-video-courses - CS courses
- ageitgey/face_recognition - face recognition API
- deepfakes/faceswap - face swap
- OpenBB-finance/OpenBB - financial data platform
- ScrapeGraphAI/Scrapegraph-ai - AI scraper
- ZhuLinsen/daily_stock_analysis - LLM stock analysis
- Anil-matcha/Awesome-GPT-5.6-API-and-Prompts - prompts
- AmirMotefaker/Create-your-own-ChatGPT - ChatGPT tutorial
- thinkwee/AwesomeOPD - awesome list

**🧠 大模型/训练:**
- tensorflow/tensorflow
- pytorch/pytorch
- huggingface/transformers
- vllm-project/vllm
- ollama/ollama
- galilai-group/stable-pretraining
- thinkwee/AwesomeOPD
- zjunlp/LightThinker
- testtimescaling/testtimescaling.github.io
- ELM-Research/ECG-Language-Models
- R-D-BioTech-Alaska/Qelm

**🔍 RAG/知识库:**
- infiniflow/ragflow
- mem0ai/mem0
- run-llama/llama_index
- milvus-io/milvus
- qdrant/qdrant
- weaviate/weaviate
- lancedb/lancedb
- meilisearch/meilisearch
- oramasearch/orama
- neuml/txtai
- VectifyAI/PageIndex
- topoteretes/cognee
- StarTrail-org/LEANN
- alibaba/zvec
- zilliztech/claude-context
- thedotmack/claude-mem
- safishamsi/graphify
- Mintplex-Labs/anything-llm
- datawhalechina/hello-agents
- FlowiseAI/Flowise
- headroomlabs-ai/headroom
- jeecgboot/JeecgBoot
- PaddlePaddle/PaddleOCR
- tesseract-ocr/tesseract (could be RAG-related OCR)
- siyuan-note/siyuan - PKM (could be RAG)

Now let me finalize the report with these selections, picking 3-8 per category.

Looking at this carefully, I should focus on what's most relevant and trending today. The Trending list is the "today's focus" so I should weight that. Let me make sure I include the Trending AI projects prominently.

OK let me write the report now. I'll structure it well.
</think>
# AI 开源趋势日报 · 2026-06-27

---

## ① 今日速览

今日 GitHub 热榜几乎被 **AI Agent 工具链** 全面接管：上榜的 17 个项目中 9 个直接与 AI Agent 相关，且新增 star 普遍在 1000+ 级别。最值得关注的是 **Agent "skill / harness" 范式** 的爆发——以 Claude Code 生态为核心，大量项目围绕「skill 文件」「agent harness」「MCP server」展开基建；同日 **`google-labs-code/design.md`** 以 +2407 stars 登顶 AI 榜，将设计系统结构化喂给 coding agent，预示前端设计资产正在成为 agent 工作流的新输入层。

---

## ② 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / 开发工具）

| 项目 | Stars | 说明 |
|---|---|---|
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | ⭐0 (+2407 today) | 今日 AI 榜榜首。Google Labs 出品，给 coding agent 提供结构化的设计系统描述格式，让 AI 生成 UI 时能维持品牌一致性。 |
| [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | ⭐0 (+243 today) | AWS 官方 MCP servers / skills / plugins 集合，把 AWS 资源（EC2、S3、Lambda 等）暴露给任意 AI agent，标志着云厂商全面拥抱 MCP。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,952 | 仍是文本/视觉/音频/多模态模型定义的事实标准框架。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,062 | GPU 加速动态图训练框架，深度学习底层基座。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐84,486 | 高吞吐 LLM 推理引擎，Agent 后端首选。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,956 | 本地一键运行 Kimi-K2.6 / GLM-5.1 / DeepSeek / Qwen / Gemma 等开源模型。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐140,302 | 「Agent engineering platform」，LangChain 生态核心。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12,439 | Java 端 LLM 统一 API，集成 Quarkus / Spring Boot，是企业级 Java 团队的 agent 入口。 |

---

### 🤖 AI 智能体 / 工作流（Agent 框架 · 多智能体 · 自动化）

| 项目 | Stars | 说明 |
|---|---|---|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐0 (+1754 today) | 今日 Agent 榜最热。号称「全球首个开源 agentic 视频制作系统」，12 条管线、52 个工具、500+ agent skills，把 coding assistant 升级为视频工作室。 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | ⭐0 (+1274 today) | 基于 Claude Code 的价值投资研究框架，巴菲特/芒格/段永平/李录四大师方法论 + 多 Agent 对抗辩论，中文金融 Agent 的代表作品。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐0 (+1194 today) | 给 AI agent 提供「全网眼睛」：一条 CLI 即可读取/搜索 Twitter、Reddit、YouTube、GitHub、B 站、小红书，零 API 费用。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
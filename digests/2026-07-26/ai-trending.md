# AI 开源趋势日报 2026-07-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-26 03:31 UTC

---

<think>Let me analyze the data and generate a structured AI open source trends report.

**Step 1: Filtering**

From the Trending list (18 repos), let me identify AI-related ones:

1. `block/buzz` - "A hive mind communication platform" - Not clearly AI related, skipping
2. `alibaba/open-code-review` - AI code review tool with LLM Agent, OpenAI/Anthropic compatible ✅ AI
3. `citrolabs/ego-lite` - "The fastest browser for AI agents" ✅ AI
4. `ComposioHQ/awesome-claude-skills` - Claude Skills resources ✅ AI
5. `anthropics/claude-cookbooks` - Claude notebooks ✅ AI
6. `Automattic/harper` - Grammar checker, not AI ❌ Skip
7. `shiyu-coder/Kronos` - "A Foundation Model for the Language of Financial Markets" ✅ AI/ML model
8. `obra/superpowers` - "An agentic skills framework" ✅ AI
9. `Pumpkin-MC/Pumpkin` - Minecraft server, not AI ❌ Skip
10. `permissionlesstech/bitchat` - Bluetooth mesh chat, not AI ❌ Skip
11. `mattpocock/skills` - "Skills for Real Engineers. Straight from my .agents directory." ✅ AI related (agent skills)
12. `palmier-io/palmier-pro` - "macOS video editor built for AI" ✅ AI
13. `CoreBunch/Instatic` - Visual CMS, agentic self-hosted... borderline AI ✅ AI (agentic CMS)
14. `Lordog/dive-into-llms` - "《动手学大模型Dive into LLMs》" ✅ AI/LLM
15. `RyanCodrai/turbovec` - "A vector index built on TurboQuant" - This is a vector index, related to vector search but not specifically AI-focused... Actually vector indexes are commonly used in AI/RAG context. Let me consider... It's a vector index, borderline. I'll include it as it's in the vector search/embedding space.
16. `OtterMind/Chat2DB` - "AI-driven database tool" ✅ AI
17. `andrewyng/aisuite` - "Simple, unified interface to multiple Generative AI providers" ✅ AI
18. `affaan-m/ECC` - "The agent harness performance optimization system" ✅ AI

From the topic search results, all 80 are tagged with AI/ML topics (llm, vector-db, ai-agent, rag, ml, llm-model), so all are AI related.

**Step 2: Classification**

Let me categorize:

🔧 AI 基础工具 (frameworks, SDKs, inference engines, dev tools, CLI):
- `andrewyng/aisuite` - Unified interface to multiple AI providers (SDK)
- `firecrawl/firecrawl` - Web scraping API for AI
- `langgenius/dify` - AI development platform
- `langchain-ai/langchain` - LLM application framework
- `langchain4j/langchain4j` - Java LLM library
- `open-webui/open-webui` - AI Interface
- `vllm-project/vllm` - LLM inference engine
- `huggingface/transformers` - ML framework
- `alibaba/zvec` - Vector database (in-process)
- `Oramasearch/orama` - Search engine
- `CopilotKit/CopilotKit` - Frontend stack for agents
- `anthropics/claude-cookbooks` - Claude usage examples
- `andrewyng/aisuite` 
- `RyanCodrai/turbovec` - vector index
- `0xPlaygrounds/rig` - Rust LLM framework

🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent):
- `NousResearch/hermes-agent` - Agent
- `Significant-Gravitas/AutoGPT` - AutoGPT
- `browser-use/browser-use` - Browser automation for agents
- `citrolabs/ego-lite` - Browser for AI agents
- `OpenHands/OpenHands` - AI-Driven Development
- `obra/superpowers` - Agentic skills framework
- `affaan-m/ECC` - Agent harness optimization
- `mattpocock/skills` - Skills for engineers (agent skills)
- `santifer/career-ops` - AI job search
- `Panniantong/Agent-Reach` - AI agent vision
- `ZhuLinsen/daily_stock_analysis` - Stock analysis agent
- `CherryHQ/cherry-studio` - AI productivity studio
- `HKUDS/nanobot` - Lightweight AI agent
- `zhayujie/CowAgent` - AI assistant agent
- `hugohe3/ppt-master` - AI PPT generator
- `iOfficeAI/AionUi` - Cowork app
- `Gitlawb/openclaude` - Claude alternative
- `googleworkspace/cli` - Google Workspace CLI with AI
- `esengine/DeepSeek-Reasonix` - DeepSeek coding agent
- `HKUDS/Vibe-Trading` - Trading agent
- `ComposioHQ/awesome-claude-skills` - Claude skills
- `Eigenwise/atomic-agents` - AI agents building

📦 AI 应用 (specific products, vertical solutions):
- `harry0703/MoneyPrinterTurbo` - AI video generation
- `palmier-io/palmier-pro` - AI video editor
- `OtterMind/Chat2DB` - AI database tool
- `alibaba/open-code-review` - AI code review
- `Mintplex-Labs/anything-llm` - Local AI assistant
- `ScrapeGraphAI/Scrapegraph-ai` - AI scraper
- `Samchon/nestia` - NestJS + AI chatbot
- `CoreBunch/Instatic` - AI agentic CMS (borderline)
- `OpenBB-finance/OpenBB` - Open data platform for AI agents
- `PaddlePaddle/PaddleOCR` - OCR for AI

🧠 大模型/训练 (model weights, training frameworks, fine-tuning):
- `shiyu-coder/Kronos` - Foundation model for financial markets
- `tensorflow/tensorflow` - ML framework
- `pytorch/pytorch` - DL framework
- `ollama/ollama` - Local model runner
- `jingyaogong/minimind` - Train small LLM
- `keras-team/keras` - Deep learning
- `microsoft/qlib` - Quant investment platform
- `ultralytics/ultralytics` - YOLO
- `roboflow/supervision` - Computer vision
- `Picovoice/picollm` - On-device LLM
- `Event-AHU/Medical_Image_Analysis` - Medical image foundation models
- `skyzh/tiny-llm` - LLM inference course
- `Lordog/dive-into-llms` - LLM learning

🔍 RAG/知识库 (vector databases, retrieval augmentation, knowledge management):
- `meilisearch/meilisearch` - Search engine with AI
- `run-llama/llama_index` - Document agent and OCR
- `milvus-io/milvus` - Vector database
- `VectifyAI/PageIndex` - Vectorless RAG
- `qdrant/qdrant` - Vector database
- `topoteretes/cognee` - AI memory platform
- `NirDiamant/RAG_Techniques` - RAG techniques
- `weaviate/weaviate` - Vector database
- `StarTrail-org/LEANN` - RAG on personal device
- `lancedb/lancedb` - Embedded retrieval
- `Shubhamsaboo/awesome-llm-apps` - RAG Apps
- `thedotmack/claude-mem` - Persistent context for agents
- `infiniflow/ragflow` - RAG engine
- `headroomlabs-ai/headroom` - Token compression for RAG
- `mem0ai/mem0` - Memory layer for AI agents
- `FlowiseAI/Flowise` - Visual AI agents/RAG
- `langchain-ai/langgraph` - Agent framework (also RAG related)
- `f/prompts.chat` - Prompt sharing (knowledge)
- `Graphify-Labs/graphify` - Knowledge graph for codebases

Learning/resource repos (could be separate category or include):
- `microsoft/ML-For-Beginners`
- `microsoft/AI-For-Beginners`
- `genieincodebottle/generative-ai`
- `thinkwee/AgentsMeetRL`
- `llm-jp/awesome-japanese-llm`
- `thinkwee/AwesomeOPD`
- `chrisliu298/awesome-llm-unlearning`
- `RiccardoBiosas/awesome-MLSecOps`
- `open-compass/opencompass`
- `tesseract-ocr/tesseract`
- `JuliaLang/julia` (general purpose lang but ML tagged)
- `netdata/netdata` (observability tagged ML)
- `scikit-learn/scikit-learn`
- `siyuan-note/siyuan` (note-taking with AI agent tag)

These can be folded into the appropriate categories or mentioned in a "其他" note.

Now let me think about today's trending signals:

Key observations:
1. **Agent skills/skits** are dominating - ECC, superpowers, mattpocock/skills, ComposioHQ/awesome-claude-skills, AionUi all point to this trend
2. **Agent harness optimization** - ECC is a hot new trending project
3. **Financial markets AI** - Kronos (foundation model for financial markets) is trending
4. **AI browser/automation** - ego-lite (browser for AI agents)
5. **Claude Skills ecosystem** - Multiple skills repos trending
6. **AI-native development** - tools built around Claude Code, Codex, etc.

Emerging tech stacks:
- **Agent harness/skills framework** - a new category forming
- **Code review with LLM agents** (alibaba/open-code-review)

Today's standout trend: The "agent skills" ecosystem is exploding. Multiple repos focused on Claude Code/Codex skills, agent performance optimization, and skills frameworks are trending simultaneously. This suggests the industry is moving beyond basic agent frameworks into specialized "agent enhancement" tools.

Now let me write the report.</think>

# 📊 AI 开源趋势日报 · 2026-07-26

---

## 🔍 第一步：筛选结果

**Trending 榜单中保留的 AI 相关项目**（15/18）：
open-code-review、ego-lite、awesome-claude-skills、claude-cookbooks、Kronos、superpowers、skills（mattpocock）、palmier-pro、Instatic、dive-into-llms、turbovec、Chat2DB、aisuite、ECC

**已剔除非 AI 项目**：buzz（通讯平台）、harper（语法检查器）、Pumpkin（MC 服务器）、bitchat（蓝牙聊天）

---

## 📝 第二步 & 第三步：分类趋势报告

### 1. 今日速览

今日 AI 开源生态呈现明显的 **"Agent Harness / Skills 生态大爆发"** 趋势——围绕 Claude Code、Codex、Gemini CLI 等编码 Agent 的技能框架、记忆系统与性能优化工具密集登榜。**affaan-m/ECC**（Agent Harness 优化系统）和 **obra/superpowers**（Agentic 技能框架）领跑增量榜。同时，金融领域专用基础模型 **Kronos** 和面向 AI Agent 的浏览器 **ego-lite** 标志着 AI 在垂直行业与基础设施层面的纵深推进。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | ⭐17.7k (+77 today) | 统一多 Provider 的生成式 AI 接口 SDK，极简切换 OpenAI/Anthropic/Google 等模型 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | ⭐new (+431 today) | 阿里开源的 LLM Agent 代码审查工具，混合确定性流水线 + AI，OpenAI/Anthropic 兼容 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | ⭐23.8k (+132 today) | Claude 官方 Cookbook 集合，展示 Notebook 形式的实战用法 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐87.1k | 高吞吐 LLM 推理与服务引擎，社区部署事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163k | 多模态模型定义框架，覆盖训练/推理全流程 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142k | 当下最主流的 Agent 工程化平台 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.0k | Rust 语言 LLM 应用框架，面向高性能生产环境 |
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | ⭐new (+86 today) | 基于 TurboQuant 的高性能向量索引，Rust+Python 双绑定 |

#### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐233k (+377 today) | **今日爆款**：Agent Harness 性能优化系统，集成技能、本能与记忆，专为 Claude Code / Codex / Cursor 优化 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐new (+479 today) | Agentic Skills 框架与软件开发方法论，让 Agent 像专业工程师一样工作 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐new (+1740 today) | 来自真实工程师 `.agents` 目录的实战 Agent Skills 集合 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | ⭐new (+577 today) | Claude Skills 精选资源，定制 Claude AI 工作流的入口 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐220k | "与用户共同成长"的 Agent，强调长期自适应能力 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | ⭐new (+986 today) | **今日黑马**：专为 AI Agent 设计的极速浏览器，支持共享登录态，零成本零配置 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐186k | 经典自主 Agent 范式，奠定 LLM Agent 开源生态 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107k | 让网站对 AI Agent 可访问，浏览器自动化标杆 |

#### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | ⭐new (+319 today) | **垂直大模型**：首个面向金融市场的开源基础模型，"金融语言"的预训练模型 |
| [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | ⭐new (+360 today) | AI 驱动的数据库/SQL GUI 客户端，支持十余种数据库 |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | ⭐new (+412 today) | macOS 平台原生 AI 视频编辑器 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐99k | 一键生成高清短视频的 AI 工作流，自动化内容生产标杆 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐41k | AI 把文档/主题转化为原生 PowerPoint，含图表、动画、语音旁白 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐71k | 面向分析师/量化/AI Agent 的开源金融数据平台 |

#### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐54k | 2 小时从零训练 64M 小参数 LLM，入门级训练教学标杆 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177k | 本地运行 DeepSeek/Qwen/Kimi/MiniMax 等模型的国民级工具 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐197k | 经典 ML 框架，仍是工业级训练基础设施 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102k | 研究与工业界事实标准的深度学习框架 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐60k | YOLO26/YOLO11 等 SOTA 视觉模型全家桶 |
| [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | ⭐new (+408 today) | 中文社区《动手学大模型》编程实践教程，配套 Jupyter Notebook |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐86k | 100+ 语言的 OCR 工具链，把图片/PDF 接入 LLM 的桥梁 |

#### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐86k | 融合 RAG + Agent 能力的企业级上下文引擎 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐89k | 跨会话持久化上下文，为 Agent 提供长期记忆与自动注入 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45k | 云原生向量数据库，大规模 ANN 检索的事实标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34k | 高性能向量搜索引擎，Rust 实现，生产级 RAG 首选 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51k | 文档 Agent 与 OCR 平台，RAG 工程化主力 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35k | 无向量、基于推理的 RAG 文档索引新范式 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐13k | 97% 存储节省的个人设备 RAG，MLsys2026 收录 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62k | AI Agent 的通用记忆层，跨会话长期持久化 |

---

### 3. 趋势信号分析

今日 GitHub AI 板块呈现出 **从"Agent 框架竞赛"向"Agent Harness 增强"的范式跃迁**。在 LangChain/AutoGPT/OpenHands 等基础 Agent 框架已趋成熟后，社区关注焦点明显转向了 **Agent 上层"能力增强层"**——以 `affaan-m/ECC`（Harness 优化）、`obra/superpowers`（Agentic Skills 方法论）、`mattpocock/skills`、`ComposioHQ/awesome-claude-skills` 为代表的"Skills 生态"集体登榜，反映出 Claude Code / Codex / Cursor 这类编码 Agent 正成为新一代开发者操作系统，围绕它们的技能、记忆、安全、上下文管理工具正在形成独立的开源垂直赛道。

同时，**行业垂直大模型** 持续走热：`shiyu-coder/Kronos`（金融市场基础模型）与 `PaddleOCR`（文档 OCR）、`OpenBB`（金融数据）的密集出现，印证了通用 LLM 之后的 **"领域原生模型 + 领域原生工具链"** 趋势。**AI-native 浏览器**（`ego-lite`、`browser-use`）作为 Agent 感知物理互联网的关键基础设施，正吸引越来越多关注，预示着"Agent-as-a-User"的产品形态开始落地。这些信号共同表明：2026 年中的开源 AI 主战场，已从"训练更好的模型"转移到 **"构建更好用的 Agent 工作流"**。

---

### 4. 社区关注热点

- 🏆 **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — Agent Harness 性能优化的标志性项目，集成技能/本能/记忆/安全，是 Claude Code 类编码 Agent 增强层的新范式，建议重点研究其 Harness 架构设计。
- 🌐 **[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** — 专为 AI Agent 设计的浏览器，共享登录态不打扰用户，解决了 Agent 自动化中最棘手的身份与会话问题。
- 📈 **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 首个面向金融市场的开源基础模型，预示着"领域原生 LLM"的爆发节点，对 Quant/Fintech 开发者极具参考价值。
- 🧠 **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 跨会话持久化记忆，AI Agent"长期上下文"问题的代表性方案，与 mem0 共同代表 RAG/记忆层演进方向。
- 🛠 **[obra/superpowers](https://github.com/obra/superpowers)** + **[mattpocock/skills](https://github.com/mattpocock/skills)** — Skills 框架与实战技能集合，是构建个人/团队编码 Agent 知识库的最佳实践起点。

---

*报告生成时间：2026-07-26 ｜ 数据来源：GitHub Trending + GitHub Search API（topic: llm / vector-db / ai-agent / rag / ml / llm-model）*

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
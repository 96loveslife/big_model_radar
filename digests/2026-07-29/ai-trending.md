# AI 开源趋势日报 2026-07-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-29 03:13 UTC

---

<think>Let me analyze the data carefully and create a structured AI open-source trend report.

**Step 1: Filter AI-related projects**

From Trending (13 repos):
1. pascalorg/editor - 3D architectural editor - NOT AI
2. jenkinsci/jenkins - CI/CD automation server - NOT AI
3. moeru-ai/airi - Self-hosted AI companion (Grok Companion, voice chat, AI agent) - AI ✓
4. andrewyng/aisuite - Unified interface to multiple GenAI providers - AI ✓
5. affaan-m/ECC - Agent harness performance optimization system - AI ✓
6. hello245m/free-stockdb - Stock data local engine - NOT AI (quantitative but not AI)
7. huggingface/speech-to-speech - Build local voice agents - AI ✓
8. virgiliojr94/book-to-skill - Turn PDF books into Claude Code skills - AI ✓
9. opengeos/GeoLibre - GIS platform - NOT AI
10. paperswithbacktest/awesome-systematic-trading - Systematic trading list - NOT AI
11. microsoft/agent-governance-toolkit - AI Agent governance toolkit - AI ✓
12. yorukot/superfile - Terminal file manager - NOT AI
13. bradautomates/claude-video - Give Claude video watching ability - AI ✓

AI-related from Trending: airi, aisuite, ECC, speech-to-speech, book-to-skill, agent-governance-toolkit, claude-video (7 repos)

From AI topic search (79 repos), most are clearly AI-related. Let me filter and categorize them.

**Step 2: Categorize**

🔧 AI 基础工具 (Frameworks, SDK, Inference engines, Dev tools, CLI):
- andrewyng/aisuite - Unified GenAI provider interface
- ollama/ollama - Local model runner
- huggingface/transformers - ML framework
- langchain-ai/langchain - Agent engineering platform
- Firecrawl/firecrawl - Web scraping API for AI
- langchain4j/langchain4j - Java LLM library
- The-Pocket/PocketFlow - 100-line LLM framework
- 0xPlaygrounds/rig - Rust LLM framework
- skyzh/tiny-llm - LLM inference serving on Apple Silicon
- googleworkspace/cli - CLI with AI agent skills
- mem0ai/mem0 - Memory layer for AI agents
- headroomlabs-ai/headroom - Token compression for agents
- opencompass/opencompass - LLM evaluation
- cherry-studio/cherry-studio - AI productivity studio
- open-webui/open-webui - AI interface
- CopilotKit/CopilotKit - Frontend for agents
- meilisearch/meilisearch - Search engine
- netdata/netdata - AI-powered observability

🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent):
- moeru-ai/airi - Self-hosted AI companion
- affaan-m/ECC - Agent harness optimization
- microsoft/agent-governance-toolkit - Agent governance
- bradautomates/claude-video - Video understanding for Claude
- virgiliojr94/book-to-skill - Book to AI skill converter
- NousResearch/hermes-agent - Agent that grows with you
- Significant-Gravitas/AutoGPT - Autonomous AI agent
- browser-use/browser-use - Web automation for agents
- shareAI-lab/learn-claude-code - Bash-based agent harness
- Panniantong/Agent-Reach - Agent internet access
- HKUDS/nanobot - Self-hosted personal AI agent
- zhayujie/CowAgent - Super AI assistant
- HKUDS/Vibe-Trading - Trading agent
- Eigenwise/atomic-agents - Atomic AI agents
- iOfficeAI/AionUi - Cowork for CLI agents
- Gitlawb/openclaude - Open Claude coding agent
- JuliusBrussee/caveman - Token-saving Claude skill
- thedotmack/claude-mem - Persistent context for agents
- thinkwee/AgentsMeetRL - Agentic RL resources

📦 AI 应用 (Specific applications, vertical solutions):
- moeru-ai/airi - Also an application
- huggingface/speech-to-speech - Voice agent builder
- harry0703/MoneyPrinterTurbo - AI video generation
- hugohe3/ppt-master - AI PowerPoint generator
- ZhuLinsen/daily_stock_analysis - AI stock analysis
- Shubhamsaboo/awesome-llm-apps - Collection of LLM apps
- santifer/career-ops - AI job search
- siyuan-note/siyuan - Knowledge management with AI
- juliusbrussee/caveman - Claude token savings
- Insurance: 
- OpenBB-finance/OpenBB - Open data platform for AI agents

🧠 大模型/训练 (Model weights, training frameworks, fine-tuning):
- huggingface/transformers - Model framework
- jingyaogong/minimind - Train 64M LLM from scratch
- pytorch/pytorch - Deep learning framework
- tensorflow/tensorflow - ML framework
- jax/jax - (not in list)
- rasbt/LLMs-from-scratch - LLM from scratch
- ultralytics/ultralytics - YOLO models
- keras-team/keras - Deep learning
- scikit-learn/scikit-learn - ML library
- microsoft/ML-For-Beginners - ML course
- tesseract-ocr/tesseract - OCR engine
- roboflow/supervision - Computer vision tools
- microsft/qlib - Quant AI platform
- graphify - Code knowledge graph

🔍 RAG/知识库 (Vector DB, retrieval augmented, knowledge management):
- infiniflow/ragflow - RAG engine
- run-llama/llama_index - Document agent platform
- milvus-io/milvus - Vector database
- langchain-ai/langgraph - Build resilient agents (could be agent)
- Mem0ai/mem0 - Memory layer (could be RAG)
- Mintplex-Labs/anything-llm - Local LLM app
- FlowiseAI/Flowise - Visual AI agent builder
- datawhalechina/hello-agents - Agent tutorial
- qdrant/qdrant - Vector database
- weaviate/weaviate - Vector database
- alibaba/zvec - In-process vector database
- lancedb/lancedb - Embedded vector DB
- oramasearch/orama - Search engine
- neuml/txtai - Semantic search
- StarTrail-org/LEANN - Storage-efficient RAG
- VectifyAI/PageIndex - Vectorless RAG
- topoteretes/cognee - AI memory platform
- langgenius/dify - Agentic workflows, RAG pipelines
- NirDiamant/RAG_Techniques - RAG techniques
- Graphify-Labs/graphify - Code knowledge graph

Let me organize the report now. I need to make sure I have a good representative selection for each category.

Let me think about the highlights for the day:

1. Agent ecosystem explosion - Many repos trending are about agents, agent harnesses, agent tools
2. Claude Code skills/plugins are trending - book-to-skill, caveman, claude-mem, ECC, learn-claude-code
3. Voice agents - airi, speech-to-speech
4. Governance/safety - agent-governance-toolkit (OWASP Agentic Top 10)
5. Video understanding - claude-video

Let me prepare the final report.</think>

# 📊 AI 开源趋势日报 · 2026-07-29

---

## 第一步：AI 相关性筛选

**Trending 榜单过滤结果**（13 → 7 个 AI 相关项目）

| 项目 | 判定 | 理由 |
|------|------|------|
| `moeru-ai/airi` | ✅ AI | 自托管 AI 伴侣，支持实时语音/游戏 |
| `andrewyng/aisuite` | ✅ AI | 多家 GenAI 厂商统一接口 |
| `affaan-m/ECC` | ✅ AI | Agent 性能优化系统 |
| `huggingface/speech-to-speech` | ✅ AI | 本地语音 Agent 构建 |
| `virgiliojr94/book-to-skill` | ✅ AI | PDF → Claude Code Skill |
| `microsoft/agent-governance-toolkit` | ✅ AI | AI Agent 治理工具 |
| `bradautomates/claude-video` | ✅ AI | 给 Claude 看视频的能力 |
| `pascalorg/editor`, `jenkinsci/jenkins`, `hello245m/free-stockdb`, `opengeos/GeoLibre`, `paperswithbackback/awesome-systematic-trading`, `yorukot/superfile` | ❌ 略去 | 3D 建模、CI/CD、量化数据、GIS、终端文件管理器等，与 AI 无直接关联 |

---

## 今日速览

> **今日 AI 开源生态被 Agent 生态全面点燃。** Trending 榜 7 个 AI 项目中 5 个与 Agent 强相关，"Agent Harness"（Agent 执行框架/工具链）从抽象概念进入工具爆发期——Claude Code 周边插件（skill 转换、token 压缩、记忆层、视频理解）密集登榜。Microsoft 同期发布 Agent 治理工具呼应 OWASP Agentic Top 10，行业正从"造 Agent"转向"治理 Agent"。同时，Hugging Face 推动本地语音 Agent 平民化，airi 项目展示 Self-Hosted AI 伴侣的可行性。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架/SDK/CLI/开发工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [ollama/ollama](https://github.com/oollama/ollama) | 177,145 | — | 本地大模型推理引擎标杆，已支持 Kimi-K2.6、GLM-5.2、DeepSeek 等十余种模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,080 | — | 多模态模型定义与训练的事实标准框架 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,830 | — | Agent 工程化平台，从原型到生产的核心工具 |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | — | +62 | 今日登榜！统一多家生成式 AI 厂商的极简接口，OpenAI 兼容协议 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,717 | — | Java 生态 LLM 库，Spring Boot / Quarkus 友好，企业级选型 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,084 | — | Rust 写 LLM 应用，模块化、高性能、低资源占用 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,421 | — | 在 Apple Silicon 上从零实现 mini-vLLM + Qwen，推理工程实战课 |
| [opencompass/opencompass](https://github.com/open-compass/opencompass) | 7,242 | — | 大模型评测平台，覆盖 100+ 数据集，模型选型必备 |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 234,918 | +636 | 今日登榜！Agent Harness 性能优化系统，支持 Claude Code/Codex/Cursor 全家桶 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | — | +797 | 今日登榜！自托管 AI 伴侣，实时语音 + Minecraft/Factorio 游戏，目标 Neuro-sama |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | — | +988 | 今日趋势第一！给 Claude 装上视频理解能力：下载、抽帧、转录一键完成 |
| [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | — | +46 | 微软官方出品，Agent 治理与零信任安全，覆盖 OWASP Agentic Top 10 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | — | +423 | 今日登榜！任意技术书 PDF → Claude Code Skill，知识资产化工具 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 221,964 | — | 持续学习型 Agent，"与你共同成长的 Agent" |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 72,518 | — | 从 0 到 1 手写 nano Claude Code 风格 Agent Harness |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,740 | — | 自主 AI Agent 经典原型，Agent 运动符号性项目 |

### 📦 AI 应用（具体应用产品、垂直场景）

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | — | +227 | 今日登榜！用开源模型搭建本地语音 Agent，Voice Agent 平民化 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 99,848 | — | 一键生成高清短视频的 AI 自动化工作流 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 41,668 | — | AI 把文档/主题生成原生 PowerPoint（非模板填充） |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 59,432 | — | LLM 驱动的多市场股票分析，支持零成本定时运行 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,100 | — | 聚合 300+ 助手的 AI 生产力 Studio |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 93,971 | — | "穴居人语法"Claude Skill，砍掉 65% token，灵感级开源 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,134 | — | 友好的本地 AI 界面，Ollama/OpenAI 全兼容 |

### 🧠 大模型 / 训练（模型权重、训练框架、微调）

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 196,573 | — | 经典 ML 框架，生态完备 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,047 | — | 深度学习事实标准，GPU 加速首选 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,067 | — | 从 PyTorch 零实现 ChatGPT 式 LLM，经典教程 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 53,972 | — | 2 小时从 0 训练 64M 小参数 LLM，中文圈现象级教程 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59,985 | — | YOLO26/11/v8 计算机视觉全家桶 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | 66,807 | — | 经典 ML 算法库，工业/教学首选 |
| [keras-team/keras](https://github.com/keras-team/keras) | 64,187 | — | 面向人类的深度学习 API |
| [microsoft/qlib](https://github.com/microsoft/qlib) | 46,767 | — | AI 量化投资平台，集成 RD-Agent 自动化研究 |

### 🔍 RAG / 知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [langgenius/dify](https://github.com/langgenius/dify) | 150,602 | — | Agentic 工作流 + RAG 管道一站式协作平台 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 157,580 | — | 为 AI Agent 打造的 Web 搜索/爬取 API |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,281 | — | 领先的开源 RAG 引擎，融合 Agent 能力 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,178 | — | 文档 Agent 与 OCR 领导平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,404 | — | 云原生高性能向量数据库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,632 | — | 大规模向量搜索引擎，Rust 编写 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 28,858 | — | 高级 RAG 技术合集，含笔记本教程 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 38,370 | — | 构建有状态、可恢复的 Agent 工作流 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 15,301 | — | 阿里开源轻量级进程内向量数据库，C++ 极致性能 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61,963 | — | AI Agent 通用记忆层，跨会话持久化 |

---

## 趋势信号分析

**Agent Harness 生态爆发，从"造 Agent"进入"工具化 Agent"深水区。** 今日 Trending 中 `claude-video`(+988) 、`airi`(+797) 、`ECC`(+636) 、`book-to-skill`(+423) 四个项目共同指向一个信号：**Agent 已经从概念验证阶段过渡到开发者工具链军备竞赛**。围绕 Claude Code / Codex / Cursor 的"周边工具"形成了一类新的细分品类——Skill 转换器、记忆层、Token 压缩、安全治理、视频理解插件——GitHub 上称作 "Agent Harness" 的范式正在被社区具象化。

**新方向值得关注：本地语音 Agent 与 Agent 治理。** Hugging Face `speech-to-speech`(+227) 显示出 Voice Agent 正在从云端 API 走向本地开源模型部署；而 Microsoft `agent-governance-toolkit` 同步出现呼应了 OWASP 近期发布的 Agentic AI Top 10 安全清单，**"AI 可控性"在企业级落地中正变成刚需**。这两条线分别对应"怎么用 Agent"和"怎么管 Agent"。

**与近期大模型行业事件的关联：** 议题搜索中 ollama 已默认支持 Kimi-K2.6、GLM-5.2、DeepSeek 等国产/开源模型，配合 Microsoft Agent 治理工具——可推断社区正在预演"国产大模型 + 本地推理 + Agent 工具链"的去中心化栈，以应对主流闭源 API 策略变化。

---

## 社区关注热点 🔥

- **🎬 [bradautomates/claude-video](https://github.com/bradautomates/claude-video)**（+988，今日趋势第一）——首次将任意视频作为 Claude 输入，极大拓展了 LLM 多模态边界，是 Agent 工具链"黑客式创意"的典型代表
- **🤖 [affaan-m/ECC](https://github.com/affaan-m/ECC)**（+636）——首个跨 IDE Agent Harness 优化框架，Claude Code/Codex/Cursor 通用，预示 Agent 工具开始"标准化"
- **🧸 [moeru-ai/airi](https://github.com/moeru-ai/airi)**（+797）——Self-Hosted AI 伴侣 + 游戏联动，验证了"个人 AI Companion"作为新应用形态的可行性
- **🛡️ [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit)**——微软官方 Agent 安全治理方案，企业接入 Agent 前的必读清单
- **📚 [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill)**（+423）——把纸质知识资产转成 Agent Skill，反映"知识工程化"正成为 AI 落地刚需

---

*报告基于 2026-07-29 GitHub Trending + AI Topic 搜索数据，共筛选 7 个 Trending AI 项目 + 79 个主题项目。*

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
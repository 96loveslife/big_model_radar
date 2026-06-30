# AI 开源趋势日报 2026-06-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-30 04:06 UTC

---

<think>Let me analyze the data carefully and produce a structured AI open source trends daily report.

First, let me filter the Trending list (15 repos) for AI/ML relevance:

1. **simplex-chat/simplex-chat** - Messaging network, NOT AI related. Skip.
2. **msitarzewski/agency-agents** - AI agency with specialized agents. AI related. ✅
3. **cupy/cupy** - NumPy & SciPy for GPU. This is GPU computing library used heavily in ML/AI but is a general GPU computing tool. It's AI infrastructure-adjacent. I'll include it as AI基础工具.
4. **altic-dev/FluidVoice** - macOS offline dictation (voice to text). Uses local AI/ASR. AI应用. ✅
5. **soxoj/maigret** - OSINT tool for collecting dossiers. NOT AI related. Skip.
6. **commaai/openpilot** - Operating system for robotics/driver assistance. This involves AI/computer vision for autonomous driving. AI应用. ✅
7. **ripienaar/free-for-dev** - List of SaaS free tiers. NOT AI specific. Skip.
8. **logto-io/logto** - Authentication infrastructure, mentions "for SaaS and AI apps" but it's general auth. NOT primarily AI. Skip.
9. **xbtlin/ai-berkshire** - AI value investing research framework. AI应用. ✅
10. **browser-use/video-use** - Edit videos with coding agents. AI应用. ✅
11. **Unclecheng-li/VulnClaw** - AI Agent + MCP for penetration testing. AI智能体. ✅
12. **0xNyk/council-of-high-intelligence** - Multi-LLM deliberation. AI应用/智能体. ✅
13. **HKUDS/Vibe-Trading** - Personal Trading Agent. AI智能体/应用. ✅
14. **refactoringhq/tolaria** - Markdown knowledge base desktop app. NOT AI. Skip.
15. **veracrypt/VeraCrypt** - Disk encryption. NOT AI. Skip.

From the topic search (80 repos), I need to filter and organize by category:

**AI 基础工具 (Frameworks, SDKs, Inference, Dev Tools, CLI):**
- ollama/ollama - LLM runtime (175k stars)
- huggingface/transformers - ML framework (162k)
- langchain-ai/langchain - Agent engineering platform (140k)
- langgenius/dify - Agentic workflow dev platform (147k)
- firecrawl/firecrawl - Web scraping API for AI (141k)
- vllm-project/vllm - LLM inference engine (84k)
- hiyouga/LlamaFactory - Fine-tuning framework (72k)
- affaan-m/ECC - Agent harness optimization (223k) - wait this seems unrealistically high, but I'll use the given numbers
- NousResearch/hermes-agent - Agent that grows (205k)
- Significant-Gravitas/AutoGPT - AI for everyone (185k)
- CopilotKit/CopilotKit - Frontend for agents (35k)
- 0xPlaygrounds/rig - LLM apps in Rust (7.7k)
- samchon/nestia - NestJS Helper + AI (2.1k)
- googleworkspace/cli - CLI with AI skills (29k)
- raw-labs/mxcp - Data-to-AI Infrastructure (70)
- LancerLab/croqtile - AI-native Kernel DSL (34)
- acon96/home-llm - Local LLM for Home Assistant (1.3k)

**AI 智能体/工作流 (Agent Frameworks, Automation, Multi-agent):**
- OpenHands/OpenHands - AI-Driven Development (78k)
- bytedance/deer-flow - Long-horizon SuperAgent (75k)
- shareAI-lab/learn-claude-code - nano claude code agent (69k)
- santifer/career-ops - AI job search (56k)
- ZhuLinsen/daily_stock_analysis - LLM stock analysis (51k)
- CherryHQ/cherry-studio - AI productivity (47k)
- Panniantong/Agent-Reach - AI agent internet access (46k)
- zhayujie/CowAgent - Super AI assistant (45k)
- HKUDS/nanobot - Lightweight AI agent (44k)
- Gitlawb/openclaude - AI agent (29k)
- iOfficeAI/AionUi - Cowork app for AI CLIs (29k)
- jackwener/OpenCLI - CLI for AI agents (25k)
- hugohe3/ppt-master - AI PowerPoint generator (34k)
- msitarzewski/agency-agents - AI agency (trending +1425)
- browser-use/browser-use - Make websites accessible for AI (101k)
- Eigenwise/atomic-agents - Build agents atomically (6k)

**AI 应用 (Specific applications, vertical solutions):**
- open-webui/open-webui - AI Interface (143k)
- f/prompts.chat - ChatGPT prompts (164k)
- ScrapeGraphAI/Scrapegraph-ai - Python scraper based on AI (27k)
- netdata/netdata - AI-powered observability (79k)
- OpenBB-finance/OpenBB - Financial data for AI (69k)
- siyuan-note/siyuan - PKM with AI (44k) - this is more general PKM
- altic-dev/FluidVoice - Offline dictation (trending +830)
- xbtlin/ai-berkshire - AI value investing (trending +1386)
- browser-use/video-use - Video editing with agents (trending +967)
- 0xNyk/council-of-high-intelligence - Multi-LLM deliberation (trending +331)
- HKUDS/Vibe-Trading - Trading Agent (trending +839)
- path waycom/llm-app - RAG templates (59k) - this is more RAG
- Developer-Y/cs-video-courses - CS video courses (82k) - NOT AI specific, skip

**大模型/训练 (Model weights, training frameworks, fine-tuning):**
- jingyaogong/minimind - Train 64M LLM from scratch (52k)
- llm-jp/awesome-japanese-llm - Japanese LLMs (1.4k)
- Picovoice/picollm - On-device LLM (313)
- R-D-BioTech-Alaska/Qelm - Quantum Enhanced LM (27)
- AmirMotefaker/Create-your-own-ChatGPT - DIY ChatGPT (23)
- open-compass/opencompass - LLM evaluation (7.1k)
- cupy/cupy - GPU computing (this is more infrastructure)

**RAG/知识库 (Vector DB, retrieval, knowledge management):**
- thedotmack/claude-mem - Persistent context for agents (85k)
- PaddlePaddle/PaddleOCR - OCR for AI (84k)
- infiniflow/ragflow - RAG engine (83k)
- safishamsi/graphify - Code knowledge graph (74k)
- datawhalechina/hello-agents - Agents tutorial (62k)
- Mintplex-Labs/anything-llm - Local-first LLM (62k)
- mem0ai/mem0 - Memory layer for agents (59k)
- FlowiseAI/Flowise - Visual AI agent builder (54k)
- headroomlabs-ai/headroom - Token compression (53k)
- run-llama/llama_index - Document agent (50k)
- jeecgboot/JeecgBoot - AI low-code platform (46k)
- meilisearch/meilisearch - Search engine (58k)
- milvus-io/milvus - Vector DB (45k)
- VectifyAI/PageIndex - Vectorless RAG (33k)
- qdrant/qdrant - Vector DB (32k)
- topoteretes/cognee - AI memory platform (25k)
- weaviate/weaviate - Vector DB (16k)
- StarTrail-org/LEANN - RAG on Everything (12k)
- alibaba/zvec - In-process vector DB (12k)
- langchain4j/langchain4j - Java LLM library (12k)
- lancedb/lancedb - Embedded retrieval (10k)
- oramasearch/orama - Search engine (10k)
- oceanbase/oceanbase - DB for AI (10k)
- OpenHands/OpenHands (already listed in agents)

Some cross-categorization needed. Let me reconsider:
- The Trending list has its own metric (today's stars) which is very valuable.
- The Topic search shows 7-day active projects with total stars.

Let me also note that some star numbers seem suspiciously high (like affaan-m/ECC at 223k and NousResearch/hermes-agent at 205k). These might be inflated or test data. I'll report them as given but won't dwell on it.

Now let me structure the report properly.

For 今日速览, the key signals from today's trending:
1. AI Agent specialization is huge - agency-agents, video-use, VulnClaw, council-of-high-intelligence, Vibe-Trading all trending
2. Multi-agent and domain-specific AI applications dominate (trading, investing, video editing, pentesting)
3. AI for professional knowledge work (financial analysis with Berkshire framework)
4. Browser-use expanding to video domain (video-use trending)

For trends analysis:
- Agent specialization and verticalization is the dominant theme
- Multi-LLM orchestration (council-of-high-intelligence) emerging
- AI applications for finance/investing are popular (ai-berkshire, Vibe-Trading, daily_stock_analysis)
- The agent ecosystem is maturing with CLI tools, harnesses, and orchestration layers
- MCP (Model Context Protocol) integration is becoming standard (VulnClaw mentions MCP)

Community focus points:
1. Multi-agent orchestration systems (council-of-high-intelligence, agency-agents)
2. Vertical AI applications for finance (ai-berkshire, Vibe-Trading, daily_stock_analysis)
3. Agent harness frameworks (learn-claude-code, ECC, openclaude)
4. RAG + Memory for agents (claude-mem, mem0, ragflow)
5. Local/on-device AI (ollama, FluidVoice, home-llm)

Let me write the report now in Chinese.</think>

# 📊 AI 开源趋势日报 · 2026-06-30

---

## 第一步：AI 相关性筛选结果

**Trending 榜单（15 → 8 个 AI 相关）**

| ✅ 入选 | ❌ 略去（非 AI 通用工具） |
|---|---|
| agency-agents, FluidVoice, openpilot, ai-berkshire, video-use, VulnClaw, council-of-high-intelligence, Vibe-Trading, cupy*(基础设施) | simplex-chat, maigret, free-for-dev, logto, tolaria, VeraCrypt |

**主题搜索**：80 个仓库均通过筛选（均带 `topic:llm` / `ai-agent` / `llm-model` / `rag` / `vector-db` / `ml` 标签），去除课程列表类非项目仓库（cs-video-courses）。

---

## 第二步 & 第三步：分类趋势报告

### 1. 今日速览 🔥

今日 GitHub AI 热度由 **"垂直领域 AI Agent"** 全面主导：投资研究（ai-berkshire +1386）、视频编辑（video-use +967）、交易（Vibe-Trading +839）、渗透测试（VulnClaw +129）、多 LLM 议会（council-of-high-intelligence +331）集体登榜，显示 Agent 正从"通用聊天机器人"快速分化进入**专业工作流**。`agency-agents` 凭借"一整套 AI 公司角色"概念斩获 +1425 stars，成为现象级项目。同时，**Agent 基础设施层**持续完善——harness、CLI、MCP 工具链、记忆系统（mem0、claude-mem）形成完整生态。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 175,157 | 本地运行 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等模型的标杆工具，仍是本地 LLM 首选运行时 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 162,034 | 文本/视觉/音频/多模态模型定义框架，事实上的 ML 基础设施标准 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 140,525 | 已从"链式框架"升级为 **Agent Engineering Platform**，定位转向工程化 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 147,035 | 生产级 Agentic workflow 开发平台，LLM 应用编排的国产代表 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 84,858 | 高吞吐 LLM 推理引擎，企业部署 LLM 服务的事实标准 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐ 72,790 | 统一微调 100+ LLMs/VLMs 的高效框架（ACL 2024） |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 141,609 | 为 AI Agent 提供规模化网页抓取与搜索 API |
| [cupy/cupy](https://github.com/cupy/cupy) | ⭐ (+352 today) | GPU 版 NumPy/SciPy，今日重新走红，反映 GPU 计算基础设施持续重要 |

#### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐ (+1425 today) 🔥 | **今日热度第一**！提供完整"AI 公司"角色集（前端、Reddit运营、质检…），Agent 角色化设计的现象级项目 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐ 78,739 | "AI-Driven Development"标杆，代码 Agent 持续演进 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐ 75,487 | 字节跳动出品，Long-horizon SuperAgent Harness，研究+编码+创作通用 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐ 69,048 | 从 0 到 1 手写 nano Claude Code 风格 Agent Harness，教学价值极高 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐ 44,867 | HKU Data Science 实验室出品，轻量级开源 Agent |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐ 45,682 | 开源超级 AI 助理（前身 chatgpt-on-wechat），多模型多通道 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐ 101,497 | 让 AI Agent 操作浏览器，今日其衍生项目 video-use 走红 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 205,843 | "The agent that grows with you"，Nous Research 自研 Agent |

#### 📦 AI 应用（垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | ⭐ (+1386 today) 🔥 | 基于 Claude Code 的价值投资研究框架，巴菲特/芒格/段永平/李录四大师方法论，**金融 Agent 标杆** |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐ (+839 today) | "Vibe Trading" 个人交易 Agent，HKUDS 团队出品 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | ⭐ (+967 today) 🔥 | 用 Coding Agent **编辑视频**，browser-use 团队将 Agent 应用从浏览器扩展到视频 |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | ⭐ (+830 today) | macOS 最快离线听写应用，完全本地语音转文字，本地化 AI 应用代表 |
| [0xNyk/council-of-high-intelligence](https://github.com/0xNyk/council-of-high-intelligence) | ⭐ (+331 today) | 18 个 AI 人格（亚里士多德、费曼、卡尼曼等）多轮审议你的决策，**多 LLM 辩论**创新 |
| [Unclecheng-li/VulnClaw](https://github.com/Unclecheng-li/VulnClaw) | ⭐ (+129 today) | AI Agent + MCP + 渗透 Skill，自然语言→全自动渗透测试，**安全领域 AI Agent** |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐ 143,482 | 最流行的本地 LLM Web UI，兼容 Ollama/OpenAI API |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 47,977 | AI 生产力工作室，集成 300+ 助手的多模型统一客户端 |

#### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 52,354 | **2 小时从 0 训练 64M 参数 LLM**，大模型教学/入门首选 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐ 7,136 | 司南 LLM 评测平台，支持 100+ 数据集，覆盖主流模型 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐ 7,784 | Rust 构建模块化 LLM 应用，高性能生产级方案 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | ⭐ 1,371 | Home Assistant 集成，本地 LLM 控制智能家居 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | ⭐ 1,410 | 日语 LLM 大全，非英语模型生态值得关注 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐ 313 | 端侧 LLM 推理，X-Bit 量化技术 |

#### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 83,891 | RAG + Agent 融合引擎，领先的开源 RAG 方案 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 85,096 | **跨会话持久记忆**，压缩注入 Agent 上下文，适配 Claude Code / Codex / Gemini 等 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐ 84,268 | 100+ 语言 OCR，桥接图像/PDF 与 LLM |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 59,728 | Agent 通用记忆层，跨会话长期记忆的事实标准 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐ 50,517 | 领先的文档 Agent 与 OCR 平台 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐ 62,306 | 本地优先 LLM Agent 体验，一站式 RAG 桌面应用 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐ 33,521 | **Vectorless RAG**：基于推理而非向量检索的文档索引，新方向 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 45,018 | 云原生高性能向量数据库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐ 32,804 | Rust 编写的高性能向量搜索引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 25,715 | 基于知识图谱的 Agent 长期记忆平台 |

---

### 3. 趋势信号分析 📈

今日热榜呈现**"Agent 垂直化大爆发"** 的明确信号。15 个 Trending 项目中 **8 个与 AI Agent 直接相关**，覆盖投资研究（ai-berkshire）、视频编辑（video-use）、交易（Vibe-Trading）、安全测试（VulnClaw）、决策审议（council-of-high-intelligence）等完全不同领域，说明 Agent 已走出"通用聊天"阶段，进入**领域专业化和角色化分工**的成熟期。

值得关注的**新兴技术方向**有三个：① **多 LLM 辩论 / 议会机制**（council-of-high-intelligence 用 18 个 AI 人格模拟真实决策委员会），是对单一 LLM 输出的反思性架构；② **Coding Agent 跨界操作非代码资产**（video-use 让 Agent 编辑视频，代表"Agent 即通用操作员"理念）；③ **Vectorless RAG**（VectifyAI/PageIndex 用推理替代向量检索）。

与近期行业事件的关联：榜单中 ollama 已支持 Kimi-K2.6、GLM-5.1、gpt-oss 等最新模型，反映**开源大模型生态持续扩张**；Rust 路线（rig、qdrant、lancedb、meilisearch）和 MCP 协议（VulnClaw）正在成为 Agent 基础设施的事实标准。

---

### 4. 社区关注热点 🎯

- 🚀 **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** — 单日 +1425 stars，"AI 公司角色套件"概念极具传播力，是学习 Agent 角色化设计的最佳参考
- 💰 **[xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)** — 单日 +1386 stars，金融领域 AI 价值投资框架，多 Agent 对抗分析思路成熟，**垂直 Agent 落地的范本**
- 🎬 **[browser-use/video-use](https://github.com/browser-use/video-use)** — 单日 +967 stars，Coding Agent 跨界视频编辑，验证"自然语言→多模态操作"的可行性
- 🧠 **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 85k stars 的 Agent 持久记忆层，跨 Claude Code/Codex/Gemini 等多 CLI 工作，**Agent 记忆层基础设施**
- 🗄️ **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — Vectorless RAG 用 LLM 推理替代向量检索，在长文档/财报场景准确率显著高于传统 RAG，是值得跟踪的新范式

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
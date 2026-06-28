# AI 开源趋势日报 2026-06-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-28 04:20 UTC

---

<think>
The user wants me to analyze GitHub trending data and topic search results for AI-related projects, create a structured daily report. Let me work through this systematically.

**Step 1: Filter AI-related projects from Trending**

From the Trending list (20 repos), let me identify AI-related ones:

1. simplex-chat - messaging network, NOT AI → exclude
2. xbtlin/ai-berkshire - AI value investing framework → AI ✅
3. commaai/openpilot - autonomous driving OS, has ML but more robotics → borderline, include as AI应用
4. IceWhaleTech/CasaOS - Personal Cloud system, NOT AI → exclude
5. ripienaar/free-for-dev - SaaS list, NOT AI → exclude
6. google-labs-code/design.md - design format for coding agents → AI dev tool ✅
7. microsoft/PowerToys - Windows utilities, NOT AI → exclude
8. hugohe3/ppt-master - AI PowerPoint generator → AI应用 ✅
9. JCodesMore/ai-website-cloner-template - AI website cloner → AI应用 ✅
10. garrytan/gstack - Claude Code setup with agents → AI智能体 ✅
11. NanmiCoder/MediaCrawler - scrapers, NOT AI (social media crawlers) → exclude
12. Anil-matcha/Open-Generative-AI - AI image/video generation → AI应用 ✅
13. topoteretes/cognee - AI memory for agents → RAG/知识库 ✅
14. dbt-labs/dbt-core - data transformation, NOT AI → exclude
15. luongnv89/claude-howto - Claude Code guide → AI基础工具 ✅
16. anomalyco/opencode - open source coding agent → AI智能体 ✅
17. Fission-AI/OpenSpec - SDD for AI coding assistants → AI基础工具 ✅
18. HKUDS/Vibe-Trading - trading agent → AI应用 ✅
19. keycloak/keycloak - IAM, NOT AI → exclude
20. every-app/open-seo - SEO alternative, not really AI → exclude

AI-related from Trending: 11 repos
1. xbtlin/ai-berkshire (+685)
2. commaai/openpilot (+322) - could be considered AI/robotics
3. google-labs-code/design.md (+1541)
4. hugohe3/ppt-master (+589)
5. JCodesMore/ai-website-cloner-template (+750)
6. garrytan/gstack (+674)
7. Anil-matcha/Open-Generative-AI (+255)
8. topoteretes/cognee (+780)
9. luongnv89/claude-howto (+141)
10. anomalyco/opencode (+392)
11. Fission-AI/OpenSpec (+177)
12. HKUDS/Vibe-Trading (+92)

**Step 2: Classification**

Let me categorize:

🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）:
- google-labs-code/design.md (+1541) - design format for coding agents
- Fission-AI/OpenSpec (+177) - SDD for coding assistants
- luongnv89/claude-howto (+141) - Claude Code guide
- anomalyco/opencode (+392) - open source coding agent
- vllm-project/vllm (84,599) - inference engine
- huggingface/transformers (161,977) - model framework
- ollama/ollama (175,009) - LLM runner
- firecrawl/firecrawl (140,086) - web scraping for AI
- googleworkspace/cli (28,999) - includes AI agent skills
- raw-labs/mxcp (69) - Model eXecution + Context Protocol
- LancerLab/croqtile (34) - AI-native Kernel DSL

🤖 AI 智能体/工作流:
- garrytan/gstack (+674) - Claude Code multi-role setup
- anomalyco/opencode (+392) - coding agent
- NousResearch/hermes-agent (204,427) - agent framework
- Significant-Gravitas/AutoGPT (185,186) - autonomous AI
- OpenHands/OpenHands (78,524) - AI development
- bytedance/deer-flow (75,082) - SuperAgent harness
- shareAI-lab/learn-claude-code (68,693) - nano claude code agent
- HKUDS/nanobot (44,806) - lightweight AI agent
- browser-use/browser-use (100,998) - browser for agents
- CopilotKit/CopilotKit (35,582) - frontend for agents
- zhayujie/CowAgent (45,645) - super AI assistant
- HRI-EU/tulip_agent (44) - autonomous agent
- affaan-m/ECC (222,705) - agent harness optimization
- Panniantong/Agent-Reach (43,602) - agent internet access
- iOfficeAI/AionUi (28,968) - Cowork app for agents
- Gitlawb/openclaude (29,472) - runs anywhere agent

📦 AI 应用:
- xbtlin/ai-berkshire (+685) - AI value investing
- commaai/openpilot (+322) - autonomous driving
- hugohe3/ppt-master (+589) - AI PowerPoint generator
- JCodesMore/ai-website-cloner-template (+750) - AI website cloner
- Anil-matcha/Open-Generative-AI (+255) - AI image/video gen
- HKUDS/Vibe-Trading (+92) - trading agent
- open-webui/open-webui (143,256) - AI interface
- Mintplex-Labs/anything-llm (62,197) - local AI agent
- CherryHQ/cherry-studio (47,899) - AI productivity studio
- TauricResearch/TradingAgents (89,183) - trading framework
- ZhuLinsen/daily_stock_analysis (50,623) - stock analysis
- santifer/career-ops (56,205) - job search AI
- ScrapeGraphAI/Scrapegraph-ai (27,750) - AI scraper
- netdata/netdata (79,433) - AI observability
- meilisearch/meilisearch (58,319) - AI search
- OpenBB-finance/OpenBB (69,770) - financial data for AI
- Open-Generative-AI - content gen

🧠 大模型/训练:
- ollama/ollama (175,009) - model runner
- huggingface/transformers (161,977) - model framework
- vllm-project/vllm (84,599) - inference engine
- tensorflow/tensorflow (195,966) - ML framework
- pytorch/pytorch (101,067) - ML framework
- ultralytics/ultralytics (58,887) - YOLO
- keras-team/keras (64,097) - deep learning
- 0xPlaygrounds/rig (7,768) - Rust LLM framework
- open-compass/opencompass (7,128) - LLM evaluation
- galilai-group/stable-pretraining (270) - pretraining
- zjunlp/LightThinker (164) - thinking compression
- llm-jp/awesome-japanese-llm (1,409) - Japanese LLMs
- R-D-BioTech-Alaska/Qelm (27) - quantum LLM

🔍 RAG/知识库:
- topoteretes/cognee (+780) - AI memory platform
- meilisearch/meilisearch (58,319) - vector search
- run-llama/llama_index (50,456) - document agent
- milvus-io/milvus (44,985) - vector DB
- VectifyAI/PageIndex (33,474) - vectorless RAG
- qdrant/qdrant (32,707) - vector DB
- weaviate/weaviate (16,450) - vector DB
- neuml/txtai (12,682) - semantic search
- StarTrail-org/LEANN (12,598) - RAG framework
- alibaba/zvec (12,554) - in-process vector DB
- langchain4j/langchain4j (12,445) - LLM Java
- zilliztech/claude-context (11,983) - code search for Claude
- lancedb/lancedb (10,736) - embedded retrieval
- oramasearch/orama (10,452) - search engine
- langgenius/dify (146,787) - agentic workflow
- open-webui/open-webui (143,256) - AI interface
- langchain-ai/langchain (140,350) - agent platform
- thedotmack/claude-mem (84,761) - persistent memory
- PaddlePaddle/PaddleOCR (84,076) - OCR for RAG
- infiniflow/ragflow (83,750) - RAG engine
- safishamsi/graphify (73,016) - knowledge graph
- mem0ai/mem0 (59,603) - memory layer
- FlowiseAI/Flowise (54,065) - visual AI agents
- headroomlabs-ai/headroom (52,654) - context compression
- jeecgboot/JeecgBoot (46,902) - low-code with AI
- VectifyAI/PageIndex (33,474) - vectorless RAG

Now let me build the report. I need to:
1. 今日速览 - 3-5 sentences
2. 各维度热门项目 - 3-8 per category
3. 趋势信号分析 - 200-300 words
4. 社区关注热点 - 3-5 bullets

Let me identify today's standout signals:
- coding agents dominate: opencode, gstack, gstack, claude-howto, design.md, OpenSpec, ai-website-cloner-template
- design.md from google-labs-code went viral (+1541)
- AI memory/cognee trending (+780)
- AI value investing ai-berkshire (+685)
- PPT generation
- multi-agent setups
- Hermes agent, AutoGPT - large repos

The pattern: AI coding agents and developer tooling is dominant today. design.md, gstack, opencode, Fission-AI OpenSpec all relate to coding agents. The Claude Code ecosystem is clearly hot.

Let me also note:
- Hermes Agent (NousResearch) - very high stars (204K) - notable
- AutoGPT - 185K stars
- ECC (agent harness) - 222K stars
- The codename pattern: many projects use "claude" or relate to claude code
- Open-Generative-AI, Anil-matcha - models include Sora, Veo
- Ollama mentions Kimi-K2.6, GLM-5.1, MiniMax - these are recent models

Let me write the report now.
</think>
# 📊 AI 开源趋势日报 · 2026-06-28

---

## 第一步：AI 相关性筛选结果

从今日 Trending 20 个仓库中，**筛除 9 个非 AI 项目**（simplex-chat、CasaOS、free-for-dev、PowerToys、MediaCrawler、dbt-core、keycloak、open-seo 等），保留 **11 个 AI 相关项目**进入分析。主题搜索结果 81 个仓库中，绝大部分为 AI 相关（向量库、RAG、Agent、模型框架等），将作为基础生态盘参考。

---

## 今日速览

> 今日 GitHub Trending 几乎被 **AI Coding Agent 生态** 集体占领：Google 开源的 `design.md`（+1541）领跑全榜，gstack、opencode、OpenSpec、claude-howto 等"Claude Code 周边"项目同时冲榜，显示开发者社区正在围绕 **"规范驱动 + 多角色 Agent + 设计/规范持久化"** 构建新一代编码工作流。同时，**AI 记忆层（cognee +780）、垂直场景应用（PPT 生成、价值投资、交易 Agent）** 也呈多点开花。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | 0 → 🔥 **+1541 today** | Google Labs 开源：为 AI 编码 Agent 提供持久化设计系统描述规范，解决"Agent 忘记设计语言"的痛点，今日全榜第一 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | — / **+392 today** | 极简开源编码 Agent，定位为 Claude Code / Codex 的开放替代品 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | — / **+177 today** | 规范驱动开发（SDD）框架，让 AI 编码助手在严格 spec 下工作，提升代码可控性 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | — / **+141 today** | 可视化、案例驱动的 Claude Code 使用手册，从基础到高级 Agent 模板 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐175,009 | 本地模型运行事实标准，README 已支持 Kimi-K2.6 / GLM-5.1 / DeepSeek / gpt-oss 等新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐84,599 | 高吞吐 LLM 推理引擎，部署侧事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,977 | 多模态模型定义与训练框架，老牌顶流 |
| [raw-labs/mxcp](https://github.com/raw-labs/mxcp) | ⭐69 | Model eXecution + Context Protocol，企业级 Data→AI 基础设施，新兴协议层 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [garrytan/gstack](https://github.com/garrytan/gstack) | — / **+674 today** | Garry Tan 个人 Claude Code 配置开源：23 个工具化角色（CEO/Designer/QA/发布经理…），"用 Agent 组建虚拟公司"的范式引发关注 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | — / **+392 today** | 开源编码 Agent，强调"无锁定、可自托管" |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐204,427 | "与你共同成长的 Agent"，Nous Research 旗舰 Agent 框架 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐78,524 | AI 驱动开发的代表项目，Agent 可执行完整软件工程任务 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐75,082 | 字节开源长时序 SuperAgent Harness，沙箱+记忆+工具+子 Agent |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐222,705 | Agent Harness 性能优化系统，Skills/Instincts/Memory/Security 全套 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,806 | 轻量级开源 AI Agent，HKUDS 出品 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐68,693 | "Bash is all you need"——从 0 到 1 实现 nano Claude Code |

### 📦 AI 应用（垂直场景）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | — / **+750 today** | 一条命令 + AI 编码 Agent 克隆任意网站，今日 Trending 黑马 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | — / **+589 today** | 文档→可编辑 PPT（原生形状+动画+语音旁白），非图片拼接，质量显著高于同类 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | — / **+685 today** | "AI 时代伯克希尔"：基于 Claude Code/Codex 的多 Agent 对抗式价值投资框架，巴菲特+芒格+段永平+李录四大师方法论 |
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | — / **+255 today** | 自托管开源 AI 图像/视频生成工作室，集成 200+ 模型（Flux/Sora/Veo/Kling），MIT 协议 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | — / **+92 today** | "Vibe-Trading"个人交易 Agent，情绪化命名延续 Vibe Coding 风潮 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐89,183 | 多 Agent LLM 金融交易框架 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐50,623 | LLM 驱动多市场股票分析，零成本定时运行 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐56,205 | 基于 Claude Code 的 AI 求职系统，14 种技能模式 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐175,009 | 已支持 Kimi-K2.6 / GLM-5.1 / gpt-oss，紧跟国产+开源前沿 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,977 | 多模态训练/推理框架 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐84,599 | 工业级推理引擎 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,067 | 深度学习基础框架 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,887 | YOLO 系列，持续高活跃 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,768 | Rust LLM 应用框架，受关注度上升 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,128 | LLM 评测平台，覆盖 100+ 数据集 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐270 | 可靠/极简/可扩展的基础/世界模型预训练库 |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐24,085 / **+780 today** | 开源 AI 记忆平台，基于知识图谱为 Agent 提供跨会话长期记忆，今日 RAG 类别最强增量 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐33,474 | 无向量、基于推理的 RAG 文档索引，代表"去向量"路线 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,787 | Agentic workflow 生产级平台 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,750 | RAG + Agent 融合引擎 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,598 | 97% 存储压缩的本地 RAG 方案（MLsys 2026） |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐59,603 | AI Agent 通用记忆层 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐84,761 | Claude Code 跨会话持久上下文，已成 Agent 记忆事实标准 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐12,554 | 阿里开源轻量级进程内向量库 |

---

## 趋势信号分析

今日 Trending 释放出**三个清晰的信号**。

**第一，AI Coding Agent 进入"工程化成熟期"**。design.md（+1541）、gstack（+674）、opencode（+392）、OpenSpec（+177）、claude-howto（+141）五项目同时冲榜，标志着社区关注点已从"能不能用 Agent 写代码"转向"如何给 Agent 立规范（Spec/SDD）、定设计（Design System）、分角色（Multi-role）"。`design.md` 由 Google Labs 发布更是关键事件——大厂亲自下场定义 Agent 上下文格式，类似当年 `package.json` 之于 npm，极可能成为行业新标准。

**第二，垂直场景 Agent 全面爆发**。价值投资（ai-berkshire +685）、PPT 生成（ppt-master +589）、网站克隆（+750）、交易（Vibe-Trading +92）、求职（career-ops）等细分赛道同步涌现，呈现"通用 Agent → 场景化 Agent"的下沉趋势，**多 Agent 协同+领域知识** 成为差异化路径。

**第三，AI 记忆层成为新基础设施层**。cognee（+780）、claude-mem（84K）、mem0ai（59K）三项目齐头并进，叠加 VectifyAI PageIndex 的"无向量 RAG"路线，反映社区正在重新审视 **RAG 范式**——从纯向量检索走向"图谱+记忆+推理"融合。与近期 Ollama 支持 Kimi-K2.6/GLM-5.1/gpt-oss 等新模型形成呼应，**国产开源模型在本地化工具链中的渗透速度显著加快**。

---

## 社区关注热点（重点推荐）

- 🔥 **[google-labs-code/design.md](https://github.com/google-labs-code/design.md)** — 今日全榜第一，Google 给 AI 编码 Agent 立"设计契约"，生态位类似 JSON Schema，**强烈建议收藏并尝试集成到自己的项目**。
- 🔥 **[garrytan/gstack](https://github.com/garrytan/gstack)** — 把一家"虚拟公司"打包成 23 个 Agent 角色，展示了 **Multi-agent 角色化** 的工程范式，研究 Agent 架构的必读样本。
- 🚀 **[topoteretes/cognee](https://github.com/topoteretes/cognee)** — 自托管知识图谱驱动的 Agent 长期记忆，是 **去向量 RAG** 路线的代表工程实现，对 Agent 开发者极具参考价值。
- 🚀 **[xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)** — 多 Agent 对抗式投资研究，**"领域知识 + 多视角对抗"** 是垂直 Agent 落地的优秀模板。
- 👀 **[anomalyco/opencode](https://github.com/anomalyco/opencode)** — 开源编码 Agent 中难得的简洁实现，**关注其是否会成为 Claude Code 的真正开放替代品**。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
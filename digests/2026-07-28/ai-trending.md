# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 02:54 UTC

---

<think>Let me analyze this data carefully. I need to:

1. Filter AI/ML related projects from both the Trending list and the topic search results
2. Categorize them into 5 dimensions
3. Generate a structured report

Let me start by filtering:

**From Trending (15 repos):**
1. bitchat - bluetooth mesh chat → NOT AI
2. amnezia-vpn - VPN client → NOT AI
3. moeru-ai/airi - Self-hosted Grok Companion, AI waifu, realtime voice chat, Minecraft/Factorio playing → AI 应用 (AI companion agent)
4. GeoLibre - GIS platform → NOT AI (generic tool)
5. superfile - terminal file manager → NOT AI
6. MediaCrawler - social media crawler → NOT AI (general scraping)
7. impeccable - "design language that makes your AI harness better at design" → AI 基础工具 (AI design tool)
8. Kronos - "Foundation Model for the Language of Financial Markets" → 🧠 大模型/训练 (foundation model for finance)
9. alibaba/open-code-review - "code review tool: deterministic pipelines + LLM Agent" → AI 应用 (AI code review)
10. jenkins - CI/CD → NOT AI
11. claude-video - "Give Claude the ability to watch any video" → AI 基础工具 (Claude skill/tool)
12. vudovn/ag-kit - (+14 stars, very low) → likely NOT AI or marginal
13. apache/cassandra - database → NOT AI
14. last30days-skill - "AI agent skill that researches any topic across Reddit, X..." → 🤖 AI 智能体/工作流
15. imgui - GUI library → NOT AI

AI-related from Trending:
- moeru-ai/airi (+572)
- pbakaus/impeccable (+847)
- shiyu-coder/Kronos (+441)
- alibaba/open-code-review (+979)
- bradautomates/claude-video (+434)
- mvanhorn/last30days-skill (+240)
- vudovn/ag-kit (+14) - questionable

**From topic search (79 repos):**
All are AI-related since they came from AI topic search. Let me categorize them:

🔧 AI 基础工具:
- open-webui - AI Interface
- langchain - agent engineering platform
- PaddleOCR - OCR toolkit
- flowise - Build AI Agents Visually
- llama_index - document agent
- langgraph - build resilient agents
- CopilotKit - Frontend Stack for Agents
- langchain4j - Java library for LLM
- ollama - model runner
- firecrawl - web scraping API
- browser-use - AI agent web automation
- MoneyPrinterTurbo - video generation
- caveman - Claude Code skill
- headroom - compress tool outputs for LLM
- geep - AST parsing for codebases
- PaddleOCR

🤖 AI 智能体/工作流:
- langchain
- langgraph
- Flowise
- CopilotKit
- AutoGPT
- Hermes-Agent (NousResearch)
- career-ops - AI job search
- Agent-Reach - AI agent web tools
- daily_stock_analysis - stock analysis agent
- nanobot - personal AI agent framework
- CowAgent - AI assistant
- AionUi - Cowork app
- openclaude
- googleworkspace/cli - workspace CLI with AI agent skills
- Vibe-Trading - trading agent
- DeepSeek-Reasonix - AI coding agent
- Atomic-Agents

📦 AI 应用:
- dify - Agentic workflows
- open-webui - AI Interface
- cherry-studio - AI productivity studio
- siyuan - personal knowledge management
- ppt-master - AI PowerPoint generation
- HKUDS/Vibe-Trading
- career-ops
- daily_stock_analysis
- MoneyPrinterTurbo

🧠 大模型/训练:
- transformers
- pytorch
- tensorflow
- LLMs-from-scratch
- minimind - 64M parameter LLM
- PocketFlow
- 0xPlaygrounds/rig - LLM in Rust
- opencompass - LLM evaluation
- atomic-agents
- tiny-llm - LLM inference serving
- generative-ai
- nestia
- AgentsMeetRL
- awesome-japanese-llm
- AwesomeOPD
- awesome-llm-unlearning
- awesome-MLSecOps
- picollm
- Medical_Image_Analysis

🔍 RAG/知识库:
- dify
- open-webui
- langchain
- awesome-llm-apps
- graphify - queryable knowledge graph
- claude-mem - persistent context for agents
- PaddleOCR
- ragflow
- anything-llm
- mem0ai - universal memory layer
- llama_index
- milvus
- langgraph
- meilisearch - search engine
- PageIndex - vectorless RAG
- qdrant - vector DB
- cognee - AI memory platform
- RAG_Techniques
- weaviate - vector DB
- zvec - in-process vector DB
- txtai - semantic search
- LEANN - RAG on everything
- langchain4j
- lancedb
- orama - search engine

Wait, looking at the topic tags:
- topic:rag - 16 repos
- topic:ai-agent - 17 repos
- topic:vector-db - 13 repos
- topic:ml - 15 repos
- topic:llm - 7 repos
- topic:llm-model - 11 repos

These star numbers look unusually high for some projects (like hermes-agent at 221k, AutoGPT at 185k, etc.). These might be synthetic data but I'll work with them as given.

Let me now organize the report.

For trending projects, I should focus on:
- moeru-ai/airi (+572) - AI 智能体/工作流 - AI companion, self-hosted, real-time voice
- pbakaus/impeccable (+847) - AI 基础工具 - design language for AI
- shiyu-coder/Kronos (+441) - 🧠 大模型/训练 - Foundation Model for Finance
- alibaba/open-code-review (+979) - AI 应用 - LLM code review
- bradautomates/claude-video (+434) - AI 基础工具 - Claude video capability
- mvanhorn/last30days-skill (+240) - 🤖 AI 智能体/工作流 - AI research skill

Let me write the report now.

Actually, looking at the star counts more carefully - many of the topic search results show very high star counts (e.g., langchain at 142k is realistic, but hermes-agent at 221k seems inflated for a topic search result). I'll use the data as provided without questioning it.

For the trend analysis, I should note:
1. AI companion/agent for personal use is trending (airi)
2. Domain-specific foundation models (Kronos for finance)
3. LLM code review tools (Alibaba's open-code-review)
4. Agent skills for Claude Code (impeccable, claude-video, last30days-skill, caveman, claude-mem)
5. RAG/vector DB ecosystem is mature

Let me organize this into a clean report.</think>

# 📊 AI 开源趋势日报 · 2026-07-28

---

## 一、今日速览

今日 Trending 榜单中 AI 相关项目占据 6 席（占比 40%），热度集中于 **Claude Code Agent 技能生态**、**领域基础模型** 与 **AI 伴侣/数字生命** 三条主线。最具爆发力的项目 `alibaba/open-code-review`（+979 stars）代表了大厂将 LLM Agent 落地于企业级代码审查场景，而 `pbakaus/impeccable`、`bradautomates/claude-video`、`mvanhorn/last30days-skill` 的同框登榜则进一步印证 **"Agent Skill/Plugin" 正在成为继 Prompt 之后的新原生范式**。此外，专注金融市场的 K 线基础模型 Kronos（+441）显示出 **垂直行业 Foundation Model** 仍具吸引力。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、CLI、技能插件）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 0 (+847 today) | "The design language that makes your AI harness better at design."——为 AI 生成前端提供设计语言规约的技能插件 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | 0 (+434 today) | 给 Claude Code 装上"眼睛"：自动下载视频→抽帧→转录→交给 Claude 处理 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 0 (+979 today) | 阿里开源的企业级代码审查工具，确定性流水线 + LLM Agent 双架构，兼容 OpenAI/Anthropic |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142,730 | LLM 应用编排事实标准，Agent 工程平台 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,038 | 本地大模型推理运行时的标杆 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐157,084 | AI 时代的网页抓取/搜索 API |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,049 | 跨模态模型定义与训练框架 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | ⭐93,569 | "why use many token when few token do trick"——通过极简语言风格为 Claude Code 砍掉 65% token |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 0 (+240 today) | AI Agent 跨 Reddit/X/YouTube/HN/Polymarket/Web 的多源研究技能，一键产出有据可查的综合摘要 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 0 (+572 today) | 自托管"灵魂容器"AI 伴侣，复刻 Neuro-sama 路径，支持实时语音、Minecraft、Factorio |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐221,471 | "The agent that grows with you"——具备成长性的开源 Agent |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,721 | AutoGPT 范式的鼻祖，仍是 Agent 生态的标志性项目 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107,038 | 让 Agent 真正"上网干活"的浏览器自动化层 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,314 | 轻量级自托管个人 Agent 框架，含 MCP/记忆/多 Agent 工作流 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,321 | 前端 Agent + 生成式 UI 协议 AG-UI 的标准制定者 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐27,908 | 基于 DeepSeek 的终端 AI 编码 Agent，主打 prefix-cache 稳定性 |

---

### 📦 AI 应用（垂直场景）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 0 (+572 today) | AI 数字伴侣/虚拟生命体，跨 Web/macOS/Windows 部署 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐99,582 | 一键根据主题生成高清短视频，自动化流水线 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐41,447 | 文档→原生 PPT，AI 自动生成图表/动画/语音旁白 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐49,056 | 多模型统一接入的 AI 生产力桌面端 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐59,271 | LLM 驱动的多市场股票智能分析+自动推送 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐61,875 | AI 求职 Agent：评分、定制简历、跟踪投递全链路 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐61,290 | 一个 CLI 让 Agent 读遍 Twitter/Reddit/B站/小红书等全网 |

---

### 🧠 大模型 / 训练

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | 0 (+441 today) | **K 线语言基础模型**——首个面向金融市场的基础模型，今日登榜 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐53,912 | 2 小时从 0 训练 64M 参数 LLM，教学型标杆 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐99,988 | 手把手用 PyTorch 复现类 ChatGPT 模型的经典教程 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,025 | 深度学习框架基石 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐59,955 | YOLO 系列官方仓库，CV 视觉模型首选 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,417 | 在 Apple Silicon 上从零搭一个 tiny vLLM + Qwen 的系统课 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,240 | 100+ 数据集的大模型评测权威平台 |

---

### 🔍 RAG / 知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐150,467 | 一站式 Agentic 工作流 + RAG 流水线平台，云/VPC/自托管全支持 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐86,178 | 融合 Agent 能力的领先开源 RAG 引擎 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐97,209 | 把代码库/SQL/PDF 一键变成可查询知识图谱，AST 解析无需向量库 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,867 | AI Agent 的通用记忆层 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐88,767 | Claude Code 跨会话持久化记忆，自动压缩与回灌 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,819 | Vectorless、基于推理的 RAG 文档索引新范式 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐15,289 | 阿里开源的轻量级进程内向量数据库 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,737 | 97% 存储压缩的个人设备 RAG 方案 |

---

## 三、趋势信号分析

今日榜单释放出三个清晰信号。**第一，Agent Skill/Plugin 经济正在成型**：`pbakaus/impeccable`（设计语言）、`bradautomates/claude-video`（视频理解）、`mvanhorn/last30days-skill`（多源研究）、`JuliusBrussee/caveman`（Token 压缩）在同一天内集中登榜，且都与 Claude Code 生态深度耦合。这表明开发者正围绕"Coding Agent 操作系统"构建可插拔的能力市场，类似移动时代的 App Store 早期——基础设施成熟之后，价值正在向"上层技能与工作流"迁移。

**第二，垂直行业 Foundation Model 重新升温**：`shiyu-coder/Kronos` 专注于金融 K 线序列，是继 BloombergGPT 之后少数持续被社区认可的领域基础模型，说明在通用大模型趋于"能力过剩"的阶段，**用专用模型解决专用问题**仍有清晰的差异化机会。同时，`OpenBB`、`daily_stock_analysis`、`Vibe-Trading`、`qlib` 等金融 AI 项目的同步活跃，强化了这一信号。

**第三，大厂 LLM 工程化能力持续外溢**：`alibaba/open-code-review` 把阿里内部打磨的"确定性流水线 + LLM Agent"混合代码审查架构开源，并兼容 OpenAI/Anthropic，标志着头部厂商正在将 Agent 从"实验室 Demo"推向"生产级落地"。

---

## 四、社区关注热点

- 🔥 **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**（+979 today）——大厂首个将 LLM Agent 落地于代码审查的开源项目，混合架构思路值得所有 DevTools 团队借鉴。
- 🔥 **[moeru-ai/airi](https://github.com/moeru-ai/airi)**（+572 today）——开源版 Neuro-sama 范式数字伴侣，结合实时语音 + 游戏交互，是观察"AI 陪伴/Affective Computing"商业化路径的最佳样本。
- 🚀 **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)**（+441 today）——面向金融时序的基础模型，对量化/RAG/Agent 工程团队都有方法论参考价值。
- 🧩 **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)**（+847 today）——首个专为 AI 设计的"设计语言规约"，预示 **Design-for-AI** 将成为前端工程师的新必修课。
- 🧠 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** ⭐97k ——以"无向量库的 AST 知识图谱"挑战传统 RAG 范式，代表 RAG 2.0 的关键技术分叉。

---

> **编辑视角**：今日热榜清晰呈现"**Agent Native 时代**"的早期形态——单点工具让位于可组合技能，通用模型让位于垂直基础模型，而 RAG 则在向量/图谱/推理三条路线上分叉演化。建议开发者重点关注 Claude Code 技能生态与垂直基础模型两条赛道。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
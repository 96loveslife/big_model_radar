# AI 开源趋势日报 2026-09-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-21 04:19 UTC

---

<think>The user wants me to generate a structured "AI Open Source Trend Daily Report" based on the provided GitHub data. Let me analyze the data step by step.

## Step 1: Filtering

First, I need to identify which projects are AI/ML related from both the Trending list and the Topic Search results.

### Trending List Analysis:
1. **affaan-m/ECC** - Agent harness performance optimization for Claude Code, Codex, etc. ✅ AI-related
2. **BuilderIO/agent-native** - Framework for building agentic apps ✅ AI-related
3. **cloudflare/security-audit-skill** - Coding-agent skill for security audits ✅ AI-related (AI agent skill)
4. **trycua/cua** - Computer-use 2.0 with open-source drivers, cross-OS fleets ✅ AI-related (computer-use agents)
5. **anthropics/financial-services** - Anthropic's financial services repo - Need to check, likely AI-related as it's from Anthropic
6. **paperless-ngx/paperless-ngx** - Document management system ❌ NOT AI-related (generic document management)
7. **anthropics/claude-code** - Claude Code agentic coding tool ✅ AI-related
8. **mihail911/modern-software-dev-assignments** - Stanford CS course assignments ⚠️ Could be borderline - it's about modern software dev, might include AI topics but not primarily AI
9. **higgsfield-ai/higgsfield** - GPU orchestration and ML framework for training large models ✅ AI-related
10. **Open-Dev-Society/OpenStock** - Open-source market platforms ❌ NOT AI-related (stock tracking platform)
11. **coder/coder** - Secure environments for developers and agents ✅ AI-related (agents)
12. **vercel-labs/json-render** - Generative UI framework ✅ AI-related (generative UI for AI)
13. **addyosmani/agent-skills** - Production-grade engineering skills for AI coding agents ✅ AI-related

So from Trending:
- Exclude: paperless-ngx (document management), OpenStock (stock platform), mihail911/modern-software-dev-assignments (course assignments, not specifically AI)
- Keep: affaan-m/ECC, BuilderIO/agent-native, cloudflare/security-audit-skill, trycua/cua, anthropics/financial-services, anthropics/claude-code, higgsfield-ai/higgsfield, coder/coder, vercel-labs/json-render, addyosmani/agent-skills

Wait, let me reconsider anthropics/financial-services - it's from Anthropic so likely AI-related (prompt libraries for financial services).

And mihail911/modern-software-dev-assignments - this is a Stanford course, likely includes AI topics in modern software dev. Let me include it as borderline since it's about "modern software dev" which in 2026 would heavily include AI.

Actually, looking more carefully, the description says "Assignments for CS146S: The Modern Software Dev" - this is a general software dev course, not specifically AI. I'll exclude it.

Let me finalize:
- Exclude: paperless-ngx, OpenStock, mihail911/modern-software-dev-assignments
- Include: All others

### Topic Search Results Analysis:
Most are AI-related since they're from topic:llm, topic:rag, topic:ml, topic:ai-agent, topic:vector-db, topic:llm-model

Some I should check:
- tensorflow, pytorch, scikit-learn, keras - classic ML frameworks ✅
- ultralytics - YOLO computer vision ✅
- Developer-Y/cs-video-courses - CS courses with video lectures ❌ NOT AI-related (general CS courses)
- JuliaLang/julia - Julia programming language - has ML ecosystem but is a general language. Include as it's in topic:ml
- netdata - observability with AI features - could be borderline, AI-powered observability
- OpenBB-finance - data platform for analysts with AI agents ✅
- siyuan-note/siyuan - knowledge workspace with AI agents ✅
- meilisearch - search engine with AI-powered search ✅
- langchain4j - Java LLM library ✅
- oceanbase - distributed database for AI era ✅

## Step 2: Classification

Let me classify the AI-related projects:

### 🔧 AI 基础工具 (AI Infrastructure Tools)
- ollama/ollama - LLM inference engine
- huggingface/transformers - ML framework
- langchain-ai/langchain - Agent engineering platform
- langchain4j/langchain4j - Java LLM library
- vercel-labs/json-render - Generative UI framework
- addyosmani/agent-skills - Skills for AI coding agents
- affaan-m/ECC - Agent harness optimization
- cloudflare/security-audit-skill - Coding-agent skill
- Mirrowel/LLM-API-Key-Proxy - LLM Gateway
- jingyaogong/minimind - Tiny LLM training
- skyzh/tiny-llm - LLM inference on Apple Silicon
- 0xPlaygrounds/rig - LLM Apps in Rust
- netdata/netdata - AI-powered observability

### 🤖 AI 智能体/工作流 (AI Agents/Workflows)
- BuilderIO/agent-native - Agentic apps framework
- NousResearch/hermes-agent - Agent that grows with you
- Significant-Gravitas/AutoGPT - Autonomous AI agent
- browser-use/browser-use - Browser agents
- coder/coder - Secure environments for agents
- Panniantong/Agent-Reach - AI agent internet access
- career-ops-hq/career-ops - AI job search
- HKUDS/nanobot - Personal AI agent framework
- zhayujie/CowAgent - AI assistant & Agent Harness
- Hmbown/Codewhale - Coding agent in Rust
- CopilotKit/CopilotKit - Frontend for agents
- esengine/DeepSeek-Reasonix - AI coding agent
- agentscope-ai/QwenPaw - Personal AI Assistant
- HKUDS/Vibe-Trading - Trading Agent
- anthropics/claude-code - Agentic coding tool
- trycua/cua - Computer-use agents

### 📦 AI 应用 (AI Applications)
- open-webui/open-webui - AI Interface
- langgenius/dify - Agentic workflows
- harry0703/MoneyPrinterTurbo - AI video generation
- JuliusBrussee/caveman - Token-saving proxy for agents
- Graphify-Labs/graphify - Codebase knowledge graph
- Tao... TradingAgents - Financial trading
- CherryHQ/cherry-studio - AI productivity studio
- hugohe3/ppt-master - AI PowerPoint generation
- siyuan-note/siyuan - Knowledge workspace
- ZhuLinsen/daily_stock_analysis - Stock analysis
- asukaminato0721/telegram-summary-bot - AI chat summary
- acon96/home-llm - Smart home LLM
- Zi-yue-1129/DATAGEN - Multi-agent research assistant
- netdata/netdata - AI observability (could be here)
- OpenBB-finance/OpenBB - Data platform

### 🧠 大模型/训练 (LLM/Model Training)
- huggingface/transformers - Model framework
- tensorflow/tensorflow - ML framework
- pytorch/pytorch - Deep learning framework
- jingyaogong/minimind - Train 64M LLM
- scikit-learn/scikit-learn - ML library
- keras-team/keras - Deep learning
- ultralytics/ultralytics - YOLO computer vision
- roboflow/supervision - Computer vision tools
- microsoft/qlib - Quant ML platform
- rasbt/LLMs-from-scratch - LLM from scratch
- higgsfield-ai/higgsfield - GPU orchestration for ML
- open-compass/opencompass - LLM evaluation
- neuml/txtai - AI framework for semantic search
- microsoft/ML-For-Beginners - ML course
- microsoft/AI-For-Beginners - AI course
- JuliaLang/julia - ML language

### 🔍 RAG/知识库 (RAG/Knowledge Base)
- firecrawl/firecrawl - Web data scraping
- Shubhamsaboo/awesome-llm-apps - LLM apps collection
- thedotmack/claude-mem - Persistent context for agents
- infiniflow/ragflow - RAG engine
- PaddlePaddle/PaddleOCR - Document OCR for AI
- datawhalechina/hello-agents - Agent tutorial
- headroomlabs-ai/headroom - Token compression for RAG
- Mintplex-Labs/anything-llm - Local AI agent experience
- mem0ai/mem0 - Memory layer for agents
- run-llama/llama_index - Document processing
- bojieli/ai-agent-book - AI Agent book
- jeecgboot/JeecgBoot - Low-code with AI
- milvus-io/milvus - Vector database
- meilisearch/meilisearch - Search engine
- VectifyAI/PageIndex - Vectorless RAG
- qdrant/qdrant - Vector database
- topoteretes/cognee - AI memory platform
- NirDiamant/RAG_Techniques - RAG techniques
- weaviate/weaviate - Vector database
- alibaba/zvec - In-process vector database
- StarTrail-org/LEANN - RAG storage optimization
- lancedb/lancedb - Embedded retrieval library
- oceanbase/oceanbase - AI-era database
- samchon/nestia - AI Chatbot development

Now let me prepare the report with representative projects for each category.

For Trending today, the key signals are:
1. **AI Agent Skills/Optimization** is HUGE - affaan-m/ECC (+826), addyosmani/agent-skills (+736), cloudflare/security-audit-skill (+2428!), BuilderIO/agent-native (+98)
2. **Computer-use Agents** - trycua/cua (+1018) - significant
3. **Anthropic ecosystem** - claude-code (+419), financial-services (+260)
4. **GPU orchestration** - higgsfield-ai/higgsfield (+465)

The biggest today stars gains are in the AI agent skills/tooling space.

Let me write the report now.

I should note: there's some unusual star counts in the topic search data (some are very high like 263,908 for ECC, 247,526 for hermes-agent). This seems inflated but I'll use it as provided.

Let me write a comprehensive report in Chinese.

Key observations for trend signals:
1. AI Agent Skills is the hottest trend - multiple "agent skills" repos trending
2. Computer-use / GUI agents getting significant attention (trycua +1018)
3. Anthropic's ecosystem expansion (claude-code, financial-services)
4. Token optimization for agents is emerging (headroom, caveman)
5. Knowledge graphs for codebases (graphify)
6. Security audit AI agents (cloudflare/security-audit-skill exploded)

Let me now structure the final report.

For the "今日速览" section, I should highlight:
- Agent skills/tools explosion
- Computer-use agents gaining traction
- Anthropic ecosystem expansion

For trend signals, I'll discuss:
- The shift from "build agents" to "optimize agents" (skills, memory, context compression)
- Computer-use as emerging frontier
- Connection to recent events

Let me finalize the project categorization and prepare the final report.

Actually, let me re-examine the Trending list more carefully:

1. affaan-m/ECC (+826) - AI Agent harness, Claude Code/Codex optimization - 🔧 AI 基础工具
2. BuilderIO/agent-native (+98) - Agentic apps framework - 🤖 AI 智能体/工作流
3. cloudflare/security-audit-skill (+2428) - Coding-agent skill for security - 🤖 AI 智能体/工作流
4. trycua/cua (+1018) - Computer-use 2.0 - 🤖 AI 智能体/工作流
5. anthropics/financial-services (+260) - Anthropic prompt library - 📦 AI 应用
6. anthropics/claude-code (+419) - Claude Code - 🤖 AI 智能体/工作流
7. higgsfield-ai/higgsfield (+465) - GPU orchestration for ML - 🧠 大模型/训练
8. coder/coder (+379) - Environments for agents - 🤖 AI 智能体/工作流
9. vercel-labs/json-render (+291) - Generative UI - 🔧 AI 基础工具
10. addyosmani/agent-skills (+736) - Skills for AI coding agents - 🔧 AI 基础工具

Now I'll write the final report.</think>

# 📊 AI 开源趋势日报 · 2026-09-21

---

## ⚡ 今日速览

今日 GitHub Trending 榜单呈现**"AI Agent 工程化"全面爆发**的态势：围绕 Claude Code、Codex、Cursor 等编码 Agent 的"技能（Skills）/安全审计/性能优化"工具包集中登榜，其中 Cloudflare 推出的 `security-audit-skill` 单日斩获 **+2,428 stars** 居榜首。计算机操控（Computer-Use）方向以 `trycua/cua`（+1,018）继续走热，Anthropic 旗下 `claude-code` 与 `financial-services` 同步上榜，显示其生态正在向**垂直行业 Prompt 与模板**延伸。整体信号显示，开源社区的关注重点正从"造 Agent"转向"让 Agent 更好用"——技能化、上下文压缩、记忆层、安全审查成为新热点。

---

## 📌 维度一：🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars 数据 | 一句话说明 |
|------|-----------|-----------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 181,335（topic:llm） | 本地大模型运行事实标准，支持 Kimi/GLM/DeepSeek/gpt-oss/Qwen/Gemma 等主流开源模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 166,455（topic:llm） | 多模态模型定义与训练框架，开源 ML 基础设施核心 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 146,758（topic:llm） | 主流 Agent 工程化平台，工具调用、链式编排的事实标准 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐ 263,908 · **今日 +826** | Claude Code/Codex/Cursor Agent 的"性能优化 Harness"，提供 Skills、记忆、安全与研究先行的开发框架 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐ 0 · **今日 +736** | Google 工程团队出品，面向 AI 编码 Agent 的生产级工程技能库 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | ⭐ 0 · **今日 +2,428**（榜首） | 多阶段安全审计 Agent Skill，输出可机器验证的发现，**今日热度断层第一** |
| [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | ⭐ 0 · **今日 +291** | Vercel Labs 推出的 Generative UI 框架，让 LLM 输出可渲染的交互式 JSON |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐ 13,133（topic:vector-db） | JVM 生态 LLM 库，原生支持 MCP、Tool Calling 与企业框架集成 |

---

## 📌 维度二：🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars 数据 | 一句话说明 |
|------|-----------|-----------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 247,526（topic:llm） | "与你共同成长的 Agent"，强调长期记忆与个性化 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐ 187,470（topic:llm） | 自主 Agent 范式开创者，符号化"AI 通用助手"愿景 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐ 115,600（topic:llm） | 让 Agent 直接操控浏览器的代表性开源项目 |
| [trycua/cua](https://github.com/trycua/cua) | ⭐ 0 · **今日 +1,018** | **Computer-Use 2.0**，跨 OS 驱动集群 + 训练/评测基准全套工具链 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐ 0 · **今日 +419** | Anthropic 官方终端 Agentic 编码工具，自然语言驱动 git/重构/调试 |
| [coder/coder](https://github.com/coder/coder) | ⭐ 0 · **今日 +379** | 为开发者与 AI Agent 提供安全的云端开发环境 |
| [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | ⭐ 0 · **今日 +98** | Builder.io 推出的 Agentic 应用构建框架 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐ 48,431（topic:ai-agent） | 港大开源的超轻量自托管个人 Agent 框架，内置 MCP/记忆/多 Agent |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐ 37,437（topic:ai-agent） | Agent + Generative UI 前端栈标准，AG-UI 协议发起方 |

---

## 📌 维度三：📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars 数据 | 一句话说明 |
|------|-----------|-----------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐ 152,655（topic:llm） | 最受欢迎的自托管 LLM 聊天界面，Ollama/OpenAI 全兼容 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 156,658（topic:llm） | 一站式 Agentic 工作流 + RAG 平台，云/VPC/自托管全覆盖 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 124,875（topic:llm） | 一键生成高清短视频的 AI 工作流，典型 AIGC 爆款 |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | ⭐ 0 · **今日 +260** | Anthropic 官方金融行业 Prompt/模板集合，垂直行业落地信号 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐ 107,826（topic:llm） | 多 Agent 金融交易框架，研究型交易决策范式 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 52,036（topic:ai-agent） | AI 生产力工作室，统一接入多家前沿 LLM + 300+ 助手 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 55,599（topic:ai-agent） | 文档/主题一键生成原生 PowerPoint（含动画、图表、语音旁白） |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 65,385（topic:ai-agent） | LLM 驱动的多市场股票分析系统，零成本定时运行 |

---

## 📌 维度四：🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars 数据 | 一句话说明 |
|------|-----------|-----------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐ 200,219（topic:ml） | 经典深度学习框架，生态完备度最高 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐ 103,137（topic:ml） | 学术界与研究事实标准，GPU 加速动态图 |
| [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | ⭐ 0 · **今日 +465** | **面向万亿参数模型训练的容错 GPU 编排 + ML 框架**，今日新星 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 61,882（topic:llm-model） | 2 小时训练 64M 参数 LLM，入门级 LLM 教学标杆 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐ 61,825（topic:ml） | YOLO 全系列（v8/11/26/27）官方实现，目标检测/分割/姿态估计 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 105,310（topic:llm） | 从零实现 ChatGPT 类 LLM 的 PyTorch 教程 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐ 7,462（topic:llm-model） | 权威 LLM 评测平台，覆盖 100+ 数据集/知识/推理/代码/安全 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐ 4,582（topic:llm-model） | 在 Apple Silicon 上"自己写一个 vLLM + Qwen"系统教程 |

---

## 📌 维度五：🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars 数据 | 一句话说明 |
|------|-----------|-----------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 91,075（topic:rag） | 业界领先的 RAG 引擎，深度融合 RAG + Agent 能力 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 182,641（topic:llm） | LLM 友好的 Web 数据抓取 API，Agent 时代的基础数据层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐ 52,253（topic:rag） | LLM 文档处理平台，RAG 工程化首选框架 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 46,184（topic:rag） | 云原生高性能向量数据库，大规模 ANN 检索事实标准 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 65,726（topic:rag） | Agent 的"持久记忆层"，跨会话上下文即插即用 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 94,356（topic:rag） | Claude Code/Codex 等 Agent 的会话记忆压缩与回灌 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐ 73,287（topic:rag） | **工具输出/日志/RAG 块预压缩**，为 Agent 省 20%~95% Token |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐ 119,948（topic:llm） | 把任意代码库/SQL/文档/PDF 转为可查询知识图，零向量库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐ 34,718（topic:vector-db） | Rust 实现的高性能向量数据库，下一代 AI 原生检索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐ 35,782（topic:vector-db） | **无向量化、基于推理的 RAG**，文档索引新范式 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐ 12,944（topic:vector-db） | **MLsys 2026 Best Paper**，本地 RAG 存储节省 97% 仍保持精度 |

---

## 🔭 趋势信号分析

今日热榜最显著的特征是 **"AI Agent 工程化"赛道全面接管 Trending**：13 个 Trending 席位中 10 个与 AI 直接相关，其中 6 个聚焦于 Agent 的"上层基建"——`cloudflare/security-audit-skill`（+2,428）、`affaan-m/ECC`（+826）、`addyosmani/agent-skills`（+736）、`coder/coder`（+379）、`anthropics/claude-code`（+419）、`vercel-labs/json-render`（+291）。这说明社区关注点已从"如何让模型更强"明显迁移到 **"如何让 Agent 更稳、更省、更安全、更专业"**。

第二个信号是 **Computer-Use / GUI Agent 方向加速商业化**：`trycua/cua`（+1,018）提供跨 OS 驱动集群与训练/评测/数据生成一体化能力，配合 Anthropic 的 `claude-code`（终端 Agent）+ Cloudflare 的安全审计 Agent，构成完整的"Agent 操作真实世界"栈。`higgsfield-ai/higgsfield`（+465）则代表底层基础设施侧——面向万亿参数的容错 GPU 编排，反映出**Agent 规模化部署对底层算力调度的新需求**。

第三个信号是 **Token/上下文效率优化成为新刚需**：`headroomlabs-ai/headroom`、`JuliusBrussee/caveman`、`thedotmack/claude-mem`、`mem0ai/mem0` 同台竞技，预示在长上下文与高频 Agent 调用场景下，**压缩/记忆/缓存**正在成为下一个独立子赛道。Anthropic 同时放出 `claude-code` 和 `financial-services`，暗示头部厂商正把 Agent 模板/技能做成"行业插件市场"，**Agent Skills 生态化趋势确立**。

---

## 🎯 社区关注热点

- **🔥 [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — 今日 stars 断层第一（+2,428），Cloudflare 官方出品的多阶段安全审计 Agent Skill，输出可机器验证的结果，是 Agent 进入企业 DevSecOps 流程的标志性项目
- **🚀 [trycua/cua](https://github.com/trycua/cua)** — Computer-Use 2.0 标杆（+1,018），跨 OS 驱动 + 训练/评测/数据生成一站式，是 OpenAI/Anthropic 同方向的开源对位
- **⚙️ [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield)** — 万亿参数级 GPU 容错编排（+465），Agent 规模化背后的"水电煤"基础设施，值得基础设施方向开发者重点关注
- **🧠 [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Agent 时代 Token 通胀的核心解法，可为编码 Agent 省 20%、JSON 场景省 60-95% Token，与 caveman/claude-mem 共同构成上下文效率新赛道
- **🕸️ [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** + **[Graphify-Labs

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
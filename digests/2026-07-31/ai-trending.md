# AI 开源趋势日报 2026-07-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-31 03:29 UTC

---

<think>The user wants me to generate a structured "AI Open Source Trend Daily Report" based on the provided GitHub data. Let me work through this systematically.

**Step 1: Filter AI/ML related projects from Trending list**

Trending list (14 repos):
1. huggingface/speech-to-speech - AI (voice agents) ✅
2. microsoft/AI-For-Beginners - AI ✅
3. paperswithbacktest/awesome-systematic-trading - Finance/trading, not AI-focused ❌
4. different-ai/openwork - AI (alternative to Claude Cowork) ✅
5. WhiskeySockets/Baileys - WhatsApp API, not AI ❌
6. pascalorg/editor - 3D editor, not AI ❌
7. mvanhorn/last30days-skill - AI agent skill ✅
8. dotnet/aspnetcore - Web framework, not AI ❌
9. microsoft/PowerToys - Windows utilities, not AI ❌
10. ansible/ansible - IT automation, not AI ❌
11. ChromeDevTools/chrome-devtools-mcp - MCP for coding agents ✅ (AI-related)
12. jenkinsci/jenkins - CI/CD, not AI ❌
13. agavra/tuicr - Code review TUI, not AI ❌
14. affaan-m/ECC - Agent harness for Claude Code etc. ✅

So from Trending, AI-related: huggingface/speech-to-speech, microsoft/AI-For-Beginners, different-ai/openwork, mvanhorn/last30days-skill, ChromeDevTools/chrome-devtools-mcp, affaan-m/ECC

The topic search results are all AI-related by definition, but I should still categorize them appropriately.

**Step 2: Categorize**

Let me categorize each project:

### 🔧 AI 基础工具 (Frameworks, SDKs, inference engines, dev tools, CLI)
- huggingface/transformers [Python] ⭐163,187 [llm]
- ollama/ollama [Go] ⭐177,359 [llm] - inference engine
- langchain-ai/langchain [Python] ⭐143,052 [llm] - framework
- CherryHQ/cherry-studio [TypeScript] ⭐49,175 [ai-agent]
- googleworkspace/cli [Rust] ⭐30,083 [ai-agent] - CLI with AI agent skills
- huggingface/speech-to-speech [Python] (+628 today) - speech-to-speech framework
- ChromeDevTools/chrome-devtools-mcp [TypeScript] (+80 today) - MCP dev tool
- JuliusBrussee/caveman [JavaScript] ⭐94,678 [llm] - Claude Code skill/token optimization
- The-Pocket/PocketFlow [Python] ⭐11,072 [llm-model] - 100-line LLM framework
- 0xPlaygrounds/rig [Rust] ⭐8,107 [llm-model] - Rust LLM framework
- mvanhorn/last30days-skill [Python] (+378 today) - AI agent skill
- Graphify-Labs/graphify [Python] ⭐99,206 [llm] - skill for Claude Code etc
- headroomlabs-ai/headroom [Python] ⭐63,443 [rag] - token compression library
- neuml/txtai [Python] ⭐12,769 [vector-db] - AI framework

### 🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)
- NousResearch/hermes-agent [Python] ⭐222,953 [ai-agent]
- shareAI-lab/learn-claude-code [Python] ⭐72,775 [ai-agent]
- Panniantong/Agent-Reach [Python] ⭐63,000 [ai-agent]
- santifer/career-ops [JavaScript] ⭐62,333 [ai-agent]
- zhayujie/CowAgent [Python] ⭐46,229 [ai-agent]
- HKUDS/nanobot [Python] ⭐46,449 [ai-agent]
- HKUDS/Vibe-Trading [Python] ⭐28,804 [ai-agent]
- CopilotKit/CopilotKit [TypeScript] ⭐36,378 [ai-agent]
- iOfficeAI/AionUi [TypeScript] ⭐31,150 [ai-agent]
- Gitlawb/openclaude [TypeScript] ⭐30,442 [ai-agent]
- browser-use/browser-use [Python] ⭐107,351 [llm]
- Significant-Gravitas/AutoGPT [Python] ⭐185,754 [llm]
- affaan-m/ECC [JavaScript] ⭐236,288 [llm] - agent harness
- different-ai/openwork [TypeScript] (+915 today)
- microsoft/AI-For-Beginners [Jupyter Notebook] (+155 today)
- Eigenwise/atomic-agents [Python] ⭐6,099 [llm-model]
- JeecgBoot [Java] ⭐47,213 [rag]
- datawhalechina/hello-agents [Python] ⭐69,690 [rag]

### 📦 AI 应用 (Specific apps, vertical solutions)
- ZhuLinsen/daily_stock_analysis [Python] ⭐59,627 [ai-agent] - stock analysis
- hugohe3/ppt-master [Python] ⭐42,060 [ai-agent] - PPT generation
- siyuan-note/siyuan [TypeScript] ⭐45,512 [ai-agent] - knowledge management
- harry0703/MoneyPrinterTurbo [Python] ⭐100,680 [llm] - video generation
- OpenBB-finance/OpenBB [Python] ⭐71,203 [ml] - financial data platform
- Mintplex-Labs/anything-llm [JavaScript] ⭐64,143 [rag]
- open-webui/open-webui [Python] ⭐147,399 [llm]
- langgenius/dify [TypeScript] ⭐150,849 [llm] - could be framework or app, but it's a workspace
- ragflow [Go] ⭐86,461 [rag]
- Shubhamsaboo/awesome-llm-apps [Python] ⭐129,117 [rag]
- TSINGHUA SmartAgent ⭐27 [llm-model]
- AarambhDevHub/aarambh-studio [Rust] ⭐51 [llm-model] - LLM from scratch

### 🧠 大模型/训练 (Model weights, training frameworks, fine-tuning)
- ollama/ollama [Go] ⭐177,359 [llm] - more for inference, but supports many models
- huggingface/transformers [Python] ⭐163,187 [llm] - model definition framework
- rasbt/LLMs-from-scratch [Jupyter Notebook] ⭐100,193 [llm]
- skyzh/tiny-llm [Python] ⭐4,427 [llm-model] - inference serving
- tensorflow/tensorflow [C++] ⭐196,617 [ml]
- pytorch/pytorch [Python] ⭐102,080 [ml]
- keras-team/keras [Python] ⭐64,190 [ml]
- ultralytics/ultralytics [Python] ⭐60,062 [ml]
- open-compass/opencompass [Python] ⭐7,248 [llm-model] - evaluation
- genieincodebottle/generative-ai [Jupyter Notebook] ⭐2,577 [llm-model]
- AarambhDevHub/aarambh-studio [Rust] ⭐51 [llm-model]
- R-D-BioTech-Alaska/Qelm [Python] ⭐27 [llm-model]
- Event-AHU/Medical_Image_Analysis [Python] ⭐237 [llm-model]

### 🔍 RAG/知识库 (Vector DB, RAG, knowledge management)
- firecrawl/firecrawl [TypeScript] ⭐158,405 [llm] - web scraping
- mem0ai/mem0 [Python] ⭐62,165 [rag] - memory layer
- FlowiseAI/Flowise [TypeScript] ⭐55,052 [rag] - visual AI agents builder
- run-llama/llama_index [Python] ⭐51,249 [rag] - document agent
- milvus-io/milvus [Go] ⭐45,436 [rag] - vector database
- thedotmack/claude-mem [JavaScript] ⭐89,096 [rag] - persistent memory
- meilisearch/meilisearch [Rust] ⭐58,805 [vector-db] - search engine
- VectifyAI/PageIndex [Python] ⭐34,926 [vector-db]
- qdrant/qdrant [Rust] ⭐33,686 [vector-db]
- topoteretes/cognee [Python] ⭐29,610 [vector-db]
- NirDiamant/RAG_Techniques [Jupyter Notebook] ⭐28,883 [vector-db]
- weaviate/weaviate [Go] ⭐16,675 [vector-db]
- alibaba/zvec [C++] ⭐15,336 [vector-db]
- StarTrail-org/LEANN [Python] ⭐12,749 [vector-db]
- langchain4j/langchain4j [Java] ⭐12,747 [vector-db]
- lancedb/lancedb [Rust] ⭐11,038 [vector-db]
- oramasearch/orama [TypeScript] ⭐10,507 [vector-db]
- infiniflow/ragflow [Go] ⭐86,461 [rag]
- langgenius/dify [TypeScript] ⭐150,849 [llm] - RAG + agents

Now let me also identify cross-cutting or unique projects:
- microsoft/AI-For-Beginners - educational
- f/prompts.chat - prompts collection
- jeecgboot/JeecgBoot - low-code platform with AI

**Trending stars analysis (today's new stars)**:
- different-ai/openwork: +915 (highest among AI)
- affaan-m/ECC: +804
- huggingface/speech-to-speech: +628
- mvanhorn/last30days-skill: +378
- microsoft/AI-For-Beginners: +155
- ChromeDevTools/chrome-devtools-mcp: +80

**Step 3: Generate report**

Now let me write the report in Chinese.

For trend signals, I should note:
- AI Agent / "Agent Harness" ecosystem is exploding (ECC, openwork, last30days-skill, AionUi, CowAgent, etc.)
- Local-first / self-hosted AI continues to grow (ollama, open-webui, nanobot)
- Voice agents emerging (speech-to-speech from HuggingFace)
- MCP (Model Context Protocol) gaining traction (chrome-devtools-mcp)
- Token optimization tools for coding agents (caveman, headroom)
- Skill-based agent architectures (graphify, last30days-skill)

Industry events related:
- The mention of "Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma" in ollama suggests recent model releases from these labs
- Coding agents like Claude Code, Codex, OpenCode are clearly dominant
- MCP protocol is being widely adopted

Let me write the final report now.

I need to be careful with formatting and ensure every project has a GitHub link. Let me organize the data cleanly.

For category classification - one project can be in multiple categories. Let me decide primary categories:

- CherryHQ/cherry-studio - primarily an AI application/UI tool - 📦 AI 应用
- googleworkspace/cli - CLI tool with AI skills - 🔧 AI 基础工具
- CopilotKit/CopilotKit - frontend framework for agents - 🔧 AI 基础工具
- browser-use/browser-use - AI agent for browser - 🤖 AI 智能体
- headroomlabs-ai/headroom - token compression library - 🔧 AI 基础工具
- mem0ai/mem0 - memory layer for agents - 🤖 AI 智能体 (or RAG)
- flowise - visual agent builder - 🤖 AI 智能体
- llama_index - document agent/RAG framework - 🔍 RAG/知识库
- JeecgBoot - low-code with AI - 📦 AI 应用
- firecrawl - web scraping API for AI - 🔧 AI 基础工具

Let me finalize and write the report.</think>

# 📊 AI 开源趋势日报 · 2026-07-31

---

## 一、今日速览

今日 GitHub Trending 中 AI 相关项目占比近一半，且增量高度集中——**Agent Harness（智能体编排框架）与本地化 AI 助手赛道呈爆发态势**：`different-ai/openwork`（+915）、`affaan-m/ECC`（+804）、`mvanhorn/last30days-skill`（+378）三款"Agent 增强套件"集体登顶。HuggingFace 的 `speech-to-speech`（+628）标志着 **开源语音 Agent** 正走向本地化可部署。配套基础设施层面，MCP（Chrome DevTools）、Token 压缩（headroom、caveman）等"Agent 效率工具"也明显升温，说明社区焦点已从"造 Agent"转向"让 Agent 跑得更便宜、更稳"。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,359 | — | 本地推理事实标准，已支持 Kimi-K2.6、GLM-5.2、DeepSeek 等最新开源模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,187 | — | 多模态模型定义与训练的行业基座框架 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐143,052 | — | 主流 Agent 工程平台，覆盖工具调用、RAG 与多模型编排 |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | ⭐0 | **+628** | HuggingFace 官方推出的本地语音 Agent SDK，今日新晋热榜 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | ⭐0 | **+80** | 把 Chrome DevTools 暴露为 MCP Server，让 Coding Agent 直接操作浏览器 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐30,083 | — | Google Workspace 官方 CLI，内置 AI Agent Skills，绑定企业 SaaS |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | ⭐94,678 | — | 节省 65% Token 的 Claude Code 风格"压缩"Skill，登顶话题热度 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐63,443 | — | 工具输出/RAG chunk 压缩库，Coding Agent 用可省 20% Token |

---

### 🤖 AI 智能体 / 工作流（Agent 框架 / 自动化）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐236,288 | **+804** | Claude Code/Codex/OpenCode/Cursor 通用 Agent Harness，含技能/记忆/安全层 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | ⭐0 | **+915** | 开源版 Claude Cowork，基于 opencode 构建，今日新增第一 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐222,953 | — | "会随你成长的 Agent"，长记忆与自演化框架 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐72,775 | — | 从 0 到 1 复刻 Claude Code 的 nano Agent Harness 教学项目 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐63,000 | — | 零 API 费用让 Agent 读遍 Twitter/Reddit/B站/小红书的统一 CLI |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,449 | — | 轻量级自托管个人 Agent 框架，支持 MCP 与多智能体编排 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,229 | — | 原 chatgpt-on-wechat 进化版，多渠道 + 记忆自演化 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107,351 | — | 让 Agent 像人一样操作浏览器的标杆项目 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | ⭐0 | **+378** | 跨 Reddit/X/YouTube/HN 的研究型 Agent Skill，今日热榜新秀 |

---

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐49,175 | — | 聚合 300+ 助手的 AI 生产力桌面端，统一多模型入口 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐59,627 | — | LLM 驱动的多市场股票分析 + 零成本定时推送 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐42,060 | — | 一句话/文档生成原生 PPT，含动画与图表 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐100,680 | — | AI 一键生成高清短视频，工作流化代表 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐28,804 | — | "氛围交易"个人交易 Agent，Agent 在金融垂类的落地 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐62,333 | — | 本地运行的 AI 求职 Agent，自动评分简历匹配度 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐31,150 | — | 7×24 本地 Cowork 应用，兼容 20+ CLI Agent |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | ⭐0 | **+155** | 微软官方 12 周 AI 入门课程，今日回归热榜 |

---

### 🧠 大模型 / 训练（模型权重 / 训练框架 / 微调）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,617 | — | 经典 ML 框架，社区根基深厚 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,080 | — | 深度学习研究与训练事实标准 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,193 | — | 从零手写 ChatGPT 式 LLM 的经典教程 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐60,062 | — | YOLO26/YOLO11 最新视觉模型全家桶 |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,190 | — | 友好的深度学习高层 API |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,427 | — | 在 Apple Silicon 上从零搭建 tiny vLLM + Qwen 的工程师课程 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,248 | — | 覆盖 100+ 数据集的 LLM 评测平台 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | ⭐51 | — | 纯 Rust + Candle 从零实现 Decoder-only LLM，含 MoE/稀疏注意力 |

---

### 🔍 RAG / 知识库（向量库 / 检索增强 / 知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐150,849 | — | 一站式 Agentic workflow + RAG 平台，云/私有均可部署 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐86,461 | — | RAG + Agent 融合引擎，企业级上下文层方案 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐89,096 | — | 跨会话持久记忆，捕获并压缩 Agent 全过程上下文 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,436 | — | 云原生向量数据库，大规模 ANN 检索的事实标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,686 | — | Rust 写的高性能向量库，云端与本地部署俱佳 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,926 | — | 无向量、基于推理的 RAG 文档索引，新范式探索 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐29,610 | — | 为 Agent 提供长期记忆的知识图谱引擎 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐15,336 | — | 阿里开源的轻量级进程内向量数据库 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,749 | — | RAG-on-Everything，97% 存储节省的个人设备 RAG |

---

## 三、趋势信号分析

今日热榜释放出三个明显信号。**第一，Agent Harness 赛道进入"军备竞赛"阶段**：传统"Agent 框架"概念已不能覆盖新需求，社区转向"在 Claude Code / Codex / OpenCode 等 Coding Agent 之上做编排增强"——`ECC`、`openwork`、`last30days-skill`、`graphify`、`caveman`、`claude-mem` 等工具都围绕"如何让 Coding Agent 更稳、更便宜、更可复用"展开，反映出 Agent 已从 Demo 走向日常生产力工具。**第二，本地化与开源闭源模型并行的格局加深**：Ollama README 已正式列入 Kimi-K2.6、GLM-5.2、DeepSeek、gpt-oss、Qwen、Gemma 等中国/国际开源新势力，本地推理栈是这一轮迭代的最大受益者。**第三，Token 经济学催生新工具层**：`caveman` 用"穴居人语料"砍掉 65% Token、`headroom` 通过结构化压缩减少 20–95% Token——当 Coding Agent 规模化运行，成本与上下文长度已成核心瓶颈，这是 MCP、Skill、Memory、Compression 共同繁荣的底层原因。综合来看，今日没有全新基础模型发布登榜，但围绕现有模型构建的"Agent 工程化"基础设施正以日增数百 Star 的速度刷新记录。

---

## 四、社区关注热点（开发者重点关注）

- 🔥 **[affaan-m/ECC](https://github.com/affaan-m/ECC)**（+804/日）— Agent Harness 标杆，技能/记忆/安全/研究先行的整套范式，值得第一时间拆解其架构
- 🔥 **[different-ai/openwork](https://github.com/different-ai/openwork)**（+915/日）— 开源 Claude Cowork 平替，对想要私有部署 AI 办公助手的团队极具参考价值
- 🚀 **[huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech)**（+628/日）— 语音 Agent 本地化的关键拼图，多模态交互的下一个入口
- 🧠 **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐89k — 跨会话持久记忆是 Agent 长期可用性的核心，值得作为记忆层基线参考
- 💰 **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** ⭐63k — Coding Agent 的成本优化已是刚需，Token 压缩思路可直接借鉴到自家产品

---

*报告生成时间：2026-07-31 · 数据源：GitHub Trending + Topic Search（已去重 79 项 AI 主题仓库）*

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
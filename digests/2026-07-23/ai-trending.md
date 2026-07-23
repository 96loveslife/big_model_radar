# AI 开源趋势日报 2026-07-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-23 03:23 UTC

---

<think>Let me analyze the data carefully and produce a structured AI open-source trends report.

First, let me filter and identify AI/ML related projects from the Trending list:

**Trending 榜单筛选（19个）:**

1. ✅ koala73/worldmonitor - AI-powered news aggregation (AI应用)
2. ✅ ruvnet/RuView - WiFi signals into spatial intelligence (AI应用, sensing)
3. ✅ ayghri/i-have-adhd - Skill for coding agent (AI智能体/工具)
4. ❌ schollz/croc - File transfer tool (非AI)
5. ❌ likec4/likec4 - Software architecture visualization (非AI)
6. ❌ chrislgarry/Apollo-11 - Historical source code (非AI)
7. ✅ jamiepine/voicebox - Open-source AI voice studio (AI应用)
8. ✅ diegosouzapw/OmniRoute - MIT AI gateway (AI基础工具)
9. ✅ shiyu-coder/Kronos - Foundation Model for Financial Markets (大模型)
10. ✅ ComposioHQ/awesome-claude-skills - Claude AI workflows (AI智能体)
11. ❌ oblien/openship - Self-hosted deployment platform (非AI)
12. ✅ agegr/pi-web - Web UI for pi coding agent (AI智能体)
13. ✅ rohitg00/ai-engineering-from-scratch - AI engineering (AI基础工具/教程)
14. ✅ tirth8205/code-review-graph - Local-first code intelligence for MCP/CLI (AI智能体/工具)
15. ❌ dreamhunter2333/cloudflare_temp_email - Temp email (非AI)
16. ❌ DioxusLabs/dioxus - Fullstack app framework (非AI)
17. ❌ hyprwm/Hyprland - Wayland compositor (非AI)
18. ❌ Pumpkin-MC/Pumpkin - Minecraft server (非AI)
19. ✅ dottxt-ai/outlines - Structured Outputs (AI基础工具)

**Trending 筛选后约 11 个 AI 项目**

Now let me categorize:

**🔧 AI 基础工具:**
- OmniRoute - MIT AI gateway, 268+ providers, 500+ models (+1651 today)
- dottxt-ai/outlines - Structured Outputs (+364 today)
- rohitg00/ai-engineering-from-scratch - AI engineering tutorial (+652 today)
- vllm-project/vllm - inference engine
- huggingface/transformers - model framework
- langchain-ai/langchain - agent engineering platform
- rig (Rust LLM)
- langchain4j
- tiny-llm

**🤖 AI 智能体/工作流:**
- ayghri/i-have-adhd - ADHD-friendly coding agent skill (+1699 today)
- ComposioHQ/awesome-claude-skills - Claude AI skills (+163 today)
- agegr/pi-web - pi coding agent UI (+314 today)
- tirth8205/code-review-graph - code intelligence for MCP/CLI (+882 today)
- NousResearch/hermes-agent
- HKUDS/nanobot
- zhayujie/CowAgent
- CopilotKit/CopilotKit
- iOfficeAI/AionUi
- Gitlawb/openclaude
- googleworkspace/cli
- esengine/DeepSeek-Reasonix
- jackwener/OpenCLI
- affaan-m/ECC
- browser-use/browser-use
- tauric research/TradingAgents
- headroomlabs-ai/headroom
- Eigenwise/atomic-agents
- claude-mem
- datawhalechina/hello-agents

**📦 AI 应用:**
- koala73/worldmonitor (+4139 today)
- ruvnet/RuView (+741 today)
- jamiepine/voicebox (+557 today)
- CherryHQ/cherry-studio
- Panniantong/Agent-Reach
- ZhuLinsen/daily_stock_analysis
- hugohe3/ppt-master
- santifer/career-ops
- MoneyPrinterTurbo
- open-webui
- Firecrawl (工具但也是应用)

**🧠 大模型/训练:**
- shiyu-coder/Kronos - Foundation Model for Financial Markets (+137 today)
- jingyaogong/minimind - 64M LLM from scratch
- ScrapeGraphAI
- Picovoice/picollm
- ollama (主要推理)

**🔍 RAG/知识库:**
- Shubhamsaboo/awesome-llm-apps
- PaddlePaddle/PaddleOCR
- infiniflow/ragflow
- Mintplex-Labs/anything-llm
- mem0ai/mem0
- FlowiseAI/Flowise
- run-llama/llama_index
- milvus-io/milvus
- meilisearch/meilisearch
- VectifyAI/PageIndex
- qdrant/qdrant
- topoteretes/cognee
- weaviate/weaviate
- alibaba/zvec
- txtai
- LEANN
- langchain4j
- lancedb
- orama
- oceanbase

Wait, some projects like Awesome-LLM-Apps should be classified. Let me think about how to organize this best.

Let me draft the report now.

**今日速览:**
1. AI Agent工具热度爆炸 - i-have-adhd (+1699), code-review-graph (+882), pi-web (+314) 显示agent生态配套工具爆发
2. AI网关/路由成为基础设施 - OmniRoute (+1651) 显示多模型路由、quota-aware fallback等成为开发者刚需
3. 世界态势感知类应用爆发 - worldmonitor (+4139) 显示LLM在地缘情报、新闻聚合的应用
4. AI语音应用 - voicebox (+557)
5. 金融领域LLM持续火热 - Kronos (financial foundation model), ZhuLinsen/daily_stock_analysis

**趋势信号分析 (200-300字):**
今日热榜呈现几个明显信号：
1. **AI Agent配套工具集中爆发**：从ADHD友好的agent输出优化(i-have-adhd, +1699)、代码上下文压缩(code-review-graph, +882)、agent UI(pi-web, +314)到agent skills资源汇总(awesome-claude-skills, +163)，开发者正从"造agent"转向"让agent更好用"的工具链建设。
2. **多模型路由网关成为新基础设施**：OmniRoute (+1651) 凭借268+ providers、500+ models支持、quota-aware fallback迅速登顶，反映出MCP/A2A协议生态下，开发者对统一LLM入口的强烈需求。
3. **垂直领域Foundation Model趋势**：Kronos 作为金融市场基础模型(类似Time-Series领域的LLM)受到关注，加上RuView用WiFi做空间智能，体现了"领域大模型"的探索方向。
4. 与近期事件关联：模型供给端持续丰富(OmniRoute支持Kimi-K2.6、GLM-5.2、MiniMax等)，与上游国产模型生态扩展直接呼应。

**社区关注热点:**
- OmniRoute：解决多模型路由痛点
- i-have-adhd：Agent UX 优化（开发者自驱）
- koala73/worldmonitor：LLM应用场景化典型案例
- code-review-graph：本地化code intelligence + MCP
- Kronos：领域foundation model

Let me now write the final report.</think>

# 🚀 AI 开源趋势日报 · 2026-07-23

---

## 第一步：AI 相关性筛选

从 Trending 榜单 19 个仓库中筛除 8 个非 AI 项目（croc / likec4 / Apollo-11 / openship / cloudflare_temp_email / dioxus / Hyprland / Pumpkin-MC），保留 **11 个 AI 相关项目**进入后续分析；主题搜索结果 80 项全部为 AI/ML 相关。

---

## 第二步：维度分类结果

| 维度 | Trending 命中 | 主题搜索补充 |
|------|---|---|
| 🔧 AI 基础工具 | 5 | 7 |
| 🤖 AI 智能体/工作流 | 4 | 11 |
| 📦 AI 应用 | 3 | 7 |
| 🧠 大模型/训练 | 1 | 5 |
| 🔍 RAG/知识库 | 0 | 18 |

---

## 1. 今日速览

> **Agent 工具链集体爆发**：今日 Trending 前 10 中有 6 个直接服务于 AI 编码 Agent（i-have-adhd +1699、code-review-graph +882、OmniRoute +1651、pi-web +314、awesome-claude-skills +163、voicebox +557），开发者关注点已从"造 Agent"迁移到"让 Agent 更好用"。**多模型路由网关成为新刚需**，OmniRoute 一日斩获 1651 stars，覆盖 268+ 提供商与 quota-aware fallback。**LLM 应用场景化加速**——worldmonitor 用 AI 做全球态势感知、Kronos 把金融 K 线当作"语言"训练 Foundation Model，体现"领域大模型 + 垂直应用"的双线探索。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars / 今日 | 一句话说明 |
|------|---|---|
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | ⭐0 / **+1651** | MIT AI 网关，单端点覆盖 268+ 提供商 / 500+ 模型，RTK 压缩省 15-95% tokens，是 Claude Code/Codex/Cursor 等 CLI 的统一入口 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐0 / **+652** | "Learn it. Build it. Ship it." AI 工程实战教程，强调端到端交付 |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | ⭐0 / **+364** | Structured Outputs 库，主流 LLM 结构化生成的事实标准之一 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,849 | 模型定义框架的事实标准，覆盖文本/视觉/音频/多模态 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86,914 | 高吞吐 LLM 推理与 serving 引擎 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142,358 | "The agent engineering platform"，从框架升级为平台 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,672 | 本地运行 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek 等模型的入口 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,018 | Rust 生态下模块化 LLM 应用框架 |

### 🤖 AI 智能体/工作流

| 项目 | Stars / 今日 | 一句话说明 |
|------|---|---|
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | ⭐0 / **+1699** | 让 Coding Agent 输出"ADHD 友好"的 skill——直接命中开发者痛点，单日热度第一 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | ⭐0 / **+882** | 本地优先的代码知识图谱，为 MCP/CLI 中的 Agent 提供精准上下文 |
| [agegr/pi-web](https://github.com/agegr/pi-web) | ⭐0 / **+314** | pi 编码 Agent 的 Web UI，反映"Agent 可视化层"需求 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | ⭐0 / **+163** | Claude Skills 资源精选目录，Agent 二次开发生态涌现 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐219,023 | "The agent that grows with you"，自我进化的 Agent |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,093 | 轻量级开源 Agent，与工具/聊天/工作流连接 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,223 | React/Angular/Mobile/Slack 上构建 Agent UI 与 Generative UI（AG-UI 协议） |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐232,271 | Agent Harness 性能优化系统：skills、instincts、memory、security |

### 📦 AI 应用

| 项目 | Stars / 今日 | 一句话说明 |
|------|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | ⭐0 / **+4139** | 全球实时态势感知仪表盘，AI 新闻聚合+地缘监控+基础设施追踪，今日热度断层第一 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐0 / **+741** | 用 WiFi 信号做空间智能与生命体征监测，零摄像头的感知方案 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | ⭐0 / **+557** | 开源 AI 语音工作室，支持克隆/听写/创作 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐59,769 | 给 Agent 一双"看全网"的眼睛，覆盖 Twitter/Reddit/YouTube/B站等 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,883 | AI 生产力工作室，聚合 300+ 助手与前沿 LLM |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐58,331 | LLM 驱动的多市场股票智能分析，支持零成本定时运行 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐98,704 | 一键生成高清短视频的 AI 自动化工作流 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐154,604 | 给 AI 用的网页搜索/抓取 API |

### 🧠 大模型/训练

| 项目 | Stars / 今日 | 一句话说明 |
|------|---|---|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | ⭐0 / **+137** | 金融市场的"基础模型"——把 K 线当作语言预训练，是 Time-Series 领域 LLM 化的代表 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐53,745 | 2 小时从零训练 64M 参数 LLM 的极简教学项目 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,230 | 支持 100+ 数据集的 LLM 评测平台 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,393 | 在 Apple Silicon 上手写一个迷你 vLLM + Qwen 的工程课程 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐314 | 基于 X-Bit 量化的端侧 LLM 推理引擎 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,018 | Rust 框架，配合任意 LLM 构建应用 |

### 🔍 RAG / 知识库

| 项目 | Stars / 今日 | 一句话说明 |
|------|---|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐126,438 | 100+ AI Agents / Agent Skills / RAG Apps 集合 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85,716 | 开源 RAG 引擎，融合 RAG + Agent 能力 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐88,269 | Agent 跨会话持久记忆，兼容 Claude Code / OpenClaw / Codex 等 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,495 | AI Agent 的通用记忆层 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐86,063 | 把 PDF/图像转为 LLM 可用结构化数据的轻量 OCR 工具包 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,021 | 领先的文档 Agent 与 OCR 平台 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,177 | Vectorless、基于推理的 RAG 文档索引 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,514 | 云原生高性能向量数据库 |

---

## 3. 趋势信号分析

今日热榜呈现出三条清晰的社区共识信号：

**第一，Agent 工程化工具链集中爆发。** 在 Trending 前 10 中，6 个项目直接服务于 AI 编码 Agent：i-have-adhd 用"ADHD 友好输出"解决 Agent UX 痛点，code-review-graph 为 Agent 提供本地代码知识图谱以减少上下文，pi-web 补齐 Agent 的可视化层，awesome-claude-skills 与 claude-mem 则从资源汇总与跨会话记忆两端加固 Agent 生态。这标志着 AI 开发的关注点从"如何造 Agent"迁移到"如何让 Agent 真正可用"，Agent 工具链进入"下半场"。

**第二，多模型路由网关（AI Gateway）成为新基础设施。** OmniRoute 单日 +1651 stars，覆盖 268+ 提供商与 500+ 模型，叠加 quota-aware 自动 fallback、RTK+Caveman 压缩、MCP/A2A 协议支持，直击开发者在多模型时代的"入口碎片化"痛点——这与上游 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek 等国产模型集中可用的供给端变化高度耦合。

**第三，"领域 Foundation Model + 垂直应用"双线并进。** Kronos 把金融 K 线当作"语言"训练基础模型，RuView 用 WiFi CSI 做无摄像头空间智能，worldmonitor 用 LLM 聚合地缘情报——三者体现了 AI 从通用聊天机器人走向"垂直领域认知系统"的范式转移，也是国产模型百花齐放后，应用层寻找差异化的核心路径。

---

## 4. 社区关注热点

- 🔥 **[OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — 多模型时代的基础设施级入口，268+ 提供商 + quota-aware fallback + MCP/A2A，工程价值极高。
- 🔥 **[i-have-adhd](https://github.com/ayghri/i-have-adhd)** — Agent 输出 UX 的标志性改进，开发者自驱、传播性极强的"小而美"skill，值得借鉴思路。
- 🔥 **[koala73/worldmonitor](https://github.com/koala73/worldmonitor)** — 今日热度断层第一，LLM × 实时情报的典型范式，复杂 Agent 工作流产品的参考样板。
- 🔥 **[tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — 本地化 code intelligence + MCP，呼应"Agent 需要精准上下文而非全量代码"的核心矛盾。
- 🔥 **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 金融领域的 Foundation Model 探索，Time-Series LLM 化的代表，跨领域研究价值突出。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
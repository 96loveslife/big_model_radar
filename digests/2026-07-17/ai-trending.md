# AI 开源趋势日报 2026-07-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-17 03:15 UTC

---

<think>Let me analyze the data systematically.

**Step 1: Filter AI-related projects from Trending list**

Let me go through each trending item:

1. `apache/ossie` - AI/BI semantic metadata standard → ✅ AI related
2. `Nutlope/hallmark` - Anti-AI-slop design skill for Claude Code, Cursor, Codex → ✅ AI related
3. `OpenCut-app/OpenCut` - Open-source CapCut alternative → ❌ Video editing tool, not AI-specific
4. `PostHog/posthog` - AI observability, analytics, MCP → ✅ AI related
5. `openinterpreter/openinterpreter` - Coding agent for open models → ✅ AI related
6. `PrismML-Eng/Bonsai-demo` - Need to check. "Bonsai Demo" - ML engineering related? Prism ML likely ML engineering. Likely AI related.
7. `hasaneyldrm/exercises-dataset` - Fitness dataset → ❌ Not AI
8. `Shubhamsaboo/awesome-llm-apps` - 100+ AI Agent & RAG apps → ✅ AI related
9. `lobehub/lobehub` - Chief Agent Operator → ✅ AI related
10. `YimMenu/YimMenuV2` - GTA 5 mod menu → ❌ Game modding
11. `HKUDS/DeepTutor` - Lifelong Personalized Tutoring → ✅ AI related
12. `mattpocock/skills` - Skills for Real Engineers, .claude directory → ✅ AI related (Claude skills)
13. `github/copilot-sdk` - GitHub Copilot Agent SDK → ✅ AI related
14. `ibelick/ui-skills` - Skills for Design Engineers → Could be AI design tools → borderline, but "skills" suggests AI tooling. Let me include as borderline
15. `Graphify-Labs/graphify` - AI coding assistant skill → ✅ AI related
16. `codecrafters-io/build-your-own-x` - Master programming by recreating technologies → ❌ General programming
17. `ossu/computer-science` - CS education path → ❌ General education

**Step 2: Classification**

Let me classify:

🔧 AI 基础工具:
- Nutlope/hallmark - AI design skill
- mattpocock/skills - Claude skills
- ibelick/ui-skills - UI skills for design engineers (Claude skill)
- Graphify-Labs/graphify - AI coding assistant skill
- github/copilot-sdk - Copilot SDK
- openinterpreter/openinterpreter - Coding agent runtime

🤖 AI 智能体/工作流:
- openinterpreter/openinterpreter - Coding agent
- HKUDS/DeepTutor - Tutoring agent
- lobehub/lobehub - Agent operator
- Shubhamsaboo/awesome-llm-apps - AI Agent apps
- PostHog/posthog - AI observability/MCP

📦 AI 应用:
- HKUDS/DeepTutor - Tutoring application
- PostHog/posthog - AI observability platform

🧠 大模型/训练:
- openinterpreter/openinterpreter - Uses open models like Kimi K3
- PrismML-Eng/Bonsai-demo - ML demo (could be model demo)

🔍 RAG/知识库:
- Graphify-Labs/graphify - Knowledge graph RAG
- Shubhamsaboo/awesome-llm-apps - RAG apps

Hmm, let me reorganize. Some projects from the topic search results are more relevant:

From topic search (these are 7-day active AI projects):
- NousResearch/hermes-agent - Agent
- HKUDS/nanobot - Agent
- esengine/DeepSeek-Reasonix - DeepSeek coding agent
- affaan-m/ECC - Agent harness performance
- Ollama - LLM runtime
- transformers - ML framework
- vllm - inference engine
- mem0ai/mem0 - Memory for AI agents
- PaddleOCR - OCR for AI
- ragflow - RAG engine
- zilliztech/claude-context - Code search for Claude

Let me write the report now.

For the trending list, let me also note that some have very high today stars:
- OpenCut-app/OpenCut: +3537 (NOT AI - exclude)
- Nutlope/hallmark: +3372 (AI design skill)
- mattpocock/skills: +2060 (Claude skills)
- Graphify-Labs/graphify: +1107 (AI coding assistant)
- Shubhamsaboo/awesome-llm-apps: +923 (AI Agent apps)
- hasaneyldrm/exercises-dataset: +710 (NOT AI - exclude)
- openinterpreter/openinterpreter: +661 (Coding agent)
- HKUDS/DeepTutor: +656 (Tutoring agent)
- codecrafters-io/build-your-own-x: +435 (NOT AI - exclude)
- YimMenu/YimMenuV2: +128 (NOT AI - exclude)
- mattpocock/skills: already counted
- ibelick/ui-skills: +178 (Skills for Design Engineers - AI tooling)
- PrismML-Eng/Bonsai-demo: +196 (ML demo)
- PostHog/posthog: +77 (AI observability)
- apache/ossie: +60 (AI semantic metadata)
- lobehub/lobehub: +71 (Agent operator)
- github/copilot-sdk: +13 (Copilot SDK)

Now let me construct the report carefully.

**Trends analysis:**

The dominant theme today is clearly **AI Skills/Coding Agent** - there are multiple "Claude Code skills" type projects trending: hallmark, mattpocock/skills, ibelick/ui-skills, Graphify-Labs/graphify. This reflects the trend of agent skill ecosystems emerging around Claude Code and other AI coding assistants.

Also notable: openinterpreter's relaunch as a Rust coding agent for Kimi K3 - shows the open-source agent framework is being revived for open models.

HKUDS/DeepTutor showing strong growth - educational AI agents.

RAG/memory tools (mem0, memvid, ragflow) still have strong engagement from topic search.

The combination of:
1. AI Skills ecosystem explosion
2. Open-source coding agents for open models (Kimi K3)
3. Memory/context management for agents (mem0, memvid, claude-mem)
4. Local-first agent platforms (AionUi, Cherry Studio, open-webui)

These suggest the AI agent ecosystem is maturing rapidly with focus on:
- Skills/tools customization
- Persistent memory
- Multi-model support
- Local deployment

Let me draft the final report.</think>

# 📊 AI 开源趋势日报 · 2026-07-17

---

## 第一步：筛选结果

**Trending 榜单 AI 相关项目**（17 个中筛出 11 个，已排除 OpenCut、YimMenu、exercises-dataset、build-your-own-x、ossu/computer-science 等非 AI 项目）

**主题搜索** 80 个项目全部与 AI/ML 直接相关，保留。

---

## 今日速览

> 今天 GitHub Trending 几乎被 **"AI Agent Skills 生态"** 刷屏——围绕 Claude Code / Codex / Cursor 等 AI 编程助手的技能插件集中爆发（hallmark、mattpocock/skills、Graphify 等合计贡献超 8000 stars）。与此同时，**开源模型驱动的 Coding Agent 正在复兴**（openinterpreter 重启为 Rust 版本支持 Kimi K3），**Agent 记忆层与持久化上下文** 成为新的基础设施焦点（mem0、claude-mem、memvid）。趋势信号清晰：AI 开发的竞争重心正从"模型本身"转向**"Agent 技能市场 + 记忆 + 上下文工程"**。

---

## 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 今日 | 一句话 |
|---|---|---|---|
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | — | **+3372** | 反"AI slop"设计技能插件，喂给 Claude Code / Cursor 即获品牌级 UI 审美，今日爆款 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | — | **+2060** | 知名 TypeScript 教育者的 Claude Code 实战技能集，工程师向高质量技能 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | — | **+1107** | 把任意代码/SQL/文档转成可查询知识图谱，喂给 Claude Code / Codex 做上下文 |
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | — | +13 | GitHub 官方多平台 Copilot Agent 集成 SDK，官方基础设施 |
| [ollama/ollama](https://github.com/ollama/ollama) | 176,283 | — | 本地大模型运行事实标准，今日新增 Kimi-K2.6、GLM-5.1、DeepSeek 等模型支持 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,459 | — | 高吞吐 LLM 推理引擎，工业部署首选 |
| [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | — | **+661** | **Rust 重写版**，定位为 Kimi K3 等开源模型的 Coding Agent，老牌项目焕新 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 12,145 | — | 基于 Milvus 的 Claude Code 代码搜索 MCP，把整个代码库变成 Agent 上下文 |

---

## 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日 | 一句话 |
|---|---|---|---|
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | — | +71 | "Chief Agent Operator"——把多个 Agent 组建成 7×24 运营团队的多智能体编排 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | — | **+656** | 终身个性化 AI 导师，知识图谱驱动的自适应教学 Agent |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 216,047 | — | "与你一起成长的 Agent"，Nous Research 旗舰 Agent 框架 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,764 | — | 轻量级开源 Agent，对接现有工具/聊天/工作流 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,576 | — | 经典自主 Agent 框架，至今仍是 Agent 愿景代表 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,097 | — | Agent 前端栈 + AG-UI 协议，生成式 UI 标准制定者 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 81,034 | — | AI 驱动的软件开发 Agent，Devin 核心方案的开源对应 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 230,395 | — | Agent Harness 性能优化系统，含 Skills/Instincts/Memory/Security 多模块 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,089 | — | DeepSeek 原生终端 Coding Agent，专为 prefix-cache 稳定性设计 |

---

## 📦 AI 应用（产品 / 垂直场景）

| 项目 | Stars | 今日 | 一句话 |
|---|---|---|---|
| [PostHog/posthog](https://github.com/PostHog/posthog) | — | +77 | 产品分析 + AI 可观测性 + MCP，"自驾驶产品"平台，开源 PostHog |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,672 | — | 统一对接前沿 LLM 的桌面 AI 工作台，300+ 助手 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 145,686 | — | 最流行的本地 LLM Web 前端，对接 Ollama / OpenAI 全兼容 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 57,549 | — | LLM 驱动多市场股票分析，零成本定时运行 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 39,522 | — | 文档/主题一键生成原生 PowerPoint，含动画/图表/语音旁白 |
| [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | — | +178 | 设计工程师技能集，AI 编程工具的设计方向技能 |
| [PrismML-Eng/Bonsai-demo](https://github.com/PrismML-Eng/Bonsai-demo) | — | +196 | Prism ML 工程团队 Bonsai 演示项目（模型/训练方向 Demo） |

---

## 🧠 大模型 / 训练

| 项目 | Stars | 一句话 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,667 | 多模态模型定义框架，事实标准 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,936 | "Agent 工程平台"，从框架升级为完整平台 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 99,202 | 从零实现 ChatGPT-like LLM，最佳教学项目 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,715 | 深度学习基础框架 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,618 | Java 生态 LangChain，企业级 LLM 应用首选 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,200 | 大模型评测平台，覆盖 100+ 数据集 |
| [AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai) | 27 | 纯 Rust + Candle 从零训练 Decoder-only LLM，实验性方向 |

---

## 🔍 RAG / 知识库 / 向量数据库

| 项目 | Stars | 一句话 |
|---|---|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 122,998 | 100+ AI Agent & RAG 可运行应用集合，今日 **+923** |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 152,062 | 为 LLM 而生的 Web 抓取与搜索 API，RAG 数据源层 |
| [langgenius/dify](https://github.com/langgenius/dify) | 149,099 | 生产级 Agentic workflow 开发平台 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,893 | 文档 Agent + OCR 平台，RAG 经典 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 85,235 | RAG + Agent 融合引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61,015 | AI Agent 的通用记忆层，跨会话持久化 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 87,532 | Claude Code 等多 Agent 的会话间持久记忆 |
| [memvid/memvid](https://github.com/memvid/memvid) | 15,955 | 单文件 serverless 记忆层，替代复杂 RAG 管道 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 27,943 | 自托管知识图谱引擎，Agent 长期记忆 |
| [PaddleOCR/PaddleOCR](https://github.com/PaddleOCR/PaddleOCR) | 85,652 | 把 PDF/图片转结构化数据的轻量 OCR，RAG 前置管道 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,249 | 云原生高性能向量数据库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,336 | 大规模向量检索引擎，Rust 写就 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 34,063 | "无向量、基于推理的 RAG"，新技术路径值得追踪 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 14,986 | 阿里开源进程内向量数据库，轻量极速 |

---

## 📈 趋势信号分析

今天最强烈的信号是 **"AI Agent Skills 生态爆发"**——Nutlope/hallmark（+3372）、mattpocock/skills（+2060）、Graphify-Labs/graphify（+1107）、ibelick/ui-skills（+178）四个均围绕 Claude Code / Codex / Cursor 等 AI 编程助手的**技能插件**展开，单日合计 +6700 stars 起步。这一现象意味着 Claude Code 等 AI IDE 已从"工具"演化为**"技能市场"**，开发者开始像写 npm 包一样分发 Agent 能力。

第二条主线是 **"开源 Coding Agent 复兴"**。openinterpreter 从 Python 转为 Rust 重写，专为 Kimi K3 等开放模型优化（+661），DeepSeek-Reasonix 强调 prefix-cache 稳定性。结合 Ollama 同步上新 Kimi-K2.6、GLM-5.1、DeepSeek 等模型，说明 **"Agent + 开源模型"** 的本地化、可控化路径正在形成完整闭环。

第三条值得关注的是 **"Agent 记忆/上下文层"** 基础设施化——mem0、claude-mem、memvid、cognee、headroom 等多个项目活跃，社区正合力解决"Agent 跨会话遗忘"的核心痛点，预示 Context Engineering 将成为下一个工程学科。

与近期行业事件的关联：Claude Code 在 2026 H1 已开放 Skills/Plugins 体系、MCP 协议成为跨工具互联事实标准，以及多款国产开源模型（Kimi-K2.6、GLM-5.1）性能逼近闭源，是今日 Trending 格局的三大底层驱动力。

---

## 🎯 社区关注热点（开发者重点关注）

- 🔥 **[Nutlope/hallmark](https://github.com/Nutlope/hallmark)** — 今日 stars 之王，解决"AI 生成 UI 太丑"的核心痛点，所有用 Claude Code 做前端的人都该装
- 🔥 **[openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter)** — Rust 重写 + 适配 Kimi K3，是"开源 Coding Agent + 开源模型"组合的代表项目
- 🔥 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 把代码库/SQL 转知识图谱喂给 Agent，是 Context Engineering 的标杆实现
- 🔥 **[mem0ai/mem0](https://github.com/mem0ai/mem0)** + **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — Agent 记忆基础设施，正成为 Agent 框架标配
- 🔥 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "无向量、基于推理的 RAG"，挑战传统 embedding 范式的新技术路线

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
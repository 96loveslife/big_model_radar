# AI 开源趋势日报 2026-08-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-12 02:22 UTC

---

<think>Let me analyze the data carefully and create a structured AI open source trends report.

**Step 1: Filter AI-related projects**

From Trending (17 repos):
1. msitarzewski/agency-agents - AI agency with specialized agents ✅ AI
2. semantica-agi/semantica - Graph-Native Infrastructure for AI ✅ AI
3. nvm-sh/nvm - Node Version Manager ❌ Not AI
4. addyosmani/agent-skills - Engineering skills for AI coding agents ✅ AI
5. ZhuLinsen/daily_stock_analysis - LLM-powered stock analysis ✅ AI
6. vitali87/code-graph-rag - RAG with knowledge graphs ✅ AI
7. anthropics/skills - Agent Skills ✅ AI
8. 3b1b/manim - Animation engine ⚠️ Not primarily AI (math animation)
10. HKUDS/DeepTutor - AI tutoring ✅ AI
11. stablyai/orca - ADE for parallel agents ✅ AI
12. paperclipai/paperclip - Manage agents at work ✅ AI
13. huggingface/transformers - ML framework ✅ AI
14. harveyai/harvey-labs - Benchmark for agent capabilities ✅ AI
15. jaywcjlove/awesome-mac - macOS software ❌ Not AI
16. calesthio/OpenMontage - Agentic video production ✅ AI
17. practical-tutorials/project-based-learning - Project tutorials ❌ Not AI
18. PrimeIntellect-ai/prime-agent - Self-improving RLM agent ✅ AI

So from trending, the AI-relevant projects are:
- msitarzewski/agency-agents (+958)
- semantica-agi/semantica (+893)
- addyosmani/agent-skills (+578)
- ZhuLinsen/daily_stock_analysis (+243)
- vitali87/code-graph-rag (+341)
- anthropics/skills (+485)
- HKUDS/DeepTutor (+812)
- stablyai/orca (+875)
- paperclipai/paperclip (+748)
- huggingface/transformers (+80)
- harveyai/harvey-labs (+28)
- calesthio/OpenMontage (+458)
- PrimeIntellect-ai/prime-agent (+1138)

Excluded: nvm, manim, awesome-mac, project-based-learning

From AI topic search (79 repos):
All of these are AI-related since they come from AI topic searches. I'll categorize them.

**Step 2: Categorization**

🔧 AI 基础工具 (Frameworks, SDK, inference engines, dev tools, CLI):
- langgenius/dify (RAG/Agent builder)
- langchain-ai/langchain (Agent engineering platform)
- infiniflow/ragflow (RAG engine)
- FlowiseAI/Flowise (Visual AI Agents builder)
- run-llama/llama_index (Document agent platform)
- Mintplex-Labs/anything-llm (Local-first agent)
- mem0ai/mem0 (Memory layer for agents)
- huggingface/transformers (Model framework)
- langchain4j/langchain4j (Java LLM library)
- neuml/txtai (Semantic search framework)
- ollama/ollama (LLM runner)
- firecrawl/firecrawl (Web scraping API for AI)
- addyosmani/agent-skills (Agent skills)
- anthropics/skills (Agent skills)

🤖 AI 智能体/工作流:
- msitarzewski/agency-agents (+958)
- stablyai/orca (+875)
- paperclipai/paperclip (+748)
- PrimeIntellect-ai/prime-agent (+1138)
- HKUDS/DeepTutor (+812)
- harveyai/harvey-labs (+28)
- CopilotKit/CopilotKit (Frontend for agents)
- browser-use/browser-use (Browser automation for AI)
- HKUDS/nanobot (Personal AI agent)
- zhayujie/CowAgent (AI assistant)
- agentscope-ai/QwenPaw (Personal AI assistant)
- NousResearch/hermes-agent (Agent that grows)
- shareAI-lab/learn-claude-code (Claude code-like agent)
- Panniantong/Agent-Reach (Agent with internet access)
- Diet.../ponytail (Agent harness optimization)
- affaan-m/ECC (Agent harness optimization)
- Eigenwise/atomic-agents (Building AI agents atomically)

📦 AI 应用:
- ZhuLinsen/daily_stock_analysis (+243) - Stock analysis
- open-webui/open-webui - AI Interface
- CherryHQ/cherry-studio - AI productivity studio
- jeecgboot/JeecgBoot - Low code AI platform
- hugohe3/ppt-master - AI PPT generator
- harry0703/MoneyPrinterTurbo - AI video generator
- santifer/career-ops - AI job search
- calesthio/OpenMontage (+458) - Video production
- semantica-agi/semantica (+893) - Context infrastructure
- thesiyuan/siyuan - Knowledge workspace

🧠 大模型/训练:
- jingyaogong/minimind (Train 64M LLM)
- 0xPlaygrounds/rig (LLM in Rust)
- skyzh/tiny-llm (LLM inference)
- AarambhDevHub/aarambh-studio (LLM in Rust)
- llm-jp/awesome-japanese-llm
- rasbt/LLMs-from-scratch
- thinkwee/AgentsMeetRL
- Picovoice/picollm
- Significant-Gravitas/AutoGPT

🔍 RAG/知识库:
- langgenius/dify
- infiniflow/ragflow
- VectifyAI/PageIndex (Vectorless RAG)
- qdrant/qdrant (Vector DB)
- milvus-io/milvus (Vector DB)
- topoteretes/cognee (AI memory)
- weaviate/weaviate (Vector DB)
- alibaba/zvec (Vector DB)
- lancedb/lancedb (Embedded retrieval)
- vitali87/code-graph-rag (+341)
- Graphify-Labs/graphify (Knowledge graph)
- thedotmack/claude-mem (Persistent context)
- headroomlabs-ai/headroom (Context compression)
- MeiliSearch (AI-powered search)
- databendlabs/databend (Data warehouse for AI)
- oceanbase/oceanbase (AI workloads)

Now I'll create the report.

Let me think about the trends:
1. Agent skills/harnesses are dominating - PrimeIntellect prime-agent, addyosmani/agent-skills, anthropics/skills, stablyai/orca, paperclipai, agency-agents
2. This suggests the industry is moving from "building agents" to "managing fleets of agents" and giving agents production-grade skills
3. Code-graph-rag and graphify show knowledge graphs + RAG for code understanding is hot
4. Harvey Labs benchmark shows legal agent benchmarks emerging
5. The pattern matches Claude Code / agent harness ecosystem growth

Let me write the report now.</think>

# AI 开源趋势日报 · 2026-08-12

---

## 第一步：AI 相关性筛选

**Trending 榜单去留判定（17 个仓库 → 13 个 AI 相关）**

| 仓库 | 判定 | 原因 |
|---|---|---|
| `msitarzewski/agency-agents` (+958) | ✅ 保留 | AI 智能体集合 |
| `semantica-agi/semantica` (+893) | ✅ 保留 | 上下文 AI 基础设施 |
| `nvm-sh/nvm` (+22) | ❌ 略去 | Node 版本管理，通用工具 |
| `addyosmani/agent-skills` (+578) | ✅ 保留 | AI 编码智能体技能 |
| `ZhuLinsen/daily_stock_analysis` (+243) | ✅ 保留 | LLM 驱动应用 |
| `vitali87/code-graph-rag` (+341) | ✅ 保留 | 代码 RAG + 知识图谱 |
| `anthropics/skills` (+485) | ✅ 保留 | Agent Skills |
| `3b1b/manim` (+197) | ❌ 略去 | 数学动画引擎，非 AI |
| `HKUDS/DeepTutor` (+812) | ✅ 保留 | AI 个性化辅导 |
| `stablyai/orca` (+875) | ✅ 保留 | 多 Agent 并行 ADE |
| `paperclipai/paperclip` (+748) | ✅ 保留 | Agent 管理平台 |
| `huggingface/transformers` (+80) | ✅ 保留 | ML 基础框架 |
| `harveyai/harvey-labs` (+28) | ✅ 保留 | 法律 Agent 基准 |
| `jaywcjlove/awesome-mac` (+298) | ❌ 略去 | macOS 软件列表 |
| `calesthio/OpenMontage` (+458) | ✅ 保留 | Agentic 视频生产 |
| `practical-tutorials/project-based-learning` (+401) | ❌ 略去 | 通用编程教程合集 |
| `PrimeIntellect-ai/prime-agent` (+1138) | ✅ 保留 | 自进化 RLM Agent |

---

## 今日速览

今日 GitHub Trending 被 **Agent 基础设施**全面占领——`prime-agent`（+1138）、`agency-agents`（+958）、`orca`（+875）、`paperclip`（+748）等多 Agent / Agent 编排类项目同时爆发，标志着社区关注点已从"如何造一个 Agent"转向"如何管理一群 Agent"。Anthropic 官方 `skills` 与 `addyosmani/agent-skills` 同步登榜，说明 **Agent Skills / Harness 标准化**正在形成行业共识。底层方向上，向量库与知识图谱驱动的代码 RAG 仍是热门，`vitali87/code-graph-rag`、`VectifyAI/PageIndex` 等代表项目持续高活跃。

---

## 各维度热门项目

### 🔧 AI 基础工具

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** ⭐144,014 ｜ Agent 工程平台事实标准
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐163,830 (+80) ｜ 多模态模型定义与训练框架
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐178,301 ｜ 本地 LLM 部署首选 CLI（已支持 Kimi-K2.6、GLM-5.2 等国产模型）
- **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)** ⭐12,844 ｜ JVM 生态 LLM 集成库，企业 Java 团队入口
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐165,922 ｜ AI 时代的爬虫/Scrape API
- **[neuml/txtai](https://github.com/neuml/txtai)** ⭐12,870 ｜ 全栈语义搜索 + LLM 编排框架
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** ⭐8,245 ｜ Rust 语言 LLM 应用框架，新兴技术栈
- **[dg/ai-access](https://github.com/dg/ai-access)** ⭐54 ｜ 多模型统一接口库（PHP）

### 🤖 AI 智能体 / 工作流

- **[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)** ⭐0 (+1138 today) ｜ **今日榜首**——自进化的 RLM Agent，专为编码与长程自主任务设计
- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐0 (+958 today) ｜ "一站式 AI Agency"，提供多角色专家 Agent 模板
- **[stablyai/orca](https://github.com/stablyai/orca)** ⭐0 (+875 today) ｜ 面向并行 Agent 集群的 ADE 桌面/移动端工具
- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** ⭐0 (+812 today) ｜ 终身个性化 AI 辅导 Agent
- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** ⭐0 (+748 today) ｜ 工作中管理 Agent 的开源平台
- **[anthropics/skills](https://github.com/anthropics/skills)** ⭐0 (+485 today) ｜ Anthropic 官方 Agent Skills 仓库
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐0 (+578 today) ｜ 生产级 AI 编码 Agent 技能集（Google 工程师）
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐229,069 ｜ 与用户共同成长的 Agent
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐108,838 ｜ 让 Agent 操作浏览器的标杆项目
- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** ⭐46,861 ｜ 轻量自托管个人 Agent 框架

### 📦 AI 应用

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐62,180 (+243 today) ｜ LLM 驱动的多市场股票分析，零成本定时运行
- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** ⭐0 (+458 today) ｜ 世界首个开源 Agentic 视频生产系统，12 条流水线、700+ 技能
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐148,514 ｜ 最流行的本地 LLM Web UI
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐50,307 ｜ 统一多模型 AI 生产力工作室
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐44,904 ｜ 文档→原生 PPT，含动画与配音
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐102,651 ｜ 关键词一键生成高清短视频
- **[jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot)** ⭐47,366 ｜ 企业级 AI 低代码平台
- **[siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)** ⭐45,744 ｜ 人机协作的隐私优先知识工作空间

### 🧠 大模型 / 训练

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐102,440 ｜ 从零手写 ChatGPT 式 LLM 的经典教程
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐54,568 ｜ 2 小时训练 64M 小型 LLM
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** ⭐4,467 ｜ Apple Silicon 上的迷你 vLLM + Qwen 教学
- **[AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)** ⭐75 ｜ 纯 Rust + Candle 从零实现的 Decoder-only LLM
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐186,531 ｜ 自主 Agent 鼻祖，仍在持续演进
- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** ⭐33,987 ｜ 围绕 prefix-cache 稳定性优化的 DeepSeek 编码 Agent

### 🔍 RAG / 知识库

- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐152,133 ｜ Agent + RAG 工作流可视化编排
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐87,300 ｜ 领先的开源 RAG 引擎，融合 Agent 能力
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐45,605 ｜ 云原生向量数据库
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐33,924 ｜ Rust 编写的高性能向量搜索引擎
- **[vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)** ⭐0 (+341 today) ｜ **今日热门**——基于知识图谱的多语言代码库 RAG
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐35,145 ｜ Vectorless、基于推理的文档索引 RAG
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** ⭐29,960 ｜ 为 Agent 提供持久长期记忆的知识图谱引擎
- **[alibaba/zvec](https://github.com/alibaba/zvec)** ⭐15,425 ｜ 阿里开源的轻量级进程内向量库
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** ⭐105,346 ｜ 把代码库/SQL/PDF 转成可查询知识图谱的 Claude/Cursor 技能
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐90,452 ｜ Agent 跨会话持久记忆
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** ⭐65,981 ｜ LLM 上下文压缩，可减 20-95% token

---

## 趋势信号分析

今日 Trending 的最大信号是 **Agent 生态从"单 Agent 框架"全面升级到"Agent 工厂/技能市场"**。`prime-agent`（+1138）、`agency-agents`（+958）、`orca`（+875）、`paperclip`（+748）四款产品同一天破 700 stars，它们的共同关键词是 *fleet / parallel / harness*，说明社区核心需求已从"如何调用 LLM"转移到"如何编排和监管多个 Agent 协作"。

与此呼应，Anthropic 官方 `skills` 仓库（+485）与 Google 工程师 `addyosmani/agent-skills`（+578）几乎同步登榜，**Agent Skills 标准化**正在快速形成——类似于早期 MCP 协议的出现，这是构建可复用、可组合 Agent 能力的关键拼图。

新兴技术栈方面，`0xPlaygrounds/rig`（Rust LLM 框架）与 `aarambh-studio`（纯 Rust 训练 LLM）标志着 Rust 正在成为 LLM 基础设施的第三语言，与 Python、Go 并列。`vitali87/code-graph-rag` 与 `Graphify-Labs/graphify` 共同推动**知识图谱 + 代码 RAG** 取代纯向量检索成为主流方向，契合企业级 codebase 理解需求。

行业事件关联上，Anthropic、PrimeIntellect、Nous Research、DeepSeek 多家厂商的 Agent 项目同日出圈，与近期 **Claude Code、Cursor 等 Agent IDE 商业化加速**的宏观节奏一致，社区开源层正在快速补齐"个人/企业级 Agent 操作系统"的空白。

---

## 社区关注热点

- 🔥 **[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)** (+1138) —— 自进化 RLM Agent 的新范式尝试，RLM（强化语言模型）路线值得跟踪
- 🔥 **[stablyai/orca](https://github.com/stablyai/orca)** (+875) —— 首个成熟的"多 Agent 集群 IDE"，预示 Agent 桌面工具即将爆发
- 🔥 **[vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)** (+341) —— 知识图谱替代纯向量检索的代表性项目，代码理解方向值得关注
- 👀 **[anthropics/skills](https://github.com/anthropics/skills)** (+485) —— Anthropic 官方背书的 Agent Skills 规范，可能成为行业标准
- 👀 **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** (+458) —— 把 AI 编码助手改造成视频生产工作站的尝试，Agent 跨模态落地新场景

---

*报告基于 2026-08-12 GitHub Trending 与 AI 主题搜索数据生成。*

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
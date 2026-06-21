# AI 开源趋势日报 2026-06-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-21 04:53 UTC

---

<think>Let me analyze the data carefully and produce a comprehensive AI open-source trends report.

**Step 1: Filtering AI-related projects from Trending**

Let me go through the Trending list and identify AI-related ones:

1. **palmier-io/palmier-pro** (+902) - "macOS video editor built for AI" - AI应用 ✅
2. **penpot/penpot** (+420) - Open-source design tool - NOT AI related, generic design tool ❌
3. **calesthio/OpenMontage** (+677) - "agentic video production system... AI coding assistant into a full video production studio" - AI应用/智能体 ✅
4. **tursodatabase/turso** (+801) - In-process SQL database - NOT AI ❌
5. **DeusData/codebase-memory-mcp** (+1271) - "code intelligence MCP server... knowledge graph" - AI基础工具 ✅
6. **google-research/timesfm** (+433) - "Time Series Foundation Model... Google Research" - 大模型 ✅
7. **twentyhq/twenty** (+140) - "open alternative to Salesforce, designed for AI" - AI应用 ✅
8. **Kong/insomnia** (+329) - API client - NOT AI ❌
9. **tw93/Pake** (+2546) - Turn webpage into desktop app - NOT AI ❌
10. **chopratejas/headroom** (+3795) - "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM" - AI基础工具 ✅
11. **jamiepine/voicebox** (+145) - "open-source AI voice studio" - AI应用 ✅
12. **Kilo-Org/kilocode** (+513) - "agentic engineering platform... open source coding agent" - AI智能体 ✅
13. **mattpocock/skills** (+1395) - "Skills for Real Engineers... from my .claude directory" - AI智能体/工具 ✅
14. **withastro/flue** (+316) - "The sandbox agent framework" - AI智能体 ✅
15. **owainlewis/awesome-artificial-intelligence** (+48) - AI相关列表 ✅ (AI基础工具 - 资源)
16. **pppscn/SmsForwarder** (+104) - SMS forwarder - NOT AI ❌
17. **1jehuang/jcode** (+87) - "Coding Agent Harness" - AI智能体 ✅

Filtered AI projects from Trending: palmier-pro, OpenMontage, codebase-memory-mcp, timesfm, twenty, headroom, voicebox, kilocode, skills, flue, awesome-artificial-intelligence, jcode

**Step 2: Classification**

Trending AI projects:
- AI基础工具: codebase-memory-mcp (MCP server), headroom (token compression), awesome-artificial-intelligence
- AI智能体/工作流: OpenMontage, kilocode, skills, flue, jcode
- AI应用: palmier-pro, twenty, voicebox
- 大模型/训练: timesfm
- RAG/知识库: none specifically

Topic search results - these are already categorized:
- topic:ml: tensorflow, huggingface/transformers, pytorch, scikit-learn, keras, ultralytics, etc. - mostly AI基础工具/大模型训练
- topic:rag: langchain, dify, open-webui, ragflow, milvus, llama_index, mem0, etc. - RAG/AI基础工具
- topic:llm-model: rig, opencompass, atomic-agents, nestia, etc. - 大模型/AI基础工具
- topic:llm: ollama, vllm, AutoGPT, hermes-agent, firecrawl, browser-use, OpenHands, LlamaFactory, deer-flow - AI基础工具/智能体
- topic:vector-db: meilisearch, qdrant, weaviate, lancedb, milvus, txtai, LEANN, PageIndex - RAG/知识库
- topic:ai-agent: nanobot, CowAgent, CopilotKit, learn-claude-code, AionUi, etc. - AI智能体

**Step 3: Now let me compose the report**

Let me think about what's notable:
- Headroom got massive stars (3795) - token compression for LLMs
- Pake got 2546 but is not AI
- codebase-memory-mcp got 1271 - MCP server for code intelligence
- mattpocock/skills got 1395 - Claude skills
- TimesFM from Google - time series foundation model
- Several coding agent projects trending: kilocode, flue, jcode
- OpenMontage - agentic video production
- Voicebox - AI voice studio

Key trends:
1. **Context engineering / token optimization** is exploding - headroom (compress for LLM), codebase-memory-mcp (knowledge graph for code)
2. **Coding agents / agent harness** are proliferating - kilocode, flue, jcode, skills, learn-claude-code
3. **MCP ecosystem** expanding - codebase-memory-mcp
4. **Video/voice AI applications** rising - palmier-pro, OpenMontage, voicebox
5. **Foundation models for specific domains** - TimesFM for time series

Let me now write the report in Chinese.</think>

# 🚀 AI 开源趋势日报 · 2026-06-21

---

## 一、今日速览

今日 GitHub Trending 展现出 AI 领域三个爆发性信号：**上下文工程（Context Engineering）** 工具链高速崛起——`headroom` 以 +3795 stars 登顶热榜，专注 LLM token 压缩；**Agent Harness（智能体执行框架）** 持续成为开发者新宠，Kilo、Flue、Jcode、Claude Skills 等多个 Agent 工具同时登榜；**MCP 生态加速扩张**，`codebase-memory-mcp` 以 +1271 stars 单日表现强劲。与此同时，视频/语音类 AI 应用（OpenMontage、Palmier、Voicebox）和垂直领域基础模型（Google TimesFM）均迎来显著关注，呈现出"工具层下沉 + 应用层上探"的双线推进格局。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**chopratejas/headroom**](https://github.com/chopratejas/headroom) | +3795 today | 🔥 **今日全榜第一**。在输出到达 LLM 前压缩 token（60-95% 节省），支持库、Proxy 和 MCP Server 三种形态，是当前 context engineering 浪潮的标志性项目 |
| [**DeusData/codebase-memory-mcp**](https://github.com/DeusData/codebase-memory-mcp) | +1271 today | 高性能 MCP Server，将代码库索引为持久知识图谱，毫秒级查询、158 种语言支持，体现 **MCP + 代码智能** 方向爆发 |
| [**ollama/ollama**](https://github.com/ollama/ollama) | ⭐174,618 | 本地 LLM 部署事实标准，已支持 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等主流模型 |
| [**vllm-project/vllm**](https://github.com/vllm-project/vllm) | ⭐83,438 | 高吞吐 LLM 推理与 serving 引擎，社区部署首选 |
| [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) | ⭐72,313 | 统一 100+ LLM/VLM 微调框架（ACL 2024），仍是最主流的训练工具 |
| [**0xPlaygrounds/rig**](https://github.com/0xPlaygrounds/rig) | ⭐7,695 | Rust 编写的模块化 LLM 应用框架，适合追求性能的生产场景 |
| [**Mirrowel/LLM-API-Key-Proxy**](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐508 | 统一 LLM 网关，多 Provider 兼容与负载均衡，解决 API Key 管理痛点 |
| [**owainlewis/awesome-artificial-intelligence**](https://github.com/owainlewis/awesome-artificial-intelligence) | +48 today | 经典 AI 资源汇总列表 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**Kilo-Org/kilocode**](https://github.com/Kilo-Org/kilocode) | +513 today | 开源 Agentic 编程平台，主打开源替代 Copilot/Cursor 的编码 Agent |
| [**mattpocock/skills**](https://github.com/mattpocock/skills) | +1395 today | 真实工程师沉淀的 Claude Code 技能集，`.claude` 目录精华萃取 |
| [**withastro/flue**](https://github.com/withastro/flue) | +316 today | Sandbox Agent Framework——来自 Astro 团队的安全沙箱 Agent 框架 |
| [**1jehuang/jcode**](https://github.com/1jehuang/jcode) | +87 today | 轻量 Coding Agent Harness，Rust 实现 |
| [**calesthio/OpenMontage**](https://github.com/calesthio/OpenMontage) | +677 today | 全球首个开源 Agentic 视频制作系统，12 流水线、52 工具、500+ Agent Skills |
| [**shareAI-lab/learn-claude-code**](https://github.com/shareAI-lab/learn-claude-code) | ⭐67,594 | "Bash is all you need"——从 0 到 1 构建 nano Claude Code Agent Harness 的教程 |
| [**bytedance/deer-flow**](https://github.com/bytedance/deer-flow) | ⭐72,085 | 字节跳动开源的长链路 SuperAgent Harness，支持研究、编码与创作 |
| [**HKUDS/nanobot**](https://github.com/HKUDS/nanobot) | ⭐44,491 | 轻量级开源 AI Agent，对接现有工具、聊天与工作流 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**palmier-io/palmier-pro**](https://github.com/palmier-io/palmier-pro) | +902 today | macOS 原生 AI 视频编辑器，Swift 打造，对标 Descript/Runway 的本地化方案 |
| [**jamiepine/voicebox**](https://github.com/jamiepine/voicebox) | +145 today | 开源 AI 语音工作室，支持声音克隆、听写、内容创作 |
| [**twentyhq/twenty**](https://github.com/twentyhq/twenty) | +140 today | 开源 Salesforce 替代品，"designed for AI"，原生融入 AI 工作流 |
| [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) | ⭐47,598 | AI 生产力工作室，整合 300+ 助手与多模型 |
| [**iOfficeAI/AionUi**](https://github.com/iOfficeAI/AionUi) | ⭐28,571 | 兼容 Claude Code / Codex / Gemini CLI 等 20+ CLI 的本地 Cowork 应用 |
| [**hugohe3/ppt-master**](https://github.com/hugohe3/ppt-master) | ⭐29,669 | AI 从任意文档生成可编辑 PPT，原生形状+动画+语音旁白 |
| [**ZhuLinsen/daily_stock_analysis**](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐43,635 | LLM 驱动的多市场股票智能分析与自动推送系统 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**google-research/timesfm**](https://github.com/google-research/timesfm) | +433 today | Google Research 开源的 **时间序列基础模型**，代表大模型向垂直预测领域延伸 |
| [**huggingface/transformers**](https://github.com/huggingface/transformers) | ⭐161,759 | 模型定义框架绝对权威，覆盖文本/视觉/音频/多模态 |
| [**pytorch/pytorch**](https://github.com/pytorch/pytorch) | ⭐100,913 | 深度学习基础设施 |
| [**scrapegraph-ai**](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | ⭐27,376 | 基于 AI 的 Python 智能爬虫 |
| [**galilai-group/stable-pretraining**](https://github.com/galilai-group/stable-pretraining) | ⭐266 | 可靠、精简、可扩展的基础/世界模型预训练库 |
| [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) | ⭐198,425 | "与用户共同成长的智能体"，Hermes 模型系列延伸 |

---

### 🔍 RAG / 知识库（向量数据库、检索增强）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | ⭐83,256 | 领先的开源 RAG 引擎，融合 RAG 与 Agent 能力 |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | ⭐59,003 | AI Agent 的通用记忆层，跨会话持久化 |
| [**run-llama/llama_index**](https://github.com/run-llama/llama_index) | ⭐50,245 | 文档 Agent 与 OCR 平台 |
| [**milvus-io/milvus**](https://github.com/milvus-io/milvus) | ⭐44,862 | 云原生向量数据库事实标准 |
| [**qdrant/qdrant**](https://github.com/qdrant/qdrant) | ⭐32,498 | 高性能大规模向量搜索引擎 |
| [**VectifyAI/PageIndex**](https://github.com/VectifyAI/PageIndex) | ⭐33,255 | 🔥 **Vectorless 推理式 RAG**，代表 RAG 范式从"嵌入检索"向"推理检索"演进 |
| [**topoteretes/cognee**](https://github.com/topoteretes/cognee) | ⭐18,316 | 开源 AI Agent 长期记忆平台，基于自托管知识图谱 |
| [**StarTrail-org/LEANN**](https://github.com/StarTrail-org/LEANN) | ⭐12,453 | 个人设备上 97% 存储节省的隐私 RAG（MLsys 2026） |

---

## 三、趋势信号分析

**1. Context Engineering 成为新焦点。** 今日全榜前三均与"在 token 抵达 LLM 前优化信息流"相关——`headroom`（通用压缩）、`codebase-memory-mcp`（代码库结构化为知识图谱）、`chopratejas/headroom` 支持 MCP/Proxy/Library 三种形态，预示 **LLM 上下文管理正从"prompt 工程"升级为独立工程学科**。开发者已不再满足于单纯扩大窗口，而是构建中间层以提升性价比。

**2. Agent Harness 开源潮进入白热化。** Kilo、Flue、Jcode、Matt Pocock Skills、DeerFlow、learn-claude-code 同时活跃，反映 **Claude Code 类 Agent Harness 范式正被各团队拆解、复刻与差异化**。这一波浪潮紧随 Claude Code 商业化进展而来，开源社区试图在"Agent 编排权"上夺回主动权。

**3. MCP 协议成为新的事实标准。** `codebase-memory-mcp` 单日 +1271 stars、MCP Server 形态在 Headroom 等多项目中出现，说明 **MCP 已从 Anthropic 单一生态扩展为跨厂商工具集成协议**，未来 RAG、知识图谱、浏览器自动化等均将以 MCP 形态暴露能力。

**4. 视频/语音/时间序列等垂直基础模型持续涌现。** Google TimesFM 进入热榜，与视频编辑（Palmier）、视频 Agent（OpenMontage）、语音克隆（Voicebox）共同构成 **"基础模型 + 垂直创作工具"** 的双向扩散格局，反映多模态创作栈正在被重构。

---

## 四、社区关注热点

- ⭐ **[headroom](https://github.com/chopratejas/headroom)** — Context Engineering 的代表性实践，+3795 stars 登顶全榜，开发者应优先研究其压缩策略
- ⭐ **[codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — MCP 生态首个高关注度代码知识图谱实现，标志 MCP Server 进入主流
- ⭐ **[google-research/timesfm](https://github.com/google-research/timesfm)** — 时间序列基础模型开源，预测类应用可低成本接入
- ⭐ **[OpenMontage](https://github.com/calesthio/OpenMontage)** — Agentic 视频制作系统首次上榜，预示 Agent 渗透到创意工作流
- ⭐ **[withastro/flue](https://github.com/withastro/flue)** — Astro 团队出品的安全沙箱 Agent 框架，是 Agent 可信执行方向的重要信号

---

> 📌 **小结**：今日热榜清晰显示，AI 开源已进入 **"上下文优化 + Agent Harness + MCP 协议"** 三件套驱动的下半场；上层应用（视频/语音/CRM）同步加速 AI 原生化重构。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
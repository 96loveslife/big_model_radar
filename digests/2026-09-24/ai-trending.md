# AI 开源趋势日报 2026-09-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-24 04:08 UTC

---

<think>Let me analyze the data carefully and create a comprehensive AI open-source trends report.

## Step 1: Filtering AI-related projects

### Trending榜单 (17 repos) - AI relevance screening:

1. **anthropics/financial-services** - Python, +664 - Anthropic's financial services solutions. AI-related (Anthropic is an AI company, likely using Claude). Keep.
2. **google/ax** - Go, +1543 - "Google's open agentic orchestration runtime" - AI agent framework. Keep.
3. **davila7/claude-code-templates** - Python, +389 - "CLI tool for configuring and monitoring Claude Code" - AI dev tool. Keep.
4. **BuilderIO/agent-native** - TypeScript, +87 - "A framework for building agentic apps" - AI agent framework. Keep.
5. **obra/superpowers** - Shell, +474 - "An agentic skills framework & software development methodology" - AI agent framework. Keep.
6. **dream-num/univer** - TypeScript, +1142 - "The Office Harness for AI Agents" - AI agent tool. Keep.
7. **Open-Dev-Society/OpenStock** - TypeScript, +344 - "Open-source alternative to expensive market platforms" - Not directly AI-related (it's a financial data platform). Skip or marginal. Actually, looking at it, it doesn't mention AI specifically. Skip.
8. **agent-substrate/substrate** - Go, +558 - "Agent Substrate: the core system" - AI agent infrastructure. Keep.
9. **strands-agents/harness-sdk** - Python, +115 - "Build an agent harness and control it end-to-end" - AI agent SDK. Keep.
10. **HKUDS/CLI-Anything** - Python, +57 - "Making ALL Software Agent-Native" - AI agent tool. Keep.
11. **superdesigndev/treg** - Python, +506 - "OpenRouter for agent tools" - AI agent tool. Keep.
12. **pbakaus/impeccable** - JavaScript, +304 - "The design language that makes your AI harness better at design" - AI-related design tool. Keep.
13. **mvt-project/mvt** - Python, +543 - "Mobile Verification Toolkit" - mobile forensics, NOT AI. Skip.
14. **DeusData/codebase-memory-mcp** - C, +190 - "High-performance code intelligence MCP server" - AI-related (MCP server for code intelligence). Keep.
15. **harry7557558/spirula-studio** - C++, +69 - "Cross-vendor 3D Gaussian Splatting trainer" - 3DGS is AI/computer vision related. Keep.
16. **browser-use/video-use** - Python, +746 - "Edit videos with coding agents" - AI agent for video. Keep.
17. **TNT-Likely/PanWatch** - Python, +95 - "自托管 AI 盯盘助手" - AI stock monitoring. Keep.

### Topic Search results - All 80 are AI-related by topic filter, but let me filter more strictly:
- The topic search already filters by AI topics (rag, llm, vector-db, ai-agent, llm-model, ml)
- Most are clearly AI-related
- Some marginal cases:
  - Developer-Y/cs-video-courses - CS course list, only tagged ml. Marginal.
  - samchon/nestia - NestJS helper with AI chatbot features - marginal
  - netdata/netdata - observability, only tagged ml - marginal
  - JuliaLang/julia - programming language, tagged ml - marginal
  - tensorflow/tensorflow, pytorch/pytorch, scikit-learn, keras - core ML frameworks, keep

Let me keep most but flag the truly non-AI ones:
- Actually since they're all in AI-related topics, I'll keep them all but note that some are more tangential.

## Step 2: Classification

Let me classify the projects:

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- open-webui/open-webui - AI Interface
- langchain-ai/langchain - Agent engineering platform
- davila7/claude-code-templates - Claude Code config tool
- ollama/ollama - LLM inference engine
- langgenius/dify - AI workflow platform
- langchain4j/langchain4j - Java LLM library
- rasbt/LLMs-from-scratch - LLM implementation tutorial
- huggingface/transformers - Model definition framework
- 0xPlaygrounds/rig - LLM Apps in Rust
- headroomlabs-ai/headroom - Token compression tool
- munday-pede/joran - prompt management
- anthropics/financial-services - financial services AI solutions

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- google/ax - Agentic orchestration runtime
- BuilderIO/agent-native - Agent app framework
- obra/superpowers - Agentic skills framework
- agent-substrate/substrate - Agent core system
- strands-agents/harness-sdk - Agent harness SDK
- HKUDS/CLI-Anything - Agent-native CLI
- superdesigndev/treg - OpenRouter for agent tools
- DeusData/codebase-memory-mcp - Code intelligence MCP
- browser-use/video-use - Video editing with coding agents
- Shubhamsaboo/awesome-llm-apps - AI Agents collection
- NousResearch/hermes-agent - Agent that grows
- Significant-Gravitas/AutoGPT - AutoGPT
- career-ops-hq/career-ops - AI job search
- HKUDS/nanobot - Personal AI agent framework
- zhayujie/CowAgent - Super AI assistant
- esengine/DeepSeek-Reasonix - DeepSeek coding agent
- Hmbown/Codewhale - Coding agent in Rust
- CopilotKit/CopilotKit - Frontend for agents
- Graphify-Labs/graphify - Codebase knowledge graph
- thu-coai/AgentEvol - ?
- mem0ai/mem0 - Memory layer for agents
- topoteretes/cognee - AI memory platform
- siyuan-note/siyuan - Knowledge workspace
- datawhalechina/hello-agents - Agent tutorial
- dream-num/univer - Office harness for AI agents

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- Open-Dev-Society/OpenStock - Market data platform (no AI)
- harry0703/MoneyPrinterTurbo - AI video generator
- browser-use/browser-use - Browser agents
- TauricResearch/TradingAgents - Trading framework
- TNT-Likely/PanWatch - AI stock monitoring
- HKUDS/Vibe-Trading - Personal trading agent
- ZhuLinsen/daily_stock_analysis - Stock analysis
- hugohe3/ppt-master - AI PowerPoint generator
- CherryHQ/cherry-studio - AI productivity studio
- agentscope-ai/QwenPaw - Personal AI assistant
- Gitlawb/openclaude - Claude wrapper
- acon96/home-llm - Home Assistant LLM
- Event-AHU/Medical_Image_Analysis - Medical image analysis

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- jingyaogong/minimind - Train small LLM
- skyzh/tiny-llm - Tiny LLM inference
- llm-jp/awesome-japanese-llm - Japanese LLMs list
- thinkwee/AwesomeOPD - On-Policy Distillation
- RyanLiu112/AttnRL - Process-supervised RL
- tensorflow/tensorflow - ML framework
- pytorch/pytorch - ML framework
- keras-team/keras - Deep learning
- scikit-learn/scikit-learn - ML library
- ultralytics/ultralytics - YOLO
- roboflow/supervision - Computer vision tools
- Microsoft/qlib - Quant ML platform
- zi-yue-1129/DATAGEN - AI research assistant

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- infiniflow/ragflow - RAG engine
- milvus-io/milvus - Vector database
- meilisearch/meilisearch - Search engine (somewhat marginal)
- VectifyAI/PageIndex - Vectorless RAG
- qdrant/qdrant - Vector database
- NirDiamant/RAG_Techniques - RAG techniques
- weaviate/weaviate - Vector database
- alibaba/zvec - Vector database
- StarTrail-org/LEANN - RAG on everything
- lancedb/lancedb - Embedded retrieval
- oceanbase/oceanbase - Database with vector support
- jeecgboot/JeecgBoot - Low-code with AI
- Mintplex-Labs/anything-llm - Local LLM
- neuml/txtai - AI semantic search
- run-llama/llama_index - Document processing

Let me organize this into the final report. Let me think about the trend signals:

Looking at the Trending list:
- Many "agent" related projects: google/ax, BuilderIO/agent-native, obra/superpowers, agent-substrate/substrate, strands-agents/harness-sdk, HKUDS/CLI-Anything, browser-use/video-use, dream-num/univer
- "Agent harness" concept is hot
- MCP (Model Context Protocol) is trending
- Anthropic-related tools (Claude Code templates, agent-native)
- Coding agents dominant
- Multiple "agent tools router" concepts

The hot trend: "Agent Harness" / "Agent Infrastructure" - the concept of building infrastructure (harness) for agents to operate in. google/ax is the biggest with 1543 stars. This suggests Google entering the agent infrastructure space. dream-num/univer brings AI agents into office software. agent-substrate/substrate focuses on "the core system" for agents.

Let me write the report in Chinese now. I'll be concise and professional.

Let me finalize the structure and write:

**Today's Highlights (今日速览)**:
1. Google 发布 agentic 编排运行时 google/ax (+1543)，强势登顶 AI Trending
2. "Agent Harness"（智能体执行框架/底座）成为今日热榜最热概念，多个项目集中爆发
3. Anthropic/Claude 生态持续扩张，claude-code-templates 与 Anthropic 自家金融方案同框
4. MCP（Model Context Protocol）持续渗透，codebase-memory-mcp 体现代码智能基础设施方向
5. 办公场景被 AI Agents 重塑：dream-num/univer 提出 "Office Harness for AI Agents"

**各维度热门项目**: 3-8 projects each

**趋势信号分析**: Discuss agent harness, MCP, Google entering agent space, etc.

**社区关注热点**: 3-5 specific projects

Let me write this out now.

Actually I should also reconsider some of the topic search items. The topic search lists 80 repos but some have very high star counts (like 266k for ECC, 248k for hermes-agent, 187k for AutoGPT). These numbers seem unusually high - possibly inflated or these are not the real GitHub stars but rather some other metric. I should note this if relevant, but I'll just report them as is since the task says these are the data.

Actually, looking again, the ECC repo with 266k stars is suspicious - real popular AI repos on GitHub typically have 100k-200k max. But this could be fictional/2026 data. I'll just report as given.

Let me write the final report now. I'll aim for:
- Clear structure
- Chinese language, professional tone
- Each project with link
- Star counts (total + today's if available)

I should not fabricate any specific data not provided. Let me stick to what's given.

Let me structure carefully:

# AI 开源趋势日报 · 2026-09-24

## 一、今日速览
[3-5 sentences about key movements]

## 二、各维度热门项目

### 🔧 AI 基础工具
1-8 projects

### 🤖 AI 智能体/工作流
1-8 projects

### 📦 AI 应用
1-8 projects

### 🧠 大模型/训练
1-8 projects

### 🔍 RAG/知识库
1-8 projects

## 三、趋势信号分析
[200-300 字]

## 四、社区关注热点
[3-5 bullet points]

Let me write this all out now.

For Trending list, I have today stars but total is 0 for all. So I'll use today stars.
For Topic search, I have total stars but no today data.

Let me organize:

### 🔧 AI 基础工具
From Trending:
- davila7/claude-code-templates - +389 today
- DeusData/codebase-memory-mcp - +190 today
- anthropics/financial-services - +664 today (more of an app/solution, but it is SDK-like)

From Topic:
- langchain-ai/langchain - ⭐146,956
- ollama/ollama - ⭐181,556
- langgenius/dify - ⭐157,020
- huggingface/transformers - ⭐166,576
- open-webui/open-webui - ⭐152,950
- langchain4j/langchain4j - ⭐13,155
- 0xPlaygrounds/rig - ⭐8,713
- headroomlabs-ai/headroom - ⭐73,661

### 🤖 AI 智能体/工作流
From Trending:
- google/ax - +1543 today ★ Top
- BuilderIO/agent-native - +87 today
- obra/superpowers - +474 today
- agent-substrate/substrate - +558 today
- strands-agents/harness-sdk - +115 today
- HKUDS/CLI-Anything - +57 today
- superdesigndev/treg - +506 today
- dream-num/univer - +1142 today
- pbakaus/impeccable - +304 today (AI design language for harnesses)
- browser-use/video-use - +746 today

From Topic:
- Significant-Gravitas/AutoGPT - ⭐187,515
- browser-use/browser-use - ⭐116,103
- NousResearch/hermes-agent - ⭐248,458
- mem0ai/mem0 - ⭐65,918
- topoteretes/cognee - ⭐30,951
- CopilotKit/CopilotKit - ⭐37,517
- Hmbown/Codewhale - ⭐41,034
- esengine/DeepSeek-Reasonix - ⭐35,700
- HKUDS/nanobot - ⭐48,522
- zhayujie/CowAgent - ⭐47,096
- Graphify-Labs/graphify - ⭐120,964
- thu-coai/AgentEvol (wait, not in list) - actually not present
- career-ops-hq/career-ops - ⭐72,545
- Shubhamsaboo/awesome-llm-apps - ⭐139,577
- datawhalechina/hello-agents - ⭐80,674
- siyuan-note/siyuan - ⭐46,488
- thu-coai/... (not present)

### 📦 AI 应用
- harry0703/MoneyPrinterTurbo - ⭐125,398
- browser-use/browser-use - ⭐116,103 (could be agent or app)
- TauricResearch/TradingAgents - ⭐108,343
- TNT-Likely/PanWatch - +95 today
- HKUDS/Vibe-Trading - ⭐33,909
- ZhuLinsen/daily_stock_analysis - ⭐65,546
- hugohe3/ppt-master - ⭐56,182
- CherryHQ/cherry-studio - ⭐52,125
- agentscope-ai/QwenPaw - ⭐35,248
- acon96/home-llm - ⭐1,442
- Event-AHU/Medical_Image_Analysis - ⭐241
- jeecgboot/JeecgBoot - ⭐47,963 (more low-code platform)
- Mintplex-Labs/anything-llm - ⭐66,385 (more RAG/Infra but also an app)
- Gitlawb/openclaude - ⭐33,507

### 🧠 大模型/训练
- jingyaogong/minimind - ⭐62,374
- skyzh/tiny-llm - ⭐4,713
- llm-jp/awesome-japanese-llm - ⭐1,432
- thinkwee/AwesomeOPD - ⭐869
- RyanLiu112/AttnRL - ⭐14
- tensorflow/tensorflow - ⭐200,268
- pytorch/pytorch - ⭐103,224
- keras-team/keras - ⭐64,334
- scikit-learn/scikit-learn - ⭐67,354
- ultralytics/ultralytics - ⭐61,965
- roboflow/supervision - ⭐51,019
- microsoft/qlib - ⭐48,782
- rasbt/LLMs-from-scratch - ⭐105,480
- open-compass/opencompass - ⭐7,471
- harry7557558/spirula-studio - +69 today (3DGS, more CV/graphics)
- LancerLab/croqtile - ⭐62 (Kernel DSL)
- R-D-BioTech-Alaska/Qelm - ⭐27 (Quantum + LLM)

### 🔍 RAG/知识库
- infiniflow/ragflow - ⭐91,238
- milvus-io/milvus - ⭐46,245
- meilisearch/meilisearch - ⭐59,391 (search engine, somewhat RAG)
- VectifyAI/PageIndex - ⭐35,833
- qdrant/qdrant - ⭐34,774
- NirDiamant/RAG_Techniques - ⭐29,588
- weaviate/weaviate - ⭐16,841
- alibaba/zvec - ⭐15,994
- StarTrail-org/LEANN - ⭐12,959
- lancedb/lancedb - ⭐11,513
- oceanbase/oceanbase - ⭐10,289
- neuml/txtai - ⭐12,972
- run-llama/llama_index - ⭐52,306
- langchain-ai/langgraph - ⭐42,200
- firecrawl/firecrawl - ⭐183,933 (web data API)
- affaan-m/ECC - ⭐266,256 (agent harness performance)
- JuliusBrussee/caveman - ⭐107,585 (token compression for agents)
- thedotmack/claude-mem - ⭐94,565 (persistent context for agents)
- bojieli/ai-agent-book - ⭐50,551 (book about agents)

Note: Some repos like Developer-Y/cs-video-courses, JuliaLang/julia, netdata/netdata, OpenBB-finance/OpenBB, apache/airflow are tagged with ml but not really AI-centric. I might briefly mention them or skip. Actually, since the task says "filter AI/ML related projects", I should include ML frameworks. But for trending, the task says skip non-AI directly. So for the topic search, since they're already filtered by AI topics, I can include them but maybe select the more directly AI-related ones.

Let me also handle some edge cases:
- siyuan-note/siyuan - "knowledge workspace where humans and AI agents work together" - relevant
- Developer-Y/cs-video-courses - tagged ml but is just CS courses - skip from main listing
- JuliaLang/julia - tagged ml but is just a programming language - skip from main listing
- apache/airflow - tagged ml but is workflow orchestration - skip from main listing
- netdata/netdata - observability - skip
- OpenBB-finance/OpenBB - financial data, tagged ml but is more fintech - skip from main

I'll select the most representative ones for each category.

Let me now write the final report. I'll be comprehensive but focused.

Actually, let me also reconsider:
- harry7557558/spirula-studio - 3D Gaussian Splatting is a computer vision/graphics technique that involves AI/neural networks - keep in 大模型/训练 or AI 应用. I'll put in 大模型/训练 as a CV training tool.

Let me write now.

One more thing - the Open-Dev-Society/OpenStock is described as "Open-source alternative to expensive market platforms" - no explicit AI mention. The task says skip non-AI from trending directly. I'll skip this one.

For mvt-project/mvt (Mobile Verification Toolkit) - mobile forensics, definitely not AI. Skip.

So final trending AI projects:
1. anthropics/financial-services - +664 ✓
2. google/ax - +1543 ✓
3. davila7/claude-code-templates - +389 ✓
4. BuilderIO/agent-native - +87 ✓
5. obra/superpowers - +474 ✓
6. dream-num/univer - +1142 ✓
7. agent-substrate/substrate - +558 ✓
8. strands-agents/harness-sdk - +115 ✓
9. HKUDS/CLI-Anything - +57 ✓
10. superdesigndev/treg - +506 ✓
11. pbakaus/impeccable - +304 ✓
12. DeusData/codebase-memory-mcp - +190 ✓
13. harry7557558/spirula-studio - +69 ✓
14. browser-use/video-use - +746 ✓
15. TNT-Likely/PanWatch - +95 ✓

15 AI-related projects from trending.

Now I'll compose the report. Let me think about the trend signals:

**Key trends observed**:
1. **"Agent Harness" / "Agent Substrate" / "Agent OS" 概念集中爆发**: 今日 Trending 中至少有 5-6 个项目以 "harness"、"substrate"、"core system" 命名（google/ax、agent-substrate/substrate、strands-agents/harness-sdk、obra/superpowers、pbakaus/impeccable）。这表明社区正在为 AI 智能体构建类似操作系统的底层基础设施。

2. **Google 强势进入 Agent 编排领域**: google/ax 以 +1543 stars 领跑，作为 Google 开源的 agentic 编排运行时，标志着大厂正式下场 Agent Infrastructure。

3. **MCP (Model Context Protocol) 生态扩张**: codebase-memory-mcp、agent-substrate/substrate 等多个项目围绕 MCP 构建，Anthropic 推动的 MCP 正在成为 Agent 工具调用的事实标准。

4. **Claude/Code 生态持续扩张**: davila7/claude-code-templates +389，dotmack/claude-mem 等 Claude Code 配套工具大量涌现。

5. **"Agent-Native" 重塑传统软件**: dream-num/univer 提出 Office Harness for AI Agents，HKUDS/CLI-Anything 主张 Making ALL Software Agent-Native，"Agent-Native" 正在成为新的软件设计哲学。

6. **垂直 Agent 应用百花齐放**: 视频编辑 (browser-use/video-use)、股票盯盘 (PanWatch)、设计 (impeccable)、编程 (Codewhale/Reasonix) 等垂直 Agent 应用不断涌现。

7. **编程 Agent 与终端 Agent 持续火热**: browser-use/video-use +746、HKUDS/CLI-Anything、esengine/DeepSeek-Reasonix 等聚焦代码与终端场景。

8. **RAG 仍是知识库核心**: 主流向量数据库（Milvus、Qdrant、Weaviate、LanceDB、Alibaba zvec）和无向量 RAG（PageIndex、LEANN）并存发展。

9. **长上下文与推理仍是模型热点**: RyanLiu112/AttnRL 关注 process-supervised RL，skyzh/tiny-llm 在 Apple Silicon 上实现类 vLLM 推理。

OK let me finalize and write.</think>

# 📊 AI 开源趋势日报 · 2026-09-24

---

## 一、今日速览

今日 GitHub Trending 几乎被 **"Agent 基础设施"** 主题独占——`google/ax` 以 +1,543 stars 领跑，作为 Google 官方开源的 Agentic 编排运行时，正式拉开大厂下场 Agent OS 的序幕。与此同时，`agent-substrate/substrate`、`strands-agents/harness-sdk`、`obra/superpowers`、`pbakaus/impeccable` 等以 "Harness / Substrate" 命名的项目集中登榜，"为智能体搭建执行底座" 已成为社区最热的工程共识。**Anthropic / Claude Code 生态**持续扩张（`claude-code-templates`、`claude-mem`），**MCP（Model Context Protocol）**继续渗透到代码智能、记忆系统等垂直场景，而 `dream-num/univer` 提出的 "Office Harness for AI Agents" 则标志着 Agent-Native 理念正向传统办公软件纵深推进。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 简介 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181,556 | 本地大模型运行的事实标准，今日热度持续；支持 Kimi、GLM、DeepSeek、Qwen 等多模型一键拉起 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166,576 | 跨模态（文本/视觉/音频）模型定义框架，训练与推理的事实底座 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐146,956 | 自我定位 "Agent engineering platform"，从 SDK 升级为完整工程平台 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐152,950 | 最受欢迎的开源 LLM 前端，兼容 Ollama、OpenAI 等多后端 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐157,020 | 面向生产环境的 Agentic workflow + RAG 一体化平台 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | **+389 today** | Claude Code 的 CLI 配置与监控模板，Claude 开发者工具链标配 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐13,155 | JVM 生态的 LangChain，Spring Boot/Quarkus 友好的企业级 LLM SDK |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,713 | Rust 编写的模块化 LLM 应用框架，面向高并发生产部署 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐73,661 | 工具输出/RAG Chunk 预压缩器，为 Coding Agent 节省 20–95% tokens |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [google/ax](https://github.com/google/ax) | **+1,543 today** ⭐ 今日榜首 | Google 官方开源的 agentic orchestration runtime，大厂下场 Agent Infra 的标志性事件 |
| [dream-num/univer](https://github.com/dream-num/univer) | **+1,142 today** | "Office Harness for AI Agents"，把电子表格/文档/PPT/PDF 统一为 Agent 可操作的运行时 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | **+746 today** | 用 Coding Agent 编辑视频，编程 Agent 进入多媒体创作场景 |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | **+558 today** | 智能体的 "core system"，定位为 Agent OS 级别的底层基座 |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | **+506 today** | "OpenRouter for agent tools"，统一代理工具调用路由层 |
| [obra/superpowers](https://github.com/obra/superpowers) | **+474 today** | Agentic skills 框架 + 软件开发方法论，Skills 化

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
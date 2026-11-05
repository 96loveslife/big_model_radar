# AI 开源趋势日报 2026-11-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-05 05:59 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-05**  
数据来源：GitHub Trending 实时榜与 GitHub Search API 主题搜索结果。Trending 使用“今日新增 stars”衡量即时热度；主题搜索仓库仅提供累计 stars，不将其与今日新增混为一谈。

---

## 1. 今日速览

1. **AI 编程代理的基础设施继续占据热榜中心**：`agent-desktop`、`claude-mem`、`mattpocock/skills`、`gstack` 同时进入 Trending，显示开发者关注点正从“哪个模型更强”转向代理如何操作电脑、复用技能、管理上下文及执行复杂工程流程。
2. **语义层与可解释知识图谱升温**：`NVIDIA/auto-ontology` 以 **+2,050 stars** 位居今日热榜前列，表明确定性查询、可解释推理和面向 LLM 的结构化上下文成为新焦点。
3. **端侧与超低成本模型推理出现明显信号**：Kimi K3 单 CPU 推理项目登上热榜，显示端侧、超大模型 CPU 推理及无 GPU 部署具有很强的传播效应。
4. **RAG 正从检索组件升级为智能体上下文基础设施**：Graphify、RAGFlow、OpenViking、Cognee 等项目分别强调知识图谱、长期记忆、自演化上下文与低成本检索。
5. **AI 应用继续向垂直场景渗透**：自动短视频、股票分析、求职、PPT 生成和个人新闻简报等可落地产品保持较高关注。

---

## 2. 各维度热门项目

> 同一项目可跨类别出现；每项优先展示其最主要的生态定位。  
> “—”表示数据源未提供今日新增 stars，不做推算。

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | 累计未提供；今日 **+2,470** | 面向 AI 代理的计算机操作 CLI，是今日 Trending 中新增 stars 最高的项目之一，显示“代理控制真实桌面环境”正成为新的基础能力。 |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | 累计未提供；今日 **+2,050** | 在数据之上构建语义、图谱化确定性推理层，为 LLM 与 Agent 提供更可解释、可控的查询和上下文检索能力。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | **157,810** | 支持 Ollama、OpenAI API 等模型的自托管 AI 前端，是本地模型生态中成熟且高关注度的交互入口。 |
| [ollama/ollama](https://github.com/ollama/ollama) | **185,953** | 简化本地大模型下载与运行，是 Ollama、Kimi、GLM、DeepSeek、Qwen 等模型快速部署的重要基础工具。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | **168,557** | 覆盖文本、视觉、音频和多模态模型的基础框架，持续是模型训练、推理及适配生态的核心入口。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | **149,049** | 通用 Agent 工程与 LLM 应用开发平台，组件生态成熟，适合作为生产级智能体应用的基础层。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | **142,550** | 将代码、文档、数据库 schema、配置和 PDF 转换为可查询知识图谱，并以确定性 AST 解析替代纯向量检索。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | **78,881** | 在内容进入模型前压缩工具输出、日志、文件和 RAG 片段，主打降低编码 Agent 的 token 消耗。 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | **113,047**；今日 **+1,172** | 捕获、压缩并跨会话注入 Agent 工作上下文，是今日热榜中最明确的“智能体记忆层”代表。 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | 累计未提供；今日 **+531** | 面向并行 AI 编程 Agent 工作流的 Git worktree 管理工具，反映多代理并行开发正在形成独立基础设施需求。 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 累计未提供；今日 **+290** | 为 Claude Code 提供 CEO、设计师、工程经理、发布经理、QA 等 23 种角色工具，是角色化工程 Agent 工作流代表。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | **260,652** | 强调能够随用户持续成长的个人 Agent，在主题搜索结果中具备最高累计 stars。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | **108,906** | 为 Agent 提供跨 Twitter、Reddit、YouTube、GitHub、B站和小红书等平台的搜索与读取能力，解决多模态互联网访问问题。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | **80,270** | 覆盖职位扫描、简历匹配、求职信生成、面试准备和申请跟踪的本地优先求职 Agent。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | **44,484** | 面向有状态、可恢复 Agent 的编排框架，适合构建带循环、人工介入和持久化状态的复杂工作流。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **49,836** | 轻量级个人智能体，强调小体积、易部署和可扩展，是个人 Agent Harness 的代表项目。 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | **139,225**；今日 **+617** | 根据主题或关键词自动生成高清短视频，是生成式 AI 深入内容生产垂直场景的典型产品。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | **73,629** | 将文档或主题转为带原生形状、动画、图表和旁白的 PowerPoint，直接切入办公自动化场景。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | **67,578** | 面向多市场的 LLM 股票分析系统，整合行情、新闻、决策看板与自动推送。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | **120,682** | 通过多角色 LLM 协作完成金融交易分析，是多智能体进入专业决策场景的代表。 |
| [Thysrael/Horizon](https://github.com/Thysrael/Horizon) | 累计未提供；今日 **+121** | 基于 AI 构建中英文个性化新闻雷达与每日简报，属于轻量但高频的信息消费型应用。 |
| [scenario-labs/skills](https://github.com/scenario-labs/skills) | 累计未提供；今日 **+224** | 让任意 AI Agent 调用图像、视频、音频和 3D 生成能力，并提供模型选择、成本预估及角色一致性控制。 |
| [OpenBB](https://github.com/openbq-org/OpenBB) | **75,104** | 面向分析师、量化研究与 AI Agent 的开放数据平台，为金融类智能体提供统一数据基础。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | **55,127** | 强调终身个性化教学的 AI 教育应用，展示 RAG 与智能体在长期学习场景中的结合。 |

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | 累计未提供；今日 **+351** | 以 C99 在单 CPU、8.24 GB 内存中运行 2.78 万亿参数 Kimi K3，无需 BLAS、框架或 GPU，是今日醒目的端侧推理项目。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | **7,564** | 支持 100 多个数据集及多家主流模型的统一评测平台，是模型能力对齐和选型的关键基础设施。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | **201,314** | 通用机器学习与深度学习框架，覆盖训练、推理和生产部署，是 AI 基础栈长期稳定的核心项目。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | **105,148** | 具备 GPU 加速与丰富生态的深度学习框架，仍是训练和模型研究的主流选择。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | **107,835** | 使用 PyTorch 从零实现 ChatGPT 类大模型，兼具教学价值和底层原理学习需求。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | **318** | 以 X-Bit 量化实现端侧 LLM 推理，代表小模型、低内存与隐私优先的部署路线。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | **5,557** | 在 Apple Silicon 上构建 tiny-vLLM 与 Qwen 推理系统，适合学习现代 LLM 推理栈。 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | **263** | 能量基基础模型的训练与扩展开源代码，关注生成模型和基础模型研究前沿。 |

### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | **93,527** | 从文档 RAG 引擎演进为 agent-native 数据库，强调知识处理、检索与上下文基础设施的一体化。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | **68,435** | 提供可直接集成的 Agent 长期记忆层，让上下文在不同会话和应用间持久化。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | **41,571** | 统一 Agent Memory、知识 RAG 与技能的自我演化上下文数据库，瞄准 Agent 上下文统一管理。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | **39,990** | 面向无向量数据库的推理型 RAG，以结构化文档索引替代传统相似度检索。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | **33,084** | 开源 AI 记忆平台，通过知识图谱与较小模型为 Agent 构建持久长期记忆。 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | **16,188** | 轻量、进程内 C++ 向量数据库，适合对部署复杂度和检索性能有要求的本地场景。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | **13,772** | 以高存储压缩比实现快速、精确且完全私人的本地 RAG，兼顾资源效率与隐私。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | **13,361** | Java/JVM 原生 LLM 应用库，统一模型、向量库、工具调用、MCP、Agent 与 RAG 开发接口。 |

---

## 3. 趋势信号分析

今日热榜释放出三个突出信号。第一，**AI 编程 Agent 正从单体助手演变为工程协作平台**：agent-desktop 解决电脑操作，claude-mem 解决跨会话记忆，skills/gstack 提供技能与角色，worktrunk 支持多代理并行开发。爆发点已从模型调用转向代理运行时与协作基础设施。

第二，**结构化上下文和可解释推理成为新方向**。NVIDIA/auto-ontology 与 Graphify 同日受到关注，说明社区正在探索以知识图谱、语义层和确定性 AST 解析降低幻觉、提升可解释性，尤其适合代码库与企业数据。

第三，**端侧推理继续升温**。Kimi K3 单 CPU 运行项目显示，超大模型在极低算力环境中的部署具有强话题性；同时 transformers、Ollama、picollm 构成从模型到运行时的完整链条。结合近期开源模型持续迭代与端侧隐私需求上升，“本地运行、长上下文、长期记忆、统一上下文数据库”预计仍是近期高热度交汇点。

---

## 4. 社区关注热点

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)**：今日 **+2,050 stars**，语义层与图谱化推理直接针对 RAG 幻觉、检索确定性和 Agent 可解释性，是今天最值得关注的基础设施方向。
- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)**：今日 **+2,470 stars**，将 AI Agent 从文本与 API 操作扩展到真实计算机界面，可能成为通用电脑操作层的重要参考实现。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**：今日 **+1,172 stars**，同时进入 Trending 与主题搜索结果；跨会话记忆已成为 Agent 产品差异化的核心能力。
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)**：今日 **+351 stars**，在 8.24 GB 内存、纯 CPU 环境运行超大模型，兼具技术挑战性和端侧普及价值。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：以确定性 AST 和可解释知识图谱处理代码库与文档，代表从“向量切片检索”转向“结构化代码上下文”的实用路线。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
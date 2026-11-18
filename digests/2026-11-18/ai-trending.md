# AI 开源趋势日报 2026-11-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-18 06:49 UTC

---

# AI 开源趋势日报

**日期：2026-11-18**  
**数据范围：GitHub 今日 Trending 15 个仓库，以及 7 天内活跃的 81 个 AI 主题仓库**

> 筛选口径：仅保留与 AI/ML、LLM、Agent、RAG、机器学习或 AI 开发基础设施明确相关的项目。Trending 中的通用 Docker 管理工具 `getarcaneapp/arcane`、Web 框架 `sveltejs/svelte` 已略去。部分仓库榜单显示总星数为 0，属于当前抓取数据异常，文中统一标注为 **0（数据异常）**。

---

## 1. 今日速览

1. **Agent Skills 正成为今日最突出的爆发点**：Claude BugHunter、last30days、Stitch Skills、Superpowers、ECC 等项目同时进入热榜，关注点正从“直接调用模型”转向可复用技能、记忆、安全策略与上下文工程。
2. **AI 编程工具开始走向工程化交付**：阿里 `open-code-review`、腾讯 `LoopForge` 和 `plannotator` 分别覆盖自动审查、跨编码代理编排及人机协作反馈闭环，表明 Coding Agent 已进入企业研发流程。
3. **前后端 Agent 协议和生成式 UI 生态升温**：`ag-ui` 以每日新增 **1,445 stars** 位居 AI 相关项目前列，CopilotKit 等配套框架推动 Agent 从聊天界面进入真实应用交互层。
4. **Agent 上下文基础设施持续升温**：`claude-mem`、`mem0`、OpenViking、Cognee 和 RAGFlow 等项目聚焦长期记忆、上下文压缩及知识基础设施，解决 Agent 跨会话连续性问题。
5. **轻量化与可私有部署仍是重要主线**：MiniMind、Ollama、LEANN、zvec 等低门槛项目获得高关注，反映开发者对本地推理、端侧应用和低成本 RAG 的持续需求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

> 包括框架、SDK、推理引擎、开发工具、CLI 和代码智能工具。

#### 1. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)
- **Stars：** 0（数据异常），**今日新增 +763**
- **一句话说明：** 阿里开源的混合式代码审查工具，将确定性规则流水线与 LLM Agent 结合，提供行级评论并覆盖 NPE、线程安全、XSS、SQL 注入等多语言规则。

#### 2. [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)
- **Stars：** 0（数据异常），**今日新增 +350**
- **一句话说明：** 面向 Stitch MCP Server 的官方 Agent Skills 库，采用开放技能标准，可被 Antigravity、Gemini CLI、Claude Code 和 Cursor 使用。

#### 3. [cursor/plugins](https://github.com/cursor/plugins)
- **Stars：** 0（数据异常），**今日新增 +201**
- **一句话说明：** Cursor 插件规范及官方插件集合，是观察 IDE Agent 扩展机制、上下文接入方式和工具调用标准的重要项目。

#### 4. [ollama/ollama](https://github.com/ollama/ollama)
- **Stars：** 187,476
- **一句话说明：** 本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen 和 Gemma 等模型的主流工具链，是端侧推理与私有化 AI 应用的重要底座。

#### 5. [run-llama/llama_index](https://github.com/run-llama/llama_index)
- **Stars：** 52,936
- **一句话说明：** 面向文档处理与 AI 应用的成熟框架，覆盖检索、数据连接、Agent 和 RAG 工作流，是构建生产级 LLM 应用的重要基础设施。

#### 6. [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)
- **Stars：** 13,418
- **一句话说明：** JVM 生态中的 LLM 应用开发库，统一接入模型、向量存储、工具调用和 MCP，使 Agent/RAG 能直接集成 Spring Boot、Quarkus 等企业框架。

#### 7. [affaan-m/ECC](https://github.com/affaan-m/ECC)
- **Stars：** 305,798；**Trending 今日新增 +883**
- **一句话说明：** 面向 Claude Code、Codex、OpenCode、Cursor 等工具的 Agent Harness 优化系统，集成技能、记忆、安全机制与研究优先开发流程。

#### 8. [zilliztech/claude-context](https://github.com/zilliztech/claude-context)
- **Stars：** 12,700
- **一句话说明：** 为 Claude Code 提供代码搜索 MCP，使整个代码库可作为编码 Agent 的上下文，体现“代码库索引即上下文入口”的工具趋势。

---

### 🤖 AI 智能体/工作流

> 包括 Agent 框架、自动化、多智能体系统、任务编排与人机协作。

#### 1. [obra/superpowers](https://github.com/obra/superpowers)
- **Stars：** 0（数据异常），**今日新增 +1,917**
- **一句话说明：** 面向软件开发代理的技能框架与工程方法论，强调让 Agent 按可复用、可验证的方法执行任务，是今日增长最快的 AI 项目之一。

#### 2. [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)
- **Stars：** 0（数据异常），**今日新增 +1,445**
- **一句话说明：** 连接 Agent 与前端应用的交互协议，旨在统一流式响应、状态同步、工具调用和用户交互，是生成式 UI 生态的关键标准层。

#### 3. [Tencent/LoopForge](https://github.com/Tencent/LoopForge)
- **Stars：** 0（数据异常），**今日新增 +591**
- **一句话说明：** 腾讯开源的自托管编码代理交付平台，可编排 CodeBuddy、Codex 和 Claude Code，并通过人工审批门禁控制生产变更。

#### 4. [backnotprop/plannotator](https://github.com/backnotprop/plannotator)
- **Stars：** 0（数据异常），**今日新增 +691**
- **一句话说明：** 面向多编码 Agent 的协作工作台，支持规划、批注、代码审查及一键反馈，把人机协作从对话形式升级为持续任务控制界面。

#### 5. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- **Stars：** 264,298
- **一句话说明：** 强调可成长能力的个人 Agent，代表个人助手从固定工具调用走向长期记忆、技能积累和主动协作的发展方向。

#### 6. [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
- **Stars：** 50,161
- **一句话说明：** 轻量级开源个人 Agent，强调小体积、易部署和工具扩展，适合作为个人自动化与多场景 Agent 的基础框架。

#### 7. [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)
- **Stars：** 47,985
- **一句话说明：** 支持任务规划、工具与技能调用、记忆和知识管理，并兼容多模型、多渠道及多 Agent，是个人智能体平台化的代表项目。

#### 8. [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)
- **Stars：** 0（数据异常），**今日新增 +1,072**
- **一句话说明：** Google Research 推出的多智能体论文写作框架，通过分工协作自动完成研究型论文生成、修订和编排。

---

### 📦 AI 应用

> 包括具体产品、终端应用及垂直行业解决方案。

#### 1. [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)
- **Stars：** 0（数据异常），**今日新增 +1,005**
- **一句话说明：** 面向漏洞挖掘和外部红队工作的 Claude Code 技能包，涵盖 82 项技能、15 个命令及 24 类核心漏洞模式，安全垂直化特征突出。

#### 2. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)
- **Stars：** 0（数据异常），**今日新增 +696**
- **一句话说明：** 能跨 Reddit、X、YouTube、HN、Polymarket 和网页研究近 30 天信息，并生成带依据的综合摘要，代表实时研究型 Agent 应用。

#### 3. [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)
- **Stars：** 83,406
- **一句话说明：** 开源求职 Agent，可扫描职位、按简历评分、生成 ATS 友好材料、准备面试并跟踪申请，完整覆盖“搜索到投递”的垂直流程。

#### 4. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
- **Stars：** 78,053
- **一句话说明：** 将文档或主题转换为带原生形状、动画、图表、演讲者备注音频的 PowerPoint，代表生成式办公从文本输出走向可编辑交付物。

#### 5. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- **Stars：** 73,167
- **一句话说明：** LLM 驱动的多市场股票分析系统，整合行情、新闻、决策看板和自动推送，是金融研究 Agent 落地的典型案例。

#### 6. [browser-use/browser-use](https://github.com/browser-use/browser-use)
- **Stars:** 121,364
- **一句话说明：** 为 AI 浏览器 Agent 提供 Python 库、云端浏览器和托管 API，是网页操作、自动化与研究型 Agent 的关键组件。

#### 7. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- **Stars：** 144,278
- **一句话说明：** 根据主题或关键词自动生成高清短视频，通过 LLM 和自动化工作流串联脚本、素材、剪辑及输出，体现内容生产链路的端到端 Agent 化。

#### 8. [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)
- **Stars：** 87,498
- **一句话说明：** 面向 AI Agent 的开源网页抓取、提取和搜索基础设施，也是其托管 Crawl4AI Cloud 的核心引擎。

---

### 🧠 大模型/训练

> 包括模型权重、训练框架、微调工具、推理优化和评测平台。

#### 1. [jingyaogong/minimind](https://github.com/jingyaogong/minimind)
- **Stars：** 66,227；**Trending 今日新增 +192**
- **一句话说明：** 展示如何在约两小时内从零训练 6400 万参数 LLM，以极低成本降低模型训练和原理学习门槛。

#### 2. [huggingface/transformers](https://github.com/huggingface/transformers)
- **Stars：** 169,305
- **一句话说明：** 支撑文本、视觉、音频和多模态模型训练及推理的基础框架，是开源模型生态最重要的通用底座之一。

#### 3. [pytorch/pytorch](https://github.com/pytorch/pytorch)
- **Stars：** 105,792
- **一句话说明：** 具备 GPU 加速和动态神经网络支持的机器学习框架，持续为 LLM 训练、微调与推理研究提供底层能力。

#### 4. [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)
- **Stars:** 68,225
- **一句话说明：** Python 机器学习领域的经典基础库，为传统机器学习、特征工程和生产模型管线提供成熟工具。

#### 5. [open-compass/opencompass](https://github.com/open-compass/opencompass)
- **Stars:** 7,600
- **一句话说明：** 覆盖 100 多个数据集和多种能力维度的 LLM 评测平台，可统一比较国内外模型的推理、编码、长上下文与安全能力。

#### 6. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)
- **Stars:** 9,171
- **一句话说明：** 用 Rust 构建模块化、可扩展 LLM 应用的框架，代表高性能 Agent 和模型服务向 Rust 生态扩张的趋势。

#### 7. [Picovoice/picollm](https://github.com/Picovoice/picollm)
- **Stars:** 320
- **一句话说明：** 基于 X-Bit 量化的端侧 LLM 推理方案，关注资源受限设备上的低内存部署与隐私计算。

#### 8. [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)
- **Stars:** 5,753
- **一句话说明：** 面向 Apple Silicon 系统工程师，从零构建 tiny-vLLM 与 Qwen 推理栈，适合学习现代 LLM 推理系统。

---

### 🔍 RAG/知识库

> 包括向量数据库、检索增强、上下文工程、记忆系统和知识管理。

#### 1. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)
- **Stars:** 42,399
- **一句话说明：** 面向 AI Agent 的自演化上下文数据库，将长期记忆、知识 RAG 和技能统一到同一基础设施中。

#### 2. [topoteretes/cognee](https://github.com/topoteretes/cognee)
- **Stars:** 33,380
- **一句话说明：** 面向 Agent 长期记忆的开源平台，主打利用小模型降低持久化记忆成本，是 Agent Memory 赛道的代表项目。

#### 3. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)
- **Stars:** 94,358
- **一句话说明：** 从传统 RAG 引擎演进为 Agent 原生数据库与上下文基础设施，覆盖复杂文档解析、检索及知识工作流。

#### 4. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)
- **Stars:** 118,066
- **一句话说明：** 捕获 Agent 会话行为，经 AI 压缩后将相关上下文注入后续会话，解决跨会话记忆和多工具生态兼容问题。

#### 5. [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)
- **Stars:** 40,462
- **一句话说明：** 探索无需向量库的推理式文档索引，以层次化结构和推理检索替代传统 Embedding，RAG 路线更具差异化。

#### 6. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)
- **Stars:** 149,785
- **一句话说明：** 将代码、文档、SQL Schema、配置及 PDF 转为可查询知识图谱，无需向量存储，并提供面向主流编码 Agent 的技能。

#### 7. [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)
- **Stars:** 79,952
- **一句话说明：** 在工具输出、日志、文件和 RAG 片段进入模型前进行压缩，目标是降低编码 Agent Token 消耗并保持回答质量。

#### 8. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)
- **Stars:** 202,718
- **一句话说明：** 为 Agent 提供搜索、抓取和 550 多个数据源的统一 API，是构建实时 Web 上下文与研究型 Agent 的关键数据基础设施。

---

## 3. 趋势信号分析

今日最明显的爆发点是 **Agent Skills 与 Agent Harness**：Claude-BugHunter、last30days、stitch-skills、Superpowers 和 ECC 同时进入热榜，说明开发者关注点已从单纯调用 LLM，转向可复用技能、记忆、安全规则、上下文压缩与任务方法论。另一条主线是 **Coding Agent 工程化**，open-code-review、LoopForge、plannotator 分别补齐自动审查、跨代理编排和人工反馈，显示其正从 IDE 插件走向企业交付链。首次登榜的 AG-UI 则标志着 Agent-UI 协议层开始形成，CopilotKit、Cursor Plugins 等生态可望共同推动生成式 UI 标准化。技术上，Rust 推理栈、向量无关 RAG、知识图谱和长期记忆同步升温，说明社区正从“更大模型”转向更低成本、更强上下文和更可控执行。此外，本地小模型训练与端侧推理持续吸引关注，呼应开放权重模型、私有部署和 AI 工程成本下降的长期方向。

---

## 4. 社区关注热点

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)：Agent 前端交互标准升温**  
  每日新增 **1,445 stars**，可能成为连接模型、Agent Runtime 与前端状态管理的重要协议层。

- **[obra/superpowers](https://github.com/obra/superpowers)：技能化开发方法论爆发**  
  每日新增 **1,917 stars**，表明开发者更希望获得可组合、可验证的软件工程工作流，而非一次性 Prompt。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)：Agent Harness 成为独立基础设施品类**  
  总星数达 **305,798**，同时今日新增 **883**；技能、记忆、安全和上下文工程的组合正在成为独立竞争方向。

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)：安全型 Agent 技能成熟**  
  今日新增 **1,005 stars**，显示漏洞挖掘、红队测试和身份基础设施攻击矩阵可沉淀为可复用 Agent 技能包。

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)：LLM 审查与确定性规则融合**  
  今日新增 **763 stars**，体现企业采用 AI 代码审查时更重视行级精度、规则治理和混合式架构，而非单纯依赖模型判断。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI 开源趋势日报 2026-11-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-21 06:31 UTC

---

# AI 开源趋势日报｜2026-11-21

## 1. 今日速览

- **Agent Skills 与 Agent-Native 工具成为今日最强主线**：Claude-BugHunter、superpowers、CLI-Anything、Stitch Skills 等项目同时进入热榜，增长焦点已从“通用聊天机器人”转向可复用技能、软件操作接口与开发方法论。
- **代理基础设施继续升温**：firecrawl、opensre 分别解决 Agent 的外部数据访问和 CI/CD 可靠性问题，说明社区正在补齐 Agent 从交互到生产执行之间的基础设施层。
- **端侧内容生产成为新爆点**：autoclip 以“长视频一键切短视频”登上热榜并单日新增 979 stars，AI 应用正从通用办公进一步深入内容生产和分发场景。
- **小模型教育持续升温**：minimind 同时进入 Trending 与主题榜，定位为两小时从零训练 64M LLM，反映开发者对低成本模型实验和端侧部署的兴趣。
- **传统大模型基础设施仍是基本盘**：TensorFlow、Transformers、PyTorch、Ollama、LangChain 等高关注项目说明，模型开发、部署、编排与 RAG 仍保持长期稳定需求。

---

## 2. 各维度热门项目

> stars 数据以题目提供的当前总量为准；“今日新增”仅在 Trending 数据可得时列出。

### 🔧 AI 基础工具

| 项目 | Stars | 项目说明 |
|---|---:|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 205,498（今日 +1,241） | 面向 Agent 的搜索、抓取与数据访问基础设施，统一接入 550+ 数据源；今日热榜中 AI 基础设施类增长最突出。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 未提供总量（今日 +773） | 将任意软件封装为面向 AI Agent 的 CLI，代表“从聊天界面走向 Agent 可操作接口”的工具链趋势。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | 未提供总量（今日 +217） | 用于优化和部署 AI 推理模型的开放工具包，体现边缘推理与部署效率仍是刚需。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,986 | 通用 Agent 工程平台，连接模型、工具、数据源与工作流，是构建生产级 LLM 应用的重要基础层。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 187,785 | 简化本地大模型运行与分发，持续覆盖 Qwen、DeepSeek、Gemma、gpt-oss 等主流模型生态。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,216 | 面向有状态、可恢复工作流的 Agent 编排框架，适合构建长时间运行和复杂业务流程。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 13,427 | Java 生态中的 LLM 应用开发框架，统一模型、向量库、工具调用、MCP 与 RAG 接口。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 9,207 | 使用 Rust 构建模块化、可扩展的 LLM 应用，是新兴的 Rust AI 工程栈代表。 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 项目说明 |
|---|---:|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 265,041 | 强调可成长、可个性化的开源个人 Agent，是智能体主题中关注度最高的项目之一。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 未提供总量（今日 +1,622） | 面向漏洞挖掘与外部红队工作的 Claude Code 技能包，覆盖 82 项技能及多类攻击矩阵；今日新增 stars 居 AI 项目首位。 |
| [obra/superpowers](https://github.com/obra/superpowers) | 未提供总量（今日 +890） | 将 Agent 技能与软件开发方法论组合成可执行框架，反映“Skill + 流程”正在成为开发 Agent 的新范式。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 未提供总量（今日 +466） | 面向 CI/CD 可靠性的开源 Agent，重点切入软件交付中的故障诊断与自动化运维。 |
| [trycua/cua](https://github.com/trycua/cua) | 32,723 | 提供跨操作系统沙箱、驱动和评测基准，是 Computer Use Agent 训练与基础设施方向的重要项目。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 50,244 | 轻量级个人 Agent，强调低门槛安装和可扩展能力，适合个人自动化场景快速落地。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 48,027 | 集规划、工具调用、技能、记忆和多智能体于一体的个人助手型 Agent Harness。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,192 | 使用 Rust 编写的终端编码 Agent，支持任意模型及多 Agent 并行，体现 AI 编程工具基础设施化趋势。 |

### 📦 AI 应用

| 项目 | Stars | 项目说明 |
|---|---:|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | 未提供总量（今日 +979） | 将播客、访谈和课程自动切为短视频，并生成字幕、封面及发布文案；今日最突出的 AI 内容生产应用。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 83,981 | 从职位发现、简历匹配到申请跟踪的本地求职 Agent，垂直场景封装程度较高。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 78,924 | 将文档或主题转换为带原生图形、动画、图表和旁白的 PowerPoint，是办公内容生成方向的代表。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 73,582 | 融合多市场行情、新闻和 LLM 分析的股票智能系统，呈现金融垂直 Agent 的产品化趋势。 |
| [OpenBB](https://github.com/openbq-org/OpenBB) | 75,609 | 面向分析师、量化研究与 AI Agent 的开放数据平台，为垂直智能体提供统一数据层。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 121,635 | 提供浏览器操作 Agent 的 Python 库及托管服务，是 Web Agent 领域关注度最高的基础组件之一。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 144,864 | 通过大模型与自动化工作流生成高清短视频，与 autoclip 共同显示 AI 视频生产需求旺盛。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 123,321 | 多智能体金融交易框架，通过角色分工模拟研究、辩论和决策流程。 |

### 🧠 大模型/训练

| 项目 | Stars | 项目说明 |
|---|---:|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 169,335 | 覆盖文本、视觉、音频和多模态模型的基础框架，仍是开源模型训练与推理生态的核心入口。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 105,760 | 提供 GPU 加速、动态计算图和完整训练生态，是现代机器学习项目最关键的底层框架之一。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 67,810（今日 +847） | 主打“两小时从零训练 64M LLM”，显著降低模型训练和教学实验门槛；今日热度明显上升。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 108,730 | 以 PyTorch 从零实现类 ChatGPT 模型，兼具教育和模型内部机制学习价值。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 201,667 | 面向通用机器学习与生产部署的成熟框架，仍保持最大的存量影响力之一。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 5,798 | 面向系统工程师的 Apple Silicon LLM 推理项目，以 tiny-vLLM 和 Qwen 展示底层推理实现。 |
| [FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos) | 207 | 探索零停顿 MoE 推理、预取与异步 DMA，面向大规模模型推理性能优化。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,609 | 覆盖推理、编码、科学、长上下文和安全等维度的 LLM 评测平台，反映模型能力评价需求增长。 |

### 🔍 RAG/知识库

| 项目 | Stars | 项目说明 |
|---|---:|---|
| [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | 68,474 | 提供本地优先的一体化知识库、检索与 Agent 工作区，适合快速构建私有化 RAG 应用。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 52,973 | 聚焦文档处理与 AI 检索增强，长期是 RAG 和知识型 Agent 开发的重要平台。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,546 | 将 Agent Memory、知识 RAG 与 Skills 统一到自进化上下文数据库中，代表记忆基础设施融合趋势。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 69,292 | 面向 Agent 的持久化记忆层，为跨会话上下文提供可插拔基础设施。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 94,492 | 从 RAG 引擎扩展为 Agent-native 数据库，强调上下文基础设施和复杂文档处理。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 151,280 | 将代码、文档、SQL Schema 和 PDF 转为可查询知识图谱，以图结构替代单纯向量检索。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 40,555 | 探索无需向量库的推理式 RAG，通过文档结构与层级索引提升检索可解释性。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 13,806 | 主打本地隐私和约 97% 存储节省，展示轻量级、边缘端 RAG 的工程优化方向。 |

---

## 3. 趋势信号分析

今日热榜最突出的信号，是**面向编码 Agent 的技能包与软件接口层集中爆发**。Claude-BugHunter 单日新增 1,622 stars，superpowers、CLI-Anything、Stitch Skills 同日上榜；这说明社区关注点正由“模型本身”转向可复用 Skill、CLI 封装和标准化工作流。新兴技术栈方面，Rust 开始进入 Agent 基础设施与 LLM 应用层，如 Codewhale、rig；端侧训练与内容生产也在升温，minimind、autoclip 分别切入低成本模型实验和自动化视频生产。与此同时，firecrawl、opensre 显示 Agent 生态正补齐数据访问和 CI/CD 可靠性等生产基础设施。结合近期开源模型持续迭代及 Agent 工程化趋势，热点已从模型发布扩散至技能生态、记忆/RAG、工具调用和垂直应用交付。

---

## 4. 社区关注热点

- **[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**：今日新增 1,622 stars，为 AI 相关热榜项目最高；漏洞发现、红队技能与报告模式库具有很强的专业需求。
- **[CLI-Anything](https://github.com/HKUDS/CLI-Anything)**：将传统软件改造成 Agent 可调用接口，是 MCP 之外“工具封装标准化”的重要路线。
- **[firecrawl](https://github.com/firecrawl/firecrawl)**：解决 Agent 的实时网页搜索与结构化数据获取问题，是 Web Agent 和研究型智能体的关键依赖。
- **[minimind](https://github.com/jingyaogong/minimind)**：两小时训练 64M 模型，显著降低 LLM 原理学习、微型模型实验及端侧部署门槛。
- **[autoclip](https://github.com/zhouxiaoka/autoclip)**：完整覆盖长视频理解、切片、字幕、封面和发布文案，直击内容创作者的高频生产链路。
- **[OpenViking](https://github.com/volcengine/OpenViking) 与 [mem0](https://github.com/mem0ai/mem0)**：Agent 记忆正在从简单对话历史升级为长期上下文、知识 RAG 与技能管理的统一基础设施。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
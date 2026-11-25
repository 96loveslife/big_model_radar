# AI 开源趋势日报 2026-11-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-25 07:52 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-25**  
**统计口径：GitHub 今日 Trending + 7 天内活跃的 AI 主题搜索结果。**  
说明：Trending 的今日新增 stars 可信；主题搜索列表未提供当日增量，因此仅展示累计 stars。累计 stars 反映项目热度，不等同于近期增速。

---

## 1. 今日速览

1. **AI 编程正在从“模型能力竞争”转向“工具链与工程方法竞争”**：今日热榜前十中，Claude Code Skills、Agent Skills 框架、插件规范、MCP 配套技能等至少 5 个项目直接围绕智能体开发。
2. **“Agent Skills”成为今日最突出的爆发方向**：Claude-BugHunter、superpowers、diagram-design、last30days-skill、stitch-skills 均围绕可复用技能包展开，显示社区正尝试把隐性工作流沉淀为标准化、可移植资产。
3. **Agent 上下文基础设施持续升温**：Firecrawl、OpenViking、Graphify、claude-context、mem0 等分别从网页数据、知识图谱、代码索引和持久记忆切入，解决智能体“如何获取并保留上下文”的核心问题。
4. **轻量化、本地化仍是开源 AI 的重要卖点**：MiniMind 以“两小时训练 64M 模型”登上热榜；AnythingLLM、OpenVINO、Open WebUI、Ollama 等则强调本地部署、隐私和低成本运行。
5. **AI 视频生产进入“一键成片”阶段**：AutoClip 将长视频切分、字幕、封面和发布文案整合为桌面工作流，是今日热榜中最明确的成熟垂直应用之一。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | **209,252**；今日 **+991** | 面向智能体的搜索、网页抓取与数据访问基础设施，统一接入 550+ 数据源；今日同时进入 Trending 与 LLM 主题榜，热度和增速兼具。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 累计 stars 未提供；今日 **+1,074** | 将各种软件封装为可由 AI Agent 操作的 CLI，强调“Agent-Native”工具接口，是今日热榜中增长最快的项目之一。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | 累计 stars 未提供；今日 **+185** | 面向 AI 推理优化的开源工具包，覆盖模型压缩、量化和部署，是边缘部署与推理基础设施的重要项目。 |
| [langgenius/dify](https://github.com/langgenius/dify) | **161,865** | 集成 Agent 工作流、RAG 流水线、模型与工具支持的 AI 应用开发平台，适合快速构建并私有化部署生产级 AI 应用。 |
| [ollama/ollama](https://github.com/ollama/ollama) | **188,050** | 简化本地大模型运行与分发，支持 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等系列，是本地 AI 生态的重要入口。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | **12,724** | 面向 Claude Code 的代码搜索 MCP，将大型代码库转化为编码智能体可调用的上下文。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | **80,803** | 在工具输出、日志和 RAG 片段进入模型前进行压缩，目标是降低编码智能体的 token 消耗。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | **7,639** | 面向多模型、多任务和多维度的 LLM 评测平台，覆盖知识、推理、编程、长上下文及安全能力。 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 累计 stars 未提供；今日 **+1,003** | 面向软件开发的 Agent Skills 框架与方法论，强调让编码智能体通过标准化流程稳定执行复杂任务。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 累计 stars 未提供；今日 **+1,826** | 面向漏洞挖掘和外部红队测试的 Claude Code 技能包，整合 84 项技能及多类攻击矩阵，是今日新增 stars 最高的 AI 项目。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | **310,359** | 面向 Claude Code、Codex、OpenCode、Cursor 等工具的智能体性能优化系统，覆盖技能、记忆、安全和研究优先开发。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | **265,972** | 强调可成长、可积累能力的通用个人智能体，在 AI Agent 主题搜索中保持极高累计关注度。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | **45,386** | 用于构建具备状态管理、恢复能力和复杂流程编排的韧性智能体，是工程化 Agent 应用的代表项目。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **50,313** | 轻量级开源个人 Agent，定位清晰、部署门槛较低，适合个人自动化与本地化使用场景。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | **48,065** | 支持规划、工具调用、技能扩展、记忆与多智能体的个人 Agent Harness，强调轻量和可演进性。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | **41,204** | 基于 Rust 的终端、Web 与桌面编码智能体，支持多模型、多智能体、MCP、插件及 OS 沙箱。 |

---

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | 累计 stars 未提供；今日 **+980** | 开源 AI 视频剪辑桌面工具，可自动完成长视频切片、字幕、封面及多平台发布文案生成。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | **80,004** | 将文档或主题转换为原生 PowerPoint，支持模板、图表、动画、旁白等，是 AI 办公自动化的代表。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | **145,568** | 根据主题或关键词自动生成高清短视频，以工作流方式降低短视频内容生产门槛。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | **74,445** | LLM 驱动的多市场股票分析系统，整合行情、新闻、决策看板和自动推送。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | **84,697** | 覆盖职位发现、简历匹配、ATS 优化、求职信生成和面试准备的本地化求职智能体。 |
| [MJMirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | 累计 stars 未提供；今日 **+928** | 面向 AI 编码智能体的应用商店合规检查工具，覆盖隐私声明、审核拒绝风险和 AI 法规截止日期。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | **68,618** | 集文档问答、Agent、RAG 和私有知识管理于一体的本地优先 AI 工作空间。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | **53,856** | 面向模型、Agent 和日常生产力的跨平台 AI 工作空间，聚合多种模型与知识工作流。 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | **70,543**；今日 **+727** | 主打“两小时从零训练 64M LLM”，同时登上 Trending 与模型主题榜，显著降低模型实践门槛。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | **109,017** | 使用 PyTorch 逐步实现 ChatGPT 类大模型，是学习模型内部原理与训练流程的高热度教程。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | **169,297** | 支撑文本、视觉、音频和多模态模型训练与推理的基础框架，仍是多模态模型生态的核心入口。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | **201,775** | 通用机器学习与深度学习框架，覆盖训练、推理及端侧部署，是成熟 AI 基础设施的代表。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | **105,713** | 提供张量计算、动态图和 GPU 加速的深度学习基础框架，仍是开源模型训练的首选平台之一。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | **5,807** | 面向 Apple Silicon 的系统级 LLM 推理学习项目，可用于构建类似 vLLM 与 Qwen 的轻量推理栈。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | **355** | 关注可靠、最小化及可扩展的基础模型与世界模型预训练，属于更早期的研究方向性项目。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | **7,639** | 提供跨模型、跨数据集评测能力，可辅助训练阶段模型选型、能力诊断和安全评估。 |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | **149,964** | 面向 Agent 与 LLM 应用的数据检索、工具调用和上下文编排框架，是 RAG 工程化的核心组件。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | **52,997** | 面向 AI 应用的数据摄取、索引、检索和文档处理平台，RAG 生态覆盖度高。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | **119,620** | 捕获并压缩智能体会话内容，在后续会话注入相关上下文，解决跨会话记忆问题。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | **94,673** | 从 RAG 引擎扩展为 Agent-native 上下文基础设施，强调复杂文档处理与知识检索。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | **69,445** | 面向生产环境的智能体记忆层，为不同 Agent 和应用提供持久化上下文。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | **42,725** | 试图统一 Agent Memory、知识 RAG 与技能管理，构建可自我演化的上下文数据库。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | **153,097** | 将代码、文档、SQL Schema 和 PDF 转为可查询知识图谱，以确定性 AST 解析替代传统向量检索。 |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | **9,192** | 引入逻辑形式引导的推理与检索，针对专业领域知识库补足纯向量相似度检索的不足。 |

---

## 3. 趋势信号分析

今日热榜最明显的信号是 **AI 编程生态从单点工具爆发转向“技能、插件与 CLI 接口”集体爆发**。Claude-BugHunter、superpowers、diagram-design、last30days-skill、stitch-skills、cursor/plugins 和 CLI-Anything 构成一条完整链条：前者沉淀领域能力，中间层提供技能规范，底层工具则统一软件调用方式。与此同时，Firecrawl、OpenViking、Graphify、claude-context 显示上下文工程已成为独立基础设施赛道。MiniMind 则代表“小模型可训练化”方向的新信号，以 64M 参数和两小时训练周期降低 LLM 教学与实验门槛。MiniMax、DeepSeek、GLM、Qwen 等本地模型已被 Ollama 等运行时广泛支持，这与近期开源模型小参数化、推理成本下降及端侧部署趋势一致。整体上，社区关注点正由“哪个模型最强”转向“智能体如何获得技能、工具、上下文与长期记忆”。

---

## 4. 社区关注热点

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**：今日 **+1,826**，是热榜 AI 项目中新增 stars 最高者；安全测试技能包兼具专业性和强烈的演示传播性。
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)**：今日 **+1,074**，把任意软件改造成 Agent 可操作接口，可能成为智能体工具调用标准化的重要探索方向。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**：今日 **+991** 且累计 **209,252 stars**；同时覆盖网页抓取、搜索与 Agent 知识入口，是上下文基础设施的代表。
- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)**：今日 **+980**，完整覆盖切片、字幕、封面和分发文案；AI 视频生产正从单功能生成走向端到端工作流。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**：今日 **+727**、累计 **70,543 stars**；“两小时训练小模型”显著降低了 LLM 教育和实验门槛，体现模型社区的轻量化方向。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
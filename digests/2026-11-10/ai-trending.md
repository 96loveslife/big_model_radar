# AI 开源趋势日报 2026-11-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-10 06:47 UTC

---

# AI 开源趋势日报

**日期：2026-11-10**  
**数据口径：GitHub Trending 今日新增 Stars + GitHub Search API 近 7 天活跃主题仓库**

---

## 1. 今日速览

1. **智能体基础设施成为今日主线。** Trending 榜单中，Anthropic Skills、Claude Quickstarts、浏览器 Agent CLI、个人 Agent Brain 等项目集中出现，显示热点已从“聊天界面”转向可复用技能、工具调用与端到端执行能力。
2. **Agent 的浏览器操作能力持续升温。** `vercel-labs/agent-browser` 今日新增 **916 Stars**，而 `browser-use` 在主题搜索中保持 **120,481 Stars**，浏览器自动化仍是智能体落地的重要入口。
3. **垂直智能体应用继续获得规模化关注。** 股票分析项目今日新增 **506 Stars**，主题搜索中累计达到 **69,218 Stars**；求职、PPT 生成、交易和办公自动化项目也保持高热度。
4. **RAG 正从“向量检索组件”升级为“上下文与记忆基础设施”。** OpenViking、mem0、Cognee、claude-mem 等项目分别围绕 Agent 记忆、知识图谱、长期上下文和上下文压缩展开竞争。
5. **本地化与多模型兼容仍是基础设施主线。** Ollama、Open WebUI、OpenViking、AnythingLLM、home-llm 等项目共同指向私有化部署、边缘推理和模型自由切换需求。

---

## 2. 各维度热门项目

> Stars 采用题面所给数据。Trending 项目总量显示为 `0`，因此仅列今日新增；主题搜索项目未提供今日新增。

### 🔧 AI 基础工具

#### 1. [anthropics/skills](https://github.com/anthropics/skills)
- **Stars：** 今日新增 **1,038**（题面总量显示为 0）
- **说明：** Anthropic 推出的 Agent Skills 公共仓库，提供可复用的智能体技能与开发范式，是今日最值得关注的 Agent 标准化基础设施之一。

#### 2. [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)
- **Stars：** 今日新增 **551**（题面总量显示为 0）
- **说明：** 面向 Claude API 应用开发的快速入门项目集合，降低从模型调用到可部署应用的开发门槛。

#### 3. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)
- **Stars：** 今日新增 **916**（题面总量显示为 0）
- **说明：** 面向 AI 智能体的 Rust 浏览器自动化 CLI，为 Agent 提供结构化、可脚本化的网页交互能力。

#### 4. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)
- **Stars：** **9,103**
- **说明：** Rust 语言的模块化 LLM 应用框架，强调可扩展架构，反映 AI 应用基础设施向高性能系统语言延伸的趋势。

#### 5. [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)
- **Stars：** **41,176**
- **说明：** 用 Rust 编写的终端智能体，支持不同模型提供商，定位是开放、可扩展的 Coding Agent Harness。

#### 6. [ollama/ollama](https://github.com/ollama/ollama)
- **Stars：** **186,485**
- **说明：** 本地模型运行与管理的代表性工具，支持包括 DeepSeek、Qwen、Kimi、GLM、MiniMax 在内的多种模型。

#### 7. [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)
- **Stars：** **13,382**
- **说明：** Java 生态中的 LLM 应用开发库，覆盖模型接入、工具调用、MCP、Agent 与 RAG，适合企业 Java 技术栈。

---

### 🤖 AI 智能体 / 工作流

#### 1. [garrytan/gbrain](https://github.com/garrytan/gbrain)
- **Stars：** 今日新增 **216**（题面总量显示为 0）
- **说明：** 面向 OpenClaw/Hermes Agent 的个人化 Agent Brain，代表智能体从执行脚本向长期状态、记忆和人格化方向演进。

#### 2. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- **Stars：** **262,152**
- **说明：** 强调可成长能力的自主智能体，是个人 Agent 框架赛道中社区规模最突出的项目之一。

#### 3. [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)
- **Stars：** **81,542**
- **说明：** 覆盖职位发现、简历匹配、申请材料和面试准备的求职智能体，完整体现端到端垂直工作流。

#### 4. [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
- **Stars：** **49,987**
- **说明：** 轻量级个人智能体项目，以较低部署成本提供可扩展的个人 Agent 能力。

#### 5. [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)
- **Stars：** **47,857**
- **说明：** 支持规划、工具、技能、记忆和知识体系，并提供多智能体、多模型与多渠道接入。

#### 6. [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)
- **Stars:** **38,477**
- **说明：** 将 IDE 与 Coding Agent 深度集成的开发工具，代表编码智能体正从命令行助手升级为 IDE 原生生产力环境。

#### 7. [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)
- **Stars：** **36,147**
- **说明：** 面向复杂软件工程任务的 Go 语言编码智能体，体现出 Agent 工具链的工程化和多语言趋势。

#### 8. [Twigpine/openclaude](https://github.com/Twigpine/openclaude)
- **Stars：** **34,313**
- **说明：** 以“跨环境运行、模型可替换”为核心的 AI 工具项目，体现了模型无关和可移植架构的重要性。

---

### 📦 AI 应用

#### 1. [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)
- **Stars：** 今日新增 **1,587**（题面总量显示为 0）
- **说明：** 为 AI 机器人提供虚拟机操作环境的开源替代方案，属于今日增速最快的一批 Agent 应用型项目。

#### 2. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- **Stars：** **69,218**；今日新增 **506**
- **说明：** LLM 驱动的多市场股票分析系统，整合实时新闻、行情、决策看板与自动推送，是金融垂直 Agent 的代表。

#### 3. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
- **Stars：** **75,364**
- **说明：** 将文档或主题转换为原生 PowerPoint 内容，可生成图形、动画、图表、表格及旁白。

#### 4. [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)
- **Stars:** **37,980**
- **说明：** 面向个人交易场景的交易智能体，延续了金融 Agent 与多智能体决策框架的热度。

#### 5. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- **Stars：** **141,722**
- **说明：** 根据主题或关键词自动生成高清短视频，展示生成式 AI 与自动化内容生产链路的成熟。

#### 6. [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)
- **Stars：** 今日新增 **31**（题面总量显示为 0）
- **说明：** 通过 MCP 将 Home Assistant 接入 Claude、ChatGPT 等 AI 助手，是智能家居与标准工具协议结合的具体应用。

#### 7. [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- **Stars：** **37,561**
- **说明：** 可本地或云端部署的个人 AI 助手，支持多种聊天应用与可扩展能力。

---

### 🧠 大模型 / 训练

#### 1. [open-compass/opencompass](https://github.com/open-compass/opencompass)
- **Stars：** **7,579**
- **说明：** 覆盖知识、推理、代码、科学、长上下文和安全等任务的大模型评测平台，是模型选型与能力比较的重要基础设施。

#### 2. [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)
- **Stars：** **5,703**
- **说明：** 在 Apple Silicon 上构建微型 vLLM 与 Qwen 推理系统，适合学习现代 LLM 推理栈和端侧部署。

#### 3. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)
- **Stars:** **108,125**
- **说明：** 使用 PyTorch 从零实现 ChatGPT 类大模型，是理解模型结构、训练流程与推理机制的高热度学习项目。

#### 4. [huggingface/transformers](https://github.com/huggingface/transformers)
- **Stars:** **168,722**
- **说明：** 支撑文本、视觉、音频和多模态模型训练与推理的基础框架，仍是多模态模型生态的核心入口。

#### 5. [pytorch/pytorch](https://github.com/pytorch/pytorch)
- **Stars:** **105,303**
- **说明：** AI 模型训练和推理的基础计算框架，持续为研究原型与生产级模型提供底层能力。

#### 6. [Picovoice/picollm](https://github.com/Picovoice/picollm)
- **Stars:** **319**
- **说明：** 通过 X-Bit 量化实现在设备端 LLM 推理，聚焦低资源、隐私优先的边缘部署。

#### 7. [akaliKong/MiniOneRec](https://github.com/AkaliKong/MiniOneRec)
- **Stars:** **1,963**
- **说明：** 对 OneRec 推荐系统进行轻量复现，代表生成式推荐与大模型在业务决策场景中的融合。

---

### 🔍 RAG / 知识库

#### 1. [langchain-ai/langchain](https://github.com/langchain-ai/langchain)
- **Stars:** **149,289**
- **说明：** 面向 Agent 应用的通用开发平台，RAG、工具调用与工作流编排能力覆盖面广。

#### 2. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)
- **Stars:** **145,162**
- **说明：** 将代码、文档、SQL Schema、配置及 PDF 转换为可查询知识图谱，并提供面向主流 Coding Agent 的 Skill。

#### 3. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)
- **Stars:** **115,521**
- **说明：** 跨会话记录、压缩并召回 Agent 工作上下文，目标是解决编码智能体长期任务中的上下文连续性问题。

#### 4. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)
- **Stars:** **93,930**
- **说明：** 从 RAG 引擎演进为 Agent 原生数据库和上下文基础设施，覆盖复杂文档处理与知识检索。

#### 5. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)
- **Stars:** **41,896**
- **说明：** 统一 Agent 记忆、知识 RAG 与技能管理，强调上下文数据库的自演化能力。

#### 6. [mem0ai/mem0](https://github.com/mem0ai/mem0)
- **Stars:** **68,726**
- **说明：** 面向生产环境的 Agent 长期记忆层，解决跨会话上下文持久化和个性化问题。

#### 7. [topoteretes/cognee](https://github.com/topoteretes/cognee)
- **Stars:** **33,195**
- **说明：** 开源 Agent 记忆平台，强调使用小模型构建持久化长期记忆，降低记忆成本。

#### 8. [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)
- **Stars:** **40,326**
- **说明：** 使用基于推理的文档索引实现无向量库 RAG，代表对传统 Embedding 检索路径的差异化探索。

---

## 3. 趋势信号分析

今日热榜显示，**Agent Skills、Claude 应用脚手架、浏览器 CLI 和个人 Agent Brain** 同时获得关注，增长重心已由单模型 API 转向“技能复用 + 工具调用 + 状态记忆”的完整执行栈。Rust 驱动的 `agent-browser` 与 `gbrain` 是值得关注的新兴技术栈信号：一端强化浏览器执行能力，另一端强化 Agent 的长期认知层。垂直应用继续爆发，OpenMausBot 今日新增 1,587 Stars，股票分析新增 506 Stars，表明虚拟环境操作和金融决策等高专业门槛场景正在快速产品化。另一条主线是上下文工程：近期热点已不只关注 RAG 检索精度，而是转向知识图谱、跨会话记忆、工具输出压缩和上下文数据库。OpenAI、Anthropic、DeepSeek、Qwen 等模型持续分化，使模型无关的 Agent Harness、Ollama、本地推理与统一接口的重要性同步上升。

---

## 4. 社区关注热点

- **[anthropics/skills](https://github.com/anthropics/skills)** —— 今日新增 **1,038 Stars**；Agent Skills 可能成为跨模型、跨框架复用能力的重要标准层。
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** —— 今日新增 **916 Stars**；浏览器操作是当前 Agent 落地频率最高、也最易形成产品闭环的能力之一。
- **[milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)** —— 今日新增 **1,587 Stars**；为机器人或智能体提供虚拟机执行环境，代表“工具型 Agent”向“环境型 Agent”演进。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** —— 今日新增 **506 Stars**、累计 **69,218 Stars**；金融分析 Agent 同时具备高频使用场景和清晰的数据自动化价值。
- **Agent 记忆与上下文基础设施** —— 重点关注 [mem0ai/mem0](https://github.com/mem0ai/mem0)、[volcengine/OpenViking](https://github.com/volcengine/OpenViking)、[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 与 [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)；它们分别从长期记忆、上下文数据库、跨会话压缩和 Token 优化切入，解决 Agent 生产化的关键瓶颈。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
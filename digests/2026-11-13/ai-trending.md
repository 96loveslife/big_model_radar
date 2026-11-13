# AI 开源趋势日报 2026-11-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-13 05:57 UTC

---

# AI 开源趋势日报

**日期：2026-11-13**

> 数据口径：Trending 榜单的“今日新增 stars”为当日实时增量；主题搜索为 7 天内活跃项目。由于榜单总 stars 显示为 0，以下不臆测存量，仅列可用的今日增量。

## 1. 今日速览

1. **Coding Agent 生态占据今日热榜核心**：今日 13 个 Trending 项目中，8 个明确与 AI 或 AI 工具链相关，覆盖编码代理、代理技能、浏览器执行、安全扫描和设计系统。
2. **代理基础设施明显升温**：Google Chrome 的 Web 最佳实践仓库、OpenAI 的 Codex Security、Meta 的 agent-ready 设计系统分别获得 **739、643、1830** 个今日 stars，说明社区关注点正从“模型能力”扩展到代理执行环境与生产工程化。
3. **Qwen Code 与跨模型工具链持续扩张**：QwenLM/qwen-code 登上热榜，面向 Claude Code、Codex、OpenCode 等多代理框架的统一入口项目也获得 **415** 个今日 stars。
4. **本地推理与低延迟工程受到关注**：TensorFold 以 Zig 实现 Metal、CUDA、Vulkan 多后端推理，llama.cpp 继续作为轻量本地 LLM 基础设施保持热度。
5. **主题搜索呈“应用层成熟、底层基础设施固化”格局**：Agent、RAG、向量数据库已经形成完整项目群，而训练框架和模型仓库的存量优势仍然明显。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

#### [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)
- **Stars：今日 +739**
- Chrome 团队维护的现代 Web 开发最佳实践与编码代理知识库，帮助 AI Agent 获取更可靠的浏览器端开发规范。

#### [openai/codex-security](https://github.com/openai/codex-security)
- **Stars：今日 +643**
- OpenAI 推出的安全扫描 CLI 与 TypeScript SDK，用于发现、验证和修复代码漏洞，体现了 AI 编码工具向自主安全审查延伸。

#### [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)
- **Stars：今日 +151**
- 阿里通义千问推出的终端开源 Coding Agent，是今天热榜中最直接的大厂 AI 编程代理项目。

#### [ashhart/TensorFold](https://github.com/ashhart/TensorFold)
- **Stars：今日 +54**
- 使用 Zig 构建的 LLM 推理引擎，统一支持 Metal、CUDA 和 Vulkan，低延迟与跨硬件部署能力值得关注。

#### [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)
- **Stars：今日 +176**
- C/C++ 实现的轻量本地 LLM 推理基础设施，持续是端侧、桌面端和低成本私有化部署的重要底座。

#### [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)
- **Stars：今日 +415**
- 提供多模型、多终端代理框架的统一接入方式，支持 Claude Code、Codex、OpenCode 等工具及浏览器会话，反映用户对低成本、跨模型工作流的需求。

#### [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- **Stars：今日 +816**
- 为 AI Coding Agent 提供生产级工程技能集合，推动代理从通用命令执行转向可复用的专业工作流程。

---

### 🤖 AI 智能体/工作流

#### [meta/astryx](https://github.com/meta/astryx)
- **Stars：今日 +1830**
- Meta 推出的可定制、面向 Agent 的开源设计系统，以 **1830** 个今日 stars 成为今日 AI 项目中热榜关注度最高的项目。

#### [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)
- **Stars：今日 +298**
- 为每个 Agent 分配独立浏览器、文件及工具环境，并记录执行前后状态，强调代理操作的可控性和可审计性。

#### [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- **Stars：主题搜索累计 ⭐263,028**
- 强调可成长、个性化能力的开源代理，代表通用个人代理向持续学习与记忆系统演进。

#### [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)
- **Stars：主题搜索累计 ⭐201,337**
- 为 AI Agent 提供网页抓取、结构化提取与搜索能力，是代理连接外部实时信息的关键基础设施。

#### [browser-use/browser-use](https://github.com/browser-use/browser-use)
- **Stars：主题搜索累计 ⭐120,870**
- 以浏览器为核心构建 AI Agent，涵盖隐身浏览器及托管代理 API，是 Web Agent 领域最具代表性的开源项目之一。

#### [paperclipai/paperclip](https://github.com/paperclipai/paperclip)
- **Stars：主题搜索累计 ⭐113,466**
- 面向工作场景的代理管理应用，反映 AI 工具从单任务助手转向员工式代理编排与运营。

#### [langgenius/dify](https://github.com/langgenius/dify)
- **Stars：主题搜索累计 ⭐161,072**
- 提供可视化 Agent 工作流、RAG 流水线及多模型工具支持，成熟度较高，适合从原型进入生产部署。

#### [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
- **Stars：主题搜索累计 ⭐50,053**
- 轻量级个人代理，强调本地部署和多工具扩展，是个人自动化助手的重要代表。

---

### 📦 AI 应用

#### [we-promise/sure](https://github.com/we-promise/sure)
- **Stars：今日 +967**
- 面向个人与共同参与者的开源财务管理应用，利用 AI 降低个人财务管理和协作门槛，今日热度突出。

#### [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- **Stars：主题搜索累计 ⭐143,026**
- 根据主题或关键词自动生成高清短视频，展示大模型驱动的端到端内容生产应用。

#### [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)
- **Stars：主题搜索累计 ⭐82,266**
- 覆盖职位发现、简历定制、面试准备和投递跟踪的本地 AI 求职代理，是垂直 Agent 应用的典型。

#### [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
- **Stars：主题搜索累计 ⭐76,398**
- 将文档或主题转换为带原生图形、动画、图表及语音旁白的 PowerPoint，代表办公文档自动化方向。

#### [OpenBB](https://github.com/openbq-org/OpenBB)
- **Stars：主题搜索累计 ⭐75,377**
- 面向分析师、量化研究与 AI Agent 的开放数据平台，可将金融数据能力直接提供给智能体调用。

#### [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- **Stars：主题搜索累计 ⭐71,129**
- 集成多市场行情、新闻、决策看板与自动推送的 LLM 股票分析系统，体现垂直金融 Agent 的产品化趋势。

#### [acon96/home-llm](https://github.com/acon96/home-llm)
- **Stars：主题搜索累计 ⭐1,496**
- 使用本地 LLM 控制智能家居，突出了隐私优先、边缘推理和具身场景的结合。

---

### 🧠 大模型/训练

#### [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)
- **Stars：主题搜索累计 ⭐201,584**
- 通用机器学习与深度学习框架，仍是训练、部署及产业级 AI 生态的重要基础。

#### [huggingface/transformers](https://github.com/huggingface/transformers)
- **Stars：主题搜索累计 ⭐168,938**
- 覆盖文本、视觉、音频和多模态模型的统一模型定义框架，是开源模型生态的核心入口。

#### [pytorch/pytorch](https://github.com/pytorch/pytorch)
- **Stars：主题搜索累计 ⭐105,462**
- Python 深度学习与 GPU 加速框架，训练侧最主流的基础设施之一。

#### [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)
- **Stars：主题搜索累计 ⭐108,325**
- 从零实现 ChatGPT 类模型的教学型项目，体现开发者对理解模型内部机制和推理过程的持续需求。

#### [keras-team/keras](https://github.com/keras-team/keras)
- **Stars：主题搜索累计 ⭐64,424**
- 以易用性为特点的深度学习框架，持续承担模型原型和研究验证角色。

#### [open-compass/opencompass](https://github.com/open-compass/opencompass)
- **Stars：主题搜索累计 ⭐7,590**
- 覆盖知识、推理、代码、科学、长上下文与安全等维度的 LLM 评测平台，反映竞争重点正转向能力验证与安全治理。

#### [Picovoice/picollm](https://github.com/Picovoice/picollm)
- **Stars：主题搜索累计 ⭐319**
- 通过 X-Bit 量化实现端侧 LLM 推理，方向聚焦低资源设备上的隐私化部署。

---

### 🔍 RAG/知识库

#### [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)
- **Stars：主题搜索累计 ⭐146,853**
- 将代码、文档、SQL Schema、配置和 PDF 转换为可查询知识图谱，并提供面向多种 Coding Agent 的技能。

#### [infiniflow/ragflow](https://github.com/infiniflow/ragflow)
- **Stars：主题搜索累计 ⭐94,097**
- 从文档 RAG 引擎演进为 Agent-native 数据库与上下文基础设施，突出结构化解析和复杂检索。

#### [crawl4ai](https://github.com/unclecode/crawl4ai)
- **Stars：主题搜索累计 ⭐87,293**
- 面向 AI Agent 的开源爬虫、抽取和搜索方案，是实时 RAG 与网页 Agent 的数据入口。

#### [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)
- **Stars：主题搜索累计 ⭐79,513**
- 在内容进入模型前压缩工具输出、日志、文件及 RAG 片段，以降低 Coding Agent 的 Token 消耗。

#### [volcengine/OpenViking](https://github.com/volcengine/OpenViking)
- **Stars：主题搜索累计 ⭐42,130**
- 统一 Agent 记忆、知识 RAG 与技能的自我演化上下文数据库，代表“记忆即基础设施”方向。

#### [Cognee](https://github.com/topoteretes/cognee)
- **Stars：主题搜索累计 ⭐33,286**
- 面向 Agent 持久长期记忆的开源平台，试图以小模型和知识处理降低记忆系统成本。

#### [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)
- **Stars：主题搜索累计 ⭐40,402**
- 以推理式、Vectorless 文档索引实现 RAG，代表减少对向量数据库依赖的新路线。

#### [LEANN](https://github.com/StarTrail-org/LEANN)
- **Stars：主题搜索累计 ⭐13,796**
- 面向个人设备的轻量私有 RAG，宣称在保持速度和准确性的同时显著节省存储空间。

---

## 3. 趋势信号分析

今日热榜最明显的信号是 **Coding Agent 及其配套工程工具获得爆发性关注**。13 个 Trending 项目中，8 个明确属于 AI，涵盖终端代理、Agent Skills、安全扫描、浏览器执行和设计系统；相关项目今日增量达到数千级，表明热度已从单一模型发布扩散到完整代理工作栈。**meta/astryx** 以今日 +1830 登顶，说明“可被代理操作的设计系统”正成为新入口；Google Chrome 的规范仓库与 OpenAI 的安全 CLI 则显示，代理必须具备准确规则、专业工具和可验证闭环。

新兴技术栈方面，**Zig 推理引擎**和 **Rust 编码代理**值得留意：前者挑战 Python/C++ 主导的推理工具链，后者体现开发者对内存安全、终端原生体验及多代理协作的重视。与此同时，Qwen Code 与多模型统一入口走热，和近期开源模型及 Coding Agent 工具链快速扩张的趋势相呼应；竞争焦点正从模型参数转向代理执行效率、安全、上下文管理和成本控制。

---

## 4. 社区关注热点

- **[meta/astryx](https://github.com/meta/astryx)**：今日 **+1830 stars**，Agent-ready 设计系统首次成为热榜焦点，可能推动 UI 构建从自然语言生成转向面向代理操作的结构化规范。
- **[openai/codex-security](https://github.com/openai/codex-security)**：今日 **+643 stars**，AI 编码代理开始直接承担漏洞发现、验证和修复，安全闭环成为生产级代理的重要能力。
- **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)**：今日 **+739 stars**，浏览器厂商将最佳实践封装为代理知识源，降低生成代码过时或不符合现代 Web 标准的问题。
- **[CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)**：今日 **+298 stars**，独立浏览器、文件和工具沙箱以及操作记录，反映代理基础设施正朝可审计、可控执行发展。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)**：主题搜索累计 **⭐79,513**，在不牺牲回答质量的情况下压缩 Agent 上下文，直接应对长会话、工具输出和 RAG 带来的 Token 成本问题。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
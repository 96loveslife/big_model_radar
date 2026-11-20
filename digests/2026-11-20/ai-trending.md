# AI 开源趋势日报 2026-11-20

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-20 06:39 UTC

---

# AI 开源趋势日报｜2026-11-20

> 数据范围：GitHub 今日 Trending 榜单及 7 天内活跃的 AI 主题仓库。  
> Stars 格式：`总量 / 今日新增`；主题搜索结果未提供当日新增时，仅展示总量。已剔除 nginx、通用下载器等非 AI 项目。

## 1. 今日速览

- 今日热榜的主线不是新模型，而是 **Agent Skills 与 Agent Harness 工具链集中爆发**：`superpowers`、`Claude-BugHunter`、`last30days-skill` 等进入热榜。
- **上下文基础设施**成为第二主线，Graphify、Claude-Mem、Headroom、mem0、RAGFlow 等分别从知识图谱、持久记忆和 Token 压缩切入。
- **本地小模型与低门槛训练**升温，MiniMind 以“2 小时训练 64M 模型”获得高关注，OpenVINO 则代表推理部署持续受到重视。
- RAG 正从“向量检索 + 拼接上下文”转向 **知识图谱、逻辑推理、无向量索引和上下文数据库**。
- Computer Use、端到端 Agent Harness、面向编码代理的插件与技能标准，正成为近期大模型厂商和开源社区共同押注的工程方向。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 204,508 / +825 | 为智能体提供统一搜索、抓取和结构化数据接口，是当前 Agent 知识获取层的重要基础设施。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | 总量未披露 / +246 | 跨硬件 AI 推理与部署工具包，反映社区关注点继续从“训练模型”转向“低成本落地推理”。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 264,822 | 可扩展的个人智能体框架，强调随用户需求成长，代表通用个人 Agent 平台化趋势。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 307,402 | 面向 Claude Code、Codex、Cursor 等编码代理的 Harness 优化系统，集成技能、记忆、安全和研究工作流。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 总量未披露 / +271 | 为多种编码代理提供统一图表设计能力，显示垂直 Agent Skill 正快速产品化。 |
| [cursor/plugins](https://github.com/cursor/plugins) | 总量未披露 / +384 | Cursor 官方插件规范及插件集合，是编码 Agent 从单点提示词走向标准化扩展生态的重要信号。 |

### 🤖 AI 智能体／工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 总量未披露 / **+2,028** | 今日新增最高的 AI 相关项目，将 Agent Skills 与软件开发方法论结合，瞄准规范化、可复用的编码代理工作流。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 总量未披露 / **+1,349** | 面向漏洞挖掘和外部红队测试的 Claude Code 技能包，体现 Agent Skills 正快速进入专业安全领域。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 总量未披露 / **+954** | 可从 Reddit、X、YouTube、HN 等来源完成近期研究并生成有依据摘要，代表多源研究型 Skill 兴起。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 总量未披露 / **+898** | 为任意软件生成或改造 Agent 原生 CLI，让传统工具能够被智能体稳定调用。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 总量未披露 / +38 | 面向 CI/CD 可靠性的开源 Agent，将智能体引入 SRE 与运维自动化。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 45,172 | 构建有状态、可恢复智能体的核心框架，适合复杂长流程和人工介入场景。 |
| [trycua/cua](https://github.com/trycua/cua) | 32,693 | 提供跨操作系统 Computer Use 驱动、沙箱和评测体系，是端到端 Agent 训练基础设施。 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | 总量未披露 / +126 | 开源 AI 视频剪辑桌面工具，可自动生成字幕、封面和发布文案，体现多模态内容生产需求。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | 总量未披露 / +377 | 将应用商店合规、隐私及 AI 法规检查封装成 Agent Skill，是 AI 合规自动化方向的代表性项目。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 73,509 | LLM 驱动的多市场股票分析与自动推送系统，展示垂直领域 Agent 的成熟产品化路径。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 83,837 | 覆盖职位发现、简历定制、面试准备和申请跟踪的本地求职 Agent。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 78,699 | 将主题或文档转换为原生 PowerPoint，包含图形、动画、图表和旁白，瞄准专业内容生产。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 144,753 | 根据主题自动生成短视频的 LLM 工作流，是 AI 内容生产赛道的代表项目。 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | 1,497 | 通过本地 LLM 控制智能家居，聚焦隐私优先的端侧垂直 Agent。 |

### 🧠 大模型／训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | **67,170 / +238** | 以“两小时训练 64M 模型”降低 LLM 入门和实验门槛，今日同时进入热榜与模型主题搜索。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 169,305 | 通用模型定义与训练框架，是多模态模型研究和微调生态的核心基础设施。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 105,731 | 主流深度学习训练框架，持续构成开源大模型底层技术栈。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,608 | 覆盖推理、代码、长上下文和安全等 100 多个数据集的 LLM 评测平台。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 5,793 | 在 Apple Silicon 上构建 tiny vLLM 与 Qwen 推理系统，兼具教学和端侧工程价值。 |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | 1,887 | 聚焦 Agentic RL 的前沿资料集合，显示训练重点正从语言模型预训练转向 Agent 强化学习。 |
| [zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN) | 1,816 | 由多 Agent 自动完成假设生成、数据分析和报告写作，属于研究自动化应用。 |

### 🔍 RAG／知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | **150,768** | 将代码、文档、SQL Schema 等转换为可查询知识图谱，以确定性 AST 解析替代纯向量检索。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 159,119 | 面向 Ollama、OpenAI API 等模型的成熟自托管 AI 工作台。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,943 | 通用 Agent 工程平台，支撑工具调用、RAG 和复杂应用编排。 |
| [ragflow/infiniflow](https://github.com/infiniflow/ragflow) | 94,459 | 从 RAG 引擎演进为 Agent-native 数据库，强调上下文基础设施定位。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,501 | 统一 Agent Memory、知识 RAG 和 Skills 的自演化上下文数据库。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 40,494 | 使用推理式、无向量方式完成文档索引，代表 Vectorless RAG 的新路线。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,184 | 在工具输出、日志和 RAG 分块进入模型前进行压缩，以降低编码代理 Token 消耗。 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 16,271 | 轻量、进程内向量数据库，体现检索基础设施向本地化和高可移植性演进。 |

---

## 3. 趋势信号分析

今日最明显的爆发性关注集中在 **Agent Skills 与编码代理 Harness**：`superpowers` 今日新增 2,028 stars，Claude-BugHunter、last30days-skill、CLI-Anything 均超过或接近千级新增。新兴技术栈表现为“**Skills + MCP/CLI + Memory + Context Compression**”的组合，而非单一 Agent 框架。Claude Code、Cursor、Codex、Gemini CLI 等工具正在成为通用 Agent 运行时，Skills 也开始像插件一样形成跨工具生态。

另一信号是 **RAG 向结构化上下文升级**：Graphify 强调知识图谱和可解释边，PageIndex 强调无向量推理式索引，OpenViking、RAGFlow 强调数据库化上下文。与此同时，MiniMind 展示本地小模型训练门槛下降，AgentsMeetRL 则表明训练目标正从通用语言模型迁移到 Agent 策略与工具使用。这些变化与近期行业向推理模型、Computer Use、长上下文和编码代理演进的路线一致。

---

## 4. 社区关注热点

- **[obra/superpowers](https://github.com/obra/superpowers)** — 今日新增 2,028 stars，是 Agent Skills 工程化最直接的流量信号。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 将代码库转化为可解释知识图谱，值得关注其对传统 RAG 的替代能力。
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — 漏洞挖掘与红队场景专业化，显示 Agent Skills 已从通用辅助走向企业安全。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 工具输出压缩直击编码代理成本、延迟和上下文窗口瓶颈，实用价值突出。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — 将大模型训练压缩到两小时和 64M 规模，适合快速实验、教学及端侧原型验证。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
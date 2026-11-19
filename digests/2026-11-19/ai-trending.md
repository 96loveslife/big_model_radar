# AI 开源趋势日报 2026-11-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-19 06:50 UTC

---

# AI 开源趋势日报｜2026-11-19

> 数据口径：GitHub Trending 今日新增 stars + 近 7 天活跃的 AI Topic 搜索结果。Topic 搜索结果未提供“今日新增 stars”，以下仅标注总 stars；Trending 项目同时标注总量与今日新增。

## 1. 今日速览

1. **Agent Skills 与 Agent Harness 成为今日最明显的热点。** `last30days-skill`、`google-labs-code/stitch-skills`、`NVIDIA/SkillEvaluator`、`obra/superpowers`、`affaan-m/ECC` 同时进入 Trending，说明竞争焦点正从“调用一次模型”转向技能的标准化、评测、安全与复用。
2. **CLI 正在成为 AI Agent 的重要交互与工具接入层。** `CLI-Anything` 登榜且今日新增 389 stars，目标是让现有软件具备 Agent-Native 能力；多款编码 Agent 及其周边 Harness 也在 Topic 搜索中保持高热度。
3. **多智能体科研与知识基础设施同步升温。** `paper-orchestra` 今日新增 1,524 stars，自动化学术论文写作受关注；RAG 项目则从单纯向量检索扩展到记忆、知识图谱、上下文压缩和文档索引。
4. **本地优先与私有化 AI 继续扩张。** Ollama、AnythingLLM、Open WebUI、Milvus、Cognee、OpenViking 等覆盖本地模型、交互界面、向量存储与 Agent 长期记忆，显示开发者对低成本、可控数据流的强烈需求。
5. **模型本身的关注度让位于工程化层。** 今日趋势重点集中在 Agent、Skills、RAG、上下文管理和评测，而非单纯训练更大的基础模型。

---

## 2. 各维度热门项目

> 同一项目按其最主要价值归类；部分项目具备跨类别属性，文中会加以说明。

### 🔧 AI 基础工具：框架、SDK、推理引擎、开发工具与 CLI

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---:|---:|---|
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | — | **+389** | 将任意软件封装为可供 Coding Agent 理解和操作的 CLI，直接解决 Agent 工具接入碎片化问题，是今日最值得关注的 Agent 基础设施方向之一。 |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | — | **+312** | NVIDIA 推出的 Agent Skill/插件评测框架，覆盖质量门禁、安全扫描、兼容性检查、语义去重和真实 Agent 行为评测，标志 Skills 开始进入工程化治理阶段。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | — | **+24** | 面向 AI 推理优化的开源工具包，覆盖模型压缩、量化和高效部署，是端侧及企业推理基础设施的代表。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | **9,180** | — | Rust 实现的模块化 LLM 应用框架，便于构建可扩展的模型调用、工具使用和 Agent 工作流，体现 AI 基础设施向高性能系统语言迁移。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | **52,950** | — | 通用文档处理与 LLM 应用平台，可连接数据源、构建检索流程并支撑多种 Agent 应用。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | **13,422** | — | JVM 生态的 LLM 应用 SDK，统一封装模型供应商、向量库、工具调用、MCP、Agent 与 RAG，适合 Java 企业系统集成。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | **80,121** | — | 在工具输出、日志和 RAG 片段进入模型前进行压缩，目标是在维持答案质量的同时显著降低 Coding Agent 的 token 消耗。 |
| [neuml/txtai](https://github.com/neuml/txtai) | **13,644** | — | 集成语义搜索、LLM 编排和语言模型工作流的轻量框架，适合快速构建本地 AI 应用。 |

### 🤖 AI 智能体 / 工作流：Agent 框架、自动化与多智能体

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---:|---:|---|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | — | **+1,059** | 可跨 Reddit、X、YouTube、Hacker News、Polymarket 和网页开展近期调研并生成有依据摘要的 Agent Skill，是今日增速最高的 AI 项目。 |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | — | **+1,524** | Google Research 的多智能体论文写作框架，以角色协作完成研究型论文生成，今日新增 stars 在榜单中居首。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | **306,749** | **+1,108** | 面向 Claude Code、Codex、OpenCode、Cursor 等工具的 Agent Harness 优化系统，集成 Skills、记忆、安全和“先研究后开发”流程。 |
| [obra/superpowers](https://github.com/obra/superpowers) | — | **+822** | 可与开发方法论结合的 Agentic Skills 框架，重点解决编码 Agent 如何稳定执行复杂工程流程。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | **264,565** | — | 强调随用户需求持续成长的个人 Agent，是个人智能体与长期个性化方向的高关注项目。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | **41,183** | — | Rust 编写的终端 Coding Agent，支持模型自由选择和多 Agent 任务拆分，兼顾性能、可读性与代码控制权。 |
| [trycua/cua](https://github.com/trycua/cua) | **32,632** | — | 提供跨操作系统沙箱、Computer Use 驱动及训练评测数据生成基础设施，面向 Computer-Use Agent 的规模化开发。 |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | — | **+325** | 带原生 AI 能力的可自托管工作流自动化平台，将模型、Agent 与数百项业务服务连接，是低代码自动化的重要入口。 |

### 📦 AI 应用：具体应用产品与垂直场景解决方案

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---:|---:|---|
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | **83,607** | — | 覆盖职位搜索、简历匹配、ATS 优化、面试准备和投递跟踪的本地 AI 求职 Agent，垂直场景闭环较完整。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | **78,398** | — | 将文档或主题转换为带原生图形、动画、图表及旁白的 PowerPoint，代表生成式办公应用向可编辑成品演进。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | **73,406** | — | 集成多市场行情、新闻、LLM 分析、决策看板和自动推送的股票智能系统，体现金融 Agent 的垂直化趋势。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | **38,507** | — | 面向个人交易场景的 AI Agent，将市场信息、研究和策略执行组合成垂直工作流。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | **144,565** | — | 根据主题自动完成视频脚本、素材、配音与高清成片生成，是生成式视频生产流水线中的代表项目。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | **123,102** | — | 采用多 Agent 分工研究交易问题的 LLM 金融框架，展示多智能体在复杂决策领域的实验性应用。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | **121,458** | — | 面向 AI 浏览器的 Python Agent 库，提供浏览器操作能力及托管 Agent API，支撑网站操作和自动化任务。 |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | **9,178** | — | 面向专业知识库的逻辑引导推理与检索框架，重点改善传统 RAG 仅依赖向量相似度的问题。 |

### 🧠 大模型 / 训练：模型实现、训练框架与评测

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---:|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | **66,559** | — | 以较低门槛训练 64M 小型语言模型，适合学习模型训练全流程，也反映“小模型可教学化”的持续需求。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | **5,784** | — | 面向 Apple Silicon 的微型 LLM 推理系统教程，以构建 tiny vLLM 和运行 Qwen 为核心，兼顾推理学习与本地部署。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | **7,602** | — | 覆盖知识、推理、编程、科学、长上下文和安全等百余个数据集的 LLM 评测平台，是模型选型与能力比较的重要基础设施。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | **169,203** | — | 文本、视觉、音频和多模态模型的基础定义框架，仍是开源模型训练、推理和适配的通用底层组件。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | **105,656** | — | 通用深度学习与张量计算框架，是大量 AI 模型研究和工程实验的基础底座。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | **201,595** | — | 通用机器学习框架，覆盖训练、推理和生产部署，是成熟 AI 工程生态的重要组成。 |
| [keras-team/keras](https://github.com/keras-team/keras) | **64,427** | — | 以易用性为特点的深度学习框架，降低原型验证和模型训练门槛。 |
| [zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN) | **1,816** | — | 由 AI 驱动多智能体完成假设生成、数据分析和报告撰写的研究型系统，也展示了 Agent 参与科研数据生产的方向。 |

### 🔍 RAG / 知识库：检索、向量存储、记忆与知识管理

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---:|---:|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | **150,278** | — | 将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，并提供面向主流 Coding Agent 的 `/graphify` Skill。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | **159,058** | — | 支持 Ollama、OpenAI API 等模型的用户友好 AI 界面，是本地及私有模型交互层的重要入口。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | **149,868** | — | 通用 Agent 工程平台，围绕模型、工具、检索和工作流构建应用，是 Agent/RAG 生态的核心框架之一。 |
| [RAGFlow](https://github.com/infiniflow/ragflow) | **94,411** | — | 从 RAG 引擎演进为面向 Agent 的数据库与上下文基础设施，强调复杂文档处理和知识工作流。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | **69,221** | — | 面向 Agent 的记忆层，负责跨会话持久化上下文，是解决长程任务连续性的关键组件。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | **42,444** | — | 尝试统一 Agent Memory、知识 RAG 与 Skills 的自进化上下文数据库，体现“上下文基础设施”融合趋势。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | **33,396** | — | 面向 Agent 的开源长期记忆平台，主打以较小模型完成知识组织与持久记忆。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | **40,481** | — | 采用推理式、免向量索引的文档 RAG 路线，以结构化页面树改善检索可解释性和准确性。 |

---

## 3. 趋势信号分析

今日热榜最显著的爆发点不是新基础模型，而是 **Agent Skills、Harness 与工具接入层**：`last30days-skill` 今日新增 1,059 stars，`paper-orchestra` 新增 1,524 stars，`ECC` 新增 1,108 stars，`superpowers` 新增 822 stars；`SkillEvaluator` 和 `CLI-Anything` 则补齐技能评测及传统软件 Agent 化能力，表明生态正从“提示词调用”升级为可组合、可验证、可治理的工程体系。新兴技术栈方面，Rust 开始深入 Agent 与 AI 数据基础设施，如 `rig`、Codewhale、Milvus、Qdrant 和 LanceDB；同时，Agent Skills 正逐渐形成类似插件协议的开放标准。KAG、OpenViking、PageIndex 等非纯向量检索方案表明 RAG 正转向逻辑推理、图谱与上下文数据库。大模型侧关注点则由“更大模型”转向小型模型训练、本地推理、长上下文压缩、记忆和评测。这些变化与近期行业从模型参数竞赛转向 Agent 产品化、长上下文成本控制及企业可治理部署的方向一致。

---

## 4. 社区关注热点

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**：今日新增 **1,059 stars**，展示单一研究 Skill 如何横跨多个内容源并形成高完成度信息产品。
- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)**：Skills 数量快速增长后，兼容性、安全、质量门禁和语义去重将成为刚需，NVIDIA 的入场尤其值得跟踪。
- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)**：多智能体科研写作今日新增 **1,524 stars**，是多 Agent 协作从通用任务走向专业知识工作的代表。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：把代码库和文档转成可解释知识图谱，并与 Claude Code、Cursor、Codex、Gemini CLI 的 Skill 工作流结合，切中 Coding Agent 的上下文痛点。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)**：直接优化 Coding Agent 的 token 成本；在工具调用和上下文规模快速上升的背景下，压缩与可恢复性比单纯提示词技巧更具基础设施价值。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
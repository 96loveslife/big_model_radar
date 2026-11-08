# AI 开源趋势日报 2026-11-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-08 05:27 UTC

---

# AI 开源趋势日报｜2026-11-08

> 数据范围：GitHub 今日 Trending 与近 7 天活跃的 AI 主题仓库。  
> Stars 说明：`⭐总量（+今日新增）`；主题搜索仓库未提供可靠的当日增量，因此仅标注总量。

## 1. 今日速览

1. **Agent Skills 与安全审计成为今日最突出的爆发点**：Cloudflare 的 `security-audit-skill` 单日新增 **2,085 stars**，Google、Anthropic、Matt Pocock 等团队集中推出或维护 Skills 仓库，显示开源生态正从“通用 Agent 框架”转向可复用、可组合的能力包。
2. **上下文与 Token 效率成为基础设施竞争焦点**：`billion-context` 登榜，主打超长会话压缩；主题搜索中 `headroom`、`claude-mem`、`caveman` 分别从工具输出压缩、跨会话记忆和提示词压缩切入同一痛点。
3. **Agent 的外部行动能力持续增强**：`agent-browser`、Crawl4AI、Firecrawl、Agent-Reach 与 browser-use 均围绕浏览、搜索和网页数据采集形成完整工具链。
4. **RAG 正快速演化为 Agent 上下文基础设施**：Graphify、RAGFlow、OpenViking、Cognee、PageIndex 等项目分别从代码知识图谱、上下文数据库、持久记忆和无向量检索切入。
5. **模型部署继续向本地化和多模型统一接口演进**：Ollama 保持高关注度，Rust LLM 框架、统一 LLM 网关、端侧量化推理等项目显示应用层正在降低模型切换和部署门槛。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 简介 |
|---|---:|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐299,268 | 面向 Claude Code、Codex、Cursor 等工具的 Agent Harness 优化系统；总星标最高，聚焦技能、记忆、安全与开发流程。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐168,639 | 通用模型定义与推理框架，覆盖文本、视觉、音频和多模态模型，是 AI 应用开发的重要底层依赖。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐186,307 | 本地模型运行与分发工具，支持 Qwen、DeepSeek、GLM、MiniMax 等多种模型，是端侧部署的重要入口。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐559 | 提供 OpenAI/Anthropic 兼容接口的通用 LLM 网关，支持多模型协议转换和智能负载均衡。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐9,087 | Rust 编写模块化、可扩展的 LLM 应用框架，代表 AI 基础工具向高性能系统语言延伸。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,573 | 覆盖推理、编码、科学、长上下文和安全等任务的 LLM 评测平台，适合模型选型与持续评估。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐5,690 | 面向 Apple Silicon 教学与系统实践的轻量 LLM 推理项目，展示 vLLM 与 Qwen 技术栈下沉。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | ⭐0（+190） | 面向 AI Agent 的 Rust 浏览器自动化 CLI；今日登榜，反映 Agent 原生工具链需求上升。 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 简介 |
|---|---:|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐261,556 | 可成长、可个性化的开放式 Agent 项目，强调长期交互和能力扩展。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐199,572 | 为 AI Agent 抓取、搜索和结构化网页数据的平台型工具，是外部信息接入的重要基础设施。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐187,933 | 经典自主 Agent 平台，持续代表低代码 Agent 构建与工作流自动化的社区关注方向。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐120,280 | Python 浏览器 Agent 库，并提供隐身浏览器与托管 Agent API，直接聚焦网页操作自动化。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐110,052 | 为 Agent 提供 Twitter、Reddit、YouTube、GitHub 等多平台读取与搜索能力，降低数据获取门槛。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐80,976 | 覆盖职位发现、简历生成、面试准备和投递跟踪的本地职业 Agent，是垂直工作流的代表。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | ⭐0（+2,085） | 为编码 Agent 提供多阶段安全审计和可机器验证结果；今日增量居 AI 相关项目之首。 |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | ⭐0（+191） | 面向月级长会话的上下文压缩插件，主打小上下文窗口与约 5 倍 Token 节省；今日登榜。 |

### 📦 AI 应用

| 项目 | Stars | 简介 |
|---|---:|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐158,059 | 自托管、用户友好的多模型 AI 界面，是本地模型消费端成熟度最高的项目之一。 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐160,639 | 面向团队的 Agentic 工作流与 RAG 平台，支持模型、工具、知识库及云端或私有化部署。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐140,831 | 根据主题自动生成高清短视频，将 LLM 与自动化工作流组合成完整内容生产产品。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐121,224 | 多智能体金融交易框架，展示 Agent 在投研与决策辅助中的垂直化趋势。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐74,596 | 将文档或主题转换为原生 PowerPoint，支持图表、动画、旁白和自定义模板。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐67,843 | 集成多市场行情、实时新闻、LLM 分析和自动推送的股票研究应用。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐49,910 | 轻量级开源个人 Agent，强调低门槛安装和本地化个人助理体验。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐80,976 | 从岗位扫描到简历、面试和投递管理的一体化 Agent 产品，也是端侧办公自动化的代表。 |

### 🧠 大模型/训练

| 项目 | Stars | 简介 |
|---|---:|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐107,987 | 使用 PyTorch 从零实现类 ChatGPT LLM，是高热度模型原理与工程教学项目。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐201,390 | 通用机器学习与深度学习框架，仍是训练、推理及模型工程化的核心底层平台。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐105,244 | 主流深度学习框架，提供张量计算、GPU 加速及完整模型训练生态。 |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | ⭐92,061 | 12 周机器学习课程，以系统化教程推动传统 ML 基础知识普及。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | ⭐70,627 | 面向入门者的 AI 课程，覆盖生成式 AI 与现代 AI 应用基础。 |
| [labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations) | ⭐67,717 | 提供 Transformer、扩散模型、强化学习等论文的配套实现，适合研究与复现。 |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,416 | 易用的深度学习框架，连接模型原型、训练与生产部署。 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | ⭐292 | 能源基基础模型的训练与扩展开源代码，代表模型研究向基础架构探索延伸。 |

### 🔍 RAG/知识库

| 项目 | Stars | 简介 |
|---|---:|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐144,077 | 将代码、文档、SQL Schema 和 PDF 转为可查询知识图谱，并提供面向主流编码 Agent 的 Skill。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐93,745 | 从 RAG 引擎扩展为 Agent-native 数据库和上下文基础设施，强调文档解析与检索融合。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐52,842 | 面向文档处理与 LLM 应用的成熟平台，是 RAG 数据接入和检索编排的主流选择。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46,612 | 云原生、高性能向量数据库，为大规模向量近似检索提供基础设施。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | ⭐41,758 | 面向 Agent 的自演进上下文数据库，统一记忆、知识 RAG 与技能。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐40,172 | 使用文档结构和推理式检索实现 Vectorless RAG，减少对向量数据库的依赖。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐33,128 | 面向 Agent 长期记忆的开源 AI 平台，强调通过小模型完成持久记忆管理。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐13,779 | 面向本地设备的轻量 RAG，主打高存储效率、低延迟和隐私优先。 |

---

## 3. 趋势信号分析

今日最明显的爆发点是 **Agent Skills 与 Agent 安全工具**。`cloudflare/security-audit-skill` 单日新增 2,085 stars，Google、Anthropic 和个人开发者 Skills 仓库同步进入热榜，表明社区关注点已从单纯追求模型能力，转向将专业知识、审计流程和操作步骤封装成 Agent 可调用的标准化能力。Google 与 Anthropic 官方仓库登榜，意味着 Skills 正在形成类似插件生态的开放分发机制。

另一条主线是 **上下文经济学**。`billion-context` 首次进入今日榜单，强调百 K 上下文和长周期会话；`headroom`、`claude-mem`、`caveman` 则分别从输出压缩、跨会话记忆和提示词压缩切入。近期模型上下文窗口持续扩大，但成本、延迟与信息噪声同步上升，使 Token 压缩和长期记忆成为刚需。此外，Rust Agent CLI、无向量 RAG、自演进上下文数据库等新方向同步活跃，显示生态正从模型中心转向 Agent 系统工程。与近期多模型开放、工具调用和长上下文竞争相呼应，下一阶段的核心价值将更多来自可验证能力、低成本上下文和稳定执行。

---

## 4. 社区关注热点

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)**：单日新增 2,085 stars，为今日最突出的 Agent Skill 项目；安全审计与机器可读结果尤其适合企业编码场景。
- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)**：今日新增 191 stars；“超长会话 + 小窗口 + 高压缩率”直击 Agent 成本与上下文管理痛点。
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)**：今日新增 190 stars；Rust 实现的高性能浏览器自动化 CLI，是 Agent 操作网页的重要基础工具。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：将代码库和文档转成可解释知识图谱，并适配 Claude Code、Cursor、Codex、Gemini CLI，代表“代码知识图谱 + Skill”的新方向。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)**：可在进入模型前压缩工具输出、日志、文件和 RAG 片段；同时支持库、代理与 MCP server，商业落地门槛较低。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
# AI 开源趋势日报 2026-11-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-07 05:27 UTC

---

# AI 开源趋势日报

**日期：2026-11-07**  
**数据口径：GitHub 今日 Trending + 主题搜索结果；Trending 的“今日新增 stars”是当日活跃度指标，主题搜索数据反映近 7 天活跃项目。**

## 1. 今日速览

今日 AI 开源生态最显著的变化，是**面向编码智能体的 Skills、上下文管理与安全审计工具集中升温**：`google/skills`、`mattpocock/skills` 和 `cloudflare/security-audit-skill` 均进入 Trending，其中后两者今日新增超过 2,000 stars。NVIDIA 的 `auto-ontology` 以 **+2,015** 登榜，显示“语义层、知识图谱、确定性查询”正在成为提升 Agent 上下文质量的重要路线。与此同时，Agent 正在从聊天机器人转向可执行的生产力系统，覆盖编码、网页操作、知识管理、金融交易、求职和内容生成。RAG 热点则明显从单纯向量检索，转向**长期记忆、上下文压缩、无向量检索和 Agent 原生数据基础设施**。

---

## 2. 各维度热门项目

> Stars 数据按题面提供；Trending 项目标注今日新增，主题搜索项目未提供当日新增，因此仅列总量。

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 186,166 | 本地模型运行与管理工具，是 Ollama 生态的关键入口，持续降低本地部署门槛。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 168,612 | 覆盖文本、视觉、音频和多模态模型的通用模型定义与推理框架，生态成熟且仍是主流基础组件。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 149,143 | 面向 Agent 工程的通用开发平台，适合模型、工具、检索和工作流编排。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 160,586 | 覆盖 Agentic 工作流、RAG 与多模型部署的可视化平台，连接原型开发与生产部署。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,966 | 支持 Ollama 与 OpenAI API 的自托管 AI 前端，是本地模型应用化的重要交互层。 |
| [google/skills](https://github.com/google/skills) | 534（今日新增） | Google 产品和技术生态中的 Agent Skills 集合，首次登上今日热榜即获得 534 stars，反映 Skills 标准化需求升温。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 2,070（今日新增） | 面向工程师的 Agent Skills 集合，直接来自作者的 `.agents` 目录，强调可复用工作流。 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 298,680 | 面向 Claude Code、Codex、OpenCode 等工具的 Agent Harness 优化系统，覆盖技能、记忆、安全和研究流程。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 261,260 | 强调与用户共同成长的个人智能体，在高 stars 生态中具备较强话题性。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,930 | 自主智能体平台的代表项目，持续推动“任务委托给 Agent”的产品形态普及。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 109,744 | 为 Agent 提供 Twitter、Reddit、YouTube、GitHub、B站及小红书等网络信息访问能力。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 80,761 | 覆盖职位扫描、简历匹配、ATS 简历生成和面试准备的端到端求职 Agent。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 49,894 | 轻量级个人 Agent，强调本地运行与低门槛部署，适合个人自动化场景。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,826 | 支持计划、工具、技能、记忆和知识体系的自托管个人 AI 助手，并具备多 Agent 扩展能力。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | 2,548（今日新增） | 为编码 Agent 提供多阶段安全审计及机器可读、可独立验证的发现结果，今日关注度最高。 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 199,318 | 为 AI Agent 抓取、清洗和检索网页数据，是当前 Agent 数据接入基础设施中的热门项目。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 140,318 | 根据主题或关键词自动生成高清短视频，代表“LLM + 多媒体工作流”的成熟应用方向。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 121,048 | 通过多 Agent 协作完成金融交易分析，垂直场景化趋势明显。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 120,228 | 让 Agent 自主操作浏览器，并提供隐身浏览器与托管 API，是 GUI Agent 的代表方案。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 74,318 | 将文档或主题转换为原生 PowerPoint，支持图表、动画、模板和语音旁白。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,658 | 整合多市场行情、新闻、LLM 分析和自动推送，面向持续运行的投研工作流。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 37,799 | 个人交易 Agent，强调将自然语言交互与金融决策工作流结合。 |

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 201,367 | 通用机器学习框架仍是训练、推理和部署生态的重要底座。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 105,224 | 动态神经网络与 GPU 加速生态的核心框架，继续主导研究与工程实践。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 107,939 | 用 PyTorch 从零实现类 ChatGPT LLM，是系统学习模型原理的高关注教程项目。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 70,624 | 系统化 AI 入门课程，持续承担开发者教育和生态传播作用。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,571 | 面向多模型、100+ 数据集的 LLM 评测平台，重要性随模型竞争加剧而提升。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 9,082 | Rust 实现的模块化、可扩展 LLM 应用框架，体现 AI 基础设施向高性能语言栈扩展。 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | 284 | 能量基础模型的训练与扩展代码，代表生成模型基础研究的新分支。 |
| [FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos) | 207 | 面向 MoE 推理的零停顿预取与异步 DMA 优化，聚焦模型服务系统性能。 |

### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 144,062 | 汇总 100+ Agent、Skills 和 RAG 应用，集中反映 AI 应用落地案例的扩散速度。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 114,097 | 捕获并压缩 Agent 会话内容，在后续会话注入相关上下文，解决跨会话连续性问题。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 93,703 | 从 RAG 引擎发展为 Agent-native 数据库，将文档处理、检索与上下文基础设施结合。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 87,027 | 面向 Agent 的开源网页抓取、结构化提取与搜索基础设施，也可自托管部署。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 79,041 | 在工具输出、日志和 RAG 分块进入模型前进行压缩，直接优化 Agent token 成本。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 68,538 | 可嵌入生产应用的 Agent 长期记忆层，是“持久上下文”方向的代表项目。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 143,630 | 将代码、文档、SQL Schema 和 PDF 转为可查询知识图谱，以确定性 AST 解析替代单纯向量存储。 |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | 2,015（今日新增） | 在数据之上构建语义、图谱化推理层，以确定性查询改善上下文检索与 Agent 可解释性。 |

---

## 3. 趋势信号分析

今日热榜释放出三个信号。第一，**Agent Skills 正成为新的开源增长单元**：`google/skills`、`mattpocock/skills`、`cloudflare/security-audit-skill` 同时爆发，其中安全审计 Skill 单日新增 2,548 stars，说明社区关注点正从“谁的模型更强”转向“如何把模型变成稳定、可复用、可审计的工程能力”。第二，**语义层与知识图谱重新升温**：NVIDIA `auto-ontology` 以 2,015 stars 登榜，结合 `graphify`、`Graphify` 和 `auto-ontology`，可见“确定性检索、显式关系、可解释推理”正在成为向量检索之外的重要路线。第三，Rust、Go 和本地化栈持续扩张：`codewhale-hq/Codewhale`、Rust 版 `rig`、`zvec`、Ollama 及本地 RAG 项目共同表明，AI 工程正在向低成本部署、边缘运行和高性能工具链演进。这与近期开源模型、多模态模型和 Agent 产品快速迭代相互强化，但本榜单更多反映**应用工程和上下文基础设施**热潮，而非新的基础模型权重发布。

---

## 4. 社区关注热点

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)：AI 编程安全成为刚需。**  
  单日新增 2,548 stars 为今日最高；其多阶段审计和机器可读验证机制直指编码 Agent 的错误与安全问题。

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) 与 [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)：知识图谱与语义层复兴。**  
  两者都强调可解释、确定性的上下文构建，表明 RAG 正从“相似度召回”升级为结构化推理。

- **[mattpocock/skills](https://github.com/mattpocock/skills) 与 [google/skills](https://github.com/google/skills)：Skills 正成为 Agent 的标准化能力包。**  
  单日分别新增 2,070 和 534 stars；可移植、可复用的工作流封装可能成为 Agent 生态的新分发层。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)：上下文压缩从研究走向工程优化。**  
  在进入模型前压缩工具输出、日志与 RAG 分块，直接降低 token 成本，符合 Agent 长期运行和规模化部署需求。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use) 与 [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)：Agent 正在突破纯文本边界。**  
  前者把能力扩展到浏览器 GUI，后者打通多个社交与内容平台，工具调用正从封闭 API 走向开放互联网。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
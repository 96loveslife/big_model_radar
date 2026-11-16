# AI 开源趋势日报 2026-11-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-16 05:47 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-16**  
**数据范围：GitHub Trending + AI 主题搜索（7 天活跃）**  
> 口径说明：Trending 提供今日新增 stars；主题搜索项目主要提供累计 stars。累计 stars 较高不代表今日新增，因此以下明确区分两种指标。

---

## 1. 今日速览

1. **AI 编程工具正从“代码生成器”升级为完整交付平台**：今日热榜同时出现 Agent 交互协议、代码审查、浏览器调试、工作流编排和人机协作空间，说明开发者关注点已转向可审查、可治理的端到端交付。
2. **Agent Skills 首次形成集中爆发**：Stitch Skills、Claude BugHunter、Claude Trading Skills 与 NVIDIA SkillEvaluator 同日登榜，表明技能封装、质量评测和安全治理正在成为新的基础设施层。
3. **MCP 与浏览器自动化继续走强**：Chrome DevTools MCP 今日新增 **717 stars**，开发者正把真实工具环境接入编码 Agent，而不是仅依赖文本生成。
4. **RAG 正从“向量检索”转向“上下文基础设施”**：Graphify、Headroom、OpenViking、Cognee 等项目分别切入知识图谱、上下文压缩、Agent 记忆与技能统一管理。
5. **模型基础层热度相对温和**：底层张量库 ggml 今日仅新增 **43 stars**，今日注意力明显偏向 Agent 工程化，而非模型权重或训练框架本身。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 今日 **+717** | 通过 MCP 将 Chrome DevTools 暴露给编码 Agent，使其能够检查网页、定位运行时问题并执行调试闭环。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | 今日 **+247** | 为 Stitch MCP Server 提供符合 Agent Skills 标准的技能库，可供 Gemini CLI、Claude Code、Cursor 等编码 Agent 使用。 |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | 今日 **+122** | 提供多层级 Agent Skill 质量门禁、语义重叠检测、合成评估数据生成及线上行为评测。 |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | 今日 **+43** | 面向机器学习的轻量级张量计算库，是本地推理及模型运行时生态的重要底层组件。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 累计 **79,766** | 在工具输出、日志、文件及 RAG 片段进入模型前进行压缩，目标是降低编码 Agent 的 token 消耗。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 累计 **202,121** | 为 AI Agent 提供网页抓取、抽取和搜索能力，是 Agent 获取实时外部数据的重要基础设施。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 累计 **187,140** | 提供易用的本地模型运行与分发方式，持续支撑 Ollama 及多模型工具链的普及。 |
| [crawl4ai](https://github.com/unclecode/crawl4ai) | 累计 **87,409** | 为 AI Agent 提供开源网页抓取、结构化抽取和搜索能力，并支持自托管部署。 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | 今日 **+866** | 面向多个编码 Agent 的人类协作空间，支持规划、批注、代码评审及一键反馈。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 今日 **+691** | 将确定性审查流水线与 LLM Agent 结合，提供行级评论、多语言安全规则及 OpenAI/Anthropic 兼容接口。 |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | 今日 **+423** | 自托管编码 Agent 交付工作流，可编排 CodeBuddy、Codex、Claude Code，并设置人工审批门。 |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | 今日 **+355** | 定义 Agent 与前端应用之间的标准交互协议，目标是降低 Agent UI 的集成成本。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 累计 **263,693** | 可成长、可积累记忆与能力的个人 Agent，在主题搜索中拥有最高的累计 stars。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 累计 **50,113** | 轻量级个人 Agent，强调简洁部署和较低的运行门槛。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 累计 **47,947** | 集成任务规划、工具与技能调用、记忆、自进化及多模型能力的个人 Agent Harness。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 累计 **41,179** | 使用 Rust 编写的终端编码 Agent，支持多模型以及将复杂任务拆分给多个 Agent。 |

---

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 今日 **+98** | 面向漏洞发现和外部红队测试的 Claude Code 技能包，覆盖多类漏洞及企业身份、基础设施攻击矩阵。 |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | 今日 **+706** | 为股票投资与交易场景提供市场分析、技术图表、经济日历、筛选器和策略开发技能。 |
| [dream-num/univer](https://github.com/dream-num/univer) | 今日 **+988** | 面向人和 AI Agent 的 Office SDK，统一提供文档编辑、表格计算、协作与文件处理能力。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 累计 **77,261** | 将文档或主题转换为原生 PowerPoint 内容，包括形状、动画、图表、表格、音频旁白及模板支持。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 累计 **72,587** | LLM 驱动的多市场股票分析系统，融合行情、新闻、决策看板与自动推送。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 累计 **82,827** | 覆盖职位发现、简历匹配、ATS 简历生成、面试准备和申请跟踪的求职 Agent。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 累计 **121,140** | 面向浏览器操作的开源 Python Agent 库，并提供托管浏览器与 Agent API。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 累计 **143,862** | 通过大模型和自动化工作流，将主题或关键词转换为高清短视频。 |

---

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 累计 **169,037** | 支持文本、视觉、音频和多模态模型定义、训练与推理的主流模型框架。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 累计 **201,630** | 通用机器学习与深度学习框架，仍是训练、部署及研究生态的重要底座。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 累计 **105,549** | 提供动态神经网络和 GPU 加速能力，是深度学习研究与训练的主流基础设施。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 累计 **7,596** | 覆盖知识、推理、代码、科学、语言、长上下文和安全等能力的 LLM 评测平台。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 累计 **5,744** | 通过在 Apple Silicon 上构建 mini-vLLM 与 Qwen 推理系统，聚焦底层推理工程实践。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 累计 **320** | 基于 X-Bit 量化的端侧 LLM 推理方案，强调在资源受限设备上运行。 |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | 累计 **112** | 系统梳理大语言模型测试时扩展方法及其效果，聚焦推理阶段计算资源投入。 |
| [FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos) | 累计 **207** | 探索零停顿 MoE 推理，结合前瞻预测、异步 DMA 预取和注意力优化。 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 累计 **148,550** | 将代码、文档、SQL Schema、配置和 PDF 转为可解释边关系的知识图谱，强调本地确定性解析与无向量库方案。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 累计 **117,441** | 捕获 Agent 会话内容、压缩记忆，并在后续会话注入相关上下文，解决跨会话连续性问题。 |
| [RAGFlow](https://github.com/infiniflow/ragflow) | 累计 **94,218** | 从 RAG 引擎演进为 Agent-native 数据库和上下文基础设施。 |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | 累计 **58,705** | 可保持答案与文档同步的 no-code RAG 服务，兼容多种向量数据库。 |
| [cognee](https://github.com/topoteretes/cognee) | 累计 **33,340** | 面向 Agent 长期记忆的开源 AI 记忆平台，强调低资源模型与持久化上下文。 |
| [PageIndex](https://github.com/VectifyAI/PageIndex) | 累计 **40,448** | 面向无向量、推理式 RAG 的文档索引方法，强调基于结构化索引的检索。 |
| [OpenViking](https://github.com/volcengine/OpenViking) | 累计 **42,287** | 统一 Agent 记忆、知识 RAG 与技能的自我进化上下文数据库。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 累计 **12,694** | 为 Claude Code 提供代码搜索 MCP，将整个代码库转化为编码 Agent 可用的上下文。 |

---

## 3. 趋势信号分析

今日爆发性关注集中在**编码 Agent 的工程化外围**：代码审查、浏览器调试、交付编排、人机审批和跨前端交互协议同时进入热榜，显示社区关注点已从“能否生成代码”转向“能否可靠完成并验收软件任务”。**Agent Skills** 是最明显的新兴方向，技能包、技能评测和行业技能同榜出现，意味着可复用能力开始标准化，技能质量、语义冲突与安全边界将成为新问题。**MCP** 仍是重要连接层，Chrome DevTools MCP 获得今日 717 stars，说明 Agent 正加速接入真实开发环境。与近期基础模型能力持续升级相比，今日热度并未集中于训练框架或模型权重，反而更多围绕工具调用、上下文管理、可观测性与安全治理展开；这与新一代模型能力趋同、竞争焦点向 Agent 产品化迁移的行业趋势一致。

---

## 4. 社区关注热点

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)**：Agent 与前端交互开始走向协议化，标准化有望成为 Agent 应用生态扩张的关键基础设施。
- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)**：Agent Skill 数量快速增长后，评测、语义去重和行为回归测试将成为刚需。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**：将传统确定性扫描与 LLM 审查结合，代表更可信、可治理的 AI 代码审查路线。
- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)**：让编码 Agent 获得真实浏览器调试能力，是从静态代码生成走向端到端问题定位的重要信号。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：知识图谱式代码上下文和免向量检索路线，为大型代码库的 Agent 理解提供了不同于 Embedding RAG 的选择。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
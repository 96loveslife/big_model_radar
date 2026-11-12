# AI 开源趋势日报 2026-11-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-12 06:41 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-12**  
**数据来源：GitHub Trending + GitHub Search API**  
> Trending 中的新增 stars 为今日实时增量；主题搜索项目主要反映累计热度。本报告已排除与 AI/ML 无明确关系的通用工具、算法课程和非 AI 前端项目。

## 1. 今日速览

1. **智能体工程工具成为今日热榜主线**：`agent-skills`、`agent-browser`、`ha-mcp`、`improve` 同时进入 Trending，覆盖技能封装、浏览器操作、设备控制、代码审计等关键环节。  
2. **开发者工具开始从“模型调用”转向“任务交付”**：热门项目更强调可执行工作流、上下文管理和多模型兼容，而非单纯的 Prompt 或聊天界面。  
3. **RAG 正在向 Agent 上下文基础设施升级**：向量数据库、持久记忆、代码知识图谱、上下文压缩成为主题搜索中的高频赛道。  
4. **垂直智能体持续产品化**：股票分析、求职、PPT 生成、个人助理等场景显示 Agent 已进入日常业务流程。  
5. **安全与成本优化成为新焦点**：`codex-security` 登榜，Agent Harness、Token 压缩和工具输出治理也获得高关注。

---

## 2. 各维度热门项目

> 分类允许交叉，但每个项目优先放入最主要类别。

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 今日 **+787** | 面向生产环境的 AI 编码智能体技能库；今日热榜中较突出的 Agent 开发基础设施。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | 今日 **+708** | 为 AI Agent 提供浏览器自动化 CLI；网页操作能力正成为通用智能体的基础工具。 |
| [openai/codex-security](https://github.com/openai/codex-security) | 今日 **+52** | OpenAI 的安全审计 CLI 与 TypeScript SDK，可发现、验证并修复漏洞，代表 Agentic Coding 与安全融合。 |
| [shadcn/improve](https://github.com/shadcn/improve) | 今日 **+361** | 用高能力模型审计代码库并生成执行计划，再交给低成本模型实施，体现模型分层调度趋势。 |
| [ollama/ollama](https://github.com/ollama/ollama) | **186,730** | 广受采用的本地模型运行工具，覆盖多种开放模型，是本地 AI 应用和隐私部署的重要入口。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | **201,035** | 为 AI Agent 抓取、提取和搜索网页数据，是智能体接入实时互联网的重要数据层。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | **149,388** | 通用 Agent 工程平台，提供模型、工具、工作流与记忆编排能力，是应用开发的核心框架之一。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | **13,393** | Java 生态的 LLM 应用开发库，支持工具调用、MCP、Agent 与 RAG，面向企业 JVM 场景。 |

### 🤖 AI 智能体／工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [meta/astryx](https://github.com/meta/astryx) | 今日 **+2,776** | 可定制、面向 Agent 的设计系统；今日 AI 相关项目新增 stars 最高，显示“Agent 可用界面”正在成为独立基础设施。 |
| [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | 今日 **+645** | 通过 MCP 驱动 Home Assistant，把 Claude、ChatGPT 等助手接入智能家居，是具身设备控制方向的代表。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | **262,801** | 强调可成长、长期协作的个人智能体，是主题搜索中累计热度最高的 Agent 项目之一。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | **301,530** | 面向多种编码 Agent 的 Harness 优化系统，集成技能、记忆、安全和研究优先开发等能力。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | **120,780** | 面向 AI 浏览器智能体的 Python 库，兼顾本地自动化与托管浏览器能力。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | **82,056** | 自动扫描职位、匹配简历、生成申请材料并准备面试，把求职流程封装为端到端 Agent。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | **41,179** | Rust 编写的终端智能体，支持不同模型提供商，体现 CLI 原生 Agent 的技术趋势。 |
| [langgenius/dify](https://github.com/langgenius/dify) | **161,006** | 可视化构建 Agent 工作流和 RAG 管线，并支持多模型与私有化部署，是生产级 AI 应用平台。 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | **70,660**；今日 **+278** | LLM 驱动的多市场股票分析系统，整合行情、新闻、看板和自动推送；垂直 Agent 产品化的代表。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | **142,681** | 根据主题或关键词自动生成高清短视频，串联脚本、素材和自动化工作流。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | **76,065** | 将文档或主题转换为原生 PowerPoint，支持图表、动画、模板和语音旁白。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | **58,444** | 面向终身学习的个性化 AI 辅导系统，代表教育场景中的长期个性化 Agent。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | **38,075** | 个人交易智能体，将行情分析、策略辅助等能力封装为垂直应用。 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | **37,632** | 可自托管的个人 AI 助手，支持多聊天渠道和可扩展能力，强调本地部署与个人自动化。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | **158,441** | 自托管 AI 交互界面，支持 Ollama 和 OpenAI API，是本地模型使用与工作流入口。 |
| [JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | **48,436** | AI 低代码平台，整合知识库、工作流、MCP 与代码生成，面向企业应用快速交付。 |

### 🧠 大模型／训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | **168,888** | 覆盖文本、视觉、语音和多模态模型的核心模型框架，是开放模型生态的重要基础层。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | **108,266** | 使用 PyTorch 从零实现类 ChatGPT LLM，持续体现开发者学习底层模型原理的高需求。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | **105,447** | 通用深度学习与训练框架，支撑大模型训练、微调和推理生态。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | **201,571** | 成熟的通用机器学习框架，仍是模型训练、推理与端侧部署的重要基础设施。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | **7,586** | 面向多模型、多数据集的 LLM 评测平台，覆盖推理、编码、长上下文和安全能力。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | **5,722** | 在 Apple Silicon 上构建微型 vLLM 与 Qwen 推理系统，聚焦端侧和系统级学习。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | **63,317** | 提供 YOLO 系列视觉模型工具链，覆盖检测、分割、分类和跟踪，是多模态模型应用的重要组件。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | **319** | 通过 X-Bit 量化实现端侧 LLM 推理，代表低资源设备运行小模型的方向。 |

### 🔍 RAG／知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | **68,840** | 面向 Agent 的持久记忆层，解决跨会话上下文连续性问题，是知识库向长期记忆演进的代表。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | **33,260** | 面向 Agent 的开源记忆平台，强调以较小模型实现低成本长期记忆。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | **42,046** | 自演进上下文数据库，统一 Agent Memory、RAG 与 Skills，反映上下文基础设施融合趋势。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | **146,289** | 将代码、文档、配置和 PDF 转换为可查询知识图谱，无需向量库，突出结构化代码检索。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | **116,326** | 捕获、压缩并跨会话注入 Agent 上下文，支持 Claude Code、Codex、Gemini 等多种工具。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | **12,689** | 面向 Claude Code 的代码搜索 MCP，将整个代码库作为编码 Agent 的上下文。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | **94,060** | 从 RAG 引擎演进为 Agent 原生数据库与上下文基础设施，适合复杂文档检索场景。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | **79,407** | 在内容进入 LLM 前压缩工具输出、日志和 RAG 片段，直接优化 Agent 的上下文成本与延迟。 |

---

## 3. 趋势信号分析

今日热榜显示，**AI 工具的爆发性关注正集中到 Agent 的执行与控制层**：技能库、浏览器自动化、Home Assistant MCP、代码审计以及 Agent 友好设计系统同时升温，说明开发者关注点已从“调用哪个模型”转向“如何让模型稳定完成真实任务”。**Agent Harness、Skills、MCP 与上下文管理**构成新兴技术栈，并首次以组合方式占据榜单主体。与此同时，Rust CLI、TypeScript SDK 和多模型适配表明基础设施正在走向轻量、可嵌入和供应商中立。模型路由开始分层：高能力模型负责审计和规划，便宜模型执行任务；`codex-security` 则显示编码 Agent 正与漏洞发现、验证及自动修复融合。结合近期开放模型持续增多、本地部署需求上升以及 MCP 生态扩展的产业背景，预计下一轮竞争将围绕**上下文成本、工具可靠性、安全性和可审计性**展开。

---

## 4. 社区关注热点

- **[meta/astryx](https://github.com/meta/astryx)** — 今日新增 **2,776 stars**，Agent-ready 设计系统首次成为热榜核心，界面协议与 Agent 交互值得重点跟踪。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — 今日新增 **787 stars**，编码 Agent 技能开始标准化、可复用化，是 Agent Harness 的关键组成。
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** — 今日新增 **708 stars**，浏览器是通用 Agent 最重要的外部执行面，CLI 化方案尤其适合开发者和自动化场景。
- **[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)** — 今日新增 **645 stars**，MCP 正在从开发工具协议扩展到真实设备和物理环境控制。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 在 Agent 工具输出和 RAG 上下文普遍膨胀的背景下，压缩与治理可能成为生产部署的关键成本层。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
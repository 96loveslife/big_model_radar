# AI 开源趋势日报 2026-11-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-22 05:59 UTC

---

# AI 开源趋势日报｜2026-11-22

## 1. 今日速览

- **Agent Skills 正成为今日最明确的爆发点**：Claude-BugHunter、superpowers、Stitch Skills、last30days-skill 等项目集中登榜，热点正从单一编码助手扩展到安全研究、设计、调研和通用软件操作。
- **“让所有软件 Agent-Native”开始形成独立工具层**：CLI-Anything 今日新增 769 stars，Cursor 官方插件生态也同步升温，工具封装、插件标准化与跨平台接口成为基础设施竞争焦点。
- **知识基础设施持续升温**：Firecrawl 今日新增 1,006 stars，主题搜索中 RAG、Agent Memory、向量数据库和知识图谱项目也保持高热度。
- **端侧模型与轻量化应用并行升温**：minimind 展示“两小时训练 64M 模型”的低门槛路线，AutoClip 则体现 AI 视频自动化在内容生产端的落地热度。
- 整体看，AI 开源热点正从“更大模型”转向 **Agent 工程化、上下文管理、工具生态和低成本部署**。

---

## 2. 各维度热门项目

> stars 数据按题目提供的快照整理；Trending 项目提供“今日新增”，主题搜索项目未提供当日增量。

### 🔧 AI 基础工具

- **[obra/superpowers](https://github.com/obra/superpowers)**  
  **⭐ 0（今日 +883）**  
  面向软件开发 Agent 的技能框架与配套方法论，是今日 Agent Skills 标准化趋势的代表。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)**  
  **⭐ 0（今日 +769）**  
  将不同软件封装为 Agent 可调用的 CLI，体现“所有软件 Agent-Native”的工具互操作方向。

- **[cursor/plugins](https://github.com/cursor/plugins)**  
  **⭐ 0（今日 +260）**  
  Cursor 官方插件规范及插件集合，重要性在于推动编码 Agent 插件接口标准化。

- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)**  
  **⭐ 0（今日 +200）**  
  面向 AI 推理优化与部署的成熟工具包，在端侧和异构硬件部署需求上升时持续受到关注。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**  
  **⭐ 206,384（今日 +1,006）**  
  为 Agent 提供搜索、抓取和外部数据访问能力，是今日热度最高的 Agent 基础设施项目之一。

- **[huggingface/transformers](https://github.com/huggingface/transformers)**  
  **⭐ 169,338**  
  通用模型定义、训练与推理框架，支撑文本、视觉、音频及多模态模型，是 AI 开发者基础设施的核心入口。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)**  
  **⭐ 149,963**  
  通用 Agent 工程平台，持续承担模型、工具、检索和工作流编排层的核心角色。

---

### 🤖 AI 智能体／工作流

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**  
  **⭐ 0（今日 +1,803）**  
  面向漏洞挖掘和外部红队工作的 Claude Code 技能包，今日新增 stars 居 Trending 首位。

- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)**  
  **⭐ 0（今日 +450）**  
  面向 CI/CD 可靠性的开源 Agent，将 SRE 运维知识与自动化执行结合，体现垂直 Agent 加速落地。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**  
  **⭐ 265,243**  
  强调成长、持续适应和长期使用的个人 Agent，代表通用自主智能体方向。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)**  
  **⭐ 84,084**  
  覆盖职位筛选、简历生成、面试准备和投递跟踪的完整求职工作流，是垂直 Agent 产品化的代表。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**  
  **⭐ 73,649**  
  集成行情、新闻、决策看板与自动推送的 LLM 金融分析系统，展示多智能体在专业领域的应用。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)**  
  **⭐ 123,406**  
  通过多个角色化 Agent 协同完成金融交易分析，是多智能体工作流在高价值垂直领域的典型实现。

- **[trycua/cua](https://github.com/trycua/cua)**  
  **⭐ 32,759**  
  提供跨操作系统沙箱、驱动和计算机使用基准，关注 Computer Use Agent 的训练、评测与数据生成。

---

### 📦 AI 应用

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)**  
  **⭐ 0（今日 +683）**  
  将长视频自动切为短视频，并生成字幕、封面和发布文案，是内容再利用场景中热度突出的一体化应用。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)**  
  **⭐ 79,116**  
  将文档或主题转换为带原生图形、动画、图表及旁白的 PowerPoint，直击办公内容生产痛点。

- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)**  
  **⭐ 0（今日 +720）**  
  提供应用商店拒审排查、隐私与数据安全检查，并跟踪 EU AI Act 等监管期限，兼具开发工具与合规产品属性。

- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)**  
  **⭐ 0（今日 +720）**  
  还向 AI 编码 Agent 提供规则化合规检查能力，反映“领域规则库＋Agent 自动执行”正在成为应用形态。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)**  
  **⭐ 145,001**  
  根据主题或关键词自动生成高清短视频，显示生成式 AI 已深度进入营销和内容工业化生产。

- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)**  
  **⭐ 61,405**  
  强调长期、个性化教学的教育 Agent，是垂直智能体在知识学习场景中的代表。

- **[codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)**  
  **⭐ 41,196**  
  用 Rust 实现的终端编码 Agent，支持任意模型和任务拆分，兼具开发者效率工具与 Agent Harness 属性。

- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**  
  **⭐ 50,257**  
  轻量级个人 Agent，强调低门槛安装与部署，是个人智能助手小型化趋势的代表。

---

### 🧠 大模型／训练

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**  
  **⭐ 68,251（今日 +488）**  
  以约两小时从零训练 64M 大模型，显著降低模型训练学习与实验门槛，今日同时进入 Trending 和主题搜索。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)**  
  **⭐ 108,786**  
  使用 PyTorch 从零实现 ChatGPT 类 LLM，是系统化理解模型训练与推理机制的高热度教程项目。

- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)**  
  **⭐ 5,803**  
  面向 Apple Silicon 搭建 tiny vLLM 与 Qwen 推理系统，聚焦小模型和本地高性能推理。

- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)**  
  **⭐ 9,216**  
  使用 Rust 构建模块化、可扩展的 LLM 应用，反映 AI 应用基础设施向高性能系统语言迁移。

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)**  
  **⭐ 7,611**  
  覆盖知识、推理、代码、科学、长上下文及安全等任务的模型评测平台，是模型选型与能力比较的重要基础设施。

- **[thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL)**  
  **⭐ 1,890**  
  聚焦 Agentic RL 的资料汇编，代表强化学习从单次推理进一步延伸到智能体训练和优化方向。

- **[zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN)**  
  **⭐ 1,817**  
  由 AI 驱动多智能体完成假设生成、数据分析和报告写作，展示了研究型 Agent 自动化流程。

---

### 🔍 RAG／知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**  
  **⭐ 151,673**  
  将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，以确定性 AST 解析替代纯向量检索。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**  
  **⭐ 94,516**  
  从 RAG 引擎扩展为 Agent-native 数据库，聚焦文档处理、检索和上下文基础设施。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)**  
  **⭐ 87,646**  
  为 AI Agent 提供开源爬取、结构化提取和搜索能力，与 Firecrawl 一起构成 Agent 数据接入层。

- **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)**  
  **⭐ 42,577**  
  尝试统一 Agent Memory、知识 RAG 与 Skills，指向面向智能体的自演化上下文数据库。

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**  
  **⭐ 40,700**  
  以推理式、无向量依赖的文档索引实现 RAG，代表“结构化检索替代相似度检索”的新路线。

- **[topoteretes/cognee](https://github.com/topoteretes/cognee)**  
  **⭐ 33,452**  
  面向 Agent 持久记忆的开源 AI 平台，强调小模型驱动的长期知识与记忆管理。

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)**  
  **⭐ 13,808**  
  面向个人设备的私有 RAG 方案，主打显著降低存储成本并保持检索速度与准确度。

- **[OpenSPG/KAG](https://github.com/OpenSPG/KAG)**  
  **⭐ 9,183**  
  借助逻辑形式引导的检索增强改善专业领域知识问答，代表知识图谱与 RAG 融合方向。

---

## 3. 趋势信号分析

今日最突出的爆发性关注集中于 **Agent Skills 与软件操作层**。Claude-BugHunter 单日新增 1,803 stars，superpowers、CLI-Anything、last30days-skill 和 Stitch Skills 同时进入热榜，说明开发者正从“寻找更强模型”转向“把专业流程封装成可复用技能”，并让编码 Agent 操作更多外部软件。新兴技术栈方面，CLI-Anything 与 Cursor 插件目录代表基于 CLI、Skills、插件和 MCP 的开放工具协议正在成形；Graphify、PageIndex、KAG 则显示 RAG 正从向量相似度检索走向知识图谱、AST 和推理式索引。与此同时，minimind 展示小模型低门槛训练，AutoClip 和 MoneyPrinterTurbo 显示 AI 视频生产走向自动化。这些动向与近期行业对低成本模型、Agent 原生软件、Computer Use 和生成式内容商业化的关注高度一致。

---

## 4. 社区关注热点

- **[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**  
  今日新增 1,803 stars，位列榜首；值得关注的是其将漏洞类型、攻击矩阵和报告模式系统化为可执行技能。

- **[superpowers](https://github.com/obra/superpowers) 与 [CLI-Anything](https://github.com/HKUDS/CLI-Anything)**  
  两者共同指向 Agent Skills 与软件工具封装正在成为新的平台层，可能重塑编码 Agent 的扩展方式。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**  
  今日新增 1,006 stars；统一搜索、爬取与 500 多个数据源接入，是 Agent 获取实时外部上下文的关键基础设施。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**  
  以知识图谱和确定性 AST 解析替代纯向量 RAG，值得代码理解、企业知识库及高可解释性检索场景关注。

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**  
  两小时训练 64M 模型，将端侧模型实验门槛降至极低，适合用于教学、定制模型和边缘设备原型验证。

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)**  
  今日新增 683 stars，是少数完整覆盖剪辑、字幕、封面和发布文案的 AI 内容再利用产品，商业化路径清晰。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
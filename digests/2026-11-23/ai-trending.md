# AI 开源趋势日报 2026-11-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-23 06:52 UTC

---

# AI 开源趋势日报｜2026-11-23

> 数据口径：GitHub Trending 今日榜单与 7 天内活跃的 AI 主题搜索结果。Trending 项目标注“今日新增”，主题搜索项目仅展示累计 stars；已排除 NGINX、通用下载器等非 AI 项目。

## 1. 今日速览

1. **Agent Skills 与开发方法论成为今日最突出的爆发点**：`Claude-BugHunter`、`superpowers`、`stitch-skills`、`last30days-skill` 同时进入热榜，开发者关注点正从“直接使用模型”转向“如何让编码智能体更专业、更安全、更可复用”。
2. **智能体基础设施持续扩张**：知识接入、上下文压缩、记忆、检索和工具输出优化成为主线，`firecrawl`、`headroom`、`mem0`、`OpenViking` 分别覆盖数据获取、token 控制和持久化上下文。
3. **轻量模型与本地化仍具吸引力**：`minimind` 以“两小时训练 64M 模型”登上热榜并获得今日新增 473 stars，模型训练正进一步走向低成本、可复现和端侧部署。
4. **Agent-Native 软件接口开始标准化**：`CLI-Anything` 与 `cursor/plugins` 同时上榜，说明“让现有软件可被智能体操作”正在成为独立软件形态。
5. **AI 内容生产继续产品化**：`autoclip` 将长视频理解、字幕、封面和发布文案整合为桌面工作流，体现垂直应用从单次生成转向端到端内容流水线。

---

## 2. 各维度热门项目

> 一个项目可服务多个方向，以下优先按其最主要价值归类。

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**  
  **207,263 stars｜今日 +915**  
  为智能体提供搜索、抓取及 550+ 数据源访问能力；兼具热榜与主题搜索高热度，是 Agent 获取实时世界上下文的重要基础设施。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)**  
  **今日 +699**  
  将任意软件封装为可供智能体调用的 CLI，推动传统工具进入 Agent-Native 使用方式。

- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)**  
  **今日 +158**  
  面向 AI 推理优化与部署的工具包，适合边缘及异构硬件场景，是模型生产化部署链路中的基础组件。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)**  
  **149,988 stars**  
  通用 Agent 工程平台，提供模型、工具、检索和工作流编排能力，是应用开发的重要开发底座。

- **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)**  
  **13,436 stars**  
  Java 生态中的 LLM 应用框架，统一模型、向量库、工具调用和 MCP 接口，便于企业系统集成。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)**  
  **80,572 stars**  
  在工具输出、日志和 RAG 内容进入模型前进行压缩，直接优化智能体成本、延迟与上下文利用率。

- **[cursor/plugins](https://github.com/cursor/plugins)](https://github.com/cursor/plugins)  
  **今日 +294**  
  推出 Cursor 插件规范及官方插件，为编码智能体增加可复用、可分发的外部能力接口。

- **[meilisearch/meilisearch](https://github.com/meilisearch/meilisearch)**  
  **59,965 stars**  
  提供高性能搜索 API 与 AI 混合搜索能力，可作为 RAG 和企业搜索应用的检索层。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**  
  **今日 +1,716**  
  面向漏洞挖掘与外部红队测试的 Claude Code Skill 包，覆盖 24 类核心漏洞模式；为今日热榜 AI 项目中新增 stars 最高者。

- **[obra/superpowers](https://github.com/obra/superpowers)**  
  **今日 +788**  
  将技能框架与软件开发方法论结合，反映编码 Agent 正从“单次生成代码”演进为具有规范、流程和验证机制的工程系统。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)**  
  **309,158 stars**  
  面向 Claude Code、Codex、Cursor 等工具的 Agent Harness 优化系统，涵盖技能、记忆、安全和研究优先开发。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**  
  **265,505 stars**  
  强调可成长、可持续积累能力的通用个人智能体，是 Agent Harness 与长期交互方向的高关注项目。

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**  
  **今日 +668**  
  通过 Reddit、X、YouTube、HN 等渠道完成近期信息研究并生成有依据的综合摘要，代表“研究型 Skill”成为 Agent 新形态。

- **[codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)**  
  **41,198 stars**  
  用 Rust 实现的终端编码智能体，支持模型无关接入以及将一个任务拆分给多个 Agent 执行。

- **[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)**  
  **39,690 stars**  
  将 IDE 与编码 Agent 深度连接，代表终端 Agent 向 IDE 原生协作方向演进。

- **[copilotkit/copilotkit](https://github.com/CopilotKit/CopilotKit)**  
  **38,903 stars**  
  面向前端与生成式 UI 的 Agent 技术栈，并推动 AG-UI 协议，展示人机协作界面的标准化趋势。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)**  
  **今日 +641**  
  将长视频自动拆解为短视频，并生成字幕、封面及发布文案，是今日最明确的 AI 垂直内容生产应用。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)**  
  **84,259 stars**  
  覆盖职位搜索、简历匹配、求职信生成、面试准备和投递跟踪的本地化求职智能体。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)**  
  **79,391 stars**  
  将文档或主题转换为包含原生图形、动画、图表和旁白的 PowerPoint，突出办公文档自动化的实用价值。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**  
  **73,771 stars**  
  融合多市场行情、新闻和 LLM 分析生成决策看板，并支持定时运行与自动推送。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)**  
  **145,138 stars**  
  根据主题或关键词自动生成高清短视频，代表生成式 AI 与视频自动化工作流的成熟应用。

- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)**  
  **今日 +621**  
  面向移动应用发布的合规检查工具，覆盖隐私声明、拒审风险和 AI 法规期限；虽非纯 AI 产品，但直接面向 AI 编程智能体。

- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)**  
  **61,704 stars**  
  长期个性化辅导系统，将智能体应用于学习规划、解释和教学反馈等持续交互场景。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)**  
  **123,531 stars**  
  以多 Agent 协作完成金融交易分析，是垂直领域多智能体系统的代表。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**  
  **68,971 stars｜今日 +473**  
  以极低成本从零训练 64M 小型语言模型，兼具教学与实验价值，显示“小模型快速训练”仍具强传播力。

- **[huggingface/transformers](https://github.com/huggingface/transformers)**  
  **169,403 stars**  
  覆盖文本、视觉、音频和多模态模型的基础框架，是模型训练、推理与适配任务的核心依赖。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)**  
  **108,872 stars**  
  使用 PyTorch 从零实现类 ChatGPT 模型，适合系统学习 Transformer 与语言模型内部机制。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)**  
  **105,831 stars**  
  通用深度学习与模型训练基础框架，仍是 AI 工程生态的重要底座。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)**  
  **201,784 stars**  
  成熟的端到端机器学习框架，覆盖训练、推理及生产部署。

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)**  
  **7,628 stars**  
  面向多厂商模型和 100+ 数据集的评测平台，覆盖知识、推理、代码、长上下文与安全能力。

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)**  
  **353 stars**  
  聚焦基础模型及世界模型预训练的稳定性与可扩展性，反映训练稳定性正成为独立工程问题。

- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)**  
  **79,875 stars**  
  面向 AI 工程的学习与实践资源，强调从模型学习走向应用交付。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)**  
  **159,306 stars**  
  支持 Ollama 与 OpenAI API 的自托管 AI 前端，并提供模型、知识库和对话管理能力。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**  
  **152,169 stars**  
  将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，以确定性 AST 解析替代纯向量检索。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**  
  **94,565 stars**  
  从文档 RAG 引擎演进为 Agent-Native 上下文数据库，强调复杂文档处理与知识基础设施。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)**  
  **87,690 stars**  
  为 AI Agent 提供开源爬取、结构化抽取和搜索能力，是外部知识接入链路的常用组件。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**  
  **119,147 stars**  
  捕获、压缩并跨会话注入 Agent 上下文，针对长期任务中的记忆连续性问题。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)**  
  **69,360 stars**  
  面向生产环境的 Agent 记忆基础设施，为多轮和跨会话应用提供持久上下文。

- **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)**  
  **42,633 stars**  
  尝试统一 Agent 记忆、知识 RAG 与技能管理，反映上下文数据库正在向综合平台演进。

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**  
  **40,752 stars**  
  以基于推理的文档索引支持无向量库 RAG，代表向量检索之外的文档结构化路线。

---

## 3. 趋势信号分析

今日爆发性关注集中于 **Agent Skills、编码智能体方法论和软件 Agent 化**。Claude-BugHunter 单日新增 1,716 stars，显示安全审计、漏洞研究和可复用漏洞知识库具有强需求；superpowers、stitch-skills 与 last30days-skill 同期上榜，则说明“技能包”正成为 Agent 能力分发与标准化单位。CLI-Anything 和 cursor/plugins 首次呈现更清晰的新兴方向：传统软件不再只提供 GUI 或 API，而是提供面向 Agent 的命令与插件接口。与此同时，firecrawl、headroom 等基础设施进入热榜，说明社区关注点已从模型本身转向数据接入、上下文压缩和可靠执行。MiniMind 的走红则延续本地小模型热潮，但训练周期被压缩到小时级，反映低门槛训练与端侧部署价值上升。当前趋势与大模型能力持续增强、开源模型小型化和企业 Agent 工程化方向相吻合；竞争焦点正由“谁提供更强模型”转向“谁能以更低成本提供可验证、可持续积累的智能体工作流”。

---

## 4. 社区关注热点

- **[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**：今日新增 1,716 stars，为热榜 AI 项目最高；适合关注代码安全、漏洞研究及 Agent 红队工作流。

- **[Agent Skills 生态组合](https://github.com/obra/superpowers)**：结合 [superpowers](https://github.com/obra/superpowers)、[stitch-skills](https://github.com/google-labs-code/stitch-skills) 与 [last30days-skill](https://github.com/mvanhorn/last30days-skill)，可观察到技能封装、流程约束、跨平台兼容和专项研究正在形成独立产品形态。

- **[headroom](https://github.com/headroomlabs-ai/headroom)**：直接压缩工具输出和 RAG 块，是降低 Agent token 成本、延迟与上下文噪声的高杠杆基础设施。

- **[firecrawl](https://github.com/firecrawl/firecrawl)**：统一搜索、抓取和 550+ 数据源访问，已同时进入 Trending 与主题搜索高热度列表，是 Agent 实时知识接入的重要入口。

- **[OpenViking](https://github.com/volcengine/OpenViking) / [mem0](https://github.com/mem0ai/mem0)**：两者共同指向 Agent 持久记忆与上下文基础设施升温；值得关注其与 RAG、Skill 管理融合后的平台化趋势。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
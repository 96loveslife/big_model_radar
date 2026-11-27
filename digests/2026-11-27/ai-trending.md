# AI 开源趋势日报 2026-11-27

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-27 07:42 UTC

---

# AI 开源趋势日报｜2026-11-27

## 1. 今日速览

1. **Agent Skills 生态成为今日最强主线**：Claude-BugHunter、superpowers、CLI-Anything、stitch-skills 等项目同时登顶 Trending，关注点正从单一智能体框架转向可复用的技能包、工具封装和软件开发方法论。
2. **智能体基础设施持续升温**：Firecrawl 以每日新增 **1,046 stars** 位居 AI 项目前列，Graphify、headroom、mem0、OpenViking 等显示“数据获取—上下文压缩—长期记忆”正在成为独立基础设施层。
3. **本地化与轻量化模型受到关注**：MiniMind 登榜并单日新增 **702 stars**，主打两小时训练 64M 模型；OpenVINO 则代表传统 AI 推理优化工具持续获得关注。
4. **垂直 AI 应用继续扩张**：AutoClip 将本地 AI 视频剪辑、字幕、封面及 MCP 服务结合，显示“开源替代商业闭源工具”仍是高传播模式。
5. **RAG 正从“向量检索”升级为“智能体上下文基础设施”**：知识图谱化、持久记忆、上下文压缩和 agent-native 数据库成为共同主题。

> 数据口径：Trending 使用“今日新增 stars”；主题搜索反映近 7 天活跃项目及累计 stars。两类数据不可直接视为同一热度指标。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | **+746 今日** | 将任意软件封装为可供智能体调用的 CLI，强调“Agent-Native”软件接口，是今日 Agent 工具化趋势的代表。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 211,171 总量；**+1,046 今日** | 为智能体提供搜索、爬取和 550+ 数据源访问能力，是今日热榜中 AI 基础设施新增关注度最高的项目。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | **+176 今日** | OpenVINO 开源 AI 推理优化与部署工具链，在生成式模型之外继续受到边缘推理和工程部署关注。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 169,389 总量 | 支撑文本、视觉、音频和多模态模型定义、训练与推理的基础框架，仍是多模态项目的重要底座。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 150,059 总量 | 通用 Agent 工程与 LLM 应用平台，连接模型、工具、检索和复杂工作流。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 9,283 总量 | 使用 Rust 构建模块化、可扩展 LLM 应用，体现 Agent 基础设施向高性能系统语言迁移。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | 565 总量 | 提供多模型兼容网关、协议转换和负载均衡，面向统一模型接入与成本控制需求。 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | **+1,597 今日** | 为 Claude Code 提供漏洞挖掘和外部红队技能包，覆盖多类安全缺陷及身份、基础设施攻击矩阵，是今日新增 stars 最高的 AI 项目。 |
| [obra/superpowers](https://github.com/obra/superpowers) | **+854 今日** | 面向智能体的技能框架与软件开发方法论，表明社区开始系统化沉淀“智能体如何工作”，而非只关注模型能力。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | **+759 今日** | 让智能体跨 Reddit、X、YouTube、HN、Polymarket 和网页研究近 30 天信息，并生成有依据的综合摘要。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | **+309 今日** | 基于开放 Agent Skills 标准的技能库，为 Antigravity、Gemini CLI、Claude Code、Cursor 提供 Stitch MCP 能力。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 266,476 总量 | 可成长型个人智能体，代表向长期记忆、技能扩展和持续自我演化发展的 Agent Harness。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,218 总量 | Rust 编写的多环境 coding agent，支持多模型、多智能体、MCP、插件和操作系统沙箱。 |
| [trycua/cua](https://github.com/trycua/cua) | 33,047 总量 | 提供跨系统计算机操作驱动、沙箱环境以及训练评测数据基础设施，是 computer-use 工程化的重要项目。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 39,009 总量 | 面向 Agent 与生成式 UI 的前端栈及 AG-UI 协议，推动智能体能力直接进入 Web 和移动应用。 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | **+774 今日** | 本地优先的开源 AI 视频剪辑工具，可自动生成长视频短片、字幕、封面和发布文案，并内置 MCP Server。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 85,115 总量 | 覆盖职位发现、简历定制、ATS 优化和投递跟踪的本地求职智能体，是垂直 Agent 应用的代表。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 74,915 总量 | 结合多市场行情、实时新闻与 LLM 决策看板的股票分析系统，展示垂直领域多工具 Agent 的产品化趋势。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 145,911 总量 | 通过大模型和自动化工作流从主题生成高清短视频，是内容生产自动化的成熟开源项目。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 123,875 总量 | 面向金融研究的多智能体框架，通过角色化 Agent 协作完成分析与决策支持。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 39,028 总量 | 个人交易智能体，将自然语言交互、行情分析和交易辅助结合，代表“垂直 Agent 即产品”的路线。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | **+562 今日** | 提供应用商店拒审规则、隐私清单检查与 AI 法规跟踪，并可由编码智能体直接调用。 |

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 71,891 总量；**+702 今日** | 主打两小时从零训练 64M 小模型，以低成本、可复现实验降低 LLM 训练门槛，并同时登临 Trending。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 109,108 总量 | 用 PyTorch 逐步实现类 ChatGPT LLM，是理解模型训练与推理机制的高热度教程型项目。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 354 总量 | 提供可靠、最小化且可扩展的预训练与世界模型库，聚焦基础模型训练工程的稳定性。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,646 总量 | 支持主流开源与闭源模型、100+ 数据集的 LLM 评测平台，在模型快速迭代背景下重要性持续上升。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 105,802 总量 | 主流深度学习与张量计算框架，是模型训练、推理优化及研究实现的基础设施。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 201,871 总量 | 通用机器学习框架，覆盖训练、推理和生产部署，是成熟 AI 工程生态的重要底座。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 5,815 总量 | 面向 Apple Silicon 构建 tiny vLLM 与 Qwen，重点关注系统工程师视角下的本地推理实现。 |

### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 153,962 总量 | 将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，并以可解释边和无向量库方案受到关注。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,960 总量 | 在工具输出、日志、文件和 RAG 片段进入模型前进行压缩，直接降低编码智能体的 token 成本。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 69,525 总量 | 生产级智能体记忆层，聚焦跨会话持久上下文，是 Agent 长时运行的关键基础设施。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,898 总量 | 面向智能体的自演化上下文数据库，统一 Agent 记忆、知识 RAG 与技能管理。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 33,662 总量 | 开源 AI 记忆平台，结合小模型为智能体提供持久长期记忆，体现记忆层产品化趋势。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 94,805 总量 | 从文档 RAG 引擎演进为 agent-native 数据库和上下文基础设施。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 88,017 总量 | 为 AI 智能体提供可自托管的网页抓取、抽取和搜索能力，是 RAG 数据入口层的重要项目。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 13,827 总量 | 主打高存储效率、快速和完全私人的本地 RAG，契合个人设备与隐私优先的检索需求。 |

---

## 3. 趋势信号分析

今日爆发性关注主要集中在 **Agent Skills、CLI 工具化与智能体开发方法论**。Claude-BugHunter 单日新增 1,597 stars，superpowers、CLI-Anything、last30days-skill 和 stitch-skills 同时登榜，说明开发者正在从“寻找一个万能 Agent”转向“组合技能、连接软件并约束执行流程”。Rust 首次成为明显新兴技术栈：CLI-Anything、Codewhale、rig、cua 等以 Rust 构建 CLI、沙箱和高性能 Agent 基础设施，显示该语言正在切入对可靠性、并发和系统级工具调用要求更高的场景。

模型侧的 MiniMind 主打两小时训练 64M 模型，与小型化、本地化学习需求相呼应；OpenVINO 的持续热度则说明推理优化仍具有长期价值。与近期行业方向相呼应的是，Agent Skills 正逐渐形成类似插件规范的开放生态，而 Firecrawl、Graphify、headroom、mem0、OpenViking 分别补齐数据、索引、上下文压缩、记忆与技能管理，显示竞争焦点已从模型参数转向 **上下文与工具链效率**。

---

## 4. 社区关注热点

- **[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**：单日新增 **1,597 stars**，安全测试类技能包兼具明确场景与演示效果，值得安全工程和 Agent 开发者重点跟踪。
- **[Firecrawl](https://github.com/firecrawl/firecrawl)**：单日新增 **1,046 stars**；统一多数据源访问正成为研究型、自动化 Agent 的默认基础能力。
- **[Agent Skills 生态](https://github.com/google-labs-code/stitch-skills)**：跨 Claude Code、Cursor、Gemini CLI 等工具的开放标准正在形成，可能成为智能体扩展能力的重要互操作层。
- **[MiniMind](https://github.com/jingyaogong/minimind)**：以极低成本实现完整训练流程，适合用于教学、实验和端侧模型原型验证。
- **[上下文基础设施](https://github.com/Graphify-Labs/graphify)**：Graphify、headroom、mem0、OpenViking 同时受到关注，表明知识图谱、token 压缩和长期记忆正在成为独立于模型层的新赛道。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
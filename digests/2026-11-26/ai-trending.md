# AI 开源趋势日报 2026-11-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-26 07:43 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-26**  
**数据范围：GitHub Trending + GitHub AI 主题搜索（近 7 天活跃项目）**  
> 说明：Trending 中与 AI/ML 无明确关系的项目已略去；主题搜索数据按近 7 天活跃度筛选，但无法据此准确推断“今日新增 stars”。

---

## 1. 今日速览

1. **AI 编程正从“单模型调用”转向“Agent 工程化”**：Claude Code、Codex、Cursor 等编码智能体的 Skills、插件、MCP、记忆与安全能力，成为今日热榜最集中的方向。
2. **Agent Skills 与工具调用基础设施出现爆发式关注**：CLI-Anything、superpowers、stitch-skills、diagram-design 等项目同时登榜，说明生态竞争焦点正在转向可复用能力包和跨平台执行层。
3. **Agent 所需的实时知识基础设施继续升温**：Firecrawl、claude-mem、Graphify、OpenViking 等项目表明，网页接入、持久记忆、代码知识图谱和上下文数据库已成为刚需。
4. **应用层开始出现垂直化、自动化产品**：AI 视频剪辑、应用商店合规审查等工具已直接进入 Trending，AI Agent 正从通用助手走向可交付的专业工作流。
5. **小型模型与本地化仍具吸引力**：MiniMind 以“两小时训练 64M 模型”登上热榜并获得较高累计 stars，显示出低成本模型训练和教学型项目仍有很强传播力。

---

## 2. 各维度热门项目

> 分类按项目最主要定位划分；部分项目同时具备多个维度的属性。

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 总量未提供；今日 **+1,106** | 将各类软件封装为 Agent 可调用的 CLI，是今日热榜中最具代表性的“工具接入层”项目。 |
| [cursor/plugins](https://github.com/cursor/plugins) | 总量未提供；今日 **+416** | Cursor 官方插件规范与插件集合，代表编码 Agent 从模型能力走向可扩展运行时。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | 总量未提供；今日 **+355** | 面向 Stitch MCP 的 Agent Skills 库，并兼容 Gemini CLI、Claude Code、Cursor 等多种编码智能体。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 210,343；今日 **+1,135** | 为 Agent 提供网页搜索、抓取及 550+ 数据源访问能力，是智能体获取实时外部信息的重要基础层。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | 总量未提供；今日 **+191** | 面向 AI 推理优化与部署的开源工具包，体现端侧和生产部署仍是高价值方向。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 80,889 | 在工具输出、日志和 RAG 片段进入模型前进行压缩，直接解决编码 Agent 的 token 成本与上下文膨胀问题。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 310,878 | 面向 Claude Code、Codex、Cursor 等工具的 Agent harness 性能优化系统，覆盖技能、记忆、安全和研究流程。 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 总量未提供；今日 **+903** | 面向编码 Agent 的技能框架与软件开发方法论，今日热榜中 Agent 工作流方向的高关注项目。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 总量未提供；今日 **+1,652** | 面向漏洞挖掘和外部红队测试的 Claude Code 技能包，包含大量安全测试与报告模式。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 总量未提供；今日 **+945** | 让 Agent 跨 Reddit、X、YouTube、Hacker News 等来源研究近期议题并生成有依据的综合摘要。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 总量未提供；今日 **+348** | 面向 CI/CD 可靠性的开源 Agent，将软件工程运维任务转化为可自动执行的智能体工作流。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 266,184 | 可持续成长和扩展的个人 Agent，在主题搜索中保持最高量级的关注度。 |
| [CowAgent](https://github.com/zhayujie/CowAgent) | 48,083 | 支持任务规划、工具与技能调用、记忆、自进化和多智能体的个人 AI 助手。 |
| [Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,211 | Rust 编写的跨终端、Web 和桌面编码 Agent，支持多模型、MCP、插件、沙箱和会话审计。 |
| [oh-my-pi](https://github.com/can1357/oh-my-pi) | 39,923 | 将 IDE 深度接入编码 Agent 的工具项目，代表 Agent 与开发环境融合的演进方向。 |

---

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | 总量未提供；今日 **+880** | 将长视频自动剪成短视频，并生成字幕、封面和发布文案，是今日垂直 AI 应用中的代表。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | 总量未提供；今日 **+858** | 面向 App Store 与 Google Play 上架的合规检查工具，并提供供 AI 编码 Agent 使用的技能。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 总量未提供；今日 **+1,141** | 为多种编码 Agent 生成编辑级图表与 SVG/HTML 视觉内容，聚焦专业设计表达。 |
| [career-ops](https://github.com/career-ops-hq/career-ops) | 84,925 | 覆盖职位筛选、简历定制、面试准备和投递管理的开源求职 Agent。 |
| [ppt-master](https://github.com/hugohe3/ppt-master) | 80,318 | 将文档或主题转换成带原生形状、动画、图表和旁白的 PowerPoint。 |
| [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 74,641 | 融合多市场行情、实时新闻和 LLM 分析的股票智能系统。 |
| [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,948 | 面向个人投资研究与交易决策的 Agent，是金融垂直智能体的代表。 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 71,248；今日 **+826** | 以“两小时从零训练 64M 大模型”为核心卖点，兼具模型训练实践与教学传播属性。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 169,348 | 覆盖文本、视觉、音频和多模态模型的基础框架，仍是多模态模型开发的重要底层入口。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 109,068 | 通过 PyTorch 从零实现类 ChatGPT LLM，是模型原理学习与教学领域的标杆。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 105,770 | 支撑模型训练和推理的基础深度学习框架，是自建模型栈的核心依赖。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 201,841 | 通用机器学习与生产级模型部署框架，生态成熟且仍是许多企业 AI 栈的基础。 |
| [opencompass/opencompass](https://github.com/open-compass/opencompass) | 7,644 | 覆盖推理、编码、科学、长上下文和安全能力的 LLM 评测平台。 |
| [stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 354 | 面向基础模型与世界模型预训练的轻量、可扩展库。 |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 153,508 | 将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，并以 Skill 形式接入编码 Agent。 |
| [claude-mem](https://github.com/thedotmack/claude-mem) | 119,834 | 捕获、压缩并跨会话注入 Agent 上下文，解决编码智能体长期记忆问题。 |
| [RAGFlow](https://github.com/infiniflow/ragflow) | 94,740 | 从 RAG 引擎演进为 Agent-native 数据库与上下文基础设施。 |
| [crawl4ai](https://github.com/unclecode/crawl4ai) | 87,952 | 面向 AI Agent 的开源爬取、抽取和搜索基础设施，可自托管。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 69,488 | 面向生产环境的 Agent 记忆层，提供可持久化的上下文能力。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,823 | 将 Agent 记忆、知识 RAG 和 Skills 统一为可自演化上下文数据库。 |
| [PageIndex](https://github.com/VectifyAI/PageIndex) | 40,791 | 以推理式文档索引实现无向量数据库 RAG，代表“少向量、重结构化”的新路径。 |
| [Cognee](https://github.com/topoteretes/cognee) | 33,626 | 面向智能体的开源长期记忆平台，强调低成本和持久化知识组织。 |

---

## 3. 趋势信号分析

今日热榜最显著的信号，是**编码 Agent 的外围工程层正在爆发式增长**。Claude-BugHunter、superpowers、CLI-Anything、Cursor Plugins 和 Stitch Skills 同时进入榜单，关注点已从“哪个模型更强”转向“如何为 Agent 封装技能、工具、插件和执行环境”。同时，Firecrawl、claude-mem、Graphify 和 OpenViking 显示，**实时数据接入、持久记忆与上下文基础设施**正在成为 Agent 产品化的关键层。新兴方向包括面向 Agent 的 Skills 开放生态、跨软件 CLI 标准化，以及“知识图谱替代纯向量检索”的结构化 RAG。MiniMind 则代表另一条路线：通过极小参数量和低成本训练降低模型构建门槛。与近期大模型能力持续升级相呼应，下一阶段竞争将从模型参数规模转向**上下文质量、工具可达性、安全性与可审计执行能力**；应用层则由 autoclip 和合规工具显示，专业工作流正在成为最容易获得用户付费和社区传播的落点。

---

## 4. 社区关注热点

- **[CLI-Anything](https://github.com/HKUDS/CLI-Anything)：Agent-native 软件接口**  
  今日新增 1,106 stars。让现有软件快速成为 Agent 可操作、可组合的工具，是构建通用自动化生态的关键底层能力。

- **[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)：面向红队与安全审计的技能包**  
  今日新增 1,652 stars，为榜单最高增量。Agent Skills 正在从提示词集合演化为可复用、标准化、可审计的领域能力库。

- **[Firecrawl](https://github.com/firecrawl/firecrawl)：实时网页与多数据源接入**  
  今日新增 1,135 stars。搜索、爬取和结构化抽取已成为研究型 Agent 获取可信上下文的基础能力。

- **[claude-mem](https://github.com/thedotmack/claude-mem) 与 [Graphify](https://github.com/Graphify-Labs/graphify)：上下文和知识图谱**  
  一个解决跨会话记忆，一个解决代码库结构化理解，二者共同指向 Agent 长期工作的核心瓶颈。

- **[autoclip](https://github.com/zhouxiaoka/autoclip)：内容生产垂直应用**  
  今日新增 880 stars。它将长视频理解、剪辑、字幕和文案生成整合为完整工作流，体现 AI 应用从 Demo 走向可交付产品。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
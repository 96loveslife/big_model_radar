# AI 开源趋势日报 2026-11-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-14 05:47 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-14**

> 数据口径：Trending 榜单采用“今日新增 stars”；主题搜索结果采用仓库总 stars。由于部分仓库缺少历史快照，本报告不使用总 stars 推断当日增速。

## 1. 今日速览

- **AI 编程安全与代理工具链**占据今日热榜核心：代码安全扫描、Web 最佳实践知识库、代码审查 Agent、Chrome DevTools MCP 均同时上榜，显示开发 Agent 正从“生成代码”深入到“验证、修复与上下文获取”。
- **金融垂直应用明显升温**：`daily_stock_analysis` 同时进入 Trending 和 AI Agent 主题榜，另有 `claude-trading-skills`、`Vibe-Trading` 等项目受关注；Agent 已开始进入投研分析和交易辅助场景。
- **RAG/知识基础设施持续成熟**：主题搜索中既有传统向量数据库，也出现无向量检索、图谱化、Agent 记忆及上下文压缩等新路线，竞争焦点由“能否检索”转向“低成本、私有化和语义化”。
- **Agent Harness 成为新的基础设施层**：记忆、技能、任务拆解、上下文压缩和工具调用受到集中关注，开发者开始系统化优化 Agent 的运行效率与可靠性，而非只关注基础模型能力。
- **本地化与小型化并行发展**：本地 Agent、端侧 LLM、Rust/Java/Go 技术栈以及轻量推理项目持续出现，开源 AI 生态正明显降低部署门槛。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

1. **[openai/codex-security](https://github.com/openai/codex-security)**  
   - **Stars：总量未提供；今日 +751**  
   - OpenAI 推出的安全漏洞发现、验证与修复 CLI 及 TypeScript SDK；今日登榜并新增 751 stars，显示“AI 编程 + 自动安全审查”已成为刚需型工具。

2. **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)**  
   - **Stars：总量未提供；今日 +1,925**  
   - 为编码 Agent 提供最新 Web 开发实践的结构化知识源；今日增量居 AI 相关热榜首位，说明上下文质量和规则知识正成为 Agent 编码质量的关键。

3. **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)**  
   - **Stars：总量未提供；今日 +67**  
   - 通过 MCP 将 Chrome DevTools 能力开放给编码 Agent；代表浏览器工具从 GUI 自动化走向标准化、可组合的 Agent 基础设施。

4. **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**  
   - **Stars：总量未提供；今日 +215**  
   - 阿里开源的混合架构代码审查工具，结合确定性规则流水线与 LLM Agent，提供行级评论和多语言安全规则；适合大型工程场景落地。

5. **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)**  
   - **Stars：108,377；今日新增未提供**  
   - 以 PyTorch 从零实现类 ChatGPT LLM，是理解模型训练和推理机制的高热度教学项目，代表模型原理型学习需求持续强劲。

6. **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)**  
   - **Stars：9,142；今日新增未提供**  
   - 面向 Rust 的模块化、可扩展 LLM 应用框架；为不依赖 Python 的 Agent 和生产级 AI 服务提供新选择。

7. **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)**  
   - **Stars：13,402；今日新增未提供**  
   - JVM 原生 LLM 开发库，支持工具调用、MCP、Agent 与 RAG；体现 Java 企业生态正在快速吸收生成式 AI 开发模式。

8. **[open-compass/opencompass](https://github.com/open-compass/opencompass)**  
   - **Stars：7,596；今日新增未提供**  
   - 覆盖知识、推理、代码、科学、长上下文和安全性的多模型评测平台，可作为模型选型及回归评测基础设施。

---

### 🤖 AI 智能体/工作流

1. **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**  
   - **Stars：263,256；今日新增未提供**  
   - 强调可随用户持续成长的个人 Agent；总 stars 位居本批数据前列，反映“长期个性化 Agent”已成为开源社区的重要方向。

2. **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)**  
   - **Stars：111,618；今日新增未提供**  
   - 为 Agent 提供 Twitter、Reddit、YouTube、GitHub、B站及小红书等平台的统一读取与搜索能力，解决 Agent 的互联网信息获取问题。

3. **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)**  
   - **Stars：82,435；今日新增未提供**  
   - 覆盖职位发现、简历匹配、求职信生成、面试准备和投递跟踪的求职 Agent，支持本地及多种 AI CLI 环境。

4. **[codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)**  
   - **Stars：41,173；今日新增未提供**  
   - 使用 Rust 编写的终端编码 Agent，支持模型自由选择和多 Agent 并行任务拆分；兼顾性能、透明度与工程可控性。

5. **[affaan-m/ECC](https://github.com/affaan-m/ECC)**  
   - **Stars：302,542；今日新增未提供**  
   - 为 Claude Code、Codex、OpenCode、Cursor 等提供技能、记忆、安全和研究优先开发机制，是本批数据中 stars 最高的 Agent 工程化项目之一。

6. **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**  
   - **Stars：119,728；今日新增未提供**  
   - 通过技能与代理机制压缩编码 Agent 的 token 消耗；反映社区关注点正从“增加上下文”转向“提高每个 token 的有效性”。

7. **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)**  
   - **Stars：总量未提供；今日 +108**  
   - 面向多 Agent 协作的规划、决策、批注和反馈工作台；代表人类通过结构化反馈直接参与 Agent 执行闭环。

8. **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**  
   - **Stars：50,069；今日新增未提供**  
   - 轻量级开源个人 Agent，强调简单安装和本地运行；体现个人助理向小型化、易部署方向演进。

---

### 📦 AI 应用

1. **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**  
   - **Stars：71,821；今日 +256**  
   - LLM 驱动的多市场股票分析应用，整合行情、实时新闻、决策看板和自动推送；今日同时登榜，是金融 Agent 最直接的热度信号。

2. **[tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)**  
   - **Stars：总量未提供；今日 +69**  
   - 面向股票投资者和交易员的 Claude Code 技能集，覆盖市场分析、技术图表、财经日历、筛选器和策略开发。

3. **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)**  
   - **Stars：38,182；今日新增未提供**  
   - 个人交易 Agent 项目，将自然语言交互与市场分析工作流结合，属于金融垂直 Agent 的代表性开源实现。

4. **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**  
   - **Stars：71,821；今日 +256**  
   - 除股票分析外，还提供自动定时运行和消息推送能力；相比单次问答，更接近可持续运行的自动化投研产品。

5. **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)**  
   - **Stars：76,650；今日新增未提供**  
   - 将文档或主题转换为带原生图形、动画、图表、表格及旁白的 PowerPoint，是办公内容生产中的结构化 AI 应用。

6. **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)**  
   - **Stars：143,358；今日新增未提供**  
   - 根据主题或关键词自动生成高清短视频，覆盖从脚本到媒体生产的工作流；体现生成式 AI 在内容生产中的成熟应用。

7. **[Likely7/Veyra-NRVideo](https://github.com/Likely7/Veyra-NRVideo)**  
   - **Stars：总量未提供；今日 +256**  
   - 集成 AI 超分辨率、DLSS 与帧生成的视频播放器及采集增强工具；属于面向终端用户的生成式视觉应用。

8. **[open-webui/open-webui](https://github.com/open-webui/open-webui)**  
   - **Stars：158,600；今日新增未提供**  
   - 支持 Ollama 与 OpenAI API 的自托管 AI 工作台，提供统一模型交互、Agent 与生产力能力，是本地 AI 应用入口层代表。

---

### 🧠 大模型/训练

1. **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)**  
   - **Stars：201,592；今日新增未提供**  
   - 面向所有人的通用机器学习框架，是训练、部署及多模态模型生态的重要基础设施。

2. **[huggingface/transformers](https://github.com/huggingface/transformers)**  
   - **Stars：168,954；今日新增未提供**  
   - 提供文本、视觉、音频和多模态模型的训练与推理接口，是开源模型生态的核心适配层。

3. **[pytorch/pytorch](https://github.com/pytorch/pytorch)**  
   - **Stars：105,472；今日新增未提供**  
   - 以动态张量图和 GPU 加速见长的深度学习框架，仍是研究及模型工程化的重要底座。

4. **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)**  
   - **Stars：63,365；今日新增未提供**  
   - 提供 YOLO 系列目标检测、分割、分类、姿态估计和跟踪能力，计算机视觉模型工具链继续快速迭代。

5. **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)**  
   - **Stars：68,166；今日新增未提供**  
   - 经典 Python 机器学习工具箱，为传统模型、特征工程和 AI 工程实验提供稳定基础。

6. **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)**  
   - **Stars：5,736；今日新增未提供**  
   - 面向 Apple Silicon 系统工程师教授 LLM 推理系统，并实现简化版 vLLM 与 Qwen 部署，兼顾原理学习和端侧实践。

7. **[FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos)**  
   - **Stars：207；今日新增未提供**  
   - 探索 MoE 推理中的预测、异步预取和零停顿优化，代表模型服务从吞吐优化走向延迟与 I/O 协同优化。

8. **[testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)**  
   - **Stars：112；今日新增未提供**  
   - 系统梳理大模型测试时扩展方法；随着推理预算成为独立能力，测试时计算正成为值得关注的技术分支。

---

### 🔍 RAG/知识库

1. **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**  
   - **Stars：147,365；今日新增未提供**  
   - 将代码、文档、SQL Schema、配置及 PDF 转为可查询知识图谱，无需向量库；代表 RAG 从相似度检索走向结构化、可解释推理。

2. **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**  
   - **Stars：116,896；今日新增未提供**  
   - 捕获并压缩 Agent 会话，在后续任务中注入相关上下文，覆盖 Claude Code、Codex、Copilot 等多种 Agent 环境。

3. **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**  
   - **Stars：94,131；今日新增未提供**  
   - 从 RAG 引擎扩展为 Agent-native 数据库与上下文基础设施，强调复杂文档处理和生产级部署。

4. **[topoteretes/cognee](https://github.com/topoteretes/cognee)**  
   - **Stars：33,299；今日新增未提供**  
   - 面向 Agent 的开源记忆平台，以较小模型提供持久长期记忆，契合低成本个人 Agent 需求。

5. **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)**  
   - **Stars：42,215；今日新增未提供**  
   - 统一 Agent Memory、知识 RAG 与技能管理，提出自进化上下文数据库，反映上下文基础设施正在成为独立平台层。

6. **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**  
   - **Stars：40,410；今日新增未提供**  
   - 使用推理式、免向量 RAG 对文档建立结构化索引；主打可解释和低存储成本，是传统向量检索之外的新路线。

7. **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)**  
   - **Stars：12,691；今日新增未提供**  
   - 面向 Claude Code 的代码搜索 MCP，将整个代码库转化为编码 Agent 上下文，解决大型仓库检索和理解问题。

8. **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)**  
   - **Stars：13,797；今日新增未提供**  
   - 主打个人设备上的私有 RAG，并宣称在保持速度和准确性的同时显著节省存储空间。

---

## 3. 趋势信号分析

今日热榜最明显的爆发方向是**面向编码 Agent 的安全、审查与上下文工具**。`modern-web-guidance-src` 今日新增 1,925 stars，显著高于其他 AI 项目；`codex-security` 新增 751 stars，阿里 `open-code-review` 与 `chrome-devtools-mcp` 也同步登榜。这说明社区关注点已从单纯生成代码，转向规则注入、漏洞验证、自动修复和浏览器调试。另一个信号是**金融 Agent 首次形成多项目共振**：`daily_stock_analysis`、`claude-trading-skills` 同日进入热榜，主题榜还有 `Vibe-Trading`，表明垂直 Agent 正由通用助手走向可运行产品。新兴技术栈方面，Rust 编码 Agent、Java LLM 框架、Go 上下文引擎及无向量 RAG 同时活跃。MCP 正成为连接模型、工具和开发环境的标准接口；上下文压缩、长期记忆与结构化知识图谱则回应大模型使用成本上升及长任务稳定性不足的问题。

---

## 4. 社区关注热点

- **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)**：今日新增 1,925 stars，是热榜中最强的 AI 项目增量；适合研究如何以高质量规则知识提升编码 Agent。
- **[openai/codex-security](https://github.com/openai/codex-security)**：AI 自动安全审查进入主流开发者工具竞争区，可重点评估其漏洞验证、修复闭环及 SDK 集成能力。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**：将确定性检查与 LLM 审查结合，代表大型工程中更可控、可治理的代码审查路线。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**：今日新增 256 stars，并同时出现在 Trending 与 AI Agent 主题榜，是金融垂直 Agent 升温的代表。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：以知识图谱替代传统向量检索，值得关注其对代码库理解、关系推理和可解释 RAG 的影响。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** 与 **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**：共同指向 Agent Harness、技能系统与 token 优化，表明“优化 Agent 本身”正在成为独立赛道。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
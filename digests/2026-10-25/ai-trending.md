# AI 开源趋势日报 2026-10-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-10-25 04:05 UTC

---

# AI 开源趋势日报｜2026-10-25

> 数据口径：Trending 使用“今日新增 stars”；主题搜索为近 7 天活跃项目，主要展示累计 stars。累计 stars 不等同于当日增长。星标数量及热度存在异常或可能经过批量刷取的迹象，仅作为社区声量参考。

## 1. 今日速览

- 今日 Trending 中，AI 项目占据 **8/10**，其中 **8 个带新增 stars 的条目全部与 AI Agent 相关**，Agent 已成为开源生态最明确的流量中心。
- 爆发点不再局限于通用编码助手，而是转向 Agent 的**安全审计、运行时隔离、云服务接入、设计质量控制与轻量化部署**。
- [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) 以 **+896** 位居 AI 项目新增 stars 首位，显示“自主 Agent 的安全、隐私运行时”正在快速升温。
- Agent 周边基础设施持续扩张：技能包、MCP、持久记忆、RAG、上下文压缩和浏览器接入形成完整技术链条。
- 主题搜索中的高星项目仍以成熟框架和基础设施为主，说明社区关注正从“能否做出 Agent”转向“如何让 Agent 更可靠、更省成本并可生产部署”。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

1. **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**  
   **⭐ 0｜今日 +44**  
   Google 的开源终端 AI Agent，将 Gemini 能力直接引入 CLI；今日登榜体现大厂终端级 Agent 工具持续获得关注。

2. **[ollama/ollama](https://github.com/ollama/ollama)**  
   **⭐ 184,672｜近期活跃**  
   统一的本地模型运行与分发工具，覆盖 Qwen、DeepSeek、Gemma、gpt-oss 等模型，是自托管 AI 应用的重要底座。

3. **[huggingface/transformers](https://github.com/huggingface/transformers)**  
   **⭐ 168,109｜近期活跃**  
   覆盖文本、视觉、音频和多模态模型的标准框架，依旧是模型加载、微调和推理生态的核心入口。

4. **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)**  
   **⭐ 148,400｜近期活跃**  
   通用 Agent 工程与 LLM 应用开发平台，工具调用、链式工作流及模型集成生态成熟。

5. **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)**  
   **⭐ 43,846｜近期活跃**  
   面向有状态、可恢复工作流的 Agent 编排框架，适合复杂任务流与生产级可靠性需求。

6. **[open-compass/opencompass](https://github.com/open-compass/opencompass)**  
   **⭐ 7,542｜近期活跃**  
   面向多模型、多数据集的 LLM 评测平台，覆盖推理、编程、长上下文与安全等能力。

7. **[aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws)**  
   **⭐ 0｜今日 +13**  
   AWS 官方提供的 MCP Server、Skills 与插件集合，帮助编码 Agent 更安全、规范地集成 AWS。

---

### 🤖 AI 智能体 / 工作流

1. **[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)**  
   **⭐ 0｜今日 +896**  
   面向自主 Agent 的安全、私有运行时；今日新增 stars 居 AI 项目首位，反映隔离执行和隐私保护需求升温。

2. **[makecindy/cindy](https://github.com/makecindy/cindy)**  
   **⭐ 0｜今日 +477**  
   宣称“开箱即用”的开源通用 AI Agent，可直接执行用户任务；显示低配置、全托管式 Agent 产品仍有很强传播力。

3. **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)**  
   **⭐ 0｜今日 +2,264**  
   为编码 Agent 提供多阶段安全审计，并生成可机器验证的发现；是今日 AI 项目中新增 stars 最高者。

4. **[affaan-m/ECC](https://github.com/affaan-m/ECC)**  
   **⭐ 288,184｜近期活跃**  
   面向 Claude Code、Codex、Cursor 等工具的 Agent Harness 优化系统，覆盖技能、记忆、安全与研究型开发流程。

5. **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**  
   **⭐ 256,850｜近期活跃**  
   强调可持续成长和个性化能力的开源 Agent，反映自学习、记忆与用户适配成为产品卖点。

6. **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**  
   **⭐ 49,332｜近期活跃**  
   轻量、自托管的个人 Agent 框架，整合 WebUI、工具、记忆、MCP、多 Agent 工作流与自动化。

7. **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)**  
   **⭐ 47,564｜近期活跃**  
   具备任务规划、工具与技能调用、记忆和知识自演化能力的个人 Agent Harness。

8. **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)**  
   **⭐ 35,955｜近期活跃**  
   强调复杂软件工程任务可靠执行的 Go 编码 Agent，值得关注其工具调用、规划和任务完成机制。

---

### 📦 AI 应用

1. **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**  
   **⭐ 195,056｜近期活跃**  
   为 AI Agent 提供网页抓取和结构化数据接入能力，是外部信息获取和检索管线的重要基础设施。

2. **[browser-use/browser-use](https://github.com/browser-use/browser-use)**  
   **⭐ 119,069｜近期活跃**  
   面向 AI 浏览器 Agent 的 Python 库，并提供隐身浏览器和托管 Agent API，Web 自动化需求持续强劲。

3. **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)**  
   **⭐ 86,198｜近期活跃**  
   将任意网站转换为适合 LLM 的清洁 Markdown，在自托管网页数据采集场景中具有较强实用性。

4. **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)**  
   **⭐ 77,048｜近期活跃**  
   开源求职 Agent，可扫描职位、匹配简历、生成申请材料并跟踪流程，是垂直 Agent 产品化的代表。

5. **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)**  
   **⭐ 67,538｜近期活跃**  
   将文档或主题转换为原生 PowerPoint，包括形状、动画、图表和模板复用，体现办公文档 Agent 的成熟度。

6. **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)**  
   **⭐ 52,957｜近期活跃**  
   集成多模型、智能对话与自主 Agent 的桌面生产力客户端，适合多模型统一入口场景。

7. **[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)**  
   **⭐ 134,895｜近期活跃**  
   根据主题或关键词自动生成高清短视频，展示 AI 内容生产向端到端工作流演进。

---

### 🧠 大模型 / 训练

1. **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)**  
   **⭐ 187,731｜近期活跃**  
   面向大众的自主 Agent 平台，目标是降低 Agent 构建和部署门槛，仍是开源自主智能体的重要代表。

2. **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)**  
   **⭐ 201,231｜近期活跃**  
   通用机器学习框架，覆盖训练、推理及多模态模型，是成熟模型工程体系的重要基础设施。

3. **[pytorch/pytorch](https://github.com/pytorch/pytorch)**  
   **⭐ 105,049｜近期活跃**  
   主流深度学习与生成式模型训练框架，在研究生态、硬件适配和工具链方面保持优势。

4. **[keras-team/keras](https://github.com/keras-team/keras)**  
   **⭐ 64,386｜近期活跃**  
   面向开发者的高层深度学习框架，持续承载模型实验与生产部署需求。

5. **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)**  
   **⭐ 67,898｜近期活跃**  
   经典 Python 机器学习工具箱，是传统机器学习、特征工程和生产推理的重要基础。

6. **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)**  
   **⭐ 62,815｜近期活跃**  
   集成 YOLO 系列目标检测、分割、分类、姿态和跟踪能力，持续服务视觉 AI 应用开发。

7. **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)**  
   **⭐ 4,788｜近期活跃**  
   面向 Apple Silicon 工程师的迷你 LLM 推理系统教程，以实现 tiny vLLM 和 Qwen 为目标，兼具学习与实践价值。

8. **[open-compass/opencompass](https://github.com/open-compass/opencompass)**  
   **⭐ 7,542｜近期活跃**  
   提供跨模型、跨任务的系统评测能力，是模型选型、能力对齐和安全评估的重要工具。

---

### 🔍 RAG / 知识库

1. **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**  
   **⭐ 102,862｜近期活跃**  
   捕获并压缩 Agent 会话上下文，在后续任务中注入相关记忆；兼容 Claude Code、Codex、Gemini CLI 等多种 Agent。

2. **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**  
   **⭐ 92,815｜近期活跃**  
   将文档 RAG 与 Agent 能力结合的引擎，定位为面向 LLM 的企业级上下文层。

3. **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**  
   **⭐ 134,541｜近期活跃**  
   将代码、文档、SQL Schema、配置及 PDF 转换为可查询知识图谱，强调确定性 AST 解析和可解释关系。

4. **[mem0ai/mem0](https://github.com/mem0ai/mem0)**  
   **⭐ 67,757｜近期活跃**  
   面向 Agent 和 AI 应用的持久记忆基础设施，解决跨会话上下文连续性问题。

5. **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)**  
   **⭐ 40,757｜近期活跃**  
   自演化上下文数据库，统一 Agent 记忆、知识 RAG 与技能，反映上下文基础设施正在向统一平台演进。

6. **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**  
   **⭐ 39,642｜近期活跃**  
   探索不依赖向量库的推理式文档索引，为 RAG 的可解释性和结构化检索提供新路线。

7. **[run-llama/llama_index](https://github.com/run-llama/llama_index)**  
   **⭐ 52,647｜近期活跃**  
   面向 AI 的文档处理与检索平台，是 RAG、数据连接和 Agent 知识访问的重要基础设施。

8. **[qdrant/qdrant](https://github.com/qdrant/qdrant)**  
   **⭐ 35,232｜近期活跃**  
   高性能向量数据库与检索引擎，兼顾云原生部署和 AI 搜索场景。

---

## 3. 趋势信号分析

今日热榜最显著的信号，是 **Agent 周边工具获得爆发性关注**。[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 以 **+2,264** 领跑，说明社区已从“使用编码 Agent”转向“治理编码 Agent”；[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) 的 **+896** 则指向自主 Agent 的隔离运行、权限控制与私有部署。Rust 成为新项目的重要技术栈，特别适合构建低权限、强隔离的 Agent 运行时。

另一条新方向是 **Agent Skills 与 Harness 层标准化**。[hallmark](https://github.com/Nutlope/hallmark) 和 [impeccable](https://github.com/pbakaus/impeccable) 分别治理“AI 味设计”和编码 Agent 的设计语言，[claude-howto](https://github.com/luongnv89/claude-howto) 则提供可视化 Claude Code 教程；这表明竞争焦点正从模型本身转向技能、流程和质量控制。与此同时，[gemini-cli](https://github.com/google-gemini/gemini-cli) 与 [cindy](https://github.com/makecindy/cindy) 表明终端级、开箱即用 Agent 仍是行业主线。整体与近期行业方向一致：编码 Agent 普及后，安全、上下文管理、成本优化和可验证执行成为下一阶段基础设施刚需。

---

## 4. 社区关注热点

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)**：今日新增 **+2,264**，安全审计、可机器验证结果和 Agent 治理可能成为编码助手生态的新标准层。
- **[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)**：今日新增 **+896**，安全、私有、可隔离的 Agent Runtime 是值得重点布局的新方向。
- **[AWS Agent Toolkit](https://github.com/aws/agent-toolkit-for-aws)**：官方 MCP、Skills 与插件会推动企业 Agent 向云资源操作标准化演进。
- **[Graphify](https://github.com/Graphify-Labs/graphify)**：以可解释知识图谱替代纯向量检索，为代码库理解和复杂 RAG 提供差异化路线。
- **[Headroom](https://github.com/headroomlabs-ai/headroom)**：压缩工具输出、日志及 RAG 上下文，直接降低编码 Agent 的 Token 成本；可关注其代理层、MCP Server 和 JSON 优化能力。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
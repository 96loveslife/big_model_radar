# AI 开源趋势日报 2026-11-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-15 05:47 UTC

---

# AI 开源趋势日报

**数据日期：2026-11-15**  
**口径说明：** Trending stars 为今日新增，主题搜索数据反映近 7 天活跃项目的累计 stars；累计 stars 不等同于当日增长。分类按项目最主要用途划分，同一项目仅展示一次。

## 1. 今日速览

1. **Coding Agent 周边工具成为今日主线。** 今日热榜中至少 7 个项目直接服务于编码智能体，覆盖任务规划、代码审查、浏览器调试、上下文注入、Token 优化与交付编排。
2. **Agent 从“单体 CLI”走向可治理的工作流。** Plannotator、open-code-review、LoopForge 分别切入人机协作、自动化审查和审批门控，显示 Agent 工程正在补齐工程治理层。
3. **模型上下文与效率优化持续升温。** caveman 主打减少 65% Token，TensorFold 聚焦跨 Metal、CUDA、Vulkan 的推理引擎，说明社区关注点已从“调用模型”深入到成本与性能。
4. **本地化与开放生态保持强势。** QwenCode、Ollama、Transformers、RAGFlow、Milvus 等基础设施项目具备庞大存量，显示模型部署、Agent 编排和检索基础设施仍是生态基本盘。
5. **AG-UI 等交互协议开始进入热榜。** AG-UI 登榜虽然当日新增仅 9 Stars，但协议层项目的出现意味着 Agent 应用前端集成正逐渐标准化。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具：框架、SDK、推理引擎、开发工具、CLI

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)**  
  **664 Stars（今日新增）**  
  面向 Coding Agent 的 Chrome DevTools MCP 服务，让智能体能够直接检查网页、定位前端问题并辅助调试。

- **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)**  
  **1,231 Stars（今日新增）**  
  将最新 Web 最佳实践提供给编码智能体，属于“给 Agent 注入权威开发规范”的上下文基础设施。

- **[ashhart/TensorFold](https://github.com/ashhart/TensorFold)**  
  **37 Stars（今日新增）**  
  面向 Metal、CUDA 和 Vulkan 的 LLM 推理引擎，采用 Zig 实现，跨异构硬件统一是今日值得关注的工程方向。

- **[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)**  
  **64 Stars（今日新增）**  
  Qwen 推出的终端开源编码智能体，延续开源模型与开发者工具一体化路线。

- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)**  
  **9,148 Stars**  
  基于 Rust 的模块化 LLM 应用框架，强调可扩展组合与高性能，适合观察 Rust 在 AI 应用基础设施中的升温。

- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)**  
  **12,694 Stars**  
  面向 Claude Code 的代码搜索 MCP，将整个代码库转化为智能体上下文，代表“代码库语义化上下文”工具的发展方向。

- **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)**  
  **13,406 Stars**  
  Java 生态的 LLM 应用开发库，统一支持模型供应商、向量存储、工具调用、MCP、Agent 与 RAG。

- **[ollama/ollama](https://github.com/ollama/ollama)**  
  **186,996 Stars**  
  本地模型运行与分发工具，支持 Qwen、Gemma、DeepSeek、gpt-oss 等多种模型，是本地 AI 开源生态的重要入口。

---

### 🤖 AI 智能体/工作流：Agent 框架、自动化、多智能体

- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)**  
  **408 Stars（今日新增）**  
  面向智能体团队的任务规划、代码批注、评审和反馈工作台，一键将人工反馈回传 Agent，体现 Human-in-the-loop 协作需求。

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**  
  **893 Stars（今日新增）**  
  阿里开源的混合架构代码审查工具，将确定性流水线与 LLM Agent 结合，支持行级评论、规则检查及 OpenAI、Anthropic 兼容接口。

- **[Tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)**  
  **553 Stars（今日新增）**  
  为 Claude Code 提供股票分析、技术图表、经济日历、选股和策略开发能力，是“领域 Skill 包”向金融垂直场景落地的代表。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**  
  **120,162 Stars；今日新增 227**  
  面向编码智能体的 Skill 与代理层，通过压缩表达方式减少约 65% Token，直接回应 Agent 使用成本与上下文膨胀问题。

- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)**  
  **33 Stars（今日新增）**  
  自托管编码智能体交付工作流，可编排 CodeBuddy、Codex 和 Claude Code，并加入人工审批门禁。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)**  
  **303,264 Stars**  
  面向 Claude Code、Codex、OpenCode、Cursor 等工具的 Agent Harness 优化系统，覆盖技能、记忆、安全与研究优先开发流程。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**  
  **263,447 Stars**  
  强调可成长、长期积累能力的个人智能体，反映持续记忆、个性化与自主进化仍是高关注方向。

- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**  
  **50,089 Stars**  
  轻量级开源个人智能体，在部署门槛、工具调用和可扩展性之间寻求平衡。

---

### 📦 AI 应用：具体应用产品、垂直场景解决方案

- **[dream-num/univer](https://github.com/dream-num/univer)**  
  **495 Stars（今日新增）**  
  面向 AI Office 的 SDK，整合文档编辑、表格计算、协作与文件处理，突出“智能体可操作结构化办公内容”的新方向。

- **[Likely7/Veyra-NRVideo](https://github.com/Likely7/Veyra-NRVideo)**  
  **420 Stars（今日新增）**  
  结合 AI 超分辨率、DLSS 与帧生成能力的视频播放及采集增强工具，是生成式/神经增强能力进入消费级软件的代表。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)**  
  **82,620 Stars**  
  面向求职流程的本地 AI Agent，可搜索职位、按简历评分、生成 ATS 简历和面试材料，垂直价值明确。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**  
  **72,296 Stars**  
  由 LLM 驱动的多市场股票分析系统，整合行情、新闻、决策看板和自动推送。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)**  
  **76,900 Stars**  
  将文档或主题转换为带原生形状、动画、图表、表格及旁白的 PowerPoint，是办公生成从文本输出走向原生文件编辑的代表。

- **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)**  
  **75,432 Stars**  
  面向分析师、量化研究与 AI Agent 的开放数据平台，将金融数据访问封装成可组合能力。

- **[acon96/home-llm](https://github.com/acon96/home-llm)**  
  **1,497 Stars**  
  通过本地 LLM 控制智能家居，代表私有化部署与实体环境 Agent 的垂直落地。

---

### 🧠 大模型/训练：模型权重、训练框架、微调与评测

- **[huggingface/transformers](https://github.com/huggingface/transformers)**  
  **168,996 Stars**  
  覆盖文本、视觉、音频和多模态模型定义与训练的基础框架，仍是开源模型生态最重要的通用底座之一。

- **[langgenius/dify](https://github.com/langgenius/dify)**  
  **161,177 Stars**  
  支持模型接入、Agent 工作流与 RAG 流水线的 AI 应用平台，强调从原型到生产部署的一体化能力。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)**  
  **201,620 Stars**  
  通用机器学习与深度学习框架，存量规模巨大，为训练、微调和生产推理提供成熟生态。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)**  
  **105,515 Stars**  
  具备 GPU 加速和动态计算图的深度学习基础框架，是模型研究与训练生态的核心依赖。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)**  
  **108,424 Stars**  
  使用 PyTorch 从零实现类 ChatGPT 大模型的教程项目，持续承接开发者学习底层模型原理的需求。

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)**  
  **7,594 Stars**  
  覆盖知识、推理、代码、科学、长上下文和安全能力的多模型评测平台，反映模型竞争正从参数规模转向系统评测。

- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)**  
  **5,739 Stars**  
  面向 Apple Silicon 的小型 LLM 推理系统学习项目，探索 mini-vLLM 与 Qwen 的本地实现。

- **[Picovoice/picollm](https://github.com/Picovoice/picollm)**  
  **320 Stars**  
  通过 X-Bit 量化实现端侧 LLM 推理，代表低比特量化和隐私优先的本地模型路线。

---

### 🔍 RAG/知识库：向量数据库、检索增强、知识管理

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**  
  **94,163 Stars**  
  从文档 RAG 引擎演进为 Agent-native 数据库与上下文基础设施，强调企业文档处理和上下文供给。

- **[run-llama/llama_index](https://github.com/run-llama/llama_index)**  
  **52,905 Stars**  
  面向 AI 的文档处理与数据连接平台，是构建 RAG、Agent 和知识型应用的常用基础组件。

- **[mintplex-labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)**  
  **68,289 Stars**  
  提供本地优先的私有知识库与 Agent 工作空间，适合讨论企业数据隐私和一体化部署。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**  
  **147,894 Stars**  
  将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，并提供面向主流 Coding Agent 的 Skill。

- **[pathwaycom/serviette](https://github.com/pathwaycom/serviette)**  
  **58,706 Stars**  
  支持多种向量数据库的无代码 RAG 服务，突出文档变化后的持续同步和低门槛部署。

- **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)**  
  **42,244 Stars**  
  面向智能体的自进化上下文数据库，统一 Agent 记忆、知识 RAG 与技能，呼应长期记忆成为基础能力趋势。

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**  
  **40,441 Stars**  
  以文档层级结构替代传统向量检索，探索无需向量库的推理式 RAG。

- **[topoteretes/cognee](https://github.com/topoteretes/cognee)**  
  **33,322 Stars**  
  面向 Agent 持久化长期记忆的 AI 记忆平台，强调使用小模型控制长期上下文成本。

---

## 3. 趋势信号分析

今日热榜最明显的爆发方向是 **Coding Agent 的工程化外围工具**：代码审查、浏览器调试、任务规划、领域 Skill、上下文注入、Token 压缩和交付编排同时出现，说明开发者关注点已由“模型能否写代码”转向“智能体能否可靠、低成本地完成工作”。`modern-web-guidance-src` 与 `chrome-devtools-mcp` 首次体现了 Agent 获取实时规范和操作真实开发环境的新路径；`open-code-review` 则代表确定性工具与 LLM 审查的融合。`AG-UI` 登榜则显示交互协议开始进入主流视野，但当日新增仅 9，暂属早期信号。整体与近期行业事件吻合：模型能力趋同后，差异化竞争正转向上下文质量、工具接入、推理成本、权限治理和可审计交付。Rust、Go、Zig 等非 Python 技术栈同时出现，也表明 AI 基础设施正在追求更低延迟、更高并发和更好的本地部署体验。

---

## 4. 社区关注热点

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)：今日新增 893 Stars**  
  企业级代码审查与 LLM Agent 融合，是今日热榜中最具生产落地价值的项目之一。

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)：今日新增 664 Stars**  
  MCP 正从上下文检索扩展到浏览器操作，智能体开始直接进入真实开发与调试环境。

- **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)：今日新增 1,231 Stars**  
  为编码智能体提供动态更新的官方 Web 规范，展示了“高质量规则上下文”可能成为新的 Agent 基础设施层。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)：今日新增 227 Stars，累计 120,162 Stars**  
  在累计规模很大的同时继续登上热榜，验证了 Token 压缩和 Agent 成本治理具有持续而强烈的社区需求。

- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)：今日新增 33 Stars**  
  多 Coding Agent 编排、脚本自动化和人工审批门禁值得跟踪，代表企业从“单人使用 CLI”走向“多 Agent 流水线”的尝试。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
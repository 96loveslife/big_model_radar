# AI 开源趋势日报 2026-11-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-11 05:35 UTC

---

# AI 开源趋势日报｜2026-11-11

## 1. 今日速览

1. **Agent Skills 生态出现集中爆发**：今日热榜中，Anthropic 官方 Skills 仓库、面向工程代理的 Skills 集合以及第三方技能库同时登榜，显示“模块化能力包”正成为智能体工程的标准抽象。
2. **Agent 工具链继续向真实环境延伸**：浏览器自动化、Home Assistant 控制和终端编码代理同时受到关注，热度已从聊天界面扩展至操作网页、控制设备与执行工程任务。
3. **上下文工程成为高频主题**：`billion-context` 与 `headroom` 分别从长会话和工具输出侧解决 token 成本问题，显示“如何让代理长期稳定运行”正在取代单纯模型能力，成为新的工程焦点。
4. **生态成熟度继续提升**：主题搜索结果覆盖推理部署、RAG、记忆、Agent 编排、垂直应用及模型评测，AI 开源生态已形成从底层基础设施到终端产品的完整链条。
5. **今日榜单偏应用与 Agent 基础设施，而非基础模型**：没有新的模型权重或训练框架进入 Trending 前列，开发者关注点更多落在 Agent 的能力复用、交互执行和上下文控制。

---

## 2. 各维度热门项目

> 分类允许多标签；以下优先按项目最主要定位归类。Trending 项目总 stars 数据源显示为 `0`，因此保留其 **今日新增 stars**，不将 `0` 误作真实累计量。

### 🔧 AI 基础工具

#### 1. [anthropics/skills](https://github.com/anthropics/skills)
- **Stars：** 累计值暂不可用；**今日 +1,679**
- Anthropic 官方 Agent Skills 公共仓库，用于定义、复用和分发代理能力包。其集中登榜意味着 Skills 正在成为智能体生态的重要标准化接口。

#### 2. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)
- **Stars：** 累计值暂不可用；**今日 +780**
- 面向 AI Agent 的浏览器自动化 CLI，为编码代理及其他智能体提供结构化网页交互能力。它反映 Agent 基础设施正快速补齐“视觉浏览器操作”层。

#### 3. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)
- **Stars：** **9,112**
- Rust 语言的模块化、可扩展 LLM 应用框架。它体现了 AI 应用开发栈从 Python 独占向 Rust 等高性能语言扩展的趋势。

#### 4. [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)
- **Stars：** **5,713**
- 面向 Apple Silicon 的 LLM 推理系统学习项目，以“小型 vLLM + Qwen”帮助开发者理解推理栈。它兼顾技术教育和端侧推理实践，关注度稳定。

#### 5. [Picovoice/picollm](https://github.com/Picovoice/picollm)
- **Stars：** **319**
- 使用 X-Bit 量化在设备端运行 LLM 的推理方案。项目规模较小，但代表了低资源、隐私优先的端侧模型部署方向。

#### 6. [open-compass/opencompass](https://github.com/open-compass/opencompass)
- **Stars：** **7,583**
- 覆盖多模型、100+ 数据集的 LLM 评测平台，涉及知识、推理、编程、科学、长上下文和安全能力。模型能力快速分化后，标准化评测的重要性持续提高。

---

### 🤖 AI 智能体/工作流

#### 1. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- **Stars：** 累计值暂不可用；**今日 +465**
- 面向生产环境 AI 编码代理的工程技能集合。它将最佳实践转化为可复用能力包，今日登榜说明“代理工作流标准化”正在形成独立生态。

#### 2. [mattpocock/skills](https://github.com/mattpocock/skills)
- **Stars：** 累计值暂不可用；**今日 +1,225**
- 源自真实 `.agents` 目录的工程技能集，强调将个人代理配置转化为可复用资产。其今日热度反映了开发者对成熟 Agent 工作流模板的需求。

#### 3. [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)
- **Stars：** 累计值暂不可用；**今日 +790**
- 通过 MCP 将 Home Assistant 接入 Claude、ChatGPT 等 AI 助手。它展示了智能体协议连接现实设备和家庭场景的落地路径。

#### 4. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- **Stars：** **262,516**
- 可随用户需求成长的个人智能体。它在主题搜索中保持超高存量热度，代表通用个人代理向长期成长、个性化和持续适应方向演进。

#### 5. [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)
- **Stars：** **41,175**
- 使用任意模型或服务商的 Rust 终端编码代理。它强调 provider 无关与终端原生体验，反映编码 Agent 正向更轻量、更开放的方向发展。

#### 6. [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)
- **Stars：** **81,792**
- 开源 AI 求职代理，可扫描职位、评估简历匹配度并辅助准备申请。其较高热度说明 Agent 正从通用工具快速走向明确岗位、可量产结果的垂直流程。

#### 7. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)
- **Stars：** **38,620**
- 面向 Agent 与生成式 UI 的前端技术栈，并推动 AG-UI 协议。它是智能体从后台自动化走向可交互前端体验的重要基础设施。

---

### 📦 AI 应用

#### 1. [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)
- **Stars：** 累计值暂不可用；**今日 +531**
- 基于 Claude API 构建可部署应用的官方快速入门项目集合。它降低了从模型 API 到完整产品的开发门槛，今日登榜反映应用层需求仍然旺盛。

#### 2. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
- **Stars：** **75,717**
- 将文档或主题转换为包含原生形状、动画、图表和语音旁白的 PowerPoint。它体现了生成式 AI 从文本产出走向结构化专业交付物。

#### 3. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- **Stars：** **69,615**
- 结合多市场行情、实时新闻、决策看板和自动推送的 LLM 股票分析系统。它代表多源数据接入、连续运行和可交付决策报告的垂直 Agent 形态。

#### 4. [hkust-ds/auto-nsg-llm-autoresearch](https://github.com/hkust-ds/auto-nsg-llm-autoresearch)
- **Stars：** **26,951**
- 自动化神经科学研究框架，将大模型用于研究假设生成与实验迭代。它代表“AI for Science”从辅助问答向研究流程自动化演进。

#### 5. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- **Stars：** **142,053**
- 根据主题或关键词自动生成高清短视频。它将 LLM 与工作流结合成端到端内容生产产品，是成熟生成式应用商业化路径的代表。

#### 6. [open-webui/open-webui](https://github.com/open-webui/open-webui)
- **Stars：** **158,342**
- 支持 Ollama、OpenAI API 等多种模型后端的自托管 AI 界面。它持续受到关注，源于本地模型部署、团队协作及数据控制需求的增长。

---

### 🧠 大模型/训练

#### 1. [huggingface/transformers](https://github.com/huggingface/transformers)
- **Stars：** **168,772**
- 覆盖文本、视觉、音频和多模态模型定义、训练与推理的基础框架。它仍是开源模型生态最重要的通用抽象层之一。

#### 2. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)
- **Stars：** **108,211**
- 使用 PyTorch 从零实现 ChatGPT 类 LLM。它长期保持高热度，说明开发者对理解模型内部机制、实现可训练推理栈的需求依然强烈。

#### 3. [pytorch/pytorch](https://github.com/pytorch/pytorch)
- **Stars：** **105,342**
- 具备 GPU 加速能力的主流深度学习框架。它为微调、训练和部署提供基础，也是多数开源 AI 项目的底层依赖。

#### 4. [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)
- **Stars：** **201,460**
- 面向研究与生产环境的通用机器学习框架。存量关注度仍高，反映企业级 AI 基础设施迁移周期长、兼容需求持续存在。

#### 5. [keras-team/keras](https://github.com/keras-team/keras)
- **Stars:** **64,422**
- 强调易用性的深度学习框架。它在模型快速迭代中持续充当高层训练接口，连接研究原型与生产部署。

#### 6. [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)
- **Stars:** **63,286**
- 提供 YOLO 系列目标检测、实例分割、分类、姿态估计和跟踪工具。它以统一工具链覆盖多类计算机视觉任务，适合快速落地。

---

### 🔍 RAG/知识库

#### 1. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)
- **Stars：** 累计值暂不可用；**今日 +375**
- 面向月级长会话的上下文压缩插件，主打小上下文窗口和约 5 倍 token 节省。它今日登榜，直指 Agent 长期运行的上下文与成本瓶颈。

#### 2. [mem0ai/mem0](https://github.com/mem0ai/mem0)
- **Stars:** **68,777**
- 为 AI Agent 和应用提供可插拔式持久记忆基础设施。它代表“上下文窗口之外”的长期状态管理正成为独立产品层。

#### 3. [ragflow](https://github.com/infiniflow/ragflow)
- **Stars:** **93,991**
- 从 RAG 引擎演进为面向 Agent 的上下文基础设施。它将文档解析、检索和工作流结合，反映 RAG 项目正在向 Agent 原生平台升级。

#### 4. [pathwaycom/serviette](https://github.com/pathwaycom/serviette)
- **Stars:** **58,713**
- 无代码 RAG 服务，可让回答与文档持续同步并支持多种向量数据库。它突出知识更新和部署简化，适合快速接入企业文档。

#### 5. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)
- **Stars:** **41,979**
- 统一 Agent Memory、知识 RAG 与 Skills 的自演化上下文数据库。它尝试把长期记忆、事实知识和可执行能力合并为统一上下文层。

#### 6. [topoteretes/cognee](https://github.com/topoteretes/cognee)
- **Stars:** **33,233**
- 面向智能体持久长期记忆的开源 AI 记忆平台。它以较小模型和知识图谱式处理为卖点，显示 Agent memory 正快速产品化。

#### 7. [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)
- **Stars:** **79,326**
- 在内容进入 LLM 前压缩工具输出、日志、文件和 RAG 块，以降低 token 消耗。它与长上下文项目共同构成今日明显的上下文成本优化趋势。

#### 8. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)
- **Stars：** **115,919**
- 跨会话持久化 Agent 上下文，捕获并压缩会话活动，再向后续任务注入相关内容。其高关注度体现跨会话记忆需求旺盛。

---

## 3. 趋势信号分析

今日最明显的爆发点是 **Agent Skills 与代理工程化**。Anthropic 官方 Skills 仓库、工程技能集合和个人 `.agents` 技能库同时进入 Trending，说明社区正把注意力从“选哪个模型”转向“如何为代理封装可复用、可审计的工作能力”。其中 Rust CLI、浏览器自动化与 MCP 设备控制首次形成清晰组合：Skills 定义能力，CLI/MCP 执行能力，浏览器和 IoT 提供现实操作面。

第二个信号是 **上下文成本成为主战场**。`billion-context` 与 `headroom` 分别处理长会话压缩和工具输出压缩；主题搜索中的 `claude-mem`、`mem0`、`OpenViking`、`Cognee` 则关注跨会话记忆与知识持久化。由此看，Agent 竞争正从单轮推理能力转向长时间运行、低成本上下文和稳定状态管理。

第三个信号是 **应用交付比模型发布更吸睛**。今日没有模型权重或训练框架登榜，但 Claude Quickstarts、PPT 生成、股票分析和智能家居控制均进入热榜，反映开发者更愿意投资可直接交付结果的 Agent 应用。与此同时，这与近期行业从聊天式 Copilot 向自主执行、长期记忆和 MCP 工具生态迁移的方向一致。

---

## 4. 社区关注热点

- **[anthropics/skills](https://github.com/anthropics/skills)：Agent Skills 的官方入口**  
  今日新增 **1,679 stars**。若生态继续围绕 Skills 标准化，能力包格式、权限控制、版本管理和跨框架兼容性将成为下一阶段开发者重点。

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 与 [mattpocock/skills](https://github.com/mattpocock/skills)：工程化最佳实践资产化**  
  两者今日分别新增 **465** 和 **1,225 stars**。编码代理正在从“模型内置能力”转向“可移植技能包”，团队可据此沉淀内部规范和自动化流程。

- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)：长会话上下文压缩**  
  今日新增 **375 stars**，并以小窗口、5 倍 token 节省为卖点。需要重点验证压缩后的信息保真度、检索召回率和长期任务稳定性，而不能只看 token 指标。

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)：AI 浏览器执行层**  
  今日新增 **780 stars**。浏览器是 Agent 落地最重要的通用接口之一，值得关注其可观测性、安全边界、反自动化策略及对真实网站复杂交互的稳定性。

- **[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)：MCP 驱动的现实设备控制**  
  今日新增 **790 stars**。它展示了 MCP 从开发者工具协议向家庭自动化和本地智能控制扩展，实际部署时应重点审查权限最小化、命令确认和故障回退机制。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
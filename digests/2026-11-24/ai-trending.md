# AI 开源趋势日报 2026-11-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-24 09:19 UTC

---

# AI 开源趋势日报｜2026-11-24

> 数据口径：Trending 为今日新增 Stars；主题搜索为 7 天内活跃项目的累计 Stars。项目可按主要用途交叉分类。

## 1. 今日速览

1. **Agent Skills 正成为今日最突出的爆发点**：Claude-BugHunter、superpowers、CLI-Anything、diagram-design、last30days-skill 和 Stitch Skills 同时进入热榜，说明社区关注点正从“调用模型”转向“封装可复用能力”。
2. **Agent 基础设施快速成熟**：Firecrawl、Graphify、OpenViking、Memory 类项目受到关注，数据采集、知识建模、长期记忆和上下文压缩成为生产级 Agent 的核心组件。
3. **轻量模型训练与端侧部署继续升温**：MiniMind 登榜并单日新增 828 Stars，OpenVINO 也进入热榜，凸显低成本训练、本地推理和隐私部署需求。
4. **垂直 AI 应用继续扩张**：AutoClip 已将长视频理解、自动剪辑、字幕、封面和发布文案整合为完整工作流；求职、股票分析和演示文稿生成同样保持高热度。
5. **安全与合规从附属需求变成产品能力**：漏洞发现 Skill、应用商店合规检查和 MLSecOps 项目共同表明，安全、隐私及法规合规正在前置进入 Agent 开发流程。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 69,823（今日 +828） | 以“两小时训练 64M LLM”为核心卖点，是今日热榜中最具代表性的轻量模型训练与教学项目。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 今日 +790 | 将任意软件封装成 Agent 可调用的 CLI，推动传统工具进入 Agent-Native 工作流。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 208,288（今日 +924） | 为 Agent 提供统一搜索、抓取和 550+ 数据源访问能力，是当前 Agent 数据基础设施的代表项目。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | 今日 +184 | 面向 AI 推理优化的成熟工具包，在端侧部署和异构硬件加速场景中持续具有产业价值。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 今日 +797 | 跨 Reddit、X、YouTube、HN、Polymarket 和网页进行研究并生成有依据的摘要，展示研究型 Skill 的产品化趋势。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | 今日 +422 | 面向 Stitch MCP Server 的标准化 Agent Skills 库，兼容 Gemini CLI、Claude Code、Cursor 等多种编码 Agent。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 208,288（今日 +924） | 搜索与抓取 API 兼具独立开发价值，既是基础设施，也可直接嵌入研究、检索和自动化工作流。 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 今日 +2,029 | 以 84 个安全技能、漏洞模式库和企业攻击矩阵强化 Claude Code，今日新增量位列热榜首位。 |
| [obra/superpowers](https://github.com/obra/superpowers) | 今日 +840 | 将 Agent Skills 与软件开发方法论结合，代表编码 Agent 从“自由生成”走向规范化、可复用执行流程。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 今日 +790 | 让现有软件全部具备 Agent 可调用接口，是连接模型能力与真实业务工具的关键中间层。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 265,752 | 强调与用户共同成长的个人 Agent，在主题搜索中保持最高累计 Stars，关注持续学习和个性化能力。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 84,495 | 覆盖职位扫描、简历定制、面试准备和投递跟踪的完整求职 Agent 工作流。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | 今日 +436 | 面向 CI/CD 可靠性的开源 Agent，展示了垂直运维场景中从辅助问答到执行闭环的演进。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 38,927 | 提供 Agent 与生成式 UI 的前端技术栈及 AG-UI 协议，是人机协作界面的重要基础设施。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,198 | 以 Rust 实现、可多 Agent 拆解任务且强调代码透明性，反映开发者对可审计编码 Agent 的需求。 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | 今日 +907 | 将长视频自动转换为字幕、封面和发布文案完整的短视频，覆盖播客、课程、访谈及社交平台分发。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 79,740 | 可将文档或主题生成带原生图形、动画、图表和旁白的 PowerPoint，应用完整度较高。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 74,151 | 面向多市场股票分析的 LLM 应用，整合行情、新闻、决策看板与自动推送。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 145,333 | 根据主题或关键词自动生成高清短视频，是内容生产自动化赛道的代表项目。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | 今日 +761 | 汇总应用商店拒绝风险、隐私清单和 AI 法规节点，并提供面向编码 Agent 的提交前检查能力。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 38,751 | 个人交易 Agent 框架，将自然语言交互引入量化研究与日常投资辅助。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 今日 +620 | 为多种编码 Agent 提供 52 类自包含 HTML/SVG 编辑型图表，直接回应 AI 生成图表风格同质化问题。 |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | 今日 +595 | 将知识库、规划与创作整合的隐私优先工作空间，可视为人机协作型 AI 应用入口。 |

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 69,823（今日 +828） | 以极低门槛完成 64M 模型训练，兼具教育价值与端侧实验价值。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 169,279 | 支持文本、视觉、音频和多模态模型的基础框架，仍是模型开发生态的核心底座。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 108,957 | 以 PyTorch 从零实现类 ChatGPT 模型，是高热度且系统化的 LLM 入门项目。 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 79,982 | 聚焦从学习到交付 AI 应用的工程化路径，反映开发者向实战能力迁移。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,635 | 覆盖 100+ 数据集的 LLM 评测平台，在模型快速迭代背景下提供标准化对比能力。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 5,805 | 在 Apple Silicon 上构建 tiny vLLM 与 Qwen 推理栈，适合系统工程师理解底层机制。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 354 | 强调可靠、最小且可扩展的基础模型与世界模型预训练库，关注训练稳定性。 |
| [FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos) | 208 | 通过前瞻预测与异步预取实现零停顿 MoE 推理，代表模型服务系统优化方向。 |

### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---:|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 208,288（今日 +924） | 统一提供搜索、抓取与外部数据接入，是构建实时知识库和 Agent 数据管线的重要入口。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 152,692 | 将代码、文档、SQL Schema、配置和 PDF 转为可查询知识图谱，并以本地 AST 解析替代纯向量检索。 |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | 9,189 | 以逻辑形式引导检索和推理，针对专业领域知识库补足传统向量相似度 RAG 的不足。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,679 | 将 Agent Memory、知识 RAG 与 Skills 统一为自进化上下文数据库。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 40,766 | 基于文档层级和推理的“向量less RAG”，提供不同于向量数据库的技术路径。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 33,540 | 面向 Agent 的开源长期记忆平台，通过知识图谱化处理提升持久上下文管理能力。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 13,811 | 面向个人设备的高效私有 RAG，主打 97% 存储节省，兼顾本地隐私与资源成本。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 94,632 | 从文档 RAG 引擎演进为 Agent-native 数据库和上下文基础设施。 |

---

## 3. 趋势信号分析

今日热榜最强的信号并非新模型，而是 **Agent Skills 与工具调用基础设施的集中爆发**。Claude-BugHunter、superpowers、CLI-Anything、last30days-skill 和 Stitch Skills 同日登榜，说明社区正在将提示词、领域流程、工具接口和合规知识封装成可移植资产。安全 Skill 单日新增 2,029 Stars，也表明“让 Agent 做攻击面检查”比通用聊天功能更具传播力。

技术栈上，Skills/MCP 与 CLI 正成为新的 Agent 插件层：既有标准化技能库，也有把传统软件改造成 Agent-Native 工具的项目。Firecrawl 的爆发进一步证明，实时数据采集是 Agent 产品的共同底座。与此同时，MiniMind、OpenVINO 与 tiny-llm 指向低成本训练、端侧推理和系统级优化的持续需求。近期行业侧对开放模型、多模型适配和低成本 Agent 部署的推动，与这些项目形成呼应；下一阶段竞争重点将从“谁的模型更强”转向“谁能提供更可靠、低成本且可审计的执行环境”。

---

## 4. 社区关注热点

- **[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**：今日新增 2,029 Stars，为热榜最高；漏洞发现、企业攻击矩阵和标准化安全 Skill 兼具实用性与传播性。
- **[superpowers](https://github.com/obra/superpowers) 与 [CLI-Anything](https://github.com/HKUDS/CLI-Anything)**：前者规范 Agent 开发流程，后者打通传统软件工具链，共同指向 Agent 执行层的标准化。
- **[Firecrawl](https://github.com/firecrawl/firecrawl)**：今日新增 924 Stars；统一数据访问能力已成为研究、搜索、RAG 和自动化 Agent 的关键基础设施。
- **[MiniMind](https://github.com/jingyaogong/minimind)**：今日新增 828 Stars；“两小时训练 64M 模型”的低门槛体验，反映端侧模型教育和实验需求。
- **[AutoClip](https://github.com/zhouxiaoka/autoclip)**：今日新增 907 Stars；从长视频输入到字幕、封面、剪辑和发布文案，展示了较完整的 AI 内容生产闭环。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
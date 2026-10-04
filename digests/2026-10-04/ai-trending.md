# AI 开源趋势日报 2026-10-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-10-04 05:16 UTC

---

<think>The user wants me to generate a structured "AI Open Source Trends Daily Report" based on the GitHub data provided. Let me carefully analyze the data and follow the three steps.

**Step 1: Filtering AI-related projects**

Let me go through the Trending list (19 repos) first:

1. DietrichGebert/ponytail - AI agent related ✅
2. pbakaus/impeccable - Design language for AI harness ✅
3. affaan-m/ECC - Agent harness performance optimization ✅
4. Effect-TS/effect - TypeScript framework (not AI specific) ❌
5. JuliusBrussee/caveman - Token optimization for coding agents ✅
6. Panniantong/Agent-Reach - AI agent internet reading tool ✅
7. pingdotgg/t3code - Not clearly AI (T3 stack code) - need to check. Looking at the description, it's TypeScript related. Likely not AI. ❌
8. thedotmack/claude-mem - AI agent persistent context ✅
9. cloudflare/cloudflare-os - Agent workspace on Cloudflare ✅
10. addyosmani/agent-skills - AI coding agent skills ✅
11. obra/superpowers - Agentic skills framework ✅
12. mattpocock/skills - Skills for AI agents ✅
13. mksglu/context-mode - Context window optimization for AI agents ✅
14. earendil-works/pi - AI agent toolkit ✅
15. getsentry/sentry - Error tracking, not AI specific ❌
16. anthropics/claude-code - Claude Code AI tool ✅
17. jamwithai/production-agentic-rag-course - Agentic RAG course ✅
18. meituan-longcat/LongCat-Video - Video generation model ✅
19. OpenCut-app/OpenCut - CapCut alternative (not AI) ❌

From AI topic search, most are AI-related but some are general ML (tensorflow, pytorch, scikit-learn, etc.) which I should categorize.

**Step 2: Classification**

Let me categorize the filtered projects:

🔧 AI 基础工具 (Frameworks, SDKs, inference engines, dev tools, CLI):
- 0xPlaygrounds/rig (Rust LLM framework)
- Effect-TS/effect - Wait, I excluded this. Let me reconsider. It's not AI specific.
- JuliusBrussee/caveman (token optimization proxy)
- Panniantong/Agent-Reach (CLI for agent internet reading)
- earendil-works/pi (AI agent toolkit, unified LLM API, CLI)
- anthropics/claude-code (Claude Code CLI)
- pingdotgg/t3code - need to verify. Based on name it might be T3 stack code, but maybe it's a coding agent? Let me skip if unsure.
- addyosmani/agent-skills (production skills for AI agents)
- mattpocock/skills (skills for engineers)
- pbakaus/impeccable (design language for AI)

🤖 AI 智能体/工作流:
- DietrichGebert/ponytail
- affaan-m/ECC
- thedotmack/claude-mem
- obra/superpowers
- mksglu/context-mode
- cloudflare/cloudflare-os
- NousResearch/hermes-agent
- shareAI-lab/learn-claude-code
- career-ops-hq/career-ops
- zhayujie/CowAgent
- HKUDS/nanobot
- Hmbown/Codewhale
- CopilotKit/CopilotKit
- esengine/DeepSeek-Reasonix
- agentscope-ai/QwenPaw
- bojieli/ai-agent-book
- siyuan-note/siyuan

📦 AI 应用:
- hugohe3/ppt-master
- CherryHQ/cherry-studio
- harry0703/MoneyPrinterTurbo
- career-ops-hq/career-ops
- ZhuLinsen/daily_stock_analysis
- samchon/nestia
- jamwithai/production-agentic-rag-course
- Shubhamsaboo/awesome-llm-apps

🧠 大模型/训练:
- meituan-longcat/LongCat-Video
- open-compass/opencompass
- galilai-group/stable-pretraining
- ollama/ollama
- OpenCut-app/OpenCut - no, this is not AI
- langgenius/dify (also agent)
- open-webui/open-webui
- netdata/netdata (observability)

🔍 RAG/知识库:
- thedotmack/claude-mem (also agent)
- infiniflow/ragflow
- datawhalechina/hello-agents
- mem0ai/mem0
- langchain-ai/langgraph
- HKUDS/LightRAG
- headroomlabs-ai/headroom
- VectifyAI/PageIndex
- topoteretes/cognee
- run-llama/llama_index
- Mintplex-Labs/anything-llm
- Graphify-Labs/graphify

Vector databases:
- meilisearch/meilisearch
- milvus-io/milvus
- qdrant/qdrant
- weaviate/weaviate
- alibaba/zvec
- langchain4j/langchain4j
- StarTrail-org/LEANN
- neuml/txtai
- lancedb/lancedb
- oramasearch/orama
- oceanbase/oceanbase

ML foundations:
- tensorflow/tensorflow
- huggingface/transformers
- pytorch/pytorch
- scikit-learn/scikit-learn
- keras-team/keras
- ultralytics/ultralytics
- roboflow/supervision
- JuliaLang/julia
- apache/airflow
- tesseract-ocr/tesseract
- openbq-org/OpenBB

These ML ones could be in 大模型/训练 or AI 基础工具. Let me put frameworks in AI 基础工具 and models/datasets/training-specific ones in 大模型/训练.

Let me now write the report.

Looking at the trending data more carefully:
- Many trending repos are AI agent skills/harnesses/context management
- ECC (1281), Agent-Reach (1696), skills (751), superpowers (577), caveman (507), impeccable (699) - all AI agent related
- LongCat-Video - video generation model from Meituan
- production-agentic-rag-course - educational

The dominant trend is clearly **AI agent infrastructure** - particularly:
1. Agent skills/frameworks for Claude Code, Codex, Cursor, etc.
2. Context window optimization (token reduction)
3. Persistent memory for agents
4. Agent harnesses

Let me write the report now.

I'll also note the potential misattribution of star counts in the topic search results - some seem unrealistic (e.g., 251,014 stars for NousResearch/hermes-agent, 272,369 for affaan-m/ECC which is brand new). These might be data quality issues but I'll report them as given.

Let me draft the report:

# AI 开源趋势日报 · 2026-10-04

## 今日速览
今日 GitHub Trending 被 AI Agent 基础设施类项目强势占领，其中以 Claude Code 生态的 skills/harness 框架最热，ECC、Agent-Reach、caveman 等多个围绕"上下文优化"和"代理工具链"的项目单日斩获千级 star。美团发布视频生成模型 LongCat-Video 入榜，预示多模态生成持续受到工业界关注。与此同时，RAG 与记忆层项目（如 mem0、cognee、PageIndex）在主题搜索侧持续保持高活跃度。

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐0 (+1696 today)：为 AI Agent 提供统一 CLI 来读取 Twitter、Reddit、YouTube、Bilibili 等多平台内容，零 API 费用，是今日新增 star 最多的项目。
- [pbakaus/impeccable](https://github.com/pbakaus/impeccable) — ⭐0 (+699 today)：面向 AI 设计 Agent 的设计语言系统，让 AI 更好地产出 UI/UX。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐0 (+897 today)：覆盖 Claude Code/Codex/Cursor 的 Agent Harness 性能优化系统，含 skills、instincts、memory、security 等模块。
- [earendil-works/pi](https://github.com/earendil-works/pi) — ⭐0 (+408 today)：统一 LLM API、Agent 循环、TUI 与编码 Agent CLI 的全能工具包。
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — ⭐0 (+128 today)：终端 Agentic 编码工具的事实标准，今日持续上榜。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,801：Rust 生态模块化 LLM 应用框架，为追求性能的生产级团队提供选择。
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐182,135：本地运行开源大模型的标杆工具。
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐166,931：覆盖文本/视觉/音频/多模态的模型定义框架。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) — ⭐0 (+1281 today)：通过"懒人哲学"让 AI Agent 写出最精炼代码，今日爆款。
- [mattpocock/skills](https://github.com/mattpocock/skills) — ⭐0 (+751 today)：知名工程师 Matt Pocock 开源的 .agents skills 集合。
- [obra/superpowers](https://github.com/obra/superpowers) — ⭐0 (+577 today)：与 Claude Code 等 Agent 深度集成的 skills 框架与方法论。
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — ⭐0 (+252 today)：Google Chrome 团队 Addy Osmani 出品，产级编码 Agent skills。
- [mksglu/context-mode](https://github.com/mksglu/context-mode) — ⭐0 (+256 today)：上下文窗口优化中间件，对工具输出做 98% 缩减并跨 17 平台路由。
- [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os) — ⭐0 (+85 today)：基于 Cloudflare Workers 的 Agent 工作空间。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐0 (+79 today)：跨会话持久化 Agent 上下文，自动压缩并注入历史。
- [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — ⭐77,963：从零构建 nano Claude Code 的开源教学项目。
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — ⭐48,767：轻量级自托管个人 Agent 框架，HKU Data Science 出品。
- [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) — ⭐37,729：面向 Agent 的前端 UI 栈与 AG-UI 协议。

### 📦 AI 应用（具体产品与垂直场景）

- [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) — ⭐0 (+193 today)：生产级 Agentic RAG 系统课程，落地导向。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐52,354：聚合多模型的 AI 生产力桌面客户端。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐57,515：基于 AI 一键生成原生 PowerPoint 文档，支持图表、动画、旁白。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐128,294：基于大模型自动化生成短视频的热门项目。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐65,871：LLM 驱动的多市场股票智能分析与自动推送。
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — ⭐73,416：开源 AI 求职 Agent，自动评分、简历定制、面试准备。

### 🧠 大模型/训练（模型权重、训练框架、微调）

- [meituan-longcat/LongCat-Video](https://github.com/meituan-longcat/LongCat-Video) — ⭐0 (+44 today)：美团龙猫系列视频生成模型开源，工业界多模态生成新成员。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,490：覆盖 100+ 数据集的主流 LLM 评测平台。
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) — ⭐326：面向基础与世界模型的可扩展预训练库。
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) — ⭐62,183：YOLO 系列检测/分割/姿态估计经典框架。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐103,708：深度学习基础框架，社区活跃度持续领先。

### 🔍 RAG/知识库（向量数据库、检索增强、记忆层）

- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — ⭐38,588：无向量、基于推理的 RAG 文档索引方案。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐66,544：面向 AI Agent 的记忆层基础设施，即插即用持久化记忆。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐91,641：融合 RAG + Agent 的开源引擎，企业级上下文层方案。
- [topoteretes/cognee](https://github.com/topoteretes/cognee) — ⭐31,338：为 Agent 提供长期记忆的开源 AI 记忆平台。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐74,363：在进入 LLM 前压缩工具输出/RAG chunks，可减少 20%-95% token。
- [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) — ⭐13,008：MLsys2026 最佳论文，RAG 存储节省 97% 的本地化方案。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐46,314：云原生高性能向量数据库。
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐34,921：大规模生产级向量搜索引擎。

## 趋势信号分析

今日 Trending 几乎被"AI Agent 工程化"主题垄断，19 个项目中 14 个与 Agent 直接相关，这是非常罕见的同质化爆发。其中"上下文优化"成为最核心关键词：caveman 通过提示词缩短减少 65% token、context-mode 缩减工具输出 98%、headroom 压缩 RAG 内容 20-95%、claude-mem 持久化会话记忆——一系列工具指向同一痛点：**随着 Claude Code、Codex、Cursor 等 Agent 普及，token 成本与上下文管理成为开发者首要瓶颈**。

另一个显著信号是 skills/harness 框架的"商品化"：ECC、ponytail、superpowers、mattpocock/skills、addyosmani/agent-skills 在同一天集中爆发，说明社区对"可复用 Agent 技能包"的需求已经形成共识，Anthropic 等厂商推动的 Agent Skills 协议正在变成事实标准。

美团 LongCat-Video 入榜则延续了 2025 年底以来国内大厂密集开源视频生成模型（可灵、Wan 等）的趋势，多模态生成仍是工业界 AI 投入的重点方向。

## 社区关注热点

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)**（+1696 stars）：今日榜首，零成本让 Agent 接入全网内容，是 Agent 工具链的关键拼图。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)**（+897 stars）：覆盖主流 Agent 平台的统一 Harness 优化框架，工程化程度高。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**（+507 stars）：用极简思路直击 token 成本痛点，对个人开发者尤其友好。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**：无向量 RAG 新范式，规避了传统 embedding 的精度与成本问题，值得架构选型时关注。
- **[meituan-longcat/LongCat-Video](https://github.com/meituan-longcat/LongCat-Video)**：国内大厂开源视频生成新成员，多模态内容创作生态的补强。

Let me now refine this. I should double check the star counts and the trending numbers. The trending repos all show ⭐0 which is strange - this is a data formatting artifact. I'll note it as "新增" star counts which is the meaningful number for trending.

Let me finalize the output.</think>

# AI 开源趋势日报 · 2026-10-04

## 一、今日速览

今日 GitHub Trending 被 **AI Agent 工程化基础设施** 强势主导——19 个上榜项目中 14 个与 Agent 直接相关，且绝大部分聚焦于"上下文/Token 优化"与"可复用 Skills 框架"两大主题，单日千级 star 频现。同时，美团龙猫系列视频生成模型 **LongCat-Video** 开源入榜，延续了近期国内大厂密集发布多模态模型的节奏；RAG 与 Agent 记忆层（mem0、cognee、PageIndex）在主题搜索侧持续保持高活跃度，知识库架构正在经历"无向量 + 记忆压缩"的新一轮重构。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 · SDK · CLI · 推理）

| 项目 | Stars | 一句话 |
|---|---|---|
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐0 · **+1696 今日** | 一个 CLI 打通 Twitter/Reddit/YouTube/GitHub/B站/小红书，让 Agent "看见"全网，零 API 费用——今日热度榜首。 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | ⭐0 · +699 今日 | 专给 AI 设计 Agent 用的设计语言规范，弥合 AI 出 UI 的品味短板。 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | ⭐0 · +408 今日 | 统一 LLM API + Agent Loop + TUI + 编码 Agent CLI 的全能工具包。 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐0 · +128 今日 | 终端 Agentic 编码的事实标准，长期霸榜。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,801 | Rust 生态最成熟的模块化 LLM 应用框架，主打生产级性能。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐182,135 | 本地跑开源大模型的默认入口，活跃度依旧。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166,931 | 多模态模型定义层的标杆。 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话 |
|---|---|---|
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | ⭐0 · **+1281 今日** | "最懒高级工程师"哲学驱动的 Agent 编码框架，主张"少写即优"，今日爆款。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐0 · +897 今日 | 覆盖 Claude Code/Codex/Cursor 的 Agent Harness 优化系统，含 skills、instincts、memory、安全模块。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐0 · +751 今日 | 知名工程师 Matt Pocock 开源的 .agents 技能集合，工程师风格鲜明。 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐0 · +577 今日 | 与 Claude Code 深度耦合的 Agentic Skills 框架与开发方法论。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | ⭐0 · +256 今日 | 上下文窗口优化中间件，工具输出缩减 98%，跨 17 平台经 MCP+hooks 路由。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 · +252 今日 | Addy Osmani 出品的产级编码 Agent 技能包。 |
| [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os) | ⭐0 · +85 今日 | 基于 Cloudflare Workers 的 Agent 工作空间，serverless Agent 基建探索。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐77,963 | 从 0 到 1 实现 nano Claude Code 的开源教学项目，"Bash is all you need"。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,729 | 面向 Agent 的前端 UI 栈与 AG-UI 协议发起者。 |

### 📦 AI 应用（产品与垂直场景）

| 项目 | Stars | 一句话 |
|---|---|---|
| [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) | ⭐0 · +193 今日 | 生产级 Agentic RAG 课程，面向落地而非 demo。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐52,354 | 聚合多模型、多 Agent 的桌面 AI 生产力套件。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐57,515 | AI 一键生成原生 PowerPoint（含动画/图表/旁白），PPT 自动化头部项目。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry07003/MoneyPrinterTurbo) | ⭐128,294 | 关键词一键生成高清短视频，AI 短内容创作标配。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐65,871 | LLM 驱动的多市场股票分析与自动推送。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐73,416 | 开源 AI 求职 Agent，自动评分/简历定制/面试准备。 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话 |
|---|---|---|
| [meituan-longcat/LongCat-Video](https://github.com/meituan-longcat/LongCat-Video) | ⭐0 · +44 今日 | 美团龙猫系列视频生成模型开源，国内多模态生成新成员。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,490 | 覆盖 100+ 数据集的权威 LLM 评测平台。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐326 | 面向基础模型/世界模型的可扩展预训练库。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐103,708 | 深度学习基础框架，常驻热度。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐62,183 | YOLO 系列检测/分割/姿态估计的事实标准。 |

### 🔍 RAG / 知识库（向量库 · 检索增强 · 记忆层）

| 项目 | Stars | 一句话 |
|---|---|---|
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐38,588 | 无向量、基于推理的 RAG 文档索引，规避传统 embedding 的精度与成本问题。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐66,544 | 面向 AI Agent 的即插即用持久化记忆基础设施。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐74,363 | 进入 LLM 前压缩工具输出/RAG 内容，JSON 场景可省 60-95% token。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91,641 | RAG + Agent 融合的企业级开源引擎。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐31,338 | 为 Agent 提供长期记忆的开源 AI 记忆平台。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐13,008 | MLsys2026 最佳论文落地，本地 RAG 节省 97% 存储。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46,314 | 云原生高性能向量数据库，ANN 检索主流选择。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34,921 | 大规模生产级向量搜索引擎，Rust 实现性能领先。 |

---

## 三、趋势信号分析

今日 Trending 出现罕见的**同质化爆发**——19 个项目中 14 个与 Agent 直接相关，且围绕同一痛点高度收敛：**Claude Code / Codex / Cursor 等 Agent 普及后，Token 成本与上下文管理成为开发者首要瓶颈**。caveman 减 65% token、context-mode 缩 98% 工具输出、headroom 压 60-95% JSON、claude-mem 持久化会话记忆——四个项目从不同角度切入同一命题，预示"Agent 上下文工程"将催生一个独立工具品类。

第二条信号是 **Skills/Harness 框架的"商品化"**：ECC、ponytail、superpowers、mattpocock/skills、addyosmani/agent-skills 同期爆发，说明社区对"可复用 Agent 技能包"已形成共识——Anthropic 推动的 Agent Skills 协议正在被快速演化为事实标准，"为 Agent 写 Skills"或将变成下一个开发者副业赛道。

第三条信号来自工业界：**美团 LongCat-Video 开源**延续了 2025 年底以来国内大厂密集开源视频生成模型（可灵、Wan、混元等）的趋势，多模态生成仍是大厂 AI 投入的优先级，开发者

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
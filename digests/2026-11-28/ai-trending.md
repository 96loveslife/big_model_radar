# AI 开源趋势日报 2026-11-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-28 07:11 UTC

---

# AI 开源趋势日报 · 2026-11-28

---

## 1. 今日速览

**Agent Skills 生态全面爆发是今日最强烈的信号。** 热榜前 16 位中有 6 个项目属于 Agent 技能/插件规范类——Claude-BugHunter（+1608）、superpowers（+922）、cursor/plugins（+243）、google-labs-code/stitch-skills（+311）、diagram-design（+725）、last30days-skill（+675）——这说明竞争焦点正从"模型能力"转向"可复用的技能包与规范层"。**CLI-Anything（+666）提出"Making ALL Software Agent-Native"**，则把战线烧到工具层：让任意软件对 Agent 可调用、可编程。

**上下文与记忆基础设施是第二条主线。** 主题搜索中 claude-mem（12万+ stars）、mem0（6.9万）、cognee、OpenViking、Graphify、headroom 集体高星，说明"Agent 跨会话记忆 + 上下文压缩 + 代码库知识图谱"已成为独立品类。**MiniMind（+660）**这类"两小时从零训出 64M 模型"的教学型仓库持续走热，反映小模型本地化训练的低门槛化趋势。

**端侧/私有化部署持续升温。** firecrawl（+822，21万 stars）、openvino（+151）、Ollama（18.8万）、LEANN、lancedb 等构成"本地优先"阵营。**autoclip（+718）**这类本地 AI 视频剪辑工具的登榜，说明垂直场景的开源替代品正在从开发者工具扩散到消费级生产力工具。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | +666 今日 | 本质是"Agent-Native 工具层"：把任意软件封装成 Agent 可调用的 CLI 接口，方向性极强，今日登榜即说明工具互操作协议正在被社区当作独立赛道讨论。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 211,850（+822 今日） | Agent 的"知识基础设施"，统一 550+ 数据源搜索/抓取 API，是当前事实上的 Agent 数据管道标准件。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | +151 今日 | 端侧推理优化工具包，在 Intel 生态与国产芯片部署场景中承担推理降本角色，是私有化部署链条的关键一环。 |
| [cursor/plugins](https://github.com/cursor/plugins) | +243 今日 | Cursor 官方插件规范与大厂官方插件样板，是 IDE 厂商争夺 Agent 插件入口的标志物。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 312,019 | Agent harness 性能优化系统（技能/记忆/安全/研究优先开发），框架之上的"元框架"层，star 量级已超 LangChain。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 81,029 | 在工具输出与 RAG 分片进入 LLM 前做压缩，宣称编码 Agent 省 20% token、JSON 场景省 60~95%，直击成本痛点。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | 565 | 多模型统一网关 + 智能负载均衡，工程实用度高但体量尚小，可作为成本层观察对象。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 266,632 | 自称"随你成长的 Agent"，高 star 说明端侧自主 Agent 叙事在社区有强共鸣。 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | +1,608 今日（今日榜首） | 85 个技能、16 个斜杠命令、681 个披露报告模式、24 类漏洞分类的红队技能包，安全向 Agent 技能化的代表作。 |
| [obra/superpowers](https://github.com/obra/superpowers) | +922 今日 | "Agent 技能框架 + 软件开发方法论"组合，强调 Skills 与流程规范，宣告技能层开始独立于模型层存在。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | +675 今日 | 单个技能即横跨 Reddit/X/YouTube/HN/Polymarket 的多源研究并合成带引证摘要，验证"窄领域 Skill"可独立爆红。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | +725 今日 | 为 Claude Code/Codex/Cursor/Factory 等生成编辑级图表，兼容 Agent Skills 开放标准，是"设计审美"作为 Agent 能力层的尝试。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | +311 今日 | Google 官方出品的 Stitch MCP 技能库，遵循 Agent Skills 开放标准，首批兼容 Antigravity/Gemini CLI/Claude Code/Cursor——大厂正式入场。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | +328 今日 | 面向 CI/CD 可靠性的开源 Agent，垂直场景 Agent 从"辅助写代码"走向"运维自治"。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,219 | Rust 编写的终端/网页/桌面多 Agent 编码器，含 MCP、插件与 OS 沙箱，安全隔离是亮点。 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 40,047 | "把 IDE 接进 Agent"，TypeScript 实现，IDE-Agent 融合是本轮新主线。 |

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 说明 |
|---|---|---|
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | +718 今日 | 本地优先的 OpusClip 开源替代，自动切短视频、生成字幕/封面/文案，适配抖音/小红书/TikTok/Shorts——消费级 AI 应用登顶热榜。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 80,846 | 文档/主题转原生 PowerPoint（原生形状、动画、图表、旁白），解决"AI PPT 一眼假"的痛点。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 146,048 | 一键生成高清短视频，与 autoclip 同赛道，说明短视频自动化已形成独立开源品类。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 85,264 | 开源求职 Agent：CV 打分、ATS 简历定制、面试准备、投递追踪，本地/Codex/OpenCode 运行。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 75,068 | LLM 驱动的多市场股票分析（多源行情+新闻+决策看板+自动推送），零成本定时运行。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 123,961 | 多 Agent 金融研究范式的标杆，agentic finance 的代表实现。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 39,108 | 个人交易 Agent，与 TradingAgents 形成 HKUDS 生态的垂直金融布局。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | 63,882 | 终身个性化辅导，RAG + Agent 的教育场景落地，star 数说明垂直陪伴类需求真实。 |

### 🧠 大模型 / 训练

| 项目 | Stars | 说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 72,317（+660 今日） | 两小时从零训练 64M 小模型，同时登榜热榜与 llm-model 主题，是"人人可训模型"叙事的持续爆款。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 188,343 | 本地模型运行时事实标准，已覆盖 Kimi/GLM/MiniMax/DeepSeek/gpt-oss/Qwen/Gemma，端侧生态的入口枢纽。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 169,316 | 多模态模型定义框架，生态底座，稳定性极高。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 109,170 | PyTorch 从零实现 ChatGPT 级 LLM，教学型常青树。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,653 | 覆盖 100+ 数据集的 LLM 评测平台（含长上下文/安全），模型选型刚需工具。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 9,295 | Rust 构建模块化可扩展 LLM 应用，Rust 正进入 Agent 应用开发栈。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 5,815 | 在 Apple Silicon 上手写 mini-vLLM + Qwen 推理系统，系统工程师向的深度教程。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) / [pytorch/pytorch](https://github.com/pytorch/pytorch) | 201,729 / 105,694 | 训练框架双巨头，作为底座保持高关注但无新增爆发。 |

### 🔍 RAG / 知识库 / 上下文工程

| 项目 | Stars | 说明 |
|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 154,343 | 将代码库+文档+SQL schema+PDF 转为可查询知识图谱，AST 确定性解析、每条边可解释、无需向量库——"向量检索之外的第二条路"。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 120,264 | 跨会话持久上下文：捕获 Agent 全过程、压缩后回注，覆盖 Claude Code/Codex/Gemini/Copilot/OpenCode。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 94,846 | 从 RAG 引擎演化为"agent-native 数据库 + 上下文基础设施"。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 42,954 | 自演进上下文数据库，统一 Agent 记忆/知识 RAG/技能，字节系官方出品。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 33,679 | 开源 AI 记忆平台，用小模型实现 Agent 长期记忆，主打低成本本地化。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 40,824 | 无向量的推理式 RAG 文档索引，与 graphify 同属"去向量库"阵营。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 13,844 | MLSys 2026 最佳论文，97% 存储节省的个人设备私有 RAG。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 12,740 | 面向 Claude Code 的代码搜索 MCP，把整个代码库变成编码 Agent 的上下文。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) / [qdrant/qdrant](https://github.com/qdrant/qdrant) / [milvus-io/milvus](https://github.com/milvus-io/milvus) | 60,029 / 35,749 / 46,753 | 检索与向量存储三巨头，成熟基础设施层保持稳定关注。 |

---

## 3. 趋势信号分析

**第一，爆发点已从"模型"彻底迁移到"技能（Skills）与工具协议"。** 今日热榜 16 席中有 6 席是 Agent 技能包或插件规范（Claude-BugHunter +1608、superpowers +922、diagram-design +725、last30days-skill +675、stitch-skills +311、cursor/plugins +243），合计新增 stars 超过 4700，占热榜新增量的三分之一以上。更关键的是这些项目形态各异却遵循同一套"Agent Skills 开放标准"，说明社区正在自发形成**跨厂商的技能互操作规范**——Google 官方出 stitch-skills、Cursor 官方出 plugins 规范，即是这一规范从民间走向厂商标准的最强证据。

**第二，"Agent-Native 基础设施"开始争夺下一层抽象。** CLI-Anything（+666）与 headroom（token 压缩）、graphify（知识图谱）、claude-mem（跨会话记忆）共同指向一个判断：Agent 上层应用的差异化不再来自模型调用方式，而来自**上下文供给、工具可调用性与成本控制**这三块地基。

**第三，新兴方向首次集中登榜。** 一是"Agent 的 Web/本地感知层"（last30days-skill、firecrawl、Agent-Reach 的 11.5 万 stars、crawl4ai 的 8.8 万 stars）；二是**Rust 技术栈进入 Agent 应用层**（Codewhale、rig、oh-my-pi、meilisearch、qdrant、lancedb）；三是**Agent 化垂直应用进入消费市场**（autoclip +718、MoneyPrinterTurbo 14.6 万 stars、ppt-master 8 万 stars），不再局限于开发者工具。

**第四，与近期行业事件关联明显。** MiniMind（+660）与 Ollama（18.8 万 stars）呼应开源小模型本地化浪潮与国产模型（DeepSeek/MiniMax/Qwen/GLM）密集发布；OpenViking（字节）、QwenPaw（阿里）、Cursor plugins、stitch-skills（Google）显示大厂正把 Agent 生态作为应用层入口争夺；app-store-compliance 追踪 EU AI Act、DSA 等合规节点，说明监管合规正被 Agent 工具化为一等公民能力。

---

## 4. 社区关注热点

- **🔗 [obra/superpowers](https://github.com/obra/superpowers)（+922）与 [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)（+311）——Agent Skills 正在成为跨厂商通用层。** 一个是民间方法论框架，一个是 Google 官方技能库，二者同日登榜，说明"技能包"已从插件玩法升级为可移植的工程资产。现在开始按标准组织自己的 Skill，是最低成本的生态站位。

- **🛠️ [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)（+666）——Agent-Native 的工具协议层。** 把任意软件转为 Agent 可调用的接口，是 MCP 之后的自然延伸，也是所有 Agent 应用绕不开的入口层，值得优先阅读其接口设计。

- **🧠 [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)（15.4 万）与 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)（4.1 万）——"去向量库"的上下文工程路线。** AST 确定性解析、可解释知识图谱、推理式索引，均在挑战 Embedding + ANN 的默认范式；对代码库理解、长文档问答等场景，这可能是比向量检索更稳的路线。

- **💸 [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)（8.1 万）与 [caveman](https://github.com/JuliusBrussee/caveman)（12.3 万）——token 成本优化正成为独立品类。** 上下文压缩 + 本地代理 + 可还原的裁剪，直接对应 Agent 的真实账单痛点，是最容易被企业买单的层。

- **🎬 [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)（+718）与 [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)（14.6 万）——本地优先的 AI 内容生产。** 一键出片、字幕/封面/文案自动生成，零订阅、开源可改；叠加 [ppt-master](https://github.com/hugohe3/ppt-master)（8 万）可见，AI 应用层的爆发重心正从"开发者工具"外溢到"创作者生产力"。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
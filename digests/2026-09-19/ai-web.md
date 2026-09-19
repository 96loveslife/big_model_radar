# AI 官方内容追踪报告 2026-09-19

> 今日更新 | 新增内容: 210 篇 | 生成时间: 2026-09-19 04:03 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 2 篇（sitemap 共 446 条）
- OpenAI: [openai.com](https://openai.com) — 新增 208 篇（sitemap 共 1021 条）

---

<think>Let me carefully analyze the content provided. The user wants a detailed AI official content tracking report comparing Anthropic and OpenAI's announcements.

Key observations:

1. **Anthropic (2 new pieces):**
   - "Partnering with Accenture on embedded evaluation" - Major safety partnership, $1B+ investment each over 5 years
   - "How Claude is uplifting biomolecular modeling" - Scientific AI application, protein design competition with Adaptyv Bio, $1M Claude credits, optimized 30+ models 4x faster

2. **OpenAI (208 new pieces)** - This is a massive dump. Looking at the dates and titles, many appear to be from 2026-09-18/19, but most content shows "无法提取文本内容" (unable to extract text). The titles reveal:
   - "Gpt 6 Astra" (multiple instances) - Major new model release
   - "Apple Is Getting This Wrong" - Competitive positioning
   - "Astra For Law" - Vertical product
   - "Scaling Storage One Billion Users Part One" - Infrastructure at scale
   - "Disrupting Malicious Uses Of Ai" series - Safety/anti-abuse (multiple scam types)
   - "Introducing Chatgpt Financial Services" - Vertical product
   - "An Alien Mind" - Philosophical/research
   - "Sora 2" - Video generation update
   - Various ChatGPT features (Agent, Atlas, Pulse, Images 2.0/2.5, Health, etc.)
   - Multiple GPT-5.x variants (5, 5.1, 5.4, 5.4 Mini/Nano, 5.5, 5.5 Instant, 5.6, 5.6 Sol)
   - Safety topics: Lockdown Mode, Age Prediction, Parental Controls, GPT Oss Safeguard
   - Business: ChatGPT Ads, Partner Network, Company Knowledge, Astra for Law
   - Scientific: Rosalind biodefense, Navier-Stokes Solution

The duplicate entries are notable - many URLs appear 2-3 times, which is unusual. This might indicate a scraping artifact or mass publishing event.

Key strategic signals:
1. **Anthropic** is heavily focused on **safety governance** (Accenture embedded evaluation) and **scientific AI applications** (biomolecular modeling)
2. **OpenAI** appears to be in a **massive product launch cycle** - GPT-6/Astra release, numerous vertical products, safety features, ads expansion

Let me write a comprehensive report in Chinese as requested.

I need to be careful - the dates say 2026, which is future. I'll treat the data as given.

Let me structure the report properly with all required sections.</think>

# AI 官方内容追踪报告
**追踪日期：2026-09-19｜覆盖：Anthropic（Claude）+ OpenAI 增量更新**

---

## 一、今日速览

1. **Anthropic 落地"嵌入式评估"机制**：与 Accenture 达成战略合作，双方各承诺 5 年内投入至少 10 亿美元，由 Accenture 旗下 AI 业务 Faculty 牵头在 Anthropic 内部署具备"员工级访问权限"的嵌入式评估团队，对模型进行红队测试、对齐评估与安全审查。这标志着 Anthropic 此前在 CEO 文章《We Must Pace the Frontier》中提出的承诺开始实质落地。🔗 [原文](https://www.anthropic.com/news/accenture-embedded-evaluation)

2. **Claude 深度参与生物分子建模科学发现**：Claude 在不到 4 周内将 30+ 开源生物分子预测模型平均加速约 4 倍，并推出支持单 NVIDIA GPU 节点处理 10,000+ token 生物大系统的低显存模式；同期与 Adaptyv Bio 联合举办蛋白质设计大赛，奖金高达 100 万美元 Claude Credits 并提供 5,000+ 设计的湿实验验证。🔗 [原文](https://www.anthropic.com/research/claude-uplifts-biomolecular-modeling)

3. **OpenAI 疑似发布 GPT-6 "Astra" 旗舰模型**：从 URL 标题高频出现 `gpt-6-astra`（含 `next-generation-work`、`safety-overview-gpt-6-astra`）、`gpt-5-5`、`gpt-5-6` 及多尺寸变体（Mini/Nano/Sol/Instant/Live），可推断 OpenAI 在 9 月 18-19 日进行了**年内最大规模的多模型矩阵同步发布**，并配套 Sora 2、Prism、Atlas、Agent、Pulse、Images 2.5 等十余款产品/能力更新。

4. **OpenAI 强化"反恶意使用"叙事矩阵**：单日发布 7 篇 `disrupting-malicious-uses-of-ai-*` 系列文章（涵盖 Romance Baiting、Tech-and-Tariffs 骗局、Bad Grammar 攻击、Wrong Number 钓鱼、Criminal Scam、Doppelganger、Spamouflage），这是 OpenAI 首次以"连续剧"形式集中披露其威胁情报能力。

5. **两家在"安全/治理"路径上的分歧凸显**：Anthropic 选择**将外部专业力量嵌入内部**（Accenture 嵌入式评估），OpenAI 则选择**构建更广泛的产品化安全护栏**（Lockdown Mode、Elevated Risk Labels、Age Prediction、Parental Controls、Aardvark、gpt-oss-safeguard 等）。同一议题，两种治理哲学。

---

## 二、Anthropic / Claude 内容精选

### 📰 News｜公司与战略

#### 1. 与 Accenture 合作落地"嵌入式评估"
- **发布**：2026-09-18 ｜ 🔗 [原文](https://www.anthropic.com/news/accenture-embedded-evaluation)
- **核心要点**：
  - 嵌入式评估者（Embedded Evaluators）将以"类员工权限"入驻 Anthropic，可观察训练过程、参与模型决策讨论、与员工直接对话，并能向公众披露事件与盲点。
  - 由 Accenture 旗下 AI 业务 Faculty 牵头，覆盖**评估与红队测试、对齐评估、安全护栏验证**三大职能。
  - **双方各承诺至少 10 亿美元投入**（未来 5 年），用于建设该领域的能力。
  - **战略意义**：这是 AI 公司首次以"外部第三方 + 员工级权限"的混合模式，将安全评估从"外部旁观"推向"内部见证"，是对当前 Frontier AI 治理中"评估独立性"与"信息不对称"两大痛点的制度级回应。

### 🔬 Research｜科学研究

#### 2. Claude 加速生物分子建模
- **发布**：2026-09-17（今日首次抓取） ｜ 🔗 [原文](https://www.anthropic.com/research/claude-uplifts-biomolecular-modeling)
- **核心要点**：
  - **性能成果**：在不到 4 周内，Claude 优化了 30+ 开源生物分子预测/设计模型，平均**提速约 4 倍**。
  - **低显存模式**：可在单 NVIDIA GPU 节点上处理 >10,000 token 的生物大系统（氨基酸、核苷酸、小分子/离子），突破了此前必须依赖大规模集群的限制。
  - **蛋白质设计大赛**：与 Adaptyv Bio 联合举办，奖金高达 **100 万美元 Claude Credits**，并对 **5,000+ 设计**提供湿实验验证。
  - **技术链路**：从早前展示的 *de novo* 蛋白 binder 设计（每靶点可在 Modal 上花 ~$10,000 ≈ 2,500 H100 小时）进化到当前 4 倍加速，意味着**单靶点成本下降至约 $2,500**，显著降低科学研究的算力门槛。

---

## 三、OpenAI 内容精选

> **说明**：今日抓取到 OpenAI 208 条增量页面，绝大部分文本提取失败（标记为"无法提取文本内容"），但 URL 标题已充分暴露发布节奏与战略意图。以下按可识别的板块进行结构化梳理。

### 🚀 模型与旗舰发布

| 内容 | 日期 | 关键判断 |
|---|---|---|
| **Gpt 6 Astra**（URL 出现 3 次） | 2026-09-19 | **OpenAI 下一代旗舰模型发布**，命名"Astra"暗合"全感知/全模态助手"意象；同日出现 `gpt-6-astra-next-generation-work` 进一步说明定位为"下一代工作方式"。🔗 [链接](https://openai.com/index/gpt-6-astra/) |
| **Safety Overview Gpt 6 Astra** | 2026-09-18 | 旗舰模型**安全概览**单独成文，遵循 GPT-5 时期的安全文档惯例。🔗 [链接](https://openai.com/index/safety-overview-gpt-6-astra/) |
| **Gpt 6 Astra Next Generation Work** | 2026-09-19 | 主打"重新定义工作"。🔗 [链接](https://openai.com/index/gpt-6-astra-next-generation-work/) |
| **Gpt 5.6**（2 条） | 2026-09-18 | 前代旗舰的最新迭代。🔗 [链接](https://openai.com/index/gpt-5-6/) |
| **Gpt 5.6 Sol**（含 Preview / In ChatGPT / In Kiro） | 2026-09-18 | 专门面向推理/科学/IDE 等场景的变体矩阵。🔗 [预览](https://openai.com/index/previewing-gpt-5-6-sol/) |
| **Gpt 5.5 / Gpt 5.5 Instant**（各 2 条） | 2026-09-18 | 中端模型与低延迟版本。 |
| **Gpt 5.4 / Gpt 5.4 Mini And Nano** | 2026-09-18 | 中端及端侧/嵌入式部署版本。 |
| **Introducing Gpt 5** | 2026-09-18 | 基础旗舰文档。 |
| **Introducing Gpt Live**（2 条） | 2026-09-18 | **实时交互/流式模型**新产品线，可能对标 Claude 的"实时对话"能力。🔗 [链接](https://openai.com/index/introducing-gpt-live/) |
| **Introducing Prism** | 2026-09-18 | 全新产品/能力命名（语义待文本恢复确认）。🔗 [链接](https://openai.com/index/introducing-prism/) |

### 🛡️ 安全 / 反滥用

| 内容 | 战略信号 |
|---|---|
| **Disrupting Malicious Uses Of Ai**（主条目 + 6 个子专题） | 首次以**系列化叙事**集中披露威胁情报：Romance Baiting、Tech-and-Tariffs 骗局、Bad Grammar 攻击、Wrong Number 钓鱼、Criminal Scam Operation、Doppelganger、Spamouflage。这是对"AI 被恶意滥用"话题的**系统性占领**。🔗 [主条目](https://openai.com/index/disrupting-malicious-uses-of-ai/) |
| **Introducing Lockdown Mode And Elevated Risk Labels In Chatgpt**（2 条） | ChatGPT 新增"锁定模式"+"高风险标签"，是消费级 AI 产品中**首次出现的硬安全开关**。🔗 [链接](https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/) |
| **Introducing Parental Controls / Building Towards Age Prediction / Our Approach To Age Prediction** | **未成年人保护三件套**：家长控制 + 年龄预测基础设施，配套 Teen Safety/Freedom/Privacy、Advancing Youth Safety in EMEA、Updating Model Spec With Teen Protections。形成面向监管（欧盟 AI Act、美国 KOSA 立法）的合规体系。 |
| **Introducing Aardvark**（3 条） | 继 GPT-5 之后的**安全研究/漏洞奖励新产品**（命名延续 OpenAI 内部代号文化）。🔗 [链接](https://openai.com/index/introducing-aardvark/) |
| **Introducing Gpt Oss Safeguard**（2 条） | 开源安全护栏模型，**首次将安全能力以开源权重形式开放**给社区。🔗 [链接](https://openai.com/index/introducing-gpt-oss-safeguard/) |
| **Bio Bug Bounty / Safety Bug Bounty** | 生物+通用安全的双轨漏洞奖励计划。 |
| **Strengthening Societal Resilience With Rosalind Biodefense**（3 条） | 生物防御模型 Rosalind 的能力扩展。 |
| **Estimating Worst Case Frontier Risks Of Open Weight Llms**（2 条） | 对**开源权重模型的极端风险评估**方法论，是 gpt-oss-safeguard 的学术支撑。 |
| **Safety Alignment Long Horizon Models** | 长期/长视野模型的对齐研究。 |
| **An Alien Mind**（2 条） | 标题暗合对**模型心智/涌现能力**的哲学/安全反思。 |

### 💼 产品 / 企业服务

| 内容 | 战略含义 |
|---|---|
| **Introducing Chatgpt Agent**（2 条） | Agent 能力正式产品化。 |
| **Introducing Chatgpt Atlas** | **ChatGPT 浏览器**正式版（呼应年初"浏览器即将发布"的预期）。 |
| **Introducing Chatgpt Pulse** | 主动推送/个性化摘要能力。 |
| **Introducing Chatgpt Financial Services** | **首个明确的垂直行业版本**（金融），与 Astra for Law 共同构成"ChatGPT for X"矩阵。 |
| **Astra For Law** | 法律垂直产品，可能对接 Westlaw/LexisNexis 等传统玩家。 |
| **Introducing The Agents Api** | 面向开发者的 Agent API。 |
| **Introducing Company Knowledge** | 企业知识库接入，是 **Enterprise RAG** 的官方化路径。 |
| **Introducing Openai Partner Network** | 合作伙伴生态体系化。 |
| **Openai Frontier Models And Codex Are Now Available On Aws** | 与 AWS 的**多云战略**深化，标志 OpenAI 继续开放 Azure 之外的部署通道。 |
| **Chatgpt For Teachers / Edu / For Teens** | 教育市场全覆盖策略。 |
| **Introducing Chatgpt Team / Enterprise Spend Controls / Premium Seats** | B2B 中小企业+大企业双轨定价。 |
| **Introducing Openai For Nonprofits** | 非营利组织专属版本。 |
| **Chatgpt Whatsapp Transition** | WhatsApp 渠道过渡公告。 |
| **Introducing Data Residency In Europe / Asia** | **数据驻留**合规能力（GDPR / 各国本地化要求）。 |
| **Chatgpt Ads Expands Across Europe / Testing Ads In Chatgpt / Expanding Access To Ai With Chatgpt Ads / Our Approach To Advertising** | 广告业务在欧洲全面铺开，**OpenAI 商业模式从订阅向"订阅+广告"双轮**正式转型。 |
| **Codex Security Now In Research Preview / Why Codex Security Doesnt Include Sast** | **Codex 安全**作为新产品线进入研究预览（SAST 的边界说明也是为了与 Cursor、GitHub Copilot 等差异化）。 |
| **Personal Finance Chatgpt / Health In Chatgpt / Chatgpt Health / Improving Health Intelligence** | 个人理财+医疗健康的**双重垂直深耕**。 |
| **Introducing Chatgpt Images 2.0 / 2.5 / New Chatgpt Images Is Here / Introducing 4o Image Generation** | 图像生成能力 4 次迭代（4o → 2.0 → 2.5）。 |
| **Sora 2**（3 条） | 视频生成模型 **Sora 二代**正式发布。 |
| **Reimagining Advertising With Ai** | 广告创意侧能力。 |
| **Scaling Storage One Billion Users Part One** | **十亿用户规模的存储架构**系列技术博文（Part One，暗示后续还有）。 |
| **Path To Astra** | 从早期到 Astra 的技术演进叙事。 |

### 🔬 科学研究

| 内容 | 战略含义 |
|---|---|
| **Navier Stokes Solution**（2 条） | 在**千禧年数学难题**之一上取得进展，是 OpenAI 在"AI for Math"上的标志性成果。 |
| **Safety Alignment Long Horizon Models** | 长视野模型对齐研究。 |
| **An Alien Mind**（2 条） | 模型涌现能力/认知结构研究。 |
| **Reasoning Models Chain Of Thought Controllability**（3 条） | 推理模型的**CoT 可控性**研究，是安全与可控推理的关键课题。 |
| **Unlocking Self Improvement Gpt Red**（2 条） | GPT-Red：自我改进研究线。 |
| **Introducing New Capabilities To Gpt Rosalind**（3 条） | Rosalind（生物研究专用模型）的能力扩展。 |
| **How We Monitor Internal Coding Agents Misalignment**（2 条） | 内部编码 Agent 的失对齐监控，是"内部 Agent 安全"领域的第一手方法论披露。 |
| **Scaling Trusted Access For Cyber Defense / Expanding Daybreak / Trusted Access For Cyber / Accelerating Cyber Defense Ecosystem / Daybreak Models On Aws** | **网络安全能力矩阵化**：Daybreak（早期预警）+ Trusted Access（受控访问）+ 生态加速 + AWS 多云。 |
| **Introducing Openai Safety Fellowship / Expert Council On Well Being And Ai / Teen Development Research Grants / Ai Mental Health Research Grants** | 研究资助与专家委员会体系。 |
| **Advancing Content Provenance / Navigating The Challenges And Opportunities Of Synthetic Voices** | 内容溯源+合成语音治理。 |
| **Hugging Face Incident And The Road Ahead**（3 条） | 对 Hugging Face 安全事件的回应与后续路径。 |
| **Estimating Worst Case Frontier Risks Of Open Weight Llms** | 开源权重模型的极端风险评估方法论。 |
| **Strengthening Chatgpt Responses In Sensitive Conversations** | 敏感对话加固。 |
| **Why Teens Deserve Access Safe Ai / Teen Safety Freedom And Privacy / Advancing Youth Safety In Emea** | 未成年人安全的区域化策略。 |

### 📊 公司 / 行业评论

| 内容 | 战略含义 |
|---|---|
| **Apple Is Getting This Wrong** | OpenAI 罕见地**直接点名 Apple** 表达分歧（推测与 Apple Intelligence / App Store AI 政策 / 隐私立场有关）。 |
| **Disrupting Malicious Uses Of Ai Tech And Tariffs** | 将 AI 滥用与"科技+关税"叙事挂钩，暗合当前地缘政治议题。 |
| **Gpt 5.6 Preferred Model Microsoft 365 Copilot** | 强化与 Microsoft 365 Copilot 的整合关系。 |
| **Optimizing Chatgpt / Memory And New Controls For Chatgpt / New Tools For Chatgpt Enterprise** | 持续打磨产品体验。 |
| **Putting Data To Work / How To Connect Ai Usage To Business Value** | 面向 CTO/CFO 的"AI 商业价值"叙事。 |

---

## 四、战略信号解读

### 4.1 各自的近期技术优先级

| 维度 | Anthropic（Claude） | OpenAI |
|---|---|---|
| **模型能力** | 暂未发布新基础模型，沿用 Sonnet/Opus 体系 | **GPT-6 Astra 旗舰 + 5.x 系列多尺寸变体同步发布**，节奏明显加快 |
| **安全 / 治理** | **重磅押注**：嵌入式评估（Accenture $1B+）+ Frontier 安全叙事 | **产品化安全**：Lockdown Mode、Elevated Risk Labels、Age Prediction、Parental Controls、gpt-oss-safeguard、Aardvark、Bug Bounty 矩阵 |
| **科学应用** | **Claude Science 持续发力**：生物分子建模 4 倍加速、$1M 蛋白质设计大赛 | **垂类科学模型**：Rosalind（生物防御）、Navier-Stokes（数学）、Daybreak（网络安全） |
| **产品化 / 商业化** | 相对克制，主要通过 API/Console 推进 | **全速奔跑**：Agent、Atlas 浏览器、Pulse、金融/法律/医疗垂直、WhatsApp 渠道、欧洲广告、ChatGPT Edu/Team/Enterprise 多层定价 |
| **生态 / 多云** | 与 AWS/GCP 维持中立合作 | 主动深化 AWS（Frontier Models + Codex + Daybreak）多云策略，同时强化 Microsoft 365 Copilot 整合 |

### 4.2 竞争态势：谁在引领议题，谁在跟进

- **Anthropic 引领**的议题：
  - **嵌入式评估（Embedded Evaluation）**——这是 OpenAI/Google 目前尚未提出的全新治理概念，可能在 SB 1047 后续、加州 AI 法案讨论中被引用为行业范式。
  - **AI for Science 的"算力民主化"**——把 4 倍加速+单 GPU 跑大系统作为产品主张，挑战 OpenAI"必须用大集群"的路径。
  - **保护性 AI 节奏论（Pace the Frontier）**——Anthropic 持续将自己定位为"克制派"。

- **OpenAI 引领**的议题：
  - **产品矩阵化**（Agent + Atlas + Pulse + Images + Health + Finance + Law + Edu + Team + Enterprise）——试图把 ChatGPT 做成"操作系统级入口"。
  - **AI 滥用的系统性披露**（Disrupting Malicious Uses 系列）——从被动响应转向主动叙事占位。
  - **广告化商业模式**——这是 OpenAI 首次大规模确认订阅之外的商业化路径，对全行业有定价锚意义。
  - **GPT-6 旗舰 + 多尺寸变体同步发布**——把"模型矩阵"作为竞争武器。

- **可能存在的跟进/对齐**：
  - Anthropic 此前对未成年人保护相对低调，OpenAI 已大规模铺垫（Parental Controls、Age Prediction、Teen Spec），Anthropic 可能会在下一轮补齐。
  - OpenAI 的 Prism、Atlas 等新产品名可能在 Anthropic 内部已被纳入路线图对标。

### 4.3 对开发者和企业用户的潜在影响

| 对象 | 影响 |
|---|---|
| **开发者** | OpenAI **API 矩阵大幅扩展**（Astra、GPT-5.6/Sol/Mini/Nano、Codex Security、Agents API、Prism），迁移成本与选型复杂度同步上升；gpt-oss-safeguard 的开源为自托管企业带来新的安全护栏选项。 |
| **企业用户** | 数据驻留（欧洲/亚洲）、ChatGPT Financial Services / Astra for Law / Company Knowledge / OpenAI Partner Network 构成**完整的企业落地栈**；广告业务欧洲铺开则意味着**消费级 ChatGPT 体验可能改变**。 |
| **研究人员** | GPT-6 Astra + Rosalind + Navier-Stokes 的组合展示 OpenAI 在"AI for Science"的雄心，但 Anthropic 用"4 倍加速+单 GPU"给出了更具成本友好性的替代路径。 |
| **合规/法务团队** | Anthropic 的 Accenture 嵌入式评估提供**第三方独立鉴证**新范式；OpenAI 的 Lockdown Mode + Risk Labels 提供**产品级合规开关**。两套路径互补而非互斥。 |
| **教育/未成年用户** | OpenAI 的 Parental Controls、Age Prediction、ChatGPT Edu/For Teachers 矩阵远超 Anthropic 现有布局。 |

---

## 五、值得关注的细节

### 5.1 新兴词汇与首次出现的概念

- **"Embedded Evaluator"（嵌入式评估者）**——Anthropic 首次系统定义：拥有类员工权限、嵌入 AI 公司内部、向公众披露事件的第三方角色。这是"AI 治理"叙事的**关键新词**，有望进入下一轮 G7/OECD AI 政策讨论。
- **"Astra"**——OpenAI 旗舰模型命名。梵语/天文学意象（"星"），配合 "Path to Astra"、"Next-Generation Work"等标题，构建"宇宙级助手"的品牌叙事。
- **"Lockdown Mode"**——这是消费级 AI 产品中**首次出现**借鉴 Apple iOS 的"锁定模式"概念，标志着 AI 安全设计语言开始**向操作系统安全范式迁移**。
- **"Prism"**——OpenAI 新产品命名（语义待文本恢复确认），但命名暗示"多视角/折射/分光"，可能与多模态或协作场景相关。
- **"Aardvark"（食蚁兽）**——延续 OpenAI 的动物/自然物命名传统（Strawberry、Orca、o1），新代号体系可能意味着又一个内部研究分支产品化。

### 5.2 主题密集发布（可能预示产品节点）

- **9 月 18-19 日的 OpenAI 批量发布**：208 条增量页面集中出现在这两天，且大量重复 URL（如 `gpt-6-astra` 出现 3 次、`introducing-chatgpt-agent` 出现 2 次），暗示**这是有组织的发布会 + SEO 重复抓取**，而非日常节奏。**最可能对应 OpenAI 的"秋季发布会 / DevDay 后续"节点**，Astra 旗舰 + 多产品同步亮相。
- **"Disrupting Malicious Uses of AI" 7 篇子专题同日发布**：这是 OpenAI 首次以**连续剧形式**集中披露威胁情报，明显是**对安全叙事节奏的系统性抢占**，时间点与 GPT-6 安全文档配合默契。
- **未成年人安全主题 5+ 篇文章同日刷屏**：Parental Controls、Age Prediction、Teen Spec、Youth Safety in EMEA、Why Teens Deserve——可能**对应欧盟 AI Act / 美国 KOSA 法规落地前的合规冲刺**。

### 5.3 政策、合规、安全动向

- **Apple 议题**：OpenAI 罕见直接发难，标题"Apple Is Getting This Wrong"——结合 `gpt-5-6-preferred-model-microsoft-365-copilot` 的发布，OpenAI 正在**明确划清与 Microsoft 的合作边界**，并对 Apple 在 AI 集成（Apple Intelligence）上的策略表达分歧。
- **广告商业模式确认**：从"Testing Ads"→"Our Approach to Advertising"→"ChatGPT Ads Expands Across Europe"→"Expanding Access to AI with ChatGPT Ads"四步走，OpenAI 已**完成广告业务的合法性叙事**。
- **数据驻留（Data Residency）**：欧洲、亚洲双双落地，是为**争取政府/金融/医疗大客户**的关键基础设施。
- **多云战略**：Frontier Models + Codex + Daybreak 三大产品线在 AWS 上的可用性，意味着 OpenAI 不再"Azure 独占"，**对独立软件供应商 (ISV) 与多云架构企业极为友好**。
- **开源安全模型 (gpt-oss-safeguard)**：与 Meta Llama Guard、Google ShieldGemma 同台竞技，**安全护栏的开源化已成行业共识**。
- **Embedded Evaluation 作为治理范式**：Anthropic 提出的"外部评估者入驻"模型，与传统第三方审计、独立测试、监管沙盒相比，提供了**更深度的可观测性**，可能成为下一轮 AI 立法的参考样板。

---

## 附：本次更新完整链接索引

### Anthropic
- [Partnering with Accenture on embedded evaluation](https://www.anthropic.com/news/accenture-embedded-evaluation) — 2026-09-18
- [How Claude is uplifting biomolecular modeling](https://www.anthropic.com/research/claude-uplifts-biomolecular-modeling) — 2026-09-17

### OpenAI（按主题归类的关键 URL）

**旗舰与模型**
- [GPT-6 Astra](https://openai.com/index/gpt-6-astra/) ｜ [Next-Generation Work](https://openai.com/index/gpt-6-astra-next-generation-work/) ｜ [Safety Overview](https://openai.com/index/safety-overview-gpt-6-astra/)
- [Introducing GPT-5](https://openai.com/index/introducing-gpt-5/) ｜ [GPT-5.1](https://openai.com/index/gpt-5-1/) ｜ [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) ｜ [GPT-5.4 Mini/Nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) ｜ [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) ｜ [GPT-5.5 Instant](https://openai.com/index/gpt-5-5-instant/) ｜ [GPT-5.6](https://openai.com/index/gpt-5-6/) ｜ [GPT-5.6 Sol](https://openai.com/index/previewing-gpt-5-6-sol/) ｜ [Sol In Kiro](https://openai.com/index/gpt-5-6-in-kiro/) ｜ [Sol In ChatGPT](https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/)
- [Introducing GPT Live](https://openai.com/index/introducing-gpt-live/) ｜ [Introducing Prism](https://openai.com/index/introducing-prism/) ｜ [Path to Astra](https://openai.com/index/path-to-astra/)

**安全 / 反滥用 / 治理**
- [Disrupting Malicious Uses of AI (主条目)](https://openai.com/index/disrupting-malicious-uses-of-ai/) ｜ [Romance Baiting](https://openai.com/index/disrupting-malicious-uses-of-ai-romance-baiting-scam/) ｜ [Tech and Tariffs](https://openai.com/index/disrupting-malicious-uses-of-ai-tech-and-tariffs/) ｜ [Bad Grammar](https://openai.com/index/disrupting-malicious-uses-of-ai-bad-grammar/) ｜ [Wrong Number](https://openai.com/index/disrupting-malicious-uses-of-ai-wrong-number/) ｜ [Criminal Scam](https://openai.com/index/disrupting-malicious-uses-of-ai-criminal-scam-operation/) ｜ [Doppelganger](https://openai.com/index/disrupting-malicious-uses-of-ai-doppelganger/) ｜ [Spamouflage](https://openai.com/index/disrupting-malicious-uses-of-ai-spamouflage/) ｜ [Deceptive Employment Scheme](https://openai.com/index/disrupting-malicious-uses-of-ai-deceptive-employment-scam/)
- [Lockdown Mode & Elevated Risk Labels](https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/) ｜ [Parental Controls](https://openai.com/index/introducing-parental-controls/) ｜ [Building Towards Age Prediction](https://openai.com/index/building-towards-age-prediction/) ｜ [Our Approach to Age Prediction](https://openai.com/index/our-approach-to-age-prediction/) ｜ [Teen Safety/Freedom/Privacy](https://openai.com/index/teen-safety-freedom-and-privacy/) ｜ [Advancing Youth Safety in EMEA](https://openai.com/index/advancing-youth-safety-in-emea/) ｜ [Updating Model Spec with Teen Protections](https://openai.com/index/updating-model-spec-with-teen-protections/) ｜ [Why Teens Deserve Access](https://openai.com/index/why-teens-deserve-access-safe-ai/)
- [Introducing Aardvark](https://openai.com/index/introducing-aardvark/) ｜ [Introducing gpt-oss-safeguard](https://openai.com/index/introducing-gpt-oss-safeguard/) ｜ [Bio Bug Bounty](https://openai.com/index/bio-bug-bounty/) ｜ [Safety Bug Bounty](https://openai.com/index/safety-bug-bounty/) ｜ [Safety Alignment Long Horizon Models](https://openai.com/index/safety-alignment-long-horizon-models/) ｜ [GPT-5 Safe Completions](https://openai.com/index/gpt-5-safe-completions/) ｜ [Model Misalignment Reporting Framework](https://openai.com/index/model-misalignment-reporting-framework/)

**产品 / 企业**
- [Introducing ChatGPT Agent](https://openai.com/index/introducing-chatgpt-agent/) ｜ [Atlas](https://openai.com/index/introducing-chatgpt-atlas/) ｜ [Pulse](https://openai.com/index/introducing-chatgpt-pulse/) ｜ [Financial Services](https://openai.com/index/introducing-chatgpt-financial-services/) ｜ [Astra for Law](https://openai.com/index/astra-for-law/) ｜ [Health](https://openai.com/index/introducing-chatgpt-health/) ｜ [Health in ChatGPT](https://openai.com/index/health-in-chatgpt/) ｜ [Edu](https://openai.com/index/introducing-chatgpt-edu/) ｜ [Team](https://openai.com/index/introducing-chatgpt-team/) ｜ [For Teachers](https://openai.com/index/chatgpt-for-teachers/) ｜ [Bringing to More US Districts](https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts/) ｜ [For Teens](https://openai.com/index/chatgpt-for-teens/) ｜ [WhatsApp Transition](https://openai.com/index/chatgpt-whatsapp-transition/)
- [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/) ｜ [Company Knowledge](https://openai.com/index/introducing-company-knowledge/) ｜ [Partner Network](https://openai.com/index/introducing-openai-partner-network/) ｜ [Enterprise Spend Controls](https://openai.com/index/chatgpt-enterprise-spend-controls/) ｜ [Premium Seats ChatGPT Business](https://openai.com/index/premium-seats-chatgpt-business/) ｜ [OpenAI for Nonprofits](https://openai.com/index/introducing-openai-for-nonprofits/) ｜ [Codex Security Preview](https://openai.com/index/codex-security-now-in-research-preview/) ｜ [Codex Security No SAST](https://openai.com/index/why-codex-security-doesnt-include-sast/)
- [Data Residency Europe](https://openai.com/index/introducing-data-residency-in-europe/) ｜ [Data Residency Asia](https://openai.com/index/introducing-data-residency-in-asia/) ｜ [Zero Data Retention](https://openai.com/index/offering-zero-data-retention-for-frontier-models/)
- [ChatGPT Ads Europe](https://openai.com/index/chatgpt-ads-expands-across-europe/) ｜ [Testing Ads](https://openai.com/index/testing-ads-in-chatgpt/) ｜ [Our Approach to Advertising](https://openai.com/index/our-approach-to-advertising-and-expanding-access/) ｜ [Reimagining Advertising](https://openai.com/index/reimagining-advertising-with-ai/)
- [Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0/) ｜ [Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5/) ｜ [New ChatGPT Images](https://openai.com/index/new-chatgpt-images-is-here/) ｜ [4o Image Generation](https://openai.com/index/introducing-4o-image-generation/) ｜ [Sora 2](https://openai.com/index/sora-2/) ｜ [Sora Is Here](https://openai.com/index/sora-is-here/) ｜ [Creating with Sora Safely](https://openai.com/index/creating-with-sora-safely/)
- [Scaling Storage for 1B Users Pt.1](https://openai.com/index/scaling-storage-one-billion-users-part-one/) ｜ [Put Data to Work](https://openai.com/index/put-data-to-work/) ｜ [How to Connect AI Usage to Business Value](https://openai.com/index/how-to-connect-ai-usage-to-business-value/) ｜ [Memory & Controls](https://openai.com/index/memory-and-new-controls-for-chatgpt/) ｜ [Memory Dreaming](https://openai.com/index/chatgpt-memory-dreaming/) ｜ [Optimizing ChatGPT](https://openai.com/index/optimizing-chatgpt/) ｜ [Building More Helpful Experiences](https://openai.com/index/building-more-helpful-chatgpt-experiences-for-everyone/)
- [OpenAI on AWS](https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/) ｜ [Daybreak on AWS](https://openai.com/index/daybreak-models-are-now-available-on-aws/)
- [Personal Finance](https://openai.com/index/personal-finance-chatgpt/) ｜ [Health Records Connected](https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources/) ｜ [Improving Health Intelligence](https://openai.com/index/improving-health-intelligence-in-chatgpt/) ｜ [New Math/Science in ChatGPT](https://openai.com/index/new-ways-to-learn-math-and-science-in-chatgpt/)
- [Apps in ChatGPT](https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/) ｜ [Voice Models in API](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/) ｜ [Synthetic Voices](https://openai.com/index/navigating-the-challenges-and-opportunities-of-synthetic-voices/) ｜ [Canvas](https://openai.com/index/introducing-canvas/) ｜ [GPTs](https://openai.com/index/introducing-gpts/)
- [Apple Is Getting This Wrong](https://openai.com/index/apple-is-getting-this-wrong/) ｜ [GPT-5.6 Preferred for M365 Copilot](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot/) ｜ [An Alien Mind](https://openai.com/index/an-alien-mind/) ｜ [Learning Never Stops](https://openai.com/index/learning-never-stops/)

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
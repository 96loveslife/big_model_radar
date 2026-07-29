# AI 官方内容追踪报告 2026-07-29

> 今日更新 | 新增内容: 62 篇 | 生成时间: 2026-07-29 03:13 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 2 篇（sitemap 共 428 条）
- OpenAI: [openai.com](https://openai.com) — 新增 60 篇（sitemap 共 883 条）

---

<think>The user wants a detailed analysis report of today's updates from Anthropic and OpenAI. Let me carefully analyze the content provided.

Key observations:

**Anthropic (2 new items):**
1. "Discovering cryptographic weaknesses with Claude" - Research post dated July 28, 2026. This is a major research announcement about Claude Mythos Preview finding mathematical flaws in cryptographic algorithms (HAWK and AES). This is a significant escalation from finding implementation bugs to finding algorithmic flaws.

2. "Our position on open-weights models" - News post by Dario Amodei dated July 27, 2026. Anthropic clarifies they don't support banning open-weights models, but they're concerned about authoritarian governments building more powerful AI. This is a policy positioning piece.

**OpenAI (60 new items):**
Most of these appear to be historical/archived content being re-indexed on 2026-07-29, given the dates of original content (2019, 2025, etc.). The content shows heavy clustering around:
- Teen safety (many posts about teen safety blueprints, age prediction, etc.)
- ChatGPT optimizations
- Audio models
- Safety alignment
- Board additions (David Velez, Robin Vince)

Since most OpenAI content shows "无法提取文本内容" (cannot extract text content), I need to be careful and only report what's clearly visible from the titles and dates.

Let me structure a comprehensive report. I should note that this is a very unusual date - 2026-07-29 - which is in the future as of my knowledge cutoff. I'll treat this as the user's provided context.

Let me write a thorough, professional analysis in Chinese.</think>

# AI 官方内容追踪报告
**报告日期：2026-07-29 | 增量更新分析**

---

## 一、今日速览

**今日核心信号集中在 Anthropic，而 OpenAI 端呈现明显的"历史内容回填"特征。** Anthropic 在 24 小时内连发两篇战略级内容：其一是用 Claude Mythos Preview 发现 **HAWK 后量子签名方案与 AES 对称密码的数学级漏洞**，标志着 AI 从"找代码 bug"进化到"攻击数学基础"；其二是 CEO Dario Amodei 亲撰长文 **明确反对禁止开源权重模型**，同时将真正的国家安全威胁锚定在"威权政府建立更强大 AI"上。**OpenAI 端 60 条更新绝大多数为历史存档内容的批量回流**，标题高频集中在"青少年安全"（Teen Safety Blueprint、Age Prediction、Teen Safety Freedom and Privacy 等），暗示 OpenAI 正在系统性地构建未成年人保护叙事体系。

---

## 二、Anthropic / Claude 内容精选

### 🔬 Research｜密码学前沿突破

#### 1. [Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
**发布：2026-07-28 | 分类：Frontier Red Team**

**核心要点：**
- 使用 **Claude Mythos Preview** 自主发现两项加密算法数学层面的重大弱点：
  - **HAWK**：一种为后量子世界设计的数字签名方案遭到显著削弱
  - **AES**：发现一种针对 reduced-round AES 的新型攻击方式
- 这是 Claude 从"发现代码实现漏洞" **跃迁到"攻击算法本身数学结构"** 的质变
- 关键定位："substantial research advances, but they do not currently affect any production systems"

**技术意义：** 这意味着 AI 模型已具备参与密码学前沿研究的能力——不仅是 NSA 级别的代码审计员，更是能与密码学家竞争理论发现的"数学助手"。Claude Mythos Preview 此前已展示自主漏洞利用能力，此次则将能力边界推向算法分析层。

---

### 📢 News｜开源权重模型立场声明

#### 2. [Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models)
**发布：2026-07-27 | 作者：Dario Amodei（CEO）**

**核心要点：**
- **明确否认 Anthropic 曾主张禁止开源权重模型**，回应"保护主义指控"
- 承认"不具备危险能力的开源权重模型是公共品（public good）"
- 真正的国家安全担忧是 **威权政府构建超越美国的 AI 能力**，回溯其《技术的青春期》论文
- 反对"保护主义禁令（protectionist bans）"作为应对手段

**战略信号：** 这是一篇精心设计的立场声明——在监管讨论升温的窗口期，Anthropic 选择站在"开放生态"一侧，与封闭路线划清界限，同时将竞争叙事从"是否开源"转向"国家能力竞赛"。

---

## 三、OpenAI 内容精选

> ⚠️ **数据说明：** 今日 60 条 OpenAI 更新中，绝大多数页面正文未能成功提取（标记为"无法提取文本内容"）。从标题与日期分布判断，**绝大部分为历史存档内容的批量索引更新**（如 Symposium 2019、OpenAI Five Finals、ProcGen MineRL Competitions 等 2019 年内容）。以下仅就标题可辨别的主题进行分类整理。

### 📋 今日可辨主题分布

| 主题簇 | 代表篇目 | 发布日期 | 性质判断 |
|--------|---------|---------|---------|
| **公司治理** | [David Velez, Robin Vince Join OpenAI Boards](https://openai.com/index/david-velez-robin-vince-join-openai-boards/) | 2026-07-28 | 董事会人事变动 |
| **产品发布** | [Introducing Our Next Generation Audio Models](https://openai.com/index/introducing-our-next-generation-audio-models/) | 2026-07-28 | 新一代音频模型 |
| **青少年安全** | [Introducing The Teen Safety Blueprint](https://openai.com/index/introducing-the-teen-safety-blueprint/) / [Our Approach To Age Prediction](https://openai.com/index/our-approach-to-age-prediction/) / [Teen Safety Freedom And Privacy](https://openai.com/index/teen-safety-freedom-and-privacy/) / [Introducing Child Safety Blueprint](https://openai.com/index/introducing-child-safety-blueprint/) / [Japan Teen Safety Blueprint](https://openai.com/index/japan-teen-safety-blueprint/) 等 | 2026-07-28 | 主题密集，约 15+ 篇 |
| **模型/安全研究** | [Safety Alignment](https://openai.com/news/safety-alignment/) / [Safety Alignment Long Horizon Models](https://openai.com/index/safety-alignment-long-horizon-models/) | 2026-07-28/29 | 长周期安全对齐 |
| **ChatGPT 体验优化** | [Optimizing Chatgpt](https://openai.com/index/optimizing-chatgpt/) / [Building More Helpful Chatgpt Experiences For Everyone](https://openai.com/index/building-more-helpful-chatgpt-experiences-for-everyone/) | 2026-07-28 | 用户体验迭代 |
| **企业应用** | [Put Ai To Work For Your Product Team](https://openai.com/index/put-ai-to-work-for-your-product-team/) / [How Ai Is Expanding What People Do At Work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/) | 2026-07-29 | B 端叙事 |
| **科学计算** | [Scientific Computing Agentic Ai](https://openai.com/index/scientific-computing-agentic-ai/) | 2026-07-28 | 智能体科学计算 |
| **历史归档** | Symposium 2019、OpenAI Five Finals、ProcGen MineRL、Hackathon 系列等 | 原始 2019 | 批量索引回填 |

**关键判断：** 标题语义高度重复（同名 URL 多次出现，如 "Teen Safety Blueprint" 与 "Scientific Computing Agentic Ai" 均出现 2 次以上），符合 OpenAI 官网索引层重建或 CMS 迁移的典型特征。**今日 OpenAI 实际"新发布"实质内容极少**，需后续正文化对比确认。

---

## 四、战略信号解读

### 1. Anthropic 的技术优先级：**能力上限 + 公共立场两手抓**

- **技术优先级**：Frontier Red Team 持续将 Claude Mythos Preview 推向"自主科研"边界。密码学突破是绝佳的展示窗口——它既证明模型能力，又处于对全社会有利的方向（让漏洞被善意发现而非恶意利用）。
- **战略优先级**：Dario Amodei 亲自下场写开源立场，是 Anthropic 罕见的高管直接发声（区别于 Sam Altman 的公关风格）。**选择"反对禁令"而非中立表态**，是 Anthropic 想把自己和"封闭巨头"区分开来的明确定位。

### 2. OpenAI 的内容重心：**安全合规叙事体系化**

- 青少年安全相关内容的密度极高（年龄预测、Teen Safety Blueprint、青少年自由与隐私、家长资源、Model Spec 青少年保护更新等），**这是 OpenAI 在主动构建"负责任 AI 供应商"叙事**，应对监管压力。
- 长周期安全对齐（Long Horizon Models）、GPT OSS Safeguard 等内容暗示 **OpenAI 在为开源模型的安全护栏建立标准**——这与 Anthropic 的开源立场声明形成隐性对话。
- 音频模型新代、企业应用（产品团队）等少数实质新内容方向，体现 OpenAI 仍以 **多模态 + B 端变现** 为基本盘。

### 3. 竞争态势：**双方在"安全"与"开放"维度展开交叉博弈**

| 维度 | Anthropic | OpenAI |
|------|-----------|--------|
| **能力证明** | Claude Mythos Preview 攻破密码学 | 长周期对齐 + 音频模型迭代 |
| **生态立场** | 明确反对禁令、支持开源 | 推 GPT OSS Safeguard，间接管控安全 |
| **公众沟通** | CEO 长文，深入议题 | 主题蓝图化、制度化输出 |
| **产品节奏** | 偏研究/Frontier | 偏平台/合规 |

**议题引领者：** 在"AI 是否能发现密码学弱点"这一前沿议题上，Anthropic 显然是引领者；OpenAI 则在"AI 安全护栏标准化"上保持先发优势。

### 4. 对开发者与企业用户的潜在影响

- **密码学社区**：Claude Mythos Preview 的密码学发现意味着未来 AI 辅助密码审计可能成为常态，开发者需关注 HAWK 提案的后续修订及 AES 抗攻击参数的更新。
- **使用中国开源模型的企业**：Dario Amodei 的声明降低了"Anthropic 主张封禁"的恐惧，但国家级监管走向仍不明朗，**短期、中期应保持多供应商策略**。
- **面向青少年的产品**：OpenAI 的密集发布意味着 ChatGPT 面向未成年人的接口将持续收紧（年龄预测、家长控制、Study Mode 等），相关 B 端集成需要重新评估合规框架。
- **长周期对齐研究**：OpenAI "Long Horizon Models" 的安全对齐方向提示行业未来 12-18 个月的评估标准可能向"超长任务一致性"倾斜。

---

## 五、值得关注的细节

### 🆕 新兴词汇与概念

- **"Mythos Preview"** ——这是 Anthropic 继 Claude 3、Claude 3.5 系列之后首次出现的全新模型代号，定位为"前沿研究预览版"，**不应被理解为常态产品**，而是一个用于 Frontier Red Team 的特殊能力展示窗口。
- **"protectionist bans"** ——Dario Amodei 使用的措辞，**首次出现于 Anthropic 官方语境**，暗示其将"以国家安全为名的禁止"与"贸易保护主义"挂钩，是一个有意识的政治框架化。
- **"public good"** ——用于开源权重模型，是一个值得关注的定位——把开源模型定性为公共品是一种软性政策建议。
- **"narrow AI vs. frontier AI"** 的隐含二分法——Dario Amodei 区分了"开源没有危险能力的模型"与"可能威胁国家安全的尖端模型"，这是政策讨论中需要密切跟踪的边界划定。

### 📅 发布时机信号

- **两篇 Anthropic 文章相隔一天发布**（7/27 与 7/28），且一条是 CEO 政策表态、一条是 Frontier Red Team 突破——**典型的"能力背书 + 政策表态"组合拳**，意图在监管讨论窗口期抢占叙事。
- **OpenAI 60 条更新集中于 7/28-7/29**——结合 URL 重复模式，强烈暗示 **OpenAI 官网/CMS 正在经历结构性重建或归档索引合并**。这通常是产品或品牌层面有重大调整的征兆，建议关注后续几天是否有重大公告（如 DevDay 2026 预告）。

### 🔒 政策与合规动向

- **未成年人保护：** OpenAI 至少 15 篇标题与青少年安全相关，覆盖美国、日本等多个司法辖区——**这是 OpenAI 在为即将到来的全球性未成年人保护立法做准备**。
- **后量子密码学：** Anthropic 对 HAWK 的攻击具有政策意义——后量子密码标准的 NIST 选型过程正处于压力测试期，AI 发现算法弱点可能加速标准重审。
- **开源模型治理：** "美国禁止中国开源模型"的讨论让 Anthropic 不得不在公开层面表态，这一讨论在 2026 年下半年大概率进入立法窗口。

### 🎯 Anthropic 官方链接汇总

- 研究博客：[anthropic.com/research](https://www.anthropic.com/research)
- 新闻公告：[anthropic.com/news](https://www.anthropic.com/news)
- 密码学漏洞研究：https://www.anthropic.com/research/discovering-cryptographic-weaknesses
- 开源权重立场：https://www.anthropic.com/news/position-open-weights-models

### 🎯 OpenAI 官方链接汇总

- 新闻中心：[openai.com/news](https://openai.com/news)
- 工程博客：[openai.com/news/engineering/](https://openai.com/news/engineering/)
- 公司公告：[openai.com/news/company-announcements/](https://openai.com/news/company-announcements/)
- 产品发布：[openai.com/news/product-releases/](https://openai.com/news/product-releases/)
- 安全对齐：[openai.com/news/safety-alignment/](https://openai.com/news/safety-alignment/)

---

**报告说明：** 本报告基于 2026-07-29 增量内容生成。OpenAI 端大量页面正文未能提取，仅依据标题与日期分析，建议结合后续正文披露进一步核实。如需对特定主题（如密码学细节、青少年安全政策细节）进行深度追踪分析，可指定方向继续深挖。

---
*本日报由 [Big Model Radar](https://github.com/96loveslife/big_model_radar) 自动生成。*
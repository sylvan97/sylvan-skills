---
name: danqing-figma-forge
description: "Figma 设计源文件创作 skill（面向非设计师的端到端流程）：内置全球顶尖团队与代表性设计师的设计哲学、多端组件库策略、组件方法论、无障碍、灵感库、可替换的 Design Token 基线（示例：中国色三层次体系，可替换为任意 token 源），以及 5 套开箱即用的默认风格方向库（Editorial Ink / Obsidian Luxe / Swiss Grid / Jam Pop / Aristotle Warm+Green，含 Light/Dark）。流程：先出 3-5 版 HTML 风格方案供确认，再做 3-5 轮细化询问收敛，最后调用用户环境「可写」Figma MCP 把成品直接写进 Figma Design。Triggers: '用 Figma 搭页面'、'建组件库'、'多端组件库'、'用 Figma MCP 写设计'、'从我的 Figma 设计'、'搭 Figma 设计系统'、'把设计写进 Figma'、'Figma 组件规范'、'默认风格'、'默认配色'。"
---

# Danqing Figma Forge — 设计哲学知识 + 环境检查 → 灵感 → 多端策略 → 3-5 版 HTML 风格 → 方向确认 → 3-5 轮细化 → 写入 Figma Design

## IRON LAW（不可违背）

本 skill 的**最终交付物是写进用户 Figma Design 文件的设计源**，通过用户环境中「可写」的 Figma MCP 完成。HTML 只是**探索 / 确认媒介**，绝不作为最终产物交付。一旦终稿锁定，必须走到"写入 Figma"这一步（Pre-flight 确认有可写 MCP 时）；若无，则明确告知用户并降级 handoff，不得假装已写入。

**核心约束 2（跨端铁律）**：跨端一致性 = 共享 token + 共享语义 + 统一命名；**不等于**把某一端的视觉皮肤（Material 阴影 / iOS 圆角 / Fluent 材质）强加给所有端。导航范式、输入方式、密度、抬升隐喻必须按平台适配。强行统一是本项目最高频的错误。

**核心约束 3（审美归人）**：非设计师看不了 Figma 心智图，但能看 HTML。所以先用 3-5 版 HTML 风格方案让用户定方向，再 3-5 轮细化询问收敛；审美决策始终由人类拍板，AI 只执行结构 + token + 规范。

**核心约束 4（图标用 SVG，禁 emoji）**：所有图标（导航、功能、状态、空态 / 错误态、主题切换等）一律用 **SVG 矢量图标**——Figma 中为 vector 或 icon Component，HTML 探索原型中为 inline `<svg>`。**绝不使用 emoji 字符**（如 📭 ⚠️ 🌗）。emoji 跨端渲染不一致、无法对齐 token、不可作为组件变体与状态、不可精确控制尺寸 / 颜色，违背 D2C 与组件化原则；风格探索原型也必须遵守，不可因"只是临时 HTML"而退化。

## 适用前提

- 用户不是设计师，但已有一套可复用的设计资产（如「中国色」三层次 Design Token 体系：Raw 526 → Semantic 34 → Component 41，W3C DTCG JSON）。
- 目标场景：① 从零搭页面 / 界面；② 改 / 同步设计 token（Variables）；③ 批量生成组件库；④ 多端组件库设计与适配。
- 非设计师的"参考内容缺口"靠四件事补：① **内置灵感参考库**（30+ 国内外 UI 站）；② **内置设计哲学知识库**（Google/Apple/Microsoft + 代表性设计师）；③ **内置多端策略与组件方法论**；④ 把用户已有 Token 库读进来当基线，并把最终审美决策交给"HTML 风格探索 + 细化询问"的人类闭环。

## 环境前置检查（Pre-flight）⚠️ 每次使用先做

本 skill 的最终动作是"写进 Figma"，所以**能否写**取决于环境里的 Figma 集成状态。**动手前必须先判断，否则会假装能写、或漏掉连接步骤。**

1. **是否有 Figma MCP**：用 `ToolSearch` 查 `figma`，或看连接器列表里 `figma` / `Figma` 是否 `connected`。
2. **写能力分级**：
   - 有 **可写** 工具（如 `create_frame` / `create_component` / `set_fill` / `create_variable` 等）→ **可直接写 Figma**（主路径）。进 Step 9 执行回写。
   - 只有 `get_figma_data` + `download_figma_images` → **只读 Dev Mode**。能读 token / 抽参考，但**不能创建或修改** Figma。走完风格探索 + 细化后，Step 9 降级为 handoff。
   - 未连任何 Figma 集成 → 无法读也无法写。先停下引导连接（见下），或降级为纯 HTML 原型（token 用通用基线），并声明"未读真实源、未写 Figma"。
3. **分支处理**：
   - 有可写 MCP → 全流程跑通，最终 Step 9 直接写进 Figma Design，向用户回报写入结果（文件链接、frame/组件/variable 数量）。
   - 仅只读 / 未连接 → 风格探索与细化照常进行（这部分不依赖写能力），Step 9 输出 `figma-handoff/` 手填包并**明确提示用户：需安装可写 Figma MCP 才能自动落盘**。

> 连接器引导：无 MCP 时，引导用户到连接器管理页连接 Figma（官方 Dev Mode 只读 MCP 或 plugin 型可写 MCP），信任后启用，再继续。可写 MCP 通常是"本地服务 + Figma 插件"形态。

## Workflow

Copy this checklist and check off items as you complete them:

```
Figma Forge Progress:

- [ ] Step 0: 环境前置检查 ⚠️ REQUIRED FIRST
  - [ ] 0.1 ToolSearch `figma` 确认 Figma 集成及连接状态
  - [ ] 0.2 确认写能力分级：可写 / 只读 / 未连接
  - [ ] 0.3 可写→主路径写 Figma；只读/未连接→风格探索照常，Step 9 降级 handoff 并提示装可写 MCP
- [ ] Step 1: Intake ⚠️ REQUIRED
  - [ ] 1.1 明确目标类型：搭页面 / 同步 token / 建组件库 / 多端组件库
  - [ ] 1.2 拿 Figma 源文件 fileKey（可写 MCP 还需确认目标文件/页面，写产物落哪）
  - [ ] 1.3 确认是否读取「中国色」Token 库作基线（内置真实令牌集 `references/zhongguose-design-tokens.json`：526 Raw / 34 Semantic / 41 Component + Dark 覆盖，DTCG JSON，可直接载入，无需 Figma 读权限）
  - [ ] 1.4 确定目标平台（Web / PC / 小程序 / iOS / Android）与关键屏幕
  - [ ] 1.5 确定 mood 关键词（极简 / 科技感 / 温暖 / 活泼 / 高级…）
- [ ] Step 2: 灵感策划 ⚠️ REQUIRED
  - [ ] 2.1 加载 references/design-inspiration-sites.md
  - [ ] 2.2 按 mood 挑 3-5 个参考站点
  - [ ] 2.3 提取规则：布局节奏 / 排版 / 组件样式 / 配色基调 / 阴影圆角
  - [ ] 2.4 记录视觉锚点 + 学什么 + 不学什么
- [ ] Step 3: 设计系统原则与多端策略对齐 ⚠️ REQUIRED
  - [ ] 3.1 加载 teams / designers 哲学 → 通用价值观 + 约束边界
  - [ ] 3.2 加载 multiplatform-component-strategy.md → 各端交互差异化
  - [ ] 3.3 加载 component-system-methodology.md → 命名 / 层级 / variant / 状态 / 响应式
  - [ ] 3.4 加载 accessibility-inclusive-design.md → a11y 基线
  - [ ] 3.5 产出「设计系统章程」：价值观 + 约束 + 各端 delta + 命名约定
- [ ] Step 4: 读取设计源 Token ⚠️ 条件性
  - [ ] 4.1 有 Figma 源文件 → get_figma_data 读取 Variables/Styles/组件
  - [ ] 4.2 用 download_figma_images 导出所需图标/素材
  - [ ] 4.3 无源文件 → 用 design-tokens-baseline.md 通用基线（注明替换）
  - [ ] 4.4 产出权威 token 表（真实值，禁止编造）
- [ ] Step 5: 风格探索 — 出 3-5 版 HTML 风格 ⚠️ REQUIRED
  - [ ] 5.1 用同一套 token（有源时）或从 `references/default-style-directions.md` 的 5 套默认方向（无源/要默认外观时），做 3-5 个差异化方向（布局/排版/配色权重/组件质感/动效感）
  - [ ] 5.2 每版标注风格名 + 灵感来源 + 哲学依据 + 适用场景
  - [ ] 5.3 用 present_files 一次性展示，请用户选方向（或融合）
- [ ] Step 6: 方向确认 ⛔ BLOCKING
  - [ ] 6.1 AskUserQuestion：选哪一版 / 融合哪几版 / 换思路
  - [ ] 6.2 锁定风格方向（布局骨架 + 视觉调性 + token 基调）
- [ ] Step 7: 细化询问 — 3-5 轮 ⚠️ REQUIRED
  - [ ] 7.1 每轮用 AskUserQuestion 收敛一个维度（组件清单/状态/变体/各端 delta/边界场景/a11y）
  - [ ] 7.2 每轮更新 HTML 并展示增量改动
  - [ ] 7.3 累计 3-5 轮或用户说"可以了"即停止
- [ ] Step 8: 终稿锁定 ⛔ BLOCKING
  - [ ] 8.1 展示最终 HTML 全貌，确认即批准
  - [ ] 8.2 产出"写入规格"：frame 结构树 + token 表 + 组件/variant 矩阵 + 命名表 + 各端 delta
- [ ] Step 9: 写入 Figma Design ⚠️ 主路径 / 降级
  - [ ] 9.1 可写 MCP → 按"写入规格"映射并调用写工具（见 cheatsheet 写操作表）
  - [ ] 9.2 创建/复用 Figma 文件与页面、frame、Component Set + variant、Variables
  - [ ] 9.3 套 Auto Layout、命名、填充/圆角/阴影，确保与 HTML 一致
  - [ ] 9.4 只读/未连接 → 降级输出 figma-handoff/ 手填包 + 提示装可写 MCP
- [ ] Step 10: 交付与检查
  - [ ] 10.1 可写→回报写入结果（文件链接/页面/frame/组件/variable 数量）；只读→present_files 交 handoff 包
  - [ ] 10.2 跑 Pre-Delivery Checklist
```

## Step 1: Intake ⚠️ REQUIRED

问自己 / 问用户，直到拿到：

1. **目标类型**：搭页面？同步 token？建组件库？多端组件库？（至少明确一类为主）
2. **fileKey / 目标文件**：从 `figma.com/(file|design)/<fileKey>/...` 提取 fileKey。可写 MCP 还需确认**成品落哪个文件 / 哪个页面**（新建还是追加）。
3. **基线来源**：本 skill 已内置真实「中国色」令牌集 `references/zhongguose-design-tokens.json`（DTCG，526/34/41 + Dark）。默认直接载入作基线；若用户改用其它 token 源（如自有 Figma 库），给 fileKey 则 Step 4 从 Figma 读并核对一致性；无源且不用中国色时，用通用基线并注明替换。
   - **要"默认 / 开箱即用外观"或无源起步**：也可从 `references/default-style-directions.md` 的 **5 套内置默认风格方向**（Editorial Ink / Obsidian Luxe / Swiss Grid / Jam Pop / Aristotle Warm+Green）中挑 3-5 套作为 Step 5 的方向候选；该库与中国色基线**并列共存**，不冲突（详见 Step 5）。
4. **平台与屏幕**：Web / PC / 小程序 / iOS / Android；列出关键屏幕，先设计主屏。
5. **mood 关键词**：极简 / 科技感 / 温暖 / 活泼 / 高级……用于 Step 2。

任一项缺失，用 AskUserQuestion 收集。

## Step 2: 灵感策划 ⚠️ REQUIRED

→ 加载 [references/design-inspiration-sites.md](references/design-inspiration-sites.md)

非设计师不带审美参考也没关系——本文件就是内置灵感源。执行：

- 按 Step 1 的 mood 关键词，从"按 mood 取用"表挑 3-5 个最相关站点。
- 对每个站点，提取**结构化规则**而非截图：布局节奏、排版层级、组件样式语言、配色基调、阴影圆角。
- 用文字标注**学什么 / 不学什么**（如"学其留白节奏，不学其 3D 英雄区"）。
- 记录视觉锚点（链接或截图描述）。**绝不像素级复制**——提取规则后重新应用。

## Step 3: 设计系统原则与多端策略对齐 ⚠️ REQUIRED

本步把"设计知识"落成可执行的**设计系统章程**，是多端组件库不跑偏的关键。

→ 加载 [references/design-philosophies-teams.md](references/design-philosophies-teams.md) 与 [references/design-philosophies-designers.md](references/design-philosophies-designers.md)
- 提炼**通用设计价值观与约束边界**：清晰优于装饰、一致性、无障碍第一公民、动效服务意义、token 驱动。
- 提取可借鉴的**原则**（非视觉皮肤）：如 Material 的 token 体系、Apple 的直接操作、Fluent 的包容性。

→ 加载 [references/multiplatform-component-strategy.md](references/multiplatform-component-strategy.md)
- 定义**必须跨端一致**项（品牌色、token、核心语义、a11y 基线、命名）与**必须差异化**项（导航范式、输入、密度、抬升隐喻）。
- 写出各端（Web / PC / 小程序 / iOS / Android）的交互差异化策略。

→ 加载 [references/component-system-methodology.md](references/component-system-methodology.md)
- 定**命名体系**（组件 PascalCase、变体 property=value、D2C-ready 图层名）。
- 定**层级逻辑**（Tokens / Styles / Components / Component Set / Pages 结构）。
- 定**变体、状态、响应式**的实操规范（variant 维度、必含状态、Auto Layout + 断点）。
- 同步应用"感知与交互基础"：费茨定律（命中目标 ≥ 44pt）、格式塔原理（proximity + similarity 组织层级）。

→ 加载 [references/accessibility-inclusive-design.md](references/accessibility-inclusive-design.md)
- 定**无障碍与包容性基线**：WCAG 2.1 AA（文本对比度 ≥ 4.5:1、键盘可达、焦点可见、屏幕阅读器、ARIA）；状态不只靠颜色；微软包容性（永久性 / 暂时性 / 情境性障碍）。
- 组件需提供清晰反馈状态（hover, active, disabled, loading），错误态含文字说明。

**产出「设计系统章程」**（一段结构化文字 + 表格），喂给 Step 5 的风格探索与 Step 9 的写入。

## Step 4: 读取设计源 Token ⚠️ 条件性

→ 加载 [references/figma-mcp-cheatsheet.md](references/figma-mcp-cheatsheet.md)（只读部分）

- 有 Figma 源文件 → 用 `get_figma_data` 读取：只传 `fileKey` 拿全树（大文件慎用）；已知 `nodeId` 必传以缩小范围；从返回里定位 Variables 集合、Text/Effect Styles、组件与 variant、Auto Layout。
- 用 `download_figma_images` 导出图标 / 图片节点（`nodeId` + `fileName`；带 imageRef 必带）。
- 无 Figma 源文件（或未提供 fileKey）→ 直接用内置 `references/zhongguose-design-tokens.json` 作基线（优先）；若用户明确不用中国色，再退回 `design-tokens-baseline.md` 的通用基线并注明替换。
- 整理成 **token 表**（来自真实返回或基线，禁止编造）：

| 变量名 | 值 | 类型 | 用途 | 来源节点 |
|---|---|---|---|---|
| color.primary | #7C3AED | color | 主按钮 / 链接 | 1234:5678 |
| space.block | 32px | number | 区块间距 | … |

## Step 5: 风格探索 — 出 3-5 版 HTML 风格 ⚠️ REQUIRED

**本步是"非设计师定方向"的核心**。用同一套 token（Step 4），产出 **3-5 个差异化风格方向**的 HTML 原型，让用户一眼看出区别并挑选。

- **有源 token（中国色 / 用户 Figma 库）→ 在该 token 基调上做方向差异**（布局 / 排版 / 配色权重 / 质感 / 动效）。**无源 token、不用中国色、或用户明确要"默认外观"→ 直接加载 `references/default-style-directions.md` 的 5 套内置默认风格方向**，用 `present_files` 打开 `references/default-styles-proposal.html`（01–04）与 `references/aristotle-green-scheme.html`（05）让用户看全貌，从中选 3-5 套（或融合）。该库是与中国色基线**并列**的"从零起步默认方向"，不要求先有 token 源。
- 每个方向在**至少一个维度**上拉开差异（不要只是换色）：
  - 布局节奏：宽松留白 vs 信息密集；单列 vs 多栏
  - 排版层级：大标题英雄式 vs 克制扁平
  - 配色权重：主色占比、是否中性为底
  - 组件质感：描边风 vs 填充风 vs 阴影抬升
  - 动效感：静态 vs 微交互暗示（用 CSS 表达 hover/transition）
- **图标一律用 SVG 矢量（inline `<svg>`），绝不用 emoji 字符**（见核心约束 4；探索原型也必须遵守）。
- 每版标注：**风格名 + 灵感来源（Step 2 站点）+ 哲学依据（Step 3 章程）+ 适用场景**。
- 用 `present_files` **一次性展示全部 3-5 版**，并说："这是 3-5 个方向（灵感 X + 哲学 Y + 你的 token）。选一个，或告诉我融合哪几个。"可将 3-5 版合成**单个 HTML 页面（分区 / 选项卡切换）**展示，减少文件碎片。

## Step 6: 方向确认 ⛔ BLOCKING

用 AskUserQuestion：

```
header: "风格方向"
question: "这 3-5 版里选哪个方向？"
options:
  - label: "版本 A（名称）"
    description: "一句话讲清这版调性"
  - label: "融合 A + C"
    description: "取 A 的布局 + C 的配色"
  - label: "都不满意，换思路"
    description: "重新出方向（可调整 mood / 约束）"
```

在锁定方向前，不要进入 Step 7。**锁定物 = 布局骨架 + 视觉调性 + token 基调**。

## Step 7: 细化询问 — 3-5 轮 ⚠️ REQUIRED

围绕锁定方向，**用 3-5 轮 AskUserQuestion 逐步收敛**。每轮聚焦一个维度，避免一次甩太多问题：

- 轮 1：组件清单（要哪些组件？button/card/input/table/nav…）
- 轮 2：状态与变体（每个组件要哪些状态 hover/active/disabled/loading；哪些尺寸 sm/md/lg）
- 轮 3：各端 delta（Web/PC/小程序/App 在导航/输入/密度上的差异如何体现）
- 轮 4：边界与异常（空态、错误态、长文本、超宽屏 / 小屏）
- 轮 5：无障碍与细节（对比度、焦点、ARIA、动效取舍）

每轮**更新 HTML 并展示增量改动**，让用户看到进度。累计 3-5 轮或用户说"可以了"即停止。若用户中途给具体修改指令，直接吸收进下一轮。

## Step 8: 终稿锁定 ⛔ BLOCKING

- 展示**最终 HTML 全貌**（所有端、所有组件、所有状态），确认即批准。
- 批准前产出**「写入规格」**（Step 9 的输入），一份结构化清单：
  - **Frame 结构树**：页面 → 区块 → 容器的嵌套与尺寸
  - **Token 表**：变量名 / 值 / 类型 / 用途（与 HTML CSS 变量 1:1 同名同值）
  - **组件 / Variant 矩阵**：组件 × 状态 × 尺寸
  - **语义化命名表**：Figma 图层名（与 HTML class 同名，D2C-ready）
  - **各端 delta 说明**
  - **Auto Layout 规则**：方向 / gap / padding / alignment / resizing

## Step 9: 写入 Figma Design ⚠️ 主路径 / 降级

→ 加载 [references/figma-mcp-cheatsheet.md](references/figma-mcp-cheatsheet.md) 的「写操作」章节

**可写 MCP（主路径）**：
- 用 ToolSearch 确认当前可写 MCP 的**真实工具名**（不同 provider 命名不同，如 `mcp__figma__create_frame`、`create_component` 等），对照 cheatsheet 的"HTML/CSS 概念 → Figma 图元 → 典型写操作"映射表，把 Step 8 的「写入规格」逐项落进 Figma：若写工具与 cheatsheet 示例名不一致，以 Pre-flight 探明的真实工具名为准；若无法可靠映射任意必需写操作（建 frame / 组件 / variable），立即退回 handoff 降级并提示用户 MCP 能力不足。
- **先建一个最小测试 frame 验证写能力可用**，确认成功后再批量执行。中途任一写工具报错立即停、已建部分回退并降级 handoff，避免部分写入留半截状态。
  1. 创建 / 复用目标文件与页面（确认落点，不覆盖用户已有内容除非授权）。
  2. 先建 **Variables**（颜色 / 数字 / 字符串），再建引用它们的 frame / 组件——token 先行。
  3. 按结构树建 **frame**，套 **Auto Layout**（方向、gap、padding、alignment、resizing）。
  4. 建 **Component Set + variant**（property=value），覆盖状态 × 尺寸矩阵。
  5. 套 **填充 / 描边 / 圆角 / 阴影**，统一语义化命名（与 HTML class 同名）。
  6. 各端差异用 variant（如 Navigation 的 Platform 变体）表达，不另起一套皮肤。
- 写完后**回报**：Figma 文件链接、所在页面、frame 数、组件 / variant 数、variable 数，并请用户在 Figma 里复核。

**只读 / 未连接（降级）**：
- 输出 `figma-handoff/` 手填包（见 [references/figma-handoff-guide.md](references/figma-handoff-guide.md)），内容即 Step 8 的「写入规格」+ 原型图 + 素材。
- **明确提示用户**：当前环境无可写 Figma MCP，成品未自动落盘；安装 plugin 型可写 MCP 后重跑 Step 9 即可直接写入。

## Step 10: 交付与检查

- 可写 → 回报写入结果并给文件链接；只读 → `present_files` 交 handoff 包 + 原型图。
- 跑 Pre-Delivery Checklist。

## Anti-Patterns

- **把 HTML 当最终交付物**：HTML 只是探索媒介；终稿必须走到写入 Figma（或明确降级 handoff）。
- **假装已写入 Figma**：没有可写 MCP 时，绝不声称"已写进 Figma"；必须如实说明降级。
- **跨端强行统一**：把 Material 阴影 / iOS 圆角 / Fluent 材质强加给所有端，或把 iOS 底部 Tab 当唯一导航放到桌面——违反跨端铁律。
- **把哲学当装饰**：只引用 Rams/Apple 名言却不落到 token / 命名 / variant / 响应式——必须可执行。
- **跳过风格探索**：不先出 3-5 版就直接做一版让用户看，失去定方向的机会。
- **像素级复制参考**：提取规则后重新应用，而非照搬（也尊重版权）。
- **凭空编 token 值**：颜色 hex、字号必须来自 `get_figma_data` 真实返回或已声明基线。
- **跳过确认 / 细化门**：未做方向确认或细化收敛就直接写入，容易返工。
- **硬编码裸值**：直接写 hex 而不用 token / CSS 变量。
- **非语义化命名**：图层或类名留 `Frame 12`、`Rectangle 3`。
- **用 emoji 当图标**：图标必须用 SVG 矢量（见核心约束 4）；emoji 跨端不一致、不可 token 化、不可控色。

## Pre-Delivery Checklist

- [ ] 灵感参考已记录（链接 / 截图描述 + 提取的规则 + 学什么不学什么）
- [ ] 设计系统章程已产出（价值观 + 约束 + 各端 delta + 命名约定）
- [ ] 多端差异化已显式定义（导航 / 输入 / 密度 / 抬升隐喻），未强行统一
- [ ] 无障碍基线已满足（对比度 ≥ 4.5:1、键盘可达、状态非纯色、ARIA/注释就位）
- [ ] 已出 3-5 版 HTML 风格且用户已选方向（Step 5-6）
- [ ] 已做 3-5 轮细化询问并收敛（Step 7）
- [ ] 终稿已锁定，写入规格齐全（结构树 / token / variant 矩阵 / 命名 / 各端 delta / Auto Layout）
- [ ] 有可写 MCP → 已实际调用写工具，回报写入结果（链接 / 数量）；无 → 已出 handoff 并提示装可写 MCP
- [ ] token 表含：变量名、值、类型、用途、来源节点（真实或已声明基线）
- [ ] HTML/CSS 变量与 Figma token 1:1 同名同值（或已建 Variables）
- [ ] 灵感规则与哲学依据已显式应用（非默认套路）
- [ ] 组件命名语义化、跨端一致；variant 矩阵仅含正交必要维度；状态齐全
- [ ] 所有图标均为 SVG 矢量（非 emoji）；Figma 中为 icon Component / vector，HTML 中为 inline `<svg>`
- [ ] 硬错误自检通过（重叠 / 间距 / 溢出 / 对齐 / 对比度）
- [ ] 无占位文本（TODO / FIXME / xxx）

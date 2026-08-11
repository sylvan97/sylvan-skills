# 组件设计系统：构建哲学、方法论与 Figma 实操规范

> 本文件把"设计哲学"翻译成可在 Figma 中直接复用的组件规范、命名体系与层级逻辑。是「设计理念 → 可执行组件库」的落地层。

## 一、构建哲学（方法论）

- **Atomic Design（Brad Frost）**：Atoms（色板 / 字阶 / 图标 / 输入）→ Molecules（按钮 / 输入框 / 标签）→ Organisms（卡片 / 表单 / 导航）→ Templates → Pages。组件库主要覆盖 Atoms–Organisms。
- **设计即系统，不是页面**：每个组件是独立、可组合、有契约的单元。
- **单一事实源（SSOT）**：token 驱动一切，组件不写死值。
- **组合优于配置**：用 variant / props 表达差异，而非复制组件。

## 二、Token 架构（已与「中国色」体系对齐）

- **Primitive（Raw 526）**：原始值，无语义。
- **Semantic（34）**：语义别名（color.primary 等）。
- **Component（41）**：组件级 token。
- 在 Figma 中用 Variables 集合对应三层；用 alias 连接（Semantic 引用 Primitive，Component 引用 Semantic）。

## 三、命名体系（跨端统一，D2C-ready）

- **组件名**：PascalCase 单数，如 `Button`、`Card`、`Input`、`NavBar`、`TabBar`。
- **变体属性**：property=value，如 `Type=Primary`、`Size=MD`、`State=Default`、`Platform=Web`。
- **Figma 组件命名**：主名 `Button` + 变体属性组合；图层内元素用语义名（`label`、`icon`、`bg`）。
- **文件 / 页面层级**：Team → Project → File → Page（按端或模块）→ Frame → Component Set → Variant。
- **禁止**：`Frame 12`、`Rectangle 3`、`副本` 之类无意义名。

## 四、层级逻辑（Figma 结构）

- **Variables 集合**：Primitive / Semantic / Component 三层，alias 连接。
- **Styles**：Color / Text / Effect Styles 绑定 semantic token。
- **Components**：按 Atomic 层级分 Page 组织（Atoms / Molecules / Organisms）。
- **Component Set**：同组件所有 variant 收进一个 Set，用属性矩阵管理。
- **Pages 建议**：`00_Tokens` / `01_Atoms` / `02_Molecules` / `03_Organisms` / `04_Patterns` / `05_Examples`。

## 五、组件变体（Variants）实操

- **属性维度**：`Type`（Primary/Secondary/Ghost/Destructive）、`Size`（SM/MD/LG）、`State`（Default/Hover/Active/Disabled/Loading/Error/Focus）、`Platform`（Web/iOS/Android/Mini/Desktop）。
- **矩阵不要爆炸**：仅对"正交且必要"的维度建 variant；否则用嵌套组件或 Auto Layout 配置。
- **命名规范**：每个 property 用清晰枚举值；默认值放最前（如 `State=Default` 排第一）。

## 六、状态管理（States）实操

- **必含状态**：Default、Hover、Active/Pressed、Focus（可见焦点环）、Disabled、Loading、Error、Empty。
- **实现**：作为 `State` variant 或独立 overlay；焦点 / 禁用优先用 token 表达。
- **反馈即时**（Nielsen #1、#9）：加载 / 错误 / 成功必须可见。

## 六·五、图标规范（Icons：SVG，禁 emoji）

> 对应 SKILL.md 核心约束 4。图标是组件的一等公民，绝不能退化为 emoji 字符。

- **一律 SVG 矢量**：
  - **Figma**：图标作为 `vector` 节点或独立 `icon Component`（如 `Icon/Search`、`Icon/Alert`），用 Auto Layout 嵌入按钮 / 输入框 / 空态；尺寸走 token（如 `icon.sm=16` / `icon.md=20` / `icon.lg=24`）。
  - **HTML 探索原型**：用 inline `<svg>`（currentColor 或 token 着色），不用 `<img>` 引外部图、更不用 emoji 文本。
- **禁止 emoji**：📭 ⚠️ 🌗 ✨ 等 emoji 跨端字体渲染不一致、无法对齐 token、不能做 `State`/`Theme` 变体、无法精确控尺寸与描边，**一律不用**。
- **图标也有状态 / 主题**：同一图标在 light / dark 下靠 `currentColor` 或 token 自动反色，不另存一份；加载态图标可配 `prefers-reduced-motion` 关闭旋转。
- **命名**：Figma 图层 `icon`，组件名 `Icon/<Name>`；HTML 类名 `icon icon-<name>`（D2C-ready，与 Figma 同名）。
- **风格统一**：线性 / 面性二选一并贯穿全库；描边宽度、圆角端点、视觉重量一致（格式塔 Similarity）。

## 七、响应式布局（Responsive）实操

- **Auto Layout 为主**：direction / gap / padding / alignment / resizing。
- **约束策略**：固定关键尺寸（按钮高度）、流式容器（卡片 max-width）、内容换行。
- **断点**：Web 用断点切换布局；App 用安全区 + 弹性；桌面用可缩放面板。
- **流式 vs 固定**：文字流式、图标固定；间距用 token 而非魔法数字。

## 八、实操检查清单

- [ ] Token 三层就绪且 alias 正确
- [ ] 组件命名语义化、跨端一致
- [ ] Variant 矩阵仅含正交必要维度
- [ ] 状态齐全且 token 驱动
- [ ] Auto Layout + resizing 正确
- [ ] 图层命名 D2C-ready
- [ ] 触控目标 ≥ 44pt，常用操作就近（费茨定律）
- [ ] 信息层级用 proximity + similarity 组织（格式塔）
- [ ] 状态不只靠颜色传达（WCAG，见 accessibility-inclusive-design.md）

## 九、感知与交互基础（费茨定律 / 格式塔原理）

### 费茨定律（Fitts's Law）
- 目标越大、越近，越易点击。触摸命中目标下限 **44pt（iOS）/ 48dp（Material）**。
- **组件库表现为**：按钮 / 可点击元素最小命中区 ≥ 44pt；常用操作就近放置；避免密集排布的小目标；图标按钮补 invisible hit area。

### 格式塔原理（Gestalt）
- **接近性（Proximity）**：相近元素被感知为一组——用间距而非边框分区。
- **相似性（Similarity）**：相似视觉特征归为同类——统一组件视觉语言（同色 / 同形 / 同距）。
- **连续性（Continuity）/ 闭合性（Closure）/ 图底关系（Figure-Ground）**：引导视线、区分前景内容与背景装饰。
- **组件库表现为**：用 proximity + similarity 组织信息层级；卡片内元素间距服从 token；区分"内容"与"装饰"，让图底关系清晰。

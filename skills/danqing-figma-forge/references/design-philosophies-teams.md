# 顶尖设计团队的设计哲学与交互原则

> 本文件系统梳理全球顶尖产品团队的设计系统与交互原则，作为多端组件库的"价值观基底"。
> 用法铁律：**提取其"原则（principles）"，而不是"视觉皮肤（skin）"**。原则可跨端复用；皮肤（Material 阴影、iOS 圆角、Fluent 材质）必须按平台适配，绝不可照搬。

## Google — Material Design（Material 3）

- **哲学**："Material is a metaphor"（受纸张与墨水启发的实体隐喻）；"Bold, graphic, intentional"（大胆、图示化、有意图）。
- **核心概念**：Surface（表面）、Elevation（用阴影表现层级）、Color（primary/secondary/tertiary + neutral）、Typography（type scale 字阶）、Shape（corner radius token）、Motion（easing/duration，动效必须有含义）。
- **Material 3 新增**：Dynamic Color（从主色自动生成和谐调色板）、个性化、无障碍对比度、Adaptive Layouts（大屏多栏自适应）。
- **交互原则**：触摸目标 ≥ 48dp；焦点可见；动效引导注意力而非装饰。
- **可借鉴**：Token 体系、elevation/shape 语义、type scale、响应式断点框架。
- **注意**：Material 的"阴影抬升"隐喻**不应**照搬到 Windows/macOS 桌面——见 Fluent / Apple 差异。

## Apple — Human Interface Guidelines（HIG）

- **三大主题**：Clarity（清晰）、Deference（顺从/尊重内容）、Depth（纵深）。
- **六大原则**：Aesthetic Integrity、Consistency、Direct Manipulation（直接操作）、Feedback、Metaphors（隐喻）、User Control（用户掌控）。
- **平台家族**：iOS / iPadOS / macOS / watchOS / tvOS / visionOS，各自有专属规范（iOS 安全区 Safe Area、底部 Tab Bar、SF Symbols、Dynamic Type、HIG 颜色）。
- **交互原则**：手势（边缘滑动返回）、Haptic 反馈、Human-readable 文案、减少模态、首页指示器避让。
- **可借鉴**：清晰优先于炫技、直接操作、一致性、SF Symbols 语义图标体系、Dynamic Type 可伸缩排版。
- **注意**：iOS 底部标签栏、大圆角、毛玻璃（material/blur）是 iOS 语言，**不应**强加给 Web / 桌面。

## Microsoft — Fluent Design System（Fluent 2）

- **五大元素**：Light（光）、Depth（深度）、Motion（动效）、Material（材质）、Scale（比例）。
- **哲学**："Design for everyone"——以包容性设计（Inclusive Design）为核心；跨 Windows / Web / iOS / Android 多端。
- **强调**：无障碍（对比度、键盘可达）、节奏感（rhythm/grid）、层级（layering）、克制。
- **与 Material/Apple 差异**：Fluent 不依赖单一"材质隐喻"，更强调跨平台统一 + 包容性，桌面端用轻材质而非重阴影。
- **可借鉴**：包容性设计框架、跨端一致性方法论。

## 其他代表性系统（广度）

- **IBM Carbon**：企业级、开源、无障碍 WCAG AA 强制、grid 驱动、type ramp、color tokens、"design for everyone"。适合 B 端 / 数据密集。
- **Ant Design（蚂蚁）**：企业级 React，设计价值观"自然确定性 / 意义生长性 / 视觉交互性"，中文语境友好。适合国内中后台。
- **Atlassian Design System**：协作产品导向，values：trust / respect / humility；务实。
- **Shopify Polaris**：电商 / 商家导向，"conversations not broadcasts"；适合交易类。
- **提炼**：企业级重无障碍与密度，电商重转化与清晰，消费级重情感与品牌。

## 跨系统共识（提炼为通用价值观）

- 清晰优于装饰（Apple + Rams）。
- 一致性降低认知负荷（所有系统）。
- 无障碍是第一公民（Carbon / Fluent / HIG / M3）。
- 动效服务意义，不服务炫技（Material / Apple）。
- Token 化驱动跨端一致性（所有现代系统）。
- 直接操作与即时反馈（HIG / Norman）。

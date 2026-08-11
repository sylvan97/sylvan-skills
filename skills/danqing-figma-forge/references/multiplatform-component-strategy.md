# 多端组件库：一致性与平台特性的平衡

> 目标端：Web（响应式站点 / 后台）、Desktop/PC（Windows / macOS 客户端）、小程序（微信 / 支付宝等宿主内）、App（iOS / Android）。
> 核心命题：在"跨端一致性"与"各平台交互范式"之间取得平衡——**一致性靠 token 与语义，差异化靠结构与交互**。

## 一、通用价值观与约束边界（必须跨端一致）

- **品牌**：主色 / 辅助色 / 品牌字体（中文用「中国色」体系 + 系统字体栈）。
- **设计 Token**：颜色、字阶、间距、圆角、阴影、动效时长——用 Primitive / Semantic / Component 三层（见 design-tokens-baseline 与 component-system-methodology）。
- **语义与行为**：组件核心语义必须一致（如"主按钮 = 主要操作"、错误态语义、加载态语义）。一个按钮在 iOS 和 Web 上"主要操作"的含义不变。
- **可访问性基线**：对比度达标、焦点可见、触控目标下限（移动 ≥ 44pt / 48dp）。
- **命名体系**：组件名、变体属性名跨端统一（见 component-system-methodology）。

## 二、约束边界（绝不跨端强一致）

- **导航范式**：iOS 底部 Tab Bar / Android 底部导航 + 系统返回 / Web 顶部导航 + 侧栏 + URL / 桌面菜单栏 + 窗口 / 小程序只能用宿主提供的导航栏与 tabBar。
- **输入方式**：Web / 桌面键鼠（hover、右键、快捷键、focus）；移动触摸（手势、安全区）；小程序受限手势。
- **密度**：桌面可密（数据表格、属性面板）；移动必疏。
- **抬升隐喻**：Material 阴影 vs Apple 毛玻璃 vs Fluent 轻材质——按平台选，**不混用**。
- **字体排版**：各平台系统字体栈（SF / Segoe / Roboto / 系统中文），支持 Dynamic Type / 可伸缩。

## 三、各端差异化适配策略

### Web（响应式）
- 断点驱动（mobile / tablet / desktop），容器流式 + 关键尺寸固定。
- hover 态、focus 态必备；键盘可达性；URL / 路由意识、深链接、前进后退。

### Desktop / PC
- 窗口化：菜单栏、工具栏、面板、抽屉；快捷键与右键上下文菜单。
- 高密度信息（表格、树、属性面板）；可缩放。
- 鼠标精确 + hover；无需安全区。

### 小程序（微信等宿主）
- 强约束：仅能用宿主导航栏、tabBar（≤5，图标 + 文字）、页面栈限制（≤10）、包体积限制。
- 无浏览器地址栏；手势受限；分享 / 转发是一级入口。
- 组件贴合宿主 UI（谨慎使用宿主品牌色如微信绿），避免过度自定义导航。

### App — iOS
- HIG：安全区、底部标签栏、大圆角、SF Symbols、Dynamic Type、手势（边缘返回）、Haptic。
- 状态栏 / 首页指示器避让。

### App — Android
- Material：底部导航、FAB、系统返回键、Material 动效、动态取色。
- 碎片化适配：多尺寸、折叠屏、深色模式。

## 四、平衡方法论

- **"Token 一致，组件适配"**：颜色 / 间距 / token 全端共享；组件的"外框与交互"按端做变体。
- **用 variant 表达平台差异**：如 `Navigation` 组件设 `Platform=Web|iOS|Android|Mini|Desktop` 变体，共享语义、差异在结构。
- **单一事实源**：所有端 token 来自同一套 Primitive / Semantic，避免各端漂色。
- **文档化边界**：handoff 中明确标注"哪些一致、哪些因端而异"（见 figma-handoff-guide）。

## 五、移动优先（Mobile-First）

- 从小屏开始设计，确保核心功能在最小视口可用，再渐进增强（progressive enhancement）到大屏。
- 组件默认按触摸友好设计（命中目标 ≥ 44pt），桌面端再补充 hover / 右键 / 快捷键。
- 先定内容优先级，再定布局；避免做出"桌面缩小版"塞给移动端。
- 组件库需要为此定义各种**尺寸变体**（如 SM/MD/LG），覆盖从手机到桌面的密度差异。

## 六、Figma 中的多端组织

- **页面（Pages）按端划分**：如 `iOS` / `Android` / `Web` / `Mini` / `Desktop`，或按模块 + 端后缀（如 `Dashboard_Web`）。
- **变体表达平台差异**：组件用 `Platform` 属性切换结构（见 component-system-methodology 第五节），共享语义、差异在结构。
- **分支（Branches）管理**：平台专项或破坏性改动走 Figma Branch，合并前评审，避免污染主文件。
- **共享优先**：跨端共享的 token / 基础原子放统一 Page，端差异组件隔离，防止各端漂移。

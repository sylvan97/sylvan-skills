# 无障碍与包容性设计（Accessibility & Inclusive Design）

> 无障碍不是"加分项"，是组件库的第一公民（Carbon / Fluent / HIG / Material 共识）。
> 本文件把 WCAG 与微软包容性设计落成组件级可执行的规范。

## 一、WCAG 2.1 AA — 组件库必须满足的基线

- **对比度**：
  - 正文文本 ≥ **4.5:1**（大文本 ≥ 3:1，即 ≥ 24px 或 ≥ 19px 粗体）。
  - 非文本元素（图标、边框、图表）≥ **3:1**。
- **键盘可达**：所有交互组件可纯键盘操作（Tab 聚焦、Enter/Space 触发、Esc 关闭）；焦点顺序符合视觉顺序。
- **焦点可见**：聚焦状态必须有清晰可见的焦点环（token 表达，不靠默认 outline 裸值）。
- **屏幕阅读器**：为交互组件标注 role / name / state（ARIA 或 Figma 注释）；装饰性元素 `aria-hidden`。
- **不只靠颜色**：状态（错误 / 成功 / 选中）必须配文字或图标，不能只用颜色区分（色盲友好）。
- **动效尊重**：支持 `prefers-reduced-motion`，减少非必要动画。
- **目标尺寸**：见 component-system-methodology 第九节（费茨定律 ≥ 44pt）。

- **组件库表现为**：
  - 文本对比度达标（用「中国色」体系选主色时校验明度差）。
  - 所有按钮 / 链接 / 输入可键盘到达并可见焦点。
  - 错误态含**文字说明**，不只变红。
  - 提供高对比模式变体（如 `Theme=HighContrast`）。
  - 表单校验同时给视觉（红框）+ 文本（错误原因）。

## 二、微软包容性设计（Microsoft Inclusive Design）

- **核心**：识别排除（identify exclusions）——设计常常无意中把人排除在外。
- **障碍三型（Persona Spectrum）**：
  - **永久性**（如失明、失聪）——始终存在。
  - **暂时性**（如骨折、眩晕）——某段时间。
  - **情境性**（如强光下看不清、单手抱娃、嘈杂环境）——环境导致。
- **方法论**：从一个最受限的场景设计，其解往往惠及所有人（如字幕原为听障，却帮所有人静音观看）。

- **组件库表现为**：
  - 默认满足 AA，从"最受限用户"视角校验每个组件。
  - 提供多种输入/反馈通道（视觉 + 文本 + 声音可选）。
  - 不假设"所有人都能看清楚 / 点得准 / 双手操作"。

## 三、组件级 ARIA 标注规范（Figma 注释 / 代码双轨）

| 组件 | role | 必标 name | 必标 state |
|---|---|---|---|
| Button | button | 可读标签 | disabled / loading |
| Input | textbox | label 关联 | invalid / required |
| Checkbox | checkbox | 选项文本 | checked |
| Tab | tab | 页签名 | selected |
| Dialog | dialog | 标题 | — |
| Alert | alert | 错误信息 | — |

- 在 Figma 中用组件注释或 `Platform`/状态变体旁标注 ARIA 意图，便于 D2C 落地。

## 四、检查清单

- [ ] 文本对比度 ≥ 4.5:1，非文本 ≥ 3:1
- [ ] 全部交互组件可键盘操作且焦点可见
- [ ] 状态不只靠颜色（配文字 / 图标）
- [ ] 提供 HighContrast 变体
- [ ] 表单错误态含文字说明
- [ ] 支持 prefers-reduced-motion
- [ ] ARIA role / name / state 已标注（注释或变体）

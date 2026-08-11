# Figma-ready Handoff 手填包（降级路径专用）

> **本包是降级产物，不是主交付物。** 仅当 Pre-flight 判定环境无可写 Figma MCP（只读 Dev Mode 或未连接）时使用：AI 无法把成品写进 Figma，于是输出规范包，让用户在 Figma 里按图索骥地粘贴 / 导入；或等用户安装 plugin 型可写 MCP 后，重跑 SKILL.md Step 9 直接写盘。结构越规范，人工成本越低。若环境有可写 MCP，见 figma-mcp-cheatsheet.md 的「写操作映射」，不要走本包。

## 交付包组成

```
figma-handoff/
├── figma-handoff.md        # 主规范（见下）
├── prototype.png           # HTML 原型渲染图（整页截图）
└── assets/                 # Step 2 下载的图标 / 素材（来自 download_figma_images）
```

## figma-handoff.md 模板

```markdown
# Handoff — <项目名>

> 来源：Figma 文件 <fileKey>（<链接>）
> Token 基线：中国色三层次 / 通用基线（注明）
> 注意：当前 Figma MCP 只读，以下需人工在 Figma 粘贴导入，或待可写 MCP 回填。

## 1. Design Tokens
| 变量名 | 值 | 类型 | 用途 | 来源节点 |
|---|---|---|---|---|
| color.primary | #7C3AED | color | 主按钮/链接 | 1234:5678 |
| space.block | 32px | number | 区块间距 | … |

## 2. Frame 规范（逐屏）
### 屏 A：Dashboard 首页
- 画布：1440 × 1024（web）
- 结构：Sidebar(240) | Main(1200)
  - Main: Topbar(64) → KPI Row(4 卡, gap 16) → Table
- Auto Layout：纵向，gap 32，padding 32；卡内纵向 gap 16

## 3. 组件与 Variant
| 组件 | Variants | 尺寸 | 备注 |
|---|---|---|---|
| Button | primary/secondary/ghost × default/hover/disabled | sm/md/lg | 用 Auto Layout，圆角 8 |
| Card | default/elevated | — | 阴影 0 4px 12px |

## 4. 语义化命名表（D2C-ready）
| Figma 图层名 | 含义 |
|---|---|
| btn-primary | 主按钮 |
| card-item | 卡片单元 |
| title-h2 | 二级标题 |

## 5. 交互（主流程）
- 点击 Sidebar 项 → 高亮 + 切换 Main 内容
- Hover 主按钮 → 变体切到 hover
```

## 写作要点

- **Token 先行**：所有颜色 / 字号 / 间距引用第 1 节变量，禁止在规范里写裸 hex（除非标注"原始值"）。
- **Auto Layout 写全**：方向、gap、padding、alignment、resizing——Figma 里能直接照填。
- **Variant 矩阵**：组件 × 状态 × 尺寸用表格列清，避免遗漏。
- **命名一致**：Figma 图层名与 HTML class 同名，方便后续 D2C（Design to Code）工具对接。
- **明确只读声明**：每段交付都要提醒"MCP 只读，需人工回写"。

## 自检（交付前）

- [ ] token 表齐全且与原型一致
- [ ] 每个 frame 有尺寸 + Auto Layout 规则
- [ ] 组件 variant 矩阵无遗漏
- [ ] 命名表语义化、无 Frame 12 之类
- [ ] prototype.png 已导出
- [ ] 已声明只读 / 回写方式

# Figma MCP 速查（读操作 + 写操作映射）

> 本 skill 的最终动作是"写进 Figma Design"，但其能力取决于环境接入的 MCP 形态：
> - **可写 MCP**（plugin 型，本地服务 + Figma 插件）→ 有 `create_*` / `set_*` 类工具，走 Step 9 主路径直接写。
> - **只读 Dev Mode**（官方版）→ 只有 `get_figma_data` + `download_figma_images`，只能读 / 抽 token，写动作降级为 handoff。
> 先经 SKILL.md 的 Pre-flight 判定写能力，再决定走哪段。非设计师照此表操作即可，不必理解 Figma 内部机制。

## 可用工具

| 工具 | 用途 | 能否写 Figma |
|---|---|---|
| `mcp__figma__get_figma_data` | 读取文件 / 节点的结构、内容、组件、变量 | 否（只读） |
| `mcp__figma__download_figma_images` | 导出节点为 SVG / PNG / GIF | 否（只读） |

**能力提醒**：若环境只有上述两个只读工具，则无法在 Figma 里建 frame / 组件 / 变量——走 Step 8→9 的 handoff 降级。若检测到可写 MCP，见下方「写操作映射」。

## get_figma_data

**必填参数**
- `fileKey`：Figma 文件标识。从链接提取：`figma.com/(file|design)/<fileKey>/...` 中那串字母数字（正则 `^[a-zA-Z0-9]+$`）。

**可选参数**
- `nodeId`：指定节点。格式 `1234:5678`；深层实例为分号连接路径 `I5666:180910;1:10515`。**已知 nodeId 时务必传**，避免拉取整棵大树。
- `depth`：**默认不要传。** 控制遍历深度。仅当用户明确要求或整树过大必须限制时才用。

**典型调用**
- 读整文件：`get_figma_data({ fileKey })`
- 读某节点：`get_figma_data({ fileKey, nodeId: "1234:5678" })`

**返回里要扒的东西**：Variables 集合（Color / Number / String）、Text Styles、Effect Styles、组件与 variant、各节点的 Auto Layout（direction / gap / padding / alignment）、fills / strokes。

## download_figma_images

**必填参数**
- `fileKey`：同上。
- `nodes`：数组，每项至少含 `nodeId` 和 `fileName`。
- `localPath`：保存到服务器图片目录（如 `/tmp/figma-mcp-images`）下的相对路径；目录不存在会自动创建。

**nodes 单项字段**
- `nodeId`（必填）：图片节点 ID。
- `fileName`（必填）：本地文件名，须带扩展名且匹配 `^[a-zA-Z0-9_.-]+\.(png|svg|gif)$`，如 `icon-arrow.svg`。
- `imageRef`：节点若为 imageRef 填充，**必须带**；否则按 `nodeId` 渲染 PNG。下载矢量 SVG 或 GIF 时留空。
- `gifRef`：节点为动画 GIF 填充时必带，用于拿动态文件而非静态快照。
- `pngScale`：PNG 导出倍率，默认 2。
- 其他：`needsCropping` / `cropTransform` / `requiresImageDimensions` / `filenameSuffix`（裁剪与尺寸相关，按需）。

**典型调用**
```
download_figma_images({
  fileKey, localPath: "assets/icons",
  nodes: [{ nodeId: "12:34", fileName: "logo.svg", imageRef: "abcd-1234" }]
})
```

## 常见坑

- **整树爆炸**：大文件不传 `nodeId` 会返回巨大 JSON，卡顿且费 token。先用链接里的 `node-id` 参数定位。
- **imageRef 漏填**：带图片填充的节点只传 `nodeId` 会出错或拿到空图，必须带 `imageRef`。
- **nodeId 格式错**：严格 `数字:数字` 或分号路径，少写冒号会校验失败。
- **误以为能写**：若环境只有 `get_figma_data` / `download_figma_images`，无 `create_*` / `update_*` / `set_*` 工具，任何"建 / 改 Figma"都走 handoff 降级。

## 写操作映射（可写 MCP 主路径）

> 不同 provider（plugin 型 MCP）的工具名不同，先用 `ToolSearch` 查当前环境真实工具名，再按下表把 Step 8 的「写入规格」映射过去。**不要硬编码下面示例名**——以环境实际暴露的为准。

| HTML/CSS 概念 | Figma 图元 | 典型写操作（以实际工具名为准） |
|---|---|---|
| 根容器 / 页面区块 | Frame / Page | `create_frame` / `create_page` / `create_node(type=FRAME)` |
| 按钮 / 卡片组件 | Component + Component Set | `create_component` / `create_component_set` |
| 状态 / 尺寸 | Variant（property=value） | `add_variant` / `set_variant_property` |
| 颜色 / 字号 / 间距 token | Variable（color / number / string） | `create_variable` / `set_variable` / `create_variable_collection` |
| 弹性布局 | Auto Layout | `set_auto_layout`（direction / gap / padding / alignment / resizing） |
| 填充 / 描边 / 圆角 / 阴影 | Fill / Stroke / Corner / Effect | `set_fill` / `set_stroke` / `set_corner_radius` / `set_effect` |
| 图层命名 | Node name | `update_node_name`（与 HTML class 同名，D2C-ready） |

**执行顺序（至关重要）**：先建 **Variables 集合** → 再建引用它们的 frame / 组件（token 先行，避免裸值）→ 套 Auto Layout → 建 Component Set + variant → 套填充/圆角/阴影 → 统一命名。写前确认**落点文件 / 页面**，不覆盖用户已有内容除非获授权。

**常见写坑**：Variable 未建就填裸 hex（后续无法批量改）；Auto Layout 的 resizing 设错导致子节点被拉伸；variant property 名大小写/空格不一致；图层名留默认 `Frame 12`。

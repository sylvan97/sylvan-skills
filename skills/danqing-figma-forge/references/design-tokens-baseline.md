# Design Token 基线：从 Figma 读到 HTML

> 非设计师最大的"没参考"焦虑，靠两件事解决：(1) 把你已有的 Token 体系读进来当权威基线；(2) 没有时用一个成熟通用基线。本文档讲这两套，以及 Figma token → CSS 变量的映射约定。

## 一、首选基线：你的「中国色」三层次 Token（已内置真实令牌集）

你已有一套基于中国色官网（zhongguose.com）526 个 2D 色值的三层次 Design Token，通过 Tokens Studio 插件在 Figma 中以 **W3C DTCG 格式 JSON** 管理，三层 Variable Collection 通过 reference / alias 连接。

**真实令牌集已随本 skill 附带**，可直接当权威基线使用，无需每次都从 Figma 重新读取：

> `references/zhongguose-design-tokens.json`（DTCG JSON，约 86KB，638 个 color token，含 Light + Dark 双主题）

**实际结构（已核验）**：

| 层 | Token 组 | 数量 | 含义 | 在 Figma 里 |
|---|---|---|---|---|
| **Raw** | `global.color` | 526 | 原始色值（如「苍青」「胭脂」的 hex），无语义 | 基础 Color Variable 集合 |
| **Semantic** | `global.semantic` | 34 | 语义别名（`color.primary`、`color.surface`、`text.secondary`） | 引用 Raw 层，表达用途 |
| **Component** | `global.component` | 41 | 组件级 token（`btn.primary.bg`、`card.radius`） | 引用 Semantic 层，绑定组件 |
| **Dark 覆盖** | `dark.semantic` | 34 | 暗色主题下的语义覆盖 | 随主题切换 |
| **Dark 覆盖** | `dark.component` | 3 | 暗色主题下的少量组件覆盖 | 随主题切换 |

- 顶层键：`$description`、`$metadata`（`tokenSetOrder: ["global","dark"]`）、`$themes`（Light 选中 / Dark 未选）、`global`、`dark`。
- 主题机制：`$themes` 定义 Light（仅 `global`）与 Dark（`global` + `dark` 覆盖）；写 HTML 时用 CSS 变量 + `prefers-color-scheme` 或 `.dark` 类切换，写 Figma 时用 Variables 的 Light/Dark mode 映射同一组 `global.semantic` / `global.component`。

**使用方式**：
1. **直接载入作基线（推荐，无需 Figma 读权限）**：把 `references/zhongguose-design-tokens.json` 的内容作为 token 表来源，按三层结构抽取你需要的部分（如取 `global.semantic` 的 34 个语义色 + `global.component` 的 41 个组件 token），沿 `global.semantic`/`global.component` 的 `$value` 引用链（别名 → Raw hex）还原真实色值。
2. **从 Figma 实时读取（若有可写/只读 MCP 且已落地该库）**：用 `get_figma_data` 读同一套 Variable Collection，核对与内置 JSON 是否一致；不一致以 Figma 实时值为准。
3. 产出 token 表（变量名 → 值 → 类型 → 用途 → 来源层）。这就是本 skill 的权威基线，**优先于下方通用基线**。

**若用户明确不用中国色体系**：改用第二节通用基线，交付时注明"已替换为通用基线"。

## 二、降级基线：通用 token（shadcn / Radix 风格）

无源文件或源文件未就绪时使用。作为起点，交付时明确标注可被替换。

```css
:root {
  /* Color — Semantic 层命名 */
  --color-bg: #FFFFFF;
  --color-surface: #F6F7F9;
  --color-primary: #7C3AED;
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;

  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --text-h1: 700 48px/1.1 var(--font-sans);
  --text-h2: 700 32px/1.2 var(--font-sans);
  --text-body: 400 16px/1.6 var(--font-sans);
  --text-caption: 400 13px/1.4 var(--font-sans);

  /* Spacing — 关系规则，非孤立数字 */
  --space-xs: 8px;   /* 元素内 padding / gap */
  --space-sm: 16px;  /* 组内 gap */
  --space-md: 32px;  /* 区块 gap */
  --space-lg: 64px;  /* 页面 section gap */

  /* Shape & Effect */
  --radius-sm: 8px;
  --radius-md: 16px;
  --shadow-card: 0 4px 12px rgba(0,0,0,0.08);
}
```

每个值写一行**用途**（如 "32px 区块间距营造留白"），避免"孤立数字"反模式。

## 三、Figma token → CSS 变量映射约定

- 同名同值：Figma 变量 `color.primary` → CSS `--color-primary`。
- 类型对应：Figma Color → CSS 颜色值；Number → CSS 长度（px）；String → CSS 字体族 / 内容。
- 关系保留：Figma 的 reference（Semantic 引用 Raw）在 CSS 里用 `var(--raw-xxx)` 表达，不要内联 hex。
- 命名 D2C-ready：用点分层级（`btn.primary.bg`），与 Figma 图层语义名一致（`btn-primary`、`card-item`、`title-h2`）。

## 四、什么时候该停下来问用户

- 用户给了 fileKey 但你读不到预期的三个 Collection → 问用户 Collection 名称 / 节点位置。
- 用户既没给 fileKey 又没说用通用基线 → 默认通用基线并在交付注明，或问用户偏好。
- token 值存在歧义（同名多值、未解析的 alias）→ 列出冲突让用户拍板，不要猜。

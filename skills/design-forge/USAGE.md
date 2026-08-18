# Design Forge v0.1 使用指南

Design Forge 是一个“从对话到设计稿”的设计 Agent Skill。

它不是简单的 UI 生成器，而是帮助不会设计的人，把自然语言需求逐步转换成：

```text
自然语言意图
  → 设计方向
  → 真实参考
  → Design Decisions
  → Design State
  → 可交互 HTML Preview
  → Preview QA
  → 用户验收
  → Accepted Snapshot
  → Figma / React / Vue / 其他 Renderer
```

> 当前分支：`feat/design-forge-v0.1`
>
> 当前版本重点是流程、状态、Renderer 边界和 Preview 验证。真实 Skill Host / Figma Renderer 仍属于 Alpha 阶段。

---

## 1. 最简单的使用方式

如果你的 Skill Host 已经加载了 `design-forge/SKILL.md`，**不需要记命令，也不需要懂设计术语**。

直接用自然语言描述你想做的东西即可。

例如：

> 我想做一个个人知识库网站，PC / Pad / H5。第一眼希望有电影感，但是内容很多，我又希望用户能快速找到文章。我不懂设计，希望你通过提问帮我确定设计方向，最好给我几个真实网站参考。先做完整可交互 HTML，满意后再决定是否做 Figma。

Design Forge 应该主动完成后续的设计发现和决策过程。

---

## 2. 第一步：先选择输出路径

启动后，Design Forge 会先确认你最终想要的产物方向。

### A. Figma Design

适合：

- 想先获得正式设计稿
- 使用 Figma 继续设计、评审或交接
- 希望最终落到 Figma 文件

流程：

```text
选择 Figma
  ↓
检测 Figma MCP
  ↓
检查工具是否存在
  ↓
检查权限 / 授权状态
  ↓
正常 → 继续
不正常 → 提醒安装、授权并验证
```

**不要在 Figma MCP 不可用时假装已经生成 Figma。**

如果用户完成 HTML Preview 验收后仍然没有可用的 Figma MCP：

```text
HTML 验收完成
  ↓
提示：当前环境没有可用 Figma MCP
  ↓
Design Forge 流程结束
```

### B. Local Frontend / 纯本地项目

适合：

- 希望直接在当前前端项目里实现 UI
- React / Vue / Next.js / Nuxt 等已有项目
- 不需要 Figma

Skill 会检查当前工作目录：

```text
空目录
  ↓
生成默认 HTML Preview 项目

已有项目
  ↓
识别项目技术栈
  ↓
检查 routes / pages / app structure
  ↓
选择正确的页面和文件修改
```

这条路径不要求 Figma MCP，也不强制使用 agent-browser。

---

## 3. 你不懂设计，也完全没关系

不要试图回答：

- 我要什么 Grid？
- 我要什么 Typography Scale？
- 我要什么视觉层级？
- 我要什么 Motion Curve？

你只需要说人话，例如：

> 想高级一点。
>
> 不要像 AI 做的。
>
> 第一眼要有冲击力。
>
> 但是不能太花。
>
> 内容很多，还是要容易找。
>
> 我喜欢 Dia 那种感觉，但不要照抄。

Design Forge 会把这些表达转换成设计维度，例如：

```text
“高级”
  → typography / spacing / material / restraint

“电影感”
  → composition / pacing / contrast / imagery / motion

“容易找”
  → hierarchy / navigation / information scent / density

“不要太花”
  → visual restraint / motion budget / decoration budget
```

**你负责表达感受和目标，Design Forge 负责翻译成设计语言。**

---

## 4. 设计方向怎么确定

Design Forge 不应该直接问：

> “你想用什么颜色？”

而应该先给你少量、有明显区别的方向。

例如：

```text
方向 A — Cinematic Editorial
强视觉叙事 / 大尺度排版 / 低频动效

方向 B — Editorial Knowledge
杂志感 / 高信息层级 / 阅读效率优先

方向 C — Quiet Premium
克制 / 大留白 / 高级字体 / 极少装饰
```

每个方向应该配合**真实、可访问的网站参考**，并告诉你：

> “去这个网站看什么。”

而不是简单丢给你一串灵感链接。

例如：

```text
参考 A
看：首页视觉节奏、内容分层

参考 B
看：信息密度、导航权重

参考 C
看：字体、留白、动效克制度
```

你可以直接说：

> A 的视觉我喜欢，但 B 的信息结构更适合我。

Design Forge 会把它们合成新的设计方向，而不是强迫你三选一。

---

## 5. 如何描述你“不喜欢”的地方

这是 Design Forge 很重要的一部分。

你不需要重新描述整个设计。

例如第一版出来以后你说：

> 太艺术了，我想更容易找文章。

然后又说：

> 但首页第一眼还是要震撼。

Design Forge 应该理解为：

```text
保留：Homepage Impact
降低：全站 Cinematic Decoration
提高：Retrieval / Hierarchy
```

而不是：

```text
旧方案全部删除
重新开始
```

因此设计状态会形成类似：

```text
S01
 ↓
用户反馈
 ↓
部分 Decision → stale / superseded
 ↓
新增 Decision
 ↓
S02
```

---

## 6. HTML Preview 是正式设计验证阶段

当设计方向确定以后，Design Forge 会先生成**完整可交互 Preview**。

它不是只有一个 `index.html`。

例如：

```text
Preview
├── Home
├── Knowledge Index
├── Category
├── Article Detail
└── ...
```

页面之间应该真实跳转，并实现影响设计判断的核心交互：

- 导航
- 筛选
- 搜索（如果设计需要）
- 展开 / 收起
- 状态切换
- 移动端菜单
- 页面进入 / 离开
- 关键动效

Preview 的目标是：

> **让你真的“使用”一次设计，而不是只看截图。**

---

## 7. Preview QA

Preview 生成以后，需要经过 QA。

检查范围：

```text
Route QA
Interaction QA
Responsive QA
Accessibility QA
Content QA
Motion QA
```

如果环境有 `agent-browser`，Design Forge 可以请求你的授权后，让 Agent 自动操作 Preview。

典型流程：

```text
检测 agent-browser
  ↓
不可用 → 手动验收

可用
  ↓
请求用户授权
  ↓
授权
  ↓
自动访问 Preview
  ↓
点击 / 跳转 / 筛选 / 菜单 / 返回
  ↓
检查结果
  ↓
QA Report
```

### 没有 agent-browser 怎么办？

**不用安装也可以继续。**

直接进入人工验收：

> Preview 已生成，请你实际浏览 PC / Pad / H5，并告诉我哪些地方需要修改。

`agent-browser` 是加速 QA 的能力，不是流程依赖。

---

## 8. 用户验收是硬门禁

Preview QA PASS 不等于设计完成。

必须由用户确认：

```text
Preview QA PASS
      ↓
User Review
      ↓
修改？ ── YES → 新 Snapshot → Preview
      │
      NO
      ↓
Accepted Snapshot
```

只有 `Accepted Snapshot` 才能进入 Renderer。

---

## 9. 为什么要有 Accepted Snapshot

Renderer **不能直接读取聊天历史**。

最终渲染必须来自：

```text
Accepted Snapshot
```

它包含最终有效的：

- Design Decisions
- Constraints
- Design Tensions
- Routes
- Tokens
- 状态信息

这样可以避免：

```text
HTML 是新版
Figma 却拿到了旧方案
Token 是另一版
```

统一成为：

```text
Accepted Snapshot
       ↓
 ┌─────┼─────┐
 ↓     ↓     ↓
HTML  Figma  React/Vue
```

---

## 10. Figma 路径

如果一开始选择 Figma：

```text
Intent
 ↓
Design Direction
 ↓
Design Decisions
 ↓
HTML Preview
 ↓
Preview QA
 ↓
User Acceptance
 ↓
Accepted Snapshot
 ↓
Figma Renderer
```

注意：**Figma 不是第一步。**

我们刻意先让你使用 HTML Preview 验证设计。

因为修改 HTML Preview 的成本远低于发现 Figma 设计方向不对以后再返工整套设计稿。

---

## 11. Local Frontend 路径

如果选择纯本地前端：

### 空目录

默认生成：

```text
HTML + CSS + JS Preview Project
```

### 已有 React / Next.js 项目

Skill 应该先识别：

```text
package.json
routes
app/
pages/
src/
components/
```

然后根据实际项目结构决定输出文件，而不是创建一个与项目无关的第二套页面。

### 已有 Vue / Nuxt 项目

同理，应该根据项目现有 routes / pages / components 结构工作。

### Local Frontend 不强制 agent-browser

这条路径的最终验证责任交给用户现有开发环境。

---

## 12. 推荐的第一次使用 Prompt

可以直接复制：

```text
我想使用 Design Forge 帮我设计一个个人知识库网站。

目标：
- PC / Pad / H5
- 内容包括工作经验、设计沉淀、灵感、生活记录
- 首页希望第一眼有视觉冲击力
- 但内容很多，必须容易找到和阅读
- 我没有设计基础，所以不要直接问我设计术语
- 请通过少量问题帮我确定方向
- 每个设计方向给我 1–2 个真实网站参考，并告诉我应该看什么
- 先不要做 Figma
- 设计方向确定后，先生成完整可交互的多页面 HTML Preview
- 我验收 HTML 以后，再决定是否进入 Figma
```

---

## 13. 推荐的反馈方式

不需要使用专业术语。

### 好的反馈

> 首页太像作品集了，我更想让它像一个长期积累的知识空间。

> 视觉很喜欢，但是找文章有点费劲。

> 详情页很好，首页动效太多了。

> 我喜欢 A 的字体和 B 的布局。

> 这个方向有点像 Apple，我不想这么明显。

### 不需要这样反馈

> 请把视觉层级调整到 8pt Grid，并将 H1 改成 64px。

除非你自己确实知道这些东西。

---

## 14. 当前版本的边界

Design Forge v0.1 当前重点是验证设计流程，而不是承诺所有 Renderer 都已经生产可用。

```text
Conversation / Intent       ✅
Design Reasoning            ✅
Design State                ✅
Snapshot Gate               ✅
Reference Explorer          ✅
HTML Renderer Contract      ✅
HTML Preview Prototype      ✅
Preview QA Contract         ✅
Agent-browser Flow          ✅
Figma Capability Gate       ✅

真实 Skill Host E2E         ⏳
生产级 HTML Renderer        ⏳
真实 Figma Renderer         ⏳
React Renderer              ⏳
Vue Renderer                ⏳
```

所以当前最适合把它当成 **Alpha / Design Workflow Prototype** 使用。

---

## 15. 仓库入口

- `SKILL.md`：核心执行协议
- `schemas/`：Design State Schema
- `knowledge/`：设计知识
- `capabilities/`：工具与环境能力契约
- `renderers/`：Renderer
- `tests/`：测试与 Scenario

完整 Skill：

`skills/design-forge/SKILL.md`

---

## 16. 一句话理解 Design Forge

> **你负责告诉它“我想让用户感受到什么、解决什么问题”；Design Forge 负责把这些模糊想法变成设计决策，让你先在真实可交互页面里体验，确认以后，再交给 Figma 或前端 Renderer。**

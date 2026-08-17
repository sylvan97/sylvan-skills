---
name: design-forge-zh
description: 将模糊的产品或网站想法，通过对话式探索、真实网站参考、设计推理、可交互多页面 HTML 预览、可选浏览器验证，最终转化为经过验证且可编辑的 Figma 设计稿。适用于用户想设计网站、App、产品界面、页面体系或视觉体验，但不知道如何用专业设计语言表达需求的场景。
---

# Design Forge

Design Forge 不是一次性 UI 生成器，而是一套对话式设计流程。

它的目标是帮助用户发现自己真正想要的体验，解释重要的设计选择，在 Figma 之前用真实可交互的预览验证体验，最后再把确认后的方向落到 Figma。

## 核心原则

> 不要求用户说设计师语言，而是把用户的日常语言翻译成设计决策。

用户拥有审美、优先级、内容和最终主观确认权。Design Forge 负责设计推理、综合、系统化、实现细节和验证。

## 完整流程

```text
DISCOVER  发现
  ↓
EXPLORE   探索
  ↓
DEFINE    定义
  ↓
SYSTEMIZE 系统化
  ↓
PREVIEW   体验预览
  ↓
VERIFY    验证
  ↓
CRITIQUE  设计评审
  ↓
APPROVE / REVISE 确认 / 修改
  ↓
FORGE     Figma 落地
  ↓
REVIEW    最终检查
```

除非用户明确要求跳过流程，否则不要从一个模糊需求直接进入 Figma。

## 第一阶段：理解需求

先读取用户已经提供的信息，不要重复询问已经明确的内容。

提取：

- 要设计什么
- 为什么设计
- 用户是谁
- 内容 / 页面 / 流程
- 平台
- 约束
- 参考对象
- 用户明确喜欢和不喜欢的东西
- 会影响设计的技术限制
- 当前不确定性

建立内部 Intent Model。不要向用户暴露内部完整推理过程。

### 模糊需求处理

信息不足时，不要给用户发送巨型设计问卷。

先找出**影响最大的一个未知因素**，优先解决它。

优先问普通人能够直接回答的问题：

- “下面哪一种感觉更接近你？”
- “你希望它安静一点，还是更有冲击力？”
- “你希望内容更像精心策展，还是信息密度很高？”
- “你希望界面保持安静，让内容成为主角吗？”

不要直接问：

- “你希望使用什么 8pt spacing scale？”
- “你希望使用什么 type ramp？”
- “你希望使用什么 grid system？”

这些应该由 Agent 根据已经确定的方向推导。

## 第二阶段：通过真实参考发现审美

当用户无法明确描述主观方向时，使用真实、可访问的网站或产品作为视觉锚点。

不要只说“选择一个风格”。尽可能提供具体示例，让用户直接观察真实效果。

针对每个参考，提炼少量可观察特征：

- 构图
- 字体
- 信息密度
- 色彩行为
- 图片
- 交互
- 动效
- 导航
- 响应式行为

让用户在具体选项之间比较，而不是要求用户先学会设计术语。

### Reference 原则

参考对象是证据，不是模板。

不能直接复制参考网站。必须提取其设计原则，再结合用户内容和意图重新设计。

## 第三阶段：形成 Design Direction

在实现之前，形成简洁的 Design Direction，包括：

```text
目的
目标用户
希望产生的感觉
希望避免的感觉
视觉性格
构图方式
字体性格
色彩性格
内容密度
交互性格
动效性格
响应式性格
图片方向
参考对象
已知冲突 / 取舍
```

用普通语言呈现给用户。

用户必须能够确认或修改这个方向，然后才能认为方向已经确定。

## 第四阶段：设计推理

对于重要的设计选择，记录 Design Decision：

```yaml
id:
question:
decision:
rationale:
evidence:
confidence:
```

不要暴露 Chain-of-Thought。只在有帮助时向用户提供简洁的设计理由和依据。

### Design Tension

当两个目标互相冲突时，要明确展示取舍，而不是偷偷替用户做决定。

例如：

```text
电影感 / 沉浸感 ↔ 信息密度

方案 A：更多留白，更强的视觉焦点
方案 B：一次展示更多内容
```

只有当取舍会明显改变体验时才要求用户选择。否则可以做合理判断并记录。

## 第五阶段：建立 Design Specification

使用 `frameworks/design-spec.md` 作为规范。

Design Specification 是以下环节共同使用的唯一设计契约：

- Experience Preview
- Design Critic
- Figma 实现
- 未来其他 Renderer

优先使用语义化设计值，而不是没有解释的裸值。

需要时描述：

- 字体
- 色彩
- 图片
- 构图
- 容器和网格
- 间距
- 组件和状态
- 交互
- 动效
- 响应式变化
- 无障碍
- 页面和层级
- 决策和设计冲突

## 第六阶段：Experience Preview

不要默认只生成一个静态 HTML 页面。

如果项目存在多个页面或状态，将 Preview 视为一个临时的多页面网站。

典型结构：

```text
/
/list
/list/item
/article/example
/...
```

只实现验证重要设计假设所需要的最小真实交互体验。

### Preview 要求

必须尽可能保持：

- 信息层级
- 视觉角色
- 交互意图
- 动效性格
- 响应式策略
- 真实内容结构

根据项目需要实现：

- 导航
- 菜单
- 展开 / 收起
- 主要 CTA
- Tab / Filter
- Hover / Focus
- 响应式变化
- 代表性动效

不要把时间浪费在生产环境基础设施上。Preview 是验证设计的临时产物。

### Snapshot 原则

每一个被用户审阅过的 Preview 都必须成为版本化 Snapshot。

已经被审阅的 Snapshot 不允许静默修改。Design Specification 改变后必须生成新版本。

使用 `preview/experience-preview.md` 和 `verification/preview-snapshot.md`。

## 第七阶段：验证

Preview 生成后，检查当前环境是否具有交互式浏览器验证能力。

能力应该抽象为：

```text
interactive-browser-verification
```

如果环境存在 `agent-browser`，优先使用它，但 `agent-browser` 永远不是硬依赖。

### 如果存在浏览器验证能力

在访问 Preview 之前必须向用户请求权限。

简洁说明：

- 将访问什么
- 为什么需要访问
- 会验证哪些关键流程

获得授权后，根据 Interaction Test Plan 执行高价值测试。

不要机械地点击所有元素。测试应该来自 Design Specification 中真正重要的用户旅程。

尽可能收集：

- URL / 路由变化
- 实际状态
- 截图
- 交互结果
- 运行时观察结果

### 如果没有浏览器验证能力

不能因此让整个流程失败。

根据同一份 Interaction Test Plan 生成结构化人工 QA Checklist，由用户自行检查并反馈：

```text
通过
失败 + 描述
跳过
```

人工验证是正常流程，不是错误状态。

### 验证等级

```text
0 — 只有产物
1 — 人工验证
2 — 自动浏览器验证
3 — 自动验证 + 视觉证据
```

始终说明实际达到的验证等级。没有测试过的流程绝不能声称通过。

## 第八阶段：Design Critic

将实际 Preview 与已经确认的 Design Specification 对比。

检查：

- 是否符合用户意图
- 信息层级
- 构图
- 字体
- 色彩角色
- 交互行为
- 响应式变化
- 动效
- 无障碍
- 内容真实性
- 实现缺陷

问题分级：

```text
blocker 阻断
major 重要
minor 次要
observation 观察
```

如果只是个人审美偏好，而没有违反已经确认的意图或设计原则，不要把它当作缺陷。

如果发现系统级问题，应先修改 Design Specification，再重新生成受影响页面，而不是只修一个页面的局部代码。

## 第九阶段：用户确认

最终主观确认权属于用户。

进入 Figma 之前确认：

- 整体方向是否正确
- 关键流程是否正确
- 响应式是否可以接受
- 剩余取舍是否已经理解

此阶段不要求像素级最终定稿。

## 第十阶段：Figma Forge

只有用户确认 Experience 后，才能将批准的 Design Specification 作为 Figma 实现基线。

使用已有的 Figma Skill / MCP 能力操作画布。

适当映射：

```text
color → Variables / Styles
spacing → Variables
text roles → Text Styles
components → Components
states → Variants
layout → Auto Layout / constraints
responsive → variants / constraints / layout rules
```

Figma 实现过程中不能偷偷改变已经确认的视觉方向。

## 第十一阶段：Figma Review

Figma 不是流程终点。

最终产物必须与批准的 Design Specification 和 Preview Snapshot 对照检查。

检查：

- 设计漂移
- 缺失状态
- Token 不一致
- 层级问题
- 响应式问题
- 组件不一致

所有有意接受的偏差都应明确记录。

## 与用户对话的规则

### 少问，但问关键问题

能一次解决时，不要连续问十个问题。

### 给视觉锚点

用户不知道怎么描述时，提供具体参考、图片、网站或二选一对比。

### 翻译，而不是教学

用户不需要先学会设计术语才能做出好的设计选择。

### 解释重要取舍

会明显影响体验的选择，要简短说明原因和建议。

### 不伪装确定性

明确区分：

- 用户决定
- Agent 建议
- Agent 推断
- 已验证事实
- 尚未验证的假设

## 阶段门禁

```text
DISCOVERY_READY
    ↓
DIRECTION_APPROVED
    ↓
SYSTEM_READY
    ↓
PREVIEW_READY
    ↓
EXPERIENCE_APPROVED
    ↓
FIGMA_READY
    ↓
FIGMA_REVIEWED
```

不能静默跨过阶段门禁。

## 必须参考的文件

执行某个阶段时，只读取与当前任务相关的最小知识集合，不要一次性加载整个知识库。

```text
frameworks/design-spec.md
preview/experience-preview.md
verification/README.md
verification/interaction-test-plan.md
verification/preview-snapshot.md
verification/design-qa.md
```

视觉设计知识按需读取 `knowledge/` 下的相关模块。

## 失败与降级

任何可选能力不可用时：

- 记录限制
- 使用下一等级的工作流
- 不伪造成功验证
- 除非用户明确要求，否则不要因为某个可选工具不可用而阻塞整个设计流程

## 禁止模式

不要：

- 从模糊 Prompt 直接跳到 Figma
- 给用户发送巨型设计问卷
- 强迫用户使用设计术语
- 复制参考网站
- 在交互很重要时只生成漂亮的静态 Preview
- 把浏览器自动化变成硬依赖
- 没有证据却声称测试通过
- 静默修改已经确认的 Design Direction
- 让 Figma 实现重新定义设计方向
- 为 Preview 过度建设生产级代码架构

## 成功标准

一次成功的 Design Forge 会让用户最终能够回答：

```text
我知道自己选择了什么，
我知道为什么它是这样的，
我真正体验并验证过它，
最后的 Figma 又准确地实现了这个方向。
```

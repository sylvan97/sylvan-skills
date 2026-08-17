# Design Forge Question Strategy

Questions are a design tool, not a form.

The purpose of a question is to resolve uncertainty that materially changes the experience.

## 1. Question contract

Before asking, identify:

```text
What is unknown?
Why does it matter?
What choices are plausible?
Can the user perceive the difference?
Can the agent decide safely without asking?
```

If the last answer is yes, do not ask.

## 2. Ask about outcomes, not implementation

Avoid:

```text
Which breakpoint do you want?
Which spacing scale?
Which grid?
Which border radius?
```

Prefer:

```text
你希望移动端更像桌面版的压缩版本，
还是一个针对手机重新组织的体验？
```

## 3. Use progressive questioning

Start broad, then narrow.

```text
Round 1
→ overall feeling / purpose

Round 2
→ visual language / information priority

Round 3
→ interaction / motion / responsive behavior

Round 4
→ only unresolved high-impact details
```

Do not ask all rounds if earlier answers already provide enough evidence.

## 4. Concrete alternatives

When the user has no design vocabulary, give 2–4 clearly different options.

Good option differences:

```text
quiet ↔ expressive
editorial ↔ utility
immersive ↔ efficient
minimal ↔ information-rich
static ↔ kinetic
```

Bad option differences:

```text
12px ↔ 16px
Inter ↔ Helvetica
8-column ↔ 12-column
```

unless the user explicitly wants to discuss those details.

## 5. Reference-assisted questions

For subjective visual decisions, pair options with real references when possible.

Structure:

```text
Direction A
what to inspect
reference

Direction B
what to inspect
reference

Question:
Which feels closer to the experience you want?
```

Never present references as if they are templates to copy.

## 6. One question, one decision

Avoid questions containing multiple unrelated decisions.

Bad:

```text
你想要什么颜色、字体、布局、动效和圆角？
```

Better:

```text
先确定一个最重要的感觉：
你希望这个页面更像“编辑部”，还是更像“工具”？
```

## 7. Explain why only when useful

A short reason can increase trust:

```text
这个选择会影响整个页面的视觉密度，
所以我想先确认你的偏好。
```

Do not explain the full internal reasoning process.

## 8. Reflect the answer

After a meaningful answer, translate it back into design language:

```text
你选择的是：
“安静、有电影感，但不要太奢华。”

我会把它转成：
低装饰密度 + 强构图 + 克制动效 + 高质量图片 + 不使用明显奢华符号。
```

Then continue.

## 9. Detect ambiguity

If the user says:

```text
“高级一点”
“现代一点”
“有质感”
“科技感”
“简洁”
```

do not treat it as a complete design decision.

Ask what kind of perception they want and offer concrete directions.

## 10. Detect contradiction

If the user asks for:

```text
极简 + 展示 40 个内容
电影感 + 信息密度极高
强动效 + 极致性能
品牌大胆 + 完全不打扰用户
```

surface the tension rather than pretending everything can be maximized simultaneously.

## 11. User can delegate

If the user says:

```text
你决定
你看着办
按你专业判断
```

the agent may decide within its ownership boundary.

Still ask when:

- the decision defines brand identity,
- the choice is irreversible or expensive,
- user preference is essential,
- two materially different outcomes are equally valid.

## 12. Stop asking

Stop when:

- the visual direction is coherent,
- high-impact preferences are known,
- major tensions are resolved,
- remaining decisions can be derived safely.

The goal is not maximum conversation length.

## 13. Question output format

Use a compact structure:

```text
[What we need to decide]

Option A — ...
Option B — ...

[optional references]

你更接近哪一个？
```

Only add more context when the user needs it to make the decision.

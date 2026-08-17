# Typographic Hierarchy

## Principle

Typography communicates structure, emphasis, voice, and reading rhythm. Hierarchy comes from relationships among size, weight, line height, measure, contrast, and placement—not size alone.

## Trigger

Activate for reading-heavy pages, editorial experiences, strong brand typography, multilingual content, and layouts where text is a primary visual element.

## Non-designer question

> 你希望文字更像“内容本身就是视觉主角”，还是让文字安静地服务于图片和功能？

## Decision

Define semantic text roles before choosing individual sizes.

```text
Display
Heading
Subheading
Body
Label
Caption
```

Then define relationships across viewport sizes.

## Specification implications

For each role consider:

- family
- size
- weight
- line-height
- letter-spacing
- measure / max width
- casing
- color role

## Verification

A user should be able to scan headings and understand the document structure before reading every paragraph.

## Common failures

- too many font sizes
- using weight as the only hierarchy mechanism
- long text lines
- insufficient distinction between labels and body copy
- ignoring CJK / multilingual metrics

## Sources

- Robert Bringhurst, The Elements of Typographic Style
- Material Design, Typography guidance

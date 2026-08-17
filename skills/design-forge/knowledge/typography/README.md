# Typography Knowledge

Typography is not decoration. It controls reading, hierarchy, tone, rhythm, density, and perceived confidence.

Design Forge should select typography from the user's communication intent and content structure, not from font popularity.

## Reasoning chain

```text
User intent
  ↓
Reading behavior + emotional tone
  ↓
Type characteristics
  ↓
Hierarchy + scale + spacing
  ↓
Typography system
  ↓
Tokens / variables
```

## Core dimensions

- typeface personality
- role of serif / sans / display / mono
- size
- weight
- line-height
- measure
- letter spacing
- case
- contrast between levels
- language/script support
- fallback behavior

## Important rule

A typography system should make the content hierarchy obvious before the user consciously notices the typography.

## Agent behavior

Ask about perceived reading experience, not font terminology.

Good:
- Should the title feel commanding or quiet?
- Should long-form reading feel literary or neutral?
- Should numbers feel technical or human?

Avoid:
- Which modular scale do you want?
- Do you want a grotesk?

## Figma translation

Once the direction is approved, derive semantic text roles such as:

```text
Display / Hero
Heading / 1
Heading / 2
Body / Large
Body / Regular
Body / Small
Label / UI
Caption
```

Exact values should be derived from viewport, content, typeface metrics, and hierarchy rather than blindly copied from a preset scale.

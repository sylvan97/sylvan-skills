# Layout Knowledge

Layout is the organization of content in space. It should emerge from content hierarchy and intended behavior rather than from a decorative grid.

## Reasoning chain

```text
Content
  ↓
Hierarchy
  ↓
Reading / interaction path
  ↓
Composition
  ↓
Container + grid
  ↓
Spacing system
  ↓
Responsive transformation
```

## Core dimensions

- container strategy
- alignment
- columns
- gutters
- spacing rhythm
- grouping
- density
- focal points
- section rhythm
- content measure
- responsive transformation

## Important rule

> A grid is a constraint system, not a visual style.

Use it to make relationships consistent. Do not force content into a grid merely because a grid exists.

## User questions

Ask experiential questions:

- Should the page feel tightly composed or spacious?
- Should content sit in a narrow reading column or occupy the full viewport?
- Should the page feel symmetrical and calm or asymmetric and dynamic?
- What should remain visible together?

## Action

Define layout relationships semantically:

```text
page.container
content.measure
section.gap
stack.gap
inline.gap
surface.padding
```

Then derive actual dimensions for the selected viewport and type system.

## Critique

Check:

- visual hierarchy
- alignment consistency
- grouping
- scan path
- whitespace rhythm
- content overflow
- long-content behavior
- responsive transformations

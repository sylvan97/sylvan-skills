# Typography: Hierarchy and Scale

## Principle

Typographic hierarchy communicates importance, grouping, and reading order. It should reduce the effort required to understand a page.

## Recognition

A hierarchy is weak when:

- headings and body copy compete equally
- labels look as important as content
- every level uses a different visual trick
- hierarchy depends only on color
- mobile layouts lose the distinction between levels

## Design levers

Hierarchy can be created through:

- size
- weight
- contrast
- spacing
- typeface role
- position
- case
- alignment
- surrounding whitespace

Do not use all levers simultaneously. Strong systems often rely on a small number of deliberate differences.

## User question

Instead of asking for a type scale, ask:

> "Should the title immediately dominate the page, or should it feel like part of a quiet editorial rhythm?"

## Decision

Choose a hierarchy strategy based on content and intent:

```text
high drama
→ stronger size contrast + larger display roles

editorial
→ nuanced size/weight + whitespace + measure

product / task-focused
→ clear functional levels + predictable spacing

data-dense
→ restrained scale + strong grouping + compact line-height
```

## Action

Create semantic roles before choosing exact values.

Example:

```yaml
text:
  display:
    purpose: establish entry point
  heading-1:
    purpose: major section
  heading-2:
    purpose: subsection
  body:
    purpose: primary reading
  meta:
    purpose: supporting information
```

Then tune the actual values to the chosen typeface and viewport.

## Critique

Ask:

1. Can the user scan the page without reading every word?
2. Is the most important content visually obvious?
3. Are adjacent levels sufficiently distinct?
4. Does the hierarchy survive grayscale and reduced contrast?
5. Does the same logic work on smaller screens?

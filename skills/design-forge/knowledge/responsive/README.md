# Responsive Knowledge

Responsive design is not a sequence of scaled screenshots. It is a strategy for preserving the intended experience as space, input, and reading conditions change.

## Reasoning chain

```text
Intent
  ↓
Content priority
  ↓
Interaction model
  ↓
Spatial constraints
  ↓
Responsive transformations
  ↓
Desktop / tablet / mobile
```

## Core dimensions

- content priority
- layout transformation
- navigation transformation
- type scaling
- image cropping / art direction
- density
- interaction target size
- ordering
- disclosure
- viewport-specific behavior

## Important rule

> Responsive behavior should preserve meaning, not geometry.

A mobile layout does not need to preserve desktop columns, but it should preserve the same hierarchy and intent.

## Transformation types

For every major element, decide whether it should:

- scale
- reflow
- stack
- collapse
- reorder
- transform interaction
- become progressive disclosure
- disappear
- remain persistent

The choice should follow content priority rather than breakpoint habit.

## User questions

Avoid asking for breakpoint numbers first.

Ask:

- What must remain immediately accessible on a phone?
- What can move below the fold?
- What information can become expandable?
- Should mobile feel like a compact version or a focused version of the desktop experience?

## Critique

Review each target viewport as its own experience.

Check:

- hierarchy
- navigation discoverability
- reading measure
- touch target practicality
- image subject preservation
- interaction changes
- content ordering
- motion appropriateness
- performance-sensitive media

## Figma translation

Represent responsive intent through component variants, Auto Layout behavior, constraints, and page-level transformations rather than only resizing frames.

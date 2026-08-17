# Experience Preview

## Purpose

Experience Preview is the low-cost, interactive validation stage between an approved Design Specification and Figma implementation.

It answers:

> "Does this design actually feel right when I use it?"

It is disposable, experience-first, and not automatically production code.

## Position in the workflow

```text
Design Specification
      ↓
Preview Generator
      ↓
Self-contained HTML
      ↓
Real interaction
      ↓
User feedback
      ↓
Design Critic
      ↓
Revise / Approve
      ↓
Figma
```

## Output contract

Default output should be a self-contained `index.html` whenever practical.

Allowed technologies:

- HTML
- CSS
- inline SVG
- vanilla JavaScript
- embedded demonstration data

External runtime dependencies should be avoided unless genuinely necessary.

## Renderer contract

The preview must preserve the canonical Design Specification's:

- information hierarchy
- composition strategy
- typography roles
- color roles
- spacing relationships
- component states
- navigation model
- disclosure behavior
- motion character
- responsive transformations
- accessibility intent

The preview may simplify implementation details that are irrelevant to experience validation, but it must not invent major design decisions.

## What the preview optimizes for

1. Fast iteration
2. Real interaction
3. Visual fidelity to the Design Specification
4. Responsive behavior
5. Easy inspection
6. Low implementation cost
7. Clear feedback loops

Do not turn this stage into a production engineering project.

## Interaction coverage

Implement only interactions that matter to the design hypothesis.

Typical candidates:

- navigation
- menu open / close
- tabs
- accordions
- filters
- hover
- focus
- scroll-driven transitions
- modal / drawer behavior
- progressive disclosure
- primary CTA flow
- responsive navigation

Static screenshots are not sufficient when behavior itself is being evaluated.

## Responsive preview

Expose all target viewports defined by the Design Specification when practical:

```text
Desktop
Tablet
Mobile
```

Responsive behavior must be represented as meaningful transformations, not merely width reduction.

For every major element, the preview should preserve the specified choice to:

- scale
- reflow
- stack
- collapse
- reorder
- transform interaction
- become progressive disclosure
- disappear
- remain persistent

## Motion preview

Motion validates rhythm and behavior. Implement representative motion, not every possible animation.

Validate:

- entrance rhythm
- transition character
- hover / press feedback
- scroll behavior
- continuity between states
- reduced-motion behavior

Do not add motion merely to make the preview impressive.

## Content fidelity

Use realistic content whenever content shape affects the design.

Include representative:

- title lengths
- metadata
- image ratios
- long and short states
- empty / loading / error states when relevant

Do not use lorem ipsum when realistic content is available.

## Optional preview shell

A lightweight shell may expose:

```text
Preview
├── viewport switcher
├── route / state selector
├── reset
└── feedback
```

The shell must remain visually separate from the experience being evaluated.

## Feedback loop

Users should be able to respond in ordinary language:

> "This feels too cold."

> "I like the homepage, but the navigation is awkward."

> "The mobile version feels cramped."

Map feedback back to the Design Specification before changing arbitrary HTML.

Classify feedback as needed:

```text
intent
visual
hierarchy
layout
typography
color
interaction
motion
responsive
accessibility
content
```

If the feedback indicates a system-level problem, update the specification first and regenerate affected regions.

## Fidelity levels

### Direction preview

Validate composition and emotional direction with minimal interaction.

### Experience preview

Validate realistic interaction, responsive behavior, content shape, and representative motion.

### Figma-ready preview

Validate stable visual roles, component states, and key interactions immediately before Figma implementation.

## Approval gate

The user should explicitly approve the experience before expensive Figma implementation unless they explicitly choose to skip preview validation.

Approval means:

- overall visual direction feels right
- major interactions feel right
- responsive behavior is acceptable
- remaining issues are understood and consciously accepted

Approval does not mean every pixel is final.

## Handoff to Figma

Produce a compact handoff:

```yaml
preview_handoff:
  approved_direction:
  confirmed_interactions: []
  confirmed_motion: []
  responsive_decisions: []
  unresolved_items: []
  design_decisions: []
```

## Anti-patterns

### Screenshot theater

Static HTML that looks good but has no meaningful interaction.

### Production-code trap

Spending most of the time on architecture, dependencies, routing, or backend concerns.

### Renderer drift

Preview invents values or interactions absent from the Design Specification.

### Decoration inflation

Adding effects solely to make the demo impressive.

### False completeness

Implementing every possible state when only representative states are needed to validate the design.

## Exit states

```text
PREVIEW_READY
    ↓
USER_REVIEW
    ├── APPROVED → FIGMA_READY
    └── REVISION_REQUIRED
             ↓
        DESIGN_CRITIC
             ↓
        UPDATE SPEC
             ↓
        REGENERATE
```

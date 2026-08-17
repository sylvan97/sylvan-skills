# Experience Preview

## Purpose

Experience Preview is a disposable, fully interactive HTML/CSS/JS representation used to validate a design direction before committing to Figma implementation.

It answers:

> "Does this actually feel right when I use it?"

It is not automatically production code.

## Position in the workflow

```text
Design Direction
      ↓
Design System
      ↓
Experience Preview
      ↓
User experiences it
      ↓
Critique / Revision
      ↓
Approved
      ↓
Figma
```

## Requirements

The preview should be:

- self-contained where practical
- runnable without a backend unless the experience genuinely requires one
- visually faithful to the approved direction
- genuinely interactive
- responsive across requested viewports
- easy to regenerate
- cheap to discard

## Interaction coverage

Use real interactions where they materially affect the experience:

- navigation
- hover
- focus
- active / selected states
- tabs
- accordions
- dialogs
- drawers
- filtering
- progressive disclosure
- scroll behavior
- transitions
- responsive navigation

Do not fake interaction with static screenshots when the behavior is part of the design question.

## Fidelity levels

### Direction preview

Used early to validate composition and emotional direction.

### Experience preview

Used after the direction is approved to validate realistic interaction, responsive behavior, and motion.

### Figma-ready preview

Used immediately before Figma implementation. Visual system, component states, and key interactions should be stable enough to translate into editable Figma structures.

## User feedback

The preview should support a simple loop:

```text
Looks right
    → approve → Figma

Not quite
    → describe what feels wrong
    → Design Critic / Discovery
    → revise preview
```

Do not require users to diagnose the problem in design terminology.

Accept feedback such as:

- "too cold"
- "too much going on"
- "the menu feels weird"
- "mobile feels cramped"
- "I like this part but not that part"

Translate these observations back into the intent and decision models.

## Preview implementation rules

- Use semantic structure and accessible interaction states.
- Use realistic content whenever content shape affects layout.
- Prefer CSS and native browser behavior before adding unnecessary libraries.
- Keep implementation modular enough to revise quickly.
- Avoid coupling preview code to production architecture unless explicitly requested.
- Do not claim that preview behavior guarantees production performance.

## Validation checklist

Before requesting approval, verify:

- primary flow works
- navigation works
- interactive states are visible
- motion has a purpose
- responsive behavior is intentional
- content hierarchy is clear
- no obvious overflow or broken states exist
- the preview still matches the approved visual direction

## Handoff to Figma

When approved, produce a compact handoff summary:

```yaml
preview_handoff:
  approved_direction:
  confirmed_interactions: []
  confirmed_motion: []
  responsive_decisions: []
  unresolved_items: []
  design_decisions: []
```

Figma Forge uses this as implementation input. The preview itself remains disposable.

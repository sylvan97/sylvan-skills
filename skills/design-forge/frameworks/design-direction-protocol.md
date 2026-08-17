# Design Direction Protocol

## Goal

Turn discovered preferences and evidence into a coherent direction that the user can understand and approve before systemization.

## Input

- Intent Model
- reference observations
- constraints
- design principles
- design tensions

## Direction structure

```yaml
purpose:
audience:
visual_character:
emotional_character:
composition:
typography:
color:
density:
imagery:
interaction:
motion:
responsive:
references:
avoid:
tradeoffs: []
open_questions: []
```

## Language

Write the direction in ordinary language first.

Example:

> The interface should feel calm and editorial rather than like a typical SaaS dashboard. Large type and generous whitespace create a deliberate reading rhythm. Navigation stays visually quiet so content remains dominant. Motion is subtle and used mainly to establish continuity between states.

Then provide a compact structured summary if useful.

## Direction proposals

When uncertainty is high, present 2–3 coherent directions rather than a long list of isolated options.

Each direction should have:

- a name
- a short description
- visual characteristics
- interaction characteristics
- trade-offs
- 2–4 representative references when available

Avoid meaningless labels such as “Modern”, “Premium”, or “Beautiful” without concrete explanation.

## Approval

Ask the user to:

- approve
- revise
- combine directions

If the user asks for changes, update the direction and affected decisions rather than starting discovery from zero.

## Approval threshold

Direction is approved when the user agrees with the major character and trade-offs, even if exact token values are not final.

## Change impact

A change to a high-level direction should trigger impact analysis.

Example:

```text
Change: less cinematic
        ↓
imagery
motion
spacing
hero composition
typography scale
```

Do not make isolated patches when the changed decision is system-level.

## Output

A confirmed Design Direction becomes an input to Design Specification and Preview generation.

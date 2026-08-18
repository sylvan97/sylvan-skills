# Creative Core

Design Forge is not a UI generator. Its job is to turn vague intent into a distinctive digital experience before converging on interface details.

## Core principle

**Do not converge early.**

Aesthetic adjectives such as "minimal", "cinematic", "premium", "modern", and "editorial" are inputs, not concepts. The agent must translate them into an experience hypothesis and test multiple substantially different possibilities before selecting a direction.

## Creative ladder

```text
Vague feeling / need
        ↓
Intent + contradictions
        ↓
Creative territory
        ↓
3–5 distinct concepts
        ↓
Concept collision / synthesis
        ↓
Creative thesis
        ↓
Experience model
        ↓
Interaction model
        ↓
Visual world
        ↓
Design system
        ↓
Preview
```

## What counts as a concept

A concept must change at least three of these dimensions:

- information architecture
- user mental model
- primary interaction
- navigation model
- spatial/compositional logic
- temporal or motion behavior
- content presentation model
- visual language

Changing only colors, typography, border radius, or card treatment is not a new concept.

## Concept quality bar

Every concept must have:

1. **Name** — memorable, not a generic style label.
2. **Creative thesis** — one sentence explaining what the experience fundamentally is.
3. **Mental model** — what the user believes they are entering/using.
4. **Signature behavior** — one interaction ordinary websites would not normally use.
5. **Spatial logic** — how content occupies and changes the screen.
6. **Content transformation** — how the user's actual content becomes part of the experience.
7. **Motion logic** — why motion exists and what it communicates.
8. **Reference lineage** — 1–3 real references, including non-UI references when useful.
9. **Trade-offs** — what the concept sacrifices.
10. **Prototype implication** — what must be proven in HTML before acceptance.

## Inspiration expansion

Do not search only for websites.

Depending on the problem, search across:

- film title sequences and cinematography
- architecture and exhibition spaces
- editorial and book design
- photography
- information visualization
- interactive installations
- digital art
- fashion/editorial systems
- games and spatial interfaces
- experimental web
- product interfaces

Extract principles rather than copying appearance.

## Concept collision

After generating concepts, deliberately combine incompatible strengths.

Example:

```text
Concept A: cinematic pacing
Concept B: dense retrieval
Concept C: spatial exploration

Collision:
cinematic homepage
+ instant index
+ spatial discovery layer
```

The resulting concept must still have a coherent thesis. Do not produce a feature soup.

## Creative thesis

Before design tokens or component decisions, write:

> This experience is not primarily a [generic category]. It is a [distinct mental model] where [core behavior] helps the user [desired outcome].

Example:

> This is not primarily a blog. It is a living archive where browsing a person's accumulated thoughts feels like discovering connections in a private collection.

## Anti-generic gate

Reject a concept if any of the following are true:

- it could be reproduced by a generic SaaS/blog prompt with minor wording changes;
- the only distinction is palette or typography;
- the concept can be described entirely with common style adjectives;
- there is no signature interaction or information behavior;
- removing the branding would make it indistinguishable from a template;
- the concept does not transform the user's actual content or goal;
- all candidates share the same layout with cosmetic variations.

Before presenting concepts, ask internally:

1. Why is this not a normal website?
2. What default web behavior did it deliberately change?
3. What will the user remember after 10 seconds?
4. What is the first interaction that makes the concept recognizable?
5. Can the concept survive if color, typeface, and imagery are removed?

If the answer is weak, regenerate.

## Creativity without chaos

Radical does not mean arbitrary.

The concept must remain grounded in:

- user intent
- content characteristics
- task frequency
- accessibility
- device constraints
- technical feasibility
- interaction clarity

The goal is **distinctive and useful**, not novelty for its own sake.

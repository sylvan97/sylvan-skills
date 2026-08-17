# Design Tension Model

## Purpose

Good design often requires choosing how to balance goals that cannot all be maximized simultaneously.

Design Forge should surface these tensions instead of silently compromising one requirement.

## Common tensions

```text
Immersion              ↔ Information density
Whitespace              ↔ Content visibility
Expression              ↔ Usability
Motion                  ↔ Performance
Novelty                 ↔ Familiarity
Brand personality       ↔ Semantic clarity
Visual drama            ↔ Reading efficiency
Navigation simplicity   ↔ Discoverability
Consistency             ↔ Contextual flexibility
Desktop composition    ↔ Mobile continuity
```

These are prompts, not universal laws.

## Detection

Look for requirements containing combinations such as:

- "minimal but information-dense"
- "dramatic but very fast"
- "lots of animation but not distracting"
- "huge typography but lots of content above the fold"
- "experimental but immediately understandable"

Do not assume the requirements are impossible. Identify what must be prioritized when they conflict.

## Resolution process

```text
Detect tension
    ↓
Explain conflict in plain language
    ↓
Identify what must win
    ↓
Generate 2–3 strategies
    ↓
Recommend one
    ↓
Confirm when subjective impact is high
    ↓
Record decision
```

## Example

Requirement:

> "I want a very immersive homepage with lots of content visible immediately."

Explain:

> "Those goals compete for the same visual space. We can keep the immersive opening and move the dense index just below it, or make the opening itself more information-rich and less cinematic."

Options:

```text
A — cinematic opening, content starts after the hero
B — split-screen immersion + index
C — information-first layout with cinematic imagery as a secondary layer
```

## Rules

- Never hide a meaningful trade-off.
- Do not manufacture tension where the goals can coexist naturally.
- Prefer structural solutions over decorative compromises.
- Use the smallest number of compromises necessary.
- Record the chosen priority because it affects later critique.

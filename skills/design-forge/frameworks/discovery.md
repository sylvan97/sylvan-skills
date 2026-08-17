# Design Discovery Framework

## Purpose

Help a person with little or no design vocabulary make meaningful design decisions through conversation.

The user should react to experiences, examples, and trade-offs—not be tested on design terminology.

## Core principle

**Show → Compare → Ask → Translate → Confirm.**

When a design dimension is ambiguous:

1. Explain the dimension in plain language.
2. Present a small number of distinct directions.
3. Give each direction a real-world reference when one materially helps.
4. Ask what the user likes, dislikes, or wants to combine.
5. Translate the response into professional design properties.
6. Confirm the resulting interpretation before committing to it.

## Do not ask abstract questions

Avoid:

> What design style do you prefer?

Prefer:

> Which feels closer to what you want?
>
> A. A quiet editorial page with large typography and generous empty space.
>
> B. A dense, highly structured interface where information is always visible.
>
> C. An immersive page where large imagery and transitions create a cinematic feeling.

The user can answer A/B/C without knowing the words `editorial`, `information density`, or `cinematic composition`.

## Reference examples

References are part of the discovery interface, not decoration.

When presenting a direction, provide one or more relevant real-world examples when they help the user understand the direction. The reference should be:

- accessible to the user
- visually relevant to the specific direction
- chosen for the characteristic being discussed, not merely because it is famous
- accompanied by a short explanation of what to inspect

A reference must not be presented as a template to copy. Explicitly distinguish:

`What to observe` from `What to copy`.

### Reference format

```yaml
reference:
  name: Example site
  url: https://example.com
  dimension: composition
  observe:
    - large editorial type
    - asymmetric image placement
    - generous whitespace
  not_to_copy:
    - brand identity
    - exact content structure
```

If current or specific references are needed, search the web rather than relying on stale memory. Prefer official/public sites and avoid inventing URLs.

## Progressive discovery

Do not ask every design question at once.

### Stage 1 — Purpose

Understand:
- What is this?
- Who is it for?
- What should people mainly do or understand?
- What content matters most?

### Stage 2 — Emotional direction

Explore dimensions such as:
- quiet ↔ energetic
- serious ↔ playful
- warm ↔ cool
- human ↔ technological
- understated ↔ expressive
- familiar ↔ experimental

Use examples when words alone are insufficient.

### Stage 3 — Composition

Explore:
- spacious ↔ dense
- symmetrical ↔ asymmetric
- predictable ↔ exploratory
- linear ↔ layered
- content-first ↔ image-first

### Stage 4 — Typography and imagery

Instead of asking for font names, ask about reading and personality:
- Should headlines feel calm, authoritative, expressive, or dramatic?
- Should body text disappear into comfortable reading, or have a visible editorial character?
- Should images feel documentary, polished, cinematic, playful, or minimal?

### Stage 5 — Interaction

Ask about behavior:
- Should navigation feel obvious or discovered?
- Should the interface feel immediate or deliberate?
- Should content reveal itself progressively?
- Should interactions feel subtle or expressive?

### Stage 6 — Motion

Ask about temporal feeling:
- almost still
- subtle and responsive
- smooth and continuous
- cinematic and deliberate
- energetic and expressive

Then translate to timing, easing, choreography, and transition principles.

## Reference selection rules

A good reference answers a question the user is currently deciding.

Bad:

> Here are five cool websites.

Good:

> You said you want the site to feel calm but not empty. Look at this example specifically for how it uses whitespace and typography to create calmness without reducing content density.

Prefer a small number of strong references over a gallery of links.

## Avoid reference anchoring

References can accidentally become templates. Therefore:

- show references after identifying the design dimension
- explain the principle to observe
- ask what the user likes/dislikes about the example
- combine insights from multiple references when appropriate
- do not reproduce the reference's structure unless explicitly requested

## Translation layer

Convert natural language into design properties.

Examples:

| User says | Possible interpretation |
|---|---|
| "高级" | restraint, hierarchy, typography quality, material/imagery discipline |
| "电影感" | cinematic composition, large imagery, controlled pacing, spatial transitions |
| "有呼吸感" | lower density, larger whitespace, clear grouping |
| "不要像 AI 做的" | avoid generic patterns; increase authored composition and specificity |
| "有设计感但好用" | expressive visual layer constrained by clear usability |
| "科技但不要俗" | restrained technology cues, avoid gratuitous neon/glow, precise typography and motion |
| "像杂志" | editorial hierarchy, typography-led composition, intentional image/text relationships |

These are hypotheses, not automatic conclusions. Confirm when the interpretation materially affects the direction.

## Decision record

After each major discovery stage, maintain a compact internal record:

```yaml
discovery:
  decision: "immersive but readable"
  user_language: "像电影，但不能看不懂"
  interpretation:
    composition: cinematic
    hierarchy: strong
    density: low-to-medium
    imagery: prominent
    typography: highly legible
  confidence: medium
  reference_examples:
    - name: Example
      url: https://example.com
```

Do not expose the whole internal record unless useful. The user-facing output should remain understandable.

## Exit condition

Discovery is complete when:

- the purpose and audience are clear
- major visual dimensions have a direction
- interaction expectations are understood
- motion expectations are understood when relevant
- the user has seen enough concrete examples to understand the proposed direction
- unresolved choices are either low-impact or explicitly marked for exploration later

Then produce a `Design Brief` and `Design Direction` before Figma implementation.

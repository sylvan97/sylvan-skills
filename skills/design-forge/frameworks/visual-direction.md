# Visual Direction

## Purpose

Translate what the user wants to **feel** into a coherent visual direction without requiring the user to know design terminology.

Visual direction is a hypothesis about how the intended experience should look and behave. It must be derived from intent, content, and constraints.

## Principle

The agent should ask:

> "What experience is the user trying to create?"

before asking:

> "What style should the interface use?"

## Intent dimensions

Use these dimensions as an internal reasoning model, not as a questionnaire that must always be shown to the user.

### Emotional

- calm ↔ energetic
- intimate ↔ expansive
- serious ↔ playful
- refined ↔ raw
- familiar ↔ surprising
- warm ↔ cold

### Visual

- restrained ↔ expressive
- sparse ↔ dense
- symmetric ↔ asymmetric
- structured ↔ experimental
- type-led ↔ image-led
- flat ↔ layered
- static ↔ kinetic

### Interaction

- direct ↔ exploratory
- predictable ↔ surprising
- persistent ↔ progressive disclosure
- task-focused ↔ discovery-focused

### Motion

- none ↔ expressive
- immediate ↔ deliberate
- functional ↔ atmospheric
- local ↔ page-spanning

These axes are not universal scales. They are prompts for understanding trade-offs.

## Conversation method

### Step 1 — Reflect

Summarize what the user appears to want in ordinary language.

Example:

> "It sounds like you want the site to feel quiet and premium, but not sterile. You also want moments of immersion rather than a page that feels like a dashboard."

### Step 2 — Identify uncertainty

Do not ask about dimensions that are already obvious from context.

Ask only about decisions that could materially change the outcome.

### Step 3 — Show alternatives

When useful, present 2–4 contrasting directions.

Each direction should contain:

- a plain-language name
- a short description
- the intended feeling
- one or more real references
- what to observe in those references
- a warning about what should not be copied

### Step 4 — Decompose reactions

If the user chooses a reference, determine whether they are responding to:

- typography
- composition
- imagery
- color
- density
- interaction
- motion
- content treatment
- brand tone

Never assume the user's reaction maps to the reference's overall style.

### Step 5 — Synthesize

Combine compatible preferences into a new direction.

Example:

```text
User likes:
A typography
B imagery
C navigation

Synthesis:
editorial typography
+ immersive imagery
+ restrained navigation
```

### Step 6 — Confirm the direction

Before high-cost Figma implementation, summarize the resulting direction in plain language and request approval when the visual identity is materially consequential.

## Direction format

```yaml
design_direction:
  intent:
    feeling: []
    user_should_feel: []
    user_should_not_feel: []

  visual_language:
    composition:
    hierarchy:
    density:
    whitespace:
    typography:
    color:
    imagery:

  interaction:
    navigation:
    disclosure:
    feedback:

  motion:
    intensity:
    rhythm:
    continuity:

  responsive:
    strategy:

  references:
    - url:
      reason:
      observations:

  constraints:
    -
```

## Anti-patterns

### Style-first questioning

Bad:

> "Do you want Brutalist, Swiss, or Neo-minimalist?"

Why it fails: the user may not understand the labels and may choose based on the name rather than the experience.

### Reference worship

Bad:

> "This is your reference, so we'll reproduce it."

Why it fails: it substitutes another product's design context for the user's intent.

### Endless choice

Bad:

> presenting 12 styles and asking the user to rank them.

Why it fails: decision fatigue obscures intent.

### Premature precision

Bad:

> asking for font size, radius, and grid before the experience is understood.

Why it fails: low-level values should be derived after high-level direction.

## Exit criteria

Visual direction is ready for systemization when:

1. The intended emotional experience is explicit.
2. Major visual trade-offs are resolved.
3. Important references have been interpreted into properties rather than copied.
4. The user has approved the high-impact direction.
5. Remaining low-level decisions can be derived consistently.

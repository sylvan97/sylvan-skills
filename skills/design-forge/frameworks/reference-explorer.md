# Reference Explorer

## Purpose

Reference Explorer helps a non-designer discover what they mean by a vague visual preference by looking at real, accessible design examples.

It is not a gallery picker and it is not a template-copying mechanism.

Its primary job is **intent discovery**.

## Core principle

> Do not ask the user to name a design style when they can react to an experience.

A reference is useful only when it helps the user answer a question about the experience they want.

## Reference loop

```text
User language
    ↓
Infer candidate intent
    ↓
Identify uncertain design dimensions
    ↓
Find real references
    ↓
Curate a small set of contrasting examples
    ↓
Tell the user what to look at
    ↓
User reacts
    ↓
Separate liked / disliked properties
    ↓
Update intent model
    ↓
Repeat only where uncertainty remains
```

## 1. Understand intent before searching

Never search only from the user's surface adjective.

For example:

> "I want something premium."

Do not immediately search for "premium website design".

First infer possible dimensions:

- visual density
- typography confidence
- whitespace
- material quality
- image treatment
- motion restraint
- color saturation
- interaction polish
- brand tone

Then identify which dimensions are actually uncertain.

The same adjective may represent very different intents:

```text
premium
├── quiet / restrained
├── editorial / sophisticated
├── cinematic / immersive
├── luxurious / ornamental
└── precise / product-like
```

The agent should not collapse these into one style.

## 2. Search for evidence, not inspiration

References should be selected because they demonstrate a design property that is relevant to an unresolved decision.

Good search intent:

- editorial typography on portfolio sites
- immersive image-led navigation
- restrained motion on product pages
- asymmetric editorial layouts
- expressive type with minimal color

Weak search intent:

- cool websites
- beautiful websites
- premium UI
- modern website

The second category produces aesthetic noise rather than useful evidence.

## 3. Prefer real, visitable examples

When presenting a reference, provide a direct website destination whenever possible.

The user should be able to open the actual experience rather than rely on a screenshot.

For each reference, explain:

1. **Why it is here** — the design question it helps answer.
2. **What to look at** — a specific property such as typography, spacing, navigation, imagery, or motion.
3. **What not to copy** — brand, content, IA, or other context-specific decisions that should not be inherited automatically.

A reference should teach observation.

## 4. Curate contrast, not a popularity ranking

Usually present 2–4 references that represent meaningfully different interpretations of the same unresolved intent.

Example:

```text
Question: "How immersive should the homepage feel?"

A — Image-led immersion
    Large media dominates the viewport.

B — Type-led immersion
    Typography creates the drama with restrained imagery.

C — Interaction-led immersion
    Scroll and transitions create the sense of depth.
```

The goal is not to ask "Which website is best?"

The goal is:

> "Which mechanism creates the feeling you want?"

## 5. Never treat a reference as a template

Do not infer:

> User likes website A → reproduce website A.

Instead extract:

```text
Reference A
    ↓
Observed properties
    ↓
Design principles
    ↓
Candidate properties for this project
```

Example:

```text
User likes A's cinematic feel

Possible observations:
- full-bleed imagery
- slow entrance timing
- high contrast type
- large viewport sections

Candidate intent:
- immersive imagery
- low-frequency motion
- dramatic hierarchy

Unresolved:
- whether navigation should also be cinematic
```

## 6. Ask about the reaction, not the label

After a user visits references, avoid:

> "Which style do you prefer?"

Prefer:

- Which one feels closest to what you imagined?
- What specifically caught your attention?
- Which part feels wrong?
- If you could keep only one thing from this example, what would it be?
- Does the page feel too quiet, too busy, or about right?
- Would you want this behavior on every page or only the homepage?

When the user says something vague such as "I like B", ask one targeted decomposition question rather than restarting the interview.

## 7. Build an intent model

Reference exploration should progressively populate a structured model:

```yaml
intent:
  emotional:
    desired: []
    avoid: []

  visual:
    composition: []
    typography: []
    color: []
    imagery: []
    density: []

  interaction:
    navigation: []
    disclosure: []
    feedback: []

  motion:
    intensity: null
    rhythm: null
    continuity: []

  references:
    liked: []
    disliked: []
    observations: []
```

This model is more important than the list of references.

References can change; inferred intent should persist.

## 8. Detect contradictions

Users may like individual properties that conflict when combined.

Example:

> "I want extremely minimal, lots of information, huge typography, many images, and no scrolling."

Do not blindly implement all requests.

Surface the trade-off plainly:

> "These goals compete for the same space. We can preserve the minimal feeling, but we need to choose whether information density or large visual moments gets priority."

Then offer concrete alternatives.

## 9. Stop conditions

Reference exploration should stop when:

- the major subjective dimensions have a clear direction
- remaining decisions can reasonably be derived by the agent
- additional examples would create noise rather than clarity

Do not endlessly browse for inspiration.

## 10. Reference quality criteria

Prefer references that are:

- real and visitable
- relevant to the current design question
- visually or interactively distinctive
- understandable without specialist knowledge
- sufficiently current to represent the intended medium
- useful as evidence of a specific design decision

Avoid references that are:

- generic inspiration lists with no clear relevance
- inaccessible or obviously broken experiences
- selected only because they are famous
- visually similar but structurally irrelevant
- copied from the same template family

## 11. Web usage

When the workflow requires current or visitable examples, use web search to discover and verify references.

Do not invent URLs.

When presenting a company, studio, product, or public website, prefer its official site and provide a navigable link. Cite claims about the reference when external research is used.

## 12. Relationship to Design Direction

Reference Explorer does not produce the final style label.

Its output feeds the Design Direction:

```text
References
    ↓
Observations
    ↓
User reactions
    ↓
Intent model
    ↓
Design principles
    ↓
Design Direction
```

The final Design Direction should describe the user's intended experience in design terms only after that meaning has been established through conversation.

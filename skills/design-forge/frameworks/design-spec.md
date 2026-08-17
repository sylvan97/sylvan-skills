# Design Specification

## Purpose

The Design Specification is the canonical, machine-readable contract shared by Design Forge, Experience Preview, and Figma Forge.

It separates **what the design means** from **how a particular renderer implements it**.

The same approved specification should be capable of producing:

- an interactive HTML Experience Preview
- an editable Figma design
- a critique target
- future implementation guidance

## Core rule

> One design intent, one canonical specification, multiple renderers.

Do not allow the HTML preview and Figma implementation to independently invent visual decisions.

## Specification lifecycle

```text
Intent Model
    ↓
Design Direction
    ↓
Design Specification
    ↓
┌───────────────┬───────────────┬───────────────┐
│               │               │
Preview       Figma          Critic
Renderer      Renderer        / Review
```

## Schema

```yaml
version: "0.1"
project:
  name:
  purpose:
  audience:
  platforms: [desktop, tablet, mobile]

intent:
  desired_feeling: []
  avoid_feeling: []
  priorities: []
  constraints: []

references:
  - name:
    url:
    observed_principles: []

visual:
  composition:
    strategy:
    density:
    alignment:
    focal_behavior:
    whitespace:

  typography:
    family_roles:
      display:
      heading:
      body:
      ui:
      mono:
    roles:
      - name:
        purpose:
        size:
        weight:
        line_height:
        letter_spacing:
        measure:

  color:
    roles:
      background:
      surface:
      text_primary:
      text_secondary:
      border:
      accent:
      interactive:
      success:
      warning:
      error:
      focus:

  imagery:
    role:
    treatment:
    aspect_behavior:
    art_direction:

layout:
  container:
    max_width:
    gutters:
  grid:
    columns:
    gap:
  spacing:
    scale:
    semantic_roles: {}

components:
  - name:
    purpose:
    variants: []
    states: []
    anatomy: []
    responsive_behavior:

interaction:
  navigation:
    model:
    priority:
  disclosure:
    strategy:
  feedback:
    principles: []

motion:
  intensity:
  rhythm:
  easing_character:
  duration_character:
  entrance:
  transition:
  interaction:
  reduced_motion:

responsive:
  strategy:
  breakpoints:
  transformations:
    desktop:
    tablet:
    mobile:

accessibility:
  contrast:
  focus:
  keyboard:
  semantics:
  reduced_motion:
  non_color_signifiers:

pages:
  - id:
    purpose:
    hierarchy: []
    sections: []
    primary_action:
    responsive_notes:

decisions:
  - id:
    question:
    decision:
    rationale:
    evidence: []
    confidence:

tensions:
  - id:
    between: []
    chosen_priority:
    tradeoff:
    accepted_by_user: false

preview:
  required_flows: []
  interactions_to_validate: []
  viewport_targets: [desktop, tablet, mobile]

status:
  discovery: draft
  direction: draft
  system: draft
  preview: draft
  approval: pending
  figma: not_started
```

## Semantic over raw values

Prefer semantic names:

```text
color.text.primary
space.section.large
text.heading.1
radius.card
motion.transition.page
```

over unexplained literals:

```text
#171717
72px
32px
12px
400ms
```

Raw values may exist as implementation details, but every important value should have a semantic reason.

## Renderer rules

### Experience Preview

The preview may adapt implementation details for the browser, but it must preserve:

- hierarchy
- visual roles
- interaction intent
- motion character
- responsive strategy
- content structure

### Figma

Figma implementation may map semantic values to Variables, Styles, Components, and Auto Layout. It must not silently change approved design decisions.

### Critic

The critic evaluates the rendered result against the same specification rather than against arbitrary aesthetic preference.

## Approval gates

The specification should move through:

```text
DRAFT
  ↓
DIRECTION_APPROVED
  ↓
SYSTEM_READY
  ↓
PREVIEW_READY
  ↓
EXPERIENCE_APPROVED
  ↓
FIGMA_READY
  ↓
FIGMA_REVIEWED
```

Do not begin expensive Figma implementation before `EXPERIENCE_APPROVED` unless the user explicitly requests skipping preview validation.

## Change propagation

When a user changes a high-level decision, identify affected descendants.

Example:

```text
Change: "less cinematic"

Potential impact:
→ imagery treatment
→ motion intensity
→ typography scale
→ section spacing
→ navigation behavior
→ preview
→ Figma
```

Do not patch a single screen if the decision is system-level.

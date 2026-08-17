# Design Forge Knowledge Governance

This document defines how Design Forge uses design knowledge. It prevents the knowledge base from becoming a passive encyclopedia and establishes which principles are binding, advisory, contextual, or purely inspirational.

## 1. Core rule

Knowledge exists to improve design decisions, not to increase the amount of design terminology in the conversation.

The agent should use the smallest amount of knowledge necessary to make a better decision.

The knowledge base must answer:

```text
What principle is relevant?
↓
Why is it relevant here?
↓
What decision can it influence?
↓
What should change in the Design Specification?
↓
How can the result be verified?
```

## 2. Four authority levels

Every knowledge entry MUST have one of these authority levels.

### A. CONSTITUTIONAL

Highest priority.

These are Design Forge rules that govern agent behavior regardless of visual style or project preference.

Examples:

- Start with user intent.
- Preserve user agency.
- Accessibility is part of design quality.
- Do not silently change an approved direction.
- Do not claim validation without evidence.
- Renderer must not redefine the approved design.

Source of authority:

`CONSTITUTION.md`

A project preference cannot override a constitutional rule unless the constitution itself is intentionally changed.

### B. PRINCIPLED

Durable design and HCI principles supported by strong references, standards, established design systems, or repeated professional practice.

Examples:

- visual hierarchy
- recognition over recall
- progressive disclosure
- semantic tokens
- responsive reflow
- meaningful motion
- keyboard accessibility

These principles SHOULD guide decisions, but they are not mechanically applied. Context matters.

### C. CONTEXTUAL

Patterns whose usefulness depends strongly on product type, audience, platform, content, culture, or visual direction.

Examples:

- editorial layouts
- sidebar navigation
- dense data tables
- immersive full-screen imagery
- particular motion personalities
- mobile bottom navigation

Contextual knowledge must never be presented as a universal rule.

### D. INSPIRATIONAL

Visual references, trends, historical styles, art direction, experimental techniques, and emerging patterns.

Examples:

- brutalism
- neo-brutalism
- cinematic interfaces
- glassmorphism
- expressive typography
- experimental navigation

Inspirational knowledge may generate options but cannot override stronger usability, accessibility, product, or constitutional requirements without an explicit trade-off.

## 3. Source hierarchy

When sources disagree, prefer them in this order:

```text
1. Web standards / accessibility standards
2. Platform human-interface guidelines
3. Established design systems
4. HCI / UX research and evidence
5. Professional design literature
6. Design education / historical theory
7. Curated practitioner references
8. Community trends / galleries / social content
```

A lower-level source may still be more appropriate for a particular visual problem, but the agent must not treat popularity as evidence.

## 4. Source roles

Different sources answer different questions.

### Standards

Use for requirements and constraints.

Examples:

- WCAG
- WAI-ARIA
- platform accessibility requirements

### Human-interface guidelines

Use for platform behavior and interaction conventions.

Examples:

- Apple Human Interface Guidelines
- Material Design

### Design systems

Use for implementation patterns, tokens, components, states, responsive behavior, and motion conventions.

Examples:

- Material
- IBM Carbon
- Atlassian Design System

### HCI research

Use for human behavior, cognition, usability, decision making, and evaluation.

### Visual references

Use for visual direction and art direction, never as proof that a design is usable.

## 5. Hard rule vs soft rule

The agent MUST distinguish:

```text
Requirement
Principle
Recommendation
Preference
Reference
```

Example:

```text
WCAG contrast requirement
        ≠
"8px spacing feels better"
```

Do not present recommendations as requirements.

## 6. Decision precedence

When design goals conflict, use this order:

```text
Safety / accessibility / legal constraints
        ↓
User intent and task success
        ↓
Content and information architecture
        ↓
Platform conventions
        ↓
Approved visual direction
        ↓
Design-system consistency
        ↓
Aesthetic preference
        ↓
Trend / novelty
```

This is not permission to make a boring product. It is a rule for resolving conflicts.

A strong aesthetic choice is encouraged when it does not undermine higher-priority goals.

## 7. User agency boundary

The agent should separate decisions into three categories.

### User-owned

Ask or confirm when the decision materially changes identity or experience.

Examples:

- overall visual personality
- emotional tone
- brand expression
- major navigation philosophy
- content emphasis
- density preference
- motion personality when highly expressive

### Agent-owned

Decide autonomously once direction is sufficiently clear.

Examples:

- exact spacing values
- breakpoint values
- token naming
- component decomposition
- semantic HTML
- implementation details
- exact easing values
- minor alignment adjustments

### Shared

Agent proposes; user can approve, reject, or modify.

Examples:

- typography pairing
- color strategy
- responsive transformation
- interaction model
- motion strategy
- page composition

## 8. Knowledge retrieval behavior

Do not load the entire knowledge base into every task.

Retrieve knowledge based on the current design question.

Example:

```text
User: "我希望首页像一部电影。"

Relevant:
  aesthetics/cinematic
  visual/composition
  visual/typography
  motion/expressive-motion
  imagery/art-direction

Not immediately relevant:
  data-table patterns
  enterprise form design
  email design
```

Knowledge retrieval should be progressive:

```text
intent
↓
likely design questions
↓
relevant principles
↓
specific references
↓
decision
```

## 9. Knowledge entry contract

Every reusable knowledge entry SHOULD follow this structure:

```yaml
id:
name:
category:
authority: constitutional | principled | contextual | inspirational
summary:
meaning:
when_to_use:
when_not_to_use:
observable_signals:
user_question:
design_decisions:
spec_implications:
renderer_implications:
verification:
common_failures:
related_principles:
references:
```

Not every field needs to be long. The goal is operational usefulness, not documentation volume.

## 10. Evidence discipline

The agent must distinguish evidence from inference.

Use:

```text
Evidence:
The referenced design system recommends X.

Inference:
For this project, X may support the approved goal of Y.

Decision:
Use X because Y is the priority.
```

Do not turn a single website's design choice into a universal design law.

## 11. Design principles are not formulas

Avoid rules such as:

```text
cinematic = serif + black + huge image
minimal = white + lots of radius
premium = dark + gold
modern = glass + gradient
```

These are visual stereotypes, not design reasoning.

Instead derive visual decisions from:

```text
intent
content
audience
context
emotion
interaction
brand
constraints
```

## 12. Avoid knowledge conflicts

When two principles conflict, do not silently choose one.

Surface the tension when it materially changes the experience.

Example:

```text
Maximum content visibility
        ↔
Reduced cognitive load
```

Then propose options and explain the trade-off in plain language.

## 13. Knowledge freshness

Design principles with a long historical life should remain stable.

Fast-changing implementation guidance should be treated as versioned knowledge.

Examples of knowledge that may need freshness checks:

- framework APIs
- platform capabilities
- accessibility implementation guidance
- browser behavior
- Figma capabilities
- design-system APIs

The Skill should never encode rapidly changing technical facts as timeless design principles.

## 14. Research protocol

When external research is needed:

1. Start with primary or authoritative sources.
2. Cross-check important claims.
3. Separate principle from example.
4. Record references in the knowledge entry.
5. Prefer stable sources over trend articles.
6. Do not copy source text into the Skill.
7. Summarize the principle in operational language.

## 15. Design Critic usage

The critic should evaluate against the appropriate authority level.

```text
Constitutional violation → blocker
Known requirement violation → blocker / major
Principled weakness → major / minor
Contextual mismatch → minor / major depending on impact
Inspirational disagreement → observation
```

Aesthetic preference alone is never a blocker.

## 16. Renderer boundary

Knowledge may inform the renderer only through the approved Design Specification.

```text
Knowledge
   ↓
Reasoning
   ↓
Design Decision
   ↓
Design Specification
   ↓
Renderer
```

Never:

```text
Knowledge
   ↓
Renderer improvisation
```

This prevents React, Vue, Figma, or another renderer from inventing a different design.

## 17. What NOT to build

Do not turn Design Forge into:

- a glossary of design terminology
- a collection of copied design-system documentation
- a list of trendy UI styles
- a gallery of screenshots
- a rigid rule engine that produces identical pages
- a database of arbitrary pixel values
- a replacement for user taste

The knowledge base is successful only when it improves decisions.

## 18. Definition of a mature knowledge base

A mature Design Forge knowledge base should allow the agent to move from:

```text
"I want it to feel calm and premium."
```

to:

```text
Possible interpretation
↓
Clarifying question
↓
Visual direction options
↓
Relevant principles
↓
Trade-offs
↓
Design decision
↓
Design specification
↓
Preview
↓
Verification
```

without requiring the user to know professional design vocabulary.

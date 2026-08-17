# Design Forge Knowledge Architecture

This document defines how Design Forge turns design knowledge into usable reasoning.

Knowledge is not a reference library to recite. It is a decision-support system.

The goal is:

```text
User Intent
    ↓
Context
    ↓
Relevant Knowledge
    ↓
Reasoning Trigger
    ↓
Question / Proposal
    ↓
Design Decision
    ↓
Design Specification
    ↓
Renderer
    ↓
Verification
```

## 1. Core principle

A knowledge entry must change behavior somewhere in the design process.

If a document cannot help the agent:

- notice a design problem,
- ask a better question,
- make a better decision,
- explain a recommendation,
- produce a more precise specification, or
- verify an implementation,

it does not belong in the operational knowledge layer.

Reference material may exist separately, but it must not automatically become a design rule.

## 2. Knowledge authority

Knowledge follows `KNOWLEDGE_GOVERNANCE.md`.

Use this priority order when principles conflict:

```text
Safety / Accessibility / Legal constraints
        ↓
User intent / task success
        ↓
Content / information architecture
        ↓
Platform conventions
        ↓
Approved visual direction
        ↓
Design system consistency
        ↓
Aesthetic preference
        ↓
Trend / novelty
```

A lower-level preference must not silently override a higher-level constraint.

## 3. Knowledge entry contract

Operational knowledge entries should use this structure:

```yaml
id:
name:
category:
summary:
authority:

meaning:

when_to_consider:
when_not_to_apply:

observable_signals:

reasoning_triggers:
  - condition:
    action:

user_questions:
  - question:
    purpose:

recommendation_patterns:
  - situation:
    options:
    tradeoff:

spec_implications:
  - area:
    implication:

renderer_implications:
  - renderer:
    implication:

verification:
  - check:
    evidence:

common_failures:

references:
```

The exact fields may be omitted when irrelevant, but the entry should preserve the same conceptual structure.

## 4. Three knowledge states

Not all knowledge should be treated equally.

### Normative

The entry defines a constraint or strong principle.

Examples:

- WCAG requirements
- keyboard operability
- sufficient focus visibility
- platform-specific mandatory behavior

The agent should apply these unless a higher authority or explicit technical constraint changes the implementation.

### Advisory

The entry provides a useful design heuristic.

Examples:

- progressive disclosure
- visual hierarchy
- cognitive load reduction
- motion continuity

The agent should consider it when the context matches, not blindly apply it.

### Inspirational

The entry describes a visual language, historical movement, contemporary pattern, or stylistic reference.

Examples:

- editorial
- Swiss
- brutalism
- cinematic
- maximalism

It can generate directions and alternatives but must never become a default template.

## 5. Reasoning triggers

A knowledge entry should activate because of a condition, not because its filename happens to match the task.

Example:

```yaml
reasoning_triggers:
  - condition: "The user wants to show many items at once"
    action: "Evaluate hierarchy, grouping, cognitive load, and progressive disclosure"

  - condition: "The user asks for cinematic motion"
    action: "Separate expressive motion from functional feedback and inspect reduced-motion requirements"
```

Triggers should be semantic rather than keyword-only.

The phrase “cinematic” may activate motion, composition, typography, imagery, pacing, and reference exploration depending on context.

## 6. Context before knowledge

Do not retrieve a design principle in isolation.

First establish enough context to answer:

```text
What is being designed?
Who uses it?
What are they trying to accomplish?
What content exists?
What platform is involved?
What has already been approved?
What constraints exist?
```

Then select relevant knowledge.

This prevents generic rules from dominating a project without understanding its purpose.

## 7. Knowledge retrieval layers

Use knowledge in progressively deeper layers.

### Layer 1 — Recognition

Detect that a design problem exists.

```text
"This page has too many competing focal points."
```

### Layer 2 — Principle

Identify the applicable principle.

```text
Visual hierarchy
Selective attention
Grouping
```

### Layer 3 — Options

Generate a small number of meaningful alternatives.

```text
A: emphasize one primary action
B: preserve multiple equal priorities
```

### Layer 4 — Decision

Choose based on intent, content, constraints, and approved direction.

### Layer 5 — Specification

Translate the decision into concrete design values and behavior.

### Layer 6 — Verification

Define observable evidence that the decision was implemented correctly.

## 8. Questions are generated from uncertainty

The agent should not ask a design question merely because a knowledge entry exists.

Ask only when uncertainty can materially change the experience.

Example:

```text
Unknown:
Should the homepage feel editorial or utility-oriented?

Impact:
High

Action:
Ask user with concrete visual references.
```

Low-impact decisions should be derived autonomously.

```text
Unknown:
Should the spacing between two related controls be 12px or 16px?

Impact:
Low

Action:
Agent decides using the design system.
```

## 9. User-facing question generation

Questions should translate expert concepts into perceptual choices.

Bad:

```text
Do you prefer a 12-column asymmetric editorial grid?
```

Better:

```text
你更希望内容像杂志一样被精心编排，
还是像一个工具一样让信息尽可能快速可见？
```

When useful, provide real examples that let the user inspect the difference.

The user should choose a direction, not answer an exam question about design theory.

## 10. Decision synthesis

A decision should combine:

```text
Intent
+
Content
+
Constraints
+
Knowledge
+
Approved Direction
+
Evidence
```

A recommendation should be expressed briefly:

```yaml
decision:
  choice:
  reason:
  tradeoff:
  confidence:
```

Do not expose hidden chain-of-thought.

The user needs the conclusion, important evidence, and relevant tradeoff—not private internal reasoning.

## 11. Design tensions

Many design principles are not absolute.

Represent meaningful conflicts explicitly:

```text
Immersion ↔ information density
Expressiveness ↔ restraint
Discovery ↔ efficiency
Consistency ↔ context sensitivity
Visual novelty ↔ familiarity
Animation ↔ reduced motion / performance
```

When the tension materially affects the experience, present options to the user.

When the tradeoff is low impact, resolve it autonomously.

## 12. From knowledge to Design Specification

Knowledge must ultimately produce observable specification changes.

Example:

```text
Principle:
Progressive disclosure

Decision:
Do not expose all secondary metadata on the first view.

Specification:
secondary metadata = collapsed by default
primary metadata = visible
mobile = disclosure interaction
```

Another example:

```text
Principle:
Semantic tokens

Decision:
Represent color by role rather than raw hue.

Specification:
color.text.primary
color.surface.default
color.action.primary
color.border.subtle
```

If a principle cannot produce a meaningful specification implication, it may belong in reference material rather than operational knowledge.

## 13. Renderer translation

Renderer translation happens after the design decision is stable.

Example:

```text
Design decision:
Secondary navigation remains available but visually subordinate.

Figma:
→ component variant + Auto Layout + text hierarchy

React:
→ shared navigation component + route-aware active state

Vue:
→ shared navigation component + router-aware active state

HTML Preview:
→ real links + active state + mobile disclosure
```

The underlying decision remains the same.

## 14. Verification translation

Every high-impact operational principle should have observable verification.

Examples:

```text
Focus visibility
→ keyboard through the critical journey
→ confirm current focus is visually identifiable

Responsive transformation
→ test defined viewport classes
→ verify hierarchy and interaction remain intentional

Motion continuity
→ trigger navigation / state transition
→ confirm spatial relationship is understandable

Progressive disclosure
→ observe first-time user task
→ verify secondary complexity does not block the primary task
```

Verification should test behavior and design intent, not merely screenshots.

## 15. Failure patterns

### Knowledge dumping

Do not explain every relevant principle to the user.

Use knowledge internally and surface only what helps the current decision.

### Rule stacking

Do not combine five heuristics into a fake universal rule.

Identify the dominant problem and the relevant tradeoff.

### Trend substitution

Do not turn a visual trend into a design rationale.

“Glassmorphism is popular” is not a reason.

### False certainty

Design heuristics are not mathematical laws.

Use confidence and context.

### Citation theater

References should support a decision. Do not attach references merely to make a recommendation look authoritative.

### Over-questioning

If the agent can make a reversible, low-impact decision, make it.

### Silent override

Never use a knowledge rule to silently replace a user-approved high-impact direction.

Raise the conflict and propose a resolution.

## 16. Knowledge freshness

Design principles should be separated from changing platform guidance.

Each operational entry should distinguish:

```text
stable principle
platform guidance
current implementation detail
trend / inspiration
```

Platform-specific claims should be rechecked when freshness matters.

Stable design principles should not be discarded merely because a visual trend changes.

## 17. Reference hierarchy

Prefer sources in this order when establishing authoritative knowledge:

1. Accessibility standards and platform requirements
2. Official platform design systems
3. Established HCI / UX research and professional usability guidance
4. Established design-system documentation
5. Academic / historical design literature
6. Practitioner essays and case studies
7. Contemporary visual references
8. Trend / inspiration galleries

A lower tier can inspire a direction but should not overrule a higher-tier requirement.

## 18. Knowledge lifecycle

Every operational knowledge entry follows:

```text
Candidate
  ↓
Source review
  ↓
Distillation
  ↓
Governance classification
  ↓
Reasoning trigger
  ↓
Decision mapping
  ↓
Specification mapping
  ↓
Verification mapping
  ↓
Operational
  ↓
Periodic review
```

Do not promote a source directly into a hard rule.

## 19. Minimum viable knowledge entry

A small entry is better than a huge essay if it contains:

```text
What it means
When it matters
What the agent should notice
What question it can generate
What decision it can influence
How that decision appears in the specification
How the result can be verified
```

This is the minimum contract for Design Forge operational knowledge.

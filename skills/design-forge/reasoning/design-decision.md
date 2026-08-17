# Design Decision Model

## Purpose

A Design Decision is the smallest explainable unit connecting user intent to an implementation choice.

It prevents the agent from jumping from a vague preference directly to a UI value.

## Decision chain

```text
User signal
    ↓
Intent hypothesis
    ↓
Evidence
    ↓
Relevant principle
    ↓
Candidate options
    ↓
Trade-offs
    ↓
Decision
    ↓
Implementation
    ↓
Critique
```

## Decision record

```yaml
decision:
  id:
  question:
  user_signal: []
  intent_hypothesis: []
  evidence: []
  principles: []
  candidates:
    - option:
      benefits: []
      costs: []
  tensions: []
  selected:
  rationale:
  confidence: low | medium | high
  implementation:
    tokens: []
    components: []
    layout: []
    interaction: []
    motion: []
  critique:
    status: pending | accepted | revised
    findings: []
```

## Rules

### 1. Evidence before certainty

A user adjective is evidence, not proof.

"Premium" may indicate multiple intents. Keep hypotheses explicit until references, conversation, or constraints narrow them.

### 2. Explain consequential choices

The agent should explain decisions that materially change visual identity, interaction, content hierarchy, or usability.

It does not need to explain every 1px adjustment.

### 3. Preserve alternatives when useful

If two options remain plausible and the cost of trying them is low, create alternatives rather than forcing premature convergence.

### 4. Record user-owned decisions

When the user explicitly chooses a direction, preserve the choice and its evidence.

### 5. Derived decisions remain agent-owned

Once a direction is approved, derive low-level values consistently instead of repeatedly asking for approval.

## Example

User:

> "I want the homepage to feel cinematic but still easy to browse."

Reasoning:

```text
Intent
  immersive + navigable

Relevant principles
  hierarchy + focal point + progressive disclosure

Tension
  cinematic scale ↔ information density

Candidate A
  full-screen media with minimal navigation

Candidate B
  strong hero moment followed by structured index

Decision
  B

Rationale
  preserves the cinematic entry while restoring discoverability after the opening moment
```

The Figma implementation can then derive the hero, navigation, section rhythm, and responsive behavior from that decision.

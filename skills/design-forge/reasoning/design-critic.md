# Design Critic

## Purpose

Design Critic evaluates whether an implementation actually delivers the approved intent. It is not a praise generator and should not default to vague comments such as "make it more polished."

## Review sequence

```text
Approved intent
    ↓
Expected experience
    ↓
Observed implementation
    ↓
Gap analysis
    ↓
Severity
    ↓
Revision
    ↓
Re-check
```

## Review dimensions

### Intent fidelity

- Does the experience feel like the approved direction?
- Are the user's important preferences preserved?
- Did implementation accidentally introduce a different aesthetic?

### Hierarchy

- What is perceived first?
- Is the intended focal point actually dominant?
- Can users scan the structure?

### Composition

- Are relationships, alignment, scale, and whitespace intentional?
- Are there awkward gaps or competing focal points?

### Typography

- Is reading behavior appropriate?
- Does hierarchy survive realistic content?
- Are line breaks, measure, and responsive changes sound?

### Color

- Are semantic states clear?
- Does expressive color support rather than overpower hierarchy?
- Is contrast sufficient in actual contexts?

### Interaction

- Are actions understandable?
- Does feedback arrive at the right time?
- Are states coherent?

### Motion

- Does motion communicate continuity, state, or focus?
- Is its intensity consistent with the approved direction?
- Does it create distraction or performance risk?

### Responsive

- Does the composition adapt rather than merely shrink?
- Are priorities preserved on smaller screens?
- Are navigation and interaction still appropriate?

### Accessibility

- Can important information be perceived without color alone?
- Are focus and interaction states visible?
- Is text readable?
- Are motion-heavy behaviors considered carefully?

### Distinctiveness

- Does the result feel authored for this product?
- Did generic AI patterns appear without justification?
- Are visual effects doing meaningful work?

## Severity

```text
Critical
  Blocks comprehension, task completion, or core intent.

Major
  Significantly weakens hierarchy, usability, responsiveness, or approved direction.

Minor
  Noticeable inconsistency or polish issue with limited impact.
```

## Critique format

```yaml
finding:
  dimension:
  severity: critical | major | minor
  observation:
  why_it_matters:
  evidence:
  recommended_change:
  affects:
    - intent
    - design-system
    - preview
    - figma
```

## Rules

- Critique against the approved intent, not personal taste.
- Prefer evidence from the actual implementation.
- Give a concrete change, not only a complaint.
- Fix major structural issues before micro-polish.
- After a revision, re-check the original problem instead of assuming the fix worked.

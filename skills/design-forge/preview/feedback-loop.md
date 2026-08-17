# Preview Feedback Loop

## Principle

Users should evaluate the experience, not be forced to become designers.

The agent owns diagnosis. The user owns subjective approval.

## Flow

```text
User experiences preview
        ↓
Natural-language feedback
        ↓
Classify signal
        ↓
Map to intent / decision / spec
        ↓
Estimate scope
        ↓
Local change or system change?
        ↓
Update spec
        ↓
Regenerate preview
        ↓
Re-review
```

## Feedback examples

### "Too cold"

Possible causes:

- color temperature
- typography character
- imagery
- spacing / density
- motion

Do not assume the cause. Use the current Design Specification and evidence to determine the most likely cause. Ask a clarifying question only when multiple high-impact interpretations remain.

### "Too much going on"

Possible causes:

- excessive visual hierarchy levels
- too many accents
- content density
- motion
- competing focal points

### "The navigation feels weird"

Possible causes:

- discoverability
- hierarchy
- interaction model
- transition timing
- mobile transformation

## Scope classification

```text
LOCAL
  affects one component/state

SECTION
  affects one page region

SYSTEM
  affects reusable design rules

DIRECTION
  changes the approved visual or emotional direction
```

System and Direction changes must update the canonical Design Specification before regeneration.

## Revision budget

Prefer small, interpretable iterations.

A revision should ideally change one meaningful hypothesis at a time so the user can understand whether it improved the experience.

If several dependent changes are required, explain the relationship briefly.

## Critic handoff

Before revising, the critic should produce:

```yaml
critique:
  severity: major | minor | accepted
  category:
  observation:
  likely_causes: []
  affected_decisions: []
  recommended_change:
  confidence:
```

The recommended change is not automatically authoritative. It must remain consistent with user intent and the canonical specification.

## Approval

Approval should capture what is accepted, not just a boolean.

```yaml
approval:
  status: approved
  confirmed:
    - visual direction
    - navigation behavior
    - mobile transformation
  accepted_tradeoffs:
    -
  unresolved:
    -
```

This prevents later Figma implementation from reopening decisions that were already settled.

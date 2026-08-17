# Design Forge Reasoning Engine

The Reasoning Engine turns context and operational design knowledge into bounded design decisions.

It is not a hidden design oracle. It is a disciplined loop for deciding when to ask, when to recommend, when to derive, and when to verify.

## 1. Core loop

```text
Observe
  ↓
Model context
  ↓
Detect uncertainty / design problem
  ↓
Retrieve relevant knowledge
  ↓
Classify impact
  ↓
Choose action
  ├─ ask user
  ├─ propose options
  ├─ decide autonomously
  ├─ enforce constraint
  └─ defer pending evidence
  ↓
Record decision
  ↓
Translate to Design Specification
  ↓
Render / Preview
  ↓
Verify
  ↓
Learn from explicit user feedback
```

Never skip directly from a vague request to a renderer when a high-impact design question remains unresolved.

## 2. The decision gate

Every unresolved design question should be evaluated across four dimensions:

```text
Impact
Uncertainty
Reversibility
Evidence
```

### Impact

How much can the decision change the user's experience?

```text
High
Medium
Low
```

### Uncertainty

How clearly is the intended outcome known?

```text
High
Medium
Low
```

### Reversibility

How expensive is it to change later?

```text
Hard
Moderate
Easy
```

### Evidence

How much evidence already exists?

```text
Strong
Partial
Weak
None
```

## 3. Default action policy

Use this as the default policy, not an absolute rule.

```text
High impact + High uncertainty
→ ask user with concrete alternatives / references

High impact + Medium uncertainty
→ propose 2–3 options and ask for direction

High impact + Low uncertainty
→ decide, explain briefly, record decision

Low impact + any uncertainty
→ decide using approved direction + system rules

Hard constraint
→ enforce constraint and explain only when relevant

Conflicting evidence
→ surface the conflict rather than pretending certainty
```

A reversible decision can be made more aggressively than an expensive structural decision.

## 4. User question threshold

Ask the user only when their answer is likely to materially alter:

- visual identity
- information architecture
- page hierarchy
- interaction model
- motion personality
- responsive transformation
- content strategy
- platform choice
- major component structure

Do not ask the user to choose:

- arbitrary pixel values
- internal token names
- component file names
- implementation details
- standard accessibility behavior
- routine responsive values

unless the decision has unusually high product impact.

## 5. Translate expert uncertainty into perceptual choices

The agent should convert professional design questions into observable choices.

```text
Expert question:
"Should we use a dense 12-column editorial grid?"

User-facing question:
"你更希望内容像杂志一样被精心编排，还是像工具一样让信息尽可能快速可见？"
```

```text
Expert question:
"Should motion be expressive?"

User-facing question:
"你希望页面切换只是让内容自然出现，还是希望它本身成为视觉体验的一部分？"
```

If the user cannot answer verbally, provide real visual references.

## 6. Knowledge retrieval policy

Retrieve the smallest relevant knowledge set that can resolve the current question.

Do not dump every potentially related principle.

Typical mappings:

```text
Visual direction
→ aesthetics + composition + typography + imagery

Information-heavy page
→ hierarchy + IA + cognition + progressive disclosure

Interaction-heavy product
→ affordance + state + feedback + error handling

Cinematic experience
→ composition + typography + imagery + motion + pacing

Mobile adaptation
→ responsive + interaction + accessibility + content hierarchy

Design system construction
→ tokens + semantic roles + components + states + accessibility
```

Knowledge retrieval must remain subordinate to project context and Knowledge Governance.

## 7. Reasoning modes

### Discovery reasoning

Purpose: reduce uncertainty about intent.

Output:

```text
unknowns
questions
references
candidate directions
```

### Direction reasoning

Purpose: turn user preferences into a coherent visual / interaction language.

Output:

```text
direction
principles
tradeoffs
reference evidence
```

### System reasoning

Purpose: turn direction into reusable design rules.

Output:

```text
color roles
type roles
spacing logic
layout rules
component principles
motion rules
responsive rules
```

### Experience reasoning

Purpose: determine whether the design actually works as a journey.

Output:

```text
critical journeys
states
transitions
content hierarchy
interaction test plan
```

### Renderer reasoning

Purpose: translate stable decisions into a target artifact without changing the design intent.

Output:

```text
implementation mapping
capability gaps
verification requirements
```

## 8. Decision record

Record high-impact decisions using:

```yaml
id:
question:
context:
options:
choice:
rationale:
tradeoff:
evidence:
confidence:
owner: user | agent | shared
reversibility: hard | moderate | easy
```

Do not record hidden chain-of-thought.

The record is an auditable design decision, not a transcript of internal reasoning.

## 9. Confidence

Confidence should describe decision certainty, not model self-esteem.

```text
High
→ explicit user intent or strong constraint

Medium
→ strong design evidence but some ambiguity

Low
→ inferred preference or weak evidence
```

Low-confidence, high-impact decisions should normally return to the user.

## 10. Design tension handling

When principles conflict, do not average them into an incoherent compromise.

Identify the actual tension:

```text
Immersion ↔ efficiency
Density ↔ readability
Expressiveness ↔ restraint
Novelty ↔ familiarity
Consistency ↔ contextual fit
Animation ↔ performance / reduced motion
```

Then select one of:

```text
Prioritize A
Prioritize B
Create explicit modes
Create progressive disclosure
Make the tradeoff contextual
Ask the user
```

## 11. Reference-driven reasoning

References are evidence for perception, not templates.

When showing references:

1. Explain what to inspect.
2. Separate the reference's visual principle from its brand identity.
3. Ask what the user likes / dislikes.
4. Convert that feedback into design variables.

Example:

```text
User likes:
large typography + slow transitions

User dislikes:
heavy gradients + dark UI

Derived direction:
large editorial type + restrained motion + light surfaces
```

## 12. Revision reasoning

When the user changes direction:

```text
New feedback
  ↓
Identify affected decisions
  ↓
Mark dependent decisions stale
  ↓
Preserve unaffected decisions
  ↓
Rebuild only affected specification
  ↓
Create new Preview Snapshot
```

Never silently mutate an approved snapshot.

## 13. Evidence hierarchy

Use evidence according to Knowledge Governance.

Prefer:

```text
Hard constraints / standards
→ official platform guidance
→ established HCI / UX research
→ design-system guidance
→ historical / academic design principles
→ practitioner evidence
→ visual references
→ trends
```

A visual reference can demonstrate a possibility without proving that it is the right solution.

## 14. Stop conditions

Reasoning should stop when:

- all high-impact unknowns are resolved,
- remaining decisions are low-impact or reversible,
- Design Direction is internally coherent,
- Design Specification is sufficient for the selected renderer,
- required verification can be defined.

Do not continue asking questions merely to make the process feel thorough.

## 15. Escalation conditions

Return to the user when:

- two high-impact directions remain equally plausible,
- explicit user preferences conflict,
- platform constraints conflict with approved experience,
- implementation capability would materially alter the design,
- evidence is contradictory on a consequential decision,
- the requested design is unsafe or inaccessible,
- the user has not approved a high-impact visual direction.

## 16. Renderer boundary

The Reasoning Engine may identify a renderer capability gap, but it must not solve that gap by silently changing design intent.

```text
Design intent
     ↓
Reasoning
     ↓
Design Specification
     ↓
Renderer capability check
     ↓
┌───────────────────────┐
│ supported             │ → render
│ minor implementation  │ → adapt without changing intent
│ material limitation   │ → escalate / propose alternatives
└───────────────────────┘
```

## 17. Verification feedback

Verification is evidence for the next reasoning cycle.

```text
Preview
  ↓
Observed problem
  ↓
Classify:
  intent mismatch
  implementation defect
  usability issue
  accessibility issue
  visual inconsistency
  performance issue
  ↓
Update the correct layer
```

Do not fix a Design Specification problem only inside the renderer.

Do not rewrite the Design Direction for a simple implementation bug.

## 18. Golden rule

The Reasoning Engine should make Design Forge feel less like:

```text
prompt → beautiful UI
```

and more like:

```text
intent
→ questions that matter
→ informed choices
→ coherent design system
→ real experience
→ evidence
→ refined implementation
```

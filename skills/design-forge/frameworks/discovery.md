# Design Discovery Interview

## Purpose

Design Discovery is an adaptive conversation engine for users who may have little or no design vocabulary.

Its primary objective is **understanding intent**, not collecting a checklist of design preferences.

The engine continuously asks:

> What is the most valuable thing I still need to understand before I can make the next important design decision?

It must never behave like a static questionnaire.

## Core loop

```text
Conversation state
      ↓
What do we know?
      ↓
What remains uncertain?
      ↓
Which uncertainty has the highest design impact?
      ↓
Can the user answer it directly?
      ↓
    yes → ask plainly
      ↓
    no → provide contrasts / references / examples
      ↓
User response
      ↓
Update intent model
      ↓
Check contradictions
      ↓
Repeat only while useful
```

## 1. Intent model

Maintain an internal model throughout the conversation.

```yaml
intent:
  purpose:
    product:
    primary_task:
    audience:

  content:
    hierarchy:
    density:
    media:

  emotional:
    desired: []
    avoid: []

  visual:
    composition:
    typography:
    color:
    imagery:
    density:
    whitespace:

  interaction:
    navigation:
    disclosure:
    feedback:

  motion:
    intensity:
    rhythm:
    continuity:

  responsive:
    platforms: []
    priorities: []

  constraints:
    technical: []
    brand: []
    accessibility: []

  references:
    liked: []
    disliked: []
    observations: []

  confidence:
    purpose: 0
    content: 0
    emotional: 0
    visual: 0
    interaction: 0
    motion: 0
    responsive: 0
```

The model represents **meaning and confidence**, not merely answers.

## 2. Classify user statements

A response can contain one or more of:

- explicit requirement
- preference
- emotional intent
- example/reference
- constraint
- assumption
- uncertainty
- contradiction

Do not treat all statements equally.

Example:

> "I want it to feel expensive, but I don't want black or gold."

Interpret as:

```text
emotional intent: premium / expensive
constraint: avoid black + gold
```

Keep the interpretation provisional until supported by more evidence.

## 3. Ask the highest-value question

At every turn, rank unresolved decisions by:

`impact × uncertainty × irreversibility`

Where:

- **impact** = how much the decision affects the overall experience
- **uncertainty** = how little the agent currently understands the user's intent
- **irreversibility** = how expensive it would be to change later

Ask about high-scoring decisions first.

This prevents wasting the conversation on low-impact details such as border radius while the overall visual direction is still unknown.

## 4. Progressive specificity

Move from human intent to professional specification in stages:

```text
Feeling
  ↓
Experience
  ↓
Design property
  ↓
Design rule
  ↓
Implementation value
```

Example:

```text
User: "I want it to breathe."

Feeling:
  calm / unhurried

Experience:
  content should not feel crowded

Design properties:
  generous whitespace
  clear grouping
  low visual density

Design rules:
  larger section spacing
  restrained secondary UI
  strong grouping hierarchy

Implementation:
  spacing tokens + container rules
```

Do not jump directly to implementation values.

## 5. Question formats

### Reflection

> "It sounds like you want something quiet and sophisticated, but not sterile. Is that right?"

### Contrast

> "When you say cinematic, do you mean large visual moments, or the feeling created by slow transitions and pacing?"

### Forced choice

> "Which is closer: a carefully edited magazine, or an immersive film opening?"

### Reference choice

Provide 2–4 real examples and explain what to observe.

### Decomposition

> "What pulled you in most: the typography, the imagery, or the way the page moves?"

### Trade-off

> "You want both very large type and a lot of information above the fold. Which should win when they conflict?"

### Confirmation

> "Based on everything so far, I'm proposing a quiet editorial system with large type, restrained color, and occasional immersive image sections. Does that capture what you mean?"

## 6. Never ask what the user cannot reasonably know

Avoid:

- What grid do you want?
- Which type scale do you prefer?
- What easing curve should the animation use?
- How many spacing tokens should we have?
- Do you want 8px or 12px radius?

Instead ask what the user can judge:

- Should the page feel tightly composed or spacious?
- Should text feel quiet or commanding?
- Should movement feel immediate or deliberate?
- Should controls feel soft or precise?

## 7. Use examples when language is lossy

If the user repeatedly uses vague words such as:

- premium
- modern
- cool
- high-end
- simple
- cinematic
- elegant
- advanced
- clean

do not repeatedly ask for definitions.

Translate the word into 3–5 plausible interpretations and use contrast or real references to resolve them.

Example:

```text
"minimal"

A — editorial minimal
B — product minimal
C — architectural minimal
D — expressive minimal
```

The labels are secondary. The descriptions and references do the real work.

## 8. Reference Explorer integration

Invoke Reference Explorer when:

- the user cannot articulate a preference
- two interpretations remain equally plausible
- visual behavior is easier to judge than describe
- motion or interaction needs to be experienced
- the user says "I don't know, show me"

Reference Explorer should return a small set of contrasting, visitable examples and explain what to observe.

Do not browse simply because browsing is possible.

## 9. Conversation memory and contradiction handling

Persist important decisions in the intent model rather than relying on the last message.

When a later answer changes an earlier assumption:

1. detect the conflict
2. state it plainly
3. update the model
4. identify downstream decisions that may change
5. ask only if the impact is material

Example:

> "Earlier we were optimizing for a quiet editorial feel. Your new preference for constant scroll effects pushes the experience toward something more kinetic. I think the right compromise is to keep the typography restrained and make motion the expressive layer."

## 10. Confidence and stopping

Do not demand certainty on every dimension.

A direction is ready for systemization when:

- purpose is clear
- content hierarchy is sufficiently understood
- high-impact emotional intent is clear
- major visual trade-offs are resolved
- interaction intent is clear enough for the requested scope
- unresolved details can be derived consistently

Low-confidence details can remain agent-owned.

## 11. Do not over-interview

The objective is not to maximize the number of questions.

Prefer:

```text
5 high-value questions
```

over:

```text
25 complete questionnaire answers
```

If enough evidence exists, stop asking and make the next design decision.

## 12. Decision record

For major projects, maintain a compact decision record:

```yaml
decisions:
  - question: "How should the homepage feel?"
    user_signal: "quiet but not boring"
    interpretation:
      - restrained visual language
      - strong editorial hierarchy
      - selective moments of contrast
    confidence: high
    evidence:
      - reference A
      - user rejected reference B
```

This prevents the final Figma design from becoming disconnected from the conversation that produced it.

## 13. Anti-patterns

### Questionnaire mode

Asking every possible design question in sequence.

### Leading the user

Suggesting one option so strongly that the user merely agrees.

### Vocabulary test

Using design terminology to appear sophisticated.

### Premature convergence

Picking a style after the first vague preference.

### Endless exploration

Continuing to browse references after the direction is already clear.

### Pixel democracy

Asking the user to approve low-level values that should be derived by the agent.

## 14. Definition of success

A successful discovery session produces a result where the user can say:

> "Yes, that's what I was trying to describe."

even if they could never have expressed it using professional design language themselves.

That is the strongest signal that Design Forge understood the user's intent.

# Discovery Protocol

## Goal

Discover design intent without requiring the user to understand design terminology.

The protocol is adaptive. It asks only the questions needed to reduce high-impact uncertainty.

## Discovery model

```text
User request
    ↓
Known facts
    ↓
Uncertainty map
    ↓
Impact ranking
    ↓
One high-value question
    ↓
User answer / reference choice
    ↓
Update Intent Model
    ↓
Repeat until direction is sufficiently stable
```

## What to discover

Prioritize these dimensions when relevant:

1. purpose
2. audience
3. content hierarchy
4. desired emotional response
5. avoided emotional response
6. visual character
7. content density
8. interaction character
9. motion character
10. responsive expectations
11. references
12. constraints

Do not force every dimension into the conversation if it can be inferred safely.

## Question selection

Choose the next question using:

```text
impact × uncertainty × user-answerability
```

High-impact, highly uncertain, easy-to-answer questions come first.

## Question forms

Prefer:

### Contrast

> Which is closer: quiet and editorial, or energetic and expressive?

### Concrete reference

> Take a look at A and B. Which one has the kind of navigation you want?

### Scenario

> When someone opens the page, should they immediately understand the content, or should the first moment feel more immersive?

### Priority

> If we can optimize only one thing, should it be readability or visual impact?

### Rejection

> Which direction should we definitely avoid?

## Do not ask prematurely

Do not ask about:

- exact colors
- exact font sizes
- exact breakpoints
- exact spacing values
- component libraries
- implementation technology

unless the user has already made these explicit constraints or they materially affect feasibility.

## Reference-assisted discovery

When the user cannot answer an abstract question, convert it into a reference comparison.

```text
abstract uncertainty
        ↓
2–5 concrete references
        ↓
user reaction
        ↓
extract observable preference
```

## Completion criteria

Discovery is sufficient when:

- purpose and audience are understood
- major emotional direction is reasonably clear
- major visual direction has evidence
- major interaction assumptions are known
- critical constraints are known
- unresolved tensions are explicit

Do not seek artificial certainty.

## Output

Produce an Intent Model containing:

```yaml
purpose:
audience:
content:
desired_feeling: []
avoid_feeling: []
priorities: []
constraints: []
references: []
preferences: []
uncertainties: []
tensions: []
confidence:
```

The model is an internal working artifact and should be updated throughout the process.

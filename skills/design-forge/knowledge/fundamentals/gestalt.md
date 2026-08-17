# Gestalt and Perceptual Organization

## Principle

People do not experience interface elements as isolated atoms. They automatically organize visual information into groups, patterns, foregrounds, and continuous structures.

Gestalt principles are useful because they describe recurring ways people perceive relationships in visual information.

## Core principles for interface design

### Proximity

Elements that are close together tend to be perceived as related.

**Use for:** grouping labels with controls, separating sections, establishing content clusters.

**Question:**
> Which things should feel like they belong together?

### Similarity

Elements that share visual properties tend to be perceived as belonging to the same category.

Properties include color, shape, size, typography, and treatment.

**Use for:** repeated components, navigation patterns, status categories.

**Critique:** if two things behave differently, do not make them look identical merely for visual consistency.

### Common region / enclosure

Elements within a clearly defined region tend to be perceived as a group.

**Use for:** cards, panels, bounded content groups, modal contexts.

Do not add boxes simply because grouping is weak; spacing and alignment may communicate the relationship more elegantly.

### Figure / ground

People distinguish a focal figure from its surrounding background.

**Use for:** focal content, overlays, dialogs, hero imagery, contrast and depth.

**Question:**
> What should feel like the thing in front, and what should recede?

### Continuity

People tend to follow lines, paths, alignments, and sequences that appear continuous.

**Use for:** navigation, timelines, scroll narratives, visual flow, aligned content.

### Closure

People can perceive complete forms from incomplete visual information.

**Use carefully:** logos, expressive graphics, cropping, visual storytelling.

Do not rely on closure when the missing information is required for comprehension.

### Common fate

Elements that move together can be perceived as related.

**Use for:** animation that communicates grouping or state transitions.

This is especially relevant to motion design: synchronized movement should communicate a relationship rather than merely add spectacle.

## Why this matters to Design Forge

Gestalt is not a list of visual tricks. It is a reasoning layer for translating intent into relationships.

```text
User intent
  ↓
"These things should feel related"
  ↓
Choose grouping mechanism
  ├─ proximity
  ├─ similarity
  ├─ enclosure
  ├─ alignment / continuity
  └─ motion / common fate
```

## Recognition checklist

When users say:

- "these feel disconnected"
- "I can't tell what belongs to what"
- "the page is confusing"
- "everything looks like a separate card"
- "I don't know where to look"

inspect perceptual grouping before adding more labels or instructions.

## Critique

Ask:

- Are related things visibly related?
- Are unrelated things visibly separated?
- Does visual similarity match functional similarity?
- Does the background help or compete with the figure?
- Does alignment create an obvious reading path?
- Does motion reinforce relationships or obscure them?

## Agent rule

Never use a Gestalt principle mechanically. Perceptual grouping must match the conceptual structure of the content.

## Sources

- Interaction Design Foundation, Gestalt Principles: https://www.interaction-design.org/literature/topics/gestalt-principles
- Interaction Design Foundation, Law of Figure-Ground: https://www.interaction-design.org/literature/topics/law-of-figure
- Interaction Design Foundation, Law of Similarity: https://www.interaction-design.org/literature/topics/law-of-similarity

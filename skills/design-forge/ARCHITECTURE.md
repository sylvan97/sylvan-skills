# Design Forge Architecture

## Mission

Design Forge turns an ambiguous natural-language idea into an intentional, explainable design and then realizes the approved direction as an editable Figma artifact.

The central transformation is:

`Conversation → Design Reasoning → Design Specification → Figma`

It is not a one-shot UI generator.

## Operating model

```text
User intent
    ↓
Understand
    ↓
Explore
    ↓
Design Brief
    ↓
Design Direction
    ↓
Design System
    ↓
Page / Flow Composition
    ↓
Interaction + Motion
    ↓
Figma Implementation
    ↓
Design Critique
    ↓
Refinement
```

## State machine

### DISCOVER

Goal: understand what is being designed and why.

Inputs:
- natural language
- existing product context
- content
- references
- constraints

Exit condition: enough context exists to identify the major design decisions.

### EXPLORE

Goal: help the user choose a direction without requiring design vocabulary.

Methods:
- forced-choice experiential questions
- visual references
- comparative descriptions
- small conceptual alternatives

Exit condition: major subjective dimensions have an approved direction.

### DEFINE

Goal: convert the conversation into a structured design direction.

Artifact:
- `design-direction`

Exit condition: another designer could understand the intended experience without the original conversation.

### SYSTEMIZE

Goal: derive the visual and interaction system.

Artifact:
- `design-system`

Includes:
- tokens
- typography roles
- color roles
- spacing
- grid
- component principles
- interaction states
- motion principles

Exit condition: repeated design decisions can be implemented consistently.

### COMPOSE

Goal: create information architecture, layout, and visual hierarchy.

Exit condition: the page/flow communicates the intended structure before fine decoration.

### PROTOTYPE

Goal: define meaningful interaction and motion.

Exit condition: important user actions and state transitions are understandable.

### FORGE

Goal: implement the approved design in Figma.

Requirements:
- inspect current Figma context
- use the repository's Figma skills/workflows
- use variables/components where semantically appropriate
- preserve editability
- keep naming meaningful

Exit condition: requested screens and interactions exist as an editable Figma design.

### CRITIQUE

Goal: evaluate the result against the design direction and general design principles.

Exit condition: concrete issues have either been fixed or consciously accepted by the user.

## Decision ownership

| Decision | Default owner |
|---|---|
| Product purpose | User |
| Audience | User |
| Content | User |
| High-level mood | Shared, user approval required |
| Visual direction | Shared, user approval required |
| Layout strategy | Agent, explain when consequential |
| Typography selection | Agent, within approved direction |
| Token values | Agent, derived from system |
| Component structure | Agent |
| Micro-interactions | Agent, unless brand-critical |
| Motion details | Agent, within approved motion language |
| Final subjective direction | User |

## Knowledge architecture

Design Forge should maintain knowledge as small, reusable reasoning modules rather than a single encyclopedia.

```text
knowledge/
├── fundamentals/
├── typography/
├── color/
├── layout/
├── interaction/
├── motion/
├── responsive/
├── accessibility/
├── design-systems/
└── critique/
```

Each knowledge module should answer four questions where possible:

1. What is the principle?
2. Why does it matter?
3. How can an agent recognize it in a design problem?
4. What action should the agent take?

## Framework architecture

```text
frameworks/
├── discovery.md
├── visual-direction.md
├── design-brief.md
├── design-system.md
├── interaction.md
├── motion.md
├── responsive.md
└── critique.md
```

Frameworks describe how to reason and act. Knowledge describes what is true or useful about design.

## Figma boundary

Design Forge should not encode every Figma API operation in its knowledge base.

The separation is:

```text
Design Forge
  = what to decide + why + when

Figma skill / MCP
  = how to manipulate the canvas
```

When implementing Figma work, use the installed Figma skills as the operational layer. Design Forge supplies the design intent and constraints.

## Artifact chain

Major projects should preserve this chain:

```text
Design Brief
    ↓
Design Direction
    ↓
Design System
    ↓
Figma Design
    ↓
Design Review
```

This allows later iterations to change the design without losing the reasoning that produced it.

## Planned evolution

### v0.1
- skill identity
- constitution
- architecture
- conversation-first workflow

### v0.2
- design discovery framework
- non-designer interview system
- visual-direction framework
- design brief schema

### v0.3
- typography, color, layout, grid, Gestalt knowledge
- design-system/token framework

### v0.4
- interaction and motion knowledge
- responsive and accessibility frameworks

### v0.5
- Figma MCP implementation workflow
- component/variable generation strategy
- Figma design review loop

### v1.0
- end-to-end Conversation → Figma workflow
- reusable reference library
- automated design critique
- stable artifact schemas

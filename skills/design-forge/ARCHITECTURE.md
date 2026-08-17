# Design Forge Architecture

## Mission

Design Forge turns an ambiguous natural-language idea into an intentional, explainable design and validates the experience before realizing the approved direction as an editable Figma artifact.

The central transformation is:

`Conversation → Intent → Design Reasoning → Experience Preview → Figma`

It is not a one-shot UI generator and not a static design questionnaire.

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
Experience Preview
    ↓
User feedback
    ↓
Design Critic
    ↓
Refine
    ↓
Figma Implementation
    ↓
Design Review
```

## Core subsystems

### Intent Engine

Understands what the user means, including emotional intent, explicit requirements, constraints, references, uncertainty, and contradictions.

### Reference Explorer

Uses real, visitable examples to help users discover preferences they cannot articulate.

### Design Reasoning

Selects relevant principles and converts them into explicit design decisions. Knowledge is consulted here rather than dumped directly into the conversation.

### Design Tension

Detects competing goals and surfaces trade-offs before they become accidental design problems.

### Design System

Converts approved direction into semantic tokens, variables, components, and layout rules.

### Experience Preview

Creates a self-contained, interactive HTML/CSS/JS preview so the user can experience the design before expensive Figma implementation.

### Design Critic

Reviews the preview and final Figma design against user intent, design principles, usability, accessibility, responsiveness, and distinctiveness.

### Figma Forge

Realizes the validated direction as an editable Figma design using the installed Figma workflow and MCP capabilities.

## State machine

### DISCOVER

Understand what is being designed and why.

Exit condition: enough context exists to identify major design decisions.

### EXPLORE

Resolve high-impact subjective uncertainty through conversation, contrast, and references.

Exit condition: major subjective dimensions have a plausible direction.

### DEFINE

Create the Design Brief and Design Direction.

Exit condition: another designer could understand the intended experience without the original conversation.

### SYSTEMIZE

Derive typography, color, spacing, grid, component, interaction, motion, responsive, and accessibility rules.

Exit condition: repeated design decisions can be implemented consistently.

### PREVIEW

Create a runnable, self-contained interactive HTML experience.

Exit condition: the user can meaningfully judge the experience rather than a static screenshot.

### CRITIQUE

Evaluate the preview against intent and principles.

Exit condition: concrete issues are fixed, consciously accepted, or returned to discovery.

### FORGE

Implement the approved direction in Figma.

Exit condition: requested screens/flows exist as editable Figma artifacts.

### REVIEW

Critique the Figma result and verify it remains faithful to the approved direction.

## Decision ownership

| Decision | Default owner |
|---|---|
| Product purpose | User |
| Audience | User |
| Content | User |
| High-level emotional direction | Shared, user approval required |
| Visual direction | Shared, user approval required |
| Layout strategy | Agent, explain when consequential |
| Typography selection | Agent, within approved direction |
| Token values | Agent, derived from system |
| Component structure | Agent |
| Micro-interactions | Agent, within approved motion language |
| Preview implementation | Agent |
| Final subjective direction | User |

## Artifact chain

```text
Design Brief
    ↓
Design Direction
    ↓
Design System
    ↓
Experience Preview
    ↓
Design Review
    ↓
Figma Design
    ↓
Figma Review
```

## Knowledge architecture

Knowledge is organized as reusable reasoning modules:

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
└── design-systems/
```

Knowledge modules answer:

1. What is the principle?
2. Why does it matter?
3. How can an agent recognize it?
4. What should the agent do?
5. How should the result be critiqued?

## Reasoning architecture

```text
Intent Model
     ↓
Uncertainty Map
     ↓
Relevant Principles
     ↓
Candidate Decisions
     ↓
Design Tensions
     ↓
Decision Record
     ↓
Design Direction
```

The agent should not invoke every knowledge module for every project. It should select only the principles relevant to the current problem.

## Figma boundary

```text
Design Forge
  = what to decide + why + when

Figma skills / MCP
  = how to manipulate the canvas
```

Design Forge supplies design intent, system rules, and validated experience. Installed Figma skills supply operational canvas manipulation.

## Experience Preview boundary

```text
Design Forge
  = what the experience should communicate and how it should behave

Preview renderer
  = executable HTML/CSS/JS representation
```

The preview must be disposable and cheap to change. It is a validation artifact, not necessarily production code.

## Planned evolution

### v0.1
- skill identity
- adaptive discovery
- reference exploration
- visual direction
- foundational design knowledge

### v0.2
- design reasoning engine
- design decision records
- design tension model
- design critic
- experience preview specification

### v0.3
- typography, color, layout, responsive knowledge
- semantic token framework

### v0.4
- interaction, motion, accessibility knowledge
- preview interaction patterns

### v0.5
- Figma MCP implementation workflow
- variables/components generation strategy
- Figma design review loop

### v1.0
- end-to-end Conversation → Intent → Preview → Figma
- reference library and verification
- adaptive design critique
- stable artifact schemas

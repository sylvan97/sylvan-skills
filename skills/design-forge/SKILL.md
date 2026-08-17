---
name: design-forge
description: Transform natural-language conversations into intentional product and visual design, then realize the approved direction as editable Figma designs through Figma MCP. Use when a user wants to explore, define, critique, or create a website, app, interface, design system, interaction, motion language, or responsive design in Figma—especially when the user does not know design terminology.
---

# Design Forge

Design Forge is a conversation-first design skill. Its job is not to guess a style and immediately draw UI. Its job is to turn an ambiguous idea into a coherent, explainable design direction and then implement that direction in Figma.

## Core loop

`Understand → Explore → Define → Systemize → Compose → Prototype → Critique → Refine → Deliver`

Never skip directly from a vague request to final UI when important design decisions are still unknown.

## 1. Understand

Extract:
- product or page purpose
- audience
- content and information hierarchy
- primary user tasks
- platform and viewport requirements
- existing brand constraints
- technical constraints
- desired emotional impression

Do not ask for professional terminology. Translate ordinary language into design properties.

## 2. Explore

When visual direction is unclear, use concrete choices instead of jargon. Ask about perception and behavior, for example:
- quiet vs energetic
- editorial vs product-like
- restrained vs expressive
- structured vs experimental
- immersive vs information-dense
- warm vs cool
- static vs kinetic

When useful, present visual references or small alternatives so the user can react to things they can see rather than name.

Ask only questions that can materially change the design.

## 3. Define

Convert the conversation into a `design-direction` containing, as applicable:
- mood and emotional intent
- visual language
- composition
- hierarchy
- typography
- color
- imagery
- interaction model
- motion language
- density and whitespace
- responsive behavior
- accessibility intent

Explain consequential decisions in plain language before implementation.

## 4. Systemize

Derive a small, coherent design system from the direction. Establish:
- typography scale and roles
- color roles
- spacing scale
- grid/container rules
- radii
- borders and elevation where needed
- motion timing/easing principles
- semantic design tokens
- component patterns

Do not invent arbitrary tokens merely to make a system look complete. Tokens should represent repeated design decisions.

## 5. Compose

Create the page structure and visual hierarchy before polishing details.

Prefer:
- meaningful composition
- clear hierarchy
- intentional whitespace
- consistent alignment
- content-led layouts
- restrained decoration

Avoid generic AI patterns unless explicitly requested: excessive gradients, gratuitous glassmorphism, random floating shapes, oversized decorative typography, meaningless animation, and interchangeable SaaS cards.

## 6. Prototype

Define interaction states and transitions where they affect comprehension or task completion.

Motion should communicate:
- continuity
- spatial relationship
- state change
- focus
- feedback

Do not add motion merely because the page is otherwise static.

## 7. Figma implementation

Use Figma MCP only after enough design direction has been established to avoid random exploration in the canvas.

Implementation should preserve design intent through:
- Variables for meaningful tokens
- reusable components for repeated patterns
- Auto Layout where appropriate
- semantic naming
- responsive variants/layouts when required
- editable vector/icon assets rather than emoji or raster substitutes

For new Figma work, inspect the available file/context first and follow the repository's Figma workflow skills before invoking Figma operations.

## 8. Critique

Never treat the first generated design as finished. Review it against:

- visual hierarchy
- composition
- typography
- color roles
- spacing consistency
- information architecture
- interaction clarity
- motion purpose
- responsive behavior
- accessibility
- system consistency
- distinctiveness / anti-template quality

Identify concrete issues, explain why they matter, and propose targeted revisions.

## 9. Conversation rules

- Never assume the user knows design vocabulary.
- Never ask a professional design question when an experiential question will work better.
- Do not force the user to choose a design system before understanding the content.
- Separate user preference from design principle; a preference may be honored, but it should not silently override usability or coherence.
- Keep the user in control of high-impact subjective decisions.
- Make low-level design decisions autonomously when they follow clearly from approved direction.
- Ask for confirmation at major irreversible or high-impact direction changes, not for every pixel.

## Knowledge routing

Before making a major design decision, consult the relevant knowledge/framework material in this skill when available:
- fundamentals → composition, hierarchy, Gestalt, visual perception
- typography → type roles, scale, readability, editorial composition
- color → semantic roles, contrast, palette relationships
- layout → grid, alignment, density, whitespace
- interaction → affordance, feedback, navigation, states
- motion → timing, easing, continuity, choreography
- responsive → adaptation across viewport sizes
- accessibility → contrast, focus, target size, readable structure
- design-systems → tokens, variables, components, naming
- critique → systematic visual and interaction review

The knowledge base is a reasoning aid, not a source of fashionable presets. Prefer principles that generalize across products.

## Output artifacts

When the user asks for a complete design process, produce or maintain these conceptual artifacts as appropriate:

1. `Design Brief` — what is being designed and why.
2. `Design Direction` — the approved visual/interaction direction.
3. `Design System` — tokens, rules, and reusable patterns.
4. `Figma Design` — editable implementation.
5. `Design Review` — issues found and changes made.

Do not create every artifact if the task does not need it, but preserve the reasoning chain for major projects.

# Color: Semantic Roles and Contrast

## Principle

Color has two jobs that must be considered separately:

1. express the visual character of the product
2. communicate information or interaction

When those jobs conflict, semantic clarity wins for functional states.

## Recognition

Common problems include:

- too many accent colors competing for attention
- semantic states expressed only through color
- primary actions lacking sufficient distinction
- decorative color stealing attention from content
- text relying on subtle color differences to establish hierarchy

## Decision

Separate:

```text
brand / expressive color
        ↓
visual identity

semantic color
        ↓
meaning + state
```

A product can have a restrained expressive palette while still maintaining clear success, warning, error, focus, and interactive states.

## Contrast

Contrast is relational. Evaluate foreground against its actual background and state, not as an isolated color pair.

Check:

- primary text
- secondary text
- disabled text where applicable
- borders that convey structure
- controls and focus indicators
- text over images
- hover / active / selected states

Do not rely on color alone when a distinction is important.

## User question

Instead of:

> "What primary color do you want?"

Ask:

> "Should the main color quietly support the content, or should it be one of the things people remember about the experience?"

## Action

Define semantic variables first, then map palette values to them.

Example:

```text
color.background.default
color.surface.default
color.text.primary
color.text.secondary
color.border.default
color.action.primary
color.action.primary-hover
color.feedback.success
color.feedback.warning
color.feedback.error
color.focus.default
```

## Critique

Review the interface without relying on hue recognition:

- Can important states still be understood?
- Is text readable on every relevant surface?
- Does the accent overpower the hierarchy?
- Do focus and interactive states remain visible?
- Does the system remain coherent when imagery or dark/light surfaces are introduced?

# HTML Preview Renderer

The HTML renderer is the first downstream renderer in Design Forge.

Its purpose is to create a **real, navigable, interactive preview** before any Figma rendering.

## Pipeline

```text
Conversation
  ↓
Design State
  ↓
Accepted Snapshot
  ↓
HTML Renderer
  ↓
Multi-route Preview
  ↓
User Acceptance
  ↓
Figma Renderer (optional)
```

## Why HTML comes first

A static image cannot validate:

- route relationships
- navigation behavior
- disclosure behavior
- responsive transformation
- interaction states
- feedback
- motion intent

HTML provides a cheap, inspectable intermediate representation before committing the design to Figma.

## Important boundary

This renderer does not replace Figma. It is a **design acceptance layer**.

The user should be able to reject the preview and send the design state back through Design Forge before the Figma renderer is allowed to run.

## Agent-browser

If the user's environment exposes `agent-browser`, Design Forge may request permission to use it for automated interaction verification.

If it is unavailable, the user remains the acceptance authority and should manually validate the preview.

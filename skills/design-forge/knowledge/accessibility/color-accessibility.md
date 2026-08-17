---
id: color-accessibility
name: Color Accessibility
category: accessibility
authority: standard
authority_note: Validate against applicable WCAG contrast and non-color communication requirements.
summary: Ensure text, controls, and semantic states remain perceivable without relying on color alone.
when_to_consider:
  - color communicates status
  - light or low-contrast visual directions are requested
  - text and controls sit on image or tinted surfaces
observable_signals:
  - state differences are encoded only by hue
  - text contrast is weak
  - decorative color competes with semantic meaning
reasoning_triggers:
  - condition: "Color carries essential information"
    action: "Add another perceptual or semantic cue and verify contrast"
user_questions:
  - question: "这个颜色主要是为了氛围，还是承担状态/操作含义？"
    purpose: "Separate expressive color from semantic color"
spec_implications:
  - area: color
    implication: "Define semantic roles separately from decorative palette"
  - area: components
    implication: "Define state cues that do not rely on hue alone"
verification:
  - check: "Contrast"
    evidence: "Applicable text and interface elements meet the project's accessibility target"
  - check: "Non-color cue"
    evidence: "Important states remain distinguishable without color perception"
common_failures:
  - using red/green as the only success/error distinction
  - choosing colors by aesthetic preference without contrast validation

---
id: inclusive-interaction
name: Inclusive Interaction
category: accessibility
authority: standard
authority_note: Follow applicable WCAG guidance and platform accessibility conventions.
summary: Ensure interaction is perceivable, operable, understandable, and robust across input and ability differences.
when_to_consider:
  - interactive UI is designed
  - custom controls are introduced
  - keyboard, touch, screen reader, or assistive technology access matters
observable_signals:
  - interaction relies on hover alone
  - focus is invisible
  - target areas are difficult to operate
  - meaning is conveyed only through color or motion
reasoning_triggers:
  - condition: "A custom interaction may exclude an input mode or assistive technology"
    action: "Check equivalent perceivable and operable paths before approving the interaction"
user_questions:
  - question: "这个交互是否必须依赖鼠标、悬停或动画才能完成？"
    purpose: "Detect unnecessary input dependence"
spec_implications:
  - area: interaction
    implication: "Define keyboard/focus behavior and non-hover alternatives where applicable"
  - area: component
    implication: "Preserve semantic roles and accessible names"
verification:
  - check: "Keyboard path"
    evidence: "Core journeys can be completed without a pointing device where applicable"
  - check: "Non-color meaning"
    evidence: "Important states do not rely on color alone"
common_failures:
  - hover-only interactions
  - invisible focus states
  - custom controls without semantic behavior

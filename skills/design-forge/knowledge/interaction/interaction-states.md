---
id: interaction-states
name: Interaction States
category: interaction
authority: advisory
summary: Model visible UI states so users can understand what an interactive element can do and what has happened.
when_to_consider:
  - controls change appearance or behavior
  - async actions exist
  - selection, focus, disabled, error, or success states matter
observable_signals:
  - the same control looks ambiguous across states
  - users cannot tell whether an action succeeded
  - loading or disabled states are missing
  - state changes occur without clear feedback
reasoning_triggers:
  - condition: "A component changes based on user action or system state"
    action: "Enumerate relevant visible states before styling the default state"
user_questions:
  - question: "这个操作完成以后，你希望用户明确看到什么变化？"
    purpose: "Identify meaningful feedback without requiring state terminology"
spec_implications:
  - area: components
    implication: "Define state anatomy and state-specific visual roles"
  - area: interaction
    implication: "Define transitions between relevant states"
verification:
  - check: "State clarity"
    evidence: "A reviewer can distinguish actionable, focused, disabled, loading, success, and error states where applicable"
common_failures:
  - designing only the default state
  - using color as the only state signal
  - hiding feedback after asynchronous actions

---
id: interaction-feedback
name: Interaction Feedback
category: interaction
authority: advisory
summary: Make the consequence of an action perceptible, timely, and appropriately scaled.
when_to_consider:
  - actions have delayed or invisible outcomes
  - users need confirmation or recovery
  - destructive or consequential actions exist
observable_signals:
  - clicks appear to do nothing
  - feedback arrives too late or is disconnected from the action
  - success is shown without changing context
reasoning_triggers:
  - condition: "The user cannot easily tell whether an action happened"
    action: "Add contextual feedback proportional to the action's consequence"
user_questions:
  - question: "这个操作如果成功或失败，用户最需要立刻知道什么？"
    purpose: "Define the essential feedback outcome"
spec_implications:
  - area: interaction
    implication: "Specify trigger, response, timing, persistence, and recovery"
  - area: motion
    implication: "Use motion to clarify causality when useful, not as decoration"
verification:
  - check: "Causality"
    evidence: "The relationship between action and result is understandable"
  - check: "Failure recovery"
    evidence: "Important failures provide a meaningful next action"
common_failures:
  - toast-only feedback for important persistent changes
  - feedback that disappears before it can be understood
  - excessive animation for routine actions

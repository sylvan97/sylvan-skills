# Affordance & Feedback

## Principle

Users need perceivable cues about what can be interacted with, what happened after an action, and what state the system is in.

## Trigger

Activate for custom controls, unfamiliar interactions, asynchronous actions, destructive actions, and interfaces where state changes are subtle.

## Non-designer question

> 用户第一次看到这个东西时，能不能自然知道“这里可以点、可以拖、可以输入”，以及操作之后发生了什么？

## Decision

Make interactive possibilities and resulting state changes perceivable. Do not rely on visual decoration alone to communicate behavior.

## Specification implications

Define at minimum:

```text
rest
hover
focus
pressed
selected
disabled
loading
success
error
```

Use labels, icons, position, state styling, and feedback according to the task.

## Verification

Test a critical interaction without instruction. Confirm the user can identify the action and its result.

## Common failures

- hover-only affordances
- ambiguous icon-only controls
- actions with no confirmation or progress
- disabled states that are indistinguishable from unavailable content

## Sources

- Don Norman, The Design of Everyday Things
- Nielsen Norman Group, Visibility of System Status

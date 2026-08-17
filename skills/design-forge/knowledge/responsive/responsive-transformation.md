# Responsive Transformation

## Principle

Responsive design is a transformation of an experience across contexts, not merely a smaller desktop layout.

## Trigger

Activate whenever multiple viewport classes are required or when touch, reading, navigation, or density changes materially between devices.

## Non-designer question

> 手机上你更希望“尽量保留桌面的感觉”，还是“为了手机重新组织内容和操作”？

## Decision

For each major region decide whether it should:

```text
scale
reflow
stack
transform
hide
reveal
reposition
divide
change interaction
```

Base the decision on content priority and interaction context.

## Specification implications

Document transformations per major component/page rather than only listing breakpoints.

## Verification

Test representative desktop, tablet, and mobile states. Verify hierarchy, task completion, touch target behavior, content order, and navigation transformation.

## Common failures

- shrinking desktop typography until unreadable
- preserving desktop navigation on narrow screens
- hiding important content merely because space is limited
- changing layout without reconsidering interaction

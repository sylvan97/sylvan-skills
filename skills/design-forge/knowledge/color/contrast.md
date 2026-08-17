# Contrast

## Principle

Contrast creates hierarchy and can support accessibility. It is broader than color contrast: size, weight, density, shape, position, and motion can also differ.

## Trigger

Activate when text is hard to read, hierarchy is weak, muted UI is requested, or status/action distinctions depend on subtle color differences.

## Non-designer question

> 你希望这个元素只是“低调”，还是它真的可以被用户忽略？这两件事不一定一样。

## Decision

Use sufficient contrast for content and interaction while using weaker contrast only for genuinely secondary information.

## Specification implications

Define contrast requirements for text, controls, focus indicators, and meaningful graphical elements according to the applicable accessibility standard.

## Verification

Run contrast checks and inspect the interface under different displays and brightness levels. Test focus visibility separately.

## Common failures

- making secondary text too faint
- relying on subtle borders for critical boundaries
- assuming low contrast equals premium
- using color difference without checking accessibility

## Sources

- W3C WCAG 2.2, Contrast Minimum and related contrast guidance

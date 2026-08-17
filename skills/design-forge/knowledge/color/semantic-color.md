# Semantic Color

## Principle

Color should have roles and meanings, not only hex values. Separate brand expression from functional semantics.

## Trigger

Activate when a design system uses status colors, actions, surfaces, text roles, dark mode, or brand color across many components.

## Non-designer question

> 这个颜色是为了“表达品牌”，还是为了让用户知道“这是成功、警告、错误、可点击”等状态？

## Decision

Define semantic roles such as:

```text
text.primary
text.secondary
surface.default
surface.raised
border.subtle
action.primary
status.success
status.warning
status.error
```

Map raw palette values to roles rather than scattering raw colors through components.

## Specification implications

Document role, contrast intent, light/dark behavior, and state usage.

## Verification

Check that changing the palette does not change semantic meaning and that status is not communicated by color alone.

## Common failures

- raw hex values everywhere
- one brand color used for every semantic state
- status conveyed only by hue
- dark mode implemented as arbitrary color inversion

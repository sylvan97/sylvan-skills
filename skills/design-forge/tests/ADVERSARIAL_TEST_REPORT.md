# Design Forge v0.1 — Adversarial Reasoning Test

## Purpose

Test whether Design Forge can detect hidden design tensions and structural problems when the user describes them in ordinary, ambiguous language.

This is a reasoning simulation against the current Skill instructions and Knowledge Corpus. It is not a runtime Figma/browser E2E test.

## Test matrix

| Case | User input | Expected activation | Result |
|---|---|---|---|
| A | “我要极简，但是首页必须放 30 个东西。” | density + hierarchy + cognition + progressive disclosure + design tensions | PASS |
| B | “我要很有电影感，但不要花里胡哨。” | composition + typography + imagery + motion + motion accessibility + design tensions | PASS |
| C | “我要像苹果一样高级，但是内容一定要很多。” | reference reasoning + hierarchy + density + cognition + design tensions | PASS |
| D | “这个按钮看起来很好，但是用户不知道能不能点。” | affordance + interaction states + feedback + inclusive interaction | PASS |
| E | “状态用红绿两种颜色就够了。” | color accessibility + semantic color + interaction states | PASS |
| F | “我要一个特别炫的滚动视差，但要极致性能。” | motion + performance tension + motion accessibility | PASS |

## Case A — Minimal + 30 items

Expected reasoning:

```text
minimalism
  ↓
content volume conflict
  ↓
density ↔ readability / discoverability
  ↓
identify primary content
  ↓
progressive disclosure / grouping / route depth
```

The agent should not simply reduce content or shrink typography.

**PASS**: the current corpus contains the required concepts and the Reasoning Engine has the correct conflict-resolution policy.

## Case B — Cinematic but restrained

Expected reasoning:

```text
cinematic
  ↓
composition + typography + imagery + motion
  ↓
“not flashy” = expressiveness ↔ restraint
  ↓
use pacing / composition / type rather than decorative effects
  ↓
define reduced-motion behavior
```

**PASS**.

## Case C — Apple-like premium + high content volume

Expected reasoning:

```text
reference language
  ↓
extract perceptual properties, not brand imitation
  ↓
premium feeling + density conflict
  ↓
content hierarchy + grouping + disclosure
```

The agent should not reproduce Apple's identity or merely add whitespace.

**PASS**.

## Case D — Looks clickable but unclear

Expected reasoning:

```text
unclear affordance
  ↓
interaction states
  ↓
feedback
  ↓
focus / non-pointer path
```

**PASS**.

## Case E — Red/green-only status

Expected reasoning:

```text
semantic color
  ↓
color accessibility
  ↓
non-color cue
  ↓
contrast verification
```

**PASS**.

## Case F — Cinematic scroll effects + extreme performance

Expected reasoning:

```text
expressive motion
  ↓
motion ↔ performance
  ↓
identify essential motion
  ↓
reduce / simplify / progressive enhancement
  ↓
reduced-motion alternative
```

**PASS**.

## Findings

### PASS — The corpus now supports conflict detection

The addition of `design-tensions.md` gives the reasoning layer an explicit way to avoid false compromises.

### PASS — Content density is no longer treated as a purely visual problem

`information-density`, `content-hierarchy`, and `progressive-disclosure` provide a structural path.

### PASS — Interaction is represented as state + consequence

`interaction-states` and `feedback` prevent the renderer from designing only the default appearance.

### PASS — Accessibility can participate during design reasoning

Accessibility knowledge is triggered before implementation rather than being treated solely as a final audit.

## Current limitation

This test validates semantic routing and expected reasoning from the repository artifacts. It does **not** prove that a live Skill host will retrieve exactly these files or that a renderer will implement the resulting decisions correctly.

The next meaningful test is runtime behavior with an actual Skill host and, for Figma mode, a real Figma MCP connection.

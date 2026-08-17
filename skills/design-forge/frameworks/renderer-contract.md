# Renderer Contract

## Purpose

A Renderer converts an approved Design Specification into a target artifact without redefining the design.

```text
Intent
  ↓
Design Direction
  ↓
Design Specification
  ↓
Renderer
  ↓
Target Artifact
```

The same Design Specification should be portable across multiple Renderers whenever the target platform can express the required behavior.

## Responsibilities

A Renderer is responsible for:

- mapping design tokens to target primitives
- mapping layout rules to target layout systems
- mapping components and states to target components
- mapping interactions and motion to target behavior
- respecting responsive rules
- preserving accessibility requirements
- preserving approved content hierarchy
- reporting unsupported or ambiguous requirements
- producing a verifiable target artifact

A Renderer is not responsible for:

- choosing a new visual direction
- silently changing approved hierarchy
- replacing user-approved references with unrelated patterns
- inventing product requirements
- deciding subjective trade-offs that were already approved

## Renderer manifest

Each Renderer should declare a manifest:

```yaml
name: react
version: 0.1
mode: implementation

target:
  platform: web
  framework: react

required_capabilities:
  - filesystem
  - project_inspection

optional_capabilities:
  - browser

input:
  design_specification: required
  preview_snapshot: optional
  project_context: required

output:
  artifact: source_code
  editable: true
  location: project

supported_features:
  tokens: true
  typography: true
  responsive: true
  interaction: true
  motion: true
  accessibility: true

verification:
  default: manual
  optional: browser

limitations: []
```

## Capability levels

A Renderer should distinguish:

```text
required
optional
unsupported
unknown
```

Never treat an optional capability as a hidden prerequisite.

Never claim support for a feature that has not been verified.

## Input contract

The canonical input is the approved Design Specification.

Additional context may include:

- approved Design Direction
- Preview Snapshot
- interaction test plan
- project context
- existing design tokens
- existing components
- target constraints

The Renderer may inspect the target environment, but must not mutate design decisions merely because the environment is inconvenient.

## Translation rules

### Tokens

Prefer semantic mapping:

```text
Design token
    ↓
Target token / variable / constant
```

Do not flatten semantic roles into arbitrary literal values unless the target platform requires it.

### Typography

Preserve hierarchy, role, readability, measure, weight, and responsive behavior.

### Layout

Preserve relationships rather than copying isolated pixel values.

For example:

```text
content width
container behavior
alignment
spacing rhythm
```

are more important than reproducing every source measurement literally.

### Components

Map component anatomy and states to the target platform's reusable primitives.

### Interaction

Map intent and state transitions, not merely visual appearance.

### Motion

Preserve purpose, trigger, timing character, and reduced-motion behavior. If a target cannot express a motion requirement, report the limitation instead of silently dropping it.

## Existing project rule

For an existing project:

```text
inspect → map → reuse → modify → verify
```

Do not:

```text
ignore → duplicate → overwrite
```

Existing project conventions are constraints unless they conflict with an explicitly approved design requirement.

## Unsupported feature handling

When a target cannot faithfully represent a requirement:

1. identify the unsupported requirement
2. explain the impact
3. offer the smallest viable adaptation
4. ask the user only when the adaptation changes a high-impact experience decision
5. record the accepted deviation

Do not silently degrade.

## Verification contract

Every Renderer must declare how its artifact is verified.

Examples:

```text
Figma
→ visual / component / prototype review

React
→ build / route / responsive / interaction review

Vue
→ build / route / responsive / interaction review

HTML
→ browser / route / interaction review
```

Verification claims must be backed by actual evidence.

## Renderer completion

A Renderer is complete only when:

- target artifact exists
- required capabilities succeeded
- approved design intent is preserved
- unsupported requirements are documented
- required verification has been completed or explicitly handed to the user
- deviations are recorded

## Future Renderers

Potential targets include:

- Figma
- React
- Vue
- HTML
- SwiftUI
- React Native
- Flutter
- Webflow
- Framer
- Storybook
- Design System packages

A new Renderer should reuse the same Design Specification and discovery process rather than creating a parallel design methodology.

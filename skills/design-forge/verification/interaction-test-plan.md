# Interaction Test Plan

## Purpose

Translate the Design Specification into a small set of high-value journeys that can be verified by a browser or a human.

The goal is not exhaustive UI testing. The goal is to validate the design hypotheses that matter.

## Test generation

Generate tests from:

- page hierarchy
- primary actions
- navigation model
- component states
- responsive transformations
- motion requirements
- accessibility requirements
- explicit design decisions
- known design tensions

## Test schema

```yaml
id:
name:
purpose:
priority: critical | high | normal | low
from:
viewport: desktop | tablet | mobile | all
preconditions: []
action:
  type:
  target:
  value:
expect:
  route:
  state:
  visual:
  behavior:
  accessibility:
  motion:
```

## Representative journeys

### Navigation

```yaml
id: home-to-list
name: Home to list
priority: critical
from: /
action:
  type: click
  target: primary navigation link
expect:
  route: /list
```

### Detail

```yaml
id: list-to-detail
name: List to detail
priority: high
from: /list
action:
  type: click
  target: first representative item
expect:
  route: /list/item
  visual: detail hierarchy is visible
```

### Responsive navigation

```yaml
id: mobile-navigation
name: Mobile navigation
priority: critical
viewport: mobile
action:
  type: click
  target: menu trigger
expect:
  state: navigation open
  accessibility: focus remains usable
```

## Coverage rules

Every generated preview should test, when applicable:

- entry page
- every primary navigation path
- at least one list → detail path
- primary CTA
- major disclosure interaction
- mobile navigation
- at least one representative tablet transformation
- keyboard/focus behavior for critical controls
- reduced motion when motion is part of the design

## Avoid false confidence

A test passing means the tested journey behaved as expected. It does not prove the entire site is correct.

The report should distinguish:

```text
verified
not verified
not applicable
blocked
```

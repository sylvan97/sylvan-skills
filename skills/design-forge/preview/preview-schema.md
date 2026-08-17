# Preview Schema

## Purpose

The Preview Schema describes what must be rendered and validated without duplicating the full Design Specification.

It is derived from the canonical Design Specification.

```yaml
preview:
  source_spec_version: "0.1"
  title:
  entry_route:

  viewports:
    - name: desktop
      width:
      height:
    - name: tablet
      width:
      height:
    - name: mobile
      width:
      height:

  routes:
    - id:
      purpose:
      required_sections: []

  states:
    - target:
      state:
      validation_goal:

  interactions:
    - id:
      trigger:
      target:
      behavior:
      validation_goal:

  motion:
    - id:
      trigger:
      behavior:
      reduced_motion_behavior:

  responsive_checks:
    - target:
      desktop_behavior:
      tablet_behavior:
      mobile_behavior:

  content_fixtures:
    - id:
      purpose:
      data:

  feedback:
    categories:
      - intent
      - visual
      - hierarchy
      - layout
      - typography
      - color
      - interaction
      - motion
      - responsive
      - accessibility
      - content
```

## Rules

- Every preview requirement must trace back to the Design Specification.
- A preview requirement should have a validation purpose.
- Do not implement an interaction merely because a component supports it.
- Do not add a viewport unless it represents a real target.
- Keep fixtures representative of actual content shape.

## Traceability

Each preview interaction should be traceable to one or more design decisions.

```yaml
trace:
  interaction: nav-open
  decisions:
    - decision.navigation-model
  principles:
    - progressive-disclosure
```

This makes critique and revision explainable.

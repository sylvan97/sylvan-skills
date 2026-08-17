# Design QA

## Purpose

Design QA turns preview verification evidence into actionable findings against the approved Design Specification.

It is not a generic code QA report and should not optimize for the number of checks performed.

## Report structure

```text
Design QA
├── Verification level
├── Journey results
├── Visual findings
├── Responsive findings
├── Accessibility findings
├── Design-intent findings
├── Environment limitations
└── Recommendation
```

## Finding schema

```yaml
id:
category: implementation | interaction | responsive | visual | accessibility | content | environment
severity: blocker | major | minor | observation
route:
viewport:
summary:
expected:
observed:
evidence:
related_decision:
recommended_action:
```

## Severity

### Blocker

Prevents the intended experience or a critical journey from working.

### Major

Significantly violates an approved design decision, hierarchy, interaction, or responsive requirement.

### Minor

A real issue that does not materially block the experience.

### Observation

Worth noting but not necessarily requiring a change.

## Intent-aware review

The critic must compare observed behavior to the Design Specification.

Example:

```text
Spec:
  navigation should feel quiet and unobtrusive

Observed:
  navigation occupies a large visual region

Finding:
  major — visual hierarchy conflict
```

Do not report subjective preference as a defect unless it conflicts with an approved intent or principle.

## Report example

```text
DESIGN QA

Verification level: 2 — automated

✓ Home → Works
✓ Works → Detail
✓ Mobile navigation
✓ Primary CTA

⚠ Major
Detail page / tablet
Header overlaps content at the 768px target.
Expected: content remains unobstructed.

⚠ Minor
Mobile navigation
Drawer can scroll independently of the page.

✓ Reduced motion

Intent review
✓ Editorial hierarchy
✓ Restrained color
⚠ Information density exceeds approved direction on detail page

Recommendation
Revise tablet header behavior and detail-page density, then regenerate v003.
```

## Approval rule

A QA report does not automatically approve or reject a design.

The user owns final subjective approval.

The agent must clearly distinguish:

```text
verified
failed
not verified
blocked
accepted tradeoff
```

Never represent an untested journey as passing.

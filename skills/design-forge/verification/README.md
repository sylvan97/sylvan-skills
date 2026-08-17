# Verification Layer

## Purpose

Verification validates whether an Experience Preview actually works as an experience, not merely whether its files were generated.

Browser automation is an enhancement, never a prerequisite.

## Capability model

Design Forge depends on a capability:

```text
interactive-browser-verification
```

It must not hard-code a dependency on one browser product.

Preferred provider when available:

```text
agent-browser
```

Possible future providers may expose the same capability.

## Capability discovery

At Preview verification time:

```text
Detect browser capability
        ↓
Available?
 ┌──────┴──────┐
 yes           no
 ↓              ↓
Request        Manual
permission     verification
 ↓              ↓
Verify         Checklist
```

Do not silently access a user's local environment, filesystem, browser, or running preview.

## Permission

If an interactive browser capability is detected, ask the user for permission before using it to inspect the preview.

The request should explain:

- what will be accessed
- why it is needed
- what will be tested
- that the preview is the target, not unrelated browsing

If permission is denied, continue with manual verification.

## Multi-page preview

An Experience Preview is a temporary website, not a single screen.

A preview may contain:

```text
/
/list
/list/item
/article/example
/settings
/...
```

The preview manifest is the source of truth for routes, states, and target viewports.

## Automated verification

When permission and capability are available, verify representative user journeys.

Test categories:

- route navigation
- primary actions
- menus
- disclosure
- forms where present
- hover / focus states where observable
- responsive transformations
- scroll behavior
- representative motion
- keyboard behavior
- reduced motion
- broken links / dead ends
- visual obstruction

Do not click every element mechanically. Prioritize journeys defined by the Design Specification.

## Evidence

Each automated test should produce concise evidence:

```yaml
id:
status: passed | failed | blocked
route:
action:
expected:
observed:
evidence:
severity:
```

Evidence may include screenshots, URLs, console/runtime observations, or interaction results when the available browser capability supports them.

## Manual fallback

When no browser capability is available, Design Forge must still provide a structured QA checklist based on the same manifest and Design Specification.

The user should be able to report:

```text
pass
fail + description
skip
```

Manual verification is a valid workflow state, not an error condition.

## Verification levels

```text
LEVEL 0 — Artifact only
Files generated; no interaction verification.

LEVEL 1 — Manual
User verifies the preview with the generated checklist.

LEVEL 2 — Automated
Browser capability executes interaction tests.

LEVEL 3 — Automated + visual evidence
Browser executes tests and captures representative visual evidence.
```

The final report must state which level was achieved.

## Failure handling

A verification failure should not automatically imply that the design direction is wrong.

Classify the failure:

```text
implementation bug
interaction-model problem
responsive problem
visual hierarchy problem
content problem
accessibility problem
environment problem
unknown
```

Then route it to the appropriate stage.

## Environment failure

If the browser capability cannot start, cannot reach the preview, or lacks required permissions:

1. record the environment failure
2. do not invent a successful result
3. fall back to manual verification
4. keep the design workflow moving

## Approval

Figma implementation can proceed after:

- automated verification passes at the required level, or
- the user completes the manual checklist and explicitly approves the experience.

The verification report should remain attached to the Preview Snapshot.

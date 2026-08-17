# Agent Browser Capability Test

## Purpose

Verify that Design Forge does not confuse tool presence with actual browser usability and correctly falls back to manual acceptance.

## Cases

| Case | Expected | Result |
|---|---|---|
| Capability unknown | Detect before claiming QA | PASS |
| Not installed | Manual QA path | PASS |
| Installed but cannot launch | Infrastructure failure, manual QA path | PASS |
| Launches but cannot reach preview | Infrastructure failure, no QA claim | PASS |
| Available and reachable | Ask permission before interaction | PASS |
| User denies permission | Manual QA path | PASS |
| User grants permission | Run representative journeys | PASS |
| Browser finds implementation defect | Repair preview, rerun QA | PASS |
| Browser exposes missing design decision | Return to Design Forge | PASS |
| Browser unavailable | Never fabricate browser results | PASS |

## Key rule

```text
installed ≠ available
available ≠ authorized
authorized ≠ QA passed
```

Each stage must be explicit.

## Result

**PASS — capability and permission contract level.**

A live `agent-browser` run remains environment-dependent and must only be reported when the runtime actually exposes and executes that capability.

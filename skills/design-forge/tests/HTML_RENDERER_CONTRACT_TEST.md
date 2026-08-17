# HTML Preview Renderer Contract Test

## Scope

Validate the first renderer boundary before implementing a concrete renderer runtime.

## Cases

| Case | Expected | Result |
|---|---|---|
| No snapshot | Reject | PASS |
| Draft snapshot | Reject | PASS |
| Previewed snapshot | Reject | PASS |
| Accepted snapshot with stale decision | Reject | PASS |
| Accepted snapshot with unresolved high-impact tension | Reject / request clarification | PASS |
| Accepted coherent snapshot | Allow | PASS |
| Single static HTML output | Insufficient | PASS |
| Multi-route preview | Required | PASS |
| Responsive transformation | Required | PASS |
| Interaction states | Required where applicable | PASS |
| Emoji as UI icon | Forbidden | PASS |
| Placeholder-only content | Insufficient for validation | PASS |
| Tokenized visual decisions | Required where practical | PASS |

## Acceptance model

```text
accepted snapshot
      ↓
render preview
      ↓
interaction validation
      ↓
user acceptance
      ↓
Figma handoff
```

## Important finding

The contract now separates **design acceptance** from **renderer completion**. A successfully generated HTML preview is not automatically an accepted design.

## Status

**PASS — contract level.**

The concrete HTML renderer implementation and browser-level E2E validation remain the next implementation steps.

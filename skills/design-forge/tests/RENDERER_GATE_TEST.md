# Design Forge v0.1 — Renderer Acceptance Gate Test

## Purpose

Verify the hard contract between Design State and downstream renderers: rendering may consume only a coherent accepted snapshot.

## Inputs

### Case A — Draft snapshot

```json
{"snapshot":{"id":"S-draft","status":"draft","decision_ids":["D01"]}}
```

Expected: **REJECT**. Renderer must not generate Figma or production UI from an unaccepted state.

### Case B — Previewed snapshot

```json
{"snapshot":{"id":"S-preview","status":"previewed","decision_ids":["D01"]}}
```

Expected: **REJECT**. Preview existence is not user acceptance.

### Case C — Accepted snapshot with stale decision

```json
{"snapshot":{"id":"S-stale","status":"accepted","decision_ids":["D01"]},"decisions":[{"id":"D01","status":"stale"}]}
```

Expected: **REJECT**. Acceptance cannot make a stale decision valid.

### Case D — Accepted snapshot with unresolved high-impact tension

```json
{"snapshot":{"id":"S-open","status":"accepted","decision_ids":["D01"]},"tensions":[{"id":"T01","status":"open"}]}
```

Expected: **REJECT or request clarification**. The current contract treats unresolved high-impact tensions as a renderer gate failure.

### Case E — Accepted coherent snapshot

```json
{"snapshot":{"id":"S-ok","status":"accepted","decision_ids":["D01","D02"]},"decisions":[{"id":"D01","status":"accepted"},{"id":"D02","status":"accepted"}],"tensions":[{"id":"T01","status":"resolved"}]}
```

Expected: **ALLOW**.

## Result

**PASS at contract level.**

The schema and lifecycle rules support the required gate states. This test is intentionally not described as a live renderer E2E test: no production renderer has yet been implemented to enforce the gate.

## Required implementation behavior

Every renderer adapter should begin with an equivalent validation step:

```text
input Design State
      ↓
validate schema
      ↓
validate snapshot.status == accepted
      ↓
validate referenced decisions are active/accepted
      ↓
validate required constraints/routes exist
      ↓
validate high-impact tensions are resolved
      ↓
ALLOW renderer
```

If validation fails, the renderer must return a structured reason instead of silently rendering the latest conversational state.

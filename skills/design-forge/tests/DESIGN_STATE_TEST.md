# Design Forge v0.1 — Design State Test

## Purpose

Verify that design decisions, tensions, routes, tokens, and acceptance state can be represented as a coherent renderer handoff.

## Test

Input scenario:

> User wants a cinematic homepage, fast article discovery, PC/Pad/H5 support, and later changes their mind about how expressive the homepage should be.

Expected lifecycle:

```text
D01 proposed → accepted
D02 proposed → accepted
T01 open → resolved
S00 draft → previewed
user changes requirement
D01 stale/superseded where affected
D03 proposed → accepted
S01 superseded
S02 draft → previewed → accepted
```

### Gate 1 — Accepted snapshot

**PASS**: schema requires snapshot status and decision references.

### Gate 2 — Stale decisions

**PASS**: decision schema explicitly supports `stale` and `superseded`.

### Gate 3 — Renderer handoff

**PASS**: a renderer can consume a specific snapshot rather than the entire conversation.

### Gate 4 — Surface-specific priorities

**PASS**: decisions include scope, allowing homepage and secondary routes to resolve the same tension differently.

### Gate 5 — Token readiness

**PASS**: snapshot state includes a token object for renderer consumption. Token semantics remain intentionally open until the Design Specification stage.

## Critical gate

A Figma or frontend renderer must reject or request clarification when:

- no snapshot exists;
- snapshot is not `accepted`;
- snapshot references stale/superseded decisions;
- unresolved high-impact tensions remain;
- required route or viewport constraints are missing.

## Result

**PASS at schema/design-contract level.**

This does not yet prove runtime enforcement. The next implementation test should verify that a renderer actually refuses a non-accepted snapshot.

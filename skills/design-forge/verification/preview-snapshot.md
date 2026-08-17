# Preview Snapshot

## Purpose

A Preview Snapshot preserves the exact Experience Preview state that was reviewed, so feedback and verification remain traceable across revisions.

## Snapshot structure

```text
preview/
├── v001/
│   ├── manifest.json
│   ├── design-spec.yaml
│   ├── pages/
│   ├── assets/
│   └── verification/
│
├── v002/
└── ...
```

The exact physical layout may vary by runtime, but the snapshot must preserve equivalent information.

## Manifest

The manifest should identify:

- preview version
- source Design Specification version
- entry route
- routes
- states
- target viewports
- required interaction tests
- verification level
- approval status

Example:

```json
{
  "version": "v002",
  "spec": "design-spec-v002",
  "entry": "/",
  "routes": ["/", "/works", "/works/example"],
  "viewports": ["desktop", "tablet", "mobile"],
  "verification": {
    "level": 2,
    "status": "passed"
  },
  "approval": "pending"
}
```

## Immutability

Once a snapshot has been presented for approval, treat it as immutable.

Changes create a new snapshot rather than silently modifying the reviewed artifact.

## Traceability

Every snapshot should be traceable to:

```text
Intent Model
→ Design Specification
→ Preview Snapshot
→ User Feedback
→ Verification Evidence
→ Approval / Revision
```

## Regression

When a new snapshot is generated, rerun tests affected by changed decisions.

For system-level changes, rerun the full representative interaction plan.

Example:

```text
v001
  ↓
feedback: mobile navigation feels crowded
  ↓
v002
  ↓
rerun:
- mobile navigation
- page routing from mobile menu
- focus behavior
```

## Figma handoff

Only the approved Preview Snapshot should become the baseline for Figma implementation.

The snapshot reference should be retained in the design project metadata where practical.

# Design Forge v0.1 — Runtime Simulation 02

## Purpose

Test whether Design Forge can preserve user intent while the user changes direction during an active design process.

Scenario: the user first chooses an immersive/cinematic direction, then asks for faster content discovery, then restores a requirement for a strong first impression.

This is a repository-level conversation simulation, not a live Skill Host or Figma E2E execution.

## Scenario

### Initial brief

> “帮我设计一个个人知识库，PC + Pad + H5，多页面。我不懂设计，但希望第一眼很有电影感。”

### Turn 1 — Direction discovery

Expected agent behavior:

- Do not ask the user for professional design terminology.
- Explain 2–3 perceptually distinct directions with real-world references.
- Make the cinematic direction concrete through composition, type, imagery, pacing, and density.
- Record the selected direction as an explicit decision.

Expected decision record:

```text
D01 = immersive / cinematic art direction
Priority = high
Scope = homepage + transitions + editorial surfaces
```

Result: PASS.

### Turn 2 — User changes priority

User:

> “等等，我觉得还是太艺术了。我其实更想让人快速找到文章。”

Expected behavior:

- Treat this as a change to the information-discovery priority, not a total reset.
- Mark affected cinematic decisions as stale or conditional rather than silently deleting them.
- Trigger hierarchy, content hierarchy, information density, progressive disclosure, and design tensions.
- Ask only the consequential question needed to determine the new priority.

Expected reasoning:

```text
D01 cinematic
    ↓
new requirement: fast retrieval
    ↓
immersion ↔ efficiency
    ↓
D01 partially stale
    ↓
preserve cinematic treatment where it does not harm retrieval
```

Result: PASS.

### Turn 3 — User restores a strong first impression

User:

> “但我还是希望首页第一眼很震撼。”

Expected behavior:

- Do not revert to the original design wholesale.
- Reconcile the requirements by assigning different priorities to different surfaces.
- Use homepage composition/hero treatment for impact and information architecture/navigation for retrieval.
- Record the resolved tradeoff.

Expected decision:

```text
Homepage:
  high expressive impact
  fast recognition of knowledge categories

Secondary/detail pages:
  retrieval and readability dominate

Global rule:
  cinematic expression must not obscure navigation or content findability
```

Result: PASS.

### Turn 4 — Preview revision

The agent should generate a new preview specification rather than mutate the old direction ambiguously.

Expected snapshot model:

```text
S0 = initial cinematic direction
S1 = cinematic + retrieval priority
S2 = cinematic impact on homepage + retrieval-first secondary pages
```

The accepted snapshot must be explicit before downstream Figma rendering.

Result: PASS.

## Findings

### PASS — User changes are treated as decision updates

The reasoning model can preserve valid previous decisions while invalidating only the affected constraints.

### PASS — Design tensions are resolved contextually

The user does not have to choose between “cinematic” and “usable” globally. The system can assign different priorities by surface.

### PASS — Preview should be versioned by design state

A new preview should correspond to a coherent decision snapshot, preventing stale visual assumptions from leaking into Figma output.

## Critical implementation gap

The current repository has the conceptual policy for stale decisions and preview acceptance, but it does not yet define a formal machine-readable `decision-record` / `snapshot` schema or a required artifact format for renderer handoff.

Recommended next step:

```text
decisions/
  D01...
  D02...

snapshots/
  S0...
  S1...

accepted-snapshot.json
```

The implementation does not need to use these exact filenames, but the concept should become explicit before the first real Figma rendering E2E.

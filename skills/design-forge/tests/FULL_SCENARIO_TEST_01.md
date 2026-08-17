# Design Forge v0.1 — Full Scenario Test 01

## Goal

Validate the complete journey from a non-designer's natural-language request through design decisions, preview, QA, revision, acceptance, and downstream renderer handoff.

This is a contract-level simulation. It must not claim live Figma or browser execution unless those capabilities are actually invoked.

## User scenario

> “我想做一个个人知识库，PC、Pad、H5 都要有。希望第一眼很有电影感，但我不懂设计，你帮我决定。”

## Stage 0 — Output mode

Agent asks whether the user wants:

- Figma design
- local frontend implementation

User chooses **Figma**.

Expected: enter Figma capability gate before detailed rendering work.

## Stage 1 — Capability gate

Expected:

```text
Figma selected
  ↓
check Figma MCP
  ↓
healthy + authorized → continue
```

If unavailable, explain setup and verification. Do not silently switch modes.

Result: PASS at policy level.

## Stage 2 — Intent discovery

The agent should translate “电影感” into perceptual dimensions rather than asking for professional terminology.

Candidate directions should include real-world references where appropriate so the user can compare concrete outcomes.

Expected direction candidates:

1. editorial / cinematic
2. quiet / premium
3. expressive / experimental

The user selects **editorial / cinematic**.

Result: PASS at conversation-contract level.

## Stage 3 — Design decisions

Expected initial decisions:

```text
D01 = strong cinematic first impression
D02 = content remains easy to discover
D03 = PC / Pad / H5 are first-class layouts
```

The agent should surface the key tension:

```text
cinematic immersion ↔ information retrieval
```

Resolution:

- homepage emphasizes impact;
- index emphasizes discovery;
- detail emphasizes reading;
- global navigation remains clear.

Result: PASS.

## Stage 4 — Design state and snapshot

Create a coherent state containing:

- decisions
- constraints
- tension resolution
- routes
- token placeholders / definitions
- snapshot

Before preview generation:

```text
snapshot.status = accepted
```

Result: PASS.

## Stage 5 — HTML preview

Generate a complete multi-route interactive preview:

```text
/
/notes
/notes/:slug
```

Expected interactions:

- navigation
- list → detail
- return/home
- mobile navigation
- representative filtering or disclosure

Responsive targets:

- PC
- Pad
- H5

Result: PASS at renderer-contract level.

## Stage 6 — Preview QA

Capability decision:

```text
agent-browser available?
```

### If available

Ask explicit permission before automated interaction.

Then execute representative journeys and record structured evidence.

### If unavailable

Do not claim automated QA. Present manual checklist and preview to user.

Result: PASS at policy level.

## Stage 7 — User revision

User says:

> “整体不错，但首页还是太艺术了。我希望文章更容易找到，不过第一眼还是要有冲击力。”

Expected state transition:

```text
D01 cinematic
D02 retrieval
        ↓
D01 affected only on information-density surfaces
        ↓
D04 homepage impact + clear content entry points
```

Do not reset the entire design.

Create a new snapshot:

```text
S01 → superseded
S02 → previewed
```

Result: PASS.

## Stage 8 — Second preview

Preview should reflect the new snapshot:

- homepage remains visually strong;
- navigation and content entry points become clearer;
- notes index becomes retrieval-first;
- detail page remains reading-first.

Run Preview QA again when possible.

Result: PASS at contract level.

## Stage 9 — User acceptance

User says:

> “可以，就这个方向。”

Expected:

```text
S02.previewed → S02.accepted
```

Record acceptance timestamp/notes.

Result: PASS.

## Stage 10 — Figma handoff

Only now may the Figma renderer consume S02.

Renderer input must reference the accepted snapshot and not conversational history.

Expected:

```text
Accepted Snapshot S02
        ↓
Figma Renderer
```

Result: PASS at renderer-gate level.

## Hard invariants verified

- Natural language is sufficient to begin; professional design vocabulary is not required.
- User intent is preserved across revisions.
- Design tensions are explicit rather than hidden.
- Preview is multi-route and interactive.
- Preview QA is separate from user acceptance.
- Browser automation is optional and permission-gated.
- Figma MCP is a capability gate when Figma mode is selected.
- A non-accepted snapshot cannot reach downstream rendering.
- Renderers consume Design State / Snapshot rather than raw conversation.

## Result

**PASS — full workflow contract simulation.**

## Remaining evidence gaps

This simulation does not prove:

1. live agent-browser execution;
2. live local-file browser navigation;
3. live Figma rendering from S02;
4. visual quality judged by a human designer;
5. implementation-level enforcement of every gate.

Those require runtime integration tests and human review.

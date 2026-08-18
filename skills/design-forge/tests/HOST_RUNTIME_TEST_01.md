# Design Forge v0.1 — Host Runtime Test 01

Date: 2026-08-18
Status: CONTRACT PASS / HOST E2E BLOCKED

## Objective

Verify that Design Forge can be loaded by a generic Skill host without depending on undocumented tool names, while preserving capability truth and Design State boundaries.

## Test scenario

User says:

> 我想做一个个人知识库网站，PC / Pad / H5。第一眼要有电影感，但我不懂设计。先给我几个方向和真实网站参考，我想先看可交互 HTML，满意后再决定要不要 Figma。

## Checks

| Check | Result |
|---|---|
| `SKILL.md` self-contained frontmatter | PASS |
| Host runtime contract exists | PASS |
| Capability status model defined | PASS |
| Tool success evidence requirement | PASS |
| Design State persistence requirements | PASS |
| Accepted Snapshot boundary | PASS |
| Reference Explorer integration | PASS |
| Figma capability gate | PASS |
| Agent-browser optionality | PASS |
| Renderer receives accepted snapshot only | PASS |
| Generic host can actually invoke the Skill in this environment | BLOCKED |

## Blocking reason

The current execution environment exposes GitHub/Figma tools, but does not expose a generic `invoke_skill` / installed-skill runtime that can load this repository branch as an executable Skill and run the conversation exactly as an end user would.

Therefore this test must **not** claim full runtime execution.

## Required host E2E

A future host test must:

1. Install/load `skills/design-forge/SKILL.md`.
2. Start a fresh conversation with the scenario above.
3. Confirm the host loads referenced resources lazily.
4. Verify output-mode discovery.
5. Verify actual web reference search/open.
6. Persist Design State across at least one user revision.
7. Generate a fresh multi-route HTML preview.
8. Run Preview QA.
9. Record explicit user acceptance.
10. Verify that only the accepted snapshot reaches the renderer.

## Verdict

The repository is **host-ready by contract**, but not yet proven by a real generic Skill-host E2E run.

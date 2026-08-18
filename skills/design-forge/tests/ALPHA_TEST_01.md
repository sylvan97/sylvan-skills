# Design Forge v0.1 — Alpha Test 01

Date: 2026-08-18
Status: PARTIAL / BLOCKED FOR TRUE RUNTIME E2E

## Scenario

> 我想做一个个人知识库网站，PC / Pad / H5。第一眼要有电影感，但我不懂设计。希望你通过提问帮我确定设计方向，给我一些真实网站参考，先做完整可交互 HTML，验收后再决定是否落 Figma。

## What was actually tested

This run followed the current `SKILL.md` orchestration against the repository artifacts and inspected whether each gate can be executed deterministically. It is not claimed as a native Skill-host execution because the current tool environment does not expose a generic installed-skill runtime/invocation API.

## Results

| Gate | Result | Notes |
|---|---|---|
| Output mode discovery | PASS | Figma vs frontend is explicitly requested and preserved. |
| Capability gate | PASS | Figma path correctly requires MCP readiness; frontend path is independent. |
| Intent extraction | PASS | Purpose, platform, desired feeling, uncertainty are represented. |
| Direction discovery | PASS | Perceptual dimensions and 2–4 contrasting directions are required. |
| Real references | PARTIAL | The Skill requires visitable references but does not define a concrete web-search/reference-selection procedure. |
| Design reasoning | PASS | Decision lifecycle, tensions, and scope are explicit. |
| Design State | PASS | Accepted Snapshot is a hard downstream gate. |
| HTML preview | PASS (contract) | Multi-route and representative interactions are required. |
| Preview QA | PASS (contract) | Route, interaction, responsive, accessibility, content, motion QA are defined. |
| User acceptance | PASS | QA pass is correctly separated from user acceptance. |
| Figma handoff | PASS (contract) | Renderer must consume Accepted Snapshot only. |
| True browser E2E | BLOCKED | No `agent-browser` capability is available in the current execution environment. |
| True Figma E2E | BLOCKED | Figma MCP can be inspected in this environment, but this test did not create a user-approved design or invoke a real renderer from an accepted snapshot. |

## Important findings

### 1. The orchestration is coherent

The current pipeline is internally consistent:

```text
Intent
→ Output Mode
→ Capability Gate
→ Discovery
→ Direction + References
→ Decisions
→ Design State
→ Accepted Snapshot
→ HTML Preview
→ Preview QA
→ User Review
→ Renderer
```

### 2. Reference exploration needs an executable procedure

`SKILL.md` currently says to provide real, visitable reference websites, but it does not define:

- when web search is mandatory;
- how many references to return;
- how to select authoritative/current examples;
- how to annotate what the user should inspect;
- how to avoid low-quality or copied references.

This should be fixed before v0.1 release because reference exploration is one of Design Forge's differentiating capabilities.

### 3. The Skill needs an explicit runtime/tool adapter boundary

The repository defines capability contracts, but the main `SKILL.md` does not specify how a Skill host should discover or invoke the actual web, Figma, browser, or local-project tools. This is acceptable as a host-agnostic specification, but a real installation guide/runtime adapter is needed for end-to-end execution.

### 4. The HTML renderer is still contract/prototype level

The repository contains a prototype and renderer contract, but this alpha test does not treat it as a production renderer. A true alpha must generate a fresh preview from the current Design State rather than rely on the existing prototype fixture.

## Alpha acceptance criteria

The scenario should be considered fully passed only when a Skill host can:

1. start from the user prompt;
2. ask the actual discovery questions;
3. search and present real references;
4. persist Design State;
5. generate a fresh multi-route HTML preview from that state;
6. run Preview QA;
7. collect user revision/acceptance;
8. freeze an Accepted Snapshot;
9. hand that exact snapshot to a real renderer.

Until those steps are executed by an actual Skill host, this test remains `PARTIAL / BLOCKED FOR TRUE RUNTIME E2E`.

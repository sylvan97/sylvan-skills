---
name: design-forge
description: Transform ambiguous intent into a distinctive digital experience through conversational creative direction, interactive HTML validation, and optional Figma or frontend rendering. Use when a user wants design help but may not know professional design terminology.
---

# Design Forge

Design Forge is a **creative direction workflow**, not a UI prompt. It turns vague intent into a distinctive experience concept, validates that concept in an interactive preview, and only then renders it to Figma or an existing frontend project.

## Load map

Load only what the current stage needs:

- `creative/creative-core.md` — creative philosophy and concept ladder
- `creative/concept-generation.md` — 3–5 structurally different concepts
- `creative/anti-generic-gate.md` — reject generic/AI-slop concepts
- `creative/acg-workbench.md` — ACG, anime, manga, game, mecha, cyberdeck, otaku desktop, creator workstation
- `capabilities/host-runtime.md` — host/tool execution contract
- `capabilities/runtime-adapter.md` — renderer/tool boundary
- `capabilities/reference-explorer.md` — real-world and cross-disciplinary references
- `capabilities/agent-browser.md` — optional browser QA
- `schemas/design-state.schema.json` — canonical Design State contract
- `templates/design-state.example.json` — example state
- `tests/PREVIEW_QA_CONTRACT.md` — preview QA contract
- `references/design-review-rubric.md` — **single review entry point; MUST load for formal design review**

### Reference seeds

Load only relevant seeds from `references/`:

- `references/editorial-layouts.md`
- `references/cinematic-density.md`
- `references/acg-workbench.md`
- `references/diegetic-ui.md`
- `references/spatial-navigation.md`

These are principle seeds, not templates. Current web inspection remains preferred when browsing is available.

## Non-negotiable behavior

1. Understand intent before styling.
2. Determine output mode before renderer-specific work.
3. In open-ended work, explore **3–5 genuinely different concepts** before converging.
4. A concept must change structure/behavior, not merely palette, typography, radius, or effects.
5. At least one concept should challenge a default web assumption when appropriate.
6. Translate design vocabulary into examples and perceptual choices; do not require the user to know design terminology.
7. Use real references and tell the user exactly what to inspect.
8. Never invent URLs, tool execution, browser results, MCP status, or verification.
9. High-impact subjective decisions belong to the user.
10. The renderer consumes an **accepted Design Snapshot**, never raw conversation history.
11. QA and user acceptance are separate gates.
12. Do not silently mutate an accepted snapshot.
13. ACG influence must change the world/interaction model, not just add anime decoration.

## 0. Output mode

Ask only if the user has not already specified it:

> 这次你希望最终得到 **Figma 设计稿**，还是直接在当前前端项目里落地？

### Figma

Required before promising Figma output:

```text
available → healthy → authorized → executable
```

Use the installed Figma skills. Load `figma-design-to-code` for design-to-code work, `figma-generate-design` for generating pages/views, and `figma-use` before every `use_figma` call. Load motion guidance when implementing motion.

If Figma MCP is unavailable/unauthorized, explain the setup requirement. Do not silently switch modes. The user may continue to accepted HTML Preview; once accepted, the workflow ends until Figma MCP is ready.

### Frontend

Inspect the current directory:

- empty → create the default self-contained HTML project
- existing → detect framework, router, routes, tokens, components, icons, fonts, assets, and entry points; modify the correct existing surface

Do not create a parallel project or overwrite unrelated code.

## 1. Discovery

Extract only high-impact information:

- purpose / audience
- content and primary tasks
- platforms
- constraints
- desired and avoided feelings
- references
- uncertainties
- assumptions worth challenging

Ask a small number of high-value questions. Prefer choices/examples over jargon.

## 2. Creative exploration

Before visual systemization, load the creative files and generate 3–5 concepts.

Each concept must contain:

```text
Name
Creative thesis
Mental model
What the user experiences
Signature interaction
Information/composition model
How content changes the experience
Motion idea
Trade-off
Reference lineage
HTML proof requirement
```

Explore beyond UI galleries when useful: film, architecture, exhibition, editorial, photography, games, digital art, interactive fiction, ACG, etc.

For ACG/workbench intent, load `creative/acg-workbench.md` and consider its territories, but do not mechanically output every territory.

Run `creative/anti-generic-gate.md` before presenting concepts. If candidates are cosmetic variations or obvious generic answers, regenerate.

### Concept collision

After user reaction, deliberately combine compatible strengths from different concepts. Keep one coherent thesis; avoid feature soup.

Let users choose by feeling:

- 哪个更像你？
- 哪个让你更想探索？
- 哪个太激进/太安静/太复杂？
- 要不要把 A 的交互和 B 的视觉世界结合？

## 3. References

Load `capabilities/reference-explorer.md` when references can materially help.

Use 2–4 distinct, inspectable references. Explain **what to look at and why**. Search current websites when browsing is available, but also use cross-disciplinary references when they expand the creative space.

Never copy references. Extract principles.

## 4. Experience model

After concept approval, define in this order:

```text
Creative Thesis
→ Experience Model
→ Interaction Model
→ Visual World
→ Design System
```

The experience model must explain what the user thinks they entered, what they do first, how content is revealed, what is memorable, and where efficiency outranks atmosphere.

Motion must communicate hierarchy, state, relationship, or continuity. Decorative motion alone is not a quality signal.

## 5. Design State

Maintain a canonical Design State containing:

- selected concept / rejected alternatives
- creative thesis
- experience model
- interaction model
- decisions
- constraints / tensions
- routes
- tokens
- viewport targets
- snapshot

Use `schemas/design-state.schema.json`.

A renderer may run only when:

```text
snapshot.status == accepted
AND referenced decisions are active/accepted
AND required routes/constraints exist
AND blocking tensions are resolved
```

Material changes create a new snapshot.

## 6. Tokens and specification

Only after the experience model is accepted, define:

- semantic color roles
- typography hierarchy
- spacing rhythm
- layout/grid behavior
- surfaces
- interaction states
- motion principles
- responsive transformations
- accessibility requirements

Do not manufacture token complexity for one-off decisions.

## 7. Interactive HTML Preview

### Figma mode

Preview is mandatory before Figma implementation.

The preview must be genuinely navigable when multiple routes exist, e.g.:

```text
/
/notes
/notes/:slug
```

Implement representative interactions, realistic content, responsive transformations, motion, and reduced-motion behavior. Do not call a screenshot or fake tabbed page an interactive preview. Do not use emoji as UI icons.

### Frontend mode

The existing project itself is the implementation surface. User validation is manual by default; do not require agent-browser.

## 8. Preview QA

Load `tests/PREVIEW_QA_CONTRACT.md`.

Check route, interaction, responsive, accessibility, content, and motion behavior.

If agent-browser is actually available, load `capabilities/agent-browser.md`, ask permission before using it, then verify representative journeys against the real preview.

Distinguish:

```text
installed ≠ available
available ≠ authorized
authorized ≠ QA passed
```

If unavailable/denied, provide a manual checklist and do not fabricate results.

Classify findings:

```text
implementation defect → repair
missing design decision → return to design phase
preference disagreement → ask user
browser/environment failure → infrastructure
```

## 9. User acceptance

QA PASS is not acceptance.

Show the preview and ask perceptual questions. Map feedback to affected decisions and create a new snapshot for material changes.

Only explicit user approval freezes the snapshot:

```text
previewed → accepted
```

## 10. Renderer

### Figma

Consume the accepted snapshot using the installed Figma workflows. Do not infer design intent again from chat history.

If HTML is accepted but Figma MCP is still unavailable, stop at accepted HTML and tell the user why.

### Frontend

Select the existing project's appropriate renderer:

```text
React / Next.js → React Renderer
Vue / Nuxt      → Vue Renderer
Svelte           → Svelte Renderer
other            → project-appropriate adapter
```

Reuse existing router, components, tokens, icons, fonts, utilities, and conventions. Renderers translate approved decisions; they do not redefine them.

## 11. Completion gates

### Figma

```text
OUTPUT_SELECTED
→ FIGMA_CAPABILITY_READY
→ DISCOVERY_READY
→ CREATIVE_CONCEPTS_READY
→ DIRECTION_APPROVED
→ DESIGN_STATE_READY
→ PREVIEW_READY
→ PREVIEW_QA
→ EXPERIENCE_APPROVED
→ FIGMA_READY
→ FIGMA_REVIEWED
→ DONE
```

### Frontend

```text
OUTPUT_SELECTED
→ PROJECT_READY
→ DISCOVERY_READY
→ CREATIVE_CONCEPTS_READY
→ DIRECTION_APPROVED
→ DESIGN_STATE_READY
→ IMPLEMENTATION_READY
→ USER_REVIEW
→ DONE
```

## 12. Formal review

When a reviewer asks whether Design Forge is complete, coherent, or production-ready, **MUST load `references/design-review-rubric.md`** before judging it.

The rubric is the single entry point for:

- capability boundaries
- intent fidelity
- creative distinctiveness
- reference quality
- experience / interaction / motion
- visual language
- token/system quality
- workflow integrity
- preview quality
- acceptance/revision integrity
- renderer integrity
- context/token efficiency
- anti-patterns

Return one of:

```text
PASS
PASS WITH NOTES
REVISE
BLOCKED
```

## Anti-patterns

Never:

- jump directly from vague intent to UI/Figma
- ask a giant design questionnaire
- present cosmetic variants as separate concepts
- copy references
- use generic AI aesthetics as a substitute for a concept
- add glow/3D/gradients/HUD effects without purpose
- call static output an interactive preview
- fabricate tool/browser/MCP verification
- overwrite an existing project without inspection
- mutate accepted snapshots silently
- let a renderer redefine the concept
- block frontend mode because Figma MCP is unavailable
- load the entire knowledge/reference library by default

## Success criterion

The user should be able to say:

> 我不是从几个模板里选了一个，而是看到了几个真正不同的体验可能性；我知道为什么选它，真正体验并验证过它，最终交付物准确体现了这个方向。

---
name: design-forge
description: Transform ambiguous intent into a distinctive digital experience through conversational discovery, radical concept exploration, real-world and cross-disciplinary references, explicit Design State, interactive preview, QA, user acceptance, and optional Figma or frontend rendering. Use when a user wants design help but may not know professional design terminology.
---

# Design Forge

Design Forge is a conversation-first **creative direction and design workflow**. It does not begin by styling a UI. It first turns ordinary language into a set of distinct experience concepts, helps the user choose or combine them, validates the resulting experience through an interactive preview, and only then converges on implementation.

## Creative-first principle

> **Do not polish the first obvious answer. Explore the space first.**

Aesthetic adjectives such as "minimal", "cinematic", "premium", "modern", and "editorial" are not design concepts. Translate them into mental models, information behavior, interaction, composition, content behavior, time, and motion.

Load `creative/creative-core.md`, `creative/concept-generation.md`, and `creative/anti-generic-gate.md` for the creative phase.

## Host runtime

Load `capabilities/host-runtime.md` as the host integration contract. The host must preserve Design State across turns and expose actual capability status. Do not assume that repository documentation, a tool name, or an installed package means an operation can be executed.

## Core pipeline

```text
Intent
  ↓
Output Mode
  ↓
Capability Gate
  ↓
Design Discovery
  ↓
Creative Exploration
  ↓
3–5 Distinct Concepts
  ↓
Concept Selection / Collision
  ↓
Creative Thesis
  ↓
Experience Model
  ↓
Interaction + Visual World
  ↓
Design Decisions
  ↓
Design State
  ↓
Accepted Snapshot
  ↓
Interactive HTML Preview
  ↓
Preview QA
  ↓
User Review
  ├── revise → affected decisions → new snapshot → preview again
  └── accept
       ↓
Accepted Snapshot
       ↓
Figma / React / Vue / other Renderer
```

The renderer consumes the accepted snapshot, not raw conversation history.

## Non-negotiable rules

1. Understand intent before styling.
2. Explore multiple genuinely different concepts before converging on an open-ended design problem.
3. Do not require professional design vocabulary.
4. Use perceptual language and concrete references to help the user choose.
5. Search beyond UI galleries when non-UI references can expand the creative space.
6. Reject concepts that are merely palette/type/layout variations.
7. Record high-impact decisions explicitly.
8. Surface important design tensions instead of silently resolving them.
9. Preview before Figma when Figma mode is selected.
10. Preview QA is separate from user acceptance.
11. Capabilities are execution gates, not design decisions.
12. Never claim a tool, browser, MCP, or renderer was executed unless it actually was.
13. Never let a renderer silently redefine an accepted design decision.

## 0. Choose the output mode

Before renderer-specific work, determine the desired final artifact:

> 这次你希望最终得到什么？
> **A. Figma 设计稿** — 先确定设计方向，再生成可交互多页面 Preview，验收后落到 Figma。
> **B. 前端页面** — 在当前前端项目中实现真实 UI；如果当前目录为空，则创建默认可预览项目。

If the user already chose, do not ask again.

Create an Output Contract:

```yaml
output_mode: figma | frontend
figma:
  mcp_required: true
  browser_verification: optional
frontend:
  browser_verification: manual_by_default
  existing_project: auto_detect
```

If the user changes mode, re-run the capability gate while preserving only decisions that remain valid.

## 1. Capability gate

### Figma mode

Before promising Figma output, verify that the Figma MCP is available, healthy, authorized, and exposes the required write operations.

Follow the installed Figma skills. Load `figma-design-to-code` for design-to-code work, `figma-generate-design` for generating pages/views into Figma, and `figma-use` before every `use_figma` call. Load motion guidance when implementing motion.

If Figma MCP is unavailable or unauthorized, explain the setup/verification requirement. Do not silently switch to frontend mode. If the user accepts HTML Preview but Figma MCP is still unavailable, the design workflow ends at the accepted HTML stage.

### Frontend mode

Inspect the current project.

- empty directory → create the default self-contained HTML preview/implementation project
- existing project → inspect framework, build tool, router, routes, entry points, tokens, reusable components, icons, fonts, and assets; modify the correct existing surface

Do not create a parallel project or overwrite unrelated code.

### Runtime adapter

Use `capabilities/runtime-adapter.md` and `capabilities/host-runtime.md` as the host integration boundary. A capability being named, installed, or discoverable is not proof that an operation succeeded. Preserve actual status and evidence.

## 2. Discovery

Extract:

- purpose
- audience
- content hierarchy
- primary tasks
- platforms/viewports
- technical constraints
- desired feeling
- avoided feeling
- references
- uncertainty
- assumptions that should be challenged

Use the smallest relevant knowledge set. Do not load the whole knowledge library.

Ask only high-impact questions. Prefer choices and examples over design jargon.

## 3. Creative exploration — before design direction

For an open-ended design problem, do **not** jump directly from the user's adjectives to a style direction.

Generate **3–5 genuinely different concepts** before systemization. Use fewer only when the problem is tightly constrained and explain why.

Each candidate should differ in at least three structural dimensions such as:

- mental model
- information architecture
- navigation model
- primary interaction
- composition/spatial logic
- temporal/motion behavior
- content presentation
- visual language

At least one candidate should challenge a default web assumption when appropriate:

- What if the homepage is not a homepage?
- What if navigation is not persistent?
- What if search is not a search box?
- What if an article is not a conventional page?
- What if the content itself becomes navigation?
- What if motion explains structure rather than decorates it?

Do not present concepts named only after styles such as `Minimal`, `Cinematic`, or `Brutalist`. Name the experience and explain the behavior.

Every concept should include:

```text
Name
Creative thesis
Mental model
What the user experiences
Signature interaction
Spatial/compositional logic
How the user's content changes the experience
Motion idea
Trade-off
Reference lineage
What the HTML prototype must prove
```

Use `creative/anti-generic-gate.md` before presenting concepts. If concepts remain generic, regenerate instead of polishing them.

### Concept selection and collision

Let the user react in ordinary language:

- “哪个更像你？”
- “哪个让你更想点进去？”
- “哪个太激进/太安静/太复杂？”
- “要不要把 A 的交互和 B 的视觉世界结合？”

When combining concepts, perform **concept collision** deliberately. Preserve a coherent thesis; do not create feature soup.

## 4. Reference exploration

Once creative territories are identified, use `capabilities/reference-explorer.md`.

Do not search only for websites. Depending on the problem, explore:

- film/title sequences
- architecture and exhibitions
- editorial/book design
- photography
- information visualization
- interactive installations
- digital art
- fashion/editorial systems
- games/spatial interfaces
- experimental web
- product interfaces

Extract principles rather than copying appearance.

If web search/open is available, search before presenting references. Prefer 2–4 current, inspectable, distinct references. Tell the user exactly what to inspect on each site and why it is relevant. Link the actual site.

Do not invent URLs or claim that a site currently has an interaction you did not inspect. If browsing is unavailable, state that limitation and do not fabricate verification.

When references materially influence a high-impact subjective direction, ask the user to choose or approve the direction before systemization.

## 5. Creative thesis and experience model

Before tokens or components, define:

### Creative Thesis

```text
This experience is not primarily a [generic category].
It is a [distinct mental model] where [core behavior]
helps the user [desired outcome].
```

### Experience Model

Define:

- what the user believes they entered
- what they do first
- what the interface reveals progressively
- what makes the experience memorable
- where efficiency matters more than atmosphere

### Interaction Model

Define the signature behaviors and their purpose. Motion must communicate hierarchy, state, relationship, or spatial continuity rather than exist as decoration.

### Visual World

Only now define composition, typography, color, imagery, density, surfaces, and other visual language.

Consequential subjective choices require user approval.

## 6. Design reasoning

Use the repository reasoning resources to decide whether to ask, propose, decide, enforce, or defer.

Record high-impact decisions without exposing chain-of-thought:

```yaml
id:
statement:
status: proposed | accepted | stale | superseded | rejected
scope:
source: user | agent | shared
affected_surfaces:
rationale:
tradeoff:
evidence:
```

Surface important tensions, for example:

```text
cinematic immersion ↔ information retrieval
minimalism ↔ discoverability
expressiveness ↔ long-term readability
motion ↔ calm
novelty ↔ learnability
```

Resolve tensions per surface where appropriate. Do not force the homepage and detail page to share identical priorities.

## 7. Design State and Snapshot gate

Maintain a canonical Design State containing:

- creative concepts / selected concept
- creative thesis
- experience model
- interaction model
- decisions
- constraints
- tensions
- routes
- tokens
- viewport targets
- snapshot

Use `schemas/design-state.schema.json` as the contract and `templates/design-state.example.json` as an example.

A downstream renderer may consume only a coherent accepted snapshot:

```text
snapshot.status == accepted
AND referenced decisions are active/accepted
AND required constraints/routes exist
AND high-impact tensions are resolved
```

If this gate fails, do not render. Return to design reasoning or ask for clarification.

When a material design change occurs, create a new snapshot. Do not mutate an accepted snapshot in place.

## 8. Design specification and tokens

Translate the accepted experience into an implementation-ready specification:

- semantic color roles
- typography roles and hierarchy
- spacing rhythm
- grid/layout behavior
- radius/surface treatment
- interaction states
- motion duration/easing principles
- responsive transformations
- accessibility requirements

Define tokens where they express reusable decisions. Do not create token complexity for its own sake.

## 9. Interactive HTML Preview

In Figma mode, generate the interactive HTML experience before Figma implementation.

The preview must be a real, navigable multi-route experience when multiple routes are required, not a screenshot or fake tabbed single page.

Example:

```text
/
/notes
/notes/:slug
```

Implement the representative interactions needed to validate important design assumptions:

- primary navigation
- list → detail
- back/home
- menus/drawers
- filters/tabs/disclosure
- hover/focus/active/disabled states
- consequential feedback
- responsive transformations
- motion and reduced-motion behavior

Use realistic content. Do not use emoji as interface icons. Prefer project SVG assets or suitable inline SVG.

The preview is a design acceptance layer, not automatically a production implementation.

## 10. Preview QA

Run QA before the user acceptance checkpoint.

Use `tests/PREVIEW_QA_CONTRACT.md` as the contract.

Check:

1. Route QA
2. Interaction QA
3. Responsive QA
4. Accessibility QA
5. Content QA
6. Motion QA

### Agent-browser

Use `capabilities/agent-browser.md` for capability handling.

Distinguish:

```text
installed ≠ available
available ≠ authorized
authorized ≠ QA passed
```

Detect actual usability, not merely a binary name. If the capability is available, explicitly ask permission before using it against the local preview.

If authorized, derive representative journeys from the actual routes/interactions and record evidence.

If denied or unavailable:

- do not fabricate browser results;
- provide the preview entry point;
- provide a concise manual checklist;
- let the user remain the acceptance authority.

Classify findings:

```text
implementation defect → repair preview/renderer
missing design decision → return to Design Forge
preference disagreement → ask user
browser/environment failure → infrastructure failure
```

## 11. User review and revision

Present the preview as an explicit design checkpoint.

Use perceptual questions when useful:

- “整体更接近哪个方向？”
- “首页冲击力和内容可找性哪个需要调整？”
- “哪些页面太满/太空？”
- “动效太弱、刚好，还是太强？”

When the user changes direction, preserve unaffected decisions. Do not reset the entire state unless the underlying goal changed.

Repeat:

```text
feedback → affected decisions → new snapshot → Preview → QA → Review
```

until accepted.

## 12. User acceptance

Only explicit user approval freezes the current snapshot:

```text
previewed → accepted
```

Record acceptance notes and decision references.

QA PASS is not user acceptance.

## 13. Renderer selection

### Figma

Input:

```text
Accepted Design Snapshot
```

Use the installed Figma workflows. The renderer must not infer design intent from chat history.

If HTML is accepted but Figma MCP is unavailable, stop and tell the user that the workflow ends at accepted HTML until Figma MCP is installed, authorized, and verified.

### Frontend

Select the renderer from the existing project:

```text
React / Next.js → React Renderer
Vue / Nuxt      → Vue Renderer
Svelte           → Svelte Renderer
other            → project-appropriate adapter
```

Reuse existing router, components, tokens, icons, fonts, utilities, and conventions. Do not rebuild an existing design system without a reason.

Renderers translate accepted decisions; they do not redefine them.

## 14. Completion gates

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

Never report a renderer as completed if it was only specified or simulated.

## 15. Conversation rules

- Ask fewer, better questions.
- Translate expert concepts instead of lecturing.
- Show concepts before asking the user to make fine-grained design choices.
- Give concise rationale for consequential decisions.
- Distinguish user decisions, agent recommendations, verified facts, and assumptions.
- Keep high-impact subjective choices with the user.
- Decide low-impact reversible details autonomously when they follow from approved direction.
- Stop asking once remaining decisions are low-impact or reversible.
- Do not expose hidden chain-of-thought.

## Anti-patterns

Never:

- jump from a vague request directly to Figma/code
- ask a giant design questionnaire
- force professional design terminology
- present three cosmetic variations as three concepts
- copy reference websites
- search only UI galleries when the creative problem calls for broader inspiration
- call a static screenshot an interactive preview
- make agent-browser a prerequisite
- claim verification without evidence
- silently mutate an accepted snapshot
- overwrite an existing project without inspection
- let stale decisions leak into a renderer
- block frontend mode because Figma MCP is unavailable
- dump the whole knowledge library into context
- treat every heuristic as a hard rule
- ask the user to choose low-impact implementation details

## Success criterion

The user should finish knowing:

```text
我不是从几个模板里选了一个，
而是看到了几个真正不同的体验可能性；
我知道自己为什么选择它，
我真正体验并验证过它，
最终交付物准确体现了这个方向。
```

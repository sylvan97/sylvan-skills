---
name: design-forge
description: Transform an ambiguous product or website idea through conversational design discovery, real-world references, design reasoning, an explicit Design State, an interactive multi-page preview, QA, user acceptance, and an optional downstream Figma or frontend renderer. Use when a user wants design help but may not know professional design terminology.
---

# Design Forge

Design Forge is a conversation-first design workflow. It translates ordinary language into design decisions, validates the experience before final delivery, and keeps rendering behind an explicit acceptance boundary.

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
Direction + References
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
  ├── revise → new snapshot → preview again
  └── accept
       ↓
Accepted Snapshot
       ↓
Figma / React / Vue / other Renderer
```

The renderer consumes the accepted snapshot, not raw conversation history.

## Non-negotiable rules

1. Understand intent before styling.
2. Do not require professional design vocabulary.
3. Use perceptual language and concrete references to help the user choose.
4. Record high-impact decisions explicitly.
5. Surface important design tensions instead of silently resolving them.
6. Preview before Figma when Figma mode is selected.
7. Preview QA is separate from user acceptance.
8. Capabilities are execution gates, not design decisions.
9. Never claim a tool, browser, MCP, or renderer was executed unless it actually was.
10. Never let a renderer silently redefine an accepted design decision.

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

Follow the installed Figma skills. Load `figma-design-to-code` for design-to-code work, `figma-generate-design` for generating pages/views into Figma, and `figma-use` before every `use_figma` call. Load `figma-create-new-file` before every `create_new_file` call. Load motion guidance when implementing motion.

If Figma MCP is unavailable or unauthorized, explain the setup/verification requirement. Do not silently switch to frontend mode. If the user accepts HTML Preview but Figma MCP is still unavailable, the design workflow ends at the accepted HTML stage.

### Frontend mode

Inspect the current project.

- empty directory → create the default self-contained HTML preview/implementation project
- existing project → inspect framework, build tool, router, routes, entry points, tokens, reusable components, icons, fonts, and assets; modify the correct existing surface

Do not create a parallel project or overwrite unrelated code.

### Runtime adapter

Use `capabilities/runtime-adapter.md` as the host integration boundary. A capability being named, installed, or discoverable is not proof that an operation succeeded. Preserve actual status and evidence.

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

Use the smallest relevant knowledge set. Do not load the whole knowledge library.

Ask only high-impact questions. Prefer choices and examples over design jargon.

## 3. Direction and reference exploration

When style is vague, translate it into perceptual dimensions and offer 2–4 contrasting directions.

For example:

```text
“电影感”
→ composition and pacing
→ typography character
→ controlled whitespace
→ image / motion atmosphere
→ restrained interface chrome
```

### Reference Explorer

When the user needs visual examples or when a vague direction would materially benefit from comparison, use `capabilities/reference-explorer.md`.

If web search/open is available, search before presenting references. Prefer 2–4 current, inspectable, distinct references. Tell the user exactly what to inspect on each site and why it is relevant. Link the actual site. References are evidence/inspiration, never templates to copy.

Do not invent URLs or claim that a site currently has an interaction you did not inspect. If browsing is unavailable, state that limitation and do not fabricate verification.

When references materially influence a high-impact subjective direction, ask the user to choose or approve the direction before systemization.

Before systemization, synthesize:

```text
Purpose
Audience
Desired feeling
Avoided feeling
Visual character
Composition
Typography
Color
Density
Imagery
Interaction
Motion
Responsive behavior
References
Trade-offs
```

Consequential subjective choices require user approval.

## 4. Design reasoning

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
```

Resolve tensions per surface where appropriate. Do not force the homepage and detail page to share identical priorities.

## 5. Design State and Snapshot gate

Maintain a canonical Design State containing:

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

Example:

```text
S01 accepted
  ↓ user changes a high-impact requirement
S01 superseded
S02 previewed
  ↓ user accepts
S02 accepted
```

## 6. Design specification and tokens

Translate the accepted direction into an implementation-ready specification:

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

## 7. Interactive HTML Preview

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

## 8. Preview QA

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

Suggested wording:

> 我检测到环境里可以使用 agent-browser。要不要让我打开刚才生成的 Preview，自动走一遍首页 → 列表 → 详情 → 返回、移动端菜单和关键交互？

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

## 9. User review and revision

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

## 10. User acceptance

Only explicit user approval freezes the current snapshot:

```text
previewed → accepted
```

Record acceptance notes and decision references.

QA PASS is not user acceptance.

## 11. Renderer selection

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

## 12. Completion gates

### Figma

```text
OUTPUT_SELECTED
→ FIGMA_CAPABILITY_READY
→ DISCOVERY_READY
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
→ DIRECTION_APPROVED
→ DESIGN_STATE_READY
→ IMPLEMENTATION_READY
→ USER_REVIEW
→ DONE
```

Never report a renderer as completed if it was only specified or simulated.

## 13. Conversation rules

- Ask fewer, better questions.
- Translate expert concepts instead of lecturing.
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
- copy reference websites
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
我知道自己选择了什么，
我知道为什么它是这样的，
我真正体验并验证过它，
最终交付物准确体现了这个方向。
```

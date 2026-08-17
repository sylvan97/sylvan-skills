---
name: design-forge
description: Transform an ambiguous product or website idea through conversational design discovery, real-world references, design reasoning, an interactive multi-page preview, and a user-approved final deliverable. At the start, choose between Figma design mode and frontend implementation mode. Use when a user wants to design a website, app, interface, responsive experience, interaction, or visual system and may not know design terminology.
---

# Design Forge

Design Forge is a conversation-first design workflow. It translates ordinary language into design decisions, validates the experience before final delivery, and keeps Figma optional unless the user explicitly chooses Figma as the output.

The operational architecture is:

```text
SKILL.md orchestration
    ↓
Knowledge Governance
    ↓
Knowledge Architecture
    ↓
Trigger Map
    ↓
Reasoning Engine
    ↓
Question Strategy
    ↓
Design Direction
    ↓
Design Specification
    ↓
Experience Preview / Frontend
    ↓
Verification
    ↓
Renderer
```

Read the referenced framework or reasoning document only when its stage is active. Do not load the entire knowledge library for every request.

## 0. Start with the output mode

Before detailed design discovery, determine the user's desired final artifact:

> 这次你希望最终得到什么？
>
> **A. Figma 设计稿** — 先确定设计方向，再生成可交互多页面 Preview，验收后落到 Figma。
>
> **B. 前端页面** — 在当前前端项目中实现真实 UI；如果当前目录为空，则创建默认可预览项目。

If the user has already made the choice, do not ask again.

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

If the user changes the output mode, restart capability checks for the new mode and preserve only decisions that remain valid.

## 1. Capability gate

### Figma mode

Before substantial discovery, verify:

1. Figma MCP tools are available.
2. Connection/authentication is usable.
3. The target Figma file is accessible or can be created.
4. Required write operations are available.

Follow the installed Figma skills. Load `figma-design-to-code` only for design-to-code work, `figma-generate-design` for generating a page/view into Figma, and `figma-use` before every `use_figma` call. Load `figma-create-new-file` before every `create_new_file` call. Do not duplicate those implementation rules here.

If Figma MCP is unavailable or unauthorized, stop the Figma path and tell the user to install/connect/authorize it. Do not claim Figma delivery is possible. The user may switch to Frontend mode.

### Frontend mode

Inspect the current working directory.

If genuinely empty:

- create the default Design Forge preview/implementation project;
- keep it self-contained and runnable;
- support multiple routes when required.

If non-empty:

- inspect framework/build tool;
- inspect router/routes;
- inspect entry points;
- inspect existing design system/tokens;
- inspect reusable components and assets;
- locate the actual target files;
- modify the existing project in place.

Do not create a parallel project.

If the target source location cannot be determined safely, ask one focused question.

Frontend browser verification is manual by default. `agent-browser` is optional and only used when the user explicitly asks for agent verification and the capability is available.

## 2. Orchestration: choose the next action

At every stage, use this control loop:

```text
Observe current context
    ↓
Identify unresolved design questions / problems
    ↓
Consult TRIGGER_MAP
    ↓
Retrieve smallest relevant knowledge set
    ↓
Apply REASONING_ENGINE
    ↓
Question / propose / decide / enforce / verify
    ↓
Update Design Decision or Design Specification
    ↓
Check stage exit condition
```

Use:

- `frameworks/` for workflow contracts and output structures;
- `knowledge/` for operational design principles;
- `reasoning/` for when/how to reason and question;
- `preview/` for interactive experience construction;
- `verification/` for evidence and acceptance;
- renderer-specific Figma guidance only when Figma implementation starts.

Do not expose internal reasoning traces. Surface decisions, concise rationale, evidence, tradeoffs, and uncertainty only.

## 3. Discovery

Read the current context first and extract:

- purpose
- audience
- content and hierarchy
- primary tasks
- platform/viewports
- brand constraints
- technical constraints
- desired feeling
- avoided feeling
- references
- uncertainty

Use `reasoning/TRIGGER_MAP.md` to identify the active reasoning families.

Use `reasoning/QUESTION_STRATEGY.md` to ask only high-impact questions.

Do not ask for professional terminology.

If uncertainty is high and impact is high, ask. If impact is low or the decision is easily derived from an approved system, decide autonomously.

## 4. Reference exploration

When the user cannot articulate a visual direction, or when multiple plausible directions exist, provide a small set of real, visitable references.

For each reference, tell the user what to inspect:

- composition
- typography
- density
- color
- imagery
- interaction
- motion
- navigation
- responsive behavior

References are evidence, not templates. Never copy a reference blindly.

Translate feedback such as:

```text
“我喜欢这个网站的大标题，但不喜欢它的深色背景。”
```

into explicit design decisions instead of merely recording the website name.

## 5. Design Direction gate

Before systemization, synthesize:

```text
Purpose
Audience
Desired feeling
Avoided feeling
Visual character
Composition
Typography character
Color character
Density
Imagery
Interaction character
Motion character
Responsive character
References
Trade-offs
```

Use Knowledge Governance to distinguish hard constraints, principles, contextual recommendations, and inspiration.

The user must approve or revise consequential high-impact subjective choices before they become the baseline.

Low-impact implementation details do not require approval.

## 6. Design reasoning and specification

Use `reasoning/REASONING_ENGINE.md` to decide when to ask, propose, decide, enforce, or defer.

Record high-impact decisions without exposing chain-of-thought:

```yaml
id:
question:
context:
options:
choice:
rationale:
tradeoff:
evidence:
confidence:
owner: user | agent | shared
reversibility: hard | moderate | easy
```

Use the canonical Design Specification framework when available.

Derive, rather than invent:

- semantic color roles
- typography roles
- spacing logic
- layout/grid rules
- component anatomy and states
- interaction behavior
- motion rules
- responsive transformations
- accessibility requirements

The Design Specification is the shared contract between Preview and every Renderer.

## 7. Experience Preview

For Figma mode, create the interactive HTML experience before Figma implementation.

For frontend mode, the real project implementation is the final artifact; a disposable HTML preview is optional.

When multiple pages are required, make the Preview a real multi-page experience, not a single screen with fake tabs:

```text
/
/list
/list/item
/article/example
```

Use real navigation and preserve:

- information hierarchy
- visual roles
- interaction intent
- motion character
- responsive strategy
- realistic content structure

Implement only the representative interactions required to validate the important design assumptions.

## 8. Preview acceptance gate

Before Figma implementation, the user must accept the Preview experience.

If the user rejects it:

```text
feedback
 ↓
identify affected decisions
 ↓
mark dependent decisions stale
 ↓
update direction/specification
 ↓
new Preview Snapshot
 ↓
repeat acceptance
```

Never silently mutate an approved Preview Snapshot.

## 9. Verification

### Figma mode

After Preview generation:

1. If `agent-browser` or an equivalent browser capability is available, ask the user for permission before accessing the Preview.
2. Test high-value journeys from the Design Specification.
3. If no browser capability exists, provide a structured manual checklist and let the user validate.

Verification levels:

```text
0 — artifact only
1 — manual verification
2 — automated browser verification
3 — automated verification + visual evidence
```

Never claim an untested journey passed.

### Frontend mode

Manual user verification is the default.

Provide:

- run command / preview URL
- relevant routes
- critical journeys
- responsive states to inspect
- expected interactions

If the user explicitly requests agent verification and browser capability exists, ask permission and run it as an optional QA step.

## 10. Design Critic

Compare the actual experience against the approved Design Direction and Design Specification.

Review:

- hierarchy
- composition
- typography
- color roles
- spacing
- interaction clarity
- motion purpose
- responsive behavior
- accessibility
- system consistency
- anti-template quality

Classify findings:

```text
blocker
major
minor
observation
```

Fix the correct layer:

```text
implementation bug → renderer
specification mismatch → Design Specification
wrong high-level direction → Design Direction
user preference change → new decision
```

## 11. Renderer selection

Only render after the Design Specification is stable enough for the selected output.

```text
Figma mode
→ Figma Renderer

Frontend mode
→ project-appropriate Frontend Renderer
```

The Renderer translates design decisions; it does not redefine them.

If a renderer capability gap materially changes an approved decision:

```text
identify gap
→ propose alternatives
→ ask user if experience changes materially
→ update specification if approved
```

## 12. Figma implementation

When Figma mode and the capability gate pass, use the installed Figma workflows.

For composed screens/pages, follow `figma-generate-design` together with `figma-use`. Load the required Figma guidance before any `use_figma` write. Prefer semantic Figma Variables, reusable Components, Variants, Auto Layout, and editable SVG/vector assets.

If a new blank Figma file is required, load `figma-create-new-file` before `create_new_file`.

If the implementation needs motion, load `figma-use-motion` together with `figma-use`.

Do not let Figma implementation silently redefine approved direction or specification.

## 13. Frontend implementation

Choose the Renderer based on the detected project:

```text
React / Next.js
→ React Renderer

Vue / Nuxt
→ Vue Renderer

Other supported framework
→ corresponding Renderer

Unknown / unsupported
→ inspect project and establish a safe implementation boundary
```

Reuse the existing project's router, components, tokens, icons, fonts, utilities, and conventions.

Do not rebuild a design system when one already exists unless the task explicitly requires it.

## 14. Completion gates

### Figma mode

```text
OUTPUT_SELECTED
→ FIGMA_CAPABILITY_READY
→ DISCOVERY_READY
→ DIRECTION_APPROVED
→ SYSTEM_READY
→ PREVIEW_READY
→ EXPERIENCE_APPROVED
→ FIGMA_READY
→ FIGMA_REVIEWED
→ DONE
```

If the user approves HTML Preview but Figma MCP is unavailable at that point, stop with:

> HTML 体验已经验收通过，但当前没有可用的 Figma MCP，因此流程到这里结束；等 Figma MCP 安装、授权并验证通过后，可以继续进入 Figma Renderer。

Never fabricate a Figma artifact.

### Frontend mode

```text
OUTPUT_SELECTED
→ PROJECT_READY
→ DISCOVERY_READY
→ DIRECTION_APPROVED
→ SYSTEM_READY
→ IMPLEMENTATION_READY
→ USER_REVIEW
→ DONE
```

## 15. Conversation rules

- Ask fewer, better questions.
- Use concrete visual anchors when the user lacks design vocabulary.
- Translate expert concepts instead of lecturing.
- Give concise rationale for consequential decisions.
- Distinguish user decision, agent recommendation, inference, verified fact, and unverified assumption.
- Keep high-impact subjective choices with the user.
- Make low-level decisions autonomously when they clearly follow from approved direction.
- Stop asking once remaining decisions are low-impact or reversible.

## 16. Anti-patterns

Never:

- jump from a vague request directly to Figma or code
- ask a giant design questionnaire
- force design terminology on the user
- copy reference websites
- generate only a static screenshot when interaction matters
- make agent-browser a frontend prerequisite
- claim verification without evidence
- silently change an approved direction or Preview Snapshot
- create a parallel project when an existing project should be modified
- let a Renderer redefine design intent
- block frontend mode because Figma MCP is unavailable
- dump the knowledge library into the conversation
- treat every design heuristic as a hard rule
- ask the user to choose low-impact implementation details

## Success criterion

The user should finish knowing:

```text
我知道自己选择了什么，
我知道为什么它是这样的，
我真正体验并验证过它，
最终交付物准确体现了这个方向。
```

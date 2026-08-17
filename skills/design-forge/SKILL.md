---
name: design-forge
description: Transform an ambiguous product or website idea through conversational design discovery, real-world references, design reasoning, an interactive multi-page preview, and a user-approved final deliverable. At the start, choose between Figma design mode and frontend implementation mode. Use when a user wants to design a website, app, interface, responsive experience, interaction, or visual system and may not know design terminology.
---

# Design Forge

Design Forge is a conversation-first design workflow. It translates ordinary language into design decisions, validates the experience before final delivery, and keeps Figma optional unless the user explicitly chooses Figma as the output.

## 0. Choose the output mode first

Before detailed design discovery, ask:

> 这次你希望最终得到什么？
>
> **A. Figma 设计稿** — 先确定设计方向，再生成可交互多页面 Preview，验收后落到 Figma。
>
> **B. 前端页面** — 直接在当前前端项目中实现 UI；如果当前目录为空，则创建默认可预览项目。

Do not ask detailed typography, color, spacing, or grid questions before this choice.

Record an Output Contract:

```yaml
output_mode: figma | frontend
figma:
  mcp_required: true
  browser_verification: optional
frontend:
  browser_verification: manual_by_default
  existing_project: auto_detect
```

If the user changes the output mode later, re-evaluate the capability gate and project state before continuing.

## 1. Figma capability gate

This gate applies only when `output_mode: figma`.

### Required checks

Before spending significant effort on design discovery, verify that the Figma MCP capability is actually available and usable in the current environment.

Check:

1. Figma MCP tools are available.
2. The required connection/authentication is usable.
3. The user has access to the target Figma file, or can create one when needed.
4. The Figma workflow can perform the required write operations.

The Figma MCP server is a prerequisite for Figma output. Existing Figma workflows require the MCP connection before screen creation, and `figma-use` guidance must be loaded before write operations. Follow the installed Figma skills rather than duplicating their implementation rules.

### If Figma MCP is unavailable or unauthorized

Stop before design work that depends on Figma.

Tell the user clearly:

> 你选择的是 Figma 设计稿，但当前环境没有可用的 Figma MCP / 权限。请先安装、连接并授权 Figma MCP，然后让我重新检查。

Do not pretend that Figma delivery is possible.

If the user chooses to switch to frontend mode, restart from the frontend capability gate.

### If Figma MCP is ready

Continue to Discovery.

## 2. Frontend project capability gate

This gate applies only when `output_mode: frontend`.

Inspect the current working directory before creating files.

### Empty directory

If the directory is genuinely empty:

- create the default Design Forge preview project
- use a simple, self-contained structure
- make it runnable and directly previewable
- support multiple routes/pages when the requested experience requires them

The default project is a validation/implementation artifact, not a production framework migration.

### Existing project

If the directory is not empty, do not create a parallel project.

Inspect the existing project to determine:

- framework and build tool
- router and route structure
- entry points
- existing design system/tokens
- reusable components
- relevant page files
- existing assets
- dev/start command

Map the user's requested page/flow to the actual source files and routes. Modify the existing project in place.

If the target cannot be determined safely, ask one focused clarification question rather than guessing.

### Browser verification in frontend mode

Manual user verification is the default. Do not require `agent-browser`.

After implementation, provide the user with the local preview command/URL and a concise checklist of the important journeys to inspect.

If the user explicitly asks the agent to verify the page and a browser capability is available, it may be used as an optional enhancement after permission. It is never a prerequisite for frontend completion.

## 3. Discovery

Extract what the user already supplied:

- purpose
- audience
- content and hierarchy
- primary tasks
- platform/viewports
- brand constraints
- technical constraints
- desired feeling
- avoided feeling
- known references
- uncertainty

Do not ask for professional terminology.

If the request is ambiguous, identify the highest-impact unknown and ask one high-value question at a time.

Prefer experiential questions:

- quiet vs energetic
- editorial vs product-like
- restrained vs expressive
- structured vs experimental
- immersive vs information-dense

When the user cannot answer an abstract question, use concrete visual references or website comparisons.

## 4. Reference exploration

Provide real, visitable references when they help the user understand a direction.

For each reference, explain only observable characteristics relevant to the decision:

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

## 5. Design Direction

Synthesize a user-readable Design Direction before systemization:

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

Present consequential trade-offs. The user approves or revises the direction before it becomes the baseline.

## 6. Design reasoning and specification

Record important decisions without exposing chain-of-thought:

```yaml
id:
question:
decision:
rationale:
evidence:
confidence:
```

Use the canonical Design Specification framework when available. Derive semantic tokens, typography roles, color roles, layout rules, component states, interaction, motion, responsive transformations, and accessibility requirements from approved intent.

Do not invent arbitrary tokens just to make a system look complete.

## 7. Experience Preview

The Preview is a real interactive experience, not a screenshot.

For multi-page requests, generate a multi-route preview, for example:

```text
/
/list
/list/item
/article/example
```

Preserve:

- information hierarchy
- visual roles
- interaction intent
- motion character
- responsive strategy
- realistic content structure

Implement representative navigation, disclosure, CTA, states, responsive behavior, and motion when relevant.

### Figma mode

The HTML Preview is a validation artifact before Figma. After the user approves the experience, continue to Figma only if the Figma capability gate is satisfied.

### Frontend mode

The implemented frontend is the final delivery artifact. Do not create a separate disposable HTML preview unless it is useful for validation.

## 8. Verification

### Figma mode

After Preview generation, if an interactive browser capability such as `agent-browser` exists, ask the user for permission before accessing the preview.

Test high-value journeys derived from the Design Specification rather than mechanically clicking everything.

If no browser capability exists, do not block the workflow. Let the user manually validate the Preview with a structured checklist.

Verification levels:

```text
0 — artifact only
1 — manual verification
2 — automated browser verification
3 — automated verification + visual evidence
```

Never claim an untested journey passed.

### Frontend mode

Manual user verification is the default. Provide:

- how to run the project
- relevant routes
- representative journeys
- responsive states to inspect
- expected interaction behavior

The workflow can complete after the user accepts the implementation. Do not make agent-browser a hidden requirement.

## 9. Design Critic

Compare the actual experience against the approved Design Direction and Specification.

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

Classify findings as `blocker`, `major`, `minor`, or `observation`.

Do not treat personal preference as a defect unless it conflicts with approved intent or a relevant design principle.

## 10. Approval and delivery

### Figma mode

The sequence is:

```text
Discovery
→ Reference exploration
→ Design Direction approval
→ Design Specification
→ Interactive Preview
→ Verification / user acceptance
→ Figma implementation
→ Figma review
→ Done
```

If Figma MCP is missing after the user has accepted the HTML Preview, the workflow ends there with an explicit message that Figma delivery cannot continue without Figma MCP. Do not fabricate a Figma artifact.

### Frontend mode

The sequence is:

```text
Project inspection
→ Discovery
→ Reference exploration
→ Design Direction approval
→ Design Specification
→ Frontend implementation
→ User preview / acceptance
→ Done
```

## 11. Figma implementation

When `output_mode: figma` and the capability gate passes, use the installed Figma workflows.

For composed screens/pages, follow `figma-generate-design` together with `figma-use`. Load the required Figma guidance before any `use_figma` write. Prefer semantic Figma Variables, reusable components, Auto Layout, and editable SVG/vector assets.

Do not let Figma implementation silently redefine the approved direction.

## 12. Figma review

After implementation, compare Figma against the approved Design Specification and Preview Snapshot.

Check for:

- design drift
- missing states
- token inconsistency
- hierarchy changes
- responsive inconsistencies
- component inconsistencies

Record accepted deviations.

## 13. Conversation rules

- Ask fewer, better questions.
- Give concrete visual anchors when the user lacks design vocabulary.
- Translate instead of lecturing.
- Explain consequential decisions briefly.
- Distinguish user decision, agent recommendation, inference, verified fact, and unverified assumption.
- Keep the user in control of high-impact subjective choices.
- Make low-level decisions autonomously when they clearly follow from the approved direction.

## 14. Anti-patterns

Never:

- jump from a vague request directly to Figma
- ask a giant design questionnaire
- force design terminology on the user
- copy reference websites
- generate only a static screenshot when interaction matters
- make agent-browser a frontend prerequisite
- claim verification without evidence
- silently change an approved direction
- create a parallel project when an existing project should be modified
- let Figma implementation redefine the design
- block a frontend workflow because Figma MCP is unavailable

## Success criterion

The user should finish knowing:

```text
我知道自己选择了什么，
我知道为什么它是这样的，
我真正体验并验证过它，
最终交付物准确体现了这个方向。
```

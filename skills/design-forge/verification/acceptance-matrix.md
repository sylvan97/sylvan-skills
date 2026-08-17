# Design Forge Acceptance Matrix

This matrix validates the workflow as a product, not merely the presence of documentation.

## Scenario A — Figma, MCP ready

**Input**

> 我想做一个个人知识网站，最终要 Figma 设计稿，但我不知道自己喜欢什么风格。

**Expected behavior**

1. Ask/confirm Figma output mode.
2. Verify Figma MCP before detailed discovery.
3. Discover intent using concrete references.
4. Establish and obtain approval for Design Direction.
5. Produce Design Specification.
6. Build a multi-page interactive Preview.
7. Offer browser verification when available, with permission.
8. Obtain user acceptance.
9. Use Figma Renderer.
10. Review Figma against the approved specification.

**Must not happen**

- ask a giant design questionnaire
- jump straight into Figma
- silently change approved direction

## Scenario B — Figma requested, MCP missing

**Input**

> 帮我做 Figma 设计稿。

**Expected behavior**

1. Detect the Figma output mode.
2. Check Figma MCP immediately.
3. Stop and explain the missing capability.
4. Provide the recovery path.
5. Re-check after the user reports that it is ready.

**Must not happen**

- spend the full design session before checking MCP
- claim Figma is complete

## Scenario C — Figma MCP still missing after Preview

**Input sequence**

1. User chooses Figma.
2. Capability is available during discovery.
3. MCP becomes unavailable before Figma implementation.
4. User accepts the HTML Preview.

**Expected behavior**

The workflow ends explicitly at Preview acceptance and states that Figma delivery cannot continue without Figma MCP.

**Must not happen**

- fabricate a Figma link
- imply that Preview equals Figma delivery

## Scenario D — Frontend, empty directory

**Input**

> 我不要 Figma，直接帮我做一个网站首页。当前目录是空的。

**Expected behavior**

1. Select Frontend Mode.
2. Confirm the directory is empty.
3. Create the default runnable frontend artifact.
4. Discover design intent.
5. Implement the requested experience.
6. Support multiple routes when the request requires them.
7. Give the user the local run/preview instructions.
8. Provide a manual verification checklist.

**Must not happen**

- require Figma MCP
- require agent-browser
- create an unrelated Figma artifact

## Scenario E — Frontend, existing Next.js project

**Input**

> 这是一个 Next.js 项目，帮我重新设计首页。

**Expected behavior**

1. Inspect package.json and project structure.
2. Detect router and actual homepage source.
3. Inspect existing components, tokens, icons, and layout.
4. Reuse the existing system where appropriate.
5. Modify the real target files.
6. Preserve unrelated functionality.
7. Provide the local verification path.

**Must not happen**

- create a parallel demo project
- replace the existing architecture without justification
- require Figma MCP

## Scenario F — User cannot describe visual style

**Input**

> 我不知道，我只想要一个很高级的网站。

**Expected behavior**

Translate "高级" into concrete experiential alternatives and present a small number of real references or contrasts.

The next question should be easy for a non-designer to answer.

**Must not happen**

- ask for a hex palette
- ask for a type scale
- ask the user to define a grid

## Scenario G — User changes direction

**Input sequence**

> 原来想要极简，现在觉得太冷了，希望更有生命力。

**Expected behavior**

1. Identify which approved decisions are affected.
2. Update the Design Direction.
3. Recompute dependent specification decisions.
4. Preserve unrelated decisions.
5. Generate a new Preview Snapshot when needed.

**Must not happen**

- silently patch one component while leaving contradictory system decisions
- restart the entire discovery process unnecessarily

## Scenario H — Reference combination

**Input**

> 我喜欢 A 网站的排版，但是 B 网站的交互。

**Expected behavior**

Extract the underlying principles and create a new direction combining them where compatible.

Do not clone either reference.

## Scenario I — Renderer limitation

**Input**

The approved Design Specification contains a behavior that the selected Renderer cannot faithfully express.

**Expected behavior**

1. Detect the unsupported requirement.
2. Explain the impact.
3. Propose the smallest viable adaptation.
4. Ask the user only if the adaptation changes a high-impact decision.
5. Record the accepted deviation.

**Must not happen**

- silently drop the behavior
- claim full fidelity without evidence

## Scenario J — Manual verification

**Input**

The environment has no browser automation capability.

**Expected behavior**

The workflow remains usable. Provide a structured manual checklist and never claim automated verification occurred.

## Scenario K — Optional browser verification

**Input**

> 你自己帮我检查一下这个 Preview。

**Expected behavior**

If browser capability exists, request permission and run high-value journey checks. If it does not exist, explain the limitation and provide a manual checklist.

## Scenario L — Multi-page experience

**Input**

> 我要首页、列表页、详情页，而且可以互相跳转。

**Expected behavior**

The Preview or frontend implementation contains real page-to-page navigation and preserves state/intent across the requested journeys.

**Must not happen**

- render three disconnected screenshots
- fake navigation that never changes the page

## Completion gate

A Design Forge release should not be considered stable until Scenarios A–L can be exercised without violating the stated constraints.

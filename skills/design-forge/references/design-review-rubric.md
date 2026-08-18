# Design Forge — Design Review Rubric

This is the single review entry point for evaluating whether a Design Forge run is actually good enough to proceed.

Load this file when performing a design review, implementation readiness review, or post-run skill review.

## 1. Capability boundary

Verify that the workflow distinguishes:

- capability discovered
- capability available
- capability authorized
- capability executable
- operation attempted
- operation succeeded
- result verified

A missing or unauthorized capability must stop only the dependent stage. Never fabricate execution or verification.

**PASS:** every external/tool-dependent claim has evidence.

## 2. Intent fidelity

Review whether the resulting direction reflects:

- the user's actual goal
- content characteristics
- audience and primary tasks
- explicit preferences
- explicit exclusions
- device constraints

Do not reward visual polish when the concept solves the wrong problem.

**PASS:** a reviewer can trace major design decisions back to user intent or a clearly labeled agent proposal.

## 3. Creative distinctiveness

Ask:

1. Were multiple materially different concepts explored?
2. Do they differ structurally, not cosmetically?
3. Does the chosen concept have a clear creative thesis?
4. Is there a recognizable mental model?
5. Does it change at least one default web behavior?
6. Is there a signature interaction or information behavior?
7. Does the user's content influence the experience rather than merely populate it?

Use the Anti-Generic Gate for hard rejection.

**PASS:** the concept would not be an obvious answer from a generic website-generation prompt.

## 4. Reference quality

Review whether references are:

- real and inspectable
- relevant to a specific design question
- diverse enough to expand the search space
- explained in terms of what to inspect
- used as lineage/principle, not copied as a template

Prefer cross-disciplinary references when they materially improve the concept.

**PASS:** every important reference has a reason for inclusion and the design remains independently authored.

## 5. Experience model

Check that the design defines:

- what the user thinks they entered
- what they do first
- how navigation works
- how content is revealed
- where efficiency beats atmosphere
- what is memorable

**PASS:** the experience can be described without mentioning colors, fonts, gradients, or components.

## 6. Interaction and motion

Review:

- primary interaction
- state changes
- feedback
- spatial continuity
- responsive transformations
- keyboard/focus behavior where relevant
- reduced-motion behavior

Motion must communicate hierarchy, state, relationship, or continuity. Decorative motion alone is not a quality signal.

**PASS:** removing motion does not hide essential information, and important motion has a reason to exist.

## 7. Visual language

Review:

- composition
- typography
- hierarchy
- density
- color roles
- imagery
- surfaces
- iconography
- responsive composition

Do not reward visual effects for their own sake. ACG/cinematic/editorial ingredients must form a coherent visual world rather than a pile of tropes.

**PASS:** the visual language follows the creative thesis and survives across multiple routes.

## 8. Token and system quality

Review:

- semantic rather than arbitrary tokens
- typography roles
- spacing rhythm
- responsive rules
- state styles
- motion principles
- reuse where repetition is meaningful

Avoid premature tokenization of one-off decisions.

**PASS:** tokens preserve the concept instead of flattening it into a generic component system.

## 9. Workflow quality

Check the sequence:

```text
intent
→ creative exploration
→ concept selection/collision
→ thesis
→ experience
→ interaction/visual world
→ design state
→ accepted snapshot
→ preview
→ QA
→ user acceptance
→ renderer
```

The renderer must consume an accepted snapshot, not improvise from raw chat history.

**PASS:** subjective high-impact decisions were not silently made downstream.

## 10. Preview quality

The HTML preview must be genuinely navigable when multiple routes are required.

Review:

- route integrity
- primary journeys
- interactions
- responsive behavior
- accessibility
- content realism
- motion
- error/empty/loading states where relevant

**PASS:** the user can evaluate the experience, not merely look at a static composition.

## 11. Acceptance and revision

Verify that:

- QA and user acceptance are separate
- user feedback maps to affected decisions
- revisions create a new snapshot when materially different
- unaffected decisions survive revisions

**PASS:** the final accepted state is traceable and reproducible.

## 12. Renderer integrity

For Figma, React, Vue, Svelte, or another renderer:

- consume the accepted snapshot
- reuse existing project conventions when applicable
- preserve approved decisions
- report actual execution status
- do not silently substitute unsupported capabilities

**PASS:** renderer output is a translation of the approved design, not a second design process.

## 13. Token efficiency

Review context usage:

- SKILL.md contains routing rules, not encyclopedic knowledge
- large knowledge files are loaded only when relevant
- references are loaded selectively
- repeated rules are not duplicated unnecessarily
- tests are not injected into every design run

**PASS:** the minimum useful context is loaded for the current task.

## 14. Anti-pattern review

Reject if the run:

- jumps directly to UI
- asks a giant questionnaire
- produces cosmetic concept variants
- copies references
- uses generic AI aesthetics as a substitute for concept
- adds effects without purpose
- calls static output an interactive preview
- fabricates browser/MCP verification
- overwrites an existing project without inspection
- mutates an accepted snapshot silently
- lets the renderer redefine the concept

## Review result

Use one of:

```text
PASS
PASS WITH NOTES
REVISE
BLOCKED
```

### Minimum release bar

A Design Forge run should not proceed to final renderer delivery unless:

- capability boundary is verified;
- intent fidelity is clear;
- creative distinctiveness passes;
- experience and interaction models are coherent;
- accepted snapshot is valid;
- preview has been reviewed;
- all unresolved blocking issues are classified.

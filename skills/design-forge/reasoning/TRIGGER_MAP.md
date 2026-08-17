# Design Forge Trigger Map

This map defines when Design Forge should activate a reasoning family.

Triggers are semantic. Exact keywords are only hints.

## 1. Trigger model

```text
Observed signal
    ↓
Context check
    ↓
Potential reasoning families
    ↓
Impact / uncertainty check
    ↓
Question / recommendation / autonomous decision
```

Do not activate every matching family. Select the smallest useful set.

## 2. Intent triggers

| Signal | Activate | Typical action |
|---|---|---|
| User cannot describe visual style | aesthetics + reference exploration | show concrete references |
| User uses vague adjectives: premium, modern, cool, cinematic | aesthetics + perceptual clarification | translate adjective into observable properties |
| User gives strong visual preferences | direction reasoning | preserve explicit preferences |
| User contradicts previous direction | revision reasoning | identify affected decisions |
| User says “you decide” | full reasoning | autonomous decisions within ownership boundaries |

## 3. Information architecture triggers

| Signal | Activate | Typical action |
|---|---|---|
| Many content types | IA + content hierarchy | model content relationships |
| Many navigation destinations | IA + navigation | simplify / group |
| Long page | hierarchy + progressive disclosure | establish reading path |
| Dashboard / dense data | hierarchy + cognition | establish primary task |
| User asks for “everything on homepage” | hierarchy + attention + cognition | challenge competing priorities |
| Multi-level content | IA + navigation + progressive disclosure | define page hierarchy |

## 4. Visual hierarchy triggers

Activate hierarchy / composition when:

- multiple elements compete for attention,
- user asks for “cleaner” or “less messy,”
- a page contains a hero plus many secondary elements,
- cards have inconsistent visual weight,
- a layout feels empty without an explicit reason,
- a layout feels crowded without a clear information priority.

Typical actions:

```text
identify primary / secondary / tertiary content
↓
adjust scale / spacing / contrast / position
↓
verify first-glance hierarchy
```

## 5. Typography triggers

Activate typography reasoning when:

- typography is a major visual identity,
- user references editorial / luxury / technical / playful qualities,
- content is reading-heavy,
- headings compete with imagery,
- multiple languages may appear,
- responsive typography is important.

Do not ask the user to choose font sizes unless the choice materially affects personality.

## 6. Color triggers

Activate color reasoning when:

- user has a brand color,
- emotional tone is central,
- light/dark mode matters,
- color is used for semantic status,
- contrast or accessibility is at risk.

Always distinguish:

```text
brand expression
semantic meaning
accessibility
surface / text hierarchy
```

Do not let a decorative color decision override semantic meaning or contrast requirements.

## 7. Imagery triggers

Activate imagery / art direction when:

- imagery dominates the page,
- user wants cinematic / editorial / luxury direction,
- covers / photography are important,
- image crops affect hierarchy,
- user wants video or motion backgrounds.

Check:

```text
subject
crop
aspect ratio
focal point
density
tone
loading / performance
accessibility
```

## 8. Interaction triggers

Activate interaction reasoning when:

- the user describes an interaction rather than a static screen,
- navigation is central,
- drag / swipe / hover / scroll behavior matters,
- controls have multiple states,
- an action can fail,
- the UI changes without a page navigation.

Always model states when behavior changes the interface.

## 9. State triggers

Activate state reasoning when a component or page can be:

```text
loading
empty
ready
selected
focused
pressed
disabled
success
error
offline
partial
```

If a state is user-visible, it belongs in the Design Specification.

## 10. Motion triggers

Activate motion reasoning when:

- user says cinematic, fluid, alive, playful, dynamic, calm, expressive,
- navigation transitions are important,
- content enters / leaves the viewport,
- a component has meaningful state transitions,
- scroll-linked effects are requested,
- motion may affect accessibility or performance.

First classify motion:

```text
functional / productive
expressive
```

Then decide:

```text
timing
sequence
spatial continuity
easing
reduced-motion behavior
performance boundary
```

## 11. Responsive triggers

Activate responsive reasoning when:

- multiple device classes are requested,
- desktop and mobile priorities differ,
- a dense desktop layout cannot simply reflow,
- touch interaction changes the control model,
- navigation needs transformation.

Think in transformations, not just widths:

```text
scale
reflow
stack
transform
hide
reveal
reposition
divide
interaction change
```

## 12. Accessibility triggers

Activate accessibility reasoning whenever:

- the UI is interactive,
- motion is present,
- color communicates status,
- custom controls are introduced,
- text is dense,
- keyboard access matters,
- user asks for production-ready UI.

Accessibility is not a final polish step.

## 13. Design-system triggers

Activate design-system reasoning when:

- more than one page shares patterns,
- repeated components appear,
- multiple states exist,
- user asks for consistency,
- tokens are supplied,
- an existing design system is present.

Check existing system before creating a new one.

## 14. Content triggers

Activate content reasoning when:

- copy is central to hierarchy,
- labels are ambiguous,
- empty / error states need writing,
- content length affects layout,
- localization may change layout,
- placeholder text would hide real design problems.

Prefer realistic content shapes over lorem ipsum.

## 15. Cognitive-load triggers

Activate cognition reasoning when:

- there are many simultaneous choices,
- users must remember information between steps,
- navigation is complex,
- onboarding is long,
- a page contains many competing CTAs,
- users need to compare multiple options.

Look for opportunities to:

```text
reduce memory burden
reduce unnecessary choices
make relationships visible
preserve context
progressively disclose complexity
```

## 16. Reference-explorer triggers

Activate reference exploration when:

- the user cannot describe a visual direction,
- two or more plausible aesthetics exist,
- the user uses subjective adjectives,
- the team needs alignment around taste,
- a major visual decision has low evidence.

Provide a small set of meaningfully different references rather than a large gallery.

## 17. User-question triggers

Ask a question when:

```text
impact = high
AND
uncertainty = high or medium
AND
user preference materially changes the outcome
```

Do not ask when:

```text
impact = low
OR
constraint is standard
OR
decision is easily reversible
OR
existing design system already resolves it
```

## 18. Renderer triggers

Before rendering:

```text
Figma Mode
→ verify Figma MCP capability

Frontend Mode
→ inspect project / router / components / tokens
```

If the selected renderer cannot support an approved high-impact decision:

```text
do not silently change it
→ identify capability gap
→ propose alternatives
→ ask user if experience changes materially
```

## 19. Verification triggers

Activate verification when:

- a high-impact interaction is implemented,
- a responsive transformation is implemented,
- a motion system is implemented,
- a major accessibility requirement exists,
- user requests acceptance testing,
- a preview has been approved and is moving to Figma.

## 20. Composite triggers

Some requests should activate several families together.

### “Make it cinematic”

```text
Aesthetics
Composition
Typography
Imagery
Motion
Reference Explorer
```

### “Make this dashboard easier to use”

```text
IA
Hierarchy
Cognition
Interaction
States
Accessibility
```

### “Make this work on mobile”

```text
Responsive
IA
Interaction
Content
Accessibility
```

### “Build a design system from this site”

```text
Visual analysis
Tokens
Typography
Color
Components
States
Accessibility
Consistency
```

## 21. Trigger priority

When multiple triggers activate, prioritize in this order:

```text
Hard constraints
↓
User intent
↓
Task / information architecture
↓
Accessibility / interaction
↓
Visual hierarchy
↓
Typography / color / imagery
↓
Motion
↓
Decorative details
```

This is not a statement that motion or aesthetics are unimportant. It prevents decorative decisions from masking structural problems.

## 22. Trigger suppression

Suppress a trigger when:

- the relevant decision has already been explicitly approved,
- the existing design system fully resolves it,
- it cannot materially affect the current deliverable,
- the issue is outside the current scope.

If a later change invalidates an earlier decision, reactivate the affected trigger.

## 23. Trigger output

Every activated reasoning family should produce one of:

```text
observe
ask
propose
decide
specify
verify
escalate
```

Never activate a reasoning family merely to generate prose.

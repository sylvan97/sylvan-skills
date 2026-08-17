# HTML Preview Renderer Contract

## Role

The HTML Preview Renderer turns an **accepted Design Snapshot** into a complete, locally previewable, multi-route interactive prototype.

It is a design validation renderer, not a production application generator.

## Input

Required:

- validated `Design State`
- `snapshot.status = accepted`
- active decisions referenced by the snapshot
- resolved high-impact tensions
- route definitions
- design tokens or token placeholders
- viewport targets when specified

The renderer MUST reject invalid or non-accepted state.

## Output

A self-contained preview project with:

```text
preview/
├── index.html
├── pages/
├── assets/
├── styles/
│   └── tokens.css
├── scripts/
│   └── app.js
└── README.md
```

The exact implementation may differ, but the output must support multiple navigable routes rather than a single screenshot-like HTML file.

## Interaction requirements

The preview should demonstrate the interactions that materially affect the design decision, including where applicable:

- navigation between primary routes
- list → detail transitions
- menus / drawers
- tabs / filters
- expandable or progressive disclosure content
- meaningful hover/focus/active/disabled states
- feedback after consequential actions
- responsive transformations

Not every production feature needs to be implemented.

## Responsive requirements

The renderer must represent the accepted responsive strategy rather than merely scale the desktop layout down.

At minimum validate the declared target classes, typically:

- PC
- Pad
- H5

## Content requirements

Use realistic representative content shape. Avoid placeholder text that hides wrapping, hierarchy, overflow, or density problems.

## Asset requirements

- Do not use emoji as interface icons.
- Prefer project SVG assets or simple inline SVG where appropriate.
- Keep visual assets replaceable.

## Token requirements

Visual decisions should be centralized into token-like variables where practical:

- color
- typography
- spacing
- radius
- elevation
- motion
- breakpoint / layout constants

The preview must not scatter important design decisions across arbitrary element-level values when a token is defined.

## Acceptance relationship

```text
Design State
    ↓
accepted snapshot
    ↓
HTML Preview
    ↓
user review
    ↓
accepted / revise
```

A preview does not itself imply design acceptance.

## Renderer boundary

The renderer should not:

- invent a new visual direction
- silently change accepted design decisions
- replace unresolved decisions with guesses
- turn placeholder implementation choices into design-system decisions

When required information is missing, return a structured gap for Design Forge to resolve.

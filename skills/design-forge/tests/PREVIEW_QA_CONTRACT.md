# Design Forge — Preview QA Contract

## Purpose

Preview QA validates the generated interactive prototype before user acceptance and before any downstream renderer such as Figma.

## QA layers

### 1. Route QA

- every primary route resolves
- navigation targets exist
- list → detail paths resolve
- back/home paths remain usable
- hash/anchor targets exist when used

### 2. Interaction QA

- controls have observable state changes
- menus open and close
- filters update content
- meaningful hover/focus/active/disabled states exist
- consequential actions provide feedback

### 3. Responsive QA

Validate the declared viewport classes:

- PC
- Pad
- H5

Do not assume desktop scaling is sufficient. Verify structural transformations.

### 4. Accessibility QA

- interactive controls have accessible names
- `aria-controls` references an existing element when used
- expanded/collapsed state is synchronized
- keyboard/focus path is considered
- important meaning is not conveyed by color alone
- reduced-motion behavior is considered

### 5. Content QA

- realistic representative content is used
- long titles/copy do not destroy hierarchy
- empty/error states are considered where relevant
- content density matches the accepted design intent

### 6. Motion QA

- motion has a stated purpose
- nonessential motion has a reduced-motion alternative
- motion does not block interaction or hide state changes

## Execution modes

### Agent-browser available

After explicit user permission:

```text
build preview
  ↓
start local preview
  ↓
agent-browser
  ↓
execute representative journeys
  ↓
capture failures
  ↓
fix / rerun
  ↓
QA report
```

### Agent-browser unavailable

Do not invent automated browser results. Provide the preview and a concise manual QA checklist for the user.

## Gate

```text
QA PASS
  ↓
User Acceptance
  ↓
Accepted Snapshot
  ↓
Figma / other downstream renderer
```

A QA pass does not equal user acceptance.

## Structured failure format

```json
{
  "severity": "high",
  "layer": "accessibility",
  "route": "/",
  "element": "menu-button",
  "failure": "aria-controls references a missing element",
  "evidence": "aria-controls=mobile-nav but no #mobile-nav exists",
  "suggested_fix": "create the referenced navigation target and synchronize its expanded state"
}
```

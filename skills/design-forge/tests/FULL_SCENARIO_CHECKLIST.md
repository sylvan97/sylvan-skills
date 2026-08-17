# Full Scenario Checklist

- [x] Output mode is selected before renderer-specific work
- [x] Figma capability gate exists
- [x] Natural-language intent discovery exists
- [x] Direction examples/references are part of the decision flow
- [x] Decisions are explicit and traceable
- [x] Design tensions are surfaced and resolved
- [x] Design State exists
- [x] Accepted Snapshot gates rendering
- [x] HTML Preview is multi-route
- [x] Preview is interactive
- [x] Responsive targets are represented
- [x] Preview QA is a separate stage
- [x] Agent-browser capability is optional
- [x] Agent-browser use requires explicit permission
- [x] Manual QA fallback exists
- [x] User revision can supersede a prior snapshot
- [x] User acceptance freezes the current snapshot
- [x] Figma consumes accepted state only
- [x] React/Vue/other renderers conceptually consume the same state boundary

## Current maturity

### Contract / architecture

**Strong enough for v0.1 scenario design.**

### Runtime

Still requires implementation-level tests for:

- executable Skill Host behavior
- actual local preview generation
- actual agent-browser journeys
- actual Figma MCP rendering
- renderer adapters for React/Vue

### Human design validation

Still required. The workflow can structure design decisions; it does not replace expert visual critique.

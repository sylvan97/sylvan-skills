# Capability Gate Policy

Design Forge must resolve execution capabilities before entering renderer-specific stages.

## Figma mode

```text
user selects Figma
      ↓
check Figma MCP
      ↓
healthy + authorized?
  ├── no → explain / request setup / verify again
  └── yes → continue
```

If the user chooses Figma but the Figma MCP is unavailable or unauthorized, Design Forge must not silently switch to another renderer.

## Local frontend mode

```text
user selects local frontend
      ↓
inspect current project
      ↓
empty directory?
  ├── yes → generate default HTML preview project
  └── no → inspect framework/routes and render into the appropriate existing surface
```

In local frontend mode, the user remains responsible for final browser verification unless an explicitly available browser capability is separately authorized.

## Agent-browser

Agent-browser is an optional Preview QA accelerator. Its absence must not block the design workflow.

## General rule

Capabilities are gates, not design decisions. A missing capability changes what can be executed, not what the user wants.

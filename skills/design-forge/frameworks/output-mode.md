# Output Mode

Design Forge has two first-class delivery modes.

## Figma

```yaml
output_mode: figma
mcp_required: true
browser_verification: optional
```

Flow:

```text
Figma capability gate
→ Discovery
→ Direction
→ Specification
→ Interactive Preview
→ Verification / user acceptance
→ Figma
→ Review
```

Figma MCP must be available before substantial design work begins.

If the user accepts the Preview but Figma MCP is unavailable, the workflow ends with an explicit explanation. Do not fabricate or imply a Figma deliverable.

## Frontend

```yaml
output_mode: frontend
browser_verification: manual_by_default
existing_project: auto_detect
```

Flow:

```text
Project inspection
→ Discovery
→ Direction
→ Specification
→ Frontend implementation
→ User preview / acceptance
→ Done
```

Agent-browser is optional and never a prerequisite.

## Switching modes

If the user changes the desired output, re-run the relevant capability gate.

Do not assume that an existing Figma connection or project structure remains valid after the mode changes.

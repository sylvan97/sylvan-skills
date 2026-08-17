# Figma Capability Gate

## Purpose

Prevent a long design session from ending with an unavailable Figma integration.

## Gate

Run before substantial Discovery work when the user selects Figma output.

```text
Figma MCP tools available?
        ↓
Connection / authorization usable?
        ↓
Target file accessible or creatable?
        ↓
Required write capability usable?
        ↓
FIGMA_READY
```

## Failure states

### unavailable

Figma MCP is not present in the environment.

Tell the user that Figma output cannot continue until the MCP is installed/connected.

### unauthorized

The tools exist but the required account/file permission is missing.

Tell the user what needs authorization and ask them to retry after fixing it.

### target-unavailable

The MCP works but the requested Figma file cannot be accessed.

Ask for a valid target file or permission, or create a new file when the installed Figma workflow supports it.

### ready

Continue into Discovery.

## Important rule

A successful HTML Preview does not bypass this gate. If Figma output was selected and Figma remains unavailable after user acceptance, stop the workflow and explain the boundary clearly.

## Tool integration

Use the installed Figma skills as the source of truth for actual MCP operations. Do not duplicate Figma Plugin API implementation rules here.

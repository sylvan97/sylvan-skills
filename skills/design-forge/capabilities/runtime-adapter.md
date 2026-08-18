# Runtime Adapter Boundary

Design Forge is host-agnostic. A Skill host/runtime is responsible for mapping capability contracts to actual tools.

## Capability map

| Capability | Required for | Runtime responsibility |
|---|---|---|
| web search/open | reference exploration | search and open real sites |
| Figma MCP | Figma mode | inspect auth/readiness and perform approved Figma writes |
| local filesystem/project | frontend mode | inspect and modify the current project |
| browser automation | optional Preview QA | detect, request permission, execute journeys, collect evidence |
| renderer | final artifact | consume Accepted Design Snapshot only |

## Adapter contract

Each adapter should expose:

```yaml
capability:
status: unavailable | available | authorized | failed
verification:
  checked_at:
  evidence:
permissions:
  required:
  granted:
operations:
  - name
  - status
```

The adapter must distinguish capability detection from execution. A tool name appearing in a shell or registry is not sufficient evidence that the operation succeeded.

## Failure behavior

- unavailable → follow the fallback defined by the capability gate;
- unauthorized → request user authorization or provide setup instructions;
- operation failure → report the real failure and do not fabricate output;
- partial execution → preserve successful evidence and mark the remaining gates incomplete.

## Renderer boundary

The runtime must pass a serialized Accepted Design Snapshot to a renderer. The renderer must not receive raw conversation history as its design source of truth.

```text
conversation
  ↓
Design Forge state
  ↓
accepted snapshot
  ↓
runtime adapter
  ↓
renderer
```

## Host integration

A concrete host may implement this boundary using MCP tools, shell commands, local APIs, or other connectors. The repository contract deliberately does not hard-code one host implementation.

# Host Runtime Contract

Design Forge is host-agnostic. A Skill host is responsible for loading `SKILL.md`, exposing tools/capabilities, and preserving the Design State across turns.

## Required startup

1. Load `SKILL.md` as the orchestration instruction.
2. Resolve referenced repository resources lazily.
3. Detect available runtime capabilities before promising execution.
4. Create an in-memory or persisted Design State for the current task.
5. Keep the current accepted snapshot immutable after acceptance.

## Capability registry

The host should expose capability status as:

```yaml
capability:
  name: web | figma_mcp | agent_browser | filesystem | runtime_renderer
  available: true | false
  authorized: true | false | unknown
  executable: true | false | unknown
  evidence: string
```

`available` alone is never enough to claim execution.

## Tool mapping

| Capability | Typical host operation | Required evidence |
|---|---|---|
| web | search/open reference | returned source or page |
| figma_mcp | create/update Figma nodes | tool result / node id |
| agent_browser | open/click/assert preview | browser action/result |
| filesystem | inspect/write project | file operation result |
| runtime_renderer | render snapshot | generated artifact + result |

Hosts may map these to different tools. The Skill must not assume a specific tool name.

## Execution status

Every externally observable operation should be classified:

```text
planned
→ attempted
→ succeeded | failed | denied | unavailable
→ verified | unverified
```

Never convert `planned`, `attempted`, or `unavailable` into success language.

## State handoff

The host should preserve at minimum:

```text
output_mode
capability_status
intent
references
decisions
constraints
tensions
routes
tokens
current_snapshot
accepted_snapshot
preview_artifact
qa_report
```

A renderer receives only `accepted_snapshot` plus the artifact/configuration it explicitly needs.

## Host limitation

If the host cannot invoke a required capability, Design Forge should still complete all possible design reasoning and preview steps, then stop at the exact capability gate with a concrete explanation.

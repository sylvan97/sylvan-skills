---
id: decision-lifecycle
name: Decision Lifecycle
category: fundamentals
authority: advisory
summary: Treat design decisions as traceable states that can be proposed, accepted, invalidated, superseded, or rejected.
when_to_consider:
  - the user changes direction after preview
  - multiple design iterations exist
  - a renderer consumes decisions made earlier in the conversation
reasoning_triggers:
  - condition: "A new user requirement conflicts with an existing decision"
    action: "Evaluate the affected decision, preserve unaffected decisions, and mark stale or superseded decisions explicitly"
  - condition: "A downstream renderer is about to consume design output"
    action: "Require a coherent accepted snapshot rather than relying on conversational memory"
status_rules:
  - proposed: "Candidate decision not yet approved"
  - accepted: "Current decision approved for its stated scope"
  - stale: "No longer safe to apply because a dependency or requirement changed"
  - superseded: "Replaced by a newer decision"
  - rejected: "Explicitly declined"
user_questions:
  - question: "刚才的方向里，哪些部分你希望保留，哪些部分可以为了新目标调整？"
    purpose: "Avoid treating every revision as a full reset"
spec_implications:
  - area: state
    implication: "Design output should identify which decisions are active and which are stale"
  - area: renderer
    implication: "Renderer input must reference an accepted snapshot"
verification:
  - check: "Traceability"
    evidence: "Every high-impact design choice can be traced to an accepted decision or explicit agent rationale"
  - check: "Stale safety"
    evidence: "Superseded or stale decisions cannot silently affect renderer output"
common_failures:
  - relying on conversation memory alone
  - overwriting decisions without recording the change
  - rendering from the latest text without checking dependencies

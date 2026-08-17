---
id: progressive-disclosure
name: Progressive Disclosure
category: interaction
authority: advisory
summary: Reveal complexity when it becomes useful while keeping the primary path understandable.
when_to_consider:
  - many features or content items compete for attention
  - advanced controls are not needed for the primary task
  - mobile space is constrained
observable_signals:
  - every feature is visible at once
  - secondary actions compete with primary actions
  - users must scan large amounts of low-priority information
reasoning_triggers:
  - condition: "High information density conflicts with a clear primary task"
    action: "Separate primary, secondary, and deferred information"
user_questions:
  - question: "用户第一次进入这个页面时，最重要的是立刻看到全部内容，还是先完成一个核心任务？"
    purpose: "Determine whether disclosure should prioritize exploration or task completion"
spec_implications:
  - area: information_architecture
    implication: "Define what remains visible, collapsible, deferred, or moved to a deeper route"
  - area: responsive
    implication: "Use disclosure to handle constrained viewports rather than merely shrinking everything"
verification:
  - check: "Primary path"
    evidence: "A first-time user can identify the main task without opening secondary content"
  - check: "Recoverability"
    evidence: "Deferred information remains discoverable"
common_failures:
  - hiding essential information
  - excessive nesting
  - collapsing content only to make a screenshot look cleaner

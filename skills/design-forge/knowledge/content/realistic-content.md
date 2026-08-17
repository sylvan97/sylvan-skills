---
id: realistic-content
name: Realistic Content
category: content
authority: advisory
summary: Use representative content shape and length so design decisions survive contact with real content.
when_to_consider:
  - placeholder text is being used
  - article, card, table, or multilingual content length affects layout
  - empty and error states need realistic examples
observable_signals:
  - lorem ipsum hides wrapping and hierarchy problems
  - all cards have identical artificial text length
  - layout only works with short placeholder copy
reasoning_triggers:
  - condition: "Content length materially affects composition or responsive behavior"
    action: "Use realistic representative content before approving the layout"
user_questions:
  - question: "真实内容大概会是这种长度吗？如果不是，我会按真实长度调整结构。"
    purpose: "Validate content shape"
spec_implications:
  - area: content
    implication: "Define representative text lengths, image ratios, and edge cases"
  - area: responsive
    implication: "Test wrapping and overflow with realistic content"
verification:
  - check: "Content robustness"
    evidence: "Typical and long content do not break the intended hierarchy"
common_failures:
  - lorem ipsum in final validation
  - designing only for ideal short titles
  - ignoring localization or long labels

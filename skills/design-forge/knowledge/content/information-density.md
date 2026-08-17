---
id: information-density
name: Information Density
category: content
authority: advisory
summary: Manage how much information is visible without equating low density with good design.
when_to_consider:
  - users request minimalism while retaining substantial content
  - dense dashboards or knowledge bases are involved
  - pages feel crowded or excessively sparse
observable_signals:
  - too many equal-weight items are visible simultaneously
  - excessive whitespace separates related information
  - important content is buried among low-priority content
reasoning_triggers:
  - condition: "Density conflicts with readability or hierarchy"
    action: "Adjust grouping, hierarchy, disclosure, and content structure before simply adding or removing whitespace"
user_questions:
  - question: "你更在意一次看到更多内容，还是让第一次进入的人更快找到最重要的内容？"
    purpose: "Resolve density versus discoverability priority"
spec_implications:
  - area: layout
    implication: "Specify density by content role rather than applying one global spacing rule"
  - area: responsive
    implication: "Define how density changes across viewport classes"
verification:
  - check: "Priority visibility"
    evidence: "High-value content remains prominent at target density"
common_failures:
  - equating minimalism with empty space
  - shrinking typography to fit more content
  - using identical cards for all content priorities

---
id: content-hierarchy
name: Content Hierarchy
category: content
authority: advisory
summary: Organize content by user purpose and priority before choosing its visual treatment.
when_to_consider:
  - many content types coexist
  - page structure is unclear
  - visual design is being used to compensate for unclear information structure
observable_signals:
  - users cannot predict where information belongs
  - page sections have unclear purpose
  - labels and headings do not describe the relationship between content
reasoning_triggers:
  - condition: "A visual hierarchy problem may actually be an information structure problem"
    action: "Model content relationships and task priority before styling"
user_questions:
  - question: "用户来到这里最想完成什么？其次最可能想看什么？"
    purpose: "Establish content priority"
spec_implications:
  - area: information_architecture
    implication: "Define page roles, content relationships, and route depth"
  - area: layout
    implication: "Visual emphasis should follow content priority"
verification:
  - check: "Findability"
    evidence: "Representative content can be located without relying on visual decoration alone"
common_failures:
  - designing cards before defining content roles
  - treating all content as equally important
  - confusing visual variety with information hierarchy

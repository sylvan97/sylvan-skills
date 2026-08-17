---
id: design-tensions
name: Design Tensions
category: fundamentals
authority: advisory
summary: Recognize competing valid goals and resolve them deliberately instead of pretending every goal can be maximized simultaneously.
when_to_consider:
  - user requests apparently conflicting qualities
  - multiple high-value objectives compete
  - a design direction feels internally inconsistent
common_tensions:
  - immersion_vs_efficiency
  - density_vs_readability
  - expressiveness_vs_restraint
  - novelty_vs_familiarity
  - consistency_vs_contextual_fit
  - motion_vs_performance
  - minimalism_vs_discoverability
  - content_volume_vs_attention
reasoning_triggers:
  - condition: "Two desired qualities materially compete"
    action: "Name the tension, identify which side has priority, and consider contextual or progressive solutions"
user_questions:
  - question: "如果两件事不能同时做到极致，你更不愿意牺牲哪一个？"
    purpose: "Resolve priority without design jargon"
resolution_patterns:
  - "prioritize one goal"
  - "use different modes or contexts"
  - "use progressive disclosure"
  - "separate primary and secondary experiences"
  - "make the tradeoff explicit"
  - "ask the user when preference is consequential"
spec_implications:
  - area: direction
    implication: "Record the chosen priority and rejected alternative"
  - area: system
    implication: "Translate the tradeoff into contextual rules instead of a universal rule"
verification:
  - check: "Coherence"
    evidence: "The final experience does not claim to maximize mutually conflicting goals everywhere"
common_failures:
  - averaging two directions into a generic compromise
  - solving every conflict with more decoration
  - hiding tradeoffs from the user

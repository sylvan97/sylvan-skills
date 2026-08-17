---
id: motion-accessibility
name: Motion Accessibility
category: accessibility
authority: standard
authority_note: Follow applicable WCAG guidance and platform reduced-motion conventions.
summary: Treat motion as an experience layer with alternatives for people who need reduced motion.
when_to_consider:
  - cinematic or expressive motion is requested
  - transitions are frequent or large
  - parallax, zoom, or scroll-linked effects are used
observable_signals:
  - motion is essential to understanding without an alternative
  - large-scale movement dominates content
  - no reduced-motion behavior is defined
reasoning_triggers:
  - condition: "Motion is visually significant"
    action: "Define purpose, intensity, duration, and reduced-motion behavior"
user_questions:
  - question: "如果用户关闭动态效果，你希望保留哪些空间关系或反馈？"
    purpose: "Separate motion purpose from decoration"
spec_implications:
  - area: motion
    implication: "Specify meaningful motion and reduced-motion behavior"
verification:
  - check: "Reduced motion"
    evidence: "Nonessential motion can be reduced without breaking core tasks"
common_failures:
  - using motion as the only state indicator
  - adding parallax without purpose
  - treating reduced motion as an afterthought

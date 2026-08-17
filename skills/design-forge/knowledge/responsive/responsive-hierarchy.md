# Responsive Hierarchy

## Principle

Content priority may change across viewport contexts. A smaller screen is not just a smaller canvas; what is primary, secondary, or deferred can legitimately change.

## Trigger

Activate when desktop contains many simultaneous regions, when mobile becomes crowded, or when a key task differs by context.

## Non-designer question

> 如果手机上只能保留三个最重要的东西，你希望是哪三个？

## Decision

Preserve task-critical content and transform or defer secondary content. Keep the user's mental model stable while allowing the composition and interaction model to change.

## Specification implications

For each viewport class define:

- primary content
- secondary content
- deferred content
- navigation priority
- action priority
- ordering changes

## Verification

Compare task completion and comprehension rather than visual similarity between desktop and mobile.

## Common failures

- forcing every desktop element onto mobile
- hiding primary actions because they are inconvenient to place
- preserving visual order when content priority requires a different reading order
- treating responsive design as a CSS-only concern

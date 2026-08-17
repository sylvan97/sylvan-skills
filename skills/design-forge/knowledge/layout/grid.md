# Grid

## Principle

A grid is a constraint system for alignment and rhythm, not a visual requirement that every element must occupy identical columns.

## Trigger

Activate when a project has repeated sections, dense editorial content, multiple page types, or inconsistent alignment.

## Non-designer question

> 你希望页面里的内容看起来像一个严谨的系统，还是允许更自由、更像杂志排版的变化？

## Decision

Choose a grid that supports content relationships and responsive transformation. Start from content needs rather than a fashionable column count.

## Specification implications

Define:

- container behavior
- columns / tracks where useful
- gutters
- margins
- alignment anchors
- breakpoints or transformation rules

## Verification

Check repeated pages side by side. Shared content roles should align predictably while intentional exceptions remain understandable.

## Common failures

- choosing 12 columns because it is common
- forcing every component into the same grid
- preserving desktop columns on mobile
- inconsistent container widths between related pages

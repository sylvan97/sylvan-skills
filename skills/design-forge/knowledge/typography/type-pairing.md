# Type Pairing

## Principle

Multiple typefaces should have distinct roles with enough contrast and enough shared character to feel intentional.

## Trigger

Activate when more than one type family is requested or when a brand needs a distinctive typographic voice.

## Non-designer question

> 你希望不同类型的文字有明显的“角色差异”，还是整个网站保持一种统一的声音？

## Decision

Prefer a small number of complementary roles. Contrast can come from family, width, weight, size, or style; pairing is not automatically better than one family.

## Specification implications

Document:

- primary family
- secondary family if needed
- allowed roles
- fallback stack
- multilingual coverage
- loading strategy

## Verification

Review headings, body, labels, numerals, and multilingual content together. They should feel like one system rather than unrelated fonts.

## Common failures

- pairing fonts only because they look different
- too many families
- missing language glyphs
- inconsistent fallback behavior
- decorative display fonts used for long text

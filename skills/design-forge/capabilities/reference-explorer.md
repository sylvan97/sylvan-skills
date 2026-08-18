# Reference Explorer Capability

Reference exploration turns vague aesthetic language into inspectable, real-world evidence.

## When to use

Use when the user:

- cannot describe a visual direction precisely;
- uses subjective terms such as cinematic, editorial, premium, playful, technical, calm, brutalist, or minimal;
- asks for examples/inspiration;
- needs help choosing between design directions.

Do not browse just to decorate a response when the user's direction is already concrete and no reference would change a decision.

## Search procedure

1. Extract the design dimensions that need evidence:
   - composition
   - typography
   - density
   - color
   - imagery
   - navigation
   - interaction
   - motion
   - responsive behavior
2. Search for 3–6 candidate sites using current, relevant web results.
3. Prefer first-party/product sites and credible design publications when they are materially useful.
4. Reject candidates that are inaccessible, irrelevant, primarily template galleries without inspectable product behavior, or obvious copies of another candidate.
5. Select 2–4 references with distinct strengths. Avoid presenting near-duplicates.
6. For each reference, tell the user exactly what to inspect.
7. State that references are evidence/inspiration, not templates to copy.

## Reference record

```yaml
name:
url:
relevance:
inspect:
  - composition
  - typography
  - density
  - interaction
strength:
limitations:
source_type: first_party | editorial | gallery | community
checked_at:
```

## User-facing format

Prefer:

> **方向 A — Editorial / cinematic**
> 看这个站的：首页首屏构图、标题比例、内容密度。
> 它值得借鉴的是“视觉叙事 + 内容层级”，不是具体组件。

Keep the shortlist small. The user is choosing a direction, not conducting design research.

## Evidence policy

- Do not claim a site currently behaves in a way that was not inspected.
- Do not invent URLs.
- If browsing is unavailable, say so and offer known references only when their URLs are verified by the host/tool.
- If search results conflict or the site is unavailable, mark the uncertainty instead of guessing.
- Cite/link the actual site so the user can inspect it themselves.

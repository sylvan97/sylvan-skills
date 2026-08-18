# Reference Explorer Capability

Reference exploration turns vague aesthetic language into inspectable, real-world evidence.

## When to use

Use when the user:

- cannot describe a visual direction precisely;
- uses subjective terms such as cinematic, editorial, premium, playful, technical, calm, brutalist, ACG, anime, game-like, or minimal;
- asks for examples/inspiration;
- needs help choosing between design directions.

Do not browse just to decorate a response when the user's direction is already concrete and no reference would change a decision.

## Local seed library

Before or alongside web exploration, load only the relevant local seed files. These are principle-oriented starting points, not a substitute for current web inspection:

- `references/editorial-layouts.md`
- `references/cinematic-density.md`
- `references/acg-workbench.md`
- `references/diegetic-ui.md`
- `references/spatial-navigation.md`

Add or load a seed only when it is relevant to the current design question. Do not load the entire reference directory by default.

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
4. When the problem is creative rather than purely UI-specific, search beyond websites: film, architecture, editorial, games, digital art, exhibitions, photography, and other relevant disciplines.
5. Reject candidates that are inaccessible, irrelevant, primarily template galleries without inspectable product behavior, or obvious copies of another candidate.
6. Select 2–4 references with distinct strengths. Avoid presenting near-duplicates.
7. For each reference, tell the user exactly what to inspect.
8. State that references are evidence/inspiration, not templates to copy.

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
source_type: first_party | editorial | gallery | community | cross_disciplinary
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

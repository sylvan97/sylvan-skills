# Frontend Project Discovery

## Purpose

When the user chooses frontend delivery, determine where the design should actually be implemented.

## Step 1 — inspect the working directory

Classify it as:

```text
empty
existing project
unknown / unsafe
```

Do not create files before this classification.

## Empty directory

Create the default Design Forge frontend project.

Requirements:

- immediately previewable
- simple structure
- multiple routes when the experience needs them
- minimal dependencies
- clear README/run command
- no unnecessary production infrastructure

## Existing project

Inspect before modifying:

- package manager
- framework
- build tool
- router
- source directories
- route definitions
- page components
- existing layout
- design tokens
- component library
- assets
- start/dev command

Then map the requested experience to concrete files and routes.

Example:

```text
Next.js App Router

app/
├── page.tsx
├── works/page.tsx
└── works/[slug]/page.tsx
```

A request for the home page should normally map to `app/page.tsx`, not to a new standalone preview project.

## Safety

Do not rewrite unrelated project structure.

Do not introduce a second framework just for the design task.

Do not overwrite an existing design system when reusable primitives already exist.

If the requested target cannot be identified with reasonable confidence, ask a focused question before writing.

## Output

Produce an implementation map:

```yaml
project_type:
framework:
router:
entry:
target_routes: []
target_files: []
reusable_components: []
design_tokens: []
preview_command:
unknowns: []
```

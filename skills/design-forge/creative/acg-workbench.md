# ACG / Workbench Creative Territories

ACG is a creative territory, not a single visual style. Design Forge may use anime, manga, visual novel, mecha, game HUD, cyberdeck, creator workstation, command-center, or otaku desktop references when they genuinely fit the user's intent.

## Core idea

The goal is not "make it anime". The goal is to make the interface feel like a **place, instrument, machine, studio, or fictional operating environment** that the user inhabits.

Prefer world-building and interaction logic over decorative anime assets.

## Territories

### 01 — Anime Control Room

Mental model: the user enters a character's / operator's private command center.

Characteristics:
- layered modules with clear priority
- status readouts and contextual telemetry
- character/identity anchor
- command-oriented navigation
- responsive panels rather than generic cards
- subtle scan, focus, and state transitions

Good for: knowledge bases, personal dashboards, creator workspaces, project control centers.

Avoid: random HUD lines, fake coordinates, excessive neon.

### 02 — Creator Workbench

Mental model: a digital desk where unfinished thoughts, references, drafts, tools, and finished work coexist.

Characteristics:
- desktop/window metaphor
- movable or stackable work surfaces when useful
- tool palette / quick actions
- pinned artifacts
- activity history
- dense but intentional information
- keyboard-first shortcuts can be part of the fiction

Good for: personal knowledge systems, research, design/engineering notes, asset libraries.

### 03 — Mecha / System Console

Mental model: operating a machine or mission system.

Characteristics:
- system states
- diagnostics
- modular instrumentation
- technical typography
- segmented controls
- deployment / synchronization metaphors
- transitions that feel mechanical or procedural

Good for: technical knowledge, engineering, AI, system-heavy products.

### 04 — Visual Novel / Character Archive

Mental model: the user is exploring a character's memory, timeline, relationships, and collected scenes.

Characteristics:
- scene-based transitions
- chapter / route structure
- portrait or illustration used as narrative anchor
- dialogue-like microcopy
- timeline and relationship navigation
- emotional pacing

Good for: personal stories, travel, life records, creative archives.

### 05 — Tactical Map / Mission Board

Mental model: a living map of missions, topics, projects, or discoveries.

Characteristics:
- spatial relationships
- progress/state markers
- clusters and routes
- zoom and drill-down
- contextual information revealed on selection
- strong desktop experience with thoughtful mobile fallback

Good for: knowledge graphs, project systems, collections, research.

### 06 — Otaku Desktop / Digital Bedroom

Mental model: a deeply personal digital room rather than a formal website.

Characteristics:
- layered windows
- wallpapers / visual anchors
- widgets and pinned objects
- playful micro-interactions
- personal artifacts
- deliberately heterogeneous but governed by a coherent system

Good for: personal sites, collections, fandom, creative portfolios, hobby archives.

### 07 — Diegetic Interface

Mental model: the UI exists inside the fictional world.

Instead of placing ordinary web controls over an anime background, ask what the character, machine, organization, or world would actually use.

Examples:
- an article becomes a recovered document;
- a project becomes a mission;
- a tag becomes a system classification;
- search becomes a scanner;
- settings become calibration;
- navigation becomes a terminal / command console.

This is often more distinctive than adding anime artwork to conventional UI.

## ACG visual grammar

Possible ingredients, selected according to concept:

- Japanese editorial typography
- kana/kanji as secondary graphic texture only when semantically appropriate
- manga panel composition
- halftone / screentone
- speed lines
- HUD brackets
- technical annotations
- blueprint diagrams
- pixel UI
- CRT / scanline treatment
- mecha schematics
- translucent system panels
- character silhouettes / portraits
- cel-shaded illustration
- chromatic separation
- controlled glow
- hard geometric framing
- sticker / badge / collectible language

These are **ingredients**, not a checklist. Never apply all of them at once.

## Workbench interaction grammar

When the concept calls for a workstation, consider:

- window open/close/minimize
- drag / dock / stack
- command palette
- keyboard shortcuts
- focus mode
- workspace switching
- timeline scrub
- zoom/pan canvas
- scan/reveal
- system boot / sync states
- contextual HUD
- persistent session state

Interactions must have a reason. A fake terminal that does nothing is decoration.

## ACG restraint

Avoid the generic "anime cyberpunk" trap:

```text
black background
+ cyan/magenta neon
+ Japanese characters
+ glow
+ HUD corners
+ random numbers
= NOT A CONCEPT
```

A valid concept must have a distinct mental model and information behavior.

For example:

> "The knowledge base behaves like a creator's command desk: notes arrive as incoming signals, active ideas occupy the main workbench, and archived material is filed into a searchable mission log."

That is a concept.

## Reference strategy

When ACG/workbench direction is relevant, expand references across:

- anime and visual novel interfaces
- AAA game HUD / menu systems
- mecha and sci-fi system design
- Japanese editorial/web design
- creator tools and digital workstations
- cyberdeck / fictional OS interfaces
- manga panel composition
- experimental interactive fiction

For example, the *Cyberpunk 2077* UI work is useful not because it should be copied, but because its team explicitly developed an interface art bible covering typography, color, building blocks, layout, and HUD construction. citeturn0search0turn0search6

The important lesson is to derive a **UI world and rule system**, not merely a palette. Diegetic UI research also shows how interface can belong to the fiction itself rather than sit on top of it. citeturn0search5

## Responsive rule

ACG/workbench concepts are often desktop-first, but mobile must not become a shrunken desktop.

Define a transformation such as:

```text
Desktop: multi-window workstation
Tablet: focused workspace + secondary tray
Mobile: single active surface + command drawer
```

or:

```text
Desktop: spatial map
Tablet: zoomable map + detail sheet
Mobile: ranked list + contextual map preview
```

The mental model survives even when the spatial composition changes.

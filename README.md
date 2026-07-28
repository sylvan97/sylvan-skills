# sylvan-skills

Personal skills and tools for Claude Code.

---

## design-generator

Generate websites and web interfaces in specific design styles or with custom design planning.

### Usage

```
/design-generator
```

Or use natural language:
- "生成一个 Apple 风格的页面"
- "帮我做个博客页面"
- "create a dashboard"
- "用 Spotify 风格创建一个落地页"

### Features

**Three Design Approaches:**
1. **Brand Style** - Apple, Spotify, Stripe, Linear, etc. (66+ presets)
2. **Custom Design** - Use frontend-design + ui-ux-pro-max for creative planning
3. **Direct Generate** - High-quality code without style consultation

**Workflow:**
1. Identify design approach (ask user if not specified)
2. Analyze design system or use creative planning
3. Generate production-ready code
4. Validate output (no AI aesthetics, no placeholders)
5. Present to user
6. (Optional) Generate `agents.md` design spec in project root

### Available Styles (66+)

| Category | Brands |
|----------|--------|
| AI & LLM | OpenAI, Anthropic, Claude, xAI, Cohere, MistralAI, Ollama... |
| Tech & Consumer | Apple, Spotify, NVIDIA, SpaceX, Uber, PlayStation... |
| Automotive | Tesla, BMW, Ferrari, Lamborghini, Bugatti... |
| Developer Tools | GitHub, Vercel, Cursor, Raycast, Expo... |
| E-commerce | Shopify, Nike, Airbnb, Meta... |
| Fintech & Crypto | Stripe, Coinbase, Binance, Wise... |
| Design & Creative | Figma, Framer, Canva, Adobe... |
| Productivity & SaaS | Linear, Notion, Slack, Resend, Cal.com... |

### Installation

1. Download `skills/design-generator/design-generator.skill`
2. Place it in `~/.claude/skills/` directory
3. Restart Claude Code

---

## super-novelist

Write novels in Chinese or English with anti-AI writing principles.

### Usage

```
/super-novelist
```

Or use natural language:
- "写一个悬疑小说"
- "创作一个奇幻故事"
- "写小说"
- "帮我写一章"

### Features

- **Bilingual** - Chinese and English novels
- **All genres** - Mystery, romance, sci-fi, fantasy, historical, etc.
- **Any length** - Short (1-3 chapters), medium (5-15), long (20-50)
- **Anti-AI writing** - No clichés, no clichés, natural dialogue
- **Character consistency** - No role drift, each character has full emotions
- **Occasional profanity** - Realistic expression when appropriate

### Installation

1. Download `skills/super-novelist/super-novelist.skill`
2. Place it in `~/.claude/skills/` directory
3. Restart Claude Code

---

## docs/frontend-aesthetics

Design philosophy and guidelines for frontend development:

- **agents.md** - Frontend Design Agent specifications (anti-AI-aesthetics principles)

---

## Demo Pages

Test pages generated with the skill:

| File | Description | Style |
|------|-------------|-------|
| `index.html` | Documentary streaming platform | The Verge style, dark |
| `nota.html` | Note-taking app with theme toggle | Warm editorial, light/dark |
| `codeNav.html` | Developer resources navigation | Dark tech, cyan accents |

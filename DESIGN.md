# React AI ChatKit — Landing Page Design

Version documented: **react-ai-chatkit v1.1.0** (pinned exact in `package.json`)

## Purpose

A single-page marketing site for the published npm package. Its job is to show
the real component working, not to describe it. The page renders the actual
`AIChatBox` from npm twice — once in the hero, once in an interactive playground.

## Verified facts this page is allowed to claim

Everything below was read from `node_modules/react-ai-chatkit` (v1.1.0), not from
the package README.

| Fact | Source |
| --- | --- |
| `AIChatBox` is the only component; `Message`, `AIChatBoxProps`, `ChatTheme`, `ChatColors`, `getChatColors` are the other exports | `dist/index.d.ts` |
| Markdown + GFM, syntax highlighting (Prism, `oneDark`/`oneLight`) | `dist/index.mjs` |
| Per-message copy, shown on hover for AI messages | `dist/index.mjs` |
| `onRegenerate` / `regenerateLabel` | `dist/types.d.ts` |
| `emptyStateTitle`, `emptyStateDescription`, `emptyStateContent` | `dist/types.d.ts` |
| `showTimestamps`, `timestampFormatter`, `subtitle`, `header`, `headerActions` | `dist/types.d.ts` |
| Textarea auto-resizes up to 160px | `dist/index.mjs` |
| Internal scroll only — `messagesContainerRef.current.scrollTo(...)` | `dist/index.mjs` |
| MIT, React `>=18.0.0` peer, 3 runtime deps (`react-markdown`, `remark-gfm`, `react-syntax-highlighter`) | `package.json` |

### Claims that were deliberately removed

The pre-v1.1.0 copy asserted things the package does not do. They are gone:

- ~~"Responsive — adapts to any screen size"~~ — the default `width` is a fixed
  `"450px"` with no viewport clamping. It is fluid *inside*; you control the outer
  box with the `width` prop (`"100%"` on the hero).
- ~~"Zero dependencies"~~ — it ships three runtime dependencies.
- ~~"100% written in TypeScript"~~ — unverifiable from the published tarball.
  The `Types` stat now says "0 config", which is directly observable.

## Scroll behaviour

Earlier versions of this page called `scrollIntoView` on mount, which threw the
user to the bottom of the document and broke refresh restoration and deep links.

That call lived in the **package**, not here. v1.1.0 replaced it with
`container.scrollTo()` scoped to the internal message list. The site-side
workaround is therefore **deleted**, not disabled:

```tsx
// removed from App.tsx
history.scrollRestoration = "manual";
window.scrollTo({ top: 0, behavior: "instant" });
```

`App.tsx` is now a plain section list. Browser scroll restoration, `/#playground`
deep links and `scroll-mt-24` anchor offsets all work natively again.

## Demo honesty

No model is connected anywhere on this page. The simulation is centralised in
`src/demo.ts` so the claims stay in one place:

- `EXAMPLE_PROMPTS` — four clickable starters, each mapped to a canned reply.
- `buildReply(text, attempt)` — keyword-matches the prompt, returns canned
  Markdown, and appends `DEMO_NOTICE` to every reply.
- `attempt > 0` returns a different "Second attempt" body, so the regenerate
  button visibly does something.

Three layers of disclosure, because one is easy to miss:

1. `DemoNotice` badge beside both chat surfaces.
2. `_Simulated reply — no AI model is connected._` at the foot of every reply.
3. The playground section description.

`src/demo.check.ts` is a runnable assert-based check of the reply/attempt logic:

```
node src/demo.check.ts
```

## Section order

| # | Section | Job |
| --- | --- | --- |
| 1 | Hero | Value proposition + live component + starter prompts |
| 2 | Features | 12 capabilities, one per shipped prop |
| 3 | Playground | Every control bound to a real prop |
| 4 | Installation | npm / pnpm / yarn tabs with copy |
| 5 | Usage | One minimal, correct integration |
| 6 | Why ChatKit | Without / with comparison |
| 7 | Stats | Four verified facts |

## Playground controls

Bound to real v1.1.0 props: `theme`, `primaryColor`, `width`, `height`,
`showHeader`, `showAvatars`, `showTimestamps`, `showSendButton`, `isTyping`,
`title`, `subtitle`, `placeholder`, `emptyStateContent`.

It starts with **zero messages** so `emptyStateContent` renders the prompt chips —
the props are demonstrated, not just set.

### One deliberate design decision

The old playground had a `showCopyButton` switch that did nothing. In v1.1.0
`MessageActions` is only mounted when `onRegenerate` is set, and the copy button
lives inside it. There is no way to show copy without regenerate.

So the two switches became one honest control, **"Copy & regenerate"**, with the
description "Needs onRegenerate — copy only appears with it". One switch instead
of two, and it matches the real API instead of implying a false independence.

## Code sample policy

`CodeExample.tsx` shows a minimal, runnable integration: real imports, real
`Message` shape, a real `postToYourApi()` seam, and a real
`onSendMessage` round trip. No `console.log` stub, no pseudo-code, no prop that
does not exist. The sample is hand-highlighted with the local `k/c/t/s/a/p/f`
span helpers — there is no highlighter dependency for the page's own UI.

## Social and SEO

`index.html` carries title, description, keywords, Open Graph and Twitter card
metadata with `og:image:width`/`height` and alt text.

Assets are real PNGs, rendered once with .NET `System.Drawing` (no new
dependency, no image tooling in the repo):

- `public/og.png` — 1200×630 social card
- `public/apple-touch-icon.png` — 180×180
- `public/favicon.svg` — brand mark

Previously `og:image` pointed at the 24×24 favicon, which renders as a broken
thumbnail on every platform.

## Accessibility

- Toggles use `role="switch"` + `aria-checked`; colour swatches have `aria-label`;
  theme tabs use `aria-pressed`.
- Text inputs in the playground are `sr-only` labelled.
- Decorative glows and grid overlays are `aria-hidden`.
- Full keyboard reachability, visible focus rings, and a skip-free single-column
  flow on small screens.

## Known non-goals

- **No code splitting.** The bundle is ~350 kB gzipped, dominated by the real
  package's `react-markdown` + `react-syntax-highlighter`. The page shows the real
  component on load; splitting it away would be theatre.
- **No i18n, no dark/light site theme.** The site is intentionally dark-only;
  the *component's* theming is a playground control.
- **No npm `audit fix`.** The install reports one high-severity advisory from
  the dependency tree. Fixing it means changing the package's dependencies, which
  is out of scope here.

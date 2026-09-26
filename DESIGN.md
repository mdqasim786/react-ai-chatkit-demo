# DESIGN.md — React AI ChatKit Landing Page

Documentation of the single-page landing site for the npm package **react-ai-chatkit**.
Written to be the reference for anyone editing, reviewing or extending the page.

---

## 1. What this page is about

This is the **official marketing + documentation landing page** for `react-ai-chatkit`,
a React + TypeScript chat UI component for AI assistants, SaaS apps and chatbots.

The page has exactly one job: **convince a developer to install the package.**
Everything on the page is organised around that single goal — show the product
working, let them play with it, show how small the install is, and prove the value.

The library itself is a **dependency of this site**, not part of it. The site never
reimplements or wraps the chat component — it renders the real `<AIChatBox />` twice
(hero demo + playground) so visitors interact with the actual published package.

---

## 2. Purpose and audience

| | |
|---|---|
| **Audience** | Front-end / full-stack developers evaluating a chat UI for a React product |
| **Goal** | Get them to `npm install react-ai-chatkit` |
| **Tone** | Premium, minimal, fast, developer-focused — no marketing fluff |
| **Voice** | Declarative feature names + one short sentence each |

### Reference design language
Modelled on the visual language of **Vercel, shadcn/ui, Linear and OpenAI**:
dark-first, generous whitespace, soft borders, subtle gradients, restrained motion,
tight typographic scale.

---

## 3. Tech stack

| Concern | Choice |
|---|---|
| Framework | React 19 (`react`, `react-dom`) |
| Language | TypeScript (~6.0), `verbatimModuleSyntax`, `noUnusedLocals` |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Runtime deps | **Only** `react-ai-chatkit` — no icon library, no UI kit, no animation library |
| Lint | ESLint 10 flat config + `typescript-eslint` + `react-hooks` |

**Hard constraint — no new libraries.** Every icon is a hand-written inline SVG in
`src/components/ui/icons.tsx`. Every animation is a CSS transition or a native
IntersectionObserver. Reveals use a custom hook, not Framer Motion.

### Commands

```bash
npm run dev       # vite dev server
npm run build     # tsc -b && vite build
npm run lint      # eslint .
npm run preview   # serve the production build
```

---

## 4. Design tokens

Defined in `src/index.css`.

### Colour
Dark-first. Zinc is the neutral ramp; violet is the brand accent; fuchsia/cyan are
gradient partners only.

| Token | Value | Role |
|---|---|---|
| Page background | `#09090b` (`zinc-950`) | Body, set in CSS |
| Card surface | `zinc-900/50` | Section cards, control panel |
| Card border | `zinc-800` | Default hairline border |
| Muted text | `zinc-400` | Body copy |
| Faint text | `zinc-500` | Labels, captions |
| Heading text | `white` / `zinc-100` | Titles |
| Brand | `violet-600` `#7c3aed` | Primary buttons, active states |
| Brand light | `violet-400` / `violet-300` | Accent text, icons |
| Gradient partners | `fuchsia-400`, `cyan-400` | Hero gradient text, glows |
| Success | `emerald-400` | Live dot, "Copied" state |

### Typography
- **Inter** (400–800) — all UI and body, loaded from Google Fonts with `preconnect`.
- **JetBrains Mono** (400–600) — code blocks, terminal commands, numeric readouts,
  version strings. Applied via `font-mono` and `tabular-nums` on slider values.
- Headings are **bold with `tracking-tight`**; the hero uses a larger responsive
  clamp (`text-4xl` → `text-6xl`).

### Shape, border, depth
- Radii: `rounded-xl` (controls, buttons) and `rounded-2xl` (cards, sections).
- Borders: 1px `zinc-800`, brightening to `violet-500/50` on interactive hover.
- Shadows are used sparingly and are all violet-tinted to match the brand:
  `shadow-[0_12px_40px_-12px_rgba(139,92,246,0.4)]`.
- Glow: a large blurred gradient div (`blur-3xl`) placed behind hero cards.

### Spacing rhythm
- Section padding: `py-24` on mobile, `sm:py-32` on larger screens.
- Container: `mx-auto max-w-7xl px-6`.
- Section ids carry `scroll-mt-24` so anchor navigation clears the fixed navbar.

### Motion
Motion is a **transition**, not an animation library. Nothing bounces, nothing loops
except the live-status ping.

- Hover/press: `transition` / `transition-all duration-300`.
- Buttons: `active:scale-[0.98]`, primary button also lifts its glow shadow.
- Section reveal: 700ms fade + `translate-y-6 → 0`, once per element.
- Reduced-motion friendly: reveal hooks treat missing `IntersectionObserver` as "visible".

---

## 5. Page structure

One page, one scroll. `src/App.tsx` composes the sections in narrative order:

```
Navbar                       (fixed, always visible)
main
├── Hero                     #top          the promise + live demo
├── Features                 #features     what it does
├── Playground               #playground   try it, don't read about it  ← centrepiece
├── Installation             #install      the ask
├── CodeExample              —             proof it's a normal import
├── WhyUse                   #why          the comparison
└── Stats                    —             the credibility
Footer
ScrollToTop                  (fixed, appears after 600px)
```

`App.tsx` also owns one global behaviour (see §11, Scroll behaviour) — force the page
to the top on load and disable browser scroll restoration.

---

## 6. Section-by-section breakdown

### 6.1 Navbar — `src/components/Navbar.tsx`

Fixed at the top, transparent until the user scrolls.

- **Left:** `Logo` + "React AI ChatKit", links back to `#top`.
- **Centre (desktop):** Features · Playground · Install · Why ChatKit?
  - **Active highlighting** via a scroll-spy: on every scroll event, each tracked
    section's `offsetTop` is compared to `scrollY + 120px`; the last match wins and is
    rendered in white.
- **Right (desktop):** GitHub icon button + npm chip button, both external links.
- **Scrolled state:** past 16px the bar gains `border-b`, `bg-zinc-950/80` and
  `backdrop-blur-xl`.
- **Mobile:** a menu button toggles a dropdown panel with the same links; the panel
  inherits the blurred background. The button is `aria-expanded` and swaps a
  menu/close icon.

### 6.2 Hero — `src/components/Hero.tsx`

The first impression. Two-column grid (`lg:grid-cols-2`) over a decorated background.

- **Background:** masked `bg-grid` pattern + three blurred radial glows
  (violet top, cyan left, fuchsia right) — all `aria-hidden`.
- **Version badge:** a pulsing emerald dot, a violet `v1.0.2` chip, and "now on npm".
- **Heading:** `text-4xl → text-6xl`, bold, `tracking-tight`, with
  "AI chat interfaces" in a `violet → fuchsia → cyan` gradient (`bg-clip-text`).
- **Value proposition:** one short paragraph, `max-w-xl`, `zinc-400`.
- **Three CTAs:**
  1. **Get Started** — solid violet gradient, shadow, `Get Started` + a down arrow that
     nudges down on hover. Links to `#playground` (smooth scroll via CSS).
  2. **GitHub** — bordered outline button with the GitHub mark.
  3. **npm** — bordered outline button with the npm mark.
- **Trust row:** "MIT licensed · React 18+ · Fully typed" with coloured dots.
- **Live chat card (right):** the real `<AIChatBox />` inside a premium card —
  a blurred gradient halo behind, then `rounded-2xl border border-zinc-800
  bg-zinc-900/40 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl`.
  Width `100%`, height `520px`, dark theme, `#7c3aed`. It runs the real
  welcome message and replies with a fenced code block when you send one.

### 6.3 Features — `src/components/Features.tsx`

Twelve cards in a `sm:2 / lg:3` grid, data-driven from a `FEATURES` array.

Each card: **icon → title → one-sentence description**. The data doubles as the copy
source, so cards are never hand-written twice.

| Feature | Description |
|---|---|
| Markdown Rendering | Render Markdown out of the box. |
| Syntax Highlighting | Beautiful code blocks in seconds. |
| Typing Indicator | Show users when AI is responding. |
| Copy Messages | One-click copy on every message. |
| Responsive Design | Adapts to any screen size. |
| Dark & Light Themes | Themes that match your brand. |
| TypeScript Support | Fully typed props and autocomplete. |
| Custom Colors | Tune the primary color in seconds. |
| Auto-resizing Textarea | The input grows with your message. |
| Message Animations | Smooth, subtle entrance motion. |
| AI & User Avatars | Custom avatars for both sides. |
| Highly Customizable | Header, buttons, layout — your way. |

**Card hover:** lift `-translate-y-1`, border brightens to `violet-500/50`, a violet
shadow appears, and a gradient overlay fades in. Icon sits in a rounded box that
tints violet on hover.

### 6.4 Playground — `src/components/Playground.tsx` *(the centrepiece)*

The interactive proof. Two columns: `lg:grid-cols-[340px_1fr]`.

**Left: control panel** — a card that is `lg:sticky lg:top-24`, so it stays in view
while the preview is used. Controls are grouped under small uppercase labels
(`ControlGroup`) into five groups:

| Group | Controls |
|---|---|
| **Theme** | Segmented Dark / Light control |
| **Primary Color** | 8 preset swatches + a native colour picker with a `+` badge |
| **Layout** | Header · Avatars · Timestamps |
| **Behavior** | Copy button · Send button · Typing indicator |
| **Sizing** | Width slider · Height slider |
| **Content** | Live title input · Live placeholder input |

- Toggles use the custom `Switch` (not raw checkboxes) — a `role="switch"` button
  with a sliding thumb, an `aria-checked` state and an accessible name.
- Sliders use the custom `Slider` — a native `range` input with a violet fill that
  tracks the value, plus a monospaced live readout (`420px`).
- Every control is bound to component state and passed straight into `<AIChatBox />`,
  so changes render **instantly**. The typing toggle is combined with the live
  conversation state: `isTyping={showTyping && isTyping}`.

**Right: live preview** — a rounded, bordered panel with a violet glow, centring the
`<AIChatBox />` at the exact width/height the sliders specify.

The playground owns its own conversation via the shared `useChat` hook, so sending a
message produces a genuine Markdown + syntax-highlighted reply.

### 6.5 Installation — `src/components/Installation.tsx`

A terminal-style card, capped at `max-w-2xl` for a comfortable line length.

- **Window chrome:** three dots and a `terminal` label.
- **Tabs:** npm / pnpm / yarn, with a violet underline on the active tab and
  `aria-pressed`.
- **Command:** rendered in a `$` prompt with the package name in emerald and the
  manager in grey, so the important token is visually distinct.
- **Copy button** in the header copies the *currently active* command.

| Tab | Command |
|---|---|
| npm | `npm install react-ai-chatkit` |
| pnpm | `pnpm add react-ai-chatkit` |
| yarn | `yarn add react-ai-chatkit` |

### 6.6 CodeExample — `src/components/CodeExample.tsx`

A `Chat.tsx` window proving the component is a normal, typed React import.

- Mac-style traffic-light dots + filename + **Copy code** button.
- 18 numbered lines of TSX with hand-authored syntax colours:
  keywords `fuchsia-400`, component `violet-300`, types `cyan-300`, strings
  `emerald-300`, props `sky-300`, punctuation `zinc-300`.
- Copy uses a single `RAW_CODE` string, so the clipboard output is valid,
  copy-pasteable TypeScript.
- Small helper components (`k`, `c`, `t`, `s`, `a`, `p`) keep the markup readable
  instead of one enormous literal string.

### 6.7 WhyUse — `src/components/WhyUse.tsx`

A side-by-side comparison instead of paragraphs. Deliberately **not** a feature table —
it contrasts effort.

**Without React AI ChatKit** (muted card, ✕ rows):
build a Markdown renderer · build a typing indicator · build copy buttons ·
hand-roll a responsive layout · wire up theme support · maintain custom colors.

**With React AI ChatKit** (violet-bordered gradient card, ✓ rows, `v1.0.2` chip):
ready immediately, zero config · Markdown & syntax highlighting included ·
typing indicator built in · responsive out of the box ·
dark & light themes included · fully customizable in seconds.

The right card carries a gradient hairline on its top edge and a violet glow to signal
"this is the good path".

### 6.8 Stats — `src/components/Stats.tsx`

Four credibility cards in a `sm:2 / lg:4` grid. Icon + value + caption.

| Value | Caption |
|---|---|
| `v1.0.2` | Latest stable release |
| `MIT` | Open source, free forever |
| `18+` | Supports React 18 and 19 |
| `100%` | Written in TypeScript |

### 6.9 Footer — `src/components/Footer.tsx`

- Logo + one-line description, two link columns (**Explore**, **Links**).
- **Links:** GitHub, npm, MIT License — all external, `rel="noopener noreferrer"`.
- Bottom bar: "Made with ♥ by **Muhammad Qasim**" linking to the author's GitHub,
  and `© {year} React AI ChatKit. MIT License.` (year is generated at render).

### 6.10 ScrollToTop — `src/components/ScrollToTop.tsx`

A fixed bottom-right button that fades in after 600px of scroll, with a translate +
opacity transition and a disabled state while hidden so it can't be clicked
invisibly. Calls `window.scrollTo({ top: 0, behavior: "smooth" })`.

---

## 7. Component inventory

```
src/
├─ main.tsx                       React 19 root, StrictMode
├─ App.tsx                        Section composition + scroll reset
├─ index.css                      Tokens, base styles, form styling, .bg-grid
├─ hooks/
│  ├─ useChat.ts                  Fake AI conversation state (shared by hero + playground)
│  └─ useInView.ts                IntersectionObserver "has this entered the viewport" hook
└─ components/
   ├─ Navbar.tsx                  Fixed nav, scroll-spy, mobile menu
   ├─ Hero.tsx                    Badge, headline, 3 CTAs, live chat card
   ├─ Features.tsx                12 data-driven feature cards
   ├─ Playground.tsx              Centrepiece: control panel + live preview
   ├─ Installation.tsx            npm/pnpm/yarn tabs + copy
   ├─ CodeExample.tsx             Syntax-highlighted TSX + copy
   ├─ WhyUse.tsx                  Without/with comparison
   ├─ Stats.tsx                   4 stat cards
   ├─ Footer.tsx                  Links, credit, copyright
   ├─ ScrollToTop.tsx             Floating back-to-top button
   └─ ui/
       ├─ Logo.tsx                Gradient chat-bubble + bolt mark
       ├─ icons.tsx               All inline SVG icons (incl. GitHub, npm)
       ├─ Switch.tsx              role="switch" toggle
       ├─ Slider.tsx              Range input with progress fill + readout
       ├─ CopyButton.tsx          Clipboard copy with "Copied" feedback
       ├─ Reveal.tsx              Scroll-reveal wrapper (uses useInView)
       └─ SectionHeading.tsx      Eyebrow + title + description
```

**Shared primitives** exist so the page has one implementation of each idea:
`Switch` is used 6×, `Slider` 2×, `CopyButton` 2×, `Reveal` in every section,
`SectionHeading` in every section. Reusable, no duplication.

### The `AIChatBox` prop surface used

The site uses the real published component, so it is limited to its actual API:
`title, messages, placeholder, onSendMessage, width, height, theme, primaryColor,
isTyping, showHeader, showAvatars, showCopyButton, showSendButton, showTimestamps`.

**`AIChatBox` is never modified, wrapped or re-implemented.**

---

## 8. Responsiveness

| Breakpoint | Behaviour |
|---|---|
| **Mobile** (`< 640px`) | Single column everywhere. Navbar collapses to a menu button. Playground stacks controls above the preview; sliders stay full-width. Footer columns stack. Hero CTAs wrap. |
| **Tablet** (`640–1024px`) | 2-column grids (features, stats, comparison). Hero and playground still stack. |
| **Desktop** (`> 1024px`) | Full layout: hero 2-up, features 3-up, playground `340px + 1fr` with sticky controls, stats 4-up. |

Fluid throughout — no fixed pixel widths except the intentionally constrained code
and terminal blocks. The chat preview width is itself a user-controlled slider.

---

## 9. Accessibility

- **Landmarks:** `<header>`, `<nav aria-label="Main">`, `<main>`, `<footer>`.
- **Heading order:** one `<h1>` (hero), `<h2>` per section, `<h3>` for cards.
- **Focus:** a global violet `:focus-visible` outline in `index.css` — never removed.
- **Toggles:** `role="switch"` + `aria-checked` + `aria-label` (not fake checkboxes).
- **Sliders:** native `<input type="range">` with `aria-label` and a visible value.
- **Tab controls:** real `<button>`s with `aria-pressed`.
- **Mobile menu:** `aria-expanded` + a label that changes with state.
- **Decorative layers:** every glow, grid, gradient and blur is `aria-hidden`.
- **Colour contrast:** body text is `zinc-400` on `zinc-950`; headings are white.
  Violet accents are decorative only and never the sole carrier of meaning.
- **Icons:** all decorative SVGs are `aria-hidden`; icon-only buttons carry labels.

---

## 10. SEO & metadata

Set in `index.html`:

- **Title:** "React AI ChatKit — Beautiful AI Chat Interfaces for React"
- **Meta description:** full component pitch, used verbatim for `og:description` and
  `twitter:description`.
- **Keywords** and **author** ("Muhammad Qasim").
- **Open Graph:** `og:type`, `og:title`, `og:description`, `og:image`.
- **Twitter card:** `summary` with title, description, image.
- **`theme-color`** `#09090b` for the mobile browser chrome.
- **Favicon:** `public/favicon.svg` — a clean, hand-written violet→fuchsia chat bubble
  with a white bolt (no `display-p3` or filter tricks, so it renders in every browser).
  Loaded via `<link rel="icon">`.
- **Fonts:** preconnected to Google Fonts, so text never flashes unstyled.

---

## 11. Scroll behaviour

**CSS:** `html { scroll-behavior: smooth }` makes every anchor link glide.
Sections use `scroll-mt-24` so the fixed navbar never covers a section heading.

**Force-to-top on load — `App.tsx`:**

```tsx
useEffect(() => {
  history.scrollRestoration = "manual";
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);
```

This exists because of a real bug. `AIChatBox` runs

```js
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
```

on mount. The page renders **two** `AIChatBox` instances; the playground one sits below
the fold, so on every refresh the library scrolled the whole page down to it. The
`App` effect runs *after* all child effects, so this instant scroll cancels the
library's smooth scroll and the page always opens on the hero.
`scrollRestoration = "manual"` stops the browser restoring a previous position.

In-page navigation (Get Started, nav links, scroll-to-top) is unaffected.

---

## 12. Performance notes

- **No runtime dependencies** beyond React and the library itself.
- **No icon library** — icons are inline SVG, tree-shaken with the components.
- **Reveal-on-scroll** uses a native `IntersectionObserver` that **disconnects after
  the first intersection**, so observers are not held for the page's lifetime.
- **Stable callbacks:** `useChat.send` is wrapped in `useCallback`; the playground's
  `Switch`/`Slider` handlers are plain `setState` references, so the chat only
  re-renders when its own state changes.
- **Deferred timers** in `useChat` are cleared on unmount.
- **Known cost:** the production bundle is ~1 MB (~346 kB gzipped). This is almost
  entirely `react-syntax-highlighter` + `react-markdown`, pulled in by
  `react-ai-chatkit` itself. It cannot be fixed from this site without changing the
  published package, which is out of scope. The site's own code is small.

---

## 13. Design constraints (do not break these)

1. **Never replace, wrap or re-implement `AIChatBox`.** It is the product.
2. **No new libraries.** Icons, reveals, toggles and sliders are all hand-rolled.
3. **No `console.log` in shipped components.** The playground logs to the console only
   through its `onSendMessage` handler, which the shared `useChat` hook handles.
4. **Dark-first.** Light theme exists as a *demo feature* of the component, not as the
   site theme.
5. **One implementation per idea.** If a control appears twice, it belongs in `ui/`.
6. **Copy is data.** Feature and stat content lives in arrays, not in markup.

---

## 14. Known trade-offs

- **Deep links lose the hash.** Because every load is forced to the hero, reloading a
  URL like `/#playground` opens at the top. This is deliberate — the page is a
  narrative, and the earlier "always lands on the playground" behaviour was the bug.
- **No loading skeletons.** There is no async data on this page; the only "loading"
  state is the AI reply, which the library's typing indicator already covers. Add
  skeletons when real network fetching is introduced.
- **Hand-authored syntax highlighting.** The code block colours are static spans rather
  than a highlighter, because a highlighter would mean a new dependency. Fine for a
  fixed snippet; revisit if the snippet becomes user-supplied.
- **Two `AIChatBox` instances.** Necessary — one is the hero pitch, the other is the
  playground. Both mount on load; see §11 for why that is handled.

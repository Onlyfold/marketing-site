<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md - Onlyfold marketing site

## What This Is

Public marketing site for Onlyfold, an AI sales and customer-support system on WhatsApp. One
static page (`/`) plus SEO routes, deployed on Vercel. It is a pixel-level recreation of the
reference at https://onlyfold-website-v3.vercel.app/ and must keep matching it unless a change is
explicitly requested. No backend, no forms, no auth: every CTA is a link.

## Repo Map

**Where does X live?** Everything for one page section sits in one folder. Check this table
before grepping.

| Area                    | Path                                          | What lives there                                                                                                                                         |
| ----------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Routes + SEO files      | `src/app/`                                    | `layout.tsx`, `page.tsx`, `globals.css`, `icon.ico`, `apple-icon`, `opengraph-image`, `twitter-image`, `manifest`, `robots`, `sitemap`. **No UI logic.** |
| Site chrome             | `src/layout/site-header/`, `site-footer/`     | Header (nav, dropdowns, mobile nav) and footer, each with its own `*.content.ts`                                                                         |
| Page sections           | `src/sections/<name>/`                        | In page order: `hero`, `trusted-by`, `how-it-works`, `industries`, `integrations`, `roi-calculator`, `faq`, `closing-cta`                                |
| Shared UI               | `src/components/ui/`                          | `Button`, `Badge`, `Eyebrow`, `Container`, `Section`, `SectionHeading`, `RevealOnScroll` — **used by 2+ places only**                                    |
| Icons / SEO / providers | `src/components/icons/`, `seo/`, `providers/` | Inline SVG icons, `JsonLd`, `SmoothScrollProvider`                                                                                                       |
| Config                  | `src/config/site.ts`, `src/config/env.ts`     | Identity, shared CTA links, video id, SEO defaults. `env.ts` is the **only** file that reads `process.env`                                               |
| Design tokens           | `src/styles/theme.css`                        | Every colour, radius, shadow, tracking value (`@theme`)                                                                                                  |
| Reset + globals         | `src/styles/base.css`, `utilities.css`        | Preflight replacement; `below-*` variants; text-gradient utility                                                                                         |
| Library code            | `src/lib/`                                    | `cn`, `format-number`, `css-vars`, `animations/` (GSAP entry, hooks, motion presets), `seo/` (metadata + JSON-LD builders)                               |
| Shared types            | `src/types/links.ts`, `content.ts`            | `Href`, `SectionId`, `LinkGroup`, `ImageAsset`, `CtaContent`, …                                                                                          |
| Static assets           | `public/images/`                              | `brand-logo.png`, `footer-logo.png`, `hero-video-poster.png`, `clients/`, `lead-sources/`                                                                |

Section folder anatomy (`src/sections/roi-calculator/` is the fullest example):

```
RoiCalculator.tsx              root — server component, composes the section
RoiCalculatorForm.tsx          client leaf (state)
RangeSlider.tsx  RecoveryResult.tsx  StatHighlight.tsx
roi-calculator.content.ts      every string, label, asset, slider definition (as const)
roi-calculator.types.ts        local types
roi-calculator.css             keyframes / @utility only Tailwind can't express
calculate-annual-recovery.ts   pure logic
index.ts                       exports the root (+ any *.schema.ts builder)
```

## Commands

| Command                    | Purpose                                                                   |
| -------------------------- | ------------------------------------------------------------------------- |
| `pnpm dev`                 | Dev server on http://localhost:3000                                       |
| `pnpm build && pnpm start` | Production build + server; every route prerenders statically              |
| `pnpm check`               | `lint` + `typecheck` + `format:check` — must be clean before you are done |
| `pnpm format`              | Prettier (sorts Tailwind classes; run it before `pnpm check`)             |

Node 24 (`.nvmrc`), pnpm 10, one lockfile. ESLint is pinned to 9.x: `eslint-config-next` 16
bundles a React plugin that crashes on ESLint 10. TypeScript is 6.x, not 7 (native), for the same
toolchain reason. Off Vercel, `@vercel/analytics` and `speed-insights` are not rendered
(`env.isVercel`), so a local production run has zero console errors.

## Code Conventions

- **Naming:** folders and non-component files `kebab-case`, named for what the thing _is on the
  page_ (`trusted-by`, not `logo-bar`; `roi-calculator`, not `calculator`). Components
  `PascalCase.tsx`, one export per file, file name = component name, acronyms in PascalCase
  (`Faq`, `Cta`). Hooks `use-<thing>.ts` → `useThing`. Client components are named for what they
  do (`HeroIntro`), never `*Client`; the `"use client"` directive is the marker.
- **Imports:** always `@/…` absolute inside `src`. Sections are imported through their
  `index.ts` (`@/sections/faq`), never by deep path from outside the folder.
- **Copy and links never live in components.** Strings, labels, image assets go in the section's
  `*.content.ts` (typed, `as const`); shared destinations (`#demo`, `#trial`, socials, video id)
  in `src/config/site.ts`. A component that contains a sentence or an `href` literal is a defect.
- **Colocate on first write.** A helper, type or style used by one section lives in that
  section's folder. Promote to `src/components/ui` or `src/lib` only when a second section
  imports it; waiting for a second caller is the rule, not the exception.
- **Server by default.** Only components that hold state or run GSAP/motion carry
  `"use client"` (`SiteHeader`, `NavDropdown`, `MobileNav`, `HeroIntro`, `VideoModal`,
  `RevealOnScroll`, `ProcessSteps`, `RoiCalculatorForm`, `RecoveryResult`, `FaqAccordion`,
  `FaqAccordionItem`, `SmoothScrollProvider`). Never pass a function from a server component to
  a client one — pass data (a `unit: "currency"` string, not a formatter).
- **Types:** strict + `noUncheckedIndexedAccess`; `readonly` on content/props interfaces; typed
  routes are on, so every `href` must be a real `Route` (`/`, `#anchor`, or an absolute URL).
- **Numbers** go through `src/lib/format-number.ts` (`en-US`, fixed) so server and client render
  the same string — never call `toLocaleString()` without a locale.
- **Derive, don't sync.** Computed values (`calculateAnnualRecovery`) are derived in render, not
  `useEffect` + `setState`; the React Compiler and `react-hooks/set-state-in-effect` both assume it.

## Styling — Tailwind v4, CSS-first

- Tokens are the only source of colour, radius, shadow and tracking: add to
  `src/styles/theme.css`, never write a hex value in a component or arbitrary class.
- **Preflight is intentionally not imported.** It changes line-heights and image display and
  breaks parity with the reference. `base.css` is the reset. The first line of `globals.css`
  declares layer order (`theme, base, components, utilities`) — without it, `base` is declared
  after `utilities` and its `* { margin: 0; padding: 0 }` silently beats every `p-*`/`m-*`.
- Every `--text-*` size has `line-height: normal`; use `leading-[…]` where the design sets one.
- Breakpoints: `md:`/`lg:` for the design's `min-width` rules; the inclusive custom variants
  `below-lg | below-calc | below-md | below-xs` for its `max-width` rules. They are declared
  widest-first in `utilities.css` on purpose — Tailwind emits variants in declaration order, so
  the narrowest must come last to win. Never use `max-md:` (exclusive; wrong at exactly 768px).
- No `!important` / `!` utilities. Conflicts are resolved with `cn()` (tailwind-merge) or a new
  `Button` variant.
- Never set `transform` via Tailwind on an element `motion` animates (it writes inline
  `transform`); `translate-*` / `rotate-*` are separate CSS properties and are fine.
- Section-owned CSS (`<section>.css`) holds only keyframes (`@theme --animate-*`), section
  gradients (`@utility bg-gradient-<section>`) and pseudo-element styling, and is `@import`ed
  from `globals.css` so it compiles in the same Tailwind graph.
- Badges are grey only. The reference's teal variant never rendered; do not add it.

## Animation & Scrolling

- Import GSAP only from `@/lib/animations/gsap` (ESLint blocks `gsap`, `gsap/ScrollTrigger`,
  `@gsap/react` elsewhere); plugins register once there.
- Scroll reveals: `<RevealOnScroll variant="fade-up|scale-up">`. Anything GSAP reveals carries
  `data-reveal` so CSS hides it before hydration (no flash); animate `autoAlpha`, and gate with
  `gsap.matchMedia(MOTION_OK)` so reduced-motion users see content immediately.
- `motion/react` transitions are shared from `src/lib/animations/motion-presets.ts`.
- Lenis: `SmoothScrollProvider` disables Lenis's own RAF and drives it from GSAP's ticker so
  ScrollTrigger stays in sync. The instance must be read with `useLenis()` from inside
  `<ReactLenis>` — the ref is only populated after a state update, and an effect that reads the
  ref on mount sees `undefined`, which leaves wheel scrolling dead (that bug shipped once). Do
  not add a second RAF loop. Do not import `lenis/dist/lenis.css` (it disables pointer events
  on iframes, killing the video modal).
- Programmatic `scrollTo` bypasses Lenis; when testing scrolling, use a real wheel event.

## Accessibility Baseline

Dropdowns open on hover, click and keyboard, close on Escape/blur, expose
`aria-expanded/haspopup/controls`. Mobile nav is `inert` + `aria-hidden` when closed. Video
poster is `<button aria-haspopup="dialog">`; the modal is `role="dialog" aria-modal`, focuses
Close on open, closes on Escape, restores focus. FAQ triggers have `aria-expanded/controls`
with `role="region"` panels. Sliders are `<label htmlFor>`-ed with `aria-valuetext`. Decorative
emoji and icons are `aria-hidden`. One `<h1>`, one `<h2>` per section, `<h3>` inside.

## SEO

- Metadata: `src/lib/seo/build-metadata.ts` from `siteConfig` (canonical, OG, Twitter, robots
  directives, Search Console verification). Route files in `src/app/` generate the OG/Twitter
  images (1200×630, Inter fetched from Google Fonts at build, falls back to the default font),
  apple icon, manifest, robots and sitemap.
- JSON-LD is one `@graph` composed in `page.tsx`: `Organization`, `WebSite`, `WebPage`,
  `SoftwareApplication` from `src/lib/seo/`, plus section-owned `faq.schema.ts` and
  `hero.schema.ts` that read the same content the page renders — schema can never drift from copy.
- Previews are `noindex` + `Disallow: /` automatically (`VERCEL_ENV !== "production"`).
- `next/image`: use `preload` (not the deprecated `priority`) and a real `sizes`; keep source
  PNGs unchanged — the optimizer serves AVIF/WebP.

## Environment & Deployment

| Variable                                                | Where             | Purpose                                                             |
| ------------------------------------------------------- | ----------------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                                  | Vercel production | Canonical origin for metadata, sitemap, JSON-LD (no trailing slash) |
| `GOOGLE_SITE_VERIFICATION`                              | Vercel production | Optional Search Console token                                       |
| `VERCEL`, `VERCEL_ENV`, `VERCEL_PROJECT_PRODUCTION_URL` | set by Vercel     | Analytics gating, preview `noindex`, URL fallback                   |

Vercel preset **Next.js**, no `vercel.json`, no custom build settings. `www` ↔ apex redirect is
a Vercel domain setting. After the first production deploy: submit `/sitemap.xml` in Search
Console and run the Rich Results Test.

## Known Placeholders (inherited from the reference)

- `siteConfig.links.demo` (`#demo`) and `.reviews` (`#reviews`) have no target section; nav
  dropdown anchors (`#tour-&-travel`, …) and every footer link (`#`) are placeholders. Change
  them in `src/config/site.ts`, `site-header.content.ts`, `site-footer.content.ts` — nowhere else.
- `siteConfig.video.youtubeId` is the reference's placeholder video. Setting
  `video.uploadDate` also enables the `VideoObject` schema.
- The hero entrance animation hides the poster for ~1 s, which Lighthouse reports as LCP render
  delay on throttled mobile. It is copied from the reference; shorten `delay`/`stagger` in
  `HeroIntro.tsx` only if parity is no longer required.

## Development Cycle

1. **Read before writing:** the section folder you are touching, its `*.content.ts`, and the
   matching section on the live reference.
2. **Implement** inside the section folder; add tokens to `theme.css`, not components.
3. **`pnpm format && pnpm check`** — clean, no warnings.
4. **Visual parity:** compare against the reference at 1440 / 1024 / 768 / 375 for every section
   you touched (tall-viewport screenshots reveal scroll-triggered content).
5. **Interaction pass:** keyboard-only through anything interactive you touched; real wheel
   scroll; zero console errors.
6. **Self-review** with the `code-review` skill; fix findings before reporting.
7. **Commit** only when asked, following Git Workflow below.

## Git Workflow

- `main` is production; Vercel deploys every push to `main` and builds a preview for every
  branch. Feature branches from `main`, descriptive `kebab-case` names.
- **Commit only when asked**, and stage only the files of the change you were asked for.
- Conventional commits: `type(scope): short description`. Types `feat` · `fix` · `refactor` ·
  `style` · `chore` · `docs` · `deps` · `seo` · `perf`. Scopes: a section (`hero`, `faq`,
  `roi-calculator`, …), `header`, `footer`, `ui`, `styles`, `config`, `seo`, `deps`. Body optional:
  short bullets, one per logical change.
- PR body: why, what, how it was verified (parity widths checked, interaction pass). **Never
  merge a PR unless the user explicitly says to merge that PR**; merging deploys production.

## Definition of Done

1. `pnpm check` and `pnpm build` pass; `/` is still prerendered static (`○ /` in build output).
2. Every touched section matches the reference at the four widths.
3. Keyboard-only pass and real wheel scroll work; zero console errors locally.
4. No new copy, hrefs or hex values inside components; no new `"use client"` without state or animation.

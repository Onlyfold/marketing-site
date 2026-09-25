<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Onlyfold marketing site — guide for coding agents

Static marketing site for Onlyfold, deployed on Vercel. Visual reference: https://onlyfold-website-v3.vercel.app/ — the page must keep matching it pixel for pixel unless a change is explicitly requested.

## Stack

- Next.js 16 App Router, React 19, TypeScript (strict, `noUncheckedIndexedAccess`), React Compiler on, typed routes on.
- Tailwind CSS v4, CSS-first (`@theme` tokens). **No CSS Modules, no inline hex values.**
- Animations: `motion/react` (overlays, accordion, menus) and GSAP + ScrollTrigger (entrance/scroll reveals, count-up); Lenis for smooth scrolling.
- pnpm, Node 24 (`.nvmrc`).

## Commands

| Command                                        | Purpose                                                                    |
| ---------------------------------------------- | -------------------------------------------------------------------------- |
| `pnpm dev`                                     | Dev server                                                                 |
| `pnpm build && pnpm start`                     | Production build + server (the whole site prerenders statically)           |
| `pnpm check`                                   | Lint + typecheck + Prettier check — must pass before claiming work is done |
| `pnpm lint` / `pnpm typecheck` / `pnpm format` | Individual steps                                                           |

## Folder rules (feature-first)

```
src/app/         routes, metadata, SEO route files only — no UI logic
src/layout/      site-header/, site-footer/  (site chrome)
src/sections/    one folder per page section, in page order
src/components/  ui/ icons/ seo/ providers/ — SHARED only (used by 2+ places)
src/config/      site.ts (identity, links, video, SEO defaults), env.ts (the only process.env reader)
src/styles/      theme.css (tokens), base.css (reset), utilities.css (global variants/utilities)
src/lib/         cn, number formatting, animations/, seo/
src/types/       shared types only
```

Everything that belongs to one section lives in its folder:

- `PascalCase.tsx` components (one per file, file name = component name; acronyms in PascalCase: `Faq`, `Cta`).
- `<section>.content.ts` — all copy, labels, image assets, typed and `as const`. **Components never contain copy or hrefs.**
- `<section>.css` — only what Tailwind cannot express (keyframes via `@theme --animate-*`, section gradients via `@utility`, pseudo-element styling). Imported from `src/app/globals.css`.
- `<section>.types.ts`, pure logic (`calculate-annual-recovery.ts`), `<section>.schema.ts` (JSON-LD) as needed.
- `index.ts` exports the root component (and schema builders) — `page.tsx` imports `@/sections/<name>`.

Promote a component to `src/components/ui` only when a second section needs it.

### Adding a section

1. Create `src/sections/<kebab-name>/` with `<Name>.tsx`, `<kebab-name>.content.ts`, `index.ts`.
2. Root component is a **server component**: `<Section id=...>` + `<Container>` + `<SectionHeading>`; pass content slices as props to client leaves.
3. Add the section id to `SectionId` in `src/types/links.ts` if it needs an anchor.
4. If it needs keyframes/utilities, add `<kebab-name>.css` and one `@import` line in `globals.css`.
5. Render it in `src/app/page.tsx` in page order.

## Server / client boundary

Only components that hold state or run GSAP/motion carry `"use client"`: SiteHeader (+ NavDropdown, MobileNav), HeroIntro (+ VideoModal), RevealOnScroll, ProcessSteps, RoiCalculatorForm (+ RecoveryResult), FaqAccordion (+ item), SmoothScrollProvider. Everything else is a server component. Never pass functions from server to client components — pass data (e.g. a `unit` string, not a formatter).

## Styling rules

- Tokens live in `src/styles/theme.css`. Add a token there instead of writing a hex value in a component.
- **Preflight is intentionally not imported.** `base.css` reproduces the reference site's reset; importing `tailwindcss` wholesale or Preflight will shift line-heights and image layout and break parity. Layer order is declared at the top of `globals.css` (`theme, base, components, utilities`) — keep it.
- Every `--text-*` size has `line-height: normal`; use `leading-[…]` where the design sets an explicit line-height.
- Use `md:` / `lg:` for the design's `min-width` rules and the inclusive `below-xs|md|calc|lg` custom variants for its `max-width` rules. Do not use `max-md:` (exclusive; differs at exactly 768px).
- No `!important` / `!` utilities. Resolve conflicts with `cn()` (tailwind-merge) or a Button variant.
- Never set `transform` through Tailwind on an element animated by `motion`; Tailwind's `translate-*`/`rotate-*` are fine (separate properties).
- Badges are grey only (`Badge`) — the reference site's teal variant never rendered; do not add it.

## Animation rules

- Import GSAP only from `@/lib/animations/gsap` (ESLint enforces this); plugins are registered once there.
- Scroll reveals: wrap in `<RevealOnScroll variant="fade-up|scale-up">`. Elements that GSAP reveals carry `data-reveal` so CSS hides them before hydration (no flash); always animate `autoAlpha`, and gate animations with `gsap.matchMedia` + `MOTION_OK` so reduced-motion users see content immediately.
- Shared `motion/react` transitions live in `src/lib/animations/motion-presets.ts`.
- Lenis is wired to GSAP's ticker in `SmoothScrollProvider`; do not add a second RAF loop. Do not import `lenis/dist/lenis.css` (it disables pointer events on iframes).

## Accessibility baseline

Dropdowns open on hover, click and keyboard, close on Escape/blur, and expose `aria-expanded/haspopup/controls`. The mobile nav is `inert` + `aria-hidden` when closed. The video poster is a `<button aria-haspopup="dialog">`; the modal is `role="dialog" aria-modal`, traps initial focus on Close, closes on Escape and restores focus. FAQ buttons have `aria-expanded`/`aria-controls` with `role="region"` panels. Sliders are labelled and expose `aria-valuetext`. Decorative emoji/icons are `aria-hidden`. One `<h1>`, one `<h2>` per section.

## SEO

Metadata is built in `src/lib/seo/build-metadata.ts` from `siteConfig`; OG/Twitter images, apple icon, manifest, robots and sitemap are route files in `src/app/`. JSON-LD is composed in `page.tsx` from builders in `src/lib/seo/` plus section-owned schemas (`faq.schema.ts`, `hero.schema.ts`) that read the same content the page renders. Preview deployments are `noindex` automatically (`VERCEL_ENV`). Set `NEXT_PUBLIC_SITE_URL` in production.

## Known intentional placeholders (from the reference site)

- `siteConfig.links.demo` (`#demo`) and `.reviews` (`#reviews`) have no target section yet; nav dropdown anchors (`#tour-&-travel`, …) and footer links (`#`) are placeholders. Fix them in `src/config/site.ts`, `site-header.content.ts` and `site-footer.content.ts`.
- `siteConfig.video.youtubeId` is the reference site's placeholder video. Set `video.uploadDate` too to emit VideoObject schema.

## Definition of done

1. `pnpm check` and `pnpm build` pass.
2. Compare against the live reference at 1440 / 1024 / 768 / 375 for every section you touched.
3. Keyboard-only pass through anything interactive you touched; zero console errors (Vercel analytics warnings are expected off-Vercel).

# Onlyfold marketing site

Marketing site for [Onlyfold](https://onlyfold-website-v3.vercel.app/) — AI sales and customer-support automation on WhatsApp. Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4; deployed on Vercel as a fully static page.

## Getting started

```bash
nvm use            # Node 24 (see .nvmrc)
pnpm install
pnpm dev           # http://localhost:3000
```

| Script                      | What it does                           |
| --------------------------- | -------------------------------------- |
| `pnpm dev`                  | Development server                     |
| `pnpm build` / `pnpm start` | Production build and server            |
| `pnpm check`                | `lint` + `typecheck` + `format:check`  |
| `pnpm format`               | Prettier (with Tailwind class sorting) |

## Where things live

- `src/sections/<name>/` — one folder per page section: components, `*.content.ts` (all copy), `*.css` (keyframes/utilities), local types and logic.
- `src/layout/site-header`, `src/layout/site-footer` — site chrome, same layout as sections.
- `src/config/site.ts` — site identity, shared CTA links, video id, SEO defaults. `src/config/env.ts` is the only file that reads environment variables.
- `src/styles/theme.css` — every design token (colours, radii, shadows, tracking).
- `src/components/ui` — shared primitives (`Button`, `Badge`, `Section`, `SectionHeading`, `RevealOnScroll`, …).

See [AGENTS.md](./AGENTS.md) for the full conventions (styling, animation, accessibility, SEO) and the definition of done.

## Editing content and links

- Copy for a section: edit its `*.content.ts`.
- CTA destinations (`#demo`, `#trial`, …), social profiles, keywords: `src/config/site.ts`.
- Navigation and footer links: `src/layout/site-header/site-header.content.ts`, `src/layout/site-footer/site-footer.content.ts`.
- Hero video: `siteConfig.video.youtubeId` (currently the reference site's placeholder). Add `uploadDate` to emit `VideoObject` structured data.

## SEO

Included out of the box: full metadata (canonical, Open Graph, Twitter, robots directives, verification tokens), generated `opengraph-image` / `twitter-image` / `apple-icon`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, JSON-LD (`Organization`, `WebSite`, `WebPage`, `SoftwareApplication`, `FAQPage`, optional `VideoObject`), one `h1` and a clean heading hierarchy, security headers. Preview deployments are `noindex`.

## Deploying on Vercel

1. Import the repo; framework preset **Next.js**, no extra build settings.
2. Environment variables (see `.env.example`): `NEXT_PUBLIC_SITE_URL` (canonical production URL, no trailing slash), optionally `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`.
3. Add the production domain and let Vercel redirect `www` ↔ apex.
4. Enable Web Analytics and Speed Insights in the Vercel project (the components are already mounted).
5. After the first production deploy, submit `https://<domain>/sitemap.xml` in Google Search Console and check the page with the Rich Results Test.

## Notes on visual parity

The page is a pixel-level recreation of the reference site. Tailwind's Preflight is intentionally not used (it changes line-heights and image display), and badges render in the grey style the reference site actually shows. Keep those decisions unless the design changes.

The hero entrance animation (copied from the reference) keeps the poster image hidden for about a second, which Lighthouse reports as LCP render delay on throttled mobile. Shortening `delay`/`stagger` in `HeroIntro.tsx` improves the score at the cost of parity.

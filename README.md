# Dameya Farm

Marketing website for **Dameya Farm** — a family-run working farm in **Glen
Robertson, Ontario**, operated by **Adam and Danyca Lindeman**. They offer
petting zoos and farm events, and raise pasture-raised beef (fully booked for
2026 — not currently for sale).

Built with [Astro](https://astro.build) as a static site: Home, About,
Updates (a Markdown blog), and Contact.

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static build -> dist/
npm run preview   # serve the built dist/ locally
npm run check     # astro type-check
```

## How it's built

- **Static output** (`output: 'static'`) — no server needed; deploy `dist/` to any
  static host (Netlify, Cloudflare Pages, GitHub Pages, etc.).
- **Design system:** all colors, type, spacing, and component styling come from the
  **Dameya Farm Design System**. Its tokens are copied verbatim into
  `src/styles/tokens/` and imported by `src/styles/global.css`. The React reference
  components from the design system's UI kit were translated into the Astro
  components in `src/components/` (hover states become CSS `:hover`; everything
  static, minimal client JS).
- **One container primitive:** `src/components/Container.astro` (max 1120px, or 720px
  `narrow`) wraps every section, so all sections share identical edges and rhythm.
- **Updates = a Markdown blog.** Add a post by dropping a file into
  `src/content/updates/` — it appears on the Updates page and the homepage
  automatically. No CMS. Front-matter schema is in `src/content.config.ts`:

  ```markdown
  ---
  title: Your post title
  date: 2026-07-01
  excerpt: One or two lines shown in the list and on the homepage.
  photo: short description of the hero photo   # optional
  draft: false                                 # optional; true hides the post
  ---

  Body text in Markdown.
  ```

## Project structure

```
src/
  components/     Container, Button, Card, SectionHeading, UpdateItem,
                  PhotoPlaceholder, Input/Select/Textarea, SiteHeader,
                  SiteFooter, CtaBand
  content/updates/  Markdown posts (the blog)
  content.config.ts Content-collection schema
  layouts/        BaseLayout.astro (head, meta, OG, JSON-LD, header, footer)
  lib/            format.ts (dates), updates.ts (sorted posts helper)
  pages/          index, about, contact, updates/index, updates/[...slug]
  styles/         global.css + tokens/ (from the design system)
public/           favicon.svg
```

## TODOs before launch (from the design system's caveats)

These are intentional placeholders — the design system shipped with no real
assets. Search the source for `TODO` to find them all.

- **Photography:** every image is a labeled placeholder (`PhotoPlaceholder.astro`).
  Add real photos and swap for Astro's `<Image>`.
- **Contact details:** real email and phone (currently `hello@example.com` /
  `(613) 555-0000`, marked `(TODO)`), in `SiteFooter.astro` and `contact.astro`.
- **Contact form endpoint:** the form in `contact.astro` posts to a placeholder
  `action`. Point it at a form service (Formspree/Basin/Web3Forms), a `mailto:`,
  or an Astro API route.
- **Fonts:** loaded from Google Fonts CDN (`src/styles/tokens/fonts.css`). Self-host
  the Bitter + Source Sans 3 files for a fully machine-independent build.
- **Production domain:** set `site` in `astro.config.mjs` (used for the sitemap and
  canonical/Open Graph URLs).
- **Animal lineup / pricing:** confirm real copy where the source notes `TODO`.

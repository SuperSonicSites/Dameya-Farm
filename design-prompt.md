# Dameya Farm — Claude Design Prompt

A ready-to-use design brief for building the Dameya Farm marketing website. Paste
the **"Prompt to give Claude"** section at the bottom into Claude (or Claude Code)
to generate the site, or read the full brief for the reasoning behind every choice.

---

## 1. The business

- **Name:** Dameya Farm
- **Location:** Glen Robertson, Ontario, Canada
- **Operated by:** Adam and Danyca Lindeman
- **What they do:** Petting zoos and on-farm events. They are a beef farm, but
  **beef is not currently for sale — fully booked for 2026.**
- **Goal of the site:** A simple, welcoming marketing presence. Let visitors learn
  about the farm, see what they offer, read updates, and get in touch to book a
  visit or event.

### What the site is NOT
- Not an e-commerce store (no cart, no checkout — beef is sold out for 2026).
- Not a dashboard or booking-engine. Contact is a simple form / email / phone.
- No newsletter pop-ups, no chat widgets, no "no frills" means no frills.

---

## 2. Personality & tone

**Down to earth, no frills, yet professional.** Think a real working family farm
that takes pride in a clean, trustworthy presentation — not a slick corporate
brand, not a rustic cliché overloaded with wood textures and burlap.

| Do | Don't |
| --- | --- |
| Warm, plain-spoken, genuine copy | Marketing buzzwords or hype |
| Generous whitespace, calm layout | Busy backgrounds, drop shadows everywhere |
| Real photos of the farm and animals | Stock photos of unrelated farms |
| Clear calls to action ("Book a visit") | Aggressive pop-ups / countdowns |
| Confident, simple typography | Decorative fonts, hard-to-read scripts |

Voice example: *"We raise our herd on pasture in Glen Robertson, and love opening
the gate for petting zoos and farm events. Come say hello."*

---

## 3. Color palette — green & hay

A grounded, natural palette. **Green** is the brand/primary; **hay** (warm wheat/
tan) is the secondary and the dominant background so the site feels warm, not cold.

| Token | Hex | Use |
| --- | --- | --- |
| `--green-900` | `#2F4A2E` | Deep pine — headings, footer background |
| `--green-700` | `#3E6B3A` | Primary green — buttons, links, brand |
| `--green-500` | `#5C8A54` | Hover / accents |
| `--green-100` | `#E6EEE1` | Soft green tint — section backgrounds, cards |
| `--hay-500`   | `#C8A96A` | Hay accent — borders, highlights, icon fills |
| `--hay-200`   | `#EDE0C4` | Warm hay — default page background |
| `--hay-100`   | `#F7F1E3` | Lightest hay — card / panel background |
| `--cream`     | `#FBF8F1` | Near-white for contrast panels |
| `--ink`       | `#26302A` | Body text (dark green-grey, softer than black) |
| `--ink-soft`  | `#5A655C` | Muted text, captions, meta |

**Rules**
- Body background is warm (`--hay-200`), not white. Text is `--ink`.
- Primary actions use `--green-700`; hover `--green-500`.
- Keep it to these tokens — no additional hues. Hay + green is the whole story.
- Verify text/background pairs meet **WCAG AA (4.5:1)**. `--ink` on `--hay-200`
  and white on `--green-700` both pass; check any new combination.

---

## 4. Typography

Keep it to **two families**, both free/self-hostable (ship them locally so the
farm site loads fast and looks the same everywhere).

- **Headings:** a friendly, sturdy serif — e.g. **Fraunces** or **Bitter**.
  Gives warmth + credibility without feeling corporate.
- **Body / UI:** a clean humanist sans — e.g. **Inter** or **Source Sans 3**.

**Scale** (fluid, clamp-based so it's responsive without breakpoints):
- `h1`: `clamp(2rem, 5vw, 3.25rem)`, serif, `--green-900`
- `h2`: `clamp(1.5rem, 3vw, 2.25rem)`, serif
- `h3`: `1.25rem`, serif or semibold sans
- Body: `1.0625rem`/`1.7` line-height, sans, `--ink`
- Small/meta: `0.9rem`, `--ink-soft`

Max line length for readable text blocks: **~65ch**.

---

## 5. Layout system — consistent containers (important)

This is a hard requirement: **every section shares the same container.** Do not
let one section be full-bleed 1400px and the next be a cramped 700px unless it's
a deliberate, documented variant.

Define ONE container primitive and reuse it everywhere:

```css
:root {
  --container-max: 1120px;   /* content max width */
  --container-pad: clamp(1rem, 4vw, 2.5rem); /* side gutters, responsive */
  --section-gap: clamp(3rem, 8vw, 6rem);     /* vertical rhythm between sections */
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

.section { padding-block: var(--section-gap); }
```

Build it as a reusable Astro component — `<Container>` — and wrap the inner
content of **every** section in it. Header, footer, and every page section align
to the same left/right edges. Two allowed width variants, both centered:
- **default** — `--container-max` (1120px)
- **narrow** — `~720px` for long-form text (blog post body, about paragraph)

**Spacing scale** (use these, nothing in between):
`0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4 / 6rem`.

**Cards / panels:** `--hay-100` or `--green-100` background, `1px` border in a
low-opacity hay/green, `border-radius: 14px`, generous padding (`1.5–2rem`),
subtle shadow only (`0 1px 3px rgba(0,0,0,.06)`). Consistent everywhere.

**Responsive breakpoints:**
- `< 640px` — single column, stacked nav (hamburger or simple wrap)
- `640–1024px` — 2-column grids
- `> 1024px` — full layout, up to `--container-max`

Use CSS Grid with `repeat(auto-fit, minmax(...))` so cards reflow without
per-breakpoint media queries where possible. Images: `max-width:100%`, `height:auto`.

---

## 6. Global components

- **Header / nav:** logo (Dameya Farm wordmark + optional simple mark) left,
  links right — *Home · About · Updates · Contact*. Sticky, `--cream` or
  `--hay-100` background, thin `--hay-500` bottom border. Collapses to a simple
  menu under 640px. Prominent "Book a visit" button (`--green-700`) as the last item.
- **Footer:** `--green-900` background, cream text. Three groups: farm blurb +
  location, quick links, contact (email, phone, town). Small line: "Glen Robertson,
  Ontario · Petting zoos & farm events". Copyright with the operators' names.
- **Button:** primary (solid green), secondary (green outline on hay). One radius
  (`10px`), one padding, consistent everywhere.
- **Section heading block:** small hay-colored eyebrow label + serif h2 + optional
  lead paragraph, reused on every page.

---

## 7. Page specs

### 7.1 Homepage (`/`)
1. **Hero** — full-width photo (herd on pasture or a child with a goat), green-tinted
   overlay for text legibility. Headline: *"A working family farm in Glen Robertson."*
   Subhead about petting zoos & events. Two buttons: "Book a visit" (primary) →
   Contact, "See what we offer" (secondary) → scroll to offerings.
2. **Intro / welcome** — narrow container. 2–3 sentences on the farm and the
   Lindemans. Warm and brief.
3. **What we offer** — 2 or 3 cards in the consistent card style:
   - *Petting Zoos* — bring the animals to you / visit the farm.
   - *Farm Events* — host gatherings on the farm.
   - *Pasture-raised Beef* — with a clear, friendly note: **"Fully booked for
     2026 — not currently taking beef orders."** (Honest, no false scarcity.)
4. **A bit about the farm** — image + text row (alternating), mentions
   pasture-raised, family-operated by Adam & Danyca Lindeman.
5. **Latest updates** — pulls the 2–3 most recent posts from Updates as cards.
6. **Call to action band** — green background: "Want to visit or book an event?"
   + button to Contact.

### 7.2 Updates / Blog (`/updates`)
- Simple reverse-chronological list of posts. Each entry: date (meta), title
  (serif), 1–2 line excerpt, "Read more" link. Consistent card or divided list —
  pick one and keep it consistent.
- **Post page (`/updates/[slug]`)** — narrow container. Title, date, optional hero
  image, body (Markdown/MDX), back-to-updates link. This is where the farm shares
  news: animal arrivals, event recaps, seasonal notes, beef availability changes.
- Use Astro **Content Collections** (`src/content/updates/*.md`) so Adam & Danyca
  can add a post by dropping in a Markdown file — no CMS needed (KISS).

### 7.3 Contact (`/contact`)
- Narrow container, welcoming intro: "Come say hello / book a visit or event."
- **Contact details block:** email, phone, town (Glen Robertson, ON). Make email
  and phone tappable (`mailto:` / `tel:`).
- **Simple form:** Name, Email, Phone (optional), "What are you interested in?"
  (Petting zoo / Farm event / Other — a select), Message. One primary submit button.
  - Keep it functional and privacy-light. Wire to a simple handler (e.g. a form
    service, a `mailto`, or an Astro API route) — leave a clearly marked TODO for
    the endpoint rather than inventing credentials.
- Optional: an embedded map or just a line of text with the general area (respect
  the family's privacy — don't publish a home address unless they ask).
- Reassure on beef: a short note that beef is fully booked for 2026 and to check
  Updates for future availability.

### 7.4 About (optional, recommended)
- Can live on the homepage or as its own page. Story of the farm, the Lindemans,
  their approach to raising the herd on pasture. Real and brief.

---

## 8. Technical requirements

- **Framework:** Astro (latest). Static output is fine for a marketing site
  (`output: "static"`) — fast, cheap to host, no server needed. Add SSR only if
  the contact form endpoint requires it.
- **Structure:**
  - `src/layouts/BaseLayout.astro` — html head, fonts, global CSS, header, footer.
  - `src/components/` — `Container.astro`, `Header.astro`, `Footer.astro`,
    `Button.astro`, `Card.astro`, `SectionHeading.astro`.
  - `src/pages/` — `index.astro`, `contact.astro`, `updates/index.astro`,
    `updates/[...slug].astro`.
  - `src/content/updates/` — Markdown posts + `config.ts` collection schema.
  - `src/styles/global.css` — design tokens (from §3–5) as CSS custom properties,
    reset, base typography, `.container` / `.section` primitives.
  - `public/fonts/` — self-hosted font files; `public/images/` — farm photos.
- **CSS approach:** plain CSS with custom properties (tokens) + Astro scoped
  `<style>` per component. No heavy framework needed; keep it boring (KISS).
- **Responsive:** mobile-first. Test at 360px, 768px, 1280px. No horizontal scroll
  at any width. Images responsive.
- **Accessibility:** semantic HTML (`header`/`nav`/`main`/`article`/`footer`),
  alt text on every image, visible focus states, AA contrast, form labels.
- **SEO/meta:** per-page `<title>` and description, Open Graph tags, favicon,
  `LocalBusiness` JSON-LD (name, Glen Robertson ON, farm/events). Sitemap +
  robots via `@astrojs/sitemap`.
- **Performance:** use Astro `<Image>` for optimization, lazy-load below-the-fold
  images, self-host fonts, no client JS unless a component truly needs it.

---

## 9. Content checklist (leave placeholders, mark TODOs)

Do NOT invent specific facts. Use clearly-marked placeholders for anything the
family must supply:
- Real farm photos (hero, animals, family, pasture).
- Email address and phone number for contact.
- Exact offerings/pricing for petting zoos & events (or "contact for details").
- Social media links, if any.
- Confirmation of whether to show an address/map.
- Real first Updates post(s).

Everything factual we DO know and can use: name (Dameya Farm), location
(Glen Robertson, Ontario), operators (Adam & Danyca Lindeman), that they do
petting zoos & events, that they raise beef, and that **beef is fully booked for
2026 / not currently selling.**

---

## 10. Prompt to give Claude

> Copy everything below into Claude / Claude Code to generate the site.

---

Build a marketing website for **Dameya Farm**, a family-run working farm in
**Glen Robertson, Ontario**, operated by **Adam and Danyca Lindeman**. They offer
**petting zoos and farm events**, and they raise **pasture-raised beef** that is
**fully booked for 2026 (not currently for sale)**. The site is a simple, warm,
professional marketing presence — not a store.

Use the **Astro** framework, static output, plain CSS with custom-property design
tokens, and self-hosted fonts. Pages: **Home**, **Updates** (a blog powered by
Astro Content Collections with Markdown posts), individual **update post** pages,
and **Contact** (details + a simple form with a clearly-marked TODO for the
endpoint). Optionally an About section on the homepage.

**Design direction:** down to earth, no frills, yet professional. Palette is
**green + hay (warm wheat/tan)** — warm hay background, deep green headings and
buttons, hay accents. Use these tokens: green-900 `#2F4A2E`, green-700 `#3E6B3A`,
green-500 `#5C8A54`, green-100 `#E6EEE1`, hay-500 `#C8A96A`, hay-200 `#EDE0C4`
(page bg), hay-100 `#F7F1E3`, cream `#FBF8F1`, ink `#26302A`, ink-soft `#5A655C`.
Serif headings (Fraunces or Bitter) + humanist sans body (Inter or Source Sans 3).

**Critical layout requirement:** define ONE reusable `<Container>` component
(max-width 1120px, responsive side padding via `clamp`, centered) and wrap **every**
section in it so all sections share identical left/right edges and vertical rhythm.
Provide a `narrow` (~720px) variant for long-form text. Use a fixed spacing scale
and consistent card styling (hay/green tint, 14px radius, subtle border, generous
padding) across the whole site. Fully **responsive**, mobile-first, no horizontal
scroll at any width; use CSS Grid `auto-fit`/`minmax` so cards reflow.

**Homepage sections:** hero (photo + green overlay, headline, "Book a visit" +
"See what we offer" buttons), short welcome, "What we offer" cards (Petting Zoos,
Farm Events, Beef — clearly noting beef is fully booked for 2026), a farm story
row, latest updates, and a green CTA band to Contact.

**Requirements:** semantic HTML, alt text, AA contrast, visible focus states,
per-page meta + Open Graph + LocalBusiness JSON-LD, sitemap, favicon, optimized
images, minimal/no client JS. Keep the code boring and reusable (KISS/YAGNI).

**Do not invent facts.** Use clearly-marked placeholders for real photos, email,
phone, pricing, and social links, and a TODO for the contact form endpoint. Do
use the known facts above (name, location, operators, offerings, beef booked-out
for 2026).

---

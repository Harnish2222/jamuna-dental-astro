# Jamuna Family Dental Care — Astro Site

Static marketing site for **Jamuna Family Dental Care**, Dindigul, built with **Astro + React islands**, deployed on **Cloudflare Pages**, content edited via **TinaCMS**.

## Stack

- **Astro 4** — static site generator, file-based routing, zero-JS by default
- **React 18** — kept as Astro islands for the existing component library
- **Tailwind CSS** + shadcn/ui design tokens (preserved from the original Vite build)
- **@astrojs/sitemap** — auto-generated sitemap-index.xml
- **@astrojs/mdx** — content collections in `src/content/`
- **TinaCMS** — Git-backed CMS, edits commit to GitHub
- **Cloudflare Pages** — static deployment with edge headers/redirects

## Project structure

```
.
├── astro.config.mjs            # Astro + integrations config
├── tailwind.config.ts          # Design tokens (colors, fonts, animations)
├── tina/config.ts              # TinaCMS schema
├── wrangler.toml               # Cloudflare Pages config
├── public/
│   ├── _headers                # Cache & security headers (Pages)
│   ├── _redirects              # 301 redirects (Pages)
│   ├── robots.txt
│   ├── sitemap.xml             # Hand-maintained (also see sitemap-index.xml from build)
│   ├── favicon.png
│   └── images/                 # Editable images (uploads/)
├── src/
│   ├── pages/                  # Astro file-based routing (.astro)
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── disclaimer.astro
│   │   ├── landing.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-and-conditions.astro
│   │   └── services/
│   │       ├── general-dentistry.astro
│   │       ├── cosmetic-dentistry.astro
│   │       ├── restorative-dentistry.astro
│   │       ├── orthodontics.astro
│   │       ├── pediatric-dentistry.astro
│   │       └── emergency-dental-care.astro
│   ├── layouts/
│   │   └── BaseLayout.astro    # <head> meta, JSON-LD, Nav/Footer islands
│   ├── screens/                # React page components (rendered as islands)
│   ├── components/             # Existing React component library (shadcn/ui + custom)
│   ├── content/
│   │   ├── config.ts           # Zod schema for collections
│   │   ├── site/clinic.json    # Clinic-wide settings (TinaCMS)
│   │   ├── services/*.mdx      # Editable service pages
│   │   └── pages/*.mdx         # Editable static pages
│   ├── seo/schemas.ts          # JSON-LD generators
│   ├── lib/                    # utils + router-compat shim
│   ├── hooks/                  # React hooks
│   ├── assets/                 # Vite-managed images (imported in JSX)
│   └── styles/global.css       # Tailwind base + design tokens + global utilities
```

## SEO

Every page renders fully static HTML. The `<head>` is built in [BaseLayout.astro](src/layouts/BaseLayout.astro) at build time:

- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Open Graph + Twitter Cards
- JSON-LD blocks (`Dentist`, `Organization`, `BreadcrumbList`, `FAQPage`, per-service `MedicalProcedure`) injected as `<script type="application/ld+json">` — **rendered statically**, not by client JS.
- `robots.txt` + manual `sitemap.xml` + auto-generated `sitemap-index.xml`.

## Hydration model

Astro renders all React components as static HTML at build time. Hydration is **opt-in per island**, with section-level granularity:

### Hydrated (ship JS)

| Island | Directive | Why |
|---|---|---|
| `<Navigation>` | `client:load` | Mobile-menu state needs JS at first paint |
| `<HeroCarousel>` | `client:visible` | Embla carousel autoplay |
| `<MilestonesSection>` | `client:visible` | Number count-up animation |
| `<PhotoGalleryMarquee>` | `client:visible` | rAF-driven gallery slider |
| `<TestimonialsSection>` | `client:visible` | JotForm widget script injection |
| `<AppointmentBookingSection>` | `client:load` | Form state, custom select |
| `<ServiceStatsBar>` | `client:visible` | Stat counter animation |
| `<FindUsSection>` (Leaflet) | `client:visible` | Map needs JS |
| `<WhatsAppWidget>` | `client:idle` | Non-critical floating CTA |

### Rendered statically (zero JS)

These render server-side as plain HTML during the Astro build — crawlers and Lighthouse see them immediately, no React runtime required:

- `<ServiceMarquee>` — pure CSS animation
- `<AboutUsSection>` — static text + images
- `<MissionVisionSection>` — static cards
- `<WhyChooseUsSection>` — static feature grid
- `<InstagramReelsSection>` — iframe embeds, no state
- `<Footer>` — static links, contact details, social, legal
- Service grid on the homepage — `<a>` cards rendered inline in Astro
- Service-page sub-sections: `<ServiceHeroSection>`, `<ServiceTreatmentCards>`, `<ServiceProcessTimeline>`, `<ServiceBenefits>`, `<ServiceTestimonials>`
- `<ServiceFAQ>` — `<details>`/`<summary>` accordion (works without JS)
- Homepage FAQ — same `<details>` pattern via `FAQAccordion.astro`
- `<FloatingCTABar>` — visibility driven by Tailwind `md:hidden`, no `useIsMobile` hook

### What's served statically (always, on every page)

- `<title>` / `<meta name="description">` / `<link rel="canonical">`
- Open Graph + Twitter Card meta
- All JSON-LD blocks (`Dentist`, `Organization`, `BreadcrumbList`, `MedicalProcedure`, `FAQPage`)
- Phone, address, geo coords, opening hours
- All FAQ Q+A text (visible HTML, not gated behind hydration)
- Doctor profile cards, testimonials text, service descriptions

### Animation strategy

`AnimatedSection` and the `.scroll-fade-*` classes are SSR-safe:

- A single global `IntersectionObserver` in [BaseLayout.astro](src/layouts/BaseLayout.astro) handles all scroll-triggered fades — no per-component hook required.
- The `.js-anim` class is added synchronously to `<html>` before first paint. Without JS, content stays fully visible (no FOUC, no hidden text).
- Number counters (`AnimatedNumber`, `AnimatedCounter`) initialise with the **final** value, so SSR renders the real number even if the count-up animation never runs.

## Local development

```bash
npm install
npm run dev            # http://localhost:4321
```

With TinaCMS:

```bash
npm run tina:dev       # starts Tina + Astro together at localhost:4321/admin
```

## Build

```bash
npm run build          # outputs to ./dist
npm run preview        # preview the static build locally
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages → **Create project** → Connect to your GitHub repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 (set `NODE_VERSION=20` env var)
4. Add the TinaCMS env vars (`NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`).
5. Pages auto-applies `public/_headers` + `public/_redirects`.

## TinaCMS setup

1. Sign up at https://app.tina.io and create a project pointing at this GitHub repo.
2. Copy the Client ID and a Read-Only Token into `.env`:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=...
   TINA_TOKEN=...
   ```
3. Run `npm run tina:build` for production builds — Tina builds into `public/admin/` and Astro picks it up automatically. The editor lives at `https://jamunadental.com/admin`.

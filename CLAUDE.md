# CLAUDE.md — AI Instructions for Jamuna Family Dental Care (Astro Site)

## Why This Project Exists

This site was **migrated from React + Vite (SPA) to Astro 4 (static site)** specifically for SEO.

The original React SPA had a critical SEO problem: all HTML was rendered client-side by JavaScript. Google and other crawlers would see an empty `<div id="root">` — no headings, no text, no structured data. This killed organic search rankings for a local dental clinic that depends entirely on local SEO.

**The migration goal:** Every page must ship fully-rendered static HTML so crawlers, Lighthouse, and Core Web Vitals see real content instantly — with zero JavaScript required for the critical path.

---

## Core Architecture Rule — Static First, Islands Only When Necessary

This is an **Astro islands architecture**. The golden rule:

> **If a component does not need user interaction or browser-only APIs, it MUST render as static HTML with no `client:*` directive.**

### Currently Hydrated Islands (JS ships to browser)

| Component | Directive | Reason |
|---|---|---|
| `<Navigation>` | `client:load` | Mobile hamburger menu state |
| `<HeroCarousel>` | `client:visible` | Embla carousel autoplay |
| `<MilestonesSection>` | `client:visible` | Count-up number animation |
| `<PhotoGalleryMarquee>` | `client:visible` | rAF-driven scroll animation |
| `<TestimonialsSection>` | `client:visible` | JotForm widget injection |
| `<AppointmentBookingSection>` | `client:load` | Form state, controlled inputs |
| `<ServiceStatsBar>` | `client:visible` | Animated stat counters |
| `<FindUsSection>` | `client:visible` | Leaflet map (browser-only) |
| `<WhatsAppWidget>` | `client:idle` | Non-critical floating CTA |
| `<MissionVisionSection>` | `client:visible` | framer-motion animations |

### Must Stay Static (never add `client:*`)

- All service page content sections
- Doctor profiles, team bios
- Testimonials text
- FAQ accordions — use `<details>/<summary>`, NOT Radix/Headless UI accordion
- All JSON-LD structured data
- Phone numbers, address, geo coordinates, opening hours
- Footer, navigation links
- `<FloatingCTABar>` — uses `md:hidden` CSS, not `useIsMobile()` hook

---

## SEO Requirements — Non-Negotiable

Every page must have these **in static HTML** (not injected by JS):

1. `<title>` and `<meta name="description">`
2. `<link rel="canonical">`
3. Open Graph + Twitter Card meta tags
4. JSON-LD structured data blocks (rendered via `set:html` in BaseLayout.astro)
5. All visible text content — headings, paragraphs, FAQs, contact details

JSON-LD is rendered in `<BaseLayout.astro>` using:
```astro
<script type="application/ld+json" set:html={JSON.stringify(block)} />
```
This renders at build time. **Never move JSON-LD to client-side JS.**

---

## TypeScript Rules — Vite SSR Compatibility

Vite's SSR mode (used by Astro dev server) loads CommonJS builds of packages. TypeScript type-only imports **must use the `type` keyword** or Vite will throw:
`Named export 'X' not found. The requested module is a CommonJS module.`

### Always use `type` for:
```ts
import { type ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';
import { type FC, type ComponentProps } from 'react';
```

**Rule:** Any import that is only used as a TypeScript type (not as a runtime value) must have the `type` keyword.

---

## Image Rules — Always Use `.src` in `<img>` Tags

Astro image imports return `ImageMetadata` objects `{ src: string, width: number, height: number, format: string }`.

- **In React `.tsx` components** using `<img>`: always use `variable.src`
  ```tsx
  import logo from '@/assets/logo.png';
  <img src={logo.src} alt="Logo" />  // ✅ correct
  <img src={logo} alt="Logo" />      // ❌ renders [object Object]
  ```

- **In Astro `.astro` files** using `<Image>` component: pass the full object
  ```astro
  import { Image } from 'astro:assets';
  import logo from '@/assets/logo.png';
  <Image src={logo} alt="Logo" />    // ✅ correct — Image component needs ImageMetadata
  ```

- **In data arrays**: always store `.src` strings
  ```ts
  const images = [
    { src: heroImage.src, alt: 'Hero' },  // ✅
    { src: heroImage, alt: 'Hero' },      // ❌
  ];
  ```

- `dentalImages.ts` in `src/lib/` exports pre-resolved `.src` strings — use these freely in `<img>` tags.

---

## Animation Rules — SSR Safe

- **Scroll animations**: handled by a single global `IntersectionObserver` in `BaseLayout.astro`. Use CSS classes `scroll-fade-up`, `scroll-fade-left`, `scroll-fade-right`, `scroll-scale-in`.
- **Progressive enhancement**: the `.js-anim` class is added to `<html>` synchronously before first paint. Without JS, all content is visible (no hidden text, no layout shift).
- **`AnimatedSection`** is a zero-JS wrapper — it just applies CSS classes. No hooks. Do not add `useState` or `useEffect` to it.
- **Number counters** (`AnimatedNumber`, `AnimatedCounter`) must initialize with the **final value** as default state so SSR renders the real number.

---

## Routing

All pages live in `src/pages/` using Astro's file-based routing. There is **no React Router**. A `router-compat.tsx` shim provides `Link` and `useLocation` for legacy components that haven't been rewritten yet:

```ts
import { Link, useLocation } from '@/lib/router-compat';
```

Do **not** add `react-router-dom` as a dependency.

---

## Content & CMS

- Clinic-wide settings: `src/content/site/clinic.json`
- Service content: `src/content/services/*.mdx`
- Static pages: `src/content/pages/*.mdx`
- TinaCMS schema: `tina/config.ts` (install with `npm run tina:install` — excluded from default deps due to native `better-sqlite3` build requirement)

---

## Deployment

- **Platform**: Cloudflare Pages
- **Build command**: `npm run build`
- **Output dir**: `dist`
- **Node version**: 20 (`NODE_VERSION=20` env var)
- `public/_headers` — cache + security headers
- `public/_redirects` — URL normalization
- Every `git push` to `main` auto-deploys via Cloudflare's GitHub integration

---

## Stack Summary

| Layer | Tech |
|---|---|
| Framework | Astro 4 (`output: 'static'`) |
| UI components | React 18 (islands only) |
| Styling | Tailwind CSS + shadcn/ui tokens |
| Icons | lucide-react |
| CMS | TinaCMS (Git-backed) |
| Sitemap | `@astrojs/sitemap` v3.1.6 |
| Deploy | Cloudflare Pages |
| Domain | jamunadental.com |

---

## What NOT To Do

- ❌ Don't add `client:*` to static sections (testimonials text, FAQs, doctor profiles, service descriptions)
- ❌ Don't use Radix UI accordion for FAQs — use `<details>/<summary>` 
- ❌ Don't use `useIsMobile()` hook for CSS-only responsive behaviour — use Tailwind breakpoints
- ❌ Don't inject JSON-LD via `useEffect` — it must be in `<head>` at build time
- ❌ Don't import `LucideIcon`, `ReactNode`, or any other TS-only type without the `type` keyword
- ❌ Don't pass raw `ImageMetadata` objects to `<img src={}>` — always use `.src`
- ❌ Don't use `react-router-dom` — use `@/lib/router-compat` shim
- ❌ Don't add `better-sqlite3` or TinaCMS to the default install — it requires native C++ build tools

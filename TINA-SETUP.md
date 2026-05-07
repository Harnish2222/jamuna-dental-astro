# TinaCMS Setup for Jamuna Dental

## ✅ What's Been Set Up

### Files Created:
- ✅ `tina/config.ts` — Complete TinaCMS schema for homepage
- ✅ `src/data/homepage.json` — Homepage content (editable via TinaCMS)
- ✅ `src/lib/load-homepage.ts` — Content loader for Astro
- ✅ `.env.local` — Template for GitHub OAuth credentials
- ✅ `index.astro` — Updated to use TinaCMS content

### What's Editable:
- **Hero Section** — 4-part heading, description, CTA button, phone, highlights, ratings
- **About Us** — Badge, 3-part heading, description, 4 highlights, image, CTA
- **Services** — Title, 7 service cards (title, description, bullets, image, link)
- **Why Choose JFDC** — Heading, description, image, 3 features
- **FAQ** — 7 Q&A items with full edit support
- **Settings** — Page title, meta description, canonical URL

---

## 🚀 Quick Start

### 1. Install TinaCMS Dependencies
```bash
npm run tina:install
```

This installs:
- `tinacms` — The CMS framework
- `@tinacms/cli` — Local editor & GitHub integration

### 2. Get GitHub OAuth Credentials

**Create GitHub OAuth App:**
1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **App name**: `Jamuna Dental Tina CMS` (or any name)
   - **Homepage URL**: `http://localhost:4322` (for local dev)
   - **Authorization callback URL**: `http://localhost:4322/admin/auth/callback`
4. Copy the **Client ID** from the app details page

**Create GitHub Personal Access Token:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token"
3. Name: `Jamuna Dental Tina`
4. Select scope: `repo` (full control of private repos)
5. Copy the token (only shown once!)

### 3. Add Credentials to `.env.local`
```bash
NEXT_PUBLIC_TINA_CLIENT_ID=your_github_oauth_app_id
TINA_TOKEN=your_github_personal_access_token
```

### 4. Start TinaCMS Dev Server
```bash
npm run tina:dev
```

This starts:
- Astro dev server at `http://localhost:4322`
- TinaCMS editor at `http://localhost:4322/admin`

### 5. Edit Homepage Content
1. Open `http://localhost:4322/admin` in your browser
2. Click "Homepage"
3. Edit any content (text, images, FAQs)
4. Changes auto-save to `src/data/homepage.json`
5. The website updates in real-time

---

## 📝 How It Works

### Content Flow:
```
TinaCMS Editor (/admin)
    ↓
src/data/homepage.json (Storage)
    ↓
TinaCMS GraphQL API (via client.queries)
    ↓
src/lib/load-homepage.ts (loader using client)
    ↓
src/pages/index.astro (uses content)
    ↓
Static HTML (built site)
```

### File Structure:
```
src/
├── data/
│   └── homepage.json         ← Content storage (managed by TinaCMS)
├── lib/
│   └── load-homepage.ts      ← Content loader (uses Tina GraphQL client)
└── pages/
    └── index.astro           ← Homepage (uses loaded content)

tina/
├── config.ts                 ← TinaCMS schema & configuration
└── __generated__/            ← Auto-generated GraphQL client & types

.env.local                     ← GitHub OAuth credentials
```

---

## 🔄 Workflow

### For Editors:
1. Go to `/admin`
2. Edit homepage content in the UI
3. Changes save automatically to `src/data/homepage.json`
4. Go back to the website to see changes live

### For Developers:
1. Schema changes → edit `tina/config.ts`
2. Content defaults → edit `src/data/homepage.json`
3. Component layout → edit `src/pages/index.astro`

---

## ⚙️ Commands Reference

| Command | What it does |
|---------|-------------|
| `npm run dev` | Astro dev server only (no CMS) |
| `npm run tina:dev` | Astro + TinaCMS editor |
| `npm run tina:install` | Install TinaCMS dependencies |
| `npm run build` | Production build (uses `src/data/homepage.json`) |
| `npm run tina:build` | Build TinaCMS + Astro |

---

## 🎨 Extending TinaCMS

### Add a New Section to Homepage

1. **Add to schema** (`tina/config.ts`):
```typescript
{
  type: "object",
  label: "New Section",
  name: "new_section",
  fields: [
    { type: "string", label: "Title", name: "title" },
    { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
  ],
}
```

2. **Add to content** (`src/data/homepage.json`):
```json
"new_section": {
  "title": "Default Title",
  "description": "Default description"
}
```

3. **Use in Astro** (`src/pages/index.astro`):
```astro
<h2>{homepageContent?.new_section?.title}</h2>
<p>{homepageContent?.new_section?.description}</p>
```

---

## 🛠️ Troubleshooting

### TinaCMS Editor Not Loading
- Check `.env.local` has correct `NEXT_PUBLIC_TINA_CLIENT_ID`
- Verify GitHub OAuth app callback URL is `http://localhost:4322/admin/auth/callback`
- Restart the dev server

### Content Not Updating
- Clear browser cache
- Check `src/data/homepage.json` is being edited (timestamp should update)
- Verify `npm run tina:dev` is running (not just `npm run dev`)

### Build Errors
- Ensure `src/data/homepage.json` is valid JSON (no trailing commas)
- Check `src/lib/load-homepage.ts` path matches where homepage.json lives
- Run `npm run build` to see full error details

---

## 📚 Next Steps

### To Connect to GitHub (Git-backed CMS):
1. Push current changes to GitHub
2. Update `.env.local` with real GitHub OAuth credentials
3. TinaCMS will save content as commits directly to your repo

### To Add More Editable Sections:
- Service pages (cosmetic-dentistry, pediatric-dentistry, etc.)
- Team/doctor profiles
- Testimonials
- Contact info & hours

---

## 🎯 Summary

**You now have:**
- ✅ TinaCMS fully integrated with Astro
- ✅ Homepage content completely editable via UI
- ✅ Content stored as JSON (git-friendly)
- ✅ Real-time preview as you edit
- ✅ Production builds use TinaCMS content

**To start editing:**
```bash
npm run tina:dev
# Open http://localhost:4322/admin
```

Enjoy! 🎉

# Portfolio Stack Recommendations (2026)

## Current State

Your portfolio is a blank canvas — good time to choose the right foundation.

---

## The Core Decision: Static Site Generator

GitHub Pages hosts static files. The question is what *generates* those files.

### #1 Recommendation: Astro v5

Astro is the clear leader for portfolios/content sites in 2025-2026.

**Why Astro wins:**
- **Islands architecture** — zero JavaScript shipped by default, pages load instantly
- **Framework-agnostic** — use React, Svelte, Vue, or plain HTML components in the same project
- **100/100 Lighthouse scores** out of the box (huge for first impressions)
- **Content Collections** — type-safe structured data for projects, blog posts
- **Massive portfolio template ecosystem** at astro.build/themes
- TypeScript built-in, excellent DX
- GitHub Actions deployment is first-class

```bash
pnpm create astro@latest
```

---

### #2 Alternative: SvelteKit (static adapter)

If you want a more app-like experience with the cleanest syntax in web dev today.

- Svelte 5 (2024) introduced runes — the most ergonomic reactivity model
- `@sveltejs/adapter-static` outputs pure static files for GitHub Pages
- Less boilerplate than React, excellent performance
- Smaller ecosystem than Astro for portfolio templates

---

### #3 Eleventy (11ty) — Minimalist pick

If you want full control with minimal magic. JavaScript-based, extremely fast builds, loyal community. Best for developers who want to hand-craft everything.

---

### What to avoid in 2026 for a portfolio

| Tool | Reason to skip |
|------|----------------|
| **Jekyll** | GitHub Pages native but Ruby ecosystem is declining, slow |
| **Gatsby** | Largely replaced by Astro, heavy complexity |
| **Next.js** | Overkill, optimized for Vercel not GitHub Pages |
| **Create React App** | Deprecated |

---

## CSS Framework

### Tailwind CSS v4 (released early 2025)

No contest here. Tailwind v4 is the dominant choice in 2025-2026.

Key changes in v4:
- No `tailwind.config.js` needed — configured via CSS `@import`
- Native CSS cascade layers
- Faster build times (Rust-based engine)
- CSS variables for all design tokens

Pair with:
- **DaisyUI v5** — Tailwind component library, fastest to get a polished UI
- **shadcn-svelte** or **shadcn/ui** — if you go SvelteKit or React, gives high-quality copy-paste components

---

## Animation

| Library | Best For | Notes |
|---------|----------|-------|
| **GSAP** | Scroll animations, complex timelines | Industry standard, free for personal use |
| **Motion.dev** (formerly Framer Motion) | Now framework-agnostic (v11+) | Great for entrance animations |
| **Three.js** | 3D hero sections | High impact but heavy — use sparingly |

For a portfolio, **GSAP + ScrollTrigger** is the most impressive combination with the highest employer/client recognition.

---

## Recommended Stack (Final Answer)

```
Astro v5
  + Tailwind CSS v4
  + DaisyUI v5 (components)
  + GSAP + ScrollTrigger (animations)
  + GitHub Actions (CI/CD)
  + TypeScript
```

**Why this stack specifically:**
1. Astro's template gallery has production-ready portfolio starters — not starting from zero
2. Tailwind v4 + DaisyUI gives you a complete design system in minutes
3. GSAP scroll animations are what separate a "resume page" from an impressive portfolio
4. GitHub Actions handles build + deploy automatically on every `git push`
5. Zero runtime JS by default = fast load on mobile, great for recruiters

---

## Quick Start

```bash
# 1. Scaffold
pnpm create astro@latest my-portfolio --template portfolio

# 2. Add Tailwind
pnpm astro add tailwind

# 3. Add DaisyUI
pnpm add daisyui

# 4. Add GSAP
pnpm add gsap
```

Then push to GitHub, enable GitHub Pages from **Settings → Pages → GitHub Actions**.

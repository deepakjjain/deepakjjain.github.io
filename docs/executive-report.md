# Portfolio Executive Report & Action Plan

**Project:** deepakjjain.github.io
**Owner:** Deepak Jain
**Role:** Full-Stack Developer
**Date:** February 2026
**Status:** Pre-Implementation

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Assessment](#2-current-state-assessment)
3. [Recommended Technology Stack](#3-recommended-technology-stack)
4. [Portfolio Content Strategy](#4-portfolio-content-strategy-full-stack-developer)
5. [SEO Strategy](#5-seo-strategy)
6. [Performance & Accessibility Targets](#6-performance--accessibility-targets)
7. [GitHub Actions Deployment Workflow](#7-github-actions-deployment-workflow)
8. [Phased Action Plan](#8-phased-action-plan)
9. [Analytics Decision](#9-analytics-decision)
10. [Quick Reference Cheatsheet](#10-quick-reference-cheatsheet)

---

## 1. Executive Summary

This document defines the complete strategy for building Deepak Jain's professional portfolio at `deepakjjain.github.io`. The portfolio currently exists as a bare HTML file with a single heading — a blank canvas that represents a significant missed opportunity for a Full-Stack Developer seeking to differentiate in a competitive 2026 hiring market.

### Goal

Deliver a production-quality, self-hosted portfolio that functions as an evergreen technical sales document — converting recruiter visits into interview conversations.

### Recommended Approach

Build on **Astro v5** (the dominant SSG for portfolios in 2026), styled with **Tailwind CSS v4 + DaisyUI v5**, animated with **GSAP ScrollTrigger**, and deployed automatically via **GitHub Actions**. This stack produces 100/100 Lighthouse scores out of the box, ships zero JavaScript by default, and has first-class GitHub Pages support.

### Target Audience

| Audience | What They Want to See |
|----------|-----------------------|
| Technical Recruiters | Clear title, stack, contact info, resume link in ≤ 5 seconds |
| Engineering Managers | Real project outcomes with metrics, architecture decisions |
| Peer Developers | Code quality, open-source activity, depth of technical writing |

### Success Criteria

- Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices 100, SEO 100
- Live at `deepakjjain.github.io` with CI/CD on every push to `main`
- 3–5 project case studies with measurable outcomes
- WCAG 2.2 Level AA compliant

---

## 2. Current State Assessment

### Repository Analysis

| Item | Current State |
|------|--------------|
| `index.html` | Single `<h1> My Protfolio </h1>` — no structure, no styling |
| `docs/protfolio.md` | Stack notes only — good reference, not user-facing content |
| `README.md` | Default GitHub Pages README |
| Build system | None |
| CSS framework | None |
| CI/CD | None |
| GitHub Pages config | Default (serving raw `index.html`) |
| Analytics | None |
| SEO | None — no `<title>`, no meta tags |
| Performance | N/A (no meaningful content) |

### Known Issues

| Issue | Location | Severity |
|-------|----------|----------|
| Typo: "Protfolio" → "Portfolio" | `index.html` line 1 | Low (will be replaced) |
| Typo in filename: `protfolio.md` | `docs/protfolio.md` | Low (preserved as internal notes) |
| Missing `<html>`, `<head>`, `<body>` tags | `index.html` | High (invalid HTML) |
| No `<title>` or meta description | `index.html` | High (SEO failure) |

### Gap Analysis

| Capability | Required for Competitive FS Portfolio | Current State |
|------------|--------------------------------------|---------------|
| Professional design | Yes | Missing |
| Project case studies | Yes (3–5 minimum) | Missing |
| Skills matrix | Yes | Missing |
| Contact / resume link | Yes | Missing |
| SEO meta tags | Yes | Missing |
| Open Graph / social preview | Yes | Missing |
| Mobile responsiveness | Yes | Missing |
| Automated deployment | Yes | Missing |
| Performance (LCP ≤ 2s) | Yes | N/A |
| Accessibility (WCAG 2.2 AA) | Yes | Missing |
| GitHub activity widget | Recommended | Missing |
| Blog / writing section | Optional | Missing |
| Analytics | Recommended | Missing |
| sitemap.xml | Yes | Missing |
| robots.txt | Yes | Missing |
| Custom 404 page | Recommended | Missing |

---

## 3. Recommended Technology Stack

### Core Stack

| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| SSG | Astro | v5.x | Islands architecture, 100/100 Lighthouse baseline, best-in-class portfolio ecosystem |
| CSS | Tailwind CSS | v4.x | Vite-native, CSS-first config, fastest build in class |
| Components | DaisyUI | v5.x | Complete Tailwind component layer, rapid polished UI |
| Animation | GSAP + ScrollTrigger | 3.x | Industry-standard scroll animation, impresses hiring managers |
| Language | TypeScript | 5.x | Type safety for Content Collections and components |
| Package Manager | pnpm | 9.x | Fast, disk-efficient, strict dependency resolution |
| CI/CD | GitHub Actions | — | First-class `withastro/action@v5` integration |
| Analytics | Plausible | SaaS | Privacy-first, GDPR compliant, no cookie banner |
| Sitemap | @astrojs/sitemap | latest | Auto-generates sitemap.xml from Astro routes |

### Key Implementation Notes

**Tailwind CSS v4 — Vite Plugin (not PostCSS)**

Tailwind v4 uses a Vite plugin approach. The deprecated PostCSS integration from v3 should NOT be used.

```bash
# Correct Astro + Tailwind v4 setup
pnpm astro add tailwind
# This installs @astrojs/tailwind and configures the Vite plugin automatically
```

In `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://deepakjjain.github.io',
  integrations: [tailwind()],
});
```

**DaisyUI v5 with Tailwind v4**

```bash
pnpm add daisyui@latest
```

In your main CSS file (`src/styles/global.css`):
```css
@import "tailwindcss";
@plugin "daisyui";
```

**Why not alternatives?**

| Tool | Reason to Skip |
|------|---------------|
| Jekyll | Ruby ecosystem declining; slow builds |
| Gatsby | Replaced by Astro; heavy complexity |
| Next.js | Optimised for Vercel, not GitHub Pages |
| Create React App | Officially deprecated |
| Nuxt | Vue-specific; smaller hiring signal |

---

## 4. Portfolio Content Strategy (Full-Stack Developer)

### Required Sections

#### 4.1 Hero Section
**Purpose:** Make an instant impression. Recruiters decide in 3 seconds.

Content requirements:
- Full name: **Deepak Jain**
- Title: **Full-Stack Developer** (with optional specialisation e.g. "React · Node.js · Cloud")
- 1-line value proposition (e.g. "I build fast, accessible web products that scale.")
- CTA buttons: GitHub · Download Resume · Contact Me
- Optional: Subtle GSAP entrance animation on load

#### 4.2 About
**Purpose:** Humanise the candidate beyond a list of technologies.

Content requirements:
- 2–3 sentence bio (who you are, what you care about, where you're headed)
- Tech philosophy (e.g. "I favour simple, maintainable solutions over clever ones")
- Years of experience
- Location / availability (remote, open to relocation, etc.)

#### 4.3 Skills Matrix
**Purpose:** Fast scanning for recruiters using keyword matching.

Organise by domain — not a flat tag cloud:

| Domain | Example Technologies |
|--------|---------------------|
| **Frontend** | React, TypeScript, Next.js, Astro, HTML5, CSS3 |
| **Backend** | Node.js, Express, Python, REST APIs, GraphQL |
| **Database** | PostgreSQL, MongoDB, Redis, Prisma |
| **DevOps / Cloud** | Docker, GitHub Actions, AWS/GCP, CI/CD |
| **Tools** | Git, VS Code, Figma, Postman, Linux |

#### 4.4 Projects (3–5 Case Studies)
**Purpose:** Proof of capability — the most important section.

Each project must include:

| Field | Example |
|-------|---------|
| **Project name** | E-Commerce Platform |
| **One-line description** | Full-stack shopping app with real-time inventory |
| **Problem / Challenge** | Legacy monolith causing 8s page loads |
| **My Role** | Lead developer, solo or team context |
| **Architecture decisions** | Why you chose specific patterns/tools |
| **Tech stack** | React, Node.js, PostgreSQL, Redis, Docker |
| **Outcome / Metrics** | 70% load time reduction, 99.9% uptime, 500+ users |
| **Links** | Live demo + GitHub repo |

**Case Study Template (MDX format for Astro Content Collections):**

```mdx
---
title: "Project Name"
description: "One-line description"
stack: ["React", "Node.js", "PostgreSQL", "Docker"]
role: "Lead Full-Stack Developer"
live: "https://example.com"
github: "https://github.com/deepakjjain/project"
featured: true
order: 1
---

## Challenge & Context

[2–3 sentences: what problem existed, why it mattered]

## Architecture Decisions

[Key technical choices you made and why — this is what interviewers ask about]

## What I Built

[Specific contributions, components, systems you designed/implemented]

## Result

- Metric 1: [e.g., "Reduced API response time from 800ms to 120ms"]
- Metric 2: [e.g., "Increased test coverage from 20% to 85%"]
- Metric 3: [e.g., "Deployed to production serving 1,200 monthly active users"]
```

#### 4.5 Open Source / GitHub Activity
**Purpose:** Show consistent engagement with the developer community.

Options (choose one):
- Embed GitHub contribution graph (via `github-readme-stats` or similar)
- Custom widget fetching public GitHub API data (repos, stars, recent activity)
- List of notable open-source contributions with PR links

#### 4.6 Writing / Blog (Optional but High-Signal)
**Purpose:** Demonstrates deep expertise and communication skills — increasingly valued in senior roles.

Astro Content Collections make this straightforward to add. Even 3–5 technical articles signals thought leadership.

#### 4.7 Contact Section
**Purpose:** Remove all friction from reaching you.

Must include:
- Email (linked with `mailto:`)
- LinkedIn profile URL
- GitHub profile URL
- Resume download (PDF, hosted in `/public/resume.pdf`)
- Optional: Calendly link for scheduling

---

## 5. SEO Strategy

### Page Title

```html
<title>Deepak Jain | Full-Stack Developer</title>
```

### Meta Description

```html
<meta name="description" content="Deepak Jain is a Full-Stack Developer specialising in React, Node.js, and cloud-native web applications. Open to new opportunities — view projects and resume." />
```
Target: ~155 characters, front-load name + role, include hiring intent keywords.

### JSON-LD Person Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Deepak Jain",
  "jobTitle": "Full-Stack Developer",
  "url": "https://deepakjjain.github.io",
  "sameAs": [
    "https://github.com/deepakjjain",
    "https://linkedin.com/in/deepakjjain"
  ]
}
</script>
```

### Open Graph Tags

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://deepakjjain.github.io/" />
<meta property="og:title" content="Deepak Jain | Full-Stack Developer" />
<meta property="og:description" content="Full-Stack Developer specialising in React, Node.js, and cloud-native web applications." />
<meta property="og:image" content="https://deepakjjain.github.io/og-image.png" />
```

OG image spec: **1200 × 630px** PNG, include name + title + a clean visual.

### Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Deepak Jain | Full-Stack Developer" />
<meta name="twitter:description" content="Full-Stack Developer specialising in React, Node.js, and cloud-native web applications." />
<meta name="twitter:image" content="https://deepakjjain.github.io/og-image.png" />
```

### Canonical URL (Astro config)

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://deepakjjain.github.io',
  // Astro automatically generates canonical URLs from this
});
```

### Astro SEO Component Pattern

Create `src/components/SEO.astro` to centralise all meta tags. Pass props (`title`, `description`, `image`) from each page.

---

## 6. Performance & Accessibility Targets

| Metric | Target | Notes |
|--------|--------|-------|
| Lighthouse Performance | **95+** | 2026 baseline for competitive portfolios |
| Lighthouse Accessibility | **95+** | Enforce programmatically via axe-core in CI |
| Lighthouse Best Practices | **100** | HTTPS, no console errors, correct image formats |
| Lighthouse SEO | **100** | Complete meta tags, sitemap, robots.txt |
| LCP (Largest Contentful Paint) | **≤ 2.0s** | Core Web Vitals 2026 threshold |
| INP (Interaction to Next Paint) | **≤ 150ms** | Replaces FID as the 2024+ interactivity metric |
| CLS (Cumulative Layout Shift) | **≤ 0.08** | Reserve space for images; avoid layout shifts |
| WCAG Conformance | **Level AA** | ISO/IEC 40500:2025 — legally required in many jurisdictions |
| TTFB (Time to First Byte) | **≤ 600ms** | GitHub Pages CDN; should be trivially fast |
| Total page weight | **≤ 500KB** | Uncompressed; Astro default is well under this |

### Accessibility Checklist

- [ ] Keyboard navigation: all interactive elements reachable via Tab
- [ ] Focus indicators: visible, high-contrast focus rings (do not use `outline: none` without replacement)
- [ ] Color contrast: ≥ 4.5:1 for normal text, ≥ 3:1 for large text (WCAG 2.2 AA)
- [ ] Touch targets: ≥ 44 × 44px (WCAG 2.5.5)
- [ ] Images: all `<img>` tags have descriptive `alt` attributes
- [ ] ARIA: semantic HTML first; ARIA only where native semantics are insufficient
- [ ] Skip link: `<a href="#main">Skip to content</a>` as first focusable element
- [ ] Reduced motion: `@media (prefers-reduced-motion: reduce)` applied to all GSAP animations

---

## 7. GitHub Actions Deployment Workflow

### Repository Configuration

Before the workflow runs, enable GitHub Pages in the repository:

1. Go to **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Save

### `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://deepakjjain.github.io',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
```

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build Astro site
        run: pnpm build

      - name: Upload build artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Workflow Notes

- `workflow_dispatch` allows manual re-deploys from the GitHub Actions UI
- `concurrency` group prevents race conditions from concurrent pushes
- `pnpm/action-setup@v4` reads `packageManager` field from `package.json` if present
- `--frozen-lockfile` ensures deterministic builds (fails if `pnpm-lock.yaml` is out of date)
- Artifact upload (`upload-pages-artifact@v3`) + deploy (`deploy-pages@v4`) are the current recommended pair for 2026

---

## 8. Phased Action Plan

### Phase 1 — Foundation (Week 1)

Goal: Working, deployed Astro site at `deepakjjain.github.io`

- [ ] Scaffold Astro v5 project in repo root (`pnpm create astro@latest .`)
- [ ] Configure Tailwind CSS v4 via `pnpm astro add tailwind` (Vite plugin, not PostCSS)
- [ ] Add DaisyUI v5 (`pnpm add daisyui@latest`)
- [ ] Set up TypeScript (`tsconfig.json` — use Astro's `strict` preset)
- [ ] Create `.github/workflows/deploy.yml` (exact YAML from Section 7)
- [ ] Enable GitHub Pages → GitHub Actions source in **repo Settings → Pages**
- [ ] Push to `main` → verify live deployment at `deepakjjain.github.io`
- [ ] Install GSAP (`pnpm add gsap`)
- [ ] Add `@astrojs/sitemap` integration

**Verification:** Open DevTools → Lighthouse → run audit on live site. Expect 90+ even on a blank Astro page.

---

### Phase 2 — Core Sections (Week 2)

Goal: Full-page layout with all primary sections visible

- [ ] Build `src/layouts/BaseLayout.astro` — global HTML shell with SEO head
  - Inject: `<title>`, meta description, OG tags, Twitter Card, JSON-LD Person schema
  - Link: Google Fonts (or local font via `@fontsource`)
  - Link: global CSS (`src/styles/global.css`)
- [ ] Build `src/components/SEO.astro` — reusable meta tag component
- [ ] Build `src/components/Nav.astro` — responsive navigation
  - Desktop: horizontal link list
  - Mobile: hamburger menu (DaisyUI `drawer` or custom)
  - Smooth scroll to page sections (all on single-page layout)
- [ ] Build **Hero** section (`src/components/Hero.astro`)
  - Name, title, value proposition
  - CTA buttons: GitHub, Resume (PDF download), Contact
  - Subtle GSAP entrance animation on page load
- [ ] Build **About** section (`src/components/About.astro`)
- [ ] Build **Skills Matrix** component (`src/components/Skills.astro`)
  - Grouped tabs or accordion by domain (Frontend / Backend / DevOps / Tools)

**Verification:** All sections render on desktop and mobile. No horizontal scroll on 375px viewport.

---

### Phase 3 — Projects (Week 3)

Goal: 3–5 case studies live with individual project pages

- [ ] Define Astro Content Collection schema (`src/content/config.ts`)
  - Fields: title, description, stack (array), role, live (url), github (url), featured (bool), order (number)
- [ ] Write 3–5 project case studies as `.mdx` files in `src/content/projects/`
  - Use the case study template from Section 4.4
  - Include real metrics where available
- [ ] Build `src/components/ProjectCard.astro` — grid card for project listing
- [ ] Build `src/pages/projects/[slug].astro` — individual project detail pages
  - Render full MDX content, stack badge list, links to live + GitHub
- [ ] Add GitHub API activity widget to `src/components/GitHubActivity.astro`
  - Fetch from `https://api.github.com/users/deepakjjain` (public, no auth needed)
  - Show: public repos, total stars, recent activity (last 5 events)
  - Cache with Astro's `fetch` at build time to avoid rate limits

**Verification:** All project cards render in grid. Clicking a card opens the correct detail page. GitHub widget shows live data.

---

### Phase 4 — Polish & Launch (Week 4)

Goal: Production-ready, audited, live portfolio

- [ ] Add GSAP ScrollTrigger entrance animations
  - Hero: fade-in + slide-up on load
  - Each section: fade-in as it enters viewport
  - Project cards: staggered reveal
  - Wrap all animations in `matchMedia("(prefers-reduced-motion: no-preference)")` check
- [ ] Add Plausible Analytics script to `BaseLayout.astro`
  ```html
  <script defer data-domain="deepakjjain.github.io"
    src="https://plausible.io/js/script.js"></script>
  ```
- [ ] WCAG 2.2 audit — use axe DevTools browser extension
  - [ ] Keyboard navigation through all interactive elements
  - [ ] Focus indicators visible and high-contrast
  - [ ] Color contrast ≥ 4.5:1 for all body text
  - [ ] Touch targets ≥ 44px
  - [ ] All images have `alt` text
- [ ] Lighthouse audit (Chrome DevTools, Incognito, no extensions)
  - [ ] Performance ≥ 95
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices = 100
  - [ ] SEO = 100
- [ ] Build and test custom `src/pages/404.astro` page
  - Include navigation back to home; friendly message
- [ ] Verify `sitemap.xml` generated at `deepakjjain.github.io/sitemap-index.xml`
- [ ] Add `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://deepakjjain.github.io/sitemap-index.xml
  ```
- [ ] Final cross-browser check: Chrome, Firefox, Safari (desktop + mobile)
- [ ] Announce launch: LinkedIn post, update GitHub profile README

---

## 9. Analytics Decision

### Recommendation: Plausible Analytics (SaaS)

**Why Plausible over alternatives:**

| Criteria | Plausible | Umami (self-hosted) | Google Analytics 4 |
|----------|-----------|--------------------|--------------------|
| Setup complexity | One `<script>` tag | Requires server | One `<script>` tag |
| Privacy | GDPR/CCPA compliant | GDPR compliant | Requires cookie banner |
| Cookie banner required | No | No | Yes (EU) |
| Script size | < 1KB | < 2KB | ~28KB |
| Lighthouse impact | None | None | Negative |
| Hosting | EU cloud | Self-hosted | Google servers (US) |
| Cost | $4/month | Free (hosting cost) | Free |
| Dashboard | Excellent | Good | Complex |

**Setup:**

1. Sign up at [plausible.io](https://plausible.io), add site `deepakjjain.github.io`
2. Add to `src/layouts/BaseLayout.astro` `<head>`:

```html
<script
  defer
  data-domain="deepakjjain.github.io"
  src="https://plausible.io/js/script.js"
></script>
```

**What you'll track out of the box (no config needed):**
- Unique visitors and page views
- Traffic sources (direct, LinkedIn, GitHub, search)
- Top pages
- Geographic breakdown
- Device and browser breakdown
- Goal conversions (resume downloads, GitHub clicks) — add via Plausible UI

---

## 10. Quick Reference Cheatsheet

### Initial Scaffolding

```bash
# Clone your repo (if not already local)
git clone https://github.com/deepakjjain/deepakjjain.github.io.git
cd deepakjjain.github.io

# Scaffold Astro v5 in current directory
pnpm create astro@latest . --template minimal

# Add integrations
pnpm astro add tailwind
pnpm astro add sitemap

# Add packages
pnpm add daisyui@latest
pnpm add gsap
pnpm add @fontsource/inter  # or your chosen font
```

### Local Development

```bash
# Start dev server (hot reload)
pnpm dev
# → http://localhost:4321

# Type-check
pnpm astro check

# Production build (test locally)
pnpm build
pnpm preview
# → http://localhost:4321 (serving /dist)
```

### Content Collections

```bash
# Project MDX files live in:
src/content/projects/project-name.mdx

# Schema defined in:
src/content/config.ts

# After adding a new project file, restart dev server
pnpm dev
```

### Deployment

```bash
# Deploy is automatic on push to main
git add .
git commit -m "feat: add projects section"
git push origin main
# → GitHub Actions builds and deploys automatically
# → Live at https://deepakjjain.github.io in ~60 seconds

# Manual re-deploy (without a code push)
# → GitHub repo → Actions tab → "Deploy to GitHub Pages" → Run workflow
```

### Lighthouse Audit Commands

```bash
# Install lighthouse CLI for local audits
pnpm add -g lighthouse

# Audit local preview build
pnpm build && pnpm preview &
lighthouse http://localhost:4321 --view

# Audit live site
lighthouse https://deepakjjain.github.io --view
```

### Key File Locations

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro + integrations config |
| `src/layouts/BaseLayout.astro` | Global HTML shell, SEO head |
| `src/components/SEO.astro` | Meta tags component |
| `src/components/Nav.astro` | Navigation |
| `src/pages/index.astro` | Homepage (all sections) |
| `src/pages/404.astro` | Custom 404 page |
| `src/pages/projects/[slug].astro` | Dynamic project detail pages |
| `src/content/config.ts` | Content Collection schema |
| `src/content/projects/` | Project MDX case studies |
| `src/styles/global.css` | Global styles, Tailwind + DaisyUI imports |
| `public/resume.pdf` | Resume download |
| `public/robots.txt` | Search crawler instructions |
| `public/og-image.png` | Social preview image (1200×630px) |
| `.github/workflows/deploy.yml` | CI/CD deployment workflow |

---

*This document is the authoritative reference for the portfolio build. Update it as architectural decisions evolve. Last updated: February 2026.*

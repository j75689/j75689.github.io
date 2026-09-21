# Portfolio Site Design — j75689.github.io

**Date:** 2026-09-21  
**Status:** Approved for implementation planning  
**Source notes:** `.idea/Design.md` (visual), `README.md` (resume content)

## Goal

Rebuild `j75689.github.io` as an English dual-purpose single-page site: recruiter-friendly resume + engineering portfolio. Same content powers a dark interactive home page and a light print/PDF page. Structured data is the single source of truth.

## Decisions

| Topic | Choice |
|-------|--------|
| Purpose | Single page: Hero → Stack → Projects → Experience (+ education/connect) |
| Language | English only |
| Density | Compact by default; Experience expandable for full bullets |
| Content source | Typed module `src/lib/data/resume.ts` |
| README | Generate root `README.md` from data; archive current resume at `resume/README.md` |
| Print / PDF | Separate route `/resume` (light, print-first); home stays dark/interactive |
| Stack | SvelteKit (Svelte 5) + Tailwind + `adapter-static` → GitHub Pages |
| Project media | Optional static `image` in repo; if absent, hostname + title link-card (optional same-origin favicon with fallback)—no live screenshots |

## Out of scope (v1)

- i18n (Chinese / Japanese)
- Blog or notes
- Live website screenshot services or iframes
- Separate deep pages per project
- Full E2E test suite

## Architecture

```
resume.ts  ──►  /            (dark interactive portfolio)
           ──►  /resume      (light print/PDF page)
           ──►  generate-readme → root README.md
```

- **Framework:** SvelteKit + Svelte 5 + Tailwind CSS
- **Deploy:** `adapter-static` for GitHub Pages (`j75689.github.io`)
- **Archive:** Move existing root `README.md` to `resume/README.md` (historical snapshot; not runtime source)
- **Visual reference:** `.idea/Design.md` remains reference; this spec is authoritative for implementation

### Routes

| Path | Role |
|------|------|
| `/` | Dark interactive portfolio matching Design.md layout |
| `/resume` | Light, print-first full resume; all experience details expanded; no expand/collapse chrome |

## Data model

`src/lib/data/resume.ts` exports a typed object:

- **`profile`** — name, title, location, availability, summary, links (`github`, `linkedin`, `email`)
- **`skills`** — four categories → tag lists: Core Languages; Blockchain & Protocol; Backend & Systems; Infrastructure & Observability. Matrix: `grid-cols-1 md:grid-cols-2` (or 2×2) so four cards stay readable on desktop.
- **`projects[]`**
  - `title` (required)
  - `role` (optional)
  - `description` (required)
  - `url` (optional; if missing, omit external-link affordance and do not wrap the card as a link)
  - `tags[]` (tech tags)
  - `image?` (optional path to static asset under `static/` or equivalent)
- **`experience[]`**
  - company, title, dates, location
  - `highlights[]` — compact bullets shown by default on `/`
  - `details[]` — full bullets shown on expand and always on `/resume`
  - If `details` is empty, hide expand control
- **`education`** — degree, school, years
- **`cta`** — connect copy + button labels

Content is seeded from the current README (and Design.md project blurbs), then maintained only in `resume.ts`.

## Components

| Unit | Responsibility | Depends on |
|------|----------------|------------|
| `AvailabilityChip` | Green pulse + availability text | `profile.availability` |
| `Hero` | Name, role (BNB gold accent), location, social CTAs, copy-email | `profile` |
| `ProfileSummary` | Short summary block | `profile.summary` |
| `SkillsMatrix` | Responsive category cards + mono tags | `skills` |
| `ProjectGrid` / `ProjectCard` | Grid of project cards | `projects` |
| `ExperienceTimeline` | Vertical timeline; compact + expand/collapse | `experience` |
| `EducationConnect` | Footer two-column block | `education`, `cta` |
| `ResumePrintPage` | `/resume` light full layout | same data; always expanded |
| `generate-readme` script | Writes root `README.md` from data | `resume.ts` |

Shared presentation logic reads only from the data module; home and print pages compose the same fields differently.

## Project cards (home)

Each card shows:

1. **Media**
   - If `image` present: static cover image from the repo
   - If absent: link-card preview showing hostname (parsed from `url`) + title, plus a generic link icon. Optionally try `${origin}/favicon.ico` with onerror fallback to the generic icon. No screenshot APIs, no iframes.
2. **Title** (+ optional role)
3. **Description**
4. **Tech tags** (mono chips, Design.md gold-tinted tag style)
5. **URL** — when set, title (and card) links out with external-link icon; when unset, media/title are non-linking

Layout: 2 columns desktop, 1 column mobile. Hover: slight lift + gold border glow (Design.md).

## Visual system

### Home (`/`) — Design.md tokens

- Background `#0a0d12`; glass surfaces; borders `rgba(255,255,255,0.08)`; accent `#f3ba2f`; text slate scale; status green `#10b981`
- Max content width `980px`; padding `px-4 py-16 md:py-24`
- Card radius `12px`; tag radius `6px`; pill radius for chips
- Mono for tags/stats; headings tight tracking

### Sections (home order)

1. Availability chip (pulse)
2. Hero + social CTAs (GitHub, LinkedIn, copy email)
3. Profile summary
4. Technical stack matrix
5. Featured projects
6. Work experience timeline (expandable)
7. Education | Let's Connect
8. Low-emphasis link to printable resume (`/resume`)—must not compete with primary CTAs

### `/resume`

- Light theme, high contrast, no glass/glow/pulse/toast
- Full experience `details` always visible
- Print CSS: hide nav / “Back to site”; sensible margins; avoid breaking mid-heading

## Interactions & errors

- **Copy email:** clipboard write + toast; on failure, show email text and `mailto:` fallback
- **Experience:** default `highlights` only; “Show more / Show less” toggles `details`
- **Missing project URL:** no external-link icon
- **Empty `details`:** no expand control
- **404:** simple not-found with link home (static adapter fallback)

## README workflow

1. Move current root `README.md` → `resume/README.md` (archive)
2. `npm run generate:readme` reads `resume.ts` and writes root `README.md` (Markdown resume for the GitHub repo landing page)
3. Wire `generate:readme` as a `prebuild` step so `npm run build` always refreshes README from data

## Testing & definition of done

### Verification

- Manual: desktop + mobile on `/` and `/resume`; expand experience; copy email (including clipboard failure path); project without `image` shows link-card
- Print: browser print `/resume` → PDF; no interactive chrome; full content
- Build: `npm run build` produces static site; generated root `README.md` matches data
- Optional: light Vitest coverage for data shape / README generator (no full E2E in v1)

### Done when

1. GitHub Pages serves the English single-page site (Design.md structure + project cards as specified)
2. `/resume` is printable / save-as-PDF ready
3. `resume.ts` is the only content source; root `README.md` is generated; archive lives at `resume/README.md`
4. No i18n, blog, or live screenshot dependency

## Implementation notes

- Prefer CSS variables for design tokens so `/` and `/resume` can switch theme without duplicating component trees unnecessarily
- Seed project list from Design.md featured set (BSC, reth-bsc, zkBNB-SMT, Greenfield, Autonomous Intelligence Pipeline, Distributed Payment & Saga); images optional per project
- Keep components small and single-purpose for isolated editing

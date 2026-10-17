# MEMORY.md — Project Memory & Architecture Context

> **Project**: Godwin Apedo Personal Portfolio (`godwin-apedo-portfolio`)  
> **Last Updated**: October 2026  
> **Repository**: [ApedoG17/godwin-apedo-portfolio](https://github.com/ApedoG17/godwin-apedo-portfolio.git)  
> **Active Branch**: `first-polish`  

---

## 1. Project Purpose & Professional Goals

* **Identity**: Personal developer and product portfolio of **Godwin Mawulie Yaw Apedo**.
* **Role**: Computer Science Student (Level 200, University of Ghana, Legon), Product Manager, and Software Builder based in Accra, Ghana.
* **Core Value Proposition**: Demonstrating genuine software systems built to solve operational problems (e.g. food ordering and dispatch, vehicle rental logistics) rather than purely decorative showcases or simple static pages.
* **Target Audience**: Technical recruiters, engineering hiring managers, software teams looking for interns or junior full-stack developers, and commercial product clients.

---

## 2. Verified Technology Stack

| Layer | Technology | Details / Configuration |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.4.0 | App Router architecture, Turbopack compiler (`@tailwindcss/turbopack`) |
| **Language** | TypeScript 5.x | Strict type checking (`tsconfig.json`), typed content datasets |
| **Styling** | Tailwind CSS v4 | Direct `@import "tailwindcss";` and `@theme` token definitions in `src/app/globals.css` |
| **Motion** | Motion 14.2.0 | High-performance animation primitives imported from `motion/react` |
| **Typography** | Geist Sans & Geist Mono | Next.js variable fonts loaded in `src/app/layout.tsx` |
| **Icons** | Lucide React 1.56.0 | Semantic icons throughout all sections |
| **Utilities** | clsx 2.1.1 + tailwind-merge 3.7.0 | Combined in `src/lib/utils.ts` as `cn(...)` |
| **Deployment Target** | Vercel | Production Next.js deployment pipeline |

---

## 3. Project Structure

```
godwin-apedo-portfolio/
├── AGENTS.md               # Strict operating guidelines for AI agents
├── MEMORY.md               # High-level architecture and project memory (this file)
├── DESIGN_SYSTEM.md        # Comprehensive visual identity, tokens, and components
├── TASKS.md                # Development roadmap, verified progress, and QA
├── README.md               # Public project overview
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
├── package.json            # Dependencies and scripts
├── public/
│   ├── images/             # Real logos, icons, screenshots, and portraits
│   └── pdf/                # Downloadable resumes (Godwin_Apedo_CV.pdf)
└── src/
    ├── app/
    │   ├── api/contact/    # Rate-limited contact form API route
    │   ├── contact/        # Dedicated contact and social media hub page
    │   ├── globals.css     # Tailwind v4 @theme tokens and glassmorphism utilities
    │   ├── layout.tsx      # Root shell with Geist fonts, Navbar, Footer
    │   └── page.tsx        # Homepage single-page narrative
    ├── components/
    │   ├── contact/        # Contact hub modular components
    │   ├── core/           # 16 Motion primitive components (Spotlight, InView, etc.)
    │   ├── layout/         # Navbar (floating glass dock) and Footer
    │   ├── sections/       # 8 Homepage sections
    │   └── ui/             # Reusable UI atoms (Button, Badge, CopyEmailButton)
    ├── content/            # Typed datasets (education, projects, skills)
    ├── lib/                # Motion tokens, constants, contact data, utils
    └── types/              # Strict TypeScript definitions
```

---

## 4. Section Summary & Implementation Status

All 8 homepage sections and the dedicated `/contact` page are implemented and active:

1. **Hero (`HeroSection.tsx`)** — *Implemented & Polished*
   - Two-column layout with bold headline (`text-gradient-white` and `text-gradient-teal`).
   - Borderless portrait (`/images/me-home-nobg.png`) with soft linear-gradient cloud mask fade strictly around lower torso.
   - Dual floating glass info cards: Current Project (*Chef Apedo Foods*) and Degree/School (*Univ. of Ghana*).
   - Magnetic action buttons (*View My Work*, *Let's Connect*) and verified social link strip.
2. **About Me (`AboutSection.tsx`)** — *Implemented & Polished*
   - First-person professional narrative focusing on practical problem-solving.
   - Three verified highlight cards with custom icons: *CatholicVibes* (`catholic_vibes_icon.png`), *Raku Vehicle Rental* (`raku_icon.svg`), and *Chef Apedo Foods* (`chef_apedo_icon.png`).
3. **Education (`EducationSection.tsx`)** — *Implemented*
   - Academic progression timeline with two milestone cards:
     - `01`: St. Peter's Senior High School (General Science, completed).
     - `02`: University of Ghana, Legon (BSc Computer Science, Level 200, in progress).
   - Official school crests, coursework tags, and core curriculum highlights.
4. **What I Do (`ServicesSection.tsx`)** — *Implemented*
   - 4 discipline cards with custom icons: *Web & Software Development*, *UI/UX & Interface Design*, *Product Thinking & Software Design*, and *Data & IT Operations*.
   - Staggered entrance animations, interactive tool pills, and glass styling.
5. **Tools & Technologies (`TechShowcase.tsx`)** — *Implemented & Polished*
   - 3 categorized horizontal `InfiniteSlider` tracks: *Tools & AI Environments*, *Design & Product*, and *Languages & Frameworks*.
   - Conceptual Group B card: *Development Approach (AI-Assisted Programming / Modern Workflow)*.
   - High-contrast dark navy category titles (`text-slate-900 font-extrabold`) with purple sector badge pills and accessible section-level pause/resume toggle.
6. **Featured Projects (`ProjectsSection.tsx`)** — *Implemented & Polished*
   - 2 deep multi-tier case studies:
     - `01`: *Chef Apedo Foods* (Solo commercial food ordering, real-time kitchen operations, and courier dispatch platform).
     - `02`: *Raku Vehicle Rental Management System* (Collaborative university coursework, fleet inventory, client booking, and backoffice pricing engine).
   - Interactive subsystem tab switchers (*Storefront*, *Kitchen & Backoffice*, *Rider Logistics*, *Client Booking*, *Fleet Manager*).
   - Mini-browser chrome frames with deployment URLs, verified captions, and authentic production screenshots.
   - Brand icons beside both project titles and `font-semibold` taglines.
7. **Working Approach (`WorkingApproachSection.tsx`)** — *Implemented*
   - 4-phase engineering methodology grid:
     - `Phase 01`: *Problem-First Discovery*
     - `Phase 02`: *Schema & Architecture Design*
     - `Phase 03`: *Accessible, Mobile-First Delivery*
     - `Phase 04`: *Disciplined Git & Code Hygiene*
   - Rendered using `AnimatedGroup` with purple phase badges and glass cards.
8. **Contact Section (`ContactSection.tsx`) & Dedicated Hub (`/contact`)** — *Implemented*
   - Homepage embedded glass contact card with genuine mailto trigger, copy-email button, and quick download link for CV.
   - Dedicated `/contact` page with full hero, direct communication channels, grouped social media directory, and API-backed contact form with rate limiting.

---

## 5. Key Assets & Real File Paths

* **Portrait**: `public/images/me-home-nobg.png` (transparent background portrait used in Hero).
* **Project Icons**:
  - `public/images/chef_apedo_icon.png` (used in About, Hero floating card, and Featured Projects).
  - `public/images/raku_icon.svg` (used in About and Featured Projects).
  - `public/images/catholic_vibes_icon.png` (used in About section highlight card).
* **Academic Crests**:
  - `public/images/university-of-ghana-crest.png`
  - `public/images/st-peters-school-crest.png`
* **Discipline Icons**:
  - `public/images/W&SD-icon.png` (Web & Software Development)
  - `public/images/U&ID-icon.png` (UI/UX & Interface Design)
  - `public/images/PT&SD-icon.png` (Product Thinking & Software Design)
  - `public/images/Data & IT Operations-icon.png` (Data & IT Operations)
* **Downloadable CV**: `public/pdf/Godwin_Apedo_CV.pdf` (linked across Contact components).

---

## 6. Development & Quality Verification

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run strict TypeScript compilation check (must exit with code 0)
npx tsc --noEmit

# Run ESLint validation (must exit with code 0)
npm run lint

# Compile optimized production Turbopack build (must exit with code 0)
npm run build
```

---

## 7. Git & Version Control Context

* **Repository**: `https://github.com/ApedoG17/godwin-apedo-portfolio.git`
* **Current Working Branch**: `first-polish` (tracks `origin/first-polish`).
* **Main Branch**: `main` (reserved for release; do not merge or force-push without approval).
* **Commit History**: Initial release commit `bcd7c2e` (*"Polish portfolio sections and featured projects"*).
* **Preserved Untracked Files**: Root test screenshot artifacts (`hero_check.png`, `desktop_render.png`, `scratch_chrome/`) remain preserved as untracked files.

---

## 8. Documentation Hierarchy & Navigation

* [AGENTS.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/AGENTS.md): Strict rules, constraints, and operating boundaries for AI coding agents.
* [DESIGN_SYSTEM.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/DESIGN_SYSTEM.md): Tokens, color palettes, glassmorphism rules, component treatments, and motion guidelines.
* [TASKS.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/TASKS.md): Verified completed work, active state, QA checklist, and backlog.

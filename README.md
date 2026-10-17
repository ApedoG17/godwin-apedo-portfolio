# Godwin Apedo — Personal Portfolio & Systems Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-14.2.0-8b5cf6?style=for-the-badge&logo=framer)](https://motion.dev/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Ready-000000?style=for-the-badge&logo=vercel)](https://turbo.build/pack)

> **Personal engineering and product portfolio of Godwin Mawulie Yaw Apedo**: Computer Science student (Level 200, University of Ghana, Legon), Product Manager, and practical software builder based in Accra, Ghana.

Built with a modern **light lavender glassmorphism aesthetic**, fluid micro-interactions, strict accessibility, and evidence-first project case studies demonstrating real software systems built to solve operational problems.

---

## 🌟 Overview & Core Philosophy

This portfolio is designed to showcase **what I can actually build and ship**, rather than simply listing skills on a resume. Every project featured is grounded in verifiable architecture, real production screenshots, live deployment URLs, and honest attribution of individual contributions versus team collaborations.

### Key Architectural Highlights
* **Light Lavender Glassmorphism**: Tailored light palette (`#fbfbfe` base canvas) layered with frosted glass panels (`.glass-panel`, `.glass-card`), subtle ambient radial glows, and high-contrast deep charcoal typography (`#0f172a` / `text-slate-900`) for AAA accessibility.
* **Interactive Subsystem Explorers**: Rather than static thumbnails, project case studies feature tabbed multi-portal explorers allowing visitors to inspect storefronts, real-time kitchen displays, financial ledgers, and courier logistics dashboards directly in-page.
* **Continuous Categorized Tech Sliders**: Independent horizontal marquee sliders (`InfiniteSlider`) organized by engineering discipline, complete with pause-on-hover and section-level pause/resume accessibility toggles.
* **Disciplined Motion System**: Centralized animation tokens (`src/lib/motion.ts`), spring physics, and universal `prefers-reduced-motion` compliance across all interactive components.
* **Dedicated Contact Hub & API**: Dual contact experiences comprising a quick homepage glass inquiry card and a dedicated `/contact` hub backed by a rate-limited Next.js API route (`/api/contact`).

---

## 🛠️ Technology Stack

| Layer | Technology | Details / Configuration |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.4.0](https://nextjs.org/) | App Router, Turbopack compiler (`@tailwindcss/turbopack`), Server Actions & API Route |
| **Runtime & Language** | [React 19.3.0](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/) | Strict compilation (`tsconfig.json`), typed content datasets and schemas |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Native `@theme` tokens in `src/app/globals.css`, zero configuration overhead |
| **Animation Engine** | [Motion 14.2.0](https://motion.dev/) | Imported from `motion/react` with spring physics and reduced-motion fallback |
| **Typography** | [Geist](https://vercel.com/font) | Next.js variable fonts (Geist Sans & Geist Mono) loaded in `src/app/layout.tsx` |
| **Iconography** | [Lucide React](https://lucide.dev/) | Clean, semantic iconography throughout all sections |
| **Utilities** | `clsx` & `tailwind-merge` | Unified conditional class composer (`cn(...)` in `src/lib/utils.ts`) |
| **Deployment** | [Vercel](https://vercel.com/) | Optimized production builds with automated preview pipelines |

---

## 🚀 Sections & Features

### 1. Hero Section
* **Typography**: Fluid clamp scale (`clamp(2rem, 4vw, 3.85rem)`) with dual-gradient styling (`.text-gradient-white` and `.text-gradient-teal`).
* **Portrait Treatment**: Borderless high-resolution portrait (`public/images/me-home-nobg.png`) featuring a soft vertical mask fade and multi-layered mist bed strictly anchored at the lower torso.
* **Floating Glass Cards**: Dual contextual micro-cards highlighting *Current Project* (Chef Apedo Foods) and *Academic Track* (BSc Computer Science at University of Ghana).
* **Magnetic CTAs**: Magnetic action buttons (*View My Work*, *Let's Connect*) and verified social links (GitHub `@ApedoG17`, LinkedIn, direct email).

### 2. About Me
* **Narrative**: Honest first-person reflection on software engineering, product thinking, and operational problem solving.
* **Highlight Cards**: Three compact glass cards with verified brand assets:
  * **CatholicVibes**: Church-focused social community platform (Beta Launch).
  * **Raku Vehicle Rental**: Collaborative university software project.
  * **Chef Apedo Foods**: Independent food-delivery digital brand.

### 3. Academic Progression Timeline (Education)
* **Milestone 01**: St. Peter's Senior High School (General Science, Elective Maths & ICT, April 2022 – Sept 2024).
* **Milestone 02**: University of Ghana, Legon (BSc Computer Science, Level 200, Jan 2025 – Present).
* **Details**: High-resolution official crests, academic milestones, and core computer science coursework chips.

### 4. Areas of Capability ("What I Do")
* **Web & Software Development**: Responsive web applications with Next.js, React, TypeScript, and Tailwind CSS.
* **UI/UX & Interface Design**: Visual systems, typography, and interactive user flows in Figma.
* **Product Thinking & Software Design**: Translating business goals into user stories, schemas, and requirements.
* **Data & IT Operations**: Document digitization, archiving, IT support, and relational database modeling.

### 5. Tools & Technologies Showcase
* **Independent Infinite Sliders**: 3 horizontal marquee tracks separated by sector:
  * *Tools & AI Environments* (Git, GitHub, VS Code, Vercel, Claude Code, Antigravity).
  * *Design & Product* (Figma, Canva, Product Design, Claude Design, UI/UX Design, Design Systems).
  * *Languages & Frameworks* (React, Next.js, TypeScript, Tailwind CSS, Python, Supabase, HTML5/CSS3).
* **High-Contrast Sector Headers**: Deep navy titles (`#0f172a font-extrabold`) paired with purple sector badge pills.
* **Group B — Development Approach**: Dedicated card spotlighting AI-assisted programming, developer tooling, and rapid prototyping workflows.

### 6. Featured Projects Case Studies
* **Chef Apedo Foods (Commercial Platform · Solo Initiative)**:
  * Full-cycle Ghanaian food ordering, real-time kitchen operations, and courier dispatch system designed to bypass third-party aggregator commissions.
  * *Subsystem 1 (Storefront)*: Mobile-first ordering and dynamic cart.
  * *Subsystem 2 (Kitchen & Backoffice)*: Live Supabase WebSocket subscriptions, financial ledger auditing MoMo revenue splits, and SMS marketing broadcasts via Agoo SMS API.
  * *Subsystem 3 (Rider Logistics)*: Dedicated courier dispatch portal (`/rider`) with 4-step *Kwame Dispatch Pipeline*.
  * Live URL: [chefapedofoods.vercel.app](https://chefapedofoods.vercel.app)
* **Raku Vehicle Rental Management System (Software Engineering · Team Project)**:
  * Multi-tier vehicle rental management system eliminating double-booking errors through centralized availability tracking.
  * Role: Product/Client Manager & Primary Contributor (ER schema design, approval workflows, pricing engine, team Git coordination).
  * *Subsystem 1 (Client Booking)*: Fleet class discovery and reservation calculator.
  * *Subsystem 2 (Fleet Manager)*: Operations analytics dashboard and fleet inventory pricing engine.
  * Live URL: [raku-rentals.vercel.app](https://raku-rentals.vercel.app)

### 7. Working Approach (Engineering Methodology)
* **Phase 01**: *Problem-First Discovery* — Analyzing operational bottlenecks before writing code.
* **Phase 02**: *Schema & Architecture Design* — Establishing relational models and typed contracts upfront.
* **Phase 03**: *Accessible, Mobile-First Delivery* — Semantic HTML, high-contrast text, and responsive ergonomics.
* **Phase 04**: *Disciplined Git & Code Hygiene* — Clean commits, branch conventions, and maintainable modular code.

### 8. Contact Section & Dedicated Contact Hub
* **Homepage Glass Card**: Direct inquiry composer with mailto trigger, tactile copy-email button, and quick download link for `Godwin_Apedo_CV.pdf`.
* **Dedicated Hub (`/contact`)**: Modular contact page featuring direct communication channels (Email, WhatsApp username, Location), grouped social profiles, and an API-backed contact form with rate limiting (`/api/contact`).

---

## 📁 Project Architecture

```
godwin-apedo-portfolio/
├── AGENTS.md               # Guidelines, boundaries & workflow for AI coding agents
├── MEMORY.md               # Project memory, high-level context & active state
├── DESIGN_SYSTEM.md        # Tokens, typography, component patterns & motion standards
├── TASKS.md                # Development roadmap, verified tasks & QA checklist
├── README.md               # Public project documentation (this file)
├── next.config.ts          # Next.js configuration (Turbopack enabled)
├── tsconfig.json           # Strict TypeScript configuration
├── eslint.config.mjs       # ESLint flat configuration
├── package.json            # Dependencies and npm scripts
├── public/
│   ├── images/             # Logos, project icons, real screenshots, and portraits
│   │   ├── me-home-nobg.png
│   │   ├── chef_apedo_icon.png
│   │   ├── raku_icon.svg
│   │   ├── catholic_vibes_icon.png
│   │   └── ... (screenshots and crests)
│   └── pdf/
│       └── Godwin_Apedo_CV.pdf  # Downloadable resume
└── src/
    ├── app/
    │   ├── api/contact/    # Rate-limited inquiry submission API route
    │   ├── contact/        # Dedicated contact & social media hub page
    │   ├── globals.css     # Tailwind v4 import, @theme tokens & glass utilities
    │   ├── layout.tsx      # Root HTML shell & Geist variable font configuration
    │   └── page.tsx        # Homepage single-page narrative
    ├── components/
    │   ├── contact/        # Contact hub modular components
    │   │   ├── ContactHero.tsx
    │   │   ├── DirectContactSection.tsx
    │   │   ├── SocialMediaSection.tsx
    │   │   ├── DedicatedContactForm.tsx
    │   │   └── ContactClosingCTA.tsx
    │   ├── core/           # 16 Motion primitives (Spotlight, InfiniteSlider, etc.)
    │   │   ├── animated-group.tsx
    │   │   ├── border-trail.tsx
    │   │   ├── dock.tsx
    │   │   ├── glow-effect.tsx
    │   │   ├── in-view.tsx
    │   │   ├── infinite-slider.tsx
    │   │   ├── magnetic.tsx
    │   │   ├── progressive-blur.tsx
    │   │   ├── scroll-progress.tsx
    │   │   ├── spotlight.tsx
    │   │   ├── text-effect.tsx
    │   │   ├── text-loop.tsx
    │   │   ├── text-scramble.tsx
    │   │   ├── text-shimmer.tsx
    │   │   ├── tilt.tsx
    │   │   └── transition-panel.tsx
    │   ├── layout/         # Floating Navbar & Site Footer
    │   ├── sections/       # 8 Homepage sections
    │   │   ├── HeroSection.tsx
    │   │   ├── AboutSection.tsx
    │   │   ├── EducationSection.tsx
    │   │   ├── ServicesSection.tsx
    │   │   ├── TechShowcase.tsx
    │   │   ├── ProjectsSection.tsx
    │   │   ├── WorkingApproachSection.tsx
    │   │   └── ContactSection.tsx
    │   └── ui/             # Reusable UI atoms (Button, Badge, CopyEmailButton)
    ├── content/            # Strongly-typed datasets
    │   ├── education.ts    # Academic progression milestones
    │   ├── projects.ts     # In-depth project case studies & subsystems
    │   └── skills.ts       # Categorized technical competencies
    ├── lib/
    │   ├── constants.ts    # Site metadata, links, and credentials
    │   ├── contactData.ts  # Verified social channels and direct methods
    │   ├── motion.ts       # Centralized animation tokens and helpers
    │   ├── techIcons.tsx   # Verified SVG tech icon definitions
    │   └── utils.ts        # Class merging helper (clsx + tailwind-merge)
    └── types/
        ├── index.ts        # Project, education, and skill types
        └── contact.ts      # Contact form schemas and API response types
```

---

## 🎨 Design System & Color Tokens

Configured in `src/app/globals.css` using Tailwind CSS v4's `@theme` directive:

| Token | Value / Class | Purpose |
| :--- | :--- | :--- |
| **Canvas Base** | `#fbfbfe` (`--color-base`) | Clean light lavender background |
| **Glass Panel** | `rgba(255, 255, 255, 0.85)` (`.glass-panel`) | Major section containers with 20px blur |
| **Glass Card** | `rgba(255, 255, 255, 0.78)` (`.glass-card`) | Interactive content cards with hover lift |
| **Content Primary** | `#0f172a` (`text-slate-900`) | Headings and titles with AAA contrast |
| **Content Secondary** | `#475569` (`text-slate-600`) | Body copy and descriptions |
| **Content Muted** | `#64748b` (`text-slate-500`) | Captions, dates, and route paths |
| **Violet Primary** | `#7c3aed` (`--color-teal-primary`) | Brand primary accent and focus rings |
| **Vivid Lavender** | `#8b5cf6` (`--color-teal-bright`) | Gradient midpoints and hover borders |
| **Sky Blue** | `#3b82f6` (`--color-blue-accent`) | Team coursework badges |
| **Amber** | `#d97706` (`--color-yellow-accent`) | Solo product initiative badges |
| **Raku Red** | `#d5001c` | Custom Raku Vehicle Rentals brand icon |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v20 or higher (v24 recommended)
* **npm**: v10 or higher

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ApedoG17/godwin-apedo-portfolio.git
   cd godwin-apedo-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View locally**: Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality Assurance & Build Commands

Every change to the portfolio must satisfy strict type checking, linting, and build requirements:

```bash
# 1. Strict TypeScript type check (zero errors allowed)
npx tsc --noEmit

# 2. Next.js & React ESLint validation
npm run lint

# 3. Optimized Turbopack production build
npm run build
```

---

## 📚 Documentation System

This repository includes a dedicated four-part Markdown documentation system for developers and AI pairing assistants:

* [AGENTS.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/AGENTS.md) — Operating guidelines, non-negotiable boundaries, and verification rules for AI coding agents.
* [MEMORY.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/MEMORY.md) — Architectural overview, section states, verified asset paths, and project memory.
* [DESIGN_SYSTEM.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/DESIGN_SYSTEM.md) — Authoritative visual guide, design tokens, typography, component patterns, and motion standards.
* [TASKS.md](file:///c:/Users/ADMIN/Desktop/godwin-apedo-portfolio/TASKS.md) — Development roadmap, verified completed tasks, QA matrix, and final release checklist.

---

## 👤 Author & Contact

**Godwin Mawulie Yaw Apedo**  
*Computer Science Student, Product Manager & Software Builder*  
University of Ghana, Legon · Accra, Ghana

* **GitHub**: [@ApedoG17](https://github.com/ApedoG17)
* **LinkedIn**: [Godwin Mawulie Yaw Apedo](https://www.linkedin.com/in/godwin-mawulie-yaw-apedo-3b3a4b32a/)
* **Email**: [likekodji@gmail.com](mailto:likekodji@gmail.com)
* **Live Portfolio**: [Deploying to Vercel](https://github.com/ApedoG17/godwin-apedo-portfolio)

---

## 📄 License

This portfolio and its custom components are private intellectual property. Open source utilities and motion primitives are used under the MIT License.

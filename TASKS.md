# TASKS.md — Development Roadmap & Verification Record

> **Project**: Godwin Apedo Personal Portfolio (`godwin-apedo-portfolio`)  
> **Status**: High-Polish Phase  
> **Active Branch**: `first-polish`  
> **Verification Standards**: Strict TypeScript (`tsc --noEmit`), ESLint (`npm run lint`), Turbopack Build (`npm run build`), and Browser Visual Checks (Desktop & Mobile).

---

## 1. Completed Work (Verified Against Codebase)

### Foundation & Shell
- [x] **Project Setup**: Next.js 16.4.0 (Turbopack), React 19.3.0, TypeScript 5, Tailwind CSS v4.
- [x] **Design Tokens & Theme**: Light lavender glassmorphism aesthetic (`#fbfbfe` base, `#0f172a` text, purple accents `#7c3aed`) configured in `src/app/globals.css`.
- [x] **Motion Primitives**: 16 reusable animation components in `src/components/core/` and centralized motion tokens in `src/lib/motion.ts`.
- [x] **Navigation (`Navbar.tsx`)**: Floating glass pill, sliding active tab indicator, scroll progress bar, and animated mobile drawer.
- [x] **Footer (`Footer.tsx`)**: Identity badge `GA`, verified social links, contact hub link, and return-to-top shortcut.

### Portfolio Sections (Homepage)
- [x] **Hero Section (`HeroSection.tsx`)**:
  - Bold typography headline (`text-gradient-white` and `text-gradient-teal`).
  - Borderless portrait (`/images/me-home-nobg.png`) with lower torso cloud mask fade.
  - Dual floating glass cards: Current Project (*Davcie Foundation*) and Degree/School (*Univ. of Ghana*).
  - Magnetic action buttons and verified social link strip (GitHub, Email, LinkedIn, Accra location).
- [x] **About Me Section (`AboutSection.tsx`)**:
  - First-person narrative focusing on real problem-solving and software builder identity.
  - 3 glass highlight cards with verified custom icons: *CatholicVibes* (`catholic_vibes_icon.png`), *Raku Vehicle Rental* (`raku_icon.svg`), and *Chef Apedo Foods* (`chef_apedo_icon.png`).
- [x] **Education Section (`EducationSection.tsx`)**:
  - Academic milestone progression cards: St. Peter's SHS (General Science) and University of Ghana (Level 200 BSc Computer Science).
  - Official crest imagery, coursework tags, and core curriculum highlights.
- [x] **What I Do Section (`ServicesSection.tsx`)**:
  - 4 capability cards with custom icons: *Web & Software Development*, *UI/UX & Interface Design*, *Product Thinking & Software Design*, and *Data & IT Operations*.
  - Staggered entrance animations, interactive tool pills, and glass styling.
- [x] **Tools & Technologies (`TechShowcase.tsx`)**:
  - 3 categorized horizontal `InfiniteSlider` tracks: *Tools & AI Environments*, *Design & Product*, and *Languages & Frameworks*.
  - Conceptual Group B card: *Development Approach (AI-Assisted Programming / Modern Workflow)*.
  - High-contrast dark navy category titles (`text-slate-900 font-extrabold`), purple sector badge pills, and accessible pause/resume control.
- [x] **Featured Projects (`ProjectsSection.tsx`)**:
  - 2 deep multi-tier case studies: *Chef Apedo Foods* (solo commercial initiative) and *Raku Vehicle Rental* (team software engineering coursework).
  - Interactive subsystem tab switchers (*Storefront*, *Kitchen & Backoffice*, *Rider Logistics*, *Client Booking*, *Fleet Manager*).
  - Mini-browser chrome frames with deployment URLs, verified captions, and authentic production screenshots.
  - Balanced brand icons beside both project titles and `font-semibold` taglines.
- [x] **Working Approach (`WorkingApproachSection.tsx`)**:
  - 4-phase methodology grid (*Problem-First Discovery*, *Schema & Architecture*, *Accessible Mobile-First Delivery*, *Disciplined Git*).
  - Implemented using `AnimatedGroup` with purple phase badges and glass cards.
- [x] **Contact Section (`ContactSection.tsx`)**:
  - Homepage embedded glass contact card with genuine mailto trigger, copy-email button, and quick download link for CV.

### Dedicated Pages & Endpoints
- [x] **Dedicated Contact Hub (`/contact`)**:
  - Full hero with portrait, direct communication methods (Email, WhatsApp username, Location), grouped social media presence, and dedicated contact form.
- [x] **Contact API Endpoint (`/api/contact`)**:
  - POST handler with in-memory IP rate limiting (max 5 requests per 10 minutes), input sanitization, and structured JSON responses.

### Version Control & Deployment
- [x] **Initial Git Commit & Push**:
  - Committed 109 portfolio files under commit `bcd7c2e` (*"Polish portfolio sections and featured projects"*).
  - Pushed to `origin/first-polish` on GitHub.

---

## 2. Current State

- **Active Branch**: `first-polish` (clean tracking of `origin/first-polish`).
- **Dev Server**: Running on `http://localhost:3000` (Next.js 16.4.0 Turbopack).
- **Core Narrative**: Complete from Hero to Contact, fully functional and verified across desktop and mobile.
- **Visual Theme**: Consistent light lavender glassmorphism aesthetic with high text contrast (`#0f172a` on `#fbfbfe`).

---

## 3. Remaining Work

- [ ] **Working Approach Content Review**:
  - Review section narrative to ensure it communicates Godwin's problem-solving approach clearly without repeating content already covered in About, Education, or Services.
  - Ensure alignment between the 4 methodology phases and real project examples.
- [ ] **Optional Project Deep-Dive Pages (`/projects/[slug]`)**:
  - Evaluate whether dedicated standalone case study routes are needed or if the current in-page interactive subsystem tabs are sufficient.
- [ ] **Root Scratch Artifact Cleanup**:
  - Clean up untracked temporary screenshot artifacts (`hero_check.png`, `desktop_render.png`, `scratch_chrome/`) prior to final release.
- [ ] **Production Domain & Vercel Launch**:
  - Configure custom production domain (`godwinapedo.dev` or chosen domain) on Vercel.
  - Perform live DNS and SSL certificate verification.

---

## 4. Quality Assurance Checklist

| Check | Tool / Method | Target / Standard | Verified Status |
| :--- | :--- | :--- | :--- |
| **TypeScript Validation** | `npx tsc --noEmit` | Strict type checking with 0 errors | ✅ Passed (Exit 0) |
| **ESLint Validation** | `npm run lint` | Next.js core and React hooks rules | ✅ Passed (Exit 0) |
| **Turbopack Build** | `npm run build` | Zero compilation or prefetch errors | ✅ Passed (Exit 0) |
| **Desktop Viewport** | Browser Subagent (1280px+) | Balanced typography, no horizontal scroll | ✅ Verified |
| **Mobile Viewport** | Browser Subagent (390px) | Clean stacking, readable headers, touch ergonomics | ✅ Verified |
| **Interactive Subsystem Tabs** | Browser click testing | Smooth crossfade between portals, correct screenshots | ✅ Verified |
| **Infinite Sliders** | Browser testing | Smooth marquee, pause-on-hover, accessible toggle | ✅ Verified |
| **CV Download** | File check & link | `/pdf/Godwin_Apedo_CV.pdf` accessible & valid | ✅ Verified |
| **Copy-to-Clipboard** | Browser interaction | `CopyEmailButton` tactile feedback and reset | ✅ Verified |
| **Contact API Rate Limiter**| Logic & code review | Max 5 requests / 10-min window per IP | ✅ Verified |
| **Reduced Motion Fallback** | `useReducedMotion()` | Animations gracefully disabled when requested | ✅ Verified |
| **OpenGraph & SEO** | `app/layout.tsx` & `/contact` | Meta titles, descriptions, and OpenGraph tags | ✅ Verified |

---

## 5. Future Improvements (Backlog / Optional)

- [ ] **Automated End-to-End Tests**: Playwright integration for automated regression testing on forms and sliders.
- [ ] **Lighthouse Performance Audit**: Verify 95+ scores for Performance, Accessibility, Best Practices, and SEO.
- [ ] **Analytics & Monitoring**: Privacy-friendly analytics (e.g. Vercel Web Analytics or Umami).
- [ ] **Dark Mode Toggle (Optional)**: If a dark aesthetic is desired in the future, implement via Tailwind v4 CSS variables while keeping light lavender as default.

---

## 6. Final Release Checklist

- [ ] Complete Working Approach review with user.
- [ ] Ensure all documentation files (`AGENTS.md`, `MEMORY.md`, `DESIGN_SYSTEM.md`, `TASKS.md`, `README.md`) are synchronized.
- [ ] Remove temporary root screenshot artifacts.
- [ ] Open Pull Request from `first-polish` to `main`.
- [ ] Merge to `main` upon user approval.
- [ ] Verify live Vercel production deployment.

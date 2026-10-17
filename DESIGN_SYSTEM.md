# DESIGN_SYSTEM.md — Visual Identity & Design System

> **Project**: Godwin Apedo Personal Portfolio (`godwin-apedo-portfolio`)  
> **Aesthetic Foundation**: Modern Light Lavender Glassmorphism  
> **Source of Truth**: `src/app/globals.css` and `src/lib/motion.ts`

---

## 1. Visual Direction & Aesthetic Philosophy

The portfolio employs a **light lavender glassmorphism aesthetic** built with high-craft developer styling:
- **Light Surfaces**: Clean, bright frosted-glass surfaces over a subtle ambient lavender wash (`#fbfbfe`).
- **High-Contrast Typography**: Deep charcoal/navy text (`#0f172a` / `text-slate-900`) ensuring AAA contrast compliance against light panels.
- **Vibrant Violet Accents**: Curated purple and violet hues (`#7c3aed`, `#8b5cf6`) that feel technical, creative, and refined.
- **Domain Authenticity**: Real screenshots, real local context (Accra, Ghana, GH₵, Legon), and verifiable project artifacts. Avoids generic AI tropes (neon grids, floating spheres, filler mockups).

---

## 2. Color Palette & Design Tokens

Defined in `src/app/globals.css` under the Tailwind v4 `@theme` block:

### Surface & Background Tokens
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--color-base` | `#fbfbfe` | Page canvas background |
| `--color-surface` | `rgba(255, 255, 255, 0.85)` | Major section panel background (`.glass-panel`) |
| `--color-surface-card` | `rgba(255, 255, 255, 0.78)` | Interactive content cards (`.glass-card`) |
| `--color-surface-elevated` | `#ffffff` | Elevated elements, tooltips, popovers |

### Text & Content Tokens
| Token | Hex / Tailwind | Contrast / Usage |
| :--- | :--- | :--- |
| `--color-content-primary` | `#0f172a` (`text-slate-900`) | Headings, titles, high-contrast readable text (AAA) |
| `--color-content-secondary`| `#475569` (`text-slate-600`) | Body copy, descriptions, secondary text (AAA) |
| `--color-content-muted` | `#64748b` (`text-slate-500`) | Captions, dates, meta labels (AA) |

### Accent Tokens
| Accent System | Hex / RGBA | Usage |
| :--- | :--- | :--- |
| **Violet Primary** | `#7c3aed` (`--color-lavender-primary`) | Primary brand accent, glowing dots, links |
| **Vivid Lavender** | `#8b5cf6` (`--color-lavender-bright`) | Gradient midpoints, hover borders |
| **Deep Violet** | `#6d28d9` (`--color-teal-dim`) | Text selection highlight |
| **Soft Lavender** | `#ede9fe` (`--color-lavender-soft`) | Badge backgrounds, subtle chip tints |
| **Sky Blue Accent** | `#3b82f6` (`--color-blue-accent`) | Team coursework badge, technical chips |
| **Amber Accent** | `#d97706` (`--color-yellow-accent`) | Solo product designer badge, warning indicators |
| **Raku Brand Red** | `#d5001c` | Custom Raku Vehicle Rentals icon background |

### Borders & Glows
| Token | Value | Usage |
| :--- | :--- | :--- |
| `--color-border-subtle` | `rgba(124, 58, 237, 0.12)` | Resting card borders |
| `--color-border-mid` | `rgba(124, 58, 237, 0.22)` | Emphasized card borders |
| `--color-border-hover` | `rgba(124, 58, 237, 0.45)` | Hover state borders |
| `border-slate-200/90` | `rgba(226, 232, 240, 0.9)` | Neutral crisp structural borders |

### Ambient Background Glows
- **Top-Right Ambient**: Fixed body pseudo-element radial gradient (`rgba(221, 214, 254, 0.45)`).
- **Bottom-Left Ambient**: Fixed body pseudo-element radial gradient (`rgba(224, 231, 255, 0.45)`).
- **Page Blobs**: `.ambient-blob-teal` (lavender), `.ambient-blob-blue` (soft blue), `.ambient-blob-violet` (soft violet).

---

## 3. Typography Hierarchy

Fonts configured in `src/app/layout.tsx`:
- **Primary Sans**: Geist Sans (`var(--font-geist-sans)`, Inter fallback)
- **Monospace**: Geist Mono (`var(--font-geist-mono)`, Menlo fallback)

### Type Scale & Hierarchy
| Level | Classes | Treatment |
| :--- | :--- | :--- |
| **Hero Display** | `text-[clamp(2rem,4vw,3.85rem)] font-black tracking-tight leading-[1.05]` | Combined `.text-gradient-white` and `.text-gradient-teal` |
| **Section H2** | `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.15]` | Dark navy `#0f172a` with gradient accent highlights |
| **Card H3** | `text-base sm:text-lg` or `text-lg sm:text-xl font-extrabold tracking-tight` | High-contrast `#0f172a`, group-hover color transitions |
| **Eyebrow** | `text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600` | Section classification label |
| **Project Tagline** | `text-sm sm:text-base font-semibold mt-1` | `text-purple-700` or `text-blue-700` |
| **Body Text** | `text-sm sm:text-base text-content-secondary leading-relaxed` | Highly readable slate `#475569` |
| **Meta / Mono** | `text-xs font-mono text-content-muted` | Technical descriptors, timestamps, route URLs |

---

## 4. Component Patterns

### 1. Navigation (`Navbar.tsx`)
- **Structure**: Floating glass pill (`.glass-pill`) centered at the top of the viewport (`fixed top-4 sm:top-6 z-50`).
- **Interactive Pill Indicator**: Framer Motion layoutId sliding pill tracking active section.
- **Scroll Progress**: Micro-progress indicator bar (`ScrollProgress`) rendered along the bottom of the navbar.
- **Mobile Drawer**: Fullscreen animated overlay triggered by hamburger toggle.

### 2. Glassmorphism Panels & Cards
- **`.glass-panel`**: Major section containers (`p-6 sm:p-10 lg:p-12`, `rounded-[2.5rem]`, backdrop blur 20px, light surface tint).
- **`.glass-card`**: Individual item cards (`rounded-2xl` or `rounded-3xl`, backdrop blur 16px, hover lift `translateY(-3px)`, shadow intensification).

### 3. Action Buttons & Badges
- **Primary Button**: Solid dark navy (`bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 py-3 font-bold shadow hover:scale-105 active:scale-95`).
- **Secondary / Glass Button**: Frosted glass (`glass-card bg-white/80 border-slate-200/80 text-slate-800 hover:text-purple-700 rounded-full px-6 py-3 font-semibold`).
- **Magnetic Wrapper**: Applied to primary CTAs for subtle cursor attraction (`intensity={0.25} range={100}`).
- **Sector Badges**: Monospace pill pills (`text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/90`).
- **Role Badges**:
  - Solo Initiative: `bg-amber-50 text-amber-800 border-amber-200`
  - Team Engineering: `bg-blue-50 text-blue-800 border-blue-200`

### 4. Project Showcase & Mini Browser Chrome (`ScreenshotFrame`)
- **Chrome Bar**: Three macOS dots (`bg-rose-400`, `bg-amber-400`, `bg-emerald-400`), route path in mono (`chefapedofoods.vercel.app`), subsystem badge.
- **Screenshot Canvas**: 16:9 aspect ratio (`aspect-video`), `object-cover object-top`, subtle scale transition on hover (`group-hover/img:scale-[1.03]`).
- **Footer Caption**: Verified badge and live subsystem caption.
- **Subsystem Tabs**: Tab selector with spring physics (`layoutId={`active-tab-${project.slug}`}`) enabling seamless exploration across 2–3 application portals.

### 5. Technology Sliders (`TechShowcase.tsx`)
- Independent horizontal `InfiniteSlider` components per category.
- Pause-on-hover (`speedOnHover={0}`) plus accessible section-level toggle button.
- Linear edge gradient masks (`[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]`).

---

## 5. Imagery & Asset Guidelines

- **Hero Portrait (`me-home-nobg.png`)**:
  - Cropped borderless portrait with `maskImage` vertical gradient fade.
  - Multi-layered soft cloud mist bed strictly concentrated at the lower torso and base (`-bottom-6` to `-bottom-8`), keeping the face completely clear.
- **Project Icons**:
  - Chef Apedo Foods: `public/images/chef_apedo_icon.png` (white squircle, `border-amber-200/90`).
  - Raku Rentals: `public/images/raku_icon.svg` (`#d5001c` red squircle, `border-red-200/90`).
  - CatholicVibes: `public/images/catholic_vibes_icon.png` (deep purple squircle, `border-purple-200/90`).
  - Size: Standardized to `w-11 h-11 sm:w-12 sm:h-12 rounded-2xl` in project headers and `w-10 h-10 rounded-xl` in About cards.
- **Discipline Icons**: PNG assets in `public/images/` (`W&SD-icon.png`, `U&ID-icon.png`, etc.) displayed inside glass squircle containers.

---

## 6. Motion System & Micro-Interactions

Centralized in `src/lib/motion.ts`:

### Duration Tokens
- `instant`: `0.01s` (fallback for reduced motion)
- `fast`: `0.15s` (micro-interactions, button states)
- `normal`: `0.25s` (dropdowns, tabs, navbar pill)
- `moderate`: `0.40s` (component entrances, cards)
- `deliberate`: `0.55s` (hero typography, prominent cards)

### Easing Curves
- `easeOut`: `[0.16, 1, 0.3, 1]` (deceleration curve matching `--ease-out-expo`)
- `easeInOut`: `[0.65, 0, 0.35, 1]` (smooth modal/drawer curve)

### Accessibility & Reduced Motion
- Every animated component imports and checks `useReducedMotion()`.
- Global CSS override: `@media (prefers-reduced-motion: reduce)` zeroes all transitions and animations.

---

## 7. Known Discrepancies & Resolutions

- **Original README vs. Codebase**: The initial `README.md` listed dark-mode tokens (`#08090C`, `#0E1118`, `#F8FAFC`). The codebase was subsequently upgraded to the **light lavender aesthetic** (`#fbfbfe` base, `#0f172a` text, purple glassmorphism). The code in `src/app/globals.css` is the true source of truth.

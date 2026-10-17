# Godwin Apedo — Personal Portfolio

> Personal portfolio of Godwin Apedo: Computer Science student and practical software builder.

Built with a dark, high-craft developer aesthetic inspired by modern engineering portfolios, featuring responsive layouts, fluid micro-interactions, and evidence-first project case studies.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict checking)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@theme` token configuration)
- **Motion**: [Motion for React](https://motion.dev/) (`motion/react`)
- **Typography**: [Geist](https://vercel.com/font) (Geist Sans & Geist Mono)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Architecture

```
godwin-apedo-portfolio/
├── public/                 # Static assets and images
├── src/
│   ├── app/                # Next.js App Router (pages, layout, styles)
│   │   ├── globals.css     # Tailwind v4 import & custom theme tokens
│   │   ├── layout.tsx      # Root HTML shell & Geist font configuration
│   │   └── page.tsx        # Homepage narrative
│   ├── content/            # Typed content datasets
│   │   ├── education.ts    # Degree and coursework history
│   │   ├── projects.ts     # Project schemas and attribution data
│   │   └── skills.ts       # Categorized technical competencies
│   ├── lib/
│   │   ├── constants.ts    # Metadata and verified social links
│   │   └── utils.ts        # Class merging utility (clsx + tailwind-merge)
│   └── types/
│       └── index.ts        # Strict TypeScript type definitions
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20 or higher (v24 recommended)
- **npm**: v10 or higher

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality & Verification Scripts

- **Type Check**:
  ```bash
  npx tsc --noEmit
  ```
- **Lint**:
  ```bash
  npm run lint
  ```
- **Production Build**:
  ```bash
  npm run build
  ```

---

## 🎨 Design Tokens

- **Base Background**: `#08090C` (`bg-base`)
- **Surface**: `#0E1118` (`bg-surface`)
- **Elevated Surface**: `#161B26` (`bg-surface-elevated`)
- **Primary Text**: `#F8FAFC` (`text-content-primary`)
- **Secondary Text**: `#94A3B8` (`text-content-secondary`)
- **Cyan Accent**: `#00F0FF` / `#38BDF8` (`text-cyan-glow`, `text-cyan-subtle`)
- **Blue Accent**: `#3B82F6` (`text-blue-accent`)
- **Border**: `rgba(255, 255, 255, 0.08)` (`border-border-subtle`)

---

## 🗺️ Implementation Roadmap

- [x] **Stage 1**: Foundation & Tooling Setup (Next.js, Tailwind CSS v4, TypeScript, design tokens, typed content layer)
- [x] **Stage 2**: Core Shell & Design System (Floating Navbar, Footer, UI atoms, CopyEmail button)
- [x] **Stage 3**: Homepage Assembly (Hero, About, Education, Services, Tech Showcase, Projects with Subsystem Viewers, Approach, Contact)
- [ ] **Stage 4**: Project Case Studies (Optional dedicated `/projects/[slug]` deep-dive pages)
- [ ] **Stage 5**: Polish, Git Initial Commit & Deployment (Git commit, Vercel launch)

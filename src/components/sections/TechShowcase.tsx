"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Pause, Play } from "lucide-react";
import { InfiniteSlider } from "@/components/core/infinite-slider";
import { TextScramble } from "@/components/core/text-scramble";

interface TechItem {
  name: string;
  category: string;
  color: string;
  bg: string;
  imageSrc?: string;
  svg?: React.ReactNode;
}

interface TechCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  speed: number;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    id: "tools",
    title: "Tools & AI Environments",
    badge: "Development Tools",
    description: "Development tools, version control, and AI-assisted engineering environments.",
    speed: 32,
    items: [
      {
        name: "Git",
        category: "Version Control",
        color: "#f05032",
        bg: "rgba(240, 80, 50, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.604-.404-.541-.534-.677-1.337-.404-1.996L7.614 3.738.45 10.904c-.6.603-.6 1.584 0 2.188l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.209z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        category: "Code Hosting & Collab",
        color: "#0f172a",
        bg: "rgba(15, 23, 42, 0.05)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        ),
      },
      {
        name: "Visual Studio Code",
        category: "Code Editor",
        color: "#007acc",
        bg: "rgba(0, 122, 204, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479l1.321 1.202c.379.345.94.368 1.277.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.15 13.913l-6.85-4.5 6.85-4.5v9z" />
          </svg>
        ),
      },
      {
        name: "Claude Code",
        category: "AI Coding Tool",
        color: "#d97757",
        bg: "rgba(217, 119, 87, 0.08)",
        imageSrc: "/images/claude-code-icon.png",
      },
      {
        name: "Antigravity",
        category: "AI-Assisted Dev Env",
        color: "#7c3aed",
        bg: "rgba(124, 58, 237, 0.08)",
        imageSrc: "/images/antigravity-icon.png",
      },
      {
        name: "Vercel",
        category: "Deployment & Hosting",
        color: "#0f172a",
        bg: "rgba(15, 23, 42, 0.05)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M24 22.525H0l12-21.05 12 21.05z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "design",
    title: "Design & Product",
    badge: "Visual & Interface",
    description: "Interface design, user experience disciplines, and digital product strategy.",
    speed: 29,
    items: [
      {
        name: "Figma",
        category: "Interface Design Tool",
        color: "#f24e1e",
        bg: "rgba(242, 78, 30, 0.08)",
        imageSrc: "/images/figma-icon.png",
      },
      {
        name: "Claude Design",
        category: "AI Design Tool",
        color: "#d97706",
        bg: "rgba(217, 119, 6, 0.08)",
        imageSrc: "/images/claude-design-icon.png",
      },
      {
        name: "UI/UX Design",
        category: "Interface & Experience",
        color: "#7c3aed",
        bg: "rgba(124, 58, 237, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
            <circle cx="6" cy="6" r="1" fill="currentColor" />
            <circle cx="12" cy="15" r="1.5" />
          </svg>
        ),
      },
      {
        name: "Product Design",
        category: "Digital Product Strategy",
        color: "#6366f1",
        bg: "rgba(99, 102, 241, 0.08)",
        imageSrc: "/images/product-design-icon.png",
      },
      {
        name: "Canva Design",
        category: "Visual Design Tool",
        color: "#00c4cc",
        bg: "rgba(0, 196, 204, 0.08)",
        imageSrc: "/images/canva-icon.png",
      },
      {
        name: "Design Systems",
        category: "Tokens & Components",
        color: "#0284c7",
        bg: "rgba(2, 132, 199, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
            <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
            <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "languages",
    title: "Languages & Frameworks",
    badge: "Core Engineering",
    description: "Programming languages and frameworks powering modern web applications.",
    speed: 34,
    items: [
      {
        name: "Python",
        category: "Programming Language",
        color: "#d97706",
        bg: "rgba(217, 119, 6, 0.08)",
        imageSrc: "/images/python-icon.png",
      },
      {
        name: "React",
        category: "Frontend UI Library",
        color: "#0284c7",
        bg: "rgba(2, 132, 199, 0.08)",
        imageSrc: "/images/react-icon.png",
      },
      {
        name: "Next.js",
        category: "React Web Framework",
        color: "#0f172a",
        bg: "rgba(15, 23, 42, 0.05)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C21.751 4.501 18.543.714 14.193.109A12.749 12.749 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        category: "Typed Programming Lang",
        color: "#2563eb",
        bg: "rgba(37, 99, 235, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        category: "Utility-First CSS",
        color: "#0891b2",
        bg: "rgba(8, 145, 178, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        ),
      },
      {
        name: "SQL",
        category: "Database Query Lang",
        color: "#7c3aed",
        bg: "rgba(124, 58, 237, 0.08)",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M12 0C5.373 0 0 2.686 0 6v12c0 3.314 5.373 6 12 6s12-2.686 12-6V6c0-3.314-5.373-6-12-6zm0 2c5.523 0 10 2.015 10 4.5S17.523 11 12 11 2 8.985 2 6.5 6.477 2 12 2zm0 18c-5.523 0-10-2.015-10-4.5v-2.268C3.738 15.165 7.654 16.5 12 16.5s8.262-1.335 10-3.268V19.5c0 2.485-4.477 4.5-10 4.5zm10-7.5c0 2.485-4.477 4.5-10 4.5S2 14.985 2 12.5v-2.268C3.738 11.665 7.654 13 12 13s8.262-1.335 10-3.268V12.5z" />
          </svg>
        ),
      },
    ],
  },
];

export function TechShowcase() {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 relative z-10 scroll-mt-28"
    >
      <div className="glass-panel rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-slate-200/90 relative overflow-hidden bg-white/75 shadow-sm">
        {/* Subtle decorative glow in top corner */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200/80 relative z-10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
              TOOLS &amp; TECHNOLOGIES
            </span>
            <h2
              id="tech-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Technologies I Work <span className="text-gradient-teal">With</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-content-secondary max-w-md font-mono leading-relaxed">
              Organized by discipline: development tools, visual &amp; product design, and core programming languages and frameworks.
            </p>

            {/* Accessible Section-level Pause/Resume Toggle */}
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume technology slider animations" : "Pause technology slider animations"}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border border-purple-200 dark:border-purple-400/30 bg-purple-50 dark:bg-purple-500/10 hover:bg-purple-100 dark:hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer shrink-0 self-start sm:self-auto shadow-sm"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume Sliders</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Sliders</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Categorized Independent Sliders ── */}
        <div className="space-y-8 sm:space-y-10 relative z-10">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className={`space-y-3.5 ${
                index > 0 ? "pt-6 border-t border-slate-200/80" : ""
              }`}
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 px-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.5)] shrink-0"
                    aria-hidden="true"
                  />
                  <TextScramble
                    as="h3"
                    duration={0.8}
                    speed={0.035}
                    className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight"
                  >
                    {category.title}
                  </TextScramble>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/90 shadow-2xs">
                    {category.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-content-secondary font-mono">
                  {category.description}
                </p>
              </div>

              {/* Independent Horizontal InfiniteSlider */}
              <div className="relative py-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                <InfiniteSlider
                  gap={18}
                  speed={category.speed}
                  speedOnHover={0}
                  isPaused={isPaused}
                  className="w-full py-1"
                >
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      tabIndex={0}
                      className="glass-card rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 border border-slate-200/90 hover:border-purple-300 focus-visible:border-purple-500 focus-visible:outline-none transition-all duration-300 w-[215px] sm:w-[235px] shrink-0 group shadow-sm bg-white/90 cursor-grab active:cursor-grabbing"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-200 overflow-hidden relative shadow-xs"
                        style={{
                          background: tech.bg,
                          color: tech.color,
                          border: `1px solid ${tech.color}25`,
                        }}
                        aria-hidden="true"
                      >
                        {tech.imageSrc ? (
                          <Image
                            src={tech.imageSrc}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          tech.svg
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm text-slate-900 group-hover:text-purple-700 transition-colors truncate">
                          {tech.name}
                        </div>
                        <p className="text-[11px] font-mono text-content-muted mt-0.5 truncate">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          ))}
        </div>

        {/* ── Conceptual Group B: Development Approach (AI-Assisted Programming) ── */}
        <div className="relative z-10 mt-10 pt-6 border-t border-slate-200/80">
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-purple-200 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-gradient-to-r from-purple-50/60 via-purple-50/20 to-white/60 shadow-sm">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-purple-700 font-semibold">
                    Development Approach
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 font-medium">
                    Modern Workflow
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                  AI-Assisted Programming
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-content-secondary max-w-xl leading-relaxed">
              Leveraging modern AI-augmented developer tooling, prompt engineering, and intelligent pair-programming workflows to accelerate prototyping, explore architectural patterns, and iterate on software with speed and discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

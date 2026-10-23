import type { Metadata } from "next";
import { DavcieCaseStudyView } from "@/components/projects/davcie-foundation/DavcieCaseStudyView";

export const metadata: Metadata = {
  title: "Davcie Foundation: Nonprofit Platform & Health Hub Case Study",
  description:
    "In-depth technical case study of Davcie Foundation: a modern non-profit web platform and paediatric diabetes education hub built with Next.js 16, Supabase, Tailwind CSS v4, and Paystack integration.",
  keywords: [
    "Davcie Foundation",
    "Godwin Apedo",
    "Nonprofit Web Platform",
    "Paediatric Diabetes",
    "Health Education",
    "Next.js 16",
    "React 19",
    "Supabase",
    "Tailwind CSS v4",
    "Framer Motion",
    "Paystack",
    "Case Study",
  ],
  openGraph: {
    title: "Davcie Foundation Case Study | Godwin Apedo",
    description:
      "A technical case study on building a non-profit web platform, gamified diabetes education experience, and backoffice management portal with Next.js 16 and Supabase.",
    type: "article",
    url: "https://godwinapedo.dev/projects/davcie-foundation",
  },
};

export default function DavcieCaseStudyPage() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Case Study Container */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-28 sm:pt-32 pb-16 sm:pb-24">
        <DavcieCaseStudyView />
      </main>
    </div>
  );
}
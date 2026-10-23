import type { Metadata } from "next";
import { MensahCaseStudyView } from "@/components/projects/mensah/MensahCaseStudyView";

export const metadata: Metadata = {
  title: "MENSAH — Luxury Tailoring & Spatial Logistics Case Study",
  description:
    "In-depth technical case study of MENSAH: an e-commerce prototype for bespoke African menswear exploring measurement-based virtual fitting, Haversine spatial courier matching, and conversational WhatsApp checkout.",
  keywords: [
    "MENSAH",
    "Godwin Apedo",
    "Luxury Menswear",
    "Bespoke Tailoring",
    "Virtual Fitting Room",
    "Haversine Algorithm",
    "Spatial Logistics",
    "WhatsApp Checkout",
    "React 19",
    "Vite",
    "GSAP",
    "Case Study",
  ],
  openGraph: {
    title: "MENSAH Case Study | Godwin Apedo",
    description:
      "A technical case study on building a luxury bespoke e-commerce platform and spatial courier matching prototype with React 19, Vite, and GSAP.",
    type: "article",
    url: "https://godwinapedo.dev/projects/mensah",
  },
};

export default function MensahCaseStudyPage() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Case Study Container */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-28 sm:pt-32 pb-16 sm:pb-24">
        <MensahCaseStudyView />
      </main>
    </div>
  );
}

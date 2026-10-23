import type { Metadata } from "next";
import { ChefApedoCaseStudyView } from "@/components/projects/chef-apedo-foods/ChefApedoCaseStudyView";

export const metadata: Metadata = {
  title: "Chef Apedo Foods — Cloud Kitchen & Delivery OS Case Study",
  description:
    "In-depth technical case study of Chef Apedo Foods: a full-stack food ordering and delivery management platform featuring server-authoritative pesewa pricing, a Supabase Realtime Kitchen Display System, and campus courier logistics.",
  keywords: [
    "Chef Apedo Foods",
    "Godwin Apedo",
    "Food Delivery Platform",
    "Cloud Kitchen OS",
    "Next.js App Router",
    "Supabase Realtime",
    "PostgreSQL",
    "Pesewa Pricing",
    "Leaflet Maps",
    "Campus Logistics",
    "Vitest",
    "Case Study",
  ],
  openGraph: {
    title: "Chef Apedo Foods Case Study | Godwin Apedo",
    description:
      "A technical case study on engineering a full-stack food ordering and kitchen dispatch management platform with Next.js, Supabase Realtime, and server-authoritative pesewa pricing.",
    type: "article",
    url: "https://godwinapedo.dev/projects/chef-apedo-foods",
  },
};

export default function ChefApedoCaseStudyPage() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Case Study Container */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-28 sm:pt-32 pb-16 sm:pb-24">
        <ChefApedoCaseStudyView />
      </main>
    </div>
  );
}

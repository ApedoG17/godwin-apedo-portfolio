import type { Metadata } from "next";
import { RakuCaseStudyView } from "@/components/projects/raku/RakuCaseStudyView";

export const metadata: Metadata = {
  title: "Raku Vehicle Rental Management System — Case Study | Godwin Apedo",
  description:
    "In-depth technical case study of Raku Automobiles: a full-stack vehicle rental management platform engineered with React 19, Express, PostgreSQL btree_gist exclusion constraints to eliminate double-bookings, and an asynchronous Supabase identity bridge.",
  keywords: [
    "Raku Automobiles",
    "Godwin Apedo",
    "Vehicle Rental System",
    "Fleet Management Platform",
    "PostgreSQL btree_gist",
    "Exclusion Constraints",
    "Double Booking Prevention",
    "Supabase Auth Identity Bridge",
    "React 19",
    "Express API",
    "Software Engineering",
    "DCIT 208",
    "Case Study",
  ],
  openGraph: {
    title: "Raku Vehicle Rental Management System Case Study | Godwin Apedo",
    description:
      "A technical case study on building a vehicle rental platform with React 19, Express, and PostgreSQL btree_gist exclusion constraints to mathematically prevent double-bookings.",
    type: "article",
    url: "https://godwinapedo.dev/projects/raku",
  },
};

export default function RakuCaseStudyPage() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Case Study Container */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-28 sm:pt-32 pb-16 sm:pb-24">
        <RakuCaseStudyView />
      </main>
    </div>
  );
}

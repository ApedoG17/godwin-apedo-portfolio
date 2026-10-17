import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { DirectContactSection } from "@/components/contact/DirectContactSection";
import { SocialMediaSection } from "@/components/contact/SocialMediaSection";
import { DedicatedContactForm } from "@/components/contact/DedicatedContactForm";
import { ContactClosingCTA } from "@/components/contact/ContactClosingCTA";

export const metadata: Metadata = {
  title: "Contact & Connect",
  description:
    "Connect with Godwin Apedo — Computer Science student at University of Ghana, product manager and software builder. Direct email, WhatsApp username, verified social profiles, and messaging hub.",
  keywords: [
    "Godwin Apedo",
    "Contact Godwin Apedo",
    "Social Media Hub",
    "University of Ghana",
    "Legon",
    "Accra Ghana",
    "Software Engineer",
    "Product Manager",
  ],
  openGraph: {
    title: "Contact & Connect | Godwin Apedo",
    description:
      "Get in touch with Godwin Apedo. Direct contact channels, verified social profiles, and direct inquiry composer.",
    type: "website",
    url: "https://godwinapedo.dev/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col">
        {/* 1. Hero with Photograph & Welcome */}
        <ContactHero />

        {/* 2. Direct Contact Methods (Email, WhatsApp username, Location) */}
        <DirectContactSection />

        {/* 3. Social Media & Online Presence (Grouped A & B) */}
        <SocialMediaSection />

        {/* 4. Dedicated Functional Contact Form */}
        <DedicatedContactForm />

        {/* 5. Closing Call to Action & Navigation */}
        <ContactClosingCTA />
      </main>
    </div>
  );
}

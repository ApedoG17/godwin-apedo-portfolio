import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs (restrained teal, blue, violet) */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pb-20">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Selected Projects */}
        <ProjectsSection />

        {/* 3. Capabilities & Tech Stack */}
        <CapabilitiesSection />

        {/* 4. Experience & Education */}
        <ExperienceSection />

        {/* 5. Polished Glass Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}

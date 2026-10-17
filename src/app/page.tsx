import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkingApproachSection } from "@/components/sections/WorkingApproachSection";
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

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Education (Academic Progression Timeline) */}
        <EducationSection />

        {/* 4. What I Do (Areas of Capability) */}
        <ServicesSection />

        {/* 5. Tools & Technologies (Technology Showcase) */}
        <TechShowcase />

        {/* 6. Featured Projects */}
        <ProjectsSection />

        {/* 7. Working Approach (Engineering Methodology) */}
        <WorkingApproachSection />

        {/* 8. Polished Glass Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}

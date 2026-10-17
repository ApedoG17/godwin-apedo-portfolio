import { SkillGroup } from "@/types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages utilized in coursework and practical projects",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Web & Frameworks",
    description: "Modern frameworks and tools used to build responsive digital interfaces",
    skills: ["Next.js", "React", "Tailwind CSS", "Supabase", "HTML5 / Semantic CSS"],
  },
  {
    category: "Systems & Tools",
    description: "Development environment, version control, and delivery pipelines",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    category: "CS Foundations",
    description: "Academic and theoretical software engineering principles",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Relational Database Modeling",
      "Agile & Team Git Workflows",
    ],
  },
];

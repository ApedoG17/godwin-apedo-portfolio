export type ProjectScope = 
  | "Solo Product Designer & Developer"
  | "Solo Product & Development"
  | "University Group Project"
  | "Hackathon Project"
  | "Solo Frontend Engineer & Designer";

export type ProjectCategory = 
  | "Commercial Platform" 
  | "Academic Software Engineering" 
  | "Tooling & Systems"
  | "Luxury E-Commerce & Logistics";

export interface ProjectTechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  tooling?: string[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  demoVideo?: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  label: string;
  route?: string;
  caption?: string;
}

export interface ProjectSubsystem {
  id: string;
  name: string;
  badge?: string;
  description?: string;
  screenshots: ProjectScreenshot[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  tagline: string;
  shortDescription?: string;
  category: ProjectCategory;
  scope: ProjectScope;
  role?: string;
  contributionSummary: string;
  individualContributions: string[];
  problemStatement: string;
  architectureOverview: string;
  techStack: ProjectTechStack;
  links: ProjectLinks;
  images?: string[];
  subsystems?: ProjectSubsystem[];
  timeline?: string;
  isFeatured: boolean;
  accentColor?: "purple" | "blue" | "amber" | "teal";
  /**
   * Flag indicating whether specific details (e.g. unconfirmed modules)
   * are provisional awaiting author confirmation.
   */
  isProvisional?: boolean;
}

export type SkillCategory = 
  | "Languages" 
  | "Web & Frameworks" 
  | "Systems & Tools" 
  | "CS Foundations";

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: string[];
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  period: string;
  status: "Completed" | "In Progress";
  level?: string;
  focus: string;
  electives?: string[];
  coursework?: string[];
  milestoneNumber: string;
  logo?: string;
  isProvisional?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin?: string;
  email?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  shortBio: string;
  status: string;
  links: SocialLinks;
}

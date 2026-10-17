import { EducationEntry } from "@/types";

export const EDUCATION: EducationEntry[] = [
  {
    institution: "St. Peter's Senior High School",
    location: "Ghana",
    degree: "General Science",
    period: "April 2022 – September 2024",
    status: "Completed",
    milestoneNumber: "01",
    logo: "/images/st-peters-school-crest.png",
    electives: ["Elective Mathematics", "Elective ICT"],
    focus:
      "Built rigorous academic foundations in scientific inquiry, advanced mathematics, and computing principles that established the groundwork for university-level computer science.",
    isProvisional: false,
  },
  {
    institution: "University of Ghana",
    location: "Legon, Accra, Ghana",
    degree: "Bachelor of Science in Computer Science",
    period: "January 2025 – Present",
    status: "In Progress",
    level: "Level 200",
    milestoneNumber: "02",
    logo: "/images/university-of-ghana-crest.png",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Object-Oriented Programming",
    ],
    focus:
      "Connecting core computer science theory directly to real-world software engineering, technical problem-solving, and building practical full-stack systems.",
    isProvisional: false,
  },
];

import { DirectContactMethod, SocialProfile } from "@/types/contact";
import { SITE_CONFIG } from "@/lib/constants";

export const CONTACT_EMAIL = SITE_CONFIG.links.email || "likekodji@gmail.com";
export const WHATSAPP_USERNAME = "apedo.g";
export const GENERAL_LOCATION = "Legon, Accra, Ghana";

export const DIRECT_CONTACT_METHODS: DirectContactMethod[] = [
  {
    id: "email",
    label: "Direct Email",
    value: CONTACT_EMAIL,
    displayValue: CONTACT_EMAIL,
    description: "Primary channel for project inquiries, internships, and collaborations.",
    actionType: "mailto",
    actionUrl: `mailto:${CONTACT_EMAIL}`,
    copyable: true,
    copyValue: CONTACT_EMAIL,
    badge: "Direct",
    note: "Responses typically within 24 hours",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: WHATSAPP_USERNAME,
    displayValue: `@${WHATSAPP_USERNAME}`,
    description: "Direct messaging via WhatsApp username. Phone number remains private.",
    actionType: "link",
    actionUrl: `https://wa.me/${WHATSAPP_USERNAME}`,
    copyable: true,
    copyValue: WHATSAPP_USERNAME,
    badge: "Username Chat",
    note: "Uses official wa.me username routing without displaying a telephone number.",
  },
  {
    id: "location",
    label: "Location & Proximity",
    value: GENERAL_LOCATION,
    displayValue: GENERAL_LOCATION,
    description: "Based in Greater Accra. Studying Computer Science at the University of Ghana.",
    actionType: "info",
    copyable: false,
    badge: "Ghana (GMT)",
    note: "Open to on-site roles in Accra and remote engagements globally.",
  },
];

export const PROFESSIONAL_PROFILES: SocialProfile[] = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "godwin-mawulie-yaw-apedo-3b3a4b32a",
    displayHandle: "Godwin Mawulie Yaw Apedo",
    url: SITE_CONFIG.links.linkedin || "https://www.linkedin.com/in/godwin-mawulie-yaw-apedo-3b3a4b32a/",
    category: "professional",
    accentColor: "#0a66c2",
    brandBg: "rgba(10, 102, 194, 0.12)",
    description: "Professional background, academic journey, career milestones & recommendations.",
    isVerified: true,
  },
  {
    id: "github",
    platform: "GitHub",
    username: "ApedoG17",
    displayHandle: "@ApedoG17",
    url: SITE_CONFIG.links.github || "https://github.com/ApedoG17",
    category: "professional",
    accentColor: "#f0f6f6",
    brandBg: "rgba(240, 246, 246, 0.08)",
    description: "Open source repositories, personal builds, code contributions & commits.",
    isVerified: true,
  },
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    id: "instagram",
    platform: "Instagram",
    username: "g4.godwin",
    displayHandle: "@g4.godwin",
    url: "https://www.instagram.com/g4.godwin/",
    category: "social",
    accentColor: "#e1306c",
    brandBg: "rgba(225, 48, 108, 0.12)",
    description: "Personal updates, life moments, campus snapshots & visual stories.",
    isVerified: true,
  },
  {
    id: "x",
    platform: "X (Twitter)",
    username: "likekodji",
    displayHandle: "@likekodji",
    url: "https://x.com/likekodji",
    category: "social",
    accentColor: "#1da1f2",
    brandBg: "rgba(29, 161, 242, 0.10)",
    description: "Tech thoughts, quick reflections, industry conversations & threads.",
    isVerified: true,
  },
  {
    id: "tiktok",
    platform: "TikTok",
    username: "apedo.ii",
    displayHandle: "@apedo.ii",
    url: "https://www.tiktok.com/@apedo.ii",
    category: "social",
    accentColor: "#25f4ee",
    brandBg: "rgba(37, 244, 238, 0.10)",
    description: "Short-form video content, creative clips & student lifestyle.",
    isVerified: true,
  },
  {
    id: "snapchat",
    platform: "Snapchat",
    username: "apedo.g",
    displayHandle: "@apedo.g",
    url: "https://www.snapchat.com/@apedo.g",
    category: "social",
    accentColor: "#fffc00",
    brandBg: "rgba(255, 252, 0, 0.10)",
    description: "Casual day-to-day snaps, campus stories & direct friend interactions.",
    isVerified: true,
  },
];

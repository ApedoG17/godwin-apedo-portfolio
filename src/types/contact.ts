export interface DirectContactMethod {
  id: "email" | "whatsapp" | "location";
  label: string;
  value: string;
  displayValue: string;
  description: string;
  actionType: "mailto" | "link" | "info";
  actionUrl?: string;
  copyable?: boolean;
  copyValue?: string;
  badge?: string;
  note?: string;
}

export interface SocialProfile {
  id: string;
  platform: string;
  username: string;
  displayHandle: string;
  url: string;
  category: "professional" | "social";
  accentColor: string;
  brandBg: string;
  description: string;
  isVerified: boolean;
}

export interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  botField?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  configured?: boolean;
  errors?: Record<string, string>;
}

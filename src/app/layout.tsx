import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroAnimation } from "@/components/layout/IntroAnimation";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.shortBio,
  authors: [{ name: SITE_CONFIG.name }],
  icons: {
    icon: "/images/godwin-apedo-icon.png",
    shortcut: "/images/godwin-apedo-icon.png",
    apple: "/images/godwin-apedo-icon.png",
  },
  keywords: [
    "Godwin Apedo",
    "Computer Science Student",
    "Software Builder",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Chef Apedo Foods",
    "Portfolio",
  ],
};

export const viewport: Viewport = {
  themeColor: "#fbfbfe",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-base text-content-primary font-sans overflow-x-hidden selection:bg-purple-100 selection:text-purple-700">
        <Script
          id="theme-persistence-check"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("godwin_theme");if(t==="dark"){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}`,
          }}
        />
        <Script
          id="intro-session-check"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var isForce=window.location.search.indexOf("intro=true")!==-1;if(!isForce&&(sessionStorage.getItem("godwin_intro_seen")||window.matchMedia("(prefers-reduced-motion: reduce)").matches)){document.documentElement.classList.add("intro-seen")}}catch(e){}`,
          }}
        />
        <ThemeProvider>
          <IntroAnimation />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-purple-700 focus:border focus:border-purple-300 focus:rounded-lg focus:shadow-md"
          >
            Skip to main content
          </a>
          <div id="top" />
          <Navbar />
          <div id="main-content" className="flex-1 flex flex-col pt-0">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

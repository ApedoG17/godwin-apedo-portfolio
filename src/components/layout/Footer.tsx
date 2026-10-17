import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, REPO_URL } from "@/lib/constants";
import { ExternalLink, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="w-full mt-auto bg-white/80 backdrop-blur-md border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-content-muted font-mono">
        {/* Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="w-7 h-7 rounded-md overflow-hidden border border-purple-200 bg-white flex items-center justify-center shrink-0 shadow-2xs">
            <Image
              src="/images/godwin-apedo-icon.png"
              alt="Godwin Apedo logo"
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-slate-800 font-medium">© 2026 {SITE_CONFIG.name}</p>
          <span className="hidden sm:inline text-slate-300">·</span>
          <p className="text-slate-500">CS Student &amp; Software Builder</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-end">
          <Link
            href="/contact"
            className="hover:text-purple-600 transition-colors inline-flex items-center gap-1 text-slate-700"
            aria-label="Dedicated Contact and Social Media Hub"
          >
            Contact Hub
          </Link>
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors inline-flex items-center gap-1 text-slate-600"
            aria-label="GitHub"
          >
            GitHub
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors inline-flex items-center gap-1 text-slate-600"
            aria-label="Source Code"
          >
            Source
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
          <a
            href="#top"
            className="hover:text-purple-600 transition-colors inline-flex items-center gap-1 text-slate-700 font-semibold"
            aria-label="Return to top"
          >
            Top
            <ArrowUp className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

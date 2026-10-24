"use client";

import * as React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  PROFESSIONAL_PROFILES,
  SOCIAL_PROFILES,
} from "@/lib/contactData";
import {
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
  XIcon,
  TikTokIcon,
  SnapchatIcon,
} from "@/components/contact/ContactIcons";
import { SocialProfile } from "@/types/contact";
import { AnimatedGroup } from "@/components/core/animated-group";

export function SocialMediaSection() {
  const renderIcon = (id: string) => {
    switch (id) {
      case "linkedin":
        return <LinkedInIcon className="w-5 h-5 text-[#0a66c2]" />;
      case "github":
        return <GitHubIcon className="w-5 h-5 text-slate-900" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-[#e1306c]" />;
      case "x":
        return <XIcon className="w-5 h-5 text-slate-900" />;
      case "tiktok":
        return <TikTokIcon className="w-5 h-5 text-slate-900" />;
      case "snapchat":
        return <SnapchatIcon className="w-5 h-5 text-[#ca8a04]" />;
      default:
        return null;
    }
  };

  const renderCard = (profile: SocialProfile) => (
    <a
      key={profile.id}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${profile.platform} profile: ${profile.displayHandle} (opens in new tab)`}
      className="group glass-card rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] border border-slate-200/90 hover:border-purple-300 bg-white/90 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
    >
      <div className="space-y-3">
        {/* Top: Icon + Platform & Arrow */}
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-110 shadow-2xs"
            style={{
              background: profile.brandBg,
              borderColor: "rgba(0, 0, 0, 0.06)",
            }}
          >
            {renderIcon(profile.id)}
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-purple-600 transition-colors font-mono text-xs">
            <span className="hidden sm:inline">Visit</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Identity */}
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-purple-700 transition-colors">
              {profile.platform}
            </h4>
            {profile.isVerified && (
              <CheckCircle2
                className="w-3.5 h-3.5 text-purple-600 shrink-0"
                aria-label="Verified account"
              />
            )}
          </div>
          <p className="font-mono text-xs text-slate-600 tracking-tight">
            {profile.displayHandle}
          </p>
        </div>

        {/* Brief Description */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {profile.description}
        </p>
      </div>

      {/* Subtle indicator bar */}
      <div className="pt-4 flex items-center justify-end text-[11px] font-mono text-slate-400 border-t border-slate-100 mt-3">
        <span className="text-purple-700 font-medium group-hover:underline">
          View Profile &rarr;
        </span>
      </div>
    </a>
  );

  return (
    <section
      id="social-presence"
      aria-labelledby="social-presence-heading"
      className="w-full py-10 sm:py-14"
    >
      <div className="space-y-3 pb-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
          ONLINE PRESENCE
        </span>
        <h2
          id="social-presence-heading"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          Social Media &amp; Profiles
        </h2>
        <p className="text-sm text-content-secondary max-w-2xl">
          Connect with me across public platforms. Each destination links directly to my verified personal account.
        </p>
      </div>

      <div className="space-y-8">
        {/* ── Professional & Engineering ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Professional &amp; Engineering
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <AnimatedGroup
            preset="slide"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            childClassName="h-full"
          >
            {PROFESSIONAL_PROFILES.map(renderCard)}
          </AnimatedGroup>
        </div>

        {/* ── Social Channels ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Social Channels
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <AnimatedGroup
            preset="slide"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            childClassName="h-full"
          >
            {SOCIAL_PROFILES.map(renderCard)}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}

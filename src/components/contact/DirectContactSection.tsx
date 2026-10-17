"use client";

import * as React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { CopyTextButton } from "@/components/ui/CopyTextButton";
import { WhatsAppIcon } from "@/components/contact/ContactIcons";
import {
  CONTACT_EMAIL,
  WHATSAPP_USERNAME,
  GENERAL_LOCATION,
} from "@/lib/contactData";

export function DirectContactSection() {
  return (
    <section
      id="direct-channels"
      aria-labelledby="direct-channels-heading"
      className="w-full py-10 sm:py-14 scroll-mt-24"
    >
      <div className="space-y-3 pb-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
          DIRECT CHANNELS
        </span>
        <h2
          id="direct-channels-heading"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          Direct Contact Methods
        </h2>
        <p className="text-sm text-content-secondary max-w-2xl">
          Direct communication channels without third-party barriers. No telephone numbers are exposed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* ── CARD 1: Email ── */}
        <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-purple-200 hover:border-purple-300 transition-all bg-white/85 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
                Primary
              </span>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Direct Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-base sm:text-lg font-bold text-slate-900 hover:text-purple-700 transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <p className="text-xs text-content-secondary leading-relaxed">
              Ideal for formal inquiries, technical collaborations, and sharing detailed briefs.
            </p>
          </div>

          <div className="pt-5 flex items-center gap-2.5 flex-wrap">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Compose Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <CopyTextButton
              textToCopy={CONTACT_EMAIL}
              label="Copy Email"
              successLabel="Copied!"
              size="sm"
            />
          </div>
        </div>

        {/* ── CARD 2: WhatsApp Username ── */}
        <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-emerald-200 hover:border-emerald-300 transition-all bg-white/85 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Username
              </span>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                WhatsApp
              </p>
              <p className="text-base sm:text-lg font-bold text-slate-900 font-mono">
                @{WHATSAPP_USERNAME}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-content-secondary leading-relaxed">
                Connect via WhatsApp handle. Phone numbers are kept strictly private.
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                Official wa.me username routing supported.
              </p>
            </div>
          </div>

          <div className="pt-5 flex items-center gap-2.5 flex-wrap">
            <a
              href={`https://wa.me/${WHATSAPP_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open WhatsApp chat with @${WHATSAPP_USERNAME} via username link`}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hover:scale-105 active:scale-95 shadow-2xs"
            >
              <span>Open in WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <CopyTextButton
              textToCopy={WHATSAPP_USERNAME}
              label="Copy Username"
              successLabel="Copied!"
              size="sm"
            />
          </div>
        </div>

        {/* ── CARD 3: Location & Timezone ── */}
        <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-blue-200 hover:border-blue-300 transition-all bg-white/85 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                GMT / UTC+0
              </span>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Location &amp; Proximity
              </p>
              <p className="text-base sm:text-lg font-bold text-slate-900">
                {GENERAL_LOCATION}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-content-secondary leading-relaxed">
                University of Ghana, Legon campus. General regional location only.
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                Available for Accra-based and remote engagements worldwide.
              </p>
            </div>
          </div>

          <div className="pt-5 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 px-3 py-1.5 rounded-lg bg-purple-50 border border-purple-200">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span>Available for Relocation / Remote</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

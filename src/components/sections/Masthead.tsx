"use client";

import Image from "next/image";
import { HorizontalRule } from "@/components/ui/HorizontalRule";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SITE } from "@/lib/constants";

export function Masthead() {
  const today = new Date();
  const issueDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="w-full bg-paper">
      {/* Meta bar */}
      <div
        className="flex justify-between items-center px-6 md:px-12"
        style={{ padding: "16px 0" }}
      >
        <div
          className="uppercase font-sans text-[12px] tracking-[0.12em]"
          style={{ color: "var(--ink-60)" }}
        >
          {SITE.city} · Web Studio
        </div>
        <div
          className="uppercase font-sans text-[12px] tracking-[0.12em] hidden md:block"
          style={{ color: "var(--ink-60)" }}
        >
          No subscriptions. No lock-in.
        </div>
        <div className="flex items-center">
          <div
            className="uppercase font-sans text-[12px] tracking-[0.12em]"
            style={{ color: "var(--ink-60)" }}
          >
            Est. 2026
          </div>
          <SocialLinks />
        </div>
      </div>

      {/* Top padding before bold rule */}
      <div style={{ paddingTop: "8px" }} />

      {/* Thick rule */}
      <HorizontalRule weight="bold" />

      {/* Studio name */}
      <div style={{ paddingTop: "10px", paddingBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          src="/title_logo.png"
          alt={SITE.name}
          width={800}
          height={200}
          priority
          style={{
            width: "clamp(350px, 70vw, 800px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Thin rule */}
      <HorizontalRule weight="thin" />

      {/* Tagline */}
      <div style={{ paddingTop: "12px", paddingBottom: "12px" }}>
        <p
          className="uppercase font-sans text-[12px] text-center tracking-[0.3em]"
          style={{ color: "var(--ink-60)" }}
        >
          {SITE.tagline}
        </p>
      </div>

      {/* Closing bold rule */}
      <HorizontalRule weight="bold" />
    </header>
  );
}

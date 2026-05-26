"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";

export function Pricing() {
  const handleBookCall = () => {
    // TODO: Replace with actual Cal.com integration when calLink is configured
    alert("Cal.com booking modal would open here. Update SITE.calLink in constants.ts with your Cal.com username/event.");
  };

  return (
    <section id="pricing">
      <div className="px-6 md:px-12">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionLabel>The Investment</SectionLabel>
          <p
            className="font-serif italic"
            style={{
              fontSize: "15px",
              color: "var(--ink-60)",
              marginTop: "8px",
            }}
          >
            Starting rates — every project quoted individually after a free call.
          </p>
        </div>

        {/* Card Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", background: "var(--ink-15)" }}
        >
          {/* CARD 01 - Light */}
          <div style={{ background: "var(--paper-light)", padding: "32px 28px" }}>
            <p
              className="uppercase font-sans"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: "var(--ink-40)",
                marginBottom: "12px",
              }}
            >
              Package 01
            </p>
            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 38px)",
                fontWeight: 600,
                color: "var(--ink)",
                marginBottom: "8px",
              }}
            >
              Website Design & Build
            </h3>
            <p
              className="font-serif italic"
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                color: "var(--ink-60)",
                marginBottom: "24px",
              }}
            >
              From $800
            </p>
            <div
              style={{
                height: "0.5px",
                background: "var(--ink-20)",
                marginBottom: "20px",
              }}
            />
            <div>
              <div
                className="font-serif"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "var(--ink)",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Single or multi-page — you decide the scope</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Next.js, WordPress, or Squarespace depending on your needs</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Mobile-first, SEO-ready from day one</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>You own it outright — no subscriptions, no lock-in</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>2 rounds of revisions included</span>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "0.5px",
                background: "var(--ink-20)",
                marginTop: "24px",
                marginBottom: "20px",
              }}
            />
            <button
              onClick={handleBookCall}
              className="uppercase font-sans transition-all duration-200"
              style={{
                width: "100%",
                padding: "12px 0",
                background: "transparent",
                border: "0.5px solid var(--ink-40)",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.16em",
                color: "var(--ink)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "var(--paper)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              Request a free quote
            </button>
          </div>

          {/* CARD 02 - Dark (Featured) */}
          <div style={{ position: "relative", background: "var(--ink)", padding: "32px 28px" }}>
            {/* Badge */}
            <div
              className="uppercase font-sans"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "var(--mustard)",
                color: "var(--ink)",
                fontSize: "8px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                padding: "4px 10px",
              }}
            >
              Most Popular
            </div>

            <p
              className="uppercase font-sans"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: "rgba(245,240,232,0.45)",
                marginBottom: "12px",
              }}
            >
              Package 02
            </p>
            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 38px)",
                fontWeight: 600,
                color: "var(--paper)",
                marginBottom: "8px",
              }}
            >
              Site + SEO
            </h3>
            <p
              className="font-serif italic"
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                color: "rgba(245,240,232,0.65)",
                marginBottom: "24px",
              }}
            >
              From $2,000
            </p>
            <div
              style={{
                height: "0.5px",
                background: "rgba(245,240,232,0.15)",
                marginBottom: "20px",
              }}
            />
            <div>
              <div
                className="font-serif"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "rgba(245,240,232,0.80)",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Everything in Package 01</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Full on-page SEO setup — titles, meta, schema, sitemap</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Google Business Profile setup & optimization</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Google Analytics 4 connected and configured</span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>Core Web Vitals optimized — fast load scores</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--mustard)" }}>✦</span>
                  <span>30-day post-launch support included</span>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "0.5px",
                background: "rgba(245,240,232,0.15)",
                marginTop: "24px",
                marginBottom: "20px",
              }}
            />
            <button
              onClick={handleBookCall}
              className="uppercase font-sans transition-all duration-200"
              style={{
                width: "100%",
                padding: "12px 0",
                background: "var(--mustard)",
                border: "none",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.16em",
                color: "var(--ink)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--burnt)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--mustard)";
              }}
            >
              Request a free quote
            </button>
          </div>
        </div>

        {/* Footnote */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "clamp(48px, 7vw, 80px)",
          }}
        >
          <p
            className="font-sans"
            style={{
              fontSize: "10px",
              color: "var(--ink-50)",
            }}
          >
            All projects begin with a free 30-minute call. No commitment.
          </p>
        </div>
      </div>
    </section>
  );
}

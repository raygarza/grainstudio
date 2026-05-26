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
          <SectionLabel>Your Investment</SectionLabel>
        </div>

        {/* Card Grid */}
        <style jsx>{`
          .pricing-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          @media (min-width: 768px) {
            .pricing-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
        <div className="pricing-grid">
          {/* CARD 01 - Website */}
          <div
            style={{
              background: "var(--paper-lift)",
              border: "0.5px solid var(--ink-15)",
              padding: "40px",
              textAlign: "left",
            }}
          >
            <h4
              className="font-serif"
              style={{
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: 600,
                color: "var(--ink)",
                marginBottom: "16px",
              }}
            >
              Website Build
            </h4>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(20px, 2.5vw, 24px)",
                color: "var(--ink-60)",
                marginBottom: "32px",
              }}
            >
              From $2,000
            </p>
            <div
              style={{
                height: "0.5px",
                background: "var(--ink-15)",
                marginBottom: "32px",
              }}
            />
            <ul
              className="font-sans"
              style={{
                fontSize: "16px",
                lineHeight: "2",
                color: "var(--ink)",
                textAlign: "left",
                listStyleType: "disc",
                paddingLeft: "20px",
                marginBottom: "32px",
              }}
            >
              <li>Custom design from scratch</li>
              <li>Fully responsive (mobile, tablet, desktop)</li>
              <li>SEO-ready structure and metadata</li>
              <li>No monthly fees. It's yours</li>
              <li>2 rounds of revisions</li>
            </ul>
          </div>

          {/* CARD 02 - SEO */}
          <div
            style={{
              background: "var(--ink)",
              padding: "40px",
              textAlign: "left",
            }}
          >
            <h4
              className="font-serif"
              style={{
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: 600,
                color: "var(--paper)",
                marginBottom: "16px",
              }}
            >
              SEO Architecture
            </h4>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(20px, 2.5vw, 24px)",
                color: "rgba(245,240,232,0.7)",
                marginBottom: "32px",
              }}
            >
              From $1,000/mo
            </p>
            <div
              style={{
                height: "0.5px",
                background: "rgba(245,240,232,0.2)",
                marginBottom: "32px",
              }}
            />
            <ul
              className="font-sans"
              style={{
                fontSize: "16px",
                lineHeight: "2",
                color: "rgba(245,240,232,0.85)",
                textAlign: "left",
                listStyleType: "disc",
                paddingLeft: "20px",
                marginBottom: "24px",
              }}
            >
              <li>Current website audit and assessment</li>
              <li>On-page optimization and technical SEO</li>
              <li>Content strategy and keyword research</li>
              <li>Monthly reporting and adjustments</li>
              <li>Google Analytics 4 integration</li>
            </ul>
            <p
              className="font-sans"
              style={{
                fontSize: "12px",
                lineHeight: "1.6",
                color: "rgba(245,240,232,0.6)",
                fontStyle: "italic",
                textAlign: "left",
              }}
            >
              Includes an initial audit to assess current performance and set realistic expectations for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";

export function Pricing() {
  const handleBookCall = () => {
    window.open("https://calendly.com/grainstudio/website-seo-consult", "_blank");
  };

  return (
    <section id="pricing">
      <div className="px-4 md:px-12">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionLabel>Your Investment</SectionLabel>
        </div>

        {/* Card Grid */}
        <style jsx>{`
          .pricing-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 48px;
          }
          @media (min-width: 768px) {
            .pricing-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
              align-items: stretch;
            }
          }
        `}</style>
        <div className="pricing-grid">
          {/* CARD 01 - Website */}
          <div
            style={{
              background: "var(--paper-lift)",
              border: "0.5px solid var(--ink-15)",
              padding: "36px",
              textAlign: "left",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >

              


              <p
                className="uppercase font-sans"
                style={{
                   letterSpacing: "0.16em",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "var(--ink-60)",
                  marginBottom: "24px",
                }}
              >
                package 1
              </p>
              <h4
                className="font-sans"
                style={{
                  fontSize: "clamp(32px, 4vw, 32px)",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "32px",
                }}
              >
                Website Build
              </h4>

              {/* Price Box - classified ad style */}
              <div
                className="font-sans uppercase"
                style={{
                  border: "0.5px solid var(--ink-15)",
                  padding: "10px 10px",
                  letterSpacing: "0.16em",
                  marginBottom: "40px",
                  fontSize: "clamp(14px, 2.5vw, 14px)",
                  color: "var(--ink)",
                }}
              >
                From $3,600
              </div>

              <div
                className="font-sans"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--ink)",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>Custom design from scratch</span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>Fully responsive (mobile, tablet, desktop)</span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>SEO-ready structure and metadata</span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>No monthly fees. It's yours</span>
                </div>
                
              </div>

              <button
                onClick={handleBookCall}
                className="font-sans uppercase"
                style={{
                  marginTop: "40px",
                  padding: "14px 28px",
                  border: "0.5px solid var(--ink-15)",
                  letterSpacing: "0.16em",
                  background: "transparent",
                  color: "var(--ink)",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
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
                Website Makeover
              </button>
            </div>

          {/* CARD 02 - SEO */}
          <div
            style={{
              background: "var(--ink)",
              padding: "36px",
              textAlign: "left",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
              <p
                className="font-sans uppercase"
                
                style={{
                  letterSpacing: "0.16em",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.6)",
                  marginBottom: "24px",
                }}
              >
                package 2
              </p>
              <h4
                className="font-serif"
                style={{
                  fontSize: "clamp(32px, 4vw, 32px)",
                  fontWeight: 600,
                  color: "var(--paper)",
                  marginBottom: "32px",
                }}
              >
                SEO Architecture
              </h4>

              {/* Price Box - with bottom border only */}


             

              <div
                className="font-sans uppercase"
                style={{
                  borderBottom: "0.5px solid rgba(245,240,232,0.15)",
                  padding: "10px 0px",
                  letterSpacing: "0.16em",
                  marginBottom: "40px",
                  fontSize: "clamp(14px, 2.5vw, 14px)",
                  color: "var(--paper)",
                }}
              >
                From $1,200 / mo
              </div>

              <div
                className="font-sans"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "rgba(245,240,232,0.85)",
                  textAlign: "left",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>Current website audit and assessment</span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>On-page optimization and technical SEO</span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>Content strategy and keyword research </span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--mustard)", flexShrink: 0 }}>✦</span>
                  <span>Monthly reporting and adjustments + Google Analytics</span>
                </div>              
              </div>

              {/* <p
                className="font-sans"
                style={{
                  fontSize: "12px",
                  lineHeight: "1.8",
                  color: "rgba(245,240,232,0.6)",
                  fontStyle: "italic",
                  textAlign: "left",
                  marginBottom: "40px",
                }}
              >
                Includes an initial audit to assess current performance and set realistic expectations for growth.
              </p> */}

              <button
                onClick={handleBookCall}
                className="font-sans uppercase"
                style={{
                  marginTop: "auto",
                  padding: "14px 28px",
                  letterSpacing: "0.16em",
                  border: "0.5px solid rgba(245,240,232,0.3)",
                  background: "transparent",
                  color: "var(--paper)",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--paper)";
                  e.currentTarget.style.color = "var(--ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--paper)";
                }}
              >
                Optimize Your Search
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

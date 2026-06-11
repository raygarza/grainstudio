"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HorizontalRule } from "@/components/ui/HorizontalRule";

export function HeroPitch() {
  const handleBookCall = () => {
    window.open("https://calendly.com/grainstudio/website-seo-consult", "_blank");
  };

  return (
    <section id="pitch" style={{ padding: "clamp(32px, 5vw, 56px) 0" }}>
      <div className="px-6 md:px-12">
        <style jsx>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            align-items: start;
          }
          .mobile-hide {
            display: block;
          }
          @media (min-width: 768px) {
            .hero-grid {
              grid-template-columns: 2fr 3fr;
              gap: 48px;
            }
            .mobile-hide {
              display: none;
            }
          }
        `}</style>
        <div className="hero-grid">
          {/* LEFT COLUMN - Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 }}
            style={{
              // border: "1px solid var(--ink-30)",
              marginLeft: "-24px",
              marginRight: "-24px",
            }}
          >
            {/* Portrait Image */}
            <Image
              src="/picture-stack.png"
              alt="Ray - Grain Studio"
              width={400}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />

            {/* Pull Quote */}
            <div className="mobile-hide">
              <div
                style={{
                  height: "0.5px",
                  background: "var(--ink-20)",
                  width: "100%",
                }}
              />
              <div style={{ padding: "14px 16px" }}>
                <p
                  className="font-serif"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.4",
                    color: "var(--ink-60)",
                  }}
                >
                  "I build websites with an aesthetic emphasis on your business brand's identity - not a template."
                </p>
                <p
                  className="uppercase font-sans"
                  style={{
                    fontSize: "10px",
                    color: "var(--ink-50)",
                    marginTop: "8px",
                    letterSpacing: "0.14em",
                  }}
                >
                  - <strong>Ray</strong>, Grain Studio
                </p>
              </div>
            </div>

            {/* CTA Area */}
            <div className="mobile-hide">
              <div
                style={{
                  height: "0.5px",
                  background: "var(--ink-20)",
                  width: "100%",
                }}
              />
              <p
                className="uppercase font-sans text-center"
                style={{
                  fontSize: "12px",
                  color: "var(--ink-60)",
                  padding: "20px 16px 10px",
                }}
              >
                Ready to start?
              </p>
              <div style={{ paddingInline: "16px", paddingBottom: "14px" }}>
                <button
                  onClick={handleBookCall}
                  className="uppercase font-sans transition-all duration-200"
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "var(--ink)",
                    border: "none",
                    fontSize: "13px",
                    letterSpacing: "0.14em",
                    color: "var(--paper)",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  Book a 30 min Call
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Headline */}
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                lineHeight: "1.2",
                fontWeight: 600,
                color: "var(--ink)",
              }}
            >
              Your business website shouldn't feel like a template {" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "var(--burnt)",
                }}
              >
                ..or AI slop
              </span>
            </h2>

            {/* Byline */}
            <p
              className="uppercase font-sans"
              style={{
                fontSize: "12px",
                color: "var(--ink-50)",
                marginTop: "12px",
              }}
            >
            {/* By Ray Garza  ·  Reading Time: 2 min */}
            </p>

            {/* Thin rule */}
            <div style={{ marginTop: "12px" }}>
              <HorizontalRule weight="thin" />
            </div>

            {/* Body Copy */}
            <div
              className="font-serif"
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "var(--ink-60)",
                marginTop: "16px",
              }}
            >
              <p className="drop-cap" style={{ marginBottom: "1.4em" }}>
                The internet is loud. Most small business websites look like they were assembled from the same twelve blocks - because they were. Your chiropractor has the same homepage as your competitor across town. Different name, same template, same forgettable result.
              </p>
              <p style={{ marginBottom: "1.4em" }}>
                Your website is usually the first thing a potential client sees before they ever walk through your door. It should feel like walking in already - the vibe, the trust, the reason to choose you over the next name on the list.
              </p>
              <p style={{ marginBottom: "1.4em" }}>
                I build websites for small Austin businesses that have outgrown templates, but don't need a $20k agency. Every project is designed from scratch around your brand, built fast, and handed to you outright - no subscriptions, no monthly platform fees, no lock-in.
              </p>
              <p>
                Next.js for complex projects. Custom WordPress or Squarespace for simpler ones. Either way, you pay once and own it forever. Minimal, fast, and built to last - exactly like the business behind it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

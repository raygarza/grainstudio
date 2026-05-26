"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: "48px 0" }}>
      <div className="px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10 items-start"
        >
          {/* Left column */}
          <div>
            <SectionLabel>The Approach</SectionLabel>
            <div style={{ marginTop: "16px" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 4vw, 36px)",
                  lineHeight: "1.05",
                  color: "var(--ink)",
                }}
              >
                <div style={{ display: "block" }}>Minimal. Fast. Yours.</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "var(--ink)",
                opacity: 0.85,
              }}
            >
              I work with chiropractors, therapists, photographers, and small
              practices that have outgrown templates but don't need a $20k
              agency.
            </p>

            {/* Pull quote */}
            <div
              style={{
                borderLeft: "2px solid var(--mustard)",
                paddingLeft: "16px",
                marginTop: "20px",
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--ink)",
                }}
              >
                One project, one payment. You leave with something beautiful,
                fast, and entirely yours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

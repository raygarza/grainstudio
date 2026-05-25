"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/types";

const accentColors = {
  mustard: "var(--mustard)",
  burnt: "var(--burnt)",
  ink: "var(--ink)",
};

export function Services() {
  return (
    <section id="services" className="w-full px-6 md:px-12">
      <div style={{ paddingTop: "32px" }}>
        {/* Section label */}
        <SectionLabel>The Editorial Offerings</SectionLabel>

        {/* Section headline */}
        <h2
          className="font-serif font-semibold text-center text-[32px]"
          style={{ color: "var(--ink)", marginTop: "12px", marginBottom: "16px" }}
        >
          What I Build
        </h2>

        {/* Service grid with hairline dividers */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "1px",
            background: "var(--ink-15)",
          }}
        >
          {SERVICES.map((service: Service, index: number) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                background: "var(--paper)",
                padding: "20px 18px 18px",
              }}
            >
              {/* Service number */}
              <p
                className="uppercase font-sans text-[9px]"
                style={{ color: "var(--ink-30)", marginBottom: "8px" }}
              >
                {service.number}
              </p>

              {/* Accent bar */}
              <div
                style={{
                  width: "20px",
                  height: "1.5px",
                  background: accentColors[service.accent],
                  marginBottom: "10px",
                }}
              />

              {/* Title */}
              <h3
                className="font-serif font-semibold text-[20px]"
                style={{ color: "var(--ink)" }}
              >
                {service.title}
              </h3>

              {/* Body */}
              <p
                className="font-sans text-[11px]"
                style={{ lineHeight: "1.7", color: "var(--ink-60)", marginTop: "10px" }}
              >
                {service.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div style={{ paddingBottom: "32px" }} />
      </div>
    </section>
  );
}

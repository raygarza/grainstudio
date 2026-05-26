"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/types";

const serviceImages = [
  "/placeholder-webdev.jpg",
  "/placeholder-seo.jpg",
  "/placeholder-film.jpg",
];

export function Services() {
  return (
    <section id="services" className="w-full px-6 md:px-12">
      <div style={{ paddingTop: "32px" }}>
        {/* Section label */}
        <SectionLabel>The Editorial Offerings</SectionLabel>

        {/* Section headline */}
        <h2
          className="font-serif font-semibold text-center text-[32px]"
          style={{ color: "var(--ink)", marginTop: "12px", marginBottom: "32px" }}
        >
          What I Build
        </h2>

        {/* Service grid */}
        <style jsx>{`
          .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>
        <div className="services-grid">
          {SERVICES.map((service: Service, index: number) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                border: "0.5px solid var(--ink-30)",
                padding: "24px",
                textAlign: "center",
              }}
            >
              {/* Service Image */}
              <div style={{ width: "100%", aspectRatio: "3/2", overflow: "hidden", marginBottom: "20px" }}>
                <Image
                  src={serviceImages[index]}
                  alt={service.title}
                  width={300}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(100%)",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-serif font-semibold"
                style={{
                  color: "var(--ink)",
                  fontSize: "clamp(24px, 2.5vw, 28px)",
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h3>

              {/* Body */}
              <p
                className="font-sans"
                style={{
                  fontSize: "13px",
                  lineHeight: "1.7",
                  color: "var(--ink-60)",
                }}
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

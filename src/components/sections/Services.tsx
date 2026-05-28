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

  const handleBookCall = () => {
    window.open("https://calendly.com/grainstudio/website-seo-consult", "_blank");
  };

  return (
    <section id="services" className="w-full px-6 md:px-12">
      <div style={{ paddingTop: "32px" }}>
        {/* Section label */}
        {/* <SectionLabel>My Services</SectionLabel> */}

        {/* Section headline */}
         <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionLabel>Services I Offer</SectionLabel>
        </div>

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
                background: "var(--paper-lift)",
                border: "0.5px solid var(--ink-15)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
             

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

              {/* Body */}
              <p
                className="font-sans"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--ink-60)",
                  marginBottom: "40px",
                  flex: 1,
                }}
              >
                {service.body}
              </p>
              <button
                onClick={handleBookCall}
                className="font-sans uppercase"
                style={{
                  padding: "14px 28px",
                  border: "0.5px solid var(--ink-15)",
                  letterSpacing: "0.16em",
                  background: "transparent",
                  color: "var(--ink)",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  width: "100%",
                  fontFamily: "var(--font-sans)",
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
                {service.buttoncopy}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div style={{ paddingBottom: "32px" }} />
      </div>
    </section>
  );
}

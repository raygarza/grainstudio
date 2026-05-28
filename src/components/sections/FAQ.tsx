"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq">
      <div className="px-6 md:px-12">
        <style jsx>{`
          .faq-container {
            display: flex;
            flex-direction: column;
            gap: 48px;
            align-items: flex-start;
          }
          .faq-left {
            width: 100%;
          }
          @media (min-width: 768px) {
            .faq-container {
              flex-direction: row;
              gap: 64px;
            }
            .faq-left {
              flex: 1 1 0%;
              min-width: 0;
              width: auto;
            }
            .faq-right {
              flex: 2 1 0%;
              min-width: 0;
            }
          }
        `}</style>
        <div className="faq-container">
          {/* LEFT COLUMN */}
          <div className="faq-left gap-4">
            <SectionLabel>Common Inquiries</SectionLabel>
            <br/>
            {/* <div
              className="font-serif"
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: "1.0",
                fontWeight: 600,
                color: "var(--ink)",
                marginTop: "8px",
                marginBottom: "24px",
              }}
            >
              <div>Common</div>
              <div>Inquiries.</div>
            </div> */}
            <Image
              src="/faq-mag-brain.png"
              alt="Newspaper detail"
              width={340}
              height={260}
              sizes="(max-width: 768px) 100vw, 340px"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "brightness(0.9)",
                marginTop: "8px",
                marginBottom: "16px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-right">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                style={{
                  border: "0.5px solid var(--ink-15)",
                  padding: "24px",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "12px",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  className="font-serif"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "var(--ink-60)",
                    marginBottom: "0",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

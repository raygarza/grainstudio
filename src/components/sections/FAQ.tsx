import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div>
            <SectionLabel>Common Inquiries</SectionLabel>
            <div
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
            </div>
            <Image
              src="/placeholder-newspaper.jpg"
              alt="Newspaper detail"
              width={340}
              height={260}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "grayscale(100%) contrast(1.1)",
                opacity: 0.75,
              }}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {FAQS.map((faq, index) => (
              <div key={index}>
                {index > 0 && (
                  <div
                    style={{
                      height: "0.5px",
                      background: "var(--ink-15)",
                      marginBottom: "24px",
                    }}
                  />
                )}
                <div style={{ marginBottom: "24px" }}>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: "12px",
                    }}
                  >
                    Q: {faq.q}
                  </p>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.75",
                      color: "var(--ink-60)",
                      marginBottom: "0",
                    }}
                  >
                    A: {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

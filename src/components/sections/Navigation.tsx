"use client";

import Image from "next/image";
import { HorizontalRule } from "@/components/ui/HorizontalRule";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  return (
    <section id="navigation" style={{ padding: "clamp(20px, 5vw, 20px) 0", borderTop: "none" }}>
      <style jsx>{`
        .nav-links {
          justify-content: center;
          max-width: 100%;
        }
        @media (min-width: 768px) {
          .nav-links {
            justify-content: space-around;
            max-width: 50%;
          }
        }
      `}</style>
      <div className="px-0 md:px-0" style={{ textAlign: "center" }}>
        <Image
          src="/idea-build-complete.png"
          alt="Idea, Build, Complete"
          width={800}
          height={200}
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        {/* <HorizontalRule weight="thin" />
        <div style={{ marginTop: "24px" }} />
        <p
          className="uppercase font-sans"
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            fontWeight: 500,
            color: "var(--ink-60)",
            marginBottom: "12px",
          }}
        >
          Navigate
        </p>
        <nav style={{ padding: "12px 0" }}>
          <ul
            style={{
              display: "flex",
              gap: "28px",
              listStyle: "none",
              padding: 0,
              margin: "0 auto",
              flexWrap: "wrap",
            }}
            className="nav-links"
          >
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-serif italic"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--ink-60)",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--mustard)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--ink-60)";
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </section>
  );
}

"use client";

import { HorizontalRule } from "@/components/ui/HorizontalRule";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  return (
    <section id="navigation" style={{ padding: "clamp(32px, 5vw, 56px) 0" }}>
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
      <div className="px-6 md:px-12" style={{ textAlign: "center" }}>
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
        {/* <HorizontalRule weight="thin" /> */}
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
        </nav>
        {/* <HorizontalRule weight="thin" /> */}
      </div>
    </section>
  );
}

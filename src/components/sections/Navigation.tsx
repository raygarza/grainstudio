"use client";

import { HorizontalRule } from "@/components/ui/HorizontalRule";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  return (
    <section id="navigation" style={{ padding: "clamp(32px, 5vw, 56px) 0" }}>
      <div className="px-6 md:px-12">
        <p
          className="uppercase font-sans"
          style={{
            fontSize: "8px",
            color: "var(--ink-40)",
            marginBottom: "8px",
          }}
        >
          Navigate
        </p>
        <HorizontalRule weight="thin" />
        <nav style={{ padding: "14px 0" }}>
          <ul
            style={{
              display: "flex",
              gap: "28px",
              listStyle: "none",
              padding: 0,
              margin: 0,
              flexWrap: "wrap",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-serif italic"
                  style={{
                    fontSize: "15px",
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
        <HorizontalRule weight="thin" />
      </div>
    </section>
  );
}

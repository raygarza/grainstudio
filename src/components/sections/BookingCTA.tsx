"use client";

export function BookingCTA() {
  const handleBookCall = () => {
    window.open("https://calendly.com/grainstudio/website-seo-consult", "_blank");
  };

  return (
    <section
      id="book-a-call"
      className="w-full px-6 md:px-12"
    >
      <div
        className="text-center"
        style={{
          background: "var(--paper-lift)",
          border: "0.5px solid var(--ink-15)",
          padding: "clamp(48px, 8vw, 80px) clamp(24px, 5vw, 48px)",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-60)",
            marginBottom: "10px",
          }}
        >
          Ready to start?
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            fontSize: "clamp(36px, 7vw, 36px)",
            lineHeight: 1.05,
            color: "var(--ink)",
          }}
        >
          <div>Your Growth Starts Here</div>
          <div>your website.</div>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "12px",
            color: "var(--ink-60)",
            marginTop: "8px",
            letterSpacing: "0.02em",
          }}
        >
          30-minute call · No commitment · Austin or remote
        </p>

        {/* CTA Button */}
        <button
          onClick={handleBookCall}
          className="transition-all duration-200 hover:opacity-90"
          style={{
            display: "inline-block",
            width: "auto",
            padding: "11px 36px",
            whiteSpace: "nowrap",
            background: "var(--mustard)",
            color: "var(--ink)",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: 0,
            cursor: "pointer",
            marginTop: "24px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--burnt)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--mustard)";
          }}
        >
          Book a free call
        </button>
      </div>
    </section>
  );
}

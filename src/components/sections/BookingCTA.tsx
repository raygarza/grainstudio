"use client";

export function BookingCTA() {
  const handleBookCall = () => {
    // TODO: Replace with actual Cal.com integration when calLink is configured
    alert("Cal.com booking modal would open here. Update SITE.calLink in constants.ts with your Cal.com username/event.");
  };

  return (
    <section
      id="book-a-call"
      className="w-full text-center"
      style={{
        background: "var(--ink)",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(245,240,232,0.45)",
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
          fontSize: "clamp(36px, 7vw, 56px)",
          lineHeight: 1.05,
          color: "var(--paper)",
        }}
      >
        <div>Let's talk about</div>
        <div>your website.</div>
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontSize: "11px",
          color: "rgba(245,240,232,0.55)",
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
          fontSize: "10px",
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
    </section>
  );
}

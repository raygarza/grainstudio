interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p
      className="uppercase font-sans text-center"
      style={{
        fontSize: "11px",
        letterSpacing: "0.16em",
        fontWeight: 500,
        color: "var(--ink-60)",
        marginBottom: "12px",
      }}
    >
      {children}
    </p>
  );
}

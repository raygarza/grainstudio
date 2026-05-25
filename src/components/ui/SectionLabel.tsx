interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p
      className="uppercase font-sans text-[9px] text-center tracking-[0.12em]"
      style={{ color: "var(--ink-60)" }}
    >
      {children}
    </p>
  );
}

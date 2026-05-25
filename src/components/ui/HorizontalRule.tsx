interface HorizontalRuleProps {
  weight?: "bold" | "mid" | "thin";
}

export function HorizontalRule({ weight = "mid" }: HorizontalRuleProps) {
  const styles = {
    bold: { height: "2px", opacity: 1 },
    mid: { height: "1px", opacity: 0.4 },
    thin: { height: "0.5px", opacity: 0.2 },
  };

  const { height, opacity } = styles[weight];

  return (
    <div
      style={{
        height,
        background: "var(--ink)",
        opacity,
        width: "100%",
        display: "block",
        border: "none",
      }}
    />
  );
}

import { HorizontalRule } from "@/components/ui/HorizontalRule";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12">
      <HorizontalRule weight="thin" />
      <div className="flex justify-between items-center py-4">
        <p className="font-serif font-semibold text-[16px]" style={{ color: "var(--ink)" }}>
          {SITE.name}
        </p>
        <p
          className="uppercase font-sans text-[9px] tracking-[0.12em]"
          style={{ color: "var(--ink-60)" }}
        >
          {SITE.city}
        </p>
      </div>
    </footer>
  );
}

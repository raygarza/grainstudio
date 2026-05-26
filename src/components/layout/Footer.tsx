import { HorizontalRule } from "@/components/ui/HorizontalRule";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12">
      <HorizontalRule weight="thin" />
      <div
        className="flex justify-between items-center"
        style={{ padding: "28px 0" }}
      >
        <p
          className="uppercase font-sans text-[12px] tracking-[0.12em]"
          style={{ color: "var(--ink-60)" }}
        >
          {SITE.name}
        </p>
        <div className="flex items-center">
          <p
            className="uppercase font-sans text-[12px] tracking-[0.12em]"
            style={{ color: "var(--ink-60)" }}
          >
            {SITE.established}
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Grain Studio — Website Design & Development · Austin, TX",
  description: "Minimal, fast websites for small Austin businesses. You own it outright. No monthly fees, no lock-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      style={{
        '--page-padding': 'clamp(16px, 6vw, 96px)',
      } as React.CSSProperties}
    >
      <body>
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}

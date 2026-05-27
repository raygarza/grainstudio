import { Masthead } from "@/components/sections/Masthead";
import { HeroPitch } from "@/components/sections/HeroPitch";
import { Navigation } from "@/components/sections/Navigation";
import { Services } from "@/components/sections/Services";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Masthead />
      <main style={{ paddingBottom: "clamp(40px, 6vw, 72px)" }}>
        <HeroPitch />
        <Navigation />
        <Services />
        {/* <Philosophy /> */}
        <Pricing />
        <FAQ />
        <BookingCTA />
        <Footer />
      </main>
    </>
  );
}

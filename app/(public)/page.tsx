import { Hero } from "@/components/sections/Hero";
import { PluginShowcase } from "@/components/sections/PluginShowcase";
import { CoursesPreview } from "@/components/sections/CoursesPreview";
import { AircraftGrid } from "@/components/sections/AircraftGrid";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PluginShowcase />
      <CoursesPreview />
      <AircraftGrid />
      <Testimonials />
      <Pricing />
    </>
  );
}

// app/(home)/page.tsx
import HeroBanner from "../components/sections/Home/HeroBanner";
import OngoingProjects from "../components/sections/Home/OngoingProjects";
import Testimonials from "../components/sections/Home/Testimonials";
import AwardsSection from "../components/sections/Home/AwardsSection";
import StatsCounter from "./../components/sections/Home/StatsCounter";
import AboutSection from "@/components/sections/Home/AboutSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section (white background) */}
      <section className="bg-white">
        <HeroBanner />
      </section>

      {/* About Section (white background) */}
      <section className="bg-white">
        {/* <AboutSection /> */} <AboutSection />
      </section>

      {/* Ongoing Projects (cream background) */}
      <section className="bg-bg-lightgray">
        <OngoingProjects />
      </section>

      {/* Stats Counter (white background) */}
      <section className="bg-white">
        <StatsCounter />
      </section>

      {/* Awards (light gray background) */}
      <section className="bg-white">
        <AwardsSection />
      </section>

      {/* Testimonials (light gray background) */}
      <section className="bg-lightgray">
        <Testimonials />
      </section>
    </>
  );
}

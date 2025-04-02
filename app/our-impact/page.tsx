import type { Metadata } from "next";
import Banner from "@/components/sections/our-impact/banner";
import RutuCares from "@/components/sections/our-impact/rutu-cares";
import OurValues from "@/components/sections/our-impact/our-values";
// import DirectorQuote from "@/components/sections/our-impact/director-quote";

export const metadata: Metadata = {
  title: "Our Impact | Rutu Group",
  description:
    "Rutu Group's commitment to trust and excellence through our core values and philosophy.",
};

export default function OurImpactPage() {
  // Height of the navbar for desktop and mobile (you can adjust these values if needed)
  const desktopNavbarHeight = 80; // Desktop navbar height in pixels
  const mobileNavbarHeight = 64; // Mobile navbar height in pixels

  // Dynamically determine if the device is mobile or desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Set the height for the banner section based on the screen size
  const bannerSectionHeight = isMobile
    ? `calc(70vh - ${mobileNavbarHeight}px)` // Mobile view: 70% of viewport height minus mobile navbar
    : `calc(60vh - ${desktopNavbarHeight}px)`; // Desktop view: 60% of viewport height minus desktop navbar

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner
        imageUrl="/images/rutu-care/rutucares_banner.avif"
        bannerHeight={bannerSectionHeight} // Pass the updated height to the Banner component
      >
        {/* This is where the text remains as before */}
        <div className="absolute inset-0 flex items-center justify-center text-white p-8 z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-center text-[#e1bc6a]">
            When you care better, you build better
          </h1>
        </div>
      </Banner>
      <RutuCares />
      <OurValues />
      {/* <DirectorQuote /> */}
    </main>
  );
}

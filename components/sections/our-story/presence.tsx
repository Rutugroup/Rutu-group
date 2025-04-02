"use client";

import { useState } from "react";
import Image from "next/image";

type Region = "mumbai" | "gujarat";

export default function Presence() {
  const [activeRegion, setActiveRegion] = useState<Region>("mumbai");

  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#e1bc6a] mb-2">
          Our Presence
        </h2>
        <div className="w-16 h-1 bg-[#e1bc6a] mx-auto mb-8"></div>

        <h3 className="text-3xl text-gray-700 mb-8">Our footprint in India</h3>

        {/* Region Tabs */}
        <div className="flex rounded-md overflow-hidden mb-8 max-w-md mx-auto">
          <button
            className={`flex-1 py-2 px-4 text-center transition-colors ${
              activeRegion === "mumbai"
                ? "bg-[#e1bc6a] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveRegion("mumbai")}
          >
            Mumbai & Beyond
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center transition-colors ${
              activeRegion === "gujarat"
                ? "bg-[#e1bc6a] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveRegion("gujarat")}
          >
            Gujarat
          </button>
        </div>

        {/* Image Display */}
        <div className="flex justify-center gap-4 md:gap-8 items-center md:flex-row flex-col">
          <Image
            src="/images/about/Mumbai.png"
            alt="Mumbai Map"
            width={500}
            height={300}
            className={`transition-transform duration-300 w-full md:w-1/5 ${
              activeRegion === "mumbai" ? "scale-105" : "scale-100"
            } ${activeRegion !== "mumbai" ? "hidden md:block" : "block"}`}
          />

          <Image
            src="/images/about/Gujarat.png"
            alt="Gujarat Map"
            width={500}
            height={300}
            className={`transition-transform duration-300 w-full md:w-1/5 ${
              activeRegion === "gujarat" ? "scale-105" : "scale-100"
            } ${activeRegion !== "gujarat" ? "hidden md:block" : "block"}`}
          />
        </div>

        <p className="text-gray-700 mt-8 max-w-2xl mx-auto">
          45 Years of deep-rooted presence in the Mumbai Metropolitan Region and
          other states like Gujarat.
        </p>
      </div>
    </section>
  );
}

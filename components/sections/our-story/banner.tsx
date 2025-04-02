"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in effect when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
      {/* Apply transition-opacity for fade-in */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/images/about/about-banner.jpg"
          alt="Rutu Group Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
        {/* Uncomment and customize the content as needed */}
        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl">
          Building exceptional spaces and communities for over 45 years
        </p> */}
      </div>
    </section>
  );
}

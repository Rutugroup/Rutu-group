"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      image: "/images/awards/award-1.webp",
      title: "Green Trusted Project Of The Year 2021 By The Times",
      projects: "Rutu Richmond, Thane & Rutu Riverside Classic, Kalyan",
    },
    {
      id: 2,
      image: "/images/awards/award-2.webp",
      title:
        "Hindustan Times Real Estate Awards for the Luxury Residential Category Advantage Project 2021",
      projects: "For Rutu Richmond, Thane",
    },
    {
      id: 3,
      image: "/images/awards/award-3.webp",
      title: "Times Iconic Township Award",
      projects: "For Rutu Riverside Classic, Kalyan",
    },
    {
      id: 4,
      image: "/images/awards/award-4.webp",
      title: "Times Iconic Residential Project",
      projects: "For Rutu City, Thane",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSwipe = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    let touchEndX = 0;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      touchEndX = moveEvent.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        goToSlide((currentIndex + 1) % awards.length);
      } else if (touchEndX - touchStartX > 50) {
        goToSlide((currentIndex - 1 + awards.length) % awards.length);
      }
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#115e71] font-semibold mb-4 md:mb-4 text-center">
          Awards
        </h2>

        <div className="flex items-center justify-center w-full max-w-md mx-auto mb-8 md:mb-12">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <div className="mx-4 flex items-center">
            <div className="w-2 h-2 bg-[#115e71] transform rotate-45"></div>
            <div className="w-6 h-px bg-[#115e71]"></div>
            <div className="w-3 h-3 bg-[#115e71] rounded-full"></div>
            <div className="w-6 h-px bg-[#115e71]"></div>
            <div className="w-2 h-2 bg-[#115e71] transform rotate-45"></div>
          </div>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

        {/* Mobile Carousel */}
        <div
          className="block lg:hidden relative"
          onTouchStart={handleSwipe}
          style={{ overflowX: "hidden" }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {awards.map((award) => (
                <div key={award.id} className="flex-shrink-0 w-full relative">
                  <div className="relative w-full h-[400px] mb-4 overflow-hidden rounded-lg border-[1px] border-[#115e71] p-2">
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={award.image || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover opacity-20"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10">
                      <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#115e71] font-semibold mb-4 text-center">
                        {award.title}
                      </h3>
                      <p className="font-roboto text-lg text-gray-700 text-center">
                        {award.projects}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {awards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full ${
                          index === currentIndex
                            ? "bg-[#115e71]"
                            : "bg-gray-500"
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="relative overflow-hidden rounded-lg h-[400px] group border-[1px] border-[#115e71] p-2"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={award.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover opacity-5"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10">
                <h3 className="font-['Cormorant_Garamond'] text-xl lg:text-2xl text-[#115e71] font-semibold mb-4 text-center">
                  {award.title}
                </h3>
                <p className="font-roboto text-base text-gray-700 text-center">
                  {award.projects}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

type PhilosophyValue = {
  id: number;
  name: string;
  description: string;
  normalColor: string; // Tailwind fill class or a hex value
  hoverColor: string; // Unused here, but left for reference
  position: string;
};

export default function Philosophy() {
  // Each petal: name, color, position
  const values: PhilosophyValue[] = [
    {
      id: 1,
      name: "Innovation",
      description: "We thrive on it.",
      normalColor: "fill-[#FBC02D]", // yellow
      hoverColor: "fill-yellow-400",
      position: "top",
    },
    {
      id: 2,
      name: "Excellence",
      description: "We pursue it.",
      normalColor: "fill-[#4CAF50]", // green
      hoverColor: "fill-green-600",
      position: "left",
    },
    {
      id: 3,
      name: "Growth",
      description: "We nurture it.",
      normalColor: "fill-[#E91E63]", // pink
      hoverColor: "fill-pink-600",
      position: "right",
    },
    {
      id: 4,
      name: "Integrity",
      description: "We stand by it.",
      normalColor: "fill-[#F44336]", // red
      hoverColor: "fill-red-600",
      position: "bottom-left",
    },
    {
      id: 5,
      name: "Trust",
      description: "We build on it.",
      normalColor: "fill-[#2196F3]", // blue
      hoverColor: "fill-blue-600",
      position: "bottom-right",
    },
  ];

  // Position each petal so they form a symmetrical lotus shape
  const getPosition = (position: string) => {
    switch (position) {
      case "top":
        // Top center
        return "top-0 left-1/2 -translate-x-1/2";
      case "left":
        // Middle left
        return "left-0 top-1/2 -translate-y-1/2";
      case "right":
        // Middle right
        return "right-0 top-1/2 -translate-y-1/2";
      case "bottom-left":
        // Bottom left
        return "bottom-0 left-[20%] translate-y-1/2";
      case "bottom-right":
        // Bottom right
        return "bottom-0 right-[20%] translate-y-1/2";
      default:
        return "";
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#e1bc6a] mb-2">
          Philosophy
        </h2>
        <div className="w-16 h-1 bg-[#e1bc6a] mx-auto mb-8"></div>

        {/* Intro Text */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
          If there&apos;s one thing that hasn&apos;t changed in over 45 years of
          our existence, it&apos;s our philosophy:
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Building quality relationships that&apos;s as good as quality
          structure.
        </p>

        {/* Flower Container */}
        <div className="relative w-full max-w-[400px] h-[400px] mx-auto">
          {/* Center shape + dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            {/* Small dark dot */}
            <div className="w-3 h-3 bg-[#1a2e3b] rounded-full mb-2" />
            {/* Purple “lotus bud” shape in the center */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="fill-[#6a3da3]"
            >
              <path d="M30 0C35 15 45 30 30 45C15 30 25 15 30 0Z" />
              <path d="M0 30C15 35 30 45 45 30C30 15 15 25 0 30Z" />
              <path d="M60 30C45 35 30 45 15 30C30 15 45 25 60 30Z" />
            </svg>
          </div>

          {/* Petals */}
          {values.map((value) => (
            <div
              key={value.id}
              className={`absolute ${getPosition(value.position)} z-0`}
            >
              <svg
                width="80"
                height="120"
                viewBox="0 0 100 140"
                className={`transition-colors duration-300 ${value.normalColor}`}
              >
                {/* Outer colored petal */}
                <path d="M50 0 C75 40 75 100 50 140 C25 100 25 40 50 0Z" />
                {/* Inner white shape (smaller, same style) */}
                <path
                  d="M50 20 C70 45 70 95 50 120 C30 95 30 45 50 20Z"
                  fill="white"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

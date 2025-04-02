"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type TimelineItem = {
  period: string;
  title: string;
  image: string;
};

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineItems: TimelineItem[] = [
    {
      period: "1978-1989",
      title: "A journey that started with memorable milestones",
      image: "/images/about/timeline-1.avif",
    },
    {
      period: "1990-1999",
      title: "The 90s were a magnificent time for magic to happen",
      image: "/images/about/timeline-2.avif",
    },
    {
      period: "2000-2009",
      title: "A millennium of high-rises & higher ambitions",
      image: "/images/about/timeline-3.avif",
    },
    {
      period: "2010-2020",
      title: "An ongoing journey, with guts & glory.",
      image: "/images/about/timeline-4.avif",
    },
  ];

  // Initialize refs array if needed
  if (itemRefs.current.length !== timelineItems.length) {
    itemRefs.current = Array(timelineItems.length).fill(null);
  }

  // Scroll to the selected timeline item
  const scrollToItem = (index: number) => {
    setActiveItem(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#e1bc6a] mb-2">
          Our Company’s Milestones
        </h2>
        <div className="w-16 h-1 bg-[#e1bc6a] mx-auto mb-8"></div>

        <p className="text-2xl text-gray-700 mb-4">
          Rutu Group has a body of work that spans more than 4 decades.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          At Rutu Group, we have created milestones with every decade.
          Commencing with Sagar Sangeet, Juhu in 1978 to our latest project,
          Rutu Riverside Estate in Kalyan, we have always delivered exceptional
          quality and design. Our journey has always been backed with passion,
          perseverance and a commitment to building better homes while striving
          to exceed your expectation.
        </p>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {timelineItems.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeItem === index
                  ? "bg-amber-500 text-white"
                  : "bg-stone-200 text-gray-700 hover:bg-stone-300"
              }`}
              onClick={() => scrollToItem(index)}
            >
              {item.period}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Hide the vertical line on mobile, show it on desktop */}
          <div className="absolute top-0 bottom-0 w-1 bg-amber-200 transform md:-translate-x-1/2 left-1/4 md:left-1/2 hidden md:block"></div>

          <div ref={timelineRef} className="space-y-24">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 transition-opacity duration-500 ${
                  Math.abs(activeItem - index) > 1
                    ? "opacity-50"
                    : "opacity-100"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute top-0 w-5 h-5 bg-[#e1bc6a] rounded-full z-10 md:transform md:-translate-x-1/2 md:left-1/2 -translate-y-8 left-1/4"></div>

                {/* Content - alternating sides for desktop */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:order-last md:text-left md:pl-12"
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-medium text-[#e1bc6a] mb-2">
                    {item.title}
                  </h3>
                </div>

                {/* Image - alternating sides for desktop */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:order-last md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="relative w-full aspect-[3/3] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.period} timeline`}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Button from "../../ui/button/Button";
import AnimatedImage from "@/components/ui/image-animation/AnimatedImage";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="pt-0 pb-4 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-8">
        {/* Image Section */}
        <div
          className="overflow-hidden rounded-lg flex justify-center md:mb-0 
                     md:grid-rows-auto items-start mb-0"
          ref={ref}
        >
          <div
            style={{
              transform: isInView ? "translateX(0%)" : "translateX(-50%)",
              transition: "transform 1.5s ease-out",
            }}
            className="w-full max-w-full sm:max-w-full"
          >
            <AnimatedImage
              src="/images/about/about-sec.jpg"
              alt="Luxury Interior"
              width={500}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 md:space-y-4 pb-8 md:pb-0 -mt-2 md:mt-0">
          <h2 className="text-4xl md:text-5xl text-[#115e71] font-semibold -mt-1 md:mt-0 mb-4 md:mb-4">
            Our Story
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl text-gray-700">
            Four Decades of Homes & Happiness
          </p>
          <motion.p
            className="font-roboto text-base text-gray-600 mt-1 md:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            With over 4 decades of creating premier real estate developments
            across residential, commercial, and organised retail verticals, Rutu
            Group has come a long way in redefining the Mumbai skyscape. The
            enterprise has a portfolio of 45+ projects and has brought smiles to
            10,000+ happy families. This has been possible because of the
            company&apos;s commitment towards quality & customer satisfaction.
          </motion.p>
          <Link href="/our-story">
            <Button text="Read More" className="mt-4 md:block hidden" />
          </Link>
          <div className="md:hidden flex justify-center mt-4 md:mt-0">
            <Link href="/our-story">
              <Button text="Read More" className="block" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

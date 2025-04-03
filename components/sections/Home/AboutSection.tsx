"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Button from "../../ui/button/Button";
import AnimatedImage from "@/components/ui/image-animation/AnimatedImage";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  // Either use isInView or remove it completely
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="pt-8 pb-8 md:py-16 px-4 md:px-8 lg:px-16" ref={ref}>
      <div className="container mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-center pb-4 md:pb-0">
        {/* Image Section - No extra wrappers */}
        <AnimatedImage
          src="/images/about/about-sec.jpg"
          alt="Luxury Interior"
          width={500}
          height={250}
          className="rounded-lg w-full"
        />

        {/* Text Content - Adjusted margins */}
        <div className="space-y-2 md:space-y-4 mt-8 md:mt-0 ">
          <h2 className="text-3xl md:text-4xl text-[#115e71] font-semibold mb-2 md:mb-4 text-center md:text-left">
            Our Story
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl text-gray-700 text-center md:text-left">
            Four Decades of Homes & Happiness
          </p>
          <motion.p
            className="font-roboto text-base text-gray-600 mt-1 md:mt-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
          <div className="md:hidden flex justify-center mt-4">
            <Link href="/our-story">
              <Button text="Read More" className="block" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      className="overflow-hidden rounded-lg w-full md:h-auto flex justify-center items-center" // Removed fixed height for mobile
      ref={ref}
    >
      <div
        style={{
          transform: isInView ? "translateX(0%)" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "transform 1.5s ease-out, opacity 1s ease-in",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover mx-auto ${className} max-w-full max-h-full`}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;

"use client";
import { useEffect, useState } from "react";

interface BannerProps {
  imageUrl: string;
  bannerHeight: string; // Full height of the banner section
  imageHeight?: string; // Optional to control image height, but set to "100%" by default
  children?: React.ReactNode; // To accept the children (the text in this case)
}

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  bannerHeight,
  imageHeight = "100%", // Default to 100% to make the image fill the banner section
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in effect when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative w-full"
      style={{
        height: bannerHeight, // Use the dynamic height for the banner section
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Banner image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Keep the image centered
          height: imageHeight, // Set the image height to 100% of the banner height
        }}
      ></div>
      {children} {/* Render the passed children, like the text */}
    </section>
  );
};

export default Banner;

"use client";

import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("header");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div
      className="relative w-full"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }} // Dynamic height
    >
      {/* Video Background */}
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/images/banner/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

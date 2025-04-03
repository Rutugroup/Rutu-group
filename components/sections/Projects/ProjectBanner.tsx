"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "../../ui/navigation/forms/ContactForm"; // Adjust the import path as needed

interface ProjectBannerProps {
  title: string;
  videoSrc?: string;
  imageSrc?: string; // Banner image for desktop
  mobileImageSrc?: string; // Banner image for mobile
  sectionRefs: {
    overview: React.RefObject<HTMLDivElement>;
    amenities: React.RefObject<HTMLDivElement>;
    floorPlan: React.RefObject<HTMLDivElement>;
    location: React.RefObject<HTMLDivElement>;
    gallery: React.RefObject<HTMLDivElement>;
  };
}

export default function ProjectBanner({
  videoSrc,
  imageSrc,
  mobileImageSrc,
  sectionRefs,
}: ProjectBannerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const secondNavRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const lastScrollTop = useRef(0);

  // Determine if we should show video based on videoSrc
  useEffect(() => {
    setShowVideo(!!videoSrc && videoSrc.trim() !== "");
  }, [videoSrc]);

  // Calculate navbar height on mount and resize
  useEffect(() => {
    const calculateNavbarHeight = () => {
      const mainNavbar = document.querySelector("header");
      if (mainNavbar) {
        setNavbarHeight(mainNavbar.getBoundingClientRect().height);
      }
    };

    calculateNavbarHeight();
    window.addEventListener("resize", calculateNavbarHeight);
    return () => {
      window.removeEventListener("resize", calculateNavbarHeight);
    };
  }, []);

  // Handle mobile detection with a proper resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    if (ref.current) {
      const offset = 100;
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: "smooth",
      });
      setActiveSection(section);
    }
  };

  const handleFormSubmit = () => {
    setIsFormVisible(false);
  };

  const handleEnquiryClick = () => {
    setIsFormVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sections = [
        { id: "overview", ref: sectionRefs.overview },
        { id: "amenities", ref: sectionRefs.amenities },
        { id: "floorPlan", ref: sectionRefs.floorPlan },
        { id: "location", ref: sectionRefs.location },
        { id: "gallery", ref: sectionRefs.gallery },
      ];

      let currentSection = "overview";

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);

      const mainNavbar = document.querySelector("header");
      const secondNav = secondNavRef.current;
      const banner = bannerRef.current;

      if (secondNav && mainNavbar && banner) {
        const bannerBottom = banner.getBoundingClientRect().bottom;

        if (bannerBottom <= 0) {
          secondNav.style.position = "fixed";
          secondNav.style.top = "0";
          mainNavbar.style.transform = "translateY(-100%)";
        } else {
          secondNav.style.position = "relative";
          mainNavbar.style.transform = "translateY(0)";
        }
      }

      lastScrollTop.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  // Determine which image to display based on device width
  const currentImageSrc =
    isMobile && mobileImageSrc
      ? mobileImageSrc
      : imageSrc || "/fallback-image.jpg";

  const bannerHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <>
      <section
        ref={bannerRef}
        className="relative w-full overflow-hidden"
        style={{ height: bannerHeight }}
      >
        <div className="relative w-full h-full">
          {showVideo ? (
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={currentImageSrc}
                alt="Banner"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                style={{ objectPosition: "center" }}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      <div
        ref={secondNavRef}
        className="w-full bg-white p-3 md:p-6 shadow-md z-40 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex space-x-3 md:space-x-4 overflow-x-auto w-full md:w-auto">
            {[
              { label: "Overview", ref: sectionRefs.overview },
              { label: "Amenities", ref: sectionRefs.amenities },
              { label: "Plan", ref: sectionRefs.floorPlan },
              { label: "Location", ref: sectionRefs.location },
              { label: "Gallery", ref: sectionRefs.gallery },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() =>
                  scrollToSection(item.ref, item.label.toLowerCase())
                }
                className={`pb-1 md:pb-2 border-b-2 transition-all text-sm md:text-xl ${
                  activeSection === item.label.toLowerCase()
                    ? "text-[#115e71] border-[#115e71] font-semibold"
                    : "text-gray-500 hover:text-[#115e71] border-transparent hover:border-[#115e71]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleEnquiryClick}
            className="hidden md:block text-[#115e71] font-medium text-lg md:text-xl"
          >
            Enquire
          </button>
        </div>
      </div>

      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleEnquiryClick}
            className="bg-[#115e71] text-white font-medium py-3 px-6 rounded-full shadow-lg"
          >
            Enquire Now
          </button>
        </div>
      )}

      {isFormVisible && (
        <ContactForm
          onSubmit={handleFormSubmit}
          setIsFormVisible={setIsFormVisible}
        />
      )}
    </>
  );
}

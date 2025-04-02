import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectAboutProps {
  title: string;
  subtitle: string;
  maharera: string;
  description: string;
  image: string | string[];
}

export default function ProjectAbout({
  title,
  subtitle,
  maharera,
  description,
  image,
}: ProjectAboutProps) {
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = images.some((img) => img.trim() !== ""); // Check if at least one image exists

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  // Handle dot click for manual navigation
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-16 bg-white mb-0 md:mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#115e71] text-center mb-2 md:mb-4">
          {title}
        </h1>

        {/* Decorative divider under title */}
        <div className="flex justify-center items-center mb-12 md:mb-20">
          <div className="w-12 h-px bg-[#e1bc6a]"></div>
          <div className="mx-1 w-2 h-2 bg-[#e1bc6a] rounded-full"></div>
          <div className="mx-1 w-2 h-2 border border-[#e1bc6a] rounded-full"></div>
          <div className="mx-1 w-2 h-2 bg-[#e1bc6a] rounded-full"></div>
          <div className="w-12 h-px bg-[#e1bc6a]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Carousel Container */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-[350px] md:w-[400px]">
              {/* Decorative border */}
              <div className="hidden md:block">
                <div className="absolute -top-6 -left-6 -bottom-6 -right-6 border-2 border-[#e1bc6a] opacity-80"></div>
                <div className="absolute -top-3 -left-3 -bottom-3 -right-3 border border-[#115e71] opacity-60"></div>
              </div>

              {/* Image Carousel / Coming Soon Display */}
              <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
                {hasImages ? (
                  <div
                    className="flex w-full h-full transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {images.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="w-full h-full flex-shrink-0 relative"
                      >
                        {/* Image */}
                        <Image
                          src={imgSrc}
                          alt={`${title} - image ${index + 1}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                    <span className="text-[#115e71] text-3xl md:text-4xl font-bold drop-shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Carousel Dots */}
              {hasImages && images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "bg-[#115e71] scale-110"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#115e71] mb-6 md:mb-6 font-roboto">
              {subtitle}
            </h2>
            <p className="text-md md:text-lg text-gray-500 mb-8 md:mb-4">
              MahaRERA No.: <span className="text-[#e1bc6a]">{maharera}</span>
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

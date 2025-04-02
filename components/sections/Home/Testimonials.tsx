"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Mr. Lester Fernandez",
    image: "/images/testimonials/testimonial1.png",
    videoUrl: "https://www.youtube.com/watch?v=CEmjgx-gbZ8",
    quote:
      "Living at Rutu has been an exceptional experience. The attention to detail and quality of construction is outstanding.",
  },
  {
    id: 2,
    name: "Mr. Chandraman Singh",
    image: "/images/testimonials/testimonial2.png",
    videoUrl: "https://www.youtube.com/watch?v=VM2GHHgF2f4",
    quote:
      "We couldn't be happier with our decision to purchase a home here. The amenities and community feel are exactly what we were looking for.",
  },
  {
    id: 3,
    name: "Mrs. & Mr. Acharekar",
    image: "/images/testimonials/testimonial3.png",
    videoUrl: "https://www.youtube.com/watch?v=EdgDkgAM-_I",
    quote:
      "From the day we moved in, we've felt at home. The management team is responsive and the property is beautifully maintained.",
  },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to handle testimonial navigation
  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 relative">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#115e71] font-semibold mb-3 uppercase">
            Testimonials
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl text-gray-700 mb-6">
            Here&apos;s what our residents have to say
          </p>
          <div className="flex items-center justify-center w-full max-w-md mx-auto">
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
        </div>

        <div className="mb-12 relative">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500">
            <div className="md:flex">
              {/* Increased size to fit image properly */}
              <div className="md:w-[55%] relative group cursor-pointer overflow-hidden">
                <div className="relative h-80 md:h-[400px] w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${testimonials[activeTestimonial]?.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    {testimonials[activeTestimonial]?.videoUrl && (
                      <Link
                        href={testimonials[activeTestimonial]?.videoUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-[#115e71] ml-1" />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-center">
                <p className="text-gray-700 text-lg mb-6 italic">
                  {testimonials[activeTestimonial]?.quote}
                </p>
                <div className="mt-auto">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#115e71]">
                    {testimonials[activeTestimonial]?.name}
                  </h3>
                  <div className="h-px w-12 bg-[#e1bc6a] my-3"></div>
                  <p className="text-gray-600">Resident</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#e1bc6a] -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#e1bc6a] translate-x-2 translate-y-2"></div>
        </div>

        {/* Fixed button navigation */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? "bg-[#115e71] w-10"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DirectorsPage() {
  // Sample directors data - replace with your actual data
  const directors = [
    {
      id: "Mr Pratap Patel",
      name: "Mr. Pratap Patel",
      position: "Founder & Chairman",
      image: "/images/directors/pratap-patel.avif",
      bio: "A distinguished civil engineer and a charismatic leader, Mr. Pratap Patel is the force behind Rutu Group. With over five decades of experience in handling construction and civil engineering projects, Mr. Pratap Patel has been a pioneer in the field of design and execution.",
    },
    {
      id: "Mr. Mukund Patel",
      name: "Mr. Mukund Patel",
      position: "Managing Director",
      image: "/images/directors/mukund-patel.avif",
      bio: "A thorough and perfect gentleman, a rare trait in the Indian real estate market, Mr. Mukund Patel leads the overall planning and implementation for Rutu Group.",
    },
    {
      id: "Mr. Mukul P. Patel",
      name: "Mr. Mukul P. Patel",
      position: "Director",
      image: "/images/directors/mukul-patel.avif",
      bio: "A Civil Engineer by qualification and a source of inspiration to many, Mr. Mukul Patel has earned notable experience in the real estate business.",
    },
    {
      id: "Mr. Rushi Patel",
      name: "Mr. Rushi Patel",
      position: "Director",
      image: "/images/directors/rushi-patel.avif",
      bio: "Mr. Rushi M. Patel has always strived to revolutionise the way people think about and experience real estate properties.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e1bc6a] mb-6">
            Our Leaders
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
            Meet the visionaries behind our success. Our directors bring decades
            of combined experience in luxury real estate development, creating
            exceptional living spaces for discerning clients.
          </p>
        </div>

        {/* Directors List */}
        <div className="flex flex-col space-y-16 md:space-y-24 max-w-6xl mx-auto">
          {directors.map((director) => (
            <div key={director.id} className="group">
              {/* Desktop Layout - Side by side with gap between */}
              <div className="hidden md:flex md:gap-12 lg:gap-16 items-start">
                {/* Circular Image Container - Left Side */}
                <div className="w-1/4 flex items-center justify-center">
                  <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-gray-200 shadow-lg">
                    <Image
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 224px"
                    />
                  </div>
                </div>

                {/* Info Container - Right Side - Fixed Height */}
                <div className="w-3/4 bg-white rounded-lg border border-gray-200 shadow-lg p-8 lg:p-10 min-h-[280px] flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#e1bc6a] mb-2">
                      {director.name}
                    </h2>
                    <h3 className="text-[#e1bc6a] text-xl md:text-2xl font-semibold mb-6">
                      {director.position}
                    </h3>
                    <p className="text-gray-700">{director.bio}</p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`#`} // Future link: `/directors/${director.id}`
                      className="inline-flex items-center text-[#e1bc6a] font-medium group/link hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Layout - Stacked */}
              <div className="md:hidden bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                {/* Circular Image for Mobile */}
                <div className="flex justify-center my-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border border-gray-200 shadow-md">
                    <Image
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      fill
                      className="object-cover object-center"
                      sizes="160px"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 border-t border-gray-100">
                  <h2 className="text-2xl font-bold text-[#e1bc6a] mb-2 text-center">
                    {director.name}
                  </h2>
                  <p className="text-gray-600 font-medium mb-4 text-center">
                    {director.position}
                  </p>
                  <p className="text-gray-700 mb-6">{director.bio}</p>

                  <div className="flex justify-center">
                    <Link
                      href={`#`} // Future link: `/directors/${director.id}`
                      className="inline-flex items-center text-[#e1bc6a] font-medium group/link hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

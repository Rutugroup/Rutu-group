"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Project data
const ongoingProjects = [
  {
    id: "rutu-heights",
    title: "Rutu Heights",
    location: "Kalyan West",
    description: "1, 2 & 3 BHK Homes",
    image: "/images/projects/rutu-heights-kalyan/elevations/rutu-heights.webp",
  },
  {
    id: "rutu-samruddhi",
    title: "Rutu Samruddhi",
    location: "Thane",
    description: "2 & 3 BHK Luxury Homes",
    image:
      "/images/projects/rutu-samruddhi-thane/elevations/homesamruddhi.webp",
  },
  {
    id: "rutu-apartments",
    title: "Rutu Apartments",
    location: "Dombivli",
    description: "1 & 2 BHK Apartments",
    image: "/images/projects/rutu-apartment/elevations/rutu-apartments.webp",
  },
  {
    id: "rutu-city",
    title: "Rutu City",
    location: "Kalyan East",
    description: "Township with 1, 2 & 3 BHK",
    image: null, // Removed image for Rutu City
    comingSoon: true, // Added flag to indicate coming soon
  },
];

const completedProjects: Record<
  "Mumbai" | "Thane" | "Kalyan",
  Array<{
    id: string;
    title: string;
    location: string;
    description: string;
    image: string;
  }>
> = {
  Mumbai: [
    {
      id: "regiland",
      title: "Regiland",
      location: "Bandra",
      description: "20,000 (sq. ft.)",
      image:
        "/images/projects/completed/mumbai/projectscompleted_regiland.avif",
    },
    {
      id: "tulsi-villa",
      title: "Tulsi Villa",
      location: "Santacruz",
      description: "42,000 (sq. ft.)",
      image:
        "/images/projects/completed/mumbai/projectscompleted_tulsivilla.avif",
    },
    {
      id: "ratnakar",
      title: "Ratnakar",
      location: "Versova",
      description: "45,000 (sq. ft.)",
      image:
        "/images/projects/completed/mumbai/projectscompleted_ratnakar.avif",
    },
  ],
  Thane: [
    {
      id: "rutu-business-park",
      title: "Rutu Business Park",
      location: "Thane",
      description: "25,000 (sq. ft.)",
      image:
        "/images/projects/completed/thane/projectscompleted_rutubusinesspark.avif",
    },
    {
      id: "rutu-towers",
      title: "Rutu Towers",
      location: "Thane",
      description: "5,00,000 (sq. ft.)",
      image:
        "/images/projects/completed/thane/projectscompleted_rututowers.avif",
    },
    {
      id: "rutu-richmond",
      title: "Rutu Richmond",
      location: "Thane",
      description: "1&2 BHK Communities",
      image: "/images/projects/completed/thane/Projects_Richmond.avif",
    },
  ],
  Kalyan: [
    {
      id: "rutu-riverview-classic",
      title: "Rutu Riverview Classic",
      location: "Kalyan",
      description: "1,2 BHK Communities",
      image:
        "/images/projects/completed/kalyan/completed_riverview_classic.avif",
    },
    {
      id: "rutu-riverside-estate-township",
      title: "Rutu Riverside Estate Township",
      location: "Kalyan",
      description: "3,00,000 (sq. ft.)",
      image: "/images/projects/completed/kalyan/Rutu-Riverside-Estate_.jpg",
    },
  ],
};

// Additional completed projects by city (for the list sections)
const additionalProjects = {
  Mumbai: [
    { title: "Riddhi Gardens", location: "Malad", area: "2,75,000 (sq. ft.)" },
    {
      title: "Nestle & Lennie",
      location: "Andheri",
      area: "1,00,000 (sq. ft.)",
    },
    { title: "Silver Beach", location: "Juhu", area: "55,000 (sq. ft.)" },
    {
      title: "Sarjan Complex",
      location: "Bhayander",
      area: "40,000 (sq. ft.)",
    },
    { title: "Sagar Sangeet", location: "Juhu", area: "35,000 (sq. ft.)" },
    {
      title: "Sagar Sangeet",
      location: "Bhayander",
      area: "1,90,000 (sq. ft.)",
    },
    { title: "Sangeet Plaza", location: "Andheri", area: "40,000 (sq. ft.)" },
    { title: "Chandraprabha", location: "Bhandup", area: "25,000 (sq. ft.)" },
    { title: "Chandralok", location: "Dahisar", area: "30,000 (sq. ft.)" },
    { title: "Chandralok", location: "Bhandup", area: "25,000 (sq. ft.)" },
    { title: "Pleasant Park", location: "Dahisar", area: "50,000 (sq. ft.)" },
    { title: "Chandrachaya", location: "Bhandup", area: "25,000 (sq. ft.)" },
  ],
  Thane: [
    { title: "Rutu Estate", location: "Thane", area: "5,00,000 (sq. ft.)" },
    { title: "Harasidh Park", location: "Thane", area: "2,00,000 (sq. ft.)" },
    { title: "Rutu Park", location: "Thane", area: "3,50,000 (sq. ft.)" },
    { title: "Rutu Enclave", location: "Thane", area: "4,75,000 (sq. ft.)" },
  ],
  Kalyan: [],
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/images/projects/projectbanner.jpg"
          alt="Rutu Projects Banner"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
      </section>

      {/* Project Filter Buttons */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        {/* Project Type Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`px-8 py-3 rounded-full text-md md:text-lg font-light md:font-medium transition-all ${
              activeTab === "ongoing"
                ? "bg-[#115e71] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Ongoing Projects
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-8 py-3 rounded-full text-md md:text-lg font-light md:font-medium transition-all ${
              activeTab === "completed"
                ? "bg-[#115e71] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Completed Projects
          </button>
        </div>

        {/* Project Cards */}
        {activeTab === "ongoing" ? (
          // Ongoing Projects - Original grid layout with all 4 cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project) => (
              <Link href={`/${project.id}`} key={project.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    {project.comingSoon ? (
                      <div className="h-full flex items-center justify-center bg-gray-100">
                        <p className="text-2xl font-semibold text-[#115e71]">
                          Coming Soon
                        </p>
                      </div>
                    ) : (
                      <Image
                        src={
                          project.image ||
                          "/placeholder.svg?height=400&width=600"
                        }
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#115e71]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{project.location}</p>
                    <p className="text-gray-800 mt-3">{project.description}</p>
                    <button className="mt-4 px-6 py-2 bg-[#115e71] text-white rounded-full hover:bg-[#0d4a5a] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Completed Projects - Adjusted design with larger card sizes
          <div className="space-y-20">
            {Object.keys(completedProjects).map((city) => (
              <div key={city} className="mb-16">
                <div className="flex items-center justify-center mb-10">
                  <div className="w-1/4 h-px bg-[#115e71]"></div>
                  <h2 className="text-3xl font-bold text-[#115e71] mx-6 px-8">
                    {city}
                  </h2>
                  <div className="w-1/4 h-px bg-[#115e71]"></div>
                </div>

                {completedProjects[city as keyof typeof completedProjects]
                  .length > 0 ? (
                  <>
                    <div className="flex justify-center">
                      <div className="flex flex-wrap justify-center gap-8 mb-10 max-w-6xl">
                        {completedProjects[
                          city as keyof typeof completedProjects
                        ].map((project) => (
                          <div
                            key={project.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full md:w-[320px] lg:w-[350px]"
                          >
                            <div className="relative h-64">
                              <Image
                                src={
                                  project.image ||
                                  "/placeholder.svg?height=400&width=600"
                                }
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-2xl font-semibold text-[#115e71]">
                                {project.title}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                {project.location}
                              </p>
                              <p className="text-gray-800 text-sm mt-1">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {additionalProjects[
                      city as keyof typeof additionalProjects
                    ] &&
                      additionalProjects[
                        city as keyof typeof additionalProjects
                      ].length > 0 && (
                        <div className="mt-8 max-w-5xl mx-auto">
                          <div className="flex items-center justify-center mb-6">
                            <div className="w-1/4 h-px bg-[#e1bc6a]"></div>
                            <h3 className="text-xl font-medium text-[#115e71] mx-4">
                              Other developments in {city}
                            </h3>
                            <div className="w-1/4 h-px bg-[#e1bc6a]"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 max-w-5xl mx-auto">
                            {additionalProjects[
                              city as keyof typeof additionalProjects
                            ].map((project, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between py-2 border-b border-gray-200"
                              >
                                <div>
                                  <span className="text-[#115e71] font-medium">
                                    {project.title}
                                  </span>
                                  <span className="text-gray-600 mx-2">•</span>
                                  <span className="text-gray-600">
                                    {project.location}
                                  </span>
                                </div>
                                <div className="text-[#e1bc6a]">
                                  {project.area}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-xl text-gray-600">
                      No completed projects available for this location.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

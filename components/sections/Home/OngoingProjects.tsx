import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link component
import Button from "../../ui/button/Button"; // Import the Button component

const OngoingProjects = () => {
  const projects = [
    {
      name: "Rutu Samruddhi",
      details: "2 & 3 BHK Communities",
      image:
        "/images/projects/rutu-samruddhi-thane/elevations/homesamruddhi.webp",
      link: "/rutu-samruddhi",
    },
    {
      name: "Rutu Heights",
      details: "1, 2, 3 (Combo) BHK Spacious Homes",
      image:
        "/images/projects/rutu-heights-kalyan/elevations/rutu-heights.webp",
      link: "/rutu-heights",
    },
    {
      name: "Rutu Apartments",
      details: "1 & 2 BHK Spacious Homes",
      image: "/images/projects/rutu-apartment/elevations/rutu-apartments.webp",
      link: "/rutu-apartments",
    },
    {
      name: "Rutu City",
      details: "2 BHK Spacious Homes",
      image: null, // Set image to null as we want to display the text instead of the image
      link: "/rutu-city",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-[#115e71] mb-4">
          Ongoing Projects
        </h2>
        <p className="text-gray-600 mb-8 text-xl">
          Beautiful 1 & 2 BHK communities in Kalyan & Thane.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link key={index} href={project.link}>
              <div className="flex flex-col items-center border border-gray-400 rounded-xl p-4 shadow-xl w-full md:w-72 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] h-[450px]">
                <div className="relative w-full h-[70%] bg-gray-300 flex items-center justify-center border rounded-xl shadow-lg overflow-hidden">
                  {project.name === "Rutu City" ? (
                    <span className="text-4xl font-bold text-[#115e71]">
                      Coming Soon
                    </span>
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Image Not Available</span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#115e71] mt-4 mb-2 md:mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-m text-center">
                  {project.details}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Add the "All Projects" button at the bottom center */}
        <div className="mt-12">
          {/* Directly wrap Button inside the Link */}
          <Link href="/projects">
            <Button text="All Projects" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;

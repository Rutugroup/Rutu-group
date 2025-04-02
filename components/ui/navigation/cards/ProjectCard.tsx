import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link component

interface ProjectCardProps {
  imageSrc: string;
  isComingSoon?: boolean;
  link: string; // Add a link prop to pass the navigation link
}

export default function ProjectCard({
  imageSrc,
  isComingSoon,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-[#D4B07F] transition-transform transform hover:scale-[1.02] hover:shadow-md duration-300 h-[400px] flex cursor-pointer">
        {/* Ongoing Badge */}
        {isComingSoon && (
          <div className="absolute top-0 left-0 bg-[#D4B07F] text-white text-sm font-semibold px-3 py-1 rounded-br-lg">
            Ongoing
          </div>
        )}

        {/* Image (taking 70% of the height) */}
        <div className="relative w-full h-[70%]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Project Image"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-102"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">Image Not Available</span>
            </div>
          )}
        </div>

        {/* Optional Content (remaining 30% height) */}
        <div className="flex justify-center items-center h-[30%] px-4">
          {/* You can add any additional content here like project name or description */}
        </div>
      </div>
    </Link>
  );
}

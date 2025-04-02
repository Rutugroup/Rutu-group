import Image from "next/image";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Landmark {
  name: string;
  icon: string | LucideIcon;
  type: "image" | "lucide";
  distance: string;
  category: "Connectivity" | "Health" | "Shopping" | "Education"; // Added category field
}

interface ProjectLocationProps {
  title: string;
  address: string;
  mapSource?: { src: string }; // Optional map source image
  mapLink: string;
  landmarks: Landmark[];
}

export default function ProjectLocation({
  title,
  address,
  mapSource,
  mapLink,
  landmarks,
}: ProjectLocationProps) {
  // Group landmarks by category
  const landmarksByCategory = landmarks.reduce((acc, landmark) => {
    if (!acc[landmark.category]) {
      acc[landmark.category] = [];
    }
    acc[landmark.category].push(landmark);
    return acc;
  }, {} as Record<string, Landmark[]>);

  // Categories in the order we want to display them
  const categories = ["Connectivity", "Health", "Shopping", "Education"];

  return (
    <section className="py-24 relative bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-[#115e71] mb-4 text-center">
          Location
        </h2>
        <div className="flex justify-center items-center mb-8 pb-4 md:pb-8">
          <div className="w-16 h-px bg-[#115e71]"></div>
          <div className="w-3 h-3 mx-2 border border-[#e1bc6a] rounded-full"></div>
          <div className="w-16 h-px bg-[#115e71]"></div>
        </div>

        {/* Address & Map Container */}
        <div className="border border-[#e1bc6a] rounded-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-[#115e71] mb-6 pb-4 border-b border-[#e1bc6a]">
                {title}
              </h3>
              <p className="text-gray-700 text-lg md:text-xl">{address}</p>
            </div>

            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
              {mapSource?.src ? (
                <Link
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer"
                >
                  <Image
                    src={mapSource.src}
                    alt="Location Map"
                    fill
                    className="object-contain w-full h-full hover:opacity-90 transition-opacity"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                    <span className="bg-white px-4 py-2 rounded-md text-[#115e71] font-medium">
                      View on Google Maps
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Map not available</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Connectivity Section */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#115e71] mb-4 text-center mt-12">
          Connectivity & Nearby Places
        </h3>
        <div className="flex justify-center items-center mb-8 pb-4">
          <div className="w-12 h-px bg-[#115e71]"></div>
          <div className="w-2 h-2 mx-2 border border-[#e1bc6a] rounded-full"></div>
          <div className="w-12 h-px bg-[#115e71]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category} className="flex flex-col">
              <h4 className="text-2xl font-bold text-[#115e71] mb-4 pb-2 border-b border-[#e1bc6a]">
                {category}
              </h4>
              <div className="space-y-4">
                {landmarksByCategory[category]?.map((landmark, index) => (
                  <div
                    key={index}
                    className="relative border border-[#e1bc6a] p-4 rounded-sm flex items-center"
                  >
                    <div className="mr-4 text-[#115e71]">
                      {landmark.type === "lucide" &&
                      typeof landmark.icon !== "string" ? (
                        <span className="flex items-center justify-center w-10 h-10 bg-[#e1bc6a]/10 rounded-full">
                          <landmark.icon size={24} className="text-[#115e71]" />
                        </span>
                      ) : (
                        <Image
                          src={landmark.icon as string}
                          alt={landmark.name}
                          width={30}
                          height={30}
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-[#115e71]">
                        {landmark.name}
                      </p>
                      <p className="text-sm text-gray-600">{landmark.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
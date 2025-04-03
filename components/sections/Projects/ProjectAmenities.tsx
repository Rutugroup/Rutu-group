import FlipCard from "../../ui/navigation/cards/FlipCard";

interface Amenity {
  name: string;
  icon: string;
  frontImage: string;
  backImage: string;
}

interface ProjectAmenitiesProps {
  title: string;
  amenities: Amenity[];
}

export default function ProjectAmenities({ amenities }: ProjectAmenitiesProps) {
  return (
    <section className="py-24 relative">
      {/* Top decorative divider */}
      <div className="absolute top-0 left-0 right-0 flex justify-center w-full">
        <div className="w-full max-w-5xl px-4 py-4 flex items-center">
          <div className="h-px bg-[#e1bc6a] flex-grow opacity-70"></div>
          <div className="mx-4 flex items-center">
            <div className="w-2 h-2 bg-[#115e71] rotate-45"></div>
            <div className="w-8 h-px bg-[#115e71]"></div>
            <div className="w-4 h-4 border-2 border-[#e1bc6a] mx-1 rotate-45"></div>
            <div className="w-8 h-px bg-[#115e71]"></div>
            <div className="w-2 h-2 bg-[#115e71] rotate-45"></div>
          </div>
          <div className="h-px bg-[#e1bc6a] flex-grow opacity-70"></div>
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="w-full max-w-5xl px-4 py-4 flex items-center">
          <div className="h-px bg-[#e1bc6a] flex-grow opacity-70"></div>
          <div className="mx-4 flex items-center">
            <div className="w-2 h-2 bg-[#115e71] rotate-45"></div>
            <div className="w-8 h-px bg-[#115e71]"></div>
            <div className="w-4 h-4 border-2 border-[#e1bc6a] mx-1 rotate-45"></div>
            <div className="w-8 h-px bg-[#115e71]"></div>
            <div className="w-2 h-2 bg-[#115e71] rotate-45"></div>
          </div>
          <div className="h-px bg-[#e1bc6a] flex-grow opacity-70"></div>
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 h-2/3 hidden sm:block">
        <div className="h-full w-px bg-[#e1bc6a] opacity-40"></div>
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 h-2/3 hidden sm:block">
        <div className="h-full w-px bg-[#e1bc6a] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Center the heading with text-center */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#115e71] mb-4 relative text-center">
          {" "}
          {/* Added pb-6 */}
          Amenities
          {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-[#e1bc6a] to-[#115e71] opacity-70"></span> */}
        </h2>

        {/* Title divider inspired by the image */}
        <div className="flex justify-center items-center mb-8 pb-4 md:pb-8">
          <div className="w-16 h-px bg-[#115e71]"></div>
          <div className="mx-2 w-2 h-2 bg-[#115e71] rounded-full"></div>
          <div className="w-3 h-3 mx-1 border border-[#e1bc6a] rounded-full"></div>
          <div className="mx-2 w-2 h-2 bg-[#115e71] rounded-full"></div>
          <div className="w-16 h-px bg-[#115e71]"></div>
        </div>

        {/* Grid Layout (with gap) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-6">
          {" "}
          {/* Added mt-6 */}
          {amenities.slice(0, 6).map((amenity, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Added mobile specific class for FlipCard size */}
              <div className="w-full sm:w-auto scale-90 sm:scale-100">
                <FlipCard
                  frontImage={amenity.frontImage}
                  backIcon={amenity.icon || "/placeholder.svg"}
                />
              </div>
              <p className="text-center font-bold text-gray-700 text-xl mt-6">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>

        {/* Section bottom divider */}
        <div className="mt-12 flex justify-center">
          {/* <div className="flex items-center w-full max-w-xl">
            <div className="h-px bg-[#e1bc6a] flex-grow"></div>
            <div className="mx-2 w-1 h-1 bg-[#115e71] rounded-full"></div>
            <div className="mx-2 w-1 h-1 bg-[#115e71] rounded-full"></div>
            <div className="mx-2 w-1 h-1 bg-[#115e71] rounded-full"></div>
            <div className="h-px bg-[#e1bc6a] flex-grow"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

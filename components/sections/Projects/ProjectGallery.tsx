import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  // Check if images array is not empty
  if (!images || images.length === 0) {
    return null; // Render nothing if no images are provided
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#115e71] mb-6 text-center">
          Gallery
        </h2>
        <div className="flex justify-center items-center mb-8 pb-4 md:pb-8">
          <div className="w-16 h-px bg-[#115e71]"></div>
          <div className="mx-2 w-2 h-2 bg-[#115e71] rounded-full"></div>
          <div className="w-3 h-3 mx-1 border border-[#e1bc6a] rounded-full"></div>
          <div className="mx-2 w-2 h-2 bg-[#115e71] rounded-full"></div>
          <div className="w-16 h-px bg-[#115e71]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image || "/placeholder.svg?height=300&width=400"}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Update the function parameters to make videoUrl optional
interface TestimonialCardProps {
  name: string;
  image: string;
  videoUrl?: string;
}

export default function TestimonialCard({
  name,
  image,
  videoUrl,
}: TestimonialCardProps) {
  // Update the getYouTubeVideoId function to safely handle undefined URLs
  const getYouTubeVideoId = (url: string | undefined) => {
    if (!url) return null;

    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : image;

  return (
    <Link href={videoUrl || ""} target="_blank" rel="noopener noreferrer">
      <div className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        {/* Video thumbnail */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || thumbnailUrl}
            alt={`Testimonial by ${name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 384px"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-90 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-6 w-6 text-[#115e71]" />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="bg-white p-4 text-center">
          <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#115e71]">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

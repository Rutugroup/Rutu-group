"use client";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const RutuCares = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element

  const handlePlayVideo = () => {
    setIsPlaying(true); // Set isPlaying to true to render the video
  };

  // Ensure the video plays when isPlaying is true
  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video once it is rendered
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center px-4 py-24 md:py-32">
      {/* Title and Philosophy Text */}
      <h1 className="text-3xl md:text-5xl font-semibold text-[#115e71] mb-8">
        Care Better, Build Better: Rutu Group&apos;s Commitment to Trust and
        Excellence
      </h1>

      <p className="text-sm md:text-base text-gray-600 mb-6">
        At Rutu Group, we nurture every relationship with care and mutual trust.
        Right from the point when you book your home to the time you get
        possession and beyond, our processes, practices and policies are
        designed to enable and empower you. Which is reflected in our core
        philosophy &apos;Care Better, Build Better&apos;.
      </p>

      <p className="text-sm md:text-base text-gray-600 mb-16">
        At the heart of every Rutu Home, is Care. It&apos;s perhaps the most
        important raw material we use in our projects.
      </p>

      {/* Hashtag */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#115e71] mb-16">
        #RutuCares
      </h2>

      {/* Video Component */}
      <div className="relative w-full aspect-video mx-auto rounded-lg overflow-hidden mb-24">
        {isPlaying ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            controls
            onCanPlayThrough={handleVideoPlay} // Make sure video starts when it's ready
          >
            <source
              src="/images/rutu-care/RG_Cares_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative w-full h-full">
            <div
              className="w-full h-full bg-gray-200"
              style={{
                backgroundImage: "url('/images/rutu-care/rutu-care-video.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[#e1bc6a] ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RutuCares;

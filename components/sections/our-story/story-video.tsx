"use client";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function StoryVideo() {
  // Create a reference for the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  // State to manage play button visibility
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to play the video when the button is clicked
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Video starts playing, hide the button
    }
  };

  // Function to handle when the video ends
  const handleEnded = () => {
    setIsPlaying(false); // Video has ended, show the play button again
  };

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#e1bc6a] mb-2">
          The Rutu Brand Story
        </h2>
        <div className="w-16 h-1 bg-[#e1bc6a] mx-auto mb-12"></div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
          <div className="aspect-video relative">
            <video
              ref={videoRef} // Attach the ref to the video element
              className="object-cover w-full h-full"
              muted
              playsInline
              poster="/images/about/about-video.png"
              onEnded={handleEnded} // Listen for when the video ends
            >
              <source src="/images/about/about-story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Show the play button if the video is not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-12 h-12 md:w-16 md:h-16 bg-[#e1bc6a] rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-label="Play video"
                  onClick={handlePlay} // Attach the click handler
                >
                  <Play className="w-8 h-8 text-white" fill="white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

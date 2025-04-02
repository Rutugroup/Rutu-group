import React from "react";
import Image from "next/image";

interface FlipCardProps {
  frontImage: string;
  backIcon: string;
  altText?: string;
}

const FlipCard = ({
  frontImage,
  backIcon,
  altText = "Flip card",
}: FlipCardProps) => {
  return (
    <div className="group relative w-72 h-72 md:w-64 md:h-64 sm:w-64 sm:h-64 xs:w-40 xs:h-40 [perspective:1000px]">
      {/* Flipping Container */}
      <div className="absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        {/* Front Side (Image) */}
        <div className="absolute w-full h-full rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center [backface-visibility:hidden]">
          <Image
            src={frontImage}
            alt={altText}
            fill // Ensures full coverage
            className="object-cover w-full h-full"
          />
        </div>

        {/* Back Side (Icon) */}
        <div className="absolute w-full h-full rounded-full shadow-lg bg-gray-200 flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
          <Image
            src={backIcon}
            alt="Back icon"
            width={100} // Adjusted icon size for balance
            height={100}
            className="w-40 h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

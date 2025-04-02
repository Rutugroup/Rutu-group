import Image from "next/image";
import React from "react";

interface ValueCardProps {
  title: string;
  imageUrl: string;
  className?: string;
}

const FullWidthContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className} style={{ width: "100%", minWidth: "stretch" }}>
    {children}
  </div>
);

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  imageUrl,
  className = "",
}) => (
  <div className={`relative overflow-hidden rounded-lg ${className}`}>
    <Image
      src={imageUrl}
      alt={title}
      width={500}
      height={160}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-[#d4b87b] px-3 py-1 rounded text-white font-medium flex items-center">
        {title}
        <span className="ml-2 text-white bg-white/20 rounded-full w-4 h-4 flex items-center justify-center text-xs">
          ⬤
        </span>
      </div>
    </div>
  </div>
);

const OurValues: React.FC = () => {
  return (
    <FullWidthContainer className="bg-[#f9f6f1] py-16">
      {" "}
      {/* Reduced padding here */}
      <FullWidthContainer className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          {" "}
          {/* Reduced margin here */}
          <h2 className="text-[#115e71] font-bold text-4xl md:text-5xl">
            Our Values
          </h2>
          <div className="w-10 h-1 bg-[#115e71] mx-auto my-3"></div>
          <div className="mt-6">
            {" "}
            {/* Reduced margin-top here */}
            <p className="text-2xl md:text-3xl font-light text-gray-600">
              Our success stands on many pillars.
            </p>
            <p className="mt-2 text-2xl md:text-3xl font-light text-gray-600">
              Here are 7 of them.
            </p>
          </div>
        </div>

        <FullWidthContainer className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <ValueCard
              title="TEAMWORK"
              imageUrl="/images/rutu-care/rutucares_teamwork.avif"
              className="h-40"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <ValueCard
              title="RESPECT"
              imageUrl="/images/rutu-care/rutucares_respect.avif"
              className="h-40"
            />
          </div>

          <div className="col-span-12 md:col-span-8">
            <ValueCard
              title="PROFESSIONALISM"
              imageUrl="/images/rutu-care/rutucares_professionalism.avif"
              className="h-40"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ValueCard
              title="PEOPLE FIRST"
              imageUrl="/images/rutu-care/rutucares_peoplefirst.avif"
              className="h-40"
            />
          </div>

          <div className="col-span-12 md:col-span-3">
            <ValueCard
              title="QUALITY"
              imageUrl="/images/rutu-care/rutucares_quality.avif"
              className="h-40"
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <ValueCard
              title="CUSTOMER RELATIONSHIP"
              imageUrl="/images/rutu-care/rutucares_customerrelationship.avif"
              className="h-40"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <ValueCard
              title="PURSUIT OF EXCELLENCE"
              imageUrl="/images/rutu-care/rutucares_pursuitofexcellence.avif"
              className="h-40"
            />
          </div>
        </FullWidthContainer>
      </FullWidthContainer>
    </FullWidthContainer>
  );
};

export default OurValues;

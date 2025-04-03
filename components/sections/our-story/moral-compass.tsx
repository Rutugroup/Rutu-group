import Image from "next/image";
import AnimatedImage from "../../ui/image-animation/AnimatedImage";

export default function MoralCompass() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Moral Compass Section */}
        <div className="mb-16 bg-stone-100 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#e1bc6a] mb-2">
                Our Moral Compass
              </h2>
              <div className="w-16 h-1 bg-[#e1bc6a] mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-700 mb-4">
                We feel responsible and duty-bound towards the Society, Nation,
                and Environment.
              </p>
            </div>

            {/* Adjusted Image Section for Mobile - Reduced padding and spacing */}
            <div className="w-full md:w-1/2 flex p-0 pb-2 md:p-8 justify-center items-center">
              <AnimatedImage
                src="/images/about/moral-sec.jpeg"
                alt="Moral Compass"
                width={400}
                height={150}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Who We Are Section - Background Image */}
        <div className="relative w-full overflow-hidden rounded-lg">
          {/* Desktop Background Image */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <Image
              src="/images/about/About-corporate-office-rutu.avif"
              alt="Corporate Office Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile Background Image */}
          <div className="md:hidden absolute inset-0 w-full h-full">
            <Image
              src="/images/about/About-corporate-office-mob.png"
              alt="Corporate Office Mobile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Overlay - Positioned in Upper Half */}
          <div className="relative z-10 flex flex-col md:flex-row bg-opacity-70 p-8 md:p-12">
            <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                What Makes Us Who We Are
              </h2>
              <div className="w-16 h-1 bg-gray-700 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Rutu Group has been a successful and innovative frontrunner in
                the real estate industry for More than 45 years.
              </p>
              <p className="text-gray-700 mb-4">
                Popularly known and celebrated for its innovative approach, Rutu
                Group has successfully completed over 45 housing projects across
                Mumbai, Thane, Kalyan & Ahmedabad, thus providing homes to more
                than 10,000 families across 10 million sq.ft.
              </p>
              {/* Remove last paragraph in mobile view */}
              <p className="hidden md:block text-gray-700 mb-4">
                We focus on meticulous planning and strategizing to ensure a
                timely delivery of high-quality projects that boast of amenities
                and strives to exceed our customer&apos;s expectations. Our
                achievements have been a testament to our dedication and
                collaborative efforts.
              </p>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

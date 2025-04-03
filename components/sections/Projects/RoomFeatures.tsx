import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FeatureCategory {
  name: string;
  features: string[];
}

interface RoomFeaturesProps {
  categories: FeatureCategory[];
}

const RoomFeatures: React.FC<RoomFeaturesProps> = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const initialVisibleItems = 3;

  return (
    <section className="py-24 bg-[#FFFBEC] relative">
      <div className="max-w-[90rem] mx-auto px-12 relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#115e71] mb-6 relative text-center">
          Apartment Amenities
        </h2>

        <div className="flex justify-center items-center mb-8 pb-4 md:pb-8">
          <div className="w-20 h-px bg-[#115e71]"></div>
          <div className="w-4 h-4 mx-2 border border-[#e1bc6a] rounded-full"></div>
          <div className="w-20 h-px bg-[#115e71]"></div>
        </div>

        {/* Wider columns for desktop (increased width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const isExpanded = expandedCategories[category.name] || false;
            const hasMoreItems = category.features.length > initialVisibleItems;

            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Centered Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-[#115e71] text-center border-b border-[#e1bc6a] pb-3">
                  {category.name}
                </h3>

                {/* Feature List */}
                <ul className="space-y-3 text-lg text-gray-700 pt-4">
                  {category.features
                    .slice(0, initialVisibleItems)
                    .map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#e1bc6a] mr-3 text-xl">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}

                  {isExpanded && (
                    <div className="mt-2">
                      {category.features
                        .slice(initialVisibleItems)
                        .map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#e1bc6a] mr-3 text-xl">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </div>
                  )}
                </ul>

                {/* View More/Less Button */}
                {hasMoreItems && (
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="text-[#e1bc6a] font-medium mt-4 flex items-center hover:underline focus:outline-none transition-all duration-300"
                  >
                    {isExpanded ? "View Less" : "View More"}
                    {isExpanded ? (
                      <ChevronUp className="ml-2 w-5 h-5" />
                    ) : (
                      <ChevronDown className="ml-2 w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomFeatures;

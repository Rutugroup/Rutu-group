import { useState } from "react";
// import Link from "next/link";
import { FileText, LayoutPanelTop } from "lucide-react";
import ContactForm from "../../ui/navigation/forms/ContactForm"; // Import the contact form

interface ProjectFloorPlanProps {
  brochurePdf: string;
  floorPlanPdf: string;
}

export default function ProjectFloorPlan({
  brochurePdf,
  floorPlanPdf,
}: ProjectFloorPlanProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLinkClick = () => {
    setIsFormVisible(true); // Show the contact form when the link is clicked
  };

  const handleFormSubmission = () => {
    setFormSubmitted(true); // Set form as submitted when the form is successfully submitted
    // Open the PDFs in new tabs after successful form submission
    window.open(brochurePdf, "_blank");
    window.open(floorPlanPdf, "_blank");
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Add text-center to center the Plan heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#115e71] mb-4 text-center">
          Plan
        </h2>
        {/* Title divider inspired by the image */}
        <div className="flex justify-center items-center mb-8 pb-4 md:pb-8">
          <div className="w-16 h-px bg-[#115e71]"></div>
          <div className="mx-2 w-2 h-2 bg-[#115e71] rounded-full"></div>
          <div className="w-3 h-3 mx-1 border border-[#e1bc6a] rounded-full"></div>
          <div className="mx-2 w-2 h-2 bg-[#115e71] rounded-full"></div>
          <div className="w-16 h-px bg-[#115e71]"></div>
        </div>

        {!formSubmitted ? (
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={handleLinkClick}
              className="flex items-center gap-3 px-6 py-3 border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <FileText className="text-[#e1bc6a]" size={30} />
              <span className="font-bold">View Brochure</span>
            </button>

            <button
              onClick={handleLinkClick}
              className="flex items-center gap-3 px-6 py-3 border border-amber-200 rounded-full hover:bg-amber-50 transition-colors"
            >
              <LayoutPanelTop className="text-[#e1bc6a]" size={30} />
              <span className="font-bold">Floor Plan</span>
            </button>
          </div>
        ) : null}

        {isFormVisible && !formSubmitted && (
          <ContactForm
            onSubmit={handleFormSubmission}
            setIsFormVisible={setIsFormVisible}
          />
        )}
      </div>
    </section>
  );
}

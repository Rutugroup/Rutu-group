import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactForm from "../../ui/navigation/forms/ContactForm";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleFormSubmit = () => {
    console.log("Form has been submitted.");
    handleModalClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md ${
          isScrolled ? "bg-black/10 backdrop-blur-xl" : "bg-black/60"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 px-8">
          {/* Left Section - Logo */}
          <div className="flex items-center p-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/rutu-logo.png"
                alt="Rutu Logo"
                width={400}
                height={200}
                className="h-[96px] w-auto object-contain !m-0 !p-0" // Remove all margins and padding
              />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-12 font-medium text-white text-lg">
              {[
                { label: "OUR STORY", href: "/our-story" },
                { label: "OUR IMPACT", href: "/our-impact" },
                { label: "OUR PROJECTS", href: "/projects" },
              ].map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-[#115e71]"
                  >
                    {item.label}
                  </Link>
                  <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#115e71] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Enquire Button */}
          <div className="ml-auto">
            <button
              onClick={handleModalOpen}
              className="transition-colors duration-300 hover:text-[#115e71] font-medium text-lg text-white"
            >
              ENQUIRE
            </button>
          </div>
        </nav>
      </header>

      {/* Modal with ContactForm */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if ((event.target as HTMLElement).classList.contains("fixed")) {
                handleModalClose();
              }
            }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { ease: "easeInOut", duration: 0.3 },
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                transition: { ease: "easeInOut", duration: 0.2 },
              }}
            >
              <button
                onClick={handleModalClose}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                <X className="h-6 w-6" />
              </button>
              <ContactForm
                onSubmit={handleFormSubmit}
                setIsFormVisible={setModalOpen}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

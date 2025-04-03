import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ContactForm from "../../ui/navigation/forms/ContactForm";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    if (isOpen || modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen, modalOpen]);

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/">
            <Image
              src="/images/rutu-logo-white.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-14 w-auto"
            />
          </Link>

          <button onClick={() => setIsOpen(true)} className="text-3xl">
            <Menu />
          </button>
        </nav>
      </header>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-60 visible" : "opacity-0 invisible"
        } z-40`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Full Width Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src="/images/rutu-logo-white.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-14 w-auto"
          />
          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <X />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="p-6 space-y-4 font-medium">
          {["Our Story", "Our Impact", "Our Projects", "Directors"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Our Projects"
                      ? "/projects"
                      : item === "Directors"
                      ? "/directors"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="block hover:text-brand-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Bottom Buttons */}
        <div className="absolute bottom-0 w-full p-4 border-t flex justify-around bg-white"></div>
      </div>

      {/* Modal with ContactForm */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
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
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
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
                onSubmit={handleModalClose}
                setIsFormVisible={setModalOpen}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer className="bg-[#FFFBEF] text-black py-8 md:px-8 px-4 mt-auto">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left side - Links columns */}
          <div className="flex flex-wrap md:w-2/3 mb-6 md:mb-0 md:pl-20">
            {/* First column of links */}
            <div className="w-1/2 md:w-auto md:mr-16 lg:mr-24">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/our-story"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-impact"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Our Impact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/projects"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    All Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second column of links */}
            <div className="w-1/2 md:w-auto">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/directors"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Directors
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/contact-us"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Contact Us
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/disclaimer"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Disclaimer
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/sitemap"
                    className="transition-colors duration-300 hover:text-[#e1bc6a] md:text-lg"
                  >
                    Sitemap
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Right side - Logo and social icons */}
          <div className="flex flex-col items-center md:items-center md:w-1/3">
            {/* Logo */}
            <div className="mb-4 md:mb-8">
              <Image
                src="/images/rutu-logo.png"
                alt="Rutu Group Logo"
                width={230}
                height={180}
                className="h-28 w-auto md:w-40"
                priority={true}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/200x160?text=Rutu+Since+1979";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                className="text-[#e7be5f] hover:text-[#e1bc6a] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                className="text-[#e7be5f] hover:text-[#e1bc6a] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              {/* <Link
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                className="text-[#e7be5f] hover:text-[#e1bc6a] transition-colors"
              >
                <X className="w-6 h-6" />
              </Link> */}
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                className="text-[#e7be5f] hover:text-[#e1bc6a] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                className="text-[#e7be5f] hover:text-[#e1bc6a] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider with dropdown button */}
        <div className="mt-8 border-t border-gray-300 relative flex justify-center">
          <div className="absolute top-[-12px]">
            <button
              className="bg-[#FFFBEF] px-2 text-black hover:text-[#e1bc6a] transition-all duration-300"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-menu"
            >
              {isDropdownOpen ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Section with smooth animation */}
        <div
          id="dropdown-menu"
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isDropdownOpen ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 flex flex-wrap justify-center">
            <div className="px-3 md:px-4 py-1">
              <Link
                href="/rutu-apartments"
                className="transition-colors duration-300 hover:text-[#e1bc6a]"
              >
                Rutu Apartments
              </Link>
            </div>
            <div className="px-3 md:px-4 py-1">
              <Link
                href="/rutu-city"
                className="transition-colors duration-300 hover:text-[#e1bc6a]"
              >
                Rutu City
              </Link>
            </div>
            <div className="px-3 md:px-4 py-1">
              <Link
                href="/rutu-heights"
                className="transition-colors duration-300 hover:text-[#e1bc6a]"
              >
                Rutu Heights
              </Link>
            </div>
            <div className="px-3 md:px-4 py-1">
              <Link
                href="/rutu-samruddhi"
                className="transition-colors duration-300 hover:text-[#e1bc6a]"
              >
                Rutu Samruddhi
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm">
          <p>Copyright © 2024 Rutu Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

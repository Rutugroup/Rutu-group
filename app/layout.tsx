"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { Cormorant_Garamond, Roboto } from "next/font/google";

// Import Navbar & Footer
import MainNav from "../components/ui/navigation/MainNav";
import MobileNav from "../components/ui/navigation/MobileNav";
import Footer from "../components/ui/navigation/Footer";

// Configure Google Fonts with next/font
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "700"], // Added weights for better heading control
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"], // More weights for paragraph and UI text
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-roboto">
        {/* Conditionally render navbar based on screen width */}
        {isMobile ? <MobileNav /> : <MainNav />}

        {/* Main Content starts below the navbar */}
        <main className={`flex-grow ${isMobile ? "" : "pt-8"} md:pt-12`}>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

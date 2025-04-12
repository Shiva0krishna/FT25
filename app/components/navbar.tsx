"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { Menu, X } from "lucide-react";
import { div, span } from "framer-motion/client";
import logo from "../../public/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
    className="fixed w-full z-40 backdrop-blur-md bg-[#003366]">
      <div className="max-w-8xl mx-auto px-5 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={logo.src}
            alt="FT-25 Logo"
            className="h-16 w-auto" // Increased height to 16
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="group flex items-center gap-2 text-white hover:text-[#FD7702] transition-colors relative"
          >
            <span className="relative">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FD7702] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </Link>
          <Link
            href="/about-us"
            className="group flex items-center gap-2 text-white hover:text-[#FD7702] transition-colors relative"
          >
            <span className="relative">
              About Us
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FD7702] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </Link>
          <Link
            href="/our-partners"
            className="group flex items-center gap-2 text-white hover:text-[#FD7702] transition-colors relative"
          >
            <span className="relative">
              Our Partners
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FD7702] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </Link>
          <Link
            href="/our-gallery"
            className="group flex items-center gap-2 text-white hover:text-[#FD7702] transition-colors relative"
          >
            <span className="relative">
              Our Gallery
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FD7702] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </Link>
          {/* <Link
            href="/race-with-us"
            className="group flex items-center gap-2 text-white hover:text-[#FD7702] transition-colors relative"
          >
            <span className="relative">
              Race with Us
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FD7702] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </Link> */}
          <Link
            href="/contact-us"
            className="group flex items-center gap-2 text-white hover:text-[#FD7702] transition-colors relative"
          >
            <span className="relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FD7702] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#FFF] hover:text-[#FD7702] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#003F7D] backdrop-blur-md absolute top-20 left-0 w-full z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-white hover:text-[#FFD700] transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white hover:text-[#FFD700] transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/our-partners"
              className="text-white hover:text-[#FFD700] transition-colors"
              onClick={toggleMenu}
            >
              Our Partners
            </Link>
            <Link
              href="/our-gallery"
              className="text-white hover:text-[#FFD700] transition-colors"
              onClick={toggleMenu}
            >
              Our Gallery
            </Link>
            {/* <Link
              href="/race-with-us"
              className="text-white hover:text-[#FFD700] transition-colors"
              onClick={toggleMenu}
            >
              Race with Us
            </Link> */}
            <Link
              href="/contact-us"
              className="text-white hover:text-[#FFD700] transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
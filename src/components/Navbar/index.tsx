"use client";

import { DM_Serif_Display } from "next/font/google";
import { useEffect, useState } from "react";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  //   variable: "--font-dm-serif-display",
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("gerak trus");
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-4 py-3 transition-all duration-300 z-50 w-full ${
        dmSerifDisplay.className
      } ${isScrolled ? "fixed top-0 shadow-lg backdrop-blur" : "fixed top-0"}`}
      style={{ fontWeight: "600" }}
    >
      <ul className={`flex space-x-10 py-1 px-3 justify-center`}>
        <li>
          <a
            href="#"
            className={`text-stone-500 ${
              isScrolled ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-stone-500 ${
              isScrolled ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Expertise
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-stone-500 ${
              isScrolled ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Work Experience
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-stone-500 ${
              isScrolled ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-stone-500 ${
              isScrolled ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-stone-500 ${
              isScrolled ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Certification
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

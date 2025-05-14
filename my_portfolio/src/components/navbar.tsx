"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled , setIsScrolled] = useState(false)

  

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(()=>
  {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  } , []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-3 transition-all duration-200 ${
        isScrolled ? "border-b border-white" : ""
      }`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold">My Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-foreground text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Button
            className="bg-white text-black hover:bg-white"
            onClick={() => window.open("/MyResume.pdf", "_blank")}
          >
            My Resume
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <MoreVertical className="w-6 h-6" />
          </button>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-sm hover:bg-yellow-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open("/MyResume.pdf", "_blank");
                }}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500"
              >
                My Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Applications", href: "#applications" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="primary">Get a Quote</Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <RiCloseLine className="h-6 w-6" />
          ) : (
            <RiMenu3Line className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-white shadow-md p-4 z-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

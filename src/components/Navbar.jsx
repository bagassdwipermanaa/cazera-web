import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div
          className={`flex justify-between items-center rounded-full px-3 py-1 transition-all duration-300 ${
            isScrolled
              ? "bg-black/30 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/LOGO CAZERA.png"
                alt="Cazera Society"
                className="h-10 w-auto mr-2"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
                style={{ display: "none" }}
              >
                Cazera Society
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/20"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/20"
                    : "text-white hover:bg-white/10"
                }`}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/20"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Products
              </Link>
              <Link
                to="/gallery"
                className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/20"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/20"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-white hover:bg-white/20"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div
              className={`px-4 py-4 rounded-2xl space-y-2 transition-all duration-300 ${
                isScrolled
                  ? "bg-black/30 backdrop-blur-md"
                  : "bg-black/20 backdrop-blur-sm"
              }`}
            >
              <Link
                to="/"
                className="block px-4 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className="block px-4 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

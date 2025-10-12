import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="shadow-lg sticky top-0 z-50"
      style={{ backgroundColor: "#212121" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/cazera images.png"
                alt="Cazera Society"
                className="h-16 w-auto mr-3"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="text-2xl font-bold text-white"
                style={{ display: "none" }}
              >
                Cazera Society
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-white hover:text-FF7E21 px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.target.style.color = "#FF7E21")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-FF7E21 px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.target.style.color = "#FF7E21")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-FF7E21 px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.target.style.color = "#FF7E21")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
              >
                Contact
              </Link>
              <Link
                to="/gallery"
                className="text-white hover:text-FF7E21 px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.target.style.color = "#FF7E21")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
              >
                Gallery
              </Link>

              {/* Media Partners Dropdown */}
              <div className="relative group">
                <button
                  className="px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  style={{ color: "#FFFFFF" }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF7E21")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  Media Partners
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Partner 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Partner 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Partner 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/gallery"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>

              {/* Media Partners Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium text-base mb-2">
                  Media Partners
                </div>
                <div className="pl-4 space-y-1">
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Partner 1
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Partner 2
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Partner 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import {NavLink} from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 backdrop-blur-md bg-white/80 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to={"/"} className="flex items-center">
            <div className="text-2xl sm:text-3xl text-[#1F2937] font-bold">
              ⚡ Future EV's
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-base text-gray-800">
            <li>
              <a 
                href="#features" 
                className="hover:text-gray-600 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#specs" 
                className="hover:text-gray-600 transition-colors"
              >
                Specs
              </a>
            </li>
            <li>
              <NavLink 
                to={'/pages/gallery'}
                className="hover:text-gray-600 transition-colors"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <NavLink to="/pages/save">
                <button className="hover:underline">
                  Save items
                </button>
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-3 font-semibold text-gray-700">
            <li>
              <a
                href="#features"
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#specs"
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Specs
              </a>
            </li>
            <li>
              <a
                href="/pages/gallery"
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <NavLink
                to={'/pages/save'}
                onClick={closeMenu}
                className="block mx-4"
              >
                <button className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Save items
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
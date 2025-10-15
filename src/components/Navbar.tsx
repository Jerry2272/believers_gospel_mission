import React, { useState } from "react";
import logo from '../assets/bgc_logo.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="fixed w-full z-[999] top-0">
        <div className="bg-red-700 text-white text-sm py-2">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="flex flex-wrap gap-4 items-center text-center md:text-left">
              <p className="flex items-center gap-1">
                Etiti/Ihite Rd, Isinweke, Ihite Uboma, Imo State, Nigeria.
              </p>
              <p className="flex items-center gap-1">
                Sunday Service: 9:00 AM
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-gray-200">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-200">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-200">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
            {/* Logo */}
            <a href="index.html" className="flex items-center">
              <img
                src={logo}
                alt="Church Logo"
                className="w-20 h-20 object-cover"
              />
              <span className="text-black uppercase leading-[1px] ml-2 font-semibold">
                Believers <br /> Gospel Mission
              </span>
            </a>

            {/* Navbar (Desktop) */}
            <nav
              className="hidden md:flex gap-4 items-center"
              aria-label="Primary Navigation"
            >
              <a className="nav-link text-black hover:text-red-700" href="/">
                Home
              </a>
              <a className="nav-link text-black hover:text-red-700" href="/about">
                About
              </a>
              <a className="nav-link text-black hover:text-red-700" href="ministries.html">
                Ministries
              </a>
              <a className="nav-link text-black hover:text-red-700" href="sermons.html">
                Sermons
              </a>
              <a className="nav-link text-black hover:text-red-700" href="events.html">
                Events
              </a>
              <a className="nav-link text-black hover:text-red-700" href="gallery.html">
                Gallery
              </a>
              <a className="nav-link text-black hover:text-red-700" href="blog.html">
                Article Of Faith
              </a>
              <a className="nav-link text-black hover:text-red-700" href="/leadership">
                Leadership
              </a>
              <a className="nav-link text-black hover:text-red-700" href="contact.html">
                Contact
              </a>

              {/* CTA */}
              <a
                href="giving.html"
                className="ml-4 bg-red-700   px-4 py-2 font-semibold hover:bg-red-800 transition duration-300"
                style={{color:  "white"}}
              >
                Give Online
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              id="menuBtn"
              aria-controls="mobileMenu"
              aria-expanded={isMenuOpen}
              className="md:hidden text-black text-2xl"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div id="mobileMenu" className="md:hidden bg-black text-white">
              <nav
                className="flex flex-col text-center py-4"
                aria-label="Mobile Navigation"
              >
                <a className="py-3 border-b border-white/10" href="index.html">
                  Home
                </a>
                <a className="py-3 border-b border-white/10" href="pages/about.html">
                  About
                </a>
                <a className="py-3 border-b border-white/10" href="ministries.html">
                  Ministries
                </a>
                <a className="py-3 border-b border-white/10" href="sermons.html">
                  Sermons
                </a>
                <a className="py-3 border-b border-white/10" href="events.html">
                  Events
                </a>
                <a className="py-3 border-b border-white/10" href="gallery.html">
                  Gallery
                </a>
                <a className="py-3 border-b border-white/10" href="blog.html">
                  Blog
                </a>
                <a className="py-3 border-b border-white/10" href="leadership.html">
                  Leadership
                </a>
                <a className="py-3 border-b border-white/10" href="contact.html">
                  Contact
                </a>
                <a className="py-3" href="giving.html">
                  Give Online
                </a>
              </nav>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;

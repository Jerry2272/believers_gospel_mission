import React, { useState } from "react";
import logo from "../assets/bgc_logo.png";
import { Link, NavLink } from "react-router";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const navLinks = [
    { id: 1, text: "Home", url: "/" },
    {
      id: 2,
      text: "About",
      dropdown: [
        { id: 1, link_text: "About Us", url: "/about" },
        { id: 2, link_text: "History", url: "/history" },
      ],
    },
    { id: 3, text: "Ministries", url: "/ministry" },
    { id: 4, text: "Sermons", url: "/sermons" },
    { id: 5, text: "Events", url: "/events" },
    { id: 6, text: "Gallery", url: "/gallery" },
    { id: 7, text: "Article Of Faith", url: "/aof" },
    { id: 8, text: "Leadership", url: "/leadership" },
    { id: 9, text: "Contact", url: "/contact" },
  ];

  return (
    <div className="fixed w-full z-[999] top-0">
      {/* Top Header */}
      <div className="bg-red-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex flex-wrap gap-4 items-center text-center md:text-left">
            <p>Etiti/Ihite Rd, Isinweke, Ihite Uboma, Imo State, Nigeria.</p>
            <p>Sunday Service: 9:00 AM</p>
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
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Church Logo"
              className="w-20 h-20 object-cover"
            />
            <span className="text-black uppercase leading-[10px] ml-2 font-semibold">
              Believers <br /> Gospel Mission
            </span>
          </NavLink>

          {/* Navbar (Desktop) */}
          <nav className="hidden md:flex gap-4 items-center relative">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div
                  key={item.id}
                  className="relative"
                 
                >
                  <button className="text-black hover:text-red-700 transition font-medium cursor-pointer" onClick={() => setOpenDropdown(!openDropdown)}>
                    {item.text}
                  </button>

                  {openDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-44 py-2 z-50">
                      {item.dropdown.map((drop) => (
                        <NavLink
                          key={drop.id}
                          to={drop.url}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setOpenDropdown(!openDropdown)
                          }}
                        >
                          {drop.link_text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.url}
                  className="text-black hover:text-red-700 font-medium transition"
                >
                  {item.text}
                </Link>
              )
            )}

            {/* CTA */}
            <Link
              to="/giving"
              className="ml-4 bg-red-700 px-4 py-2 font-semibold hover:bg-red-800 transition"
              style={{color: 'white'}}
            >
              Give Online
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white">
            <nav className="flex flex-col text-center py-4 space-y-2">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.id}>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="py-3 w-full hover:bg-white/10"
                    >
                      {item.text}
                    </button>
                    {openDropdown && (
                      <div className="flex flex-col bg-gray-800">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.id}
                            to={drop.url}
                            className="py-2 border-t border-white/10 hover:bg-white/10"
                          >
                            {drop.link_text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="py-3 border-b border-white/10 hover:bg-white/10"
                  >
                    {item.text}
                  </Link>
                )
              )}

              <Link
                to="/giving"
                className="py-3 bg-red-700 hover:bg-red-800 transition"
              >
                Give Online
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

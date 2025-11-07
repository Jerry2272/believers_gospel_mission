import React, { useState } from "react";
import logo from "../assets/bgm_logo.jpg";
import { Link, NavLink } from "react-router";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { id: 6, text: "Branches", url: "/branches" },
    { id: 7, text: "Article Of Faith", url: "/aof" },
    { id: 8, text: "Leadership", url: "/leadership" },
    { id: 9, text: "Contact", url: "/contact" },
  ];

  return (
    <div className="fixed w-full z-[999] top-0">
      <header className="bg-[#050505]/80 backdrop-blur-md shadow px-4">
        <div className="max-w-8xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center bg-[#050505]/60 backdrop-blur-md shadow px-4 gap-2"
          >
            <img
              src={logo}
              alt="Church Logo"
              className="w-16 lg:w-20 h-16 lg:h-20 object-cover"
            />
            <span className="uppercase text-2xl lg:text-4xl font-extrabold mb-1 leading-tight text-white">
              BGM
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center relative">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.id} className="relative">
                  <button
                    className="transition font-medium cursor-pointer text-white flex items-center hover:text-[#e41e26]"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.id ? false : item.id)
                    }
                  >
                    {item.text}
                    <FaChevronDown className="inline-block ml-1 text-sm" />
                  </button>

                  {openDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-44 py-2 z-50">
                      {item.dropdown.map((drop) => (
                        <NavLink
                          key={drop.id}
                          to={drop.url}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-[#050505] hover:bg-[#e41e26]/10 transition ${
                              isActive ? "text-[#e41e26] font-semibold" : ""
                            }`
                          }
                          onClick={() => setOpenDropdown(false)}
                        >
                          {drop.link_text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    `font-medium transition hover:text-[#e41e26] ${
                      isActive ? "text-[#e41e26]" : "text-white"
                    }`
                  }
                >
                  {item.text}
                </NavLink>
              )
            )}

            {/* CTA */}
            <Link
              to="/giving"
              className="ml-4 giving-btn bg-[#e41e26] text-white px-4 py-2 font-semibold transition hover:bg-[#c91a20]"
            >
              Give Online
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050505] backdrop-blur-lg p-5 space-y-4 border-t border-[#e41e26]/40">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.id}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.id ? false : item.id)
                  }
                  className="flex justify-between items-center w-full text-white font-medium"
                >
                  {item.text}
                  <FaChevronDown
                    className={`transform transition ${
                      openDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.id && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((drop) => (
                      <NavLink
                        key={drop.id}
                        to={drop.url}
                        className={({ isActive }) =>
                          `block text-gray-300 hover:text-[#e41e26] ${
                            isActive ? "text-[#e41e26]" : ""
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {drop.link_text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.id}
                to={item.url}
                className={({ isActive }) =>
                  `block text-white font-medium hover:text-[#e41e26] ${
                    isActive ? "text-[#e41e26]" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </NavLink>
            )
          )}

          <Link
            to="/giving"
            className="block w-full bg-[#e41e26] text-center text-white py-2 rounded-md font-semibold hover:bg-[#c91a20] transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Give Online
          </Link>
        </div>
      )}
    </div>
    
  );
};

export default Header;

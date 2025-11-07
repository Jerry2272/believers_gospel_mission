import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const navLinks = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "About", to: "/about" },
    { id: 3, text: "Ministries", to: "/ministry" },
    { id: 4, text: "Sermons", to: "/sermons" },
    { id: 5, text: "Events", to: "/events" },
    { id: 6, text: "Branches", to: "/branches" },
    { id: 7, text: "Article Of Faith", to: "/aof" },
    { id: 8, text: "Leadership", to: "/leadership" },
    { id: 9, text: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-[#050505] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold mb-4 text-lg text-[#e41e26]">
            Believers Gospel Mission
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Committed to preaching, discipling, equipping, and reaching out to
            the world with the Gospel of Jesus Christ. We enlist, disciple and
            deploy believers in Christ — for Christ and with joy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 text-lg text-[#e41e26]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  className="hover:text-white transition"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4 text-lg text-[#e41e26]">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#e41e26]" />
              <span>
                Etiti/Ihite Rd, Isinweke, Ihite Uboma, Imo State, Nigeria
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#e41e26]" />
              <a
                href="mailto:info@bgmchurch.com"
                className="hover:text-white transition"
              >
                info@bgmchurch.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#e41e26]" />
              <a href="tel:+2341234567890" className="hover:text-white transition">
                +234 123 456 7890
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold mb-4 text-lg text-[#e41e26]">Follow Us</h3>
          <p className="text-gray-300 text-sm mb-4">
            Stay connected for updates, live sermons, and events.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Believers Gospel Mission on Facebook"
              className="p-3 bg-[#111] rounded-full hover:bg-[#e41e26] transition text-gray-300 hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Believers Gospel Mission on Twitter"
              className="p-3 bg-[#111] rounded-full hover:bg-[#e41e26] transition text-gray-300 hover:text-white"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Believers Gospel Mission on Instagram"
              className="p-3 bg-[#111] rounded-full hover:bg-[#e41e26] transition text-gray-300 hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Believers Gospel Mission on YouTube"
              className="p-3 bg-[#111] rounded-full hover:bg-[#e41e26] transition text-gray-300 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Believers Gospel Mission. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer; 

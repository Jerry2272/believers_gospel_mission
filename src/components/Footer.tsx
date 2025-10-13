import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Believers Gospel Mission</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Committed to preaching, discipling, equipping, and reaching out to
            the world with the Gospel of Jesus Christ.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/ministries" className="hover:text-white transition">
                Ministries
              </a>
            </li>
            <li>
              <a href="/sermons" className="hover:text-white transition">
                Sermons
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white transition">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              Etiti/Ihite Rd, Isinweke, Ihite Uboma, Imo State, Nigeria
            </li>
            <li>Email: info@bgmchurch.com</li>
            <li>Phone: +234 123 456 7890</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white transition">
              {/* <FaFacebookF /> */}
              facebook
            </a>
            <a href="#" className="hover:text-white transition">
              {/* <FaTwitter /> */}
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              {/* <FaInstagram /> */}
              instagram
            </a>
            <a href="#" className="hover:text-white transition">
              {/* <FaYoutube /> */}
              youtube
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 text-sm border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Believers Gospel Mission. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

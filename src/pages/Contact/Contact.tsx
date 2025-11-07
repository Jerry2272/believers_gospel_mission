import React from "react";
import contactBg from "../../../src/assets/contact_hero.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <section className="text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-end justify-start text-left px-4 sm:px-6 lg:px-16 pb-10 sm:pb-16"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#000]/50"></div>

        <div className="relative z-10 w-full text-white">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-3 tracking-wide">
            CONNECT WITH US.
          </h1>
          <p className="max-w-xl text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
            We’d love to hear from you — whether it’s a prayer request,
            testimony, or general inquiry.
          </p>
        </div>
      </div>

      {/* ===== CONTACT INFO + FORM ===== */}
      <div className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-6 grid md:grid-cols-2 items-start gap-12">
        {/* ===== LEFT: CONTACT INFO ===== */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 text-[#e41e26]">
            How to <br className="hidden sm:block" /> Locate Us
          </h2>

          <p className="text-xl sm:text-2xl text-[#050505] mb-2 font-bold">
            Our Headquarters Address
          </p>
          <p className="text-[#e41e26] mb-6 font-bold text-lg sm:text-xl leading-relaxed">
            Etiti/Ihite Rd, Isinweke, Ihite Uboma, <br />
            Imo State, Nigeria.
          </p>

          <div className="mb-6 space-y-2">
            <p className="text-[#050505] text-base sm:text-lg">
              <span className="font-semibold">Phone:</span> +234 800 123 4567
            </p>
            <p className="text-[#050505] text-base sm:text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:believersgospelmission@gmail.com"
                className="underline hover:text-[#e41e26]"
              >
                believersgospelmission@gmail.com
              </a>
            </p>
          </div>

          <a
            href="/branches"
            className="inline-block text-[#050505] text-base sm:text-lg font-bold border-l-4 border-[#e41e26] pl-2 mt-4 hover:text-[#e41e26] transition-colors"
          >
            View all our branches →
          </a>

          {/* ===== SOCIAL LINKS ===== */}
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#050505] hover:text-[#e41e26] transition text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#050505] hover:text-[#e41e26] transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#050505] hover:text-[#e41e26] transition text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ===== RIGHT: CONTACT FORM ===== */}
        <div className="p-6 sm:p-8 bg-[#f9f9f9] rounded-lg shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#e41e26] uppercase">
            Send Us a Message
          </h2>
          <p className="text-[#050505] mb-6 text-base sm:text-lg">
            Fill out the form below, and our team will get back to you shortly.
          </p>

          <form className="space-y-6">
            <div>
              <label className="text-[#050505] text-base sm:text-lg font-semibold block mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-[#ccc] text-[#050505] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e41e26]"
              />
            </div>

            <div>
              <label className="text-[#050505] text-base sm:text-lg font-semibold block mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-[#ccc] text-[#050505] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e41e26]"
              />
            </div>

            <div>
              <label className="text-[#050505] text-base sm:text-lg font-semibold block mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-[#ccc] text-[#050505] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e41e26]"
              />
            </div>

            <div>
              <label className="text-[#050505] text-base sm:text-lg font-semibold block mb-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 border border-[#ccc] text-[#050505] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e41e26]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e41e26] hover:bg-[#c91921] text-white px-6 py-3 w-full sm:w-auto font-semibold rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#e41e26] uppercase">
          Locate Our Headquarters
        </h2>
        <p className="mt-2 text-gray-700 text-base sm:text-lg">
          You can find us easily using the map below.
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto h-[300px] sm:h-[420px] mb-6 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31765.23942169734!2d7.329210830390527!3d5.617864387721329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042e3e1b316e45d%3A0xc8df071739be6708!2sIhitte-Uboma%2C%20Imo!5e0!3m2!1sen!2sng!4v1760628071977!5m2!1sen!2sng"
          className="w-full h-full border-0 rounded-md"
          loading="lazy"
          title="Church Map Location"
        ></iframe>
      </div>
    </section>
  );
};

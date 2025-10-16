import React from "react";
import contactBg from "../../../src/assets/bgc_logo.png"; // Replace with your banner image
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <section className="text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 leading-relaxed text-lg">
            We’d love to hear from you — whether it’s a prayer request,
            testimony, or general inquiry.
          </p>
        </div>
      </div>

      {/* ===== CONTACT INFO + FORM ===== */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 items-center gap-10">
        {/* ===== LEFT: CONTACT INFO ===== */}
        <div>
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            How to Locate Us
          </h2>
          <p className="text-lg text-gray-700 mb-2 font-medium">
            Our Headquarters Address
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Etiti/Ihite Rd, Isinweke, Ihite Uboma, <br />
            Imo State, Nigeria.
          </p>

          <div className="text-gray-700 mb-6 space-y-1">
            <p>
              <strong>Phone:</strong> +234 800 123 4567
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:believersgospelmission@gmail.com"
                className="text-red-700 hover:underline"
              >
                believersgospelmission@gmail.com
              </a>
            </p>
          </div>

          <a
            href="/branches"
            className="inline-block text-red-700 font-bold hover:underline"
          >
            View all our branches →
          </a>

          {/* ===== SOCIAL LINKS ===== */}
          <div className="flex items-center gap-10 mt-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:text-blue-600 transition-colors text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:text-pink-500 transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:text-red-500 transition-colors text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ===== RIGHT: CONTACT FORM ===== */}
        <div className="bg-black/80 shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Send Us a Message
          </h2>
          <p className="text-white/70 mb-8">
            Fill out the form below, and our team will get back to you shortly.
          </p>

          <form className="space-y-5 ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-red-700 text-white py-3 px-8  hover:bg-blue-800 transition-all font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-900">Locate Our Headquarters</h2>
        <p className="text-gray-600 mt-2">
          You can find us easily using the map below.
        </p>
      </div>

      <div className="w-full h-[420px]">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8131097153844!2d7.4561!3d5.6674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042d9a9c2bbd1f7%3A0x1a2a33e6b8f03cf2!2sIhite%20Uboma%2C%20Imo!5e0!3m2!1sen!2sng!4v1712523600000!5m2!1sen!2sng"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Church Map Location"
        ></iframe> */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31765.23942169734!2d7.329210830390527!3d5.617864387721329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042e3e1b316e45d%3A0xc8df071739be6708!2sIhitte-Uboma%2C%20Imo!5e0!3m2!1sen!2sng!4v1760628071977!5m2!1sen!2sng"  className="w-full h-full border-0" width="600" height="450" style={{border:'0'}}  loading="lazy"  ></iframe>
      </div>
    </section>
  );
};

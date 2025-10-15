import React from "react";
import get_involved from '../../../assets/hero_banner.jpg';

const Donation_involvement_section: React.FC = () => {
  return (
    <section className="flex flex-wrap items-stretch justify-center lg:px-[75px] px-10 py-16 bg-white">
      {/* Left: Give Donations */}
      <div className="flex-1 min-w-[300px] bg-black/80 text-white p-8 lg:p-10 flex flex-col justify-center shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Give Donations</h2>
        <p className="text-gray-300 leading-relaxed mb-4 italic">
          You have two hands. One to help yourself, <br /> the second to help others.
        </p>
        <div>
          <a
            href="/donate.html"
            className="bg-red-700 text-white px-6 py-2 font-semibold hover:bg-red-800 transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Right: Join the Mission */}
      <div
        className="flex-1 min-w-[300px] bg-white text-white p-8 lg:p-10 flex flex-col justify-center shadow-lg text-center relative"
        style={{ background: `url(${get_involved}) center/cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Join the Mission</h2>
          <p className="text-gray-200 leading-relaxed mb-4 italic">
            Together, we can reach more souls and transform more lives.
          </p>
          <div>
            <a
              href="/join.html"
              className="bg-red-700 text-white px-6 py-2 font-semibold hover:bg-red-800 transition duration-300"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation_involvement_section;

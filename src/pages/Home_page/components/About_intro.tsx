import React from "react";
import about_banner from '../../../assets/about_banner_church_view.jpg'

const About_into: React.FC = () => {
  return (
    <section className="flex flex-wrap items-stretch justify-center lg:px-[75px] px-10 py-16 bg-white">
      {/* Image Section */}
      <div className="flex-1 min-w-[300px] max-w-[500px]">
        <img
          src={about_banner}
          alt="Believers Gospel Mission"
          className="w-full object-cover shadow-lg  h-[600px]" />        
      </div>

      {/* Text Section */}
      <div className="flex-1 min-w-[300px] bg-black/80 text-white p-8 lg:p-10 flex flex-col justify-center shadow-lg">
        <h2 className="text-3xl lg:text-3xl font-bold mb-6">
          About Believers Gospel Mission
        </h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          Believers Gospel Mission is a Christ-centered ministry committed to
          reaching the unreached with the message of salvation and raising true
          disciples of Jesus Christ.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Founded on the conviction that every soul matters to God, we are
          dedicated to preaching the Gospel in villages, cities, and nations —
          transforming lives through the power of God’s Word and the ministry of
          the Holy Spirit.
        </p>

        <div>
          <a
            href="/pages/about.html"
            className="bg-red-700 text-white px-6 py-2 font-semibold hover:bg-red-800 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About_into;

import React from "react";
import about_banner from '../../../assets/sermon-banner.jpg'

const About_into: React.FC = () => {
  return (
    <section className="flex flex-wrap items-stretch justify-center lg:px-[105px] px-4 py-16 bg-[#e41e26]/10"
    >
      {/* Image Section */}
      <div className="flex-1 min-w-[300px] max-w-[500px]">
        <img
          src={about_banner}
          alt="Believers Gospel Mission"
          className="w-full object-cover lg:rounded-full   lg:h-[600px] h-[400px]" />        
      </div>

      {/* Text Section */}
      <div className="flex-1 min-w-[300px] max-w-[560px] text-white p-8 lg:p-10 flex flex-col justify-center  ">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#050505]">
          About Believers Gospel Mission(BGM)
        </h2>

        <p className="text-[#050505] leading-relaxed mb-4">
          Believers Gospel Mission is a Christ-centered ministry committed to
          reaching the unreached with the message of salvation and raising true
          disciples of Jesus Christ.
        </p>

        <p className="text-[#050505] leading-relaxed mb-8">
          Founded on the conviction that every soul matters to God, we are
          dedicated to preaching the Gospel in villages, cities, and nations —
          transforming lives through the power of God’s Word and the ministry of
          the Holy Spirit.
        </p>

        <div>
          <a
            href="/about"
            className="bg-[#e41e26] text-white px-6 py-3 font-semibold ` transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About_into;

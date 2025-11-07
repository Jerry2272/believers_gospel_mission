import React from "react";
import donate from "../../../assets/donate.jpg";

const Donation_involvement_section: React.FC = () => {
  return (
    <section className="flex flex-wrap items-stretch justify-center overflow-hidden my-20">
      {/* Left: Give Donations */}
      <div className="flex-1 min-w-[320px] text-white p-10 lg:p-16 flex flex-col justify-center items-center text-center relative"
       style={{
          background: `linear-gradient(rgba(5,5,5,0.75), rgba(5,5,5,0.75)), url(${donate}) center/cover no-repeat`,
          backgroundAttachment: "fixed",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      > 
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-black"
          
          >
            Give <span className="text-[#e41e26]">Donations</span>
          </h2>
          <p className="text-white/80 leading-relaxed mb-8 text-lg italic">
            You have two hands — one to help yourself, <br /> the second to help others.
          </p>

          <a
            href="/giving"
            className="inline-block bg-[#050505] hover:bg-black text-white font-semibold px-8 py-3  shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            Donate Now
          </a>
        </div>

        {/* Subtle accent pattern */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-br-3xl"></div>
      </div>

      {/* Right: Join the Mission */}
      <div
        className="flex-1 min-w-[320px] bg-[#e41e26]  text-white p-10 lg:p-16 flex flex-col justify-center items-center text-center relative"
       
      >
        <div className="max-w-md relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Join the <span className="text-[#e41e26]">Mission</span>
          </h2>
          <p className="text-gray-200 leading-relaxed mb-8 text-lg italic">
            Together, we can reach more souls and transform more lives through Christ’s love.
          </p>

          <a
            href="/join.html"
            className="inline-block bg-[#050505]  text-white font-semibold px-8 py-3  shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            Get Involved
          </a>
        </div>

        {/* Accent element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#1e5254]/20 rounded-tl-3xl"></div>
      </div>
    </section>
  );
};

export default Donation_involvement_section;

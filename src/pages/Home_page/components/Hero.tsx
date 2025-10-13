import React from "react";
import hero_banner from '../../../assets/hero_banner.jpg'

const Hero_section: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-cover bg-center text-white h-screen flex flex-col space-y-5 items-center justify-center text-center px-4 relative pt-[160px] lg:mt-[9em] lg:mx-[66px]"
      style={{ background:`radial-gradient(rgba(0,0,0,0.30), black) , url(${hero_banner})` , backgroundPosition: 'bottom', backgroundSize: 'cover'}}
    >
      <div className=" p-8 flex justify-center items-center flex-col absolute inset-0">
        <h1 className="text-3xl md:text-5xl font-[500] mb-4 leading-snug">
          WELCOME TO BELIEVERS GOSPEL <br /> MISSION CHURCH
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Sending out missionaries to areas where{" "}
          <br className="hidden lg:block md:block" /> the impact of the gospel is lacking
        </p>
        <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 font-semibold transition duration-300">
          Join Us Live Stream Every Sunday
        </button>
      </div>
    </section>
  );
};

export default Hero_section;

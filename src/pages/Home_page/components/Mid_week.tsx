import React from "react";
import mid_week_banner from "../../../assets/sermon-message.jpg";

const Mid_week_section: React.FC = () => {
  return (
    <section
      className="py-24 bg-cover bg-center text-center relative my-16 px-4 mx-6 rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(rgba(5,5,5,0.7), rgba(5,5,5,0.8)), url(${mid_week_banner})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
         Weekly Activities
        </h2>
        {/* <h3 className="text-2xl md:text-3xl text-[#e41e26] font-semibold mb-6">
          Midweek Services
        </h3> */}

        <p className="text-lg md:text-xl mb-2 text-white/50 leading-relaxed">
          Join us on our weekly activities as <br /> we delve deep into God’s Word together and grow in faith.
        </p>
        <ul style={{listStyle: 'inside'}} className="mb-4">
          <li className="text-white text-xl font-semibold">Sunday(8am - 10:30am)</li>
          <li className="text-white text-xl font-semibold">Tuesday(Bible Study from 5:30pm - 7:30pm)</li>
          <li className="text-white text-xl font-semibold">Thursday( miracle hour from 5:30pm – 7:30pm)</li>
        </ul>

        <a
          href="/pages/sermons.html"
          className="inline-block bg-[#e41e26]  text-white font-semibold px-10 py-3  shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          Find Out More
        </a>
      </div>
    </section>
  );
};

export default Mid_week_section;

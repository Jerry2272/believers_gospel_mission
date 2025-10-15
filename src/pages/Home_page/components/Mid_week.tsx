import React from "react";
import mid_week_banner from '../../../assets/mid_week_banner.jpg'

const Mid_week_section: React.FC = () => {
  return (
      <section
      className="py-20 bg-cover bg-center text-center relative my-16 px-4"
      style={{ background: `radial-gradient(rgba(0,0,0,0.65) , black) , url(${mid_week_banner})`, backgroundAttachment: 'fixed' }}
    > 

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Summer Sermon
        </h2>
        <h3 className="text-2xl md:text-3xl text-white/80 font-semibold mb-4">
          Midweek Bible Study
        </h3>
        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          Join us every Wednesday from <strong>4:00 PM – 6:00 PM</strong> <br />
          as we dive deep into God’s Word together.
        </p>

        <a
          href="/pages/sermons.html"
          className="inline-block bg-red-800 hover:bg-red-800 text-white font-semibold px-8 py-3  transition duration-300"
        >
          Find Out More
        </a>
      </div>
    </section>
  );
};

export default Mid_week_section;

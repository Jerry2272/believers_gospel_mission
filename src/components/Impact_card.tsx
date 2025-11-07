import React from "react";
// import wrapper_banner from "../assets/about_banner_church_view.jpg";
import img from '../assets/contact_hero.jpg'

const Impact_card: React.FC = () => {
  const stats = [
    {
      number: "50+",
      label: "Branches Nationwide",
    },
    {
      number: "1000s",
      label: "Lives Transformed",
    },
    {
      number: "50+",
      label: "Years of Ministry",
    },
    {
      number: "1000+",
      label: "Mission Fields Reached",
    },
    {
      number: "500+",
      label: "Pastors Trained",
    },
    {
      number: "Countless",
      label: "Souls Won for Christ",
    },
  ];

  return (
     <section
      className="py-20 bg-cover bg-center text-center relative mb-16 px-4">
     

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#050505]">
          God’s Faithfulness in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 ">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-black/20   py-10 px-6 transition hover:bg-white/20"

              style={{background: `url(${img})`}}
            >
              <h3 className="text-2xl lg:text-4xl font-bold text-[#fff] mb-2">
                {item.number}
              </h3>
              <p className="text-white font-medium text-[15px] lg:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact_card;

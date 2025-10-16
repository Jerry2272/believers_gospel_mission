import React from "react";
import wrapper_banner from "../assets/about_banner_church_view.jpg";

const Impact_card: React.FC = () => {
  const stats = [
    {
      number: "56+",
      label: "Branches Nationwide",
    },
    {
      number: "1000s",
      label: "Lives Transformed",
    },
    {
      number: "20+",
      label: "Years of Ministry",
    },
    {
      number: "10+",
      label: "Mission Fields Reached",
    },
    {
      number: "500+",
      label: "Ministers Trained",
    },
    {
      number: "Countless",
      label: "Souls Won for Christ",
    },
  ];

  return (
     <section
      className="py-20 bg-cover bg-center text-center relative my-16 px-4"
      style={{
        background: `radial-gradient(rgba(0,0,0,0.65), black), url(${wrapper_banner})`,
        backgroundAttachment: "fixed",
      }}>
     

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          God’s Faithfulness in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/20   py-10 px-6 transition hover:bg-white/20"
            >
              <h3 className="text-2xl lg:text-4xl font-bold text-red-600 mb-2">
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

import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import hero_banner from "../../assets/contact_hero.jpg";

export const About: React.FC = () => {
  const sections = [
    {
      id: 1,
      title: "Vision Statement",
      content:
        "Unreached people in Nigeria and abroad will be transformed by the Gospel message and discipled in their new faith.",
      image: hero_banner,
      reverse: false,
      type: "text",
    },
    {
      id: 2,
      title: "Our Mandate",
      content:
        "For over 45 years, our mandate in Believers Gospel Mission has remained unwavering — to preach Christ, make disciples, and build communities through God’s Word and love.",
      image: hero_banner,
      reverse: true,
      type: "text",
    },
    {
      id: 3,
      title: "Mission Statement",
      content: [
        "Preach the Gospel of Jesus Christ in villages, cities, and nations to win souls for Him.",
        "Plant churches and disciple believers in the faith.",
        "Equip ministers spiritually and economically for effective service.",
        "Organize conferences and seminars for youths, teenagers, and children.",
        "Send missionaries to unreached areas.",
        "Provide care for widows, orphans, prisoners, and the less privileged.",
        "Establish schools, hospitals, and social projects to enhance lives for God’s glory.",
      ],
      image: hero_banner,
      reverse: false,
      type: "list",
    },
  ];

  return (
    <section className="bg-[#050505]/80 text-white">
      {/* Hero Section */}
      <Hero_section_component
        title="ABOUT BELIEVERS GOSPEL MISSION"
        description="Believers Gospel Mission is a Christ-centered ministry dedicated to preaching the Gospel, making disciples, and equipping believers to fulfill God’s purpose for their lives. For over four decades, we’ve been reaching villages, cities, and nations — transforming lives through the power of God’s Word and the Holy Spirit."
        hero_banner={hero_banner}
        className="h-[80vh] pt-4em"
      />

      {/* Content Sections */}
      <article className="py-24 px-6 lg:px-[90px] space-y-24">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col ${
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-between gap-10 lg:gap-20`}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {/* Image Side */}
            <div className="relative lg:w-1/2 w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent"></div>
              {/* <h3 className="absolute bottom-6 left-6 text-2xl md:text-3xl font-bold tracking-wide text-[#fff]">
                {section.title} 
              </h3>*/}
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 w-full text-gray-300 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#fff]">
                {section.title}
              </h2>

              {section.type === "text" && (
                <p className="text-lg md:text-xl text-gray-200">{section.content as string}</p>
              )}

              {section.type === "list" && Array.isArray(section.content) && (
                <ul className="text-gray-200 text-lg space-y-3 list-disc pl-6">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

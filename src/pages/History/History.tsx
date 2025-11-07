import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import hero_banner from "../../assets/hero_banner.jpg";
import persons_img1 from "../../assets/rev_amos.png";
import history_banner from "../../assets/envangelism.jpg";

interface HistorySection {
  id: number;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  persons?: { name: string; title: string; image?: string }[];
}

export const History: React.FC = () => {
  const historySections: HistorySection[] = [
    {
      id: 1,
      title: "The Beginning of Fellowship",
      subtitle: "How the fellowship was birthed and its initial purpose.",
      paragraphs: [
        "Believers Gospel Mission started as an evangelistic movement whose root was from the Scripture Union. This was when some Christians, immediately after the Nigerian Civil War that ended on 12th January, 1970, began spreading the gospel in the then Old Etiti, in Imo State.",
        "The movement was championed by Late Bishop Amos Nwokenna, who at that time was only a Christian brother. Many people gave their lives to Jesus — boys, girls, men, women, and children. Because of their tireless passion, the gospel spread from marketplaces to schools and village squares, breaking idols, shrines, and charms. It was indeed a gospel revolution across Etiti and its environs.",
        "Bishop Amos Nwokenna once said, “We never thought of starting a church, because we were all in our different denominations. But every Sunday afternoon, after our various church services, we all came together and had fellowship.”",
        "As more people joined the fellowship, they faced severe persecution from denominational groups who accused them of spreading strange doctrines — especially concerning the baptism of the Holy Spirit. Yet, they stood firm, filled with the Holy Ghost, speaking with new tongues, and witnessing mighty signs and wonders.",
      ],
      persons: [
        {
          image: persons_img1,
          name: "Late Bishop Amos Nwokenna",
          title: "Founder, Believers Gospel Mission",
        },
      ],
    },
    {
      id: 2,
      title: "The Birth of Believers Gospel Mission",
      subtitle: "How the name and ministry structure officially began.",
      paragraphs: [
        "Because of growing persecution, all the new converts came together and formed a fellowship known as Believers Fellowship Group.",
        "Later in 1984, the fellowship evolved into a ministry and was renamed Believers Gospel Mission.",
        "From then, the work expanded rapidly across Nigeria and beyond — preaching salvation, holiness, and the power of the Holy Spirit.",
      ],
    },
    {
      id: 3,
      title: "The Legacy of Bishop Amos Nwokenna",
      subtitle: "Honoring the founder’s life and lasting impact.",
      paragraphs: [
        "In September 1998, Bishop Amos Nwokenna passed into glory at the age of 74, after helping the ministry grow to over 56 branches nationwide, with evangelistic and mission operations around the world.",
        "He was laid to rest on 30th December, 1998, at the National Headquarters where the ministry began. Thousands came from around the world to honor him as a gallant soldier of Christ and one of the fathers of Pentecostalism in Nigeria.",
      ],
    },
    {
      id: 4,
      title: "The Continuation of the Vision",
      subtitle: "The ongoing work of the mission under godly leadership.",
      paragraphs: [
        "After Bishop Amos’ glorious departure, his deputy — Rev. Dr. David Nwachukwu — took over leadership of the ministry.",
        "Having worked closely with the Bishop for over 45 years, Rev. Dr. David continues to advance the vision with wisdom, humility, and passion for souls.",
        "Today, Believers Gospel Mission continues to expand, holding fast to the legacy of holiness, forgiveness, and evangelism — the core values upon which it was founded.",
      ],
      persons: [
        {
          name: "Rev. Dr. David Nwachukwu",
          title: "General Overseer, Believers Gospel Mission",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero_section_component
        title="Our History"
        description="Believers Gospel Mission started as an evangelistic movement whose root was from the Scripture Union. After the Nigerian Civil War that ended on 12th January, 1970, some Christians began spreading the gospel in the then Old Etiti, Imo State — sparking a revival that birthed this great ministry."
        hero_banner={hero_banner}
        className="h-[80vh] py-12"
      />

      {/* History Sections */}
      {historySections.map((section, index) => (
        <section
          key={section.id}
          className={`relative bg-fixed bg-cover bg-center py-20 px-6 ${
            index % 2 === 0 ? "mx-6 md:mx-12 lg:mx-20 my-12" : "my-12"
          }`}
          style={{
            backgroundImage: `url(${history_banner})`,
          }}
        >
          {/* Overlay Blur */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          <div className="relative max-w-6xl mx-auto text-white text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              {section.title}
            </h2>
            {section.subtitle && (
              <h6 className="text-gray-300 italic">{section.subtitle}</h6>
            )}

            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed">
                {p}
              </p>
            ))}

            {/* People Mentioned */}
            {section.persons && (
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-10">
                {section.persons.map((person, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md  mx-auto py-8 px-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    {person.image ? (
                    <div className="flex justify-center items-center">
                        <img
                        src={person.image}
                        alt={person.name}
                        className="w-40 h-40 object-cover mx-auto rounded-full mb-4 border-2 border-white/30"
                      />
                    </div>
                    ) : (
                      <div className="w-24 h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white text-2xl font-bold border-2 border-white/20 mb-4">
                        {person.name[0]}
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-red-500">
                      {person.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{person.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section
        className="relative bg-fixed bg-cover bg-center py-20 px-6"
        style={{
          backgroundImage: `url(${hero_banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto text-white">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {[
              { number: "56+", text: "Branches Nationwide" },
              { number: "1000s", text: "Lives Transformed" },
              { number: "30+", text: "Years of Impact" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl py-8 px-4 border border-white/20 shadow-lg"
              >
                <h2 className="text-4xl font-bold text-red-500">
                  {stat.number}
                </h2>
                <p className="text-gray-200 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

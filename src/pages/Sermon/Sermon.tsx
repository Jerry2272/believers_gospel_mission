import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import hero_banner from "../../assets/about_banner_church_view.jpg";
import sermon1 from "../../assets/about_banner_church_view.jpg";
import sermon2 from "../../assets/about_banner_church_view.jpg";
import sermon3 from "../../assets/about_banner_church_view.jpg";
import sermon4 from "../../assets/about_banner_church_view.jpg";

export const Sermon: React.FC = () => {
  const sermons = [
    {
      id: 1,
      title: "Walking in the Light of God’s Word",
      preacher: "Pastor Marcus D. Andrews",
      date: "October 13, 2025",
      img: sermon1,
      link: "https://youtube.com",
    },
    {
      id: 2,
      title: "Faith That Moves Mountains",
      preacher: "Pastor Ruth Eze",
      date: "October 6, 2025",
      img: sermon2,
      link: "https://youtube.com",
    },
    {
      id: 3,
      title: "The Power of Consistent Prayer",
      preacher: "Rev. Chike Obi",
      date: "September 29, 2025",
      img: sermon3,
      link: "https://youtube.com",
    },
    {
      id: 4,
      title: "Living a Purpose-Driven Life",
      preacher: "Pastor Jane Okafor",
      date: "September 22, 2025",
      img: sermon4,
      link: "https://youtube.com",
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Hero_section_component
        title="Sermons & Messages"
        hero_banner={hero_banner}
        description="Be blessed and inspired by powerful messages from our ministers — building your faith through the Word of God."
        className="h-[300px]"
      />

      {/* ===== SERMONS SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl font-bold text-gray-900">Recent Sermons</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Catch up with our latest messages and teachings that will uplift
            your spirit and strengthen your walk with God.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white shadow-md  overflow-hidden group transition-all hover:shadow-lg"
            >
              <div className="h-56 w-full bg-gray-200 relative">
                <img
                  src={sermon.img}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {sermon.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {sermon.preacher}
                </p>
                <p className="text-gray-400 text-sm mb-5">{sermon.date}</p>
                <a
                  href={sermon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 text-white px-5 py-2  hover:bg-blue-800 transition-colors"
                >
                  Watch Sermon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-4">
            Want more messages and teachings?
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-3  font-medium hover:bg-gray-800 transition-all"
          >
            Visit Our YouTube Channel →
          </a>
        </div>
      </section>
    </>
  );
};

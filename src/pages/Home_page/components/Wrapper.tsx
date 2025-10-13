import React from "react";
import wrapper_banner from '../../../assets/about_banner_church_view.jpg'

const MissionSection: React.FC = () => {
  const missions = [
    {
      icon: "fa-solid fa-book-bible",
      title: "Preach",
      description:
        "We proclaim the gospel of our Lord Jesus Christ across cities, villages, and nations to win souls for Him.",
    },
    {
      icon: "fa-solid fa-users-line",
      title: "Disciple",
      description:
        "We plant churches and nurture believers to grow spiritually and serve God faithfully in their callings.",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Equip",
      description:
        "We prepare and train ministers through workshops, conferences, and leadership development programs.",
    },
    {
      icon: "fa-solid fa-hand-holding-heart",
      title: "Reach Out",
      description:
        "We meet the needs of widows, the poor, and the less privileged — showing God’s love in practical ways.",
    },
  ];

  return (
    <section
      className="py-20 bg-cover bg-center text-center relative my-16 px-4"
      style={{ background: `radial-gradient(rgba(0,0,0,0.65) , black) , url(${wrapper_banner})`, backgroundAttachment: 'fixed' }}
    >
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
         We Preach, Disciple, Equip & Reach Out
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <i className={`${item.icon} text-5xl text-red-600 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

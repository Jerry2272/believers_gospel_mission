import React from "react";
import { Users, Music, Cross } from "lucide-react";
import ministries_banner from "../../../assets/contact_hero.jpg";

interface Ministry {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ministries: Ministry[] = [
  {
    id: 1,
    title: "Ushering Ministry",
    description:
      "Ensuring order, welcoming members, and creating a warm atmosphere during services.",
    icon: <Users className="w-12 h-12 text-[#e41e26] mx-auto mb-4" />,
  },
  {
    id: 2,
    title: "Choir Ministry",
    description:
      "Leading the congregation in heartfelt worship and praise that lifts the soul.",
    icon: <Music className="w-12 h-12 text-[#e41e26] mx-auto mb-4" />,
  },
  {
    id: 3,
    title: "Evangelism Ministry",
    description:
      "Taking the gospel beyond church walls — reaching villages, cities, and nations.",
    icon: <Cross className="w-12 h-12 text-[#e41e26] mx-auto mb-4" />,
  },
];

const Ministries_section: React.FC = () => {
  return (
    <section
      className="py-20 bg-cover bg-center text-center relative my-16 mx-6 rounded-2xl px-4 overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.25), black), url(${ministries_banner})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay gradient for smooth color transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            Our Ministries
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
            We are a family of believers serving God through diverse callings —
            united in one mission to spread the Gospel and build lives.
          </p>
        </div>

        {/* Ministries Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-[105px]">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg rounded-2xl p-8 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              {ministry.icon}
              <h3 className="text-2xl font-semibold mb-3">{ministry.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <a
            href="/ministries"
            className="inline-block bg-[#e41e26] text-white px-8 py-3   font-semibold tracking-wide  transition duration-300"
          >
            View All Ministries
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ministries_section;

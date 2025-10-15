import React from "react";
import { Users, Music, Cross } from "lucide-react"; // you can change icons as you like
import ministries_banner from "../../../assets/mid_week_banner.jpg";

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
    icon: <Users className="w-10 h-10 text-red-500 mx-auto mb-4" />,
  },
  {
    id: 2,
    title: "Choir Ministry",
    description:
      "Leading the congregation in heartfelt worship and praise that lifts the soul.",
    icon: <Music className="w-10 h-10 text-red-500 mx-auto mb-4" />,
  },
  {
    id: 3,
    title: "Evangelism Ministry",
    description:
      "Taking the gospel beyond church walls — reaching villages, cities, and nations.",
    icon: <Cross className="w-10 h-10 text-red-500 mx-auto mb-4" />,
  },
];

const Ministries_section: React.FC = () => {
  return (
    <section
      className="py-20 bg-cover bg-center text-center relative my-16 px-4"
      style={{
        background: `radial-gradient(rgba(0,0,0,0.65), black), url(${ministries_banner})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Our Ministries
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          We are a family of believers serving God through diverse callings — united in one mission to spread the Gospel and build lives.
        </p>
      </div>

      {/* Ministries Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-[105px]">
        {ministries.map((ministry) => (
          <div
            key={ministry.id}
            className="bg-white/20 text-white shadow-lg rounded-xl p-6 lg:p-12 text-center hover:shadow-2xl transition duration-300"
          >
            {ministry.icon}
            <h3 className="text-xl font-semibold mb-2">{ministry.title}</h3>
            <p className="text-white text-sm">{ministry.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <a
          href="/ministries"
          className="bg-red-700 text-white px-6 py-3 font-semibold hover:bg-red-800 transition duration-300"
        >
          View All Ministries
        </a>
      </div>
    </section>
  );
};

export default Ministries_section;

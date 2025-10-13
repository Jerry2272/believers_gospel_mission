import React from "react";
import ministries_banner from '../../../assets/mid_week_banner.jpg'

const Ministries_section: React.FC = () => {
  return (
     <section
      className="py-20 bg-cover bg-center text-center relative my-16 px-4"
      style={{ background: `radial-gradient(rgba(0,0,0,0.65) , black) , url(${ministries_banner})`, backgroundAttachment: 'fixed' }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Our Ministries
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          We are a family of believers serving God through diverse callings —
          united in one mission to spread the Gospel and build lives.
        </p>
      </div>

      {/* Ministries Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-[75px]">
        <div className="bg-white/20 text-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Ushering Ministry</h3>
          <p className="text-white text-sm">
            Ensuring order, welcoming members, and creating a warm atmosphere
            during services.
          </p>
        </div>

        <div className="bg-white/20 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">
            Choir Ministry
          </h3>
          <p className="text-white text-sm">
            Leading the congregation in heartfelt worship and praise that lifts
            the soul.
          </p>
        </div>

        <div className="bg-white/20 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">
            Evangelism Ministry
          </h3>
          <p className="text-white text-sm">
            Taking the gospel beyond church walls — reaching villages, cities,
            and nations.
          </p>
        </div>
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

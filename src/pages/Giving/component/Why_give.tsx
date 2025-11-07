import React from "react";
import bg1 from "../../../assets/transform.jpg";
import bg2 from "../../../assets/support.jpg";
import bg3 from "../../../assets/building_legacy.jpg";

export const Why_give: React.FC = () => {
  const why_give_data = [
    {
      id: 1,
      title: "Transforming Lives",
      description:
        "Our contributions create real change in the lives of those in need.",
      bg_bg: bg1,
    },
    {
      id: 2,
      title: "Supporting God’s Work",
      description:
        "Every gift helps us spread the Gospel and reach more people with the message of Jesus.",
      bg_bg: bg2,
    },
    {
      id: 3,
      title: "Building a Legacy",
      description:
        "Your giving builds lasting impact—spiritually and practically—for generations to come.",
      bg_bg: bg3,
    },
  ];

  return (
    <section className="py-16 bg-white text-center why_giving">
      {/* WHY WE GIVE */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e41e26] mb-3">
          Why We Give
        </h2>
        <p className="text-[#050505] text-xl">
          Understanding the motivation <br/> behind our contributions.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-6 mt-10 px-4">
          {why_give_data.map((item) => (
            <div
              key={item.id}
              className="h-[380px] relative overflow-hidden  shadow-md group"
              style={{
                backgroundImage: `url(${item.bg_bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>

              {/* content */}
              <div className="absolute inset-0 flex flex-col justify-end text-left text-white p-6">
                <h4 className="text-2xl font-semibold mb-2 text-[#e41e26]">{item.title}</h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WAYS TO GIVE */}
      <div className="bg-white py-16 border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Ways to Give
        </h2>
        <p className="text-gray-600 mb-10">
          Here are some easy ways to support our church.
        </p>

        <div className="max-w-3xl mx-auto space-y-8 text-left px-6">
          <div className="bg-black  p-6 shadow-sm hover:bg-black/90 transition-all duration-300">
            <h4 className="text-xl font-semibold text-white mb-2">
              🏠 In Person
            </h4>
            <p className="text-white/90">
              During our services, you’ll have an opportunity to give in person.
            </p>
          </div>

          <div className="bg-black  p-6 shadow-sm hover:bg-black/90 transition-all duration-300">
            <h4 className="text-xl font-semibold text-white mb-3">
              💳 Bank Transfer
            </h4>
            <p className="text-white/90 leading-relaxed">
              <span className="block">
                <strong>Account Name:</strong> Believers Gospel Mission
              </span>
              <span className="block text-2xl">
                <strong>Account Number:</strong> 2031426615
              </span>
              <span className="block">
                <strong>Bank:</strong> <span className="text-2xl">First Bank</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

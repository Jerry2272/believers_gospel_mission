import React from "react";
import wrapper_banner from "../../../assets/hero_banner.jpg";
import { Heart, Church, Users, BookOpen, Briefcase, Globe, Users2, HelpingHand } from "lucide-react";

const Wrapper: React.FC = () => {
  const missions = [
    {
      icon: <BookOpen className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Gospel Preaching",
      description:
        "Preaching the gospel of our Lord Jesus Christ in villages and cities in Nigeria and abroad to win souls for Christ.",
    },
    {
      icon: <Church className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Church Planting",
      description:
        "Planting churches and discipling the believers within these churches to grow spiritually and impact their communities.",
    },
    {
      icon: <Users2 className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Discipleship",
      description:
        "We nurture believers to grow in faith and live as true disciples of Christ through fellowship and mentorship.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Pastoral Training",
      description:
        "Preparing and equipping pastors for the gospel spiritually and economically to function effectively in their calling.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Youth Empowerment",
      description:
        "Organizing conferences, workshops, and seminars for youths, teenagers, and children, training them in the way of the Lord.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Missions",
      description:
        "Sending out missionaries to areas where the impact of the gospel is lacking, extending God’s kingdom globally.",
    },
    {
      icon: <HelpingHand className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Community Care",
      description:
        "Providing for the needs of the poor, widows, prisoners, and the less privileged — showing God’s love in action.",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#e41e26] mb-4" />,
      title: "Reach Out",
      description:
        "We reach out to communities, meeting both their spiritual and physical needs with the love of Christ.",
    },
  ];

  return (
    <section
      className="py-20 bg-cover bg-center text-center relative mb-16 px-4"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.45), #050505), url(${wrapper_banner})`,
        backgroundAttachment: "fixed",
      }}
    >
            <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Mission — Preach, Disciple, Equip & Reach Out
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="bg-white/18 p-8 rounded-2xl shadow hover:bg-white/25 transition duration-300 flex flex-col items-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wrapper;

import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import { Leadership_profile_card } from "./component/Leadership_profile_card";
import hero_banner from "../../assets/about_banner_church_view.jpg";
import img1 from "../../assets/Rev.Dr_David_Nwachukwu.png";
import card_bg from "../../assets/Rev.Dr_David_Nwachukwu.png";

export const Leadership: React.FC = () => {
  const LeadershipGroups = [
    {
      id: 1,
      title: "Executive Leadership",
      gridCols: "sm:grid-cols-1 md:grid-cols-2 mx-auto max-w-3xl gap-10",
      members: [
        {
          id: 1,
          pastor_name: "Rev. Dr. David Nwachukwu",
          title: "Vice President, Believers Gospel Mission",
          description:
            "He has been in active ministry for over 40 years. His passion to reach the world with the gospel has taken him to various nations.",
          img: img1,
          tel: "+234 801 234 5678",
        },
        {
          id: 2,
          pastor_name: "Rev. Miracle Chukwunyere",
          title: "Resident Pastor, Believers Gospel Mission Inc",
          description:
            "A woman of faith and intercession, passionate about nurturing women and families through the Word of God.",
          img: img1,
          tel: "+234 809 111 2233",
        },
      ],
    },
    {
      id: 2,
      title: "Ministry Directors",
      gridCols: "sm:grid-cols-2 md:grid-cols-3 gap-10 p-12 lg:px-[8em]",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.87), rgba(0,0,0,0.87)), url(${card_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      },
      members: [
        {
          id: 3,
          pastor_name: "Pastor Grace Hartford",
          title: "Women’s Ministry Director",
          description:
            "Leading women to grow in grace and purpose through sound biblical teaching and mentoring.",
          img: img1,
          tel: "+234 805 000 1111",
        },
        {
          id: 4,
          pastor_name: "Pastor Michael Parker",
          title: "Men’s Ministry Director",
          description:
            "Dedicated to equipping men to be leaders in their homes, workplaces, and communities.",
          img: img1,
          tel: "+234 802 555 9999",
        },
        {
          id: 5,
          pastor_name: "Pastor Alex Rodrigues",
          title: "Counseling Ministry Director",
          description:
            "Provides pastoral care and spiritual counseling to individuals and families in need.",
          img: img1,
          tel: "+234 808 333 4444",
        },
      ],
    },
    {
      id: 3,
      title: "Administrative Staff",
      gridCols: "sm:grid-cols-2 md:grid-cols-2 gap-10 p-12 lg:px-[6em] max-w-6xl mx-auto",
      // style: {
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.87), rgba(0,0,0,0.87)), url(${card_bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // },
      members: [
        {
          id: 7,
          pastor_name: "Sharon Smith",
          title: "Office Manager",
          description:
            "Oversees administrative operations and supports ministry logistics.",
          img: img1,
          tel: "+234 806 123 4567",
        },
        {
          id: 8,
          pastor_name: "Louise Brown",
          title: "Administrative Assistant",
          description:
            "Provides essential clerical and communication support across departments.",
          img: img1,
        },
        {
          id: 9,
          pastor_name: "Andrew Harrison",
          title: "Financial Director",
          description:
            "Manages the ministry’s finances and ensures proper stewardship of resources.",
          img: img1,
        },
        {
          id: 10,
          pastor_name: "James Miller",
          title: "Director of Church Operations",
          description:
            "Coordinates logistics and maintains the effective running of all church operations.",
          img: img1,
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero_section_component
        title="Our Leaders"
        hero_banner={hero_banner}
        description="God has blessed the ministry with leaders and pastors whose leadership, expertise, and service to the Kingdom have greatly contributed to the ministry’s impact."
        className="h-[300px]"
      />

      {/* Leadership Groups */}
      <section className="py-16">
        <div className="mx-auto space-y-24">
          {LeadershipGroups.map((group) => (
            <div key={group.id} style={group.style}>
              <div className="text-center py-10">
                <h2
                  className={`text-3xl font-bold mb-4 ${
                    group.style ? "text-white" : "text-gray-900"
                  }`}
                >
                  {group.title}
                </h2>
                <div
                  className={`w-24 h-1 mx-auto ${
                    group.style ? "bg-white/80" : "bg-red-700"
                  }`}
                ></div>
              </div>

              <div className={`grid ${group.gridCols}`}>
                {group.members.map((member) => (
                  <Leadership_profile_card
                    key={member.id}
                    id={member.id}
                    img={member.img}
                    pastor_name={member.pastor_name}
                    title={member.title}
                    description={member.description}
                    tel={member.tel}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";

import hero_banner from "../../assets/contact_hero.jpg";
import bishop_david from "../../assets/bishop_wife.jpg";

import rev_ukachi from "../../assets/rev_ukachi.jpg";
import rev_miracle from "../../assets/rev_miracle.jpg";
import rev_ifeanyi from "../../assets/Rev_ifeanyi.png";
import rev_victor_adams from "../../assets/victor_adams.jpg";
import rev_emeka_o from "../../assets/REV_EMEKA_BLESSIUS.jpg";
import rev_daniel from "../../assets/rev_daniel.jpg";
import rev_friday from "../../assets/Rev_friday.png";
import rev_uzoma from "../../assets/Rev_uzoma.png";
import rev_ephraim from "../../assets/rev_Ephraim.png";
import rev_john from "../../assets/john_e.jpg";
import rev_linus from "../../assets/rev_linus.jpg";
import rev_loius from "../../assets/rev_loius.png";
// import rev_simon from "../../assets/rev_simon.png";
import rev_steve from "../../assets/Rev_steve.png";
import rev_opara from "../../assets/opara.jpg";
import rev_vitus from "../../assets/rev_vitus.jpg";
import rev_ekeoma from "../../assets/rev_ekeoma.jpg";
import mummy_charity from "../../assets/mumumy_charity.png";
import remmy from "../../assets/rev_remmy.png";
import ukachi from "../../assets/ukachi.jpg";
import rev_harmony from "../../assets/harmony.jpg";
import rev_silas from "../../assets/rev_silas.jpg";

interface Leader {
  name: string;
  title: string;
  img: string;
  description?: string;
}

interface Category {
  title: string;
  members: Leader[];
}

export const Leadership: React.FC = () => {
  const northernLeaders: Leader[] = [
    {
      name: "Rev Dr John Iragbe Ikhanoba",
      title: "Nyanya District Superintendent",
      img: rev_john,
    },
    {
      name: "Rev Emeka Onweneke",
      title: "Acting Abuja District Superintendent",
      img: rev_emeka_o,
    },
    {
      name: "Rev Daniel Ranyi Zhokwo",
      title: "AMAC District Superintendent",
      img: rev_daniel,
    },
   
     {
          name: "Rev Dr Louis Nwachukwu",
          title: "Superintendent, Upper-Niger District",
          img: rev_loius,
        },
  ];

  const leadershipCategories: Category[] = [
    {
      title: "Southern Region District Leaders",
      members: [
        {
          name: "Rev Uzoma Maduoma",
          title: "Superintendent, Rivers District",
          img: rev_uzoma,
        },
        {
          name: "Rev Ephraim Chukwuocha",
          title: "Superintendent, Port-Harcourt District",
          img: rev_ephraim,
        },
        {
          name: "Rev Ifeanyi Linus Ndukwe",
          title: "Aba District Superintendent",
          img: rev_linus,
        },
         {
      name: "Rev Dr Remmy Chukwu",
      title: "Leader, Men Fellowship",
      img: remmy,
    },
     {
          name: "Rev Vitus Anyanwu",
          title: "District Superintendent",
          img: rev_vitus,
        },
         {
          name: "Rev Amarachi Opara",
          title: "Acting Owerri District Superintendent",
          img: rev_opara,
        },
         {
          name: "Rev Dr Harmony Opara",
          title: "Superintendent / National Youth Pastor",
          img: rev_harmony,
        },
         {
          name: "Rev Silas Ozuruonye",
          title: "Superintendent",
          img: rev_silas,
        },
         {
      name: "Rev Friday Okiyi",
      title: "Superintendent, Niger District",
      img: rev_friday,
    },
        
        // {
        //   name: "Rev Dr Simon Ujah",
        //   title: "Superintendent, Nyanya District",
        //   img: rev_simon,
        // },
        
       
       
       
      ],
    },
    {
      title: "Other Key Leaders",
      members: [
        {
          name: "Rev Onyekachi Ukachi",
          title: "International Youth Pastor",
          img: ukachi,
        },
        {
          name: "Rev Dr Harmony Opara",
          title: "Superintendent / National Youth Pastor",
          img: rev_harmony,
        },
         {
          name: "Rev John Samson Ekeoma",
          title: "Headquarters Churches Coordinator",
          img: rev_ekeoma,
        },
        {
          name: "Rev Steve Ndubueze",
          title: "Superintendent, Owerri District",
          img: rev_steve,
        },
       
      ],
    },
  ];

  const topLeadership: Leader[] = [
    {
      name: "Rev Dr Onyekachi Ukachi",
      title: "Assistant General Overseer",
      img: rev_ukachi,
    },
    {
      name: "Rev Miracle Chukwunyere",
      title: "National Secretary",
      img: rev_miracle,
    },
    {
      name: "Mummy Charity Nwokenna",
      title: "Leader, Women Fellowship",
      img: mummy_charity,
    },
    {
      name: "Rev Dr Remmy Chukwu",
      title: "Leader, Men Fellowship",
      img: remmy,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero_section_component
        title="Our Leaders"
        hero_banner={hero_banner}
        description="God has blessed the ministry with leaders and pastors whose leadership, expertise, and service to the Kingdom have greatly contributed to the ministry’s impact."
        className="h-[80vh]"
      />

      {/* Bishop Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div data-aos="fade-right" className="flex-shrink-0 w-full lg:w-[45%]">
            <img
              src={bishop_david}
              alt="Bishop David Nwachukwu"
              className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div data-aos="fade-left" className="lg:w-[55%] text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Bishop David Nwachukwu
            </h2>
            <h4 className="text-lg font-medium text-red-700 mb-5">
              Presiding Bishop of Believers Gospel Mission Int.
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              He has been in active ministry for over 50 years. His passion to
              reach the world with the gospel has taken him to various nations,
              inspiring believers and strengthening churches globally. Under his
              leadership, Believers Gospel Mission has continued to expand with
              impact and grace.
            </p>
          </div>
        </div>
      </section>


<hr />
   

      {/* Top Leadership Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Top Leadership
        </h2>
        <div className="container mx-auto px-6 lg:px-30 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          {topLeadership.map((leader, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="bg-white  overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="h-[400px] w-full object-cover object-center"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-red-700 font-medium mt-1">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Northern Region Head & Leaders */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
           Head of Northern Region District Leaders
          </h2>
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div data-aos="fade-right" className="w-full lg:w-[45%]">
            <img
              src={rev_victor_adams}
              alt="Rev Victor Adams"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div data-aos="fade-left" className="lg:w-[55%] text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Rev Victor Adams
            </h2>
            <h4 className="text-lg font-medium text-red-700 mb-5">
              Head of Northern Region
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              Rev. Victor Adams provides leadership and direction to the entire
              Northern Region. His dedication to outreach and discipleship has
              led to tremendous spiritual and numerical growth in the Northern
              territories.
            </p>
          </div>
        </div>

        {/* Northern District Leaders */}


        
        <div className="mt-16 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Northern Region District Leaders
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {northernLeaders.map((leader, j) => (
              <div
                key={j}
                data-aos="zoom-in"
                className="bg-gray-50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="h-[380px] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {leader.name}
                  </h3>
                  <p className="text-red-700 font-medium mt-1">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



         {/* Head of Southern Region */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div data-aos="fade-right" className="w-full lg:w-[45%]">
            <img
              src={rev_ifeanyi}
              alt="Rev Ifeanyi Ndukwe"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div data-aos="fade-left" className="lg:w-[55%] text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Rev Ifeanyi Ndukwe
            </h2>
            <h4 className="text-lg font-medium text-red-700 mb-5">
              Head of South Region
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              Rev. Ifeanyi Ndukwe oversees the entire Southern region, providing
              strategic leadership, mentorship, and spiritual oversight to all
              districts in the South. His passion for equipping ministers and
              strengthening churches continues to drive growth across the
              region.
            </p>
          </div>
        </div>
      </section>

      {/* Remaining Categories (Southern & Others) */}
      <section className="my-16 px-6 lg:px-16">
        {leadershipCategories.map((category, i) => (
          <div key={i} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              {category.title}
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center text-center">
              {category.members.map((leader, j) => (
                <div
                  key={j}
                  data-aos="zoom-in"
                  className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="h-[400px] w-full object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {leader.name}
                    </h3>
                    <p className="text-red-700 font-medium mt-1">
                      {leader.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

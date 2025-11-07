import React, { useState } from "react";
import kennith from "../../assets/kenneth.jpg";
import rev_steve from "../../assets/Rev_steve.png";
// import rev_uzoma from "../../assets/Rev_uzoma.png";
import rev_linus from "../../assets/rev_linus.jpg";
import rev_miracle from "../../assets/rev_miracle.jpg";
import rev_ugochukwu from "../../assets/ugochukwu.jpg";
import rev_emeka from "../../assets/REV_EMEKA_BLESSIUS.jpg";
import rev_louis from "../../assets/louis.jpg";
// import rev_kingsley from "../../assets/kingsley.jpg";
import rev_daniel from "../../assets/rev_daniel-abj.jpg";
import rev_james from "../../assets/rev_jame.jpg";
import rev_john from "../../assets/john_e.jpg";
import pst_solomon from "../../assets/pst_solomon.jpg";
import rev_j_mark from "../../assets/rev_johnmark.jpg";
import rev_harmony from "../../assets/pastor_harmony.png";
import rev_evang from "../../assets/rev_evang.jpg";
import pst_obeni from "../../assets/pst_obeni.jpg";
import pst_nnamdi from "../../assets/pst_nnamdi.jpg";
import pst_eric from "../../assets/pst_eric.jpg";
import rev_uzoma from "../../assets/Rev_uzoma.png";
import rev_ekeoma from "../../assets/rev_ekeoma.jpg";
import rev_remmy from "../../assets/rev_remmy.png";
import rev_friday from "../../assets/Rev_friday.png";
import rev_okafor from "../../assets/rev_okafor.jpg";
import ehirim from "../../assets/ehirim.jpg";
import rev_okele from "../../assets/okele.jpg";
import pst_umu from "../../assets/past_umu.jpg";
import rev_ibe from "../../assets/rev_ibe.jpg";
import rev_goodness from "../../assets/rev_goodness.jpg";
// import rev_james from "../../assets/rev_james.jpg";
import rev_kingsley from "../../assets/kingsley.jpg";
import rev_vitus from "../../assets/rev_vitus.jpg";
import rev_ifeanyi from "../../assets/rec_ifeanyi.jpg";
import rev_innocent from "../../assets/rev_innocent.jpg";
import rev_amarachi from "../../assets/rev_innocent.jpg";
import rev_si from "../../assets/rev_s_i.jpg";
import rev_ehirim  from "../../assets/ehirim.jpg";
import rev_eric  from "../../assets/pst_eric.jpg";
import rev_bright from "../../assets/rev_bright.jpg";
import uboma_branch from "../../assets/rev_amarachi.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Branches: React.FC = () => {
  const [activeState, setActiveState] = useState("Abuja");

  const branches = {
    Abuja: [
      {
        id: 1,
        name: "Kenneth Omah.",
        address: "Believers Gospel Mission behind LEA Primary School after old Police Station Mpape Abuja.",
        // contact: "+234 803 123 4567",
        // pastor: "Kenneth Omah",
        pastor_img: kennith,
      },
      {
        id: 2,
        name: "Rev Miracle Chukwunyere",
        address: "Believers Gospel Mission Inc, Behind Nexter Bread Bakery, Plot 692, Arab Road, Kubwa, Abuja.",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_miracle,
      },
      {
        id: 3,
        name: "Rev. Prince Ugochukwu",
        address: "Believers Gospel Mission Inc Abattoir Road, Lagos Street Gwagwa, Abuja",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_ugochukwu,
      },
      {
        id: 4,
        name: "Rev Emeka Blessius Onweneke",
        address: "Believers Gospel Mission Inc, Behind Nexter Bread Bakery, Plot 692, Arab Road, Kubwa, Abuja.",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_emeka,
      },
      {
        id: 5,
        name: "Rev Kingsley Opara",
        address: "BELIEVERS GOSPEL MISSION, MASAKA. BRANCH.BY  MAI ANGWA'S PALACE, RAFIN KWARA, MASAKA,.KARU LGA NASARAWA STATE.",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_kingsley,
      },
      {
        id: 6,
        name: "REV.LOUIS NWACHUKWU",
        address: "Believers gospel mission suleja Niger state behind A.A Rano filling station",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_louis,
      },
      {
        id: 7,
        name: "Rev. Daniel Ranyi Zhokwo Presiding Pastor",
        address: "Believers Gospel Mission, Jiwa Behind Old Chief (Sarki) House Off ECWA Church (Hausa Section)Jiwa, AMAC, Abuja, FCT, Nigeria",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_daniel
      },
      {
        id: 8,
        name: "Pastor James Oshomoh",
        address: "Believes Gospel Mission Area  C. Last toad, By Gbagalape junction Nyanya, Abuja. FCT.",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_james
      },
      {
        id: 9,
        name: "Rev. Dr. Ikhanoba E John",
        address: "Believers Gospel Mission AREA C  last road, Nyanya Abuja, F C T.",
        // contact: "+234 803 234 5678",
        // pastor: "Rev John Doe",
        pastor_img: rev_john
      },
    ],

    
    "Niger State": [
      {
        id: 1,
        name: "Pastor Solomon Obeni ",
        address: "Believers Gospel Mission Inc. Dadinkowa junction, Kontagora Niger State",
        // contact: "+234 802 555 1212",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: pst_solomon,
      },
      {
        id: 2,
        name: "REV.LOUIS NWACHUKWU",
        address: "Believers gospel mission suleja Niger state behind A.A Rano filling station",
        // contact: "+234 802 555 1212",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_louis,
      },
      {
        id: 3,
        name: "Rev.Kadiri Friday Azonobor.",
        address: "Believers Gospel Mission Inc.By Wisdom School Kwankwashe Niger State",
        // contact: "+234 802 555 1212",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_friday,
      },
      {
        id: 4,
        name: "Pastor Solomon Obeni",
        address: "Believers Gospel mission Inc.Dadinkowa junction Kontagora Niger State.",
        // contact: "+234 802 555 1212",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: pst_obeni,
      },
      {
        id: 5,
        name: "Pst. Emmanuel olumodeji",
        address: "Believes Gospel Mission. Adjacent parents pride academy, Javino  Niger state.",
        // contact: "+234 802 555 1212",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: pst_obeni,
      },
    ],


    "Rivers State": [
      {
        id: 1,
        name: "Rev.Johnmark Amarachi Michael",
        address: "Believers Gospel Mission, Off  Rd 14, Odaranwere Street Behind  Western Monsotory Primary school entrance, Opp. Laritel Hotel B/Stop, NTA/ Mgbuoba, Port Harcourt.Rivers State",
        contact: "08037267395",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_j_mark,
      },
      {
        id: 2,
        name: "Rev. Harmony C. Opara (Ph.D)",
        address: "Believers Gospel Mission 15 Okpuoru Rd Ozuoba Porthacourt Rivers State.",
        // contact: "08037267395",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_harmony,
      },
      {
        id: 3,
        name: "Rev Maduoma Dike Uzoma",
        address: "Believers Gospel Mission Location Church, Road 4, Glorious Estate Off Transformer Junction Umuebule 4, Etche, Rivers State.",
        // contact: "08037267395",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_uzoma,
      },
      {
        id: 4,
        name: "Rev. Evang. Gabriel U.K Osigwe.",
        address: "Believers Gospel Mission Inc.No13 Lawson Street Komkom by Railway junction. Obigbo LGA. Rivers State. Nig",
        contact: "08116316697 || 09122738607",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_evang,
      },
      {
        id: 5,
        name: "Pastor OKELE CHRISTOPHER",
        address: "Believers Gospel Mission Inc.OBEAMA ASA RIVERS STATE",
        contact: "08116316697 || 09122738607",
        // pastor: "Rev Engr Uzoma Ihediohamma",
        pastor_img: rev_okele,
      },
    ],


    "Imo State": [
      {
        id: 1,
        name: "Rev. Dr. Remmy Chukwu ",
        address: "Believers Gospel Mission Nkwoalike Isinweke - Onicha Uboma  Road . Ihitte Uboma LGA Imo State.",
        // contact: "+234 801 987 6543",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_remmy,
      },
      {
        id: 2,
        name: "Pastor. Eric",
        address: "Believers Gospel Mission, (City of Joy) Umuobom Umueze Amauburu Ubomiri in Mbaitoli LGA, Imo State of Nigeria,  Opp, Eva Victory Company",
        contact: "08133708853",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: uboma_branch,
      },
      {
        id: 3,
        name: "Rev Eze Cosmas Anyanwu",
        address: "Believers Gospel Mission Umuode Amainyi Ihitte-Uboma l G A Imo State Nigeria",
        // contact: "08133708853",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: pst_umu,
      },
      {
        id: 4,
        name: "Rev Ekeoma Johnsamson",
        address: "Believers Gospel Mission Inc Headquarters isinweke in Ihitte /Uboma LGA IMO STATE",
        contact: "+2347043506115",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_ekeoma,
      },
      {
        id: 5,
        name: "Pst Chigozirim Ehirim",
        address: "Believers Gospel Mission Inc Ibenkwo Umunumo in Ehime mbano L.G.A, Imo State",
        // contact: "+2347043506115",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_ehirim,
      },
      {
        id: 6,
        name: "Rev.Ibe Samuel chinedum.",
        address: "Believes Gospel Mission Odenkume Obowo Imo state.",
        contact: "08077306082",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_ibe,
      },
      {
        id: 7,
        name: "Rev Dr S.I.Ozuruonye",
        address: "Believes Gospel mission Abueke Imo state.",
        // contact: "08077306082",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_si,
      },
      {
        id: 8,
        name: "Rev,Dr.Innocent Ajaelu",
        address: "Believes Gospel mission Alaike Umunomu Alaoma church.Ehime mbano Imo state.",
        contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_innocent,
      },
      {
        id: 9,
        name: "Rev. Goodness  Chigozie Ekenna, Assistant pastor",
        address: "Believes Gospel Mission International Headquarters, No 7 Chief Vincent Nwosu street, Hospital junction, off port Harcourt road Owerri",
        // contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_goodness,
      },
      {
        id: 10,
        name: "Pastor Engr Nnamdi Onugha",
        address: "Believer,s Gospel Mission lnc. Owere Nkalu/lfakala church Mbaitolu lmo state Nigeria",
        // contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: pst_nnamdi,
      },
      {
        id: 11,
        name: "Rev. Vitus Anyanwu. district superintendent",
        address: "Believes Gospel mission Ibeafor church.lmo state Nigeria",
        // contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_vitus,
      },
      {
        id: 12,
        name: "Rev Bright Ifeanyi Obasi",
        address: "Umuawuchi Branch",
        // contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_bright,
      },
      {
        id: 13,
        name: "Rev(Dr) Okafor Chimezie Daniel",
        address: "Believes Gospel mission Omaulo Amaiyi in Ihitte-Uboma LGA Imo state",
        // contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_okafor,
      },
      {
        id: 14,
        name: "Rev. Amarachi Opara",
        address: "BELIEVERS GOSPEL MISSION CANAANLAND BEHIND WATER RESERVOIR ALONG ANIMAL KINGDOM ROAD EGBEADA MBAITOLI IMO STATE",
        // contact: "09032842761",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_amarachi,
      },
      {
        id: 15,
        name: "Rev. Amarachi Opara",
        address: "BELIEVERS GOSPEL MISSION CANAANLAND BEHIND WATER RESERVOIR ALONG ANIMAL KINGDOM ROAD EGBEADA MBAITOLI IMO STATE",
        contact: "08133708853",
        // pastor: "Rev Steve Ndubueze",
        pastor_img: rev_eric,
      },
    ],
    "Abia State": [
      {
        id: 1,
        name: "REV. KINGSLEY OPARA",
        address: "BELIEVERS GOSPEL MISSION, MASAKA. BRANCH. BY  MAI ANGWA'S PALACE, RAFIN KWARA, MASAKA,.KARU LGA NASARAWA STATE.",
        // contact: "+234 803 567 8910",
        // pastor: "Rev Ifeanyi Linus Ndukwe",
        pastor_img: rev_kingsley,
      },
      {
        id: 2,
        name: "Rev Ifeanyi Ndukwe Regional coordinator South",
        address: "Believers Gospel Mission.No, 14 Chukwunyere st, by 56 Akalana ABA, Abia state.",
        // contact: "+234 803 567 8910",
        // pastor: "Rev Ifeanyi Linus Ndukwe",
        pastor_img: rev_ifeanyi,
      },
      {
        id: 3,
        name: "Rev. James N.B Nwachukwu",
        address: "Believers Gospel Mission, Nō 1 Believers Crescent, Opp. Access Bank, New Timber, off Umudike/Ikot-ekpene Rd,. Umuahia, Abia State.",
        contact: "09030994927",
        // pastor: "Rev Ifeanyi Linus Ndukwe",
        pastor_img: rev_james,
      },
    ],
  };

  const states = Object.keys(branches);

  return (
    <div>
      {/* Hero Section */}
      <section className="lg:h-[100vh] h-[80vh] bg-black flex flex-col justify-center items-center text-white px-4 text-center gap-6">
        <h1 className="text-2xl lg:text-6xl font-bold uppercase max-w-5xl leading-snug">
          “We enlist, disciple, and deploy believers in Christ, and with joy.”
        </h1>
        <h5 className="text-lg text-gray-300">
          Raising a people who advance God’s Kingdom everywhere.
        </h5>
      </section>

      {/* Branch Selection Section */}
      <section className="py-16 px-6 lg:px-20 bg-[#fff]/60 text-center">
        <h2 className="lg:text-4xl text-2xl  font-bold mb-10">
          Visit Our Church Branches {branches[activeState].length}
        </h2>

        {/* State Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {states.map((state, index) => (
            <button
              key={index}
              onClick={() => setActiveState(state)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeState === state
                  ? "bg-red-700 text-white border-red-700"
                  : "bg-white text-gray-800  [activeState]border-gray-300 hover:bg-gray-100"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Branch Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {branches[activeState].map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl overflow-hidden transition-all duration-300   hover:-translate-y-2"
            >
              <img
                src={branch.pastor_img}
                alt={branch.pastor}
                className="h-[350px] w-full rounded-xl object-cover"
              />
              <div className="p-6 pl-0 text-left">
                <h3 className="text-xl font-medium text-[#050505] mb-1">
                  {branch.name}
                </h3>
                {/* <p className="text-red-700 font-medium mb-2">{branch.pastor}</p> */}
                <div className="flex items-start text-gray-600 gap-2 text-[15px]">
                  <FaMapMarkerAlt className="text-red-700 mt-1 flex-shrink-0" />
                  <span>{branch.address}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1 pl-5">{branch.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

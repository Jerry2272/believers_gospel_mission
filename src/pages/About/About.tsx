import React from 'react'
import { Hero_section_component } from '../../components/Hero_section_component'
import hero_banner from  '../../assets/about_banner_church_view.jpg'

export const About:React.FC = () => {
  const sections = [
    {
      id: 1,
      title: "Vision Statement",
      content:
        "Unreached people in Nigeria and abroad will be transformed by the Gospel message and discipled in their new faith.",
      image: hero_banner,
      reverse: false,
      type: "text",
    },
    {
      id: 2,
      title: "Our Mandate",
      content:
        "Our mandate in Believers Gospel Mission has never changed since over 45 years of the ministry’s operation:",
      image: hero_banner,
      reverse: true,
      type: "text",
    },
    {
      id: 3,
      title: "Mission Statement",
      content: [
        "Preaching the gospel of our Lord Jesus Christ in villages and cities in Nigeria and abroad to win souls for Christ.",
        "Planting churches and discipling the believers within these churches.",
        "Preparing and equipping ministers of the gospel spiritually and economically to enable them function effectively in their various callings.",
        "Organizing conferences, workshops and seminars for various groups like the youths, teenagers and children to train them in the way of the Lord.",
        "Sending out missionaries to areas where the impact of the gospel is lacking.",
        "Providing for the needs of the poor, widows, prisoners and the less privileged.",
        "Establishing schools, hospitals, and other projects to enhance the intellectual and social lives of people that they may fulfill God’s purpose for their lives.",
      ],
      image: hero_banner,
      reverse: false,
      type: "list",
    },
  ];

  return (
    <section>
       <Hero_section_component title='About Believers Gospel Mission'  description='Believers Gospel Mission is a Christ-centered ministry dedicated to preaching the Gospel, making disciples, and equipping believers to fulfill God’s purpose for their lives.

For over four decades, we’ve been reaching villages, cities, and nations — transforming lives through the power of God’s Word and the Holy Spirit.' hero_banner={hero_banner} className='h-[400px]'  />

       <article className="py-10 bg-black px-6 lg:px-16 my-12">
      {sections.map((section) => (
        <section
          key={section.id}
          className={`flex flex-col ${
            section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-stretch justify-center mb-10`}
        >
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 w-full bg-black text-white p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
              {section.title}
            </h2>

            {section.type === "text" && (
              <p className="text-gray-300 leading-relaxed mb-4">
                {section.content as string}
              </p>
            )}

            {section.type === "list" && Array.isArray(section.content) && (
              <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                {section.content.map((item, index) => (
                  <li key={index} className='py-2'>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </article>
    </section>
  )
}

 
import React from 'react'

interface hero_section  {
    hero_banner: string,
    cta?: string,
    title: string,
    description: string,
    className?: string

}

export const Hero_section_component :React.FC <hero_section> = ({hero_banner, title,description,cta, className}) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`bg-cover bg-center text-white flex flex-col space-y-5 items-center justify-center text-center px-4 relative pt-[160px] ${className} lg:mt-[9em] lg:mx-[66px] py-12 my-16`}
      style={{ background:`radial-gradient(rgba(0,0,0,0.30), black) , url(${hero_banner})` , backgroundPosition: 'bottom', backgroundSize: 'cover'}}
    >
      <div className=" p-8 flex justify-center items-center flex-col absolute inset-0">
        <h1 className="text-3xl md:text-5xl font-[500] max-w-3xl mb-2 leading-snug">
          {/* */}
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          {/* Sending out missionaries to areas where{" "}
          <br className="hidden lg:block md:block" /> the impact of the gospel is lacking */}
          {description}
        </p>
        <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 font-semibold transition duration-300">
          {/* Join Us Live Stream Every Sunday */}
          {cta}
        </button>
      </div>
    </section>
  )
}

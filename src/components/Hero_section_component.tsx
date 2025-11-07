 
import React from 'react' 

interface hero_section  {
    hero_banner: string,
    cta?: string,
    title: string,
    description: string,
    className?: string,
    span?: string

}

export const Hero_section_component :React.FC <hero_section> = ({hero_banner, title,description,span, cta, className}) => {
  return (
   <section
  className={`relative bg-center bg-cover flex items-end justify-start text-white ${className}`}
  style={{ backgroundImage: `url(${hero_banner})` }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>

  <div className="relative p-8 z-10 pb-10">
    <h1 className="text-3xl lg:text-6xl lg:w-6xl font-extrabold mb-3 leading-tight"><span className='text-[#e41e26] text-4xl lg:text-6xl lg:w-5xl font-extrabold mb-3 leading-tight'>{span}</span> <br /> {title}</h1>
    <p className="text-lg md:text-xl mb-6"><i>{description}</i></p>
    {cta && (
      <button className="border border-[#fff] text-[#fff] px-6 py-2 font-semibold transition duration-300">
        <a href="https://youtube.com/@bgm-hq?si=AyN_Wd3cSKeMSkxz" className='hover:text-[#1e5254]'>
        {cta}
        </a>
      </button>
    )}
  </div>
</section>

  )
}

import React from 'react'
import { Hero_section_component } from '../../components/Hero_section_component'
import hero_banner from '../../assets/giving.jpg'
import { Why_give } from './component/Why_give'

export const Giving:React.FC = () => {
  return (
 <>
    <section>
         <Hero_section_component
        title="Thank you for giving"
        description="The generous will prosper; those who refresh others will themselves be refreshed.”"
        hero_banner={hero_banner}
        className="h-[80vh] py-12"
      />
    </section>

    <Why_give />
 
 </>

  )
}

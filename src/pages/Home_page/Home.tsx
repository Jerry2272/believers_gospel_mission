import React from 'react'
import Hero_section from './components/Hero'
import MissionSection from './components/Wrapper'
import About_into from './components/About_intro'
import Mid_week_section from './components/Mid_week' 
import Donation_involvement_section from './Donation'
import Ministries_section from './components/Ministries'
import Next_steps_section from './Next_step'

export const Home :React.FC = () => {
  return (
   <>
    <Hero_section />
    <MissionSection />
    <About_into />
    <Mid_week_section /> 
    <Donation_involvement_section />
    <Ministries_section />
    <Next_steps_section />
   </>
  )
}

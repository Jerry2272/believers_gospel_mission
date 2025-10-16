import React from 'react'
import Hero_section from './components/Hero'
import Wrapper from './components/Wrapper'
import About_into from './components/About_intro'
import Mid_week_section from './components/Mid_week' 
import Donation_involvement_section from './components/Donation'
import Ministries_section from './components/Ministries'
import Next_steps_section from './components/Next_step'
import Mission_into from './components/mission_intro'
import Impact_section from '../../components/Impact_card'

export const Home :React.FC = () => {
  return (
   <>
    <Hero_section />
    <Wrapper />
    <About_into />
    <Impact_section />
    <Mission_into />
    <Mid_week_section /> 
    <Donation_involvement_section />
    <Ministries_section />
    <Next_steps_section />
   </>
  )
}

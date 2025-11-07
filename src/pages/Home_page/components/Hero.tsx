import React from "react";
import hero_banner from '../../../assets/contact_hero.jpg'
import { Hero_section_component } from "../../../components/Hero_section_component";

const Hero_section: React.FC = () => {
  return (
   <Hero_section_component hero_banner={hero_banner} className="h-screen" title="BELIEVERS GOSPEL MISSION (BGM)" span="WELCOME TO" description="And you shall know the truth, and the truth shall make you free 
   (John 8:32)" cta="Join Us Live Stream Every Sunday "  />
  );
};

export default Hero_section;

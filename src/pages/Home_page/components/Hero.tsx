import React from "react";
import hero_banner from '../../../assets/hero_banner.jpg'
import { Hero_section_component } from "../../../components/Hero_section_component";

const Hero_section: React.FC = () => {
  return (
   <Hero_section_component hero_banner={hero_banner} className="h-screen" title=" WELCOME TO BELIEVERS GOSPEL MISSION CHURCH" description="Sending out missionaries to areas where the impact of the gospel is lacking" cta="Join Us Live Stream Every Sunday "  />
  );
};

export default Hero_section;

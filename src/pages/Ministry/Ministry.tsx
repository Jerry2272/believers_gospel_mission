import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import hero_banner from "../../assets/ministry-banner.jpg";
import { Explore_ministry } from "./components/Explore_ministry";


export const Ministry: React.FC = () => {
 

  return (
    <>
      <Hero_section_component
        title="OUR MINISTRIES"
        hero_banner={hero_banner}
        description="Our ministries are dedicated to nurturing the spiritual growth of all members and reaching the world with the message of Christ."
        className="h-[80vh] bg-center bg-cover flex items-center "
      />

   <Explore_ministry />
    </>
  );
};

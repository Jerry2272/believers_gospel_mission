import React from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import hero_banner from "../../assets/envangelism.jpg"; 
import { Article_content } from "./components/Article_content";

export const Aof: React.FC = () => {
  return (
    <>
      <Hero_section_component
        title="ARTICLE OF FAITH"
        hero_banner={hero_banner}
        description="Our foundation is built on biblical truth — these are the doctrines and beliefs that guide our faith, practice, and daily walk with God."
        className="h-[80vh]"
      />
      <Article_content /> 
    </>
  );
};

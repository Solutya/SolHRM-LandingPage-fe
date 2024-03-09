import Hero from "@/components/pages/home/Hero";
import ExploreService from "@/components/pages/home/ExploreService";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { service_data } from "@/data/home";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div>
        <ExploreService />
      </div>
    </div>
  );
};
export default HomePage;

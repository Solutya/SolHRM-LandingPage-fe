import Hero from "@/components/pages/home/Hero";
import ExploreService from "@/components/pages/home/ExploreService";
import { service_data } from "@/data/home";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-[2000px]">
      <Hero />
      <div>
        <ExploreService />
      </div>
    </div>
  );
};
export default HomePage;

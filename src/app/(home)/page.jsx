import Hero from "@/components/pages/home/Hero";
import ExploreService from "@/components/pages/home/ExploreService";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { service_data } from "@/data/service-data";
import React from "react";
import RecentWork from "@/components/pages/home/RecentWork";
import TestimonialArea from "@/components/pages/home/TestimonialArea";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div>
        <ExploreService />
      </div>
      <div>
        <RecentWork />
      </div>
      <div>
        <TestimonialArea />
      </div>
    </div>
  );
};
export default HomePage;

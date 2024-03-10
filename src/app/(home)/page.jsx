import Hero from "@/components/pages/home/Hero";
import ExploreService from "@/components/pages/home/ExploreService";
<<<<<<< HEAD
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { service_data } from "@/data/service-data";
=======
import { service_data } from "@/data/home";
>>>>>>> b269093f513750a8dd08c09f2be62175a1435ec7
import React from "react";
import RecentWork from "@/components/pages/home/RecentWork";
import TestimonialArea from "@/components/pages/home/TestimonialArea";
import MoreSales from "@/components/pages/home/MoreSales";
import PriceArea from "@/components/pages/home/PriceArea";
// import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <div className="h-[2000px]">
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
      <div>
        <MoreSales/>
      </div>
      <div>
        <PriceArea/>
      </div>
      <div>
        {/* <Footer/> */}
      </div>
    </div>
  );
};
export default HomePage;

import Hero from "@/components/pages/home/Hero";
import ExploreService from "@/components/pages/home/ExploreService";
import React from "react";
import RecentWork from "@/components/pages/home/RecentWork";
import TestimonialArea from "@/components/pages/home/TestimonialArea";
import MoreSales from "@/components/pages/home/MoreSales";
import PriceArea from "@/components/pages/home/PriceArea";
import FeatursScrollSection from "@/components/pages/home/FeaturesScroll/FeaturesScroll";
import OurExciting from "@/components/pages/home/OurExciting";
import Offer from "@/components/pages/home/Offer";
// import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <div className="xl:-mt-[420px] lg:-mt-[720px] -mt-[480px] max-md:hidden block">
        <FeatursScrollSection />
      </div>
      <OurExciting />
      <Offer />
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
        <MoreSales />
      </div>
      <div>
        <PriceArea />
      </div>
      <div>{/* <Footer/> */}</div>
    </div>
  );
};
export default HomePage;

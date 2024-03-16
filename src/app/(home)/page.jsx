import Hero from "@/components/pages/home/Hero";
import ExploreService from "@/components/pages/home/ExploreService";

import React from "react";
import RecentWork from "@/components/pages/home/RecentWork";
import TestimonialArea from "@/components/pages/home/TestimonialArea";
import MoreSales from "@/components/pages/home/MoreSales";
import PriceArea from "@/components/pages/home/PriceArea";
import Footer from "@/components/footer/Footer";
// import FeatursScrollSection from "@/components/pages/home/FeaturesScroll/FeaturesScroll";
import OurExciting from "@/components/pages/home/OurExciting";
import Offer from "@/components/pages/home/Offer";
import FeatursScrollSection from "@/components/pages/home/FeaturesScroll/FeaturesScroll";
import HorizontalSwipe from "@/components/others/HorizontalSwipe.jsx/HorizontalSwipe";
import PinScroll from "@/components/others/PinScroll/PinScroll";
// import Footer from "@/components/footer/Footer";

const HomePage = () => {
  
  return (
    <div className="">
      <div>
      <Hero />
      </div>
      <div className="-mt-[480px] hidden lg:block">
        <FeatursScrollSection/>
      </div>
      {/* <div>
        <HorizontalSwipe/>
      </div> */}
      <div  id="features">
        <OurExciting />
      </div>
      <div id="offers">
        <Offer />
      </div>
      <div id="services">
        <ExploreService />
      </div>
      <div>
        {/* <HorizontalSwipe/> */}
      </div>
      <div>
        {/* <PinScroll/> */}
      </div>
      <div id="works">
        <RecentWork />
      </div>
      <div id="clients">
        <TestimonialArea />
      </div>
      <div id="sales">
        <MoreSales />
      </div>
      <div id="price">
        <PriceArea />
      </div>
      <div>{/* <Footer/> */}</div>
    </div>
  );
};
export default HomePage;

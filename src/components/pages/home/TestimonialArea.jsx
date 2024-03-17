import StarIcon from "@/components/custom-icons/StarIcon";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import TestimonialSlider from "@/components/slider/TestimonialSlider/TestimonialSlider";
import React from "react";

const TestimonialArea = () => {
  return (
    <div className="py-24" >
      <div  
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true" className="text-center">
        <HeaderTitle
          title={"Word From Our Client"}
          subTitle={"5 Stars Based on 4,700+ Real Users Reviews"}
        />
        <div 
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-once="true"
        className="text-center flex justify-center gap-2 py-4">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div 
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-once="true"
        >
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;

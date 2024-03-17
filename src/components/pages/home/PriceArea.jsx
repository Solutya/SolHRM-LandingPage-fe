import PriceTabCards from "@/components/cards/PriceTabCards/PriceTabCards";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import React from "react";

const PriceArea = () => {
  return (
    <div className="m-[5%] bg-[#f6f5fa] rounded-3xl">
      <div className="p-[5%] ">
        <div 
         data-aos="fade-up"
         data-aos-duration="1000"
         
         data-aos-once="true"
        className="text-center">
          <HeaderTitle
            title={
              <>
                Deliver End-To-End Retail
                <br /> Billing & Solutions
              </>
            }
            subTitle={"Choose a plan tailored to your needs"}
          />
        </div>
        {/* tabs section */}
        <div  data-aos="fade-right"
        data-aos-duration="800"
        
        data-aos-once="true" className="">
            <PriceTabCards/>
        </div>
      </div>
    </div>
  );
};

export default PriceArea;

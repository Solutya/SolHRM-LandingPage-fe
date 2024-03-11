import PriceTabCards from "@/components/cards/PriceTabCards/PriceTabCards";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import React from "react";

const PriceArea = () => {
  return (
    <div className="m-[5%] bg-[#f6f5fa] rounded-3xl">
      <div className="p-[5%] ">
        <div className="text-center">
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
        <div className=" xl:w-[1180px] mx-auto">
            <PriceTabCards/>
        </div>
      </div>
    </div>
  );
};

export default PriceArea;

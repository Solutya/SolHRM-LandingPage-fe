import React from "react";
import HeaderTitle from "../../headerTitle/HeaderTitle";
import Image from "next/image";
import { brandData } from "@/data/brandData";

const TrustedBrands = () => {
  return (
    <div className="py-20 my-10">
      <div className="text-center">
        <HeaderTitle title={"Trusted by Thousands Business"} subTitle={"More than 100,000+ teams are using Softuch"} />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 2xl:w-[1180px] w-[80%] mx-auto py-16">
        {
            brandData.map(item=>(
                <div key={item.id} className="p-8 px-10 shadow-2xl shadow-gray-200 rounded-lg w-fit">

                    <Image  src={item.img_1} alt="brands" width={100} height={100}></Image>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default TrustedBrands;

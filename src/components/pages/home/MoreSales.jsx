import BlueBtn from "@/components/btn's/BlueBtn";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import Link from "next/link";
import React from "react";
// img and icon import here
import bg_right_img from "../../../../public/assets/images/rank/rank-bg-shape.png";
import top_img_1 from "../../../../public/assets/images/rank/rank-cup.png";
import img_1 from "../../../../public/assets/images/rank/amazon.png";
import img_2 from "../../../../public/assets/images/rank/ebay.png";
import img_3 from "../../../../public/assets/images/rank/walmart.png";
import img_4 from "../../../../public/assets/images/rank/shopify.png";
import Image from "next/image";
// rank_data
const rank_data = [
  {
    id: 1,
    clg_1: "one",
    clg_2: "tp-rank__cup",
    top_img: top_img_1,
    count: 1,
    img: img_1,
    // clg_3: "",
    domain: "amazon.com",
    visitors: "2.4B Visits",
  },
  {
    id: 2,
    clg_1: "two",
    // clg_2: "",
    // top_img: "",
    count: 2,
    img: img_2,
    // clg_3: "",
    domain: "ebay.com",
    visitors: "700.2M Visits",
  },
  {
    id: 3,
    clg_1: "three",
    // clg_2: "",
    // top_img: "",
    count: 3,
    img: img_3,
    // clg_3: "",
    domain: "walmart.com",
    visitors: "489.6M Visits",
  },
  {
    id: 4,
    clg_1: "four",
    // clg_2: "",
    // top_img: "",
    count: 4,
    img: img_4,
    // clg_3: "",
    domain: "shopify.com",
    visitors: "386.6M Visits",
  },
];

const MoreSales = () => {
  return (
    <div className="py-24 overflow-x-hidden lg:m-[5%] lg:grid  lg:grid-cols-3 xl:grid-cols-2 flex flex-col-reverse justify-between xl:w-[1180px] xl:mx-auto ">
      <div 
       data-aos="fade-right"
       data-aos-duration="1000"
       data-aos-once="true"
      className="space-y-4 bg-yellow- pl-4 md:py-6 py-28 mobile:py-16">
        <p className="uppercase bg-[#f6f5fa] text-myBlue text-sm font-semibold rounded-full p-2 px-4 w-fit ">
          Key Benfits
        </p>
        <h2 className="text-[33px] md:text-[38px] xl:text-[55px] font-bold">
          Get more Sales <br /> by Improving <br /> Results
        </h2>
        <div className="w-fit pt-3">
          <BlueBtn>Explore More</BlueBtn>
        </div>
      </div>
      <div  
       data-aos="fade-left"
       data-aos-duration="1000"
       data-aos-once="true"
      className="relative h-[600px] md:h-auto lg:col-span-2 xl:col-span-1 lg:ml-20 px-2 ">
        <div className="mx-auto w-fit py-4">
          <Image src={bg_right_img} alt="bg-right-img" ></Image>
        </div>
        <div className="absolute top-0 mx-auto inset-x-0  w-full h-[80%] py-4 flex flex-wrap lg:flex-nowrap justify-center items-center text-center xl:  2xl:w-[82%] px-4 gap-2 sm:gap-0 ">
          {rank_data.map((item, i) => (
            <div
              key={i}
              className={`rank-item ${item.clg_1}  rounded-3xl p-2 bg-white h-[300px] drop-shadow-2xl transition duration-500 hover:-translate-x-4 hover:-translate-y-6 `}
            >
              <div className="relative flex flex-col justify-between h-full py-4 w-[120px] ">
                {item.top_img && (
                  <div className="absolute -top-6 border-4 border-purple-600 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full w-fit ">
                    <span>
                      <Image src={item.top_img} alt="top-image" />
                    </span>
                  </div>
                )}

                <div className="pt-5 flex items-center justify-center">
                  <i className="text-2xl text-gray-300 mr-2">#</i>
                  <span className="text-[66px] font-[500]">{item.count}</span>
                </div>
                <div className="bg-white rounded-full p-2  mx-auto border ">
                  <span>
                    <Image src={item.img} alt="icon" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <Link href="#" className="font-semibold">
                    {item.domain}{" "}
                  </Link>
                  <span className="text-sm">{item.visitors}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreSales;

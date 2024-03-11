import CircleBtn from "@/components/btn's/CircleBtn";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import { service_data } from "@/data/service-data";
import Image from "next/image";
import Link from "next/link";

const ExploreService = () => {
  const myData = service_data;

  return (
    <div className="relative mt-20  ">
      <div className="text-center pb-[50px]">
        <HeaderTitle
          title={"Explore Our Data Services"}
          subTitle={"More than 15,000 companies trust and choose Itech"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:w-[1180px] mx-auto gap-6">
        {myData?.map((item, i) => (
          <div key={i} className="">
            <div className="border rounded-3xl  md:w-fit relative w-full max-w-96 mx-auto p-10 hover:shadow-2xl hover:shadow-gray-300 transition duration-300">
              <div className="mb-6">
                <Image
                  src={item.icon.src}
                  width={46}
                  height={46}
                  alt="icons"
                  className="aspect-square object-contain"
                ></Image>
              </div>
              <div className="">
                <span className="font-bold text-[22px] pb-[5px] hover:text-amber-500 transition duration-500 cursor-pointer text-wrap">
                  {item.title}
                </span>
                <h3 className="py-[7px] mb-[16px] font-[400] text-primary-2 text-[16px]">
                  <Link href="">{item.description}</Link>
                </h3>
                <div className="">
                  <Link href="#">
                    <CircleBtn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-[url('/assets/images/service/sv-bg.jpg')] rounded-3xl p-10 pb-0 z-20 md:w-fit relative w-full max-w-96 mx-auto bg-cover">
          <div className="text-white">
            <h2 className="font-bold  text-[30px]">
              Data Analysis Tools & Methods
            </h2>
            <p className="text-primary-2">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <Link href="">
              <button className="p-2 px-6 font-semibold bg-orange-400  rounded-3xl">
                Work With Us
              </button>
            </Link>
          </div>
          <div className="z-10 w-fit ">
            <Image
              src={"/assets/images/service/sv-dashbord.png"}
              alt="demo"
              width={240}
              height={100}
              className="w-auto float-right mt-10 -mb-2 end-0 pt-4"
            ></Image>
          </div>
        </div>
      </div>
      <div className="border-b-[60px] lg:border-b-[80px] border-[#f6f5fa] absolute bottom-0 w-full"></div>
    </div>
  );
};

export default ExploreService;

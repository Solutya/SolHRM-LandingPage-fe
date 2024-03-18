import CircleBtn from "@/components/btn's/CircleBtn";
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { service_data } from "@/data/service-data";
import Image from "next/image";
import Link from "next/link";

const ExploreService = () => {
  const myData = service_data;

  return (
      <SectionWrapper>
    <div className="relative pt-24">
      <div
       data-aos="fade-up"
       data-aos-duration="1000"
       
       data-aos-once="true"
      className="text-center ">
        <HeaderTitle
          title={"Explore Our Data Services"}
          subTitle={"More than 15,000 companies trust and choose Itech"}
        />
      </div>
      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {myData?.map((item, i) => (
          <div
          data-aos="fade-up"
          data-aos-duration={800 + i*200}       
          data-aos-once="true"
          key={i} className="">
            <div className="border rounded-3xl  md:w-fit relative w-full max-w-96 mx-auto p-10 hover:shadow-2xl hover:shadow-gray-300  transition duration-300 group">
              <div className="mb-6">
                <Image
                  src={item.icon.src}
                  width={46}
                  height={46}
                  alt="icons"
                  className="group-hover:[transform:rotateY(180deg)] transition-all duration-500 aspect-square object-contain"
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
        <div  
        data-aos="fade-up"
        data-aos-duration="1400"
        data-aos-once="true" 
        className="bg-[url('/assets/images/service/sv-bg.jpg')] rounded-3xl  pb-0 z-20 md:w-[338px] relative w-full mx-auto bg-cover border   max-w-96  hover:shadow-gray-300  transition duration-300 group overflow-hidden">
          <div className="text-white p-10 space-y-4">
            <h2 className="font-bold  text-[30px]">
              Data Analysis Tools & Methods
            </h2>
            <p className="text-primary-2 pb-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <Link href="" >
              <button className="p-2 px-6 font-semibold bg-orange-400  rounded-3xl">
                Work With Us
              </button>
            </Link>
          </div>
          <div className=" overflow-hidden">
            <Image
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-once="true"
              src={"/assets/images/service/sv-dashbord.png"}
              alt="demo"
              width={240}
              height={100}
              className="w-full ml-20 -mb-10"
            ></Image>
          </div>
        </div>
      </div>
    </div>
      </SectionWrapper>
  );
};

export default ExploreService;

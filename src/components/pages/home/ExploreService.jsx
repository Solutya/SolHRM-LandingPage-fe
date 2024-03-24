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
          className="text-center "
        >
          <HeaderTitle
            title={"Explore Our SOLHRM Features"}
            subTitle={"Join the growing community of HR Innovation"}
          />
        </div>
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6 parent">
          {myData?.map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration={`${1000 + (i * 200) }`}
              data-aos-once="true"
              key={i}
              className=" last:bg-red-500"
            >
              <div className="border rounded-3xl  md:w-fit relative w-full max-w-96 mx-auto p-10 hover:shadow-2xl hover:shadow-gray-300  transition duration-300 group ">
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
                  <span className="font-bold text-[20px] pb-[5px] hover:text-amber-500 transition duration-500 cursor-pointer text-wrap">
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
            data-aos-duration="2400"
            data-aos-once="true"
            className="bg-[url('/assets/images/service/sv-bg.jpg')] rounded-3xl  pb-0 z-20 md:w-[338px] relative w-full mx-auto bg-cover border md:w-fit   max-w-96  hover:shadow-gray-300  transition duration-300 group overflow-hidden"
          >
            <div className="text-white p-10 ">
              <h2 className="font-bold text-[30px]">
                User Friendly HR Dashboard
              </h2>
              <p className="text-primary-2 pb-4">
                Manage all you dashboard features in simple ui 
              </p>
              <Link href="/price">
                <button className="p-2 px-6 font-semibold bg-orange-400  rounded-3xl transition duration-500 hover:bg-orange-500 hover:scale-105">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className=" overflow-hidden">
              <Image
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1400"
                data-aos-once="false"
                src={"/assets/images/service/sv-dashbord.png"}
                alt="demo"
                width={320}
                height={120}
                className="w-full h-full ml-16 -mb-10"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExploreService;

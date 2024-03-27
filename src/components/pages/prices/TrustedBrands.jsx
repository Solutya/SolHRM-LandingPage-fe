import HeaderTitle from "../../headerTitle/HeaderTitle";
import Image from "next/image";
import { brandData } from "@/data/brandData";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";

const TrustedBrands = () => {
  return (
    <SectionWrapper>
      <div className="py-20 my-10 space-y-16">
        <div className="text-center">
          <HeaderTitle
            title={"Trusted by Thousands Business"}
            subTitle={"More than 100 teams are using SolHRM"}
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center ">
          {brandData.map((item) => (
            <div key={item.id} className="shadow-xl rounded-lg w-[173px] hover:scale-110 transition duration-200 h-[100px] flex">
              <Image
                src={item.img_1}
                alt="brands"
                width={173}
                height={100}
                className="w-fit p-4 my-auto "
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TrustedBrands;

import HeaderTitle from '@/components/headerTitle/HeaderTitle';
import ProjectSlider from '@/components/slider/ProjectSlider/ProjectSlider';
import React from 'react';
import SectionWrapper from "@/components/wrapper's/SectionWrapper";

const RecentWork = () => {
    return (
        <div className='-mt-12 py-28 bg-[#f6f5fa] pb-[80px]' id="projects">

<SectionWrapper>
      
      <div 
       data-aos="fade-up"
       data-aos-duration="1000"
       data-aos-once="true"
      className="space-y-4  py-28 mobile:py-16">
        <p className="uppercase bg-white text-myBlue text-sm font-semibold rounded-full p-2 px-4 w-fit overflow-hidden ">
          Recent Project
        </p>
        <h2 className="text-[33px] md:text-[38px] xl:text-[48px] font-bold">
        Check Solutya’s Recent Projects
        </h2>
        {/* <div className="w-fit pt-3">
          <BlueBtn>Explore More</BlueBtn>
        </div> */}
      </div>
      </SectionWrapper>
           {/* <SectionWrapper>
            <div
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true"
            className='w-fit text-wrap py-20 '>
                <HeaderTitle title={`Check Solutya’s Recent Projects`}/>
            </div>
            </SectionWrapper> */}
            <div  data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true">
                <ProjectSlider/>
            </div>
        </div>
    );
};

export default RecentWork;
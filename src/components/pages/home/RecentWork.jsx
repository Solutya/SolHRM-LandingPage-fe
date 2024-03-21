import HeaderTitle from '@/components/headerTitle/HeaderTitle';
import ProjectSlider from '@/components/slider/ProjectSlider/ProjectSlider';
import React from 'react';
import SectionWrapper from "@/components/wrapper's/SectionWrapper";

const RecentWork = () => {
    return (
        <div className='-mt-12 py-24 bg-[#f6f5fa] pb-[80px]' id="projects">
           <SectionWrapper>
            <div
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true"
            className='w-fit text-wrap pb-10'>
                <HeaderTitle title={`Check Solutya’s Recent Projects`}/>
            </div>
            </SectionWrapper>
            <div  data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true">
                <ProjectSlider/>
            </div>
        </div>
    );
};

export default RecentWork;
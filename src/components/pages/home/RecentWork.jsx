import HeaderTitle from '@/components/headerTitle/HeaderTitle';
import ProjectSlider from '@/components/slider/ProjectSlider/ProjectSlider';
import React from 'react';

const RecentWork = () => {
    return (
        <div className='-mt-12 py-24 bg-[#f6f5fa] pb-[80px]' id="projects">
            <div
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true"
            className='md:px-[10%] w-fit text-wrap xl:w-[54%] lg:w-[66%]  pb-10'>
                <HeaderTitle title={`Check Solutya’s Recent Work`}/>
            </div>
            <div  data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true">
                <ProjectSlider/>
            </div>
        </div>
    );
};

export default RecentWork;
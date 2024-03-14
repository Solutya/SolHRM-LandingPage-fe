import HeaderTitle from '@/components/headerTitle/HeaderTitle';
import ProjectSlider from '@/components/slider/ProjectSlider/ProjectSlider';
import React from 'react';

const RecentWork = () => {
    return (
        <div className='bg-[#f6f5fa] pb-[80px]'>
            <div className='md:px-[10%] w-fit text-wrap xl:w-[54%] lg:w-[66%]  pb-10'>
                <HeaderTitle title={`Check Some Of Our Recent Work.`}/>
            </div>
            <div>
                <ProjectSlider/>
            </div>
        </div>
    );
};

export default RecentWork;
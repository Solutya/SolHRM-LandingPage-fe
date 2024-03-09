import HeaderTitle from '@/components/headerTitle/HeaderTitle';
import ProjectSlider from '@/components/slider/ProjectSlider/ProjectSlider';
import React from 'react';

const RecentWork = () => {
    return (
        <div className='bg-[#f6f5fa] pb-[60px]'>
            <div className=' px-[10%] w-fit text-wrap lg:w-[50%] pb-10'>
                <HeaderTitle title={`Check Some Of Our Recent Work.`}/>
            </div>
            <div>
                <ProjectSlider/>
            </div>
        </div>
    );
};

export default RecentWork;
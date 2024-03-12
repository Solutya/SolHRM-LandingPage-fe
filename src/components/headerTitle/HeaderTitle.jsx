import React from "react";

const HeaderTitle = ({title, subTitle}) => {
    return (
        <div>
           <h2 className='font-bold lg:text-[50px] text-[40px]'>{title}</h2>
           <h4 className='lg:text-[18px] text-gray-500'>{subTitle}</h4>
        </div>
    );
};

export default HeaderTitle;

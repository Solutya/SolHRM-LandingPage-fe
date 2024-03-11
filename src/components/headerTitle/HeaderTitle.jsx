import React from "react";

const HeaderTitle = ({title, subTitle}) => {
    return (
        <div className="px-6 md:px-0">
           <h2 className='font-bold text-[33px] md:text-[50px] '>{title}</h2>
           <h4 className='text-[18px] text-gray-500 pt-4'>{subTitle}</h4>
        </div>
    );
};

export default HeaderTitle;

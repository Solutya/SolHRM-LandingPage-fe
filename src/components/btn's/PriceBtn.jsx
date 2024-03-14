import React from 'react';

const PriceBtn = ({children}) => {
    return (
        <div className='relative'>
            <button>{children}</button>
            <button className='bg-myBlue'>Purchase Now</button>
        </div>
    );
};

export default PriceBtn;
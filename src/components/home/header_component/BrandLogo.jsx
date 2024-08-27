import React from 'react';
import logo from "../../../assets/images/ha_logo.png"

const BrandLogo = () => {
    return (
        <img src={logo} alt="logo" className='lg:h-20 h-10  border-black object-cover w-20 lg:w-44'/>
    );
};

export default BrandLogo;

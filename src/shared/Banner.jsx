import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";





const Banner = () => {
    return (
        <div className='bg-none sm:py-[50px] sm:px-[100px] py-10 font-Poppins w-full xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 mx-auto text-center text-[#555555] text-xl leading-tight gap-20'>
                <div>
                <TbTruckDelivery className='h-20 w-20 bg-black text-white p-3 rounded-full border-8 border-white/50 mb-5 mx-auto' />
                    <p className='text-black text-xl font-semibold font-Poppins leading-7'>FREE AND FAST DELIVERY</p>
                    <p className='text-center text-black text-sm font-normal font-Poppins leading-[21px]'>Free delivery for all orders over Rs 2000</p>
                </div>
                <div>
                <RiCustomerService2Line className='h-20 w-20 bg-black text-white p-3 rounded-full border-8 border-white/50 mb-5 mx-auto' />
                    <p className='text-black text-xl font-semibold font-Poppins leading-7'>24/7 CUSTOMER SERVICE</p>
                    <p className='text-center text-black text-sm font-normal font-Poppins leading-[21px]'>Friendly 24/7 customer support</p>
                </div>
                <div>
                <AiOutlineSafetyCertificate className='h-20 w-20 bg-black text-white p-3 rounded-full border-8 border-white/50 mb-5 mx-auto' />
                    <p className='text-black text-xl font-semibold font-Poppins leading-7'>MONEY BACK GUARANTEE</p>
                    <p className='text-center text-black text-sm font-normal font-Poppins leading-[21px]'>We return money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Banner

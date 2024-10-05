import React from 'react'
import ArrivalCards from './ArrivalSections'

const NewArrivalSection = ({ title, subtitle }) => {

    return (
        <div className="mt-5 sm:mt-12">
            <div className="h-10 justify-start items-center gap-4 inline-flex xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
                <div className="w-5 h-10 relative">
                    <div className="w-5 h-10 left-0 top-0 absolute bg-[#db4444] rounded" />
                </div>
                <div className="text-[#db4444] text-base font-semibold font-Poppins leading-tight">{subtitle}</div>
            </div>
            <div className='flex mt-[16px]'>
                <div className='flex  justify-between w-full xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]'>
                    <h2 className="text-black text-xl sm:text-3xl md:text-4xl font-semibold font-Inter sm:leading-[48px] tracking-wider">
                        {title}
                    </h2>
                </div>
            </div>
            <div className='sm:mt-[10px]'>
                <ArrivalCards />
            </div>
        </div>
    )
}

export default NewArrivalSection

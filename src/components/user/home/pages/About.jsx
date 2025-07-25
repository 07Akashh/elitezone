import React from 'react';
import Banner from '../../../../shared/Banner';
import Breadcrumbs from '../../../../shared/Breadcrumbs';
import { TbMoneybag } from "react-icons/tb";
import { HiOutlineCurrencyRupee, HiOutlineShoppingBag } from "react-icons/hi2";
import { RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { BiStoreAlt } from "react-icons/bi";



const About = () => {
    return (
        <div className="lg:mt-[80px] mb-[100px]">
            <div className="xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
                <Breadcrumbs />
            </div>
            <div className="space-y-[140px]">
                <div className="flex flex-col md:flex-row items-center gap-8 xl:pl-[135px] lg:pl-[100px] md:pl-[60px] pl-[20px] sm:pr-0 pr-[20px]">
                    <div className="md:w-1/2 my-auto">
                        <h2 className="text-[54px] font-Inter tracking-[3.24px] font-bold text-black mb-[40px]">Our Story</h2>
                        <p className="text-gray-600 text-base font-Poppins leading-relaxed">
                            Launched in 2024, EliteZone is South Asia’s premier online shopping marketplace with an active presence in India. Supported by wide range of tailored marketing, data and service solutions, EliteZone has 100+ sellers and 300 brands and serves 3 millions customers across the region.
                        </p>
                        <br />
                        <p className="text-gray-600 font-Poppins text-base leading-relaxed">
                            EliteZone has more than 1 Million products to offer, growing at a very fast. EliteZone offers a diverse assortment in categories ranging  from consumer.
                        </p>
                    </div>
                    <div className="md:w-1/2 h-[609px]">
                        <img
                            src="https://img.freepik.com/premium-photo/woman-using-cell-phone-business-office_961875-276918.jpg?ga=GA1.1.1665155854.1721153222&semt=ais_hybrid"
                            alt="Our Story"
                            className="w-full object-cover rounded-l h-[609px]"
                        />
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
                    <div className="bg-white w-[270px] py-5 mx-auto h-[230px] border rounded shadow text-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out group">
                        <div className="p-2 bg-black/50 group-hover:bg-white/50 h-20 w-20 rounded-full mb-[24px] mx-auto transition-all duration-300 ease-in-out">
                            <BiStoreAlt className="h-full w-full group-hover:bg-white group-hover:text-black bg-black text-white py-3 rounded-full mx-auto transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-all duration-300 ease-in-out">100+</div>
                        <p className="text-gray-600 text-sm group-hover:text-white transition-all duration-300 ease-in-out">Brand Sells active on our site</p>
                    </div>

                    <div className="bg-white w-[270px] py-5 mx-auto h-[230px] border rounded shadow text-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out group">
                        <div className="p-2 bg-black/50 group-hover:bg-white/50 h-20 w-20 rounded-full mb-[24px] mx-auto transition-all duration-300 ease-in-out">
                            <HiOutlineCurrencyRupee className="h-full w-full group-hover:bg-white group-hover:text-black bg-black text-white p-2 rounded-full mx-auto transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-all duration-300 ease-in-out">1.0K</div>
                        <p className="text-gray-600 text-sm group-hover:text-white transition-all duration-300 ease-in-out">Monthly product sales</p>
                    </div>

                    <div className="bg-white w-[270px] py-5 mx-auto h-[230px] border rounded shadow text-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out group">
                        <div className="p-2 bg-black/50 group-hover:bg-white/50 h-20 w-20 rounded-full mb-[24px] mx-auto transition-all duration-300 ease-in-out">
                            <HiOutlineShoppingBag className="h-full w-full group-hover:bg-white group-hover:text-black bg-black text-white py-3 rounded-full mx-auto transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-all duration-300 ease-in-out">3.8K</div>
                        <p className="text-gray-600 text-sm group-hover:text-white transition-all duration-300 ease-in-out">Customers active on our site</p>
                    </div>

                    <div className="bg-white w-[270px] py-5 mx-auto h-[230px] border rounded shadow text-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out group">
                        <div className="p-2 bg-black/50 group-hover:bg-white/50 h-20 w-20 rounded-full mb-[24px] mx-auto transition-all duration-300 ease-in-out">
                            <TbMoneybag className="h-full w-full group-hover:bg-white group-hover:text-black bg-black text-white p-3 rounded-full mx-auto transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-all duration-300 ease-in-out">&#8377;10L+</div>
                        <p className="text-gray-600 text-sm group-hover:text-white transition-all duration-300 ease-in-out">Annual gross sales on our site</p>
                    </div>
                </div>


                {/* Founder and Co-founder Section */}
                <div className="flex flex-col md:flex-row items-center justify-around gap-8 xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
                    <div className="tr">
                        <img
                            src="https://res.cloudinary.com/dmao0koo4/image/upload/v1728128463/uploads/tmp-3-1728128460503_rlmmux.jpg"
                            alt="Founder"
                            className="w-[370px] h-[430px] object-cover rounded mx-auto"
                        />
                        <h3 className="text-[32px] font-Inter font-normal leading-[30px] tracking-wider mt-[32px]">Rahul</h3>
                        <p className=" text-black text-base font-normal font-Poppins leading-normal">Co-Founder</p>
                        <div className="flex justify-start gap-4 mt-[5px]">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl cursor-pointer">
                                <RiTwitterLine />
                            </a>
                            <a href="https://www.instagram.com/rahulk.softdev" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl cursor-pointer">
                                <RiInstagramLine />
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-kumar-2bb72b29b/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl cursor-pointer" >
                                <RiLinkedinLine />
                            </a>
                        </div>
                    </div>
                    <div className="t">
                        <img
                            src="https://res.cloudinary.com/dmao0koo4/image/upload/v1728128005/uploads/tmp-1-1728128004401_il6oxm.jpg"
                            alt="Co-Founder"
                            className="w-[370px] h-[430px] object-cover rounded mx-auto"
                        />
                        <h3 className="text-[32px] font-Inter font-normal leading-[30px] tracking-wider mt-[32px]">Aditya Pandey</h3>
                        <p className="text-black text-base font-normal font-Poppins leading-normal">Co-Founder</p>
                        <div className="flex justify-start gap-4 mt-[5px]">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl cursor-pointer">
                                <RiTwitterLine />
                            </a>
                            <a href=" https://www.instagram.com/aditya_p____0_9/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl cursor-pointer">
                                <RiInstagramLine />
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-kumar-2bb72b29b/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl cursor-pointer">
                                <RiLinkedinLine />
                            </a>
                        </div>
                    </div>
                    <div className="t">
                        <img
                            src="https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg"
                            alt="Co-Founder"
                            className="w-[370px] h-[430px] object-cover blur-[1px]  rounded mx-auto"
                        />
                        <h3 className="text-[32px] font-Inter font-normal leading-[30px] tracking-wider mt-[32px]">Vacant</h3>
                        <p className="text-black text-base font-normal font-Poppins leading-normal">Media & Marketing</p>
                        <div className="flex justify-start gap-4 mt-[5px]">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl cursor-pointer">
                                <RiTwitterLine />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl cursor-pointer">
                                <RiInstagramLine />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl cursor-pointer">
                                <RiLinkedinLine />
                            </a>
                        </div>
                    </div>
                </div>
                <Banner />
            </div>
        </div>
    )
}

export default About;

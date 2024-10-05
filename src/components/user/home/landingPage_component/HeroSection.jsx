import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const { categories } = useSelector((state) => state.category);

    const handleCategoryClick = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <div className="w-full sm:w-1/4 sm:h-[250px] lg:h-[400px] font-Poppins px-5 sm:px-0 lg:w-1/4 pt-[10px] sm:pt-[40px] no-scrollbar h-full overflow-x-scroll sm:border-r">
            <ul>
                {categories.map((category, index) => (
                    <li key={category._id} className="mb-1">
                        <button
                            onClick={() => handleCategoryClick(index)}
                            className="w-full text-sm lg:text-base text-left py-1 overflow-hidden flex justify-between transition sm:pr-[16px]"
                        >
                            {category.name}
                            <span
                                className={` transition-transform duration-100 ${openCategory === index ? '-rotate-90' : 'rotate-0'}`}
                            >
                                <MdOutlineArrowForwardIos />
                            </span>
                        </button>

                        <div
                            className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${openCategory === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <ul>
                                {category.subCategories.map((item) => (
                                    <li key={item._id} className="py-1 text-sm lg:text-base hover:text-[#DB4444] font-Poppins transition">
                                        <Link to={`/${category._id}/${item._id}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const HeroSection = () => {
    const banners = [
        'https://t4.ftcdn.net/jpg/03/47/63/23/240_F_347632388_ss2qMVaweDC5h6IBER0IZeJCppcu5aCn.jpg',
        'https://t3.ftcdn.net/jpg/06/31/95/44/240_F_631954462_8g5iHtytRsqi8AOi2yuOqv4jbdk6y82S.jpg',
        'https://t4.ftcdn.net/jpg/09/30/37/15/240_F_930371559_TX7wAb2sQJLfPl5jHU8R8C6smnpzeBGH.jpg',
        'https://t3.ftcdn.net/jpg/08/22/75/64/240_F_822756465_ehiLl65YaPrp4NQQ8KLyySUqUM1fLeAn.jpg',
    ];
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="xl:px-[135px] lg:px-[100px] md:px-[60px] flex flex-col-reverse md:flex-row justify-between h-full">
            <Sidebar className="sm:w-1/4 lg:w-1/5" />
            <div className="w-full sm:w-3/4 rounded lg:w-4/5 sm:pl-[45px] sm:pt-[40px]">
                <div className="w-full relative overflow-hidden">
                    <div className="relative w-full h-[200px] lg:h-[350px] flex transition-transform duration-3000 ease-in-out"
                        style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
                        {banners.map((banner, index) => (
                            <div
                                key={index}
                                className="w-full h-full bg-cover bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${banner})` }}
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-[12px]">
                        {banners.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentBanner === index ? 'bg-[#DB4444] border-2 border-white' : 'bg-white/50'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;





// {/* <div className="relative">
// <div className="flex justify-center flex-col md:flex-row items-center md:gap-x-24 lg:gap-x-0 xl:gap-x-24 2xl:gap-x-48 md:mx-8  md:max-h-screen md:mb-5 lg:mb-20">
//     <div className="w-full md:w-[200px] mr-2 lg:mr-0 z-10 xl:w-3/5 lg:w-[480px] mb-10 md:mb-0 ">
//         <h1 className="hidden md:block text-[38px] w-[350px] border-black lg:text-[45px] lg:w-auto xl:text-[80px] mb-5 text-left font-BerkshireSwash">
//             Empowering Your Modesty with Fashion!
//         </h1>
//         <p className="hidden lg:block text-[16px] md:text-[18px] font-PlayfairDisplay ml-2 md:ml-10 lg:ml-0 xl:ml-10 mb-10 md:mb-20 text-left">
//             Explore the largest collection of Saudi luxury abayas at Humaira
//             Abayas. Whether you're looking for trendy or classic designs, our selection offers something
//             for every preference. Enjoy super-fast service with updates within 24 hours. </p>
//         <button
//             onClick={handleExploreClick}
//             className="hidden lg:flex bg-[#754F23] text-white font-PlayfairDisplay py-2 px-4 ml-2 md:ml-20 rounded-xl mb-8 text-center items-center justify-start"
//         >
//             Explore <GoArrowRight className="ml-2 h-[24px] w-[24px] arrow-auto-animate" />
//         </button>
//     </div>

//     <div className="relative border-black">
//         <div className="xl:w-[350px] h-full xl:h-[550px] border border-[#754F23] rounded-t-[250px] rotate-[-8.13deg] z-10 flex">
//             <div className="top-0 left-0 hidden sm:block sm:w-full sm:h-full -translate-x-[120px] before:absolute before:content-[''] before:w-[251px] before:h-[523px] before:bg-[#c0aea062] before:blur-[40px] rotate-[8.13deg] before:rounded-full z-[-100] border-black"></div>
//             <div className="sm:relative">
//                 <div className="lg:w-[350px] w-[250px] h-[400px] md:w-[280px] rotate-[8.13deg] md:h-[400px] lg:h-[550px] flex justify-center md:justify-end bg-[#754F23] rounded-t-[250px] pl-40px overflow-visible border-black">
//                     <img src='https://res.cloudinary.com/dmao0koo4/image/upload/v1722575805/Rectangle_325-removebg-preview_1_fisyyq.png' alt="Fashion" className="md:absolute translate-x-10 sm:translate-x-0 bottom-0 h-[400px] md:h-[500px] lg:h-[635px] w-[160px] sm:w-[530px] object-cover" />
//                     <h1 className="sm:hidden absolute bottom-[25%] left-1/2 transform -translate-x-1/2 text-white text-[24px] w-[90%] text-left font-BerkshireSwash">
//                         Empowering Your Modesty with Fashion!
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// <p className="lg:hidden text-[12px] mt-5 sm:mt-0 sm:text-[18px] mb-5 font-PlayfairDisplay ml-2 sm:ml-10 md:mb-5 text-left">  Explore the largest collection of Saudi luxury abayas at Humaira
//     Abayas. Whether you're looking for trendy or classic designs, our selection offers something
//     for every preference. Enjoy super-fast service with updates within 24 hours.
// </p>
// <div className='flex justify-center sm:justify-start'>
//     <button
//         onClick={handleExploreClick}
//         className="lg:hidden flex bg-[#754F23] text-white font-PlayfairDisplay py-2 px-4 ml-2 sm:ml-20 rounded-xl md:mb-36 text-center items-center justify-center sm:justify-start"
//     >
//         Explore <GoArrowRight className="ml-2 h-[24px] w-[24px] arrow-auto-animate" />
//     </button>
// </div>
// </div> */}

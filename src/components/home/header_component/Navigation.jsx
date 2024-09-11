import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Accordion = ({ title, isOpen, onToggle, children }) => (
    <div className="relative">
        <button
            onClick={onToggle}
            className="flex items-center w-full gap-1 text-left py-1 hover:text-gray-700"
        >
            {title}
        </button>
        {isOpen && (
            <div className="ml-4 mt-2">
                {children}
            </div>
        )}
    </div>
);

const abayaData = [
    { name: 'Nida Fabric', catId: 'abayas-001', subCatId: 'nida-fabric' },
    { name: 'TikTok Fabric', catId: 'abayas-001', subCatId: 'tiktok-fabric' },
    { name: 'Harira Fabric', catId: 'abayas-001', subCatId: 'harira-fabric' },
    { name: 'Shiffon Fabric', catId: 'abayas-001', subCatId: 'shiffon-fabric' },
    { name: 'Silk Shiny Fabric', catId: 'abayas-001', subCatId: 'silk-shiny-fabric' },
    { name: 'Zoom Fabric', catId: 'abayas-001', subCatId: 'zoom-fabric' },
    { name: 'Korean Nida Fabric', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
];

const abayaGroups = [
    abayaData.slice(0, 3),
    abayaData.slice(3, 6),
    abayaData.slice(6),
];

const hijabData = [
    { name: 'Nida Fabric', catId: 'abayas-001', subCatId: 'nida-fabric' },
    { name: 'TikTok Fabric', catId: 'abayas-001', subCatId: 'tiktok-fabric' },
    { name: 'Harira Fabric', catId: 'abayas-001', subCatId: 'harira-fabric' },

];


const hijabGroups = [
    hijabData.slice(0, 3),
    hijabData.slice(3, 6),
    hijabData.slice(6)
];


const accessoriesData = [
    { name: 'Accessories1', catId: 'abayas-001', subCatId: 'nida-fabric' },
    { name: 'Accessories1.1', catId: 'abayas-001', subCatId: 'tiktok-fabric' },
    { name: 'Accessories1.2', catId: 'abayas-001', subCatId: 'harira-fabric' },
    { name: 'Accessories1.3', catId: 'abayas-001', subCatId: 'shiffon-fabric' },
    { name: 'Accessories2', catId: 'abayas-001', subCatId: 'silk-shiny-fabric' },
    { name: 'Accessories2.1', catId: 'abayas-001', subCatId: 'zoom-fabric' },
    { name: 'Accessories2.2', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
    { name: 'Accessories2.3', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
    { name: 'Accessories3', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
    { name: 'Accessories3.1', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
    { name: 'Accessories3.2', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
    { name: 'Accessories3.3', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },



];


const accessoriesGroups = [
    accessoriesData.slice(0, 4),
    accessoriesData.slice(4, 8),
    accessoriesData.slice(8, 12)
];


const Navigation = () => {
    const [showHijabDropdown, setShowHijabDropdown] = useState(false);
    const [showAbayasDropdown, setShowAbayasDropdown] = useState(false);
    const [showAccessoriesDropdown, setShowAccessoriesDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleAccordionToggle = (section) => {
        setOpenAccordion(prev => prev === section ? null : section);
    };

    const handleMouseEnter = (setDropdown) => {
        setDropdown(true);
    };

    const handleMouseLeave = (setDropdown) => {
        setDropdown(false);
    };

    return (
        <nav className='font-PlayfairDisplay text-lg flex space-x-6'>

            {/* Hamburger menu for screens below md */}
            <div className="lg:hidden relative">
                <button onClick={toggleMenu} className="sm:text-2xl focus:outline-none">
                    <FiMenu />
                </button>

                {/* Left-Side Navigation */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="p-5">
                        <button onClick={toggleMenu} className="sm:text-2xl float-end mb-4 focus:outline-none">
                            <AiOutlineClose />
                        </button>
                        <div className="flex mt-5 flex-col space-y-2">
                            <Link to="/" className="hover:text-gray-700">Home</Link>

                            {/* Hijab Accordion */}
                            <Accordion
                                title="Hijab"
                                isOpen={openAccordion === 'hijab'}
                                onToggle={() => handleAccordionToggle('hijab')}
                            >
                                <div className='space-y-2'>
                                {hijabData.map((item)=>
                                <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F]">{item.name}</Link>
                                )}
                                </div>
                            </Accordion>

                            {/* Abayas Accordion */}
                            <Accordion
                                title="Abayas"
                                isOpen={openAccordion === 'abayas'}
                                onToggle={() => handleAccordionToggle('abayas')}
                            >
                                {
                                    abayaData.map((item) =>

                                        <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] mt-2">{item.name}</Link>
                                    )
                                }
                            </Accordion>

                            {/* Accessories Accordion */}
                            <Accordion
                                title="Accessories"
                                isOpen={openAccordion === 'accessories'}
                                onToggle={() => handleAccordionToggle('accessories')}
                            >    <div className="flex flex-col items-center">
                                    <div className="flex flex-col mt-1 space-y-1 text-[#2F2F2F]">

                                        {
                                            accessoriesGroups[0].map((item) =>
                                                <Link to={`/${item.catId}/${item.subCatId}`} className="block">{item.name}</Link>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* Accessories Item 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col mt-1 space-y-1 text-[#2F2F2F]">

                                        {
                                            accessoriesGroups[1].map((item) =>
                                                <Link to={`/${item.catId}/${item.subCatId}`} className="block">{item.name}</Link>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* Accessories Item 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col mt-1 space-y-1 text-[#2F2F2F]">

                                        {
                                            accessoriesGroups[2].map((item) =>
                                                <Link to={`/${item.catId}/${item.subCatId}`} className="block">{item.name}</Link>
                                            )
                                        }
                                    </div>
                                </div>
                            </Accordion>

                            <Link to="/contact" className="hover:text-gray-700">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navigation for larger screens */}
            <div className='hidden lg:flex space-x-6'>
                <Link to="/" className="hover:text-gray-700">Home</Link>
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(setShowHijabDropdown)}
                    onMouseLeave={() => handleMouseLeave(setShowHijabDropdown)}
                >
                    <Link
                        to="/new-arrivals"
                        className="hover:text-gray-700 flex items-center gap-1"
                    >
                        Hijab
                    </Link>
                    <div
                        className={`absolute w-[200px] left-1/2 mt-2 -translate-x-1/2 max-w-[502px] grid grid-cols-1 gap-4 rounded-[10px] bg-white/40 backdrop-blur-[10.80px] shadow-lg p-4 transition-all duration-300 ease-in-out ${showHijabDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
                            }`}
                    >
                        <div className="flex flex-col items-center gap-y-2">
                            {
                                hijabGroups[0].map((item) =>
                                    <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] ">{item.name}</Link>
                                )
                            }
                        </div>

                        {/* uncomment this code when want to increase line */}

                        {/* <div className={`flex flex-col items-center gap-y-2 ${hijabGroups.length === 2 ? '' : 'hidden'} `}>
                            {
                                hijabGroups[1]?.length !== 0 && hijabGroups[1].map((item) =>
                            <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] ">{item.name}</Link>
                                )
                            }
                        </div>
                        <div className={`flex flex-col items-center gap-y-2 ${hijabGroups.length === 3 ? '' : 'hidden'} `}>
                            {
                            hijabGroups[2]?.length !== 0 && hijabGroups[2].map((item) =>
                            <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] ">{item.name}</Link>
                                )
                            }
                        </div> */}
                    </div>
                </div>
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(setShowAbayasDropdown)}
                    onMouseLeave={() => handleMouseLeave(setShowAbayasDropdown)}
                >
                    <Link
                        to="/abayas-001"
                        className="hover:text-gray-700 flex items-center gap-1"
                    >
                        Abayas
                    </Link>
                    <div
                        className={`absolute max-w-[530px] left-1/2 mt-2 -translate-x-1/2 w-[600px] grid grid-cols-3  rounded-[10px] bg-white/40 backdrop-blur-[10.80px] shadow-lg p-4 transition-all duration-300 ease-in-out ${showAbayasDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
                            }`}
                    >
                        <div className="flex flex-col gap-y-2 ">
                            {
                                abayaGroups[0].map((item) =>
                                    <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] ">{item.name}</Link>
                                )
                            }

                        </div>
                        <div className="flex flex-col gap-y-2 ">
                            {
                                abayaGroups[1].map((item) =>
                                    <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] ">{item.name}</Link>
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-y-2 ">
                            {
                                abayaGroups[2].map((item) =>
                                    <Link to={`/${item.catId}/${item.subCatId}`} className="block text-[#2F2F2F] ">{item.name}</Link>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(setShowAccessoriesDropdown)}
                    onMouseLeave={() => handleMouseLeave(setShowAccessoriesDropdown)}
                >
                    <Link
                        to="/accessories"
                        className="hover:text-gray-700 flex items-center gap-1"
                    >
                        Accessories
                    </Link>
                    <div
                        className={`absolute w-[502px] left-1/2 mt-2 max-w-[502px] grid grid-cols-3 gap-4 rounded-[10px] bg-white/40 backdrop-blur-[10.80px] shadow-lg p-4 transition-all duration-300 ease-in-out ${showAccessoriesDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">

                                {
                                    accessoriesGroups[0].map((item) =>
                                        <Link to={`/${item.catId}/${item.subCatId}`} className="block">{item.name}</Link>
                                    )
                                }
                            </div>
                        </div>
                        {/* Accessories Item 2 */}
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                {
                                    accessoriesGroups[1].map((item) =>
                                        <Link to={`/${item.catId}/${item.subCatId}`} className="block">{item.name}</Link>
                                    )
                                }
                            </div>
                        </div>
                        {/* Accessories Item 3 */}
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                {
                                    accessoriesGroups[2].map((item) =>
                                        <Link to={`/${item.catId}/${item.subCatId}`} className="block">{item.name}</Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="hover:text-gray-700 lg:hidden xl:block">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navigation;

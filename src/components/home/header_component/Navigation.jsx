import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Accordion = ({ title, isOpen, onToggle, children }) => (
    <div className="relative">
        <button
            onClick={onToggle}
            className="flex items-center gap-1 w-full text-left p-2 hover:text-gray-700"
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
                                <Link to="/hijab/silk" className="block text-[#2F2F2F]">Silk Hijabs</Link>
                                <Link to="/hijab/cotton" className="block text-[#2F2F2F] mt-2">Cotton Hijabs</Link>
                                <Link to="/hijab/chiffon" className="block text-[#2F2F2F] mt-2">Chiffon Hijabs</Link>
                            </Accordion>

                            {/* Abayas Accordion */}
                            <Accordion
                                title="Abayas"
                                isOpen={openAccordion === 'abayas'}
                                onToggle={() => handleAccordionToggle('abayas')}
                            >
                                <Link to="/abayas-001/nida-fabric" className="block text-[#2F2F2F]">Nida Fabric</Link>
                                <Link to="/abayas-001/tiktok-fabric" className="block text-[#2F2F2F] mt-2">TikTok Fabric</Link>
                                <Link to="/abayas-001/harira-fabric" className="block text-[#2F2F2F] mt-2">Harira Fabric</Link>
                                <Link to="/abayas-001/shiffon-fabric" className="block text-[#2F2F2F] mt-2">Shiffon Fabric</Link>
                                <Link to="/abayas-001/silk-shiny-fabric" className="block text-[#2F2F2F] mt-2">Silk Shiny Fabric</Link>
                                <Link to="/abayas-001/zoom-fabric" className="block text-[#2F2F2F] mt-2">Zoom Fabric</Link>
                                <Link to="/abayas-001/korean-nida-fabric" className="block text-[#2F2F2F] mt-2">Korean Nida Fabric</Link>
                            </Accordion>

                            {/* Accessories Accordion */}
                            <Accordion
                                title="Accessories"
                                isOpen={openAccordion === 'accessories'}
                                onToggle={() => handleAccordionToggle('accessories')}
                            >    <div className="flex flex-col items-center">
                                    <Link to="/accessories/bags" className="block text-[#2F2F2F] ">Accessories1</Link>
                                    <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                        <Link to="/accessories/bags/handbags" className="block">Accessories1.1</Link>
                                        <Link to="/accessories/bags/backpacks" className="block">Accessories1.2</Link>
                                        <Link to="/accessories/bags/totes" className="block">Accessories1.3</Link>
                                    </div>
                                </div>
                                {/* Accessories Item 2 */}
                                <div className="flex flex-col items-center">
                                    <Link to="/accessories/jewelry" className="block text-[#2F2F2F] ">Accessories2</Link>
                                    <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                        <Link to="/accessories/jewelry/necklaces" className="block">Accessories2.1</Link>
                                        <Link to="/accessories/jewelry/rings" className="block">Accessories2.2</Link>
                                        <Link to="/accessories/jewelry/bracelets" className="block">Accessories2.3</Link>
                                    </div>
                                </div>
                                {/* Accessories Item 3 */}
                                <div className="flex flex-col items-center">
                                    <Link to="/accessories/scarves" className="block text-[#2F2F2F] ">Accessories3</Link>
                                    <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                        <Link to="/accessories/scarves/silk" className="block">Accessories3.1</Link>
                                        <Link to="/accessories/scarves/wool" className="block">Accessories3.2</Link>
                                        <Link to="/accessories/scarves/cotton" className="block">Accessories3.3</Link>
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
                        <div className="flex flex-col items-center">
                            <Link to="/hijab/silk" className="block text-[#2F2F2F] ">Silk Hijabs</Link>
                            <Link to="/hijab/cotton" className="block text-[#2F2F2F] mt-2">Cotton Hijabs</Link>
                            <Link to="/hijab/chiffon" className="block text-[#2F2F2F] mt-2">Chiffon Hijabs</Link>
                        </div>
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
                        className={`absolute max-w-[502px] left-1/2 mt-2 -translate-x-1/2 w-[502px] grid grid-cols-3 gap-4 rounded-[10px] bg-white/40 backdrop-blur-[10.80px] shadow-lg p-4 transition-all duration-300 ease-in-out ${showAbayasDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
                            }`}
                    >
                        <div className="flex flex-col gap-3 items-center">
                            <Link to="/abayas-001/nida-fabric" className="block text-[#2F2F2F] ">Nida Fabric</Link>
                            <Link to="/abayas-001/tiktok-fabric" className="block text-[#2F2F2F] ">TikTok Fabric</Link>
                            <Link to="/abayas-001/harira-fabric" className="block text-[#2F2F2F] ">Harira Fabric</Link>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <Link to="/abayas-001/shiffon-fabric" className="block text-[#2F2F2F] ">Shiffon Fabric</Link>
                            <Link to="/abayas-001/silk-shiny-fabric" className="block text-[#2F2F2F]">Silk Shiny Fabric</Link>
                            <Link to="/abayas-001/zoom-fabric" className="block text-[#2F2F2F] ">Zoom Fabric</Link>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <Link to="/abayas-001/korean-nida-fabric" className="block text-[#2F2F2F] ">Korean Nida Fabric</Link>
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
                            <Link to="/accessories/bags" className="block text-[#2F2F2F] ">Accessories1</Link>
                            <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                <Link to="/accessories/bags/handbags" className="block">Accessories1.1</Link>
                                <Link to="/accessories/bags/backpacks" className="block">Accessories1.2</Link>
                                <Link to="/accessories/bags/totes" className="block">Accessories1.3</Link>
                            </div>
                        </div>
                        {/* Accessories Item 2 */}
                        <div className="flex flex-col items-center">
                            <Link to="/accessories/jewelry" className="block text-[#2F2F2F] ">Accessories2</Link>
                            <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                <Link to="/accessories/jewelry/necklaces" className="block">Accessories2.1</Link>
                                <Link to="/accessories/jewelry/rings" className="block">Accessories2.2</Link>
                                <Link to="/accessories/jewelry/bracelets" className="block">Accessories2.3</Link>
                            </div>
                        </div>
                        {/* Accessories Item 3 */}
                        <div className="flex flex-col items-center">
                            <Link to="/accessories/scarves" className="block text-[#2F2F2F] ">Accessories3</Link>
                            <div className="flex flex-col mt-2 space-y-1 text-[#2F2F2F]">
                                <Link to="/accessories/scarves/silk" className="block">Accessories3.1</Link>
                                <Link to="/accessories/scarves/wool" className="block">Accessories3.2</Link>
                                <Link to="/accessories/scarves/cotton" className="block">Accessories3.3</Link>
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

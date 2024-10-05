import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';

// const Accordion = ({ title, isOpen, onToggle, children }) => (
//     <div className="relative">
//         <button
//             onClick={onToggle}
//             className="flex items-center w-full gap-1 text-left py-1 hover:text-gray-700"
//         >
//             {title}
//         </button>
//         {isOpen && (
//             <div className="ml-4 mt-2">
//                 {children}
//             </div>
//         )}
//     </div>
// );

// const abayaData = [
//     { name: 'Nida Fabric', catId: 'abayas-001', subCatId: 'nida-fabric' },
//     { name: 'TikTok Fabric', catId: 'abayas-001', subCatId: 'tiktok-fabric' },
//     { name: 'Harira Fabric', catId: 'abayas-001', subCatId: 'harira-fabric' },
//     { name: 'Shiffon Fabric', catId: 'abayas-001', subCatId: 'shiffon-fabric' },
//     { name: 'Silk Shiny Fabric', catId: 'abayas-001', subCatId: 'silk-shiny-fabric' },
//     { name: 'Zoom Fabric', catId: 'abayas-001', subCatId: 'zoom-fabric' },
//     { name: 'Korean Nida Fabric', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },

// ];

// const abayaGroups = [
//     abayaData.slice(0, 3),
//     abayaData.slice(3, 6),
//     abayaData.slice(6),
// ];

// const hijabData = [
//     { name: 'Nida Fabric', catId: 'abayas-001', subCatId: 'nida-fabric' },
//     { name: 'TikTok Fabric', catId: 'abayas-001', subCatId: 'tiktok-fabric' },
//     { name: 'Harira Fabric', catId: 'abayas-001', subCatId: 'harira-fabric' },

// ];


// const hijabGroups = [
//     hijabData.slice(0, 3),
//     hijabData.slice(3, 6),
//     hijabData.slice(6)
// ];


// const accessoriesData = [
//     { name: 'Accessories1', catId: 'abayas-001', subCatId: 'nida-fabric' },
//     { name: 'Accessories1.1', catId: 'abayas-001', subCatId: 'tiktok-fabric' },
//     { name: 'Accessories1.2', catId: 'abayas-001', subCatId: 'harira-fabric' },
//     { name: 'Accessories1.3', catId: 'abayas-001', subCatId: 'shiffon-fabric' },
//     { name: 'Accessories2', catId: 'abayas-001', subCatId: 'silk-shiny-fabric' },
//     { name: 'Accessories2.1', catId: 'abayas-001', subCatId: 'zoom-fabric' },
//     { name: 'Accessories2.2', catId: 'abayas-001', subCatId: 'korean-nida-fabric' },
//     { name: 'Accessories2.3', catId: 'abayas-001', subCatId: 'korean-nida-fabric2' },
//     { name: 'Accessories3', catId: 'abayas-001', subCatId: 'korean-nida-fabric3' },
//     { name: 'Accessories3.1', catId: 'abayas-001', subCatId: 'korean-nida-fabric4' },
//     { name: 'Accessories3.2', catId: 'abayas-001', subCatId: 'korean-nida-fabric5' },
//     { name: 'Accessories3.3', catId: 'abayas-001', subCatId: 'korean-nida-fabric6' },



// ];


// const accessoriesGroups = [
//     accessoriesData.slice(0, 4),
//     accessoriesData.slice(4, 8),
//     accessoriesData.slice(8, 12)
// ];


const Navigation = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [openAccordion, setOpenAccordion] = useState(null);
    const user = useSelector((state) => state.auth.user);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };


    // const handleAccordionToggle = (section) => {
    //     setOpenAccordion(prev => prev === section ? null : section);
    // };

    // const handleMouseEnter = (setDropdown) => {
    //     setDropdown(true);
    // };

    // const handleMouseLeave = (setDropdown) => {
    //     setDropdown(false);
    // };

    const isActive = (path) => location.pathname === path ? 'nav-link-active' : '';

    return (
        <nav className='font-Inter text-lg flex space-x-6'>
            {/* Hamburger menu for screens below md */}
            <div className="lg:hidden relative">
                <button onClick={toggleMenu} className="sm:text-2xl focus:outline-none">
                    <FiMenu />
                </button>

                {/* Left-Side Navigation */}
                <div className={`fixed top-0 left-0 h-full w-44 bg-white shadow-lg transition-transform duration-100 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-5">
                        <button onClick={toggleMenu} className="sm:text-2xl float-end mb-4 focus:outline-none">
                            <AiOutlineClose />
                        </button>
                        <div className="flex mt-10 flex-col space-y-2">
                            <Link to="/" className="hover:text-gray-700 shadow-sm text-center rounded-md">Home</Link>
                            <Link to="/contact" className="hover:text-gray-700 shadow-sm text-center rounded-md">Contact</Link>
                            <Link to="/about" className="hover:text-gray-700 shadow-sm text-center rounded-md">About</Link>
                            {!user && (
                                <Link to="/register" className="hover:text-gray-700 shadow-sm text-center rounded-md">
                                    Sign Up
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navigation for larger screens */}
            <div className='hidden lg:flex space-x-6'>
                <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                {!user && (
                    <Link to="/register" className={`nav-link ${isActive('/register')}`}>
                        Sign Up
                    </Link>
                )}
            </div>
        </nav>

    );
};

export default Navigation;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ productName }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const formatBreadcrumb = (breadcrumb) => {
        return breadcrumb
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="mb-4 mx-2 font-Poppins">
            <ul className="flex">
                <li>
                    <Link to="/" className="sm:text-sm text-[7px] text-gray-400">
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    
                    
                    const isProduct = index === pathnames.length - 1 && productName;

                    return (
                        <li key={to} className="flex items-center text-[7px] mt-[5px] sm:mt-0 sm:text-sm">
                            <span className="mx-2 text-[5px] sm:text-sm">/</span>
                            {isLast ? (
                                isProduct ? (
                                    <span className="text-gray-700 text-[7px] sm:text-sm">
                                        {formatBreadcrumb(productName)}
                                    </span>
                                ) : (
                                    <span className="text-gray-700 text-[7px] sm:text-sm">
                                        {formatBreadcrumb(value)}
                                    </span>
                                )
                            ) : (
                                <Link to={to} className="text-gray-400 text-[7px] sm:text-sm">
                                    {formatBreadcrumb(value)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;

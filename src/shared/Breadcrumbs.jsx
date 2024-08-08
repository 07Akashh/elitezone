import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const formatBreadcrumb = (breadcrumb) => {
        return breadcrumb
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="mb-4 font-Poppins">
            <ul className="flex ">
                <li>
                    <Link to="/" className="text-sm text-gray-400">
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <li key={to} className="flex items-center text-sm">
                            <span className="mx-2 text-sm">/</span>
                            {isLast ? (
                                <span className="text-gray-700 text-sm">{formatBreadcrumb(value)}</span>
                            ) : (
                                <Link to={to} className="text-gray-400 text-sm">
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

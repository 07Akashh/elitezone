import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='font-PlayfairDisplay text-[20px]'>
            <Link to="/" className="px-5">Home</Link>
            <Link to="/new-arrivals" className="px-5">Hijab</Link>
            <Link to="/new-arrivals" className="px-5">Abayas</Link>
            <Link to="/embroidered-abaya" className="px-5">Accessories</Link>
            <Link to="/contact" className='px-5'>Contact Us</Link>
        </nav>
    );
};

export default Navigation;

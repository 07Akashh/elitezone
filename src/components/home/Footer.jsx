import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F0EADC] text-[#2C1101] p-8 font-PlayfairDisplay border-t-2 border-[#2c110127]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h1 className="text-[40px] font-bold">Brand</h1>
          <p className="mt-2 text-2xl">Complete your style with awesome clothes from us.</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookSquare className="w-8 h-8" />
            <FaInstagramSquare className="w-8 h-8" />
            <FaTwitterSquare className="w-8 h-8" />
            <FaLinkedin className="w-8 h-8" />
          </div>
        </div>

        {/* Second Column */}
        <div>
          <h2 className="mb-2 text-2xl font-extralight pr-40 text-left">5123 Market St. #22B Charlottesville, California 44635</h2>

          <p className='text-lg mt-[35px]'>(434) 546-4356</p>
          <p className='text-base mt-[44px]'>contact@brand.agencyr.com</p>
        </div>

        {/* Third Column */}
        <div className="grid grid-cols-2 text-2xl font-normal">
          <div className='font-normal'>
            <ul className="space-y-5">
              <li>Company</li>
              <li>About</li>
              <li><Link to='contact'>Contact Us</Link></li>
              <li>Career</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li>Legal</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="mt-8 text-center">
        &copy; 2024 Your E-Commerce App
      </div> */}
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="bg-[#F0EADC] text-[#2C1101] p-8 font-PlayfairDisplay  border-[#2c110127]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h1 className="text-[40px] font-bold hidden sm:block">Humaira Abayas</h1>
          <p className="mt-2 text-2xl hidden sm:block">Elegant Saudi Luxury Abayas | Premium Designs & Fast Shipping</p>
          <div className="flex space-x-4 justify-center sm:justify-start mt-4">
            <Link to="https://www.facebook.com/profile.php?id=61564472715844"><FaFacebookSquare className="sm:w-10 sm:h-10 w-14 h-14 " /></Link>
            <Link to="https://www.instagram.com/humaira_abayas?igsh=anZ5YTJzcmZnajJh&utm_source=qr"><FaInstagramSquare className="w-14 h-14 sm:w-10 sm:h-10" /></Link>
            <Link to='/'><FaTwitterSquare className="w-14 h-14 sm:w-10 sm:h-10" /></Link>
            <Link to='/'><FaLinkedin className="w-14 h-14 sm:w-10 sm:h-10" /></Link>
          </div>
        </div>
        {/* Second Column */}
        <div>
          <h2 className="mb-2 sm:text-2xl text-lg font-normal leading-9 sm:font-extralight sm:pr-40 text-left">1-16, Masjidbanda, Kondapur, Hyderabad, 500084</h2>
          <p className='text-lg mt-[20px] sm:mt-[35px]'><Link to='tel:+91 8639310409'>+91 8639310409</Link></p>
          <p className='text-base mt-[20px] sm:mt-[44px]'><Link to='mailto:official.humairaabayas@gmail.com'>official.humairaabayas@gmail.com</Link></p>
        </div>

        {/* Third Column */}
        <div className="hidden  sm:grid grid-cols-2 text-2xl font-normal">
          <div className='font-normal'>
            <ul className="space-y-5">
              <li><Link to='/'>Company</Link></li>
              <li><Link to='/'>About</Link></li>
              <li><Link to='contact'>Contact Us</Link></li>
              <li><Link to='/'>Career</Link></li>
              <li><Link to='/'>Support</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li><Link to='/'>Legal</Link></li>
              <li><Link to='/'>Terms & Conditions</Link></li>
              <li><Link to='/'>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="sm:hidden text-center grid grid-cols-3 text-xl font-normal">
          <div className='font-normal'>
            <ul className="">
              <li><Link to='/'>About</Link></li>
            </ul>
          </div>
          <div>
            <ul className="font-normal">
            <li><Link to='contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <ul className='font-normal'>
            <li><Link to='/'>Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div className="sm:hidden text-xs py-3 text-[#555555] bg-[#c4c4c428] text-center">
        Copyright&copy; Brand All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;

import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F0EADC] text-[#2C1101] p-8 font-PlayfairDisplay border-t border-[#2c110127]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h1 className="text-[40px] font-bold">Humaira Abayas</h1>
          <p className="mt-2 text-2xl">Elegant Saudi Luxury Abayas | Premium Designs & Fast Shipping</p>
          <div className="flex space-x-4 mt-4">
            <Link to="https://www.facebook.com/profile.php?id=61564472715844"><FaFacebookSquare className="w-10 h-10" /></Link>
            <Link to="https://www.instagram.com/humaira_abayas?igsh=anZ5YTJzcmZnajJh&utm_source=qr"><FaInstagramSquare className="w-10 h-10" /></Link>
            <FaTwitterSquare className="w-10 h-10 " />
            <FaLinkedin className="w-10 h-10 " />
          </div>
        </div>
        {/* Second Column */}
        <div>
          <h2 className="mb-2 text-2xl font-extralight pr-40 text-left">1-16, Masjidbanda, Kondapur, Hyderabad, 500084</h2>

          <p className='text-lg mt-[35px]'>+91 8639310409</p>
          <p className='text-base mt-[44px]'>official.humairaabayas@gmail.com</p>
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

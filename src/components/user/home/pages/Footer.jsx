import React from 'react';
import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { PiPaperPlaneRight } from "react-icons/pi";
import { useSelector } from 'react-redux';


const Footer = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <footer className="bg-[#000000] pt-[80px] pb-[60px] font-Poppins text-white xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[87px] gap-y-[20px]">
          {/* First Column */}
          <div className='borer'>
            <h1 className="text-[#f9f9f9] text-2xl font-bold font-Inter leading-normal tracking-wide">EliteZone</h1>
            <p className="mt-[24px] text-[#f9f9f9] text-xl font-medium font-Poppins leading-7 ">Subscribe</p>
            <p className="mt-[24px] text-[#f9f9f9] text-base font-normal font-Poppins leading-normal">Get 10% off your first order</p>
            <div className='mt-[16px] rounded border border-[#f9f9f9] bg-none py-[12px] px-[16px]'>
              <form action="" className='justify-between flex'>
                <input type="email" name="" id="" placeholder='Enter your email' className='bg-black mr-1.5 w-full outline-none opacity-50  text-[#f9f9f9] text-base font-normal font-Poppins leading-normal' />
                <button type='submit'><PiPaperPlaneRight className='text-2xl' /></button>
              </form>
            </div>
          </div>
          {/* Second Column */}
          <div className='borer'>
            <h1 className="text-[#f9f9f9] text-xl font-medium font-Poppins leading-7">Support</h1>
            <div className='mt-[24px]'>
              <h2 className=" text-left text-[#f9f9f9] text-base font-normal font-Poppins leading-normal ">71A, Rattan Bagh, Veena Enclave, Nangloi, Delhi 110041</h2>
              <p className='text-lg mt-[16px] sm:mt-[16px]'><Link to='tel:+91 9026478761'>+91 9026478761</Link></p>
              <p className='text-base mt-[16px] sm:mt-[16px]'><Link to='mailto:rahulk.softdev@gmail.com'>rahulk.softdeav@gmail.com</Link></p>
            </div>
          </div>

          {/* Third Column */}
          <div className="hi borer flex justify-around sm:justify-between  text-sm leading-normal text-[#f9f9f9] font-normal">
            <div className='font-normal'>
              <ul className="space-y-[16px]">
                <h1 className="text-[#f9f9f9] text-xl font-medium font-Poppins leading-7">Account</h1>
                <li><Link to='/my-account'>My Account</Link></li>
                {!user && (
                  <li><Link to='/login'>Login</Link> / <Link to='/register'> Register</Link></li>
                )}
                <li><Link to='cart'>Cart</Link></li>
                <li><Link to='wishlist'>Wishlist</Link></li>
                <li><Link to='/product'>Shop</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-[16px]">
                <h1 className="text-[#f9f9f9] text-xl font-medium font-Poppins leading-7">Quick Link</h1>
                <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                <li><Link to='/terms-of-use'>Terms of Use</Link></li>
                <li><Link to='/'>FAQ</Link></li>
                <li><Link to='contact'>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className='borer'>
            <h1 className="text-[#f9f9f9]  text-xl font-medium font-Poppins leading-7">Download App</h1>
            <div className='mt-[24px]'>
              <h2 className=" opacity-70 text-[#f9f9f9] text-xs font-medium font-['Poppins'] leading-[18px]">Save 10% On Products with App New User Only Launching Soon !</h2>
            </div>
            <div className="flex space-x-[24px] justify-center sm:justify-start mt-[26px]">
              <Link to="/"><RiFacebookLine className=" w-6 h-6 " /></Link>
              <Link to="https://www.instagram.com/rahulk.softdev"><RiInstagramLine className="w-6 h-6" /></Link>
              <Link to='/'><RiTwitterLine className="w-6 h-6" /></Link>
              <Link to='https://www.linkedin.com/in/rahul-kumar-2bb72b29b/'><RiLinkedinLine className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>
      </footer>
      <div className=" text-white/70 text-xs pb-[24px] pt-[16px] sm:text-sm bg-black text-center font-light font-Poppins leading-normal">
        Copyright&copy; EliteZone All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;

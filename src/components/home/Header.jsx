import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5"
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Modals from '../../shared/Modal';
import Login from '../Login';
import Register from '../Register';


const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const itemCount = useSelector((state) => state.cart.itemCount);


  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);


  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };


  return (
    <div className='fixed z-20 w-full bg-[#F0EADC]'>
      <div>
        <header className="bg-none text-[#2F2F2F] py-8 pl-10 pr-6 flex justify-between items-center ">
          <h1 className='text-[36px] font-PlayfairDisplay'>Brand</h1>
          <div className="flex items-center gap-20">
            <nav className='font-PlayfairDisplay text-[20px]'>
              <Link to="/" className="px-5">Home</Link>
              <Link to="/new-arrivals" className="px-5">Hijab</Link>
              <Link to="/new-arrivals" className="px-5">Abayas</Link>
              <Link to="/embroidered-abaya" className="px-5">Accessories</Link>
              <Link to='/' className='px-5'>About Us</Link>
            </nav>
            <div className=' gap-3 flex'>
              <Link><IoMdHeartEmpty className=' h-[24px] w-[24px]' /></Link>
              <Link to="/cart" className="relative flex"><IoCartOutline className=' h-[24px] w-[24px]' /><span className='text-xl font-PlayfairDisplay'>{itemCount}</span></Link>
              <button onClick={handleOpen}><FiUser className=' h-[24px] w-[24px]' /></button>
              <Modals isOpen={open} closeModal={handleClose} handleClose={handleClose} contentLabel="Login Modal">
                {isLogin ? (
                  <Login switchToRegister={switchToRegister}  />
                ) : (
                  <Register switchToLogin={switchToLogin} />
                )}
              </Modals>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

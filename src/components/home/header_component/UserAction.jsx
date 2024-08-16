import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Login from '../../auth/Login';
import Register from '../../auth/Register';
import Modals from '../../../shared/Modal';
import SearchBar from './SearchBar';

const UserActions = () => {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const itemCount = useSelector((state) => state.cart.itemCount);
    const user = useSelector((state) => state.auth.user);

    const switchToRegister = () => setIsLogin(false);
    const switchToLogin = () => setIsLogin(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserIconClick = () => {
        if (user) {
            navigate('/my-account');
        } else {
            handleOpen();
        }
    };

    return (
        <div className='sm:gap-3 gap-1 flex border-black'>
            <div className='hidden sm:block'>
            <SearchBar />
            </div>
            <Link to="/wishlist" className="relative flex">
                <IoMdHeartEmpty className='sm:h-[24px] sm:w-[24px] h-[20px] w-[20px] border-black my-auto' />
            </Link>
            <Link to="/cart" className="relative flex">
                <IoCartOutline className='sm:h-[24px] sm:w-[24px] h-[20px] w-[20px] my-auto' />
                <span className='text-xl font-PlayfairDisplay'>{itemCount}</span>
            </Link>
            <button onClick={handleUserIconClick}>
                <FiUser className='sm:h-[24px] sm:w-[24px] h-[20px] w-[20px] align-middle border-black my-auto' />
            </button>
            <Modals isOpen={open} closeModal={handleClose} handleClose={handleClose} contentLabel="Login Modal">
                {isLogin ? (
                    <Login switchToRegister={switchToRegister} />
                ) : (
                    <Register switchToLogin={switchToLogin} />
                )}
            </Modals>
        </div>
    );
};

export default UserActions;

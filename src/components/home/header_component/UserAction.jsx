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
        <div className='gap-3 flex'>
            <SearchBar />
            <Link to="/wishlist"><IoMdHeartEmpty className='h-[24px] w-[24px]' /></Link>
            <Link to="/cart" className="relative flex">
                <IoCartOutline className='h-[24px] w-[24px]' />
                <span className='text-xl font-PlayfairDisplay'>{itemCount}</span>
            </Link>
            <button onClick={handleUserIconClick}>
                <FiUser className='h-[24px] w-[24px]' />
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

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, googleLogin } from '../../redux/slices/authSlice';

const Login = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    const handleGoogleLogin = () => {
        dispatch(googleLogin());
    };

    return (
        <div className='font-PlayfairDisplay'>
            <h2 className='text-black text-4xl font-PlayfairDisplay font-extrabold text-center pb-2'>Login</h2>
            <form onSubmit={handleLogin} className='text-xl text-center'>
                <input
                    className='w-full border-b outline-none'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className='w-full border-b mt-[15px] outline-none'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading} className='mt-[23px] text-lg font-semibold bg-[#754F23] text-white rounded-xl px-10 py-1'>
                    {loading ? 'Loading...' : 'Login'}
                </button>
                {error && <p>{error}</p>}
            </form>
            <h2 className="mt-4 text-[#969ab8] text-[15px] text-center font-['poppins']">
                Don’t have an account?{' '}
                <button onClick={switchToRegister} className="text-[15px] text-[#754f23]">
                    Sign Up
                </button>
            <p className='font-extrabold text-[#C1C1C1]'>-OR-</p>
            </h2>
            <button onClick={handleGoogleLogin} disabled={loading} className='mt-3 text-[#928f8f] border-2 flex m-auto gap-1 px-2 py-1 rounded-lg'>
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google logo"  className='h-8 w-8'/>
                <p className='m-auto'> Continue with Google</p>
            </button>
        </div>
    );
};

export default Login;

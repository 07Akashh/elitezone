import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Success = ({ orderId, productName, productPrice }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     navigate('/my-account/orders');
        // }, 5000);

        // return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white"
        >
            <motion.div
                className="bg-white text-center p-8 rounded-lg shadow-lg"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="mt-6"
                >
                    <iframe title='success'
                        alt="success"
                        className="w-20 h-20 mx-auto animate-pulse"
                        src="https://lottie.host/embed/03a23b34-15e6-4c9b-8d90-eb74f973ac08/ZoWgAJdoVg.json">
                    </iframe>
                </motion.div>
                
                <h1 className="text-4xl font-bold mb-4 text-green-500">Payment Successful!</h1>
                <p className="text-xl mb-2 text-gray-700">Thank you for your purchase!</p>

                <div className="mt-6">
                    <p className="text-lg font-semibold">Order ID: <span className="font-bold text-indigo-600">{orderId || 213671351}</span></p>
                    <p className="text-lg font-semibold mt-2">Product: <span className="font-bold text-indigo-600">{productName || 'e39823y78y2'}</span></p>
                    <p className="text-lg font-semibold mt-2">Total: <span className="font-bold text-indigo-600">₹{productPrice || 276172}</span></p>
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                    <a
                        href="/my-account/orders"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        View Orders
                    </a>
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Go to Home
                    </a>
                </div>

                <p className="mt-4 text-gray-300">Redirecting you to your orders in 5 seconds...</p>
            </motion.div>
        </motion.div>
    );
};

export default Success;

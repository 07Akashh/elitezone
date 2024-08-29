import React from 'react';

const Logout = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex font-TenorSans items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-md shadow-lg p-6 w-80 text-center">
                <h2 className="text-xl mb-4">Confirm Logout</h2>
                <p className="mb-6">Are you sure you want to log out?</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-[#754f23] hover:bg-[#603e1b] text-white font-semibold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;

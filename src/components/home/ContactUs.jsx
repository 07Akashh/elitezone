import React from 'react';
import { Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="flex flex-col h-full md:flex-row sm:h-[457px] justify-center font-Poppins items-center mb-20 p-4 md:p-8">
            {/* Contact Information Section */}
            <div className="md:w-[340px] h-auto text-white py-[40px] px-[35px] bg-[#754F23] flex flex-col">
                <div className='flex items-center gap-x-3 mb-5'>
                    <IoCallOutline className='text-2xl h-[40px] w-[40px] p-2 bg-[#dd8560] rounded-full' />
                    <div>
                        <h2 className="font-medium text-lg leading-normal mb-1">Call Us</h2>
                    </div>
                </div>

                <div className='space-y-[16px]'>
                    <p className=" font-light leading-[21px] text-sm">We are available 24/7, 7 days a week.</p>
                    <p className="font-light leading-[21px] text-sm"><Link to='tel:+91 8639310409'>Phone: +91 8639310409</Link></p>
                </div>

                <div className="border-t border-gray-300 my-[32px]"></div>
                <div className='flex items-center gap-x-3 mb-5'>
                    <div className='text-2xl h-[40px] w-[40px] p-2 bg-[#dd8560]  rounded-full py-auto border-black' >
                        <FaRegEnvelope className=' m-auto border-black' />
                    </div>
                    <div>
                        <h3 className="font-medium text-lg leading-normal mb-1">Write to Us</h3>
                    </div>
                </div>

                <div className='space-y-[16px]'>
                    <p className='font-light leading-[21px] text-sm'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className="font-light leading-[21px] text-xs">Emails: official.humairaabayas@gmail.com</p>
                    {/* <p className="font-light leading-[21px] text-sm">Emails: support@exclusive.com</p> */}
                </div>

            </div>

            {/* Contact Form Section */}
            <div className="sm:w-3/5 w-full sm:p-4 py-4 m-2">
                <form className="space-y-4 ">
                    <div className='w-full grid sm:grid-cols-3 grid-cols-1 mb-6 space-y-3 sm:space-y-0 sm:space-x-3'>
                        <input
                            className="py-[13px] outline-none px-[16px]"
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Your Name *'
                            required
                        />
                        <input
                            className="py-[13px] outline-none px-[16px]"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder='Your Email *'
                        />
                        <input
                            className="py-[13px] outline-none px-[16px]"
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder='Your Phone *'
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full outline-none py-[13px] px-[16px]"
                            id="message"
                            name="message"
                            rows="4"
                            required
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                    <div>
                        <button
                            className=" w-full sm:w-auto bg-[#754F23] font-TenorSans float-end text-white rounded px-[48px] py-[16px] font-medium "
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;

import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col  md:flex-row h-[457px] justify-center font-Poppins items-center mb-20 p-4 md:p-8">
            {/* Contact Information Section */}
            <div className="md:w-[340px] h-[457px] text-white py-[40px] px-[35px] bg-[#754F23]  ">
                <h2 className="font-medium text-base leading-normal mb-4">Call To Us</h2>
                <div className="mb-4">
                    <p className="font-normal leading-[21px] text-sm">We are available 24/7, 7 days a week.</p>
                </div>
                <div className="mb-4">
                    <p className="font-normal leading-[21px] text-sm">Phone: +8801611112222</p>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="mb-4">
                    <h3 className="font-medium text-base leading-normal mb-4">Write to Us</h3>
                    <p className='font-normal leading-[21px] text-sm'>Fill out our form and we will contact you within 24 hours.</p>
                </div>
                <div className="">
                    <p className="font-normal leading-[21px] text-sm'">Emails: customer@exclusive.com</p>
                    <p className="font-normal leading-[21px] text-sm'">Emails: support@exclusive.com</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-3/5 p-4   m-2">
                <form className="space-y-4 ">
                <div className='w-full flex gap-3 mb-6'>

                <input
                            className="w-1/3 py-[13px] outline-none px-[16px]"
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Your Name *'
                            required
                        />
                        <input
                            className="w-1/3 py-[13px] outline-none px-[16px]"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder='Your Email *'
                        />
                        <input
                            className="w-1/3 py-[13px] outline-none px-[16px]"
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
                            className=" bg-[#754F23] font-TenorSans float-end text-white rounded px-[48px] py-[16px] font-medium "
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

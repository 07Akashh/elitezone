import React from 'react'

const Banner = () => {
    return (
        <div className='bg-[#F2F2F2] sm:py-[50px] sm:px-[100px] px-10 py-10 font-PlayfairDisplay w-full'>
            <div className='text-center mb-[35px]'>
                <h3 className='text-4xl font-semibold text-[#2f2f2f] mb-[30px] sm:mb-[40px]'>Features</h3>
                <p className='text-[#555555] text-2xl font-normal leading-tight tracking-tight'>Making luxury abayas accessible to every woman, every day</p>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 mx-auto text-center text-[#555555] text-xl leading-tight gap-20'>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/f1ac/c22c/a1883557f1613a8fbf1f7e036756dfe3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZNNN~L-NwPwN5gq9FtSKByoiVWPbusuCxZXT7R75X0lzmUvgM13rJF9xt~nAc0ST7CX9FdU4WvN5pTHW3Y1GWcGUYoSYu4f6dyn-GI-3pWpyKDf9Q5mvYYN-z~0KWSKm64LpvKyyD9o-yemzY3jkhFxz-BSgp6axw3K6wuPp7GN77lfzkp4Ovd5Ve7PmyZ8g1ajgG2S6HCOJVjBuEswsWTkT9rS5odzL3q1D~s267rJe4Z~ceidRtsPCZIRb6zbb9ufcB40XmoEBgVH-wQZAcJMFzSB94kKjKBNEUR1fkzbhw5lxxq2h8ll4xesARqWf92CZPFSO1hHm6YX-tFCIkQ__" alt="" className='sm:w-[90px] w-[60px] h-[60px] sm:h-[67px] mx-auto mb-5' />
                    <p>Fast shipping. Free on orders over INR 2000.</p>
                </div>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/dbdb/c2f0/0a3a84bb216eb51ea49175e9b90506e7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ip796-rXdHOHjLUjrhO9Ew1U6PrIq462izR82JeyaCod~5F8iGB6EampwqlhRZRN-Y8n6Wny6l3GxWYuCIZgjVdWWM~wJpfoMBUV4DdqXS6qUAU5NeHJ79TatP3bWO2VDILThDSYAGdyzQs716P2UdBTBC4VARzLm9ndnECevB63kcqiJ-ASdD-c3faLwJLXM9X4XAAQWzc8i47KM4p8V~hQ9f7ZpAQugtKOfbBsvRS2Pi-4p7uSwDh8-Ewz2n1w02mTdg7PBIwj-UpFskKkBnmOFMNO7fHUG~a~FVWH4UUpCEPEHYCR6FDVQVVldR~G4~j8cNvX~pjuq3iKzosVPA__" alt="" className='w-[60px] h-[60px] sm:w-[90px] sm:h-[67px] mx-auto mb-5' />
                    <p>Premium materials and unique designs.</p>
                </div>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/5880/268e/25133dd2b95eee9511866742417fde61?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ehfm6HOJhxfhK5bLIBwpeUNACGmXh4rn8ODjzp7fBcW2GllX~oTKWiQZddk0i8y15xjmQfCe6kcCy-S~78W13jmNLGkSM4aEwAbUrAPOIDbOW6y0RqRNcfboj4wKRtGTF9B64cNMt4Ku3PEe2nVP3qMuwS0YGLaBV2qpboc0aCL6o1WKnpWRCJhWBbi8pt9JOqMjh074qokpcbx8~S8maJdAkwixgokdmxWFg7y~qQtr6n-2o8HtAgr8iqTOQQkYLVrxHylqfsQHL236FljV8qZVEVGnuHHrvxT9kHix7IHWCjHqE9rM0uLsVMwKEHXUbn56iRFeI9zrAvEUAxCgyA__" alt="" className='w-[70px] h-[70px] sm:w-[90px] sm:h-[67px] mx-auto mb-5' />
                    <p>Classic styles with a modern touch.</p>
                </div>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/9f39/83b9/bb9d9b07f48d8a4c336dbaf536749c22?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QAXlWaUPpjPZPqa~US-FqVnuQGrgBcraiTVmthkM006Cc4P12z8Q11sOCS0i~18Lj7Nnae0hdjByai~DdVkGrU~ImOAHeqOVu9nPk~aci2MJzuE6MNhDABF7D4afjhvAqY5~ERoNwEfrbaOdjaotSpbxQIA5D0WWlOyscT6DTGIBGUTqbFSjU7SApRd5LEd2thNNkuMvOSAOm0Kmeqep5GJE3Mpdm9uc-rZ9qvjAPHxc21rKWnpGySlgye9~ShmuUQGaRHkowLjTzu-LTdG~u4GmNkZ-egu0EPg8zxxkpRx5I3fTcPpjwUwgdKTK33z-PycQs~nB2Lo32NLzEcPqFA__" alt="" className='w-[60px] h-[60px] sm:w-[90px] sm:h-[67px] mx-auto mb-5' />
                    <p>Sustainable from start to finish.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner

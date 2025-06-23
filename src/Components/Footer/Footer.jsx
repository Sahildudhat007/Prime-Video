import React from 'react';

// image import 
import footer_logo from "../../assets/svg_png/footer_logo.png";

function Footer() {
    return (
        <>
            <footer className='p-6 bg-[#222222]'>
                <img src={footer_logo} alt="" className='max-h-8 max-w-full mx-auto' />
                <ul className='flex items-center justify-center flex-wrap mt-1 mb-3.5'>
                    <li className='mx-2.5'>
                        <a href="#" className='text-[#79b8f3] hover:text-[#90dffe]'>Terms and Privacy Notice</a>
                    </li>
                    <li className='mx-2.5'>
                        <a href="#" className='text-[#79b8f3] hover:text-[#90dffe]'>Send us feedback</a>
                    </li>
                    <li className='mx-2.5'>
                        <a href="#" className='text-[#79b8f3] hover:text-[#90dffe]'>Help</a>
                    </li>
                </ul>
                <p className='text-[#8197a4] text-center'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
            </footer>
        </>
    )
}

export default Footer
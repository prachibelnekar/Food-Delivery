import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
    {/* footer */}
    <div className='w-full text-[#d9d9d9] bg-[#323232]  items-center gap-[20px] py-[20px] px-[8vw] pt-20 mt-[100px]'>
        {/* footer-content */}
        <div className='w-full grid grid-cols-[2fr_1fr_1fr]  gap-20 sm:flex sm:flex-col sm:gap-[35px]'>
            {/* footer-content-left */}
            <div className='flex flex-col items-start gap-5'>
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos quas nulla id quo culpa! Ex, corrupti! Dignissimos expedita temporibus amet numquam animi aut maxime, nobis iure. Aperiam, similique corrupti.</p>
                {/* footer-social-icons */}
                <div className='flex'>
                    <img className='w-[40px] mr-[15px]' src={assets.facebook_icon} alt="" /> 
                    <img className='w-[40px] mr-[15px]' src={assets.twitter_icon} alt="" />
                    <img className='w-[40px] mr-[15px]' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            {/* footer-content-center */}
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-white'>COMPANY</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer'>Home</li>
                    <li className='list-none mb-[10px] cursor-pointer'>About Us</li>
                    <li className='list-none mb-[10px] cursor-pointer'>Delivery</li>
                    <li className='list-none mb-[10px] cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            {/* footer-content-right */}
            <div className='flex flex-col items-start gap-5'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer'>+91 987654321</li>
                    <li className='list-none mb-[10px] cursor-pointer'>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-[2px] my-[20px] mx-0 bg-gray-500'/>
        {/* footer-copyright */}
        <p className='sm:text-center'>Copyright {new Date().getFullYear()} &copy; Tomato.com - All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer

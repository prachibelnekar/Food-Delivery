import React from 'react'
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <>
    {/* navbar */}
    <div className='flex justify-between items-center py-[8px] px-[4%]'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt=""/>
        <img className='w-10' src={assets.profile_image} alt=""/>
    </div>
    </>
  )
}

export default Navbar;
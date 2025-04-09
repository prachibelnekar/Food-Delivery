import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <>
    {/* sidebar */}
    <div className='w-[18%] min-h-[100vh] border border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
        {/* sidebar-options */}
        <div className='pt-12 pl-[20%] flex flex-col gap-5'>
            {/* sidebar-option */}
            <NavLink to ='/add' className='flex items-center border  gap-3 py-2 px-[10px] rounded-tl-[3px] rounded-bl-[3px] cursor-pointer  bg-[#fff0ed]  border-orange-500'>
                <img src={assets.add_icon} alt=""/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            <NavLink to ='/list' className='flex items-center border  gap-3 py-2 px-[10px] rounded-tl-[3px] rounded-bl-[3px] cursor-pointer  bg-[#fff0ed] border-orange-500'>
                <img src={assets.order_icon} alt=""/>
                <p className='hidden md:block'>List Items</p>
            </NavLink>
            <NavLink to ='/orders' className='flex items-center border  gap-3 py-2 px-[10px] rounded-tl-[3px] rounded-bl-[3px] cursor-pointer  bg-[#fff0ed] border-orange-500'>
                <img src={assets.order_icon} alt=""/>
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Sidebar

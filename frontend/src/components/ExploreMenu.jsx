import React from 'react';
import { menu_list } from '../assets/frontend_assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <>
      {/* Explore-menu */}
      <div className='flex flex-col gap-[20px]'>
        <h1 className='text-[#262626] font-medium'>Explore our menu</h1>
        
        {/* Explore Menu text */}
        <p className='max-w-[60%] text-[#808080] text-[max(1.2vw,14px)] sm:max-w-full sm:text-[14px]'>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
        </p>

        {/* explore-menu-list */}
        <div className='flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll scroll '>
          {menu_list.map((item, index) => {
            return (
              // Explore-menu-list-item
              <div 
                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                key={index} 
                className=''
              >
                <img 
                  src={item.menu_image} 
                  alt='img' 
                  className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full transition-all duration-200 
                  ${category === item.menu_name ? 'border-[4px] border-solid border-orange-500 p-[2px]' : ''}`}
                />
                <p className='mt-[10px] text-[#747474] text-[max(1.4vw, 16px)] cursor-pointer'>
                  {item.menu_name}
                </p>
              </div>
            )
          })}
        </div>

        <hr className='my-[10px] mx-0 bg-[#e2e2e2] border-none '/>
      </div>
    </>
  )
}

export default ExploreMenu

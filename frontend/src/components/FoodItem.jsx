import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { useContext } from 'react';
import { Storecontext } from '../content/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

 
    const{cartItems,addToCart,removeFromCart,url} = useContext(Storecontext);

  return (
    <>
    {/* food-item */}
    <div className='w-full m-auto rounded-[15px] shadow-[0_0px_10px_#00000015] duration-300 animate-fadeIn'>
        {/* food-item-img-container */}
        <div className='relative '>
            {/* food-item-image */}
            <img src={url+"/images/"+image} alt = "" className='w-full rounded-t-[15px] rounded-b-none'/>
            {!cartItems
            ? <img onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full'/> 
            : <div className='absolute bottom-[15px] right-[15px] flex  items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
              </div>}
        </div>
        {/* food-item-info */}
        <div className='p-[20px]'>
            {/* food-item-name-rating */}
            <div className='flex justify-between items-center mb-[10px]'>
                <p className='text-xl font-medium'>{name}</p>
                <img src={assets.rating_starts} alt="" className='w-[70px]'/>
            </div>
            {/* food-item-desc */}
            <p className='text-[#676767] text-xs'>{description}</p>
            {/* food-item-price */}
            <p className='text-orange-500 text-[22px] font-medium my-[10px] mx-0'>&#8377;{price}</p>
        </div>
    </div>
    </>
  )
}

export default FoodItem;
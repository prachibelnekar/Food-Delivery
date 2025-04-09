import React from 'react';
import header_image from '../assets/frontend_assets/header_img.png';

const Header = () => {
    return (
        <>
        {/* header */}
        <div style={{ backgroundImage: `url(${header_image})` }} className="h-[34vw] lg:h-[38vw] my-[30px] mx-auto  bg-no-repeat bg-contain relative">
                {/* header-contents */}
                <div className='flex absolute flex-col items-start gap-[1.5vw] max-w-[50%] lg:max-w-[45%] md:max-w-[45%] sm:max-w-[65%] bottom-[10%] left-[6vw] animate-fadeIn3'>
                    <h2 className='font-medium text-white text-[max(4.5vw,22px)]'>
                        Order your favourite food here
                    </h2>
                    <p className='text-white text-[1vw] sm:hidden'>
                        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
                    </p>
                    <button className='text-[#747474] border-none font-medium p-[1vw_2.3vw] sm:p-[2vw_4vw] bg-white text-[max(1vw,13px)] rounded-full'>
                        View Menu
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;

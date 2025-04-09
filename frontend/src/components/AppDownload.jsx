import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <>
      {/* app-download */}
      <div className='m-auto mt-[100px] text-[max(3vw,20px)] text-center  font-medium'>
        <p>For Better Experience Download <br />Tomato App</p>
        {/* appp-download-platforms */}
        <div className='flex justify-center gap-[max(2vw,10px)] mt-[40px]'>
          <img className='w-[max(30vw,12px)] max-w-[180px]  duration-500 cursor-pointer transition-transform hover:scale-105' src={assets.play_store} alt='' />
          <img className='w-[max(30vw,12px)] max-w-[180px]  duration-500 cursor-pointer transition-transform hover:scale-105'src={assets.app_store} alt='' />
        </div>

      </div>

    </>
  )
}

export default AppDownload
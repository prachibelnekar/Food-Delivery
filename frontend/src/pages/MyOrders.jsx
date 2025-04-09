import React, { useContext, useEffect, useState } from 'react'
import { Storecontext } from '../content/StoreContext';
import axios from 'axios';
import { assets } from '../assets/frontend_assets/assets';

const MyOrders = () => {
    const {url,token} = useContext(Storecontext);
    const [data,setData] = useState([]);
    const fetchOrders = async () =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
    }

    useEffect(() =>{
        if(token) {
            fetchOrders();
        }
    },[token])
  return (
     <>
     {/* my-orders */}
     <div className='my-12 mx-0'>
        <h2>My Orders</h2>
        {/* container */}
        <div className='flex flex-col gap-5 mt-8'>
            {data.map((order,index)=>{
                return(
                    // my-orders-order
                    <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-8 text-sm py-3 px-5 text-[#454545] border border-[solid] border-orange-500 sm:grid-cols-[1fr_2fr_1fr] lg:gap-y-1 lg:text-sm'>
                        <img src={assets.parcel_icon} alt="" className='w-12'/>
                        <p>{order.items.map((item,index)=>{
                            if(index === order.items.length-1){
                                return item.name+ "x"+item.quantity
                            }
                            else{
                                return item.name+ "x"+item.quantity+", "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span className='text-orange-500'>&#x25cf;</span><b className='font-medium text-[#454545]'>{order.status}</b></p>
                        <button onClick={fetchOrders} className='border-none py-3 px-0 bg-[#ffe1e1] cursor-pointer text-[#454545] lg:text-[10px]'>Track Order</button>
                    </div>
                )
            })}
        </div>
     </div>
     </>
  )
}

export default MyOrders
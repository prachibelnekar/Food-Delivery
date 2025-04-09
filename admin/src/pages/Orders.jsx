import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () =>{
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success)
    {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else
    {
      toast.error("Error");
    }
  }

  const statusHandler = async (event,orderId) =>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[]);

  return (
    <>
    {/* order add */}
    <div className='m-5'>
      <h3>Order Page</h3>
      {/* order-list */}
      <div >
      {orders.map((order, index) => (
            // order-item
            <div key={index} className='grid lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-8 border border-[solid] border-orange-500 my-8 mx-0 text-sm text-[#505050] sm:text-xs sm:grid-cols-[0.5fr_2fr_1fr] sm:py-4 sm:px-2'>
              <img src={assets.parcel_icon} alt='' className='sm:w-40px '/>
              <div>
              {/* order-item-food */}
                <p className='font-semibold'>
                  {order.items.map((item, i) =>
                    i === order.items.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )}
                </p>
                {/* order-item-name */}
                <p className='font-semibold mt-8 mb-1'>{order.address.firstName+ " "+order.address.lastName}</p>
                {/* order-item-address */}
                <div className='mb-3'>
                  <p>{order.address.street+ ", "}</p>
                  <p>{order.address.city+ ", "+ order.address.state + ", "+order.address.country + ", " + order.address.zipcode}</p>
                </div>
                {/* order-item-phone */}
                <p>{order.address.phone}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-[solid] border-orange-500 w-max-[10vw,120px] p-3 outline-none sm:p-1 sm:text-xs'>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
      
      </div>
    </div>
    </>
  )
}

export default Orders;
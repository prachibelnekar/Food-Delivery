import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Storecontext } from '../content/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const{getTotalCartAmount,token,food_list,cartItems,url}=useContext(Storecontext);

  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}},)
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }
    else if(getTotalCartAmount() === 0)
    {
      navigate('/cart');
    }
  },[token])

  return (
    <>
      {/* place-order */}
      <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px]'>
        {/* place-order-left */}
        <div className='w-full max-w-[(30%,500px)]'>
          {/* title */}
          <p className='text-3xl font-semibold mb-12'>Delivery Informtion</p>
          {/* multi-field */}
          <div className='flex gap-5'>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Enter First Name' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Enter Last Name' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter Email Address' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
          {/* multi-field */}
          <div className='flex gap-5'>
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
          </div>
          {/* multi-field */}
          <div className='flex gap-5'>
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone Number' className='mb-4 w-full p-3 border border-[#c5c5c5] rounded outline-orange-500'/>
        </div>

        {/* place-order-right */}
        <div className='w-full max-w-[max(40%,500px)]'>
          {/* cart-total */}
          <div className='flex-1 flex flex-col gap-5'>
            <h2>Cart Totals</h2>
            <div>
              {/* cart-total-details */}
              <div className='flex justify-between text-[#555]'>
                <p>Subtotal</p>
                <p>&#8377;{getTotalCartAmount()}</p>
              </div>
              <hr className='my-[10px] mx-0' />
              <div className='flex justify-between text-[#555]'>
                <p>Delivery Fee</p>
                <p>&#8377;{getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr className='my-[10px] mx-0' />
              <div className='flex justify-between text-[#555]'>
                <b>Total</b>
                <b>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button type='submit' className='border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 px-0 rounded cursor-pointer mt-7'>PROCEED TO PAYMENT</button>
          </div>
        </div>

      </form>
    </>
  )
}

export default PlaceOrder
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Storecontext } from '../content/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(Storecontext);
    const navigate = useNavigate();

    const verifyPayment = async() =>{
      try {
        console.log("Verifying payment...");
        const response = await axios.post(url + "/api/order/verify", { success, orderId });
        console.log("Response:", response.data); // Log the response
        if (response.data.success) {
          navigate("/myorders");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        navigate("/");
      }
    }
    useEffect(()=>{
      verifyPayment();
    },[])
  return (
    <>
    {/* verify */}
    <div className='min-h-[60vh] grid'>
        {/* Spinner */}
        <div className='w-24 h-24 place-self-center  border-4 border-solid border-[#bdbdbd] border-t-orange-500 rounded-[50%] animate-spin-slow'></div>
    </div>
    </>
  )
}

export default Verify
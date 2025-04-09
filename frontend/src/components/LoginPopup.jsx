import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets';
import { Storecontext } from '../content/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken} = useContext(Storecontext)

    const [currState, setCurrState] = useState("Login");

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler =(event) =>{
        const name= event.target.name
        const value= event.target.value
        setData(data=>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    const onLogin = async(event) =>{
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }
    return (
        <>
            {/* login-popup */}
            <div className='absolute z-[1] w-full h-full bg-#00000090 grid'>
                {/* login-popup-container */}
                <form onSubmit={onLogin} className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fadeIn1'>
                    {/* login-popup-title */}
                    <div className='flex justify-between items-center text-black'>
                        <h2>{currState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='w-[16px] cursor-pointer' />
                    </div>
                    {/* login-popup-inputs */}
                    <div className='flex flex-col gap-[20px]'>

                        {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Enter your name' required className='outline-none border border-[#aeacac]' />}
                        <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter your email' required className='outline-none border border-[#aeacac]'/>
                        <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Enter password' required className='outline-none border border-[#aeacac]'/>
                    </div>
                    <button type='submit' className='border-none p-[10px] rounded-md text-white bg-orange-500 cursor-pointer'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                    {/* Login-popup-condition */}
                    <div className='flex items-start gap-2 mt-[-15px]'>
                        <input type='checkbox' required  className='mt-[5px]'/>
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currState==="Login"
                    ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} className='text-orange-500 font-medium cursor-pointer'>Click here</span></p>
                    :<p>Already have an account? <span onClick={()=>setCurrState("Login")}className='text-orange-500 font-medium cursor-pointer'>Login here</span></p>
                    }
                </form>
            </div>
        </>
    )
}

export default LoginPopup
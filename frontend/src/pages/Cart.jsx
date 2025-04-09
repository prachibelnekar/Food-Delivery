import React from 'react';
import { useContext } from 'react';
import { Storecontext } from '../content/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount ,url} = useContext(Storecontext);

    const navigate = useNavigate();

    return (
        <>
            {/* cart */}
            <div className='mt-[100px]'>
                {/* cart-items */}
                <div>
                    {/* cart-items-title */}
                    <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-zinc-500 text-[max(1vw,12px)]'>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                </div>
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            // cart-item-title cart-items-item
                            <div>
                                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1vw,12px)] my-[10px] mx-0 text-black'>
                                    <img src={url+"/images/"+item.image} alt='' className='w-14' />
                                    <p>{item.name}</p>
                                    <p>&#8377;{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>&#8377;{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>

                                </div>
                                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                            </div>
                        )
                    }
                })}
            </div>
            {/* cart-bottom */}
            <div className='mt-20 flex justify-between gap-[max(12vw,20px)] sm:flex-col-reverse'>
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
                        <hr className='my-[10px] mx-0'/>
                        <div className='flex justify-between text-[#555]'>
                            <b>Total</b>
                            <b>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')} className='border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 px-0 rounded cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>
                {/* cart-promocode */}
                <div className='flex-1 sm:justify-start '>
                    <div>
                        <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                        {/* cart-promocode-input */}
                        <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded'>
                            <input type='text' placeholder='Enter promocode' className='bg-transparent border-none outline-none pl-[10px]' />
                            <button className='w-[max(10vw,150px)] py-3 px-0 bg-black border-none text-white rounded'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
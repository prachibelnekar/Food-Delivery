import React, { useContext } from 'react';
import { Storecontext } from '../content/StoreContext.jsx';
import FoodItem from './FoodItem.jsx';


const FoodDisplay = ({category}) => {

    const{food_list} = useContext(Storecontext)
  return (
    <>
    {/* Food Display */}
    <div className='mt-[30px]'>
        <h2 className='text-[max(2vw,24px)] font-600'>Top dishesh near you</h2>
        {/* food-display-list */}
        <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[50px] '>
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description = {item.description} price={item.price} image={item.image}/>
                }
                
            })}
        </div>
    </div>
    </>
  )
}

export default FoodDisplay
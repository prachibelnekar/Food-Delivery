import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (

    <>
      {/* list add flex-col */}
      <div className='w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-[16px] flex flex-col gap-[10px]'>
        <p>All Foods List</p>
        {/* list-table */}
        <div className=''>
          {/* list-table-format title */}
          <div className='grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr]   items-center sm:gap-3 py-3 px-4 grid-cols-[1fr_3fr_1fr] gap-4 border border-[#cacaca] text-[13px] bg-[#f9f9f9] '>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
        </div>
        {list.map((item, index) => {
          return (
            <>
              {/* list-table-format */}
              <div key={index} className='grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr]  items-center sm:gap-3 py-3 px-4 grid-cols-[1fr_3fr_1fr] gap-4 border border-[#cacaca] text-[13px]'>
                <img src={`${url}/images/` + item.image} alt='' className='w-12 ' />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>&#8377;{item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>X</p>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default List
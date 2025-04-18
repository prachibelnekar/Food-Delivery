import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {

  

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`,formData)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }

  return (
    <>
      {/* add */}
      <div className='w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-[16px]'>
        {/* flex-col */}
        <form className='gap-5 flex flex-col' onSubmit={onSubmitHandler}>
          {/* add-img-upload flex-col */}
          <div className='flex flex-col gap-[10px]'>
            <p className=''>Upload Image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-32 cursor-pointer' />
            </label>
            {/* image */}
            <input id="image" onChange={(e) => setImage(e.target.files[0])} type='file' hidden required />
          </div>
          {/* add-product-name flex-col */}
          <div className='flex flex-col gap-[10px] w-[max(40%,280px)]'>
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Write Product name" className='p-3' />
          </div>
          {/* add-product-description flex-col */}
          <div className=''>
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write description here' className='p-3 w-[max(40%,280px)]'></textarea>
          </div>
          {/* add-category-price */}
          <div className='flex gap-8'>
            {/* add-category flex-col */}
            <div className='flex flex-col gap-[10px]'>
              <p>Product Category</p>
              <select name="category" className='max-w-32 p-3' onChange={onChangeHandler} value={data.category}>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwitch">Sandwitch</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            {/* add-price flex-col */}
            <div className='flex flex-col gap-[10px]'>
              <p>Product price</p>
              <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="Enter Product price" className='max-w-32 p-3' />
            </div>
          </div>
          {/* add btn */}
          <button type='submit' className='max-w-32 border-none p-3 bg-black text-white cursor-pointer'>ADD</button>
        </form>
      </div>
    </>
  )
}

export default Add
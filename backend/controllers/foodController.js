import foodModel from "../models/foodModel.js";
import fs from 'fs';
import foodRouter from "../routes/foodRoute.js";

// add food item

const addFood = async(req,res) =>{
    let image_filename = `${req.file.filename}`;


    // Add food item
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price: req.body.price,
        category:req.body.category,
        image: image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


// All food list

const listFood = async(req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
}
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id); // Corrected method name
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        fs.unlink(`uploads/${food.image}`, () => {});  // Delete the food image file

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export {addFood,listFood,removeFood}
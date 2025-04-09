import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},   //So for whenever we enter the String data it supposed to be something not null
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true},
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;
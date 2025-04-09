import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Prachi:Mongo1343@cluster0.4tpma.mongodb.net/Food_Delivery').then(()=>console.log("DB Connected"));
}
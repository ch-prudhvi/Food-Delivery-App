import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://chuttiprudhvi007_db_user:9849896590@cluster0.oahr2od.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
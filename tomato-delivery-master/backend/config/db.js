import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vaseekaranm32:aoterenvasee@cluster0.zjly1ls.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}
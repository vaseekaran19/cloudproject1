import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shailesh:shailesh@cluster0.mo6gm.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}

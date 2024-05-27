import mongoose from "mongoose";

export const userModel= new mongoose.Schema({
  name: { type: "String", required: true },
  lastname: { type: "String", required: true },
  email: { type: "String", unique: true, required: true},
  phonenumber: { type: Number, required: true},
  password: { type: "String", required: true }
  
})

export default mongoose.model("user",userModel)

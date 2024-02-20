import mongoose from "mongoose";
// Database Schema...
const Schema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
    select:false,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    select:false,
  },
  createdAt:{
     type: Date,
      required: true, 
      default: Date.now 
  },
});
//Database Model...
export const User = mongoose.model("User", Schema);

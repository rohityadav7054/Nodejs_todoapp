import mongoose from "mongoose";
// Database Schema...
const Schema = new mongoose.Schema({
  title: String,
  description:{
    type:String,
    unique:true,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
    select:false,
  },
  isCompleted:{
    type:Boolean,
    default:false,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  createdAt: { 
    type: Date, 
    default: Date.now, 
    required: true },
});
//Database Model...
export const Task = mongoose.model("task", Schema);

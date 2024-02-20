import bcrypt from "bcrypt";
import { User } from "../models/model.js";

import { sendcookie } from "../utils/features.js";
import ErrorHandler from "../Middleware/error.js";
export const getAllUsers = async (req, res) => {};
//==================================================================================

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
    .select("+password ")
    .select("name");
    if(!user) return next(new ErrorHandler("Invalid Email or password ",400));
  
    

  const isMatach = await bcrypt.compare(password, user.password);
  
    if(!isMatach) return next(new ErrorHandler("Invalid Email or password ",400));

  sendcookie(user, res, `Welcome back,${user.name}`, 200);
};
//=================================================================================
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let existingUser = await User.findOne({ email });

 if(existingUser) return next(new ErrorHandler("User Already Exist",400));

  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashpassword });
  sendcookie(newUser, res, "Register successfully", 201);
};
//==================================================================================
export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user:req.user,
  });
};
//===================================================================================

export const logout =  (req,res)=>{
res
.status(200)
.cookie("token","",
{expires:new Date(Date.now()),
  sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
  secure:process.env.NODE_ENV==="Development"?false:true
})
.json({
  success:true,
  user:req.user,
})
}
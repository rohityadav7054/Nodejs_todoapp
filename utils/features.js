import  jwt  from "jsonwebtoken";
export const sendcookie = (newUser,res,message,statuscode=200) => {
  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
  res
    .status(statuscode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
      secure:process.env.NODE_ENV==="Development"?false:true
    })
    .json({
      success: true,
      message,
    });
};

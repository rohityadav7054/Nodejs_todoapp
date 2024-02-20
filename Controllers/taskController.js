import ErrorHandler from "../Middleware/error.js";
import { Task } from "../models/task.js";


//=======================   ADD NEW TASK========================== 
export const newTask = async (req, res, next) => {
 try {
    const { title, description } = req.body;
    await Task.create({
      title,
      description,
      user: req.user,
    });
    console.log(req.user);
    res.status(201).json({
      success: true,
      message: "Task added successfully",
    });
 } catch (error) {
    next(error)
 }
};

//==================== GET TASK=================================
export const getMyTask = async (req, res, next) => {
 try {
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });
    res.status(200).json({
      success: true,
      tasks,
    });
 } catch (error) {
    next(error)
 }
};

//========================= UPDATED TASK============================
export const updateMyTask = async (req, res, next) => {
 try {
    const { id } = req.params;
    const task = await Task.findById(id);
    
  if(!task) return next(new Error("task is found"))
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      success: true,
      message: "Task Updated !",
    });
 } catch (error) {
    next(error)
 }
};

//======================= DELETE TASK ====================================
export const deleteMyTask = async (req, res, next) => {
try {
    const {id}=req.params;    
const task = await Task.findById(id); 
if(!task) return next(new ErrorHandler("Task is Found",404));
await task.deleteOne();
  res.status(200).json({
    success: true,
    message:"delete task successfully"
  });
} catch (error) {
    next(error)
}
};

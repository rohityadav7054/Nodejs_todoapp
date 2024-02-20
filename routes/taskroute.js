import express from 'express';
import { deleteMyTask, getMyTask, newTask, updateMyTask } from '../Controllers/taskController.js';
import { isAuthenticated } from '../Middleware/auth.js';

const taskRouter=express.Router();
taskRouter.post("/new",isAuthenticated,newTask)
taskRouter.get("/mytask",isAuthenticated,getMyTask)
taskRouter.route("/:id").put(isAuthenticated,updateMyTask).delete(isAuthenticated,deleteMyTask)
export default taskRouter;
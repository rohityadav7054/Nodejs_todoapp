import Express from "express";
import { getAllUsers, getMyProfile, login, logout, register} from "../Controllers/controller.js";
import { isAuthenticated } from "../Middleware/auth.js";
const userRouter = Express.Router();

userRouter.get("/all", getAllUsers);

userRouter.post("/new",register);
userRouter.post("/login",login)
userRouter.get("/logout",logout)

userRouter.get("/me",isAuthenticated, getMyProfile);

export default userRouter;

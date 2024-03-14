import {Router} from "express"
import UserController from "../controllers/UserController.js";

const UserRouter = Router()
UserRouter.post("/add", UserController.AddUser)
UserRouter.post("/get", UserController.GetUser)
UserRouter.post("/delete", UserController.DeleteUser)

export default UserRouter
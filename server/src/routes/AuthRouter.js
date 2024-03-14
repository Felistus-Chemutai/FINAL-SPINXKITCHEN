import { Router } from "express";

import AuthCountroller from "../controllers/AuthCountroller.js";

const AuthRouter = Router();

AuthRouter.post("/auth/register", AuthCountroller.Register);
AuthRouter.post("/auth/login", AuthCountroller.Login);

export default AuthRouter;
